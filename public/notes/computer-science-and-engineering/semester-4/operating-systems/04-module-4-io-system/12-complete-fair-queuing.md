---
title: "Complete Fair Queuing"
subject: "OPERATING SYSTEMS"
module: "Module 4: I/O system:"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8afd5"
status: "completed"
scrapedAt: "2026-05-20T16:14:36.895Z"
---
# OPERATING SYSTEMS - Module 4: I/O System - Complete Fair Queuing (CFQ)

## 1. Introduction

This module delves into the Complete Fair Queuing (CFQ) I/O scheduler, a commonly used disk scheduler algorithm. CFQ aims to provide fairness in I/O scheduling, ensuring that no single process starves others by monopolizing disk bandwidth. It prioritizes processes and tries to give each process a fair slice of the disk's throughput.

## 2. Learning Outcomes

Upon completion of this section, you will be able to:

*   **Define Complete Fair Queuing (CFQ)** and explain its purpose.
*   **Describe the key components** of the CFQ scheduler.
*   **Explain how CFQ achieves fairness** in disk I/O scheduling.
*   **Compare and contrast CFQ with other I/O scheduling algorithms** (e.g., FIFO, Shortest Seek Time First (SSTF), SCAN, C-SCAN).
*   **Analyze the advantages and disadvantages** of using CFQ.
*   **Understand the tuning parameters** that can be used to adjust CFQ's behavior.
*   **Apply CFQ principles to real-world scenarios** involving I/O-intensive applications.

## 3. Key Concepts and Definitions

*   **I/O Scheduler:** A component of the operating system responsible for managing and prioritizing I/O requests to devices, typically disk drives.

*   **Fairness:**  In the context of I/O scheduling, fairness means that each process receives a reasonable share of the disk bandwidth, preventing any process from being starved of I/O resources.

*   **Throughput:** The rate at which data can be transferred between the disk and the system.  Often measured in MB/s or I/O operations per second (IOPS).

*   **Latency:** The time it takes for an I/O request to be completed.

*   **I/O Request:** A request from a process to read or write data to a storage device.

*   **Disk Bandwidth:** The maximum rate at which data can be read from or written to the disk.

*   **CFQ's Main Goal:** Provide each process with a fair share of the disk bandwidth, leading to a more responsive and balanced system.

## 4. Complete Fair Queuing (CFQ) - In Detail

CFQ works by organizing I/O requests from different processes into separate queues. It then services these queues in a round-robin fashion, giving each process a "time slice" of disk access.  This allows processes to make progress without being blocked indefinitely by other I/O-intensive processes.

### 4.1. Components of CFQ

*   **Per-Process Queues:**  CFQ maintains a separate queue for each process issuing I/O requests.  This is the foundation of its fairness.

*   **Sorted Queues:** Within each per-process queue, the requests are usually sorted based on sector number (disk address). This optimizes seek time within that specific process's queue, contributing to better performance.

*   **Round-Robin Scheduling:**  CFQ services the per-process queues in a round-robin fashion.  Each process gets a certain amount of time (slice) to issue its I/O requests.

*   **I/O Elevator (Merging and Sorting):**  CFQ performs merging and sorting of I/O requests to minimize disk head movement. This is also known as the elevator algorithm. It combines adjacent requests to minimize seeks.

*   **Anticipatory I/O:**  A key feature that tries to predict the next request from a process and wait a short amount of time for it before moving on to the next process queue. This can significantly improve performance for applications that exhibit sequential I/O patterns.

### 4.2. How CFQ Achieves Fairness

CFQ achieves fairness by:

1.  **Queue Separation:**  Keeping I/O requests from different processes isolated.

2.  **Time Slicing:**  Allocating a fixed time slice to each process's queue. During this time slice, the process's requests are processed.

3.  **Weighted Fairness (Nice Values):**  CFQ supports weighted fairness.  The amount of time each process gets can be adjusted based on its priority (nice value). Processes with higher priority (lower nice value) can receive a larger time slice.

### 4.3. The CFQ Algorithm: A Simplified Overview

1.  **Receive I/O Request:**  An I/O request is received from a process.

2.  **Queue Assignment:** The request is added to the per-process queue associated with that process.

3.  **Queue Sorting (Within Process):** The request is sorted within the process's queue, typically by disk sector number.

4.  **Round-Robin Selection:** The CFQ scheduler selects a process queue based on a round-robin schedule (potentially weighted by process priority).

5.  **Process I/O Requests (Time Slice):**  I/O requests from the selected queue are processed until the process's allocated time slice expires or the queue is empty.

6.  **Anticipatory I/O (Optional):** The scheduler may wait briefly for the next request from the current process before moving on, hoping to exploit sequential I/O patterns.

7.  **Repeat:** Steps 4-6 are repeated until all I/O requests are processed.

### 4.4. Tuning Parameters

CFQ has several tuning parameters that can be adjusted to optimize its behavior for different workloads.  These parameters are typically configured through files in the `/sys/block/<device>/queue/iosched` directory.  Common parameters include:

*   **`quantum`:** The number of I/O requests that CFQ will process from a single process before switching to another. Higher values may increase throughput but could lead to longer latencies for other processes.

*   **`slice_idle`:**  The time CFQ will wait for additional requests from the current process after it has completed its current batch of I/O requests.  This parameter controls the "anticipatory I/O" behavior.

*   **`back_seek_penalty`:** A parameter that influences how CFQ balances seek time optimization with fairness. Higher values may prioritize fairness over reducing seek time.

*   **`fifo_expire_async` and `fifo_expire_sync`:**  How long asynchronous/synchronous requests will sit in the queue before being dispatched.

### 4.5. Example Scenario

Imagine two processes, A and B, both performing disk I/O. Process A is copying a large file (I/O intensive), while Process B is running a web server that needs to serve occasional requests (latency sensitive).

*   **Without CFQ:** Process A could potentially monopolize the disk, causing Process B to become unresponsive.

*   **With CFQ:**  CFQ ensures that Process B receives a fair share of disk bandwidth, preventing it from being starved by Process A.  The web server (Process B) remains responsive even while the large file copy (Process A) is in progress.  CFQ's anticipatory I/O can also help the file copy achieve good throughput.

## 5. Comparison with Other I/O Scheduling Algorithms

*   **FIFO (First-In, First-Out):** Simple but unfair.  A long-running I/O operation can block all subsequent requests.

*   **SSTF (Shortest Seek Time First):** Minimizes seek time, potentially improving throughput. However, it can lead to starvation of requests that are far away from the current disk head position.

*   **SCAN (Elevator Algorithm):**  The disk head moves in one direction, servicing requests along the way.  When it reaches the end, it reverses direction.  More fair than SSTF, but still can have longer wait times for requests at the edges.

*   **C-SCAN (Circular SCAN):**  Similar to SCAN, but when the disk head reaches the end, it immediately returns to the beginning without servicing any requests on the return trip. More uniform wait times than SCAN.

*   **CFQ vs. Others:** CFQ prioritizes fairness over raw throughput, unlike SSTF and SCAN. It aims to provide a balanced system where no single process is starved.  While CFQ might not always achieve the absolute highest throughput, it provides a better user experience in multi-user or multi-application environments.

**Table Summary:**

| Algorithm | Fairness | Throughput | Latency | Complexity |
|---|---|---|---|---|
| FIFO | Poor | Can be good in specific cases | Highly Variable | Low |
| SSTF | Poor (Starvation possible) | High | Low (on average, but can be very high for some requests)| Medium |
| SCAN | Moderate | Moderate to High | More uniform than SSTF | Medium |
| C-SCAN | Good | Moderate to High | More uniform than SCAN | Medium |
| CFQ | Excellent | Moderate | Moderate | High |

## 6. Advantages and Disadvantages of CFQ

**Advantages:**

*   **Excellent Fairness:** Provides a fair share of disk bandwidth to each process.
*   **Prevents Starvation:**  Guarantees that no process will be completely blocked from accessing the disk.
*   **Good Responsiveness:**  Helps maintain system responsiveness, especially in interactive environments.
*   **Adjustable:**  Tuning parameters allow for customization based on specific workloads.
*   **Anticipatory I/O:** Optimizes sequential I/O patterns.

**Disadvantages:**

*   **Lower Throughput Compared to Some Algorithms (e.g., SSTF):**  The focus on fairness can sometimes lead to slightly lower overall throughput compared to algorithms that aggressively optimize seek time.
*   **Higher Complexity:**  CFQ is more complex than simpler algorithms like FIFO or SSTF.
*   **Overhead:** The round-robin scheduling and queue management introduce some overhead.

## 7. Application to Real-World Scenarios

CFQ is well-suited for:

*   **Multi-user systems:** Where multiple users are running applications that compete for disk I/O.
*   **Desktop environments:** Where responsiveness is important for interactive applications.
*   **Systems with a mix of I/O-intensive and latency-sensitive applications:** CFQ can balance the needs of both types of applications.
*   **Virtualization environments:** where multiple virtual machines are sharing the same physical disk.

## 8. Important Points to Remember

*   CFQ is a fair I/O scheduler that prioritizes providing a balanced allocation of disk bandwidth to different processes.
*   It uses per-process queues, round-robin scheduling, and anticipatory I/O to achieve fairness and optimize performance.
*   CFQ's tuning parameters can be adjusted to fine-tune its behavior for specific workloads.
*   CFQ is a good choice for systems where fairness and responsiveness are important, even if it means sacrificing some raw throughput.
*   Understand the tradeoffs between fairness, throughput, and latency when selecting an I/O scheduler.

## 9. Practice Questions/Exercises

1.  **What is the primary goal of the Complete Fair Queuing (CFQ) scheduler?**

    *   *Answer:*  To provide each process with a fair share of the disk bandwidth, preventing starvation and ensuring good system responsiveness.

2.  **Explain how CFQ achieves fairness in disk I/O scheduling.**

    *   *Answer:* CFQ achieves fairness by: (1) Maintaining separate queues for each process. (2) Servicing the queues in a round-robin fashion, giving each process a time slice of disk access. (3) Potentially weighting the time slices based on process priority (nice value).

3.  **What is "anticipatory I/O" and how does it benefit performance in CFQ?**

    *   *Answer:* Anticipatory I/O is a feature where CFQ waits briefly after completing a process's I/O request, anticipating that the process may issue another request soon. This is beneficial for sequential I/O patterns, as it reduces seek time and improves throughput.

4.  **Name two disadvantages of using CFQ as an I/O scheduler.**

    *   *Answer:* (1) Lower throughput compared to some algorithms like SSTF. (2) Higher complexity and overhead compared to simpler algorithms like FIFO.

5.  **Explain the difference between SCAN and C-SCAN disk scheduling algorithms.**

    *   *Answer:* Both SCAN and C-SCAN move the disk head in one direction, servicing requests.  SCAN reverses direction when it reaches the end. C-SCAN, after reaching the end, immediately returns to the beginning of the disk without servicing requests on the return trip. This makes C-SCAN have a more uniform wait time.

6.  **A system is experiencing severe I/O contention. Which I/O scheduling algorithm would be most appropriate to ensure all processes receive reasonable access to the disk? Explain your choice.**

    *   *Answer:* CFQ would be the most appropriate choice. Its primary goal is fairness, preventing starvation and guaranteeing a reasonable share of disk bandwidth to each process. While other algorithms might offer higher throughput in certain scenarios, CFQ's focus on fairness makes it ideal for resolving I/O contention.

7.  **True or False: CFQ guarantees the absolute highest possible disk throughput in all situations.**

    *   *Answer:* False. CFQ prioritizes fairness, which can sometimes result in slightly lower throughput compared to algorithms that aggressively optimize seek time.

8. **Why is CFQ suitable for virtualization environments?**

    *Answer:* In a virtualized environment, multiple virtual machines (VMs) often share the same physical storage. CFQ ensures that each VM gets a fair share of the disk's resources, preventing one VM from monopolizing the I/O and impacting the performance of other VMs. This makes it a good choice for maintaining a balanced and responsive virtualized system.

## 10. Further Exploration

*   Research the different implementations of CFQ in various operating systems (e.g., Linux, Windows).
*   Experiment with CFQ's tuning parameters in a virtualized environment to observe their impact on performance.
*   Investigate advanced I/O scheduling algorithms and their use cases.
