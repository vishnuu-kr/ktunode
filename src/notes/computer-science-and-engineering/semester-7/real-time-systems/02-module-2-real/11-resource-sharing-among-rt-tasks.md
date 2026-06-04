---
title: "resource sharing among RT tasks"
subject: "REAL TIME SYSTEMS"
module: "Module 2: Real"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c317"
status: "completed"
scrapedAt: "2026-05-20T17:10:05.920Z"
---
# Real-Time Systems: Module 2 - Resource Sharing Among RT Tasks

This module delves into the critical aspect of how real-time tasks share resources and the challenges this presents in designing predictable and reliable systems.

## Learning Outcomes:

By the end of this module, you will be able to:

*   Understand the need for resource sharing in real-time systems.
*   Identify and explain common resource sharing problems.
*   Describe various mechanisms for managing resource sharing.
*   Analyze the impact of different resource sharing protocols on system performance and predictability.
*   Apply appropriate resource sharing techniques to solve practical real-time system design problems.

---

## 1. Introduction to Resource Sharing in Real-Time Systems

### 1.1 What are Resources?

In the context of real-time systems, a **resource** is any entity that can be accessed by multiple tasks and whose availability is limited. This can include:

*   **Hardware Resources:**
    *   **CPU time:** A single processor or a shared multi-core processor.
    *   **Memory:** Shared RAM, ROM, or caches.
    *   **I/O Devices:** Peripherals like sensors, actuators, network interfaces, timers, communication ports (e.g., serial ports, SPI, I2C).
    *   **Shared Memory Locations:** Data structures or variables accessible by multiple tasks.
*   **Software Resources:**
    *   **Shared Data Structures:** Queues, buffers, lists, databases.
    *   **Software Mutexes/Semaphores:** Synchronization primitives provided by the operating system.
    *   **Files:** Files on disk that multiple tasks might need to read from or write to.
    *   **Communication Channels:** Message queues, pipes.

### 1.2 Why is Resource Sharing Necessary?

Resource sharing is fundamental to most real-time systems for several reasons:

*   **Efficiency:** Avoids redundant hardware or software components by allowing multiple tasks to utilize a single instance. For example, a single sensor can provide data to multiple monitoring tasks.
*   **Modularity and Reusability:** Allows for the design of independent tasks that interact with shared resources, promoting a modular and maintainable system.
*   **Data Coherency:** Enables tasks to communicate and exchange data through shared memory or other shared structures.
*   **System Functionality:** Many real-time applications require tasks to coordinate their actions and access common resources to achieve their overall goals (e.g., control systems needing actuator access).

### 1.3 Challenges of Resource Sharing

While essential, resource sharing introduces significant challenges, particularly for real-time systems where timing guarantees are paramount:

*   **Concurrency:** Multiple tasks may attempt to access a shared resource simultaneously.
*   **Data Inconsistency:** Uncontrolled concurrent access can lead to corrupted data.
*   **Deadlock:** A situation where two or more tasks are blocked indefinitely, waiting for resources held by each other.
*   **Starvation:** A task is perpetually denied access to a resource it needs.
*   **Priority Inversion:** A higher-priority task is blocked waiting for a resource held by a lower-priority task, which is preempted by an even lower-priority task. This is a critical problem in real-time systems as it violates priority-based scheduling.
*   **Unpredictable Execution Times:** Resource contention can introduce variable delays, making it difficult to guarantee deadlines.

---

## 2. Common Resource Sharing Problems

Let's elaborate on the key problems arising from resource sharing.

### 2.1 Data Inconsistency and Race Conditions

*   **Definition:** A **race condition** occurs when the outcome of an operation depends on the unpredictable timing of multiple tasks accessing and modifying shared data. This can lead to **data inconsistency**, where the shared data is in an invalid or corrupted state.
*   **Example:**
    Consider two tasks, Task A (high priority) and Task B (low priority), both accessing a shared counter variable `count`.

    ```
    // Shared variable
    int count = 0;

    // Task A (high priority)
    void task_A() {
        count = count + 1; // Operation 1
        // ... other operations ...
        count = count + 1; // Operation 2
    }

    // Task B (low priority)
    void task_B() {
        count = count + 1; // Operation 3
    }
    ```

    **Scenario 1 (No preemption):**
    1. Task B executes `count = count + 1;` (`count` becomes 1).
    2. Task A executes `count = count + 1;` (`count` becomes 2).
    3. Task A executes `count = count + 1;` (`count` becomes 3).
    **Result: `count` = 3 (Correct)**

    **Scenario 2 (Preemption during `count = count + 1`):**
    Let's break down `count = count + 1` into its elementary operations:
    a. Read `count`.
    b. Increment the value.
    c. Write the new value back to `count`.

    1. Task B starts: Reads `count` (value is 0).
    2. Task B is preempted by Task A.
    3. Task A starts: Reads `count` (value is 0).
    4. Task A increments its value (0+1=1).
    5. Task A writes back to `count` (`count` is now 1).
    6. Task A increments its value (1+1=2).
    7. Task A writes back to `count` (`count` is now 2).
    8. Task A finishes its first `count = count + 1;`.
    9. Task A continues and performs its second `count = count + 1;` operation. It reads `count` (value is 2), increments (2+1=3), and writes back (`count` is now 3).
    10. Task A finishes.
    11. Task B resumes: It still has the old value it read (0). It increments it (0+1=1) and writes back.
    **Result: `count` = 1 (Incorrect! Expected 3 increments, so 3).**

    This demonstrates a race condition.

### 2.2 Deadlock

*   **Definition:** A **deadlock** is a situation where two or more tasks are blocked forever, each waiting for a resource that is held by another task in the group.
*   **Conditions for Deadlock (Coffman conditions):** All four must hold for a deadlock to occur.
    1.  **Mutual Exclusion:** At least one resource must be held in a non-sharable mode. (Only one task can use it at a time).
    2.  **Hold and Wait:** A task holding at least one resource is waiting to acquire additional resources held by other tasks.
    3.  **No Preemption:** Resources cannot be forcibly taken away from a task holding them.
    4.  **Circular Wait:** A set of tasks {T1, T2, ..., Tn} exists such that T1 is waiting for a resource held by T2, T2 is waiting for a resource held by T3, ..., Tn-1 is waiting for a resource held by Tn, and Tn is waiting for a resource held by T1.
*   **Example:**
    Task A needs Resource X then Resource Y.
    Task B needs Resource Y then Resource X.

    1.  Task A acquires Resource X.
    2.  Task B acquires Resource Y.
    3.  Task A attempts to acquire Resource Y, but it's held by Task B. Task A blocks.
    4.  Task B attempts to acquire Resource X, but it's held by Task A. Task B blocks.

    Both tasks are now blocked indefinitely, waiting for each other.

### 2.3 Starvation

*   **Definition:** **Starvation** (also known as indefinite blocking) occurs when a task is perpetually denied access to a resource it needs to make progress, even though the resource is repeatedly available. This often happens in priority-based systems when lower-priority tasks are continuously preempted by higher-priority tasks and never get a chance to run.
*   **Example:**
    Consider a system with three tasks: Task H (high priority), Task M (medium priority), and Task L (low priority). All tasks need access to a shared resource, say a printer.
    If Task L acquires the printer and starts printing, and then Task H and Task M arrive and continuously request the printer, they will preempt Task L. If Task H and Task M arrive *very* frequently, Task L might never get enough continuous access to finish its printing job, effectively starving it.

### 2.4 Priority Inversion

*   **Definition:** **Priority inversion** is a scheduling anomaly where a high-priority task is delayed due to the execution of lower-priority tasks that are holding resources the high-priority task needs. This violates the fundamental principle of priority-based scheduling where higher-priority tasks should always execute before lower-priority tasks.
*   **Conditions for Priority Inversion:**
    1.  A high-priority task (H) needs a resource.
    2.  A medium-priority task (M) currently holds the resource.
    3.  A low-priority task (L) preempts task M.
*   **The Problem:** Task H is waiting for the resource held by M. Normally, Task H would run. However, M is blocked by L. So, H is blocked by L, indirectly. This is not the core problem yet. The real problem arises when another task (let's call it Task L2, even lower priority) arrives and preempts Task L. Now, Task H is waiting for the resource held by M, which is blocked by L, and L is blocked by L2. This means Task H, the highest priority, is effectively forced to wait for the lowest priority task to finish.
*   **A More Common Scenario:**
    1.  Task H (highest priority) needs Resource R.
    2.  Task L (lowest priority) currently holds Resource R.
    3.  Task M (medium priority) arrives and preempts Task L.
    4.  Task H arrives and needs Resource R. Task H attempts to acquire Resource R, but it's held by Task L. Task H blocks.
    5.  Task M is running. Task L is blocked by Task H waiting for R.
    6.  Now, Task H cannot run because it's waiting for L. Task M is running, and it's a lower priority than H. Task L cannot run because it's preempted by M and is waiting for R.
    7.  The crucial inversion happens here: Task H, the highest priority, is blocked by Task L, the lowest priority, because Task L holds the resource. But the system may appear to be running Task M, which has lower priority than H, while H is blocked. If Task M finishes its execution and then Task L gets to run, it releases R, and Task H can proceed. The key is that H's execution is delayed by L, which is preempted by M.

    **Let's refine the classic Priority Inversion example with three tasks and a single resource (e.g., a mutex protecting a shared buffer):**

    *   **Task A (High Priority):** Needs to write to the shared buffer.
    *   **Task B (Medium Priority):** Does not need the buffer.
    *   **Task C (Low Priority):** Needs to write to the shared buffer.

    1.  **Initial State:** Task A, B, and C are ready. Task C is running.
    2.  **C acquires mutex:** Task C acquires the mutex for the shared buffer.
    3.  **B arrives:** Task B (medium priority) arrives and preempts Task C. Task C is now blocked waiting for the mutex.
    4.  **A arrives:** Task A (high priority) arrives and needs the shared buffer. Task A attempts to acquire the mutex. The mutex is held by Task C. Task A blocks, waiting for Task C to release the mutex.
    5.  **The Inversion:** Task A (highest priority) is blocked by Task C (lowest priority). Meanwhile, Task B (medium priority) is running. Task A's deadline is now at risk because it's waiting for a low-priority task to finish its critical section.

---

## 3. Mechanisms for Managing Resource Sharing

To mitigate the problems discussed, various synchronization and resource management mechanisms are employed.

### 3.1 Mutexes and Semaphores

These are fundamental synchronization primitives.

#### 3.1.1 Mutex (Mutual Exclusion)

*   **Definition:** A mutex is a locking mechanism used to ensure that only one task can access a shared resource at a time. A task must "acquire" (lock) the mutex before accessing the resource and "release" (unlock) it afterward.
*   **Operation:**
    *   `mutex_lock(mutex_id)`: Attempts to acquire the mutex. If the mutex is already held, the task blocks until it's released.
    *   `mutex_unlock(mutex_id)`: Releases the mutex, allowing another waiting task to acquire it.
*   **Problem it Addresses:** Data inconsistency, race conditions.
*   **Problem it can Cause:** Deadlock (if mutexes are acquired in inconsistent orders), Priority Inversion (if not used with a proper protocol).

#### 3.1.2 Semaphore

*   **Definition:** A semaphore is a more general synchronization mechanism. It's an integer variable that can be accessed only through two atomic operations: `wait()` (or `P()`) and `signal()` (or `V()`).
    *   `wait(semaphore_id)`: Decrements the semaphore value. If the value becomes negative, the task blocks.
    *   `signal(semaphore_id)`: Increments the semaphore value. If the value was negative, it unblocks a waiting task.
*   **Types of Semaphores:**
    *   **Binary Semaphore:** Can take values 0 or 1. Behaves like a mutex (used for mutual exclusion).
    *   **Counting Semaphore:** Can take any non-negative integer value. Used to control access to a resource with multiple instances (e.g., N buffer slots, N database connections).
*   **Problem it Addresses:** Mutual exclusion (binary semaphore), controlling access to pooled resources (counting semaphore).
*   **Problem it can Cause:** Deadlock, Priority Inversion.

### 3.2 Resource Scheduling Protocols

These protocols are designed to prevent or mitigate specific problems like priority inversion.

#### 3.2.1 Priority Inheritance Protocol (PIP)

*   **Goal:** To prevent priority inversion.
*   **Mechanism:** When a low-priority task (L) holds a resource that a high-priority task (H) needs, task L's priority is *temporarily boosted* to match task H's priority. This ensures that L runs to completion of its critical section without being preempted by any intermediate-priority tasks, thus allowing H to acquire the resource sooner.
*   **How it works:**
    1.  A task T (e.g., H) attempts to acquire a resource R.
    2.  If R is currently held by another task P, and T's priority is higher than P's priority, P's priority is boosted to T's priority.
    3.  P continues executing at its boosted priority.
    4.  When P finishes its critical section and releases R, its priority is restored to its original value.
*   **Example (revisiting the Priority Inversion example):**
    *   Task A (High), Task B (Medium), Task C (Low). Mutex M protects a shared buffer.
    1.  Task C acquires mutex M.
    2.  Task B arrives, preempts C.
    3.  Task A arrives, needs mutex M. It blocks waiting for M.
    4.  **PIP applies:** Task C (holding M) has its priority boosted to Task A's priority.
    5.  Now, Task C (with boosted priority) runs instead of Task B. It finishes its critical section, releases M.
    6.  Task A can now acquire M.
    7.  Task C's priority is restored to Low.
    8.  Task A runs, does its work, releases M.
    9.  Task B resumes.
*   **Advantages:** Prevents priority inversion, relatively simple to implement.
*   **Disadvantages:** Can lead to **deadlock** if not carefully managed (e.g., circular dependency on priority boosting). A task can be blocked by multiple lower-priority tasks if they are all holding resources needed by the higher-priority task.

#### 3.2.2 Priority Ceiling Protocol (PCP)

*   **Goal:** To prevent both priority inversion and deadlock.
*   **Mechanism:** Each resource is assigned a **priority ceiling**. The priority ceiling of a resource is defined as the highest priority of any task that can access that resource. A task can only acquire a resource if its priority is strictly higher than the priority ceiling of all resources currently held by other tasks.
*   **How it works:**
    1.  Each resource R has a `priority_ceiling(R)`.
    2.  A task T can acquire a resource R only if `priority(T) > priority_ceiling(all_resources_currently_held_by_any_task)`.
    3.  When a task T acquires a resource R, its "effective priority" becomes the maximum of its original priority and the priority ceilings of all resources it currently holds.
*   **Example (revisiting the Priority Inversion example):**
    *   Task A (Priority 3), Task B (Priority 2), Task C (Priority 1).
    *   Shared Buffer protected by Mutex M.
    *   Let's assume both Task A and Task C can access the buffer. `priority_ceiling(M) = priority(A) = 3`.

    1.  Task C (Priority 1) tries to acquire Mutex M. The current highest priority ceiling among held resources is effectively 0 (no resources held). Task C's priority (1) is NOT > 0, but let's assume for simplicity that initial acquisition is allowed if priority > 0. It acquires M. Task C's effective priority becomes max(1, `priority_ceiling(M)`) = 3.
    2.  Task B (Priority 2) arrives. It doesn't need M. It preempts C.
    3.  Task A (Priority 3) arrives, needs Mutex M. It tries to acquire M.
    4.  **PCP Rule Check:** Task A's priority is 3. The highest priority ceiling of currently held resources is `priority_ceiling(M) = 3` (held by C). Is `priority(A) > priority_ceiling(M)`? Is 3 > 3? No. Task A cannot acquire M. Task A blocks.
    5.  **The crucial difference:** Task C's priority was boosted to 3 (its effective priority). Task C continues running (or is resumed if preempted by B) to complete its critical section. Task B is preempted by C (because C now has effective priority 3).
    6.  Once Task C releases M, Task A can acquire it because now the condition `priority(A) > 0` holds (as no resources are held).
    7.  Task A runs, performs its operation, releases M.
    8.  Task B resumes.
*   **Advantages:** Prevents deadlock and priority inversion. Provides a bound on blocking time for any task.
*   **Disadvantages:** More complex to implement. Requires all shared resources to have a pre-assigned priority ceiling. Can lead to more frequent priority boosts, potentially affecting system throughput.

#### 3.2.3 Mutex Flags / Timeout Mechanisms

*   **Definition:** While not a full protocol, using timeouts when acquiring mutexes or semaphores can prevent deadlocks.
*   **Mechanism:** Instead of blocking indefinitely, a task attempting to acquire a resource can specify a maximum time it's willing to wait. If the resource is not acquired within that time, the task times out and can take alternative actions (e.g., report an error, try again later).
*   **Example:** `mutex_trylock(mutex_id, timeout_duration)`
*   **Advantages:** Helps prevent deadlocks from a single task's perspective.
*   **Disadvantages:** Doesn't inherently solve priority inversion. A timed-out task might retry indefinitely, potentially leading to starvation or repeated resource contention. Managing timeouts can be complex.

#### 3.2.4 Other Mechanisms

*   **Message Queues:** Tasks can communicate by sending messages. This is often safer as it avoids direct shared memory access, but can introduce latency.
*   **Monitors:** A higher-level synchronization construct that encapsulates shared data and the procedures that operate on it, ensuring mutual exclusion.

---

## 4. Impact of Resource Sharing Protocols on System Performance and Predictability

| Protocol                      | Primary Problem Addressed             | Deadlock Prevention | Priority Inversion Prevention | Predictability Impact                                                                                                                                                            | Complexity |
| :---------------------------- | :------------------------------------ | :------------------ | :---------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------- |
| **No Protocol (Naive)**       | None                                  | No                  | No                            | Very low. High risk of unpredictable delays due to race conditions, deadlocks, and priority inversion.                                                                           | Very Low   |
| **Mutex/Semaphore (Basic)**   | Data Inconsistency                    | No (can cause)      | No (can cause)                | Improved over no protocol, but still susceptible to deadlock and priority inversion, leading to unpredictable blocking.                                                            | Low        |
| **Priority Inheritance (PIP)**| Priority Inversion                    | No (can cause)      | Yes                           | Good. Prevents higher-priority tasks from being unduly delayed by lower-priority tasks holding resources. Still susceptible to deadlock.                                      | Medium     |
| **Priority Ceiling (PCP)**    | Priority Inversion & Deadlock         | Yes                 | Yes                           | Excellent. Provides predictable bounds on blocking times for all tasks. Maximizes concurrency while guaranteeing freedom from priority inversion and deadlock.                     | High       |
| **Timeout Mechanisms**        | Deadlock (from a task's perspective) | Partial             | No                            | Can prevent a single task from blocking forever, but doesn't prevent the underlying conditions. Can lead to retries and potential starvation.                                | Medium     |

---

## 5. Practical Application and Design Considerations

*   **Identify Shared Resources:** The first step is to identify all resources that will be shared among tasks.
*   **Analyze Task Dependencies:** Understand which tasks need access to which resources and their relative priorities.
*   **Choose the Right Protocol:**
    *   For systems with strict timing requirements and potential for priority inversion, PCP is often the best choice, despite its complexity.
    *   If deadlock is a concern but PCP is too complex, careful design with PIP and deadlock detection/prevention strategies might be considered.
    *   For simpler systems with fewer contention points, basic mutexes might suffice if careful coding practices are followed.
*   **Minimize Critical Section Lengths:** The time a task holds a resource (its critical section) should be as short as possible to reduce contention and the window for priority inversion.
*   **Avoid Nested Resource Acquisition:** Tasks acquiring multiple resources should do so in a consistent order across the system to avoid deadlocks. PCP inherently handles this.
*   **Consider Resource Grouping:** Group related resources that are often accessed together under a single mutex or managed by a common protocol.
*   **Real-Time Operating System (RTOS) Support:** Most RTOSs provide built-in support for mutexes, semaphores, and often one of the priority inheritance/ceiling protocols. Familiarize yourself with your RTOS's capabilities.

---

## 6. Practice Questions and Exercises

**Question 1:**
What is the fundamental difference between a mutex and a binary semaphore?
**Answer:** While functionally similar for mutual exclusion (both can be 0 or 1), a mutex is typically owned by the task that locks it, and only that task can unlock it. A semaphore, on the other hand, can be signaled by any task. Mutexes often have features like priority inheritance built-in, which semaphores might not.

**Question 2:**
Describe the three conditions necessary for priority inversion to occur.
**Answer:**
1.  A high-priority task (H) needs a resource.
2.  A low-priority task (L) currently holds the resource.
3.  An intermediate-priority task (M) preempts the low-priority task (L).

**Question 3:**
Explain how the Priority Ceiling Protocol (PCP) prevents deadlock.
**Answer:** PCP prevents deadlock by ensuring that a task can only acquire a resource if its priority is strictly higher than the priority ceiling of all resources already held by other tasks. This condition effectively prevents the "circular wait" condition necessary for deadlock. If a task cannot acquire a resource because its priority is not high enough compared to the priority ceilings of held resources, it means that either the resource is not currently held, or the task holding it has a priority that will eventually allow the requesting task to proceed without creating a circular dependency.

**Question 4:**
Consider the following scenario:
*   Task T1 (Priority 3)
*   Task T2 (Priority 2)
*   Task T3 (Priority 1)
*   Resource R, protected by a mutex M. Both T1 and T3 access R.

**Scenario:**
1.  T3 acquires mutex M.
2.  T2 arrives and preempts T3.
3.  T1 arrives and needs mutex M.

Without any special protocol, what problem can occur? If you apply the Priority Inheritance Protocol (PIP), how will the execution order change?

**Answer:**
*   **Problem without protocol:** Priority Inversion. Task T1 (highest priority) is blocked waiting for mutex M, which is held by T3 (lowest priority). Meanwhile, T2 (medium priority) is running, preempting T3. T1's execution is delayed by T3, which is blocked by T2. T1's deadline could be missed.

*   **Execution with PIP:**
    1.  T3 acquires mutex M.
    2.  T2 arrives, preempts T3.
    3.  T1 arrives, needs mutex M. T1 blocks waiting for M.
    4.  **PIP applies:** T3 (holding M) has its priority temporarily boosted to T1's priority (3).
    5.  T3 now runs at priority 3, preempting T2.
    6.  T3 completes its critical section and releases M.
    7.  T1 can now acquire M.
    8.  T1 runs.
    9.  T1 finishes, releases M.
    10. T2 resumes execution.

**Question 5:**
What is the main advantage of the Priority Ceiling Protocol (PCP) over the Priority Inheritance Protocol (PIP)?
**Answer:** The main advantage of PCP over PIP is that PCP prevents deadlocks in addition to priority inversion. PIP alone can still lead to deadlocks if tasks acquire multiple resources in different orders. PCP guarantees that no deadlocks will occur by enforcing a strict rule for resource acquisition based on priority ceilings.

---

## 7. Important Points to Remember

*   **Resource sharing is inevitable but complex.** Understand the problems it introduces.
*   **Priority inversion is a critical real-time system problem.** It directly violates priority-based scheduling.
*   **Mutexes and Semaphores are building blocks.** They solve mutual exclusion but don't inherently prevent priority inversion or deadlock.
*   **PIP prevents priority inversion** by boosting the priority of the resource holder.
*   **PCP prevents both priority inversion and deadlock** by imposing a priority ceiling on resources.
*   **Critical section length matters.** Shorter critical sections reduce contention and risks.
*   **Consistent resource acquisition order** is crucial for deadlock prevention if not using PCP.
*   **Choose protocols based on system requirements** (timing constraints, complexity tolerance).
*   **RTOS features are your friends.** Leverage built-in synchronization primitives and protocols.
