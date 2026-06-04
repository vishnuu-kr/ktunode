---
title: "Performance of Symmetric Shared-Memory Processors."
subject: "ADVANCED COMPUTER ARCHITECTURE"
module: "Module 3: Data Level Parallelism."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b860"
status: "completed"
scrapedAt: "2026-05-20T16:42:40.486Z"
---
## Advanced Computer Architecture - Module 3: Data Level Parallelism - Performance of Symmetric Shared-Memory Processors

These notes cover the performance considerations of Symmetric Shared-Memory Processors (SMPs) within the context of Data Level Parallelism (DLP).

**Learning Outcomes:**

*   Understand the architecture of Symmetric Shared-Memory Processors (SMPs).
*   Analyze the performance challenges in SMPs, including cache coherence and memory contention.
*   Identify and apply techniques to improve the performance of SMPs.
*   Evaluate the impact of different memory consistency models on SMP performance.
*   Explain the role of thread-level parallelism in SMP systems.
*   Analyze the impact of false sharing on SMP performance.

**1. Introduction to Symmetric Shared-Memory Processors (SMPs)**

*   **Definition:** SMPs are multiprocessor systems where multiple processors share a single physical address space. All processors have equal access to the memory and I/O devices through a common bus or interconnection network.
*   **Key Characteristics:**
    *   **Shared Memory:** All processors can access the same memory locations.
    *   **Symmetric Access:** Uniform memory access (UMA) - equal access time to all memory locations for all processors.
    *   **Multiple Processors:** Two or more processors connected to the shared memory.
    *   **Interconnect:** Uses a common bus, crossbar switch, or other interconnection network.
*   **Architecture:**  Generally consists of multiple processors (cores), each with its own cache, connected to a shared memory system.  The memory system includes the main memory and the interconnection network.
*   **Advantages:**
    *   **Ease of programming:** Shared memory simplifies data sharing and communication between threads/processes.
    *   **Scalability:** SMPs can be scaled to a certain number of processors (typically up to a few dozen) before communication overhead becomes a bottleneck.
    *   **Cost-effective:**  Sharing memory reduces overall system cost compared to distributed memory systems.
*   **Disadvantages:**
    *   **Cache Coherence:** Maintaining consistency of data across multiple caches is a significant challenge.
    *   **Memory Contention:** Multiple processors accessing the same memory locations can lead to performance degradation.
    *   **Limited Scalability:**  The shared memory and interconnect become bottlenecks as the number of processors increases.

**2. Performance Challenges in SMPs**

*   **Cache Coherence Problem:**
    *   **Definition:** The problem of ensuring that all processors have a consistent view of shared data in their caches.  If one processor modifies a data item, all other processors that have cached that item need to be updated or invalidated.
    *   **Solutions:**
        *   **Snooping Protocols:** Each cache "snoops" on the bus or interconnect to monitor memory transactions.  When a write operation occurs, caches containing the same data are either invalidated or updated.
            *   **Write-Invalidate:** Upon writing, invalidate all other copies. Simple, widely used.
            *   **Write-Update:** Upon writing, update all other copies. Can generate more bus traffic.
        *   **Directory-Based Protocols:** A directory keeps track of which caches hold which data blocks.  When a write operation occurs, the directory is consulted to determine which caches need to be updated or invalidated. More scalable, but more complex.

*   **Memory Contention:**
    *   **Definition:**  Multiple processors attempting to access the same memory locations simultaneously, leading to serialization of memory accesses and performance degradation.
    *   **Factors contributing to memory contention:**
        *   Number of processors.
        *   Memory access patterns of the programs.
        *   Bandwidth of the memory system and interconnect.
    *   **Mitigation Techniques:**
        *   **Increasing Memory Bandwidth:** Using faster memory technologies or wider memory buses.
        *   **Interleaving Memory Banks:** Distributing memory across multiple banks so that consecutive memory locations are in different banks, allowing for parallel access.
        *   **Reducing False Sharing:** Restructuring data to minimize sharing of cache lines.
        *   **Efficient Synchronization:** Optimizing synchronization primitives (e.g., locks) to reduce contention.

*   **False Sharing:**
    *   **Definition:**  Occurs when multiple processors access different data items that happen to reside within the same cache line.  Even though the data items are logically independent, modifications by one processor can cause invalidations or updates of the cache line in other processors, leading to unnecessary cache misses and performance degradation.
    *   **Example:**  Consider two processors P1 and P2, each updating different elements of an array A. If these elements happen to be located in the same cache line, modifications by P1 will invalidate the cache line in P2's cache (and vice versa), even though P1 and P2 are operating on different data.
    *   **Mitigation:**
        *   **Padding:**  Add padding to data structures to ensure that frequently accessed data items reside in separate cache lines.
        *   **Data Structure Reorganization:**  Rearrange data structures to reduce the likelihood of false sharing.

**3. Techniques to Improve SMP Performance**

*   **Cache-Conscious Programming:**
    *   **Goal:** Design algorithms and data structures to exploit cache locality and minimize cache misses.
    *   **Techniques:**
        *   **Loop Blocking (Tiling):** Divide large loops into smaller blocks that fit into the cache, improving temporal locality.
        *   **Data Layout Optimization:** Arrange data structures to improve spatial locality.

*   **Efficient Synchronization:**
    *   **Goal:** Minimize contention for shared resources.
    *   **Techniques:**
        *   **Lock Optimization:**  Using efficient locking algorithms (e.g., spinlocks, mutexes) and minimizing lock holding time.
        *   **Lock-Free Data Structures:**  Using atomic operations to implement data structures that do not require explicit locks.
        *   **Reader-Writer Locks:**  Allow multiple readers to access shared data concurrently, while providing exclusive access to writers.

*   **Data Partitioning:**
    *   **Goal:**  Divide the workload and data across multiple processors to achieve parallelism.
    *   **Techniques:**
        *   **Static Partitioning:**  Divide the data and assign it to processors before the computation begins.  Simple, but may not be optimal if the workload is unevenly distributed.
        *   **Dynamic Partitioning:**  Divide the workload dynamically at runtime, allowing processors to take on more work if they are idle.  More flexible, but may introduce overhead.

*   **Compiler Optimizations:**
    *   **Goal:**  Automatically optimize code for parallel execution on SMPs.
    *   **Techniques:**
        *   **Automatic Parallelization:**  The compiler analyzes the code and automatically identifies sections that can be executed in parallel.
        *   **Loop Unrolling:**  Increase instruction-level parallelism.
        *   **Data Prefetching:**  Load data into the cache before it is needed.

**4. Memory Consistency Models**

*   **Definition:** Specifies the rules for how memory operations from different processors appear to be ordered.
*   **Importance:** Affects the ease of programming and the performance of parallel programs.
*   **Types:**
    *   **Sequential Consistency (SC):**  The strongest and most intuitive model.  Guarantees that the result of any execution is the same as if the operations of all processors were executed in some sequential order, and the operations of each individual processor appear in this sequence in the order specified by its program.  Simple to program but can be inefficient.
    *   **Relaxed Consistency Models:**  Weaken some of the requirements of sequential consistency to improve performance. Common types include:
        *   **Total Store Ordering (TSO):**  Allows writes to be buffered and reordered, but maintains the order of reads and writes to the same location.
        *   **Partial Store Ordering (PSO):**  Allows writes to be reordered freely.
        *   **Weak Ordering:**  Relies on explicit synchronization operations (e.g., locks) to enforce ordering.

*   **Trade-offs:** Stronger consistency models (e.g., SC) are easier to program but can be less efficient. Weaker consistency models can offer better performance but are more difficult to program correctly.

**5. Thread-Level Parallelism in SMP Systems**

*   **Definition:** A form of parallel computing where multiple threads execute concurrently on different processors within an SMP system.
*   **Importance:** Thread-level parallelism is the primary way to exploit the multiple processors in an SMP.
*   **Programming Models:**
    *   **Shared-Memory Programming (e.g., OpenMP, Pthreads):** Threads share a common address space, making data sharing and communication easy.  Requires careful synchronization to avoid race conditions.
    *   **Message Passing (e.g., MPI):** Threads communicate by sending and receiving messages.  More complex to program but can offer better scalability.

**6.  Illustrative Example:  Parallel Summation**

Consider calculating the sum of a large array using multiple threads on an SMP.

```c++
#include <iostream>
#include <vector>
#include <thread>

using namespace std;

const int NUM_THREADS = 4;
const int ARRAY_SIZE = 1000000;

// Function to calculate the partial sum for a thread
void partial_sum(const vector<int>& arr, int start, int end, long long& result) {
    long long sum = 0;
    for (int i = start; i < end; ++i) {
        sum += arr[i];
    }
    result = sum;
}

int main() {
    vector<int> arr(ARRAY_SIZE);
    for (int i = 0; i < ARRAY_SIZE; ++i) {
        arr[i] = 1; // Initialize array with 1s
    }

    vector<thread> threads(NUM_THREADS);
    vector<long long> partial_sums(NUM_THREADS);

    int chunk_size = ARRAY_SIZE / NUM_THREADS;

    // Create and start threads
    for (int i = 0; i < NUM_THREADS; ++i) {
        int start = i * chunk_size;
        int end = (i == NUM_THREADS - 1) ? ARRAY_SIZE : (i + 1) * chunk_size; //Handle remainders
        threads[i] = thread(partial_sum, ref(arr), start, end, ref(partial_sums[i]));
    }

    // Wait for threads to finish
    for (int i = 0; i < NUM_THREADS; ++i) {
        threads[i].join();
    }

    // Calculate the total sum
    long long total_sum = 0;
    for (int i = 0; i < NUM_THREADS; ++i) {
        total_sum += partial_sums[i];
    }

    cout << "Total sum: " << total_sum << endl;

    return 0;
}
```

*   **Explanation:**
    *   The array is divided into chunks, and each thread calculates the sum of its assigned chunk.
    *   The `partial_sum` function calculates the sum of a sub-array.
    *   Threads are created and started, each executing the `partial_sum` function.
    *   The main thread waits for all threads to finish.
    *   Finally, the main thread sums the partial sums to obtain the total sum.

**Important Considerations for the Example:**

*   **Cache Coherence:** The individual threads will likely have their own caches. Changes to the shared data (although in different regions of the array) will be kept consistent by the system using cache coherence.
*   **Memory Contention:** If multiple threads are working on closely located data within the array in memory, there could be contention in accessing memory if all threads are trying to read/write simultaneously.
*   **False Sharing:** If `chunk_size` is small, data from neighboring threads' partitions might reside in the same cache line, leading to false sharing. Padding could be used.
*   **Synchronization:** No explicit synchronization is needed in this example because each thread works on its own independent data region. However, when updating shared variables, synchronization is crucial.

**7. Practice Questions/Exercises with Answers**

1.  **Question:** Explain the cache coherence problem in SMPs and describe two common solutions.
    *   **Answer:** The cache coherence problem arises when multiple processors in an SMP have cached the same data. If one processor modifies the data, the other caches become inconsistent. Two common solutions are snooping protocols (write-invalidate and write-update) and directory-based protocols.

2.  **Question:** What is false sharing, and how can it impact performance? Give an example.
    *   **Answer:** False sharing occurs when multiple processors access different data items that happen to reside within the same cache line. This can lead to unnecessary cache invalidations and performance degradation.  Example: Two threads modify adjacent elements in an array, and these elements reside in the same cache line. Even though the threads are working on different data, each update will invalidate the cache line in the other thread's cache.

3.  **Question:**  What are the trade-offs between using sequential consistency and a relaxed consistency model?
    *   **Answer:** Sequential consistency is easier to program and reason about, but it can be less efficient due to the strict ordering constraints. Relaxed consistency models can offer better performance by allowing reordering of memory operations, but they are more difficult to program correctly because programmers need to explicitly manage synchronization and memory ordering.

4.  **Question:** How can increasing the memory bandwidth improve the performance of an SMP system?
    *   **Answer:** Increasing memory bandwidth allows more data to be transferred between the processors and the shared memory per unit of time. This reduces the impact of memory contention and allows processors to access data more quickly, leading to improved performance.

5.  **Question:**  Describe how loop blocking (tiling) can improve cache performance.
    *   **Answer:** Loop blocking divides a large loop into smaller blocks (tiles) that fit into the cache. This improves temporal locality, as the same data is reused multiple times within a block before being replaced in the cache. This reduces the number of cache misses and improves overall performance.

6.  **Question:**  Consider the following C code snippet run on a multi-core system where A and B are arrays. Each array is much bigger than any single cache.  Discuss potential performance issues due to data locality.  Suggest an improvement.

```c
  for (i = 0; i < N; i++) {
    for (j = 0; j < N; j++) {
       A[i][j] = A[i][j] + B[j][i];
    }
  }
```

*   **Answer:**  The outer loop iterates through rows of A (A[i][j]), which is good for spatial locality if A is stored in row-major order. However, B[j][i] accesses elements in column-major order.  This leads to strided access, causing frequent cache misses as consecutive accesses to B are far apart in memory.  The improvement is to transpose the B array *before* the main computation, so that the loop then iterates in row-major order of B, greatly improving spatial locality.

**8. Important Points to Remember**

*   **Cache coherence is critical for correctness in SMPs.**
*   **Memory contention can limit performance as the number of processors increases.**
*   **False sharing can be a subtle but significant performance bottleneck.**
*   **Choosing the right memory consistency model is a trade-off between programmability and performance.**
*   **Thread-level parallelism is essential for exploiting the processing power of SMPs.**
*   **Understanding data locality and cache behavior is crucial for writing efficient parallel programs.**
