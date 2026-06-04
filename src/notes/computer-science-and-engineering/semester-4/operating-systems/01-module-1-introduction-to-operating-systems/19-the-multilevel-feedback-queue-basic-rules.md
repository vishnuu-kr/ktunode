---
title: "The Multilevel Feedback Queue: Basic Rules"
subject: "OPERATING SYSTEMS"
module: "Module 1: Introduction to Operating Systems"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8af9e"
status: "completed"
scrapedAt: "2026-05-20T16:13:58.809Z"
---
## OPERATING SYSTEMS - Module 1: Introduction to Operating Systems - Multilevel Feedback Queue: Basic Rules

These notes cover the Multilevel Feedback Queue (MLFQ) scheduling algorithm, focusing on its basic rules and concepts.

**Learning Outcomes:**

*   Understand the basic concept and motivation behind the MLFQ scheduling algorithm.
*   Explain the basic rules of MLFQ.
*   Describe how MLFQ attempts to approximate Shortest Job First (SJF) and Shortest Time-to-Completion First (STCF).
*   Identify and address the potential problems of MLFQ, such as starvation.

**1. Introduction to Multilevel Feedback Queue (MLFQ)**

*   **What it is:** The MLFQ is a scheduling algorithm designed to optimize CPU utilization and response time by dynamically adjusting process priorities based on their behavior.  Unlike simpler scheduling algorithms (like FIFO or Round Robin with fixed priorities), MLFQ *learns* about processes as they run.

*   **Motivation:**
    *   **Approximating SJF/STCF:** The ideal scheduling algorithms (SJF, STCF) require knowing job lengths *in advance*, which is usually impossible. MLFQ attempts to approximate these algorithms by observing a process's CPU burst usage. Processes that use the CPU for short bursts are treated as interactive jobs, while those with long bursts are treated as batch jobs.
    *   **Adaptability:**  Real-world processes can change their behavior. A program might be CPU-bound initially but later become I/O-bound. MLFQ can adapt to these changes by dynamically adjusting priorities.
    *   **Minimizing Response Time for Interactive Jobs:** By prioritizing short-burst (interactive) jobs, MLFQ aims to keep the system responsive for users.
    *   **Maximizing CPU Utilization for CPU-Bound Jobs:** By allowing CPU-bound jobs to run longer at lower priorities when interactive jobs are not ready, MLFQ can keep the CPU busy.

*   **Key Idea:** Use multiple queues with different priorities. Processes move between these queues based on their CPU usage.

**2. Basic Rules of MLFQ**

The core rules of MLFQ determine how processes are assigned to queues and how they move between queues.

*   **Rule 1: If Priority(A) > Priority(B), A runs (B doesn’t).**
    *   This rule is straightforward. Higher priority processes get the CPU before lower priority processes. Processes within the same priority level are scheduled using Round Robin.
    *   **Example:**  If a process in queue 0 (highest priority) is ready to run, it will always run before any process in queue 1, 2, etc., regardless of how long processes in lower priority queues have been waiting.

*   **Rule 2: If Priority(A) = Priority(B), A & B run in Round Robin (at that priority level).**
    *   Within a given queue (priority level), processes are scheduled using Round Robin. This ensures that processes don't starve within a particular priority level.
    *   **Example:**  If three processes are in queue 1, each will get a time slice (e.g., 10ms) in turn. After a process uses its time slice, it's moved to the back of the queue.

*   **The Core Algorithm (Simplified):**
    1.  **New Job Arrival:** When a new job enters the system, it's placed at the *highest* priority queue (queue 0).
    2.  **Time Slice Exceeded:** If a process uses up its time slice at a given priority level, it's *demoted* to the next lower priority queue.
    3.  **CPU Bound vs. I/O Bound Approximation:** The rationale here is that processes which run for longer periods (CPU-bound) are demoted to lower priorities. Processes that frequently block for I/O remain at higher priorities because they rarely use up their entire time slice.
    4.  **Queue Depletion:** The scheduler always searches for a ready process starting from the highest priority queue.

**3. Examples**

Consider an MLFQ with three queues (0, 1, 2), where 0 is the highest priority and 2 is the lowest.  Let's say the time slice for each queue is:

*   Queue 0: 10ms
*   Queue 1: 20ms
*   Queue 2: 40ms

Let's trace the execution of two processes, A (interactive) and B (CPU-bound):

*   **Process A (Interactive):** Arrives. Enters Queue 0. Runs for 5ms (blocks for I/O). Returns to Queue 0.  Runs for 3ms (blocks for I/O). Returns to Queue 0.  Never uses its full 10ms time slice.  Stays at a high priority.

*   **Process B (CPU-bound):** Arrives. Enters Queue 0.  Runs for 10ms (time slice exceeded).  Demoted to Queue 1.  Runs for 20ms (time slice exceeded).  Demoted to Queue 2.  Runs for 40ms (time slice exceeded).  Remains in Queue 2 and continues to be scheduled (using Round Robin with other processes in Queue 2).

**4.  Approximating SJF/STCF**

*   **The Idea:**  MLFQ tries to approximate SJF/STCF by observing past behavior.
*   **Short Bursts Imply Short Jobs:** Processes that frequently block (e.g., interactive jobs) are assumed to have short CPU bursts. They remain at higher priorities and get scheduled quickly.
*   **Long Bursts Imply Long Jobs:** Processes that consume their entire time slice (CPU-bound jobs) are assumed to have long CPU bursts. They are demoted to lower priorities, allowing shorter jobs to run first.

**5. Problems with Basic MLFQ**

The basic MLFQ described above has several potential problems:

*   **Starvation:** A CPU-bound process can be starved if there's a constant stream of short, high-priority interactive processes. The CPU-bound process might never get a chance to run.  As it gets pushed down queues, it gets less and less CPU time.
*   **Gaming the Scheduler:** A process can intentionally yield the CPU just before its time slice expires to stay at a higher priority.  This can unfairly give a process more CPU time than it deserves.  This is done by performing I/O (e.g. a `sleep()` or similar operation) right before the time quantum expires.
*   **Changing Behavior:**  A process that was initially CPU-bound might become I/O-bound later, but it will remain at a low priority. The scheduler needs a way to adjust to changing process behavior. Determining *exactly* how much CPU usage equates to an I/O or CPU-bound process is complex.

**6. Important Points to Remember**

*   MLFQ is a dynamic priority scheduling algorithm.
*   It attempts to approximate SJF/STCF.
*   It prioritizes short bursts to minimize response time.
*   Basic MLFQ is susceptible to starvation and scheduler gaming.

**Practice Questions/Exercises**

1.  **Explain the purpose of the multilevel feedback queue (MLFQ) scheduling algorithm.**
    *   **Answer:**  The purpose of MLFQ is to approximate SJF/STCF scheduling without knowing job lengths in advance.  It aims to optimize both CPU utilization and response time by dynamically adjusting process priorities based on CPU usage, giving preference to short, interactive jobs.

2.  **Describe the basic rules of MLFQ. Explain how a process moves between queues.**
    *   **Answer:**
        *   Rule 1: If Priority(A) > Priority(B), A runs (B doesn’t).
        *   Rule 2: If Priority(A) = Priority(B), A & B run in Round Robin (at that priority level).
        *   A new process starts at the highest priority queue. If a process uses up its time slice at a given priority level, it's demoted to the next lower priority queue.

3.  **How does MLFQ attempt to approximate Shortest Job First (SJF)?**
    *   **Answer:** MLFQ assumes that processes which run for shorter periods (CPU-bound) are demoted to lower priorities. Processes that frequently block for I/O remain at higher priorities because they rarely use up their entire time slice. It uses the recent CPU usage to guess which jobs are "short" and which are "long."

4.  **What is the "starvation" problem in the context of MLFQ, and why does it occur?**
    *   **Answer:** Starvation occurs when a low-priority process never gets to run because higher-priority processes are always ready. In MLFQ, a CPU-bound process can be starved if a continuous stream of short, high-priority interactive processes keeps arriving. The CPU-bound process is repeatedly demoted and has little chance to run.

5.  **Explain how a process could "game" the MLFQ scheduler.**
    *   **Answer:** A process can "game" the MLFQ by intentionally yielding the CPU (e.g., performing an I/O operation or calling `sleep()`) just before its time slice expires. This prevents the process from being demoted and allows it to stay at a higher priority, receiving more CPU time than it deserves.

6. **Assume you have an MLFQ with 3 queues. Time slice for queue 0 is 8 ms, queue 1 is 16 ms, and queue 2 is 32 ms. A process arrives and needs 60 ms of CPU time. How long will it take to complete, assuming no other processes are in the system?**
    * **Answer:**
        * Queue 0: runs for 8ms, remaining time = 60 - 8 = 52ms.  Demoted to Queue 1.
        * Queue 1: runs for 16ms, remaining time = 52 - 16 = 36ms. Demoted to Queue 2.
        * Queue 2: runs for 32ms, remaining time = 36 - 32 = 4ms. Remains in Queue 2.
        * Queue 2: runs for 4ms, remaining time = 0ms. Process completes.
        * Total time = 8 + 16 + 32 + 4 = 60ms.

**Further Study:**

*   Explore different variations and improvements to MLFQ (e.g., priority boosting, accounting for CPU usage, fair share scheduling).
*   Research real-world implementations of MLFQ in operating systems.
