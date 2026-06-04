---
title: "Centralized shared memory architecture Cache coherence and snooping protocol (Implementation details – not required)."
subject: "ADVANCED COMPUTER ARCHITECTURE"
module: "Module 3: Data Level Parallelism."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b85f"
status: "completed"
scrapedAt: "2026-05-20T16:42:39.782Z"
---
# ADVANCED COMPUTER ARCHITECTURE - Module 3: Data Level Parallelism - Centralized Shared Memory Architecture & Cache Coherence

## Topic: Centralized Shared Memory Architecture and Cache Coherence (Snooping Protocol)

**Learning Outcomes:**

*   Understand the architecture of centralized shared memory systems.
*   Explain the concept of cache coherence and its importance.
*   Describe the principles of snooping protocols for maintaining cache coherence.
*   Differentiate between various types of snooping protocols (conceptually).
*   Recognize the challenges and limitations of centralized shared memory architectures.

---

### 1. Centralized Shared Memory Architecture (SMP - Symmetric Multiprocessor)

*   **Definition:** A shared-memory multiprocessor architecture where multiple processors share a single physical address space.  Each processor has access to all memory locations within this shared address space.  Often referred to as Symmetric Multiprocessor (SMP) systems because all processors typically have equal access time to all memory locations.

*   **Architecture:**
    *   **Multiple Processors:**  Independent CPUs (cores) connected to a common memory.
    *   **Shared Memory:** A single physical memory space accessible by all processors.
    *   **Interconnect:**  A bus (historically) or a crossbar switch enables communication between processors and memory.  This interconnect is a crucial component for performance.
    *   **Cache Memory:** Each processor typically has its own private cache(s) (L1, L2, and sometimes L3) to reduce memory access latency.

*   **Diagram:**

    ```
    +-------+     +-------+     +-------+
    | CPU 0 |-----| CPU 1 |-----| CPU N |
    +-------+     +-------+     +-------+
        |            |            |
        |            |            |
       Cache       Cache       Cache
        |            |            |
        +------------+------------+
                     |
                     | Interconnect (Bus/Crossbar)
                     |
                +---------------+
                | Shared Memory |
                +---------------+
    ```

*   **Key Concepts:**
    *   **Uniform Memory Access (UMA):**  Ideally, all processors have equal access time to all memory locations.  Centralized shared memory systems *strive* for UMA, although cache misses can still introduce variability.
    *   **Shared Address Space:**  Processors use the same physical addresses to refer to the same memory locations.
    *   **Inter-process Communication (IPC):**  Processors can communicate and synchronize through shared memory locations. This is a fundamental aspect of parallel programming.

*   **Advantages:**
    *   **Simplicity:** Relatively straightforward programming model due to shared address space.
    *   **Low Latency (for shared data):**  When data is in the cache, access is fast.
    *   **Efficient Communication:** Communication is achieved through simple memory reads and writes.

*   **Disadvantages:**
    *   **Scalability Limitations:**  The single shared memory and interconnect become bottlenecks as the number of processors increases.  Bus contention becomes a significant problem. Crossbar switches are better but more expensive.
    *   **Cache Coherence Problem:** Multiple processors can have copies of the same data in their private caches.  Modifications to the data in one cache must be reflected in other caches or the main memory to maintain consistency.
    *   **Memory Contention:** Multiple processors trying to access the same memory location simultaneously can lead to delays.

### 2. Cache Coherence

*   **Definition:** The consistency of shared data stored in multiple caches across different processors in a shared memory system.  Ensuring that all processors have a consistent view of the shared memory, even when data is cached.

*   **Why is Cache Coherence Necessary?**

    Without cache coherence, processors could operate on stale or incorrect data, leading to incorrect program results.  Consider this example:

    1.  Processor 0 reads variable `X` (initially 5) into its cache.
    2.  Processor 1 reads variable `X` (initially 5) into its cache.
    3.  Processor 0 modifies `X` to 10 in its cache.
    4.  Processor 1 now has a stale value of `X` (5) in its cache.  If Processor 1 uses this value, the program will produce incorrect results.

*   **Cache Coherence Protocols:**  Mechanisms to ensure cache coherence.  Two main approaches are:
    *   **Snooping Protocols:**  Each cache monitors (snoops) the bus (or interconnect) to detect memory operations performed by other caches.
    *   **Directory-Based Protocols:** A centralized directory tracks the caching status of each memory block.

### 3. Snooping Protocols

*   **Definition:** A cache coherence protocol where each cache controller "snoops" on the shared memory bus (or interconnect) to monitor all memory transactions. When a cache detects a transaction involving a memory block it has cached, it takes appropriate action to maintain coherence.

*   **Basic Operation:**
    *   **Cache Line States:** Each cache line (block) has a state associated with it, indicating its validity and sharing status. Common states include:
        *   **Invalid (I):**  The cache line does not contain valid data.
        *   **Shared (S):** The cache line contains valid data and is shared with other caches.
        *   **Modified (M):** The cache line contains valid data and has been modified. It is the only cache with a valid copy, and the main memory is out of date.  The owning cache is responsible for writing the data back to main memory when the line is replaced or invalidated.
    *   **Bus Transactions:** Processors generate bus transactions (read requests, write requests, invalidation requests, etc.) that are observed by all other caches.
    *   **State Transitions:** Based on the bus transactions and the current state of a cache line, the cache controller updates the state of the line accordingly.

*   **Conceptual Types of Snooping Protocols (Details not required):**

    *   **Write-Invalidate Protocol:** When a processor writes to a cache line, all other caches containing that line are invalidated. This ensures that only one cache has a valid copy of the line at any given time. Simpler to implement.

    *   **Write-Update (Write-Broadcast) Protocol:** When a processor writes to a cache line, the updated data is broadcast to all other caches containing that line. This keeps all caches up-to-date.  More complex, higher bandwidth usage.

*   **Example (Write-Invalidate):**

    1.  Processor 0 reads variable `X` (value 5) into its cache (Cache Line State: S).
    2.  Processor 1 reads variable `X` (value 5) into its cache (Cache Line State: S).
    3.  Processor 0 writes to variable `X` (setting it to 10).
    4.  Processor 0's cache issues a "Write-Invalidate" signal on the bus.
    5.  Processor 1's cache snoops the bus, detects the Write-Invalidate for `X`, and invalidates its copy of `X` (Cache Line State: I).
    6.  Processor 0 now has the only valid copy of `X` (Cache Line State: M).  Main memory is outdated.
    7. If Processor 1 now tries to read `X` it will incur a cache miss and needs to fetch the updated data from Processor 0 (or main memory if it was already written back).

*   **Key Concepts:**
    *   **Cache Line (Block):** The unit of data transferred between the cache and main memory.
    *   **Snooping:** Monitoring bus transactions to maintain coherence.
    *   **Invalidation:**  Making a cache line invalid in response to a write by another processor.
    *   **Write Back:** Writing modified cache lines back to main memory when they are replaced or invalidated.
    *   **Write Through:** Writing data to both the cache and main memory simultaneously.

*   **Advantages of Snooping Protocols:**
    *   **Relatively Simple:** Easier to implement than directory-based protocols, especially for smaller systems.
    *   **Low Latency (for common cases):** Coherence actions are often handled directly by the caches without involving a centralized directory.

*   **Disadvantages of Snooping Protocols:**
    *   **Scalability Issues:**  The bus (or interconnect) becomes a bottleneck as the number of processors increases. Every cache must snoop every transaction, which limits scalability.
    *   **Bus Contention:** Increased traffic on the bus can degrade performance.
    *   **Difficult to implement on large-scale systems:**  The cost and complexity of snooping all bus transactions on a large system become prohibitive.

### 4. Challenges and Limitations of Centralized Shared Memory Architectures

*   **Scalability:**  The primary limitation. The shared memory and interconnect (bus or crossbar) become bottlenecks as the number of processors increases.  Bus contention and memory contention become significant issues.
*   **Cache Coherence Overhead:** Maintaining cache coherence introduces overhead in terms of bus traffic and cache controller complexity.
*   **Memory Latency:**  Even with caches, accessing main memory can be a significant bottleneck, especially when there are frequent cache misses or coherence operations.
*   **Programming Complexity:** While the shared address space simplifies programming, managing data consistency and avoiding race conditions can still be challenging, especially for complex parallel programs.

---

### Practice Questions & Exercises

**Question 1:**

Explain the concept of cache coherence and why it is essential in a shared-memory multiprocessor system.

**Answer:**

Cache coherence refers to the consistency of shared data stored in multiple caches across different processors. It's essential because without it, processors could operate on stale or incorrect data, leading to incorrect program results. Multiple processors can have copies of the same data in their private caches. Modifications to the data in one cache must be reflected in other caches or the main memory to maintain consistency.

**Question 2:**

Describe the basic operation of a snooping protocol for maintaining cache coherence.

**Answer:**

In a snooping protocol, each cache controller monitors the shared memory bus (or interconnect) to observe all memory transactions. Each cache line has a state (e.g., Invalid, Shared, Modified) indicating its validity and sharing status. When a cache detects a transaction involving a memory block it has cached, it updates the state of the line accordingly.  For example, if a cache sees a "Write-Invalidate" signal for a block it has in the "Shared" state, it will transition the block to the "Invalid" state.

**Question 3:**

What are the advantages and disadvantages of snooping protocols?

**Answer:**

*   **Advantages:** Relatively simple to implement, low latency for common cases.
*   **Disadvantages:** Scalability issues (bus/interconnect becomes a bottleneck), bus contention, not suitable for large-scale systems.

**Question 4:**

Explain the difference between the write-invalidate and write-update (write-broadcast) snooping protocols in concept. Which one is more bandwidth intensive?

**Answer:**

In a write-invalidate protocol, when a processor writes to a cache line, all other caches containing that line are invalidated. In a write-update (write-broadcast) protocol, when a processor writes to a cache line, the updated data is broadcast to all other caches containing that line. Write-update is more bandwidth intensive as it broadcasts the data with every write.

**Question 5:**

Why are Centralized Shared Memory Architectures limited in scalability?

**Answer:**

The main limitation is the single shared memory and the interconnect (bus or crossbar). As the number of processors increases, the interconnect becomes a bottleneck due to contention, which limits the overall performance and scalability of the system.

---

### Important Points to Remember

*   Cache coherence is *crucial* for correct execution of parallel programs in shared-memory systems.
*   Snooping protocols offer a relatively simple and low-latency solution for maintaining cache coherence in small-scale systems.
*   The single shared memory and interconnect are the major bottlenecks limiting the scalability of centralized shared-memory architectures.
*   Understanding the different cache line states (Invalid, Shared, Modified) is fundamental to grasping how snooping protocols work.
*   As the number of processors increases, more complex cache coherence protocols (like directory-based protocols) are needed.
