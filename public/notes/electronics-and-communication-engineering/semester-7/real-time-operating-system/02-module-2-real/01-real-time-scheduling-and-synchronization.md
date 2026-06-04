---
title: "Real-Time Scheduling and Synchronization"
subject: "REAL TIME OPERATING SYSTEM"
module: "Module 2: Real"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff3df"
status: "completed"
scrapedAt: "2026-05-23T18:08:59.840Z"
---
# REAL TIME OPERATING SYSTEM - Module 2: Real-Time Scheduling and Synchronization

## 1. Introduction to Real-Time Scheduling

Real-time scheduling is the process of determining the order and timing of execution of real-time tasks to meet their deadlines. The primary goal is to ensure that tasks are completed within their specified time constraints, often referred to as deadlines.

### Key Concepts & Definitions:

*   **Real-Time Task:** A unit of work that has a deadline associated with its completion.
*   **Deadline:** The time by which a task must complete its execution to be considered successful.
*   **Period (or Interval):** The time between successive arrivals (or activations) of a periodic task.
*   **Execution Time:** The amount of CPU time a task requires to complete its execution.
*   **Response Time:** The time from when a task becomes ready to execute until it completes.
*   **Jitter:** Variation in the arrival times of periodic tasks.
*   **Scheduling Algorithm:** A set of rules that dictates how tasks are selected for execution by the CPU.
*   **Preemptive Scheduling:** A scheduling policy where a higher-priority task can interrupt (preempt) the execution of a lower-priority task.
*   **Non-preemptive Scheduling:** A scheduling policy where once a task starts executing, it continues until it completes or voluntarily yields the CPU.

### Types of Real-Time Tasks:

*   **Periodic Tasks:** Tasks that arrive at regular, predictable intervals.
    *   Example: Sensor readings in a control system, sampled at a fixed rate.
*   **Aperiodic Tasks:** Tasks that arrive at unpredictable times.
    *   Example: User interface events, interrupt-driven tasks.
*   **Sporadic Tasks:** Aperiodic tasks with a known minimum inter-arrival time.
    *   Example: Error handling routines that are triggered infrequently but have a predictable minimum delay.

### Importance of Scheduling in Real-Time Systems:

Meeting deadlines is paramount. Failure to meet deadlines can lead to:
*   System instability
*   Incorrect system behavior
*   Catastrophic failures (especially in safety-critical systems)

**(Referenced from Cooling, Chapter 5: "Scheduling")**

## 2. Real-Time Scheduling Algorithms

This section explores common scheduling algorithms used in real-time operating systems.

### 2.1. Static Priority Scheduling Algorithms

In static priority scheduling, the priority of a task is fixed and assigned before runtime.

#### 2.1.1. Rate Monotonic Scheduling (RMS)

*   **Concept:** Assigns priorities to tasks inversely proportional to their periods. Shorter period = higher priority.
*   **Key Principle:** The task with the highest rate (shortest period) gets the highest priority.
*   **Preemptive:** Yes.
*   **Schedulability Test (Liu & Layland Bound):** A set of *n* periodic tasks is schedulable by RMS if the total CPU utilization ($U$) is less than or equal to $n(2^{1/n} - 1)$.
    *   $U = \sum_{i=1}^{n} \frac{C_i}{T_i}$, where $C_i$ is the worst-case execution time (WCET) and $T_i$ is the period of task $i$.
    *   This is a sufficient but not necessary condition. If $U$ exceeds this bound, the tasks *might* still be schedulable.
*   **Advantages:**
    *   Optimal among fixed-priority preemptive algorithms for periodic tasks on a single processor.
    *   Relatively simple to implement.
*   **Disadvantages:**
    *   Assumes tasks are independent and have no blocking time.
    *   Can suffer from the "deadline monotonic" problem if deadlines are not equal to periods.
*   **Example:**
    *   Task A: Period = 10ms, WCET = 3ms
    *   Task B: Period = 20ms, WCET = 5ms
    *   RMS Priority: Task A (higher) > Task B (lower)
    *   CPU Utilization: U = (3/10) + (5/20) = 0.3 + 0.25 = 0.55
    *   For n=2, Liu & Layland Bound = 2(2^(1/2) - 1) ≈ 0.828. Since 0.55 < 0.828, the tasks are schedulable by RMS.

**(Referenced from Cooling, Chapter 5: "Rate Monotonic Scheduling"; Mall, Chapter 4: "Real-Time Scheduling"; Liu, Chapter 2: "Real-Time Scheduling")**

#### 2.1.2. Deadline Monotonic Scheduling (DMS)

*   **Concept:** Assigns priorities to tasks inversely proportional to their relative deadlines. Shorter deadline = higher priority.
*   **Key Principle:** The task with the earliest deadline gets the highest priority.
*   **Preemptive:** Yes.
*   **When to use:** When deadlines ($D_i$) are not equal to periods ($T_i$). If $D_i = T_i$, DMS is equivalent to RMS.
*   **Advantages:**
    *   Optimal among fixed-priority preemptive algorithms when deadlines differ from periods.
*   **Disadvantages:**
    *   Schedulability tests are more complex than for RMS.

**(Referenced from Cooling, Chapter 5: "Deadline Monotonic Scheduling")**

### 2.2. Dynamic Priority Scheduling Algorithms

In dynamic priority scheduling, task priorities can change during runtime, typically based on their arrival times or remaining execution time.

#### 2.2.1. Earliest Deadline First (EDF)

*   **Concept:** Assigns priorities to tasks based on their absolute deadlines. The task with the earliest absolute deadline gets the highest priority.
*   **Key Principle:** Always execute the task whose deadline is closest.
*   **Preemptive:** Yes.
*   **Schedulability Test:** A set of periodic tasks is schedulable by EDF on a single processor if the total CPU utilization ($U$) is less than or equal to 1.
    *   $U = \sum_{i=1}^{n} \frac{C_i}{T_i} \le 1$
*   **Advantages:**
    *   Optimal among all preemptive scheduling algorithms (both static and dynamic) on a single processor. It can schedule any task set that is schedulable by any other algorithm.
    *   Simpler schedulability test than RMS for high utilization systems.
*   **Disadvantages:**
    *   Requires dynamic priority updates, which can add overhead.
    *   More complex to implement and manage priorities.
*   **Example:**
    *   Task A: Arrival Time = 0, WCET = 3, Deadline = 10
    *   Task B: Arrival Time = 5, WCET = 4, Deadline = 15
    *   At time 0: Task A is ready, Deadline=10. Task B not yet ready. Task A executes.
    *   At time 3: Task A completes.
    *   At time 5: Task B becomes ready, Deadline=15. Task B executes.
    *   At time 9: Task B completes.
    *   If a new Task C arrives at time 7 with WCET = 2 and Deadline = 12.
    *   At time 7: Task B is executing (remaining WCET = 2). Task C is ready, Deadline=12. Task B's deadline is 15. Task C's deadline is 12. EDF will preempt Task B to run Task C.
    *   At time 9: Task C completes.
    *   At time 9: Task B resumes execution (remaining WCET = 2). Its deadline is 15.
    *   At time 11: Task B completes.

**(Referenced from Cooling, Chapter 5: "Earliest Deadline First Scheduling"; Mall, Chapter 4: "Real-Time Scheduling"; Liu, Chapter 2: "Real-Time Scheduling")**

#### 2.2.2. Least Laxity First (LLF)

*   **Concept:** Assigns priorities based on the "laxity" or "slack time" of a task. Laxity is defined as the difference between a task's deadline and its remaining execution time.
    *   Laxity = Deadline - Remaining Execution Time
*   **Key Principle:** The task with the least laxity (smallest slack) gets the highest priority.
*   **Preemptive:** Yes.
*   **Advantages:**
    *   Can provide better response times for tasks with small laxities.
    *   Can adapt to varying workloads.
*   **Disadvantages:**
    *   Requires frequent re-computation of laxity, leading to significant overhead.
    *   Can be computationally expensive.

**(Referenced from Mall, Chapter 4: "Real-Time Scheduling")**

### 2.3. Proportional Share Scheduling (Fair-Share Scheduling)

*   **Concept:** Allocates CPU time to tasks or threads based on their defined "shares" or "weights." Each task receives a proportion of the CPU that is proportional to its share.
*   **Key Principle:** Prevents resource starvation by ensuring that each task gets its allocated portion of the CPU.
*   **Preemptive:** Typically yes.
*   **Example:** If Task A has 70% share and Task B has 30% share, over a period, Task A should get roughly 70% of the CPU time and Task B 30%.
*   **Use Case:** Often used in systems where fairness among applications is important, rather than strict deadline adherence for all tasks.

**(Referenced from Cooling, Chapter 5: "Fair-Share Scheduling")**

## 3. Worst-Case Execution Time (WCET) Analysis

WCET analysis is crucial for determining if a real-time system is schedulable. It involves estimating the maximum possible execution time of a task under all possible input conditions and execution paths.

### Key Concepts & Definitions:

*   **Worst-Case Execution Time (WCET):** The maximum time a task can take to execute on a given hardware platform, considering all possible inputs and execution paths.
*   **Execution Path:** A sequence of instructions executed within a task, including branches, loops, and function calls.
*   **Basic Block:** A sequence of instructions with a single entry point and a single exit point, with no jumps or branches in between.
*   **Control Flow Graph (CFG):** A graphical representation of all possible execution paths through a program or task.
*   **Feasibility Analysis:** The process of determining if a set of tasks can be scheduled to meet their deadlines, often relying on WCET.

### Methods for WCET Analysis:

1.  **Static Timing Analysis (White-box approach):**
    *   **Concept:** Analyzes the program's source code or compiled assembly code to determine the execution time of each instruction and path.
    *   **Steps:**
        *   **Model the processor:** Understand instruction latencies, cache behavior, pipeline stalls, etc.
        *   **Model the program:** Construct a Control Flow Graph (CFG).
        *   **Identify execution paths:** Determine all possible paths through the CFG.
        *   **Calculate path execution times:** Sum up instruction latencies for each path.
        *   **Determine WCET:** Find the maximum execution time among all paths, considering loop bounds and conditional branches.
    *   **Advantages:** Provides precise WCET values, does not require execution on the target hardware.
    *   **Disadvantages:** Complex and time-consuming, requires detailed knowledge of the processor architecture and compiler.
    *   **(Referenced from Kopetz, Chapter 5: "Worst-Case Execution Time Analysis"; Valvano, Chapter 16: "Real-Time Operating System Concepts")**

2.  **Measurement-Based Timing Analysis (Black-box approach):**
    *   **Concept:** Executes the task on the target hardware and measures its execution time. This is typically done by instrumenting the code or using hardware trace tools.
    *   **Steps:**
        *   **Instrument the code:** Add probes at the beginning and end of the task to measure execution time.
        *   **Run on target:** Execute the task multiple times with various inputs and scenarios.
        *   **Collect measurements:** Record execution times.
        *   **Determine WCET:** The maximum measured execution time is taken as the WCET.
    *   **Advantages:** Simpler to implement than static analysis, accounts for actual hardware behavior.
    *   **Disadvantages:** May not cover all execution paths, making it difficult to guarantee a true WCET. Requires access to the target hardware and testing environment.
    *   **(Referenced from Cooling, Chapter 5: "Measurement-based Timing Analysis")**

### Importance of WCET for Schedulability:

Without accurate WCET, it's impossible to perform reliable schedulability analysis. Underestimating WCET can lead to missed deadlines, while overestimating it can lead to inefficient use of system resources.

**(CO3: Conduct worst-case execution time (WCET) analysis for real-time tasks. - Knowledge Level: K3, K4)**

## 4. Real-Time Synchronization

Synchronization mechanisms are essential in real-time systems to manage access to shared resources by multiple tasks, preventing race conditions and ensuring data integrity.

### Key Concepts & Definitions:

*   **Shared Resource:** A resource (e.g., memory, hardware device, data structure) that can be accessed by multiple tasks.
*   **Race Condition:** A situation where the outcome of a computation depends on the unpredictable timing of concurrent operations accessing a shared resource.
*   **Critical Section:** A segment of code that accesses a shared resource and must be executed atomically by only one task at a time.
*   **Mutual Exclusion:** The property that ensures only one task can access a shared resource or execute a critical section at any given time.
*   **Deadlock:** A situation where two or more tasks are blocked indefinitely, each waiting for a resource held by another task.
*   **Priority Inversion:** A situation where a high-priority task is blocked by a lower-priority task holding a required resource.

### Synchronization Mechanisms:

#### 4.1. Mutexes (Mutual Exclusion Locks)

*   **Concept:** A synchronization primitive used to enforce mutual exclusion. A task must "acquire" a mutex before entering a critical section and "release" it upon exiting.
*   **Key Operations:**
    *   `mutex_init()`: Initializes a mutex.
    *   `mutex_lock(mutex_ptr)`: Acquires the mutex. If the mutex is already held, the task blocks until it becomes available.
    *   `mutex_unlock(mutex_ptr)`: Releases the mutex, potentially unblocking a waiting task.
*   **Priority Inversion Problem with Mutexes:** A low-priority task holding a mutex can prevent a high-priority task from executing, even if the high-priority task doesn't need the mutex.
*   **Solutions to Priority Inversion:**
    *   **Priority Inheritance Protocol (PIP):** A low-priority task temporarily inherits the priority of the high-priority task it is blocking. This ensures the low-priority task completes its critical section quickly and releases the mutex.
    *   **Priority Ceiling Protocol (PCP):** Each resource is assigned a priority ceiling equal to the priority of the highest-priority task that can potentially access that resource. A task can only acquire a resource if its priority is strictly higher than the priority ceilings of all currently locked resources. This prevents deadlocks and limits priority inversion.
*   **Example:** Two tasks, Task A (High Priority) and Task B (Low Priority), need to access a shared data buffer.
    *   Task B acquires a mutex for the buffer.
    *   Task A becomes ready and needs the buffer. It tries to acquire the mutex but blocks because Task B holds it.
    *   If Task B is preempted by an even lower-priority task (unlikely, but possible without PIP/PCP), Task A will remain blocked.
    *   With PIP, Task B temporarily inherits Task A's priority and finishes its critical section quickly, releasing the mutex. Task A can then proceed.

**(Referenced from Cooling, Chapter 6: "Semaphores and Mutexes"; Valvano, Chapter 16: "Real-Time Operating System Concepts"; Mall, Chapter 5: "Task Synchronization and Communication")**

#### 4.2. Semaphores

*   **Concept:** A signaling mechanism used for inter-task communication and synchronization. A semaphore is an integer variable that is accessed only through two atomic operations: `wait` (or `P`) and `signal` (or `V`).
*   **Types of Semaphores:**
    *   **Binary Semaphore:** Can have only two values (0 or 1). Often used for mutual exclusion, similar to a mutex.
    *   **Counting Semaphore:** Can take any non-negative integer value. Used to control access to a pool of resources.
*   **Key Operations:**
    *   `sem_init(semaphore_ptr, initial_value)`: Initializes a semaphore.
    *   `wait(semaphore_ptr)`: Decrements the semaphore. If the semaphore value becomes negative, the task blocks.
    *   `signal(semaphore_ptr)`: Increments the semaphore. If tasks are blocked on the semaphore, one is unblocked.
*   **Use Cases:**
    *   **Mutual Exclusion:** A binary semaphore initialized to 1 can be used like a mutex.
    *   **Producer-Consumer Problem:** A counting semaphore can signal the availability of items in a buffer.
    *   **Task Synchronization:** One task can signal another to indicate that an event has occurred.
*   **Example (Producer-Consumer):**
    *   `empty_slots`: Counting semaphore initialized to buffer size (e.g., 10). Signals available empty slots.
    *   `filled_slots`: Counting semaphore initialized to 0. Signals available filled slots.
    *   `mutex`: Binary semaphore initialized to 1. Protects the shared buffer.
    *   **Producer Task:**
        *   `wait(empty_slots)`: Wait for an empty slot.
        *   `wait(mutex)`: Acquire buffer access.
        *   Add item to buffer.
        *   `signal(mutex)`: Release buffer access.
        *   `signal(filled_slots)`: Signal that a slot is filled.
    *   **Consumer Task:**
        *   `wait(filled_slots)`: Wait for a filled slot.
        *   `wait(mutex)`: Acquire buffer access.
        *   Remove item from buffer.
        *   `signal(mutex)`: Release buffer access.
        *   `signal(empty_slots)`: Signal that a slot is now empty.

**(Referenced from Cooling, Chapter 6: "Semaphores and Mutexes"; Mall, Chapter 5: "Task Synchronization and Communication"; Krishna & Shin, Chapter 6: "Synchronization Mechanisms")**

#### 4.3. Event Flags

*   **Concept:** A mechanism where a task can wait for one or more specific events to occur. Events are often represented by bits in a flag word.
*   **Key Operations:**
    *   `event_flag_create()`: Creates an event flag group.
    *   `event_flag_wait(event_flag_group, flags_to_wait_for, wait_mode)`: A task waits for a specific combination of flags to be set. `wait_mode` can be "any" or "all".
    *   `event_flag_set(event_flag_group, flags_to_set)`: Sets one or more flags, potentially unblocking waiting tasks.
*   **Advantages:** Can be more flexible than semaphores for complex synchronization scenarios involving multiple events.
*   **Example:** A task might wait for both a "data ready" event and a "timeout" event before proceeding.

**(Referenced from Valvano, Chapter 16: "Real-Time Operating System Concepts")**

#### 4.4. Message Queues

*   **Concept:** A more complex communication mechanism allowing tasks to send and receive messages to/from each other.
*   **Key Operations:**
    *   `msg_queue_create()`: Creates a message queue.
    *   `msg_queue_send(queue_ptr, message)`: Sends a message to the queue. If the queue is full, the sender may block.
    *   `msg_queue_receive(queue_ptr, &message)`: Receives a message from the queue. If the queue is empty, the receiver may block.
*   **Advantages:** Provides asynchronous communication and decoupling between tasks. Can handle data transfer between tasks.
*   **Use Case:** Coordinating actions between different functional blocks in a system.

**(Referenced from Mall, Chapter 5: "Task Synchronization and Communication"; Krishna & Shin, Chapter 6: "Synchronization Mechanisms")**

## 5. Real-Time Operating System (RTOS) Services for Scheduling and Synchronization

RTOS provides the fundamental building blocks for implementing real-time scheduling and synchronization.

### RTOS Services:

*   **Task Management:** Creating, deleting, suspending, resuming, and managing task states.
*   **Scheduling:** Implementing scheduling algorithms (e.g., round-robin, priority-based preemptive, cooperative). RTOS kernels often support various scheduling policies.
*   **Synchronization Primitives:** Providing mutexes, semaphores, event flags, and message queues.
*   **Interrupt Handling:** Managing hardware interrupts and routing them to appropriate tasks.
*   **Timer Services:** Providing high-resolution timers for task delays and periodic task management.

### Examples of RTOS Services:

*   **FreeRTOS:** A popular open-source RTOS that supports priority-based preemptive scheduling, cooperative scheduling, mutexes, semaphores, queues, and timers.
*   **VxWorks:** A commercial RTOS widely used in aerospace, defense, and industrial automation. It offers advanced scheduling and synchronization features.
*   **RTLinux/Xenomai:** Real-time extensions for Linux that allow hard real-time performance.

**(CO4: Utilize RTOS services and middleware for developing real-time applications. - Knowledge Level: K3, K4)**

## 6. Practice Questions and Exercises

**Question 1 (RMS):**
Consider the following set of periodic tasks:
*   Task T1: Period $T_1 = 10$ms, WCET $C_1 = 3$ms
*   Task T2: Period $T_2 = 25$ms, WCET $C_2 = 6$ms
*   Task T3: Period $T_3 = 50$ms, WCET $C_3 = 10$ms

a) Calculate the total CPU utilization for this task set.
b) Determine the priorities of these tasks using the Rate Monotonic Scheduling (RMS) algorithm.
c) Using the Liu & Layland bound, determine if this task set is guaranteed to be schedulable by RMS. Show your calculation.

**Answer 1:**
a) Total CPU Utilization $U = \frac{C_1}{T_1} + \frac{C_2}{T_2} + \frac{C_3}{T_3} = \frac{3}{10} + \frac{6}{25} + \frac{10}{50} = 0.3 + 0.24 + 0.2 = 0.74$

b) Priorities using RMS (shorter period = higher priority):
*   T1 (Period 10ms) has the highest priority.
*   T2 (Period 25ms) has medium priority.
*   T3 (Period 50ms) has the lowest priority.

c) Liu & Layland bound for $n=3$ tasks:
$n(2^{1/n} - 1) = 3(2^{1/3} - 1) \approx 3(1.2599 - 1) \approx 3(0.2599) \approx 0.7797$
Since the total CPU utilization ($U = 0.74$) is less than the Liu & Layland bound (0.7797), the task set is guaranteed to be schedulable by RMS.

---

**Question 2 (EDF):**
Consider two periodic tasks with the following characteristics:
*   Task A: WCET $C_A = 5$ms, Period $T_A = 20$ms
*   Task B: WCET $C_B = 8$ms, Period $T_B = 30$ms

a) Calculate the total CPU utilization for this task set.
b) Can this task set be scheduled using the Earliest Deadline First (EDF) algorithm? Justify your answer.
c) If Task A's deadline is changed to $D_A = 15$ms, while its period remains $T_A = 20$ms, would this system still be schedulable by EDF?

**Answer 2:**
a) Total CPU Utilization $U = \frac{C_A}{T_A} + \frac{C_B}{T_B} = \frac{5}{20} + \frac{8}{30} = 0.25 + 0.2667 = 0.5167$

b) For EDF, a task set is schedulable if $U \le 1$. Since $0.5167 \le 1$, this task set is schedulable by EDF.

c) The EDF schedulability test ($U \le 1$) is based on periods, not deadlines, for periodic tasks. Even with the deadline change, the utilization remains $0.5167$. Therefore, the system is still schedulable by EDF. However, if we were using a deadline-monotonic approach or more advanced schedulability tests that consider deadlines explicitly, the changed deadline would be important.

---

**Question 3 (Synchronization):**
Describe the priority inversion problem and explain how the Priority Inheritance Protocol (PIP) can be used to solve it. Provide a simple scenario.

**Answer 3:**
**Priority Inversion Problem:**
Priority inversion occurs when a high-priority task is forced to wait for a low-priority task to release a shared resource (e.g., a mutex). This is problematic because the high-priority task, which should have immediate access, is blocked by a task with lower priority. The severity increases if an intermediate-priority task preempts the low-priority task before it releases the resource, causing further delays for the high-priority task.

**Priority Inheritance Protocol (PIP):**
PIP is a technique to mitigate priority inversion. When a high-priority task (H) is blocked by a low-priority task (L) that holds a required resource, task L temporarily inherits the priority of task H. Task L then executes at this higher priority until it completes its critical section and releases the resource. Once the resource is released, task L reverts to its original low priority, and task H can acquire the resource and resume execution. This protocol ensures that the blocking task runs at a priority sufficient to complete its critical section without further preemption by lower-priority tasks, thus reducing the blocking time for the high-priority task.

**Scenario:**
*   Task H (High Priority)
*   Task M (Medium Priority)
*   Task L (Low Priority)

1.  Task L acquires a mutex protecting a shared resource.
2.  Task H becomes ready and needs the shared resource. It tries to acquire the mutex but blocks because Task L holds it.
3.  Task M becomes ready. Normally, Task M would preempt Task L.
4.  **Without PIP:** Task M preempts Task L. Task L is blocked by Task H (waiting for mutex) and preempted by Task M (lower priority than H, but higher than L). Task H is now indirectly delayed by Task M.
5.  **With PIP:** Task L inherits the priority of Task H. Now, Task L runs at Task H's priority, preventing Task M from preempting it. Task L quickly finishes its critical section and releases the mutex.
6.  Task H acquires the mutex and proceeds. Task L then reverts to its original low priority.

---

## 7. Important Points to Remember

*   **Deadlines are critical:** Real-time systems are defined by their timing constraints.
*   **Scheduling algorithms:** RMS, EDF, and DMS are fundamental for determining task execution order. Understand their principles, advantages, and disadvantages.
*   **Utilization bound:** A key metric for schedulability analysis.
*   **WCET:** Essential for accurate schedulability analysis; can be determined statically or via measurement.
*   **Synchronization:** Necessary to manage shared resources and prevent race conditions.
*   **Priority Inversion:** A common problem in priority-based preemptive systems that needs to be addressed with protocols like PIP or PCP.
*   **RTOS services:** Provide the essential mechanisms for implementing scheduling and synchronization in embedded systems.

## 8. Alignment with Course Outcomes

*   **CO1: Explain the fundamental concepts and characteristics of real-time systems.** (Covered in Introduction and throughout; understanding deadlines, task types, and the goal of scheduling).
*   **CO2: Analyze and implement real-time scheduling algorithms and techniques.** (Covered in Section 2 with RMS, EDF, DMS, and their analysis; also Question 1 and 2 exercises).
*   **CO3: Conduct worst-case execution time (WCET) analysis for real-time tasks.** (Covered in Section 3 with methods and importance; also implied in calculating utilization for schedulability).
*   **CO4: Utilize RTOS services and middleware for developing real-time applications.** (Covered in Section 5, mentioning services like task management, synchronization primitives, and examples like FreeRTOS).
*   **CO5: Develop practical real-time applications in various domains such as automotive, aerospace, and medical devices.** (While not directly implementing an application here, the understanding of scheduling and synchronization is foundational for developing such applications, providing the core mechanisms for reliable operation.)

This module lays the groundwork for building robust and reliable real-time systems by focusing on how tasks are managed and how they interact safely when sharing resources.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
