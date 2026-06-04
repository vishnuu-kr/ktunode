---
title: "Synchronization – Basic Hardware Primtives."
subject: "ADVANCED COMPUTER ARCHITECTURE"
module: "Module 3: Data Level Parallelism."
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b862"
status: "completed"
scrapedAt: "2026-05-20T16:42:41.883Z"
---
# ADVANCED COMPUTER ARCHITECTURE - Module 3: Data Level Parallelism - Synchronization: Basic Hardware Primitives

## Introduction

This module focuses on data-level parallelism and how to effectively utilize it. A critical aspect of parallel programming is synchronization, ensuring data consistency and correctness when multiple processors or cores access shared resources. This section delves into basic hardware primitives that provide the foundation for building more complex synchronization mechanisms.

## Learning Outcomes

Upon completion of this topic, you will be able to:

*   Understand the necessity of synchronization in parallel programming.
*   Define and explain common hardware synchronization primitives such as atomic exchange, test-and-set, fetch-and-increment, compare-and-swap, and load-linked/store-conditional.
*   Describe how these primitives can be used to implement mutual exclusion.
*   Compare and contrast the different hardware primitives in terms of performance and suitability for various scenarios.
*   Identify the challenges associated with implementing and using synchronization primitives.

## 1. The Necessity of Synchronization

*   **Race Conditions:** Occur when multiple threads or processes access and modify shared data concurrently, and the final result depends on the unpredictable order of execution. This can lead to incorrect or inconsistent data.

    *   **Example:** Two threads incrementing a shared counter.  If they both read the counter's value, increment it locally, and then write back, without proper synchronization, one update can be lost.

*   **Critical Sections:**  Sections of code that access shared resources and must be protected to avoid race conditions.

*   **Mutual Exclusion:** Ensuring that only one thread or process can access a critical section at any given time.  This is the primary goal of synchronization.

*   **Data Consistency:** Maintaining the integrity and correctness of shared data across multiple threads or processes. Synchronization primitives help ensure data consistency.

## 2. Basic Hardware Synchronization Primitives

These primitives provide atomic operations, meaning they are guaranteed to execute without interruption, ensuring exclusive access to shared memory locations.

### 2.1 Atomic Exchange (or Swap)

*   **Definition:** Atomically swaps the value in a memory location with a value from a register.

*   **Operation:**
    1.  Reads the value from memory location `M`.
    2.  Stores the value from register `R` into memory location `M`.
    3.  Places the original value read from `M` into register `R`.

*   **Use for Mutual Exclusion:** A simple lock implementation can be achieved.  The lock is represented by a memory location initially set to 0 (unlocked). A thread tries to acquire the lock by atomically exchanging the memory location with the value 1 (locked). If the original value read from memory was 0, the thread successfully acquired the lock. If it was 1, the lock is already taken, and the thread must retry.

*   **Example (Pseudocode):**

    ```
    lock:  address of the lock variable
    R:     register holding the value 1 (representing the locked state)

    atomic_exchange(lock, R)

    if (R == 0) {
      // Lock acquired successfully
      enter_critical_section();
    } else {
      // Lock is already held
      // Retry
    }

    release_lock:
    store 0 into lock // unlock
    ```

### 2.2 Test-and-Set

*   **Definition:** Atomically tests the value of a memory location and sets it to a specified value if the original value meets a certain condition (typically if it was zero).

*   **Operation:**
    1.  Reads the value from memory location `M`.
    2.  If the value is 0, it sets the value to 1.
    3.  Returns the original value read from `M`.

*   **Use for Mutual Exclusion:** The lock variable is initialized to 0 (unlocked). A thread attempts to acquire the lock by performing a test-and-set. If the returned value is 0, the thread acquired the lock (since it was initially 0 and then set to 1). If the returned value is 1, the lock is already taken.

*   **Example (Pseudocode):**

    ```
    lock: address of the lock variable

    value = test_and_set(lock)

    if (value == 0) {
      // Lock acquired successfully
      enter_critical_section();
    } else {
      // Lock is already held
      // Retry
    }

    release_lock:
    store 0 into lock // unlock
    ```

### 2.3 Fetch-and-Increment

*   **Definition:** Atomically increments the value of a memory location and returns the original value.

*   **Operation:**
    1.  Reads the value from memory location `M`.
    2.  Increments the value in memory location `M`.
    3.  Returns the original value read from `M`.

*   **Use Cases (Not usually direct Mutual Exclusion):**  Primarily used for generating unique sequence numbers, distributing loop iterations among threads, and managing shared counters.  Requires more sophisticated mechanisms for mutual exclusion. It can be used as part of a ticket lock implementation.

*   **Example (Pseudocode - Ticket Lock):**

    ```
    ticket_lock: address of the ticket lock variable (initialized to 0)
    next_ticket: address of the next ticket number variable (initialized to 0)
    my_ticket: register to hold the assigned ticket

    my_ticket = fetch_and_increment(next_ticket)

    while (my_ticket != ticket_lock) {
      // Wait until your ticket is the current ticket
    }

    // Critical Section

    fetch_and_increment(ticket_lock); // Increment the lock, allowing the next thread to enter
    ```

### 2.4 Compare-and-Swap (CAS)

*   **Definition:**  Atomically compares the value in a memory location with an expected value. If the values match, it replaces the memory location with a new value. Otherwise, the memory location remains unchanged.

*   **Operation:**
    1.  Reads the value from memory location `M`.
    2.  Compares the value with `expected_value`.
    3.  If the values match, it stores `new_value` into memory location `M`.
    4.  Returns a status indicating whether the swap occurred successfully (usually a boolean).

*   **Use for Mutual Exclusion:**  Can be used to implement more robust and flexible lock mechanisms, as well as lock-free data structures.

*   **Example (Pseudocode):**

    ```
    lock: address of the lock variable (initialized to 0)
    expected_value: 0 (representing unlocked)
    new_value: 1 (representing locked)

    success = compare_and_swap(lock, expected_value, new_value)

    if (success) {
      // Lock acquired successfully
      enter_critical_section();
    } else {
      // Lock is already held
      // Retry
    }

    release_lock:
    store 0 into lock // unlock
    ```

### 2.5 Load-Linked/Store-Conditional (LL/SC)

*   **Definition:** A pair of instructions that work together to provide atomic update capabilities.

*   **Operation:**
    1.  **Load-Linked (LL):** Loads the value from a memory location and *registers* the address of that location.
    2.  **Store-Conditional (SC):** Attempts to store a new value into the registered memory location. The store is successful *only if* the memory location hasn't been modified since the LL instruction.  SC returns a status indicating success or failure.

*   **Use for Mutual Exclusion:** Can be used to implement lock-free data structures and sophisticated synchronization algorithms.

*   **Example (Pseudocode):**

    ```
    lock: address of the lock variable (initialized to 0)
    value: register to hold the loaded value
    new_value: 1 (representing locked)

    loop:
      value = load_linked(lock) // load the value
      if (value != 0) { // check if the lock is already acquired
        //Retry
        goto loop;
      }
      success = store_conditional(lock, new_value) // try to store
      if (success) {
        // Lock acquired successfully
        enter_critical_section();
        break;
      } else {
        // Store failed because another thread modified the lock
        // Retry
        goto loop;
      }

    release_lock:
    store 0 into lock // unlock
    ```

## 3. Comparing Hardware Primitives

| Primitive            | Advantages                                                                                              | Disadvantages                                                                                              | Use Cases                                                              |
| -------------------- | ------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Atomic Exchange      | Simple to implement.                                                                                 | Can lead to high contention if many threads are competing for the lock.                               | Basic mutual exclusion.                                              |
| Test-and-Set         | Simple to implement.                                                                                 | Can also lead to high contention (spinlocks).                                                            | Basic mutual exclusion.                                              |
| Fetch-and-Increment  | Useful for generating unique numbers and distributing work.                                          | Not directly suited for mutual exclusion; requires additional mechanisms.                                 | Ticket locks, generating sequence numbers, loop scheduling.            |
| Compare-and-Swap     | More flexible than simpler primitives; enables lock-free data structures.                             | More complex to implement; requires careful handling of race conditions.                                 | Lock-free data structures, robust mutual exclusion.                  |
| Load-Linked/Store-Conditional | Highly flexible; enables lock-free data structures and optimistic concurrency control.         | More complex to implement; requires retry loops, can suffer from livelock.                                  | Lock-free data structures, fine-grained synchronization.               |

## 4. Challenges and Considerations

*   **Contention:** When many threads or processes try to acquire the same lock, performance can degrade significantly due to spinning (busy-waiting).
*   **Spinlocks:** Locks that use busy-waiting (repeatedly checking the lock status) can consume significant CPU resources.  Consider using alternatives like blocking locks (e.g., semaphores) in high-contention scenarios.
*   **Fairness:** Some primitives might lead to unfairness, where some threads are consistently favored over others in acquiring the lock.
*   **Livelock:** A situation where threads repeatedly attempt to acquire a lock but are constantly preempted by other threads, resulting in no progress. LL/SC is particularly susceptible.
*   **Deadlock:** A situation where two or more threads are blocked indefinitely, waiting for each other to release resources.  Careful design is required to avoid deadlocks.  This is more a higher-level concern rather than directly related to primitive functionality.
*   **Memory Barriers:**  Ensure correct memory ordering. Compilers and processors can reorder instructions for optimization. Memory barriers force a specific order of memory operations. These can be necessary to ensure that all threads see consistent updates to shared variables.
*   **Cache Coherence:**  Maintaining consistency of cached data across multiple processors or cores. Hardware cache coherence protocols are crucial, and synchronization primitives need to interact correctly with these protocols.

## 5. Important Points to Remember

*   Hardware primitives provide the foundation for building more complex synchronization mechanisms.
*   Atomic operations are crucial for ensuring data consistency and avoiding race conditions.
*   Different primitives have different performance characteristics and are suitable for different scenarios.
*   Careful consideration of contention, fairness, livelock, and deadlock is essential when designing parallel programs.
*   Memory barriers and cache coherence are important considerations for ensuring correct memory ordering and data consistency.

## 6. Practice Questions/Exercises

**1. Explain the difference between atomic exchange and compare-and-swap. Give an example scenario where compare-and-swap would be more advantageous.**

*Answer:* Atomic exchange simply swaps a value in memory with a value in a register, regardless of the current memory value. Compare-and-swap only performs the swap if the memory value matches an expected value.

Scenario: Implementing a lock-free linked list. With compare-and-swap, you can atomically update a node's next pointer, ensuring that the update only happens if the current next pointer is still the expected one (i.e., no other thread has modified it in the meantime).  Atomic exchange wouldn't be suitable because it wouldn't check if the linked list structure has been altered concurrently.

**2. Describe a situation where using a spinlock (implemented with test-and-set or atomic exchange) is *not* a good idea, and suggest an alternative.**

*Answer:*  When the critical section is long and contention is high, spinlocks are inefficient because threads will spend a lot of time spinning (busy-waiting) while consuming CPU resources.  An alternative is to use a blocking lock (e.g., a semaphore or mutex) where threads are put to sleep when the lock is not available and woken up when the lock is released.  This reduces CPU utilization at the expense of higher context switching overhead.

**3.  Why are memory barriers often needed when using synchronization primitives?**

*Answer:*  Compilers and processors can reorder instructions to optimize performance. This reordering can lead to unexpected behavior in concurrent programs.  Memory barriers (or fences) enforce a specific ordering of memory operations, ensuring that writes by one thread are visible to other threads in a predictable order, preventing race conditions and maintaining data consistency.

**4. Implement a simple mutual exclusion lock using the compare-and-swap primitive in pseudocode.**

*Answer:* (Provided within the Compare-and-Swap section above. It's important to understand the logic and be able to reproduce it.)

**5.  Explain the purpose of Load-Linked and Store-Conditional instructions. What problem do they address that simpler primitives like Test-and-Set might not solve as effectively?**

*Answer:* LL/SC are used for building lock-free data structures by allowing a thread to optimistically attempt an update to shared memory. Load-Linked reads the value, and Store-Conditional only writes back the new value if no other thread has modified the memory location in the meantime. If another thread modifies the memory location between the LL and SC instructions, the SC fails, and the thread must retry. They address the problem of "lost updates" more elegantly than Test-and-Set. With Test-and-Set, repeated contention might result in a continuous loop of locking and unlocking, while LL/SC allows for a more efficient retry mechanism only when actual interference occurs, leading to better performance in some scenarios, especially for fine-grained locking and lock-free structures.
