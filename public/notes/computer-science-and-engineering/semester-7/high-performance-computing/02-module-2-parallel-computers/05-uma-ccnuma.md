---
title: "UMA,  ccNUMA"
subject: "HIGH PERFORMANCE COMPUTING"
module: "Module 2: Parallel computers"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c624"
status: "completed"
scrapedAt: "2026-05-20T17:07:08.013Z"
---
# High Performance Computing: Module 2 - Parallel Computers (UMA, ccNUMA)

This document provides comprehensive study notes for the topic of Uniform Memory Access (UMA) and Cache Coherent Non-Uniform Memory Access (ccNUMA) architectures, as part of Module 2: Parallel Computers in High Performance Computing.

## Table of Contents

1.  [Introduction to Parallel Computer Architectures](#introduction)
2.  [Uniform Memory Access (UMA)](#uma)
    *   [2.1 Definition and Key Concepts](#uma-definition)
    *   [2.2 Architecture](#uma-architecture)
    *   [2.3 Advantages](#uma-advantages)
    *   [2.4 Disadvantages](#uma-disadvantages)
    *   [2.5 Use Cases](#uma-use-cases)
    *   [2.6 Examples](#uma-examples)
3.  [Cache Coherent Non-Uniform Memory Access (ccNUMA)](#ccnuma)
    *   [3.1 Definition and Key Concepts](#ccnuma-definition)
    *   [3.2 Architecture](#ccnuma-architecture)
    *   [3.3 Cache Coherence](#ccnuma-cache-coherence)
    *   [3.4 Advantages](#ccnuma-advantages)
    *   [3.5 Disadvantages](#ccnuma-disadvantages)
    *   [3.6 Use Cases](#ccnuma-use-cases)
    *   [3.7 Examples](#ccnuma-examples)
4.  [Comparison: UMA vs. ccNUMA](#comparison)
5.  [Practice Questions and Answers](#practice-questions)
6.  [Important Points to Remember](#important-points)

---

## 1. Introduction to Parallel Computer Architectures

Parallel computing involves using multiple processors or computing units to solve a problem simultaneously. The way these processors access memory is a fundamental aspect of parallel computer architecture, significantly impacting performance and scalability. This module focuses on two prominent memory access models: UMA and ccNUMA.

---

## 2. Uniform Memory Access (UMA)

### 2.1 Definition and Key Concepts

*   **Definition:** In a UMA architecture, all processors have equal access time to all memory locations. This means that regardless of which processor is accessing which memory address, the time taken for the access is the same.
*   **Key Concepts:**
    *   **Shared Memory:** All processors share a single, global address space.
    *   **Symmetric Multiprocessor (SMP):** UMA systems are often referred to as SMP systems, emphasizing the symmetry in processor access to memory.
    *   **Bus-Based Architecture:** Historically, UMA systems often relied on a shared bus to connect processors to memory. Modern UMA systems might use more advanced interconnects but maintain the uniform access property.

### 2.2 Architecture

*   **Components:**
    *   **CPUs/Processors:** Multiple independent processing units.
    *   **Shared Memory:** A single block of main memory accessible by all processors.
    *   **Interconnect:** A mechanism (e.g., bus, crossbar switch) that connects processors to the shared memory.
*   **Diagrammatic Representation:**

    ```
    +-------+      +-------+      +-------+
    | CPU 1 |------|       |------|       |
    +-------+      |       |      |       |
                   |       |      |       |
    +-------+      |       |      |       |
    | CPU 2 |------|       |------|       |
    +-------+      | Inter-|      | Shared|
                   | connect|      | Memory|
    +-------+      |       |      |       |
    | CPU n |------|       |------|       |
    +-------+      +-------+      +-------+
    ```

### 2.3 Advantages

*   **Simplicity:** Easier to program and manage due to the uniform memory access. Shared data structures can be accessed by any processor without complex address translation.
*   **Cost-Effective for Smaller Systems:** Can be more cost-effective for systems with a limited number of processors.
*   **Ease of Data Sharing:** Processors can easily share data through shared memory variables.

### 2.4 Disadvantages

*   **Scalability Bottleneck:** As the number of processors increases, the shared bus or interconnect can become a bottleneck. All processors contend for access to the same memory bus, leading to increased latency and reduced throughput.
*   **Performance Degradation:** The uniform access time can degrade significantly with a large number of processors due to contention.
*   **Limited Number of Processors:** Typically practical for systems with a moderate number of processors (e.g., up to 16-32).

### 2.5 Use Cases

*   **Desktop Computers:** Most modern multi-core desktop and laptop systems use UMA architectures.
*   **Workstations:** For tasks that don't require massive parallelization or extremely high memory bandwidth.
*   **Smaller Servers:** Servers handling moderate workloads where scalability to hundreds or thousands of cores isn't the primary concern.
*   **Embedded Systems:** Where a few processors need to share resources.

### 2.6 Examples

*   **Intel Core iX processors (e.g., i7, i9) in multi-core configurations.**
*   **AMD Ryzen processors.**
*   **Many early multi-processor servers.**

---

## 3. Cache Coherent Non-Uniform Memory Access (ccNUMA)

### 3.1 Definition and Key Concepts

*   **Definition:** In a ccNUMA architecture, processors still have a global address space, but the time it takes to access memory depends on the physical location of the memory relative to the processor. Memory closer to a processor is accessed faster than memory farther away. Crucially, **cache coherence** is maintained across all processors and their caches.
*   **Key Concepts:**
    *   **Non-Uniform Memory Access (NUMA):** The core characteristic is that memory access times are not uniform.
    *   **Locality of Reference:** Performance is improved when processors access memory located in their "local" region.
    *   **Interconnect Network:** More complex interconnects (e.g., ring, mesh, hypercube) are used to connect processor nodes and memory banks, enabling scalability.
    *   **Cache Coherence Protocols:** Mechanisms to ensure that all processors have a consistent view of shared data in their caches, even when modified by different processors.
    *   **Directory-Based Coherence:** A common method where a directory keeps track of cached copies of memory blocks.

### 3.2 Architecture

*   **Components:**
    *   **Nodes:** The system is divided into multiple nodes. Each node typically contains one or more processors, its own local memory, and potentially I/O devices.
    *   **Local Memory:** Memory directly attached to a processor or node.
    *   **Remote Memory:** Memory attached to other nodes.
    *   **Interconnect:** A sophisticated network that connects the nodes, allowing processors in one node to access memory in another node.
*   **Diagrammatic Representation:**

    ```
    +---------+     +---------+     +---------+
    | Node 1  |-----|         |-----| Node 2  |
    |         |     |         |     |         |
    | [CPU 1] |     |         |     | [CPU 3] |
    | [Mem 1] |-----| Inter-  |-----| [Mem 2] |
    +---------+     | connect |     +---------+
         ^          | Network |          ^
         |          |         |          |
    +---------+     |         |     +---------+
    | Node 0  |-----|         |-----| Node 3  |
    |         |     |         |     |         |
    | [CPU 0] |     |         |     | [CPU 4] |
    | [Mem 0] |---------------------| [Mem 3] |
    +---------+                     +---------+
    ```
    *   **Access within Node 0:** CPU 0 accessing Mem 0 is fast (local).
    *   **Access to Node 1:** CPU 0 accessing Mem 1 is slower (remote).

### 3.3 Cache Coherence

*   **Problem:** When multiple processors have copies of the same data in their local caches, and one processor modifies its copy, other processors' copies become stale. This leads to incorrect program execution.
*   **Solution:** Cache coherence protocols ensure that all processors see a consistent view of memory.
    *   **Snooping Protocols:** Processors "snoop" on the bus or interconnect for memory transactions. If a processor sees a write to a memory location that it has cached, it invalidates or updates its copy. This is common in UMA but can scale poorly.
    *   **Directory-Based Protocols:** A centralized or distributed directory keeps track of which caches hold copies of memory blocks. When a processor writes to a cached block, the directory is consulted to invalidate or update other copies. This is more scalable for ccNUMA.
        *   **MESI Protocol (Modified, Exclusive, Shared, Invalid):** A widely used cache coherence protocol. Each cache line is in one of these states.
            *   **Modified (M):** The cache line has been modified by this processor and is the only valid copy.
            *   **Exclusive (E):** The cache line is clean (matches main memory) and is the only valid copy in any cache.
            *   **Shared (S):** The cache line is clean and may be present in other caches.
            *   **Invalid (I):** The cache line does not contain valid data.

### 3.4 Advantages

*   **Scalability:** ccNUMA systems can scale to a much larger number of processors compared to UMA systems because the memory access bottleneck is mitigated by having local memory for each processor.
*   **Higher Memory Bandwidth:** Distributing memory across nodes increases the aggregate memory bandwidth.
*   **Improved Performance for Memory-Intensive Workloads:** When data access patterns exhibit good locality, ccNUMA can offer excellent performance.
*   **Cost-Effective for Large Systems:** As the number of processors increases, the cost-per-processor for memory access becomes more manageable.

### 3.5 Disadvantages

*   **Programming Complexity:** Developing parallel applications that effectively utilize ccNUMA requires careful consideration of data locality to minimize remote memory accesses. Developers need to be aware of where data resides.
*   **Performance Variations:** Performance can vary significantly depending on the data access patterns and how well they align with the underlying NUMA topology.
*   **Higher Hardware Complexity:** The interconnect network and cache coherence mechanisms are more complex and expensive to implement.
*   **Cache Thrashing:** If data is constantly being written by multiple processors accessing it from different nodes, it can lead to frequent cache invalidations and performance degradation.

### 3.6 Use Cases

*   **Large-Scale Servers:** High-end servers for databases, scientific simulations, and enterprise applications.
*   **High-Performance Computing (HPC) Clusters:** Used in supercomputers and cluster computing environments.
*   **Data Centers:** For workloads requiring high levels of parallelism and memory capacity.

### 3.7 Examples

*   **Intel Xeon processors with QuickPath Interconnect (QPI) or Ultra Path Interconnect (UPI) in multi-socket configurations.**
*   **AMD EPYC processors.**
*   **Many high-end servers from manufacturers like Dell, HPE, IBM.**

---

## 4. Comparison: UMA vs. ccNUMA

| Feature             | UMA (Uniform Memory Access)                        | ccNUMA (Cache Coherent NUMA)                         |
| :------------------ | :------------------------------------------------- | :--------------------------------------------------- |
| **Memory Access**   | Uniform access time for all processors to all memory | Non-uniform access time (local faster than remote)   |
| **Architecture**    | Typically bus-based or simple crossbar.          | Node-based with complex interconnect networks.       |
| **Scalability**     | Limited (bottlenecked by shared bus/interconnect)  | High (scales to many processors)                     |
| **Programming**     | Simpler, easier for general-purpose programming.   | More complex, requires awareness of data locality.   |
| **Performance**     | Good for small N, degrades with contention.        | Excellent with good locality, can suffer with poor locality. |
| **Hardware Cost**   | Lower for smaller systems.                         | Higher due to complex interconnects.                 |
| **Memory Bandwidth**| Can be a bottleneck for many processors.           | Higher aggregate bandwidth due to distributed memory. |
| **Cache Coherence** | Generally simpler protocols (e.g., snooping).      | More complex protocols (e.g., directory-based).      |
| **Typical Use**     | Desktops, workstations, smaller servers.           | Large servers, HPC systems, data centers.            |

---

## 5. Practice Questions and Answers

**Question 1:**
Which of the following characteristics defines a UMA architecture?
A. Processors access memory at different speeds depending on its location.
B. All processors have equal access time to all memory locations.
C. Memory access is managed by a distributed directory.
D. Each processor has its own private memory.

**Answer 1:**
B. All processors have equal access time to all memory locations.

---

**Question 2:**
What is a primary limitation of UMA architectures as the number of processors increases?
A. Memory is too expensive to share.
B. The interconnect becomes a bottleneck.
C. Processors do not need to communicate.
D. Cache coherence becomes impossible to maintain.

**Answer 2:**
B. The interconnect becomes a bottleneck.

---

**Question 3:**
In a ccNUMA system, what does the "cc" stand for, and why is it important?
A. "Concurrent Communication"; it ensures processors can talk at the same time.
B. "Cache Coherence"; it ensures all processors have a consistent view of shared data despite local caches.
C. "Centralized Control"; it means a single entity manages all memory access.
D. "Core Connectivity"; it describes how processors are physically wired.

**Answer 3:**
B. "Cache Coherence"; it ensures all processors have a consistent view of shared data despite local caches.

---

**Question 4:**
Which architecture is generally considered more scalable for systems with a very large number of processors (e.g., hundreds or thousands)?
A. UMA
B. ccNUMA
C. Both scale equally well.
D. Neither scales well.

**Answer 4:**
B. ccNUMA

---

**Question 5:**
Imagine a ccNUMA system where Processor A needs data that is currently in Processor B's cache, and this data resides in memory attached to Node 3, which is relatively far from Processor A. Describe the typical steps involved in Processor A accessing this data.

**Answer 5:**
1.  **Cache Miss:** Processor A attempts to access the data, but it's not in its local cache.
2.  **Request to Interconnect:** The processor's memory controller sends a request to the interconnect network.
3.  **Directory Lookup (or Snooping):** The request is routed. If directory-based, the directory is consulted to find the current location of the data. The directory might note that the data is in Processor B's cache.
4.  **Data Retrieval:**
    *   If in Processor B's cache: Processor B's cache controller, in response to the coherence protocol, sends the data (possibly with a status update like invalidating its own copy if the protocol demands).
    *   If in remote memory (Node 3): The request is routed to Node 3, the memory controller there retrieves the data, and sends it back.
5.  **Data Delivery:** The data travels back through the interconnect to Processor A.
6.  **Cache Update:** Processor A loads the data into its local cache.
7.  **Cache Coherence Update:** The cache coherence protocol ensures that other caches holding a copy (like Processor B's, if it had one) are updated or invalidated as per the protocol's rules.
    *   **Key point:** Accessing data from another processor's cache (especially if it's remote) is generally faster than fetching it from remote main memory, but slower than accessing local memory.

---

## 6. Important Points to Remember

*   **UMA = Uniform Access:** All processors see memory the same way, like one big shared pool.
*   **ccNUMA = Non-Uniform Access + Cache Coherence:** Processors have local "favorite" memory that's faster. But they can still access all memory, just slower if it's "far away." Cache coherence is critical to make sure everyone sees the right data.
*   **Scalability is the Key Difference:** ccNUMA is designed to scale to many more processors than UMA.
*   **Programming for ccNUMA:** Requires conscious effort to place data near the processors that will use it most. This is called optimizing for **data locality**.
*   **Bottlenecks:** UMA's bottleneck is often the shared bus/interconnect. ccNUMA's potential bottleneck is poor data locality and the overhead of cache coherence.
*   **Cache Coherence Protocols (e.g., MESI):** Essential for correctness in multi-processor systems, especially ccNUMA. They manage the states of data in caches.
