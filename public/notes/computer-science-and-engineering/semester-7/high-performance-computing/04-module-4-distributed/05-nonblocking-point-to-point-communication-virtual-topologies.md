---
title: "Nonblocking point-to-point communication, Virtual topologies"
subject: "HIGH PERFORMANCE COMPUTING"
module: "Module 4: Distributed"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c637"
status: "completed"
scrapedAt: "2026-05-20T17:07:20.445Z"
---
# HIGH PERFORMANCE COMPUTING - Module 4: Distributed

## Topic: Nonblocking Point-to-Point Communication & Virtual Topologies

---

### Learning Outcomes:

*   **Understand the necessity and benefits of nonblocking point-to-point communication.**
*   **Differentiate between blocking and nonblocking communication.**
*   **Learn how to use MPI nonblocking send and receive functions.**
*   **Understand the concept of MPI request objects.**
*   **Learn about the different types of MPI virtual topologies.**
*   **Understand the advantages of using virtual topologies.**
*   **Learn how to create and query MPI virtual topologies.**

---

### 1. Nonblocking Point-to-Point Communication

#### 1.1 Introduction to Blocking vs. Nonblocking Communication

In distributed computing, processes communicate by sending and receiving messages. The way these operations are handled impacts the overall efficiency and performance of the application.

*   **Blocking Communication:**
    *   A communication operation (send or receive) **does not return** until the operation is **complete**.
    *   **Send:** A blocking send typically returns when the message buffer can be reused. This might mean the message has been copied to a system buffer or has been delivered to the destination process.
    *   **Receive:** A blocking receive returns when a message has been successfully received into the destination buffer.
    *   **Pros:** Simpler to reason about.
    *   **Cons:** Can lead to idle time if the sender or receiver has to wait unnecessarily, potentially causing deadlocks.

*   **Nonblocking Communication:**
    *   A communication operation **returns immediately** after initiating the operation, allowing the calling process to perform other work while the communication proceeds in the background.
    *   The operation's completion is managed through a separate mechanism.
    *   **Pros:**
        *   **Overlap computation and communication:** Allows processes to perform useful work while messages are being sent or received.
        *   **Reduces idle time:** Avoids waiting for the entire communication to finish before proceeding.
        *   **Can help avoid deadlocks:** By initiating multiple operations and then waiting for them, you can break potential circular dependencies.
    *   **Cons:** More complex to manage as you need to explicitly check for completion.

#### 1.2 MPI Nonblocking Point-to-Point Functions

MPI provides a set of nonblocking functions for point-to-point communication. These functions initiate an operation and return immediately, providing an **MPI Request object**. This object acts as a handle to track the status of the ongoing operation.

**Key Nonblocking Functions:**

*   `MPI_Isend(buf, count, datatype, dest, tag, comm, request)`: **I**nitiates a **s**end.
    *   `buf`: Pointer to the send buffer.
    *   `count`: Number of elements in the buffer.
    *   `datatype`: MPI data type of elements.
    *   `dest`: Rank of the destination process.
    *   `tag`: Message tag.
    *   `comm`: Communicator.
    *   `request`: **Output** parameter, pointer to an MPI Request object.

*   `MPI_Irecv(buf, count, datatype, source, tag, comm, request)`: **I**nitiates a **recv**eive.
    *   `buf`: Pointer to the receive buffer.
    *   `count`: Maximum number of elements to receive.
    *   `datatype`: MPI data type of elements.
    *   `source`: Rank of the source process.
    *   `tag`: Message tag.
    *   `comm`: Communicator.
    *   `request`: **Output** parameter, pointer to an MPI Request object.

*   `MPI_Wait(request, status)`: **Waits** for a single communication operation identified by `request` to complete.
    *   `request`: Pointer to the MPI Request object.
    *   `status`: **Output** parameter, MPI Status object containing information about the completed operation (e.g., sender, tag).

*   `MPI_Test(request, flag, status)`: **Tests** for the completion of a communication operation without blocking.
    *   `request`: Pointer to the MPI Request object.
    *   `flag`: **Output** parameter, boolean value: `true` if the operation is complete, `false` otherwise.
    *   `status`: **Output** parameter, MPI Status object if `flag` is `true`.

*   `MPI_Waitany(count, requests, index, status)`: Waits for **any** of a set of operations to complete.
    *   `count`: Number of requests in the array.
    *   `requests`: Array of MPI Request objects.
    *   `index`: **Output** parameter, the index of the request in the `requests` array that completed.
    *   `status`: **Output** parameter, MPI Status object for the completed operation.

*   `MPI_Testany(count, requests, index, flag, status)`: Tests for completion of **any** of a set of operations without blocking.

*   `MPI_Waitall(count, requests, statuses)`: Waits for **all** of a set of operations to complete.
    *   `count`: Number of requests in the array.
    *   `requests`: Array of MPI Request objects.
    *   `statuses`: Array of MPI Status objects for all completed operations.

*   `MPI_Testall(count, requests, statuses)`: Tests for completion of **all** of a set of operations without blocking.

*   `MPI_Waitsome(incount, requests, outcount, indices, statuses)`: Waits for **some** (at least one, up to `incount`) of a set of operations to complete.

*   `MPI_Testsome(incount, requests, outcount, indices, statuses)`: Tests for completion of **some** of a set of operations without blocking.

#### 1.3 MPI Request Objects and Status

*   **MPI Request Object:**
    *   A handle returned by nonblocking communication functions.
    *   Used to check the status of the operation or wait for its completion.
    *   Once a request is used by `MPI_Wait` or `MPI_Test`, it can be considered "consumed" and should not be reused unless it has been re-initialized or another nonblocking operation is posted with it.
    *   Typically, you'll initialize an array of requests with `MPI_REQUEST_NULL` before posting nonblocking operations.

*   **MPI Status Object:**
    *   An object filled by `MPI_Wait`, `MPI_Test`, etc., upon completion of a communication.
    *   Contains information such as:
        *   `MPI_SOURCE`: The rank of the sender.
        *   `MPI_TAG`: The tag of the received message.
        *   `MPI_ERROR`: An error code if an error occurred.
        *   `MPI_ERROR_COUNT` (MPI-2): Number of elements received if the message was truncated.

#### 1.4 Example: Nonblocking Send and Receive

```c
#include <mpi.h>
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char** argv) {
    int rank, size;
    MPI_Init(&argc, &argv);
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);
    MPI_Comm_size(MPI_COMM_WORLD, &size);

    int data_to_send = 42;
    int received_data;
    MPI_Request send_request, recv_request;
    MPI_Status status;

    if (size < 2) {
        fprintf(stderr, "This program requires at least 2 processes.\n");
        MPI_Abort(MPI_COMM_WORLD, 1);
    }

    if (rank == 0) {
        // Rank 0 sends to Rank 1
        printf("Rank 0: Initiating nonblocking send of %d to Rank 1.\n", data_to_send);
        MPI_Isend(&data_to_send, 1, MPI_INT, 1, 0, MPI_COMM_WORLD, &send_request);

        // Rank 0 can do some work here while send is in progress...
        // For simplicity, we'll just wait.

        printf("Rank 0: Waiting for send to complete.\n");
        MPI_Wait(&send_request, &status);
        printf("Rank 0: Send completed.\n");

    } else if (rank == 1) {
        // Rank 1 receives from Rank 0
        printf("Rank 1: Initiating nonblocking receive from Rank 0.\n");
        MPI_Irecv(&received_data, 1, MPI_INT, 0, 0, MPI_COMM_WORLD, &recv_request);

        // Rank 1 can do some work here while receive is in progress...
        // For simplicity, we'll just wait.

        printf("Rank 1: Waiting for receive to complete.\n");
        MPI_Wait(&recv_request, &status);
        printf("Rank 1: Received %d from Rank 0.\n", received_data);
    }

    MPI_Finalize();
    return 0;
}
```

**Explanation:**

1.  `MPI_Isend` and `MPI_Irecv` are called to initiate the send and receive operations, respectively. They return immediately.
2.  `send_request` and `recv_request` are MPI Request objects that hold information about the ongoing operations.
3.  `MPI_Wait` is used to block until the specific `send_request` (for rank 0) or `recv_request` (for rank 1) is completed.
4.  The `status` object can be used to query details about the completed communication.

#### 1.5 Advanced Nonblocking Patterns

*   **Overlapping Communication and Computation:**
    The core benefit. You can post a receive, perform some computation, then wait for the receive to complete. Or, you can post a send, perform computation, and then wait for the send to complete.

*   **Using `MPI_Test`:**
    Instead of blocking with `MPI_Wait`, you can use `MPI_Test` in a loop to check for completion without halting progress. This is crucial for scenarios where a process needs to participate in multiple concurrent communication activities or react to the first message arriving from many possible sources.

    ```c
    // Example using MPI_Test in a loop
    MPI_Request reqs[2];
    MPI_Irecv(&data1, 1, MPI_INT, 0, 0, MPI_COMM_WORLD, &reqs[0]);
    MPI_Irecv(&data2, 1, MPI_INT, 1, 1, MPI_COMM_WORLD, &reqs[1]);

    int done = 0;
    while (!done) {
        // Do some computation
        // ...
        MPI_Test(&reqs[0], &done, MPI_STATUS_IGNORE); // Check first receive
        if (done) {
            printf("Received data1!\n");
            // If reqs[0] is done, we might want to post another receive or handle it.
            // For simplicity here, if first is done, we are done.
            break;
        }
        // We could also check reqs[1] or use MPI_Testany
    }
    ```

*   **Using `MPI_Waitany` / `MPI_Testany`:**
    Useful when a process is expecting messages from multiple sources and wants to process them as soon as they arrive, regardless of the order.

---

### 2. Virtual Topologies

#### 2.1 Introduction to Topologies

In distributed computing, the underlying physical network interconnecting processors can have various structures (e.g., a ring, a mesh, a torus, a fat-tree). MPI provides mechanisms to map processes onto these physical networks and to exploit their structure for efficient communication.

*   **Physical Topology:** The actual interconnection network of the hardware.
*   **Cartesian Topology:** A structured grid-like arrangement of processes, often used to map algorithms that operate on grids (e.g., stencil computations).
*   **Virtual Topology:** An abstraction layer that allows the programmer to define a logical arrangement of processes, independent of the underlying physical hardware. This logical arrangement can then be used to facilitate more efficient communication patterns.

#### 2.2 Why Use Virtual Topologies?

1.  **Algorithm Mapping:** Many scientific applications are naturally structured around grids or graphs. Virtual topologies allow you to map these algorithms directly onto a logical grid of processes, simplifying the code.
2.  **Optimized Communication:** By defining a logical topology, you can potentially optimize communication patterns. For example, if your application performs nearest-neighbor communication on a 2D grid, mapping processes to a Cartesian topology can map these logical neighbors to efficient physical communication paths.
3.  **Portability:** Virtual topologies provide a level of abstraction that can make your application more portable across different hardware architectures with different physical topologies. The MPI implementation handles the mapping from the virtual topology to the physical one.
4.  **Deadlock Avoidance:** Structured communication patterns enforced by topologies (like Cartesian) can help in avoiding deadlocks compared to arbitrary send/receive pairs.

#### 2.3 Types of MPI Virtual Topologies

MPI supports two main types of virtual topologies:

1.  **Cartesian Topologies:**
    *   Represent processes as points in a multi-dimensional grid.
    *   Ideal for applications that naturally operate on grids, such as:
        *   Finite difference methods
        *   Image processing
        *   Conformal mapping

    **Key Concepts:**
    *   **Dimensions:** The number of dimensions in the grid (e.g., 1D, 2D, 3D).
    *   **Sizes:** An array specifying the number of processes along each dimension.
    *   **Periods:** An array specifying whether the grid wraps around (periodic) or has boundaries (non-periodic) in each dimension.
    *   **Coordinates:** The indices of a process within the Cartesian grid.
    *   **Rank:** The global MPI rank of a process.

    **Key Functions:**
    *   `MPI_Cart_create(comm_old, ndims, nnodes, periods, reorder, comm_cart)`: Creates a Cartesian communicator.
        *   `comm_old`: The original communicator (e.g., `MPI_COMM_WORLD`).
        *   `ndims`: The number of dimensions for the new topology.
        *   `nnodes`: An array of size `ndims` specifying the number of processes in each dimension.
        *   `periods`: An array of size `ndims` specifying if the dimension is periodic.
        *   `reorder`: Boolean, if `true`, MPI will try to reorder processes to improve communication locality.
        *   `comm_cart`: **Output** parameter, the new Cartesian communicator.

    *   `MPI_Cart_get(comm_cart, maxdims, dims, periods, coords)`: Gets information about the Cartesian topology of a communicator.
        *   `comm_cart`: The Cartesian communicator.
        *   `maxdims`: Maximum number of dimensions allowed.
        *   `dims`: **Output** parameter, array to store dimensions.
        *   `periods`: **Output** parameter, array to store periodicity.
        *   `coords`: **Output** parameter, array to store the process's coordinates.

    *   `MPI_Cart_rank(comm_cart, coords, rank)`: Gets the rank of a process given its coordinates.
        *   `comm_cart`: The Cartesian communicator.
        *   `coords`: Array of coordinates.
        *   `rank`: **Output** parameter, the rank of the process at `coords`.

    *   `MPI_Cart_coords(comm_cart, rank, maxdims, coords)`: Gets the coordinates of a process given its rank.
        *   `comm_cart`: The Cartesian communicator.
        *   `rank`: The rank of the process.
        *   `maxdims`: Maximum number of dimensions allowed.
        *   `coords`: **Output** parameter, array to store coordinates.

    *   `MPI_Cart_shift(comm_cart, direction, disp, rank_source, rank_dest)`: Gets the ranks of neighbors in a given direction.
        *   `comm_cart`: The Cartesian communicator.
        *   `direction`: The dimension in which to find the neighbor.
        *   `disp`: The displacement (e.g., 1 for the next neighbor, -1 for the previous).
        *   `rank_source`: **Output** parameter, rank of the source neighbor (who sends to this process).
        *   `rank_dest`: **Output** parameter, rank of the destination neighbor (who receives from this process).
        *   If no neighbor exists in that direction (e.g., boundary of a non-periodic dimension), `MPI_PROC_NULL` is returned.

2.  **Graph Topologies (Less Common in MPI Standard, but a concept):**
    *   Represent processes as nodes in a graph, and communication paths as edges.
    *   Useful for irregular communication patterns or applications that map to general graphs (e.g., sparse matrix computations, social networks).
    *   MPI doesn't have a direct `MPI_Graph_create` function in the core standard for arbitrary graphs. Instead, you would often construct communication patterns using `MPI_Dist_graph_create` (MPI-2) or by manually managing communication based on a defined graph structure.

    **`MPI_Dist_graph_create` (MPI-2 and later):**
    *   Creates a communicator with a distributed graph topology.
    *   Allows processes to specify their outgoing edges (neighbors they send to) and incoming edges (neighbors that send to them).
    *   Useful for dynamic or irregular communication.

#### 2.4 Example: Cartesian Topology

Consider a 2x3 grid of processes.

```c
#include <mpi.h>
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char** argv) {
    int rank, size;
    MPI_Init(&argc, &argv);
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);
    MPI_Comm_size(MPI_COMM_WORLD, &size);

    int dims[2] = {2, 3}; // 2 rows, 3 columns
    int periods[2] = {0, 0}; // No wrap-around (non-periodic)
    int reorder = 1; // Allow MPI to reorder for potential optimization
    MPI_Comm cart_comm;
    int coords[2];
    int new_rank;

    // Create the Cartesian communicator
    MPI_Cart_create(MPI_COMM_WORLD, 2, dims, periods, reorder, &cart_comm);

    // Get the coordinates of the current process in the Cartesian grid
    MPI_Cart_get(cart_comm, 2, dims, periods, coords);

    // Get the rank of the process at coordinates (row, col)
    if (rank == 0) {
        int target_coords[2] = {1, 1}; // Process at row 1, column 1
        MPI_Cart_rank(cart_comm, target_coords, &new_rank);
        printf("Rank %d: My coordinates are (%d, %d). Rank at (1, 1) is %d.\n", rank, coords[0], coords[1], new_rank);
    } else if (rank == 3) { // Let's check rank 3 (coords (1,0))
        int target_rank = 3;
        MPI_Cart_coords(cart_comm, target_rank, 2, coords);
        printf("Rank %d: Coordinates for rank %d are (%d, %d).\n", rank, target_rank, coords[0], coords[1]);
    }

    // Find neighbors
    int up_neighbor, down_neighbor, left_neighbor, right_neighbor;

    // Find neighbor in the 'up' direction (dimension 0, displacement -1)
    MPI_Cart_shift(cart_comm, 0, -1, &up_neighbor, &down_neighbor);
    // Find neighbor in the 'left' direction (dimension 1, displacement -1)
    MPI_Cart_shift(cart_comm, 1, -1, &left_neighbor, &right_neighbor);

    printf("Rank %d (Coords: %d, %d): Up=%d, Down=%d, Left=%d, Right=%d\n",
           rank, coords[0], coords[1], up_neighbor, down_neighbor, left_neighbor, right_neighbor);

    // Example of communication with neighbors
    if (rank == 0) {
        int message = 123;
        printf("Rank 0 sending %d to its right neighbor (Rank %d).\n", message, right_neighbor);
        MPI_Send(&message, 1, MPI_INT, right_neighbor, 0, MPI_COMM_WORLD);
    } else if (rank == 1 && right_neighbor == 1) { // The process at (0,1) is rank 1
        int received_message;
        MPI_Recv(&received_message, 1, MPI_INT, 0, 0, MPI_COMM_WORLD, MPI_STATUS_IGNORE);
        printf("Rank 1 received %d from Rank 0.\n", received_message);
    }


    MPI_Comm_free(&cart_comm); // Free the Cartesian communicator when done
    MPI_Finalize();
    return 0;
}
```

**To run this example:**
Compile with `mpicc your_file.c -o your_file`
Run with `mpirun -np 6 ./your_file` (assuming your machine supports 6 processes)

**Expected Output (ranks and neighbors will vary slightly based on reordering):**

```
Rank 0: My coordinates are (0, 0). Rank at (1, 1) is 4.
Rank 3: Coordinates for rank 3 are (1, 0).
Rank 0 (Coords: 0, 0): Up=-1, Down=3, Left=-1, Right=1
Rank 1 (Coords: 0, 1): Up=-1, Down=4, Left=0, Right=2
Rank 2 (Coords: 0, 2): Up=-1, Down=5, Left=1, Right=-1
Rank 3 (Coords: 1, 0): Up=0, Down=-1, Left=-1, Right=4
Rank 4 (Coords: 1, 1): Up=1, Down=-1, Left=3, Right=5
Rank 5 (Coords: 1, 2): Up=2, Down=-1, Left=4, Right=-1
Rank 0 sending 123 to its right neighbor (Rank 1).
Rank 1 received 123 from Rank 0.
```

**Note:** The exact mapping of ranks to coordinates and neighbor ranks might differ if `reorder` is true and MPI chooses a different ordering. `MPI_PROC_NULL` indicates no neighbor in that direction.

#### 2.5 Important Points to Remember

*   **Nonblocking is Key for Performance:** Always consider nonblocking operations for communication that can be overlapped with computation.
*   **Requests Must Be Handled:** Nonblocking operations return requests that *must* be managed using `MPI_Wait` or `MPI_Test` (or their variants) to ensure completion and buffer reuse.
*   **`MPI_REQUEST_NULL`:** Use `MPI_Request_null` to initialize request arrays or represent no pending operation.
*   **Topologies Simplify Code:** For grid-based algorithms, Cartesian topologies make it much easier to manage neighbor communication.
*   **`MPI_Cart_shift` is Your Friend:** Use `MPI_Cart_shift` to get neighbor ranks for common grid-based communication.
*   **`MPI_PROC_NULL`:** Be prepared to handle `MPI_PROC_NULL` when dealing with boundaries of non-periodic Cartesian dimensions.
*   **Communicate Topology Information:** If processes need to know the topology or neighbor information, you'll need to use MPI functions to query it (`MPI_Cart_get`, `MPI_Cart_coords`, `MPI_Cart_rank`, `MPI_Cart_shift`).

---

### Practice Questions and Exercises

**Section 1: Nonblocking Communication**

1.  **Question:** What is the primary advantage of using nonblocking point-to-point communication over blocking communication?
    *   **Answer:** The ability to overlap computation and communication, thereby reducing process idle time and potentially improving overall performance.

2.  **Question:** You initiate an `MPI_Isend`. What function must you call later to ensure the send buffer can be safely reused?
    *   **Answer:** `MPI_Wait` or `MPI_Test` (or their variants) on the associated `MPI_Request` object.

3.  **Question:** If you post multiple nonblocking sends and receives, which MPI function would you use to process the first one that completes, regardless of its order?
    *   **Answer:** `MPI_Waitany` (or `MPI_Testany`).

4.  **Exercise:** Write a small MPI program where process 0 sends a message to process 1, but process 1 uses `MPI_Test` in a loop to check for the message's arrival. Process 1 should print a message every 1000 iterations of the loop while waiting.

    *   **Hint:** Use `MPI_Irecv` to post the receive. Use `MPI_Test` to check `flag`. When `flag` becomes true, print the received data and exit the loop.

**Section 2: Virtual Topologies**

5.  **Question:** What is the main benefit of using MPI virtual topologies for algorithm implementation?
    *   **Answer:** It allows for a more natural mapping of grid-based or structured algorithms to a logical arrangement of processes, simplifying the code and potentially optimizing communication.

6.  **Question:** You are creating a 3D grid of processes using `MPI_Cart_create`. The dimensions are {4, 5, 6} and all dimensions are non-periodic. What will `MPI_Cart_shift` return for the process at the boundary (e.g., coordinate 0 in the first dimension) when searching for a neighbor in the "negative" direction (displacement -1)?
    *   **Answer:** `MPI_PROC_NULL`.

7.  **Question:** What MPI function is used to find the rank of a process given its coordinates in a Cartesian communicator?
    *   **Answer:** `MPI_Cart_rank`.

8.  **Exercise:** Write an MPI program that creates a 2D Cartesian communicator for all processes. Each process should then print its own coordinates and the ranks of its immediate neighbors (up, down, left, right). Assume a non-periodic grid. Ensure you handle the `MPI_PROC_NULL` case when printing neighbors.

    *   **Hint:**
        *   Determine the `dims` array based on `size` or a fixed number of processes. For simplicity, you might hardcode `dims` if `size` is a perfect square or a product of two numbers. A safer approach is to factorize `size`.
        *   Use `MPI_Cart_create`.
        *   Use `MPI_Cart_get` to get your own coordinates.
        *   Use `MPI_Cart_shift` three times (for each dimension and both displacements) to find neighbor ranks.
        *   Print the information, conditionalizing on whether a neighbor rank is `MPI_PROC_NULL`.
        *   Free the communicator with `MPI_Comm_free`.

    *   **Example `dims` calculation for `size = 6`:**
        Could be `{2, 3}` or `{3, 2}`. Let's use `{2, 3}`.

---
