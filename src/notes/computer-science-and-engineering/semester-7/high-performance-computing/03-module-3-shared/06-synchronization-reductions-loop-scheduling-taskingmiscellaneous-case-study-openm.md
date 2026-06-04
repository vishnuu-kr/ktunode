---
title: "Synchronization, Reductions, Loop scheduling, Tasking,Miscellaneous, Case study: OpenMP-parallel Jacobi algorithm"
subject: "HIGH PERFORMANCE COMPUTING"
module: "Module 3: Shared"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c631"
status: "completed"
scrapedAt: "2026-05-20T17:07:16.997Z"
---
# High Performance Computing - Module 3: Shared Memory Parallelism

## Topic: Synchronization, Reductions, Loop Scheduling, Tasking, Miscellaneous, Case Study: OpenMP-Parallel Jacobi Algorithm

### Learning Outcomes:

Upon completion of this module, you will be able to:

*   Understand and apply synchronization primitives for coordinating parallel threads.
*   Implement and utilize reduction operations to aggregate data across parallel threads.
*   Analyze and select appropriate loop scheduling strategies for efficient parallel execution.
*   Understand and apply task-based parallelism for more flexible program execution.
*   Identify and address miscellaneous challenges in shared memory parallelism.
*   Implement a parallel Jacobi algorithm using OpenMP, demonstrating the application of learned concepts.

---

## 1. Synchronization

Synchronization is crucial in shared memory parallelism to ensure that threads access and modify shared data in a controlled and predictable manner. Without proper synchronization, race conditions can occur, leading to incorrect program results.

### Key Concepts and Definitions:

*   **Race Condition:** A situation where the outcome of a program depends on the non-deterministic order in which multiple threads access and modify shared data.
*   **Critical Section:** A segment of code that can be executed by only one thread at a time to prevent race conditions.
*   **Mutual Exclusion (Mutex):** A locking mechanism that ensures only one thread can access a shared resource at any given time.
*   **Lock:** A synchronization primitive that a thread acquires before entering a critical section and releases after exiting. Other threads attempting to acquire a locked lock will be blocked.
*   **Semaphore:** A signaling mechanism used to control access to a shared resource by multiple threads. It maintains a count and allows threads to increment (signal) or decrement (wait) the count.
*   **Barrier:** A synchronization point where all threads in a team must reach before any thread can proceed.

### OpenMP Synchronization Constructs:

OpenMP provides several directives for synchronization.

*   **`#pragma omp critical`:**
    *   Defines a critical section. Only one thread can execute the enclosed code block at a time.
    *   **Syntax:**
        ```c
        #pragma omp critical [name]
        {
            // Critical section code
        }
        ```
    *   **Example:** Protecting a shared counter increment.
        ```c
        int shared_counter = 0;
        #pragma omp parallel for
        for (int i = 0; i < num_iterations; ++i) {
            // ... some work ...
            #pragma omp critical
            shared_counter++;
        }
        ```
    *   **Important Note:** Using unnamed critical sections can be less efficient than named ones if the compiler cannot identify distinct critical sections.

*   **`#pragma omp atomic`:**
    *   Ensures that an atomic operation (e.g., increment, decrement, compare-and-swap) on a variable is performed without interference from other threads.
    *   More fine-grained than `critical`, typically more efficient for simple operations.
    *   **Syntax:**
        ```c
        #pragma omp atomic [update | read | write | cas]
        expression;
        ```
    *   **Example:** Atomically incrementing a shared counter.
        ```c
        int shared_counter = 0;
        #pragma omp parallel for
        for (int i = 0; i < num_iterations; ++i) {
            // ... some work ...
            #pragma omp atomic update
            shared_counter++;
        }
        ```

*   **`#pragma omp barrier`:**
    *   All threads in the team must reach the barrier before any thread can proceed.
    *   Useful for ensuring all threads have completed a certain phase of computation before moving to the next.
    *   **Syntax:**
        ```c
        #pragma omp barrier
        ```
    *   **Example:** Synchronizing after a shared data update.
        ```c
        #pragma omp parallel
        {
            // ... thread-local computation ...
            // Update shared data based on thread-local results
            #pragma omp barrier // Ensure all updates are done
            // Now proceed with operations that depend on updated shared data
        }
        ```
    *   **Important Note:** Barriers are relatively expensive operations.

---

## 2. Reductions

Reductions are operations that combine the values of multiple threads into a single scalar value. Common reduction operations include sum, product, minimum, maximum, logical AND/OR, and bitwise XOR.

### Key Concepts and Definitions:

*   **Reduction Operation:** An associative operation that combines values from multiple sources into a single result.
*   **Associativity:** An operation `op` is associative if `(a op b) op c = a op (b op c)`. This property is essential for parallel reductions.

### OpenMP Reduction Clause:

OpenMP provides a `reduction` clause to efficiently perform reduction operations. The compiler generates code to combine partial results from each thread.

*   **Syntax:**
    ```c
    #pragma omp parallel for reduction(operator: variable_list)
    for (...) {
        // ...
        variable op= ...;
        // ...
    }
    ```
    *   `operator`: The reduction operator (e.g., `+`, `*`, `-`, `&`, `|`, `^`, `&&`, `||`, `min`, `max`).
    *   `variable_list`: A comma-separated list of variables to be reduced.
*   **How it Works:**
    1.  Each thread gets a private copy of the reduction variable.
    2.  Threads perform the reduction operation on their private copy.
    3.  At the end of the parallel region, OpenMP combines the private copies using the specified operator to produce the final result.
*   **Example:** Summing elements of an array.
    ```c
    double sum = 0.0;
    #pragma omp parallel for reduction(+: sum)
    for (int i = 0; i < N; ++i) {
        sum += array[i];
    }
    // 'sum' now holds the total sum of array elements
    ```
*   **Example:** Finding the maximum value.
    ```c
    int max_val = array[0]; // Initialize with a value from the array
    #pragma omp parallel for reduction(max: max_val)
    for (int i = 1; i < N; ++i) {
        if (array[i] > max_val) {
            max_val = array[i];
        }
    }
    // 'max_val' now holds the maximum value in the array
    ```
*   **Important Notes:**
    *   The initial value of the reduction variable matters. For `+`, initialize to 0. For `*`, initialize to 1. For `max`, initialize to the smallest possible value or the first element. For `min`, initialize to the largest possible value or the first element.
    *   The reduction variable must be the target of a binary operation within the loop.
    *   The `reduction` clause significantly simplifies and optimizes the implementation of reduction operations.

---

## 3. Loop Scheduling

Loop scheduling determines how iterations of a parallel loop are distributed among threads. Efficient scheduling can balance the workload and minimize overhead.

### Key Concepts and Definitions:

*   **Static Scheduling:** Iterations are divided into chunks of approximately equal size and assigned to threads before execution begins.
*   **Dynamic Scheduling:** Iterations are distributed to threads as they become available. Threads pick up work from a shared pool.
*   **Guided Scheduling:** Similar to dynamic scheduling, but chunk sizes decrease over time.
*   **Runtime Scheduling:** The scheduling policy is determined at runtime based on environment variables.

### OpenMP Loop Scheduling Clauses:

*   **`#pragma omp for schedule(kind[,chunk_size])`:**
    *   This clause is applied to `#pragma omp for` or within `#pragma omp parallel for`.
    *   **`kind`:**
        *   **`static`:**
            *   **Default:** Iterations are divided into static chunks.
            *   **`static[,chunk_size]`:** Iterations are divided into chunks of `chunk_size`. The first chunk is assigned to the first thread, the second to the second, and so on, cycling through threads.
            *   **Best for:** Loops with uniform iteration times.
            *   **Overhead:** Low.
            *   **Example:** `#pragma omp for schedule(static, 10)`
        *   **`dynamic`:**
            *   **`dynamic[,chunk_size]`:** Iterations are divided into chunks of `chunk_size`. Threads dynamically request work from a pool.
            *   **Best for:** Loops with varying iteration times or when the number of iterations is unknown.
            *   **Overhead:** Higher than static due to the overhead of work distribution.
            *   **Example:** `#pragma omp for schedule(dynamic, 10)`
        *   **`guided`:**
            *   **`guided[,chunk_size]`:** Similar to `dynamic`, but chunk sizes start large and decrease.
            *   **Best for:** Loops where iteration times vary significantly, and you want to reduce the overhead of small chunks later in the execution.
            *   **Overhead:** Higher than static, can be comparable to dynamic.
            *   **Example:** `#pragma omp for schedule(guided, 10)`
        *   **`auto`:**
            *   The runtime environment determines the most appropriate schedule.
            *   **Best for:** When you want the compiler/runtime to make the decision.
            *   **Overhead:** Varies.
        *   **`runtime`:**
            *   The schedule is determined by the `OMP_SCHEDULE` environment variable at runtime.
            *   **Example:** `export OMP_SCHEDULE="static, 10"`
*   **Example:** Parallelizing a loop where iteration times might vary.
    ```c
    #pragma omp parallel for schedule(dynamic, 64)
    for (int i = 0; i < N; ++i) {
        // Simulate work that might take varying amounts of time
        double computation = 0.0;
        for (int j = 0; j < some_complex_function(i); ++j) {
            computation += i * j;
        }
        array[i] = computation;
    }
    ```
*   **Important Notes:**
    *   **`static`** is generally the most efficient when iteration costs are predictable and similar.
    *   **`dynamic`** and **`guided`** are good for load balancing when iteration costs vary.
    *   Choosing the right `chunk_size` for `static`, `dynamic`, and `guided` is crucial to balance load balancing and overhead. Too small a chunk size increases overhead; too large a chunk size can lead to poor load balancing.

---

## 4. Tasking

Tasking allows for more dynamic and flexible parallel execution compared to the structured parallelism of `parallel for` loops. A task is a portion of work that can be executed by any thread in the team.

### Key Concepts and Definitions:

*   **Task:** A distinct unit of work that can be executed independently by a thread.
*   **Task Construct:** OpenMP constructs that define and manage tasks.
*   **Task Dependence:** A relationship between tasks where one task must complete before another can begin.
*   **Implicit Task:** Tasks generated by directives like `parallel for`.
*   **Explicit Task:** Tasks explicitly created using `task` directives.

### OpenMP Tasking Constructs:

*   **`#pragma omp task`:**
    *   Defines a task. The code block within the task directive can be executed by any available thread.
    *   **Syntax:**
        ```c
        #pragma omp task [depend(...)] [if(...)] [private(...)] [firstprivate(...)] [shared(...)] [mergeable]
        {
            // Task work
        }
        ```
    *   **`depend(dependency_list)`:** Specifies dependencies on other tasks. Common dependency types are `in`, `out`, and `inout`.
        *   `depend(out: array[start:length])`: Task writes to this memory region.
        *   `depend(in: array[start:length])`: Task reads from this memory region.
        *   `depend(inout: array[start:length])`: Task reads from and writes to this memory region.
    *   **`if(scalar_expression)`:** The task is generated only if the expression evaluates to true.
    *   **`private`, `firstprivate`, `shared`:** Control variable scoping for the task.
*   **`#pragma omp taskgroup`:**
    *   Creates a group of tasks. The thread that encounters the `taskgroup` directive waits at the end of the `taskgroup` region until all tasks within the group have completed.
    *   **Syntax:**
        ```c
        #pragma omp taskgroup
        {
            #pragma omp task ...
            { ... }
            #pragma omp task ...
            { ... }
        }
        ```
*   **`#pragma omp taskwait`:**
    *   A synchronization point that waits for all preceding tasks (within the same task region) to complete.
    *   **Syntax:**
        ```c
        #pragma omp taskwait
        ```
*   **`#pragma omp flush`:**
    *   Ensures that memory updates made by one thread are visible to other threads. This is important when using task dependencies.

### Tasking Example: Recursive Factorial Calculation

```c
long long factorial(int n) {
    if (n <= 1) {
        return 1;
    }
    long long res;
    #pragma omp task shared(res) firstprivate(n)
    {
        res = n * factorial(n - 1);
    }
    #pragma omp taskwait // Wait for the recursive call to complete
    return res;
}

// In main:
// #pragma omp parallel
// {
//     #pragma omp single // Only one thread creates the initial task
//     {
//         long long result = factorial(10);
//         printf("Factorial of 10 is: %lld\n", result);
//     }
// }
```
*   **Important Notes:**
    *   Tasking provides more flexibility than `parallel for` for irregular or data-dependent computations.
    *   The `depend` clause is crucial for establishing data dependencies and ensuring correct execution order.
    *   Tasking can introduce more overhead than loop-based parallelism due to task creation and scheduling.
    *   The `if` clause can be used to switch between sequential and parallel execution based on problem size.

---

## 5. Miscellaneous

This section covers other important considerations and directives relevant to shared memory parallelism.

### Key Concepts and Definitions:

*   **Thread Creation Overhead:** The cost associated with creating and managing threads.
*   **Load Balancing:** Distributing work evenly among threads to maximize utilization.
*   **Data Locality:** Accessing data that is close to the processor (e.g., in cache) to reduce memory latency.
*   **False Sharing:** When unrelated data items, used by different threads, reside in the same cache line, causing unnecessary cache coherence traffic.
*   **Memory Model:** Defines how memory operations are ordered and made visible to different threads.

### OpenMP Directives and Clauses:

*   **`#pragma omp parallel`:**
    *   The most fundamental directive. Creates a team of threads. All threads execute the enclosed code block.
    *   **Syntax:**
        ```c
        #pragma omp parallel [clauses]
        {
            // Code executed by all threads
        }
        ```
    *   **`num_threads(int_expression)`:** Specifies the number of threads in the team.
    *   **`private(variable_list)`:** Each thread gets a private copy of the specified variables. Their initial values are undefined.
    *   **`firstprivate(variable_list)`:** Each thread gets a private copy of the specified variables, initialized with the value of the original variable from the master thread.
    *   **`shared(variable_list)`:** All threads share access to the specified variables.
    *   **`default(shared | none | private)`:** Specifies the default data-sharing attribute for variables not explicitly mentioned in other clauses. `none` requires explicit clauses for all variables.

*   **`#pragma omp master`:**
    *   The code block is executed only by the master thread (thread 0).
    *   **Syntax:**
        ```c
        #pragma omp master
        {
            // Master thread code
        }
        ```

*   **`#pragma omp single`:**
    *   The code block is executed by only one thread in the team. Which thread executes it is unspecified.
    *   **Syntax:**
        ```c
        #pragma omp single
        {
            // Single thread code
        }
        ```
    *   **`nowait`:** Threads not executing the `single` construct can proceed immediately without waiting for the `single` region to finish.

*   **`#pragma omp flush [variable_list]`:**
    *   Ensures that memory operations on specified variables (or all shared variables if none are specified) are visible to other threads.
    *   Important for implementing synchronization mechanisms manually or when the compiler might reorder operations.

### Addressing Challenges:

*   **False Sharing:**
    *   **Cause:** Multiple threads accessing unrelated variables that happen to be in the same cache line.
    *   **Solution:** Pad data structures to ensure that variables used by different threads are on separate cache lines. For example, declare arrays with alignment directives or insert dummy variables.

    ```c
    // Example of padding to avoid false sharing
    struct Data {
        double value;
        char pad[64 - sizeof(double)]; // Assuming cache line size is 64 bytes
    };
    struct Data shared_data[NUM_THREADS];
    ```

*   **Thread Affinity:**
    *   Ensuring that threads are bound to specific CPU cores can improve performance by leveraging cache and reducing context switching.
    *   OpenMP provides environment variables like `OMP_PROC_BIND` and `OMP_PLACES`.

---

## 6. Case Study: OpenMP-Parallel Jacobi Algorithm

The Jacobi method is an iterative technique used to solve systems of linear equations. In its parallel implementation, each iteration involves updating all elements of a matrix based on the values from the previous iteration.

### Problem Description:

Update each element `A[i][j]` of a matrix `A` using its neighbors:
`A_new[i][j] = (A[i-1][j] + A[i+1][j] + A[i][j-1] + A[i][j+1]) / 4`

This requires two matrices: one for the current iteration's values (`old_matrix`) and one for the new values being computed (`new_matrix`). After each iteration, `new_matrix` becomes `old_matrix` for the next iteration.

### Sequential Jacobi:

```c
// Assume matrix_size is defined
// Assume old_matrix and new_matrix are allocated and initialized

for (int iter = 0; iter < max_iterations; ++iter) {
    for (int i = 1; i < matrix_size - 1; ++i) {
        for (int j = 1; j < matrix_size - 1; ++j) {
            new_matrix[i][j] = (old_matrix[i-1][j] + old_matrix[i+1][j] +
                                old_matrix[i][j-1] + old_matrix[i][j+1]) / 4.0;
        }
    }
    // Swap matrices or copy new_matrix to old_matrix
    // For simplicity, let's assume we copy
    for (int i = 0; i < matrix_size; ++i) {
        for (int j = 0; j < matrix_size; ++j) {
            old_matrix[i][j] = new_matrix[i][j];
        }
    }
    // Check for convergence
}
```

### Parallel Jacobi using OpenMP:

**Challenges:**

1.  **Dependencies:** Each `new_matrix[i][j]` depends on values from the `old_matrix`. Threads can compute different `[i][j]` elements in parallel.
2.  **Data Swapping:** The matrix swapping or copying at the end of each iteration needs careful handling.

**Implementation Strategy:**

*   Use a `parallel for` loop for the inner computation of `new_matrix[i][j]`.
*   Handle the matrix swap. A simple way is to use pointers to point to the current `old` and `new` matrices and swap the pointers.
*   Synchronization is needed to ensure all threads finish computing the `new_matrix` before the matrices are swapped and the next iteration begins. A barrier is suitable for this.

**OpenMP Parallel Code:**

```c
#include <stdio.h>
#include <stdlib.h>
#include <omp.h>

#define MATRIX_SIZE 1000
#define MAX_ITERATIONS 100
#define TOLERANCE 1e-6

// Function to initialize the matrix
void initialize_matrix(double** matrix, int size) {
    for (int i = 0; i < size; ++i) {
        for (int j = 0; j < size; ++j) {
            if (i == 0 || i == size - 1 || j == 0 || j == size - 1) {
                matrix[i][j] = 1.0; // Boundary conditions
            } else {
                matrix[i][j] = 0.0;
            }
        }
    }
}

// Function to allocate memory for the matrix
double** allocate_matrix(int size) {
    double** matrix = (double**)malloc(size * sizeof(double*));
    for (int i = 0; i < size; ++i) {
        matrix[i] = (double*)malloc(size * sizeof(double));
    }
    return matrix;
}

// Function to free memory
void free_matrix(double** matrix, int size) {
    for (int i = 0; i < size; ++i) {
        free(matrix[i]);
    }
    free(matrix);
}

int main() {
    double** matrix_a = allocate_matrix(MATRIX_SIZE);
    double** matrix_b = allocate_matrix(MATRIX_SIZE);

    initialize_matrix(matrix_a, MATRIX_SIZE);
    initialize_matrix(matrix_b, MATRIX_SIZE); // Initialize B the same way

    double start_time = omp_get_wtime();

    for (int iter = 0; iter < MAX_ITERATIONS; ++iter) {
        double max_diff = 0.0;

        // Parallel computation of the new matrix
        #pragma omp parallel
        {
            // Each thread works on its portion of the matrix
            // We can use schedule(static) if iteration times are similar
            // or schedule(dynamic) if they vary. Static is often fine here.
            #pragma omp for schedule(static)
            for (int i = 1; i < MATRIX_SIZE - 1; ++i) {
                for (int j = 1; j < MATRIX_SIZE - 1; ++j) {
                    matrix_b[i][j] = (matrix_a[i-1][j] + matrix_a[i+1][j] +
                                      matrix_a[i][j-1] + matrix_a[i][j+1]) / 4.0;

                    // Calculate difference for convergence check (needs synchronization)
                    // We'll do this after the main computation
                }
            }

            // Synchronization point: all threads must finish computing matrix_b
            // before we can swap and start the next iteration.
            #pragma omp barrier

            // Only one thread (e.g., thread 0) should perform the swap and check convergence
            #pragma omp master
            {
                // Check for convergence
                for (int i = 1; i < MATRIX_SIZE - 1; ++i) {
                    for (int j = 1; j < MATRIX_SIZE - 1; ++j) {
                        double diff = fabs(matrix_b[i][j] - matrix_a[i][j]);
                        if (diff > max_diff) {
                            max_diff = diff;
                        }
                    }
                }

                // Swap matrices
                double** temp = matrix_a;
                matrix_a = matrix_b;
                matrix_b = temp;

                if (max_diff < TOLERANCE) {
                    printf("Converged at iteration %d\n", iter);
                    // Optionally, break out of the loop - requires a mechanism
                    // to signal other threads. A shared flag can be used.
                    // For simplicity here, we let it run to MAX_ITERATIONS.
                }
                printf("Iteration %d, max_diff = %f\n", iter, max_diff);
            }
            // Threads not in the master section wait implicitly at the end of the parallel region
            // or at explicit barriers if present.
        } // End of #pragma omp parallel
    } // End of iteration loop

    double end_time = omp_get_wtime();

    printf("Jacobi algorithm finished in %f seconds.\n", end_time - start_time);

    // You can optionally print a part of the final matrix to verify
    // printf("Final value at [1][1]: %f\n", matrix_a[1][1]);

    free_matrix(matrix_a, MATRIX_SIZE);
    free_matrix(matrix_b, MATRIX_SIZE);

    return 0;
}
```

**Explanation of Parallel Jacobi:**

1.  **Initialization:** Matrices `matrix_a` and `matrix_b` are allocated and initialized with boundary conditions.
2.  **Outer Loop (`iter`):** Iterates up to `MAX_ITERATIONS`.
3.  **`#pragma omp parallel`:** Creates a team of threads.
4.  **Inner Loops (`i`, `j`) and `#pragma omp for`:** The work of computing `matrix_b[i][j]` is distributed across threads. `schedule(static)` is a common choice, but `dynamic` can be better if computation per `[i][j]` varies significantly (though less likely in basic Jacobi).
5.  **`#pragma omp barrier`:** This is critical. It ensures that all threads have completed their computation of `matrix_b` for the current iteration *before* any thread proceeds to swap the matrices or check for convergence. This prevents race conditions where some threads might compute using outdated values of `matrix_a`.
6.  **`#pragma omp master`:** Only one thread (the master thread, typically thread 0) executes the code within this construct. This is used for tasks that should be done only once per iteration, like calculating the maximum difference and swapping the matrices.
7.  **Matrix Swapping:** The pointers `matrix_a` and `matrix_b` are swapped. The matrix that was just computed (`matrix_b`) becomes the `old` matrix (`matrix_a`) for the next iteration, and the old `matrix_a` becomes the `new` matrix (`matrix_b`) to be filled.
8.  **Convergence Check:** The `max_diff` is calculated by the master thread. If it falls below `TOLERANCE`, the algorithm has converged.
9.  **Timing:** `omp_get_wtime()` is used to measure the execution time.

**Important Points for Jacobi:**

*   The boundary elements of the matrix remain constant throughout the computation.
*   The core computation `new_matrix[i][j] = (old_matrix[i-1][j] + ...)/4.0` has no dependencies *between* `[i][j]` elements within the *same* iteration if we consider the `old_matrix` as read-only.
*   The `barrier` and `master` constructs are essential for correct synchronization and avoiding redundant work.

---

## Practice Questions and Exercises:

**1. Synchronization:**
   Consider a scenario where multiple threads are updating a shared global sum. Write a short C code snippet using OpenMP directives to ensure that the sum is updated correctly and without race conditions.

**2. Reductions:**
   You need to find the maximum value in a large array using OpenMP. Show how to use the `reduction` clause for this purpose. What should be the initial value of the variable used for the reduction?

**3. Loop Scheduling:**
   Which loop scheduling clause would you typically use for a loop where the work done in each iteration is highly variable? Explain why. If the work per iteration is uniform, which schedule is usually preferred and why?

**4. Tasking:**
   Describe a situation where tasking might be more beneficial than fork-join parallelism (e.g., `parallel for`). Provide a conceptual example.

**5. Miscellaneous:**
   What is "false sharing" in the context of shared memory parallelism, and how can it be mitigated?

**6. Case Study:**
   In the OpenMP parallel Jacobi algorithm provided, why is the `#pragma omp barrier` after the computation of `matrix_b` necessary? What would happen if it were removed?

---

## Answers:

**1. Synchronization:**

```c
#include <stdio.h>
#include <omp.h>

int main() {
    int num_threads = 4;
    long long shared_sum = 0;

    omp_set_num_threads(num_threads);

    #pragma omp parallel
    {
        long long private_sum = 0;
        #pragma omp for
        for (int i = 0; i < 1000000; ++i) {
            private_sum += i; // Accumulate locally
        }

        // Use critical section or atomic for updating the global sum
        #pragma omp critical
        shared_sum += private_sum;

        // Alternatively, using atomic for a single increment (less common for sums like this)
        // #pragma omp atomic update
        // shared_sum += private_sum; // This would require private_sum to be declared outside the for
    }

    printf("Final shared sum: %lld\n", shared_sum);
    return 0;
}
```
*   **Explanation:** Each thread computes a partial sum (`private_sum`) locally to reduce contention. Then, the `private_sum` is added to the `shared_sum` within a `#pragma omp critical` section to ensure exclusive access.

**2. Reductions:**

```c
#include <stdio.h>
#include <omp.h>
#include <limits.h> // For INT_MIN

#define ARRAY_SIZE 1000000

int main() {
    int array[ARRAY_SIZE];
    int max_val = INT_MIN; // Initialize with the smallest possible integer value

    // Initialize array (e.g., with random values)
    for (int i = 0; i < ARRAY_SIZE; ++i) {
        array[i] = rand() % 1000;
    }

    #pragma omp parallel for reduction(max: max_val)
    for (int i = 0; i < ARRAY_SIZE; ++i) {
        if (array[i] > max_val) {
            max_val = array[i];
        }
    }

    printf("Maximum value in the array is: %d\n", max_val);
    return 0;
}
```
*   **Explanation:** The `reduction(max: max_val)` clause tells OpenMP to maintain a private copy of `max_val` for each thread, initialized with the value of `max_val` in the original scope (which is `INT_MIN`). Each thread updates its private copy, and at the end of the parallel region, OpenMP combines these private copies using the `max` operation to produce the final `max_val`. The initial value `INT_MIN` ensures that the first element encountered by any thread will correctly become the initial maximum for that thread.

**3. Loop Scheduling:**

*   **Highly variable iteration times:** Use `schedule(dynamic)` or `schedule(guided)`.
    *   **`dynamic`:** Threads dynamically pick up chunks of work. This helps balance the load when some iterations take much longer than others, as faster threads can grab more work.
    *   **`guided`:** Similar to dynamic, but it starts with larger chunks and reduces them. This can reduce overhead towards the end of the loop compared to dynamic if there are many small iterations.
*   **Uniform iteration times:** Use `schedule(static)` or `schedule(static, chunk_size)`.
    *   **`static`:** Iterations are divided into chunks and assigned upfront. This has the lowest overhead. If all iterations take roughly the same amount of time, this provides good load balancing and performance. Specifying a `chunk_size` can improve cache locality if iterations within a chunk are close in memory.

**4. Tasking:**

*   **Beneficial Situation:** Irregular parallelism, where the amount of work or the dependencies between tasks are not known until runtime. Examples include recursive algorithms (like quicksort or mergesort), dependency graphs, or simulations where the number of active particles/computations changes dynamically.
*   **Conceptual Example: Recursive Factorial (as shown in the notes) or Parallel Tree Traversal.**

    ```c
    // Conceptual example: Parallel Tree Traversal
    struct Node {
        int data;
        struct Node *left, *right;
    };

    void traverse(struct Node *node) {
        if (node == NULL) return;

        // Process current node (can be done by any thread)
        printf("Processing node %d\n", node->data);

        // Create tasks for left and right children
        #pragma omp task firstprivate(node)
        {
            traverse(node->left);
        }
        #pragma omp task firstprivate(node)
        {
            traverse(node->right);
        }
    }

    // In main:
    // #pragma omp parallel
    // {
    //     #pragma omp single
    //     {
    //         traverse(root_node);
    //     }
    // }
    ```
    Here, the tasks for traversing subtrees are generated dynamically.

**5. Miscellaneous:**

*   **False Sharing:** This occurs when two or more threads access different data items that happen to reside in the same cache line. Even though the threads are accessing different variables, the cache coherency protocol treats the entire cache line as modified. When one thread writes to its variable, the cache line is invalidated for other threads, even if they only need to read other variables in the same line. This leads to unnecessary cache misses and contention.
*   **Mitigation:** Padding data structures. By inserting unused bytes (padding) between variables that are likely to be accessed by different threads, you can ensure that these variables reside on separate cache lines. This prevents unrelated data from causing cache coherence traffic.

**6. Case Study:**

*   **Necessity of `#pragma omp barrier`:** The barrier is crucial to ensure that all threads have finished computing their portion of `matrix_b` (the new values) before the matrices are swapped.
*   **Consequences of Removal:**
    1.  **Race Condition during Swapping:** If the barrier is removed, the `master` thread (or any thread that reaches the `master` directive first) might swap the matrices before other threads have finished writing to `matrix_b`.
    2.  **Incorrect Next Iteration:** If the swap happens early, subsequent computations in the next iteration might use a mix of old and new values from `matrix_a`, leading to incorrect results and non-convergence. For instance, a thread might try to read `matrix_a[i-1][j]` but find that `matrix_a` has already been swapped, and it's now pointing to the `matrix_b` from the previous step, which is still being updated.

---
