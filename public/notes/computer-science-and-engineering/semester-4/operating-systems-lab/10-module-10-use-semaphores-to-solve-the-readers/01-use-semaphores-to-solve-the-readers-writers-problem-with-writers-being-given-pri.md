---
title: "Use semaphores to solve the readers-writers problem with writers being given priority over readers."
subject: "OPERATING SYSTEMS LAB"
module: "Module 10: Use semaphores to solve the readers"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b49d"
status: "completed"
scrapedAt: "2026-05-20T16:14:59.884Z"
---
# OPERATING SYSTEMS LAB - Module 10: Readers-Writers Problem with Writer Priority using Semaphores

**Topic:** Use semaphores to solve the readers-writers problem with writers being given priority over readers.

**Learning Outcomes:**

*   Understand the readers-writers problem and its variations.
*   Explain the concept of semaphores and their usage in synchronization.
*   Implement a semaphore-based solution for the readers-writers problem with writer priority.
*   Analyze the advantages and disadvantages of prioritizing writers over readers.
*   Identify potential issues like starvation and propose solutions.

## 1. Introduction to the Readers-Writers Problem

*   **Definition:** The readers-writers problem is a classic concurrency control problem.  Multiple processes (readers and writers) need to access a shared resource (e.g., a file or database).
    *   **Readers:**  Processes that only read the shared resource. Multiple readers can access the resource concurrently without causing issues.
    *   **Writers:** Processes that modify (write to) the shared resource. To maintain data consistency, only one writer can access the resource at any given time, and no readers should be accessing it concurrently.

*   **Goal:** To allow concurrent access by readers while ensuring exclusive access by writers, thereby preventing data inconsistencies.

*   **Variations:**
    *   **First Readers-Writers Problem (Reader Priority):** No writer is kept waiting unless a reader is already accessing the shared data. Readers have priority.
    *   **Second Readers-Writers Problem (Writer Priority):** If a writer is waiting to access the object, no new readers are allowed to start reading. Writers have priority.  This is the focus of this module.
    *   **Third Readers-Writers Problem (Fairness):** The system ensures that no reader or writer starves, providing fairness to both.

## 2. Semaphores: A Synchronization Tool

*   **Definition:** A semaphore is an integer variable used to control access to a shared resource by multiple processes in a concurrent system.

*   **Operations:**
    *   **`wait(S)` or `P(S)` (proberen - to test):**  Decrements the semaphore value `S`. If `S` becomes negative, the process executing `wait` is blocked and placed in a waiting queue associated with the semaphore `S`.  When `S` becomes non-negative again, a process from the queue is unblocked.
    *   **`signal(S)` or `V(S)` (verhogen - to increment):** Increments the semaphore value `S`. If `S` was negative (meaning processes were waiting), it unblocks one of the waiting processes.

*   **Types:**
    *   **Binary Semaphore (Mutex):** Integer value can be only 0 or 1.  Used to provide mutual exclusion. Initialized to 1.
    *   **Counting Semaphore:** Integer value can range over an unrestricted domain. Used to control access to a finite number of resources.

## 3. Implementing Reader-Writer with Writer Priority using Semaphores

*   **Variables:**
    *   `mutex`: Binary semaphore (mutex). Used for mutual exclusion when updating `readcount`.  Initialized to 1.
    *   `wrt`: Binary semaphore (mutex). Used to control access to the shared resource for writers. Initialized to 1.
    *   `readcount`: Integer variable.  Counts the number of readers currently accessing the shared resource. Initialized to 0.

*   **Writer Process:**

```pseudocode
writer() {
  wait(wrt);  // Acquire exclusive access for writing
  // Perform writing operation
  signal(wrt); // Release exclusive access
}
```

*   **Reader Process:**

```pseudocode
reader() {
  wait(mutex); // Acquire mutex to update readcount
  if (readcount == 0) {
    wait(wrt); // If first reader, acquire wrt semaphore (block writers)
  }
  readcount++;
  signal(mutex); // Release mutex

  // Perform reading operation

  wait(mutex); // Acquire mutex to update readcount
  readcount--;
  if (readcount == 0) {
    signal(wrt); // If last reader, release wrt semaphore (allow writers)
  }
  signal(mutex); // Release mutex
}
```

*   **Explanation:**

    1.  **`wrt` semaphore:** Ensures that only one writer can access the shared resource at a time. When a writer wants to write, it waits on `wrt`. If `wrt` is available (value is 1), the writer acquires it, making its value 0, and performs the writing operation. After writing, the writer signals `wrt`, making its value 1 again, allowing other writers (or readers, if no writers are waiting - more on this later) to access the resource.

    2.  **`mutex` semaphore:** Provides mutual exclusion when accessing and updating the `readcount` variable.  This is crucial because `readcount` is a shared variable accessed by multiple readers concurrently. Without the `mutex`, race conditions could occur, leading to incorrect `readcount` values.

    3.  **`readcount` variable:**  Keeps track of the number of active readers. The *first* reader that enters the critical section (reading) waits on the `wrt` semaphore.  This ensures that if a writer is waiting, no new readers are allowed to enter. When the *last* reader exits the critical section, it signals the `wrt` semaphore, allowing a waiting writer to proceed.

    4.  **Writer Priority:** The key to writer priority lies in the first reader blocking on the `wrt` semaphore.  If a writer is already waiting on `wrt`, the `wrt` semaphore will be unavailable. Consequently, the first reader arriving after the writer requests access will block on `wrt`, and *all subsequent readers will also block* due to the fact that the first reader didn't release `wrt`. Thus, the waiting writer gains priority.  The writer will proceed as soon as all current readers have finished. New readers will be blocked.

*   **Code Example (C):**

```c
#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <semaphore.h>

sem_t wrt, mutex;
int readcount = 0;

void *writer(void *arg) {
    while (1) {
        sem_wait(&wrt);
        printf("Writer %d is writing...\n", *(int*)arg);
        // Simulate writing
        sleep(2);
        printf("Writer %d finished writing\n", *(int*)arg);
        sem_post(&wrt);
        sleep(1); // Pause before writing again
    }
    return NULL;
}

void *reader(void *arg) {
    while (1) {
        sem_wait(&mutex);
        readcount++;
        if (readcount == 1) {
            sem_wait(&wrt);
        }
        sem_post(&mutex);

        printf("Reader %d is reading.  Readcount: %d\n", *(int*)arg, readcount);
        // Simulate reading
        sleep(1);

        sem_wait(&mutex);
        readcount--;
        printf("Reader %d finished reading.  Readcount: %d\n", *(int*)arg, readcount);
        if (readcount == 0) {
            sem_post(&wrt);
        }
        sem_post(&mutex);
        sleep(1); // Pause before reading again
    }
    return NULL;
}

int main() {
    pthread_t readers[3], writers[2];
    int reader_ids[3] = {1, 2, 3};
    int writer_ids[2] = {1, 2};

    sem_init(&mutex, 0, 1);
    sem_init(&wrt, 0, 1);

    for (int i = 0; i < 3; i++) {
        pthread_create(&readers[i], NULL, reader, &reader_ids[i]);
    }

    for (int i = 0; i < 2; i++) {
        pthread_create(&writers[i], NULL, writer, &writer_ids[i]);
    }

    for (int i = 0; i < 3; i++) {
        pthread_join(readers[i], NULL);
    }

    for (int i = 0; i < 2; i++) {
        pthread_join(writers[i], NULL);
    }

    sem_destroy(&mutex);
    sem_destroy(&wrt);

    return 0;
}
```

## 4. Advantages and Disadvantages of Writer Priority

*   **Advantages:**
    *   **Reduced Latency for Writers:** Ensures that writers get access to the shared resource relatively quickly, which is crucial in applications where timely updates are critical (e.g., database systems, real-time systems).
    *   **Prevents indefinite postponement of writers:** By prioritising writers, the solution ensures that they are not perpetually blocked by a continuous stream of readers.

*   **Disadvantages:**
    *   **Starvation of Readers:**  If writers continuously arrive, readers might be blocked indefinitely (starvation). This can lead to poor performance for read-intensive applications.
    *   **Lower Throughput:**  Prioritizing writers can reduce overall system throughput, as readers, which could potentially access the resource concurrently, are blocked more frequently.

## 5. Addressing Potential Starvation Issues

*   **Solutions:**
    *   **Bounded Waiting:**  Implement a mechanism that limits the amount of time a writer can continuously hold the resource, allowing readers to access it periodically. This can be achieved using timers or counters.
    *   **Fairness Queues:**  Use a queue to manage both reader and writer requests and serve them in a first-come, first-served (FCFS) manner. This requires more complex synchronization mechanisms.
    *   **Combining Reader and Writer Priorities:** Implement a hybrid approach where writers have priority for a certain period or until a certain number of writers have accessed the resource, then switch to reader priority for a period.

## 6. Important Points to Remember

*   **Critical Sections:** Correct implementation of semaphores requires careful identification and protection of critical sections.  Any shared variable (like `readcount`) must be accessed exclusively using mutexes.
*   **Semaphore Initialization:**  Semaphores *must* be properly initialized before being used.  Incorrect initialization can lead to unpredictable behavior.
*   **Deadlock:** Be mindful of potential deadlocks. For example, a reader waiting on `wrt` and then trying to acquire `mutex` could deadlock if a writer is waiting on `mutex` and then tries to acquire `wrt`.  The above example is carefully written to avoid this scenario.
*   **Resource Management:** Ensure that semaphores are properly released (`signal`) after the critical section is executed. Failure to do so can lead to resource starvation or system hang-ups.
*   **Context Switching Overhead:** Semaphore operations involve context switches, which can be expensive.  Minimize semaphore operations where possible, but *never* at the expense of correctness.
*   **Writer Priority Trade-off:** Understand that implementing writer priority involves a trade-off between writer latency and reader starvation.  Carefully consider the specific requirements of the application.

## 7. Practice Questions/Exercises

1.  **Scenario:**  Imagine a system where multiple threads need to access a shared log file. Writers append new entries to the log, while readers occasionally read the log for debugging purposes.  Why might a writer-priority solution be appropriate in this scenario?  What are the potential downsides?

    *   **Answer:**  A writer-priority solution could be appropriate if it's crucial to ensure that log entries are written to the file promptly.  Delaying writes could result in loss of important diagnostic information. The potential downsides include reader starvation, where debuggers might have to wait a long time to access the log if writers are constantly writing.  This could hinder the debugging process.

2.  **Code Modification:** Modify the C code example to include a mechanism to prevent indefinite reader starvation.  One possible approach is to limit the number of consecutive writes that can occur before allowing readers to access the resource.

    *   **Answer:** (This is a more complex modification and depends on the specific mechanism chosen.) Here's one approach using a writer count and a reader wait semaphore:

    ```c
    #include <stdio.h>
    #include <stdlib.h>
    #include <pthread.h>
    #include <semaphore.h>
    #include <unistd.h>

    sem_t wrt, mutex, read_ok; // Added read_ok semaphore
    int readcount = 0;
    int writecount = 0;       // Keep track of consecutive writes
    int max_writes = 3;      // Maximum consecutive writes before allowing readers

    void *writer(void *arg) {
        while (1) {
            sem_wait(&wrt);
            printf("Writer %d is writing...\n", *(int*)arg);
            sleep(1);
            printf("Writer %d finished writing\n", *(int*)arg);

            writecount++;

            if (writecount >= max_writes) {
                printf("Max writes reached. Signaling readers.\n");
                sem_post(&read_ok);   // Allow readers to proceed
                writecount = 0;      // Reset write count
            } else {
              sem_post(&wrt); //Signal writer can do next write if max isn't reached
            }
            sleep(1);
        }
        return NULL;
    }

    void *reader(void *arg) {
        while (1) {
            sem_wait(&read_ok);   // Wait for permission to read
            sem_wait(&mutex);
            readcount++;
            if (readcount == 1) {
                sem_wait(&wrt);
            }
            sem_post(&mutex);
            sem_post(&read_ok);

            printf("Reader %d is reading. Readcount: %d\n", *(int*)arg, readcount);
            sleep(1);

            sem_wait(&mutex);
            readcount--;
            printf("Reader %d finished reading. Readcount: %d\n", *(int*)arg, readcount);
            if (readcount == 0) {
                sem_post(&wrt);
            }
            sem_post(&mutex);
            sleep(1);
        }
        return NULL;
    }

    int main() {
        pthread_t readers[3], writers[2];
        int reader_ids[3] = {1, 2, 3};
        int writer_ids[2] = {1, 2};

        sem_init(&mutex, 0, 1);
        sem_init(&wrt, 0, 1);
        sem_init(&read_ok, 0, 1); // Initialize the read_ok semaphore

        for (int i = 0; i < 3; i++) {
            pthread_create(&readers[i], NULL, reader, &reader_ids[i]);
        }

        for (int i = 0; i < 2; i++) {
            pthread_create(&writers[i], NULL, writer, &writer_ids[i]);
        }

        for (int i = 0; i < 3; i++) {
            pthread_join(readers[i], NULL);
        }

        for (int i = 0; i < 2; i++) {
            pthread_join(writers[i], NULL);
        }

        sem_destroy(&mutex);
        sem_destroy(&wrt);
        sem_destroy(&read_ok); // Destroy the read_ok semaphore

        return 0;
    }
    ```

    Key changes:

    *   **`read_ok` Semaphore:** A new semaphore `read_ok` is introduced. Readers wait on this semaphore before attempting to acquire mutex to access the `readcount` and thus start reading. This gives the writers control over when reads can begin.
    *   **`writecount` Variable:** The `writecount` variable keeps track of the number of consecutive write operations.
    *   **`max_writes` Variable:** This is set to limit the number of consecutive writes.
    *   **Writer Logic:** After each write, the `writecount` is incremented. If `writecount` reaches `max_writes`, then `read_ok` is signaled which will allow readers to access data, the `writecount` is reset to zero.  Otherwise `wrt` is signalled to continue the writer's turn.
    *   **Reader Logic:** `reader` waits on `read_ok` *before* acquiring `mutex` and doing anything else, ensuring that writers have explicitly allowed them to proceed. The original semaphore locking logic follows after.

    This modification allows writers to continue writing for a maximum of `max_writes` times before readers are given a chance to read.  This addresses the potential starvation of readers.  The `max_writes` value can be tuned to suit the application's specific needs.

    **Important Note:** The above modified code is a conceptual illustration and may require adjustments for more robust handling of thread termination and error conditions.

3.  **Semaphore Values:** In the initial state, what are the values of `mutex`, `wrt`, and `readcount`?

    *   **Answer:**
        *   `mutex = 1`
        *   `wrt = 1`
        *   `readcount = 0`

4.  **Race Condition:** Explain why the `mutex` semaphore is essential for protecting the `readcount` variable. What could happen if it was removed?

    *   **Answer:** The `mutex` semaphore is essential because `readcount` is a shared variable accessed and modified by multiple reader threads concurrently. Without the `mutex`, a race condition could occur. For example:
        *   Two readers could both read `readcount` at the same time (e.g., `readcount = 0`).
        *   Both readers would then increment `readcount` and write the new value back (e.g., both write `1`).
        *   Ideally, `readcount` should be 2 after both readers increment it, but because of the race condition, it ends up as 1.
        *   This incorrect `readcount` value could then lead to errors in managing the `wrt` semaphore, potentially allowing a writer to access the shared resource while readers are still present, violating the mutual exclusion requirement.

5.  **Deadlock Prevention:** Explain why the presented semaphore code avoids deadlock between readers and writers.

    *   **Answer:** The code is structured to prevent deadlock primarily by carefully ordering the semaphore acquisitions. Readers acquire `mutex` *before* checking `readcount` and acquiring `wrt`. Writers only acquire `wrt`. The key is that no process acquires a second semaphore while holding the first, *except* readers who acquire `wrt` only if they are the *first* reader. When the last reader finishes, only then is `wrt` released and available for writers.
        If the reader acquired `mutex` and then tried to acquire `wrt` while a writer held `wrt` then requested `mutex` it would cause a deadlock.

This comprehensive guide provides a solid foundation for understanding and implementing the readers-writers problem with writer priority using semaphores.  Remember to practice implementing the code and experimenting with different scenarios to solidify your understanding. Good luck!
