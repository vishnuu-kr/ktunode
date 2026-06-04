---
title: "Inter-task Communication: Queues and Semaphores"
subject: "MICROCONTROLLERS"
module: "Module 4: IoT, Wireless Communication, and RTOS:"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b639"
status: "completed"
scrapedAt: "2026-05-20T16:48:52.660Z"
---
## MICROCONTROLLERS: Module 4 - IoT, Wireless Communication, and RTOS
### Topic: Inter-task Communication - Queues and Semaphores

**Description:** This module focuses on inter-task communication mechanisms within a Real-Time Operating System (RTOS), specifically queues and semaphores, essential for coordinating concurrent tasks in microcontroller-based IoT applications.

**Learning Outcomes:**

*   Understand the need for inter-task communication in RTOS.
*   Define and explain the concepts of queues and semaphores.
*   Describe the different types of semaphores (binary, counting, mutex).
*   Explain how queues and semaphores can be used for inter-task data exchange and synchronization.
*   Implement basic queue and semaphore operations using an RTOS API.
*   Identify the advantages and disadvantages of using queues and semaphores.
*   Apply queues and semaphores to solve common inter-task communication problems.

---

### 1. Introduction to Inter-task Communication

*   **Need for Inter-task Communication:**
    *   In an RTOS environment, multiple tasks execute concurrently.
    *   These tasks often need to share data, synchronize activities, and coordinate their execution.
    *   Inter-task communication (ITC) provides the mechanisms for these interactions.
    *   Without ITC, tasks would operate in isolation, limiting the complexity and efficiency of the system.

*   **Challenges Without ITC:**
    *   **Race Conditions:**  Multiple tasks accessing shared resources simultaneously can lead to unpredictable and incorrect results.
    *   **Data Corruption:** Shared data can be corrupted if access is not properly synchronized.
    *   **Deadlock:** Tasks can become blocked indefinitely, waiting for resources held by other tasks.
    *   **Inefficient Resource Utilization:** Resources may be unnecessarily held or contended for, reducing overall system throughput.

*   **Key Inter-task Communication Mechanisms:**
    *   **Queues:** Used for passing data between tasks in a FIFO (First-In, First-Out) manner.
    *   **Semaphores:** Used for signaling between tasks and controlling access to shared resources.
    *   Other less common mechanisms: Mailboxes, Signals/Events.

---

### 2. Queues

*   **Definition:** A queue is a data structure used for asynchronous communication between tasks. It acts as a buffer that stores data items sent by one or more tasks and retrieved by one or more other tasks.  Data is typically processed in FIFO (First-In, First-Out) order.

*   **Key Concepts:**
    *   **FIFO (First-In, First-Out):** The first data item added to the queue is the first data item removed.
    *   **Queue Size:**  The maximum number of data items the queue can hold.
    *   **Data Type:** The type of data items stored in the queue (e.g., integers, structures, pointers).
    *   **Send Operation (Enqueue):**  Adding a data item to the queue.  Can be blocking (waits until space is available) or non-blocking (returns immediately if full).
    *   **Receive Operation (Dequeue):**  Removing a data item from the queue.  Can be blocking (waits until an item is available) or non-blocking (returns immediately if empty).

*   **Queue Operations (Example RTOS API - FreeRTOS-like):**

    ```c
    // Create a queue.
    QueueHandle_t xQueueCreate( UBaseType_t uxQueueLength, UBaseType_t uxItemSize );

    // Send data to a queue.
    BaseType_t xQueueSend( QueueHandle_t xQueue, const void * pvItemToQueue, TickType_t xTicksToWait );

    // Send data to a queue from an interrupt service routine (ISR).
    BaseType_t xQueueSendFromISR( QueueHandle_t xQueue, const void *pvItemToQueue, BaseType_t *pxHigherPriorityTaskWoken );

    // Receive data from a queue.
    BaseType_t xQueueReceive( QueueHandle_t xQueue, void * pvBuffer, TickType_t xTicksToWait );

    // Check if a queue is empty.
    UBaseType_t uxQueueMessagesWaiting( const QueueHandle_t xQueue );
    ```

*   **Example Use Case:**
    *   **Data Logging:**  A sensor reading task sends data to a logging task via a queue.  The logging task writes the data to flash memory.
    *   **Command Processing:** A command processing task receives commands from a user interface task via a queue.

*   **Advantages:**
    *   **Asynchronous Communication:** Tasks don't need to wait for each other to be ready.
    *   **Buffering:** Handles temporary differences in processing speeds between tasks.
    *   **Decoupling:** Reduces dependencies between tasks.

*   **Disadvantages:**
    *   **Overhead:** Adds some overhead due to queue management.
    *   **Potential for Data Loss:** If the queue is full, new data may be lost (depending on send mode).
    *   **Synchronization Required:** Although queues buffer data, tasks still need to coordinate (e.g., prevent a reader from reading an empty queue or a writer from writing to a full queue).

*   **Example Code (Conceptual):**

    ```c
    #include <stdio.h>
    #include <stdlib.h>

    // Define queue handle
    typedef struct {
        int* data; //Array to hold the queue elements
        int head;  //Index of the front of the queue
        int tail;  //Index of the end of the queue
        int size;  //Maximum size of the queue
        int count; //Number of elements currently in the queue
    } Queue;

    // Initialize the queue
    Queue* createQueue(int size) {
        Queue* queue = (Queue*)malloc(sizeof(Queue));
        queue->data = (int*)malloc(size * sizeof(int));
        queue->head = 0;
        queue->tail = -1;
        queue->size = size;
        queue->count = 0;
        return queue;
    }

    // Function to check if the queue is empty
    int isEmpty(Queue* queue) {
        return queue->count == 0;
    }

    // Function to check if the queue is full
    int isFull(Queue* queue) {
        return queue->count == queue->size;
    }

    // Function to enqueue an element
    void enqueue(Queue* queue, int value) {
        if (isFull(queue)) {
            printf("Queue is full. Cannot enqueue element.\n");
            return;
        }
        queue->tail = (queue->tail + 1) % queue->size; //Increment tail and wrap around if necessary
        queue->data[queue->tail] = value;               //Store the value at the tail
        queue->count++;                                 //Increment the element count
        printf("Enqueued %d\n", value);
    }

    // Function to dequeue an element
    int dequeue(Queue* queue) {
        if (isEmpty(queue)) {
            printf("Queue is empty. Cannot dequeue element.\n");
            return -1;
        }
        int value = queue->data[queue->head];        //Get the value at the head
        queue->head = (queue->head + 1) % queue->size; //Increment head and wrap around if necessary
        queue->count--;                                 //Decrement the element count
        printf("Dequeued %d\n", value);
        return value;
    }

    int main() {
        Queue* myQueue = createQueue(5); // Create a queue that can hold 5 elements
        enqueue(myQueue, 10);
        enqueue(myQueue, 20);
        enqueue(myQueue, 30);
        dequeue(myQueue);
        dequeue(myQueue);
        enqueue(myQueue, 40);
        enqueue(myQueue, 50);
        enqueue(myQueue, 60);
        enqueue(myQueue, 70); // The queue is full, so this won't be enqueued

        return 0;
    }
    ```

---

### 3. Semaphores

*   **Definition:** A semaphore is a signaling mechanism used to control access to shared resources or to synchronize the execution of tasks.  It is essentially a counter that can be incremented (signaled) or decremented (waited on).

*   **Key Concepts:**
    *   **Counter:** An integer value representing the number of available resources or the state of a synchronization condition.
    *   **Wait (Decrement):** A task decrements the semaphore's counter. If the counter is zero, the task blocks until the counter becomes positive.  Also known as `take` or `pend` operation.
    *   **Signal (Increment):** A task increments the semaphore's counter.  This may unblock a waiting task. Also known as `give` or `post` operation.

*   **Types of Semaphores:**

    *   **Binary Semaphore:**
        *   Counter can only be 0 or 1.
        *   Used for mutual exclusion (protecting shared resources).  Acts as a lock.
        *   Used for signaling (indicating that an event has occurred).
        *   Similar to a mutex, but mutexes usually have ownership (only the task that took the mutex can release it), while binary semaphores can be released by a different task than the one that took it.
    *   **Counting Semaphore:**
        *   Counter can be any non-negative integer.
        *   Used to control access to a limited number of identical resources (e.g., a pool of buffers).
        *   The counter represents the number of available resources.
    *   **Mutex (Mutual Exclusion Semaphore):**
        *   A specialized binary semaphore with *ownership*.
        *   Only the task that takes (locks) the mutex can release (unlock) it.
        *   Prevents priority inversion (see below).
        *   Crucial for protecting shared data structures and hardware peripherals.

*   **Semaphore Operations (Example RTOS API - FreeRTOS-like):**

    ```c
    // Create a binary semaphore.
    SemaphoreHandle_t xSemaphoreCreateBinary( void );

    // Create a counting semaphore.
    SemaphoreHandle_t xSemaphoreCreateCounting( UBaseType_t uxMaxCount, UBaseType_t uxInitialCount );

    // Create a mutex.
    SemaphoreHandle_t xSemaphoreCreateMutex( void );

    // Take (wait) on a semaphore.
    BaseType_t xSemaphoreTake( SemaphoreHandle_t xSemaphore, TickType_t xTicksToWait );

    // Give (signal) a semaphore.
    BaseType_t xSemaphoreGive( SemaphoreHandle_t xSemaphore );

    // Give (signal) a semaphore from an ISR.
    BaseType_t xSemaphoreGiveFromISR( SemaphoreHandle_t xSemaphore, BaseType_t *pxHigherPriorityTaskWoken );
    ```

*   **Example Use Cases:**

    *   **Binary Semaphore:**
        *   **Protecting a UART:**  Multiple tasks may want to send data over the UART.  A binary semaphore can be used to ensure that only one task accesses the UART at a time.
        *   **Event Notification:** A task waits on a semaphore until an interrupt handler signals that an event has occurred (e.g., a button press).
    *   **Counting Semaphore:**
        *   **Managing a Buffer Pool:**  A counting semaphore can be used to track the number of available buffers in a memory pool. Tasks take a semaphore before using a buffer and give it back when they are done.
    *   **Mutex:**
        *   **Protecting a Global Variable:** Multiple tasks need to read and write to a global variable. A mutex ensures that access is exclusive, preventing race conditions.

*   **Advantages:**

    *   **Synchronization:** Provides a mechanism for tasks to coordinate their execution.
    *   **Resource Protection:** Prevents multiple tasks from accessing shared resources simultaneously.
    *   **Efficiency:**  Can be more efficient than busy-waiting.

*   **Disadvantages:**

    *   **Complexity:**  Can be more complex to use than queues.
    *   **Deadlock:**  Improper use can lead to deadlock (tasks waiting indefinitely for each other).
    *   **Priority Inversion:** A higher-priority task can be blocked indefinitely by a lower-priority task that holds a resource (solved by priority inheritance/ceiling protocols associated with mutexes).

*   **Priority Inversion:** A high priority task is blocked by a low priority task, which can then be preempted by a medium priority task.  This effectively makes the high priority task wait longer than the medium priority task. Mutexes, especially with priority inheritance, solve this issue.

*   **Deadlock:** Occurs when two or more tasks are blocked indefinitely, each waiting for the other to release a resource. This often happens when tasks acquire multiple resources in different orders.  Careful design and resource management are required to prevent deadlocks.

*   **Example Code (Conceptual Binary Semaphore):**

    ```c
    // Shared Resource (e.g., UART)
    static void UART_SendString(const char *str) {
        // Send the string over UART (implementation details omitted)
        printf("UART: %s\n", str);
    }

    // Task 1
    void Task1(void *pvParameters) {
        const char *message = "Hello from Task 1!";
        while (1) {
            // Try to take the semaphore.  Block for a maximum of 100ms.
            if (xSemaphoreTake(xUARTSemaphore, pdMS_TO_TICKS(100)) == pdTRUE) {
                UART_SendString(message);
                xSemaphoreGive(xUARTSemaphore); // Release the semaphore
            } else {
                printf("Task 1: Could not acquire UART semaphore.\n");
            }
            vTaskDelay(pdMS_TO_TICKS(500)); // Delay for 500ms
        }
    }

    // Task 2
    void Task2(void *pvParameters) {
        const char *message = "Hello from Task 2!";
        while (1) {
            // Try to take the semaphore.  Block for a maximum of 100ms.
            if (xSemaphoreTake(xUARTSemaphore, pdMS_TO_TICKS(100)) == pdTRUE) {
                UART_SendString(message);
                xSemaphoreGive(xUARTSemaphore); // Release the semaphore
            } else {
                printf("Task 2: Could not acquire UART semaphore.\n");
            }
            vTaskDelay(pdMS_TO_TICKS(750)); // Delay for 750ms
        }
    }

    // In main() or task initialization:
    // xUARTSemaphore = xSemaphoreCreateBinary();
    // if (xUARTSemaphore != NULL) {
    //   xSemaphoreGive(xUARTSemaphore);  // Initial semaphore state: available
    // }
    // xTaskCreate(Task1, "Task1", 128, NULL, 2, NULL);
    // xTaskCreate(Task2, "Task2", 128, NULL, 2, NULL);
    // vTaskStartScheduler();
    ```

---

### 4. Choosing Between Queues and Semaphores

*   **Queues:**
    *   Use when you need to transfer data between tasks.
    *   Use when you need to buffer data to handle speed differences between tasks.
    *   Use when the order of data processing is important (FIFO).
*   **Semaphores:**
    *   Use when you need to protect shared resources from simultaneous access.
    *   Use when you need to synchronize the execution of tasks.
    *   Use when you need to signal events between tasks.
    *   **Mutex:**  Specifically for protecting shared data and resources where ownership and priority inversion are concerns.

*   **Combined Use:**  Queues and semaphores can be used together. For example, a task might wait on a semaphore to be signaled that data is available in a queue.

---

### 5. Practice Questions/Exercises

1.  **Explain the difference between a binary semaphore and a mutex.  When would you choose one over the other?**
    *   **Answer:** Both binary semaphores and mutexes provide mutual exclusion. A mutex has *ownership*, meaning only the task that took the mutex can release it. Mutexes are also typically used with priority inheritance or priority ceiling protocols to prevent priority inversion. Choose a mutex when protecting shared data and priority inversion is a concern. Choose a binary semaphore for simple signaling or when ownership isn't required.

2.  **Write code to create a counting semaphore that allows a maximum of 3 tasks to access a shared resource concurrently.  Also, write the code for a task to take and release the semaphore.**
    *   **Answer:**

    ```c
    SemaphoreHandle_t xResourceSemaphore;

    // Create the semaphore (in initialization).
    xResourceSemaphore = xSemaphoreCreateCounting(3, 3); // Max count = 3, Initial count = 3

    // Task code:
    void ResourceAccessingTask(void *pvParameters) {
        while (1) {
            // Wait for the semaphore to be available.
            if (xSemaphoreTake(xResourceSemaphore, portMAX_DELAY) == pdTRUE) {
                // Access the shared resource.
                // ... Code to use the shared resource ...

                // Release the semaphore.
                xSemaphoreGive(xResourceSemaphore);
            } else {
                // Handle timeout or error.
            }
            vTaskDelay(pdMS_TO_TICKS(100));
        }
    }
    ```

3.  **A sensor task generates data at a rate faster than a processing task can consume it. How can a queue be used to handle this situation?  What are the potential problems and how can they be mitigated?**
    *   **Answer:** A queue can be used as a buffer between the sensor task and the processing task. The sensor task enqueues data into the queue, and the processing task dequeues data from the queue.
    *   **Potential Problems:**
        *   **Queue Overflow:** If the sensor task is *much* faster than the processing task, the queue could fill up, leading to data loss.
        *   **Mitigation:**
            *   **Increase Queue Size:** Make the queue large enough to handle temporary bursts of data.
            *   **Non-Blocking Send:** Use a non-blocking `xQueueSend` (or equivalent) in the sensor task. If the queue is full, the sensor task can choose to drop the data or try again later.  Implement logic for handling dropped data (e.g., log the error).
            *   **Flow Control:** Implement a mechanism where the processing task signals the sensor task to slow down if the queue is getting full (more complex).

4.  **Explain what is priority inversion. How Mutex helps to avoid priority inversion ?**
    *   **Answer:** Priority Inversion occurs when a high priority task is blocked by a lower priority task.  This can happen if the lower priority task holds a resource (e.g., a semaphore) that the high priority task needs. The high priority task is then effectively delayed while the lower priority task runs.  If a medium priority task becomes ready while the low priority task holds the resource, it can preempt the low priority task, further delaying the high priority task.
    *   **How Mutex helps:** Mutexes (especially those using priority inheritance or priority ceiling protocols) can prevent priority inversion. With priority inheritance, the low-priority task temporarily inherits the priority of the highest-priority task waiting for the mutex. This prevents medium-priority tasks from preempting the low-priority task, allowing it to quickly release the mutex and unblock the high-priority task.  Priority Ceiling sets the priority of the mutex to the highest possible priority of any task that might access the resource.

5.  **What is Deadlock ? Give a scenario and explain how to solve it?**
    *   **Answer:** Deadlock occurs when two or more tasks are blocked indefinitely, each waiting for the other to release a resource.
    *   **Scenario:**
    Task A needs resources X and Y. It acquires resource X.
    Task B needs resources X and Y. It acquires resource Y.
    Task A tries to acquire resource Y but is blocked because Task B holds it.
    Task B tries to acquire resource X but is blocked because Task A holds it.
    Now, both tasks are blocked, waiting for each other to release the resources.

    *   **How to solve it:**
        *   **Resource Ordering:** Define a strict order in which resources must be acquired. If all tasks follow this order, deadlocks can be avoided. In the example above, if both tasks always acquire resource X before resource Y, deadlock will not occur.
        *   **Timeout:** Set a timeout when trying to acquire a resource. If a task cannot acquire a resource within a certain time, it releases any resources it already holds and retries later. This breaks the circular wait condition.
        *   **Deadlock Detection and Recovery:** Implement a mechanism to detect deadlocks (e.g., by monitoring resource allocation). If a deadlock is detected, the system can take corrective action, such as aborting one of the tasks or pre-empting a resource.
        *   **Resource Hierarchy:** Organize resources into a hierarchy. A task can only request a resource at a higher level in the hierarchy if it has already released all resources at lower levels.

---

### 6. Important Points to Remember

*   **RTOS Awareness:**  All queue and semaphore operations must be performed within the context of a task or interrupt service routine (ISR).
*   **Blocking vs. Non-Blocking:** Carefully consider whether to use blocking or non-blocking operations based on the application requirements. Blocking operations can lead to task delays, while non-blocking operations require more complex error handling.
*   **Error Handling:**  Always check the return values of queue and semaphore API calls to handle potential errors (e.g., timeout, queue full, invalid handle).
*   **Interrupt Safety:** Use ISR-safe versions of the queue and semaphore API calls (e.g., `xQueueSendFromISR`, `xSemaphoreGiveFromISR`) when communicating from an ISR.
*   **Resource Management:** Always release resources (give semaphores) when they are no longer needed to avoid deadlocks and resource starvation.
*   **Deadlock Prevention:** Design the system carefully to avoid circular dependencies and deadlocks.
*   **Priority Inversion Mitigation:** If using shared resources with varying task priorities, use mutexes with priority inheritance/ceiling protocols to prevent priority inversion.
*   **Understand the RTOS API:**  Become familiar with the specific queue and semaphore functions provided by your chosen RTOS.

These comprehensive notes should provide a solid foundation for understanding inter-task communication using queues and semaphores in a microcontroller RTOS environment.  Remember to practice implementing these concepts in code to solidify your understanding. Good luck!
