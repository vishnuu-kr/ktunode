---
title: "Memory system: Types of memory( Concepts only), Virtual memory , Content addressable memory, cache memories - mapping functions."
subject: "COMPUTER ORGANIZATION"
module: "Module 4: Memory system: Types of memory( Concepts only), Virtual memory , Content addressable memory, cache memories "
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35f5d"
status: "completed"
scrapedAt: "2026-05-23T16:15:02.564Z"
---
# Computer Organization - Module 4: Memory System

## Introduction

The memory system is a crucial component of any digital computer, responsible for storing and retrieving data and instructions for the CPU. This module delves into the fundamental concepts of memory systems, exploring different types of memory, the sophisticated concept of virtual memory, the specialized nature of Content Addressable Memory (CAM), and the hierarchical organization involving cache memories. We will also examine the mapping functions used to manage data flow between different memory levels.

**Reference Textbooks:**
*   Hamacher C., Z. Vranesic and S. Zaky, *Computer Organization* (McGraw Hill, 5/e, 2011) - Chapters 7, 8
*   Mano M. M, *Digital Logic & Computer Design* (PHI, 2004) - Chapter 10
*   Mano M. M, *Computer System Architecture* (PHI, 2007) - Chapters 8, 9

**Reference Books:**
*   Patterson D.A. and J. L. Hennessy, *Computer Organization and Design* (Morgan Kaufmann Publishers, 5/e, 2013) - Chapters 5, 6
*   William Stallings, *Computer Organization and Architecture: Designing for Performance* (Pearson, 9/e, 2013) - Chapters 11, 12
*   Chaudhuri P, *Computer Organization and Design* (Prentice Hall, 2/e, 2008) - Chapters 6, 7

---

## 1. Types of Memory (Concepts Only)

Understanding the various types of memory is essential for appreciating the trade-offs between speed, cost, and capacity in a computer system. Memory technologies are broadly classified based on their volatility, access method, and physical implementation.

**1.1. Primary Memory (Main Memory)**

*   **Definition:** Primary memory, also known as main memory or Random Access Memory (RAM), is directly accessible by the CPU. It holds the currently executing programs and their data.
*   **Characteristics:**
    *   **Fast:** Significantly faster than secondary storage.
    *   **Volatile:** Loses its contents when power is turned off (though some types, like DRAM, have refresh requirements).
    *   **Smaller Capacity:** Compared to secondary storage, it has a limited capacity.
    *   **Expensive per bit:** High cost per unit of storage.
*   **Types of Primary Memory:**
    *   **Random Access Memory (RAM):**
        *   **Definition:** Memory where any location can be accessed in the same amount of time, regardless of its physical position.
        *   **Static RAM (SRAM):**
            *   **Concept:** Uses flip-flops (typically 6 transistors per bit) to store each bit.
            *   **Characteristics:** Faster than DRAM, does not require periodic refreshing, but is more expensive and less dense (lower storage capacity per chip).
            *   **Usage:** Primarily used for CPU caches.
        *   **Dynamic RAM (DRAM):**
            *   **Concept:** Uses capacitors to store each bit. A capacitor can hold a charge (representing a '1') or no charge (representing a '0').
            *   **Characteristics:** Slower than SRAM, requires periodic refreshing to prevent charge leakage, but is less expensive and more dense.
            *   **Usage:** Primarily used for the main system memory.
    *   **Read-Only Memory (ROM):**
        *   **Definition:** Memory that can only be read from; its contents are permanent or semi-permanent.
        *   **Characteristics:** Non-volatile, data is written during manufacturing or by special processes.
        *   **Types of ROM:**
            *   **Mask ROM:** Contents programmed during manufacturing. Cheapest for mass production but inflexible.
            *   **PROM (Programmable ROM):** Can be programmed once by the user using a PROM programmer.
            *   **EPROM (Erasable Programmable ROM):** Can be erased (typically using ultraviolet light) and reprogrammed.
            *   **EEPROM (Electrically Erasable Programmable ROM):** Can be erased and reprogrammed electrically, byte by byte.
            *   **Flash Memory:** A type of EEPROM that can be erased and reprogrammed in blocks, making it faster for writing. Used in SSDs, USB drives, etc.
        *   **Usage:** Storing firmware, BIOS (Basic Input/Output System), boot loaders.

**1.2. Secondary Memory (Auxiliary Memory)**

*   **Definition:** Secondary memory stores data and programs that are not actively in use by the CPU. It provides long-term storage.
*   **Characteristics:**
    *   **Slow:** Significantly slower access times compared to primary memory.
    *   **Non-Volatile:** Retains its contents even when power is turned off.
    *   **Larger Capacity:** Provides much larger storage capacity than primary memory.
    *   **Cheaper per bit:** Lower cost per unit of storage.
*   **Examples:**
    *   **Magnetic Disks:** Hard Disk Drives (HDDs), Floppy Disks (older technology). Store data in magnetic form on rotating platters.
    *   **Solid State Drives (SSDs):** Use flash memory to store data electronically. Faster than HDDs.
    *   **Optical Disks:** CDs, DVDs, Blu-ray discs. Store data by creating physical pits and lands on a disc surface.
    *   **Magnetic Tapes:** Sequential access storage, often used for backups and archiving.

**1.3. Cache Memory**

*   **Definition:** A small, high-speed memory that stores frequently used data and instructions from the main memory. It acts as an intermediate buffer between the CPU and the main memory.
*   **Purpose:** To reduce the average access time by exploiting the principle of *locality of reference*.
*   **Characteristics:**
    *   **Very Fast:** Uses SRAM technology.
    *   **Expensive:** Higher cost per bit than main memory.
    *   **Small Capacity:** Much smaller than main memory.
*   **Levels of Cache:** Typically organized in a hierarchy:
    *   **L1 Cache:** Smallest and fastest cache, usually integrated directly into the CPU core. Stores instructions and data for the currently executing thread.
    *   **L2 Cache:** Larger and slightly slower than L1. Can be per core or shared among cores.
    *   **L3 Cache:** Largest and slowest of the CPU caches, often shared by all cores on a processor.

**Key Point:** The memory hierarchy (CPU Registers -> Cache -> Main Memory -> Secondary Storage) is designed to bridge the speed gap between the fast CPU and slower storage devices, balancing performance and cost.

---

## 2. Virtual Memory

*   **Definition:** Virtual memory is a memory management technique that allows the execution of processes that may not be completely resident in physical memory. It provides an illusion of a much larger main memory than what is physically available.
*   **Purpose:**
    *   **Larger Address Space:** Allows programs to use a virtual address space larger than the physical RAM.
    *   **Process Isolation:** Each process gets its own private virtual address space, preventing interference with other processes.
    *   **Efficient Memory Usage:** Only the currently needed parts of a program are loaded into physical memory.
    *   **Multiprogramming:** Enables more programs to reside in memory concurrently.
*   **Key Concepts:**
    *   **Virtual Address Space:** The address space seen by a program. It's a logical view of memory.
    *   **Physical Address Space:** The actual addresses in the main memory.
    *   **Paging:** The most common implementation of virtual memory. The virtual address space is divided into fixed-size blocks called **pages**. The physical memory is divided into blocks of the same size called **frames**.
    *   **Page Table:** A data structure maintained by the operating system for each process. It maps virtual page numbers to physical frame numbers.
        *   Each entry in the page table typically contains:
            *   **Frame Number:** The physical frame where the page is located.
            *   **Present Bit (Valid Bit):** Indicates whether the page is currently in physical memory.
            *   **Dirty Bit:** Indicates if the page has been modified since it was loaded into memory.
            *   **Protection Bits:** Control access rights (read, write, execute).
    *   **Page Fault:** An event that occurs when a program tries to access a page that is not currently in physical memory. The operating system handles the page fault by:
        1.  Finding a free frame in physical memory.
        2.  Loading the required page from secondary storage (e.g., disk) into the allocated frame.
        3.  Updating the page table to reflect the new location of the page.
        4.  Restarting the instruction that caused the page fault.
    *   **Demand Paging:** A strategy where pages are loaded into memory only when they are actually needed (i.e., when a page fault occurs).
    *   **Page Replacement Algorithms:** When a page fault occurs and there are no free frames, a page already in memory must be swapped out to make space. Algorithms like FIFO, LRU, Optimal are used to decide which page to replace.
    *   **Translation Lookaside Buffer (TLB):** A cache for page table entries. It stores recently used virtual-to-physical address translations to speed up the lookup process. A TLB hit means the translation is found in the TLB, avoiding a full page table walk.

**Example (Paging):**
Suppose a program has a virtual address space of 16 KB, and physical memory has 8 KB. Both are divided into pages/frames of 1 KB.
*   Virtual Address Space: 16 pages (0 to 15)
*   Physical Memory: 8 frames (0 to 7)

The OS maintains a page table for this process:

| Virtual Page # | Frame # | Present Bit | Dirty Bit |
| :------------- | :------ | :---------- | :-------- |
| 0              | 3       | 1           | 0         |
| 1              | 6       | 1           | 1         |
| 2              | -       | 0           | 0         |  *(Page 2 is not in memory)*
| 3              | 5       | 1           | 0         |
| ...            | ...     | ...         | ...       |

If the CPU tries to access an address in Virtual Page 2, a page fault occurs. The OS will:
1.  Find a free frame (let's say Frame 2).
2.  Load Virtual Page 2 from disk into Frame 2.
3.  Update the page table: `Virtual Page 2 -> Frame 2`, `Present Bit = 1`.
4.  The program can now access the data.

**Reference Books Emphasis:**
*   Hamacher, Vranesic, Zaky: Chapter 8 (Virtual Memory) provides a detailed explanation of paging, page tables, and address translation.
*   Patterson & Hennessy: Chapter 5 discusses memory hierarchy, including TLBs and the impact of virtual memory on performance.

---

## 3. Content Addressable Memory (CAM)

*   **Definition:** Content Addressable Memory (CAM) is a type of memory that is accessed based on its *content* rather than its *address*. When a search key is presented to the CAM, it searches its entire memory simultaneously to find entries that match the key.
*   **How it Works:**
    *   Each entry in a CAM has a storage element (e.g., flip-flop) and a comparator.
    *   A search word (key) is broadcast to all entries in parallel.
    *   Each entry compares the search word with its stored data.
    *   Matching entries activate an "output line" or "hit signal".
*   **Types of CAM:**
    *   **Binary CAM (BCAM):** Each bit in the memory can store either 0 or 1. The comparison is a simple bitwise equality check.
    *   **Ternary CAM (TCAM):** Each bit can store 0, 1, or a "don't care" (X) state. This allows for more flexible searches using wildcards.
*   **Advantages:**
    *   **Very Fast Searches:** Parallel search provides extremely quick lookups, independent of the memory size.
    *   **Efficient for Pattern Matching:** Ideal for applications requiring rapid searches and lookups.
*   **Disadvantages:**
    *   **Expensive:** Significantly more complex and costly to manufacture than RAM due to the integrated comparators.
    *   **Higher Power Consumption:** Parallel comparison circuitry consumes more power.
    *   **Lower Density:** The circuitry for comparison reduces the number of bits that can be stored on a chip.
*   **Applications:**
    *   **Network Routers/Switches:** Forwarding tables (MAC address tables, routing tables) lookup.
    *   **Database Acceleration:** Speeding up data retrieval.
    *   **Pattern Recognition:** Searching for specific patterns in data.
    *   **Translation Lookaside Buffers (TLBs):** Often implemented using CAM for fast virtual-to-physical address translation.

**Example:**
Consider a simple BCAM storing IP addresses.
Search Key: `192.168.1.5`

| Stored IP Address   | Match? |
| :------------------ | :----- |
| `192.168.1.5`       | Yes    |
| `10.0.0.1`          | No     |
| `192.168.1.10`      | No     |
| `192.168.1.5`       | Yes    |

The CAM would signal a "hit" for the entries that match `192.168.1.5`.

**Reference Books Emphasis:**
*   Hamacher, Vranesic, Zaky: Chapter 7.1.6 (Associative Memory) covers the concept of CAM.
*   Stallings: Chapter 12 discusses memory technologies, including associative memories.

---

## 4. Cache Memories and Mapping Functions

Cache memory is crucial for bridging the speed gap between the CPU and main memory. It stores frequently accessed data in a small, fast memory located closer to the CPU. The effectiveness of a cache depends on its hit rate, which is influenced by how data from main memory is placed into the cache. This is managed by *mapping functions*.

**4.1. Principles of Cache Operation**

*   **Locality of Reference:**
    *   **Temporal Locality:** If a memory location is accessed, it is likely to be accessed again soon.
    *   **Spatial Locality:** If a memory location is accessed, memory locations nearby are likely to be accessed soon.
*   **Cache Blocks (Lines):** Main memory is divided into blocks, and the cache is organized into lines, each capable of holding one block. When a memory block is fetched from main memory into the cache, it occupies a specific line.
*   **Hit:** When the CPU requests data, it first checks the cache. If the data is found in the cache, it's a *cache hit*. The data is retrieved quickly.
*   **Miss:** If the data is not found in the cache, it's a *cache miss*. The required block is fetched from main memory, and usually, a copy is placed in the cache (possibly replacing an existing block). This fetch from main memory is slower.

**4.2. Cache Mapping Functions**

Mapping functions determine which cache line can store a particular block from main memory.

*   **4.2.1. Direct Mapped Cache**
    *   **Concept:** Each block from main memory can only be mapped to *one specific line* in the cache.
    *   **Structure:** The cache has $N$ lines. Main memory is divided into $N$ blocks. Block $j$ of main memory can only reside in line $j \pmod N$ of the cache.
    *   **Address Decomposition:** A main memory address is typically divided into three fields:
        *   **Tag:** Identifies which block from main memory is currently in this cache line.
        *   **Index (or Line Number):** Determines which line in the cache the block maps to.
        *   **Offset:** Specifies the location of the desired word within the block.
    *   **Mapping Example:** If main memory has 4096 blocks ($2^{12}$) and the cache has 64 lines ($2^6$), then block $j$ maps to line $j \pmod{64}$.
        *   The index field would have 6 bits ($log_2 64$).
        *   The tag field would be $12 - 6 = 6$ bits.
    *   **Pros:** Simple to implement, low cost.
    *   **Cons:** High conflict misses. If two frequently accessed blocks map to the same cache line, they will constantly compete, leading to a low hit rate.
    *   **Hardware Implementation:** Requires a simpler tag matching mechanism.

    ```
    Main Memory Address: |  Tag  | Index | Offset |
                        |-------|-------|--------|
                        | (k-s) |  s    |   p    |
    ```
    Where:
    *   $k$ is the number of bits in the main memory address.
    *   $s$ is the number of bits for the cache index (determines the number of cache lines, $2^s$).
    *   $p$ is the number of bits for the offset within a block (determines the block size, $2^p$).

*   **4.2.2. Fully Associative Cache**
    *   **Concept:** A block from main memory can be placed in *any* available line in the cache. The cache controller searches all lines in parallel to find a match.
    *   **Structure:** No fixed mapping. Any block can go into any line.
    *   **Address Decomposition:** A main memory address is divided into two fields:
        *   **Tag:** Identifies which block is stored in a particular cache line.
        *   **Offset:** Specifies the location of the desired word within the block.
    *   **Mapping Example:** If the cache has 64 lines, any of the 4096 blocks from main memory can be placed in any of the 64 lines.
        *   The tag field would be $12$ bits (assuming a 12-bit address space for simplicity of illustration without considering block size for now).
    *   **Pros:** Eliminates conflict misses, leading to potentially higher hit rates. Maximum flexibility in block placement.
    *   **Cons:** Most complex and expensive to implement due to the need for parallel comparison circuitry (similar to CAM). Slower hit detection compared to direct mapped due to the complexity of searching all lines.
    *   **Hardware Implementation:** Essentially uses CAM principles for tag matching.

    ```
    Main Memory Address: |   Tag   | Offset |
                        |---------|--------|
                        |    k    |   p    |
    ```
    *   $k$ is the number of bits in the main memory address.
    *   $p$ is the number of bits for the offset.

*   **4.2.3. Set-Associative Cache**
    *   **Concept:** A compromise between direct-mapped and fully associative caches. The cache is divided into sets, and each set contains a fixed number of lines (ways). A block from main memory can be mapped to any line within a *specific set*.
    *   **Structure:** Cache lines are grouped into sets. If a cache has $N$ lines and $S$ sets, then each set has $N/S$ lines (ways). Block $j$ of main memory maps to set $j \pmod S$. Within that set, the block can be placed in any of the $N/S$ lines.
    *   **Address Decomposition:** A main memory address is divided into three fields:
        *   **Tag:** Identifies which block from main memory is currently in this cache line.
        *   **Set Index:** Determines which set in the cache the block maps to.
        *   **Offset:** Specifies the location of the desired word within the block.
    *   **Mapping Example:** A 64-line cache divided into 8 sets (S=8) would have 8 lines per set (8-way set associative). Main memory block $j$ maps to set $j \pmod 8$. Within that set, it can go into any of the 8 lines.
        *   The set index field would have 3 bits ($log_2 8$).
        *   The tag field would be $12 - 3 = 9$ bits.
    *   **Pros:** Reduces conflict misses compared to direct-mapped caches. More flexible than direct-mapped but less complex than fully associative.
    *   **Cons:** More complex and expensive than direct-mapped. Hit rate is better than direct-mapped but generally lower than fully associative.
    *   **Hardware Implementation:** Requires comparators for each way within a set, and multiplexers to select the desired line.
    *   **Common Types:** 2-way, 4-way, 8-way set-associative caches.

    ```
    Main Memory Address: |  Tag  | Set Index | Offset |
                        |-------|-----------|--------|
                        | (k-p-s')|   s'      |   p    |
    ```
    Where:
    *   $k$ is the number of bits in the main memory address.
    *   $s'$ is the number of bits for the set index (determines the number of sets, $2^{s'}$).
    *   $p$ is the number of bits for the offset within a block (determines the block size, $2^p$).

**Important Point:** The choice of mapping function is a critical design decision, trading off complexity and cost against cache performance (hit rate). Set-associative caches offer a good balance.

**4.3. Cache Replacement Policies**

When a cache miss occurs and the target set/line is full, a block must be replaced. Common replacement policies include:

*   **Least Recently Used (LRU):** Replaces the block that has not been accessed for the longest time. Optimal in theory but complex to implement fully for higher associativity.
*   **First-In, First-Out (FIFO):** Replaces the block that has been in the cache the longest. Simple to implement but not very effective.
*   **Random:** Replaces a randomly selected block. Simple and can perform surprisingly well.

**4.4. Write Policies**

When the CPU writes data, the cache and main memory must be kept consistent.

*   **Write-Through:** Every write operation to the cache is immediately written to main memory as well.
    *   **Pros:** Simple, maintains consistency.
    *   **Cons:** Can generate a lot of write traffic to main memory, potentially slowing down operations if not handled by write buffers.
*   **Write-Back (or Write-Deferred):** Writes are initially made only to the cache. A "dirty bit" is set for the modified cache block. When the block is replaced, if the dirty bit is set, it is written back to main memory.
    *   **Pros:** Reduces write traffic to main memory, improving performance.
    *   **Cons:** More complex to implement, requires managing dirty bits.

**Reference Books Emphasis:**
*   Hamacher, Vranesic, Zaky: Chapter 7 provides an in-depth analysis of cache memories, including detailed explanations of mapping functions, replacement policies, and write policies.
*   Mano (Digital Logic & Computer Design): Chapter 10 covers cache memory organizations and performance.
*   Patterson & Hennessy: Chapter 5 extensively discusses memory hierarchies, cache design principles, mapping, and performance metrics.

---

## 5. Learning Outcome Alignment and Course Outcomes

*   **CO1: Identify the relevance of functional units, memory locations and addressing modes in a digital computer.**
    *   This module directly addresses memory locations by discussing address decomposition in mapping functions and virtual addressing. Understanding memory types and their roles is fundamental to functional units. Addressing modes are implicitly linked to how data is fetched from memory.
*   **CO2: Illustrate the register transfer logic, Processor logic design.**
    *   While not directly about RTL, the concepts of fetching instructions/data from memory, cache hits/misses, and virtual memory translations are the underpinnings of processor logic design. The efficient transfer of data between memory levels is a core concern.
*   **CO3: Explain the implementation aspects of arithmetic algorithms and pipelining concept in a digital computer.**
    *   The speed of memory access significantly impacts pipeline performance. Cache memories (and their mapping functions) are crucial for reducing memory access latency, thereby enabling faster instruction execution and mitigating pipeline stalls. Virtual memory page faults can cause significant pipeline stalls.
*   **CO4: Demonstrate the control signals required for the execution of a given instruction.**
    *   Control signals are generated to manage memory read/write operations, cache lookups, and virtual memory address translations (via MMU). Understanding how memory is organized helps in designing these control signals.
*   **CO5: Illustrate the organization of different types of memories and I/O organization.**
    *   This is the primary focus of this module. It covers various memory types (primary, secondary, cache, ROM, RAM), virtual memory organization, and CAM. The mapping functions are key to illustrating cache organization.

---

## 6. Practice Questions and Exercises

**Multiple Choice Questions:**

1.  Which of the following memory types is the fastest but least dense?
    a) DRAM
    b) SRAM
    c) Hard Disk Drive
    d) NAND Flash Memory

2.  In a virtual memory system using paging, what data structure is used to map virtual pages to physical frames?
    a) TLB
    b) Page Table
    c) Symbol Table
    d) Directory Table

3.  Which mapping function in cache design is most prone to conflict misses?
    a) Fully Associative
    b) Direct Mapped
    c) 4-way Set Associative
    d) 8-way Set Associative

4.  Content Addressable Memory (CAM) is accessed based on:
    a) Memory Address
    b) Data Content
    c) Data Value
    d) Data Index

5.  The primary purpose of a cache memory is to:
    a) Increase the capacity of main memory
    b) Reduce the average memory access time
    c) Provide non-volatile storage
    d) Improve the speed of secondary storage

**Short Answer Questions:**

1.  Explain the concept of "locality of reference" and why it is important for cache memory performance.
2.  Describe the difference between SRAM and DRAM.
3.  What is a page fault, and how is it handled by the operating system?
4.  What is the main advantage and disadvantage of using Content Addressable Memory (CAM)?
5.  Briefly explain the three main types of cache mapping functions.

**Problem Solving:**

1.  A computer system has a main memory address space of 16 bits. The cache is configured as a 4-way set-associative cache with 128 sets and a block size of 32 bytes.
    *   Calculate the number of bits required for the Tag, Set Index, and Offset.
    *   Determine the total size of the cache in bytes.

2.  Consider a direct-mapped cache with 256 lines and a block size of 64 bytes. Main memory has 2^16 bytes.
    *   How many blocks are there in main memory?
    *   How many lines are there in the cache?
    *   How many bits are in the main memory address?
    *   How many bits are needed for the tag, index, and offset?
    *   If main memory block 100 and main memory block 356 are accessed frequently, what will happen in the cache?

---

## 7. Answers to Practice Questions

**Multiple Choice Answers:**

1.  **b) SRAM** (SRAM is faster and less dense than DRAM, both of which are orders of magnitude faster and less dense than secondary storage).
2.  **b) Page Table** (The TLB is a cache for page table entries).
3.  **b) Direct Mapped** (Direct mapping forces blocks into specific lines, leading to high conflict potential).
4.  **b) Data Content**
5.  **b) Reduce the average memory access time**

**Short Answer Answers:**

1.  **Locality of Reference:**
    *   **Temporal Locality:** If a memory location is accessed, it is likely to be accessed again soon.
    *   **Spatial Locality:** If a memory location is accessed, memory locations nearby are likely to be accessed soon.
    *   **Importance for Cache:** Caches exploit these principles by bringing recently used data (temporal) and data blocks (spatial) into the fast cache memory, anticipating future requests. This significantly reduces the number of slow main memory accesses.

2.  **SRAM vs. DRAM:**
    *   **SRAM (Static RAM):** Uses flip-flops (typically 6 transistors per bit). Faster, doesn't need refreshing, but is more expensive and less dense. Used for CPU caches.
    *   **DRAM (Dynamic RAM):** Uses capacitors (1 transistor + 1 capacitor per bit). Slower, requires periodic refreshing, but is cheaper and denser. Used for main system memory.

3.  **Page Fault Handling:** A page fault occurs when a program tries to access a virtual page that is not currently in physical memory. The OS handles it by:
    *   Interrupting the program.
    *   Finding a free frame in physical memory.
    *   Loading the required page from secondary storage (disk) into the frame.
    *   Updating the page table to reflect the page's new location.
    *   Resuming the interrupted program.

4.  **CAM:**
    *   **Advantage:** Extremely fast parallel search based on content, ideal for pattern matching and lookups.
    *   **Disadvantage:** High cost, complexity, and power consumption due to integrated comparators.

5.  **Cache Mapping Functions:**
    *   **Direct Mapped:** Each main memory block maps to exactly one cache line. Simple, but prone to conflict misses.
    *   **Fully Associative:** A main memory block can be placed in any cache line. Flexible, avoids conflicts, but complex and requires CAM-like hardware.
    *   **Set-Associative:** Cache is divided into sets, and a block maps to any line within a specific set. A compromise offering reduced conflicts with moderate complexity.

**Problem Solving Answers:**

1.  **4-way Set-Associative Cache:**
    *   **Block Size:** 32 bytes. Number of bytes = $2^5$, so Offset bits = 5.
    *   **Number of Sets:** 128 sets. Number of sets = $2^7$, so Set Index bits = 7.
    *   **Cache Lines:** 4 ways * 128 sets = 512 lines.
    *   **Tag Bits:** Total address bits - Set Index bits - Offset bits. Assuming a common address size like 32 bits (though not explicitly given for main memory, it's a typical architecture assumption). If we assume a 16-bit address space as stated for main memory:
        *   Tag bits = 16 (Address) - 7 (Set Index) - 5 (Offset) = 4 bits.
        *   (If we assume a 32-bit address space, Tag bits = 32 - 7 - 5 = 20 bits)
    *   **Total Cache Size:** Number of lines * Block Size = 512 lines * 32 bytes/line = 16,384 bytes = 16 KB.

2.  **Direct-Mapped Cache:**
    *   **Main Memory Size:** $2^{16}$ bytes.
    *   **Block Size:** 64 bytes = $2^6$ bytes.
    *   **Number of Blocks in Main Memory:** Total Memory Size / Block Size = $2^{16} / 2^6 = 2^{10} = 1024$ blocks.
    *   **Number of Lines in Cache:** 256 lines = $2^8$ lines.
    *   **Main Memory Address bits:** 16 bits.
    *   **Address Decomposition:**
        *   **Offset:** Block size is $2^6$, so Offset bits = 6.
        *   **Index:** Number of cache lines is $2^8$, so Index bits = 8.
        *   **Tag:** Total Address bits - Index bits - Offset bits = 16 - 8 - 6 = 2 bits.
    *   **Frequent Access of Block 100 and Block 356:**
        *   Block 100 maps to cache line: $100 \pmod{256} = 100$.
        *   Block 356 maps to cache line: $356 \pmod{256} = 100$.
        *   Since both blocks map to the same cache line (line 100), they will compete. When block 356 is brought into the cache, it will replace block 100. If block 100 is accessed again soon after, it will be a cache miss, and block 100 will replace block 356. This constant replacement leads to frequent misses, known as **conflict misses**.

---

## 8. Important Points to Remember

*   **Memory Hierarchy:** The fundamental concept is to use multiple levels of memory with varying speed, cost, and capacity to provide the best overall performance.
*   **Locality:** Cache performance relies heavily on temporal and spatial locality.
*   **Virtual Memory:** Provides an extended address space, simplifies memory management, and enhances multiprogramming, but introduces overhead (page tables, page faults).
*   **CAM:** Essential for high-speed searching and pattern matching, but expensive and power-hungry. Used in TLBs and network hardware.
*   **Cache Mapping:** Direct-mapped, fully associative, and set-associative are trade-offs between complexity, cost, and hit rate. Set-associative offers a good balance.
*   **Misses:** Understand the different types of cache misses: Compulsory (cold start), Conflict (mapping collisions), and Capacity (cache too small).
*   **Write Policies:** Write-through and write-back have different implications for performance and consistency.

---
This comprehensive study note covers the key concepts of Module 4, aligning with the provided learning outcomes and referencing the specified textbooks. The inclusion of definitions, examples, practice questions, and summary points aims to facilitate a thorough understanding of the memory system.
