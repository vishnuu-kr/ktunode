---
title: "Virtual Memory - Address Translation"
subject: "COMPUTER ORGANIZATION AND ARCHITECTURE"
module: "Module 3: Memory Systems: Introduction"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8b04d"
status: "completed"
scrapedAt: "2026-05-20T16:11:21.404Z"
---
## COMPUTER ORGANIZATION AND ARCHITECTURE - Module 3: Memory Systems - Virtual Memory: Address Translation

**Introduction:** This module explores Virtual Memory and focuses specifically on Address Translation, a core component enabling virtual memory's functionality.

**Learning Outcomes:** Upon completion of this topic, you should be able to:

*   Understand the concept of virtual memory and its advantages.
*   Explain the need for address translation in virtual memory systems.
*   Describe the process of address translation, including virtual and physical addresses.
*   Explain the role of the Memory Management Unit (MMU) in address translation.
*   Describe different address translation techniques: paging and segmentation.
*   Explain the operation and structure of a Translation Lookaside Buffer (TLB) and its importance.
*   Identify the events leading to a page fault and how the operating system handles it.

---

**1. Virtual Memory: Concepts and Advantages**

*   **Definition:** Virtual memory is a memory management technique that allows a computer to execute programs that require more memory than is physically available in RAM.  It creates an illusion of a much larger main memory than actually exists.

*   **Key Concepts:**
    *   **Virtual Address Space:** The logical address space used by a program.  Each process has its own independent virtual address space.
    *   **Physical Address Space:** The actual address space of the physical RAM.
    *   **Demand Paging/Segmentation:** Data is brought into physical memory only when it is needed (on demand). This improves memory utilization.
    *   **Secondary Storage (Disk):** Used as an extension of physical memory.  Parts of the virtual address space are stored on disk.

*   **Advantages of Virtual Memory:**
    *   **Increased Program Size:** Programs can be larger than the physical memory available.
    *   **Efficient Memory Utilization:**  Only frequently used parts of a program reside in physical memory, freeing up space.
    *   **Increased Degree of Multiprogramming:** More programs can run concurrently because each requires less physical memory.
    *   **Reduced I/O:** Less I/O is needed to load or swap programs.
    *   **Memory Protection:** Processes are isolated from each other, preventing them from accessing each other's memory.

**2. The Need for Address Translation**

*   **Problem:** Virtual addresses used by programs are different from the physical addresses of RAM. A direct correspondence between virtual and physical addresses is impossible if the virtual address space is larger than physical memory.

*   **Solution: Address Translation:**  Address translation is the process of converting a virtual address to its corresponding physical address. This translation is essential to:
    *   Map the virtual address space of a program to the limited physical memory.
    *   Protect processes from each other by ensuring they cannot access memory outside their assigned regions.
    *   Enable demand paging/segmentation by handling situations where data is not present in physical memory.

**3. The Address Translation Process**

*   **Virtual Address:** The address used by the CPU during program execution. It is a logical address.
*   **Physical Address:** The actual address of a location in physical RAM.
*   **The Translation Process:**

    1.  The CPU generates a virtual address.
    2.  The Memory Management Unit (MMU) intercepts this virtual address.
    3.  The MMU uses a translation table (page table or segment table) to find the corresponding physical address.
    4.  If the translation is successful, the MMU provides the physical address to the memory controller.
    5.  If the translation fails (e.g., the data is not in physical memory), a page fault occurs.

*   **Example:**

    *   Let's say a program uses virtual address `0x1000`.
    *   The MMU consults the translation table and finds that virtual address `0x1000` maps to physical address `0x5000`.
    *   The MMU then sends `0x5000` to the memory controller to access the data.

**4. Memory Management Unit (MMU)**

*   **Definition:** A hardware component responsible for managing virtual memory and performing address translation.

*   **Functions of the MMU:**
    *   **Address Translation:** Converts virtual addresses to physical addresses.
    *   **Memory Protection:** Enforces access rights to memory regions.
    *   **Cache Management:** May be involved in cache coherence and management.
    *   **Page Table Management:** Manages the page tables (or segment tables).
    *   **Page Fault Handling:**  Detects and signals page faults to the operating system.

*   **Location:** The MMU is typically integrated into the CPU.

**5. Address Translation Techniques: Paging**

*   **Paging:** A memory management technique that divides both the virtual address space and the physical address space into fixed-size units called *pages* and *frames*, respectively.

    *   **Page:** A fixed-size block of virtual memory (e.g., 4KB).
    *   **Frame:** A fixed-size block of physical memory (same size as a page).
    *   **Page Table:** A table that maps virtual pages to physical frames. Each process has its own page table.

*   **Address Translation with Paging:**

    *   **Virtual Address Structure:** Consists of two parts:
        *   **Page Number (p):** Identifies the virtual page.
        *   **Offset (d):**  Specifies the byte within the page.
    *   **Translation Process:**
        1.  The MMU extracts the page number (p) from the virtual address.
        2.  The MMU uses the page number as an index into the page table.
        3.  The corresponding entry in the page table contains the frame number (f) where the virtual page is located in physical memory.  If the entry is invalid (page not in memory), a page fault occurs.
        4.  The MMU combines the frame number (f) with the offset (d) to form the physical address.
        5.  **Physical Address = (Frame Number * Page Size) + Offset**

*   **Example:**

    *   Page Size: 4KB (4096 bytes = 2<sup>12</sup> bytes).  This means the offset field requires 12 bits.
    *   Virtual Address: 32 bits
    *   Page Number: 32 bits - 12 bits = 20 bits
    *   Physical Address: 32 bits (number of bits might be different depending on architecture)
    *   Page Table Entry: Contains the frame number (which could be, say, 20 bits) and other flags (present/absent bit, protection bits).

*   **Diagram:**

    ```
    Virtual Address:  | Page Number (p) | Offset (d) |
                                       |
                                       V
    Page Table (indexed by p) --> | Frame Number (f) | Flags |
                                       |
                                       V
    Physical Address: | Frame Number (f) | Offset (d) |
    ```

**6. Address Translation Techniques: Segmentation**

*   **Segmentation:** A memory management technique that divides the virtual address space into variable-sized units called *segments*. Segments typically correspond to logical units of a program (e.g., code, data, stack).

    *   **Segment:** A logical unit of memory with variable size.
    *   **Segment Table:**  A table that maps segment numbers to their corresponding physical addresses (base) and limits (size).

*   **Address Translation with Segmentation:**

    *   **Virtual Address Structure:** Consists of two parts:
        *   **Segment Number (s):** Identifies the segment.
        *   **Offset (d):** Specifies the byte within the segment.
    *   **Translation Process:**
        1.  The MMU extracts the segment number (s) from the virtual address.
        2.  The MMU uses the segment number as an index into the segment table.
        3.  The corresponding entry in the segment table contains the base address (b) of the segment in physical memory and the segment limit (l).
        4.  The MMU checks if the offset (d) is less than the segment limit (l). If d > l, a segment fault occurs.
        5.  The MMU adds the base address (b) to the offset (d) to form the physical address.
        6.  **Physical Address = Base Address (b) + Offset (d)**

*   **Example:**

    *   Segment Table Entry: Contains the base address (e.g., 32 bits or 64 bits depending on architecture) and the segment limit (e.g., 32 bits).

*   **Diagram:**

    ```
    Virtual Address:  | Segment Number (s) | Offset (d) |
                                       |
                                       V
    Segment Table (indexed by s) --> | Base Address (b) | Limit (l) |
                                       |
                                       V
    Physical Address:  b + d (after checking d < l)
    ```

*   **Comparison of Paging and Segmentation:**

    | Feature          | Paging                               | Segmentation                          |
    |-----------------|---------------------------------------|---------------------------------------|
    | Unit of Division | Fixed-size pages                     | Variable-size segments                |
    | Address Space    | Virtual and physical are divided     | Virtual address space is divided      |
    | Fragmentation    | Internal fragmentation is possible    | External fragmentation is possible     |
    | Complexity       | Simpler to implement                 | More complex to implement            |
    | Purpose          | Primarily for memory management       | Supports logical program structure  |

**7. Translation Lookaside Buffer (TLB)**

*   **Definition:** A high-speed cache that stores recently used virtual-to-physical address translations.  It's a special type of memory cache used to reduce the time required to access memory.

*   **Purpose:** To speed up the address translation process.  Accessing the page table in main memory for every address translation would be very slow.

*   **Operation:**

    1.  When the MMU receives a virtual address, it first checks the TLB.
    2.  If a matching entry is found in the TLB (TLB Hit), the physical address is retrieved directly from the TLB, significantly reducing access time.
    3.  If no matching entry is found in the TLB (TLB Miss), the MMU must consult the page table in main memory to perform the translation. This is slower.
    4.  After a TLB miss, the newly found translation is typically stored in the TLB, replacing an older entry.

*   **Structure:** The TLB typically uses an associative memory architecture, allowing for parallel searching. It is usually small in size (e.g., 64 to 512 entries).

*   **TLB Organization (simplified):**

    | Virtual Page Number | Physical Frame Number | Protection Bits | Valid Bit |
    |-----------------------|------------------------|-----------------|------------|
    | 0x12345               | 0xABCDE                | RW              | 1          |
    | 0x67890               | 0xFEDCB                | R               | 1          |
    | ...                   | ...                    | ...             | ...        |

*   **Importance:** The TLB is critical for performance in virtual memory systems. A high TLB hit rate significantly reduces memory access time.

**8. Page Faults**

*   **Definition:** A page fault occurs when the MMU tries to translate a virtual address to a physical address, but the corresponding page is not present in physical memory.  This means the page table entry is marked as invalid.

*   **Causes:**
    *   The page has been swapped out to secondary storage (disk).
    *   The page is being accessed for the first time (demand paging).
    *   A memory access violation (e.g., writing to a read-only page).

*   **Handling a Page Fault:**

    1.  The MMU detects the page fault and signals the operating system.
    2.  The operating system suspends the current process.
    3.  The operating system locates the missing page on secondary storage.
    4.  The operating system finds a free frame in physical memory (or swaps out an existing page).
    5.  The operating system reads the missing page from secondary storage into the free frame.
    6.  The operating system updates the page table to reflect the new location of the page.
    7.  The operating system restarts the interrupted process.

*   **Performance Impact:** Page faults are expensive operations because they require disk access, which is significantly slower than memory access. Minimizing page faults is crucial for good performance.

**Important Points to Remember:**

*   Virtual memory allows programs to run even if they require more memory than physically available.
*   Address translation is the process of converting virtual addresses to physical addresses.
*   The MMU is the hardware component responsible for address translation.
*   Paging and segmentation are two common address translation techniques.
*   The TLB is a cache that stores recently used address translations, improving performance.
*   A page fault occurs when a page is not present in physical memory.
*   The operating system handles page faults by loading the missing page from secondary storage.

---

**Practice Questions/Exercises:**

1.  **Explain the purpose of address translation in a virtual memory system.**
    *   *Answer:* Address translation is necessary to map virtual addresses used by programs to the actual physical addresses in RAM, allowing programs to use more memory than physically available, protect processes from each other, and enable demand paging.

2.  **Describe the role of the MMU in address translation.**
    *   *Answer:* The MMU performs the address translation by looking up the physical address for a given virtual address in the page table (or segment table). It also handles memory protection and detects page faults.

3.  **What are the key differences between paging and segmentation?**
    *   *Answer:* Paging uses fixed-size pages, while segmentation uses variable-size segments. Paging avoids external fragmentation but can have internal fragmentation. Segmentation has external fragmentation but supports logical program structures.

4.  **Explain how a TLB works and why it is important.**
    *   *Answer:* A TLB is a cache that stores recent virtual-to-physical address translations.  When a virtual address is used, the TLB is checked first.  If the translation is found (TLB hit), the physical address is retrieved quickly.  If not (TLB miss), the page table must be accessed, which is slower.  TLBs are important because they significantly reduce the time required for address translation, improving overall system performance.

5.  **Describe the steps involved in handling a page fault.**
    *   *Answer:* 1. MMU detects a page fault. 2. OS suspends the process. 3. OS locates the missing page on disk. 4. OS finds a free frame in memory (or swaps out an existing page). 5. OS reads the missing page into the free frame. 6. OS updates the page table. 7. OS restarts the process.

6.  **Consider a system with a 32-bit virtual address space, a 4KB page size, and a 30-bit physical address space. How many bits are used for the page number and offset in the virtual address? How many bits are used for the frame number in the physical address?**
    *   *Answer:*
        *   Page size = 4KB = 2^12 bytes. Offset requires 12 bits.
        *   Virtual address: 32 bits. Page number = 32 bits - 12 bits = 20 bits.
        *   Physical address: 30 bits. Frame number = 30 bits - 12 bits = 18 bits.

7.  **Explain the concept of "demand paging" and its advantages.**
    *   *Answer:* Demand paging is a virtual memory technique where pages are only loaded into physical memory when they are actually needed (on demand). This means pages are only loaded when they are referenced for the first time or when they are swapped back in from secondary storage after being swapped out. The advantages include increased program size capability, efficient memory usage (only actively used pages occupy RAM), and reduced I/O overhead.

---
