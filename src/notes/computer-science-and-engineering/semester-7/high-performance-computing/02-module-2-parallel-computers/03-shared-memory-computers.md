---
title: "Shared-memory computers"
subject: "HIGH PERFORMANCE COMPUTING"
module: "Module 2: Parallel computers"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c622"
status: "completed"
scrapedAt: "2026-05-20T17:07:06.563Z"
---
# High Performance Computing: Module 2 - Parallel Computers
## Topic: Shared-Memory Computers

---

### **Introduction to Shared-Memory Computers**

Shared-memory computers are a fundamental architecture in parallel computing. In this model, multiple processors (or cores) have access to a single, unified address space. This means that all processors can read from and write to the same memory locations, simplifying programming as data doesn't need to be explicitly moved between processors. However, managing concurrent access to shared data becomes a critical challenge.

---

### **Key Concepts and Definitions**

*   **Shared Address Space:** The core characteristic of shared-memory systems. All processors can access any memory location directly using its address.
*   **Processors/Cores:** The individual computing units within the system that execute instructions.
*   **Memory Hierarchy:**
    *   **Registers:** Fastest memory, located within the CPU.
    *   **Caches (L1, L2, L3):** Small, fast memory buffers located on or near the CPU, storing frequently accessed data to reduce latency. Each core typically has its own private caches (L1, L2), and there might be a shared L3 cache.
    *   **Main Memory (RAM):** Larger, slower memory accessible by all processors.
*   **Interconnect:** The hardware infrastructure that connects processors to each other and to the main memory.
*   **Symmetric Multiprocessing (SMP):** A common type of shared-memory architecture where all processors are treated equally and have equal access to memory and I/O.
*   **Non-Uniform Memory Access (NUMA):** A variation where memory access time depends on the memory location relative to the processor. Processors have faster access to "local" memory attached to them than to "remote" memory attached to other processors.

---

### **Types of Shared-Memory Architectures**

#### **1. Uniform Memory Access (UMA)**

*   **Definition:** All processors have the same access time to all memory locations.
*   **Characteristics:**
    *   Simpler to program due to predictable memory access times.
    *   Often implemented with a shared bus or a crossbar switch.
    *   Scalability is limited as contention for the shared bus/switch increases with the number of processors.
*   **Example:** Early multi-core processors, small SMP systems.
*   **Diagrammatic Representation (Conceptual):**
    ```
    +-------------+       +-------------+
    |  Processor 1|-------|             |
    +-------------+       |  Shared     |
                          |  Memory     |
    +-------------+       |             |
    |  Processor 2|-------|             |
    +-------------+       +-------------+
           ...
    ```

#### **2. Non-Uniform Memory Access (NUMA)**

*   **Definition:** Memory access time varies depending on the proximity of the processor to the memory controller. Processors have faster access to their local memory banks.
*   **Characteristics:**
    *   **Local Memory:** Memory directly attached to a processor.
    *   **Remote Memory:** Memory attached to another processor.
    *   **Scalability:** Generally scales better than UMA systems because traffic to local memory doesn't contend with traffic to other processors' memory.
    *   **Programming Complexity:** Requires awareness of data locality to achieve optimal performance. If a processor frequently accesses data in remote memory, performance degrades significantly.
*   **Example:** Modern multi-processor servers, many HPC systems.
*   **Diagrammatic Representation (Conceptual):**
    ```
    +-------------+       +-------------+
    |  Processor 1|-------|  Local Mem 1|
    +-------------+       +-------------+
                                |
    +-------------+       +-------------+
    |  Processor 2|-------|  Local Mem 2|
    +-------------+       +-------------+
           ...                 ...

    (Interconnect connects processors to each other's local memory banks)
    ```

---

### **Challenges in Shared-Memory Systems**

#### **1. Cache Coherence**

*   **Definition:** The problem of ensuring that all processors have a consistent view of data, especially when multiple processors cache the same memory location. If one processor modifies its cached copy, other processors holding the same data need to be updated or invalidated.
*   **Mechanisms:**
    *   **Snooping Protocols:** Caches "snoop" the bus or interconnect for memory transactions and update their state accordingly.
        *   **Write-Invalidate:** When a processor writes to a cached block, it broadcasts an invalidate message. Other caches holding that block mark it as invalid.
        *   **Write-Update:** When a processor writes to a cached block, it broadcasts the updated data. Other caches holding that block update their copy.
    *   **Directory-Based Protocols:** A central directory keeps track of which caches hold which memory blocks. This is more scalable than snooping for larger systems.
*   **Example:** If Processor A reads variable `x` into its cache, and then Processor B writes a new value to `x`, Processor A's cached copy of `x` must be made consistent.
*   **Important Point:** Cache coherence protocols introduce overhead, impacting performance.

#### **2. Memory Consistency**

*   **Definition:** Defines the order in which memory operations (reads and writes) appear to execute from the perspective of different processors.
*   **Relaxed Memory Consistency Models:** Processors can reorder memory operations for performance optimization, as long as certain constraints are met. This can lead to surprising behavior if not handled carefully.
    *   **Sequential Consistency:** The simplest model, where all processors observe memory operations in the same sequential order, as if executed by a single processor. However, it can be inefficient.
    *   **Total Store Order (TSO):** A common relaxed model where writes are ordered relative to other writes, but reads can be reordered with writes.
    *   **Partial Store Order (PSO), Weak Ordering (WO):** Even more relaxed models offering greater performance potential but requiring explicit synchronization.
*   **Synchronization Primitives:** Used to enforce ordering and prevent race conditions.
    *   **Memory Barriers (Fences):** Instructions that ensure all preceding memory operations are completed before any subsequent memory operations are performed.
*   **Example:**
    ```c
    // Processor A
    data = 10;
    flag = 1;

    // Processor B
    while (flag == 0); // Wait for flag
    print(data);       // What value will be printed?
    ```
    Without proper synchronization (e.g., memory barriers), Processor B might see `flag` become 1 before it sees `data` become 10, leading to an incorrect output.

#### **3. Synchronization and Parallel Programming Models**

*   **Race Condition:** A situation where the outcome of an execution depends on the unpredictable timing of multiple threads or processes accessing shared data.
*   **Mutual Exclusion:** Ensuring that only one thread or process can access a critical section of code (that modifies shared data) at a time.
    *   **Locks (Mutexes):** A mechanism to acquire exclusive access to a resource. A thread tries to acquire a lock; if successful, it can access the resource; otherwise, it waits.
    *   **Semaphores:** A signaling mechanism used to control access to a shared resource by multiple processes or threads.
*   **Atomic Operations:** Operations that are indivisible and appear to happen instantaneously from the perspective of other processors. They guarantee that no other processor can interfere during the operation.
    *   **Fetch-and-Add:** Atomically reads a value, adds to it, and writes the new value back.
    *   **Compare-and-Swap (CAS):** Atomically compares a memory location's value with an expected value, and if they match, updates the memory location with a new value.
*   **Parallel Programming Models/APIs:**
    *   **Threads (e.g., Pthreads, OpenMP):** Allow multiple threads of execution within a single process, sharing the same address space.
        *   **OpenMP:** A directive-based API for shared-memory parallelism, often used with C, C++, and Fortran. It uses compiler directives (`#pragma omp ...`) to specify parallel regions.
    *   **Shared Memory Libraries (e.g., TBB - Threading Building Blocks):** Provide higher-level abstractions for parallel programming.

---

### **Advantages of Shared-Memory Computers**

*   **Simpler Programming Model:** Easier to write parallel programs compared to distributed-memory systems, as data sharing is implicit.
*   **Lower Latency for Data Access:** Processors can directly access data in main memory without explicit communication messages.
*   **Efficient for Fine-Grained Parallelism:** Well-suited for problems where tasks are small and frequently need to access shared data.

---

### **Disadvantages of Shared-Memory Computers**

*   **Scalability Limitations:** The shared bus or interconnect can become a bottleneck as the number of processors increases, leading to contention.
*   **Cache Coherence Overhead:** Maintaining cache coherence adds complexity and performance overhead.
*   **Synchronization Overhead:** Proper synchronization is crucial but can be costly and difficult to implement correctly.
*   **Cost:** Large-scale shared-memory systems can be very expensive.

---

### **Examples of Shared-Memory Programming with OpenMP**

**Scenario:** Summing elements of an array.

```c
#include <stdio.h>
#include <omp.h> // Include OpenMP header

#define N 1000000
#define NUM_THREADS 4

int main() {
    int arr[N];
    long long sum = 0;
    int i;

    // Initialize array
    for (i = 0; i < N; i++) {
        arr[i] = i + 1;
    }

    // Set number of threads (optional, can be set via environment variable OMP_NUM_THREADS)
    omp_set_num_threads(NUM_THREADS);

    // Parallel region for summing
    #pragma omp parallel for reduction(+:sum)
    for (i = 0; i < N; i++) {
        sum += arr[i]; // Each thread adds its part to the shared 'sum'
    }

    printf("Sum of array elements: %lld\n", sum);

    return 0;
}
```

**Explanation:**

*   `#pragma omp parallel for`: This directive tells OpenMP to parallelize the subsequent `for` loop. The loop iterations are automatically divided among the available threads.
*   `reduction(+:sum)`: This is a crucial clause for shared-memory parallel programming. It instructs OpenMP to create a private copy of the `sum` variable for each thread. Each thread computes its local sum, and at the end of the parallel region, OpenMP automatically combines these local sums into the global `sum` variable in a safe, synchronized manner. This avoids race conditions where multiple threads might try to update the single global `sum` simultaneously.

---

### **Important Points to Remember**

*   **Shared memory means a single address space for all processors.**
*   **UMA vs. NUMA:** UMA has uniform access times, NUMA has varying access times (local is faster).
*   **Cache coherence is vital for data consistency** but introduces overhead. Snooping and directory-based protocols are common.
*   **Memory consistency models define the order of operations.** Be aware of relaxed models and use memory barriers when necessary.
*   **Synchronization is essential to avoid race conditions** using locks, semaphores, and atomic operations.
*   **OpenMP is a popular directive-based API for shared-memory parallelism.**
*   **`reduction` clauses in OpenMP are powerful for safely aggregating results** from parallel computations.

---

### **Practice Questions**

1.  **What is the fundamental difference between UMA and NUMA architectures?**
2.  **Explain the problem of cache coherence in shared-memory systems. What are the two main approaches to solve it?**
3.  **Consider the following code snippet. What is a potential issue, and how could it be resolved using OpenMP?**
    ```c
    int counter = 0;
    // In a parallel loop
    counter++;
    ```
4.  **Why is understanding memory consistency models important when programming shared-memory systems?**
5.  **What is the purpose of a `reduction` clause in OpenMP? Provide a simple example.**

---

### **Answers to Practice Questions**

1.  **UMA (Uniform Memory Access)** systems have uniform memory access times for all processors, regardless of memory location. **NUMA (Non-Uniform Memory Access)** systems have varying memory access times; processors have faster access to their "local" memory than to "remote" memory.
2.  **Cache coherence** is the problem of ensuring that all processors have a consistent view of data, especially when multiple processors cache the same memory location and one of them modifies it. The two main approaches are:
    *   **Snooping Protocols:** Caches monitor the interconnect for memory transactions and update their state.
    *   **Directory-Based Protocols:** A central directory tracks which caches hold which data blocks.
3.  **Potential Issue:** A **race condition**. Multiple threads incrementing `counter` concurrently can lead to an incorrect final value because the `counter++` operation is not atomic (it involves reading the current value, incrementing it, and writing it back).
    **Resolution using OpenMP:**
    ```c
    int counter = 0;
    // In a parallel loop
    #pragma omp atomic update
    counter++;
    // Or using reduction (if it's part of a larger calculation)
    // #pragma omp parallel for reduction(+:counter) ...
    ```
    The `#pragma omp atomic update` directive ensures that the increment operation is performed atomically.
4.  **Memory consistency models** define the order in which memory operations appear to execute across different processors. When using relaxed consistency models (which offer performance benefits by allowing reordering), it's crucial to understand these models to ensure that your program behaves correctly. Without proper understanding, programmers might assume operations happen in a specific order that the hardware doesn't guarantee, leading to subtle bugs. Using synchronization primitives like memory barriers is key to enforcing order when needed.
5.  The purpose of a `reduction` clause in OpenMP is to perform a **reduction operation** (like sum, product, min, max) on a shared variable safely in a parallel loop. OpenMP handles the creation of private copies for each thread, the local accumulation, and the final combination of results, preventing race conditions.
    **Simple Example:** Summing array elements:
    ```c
    long long total_sum = 0;
    #pragma omp parallel for reduction(+:total_sum)
    for (int i = 0; i < N; ++i) {
        total_sum += array[i];
    }
    ```
    Here, `total_sum` is the variable being reduced, and `+` specifies the reduction operator.

---
