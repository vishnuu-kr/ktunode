---
title: "EDF Scheduling"
subject: "REAL TIME SYSTEMS"
module: "Module 2: Real"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c314"
status: "completed"
scrapedAt: "2026-05-20T17:10:03.715Z"
---
# Real-Time Systems: Module 2 - Real-Time Scheduling

## Topic: Earliest Deadline First (EDF) Scheduling

---

### 1. Introduction to EDF Scheduling

*   **What is EDF?**
    *   Earliest Deadline First (EDF) is a dynamic-priority scheduling algorithm used in real-time operating systems.
    *   It is a preemptive algorithm, meaning that a higher-priority task (one with an earlier deadline) can interrupt a lower-priority task currently executing.
    *   The priority of a task is not fixed; it changes dynamically based on its absolute deadline.

*   **Core Principle:**
    *   At any given point in time, the task with the earliest absolute deadline is selected to execute.

*   **Why is it important?**
    *   EDF is optimal for uniprocessor systems. This means that if a set of real-time tasks can be scheduled successfully by *any* uniprocessor scheduling algorithm, it can also be scheduled successfully by EDF.
    *   It's a widely used and powerful algorithm for managing real-time tasks.

---

### 2. Key Concepts and Definitions

*   **Task:** A unit of work that needs to be executed. In real-time systems, tasks are characterized by properties like execution time, period, and deadline.

*   **Absolute Deadline (D<sub>i</sub>):** The time by which a specific instance of a task must complete its execution. For a task $i$, its absolute deadline for a particular job is its release time plus its relative deadline.
    *   $Absolute\_Deadline(Job_i) = Release\_Time(Job_i) + Relative\_Deadline_i$

*   **Release Time (r<sub>i</sub>):** The time at which an instance of a task becomes ready for execution.

*   **Relative Deadline (d<sub>i</sub>):** The maximum time allowed for a task to complete its execution from its release time.

*   **Execution Time (C<sub>i</sub>):** The worst-case execution time (WCET) of a task. This is the maximum time a task requires to complete its work.

*   **Period (T<sub>i</sub>):** For periodic tasks, this is the fixed interval between successive releases of the task. In many real-time systems, the relative deadline is often set equal to the period ($d_i = T_i$).

*   **Utilization (U):** The fraction of processor time consumed by a task set. For a set of $n$ periodic tasks, the total utilization is given by:
    *   $U = \sum_{i=1}^{n} \frac{C_i}{T_i}$

*   **Schedulability:** A task set is schedulable if all tasks meet their deadlines under the given scheduling algorithm.

---

### 3. How EDF Scheduling Works

*   **Dynamic Priority Assignment:**
    *   Each job of a task is assigned a priority based on its absolute deadline.
    *   The job with the earliest absolute deadline has the highest priority.

*   **Preemption:**
    *   If a new job arrives (is released) with an earlier absolute deadline than the currently executing job, the currently executing job is preempted, and the new job starts executing.
    *   When a preempted job resumes execution, it continues from where it left off.

*   **Execution Order:**
    *   At any point in time, the scheduler selects the ready job with the earliest absolute deadline from the set of all ready jobs.

*   **Example:**
    Consider two tasks, Task A and Task B, with the following parameters:

    | Task | WCET (C) | Period (T) | Relative Deadline (d) |
    | :--- | :------- | :--------- | :-------------------- |
    | A    | 2 ms     | 5 ms       | 5 ms                  |
    | B    | 3 ms     | 8 ms       | 8 ms                  |

    Assuming both tasks are released at time 0.

    *   **Time 0:**
        *   Job A1 released (deadline: 0 + 5 = 5 ms).
        *   Job B1 released (deadline: 0 + 8 = 8 ms).
        *   Job A1 has an earlier deadline (5 ms vs 8 ms).
        *   **Action:** Task A executes.

    *   **Time 2 ms:**
        *   Task A completes its execution.
        *   The scheduler checks for the next ready job with the earliest deadline.
        *   Job B1 is the only ready job.
        *   **Action:** Task B executes.

    *   **Time 5 ms:**
        *   Job A2 released (deadline: 5 + 5 = 10 ms).
        *   Job B1 is still executing (has 5 ms of execution remaining).
        *   Job A2's deadline (10 ms) is later than Job B1's deadline (8 ms).
        *   **Action:** Task B continues execution.

    *   **Time 8 ms:**
        *   Task B completes its execution.
        *   The scheduler checks for ready jobs.
        *   Job A2 is ready (deadline: 10 ms).
        *   **Action:** Task A2 executes.

    *   **Time 10 ms:**
        *   Job A2 completes its execution.
        *   Job B2 released (deadline: 10 + 8 = 18 ms).
        *   Job A3 released (deadline: 10 + 5 = 15 ms).
        *   Job A3 has an earlier deadline (15 ms vs 18 ms).
        *   **Action:** Task A3 executes.

    This example illustrates how EDF dynamically prioritizes tasks based on their impending deadlines.

---

### 4. Schedulability Analysis for EDF

*   **Uniprocessor Schedulability Condition:**
    *   For a set of $n$ independent, periodic tasks with deadlines equal to their periods ($d_i = T_i$), the task set is schedulable by EDF on a uniprocessor if and only if the total processor utilization is less than or equal to 1.
    *   **Condition:** $U = \sum_{i=1}^{n} \frac{C_i}{T_i} \le 1$

*   **Schedulability with $d_i \le T_i$:**
    *   When relative deadlines are less than or equal to periods ($d_i \le T_i$), the condition becomes more complex. A common sufficient (but not necessary) condition is:
    *   **Condition:** $\sum_{i=1}^{n} \frac{C_i}{d_i} \le 1$
    *   **Note:** If this condition holds, the task set is guaranteed to be schedulable. However, if it fails, the task set might still be schedulable. More advanced analysis techniques (like Processor Demand Analysis) are needed for an exact schedulability test in such cases.

*   **Example of Schedulability:**
    Consider Task A ($C_A=2, T_A=5, d_A=5$) and Task B ($C_B=3, T_B=8, d_B=8$).

    *   Utilization: $U = \frac{C_A}{T_A} + \frac{C_B}{T_B} = \frac{2}{5} + \frac{3}{8} = 0.4 + 0.375 = 0.775$
    *   Since $U = 0.775 \le 1$, this task set is schedulable by EDF.

    Consider Task C ($C_C=4, T_C=6, d_C=6$) and Task D ($C_D=3, T_D=9, d_D=9$).

    *   Utilization: $U = \frac{C_C}{T_C} + \frac{C_D}{T_D} = \frac{4}{6} + \frac{3}{9} = 0.667 + 0.333 = 1.0$
    *   Since $U = 1.0 \le 1$, this task set is also schedulable by EDF.

    Consider Task E ($C_E=3, T_E=5, d_E=5$) and Task F ($C_F=4, T_F=7, d_F=7$).

    *   Utilization: $U = \frac{C_E}{T_E} + \frac{C_F}{T_F} = \frac{3}{5} + \frac{4}{7} = 0.6 + 0.571 = 1.171$
    *   Since $U = 1.171 > 1$, this task set is **not** schedulable by EDF.

*   **Impact of $d_i < T_i$:**
    *   If deadlines are shorter than periods, the utilization criterion changes.
    *   Let's check the sufficient condition for Task A ($C_A=2, T_A=5, d_A=3$) and Task B ($C_B=3, T_B=8, d_B=7$).
    *   $\frac{C_A}{d_A} + \frac{C_B}{d_B} = \frac{2}{3} + \frac{3}{7} \approx 0.667 + 0.429 = 1.096$
    *   Since $1.096 > 1$, the sufficient condition fails. This *doesn't mean* it's not schedulable, but it requires further analysis.

---

### 5. Advantages and Disadvantages of EDF

*   **Advantages:**
    *   **Optimality (Uniprocessor):** It is the optimal dynamic-priority scheduling algorithm for uniprocessor systems.
    *   **High Processor Utilization:** Can achieve high processor utilization up to 100% for periodic tasks with $d_i = T_i$.
    *   **Simplicity:** The basic concept of scheduling based on the earliest deadline is intuitive.

*   **Disadvantages:**
    *   **Dynamic Priority Overhead:** Requires mechanisms to track deadlines and dynamically adjust priorities, which can add overhead compared to fixed-priority algorithms like Rate Monotonic Scheduling (RMS).
    *   **Complexity for $d_i < T_i$:** Schedulability analysis becomes more complex when relative deadlines are less than periods.
    *   **Overhead for Jitter:** If task release times have significant jitter, EDF's performance can be affected.
    *   **Not Optimal for Multiprocessors:** EDF is not generally optimal for multiprocessor systems. Global EDF on multiprocessors is not optimal, and partitioned EDF (assigning tasks to specific processors) can lead to underutilization.

---

### 6. Practice Questions and Exercises

**Question 1:**
Consider the following set of periodic tasks on a uniprocessor system:
*   Task 1: $C_1 = 1$ ms, $T_1 = 5$ ms, $d_1 = 5$ ms
*   Task 2: $C_2 = 2$ ms, $T_2 = 8$ ms, $d_2 = 8$ ms
*   Task 3: $C_3 = 3$ ms, $T_3 = 12$ ms, $d_3 = 12$ ms

a) Calculate the total processor utilization for this task set.
b) Is this task set schedulable by EDF? Justify your answer.
c) Sketch the schedule for the first 20 ms, assuming all tasks are released at time 0.

**Answer 1:**
a) Utilization $U = \frac{1}{5} + \frac{2}{8} + \frac{3}{12} = 0.2 + 0.25 + 0.25 = 0.7$

b) Since $U = 0.7 \le 1$, the task set is schedulable by EDF on a uniprocessor.

c) **Schedule Sketch (First 20 ms):**

| Time (ms) | Executing Task | Ready Tasks (Deadline)       | Notes                                        |
| :-------- | :------------- | :--------------------------- | :------------------------------------------- |
| 0         | Task 1         | Task 1 (5), Task 2 (8), Task 3 (12) | Task 1 has the earliest deadline.            |
| 1         | Task 2         | Task 1 (5), Task 2 (8), Task 3 (12) | Task 1 finishes. Task 2 has earlier deadline. |
| 3         | Task 3         | Task 2 (8), Task 3 (12)      | Task 2 finishes. Task 3 has earlier deadline. |
| 6         | Task 1 (job 2) | Task 1 (job 2, 11), Task 2 (8), Task 3 (12) | Task 3 finishes. Task 1 (job 2) released. Task 2 has earlier deadline. |
| 8         | Task 2 (job 2) | Task 1 (job 2, 11), Task 2 (job 2, 16), Task 3 (12) | Task 2 (job 2) released. Task 2 (job 2) has earlier deadline. |
| 10        | Task 1 (job 2) | Task 1 (job 2, 11), Task 2 (job 2, 16), Task 3 (12) | Task 1 (job 2) finishes. Task 3 has earlier deadline. |
| 11        | Task 2 (job 2) | Task 2 (job 2, 16), Task 3 (12) | Task 1 (job 3) released (deadline 15). Task 3 has earlier deadline. |
| 12        | Task 3 (job 2) | Task 2 (job 2, 16), Task 3 (job 2, 24) | Task 3 (job 2) released. Task 2 (job 2) has earlier deadline. |
| 14        | Task 1 (job 3) | Task 1 (job 3, 15), Task 2 (job 2, 16) | Task 1 (job 3) released. Task 1 (job 3) has earlier deadline. |
| 15        | Task 2 (job 2) | Task 2 (job 2, 16)           | Task 1 (job 3) finishes. Task 2 (job 2) has earlier deadline. |
| 16        | Task 3 (job 2) | Task 3 (job 2, 24)           | Task 2 (job 2) finishes. Task 3 (job 2) is the only ready task. |
| 19        | Task 1 (job 4) | Task 1 (job 4, 25), Task 3 (job 2, 24) | Task 1 (job 4) released. Task 3 (job 2) has earlier deadline. |
| 20        | ...          | ...                          | ...                                          |

*Self-correction in tracing:* At time 6, Task 3 finishes. Task 1 (job 2) is released at time 5 with deadline 10. Task 2 (job 1) is still running and has 2ms remaining (released at 0, deadline 8). Task 2's deadline (8) is earlier than Task 1's deadline (10). So Task 2 should continue. Let's retrace from time 6.

**Corrected Schedule Sketch (First 20 ms):**

| Time (ms) | Executing Task | Ready Tasks (Deadline)       | Notes                                        |
| :-------- | :------------- | :--------------------------- | :------------------------------------------- |
| 0         | Task 1         | Task 1 (5), Task 2 (8), Task 3 (12) | Task 1 has the earliest deadline.            |
| 1         | Task 2         | Task 1 (5), Task 2 (8), Task 3 (12) | Task 1 finishes. Task 2 has earlier deadline. |
| 3         | Task 3         | Task 2 (8), Task 3 (12)      | Task 2 finishes. Task 3 has earlier deadline. |
| 6         | Task 1 (job 2) | Task 1 (job 2, 10), Task 2 (job 2, 16), Task 3 (12) | Task 3 finishes. Task 1 (job 2) released. Task 2 (job 1) finished at 3, now Task 2 (job 2) is released at time 8 with deadline 16. Task 1 (job 2) deadline is 10. Task 1 (job 2) has earlier deadline. |
| 8         | Task 2 (job 2) | Task 1 (job 2, 10), Task 2 (job 2, 16), Task 3 (12) | Task 1 (job 2) has 2ms left. Task 2 (job 2) released. Task 2 (job 2) deadline is 16. Task 3 (job 1) deadline is 12. Task 3 has earlier deadline. Task 1 (job 2) has earlier deadline than Task 2 (job 2). Task 1 (job 2) has the earliest deadline. |

*Self-correction again: The trace logic needs to be strictly based on the *current earliest deadline* among all ready jobs.*

**Final Corrected Schedule Trace:**

| Time (ms) | Executing Task | Ready Tasks (Deadline)                                | Notes                                                                                                |
| :-------- | :------------- | :---------------------------------------------------- | :--------------------------------------------------------------------------------------------------- |
| 0         | Task 1         | T1_J1(5), T2_J1(8), T3_J1(12)                         | T1_J1 has earliest deadline.                                                                         |
| 1         | Task 2         | T1_J1(5), T2_J1(8), T3_J1(12)                         | T1_J1 finishes. T2_J1 has earliest deadline.                                                         |
| 3         | Task 3         | T2_J1(8), T3_J1(12)                                   | T2_J1 finishes. T3_J1 has earliest deadline.                                                         |
| 5         | Task 1 (job 2) | T1_J2(10), T3_J1(12)                                  | T3_J1 has 9ms remaining. T1_J2 released (deadline 10). T1_J2 has earlier deadline.                  |
| 7         | Task 3 (job 1) | T1_J2(10), T3_J1(12)                                  | T1_J2 finishes. T3_J1 (9ms remaining) has earlier deadline than T2_J1 (released at 8, deadline 16). |
| 8         | Task 2 (job 2) | T2_J1(8), T3_J1(12)                                   | T2_J2 released (deadline 16). T3_J1 has 4ms remaining (deadline 12). T3_J1 has earlier deadline.   |
| 10        | Task 1 (job 3) | T1_J3(15), T2_J1(8), T3_J1(12)                        | T3_J1 finishes. T1_J3 released (deadline 15). T2_J1 (released at 0, deadline 8) has earliest deadline. |
| 12        | Task 2 (job 2) | T1_J3(15), T2_J2(16)                                  | T2_J1 finishes. T1_J3 has 5ms remaining (deadline 15). T2_J2 released (deadline 16). T1_J3 has earlier deadline. |
| 14        | Task 3 (job 2) | T1_J3(15), T2_J2(16), T3_J2(24)                       | T1_J3 finishes. T3_J2 released (deadline 24). T2_J2 has earlier deadline.                          |
| 16        | Task 1 (job 4) | T1_J4(20), T2_J2(16), T3_J2(24)                       | T2_J2 finishes. T1_J4 released (deadline 20). T1_J4 has earlier deadline.                           |
| 17        | Task 3 (job 2) | T1_J4(20), T3_J2(24)                                  | T1_J4 finishes. T3_J2 has 21ms remaining (deadline 24). T3_J2 has earlier deadline.                  |
| 20        | Task 1 (job 5) | T1_J5(25), T3_J2(24)                                  | T3_J2 has 18ms remaining. T1_J5 released (deadline 25). T3_J2 has earlier deadline.                  |

*(Note: The provided trace is simplified and shows task transitions. A more precise representation would involve smaller time slices. The key is to understand the decision made at each point.)*

**Question 2:**
What is the fundamental condition for EDF schedulability on a uniprocessor for independent, periodic tasks where the relative deadline equals the period?

**Answer 2:**
The fundamental condition is that the total processor utilization ($U$) must be less than or equal to 1.
$U = \sum_{i=1}^{n} \frac{C_i}{T_i} \le 1$

**Question 3:**
If Task A has $C_A=2$, $T_A=6$, $d_A=5$ and Task B has $C_B=3$, $T_B=10$, $d_B=8$.
a) Calculate the utilization $\sum \frac{C_i}{T_i}$.
b) Calculate the utilization $\sum \frac{C_i}{d_i}$.
c) Based on the $\sum \frac{C_i}{d_i}$ test, can we conclude that this task set is schedulable by EDF? Explain why or why not.

**Answer 3:**
a) $U = \frac{2}{6} + \frac{3}{10} = 0.333 + 0.3 = 0.633$

b) $\frac{C_A}{d_A} + \frac{C_B}{d_B} = \frac{2}{5} + \frac{3}{8} = 0.4 + 0.375 = 0.775$

c) Yes, because the sum of $C_i/d_i$ (0.775) is less than or equal to 1. This is a *sufficient* condition for EDF schedulability when $d_i \le T_i$. It guarantees that the task set is schedulable.

---

### 7. Important Points to Remember

*   **EDF is deadline-driven:** Priority is assigned based on the absolute deadline, not a fixed task parameter.
*   **EDF is optimal on uniprocessors:** If any algorithm can schedule a task set, EDF can.
*   **Schedulability condition ($d_i = T_i$):** $\sum \frac{C_i}{T_i} \le 1$. This is both necessary and sufficient.
*   **Schedulability condition ($d_i \le T_i$):** $\sum \frac{C_i}{d_i} \le 1$ is a *sufficient* condition. The task set might still be schedulable even if this fails.
*   **Preemptive:** A task with an earlier deadline will always preempt a task with a later deadline.
*   **Dynamic overhead:** Requires more sophisticated runtime support for priority management compared to static priority schemes.

---
