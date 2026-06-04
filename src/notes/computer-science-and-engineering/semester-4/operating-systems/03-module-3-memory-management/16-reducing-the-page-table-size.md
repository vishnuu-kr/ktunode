---
title: "Reducing the page table size"
subject: "OPERATING SYSTEMS"
module: "Module 3: Memory management  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8afc4"
status: "completed"
scrapedAt: "2026-05-20T16:14:23.998Z"
---
# OPERATING SYSTEMS - Module 3: Memory Management - Reducing Page Table Size

## Introduction

Page tables are essential for virtual memory management, translating virtual addresses to physical addresses. However, they can consume significant memory, especially in systems with large virtual address spaces. This section explores various techniques to reduce the size of page tables, improving memory efficiency and performance.

## Learning Outcomes

*   Understand the challenges posed by large page tables.
*   Describe and compare different techniques for reducing page table size:
    *   Hierarchical Page Tables
    *   Hashed Page Tables
    *   Inverted Page Tables
*   Analyze the advantages and disadvantages of each technique.
*   Explain the concepts of paging and segmentation used in conjunction with these techniques.
*   Apply these techniques to real-world operating systems (examples).

## 1. The Problem: Large Page Tables

*   **Virtual Address Space:** Modern operating systems typically support large virtual address spaces (e.g., 64-bit systems).
*   **Page Table Entry (PTE) Size:** Each entry in the page table, the PTE, contains information like the physical frame number, valid bit, protection bits (read/write/execute), and other metadata. PTEs require memory.
*   **Challenge:** A large virtual address space and a significant number of PTEs result in a large overall page table size, consuming a considerable amount of physical memory.
*   **Example:**
    *   Assume a 32-bit address space (4GB), 4KB page size.
    *   Number of pages: 4GB / 4KB = 2^32 / 2^12 = 2^20 = 1,048,576 pages
    *   If each PTE is 4 bytes, the page table size would be 1,048,576 * 4 bytes = 4MB.
    *   In a 64-bit system, this would be significantly larger.

## 2. Hierarchical Page Tables

*   **Concept:** Divide the page table into multiple levels of page tables. This allows parts of the page table to be allocated only when needed.
*   **Multi-level Paging:**  The virtual address is split into multiple parts, each used as an index into a level of the page table.
*   **Example (Two-Level Paging):**
    *   Virtual Address: | Page Directory Index (PDI) | Page Table Index (PTI) | Offset |
    *   The PDI indexes into the *page directory*, which contains pointers to *page tables*.
    *   The PTI indexes into the selected page table, which contains the frame number (physical address).
    *   The offset is added to the frame number to get the physical address.
*   **Advantages:**
    *   **Space Efficiency:** Page tables are only allocated for the portions of the virtual address space that are actually used.  If a particular region of the virtual address space is not being used, its corresponding page table entries (and even entire page tables) don't need to be allocated.
    *   **Memory Savings:** Reduces memory consumption compared to a single, large page table.
*   **Disadvantages:**
    *   **Increased Memory Access Time:** Requires multiple memory accesses (one per level) to translate a virtual address.  This can slow down performance if not optimized with TLBs (Translation Lookaside Buffers).
    *   **Complexity:**  Increases the complexity of memory management.
*   **Real-World Example:** x86 architecture utilizes multi-level paging (e.g., 32-bit PAE, 64-bit mode).
*   **Important Point:** TLBs are crucial for mitigating the increased access time overhead by caching recent translations.

## 3. Hashed Page Tables

*   **Concept:** Uses a hash function to map the virtual page number to an entry in a hash table. Each hash table entry contains the virtual page number, the corresponding physical frame number, and other page table metadata.
*   **How it Works:**
    1.  Hash the virtual page number.
    2.  Use the hash value as an index into the hash table.
    3.  Search the entry (or linked list if there are collisions) to find the matching virtual page number.
    4.  If found, retrieve the corresponding physical frame number.
*   **Advantages:**
    *   **Space Efficiency:** The size of the hash table depends on the number of *actual* virtual pages in use, not the size of the entire virtual address space.
    *   **Faster Lookup (potentially):** Hash tables can provide faster lookup than linear search in a large page table, assuming a good hash function and collision handling.
*   **Disadvantages:**
    *   **Collision Handling:** Collisions can degrade performance if not handled efficiently (e.g., using chaining or open addressing).
    *   **Hash Function Quality:** The performance depends heavily on the hash function's ability to distribute keys uniformly.  A poorly designed hash function can lead to clustering and slow down lookup times.
    *   **Overhead:**  Maintaining the hash table and handling collisions introduce overhead.
*   **Real-World Example:** Used in some early operating systems and database systems.  Also used in address space layout randomization (ASLR) to avoid predictable memory addresses.

## 4. Inverted Page Tables

*   **Concept:** Instead of having one page table per process (mapping virtual pages to physical frames), an inverted page table (IPT) has one entry per *physical frame*.  The entry contains the virtual address (process ID and page number) of the page currently residing in that frame.
*   **How it Works:**
    1.  The virtual address (process ID and page number) is used to search the IPT.
    2.  If a match is found, the corresponding physical frame number is known.
*   **Advantages:**
    *   **Space Efficiency:** The size of the IPT is proportional to the *physical* memory size, not the virtual address space size.  This can be a significant advantage in systems with large virtual address spaces but relatively small physical memory.
*   **Disadvantages:**
    *   **Slow Address Translation:** Searching the IPT can be slow, as it requires searching through all entries (or using a hash table for faster lookup).
    *   **Context Switching Overhead:** Requires flushing (or managing) entries related to the process being switched out.
    *   **Shared Memory Complexity:**  Shared memory becomes more complex because multiple processes might need to map the same physical frame.
*   **Real-World Example:** Used in early versions of the PowerPC architecture and OS/400.

## 5. Paging and Segmentation

*   **Paging:** Divides both virtual and physical memory into fixed-size blocks called pages and frames, respectively. This simplifies memory allocation but can lead to internal fragmentation. All the techniques discussed above operate *with* paging.
*   **Segmentation:** Divides the virtual address space into variable-sized segments (e.g., code, data, stack).  Segmentation can simplify protection and sharing but can lead to external fragmentation.
*   **Combination:** Some systems combine segmentation and paging. This provides the benefits of both, allowing for logical segments while avoiding external fragmentation. The segments themselves are further divided into pages.
    *   **Example:** Intel x86 architecture supports segmented paging, where segments can be paged.

## 6. Comparing Techniques

| Feature            | Hierarchical Page Tables | Hashed Page Tables | Inverted Page Tables |
| ------------------ | ------------------------- | ------------------- | ---------------------- |
| Space Efficiency  | Good                     | Very Good            | Excellent             |
| Lookup Speed      | Moderate (TLB dependent)   | Good (hash quality dependent)| Poor (unless hashed)      |
| Complexity        | Moderate                   | Moderate              | High                  |
| Address Space Size| Scales Well             | Scales Well           | Scales Best            |
| Main Memory Size  | Influences the size of leaf level pages | Influences the hash table size | Directly determines the size |

## 7. Practice Questions and Exercises

1.  **Explain the main advantage of using hierarchical page tables compared to a single-level page table.**
    *   **Answer:** Hierarchical page tables reduce memory consumption by only allocating page tables for the portions of the virtual address space that are actually used.

2.  **What is the main disadvantage of using hierarchical page tables?  How is this mitigated in practice?**
    *   **Answer:** The main disadvantage is increased memory access time due to multiple levels of page table lookups. This is mitigated by using Translation Lookaside Buffers (TLBs) to cache recent translations.

3.  **Explain how a hashed page table works and what factors affect its performance.**
    *   **Answer:** A hashed page table uses a hash function to map virtual page numbers to entries in a hash table. Performance is affected by the quality of the hash function (uniform distribution to avoid collisions) and the efficiency of collision handling.

4.  **What is an inverted page table, and what is its main advantage?**
    *   **Answer:** An inverted page table has one entry per physical frame, containing the virtual address of the page currently residing in that frame. Its main advantage is space efficiency, as its size is proportional to the physical memory size, not the virtual address space size.

5.  **Consider a system with a 32-bit virtual address space, a 4KB page size, and 4-byte page table entries. How much memory would a single-level page table consume?**
    *   **Answer:**
        *   Number of pages = 2^32 / 2^12 = 2^20 = 1,048,576 pages
        *   Page table size = 1,048,576 pages * 4 bytes/page = 4MB

6.  **Why are TLBs important for memory management techniques that involve multiple memory accesses for address translation?**
   *  **Answer:** TLBs store recent virtual-to-physical address translations.  Without a TLB, each virtual address translation for hierarchical page tables would require multiple memory accesses, significantly slowing down performance.  The TLB significantly reduces the average access time by caching these translations, avoiding the need to traverse the page tables on every memory access.

## 8. Important Points to Remember

*   **Trade-offs:** Reducing page table size always involves trade-offs between space efficiency, lookup speed, and complexity.
*   **TLBs:** Translation Lookaside Buffers are crucial for improving the performance of memory management schemes that involve multiple memory accesses for address translation.
*   **System Architecture:** The best technique depends on the specific system architecture, virtual address space size, physical memory size, and performance requirements.
*   **Real-World Examples:** Understanding how these techniques are used in real-world operating systems provides valuable insights into their practical applications.
