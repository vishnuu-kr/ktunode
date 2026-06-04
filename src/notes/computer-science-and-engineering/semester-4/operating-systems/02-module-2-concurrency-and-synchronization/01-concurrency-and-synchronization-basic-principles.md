---
title: "Concurrency and Synchronization  - Basic principles"
subject: "OPERATING SYSTEMS"
module: "Module 2: Concurrency and Synchronization  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8afa3"
status: "completed"
scrapedAt: "2026-05-20T16:14:01.712Z"
---
# OPERATING SYSTEMS - Module 2: Concurrency and Synchronization - Basic Principles

## Introduction

This module delves into the fundamental principles of concurrency and synchronization within operating systems.  Concurrency allows multiple processes or threads to progress seemingly simultaneously, even if the underlying hardware only has a single processor.  Synchronization mechanisms are crucial for managing shared resources and preventing data corruption when multiple concurrent entities access them.  Understanding these principles is critical for designing efficient, reliable, and robust operating systems and applications.

## Learning Outcomes

By the end of this section, you should be able to:

*   Define concurrency and parallelism and differentiate between them.
*   Explain the reasons for using concurrency.
*   Identify the challenges associated with concurrency, including race conditions, critical sections, and deadlocks.
*   Define critical sections and explain the importance of mutual exclusion.
*   Describe different approaches to achieving mutual exclusion (e.g., disabling interrupts, using locks).
*   Understand the concept of atomicity and its importance in synchronization.
*   Explain the role of synchronization mechanisms in preventing data corruption and ensuring data consistency.

## 1. Concurrency and Parallelism

*   **Concurrency:**
    *   **Definition:** Concurrency refers to the ability of an operating system to manage multiple tasks *at the same time*.  It doesn't necessarily mean that these tasks are executing *simultaneously* at the same instant.  Instead, they may take turns using the CPU.  This gives the illusion of simultaneous execution.
    *   **Example:** Imagine you are baking cookies and simultaneously checking your email.  You might switch between stirring the batter and reading an email.  You are not doing both *at the exact same time*, but you are managing both tasks *at the same time*.
    *   **Key Feature:**  Involves interleaving the execution of multiple tasks.
*   **Parallelism:**
    *   **Definition:** Parallelism refers to the actual *simultaneous* execution of multiple tasks.  This requires multiple processing units (e.g., multiple cores in a CPU or multiple CPUs in a system).
    *   **Example:** Imagine several bakers each working on a separate batch of cookies *at the exact same time*.  Each baker has their own oven and ingredients.
    *   **Key Feature:** Involves the true simultaneous execution of multiple tasks.
*   **Difference:**
    *   Concurrency is about *managing* multiple tasks; parallelism is about *executing* multiple tasks simultaneously.
    *   Concurrency can exist without parallelism, but parallelism always implies concurrency.  You can interleave tasks on a single CPU (concurrency), but you need multiple CPUs to run tasks at the exact same time (parallelism).
    *   Parallelism is a form of concurrency, but concurrency isn't always parallelism.

## 2. Reasons for Using Concurrency

*   **Resource Utilization:**  While one process is waiting for I/O (e.g., reading from disk, network), the CPU can be used by another process. This maximizes CPU utilization.
    *   **Example:** A web server can handle multiple client requests concurrently.  While one request is waiting for data from the database, another request can be processed.
*   **Responsiveness:**  Allowing a program to respond to user input while performing other tasks in the background.  This prevents the program from freezing or becoming unresponsive.
    *   **Example:** A word processor can allow you to type while it is simultaneously performing spell checking in the background.
*   **Fairness:**  Giving each process a fair share of the CPU time, preventing one process from monopolizing the resource.
*   **Modular Design:**  Breaking down a large task into smaller, independent concurrent modules can simplify development and maintenance.
*   **Performance Improvement (with Parallelism):** On multi-core systems, concurrency allows programs to be parallelized, leading to significant performance improvements.

## 3. Challenges of Concurrency

*   **Race Conditions:**
    *   **Definition:** A race condition occurs when multiple processes or threads access and manipulate shared data concurrently, and the final outcome depends on the specific order in which the accesses take place.  This can lead to unpredictable and incorrect results.
    *   **Example:** Two threads incrementing a shared counter variable. If they both read the current value, increment it, and then write the new value back, the final value might be incorrect if the operations are interleaved.  For example, if the counter is initially 5:
        *   Thread 1 reads 5.
        *   Thread 2 reads 5.
        *   Thread 1 increments to 6.
        *   Thread 2 increments to 6.
        *   Thread 1 writes 6.
        *   Thread 2 writes 6.  (The counter should be 7, but is 6).
*   **Critical Sections:**
    *   **Definition:** A critical section is a section of code that accesses shared resources (e.g., shared variables, data structures, files).  Only one process or thread should be allowed to execute inside its critical section at any given time to prevent race conditions.
*   **Deadlocks:**
    *   **Definition:** A deadlock occurs when two or more processes or threads are blocked indefinitely, waiting for each other to release the resources that they need.
    *   **Example:** Thread A holds resource X and needs resource Y. Thread B holds resource Y and needs resource X.  Neither thread can proceed.
*   **Starvation:**
    *   **Definition:** A situation where a process is perpetually denied access to a resource it needs to make progress. This can occur even when deadlocks are avoided.

## 4. Critical Sections and Mutual Exclusion

*   **Critical Section Revisited:** As defined above, a critical section is a segment of code that accesses shared resources.
*   **Mutual Exclusion:**
    *   **Definition:** Mutual exclusion is a property that ensures that only one process or thread can execute within its critical section at any given time.  This prevents race conditions and data corruption.
    *   **Importance:**  It's essential for ensuring data integrity and consistency when multiple concurrent entities access shared resources.
    *   **Achieving Mutual Exclusion:** Requires the implementation of synchronization mechanisms.

## 5. Approaches to Achieving Mutual Exclusion

*   **Disabling Interrupts:**
    *   **Mechanism:**  A process disables interrupts before entering its critical section and re-enables them after exiting. This prevents the CPU from switching to another process while the critical section is being executed.
    *   **Pros:** Simple to implement.
    *   **Cons:**
        *   **Only applicable in kernel mode:** User-level processes cannot disable interrupts.
        *   **Can cause system-wide delays:** Interrupts are essential for handling I/O and other important events. Disabling them for extended periods can make the system unresponsive.
        *   **Doesn't work on multiprocessor systems:** Disabling interrupts on one processor doesn't prevent other processors from accessing the shared resources.
*   **Locks (Mutexes):**
    *   **Mechanism:** A lock (also called a mutex) is a synchronization primitive that provides mutual exclusion. A process must acquire the lock before entering its critical section and release the lock after exiting.
    *   **Operations:**
        *   `acquire()` (or `lock()`): Attempts to acquire the lock. If the lock is already held by another process, the calling process will block until the lock becomes available.
        *   `release()` (or `unlock()`): Releases the lock, allowing another waiting process to acquire it.
    *   **Example (using pseudocode):**

    ```
    lock l; // Declare a lock variable

    // Process/Thread 1
    acquire(l);  // Acquire the lock
    // Critical Section: Access shared resource
    // ...
    release(l);  // Release the lock

    // Process/Thread 2
    acquire(l);  // Acquire the lock
    // Critical Section: Access shared resource
    // ...
    release(l);  // Release the lock
    ```
    *   **Pros:** More flexible than disabling interrupts.  Can be used in both kernel and user mode. Works on multiprocessor systems.
    *   **Cons:** More complex to implement correctly. Can lead to deadlocks if not used carefully.
*   **Semaphores:**
    *   **Definition:** Semaphores are a more general synchronization tool than mutexes.  They are integer variables that can be accessed only through two atomic operations: `wait()` (also called `P`) and `signal()` (also called `V`).
        *   `wait(S)`: Decrements the semaphore value `S`.  If `S` becomes negative, the process executing `wait()` is blocked until another process executes `signal(S)`.
        *   `signal(S)`: Increments the semaphore value `S`.  If there are any processes blocked on the semaphore, one of them is unblocked.
    *   **Types:**
        *   **Binary Semaphore:**  Semaphore value is either 0 or 1.  Equivalent to a mutex.
        *   **Counting Semaphore:**  Semaphore value can be any non-negative integer.  Used to control access to a limited number of resources.
*   **Other Techniques:** Other techniques include monitors, condition variables, and atomic variables.

## 6. Atomicity

*   **Definition:** Atomicity refers to the property of an operation being indivisible or uninterruptible. An atomic operation completes in its entirety without being interrupted by any other operation.
*   **Importance:**
    *   **Ensuring Consistency:** Atomic operations guarantee that data remains consistent even when multiple processes or threads are accessing it concurrently.
    *   **Preventing Race Conditions:** By ensuring that operations are atomic, we can prevent race conditions and data corruption.
*   **Examples:**
    *   **Test-and-Set:**  An atomic instruction that sets a memory location to a specific value and returns the old value.  Used to implement spin locks.
    *   **Compare-and-Swap (CAS):** An atomic instruction that compares the value of a memory location with an expected value, and if they match, it replaces the memory location with a new value. Used in lock-free data structures.
    *   **Atomic Variables (e.g., in C++11):**  Variables that guarantee atomic read, write, and increment/decrement operations.

## 7. Synchronization Mechanisms and Data Consistency

*   **Role of Synchronization:** Synchronization mechanisms (e.g., locks, semaphores) are used to coordinate the access of multiple processes or threads to shared resources, ensuring data consistency and preventing race conditions.
*   **Data Consistency:** Maintaining the integrity of data by ensuring that it is accurate, up-to-date, and reliable. Synchronization mechanisms help to enforce constraints on data access to prevent inconsistencies.
*   **Example:** Consider a bank account with a balance. If two threads try to withdraw money from the account simultaneously without proper synchronization, the balance might become incorrect. Synchronization mechanisms ensure that only one thread can access and modify the balance at a time, preventing inconsistencies.

## Important Points to Remember

*   Concurrency is about managing multiple tasks; parallelism is about executing multiple tasks simultaneously.
*   Race conditions can lead to unpredictable and incorrect results when multiple processes access shared data concurrently.
*   Critical sections must be protected by mutual exclusion to prevent race conditions.
*   Locks (mutexes) are a common mechanism for achieving mutual exclusion.
*   Atomicity ensures that operations are indivisible and uninterruptible, preventing data corruption.
*   Synchronization mechanisms are essential for maintaining data consistency in concurrent systems.
*   Deadlocks are a serious problem that can prevent processes from making progress.

## Practice Questions and Exercises

**Question 1:**  Explain the difference between concurrency and parallelism. Provide an example of each.

**Answer:** Concurrency is the ability to manage multiple tasks at the same time, often by interleaving their execution. For example, a single-core processor switching between running a web browser and a text editor provides concurrency. Parallelism is the simultaneous execution of multiple tasks, requiring multiple processing units. For example, running a simulation on a multi-core CPU where different parts of the simulation are computed on different cores simultaneously provides parallelism.

**Question 2:**  What is a race condition?  How can it be avoided?

**Answer:** A race condition occurs when multiple processes or threads access and manipulate shared data concurrently, and the final outcome depends on the specific order in which the accesses take place, leading to unpredictable results. Race conditions can be avoided by using synchronization mechanisms such as locks, semaphores, or atomic operations to ensure mutual exclusion and data consistency.

**Question 3:**  Describe what a critical section is and why mutual exclusion is necessary for critical sections.

**Answer:** A critical section is a section of code that accesses shared resources. Mutual exclusion is necessary to ensure that only one process or thread can execute inside its critical section at any given time. This prevents race conditions and data corruption by ensuring exclusive access to shared resources.

**Question 4:**  Explain the concept of atomicity and its importance in concurrency.

**Answer:** Atomicity refers to the property of an operation being indivisible or uninterruptible. It's important in concurrency because it guarantees that an operation completes in its entirety without being interrupted by other operations, preventing data corruption and ensuring data consistency when multiple processes or threads are accessing shared data.

**Question 5:**  What is a deadlock?  Give a simple example.

**Answer:** A deadlock occurs when two or more processes or threads are blocked indefinitely, waiting for each other to release the resources that they need.  Example: Thread A holds resource X and needs resource Y. Thread B holds resource Y and needs resource X.  Neither thread can proceed.

**Question 6:** Implement a simple mutex lock using pseudocode with acquire() and release() methods.  Explain how it ensures mutual exclusion.

**Answer:**

```pseudocode
boolean lock_available = true;

function acquire(lock):
  while (not lock_available):
    // Wait (spin or block)
  lock_available = false;

function release(lock):
  lock_available = true;
```

Explanation: The `acquire()` function waits until the `lock_available` flag is true (meaning the lock is free). Once it's free, it sets the flag to false, claiming the lock. The `release()` function sets the flag back to true, releasing the lock. This ensures mutual exclusion because only one thread can successfully execute `acquire()` at a time. If another thread tries to acquire the lock while it's held, it will be forced to wait (spin or block) until the lock is released.

This provides a foundation for understanding more complex concurrency and synchronization topics in operating systems. Remember to consider the tradeoffs between different synchronization mechanisms and choose the most appropriate one for your specific needs.
