---
title: "Case study:  The Linux Completely Fair Scheduler (CFS)"
subject: "OPERATING SYSTEMS"
module: "Module 1: Introduction to Operating Systems"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8af9f"
status: "completed"
scrapedAt: "2026-05-20T16:13:59.517Z"
---
## Operating Systems: Module 1 - Introduction to Operating Systems
### Case Study: The Linux Completely Fair Scheduler (CFS)

**Learning Outcomes:**

*   Understand the fundamental principles of CPU scheduling.
*   Explain the design and operation of the Completely Fair Scheduler (CFS).
*   Analyze the advantages and disadvantages of CFS compared to other scheduling algorithms.
*   Identify the key parameters that influence CFS scheduling behavior.
*   Describe how CFS handles different priority levels.
*   Appreciate the real-world applicability of scheduling algorithms in modern operating systems.

**1. Fundamental Principles of CPU Scheduling**

*   **Definition:** CPU scheduling is the process of deciding which of the ready processes in the system's ready queue should be allocated the CPU.  It's a crucial component of multitasking operating systems.
*   **Goals of CPU Scheduling:**
    *   **Maximize CPU utilization:** Keep the CPU as busy as possible.
    *   **Maximize throughput:**  Complete as many processes per unit of time as possible.
    *   **Minimize turnaround time:** Reduce the total time a process spends in the system (submission to completion).
    *   **Minimize waiting time:** Reduce the amount of time a process spends waiting in the ready queue.
    *   **Minimize response time:**  Reduce the time from submission of a request until the first response is produced (especially important in interactive systems).
    *   **Fairness:** Ensure that each process receives a fair share of the CPU.
*   **Scheduling Algorithms:**
    *   **First-Come, First-Served (FCFS):** Processes are served in the order they arrive.  Simple but can lead to long waiting times (convoy effect).
    *   **Shortest Job First (SJF):** Processes with the shortest execution time are served first. Optimal for minimizing average waiting time but requires knowing execution times in advance.  Can lead to starvation for longer jobs.
    *   **Priority Scheduling:** Processes are assigned priorities, and the process with the highest priority is run. Can lead to starvation if lower priority processes never get a chance to run.
    *   **Round Robin (RR):** Each process gets a time slice (quantum).  If a process doesn't finish within its quantum, it's moved to the back of the ready queue.  Provides good response time but can have high overhead due to context switching.
*   **Preemptive vs. Non-Preemptive Scheduling:**
    *   **Preemptive:** The CPU can be taken away from a process before it completes its execution.  Allows for better response time and prevents a single process from monopolizing the CPU.  RR and priority scheduling (with preemption) are examples.
    *   **Non-Preemptive:** Once a process starts running, it continues until it completes or voluntarily releases the CPU.  FCFS and SJF are typically non-preemptive (though preemptive versions exist).
*   **Context Switching:**  The process of saving the state of the current running process and loading the state of the next process to run. This involves saving and restoring registers, memory maps, and other system resources. Context switching is overhead; the system spends time doing it instead of executing user processes.

**2. Design and Operation of the Completely Fair Scheduler (CFS)**

*   **Introduction:** CFS is the default scheduler in Linux since kernel version 2.6.23.  It's a preemptive, priority-based scheduler designed to provide fair CPU allocation among processes.
*   **Fairness as an Ideal:** CFS aims for *perfect* fairness, where each process receives an equal share of the CPU time over a period.  It doesn't literally mean each process runs for the exact same amount of time in each quantum (that would be Round Robin). Instead, it attempts to minimize the difference in *virtual runtime* between processes.
*   **Virtual Runtime (vruntime):** The key concept in CFS. vruntime is a measure of how long a process has been running, *normalized by its priority*.  Lower-priority processes have their physical runtime increase their vruntime *faster* than higher-priority processes.  CFS aims to keep the vruntime values of all runnable processes as close as possible.
*   **Red-Black Tree (rbtree):** CFS uses a red-black tree to organize runnable processes, sorted by their vruntime.  The process with the *smallest* vruntime is always at the leftmost node of the tree.  CFS always chooses the leftmost process to run next.  This makes finding the most "deserving" (least-ran) process very efficient (O(log n) time complexity).
*   **Scheduling Algorithm:**
    1.  The scheduler selects the process with the lowest vruntime (leftmost node in the rbtree).
    2.  The selected process runs.
    3.  While the process is running, its vruntime increases.
    4.  When the process's vruntime reaches a point where it's no longer the smallest, or when its timeslice is up (or if a higher-priority process becomes runnable), the process is preempted and reinserted into the rbtree based on its updated vruntime.
    5.  The scheduler repeats from step 1.
*   **Timeslices (scheduling quanta):**  CFS doesn't use fixed timeslices like Round Robin. Instead, it calculates a *target latency*.
    *   **Target Latency:** The period over which CFS aims to provide fairness.  A larger target latency leads to fewer context switches, while a smaller target latency results in more accurate fairness. The actual target latency is adjusted based on the number of runnable processes in the system.
    *   **Minimum Granularity:** Prevents the timeslices from becoming too small, which would lead to excessive context switching.  The minimum granularity ensures that each process runs for at least a certain minimum amount of time.
*   **Weighting:**  CFS doesn't use direct priorities (like numerical priority values). It uses *weights* associated with each process. These weights determine how much the physical runtime of a process is "sped up" or "slowed down" when calculating vruntime.  Higher weights mean the process's vruntime increases more slowly, giving it a larger share of the CPU.  These weights are derived from the traditional nice values (see section 5).

**3. Advantages and Disadvantages of CFS Compared to Other Scheduling Algorithms**

*   **Advantages:**
    *   **Fairness:** CFS provides excellent fairness among processes, minimizing the difference in CPU time received.
    *   **Responsiveness:**  CFS offers good responsiveness, especially for interactive tasks, because it's preemptive and constantly re-evaluates the vruntime of processes.
    *   **Robustness:** CFS adapts well to varying workloads, maintaining fairness and responsiveness even when the system is heavily loaded.
    *   **Avoids Starvation:** By tracking vruntime and always choosing the process with the lowest vruntime, CFS prevents any process from being completely starved of CPU time.
    *   **Dynamic Workload Adaptation:** Target latency and minimum granularity adjust dynamically based on the number of runnable processes, ensuring good performance under varying loads.
*   **Disadvantages:**
    *   **Complexity:**  CFS is more complex than simpler algorithms like FCFS or Round Robin.
    *   **Overhead:** The overhead of maintaining the red-black tree and calculating vruntime can be higher than simpler algorithms, especially with a very large number of processes. However, this overhead is generally acceptable.
    *   **Tunability:** While often seen as an advantage, the numerous configurable parameters can make tuning CFS difficult for inexperienced users.  Default settings are usually adequate.
*   **Comparison:**
    *   **CFS vs. FCFS:** CFS is more fair and responsive than FCFS, which can suffer from the convoy effect.  CFS is preemptive, while FCFS is non-preemptive.
    *   **CFS vs. SJF:** CFS doesn't require knowing execution times in advance, unlike SJF. CFS is preemptive and avoids starvation, while SJF can starve longer jobs.
    *   **CFS vs. Round Robin:**  CFS dynamically adjusts timeslices based on priority, whereas Round Robin uses fixed timeslices.  CFS avoids the overhead of tuning the quantum, while RR requires careful selection of the quantum.
    *   **CFS vs. Priority Scheduling (with fixed priorities):**  CFS uses weights to derive a notion of priority and avoids starvation that can occur with fixed priority scheduling.  CFS dynamically adjusts scheduling decisions based on process runtime.

**4. Key Parameters Influencing CFS Scheduling Behavior**

*   **`kernel.sched_min_granularity_ns` (Minimum Granularity):** The minimum time a process will run before being considered for preemption. Prevents excessive context switching. Units are in nanoseconds.
*   **`kernel.sched_latency_ns` (Target Latency):** The target time slice duration over which the scheduler attempts to ensure fairness. Units are in nanoseconds.  The scheduler tries to ensure that each process runs at least once within this latency.
*   **`kernel.sched_wakeup_granularity_ns` (Wakeup Granularity):**  Used to reduce wake-up latency. When a process wakes up (e.g., after I/O), this parameter determines how much its vruntime is boosted to give it a better chance to run quickly. This helps improve responsiveness, especially for interactive applications.  Units are in nanoseconds.
*   **`nice values` (-20 to +19):** These user-adjustable values influence the weight assigned to a process.  Lower nice values (e.g., -20) give the process a higher weight and more CPU time. Higher nice values (e.g., +19) give the process a lower weight and less CPU time. `nice` values are *converted* into weights by the kernel; they do *not* directly represent priority levels in the traditional sense.
*   **Location:**  These parameters can be viewed and modified (with appropriate permissions) through the `/proc/sys/kernel` directory. For example:
    ```bash
    cat /proc/sys/kernel/sched_min_granularity_ns
    sysctl kernel.sched_min_granularity_ns=4000000 # Set to 4 milliseconds
    ```

**5. How CFS Handles Different Priority Levels**

*   **`nice` Values and Weights:** CFS uses `nice` values, which range from -20 to +19, to influence the scheduling behavior.  These `nice` values are converted into weights using a lookup table within the kernel.
*   **Weight Calculation:** The weights determine how quickly a process's vruntime increases.  A process with a lower `nice` value (higher priority) has a larger weight, which means its vruntime increases more slowly.  This results in the process being chosen more often by the scheduler.
*   **Fairness with Priority:**  CFS still aims for fairness, but it's *weighted fairness*.  Higher-priority processes are *allowed* to run more often than lower-priority processes, but CFS ensures that even lower-priority processes eventually get a chance to run. This prevents starvation.
*   **User-Level Priority Adjustment:** Users can adjust the `nice` value of a process using the `nice` and `renice` commands.  This allows users to influence the relative CPU allocation of different processes on the system.
*   **Real-Time Scheduling:** CFS is *not* designed for hard real-time applications. For such applications, Linux provides real-time scheduling policies (SCHED_FIFO and SCHED_RR) that offer stronger guarantees about meeting deadlines.

**6. Real-World Applicability of Scheduling Algorithms in Modern Operating Systems**

*   **Linux and CFS:**  CFS is the backbone of CPU scheduling in modern Linux systems, powering everything from desktop computers to servers and embedded devices.
*   **Other Operating Systems:** While CFS is specific to Linux, the principles of fair scheduling and priority-based algorithms are widely used in other operating systems. Windows uses a multi-level feedback queue scheduler with dynamic priority adjustments. macOS uses a similar approach with quality-of-service (QoS) classes.
*   **Cloud Computing:** Scheduling algorithms are critical in cloud computing environments, where virtual machines (VMs) need to be efficiently allocated CPU resources.  Cloud providers use sophisticated scheduling algorithms to optimize resource utilization and ensure fairness among tenants.
*   **Real-Time Systems:** Real-time operating systems (RTOS) rely heavily on scheduling algorithms to meet strict deadlines. These algorithms often prioritize deterministic behavior and predictability over fairness.
*   **Mobile Devices:** Mobile operating systems like Android and iOS use scheduling algorithms to balance performance, responsiveness, and battery life.  They often prioritize foreground applications and aggressively throttle background processes.

**Important Points to Remember:**

*   CFS aims for fairness by minimizing the difference in *virtual runtime* between processes.
*   vruntime is a measure of how long a process has been running, normalized by its priority (nice value).
*   CFS uses a red-black tree to efficiently track processes sorted by vruntime.
*   `nice` values are translated into weights, which influence how quickly vruntime increases.
*   CFS is not a real-time scheduler.
*   Parameters like `sched_min_granularity_ns` and `sched_latency_ns` can be tuned, but default settings are usually sufficient.

**Practice Questions/Exercises:**

1.  **What is vruntime in CFS and why is it important?**
    *   *Answer:* vruntime is a measure of how long a process has been running, normalized by its priority. It's important because CFS uses vruntime to determine which process should run next, aiming to minimize the difference in vruntime between processes and achieve fairness.

2.  **Explain how CFS handles different priority levels using nice values.**
    *   *Answer:* CFS converts nice values (ranging from -20 to +19) into weights. Lower nice values (e.g., -20) result in larger weights, causing the process's vruntime to increase more slowly. This gives the process a higher priority and more CPU time.

3.  **What data structure does CFS use to manage runnable processes and why?**
    *   *Answer:* CFS uses a red-black tree (rbtree) to manage runnable processes. The rbtree is sorted by vruntime, and the process with the lowest vruntime is always at the leftmost node. This allows CFS to efficiently (O(log n) time complexity) find the most "deserving" (least-ran) process to run next.

4.  **What are `sched_min_granularity_ns` and `sched_latency_ns`? How do they affect the scheduling behavior?**
    *   *Answer:* `sched_min_granularity_ns` (Minimum Granularity) is the minimum time a process will run before being considered for preemption. `sched_latency_ns` (Target Latency) is the target time slice duration over which the scheduler attempts to ensure fairness.  A larger minimum granularity reduces context switching but might decrease responsiveness. A larger target latency leads to fewer context switches, while a smaller target latency results in more accurate fairness.

5.  **Consider two processes, A and B. Process A has a nice value of -10, and process B has a nice value of +10. Which process will likely get more CPU time in a CFS system? Explain why.**
    *   *Answer:* Process A will likely get more CPU time. A lower nice value (-10) means Process A has a higher weight. This causes its vruntime to increase more slowly compared to Process B. As CFS always selects the process with the lowest vruntime, Process A will be selected more frequently, resulting in a larger share of CPU time.

6.  **CFS is not suitable for hard real-time systems. Why?**
    *   *Answer:* CFS aims for fairness and doesn't provide strict guarantees about meeting deadlines. Hard real-time systems require deterministic behavior and predictability, which CFS cannot guarantee. Linux offers real-time scheduling policies (SCHED_FIFO and SCHED_RR) for applications with strict timing requirements. While CFS *can* be used for soft real-time, the lack of deterministic guarantees makes it unsuitable where missing a deadline is catastrophic.

This comprehensive set of notes should provide a solid foundation for understanding the Linux Completely Fair Scheduler (CFS). Good luck with your studies!
