---
title: "Parallel computing architectures: SIMD, MIMD, shared memory, distributed memory."
subject: "PARALLEL ALGORITHMS"
module: "Module 1: Introduction to Parallel Computing "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c6f6"
status: "completed"
scrapedAt: "2026-05-20T17:08:47.314Z"
---
# PARALLEL ALGORITHMS - Module 1: Introduction to Parallel Computing

## Topic: Parallel Computing Architectures: SIMD, MIMD, Shared Memory, Distributed Memory

---

### Learning Outcomes Covered:

*   Understand the fundamental differences between SIMD and MIMD architectures.
*   Differentiate between shared memory and distributed memory systems.
*   Explain the advantages and disadvantages of each architecture.
*   Recognize typical applications for each architectural type.
*   Understand the trade-offs involved in choosing a particular architecture.

---

### 1. Introduction to Parallel Computing

Parallel computing is a type of computation in which many calculations or the execution of processes are carried out simultaneously. Large problems can often be divided into smaller ones, which can then be solved at the same time. This is a fundamental concept in modern computing, enabling us to tackle complex problems that would be intractable with sequential processing.

---

### 2. Parallel Computing Architectures

Parallel computing architectures are broadly categorized based on how they handle instructions and data, and how processors access memory. We'll explore the two main instruction/data stream classifications (SIMD and MIMD) and the two primary memory organization models (Shared Memory and Distributed Memory).

---

### 2.1. Classification by Instruction and Data Stream

Flynn's Taxonomy is a widely used classification scheme for parallel architectures based on the number of concurrent instruction streams and data streams.

#### 2.1.1. SIMD (Single Instruction, Multiple Data)

**Key Concept:** In SIMD, a single control unit fetches and decodes instructions. This same instruction is then executed simultaneously on multiple data streams by multiple processing elements. Each processing element has its own memory, but they all operate under the direction of a single instruction.

**Definition:** SIMD is a parallel processing architecture where a single instruction is executed on multiple data elements at the same time.

**How it works:**
*   A single instruction is broadcast to all processing elements.
*   Each processing element performs the same operation on its own data element.
*   Processing elements might be disabled for certain operations (e.g., conditional branching), but the instruction is still fetched and decoded by the control unit for all elements.

**Components:**
*   **Control Unit:** Fetches and decodes instructions.
*   **Processing Elements (PEs):** Perform the actual computations. Each PE has its own arithmetic logic unit (ALU) and memory.

**Diagrammatic Representation:**

```
+-----------------+      +-----------------+
|                 |      |                 |
|   Control Unit  |----->| Processing El. 1|
| (Fetches &     |      | (ALU + Memory)  |
|  Decodes Instr.)|      +-----------------+
|                 |      +-----------------+
+-----------------+      |                 |
                       | Processing El. 2|
                       | (ALU + Memory)  |
                       +-----------------+
                              ...
                       +-----------------+
                       |                 |
                       | Processing El. N|
                       | (ALU + Memory)  |
                       +-----------------+
```

**Examples:**
*   **Vector Processors:** Early supercomputers like Cray-1 used vector instructions that operated on arrays of data.
*   **Graphics Processing Units (GPUs):** Modern GPUs are excellent examples of SIMD. They have thousands of cores that execute the same shader program on different pixels or vertices simultaneously.
*   **Multimedia Extensions (MMX) in CPUs:** Intel's MMX technology allows a single instruction to operate on multiple data elements packed into a single register.
*   **Systolic Arrays:** Specialized hardware for matrix operations.

**Advantages:**
*   **Simplicity of Control:** Only one control unit is needed, simplifying hardware design.
*   **High Throughput for Data-Parallel Tasks:** Excellent for problems where the same operation needs to be performed on large datasets.
*   **Efficiency:** Can be very efficient for suitable applications due to low control overhead.

**Disadvantages:**
*   **Limited Flexibility:** Not suitable for algorithms with complex data dependencies or significant conditional branching, as all PEs must execute the same instruction (though they can be masked or disabled).
*   **Wasted Computation:** If some PEs have no data to process or are disabled by masking, their ALUs are idle, leading to wasted resources.

**Typical Applications:**
*   Image and signal processing
*   Scientific simulations (e.g., fluid dynamics, weather forecasting)
*   Graphics rendering
*   Matrix operations

---

#### 2.1.2. MIMD (Multiple Instruction, Multiple Data)

**Key Concept:** In MIMD, each processor has its own control unit and can fetch and execute its own independent instruction stream, operating on its own private data stream. This is the most general form of parallel processing.

**Definition:** MIMD is a parallel processing architecture where multiple processors simultaneously execute different instructions on different data.

**How it works:**
*   Each processor has its own instruction stream and data stream.
*   Processors can operate independently and communicate with each other as needed.
*   This allows for a high degree of parallelism and flexibility.

**Components:**
*   **Multiple Processors:** Each with its own control unit, ALU, and often its own memory (though memory access models vary).

**Diagrammatic Representation:**

```
+-----------------+      +-----------------+
|                 |      |                 |
|   Control Unit 1|----->| Processing El. 1|
| (Fetches &     |      | (ALU + Memory)  |
|  Decodes Instr.)|      +-----------------+
|                 |      +-----------------+
+-----------------+      |                 |
                       | Control Unit 2|
                       | (Fetches &     |
                       |  Decodes Instr.)|
                       |                 |
                       +-----------------+
                              ...
                       +-----------------+
                       |                 |
                       | Control Unit N |
                       | (Fetches &     |
                       |  Decodes Instr.)|
                       |                 |
                       +-----------------+
```

**Examples:**
*   **Multi-core Processors:** Modern CPUs with multiple cores are MIMD systems. Each core can run a different program or thread independently.
*   **Clusters of Workstations:** Networks of computers that work together on a common task.
*   **Massively Parallel Processors (MPPs):** Large-scale parallel systems with thousands of independent processors.

**Advantages:**
*   **High Flexibility:** Can execute any type of parallel algorithm, including those with irregular data structures and complex control flow.
*   **Scalability:** Can be scaled to a large number of processors.
*   **Efficient for Asynchronous Tasks:** Suitable for problems where tasks can be executed independently and don't require strict synchronization.

**Disadvantages:**
*   **Complexity:** More complex control logic and inter-processor communication mechanisms are required.
*   **Potential for Load Imbalance:** If tasks are not distributed evenly, some processors may be idle while others are overloaded.
*   **Communication Overhead:** Efficient communication between processors is crucial and can be a bottleneck.

**Typical Applications:**
*   General-purpose computing
*   Running multiple applications simultaneously
*   Complex simulations with irregular data structures
*   Database management
*   Web servers

---

### 2.2. Classification by Memory Organization

Architectures can also be classified by how processors access memory.

#### 2.2.1. Shared Memory Architecture

**Key Concept:** In a shared memory system, all processors can access a common, single address space. This means any processor can read from or write to any memory location directly.

**Definition:** Shared memory is a parallel computing architecture where all processors share access to a single physical memory space.

**How it works:**
*   Processors communicate by reading and writing to shared memory locations.
*   Synchronization mechanisms (e.g., locks, semaphores) are essential to prevent race conditions when multiple processors try to access the same memory location simultaneously.

**Diagrammatic Representation:**

```
+-----------------+       +-----------------+
|                 |       |                 |
|   Processor 1   | ----> |                 |
|                 |       |                 |
+-----------------+       |   Shared Memory |
+-----------------+       |  (Single Address|
|                 |       |     Space)      |
|   Processor 2   | ----> |                 |
|                 |       |                 |
+-----------------+       +-----------------+
      ...                       |
+-----------------+       |
|                 |       |
|   Processor N   | ----> |
|                 |       |
+-----------------+       +-----------------+
```

**Types of Shared Memory Systems:**
*   **Uniform Memory Access (UMA):** All processors have the same access time to all memory locations. This is typical in Symmetric Multiprocessing (SMP) systems.
*   **Non-Uniform Memory Access (NUMA):** Access time to memory depends on the processor's proximity to the memory module. Processors have faster access to their local memory banks than to memory attached to other processors.

**Examples:**
*   **SMP Systems (e.g., multi-core CPUs in laptops and desktops):** Typically UMA.
*   **High-end servers:** Often use NUMA architectures to scale to more processors.

**Advantages:**
*   **Simple Programming Model:** Easier to develop parallel programs as there's no explicit message passing. Data sharing is natural.
*   **Fast Data Sharing:** Processors can access data quickly without explicit communication.
*   **Lower Latency:** Direct memory access can be faster than message passing in some cases.

**Disadvantages:**
*   **Scalability Limitations:** As the number of processors increases, contention for memory access can become a significant bottleneck. Cache coherence protocols add complexity and overhead.
*   **Cache Coherence Overhead:** Maintaining consistency of data across multiple processor caches requires complex protocols, which can slow down operations.
*   **Synchronization Complexity:** Ensuring correctness requires careful management of synchronization primitives (locks, mutexes), which can be difficult and error-prone.

**Typical Applications:**
*   Multi-threaded applications on multi-core processors
*   Interactive applications
*   Short-running parallel tasks

---

#### 2.2.2. Distributed Memory Architecture

**Key Concept:** In a distributed memory system, each processor has its own private memory. Processors cannot directly access memory belonging to other processors. Communication and data sharing must occur through explicit message passing.

**Definition:** Distributed memory is a parallel computing architecture where each processor has its own private memory, and processors communicate by sending and receiving messages.

**How it works:**
*   Processors operate on data stored in their local memory.
*   To share data or coordinate, processors must send messages to each other over an interconnection network.
*   This requires explicit programming of data transfer.

**Diagrammatic Representation:**

```
+-----------------+       +-----------------+
|                 |       |                 |
|   Processor 1   | <---->|   Memory 1      |
| (Own Memory)    |       | (Private)       |
+-----------------+       +-----------------+
        ^                       ^
        | (Interconnection)     | (Interconnection)
        v                       v
+-----------------+       +-----------------+
|                 |       |                 |
|   Processor 2   | <---->|   Memory 2      |
| (Own Memory)    |       | (Private)       |
+-----------------+       +-----------------+
      ...                       ...
+-----------------+       +-----------------+
|                 |       |                 |
|   Processor N   | <---->|   Memory N      |
| (Own Memory)    |       | (Private)       |
+-----------------+       +-----------------+
```

**Examples:**
*   **Clusters of PCs or Servers:** Each machine has its own RAM.
*   **Massively Parallel Processors (MPPs):** Systems designed for large-scale parallelism with many nodes.
*   **Supercomputers:** Many modern supercomputers are built using distributed memory architectures.

**Advantages:**
*   **Scalability:** Can scale to a very large number of processors, as each processor has its own memory and doesn't contend for a single shared resource.
*   **Cost-Effective:** Can be built using commodity hardware (e.g., PCs).
*   **No Cache Coherence Issues:** Since memory is private, there are no cache coherence problems to manage at the hardware level.

**Disadvantages:**
*   **Complex Programming Model:** Requires explicit message passing (e.g., using libraries like MPI - Message Passing Interface), which can be more challenging to develop and debug.
*   **Communication Overhead:** Message passing can introduce significant latency and communication overhead, especially for fine-grained parallelism or frequent data sharing.
*   **Data Distribution:** Efficiently distributing data across processors is crucial for performance.

**Typical Applications:**
*   Large-scale scientific simulations (e.g., astrophysics, genomics)
*   High-performance computing (HPC)
*   Web crawling and large-scale data analysis
*   Distributed databases

---

### 3. Hybrid Architectures

Many modern parallel systems combine elements of both SIMD and MIMD, as well as shared and distributed memory.

*   **Hybrid Shared-Distributed Memory:** A cluster of multi-core machines. Within each machine, cores share memory (shared memory model), but machines communicate with each other via message passing over a network (distributed memory model). This is a very common architecture today.
*   **SIMD/MIMD Hybrid:** A MIMD system where each processor is itself a SIMD machine (e.g., a cluster of GPUs, where each GPU is a SIMD processor).

---

### 4. Key Concepts and Definitions Recap

*   **Parallel Computing:** Executing multiple computations simultaneously.
*   **SIMD (Single Instruction, Multiple Data):** One instruction, many data streams.
*   **MIMD (Multiple Instruction, Multiple Data):** Multiple instructions, multiple data streams.
*   **Shared Memory:** All processors access a single address space. Communication is implicit through memory.
*   **Distributed Memory:** Each processor has private memory. Communication is explicit via message passing.
*   **UMA (Uniform Memory Access):** Equal access time to all memory locations.
*   **NUMA (Non-Uniform Memory Access):** Access time varies based on processor-memory proximity.
*   **Message Passing:** Explicit communication mechanism used in distributed memory systems.
*   **Cache Coherence:** Ensuring consistency of data across multiple processor caches in shared memory systems.

---

### 5. Advantages and Disadvantages Summary

| Architecture Type        | Advantages                                    | Disadvantages                                      |
| :----------------------- | :-------------------------------------------- | :------------------------------------------------- |
| **SIMD**                 | Simple control, High throughput for data-parallel tasks, Efficient | Limited flexibility, Wasted computation           |
| **MIMD**                 | High flexibility, Scalable, Efficient for asynchronous tasks | Complex control, Load imbalance potential, Communication overhead |
| **Shared Memory**        | Simple programming, Fast data sharing, Lower latency | Scalability limitations, Cache coherence overhead, Synchronization complexity |
| **Distributed Memory**   | High scalability, Cost-effective, No cache coherence issues | Complex programming, Communication overhead, Data distribution challenges |

---

### 6. Typical Applications Summary

*   **SIMD:** Image/signal processing, graphics rendering, vector operations.
*   **MIMD:** General-purpose computing, complex simulations, web servers.
*   **Shared Memory:** Multi-threaded applications, interactive tasks.
*   **Distributed Memory:** Large-scale simulations, HPC, big data analysis.

---

### 7. Practice Questions/Exercises

1.  **Scenario Analysis:** You are tasked with developing an algorithm to apply a filter to a high-resolution image. The filter operation is the same for every pixel. Which parallel architecture (SIMD or MIMD) would you primarily consider and why?
    *   **Answer:** SIMD. The nature of applying the same operation (the filter) to many independent data elements (pixels) makes it a prime candidate for SIMD. This allows for efficient parallel processing by broadcasting the filter instruction to all pixels simultaneously.

2.  **Architecture Identification:** Consider a system where 16 processors are connected via a high-speed network, and each processor has its own local RAM. To share data between processors, they must send explicit messages.
    *   a) Is this system likely to be SIMD or MIMD?
    *   b) Is this system likely to have shared memory or distributed memory?
    *   **Answer:**
        *   a) MIMD: Since each processor can potentially execute different instructions and handle different data, it fits the MIMD definition.
        *   b) Distributed Memory: The description explicitly states that each processor has its "own local RAM," and communication is via "explicit messages," which are hallmarks of distributed memory systems.

3.  **Trade-off Discussion:** Imagine you have a problem that can be parallelized, but it involves complex conditional logic and irregular data access patterns. You have the choice between a shared memory system and a distributed memory system. Discuss the pros and cons of each for this specific problem.
    *   **Answer:**
        *   **Shared Memory:**
            *   *Pros:* Might be easier to program initially due to implicit data sharing. No need for explicit message passing for data access.
            *   *Cons:* The complex conditional logic could lead to significant processor idling if not all processors execute the same branches (SIMD-like behavior would be detrimental here). Irregular data access could lead to cache misses and contention on the shared memory bus, potentially slowing down the system. Synchronization overhead for the complex logic could be high.
        *   **Distributed Memory:**
            *   *Pros:* MIMD nature allows each processor to execute its own independent logic, handling the complex conditional branches efficiently. Data can be partitioned and kept local, reducing contention.
            *   *Cons:* Programming complexity will be higher, requiring explicit message passing for any data needed by different processors. Performance will be highly dependent on how well data can be partitioned and how frequently communication is required.

4.  **Analogy Time:** Explain the difference between SIMD and MIMD using an analogy from everyday life.
    *   **Answer:**
        *   **SIMD Analogy:** Imagine a choir director giving a single command: "Sing the first note." All singers in the choir (processing elements) simultaneously sing the same note (instruction) on their individual vocal cords (data).
        *   **MIMD Analogy:** Imagine a group of chefs in a kitchen. Each chef can decide what dish to cook (instruction) and use their own ingredients (data). They might ask each other for specific ingredients or tell others when a dish is ready (message passing).

5.  **GPU vs. Multi-core CPU:** Briefly describe how a GPU and a multi-core CPU typically map to the SIMD/MIMD and Shared/Distributed memory paradigms.
    *   **Answer:**
        *   **GPU:** Typically exhibits **SIMD** characteristics (though modern GPUs have some MIMD capabilities for thread scheduling). It has many simple cores that execute the same instruction stream on many data elements simultaneously. It is often considered a **distributed memory** system at the node level (e.g., CPU to GPU memory transfer), but within the GPU itself, the processing cores often share access to local memory or caches in a more complex way.
        *   **Multi-core CPU:** Primarily a **MIMD** architecture. Each core can execute independent instruction streams. It is a **shared memory** system, where all cores can access the system's RAM.

---

### 8. Important Points to Remember

*   **Flynn's Taxonomy (SIMD vs. MIMD):** This is a fundamental classification based on instruction and data streams.
*   **Memory Organization (Shared vs. Distributed):** This is a fundamental classification based on how processors access memory and communicate.
*   **SIMD is good for data parallelism:** When the same operation is applied to many data items.
*   **MIMD is good for task parallelism:** When different tasks are executed concurrently.
*   **Shared memory simplifies programming but can limit scalability.**
*   **Distributed memory scales well but increases programming complexity.**
*   **Most modern systems are hybrid**, combining aspects of these fundamental architectures.
*   **Choice of architecture depends on the problem being solved.**

---
---
