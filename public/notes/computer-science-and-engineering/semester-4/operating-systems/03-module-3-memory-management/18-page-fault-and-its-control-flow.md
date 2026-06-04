---
title: "page fault and its control flow"
subject: "OPERATING SYSTEMS"
module: "Module 3: Memory management  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8afc6"
status: "completed"
scrapedAt: "2026-05-20T16:14:25.410Z"
---
# OPERATING SYSTEMS - MODULE 3: MEMORY MANAGEMENT - PAGE FAULT AND ITS CONTROL FLOW

## Learning Outcomes:

*   Understand the concept of a page fault.
*   Explain the reasons why a page fault occurs.
*   Describe the steps involved in the page fault handling process.
*   Discuss the impact of page faults on system performance.
*   Identify various page replacement algorithms and their influence on page fault frequency.

## 1. Introduction to Page Faults

*   **What is a Page Fault?**
    *   A page fault is an exception (or interrupt) that occurs when a program tries to access a page of memory that is mapped in its virtual address space, but that page is currently not present in physical memory (RAM). In other words, the desired page is on disk.

*   **Key Concepts:**
    *   **Virtual Address Space:**  The logical view of memory presented to a process.  Each process has its own virtual address space.
    *   **Physical Memory (RAM):** The actual hardware memory available in the system.
    *   **Page Table:** A data structure used by the operating system to translate virtual addresses to physical addresses. Each entry in the page table maps a virtual page to a physical frame (or indicates that the page is not in memory).
    *   **Page:** A fixed-size block of virtual memory.
    *   **Frame:** A fixed-size block of physical memory. The size of a page and a frame are the same.
    *   **Present/Absent Bit:**  A bit in the page table entry that indicates whether the page is currently in physical memory (present) or resides on disk (absent).

## 2. Reasons for Page Faults

*   **Invalid Memory Access:**
    *   The process attempts to access a virtual address that is not mapped in its page table at all (e.g., accessing an address outside the process's allocated memory range). This usually indicates a programming error.

*   **Page Not Present:**
    *   The process attempts to access a valid virtual address, but the corresponding page table entry indicates that the page is not currently loaded into physical memory (Present/Absent bit is set to "absent"). This is the most common cause of page faults in a demand paging system. The page is on disk and needs to be brought into RAM.
    *   Reasons a valid page might not be present in physical memory:
        *   **Demand Paging:** Pages are only loaded into memory when they are actually needed (on demand). This is a common technique to improve memory utilization and allows processes to run even if their entire virtual address space cannot fit into physical memory.
        *   **Page Replacement:** When physical memory is full, the operating system might swap out (write to disk) a page that is not currently being actively used to make room for a new page.

*   **Protection Fault:**
    *   The process attempts to access a page in a way that violates its assigned protection permissions (e.g., trying to write to a read-only page or execute data as code).

## 3. Page Fault Handling Process (Control Flow)

This describes the sequence of events that occur when a page fault happens:

1.  **Process Generates a Virtual Address:**  The CPU attempts to access memory using a virtual address.

2.  **MMU Translation:** The Memory Management Unit (MMU) attempts to translate the virtual address to a physical address using the page table.

3.  **Page Fault Detection:** The MMU finds that the page table entry for the requested page indicates it is not present in memory (Present/Absent bit is 0).  This triggers a page fault exception.

4.  **Trap to the Operating System:** The CPU traps to the operating system's kernel mode.  Control is transferred to the page fault handler.

5.  **Page Fault Handler:** The OS's page fault handler performs the following actions:
    *   **Verify the Fault:**  Confirms that the fault is a valid page fault (e.g., the virtual address is within the process's address space and not a protection violation).  If the fault is invalid, the process is terminated.
    *   **Find a Free Frame:**  Locates a free frame (physical memory block) in RAM.
        *   If no free frame exists, a page replacement algorithm (see section 5) is used to select a victim page to be swapped out.
    *   **Swap Out Victim Page (if necessary):** If a victim page was chosen, its contents are written back to the backing store (usually the hard disk), updating the page table accordingly.  Crucially, if the victim page was *dirty* (modified since it was last loaded from disk), it *must* be written back.  If it was clean, it can be discarded.
    *   **Read the Requested Page from Disk:**  The requested page is read from its location on the disk (backing store) into the free frame.
    *   **Update the Page Table:**  The page table entry for the requested page is updated to reflect its new location in physical memory (the frame number) and the Present/Absent bit is set to 1.  Access permission bits may also be updated.

6.  **Restart the Instruction:** The operating system returns control to the process. The instruction that caused the page fault is re-executed.  Since the page is now in memory, the MMU can successfully translate the virtual address to a physical address, and the program can continue.

**Diagrammatic Representation:**

```
Process -> Virtual Address -> MMU -> Page Table -> Page Fault (if page not present) ->
OS Page Fault Handler -> Find Free Frame (possibly replace a page) -> Read page from disk ->
Update Page Table -> Restart Faulting Instruction -> MMU -> Physical Address -> Process continues
```

## 4. Impact of Page Faults on System Performance

*   **Increased Latency:** Handling a page fault is significantly slower than accessing memory directly from RAM because it involves disk I/O operations. Disk I/O is orders of magnitude slower than memory access.
*   **Reduced Throughput:** Frequent page faults (thrashing, discussed below) can significantly reduce system throughput because the CPU spends more time waiting for disk I/O operations to complete than executing instructions.
*   **Overhead:**  Page fault handling introduces overhead due to the operating system's involvement in the process, including context switching, page table updates, and disk I/O management.
*   **Thrashing:**  A condition where the system spends most of its time swapping pages in and out of memory, with very little actual processing being done.  This occurs when the system doesn't have enough physical memory to hold the actively used pages of the running processes. The page fault rate becomes extremely high.

## 5. Page Replacement Algorithms and Their Influence on Page Fault Frequency

When physical memory is full, the OS must choose a page to replace when a new page needs to be brought into memory.  The algorithm used to select the victim page significantly affects the page fault rate.

*   **Optimal (OPT) Page Replacement:**
    *   **Description:** Replaces the page that will *not* be used for the longest period of time in the future.
    *   **Characteristics:**  Produces the lowest possible page fault rate for a fixed number of frames.
    *   **Practicality:**  Unrealistic to implement in practice because it requires knowledge of future memory accesses. Used primarily as a benchmark for comparing other algorithms.

*   **First-In, First-Out (FIFO) Page Replacement:**
    *   **Description:** Replaces the page that has been in memory for the longest time, regardless of how frequently it is used.
    *   **Characteristics:** Simple to implement, but can lead to poor performance if a frequently used page happens to be the oldest.  Suffers from Belady's Anomaly (increasing the number of frames can sometimes *increase* the page fault rate).

*   **Least Recently Used (LRU) Page Replacement:**
    *   **Description:** Replaces the page that has not been used for the longest period of time. Assumes that pages that have been used recently are more likely to be used again in the near future.
    *   **Characteristics:**  Generally performs well, approaching the performance of the optimal algorithm.  More complex to implement than FIFO, as it requires keeping track of the last time each page was accessed.  Can be approximated in various ways.

*   **Least Frequently Used (LFU) Page Replacement:**
    *   **Description:** Replaces the page that has been used the least frequently.
    *   **Characteristics:**  Can perform poorly if a page was used heavily early in its lifespan but is no longer needed.

*   **Most Recently Used (MRU) Page Replacement:**
        * **Description:** Replaces the page that has been most recently used.
        * **Characteristics:** Can be useful in specific scenarios where pages are used intensely for a short duration, followed by a longer period of inactivity. Generally performs poorly compared to LRU.

*   **Second-Chance Page Replacement:**
    *   **Description:**  A modification of FIFO that improves performance.  Each page is given a "reference bit."  When a page is selected for replacement, its reference bit is checked. If the reference bit is 0, the page is replaced. If the reference bit is 1, the reference bit is cleared (set to 0), and the page is given a "second chance" by being moved to the back of the FIFO queue.

**Impact on Page Fault Frequency:**  A good page replacement algorithm strives to minimize the page fault rate by selecting victim pages that are least likely to be needed in the near future. LRU generally performs well, while FIFO and LFU can suffer from high page fault rates under certain workloads.  The optimal algorithm provides a lower bound on the page fault rate, but is not practically implementable.

## 6. Practice Questions & Exercises

1.  **Question:** Explain the difference between a page fault and a segmentation fault.

    **Answer:** A page fault occurs when a valid virtual address (within the process's address space) refers to a page that is not currently in physical memory. A segmentation fault occurs when a process tries to access a virtual address that is *not* mapped in its page table, indicating a memory access violation.

2.  **Question:** What is demand paging, and how does it relate to page faults?

    **Answer:** Demand paging is a memory management technique where pages are only loaded into physical memory when they are actually needed (on demand). When a process attempts to access a page that is not currently in memory, a page fault occurs, triggering the operating system to load the page from disk.

3.  **Question:** Describe the sequence of steps involved in handling a page fault.

    **Answer:** (See section 3 above)

4.  **Question:** Why is handling a page fault considered a "slow" operation?

    **Answer:** Because it involves disk I/O, which is significantly slower than accessing memory directly from RAM.

5.  **Question:** Explain the concept of thrashing. What causes thrashing, and how can it be mitigated?

    **Answer:** Thrashing is a condition where the system spends most of its time swapping pages in and out of memory, with very little actual processing being done.  It's caused by insufficient physical memory to hold the actively used pages of the running processes, leading to a high page fault rate.  It can be mitigated by:
    *   Increasing the amount of physical memory (RAM).
    *   Using a better page replacement algorithm (e.g., LRU).
    *   Reducing the degree of multiprogramming (running fewer processes concurrently).
    *   Using a working-set model to allocate memory based on the process's needs.

6.  **Question:** Given the following page reference string and number of frames, calculate the number of page faults for FIFO, LRU, and Optimal page replacement algorithms:

    Page Reference String: `1 2 3 4 1 2 5 1 2 3 4 5`
    Number of Frames: 3

    **Answer:** (You would work through each algorithm step-by-step, tracking the contents of the frames and marking page faults.)  This exercise is best done manually.  The results should be:

    *   FIFO: 9 page faults
    *   LRU: 10 page faults
    *   Optimal: 7 page faults

7.  **Question:**  What is the purpose of the "dirty bit" associated with a page table entry? When is this bit used?

    **Answer:** The dirty bit indicates whether the page has been modified since it was last loaded from disk. It is used during page replacement. If the victim page is dirty (dirty bit is set), it must be written back to disk before being replaced. If the victim page is clean (dirty bit is clear), it doesn't need to be written back (since the copy on disk is up-to-date).

## 7. Important Points to Remember

*   Page faults are a fundamental part of demand paging.
*   Efficient page replacement algorithms are crucial for minimizing page fault rates.
*   Thrashing can severely degrade system performance.
*   Understanding the page fault handling process is essential for debugging memory-related issues.
*   The page table is the core data structure for virtual to physical address translation and page fault management.
