---
title: "Concurrency control"
subject: "REAL TIME SYSTEMS"
module: "Module 4: RT communications: QoS framework, models"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c339"
status: "completed"
scrapedAt: "2026-05-20T17:10:29.551Z"
---
# Real-Time Systems: Module 4 - RT Communications: QoS Framework, Models - Concurrency Control

---

## 1. Introduction to Concurrency Control in Real-Time Systems

**1.1 What is Concurrency?**

*   **Definition:** Concurrency refers to the ability of multiple tasks or processes to execute in overlapping time periods. In real-time systems, tasks often need to share resources (e.g., data, hardware devices, communication channels).
*   **Real-World Analogy:** Imagine a busy kitchen where multiple chefs are trying to prepare different dishes simultaneously. They might need to share the oven, cutting boards, or specific ingredients.

**1.2 Challenges of Concurrency in Real-Time Systems**

Concurrency introduces several challenges, especially in real-time systems where deadlines are critical:

*   **Resource Contention:** Multiple tasks competing for the same limited resources.
*   **Interference:** One task's execution can negatively impact another's, leading to incorrect results or missed deadlines.
*   **Data Inconsistency:** If tasks access and modify shared data without proper coordination, the data can become corrupted or inconsistent.

**1.3 Why is Concurrency Control Crucial for Real-Time Systems?**

*   **Meeting Deadlines:** Uncontrolled concurrency can lead to unpredictable execution times, making it impossible to guarantee that real-time tasks will meet their deadlines.
*   **Data Integrity:** Ensures that shared data remains consistent and accurate, preventing errors in system operation.
*   **System Stability and Reliability:** Proper concurrency control is essential for building robust and dependable real-time systems.

---

## 2. Key Concepts in Concurrency Control

**2.1 Shared Resources**

*   **Definition:** Resources that can be accessed by multiple concurrent tasks or processes.
*   **Examples:**
    *   Global variables
    *   Shared memory buffers
    *   Hardware devices (e.g., sensors, actuators, communication interfaces)
    *   Files
    *   Database records

**2.2 Critical Section**

*   **Definition:** A segment of code within a task where it accesses and manipulates shared resources.
*   **Requirement:** Only one task should be allowed to execute within its critical section at any given time to prevent data corruption. This is known as **mutual exclusion**.

**2.3 Race Condition**

*   **Definition:** A situation where the outcome of an operation depends on the unpredictable timing or interleaving of multiple concurrent tasks accessing shared data.
*   **Example:**
    *   Consider two tasks, Task A and Task B, both trying to increment a shared counter variable `count`.
    *   Initial `count` = 0.
    *   **Task A:** Reads `count` (0), increments it to 1, writes `count` (1).
    *   **Task B:** Reads `count` (0), increments it to 1, writes `count` (1).
    *   Expected `count` = 2, but due to the race condition, the final `count` is 1.

**2.4 Atomicity**

*   **Definition:** An operation or a sequence of operations that is executed as a single, indivisible unit. It either completes entirely or not at all, with no intermediate states visible to other tasks.
*   **Importance:** Critical sections should ideally be executed atomically.

---

## 3. Mechanisms for Concurrency Control

**3.1 Mutual Exclusion**

*   **Goal:** To ensure that when one task is executing in its critical section, no other task can enter its corresponding critical section.
*   **Common Mechanisms:**

    *   **3.1.1 Semaphores:**
        *   **Definition:** A synchronization primitive used to control access to a common resource by multiple processes in a concurrent system. A semaphore is a signaling mechanism.
        *   **Types:**
            *   **Binary Semaphore (Mutex):** Has only two states: 0 (locked/busy) or 1 (unlocked/available). Can be used to implement mutual exclusion.
            *   **Counting Semaphore:** Can have an integer value greater than 1. Used to control access to a resource that has multiple instances.
        *   **Operations:**
            *   `wait(semaphore)` (or `P` operation, `down`): Decrements the semaphore. If the semaphore value becomes negative, the task is blocked until the semaphore is signaled.
            *   `signal(semaphore)` (or `V` operation, `up`): Increments the semaphore. If there are tasks blocked on the semaphore, one of them is unblocked.
        *   **Example (using binary semaphore for mutual exclusion):**
            ```
            // Global binary semaphore initialized to 1
            binary_semaphore mutex = 1;

            Task_A() {
                while (true) {
                    wait(mutex); // Acquire the lock
                    // Critical Section: Access shared resource
                    // ...
                    signal(mutex); // Release the lock
                    // ...
                }
            }

            Task_B() {
                while (true) {
                    wait(mutex); // Acquire the lock
                    // Critical Section: Access shared resource
                    // ...
                    signal(mutex); // Release the lock
                    // ...
                }
            }
            ```

    *   **3.1.2 Mutexes (Mutual Exclusion Locks):**
        *   **Definition:** A specific type of semaphore (binary semaphore) designed exclusively for mutual exclusion. Often provides additional features like ownership.
        *   **Operations:**
            *   `lock(mutex)`: Acquires the mutex. If already locked, the task blocks.
            *   `unlock(mutex)`: Releases the mutex. If tasks are waiting, one is unblocked.
        *   **Note:** In many RTOS, mutexes are the preferred mechanism for simple mutual exclusion.

    *   **3.1.3 Monitors:**
        *   **Definition:** A higher-level synchronization construct that encapsulates shared data and the procedures that operate on it. Only one task can be active within a monitor at any given time.
        *   **Features:** Includes condition variables for more complex synchronization.
        *   **Complexity:** Generally more complex to implement than semaphores/mutexes but can lead to more structured code.

    *   **3.1.4 Atomic Operations:**
        *   **Definition:** Hardware-supported operations that are guaranteed to be indivisible.
        *   **Examples:** Test-and-set, compare-and-swap.
        *   **Use:** Often used as building blocks for higher-level synchronization primitives like mutexes.
        *   **Advantage:** Can be very efficient but are typically low-level.

**3.2 Signaling**

*   **Goal:** To inform one or more tasks about an event or condition that has occurred.
*   **Mechanisms:**
    *   **Semaphores (as signaling mechanisms):** As described above, `signal()` can be used to notify waiting tasks.
    *   **Event Flags/Signals:** Dedicated mechanisms in some RTOS that allow tasks to wait for specific events or sets of events.
    *   **Message Queues:** Tasks can send messages to each other, which also serves as a form of signaling.

---

## 4. Priority Inversion and its Solutions

**4.1 What is Priority Inversion?**

*   **Definition:** A scheduling anomaly where a high-priority task is forced to wait for a lower-priority task to release a shared resource.
*   **Scenario:**
    1.  **Task H (High Priority)** needs a resource currently held by **Task L (Low Priority)**.
    2.  **Task M (Medium Priority)** preempts **Task L**.
    3.  **Task H** is now blocked by **Task M**, which is not the actual holder of the resource. **Task L** is delayed by **Task M**, and subsequently, **Task H** is delayed by **Task L** holding the resource.
*   **Impact:** Can lead to missed deadlines for high-priority tasks.

**4.2 Illustrative Example of Priority Inversion:**

*   **Tasks:**
    *   Task H (Priority 10)
    *   Task M (Priority 5)
    *   Task L (Priority 1)
*   **Shared Resource:** A printer.
*   **Execution Sequence:**
    1.  Task L acquires the printer.
    2.  Task H becomes ready and preempts Task L (because H > L). Task H wants the printer.
    3.  Task M becomes ready and preempts Task L (because M > L). Task M does *not* need the printer.
    4.  Task H is blocked, waiting for the printer.
    5.  Task M executes.
    6.  Task L, which currently holds the printer, is preempted by Task M. Task L cannot release the printer.
    7.  Task H is blocked by Task M, which is running while Task L (the resource holder) is not. Task H is effectively blocked by a medium-priority task.
    8.  Task M finishes.
    9.  Task L resumes and finishes its execution, releasing the printer.
    10. Task H can now acquire the printer.

**4.3 Solutions to Priority Inversion**

*   **4.3.1 Priority Inheritance Protocol (PIP):**
    *   **Mechanism:** When a low-priority task (Task L) holds a resource needed by a high-priority task (Task H), Task L inherits the priority of Task H temporarily.
    *   **How it works:** Task L's priority is boosted to match Task H's priority. This prevents Task M from preempting Task L, ensuring that Task L can quickly release the resource. Once Task L releases the resource, its priority reverts to its original level.
    *   **Example Continuation:**
        1.  Task L acquires the printer.
        2.  Task H becomes ready and wants the printer.
        3.  Task H is blocked.
        4.  Task L inherits Task H's priority.
        5.  Task M becomes ready but cannot preempt Task L because Task L now has a higher priority (inherited from H).
        6.  Task L runs to completion and releases the printer.
        7.  Task L's priority reverts to its original level.
        8.  Task H acquires the printer and runs.

*   **4.3.2 Priority Ceiling Protocol (PCP):**
    *   **Mechanism:** Assigns a "priority ceiling" to each shared resource. The priority ceiling of a resource is the highest priority of any task that might access that resource.
    *   **Rule:** A task can only enter a critical section if its priority is strictly higher than the priority ceilings of all resources currently locked by *other* tasks.
    *   **How it works:** Prevents not only direct priority inversion but also transitive priority inversion. A task at a lower priority cannot even *attempt* to enter a critical section if there's a higher-priority task that *could* be blocked by the current critical section.
    *   **Example:**
        *   Resource R1 (printer) has a priority ceiling of 10 (highest priority task that might use it is H).
        *   Task L (priority 1) wants to use R1.
        *   Task H (priority 10) is currently running (or ready).
        *   Task L checks R1's ceiling (10). Task L's priority (1) is *not* strictly higher than 10. So, Task L cannot enter the critical section.
        *   If Task H is blocked, and Task L is the only one holding resources, Task L's priority may be boosted to the ceiling priority if it tries to access a resource with a higher ceiling.

*   **4.3.3 Managing Priority Inversion in Practice:**
    *   **RTOS Support:** Most commercial RTOS provide built-in support for priority inheritance or priority ceiling protocols.
    *   **Careful Design:** Even with protocols, careful resource management and analysis are crucial.
    *   **Disabling Interrupts:** Temporarily disabling interrupts can prevent preemption by higher-priority tasks, but it's a coarse mechanism and can lead to missed interrupts.
    *   **Spinlocks:** For very short critical sections, spinlocks (where a task repeatedly checks a lock until it's available) can be used, but they consume CPU cycles and are generally not suitable for long-duration critical sections.

---

## 5. Communication Primitives in Real-Time Systems

While not solely "concurrency control," communication primitives are fundamental to how tasks interact and can create concurrency challenges.

**5.1 Message Queues**

*   **Description:** A mechanism for inter-task communication where tasks can send messages to each other.
*   **Concurrency Aspect:** When multiple tasks send to or receive from the same queue, the queue itself needs protection (e.g., using mutexes for its internal data structures).
*   **Blocking/Non-blocking:** Queues can support blocking (task waits if queue is full/empty) or non-blocking operations.

**5.2 Semaphores (for signaling/synchronization)**

*   **Description:** Used to signal events between tasks or to control access to resources.
*   **Concurrency Aspect:** Managing access to the semaphore itself, and the possibility of priority inversion when a high-priority task waits for a semaphore held by a low-priority task.

**5.3 Event Flags**

*   **Description:** Allow tasks to wait for one or more specific events to occur.
*   **Concurrency Aspect:** Managing the internal state of the event flag object.

**5.4 Shared Memory**

*   **Description:** A region of memory accessible by multiple tasks.
*   **Concurrency Aspect:** Requires strict concurrency control (e.g., mutexes, semaphores) to ensure data integrity when multiple tasks read from and write to it.

---

## 6. Real-Time Operating System (RTOS) Considerations

*   **Built-in Primitives:** RTOS provide a suite of concurrency control primitives like mutexes, semaphores, and condition variables.
*   **Scheduler Interaction:** The RTOS scheduler plays a vital role. Its policies (e.g., preemptive, fixed-priority) influence how concurrency issues manifest and are resolved.
*   **Interrupt Handling:** Interrupt service routines (ISRs) are a special case of concurrency. They can interrupt any task. Mechanisms for protecting shared resources accessed by both ISRs and tasks are crucial (e.g., disabling interrupts for short periods within critical sections, using specific ISR-safe primitives).

---

## 7. Practice Questions and Exercises

**7.1 Question 1: Critical Section Identification**

Consider the following code snippet for two tasks in a real-time system. Identify the critical section(s).

```c
// Global variable shared between tasks
int shared_counter = 0;

void Task_A() {
    while (1) {
        // ... some operations ...
        shared_counter = shared_counter + 1; // Line X
        // ... some other operations ...
    }
}

void Task_B() {
    while (1) {
        // ... some operations ...
        if (shared_counter > 0) { // Line Y
            // Process data based on shared_counter
        }
        // ... some other operations ...
    }
}
```

**Answer:**

The critical section is **Line X**: `shared_counter = shared_counter + 1;`. This is because it involves reading the shared variable, modifying it, and writing it back. The read operation at Line Y is also potentially problematic if `shared_counter` is modified between the read and its usage, but the most critical section for data integrity is the update.

**7.2 Question 2: Priority Inversion Scenario**

Describe a scenario where priority inversion occurs, clearly identifying the tasks, their priorities, and the shared resource.

**Answer:**

*   **Tasks:**
    *   Task High (Priority 10)
    *   Task Medium (Priority 5)
    *   Task Low (Priority 1)
*   **Shared Resource:** A shared buffer for sending data over a network.
*   **Scenario:**
    1.  Task Low acquires a mutex protecting the shared buffer.
    2.  Task High becomes ready to send data and tries to acquire the mutex. Task High is blocked because Task Low holds the mutex.
    3.  Task Medium becomes ready and preempts Task Low (since its priority 5 is higher than Task Low's original priority 1).
    4.  Task High is now indirectly blocked by Task Medium, as Task Medium is running and preventing Task Low from releasing the mutex. This is priority inversion.

**7.3 Question 3: Applying Priority Inheritance**

Using the scenario from Question 2, explain how the Priority Inheritance Protocol (PIP) would resolve the priority inversion.

**Answer:**

When Task High attempts to acquire the mutex and finds it locked by Task Low, Task Low's priority would be temporarily boosted to match Task High's priority (10). This elevated priority would prevent Task Medium from preempting Task Low. Task Low would then execute until it releases the mutex. Once the mutex is released, Task Low's priority would revert to its original value (1), and Task High would then be able to acquire the mutex and execute.

**7.4 Question 4: Semaphore Operations**

What is the difference between a binary semaphore and a counting semaphore? When would you use each?

**Answer:**

*   **Binary Semaphore:** Can only have two states (0 or 1). Used for **mutual exclusion** (like a mutex) or for basic signaling. Use when only one task can access a resource at a time, or when a single event needs to be signaled.
*   **Counting Semaphore:** Can hold an integer value greater than or equal to 0. Used to control access to a resource with multiple instances (e.g., a pool of buffers). Use when you need to limit the number of concurrent accesses to a resource.

---

## 8. Important Points to Remember

*   **Concurrency is inherent in most real-time systems:** Tasks often need to share resources.
*   **Race conditions lead to data inconsistency:** Proper control is essential.
*   **Critical sections must be protected:** Mutual exclusion is the primary goal.
*   **Semaphores and Mutexes are key synchronization primitives.**
*   **Priority inversion is a critical scheduling anomaly:** It can cause high-priority tasks to miss deadlines.
*   **Priority Inheritance Protocol (PIP) and Priority Ceiling Protocol (PCP) are common solutions to priority inversion.**
*   **RTOS provide the tools for concurrency control:** Understanding these tools is vital for real-time system development.
*   **Design for concurrency from the start:** It's much harder to add concurrency control later.
*   **Resource analysis is crucial:** Identify all shared resources and the tasks that access them.
