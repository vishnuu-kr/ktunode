---
title: "Obtain a (deadlock-free) process mix and simulate the banker’s algorithm to determine a safe execution sequence."
subject: "OPERATING SYSTEMS LAB"
module: "Module 11: Obtain a (deadlock"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b49f"
status: "completed"
scrapedAt: "2026-05-20T16:15:00.596Z"
---
# OPERATING SYSTEMS LAB: Module 11 - Deadlock and Banker's Algorithm

## Topic: Obtain a (deadlock-free) process mix and simulate the banker’s algorithm to determine a safe execution sequence.

**Learning Outcomes:**

*   Understand the concept of deadlock and its conditions.
*   Identify a deadlock-free process mix.
*   Comprehend the banker's algorithm and its purpose.
*   Simulate the banker's algorithm to determine a safe sequence.
*   Apply the banker's algorithm to different resource allocation scenarios.

### 1. Deadlock: Concepts and Conditions

*   **Definition:** A deadlock is a situation where two or more processes are blocked indefinitely, each waiting for a resource that is held by another process in the group.  No process can proceed, resulting in system standstill.

*   **Conditions for Deadlock (Coffman Conditions):** All four of these conditions must hold simultaneously for a deadlock to occur.

    *   **Mutual Exclusion:**  At least one resource must be held in a non-sharable mode; i.e., only one process at a time can use the resource.  If another process requests that resource, the requesting process must be delayed until the resource has been released.

    *   **Hold and Wait:** A process must be holding at least one resource and waiting to acquire additional resources that are currently being held by other processes.

    *   **No Preemption:**  A resource cannot be forcibly taken away from a process holding it.  It must be released voluntarily by the process after it has completed its task.

    *   **Circular Wait:**  A set `{P0, P1, ..., Pn}` of waiting processes must exist such that `P0` is waiting for a resource held by `P1`, `P1` is waiting for a resource held by `P2`, ..., `Pn-1` is waiting for a resource held by `Pn`, and `Pn` is waiting for a resource held by `P0`.

*   **Deadlock Avoidance vs. Deadlock Prevention:**

    *   **Deadlock Prevention:** Aims to negate one or more of the Coffman conditions.  This is often done by imposing restrictions on how processes request resources (e.g., require a process to request all resources at the beginning of execution).  Can lead to low resource utilization.

    *   **Deadlock Avoidance:**  Requires the system to have some information about the future resource needs of processes.  The system makes decisions about resource allocation based on this information, ensuring that the system will always be in a *safe state*.  The Banker's Algorithm is a classic deadlock avoidance technique.

### 2. Deadlock-Free Process Mix

*   **Definition:** A deadlock-free process mix is a combination of processes and their resource requirements that ensures the system will *never* enter a deadlock state.

*   **Achieving a Deadlock-Free Process Mix:** This often involves applying strategies like:

    *   **Resource Ordering:** Impose a global ordering on resource types. Processes must request resources in increasing order of this type. This prevents circular wait.  For instance, if a system has resources R1, R2, and R3, a process can request R1, then R2, then R3, but not R2 then R1.

    *   **Request All Resources Initially:** Require processes to request all needed resources before execution. This negates "hold and wait," but can lead to resource starvation.

    *   **Resource Preemption (Limited):** In certain cases, it's possible to design systems where resources can be preempted from a process.  This breaks "no preemption."  This is often complex to implement correctly.

    *   **Using the Banker's Algorithm:**  The system checks if granting a resource request will lead to an unsafe state.  If so, the request is denied, preventing a potential deadlock. This is the primary focus of this module.

### 3. The Banker's Algorithm: Purpose and Concepts

*   **Purpose:** The Banker's Algorithm is a deadlock avoidance algorithm used to ensure that the system remains in a safe state by carefully allocating resources to processes. It requires the system to know, *a priori*, the maximum resource needs of each process.

*   **Key Data Structures:**

    *   `n`: Number of processes in the system.
    *   `m`: Number of resource types.
    *   `Available`: A vector of length `m`. `Available[j]` indicates the number of instances of resource type `Rj` available in the system.
    *   `Max`: An `n x m` matrix. `Max[i][j]` indicates the maximum demand of process `Pi` for resource type `Rj`.
    *   `Allocation`: An `n x m` matrix. `Allocation[i][j]` indicates the number of instances of resource type `Rj` currently allocated to process `Pi`.
    *   `Need`: An `n x m` matrix. `Need[i][j]` = `Max[i][j]` - `Allocation[i][j]`.  Represents the remaining resource needs of process `Pi` for resource type `Rj`.

*   **Safe State:**  A state is safe if the system can allocate resources to each process (in some order) up to its maximum, and still avoid a deadlock. More formally: The system is in a safe state if there exists a *safe sequence* of processes `<P1, P2, ..., Pn>` such that, for each `Pi`, the resources that `Pi` can still request (`Need`) can be satisfied by the currently available resources plus the resources held by all the `Pj` where `j < i`.

*   **Algorithm Steps:**

    1.  Let `Work` be a vector of length `m`, and `Finish` be a vector of length `n`.
    2.  Initialize:
        *   `Work = Available`
        *   `Finish[i] = false` for all `i` (0 <= i < n)
    3.  Find an index `i` such that:
        *   `Finish[i] == false`
        *   `Need[i][j] <= Work[j]` for all `j` (0 <= j < m)
        If no such `i` exists, go to step 5.
    4.  `Work = Work + Allocation[i]`
        `Finish[i] = true`
        Go to step 3.
    5.  If `Finish[i] == true` for all `i`, then the system is in a safe state.  Otherwise, the system is in an unsafe state.

### 4. Simulating the Banker's Algorithm

**Example:**

Consider a system with 5 processes `P0` through `P4` and 3 resource types `A`, `B`, and `C`.

*   `Available = (3, 3, 2)`  (3 instances of A, 3 of B, 2 of C)

*   `Max =`
    ```
    | A B C |
    |-------|
    | 7 5 3 | P0
    | 3 2 2 | P1
    | 9 0 2 | P2
    | 2 2 2 | P3
    | 4 3 3 | P4
    ```

*   `Allocation =`
    ```
    | A B C |
    |-------|
    | 0 1 0 | P0
    | 2 0 0 | P1
    | 3 0 2 | P2
    | 2 1 1 | P3
    | 0 0 2 | P4
    ```

*   `Need = Max - Allocation =`
    ```
    | A B C |
    |-------|
    | 7 4 3 | P0
    | 1 2 2 | P1
    | 6 0 0 | P2
    | 0 1 1 | P3
    | 4 3 1 | P4
    ```

**Applying the Banker's Algorithm:**

1.  `Work = Available = (3, 3, 2)`
    `Finish = (false, false, false, false, false)`

2.  **Iteration 1:**
    *   Can `P1` be satisfied? `Need[1] = (1, 2, 2) <= Work = (3, 3, 2)`? Yes.
    *   `Work = Work + Allocation[1] = (3, 3, 2) + (2, 0, 0) = (5, 3, 2)`
    *   `Finish[1] = true`

3.  **Iteration 2:**
    *   Can `P3` be satisfied? `Need[3] = (0, 1, 1) <= Work = (5, 3, 2)`? Yes.
    *   `Work = Work + Allocation[3] = (5, 3, 2) + (2, 1, 1) = (7, 4, 3)`
    *   `Finish[3] = true`

4.  **Iteration 3:**
    *   Can `P0` be satisfied? `Need[0] = (7, 4, 3) <= Work = (7, 4, 3)`? Yes.
    *   `Work = Work + Allocation[0] = (7, 4, 3) + (0, 1, 0) = (7, 5, 3)`
    *   `Finish[0] = true`

5.  **Iteration 4:**
    *   Can `P2` be satisfied? `Need[2] = (6, 0, 0) <= Work = (7, 5, 3)`? Yes.
    *   `Work = Work + Allocation[2] = (7, 5, 3) + (3, 0, 2) = (10, 5, 5)`
    *   `Finish[2] = true`

6.  **Iteration 5:**
    *   Can `P4` be satisfied? `Need[4] = (4, 3, 1) <= Work = (10, 5, 5)`? Yes.
    *   `Work = Work + Allocation[4] = (10, 5, 5) + (0, 0, 2) = (10, 5, 7)`
    *   `Finish[4] = true`

7.  Since `Finish[i] == true` for all `i`, the system is in a safe state.

**Safe Sequence:**  `<P1, P3, P0, P2, P4>` is a safe sequence.

**Requesting a Resource:**

Suppose process `P1` requests an additional instance of resource `A`.  The request is `Request_1 = (1, 0, 0)`.

1.  Is `Request_1 <= Need[1]`?  `(1, 0, 0) <= (1, 2, 2)`? Yes.
2.  Is `Request_1 <= Available`? `(1, 0, 0) <= (3, 3, 2)`? Yes.
3.  **Simulate allocation:** Assume the allocation is granted.
    *   `Available = Available - Request_1 = (3, 3, 2) - (1, 0, 0) = (2, 3, 2)`
    *   `Allocation[1] = Allocation[1] + Request_1 = (2, 0, 0) + (1, 0, 0) = (3, 0, 0)`
    *   `Need[1] = Need[1] - Request_1 = (1, 2, 2) - (1, 0, 0) = (0, 2, 2)`

4.  **Run the Banker's Algorithm with the simulated allocation:**
    After running the algorithm with the updated matrices, the safe sequence is `<P1, P3, P0, P2, P4>` as before, confirming that granting the request maintains a safe state. Therefore, the request *can* be granted.

**What if the safe sequence could not be found in step 4 after the simulation?** This would indicate that granting the request would lead to an unsafe state. In that case, the resource request would have to be denied, and P1 would have to wait. The `Available`, `Allocation`, and `Need` matrices would return to their original states.

### 5. Practice Questions/Exercises

**Question 1:**

Given the following data:

*   `Available = (1, 5, 2, 0)`
*   `Max =`
    ```
    | A B C D |
    |---------|
    | 0 0 1 2 | P0
    | 1 7 5 0 | P1
    | 2 3 5 6 | P2
    | 0 6 5 2 | P3
    | 0 6 5 6 | P4
    ```
*   `Allocation =`
    ```
    | A B C D |
    |---------|
    | 0 0 1 2 | P0
    | 1 0 0 0 | P1
    | 1 3 5 4 | P2
    | 0 6 3 2 | P3
    | 0 0 1 4 | P4
    ```

Is the system in a safe state? If so, what is the safe sequence?

**Answer 1:**

1.  Calculate `Need = Max - Allocation`:

    ```
    | A B C D |
    |---------|
    | 0 0 0 0 | P0
    | 0 7 5 0 | P1
    | 1 0 0 2 | P2
    | 0 0 2 0 | P3
    | 0 6 4 2 | P4
    ```

2. Apply the Banker's Algorithm:

After applying the algorithm, one possible safe sequence is: `<P0, P1, P3, P4, P2>`. Therefore, the system is in a safe state.

**Question 2:**

Using the data from Question 1, suppose process `P1` requests `(0, 4, 2, 0)`. Can the request be granted?

**Answer 2:**

1. Check `Request <= Need`:  `(0, 4, 2, 0) <= (0, 7, 5, 0)`? Yes.
2. Check `Request <= Available`: `(0, 4, 2, 0) <= (1, 5, 2, 0)`? Yes.
3. Simulate the allocation:
    *   `Available = Available - Request = (1, 5, 2, 0) - (0, 4, 2, 0) = (1, 1, 0, 0)`
    *   `Allocation[1] = Allocation[1] + Request = (1, 0, 0, 0) + (0, 4, 2, 0) = (1, 4, 2, 0)`
    *   `Need[1] = Need[1] - Request = (0, 7, 5, 0) - (0, 4, 2, 0) = (0, 3, 3, 0)`

4. Recalculate `Need = Max - Allocation`:

    ```
    | A B C D |
    |---------|
    | 0 0 0 0 | P0
    | 0 3 3 0 | P1  //Updated
    | 1 0 0 2 | P2
    | 0 0 2 0 | P3
    | 0 6 4 2 | P4
    ```

5.  Run the Banker's Algorithm with the modified data. After doing so, the modified data is in unsafe state. Hence the allocation cannot be granted

**Question 3:** Explain the difference between deadlock prevention and deadlock avoidance.  Give an example of a technique used for each.

**Answer 3:**

*   **Deadlock Prevention:** Aims to break one or more of the Coffman conditions to prevent deadlocks from ever occurring. Example: Resource Ordering (preventing circular wait).
*   **Deadlock Avoidance:** Allows all the Coffman conditions to exist but makes intelligent decisions about resource allocation based on *a priori* information about resource needs, ensuring the system always stays in a safe state.  Example: Banker's Algorithm.

### 6. Important Points to Remember

*   The Banker's Algorithm relies on knowing the *maximum* resource needs of processes in advance. This is a significant limitation.
*   The Banker's Algorithm ensures safety but can reduce resource utilization because it might deny resource requests that *could* have been granted without leading to a deadlock, but which the algorithm cannot *guarantee* are safe.
*   The algorithm's complexity is O(n^2 * m), where n is the number of processes and m is the number of resource types. This can be expensive for systems with a large number of processes and resources.
*   The Banker's Algorithm is a deadlock *avoidance* technique, not a deadlock *detection* or *recovery* technique. If a deadlock occurs due to some unforeseen circumstance (e.g., inaccurate information about resource needs), the Banker's Algorithm will not be able to resolve it.
