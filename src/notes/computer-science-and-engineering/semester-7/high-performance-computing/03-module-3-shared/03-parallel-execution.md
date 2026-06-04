---
title: "Parallel execution"
subject: "HIGH PERFORMANCE COMPUTING"
module: "Module 3: Shared"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c62e"
status: "completed"
scrapedAt: "2026-05-20T17:07:14.704Z"
---
# HIGH PERFORMANCE COMPUTING
## Module 3: Shared Memory Parallelism
## Topic: Parallel Execution

---

### **Learning Outcomes:**

Upon successful completion of this topic, you should be able to:

*   Understand the fundamental principles of parallel execution in shared memory systems.
*   Identify and explain different execution models for parallel programming.
*   Distinguish between different types of parallelism and their applicability.
*   Explain the concept of a thread and its role in parallel execution.
*   Understand the challenges and techniques associated with thread synchronization.
*   Describe common parallel programming paradigms and their use cases.
*   Analyze the performance implications of parallel execution.

---

### **1. Introduction to Parallel Execution in Shared Memory Systems**

Shared memory parallelism is a fundamental concept in High Performance Computing (HPC) where multiple processing units (cores, processors) can access and manipulate the same region of memory. This allows for efficient data sharing and communication between parallel tasks.

*   **Shared Memory System:**
    *   A computer architecture where all processors share a common address space.
    *   This common address space allows processors to directly read from and write to the same memory locations.
    *   Contrast with Distributed Memory Systems where each processor has its own private memory and communication happens through explicit message passing.

*   **Parallel Execution:**
    *   The concurrent execution of multiple computational tasks.
    *   In shared memory systems, these tasks often operate on shared data, requiring careful coordination.
    *   **Goal:** To speed up computation by dividing the workload among multiple processing units.

---

### **2. Execution Models for Parallel Programming**

Several models dictate how parallel tasks are structured and executed in a shared memory environment.

*   **Task Parallelism (Control Parallelism):**
    *   Focuses on dividing a program into independent tasks that can be executed concurrently.
    *   Each task might operate on different data or perform different sub-operations of the overall problem.
    *   **Example:** Running multiple independent simulations simultaneously, each with different input parameters.

*   **Data Parallelism:**
    *   Focuses on applying the same operation to different parts of a large dataset concurrently.
    *   The same code is executed by multiple processors, but each processor operates on a unique subset of the data.
    *   **Example:** Performing a vector addition where each processor adds a distinct portion of the vectors. `C[i] = A[i] + B[i]` for `i` in `[0, N-1]`. Processor 1 handles `i` from `0` to `N/4`, Processor 2 from `N/4+1` to `N/2`, and so on.

*   **Hybrid Parallelism:**
    *   Combines both task and data parallelism.
    *   Allows for greater flexibility in exploiting parallelism at different levels of a program.
    *   **Example:** In a complex simulation, different tasks (e.g., physics calculations, data I/O) might run in parallel (task parallelism), and within each task, large datasets might be processed in parallel (data parallelism).

---

### **3. Threads: The Building Blocks of Parallel Execution**

A thread is the smallest unit of execution that can be managed independently by a scheduler.

*   **Definition of a Thread:**
    *   A lightweight process that shares resources (code, data, open files) with other threads within the same process.
    *   Each thread has its own program counter, stack, and registers.

*   **Thread Creation and Management:**
    *   Threads are typically created using libraries like **POSIX Threads (pthreads)** or **OpenMP**.
    *   **pthreads:** A low-level API for creating and managing threads. Requires explicit thread creation, joining, and synchronization.
    *   **OpenMP:** A higher-level API that uses compiler directives (`#pragma`) to parallelize code. Simplifies thread management for data parallelism.

*   **Advantages of Threads:**
    *   **Lower Overhead:** Creating and managing threads is generally less expensive than creating processes.
    *   **Efficient Resource Sharing:** Threads within the same process share memory and other resources, reducing the need for explicit inter-process communication (IPC).
    *   **Faster Context Switching:** Context switching between threads within the same process is faster than between processes.

*   **Example (Conceptual using OpenMP):**
    ```c++
    #include <iostream>
    #include <omp.h>

    int main() {
        int i;
        // This directive tells OpenMP to parallelize the following loop
        #pragma omp parallel for
        for (i = 0; i < 10; ++i) {
            // Each thread executes this code block for a portion of the loop iterations
            std::cout << "Hello from thread " << omp_get_thread_num() << std::endl;
        }
        return 0;
    }
    ```
    *   When compiled with an OpenMP-enabled compiler and run, this code will print "Hello from thread X" multiple times, where X is the thread ID. The loop iterations are distributed among the available threads.

---

### **4. Thread Synchronization**

When multiple threads access and modify shared data concurrently, there's a risk of race conditions and inconsistent results. Synchronization mechanisms are crucial to prevent these issues.

*   **Race Condition:**
    *   A situation where the outcome of a computation depends on the unpredictable timing of multiple threads accessing and modifying shared data.
    *   **Example:** Two threads try to increment a shared counter. Thread 1 reads the counter (value 5), Thread 2 reads the counter (value 5). Thread 1 increments its local copy to 6 and writes back. Thread 2 increments its local copy to 6 and writes back. The counter should be 7, but it's only 6.

*   **Critical Section:**
    *   A segment of code that accesses shared resources and must be executed by only one thread at a time.

*   **Synchronization Primitives:**

    *   **Mutexes (Mutual Exclusion Locks):**
        *   A lock that can be owned by only one thread at a time.
        *   A thread must acquire the mutex before entering a critical section and release it upon exiting.
        *   **Operations:** `lock()`, `unlock()`.
        *   **Example (Conceptual using pthreads):**
            ```c++
            #include <pthread.h>
            // ...
            pthread_mutex_t my_mutex;
            // ...
            pthread_mutex_init(&my_mutex, NULL); // Initialize mutex
            // ...
            void critical_function() {
                pthread_mutex_lock(&my_mutex); // Acquire lock
                // Critical Section: Access shared data
                // ...
                pthread_mutex_unlock(&my_mutex); // Release lock
            }
            ```

    *   **Semaphores:**
        *   A more general synchronization primitive than mutexes.
        *   An integer variable that is accessed only through two atomic operations: `wait()` (decrement) and `signal()` (increment).
        *   Used for controlling access to a pool of resources or signaling between threads.
        *   Can be binary (acting like a mutex) or counting.

    *   **Barriers:**
        *   A point in the program where all participating threads must wait until every thread has reached that point before any thread can proceed.
        *   Useful for synchronizing stages of parallel computation.
        *   **Example (Conceptual using OpenMP):**
            ```c++
            #pragma omp parallel
            {
                // ... computation stage 1 ...
                #pragma omp barrier // All threads wait here
                // ... computation stage 2 ...
            }
            ```

    *   **Atomic Operations:**
        *   Operations that are guaranteed to be executed indivisibly and without interruption.
        *   Often used for simple updates like incrementing or decrementing shared variables.
        *   **Example (Conceptual using C++11 atomics):**
            ```c++
            #include <atomic>
            std::atomic<int> shared_counter(0);
            // ...
            shared_counter++; // Atomic increment
            ```

---

### **5. Common Parallel Programming Paradigms**

These paradigms provide structured approaches to designing and implementing parallel programs.

*   **Shared Variable Parallelism:**
    *   Threads communicate and coordinate by reading and writing to shared variables in memory.
    *   Requires careful use of synchronization primitives to avoid race conditions.
    *   **Example:** Many parallel algorithms for sorting, searching, and numerical computations.

*   **Fork-Join Parallelism:**
    *   A pattern where a process (or thread) forks multiple child threads to perform sub-tasks concurrently and then joins them back, waiting for all children to complete before proceeding.
    *   **Example:** The basic structure of many parallel loops and recursive parallel algorithms. OpenMP's `#pragma omp parallel for` implicitly uses a fork-join model.

*   **Message Passing Interface (MPI) - (Brief Mention for Contrast):**
    *   While primarily for distributed memory systems, some HPC applications use a hybrid MPI+Threads approach where MPI handles inter-node communication and threads handle intra-node parallelism (shared memory). This topic focuses on the shared memory part.

---

### **6. Performance Implications of Parallel Execution**

Achieving good performance in parallel execution involves understanding and mitigating potential bottlenecks.

*   **Speedup:**
    *   The ratio of sequential execution time to parallel execution time.
    *   **Formula:** `Speedup (S) = T_sequential / T_parallel`

*   **Efficiency:**
    *   Measures how well the parallel system utilizes the available processing resources.
    *   **Formula:** `Efficiency (E) = Speedup / Number of Processors`

*   **Amdahl's Law:**
    *   A law that defines the maximum possible speedup achievable by parallelizing a task.
    *   It states that the speedup is limited by the sequential portion of the task.
    *   **Formula:** `Speedup = 1 / [(1 - P) + (P / S)]`
        *   `P`: The fraction of the program that can be parallelized.
        *   `S`: The speedup of the parallelizable part (which can be up to the number of processors).
    *   **Key Takeaway:** Even with infinite processors, the speedup is limited by the inherently sequential parts of the code.

*   **Gustafson's Law:**
    *   An observation that, for a fixed time, the speedup achieved by parallelization increases as the problem size increases.
    *   As problem size grows, the parallelizable portion also grows, potentially overcoming the limitations of the sequential part.

*   **Overheads:**
    *   **Thread creation/destruction:** Cost of setting up and tearing down threads.
    *   **Synchronization:** Time spent waiting for locks, barriers, etc.
    *   **Communication:** In shared memory, this is implicit through memory access, but cache coherence protocols can introduce delays.
    *   **Load Imbalance:** When work is not evenly distributed among threads, some threads finish early and remain idle while others are still working.

*   **Load Balancing:**
    *   Distributing work evenly among threads to ensure they all finish around the same time.
    *   **Static Load Balancing:** Work is assigned to threads before execution.
    *   **Dynamic Load Balancing:** Work is assigned to threads as they become available.

---

### **Important Points to Remember:**

*   **Shared memory** is key: all processors can access the same memory.
*   **Threads** are the fundamental units of parallel execution in shared memory.
*   **Task parallelism** and **data parallelism** are the two main ways to divide work.
*   **Synchronization** is critical to prevent race conditions and ensure correctness. Mutexes, semaphores, barriers, and atomics are common tools.
*   **Amdahl's Law** highlights the limitation of parallel speedup due to sequential portions.
*   **Overheads** (creation, synchronization, communication) can significantly impact actual performance.
*   **Load balancing** is essential for maximizing utilization of processing resources.

---

### **Practice Questions/Exercises:**

1.  **Concept Identification:** Differentiate between task parallelism and data parallelism with a concise example for each.
2.  **Race Condition Scenario:** Describe a simple scenario where a race condition could occur when two threads update a shared variable without synchronization.
3.  **Synchronization Tool Choice:** If you need to ensure that only one thread at a time can access a shared data structure for reading and writing, which synchronization primitive would be most appropriate and why?
4.  **Amdahl's Law Application:** A program has 10% of its execution time in a serial part and 90% in a parallelizable part. If you use 16 processors for the parallel part, what is the maximum theoretical speedup you can achieve for the entire program?
5.  **Thread vs. Process:** Briefly explain two key advantages of using threads over processes in a shared memory environment.

---

### **Answers to Practice Questions:**

1.  **Concept Identification:**
    *   **Task Parallelism:** Dividing a program into independent functional units (tasks). *Example:* Running a data preprocessing task and a visualization task concurrently.
    *   **Data Parallelism:** Applying the same operation to different parts of a large dataset. *Example:* Computing the square of each element in a large array where different threads process different ranges of the array.

2.  **Race Condition Scenario:**
    Imagine two threads trying to increment a shared counter variable initialized to 0.
    *   Thread 1 reads the value (0).
    *   Thread 2 reads the value (0).
    *   Thread 1 increments its local copy to 1 and writes it back to the shared counter.
    *   Thread 2 increments its local copy to 1 and writes it back to the shared counter.
    The final value of the counter is 1, but it should have been 2. This is a race condition.

3.  **Synchronization Tool Choice:**
    A **mutex** (or a binary semaphore) would be most appropriate. Mutexes provide mutual exclusion, ensuring that only one thread can acquire the lock and enter the critical section (accessing the shared data structure) at any given time.

4.  **Amdahl's Law Application:**
    *   `P` (fraction parallelizable) = 0.90
    *   `1 - P` (fraction serial) = 0.10
    *   `S` (speedup of parallel part) = 16 (assuming perfect scaling for the parallelizable part)
    *   Speedup = 1 / [(0.10) + (0.90 / 16)]
    *   Speedup = 1 / [0.10 + 0.05625]
    *   Speedup = 1 / 0.15625
    *   Speedup = 6.4

5.  **Thread vs. Process:**
    *   **Lower Overhead:** Threads are generally cheaper to create and manage than processes.
    *   **Efficient Resource Sharing:** Threads within the same process share memory and other resources, making data sharing and communication much easier and faster compared to processes which typically require explicit inter-process communication mechanisms.
