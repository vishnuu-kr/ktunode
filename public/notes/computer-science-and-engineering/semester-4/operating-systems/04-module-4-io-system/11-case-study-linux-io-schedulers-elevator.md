---
title: "Case study : Linux I/O schedulers - Elevator"
subject: "OPERATING SYSTEMS"
module: "Module 4: I/O system:"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8afd4"
status: "completed"
scrapedAt: "2026-05-20T16:14:35.867Z"
---
## Operating Systems: Module 4 - I/O System: Linux I/O Schedulers - Elevator

**Learning Outcomes:**

*   Understand the purpose and necessity of I/O schedulers.
*   Describe the basic principles of the Elevator scheduling algorithm.
*   Explain how the Elevator algorithm optimizes disk I/O.
*   Analyze the advantages and disadvantages of the Elevator scheduler.
*   Compare the Elevator scheduler to other common I/O schedulers.
*   Explain the historical significance of the Elevator scheduler in Linux.

**1. Introduction to I/O Schedulers:**

*   **Definition:** I/O schedulers are kernel components that manage and reorder I/O requests to optimize disk performance. They aim to minimize seek time, latency, and improve overall system throughput.

*   **Why are they needed?**
    *   **Disk Access Characteristics:** Hard drives have significant seek times (moving the read/write head) and rotational latency (waiting for the correct sector to spin under the head).  These latencies are much slower than CPU processing speeds.
    *   **Unpredictable I/O Requests:** I/O requests from multiple processes can arrive in a seemingly random order, leading to inefficient disk head movement and decreased performance.
    *   **Starvation:**  Without scheduling, some I/O requests might be continuously delayed (starved) if other requests are constantly arriving.

*   **Goals of I/O Schedulers:**
    *   **Minimize Seek Time:**  Reduce the distance and time the disk head needs to travel between requests.
    *   **Maximize Throughput:** Increase the number of I/O operations completed per unit of time.
    *   **Fairness:** Ensure that all processes receive a fair share of disk bandwidth and prevent starvation.
    *   **Prioritization:**  Prioritize certain types of I/O requests (e.g., interactive processes) to improve system responsiveness.

*   **Kernel Space Operation:** I/O schedulers operate within the kernel space, intercepting I/O requests before they are sent to the disk controller.

**2. The Elevator (SCAN) Scheduling Algorithm:**

*   **Core Principle:** The Elevator algorithm, also known as SCAN, mimics the behavior of an elevator.  It services requests in one direction until it reaches the end of the disk and then reverses direction.

*   **Algorithm Steps:**
    1.  Maintain a queue of pending I/O requests.
    2.  Determine the current direction of disk head movement (inward or outward).
    3.  Service all requests in the current direction until the last request in that direction is serviced.
    4.  Reverse direction and continue servicing requests in the opposite direction.

*   **Disk Head Movement:** The disk head sweeps back and forth across the disk surface, like an elevator moving up and down a building.

*   **Example:**
    *   Consider a disk with cylinders 0-199. The current head position is at cylinder 100 and moving towards cylinder 199.
    *   The queue of pending requests is: 50, 150, 20, 80, 170, 190.
    *   The Elevator algorithm would service the requests in the following order: 150, 170, 190, 80, 50, 20.

**3. Optimizing Disk I/O with the Elevator Algorithm:**

*   **Seek Time Reduction:** By servicing requests in a sequential manner along the disk, the Elevator algorithm significantly reduces the total seek time compared to servicing requests in a random order.

*   **Reduced Rotational Latency:** While not directly addressing rotational latency, by servicing requests in a contiguous manner, the chances of encountering requests that are already close to the head's position increases, effectively indirectly reducing rotational latency.

*   **Improved Throughput:** Lower seek times contribute directly to higher I/O throughput, meaning more operations completed in a given period.

*   **Less Head Movement:** It minimizes the number of abrupt direction changes of the disk head, which improves longevity of the disk drive.

**4. Advantages and Disadvantages of the Elevator Scheduler:**

*   **Advantages:**
    *   **Simplicity:** The algorithm is relatively straightforward to implement.
    *   **Reduced Seek Time:** Significant reduction in seek time compared to FCFS or random scheduling.
    *   **Increased Throughput:** Higher throughput compared to naive scheduling methods.
    *   **Fairness:** Provides better fairness compared to FCFS, as no request is indefinitely delayed.

*   **Disadvantages:**
    *   **Longer Wait Time for Requests at the Ends:** Requests located near the ends of the disk cylinders may experience longer wait times, especially if the head is currently moving in the opposite direction.
    *   **Not Truly Fair:** Requests at the center of the disk are serviced more frequently than those at the edges.  This is not perfectly fair.
    *   **Doesn't Consider Request Priority:** Basic Elevator doesn't inherently prioritize requests based on importance (e.g., those from critical system processes).
    *   **May not be optimal for modern SSDs:** SSDs have near-zero seek times, therefore algorithms aimed at minimizing seek time are not relevant.

**5. Comparison to Other I/O Schedulers:**

*   **FCFS (First-Come, First-Served):**
    *   Simplest scheduler.  Requests are serviced in the order they arrive.
    *   Leads to high seek times and poor performance.
    *   Unfair, as requests arriving at a bad time might suffer extreme delays.
    *   **Elevator Advantage:** Significantly better seek time and throughput.

*   **SSTF (Shortest Seek Time First):**
    *   Serves the request with the shortest seek time from the current head position.
    *   Minimizes seek time locally.
    *   Can lead to starvation of requests far from the current head position.
    *   **Elevator Advantage:** Provides better fairness than SSTF by preventing starvation, though at the cost of potentially slightly higher overall seek time.

*   **Circular SCAN (C-SCAN):**
    *   Similar to Elevator but only moves in one direction.
    *   After reaching the end of the disk, the head immediately returns to the beginning without servicing any requests on the return trip.
    *   Provides more uniform wait times than Elevator.
    *   **Elevator Advantage:** Elevator may be more efficient in environments with consistently high request rates across the entire disk space.

*   **CFQ (Completely Fair Queuing):**
    *   Assigns each process its own I/O queue and allocates disk bandwidth proportionally.
    *   Designed to provide fair I/O access across multiple processes.
    *   **Elevator Disadvantage:** Elevator is simpler and may be more suitable for systems where fairness across processes is not the primary concern.  CFQ is generally preferred for fairness, especially in multi-user environments.

*   **NOOP (No Operation):**
    *   Simple FIFO queue. Minimal overhead.
    *   Suitable for devices with no mechanical parts (e.g., SSDs) where seek time is negligible.
    *   **Elevator Disadvantage:** Unnecessary overhead for SSDs. NOOP is generally the preferred choice for these devices.

*   **Deadline Scheduler:**
    *   Attempts to guarantee a start service time for a request.  Maintains a sorted queue by deadline and gives priority to the request closest to its deadline.
    *   **Elevator Disadvantage:** Doesn't consider deadlines so can be less suitable than deadline schedulers for real time applications or latency critical tasks.

**6. Historical Significance of the Elevator Scheduler in Linux:**

*   **Early Linux Kernel:** The Elevator scheduler was a foundational I/O scheduler in early versions of the Linux kernel.

*   **Improved Disk Performance:** It significantly improved disk performance compared to the simple FCFS scheduler.

*   **Evolution of I/O Schedulers:** While it has been largely replaced by more sophisticated schedulers like CFQ and Deadline in many modern Linux distributions for HDDs, the Elevator algorithm played a crucial role in understanding I/O scheduling principles and paved the way for more advanced techniques.

*   **Legacy and Learning:** Studying the Elevator algorithm provides a valuable understanding of the basic principles behind I/O scheduling. It's still relevant for understanding the historical context of Linux I/O management.

**7. Important Points to Remember:**

*   I/O schedulers are essential for optimizing disk performance.
*   The Elevator algorithm reduces seek time by servicing requests in a sequential manner.
*   Elevator has both advantages (simplicity, reduced seek time) and disadvantages (longer wait times for requests at the ends of the disk).
*   Modern Linux distributions use more advanced I/O schedulers for HDDs (CFQ, Deadline) and NOOP for SSDs.
*   Elevator remains a valuable study case for understanding I/O scheduling principles.

**8. Practice Questions/Exercises:**

1.  **Question:** Explain the core principle behind the Elevator I/O scheduling algorithm.
    *   **Answer:** The Elevator algorithm services I/O requests in one direction until it reaches the end of the disk and then reverses direction, minimizing seek time by reducing the distance the disk head needs to travel.

2.  **Question:** What is a major disadvantage of the SSTF I/O scheduling algorithm that the Elevator algorithm addresses?
    *   **Answer:** SSTF can lead to starvation of requests that are far from the current disk head position, while the Elevator algorithm prevents starvation by ensuring that all requests are eventually serviced.

3.  **Question:**  Why is the Elevator algorithm generally not used for SSDs? What is a more appropriate scheduler for SSDs?
    *   **Answer:** SSDs have near-zero seek times, so algorithms aimed at minimizing seek time (like Elevator) are not necessary. The NOOP scheduler is more appropriate for SSDs because it introduces minimal overhead.

4.  **Question:** Consider a disk with cylinders 0 to 99. The current head position is at cylinder 40 and moving towards cylinder 99. The pending requests are: 20, 60, 80, 10, 50.  In what order would the Elevator algorithm service these requests?
    *   **Answer:** 60, 80, 50, 20, 10.

5.  **Question:**  Explain how the Elevator scheduler attempts to achieve fairness in disk I/O scheduling.  Does it achieve perfect fairness? Why or why not?
    *   **Answer:** Elevator achieves fairness by preventing starvation; all requests will eventually be serviced as the head sweeps back and forth. However, it does *not* achieve perfect fairness. Requests located in the center of the disk are likely to be serviced more often than requests near the edges, as the head will pass over the center more frequently.

**9. Further Reading:**

*   Silberschatz, Galvin, Gagne, "Operating System Concepts".
*   Online documentation about Linux I/O schedulers (search for "Linux I/O schedulers" on kernel.org or other Linux resources).
