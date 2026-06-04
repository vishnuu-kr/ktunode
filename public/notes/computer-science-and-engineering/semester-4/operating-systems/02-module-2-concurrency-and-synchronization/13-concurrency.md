---
title: "Concurrency:"
subject: "OPERATING SYSTEMS"
module: "Module 2: Concurrency and Synchronization  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8afaf"
status: "completed"
scrapedAt: "2026-05-20T16:14:10.303Z"
---
# Operating Systems: Module 2 - Concurrency and Synchronization: Concurrency

## Learning Outcomes:

*   Understand the concept of concurrency in operating systems.
*   Identify the challenges and benefits of concurrent execution.
*   Distinguish between different concurrency models (processes, threads).
*   Explain the potential issues related to shared resources and race conditions.
*   Understand the concept of mutual exclusion and its importance in concurrent systems.
*   Recognize the different types of dependencies that can exist among concurrent operations.

## 1. Introduction to Concurrency

*   **Definition:** Concurrency refers to the ability of an operating system to manage multiple tasks or threads seemingly simultaneously.  It doesn't necessarily mean they are *truly* running at the same instant, but rather that their execution is interleaved.  This gives the illusion of simultaneous execution.
*   **Key Idea:** The goal of concurrency is to improve resource utilization and system responsiveness.

    *   **Example:**  Imagine a web server handling multiple client requests. Without concurrency, the server would have to process each request sequentially, leading to delays for subsequent clients. With concurrency, the server can start processing the next request while waiting for the previous one to complete (e.g., waiting for data from a database).

*   **Contrast with Parallelism:**  Concurrency is often confused with parallelism.
    *   **Concurrency:**  Deals with managing multiple tasks *at the same time*, even if they are not executed simultaneously.  It's about structure and composition of a program, dealing with independent execution streams.
    *   **Parallelism:** Deals with executing multiple tasks *simultaneously*, typically on multiple processors or cores.  It's about performance and speedup through actual simultaneous execution.
    *   **Relationship:**  Parallelism is a *form* of concurrency, but not all concurrency is parallelism.  A single-core processor can achieve concurrency, but not parallelism.

## 2. Benefits of Concurrency

*   **Increased Resource Utilization:**  Allows the CPU to switch to another task while one task is waiting (e.g., for I/O). This maximizes CPU usage.
*   **Improved Responsiveness:**  Allows the system to respond to user input or external events more quickly.  Even if a long-running task is executing, the system can still handle other requests.
*   **Better Program Structure:**  Can make programs easier to design and understand by breaking them down into smaller, independent concurrent tasks.
*   **Enhanced Throughput:**  The number of tasks completed in a given time period is often increased due to efficient resource utilization.

## 3. Challenges of Concurrency

*   **Complexity:** Concurrent programs are more complex to design, debug, and test than sequential programs.  Dealing with shared resources and potential race conditions adds significant complexity.
*   **Synchronization Issues:**  Ensuring that concurrent tasks access shared resources correctly and avoid data corruption requires careful synchronization mechanisms.
*   **Race Conditions:** Occur when the outcome of a program depends on the unpredictable order in which multiple processes/threads access shared data.
*   **Deadlock:** A situation where two or more processes/threads are blocked indefinitely, waiting for each other to release resources.
*   **Starvation:** A situation where a process/thread is repeatedly denied access to a resource, even though it is available.
*   **Increased Overhead:**  Context switching between processes/threads introduces overhead.  Synchronization mechanisms also add overhead.

## 4. Concurrency Models: Processes vs. Threads

*   **Processes:**
    *   **Definition:** An independent execution environment with its own address space, resources, and system context.
    *   **Advantages:**  Provides strong isolation between tasks, preventing one process from interfering with another.
    *   **Disadvantages:**  Creating and switching between processes is relatively expensive in terms of resources and time. Communication between processes is more complex (using IPC - Inter-Process Communication mechanisms like pipes, message queues, shared memory).
    *   **Example:** Running multiple applications simultaneously (e.g., a web browser, a text editor, and a music player).  Each application runs in its own process.

*   **Threads:**
    *   **Definition:** A lightweight execution unit within a process, sharing the same address space and resources of the process.
    *   **Advantages:**  Creating and switching between threads is much faster than processes.  Communication between threads is simpler because they share the same memory.
    *   **Disadvantages:**  Threads share the same address space, so a bug in one thread can potentially corrupt the entire process.  Requires careful synchronization to avoid race conditions.
    *   **Example:**  A web server handling multiple client requests using threads. All threads belong to the same web server process, sharing resources like network connections and database connections.

*   **Key Differences:**

    | Feature          | Process                    | Thread                      |
    |-------------------|-----------------------------|-----------------------------|
    | Address Space    | Separate                  | Shared (within process)     |
    | Resource Usage   | Higher                    | Lower                       |
    | Context Switching | Slower                    | Faster                      |
    | Isolation        | Strong                    | Weaker                      |
    | Communication    | More Complex (IPC)        | Simpler (Shared Memory)    |

## 5. Shared Resources and Race Conditions

*   **Shared Resource:** Any resource (e.g., memory, files, I/O devices) that can be accessed by multiple concurrent tasks (processes or threads).
*   **Race Condition:**  Occurs when the outcome of a program depends on the unpredictable order in which multiple processes/threads access shared data.  The final result is determined by which thread "wins" the race to access and modify the shared resource.
*   **Example:** Consider two threads incrementing a shared counter variable:

    ```c++
    int counter = 0;

    // Thread 1:
    counter = counter + 1;

    // Thread 2:
    counter = counter + 1;
    ```

    Without proper synchronization, the following scenario could occur:

    1.  Thread 1 reads the value of `counter` (0).
    2.  Thread 2 reads the value of `counter` (0).
    3.  Thread 1 increments its local copy (0 + 1 = 1) and writes the value back to `counter`.
    4.  Thread 2 increments its local copy (0 + 1 = 1) and writes the value back to `counter`.

    The final value of `counter` is 1, instead of the expected 2. This is a race condition.

## 6. Mutual Exclusion

*   **Definition:** A mechanism that ensures that only one process/thread can access a shared resource at any given time.  This prevents race conditions and data corruption.
*   **Implementation:** Mutual exclusion is typically implemented using synchronization primitives such as:
    *   **Mutexes (Mutual Exclusion Locks):** A lock that can be held by only one thread at a time.  Other threads attempting to acquire the lock will be blocked until the lock is released.
    *   **Semaphores:** A signaling mechanism that can be used to control access to a shared resource.  Semaphores can be used to implement mutual exclusion, as well as other synchronization patterns.
    *   **Monitors:** A higher-level synchronization construct that encapsulates shared data and the operations that can be performed on it.  Monitors provide built-in mutual exclusion.

*   **Example (Using a Mutex):**

    ```c++
    #include <iostream>
    #include <thread>
    #include <mutex>

    int counter = 0;
    std::mutex counter_mutex;  // Declare a mutex

    void increment_counter() {
        for (int i = 0; i < 100000; ++i) {
            counter_mutex.lock();  // Acquire the lock
            counter++;
            counter_mutex.unlock();  // Release the lock
        }
    }

    int main() {
        std::thread t1(increment_counter);
        std::thread t2(increment_counter);

        t1.join();
        t2.join();

        std::cout << "Counter value: " << counter << std::endl; // Expected: 200000
        return 0;
    }
    ```

    In this example, the `counter_mutex` ensures that only one thread can access the `counter` variable at a time, preventing the race condition.

## 7. Dependencies Among Concurrent Operations

*   **Data Dependency:**  An operation depends on the result of a previous operation.  For example, an operation that reads data that was written by another operation.

    ```
    Thread 1:
      x = 10;  // Write to x
    Thread 2:
      y = x + 5; // Read x; depends on Thread 1's write
    ```

*   **Control Dependency:** The execution of an operation depends on the outcome of a previous operation (e.g., a conditional branch).

    ```
    Thread 1:
      if (flag) {  // The condition depends on the value of 'flag'
        // Execute some code
      }
    Thread 2:
      flag = true; // Changing value of flag
    ```

*   **Resource Dependency:**  Two or more operations require the same resource.  One operation must wait for the resource to become available before it can proceed.  This leads to the need for mutual exclusion.

*   **Synchronization Considerations:** Understanding dependencies is crucial for designing correct and efficient concurrent programs. Synchronization mechanisms (like mutexes, semaphores, condition variables) are used to enforce the necessary ordering and mutual exclusion.

## Practice Questions/Exercises:

1.  **Define concurrency and parallelism. What is the key difference between them?**

    *   **Answer:** Concurrency is the ability to manage multiple tasks seemingly simultaneously. Parallelism is the actual simultaneous execution of multiple tasks. The key difference is that concurrency can occur on a single-core processor (interleaving tasks), while parallelism requires multiple processors/cores.

2.  **Explain the benefits and challenges of using threads compared to processes.**

    *   **Answer:**
        *   **Benefits of Threads:** Faster creation and context switching, simpler communication through shared memory, lower resource usage.
        *   **Challenges of Threads:**  Shared address space leads to potential data corruption from bugs in other threads, requires careful synchronization to avoid race conditions.
        *   **Processes have opposite characteristics:** Stronger isolation, more expensive to create/switch, more complex IPC.

3.  **What is a race condition, and how can it be prevented? Give a code example.**

    *   **Answer:** A race condition occurs when the outcome of a program depends on the unpredictable order in which multiple threads/processes access shared data.  It can be prevented by using mutual exclusion mechanisms (e.g., mutexes, semaphores) to ensure that only one thread/process can access the shared resource at a time.  See the mutex example in section 6.

4.  **Explain the concept of mutual exclusion.  Provide examples of synchronization primitives used to implement it.**

    *   **Answer:** Mutual exclusion is a mechanism to ensure that only one process/thread can access a shared resource at any given time, preventing data corruption and race conditions.  Synchronization primitives used to implement mutual exclusion include: mutexes, semaphores, and monitors.

5.  **Identify the type of dependency in the following code snippet:**

    ```c++
    // Thread 1:
    result = calculate_result(input);

    // Thread 2:
    display_result(result);
    ```

    *   **Answer:**  Data Dependency. Thread 2's `display_result` function depends on the `result` variable, which is calculated by Thread 1's `calculate_result` function. Thread 2 must wait for Thread 1 to complete its calculation before proceeding.

## Important Points to Remember:

*   Concurrency aims to improve resource utilization and responsiveness, but it introduces complexity.
*   Threads are lightweight and share memory, while processes are isolated and more resource-intensive.
*   Race conditions are a major problem in concurrent programming and must be prevented with proper synchronization.
*   Mutual exclusion is a fundamental concept for ensuring data integrity in concurrent systems.
*   Understanding data dependencies is crucial for correct concurrency design.
