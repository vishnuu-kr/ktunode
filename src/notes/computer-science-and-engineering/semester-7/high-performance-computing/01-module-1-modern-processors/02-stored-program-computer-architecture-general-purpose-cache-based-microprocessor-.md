---
title: "Stored-program computer architecture- General-purpose cache-based microprocessor architecture"
subject: "HIGH PERFORMANCE COMPUTING"
module: "Module 1: Modern processors"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c613"
status: "completed"
scrapedAt: "2026-05-20T17:06:56.720Z"
---
# HIGH PERFORMANCE COMPUTING
## Module 1: Modern Processors
## Topic: Stored-Program Computer Architecture - General-Purpose Cache-Based Microprocessor Architecture

---

### **Learning Outcomes:**

*   **Understand the fundamental principles of stored-program computer architecture.**
*   **Explain the role and necessity of cache memory in modern microprocessor design.**
*   **Describe the characteristics and operational aspects of general-purpose microprocessors.**
*   **Analyze the impact of cache-based architecture on performance.**
*   **Identify key components and their interactions within a cache-based microprocessor.**

---

### **1. Introduction to Stored-Program Computer Architecture**

The **stored-program computer architecture** is the foundational model for most modern computers. It dictates how a computer's instructions and data are stored and accessed.

**Key Concepts:**

*   **Von Neumann Architecture:** The most prevalent model, characterized by a single address space for both instructions and data. This means instructions and data share the same memory bus.
    *   **Components:**
        *   **Central Processing Unit (CPU):** Executes instructions.
        *   **Memory Unit:** Stores instructions and data.
        *   **Input/Output (I/O) Devices:** For interacting with the outside world.
        *   **Buses:** Communication pathways between components (data bus, address bus, control bus).
    *   **Operation Cycle (Fetch-Decode-Execute):**
        1.  **Fetch:** The CPU fetches an instruction from memory using the program counter (PC).
        2.  **Decode:** The CPU decodes the instruction to determine the operation to be performed.
        3.  **Execute:** The CPU performs the specified operation, which might involve fetching data from memory, performing calculations, or writing data back to memory.
    *   **The Von Neumann Bottleneck:** A limitation where the shared bus between the CPU and memory becomes a bottleneck, as the CPU must wait for data or instructions to be transferred, limiting overall performance. This is a critical motivation for advancements like caching.

*   **Harvard Architecture:** An alternative where instructions and data are stored in separate memory spaces and accessed via separate buses.
    *   **Advantages:** Higher bandwidth, as instruction fetching and data access can occur concurrently, reducing the Von Neumann bottleneck.
    *   **Disadvantages:** More complex hardware, often used in specialized processors like Digital Signal Processors (DSPs) and microcontrollers.

**Example:** Imagine a simple arithmetic instruction like `ADD R1, R2, R3` (add the contents of R2 and R3 and store the result in R1). In a Von Neumann architecture, the CPU would first fetch this instruction from memory, then fetch the values in R2 and R3 from memory (if they are not already in registers), perform the addition, and finally store the result back in R1.

---

### **2. General-Purpose Microprocessors**

A **general-purpose microprocessor** is a CPU designed to execute a wide variety of tasks and run diverse software applications, as opposed to specialized processors optimized for a single task.

**Characteristics:**

*   **Instruction Set Architecture (ISA):** Defines the set of instructions the processor can understand and execute. Common ISAs include x86 (Intel, AMD) and ARM.
*   **Complexity:** Modern general-purpose microprocessors are highly complex, containing billions of transistors.
*   **Features:** Support for multitasking, virtual memory, floating-point arithmetic, multimedia extensions, and other advanced features.
*   **Versatility:** Can run operating systems, productivity software, games, web browsers, and more.
*   **Clock Speed:** While an important metric, it's not the sole indicator of performance; other factors like instruction per clock (IPC) and architecture play a crucial role.

**Example:** Your Intel Core i7 or AMD Ryzen processor is a prime example of a general-purpose microprocessor found in your desktop or laptop. It's capable of running everything from your operating system to demanding video editing software.

---

### **3. The Role and Necessity of Cache Memory**

**Cache memory** is a small, fast memory located closer to the CPU than main memory (RAM). Its primary purpose is to store frequently accessed data and instructions, thereby reducing the time the CPU spends waiting for data from slower main memory.

**Why is Cache Necessary?**

*   **Speed Mismatch:** CPUs operate at much higher speeds than main memory. Without cache, the CPU would spend a significant amount of time idle, waiting for data transfers.
*   **Locality of Reference:** Programs exhibit a tendency to access data and instructions that are:
    *   **Temporal Locality:** If an item is accessed, it's likely to be accessed again soon.
    *   **Spatial Locality:** If an item is accessed, items with nearby memory addresses are likely to be accessed soon.
    Cache exploits these principles by storing recently used items and their neighbors.

**Key Concepts:**

*   **Cache Hit:** When the CPU requests data and it is found in the cache. This is a fast operation.
*   **Cache Miss:** When the CPU requests data and it is not found in the cache. The CPU then has to fetch the data from main memory, which is much slower.
*   **Cache Line (or Block):** The smallest unit of data that can be transferred between main memory and cache. When a cache miss occurs, an entire cache line is fetched.
*   **Cache Levels (Hierarchy):** Modern processors typically have multiple levels of cache, organized in a hierarchy:
    *   **L1 Cache:** Smallest, fastest, and closest to the CPU core. Often split into L1 instruction cache (L1I) and L1 data cache (L1D).
    *   **L2 Cache:** Larger and slower than L1, but still significantly faster than main memory. Can be per-core or shared between cores.
    *   **L3 Cache:** Largest and slowest of the on-chip caches, usually shared among all cores on the processor.
    *   **L4 Cache (Less Common):** Sometimes present as a last-resort on-chip cache or even off-chip in some architectures.

**Example:** Suppose a program repeatedly adds values from an array. Once the first element is accessed and brought into cache, subsequent accesses to that element (temporal locality) will be very fast cache hits. As the program iterates through the array, accessing consecutive elements (spatial locality), those elements will also be fetched into the cache as part of the same cache line, leading to more cache hits.

---

### **4. General-Purpose Cache-Based Microprocessor Architecture**

This architecture combines the principles of stored-program computing with the performance benefits of cache memory, making it the standard for modern CPUs.

**Key Components and Their Interactions:**

*   **CPU Core(s):**
    *   **Arithmetic Logic Unit (ALU):** Performs arithmetic and logical operations.
    *   **Control Unit:** Fetches, decodes, and executes instructions.
    *   **Registers:** Small, extremely fast storage locations within the CPU for holding data and instructions currently being processed (e.g., Program Counter, Accumulator, General-Purpose Registers).
    *   **Instruction Fetch Unit:** Responsible for fetching instructions from memory (or cache).
    *   **Data Load/Store Unit:** Handles requests to load data from or store data to memory (or cache).

*   **Cache Memory Hierarchy (L1, L2, L3):**
    *   **Address Translation:** The CPU generates virtual addresses, which are translated into physical addresses by the Memory Management Unit (MMU).
    *   **Cache Controller:** Manages the flow of data between the CPU and different cache levels, and between caches and main memory. It determines if a requested address is in the cache (a hit) or not (a miss).
    *   **Cache Coherence Protocols (e.g., MESI):** Essential in multi-core processors to ensure that all cores have a consistent view of data in memory, especially when multiple cores might be accessing and modifying the same data.

*   **Main Memory (RAM):** Larger, slower, but more affordable storage for programs and data.
*   **Memory Controller:** Manages the interaction between the CPU (and its caches) and main memory.
*   **Bus Interface Unit:** Manages communication between the CPU and external components via system buses.

**Operational Flow (Simplified):**

1.  **Instruction Fetch:**
    *   CPU's Program Counter (PC) points to the next instruction.
    *   CPU checks L1 instruction cache.
    *   **If L1 Hit:** Instruction is fetched quickly.
    *   **If L1 Miss:** CPU checks L2 cache.
    *   **If L2 Hit:** Instruction is fetched from L2, and a copy is placed in L1.
    *   **If L2 Miss:** CPU checks L3 cache.
    *   **If L3 Hit:** Instruction is fetched from L3, and copies are placed in L2 and L1.
    *   **If L3 Miss:** Instruction is fetched from main memory, and copies are placed in L3, L2, and L1.

2.  **Instruction Decode & Execute:**
    *   Control Unit decodes the fetched instruction.
    *   If the instruction requires data:
        *   CPU checks L1 data cache for the data.
        *   **Cache Hit:** Data is retrieved quickly.
        *   **Cache Miss:** Follows a similar hierarchy check as instruction fetch, eventually retrieving from main memory and bringing into caches.
    *   ALU performs the operation.
    *   If the instruction writes data back:
        *   The data is written to the appropriate cache level (Write-Through or Write-Back policies are used here).

**Write Policies:**

*   **Write-Through:** Data is written to both the cache and main memory simultaneously. Ensures consistency but can be slower due to writes to main memory.
*   **Write-Back:** Data is written only to the cache. A "dirty bit" is set for the cache line. When the cache line is evicted, the modified data is written back to main memory. This is generally faster as it reduces memory traffic.

---

### **5. Impact of Cache-Based Architecture on Performance**

Cache memory is a cornerstone of modern processor performance. Its presence significantly amplifies the capabilities of general-purpose microprocessors.

**Benefits:**

*   **Reduced Latency:** Significantly lowers the average time to access data and instructions, leading to faster program execution.
*   **Increased Throughput:** By keeping the CPU busy more often, caches increase the number of instructions the processor can execute per unit of time.
*   **Mitigation of Von Neumann Bottleneck:** While not eliminating it entirely, caches act as a buffer, reducing the direct reliance on the slower main memory bus for every access.
*   **Enables Higher Clock Speeds:** Processor designers can target higher clock frequencies knowing that the cache system will help hide memory latency.

**Performance Metrics Related to Cache:**

*   **Cache Hit Rate:** The percentage of memory accesses that result in a cache hit. A higher hit rate indicates better cache performance.
    *   `Hit Rate = Number of Hits / (Number of Hits + Number of Misses)`
*   **Miss Penalty:** The additional time required to fetch data from main memory after a cache miss.
*   **Average Memory Access Time (AMAT):** The average time taken for a memory access, considering both hits and misses.
    *   `AMAT = (Cache Hit Time) + (Miss Rate * Miss Penalty)`

**Example:** A program with a 95% L1 cache hit rate and a 70% L2 cache hit rate (assuming L1 miss leads to L2 access) will perform dramatically better than one with significantly lower hit rates, even if both processors have the same clock speed.

---

### **6. Important Points to Remember**

*   **Stored-program architecture (Von Neumann) is the foundation.**
*   **Cache memory is crucial for bridging the speed gap between CPU and main memory.**
*   **Locality of reference (temporal and spatial) is the principle cache exploits.**
*   **Cache hierarchy (L1, L2, L3) provides escalating levels of speed and capacity.**
*   **General-purpose microprocessors are versatile and can run diverse software.**
*   **Cache hits are fast; cache misses are slow and incur a penalty.**
*   **Hit rate and miss penalty are key metrics for cache performance.**
*   **Cache coherence protocols are essential for multi-core processors.**
*   **Cache significantly boosts processor performance by reducing latency and increasing throughput.**

---

### **Practice Questions:**

1.  **What is the primary advantage of the Harvard architecture over the Von Neumann architecture?**
2.  **Explain the concept of the "Von Neumann bottleneck" and how cache memory helps to alleviate it.**
3.  **Define "temporal locality" and "spatial locality" and provide an example of each in the context of a computer program.**
4.  **Describe the typical cache hierarchy in a modern microprocessor (L1, L2, L3) and the trade-offs between them.**
5.  **If a CPU core experiences 1000 memory requests, and 950 of them are satisfied by the L1 cache (average L1 hit time = 1 ns), while the remaining 50 requests miss L1 but are found in L2 (average L2 hit time = 10 ns), and the miss penalty from L2 to main memory is 100 ns, calculate:**
    *   a) The L1 cache hit rate.
    *   b) The miss rate for L1.
    *   c) The Average Memory Access Time (AMAT) for the L1 cache in this scenario (assuming L2 access is only for L1 misses).

---

### **Answers to Practice Questions:**

1.  **Advantage of Harvard over Von Neumann:** The Harvard architecture allows for simultaneous fetching of instructions and data because they have separate memory spaces and buses, thereby providing higher bandwidth and reducing the impact of the Von Neumann bottleneck.
2.  **Von Neumann Bottleneck:** The Von Neumann bottleneck refers to the limitation in throughput caused by the shared bus between the CPU and main memory in a Von Neumann architecture, as the CPU must wait for data or instructions to be transferred. Cache memory helps by storing frequently accessed data and instructions closer to the CPU, reducing the number of accesses to the slower main memory bus.
3.  **Temporal Locality:** **Definition:** The tendency for a program to access the same memory location multiple times within a short period. **Example:** A loop variable that is incremented and used repeatedly in each iteration. The loop counter's memory location will be accessed many times.
    **Spatial Locality:** **Definition:** The tendency for a program to access memory locations that are physically close to each other. **Example:** Iterating through an array using a `for` loop. When one element is accessed, the next element in contiguous memory is likely to be accessed soon.
4.  **Cache Hierarchy:**
    *   **L1 Cache:** Smallest, fastest, closest to the CPU core. Often split into instruction and data caches. Low latency, low capacity.
    *   **L2 Cache:** Larger and slower than L1, but still faster than main memory. May be per-core or shared. Moderate latency, moderate capacity.
    *   **L3 Cache:** Largest and slowest of the on-chip caches, typically shared by all cores. Higher latency, high capacity.
    **Trade-offs:** There's a direct trade-off between speed, size, and cost. Faster caches are more expensive and smaller.
5.  **Calculations:**
    *   a) **L1 Cache Hit Rate:**
        *   Number of Hits = 950
        *   Total Requests = 1000
        *   L1 Hit Rate = 950 / 1000 = **0.95 or 95%**
    *   b) **Miss Rate for L1:**
        *   Number of Misses = 1000 - 950 = 50
        *   L1 Miss Rate = 50 / 1000 = **0.05 or 5%**
    *   c) **Average Memory Access Time (AMAT):**
        *   We need to consider the access times for both L1 hits and L1 misses (which go to L2).
        *   For the 950 L1 hits: 950 requests * 1 ns/request = 950 ns
        *   For the 50 L1 misses that hit L2: 50 requests * 10 ns/request = 500 ns
        *   Total time = 950 ns + 500 ns = 1450 ns
        *   AMAT = Total time / Total requests = 1450 ns / 1000 requests = **1.45 ns**

    *   *Alternatively, using the formula for AMAT considering only two levels (L1 and L2):*
        *   `AMAT = (L1 Hit Time) + (L1 Miss Rate * (L2 Hit Time))`
        *   `AMAT = 1 ns + (0.05 * 10 ns)`
        *   `AMAT = 1 ns + 0.5 ns = 1.5 ns`
        *   *Note: The slight difference (1.45 ns vs 1.5 ns) is due to how the total time is calculated. The first method is more precise as it sums the time for all individual accesses. The formula method is a good approximation when you have miss rates for each level.*

---
