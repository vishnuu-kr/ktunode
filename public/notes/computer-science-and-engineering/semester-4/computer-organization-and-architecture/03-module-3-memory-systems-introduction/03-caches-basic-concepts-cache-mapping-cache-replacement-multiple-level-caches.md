---
title: "Caches - basic concepts, Cache mapping, Cache replacement, Multiple-Level Caches"
subject: "COMPUTER ORGANIZATION AND ARCHITECTURE"
module: "Module 3: Memory Systems: Introduction"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8b04a"
status: "completed"
scrapedAt: "2026-05-20T16:11:19.195Z"
---
## Module 3: Memory Systems - Caches

### Topic: Caches - Basic Concepts, Cache Mapping, Cache Replacement, Multiple-Level Caches

**Learning Outcomes:**

*   Understand the basic concepts of cache memory and its importance in improving system performance.
*   Describe different cache mapping techniques (direct mapping, fully associative mapping, and set-associative mapping) and their tradeoffs.
*   Explain various cache replacement algorithms (LRU, FIFO, Random) and their impact on cache performance.
*   Discuss the concept of multiple-level caches and their advantages.

---

### 1. Basic Concepts of Cache Memory

*   **Definition:** Cache memory is a small, fast memory that stores frequently accessed data items to reduce the average time required to access data from main memory. It acts as a buffer between the CPU and main memory.

*   **Purpose:**
    *   **Speed up memory access:** Caches exploit the principle of *locality of reference* to reduce the average memory access time.
        *   **Temporal Locality:** If a data item is accessed once, it is likely to be accessed again soon.
        *   **Spatial Locality:** If a data item is accessed, data items near it are likely to be accessed soon.
    *   **Improve system performance:** By reducing memory access latency, CPU can spend more time on processing instructions, thereby improving overall system performance.

*   **Cache Hit vs. Cache Miss:**
    *   **Cache Hit:** When the CPU requests data and it is found in the cache.  This results in a very fast access.
    *   **Cache Miss:** When the CPU requests data and it is NOT found in the cache.  The data must be retrieved from main memory and placed into the cache (and then provided to the CPU). This is a slower process.

*   **Hit Rate:** The percentage of memory accesses that result in a cache hit. (Number of Hits / Total Number of Accesses)

*   **Miss Rate:** The percentage of memory accesses that result in a cache miss. (Number of Misses / Total Number of Accesses) = 1 - Hit Rate

*   **Hit Time:** The time it takes to access data in the cache (typically very fast).

*   **Miss Penalty:** The time it takes to retrieve data from main memory and place it in the cache, including the time to deliver the data to the CPU. This is generally much longer than hit time.

*   **Key Components of a Cache:**
    *   **Cache Lines (or Blocks):** The basic unit of data transfer between cache and main memory.  Typically range from 32-256 bytes.
    *   **Tags:** A portion of the memory address that identifies which main memory block is stored in a particular cache line.
    *   **Data:** The actual data stored in the cache line.
    *   **Valid Bit:** An indicator (usually 1 bit per cache line) that indicates whether the data in the cache line is valid (contains recently loaded data) or invalid (contains stale or uninitialized data).

*   **Cache Organization Parameters:**
    *   **Cache Size:** The total amount of data the cache can store.
    *   **Block Size:** The size of each cache line.
    *   **Associativity:** The number of cache lines that a particular main memory block can be mapped to (discussed further in Cache Mapping).

**Important Points to Remember:**

*   A high hit rate is crucial for good cache performance.
*   Reducing the miss penalty and hit time are important optimization goals.

### 2. Cache Mapping Techniques

Cache mapping determines how main memory blocks are mapped to cache lines.

*   **Direct Mapping:**

    *   **Concept:** Each main memory block can be mapped to only *one* specific cache line.
    *   **Mapping Function:** `Cache Line Number = (Main Memory Block Address) MOD (Number of Cache Lines)`
    *   **Address Division:**  The memory address is divided into three fields:
        *   **Tag:** Identifies the specific main memory block stored in the cache line.
        *   **Line/Index:** Specifies the cache line number.
        *   **Offset:** Specifies the byte within the cache line.
    *   **Example:**
        *   Cache size: 64 KB (2^16 bytes)
        *   Block size: 16 bytes (2^4 bytes)
        *   Number of cache lines: 64KB / 16B = 4096 lines (2^12 lines)
        *   Main memory address: 32 bits
        *   Address division:
            *   Offset: 4 bits (log2(16))
            *   Index: 12 bits (log2(4096))
            *   Tag: 16 bits (32 - 4 - 12)
    *   **Advantages:** Simple and inexpensive to implement.
    *   **Disadvantages:** High conflict misses if frequently accessed blocks map to the same cache line (poor performance when two frequently used memory addresses happen to map to the same cache line).
*   **Fully Associative Mapping:**

    *   **Concept:** Any main memory block can be mapped to *any* cache line.
    *   **Address Division:** The memory address is divided into two fields:
        *   **Tag:** Identifies the specific main memory block.
        *   **Offset:** Specifies the byte within the cache line.
    *   **Advantages:** Low conflict misses because any memory block can reside in any cache line.
    *   **Disadvantages:** Complex and expensive to implement due to the need to search all cache lines in parallel to find a match. Requires comparators for each cache line.
*   **Set-Associative Mapping:**

    *   **Concept:** A compromise between direct mapping and fully associative mapping.  The cache is divided into *sets*, and each set contains a fixed number of cache lines.  A main memory block can be mapped to any of the cache lines within a specific set.
    *   **Mapping Function:** `Set Number = (Main Memory Block Address) MOD (Number of Sets)`
    *   **Address Division:** The memory address is divided into three fields:
        *   **Tag:** Identifies the specific main memory block.
        *   **Set:** Specifies the set number.
        *   **Offset:** Specifies the byte within the cache line.
    *   **"N-way set associative"**: Each set contains N cache lines.  For example, a "4-way set associative" cache has 4 lines per set.
    *   **Example:**
        *   Cache size: 64 KB (2^16 bytes)
        *   Block size: 16 bytes (2^4 bytes)
        *   Number of cache lines: 64KB / 16B = 4096 lines (2^12 lines)
        *   4-way set-associative
        *   Number of sets: 4096 lines / 4 lines per set = 1024 sets (2^10 sets)
        *   Main memory address: 32 bits
        *   Address division:
            *   Offset: 4 bits (log2(16))
            *   Set: 10 bits (log2(1024))
            *   Tag: 18 bits (32 - 4 - 10)
    *   **Advantages:** Offers a good balance between performance and cost.  Reduces conflict misses compared to direct mapping, while being less complex than fully associative mapping.
    *   **Disadvantages:** More complex than direct mapping.

**Important Points to Remember:**

*   Direct mapping is the simplest but can suffer from high conflict misses.
*   Fully associative mapping minimizes conflict misses but is expensive.
*   Set-associative mapping offers a good compromise.

### 3. Cache Replacement Algorithms

When a cache miss occurs and the requested data needs to be brought into the cache, a replacement algorithm is used to decide which existing cache line to evict if the corresponding set is full.

*   **Least Recently Used (LRU):**
    *   **Concept:** Replaces the cache line that has been least recently used.
    *   **Implementation:** Requires tracking the usage history of each cache line. This can be done using counters or a linked list.
    *   **Advantages:** Generally performs well, approaching the optimal replacement policy.
    *   **Disadvantages:** Complex to implement, especially for high associativity. High overhead for maintaining usage history.
*   **First-In, First-Out (FIFO):**
    *   **Concept:** Replaces the cache line that has been in the cache for the longest time.
    *   **Implementation:** Simple to implement using a circular queue.
    *   **Advantages:** Simple and inexpensive to implement.
    *   **Disadvantages:** Doesn't consider usage patterns, which can lead to poor performance if frequently used blocks are evicted prematurely.
*   **Random Replacement:**
    *   **Concept:** Replaces a cache line randomly.
    *   **Implementation:** Simplest to implement, typically using a random number generator.
    *   **Advantages:** Very simple and inexpensive to implement.
    *   **Disadvantages:** Performance can be unpredictable and often worse than LRU or FIFO.

**Important Points to Remember:**

*   LRU is the most common replacement algorithm due to its good performance.
*   FIFO is simpler but can be less effective.
*   Random replacement is the simplest but often least effective.
*   The choice of replacement algorithm depends on the cost/performance tradeoff desired.

### 4. Multiple-Level Caches

*   **Concept:**  Hierarchical cache system with multiple levels of cache (L1, L2, L3, etc.) to improve performance.
*   **Purpose:** To balance speed and cost.
    *   **L1 Cache:** Small, fast, and located closest to the CPU.  Focus is on minimizing hit time.  Often split into instruction cache (I-cache) and data cache (D-cache).
    *   **L2 Cache:** Larger and slower than L1, but still faster than main memory. Focus is on reducing miss penalty.
    *   **L3 Cache:** Even larger and slower than L2, but still faster than main memory.  Primarily used in multi-core processors and shared by all cores to improve inter-core communication and data sharing.
*   **Operation:**
    1.  CPU first checks L1 cache.
    2.  If a miss occurs in L1, the L2 cache is checked.
    3.  If a miss occurs in L2, the L3 cache is checked (if it exists).
    4.  If a miss occurs in L3 (or L2 if there is no L3), the data is retrieved from main memory.
*   **Inclusion and Exclusion Policies:**
    *   **Inclusive Cache:** Data in L1 is also present in L2 (and L3, etc.).  This simplifies cache coherence protocols in multi-core systems.
    *   **Exclusive Cache:** Data in L1 is *not* present in L2 (and L3, etc.). This allows for a larger total cache capacity.
    *   **Non-Inclusive Non-Exclusive (NINE):**  Data in L1 may or may not be present in L2 (and L3, etc.). This allows for more flexibility.
*   **Advantages:**
    *   Reduced average memory access time: L1 catches most accesses, L2 handles L1 misses, and so on.
    *   Improved system performance: Enables faster execution of programs by minimizing memory access latency.

**Important Points to Remember:**

*   Multiple-level caches are essential for modern processors.
*   L1 is the fastest and smallest, L2 is larger and slower, and so on.
*   Inclusion/exclusion policies affect cache coherence and overall performance.

---

### Practice Questions and Exercises

1.  **Question:** A computer system uses a direct-mapped cache with a size of 4KB and a block size of 64 bytes. The main memory address is 32 bits.  What are the sizes of the Tag, Index, and Offset fields in the address?

    **Answer:**
    *   Cache size = 4KB = 2^12 bytes
    *   Block size = 64 bytes = 2^6 bytes
    *   Number of cache lines = 4KB / 64B = 2^12 / 2^6 = 2^6 = 64 lines
    *   Offset = log2(64) = 6 bits
    *   Index = log2(64) = 6 bits
    *   Tag = 32 - 6 - 6 = 20 bits

2.  **Question:** Explain the advantages and disadvantages of fully associative mapping compared to direct mapping.

    **Answer:**
    *   **Fully Associative Mapping:**
        *   Advantages: Low conflict misses, as any memory block can be placed in any cache line.
        *   Disadvantages: Complex and expensive implementation, requires parallel searching and comparators for each cache line.
    *   **Direct Mapping:**
        *   Advantages: Simple and inexpensive to implement.
        *   Disadvantages: High conflict misses, as each memory block can only be placed in a specific cache line.

3.  **Question:** Consider a 2-way set-associative cache with 16 sets and a block size of 32 bytes. A 24-bit main memory address is used.
    a) How many bits are used for the Tag field?
    b) How many bits are used for the Set field?
    c) How many bits are used for the Byte Offset field?

    **Answer:**
    a) Total number of sets = 16 = 2<sup>4</sup>. So, Number of Set bits = 4.

    b) Block size = 32 bytes = 2<sup>5</sup> bytes. So, Number of byte offset bits = 5.

    c) Tag bits = Memory address bits - Set bits - Byte offset bits = 24 - 4 - 5 = 15.  So, Tag bits = 15.

4.  **Question:** Briefly describe how the LRU replacement algorithm works.

    **Answer:** The LRU (Least Recently Used) replacement algorithm replaces the cache line that has been least recently accessed.  It requires tracking the usage history of each cache line, typically using counters or a linked list, to determine which line has been idle for the longest period.

5.  **Question:** What is the purpose of having multiple levels of cache (L1, L2, L3)?

    **Answer:** Multiple levels of cache are used to create a memory hierarchy that balances speed and cost. L1 cache is small and fast, located closest to the CPU for minimizing hit time. L2 cache is larger and slower than L1 but faster than main memory, serving to reduce the miss penalty from L1. L3 cache is even larger and slower, often shared by multiple cores in a multi-core processor, to further reduce miss penalty and facilitate inter-core communication.

---
This provides detailed notes on the topic, covering the learning outcomes, defining key concepts, giving examples, and using clear headings and bullet points, as well as including practice questions with answers.  Remember to consult your textbook and lecture notes for additional details and clarifications. Good luck with your studies!
