---
title: "cyclic"
subject: "REAL TIME SYSTEMS"
module: "Module 2: Real"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c310"
status: "completed"
scrapedAt: "2026-05-20T17:10:00.571Z"
---
# Real-Time Systems: Module 2 - Cyclic Scheduling

## Module Overview

This module introduces the fundamental concepts of cyclic scheduling, a widely used technique for managing tasks in real-time systems. We will explore its principles, advantages, disadvantages, and common implementation patterns.

---

## Learning Outcomes

Upon successful completion of this module, you will be able to:

*   **Understand the concept of cyclic scheduling:** Define cyclic scheduling and explain its core principles.
*   **Identify the characteristics of systems suitable for cyclic scheduling:** Determine when cyclic scheduling is an appropriate choice for a real-time system.
*   **Describe the structure of a cyclic executive:** Explain the components and operation of a typical cyclic executive.
*   **Analyze the advantages and disadvantages of cyclic scheduling:** Evaluate the pros and cons of using this scheduling approach.
*   **Illustrate cyclic scheduling with examples:** Provide and understand practical scenarios where cyclic scheduling is applied.
*   **Explain the role of the Time Triggered Executive (TTE) and Event Triggered Executive (ETE) within cyclic scheduling:** Differentiate between time-triggered and event-triggered aspects when combined with cyclic patterns.

---

## 1. The Concept of Cyclic Scheduling

Cyclic scheduling is a **static-priority scheduling algorithm** where tasks are executed in a predefined, repetitive order. It's often referred to as **round-robin scheduling** or **periodic task scheduling** in a simplified form. The core idea is to divide the system's time into fixed-length slots or periods, and within each period, tasks are executed according to a pre-determined schedule.

### Key Concepts and Definitions:

*   **Period (or Cycle Time):** The fixed duration after which the scheduling sequence repeats. This is the fundamental parameter that defines the cycle.
*   **Task:** A unit of work that needs to be performed by the real-time system.
*   **Execution Time (or WCET - Worst-Case Execution Time):** The maximum time a task can take to complete its execution.
*   **Scheduling Slot:** A segment of time within the cycle allocated to a specific task or a group of tasks.
*   **Deadline:** The time by which a task must complete its execution to be considered successful. In simple cyclic scheduling, the deadline is often implicitly the end of its allocated slot or the start of the next task's execution.
*   **Hyperperiod:** The least common multiple (LCM) of all task periods. In a pure cyclic schedule, the entire sequence of task executions repeats after the hyperperiod. However, in practical cyclic executives, the *cycle time* is usually the primary repeating unit.

### How it Works:

1.  **Define a Cycle:** A fixed-length cycle is established.
2.  **Allocate Time Slots:** Within this cycle, specific time slots are allocated to each task that needs to be executed periodically.
3.  **Execute Tasks Sequentially:** The tasks are executed in the predefined order of their allocated slots.
4.  **Repeat:** Once the cycle is completed, the sequence starts again from the beginning.

**Example:**

Consider three tasks:
*   **Task A:** Period = 10ms, Execution Time = 2ms
*   **Task B:** Period = 20ms, Execution Time = 3ms
*   **Task C:** Period = 40ms, Execution Time = 5ms

A simple cyclic schedule might look like this (assuming a cycle time of 20ms):

| Time (ms) | Task |
| :-------- | :--- |
| 0-2       | Task A |
| 2-5       | Task B |
| 5-7       | Task A |
| 7-12      | Task C |
| 12-14     | Task A |
| 14-17     | Task B |
| 17-19     | Task A |
| 19-20     | Idle / Background |

*(Note: This example is simplified. A more realistic scenario would involve ensuring that each task's period is met within the overall cycle.)*

---

## 2. Characteristics of Systems Suitable for Cyclic Scheduling

Cyclic scheduling is best suited for real-time systems with the following characteristics:

*   **Predictable and Periodic Workloads:** The system's primary functions involve repetitive operations that occur at regular intervals.
*   **Limited Number of Tasks:** While it can scale, it becomes complex to manage with a very large number of tasks or highly varying periods.
*   **Strict Timing Requirements:** Tasks have defined deadlines that must be met consistently.
*   **Low Jitter Requirements:** The variation in the start time of task execution should be minimal.
*   **Simplicity of Implementation:** For systems where complexity is a concern, cyclic scheduling offers a straightforward approach.
*   **Resource Constraints:** It can be efficient in environments with limited processing power, as it avoids the overhead of dynamic scheduling decisions.
*   **Well-Defined Execution Times:** Knowing or estimating the Worst-Case Execution Time (WCET) of tasks is crucial for proper scheduling.

**Examples of Suitable Systems:**

*   **Industrial Control Systems:** Monitoring sensors, controlling actuators at fixed rates.
*   **Automotive Systems:** Engine control units (ECUs), anti-lock braking systems (ABS).
*   **Embedded Systems:** Simple device controllers, communication protocols.
*   **Robotics:** Arm movement, sensor data acquisition.

---

## 3. The Structure of a Cyclic Executive

A cyclic executive is the software implementation of a cyclic scheduling policy. It typically consists of:

*   **A Timer:** A hardware timer is configured to generate interrupts at regular intervals, marking the start of each scheduling slot.
*   **A Scheduler (or Dispatcher):** This is the core component that determines which task to execute next based on the pre-defined cyclic schedule.
*   **Task Control Blocks (TCBs):** Data structures containing information about each task, such as its execution status, priority, and pointer to its code.
*   **Task Code:** The actual executable code for each real-time task.

### Operational Flow:

1.  **Initialization:**
    *   The system is initialized.
    *   The hardware timer is configured to generate periodic interrupts (e.g., every 1ms, 5ms).
    *   Task Control Blocks are set up with initial states.
2.  **Timer Interrupt:**
    *   When the timer interrupt occurs, the scheduler is invoked.
3.  **Scheduling Decision:**
    *   The scheduler consults the pre-defined cyclic schedule to determine which task should run in the current slot.
    *   It checks if the task is ready to run (e.g., has not already executed its allotted time in this cycle, or if its period has arrived).
4.  **Task Execution:**
    *   The scheduler switches context to the selected task and allows it to execute.
5.  **Task Completion/Timeout:**
    *   If the task completes its execution within its allocated slot, it yields control back to the scheduler.
    *   If the task's execution time exceeds its allocated slot (a critical issue), the scheduler may preempt it or signal an error.
6.  **Next Slot:**
    *   The scheduler waits for the next timer interrupt to repeat the process.

**Important Note on Slotting:**

The cycle time is typically divided into smaller, equal-duration slots. This allows for finer granularity in scheduling. For instance, if the cycle time is 20ms, you might divide it into 20 slots of 1ms each.

```
| Slot 1 | Slot 2 | Slot 3 | ... | Slot 20 |
|--------|--------|--------|-----|---------|
| Task A | Task A | Task B | ... | Task C  |
```

**Illustrative Pseudo-code:**

```c
// Global variables
int current_slot = 0;
const int CYCLE_TIME = 20; // milliseconds
const int SLOT_DURATION = 1; // milliseconds
const int NUM_SLOTS = CYCLE_TIME / SLOT_DURATION;

// Task execution time requirements (simplified)
int task_a_exec_time_ms = 2;
int task_b_exec_time_ms = 3;
int task_c_exec_time_ms = 5;

// Predefined cyclic schedule (example mapping slots to tasks)
// Assuming task A runs for 2ms, B for 3ms, C for 5ms
// And we have 1ms slots.
// Slot mapping could be:
// Task A: Slots 0, 1, 4, 5, 8, 9, 12, 13, 16, 17 (total 10 slots = 10ms for 20ms period)
// Task B: Slots 2, 3, 6, 7 (total 4 slots = 4ms, but needs 3ms - might be 2, 3, 6 or similar)
// Task C: Slots 10, 11, 14, 15, 18, 19 (total 6 slots, but needs 5ms - might be 10, 11, 14, 15, 18)
// This requires careful planning based on total cycle time and task execution.

// Let's simplify the schedule for clarity:
// Task A: runs at start of cycle, then every few slots
// Task B: runs after A, for its duration
// Task C: runs after B, for its duration

// A more concrete schedule mapping slots to tasks (e.g., 20ms cycle, 1ms slots)
// Slot 0: Task A (1ms)
// Slot 1: Task A (1ms) -> Task A completes (2ms)
// Slot 2: Task B (1ms)
// Slot 3: Task B (1ms)
// Slot 4: Task B (1ms) -> Task B completes (3ms)
// Slot 5: Task C (1ms)
// Slot 6: Task C (1ms)
// Slot 7: Task C (1ms)
// Slot 8: Task C (1ms)
// Slot 9: Task C (1ms) -> Task C completes (5ms)
// Slot 10: Idle
// Slot 11: Idle
// Slot 12: Task A (1ms)
// Slot 13: Task A (1ms) -> Task A completes (2ms)
// ... and so on.

// Timer interrupt handler
void timer_interrupt_handler() {
    // Get the task scheduled for the current_slot
    Task next_task = get_task_for_slot(current_slot);

    if (next_task != NO_TASK) {
        // Execute the task
        execute_task(next_task);
    } else {
        // Execute idle task or do nothing
        execute_idle_task();
    }

    // Move to the next slot
    current_slot = (current_slot + 1) % NUM_SLOTS;

    // Re-arm the timer for the next slot duration
    re_arm_timer(SLOT_DURATION);
}

// Main loop (initialization)
void main() {
    initialize_system();
    configure_timer(CYCLE_TIME); // Or SLOT_DURATION
    start_scheduler();
}
```

---

## 4. Advantages and Disadvantages of Cyclic Scheduling

### Advantages:

*   **Simplicity:** Easy to understand, implement, and verify.
*   **Predictability:** Guarantees that tasks execute at regular intervals, reducing uncertainty.
*   **Deterministic Behavior:** The system's execution path is fully predictable, making it easier to analyze timing properties.
*   **Low Overhead:** Avoids the complex context switching and scheduling overhead associated with dynamic priority systems.
*   **Good for Fixed-Rate Control:** Ideal for systems where periodic sampling and control actions are paramount.
*   **Bounded Jitter:** By carefully designing the slots, jitter can be minimized.

### Disadvantages:

*   **Inflexibility:** Cannot easily accommodate sporadic or aperiodic events that do not fit the predefined schedule. Handling such events requires special mechanisms.
*   **Underutilization of CPU:** If tasks have varying execution times or do not perfectly fill the allocated slots, the CPU can be underutilized.
*   **Complexity in Schedule Design:** For systems with many tasks, complex periods, and tight deadlines, designing an optimal cyclic schedule can be challenging. This is known as the **scheduling problem**.
*   **Sensitivity to Execution Time Overruns:** If a task takes longer than its allocated slot, it can disrupt the schedule for subsequent tasks and potentially miss deadlines.
*   **No Dynamic Priority Handling:** Cannot adapt to changing system conditions by dynamically adjusting task priorities.

---

## 5. Illustrating Cyclic Scheduling with Examples

### Example 1: Industrial Robot Arm Control

*   **Task 1: Read Joint Encoders:** Period = 5ms, WCET = 1ms
*   **Task 2: Inverse Kinematics Calculation:** Period = 5ms, WCET = 2ms
*   **Task 3: Control Loop Execution:** Period = 5ms, WCET = 3ms
*   **Task 4: Actuator Commands:** Period = 10ms, WCET = 1ms

**Cycle Time:** 10ms (LCM of 5ms and 10ms is 10ms).
**Slots:** Let's use 1ms slots. Total 10 slots.

**Cyclic Schedule (example mapping):**

| Slot (ms) | Task | Duration (ms) | Notes |
| :-------- | :--- | :------------ | :---- |
| 0         | Task 1 | 1             | Read Encoders |
| 1         | Task 2 | 1             | Inverse Kinematics |
| 2         | Task 2 | 1             | Inverse Kinematics |
| 3         | Task 3 | 1             | Control Loop |
| 4         | Task 3 | 1             | Control Loop |
| 5         | Task 3 | 1             | Control Loop |
| 6         | Task 1 | 1             | Read Encoders |
| 7         | Task 2 | 1             | Inverse Kinematics |
| 8         | Task 4 | 1             | Actuator Cmds |
| 9         | Idle | 1             | Can be used for background tasks or logging |

**Analysis:**
*   Task 1 (5ms period, 1ms WCET) runs in slots 0 and 6. Total 2ms of execution over 10ms cycle. This meets its period.
*   Task 2 (5ms period, 2ms WCET) runs in slots 1, 2, and 7. Total 3ms of execution over 10ms cycle. Meets its period.
*   Task 3 (5ms period, 3ms WCET) runs in slots 3, 4, and 5. Total 3ms of execution over 10ms cycle. Meets its period.
*   Task 4 (10ms period, 1ms WCET) runs in slot 8. Total 1ms of execution over 10ms cycle. Meets its period.

The total execution time in this 10ms cycle is 1 + 2 + 3 + 1 = 7ms. This leaves 3ms of idle time.

---

## 6. Time Triggered Executive (TTE) and Event Triggered Executive (ETE) within Cyclic Scheduling

While cyclic scheduling inherently implies a time-triggered approach (tasks are executed based on a pre-determined time schedule), it can be combined with or contrasted with event-triggered concepts.

### Time-Triggered Executive (TTE) as a Core Concept:

In a pure Time-Triggered system, **all events are sensed at fixed periodic intervals**, and actions are executed based on these periodic samples. Cyclic scheduling is a prime example of a TTE. The executive *triggers* tasks based on time.

**Characteristics of TTE:**

*   **Schedule-driven:** The entire system behavior is dictated by a global, pre-calculated schedule.
*   **Predictability:** High degree of predictability and determinism.
*   **Suitability:** Best for systems where the state of the world can be effectively represented by periodic sampling.

### Event-Triggered Executive (ETE) and its Relation to Cyclic Scheduling:

An Event-Triggered Executive (ETE) focuses on executing tasks in response to specific events, regardless of a fixed time schedule. Tasks are triggered by the occurrence of an event (e.g., a sensor reading crossing a threshold, a message arrival).

**How ETE relates to Cyclic Scheduling (often a hybrid approach):**

Cyclic scheduling can be augmented to handle events, but it fundamentally remains time-driven.

*   **Periodic Sampling within Cyclic Schedule:** A cyclic executive can be designed to periodically *check* for events. For example, within a slot allocated to "Sensor Monitoring," the task might read the sensor and then check if a threshold has been crossed. If it has, it might signal an event handler or a higher-priority task.
*   **Sporadic Tasks within a Cyclic Framework:** To handle aperiodic or sporadic events, a cyclic executive might reserve certain slots for "background processing" or "event handling." When a sporadic event occurs, a mechanism can queue it, and it will be serviced when the executive reaches the appropriate reserved slot.
*   **Hybrid Architectures:** More complex real-time operating systems (RTOS) might combine elements of both TTE and ETE. A common pattern is a **Time-Triggered Cyclic Executive** that has mechanisms to manage a limited number of **Event-Triggered Tasks** (often with periodic checks or background execution).

**Example of Hybrid:**

Imagine a braking system. The core cyclic schedule handles engine control, dashboard updates, etc.
*   **Cyclic Task:** "Wheel Speed Sensor Reading" (period 10ms, exec 0.5ms).
*   **Event Trigger:** If the "Wheel Speed Sensor Reading" task detects a rapid deceleration (an event), it triggers an "ABS Activation" routine.

In this scenario, the ABS Activation might:
*   Be a higher-priority task that preempts the current slot (if the RTOS supports preemption within the cyclic framework).
*   Be scheduled into a dedicated "Event Handling" slot that appears frequently in the cycle.

**Key Distinction:**

The core difference is the *primary trigger*. In cyclic scheduling (TTE), the trigger is **time**. In ETE, the trigger is an **event**. While cyclic scheduling can *detect* events, the execution of the *cyclic executive itself* is driven by the clock.

---

## Practice Questions and Exercises

**Question 1:** Define cyclic scheduling and explain its fundamental principle.

**Question 2:** What are the key characteristics of real-time systems that make cyclic scheduling a suitable choice?

**Question 3:** Describe the main components of a cyclic executive.

**Question 4:** List two advantages and two disadvantages of using cyclic scheduling.

**Question 5:** Consider a system with the following tasks:
    *   Task P: Period = 50ms, WCET = 10ms
    *   Task Q: Period = 100ms, WCET = 20ms
    *   Task R: Period = 200ms, WCET = 30ms

    If you were to design a cyclic schedule with a cycle time of 100ms and 1ms time slots, how many slots would be allocated to each task, assuming you want to meet their periods and minimize idle time?

**Question 6:** How does a cyclic executive typically handle the occurrence of a sporadic (aperiodic) event?

---

## Answers to Practice Questions

**Answer 1:**
Cyclic scheduling is a static-priority scheduling algorithm where tasks are executed in a predefined, repetitive sequence over a fixed time interval (the cycle time). Its fundamental principle is to divide the system's time into fixed slots and assign tasks to these slots in a repeating order, ensuring predictable task execution.

**Answer 2:**
Systems suitable for cyclic scheduling typically have:
*   Predictable and periodic workloads.
*   Strict timing requirements (deadlines).
*   Low jitter requirements.
*   Well-defined (or estimable) task execution times.
*   A need for simplicity and determinism.

**Answer 3:**
The main components of a cyclic executive are:
*   **Hardware Timer:** Generates periodic interrupts to mark scheduling slot boundaries.
*   **Scheduler/Dispatcher:** Determines which task to execute next based on the pre-defined schedule.
*   **Task Control Blocks (TCBs):** Data structures holding task information.
*   **Task Code:** The actual executable routines for each task.

**Answer 4:**
**Advantages:**
*   Simplicity and ease of implementation.
*   High predictability and deterministic behavior.
*   Low scheduling overhead.
**Disadvantages:**
*   Inflexibility in handling sporadic/aperiodic events.
*   Potential for CPU underutilization if not perfectly balanced.
*   Sensitivity to execution time overruns.

**Answer 5:**
*   **Cycle Time:** 100ms
*   **Slot Duration:** 1ms
*   **Total Slots in Cycle:** 100

*   **Task P:** Period = 50ms, WCET = 10ms.
    *   It needs to run twice within a 100ms cycle (at 50ms intervals).
    *   Total execution time needed per cycle = 10ms.
    *   Allocation: 10 slots (10ms). This means Task P would run for 10ms within the first 50ms, and again for 10ms within the second 50ms. For example, slots 0-9 and 50-59.

*   **Task Q:** Period = 100ms, WCET = 20ms.
    *   It needs to run once within a 100ms cycle.
    *   Total execution time needed per cycle = 20ms.
    *   Allocation: 20 slots (20ms). For example, slots 10-19 and 60-69.

*   **Task R:** Period = 200ms, WCET = 30ms.
    *   It needs to run once within a 100ms cycle (but its actual period is 200ms, so it needs 30ms of execution within every 100ms if we want to fit it). This is an important detail. If the *system* cycle is 100ms, we need to ensure that tasks with longer periods are still scheduled sufficiently. In a strict 100ms cycle, we might schedule it for 30ms.
    *   Total execution time needed per cycle = 30ms.
    *   Allocation: 30 slots (30ms). For example, slots 20-29, 70-79, and potentially some within the second half of the cycle if its "effective" period in this shorter system cycle is considered. A more accurate way would be to consider its execution over 200ms, but within a 100ms frame, it needs 30ms.

**Total allocated slots:** 10 (P) + 20 (Q) + 30 (R) = 60 slots.
This leaves 100 - 60 = 40 slots for idle time or other background activities.

**Answer 6:**
A cyclic executive can handle sporadic events by:
1.  **Periodic Checking:** A cyclic task can periodically check for the occurrence of sporadic events (e.g., by polling a flag or status register).
2.  **Reserved Slots:** The cyclic schedule can include dedicated "background" or "event handling" slots where queued sporadic tasks can be executed.
3.  **Preemption (if supported):** In more advanced systems, a sporadic event might trigger a higher-priority task that can preempt the currently executing task within the cyclic schedule, provided the underlying RTOS supports preemptive scheduling and the cyclic executive is designed to handle it. However, pure cyclic scheduling often lacks preemption.

---

## Important Points to Remember

*   **Predictability is Key:** Cyclic scheduling excels at providing predictable execution, making it ideal for safety-critical and hard real-time systems.
*   **Schedule Design is Crucial:** The complexity of designing a valid cyclic schedule increases with the number of tasks, their periods, and their execution times. Tools for schedule analysis are often used.
*   **WCET is Vital:** Accurate estimation of the Worst-Case Execution Time (WCET) for each task is paramount to avoid overruns that can destabilize the schedule.
*   **Sporadic Events are a Challenge:** Handling aperiodic or sporadic events efficiently requires careful design within or alongside the cyclic framework.
*   **Not Always Optimal:** For systems with highly dynamic workloads or unpredictable events, other scheduling algorithms like Rate Monotonic (RM) or Earliest Deadline First (EDF) might be more appropriate.

---
This concludes Module 2 on Cyclic Scheduling. Next, we will explore other real-time scheduling techniques.
