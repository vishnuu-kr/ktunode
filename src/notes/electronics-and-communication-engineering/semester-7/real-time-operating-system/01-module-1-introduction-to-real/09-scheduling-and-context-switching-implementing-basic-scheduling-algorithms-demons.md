---
title: "Scheduling and Context Switching: Implementing basic scheduling algorithms, Demonstrating context switching with example tasks"
subject: "REAL TIME OPERATING SYSTEM"
module: "Module 1: Introduction to Real"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff3dd"
status: "completed"
scrapedAt: "2026-05-23T18:08:59.019Z"
---
## Real-Time Operating Systems: Module 1 - Introduction to Real-Time Systems

### Topic: Scheduling and Context Switching

This topic delves into the core mechanisms that enable a Real-Time Operating System (RTOS) to manage multiple tasks efficiently and deterministically, crucial for meeting real-time constraints.

### Learning Outcomes:

*   **Understand the concept of scheduling in RTOS:** Why is it important?
*   **Implement basic scheduling algorithms:** Familiarity with common algorithms.
*   **Demonstrate context switching:** How an RTOS switches between tasks.

### Course Outcomes Addressed:

*   **CO1: Explain the fundamental concepts and characteristics of real-time systems.** (Understanding the need for scheduling to achieve determinism). (K1, K2)
*   **CO2: Analyze and implement real-time scheduling algorithms and techniques.** (Directly addresses implementing and understanding scheduling algorithms). (K4)

---

### 1. Scheduling in Real-Time Operating Systems

**1.1. What is Scheduling?**

Scheduling is the process by which an RTOS determines which of the ready-to-run tasks should be executed by the CPU at any given moment. In real-time systems, the primary goal of scheduling is to ensure that tasks meet their **deadlines**. Missing a deadline can lead to system failure.

**1.2. Why is Scheduling Crucial in RTOS?**

*   **Meeting Deadlines:** The most critical aspect. If a task doesn't complete by its deadline, the system might fail.
*   **Resource Management:** Efficiently allocates the CPU and other resources among competing tasks.
*   **Determinism:** Ensures predictable execution behavior, which is essential for real-time applications.
*   **Responsiveness:** Allows critical tasks to gain CPU control quickly.

**Key Concepts:**

*   **Task:** A unit of work that can be scheduled and executed by the RTOS.
*   **Ready State:** A task is ready to execute if it has arrived and its dependencies have been met, and it is waiting for the CPU.
*   **Running State:** A task is currently executing on the CPU.
*   **Blocked/Waiting State:** A task is temporarily suspended, waiting for an event (e.g., I/O completion, a semaphore) to occur.
*   **Deadline:** The time by which a task must complete its execution.
*   **Period:** For periodic tasks, the time interval between successive arrivals of the task.
*   **Execution Time:** The time required by a task to complete its execution.
*   **Priority:** A value assigned to a task that indicates its relative importance. Higher priority tasks are generally favored.

**Reference (Cooling, 2018):** Cooling emphasizes that "the scheduling mechanism is the heart of the RTOS, dictating how tasks are managed and how system deadlines are met." He highlights the difference between general-purpose OS scheduling (throughput) and RTOS scheduling (meeting deadlines).

---

### 2. Basic Scheduling Algorithms

Scheduling algorithms dictate the rules for selecting the next task to run. They can be broadly categorized into **preemptive** and **non-preemptive**.

**2.1. Preemptive Scheduling**

In preemptive scheduling, a higher-priority task can interrupt (preempt) a lower-priority task that is currently running, taking over the CPU. The preempted task is moved back to the ready state and will resume execution later.

**2.2. Non-Preemptive Scheduling**

In non-preemptive scheduling, once a task starts executing, it continues until it voluntarily releases the CPU (e.g., by completing its execution or blocking for an event). No other task can interrupt it.

---

#### **Common Basic Scheduling Algorithms:**

**2.3. First-Come, First-Served (FCFS) / First-In, First-Out (FIFO)**

*   **Description:** Tasks are executed in the order they arrive in the ready queue.
*   **Type:** Typically non-preemptive.
*   **Suitability for RTOS:** Generally **not suitable** for real-time systems because it doesn't consider priorities or deadlines. A short, urgent task might be delayed by a long, less urgent task that arrived earlier.
*   **Example:**
    *   Task A arrives at T=0, Execution Time = 5 units.
    *   Task B arrives at T=1, Execution Time = 2 units.
    *   Timeline:
        *   T=0: Task A starts.
        *   T=1: Task B arrives, but Task A is running.
        *   T=5: Task A finishes. Task B starts.
        *   T=7: Task B finishes.
*   **Highlight:** Simple but lacks responsiveness for time-critical tasks.

**2.4. Round-Robin (RR)**

*   **Description:** Each task is given a fixed time slice (quantum) to run. If a task doesn't complete within its quantum, it's preempted, and the CPU is given to the next task in the ready queue.
*   **Type:** Preemptive.
*   **Suitability for RTOS:** Better than FCFS for responsiveness, but the fixed quantum can still lead to deadline misses if not chosen carefully. Not ideal for strict real-time constraints due to potential context switching overhead.
*   **Example:**
    *   Task A, Task B, Task C in ready queue. Quantum = 2 units.
    *   Timeline:
        *   T=0-2: Task A runs.
        *   T=2-4: Task B runs.
        *   T=4-6: Task C runs.
        *   T=6-8: Task A resumes (if not finished).
*   **Highlight:** Provides fairness but can introduce significant overhead due to frequent context switches.

**2.5. Priority-Based Scheduling**

*   **Description:** Tasks are assigned priorities. The CPU is always allocated to the highest-priority task that is ready to run.
*   **Type:** Can be preemptive or non-preemptive.
    *   **Preemptive Priority-Based:** A higher-priority task arriving will preempt a lower-priority task.
    *   **Non-Preemptive Priority-Based:** A task runs to completion or blocks, regardless of newly arrived higher-priority tasks.
*   **Suitability for RTOS:** **Highly suitable** for real-time systems, especially the preemptive version, as it ensures that critical tasks get immediate CPU access.
*   **Example (Preemptive):**
    *   Task H (High Priority), Task L (Low Priority).
    *   Timeline:
        *   T=0: Task L starts (priority 10).
        *   T=1: Task H arrives (priority 20). Task H preempts Task L. Task H runs.
        *   T=3: Task H finishes.
        *   T=3: Task L resumes.
        *   T=7: Task L finishes.
*   **Highlight:** Essential for meeting deadlines for tasks with varying criticality. However, it can lead to **priority inversion**, where a high-priority task is blocked by a lower-priority task holding a shared resource.

**Reference (Mall, 2007):** Mall discusses various scheduling policies, including Rate Monotonic Scheduling (RMS) and Earliest Deadline First (EDF) as optimal algorithms for periodic tasks, going beyond basic concepts. However, he introduces the foundational idea of priority-based scheduling as a crucial concept.

---

### 3. Context Switching

**3.1. What is Context Switching?**

Context switching is the process by which an RTOS saves the current state (context) of a running task and restores the state of another task, allowing the CPU to switch from one task to another.

**3.2. What Constitutes a Task's Context?**

The context of a task includes all the information needed to resume its execution from where it left off. This typically includes:

*   **CPU Registers:** Program Counter (PC), Stack Pointer (SP), general-purpose registers, status registers (flags).
*   **Task State:** Information about whether the task is running, ready, or blocked.
*   **Memory Management Information:** Page tables, segment registers (if applicable).
*   **Kernel Information:** Task ID, priority, scheduling parameters, pointers to task control blocks (TCBs).

**3.3. The Context Switching Process**

1.  **Interrupt/Event:** An event occurs (e.g., timer interrupt for time slicing, arrival of a higher-priority task, system call).
2.  **Save Context of Current Task:** The RTOS saves the CPU registers and other relevant state information of the currently running task into its Task Control Block (TCB).
3.  **Update Task State:** The RTOS updates the state of the preempted/interrupted task (e.g., from "running" to "ready").
4.  **Scheduler Invoked:** The RTOS scheduler is invoked to select the next task to run based on the scheduling algorithm.
5.  **Load Context of Next Task:** The RTOS retrieves the saved context of the selected task from its TCB and loads it into the CPU registers.
6.  **Update Task State:** The RTOS updates the state of the newly scheduled task (e.g., from "ready" to "running").
7.  **Resume Execution:** The CPU begins executing the new task from the instruction pointed to by the restored Program Counter.

**3.4. Overhead of Context Switching**

Context switching is not instantaneous; it incurs overhead in terms of CPU time. This overhead consists of:

*   **Saving and restoring registers.**
*   **Executing the scheduler code.**
*   **Updating task states and TCBs.**
*   **Cache invalidation/rebuilding (if applicable).**

The frequency of context switches directly impacts the performance of the system. Excessive context switching can consume a significant portion of CPU time, reducing the time available for actual application tasks.

**Reference (Valvano, 2017):** Valvano's book on ARM Cortex-M microcontrollers often illustrates context switching in the context of interrupt service routines (ISRs) and task management, showing how the processor's execution flow is altered. He highlights the importance of efficient saving and restoring of the processor state.

---

### 4. Demonstrating Context Switching with Example Tasks

Let's consider two tasks, Task_A and Task_B, managed by a preemptive priority-based scheduler.

**Scenario:**

*   **Task_A:** Low priority, execution time = 10ms, Period = 50ms.
*   **Task_B:** High priority, execution time = 4ms, Period = 30ms.
*   **Scheduling Algorithm:** Preemptive Priority-Based.
*   **Context Switch Time:** Assume negligible for simplicity in this example.

**Initial State:** Both tasks are ready.

**Timeline Demonstration:**

| Time (ms) | Running Task | Event / State Change                                                                                                                                                                | Notes                                                                                                                                                                                           |
| :-------- | :----------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0         | Task_A       | Task_A (Low Priority) starts execution as it arrived first and is the only ready task.                                                                                              | Task_A's context is loaded.                                                                                                                                                                     |
| 5         | Task_A       | Task_A is running.                                                                                                                                                                  |                                                                                                                                                                                                 |
| 10        | Task_A       | Task_A is running.                                                                                                                                                                  |                                                                                                                                                                                                 |
| 15        | Task_A       | Task_A is running.                                                                                                                                                                  |                                                                                                                                                                                                 |
| 20        | Task_A       | Task_A is running.                                                                                                                                                                  | Task_A has executed for 20ms.                                                                                                                                                                   |
| 25        | **Task_B**   | **Task_B arrives (High Priority).** The RTOS detects Task_B's arrival and its higher priority. **Context Switch:** Task_A's context is saved. Task_B's context is loaded. Task_A is now in the "ready" state. | This is where context switching happens. Task_B preempts Task_A.                                                                                                                                 |
| 26        | Task_B       | Task_B starts executing.                                                                                                                                                            |                                                                                                                                                                                                 |
| 27        | Task_B       | Task_B is executing.                                                                                                                                                                  |                                                                                                                                                                                                 |
| 28        | Task_B       | Task_B is executing.                                                                                                                                                                  |                                                                                                                                                                                                 |
| 29        | Task_B       | Task_B is executing.                                                                                                                                                                  | Task_B has now executed for 4ms (its total execution time).                                                                                                                                     |
| 30        | Task_B       | **Task_B finishes.** The RTOS checks the ready queue. Task_A is the highest priority ready task. **Context Switch:** Task_B's context is no longer needed (or it's its "end"). Task_A's context is restored. Task_A resumes execution. | Task_B met its deadline. Task_A gets the CPU back.                                                                                                                                              |
| 31        | Task_A       | Task_A resumes execution.                                                                                                                                                           | Task_A had executed for 20ms and was preempted. It still needs 10ms - 20ms = -10ms??? This is wrong. Task_A executed for 20ms. It needs 10ms total. It *was* running for 20ms. This means it's finished. Wait, my example is flawed. Let's correct it. |

**Corrected Scenario and Timeline:**

**Scenario:**

*   **Task_A:** Low priority, execution time = 6ms, Period = 50ms.
*   **Task_B:** High priority, execution time = 3ms, Period = 30ms.
*   **Scheduling Algorithm:** Preemptive Priority-Based.

**Timeline Demonstration (Corrected):**

| Time (ms) | Running Task | Event / State Change                                                                                                                                                                      | Notes                                                                                                                                       |
| :-------- | :----------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| 0         | Task_A       | Task_A (Low Priority) starts execution as it's the only ready task.                                                                                                                       | Task_A's context is loaded.                                                                                                                 |
| 3         | Task_A       | Task_A is running.                                                                                                                                                                        | Task_A has executed for 3ms. It still needs 3ms.                                                                                            |
| 5         | **Task_B**   | **Task_B arrives (High Priority).** RTOS detects Task_B and its higher priority. **Context Switch:** Task_A's context (PC, registers, etc.) is saved. Task_B's context is loaded. Task_A is moved to "ready". | Task_B preempts Task_A.                                                                                                                     |
| 6         | Task_B       | Task_B starts executing.                                                                                                                                                                  |                                                                                                                                             |
| 9         | Task_B       | Task_B is executing.                                                                                                                                                                      | Task_B has executed for 3ms (its total execution time). Task_B finishes.                                                                    |
| 10        | Task_B       | Task_B has finished. RTOS checks the ready queue. Task_A is the only ready task. **Context Switch:** Task_A's context is restored. Task_A resumes execution.                                  | Task_B met its deadline. Task_A gets the CPU back.                                                                                          |
| 11        | Task_A       | Task_A resumes execution.                                                                                                                                                                 | Task_A had executed for 3ms and was preempted. It needs another 3ms.                                                                        |
| 12        | Task_A       | Task_A is executing.                                                                                                                                                                      |                                                                                                                                             |
| 13        | Task_A       | Task_A is executing.                                                                                                                                                                      | Task_A has now executed for 3ms (resume) + 3ms (initial) = 6ms. Task_A finishes.                                                            |
| 14        | Idle         | No tasks are ready to run. The CPU might enter a low-power state or execute an idle task.                                                                                                   |                                                                                                                                             |
| 30        | **Task_B**   | **Task_B arrives again (High Priority).** If it's ready, it will be scheduled.                                                                                                            | The cycle repeats for Task_B.                                                                                                               |
| 35        | **Task_A**   | **Task_A arrives again (Low Priority).** It will only run if Task_B (or any higher priority task) isn't running.                                                                           |                                                                                                                                             |

**Important Points to Remember:**

*   **Context switching is a fundamental RTOS service.**
*   **The efficiency of context switching directly impacts system performance.**
*   **Preemptive scheduling algorithms are crucial for real-time responsiveness.**
*   **Priority-based scheduling is the most common and effective for real-time systems.**
*   **The context of a task includes its execution state and necessary CPU information.**

**Reference (Kopetz, 2011):** Kopetz discusses the importance of time-triggered and event-triggered scheduling, highlighting how context switching facilitates the rapid transition between different operational modes or tasks in embedded systems, contributing to the overall predictability of the system.

---

### 5. Practice Questions and Exercises

**Question 1:**

What is the primary goal of scheduling in a Real-Time Operating System?
a) Maximize CPU utilization
b) Minimize context switching overhead
c) Ensure all tasks meet their deadlines
d) Provide fair access to the CPU for all tasks

**Answer:** c) Ensure all tasks meet their deadlines

**Question 2:**

Describe the difference between preemptive and non-preemptive scheduling. Which is generally preferred in RTOS and why?

**Answer:**
*   **Preemptive Scheduling:** A running task can be interrupted by a higher-priority task.
*   **Non-Preemptive Scheduling:** A running task continues until it completes or voluntarily yields the CPU.
*   **Preference:** Preemptive scheduling is generally preferred in RTOS because it allows high-priority, time-critical tasks to gain immediate access to the CPU when they become ready, ensuring they meet their deadlines.

**Question 3:**

List at least three components that constitute the context of a task.

**Answer:**
*   Program Counter (PC)
*   Stack Pointer (SP)
*   CPU Registers (general-purpose, status registers)
*   Task State

**Question 4 (Scenario Analysis):**

Consider a system with two tasks:
*   Task P (High Priority): Execution Time = 2ms, Deadline = 10ms
*   Task Q (Low Priority): Execution Time = 5ms, Deadline = 20ms
The system uses a preemptive priority-based scheduler. Both tasks arrive at time T=0.

Trace the execution of the tasks from T=0 to T=10ms, clearly indicating when context switches occur.

**Answer:**

*   **T=0:** Task P and Task Q arrive. Task P (High Priority) starts executing. Task Q is in the ready state.
*   **T=2:** Task P finishes its execution. Its deadline of 10ms is met.
*   **T=2:** Since Task P has finished, the scheduler checks the ready queue. Task Q is the highest priority ready task. Task Q starts executing. No context switch is needed to switch from Task P (finished) to Task Q.
*   **T=7:** Task Q finishes its execution (5ms). Its deadline of 20ms is met.

*   **Wait, the question implies Task P might not finish at T=2 if there was a higher priority task. My initial trace is correct for this scenario as only P and Q exist.*

*Let's add a third task to demonstrate preemption more clearly.*

**Revised Scenario for Question 4:**

Consider a system with three tasks:
*   Task A (High Priority): Execution Time = 2ms, Deadline = 10ms
*   Task B (Medium Priority): Execution Time = 3ms, Deadline = 20ms
*   Task C (Low Priority): Execution Time = 4ms, Deadline = 30ms

The system uses a preemptive priority-based scheduler. All tasks arrive at time T=0.

Trace the execution of the tasks from T=0 to T=10ms, clearly indicating when context switches occur.

**Answer:**

*   **T=0:** Task A, B, C arrive. Task A (High Priority) starts executing. Task B and C are in the ready state.
*   **T=2:** Task A finishes its execution. Its deadline of 10ms is met.
*   **T=2:** Scheduler checks ready queue. Task B (Medium Priority) is the highest priority ready task. Task B starts executing. (No context switch needed from A to B as A finished).
*   **T=5:** Task B finishes its execution. Its deadline of 20ms is met.
*   **T=5:** Scheduler checks ready queue. Task C (Low Priority) is the only ready task. Task C starts executing. (No context switch needed from B to C as B finished).
*   **T=9:** Task C finishes its execution. Its deadline of 30ms is met.

*This still doesn't show preemption. Let's try again.*

**Revised Scenario for Question 4 (Final Attempt for Preemption Example):**

Consider a system with three tasks:
*   Task A (Medium Priority): Execution Time = 3ms, Deadline = 10ms
*   Task B (High Priority): Execution Time = 2ms, Deadline = 7ms
*   Task C (Low Priority): Execution Time = 4ms, Deadline = 15ms

The system uses a preemptive priority-based scheduler. All tasks arrive at time T=0.

Trace the execution of the tasks from T=0 to T=10ms, clearly indicating when context switches occur.

**Answer:**

*   **T=0:** Task A, B, C arrive. Task B (High Priority) starts executing. Task A and C are in the ready state.
*   **T=2:** Task B finishes its execution. Its deadline of 7ms is met.
*   **T=2:** Scheduler checks ready queue. Task A (Medium Priority) is the highest priority ready task. Task A starts executing. (No context switch needed from B to A as B finished).
*   **T=5:** Task A finishes its execution. Its deadline of 10ms is met.
*   **T=5:** Scheduler checks ready queue. Task C (Low Priority) is the only ready task. Task C starts executing. (No context switch needed from A to C as A finished).
*   **T=9:** Task C finishes its execution. Its deadline of 15ms is met.

*I'm struggling to create a simple scenario that demonstrates a preemption within the first 10ms when all tasks arrive at T=0 and have execution times that allow them to finish their first block before the next event. This indicates the need for a task that arrives *after* the first task starts.*

**Revised Scenario for Question 4 (Demonstrating Preemption):**

Consider a system with two tasks:
*   Task X (Low Priority): Execution Time = 8ms, Deadline = 20ms
*   Task Y (High Priority): Execution Time = 3ms, Deadline = 10ms

The system uses a preemptive priority-based scheduler.
*   Task X arrives at T=0.
*   Task Y arrives at T=3.

Trace the execution of the tasks from T=0 to T=10ms, clearly indicating when context switches occur.

**Answer:**

*   **T=0:** Task X arrives. Task X (Low Priority) starts executing.
*   **T=3:** Task X has executed for 3ms. Task Y (High Priority) arrives.
*   **T=3:** **Context Switch 1:** Task Y's arrival and higher priority cause it to preempt Task X. Task X's context is saved, and Task X is moved to the "ready" state. Task Y's context is loaded, and Task Y starts executing.
*   **T=6:** Task Y finishes its execution (3ms). Its deadline of 10ms is met.
*   **T=6:** Scheduler checks ready queue. Task X is the highest priority ready task. **Context Switch 2:** Task X's context is restored. Task X resumes execution.
*   **T=8:** Task X has now executed for a total of 3ms (initial) + 3ms (resumed) = 6ms. It needs 2ms more to complete.
*   **T=10:** Task X finishes its execution. Its deadline of 20ms is met.

This last example correctly demonstrates preemption and context switching.

---

### 6. Important Points to Remember

*   **Determinism is key:** RTOS scheduling aims for predictability and timely execution, not just throughput.
*   **Priorities matter:** Higher priority tasks MUST be serviced before lower priority ones to meet deadlines.
*   **Context switching is a necessary evil:** It enables multitasking but incurs overhead. RTOS design aims to minimize this overhead.
*   **Algorithm choice is critical:** The chosen scheduling algorithm must be suitable for the real-time requirements of the application. FCFS and basic Round-Robin are often insufficient for hard real-time systems.
*   **Understanding task states:** Knowing whether a task is running, ready, or blocked is fundamental to understanding scheduling and context switching.

---

This concludes Module 1's topic on Scheduling and Context Switching. Mastering these concepts is foundational for understanding how RTOS manage concurrent real-time tasks.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
