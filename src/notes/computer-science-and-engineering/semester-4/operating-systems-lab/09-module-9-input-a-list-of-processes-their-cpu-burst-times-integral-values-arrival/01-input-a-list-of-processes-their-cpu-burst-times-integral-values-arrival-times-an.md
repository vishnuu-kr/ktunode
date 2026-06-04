---
title: "Input a list of processes, their CPU burst times (integral values), arrival times, and priorities. Then simulate FCFS, SRTF, non-preemptive priority (a larger priority number implies a higher priority), and RR (quantum = 3 units) scheduling algorithms on the process mix, determining which algorithm results in the minimum average waiting time (over all processes)."
subject: "OPERATING SYSTEMS LAB"
module: "Module 9: Input a list of processes, their CPU burst times (integral values), arrival times, and priorities. Then simulate FCFS, SRTF, non"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b49b"
status: "completed"
scrapedAt: "2026-05-20T16:14:59.178Z"
---
## OPERATING SYSTEMS LAB: Module 9 - CPU Scheduling Algorithms

**Topic:** Input a list of processes, their CPU burst times (integral values), arrival times, and priorities. Then simulate FCFS, SRTF, non-preemptive priority (a larger priority number implies a higher priority), and RR (quantum = 3 units) scheduling algorithms on the process mix, determining which algorithm results in the minimum average waiting time (over all processes).

**Learning Outcomes:**

*   Understand the principles of different CPU scheduling algorithms (FCFS, SRTF, Non-Preemptive Priority, and RR).
*   Be able to calculate completion time, turnaround time, and waiting time for each process under each scheduling algorithm.
*   Implement and simulate these scheduling algorithms.
*   Analyze the performance of each algorithm by calculating the average waiting time.
*   Compare and contrast the performance of different scheduling algorithms and determine the best one for a given process mix.

### 1. Key Concepts and Definitions

*   **Process:** A program in execution. Each process has attributes such as CPU burst time, arrival time, and priority.
*   **CPU Burst Time:** The amount of time the CPU is required to execute the process.
*   **Arrival Time:** The time at which a process enters the ready queue.
*   **Priority:** A numerical value assigned to a process, indicating its relative importance. *Note:* In this case, a *larger* number implies a *higher* priority.
*   **Completion Time:** The time at which a process finishes its execution.
*   **Turnaround Time:** The time elapsed between a process's arrival and its completion (Completion Time - Arrival Time).
*   **Waiting Time:** The time a process spends waiting in the ready queue (Turnaround Time - CPU Burst Time).
*   **Average Waiting Time:** The average of the waiting times of all processes. This is a common metric to evaluate CPU scheduling algorithms.
*   **Quantum (Time Slice):**  A fixed unit of time allotted to each process in the Round Robin algorithm.
*   **Preemptive Scheduling:** A scheduling discipline where the currently running process can be interrupted and moved to the ready queue.
*   **Non-Preemptive Scheduling:** A scheduling discipline where a process, once started, runs to completion or voluntarily yields the CPU.
*   **Context Switching:** The process of storing the state of a process so that it can be restored and resume execution at a later point. It is a overhead in preemptive scheduling algorithms.

### 2. Scheduling Algorithms

#### 2.1 First-Come, First-Served (FCFS)

*   **Description:** Processes are executed in the order they arrive.
*   **Scheduling Type:** Non-preemptive.
*   **Advantages:** Simple to implement.
*   **Disadvantages:** Can lead to long waiting times, especially if a long process arrives early (Convoy Effect).

**Example:**

| Process | Arrival Time | Burst Time |
|---|---|---|
| P1 | 0 | 8 |
| P2 | 1 | 4 |
| P3 | 2 | 9 |
| P4 | 3 | 5 |

**Gantt Chart:**

```
0  P1  8  P2  12  P3  21  P4  26
```

**Calculations:**

| Process | Arrival Time | Burst Time | Completion Time | Turnaround Time | Waiting Time |
|---|---|---|---|---|---|
| P1 | 0 | 8 | 8 | 8 | 0 |
| P2 | 1 | 4 | 12 | 11 | 7 |
| P3 | 2 | 9 | 21 | 19 | 10 |
| P4 | 3 | 5 | 26 | 23 | 18 |

**Average Waiting Time:** (0 + 7 + 10 + 18) / 4 = 8.75

#### 2.2 Shortest Remaining Time First (SRTF)

*   **Description:** Preemptive version of Shortest Job First (SJF). The process with the smallest remaining burst time is executed. If a new process arrives with a shorter remaining burst time than the currently running process, the current process is preempted.
*   **Scheduling Type:** Preemptive.
*   **Advantages:** Optimal in minimizing average waiting time.
*   **Disadvantages:** Requires knowledge of future burst times, which is often not possible.  Can cause starvation for longer processes.  High overhead due to context switching.

**Example:**

| Process | Arrival Time | Burst Time |
|---|---|---|
| P1 | 0 | 8 |
| P2 | 1 | 4 |
| P3 | 2 | 9 |
| P4 | 3 | 5 |

**Gantt Chart:**

```
0  P1  1  P2  5  P4  10  P1  14  P3  23
```

**Calculations:**

| Process | Arrival Time | Burst Time | Completion Time | Turnaround Time | Waiting Time |
|---|---|---|---|---|---|
| P1 | 0 | 8 | 14 | 14 | 6 |
| P2 | 1 | 4 | 5 | 4 | 0 |
| P3 | 2 | 9 | 23 | 21 | 12 |
| P4 | 3 | 5 | 10 | 7 | 2 |

**Average Waiting Time:** (6 + 0 + 12 + 2) / 4 = 5

#### 2.3 Non-Preemptive Priority Scheduling

*   **Description:**  Processes are executed based on their priority.  A process with higher priority (larger priority number in this case) is executed first. Once a process starts, it runs to completion without being interrupted.
*   **Scheduling Type:** Non-preemptive.
*   **Advantages:** Simple and allows important processes to be executed quickly.
*   **Disadvantages:** Can lead to starvation for low-priority processes.

**Example:**

| Process | Arrival Time | Burst Time | Priority |
|---|---|---|---|
| P1 | 0 | 8 | 3 |
| P2 | 1 | 4 | 1 |
| P3 | 2 | 9 | 4 |
| P4 | 3 | 5 | 2 |

**Gantt Chart:**

```
0  P1  8  P3  17  P4  22  P2  26
```

**Calculations:**

| Process | Arrival Time | Burst Time | Priority | Completion Time | Turnaround Time | Waiting Time |
|---|---|---|---|---|---|---|
| P1 | 0 | 8 | 3 | 8 | 8 | 0 |
| P2 | 1 | 4 | 1 | 26 | 25 | 21 |
| P3 | 2 | 9 | 4 | 17 | 15 | 6 |
| P4 | 3 | 5 | 2 | 22 | 19 | 14 |

**Average Waiting Time:** (0 + 21 + 6 + 14) / 4 = 10.25

#### 2.4 Round Robin (RR) Scheduling

*   **Description:** Each process gets a fixed time slice (quantum). If a process doesn't complete within its quantum, it is preempted and moved to the end of the ready queue.
*   **Scheduling Type:** Preemptive.
*   **Advantages:** Fair; provides good response time for all processes.
*   **Disadvantages:** Performance depends heavily on the quantum size. Too small a quantum leads to excessive context switching overhead. Too large a quantum degrades to FCFS.

**Example (Quantum = 3):**

| Process | Arrival Time | Burst Time |
|---|---|---|
| P1 | 0 | 8 |
| P2 | 1 | 4 |
| P3 | 2 | 9 |
| P4 | 3 | 5 |

**Gantt Chart:**

```
0  P1  3  P2  6  P3  9  P4  12  P1  15  P3  18  P4  20  P1  21  P3  24  P3 26
```

**Calculations:**

| Process | Arrival Time | Burst Time | Completion Time | Turnaround Time | Waiting Time |
|---|---|---|---|---|---|
| P1 | 0 | 8 | 21 | 21 | 13 |
| P2 | 1 | 4 | 6 | 5 | 1 |
| P3 | 2 | 9 | 26 | 24 | 15 |
| P4 | 3 | 5 | 20 | 17 | 12 |

**Average Waiting Time:** (13 + 1 + 15 + 12) / 4 = 10.25

### 3. Implementation and Simulation

*   **Data Structures:**  Use appropriate data structures to represent processes (e.g., structures or classes).  Queues are useful for managing the ready queue in FCFS and RR.
*   **Logic:**
    1.  **Input:** Get the number of processes, their arrival times, burst times, and priorities.
    2.  **Simulation:**
        *   Implement each algorithm separately.
        *   Maintain a time variable that represents the current system time.
        *   Update process states (ready, running, finished) based on the algorithm's rules.
        *   Calculate completion time, turnaround time, and waiting time for each process.
    3.  **Output:** Display the Gantt chart and the average waiting time for each algorithm.
    4.  **Comparison:** Compare the average waiting times and identify the algorithm with the minimum average waiting time.

### 4. Analyzing and Comparing Algorithms

*   **Performance Metrics:**
    *   Average Waiting Time: The primary metric in this exercise. Lower is better.
    *   Turnaround Time: The time taken to execute a process. Lower is better.
    *   Throughput: The number of processes completed per unit time. Higher is better.
    *   CPU Utilization: The percentage of time the CPU is busy. Higher is generally better.
*   **Factors Affecting Performance:**
    *   Process Mix: The specific arrival times, burst times, and priorities of the processes.
    *   Quantum Size (RR):  A poorly chosen quantum can significantly impact RR's performance.
    *   Context Switching Overhead:  Preemptive algorithms have higher overhead.

### 5. Practice Questions/Exercises

**Question 1:** Consider the following set of processes, with the length of the CPU burst time given in milliseconds:

| Process | Arrival Time | Burst Time | Priority |
|---|---|---|---|
| P1 | 0 | 10 | 3 |
| P2 | 1 | 1 | 1 |
| P3 | 2 | 2 | 3 |
| P4 | 3 | 1 | 4 |
| P5 | 4 | 5 | 2 |

Calculate the average waiting time for these processes using:

(a) FCFS
(b) SRTF
(c) Non-Preemptive Priority (larger number = higher priority)
(d) RR (Quantum = 2)

**Answer:**

**(a) FCFS:**

Gantt Chart: `0 P1 10 P2 11 P3 13 P4 14 P5 19`
Average Waiting Time: (0 + 9 + 9 + 10 + 10) / 5 = 7.6

**(b) SRTF:**

Gantt Chart: `0 P1 1 P2 2 P4 4 P3 9 P5 14 P1 19`
Average Waiting Time: (9 + 0 + 2 + 0 + 5) / 5 = 3.2

**(c) Non-Preemptive Priority:**

Gantt Chart: `0 P1 10 P3 12 P5 17 P2 18 P4 19`
Average Waiting Time: (0 + 17 + 10 + 15 + 7) / 5 = 9.8

**(d) RR (Quantum = 2):**

Gantt Chart: `0 P1 2 P2 3 P3 5 P4 6 P5 8 P1 10 P3 12 P5 14 P1 16 P5 17 P1 19`
Average Waiting Time: (9 + 2 + 8 + 3 + 4) / 5 = 5.2

**Question 2:**  What are the advantages and disadvantages of using a very small quantum in Round Robin scheduling?

**Answer:**

**Advantages:**

*   Improved response time for interactive processes.
*   Processes receive CPU time relatively frequently.

**Disadvantages:**

*   High context switching overhead, which reduces CPU utilization.
*   Can lead to poor overall throughput due to frequent interruptions.

**Question 3:** Under what circumstances would FCFS perform better than SRTF?

**Answer:**

FCFS would perform better than SRTF in scenarios where all processes have approximately the same burst time, and the overhead of context switching in SRTF outweighs the benefits of scheduling the shortest job first.  Also, if the overhead of determining the burst time for SRTF is too great it can negate its benefits.

### 6. Important Points to Remember

*   Understand the key differences between preemptive and non-preemptive scheduling.
*   Be able to trace the execution of each algorithm and calculate waiting times.
*   Know the advantages and disadvantages of each algorithm.
*   Understand the importance of the quantum size in Round Robin scheduling.
*   Real-world systems often use hybrid scheduling algorithms, combining the strengths of different algorithms.
*   The "best" scheduling algorithm depends on the specific requirements of the system (e.g., minimizing response time, maximizing throughput).
*   Starvation is a problem that must be considered when implementing scheduling algorithms, particularly with priority-based scheduling.

By understanding these concepts and practicing these algorithms, you will be well-prepared for your Operating Systems Lab module on CPU scheduling. Good luck!
