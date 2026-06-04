---
title: "page tables and hardware support"
subject: "OPERATING SYSTEMS"
module: "Module 3: Memory management  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8afbe"
status: "completed"
scrapedAt: "2026-05-20T16:14:19.738Z"
---
# OPERATING SYSTEMS - Module 3: Memory Management - Page Tables and Hardware Support

## Learning Outcomes:

*   Understand the concept and purpose of page tables.
*   Explain how page tables translate virtual addresses to physical addresses.
*   Describe different page table structures (hierarchical, hashed, inverted).
*   Discuss the hardware support required for efficient page table management, including TLBs.
*   Analyze the performance implications of different page table implementations.
*   Understand the concept of protection bits within page table entries.

## 1. Introduction to Page Tables

*   **Virtual Memory:**  An abstraction that separates logical memory as seen by the process from physical memory. Each process has its own virtual address space.

*   **Paging:** A memory management scheme that divides both logical (virtual) and physical memory into equal-sized blocks called *pages* and *frames* respectively.  This allows for non-contiguous allocation of physical memory to a process.

*   **Page Table:**  A data structure used by the operating system to store the mapping between virtual addresses and physical addresses.  Essentially, it's a look-up table that translates a *page number* (from the virtual address) to a *frame number* (in physical memory).

*   **Purpose of Page Tables:**
    *   Virtual-to-physical address translation.
    *   Memory protection (access control).
    *   Enabling virtual memory techniques like demand paging.

*   **Key Concepts:**
    *   **Virtual Address:** The address used by the program.
    *   **Physical Address:** The actual address in RAM.
    *   **Page Number:**  The high-order bits of the virtual address used as an index into the page table.
    *   **Offset:** The low-order bits of the virtual address that specify the location within the page.
    *   **Frame Number:** The physical address of a frame in memory.
    *   **Page Table Entry (PTE):**  Each entry in the page table. It contains information about the corresponding page, including the frame number and status/protection bits.

## 2. Virtual to Physical Address Translation

*   **Translation Process:**
    1.  The CPU generates a virtual address.
    2.  The virtual address is divided into a page number and an offset.
    3.  The page number is used as an index into the page table.
    4.  The page table entry (PTE) at that index is retrieved.
    5.  The PTE contains the frame number if the page is in memory (valid bit set).  If the valid bit is not set, a page fault occurs.
    6.  The frame number from the PTE is combined with the offset from the virtual address to form the physical address.
    7.  The CPU uses the physical address to access the data in memory.

*   **Example:**

    Assume:
    *   Virtual address space: 16 bits
    *   Page size: 4KB (2^12 bytes)
    *   Physical address space: 20 bits

    Then:
    *   Offset: 12 bits (log2(4096))
    *   Page Number: 4 bits (16 - 12)
    *   Number of pages in virtual address space: 2^4 = 16 pages
    *   Physical address = Frame number (8 bits) + Offset (12 bits)

    Virtual Address:  `0x1234` (0001 0010 0011 0100 in binary)
    *   Page Number: `0001` (1 in decimal)
    *   Offset: `0010 0011 0100` (564 in decimal)

    Let's say the page table entry for page 1 contains a frame number of `0x05` (0000 0101 in binary).

    Then the physical address would be:  `0x05234` (0000 0101 0010 0011 0100 in binary)

## 3. Page Table Structures

*   **a) Hierarchical Page Tables (Multi-level Page Tables):**

    *   **Concept:**  Breaks the page table into multiple levels.  The top-level page table points to second-level page tables, which point to third-level page tables, and so on until you reach the actual PTEs containing the frame numbers.

    *   **Advantages:**
        *   Reduces the memory footprint of the page table, especially when the address space is sparsely populated.  No need to allocate space for unused pages.
        *   Efficient for large address spaces.

    *   **Disadvantages:**
        *   Increases the number of memory accesses required for address translation (one access per level).
        *   More complex to implement.

    *   **Example:** A two-level page table.  The virtual address is divided into three parts:  *outer page*, *inner page*, and *offset*.  The outer page is used as an index into the first-level page table.  The entry in the first-level page table points to the base address of a second-level page table.  The inner page is then used as an index into this second-level page table.  The entry at this index contains the frame number (and other status bits).

*   **b) Hashed Page Tables:**

    *   **Concept:** Uses a hash function to map the virtual page number to a physical address.  The hash table contains chains of elements, each element containing a virtual page number, the corresponding frame number, and a pointer to the next element in the chain (for handling collisions).

    *   **Advantages:**
        *   Good for address spaces larger than 32 bits.
        *   Efficient lookup time (on average, assuming a good hash function).

    *   **Disadvantages:**
        *   Hash function selection is critical for performance.  Poor hash functions can lead to excessive collisions and slow lookups.
        *   Collision handling overhead.
        *   Requires extra memory for the hash table structure.

*   **c) Inverted Page Tables:**

    *   **Concept:**  Has *one entry per physical frame* in memory, indexed by the physical frame number. Each entry stores the virtual address of the page currently residing in that frame.  This dramatically reduces the memory required for the page table because its size is proportional to the *physical* memory, not the virtual memory.

    *   **Advantages:**
        *   Small memory footprint, especially when the virtual address space is much larger than the physical memory.

    *   **Disadvantages:**
        *   Address translation is slow because you need to search the entire inverted page table for the virtual address.  Hashing techniques are often used to speed up the search.
        *   Difficult to implement memory protection efficiently.

## 4. Hardware Support for Page Table Management

*   **Translation Lookaside Buffer (TLB):**  A cache that stores recent virtual-to-physical address translations.  This dramatically speeds up address translation by reducing the need to access the main memory-resident page table for every memory access.

    *   **TLB Operation:**
        1.  When the CPU generates a virtual address, the TLB is checked first.
        2.  If a matching entry (a TLB hit) is found, the corresponding physical address is immediately available.
        3.  If there is no matching entry (a TLB miss), the page table in main memory must be consulted to perform the address translation.
        4.  The newly translated address is then stored in the TLB, potentially replacing an existing entry.

    *   **TLB Hit Ratio:** The percentage of times a translation is found in the TLB. A high hit ratio is crucial for good performance.

    *   **TLB Miss Handling:**  When a TLB miss occurs, the operating system or hardware (depending on the architecture) traverses the page table to find the translation. This is slower than a TLB hit.

*   **Page Table Base Register (PTBR):** A hardware register that stores the base address of the current process's page table in memory.  Used to locate the page table when a TLB miss occurs.

*   **Hardware Page Table Walkers:** Some architectures provide dedicated hardware to traverse multi-level page tables, further reducing the overhead of TLB misses.

## 5. Performance Implications

*   **TLB Hit Ratio:**  The most significant factor affecting performance.  Higher hit ratios result in faster address translation. Factors affecting hit ratio: TLB size, locality of reference in the program's memory access patterns.

*   **Number of Memory Accesses:**  Hierarchical page tables require multiple memory accesses for address translation (one per level). This can be a performance bottleneck, especially if the TLB hit ratio is low.

*   **Page Table Size:** Large page tables consume significant memory.  Hierarchical page tables and inverted page tables are designed to minimize this overhead.

*   **Context Switching Overhead:** Switching between processes requires updating the PTBR and flushing the TLB, which introduces overhead.

## 6. Protection Bits

*   **Protection Bits:**  Bits within the page table entry that control access to the page. These bits determine what operations are allowed on the page (read, write, execute).

*   **Common Protection Bits:**
    *   **Valid/Invalid Bit:**  Indicates whether the page is currently in physical memory.
    *   **Read/Write Bit:** Controls whether the page can be read from and/or written to.
    *   **Execute Bit:** Controls whether the page can be executed as code.
    *   **User/Supervisor Bit:**  Controls whether the page can be accessed by user-mode programs or only by the kernel/supervisor mode.
    *   **Dirty Bit:**  Indicates whether the page has been modified since it was loaded into memory.  Used by page replacement algorithms.
    *   **Reference Bit (or Accessed Bit):** Indicates whether the page has been accessed recently.  Also used by page replacement algorithms.

*   **Protection Fault:**  Occurs when a process attempts to access a page in a way that violates the protection bits.  For example, attempting to write to a read-only page or execute code from a data page.  The OS handles the fault, typically terminating the process.

*   **Importance:**  Protection bits are essential for ensuring system security and stability by preventing processes from interfering with each other or the operating system.

## Important Points to Remember:

*   Page tables are the cornerstone of virtual memory, enabling address translation, memory protection, and efficient memory management.
*   Different page table structures have different trade-offs in terms of memory footprint, translation speed, and implementation complexity.
*   Hardware support, particularly the TLB, is crucial for achieving acceptable performance with virtual memory.
*   Protection bits provide a mechanism for enforcing memory access restrictions and preventing security vulnerabilities.

## Practice Questions and Exercises:

**1. What is the purpose of a page table?**

*   **Answer:** A page table maps virtual addresses to physical addresses. It allows the operating system to manage virtual memory and provides memory protection.

**2. Explain how a virtual address is translated to a physical address using a page table.**

*   **Answer:** The virtual address is divided into a page number and an offset. The page number is used as an index into the page table. The corresponding entry in the page table contains the frame number (if the page is present in memory) and other status bits. The frame number is combined with the offset from the virtual address to form the physical address.

**3. What are the advantages and disadvantages of hierarchical page tables?**

*   **Answer:**
    *   **Advantages:** Reduces memory footprint, efficient for large address spaces.
    *   **Disadvantages:** Increases the number of memory accesses for address translation, more complex implementation.

**4. How does a TLB improve the performance of address translation?**

*   **Answer:** The TLB caches recent virtual-to-physical address translations. If the translation is found in the TLB (TLB hit), the physical address can be retrieved much faster than accessing the page table in main memory.

**5. Explain the purpose of protection bits in a page table entry.**

*   **Answer:** Protection bits control access to the corresponding page. They specify whether the page can be read from, written to, or executed. They also control whether the page can be accessed by user-mode programs or only by the kernel.  They are crucial for system security.

**6.  Suppose you have a system with a 32-bit virtual address space, a 4KB page size, and a two-level page table.  How many bits are used for the outer page number, inner page number, and offset?  Assume the outer and inner page tables have the same number of entries.**

*   **Answer:**
    *   Page size: 4KB = 2^12 bytes.  Therefore, offset = 12 bits.
    *   Remaining bits for page numbers: 32 - 12 = 20 bits.
    *   Since it's a two-level page table and the outer and inner tables have the same number of entries, we divide the remaining bits equally: 20 / 2 = 10 bits.
    *   Outer page number = 10 bits.
    *   Inner page number = 10 bits.
    *   Offset = 12 bits.

**7.  Explain how an inverted page table works and its advantages and disadvantages.**

*   **Answer:** An inverted page table has one entry per physical frame, indexed by the frame number.  Each entry stores the virtual address of the page currently residing in that frame.
    *   **Advantage:** Small memory footprint, proportional to physical memory.
    *   **Disadvantage:** Slow address translation (requires searching the table), difficult to implement memory protection efficiently.
