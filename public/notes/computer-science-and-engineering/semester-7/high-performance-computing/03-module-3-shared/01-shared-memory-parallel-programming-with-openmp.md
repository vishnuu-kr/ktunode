---
title: "Shared-memory parallel programming with OpenMP :-"
subject: "HIGH PERFORMANCE COMPUTING"
module: "Module 3: Shared"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c62c"
status: "completed"
scrapedAt: "2026-05-20T17:07:13.267Z"
---
# High Performance Computing - Module 3: Shared Memory Parallel Programming with OpenMP

## Topic: Shared-Memory Parallel Programming with OpenMP

This module introduces the fundamental concepts and practices of shared-memory parallel programming using the OpenMP API. We will explore how to leverage multiple processing cores within a single machine to accelerate computations by allowing threads to access a common memory space.

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Understand the core principles of shared-memory parallel programming.
*   Identify and apply OpenMP directives to parallelize loops and sections of code.
*   Manage shared and private data within parallel regions.
*   Understand and implement synchronization mechanisms to prevent race conditions.
*   Utilize OpenMP for basic task parallelism.
*   Analyze and optimize the performance of OpenMP programs.

---

### 1. Introduction to Shared-Memory Parallel Programming

#### 1.1. What is Shared Memory?

*   **Definition:** Shared memory is a memory architecture where multiple processors or cores can access the same physical memory location directly. This allows threads running on different cores to communicate and exchange data implicitly by reading from and writing to this shared memory.

#### 1.2. How it Differs from Distributed Memory:

*   **Shared Memory:**
    *   Single address space for all processors.
    *   Data sharing is implicit through memory access.
    *   Communication overhead is generally lower (in-memory access).
    *   Programming model is simpler conceptually for data sharing.
    *   Typically found in multi-core CPUs within a single machine.
*   **Distributed Memory:**
    *   Each processor has its own private memory.
    *   Data sharing requires explicit message passing (e.g., MPI).
    *   Communication overhead can be higher (network communication).
    *   Programming model requires managing data distribution and communication.
    *   Typically found in clusters of computers.

#### 1.3. Advantages of Shared Memory Parallel Programming:

*   **Simplicity:** Easier to start and reason about compared to message passing.
*   **Implicit Communication:** Data sharing is naturally handled by memory access.
*   **Lower Latency:** Accessing shared memory is generally faster than sending messages.
*   **Widely Available:** Most modern processors (CPUs, GPUs) employ shared-memory architectures.

#### 1.4. Challenges of Shared Memory Parallel Programming:

*   **Race Conditions:** Multiple threads accessing and modifying shared data concurrently can lead to unpredictable results.
*   **Synchronization:** Mechanisms are needed to control access to shared data and ensure correct execution order.
*   **False Sharing:** When unrelated data items that reside on the same cache line are accessed by different threads, it can lead to performance degradation.
*   **Load Balancing:** Distributing work evenly across threads to maximize utilization.
*   **Scalability:** Performance gains may not linearly scale with the number of cores due to overheads and contention.

---

### 2. Introduction to OpenMP

#### 2.1. What is OpenMP?

*   **Definition:** OpenMP (Open Multi-Processing) is an **API** (Application Programming Interface) that supports multi-platform shared-memory parallel programming in C, C++, and Fortran. It consists of a set of compiler directives, library routines, and environment variables.

#### 2.2. How OpenMP Works:

*   **Thread-Based Parallelism:** OpenMP creates and manages a team of threads.
*   **Directives:** Special compiler directives (usually prefixed with `#pragma omp`) are used to instruct the compiler on how to parallelize code.
*   **Runtime Library:** OpenMP provides a runtime library that manages thread creation, scheduling, and synchronization.

#### 2.3. Key OpenMP Concepts:

*   **Parallel Region:** A block of code that can be executed by multiple threads simultaneously.
*   **Worksharing:** Distributing iterations of a loop or sections of code among threads.
*   **Data Scoping:** Defining whether variables are shared among threads or private to each thread.
*   **Synchronization:** Mechanisms to control the order of execution and prevent data corruption.

---

### 3. Basic OpenMP Constructs: Parallel Regions and Loops

#### 3.1. The `parallel` Directive:

*   **Purpose:** To create a team of threads and execute a block of code in parallel.
*   **Syntax:**
    ```c
    #pragma omp parallel
    {
        // Code to be executed by each thread
    }
    ```
*   **Execution:** When a thread encounters a `#pragma omp parallel` directive, it creates a team of threads. All threads in the team execute the code within the parallel region. After the parallel region, only the master thread continues.
*   **Example:**
    ```c
    #include <omp.h>
    #include <stdio.h>

    int main() {
        #pragma omp parallel
        {
            printf("Hello from thread %d of %d\n", omp_get_thread_num(), omp_get_num_threads());
        }
        return 0;
    }
    ```
    *   **`omp_get_thread_num()`:** Returns the ID of the current thread (0 for the master thread).
    *   **`omp_get_num_threads()`:** Returns the total number of threads in the current team.
    *   **Output:** Will show multiple "Hello" messages, each from a different thread.

#### 3.2. The `for` (or `parallel for`) Directive:

*   **Purpose:** To parallelize `for` loops by distributing loop iterations among threads.
*   **Syntax:**
    ```c
    #pragma omp for
    for (initialization; condition; update) {
        // Loop body
    }
    ```
*   **Execution:** The iterations of the `for` loop are divided among the threads in the current team.
*   **Implicit Binding:** The `for` directive must be within a `parallel` region. Often, it's combined into `parallel for`.
*   **`parallel for` Syntax:**
    ```c
    #pragma omp parallel for
    for (initialization; condition; update) {
        // Loop body
    }
    ```
*   **Example:**
    ```c
    #include <omp.h>
    #include <stdio.h>

    int main() {
        int i;
        const int N = 100;
        int arr[N];

        #pragma omp parallel for
        for (i = 0; i < N; i++) {
            arr[i] = i * 2;
            printf("Thread %d computed arr[%d]\n", omp_get_thread_num(), i);
        }
        return 0;
    }
    ```
    *   **Observation:** The `printf` statements might appear out of order because different threads compute different iterations concurrently.

#### 3.3. Loop Scheduling (`schedule` Clause):

*   **Purpose:** To control how loop iterations are distributed among threads.
*   **Common Schedules:**
    *   **`static`:** Iterations are divided into chunks of roughly equal size and distributed to threads statically before execution begins. Good for uniform loop body execution times.
    *   **`dynamic`:** Iterations are divided into smaller chunks and distributed dynamically to threads as they become available. Good for loops with variable execution times per iteration.
    *   **`guided`:** Similar to `dynamic` but uses exponentially decreasing chunk sizes.
    *   **`runtime`:** The schedule is determined at runtime by the `OMP_SCHEDULE` environment variable.
*   **Syntax:**
    ```c
    #pragma omp parallel for schedule(static, chunk_size)
    for (...) { ... }
    ```
*   **Example (`static`):**
    ```c
    #pragma omp parallel for schedule(static, 4) // Chunks of 4 iterations
    for (i = 0; i < N; i++) {
        // ...
    }
    ```
*   **Example (`dynamic`):**
    ```c
    #pragma omp parallel for schedule(dynamic) // Default chunk size
    for (i = 0; i < N; i++) {
        // ...
    }
    ```

---

### 4. Data Scoping: Shared vs. Private Variables

#### 4.1. Default Data Scoping Rules:

*   **Variables declared outside a parallel region:** Shared by default.
*   **Variables declared inside a parallel region:** Private to each thread by default.
*   **Loop control variables (e.g., `i` in `for` loops):** Private to each thread by default when used with `omp for`.

#### 4.2. The `shared` Clause:

*   **Purpose:** Explicitly declare that a variable is shared among all threads in a parallel region. This is often the default, but explicit declaration can improve clarity.
*   **Syntax:**
    ```c
    #pragma omp parallel shared(variable1, variable2)
    { ... }
    ```

#### 4.3. The `private` Clause:

*   **Purpose:** Declare that a variable is private to each thread. Each thread gets its own copy. Changes to a private variable do not affect other threads.
*   **Syntax:**
    ```c
    #pragma omp parallel private(variable1, variable2)
    { ... }
    ```
*   **Example:**
    ```c
    int shared_var = 10;
    int private_var;

    #pragma omp parallel private(private_var) shared(shared_var)
    {
        private_var = omp_get_thread_num();
        shared_var++; // All threads increment the same shared_var
        printf("Thread %d: private_var = %d, shared_var = %d\n", omp_get_thread_num(), private_var, shared_var);
    }
    // After the region, private_var's value is undefined for the master thread.
    ```

#### 4.4. The `firstprivate` Clause:

*   **Purpose:** Declare a variable as private to each thread, but initialize it with the value of the original variable from the master thread before the parallel region begins.
*   **Syntax:**
    ```c
    #pragma omp parallel firstprivate(variable1, variable2)
    { ... }
    ```
*   **Example:**
    ```c
    int x = 5;
    #pragma omp parallel firstprivate(x)
    {
        printf("Thread %d: x = %d\n", omp_get_thread_num(), x); // x is 5 for all threads
        x = x + omp_get_thread_num(); // Each thread modifies its own copy
    }
    printf("Master thread: x = %d\n", x); // x remains 5
    ```

#### 4.5. The `lastprivate` Clause:

*   **Purpose:** Declare a variable as private to each thread, but copy the value of the variable from the **last** thread to finish the statement (usually within a loop) back to the original variable after the parallel region.
*   **Syntax:**
    ```c
    #pragma omp parallel for lastprivate(variable)
    for (...) {
        // ...
        variable = ...; // This variable's final value will be from the last iteration
    }
    ```
*   **Example:**
    ```c
    int last_val;
    #pragma omp parallel for lastprivate(last_val)
    for (int i = 0; i < 10; ++i) {
        last_val = i;
        printf("Thread %d: i=%d, last_val=%d\n", omp_get_thread_num(), i, last_val);
    }
    printf("Final last_val: %d\n", last_val); // Expected output: 9
    ```
    *   **Caution:** Use `lastprivate` carefully as the "last" thread is not always predictable.

#### 4.6. The `reduction` Clause:

*   **Purpose:** To perform reduction operations (e.g., sum, product, min, max) on shared variables across threads without explicit synchronization. OpenMP handles the merging of results.
*   **Syntax:**
    ```c
    #pragma omp parallel for reduction(operator:variable)
    for (...) {
        variable = variable operator expression;
    }
    ```
*   **Common Operators:** `+`, `-`, `*`, `&`, `|`, `^`, `&&`, `||`, `min`, `max`.
*   **Example (Summation):**
    ```c
    int sum = 0;
    #pragma omp parallel for reduction(+:sum)
    for (int i = 0; i < 100; i++) {
        sum += i;
    }
    printf("Sum = %d\n", sum); // Expected output: 4950
    ```
    *   **Benefit:** Avoids race conditions that would occur if `sum` were simply `shared` and updated with `+=`.

---

### 5. Synchronization

#### 5.1. Race Conditions:

*   **Definition:** Occur when two or more threads attempt to access and modify a shared variable concurrently, and the final outcome depends on the interleaving of their operations.
*   **Example:** A counter incremented by multiple threads without synchronization.
    ```c
    int count = 0;
    #pragma omp parallel for
    for (int i = 0; i < 1000; i++) {
        count++; // Race condition!
    }
    // The final value of count will likely be less than 1000.
    ```

#### 5.2. The `critical` Directive:

*   **Purpose:** Ensures that only one thread at a time can execute a specific section of code. It's a form of mutual exclusion.
*   **Syntax:**
    ```c
    #pragma omp critical (name)
    {
        // Code executed by only one thread at a time
    }
    ```
    *   The optional `name` can be used to distinguish different critical sections.
*   **Example:**
    ```c
    int shared_counter = 0;
    #pragma omp parallel
    {
        #pragma omp critical
        {
            shared_counter++;
        }
    }
    ```

#### 5.3. The `atomic` Directive:

*   **Purpose:** Provides a more fine-grained way to ensure that updates to a single variable are atomic, meaning they happen as a single, indivisible operation. It's typically more efficient than `critical` for simple updates.
*   **Syntax:**
    ```c
    #pragma omp atomic update
    variable operator expression;
    ```
    *   Other forms exist for reads and writes. The `update` form is most common for counters.
*   **Example:**
    ```c
    int shared_counter = 0;
    #pragma omp parallel for
    for (int i = 0; i < 1000; i++) {
        #pragma omp atomic update
        shared_counter++;
    }
    // This will correctly result in shared_counter = 1000.
    ```

#### 5.4. The `barrier` Directive:

*   **Purpose:** Synchronizes all threads in a team. Threads will wait at the barrier until all other threads have also reached it.
*   **Syntax:**
    ```c
    #pragma omp barrier
    ```
*   **Example:**
    ```c
    #pragma omp parallel
    {
        // Phase 1: Computation
        printf("Thread %d finished phase 1\n", omp_get_thread_num());
        #pragma omp barrier // Wait for all threads to finish phase 1

        // Phase 2: Another computation
        printf("Thread %d starting phase 2\n", omp_get_thread_num());
    }
    ```

#### 5.5. The `master` Directive:

*   **Purpose:** Specifies that a block of code should be executed only by the master thread (thread 0).
*   **Syntax:**
    ```c
    #pragma omp master
    {
        // Code to be executed by master thread only
    }
    ```
*   **Example:**
    ```c
    #pragma omp parallel
    {
        if (omp_get_thread_num() == 0) {
            printf("This is the master thread.\n");
        }
        #pragma omp master
        {
            printf("This is also the master thread using the master directive.\n");
        }
    }
    ```

#### 5.6. The `single` Directive:

*   **Purpose:** Specifies that a block of code should be executed by only one thread in the team. Which thread executes it is not specified (unlike `master`).
*   **Syntax:**
    ```c
    #pragma omp single
    {
        // Code to be executed by only one thread
    }
    ```
*   **`nowait` Clause:** Can be used with `single` (and `for`) to allow threads to continue execution without waiting for others after the construct.
*   **Example:**
    ```c
    #pragma omp parallel
    {
        // ...
        #pragma omp single
        {
            printf("This message is printed only once!\n");
        }
        // ... other threads might continue before the single block finishes
    }
    ```

---

### 6. Task Parallelism with OpenMP

#### 6.1. What is Task Parallelism?

*   **Definition:** Task parallelism involves decomposing a computation into a set of independent tasks, which can then be executed concurrently. This is often used when the work is not structured as a regular loop.

#### 6.2. The `task` Directive:

*   **Purpose:** Defines a block of code as a task that can be executed asynchronously by any thread. Tasks are created dynamically.
*   **Requirements:** Must be used within a `parallel` region. The `default(shared)` clause is often implied or explicitly needed.
*   **Syntax:**
    ```c
    #pragma omp task [options]
    {
        // Task body
    }
    ```
*   **`depend` Clause:** Specifies dependencies between tasks, ensuring that a task only executes after its dependent tasks are completed.
    *   `depend(in: var)`: Task depends on `var` being available for input.
    *   `depend(out: var)`: Task depends on `var` being available for output.
    *   `depend(inout: var)`: Task depends on `var` being available for input and output.
*   **Example (Fibonacci Sequence):**
    ```c
    long fib(int n) {
        if (n <= 1) return n;
        long res1, res2;
        #pragma omp task shared(res1) depend(out:res1)
        res1 = fib(n - 1);
        #pragma omp task shared(res2) depend(out:res2)
        res2 = fib(n - 2);

        #pragma omp task depend(in:res1, res2) shared(res1, res2)
        {
            // This task waits for the results of the two recursive calls
            // The actual merge happens when res1 and res2 are available.
            // A more robust approach might involve explicit wait or taskgroups.
            // For simplicity, we assume res1 and res2 are accessible after their tasks complete.
        }
        // In a real scenario, you'd likely use taskwait or taskgroup.
        // For this basic example, we'll illustrate the concept of task creation.
        // A proper implementation requires a way to collect results.
        return res1 + res2; // This line might not be reached correctly without proper result collection.
    }

    int main() {
        long result;
        int n = 10;

        #pragma omp parallel
        {
            #pragma omp single // Create tasks from a single thread
            {
                result = fib(n);
            }
        }
        printf("Fibonacci(%d) = %ld\n", n, result);
        return 0;
    }
    ```
    *   **`taskwait` Directive:** A thread executing a `task` directive will wait for all tasks that have been generated up to that point to complete.
    *   **`taskgroup` Directive:** Creates a dynamic scope that waits for all tasks spawned within it to complete before the thread can proceed past the `taskgroup` region. This is often a cleaner way to manage task dependencies.

#### 6.3. Task Creation and Dependencies:

*   Tasks are created dynamically using `#pragma omp task`.
*   The `depend` clause is crucial for establishing data dependencies and ensuring correct execution order.

---

### 7. Advanced OpenMP Features and Best Practices

#### 7.1. The `sections` Directive:

*   **Purpose:** Divides a parallel region into independent sections, each of which can be executed by a different thread.
*   **Syntax:**
    ```c
    #pragma omp parallel
    {
        #pragma omp sections
        {
            #pragma omp section
            {
                // Code for section 1
            }
            #pragma omp section
            {
                // Code for section 2
            }
            // ... more sections
        }
    }
    ```
*   **Use Case:** When you have a few distinct, independent blocks of work within a parallel region.

#### 7.2. Environment Variables:

*   **`OMP_NUM_THREADS`:** Sets the number of threads to use.
    *   Example: `export OMP_NUM_THREADS=4`
*   **`OMP_SCHEDULE`:** Sets the loop scheduling type (e.g., `static`, `dynamic`).
    *   Example: `export OMP_SCHEDULE="dynamic,10"`
*   **`OMP_NESTED`:** Controls whether nested parallel regions are allowed (default is `false`). Set to `true` to enable.

#### 7.3. Performance Considerations:

*   **Overhead:** Thread creation, synchronization, and context switching introduce overhead. Parallelizing very small loops might not yield speedup.
*   **Granularity:** The size of the work units (loop iterations, tasks) needs to be balanced. Too fine-grained can increase overhead; too coarse-grained can lead to poor load balancing.
*   **Load Balancing:** Use `schedule` clauses effectively for loops. For task parallelism, the runtime scheduler tries to balance work.
*   **False Sharing:** Be mindful of data alignment and access patterns. If unrelated private variables happen to be on the same cache line and are accessed by different threads, it can cause performance degradation.
*   **Number of Threads:** Don't always assume more threads mean better performance. Too many threads can lead to contention and increased overhead. Match the number of threads to available cores.
*   **Profiling:** Use profiling tools (e.g., `gprof`, Intel VTune) to identify performance bottlenecks in your parallel code.

#### 7.4. Best Practices:

*   **Start Simple:** Begin by parallelizing loops.
*   **Data Scoping:** Explicitly define data scope (`shared`, `private`, `firstprivate`, `lastprivate`, `reduction`) to avoid ambiguity and potential errors.
*   **Use `reduction` for Aggregations:** Whenever possible, use the `reduction` clause for summing, averaging, etc., as it's safer and often more efficient than manual synchronization.
*   **Minimize Critical Sections/Locks:** These introduce serialization. Use them only when absolutely necessary.
*   **Test Thoroughly:** Ensure correctness across different numbers of threads and input data.
*   **Understand the Underlying Architecture:** Knowledge of cache coherence and memory hierarchies can help in optimizing performance.

---

### 8. Practice Questions and Exercises

#### Question 1:

What is the primary difference between shared memory and distributed memory systems in the context of parallel programming?

**Answer:**
In shared memory systems, multiple processors/cores can access the same physical memory location directly, allowing implicit data sharing. In distributed memory systems, each processor has its own private memory, and data sharing requires explicit message passing between processors.

---

#### Question 2:

Consider the following C code snippet. What is the potential problem with this code, and how can you fix it using OpenMP?

```c
#include <stdio.h>

int main() {
    int count = 0;
    for (int i = 0; i < 1000; i++) {
        count++;
    }
    printf("Count: %d\n", count);
    return 0;
}
```

**Answer:**
The original code runs sequentially. If we want to parallelize the loop to increment `count`, the `count++` operation would be a **race condition** if multiple threads update `count` concurrently.

**Fix using OpenMP:**

1.  **Using `reduction` (recommended):**
    ```c
    #include <omp.h>
    #include <stdio.h>

    int main() {
        int count = 0;
        #pragma omp parallel for reduction(+:count)
        for (int i = 0; i < 1000; i++) {
            count++;
        }
        printf("Count: %d\n", count);
        return 0;
    }
    ```
2.  **Using `atomic`:**
    ```c
    #include <omp.h>
    #include <stdio.h>

    int main() {
        int count = 0;
        #pragma omp parallel for
        for (int i = 0; i < 1000; i++) {
            #pragma omp atomic update
            count++;
        }
        printf("Count: %d\n", count);
        return 0;
    }
    ```
3.  **Using `critical`:**
    ```c
    #include <omp.h>
    #include <stdio.h>

    int main() {
        int count = 0;
        #pragma omp parallel
        {
            #pragma omp for
            for (int i = 0; i < 1000; i++) {
                #pragma omp critical
                {
                    count++;
                }
            }
        }
        printf("Count: %d\n", count);
        return 0;
    }
    ```

---

#### Question 3:

Explain the difference between the `private` and `firstprivate` clauses in OpenMP. Provide a short code example for each.

**Answer:**
*   **`private`:** Declares a variable as private to each thread. Each thread gets its own copy, and its initial value is undefined. Changes made by one thread do not affect others.
*   **`firstprivate`:** Declares a variable as private to each thread, but initializes each thread's copy with the value of the original variable from the master thread before the parallel region begins.

**Code Example (`private`):**
```c
#include <omp.h>
#include <stdio.h>

int main() {
    int x = 10;
    #pragma omp parallel private(x)
    {
        // Initial value of x is undefined for each thread
        x = omp_get_thread_num(); // Each thread sets its own x
        printf("Thread %d: x = %d\n", omp_get_thread_num(), x);
    }
    // x in the main thread remains 10
    printf("Main thread: x = %d\n", x);
    return 0;
}
```

**Code Example (`firstprivate`):**
```c
#include <omp.h>
#include <stdio.h>

int main() {
    int x = 10;
    #pragma omp parallel firstprivate(x)
    {
        // x is initialized with the value from the main thread (10) for each thread
        printf("Thread %d: x = %d\n", omp_get_thread_num(), x);
        x = x + omp_get_thread_num(); // Each thread modifies its own copy
    }
    // x in the main thread remains 10
    printf("Main thread: x = %d\n", x);
    return 0;
}
```

---

#### Question 4:

What is the purpose of the `schedule` clause in OpenMP, and name two common scheduling strategies.

**Answer:**
The `schedule` clause in OpenMP controls how the iterations of a loop are distributed among the threads in a team. This is important for load balancing and performance, especially when loop iterations have varying execution times.

Two common scheduling strategies are:
1.  **`static`:** Iterations are divided into chunks of roughly equal size and distributed to threads statically before execution begins.
2.  **`dynamic`:** Iterations are divided into smaller chunks and distributed dynamically to threads as they become available during execution.

---

#### Question 5:

When would you prefer to use `#pragma omp task` over `#pragma omp parallel for`?

**Answer:**
You would prefer `#pragma omp task` over `#pragma omp parallel for` when the work cannot be easily structured as a regular loop (i.e., the work is not a sequence of iterations with similar operations) or when the tasks are generated dynamically based on program logic. `#pragma omp parallel for` is best suited for data parallelism on loops with independent iterations. Task parallelism is more general and can handle irregular or data-driven parallelism. For example, a recursive computation like the Fibonacci sequence or a dependency graph of operations is better suited for task parallelism.

---

### 9. Important Points to Remember:

*   **OpenMP is a directive-based API.** You tell the compiler what to parallelize.
*   **Shared memory implies threads can see each other's data.** This is both a convenience and a source of complexity (race conditions).
*   **Understand data scoping:** `shared`, `private`, `firstprivate`, `lastprivate`, `reduction` are crucial for correctness.
*   **Synchronization is key:** Use `critical`, `atomic`, `barrier`, `master`, `single` to control thread execution and data access.
*   **`reduction` is your friend for aggregations.** It's safer and often faster than manual synchronization for sums, products, etc.
*   **Environment variables control runtime behavior** (e.g., `OMP_NUM_THREADS`).
*   **Performance tuning is essential.** Consider overhead, granularity, load balancing, and false sharing.
*   **Always test for correctness!** Parallel programs can be tricky to debug.

---
