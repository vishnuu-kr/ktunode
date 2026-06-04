---
title: "Task Creation and Management:  Writing simple tasks, Task states and transitions"
subject: "REAL TIME OPERATING SYSTEM"
module: "Module 1: Introduction to Real"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff3dc"
status: "completed"
scrapedAt: "2026-05-23T18:08:58.212Z"
---
# Real-Time Operating Systems (RTOS) - Module 1: Introduction to Real

## Topic: Task Creation and Management: Writing Simple Tasks, Task States and Transitions

### Learning Outcomes:

*   Understand the concept of a task in an RTOS.
*   Learn how to create simple tasks within an RTOS.
*   Comprehend the different states a task can exist in.
*   Analyze the transitions between these task states.
*   Gain practical knowledge of implementing basic task management.

---

### 1. Introduction to Tasks in RTOS

**Key Concept:** In a Real-Time Operating System (RTOS), a **task** is the fundamental unit of execution. It represents an independent thread of control that performs a specific function within the system. Tasks are often referred to as threads, processes, or jobs, depending on the RTOS.

**Why Tasks?**
*   **Concurrency:** Tasks allow an embedded system to perform multiple operations seemingly simultaneously, essential for real-time responsiveness.
*   **Modularity:** Complex systems can be broken down into smaller, manageable tasks, improving code organization and maintainability.
*   **Resource Management:** RTOS helps manage shared resources among tasks, preventing conflicts and ensuring orderly access.

**Alignment with Course Outcomes:**
*   **CO1 (K1, K2):** Understanding the fundamental concept of a task is crucial for grasping the characteristics of real-time systems.

**Reference:**
*   **Cooling, J. (2018).** Chapter 3: "The Task Management Subsystem" emphasizes the role of tasks as the primary executable entities in an RTOS.
*   **Mall, R. (2007).** Chapter 4: "Process Management" discusses processes (tasks) as fundamental units of execution.

---

### 2. Writing Simple Tasks

**Key Concept:** A task in an RTOS is typically implemented as a function that contains an infinite loop. This loop continuously executes the task's logic, checks for events, and performs its designated operations.

**Structure of a Simple Task:**

```c
// Assume an RTOS API for task creation and management

// Function that implements the task's logic
void my_task_function(void *pvParameters) {
    // Optional: Task-specific initialization
    // ...

    // Infinite loop for continuous execution
    while (1) {
        // Task's primary logic goes here
        // Examples: read sensors, update displays, control actuators

        // Example: Toggle an LED every 500ms
        // HAL_GPIO_TogglePin(LED_GPIO_Port, LED_Pin);
        // vTaskDelay(pdMS_TO_TICKS(500)); // RTOS specific delay function

        // Check for events or messages if needed
        // ...
    }

    // Optional: Task cleanup (rarely reached in typical RTOS tasks)
    // vTaskDelete(NULL); // RTOS specific function to delete the task
}

// --- In the main application ---
void main_application_setup() {
    // ... other initialization ...

    // Create the task
    xTaskHandle myTaskHandle; // Handle to the task
    BaseType_t xStatus = xTaskCreate(
        my_task_function,     // Pointer to the task function
        "MyTask",             // Name of the task (for debugging)
        configMINIMAL_STACK_SIZE, // Stack size for the task
        NULL,                 // Parameter to pass to the task
        tskIDLE_PRIORITY + 1, // Priority of the task
        &myTaskHandle         // Pointer to store the task handle
    );

    if (xStatus != pdPASS) {
        // Task creation failed
        // Handle error
    }

    // ... start the RTOS scheduler ...
    vTaskStartScheduler();

    // This point should not be reached unless scheduler fails
}
```

**Key Components in Task Creation:**

*   **Task Function:** The C function that encapsulates the task's behavior.
*   **Task Name:** A descriptive string for debugging and identification.
*   **Stack Size:** The memory allocated for the task's execution context (local variables, function call stack).
*   **Task Parameters:** Data that can be passed to the task upon creation.
*   **Task Priority:** Determines the task's importance and execution order relative to other tasks.
*   **Task Handle:** A pointer to a variable that will store the RTOS's internal representation of the task, allowing for future manipulation.

**Alignment with Course Outcomes:**
*   **CO4 (K3, K4):** Writing simple tasks directly utilizes RTOS services for task creation.
*   **CO5 (K3, K4):** This is the foundational step for developing practical real-time applications.

**Reference:**
*   **Valvano, J. W. (2017).** Chapter 4: "Task Creation" provides practical examples and explanations of task creation mechanisms on ARM Cortex-M microcontrollers, often using FreeRTOS.
*   **Zhu, Y. (2017).** Chapter 5: "Task Management" illustrates task creation with examples in C for ARM Cortex-M.

**Important Point to Remember:** The task function typically contains an infinite `while(1)` loop. This is because tasks are designed to run continuously throughout the lifetime of the embedded system.

---

### 3. Task States

**Key Concept:** Tasks within an RTOS exist in different **states**, reflecting their current status and ability to execute. These states are managed by the RTOS scheduler. The common states are:

*   **Running (or Ready):** A task is in the Running state when it is currently executing on the CPU. In some RTOS implementations, "Ready" and "Running" might be distinguished, where "Ready" means the task is eligible to run but waiting for its turn on the CPU, and "Running" means it's actively using the CPU.
*   **Ready:** A task is in the Ready state when it is not currently executing but is eligible to be executed by the CPU. It is waiting for the scheduler to assign the CPU to it.
*   **Blocked (or Waiting):** A task is in the Blocked state when it is temporarily unable to proceed. This typically occurs when the task is waiting for an event to occur (e.g., data from a sensor, a signal from another task, a timer to expire, or the release of a resource).
*   **Suspended:** A task is in the Suspended state when it has been explicitly put into an inactive state by another task or by itself, and it will not resume execution until explicitly un-suspended. This state is less common than the others and often implies a deliberate pause.

**Diagrammatic Representation:**

```
          +-----------------+
          |     Created     |  (Implicit state before existence)
          +-----------------+
                   |
                   v
          +-----------------+
          |      Ready      |  (Eligible to run, waiting for CPU)
          +-----------------+
                   |       ^
                   |       | (Scheduler assigns CPU)
                   v       |
          +-----------------+
          |     Running     |  (Currently executing on CPU)
          +-----------------+
                   |       ^
                   |       | (Scheduler preempts or task yields)
                   v       |
          +-----------------+
          |     Blocked     |  (Waiting for an event or resource)
          +-----------------+
                   |       ^
                   |       | (Event occurs or resource released)
                   v       |
          +-----------------+
          |    Suspended    |  (Temporarily inactive, needs explicit un-suspend)
          +-----------------+
                   ^
                   | (Task suspends itself or is suspended by another task)

```

**Alignment with Course Outcomes:**
*   **CO1 (K1, K2):** Understanding task states is fundamental to how real-time systems manage concurrent activities.
*   **CO4 (K3, K4):** RTOS services are used to transition tasks between these states.

**Reference:**
*   **Cooling, J. (2018).** Chapter 3: "Task states, task states transitions" provides a detailed explanation of these states and their interrelationships.
*   **Kopetz, H. (2011).** Chapter 2: "Task Management" discusses task states as part of system concurrency.

---

### 4. Task State Transitions

**Key Concept:** Tasks transition between states based on events, scheduler decisions, and explicit API calls. Understanding these transitions is critical for predicting system behavior and debugging.

**Common Transitions:**

1.  **Ready to Running:**
    *   **Trigger:** The RTOS scheduler selects the task to run. This happens when the CPU becomes available, and the task is the highest-priority task in the Ready state.
    *   **Example:** Task A (priority 10) is running. A higher-priority task B (priority 20) becomes ready (e.g., due to an interrupt). The scheduler immediately preempts Task A and switches to Task B, transitioning Task B from Ready to Running.

2.  **Running to Ready:**
    *   **Trigger:**
        *   **Time Slicing (for Round-Robin):** If a task has been running for its allotted time slice and a higher-priority task is not available, it might be moved back to the Ready state to allow another task of the same priority to run.
        *   **Preemption:** A higher-priority task becomes ready. The currently running task is preempted and returned to the Ready state.
        *   **Yielding:** The task voluntarily releases the CPU (e.g., by calling `vTaskYield()` in FreeRTOS).
    *   **Example:** Task A is running. A timer interrupt occurs, and the handler makes Task C (higher priority than A) ready. Task A is preempted and moves to the Ready state.

3.  **Running to Blocked:**
    *   **Trigger:** The task makes a blocking call to wait for an event or resource.
    *   **Example:** A task needs to read data from a serial port. It calls a function like `xQueueReceive()` or `vTaskDelay()`. If the data is not yet available or the delay period has not expired, the task enters the Blocked state.

4.  **Blocked to Ready:**
    *   **Trigger:** The event or condition that the task was waiting for occurs.
    *   **Example:** A task is blocked waiting for a semaphore. Another task signals the semaphore. The blocked task is moved from the Blocked state to the Ready state.

5.  **Running to Suspended:**
    *   **Trigger:** The task explicitly calls a suspension API (e.g., `vTaskSuspend()` in FreeRTOS) on itself or another task.
    *   **Example:** A task is performing a critical operation and wants to temporarily halt another task to ensure data integrity. It calls `vTaskSuspend(otherTaskHandle)`.

6.  **Suspended to Ready:**
    *   **Trigger:** Another task explicitly calls an un-suspension API (e.g., `vTaskResume()` in FreeRTOS).
    *   **Example:** The task that suspended another task now wants that task to resume. It calls `vTaskResume(suspendedTaskHandle)`.

**Alignment with Course Outcomes:**
*   **CO1 (K1, K2):** Understanding these transitions is key to analyzing the dynamic behavior of real-time systems.
*   **CO2 (K4):** Analyzing these transitions is essential for understanding scheduling algorithms and their impact.
*   **CO4 (K3, K4):** RTOS APIs facilitate these transitions.

**Reference:**
*   **Mall, R. (2007).** Chapter 4: "Process State Transitions" elaborates on the fundamental transitions of processes (tasks).
*   **Krishna, C. M., & Shin, K. G. (2010).** Chapter 5: "Process Management" describes the life cycle and transitions of processes in an operating system context.

**Important Point to Remember:** The "Blocked" state is crucial for efficient CPU utilization. Instead of wasting CPU cycles on a task that cannot proceed, the RTOS can schedule another ready task.

---

### 5. Practice Questions and Exercises

**Question 1:**
What is the primary unit of execution in an RTOS, and what is its purpose?

**Answer:** The primary unit of execution is a **task**. Its purpose is to provide concurrency, modularity, and manage independent threads of control within an embedded system.

**Question 2:**
Describe the three main states a task can typically be in, and explain the condition for each state.

**Answer:**
*   **Running:** The task is currently executing on the CPU.
*   **Ready:** The task is eligible to run but is waiting for the CPU to be allocated to it by the scheduler.
*   **Blocked:** The task is temporarily unable to proceed because it is waiting for an event, a resource, or a delay to expire.

**Question 3:**
When would a task transition from the "Running" state to the "Ready" state? Provide two distinct scenarios.

**Answer:**
1.  **Preemption:** A higher-priority task becomes ready, causing the currently running (lower-priority) task to be preempted and returned to the Ready state.
2.  **Task Yielding:** The running task voluntarily releases the CPU by calling a yield function, moving itself back to the Ready state.

**Question 4:**
Consider a system with two tasks: `SensorReader` (priority 5) and `DisplayUpdater` (priority 10). `SensorReader` periodically reads data from a sensor and puts it into a queue. `DisplayUpdater` waits for data in the queue to update a display.

If `SensorReader` has just finished reading data and put it into the queue, and the CPU is currently idle, what state transitions occur? (Assume `SensorReader` is the only task running).

**Answer:**
1.  `SensorReader` (Running) finishes its work and yields or its time slice ends, transitioning to **Ready**.
2.  Since `DisplayUpdater` (priority 10) is higher than `SensorReader` (priority 5), and the CPU is now available, `DisplayUpdater` transitions from **Ready** to **Running**. (Assuming `DisplayUpdater` was already in the Ready state, waiting for data).
3.  `DisplayUpdater` attempts to read from the queue. If data is available, it processes it. If data is *not* available (e.g., `SensorReader` hasn't put anything yet, or the queue is empty), `DisplayUpdater` will transition from **Running** to **Blocked**.

**Question 5 (Practical Exercise - Conceptual):**
Imagine you are developing a system to control a robot arm. You decide to create two tasks:
*   `ArmController` (high priority): Responsible for precise movements and path planning.
*   `StatusMonitor` (low priority): Responsible for reading sensor feedback and updating an LED status indicator.

Describe what would happen if `ArmController` needs to wait for a motor to reach a specific position before proceeding.

**Answer:**
1.  `ArmController` (Running) would execute its path planning.
2.  When it needs to wait for the motor position, it would call a blocking function (e.g., `wait_for_motor_position()`).
3.  `ArmController` would then transition from **Running** to **Blocked**.
4.  Since `StatusMonitor` is the next highest priority task that is Ready, it would transition from **Ready** to **Running** and update the LED.
5.  When the motor reaches the desired position, an interrupt or a completion flag would be set. This would cause `ArmController` to transition from **Blocked** to **Ready**.
6.  As `ArmController` has a higher priority than `StatusMonitor`, the RTOS scheduler would preempt `StatusMonitor` (transitioning it back to **Ready**) and `ArmController` would transition from **Ready** to **Running** to continue its arm control logic.

---

### 6. Important Points to Remember

*   **Tasks are the heart of RTOS:** They enable concurrent execution of different system functions.
*   **Task functions must be infinite loops:** They are designed to run continuously.
*   **States are dynamic:** Tasks move between states based on scheduler decisions and task actions.
*   **Blocking is important:** It prevents busy-waiting and allows other tasks to run.
*   **Priorities are key:** They determine which task gets the CPU when multiple tasks are ready.
*   **RTOS APIs:** All task creation and state management are done through specific RTOS functions.

---

This concludes Module 1, Topic: Task Creation and Management. Understanding these fundamental concepts is crucial for proceeding with more advanced RTOS topics.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
