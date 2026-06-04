---
title: "Parallel Programming Models - Parallel programming models: Parallel Random Access Machine (PRAM), bulk synchronous parallel (BSP), LogP, Shared memory vs. distributed memory models"
subject: "PARALLEL ALGORITHMS"
module: "Module 1: Introduction to Parallel Computing "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c6f7"
status: "completed"
scrapedAt: "2026-05-20T17:08:48.012Z"
---
# Parallel Algorithms: Module 1 - Introduction to Parallel Computing

## Topic: Parallel Programming Models

This module introduces fundamental parallel programming models that abstract the underlying hardware and provide a framework for designing parallel algorithms. Understanding these models is crucial for efficiently utilizing parallel computing resources.

---

### 1. Parallel Random Access Machine (PRAM)

The PRAM model is a foundational theoretical model of parallel computation. It envisions a large number of processors, each with its own memory, but all sharing access to a common global memory. The key characteristic is the **simultaneous access to memory**, making it an ideal theoretical starting point for algorithm design, though often unrealistic in practice due to hardware limitations.

**Key Concepts & Definitions:**

*   **Processors:** A theoretically unlimited number of processors are available.
*   **Memory:** A single, shared global memory accessible by all processors.
*   **Synchronous:** All processors execute in lockstep. In each "step" or "cycle," processors can read from memory, perform a computation, and write to memory.
*   **Simultaneous Access:** Multiple processors can access the same memory location in the same step.
*   **Concurrency Control:** To handle simultaneous writes to the same memory location, different **conflict resolution or access modes** are defined:
    *   **Exclusive Read (ER):** Only one processor can read from a memory location in a given step.
    *   **Concurrent Read (CR):** Multiple processors can read from the same memory location in a given step.
    *   **Exclusive Write (EW):** Only one processor can write to a memory location in a given step.
    *   **Concurrent Write (CW):** Multiple processors can write to the same memory location in a given step.
        *   **Common Write:** All processors writing to the same location must write the same value.
        *   **Arbitrary Write:** One of the processors writing to the same location wins (its value is written).
        *   **Priority Write:** Processors are assigned priorities, and the highest priority writer wins.
*   **Operation Cost:** Each read, write, and arithmetic operation takes one unit of time.

**PRAM Machine Types:**

The different types of PRAM machines are defined by their concurrent read and write capabilities:

*   **Ererw (Exclusive Read, Exclusive Write):** Only one processor can read or write to a location at a time. Very restrictive.
*   **Ercw (Exclusive Read, Concurrent Write):** Multiple processors can read, but only one can write.
*   **Crerw (Concurrent Read, Exclusive Write):** Multiple processors can read, but only one can write.
*   **Crcw (Concurrent Read, Concurrent Write):** Multiple processors can read and write. This is the most powerful but also the most complex to implement and analyze.

**Algorithm Design with PRAM:**

PRAM is useful for designing theoretically optimal algorithms because it simplifies the memory access problem. Algorithms designed for PRAM can often be adapted to real-world parallel architectures.

**Example:** Summing `n` numbers using PRAM.

*   **Input:** An array `A` of `n` numbers, each in a separate memory location.
*   **Process:**
    1.  Initialize `n` processors. Processor `i` (0-indexed) is assigned to location `i` of array `A`.
    2.  Use a "doubling" or "tree-based" approach. In the first step, processor `i` reads `A[i]` and `A[i+1]` (if `i` is even and `i+1 < n`) and writes their sum to `A[i]`.
    3.  Repeat this process, halving the number of active processors and doubling the distance between processors accessing memory locations in each step.
    4.  After `log₂n` steps, the sum will be in `A[0]`.
*   **PRAM Model Used:** This typically requires CR and EW for efficient implementation.

**Important Points to Remember:**

*   PRAM is a **theoretical model**. Its unlimited processors and shared memory are not directly achievable in practice.
*   Focuses on **computational complexity** (number of steps) rather than communication costs.
*   Crucial for understanding **fundamental parallel paradigms** and designing algorithms that can be later adapted.

---

### 2. Bulk Synchronous Parallel (BSP)

BSP offers a more realistic model by acknowledging the cost of communication and synchronization. It divides computation into **supersteps**, where each superstep consists of:

1.  **Local Computations:** Processors perform computations on their local data.
2.  **Global Communication:** Processors exchange data with other processors.
3.  **Synchronization Barrier:** All processors must complete their communication before proceeding to the next superstep.

**Key Concepts & Definitions:**

*   **Processors (P):** A fixed number of processors.
*   **Memory:** Each processor has its own local memory. There is no shared global memory as in PRAM.
*   **Superstep:** A unit of parallel execution.
*   **Local Computation:** Operations performed solely on a processor's own data.
*   **Communication:** Message passing between processors.
*   **Synchronization Barrier:** A point where all processors must finish their current task (computation and communication) before any processor can start the next task.
*   **`g` (global synchronization cost):** The cost of performing a synchronization barrier across all processors.
*   **`L` (latency):** The cost of sending a single message.
*   **Bandwidth:** The rate at which data can be transmitted.

**BSP Model Cost:**

The cost of a BSP computation is typically expressed as:

`Cost = ∑ (local_computation_costᵢ + communication_costᵢ) + num_supersteps * g`

where `communication_costᵢ` is the cost of sending/receiving messages by processor `i` in a superstep.

**Advantages of BSP:**

*   **More Realistic:** Accounts for communication and synchronization overhead.
*   **Simpler Programming Model:** The superstep structure simplifies algorithm design.
*   **Scalability:** Easier to analyze and achieve good performance on distributed memory systems.

**Algorithm Design with BSP:**

Algorithms are designed by dividing the problem into stages, where each stage involves local computations followed by necessary data exchanges, all within a superstep.

**Example:** Summing `n` numbers using BSP.

*   **Input:** An array `A` of `n` numbers, distributed across `P` processors.
*   **Process:**
    1.  **Superstep 1:** Each processor `i` computes the sum of its local portion of the array. Let this partial sum be `Sᵢ`.
    2.  **Superstep 2:** Processors exchange their partial sums to compute the global sum. For example, one processor can collect all partial sums, or partial sums can be accumulated in a tree-like fashion.
    3.  **Synchronization Barrier:** After all partial sums have been exchanged, the global sum is computed.
*   **Cost:** The total cost would involve the time for local summation, the time for message passing of partial sums, and the synchronization overhead.

**Important Points to Remember:**

*   BSP models **explicit communication** and **synchronization**.
*   The `g` parameter is crucial for understanding the impact of synchronization.
*   A well-designed BSP algorithm minimizes the number of supersteps and balances computation and communication within each superstep.

---

### 3. LogP Model

The LogP model is another realistic model that focuses on the **latency, overhead, and bandwidth** of message-passing communication. It provides a more fine-grained view of communication than BSP, breaking it down into these specific parameters.

**Key Concepts & Definitions:**

*   **Processors (P):** A fixed number of processors.
*   **Memory:** Each processor has its own local memory.
*   **Communication:** Message passing is the primary means of inter-processor communication.
*   **`L` (Latency):** The time delay between sending a message and its arrival at the destination.
*   **`o` (Overhead):** The time taken by the sending and receiving processors to handle a message (e.g., preparing the message, processing arrival). This is separate from the transmission time.
*   **`g` (Gap):** The minimum time interval between consecutive message transmissions or receptions by a single processor. This represents the processor's ability to engage in communication.
*   **`P` (Number of Processors):** The total number of processors.

**LogP Model Cost:**

The cost of sending a message from processor A to processor B is:

`Cost = o + L + o` (for the sender and receiver overhead and latency)

The rate at which a processor can send messages is limited by `1/g`. Similarly, the rate at which it can receive is also limited by `1/g`.

**Advantages of LogP:**

*   **Detailed Communication Costs:** Provides a more accurate representation of communication overhead than BSP.
*   **Helps Optimize Communication Patterns:** Allows for analysis of message scheduling and pipelining.
*   **Useful for Network Topologies:** Can be adapted to consider network characteristics.

**Algorithm Design with LogP:**

Algorithms are designed by minimizing the total `o`, `L`, and by ensuring that the `g` parameter is not a bottleneck. This often involves strategies like message aggregation (reducing the number of messages) and pipelining (overlapping communication and computation).

**Example:** Scatter operation (distributing data from one processor to all others).

*   **Input:** Processor `S` has a data item `D`. It needs to send `D` to all `P-1` other processors.
*   **LogP Analysis:**
    *   Processor `S` sends `P-1` messages. Each send incurs `o` overhead. The total sending overhead is `(P-1) * o`.
    *   Each message takes `L` latency to travel.
    *   The receiver processors each incur `o` overhead. Total receiving overhead is `(P-1) * o`.
    *   The sending processor `S` must respect the gap `g`. It can send at most `k` messages within time `T` if `k <= T/g`. This is a crucial constraint.
*   **Optimized Scatter:** To minimize time, `S` can send messages in parallel with the processing of arrival confirmations, or use a tree-like distribution if the data is large. The bottleneck might be the sender's `g` if `(P-1) * o > g`.

**Important Points to Remember:**

*   LogP emphasizes the **overhead of sending/receiving** and the **bandwidth of individual processors**.
*   The `g` parameter limits how frequently a processor can participate in communication.
*   It's a valuable tool for understanding the performance implications of different message-passing strategies.

---

### 4. Shared Memory vs. Distributed Memory Models

These are two fundamental architectural paradigms that dictate how processors access data, leading to different programming models and challenges.

#### 4.1 Shared Memory Model

In a shared memory system, all processors can access a common pool of memory. This simplifies programming as processors can communicate by reading and writing to shared variables.

**Key Concepts & Definitions:**

*   **Global Address Space:** All processors share a single address space, meaning any processor can directly access any memory location.
*   **Implicit Communication:** Communication happens implicitly through shared variables.
*   **Synchronization:** Crucial for correctness. Mechanisms like locks, semaphores, and mutexes are used to prevent race conditions when multiple processors access shared data simultaneously.
*   **Hardware Implementations:**
    *   **Uniform Memory Access (UMA):** All processors have the same access time to all memory locations. (e.g., Symmetric Multiprocessing - SMP systems).
    *   **Non-Uniform Memory Access (NUMA):** Access times vary depending on the memory location relative to the processor. Processors have faster access to their local memory banks.
*   **Programming Model:** Threads, OpenMP, Java threads, etc.

**Advantages:**

*   **Easier to Program:** Natural for programmers accustomed to sequential programming.
*   **Implicit Communication:** No explicit message passing required.
*   **Faster for Fine-Grained Access:** Can be efficient for small data exchanges.

**Disadvantages:**

*   **Scalability Limitations:** As the number of processors increases, contention for shared memory can become a bottleneck.
*   **Synchronization Overhead:** Managing locks and synchronization can be complex and introduce performance overhead.
*   **Cache Coherence Issues:** Maintaining consistency of data across multiple caches can be challenging and costly.

**Example:** Matrix multiplication using shared memory.

*   **Process:** Each thread is assigned a subset of the output matrix elements to compute. Threads read rows from the first matrix and columns from the second matrix (which are shared). Synchronization might be needed if a thread needs to update a shared sum.
*   **Synchronization Need:** If multiple threads are computing partial sums for the same output element and adding them to a running total, a lock would be required around the addition operation to prevent race conditions.

**Important Points to Remember:**

*   The core challenge is **managing concurrency and synchronization** to ensure data integrity.
*   Scalability is often limited by **memory bandwidth and contention**.
*   **Cache coherence protocols** are critical for performance.

#### 4.2 Distributed Memory Model

In a distributed memory system, each processor has its own private memory. Processors can only access their local data directly. To communicate, they must explicitly send and receive messages to other processors.

**Key Concepts & Definitions:**

*   **Local Address Spaces:** Each processor has its own independent memory space.
*   **Explicit Communication:** Processors must use message-passing libraries (e.g., MPI - Message Passing Interface) to exchange data.
*   **No Implicit Synchronization:** Synchronization must be explicitly programmed using message-passing primitives (e.g., `MPI_Barrier`, `MPI_Send`/`MPI_Recv` pairs).
*   **Hardware Implementations:** Clusters of workstations, supercomputers with separate compute nodes.
*   **Programming Model:** MPI, Charm++, distributed objects.

**Advantages:**

*   **Better Scalability:** Can scale to a very large number of processors because memory access is local.
*   **Higher Aggregate Memory:** The total memory capacity is the sum of all local memories.
*   **No Cache Coherence Overhead:** Eliminates the complexity and cost of maintaining cache coherence across processors.

**Disadvantages:**

*   **More Complex Programming:** Requires explicit management of data distribution and communication.
*   **Communication Overhead:** Message passing can be slower than local memory access.
*   **Load Balancing:** Distributing work evenly across processors is crucial for performance.

**Example:** Matrix multiplication using distributed memory.

*   **Process:** The matrices are partitioned and distributed across different nodes. A processor might be responsible for computing a sub-block of the output matrix. It needs to receive rows from the first matrix and columns from the second matrix from other processors via explicit message passing.
*   **Data Distribution:** For example, processor `i` might hold rows `i*rows_per_proc` to `(i+1)*rows_per_proc - 1` of matrix A, and matrix B might be distributed column-wise or block-wise.
*   **Communication:** To compute an element `C[i][j]`, processor responsible for `C[i][j]` might need to receive row `i` of A from the processor holding it and column `j` of B from the processor holding it.

**Important Points to Remember:**

*   The key challenge is **managing data distribution and explicit communication**.
*   **Latency and bandwidth of the interconnection network** are critical performance factors.
*   **Load balancing** and **minimizing communication** are paramount for efficient parallel execution.

---

### 5. Practice Questions and Exercises

**Question 1:**
Which PRAM model is the most powerful in terms of its read/write capabilities?
a) Ererw
b) Ercw
c) Crerw
d) Crcw

**Question 2:**
In the BSP model, what is the term used to describe the period of time between the completion of one superstep and the beginning of the next?
a) Local Computation
b) Global Communication
c) Synchronization Barrier
d) None of the above

**Question 3:**
The `g` parameter in the LogP model represents:
a) The cost of sending a message.
b) The time taken by a processor to handle a message.
c) The minimum time interval between consecutive message transmissions or receptions by a single processor.
d) The total number of processors.

**Question 4:**
Which of the following is a primary challenge in shared memory parallel programming?
a) Explicit message passing
b) Load balancing across nodes
c) Managing synchronization and avoiding race conditions
d) Limited aggregate memory

**Question 5:**
Describe a scenario where the LogP model's `g` parameter would be a significant bottleneck.

**Question 6:**
Compare and contrast the communication mechanisms in Shared Memory and Distributed Memory models.

**Question 7:**
Explain how the PRAM model's concept of "simultaneous access" differs from what is typically achievable in modern hardware.

---

### Answers to Practice Questions

**Answer 1:**
d) Crcw (Concurrent Read, Concurrent Write)

**Answer 2:**
c) Synchronization Barrier. The entire process within a superstep is followed by a synchronization barrier before the next superstep begins.

**Answer 3:**
c) The minimum time interval between consecutive message transmissions or receptions by a single processor.

**Answer 4:**
c) Managing synchronization and avoiding race conditions.

**Answer 5:**
If a single processor needs to send a large number of small messages to many different destinations in rapid succession, the `g` parameter (gap between communications) on the sending processor could limit how quickly all these messages can be initiated, even if latency and overhead are low and the network bandwidth is sufficient. For example, a sensor node needing to report numerous events quickly to different monitoring stations.

**Answer 6:**
*   **Shared Memory:** Communication is implicit through shared variables. Processors read from and write to common memory locations. Synchronization mechanisms (locks, semaphores) are used to control access to shared data and prevent race conditions.
*   **Distributed Memory:** Communication is explicit through message passing. Processors send and receive data using specific communication primitives (e.g., `MPI_Send`, `MPI_Recv`). There is no shared memory, and synchronization is achieved through message exchange patterns or explicit synchronization calls.

**Answer 7:**
The PRAM model assumes an unlimited number of processors can simultaneously access any memory location without contention or additional overhead. In reality, hardware has a finite number of memory controllers and buses, leading to contention and increased access times when multiple processors try to access the same memory location at the same time. Real-world systems achieve parallelism through techniques like pipelining, caching, and multiple memory channels, which can hide some of this latency but don't provide truly simultaneous, zero-overhead access for an arbitrary number of processors.

---

### Highlighted Important Points to Remember

*   **PRAM:** Theoretical, unlimited processors, shared memory, simultaneous access, focuses on computational steps, not communication cost. Crucial for algorithm design.
*   **BSP:** Realistic, fixed processors, local memory, **supersteps** (local compute + global comm + sync barrier), `g` for sync cost. Balances compute/comm.
*   **LogP:** Realistic, fixed processors, local memory, explicit message passing. Focuses on fine-grained communication costs: **L**atency, **o**verhead, **g**ap. `g` limits processor communication frequency.
*   **Shared Memory:** All processors access a common memory. **Implicit communication**, but requires **explicit synchronization** (locks, semaphores) to manage concurrency and prevent race conditions. Scalability limited by memory contention.
*   **Distributed Memory:** Each processor has private memory. **Explicit communication** via message passing. No shared memory, so no cache coherence issues, but programmer must manage data distribution and communication. Scales better.
*   The choice of model influences algorithm design, programming style, and the performance characteristics of parallel applications.
