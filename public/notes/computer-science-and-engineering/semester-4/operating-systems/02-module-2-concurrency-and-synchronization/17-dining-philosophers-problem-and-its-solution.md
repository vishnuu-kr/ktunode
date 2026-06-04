---
title: "Dining Philosophers Problem and its solution"
subject: "OPERATING SYSTEMS"
module: "Module 2: Concurrency and Synchronization  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8afb3"
status: "completed"
scrapedAt: "2026-05-20T16:14:13.231Z"
---
# OPERATING SYSTEMS: Module 2 - Concurrency and Synchronization
## Dining Philosophers Problem and its Solution

**Learning Outcomes:**

*   Understand the Dining Philosophers Problem and its significance in concurrent programming.
*   Identify the challenges associated with implementing a fair and deadlock-free solution.
*   Analyze different solutions to the Dining Philosophers Problem, including their strengths and weaknesses.
*   Implement and evaluate a specific solution to the Dining Philosophers Problem.

---

**1. Introduction to the Dining Philosophers Problem**

*   **Definition:** The Dining Philosophers Problem is a classic synchronization problem used to illustrate the challenges of concurrency control, specifically deadlock and starvation, when multiple processes need to share limited resources.

*   **Scenario:** Imagine five philosophers sitting around a circular table. Each philosopher alternates between thinking and eating. A bowl of noodles is placed in the center of the table for each philosopher.  To eat, a philosopher needs two chopsticks. There is one chopstick between each pair of philosophers.

*   **Problem:** Each philosopher can only pick up one chopstick at a time. If all philosophers simultaneously pick up their left chopstick, they will all be waiting for their right chopstick, which is held by their neighbor. This leads to a *deadlock* where no one can eat.

*   **Relevance:**
    *   Models real-world resource allocation scenarios.
    *   Highlights the importance of careful resource management in concurrent systems.
    *   Illustrates the potential for deadlock and starvation when resources are shared.

**2. Key Concepts and Definitions**

*   **Concurrency:**  The ability of a system to perform multiple tasks seemingly simultaneously. This can be achieved through interleaving (time-sharing) or true parallelism (using multiple processors).

*   **Synchronization:** The process of coordinating the execution of multiple processes or threads to ensure data consistency and avoid race conditions.  Key synchronization mechanisms include:
    *   **Mutexes:**  Binary semaphores that protect access to a shared resource, allowing only one thread/process to access it at a time.
    *   **Semaphores:** Integer variables used to signal and control access to shared resources. They can be binary (like mutexes) or counting.
    *   **Monitors:** High-level synchronization constructs that encapsulate shared data and the procedures that operate on it, providing mutual exclusion and condition synchronization.

*   **Deadlock:** A situation where two or more processes are blocked indefinitely, waiting for each other to release resources.

*   **Starvation:** A situation where a process is repeatedly denied access to a resource, even though the resource is available.  This can happen even without deadlock.

*   **Critical Section:** A section of code that accesses shared resources and must be protected from concurrent access by multiple processes/threads.

**3. Challenges in Solving the Dining Philosophers Problem**

*   **Deadlock Prevention:**  Designing a system to prevent the conditions that lead to deadlock from occurring.
    *   **Mutual Exclusion:** We need chopsticks to be held exclusively by one philosopher at a time.
    *   **Hold and Wait:** Philosophers must not hold one chopstick while waiting for another.
    *   **No Preemption:** Chopsticks cannot be forcibly taken away from a philosopher holding it.
    *   **Circular Wait:** A circular chain of philosophers waiting for each other must be avoided.

*   **Starvation Prevention:**  Ensuring that no philosopher is perpetually denied the opportunity to eat. This requires fairness in resource allocation.

*   **Efficiency:** Solutions should not introduce excessive overhead or significantly reduce the concurrency of the system.

**4. Potential Solutions to the Dining Philosophers Problem**

*   **4.1. Allow Only Four Philosophers at the Table:**

    *   **Description:** Limiting the number of philosophers allowed at the table to four breaks the circular wait condition necessary for deadlock.
    *   **Implementation:**  Use a semaphore to control the number of philosophers allowed at the table.
    *   **Advantages:** Simple and prevents deadlock.
    *   **Disadvantages:** Reduces concurrency by preventing one philosopher from ever eating concurrently.
    *   **Example (Pseudocode):**

    ```pseudocode
    semaphore table_access = 4; // Initialize to 4

    philosopher(i):
        while (true):
            think();
            wait(table_access); // Acquire access to the table (decrement semaphore)
            pickup_left_chopstick(i);
            pickup_right_chopstick(i);
            eat();
            putdown_right_chopstick(i);
            putdown_left_chopstick(i);
            signal(table_access); // Release access to the table (increment semaphore)
    ```

*   **4.2. Asymmetric Solution:**

    *   **Description:** Make one philosopher (e.g., philosopher 5) pick up the chopsticks in the reverse order (right then left).
    *   **Implementation:** A simple `if` statement to control the order chopsticks are picked up.
    *   **Advantages:**  Breaks the symmetry that leads to deadlock.
    *   **Disadvantages:** Can be complex to implement correctly.  Still needs careful implementation to avoid race conditions during chopstick pickup.
    *   **Example (Pseudocode):**

    ```pseudocode
    philosopher(i):
        while (true):
            think();
            if (i == 4): // Philosopher 5
                pickup_right_chopstick(i);
                pickup_left_chopstick(i);
            else:
                pickup_left_chopstick(i);
                pickup_right_chopstick(i);
            eat();
            putdown_right_chopstick(i);
            putdown_left_chopstick(i);
    ```

*   **4.3. Using a Monitor:**

    *   **Description:** Use a monitor to manage chopstick access and philosopher states.  The monitor provides mutual exclusion and allows philosophers to wait until both chopsticks are available.
    *   **Implementation:** The monitor maintains the state of each philosopher (THINKING, HUNGRY, EATING) and provides methods to pick up and put down chopsticks. Condition variables are used to signal philosophers when their chopsticks become available.
    *   **Advantages:**  Provides a structured and well-defined approach to synchronization. Can prevent deadlock and starvation with appropriate signaling.
    *   **Disadvantages:** More complex to implement than simpler solutions.

    *   **Example (Pseudocode - conceptual):**

    ```pseudocode
    Monitor DiningTable:
        enum State { THINKING, HUNGRY, EATING };
        State state[5];  // Philosopher states
        Condition self[5]; // Condition variables for each philosopher

        pickup(int i):
            state[i] = HUNGRY;
            test(i);       // Check if can eat
            if (state[i] != EATING):
                self[i].wait(); // Wait until chopsticks are available

        putdown(int i):
            state[i] = THINKING;
            test((i + 4) % 5); // Check neighbors if they can eat
            test((i + 1) % 5);

        test(int i):
            if (state[i] == HUNGRY &&
                state[(i + 4) % 5] != EATING &&
                state[(i + 1) % 5] != EATING):
                state[i] = EATING;
                self[i].signal(); // Signal philosopher i

    philosopher(i):
        while (true):
            think();
            DiningTable.pickup(i);
            eat();
            DiningTable.putdown(i);
    ```

*   **4.4. Resource Hierarchy (Ordering):**

    *   **Description:** Assign an order to the chopsticks (e.g., 1 to 5).  Force all philosophers to pick up chopsticks in ascending order.
    *   **Implementation:** Before picking up a chopstick, check if it is the next one in the order. If not, wait.
    *   **Advantages:** Prevents circular wait and therefore deadlock.
    *   **Disadvantages:** Can slightly limit concurrency, as philosophers are forced to acquire resources in a specific order.
    *   **Example (Conceptual - requires mutexes for each chopstick):**

    ```pseudocode
    philosopher(i):
        while (true):
            think();

            // Acquire chopsticks in ascending order (assume chopsticks are numbered)
            if (i < (i + 1) % 5) { // Standard philosophers
                lock(chopstick[i]);    // Lock left chopstick
                lock(chopstick[(i + 1) % 5]); // Lock right chopstick
            } else { //Philosopher 5, acquiring in reverse to break the deadlock
                lock(chopstick[(i + 1) % 5]); // Lock right chopstick
                lock(chopstick[i]);    // Lock left chopstick
            }


            eat();
            unlock(chopstick[i]);
            unlock(chopstick[(i + 1) % 5]);
    ```

**5. Implementing and Evaluating a Solution (Example: Semaphore-based solution with a table access limit)**

*   **Implementation Notes (C/C++ with pthreads):**

```c++
#include <iostream>
#include <pthread.h>
#include <semaphore.h>
#include <unistd.h> // for sleep()

#define NUM_PHILOSOPHERS 5

sem_t chopsticks[NUM_PHILOSOPHERS];
sem_t table_access; // Limits the number of philosophers at the table

void *philosopher(void *arg) {
    int id = *(int *)arg;
    int left_chopstick = id;
    int right_chopstick = (id + 1) % NUM_PHILOSOPHERS;

    while (true) {
        // Thinking
        std::cout << "Philosopher " << id << " is thinking." << std::endl;
        sleep(rand() % 3 + 1); // Simulate thinking

        // Eating
        std::cout << "Philosopher " << id << " is hungry." << std::endl;

        sem_wait(&table_access); // Enter critical section (table access)

        sem_wait(&chopsticks[left_chopstick]);
        std::cout << "Philosopher " << id << " picked up left chopstick." << std::endl;

        sem_wait(&chopsticks[right_chopstick]);
        std::cout << "Philosopher " << id << " picked up right chopstick." << std::endl;

        std::cout << "Philosopher " << id << " is eating." << std::endl;
        sleep(rand() % 3 + 1); // Simulate eating

        sem_post(&chopsticks[left_chopstick]);
        std::cout << "Philosopher " << id << " put down left chopstick." << std::endl;

        sem_post(&chopsticks[right_chopstick]);
        std::cout << "Philosopher " << id << " put down right chopstick." << std::endl;

        sem_post(&table_access); // Exit critical section
    }
    return NULL;
}

int main() {
    pthread_t threads[NUM_PHILOSOPHERS];
    int philosopher_ids[NUM_PHILOSOPHERS];

    // Initialize semaphores
    sem_init(&table_access, 0, NUM_PHILOSOPHERS - 1); // Allow 4 philosophers max
    for (int i = 0; i < NUM_PHILOSOPHERS; i++) {
        sem_init(&chopsticks[i], 0, 1);
    }

    // Create threads
    for (int i = 0; i < NUM_PHILOSOPHERS; i++) {
        philosopher_ids[i] = i;
        pthread_create(&threads[i], NULL, philosopher, &philosopher_ids[i]);
    }

    // Join threads (optional, as they run forever)
    for (int i = 0; i < NUM_PHILOSOPHERS; i++) {
        pthread_join(threads[i], NULL);
    }

    // Destroy semaphores (not reached in this example, but good practice)
    sem_destroy(&table_access);
    for (int i = 0; i < NUM_PHILOSOPHERS; i++) {
        sem_destroy(&chopsticks[i]);
    }
    return 0;
}
```

*   **Evaluation:**
    *   **Deadlock Prevention:** The `table_access` semaphore prevents more than four philosophers from being hungry at the same time, breaking the circular wait condition.
    *   **Starvation:** While not guaranteed, starvation is less likely compared to a naive solution where all philosophers try to grab chopsticks simultaneously.  The `sleep()` calls add randomness to the timing, improving fairness.  However, true fairness would require more sophisticated mechanisms.
    *   **Concurrency:**  Limits concurrency to four philosophers eating or trying to eat at any given time.  This is a trade-off to prevent deadlock.

**6. Important Points to Remember**

*   The Dining Philosophers Problem is a powerful analogy for resource allocation in concurrent systems.
*   Deadlock and starvation are common problems in concurrent programming.
*   Solutions to the Dining Philosophers Problem often involve trade-offs between deadlock prevention, starvation avoidance, and concurrency.
*   Monitors provide a structured approach to solving synchronization problems, but can be more complex to implement.
*   Careful design and implementation are essential to ensure the correctness and fairness of concurrent systems.

**7. Practice Questions/Exercises**

1.  **Explain the conditions necessary for deadlock to occur in the Dining Philosophers Problem.**
    *   **Answer:**
        *   Mutual Exclusion: Chopsticks are held exclusively.
        *   Hold and Wait: Philosophers hold a chopstick while waiting for another.
        *   No Preemption: Chopsticks cannot be forcibly taken away.
        *   Circular Wait: A circular chain of philosophers waiting for each other.

2.  **Compare and contrast the "Allow Only Four Philosophers" solution and the "Asymmetric Solution" to the Dining Philosophers Problem.  What are the advantages and disadvantages of each?**
    *   **Answer:**
        *   **Allow Only Four:**  Simple, prevents deadlock.  Disadvantage: Reduces concurrency.
        *   **Asymmetric:**  Breaks symmetry, potentially higher concurrency.  Disadvantage: More complex to implement correctly, potential race conditions.

3.  **Implement the Dining Philosophers Problem using pthreads and semaphores, but *without* using the `table_access` semaphore.  Run your program and observe what happens.  How likely is it that your program will deadlock?**
    *   **Answer:** The program is highly likely to deadlock if all philosophers simultaneously grab their left chopstick.  The likelihood depends on the timing of the threads, but without any deadlock prevention mechanism, it's almost guaranteed to happen eventually.

4.  **Modify the Monitor-based solution to ensure *fairness*.  How can you prevent starvation in this approach?**
    *   **Answer:** You could implement a queuing mechanism within the monitor.  Philosophers who have been waiting the longest get priority access to the chopsticks. This could involve keeping track of timestamps or using a first-in-first-out (FIFO) queue to manage the order in which philosophers are allowed to eat. A possible implementation might store requests in a queue inside the `pickup` function and serve them in order inside the `test` function.

5.  **Explain the "Resource Hierarchy" approach to solving the Dining Philosophers Problem. How does it prevent deadlock?**
    *   **Answer:** The "Resource Hierarchy" approach assigns a unique number to each chopstick. Philosophers are required to pick up chopsticks in ascending order (based on their number). This prevents circular wait because if a philosopher is waiting for a higher-numbered chopstick, no other philosopher can be waiting for a lower-numbered chopstick held by the first philosopher, thus breaking the circular dependency.
---
These detailed notes cover the core concepts, solutions, and implementation aspects of the Dining Philosophers Problem. The practice questions and exercises provide opportunities for deeper understanding and application of the concepts. Remember to focus on the trade-offs involved in different solutions and the importance of careful design to avoid deadlock and starvation in concurrent systems.
