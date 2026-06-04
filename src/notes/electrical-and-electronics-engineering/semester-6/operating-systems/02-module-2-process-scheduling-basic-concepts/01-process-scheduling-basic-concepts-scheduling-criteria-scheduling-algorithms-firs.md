---
title: "Process Scheduling – Basic concepts- Scheduling criteria -scheduling algorithms- First come First Served, Shortest Job Firs, Priority scheduling, Round robin scheduling"
subject: "OPERATING SYSTEMS"
module: "Module 2: Process Scheduling – Basic concepts"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f365e2"
status: "completed"
scrapedAt: "2026-05-23T16:30:07.036Z"
---
# Module 2: Process Scheduling – Basic Concepts

## Introduction to Process Scheduling

Process scheduling is a fundamental task of an operating system. Its primary goal is to decide which process in the ready queue should be allocated the CPU next. This decision-making process is crucial for efficient system utilization and achieving desired performance objectives.

**Key Concepts:**

*   **Process:** A program in execution. It's an active entity that requires CPU time, memory, and I/O resources.
*   **Process State:** A process can be in various states, including:
    *   **New:** The process is being created.
    *   **Ready:** The process is waiting to be assigned to a processor.
    *   **Running:** The process is executing on a processor.
    *   **Waiting (Blocked):** The process is waiting for an event to occur (e.g., I/O completion).
    *   **Terminated:** The process has finished execution.
*   **Ready Queue:** A queue of processes that are ready to be executed.
*   **CPU Scheduler (Dispatcher):** The part of the operating system that selects processes from the ready queue and dispatches them to the CPU.
*   **Scheduling Algorithm:** The set of rules or policies used by the CPU scheduler to select the next process to run.

**Importance of Process Scheduling (Relates to CO2):**

Effective process scheduling ensures:

*   **Fairness:** Each process gets a reasonable share of the CPU.
*   **Efficiency:** Maximizes CPU utilization and throughput.
*   **Response Time:** Minimizes the time it takes for a process to respond to a user request.
*   **Turnaround Time:** Minimizes the total time from submission to completion of a process.
*   **Waiting Time:** Minimizes the time a process spends waiting in the ready queue.
*   **Throughput:** Maximizes the number of processes completed per unit of time.

## Scheduling Criteria

The choice of a scheduling algorithm is guided by various criteria, which represent the desired performance goals. Different criteria can conflict, requiring a trade-off.

**Key Scheduling Criteria:**

1.  **CPU Utilization:**
    *   **Goal:** Keep the CPU as busy as possible.
    *   **How:** By keeping all parts of the system busy.
    *   **Measurement:** Percentage of time the CPU is busy.

2.  **Throughput:**
    *   **Goal:** Maximize the number of processes completed per unit of time.
    *   **Measurement:** Processes per hour or processes per minute.

3.  **Turnaround Time:**
    *   **Goal:** Minimize the total time elapsed from the submission of a process to its completion.
    *   **Calculation:** `Turnaround Time = Completion Time - Arrival Time`
    *   **Impact:** Affects user satisfaction, especially for interactive systems.

4.  **Waiting Time:**
    *   **Goal:** Minimize the time a process spends waiting in the ready queue.
    *   **Calculation:** `Waiting Time = Turnaround Time - Burst Time`
    *   **Impact:** Directly relates to the fairness of the system.

5.  **Response Time:**
    *   **Goal:** Minimize the time from the submission of a request until the first response is produced.
    *   **Impact:** Crucial for interactive systems where users expect immediate feedback.

6.  **Fairness:**
    *   **Goal:** Ensure that each process gets its fair share of the CPU.
    *   **Concept:** Prevents any single process from monopolizing the CPU.

**Textbook References:**

*   Silberschatz et al. (9th Edition): Chapter 6 discusses these criteria in detail when evaluating scheduling algorithms.
*   Tanenbaum (6th Edition): Chapter 4 covers scheduling objectives and metrics.

**Important Point to Remember:**

*   There is no single "best" scheduling algorithm. The optimal choice depends on the specific workload and performance objectives of the system.

## Scheduling Algorithms

The CPU scheduler uses various algorithms to select the next process. We will explore some of the most common and fundamental ones.

### 1. First-Come, First-Served (FCFS) / First-In, First-Out (FIFO)

**Concept:**
The simplest scheduling algorithm. Processes are allocated the CPU in the order they arrive in the ready queue.

**Mechanism:**
*   A queue is maintained for processes waiting for the CPU.
*   When a process arrives, it is added to the tail of the queue.
*   When the CPU becomes free, the process at the head of the queue is selected.

**Example:**
Consider the following processes with their Burst Times (time required by the CPU):

| Process | Arrival Time | Burst Time |
| :------ | :----------- | :--------- |
| P1      | 0            | 24         |
| P2      | 1            | 3          |
| P3      | 2            | 3          |

**Gantt Chart:**

```
| P1 (24) | P2 (3) | P3 (3) |
0       24       27       30
```

**Calculations:**

*   **P1:**
    *   Arrival Time: 0
    *   Burst Time: 24
    *   Completion Time: 24
    *   Turnaround Time: 24 - 0 = 24
    *   Waiting Time: 24 - 24 = 0
*   **P2:**
    *   Arrival Time: 1
    *   Burst Time: 3
    *   Completion Time: 27
    *   Turnaround Time: 27 - 1 = 26
    *   Waiting Time: 26 - 3 = 23
*   **P3:**
    *   Arrival Time: 2
    *   Burst Time: 3
    *   Completion Time: 30
    *   Turnaround Time: 30 - 2 = 28
    *   Waiting Time: 28 - 3 = 25

**Average Waiting Time:** (0 + 23 + 25) / 3 = 48 / 3 = **16**
**Average Turnaround Time:** (24 + 26 + 28) / 3 = 78 / 3 = **26**

**Advantages:**
*   Simple to understand and implement.

**Disadvantages:**
*   **Convoy Effect:** Short processes can get stuck behind long processes, leading to very high average waiting times. This is its major drawback.
*   Not suitable for time-sharing systems or systems with diverse process lengths.

**Textbook References:**

*   Silberschatz et al. (9th Edition): Section 6.1.1.
*   Nutt, Chaki, Neogy (3rd Edition): Chapter 5.

### 2. Shortest Job First (SJF)

**Concept:**
The process with the smallest next CPU burst time is selected to run next. SJF can be implemented in two ways:

*   **Non-preemptive SJF:** Once a process starts executing, it cannot be preempted until it completes its CPU burst.
*   **Preemptive SJF (Shortest Remaining Time First - SRTF):** If a new process arrives with a CPU burst length less than the remaining time of the currently executing process, the current process is preempted, and the new process is executed.

**Mechanism (Non-preemptive SJF):**
*   When the CPU is free, the scheduler examines the ready queue and selects the process with the smallest burst time.
*   If two processes have the same burst time, FCFS is used to break the tie.

**Example (Non-preemptive SJF):**
Using the same processes as the FCFS example:

| Process | Arrival Time | Burst Time |
| :------ | :----------- | :--------- |
| P1      | 0            | 24         |
| P2      | 1            | 3          |
| P3      | 2            | 3          |

**Gantt Chart:**

At time 0, only P1 is available. P1 starts.
At time 1, P2 arrives. P1's remaining time is 23. P2's burst time is 3. Since P1 is already running, it continues (non-preemptive).
At time 2, P3 arrives. P1's remaining time is 22. P3's burst time is 3.
At time 24, P1 finishes. The ready queue contains P2 (burst 3) and P3 (burst 3). Both have the same burst time. FCFS tie-breaker means P2 is chosen.
At time 27, P2 finishes. P3 is the only one left.

```
| P1 (24) | P2 (3) | P3 (3) |
0       24       27       30
```

**Calculations (Non-preemptive SJF):**

*   **P1:**
    *   Arrival Time: 0
    *   Burst Time: 24
    *   Completion Time: 24
    *   Turnaround Time: 24 - 0 = 24
    *   Waiting Time: 24 - 24 = 0
*   **P2:**
    *   Arrival Time: 1
    *   Burst Time: 3
    *   Completion Time: 27
    *   Turnaround Time: 27 - 1 = 26
    *   Waiting Time: 26 - 3 = 23
*   **P3:**
    *   Arrival Time: 2
    *   Burst Time: 3
    *   Completion Time: 30
    *   Turnaround Time: 30 - 2 = 28
    *   Waiting Time: 28 - 3 = 25

**Average Waiting Time:** (0 + 23 + 25) / 3 = 48 / 3 = **16**
**Average Turnaround Time:** (24 + 26 + 28) / 3 = 78 / 3 = **26**

*(In this specific example, non-preemptive SJF with FCFS tie-breaker yields the same result as FCFS. This is because the shortest jobs arrived after the longest job started and did not preempt it.)*

**Let's consider a different example for SJF to highlight its benefit:**

| Process | Arrival Time | Burst Time |
| :------ | :----------- | :--------- |
| P1      | 0            | 7          |
| P2      | 2            | 4          |
| P3      | 4            | 1          |
| P4      | 5            | 4          |

**Non-preemptive SJF:**

At time 0, P1 arrives. It starts.
At time 2, P2 arrives (burst 4). P1 remaining is 5. P1 continues.
At time 4, P3 arrives (burst 1). P1 remaining is 3. P1 continues.
At time 5, P4 arrives (burst 4). P1 remaining is 2. P1 continues.
At time 7, P1 finishes. Ready queue: P2 (burst 4), P3 (burst 1), P4 (burst 4).
Shortest is P3. P3 starts.
At time 8, P3 finishes. Ready queue: P2 (burst 4), P4 (burst 4).
Tie between P2 and P4. FCFS tie-breaker. P2 arrived earlier. P2 starts.
At time 12, P2 finishes. P4 starts.
At time 16, P4 finishes.

**Gantt Chart (Non-preemptive SJF):**

```
| P1 (7) | P3 (1) | P2 (4) | P4 (4) |
0      7        8        12     16
```

**Calculations (Non-preemptive SJF):**

*   **P1:**
    *   Arrival: 0, Burst: 7, Completion: 7, Turnaround: 7, Waiting: 0
*   **P2:**
    *   Arrival: 2, Burst: 4, Completion: 12, Turnaround: 10, Waiting: 6
*   **P3:**
    *   Arrival: 4, Burst: 1, Completion: 8, Turnaround: 4, Waiting: 3
*   **P4:**
    *   Arrival: 5, Burst: 4, Completion: 16, Turnaround: 11, Waiting: 7

**Average Waiting Time:** (0 + 6 + 3 + 7) / 4 = 16 / 4 = **4**
**Average Turnaround Time:** (7 + 10 + 4 + 11) / 4 = 32 / 4 = **8**

Compare this to FCFS for the same example:
**Gantt Chart (FCFS):**
```
| P1 (7) | P2 (4) | P3 (1) | P4 (4) |
0      7        11       12     16
```
**Calculations (FCFS):**
*   **P1:** Completion 7, Turnaround 7, Waiting 0
*   **P2:** Completion 11, Turnaround 9, Waiting 5
*   **P3:** Completion 12, Turnaround 8, Waiting 7
*   **P4:** Completion 16, Turnaround 11, Waiting 7
**Average Waiting Time (FCFS):** (0+5+7+7)/4 = 19/4 = **4.75**

SJF significantly reduces average waiting time.

**Preemptive SJF (SRTF):**

At time 0, P1 arrives (burst 7). P1 starts.
At time 2, P2 arrives (burst 4). P1 remaining is 5. P2's burst (4) is shorter than P1's remaining time (5). P1 is preempted. P2 starts.
At time 4, P3 arrives (burst 1). P2 remaining is 2. P3's burst (1) is shorter than P2's remaining time (2). P2 is preempted. P3 starts.
At time 5, P3 finishes. P4 arrives (burst 4). Ready queue: P1 (remaining 5), P2 (remaining 2), P4 (burst 4).
Shortest remaining is P2. P2 restarts.
At time 7, P2 finishes. Ready queue: P1 (remaining 5), P4 (burst 4).
Shortest is P4. P4 starts.
At time 11, P4 finishes. Ready queue: P1 (remaining 5).
P1 restarts.
At time 16, P1 finishes.

**Gantt Chart (SRTF):**

```
| P1 (2) | P2 (2) | P3 (1) | P2 (2) | P4 (4) | P1 (5) |
0      2        4        5        7        11     16
```

**Calculations (SRTF):**

*   **P1:**
    *   Arrival: 0, Burst: 7. Ran from 0-2 (2 units), then 11-16 (5 units).
    *   Completion Time: 16
    *   Turnaround Time: 16 - 0 = 16
    *   Waiting Time: (Turnaround Time) - (Burst Time) = 16 - 7 = **9** (Waited from time 2 to 11)
*   **P2:**
    *   Arrival: 2, Burst: 4. Ran from 2-4 (2 units), then 7-11 (4 units).
    *   Completion Time: 11
    *   Turnaround Time: 11 - 2 = 9
    *   Waiting Time: 9 - 4 = **5** (Waited from time 4 to 7)
*   **P3:**
    *   Arrival: 4, Burst: 1. Ran from 4-5 (1 unit).
    *   Completion Time: 5
    *   Turnaround Time: 5 - 4 = 1
    *   Waiting Time: 1 - 1 = **0**
*   **P4:**
    *   Arrival: 5, Burst: 4. Ran from 5-11 (4 units).
    *   Completion Time: 11
    *   Turnaround Time: 11 - 5 = 6
    *   Waiting Time: 6 - 4 = **2** (Waited from time 11 to 11, effectively 0 wait if it started immediately after P2 finished)
    *   Correction: P4 arrived at 5 and started running at 7. So waiting time is 7 - 5 = 2.

**Average Waiting Time (SRTF):** (9 + 5 + 0 + 2) / 4 = 16 / 4 = **4**
**Average Turnaround Time (SRTF):** (16 + 9 + 1 + 6) / 4 = 32 / 4 = **8**

SRTF often provides the best average waiting time.

**Advantages:**
*   Provably optimal in terms of minimizing average waiting time.

**Disadvantages:**
*   **Difficult to predict:** The next CPU burst time cannot be known with certainty. It must be estimated, which is a major issue.
*   **Starvation:** Longer jobs may never get to run if there is a continuous stream of shorter jobs.
*   **Preemptive version (SRTF) has higher overhead** due to context switching.

**Textbook References:**

*   Silberschatz et al. (9th Edition): Section 6.1.2.
*   Tanenbaum (6th Edition): Chapter 4.
*   Dhamdhere (2nd Edition): Chapter 5.

**Important Point to Remember:**
SJF is the best algorithm theoretically for minimizing average waiting time, but its practical implementation is challenging due to the inability to accurately predict future CPU burst times.

### 3. Priority Scheduling

**Concept:**
Each process is assigned a priority, and the process with the highest priority is selected to run next. Priorities are typically assigned based on factors like:

*   Importance of the process (e.g., system processes vs. user processes)
*   Resource requirements
*   Time constraints

**Mechanism:**
*   Processes are assigned a numerical priority.
*   The scheduler always picks the process with the highest priority (lower number usually means higher priority, but this convention can vary).
*   Like SJF, priority scheduling can be:
    *   **Non-preemptive:** Once a process starts, it runs to completion or until it blocks.
    *   **Preemptive:** If a new process arrives with a higher priority than the currently running process, the current process is preempted.

**Example (Preemptive Priority Scheduling):**
Consider the following processes:

| Process | Arrival Time | Burst Time | Priority |
| :------ | :----------- | :--------- | :------- |
| P1      | 0            | 10         | 2        |
| P2      | 1            | 5          | 1 (Higher) |
| P3      | 2            | 8          | 3        |
| P4      | 3            | 6          | 4        |

*(Lower number indicates higher priority)*

**Gantt Chart (Preemptive Priority):**

At time 0, P1 arrives (Priority 2). P1 starts.
At time 1, P2 arrives (Priority 1 - higher than P1). P1 is preempted. P2 starts.
At time 2, P3 arrives (Priority 3). P2 continues (Priority 1 is still highest).
At time 3, P4 arrives (Priority 4). P2 continues.
At time 6, P2 finishes (burst 5). Ready queue: P1 (remaining 8, Priority 2), P3 (burst 8, Priority 3), P4 (burst 6, Priority 4).
Highest priority is P1. P1 restarts.
At time 14, P1 finishes (ran for 10 total units: 1 unit initially + 7 units now). Ready queue: P3 (burst 8, Priority 3), P4 (burst 6, Priority 4).
Highest priority is P3. P3 starts.
At time 22, P3 finishes. P4 starts.
At time 28, P4 finishes.

```
| P1 (1) | P2 (5) | P1 (7) | P3 (8) | P4 (6) |
0      1        6        14     22       28
```

**Calculations (Preemptive Priority):**

*   **P1:**
    *   Arrival: 0, Burst: 10, Priority: 2. Ran from 0-1 (1 unit) and 6-14 (8 units).
    *   Completion Time: 14
    *   Turnaround Time: 14 - 0 = 14
    *   Waiting Time: 14 - 10 = **4** (Waited from time 1 to 6)
*   **P2:**
    *   Arrival: 1, Burst: 5, Priority: 1. Ran from 1-6 (5 units).
    *   Completion Time: 6
    *   Turnaround Time: 6 - 1 = 5
    *   Waiting Time: 5 - 5 = **0**
*   **P3:**
    *   Arrival: 2, Burst: 8, Priority: 3. Ran from 14-22 (8 units).
    *   Completion Time: 22
    *   Turnaround Time: 22 - 2 = 20
    *   Waiting Time: 20 - 8 = **12** (Waited from time 2 to 14)
*   **P4:**
    *   Arrival: 3, Burst: 6, Priority: 4. Ran from 22-28 (6 units).
    *   Completion Time: 28
    *   Turnaround Time: 28 - 3 = 25
    *   Waiting Time: 25 - 6 = **19** (Waited from time 3 to 22)

**Average Waiting Time:** (4 + 0 + 12 + 19) / 4 = 35 / 4 = **8.75**
**Average Turnaround Time:** (14 + 5 + 20 + 25) / 4 = 64 / 4 = **16**

**Advantages:**
*   Allows important processes to be executed before less important ones.

**Disadvantages:**
*   **Starvation:** Low-priority processes may never get to run if there is a continuous stream of high-priority processes.
*   **Aging:** A technique to prevent starvation by gradually increasing the priority of processes that have been waiting for a long time.

**Textbook References:**

*   Silberschatz et al. (9th Edition): Section 6.1.3.
*   Tanenbaum (6th Edition): Chapter 4.
*   Haldar & Aravind (Pearson): Discusses priority scheduling and aging.

**Important Point to Remember:**
Priority scheduling is useful for differentiating processes based on importance, but care must be taken to avoid starvation, often by implementing aging.

### 4. Round Robin (RR) Scheduling

**Concept:**
Designed for time-sharing systems. Each process is given a small unit of CPU time called a **time quantum** or **time slice**. After this time quantum expires, the process is preempted and added to the end of the ready queue.

**Mechanism:**
*   The ready queue is treated as a circular queue.
*   The CPU scheduler picks a process from the front of the ready queue and allocates the CPU to it.
*   If the process runs for longer than the time quantum, it is preempted and moved to the tail of the ready queue.
*   If the process finishes before the time quantum expires, it releases the CPU voluntarily, and the scheduler picks the next process from the front of the ready queue.

**Example:**
Consider the following processes with their Burst Times and a Time Quantum of 4:

| Process | Arrival Time | Burst Time |
| :------ | :----------- | :--------- |
| P1      | 0            | 24         |
| P2      | 1            | 3          |
| P3      | 2            | 3          |

**Gantt Chart (Round Robin, Time Quantum = 4):**

At time 0, P1 arrives. P1 starts.
At time 1, P2 arrives. P2 goes to the ready queue.
At time 2, P3 arrives. P3 goes to the ready queue.
At time 4, P1's quantum expires (remaining 20). P1 is preempted and moved to the tail of the queue. Ready queue: [P2, P3, P1]. P2 starts.
At time 7, P2 finishes (used 3 units, less than quantum). Ready queue: [P3, P1]. P3 starts.
At time 11, P3 finishes (used 4 units, quantum expired). Ready queue: [P1]. P1 starts.
At time 15, P1's quantum expires (remaining 16). P1 is preempted and moved to the tail. Ready queue: [P1]. P1 starts.
At time 19, P1's quantum expires (remaining 12). P1 is preempted and moved to the tail. Ready queue: [P1]. P1 starts.
At time 23, P1's quantum expires (remaining 8). P1 is preempted and moved to the tail. Ready queue: [P1]. P1 starts.
At time 27, P1's quantum expires (remaining 4). P1 is preempted and moved to the tail. Ready queue: [P1]. P1 starts.
At time 31, P1 finishes (used last 4 units). Ready queue empty.

```
| P1 (4) | P2 (3) | P3 (4) | P1 (4) | P1 (4) | P1 (4) | P1 (4) | P1 (4) |
0      4        7        11       15       19       23       27       31
```

**Calculations (Round Robin, Time Quantum = 4):**

*   **P1:**
    *   Arrival: 0, Burst: 24.
    *   Runs: 0-4, 11-15, 15-19, 19-23, 23-27, 27-31. Total 24.
    *   Completion Time: 31
    *   Turnaround Time: 31 - 0 = 31
    *   Waiting Time: Turnaround - Burst = 31 - 24 = **7** (Total time spent in ready queue).
*   **P2:**
    *   Arrival: 1, Burst: 3.
    *   Runs: 4-7. Total 3.
    *   Completion Time: 7
    *   Turnaround Time: 7 - 1 = 6
    *   Waiting Time: 6 - 3 = **3** (Waited from time 1 to 4)
*   **P3:**
    *   Arrival: 2, Burst: 3.
    *   Runs: 7-11. Total 4 (used 4 units, quantum expired).
    *   Completion Time: 11
    *   Turnaround Time: 11 - 2 = 9
    *   Waiting Time: 9 - 3 = **6** (Waited from time 2 to 7)

**Average Waiting Time:** (7 + 3 + 6) / 3 = 16 / 3 = **5.33**
**Average Turnaround Time:** (31 + 6 + 9) / 3 = 46 / 3 = **15.33**

**Impact of Time Quantum:**

*   **Small Time Quantum:**
    *   High overhead due to frequent context switching.
    *   All processes get to run frequently, leading to good response time.
    *   Average turnaround time and waiting time tend to increase because processes get swapped out quickly.
*   **Large Time Quantum:**
    *   Approaches FCFS behavior.
    *   Lower context switching overhead.
    *   Poor response time if a long process is at the front of the queue.

**Choosing the Time Quantum:**
The time quantum should be slightly larger than the typical interaction time of a process. A quantum that is too short is inefficient, while a quantum that is too long degenerates to FCFS.

**Advantages:**
*   Provides good response time, making it suitable for interactive systems.
*   Fair to all processes.

**Disadvantages:**
*   Average waiting time can be high if the time quantum is small.
*   Performance is highly dependent on the chosen time quantum.

**Textbook References:**

*   Silberschatz et al. (9th Edition): Section 6.1.4.
*   Tanenbaum (6th Edition): Chapter 4.
*   Dhamdhere (2nd Edition): Chapter 5.

**Important Point to Remember:**
Round Robin is a preemptive algorithm designed for fairness and good response times in time-sharing environments. The effectiveness of RR is heavily influenced by the size of the time quantum.

## Practice Questions and Answers

**Question 1:**
Consider the following processes with their CPU burst times:
| Process | Burst Time |
| :------ | :--------- |
| P1      | 10         |
| P2      | 5          |
| P3      | 8          |

If these processes arrive at time 0, calculate the average waiting time using FCFS and SJF (non-preemptive) scheduling.

**Answer 1:**

**FCFS:**
Gantt Chart: | P1 (10) | P2 (5) | P3 (8) |
             0       10       15       23
*   P1: Waiting Time = 0
*   P2: Waiting Time = 10
*   P3: Waiting Time = 10 + 5 = 15
Average Waiting Time (FCFS) = (0 + 10 + 15) / 3 = 25 / 3 = **8.33**

**SJF (Non-preemptive):**
Order of execution based on burst time: P2 (5), P3 (8), P1 (10)
Gantt Chart: | P2 (5) | P3 (8) | P1 (10) |
             0       5        13       23
*   P2: Waiting Time = 0
*   P3: Waiting Time = 5
*   P1: Waiting Time = 5 + 8 = 13
Average Waiting Time (SJF) = (0 + 5 + 13) / 3 = 18 / 3 = **6**

**Question 2:**
Given the following processes with arrival times, burst times, and priorities (lower number = higher priority):
| Process | Arrival Time | Burst Time | Priority |
| :------ | :----------- | :--------- | :------- |
| P1      | 0            | 7          | 3        |
| P2      | 1            | 4          | 1        |
| P3      | 3            | 2          | 2        |

Calculate the average waiting time using preemptive Priority scheduling.

**Answer 2:**

At time 0, P1 arrives (Priority 3). P1 starts.
At time 1, P2 arrives (Priority 1 - higher than P1). P1 is preempted. P2 starts.
At time 3, P3 arrives (Priority 2). P2 continues (Priority 1 is highest).
At time 5, P2 finishes (burst 4). Ready queue: P1 (remaining 5, Priority 3), P3 (burst 2, Priority 2).
Highest priority is P3. P3 starts.
At time 7, P3 finishes. Ready queue: P1 (remaining 5, Priority 3).
P1 restarts.
At time 12, P1 finishes.

Gantt Chart: | P1 (1) | P2 (4) | P3 (2) | P1 (5) |
             0      1        5        7        12

Calculations:
*   P1: Arrival 0, Burst 7, Priority 3. Runs 0-1 (1 unit), 7-12 (5 units).
    Completion Time: 12. Turnaround Time: 12. Waiting Time: 12 - 7 = **5** (Waited from 1 to 7).
*   P2: Arrival 1, Burst 4, Priority 1. Runs 1-5 (4 units).
    Completion Time: 5. Turnaround Time: 4. Waiting Time: 4 - 4 = **0**.
*   P3: Arrival 3, Burst 2, Priority 2. Runs 5-7 (2 units).
    Completion Time: 7. Turnaround Time: 4. Waiting Time: 4 - 2 = **2** (Waited from 3 to 5).

Average Waiting Time = (5 + 0 + 2) / 3 = 7 / 3 = **2.33**

**Question 3:**
Explain the main drawback of FCFS scheduling and how SJF aims to mitigate it.

**Answer 3:**
The main drawback of FCFS is the **convoy effect**, where short processes get stuck behind long processes, leading to significantly higher average waiting times. SJF aims to mitigate this by always selecting the process with the shortest CPU burst. This ensures that shorter processes are executed promptly, thus reducing the overall waiting time for these processes and, consequently, the system's average waiting time. However, SJF can lead to starvation of longer processes.

## Summary and Key Takeaways

*   **Process Scheduling:** The OS component that decides which process in the ready queue gets the CPU next.
*   **Scheduling Criteria:** CPU utilization, throughput, turnaround time, waiting time, response time, and fairness are key metrics for evaluating algorithms.
*   **FCFS:** Simple, but prone to the convoy effect.
*   **SJF:** Optimal for average waiting time but difficult to predict and can cause starvation. SRTF is its preemptive version.
*   **Priority Scheduling:** Allows important processes to run first but needs aging to prevent starvation.
*   **Round Robin:** Fair, provides good response time, suitable for time-sharing, but sensitive to the time quantum.

## Relation to Course Outcomes

*   **CO1 (Relevance, structure, functions of OS):** This module directly relates to the function of process management within an OS. Understanding scheduling is key to understanding how an OS manages resources and executes programs.
*   **CO2 (Process management and scheduling mechanisms):** This entire module is dedicated to illustrating the concepts of process management and the specific mechanisms of various scheduling algorithms (FCFS, SJF, Priority, RR).

These notes cover the fundamental concepts of process scheduling, the criteria used to evaluate them, and the mechanics of four primary scheduling algorithms: First-Come, First-Served (FCFS), Shortest Job First (SJF), Priority Scheduling, and Round Robin. The examples and calculations provided help in understanding their performance characteristics.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
