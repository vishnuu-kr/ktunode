---
title: "Process scheduling : Concepts and basic algorithms"
subject: "OPERATING SYSTEMS"
module: "Module 1: Introduction to Operating Systems"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8af9d"
status: "completed"
scrapedAt: "2026-05-20T16:13:58.100Z"
---
## OPERATING SYSTEMS: Module 1 - Process Scheduling

**Topic:** Process Scheduling: Concepts and Basic Algorithms

**Learning Outcomes:**

*   Understand the fundamental concepts of process scheduling.
*   Identify the different scheduling criteria and their importance.
*   Describe and compare various basic scheduling algorithms (FCFS, SJF, Priority, Round Robin).
*   Evaluate the performance of different scheduling algorithms.
*   Apply the scheduling algorithms to solve simple scheduling problems.

---

### 1. Introduction to Process Scheduling

*   **Definition:** Process scheduling is the activity of deciding which of the runnable processes in the system should be given access to the CPU. It is a fundamental operating system function.

*   **Importance:**
    *   Maximizes CPU utilization.
    *   Improves system throughput (the number of processes completed per unit time).
    *   Minimizes turnaround time (the total time taken for a process to complete).
    *   Reduces waiting time (the time a process spends waiting in the ready queue).
    *   Ensures fairness (each process gets a fair share of CPU time).
    *   Improves responsiveness (reduces response time for interactive systems).

*   **Scheduling Queues:**
    *   **Job Queue:** Contains all processes in the system.
    *   **Ready Queue:** Contains processes residing in main memory and are ready and waiting to execute. These are generally implemented as a linked list.
    *   **Device Queues:** List of processes waiting for a particular I/O device.

*   **Schedulers:**
    *   **Long-Term Scheduler (Job Scheduler):** Selects processes from the job pool and loads them into memory for execution. Controls the degree of multiprogramming (number of processes in memory). Invoked less frequently (seconds or minutes).
    *   **Short-Term Scheduler (CPU Scheduler):** Selects a process from the ready queue and allocates the CPU to it. Invoked very frequently (milliseconds).  Must be fast.
    *   **Medium-Term Scheduler (Swapper):**  Removes processes from memory to reduce the degree of multiprogramming (swap out) or brings processes back into memory (swap in).

*   **Context Switch:**
    *   The process of saving the state of the current process (CPU registers, program counter) and loading the saved state of the new process to be executed.
    *   Context switching is pure overhead, as the system does no useful work while switching. The speed of the context switch is hardware-dependent.

### 2. Scheduling Criteria

*   **CPU Utilization:** Keep the CPU as busy as possible. Range: 0-100%.  Real systems generally aim for 40% (lightly loaded) to 90% (heavily loaded).
*   **Throughput:** The number of processes that are completed per unit time.  For long processes, this might be one process per hour. For short transactions, it might be ten processes per second.
*   **Turnaround Time:** The time elapsed from the submission of a process to its completion. (Submission time to completion time) Includes waiting time, execution time.
*   **Waiting Time:** The sum of the periods a process spends waiting in the ready queue.
*   **Response Time:** In an interactive system, the time from submission of a request until the *first* response is produced.  (Important from user's perspective).

**Note:** Optimizing for one criterion may negatively impact another. For example, prioritizing CPU utilization might lead to longer waiting times for some processes.

### 3. Basic Scheduling Algorithms

*   **First-Come, First-Served (FCFS):**
    *   **Description:** Processes are scheduled in the order they arrive in the ready queue.
    *   **Implementation:** Simple FIFO (First-In, First-Out) queue.
    *   **Advantages:** Simple to implement, easy to understand.
    *   **Disadvantages:** Non-preemptive (a process runs to completion), can lead to convoy effect (short processes wait behind long processes), not suitable for time-sharing systems.
    *   **Example:**

        Processes: P1 (24ms), P2 (3ms), P3 (3ms)
        Arrival order: P1, P2, P3

        Gantt Chart:

        ```
        | P1 (0-24) | P2 (24-27) | P3 (27-30) |
        ```

        *   Turnaround Time: P1 = 24, P2 = 27, P3 = 30
        *   Waiting Time: P1 = 0, P2 = 24, P3 = 27
        *   Average Waiting Time: (0 + 24 + 27) / 3 = 17ms

*   **Shortest Job First (SJF):**
    *   **Description:** Processes are scheduled based on their burst time (the time required for the process to execute). The process with the shortest burst time is scheduled next.
    *   **Types:**
        *   **Non-Preemptive:** Once the CPU is given to a process, it cannot be preempted until it completes its burst time.
        *   **Preemptive (Shortest Remaining Time First - SRTF):** If a new process arrives with a burst time less than the remaining time of the currently executing process, the currently executing process is preempted.
    *   **Advantages:** Optimal in terms of minimizing average waiting time.
    *   **Disadvantages:** Difficult to know the burst time of a process in advance. Can lead to starvation for longer processes.
    *   **Example (Non-Preemptive):**

        Processes: P1 (6ms), P2 (8ms), P3 (7ms), P4 (3ms)
        Arrival Time: All processes arrive at time 0.

        Gantt Chart:

        ```
        | P4 (0-3) | P1 (3-9) | P3 (9-16) | P2 (16-24) |
        ```

        *   Turnaround Time: P1 = 9, P2 = 24, P3 = 16, P4 = 3
        *   Waiting Time: P1 = 3, P2 = 16, P3 = 9, P4 = 0
        *   Average Waiting Time: (3 + 16 + 9 + 0) / 4 = 7ms

    *   **Example (Preemptive - SRTF):**

        Processes: P1 (8ms), P2 (4ms), P3 (9ms), P4 (5ms)
        Arrival Time: P1(0), P2(1), P3(2), P4(3)

        Gantt Chart:

        ```
        | P1(0-1) | P2(1-5) | P4(5-10) | P1(10-17) | P3(17-26) |
        ```

        *   Turnaround Time: P1 = 17, P2 = 4, P3 = 24, P4 = 7
        *   Waiting Time: P1 = 9, P2 = 0, P3 = 15, P4 = 2
        *   Average Waiting Time: (9+0+15+2)/4 = 6.5ms

*   **Priority Scheduling:**
    *   **Description:** Each process is assigned a priority. The process with the highest priority (smallest integer is usually the highest) is scheduled next.
    *   **Types:**
        *   **Non-Preemptive:** Once a process with the highest priority is running, it completes before any other process can run.
        *   **Preemptive:** If a new process arrives with a higher priority than the currently running process, the currently running process is preempted.
    *   **Advantages:** Can be used to give preference to important processes.
    *   **Disadvantages:** Can lead to starvation of low-priority processes (Solution: Aging - Gradually increase the priority of processes that wait for a long time).
    *   **Example (Non-Preemptive):**

        Processes: P1 (10ms, priority 3), P2 (1ms, priority 1), P3 (2ms, priority 4), P4 (1ms, priority 5), P5 (5ms, priority 2)

        Gantt Chart:

        ```
        | P2 (0-1) | P5 (1-6) | P1 (6-16) | P3 (16-18) | P4 (18-19) |
        ```

        *   Turnaround Time: P1 = 16, P2 = 1, P3 = 18, P4 = 19, P5 = 6
        *   Waiting Time: P1 = 6, P2 = 0, P3 = 16, P4 = 18, P5 = 1
        *   Average Waiting Time: (6 + 0 + 16 + 18 + 1) / 5 = 8.2ms

*   **Round Robin (RR):**
    *   **Description:** Each process gets a small unit of CPU time (time quantum), usually 10-100 milliseconds. After this time has elapsed, the process is preempted and added to the end of the ready queue.
    *   **Advantages:** Fair, good for time-sharing systems, provides good response time.
    *   **Disadvantages:** Performance depends on the size of the time quantum. Too large a quantum degenerates to FCFS. Too small a quantum increases overhead due to context switching.
    *   **Example:**

        Processes: P1 (24ms), P2 (3ms), P3 (3ms)
        Time Quantum: 4ms

        Gantt Chart:

        ```
        | P1 (0-4) | P2 (4-7) | P3 (7-10) | P1 (10-14) | P1 (14-18) | P1 (18-22) | P1 (22-24) |
        ```

        *   Turnaround Time: P1 = 24, P2 = 7, P3 = 10
        *   Waiting Time: P1 = 0 + (10-4) + (14-10) + (18-14) + (22-18) = 16, P2 = 4, P3 = 7
        *   Average Waiting Time: (16 + 4 + 7) / 3 = 9ms

### 4. Algorithm Evaluation

*   **Deterministic Modeling:**  Takes a predetermined workload and defines the performance of each algorithm for that workload.  Simple and fast, but requires specific input and results apply only to that input.
*   **Queueing Models:** Uses queueing theory to analyze the waiting times and queue lengths based on arrival rates and service times.  Useful for understanding general trends.
*   **Simulation:** Involves creating a software simulation of the scheduling algorithms and feeding it a workload. More accurate than queueing models but more complex to implement.
*   **Implementation:** Implementing the algorithms in a real operating system and measuring their performance in a real environment.  Most accurate but expensive and time-consuming.

### 5. Practice Questions

1.  **Question:**  Consider the following set of processes, with the length of the CPU burst time given in milliseconds:

    | Process | Burst Time | Priority |
    |---|---|---|
    | P1 | 10 | 3 |
    | P2 | 1 | 1 |
    | P3 | 2 | 4 |
    | P4 | 1 | 5 |
    | P5 | 5 | 2 |

    The processes are assumed to have arrived in the order P1, P2, P3, P4, P5 all at time 0.

    a) Draw Gantt charts illustrating the execution of these processes using FCFS, SJF (non-preemptive), a non-preemptive priority (a smaller priority number implies a higher priority), and RR (quantum=1) scheduling.

    b) What is the turnaround time of each process for each of the scheduling algorithms in part a?

    c) What is the waiting time of each process for each of the scheduling algorithms in part a?

    d) Which of the algorithms results in the minimum average waiting time (over all processes)?

    **Answer:**

    a) Gantt Charts:

    *   **FCFS:**  | P1 (0-10) | P2 (10-11) | P3 (11-13) | P4 (13-14) | P5 (14-19) |
    *   **SJF:**    | P2 (0-1) | P4 (1-2) | P3 (2-4) | P5 (4-9) | P1 (9-19) |
    *   **Priority:** | P2 (0-1) | P5 (1-6) | P1 (6-16) | P3 (16-18) | P4 (18-19) |
    *   **RR:**     | P1 (0-1) | P2 (1-2) | P3 (2-3) | P4 (3-4) | P5 (4-5) | P1 (5-6) | P3 (6-7) | P5 (7-8) | P1 (8-9) | P5 (9-10) | P1 (10-11) | P1 (11-12) | P1 (12-13) | P1 (13-14) | P1 (14-15) | P1 (15-16) | P1 (16-17) | P1 (17-18) | P1 (18-19) |

    b) Turnaround Times:

    | Process | FCFS | SJF | Priority | RR |
    |---|---|---|---|---|
    | P1 | 10 | 19 | 16 | 19 |
    | P2 | 11 | 1 | 1 | 2 |
    | P3 | 13 | 4 | 18 | 7 |
    | P4 | 14 | 2 | 19 | 4 |
    | P5 | 19 | 9 | 6 | 10 |

    c) Waiting Times:

    | Process | FCFS | SJF | Priority | RR |
    |---|---|---|---|---|
    | P1 | 0 | 9 | 6 | 9 |
    | P2 | 10 | 0 | 0 | 1 |
    | P3 | 11 | 2 | 16 | 5 |
    | P4 | 13 | 1 | 18 | 3 |
    | P5 | 14 | 4 | 1 | 5 |

    d) Average Waiting Time:

    *   FCFS: (0 + 10 + 11 + 13 + 14) / 5 = 9.6
    *   SJF: (9 + 0 + 2 + 1 + 4) / 5 = 3.2
    *   Priority: (6 + 0 + 16 + 18 + 1) / 5 = 8.2
    *   RR: (9 + 1 + 5 + 3 + 5) / 5 = 4.6

    SJF results in the minimum average waiting time.

2.  **Question:** Explain the convoy effect in FCFS scheduling and how it impacts system performance.

    **Answer:** The convoy effect occurs in FCFS scheduling when a long process blocks many short processes. Imagine a single long process arrives first and occupies the CPU.  All subsequent short processes must wait for the long process to finish, creating a "convoy" of waiting processes. This significantly increases the average waiting time and reduces CPU utilization because devices might remain idle while waiting for the long process to release the CPU.

### 6. Important Points to Remember

*   Process scheduling is crucial for efficient operating system performance.
*   Different scheduling algorithms have different strengths and weaknesses.
*   The best algorithm depends on the specific requirements of the system.
*   Understanding the scheduling criteria is important for evaluating algorithm performance.
*   Context switching introduces overhead that must be considered when choosing a time quantum for Round Robin scheduling.
*   Starvation is a potential problem with priority-based scheduling and can be mitigated using techniques like aging.
