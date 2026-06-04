---
title: "Priority based preemption"
subject: "REAL TIME OPERATING SYSTEM"
module: "Module 2: Real"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff3e1"
status: "completed"
scrapedAt: "2026-05-23T18:09:01.441Z"
---
# REAL TIME OPERATING SYSTEM - Module 2: Real - Priority Based Preemption

## 1. Introduction to Real-Time Scheduling

Real-time operating systems (RTOS) are designed to manage tasks with strict timing constraints. Scheduling is a core function of an RTOS, determining the order in which tasks are executed. This module focuses on **priority-based preemption**, a fundamental scheduling technique in real-time systems.

**Key Concept:** In real-time scheduling, the goal is to ensure that tasks meet their deadlines. This often involves making decisions about which task to run at any given moment.

**CO1:** Explain the fundamental concepts and characteristics of real-time systems.
*   Real-time systems are characterized by their correctness relying not only on the logical result of computation but also on the time at which the results are produced.
*   Deadlines are crucial. Missing a deadline can lead to system failure (e.g., in a medical device or an automotive braking system).

**Textbook Reference:**
*   **Cooling, J. (2018). *Real-Time Operating Systems Book 1: The Theory*.** Cooling emphasizes that real-time scheduling is about predictability and determinism, ensuring that tasks execute within their specified timeframes.

## 2. Task States in a Real-Time System

Before delving into scheduling, understanding task states is essential. A task can exist in several states:

*   **Running:** The task is currently executing on the CPU.
*   **Ready:** The task is eligible to run but is waiting for the CPU to become available.
*   **Blocked (or Waiting):** The task is temporarily unable to run, usually because it is waiting for an event to occur (e.g., I/O completion, resource availability, or a timer to expire).
*   **Suspended:** The task has been intentionally put into a non-executable state, often by another task or a debugger.

**Key Concept:** The scheduler's job is to transition tasks between these states to meet timing requirements.

## 3. Priority-Based Scheduling

**Definition:** Priority-based scheduling assigns a priority level to each task. The scheduler always selects the task with the highest priority from the set of ready tasks to execute.

**Key Concept:** Higher priority tasks will preempt lower priority tasks if they become ready while a lower priority task is running.

**CO2:** Analyze and implement real-time scheduling algorithms and techniques.
*   Priority-based scheduling is a common technique for real-time systems.

**Textbook Reference:**
*   **Mall, R. (2007). *Real-Time Systems: Theory and Practice*.** Mall discusses how priority assignment directly impacts schedulability and how to assign priorities to meet deadlines.
*   **Kopetz, H. (2011). *Real-Time Systems: Design Principles for Distributed Embedded Applications*.** Kopetz highlights the importance of predictable priority assignment in distributed real-time systems to avoid race conditions and ensure consistent behavior.

## 4. Preemption

**Definition:** Preemption is the act of interrupting the currently executing task (a lower-priority task) to allow a higher-priority task to run. When the higher-priority task finishes or is blocked, the preempted (lower-priority) task resumes its execution from where it was interrupted.

**Key Concept:** Preemption is crucial for ensuring that high-priority tasks are never unduly delayed by low-priority tasks.

**How it works:**
1.  A task (Task A) with a certain priority is running.
2.  Another task (Task B) with a higher priority becomes ready to run (e.g., due to an interrupt or a timer event).
3.  The RTOS scheduler intervenes.
4.  Task A is suspended (context switch occurs).
5.  Task B is loaded and begins executing.
6.  When Task B completes its execution or becomes blocked, the scheduler checks if any other higher-priority tasks are ready.
7.  If not, the scheduler may resume Task A or pick another ready task based on priority.

**Example:**
Imagine two tasks:
*   **Task H (High Priority):** A critical task that must respond within 10ms.
*   **Task L (Low Priority):** A background task that displays system status.

If Task L is currently running and Task H becomes ready (e.g., due to a sensor reading that requires immediate processing), the RTOS will preempt Task L, save its state, and start executing Task H. Once Task H completes its execution, Task L will resume from where it left off.

**CO2:** Analyze and implement real-time scheduling algorithms and techniques.
*   Understanding the mechanism of preemption is key to analyzing the performance of priority-based schedulers.

## 5. Priority Assignment

The effectiveness of priority-based preemptive scheduling heavily relies on how priorities are assigned to tasks.

**Common Priority Assignment Schemes:**

*   **Static Priority Assignment:** Priorities are fixed before runtime and do not change.
    *   **Rate Monotonic (RM):** Assigns priorities based on task periods (or deadlines). Tasks with shorter periods (higher rates) get higher priorities. This is optimal among static priority algorithms when deadlines are equal to periods.
    *   **Deadline Monotonic (DM):** Assigns priorities based on task deadlines. Tasks with shorter deadlines get higher priorities. This is optimal among static priority algorithms when deadlines can be shorter than periods.

*   **Dynamic Priority Assignment:** Priorities can change during runtime.
    *   **Earliest Deadline First (EDF):** The task with the earliest absolute deadline is assigned the highest priority. This is a preemptive, dynamic priority scheduling algorithm and is optimal in the sense that if any algorithm can schedule a set of tasks, EDF can too.
    *   **Least Laxity First (LLF):** The task with the least laxity (difference between its deadline and current time, minus its remaining execution time) gets the highest priority.

**Key Concept:** The choice of priority assignment scheme can significantly impact whether a task set is schedulable (i.e., all tasks can meet their deadlines).

**Textbook Reference:**
*   **Valvano, J. W. (2017). *Embedded Systems: Real-Time Operating Systems for Arm Cortex-M Microcontrollers*.** Valvano provides practical examples of implementing priority-based scheduling on embedded systems and discusses the trade-offs between static and dynamic priority assignment.
*   **Krishna, C. M., & Shin, K. G. (2010). *Real-Time Systems*.** Krishna and Shin delve into the mathematical foundations of priority assignment, including schedulability analysis for various priority schemes.

**CO2:** Analyze and implement real-time scheduling algorithms and techniques.
*   This section directly addresses the analysis and implementation of different priority assignment strategies.

## 6. Schedulability Analysis

**Definition:** Schedulability analysis is the process of determining whether a given set of real-time tasks can be executed by a scheduling algorithm such that all tasks meet their deadlines under worst-case conditions.

**Importance:** For critical real-time systems, it's essential to prove that the system will meet its deadlines even under the most demanding scenarios.

**Key Concept:** Worst-Case Execution Time (WCET) is a critical input for schedulability analysis.

**CO3:** Conduct worst-case execution time (WCET) analysis for real-time tasks.
*   Schedulability analysis relies on accurate WCET estimates. The process of determining WCET is a separate, but closely related, field.

**Approaches to Schedulability Analysis (for priority-based systems):**

*   **Response Time Analysis (RTA):** For static priority systems, RTA calculates the worst-case response time of each task. If the worst-case response time is less than or equal to the task's deadline, the task is schedulable.
    *   The response time ($R_i$) of a task $i$ is calculated iteratively:
        $R_i^{(k+1)} = C_i + \sum_{j \in hp(i)} \lceil \frac{R_i^{(k)}}{T_j} \rceil C_j$
        where:
        *   $C_i$ is the worst-case execution time of task $i$.
        *   $T_j$ is the period of task $j$.
        *   $hp(i)$ is the set of tasks with higher priority than task $i$.
        *   $\lceil x \rceil$ is the ceiling function (rounds up to the nearest integer).
        *   The iteration starts with $R_i^{(0)} = C_i$ and continues until $R_i^{(k+1)} = R_i^{(k)}$.

*   **Utilization Bound Analysis:** For RM scheduling, Liu and Layland proved a sufficient condition for schedulability:
    *   If the total processor utilization ($U = \sum_{i=1}^{n} \frac{C_i}{T_i}$) is less than or equal to $n(2^{1/n} - 1)$, then the task set is schedulable using RM.
    *   This is a **sufficient but not necessary** condition, meaning if the utilization is above this bound, the task set *might* still be schedulable.

**Textbook Reference:**
*   **Liu, J. W. S. (2009). *Real-Time Systems*.** Liu's foundational work is crucial for understanding utilization bounds and the theory behind RM scheduling.
*   **Laplante, P. A., & Ovaska, S. J. (2012). *Real-Time Systems Design and Analysis*.** Laplante and Ovaska provide in-depth coverage of RTA and other schedulability analysis techniques, with practical examples.

**CO2:** Analyze and implement real-time scheduling algorithms and techniques.
*   This section directly addresses schedulability analysis.

## 7. Priority Inversion

**Definition:** Priority inversion is a scheduling anomaly where a high-priority task is indirectly prevented from executing by a lower-priority task. This occurs when a low-priority task holds a shared resource that a high-priority task needs.

**Scenario:**
1.  Task H (High Priority) needs resource R.
2.  Task L (Low Priority) currently holds resource R.
3.  Task M (Medium Priority) preempts Task L and starts executing.
4.  Now, Task H is ready to run, but it cannot because Task L is blocked by Task M holding resource R. Task H is effectively "inverted" in priority by Task M.

**Consequences:**
*   Missed deadlines for high-priority tasks.
*   Unpredictable system behavior.

**Example:**
*   **Task H (critical):** Needs to control a robot arm's movement.
*   **Task L (low priority):** Acquires a mutex (lock) to update a sensor data structure.
*   **Task M (medium priority):** Runs a display update routine, which needs to read the sensor data structure but doesn't require the mutex.

If Task L acquires the mutex, and then Task M starts running, Task H might become ready. However, Task H cannot proceed because it needs the mutex held by Task L. Task L is currently blocked by Task M. This prevents Task H from running, even though Task H has a higher priority than Task L.

**CO1:** Explain the fundamental concepts and characteristics of real-time systems.
*   Priority inversion is a critical challenge in real-time systems that must be understood and managed.

## 8. Solutions to Priority Inversion

To prevent or mitigate priority inversion, several techniques are employed:

*   **Priority Inheritance Protocol (PIP):**
    *   When a low-priority task (Task L) holds a resource needed by a high-priority task (Task H), Task L inherits the priority of Task H.
    *   Task L then executes at the inherited high priority until it releases the resource.
    *   This ensures that Task L will not be preempted by any medium-priority task (Task M) while it holds the resource, thus allowing Task H to eventually acquire the resource and execute.
    *   **Limitation:** Can lead to chained inheritance and deadlocks if not carefully managed.

*   **Priority Ceiling Protocol (PCP):**
    *   A more robust protocol. Each resource is assigned a "priority ceiling," which is the highest priority of any task that might access that resource.
    *   A task can only acquire a resource if its priority is strictly greater than the priority ceiling of all resources currently held by other tasks.
    *   This guarantees that a task can never be blocked by a lower-priority task.
    *   **Benefit:** Prevents deadlocks and reduces the number of priority inversions.

*   **Don't Care:** In simple systems with no shared resources or when tasks are designed such that priority inversion is impossible, this might be applicable. However, it's rarely a viable strategy for complex real-time systems.

**Textbook Reference:**
*   **Zhu, Y. (2017). *Embedded Systems with ARM Cortex-M Microcontrollers in Assembly Language and C*.** Zhu often discusses practical resource management techniques and synchronization mechanisms in embedded RTOS contexts, which are relevant to overcoming priority inversion.
*   **Mall, R. (2007). *Real-Time Systems: Theory and Practice*.** Mall covers synchronization primitives and protocols like PIP and PCP in detail, explaining their mechanics and performance implications.

**CO2:** Analyze and implement real-time scheduling algorithms and techniques.
*   Understanding and implementing solutions to priority inversion is a key aspect of real-time scheduling analysis and implementation.
*   **CO4:** Utilize RTOS services and middleware for developing real-time applications.
    *   RTOS typically provide mechanisms (like mutexes with inheritance or ceiling properties) to handle shared resources and prevent priority inversion.

## 9. RTOS Services and Priority-Based Preemption

RTOS provide essential services that enable priority-based preemption and manage tasks effectively.

*   **Task Creation and Management:** Allows developers to define tasks, assign priorities, and manage their lifecycle.
*   **Scheduling Algorithms:** Implement priority-based preemptive scheduling logic.
*   **Context Switching:** The mechanism by which the RTOS saves the state of a currently running task and loads the state of another task. This is a critical overhead in preemptive systems.
*   **Synchronization Primitives:** Mutexes, semaphores, event flags, etc., used for inter-task communication and resource sharing. These primitives are often enhanced with priority inheritance or ceiling mechanisms to prevent priority inversion.
*   **Interrupt Handling:** Interrupt Service Routines (ISRs) can cause higher-priority tasks to become ready, triggering preemption.

**CO4:** Utilize RTOS services and middleware for developing real-time applications.
*   This entire section is about how RTOS services support priority-based preemption.

**Example:**
Consider an RTOS like FreeRTOS. When you create tasks, you assign them a priority. If a higher-priority task is unblocked (e.g., by an ISR that signals a semaphore it's waiting on), the RTOS scheduler will immediately preempt the lower-priority task that is currently running and switch to the higher-priority task. If the tasks use a mutex to protect a shared resource, and the mutex supports priority inheritance, the RTOS will automatically boost the priority of the mutex-holding task to prevent priority inversion.

## 10. Practice Questions and Answers

**Question 1:**
What is the primary characteristic of priority-based preemptive scheduling that differentiates it from non-preemptive scheduling?

**Answer 1:**
The primary characteristic is that a running task can be interrupted (preempted) by a higher-priority task that becomes ready. In non-preemptive scheduling, a task runs to completion or blocks before another task can execute.

**Question 2:**
Explain the problem of priority inversion and provide an example of how it can occur.

**Answer 2:**
Priority inversion is a situation where a high-priority task is blocked by a lower-priority task, not directly, but indirectly through resource sharing.
*   **Example:** Task H (high priority) needs resource R. Task L (low priority) holds resource R. Task M (medium priority) preempts Task L. Now, Task H is ready but cannot run because Task L is blocked by Task M. Task H's execution is delayed by Task M, even though Task H has higher priority than Task L.

**Question 3:**
Name two common static priority assignment schemes and describe how they work.

**Answer 3:**
1.  **Rate Monotonic (RM):** Assigns priorities based on task periods. Tasks with shorter periods (higher rates) get higher priorities.
2.  **Deadline Monotonic (DM):** Assigns priorities based on task deadlines. Tasks with shorter deadlines get higher priorities.

**Question 4:**
What is the purpose of Response Time Analysis (RTA)?

**Answer 4:**
The purpose of Response Time Analysis (RTA) is to calculate the worst-case response time for each task in a static priority preemptive system. If the calculated worst-case response time for a task is less than or equal to its deadline, the task is considered schedulable under worst-case conditions.

**Question 5:**
Which protocol is considered more robust for preventing priority inversion and why?

**Answer 5:**
The **Priority Ceiling Protocol (PCP)** is generally considered more robust than the Priority Inheritance Protocol (PIP). This is because PCP guarantees that a task can only acquire a resource if its priority is strictly greater than the priority ceiling of all resources currently held by other tasks. This prevents a task from being blocked by any lower-priority task, thereby avoiding both priority inversion and deadlocks.

## 11. Important Points to Remember

*   **Priorities:** The core of this scheduling technique is the assignment of priorities to tasks.
*   **Preemption:** The ability of a higher-priority task to interrupt a lower-priority task is fundamental.
*   **Context Switching:** Preemption incurs overhead due to context switching (saving and restoring task states). This overhead must be accounted for in schedulability analysis.
*   **Priority Inversion:** A critical problem that needs to be addressed using protocols like PIP or PCP.
*   **Schedulability:** The ultimate goal is to ensure that all tasks meet their deadlines, which is verified through schedulability analysis.
*   **WCET:** Accurate Worst-Case Execution Time (WCET) is crucial for reliable schedulability analysis.

---

This concludes the study notes for Priority Based Preemption. Remember to consult the provided textbooks for deeper understanding and detailed examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
