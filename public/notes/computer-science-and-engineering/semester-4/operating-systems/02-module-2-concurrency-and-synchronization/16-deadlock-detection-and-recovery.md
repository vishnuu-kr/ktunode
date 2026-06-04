---
title: "Deadlock Detection and recovery"
subject: "OPERATING SYSTEMS"
module: "Module 2: Concurrency and Synchronization  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8afb2"
status: "completed"
scrapedAt: "2026-05-20T16:14:12.509Z"
---
# OPERATING SYSTEMS - Module 2: Concurrency and Synchronization - Deadlock Detection and Recovery

## Introduction

This module focuses on deadlock detection and recovery mechanisms within the context of concurrent operating systems. Deadlocks are a significant challenge in concurrent systems and understanding how to detect and recover from them is crucial for ensuring system reliability and performance.

## Learning Outcomes

By the end of this module, you will be able to:

*   Define deadlock and its necessary conditions.
*   Describe the resource allocation graph and its use in deadlock detection.
*   Explain deadlock detection algorithms for single and multiple instances of resource types.
*   Discuss various deadlock recovery strategies.
*   Compare and contrast deadlock detection and deadlock prevention techniques.

## 1. Deadlock: Definition and Necessary Conditions

### 1.1 Definition of Deadlock

A *deadlock* is a situation in which two or more processes are blocked indefinitely, each waiting for a resource that is held by another process in the cycle.  No process can proceed, and the system is effectively stalled.

### 1.2 Necessary Conditions for Deadlock (Coffman Conditions)

All four of these conditions must hold simultaneously for a deadlock to occur:

*   **Mutual Exclusion:** Resources are assigned to only one process at a time (non-sharable resources).  Only one process can use a resource at a given moment.
*   **Hold and Wait:** A process holding at least one resource is waiting to acquire additional resources held by other processes.  A process can hold resources while requesting new ones.
*   **No Preemption:** Resources cannot be forcibly taken away from a process. Only the process holding the resource can voluntarily release it.
*   **Circular Wait:**  A set `{P1, P2, ..., Pn}` of waiting processes exists such that P1 is waiting for a resource held by P2, P2 is waiting for a resource held by P3, ..., and Pn is waiting for a resource held by P1.  A circular dependency exists in the resource requests.

**Important Point:**  If any of these four conditions is NOT met, a deadlock cannot occur.

## 2. Resource Allocation Graph (RAG)

### 2.1 Definition

The Resource Allocation Graph (RAG) is a directed graph that visually represents the state of resource allocation in a system. It helps in detecting deadlocks, particularly in systems with single instances of each resource type.

### 2.2 Components of RAG

*   **Processes (Circles):** Represent the active processes in the system.
*   **Resources (Squares):** Represent the available resources in the system.
*   **Request Edge (Process -> Resource):** An edge directed from a process to a resource indicates that the process is *requesting* that resource.
*   **Assignment Edge (Resource -> Process):** An edge directed from a resource to a process indicates that the resource has been *allocated* to that process.

### 2.3 Deadlock Detection using RAG (Single Instance Resources)

*   **Cycle Detection:** If the Resource Allocation Graph contains a cycle, then a deadlock exists.  The processes and resources involved in the cycle are deadlocked.

**Example:**

Consider the following RAG:

```
Process P1 -> Resource R1 -> Process P2 -> Resource R2 -> Process P1
```

This RAG contains a cycle (P1 -> R1 -> P2 -> R2 -> P1).  Therefore, P1 and P2 are deadlocked. P1 is waiting for R2 (held by P2), and P2 is waiting for R1 (held by P1).

## 3. Deadlock Detection Algorithms

### 3.1 Single Instance of Each Resource Type

For systems where each resource type has only one instance, the Resource Allocation Graph with cycle detection is sufficient for deadlock detection. Standard graph algorithms like Depth-First Search (DFS) can efficiently detect cycles.

### 3.2 Multiple Instances of Each Resource Type

When multiple instances of each resource type exist, the RAG alone is not sufficient.  We need an algorithm that considers the resource availability and process needs. A common algorithm is the *Banker's Algorithm (Used for Deadlock Avoidance) adapted for Detection*.  However, in the context of Detection, we can use a simplified version.

**Data Structures:**

*   **Available:**  A vector of length `m` indicating the number of available instances of each resource type.  `Available[j]` represents the number of instances of resource type `Rj` that are currently available.
*   **Allocation:** An `n x m` matrix defining the number of resources of each type currently allocated to each process. `Allocation[i][j]` represents the number of instances of resource type `Rj` allocated to process `Pi`.
*   **Request:** An `n x m` matrix indicating the current request of each process. `Request[i][j]` represents the number of instances of resource type `Rj` that process `Pi` is requesting.

**Algorithm:**

1.  **Initialization:**
    *   `Work`: A vector of length `m`. Initialize `Work = Available`.
    *   `Finish`: A vector of length `n`.  Initialize `Finish[i] = false` for all `i` (meaning no process is finished).

2.  **Find an `i` such that:**
    *   `Finish[i] == false` and
    *   `Request[i] <= Work` (component-wise comparison)

    If no such `i` exists, go to step 4.

3.  **Simulate the process running:**
    *   `Work = Work + Allocation[i]`
    *   `Finish[i] = true`
    *   Go to step 2.

4.  **Deadlock Detection:**
    *   If `Finish[i] == false` for some `i`, then process `Pi` is deadlocked.

**Explanation:**

The algorithm tries to find a sequence of processes that can complete their execution, assuming all available resources are granted to them. If a process cannot be found that can complete (Request <= Work), and it is not marked as finished, then that process is part of a deadlock.

**Example:**

Consider the following system state:

*   `Processes: P1, P2, P3`
*   `Resources: R1, R2, R3`

*   `Available: [2, 1, 0]` (2 instances of R1, 1 of R2, 0 of R3)
*   `Allocation:`
    ```
    P1: [0, 1, 0]
    P2: [2, 0, 0]
    P3: [3, 0, 2]
    ```
*   `Request:`
    ```
    P1: [2, 0, 0]
    P2: [0, 0, 2]
    P3: [0, 0, 0]
    ```

**Applying the Algorithm:**

1.  `Work = [2, 1, 0]`
    `Finish = [false, false, false]`

2.  *Process P1?* `Request[P1] = [2, 0, 0] <= Work = [2, 1, 0]` - Yes.
    `Work = Work + Allocation[P1] = [2, 1, 0] + [0, 1, 0] = [2, 2, 0]`
    `Finish[P1] = true`

3.  *Process P2?* `Request[P2] = [0, 0, 2] <= Work = [2, 2, 0]` - No.

4.  *Process P3?* `Request[P3] = [0, 0, 0] <= Work = [2, 2, 0]` - Yes.
    `Work = Work + Allocation[P3] = [2, 2, 0] + [3, 0, 2] = [5, 2, 2]`
    `Finish[P3] = true`

5.  *Process P2?* `Request[P2] = [0, 0, 2] <= Work = [5, 2, 2]` - Yes.
    `Work = Work + Allocation[P2] = [5, 2, 2] + [2, 0, 0] = [7, 2, 2]`
    `Finish[P2] = true`

6.  All processes are finished.  `Finish = [true, true, true]`

Since all processes are marked as finished, there is no deadlock.

**Important Points:**

*   This algorithm is an `O(m*n^2)` algorithm where `m` is the number of resource types and `n` is the number of processes.
*   The *Work* vector represents the resources that the system *could* have available if processes ran to completion.

## 4. Deadlock Recovery Strategies

If a deadlock is detected, the system must recover to resume normal operation. Common recovery strategies include:

### 4.1 Process Termination

*   **Abort all deadlocked processes:** This is the simplest but also the most drastic solution. It releases all resources held by deadlocked processes but can lead to significant data loss and wasted computation.

*   **Abort one process at a time until the deadlock cycle is broken:**  This approach is more targeted, but choosing the "right" process to terminate is crucial.  Factors to consider include:
    *   Priority of the process
    *   CPU time used by the process
    *   Resources used by the process
    *   Estimated time to completion
    *   Number of processes that will be affected by the termination
    *   Is process interactive or batch?

### 4.2 Resource Preemption

*   **Selecting a victim:**  Choose a process from which resources will be preempted. Considerations include:
    *   Minimizing the cost (e.g., rollback time, data loss).
    *   Process priority and state.
*   **Rollback:**  Return the process to a safe state (a previously saved state) and restart it.  This may involve saving and restoring process state.
*   **Starvation:**  Ensure that a process is not repeatedly chosen as a victim, which can lead to starvation.  A simple solution is to limit the number of times a process can be a victim.

**Considerations for Resource Preemption:**

*   Preemption is not always possible. Some resources (e.g., printers) cannot be easily preempted.
*   The cost of preemption (e.g., rollback and restart) can be high.
*   Care must be taken to avoid starvation.

## 5. Deadlock Detection vs. Deadlock Prevention

| Feature        | Deadlock Detection                                     | Deadlock Prevention                                    |
|----------------|----------------------------------------------------------|--------------------------------------------------------|
| **Approach**    | Detect deadlocks after they occur.                     | Prevent deadlocks from ever occurring.                  |
| **Resource Use**| Allows higher resource utilization.                      | Can lead to lower resource utilization.                 |
| **Overhead**    | Requires overhead for deadlock detection algorithms.      | Can impose restrictions that reduce concurrency.      |
| **Complexity**  | More complex algorithms.                               | Simpler implementation, but potentially more restrictive. |
| **Suitability** | Suitable for systems where deadlocks are infrequent.  | Suitable for systems where deadlocks are unacceptable.   |

**Key Differences:**

*   Deadlock prevention aims to *prevent* deadlocks by ensuring that at least one of the four Coffman conditions cannot hold.  This often involves imposing restrictions on resource allocation.
*   Deadlock detection *allows* deadlocks to occur, but provides mechanisms to detect them and then recover.  This can lead to higher resource utilization but requires additional overhead for deadlock detection algorithms.

## Practice Questions

1.  **Consider a system with 3 processes (P1, P2, P3) and 3 resource types (R1, R2, R3).  Given the following resource allocation state, determine if a deadlock exists using the deadlock detection algorithm. Show your steps.**

    *   `Available: [1, 0, 0]`
    *   `Allocation:`
        ```
        P1: [0, 1, 0]
        P2: [2, 0, 0]
        P3: [3, 0, 2]
        ```
    *   `Request:`
        ```
        P1: [2, 0, 0]
        P2: [0, 0, 2]
        P3: [0, 0, 0]
        ```

2.  **Explain the four necessary conditions for a deadlock to occur. Give a real-world example (not from computer science) where all four conditions are met.**

3.  **What are the advantages and disadvantages of deadlock detection compared to deadlock prevention?**

4.  **Describe two different strategies for deadlock recovery.**

## Answers to Practice Questions

1.  **Deadlock Detection:**

    1.  `Work = [1, 0, 0]`
        `Finish = [false, false, false]`

    2.  *Process P1?* `Request[P1] = [2, 0, 0] <= Work = [1, 0, 0]` - No.

    3.  *Process P2?* `Request[P2] = [0, 0, 2] <= Work = [1, 0, 0]` - No.

    4.  *Process P3?* `Request[P3] = [0, 0, 0] <= Work = [1, 0, 0]` - Yes.
        `Work = Work + Allocation[P3] = [1, 0, 0] + [3, 0, 2] = [4, 0, 2]`
        `Finish[P3] = true`

    5.  *Process P1?* `Request[P1] = [2, 0, 0] <= Work = [4, 0, 2]` - Yes.
        `Work = Work + Allocation[P1] = [4, 0, 2] + [0, 1, 0] = [4, 1, 2]`
        `Finish[P1] = true`

    6.  *Process P2?* `Request[P2] = [0, 0, 2] <= Work = [4, 1, 2]` - Yes.
        `Work = Work + Allocation[P2] = [4, 1, 2] + [2, 0, 0] = [6, 1, 2]`
        `Finish[P2] = true`

    7.  All processes are finished. `Finish = [true, true, true]`

    **Conclusion:** There is no deadlock.

2.  **Necessary Conditions for Deadlock (Coffman Conditions):** (See section 1.2 for detailed explanations)

    *   Mutual Exclusion
    *   Hold and Wait
    *   No Preemption
    *   Circular Wait

    **Real-world example:** Consider two trains approaching each other on a single track.

    *   **Mutual Exclusion:** Only one train can occupy a particular section of the track at a time.
    *   **Hold and Wait:** Train A is holding a section of the track and waiting to acquire the next section, currently occupied by Train B. Train B is doing the same.
    *   **No Preemption:** The track sections cannot be forcibly taken away from the trains.
    *   **Circular Wait:** Train A is waiting for a section held by Train B, and Train B is waiting for a section held by Train A.

3.  **Advantages and Disadvantages of Deadlock Detection vs. Prevention:** (See section 5 for detailed explanations)

    *   **Deadlock Detection Advantages:** Higher resource utilization, less restrictive.
    *   **Deadlock Detection Disadvantages:** Overhead for detection algorithms, requires recovery mechanisms.
    *   **Deadlock Prevention Advantages:** Ensures deadlocks never occur, simpler implementation.
    *   **Deadlock Prevention Disadvantages:** Lower resource utilization, can be too restrictive, may impact concurrency.

4.  **Deadlock Recovery Strategies:** (See section 4 for detailed explanations)

    *   **Process Termination:** Aborting one or more deadlocked processes.
    *   **Resource Preemption:** Forcibly taking resources away from one or more processes.

## Important Points to Remember

*   Deadlocks occur when a set of processes are blocked indefinitely, waiting for resources held by each other.
*   The four Coffman conditions (Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait) must all hold for a deadlock to occur.
*   Resource Allocation Graphs can be used to detect deadlocks in systems with single instances of each resource type.
*   Deadlock detection algorithms, such as the one described above, are used for systems with multiple instances of each resource type.
*   Deadlock recovery strategies include process termination and resource preemption.  These strategies have associated costs and risks (e.g., data loss, starvation).
*   Deadlock detection and prevention are two different approaches to handling deadlocks, each with its own advantages and disadvantages.  The choice of approach depends on the specific requirements of the system.
