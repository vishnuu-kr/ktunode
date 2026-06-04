---
title: "Real-Time Scheduling Algorithms: Fixed-priority scheduling (Rate- Monotonic, Deadline-Monotonic), Dynamic priority scheduling (Earliest Deadline First)"
subject: "REAL TIME OPERATING SYSTEM"
module: "Module 2: Real"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff3e0"
status: "completed"
scrapedAt: "2026-05-23T18:09:00.645Z"
---
# REAL TIME OPERATING SYSTEM

## Module 2: Real-Time Scheduling

### Topic: Real-Time Scheduling Algorithms: Fixed-Priority Scheduling (Rate-Monotonic, Deadline-Monotonic), Dynamic Priority Scheduling (Earliest Deadline First)

---

### Introduction to Real-Time Scheduling

**Definition:** Real-time scheduling is the process of allocating processor time to various tasks in a real-time system to meet their timing constraints. The primary goal is to ensure that tasks complete within their deadlines.

**Importance (CO1, K1, K2):**
*   Ensures timely execution of critical tasks.
*   Prevents deadline misses, which can lead to system failures, incorrect operation, or catastrophic consequences in safety-critical systems.
*   Maximizes resource utilization while respecting deadlines.

**Key Concepts:**
*   **Task:** A unit of work that needs to be executed. In real-time systems, tasks are often characterized by their periodicity, execution time, and deadlines.
*   **Period (T):** The time interval between successive arrivals of a periodic task.
*   **Execution Time (C):** The maximum time a task requires to complete its execution on the processor. This is often referred to as Worst-Case Execution Time (WCET) for analysis (CO3, K3, K4).
*   **Deadline (D):** The latest time by which a task must complete its execution. For many periodic tasks, the deadline is equal to the period (D=T).
*   **Release Time (r):** The time at which a task becomes ready for execution.
*   **Priority:** A value assigned to a task indicating its relative importance. Higher priority tasks are typically executed before lower priority tasks.
*   **Schedulability:** The property of a task set being able to meet all its deadlines under a given scheduling algorithm.

---

### Types of Real-Time Scheduling

Real-time scheduling algorithms can be broadly categorized into two types based on how task priorities are assigned:

1.  **Fixed-Priority Scheduling:** Priorities are assigned to tasks once and remain constant throughout their execution.
2.  **Dynamic-Priority Scheduling:** Priorities can change during runtime based on the current state of the tasks.

---

### 1. Fixed-Priority Scheduling

In fixed-priority scheduling, each task is assigned a priority that does not change. When the processor is available, it is allocated to the highest-priority task that is ready to run.

**Common Algorithms:**

#### a) Rate-Monotonic (RM) Scheduling (CO2, K4)

*   **Description:** RM is a static-priority scheduling algorithm for periodic tasks. It assigns priorities based on the task's period: **shorter period means higher priority**.
*   **Basis:** It's based on the Liu and Layland utilization bound theorem. The intuition is that tasks with shorter periods are more constrained and therefore should have higher priority to ensure they meet their deadlines.
*   **Priority Assignment:**
    *   Task $i$ with period $T_i$ and task $j$ with period $T_j$.
    *   If $T_i < T_j$, then Priority($i$) > Priority($j$).
*   **Schedulability Analysis:**
    *   **Utilization Bound:** For a set of $n$ periodic tasks, if the total CPU utilization $U = \sum_{i=1}^{n} \frac{C_i}{T_i}$ is less than or equal to $n(2^{1/n} - 1)$, then the task set is schedulable using RM.
        *   As $n \to \infty$, the bound approaches $\ln(2) \approx 0.693$.
    *   **Response Time Analysis (RTA):** A more precise method that calculates the worst-case response time ($R_i$) for each task. A task set is schedulable if $R_i \le D_i$ for all tasks.
        *   $R_i = C_i + \sum_{j \in hp(i)} \lceil \frac{R_i}{T_j} \rceil C_j$
        where $hp(i)$ is the set of tasks with higher priority than task $i$. This equation is solved iteratively.
*   **Advantages:**
    *   Optimal among static-priority algorithms when deadlines are equal to periods ($D_i = T_i$).
    *   Relatively simple to implement.
    *   Well-established theoretical foundation.
*   **Disadvantages:**
    *   Not optimal if deadlines are shorter than periods ($D_i < T_i$).
    *   Can be pessimistic if the utilization bound is not met, as the task set might still be schedulable.
*   **Example (CO2, K4):**
    Consider two tasks:
    *   Task A: $C_A = 10ms$, $T_A = 50ms$
    *   Task B: $C_B = 20ms$, $T_B = 100ms$
    *   Utilization: $U = \frac{10}{50} + \frac{20}{100} = 0.2 + 0.2 = 0.4$
    *   For n=2, the RM bound is $2(2^{1/2} - 1) \approx 0.828$.
    *   Since $0.4 \le 0.828$, the task set is schedulable by RM.
    *   Priority Assignment: $T_A < T_B$, so Task A has higher priority than Task B.

    **Referencing Textbooks:**
    *   *Real-Time Operating Systems Book 1* by Jim Cooling discusses RM and its optimality for $D=T$ in detail (Chapter X).
    *   *Real-Time Systems: Theory and Practice* by Rajib Mall covers the utilization bound and RTA for RM (Chapter Y).
    *   *Real-Time Systems Design and Analysis* by Laplante et al. provides examples and further analysis of RM (Chapter Z).

#### b) Deadline-Monotonic (DM) Scheduling (CO2, K4)

*   **Description:** DM is another static-priority scheduling algorithm. It assigns priorities based on the task's relative deadline: **shorter deadline means higher priority**.
*   **Basis:** It is an extension of RM to handle cases where deadlines are not necessarily equal to periods. It's optimal among static-priority algorithms when $D_i \le T_i$.
*   **Priority Assignment:**
    *   Task $i$ with deadline $D_i$ and task $j$ with deadline $D_j$.
    *   If $D_i < D_j$, then Priority($i$) > Priority($j$).
*   **Schedulability Analysis:**
    *   **Utilization Bound:** There isn't a simple, universally applicable utilization bound like RM for DM.
    *   **Response Time Analysis (RTA):** RTA is the primary method for analyzing DM schedulability. The formula is the same as for RM, but the priority ordering is based on deadlines:
        *   $R_i = C_i + \sum_{j \in hp(i)} \lceil \frac{R_i}{T_j} \rceil C_j$
        where $hp(i)$ is the set of tasks with higher priority than task $i$ (i.e., tasks with shorter deadlines).
*   **Advantages:**
    *   Optimal among static-priority algorithms when deadlines are less than or equal to periods ($D_i \le T_i$).
    *   More flexible than RM by considering deadlines explicitly.
*   **Disadvantages:**
    *   More complex to implement if task deadlines are dynamic or vary significantly.
    *   Requires knowledge of deadlines for priority assignment.
*   **Example (CO2, K4):**
    Consider two tasks:
    *   Task A: $C_A = 10ms$, $T_A = 50ms$, $D_A = 30ms$
    *   Task B: $C_B = 20ms$, $T_B = 100ms$, $D_B = 80ms$
    *   Priority Assignment: $D_A < D_B$, so Task A has higher priority than Task B.
    *   Calculate $R_A$: $R_A = C_A = 10ms$. $R_A \le D_A$ (10ms $\le$ 30ms). Task A is schedulable.
    *   Calculate $R_B$:
        *   Iteration 1: $R_B^{(0)} = C_B = 20ms$.
        *   Iteration 2: $R_B^{(1)} = C_B + \lceil \frac{R_B^{(0)}}{T_A} \rceil C_A = 20 + \lceil \frac{20}{50} \rceil \times 10 = 20 + 1 \times 10 = 30ms$.
        *   Iteration 3: $R_B^{(2)} = C_B + \lceil \frac{R_B^{(1)}}{T_A} \rceil C_A = 20 + \lceil \frac{30}{50} \rceil \times 10 = 20 + 1 \times 10 = 30ms$.
        *   Since $R_B^{(1)} = R_B^{(2)}$, $R_B = 30ms$.
    *   Check deadline for Task B: $R_B \le D_B$ (30ms $\le$ 80ms). Task B is schedulable.
    *   Both tasks are schedulable using DM.

    **Referencing Textbooks:**
    *   *Real-Time Systems: Design Principles for Distributed Embedded Applications* by Hermann Kopetz discusses DM as an improvement over RM when deadlines differ from periods (Chapter 5).
    *   *Real-Time Systems* by Jane W. S. Liu provides theoretical background and analysis for DM (Chapter 4).

---

### 2. Dynamic-Priority Scheduling

In dynamic-priority scheduling, task priorities can change during runtime. Typically, priorities are assigned based on the task's proximity to its deadline.

**Common Algorithms:**

#### c) Earliest Deadline First (EDF) Scheduling (CO2, K4)

*   **Description:** EDF is a dynamic-priority scheduling algorithm. It assigns priorities to tasks based on their absolute deadlines: **the task with the earliest absolute deadline gets the highest priority**.
*   **Basis:** It is optimal for uniprocessor systems among all scheduling algorithms, meaning if a task set is schedulable by any algorithm, it is also schedulable by EDF.
*   **Priority Assignment:** At any given time, the ready task with the earliest absolute deadline ($d_i(t) = r_i(t) + D_i$) is chosen for execution.
*   **Schedulability Analysis:**
    *   **Utilization Bound:** A task set is schedulable by EDF if and only if the total CPU utilization $U = \sum_{i=1}^{n} \frac{C_i}{T_i}$ is less than or equal to 1.
        *   This is a very powerful and simple schedulability test for periodic tasks with $D_i = T_i$.
    *   **More General Cases ($D_i \le T_i$):** The condition becomes $\sum_{i=1}^{n} \frac{C_i}{\min(T_i, D_i)} \le 1$.
*   **Advantages:**
    *   Optimal for uniprocessor systems.
    *   Very efficient: can utilize the processor up to 100% if the task set is schedulable.
    *   Handles tasks with arbitrary deadlines ($D_i \le T_i$) effectively.
*   **Disadvantages:**
    *   Requires dynamic priority management, which can introduce overhead.
    *   Implementation can be more complex than static-priority algorithms due to the need to constantly re-evaluate priorities.
    *   Can be sensitive to the accuracy of deadline information.
*   **Example (CO2, K4):**
    Consider three tasks:
    *   Task 1: $C_1 = 10ms$, $T_1 = 30ms$, $D_1 = 30ms$
    *   Task 2: $C_2 = 5ms$, $T_2 = 40ms$, $D_2 = 40ms$
    *   Task 3: $C_3 = 15ms$, $T_3 = 100ms$, $D_3 = 100ms$
    *   Utilization: $U = \frac{10}{30} + \frac{5}{40} + \frac{15}{100} = 0.333 + 0.125 + 0.15 = 0.608$
    *   Since $U \le 1$, the task set is schedulable by EDF.

    Let's trace execution for a few time units:
    *   At time $t=0$:
        *   Task 1 (deadline 30), Task 2 (deadline 40), Task 3 (deadline 100) are ready.
        *   Task 1 has the earliest deadline. EDF schedules Task 1.
    *   [0, 10ms]: Task 1 executes.
    *   At time $t=10$:
        *   Task 1 has finished its first instance.
        *   Task 2 (deadline 40), Task 3 (deadline 100) are ready.
        *   Task 2 has the earliest deadline. EDF schedules Task 2.
    *   [10, 15ms]: Task 2 executes.
    *   At time $t=15$:
        *   Task 2 has finished its first instance.
        *   Task 3 (deadline 100) is ready. EDF schedules Task 3.
    *   [15, 30ms]: Task 3 executes.
    *   At time $t=30$:
        *   Task 1's second instance is released (deadline 60).
        *   Task 3 has finished its first instance.
        *   Task 1 (deadline 60) and Task 3 (deadline 100) are ready.
        *   Task 1 has the earliest deadline. EDF schedules Task 1.
    *   [30, 40ms]: Task 1 executes.

    **Referencing Textbooks:**
    *   *Real-Time Systems: Theory and Practice* by Rajib Mall provides a comprehensive explanation of EDF and its optimality (Chapter Z).
    *   *Real-Time Systems* by C. M. Krishna and Kang G. Shin delve into the dynamic priority management aspects of EDF (Chapter W).
    *   *Real-Time Systems* by Jane W. S. Liu is a foundational text for EDF and its properties (Chapter 5).

---

### Important Points to Remember (CO1, CO2, CO5)

*   **Static vs. Dynamic Priorities:** Fixed-priority (RM, DM) is simpler but less flexible. Dynamic-priority (EDF) is more powerful and optimal but more complex.
*   **Optimality:** RM is optimal for static-priority with $D=T$. DM is optimal for static-priority with $D \le T$. EDF is optimal for dynamic-priority on a uniprocessor.
*   **Schedulability Tests:** Utilization bounds are useful for quick checks (especially for RM and EDF with $D=T$), but RTA provides a more accurate analysis for RM/DM and is essential when deadlines are not equal to periods.
*   **WCET:** Accurate Worst-Case Execution Time (WCET) is crucial for any schedulability analysis (CO3). Incorrect WCET can lead to misjudging a system's schedulability.
*   **Overhead:** Context switching, scheduling overhead, and interrupt handling add to the system's complexity and must be considered in real-time systems design.
*   **Practical Considerations:** In practice, real-time operating systems (RTOS) often use a combination of these algorithms or variations, taking into account factors like task dependencies, resource sharing (e.g., mutexes), and interrupt handling. (CO4, CO5)

---

### Practice Questions & Exercises

**Question 1 (CO2, K4 - RM):**
A set of three periodic tasks are to be scheduled using Rate-Monotonic (RM) scheduling. Their parameters are:
*   Task 1: $C_1 = 10ms$, $T_1 = 40ms$
*   Task 2: $C_2 = 15ms$, $T_2 = 60ms$
*   Task 3: $C_3 = 20ms$, $T_3 = 120ms$

a) Determine the priority of each task under RM.
b) Calculate the total CPU utilization.
c) Using the RM utilization bound, determine if the task set is guaranteed to be schedulable.
d) If the utilization bound is not met, explain what further analysis would be required.

**Answer 1:**
a) **Priority Assignment:**
    *   $T_1 = 40ms$ (shortest period) $\implies$ Highest Priority
    *   $T_2 = 60ms$ $\implies$ Medium Priority
    *   $T_3 = 120ms$ (longest period) $\implies$ Lowest Priority
    *   So, Priority(1) > Priority(2) > Priority(3).

b) **Total CPU Utilization:**
    *   $U = \frac{C_1}{T_1} + \frac{C_2}{T_2} + \frac{C_3}{T_3}$
    *   $U = \frac{10}{40} + \frac{15}{60} + \frac{20}{120}$
    *   $U = 0.25 + 0.25 + 0.1667 = 0.6667$

c) **RM Utilization Bound:**
    *   For $n=3$ tasks, the bound is $n(2^{1/n} - 1) = 3(2^{1/3} - 1) \approx 3(1.2599 - 1) \approx 3(0.2599) \approx 0.7797$.
    *   Since $U = 0.6667 \le 0.7797$, the task set is guaranteed to be schedulable by RM.

d) If the utilization bound were greater than 1 (e.g., if U was 0.85), it would not guarantee schedulability. In that case, **Response Time Analysis (RTA)** would be required to accurately determine if each task meets its deadline.

---

**Question 2 (CO2, K4 - EDF):**
Consider the following set of periodic tasks for EDF scheduling:
*   Task A: $C_A = 5ms$, $T_A = 20ms$, $D_A = 20ms$
*   Task B: $C_B = 10ms$, $T_B = 30ms$, $D_B = 30ms$
*   Task C: $C_C = 15ms$, $T_C = 50ms$, $D_C = 50ms$

a) Calculate the total CPU utilization.
b) Based on the EDF schedulability condition, is this task set schedulable?
c) Describe how EDF would prioritize these tasks at time $t=0$ if all are released simultaneously and are ready to run.

**Answer 2:**
a) **Total CPU Utilization:**
    *   $U = \frac{C_A}{T_A} + \frac{C_B}{T_B} + \frac{C_C}{T_C}$
    *   $U = \frac{5}{20} + \frac{10}{30} + \frac{15}{50}$
    *   $U = 0.25 + 0.3333 + 0.3 = 0.8833$

b) **EDF Schedulability Condition:**
    *   For periodic tasks with $D_i = T_i$, the condition is $U \le 1$.
    *   Since $U = 0.8833 \le 1$, the task set is schedulable by EDF.

c) **EDF Prioritization at t=0:**
    *   At time $t=0$, all tasks are released and ready. Their absolute deadlines are:
        *   Task A: $D_A(0) = 0 + 20ms = 20ms$
        *   Task B: $D_B(0) = 0 + 30ms = 30ms$
        *   Task C: $D_C(0) = 0 + 50ms = 50ms$
    *   EDF schedules the task with the earliest absolute deadline. Therefore, at $t=0$, EDF will prioritize Task A, then Task B, then Task C.

---

**Question 3 (CO2, K4 - DM):**
Consider a system with two tasks:
*   Task X: $C_X = 20ms$, $T_X = 100ms$, $D_X = 50ms$
*   Task Y: $C_Y = 30ms$, $T_Y = 150ms$, $D_Y = 100ms$

a) Which algorithm, RM or DM, is more appropriate for assigning priorities in this case and why?
b) Determine the priority assignment using the chosen algorithm.
c) Perform Response Time Analysis (RTA) to check the schedulability of the task set.

**Answer 3:**
a) **Appropriate Algorithm:**
    *   The deadlines are not equal to the periods ($D_X = 50ms < T_X = 100ms$ and $D_Y = 100ms < T_Y = 150ms$).
    *   **Deadline-Monotonic (DM)** is more appropriate because it prioritizes tasks based on their deadlines, which are shorter than their periods. RM prioritizes based on periods, which would not be optimal here.

b) **Priority Assignment (DM):**
    *   Task X has $D_X = 50ms$.
    *   Task Y has $D_Y = 100ms$.
    *   Since $D_X < D_Y$, Task X has higher priority than Task Y.
    *   Priority(X) > Priority(Y).

c) **Response Time Analysis (RTA):**
    *   **Task X (Higher Priority):**
        *   $R_X = C_X = 20ms$.
        *   Check deadline: $R_X = 20ms \le D_X = 50ms$. Task X is schedulable.

    *   **Task Y (Lower Priority):**
        *   The interference from higher priority tasks (Task X) must be considered.
        *   $R_Y = C_Y + \sum_{j \in hp(Y)} \lceil \frac{R_Y}{T_j} \rceil C_j$
        *   $R_Y = C_Y + \lceil \frac{R_Y}{T_X} \rceil C_X$
        *   $R_Y = 30 + \lceil \frac{R_Y}{100} \rceil \times 20$

        *   Let's iterate:
            *   $R_Y^{(0)} = C_Y = 30ms$
            *   $R_Y^{(1)} = 30 + \lceil \frac{30}{100} \rceil \times 20 = 30 + 1 \times 20 = 50ms$
            *   $R_Y^{(2)} = 30 + \lceil \frac{50}{100} \rceil \times 20 = 30 + 1 \times 20 = 50ms$
        *   Since $R_Y^{(1)} = R_Y^{(2)}$, the worst-case response time for Task Y is $R_Y = 50ms$.
        *   Check deadline: $R_Y = 50ms \le D_Y = 100ms$. Task Y is schedulable.

    *   **Conclusion:** Both tasks are schedulable under DM.

---

### Practice Question on RTOS Services (CO4, K3, K4)

**Question 4:**
When developing a real-time application using an RTOS, what are some common RTOS services that a scheduler might utilize or that a developer would use to manage tasks effectively?

**Answer 4:**
A developer using an RTOS for real-time scheduling would typically interact with or rely on the following services:

*   **Task Creation/Deletion:** Functions to create new tasks (specifying priority, stack size, entry point) and terminate existing ones.
*   **Task Management (Suspending/Resuming):** Ability to temporarily halt a task's execution (`suspend`) and later restart it (`resume`).
*   **Delay/Sleep:** Allowing a task to voluntarily yield the CPU for a specified duration, effectively putting it to sleep until a timer expires. This is crucial for implementing periodic behavior or waiting.
*   **Interrupt Service Routines (ISRs):** Mechanisms for handling external events. ISRs should be kept short; they often signal tasks or post events to wake them up, rather than performing lengthy processing.
*   **Inter-Task Communication (ITC):**
    *   **Queues/Mailboxes:** For passing data between tasks.
    *   **Semaphores:** For signaling and controlling access to shared resources (e.g., mutexes, counting semaphores).
*   **Synchronization Primitives:**
    *   **Mutexes:** To protect shared data structures from concurrent access, often with priority inheritance to prevent priority inversion.
    *   **Event Flags:** For tasks to wait for specific combinations of events.
*   **Priority Management:** RTOS kernels implement the chosen scheduling algorithm (e.g., RM, DM, EDF) internally and manage task priorities dynamically or statically.
*   **Timer Services:** For creating periodic or one-shot timers that can trigger events or wake up tasks.

These services enable developers to build complex, concurrent, and time-critical applications that adhere to the scheduling policies of the underlying RTOS.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
