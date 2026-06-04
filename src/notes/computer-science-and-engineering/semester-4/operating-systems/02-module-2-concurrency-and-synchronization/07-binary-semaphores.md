---
title: "Binary Semaphores"
subject: "OPERATING SYSTEMS"
module: "Module 2: Concurrency and Synchronization  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8afa9"
status: "completed"
scrapedAt: "2026-05-20T16:14:06.016Z"
---
## Operating Systems: Module 2 - Concurrency and Synchronization: Binary Semaphores

**Learning Outcomes:**

*   Understand the concept of semaphores and their role in concurrency control.
*   Define what a binary semaphore is and differentiate it from a counting semaphore.
*   Explain the implementation and usage of binary semaphores.
*   Analyze the advantages and disadvantages of using binary semaphores.
*   Apply binary semaphores to solve classical synchronization problems like mutual exclusion.
*   Understand potential pitfalls and solutions associated with binary semaphore usage (e.g., deadlock).

---

**1. Introduction to Concurrency and Synchronization**

*   **Concurrency:**  Multiple processes or threads executing seemingly simultaneously, sharing resources.  This doesn't necessarily mean *parallelism* (running at the same time on different CPUs) but rather interleaved execution, giving the *illusion* of parallelism.
*   **Synchronization:** Mechanisms to coordinate the execution of concurrent processes or threads to prevent data inconsistencies and ensure proper resource access.  Critical because concurrent access to shared resources can lead to race conditions.
*   **Race Condition:**  The outcome of a program depends on the unpredictable order in which multiple threads execute, potentially leading to unexpected and incorrect results.
*   **Critical Section:**  A code segment that accesses shared resources. Synchronization mechanisms aim to protect critical sections.
*   **Mutual Exclusion:**  Ensuring that only one process or thread can access a critical section at any given time.  A fundamental requirement for correct concurrent programming.

**2. Semaphores: A Foundation for Synchronization**

*   **Definition:** A semaphore is an integer variable used to control access to shared resources. It acts as a signaling mechanism.
*   **Key Operations:**
    *   **`wait()` or `P()` (Proberen/Test):**  Decrements the semaphore value. If the value becomes negative, the process blocks until the semaphore value becomes non-negative.
    *   **`signal()` or `V()` (Verhogen/Increment):** Increments the semaphore value.  If there are any processes blocked on the semaphore, one of them is unblocked.
*   **Purpose:** To enforce mutual exclusion and coordinate resource access among concurrent processes.
*   **Types of Semaphores:**
    *   **Binary Semaphore:**  Can only have values 0 or 1.  Often used for mutual exclusion.
    *   **Counting Semaphore:**  Can have any non-negative integer value.  Used to control access to a limited number of resources (resource counting).

**3. Binary Semaphores:  Detailed Examination**

*   **Definition:** A binary semaphore is a synchronization primitive that takes on only two values: 0 and 1. It's essentially a lock.
    *   **1:**  Indicates the resource is available (unlocked).
    *   **0:**  Indicates the resource is unavailable (locked).
*   **Initialization:** A binary semaphore is typically initialized to 1, representing the resource's initial availability.
*   **Implementation:** The `wait()` and `signal()` operations are implemented as follows:

    ```
    // Binary Semaphore Structure (Conceptual)
    struct BinarySemaphore {
      int value; // either 0 or 1
      queue waitingQueue; // Queue of processes blocked on this semaphore
    };

    // wait() or P() operation
    wait(BinarySemaphore *S) {
      disableInterrupts(); // Prevent race conditions on the semaphore itself

      while (S->value == 0) {
        // Resource is unavailable, block the current process
        addProcessToWaitingQueue(S->waitingQueue, currentProcess);
        blockCurrentProcess(); // Put the process in a waiting state
      }

      S->value = 0;  // Acquire the lock (resource)

      enableInterrupts(); // Restore interrupts
    }

    // signal() or V() operation
    signal(BinarySemaphore *S) {
      disableInterrupts();

      S->value = 1;  // Release the lock (resource)

      if (!isEmpty(S->waitingQueue)) {
        // Wake up a process from the waiting queue
        Process *p = removeProcessFromWaitingQueue(S->waitingQueue);
        unblockProcess(p);
      }

      enableInterrupts();
    }
    ```

    *   **`disableInterrupts()`/`enableInterrupts()`:**  These operations (or equivalent mechanisms like disabling preemption) are *crucial* to prevent race conditions within the `wait()` and `signal()` functions themselves. Without them, two processes could simultaneously try to acquire the semaphore and both succeed, violating mutual exclusion.  This is often handled by the OS kernel.
    *   **`addProcessToWaitingQueue()` and `removeProcessFromWaitingQueue()`:** These functions handle the blocking and unblocking of processes, typically managed by the operating system's scheduler.

**4. Usage and Application: Mutual Exclusion**

*   The primary use of binary semaphores is to enforce mutual exclusion.  Processes surround their critical sections with `wait()` and `signal()` calls:

    ```
    BinarySemaphore mutex = 1; // Initialize the semaphore to 1 (unlocked)

    // Process i:
    wait(&mutex);  // Acquire the lock; wait until mutex is 1, then set it to 0

    // Critical Section: Access shared resources
    // ...

    signal(&mutex); // Release the lock; set mutex to 1, potentially waking up another process
    ```

**5. Advantages of Binary Semaphores:**

*   **Simplicity:** Relatively easy to understand and implement.
*   **Enforcement of Mutual Exclusion:**  Guarantees that only one process accesses the critical section at a time.
*   **Widely Supported:** Implemented in most operating systems and programming languages.

**6. Disadvantages of Binary Semaphores:**

*   **Busy Waiting (Spinlocks):**  In some implementations, processes might repeatedly check the semaphore value (spinning) while waiting, consuming CPU cycles unnecessarily. This is addressed by blocking processes instead of spinning.
*   **Deadlock:**  A situation where two or more processes are blocked indefinitely, waiting for each other to release resources. Binary semaphores, if not used carefully, can contribute to deadlocks.
*   **Priority Inversion:**  A lower-priority process holds a semaphore needed by a higher-priority process, delaying the higher-priority process's execution. This can be mitigated using priority inheritance or priority ceiling protocols.
*   **Complexity with Multiple Resources:** Managing access to multiple resources with binary semaphores can become complex and error-prone.

**7. Deadlock and Solutions**

*   **Deadlock Condition:**  Occurs when two or more processes are blocked indefinitely, each waiting for a resource held by another.
*   **Example:**

    Process A:
    ```
    wait(&mutex1); // Acquire mutex1
    wait(&mutex2); // Attempt to acquire mutex2
    // ...
    signal(&mutex2);
    signal(&mutex1);
    ```

    Process B:
    ```
    wait(&mutex2); // Acquire mutex2
    wait(&mutex1); // Attempt to acquire mutex1
    // ...
    signal(&mutex1);
    signal(&mutex2);
    ```

    If A acquires `mutex1` and B acquires `mutex2`, both will be blocked indefinitely, waiting for the other's resource.
*   **Deadlock Prevention Strategies:**
    *   **Resource Ordering:**  Establish a global order for acquiring resources. Processes must acquire resources in the defined order. This prevents circular dependencies. In the example above, if both processes *always* acquired `mutex1` *before* `mutex2`, deadlock would be avoided.
    *   **Hold and Wait Prevention:**  Ensure that a process doesn't hold any resources when requesting a new one.  A process must release all its resources before requesting additional ones.
    *   **No Preemption:** If a process is holding a resource and requests another that cannot be immediately allocated, the process must release the held resource.
    *   **Circular Wait Prevention:** Impose a total ordering of all resource types, and require that each process requests resources in an increasing order of enumeration.
*   **Deadlock Avoidance Strategies:**
    *   **Banker's Algorithm:**  The system knows in advance the complete resource request and release sequence. It makes allocation decisions based on whether a *safe sequence* exists (a sequence of processes where each process can complete its execution even if it requests its maximum resource needs).
*   **Deadlock Detection and Recovery:**
    *   Allow deadlocks to occur, then detect them and recover.  Detection involves examining the resource allocation graph. Recovery might involve aborting processes or preempting resources.

**8.  Comparison with Counting Semaphores**

| Feature           | Binary Semaphore               | Counting Semaphore                |
|-------------------|---------------------------------|------------------------------------|
| Value Range      | 0 or 1                         | Any non-negative integer          |
| Purpose          | Mutual exclusion               | Resource counting and synchronization |
| Typical Use      | Protecting a single resource    | Controlling access to multiple instances of a resource |
| Complexity       | Simpler                        | More complex                        |

**9.  Important Points to Remember**

*   Always initialize semaphores correctly (binary semaphores to 1).
*   Ensure `wait()` and `signal()` operations are *atomic* (indivisible) to prevent race conditions on the semaphore itself.  This is usually handled by the OS kernel.
*   Be aware of potential deadlocks and implement appropriate prevention or avoidance strategies.
*   Match each `wait()` call with a corresponding `signal()` call to avoid permanently locking resources.  (Consider using RAII techniques in languages like C++ to automatically release the semaphore.)
*   Carefully consider the order in which resources are acquired to prevent deadlocks.
*   Avoid busy-waiting implementations when possible; use blocking implementations instead.

**Practice Questions/Exercises:**

1.  **Mutual Exclusion Example:**  Write pseudocode for two processes that use a binary semaphore to protect a shared variable.  The processes should increment and decrement the variable.
    *   **Answer:**

        ```
        // Shared Variable:
        int shared_variable = 0;

        // Binary Semaphore:
        BinarySemaphore mutex = 1;  // Initialize to 1

        // Process A:
        wait(&mutex);
        shared_variable++;
        print("Process A: shared_variable = ", shared_variable);
        signal(&mutex);

        // Process B:
        wait(&mutex);
        shared_variable--;
        print("Process B: shared_variable = ", shared_variable);
        signal(&mutex);
        ```

2.  **Deadlock Scenario:**  Describe a scenario involving three processes and two binary semaphores that could lead to a deadlock.  Explain how resource ordering could prevent this deadlock.
    *   **Answer:**  Process A acquires mutex1, Process B acquires mutex2, and Process C needs both mutex1 and mutex2.  If Process C tries to acquire mutex1 while Process A holds it, Process C blocks.  Then, if Process A tries to acquire mutex2 (held by Process B) before releasing mutex1, a deadlock occurs because Process A is waiting for Process B (indirectly through Process C), and Process B is waiting (indirectly through Process C) for Process A.
    *   **Solution:** Enforce a resource order: all processes must acquire mutex1 before mutex2. This prevents the circular wait condition.

3.  **Binary vs. Counting Semaphore:**  When would you choose a counting semaphore over a binary semaphore? Give an example.
    *   **Answer:** You'd choose a counting semaphore when you need to control access to a *limited number of instances* of a resource.  A binary semaphore is sufficient for controlling access to a *single* resource.  Example:  A print server with three printers. A counting semaphore initialized to 3 could be used to allow only three processes to print concurrently.

4.  **Implementation Challenge:**  Assume you have a very basic operating system with no built-in semaphore support.  You only have atomic test-and-set (TAS) instruction (returns the old value and sets the memory location to 1).  Implement `wait()` and `signal()` for a binary semaphore using TAS. Note this is a busy-waiting implementation.

    *   **Answer:**

        ```c
        typedef struct {
            int value; // 0 or 1
        } BinarySemaphore;

        void wait(BinarySemaphore *sem) {
            while (test_and_set(&sem->value) == 1) {
                // Spin; continue looping until we acquire the lock
            }
            // sem->value is now 1, and we've successfully acquired the lock, now set to zero
            sem->value = 0;
        }

        void signal(BinarySemaphore *sem) {
            sem->value = 1; // Release the lock
        }

        int test_and_set(int *target) {
          int oldValue = *target;
          *target = 1;
          return oldValue;
        }
        ```

        *   **Explanation:** The `test_and_set` function atomically sets the semaphore value to 1 *and* returns the original value. The `wait()` function spins (busy-waits) until `test_and_set` returns 0 (meaning the semaphore was previously unlocked). The important thing is `test_and_set` instruction makes the acquire operation atomic and free from races. After acquiring the lock the wait() operation will set semaphore's value to 0.

These notes and examples should provide a solid understanding of binary semaphores within the context of concurrency and synchronization in operating systems. Remember to practice implementing and reasoning about semaphore-based solutions to truly grasp the concepts.
