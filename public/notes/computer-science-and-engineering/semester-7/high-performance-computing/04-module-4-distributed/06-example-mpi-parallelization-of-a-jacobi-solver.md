---
title: "Example- MPI parallelization of a Jacobi solver"
subject: "HIGH PERFORMANCE COMPUTING"
module: "Module 4: Distributed"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c638"
status: "completed"
scrapedAt: "2026-05-20T17:07:21.150Z"
---
# HIGH PERFORMANCE COMPUTING - Module 4: Distributed

## Topic: MPI Parallelization of a Jacobi Solver

---

### **1. Introduction to the Jacobi Solver**

*   **What is the Jacobi Solver?**
    *   A simple iterative method for solving systems of linear equations, typically arising from the discretization of partial differential equations (PDEs).
    *   It's an **over-relaxation** method, meaning it updates each variable in the system using the values from the previous iteration.
*   **How it Works (Conceptual Overview):**
    *   Given a system of linear equations $Ax = b$, where $A$ is a square matrix, $x$ is the vector of unknowns, and $b$ is the right-hand side vector.
    *   The Jacobi method rewrites the equation for each unknown $x_i$ as:
        $$x_i^{(k+1)} = \frac{1}{a_{ii}} \left( b_i - \sum_{j \neq i} a_{ij} x_j^{(k)} \right)$$
        where:
        *   $x_i^{(k)}$ is the value of the $i$-th unknown at iteration $k$.
        *   $a_{ij}$ are the elements of matrix $A$.
        *   $b_i$ are the elements of vector $b$.
    *   The key aspect is that all updates for iteration $k+1$ are calculated using *only* values from iteration $k$. This makes it inherently parallelizable.
*   **Convergence:**
    *   The Jacobi method is guaranteed to converge if the matrix $A$ is **diagonally dominant**, meaning the absolute value of the diagonal element in each row is greater than the sum of the absolute values of the other elements in that row.
    *   Convergence is checked by comparing the difference between successive iterations.

### **2. Why Parallelize the Jacobi Solver?**

*   **Computational Cost:** For large systems of equations, the iterative nature of the Jacobi solver can be computationally expensive.
*   **Scalability:** Parallelization allows us to distribute the workload across multiple processors or nodes, significantly reducing the overall computation time and enabling the solution of larger problems.
*   **Memory Requirements:** For very large matrices, storing the entire matrix and vectors might exceed the memory capacity of a single machine. Distributed memory systems allow for partitioning data across multiple nodes.

### **3. MPI: The Message Passing Interface**

*   **What is MPI?**
    *   A standardized library of routines for message-passing, designed for parallel computing across multiple processes.
    *   It provides functions for sending and receiving data between processes, managing communicators, and querying process ranks and sizes.
*   **Key MPI Concepts:**
    *   **Processes:** Independent units of execution. In MPI, we typically launch multiple processes, each running a copy of our program.
    *   **Communicator:** A group of processes that can communicate with each other. `MPI_COMM_WORLD` is the default communicator, encompassing all processes.
    *   **Rank:** A unique integer identifier for each process within a communicator, ranging from 0 to `size - 1`.
    *   **Point-to-Point Communication:** Sending a message from one specific process to another specific process.
        *   `MPI_Send`: Sends a message.
        *   `MPI_Recv`: Receives a message.
    *   **Collective Communication:** Operations involving all processes in a communicator.
        *   `MPI_Bcast`: Broadcasts a message from one process to all others.
        *   `MPI_Reduce`: Combines data from all processes into a single result on a designated process.
        *   `MPI_Allreduce`: Similar to `MPI_Reduce` but distributes the result to all processes.
        *   `MPI_Scatter`: Distributes data from one process to all others.
        *   `MPI_Gather`: Gathers data from all processes onto one process.

### **4. MPI Parallelization Strategy for the Jacobi Solver**

The core idea is to divide the matrix and the unknown vector among the available processes and have each process compute its assigned portion of the next iteration's values.

*   **Data Distribution:**
    *   The most common approach for Jacobi is to distribute the matrix and vectors **row-wise**.
    *   Each process is responsible for a contiguous block of rows of the matrix and a corresponding block of elements in the unknown vector.
*   **Parallel Computation of a Single Iteration:**
    1.  **Local Computation:** Each process calculates its local portion of the updated unknown vector. This involves accessing its local matrix rows and the *previous iteration's* values of the unknown vector.
    2.  **Communication:** To compute the $\sum_{j \neq i} a_{ij} x_j^{(k)}$ term for a given row $i$, a process needs the values of $x_j^{(k)}$ for all $j$ across *all* rows. Since data is distributed, this requires communication.
        *   **Broadcast Approach:** The simplest approach is for each process to **broadcast** its entire local block of the unknown vector from the previous iteration. All processes receive all values, allowing them to perform the full summation. This is straightforward but can be inefficient due to redundant data transfer.
        *   **Gather/Scatter Approach (More Efficient):**
            *   Each process computes its local values for the $\sum_{j \neq i} a_{ij} x_j^{(k)}$ term.
            *   Use `MPI_Allgather` or a combination of `MPI_Gather` and `MPI_Bcast` to collect the necessary `x_j^{(k)}$ values from other processes so each process has the full vector required for computation.
            *   Alternatively, for each row $i$, a process needs all $x_j^{(k)}$. If process $P_p$ owns row $i$, it needs $x_j^{(k)}$ for all $j$. This can be achieved by a carefully orchestrated exchange of data.
*   **Convergence Check:**
    *   After each iteration, each process calculates its local error (e.g., the sum of absolute differences between $x_i^{(k+1)}$ and $x_i^{(k)}$ for its assigned rows).
    *   These local errors are then aggregated using `MPI_Allreduce` (with `MPI_SUM` or `MPI_MAX` operation) to get the global error.
    *   If the global error is below a predefined tolerance, the computation stops.
*   **Updating Vectors:** After all processes have computed their new values for the unknown vector (let's call it `x_new`), this new vector becomes the `x` for the next iteration.

### **5. Example: MPI Parallelization of Jacobi (2D Heat Equation Discretization)**

Let's consider discretizing a 2D heat equation on a rectangular grid using finite differences. The Jacobi method is often used to solve the resulting sparse linear system.

**Problem:** Solve for the temperature distribution $T(x, y)$ on a 2D grid.
The discretized equation for an internal grid point $(i, j)$ is:
$$T_{i,j}^{(k+1)} = \frac{1}{4} \left( T_{i-1,j}^{(k)} + T_{i+1,j}^{(k)} + T_{i,j-1}^{(k)} + T_{i,j+1}^{(k)} \right)$$
This assumes a uniform grid spacing and the boundary conditions are applied implicitly.

**MPI Parallelization Strategy:**

*   **Grid Decomposition:** The 2D grid is divided among the MPI processes. A common strategy is a 2D Cartesian topology. If we have `P` processes, we might arrange them in an `Nx` by `Ny` grid such that `Nx * Ny = P`.
*   **Data Ownership:** Each process owns a subgrid (a block of grid points).
*   **Communication:** To calculate the new temperature for a point on the boundary of its subgrid, a process needs temperature values from its neighboring processes (ghost cells).
    *   For example, a process calculating its left boundary needs temperature values from the right boundary of the process to its left.
    *   This involves **point-to-point communication** (MPI_Send/MPI_Recv) to exchange boundary data (ghost cells).
*   **Iteration Loop:**
    1.  **Copy Current State:** `T_old = T_current`.
    2.  **Exchange Ghost Cells:**
        *   Each process sends its boundary values to its neighbors.
        *   Each process receives boundary values from its neighbors.
    3.  **Compute Interior Points:** For grid points owned by the process that are *not* on the boundary of its subgrid, compute the new temperature using `T_old`.
    4.  **Compute Boundary Points:** For grid points on the boundary of its subgrid, compute the new temperature using the newly received ghost cell values (which represent `T_old` values from neighbors).
    5.  **Calculate Local Error:** Compute the difference between `T_current` and `T_old` for owned points.
    6.  **Global Error Calculation:** Use `MPI_Allreduce` to sum the absolute differences across all processes.
    7.  **Check Convergence:** If the global error is below tolerance, terminate. Otherwise, repeat.

**Code Structure (Conceptual):**

```c++
#include <mpi.h>
#include <vector>
#include <cmath>

// ... MPI initialization ...

// Assume grid is decomposed into a 2D Cartesian topology
// Each process owns a subgrid and has neighboring processes.
// ghost_cells_left, ghost_cells_right, etc. are data buffers.

int main(int argc, char** argv) {
    MPI_Init(&argc, &argv);

    int rank, size;
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);
    MPI_Comm_size(MPI_COMM_WORLD, &size);

    // --- Setup: Grid size, subgrid dimensions, data structures ---
    int global_grid_size_x = 100;
    int global_grid_size_y = 100;
    // Assume Nx, Ny for Cartesian topology such that Nx*Ny == size
    int proc_grid_dims[2] = {Nx, Ny};
    int proc_coords[2];
    MPI_Comm cart_comm;
    int periods[2] = {0, 0}; // Non-periodic boundaries for simplicity
    MPI_Cart_create(MPI_COMM_WORLD, 2, proc_grid_dims, periods, 1, &cart_comm);
    MPI_Cart_coords(cart_comm, rank, 2, proc_coords);

    // Determine local grid dimensions and offsets based on proc_coords and global_grid_size
    int local_grid_size_x = global_grid_size_x / Nx;
    int local_grid_size_y = global_grid_size_y / Ny;
    int start_row = proc_coords[0] * local_grid_size_x;
    int start_col = proc_coords[1] * local_grid_size_y;

    // Local data for the grid (including ghost cells)
    // Need buffers for current and old values, and ghost cells for communication
    std::vector<double> T_current_local( (local_grid_size_x + 2) * (local_grid_size_y + 2) ); // Including ghost cells
    std::vector<double> T_old_local( (local_grid_size_x + 2) * (local_grid_size_y + 2) );

    // Initialize local grid data (e.g., set boundary conditions, initial guess)
    // ... initialization ...

    double tolerance = 1e-6;
    double global_error = tolerance + 1.0; // Ensure at least one iteration
    int max_iterations = 1000;
    int iteration = 0;

    while (global_error > tolerance && iteration < max_iterations) {
        // 1. Copy current to old
        T_old_local = T_current_local;

        // 2. Exchange Ghost Cells (MPI Point-to-Point or Neighbor Exchange)
        //    Need to identify neighbors using MPI_Cart_shift
        int neighbor_rank_up, neighbor_rank_down, neighbor_rank_left, neighbor_rank_right;
        MPI_Cart_shift(cart_comm, 0, 1, &neighbor_rank_up, &neighbor_rank_down); // Shift along rows (y-axis)
        MPI_Cart_shift(cart_comm, 1, 1, &neighbor_rank_left, &neighbor_rank_right); // Shift along columns (x-axis)

        // Send/Recv with neighbor_rank_down (bottom boundary sends to neighbor above)
        if (neighbor_rank_up != MPI_PROC_NULL) {
            MPI_Send( &T_old_local[1 * (local_grid_size_y + 2) ], local_grid_size_y, MPI_DOUBLE, neighbor_rank_up, 0, cart_comm);
            MPI_Recv( &T_current_local[0 * (local_grid_size_y + 2) ], local_grid_size_y, MPI_DOUBLE, neighbor_rank_up, 0, cart_comm, MPI_STATUS_IGNORE);
        }
        // Send/Recv with neighbor_rank_up (top boundary sends to neighbor below)
        if (neighbor_rank_down != MPI_PROC_NULL) {
            MPI_Send( &T_old_local[ (local_grid_size_x) * (local_grid_size_y + 2) ], local_grid_size_y, MPI_DOUBLE, neighbor_rank_down, 0, cart_comm);
            MPI_Recv( &T_current_local[ (local_grid_size_x + 1) * (local_grid_size_y + 2) ], local_grid_size_y, MPI_DOUBLE, neighbor_rank_down, 0, cart_comm, MPI_STATUS_IGNORE);
        }
        // Similar logic for left/right neighbors (MPI_Cart_shift dimension 1)
        // ... (send/recv for left/right neighbors) ...

        // 3. Compute Local Interior and Boundary Points
        double local_error_sum = 0.0;
        for (int i = 1; i <= local_grid_size_x; ++i) { // Iterate over owned rows (excluding ghost cells)
            for (int j = 1; j <= local_grid_size_y; ++j) { // Iterate over owned cols (excluding ghost cells)
                // Jacobi update formula using T_old (which includes ghost cell values from neighbors)
                T_current_local[i * (local_grid_size_y + 2) + j] = 0.25 * (
                    T_old_local[(i-1) * (local_grid_size_y + 2) + j] +     // Top neighbor (from ghost cell or own data)
                    T_old_local[(i+1) * (local_grid_size_y + 2) + j] +     // Bottom neighbor (from ghost cell or own data)
                    T_old_local[i * (local_grid_size_y + 2) + (j-1)] +     // Left neighbor (from ghost cell or own data)
                    T_old_local[i * (local_grid_size_y + 2) + (j+1)]      // Right neighbor (from ghost cell or own data)
                );
                // Accumulate local error
                local_error_sum += std::abs(T_current_local[i * (local_grid_size_y + 2) + j] - T_old_local[i * (local_grid_size_y + 2) + j]);
            }
        }

        // 4. Global Error Calculation
        MPI_Allreduce(&local_error_sum, &global_error, 1, MPI_DOUBLE, MPI_SUM, cart_comm);
        global_error = std::sqrt(global_error); // Typically use RMS error or sum of abs diff

        iteration++;
    }

    // --- Finalization: Optional gathering of results, MPI_Finalize ---
    // ...

    MPI_Finalize();
    return 0;
}
```

**Important Notes on the Example:**

*   **Ghost Cells:** The `+2` in the local grid size is crucial for accommodating ghost cells on each side. For a `local_grid_size_x` x `local_grid_size_y` owned grid, we need `local_grid_size_x` rows and `local_grid_size_y` columns for actual data. The extra row/column on each side stores values received from neighbors.
*   **Indexing:** The indexing `i * (local_grid_size_y + 2) + j` is for a 2D array stored linearly in C++. Remember that the actual owned data is from `i=1` to `local_grid_size_x` and `j=1` to `local_grid_size_y`. Ghost cells occupy `i=0`, `i=local_grid_size_x+1`, `j=0`, and `j=local_grid_size_y+1`.
*   **MPI_Cart_shift:** This is a convenient MPI routine for getting the ranks of neighbors in a Cartesian topology. `MPI_PROC_NULL` indicates no neighbor in that direction (e.g., on the edge of the global grid).
*   **MPI_Allreduce:** This is used to aggregate the local error sums from all processes into a single global error, which is then available on all processes.

### **6. Learning Outcomes Covered**

*   **Understanding the Jacobi solver:** Its iterative nature, update formula, and convergence criteria are explained.
*   **Motivation for Parallelization:** The computational cost and scalability benefits are highlighted.
*   **MPI Fundamentals for Distributed Computing:** Key concepts like processes, ranks, communicators, point-to-point, and collective communication are introduced.
*   **MPI Parallelization Strategy for Jacobi:**
    *   **Data Distribution:** Row-wise or 2D grid decomposition is discussed.
    *   **Computational Approach:** How to parallelize the update step, including the need for communication.
    *   **Communication Patterns:** The roles of `MPI_Send`/`MPI_Recv` (for ghost cells) and `MPI_Allreduce` (for convergence) are explained.
*   **Example: MPI Jacobi Solver for 2D Heat Equation:** A concrete example illustrates the practical implementation using MPI, including Cartesian topologies, ghost cells, and the interaction between local computation and communication.

---

### **7. Key Concepts and Definitions Recap**

*   **Jacobi Method:** Iterative linear solver, uses previous iteration's values.
*   **Diagonally Dominant Matrix:** Condition for Jacobi convergence.
*   **MPI:** Message Passing Interface standard for distributed memory.
*   **Process:** Independent execution unit.
*   **Rank:** Unique ID (0 to size-1) within a communicator.
*   **Communicator:** Group of processes for communication.
*   **Point-to-Point:** `MPI_Send`, `MPI_Recv` (one-to-one).
*   **Collective Communication:** `MPI_Bcast`, `MPI_Allreduce`, `MPI_Gather`, `MPI_Scatter` (many-to-many or one-to-many).
*   **Data Distribution:** Row-wise decomposition is common.
*   **Ghost Cells:** Buffer regions for storing data received from neighboring processes.
*   **Cartesian Topology:** Organizes processes in a multi-dimensional grid.
*   **Convergence Check:** Aggregating local errors to a global error.

---

### **8. Practice Questions and Exercises**

**Question 1:**
Explain the fundamental difference between the Jacobi method and the Gauss-Seidel method in terms of how they use values from the current iteration. Why does this difference make Jacobi more straightforward to parallelize?

**Answer:**
The Jacobi method uses *only* values from the previous iteration ($k$) to compute all values for the current iteration ($k+1$). In contrast, the Gauss-Seidel method uses the most recently computed values within the *same* iteration ($k+1$) as they become available. This sequential dependency in Gauss-Seidel makes it harder to parallelize directly, as later computations rely on earlier ones within the same iteration. Jacobi's reliance on a single, static set of previous values makes it inherently parallelizable as all calculations for iteration $k+1$ can be performed independently, provided all necessary $x_j^{(k)}$ values are available.

---

**Question 2:**
Describe two common strategies for distributing data (matrix and vectors) among processes when parallelizing a Jacobi solver for a large system of linear equations. What are the trade-offs?

**Answer:**
1.  **Row-wise Decomposition:** Each process is responsible for a contiguous block of rows of the matrix and corresponding elements of the vectors.
    *   **Trade-offs:**
        *   **Simplicity:** Easy to implement, especially for vector-heavy computations.
        *   **Communication:** To compute $x_i^{(k+1)}$, a process needs access to all $x_j^{(k)}$. If the matrix is dense, this requires significant communication (e.g., broadcasting the entire vector or using gather/scatter operations). If the matrix is sparse, communication might be localized depending on the sparsity pattern.
2.  **2D Grid Decomposition (for matrices arising from PDEs):** The matrix is viewed as a 2D grid, and processes are arranged in a 2D Cartesian topology. Each process owns a subgrid of the matrix and vectors.
    *   **Trade-offs:**
        *   **Locality:** Often leads to better data locality and reduced communication volume for stencil-like operations (like the 2D heat equation example), as each process primarily needs data from immediate neighbors.
        *   **Complexity:** Implementation is more complex due to managing 2D topology and ghost cells for neighboring processes.

---

**Question 3:**
Consider a Jacobi solver parallelized using MPI where each process handles a block of rows. To compute the next iteration's values, each process needs the full vector of unknowns from the previous iteration. Which MPI collective communication operation is most suitable for efficiently distributing this vector from a root process to all other processes?

**Answer:**
The most suitable MPI collective communication operation is `MPI_Bcast` (Broadcast). This operation efficiently sends a message from a single "root" process to all other processes in a communicator. In this scenario, one process (e.g., rank 0) would hold the complete vector from the previous iteration and broadcast it to all other processes, allowing each to perform its local computations.

---

**Question 4:**
Imagine you have parallelized a Jacobi solver using MPI, and each process computes a local sum of absolute differences to check for convergence. How would you combine these local sums into a single global sum on all processes to determine if the overall solution has converged? Which MPI collective operation should you use?

**Answer:**
You should use the `MPI_Allreduce` collective communication operation.
*   **Operation:** `MPI_SUM` would be used to sum the local error values.
*   **Result:** `MPI_Allreduce` performs a reduction operation (like summation) across all processes and then broadcasts the final result to all processes. This ensures every process has the global error value to check against the tolerance.

---

### **9. Important Points to Remember**

*   **Jacobi's Parallelism:** The core strength of Jacobi for parallelization lies in its update formula, which uses only values from the *previous* iteration.
*   **Communication is Key:** Efficiently distributing the necessary data from other processes is the main challenge in parallelizing Jacobi.
*   **Ghost Cells (for PDE-based problems):** When decomposing grids for problems like the heat equation, ghost cells are essential for storing received boundary data from neighbors.
*   **MPI Collectives:** `MPI_Bcast` and `MPI_Allreduce` are vital for efficient data distribution and global convergence checks, respectively.
*   **Data Dependency:** Always be mindful of data dependencies. For Jacobi, the dependency is only across iterations, not within an iteration.
*   **Load Balancing:** Ensure that the workload (number of rows/grid points) is distributed as evenly as possible among processes for optimal performance. This is often handled by the grid decomposition strategy.
*   **Starting Point:** The root process (often rank 0) usually initializes the problem and might be responsible for broadcasting initial conditions or gathering final results.

---
