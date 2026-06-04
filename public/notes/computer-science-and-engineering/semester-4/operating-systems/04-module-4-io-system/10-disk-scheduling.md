---
title: "disk scheduling"
subject: "OPERATING SYSTEMS"
module: "Module 4: I/O system:"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8afd3"
status: "completed"
scrapedAt: "2026-05-20T16:14:35.151Z"
---
# OPERATING SYSTEMS - Module 4: I/O System - Disk Scheduling

## Learning Outcomes:

*   Understand the role of disk scheduling in improving I/O performance.
*   Describe various disk scheduling algorithms (FCFS, SSTF, SCAN, C-SCAN, LOOK, C-LOOK).
*   Analyze the performance characteristics of different disk scheduling algorithms.
*   Explain the factors that influence the choice of a particular disk scheduling algorithm.
*   Calculate the total head movement for different scheduling algorithms given a request sequence.

## 1. Introduction to Disk Scheduling

*   **Role of Disk Scheduling:**
    *   Disk scheduling aims to optimize disk I/O performance by minimizing the seek time, which is the dominant factor in disk access time.  It's the process of deciding which disk I/O request to service next when multiple requests are pending.
    *   It's crucial for multi-programming systems where multiple processes compete for disk access.
    *   Improved disk access time directly translates to faster program execution and better overall system performance.

*   **Key Concepts:**
    *   **Disk Drive Components:**
        *   **Platters:** Circular disks that store data magnetically.  A disk typically has multiple platters.
        *   **Tracks:** Concentric circles on each platter where data is recorded.
        *   **Sectors:** Segments of a track.  The smallest unit of data that can be read or written.
        *   **Cylinder:**  A vertical stack of all the tracks having the same track number across all the platters.
        *   **Disk Head:** A device that reads and writes data to the disk surface. Each platter surface has its own read/write head.
        *   **Arm:**  The mechanism that moves the read/write heads across the disk surface.
    *   **Disk Access Time:** The time required to access data on a disk. It consists of three main components:
        *   **Seek Time:** The time it takes for the disk arm to move the head to the correct track (cylinder).  This is typically the most significant component.
        *   **Rotational Latency (or Rotational Delay):** The time it takes for the desired sector to rotate under the read/write head.  Average rotational latency is usually half of the time for one full rotation.
        *   **Transfer Time:** The time it takes to actually transfer the data between the disk and the memory.
    *   **I/O Request Information:** Each I/O request includes:
        *   The disk address (cylinder number, sector number).
        *   The operation to be performed (read or write).
        *   The memory address for transferring the data.

## 2. Disk Scheduling Algorithms

Here are the common disk scheduling algorithms, along with explanations, examples, and performance considerations:

*   **2.1 First-Come, First-Served (FCFS):**

    *   **Description:** Processes requests in the order they arrive.
    *   **Advantages:** Simple to implement, fair.
    *   **Disadvantages:** Not efficient; can lead to long seek times and significant head movement, especially if requests are for tracks far apart.  Often results in "elevator" behavior, moving from one end of the disk to the other.
    *   **Example:**
        *   Request sequence: 98, 183, 37, 122, 14, 124, 65, 67
        *   Initial head position: 53
        *   Total number of tracks: 0-199

        ```
        Sequence: 53 -> 98 -> 183 -> 37 -> 122 -> 14 -> 124 -> 65 -> 67
        Total head movement: |98-53| + |183-98| + |37-183| + |122-37| + |14-122| + |124-14| + |65-124| + |67-65|
                            = 45 + 85 + 146 + 85 + 108 + 110 + 59 + 2
                            = 640
        ```

*   **2.2 Shortest Seek Time First (SSTF):**

    *   **Description:** Selects the request closest to the current head position.  Minimizes the average seek time.
    *   **Advantages:** Reduces average seek time compared to FCFS.
    *   **Disadvantages:** Can cause starvation for requests far from the current head position.  Has higher variance in response time.  Requires knowing all requests in advance (which isn't always possible).
    *   **Example:**
        *   Request sequence: 98, 183, 37, 122, 14, 124, 65, 67
        *   Initial head position: 53
        *   Total number of tracks: 0-199

        ```
        Sequence: 53 -> 65 -> 67 -> 37 -> 14 -> 98 -> 122 -> 124 -> 183
        Total head movement: |65-53| + |67-65| + |37-67| + |14-37| + |98-14| + |122-98| + |124-122| + |183-124|
                            = 12 + 2 + 30 + 23 + 84 + 24 + 2 + 59
                            = 236
        ```

*   **2.3 SCAN (Elevator Algorithm):**

    *   **Description:** The disk arm moves in one direction (e.g., from 0 to 199), servicing requests along the way. When it reaches the end, it reverses direction and continues servicing requests.  Like an elevator.
    *   **Advantages:** Provides a more uniform wait time compared to SSTF.  Prevents starvation.
    *   **Disadvantages:** Longest wait time occurs for cylinders just visited by the arm.  Head has to travel to the end of the disk even if there are no requests at the end.
    *   **Example:**
        *   Request sequence: 98, 183, 37, 122, 14, 124, 65, 67
        *   Initial head position: 53
        *   Total number of tracks: 0-199
        *   Arm moves towards 0 (decreasing cylinder numbers) initially.

        ```
        Sequence: 53 -> 37 -> 14 -> 0 -> 65 -> 67 -> 98 -> 122 -> 124 -> 183
        Total head movement: |37-53| + |14-37| + |0-14| + |65-0| + |67-65| + |98-67| + |122-98| + |124-122| + |183-124|
                            = 16 + 23 + 14 + 65 + 2 + 31 + 24 + 2 + 59
                            = 236
        ```
        (If the arm moved towards 199 initially):

        ```
        Sequence: 53 -> 65 -> 67 -> 98 -> 122 -> 124 -> 183 -> 199 -> 14 -> 37
        Total head movement: |65-53| + |67-65| + |98-67| + |122-98| + |124-122| + |183-124| + |199-183| + |14-199| + |37-14|
                            = 12 + 2 + 31 + 24 + 2 + 59 + 16 + 185 + 23
                            = 354
        ```

*   **2.4 C-SCAN (Circular SCAN):**

    *   **Description:** Similar to SCAN, but when the arm reaches the end of the disk, it immediately returns to the beginning without servicing any requests on the return trip.  The head essentially "jumps" to the other end.  Provides a more uniform wait time than SCAN.
    *   **Advantages:** Provides a more uniform wait time than SCAN.
    *   **Disadvantages:** Still makes a full sweep even if there are no requests at one end.
    *   **Example:**
        *   Request sequence: 98, 183, 37, 122, 14, 124, 65, 67
        *   Initial head position: 53
        *   Total number of tracks: 0-199
        *   Arm moves towards 199 initially.

        ```
        Sequence: 53 -> 65 -> 67 -> 98 -> 122 -> 124 -> 183 -> 199 -> 0 -> 14 -> 37
        Total head movement: |65-53| + |67-65| + |98-67| + |122-98| + |124-122| + |183-124| + |199-183| + |0-199| + |14-0| + |37-14|
                            = 12 + 2 + 31 + 24 + 2 + 59 + 16 + 199 + 14 + 23
                            = 382
        ```

*   **2.5 LOOK:**

    *   **Description:** An optimized version of SCAN. The arm only moves as far as the furthest request in each direction.  It doesn't travel all the way to the end of the disk unless there's a request there.
    *   **Advantages:** Reduces unnecessary travel of the disk arm compared to SCAN.
    *   **Disadvantages:** More complex to implement than SCAN.
    *   **Example:**
        *   Request sequence: 98, 183, 37, 122, 14, 124, 65, 67
        *   Initial head position: 53
        *   Total number of tracks: 0-199
        *   Arm moves towards 0 initially. The furthest request in that direction is 14.

        ```
        Sequence: 53 -> 37 -> 14 -> 65 -> 67 -> 98 -> 122 -> 124 -> 183
        Total head movement: |37-53| + |14-37| + |65-14| + |67-65| + |98-67| + |122-98| + |124-122| + |183-124|
                            = 16 + 23 + 51 + 2 + 31 + 24 + 2 + 59
                            = 208
        ```

*   **2.6 C-LOOK:**

    *   **Description:** An optimized version of C-SCAN. The arm only moves as far as the furthest request in each direction.  It doesn't travel all the way to the end of the disk unless there's a request there, and it jumps back to the closest request in the other direction instead of all the way to the beginning.
    *   **Advantages:** Reduces unnecessary travel of the disk arm compared to C-SCAN.  Provides more uniform wait time than LOOK.
    *   **Disadvantages:** More complex to implement than C-SCAN.
    *   **Example:**
        *   Request sequence: 98, 183, 37, 122, 14, 124, 65, 67
        *   Initial head position: 53
        *   Total number of tracks: 0-199
        *   Arm moves towards 199 initially.

        ```
        Sequence: 53 -> 65 -> 67 -> 98 -> 122 -> 124 -> 183 -> 14 -> 37
        Total head movement: |65-53| + |67-65| + |98-67| + |122-98| + |124-122| + |183-124| + |14-183| + |37-14|
                            = 12 + 2 + 31 + 24 + 2 + 59 + 169 + 23
                            = 322
        ```

## 3. Performance Comparison and Analysis

| Algorithm   | Advantages                                           | Disadvantages                               | Potential Issues                 |
|-------------|-------------------------------------------------------|---------------------------------------------|-----------------------------------|
| FCFS        | Simple, Fair                                        | Inefficient (long seek times)               | Low throughput, poor performance    |
| SSTF        | Minimizes average seek time                           | Starvation, High variance in response time  | Unfairness                       |
| SCAN        | Uniform wait time, prevents starvation              | Longest wait time for recently visited areas | Still sweeps to end even if empty |
| C-SCAN      | More uniform wait time than SCAN                      | Still sweeps to end even if empty          | Sweeps can be wasteful            |
| LOOK        | Reduces unnecessary head movement compared to SCAN   | More complex implementation                 |                                   |
| C-LOOK      | Reduces unnecessary head movement compared to C-SCAN | More complex implementation                 |                                   |

**Factors Influencing Choice of Algorithm:**

*   **Workload Characteristics:** The distribution and patterns of I/O requests greatly impact performance.  For example, SSTF works well if requests are clustered.
*   **System Requirements:** Real-time systems may require algorithms that provide predictable response times (e.g., SCAN or C-SCAN).
*   **Implementation Complexity:** Simpler algorithms (like FCFS) are easier to implement, but may not offer the best performance.
*   **Operating System Goals:** Fairness, throughput, response time, and minimizing variance in response time are all important considerations.

## 4. Important Points to Remember

*   Seek time is the dominant factor in disk access time.
*   No single algorithm is optimal for all workloads.  The best algorithm depends on the specific requirements of the system.
*   Disk scheduling is only one aspect of I/O performance optimization. Other factors include caching, buffering, and file system design.
*   SSTF minimizes average seek time but can lead to starvation.
*   SCAN and C-SCAN provide more uniform wait times and prevent starvation.
*   LOOK and C-LOOK are optimized versions of SCAN and C-SCAN that avoid unnecessary head movement.

## 5. Practice Questions and Exercises

**Question 1:**

Given the following disk request sequence: 82, 170, 43, 140, 24, 16, 190
The initial head position is 50. The disk has 200 cylinders (0-199).

Calculate the total head movement using:

a) FCFS
b) SSTF
c) SCAN (assuming the head is moving towards 0 initially)
d) C-SCAN (assuming the head is moving towards 199 initially)
e) LOOK (assuming the head is moving towards 0 initially)
f) C-LOOK (assuming the head is moving towards 199 initially)

**Answer:**

a) **FCFS:**

Sequence: 50 -> 82 -> 170 -> 43 -> 140 -> 24 -> 16 -> 190
Total head movement = |82-50| + |170-82| + |43-170| + |140-43| + |24-140| + |16-24| + |190-16|
= 32 + 88 + 127 + 97 + 116 + 8 + 174 = 642

b) **SSTF:**

Sequence: 50 -> 43 -> 24 -> 16 -> 82 -> 140 -> 170 -> 190
Total head movement = |43-50| + |24-43| + |16-24| + |82-16| + |140-82| + |170-140| + |190-170|
= 7 + 19 + 8 + 66 + 58 + 30 + 20 = 208

c) **SCAN (towards 0):**

Sequence: 50 -> 43 -> 24 -> 16 -> 0 -> 82 -> 140 -> 170 -> 190
Total head movement = |43-50| + |24-43| + |16-24| + |0-16| + |82-0| + |140-82| + |170-140| + |190-170|
= 7 + 19 + 8 + 16 + 82 + 58 + 30 + 20 = 240

d) **C-SCAN (towards 199):**

Sequence: 50 -> 82 -> 140 -> 170 -> 190 -> 199 -> 0 -> 16 -> 24 -> 43
Total head movement = |82-50| + |140-82| + |170-140| + |190-170| + |199-190| + |0-199| + |16-0| + |24-16| + |43-24|
= 32 + 58 + 30 + 20 + 9 + 199 + 16 + 8 + 19 = 391

e) **LOOK (towards 0):**

Sequence: 50 -> 43 -> 24 -> 16 -> 82 -> 140 -> 170 -> 190
Total head movement = |43-50| + |24-43| + |16-24| + |82-16| + |140-82| + |170-140| + |190-170|
= 7 + 19 + 8 + 66 + 58 + 30 + 20 = 208

f) **C-LOOK (towards 199):**

Sequence: 50 -> 82 -> 140 -> 170 -> 190 -> 16 -> 24 -> 43
Total head movement = |82-50| + |140-82| + |170-140| + |190-170| + |16-190| + |24-16| + |43-24|
= 32 + 58 + 30 + 20 + 174 + 8 + 19 = 341

**Question 2:**

Explain the advantages and disadvantages of SSTF compared to FCFS.  Under what circumstances would you choose SSTF over FCFS?

**Answer:**

*Advantages of SSTF over FCFS:*

*   SSTF minimizes average seek time, leading to faster overall I/O performance compared to FCFS.  This is because SSTF prioritizes requests that are closest to the current head position, reducing the distance the head needs to travel.

*Disadvantages of SSTF over FCFS:*

*   SSTF can lead to starvation.  Requests that are far from the current head position might be continuously postponed if closer requests keep arriving. FCFS is fairer in that it processes requests in the order they arrive, preventing starvation.
*   SSTF can have a higher variance in response time compared to FCFS.  Some requests might get serviced very quickly, while others might experience long delays.

*Circumstances where you would choose SSTF over FCFS:*

*   When minimizing average response time is a primary goal, and fairness is less critical.  For example, in a system where the majority of requests are clustered in certain areas of the disk, SSTF can provide significantly better overall throughput.
*   When the disk workload is dynamic and requests arrive randomly, SSTF can adapt better to changes in the request pattern compared to FCFS.

**Question 3:**

What is the key difference between SCAN and C-SCAN?  Why is C-SCAN often preferred in practice?

**Answer:**

*Key difference between SCAN and C-SCAN:*

*   SCAN (Elevator Algorithm): The disk arm sweeps back and forth across the disk, servicing requests in both directions.  When it reaches the end of the disk, it reverses direction and continues servicing requests on the return trip.
*   C-SCAN (Circular SCAN):  The disk arm sweeps in one direction only. When it reaches the end of the disk, it immediately returns to the beginning (without servicing any requests on the return trip) and starts sweeping again.

*Why C-SCAN is often preferred in practice:*

*   C-SCAN provides a more uniform wait time compared to SCAN. In SCAN, requests that are just behind the moving head have to wait almost a full sweep of the disk.  C-SCAN avoids this problem because the arm returns to the beginning of the disk without servicing any requests, providing a more consistent waiting time for all requests. This uniformity can be important for certain applications where predictable response times are critical.

This comprehensive study guide should give you a thorough understanding of disk scheduling algorithms and their performance implications. Good luck with your studies!
