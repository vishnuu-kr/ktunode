---
title: "Obtain a process mix and determine if the system is deadlocked."
subject: "OPERATING SYSTEMS LAB"
module: "Module 12: Obtain a process mix and determine if the system is deadlocked."
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b4a1"
status: "completed"
scrapedAt: "2026-05-20T16:15:01.813Z"
---
# OPERATING SYSTEMS LAB - Module 12: Deadlock Detection

## Topic: Obtain a Process Mix and Determine if the System is Deadlocked

### Learning Outcomes:

*   Understand the concept of a process mix.
*   Learn how to obtain the current process mix in a real-world operating system (e.g., Linux).
*   Understand the necessary conditions for deadlock.
*   Learn different methods for detecting deadlock.
*   Implement deadlock detection algorithms.
*   Interpret the results of deadlock detection.

---

### 1. Key Concepts and Definitions:

*   **Process Mix:** The collection of processes currently running or ready to run in the system at a particular point in time.  It includes information about what resources each process is holding and what resources each process is requesting.  Understanding the process mix is essential for identifying potential deadlocks.

*   **Resource:**  Anything a process might need to complete its task, like memory, I/O devices (printers, disks), CPU time, files, semaphores, or locks.

*   **Deadlock:** A situation where two or more processes are blocked indefinitely, waiting for each other to release resources.  None of the processes can proceed, leading to system standstill.

*   **Necessary Conditions for Deadlock (Coffman Conditions):** All four of these conditions must hold simultaneously for a deadlock to occur:
    *   **Mutual Exclusion:**  Resources are non-sharable; only one process can use a resource at a time.
    *   **Hold and Wait:** A process is holding at least one resource and is waiting to acquire additional resources held by other processes.
    *   **No Preemption:** Resources cannot be forcibly taken away from a process; they must be released voluntarily by the process holding them.
    *   **Circular Wait:** A circular chain of processes exists where each process is waiting for a resource held by the next process in the chain.  For example: P1 is waiting for a resource held by P2, P2 is waiting for a resource held by P3, and P3 is waiting for a resource held by P1.

*   **Resource Allocation Graph (RAG):** A directed graph used to visualize resource allocation.  It consists of:
    *   **Processes (Circles):** Represent active processes.
    *   **Resources (Squares):** Represent available resources.
    *   **Request Edges:** A directed edge from a process to a resource, indicating the process is requesting the resource.
    *   **Assignment Edges:** A directed edge from a resource to a process, indicating the resource has been allocated to the process.

*   **Deadlock Detection Algorithms:** Algorithms used to analyze the process mix and identify if a deadlock exists.

*   **Safe State:**  A state in which the system can allocate resources to each process in some order and still avoid a deadlock.

*   **Unsafe State:**  A state that *may* lead to a deadlock.  Not all unsafe states result in deadlock, but there is a risk.

---

### 2. Obtaining a Process Mix:

In a Linux environment, you can use several tools to gather information about the current process mix:

*   **`ps` command:**  Provides a snapshot of the current processes.  Useful flags include:
    *   `ps aux`:  Displays all processes with detailed information (user, PID, CPU usage, memory usage, etc.).
    *   `ps -eLf`: Shows process hierarchy, including threads.

*   **`top` command:** Provides a dynamic, real-time view of the system's processes.  It shows CPU usage, memory usage, and process information.

*   **`/proc` filesystem:**  This virtual filesystem provides detailed information about each process.  Each process has a directory named after its PID.  Within these directories, you can find files like `status` (process state, UID, GID, etc.), `cmdline` (command used to start the process), `maps` (memory mappings), `fd` (file descriptors), etc.  This is the most detailed source of information.

*   **`lsof` command:** Lists open files and the processes using them. This can reveal which processes are holding resources (files, sockets, etc.) that other processes might be waiting for.

**Example (Linux):**

To get a basic process list:

```bash
ps aux
```

To examine a specific process (e.g., PID 1234):

```bash
cat /proc/1234/status
cat /proc/1234/cmdline
```

**Note:**  Interpreting the `/proc` filesystem often requires understanding kernel data structures.

---

### 3. Deadlock Detection Methods:

#### 3.1. Resource Allocation Graph (RAG) Reduction:

*   **Applicable when:**  There is only one instance of each resource type.
*   **Method:**
    1.  Construct the RAG based on the current process mix (resource requests and allocations).
    2.  Look for a process P that has no outstanding resource requests (all requested resources have been allocated).
    3.  If such a process P exists, simulate the process completing:
        *   Remove all assignment edges from the resources allocated to P.
        *   Remove process P from the graph.
    4.  Repeat steps 2 and 3 until either:
        *   The graph is completely reduced (all processes removed):  There is *no* deadlock.
        *   The graph cannot be further reduced: There *is* a deadlock. The remaining processes in the graph are deadlocked.

**Example:**

Consider the following RAG:

*   Process P1 is requesting Resource R1.
*   Process P2 is requesting Resource R2.
*   Resource R1 is allocated to P2.
*   Resource R2 is allocated to P1.

This graph cannot be reduced, indicating a deadlock between P1 and P2.

#### 3.2. Banker's Algorithm (For Multiple Instances of Resources):

*   **Concept:** A deadlock avoidance algorithm, not detection.  However, understanding it helps in understanding deadlock principles.  It requires the system to know the maximum resource needs of each process in advance.
*   **Data Structures:**
    *   `Available[i]`:  Vector indicating the number of available instances of resource type `i`.
    *   `Max[i][j]`: Matrix indicating the maximum demand of process `i` for resource type `j`.
    *   `Allocation[i][j]`: Matrix indicating the number of instances of resource type `j` currently allocated to process `i`.
    *   `Need[i][j]`: Matrix indicating the remaining resource needs of process `i` for resource type `j` (`Need[i][j] = Max[i][j] - Allocation[i][j]`).
*   **Algorithm:**
    1.  `Work = Available`
    2.  `Finish[i] = false` for all processes `i`
    3.  Find an `i` such that:
        *   `Finish[i] == false`
        *   `Need[i][j] <= Work[j]` for all `j` (process i's remaining needs can be met by available resources)
    4.  If no such `i` exists, go to step 6.
    5.  `Work = Work + Allocation[i]` (simulate process `i` finishing and releasing its resources)
        `Finish[i] = true`
        Go to step 3.
    6.  If `Finish[i] == false` for some `i`, the system is in an unsafe state (potentially deadlocked).

#### 3.3.  Deadlock Detection Algorithm for Multiple Instances:

*   This algorithm is similar to the Banker's Algorithm but doesn't require prior knowledge of maximum resource needs.  It tries to find a sequence of processes that can finish, assuming resources are released as they complete.
*   **Data Structures:**  Similar to Banker's Algorithm: `Available`, `Allocation`, `Request` (instead of `Need`).
    *   `Request[i][j]`: Matrix indicating the number of instances of resource type `j` currently requested by process `i`.
*   **Algorithm:**
    1.  `Work = Available`
    2.  `Finish[i] = false` for all processes `i`
    3.  Find an `i` such that:
        *   `Finish[i] == false`
        *   `Request[i][j] <= Work[j]` for all `j` (process i's resource request can be immediately granted)
    4.  If no such `i` exists, go to step 6.
    5.  `Work = Work + Allocation[i]` (simulate process `i` finishing and releasing its resources)
        `Finish[i] = true`
        Go to step 3.
    6.  If `Finish[i] == false` for some `i`, then process `i` is part of a deadlock.  All processes with `Finish[i] == false` are part of the deadlock.

**Important Note:** This detection algorithm identifies the *possibility* of deadlock. It doesn't guarantee a deadlock is inevitable, but it indicates a dangerous situation.

---

### 4. Implementation (Conceptual Example in Python):

This is a simplified example for demonstration purposes.  A real-world implementation would involve interacting with the operating system kernel to obtain the `Allocation` and `Request` information.

```python
def deadlock_detection(available, allocation, request):
    """
    Detects deadlock using the algorithm described above.

    Args:
        available: A list representing the available resources.
        allocation: A list of lists representing the resources allocated to each process.
        request: A list of lists representing the resources requested by each process.

    Returns:
        A tuple: (is_deadlocked, deadlocked_processes)
        is_deadlocked: True if deadlock is detected, False otherwise.
        deadlocked_processes: A list of the indices of the deadlocked processes.
    """

    n = len(allocation)  # Number of processes
    m = len(available)  # Number of resource types

    work = list(available)  # Copy available resources
    finish = [False] * n

    while True:
        found = False
        for i in range(n):
            if not finish[i]:
                can_allocate = True
                for j in range(m):
                    if request[i][j] > work[j]:
                        can_allocate = False
                        break

                if can_allocate:
                    for j in range(m):
                        work[j] += allocation[i][j]
                    finish[i] = True
                    found = True
                    break  # Restart the outer loop

        if not found:
            break  # No process can be allocated, exit the loop

    deadlocked_processes = [i for i, f in enumerate(finish) if not f]
    is_deadlocked = len(deadlocked_processes) > 0

    return is_deadlocked, deadlocked_processes

# Example usage:
available = [3, 3, 2]
allocation = [[0, 1, 0], [2, 0, 0], [3, 0, 2], [2, 1, 1], [0, 0, 2]]
request = [[0, 0, 0], [2, 0, 2], [0, 0, 0], [1, 0, 0], [0, 0, 2]]

is_deadlocked, deadlocked_processes = deadlock_detection(available, allocation, request)

if is_deadlocked:
    print("Deadlock detected!")
    print("Deadlocked processes:", deadlocked_processes)
else:
    print("No deadlock detected.")
```

**Explanation:**

1.  The `deadlock_detection` function takes `available`, `allocation`, and `request` matrices as input.
2.  It initializes `work` (available resources) and `finish` (boolean array indicating if a process can finish).
3.  The `while` loop iterates until no more processes can be found that can complete their requests given the current `work` resources.
4.  Inside the loop, it checks each process `i`.  If `finish[i]` is `False` and the `request[i]` can be satisfied by `work`, then the process is considered to have finished.  Its `finish[i]` is set to `True`, and `work` is updated to include the resources released by the process.
5.  Finally, it identifies the processes that remain `False` in `finish`, indicating that they are part of the deadlock.

**Limitations of the example:**

*   **Simplified Data Structures:**  In a real OS, `Allocation` and `Request` information is not readily available in a simple matrix format. You'd need to query the kernel's process and resource management data structures.
*   **Resource Types:** This simplified example assumes all resources are of the same type. In reality, you'd have different resource types (printers, files, mutexes, etc.) each with its own instances.
*   **Kernel Access:**  The actual implementation requires access to kernel-level data structures, which typically involves system calls or kernel modules.

---

### 5. Interpreting Results:

*   **No Deadlock:** If the deadlock detection algorithm finds a safe sequence, it means the system *can* allocate resources in a way that avoids deadlock. However, it doesn't guarantee that a deadlock *will not* occur in the future if processes make different resource requests.
*   **Deadlock Detected:** If the algorithm detects a deadlock:
    *   Identify the deadlocked processes.  These are the processes that could not complete.
    *   Determine the resources involved in the deadlock. This can be derived from the `Allocation` and `Request` matrices.
    *   The operating system must then take action to break the deadlock (see below).

---

### 6. Handling Deadlocks (Beyond Detection):

The purpose of this module is **detection**, not resolution. However, it's important to briefly mention deadlock handling strategies:

*   **Deadlock Prevention:** Design the system to *prevent* deadlocks from occurring in the first place by eliminating one or more of the Coffman conditions. For example:
    *   Eliminate Hold and Wait: Require processes to request all resources at once before starting.
    *   Allow Preemption: Take resources away from a process (carefully!).
    *   Eliminate Circular Wait: Impose a hierarchical ordering on resource acquisition.
*   **Deadlock Avoidance:**  Use algorithms like the Banker's Algorithm to carefully allocate resources to avoid unsafe states.
*   **Deadlock Recovery:**  After detection, the OS can:
    *   **Process Termination:**  Abort one or more deadlocked processes.  This is the simplest but potentially harshest approach.
    *   **Resource Preemption:**  Forcibly take resources away from a process and give them to another process to break the deadlock. Requires careful resource management and can lead to starvation.
    *   **Rollback:**  If the system uses checkpoints, rollback processes to a previous safe state.

---

### 7. Practice Questions/Exercises:

1.  **Question:** List the four necessary conditions for deadlock.
    **Answer:** Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait.

2.  **Question:** What is a Resource Allocation Graph (RAG)? Explain its components.
    **Answer:** A directed graph used to visualize resource allocation. Components: Processes (circles), Resources (squares), Request Edges, Assignment Edges.

3.  **Question:** Given the following data, use the deadlock detection algorithm to determine if a deadlock exists.
    `Available = [1, 0, 1]`
    `Allocation = [[0, 1, 0], [2, 0, 0], [3, 0, 1]]`
    `Request = [[0, 0, 0], [1, 0, 1], [0, 0, 0]]`
    **Answer:**
    *   Initialize `Work = [1, 0, 1]` and `Finish = [False, False, False]`
    *   Process 0: Request `[0, 0, 0]` <= `Work [1, 0, 1]` is true.  `Work = Work + Allocation[0] = [1, 0, 1] + [0, 1, 0] = [1, 1, 1]`, `Finish[0] = True`
    *   Process 2: Request `[0, 0, 0]` <= `Work [1, 1, 1]` is true.  `Work = Work + Allocation[2] = [1, 1, 1] + [3, 0, 1] = [4, 1, 2]`, `Finish[2] = True`
    *   Process 1: Request `[1, 0, 1]` <= `Work [4, 1, 2]` is true. `Work = Work + Allocation[1] = [4, 1, 2] + [2, 0, 0] = [6, 1, 2]`, `Finish[1] = True`
    *   All processes are finished.  Therefore, no deadlock exists.

4.  **Question:**  Explain the difference between deadlock prevention and deadlock avoidance.
    **Answer:** Deadlock prevention aims to eliminate the *possibility* of deadlock by negating one or more of the Coffman conditions.  Deadlock avoidance, on the other hand, allows the necessary conditions to exist but uses algorithms (like Banker's Algorithm) to carefully allocate resources to ensure the system never enters an unsafe state.

5.  **Question:**  How can you use the `ps` command in Linux to gather information relevant to deadlock analysis?
    **Answer:**  `ps aux` can show you the processes running, their resource usage (CPU, memory), and their PID, which can then be used to further investigate their resource usage through the `/proc` filesystem or `lsof`.

---

### 8. Important Points to Remember:

*   Deadlock can lead to severe system performance degradation.
*   Deadlock detection is often computationally expensive, so it's not typically performed continuously.
*   The necessary conditions for deadlock (Coffman Conditions) must *all* be present for a deadlock to occur.
*   Deadlock avoidance requires knowing the maximum resource needs of each process in advance.
*   Deadlock detection is crucial for recovering from deadlocks when prevention or avoidance techniques are not sufficient.
*   Real-world deadlock detection involves interacting with the OS kernel to obtain process and resource information.
