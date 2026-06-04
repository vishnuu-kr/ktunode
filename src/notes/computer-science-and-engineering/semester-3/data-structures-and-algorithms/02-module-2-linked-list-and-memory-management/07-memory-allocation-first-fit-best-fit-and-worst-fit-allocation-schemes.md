---
title: "Memory allocation - First-fit, Best-fit, and Worst-fit allocation schemes"
subject: "DATA STRUCTURES AND ALGORITHMS"
module: "Module 2: Linked List and Memory Management"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ac37"
status: "completed"
scrapedAt: "2026-05-20T16:22:56.798Z"
---
# DATA STRUCTURES AND ALGORITHMS: Module 2 - Linked Lists and Memory Management

## Topic: Memory Allocation - First-Fit, Best-Fit, and Worst-Fit Allocation Schemes

**Description:** This module covers different memory allocation strategies – First-Fit, Best-Fit, and Worst-Fit – that are used to allocate memory blocks to processes or data structures. Understanding these schemes is crucial for efficient memory management and performance optimization.

**Learning Outcomes:**

*   Understand the concepts of dynamic memory allocation and its importance.
*   Describe the First-Fit, Best-Fit, and Worst-Fit memory allocation strategies.
*   Compare and contrast the advantages and disadvantages of each allocation scheme.
*   Analyze the performance of each allocation scheme in different scenarios.
*   Identify potential problems like fragmentation and suggest mitigation strategies.

---

### 1. Introduction to Dynamic Memory Allocation

*   **Static vs. Dynamic Memory Allocation:**
    *   **Static Allocation:** Memory is allocated at compile time. The size is fixed and cannot be changed during program execution.  Examples: Arrays declared with a fixed size.
    *   **Dynamic Allocation:** Memory is allocated at runtime using functions like `malloc()` (C), `new` (C++), or garbage collection systems (Java, Python). The size can be adjusted during program execution. This allows for more flexible and efficient memory utilization.

*   **Importance of Dynamic Memory Allocation:**
    *   **Efficient Memory Usage:**  Allocates memory only when needed and releases it when it's no longer required. Avoids wasting memory by allocating only the necessary amount.
    *   **Flexibility:** Can handle data structures whose size is not known at compile time. Useful for data structures that grow and shrink during program execution, like linked lists, trees, and graphs.
    *   **Resource Management:** Crucial in operating systems and applications where multiple processes compete for limited memory resources.
    *   **Avoids Stack Overflow:** For large data structures, allocating memory on the heap (using dynamic allocation) instead of the stack prevents stack overflow errors.

*   **Memory Fragmentation:** A common problem in dynamic memory allocation where available memory is broken into small, non-contiguous blocks, making it difficult to allocate larger chunks of memory even if the total free memory is sufficient.

    *   **External Fragmentation:**  Sufficient total memory space exists to satisfy a request, but it is not contiguous; it is scattered throughout memory.  This is the focus of the allocation strategies covered here.
    *   **Internal Fragmentation:**  Allocated memory block is larger than the requested size, leading to wasted space *within* the allocated block.  This is generally addressed via techniques outside the scope of this module.

### 2. Memory Allocation Strategies

These strategies determine which free memory block to allocate when a process requests memory.  They aim to balance allocation speed, memory utilization, and fragmentation.

*   **Free List:** All three algorithms assume the existence of a data structure (e.g., a linked list) that tracks available (free) memory blocks. This list is called the "free list."

#### 2.1 First-Fit

*   **Description:** Scans the free list from the beginning and allocates the *first* free block that is large enough to satisfy the memory request.

*   **Algorithm:**
    1.  Start at the beginning of the free list.
    2.  For each free block, check if its size is greater than or equal to the requested size.
    3.  If a suitable block is found, allocate the requested memory from that block.
    4.  If the block size is exactly equal to the request, remove the block from the free list.
    5.  If the block size is greater than the request, split the block. Allocate a portion of the block and keep the remaining portion in the free list.
    6.  If no suitable block is found after scanning the entire list, the allocation fails (out of memory).

*   **Advantages:**
    *   **Simple and fast to implement.**  Only needs to find the first suitable block.
    *   **Tends to keep larger blocks of free memory at the end of the memory space.** This can be beneficial for allocating larger memory requests later.

*   **Disadvantages:**
    *   **External Fragmentation:** Tends to create small, unusable fragments at the beginning of memory, leading to external fragmentation over time.
    *   **Slows down allocation:**  Must traverse the free list to find the first suitable block, which can be slow if the list is long.

*   **Example:**
    *   Free blocks: [100KB, 50KB, 200KB, 75KB]
    *   Request: 60KB
    *   First-Fit: The 200KB block will be allocated and split into a 60KB allocated block and a 140KB free block.  New free list: [100KB, 50KB, 140KB, 75KB].

#### 2.2 Best-Fit

*   **Description:** Scans the entire free list and allocates the *smallest* free block that is large enough to satisfy the memory request.

*   **Algorithm:**
    1.  Scan the entire free list.
    2.  For each free block, check if its size is greater than or equal to the requested size.
    3.  Keep track of the smallest suitable block found so far.
    4.  After scanning the entire list, allocate the memory from the smallest suitable block.
    5.  If the block size is exactly equal to the request, remove the block from the free list.
    6.  If the block size is greater than the request, split the block. Allocate a portion of the block and keep the remaining portion in the free list.
    7.  If no suitable block is found, the allocation fails (out of memory).

*   **Advantages:**
    *   **Reduced External Fragmentation:** Tends to leave larger contiguous blocks of free memory, which can be useful for allocating larger memory requests in the future.  It's more likely than first-fit to find a block that's close in size to the request.

*   **Disadvantages:**
    *   **Slower than First-Fit:** Requires scanning the entire free list to find the best fit.
    *   **Can create many tiny, unusable fragments:** Although it reduces the overall amount of external fragmentation, it creates more *small* fragments, which can be problematic if many small allocations are needed later.  These small fragments are often too small to be useful.

*   **Example:**
    *   Free blocks: [100KB, 50KB, 200KB, 75KB]
    *   Request: 60KB
    *   Best-Fit: The 75KB block will be allocated and split into a 60KB allocated block and a 15KB free block. New free list: [100KB, 50KB, 200KB, 15KB]. Notice that 15KB fragment left behind.

#### 2.3 Worst-Fit

*   **Description:** Scans the entire free list and allocates the *largest* free block available.

*   **Algorithm:**
    1.  Scan the entire free list.
    2.  Find the largest free block.
    3.  Allocate the requested memory from the largest block.
    4.  Split the block. Allocate a portion of the block and keep the remaining portion in the free list. (It's unlikely the block size is exactly equal to the request, or it wouldn't be the *largest*).
    5.  If no suitable block is found (unlikely unless there's no free memory at all), the allocation fails.

*   **Advantages:**
    *   **Aims to leave larger free blocks after allocation:** By allocating from the largest block, it hopes to leave a usable block size for subsequent allocations.

*   **Disadvantages:**
    *   **Increased Fragmentation:** Creates smaller free blocks, making it difficult to allocate larger memory requests later.
    *   **Often performs the worst:** By consistently allocating from the largest block, it quickly breaks down larger blocks into smaller, less useful blocks, leading to severe external fragmentation.
    *   **Slower than First-Fit:** Requires scanning the entire free list to find the worst fit.

*   **Example:**
    *   Free blocks: [100KB, 50KB, 200KB, 75KB]
    *   Request: 60KB
    *   Worst-Fit: The 200KB block will be allocated and split into a 60KB allocated block and a 140KB free block. New free list: [100KB, 50KB, 140KB, 75KB].

### 3. Comparison of Allocation Schemes

| Feature             | First-Fit          | Best-Fit           | Worst-Fit          |
| ------------------- | ------------------ | ------------------ | ------------------ |
| **Search Speed**    | Fastest            | Slow               | Slow               |
| **Fragmentation**  | Moderate           | Tends to create many small fragments | High               |
| **Memory Utilization** | Moderate           | Good               | Poor               |
| **Implementation**   | Simple             | More Complex       | More Complex       |
| **Overall Performance** | Generally good     | Good               | Often the worst    |

### 4. Factors Affecting Performance

*   **Allocation and Deallocation Patterns:** The sequence of memory requests and releases significantly impacts the effectiveness of each allocation scheme.
*   **Size of Memory Requests:** The size distribution of memory requests influences the level of fragmentation. If requests are mostly of similar sizes, best-fit might perform well.  If there's a mix, first-fit might be better overall.
*   **Size of Available Memory:** The total amount of available memory influences how quickly fragmentation becomes a problem.

### 5. Mitigation Strategies for Fragmentation

While the above allocation algorithms address *where* to allocate memory, these techniques help to reduce the *overall* fragmentation problem.

*   **Compaction:** Rearranging allocated blocks in memory to create a larger contiguous block of free space. This requires relocating allocated blocks, which can be a time-consuming operation and may not be possible if some blocks cannot be moved.
*   **Coalescing:** Merging adjacent free blocks into a single, larger free block.  This is generally done during deallocation. When a block is freed, the algorithm checks if adjacent blocks are also free, and if so, merges them.
*   **Buddy System:** Divides memory into powers of 2 sized blocks.  A larger block is repeatedly divided in half (forming "buddies") until a block of the appropriate size is found. When a block is freed, it attempts to merge with its buddy (if also free) to form a larger block. This simplifies coalescing and management but may suffer from internal fragmentation.
*   **Segmentation and Paging (Operating System Concepts):** These techniques, implemented by the operating system, allow for non-contiguous memory allocation at a page level, greatly reducing external fragmentation.

### 6. Important Points to Remember

*   **No "One-Size-Fits-All" Solution:**  The best memory allocation scheme depends on the specific application and its memory access patterns.
*   **Trade-offs:** There are trade-offs between speed, memory utilization, and fragmentation.
*   **Memory Leaks:** Failing to deallocate memory after it is no longer needed leads to memory leaks, eventually exhausting available memory.  Always ensure that dynamically allocated memory is freed using `free()` (C) or `delete` (C++) when it is no longer required.  Languages with garbage collection (Java, Python) handle this automatically.
*   **Garbage Collection:** Automates the process of reclaiming memory that is no longer in use. Simplifies memory management for the programmer but can introduce performance overhead due to the garbage collection process itself.

### 7. Practice Questions and Exercises

**Question 1:**

A memory manager has the following free blocks: 200KB, 100KB, 50KB, 150KB, 250KB.  Processes arrive requesting the following memory blocks in sequence: 120KB, 80KB, 220KB.  Simulate the allocation of memory using First-Fit, Best-Fit, and Worst-Fit. Show the state of the free list after each allocation.

**Answer 1:**

*   **Initial Free List:** [200KB, 100KB, 50KB, 150KB, 250KB]

    *   **Request 1: 120KB**

        *   **First-Fit:**  Allocates from 200KB block. Free List: [80KB, 100KB, 50KB, 150KB, 250KB]
        *   **Best-Fit:** Allocates from 150KB block. Free List: [200KB, 100KB, 50KB, 30KB, 250KB]
        *   **Worst-Fit:** Allocates from 250KB block. Free List: [200KB, 100KB, 50KB, 150KB, 130KB]

    *   **Request 2: 80KB**

        *   **First-Fit (from previous First-Fit):** Allocates from 80KB block. Free List: [100KB, 50KB, 150KB, 250KB]
        *   **Best-Fit (from previous Best-Fit):** Allocates from 100KB block. Free List: [200KB, 20KB, 50KB, 30KB, 250KB]
        *   **Worst-Fit (from previous Worst-Fit):** Allocates from 200KB block. Free List: [120KB, 100KB, 50KB, 150KB, 130KB]

    *   **Request 3: 220KB**

        *   **First-Fit (from previous First-Fit):** Allocates from 250KB block. Free List: [100KB, 50KB, 150KB, 30KB]
        *   **Best-Fit (from previous Best-Fit):** Allocates from 250KB block. Free List: [200KB, 20KB, 50KB, 30KB, 30KB]
        *   **Worst-Fit (from previous Worst-Fit):** Fails to allocate (no block large enough).

**Question 2:**

Explain the difference between external and internal fragmentation. Which of the allocation schemes (First-Fit, Best-Fit, Worst-Fit) primarily addresses external fragmentation?

**Answer 2:**

*   **External Fragmentation:**  Occurs when there is enough total memory to satisfy a request, but the available memory is scattered in small, non-contiguous blocks.
*   **Internal Fragmentation:** Occurs when an allocated block of memory is larger than the requested size, leading to wasted space within the block.

First-Fit, Best-Fit, and Worst-Fit all primarily address *external* fragmentation.  They try to find suitable *contiguous* blocks of memory from a free list. Best-Fit is designed to *minimize* external fragmentation (at the cost of potentially creating many small fragments), but *none* of these algorithms fully eliminate it. They do not focus on internal fragmentation.

**Question 3:**

Which allocation scheme is the fastest?  Why?

**Answer 3:**

First-Fit is generally the fastest because it only needs to search for the *first* suitable block in the free list. Best-Fit and Worst-Fit require scanning the *entire* free list to find the best or worst fit, respectively.

---
