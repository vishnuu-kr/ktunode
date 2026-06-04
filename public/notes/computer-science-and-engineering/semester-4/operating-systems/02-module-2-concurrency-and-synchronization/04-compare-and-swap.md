---
title: "Compare and Swap"
subject: "OPERATING SYSTEMS"
module: "Module 2: Concurrency and Synchronization  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8afa6"
status: "completed"
scrapedAt: "2026-05-20T16:14:03.878Z"
---
# OPERATING SYSTEMS - Module 2: Concurrency and Synchronization - Compare and Swap

## Learning Outcomes:

Upon completion of this topic, you will be able to:

*   Understand the concept of Compare and Swap (CAS) as an atomic operation.
*   Explain how CAS facilitates lock-free synchronization.
*   Describe the advantages and disadvantages of using CAS.
*   Implement basic synchronization primitives using CAS.
*   Identify common issues related to CAS, such as the ABA problem.
*   Apply CAS in practical scenarios for concurrent programming.

## 1. Introduction to Compare and Swap (CAS)

*   **Definition:** Compare and Swap (CAS) is an atomic instruction (i.e., an instruction that executes indivisibly) used in concurrent programming to achieve synchronization. It performs the following operation:
    *   Compares the value of a memory location to an expected value.
    *   If the values match, it replaces the memory location with a new value.
    *   If the values do not match, it does nothing and indicates failure.

*   **Atomicity:**  The entire CAS operation (compare and swap) is guaranteed to be atomic by the hardware. This means that no other thread can interfere with the operation while it is in progress.

*   **Pseudo-code Representation:**

    ```
    boolean compareAndSwap(memoryLocation, expectedValue, newValue) {
        if (memoryLocation.value == expectedValue) {
            memoryLocation.value = newValue;
            return true; // Success: Value was swapped
        } else {
            return false; // Failure: Value was not swapped
        }
    }
    ```

## 2. Lock-Free Synchronization with CAS

*   **Lock-Based vs. Lock-Free:**
    *   **Lock-Based Synchronization:**  Relies on acquiring and releasing locks (e.g., mutexes, semaphores) to protect critical sections of code.  Can suffer from issues like deadlock, priority inversion, and convoying.
    *   **Lock-Free Synchronization:**  Avoids the use of locks entirely.  CAS enables lock-free data structures and algorithms where threads can make progress even if other threads are delayed or blocked.

*   **How CAS Enables Lock-Free Synchronization:** CAS allows threads to attempt to update a shared variable without holding a lock. If the update succeeds (CAS returns true), the thread continues. If the update fails (CAS returns false), the thread retries until it succeeds. This approach avoids blocking other threads.

*   **Example: Lock-Free Counter**

    ```java
    import java.util.concurrent.atomic.AtomicInteger;

    public class LockFreeCounter {
        private AtomicInteger count = new AtomicInteger(0);

        public int increment() {
            int oldValue;
            int newValue;
            do {
                oldValue = count.get();
                newValue = oldValue + 1;
            } while (!count.compareAndSet(oldValue, newValue)); // Retry until CAS succeeds

            return newValue;
        }

        public int getCount() {
            return count.get();
        }

        public static void main(String[] args) throws InterruptedException {
            LockFreeCounter counter = new LockFreeCounter();
            int numThreads = 10;
            Thread[] threads = new Thread[numThreads];

            for (int i = 0; i < numThreads; i++) {
                threads[i] = new Thread(() -> {
                    for (int j = 0; j < 1000; j++) {
                        counter.increment();
                    }
                });
                threads[i].start();
            }

            for (int i = 0; i < numThreads; i++) {
                threads[i].join();
            }

            System.out.println("Final Count: " + counter.getCount()); // Expected: 10000
        }
    }
    ```

    *   **Explanation:**
        *   `AtomicInteger` uses CAS internally to provide atomic increment operations.
        *   The `increment()` method retrieves the current value of `count`.
        *   It calculates the new value (`oldValue + 1`).
        *   It calls `compareAndSet(oldValue, newValue)` which attempts to atomically update `count` from `oldValue` to `newValue`.
        *   If `compareAndSet` returns `false`, it means another thread modified `count` after `oldValue` was read. The loop repeats, fetching the latest value and trying again.
        *   This continues until `compareAndSet` succeeds.

## 3. Advantages and Disadvantages of CAS

*   **Advantages:**
    *   **Performance:**  In many cases, CAS can provide better performance than lock-based mechanisms, especially in scenarios with low contention.  Avoids the overhead of lock acquisition and release.
    *   **Lock-Free:** Eliminates the problems associated with locks, such as deadlock, priority inversion, and convoying.
    *   **Fault Tolerance:**  If one thread crashes while executing a CAS operation, it does not block other threads from accessing the shared data.  With locks, a crashed thread holding a lock can block other threads indefinitely.

*   **Disadvantages:**
    *   **Busy-Waiting:** Threads may spin (retry) repeatedly if contention is high, consuming CPU resources even when not making progress. This is sometimes referred to as "live lock."
    *   **Complexity:**  Implementing lock-free data structures and algorithms using CAS can be complex and error-prone.
    *   **ABA Problem:**  A value can change from A to B and back to A, leading CAS to believe that the value hasn't changed when it actually has.
    *   **Platform Dependence:** The availability and performance of CAS instructions can vary across different hardware architectures.
    *   **Potential for Starvation:** While rare, a thread could theoretically be starved indefinitely if it consistently loses the CAS race to other threads.

## 4. Implementing Synchronization Primitives Using CAS

*   **Simple Spin Lock (Illustrative Example - Not Recommended for Production)**

    ```java
    import java.util.concurrent.atomic.AtomicBoolean;

    public class SpinLock {
        private AtomicBoolean locked = new AtomicBoolean(false);

        public void lock() {
            while (!locked.compareAndSet(false, true)) {
                // Spin: Keep retrying until the lock is acquired
            }
        }

        public void unlock() {
            locked.set(false);
        }

        public static void main(String[] args) throws InterruptedException {
            SpinLock spinLock = new SpinLock();

            Runnable task = () -> {
                spinLock.lock();
                try {
                    System.out.println(Thread.currentThread().getName() + " acquired the lock.");
                    Thread.sleep(100); // Simulate work
                } catch (InterruptedException e) {
                    e.printStackTrace();
                } finally {
                    spinLock.unlock();
                    System.out.println(Thread.currentThread().getName() + " released the lock.");
                }
            };

            Thread thread1 = new Thread(task, "Thread-1");
            Thread thread2 = new Thread(task, "Thread-2");

            thread1.start();
            thread2.start();

            thread1.join();
            thread2.join();
        }
    }
    ```

    *   **Explanation:**
        *   `AtomicBoolean locked`: Represents the lock state (true = locked, false = unlocked).
        *   `lock()`: Continuously tries to atomically set `locked` from `false` to `true` using `compareAndSet`. If it succeeds, the thread acquires the lock. If it fails, it spins (busy-waits) and retries.
        *   `unlock()`: Sets `locked` to `false`, releasing the lock.
    *   **Important Note:**  This is a basic illustration.  Spin locks should be used cautiously in real-world applications due to the potential for excessive CPU consumption if contention is high.  Consider using more sophisticated techniques, such as backoff strategies, to reduce spinning.

## 5. The ABA Problem

*   **Definition:** The ABA problem occurs when a variable's value changes from A to B and then back to A. If a thread attempts a CAS operation on the variable, it will see that the value is still A and incorrectly assume that the variable hasn't been modified since it last read the value. This can lead to data corruption or incorrect program behavior.

*   **Example:**
    1.  Thread 1 reads the value of a shared variable `x` (value is A).
    2.  Thread 2 modifies `x` to B and then back to A.
    3.  Thread 1 attempts a CAS operation to change `x` from A to C.  CAS succeeds because `x` is currently A.  However, the variable *has* been modified in the interim (A -> B -> A), and Thread 1's operation might now be based on stale information.

*   **Solutions:**
    *   **Version Numbers:** Associate a version number (or counter) with the value.  The CAS operation also compares and updates the version number.  Even if the value returns to A, the version number will be different, preventing the erroneous swap. This is often implemented using `AtomicStampedReference` in Java.

        ```java
        import java.util.concurrent.atomic.AtomicStampedReference;

        public class ABASolution {
            public static void main(String[] args) throws InterruptedException {
                AtomicStampedReference<Integer> value = new AtomicStampedReference<>(10, 0); // Initial value 10, initial stamp 0

                Thread thread1 = new Thread(() -> {
                    int expectedValue = value.getReference();
                    int expectedStamp = value.getStamp();

                    try {
                        Thread.sleep(1000); // Simulate some work
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }

                    boolean success = value.compareAndSet(expectedValue, expectedValue + 10, expectedStamp, expectedStamp + 1);
                    System.out.println("Thread 1: CAS success? " + success);
                });

                Thread thread2 = new Thread(() -> {
                    value.compareAndSet(10, 20, 0, 1);
                    value.compareAndSet(20, 10, 1, 2);
                });

                thread1.start();
                thread2.start();

                thread1.join();
                thread2.join();

                System.out.println("Final value: " + value.getReference() + ", Final stamp: " + value.getStamp());
            }
        }
        ```

    *   **Hazard Pointers:**  Each thread maintains a "hazard pointer" that points to the memory locations it is currently accessing.  Before freeing memory, a garbage collector checks if any hazard pointers point to that memory location.  If so, the memory is not freed until the hazard pointer is cleared.
    *   **Epoch-Based Reclamation:** Similar to hazard pointers but groups accesses into "epochs." This reduces the overhead of constantly updating hazard pointers.

## 6. Applying CAS in Practical Scenarios

*   **Lock-Free Data Structures:**
    *   **Lock-Free Queues:** Implement queues without using locks, enabling concurrent enqueue and dequeue operations.
    *   **Lock-Free Stacks:** Similar to queues, but with LIFO (Last-In, First-Out) semantics.
    *   **Concurrent Hash Maps:** Implement hash maps that allow multiple threads to read and write data concurrently without using locks.
*   **Atomic Variables:**
    *   Many languages provide built-in atomic variable classes (e.g., `AtomicInteger`, `AtomicLong`, `AtomicReference` in Java) that internally use CAS to implement atomic operations like increment, decrement, and compare-and-set.
*   **Optimistic Locking in Databases:**  Some database systems use CAS internally to implement optimistic locking. When a transaction attempts to update a row, it compares the current value of a version number column to the version number that was read at the beginning of the transaction. If the version numbers match, the update succeeds and the version number is incremented.  If the version numbers don't match, the update fails, indicating that another transaction has modified the row in the meantime.

## 7. Practice Questions/Exercises

1.  **Explain the difference between lock-based and lock-free synchronization.**

    *   **Answer:** Lock-based synchronization uses locks (e.g., mutexes) to protect critical sections, potentially leading to deadlock and priority inversion. Lock-free synchronization avoids locks by using atomic operations like CAS, ensuring that at least one thread makes progress even if others are blocked.

2.  **What is the ABA problem, and how can it be addressed?**

    *   **Answer:** The ABA problem occurs when a variable changes from A to B and back to A, causing a CAS operation to incorrectly succeed even though the variable has been modified. It can be solved by associating a version number (stamp) with the value using classes like `AtomicStampedReference` in Java, or by using hazard pointers or epoch-based reclamation.

3.  **Implement a lock-free counter using CAS in your preferred programming language. (See example in Section 2).**

    *   **Answer:** (Example in Java provided in Section 2 - Lock-Free Counter)  The key is to use an atomic integer (or equivalent) and the `compareAndSet` method in a loop until the CAS operation succeeds.

4.  **What are the advantages and disadvantages of using CAS compared to locks?**

    *   **Answer:** Advantages include better performance in low-contention scenarios, lock-freedom (avoiding deadlock), and fault tolerance. Disadvantages include busy-waiting, complexity, the ABA problem, platform dependence, and potential for starvation.

5.  **Why is atomicity crucial for the Compare and Swap operation?**

    *   **Answer:** Atomicity ensures that the compare and swap operation happens as a single, indivisible unit. If it were not atomic, another thread could modify the memory location between the comparison and the swap, leading to incorrect results and data corruption.

## 8. Important Points to Remember

*   CAS is an atomic operation that compares a memory location to an expected value and swaps it with a new value if they match.
*   CAS enables lock-free synchronization, which avoids the drawbacks of lock-based approaches.
*   The ABA problem is a potential issue with CAS and requires appropriate mitigation strategies (e.g., version numbers).
*   While CAS can offer performance advantages, it's essential to consider its complexity and potential for busy-waiting.
*   Lock-free data structures and algorithms using CAS can be complex to implement and debug.
*   Understanding the nuances of CAS is critical for writing correct and efficient concurrent programs.
