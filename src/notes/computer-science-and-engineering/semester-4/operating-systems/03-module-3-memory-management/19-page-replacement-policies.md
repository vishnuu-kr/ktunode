---
title: "page replacement policies"
subject: "OPERATING SYSTEMS"
module: "Module 3: Memory management  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8afc7"
status: "completed"
scrapedAt: "2026-05-20T16:14:26.118Z"
---
## OPERATING SYSTEMS - Module 3: Memory Management - Page Replacement Policies

**Learning Outcomes:**

*   Understand the need for page replacement policies in demand paging.
*   Describe and compare different page replacement algorithms (FIFO, Optimal, LRU, Approximate LRU: Clock, Enhanced Second Chance).
*   Analyze the performance of different page replacement algorithms.
*   Explain the concept of thrashing and its causes, and techniques for preventing it.
*   Understand the concept of frame allocation and global vs. local replacement.

---

**1. Need for Page Replacement Policies:**

*   **Demand Paging:** Operates on the principle of loading pages into memory only when they are needed.
*   **Limited Memory:** Physical memory is finite. When a page is needed and no free frames are available, a page must be replaced.
*   **Page Fault:** Occurs when the CPU attempts to access a page that is not currently in memory.
*   **Page Replacement Policy:** Decides which page to remove from memory when a page fault occurs. The goal is to minimize the number of page faults and maximize CPU utilization. It attempts to bring frequently used pages into memory and keep them there.  The best policies aim to replace pages that are least likely to be used in the near future.

**Key Concepts:**

*   **Frame:** A fixed-size block of physical memory.
*   **Page:** A fixed-size block of logical memory.
*   **Resident Set:** The set of pages residing in physical memory for a process.
*   **Page Fault Rate:** The number of page faults divided by the total number of memory accesses. A lower page fault rate is desirable.

---

**2. Page Replacement Algorithms:**

*   **2.1 First-In, First-Out (FIFO) Page Replacement:**

    *   **Principle:** Replaces the oldest page in memory, regardless of how often it's being used.
    *   **Implementation:** Uses a FIFO queue to track the order in which pages were loaded into memory.
    *   **Advantages:** Simple to implement.
    *   **Disadvantages:** Performance can be poor.  A frequently used page might be replaced simply because it was loaded into memory earlier. Suffers from *Belady's Anomaly*.
    *   **Belady's Anomaly:**  The phenomenon where increasing the number of available frames can *increase* the number of page faults. This is rare but can occur with FIFO.

    **Example:**

    ```
    Reference String: 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5
    Number of Frames: 3

    Frames:
    Frame 1: 1  2  3  4  1  2  5  1  2  3  4  5
    Frame 2:    2  3  4  1  2  5  1  2  3  4  5
    Frame 3:       3  4  1  2  5  1  2  3  4  5
    Page Faults: X  X  X  X     X  X     X  X  X

    Page Fault Count: 9
    ```

*   **2.2 Optimal Page Replacement (OPT or MIN):**

    *   **Principle:** Replaces the page that will not be used for the longest period of time in the future.
    *   **Implementation:** Requires knowledge of the entire reference string in advance (impractical for real-world OS).
    *   **Advantages:** Lowest possible page fault rate for a given reference string.
    *   **Disadvantages:** Not implementable in practice due to the need for future knowledge.  Serves as a benchmark for other algorithms.

    **Example:**

    ```
    Reference String: 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5
    Number of Frames: 3

    Frames:
    Frame 1: 1  2  3  4  1  2  5  1  2  3  4  5
    Frame 2:    2  3     2  5  1  2  3  4  5
    Frame 3:       3  4     5        4  5
    Page Faults: X  X  X  X     X  X        X  X

    Page Fault Count: 7
    ```

*   **2.3 Least Recently Used (LRU) Page Replacement:**

    *   **Principle:** Replaces the page that has not been used for the longest period of time in the past.  Assumes that pages used recently are likely to be used again soon (locality of reference).
    *   **Implementation:** Requires tracking the usage history of each page.  Can be implemented using a counter or a stack.
        *   **Counter Implementation:** Every time a page is referenced, the clock is incremented and assigned to the page. The page with the lowest clock value is replaced.  Expensive.
        *   **Stack Implementation:**  The most recently used page is moved to the top of the stack.  The page at the bottom of the stack is the least recently used.  Expensive.
    *   **Advantages:** Generally performs well and approximates the optimal algorithm.
    *   **Disadvantages:**  Expensive to implement due to the overhead of tracking page usage.

    **Example:**

    ```
    Reference String: 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5
    Number of Frames: 3

    Frames:
    Frame 1: 1  2  3  4  1  2  5  1  2  3  4  5
    Frame 2:    2  3  4     2  5  1  2  3  4  5
    Frame 3:       3  4     5        4  5
    Page Faults: X  X  X  X     X  X     X  X  X  X

    Page Fault Count: 10
    ```

*   **2.4 Approximate LRU Algorithms:**

    *   **Rationale:** LRU is expensive to implement precisely, so approximate algorithms are used.

    *   **2.4.1 Clock Page Replacement (Second Chance):**

        *   **Principle:**  A circular queue of pages is maintained. Each page has a reference bit.
        *   **Implementation:** A pointer (clock hand) moves around the circular queue.
            1.  When a page fault occurs, the clock hand points to a page.
            2.  If the reference bit of that page is 0, the page is replaced.
            3.  If the reference bit is 1, the reference bit is set to 0 (giving the page a "second chance"), and the clock hand moves to the next page.
        *   **Advantages:** Simple to implement and less overhead than true LRU.
        *   **Disadvantages:**  Performance can be suboptimal compared to LRU.

    *   **2.4.2 Enhanced Second Chance Algorithm:**

        *   **Principle:**  Improves upon the basic clock algorithm by considering both the reference bit and the modify (dirty) bit. The dirty bit indicates whether the page has been modified since it was loaded into memory.
        *   **Categories for Replacement (in order of preference):**
            1.  (0, 0): Not recently used, not dirty.  Best candidate for replacement (no need to write back to disk).
            2.  (0, 1): Not recently used, dirty.  Replace, but the page must be written back to disk.
            3.  (1, 0): Recently used, not dirty. Give a second chance, set reference bit to 0.
            4.  (1, 1): Recently used, dirty. Give a second chance, set reference bit to 0.

        *   **Advantages:** Generally performs better than basic clock algorithm, especially when write-back is costly.
        *   **Disadvantages:** More complex to implement than the basic clock algorithm.

---

**3. Performance of Page Replacement Algorithms:**

*   **Evaluation Metrics:** Primary metric is the page fault rate.  Also consider overhead (implementation complexity, CPU time consumed by the algorithm).
*   **Factors Affecting Performance:**
    *   **Reference String:** The sequence of page requests significantly impacts performance.
    *   **Number of Frames:** More frames generally lead to fewer page faults.
    *   **Algorithm Selection:** The choice of algorithm makes a considerable difference.
*   **Algorithm Comparison:**
    *   **Optimal:** Best performance (lowest page fault rate), but not practical.
    *   **LRU:** Good performance, but high overhead.
    *   **Clock/Enhanced Second Chance:** Reasonable performance with lower overhead.
    *   **FIFO:** Simple, but often poor performance, susceptible to Belady's anomaly.

---

**4. Thrashing:**

*   **Definition:** A phenomenon where a process spends more time paging than executing.  The CPU utilization is very low.
*   **Causes:**
    *   **Insufficient Frames:** A process does not have enough frames to hold its frequently used pages.
    *   **Global Replacement:** When a page fault occurs, a page from *any* process can be replaced, even if that process needs the page.
    *   **High Degree of Multiprogramming:** Too many processes competing for limited memory.
*   **Detection:** Low CPU utilization, high disk I/O activity (constant paging).
*   **Prevention:**
    *   **Local Replacement:** When a page fault occurs, only replace a page from the same process that generated the fault. This limits the impact on other processes.
    *   **Increase Frames:** Increase the number of frames allocated to processes.
    *   **Working Set Model:** Monitor the working set (set of pages actively being used) for each process.  If a process's working set exceeds the available frames, suspend the process until more frames are available.
    *   **Page-Fault Frequency (PFF):**  Adjust the number of frames allocated to a process based on its page fault rate. If the page fault rate is too high, increase the number of frames; if it's too low, decrease the number of frames.
    *   **Load Control:** Reduce the degree of multiprogramming by swapping out one or more processes from memory.

**Key Concepts:**

*   **Working Set:** The set of pages a process is actively using at a given time. The working set changes over time.
*   **Locality of Reference:** The tendency for a process to access a relatively small set of pages frequently.

---

**5. Frame Allocation and Global vs. Local Replacement:**

*   **Frame Allocation:** Deciding how many frames to allocate to each process.
*   **Allocation Strategies:**
    *   **Equal Allocation:** Each process receives an equal share of frames.
    *   **Proportional Allocation:** Frames are allocated proportional to the process size.
    *   **Priority Allocation:** Frames are allocated based on the priority of the process.

*   **Global vs. Local Replacement:**

    *   **Global Replacement:** A page fault can cause a page from *any* process to be replaced. Generally leads to higher throughput but can cause thrashing. Often used when processes have variable memory needs.
    *   **Local Replacement:** A page fault can only cause a page belonging to the *same* process to be replaced. Less susceptible to thrashing, but can lead to lower CPU utilization if some processes are not using their allocated frames efficiently.  More suitable when predictability and fairness are important.

**Trade-offs:**

| Feature           | Global Replacement                             | Local Replacement                               |
| ----------------- | ----------------------------------------------- | --------------------------------------------- |
| **Scope**         | Pages can be replaced from any process.      | Pages can only be replaced from the same process. |
| **Throughput**    | Typically higher                                | Potentially lower if allocation is inefficient. |
| **Thrashing Risk** | Higher                                        | Lower                                         |
| **Complexity**    | Simpler to implement                             | More complex frame allocation strategies may be needed. |
| **Fairness**      | Potentially unfair; one process can hurt others | More fair in preventing one process from impacting others. |

---

**Practice Questions and Exercises:**

1.  **Consider the following page reference string: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1.  How many page faults would occur for the following replacement algorithms, assuming three frames?**
    *   FIFO
    *   Optimal
    *   LRU

    **Answers:**

    *   FIFO: 15
    *   Optimal: 9
    *   LRU: 12

2.  **Explain Belady's Anomaly and provide an example using FIFO.**

    **Answer:**  Belady's Anomaly is the counter-intuitive phenomenon where increasing the number of frames can *increase* the number of page faults.

    *   **Example:**
    *   Reference String: 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5
    *   3 Frames (as shown above): 9 page faults.
    *   4 Frames:

        ```
        Frames:
        Frame 1: 1  2  3  4  1  2  5  1  2  3  4  5
        Frame 2:    2  3  4     2  5  1  2  3  4  5
        Frame 3:       3  4     5        4  5
        Frame 4:          4        1           1
        Page Faults: X  X  X  X     X  X  X     X  X  X

        Page Fault Count: 10
        ```

3.  **Describe the difference between the Clock algorithm and the Enhanced Second Chance algorithm.**

    **Answer:** The Clock algorithm uses a single reference bit to approximate LRU, giving pages a "second chance" before replacement. The Enhanced Second Chance algorithm improves upon this by considering *both* the reference bit and the dirty bit.  This allows for prioritizing replacement of pages that are both not recently used *and* have not been modified, avoiding unnecessary write-backs to disk.

4.  **Explain the concept of thrashing and list three techniques to prevent it.**

    **Answer:** Thrashing occurs when a process spends more time paging than executing due to insufficient frames. Techniques to prevent it include:

    *   Local Replacement
    *   Working Set Model
    *   Page-Fault Frequency (PFF)

5.  **What are the advantages and disadvantages of global versus local page replacement?**

    **Answer:** (See table in section 5 above)

---

**Important Points to Remember:**

*   **Locality of Reference** is a fundamental principle underlying page replacement algorithms.  It assumes that processes tend to access pages in clusters.
*   **Optimal** page replacement provides a theoretical lower bound on page faults, but it's not practical.
*   **LRU** approximates Optimal but is expensive to implement precisely.
*   **Clock and Enhanced Second Chance** offer reasonable performance with lower overhead compared to LRU.
*   **FIFO** is simple but can suffer from poor performance and Belady's anomaly.
*   **Thrashing** is a severe performance problem caused by excessive paging.
*   **Global replacement** can lead to thrashing but often yields higher throughput than local replacement.
*   **The choice of page replacement algorithm** depends on the specific system requirements and the trade-offs between performance and overhead.
