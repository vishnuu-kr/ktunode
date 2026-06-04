---
title: "Deadlock and Starvation - Deadlock Characterization"
subject: "OPERATING SYSTEMS"
module: "Module 2: Concurrency and Synchronization  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8afb0"
status: "completed"
scrapedAt: "2026-05-20T16:14:11.013Z"
---
# OPERATING SYSTEMS - Module 2: Concurrency and Synchronization - Deadlock and Starvation - Deadlock Characterization

## Learning Outcomes:

Upon completion of this topic, you will be able to:

*   Understand the concept of Deadlock and Starvation.
*   Identify the four necessary conditions for Deadlock to occur.
*   Explain the resource allocation graph and its relation to deadlock.
*   Differentiate between resource types and instances.
*   Apply deadlock characterization principles to real-world scenarios.

## 1. Introduction to Deadlock and Starvation

*   **Deadlock:** A situation in which two or more processes are blocked indefinitely, each waiting for a resource that is held by another process in the group. No process involved in the deadlock can proceed. It represents a complete standstill.

    *   **Example:** Process A holds resource X and needs resource Y. Process B holds resource Y and needs resource X. Neither process can proceed.

*   **Starvation:** A situation in which a process is repeatedly denied access to a resource it needs, even though the resource is continuously available.  The process is perpetually delayed, although other processes are able to access the resource.

    *   **Example:** A CPU scheduling algorithm that always gives priority to short jobs might cause long jobs to starve.

*   **Key Difference:** Deadlock involves a *circular* wait condition, where processes are waiting *on each other*. Starvation is a *persistent denial* of resources to a single process, but not necessarily caused by a circular wait.

## 2. Deadlock Characterization: Necessary Conditions

For a deadlock to occur, the following four conditions *must hold simultaneously*:

*   **2.1 Mutual Exclusion:**  At least one resource must be held in a non-sharable mode; that is, only one process at a time can use the resource. If another process requests that resource, the requesting process must be delayed until the resource has been released.

    *   **Example:** A printer is a non-sharable resource. Only one process can print at a time.

*   **2.2 Hold and Wait:**  A process must be holding at least one resource and waiting to acquire additional resources that are currently being held by other processes.

    *   **Example:** Process A holds file X and is waiting to acquire file Y, which is held by Process B.

*   **2.3 No Preemption:** Resources cannot be forcibly taken away from a process holding them. A resource can be released only voluntarily by the process holding it, after that process has completed its task.

    *   **Example:**  A process holding a lock on a database record cannot be forced to release it by another process.

*   **2.4 Circular Wait:**  A set `{P0, P1, …, Pn}` of waiting processes must exist such that `P0` is waiting for a resource held by `P1`, `P1` is waiting for a resource held by `P2`, …, `Pn-1` is waiting for a resource held by `Pn`, and `Pn` is waiting for a resource held by `P0`.  This forms a circular dependency.

    *   **Example:**
        *   P1 holds R1 and requests R2
        *   P2 holds R2 and requests R3
        *   P3 holds R3 and requests R1

    *   **Important Note:** If *any* of these four conditions is *not* met, a deadlock cannot occur.

## 3. Resource Allocation Graph

The resource allocation graph is a directed graph used to visually represent the state of resource allocation and process requests. It helps in identifying potential deadlocks.

*   **Vertices:** The graph has two types of vertices:
    *   `P = {P1, P2, ..., Pn}`: Set of active processes in the system. Represented as circles.
    *   `R = {R1, R2, ..., Rm}`: Set of resource types in the system.  Represented as squares.

*   **Edges:** The graph has two types of edges:
    *   **Request Edge:**  A directed edge from process `Pi` to resource type `Rj` (denoted `Pi -> Rj`).  It signifies that process `Pi` has requested an instance of resource type `Rj` and is currently waiting for it.
    *   **Assignment Edge:**  A directed edge from resource type `Rj` to process `Pi` (denoted `Rj -> Pi`).  It signifies that an instance of resource type `Rj` has been allocated to process `Pi`.

*   **Resource Instances:** Each resource type `Rj` can have multiple instances represented by dots inside the square representing `Rj`.

*   **Deadlock Detection:**  If the resource allocation graph contains a *cycle*, then a deadlock *may* exist.
    *   **Important:** If each resource type has only *one* instance, then a cycle in the graph implies that a deadlock *does* exist.
    *   If a resource type has *multiple* instances, a cycle does *not necessarily* imply a deadlock. It only indicates a possibility. Further analysis is required.

*   **Example:**

    ```
    Process A requests Resource X (P1 -> R1)
    Resource X is assigned to Process B (R1 -> P2)
    Process B requests Resource Y (P2 -> R2)
    Resource Y is assigned to Process A (R2 -> P1)

    This creates a cycle: P1 -> R1 -> P2 -> R2 -> P1, indicating a deadlock if R1 and R2 each have only one instance.
    ```

## 4. Resource Types and Instances

*   **Resource Type:** A class of indistinguishable resources. Examples include: printers, tape drives, memory space, CPUs, files, database records.

*   **Resource Instance:** A specific, individual member of a resource type.  For example, "Printer #3" is an instance of the resource type "Printer".  If a printer is a type, there might be multiple instances of that type, such as printer1, printer2, etc.

*   **Number of Instances:** Each resource type can have one or more instances.  The number of instances is crucial for deadlock analysis. If a cycle exists in the Resource Allocation Graph and each resource involved in the cycle only has one instance, then a deadlock *definitely* exists.

## 5.  Deadlock Characterization in Real-World Scenarios

*   **Databases:** Deadlocks can occur when multiple transactions try to access and modify the same data concurrently. For example, transaction A might lock record X and try to lock record Y, while transaction B locks record Y and tries to lock record X. This creates a circular wait.

*   **Operating System Resource Management:** Deadlocks can arise in the allocation of CPU time, memory, files, and I/O devices.  For instance, consider two processes competing for memory and a disk drive.

*   **Networking:** Deadlocks can occur in network protocols, such as routing protocols, where nodes are waiting for information from each other in a circular fashion.

*   **Multithreaded Applications:** Deadlocks can easily occur when threads access shared resources using locks (mutexes, semaphores).  Care must be taken to avoid circular dependencies in lock acquisition.

## 6. Important Points to Remember

*   All four necessary conditions (Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait) *must* be present simultaneously for a deadlock to occur.
*   The Resource Allocation Graph is a useful tool for visualizing resource allocation and detecting potential deadlocks.
*   A cycle in the Resource Allocation Graph guarantees a deadlock only if each resource type involved has only one instance.
*   Understanding the underlying causes of deadlocks is crucial for implementing strategies to prevent, avoid, or detect and recover from them.

## 7. Practice Questions and Exercises

**Question 1:** Which of the following conditions is NOT a necessary condition for deadlock?
    a) Mutual Exclusion
    b) Hold and Wait
    c) Preemption
    d) Circular Wait

**Answer:** c) Preemption.  The *absence* of preemption is a necessary condition; preemption itself is not.

**Question 2:** Draw a resource allocation graph for the following scenario:

*   Process P1 holds resource R1 and requests resource R2.
*   Process P2 holds resource R2 and requests resource R1.
*   Assume resources R1 and R2 each have one instance.

**Answer:**

```
     +-------+       +-------+
     |  R1   |----->|  P2   |----->
     +-------+       +-------+       |
       ^               ^              |
       |               |              |
       |       +-------+      |
       +-------|  P1   |<-----+
               +-------+
                   |
                   v
               +-------+
               |  R2   |
               +-------+
```

**Question 3:** Does the resource allocation graph in Question 2 represent a deadlock? Why or why not?

**Answer:** Yes, it represents a deadlock.  There is a cycle in the graph (P1 -> R2 -> P2 -> R1 -> P1), and each resource type (R1 and R2) has only one instance.

**Question 4:**  Suppose there are three processes (P1, P2, and P3) and three resources (R1, R2, and R3). P1 holds R1 and requests R2. P2 holds R2 and requests R3. P3 holds R3 and requests R1.  Each resource has only one instance.  Is there a deadlock?  Explain.

**Answer:** Yes, there is a deadlock. The scenario satisfies the circular wait condition: P1 is waiting for R2 held by P2, P2 is waiting for R3 held by P3, and P3 is waiting for R1 held by P1. All four necessary conditions for deadlock are met.

**Question 5:** What is the difference between deadlock and starvation?

**Answer:** Deadlock is a state where two or more processes are blocked indefinitely, each waiting for a resource held by another. Starvation is a situation where a process is repeatedly denied access to a resource it needs, even though the resource is continuously available. Deadlock involves a circular wait; starvation doesn't necessarily.
