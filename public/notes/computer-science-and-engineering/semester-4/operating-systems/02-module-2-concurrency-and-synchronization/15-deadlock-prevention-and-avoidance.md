---
title: "Deadlock Prevention and Avoidance"
subject: "OPERATING SYSTEMS"
module: "Module 2: Concurrency and Synchronization  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8afb1"
status: "completed"
scrapedAt: "2026-05-20T16:14:11.784Z"
---
# OPERATING SYSTEMS - Module 2: Concurrency and Synchronization - Deadlock Prevention and Avoidance

## Introduction

This module delves into the crucial concepts of Deadlock Prevention and Avoidance, both vital strategies for handling deadlocks in operating systems.  Understanding these approaches is essential for building robust and reliable concurrent systems.  We will explore the conditions that lead to deadlocks and how to strategically prevent them or avoid them during resource allocation.

## Learning Outcomes

Upon completion of this module, you will be able to:

*   **Understand the necessary conditions for a deadlock to occur.**
*   **Explain the strategies for deadlock prevention and their limitations.**
*   **Describe the Banker's Algorithm for deadlock avoidance.**
*   **Differentiate between deadlock prevention and deadlock avoidance.**
*   **Evaluate the tradeoffs between deadlock prevention and deadlock avoidance.**

## 1. Understanding Deadlock Conditions

### 1.1. What is a Deadlock?

A deadlock is a situation where two or more processes are blocked indefinitely, each waiting for a resource held by one of the other processes.  No process can proceed, resulting in a standstill.

### 1.2. Necessary Conditions for Deadlock (Coffman Conditions)

For a deadlock to occur, *all* four of the following conditions must be simultaneously true:

*   **Mutual Exclusion:**  At least one resource must be held in a non-sharable mode, meaning only one process can use it at a time.  If another process requests it, it must wait until the resource is released. Examples include printers, tape drives, and non-reentrant sections of code.

*   **Hold and Wait:** A process holding at least one resource is waiting to acquire additional resources held by other processes.  The process holds onto existing resources while waiting for new ones.

*   **No Preemption:** A resource can be released only voluntarily by the process holding it, after that process has completed its task.  The operating system cannot forcibly take a resource away from a process.

*   **Circular Wait:** A set {P0, P1, ..., Pn} of waiting processes exists such that P0 is waiting for a resource held by P1, P1 is waiting for a resource held by P2, ..., Pn-1 is waiting for a resource held by Pn, and Pn is waiting for a resource held by P0.

**Example:**

Imagine two processes, P1 and P2, and two resources, R1 and R2.

1.  P1 requests and is allocated R1.
2.  P2 requests and is allocated R2.
3.  P1 then requests R2 (which is held by P2).  P1 is now waiting.
4.  P2 then requests R1 (which is held by P1).  P2 is now waiting.

All four conditions are met:

*   **Mutual Exclusion:** R1 and R2 are assumed to be exclusive resources.
*   **Hold and Wait:** P1 holds R1 and waits for R2; P2 holds R2 and waits for R1.
*   **No Preemption:** Neither R1 nor R2 can be forcibly taken away from P1 or P2, respectively.
*   **Circular Wait:** P1 waits for P2, and P2 waits for P1.

## 2. Deadlock Prevention

Deadlock prevention aims to prevent deadlocks by ensuring that *at least one* of the four necessary conditions for deadlock cannot hold.  This is typically achieved by imposing constraints on resource requests.

### 2.1. Preventing Mutual Exclusion

*   **Approach:** This is often the most difficult condition to tackle, as some resources are inherently non-sharable (e.g., printers, tape drives).
*   **Strategies:**
    *   **Spooling:**  For resources like printers, spooling can be used.  Each process writes its output to a spool directory, which is then printed by a single printer process.  This allows multiple processes to "use" the printer concurrently (virtually), eliminating mutual exclusion.
    *   **Making resources shareable:** For read-only data, making it shareable removes the mutual exclusion constraint.
*   **Limitations:**  Not always possible or practical.  Some resources *must* be mutually exclusive for correctness.

### 2.2. Preventing Hold and Wait

*   **Approach:**  Require a process to request and be allocated *all* of its required resources *before* it begins execution.  Alternatively, a process must release all currently held resources before requesting any new ones.
*   **Strategies:**
    *   **Request all resources upfront:**  The process requests all resources it needs at the start.  If any resource is unavailable, the process waits, but it holds no resources while waiting.
    *   **Release all resources before requesting more:** If a process needs additional resources, it must release all currently held resources and then request all the resources it needs (including the released ones) at once.
*   **Limitations:**
    *   **Resource Underutilization:** Resources allocated upfront might not be used for a long time, leading to inefficiency.
    *   **Process Starvation:** A process might wait indefinitely if its required resources are always held by other processes.
    *   **Predictability Requirement:**  Requires knowing all resource needs in advance, which is not always possible.

**Example:**

A process needs to copy data from a DVD to a hard drive and then print the data.

*   **Hold and Wait Prevention (Upfront Allocation):** The process requests the DVD drive, hard drive space, and printer at the start.  It waits until all are available before proceeding.
*   **Hold and Wait Prevention (Release Before Request):** The process requests the DVD drive and copies the data to the hard drive.  It then releases the DVD drive, requests the printer and the hard drive space, and prints the data.

### 2.3. Preventing No Preemption

*   **Approach:**  If a process holding some resources requests another resource that cannot be immediately allocated to it, the operating system preempts the currently held resources and releases them. The process can then request the released resources along with the additional resource.
*   **Strategies:**
    *   **Preemption of resources:** When a process requests a resource that is unavailable, all resources currently held by the process are released. These released resources are added to the list of resources for which the process is waiting. The process will be restarted only when it can regain its old resources, as well as the new one that it is requesting.
    *   **Preemptible resource types:** If several copies of a resource are available (e.g., memory), preemption is generally applicable.
*   **Limitations:**
    *   **Applicability:** Not all resources are easily preemptible (e.g., printers).
    *   **Complexity:**  Requires careful management of resource states and process contexts, increasing system overhead.
    *   **Loss of Work:**  Preempting a resource in the middle of its use might lead to loss of work and necessitate restarting the operation.

**Example:**

A process is using a printer and then requests a scanner. If the scanner is unavailable, the operating system preempts the printer, effectively stopping the printing job.  The process must later request both the printer and scanner again to complete its task.

### 2.4. Preventing Circular Wait

*   **Approach:** Impose a total ordering of all resource types.  Each process is required to request resources in an increasing order of enumeration.
*   **Strategies:**
    *   **Global Ordering:** Assign a unique number to each resource type. A process can request resources only in ascending order of these numbers.
*   **Limitations:**
    *   **Difficulty of Assignment:** It can be difficult to assign a suitable order to all resources, especially when new resource types are added to the system.
    *   **Inefficiency:** Processes might need to request resources in an order that is not the most efficient for their execution.
    *   **Overhead:** Imposing and enforcing the ordering can add overhead to the system.

**Example:**

Assume we have resources R1, R2, R3, and R4, ordered as R1 < R2 < R3 < R4.  A process needing R3 and R1 must request R1 first, then R3.  It cannot request R3 before R1.

## 3. Deadlock Avoidance

Deadlock avoidance uses information about which resources a process *will* request in the future to make allocation decisions that ensure the system will never enter a deadlock state.  The system checks each resource request to ensure that granting the request will not lead to a future deadlock.  A safe state is one where the system can allocate resources to each process (up to its maximum needs) in some order and still avoid a deadlock.

### 3.1. Key Concepts

*   **Safe State:**  A state is safe if the system can allocate resources to each process (in some order) up to its maximum needs and still avoid a deadlock.
*   **Unsafe State:**  A state is unsafe if there is *no* guarantee that the system can allocate resources to each process without entering a deadlock. Note: An unsafe state *does not necessarily mean* a deadlock will occur, only that it *could* occur.
*   **Maximum Need:**  The maximum number of resources of each type that a process might request during its lifetime.
*   **Allocation:** The resources currently allocated to a process.
*   **Available:** The resources currently available in the system.
*   **Need:** The remaining resources that a process still needs (Maximum Need - Allocation).

### 3.2. Resource Allocation Graph Algorithm (for Single Instance Resources)

This algorithm is applicable only when each resource type has only one instance. It uses a modified Resource Allocation Graph to detect cycles, which indicate potential deadlocks. A *claim edge* indicates a process *may* request a resource in the future.  The edge is converted to a *request edge* when the process actually makes the request. The request edge is converted back to an assignment edge when the resource is allocated.

### 3.3. Banker's Algorithm (for Multiple Instance Resources)

This is a more powerful and widely used algorithm for deadlock avoidance when dealing with multiple instances of each resource type.  It requires the system to know in advance the maximum resource needs of each process.

*   **Data Structures:**
    *   **`n`**: Number of processes in the system.
    *   **`m`**: Number of resource types.
    *   **`Available[m]`**: A vector of length `m` indicating the number of available resources of each type.
    *   **`Max[n][m]`**: An `n x m` matrix defining the maximum demand of each process for each resource type.  `Max[i][j]` is the maximum number of instances of resource type `j` that process `i` may need.
    *   **`Allocation[n][m]`**: An `n x m` matrix defining the number of resources of each type currently allocated to each process. `Allocation[i][j]` is the number of instances of resource type `j` currently allocated to process `i`.
    *   **`Need[n][m]`**: An `n x m` matrix indicating the remaining resource need of each process. `Need[i][j] = Max[i][j] - Allocation[i][j]`.

*   **Algorithm:**

    1.  **`Work = Available`**
    2.  **`Finish[n] = false`** (for all processes)
    3.  **Find an index `i` such that both:**
        *   `Finish[i] == false`
        *   `Need[i][j] <= Work[j]` for all `j` (i.e., the process's need is less than or equal to the available resources for all resource types).
        If no such `i` exists, go to step 5.
    4.  **`Work = Work + Allocation[i]`**  (Simulate allocating the resources to process `i` and then having it finish and release all resources).
        **`Finish[i] = true`**
        Go to step 3.
    5.  **If `Finish[i] == true` for all `i`, then the system is in a safe state.** Otherwise, the system is in an unsafe state.

*   **Resource-Request Algorithm:**

    Suppose process `Pi` requests resources `Requesti[m]`.

    1.  **`If Requesti[j] <= Need[i][j]` for all `j`, go to step 2. Otherwise, raise an error condition (process has exceeded its maximum claim).`**
    2.  **`If Requesti[j] <= Available[j]` for all `j`, go to step 3. Otherwise, Pi must wait because the resources are not available.`**
    3.  **Pretend to allocate the requested resources to Pi by modifying the state as follows:**
        *   `Available = Available - Requesti;`
        *   `Allocation[i] = Allocation[i] + Requesti;`
        *   `Need[i] = Need[i] - Requesti;`
    4.  **Run the Safety Algorithm.  If the resulting state is safe, the transaction is completed, and process Pi is allocated its resources.  Otherwise, restore the original state values and make Pi wait.**

**Example:**

Consider the following system state:

*   **Processes:** P0, P1, P2, P3, P4
*   **Resource Types:** A (10 instances), B (5 instances), C (7 instances)

*   **`Available`: (3, 3, 2)`**
*   **`Max`:**
    ```
    P0: (7, 5, 3)
    P1: (3, 2, 2)
    P2: (9, 0, 2)
    P3: (2, 2, 2)
    P4: (4, 3, 3)
    ```
*   **`Allocation`:**
    ```
    P0: (0, 1, 0)
    P1: (2, 0, 0)
    P2: (3, 0, 2)
    P3: (2, 1, 1)
    P4: (0, 0, 2)
    ```
*   **`Need`:**
    ```
    P0: (7, 4, 3)
    P1: (1, 2, 2)
    P2: (6, 0, 0)
    P3: (0, 1, 1)
    P4: (4, 3, 1)
    ```

**Is the system in a safe state?**

Let's apply the Banker's Algorithm:

1.  **`Work = Available = (3, 3, 2)`**
2.  **`Finish = (false, false, false, false, false)`**

3.  **Iteration 1:**
    *   **P1:** `Need[1] (1, 2, 2) <= Work (3, 3, 2)` is true.
    *   `Work = Work + Allocation[1] = (3, 3, 2) + (2, 0, 0) = (5, 3, 2)`
    *   `Finish[1] = true`

4.  **Iteration 2:**
    *   **P3:** `Need[3] (0, 1, 1) <= Work (5, 3, 2)` is true.
    *   `Work = Work + Allocation[3] = (5, 3, 2) + (2, 1, 1) = (7, 4, 3)`
    *   `Finish[3] = true`

5.  **Iteration 3:**
    *   **P4:** `Need[4] (4, 3, 1) <= Work (7, 4, 3)` is true.
    *   `Work = Work + Allocation[4] = (7, 4, 3) + (0, 0, 2) = (7, 4, 5)`
    *   `Finish[4] = true`

6.  **Iteration 4:**
    *   **P0:** `Need[0] (7, 4, 3) <= Work (7, 4, 5)` is true.
    *   `Work = Work + Allocation[0] = (7, 4, 5) + (0, 1, 0) = (7, 5, 5)`
    *   `Finish[0] = true`

7.  **Iteration 5:**
    *   **P2:** `Need[2] (6, 0, 0) <= Work (7, 5, 5)` is true.
    *   `Work = Work + Allocation[2] = (7, 5, 5) + (3, 0, 2) = (10, 5, 7)`
    *   `Finish[2] = true`

Since `Finish[i] = true` for all `i`, the system is in a safe state.  A safe sequence is `<P1, P3, P4, P0, P2>`.

**Now, suppose process P1 requests (1, 0, 2).  Can the request be granted?**

1.  `Request1 (1, 0, 2) <= Need[1] (1, 2, 2)`: True
2.  `Request1 (1, 0, 2) <= Available (3, 3, 2)`: True

3.  **Simulate Allocation:**
    *   `Available = (3, 3, 2) - (1, 0, 2) = (2, 3, 0)`
    *   `Allocation[1] = (2, 0, 0) + (1, 0, 2) = (3, 0, 2)`
    *   `Need[1] = (1, 2, 2) - (1, 0, 2) = (0, 2, 0)`

4.  **Run Safety Algorithm with the new state:**

    *   `Work = Available = (2, 3, 0)`
    *   `Finish = (false, false, false, false, false)`

    We can find a safe sequence: `<P1, P3, P4, P0, P2>`.  Therefore, the request can be granted.

*   **Limitations:**
    *   **Requires knowing maximum resource needs in advance:**  This is often unrealistic in practice.
    *   **Resource underutilization:** Processes might be kept waiting even when resources are available if the system can't guarantee a safe state.
    *   **High Overhead:**  The algorithm must be run for every resource request, which adds significant overhead.

## 4. Deadlock Prevention vs. Avoidance: A Comparison

| Feature          | Deadlock Prevention                                                                                                | Deadlock Avoidance                                                                                               |
|-------------------|---------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| **Approach**      | Prevent *any* of the four necessary conditions from holding.                                                         | Dynamically examine the resource-allocation state to ensure a circular wait condition can never occur.                |
| **Resource Needs** | No information about maximum resource needs required.                                                               | Requires knowledge of the maximum resource needs of each process in advance.                                      |
| **Optimality**     | More restrictive; can lead to lower resource utilization.                                                            | Less restrictive than prevention, potentially leading to higher resource utilization.                             |
| **Complexity**     | Simpler to implement compared to avoidance, as it focuses on breaking one of the four deadlock conditions.           | More complex to implement, requiring algorithms like the Banker's Algorithm to check for safe states.           |
| **Overhead**       | Can introduce overhead due to resource restrictions.                                                                | Introduces overhead due to constant checking for safe states.                                                     |
| **Adaptability**    | Less adaptable to dynamic changes in resource needs.                                                               | More adaptable to changing resource needs, as it dynamically evaluates the safety of the system state.           |

## 5. Practice Questions and Exercises

1.  **Question:**  List the four necessary conditions for a deadlock to occur.
    **Answer:** Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait.

2.  **Question:**  Explain how preventing the "Hold and Wait" condition can lead to resource underutilization.
    **Answer:** Preventing "Hold and Wait" often requires processes to request all their resources at the beginning.  These resources might remain allocated but unused for extended periods, preventing other processes from using them, leading to underutilization.

3.  **Question:**  What is a "safe state" in the context of deadlock avoidance, and why is it important?
    **Answer:** A safe state is a state in which the system can allocate resources to each process (up to its maximum needs) in some order and still avoid a deadlock. It's important because it guarantees that the system can complete all processes without entering a deadlock.

4.  **Question:**  Given the following system state, use the Banker's Algorithm to determine if the system is in a safe state.  If it is, provide a safe sequence.

    *   **Processes:** P1, P2, P3
    *   **Resource Type:** R (10 instances)
    *   **Available:** 3
    *   **Max:** P1: 9, P2: 7, P3: 5
    *   **Allocation:** P1: 2, P2: 3, P3: 2

    **Answer:**

    1.  **Need:** P1: 7, P2: 4, P3: 3
    2.  **Work = Available = 3**
    3.  **Finish = (false, false, false)**

    *   **P3:** Need[3] (3) <= Work (3): True
        *   Work = 3 + 2 = 5
        *   Finish[3] = True
    *   **P2:** Need[2] (4) <= Work (5): True
        *   Work = 5 + 3 = 8
        *   Finish[2] = True
    *   **P1:** Need[1] (7) <= Work (8): True
        *   Work = 8 + 2 = 10
        *   Finish[1] = True

    The system is in a safe state.  A safe sequence is `<P3, P2, P1>`.

5.  **Question:**  Explain the trade-offs between Deadlock Prevention and Deadlock Avoidance in terms of resource utilization and system overhead.
    **Answer:**
    *   **Deadlock Prevention:** Usually leads to lower resource utilization due to strict constraints on resource allocation. However, it often involves less runtime overhead, as the prevention mechanisms are typically implemented once.
    *   **Deadlock Avoidance:** Aims for higher resource utilization by dynamically checking for safe states. This dynamic checking, however, introduces significant runtime overhead because the Banker's Algorithm (or similar) needs to be executed for each resource request.

6.  **Question:** Why is it often impossible to implement deadlock prevention by preventing the mutual exclusion condition?
    **Answer:**  Mutual exclusion is a requirement for some resource types. Certain resources, such as printers, tape drives, and critical sections, can only be used by one process at a time. These non-sharable resources inherently require mutual exclusion, making it impossible to eliminate this condition for these resources.

## 6. Important Points to Remember

*   Deadlock can only occur when *all* four necessary conditions (Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait) are simultaneously true.
*   Deadlock prevention aims to break one or more of these conditions.
*   Deadlock avoidance requires information about future resource requests.
*   The Banker's Algorithm is a widely used deadlock avoidance algorithm.
*   Deadlock Prevention typically results in lower resource utilization but less overhead compared to Deadlock Avoidance.
*   Choosing the appropriate strategy (prevention, avoidance, or simply ignoring the problem) depends on the specific characteristics of the system and its resource usage patterns.
