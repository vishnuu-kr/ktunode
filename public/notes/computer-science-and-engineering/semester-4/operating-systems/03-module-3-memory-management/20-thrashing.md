---
title: "Thrashing"
subject: "OPERATING SYSTEMS"
module: "Module 3: Memory management  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8afc8"
status: "completed"
scrapedAt: "2026-05-20T16:14:26.835Z"
---
## OPERATING SYSTEMS - Module 3: Memory Management - Topic: Thrashing

**Learning Outcomes:**

*   Understand the concept of thrashing in operating systems.
*   Identify the causes of thrashing.
*   Explain the performance impact of thrashing.
*   Describe techniques to prevent or mitigate thrashing.
*   Relate thrashing to concepts like working set and page fault frequency.

**1. Introduction to Thrashing**

*   **Definition:** Thrashing is a condition in operating systems where the system spends more time swapping (paging) pages between memory and disk than executing actual instructions. This results in severe performance degradation.  The CPU utilization drops drastically, even close to zero in extreme cases.
*   **Analogy:** Imagine a chef trying to make a complicated dish but constantly running back and forth between the refrigerator and the stove to get ingredients. They spend more time moving than actually cooking. That's thrashing.
*   **Key Idea:** A process is *thrashing* when it doesn't have "enough" pages to satisfy its working set.
*   **Impact:** Thrashing significantly reduces system throughput (the amount of work done in a given time) and increases the average turn-around time (the time it takes for a process to complete).

**2. Causes of Thrashing**

*   **Insufficient Memory:** The primary cause is a lack of sufficient physical memory to accommodate the memory requirements of all active processes. When available memory is too small, processes constantly request more pages, leading to a high page fault rate.
*   **Excessive Multiprogramming:**  When the degree of multiprogramming (the number of processes running concurrently) is too high, processes compete fiercely for limited memory resources. Each process gets a smaller share of memory, increasing the likelihood of page faults and thrashing.
*   **Global Page Replacement Policies:** Global page replacement algorithms (like FIFO or LRU applied globally) can lead to thrashing because a faulting process can steal pages from other processes, even if those pages are actively being used. This triggers a cascade of page faults.
*   **Poor Locality of Reference:**  If processes access memory locations randomly instead of following the principle of locality (temporal and spatial locality), the page fault rate will be higher, making the system more susceptible to thrashing.
    *   **Temporal Locality:**  Recently accessed memory locations are likely to be accessed again soon.
    *   **Spatial Locality:**  Memory locations near a recently accessed location are likely to be accessed soon.
*   **Large Working Sets:** If processes have very large working sets (the set of pages a process needs to execute for a reasonable period), the available memory might not be able to hold them all, leading to thrashing.

**3. Performance Impact of Thrashing**

*   **High Page Fault Rate:** Thrashing leads to an exponentially increasing page fault rate, as processes spend more time waiting for pages to be loaded from disk.
*   **Low CPU Utilization:** Since processes are constantly waiting for page faults to be resolved, the CPU remains idle much of the time. This is a key indicator of thrashing.  The CPU isn't processing instructions, it's waiting on I/O.
*   **Reduced Throughput:** The overall amount of useful work the system can perform decreases dramatically.
*   **Increased Turnaround Time:** The time it takes for individual processes to complete increases significantly because they spend a large portion of their time waiting for pages to be swapped in and out of memory.
*   **System Instability:** In severe cases, thrashing can lead to system instability and even crashes.

**4. Techniques to Prevent or Mitigate Thrashing**

*   **Local Page Replacement Policies:** Using local page replacement algorithms, where a process can only steal pages from itself, can limit the impact of one process's high page fault rate on other processes.  Examples include FIFO and LRU applied *locally* to each process.
*   **Working-Set Model:**
    *   **Definition:**  The working set is the set of pages that a process is actively using at a given time.  The *size* of the working set is denoted by WSS<sub>i</sub> for process *i*.
    *   **Concept:**  Monitor the working set of each process and ensure that enough memory is allocated to accommodate it. If a process's working set exceeds the available memory, the process may be suspended (swapped out) to reduce the degree of multiprogramming.
    *   **Calculating Working Set:** Difficult in practice. One approximation is to monitor the number of page references in a sliding window of time.
*   **Page Fault Frequency (PFF) Control:**
    *   **Concept:** Monitor the page fault frequency of each process.
    *   **Action:**
        *   If the PFF is too high, it indicates that the process needs more memory. Allocate more memory to the process (if available).
        *   If the PFF is too low, it indicates that the process may have more memory than it needs. Reclaim some memory from the process for other processes.
    *   **Thresholds:**  Define upper and lower thresholds for acceptable PFF.  Adjust memory allocation based on these thresholds.
*   **Reducing the Degree of Multiprogramming:**  Lowering the number of processes running concurrently can reduce the competition for memory resources.  This can be achieved by swapping out one or more processes (temporarily moving them to disk).
*   **Increasing Physical Memory:** The most straightforward solution is to add more RAM to the system. This provides more memory for processes, reducing the need for excessive paging.
*   **Using a Good Page Replacement Algorithm:**  While global algorithms can be problematic, more sophisticated algorithms like LRU (Least Recently Used) generally perform better than simpler algorithms like FIFO (First-In, First-Out). However, LRU can still suffer from thrashing under certain workloads.
*   **Pre-paging:** Before a process starts execution (or resumes after being swapped out), pre-load the pages that are likely to be needed into memory.  This reduces the initial burst of page faults.

**5. Working Set and Page Fault Frequency - Deeper Dive**

*   **Relationship between Working Set and Thrashing:** If the sum of the working set sizes of all processes (∑WSS<sub>i</sub>) exceeds the total available memory, thrashing is likely to occur.
*   **Relationship between Page Fault Frequency and Thrashing:**  A high average PFF across all processes is a strong indicator of thrashing. The system is spending excessive time handling page faults instead of executing instructions.
*   **Working Set Challenges:** Accurately determining the working set of a process in real-time is computationally expensive. Approximation techniques are used, such as monitoring page accesses within a specific time window.
*   **PFF Challenges:** Choosing appropriate thresholds for PFF is crucial. Too high a threshold might lead to unnecessary memory allocation, while too low a threshold might not prevent thrashing effectively.

**6. Examples**

*   **Example 1: Small Memory, Many Processes:** Imagine a computer with 4 GB of RAM running 10 processes, each needing at least 1 GB of RAM to run efficiently. Since the total memory requirement (10 GB) exceeds the available memory (4 GB), the system will likely thrash.
*   **Example 2: Global LRU and Loop:** A process enters a loop that accesses a large number of pages, exceeding the allocated memory. With global LRU, pages from other processes are continuously replaced, leading to a high page fault rate for all processes, resulting in thrashing.
*   **Example 3: Database Server:** A database server handling numerous concurrent requests with large data sets can easily experience thrashing if the database buffer cache (which stores frequently accessed data in memory) is too small and the system uses a global page replacement policy.

**7. Important Points to Remember**

*   Thrashing is a severe performance problem in operating systems.
*   Insufficient memory and excessive multiprogramming are the primary causes.
*   CPU utilization dropping to near zero is a key indicator of thrashing.
*   Techniques like local page replacement, the working-set model, and PFF control can help prevent or mitigate thrashing.
*   There is a trade-off between the degree of multiprogramming and the likelihood of thrashing. Increasing the degree of multiprogramming can improve CPU utilization to a certain point, but beyond that point, it can lead to thrashing and a sharp decline in performance.

**8. Practice Questions/Exercises**

1.  **Question:** Explain the concept of thrashing in operating systems. What are its primary causes?
    *   **Answer:**  Thrashing occurs when the system spends more time swapping pages between memory and disk than executing instructions, leading to very low CPU utilization and throughput. The primary causes are insufficient physical memory and excessive multiprogramming.
2.  **Question:** How does a high page fault rate relate to thrashing?
    *   **Answer:** A high page fault rate is a direct consequence of thrashing. When processes don't have enough memory to hold their working sets, they constantly request pages that are not in memory, leading to numerous page faults.
3.  **Question:** Describe two techniques that can be used to prevent or mitigate thrashing.
    *   **Answer:**
        *   **Working-Set Model:**  Ensure that each process has enough memory to hold its working set. If not, suspend the process.
        *   **Page Fault Frequency (PFF) Control:**  Monitor the PFF of each process and dynamically adjust memory allocation based on predefined thresholds.
4.  **Question:**  What is the difference between global and local page replacement policies, and how do they impact thrashing?
    *   **Answer:** A global page replacement policy allows a process to replace pages from any frame in the system, even those allocated to other processes.  A local page replacement policy only allows a process to replace pages from its own allocated frames.  Global policies can exacerbate thrashing by causing a cascade of page faults as processes steal pages from each other.  Local policies limit the impact of thrashing to individual processes.
5.  **Question:**  Explain how increasing the degree of multiprogramming can sometimes lead to thrashing.
    *   **Answer:** Increasing the degree of multiprogramming means running more processes concurrently. If the total memory requirements of all processes exceed the available physical memory, each process receives a smaller share of memory. This leads to a higher page fault rate and can trigger thrashing if the processes are constantly swapping pages.

These notes provide a comprehensive overview of the topic of thrashing in operating systems, covering its causes, impact, and mitigation strategies. Understanding these concepts is essential for designing and managing efficient operating systems. Remember to consider the context and specific system configurations when addressing thrashing issues in practice.
