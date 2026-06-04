---
title: "Distributed-memory computers"
subject: "HIGH PERFORMANCE COMPUTING"
module: "Module 2: Parallel computers"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c625"
status: "completed"
scrapedAt: "2026-05-20T17:07:08.708Z"
---
# HIGH PERFORMANCE COMPUTING - Module 2: Parallel Computers

## Topic: Distributed-memory Computers

---

### **Learning Outcomes:**

*   **LO1:** Differentiate between shared and distributed-memory architectures.
*   **LO2:** Understand the fundamental principles of distributed-memory computing.
*   **LO3:** Identify and explain common interconnection networks used in distributed-memory systems.
*   **LO4:** Discuss the challenges and advantages of programming for distributed-memory systems.
*   **LO5:** Explain the role of message passing in distributed-memory computing and introduce common programming models.

---

### **1. Introduction to Distributed-Memory Computers**

#### **1.1 Shared vs. Distributed Memory: The Fundamental Distinction**

*   **Shared-Memory Architecture:**
    *   **Definition:** All processors share access to a single, unified address space. Any processor can directly access any memory location.
    *   **Key Characteristic:** Implicit communication. Processors communicate by reading and writing to shared variables.
    *   **Analogy:** A group of people working around a single large whiteboard. They can all see and modify the same information.
    *   **Advantages:**
        *   Easier to program (similar to single-processor programming).
        *   Implicit communication can be very fast for small data transfers.
    *   **Disadvantages:**
        *   Scalability limitations due to memory bandwidth contention.
        *   Cache coherence protocols can introduce overhead.
        *   Typically more expensive for very large systems.
    *   **Examples:** Multi-core processors (e.g., Intel Core i7, AMD Ryzen), Symmetric Multiprocessing (SMP) systems.

*   **Distributed-Memory Architecture:**
    *   **Definition:** Each processor has its own private memory. Processors cannot directly access the memory of other processors.
    *   **Key Characteristic:** Explicit communication. Processors must send and receive messages to exchange data.
    *   **Analogy:** A group of people working in separate offices, each with their own notepad. To share information, they must physically pass notes.
    *   **Advantages:**
        *   Highly scalable; can build very large systems.
        *   No memory bandwidth contention issues across the entire system.
        *   Can be more cost-effective for large-scale deployments.
    *   **Disadvantages:**
        *   More complex to program due to explicit communication requirements.
        *   Communication latency can be significant.
        *   Load balancing can be challenging.
    *   **Examples:** Clusters of PCs, Beowulf clusters, supercomputers like Fugaku, Summit, Sierra.

#### **1.2 Key Concepts in Distributed-Memory Computing**

*   **Nodes:** Individual computers or processing units within a distributed-memory system, each with its own CPU(s), memory, and I/O capabilities.
*   **Processors/Cores:** The actual computing units within a node.
*   **Local Memory:** The memory directly attached to a processor or node.
*   **Remote Memory:** The memory belonging to another node, which cannot be directly accessed by a given processor.
*   **Communication:** The process of exchanging data between nodes. This is the cornerstone of distributed-memory programming.
*   **Message Passing:** The primary mechanism for communication, involving sending and receiving explicit messages containing data and control information.
*   **Scalability:** The ability of the system to increase performance proportionally with the number of processors. Distributed-memory systems generally scale better than shared-memory systems.
*   **Interconnection Network:** The hardware infrastructure that connects the nodes and facilitates communication.

---

### **2. Interconnection Networks in Distributed-Memory Systems**

The performance of a distributed-memory system is heavily influenced by the network connecting its nodes.

#### **2.1 Network Topologies**

Topologies define how nodes are interconnected.

*   **Bus:**
    *   **Description:** All nodes share a single communication line.
    *   **Characteristics:** Simple, but has a significant bottleneck as only one node can transmit at a time. Poor scalability.
    *   **Example:** Early PC local area networks (LANs).

*   **Ring:**
    *   **Description:** Nodes are connected in a circular fashion. Data travels sequentially from one node to the next.
    *   **Characteristics:** Simple to implement, but latency increases with the number of hops. A single link failure can break the ring.
    *   **Example:** Token Ring networks.

*   **Mesh:**
    *   **Description:** Nodes are arranged in a grid (e.g., 2D mesh, 3D mesh). Each node is connected to its immediate neighbors.
    *   **Characteristics:** More direct paths than a ring, improving average latency. Good bisection bandwidth. Scalable.
    *   **Example:** Many modern supercomputers utilize mesh or torus variations.

*   **Torus:**
    *   **Description:** A mesh topology where the end nodes are wrapped around to connect to the opposite ends, forming a torus.
    *   **Characteristics:** Enhances connectivity by providing shorter paths, especially for nodes far apart in a regular mesh.
    *   **Example:** Cray T3E, many modern HPC interconnects.

*   **Hypercube:**
    *   **Description:** A highly connected network where nodes are arranged in a binary n-cube. If N is a power of 2, an n-dimensional hypercube has N nodes, and each node has n neighbors.
    *   **Characteristics:** Excellent connectivity and low diameter (maximum shortest path between any two nodes). Efficient for many parallel algorithms. Can be complex to wire for large N.
    *   **Example:** Intel iPSC/860, NCube.

*   **Fat Tree:**
    *   **Description:** A hierarchical network where higher-level links have higher bandwidth than lower-level links, resembling an inverted tree.
    *   **Characteristics:** Provides high bisection bandwidth and good performance for all-to-all communication. Can be expensive to implement due to the large number of high-bandwidth links at the top.
    *   **Example:** Some early high-performance interconnects, modern Infiniband architectures.

#### **2.2 Network Performance Metrics**

*   **Bandwidth:** The rate at which data can be transferred over a link (e.g., Gigabytes per second - GB/s).
*   **Latency:** The time it takes for a single small message to travel from source to destination. Crucial for message-passing performance.
*   **Throughput:** The total rate of successful data delivery.
*   **Bisection Bandwidth:** The total bandwidth of all links that need to be cut to divide the network into two equal halves. A good measure of how well the network supports communication between two halves of the system.
*   **Diameter:** The maximum shortest path distance between any two nodes in the network. Lower diameter generally means lower latency.
*   **Jitter:** Variation in communication latency. High jitter can negatively impact synchronization.

#### **2.3 Common Interconnect Technologies**

*   **Ethernet:** Ubiquitous and cost-effective, but traditionally higher latency and lower bandwidth compared to specialized HPC interconnects. Modern Ethernet (e.g., 100GbE, 400GbE) is becoming more competitive.
*   **InfiniBand:** A high-performance, low-latency interconnect designed specifically for HPC and data centers. Offers high bandwidth and low latency. Widely used in modern supercomputers.
*   **Myrinet:** Another specialized HPC interconnect known for its low latency. Less common now than InfiniBand.
*   **Proprietary Interconnects:** Custom-designed networks by supercomputer manufacturers (e.g., Cray's Slingshot, Fujitsu's Tofu).

---

### **3. Programming for Distributed-Memory Systems**

#### **3.1 Challenges of Distributed-Memory Programming**

*   **Explicit Communication:** Programmers must explicitly manage data movement between nodes using send/receive operations.
*   **Data Distribution:** Deciding how to partition and distribute data across different nodes is critical for performance and load balancing.
*   **Load Balancing:** Ensuring that the computational work is evenly distributed across all active processors to avoid idle processors and bottlenecks.
*   **Synchronization:** Coordinating the execution of tasks across different nodes, often requiring explicit synchronization primitives.
*   **Deadlocks:** A situation where two or more processes are blocked indefinitely, waiting for each other to release resources (e.g., messages).
*   **Fault Tolerance:** Handling node failures gracefully, which is more likely in large-scale systems.

#### **3.2 Advantages of Distributed-Memory Programming**

*   **Scalability:** The ability to harness the power of very large numbers of processors.
*   **Cost-Effectiveness:** Building large systems by connecting many commodity machines.
*   **Overcoming Memory Limitations:** Each node having its own memory avoids the limitations of a shared global address space.

#### **3.3 Message Passing Paradigm**

*   **Core Idea:** Processes on different nodes communicate by explicitly sending and receiving messages.
*   **Key Operations:**
    *   **`MPI_Send(buffer, count, datatype, dest, tag, comm)`:** Sends data from `buffer` to process `dest` in communicator `comm` with a specific `tag`.
    *   **`MPI_Recv(buffer, count, datatype, source, tag, comm, status)`:** Receives data into `buffer` from process `source` in communicator `comm` with a specific `tag`. `status` contains information about the received message.
*   **Synchronous vs. Asynchronous:**
    *   **Synchronous:** The sender and receiver must both be ready for the communication to complete. Simplifies programming but can block execution.
    *   **Asynchronous:** The sender can continue execution after initiating a send, and the receiver can continue after initiating a receive. Allows for overlapping computation and communication but requires more careful management.

#### **3.4 Common Message Passing Models/Libraries**

*   **Message Passing Interface (MPI):**
    *   **Description:** A de facto standard, portable, library-based message-passing interface specification. It's a collection of functions, not a language.
    *   **Key Features:** Defines routines for point-to-point communication, collective communication (e.g., broadcasts, reductions), and process management.
    *   **Implementations:** OpenMPI, MPICH, Intel MPI, MVAPICH.
    *   **Example Usage (Conceptual):**
        ```c
        // In process 0
        MPI_Send(data_to_send, count, MPI_INT, 1, 0, MPI_COMM_WORLD);

        // In process 1
        MPI_Recv(received_data, count, MPI_INT, 0, 0, MPI_COMM_WORLD, &status);
        ```

*   **Charm++:**
    *   **Description:** A parallel programming system that uses asynchronous message passing and dynamic load balancing. It's object-based and handles communication and load balancing transparently.
    *   **Key Features:** Message-driven computation, adaptive load balancing, support for irregular problems.

*   **PGAS (Partitioned Global Address Space) Models:**
    *   **Description:** Extend the concept of distributed memory by providing a global address space, but with explicit handling of "put" and "get" operations for remote memory access. The memory is partitioned into local and remote segments.
    *   **Examples:**
        *   **Coarray Fortran:** Language extension to Fortran for parallel programming.
        *   **Unified Parallel C (UPC):** A parallel extension of the C language.
        *   **Global Arrays (GA):** A C-based library for distributed shared-memory programming.
    *   **Key Operations:** Typically involve `put` (copy data from local to remote) and `get` (copy data from remote to local). These operations can be blocking or non-blocking.

---

### **4. Practice Questions and Exercises**

**Question 1:**
Differentiate between shared-memory and distributed-memory architectures, highlighting one key advantage and one key disadvantage of each.

**Question 2:**
Imagine a distributed-memory system with 16 nodes. If these nodes are connected in a 4x4 2D mesh, what is the maximum number of hops a message might need to travel between any two nodes?

**Question 3:**
What is the primary mechanism for communication in distributed-memory systems, and why is it necessary?

**Question 4:**
Explain the concept of "bisection bandwidth" and why it's an important metric for evaluating interconnection networks.

**Question 5:**
Describe a scenario where an asynchronous message passing operation would be more beneficial than a synchronous one.

**Question 6:**
Briefly explain the role of MPI in distributed-memory computing.

---

### **Answers to Practice Questions**

**Answer 1:**
*   **Shared-Memory:**
    *   **Advantage:** Easier programming model due to implicit communication.
    *   **Disadvantage:** Limited scalability due to memory bandwidth contention.
*   **Distributed-Memory:**
    *   **Advantage:** Highly scalable, can build very large systems without memory bandwidth bottlenecks.
    *   **Disadvantage:** More complex programming due to the need for explicit communication management.

**Answer 2:**
In a 4x4 2D mesh, the maximum number of hops is determined by the farthest nodes. If nodes are indexed (row, col) from (0,0) to (3,3), the farthest nodes would be (0,0) and (3,3). To get from (0,0) to (3,3), one would need to travel 3 hops horizontally and 3 hops vertically, for a total of **6 hops**.

**Answer 3:**
The primary mechanism is **message passing**. It is necessary because each processor in a distributed-memory system has its own private memory and cannot directly access the memory of other processors. Therefore, data must be explicitly sent and received between processes on different nodes.

**Answer 4:**
Bisection bandwidth is the sum of the bandwidths of all links that must be cut to divide the network into two equal halves. It's important because it represents the maximum communication rate between these two halves. A high bisection bandwidth is crucial for applications that exhibit a lot of communication between nodes in different parts of the system, ensuring that performance doesn't degrade significantly as the system scales.

**Answer 5:**
An asynchronous message passing operation would be beneficial when a process needs to send a large amount of data or when it can perform other computations while waiting for a message to be sent or received. For example, if a process needs to send data to multiple other processes, it can initiate all the sends asynchronously and then perform some local calculations while the messages are being transmitted, rather than waiting for each send to complete sequentially.

**Answer 6:**
MPI (Message Passing Interface) is a standardized library that provides a rich set of functions for implementing message-passing communication in distributed-memory systems. It defines protocols for point-to-point communication (send/receive) between processes and collective operations (like broadcast, reduce, scatter, gather) that involve multiple processes, enabling developers to write portable parallel programs across different distributed-memory hardware and operating systems.

---

### **Important Points to Remember:**

*   **Communication is Key:** In distributed-memory systems, the performance bottleneck is often the communication latency and bandwidth between nodes.
*   **Explicit vs. Implicit:** Shared-memory uses implicit communication (shared variables), while distributed-memory relies on explicit message passing.
*   **Scalability is a Major Driver:** Distributed-memory systems are favored for their ability to scale to a vast number of processors.
*   **Network Topology Matters:** The way nodes are interconnected significantly impacts communication efficiency.
*   **MPI is the Dominant Model:** For most distributed-memory programming, MPI is the standard tool.
*   **Data Partitioning is Crucial:** How data is split and distributed among nodes is fundamental to algorithm design and performance in distributed systems.
*   **Load Balancing is Essential:** To achieve good performance, work must be distributed as evenly as possible across all processors.

---
