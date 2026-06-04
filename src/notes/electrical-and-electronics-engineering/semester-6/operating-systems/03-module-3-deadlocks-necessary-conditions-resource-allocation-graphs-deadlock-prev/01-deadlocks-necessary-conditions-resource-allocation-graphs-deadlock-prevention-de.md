---
title: "Deadlocks: Necessary conditions, Resource allocation graphs, Deadlock prevention, Deadlock avoidance – Banker’s algorithms, Deadlock detection, Recovery from deadlock."
subject: "OPERATING SYSTEMS"
module: "Module 3: Deadlocks: Necessary conditions, Resource allocation graphs, Deadlock prevention, Deadlock avoidance – Banker’s algorithms, Deadlock detection, Recovery from deadlock."
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f365e5"
status: "completed"
scrapedAt: "2026-05-23T16:30:10.002Z"
---
# Module 3: Deadlocks

This module delves into the critical concept of deadlocks in operating systems, exploring their causes, detection, prevention, avoidance, and recovery mechanisms. Understanding deadlocks is crucial for designing robust and efficient operating systems.

## Learning Outcomes

Upon completion of this module, you will be able to:

*   **Define deadlock** and explain the conditions necessary for its occurrence.
*   **Represent system states** using **Resource Allocation Graphs (RAGs)** and interpret them to identify potential deadlocks.
*   **Explain and apply methods for deadlock prevention**.
*   **Describe and implement deadlock avoidance techniques**, with a particular focus on the **Banker's Algorithm**.
*   **Explain and apply methods for deadlock detection**.
*   **Discuss and illustrate strategies for recovery from deadlocks**.
*   **Relate deadlock management techniques to the overall stability and performance of the operating system.** (Aligns with CO4)

## 1. What is a Deadlock?

A **deadlock** is a situation where a set of processes are blocked indefinitely, each holding a resource and waiting to acquire a resource held by another process in the set. This creates a circular dependency, preventing any of the processes from making progress.

**Key Concept:** Deadlock is a state of *permanent blocking* of processes.

**Analogy:** Imagine two people trying to cross a narrow bridge from opposite directions. Each person refuses to back up, and neither can proceed. They are "deadlocked."

## 2. Necessary Conditions for Deadlock

For a deadlock to occur, four necessary conditions must hold simultaneously. These are known as **Coffman conditions**:

*   **Mutual Exclusion:** At least one resource must be held in a non-sharable mode. Only one process can use the resource at any given time. If another process requests that resource, it must wait until the resource has been released.
    *   **Example:** A printer can only be used by one process at a time.
*   **Hold and Wait:** A process must be holding at least one resource and waiting to acquire additional resources that are currently being held by other processes.
    *   **Example:** Process P1 holds Resource R1 and is waiting for Resource R2, which is held by Process P2.
*   **No Preemption:** Resources cannot be preempted; that is, a resource can only be released voluntarily by the process holding it after that process has completed its task.
    *   **Example:** If a process is holding a resource, the OS cannot forcibly take it away and give it to another process.
*   **Circular Wait:** A set of processes {$P_0, P_1, \ldots, P_n$} must exist such that $P_0$ is waiting for a resource held by $P_1$, $P_1$ is waiting for a resource held by $P_2$, ..., $P_{n-1}$ is waiting for a resource held by $P_n$, and $P_n$ is waiting for a resource held by $P_0$.
    *   **Example:** P1 holds R1 and waits for R2. P2 holds R2 and waits for R1. This forms a cycle.

**Important Point:** If any one of these conditions is not met, a deadlock cannot occur.

---

**References:**

*   **Silberschatz, Galvin, Gagne (9th Ed., 2015):** Chapter 7, "Deadlocks." This chapter provides a thorough explanation of the four necessary conditions and their implications.
*   **Tanenbaum (6th Ed., 2015):** Chapter 6, "Deadlocks." Tanenbaum also details these conditions and their significance.

---

## 3. Resource Allocation Graphs (RAGs)

A **Resource Allocation Graph (RAG)** is a directed graph used to depict the state of resources and processes in a system. It helps visualize potential deadlocks.

**Components of a RAG:**

*   **Processes:** Represented by **circles**.
*   **Resource Types:** Represented by **squares**.
*   **Instances of a Resource Type:** Represented by **dots** inside the square. Each dot signifies a single instance of that resource type.
*   **Assignment Edge:** A **directed edge** from a resource instance to a process indicates that the process is currently holding that resource instance. (Resource $\rightarrow$ Process)
*   **Request Edge:** A **directed edge** from a process to a resource type indicates that the process is requesting an instance of that resource type. (Process $\rightarrow$ Resource)

**Types of RAGs:**

1.  **Single Instance Resource Type:** If each resource type has only one instance, the RAG is a **wait-for graph**. A cycle in a wait-for graph is a necessary and sufficient condition for deadlock.

    *   **Example:** P1 $\rightarrow$ R1 $\rightarrow$ P2 $\rightarrow$ R2 $\rightarrow$ P1 (This implies P1 waits for R1, R1 is held by P2, P2 waits for R2, R2 is held by P1)

2.  **Multiple Instance Resource Type:** If resource types can have multiple instances, a cycle in the RAG is a **necessary but not sufficient** condition for deadlock. If there is no cycle, there is no deadlock. If there is a cycle, deadlock *may* exist.

**Interpreting Cycles in RAGs (Multiple Instances):**

*   If a RAG contains a cycle, a deadlock *might* exist.
*   If a RAG contains a cycle, and each resource type in the cycle has only a single instance, then a deadlock exists.
*   If a RAG contains a cycle, and some resource types in the cycle have multiple instances, then deadlock *may* exist. To confirm, we need to consider the number of instances of each resource and which process holds which instance.

**Example of a RAG:**

Let's say we have:
*   Processes: P1, P2, P3
*   Resource Types: R1 (2 instances), R2 (1 instance)

State:
*   P1 holds an instance of R1. (R1 $\rightarrow$ P1)
*   P2 holds the instance of R2. (R2 $\rightarrow$ P2)
*   P1 is requesting an instance of R2. (P1 $\rightarrow$ R2)
*   P2 is requesting an instance of R1. (P2 $\rightarrow$ R1)
*   P3 holds an instance of R1. (R1 $\rightarrow$ P3)
*   P3 is requesting an instance of R1. (P3 $\rightarrow$ R1)

**Graph Representation:**

(P1) --request--> [R2] --held by--> (P2) --request--> [R1] --held by--> (P1)
                                                    ^
                                                    |
                                                    --held by--> (P3) --request--> [R1]

In this scenario, P1 and P2 are in a deadlock. P1 holds R1 and waits for R2. P2 holds R2 and waits for R1. P3 also holds an instance of R1 and requests another instance of R1. P3 is not directly involved in the P1-P2 deadlock cycle, but its request for R1 might impact resource availability.

**Important Point:** A cycle in a RAG is a strong indicator of a potential deadlock, especially with single-instance resources.

---

**References:**

*   **Silberschatz, Galvin, Gagne (9th Ed., 2015):** Section 7.1, "The Deadlock Problem." This section introduces RAGs and their interpretation.
*   **Tanenbaum (6th Ed., 2015):** Section 6.2, "Deadlock Detection." Tanenbaum discusses RAGs in the context of deadlock detection.

---

## 4. Deadlock Prevention

Deadlock prevention involves ensuring that at least one of the four necessary conditions for deadlock cannot hold. This is a *proactive* approach.

### 4.1. Preventing Mutual Exclusion

*   **Challenge:** Some resources are inherently non-sharable (e.g., printers, write-once disks).
*   **Solution:** For resources that can be shared (e.g., read-only files), relax the mutual exclusion condition. However, for truly non-sharable resources, mutual exclusion is unavoidable, and therefore this strategy is often not practical for all resource types.

### 4.2. Preventing Hold and Wait

*   **Strategy 1: Require processes to request all resources at once.**
    *   **Mechanism:** A process must request and be allocated all of its required resources before it begins execution.
    *   **Pros:** Prevents the "hold and wait" condition.
    *   **Cons:**
        *   **Low resource utilization:** Processes may hold resources for a long time even if they are not currently using them.
        *   **Starvation:** A process might not get all its required resources, even if they become available individually, because it's waiting for a large set.
        *   **Difficult to know all resource needs beforehand.**
*   **Strategy 2: Allow processes to release all currently held resources before requesting new ones.**
    *   **Mechanism:** If a process needs a resource it doesn't have, it must release all resources it currently holds. Then, it can re-request all resources (including the previously held ones).
    *   **Pros:** Prevents the "hold and wait" condition.
    *   **Cons:**
        *   **Inefficient:** Frequent release and re-acquisition of resources can lead to overhead.
        *   **Can lead to starvation:** A process might repeatedly release and re-acquire resources without making progress if other processes keep acquiring the needed resources.

### 4.3. Preventing No Preemption

*   **Strategy: Allow preemption of resources.**
    *   **Mechanism:** If a process holding resources requests another resource that cannot be immediately allocated to it, the system preempts (takes away) all resources currently held by that process. The preempted resources are added to the list of resources available to the process. The process then waits until it can reacquire the preempted resources as well as the new requested resources.
    *   **Pros:** Prevents the "no preemption" condition.
    *   **Cons:**
        *   **Complex to implement:** State saving and restoration can be challenging.
        *   **May not be practical for all resources:** e.g., preempting a print job can be problematic.
        *   **Can lead to livelock:** Processes might repeatedly preempt resources and fail to make progress.

### 4.4. Preventing Circular Wait

*   **Strategy: Impose a total ordering of all resource types.**
    *   **Mechanism:** Assign a unique integer to each resource type. Processes can only request resources in increasing order of their assigned integers. That is, if a process holds resource $R_i$ and wants to request resource $R_j$, it must be that the assigned integer of $R_i$ is less than the assigned integer of $R_j$.
    *   **Pros:** Effectively prevents circular wait. If all processes follow this rule, a cycle cannot be formed.
    *   **Cons:**
        *   **Requires knowledge of all resource types:** The total ordering must be established beforehand.
        *   **Inflexible:** Can reduce resource utilization as processes might have to acquire resources in an order that is not optimal for their immediate needs.
        *   **Can lead to starvation:** A process might not be able to acquire a lower-numbered resource if it's currently held by another process that eventually requests a higher-numbered resource.

**Important Point:** Deadlock prevention can be effective but often leads to reduced system performance and resource utilization.

---

**References:**

*   **Silberschatz, Galvin, Gagne (9th Ed., 2015):** Section 7.2, "Deadlock Prevention." This section elaborates on the strategies to break the four necessary conditions.
*   **Nutt, Chaki, Neogy (3rd Ed.):** Chapter 8, "Deadlocks." Provides insights into prevention techniques.

---

## 5. Deadlock Avoidance

Deadlock avoidance is a more flexible approach than prevention. It dynamically analyzes resource allocation requests to ensure that the system never enters an unsafe state, from which a deadlock *could* occur. An **unsafe state** is a state where there exists a sequence of allocations that leads to deadlock. A **safe state** is one where there exists a sequence of process executions that allows all processes to complete without deadlock.

The most prominent deadlock avoidance algorithm is the **Banker's Algorithm**.

### 5.1. The Banker's Algorithm

The Banker's Algorithm is named after the banking practice of requiring loan applicants to disclose their total worth before granting a loan. In OS terms, processes declare their maximum resource needs in advance.

**Key Data Structures:**

Let $n$ be the number of processes and $m$ be the number of resource types.

1.  **`Max[n, m]`:** A matrix indicating the maximum number of instances of each resource type that each process may request. `Max[i, j]` is the maximum demand of process $P_i$ for resource type $R_j$.
2.  **`Allocation[n, m]`:** A matrix indicating the number of instances of each resource type currently allocated to each process. `Allocation[i, j]` is the number of instances of $R_j$ currently allocated to $P_i$.
3.  **`Need[n, m]`:** A matrix indicating the remaining resource need of each process. `Need[i, j] = Max[i, j] - Allocation[i, j]`. This is the maximum number of instances of $R_j$ that process $P_i$ may still request.
4.  **`Available[m]`:** A vector indicating the number of available instances of each resource type. `Available[j]` is the number of available instances of $R_j$.

**Algorithm Steps:**

The algorithm checks if granting a resource request will lead to a safe state.

**1. Safety Algorithm (Checks if the current state is safe):**

*   Initialize `Work[m]` = `Available[m]` and `Finish[n]` = {false, false, ..., false}.
*   **Find an index `i` such that `Finish[i]` is false AND `Need[i]` $\leq$ `Work`.**
    *   The condition `Need[i]` $\leq$ `Work` means that for all resource types $j$, `Need[i, j] \leq Work[j]`.
*   **If no such `i` exists, go to Step 4.**
*   **If such an `i` exists:**
    *   `Work = Work + Allocation[i]` (The process $P_i$ can finish and release its resources)
    *   `Finish[i] = true`
    *   Go to Step 2.
*   **Step 4:** If `Finish[i]` is true for all $i$, then the system is in a **safe state**. Otherwise, it is in an **unsafe state**.

**2. Resource-Request Algorithm (Checks if granting a request is safe):**

When process $P_i$ requests resources `Request[i, j]` (a vector of requested resources for each type):

*   **Step 1:** If `Request[i]` $\leq$ `Need[i]` (the request is not more than the process's declared maximum need), then go to Step 2. Otherwise, terminate and report an error (process exceeded its max claim).
*   **Step 2:** If `Request[i]` $\leq$ `Available` (the system has enough available resources to satisfy the request), then go to Step 3. Otherwise, $P_i$ must wait.
*   **Step 3 (Hypothetical Allocation):** Pretend to grant the request:
    *   `Available = Available - Request[i]`
    *   `Allocation[i] = Allocation[i] + Request[i]`
    *   `Need[i] = Need[i] - Request[i]`
    *   **Check if the resulting state is safe using the Safety Algorithm.**
        *   If the state is safe, grant the request. The system state is updated as above.
        *   If the state is unsafe, deny the request. $P_i$ must wait, and the system state remains unchanged (i.e., undo the hypothetical allocation).

**Example Scenario:**

Suppose we have 3 processes (P0, P1, P2) and 2 resource types (R0, R1).

|       | `Max` | `Allocation` | `Need` |
| :---- | :---- | :----------- | :----- |
| **P0** | [7, 5] | [0, 1]       | [7, 4] |
| **P1** | [3, 2] | [2, 0]       | [1, 2] |
| **P2** | [9, 0] | [3, 0]       | [6, 0] |

`Available` = [2, 1]

**Safety Check:**

*   `Work` = [2, 1], `Finish` = [F, F, F]

*   **Iteration 1:**
    *   Can P0 run? `Need[0]` = [7, 4]. `Work` = [2, 1]. [7, 4] $\not\leq$ [2, 1]. No.
    *   Can P1 run? `Need[1]` = [1, 2]. `Work` = [2, 1]. [1, 2] $\not\leq$ [2, 1]. No.
    *   Can P2 run? `Need[2]` = [6, 0]. `Work` = [2, 1]. [6, 0] $\not\leq$ [2, 1]. No.

    *   No process can run. The system is in an **unsafe state**.

**Now, let's say P1 requests [1, 2]:**

1.  **Check Request:** `Request[1]` = [1, 2]. `Need[1]` = [1, 2]. Is [1, 2] $\leq$ [1, 2]? Yes.
2.  **Check Available:** `Request[1]` = [1, 2]. `Available` = [2, 1]. Is [1, 2] $\leq$ [2, 1]? No. (Need 2 of R1, only 1 available).
    *   **Result:** P1 must wait.

**Now, let's say P0 requests [0, 1]:**

1.  **Check Request:** `Request[0]` = [0, 1]. `Need[0]` = [7, 4]. Is [0, 1] $\leq$ [7, 4]? Yes.
2.  **Check Available:** `Request[0]` = [0, 1]. `Available` = [2, 1]. Is [0, 1] $\leq$ [2, 1]? Yes.
3.  **Hypothetical Allocation:**
    *   `Available` = [2, 1] - [0, 1] = [2, 0]
    *   `Allocation[0]` = [0, 1] + [0, 1] = [0, 2]
    *   `Need[0]` = [7, 4] - [0, 1] = [7, 3]

    New state:
    `Available` = [2, 0]
    `Allocation` = [[0, 2], [2, 0], [3, 0]]
    `Need` = [[7, 3], [1, 2], [6, 0]]
    `Finish` = [F, F, F]

    **Check Safety of this new state:**
    *   `Work` = [2, 0], `Finish` = [F, F, F]
    *   Can P0 run? `Need[0]` = [7, 3]. `Work` = [2, 0]. [7, 3] $\not\leq$ [2, 0]. No.
    *   Can P1 run? `Need[1]` = [1, 2]. `Work` = [2, 0]. [1, 2] $\not\leq$ [2, 0]. No.
    *   Can P2 run? `Need[2]` = [6, 0]. `Work` = [2, 0]. [6, 0] $\not\leq$ [2, 0]. No.

    *   Still unsafe.
    *   **Result:** P0's request is denied. P0 must wait.

**Important Point:** The Banker's Algorithm requires processes to declare their maximum resource needs *in advance*. This is a significant overhead and often not feasible in real-world systems where resource needs might not be known beforehand or can change dynamically.

---

**References:**

*   **Silberschatz, Galvin, Gagne (9th Ed., 2015):** Section 7.3, "Deadlock Avoidance." This section is dedicated to the Banker's Algorithm, explaining its data structures and algorithms in detail.
*   **Tanenbaum (6th Ed., 2015):** Section 6.3, "Deadlock Avoidance." Tanenbaum also provides a good explanation of the Banker's Algorithm.
*   **Dhamdhere (2nd Ed., 2011):** Chapter 8, "Deadlocks." Offers alternative explanations and examples of the Banker's Algorithm.

---

## 6. Deadlock Detection

Deadlock detection algorithms run periodically or when a process requests a resource that cannot be granted immediately. They aim to find out if a deadlock has indeed occurred. If a deadlock is detected, the system must then take action to recover from it.

### 6.1. Detection Algorithm Using Resource Allocation Graphs

For systems with **single instance resource types**:
*   The system maintains a wait-for graph.
*   If a cycle is detected in the wait-for graph, a deadlock exists.

For systems with **multiple instance resource types**:
*   The detection algorithm is similar in spirit to the Banker's Algorithm's safety algorithm, but it operates on the current system state, not on hypothetical future states.

**Detection Algorithm (Multiple Instances):**

Let $n$ be the number of processes and $m$ be the number of resource types.

1.  **Initialize:**
    *   `Work[m]` = `Available[m]`
    *   `Finish[n]` = {false, false, ..., false} (Initialize to false for all processes).
    *   For $i = 1$ to $n$:
        *   If `Allocation[i]` = [0, 0, ..., 0], then `Finish[i]` = true (Process $i$ is not holding any resources).

2.  **Find an index `i` such that `Finish[i]` is false AND `Request[i]` $\leq$ `Work`.**
    *   `Request[i]` is the vector of resources currently requested by process $P_i$.
    *   The condition `Request[i]` $\leq$ `Work` means that for all resource types $j$, `Request[i, j] \leq Work[j]`.

3.  **If no such `i` exists, go to Step 5.**

4.  **If such an `i` exists:**
    *   `Work = Work + Allocation[i]` (Process $P_i$ can finish and release its resources)
    *   `Finish[i] = true`
    *   Go to Step 2.

5.  **Check `Finish` array:** If `Finish[i]` is false for some $i$, then process $P_i$ is part of a deadlock. The set of processes for which `Finish[i]` is false are deadlocked.

**Example:**

Consider the same state as before:
`Available` = [2, 1]
`Allocation` = [[0, 1], [2, 0], [3, 0]]
`Request` = [[0, 1], [1, 2], [0, 0]] (Assuming P2 is not requesting anything for simplicity here)
`Need` (not directly used by detection, but for context) = [[7, 4], [1, 2], [6, 0]]

*   **Initialize:**
    *   `Work` = [2, 1]
    *   `Finish` = [F, F, F]
    *   Since `Allocation[2]` is not all zeros, `Finish[2]` remains F.

*   **Iteration 1:**
    *   Can P0 run? `Request[0]` = [0, 1]. `Work` = [2, 1]. Is [0, 1] $\leq$ [2, 1]? Yes.
    *   Update:
        *   `Work` = [2, 1] + `Allocation[0]` ([0, 1]) = [2, 2]
        *   `Finish[0]` = T
    *   `Work` = [2, 2], `Finish` = [T, F, F]

*   **Iteration 2:**
    *   Can P1 run? `Finish[1]` is F. `Request[1]` = [1, 2]. `Work` = [2, 2]. Is [1, 2] $\leq$ [2, 2]? Yes.
    *   Update:
        *   `Work` = [2, 2] + `Allocation[1]` ([2, 0]) = [4, 2]
        *   `Finish[1]` = T
    *   `Work` = [4, 2], `Finish` = [T, T, F]

*   **Iteration 3:**
    *   Can P2 run? `Finish[2]` is F. `Request[2]` = [0, 0]. `Work` = [4, 2]. Is [0, 0] $\leq$ [4, 2]? Yes.
    *   Update:
        *   `Work` = [4, 2] + `Allocation[2]` ([3, 0]) = [7, 2]
        *   `Finish[2]` = T
    *   `Work` = [7, 2], `Finish` = [T, T, T]

*   **Final Check:** All `Finish` flags are True.
*   **Result:** No deadlock detected in this scenario.

**If P1 had requested [0, 2] instead of [1, 2]:**

*   **Initialize:**
    *   `Work` = [2, 1]
    *   `Finish` = [F, F, F]

*   **Iteration 1:**
    *   Can P0 run? `Request[0]` = [0, 1]. `Work` = [2, 1]. Is [0, 1] $\leq$ [2, 1]? Yes.
    *   Update:
        *   `Work` = [2, 1] + `Allocation[0]` ([0, 1]) = [2, 2]
        *   `Finish[0]` = T
    *   `Work` = [2, 2], `Finish` = [T, F, F]

*   **Iteration 2:**
    *   Can P1 run? `Finish[1]` is F. `Request[1]` = [0, 2]. `Work` = [2, 2]. Is [0, 2] $\leq$ [2, 2]? Yes.
    *   Update:
        *   `Work` = [2, 2] + `Allocation[1]` ([2, 0]) = [4, 2]
        *   `Finish[1]` = T
    *   `Work` = [4, 2], `Finish` = [T, T, F]

*   **Iteration 3:**
    *   Can P2 run? `Finish[2]` is F. `Request[2]` = [0, 0]. `Work` = [4, 2]. Is [0, 0] $\leq$ [4, 2]? Yes.
    *   Update:
        *   `Work` = [4, 2] + `Allocation[2]` ([3, 0]) = [7, 2]
        *   `Finish[2]` = T
    *   `Work` = [7, 2], `Finish` = [T, T, T]

*   **Final Check:** All `Finish` flags are True.
*   **Result:** No deadlock detected.

Let's craft a scenario that *does* result in deadlock detection.
Consider this state:
`Available` = [0, 0]
`Allocation` = [[1, 0], [0, 1]]
`Request` = [[0, 1], [1, 0]]

*   **Initialize:**
    *   `Work` = [0, 0]
    *   `Finish` = [F, F]

*   **Iteration 1:**
    *   Can P0 run? `Request[0]` = [0, 1]. `Work` = [0, 0]. Is [0, 1] $\leq$ [0, 0]? No.
    *   Can P1 run? `Request[1]` = [1, 0]. `Work` = [0, 0]. Is [1, 0] $\leq$ [0, 0]? No.

*   **Step 3:** No such `i` exists. Go to Step 5.
*   **Step 5:** `Finish[0]` is F, `Finish[1]` is F.
*   **Result:** Deadlock detected. Processes P0 and P1 are deadlocked.

**Important Point:** Deadlock detection algorithms are generally more practical than prevention or avoidance because they don't require processes to declare maximum needs beforehand and have less impact on system throughput. However, they introduce overhead and require a recovery mechanism.

---

**References:**

*   **Silberschatz, Galvin, Gagne (9th Ed., 2015):** Section 7.4, "Deadlock Detection." This section details the algorithm for detecting deadlocks in systems with multiple resource instances.
*   **Tanenbaum (6th Ed., 2015):** Section 6.2, "Deadlock Detection." Discusses detection strategies.
*   **Haldar, Aravind:** Chapter 7, "Deadlocks." Provides comprehensive coverage of detection.

---

## 7. Recovery from Deadlock

Once a deadlock is detected, the system must break the deadlock cycle to allow processes to continue execution. This can be done through various strategies:

### 7.1. Process Termination

*   **Terminate all deadlocked processes:** This is the simplest approach, but it can be costly as it involves aborting the work done by the deadlocked processes.
*   **Terminate one process at a time until the deadlock is broken:**
    *   **Cost:** The cost of termination depends on the process (e.g., amount of CPU time used, number of resources held, amount of output produced).
    *   **Selection Criteria:**
        *   **Priority of the process:** Terminate lower-priority processes first.
        *   **Progress made by the process:** Terminate processes that have made little progress.
        *   **Resources held by the process:** Terminate processes holding fewer resources or fewer resources of certain types.
        *   **Resources needed for completion:** Terminate processes that need fewer resources to finish.
        *   **Number of processes affected:** Terminate processes that are part of the fewest deadlocks.
        *   **Interactive vs. batch processes:** Often, batch processes are terminated first.
    *   **Re-start after termination:** After terminating a process, the system needs to re-run the detection algorithm. If the deadlock persists, another process may need to be terminated. This can lead to **starvation** if the same processes are repeatedly chosen for termination.

### 7.2. Resource Preemption

*   **Select a victim:** Choose a process from which to preempt a resource.
*   **Preempt the resource:** Take the resource away from the victim process.
*   **Give the resource to another process:** Grant the preempted resource to a waiting process.
*   **Rollback:** The victim process must be rolled back to a previous state to resume execution. This requires a checkpointing mechanism.
    *   **Cost:** Rollback can be complex and costly.
    *   **Starvation:** Similar to process termination, if we repeatedly preempt resources from the same process, it can lead to starvation.

**Strategies for selecting a victim and for rollback:**

*   **Resource cost:** Select a victim that holds resources with the lowest cost to preempt and restart.
*   **Number of resources held:** Select a victim holding the fewest resources.
*   **Resources needed for completion:** Select a victim holding resources that are critical for other processes.
*   **Frequency of preemption:** Ensure that each process is selected as a victim at most once to avoid starvation.

**Important Point:** Recovery from deadlock is complex and often involves trade-offs between efficiency and the risk of starvation.

---

**References:**

*   **Silberschatz, Galvin, Gagne (9th Ed., 2015):** Section 7.5, "Deadlock Recovery." This section explores methods like process termination and resource preemption.
*   **Tanenbaum (6th Ed., 2015):** Section 6.4, "Deadlock Recovery." Discusses strategies for dealing with detected deadlocks.
*   **Dhamdhere (2nd Ed., 2011):** Chapter 8, "Deadlocks." Covers recovery techniques in detail.

---

## Module Summary and Key Takeaways

*   **Deadlock:** A state where a set of processes are blocked indefinitely, each holding a resource and waiting for another resource held by another process in the set.
*   **Necessary Conditions (Coffman Conditions):** Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait. All four must hold for a deadlock.
*   **Resource Allocation Graphs (RAGs):** Visual tools to represent system states. Cycles indicate potential or actual deadlocks.
*   **Deadlock Prevention:** Ensures at least one necessary condition is never met. Can be overly restrictive.
    *   Break Mutual Exclusion (difficult for sharable resources).
    *   Break Hold and Wait (request all resources at once, or release all before requesting new).
    *   Break No Preemption (allow preemption).
    *   Break Circular Wait (impose resource ordering).
*   **Deadlock Avoidance:** Dynamically checks resource allocation requests to ensure the system remains in a safe state.
    *   **Banker's Algorithm:** Requires processes to declare max resource needs. Checks safety based on `Max`, `Allocation`, `Need`, and `Available` matrices.
*   **Deadlock Detection:** Periodically checks the system for deadlock states using algorithms similar to Banker's.
    *   Detection algorithms for multiple resource types use `Available`, `Allocation`, and `Request` matrices.
*   **Recovery from Deadlock:** Actions taken after deadlock detection to break the cycle.
    *   **Process Termination:** Abort all deadlocked processes or one by one.
    *   **Resource Preemption:** Take resources from a victim process and rollback.

**CO Alignment:**

*   **CO1:** Understanding deadlock's impact on system stability and process execution.
*   **CO2:** Deadlocks are a consequence of process resource management and scheduling.
*   **CO3:** Synchronization primitives (semaphores, mutexes) are used to manage access to shared resources, and their misuse can lead to deadlocks.
*   **CO4:** This entire module directly addresses CO4 by explaining methods for detection, prevention, avoidance (Banker's Algorithm), and recovery.
*   **CO5 & CO6:** While not directly about memory or file management, resource contention for any type of resource, including memory pages or file locks, can lead to deadlocks.

---

## Practice Questions

**1. Multiple Choice Questions:**

(a) Which of the following is NOT a necessary condition for deadlock?
    (i) Mutual Exclusion
    (ii) Hold and Wait
    (iii) Interrupt Handling
    (iv) Circular Wait

(b) In a Resource Allocation Graph with multiple instances of a resource type, a cycle is:
    (i) A necessary and sufficient condition for deadlock.
    (ii) A necessary but not sufficient condition for deadlock.
    (iii) A sufficient but not necessary condition for deadlock.
    (iv) Neither necessary nor sufficient for deadlock.

(c) The Banker's Algorithm is used for:
    (i) Deadlock Prevention
    (ii) Deadlock Detection
    (iii) Deadlock Avoidance
    (iv) Deadlock Recovery

(d) Which of the following deadlock prevention strategies imposes a total ordering on resource types?
    (i) Allowing preemption
    (ii) Requiring all resources to be requested at once
    (iii) Imposing a total ordering of resource types
    (iv) Releasing all held resources before requesting new ones

**2. Short Answer Questions:**

(a) Briefly explain the four necessary conditions for deadlock.
(b) How does a Resource Allocation Graph help in understanding deadlocks? Differentiate between single and multiple instance resource types in the context of RAG cycles.
(c) Describe the "Hold and Wait" condition and one method to prevent it. What are the potential drawbacks of this prevention method?
(d) What is the fundamental difference between deadlock prevention and deadlock avoidance?
(e) Explain the purpose of the `Need` matrix in the Banker's Algorithm.
(f) When a deadlock is detected, what are the two main categories of actions the operating system can take?
(g) What is starvation in the context of deadlock recovery?

**3. Problem Solving Questions:**

(a) Consider the following system state:
    *   Processes: P0, P1, P2
    *   Resource Types: R0 (3 instances), R1 (2 instances)
    *   `Allocation`:
        *   P0: [1, 0]
        *   P1: [0, 1]
        *   P2: [1, 1]
    *   `Request`:
        *   P0: [1, 1]
        *   P1: [1, 0]
        *   P2: [0, 1]
    *   `Available`: [0, 0]

    Draw the Resource Allocation Graph for this state. Does a deadlock exist? If so, which processes are involved?

(b) Using the Banker's Algorithm, determine if the following state is safe. If not, explain why. Assume processes will request resources as stated.

    *   **Processes:** P0, P1, P2, P3, P4
    *   **Resource Types:** A, B, C
    *   **Available:** [0, 1, 0]

    | Process | `Max`  | `Allocation` | `Need` |
    | :------ | :----- | :----------- | :----- |
    | P0      | [7, 5, 3] | [0, 1, 0]    | [7, 4, 3] |
    | P1      | [3, 2, 2] | [2, 0, 0]    | [1, 2, 2] |
    | P2      | [9, 0, 2] | [3, 0, 2]    | [6, 0, 0] |
    | P3      | [2, 2, 2] | [2, 1, 1]    | [0, 1, 1] |
    | P4      | [4, 3, 3] | [0, 0, 2]    | [4, 3, 1] |

    **(i)** Is the system safe?
    **(ii)** If P1 requests [1, 0, 2], can the request be granted? Show your work.

---

## Practice Questions Answers

**1. Multiple Choice Questions:**

(a) (iii) Interrupt Handling. The other three are the necessary conditions.
(b) (ii) A necessary but not sufficient condition for deadlock. For multiple instances, a cycle is a necessary condition, but deadlock may or may not occur depending on resource availability.
(c) (iii) Deadlock Avoidance. It prevents the system from entering an unsafe state.
(d) (iii) Imposing a total ordering of resource types. This strategy directly breaks the circular wait condition by enforcing a strict order of acquisition.

**2. Short Answer Questions:**

(a)
    *   **Mutual Exclusion:** At least one resource is held in a non-sharable mode.
    *   **Hold and Wait:** A process holding at least one resource is waiting for another resource.
    *   **No Preemption:** Resources cannot be forcibly taken from a process; they must be released voluntarily.
    *   **Circular Wait:** A cycle exists where each process is waiting for a resource held by the next process in the cycle.

(b) RAGs visually represent the state of resources and processes. Circles are processes, squares are resource types. Assignment edges (Resource $\rightarrow$ Process) show held resources, and request edges (Process $\rightarrow$ Resource) show requested resources.
    *   For **single instance** resource types, a cycle in the RAG is a **necessary and sufficient** condition for deadlock.
    *   For **multiple instance** resource types, a cycle is **necessary but not sufficient**. It indicates a potential deadlock, but further analysis might be needed (e.g., using detection algorithms).

(c) The "Hold and Wait" condition occurs when a process holds some resources while waiting for others.
    *   **Prevention Method:** Require processes to request all their required resources at once before starting execution.
    *   **Drawbacks:** Low resource utilization (resources might be held but not used), difficulty in knowing all future resource needs, potential for starvation. Another method is for a process to release all its currently held resources before requesting a new one, which can be inefficient.

(d)
    *   **Deadlock Prevention:** Aims to ensure that at least one of the four necessary conditions for deadlock can never hold. It's a proactive approach that restricts resource allocation.
    *   **Deadlock Avoidance:** Dynamically analyzes resource allocation requests to ensure that the system state never becomes unsafe. It's a more flexible approach than prevention but requires processes to declare their maximum resource needs in advance.

(e) The `Need` matrix in the Banker's Algorithm represents the remaining resources that each process *might* still request to complete its execution. `Need[i, j] = Max[i, j] - Allocation[i, j]`. It is crucial for checking if a process's request can be satisfied and if the resulting system state remains safe.

(f) The two main categories of actions are:
    1.  **Process Termination:** Aborting one or more deadlocked processes.
    2.  **Resource Preemption:** Taking resources away from a victim process and allocating them to another. This often involves rolling back the victim process to a previous safe state.

(g) **Starvation** (or indefinite blocking) occurs when a process is repeatedly overlooked or preempted by the system, preventing it from making progress towards completion. This can happen in deadlock recovery strategies if a consistent criterion is used to select victims (e.g., always picking the process with the fewest resources), and that process never gets a chance to finish.

**3. Problem Solving Questions:**

(a) **Resource Allocation Graph:**
    *   Processes: P0, P1, P2 (circles)
    *   Resource Types: R0 (3 dots in square), R1 (2 dots in square)
    *   Allocation:
        *   P0 holds R0 (R0 $\rightarrow$ P0)
        *   P1 holds R1 (R1 $\rightarrow$ P1)
        *   P2 holds R0 and R1 (R0 $\rightarrow$ P2, R1 $\rightarrow$ P2)
    *   Request:
        *   P0 requests R1 (P0 $\rightarrow$ R1)
        *   P1 requests R0 (P1 $\rightarrow$ R0)
        *   P2 requests R1 (P2 $\rightarrow$ R1)

    **Graph:**
    ```
    [R0]--held by--> (P0) --request--> [R1]
     ^                 ^                ^
     |                 |                |
     |                 |                |
     |                 |                |
     --held by--> (P2) --request--> [R1]--held by--> (P1) --request--> [R0]
     |                                                ^
     |                                                |
     |                                                |
     --held by--> (P2) --request--> [R1] <--held by-- (P1) <--request-- (P0)
    ```
    Let's redraw to clarify the cycle:
    There are two instances of R0 and two instances of R1.
    *   P0 holds R0, requests R1.
    *   P1 holds R1, requests R0.
    *   P2 holds R0 and R1, requests R1.

    Consider the requests and holdings:
    *   P0 needs R1. R1 is held by P1 and P2.
    *   P1 needs R0. R0 is held by P0 and P2.
    *   P2 needs R1. R1 is held by P1 and P2.

    Let's trace a potential cycle:
    P0 needs R1. R1 is held by P1.
    P1 needs R0. R0 is held by P0.
    This forms a cycle: P0 $\rightarrow$ R1 $\rightarrow$ P1 $\rightarrow$ R0 $\rightarrow$ P0.
    Also, P2 holds resources held by P0 and P1 and requests a resource held by P1.

    Since there are multiple instances, we need to check the detection algorithm.
    `Available` = [0, 0]
    `Allocation`: P0=[1,0], P1=[0,1], P2=[1,1] (Total R0 held = 2, Total R1 held = 2)
    `Request`: P0=[1,1], P1=[1,0], P2=[0,1]

    **Detection Algorithm:**
    *   `Work` = [0, 0], `Finish` = [F, F, F]
    *   P0 Request: [1, 1]. `Work`: [0, 0]. [1, 1] $\not\leq$ [0, 0]. P0 waits.
    *   P1 Request: [1, 0]. `Work`: [0, 0]. [1, 0] $\not\leq$ [0, 0]. P1 waits.
    *   P2 Request: [0, 1]. `Work`: [0, 0]. [0, 1] $\not\leq$ [0, 0]. P2 waits.

    No process can proceed. All `Finish` flags remain False.
    **Conclusion:** Yes, a deadlock exists. Processes P0, P1, and P2 are involved. (The cycle P0-R1-P1-R0-P0 involves P0 and P1, but P2's requests can also contribute to a deadlock state).

(b) **Banker's Algorithm Safety Check:**

    *   **Initial State:**
        `Available` = [0, 1, 0]
        `Need` = [[7, 4, 3], [1, 2, 2], [6, 0, 0], [0, 1, 1], [4, 3, 1]]

    *   **Safety Algorithm Execution:**
        *   `Work` = [0, 1, 0], `Finish` = [F, F, F, F, F]

        *   **Step 1:** Find `i` such that `Finish[i]` is false and `Need[i]` $\leq$ `Work`.
            *   P0: `Need[0]` = [7, 4, 3]. `Work` = [0, 1, 0]. [7, 4, 3] $\not\leq$ [0, 1, 0].
            *   P1: `Need[1]` = [1, 2, 2]. `Work` = [0, 1, 0]. [1, 2, 2] $\not\leq$ [0, 1, 0].
            *   P2: `Need[2]` = [6, 0, 0]. `Work` = [0, 1, 0]. [6, 0, 0] $\not\leq$ [0, 1, 0].
            *   P3: `Need[3]` = [0, 1, 1]. `Work` = [0, 1, 0]. [0, 1, 1] $\not\leq$ [0, 1, 0]. (Specifically, Need[3,2]=1, Work[2]=0. So, P3 cannot run).
            *   P4: `Need[4]` = [4, 3, 1]. `Work` = [0, 1, 0]. [4, 3, 1] $\not\leq$ [0, 1, 0].

        *   No process `i` satisfies the condition.
        *   **Conclusion:** The system is in an **unsafe state**.

    **(ii)** If P1 requests [1, 0, 2]:

        1.  **Check Request:** `Request[1]` = [1, 0, 2]. `Need[1]` = [1, 2, 2].
            Is `Request[1]` $\leq$ `Need[1]`? Yes, [1, 0, 2] $\leq$ [1, 2, 2].

        2.  **Check Available:** `Request[1]` = [1, 0, 2]. `Available` = [0, 1, 0].
            Is `Request[1]` $\leq$ `Available`? No, [1, 0, 2] $\not\leq$ [0, 1, 0] (because Available[0]=0 and Available[2]=0, while Request[1] needs 1 of A and 2 of C).

        *   **Result:** The request cannot be granted immediately. P1 must wait. The system remains in its current unsafe state, and the request is denied.

This concludes Module 3. Understanding these concepts is vital for building reliable operating systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
