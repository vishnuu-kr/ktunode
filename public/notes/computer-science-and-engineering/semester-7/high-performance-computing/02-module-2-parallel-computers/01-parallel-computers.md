---
title: "Parallel computers"
subject: "HIGH PERFORMANCE COMPUTING"
module: "Module 2: Parallel computers"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c620"
status: "completed"
scrapedAt: "2026-05-20T17:07:05.163Z"
---
# HIGH PERFORMANCE COMPUTING - Module 2: Parallel Computers

## Topic: Parallel Computers

### 1. Introduction to Parallel Computers

**Key Concepts & Definitions:**

*   **Parallel Computing:** A type of computation where many calculations or the execution of processes are carried out simultaneously. It's a method of solving a large problem by breaking it down into smaller problems, and solving those smaller problems concurrently.
*   **Sequential Computing:** The traditional approach where instructions are executed one after another in a strict order.
*   **Concurrency:** The ability of different parts or units of a program, or system, to be executed out-of-order or in partial order, without affecting the final outcome. This doesn't necessarily mean simultaneous execution, but rather the ability to interleave operations.
*   **Parallelism:** The simultaneous execution of multiple computations. True parallelism requires hardware support for executing multiple instructions at the exact same time.
*   **Speedup:** A measure of how much faster a parallel algorithm is compared to its sequential counterpart.
    *   $S(p) = T_s / T_p$
        *   $T_s$: Execution time of the sequential algorithm.
        *   $T_p$: Execution time of the parallel algorithm using $p$ processors.
*   **Efficiency:** A measure of how effectively the processors are being utilized in a parallel system.
    *   $E(p) = S(p) / p = T_s / (T_p * p)$
*   **Overhead:** The extra time and resources consumed by the parallel system due to communication, synchronization, load balancing, etc., which do not contribute to the actual computation.

**Why Parallel Computing?**

*   **Faster execution:** To solve problems that are too large or too time-consuming for a single processor.
*   **Handling larger datasets:** To process datasets that exceed the memory capacity of a single machine.
*   **Solving more complex problems:** To model intricate systems that require massive computational power.
*   **Cost-effectiveness:** In some cases, a cluster of cheaper machines can outperform a single expensive supercomputer.

**Examples:**

*   **Weather forecasting:** Simulating atmospheric conditions requires processing vast amounts of data simultaneously.
*   **Scientific simulations:** Molecular dynamics, computational fluid dynamics, astrophysical simulations.
*   **Financial modeling:** Risk analysis, option pricing.
*   **Image and video processing:** Rendering, encoding, and analysis of large media files.

**Learning Outcome 1: Understand the motivation for parallel computing and the limitations of sequential computing.**

*   **Motivation:** As problems become larger and more complex, sequential computing hits a "wall." Clock speeds are limited by physics (heat dissipation, speed of light), and single-processor architectures are reaching their performance limits. Parallel computing offers a way to overcome these limitations by distributing the workload.
*   **Limitations of Sequential Computing:**
    *   **Moore's Law Slowdown:** The rate of increase in processor speed has slowed down significantly.
    *   **Power Consumption and Heat Dissipation:** Faster clock speeds generate more heat, making it difficult to push single processors much further.
    *   **Memory Bottleneck:** Even if a processor is fast, it can be starved for data if memory access is slow.
    *   **Problem Size:** Many real-world problems are inherently too large for a single machine to solve within a reasonable timeframe.

### 2. Flynn's Taxonomy of Parallel Computer Architectures

**Key Concepts & Definitions:**

Flynn's taxonomy classifies parallel computers based on the number of instruction streams and data streams they can handle.

*   **Instruction Stream:** A sequence of instructions executed by a processor.
*   **Data Stream:** A sequence of data elements processed by an instruction.

**The Four Categories:**

1.  **Single Instruction, Single Data (SISD):**
    *   **Description:** Traditional uniprocessor systems. A single processor executes a single instruction stream, operating on a single data stream.
    *   **Example:** A standard desktop PC running a single program without any parallel processing.

2.  **Single Instruction, Multiple Data (SIMD):**
    *   **Description:** Multiple processing elements execute the same instruction simultaneously on different data elements.
    *   **Characteristics:**
        *   Single control unit.
        *   Multiple processing units, each with its own memory.
        *   All processing units execute the same instruction in lockstep.
        *   Ideal for data-parallel tasks where the same operation is applied to many data items.
    *   **Examples:**
        *   **Vector Processors:** Process arrays of data (vectors) with a single instruction.
        *   **Graphics Processing Units (GPUs):** Highly parallel architectures designed for graphics rendering, but widely used for general-purpose parallel computing (GPGPU). They have thousands of cores that can execute the same instruction on different data points.
        *   **Early Array Processors:** Dedicated hardware for array computations.

3.  **Multiple Instruction, Single Data (MISD):**
    *   **Description:** Multiple instruction streams operate on a single data stream. This is a rare category in practice.
    *   **Characteristics:**
        *   Multiple control units.
        *   Single processing unit or set of processing units operating on the same data.
        *   Each processor executes a different instruction on the same data.
    *   **Examples:**
        *   **Fault-tolerant systems:** Redundant processors executing the same task with different instructions or checks to detect errors. (e.g., flight control systems).
        *   **Early examples were theoretical or niche.**

4.  **Multiple Instruction, Multiple Data (MIMD):**
    *   **Description:** Multiple processors independently execute different instruction streams on different data streams. This is the most common and flexible category for general-purpose parallel computing.
    *   **Characteristics:**
        *   Multiple processors, each with its own control unit and memory.
        *   Processors can operate asynchronously.
        *   Can handle a wide variety of parallel tasks, including task parallelism and data parallelism.
    *   **Sub-categories of MIMD:**
        *   **Shared Memory MIMD (SMP - Symmetric Multiprocessing):** All processors share a common memory address space. Processors communicate by reading and writing to shared memory locations.
            *   **Advantages:** Easier programming model, fast communication.
            *   **Disadvantages:** Memory access contention, scalability limitations due to bus bandwidth.
            *   **Examples:** Multi-core processors in modern CPUs, multi-processor servers.
        *   **Distributed Memory MIMD:** Each processor has its own private memory. Processors communicate by explicitly sending messages over an interconnection network.
            *   **Advantages:** Highly scalable, no memory contention.
            *   **Disadvantages:** More complex programming model (message passing), communication latency.
            *   **Examples:** Clusters of computers, massively parallel processors (MPPs).
        *   **Distributed Shared Memory (DSM):** A hybrid approach that aims to combine the advantages of both shared and distributed memory. It provides a shared memory programming model on top of a distributed memory architecture through hardware or software mechanisms.

**Learning Outcome 2: Classify parallel computer architectures using Flynn's Taxonomy.**

*   Understand the four categories (SISD, SIMD, MISD, MIMD) and their distinguishing features.
*   Be able to identify the category of a given parallel system based on its description.

**Learning Outcome 3: Differentiate between shared memory and distributed memory architectures.**

*   **Shared Memory:**
    *   **Concept:** All processors access a common memory space.
    *   **Communication:** Implicit through shared variables.
    *   **Synchronization:** Required to avoid race conditions (e.g., using locks, semaphores).
    *   **Scalability:** Limited by memory bus bandwidth and contention.
*   **Distributed Memory:**
    *   **Concept:** Each processor has its own private memory.
    *   **Communication:** Explicit message passing (e.g., using MPI - Message Passing Interface).
    *   **Synchronization:** Achieved through the exchange of messages.
    *   **Scalability:** Generally more scalable than shared memory systems.

### 3. Architectures Based on Memory Organization

**Key Concepts & Definitions:**

This section elaborates on the MIMD sub-categories concerning memory.

*   **Shared Memory Architectures:**
    *   **Symmetric Multiprocessing (SMP):** All processors have equal access to all memory and I/O. Typically, a single, unified memory space.
        *   **Architecture:** Processors connected to a common memory bus.
        *   **Communication:** Via shared variables.
        *   **Programming:** Threads (e.g., POSIX Threads, OpenMP).
    *   **Non-Uniform Memory Access (NUMA):** Memory access time depends on the location of the memory relative to the processor. Processors have faster access to local memory than to remote memory.
        *   **Architecture:** Multiple SMP nodes connected via a high-speed interconnect. Each node has its own local memory and processors.
        *   **Communication:** Local access is fast; remote access is slower.
        *   **Programming:** Threading models need to be NUMA-aware for optimal performance.
        *   **Example:** Modern multi-socket servers.

*   **Distributed Memory Architectures:**
    *   **Clusters:** A collection of independent computers (nodes), typically commodity hardware, connected by a network. Each node has its own CPU, memory, and I/O.
        *   **Interconnection:** Ethernet, InfiniBand, Myrinet.
        *   **Communication:** Message passing (e.g., MPI).
        *   **Advantages:** High scalability, cost-effectiveness.
        *   **Disadvantages:** Higher communication latency compared to shared memory.
    *   **Massively Parallel Processors (MPPs):** Designed from the ground up for parallel processing, often with custom high-speed interconnects and specialized hardware.
        *   **Architecture:** Many processors, each with its own memory, connected by a proprietary, high-bandwidth, low-latency network.
        *   **Communication:** Message passing.
        *   **Examples:** Cray supercomputers.

*   **Hybrid Architectures:** Combine aspects of both shared and distributed memory.
    *   **Example:** A cluster of multi-core SMP nodes. Each node is a shared memory system, but communication between nodes is via message passing.

**Learning Outcome 4: Understand different memory organization schemes in parallel computers, including shared memory (SMP, NUMA) and distributed memory architectures.**

*   Explain the principles of SMP and NUMA.
*   Describe the characteristics of distributed memory systems like clusters.
*   Recognize hybrid architectures.

### 4. Interconnection Networks

**Key Concepts & Definitions:**

The interconnection network is crucial for communication between processors in parallel systems, especially in distributed memory and NUMA architectures.

*   **Topology:** The physical or logical arrangement of nodes and links in the network.
*   **Bandwidth:** The rate at which data can be transferred over a link.
*   **Latency:** The time delay for a message to travel from source to destination.
*   **Bisection Bandwidth:** The total bandwidth available when splitting the network into two equal halves. A higher bisection bandwidth indicates better communication performance for all-to-all communication patterns.

**Common Topologies:**

1.  **Bus:**
    *   **Description:** A single communication medium shared by all processors.
    *   **Characteristics:** Simple, inexpensive, but suffers from bandwidth limitations and contention as the number of processors increases.
    *   **Scalability:** Poor.
    *   **Example:** Early SMP systems.

2.  **Ring:**
    *   **Description:** Processors are connected in a closed loop. Data circulates around the ring.
    *   **Characteristics:** Simple to implement, but latency increases linearly with the number of processors.
    *   **Scalability:** Limited.

3.  **Mesh:**
    *   **Description:** Processors are arranged in a grid. Each processor is connected to its nearest neighbors (up, down, left, right).
    *   **Characteristics:** Good bisection bandwidth, moderate latency. Can be 2D, 3D, or higher dimensional.
    *   **Scalability:** Moderate.
    *   **Example:** Some supercomputers and FPGA designs.

4.  **Torus:**
    *   **Description:** A mesh where the end processors are connected back to the beginning, forming a toroidal surface.
    *   **Characteristics:** Improves bisection bandwidth compared to a simple mesh by connecting the edges.
    *   **Scalability:** Moderate to good.

5.  **Hypercube:**
    *   **Description:** A recursive structure where $2^n$ processors are arranged in an n-dimensional cube. Each processor's address differs from its neighbors by only one bit.
    *   **Characteristics:** High degree of connectivity, low diameter (average distance between nodes), good bisection bandwidth.
    *   **Scalability:** Good.
    *   **Example:** Connection Machine series.

6.  **Fat Tree:**
    *   **Description:** A tree-like structure where links in higher levels (closer to the root) have higher bandwidth to avoid bottlenecks.
    *   **Characteristics:** Can provide guaranteed bandwidth between any pair of nodes, but can be complex and expensive to implement.
    *   **Scalability:** Good.
    *   **Example:** Cray T3E, some high-performance clusters.

7.  **Crossbar Switch:**
    *   **Description:** A switch that connects each input to each output via a dedicated crosspoint.
    *   **Characteristics:** Provides non-blocking communication (any pair of nodes can communicate simultaneously without interfering), but can be very expensive and complex for a large number of processors.
    *   **Scalability:** Poor due to cost and complexity.

**Learning Outcome 5: Discuss various interconnection network topologies and their impact on parallel system performance.**

*   Understand the trade-offs between different topologies regarding latency, bandwidth, cost, and scalability.
*   Relate topology to communication patterns in parallel applications.

### 5. Parallel Programming Models and Paradigms

**Key Concepts & Definitions:**

These are frameworks and approaches for designing and writing parallel programs.

*   **Data Parallelism:** The same operation is performed on different parts of a dataset concurrently. Typically involves applying an operation to each element of an array or vector.
    *   **Example:** Adding two large vectors element by element.
    *   **Programming Models:** SIMD instructions, OpenMP directives for loop parallelization, CUDA for GPUs.

*   **Task Parallelism:** Different tasks or threads execute concurrently, often performing different operations.
    *   **Example:** A web server handling multiple client requests simultaneously, where each request is a separate task.
    *   **Programming Models:** Multithreading (POSIX Threads, OpenMP), Actor models.

*   **Message Passing:** Processors exchange data by explicitly sending and receiving messages. This is the dominant model for distributed memory systems.
    *   **Key Functions (MPI):** `MPI_Send`, `MPI_Recv`, `MPI_Bcast`, `MPI_Reduce`.
    *   **Characteristics:** Explicit control over communication, more complex programming.

*   **Shared Memory / Threads:** Multiple threads within a single process share the same memory space. Communication is implicit through shared variables.
    *   **Key Mechanisms:** Threads, mutexes, semaphores, condition variables.
    *   **Characteristics:** Easier programming for some problems, but requires careful synchronization to prevent race conditions.
    *   **Programming Models:** POSIX Threads (pthreads), OpenMP (directives-based).

*   **Dataflow:** Computation is driven by the availability of data.
    *   **Characteristics:** Implicit parallelism, often used in specific domains.

*   **Functional Parallelism:** Executing independent function calls in parallel.

**Learning Outcome 6: Describe common parallel programming models and paradigms, including data parallelism and task parallelism.**

*   Differentiate between data parallelism and task parallelism.
*   Understand the core concepts of message passing and shared memory programming.

### 6. Performance Metrics and Scalability

**Key Concepts & Definitions:**

*   **Speedup (revisited):** $S(p) = T_s / T_p$. The ideal speedup is linear, meaning $S(p) = p$.
*   **Gustafson's Law:** Amdahl's Law assumes a fixed problem size. Gustafson's Law considers that as more processors are added, the problem size often increases proportionally. It suggests that for large problems, the parallelizable portion often dominates, making speedup more favorable with more processors than predicted by Amdahl's Law.
    *   $S(p) = 1 / ((1 - \alpha) + \alpha / p)$
        *   $\alpha$: The fraction of the computation that can be parallelized.
        *   This formula is often presented as $T(p) = T(1) * (S + (1-S)p)$ where S is serial fraction. For Gustafson's Law, the focus is on problem scaling.

*   **Amdahl's Law:** Limits the speedup achievable by parallelization due to the serial (unparallelizable) portion of a program.
    *   $S(p) = 1 / ((1 - f) + f / p)$
        *   $f$: The fraction of the computation that can be parallelized.
        *   $(1-f)$: The fraction of the computation that is inherently sequential.
    *   **Implication:** Even with an infinite number of processors, the speedup is limited by the serial fraction.

*   **Scalability:** The ability of a parallel system to achieve good performance as the number of processors and/or problem size increases.
    *   **Strong Scaling:** How performance changes as the number of processors increases, *keeping the problem size fixed*. Ideal strong scaling would show a linear decrease in execution time.
    *   **Weak Scaling:** How performance changes as the number of processors increases, *while increasing the problem size proportionally*. Ideal weak scaling would show execution time remaining constant.

**Learning Outcome 7: Analyze the performance of parallel systems using metrics like speedup and efficiency, and discuss the concept of scalability (Amdahl's Law, Gustafson's Law).**

*   Calculate speedup and efficiency.
*   Explain the implications of Amdahl's Law for parallel performance.
*   Understand Gustafson's Law and its relationship to Amdahl's Law.
*   Differentiate between strong and weak scaling.

---

### Practice Questions

**Question 1:**
A sequential program takes 100 seconds to execute. When run on 4 processors, it completes in 30 seconds. Calculate the speedup and efficiency.

**Question 2:**
Classify the following systems according to Flynn's Taxonomy:
a) A GPU executing a shader program.
b) A dual-core processor running two independent applications.
c) A weather simulation running on a supercomputer where each processor calculates weather parameters for a different geographical region.
d) A simple calculator with a single CPU.

**Question 3:**
Consider a parallel program with the following characteristics:
*   Serial fraction (unparallelizable part): 10%
*   Parallelizable fraction: 90%

Calculate the theoretical maximum speedup on:
a) 2 processors
b) 8 processors
c) 100 processors

What is the bottleneck preventing infinite speedup?

**Question 4:**
Explain the fundamental difference between shared memory and distributed memory architectures in terms of communication and programming complexity. Provide an example scenario where each would be preferred.

**Question 5:**
Imagine a parallel system with processors arranged in a 2D mesh topology. What are the advantages and disadvantages of this topology compared to a bus topology for a large number of processors?

**Question 6:**
You are tasked with scaling a climate simulation.
*   If you keep the simulation domain size fixed and increase the number of processors, what type of scaling are you aiming for (strong or weak)? What are the likely challenges?
*   If you increase the number of processors and also increase the simulation domain size proportionally to maintain the same computational load per processor, what type of scaling are you aiming for? What is the desired outcome in terms of execution time?

---

### Answers to Practice Questions

**Answer 1:**
*   **Speedup (S):**
    $S(p) = T_s / T_p$
    $S(4) = 100 \text{ seconds} / 30 \text{ seconds} = 3.33$
*   **Efficiency (E):**
    $E(p) = S(p) / p$
    $E(4) = 3.33 / 4 = 0.8325$ or 83.25%

**Answer 2:**
a) **GPU executing a shader program:** **SIMD** (Single Instruction, Multiple Data) – The GPU cores execute the same shader instruction on multiple pixels/vertices simultaneously.
b) **A dual-core processor running two independent applications:** **MIMD** (Multiple Instruction, Multiple Data) – Each core is a processor that can execute different instruction streams on different data.
c) **A weather simulation running on a supercomputer where each processor calculates weather parameters for a different geographical region:** **MIMD** (specifically, distributed memory if regions are on different nodes, or shared memory if all on one node but assigned different tasks). Each processor is executing its own set of instructions (calculating for its region) on its own data.
d) **A simple calculator with a single CPU:** **SISD** (Single Instruction, Single Data).

**Answer 3:**
Using Amdahl's Law: $S(p) = 1 / ((1 - f) + f / p)$, where $f = 0.90$.

a) **2 processors:**
    $S(2) = 1 / ((1 - 0.90) + 0.90 / 2)$
    $S(2) = 1 / (0.10 + 0.45)$
    $S(2) = 1 / 0.55 = 1.82$ (approx.)

b) **8 processors:**
    $S(8) = 1 / ((1 - 0.90) + 0.90 / 8)$
    $S(8) = 1 / (0.10 + 0.1125)$
    $S(8) = 1 / 0.2125 = 4.71$ (approx.)

c) **100 processors:**
    $S(100) = 1 / ((1 - 0.90) + 0.90 / 100)$
    $S(100) = 1 / (0.10 + 0.009)$
    $S(100) = 1 / 0.109 = 9.17$ (approx.)

The bottleneck preventing infinite speedup is the **serial fraction (10% of the computation)**, which cannot be parallelized and must be executed sequentially on a single processor.

**Answer 4:**
*   **Shared Memory:**
    *   **Communication:** Implicit, via reads and writes to shared memory locations.
    *   **Programming Complexity:** Generally simpler for basic parallelization, but requires careful use of synchronization primitives (locks, semaphores) to avoid race conditions and ensure data consistency.
    *   **Example Scenario:** Applications with fine-grained parallelism where threads frequently need to access and update common data structures, like a multithreaded web server or a physics simulation where particles interact.

*   **Distributed Memory:**
    *   **Communication:** Explicit, by sending and receiving messages between processors (e.g., using MPI).
    *   **Programming Complexity:** More complex, as programmers must manage data distribution and explicitly dictate communication patterns. However, it offers more control and is generally more scalable.
    *   **Example Scenario:** Large-scale scientific simulations on clusters of computers where data is partitioned across nodes, such as weather forecasting or large-scale molecular dynamics simulations.

**Answer 5:**
**2D Mesh Topology:**
*   **Advantages:**
    *   **Good Bisection Bandwidth:** Dividing the mesh in half, the number of links crossing the boundary grows with the square root of the number of processors, leading to better communication for all-to-all patterns than a simple bus.
    *   **Scalability:** More scalable than a bus for a larger number of processors.
    *   **Regular Structure:** Easier to map algorithms that exploit locality.
*   **Disadvantages:**
    *   **Latency:** Message latency increases with the distance between processors in the grid.
    *   **Edge/Corner Problems:** Processors on the edges and corners have fewer neighbors, potentially impacting communication patterns.

**Bus Topology:**
*   **Advantages:**
    *   **Simplicity and Cost:** Easy to implement and relatively inexpensive for small systems.
*   **Disadvantages:**
    *   **Poor Scalability:** Bandwidth is shared and becomes a bottleneck quickly as more processors are added.
    *   **Contention:** High probability of communication collisions and delays.

For a large number of processors, the 2D mesh is significantly better than a bus due to its superior scalability and communication capacity.

**Answer 6:**
*   **Keeping simulation domain size fixed and increasing processors:** This is **Strong Scaling**.
    *   **Challenges:** As more processors are added, the work per processor decreases. Communication overhead and synchronization become increasingly significant relative to the computation, leading to diminishing returns and potential increases in execution time if overhead outweighs parallelism benefits. Amdahl's law becomes highly relevant here, as the serial fraction becomes dominant.

*   **Increasing processors and simulation domain size proportionally:** This is **Weak Scaling**.
    *   **Desired Outcome:** The execution time should ideally remain constant. The goal is to show that the system can handle larger problems effectively by adding more processing power without a significant increase in time. This is often used to test the scalability of the parallel system and its ability to grow with problem size.

---

**Important Points to Remember:**

*   Parallel computing is essential for tackling problems that are too large or complex for sequential machines.
*   Flynn's Taxonomy (SISD, SIMD, MISD, MIMD) provides a framework for understanding parallel architectures.
*   MIMD systems are prevalent, with key distinctions in memory organization: shared memory (SMP, NUMA) and distributed memory.
*   Interconnection network topology critically impacts communication performance (latency, bandwidth) and scalability.
*   Parallel programming models (message passing, threads) are used to write parallel applications.
*   Amdahl's Law and Gustafson's Law are crucial for understanding performance limitations and scaling behavior.
*   Speedup and efficiency are key metrics for evaluating parallel system performance.
*   Scalability (strong vs. weak) determines how well a parallel system performs as resources and problem size grow.
