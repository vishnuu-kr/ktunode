---
title: "Building Spin Locks with Test-And-Set"
subject: "OPERATING SYSTEMS"
module: "Module 2: Concurrency and Synchronization  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8afa5"
status: "completed"
scrapedAt: "2026-05-20T16:14:03.160Z"
---
## OPERATING SYSTEMS - Module 2: Concurrency and Synchronization - Building Spin Locks with Test-And-Set

**Learning Outcomes:**

*   Understand the need for synchronization primitives in concurrent systems.
*   Define spin locks and their purpose.
*   Explain the Test-and-Set (TAS) instruction and its role in implementing spin locks.
*   Implement a spin lock using the Test-and-Set instruction.
*   Analyze the advantages and disadvantages of spin locks.
*   Identify potential issues with spin locks (e.g., starvation, fairness).

**1. Introduction to Concurrency and Synchronization**

*   **Concurrency:**  The ability of a system to execute multiple tasks or threads "at the same time," either truly simultaneously (on a multi-processor system) or by rapidly switching between tasks (on a single-processor system).
*   **Synchronization:** A mechanism that ensures the correct execution of concurrent tasks by coordinating access to shared resources and preventing race conditions. Race conditions occur when multiple threads access and modify shared data concurrently, and the final outcome depends on the unpredictable order of execution.
*   **Need for Synchronization:** Concurrent access to shared resources without proper synchronization can lead to:
    *   **Data corruption:** Inconsistent or incorrect data due to interleaved updates.
    *   **Race conditions:**  Unpredictable program behavior depending on the timing of threads.
    *   **Deadlocks:**  A situation where two or more threads are blocked indefinitely, waiting for each other to release resources.
*   **Critical Section:** A section of code where a thread accesses shared resources.  Synchronization mechanisms ensure that only one thread can be in its critical section for a particular resource at any given time.
*   **Mutual Exclusion:**  The property that only one thread can access a shared resource at any given time, preventing simultaneous access and data corruption.  Synchronization mechanisms provide mutual exclusion.

**2. Spin Locks: A Synchronization Primitive**

*   **Definition:** A spin lock is a type of lock that causes a thread trying to acquire the lock to *spin* in a loop, repeatedly checking if the lock is available.  The thread remains in this loop until the lock becomes free.  It's a busy-waiting synchronization mechanism.
*   **Purpose:** To provide mutual exclusion for critical sections, ensuring that only one thread can access the shared resource at a time.
*   **How it Works:**
    1.  A shared variable (often an integer or a boolean) represents the lock's state: locked or unlocked.
    2.  A thread attempting to acquire the lock repeatedly checks the lock's state.
    3.  If the lock is unlocked, the thread atomically acquires the lock (changes the lock's state to locked).
    4.  If the lock is already locked, the thread continues to spin (loop and check) until it becomes unlocked.
    5.  After the thread finishes its work in the critical section, it releases the lock (changes the lock's state to unlocked), allowing another waiting thread to acquire it.

**3. Test-and-Set (TAS) Instruction**

*   **Definition:** An atomic instruction that reads a memory location, sets it to a specific value (typically 1), and returns the *original* value of the memory location, all in a single, indivisible operation.  It guarantees mutual exclusion.
*   **Atomicity:** The TAS instruction is guaranteed to be atomic, meaning that no other thread can interrupt its execution.  This is crucial for preventing race conditions.
*   **How it Works (Conceptual):**

    ```
    boolean TestAndSet(boolean *lock) {
      boolean originalValue = *lock;
      *lock = true;
      return originalValue;
    }
    ```

*   **Role in Spin Locks:** The TAS instruction is the core mechanism used to atomically acquire the spin lock. It allows a thread to check if the lock is available (old value is false/0) and, if so, immediately claim the lock (set the value to true/1) without any possibility of another thread interfering.

**4. Implementing a Spin Lock with Test-and-Set**

*   **Data Structure:**
    *   `lock`: A boolean variable (or an integer, typically 0 or 1) representing the lock.  `false` (or 0) indicates the lock is free, and `true` (or 1) indicates the lock is held.

*   **Functions:**

    *   **`acquire_lock(lock)`:**  Acquires the spin lock.
    *   **`release_lock(lock)`:**  Releases the spin lock.

*   **Implementation (Conceptual):**

    ```c
    // Shared lock variable (initially false/0 - unlocked)
    bool lock = false;

    void acquire_lock(bool *lock) {
      while (TestAndSet(lock)) {
        // Spin (busy-wait) until TestAndSet returns false (lock was free)
        // Optionally, add a short delay here (e.g., using sched_yield())
        // to reduce contention and prevent the spinning thread from
        // hogging the CPU.
      }
      // At this point, the thread has acquired the lock.
    }

    void release_lock(bool *lock) {
      *lock = false; // Release the lock
    }

    // Example usage:
    void critical_section() {
      acquire_lock(&lock); // Acquire the lock

      // Critical section code: access shared resources
      // ...

      release_lock(&lock); // Release the lock
    }
    ```

*   **Explanation:**

    1.  **`acquire_lock()`:** The thread repeatedly calls `TestAndSet(&lock)`.
    2.  If `lock` was `false` (unlocked), `TestAndSet` will set `lock` to `true` (locked) and return `false`.  The `while` loop terminates, and the thread has acquired the lock.
    3.  If `lock` was `true` (locked), `TestAndSet` will set `lock` to `true` (it remains locked) and return `true`. The `while` loop continues, and the thread spins (busy-waits).
    4.  **`release_lock()`:** The thread simply sets `lock` to `false`, releasing the lock.

**5. Advantages and Disadvantages of Spin Locks**

*   **Advantages:**
    *   **Simple to implement:** Relatively straightforward code.
    *   **Low overhead when contention is low:**  If the lock is usually free, the overhead of acquiring and releasing it is minimal.
    *   **Useful for short critical sections:**  When the critical section is very short, the spinning overhead might be less than the overhead of context switching (which other locking mechanisms might involve).
*   **Disadvantages:**
    *   **Busy-waiting:** Threads continuously consume CPU cycles while waiting for the lock, even if the lock holder is not making progress. This is inefficient, especially on single-processor systems.
    *   **Priority inversion:** A high-priority thread might spin while waiting for a low-priority thread to release the lock. The low-priority thread might be preempted by a medium-priority thread, leading to indefinite delay for the high-priority thread.
    *   **Starvation:**  Some threads might repeatedly lose the "race" to acquire the lock and never get access to the critical section.  This is unfair.
    *   **Not suitable for long critical sections:** If the critical section takes a long time, other threads will waste a significant amount of CPU time spinning.

**6. Issues with Spin Locks: Starvation and Fairness**

*   **Starvation:** Occurs when one or more threads are repeatedly denied access to the critical section while other threads are able to acquire the lock.
*   **Causes of Starvation:**
    *   **Unfair scheduling:** The scheduler might consistently favor certain threads over others.
    *   **Thread priorities:** Higher-priority threads might always acquire the lock before lower-priority threads.
    *   **Pure luck:** Even with fair scheduling, some threads might just repeatedly lose the "race" to acquire the lock.
*   **Fairness:** The property that all threads eventually get a chance to access the critical section.
*   **Addressing Starvation and Fairness:**
    *   **Queue-based spin locks (Ticket Locks):** Instead of each thread simply trying `TestAndSet`, each thread gets a "ticket" number indicating its position in the queue. Only the thread with the lowest ticket number gets access to the lock. This ensures fairness but adds complexity.
    *   **Adding delay to spinning:** After each failed attempt to acquire the lock, a thread can yield the CPU (e.g., using `sched_yield()` or `pthread_yield()`) to give other threads a chance to run. This reduces CPU waste but doesn't guarantee fairness.
    *   **Combining with other synchronization primitives (e.g., semaphores):** A spin lock can be used to protect a small, frequently accessed part of the critical section, while a semaphore can be used for the less frequent, longer parts.

**7. Important Points to Remember**

*   Spin locks are a basic synchronization primitive that provides mutual exclusion.
*   The Test-and-Set instruction is essential for atomically acquiring the lock.
*   Spin locks are efficient when contention is low and critical sections are short.
*   Spin locks can lead to busy-waiting, priority inversion, and starvation.
*   Fairer locking mechanisms (e.g., queue-based spin locks) can be used to address starvation.
*   Consider using other synchronization primitives (e.g., mutexes, semaphores) when spin locks are not appropriate.  In general, use higher-level abstractions (like mutexes) unless you have a very specific performance reason to use a spinlock directly.  Most implementations of mutexes will handle things like fairness and avoiding excessive CPU consumption far better than a naive spinlock.

**Practice Questions and Exercises**

1.  **Explain the concept of "busy-waiting" in the context of spin locks.  What are the advantages and disadvantages of busy-waiting?**

    *   **Answer:** Busy-waiting is a technique where a thread continuously checks a condition (in this case, the availability of the lock) in a loop until the condition becomes true. The advantage is that it avoids the overhead of context switching if the lock becomes available quickly. The disadvantage is that it wastes CPU cycles while waiting, potentially starving other threads and reducing overall system performance, especially on single-core systems.

2.  **Describe how the Test-and-Set instruction guarantees mutual exclusion when used in a spin lock.**

    *   **Answer:** The Test-and-Set instruction atomically reads the value of the lock variable, sets it to `true` (locked), and returns the *original* value.  Because it's atomic, no other thread can interrupt this process.  If the original value was `false` (unlocked), the thread has successfully acquired the lock. If the original value was `true` (locked), another thread already holds the lock, and the current thread must spin. The atomicity of `TestAndSet` prevents two threads from simultaneously reading `false` and both claiming the lock.

3.  **Explain the potential issue of "starvation" when using spin locks.  How can this issue be mitigated?**

    *   **Answer:** Starvation occurs when a thread is repeatedly denied access to the critical section, even though other threads are able to acquire the lock. This can happen due to unfair scheduling, thread priorities, or simply by chance. Mitigation strategies include using queue-based spin locks (where threads acquire the lock in FIFO order), adding a delay to spinning (allowing other threads to run), or combining spin locks with other synchronization primitives like semaphores.

4.  **Write a pseudo-code implementation of a spin lock with Test-and-Set (similar to the example in the notes).**

    *   **Answer:**  (See the code example in Section 4 above.)

5.  **Discuss the trade-offs between using a spin lock and a mutex.  When would you choose a spin lock over a mutex, and vice versa?**

    *   **Answer:** Spin locks are generally suitable for very short critical sections where contention is low, because the overhead of spinning might be less than the overhead of context switching. Mutexes are typically preferred for longer critical sections or when contention is high, as they allow threads to block and yield the CPU, avoiding busy-waiting. Mutexes also often provide features like priority inheritance to help prevent priority inversion. A good rule of thumb is to use mutexes unless you have a specific performance reason to use spinlocks *and* you understand the risks.

6.  **What is priority inversion and how does it relate to spinlocks?**

    *   **Answer:** Priority inversion occurs when a high-priority task is blocked waiting for a low-priority task to release a resource (like a spinlock). If a medium-priority task preempts the low-priority task, the high-priority task is effectively blocked by the medium-priority task, which violates the priority scheduling principle. Spinlocks exacerbate this problem because the high-priority task spins (busy-waits) continuously, consuming CPU time without making progress until the low-priority task releases the lock. Because the low-priority task now has to contend with the high-priority task eating CPU time while spinning, it can take *longer* for the low-priority task to run and release the lock.

This markdown provides a comprehensive overview of building spin locks with Test-and-Set, covering the learning outcomes, key concepts, examples, and potential issues.  The practice questions and exercises allow for self-assessment and deeper understanding of the topic. Remember to consider the context of your operating system and hardware when choosing and implementing synchronization primitives.
