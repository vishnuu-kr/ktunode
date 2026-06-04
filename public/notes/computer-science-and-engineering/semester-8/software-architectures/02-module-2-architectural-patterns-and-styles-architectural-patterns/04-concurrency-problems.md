---
title: "Concurrency Problems"
subject: "SOFTWARE ARCHITECTURES"
module: "Module 2: Architectural Patterns and Styles:   Architectural Patterns"
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8c9b9"
status: "completed"
scrapedAt: "2026-05-20T17:26:18.414Z"
---
# Software Architectures: Module 2 - Architectural Patterns and Styles: Architectural Patterns

## Topic: Concurrency Problems

### Learning Outcomes:

*   Understand the fundamental challenges and issues that arise when multiple tasks or threads execute concurrently within a software system.
*   Identify and classify common concurrency problems such as race conditions, deadlocks, livelocks, and starvation.
*   Explain the underlying causes of these problems and their potential impact on system correctness and performance.
*   Recognize the importance of addressing concurrency problems in the design of robust and reliable software architectures.
*   Explore basic strategies and techniques for managing concurrency and mitigating these problems.

---

### 1. Introduction to Concurrency Problems

Concurrency refers to the ability of different parts or units of a program, algorithm, or system to be executed out-of-order or in parallel with the completion of one unit not depending on the completion of others. In modern software, concurrency is prevalent due to multi-core processors, distributed systems, and the need for responsive user interfaces.

However, concurrent execution introduces significant complexity and potential for subtle errors. When multiple threads or processes access and modify shared resources simultaneously, unpredictable behavior can occur, leading to what we call **concurrency problems**.

**Key Concepts:**

*   **Thread:** A single sequence of execution within a process.
*   **Process:** An independent execution environment with its own memory space.
*   **Shared Resource:** Data, memory, files, or hardware that can be accessed by multiple threads or processes.
*   **Atomicity:** An operation that is performed as a single, indivisible unit. It either completes entirely or not at all.

**Why are concurrency problems important in Software Architecture?**

Architectural decisions heavily influence how concurrency is managed. Poor architectural choices can exacerbate concurrency issues, making them difficult to debug and resolve. Understanding these problems is crucial for designing systems that are:

*   **Correct:** Producing the expected results consistently.
*   **Reliable:** Functioning without failure.
*   **Performant:** Executing efficiently.
*   **Scalable:** Handling increasing workloads.

---

### 2. Common Concurrency Problems

Let's delve into the most prevalent concurrency problems:

#### 2.1. Race Condition

**Definition:** A race condition occurs when the output of a program depends on the specific order in which multiple threads or processes access and modify shared data. If the timing of operations is not controlled, the results can be incorrect or unpredictable.

**Underlying Cause:** Non-atomic operations on shared data. When an operation that should be atomic is broken down into multiple steps (read, modify, write), another thread might intervene between these steps.

**Example:**

Imagine a simple counter variable `count` shared by two threads, both trying to increment it.

*   **Initial state:** `count = 0`
*   **Thread A:** Reads `count` (gets 0).
*   **Thread B:** Reads `count` (gets 0).
*   **Thread A:** Calculates `0 + 1 = 1`.
*   **Thread B:** Calculates `0 + 1 = 1`.
*   **Thread A:** Writes `1` back to `count`.
*   **Thread B:** Writes `1` back to `count`.

**Expected result:** `count` should be 2.
**Actual result:** `count` is 1.

This happens because the read-modify-write sequence was not atomic.

**Impact:**
*   Data corruption.
*   Incorrect program logic.
*   Difficult to reproduce and debug.

#### 2.2. Deadlock

**Definition:** A deadlock occurs when two or more threads or processes are blocked indefinitely, each waiting for a resource that is held by another thread/process in the same group.

**Conditions for Deadlock (Coffman Conditions):** For a deadlock to occur, all four of these conditions must hold simultaneously:

1.  **Mutual Exclusion:** At least one resource must be held in a non-shareable mode, meaning only one process can use the resource at any given time.
2.  **Hold and Wait:** A process must be holding at least one resource and waiting to acquire additional resources that are currently held by other processes.
3.  **No Preemption:** Resources cannot be forcibly taken from a process holding them; they must be released voluntarily by the process.
4.  **Circular Wait:** A set of processes $\{P_0, P_1, ..., P_n\}$ exists such that $P_0$ is waiting for a resource held by $P_1$, $P_1$ is waiting for a resource held by $P_2$, ..., $P_{n-1}$ is waiting for a resource held by $P_n$, and $P_n$ is waiting for a resource held by $P_0$.

**Example:**

Consider two threads, Thread X and Thread Y, and two resources, Resource A and Resource B, protected by locks.

*   **Thread X:** Acquires lock for Resource A.
*   **Thread Y:** Acquires lock for Resource B.
*   **Thread X:** Tries to acquire lock for Resource B (but it's held by Thread Y). Thread X waits.
*   **Thread Y:** Tries to acquire lock for Resource A (but it's held by Thread X). Thread Y waits.

Both threads are now waiting for each other indefinitely.

**Impact:**
*   System unresponsiveness.
*   Threads/processes are blocked, leading to resource starvation and reduced throughput.

#### 2.3. Livelock

**Definition:** A livelock occurs when two or more threads or processes change their state in response to each other's actions, but without making any progress. They are not blocked like in a deadlock, but rather are continuously performing actions that prevent them from completing their task.

**Underlying Cause:** Often arises from overly polite or defensive error-handling mechanisms where processes try to resolve contention by yielding or retrying in a way that leads to a cycle.

**Example:**

Imagine two people trying to pass each other in a narrow corridor.

*   **Person A:** Steps to their left to let Person B pass.
*   **Person B:** Steps to their right to let Person A pass.
*   **Both:** Now block each other again.
*   **Person A:** Steps to their right.
*   **Person B:** Steps to their left.
*   **Both:** Block each other again.

They are actively trying to resolve the situation but keep ending up in the same blocked state.

**Impact:**
*   System appears to be running but is not making progress.
*   Similar to deadlock in terms of system unresponsiveness.

#### 2.4. Starvation

**Definition:** Starvation occurs when a thread or process is perpetually denied access to a shared resource or CPU time, even though the resource becomes available periodically. The thread is "starved" of the resources it needs to make progress.

**Underlying Cause:**
*   **Unfair scheduling:** If a thread repeatedly loses out in contention for a resource due to the scheduling algorithm or the priority of other threads.
*   **Resource allocation policies:** Policies that favor certain threads or processes over others.
*   **Deadlock resolution side-effects:** Sometimes, mechanisms to resolve deadlocks can inadvertently cause starvation for other threads.

**Example:**

Consider a system with a priority-based scheduler and a shared resource.

*   **High-priority threads:** Repeatedly acquire and release the resource.
*   **Low-priority thread:** Needs the resource but always gets preempted by a new high-priority thread arriving just as it's about to acquire the resource.

The low-priority thread can never get enough continuous access to the resource to complete its task.

**Impact:**
*   Unresponsive parts of the system.
*   Degraded performance for certain operations or users.
*   Can lead to perceived system failures.

---

### 3. Impact of Concurrency Problems on Software Architecture

The way concurrency is handled at the architectural level has a profound impact:

*   **Choice of Concurrency Models:**
    *   **Threads vs. Processes:** Threads share memory, increasing the risk of race conditions but allowing faster communication. Processes have separate memory, reducing direct race condition risks but making inter-process communication more complex.
    *   **Actor Model:** Where independent "actors" communicate via messages, inherently managing concurrency and reducing shared mutable state.
    *   **Message Queues:** Decoupling components and managing asynchronous communication, which can help mitigate some concurrency issues.

*   **Resource Management:**
    *   How shared resources (databases, files, network connections, memory) are accessed and protected.
    *   The use of locks, semaphores, and other synchronization primitives.

*   **Data Sharing Strategies:**
    *   Minimizing shared mutable state is a key principle for reducing concurrency problems.
    *   Using immutable data structures.
    *   Employing thread-local storage.

*   **Error Handling and Recovery:**
    *   How the system responds to failures caused by concurrency issues.
    *   Mechanisms for deadlock detection and resolution.

**Architectural Pitfalls to Avoid:**

*   **Over-reliance on global mutable state:** Makes it hard to reason about concurrent access.
*   **Complex locking hierarchies:** Can easily lead to deadlocks.
*   **Blocking operations:** Can lead to thread exhaustion and deadlocks.
*   **Ignoring the possibility of race conditions:** Assuming operations are atomic when they are not.

---

### 4. Basic Strategies for Managing Concurrency

While detailed solutions are often pattern-specific, here are some fundamental strategies:

#### 4.1. Synchronization Primitives

These are low-level mechanisms to control access to shared resources:

*   **Mutexes (Mutual Exclusion Locks):** Ensure that only one thread can access a critical section of code at a time.
*   **Semaphores:** More general than mutexes, allowing a specified number of threads to access a resource.
*   **Monitors:** Higher-level constructs that encapsulate shared data and synchronization logic.
*   **Read-Write Locks:** Allow multiple readers concurrently but only one writer.

#### 4.2. Immutable Data Structures

**Definition:** Data structures whose state cannot be modified after creation.

**Benefit:** If data is immutable, multiple threads can read it concurrently without any risk of data corruption.

**Example:** `String` objects in Java are immutable.

#### 4.3. Atomic Operations

**Definition:** Operations that appear to happen instantaneously from the perspective of other threads. These are often hardware-supported.

**Example:** `AtomicInteger.incrementAndGet()` in Java performs an atomic increment.

#### 4.4. Thread-Local Storage

**Definition:** Each thread gets its own private copy of a variable.

**Benefit:** Avoids the need for synchronization when threads operate on their own data.

#### 4.5. Message Passing / Actor Model

**Definition:** Components communicate by sending and receiving messages. Each component (actor) has its own state and processes messages sequentially.

**Benefit:** Eliminates shared mutable state by design, making concurrency management more explicit and less error-prone.

#### 4.6. Deadlock Prevention and Detection

*   **Prevention:**
    *   **Resource Ordering:** Enforce a global ordering of all resource types and require processes to request resources in that order.
    *   **Deadlock Avoidance (e.g., Banker's Algorithm):** Dynamically analyze resource allocation requests to ensure the system never enters an unsafe state.
*   **Detection:** Periodically check for cycles in the resource allocation graph.
*   **Recovery:** If a deadlock is detected, kill one or more processes, preempt resources, or roll back processes to a previous state.

---

### 5. Importance in Software Architecture

Understanding concurrency problems is not just about writing correct code; it's about making informed architectural decisions that promote:

*   **Robustness:** The system can withstand concurrent access without failing.
*   **Maintainability:** Architectures that manage concurrency well are easier to understand and modify.
*   **Scalability:** Properly handling concurrency is essential for scaling applications to handle more users or data.
*   **Performance:** Efficient concurrency management can lead to significant performance gains, especially on multi-core systems.

**Key Takeaway:** Architects must consider concurrency from the ground up, not as an afterthought. The choice of patterns, communication mechanisms, and data management strategies directly impacts how well the system handles concurrent operations.

---

### 6. Practice Questions/Exercises

1.  **Scenario:** A banking application where multiple threads can deposit or withdraw money from a shared account.
    *   **Question:** What concurrency problem is most likely to occur if the balance update is not performed atomically? Explain why.
    *   **Answer:** A **race condition**. If two threads try to update the balance simultaneously (e.g., Thread A deposits $100, Thread B withdraws $50), and the operations involve reading the balance, calculating the new balance, and writing it back, one of the operations might overwrite the other, leading to an incorrect final balance.

2.  **Scenario:** Imagine a system with two services, Service A and Service B, that need to communicate. Service A requires a lock on Resource X before it can proceed, and Service B requires a lock on Resource Y before it can proceed.
    *   **Service A:** Acquires lock on Resource Y.
    *   **Service B:** Acquires lock on Resource X.
    *   **Service A:** Now needs to acquire lock on Resource X (held by B).
    *   **Service B:** Now needs to acquire lock on Resource Y (held by A).
    *   **Question:** What concurrency problem has occurred? What are the four conditions that likely led to this?
    *   **Answer:** A **deadlock** has occurred. The four Coffman conditions are likely met:
        *   **Mutual Exclusion:** Resources X and Y are likely held exclusively by A or B.
        *   **Hold and Wait:** Service A holds Y and waits for X; Service B holds X and waits for Y.
        *   **No Preemption:** Neither service can forcibly take the resource from the other.
        *   **Circular Wait:** A waits for B's resource (X), and B waits for A's resource (Y), forming a cycle.

3.  **Scenario:** You are designing a system with a shared queue for processing tasks. If the queue is empty, worker threads wait. When a task is added, one worker is woken up. You've implemented a mechanism where if a worker is woken up but finds the queue empty (perhaps due to a context switch or another worker grabbing the task first), it goes back to waiting.
    *   **Question:** Under what circumstances could this design lead to **starvation**?
    *   **Answer:** If the waking and checking logic is not perfectly atomic, or if there's a very high contention for tasks, a worker might repeatedly wake up, find the queue empty (because another worker got the task in a very short window), and go back to sleep. If this cycle repeats indefinitely for a particular worker while others are successfully processing tasks, that worker can experience starvation. A more common scenario leading to starvation involves unfair scheduling or prioritization where some threads consistently lose out on resource acquisition.

4.  **Question:** How can using **immutable data structures** help prevent concurrency problems?
    *   **Answer:** Immutable data structures cannot be changed after they are created. This means multiple threads can read the same data concurrently without any risk of one thread modifying it while another is reading it. This eliminates the possibility of race conditions when accessing that data for read operations.

5.  **Question:** What is the difference between deadlock and livelock?
    *   **Answer:** In a **deadlock**, threads are blocked and waiting indefinitely for resources held by others. They are essentially frozen. In a **livelock**, threads are not blocked; they are actively changing their state and responding to each other's actions, but these actions prevent them from making any progress towards their goal. They are busy doing nothing productive.

---

### 8. Important Points to Remember

*   **Concurrency is complex:** Even simple operations can become problematic when executed concurrently.
*   **Shared mutable state is the enemy:** Minimize or eliminate shared mutable data whenever possible.
*   **Understand the conditions for deadlock:** Knowing these helps in designing systems to avoid them.
*   **Race conditions are often subtle:** They depend on timing and can be hard to detect and reproduce.
*   **Architectural choices matter:** The way you structure your system for concurrency has a massive impact on its correctness and performance.
*   **No single solution fits all:** Different concurrency problems require different strategies.
*   **Test for concurrency issues:** Use specialized tools and techniques to uncover concurrency bugs.

---
