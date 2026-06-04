---
title: "Distributed Shared Memory and Directory based protocol – basics."
subject: "ADVANCED COMPUTER ARCHITECTURE"
module: "Module 3: Data Level Parallelism."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b861"
status: "completed"
scrapedAt: "2026-05-20T16:42:41.184Z"
---
# ADVANCED COMPUTER ARCHITECTURE: Module 3 - Data Level Parallelism
## Topic: Distributed Shared Memory and Directory Based Protocol – Basics

**Learning Outcomes:**

*   Understand the concept of Distributed Shared Memory (DSM).
*   Explain the motivation for using DSM systems.
*   Describe the basic architecture of a DSM system.
*   Differentiate between centralized and distributed directory protocols.
*   Explain the basic operation of a directory-based cache coherence protocol.
*   Understand the role of different states in a directory-based protocol (e.g., shared, exclusive, invalid).
*   Identify the advantages and disadvantages of directory-based protocols.

---

### 1. Introduction to Distributed Shared Memory (DSM)

*   **Definition:** Distributed Shared Memory (DSM) is a type of parallel computing architecture where physically separate memories are logically shared across multiple processors. It provides a shared address space abstraction to programmers, simplifying parallel programming.

*   **Key Concept:** DSM bridges the gap between shared memory multiprocessors (SMPs) and distributed memory systems (clusters). It offers the programming ease of shared memory while leveraging the scalability of distributed memory.

*   **Motivation:**
    *   **Simplified Programming:** DSM offers a more intuitive programming model than message passing, as programmers don't need to explicitly manage data distribution and communication.
    *   **Scalability:** DSM systems can scale to a large number of processors because memory is physically distributed.
    *   **Cost-Effectiveness:** Building a DSM system can be more cost-effective than a large SMP due to the use of commodity components (e.g., network interface cards, CPUs).
    *   **Legacy Code Compatibility:** Existing shared-memory applications can often be ported to DSM systems with minimal modifications.

*   **Basic Architecture:**
    *   **Nodes:** A DSM system consists of multiple nodes, each containing a processor, local memory, and a network interface.
    *   **Interconnect:** Nodes are connected through a high-speed network.
    *   **Shared Address Space:** The key characteristic is a single, globally accessible address space that spans the memory of all nodes.
    *   **Memory Mapping:**  The shared address space is typically divided into pages, which are mapped to the physical memory of different nodes.  This mapping is often transparent to the application.
    *   **Cache Coherence Protocol:** Crucial for maintaining consistency between caches on different nodes when accessing shared data.

*   **DSM vs. Shared Memory Multiprocessors (SMPs):**

    | Feature         | SMP                               | DSM                                                                             |
    |-----------------|------------------------------------|---------------------------------------------------------------------------------|
    | Memory Location | Physically shared                 | Physically distributed, logically shared                                          |
    | Communication   | Through shared memory (fast)        | Through network interconnect (slower)                                            |
    | Scalability      | Limited (bus contention)         | More scalable                                                                  |
    | Cost            | Potentially more expensive at scale| Generally cheaper at large scales due to the use of commodity components        |

**Example:** Imagine a simulation running across multiple computers connected by a network. Each computer has its own memory, but the simulation needs to share data like the state of objects in the simulation. DSM allows them to access each other's memory as if it were one big shared space, making it easier to coordinate the simulation.

---

### 2. Directory-Based Cache Coherence Protocols

*   **Definition:** A directory-based cache coherence protocol is a method used in DSM systems to maintain consistency between cached copies of shared data. A *directory* maintains information about which nodes have copies of a specific memory block.

*   **Why Directory-Based Protocols?**  Snooping protocols, common in SMPs, aren't scalable to DSM systems because they rely on broadcasting requests to all nodes. Directory-based protocols reduce network traffic by only sending requests to the nodes that need to be involved.

*   **Centralized vs. Distributed Directory Protocols:**

    *   **Centralized Directory Protocol:**
        *   A single directory keeps track of the state of all memory blocks.
        *   Simple to implement.
        *   **Scalability Bottleneck:** The centralized directory becomes a point of contention and limits the overall scalability of the system.
        *   **Reliability Issues:** Failure of the directory node can cripple the entire system.
        *   **Example:** A system with a dedicated "bookkeeper" server that tracks who has copies of which files. If anyone wants to read or write a file, they must first check with the bookkeeper.

    *   **Distributed Directory Protocol:**
        *   The directory information is distributed across the nodes of the system.
        *   Improves scalability by distributing the directory workload.
        *   Reduces contention compared to centralized directory protocols.
        *   More complex to implement due to the need to coordinate directory updates across multiple nodes.
        *   **Example:** Each file can be associated with a particular server, and that server maintains information about who is accessing the file.

*   **Basic Operation of a Directory-Based Protocol:**

    1.  **Processor Request:** A processor requests access to a memory block (read or write).
    2.  **Directory Lookup:** The request is sent to the directory entry responsible for that memory block.  The location of the directory is usually determined by hashing the address of the memory block.
    3.  **Directory Action:** The directory entry determines the appropriate action based on the current state of the block.  This might involve:
        *   **Read Hit (Local):** If the processor already has a valid copy, the data is read directly from the cache.
        *   **Read Miss (Directory):** If the processor doesn't have a copy, the directory might forward the request to another processor that has a valid copy. The data is then returned to the requesting processor and its cache, and the directory is updated to reflect this new copy.
        *   **Write Hit (Exclusive):** If the processor already has an exclusive copy, the data is written directly to the cache.
        *   **Write Miss (Directory):**  The directory sends invalidation messages to all other processors that have copies of the block.  Once acknowledgements are received from all processors (or a timeout occurs), the requesting processor is granted exclusive access and can write to the block.
    4.  **Cache Update:** The processor updates its cache accordingly.
    5.  **Directory Update:** The directory updates its state to reflect the new cache status.

*   **Typical States in a Directory-Based Protocol (for each memory block):**

    *   **Uncached (or Invalid):** No processor has a cached copy of the block.
    *   **Shared:** One or more processors have a read-only copy of the block.  The directory keeps a list of sharers.
    *   **Exclusive (or Modified):**  Only one processor has a writeable copy of the block. The directory knows which processor has exclusive access.

*   **Directory Entry Contents (for each memory block):**

    *   **State:**  (Uncached, Shared, or Exclusive)
    *   **Owner/Sharer List:**  If the state is Shared, this list indicates which processors have a cached copy. If the state is Exclusive, this identifies the processor that has the exclusive copy.
    *   **Dirty Bit (optional):** Indicates if the block in memory is outdated and needs to be updated from the processor's cache.

**Diagram (Simplified):**

```
+--------+     Request     +-----------+     Data/Invalidation    +--------+
| Proc 1 |-----> Directory -----> Proc 2 (Sharer) / Memory Controller | Proc 3 |
+--------+                  +-----------+                           +--------+
                                  ^
                                  | Ack (if needed)
```

In this simplified diagram, Proc1 wants to read/write a block.  The request goes to the Directory. The Directory determines the action to take, such as forwarding the request to Proc2 (if it has the data) or issuing invalidations.  The data or invalidations are sent, and optionally, acknowledgements are received.

---

### 3. Advantages and Disadvantages of Directory-Based Protocols

*   **Advantages:**
    *   **Scalability:**  More scalable than snooping protocols, especially in DSM systems with a large number of processors.
    *   **Reduced Network Traffic:** Requests are only sent to the processors that need to be involved in the transaction.
    *   **Efficient Write Operations:** Invalidation messages are targeted only to sharers, minimizing overhead.

*   **Disadvantages:**
    *   **Complexity:**  More complex to implement than snooping protocols.
    *   **Directory Overhead:**  The directory requires storage space and processing power, which adds overhead to the system.
    *   **Latency:**  Requests to the directory can introduce latency, especially in centralized directory protocols.
    *   **Potential for Directory Bottleneck:**  Even in distributed directory schemes, imbalances in memory access patterns can lead to bottlenecks.
    *   **Maintenance of Sharer Lists:** Managing and updating sharer lists in shared state can be complex and time-consuming.

---

### Practice Questions/Exercises

1.  **Describe the key differences between a shared memory multiprocessor (SMP) and a Distributed Shared Memory (DSM) system.**

    *Answer:*  SMPs have physically shared memory, while DSMs have physically distributed but logically shared memory.  SMPs rely on bus-based communication and snooping protocols, while DSMs utilize network interconnects and directory-based or software-based coherence mechanisms.  SMPs are typically less scalable than DSMs.

2.  **Explain why a snooping cache coherence protocol is not suitable for a large-scale DSM system.**

    *Answer:* Snooping protocols rely on broadcasting requests to all nodes, which becomes inefficient and creates excessive network traffic in large-scale DSM systems.  The broadcast overhead makes snooping protocols unsustainable for systems with many processors.

3.  **What is the primary advantage of a distributed directory protocol over a centralized directory protocol?**

    *Answer:*  Improved scalability.  By distributing the directory information and workload across multiple nodes, distributed directory protocols avoid the central bottleneck and single point of failure associated with centralized directories.

4.  **Explain the purpose of the "Exclusive" state in a directory-based cache coherence protocol.**

    *Answer:*  The "Exclusive" state indicates that only one processor has a writeable copy of the memory block.  This ensures that only one processor can modify the data at a time, preventing data inconsistencies.

5.  **Imagine a scenario in a DSM system where Processor A wants to write to a memory block. The directory indicates that the block is currently in the "Shared" state, and Processors B and C also have copies.  Describe the steps that the directory would take to ensure cache coherence.**

    *Answer:*
    1.  The directory sends invalidation messages to Processors B and C, requesting them to invalidate their copies of the block.
    2.  Processors B and C invalidate their copies and send acknowledgements to the directory.
    3.  Once the directory has received acknowledgements from B and C (or a timeout occurs), it updates the state of the block to "Exclusive" and grants exclusive access to Processor A.
    4.  Processor A can now write to the block.

6.  **What information is typically stored in a directory entry for each memory block in a directory-based cache coherence protocol?**

    *Answer:* A directory entry typically contains the following information:
    *   **State:** (Uncached, Shared, or Exclusive)
    *   **Owner/Sharer List:** A list of processors with a copy of the block (shared state) or the processor with the exclusive copy (exclusive state).
    *   **Dirty bit (optional):**  Indicates if the memory block is outdated compared to the cached copy.

---

### Important Points to Remember

*   **DSM aims to provide the programming convenience of shared memory with the scalability of distributed memory.**
*   **Directory-based protocols are crucial for maintaining cache coherence in DSM systems.**
*   **Centralized directories are simple but can become bottlenecks.  Distributed directories offer better scalability.**
*   **The states (Uncached, Shared, Exclusive) represent the cache status of a memory block.**
*   **Understanding the trade-offs between different cache coherence protocols is essential for designing efficient DSM systems.**
