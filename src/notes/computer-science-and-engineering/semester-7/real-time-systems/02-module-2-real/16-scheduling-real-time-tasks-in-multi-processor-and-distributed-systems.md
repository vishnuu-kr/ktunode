---
title: "Scheduling Real-Time tasks in multi processor and distributed systems"
subject: "REAL TIME SYSTEMS"
module: "Module 2: Real"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c31c"
status: "completed"
scrapedAt: "2026-05-20T17:10:09.516Z"
---
# Module 2: Real-Time Task Scheduling in Multiprocessor and Distributed Systems

## 1. Introduction to Real-Time Task Scheduling

### 1.1. What is Real-Time Task Scheduling?
*   **Definition:** The process of assigning tasks to processors over time to meet their deadlines.
*   **Key Goal:** To ensure that all time-critical tasks are completed within their specified deadlines, preventing system failures or undesirable outcomes.
*   **Challenges in Multiprocessor/Distributed Systems:**
    *   **Increased Complexity:** Managing multiple processors and communication delays significantly complicates scheduling decisions.
    *   **Resource Contention:** Multiple tasks competing for limited processor and communication resources.
    *   **Communication Overhead:** Data transfer and synchronization between processors introduce delays.
    *   **Load Balancing:** Distributing tasks evenly across processors to maximize utilization and minimize response times.
    *   **Fault Tolerance:** Designing schedules that can adapt to processor failures or network disruptions.

### 1.2. Key Concepts and Definitions

*   **Task:** A unit of work with a defined execution time, deadline, and arrival time.
    *   **Periodic Task:** Arrives at regular intervals (e.g., sensor readings).
    *   **Aperiodic Task:** Arrives at irregular intervals (e.g., user interrupts).
    *   **Sporadic Task:** Aperiodic task with a minimum inter-arrival time.
*   **Processor:** A computational unit capable of executing tasks.
*   **Deadline:** The time by which a task must complete its execution.
    *   **Absolute Deadline:** The specific point in time by which a task must finish.
    *   **Relative Deadline:** The time duration after the task's arrival by which it must finish.
*   **Period (for Periodic Tasks):** The time interval between successive arrivals of a task.
*   **Worst-Case Execution Time (WCET):** The maximum time a task can take to execute.
*   **Response Time:** The time from a task's arrival to its completion.
*   **Jitter:** The variation in the arrival times of periodic tasks.
*   **System Utilization:** The fraction of processor time that is occupied by tasks.
*   **Preemption:** The ability to interrupt a running task to execute a higher-priority task.
*   **Task Migration:** Moving a task from one processor to another during its execution.

## 2. Scheduling Algorithms for Multiprocessor Systems

Multiprocessor scheduling can be broadly categorized into two main approaches:

### 2.1. Partitioned Scheduling

*   **Concept:** Tasks are statically assigned to specific processors. Once assigned, a task remains on that processor for its entire execution.
*   **Advantages:**
    *   Simpler implementation.
    *   Reduces the overhead of task migration.
    *   Easier to analyze for schedulability.
*   **Disadvantages:**
    *   Can lead to processor underutilization if task distribution is uneven.
    *   Less flexible in adapting to dynamic changes in task loads.
*   **Common Algorithms:**
    *   **Global First-Come, First-Served (FCFS):** Tasks are executed in the order they arrive across all processors.
        *   *Example:* Imagine 4 processors. Task A arrives, then Task B. If Task A is assigned to Processor 1 and Task B to Processor 2, Task A will run on P1 and Task B on P2. If both arrive and are assigned to the same processor, the one that arrived first will execute.
    *   **Global Rate Monotonic (GRM) / Global Earliest Deadline First (GEDF):** Priority is assigned globally based on task periods (RM) or deadlines (EDF). A task with the highest priority among all ready tasks across all processors is selected for execution.
        *   *Example (GRM):* Tasks T1 (period 10ms), T2 (period 20ms), T3 (period 30ms). T1 has the highest priority, T2 second, T3 lowest. On a 2-processor system, if T1, T2, and T3 are ready, the highest priority task (T1) will run on an available processor.
    *   **Partitioned Rate Monotonic (PRM) / Partitioned Earliest Deadline First (PEDF):** Similar to GRM/GEDF, but tasks are first partitioned to processors. Then, a uniprocessor scheduling algorithm (like RM or EDF) is applied on each partition.
        *   *Partitioning Strategies:*
            *   **First Fit:** Assign tasks to the first processor that can accommodate them.
            *   **Best Fit:** Assign tasks to the processor that leaves the least amount of unused capacity.
            *   **Worst Fit:** Assign tasks to the processor that leaves the most amount of unused capacity.

### 2.2. Global Scheduling

*   **Concept:** Tasks are not permanently assigned to any processor. A global scheduler maintains a single ready queue for all processors. Any available processor can execute any task from the ready queue.
*   **Advantages:**
    *   Potentially higher processor utilization.
    *   Better load balancing.
    *   More adaptable to dynamic workloads.
*   **Disadvantages:**
    *   Higher complexity in implementation and analysis.
    *   Significant overhead due to context switching and task migration.
    *   Can lead to "impromptu" migration, causing performance degradation.
*   **Common Algorithms:**
    *   **Global Earliest Deadline First (GEDF):** The task with the earliest absolute deadline across all processors is chosen to run on an available processor.
        *   *Example:* Two processors, P1 and P2. Tasks T1 (deadline 5ms), T2 (deadline 10ms), T3 (deadline 7ms). If P1 and P2 are free, T1 will run on one, and T3 will run on the other. If T2 becomes ready later, it will run on whichever processor becomes free first, as it has the earliest deadline after T1.
    *   **Global Rate Monotonic (GRM):** Similar to GEDF, but priority is based on the task's period. Tasks with shorter periods have higher priorities.
        *   *Example:* Tasks T1 (period 5ms), T2 (period 10ms), T3 (period 15ms). T1 has the highest priority. If all are ready, T1 runs on an available processor. If T1 is already running on P1 and T2 and T3 are ready, T2 will run on P2. If T1 completes and T2 is still running on P2, T1 might then preempt T2 if it has a higher priority and T2 has not yet met its deadline.
    *   **Least Laxity First (LLF):** The task with the smallest laxity (deadline - current time - remaining execution time) is scheduled.
        *   *Example:* T1 (remaining exec 2ms, deadline 10ms), T2 (remaining exec 3ms, deadline 12ms).
            *   Laxity(T1) = 10 - current_time - 2
            *   Laxity(T2) = 12 - current_time - 3
            *   If current_time = 7ms: Laxity(T1) = 10 - 7 - 2 = 1ms, Laxity(T2) = 12 - 7 - 3 = 2ms. T1 would be scheduled.

**Important Point:** Global scheduling algorithms require a mechanism to select the next task to run from the global ready queue and a strategy for deciding when and how to migrate tasks.

## 3. Scheduling Algorithms for Distributed Systems

Distributed systems add the complexity of communication delays and network topology.

### 3.1. Key Considerations in Distributed Scheduling

*   **Communication Delays:** The time taken for messages to travel between processors. This impacts when tasks can start and how synchronization occurs.
*   **Network Topology:** The arrangement of processors and communication links affects communication patterns and potential bottlenecks.
*   **Data Dependencies:** Tasks may depend on data produced by other tasks on different processors.
*   **Global State:** Maintaining a consistent view of the system's state across all processors is challenging.
*   **Clock Synchronization:** Ensuring that clocks on different processors are synchronized is crucial for accurate deadline management.

### 3.2. Approaches to Distributed Scheduling

*   **Centralized Scheduling:**
    *   **Concept:** A single scheduler node manages tasks for the entire distributed system.
    *   **Pros:** Simpler control, easier to maintain global state.
    *   **Cons:** Single point of failure, potential bottleneck, high communication overhead to the scheduler.
*   **Decentralized Scheduling:**
    *   **Concept:** Each processor has its own scheduler, coordinating with other schedulers.
    *   **Pros:** More robust, no single point of failure, lower communication overhead.
    *   **Cons:** More complex to implement, harder to maintain global consistency.
*   **Hierarchical Scheduling:**
    *   **Concept:** A multi-level scheduling approach, where groups of processors are managed by a higher-level scheduler.
    *   **Pros:** Balances the benefits of centralized and decentralized approaches.
    *   **Cons:** Increased complexity in the hierarchy design.

### 3.3. Specific Distributed Scheduling Algorithms and Techniques

*   **Global Priority-Based Scheduling (with communication awareness):**
    *   **Concept:** Similar to global scheduling on multiprocessors, but explicitly considers communication delays when assigning priorities or making scheduling decisions.
    *   **Techniques:**
        *   **Sender-Initiated:** A task on one processor sends a request to other processors to find a suitable place for execution.
        *   **Receiver-Initiated:** A processor that is overloaded requests tasks from other processors.
*   **Load Balancing Algorithms:**
    *   **Concept:** Distribute tasks across processors to ensure no single processor is overloaded, thereby improving overall system performance and meeting deadlines.
    *   **Types:**
        *   **Static Load Balancing:** Tasks are distributed before execution based on estimates.
        *   **Dynamic Load Balancing:** Tasks are redistributed during execution based on current system load.
    *   *Example:* A simple dynamic load balancing strategy: If a processor's queue length exceeds a certain threshold, it "migrates" a task to a processor with a shorter queue.
*   **Grid Scheduling / Cluster Scheduling:**
    *   **Concept:** Algorithms designed for systems where processors are organized in grids or clusters with specific communication patterns.
    *   **Considerations:** Minimizing communication path lengths, exploiting network topology.
*   **Real-Time Communication Protocols:**
    *   **Concept:** Protocols that guarantee timely delivery of messages, which is crucial for distributed real-time systems.
    *   *Examples:* Time-Triggered Ethernet (TTE), Deterministic Ethernet (DE).

**Important Point:** In distributed systems, scheduling decisions must not only consider task execution times but also the time it takes to communicate data and synchronize operations between processors.

## 4. Advanced Topics and Challenges

### 4.1. Real-Time Operating Systems (RTOS) and Schedulers

*   **Role of RTOS:** Provide mechanisms for task management, inter-task communication, synchronization, and scheduling.
*   **Common RTOS Schedulers:**
    *   **Rate Monotonic (RM):** Static priority, assigned based on task periods.
    *   **Earliest Deadline First (EDF):** Dynamic priority, assigned based on absolute deadlines.
    *   **Least Laxity First (LLF):** Dynamic priority, assigned based on laxity.
*   **Multiprocessor RTOS:** Extend uniprocessor scheduling to handle multiple processors, implementing global or partitioned strategies.

### 4.2. Schedulability Analysis

*   **Concept:** Determining whether a given set of tasks can be scheduled to meet all their deadlines on a specific system.
*   **Techniques:**
    *   **Utilization-Based Tests:** Estimate the processor utilization and compare it to a theoretical bound (e.g., $n(2^{1/n}-1)$ for RM on n processors).
    *   **Response Time Analysis (RTA):** Calculates the worst-case response time for each task and checks if it's within its deadline. More accurate but computationally intensive.
    *   **Processor Demand Analysis:** Checks if the total execution time required by tasks within any time interval exceeds the available processing time in that interval.

### 4.3. Handling Aperiodic and Sporadic Tasks

*   **Challenge:** These tasks arrive unpredictably, making static scheduling difficult.
*   **Techniques:**
    *   **Background Scheduling:** Aperiodic tasks are run only when no periodic tasks are ready.
    *   **Server-Based Approaches:**
        *   **Polled Server:** A periodic task that "checks" for aperiodic tasks.
        *   **Deferrable Server:** A periodic task that can run for its entire period if needed, even if it means delaying other periodic tasks of lower priority.
        *   **Sporadic Server:** A more sophisticated server that replenishes its execution capacity over time, providing better responsiveness for sporadic tasks.
    *   **Redundant Scheduling:** Schedule critical tasks multiple times on different processors to improve reliability.

### 4.4. Fault Tolerance in Scheduling

*   **Concept:** Designing schedules and algorithms that can continue to meet deadlines even in the presence of component failures (e.g., processor failures, communication link failures).
*   **Techniques:**
    *   **Checkpointing and Rollback:** Periodically saving the state of a task so it can resume from the last checkpoint after a failure.
    *   **Replication:** Running critical tasks on multiple processors simultaneously.
    *   **Adaptive Scheduling:** Modifying the schedule dynamically in response to detected failures.

## 5. Practice Questions and Exercises

**Question 1:**
Describe the fundamental difference between partitioned scheduling and global scheduling in multiprocessor real-time systems. What are the primary advantages and disadvantages of each?

**Answer 1:**
*   **Partitioned Scheduling:** Tasks are statically assigned to specific processors and execute only on their assigned processor.
    *   *Advantages:* Simpler implementation, lower migration overhead, easier schedulability analysis.
    *   *Disadvantages:* Potential processor underutilization, less adaptive to dynamic loads.
*   **Global Scheduling:** Tasks are not permanently assigned. A global ready queue allows any processor to execute any ready task.
    *   *Advantages:* Higher processor utilization, better load balancing, more adaptive.
    *   *Disadvantages:* Higher implementation complexity, significant migration overhead, potential performance degradation due to migration.

---

**Question 2:**
Consider a distributed system with two processors, P1 and P2. Task T1 has an execution time of 5ms and a deadline of 20ms. Task T2 has an execution time of 8ms and a deadline of 25ms. Task T3 has an execution time of 3ms and a deadline of 15ms. Assume communication delays are negligible for now. If using Global Earliest Deadline First (GEDF), which task would run first on P1 and which on P2 if all tasks arrive simultaneously?

**Answer 2:**
Using GEDF, the tasks are prioritized by their deadlines.
*   T3: Deadline 15ms
*   T1: Deadline 20ms
*   T2: Deadline 25ms

Therefore, the scheduling order would be T3, then T1, then T2. If both P1 and P2 are available, T3 would be scheduled on one processor, and T1 would be scheduled on the other. If T3 finishes on P1 before T1 finishes on P2, and T2 becomes ready, T2 would then be scheduled on P1 because it has the earliest deadline among the remaining ready tasks (T1 has a deadline of 20ms, T2 has a deadline of 25ms).

---

**Question 3:**
Explain the concept of a "server" for handling sporadic tasks in a real-time system. Briefly describe the deferrable server and its purpose.

**Answer 3:**
A "server" is a technique used in real-time scheduling to handle aperiodic or sporadic tasks without jeopardizing the deadlines of periodic tasks. It essentially reserves a portion of processing time for these unpredictable tasks.

The **deferrable server** is a type of server that acts like a periodic task with its own period and execution budget. Its key characteristic is that it can "defer" its execution to later if a higher-priority periodic task becomes ready. However, once the server's execution budget is replenished, it is allowed to run for its entire budget, even if it means preempting lower-priority periodic tasks. This ensures that the sporadic tasks get their allocated processing time while minimizing the impact on the schedulability of hard real-time periodic tasks.

---

**Question 4:**
What are the primary challenges introduced by communication delays in scheduling for distributed real-time systems compared to multiprocessor systems?

**Answer 4:**
Communication delays in distributed systems introduce several critical challenges:
1.  **Increased Complexity in Deadline Management:** When a task on one processor needs data from another processor, the communication delay directly impacts the earliest possible start time of the dependent task. This makes precise deadline adherence more difficult.
2.  **Synchronization Overhead:** Coordinating tasks across multiple processors requires synchronization mechanisms (e.g., message passing, semaphores). Communication delays in these mechanisms can lead to blocking and increased response times.
3.  **Impact on Task Migration:** If a task needs to be migrated in a distributed system, the time to transfer its state and resume it on another processor, including communication overhead, must be accounted for, making migration more costly.
4.  **Network Topology Dependence:** The efficiency of distributed scheduling is highly dependent on the network topology. Scheduling decisions may need to be aware of network latency and bandwidth to minimize communication bottlenecks.
5.  **Global State Inconsistency:** Without perfect clock synchronization and fast communication, maintaining a consistent view of the system's state (e.g., processor loads, task readiness) across all nodes becomes challenging, potentially leading to suboptimal scheduling decisions.

---

## 6. Important Points to Remember

*   **Trade-offs:** There's a constant trade-off between performance (utilization, responsiveness) and complexity in choosing scheduling algorithms.
*   **Global vs. Partitioned:** For multiprocessors, understand the fundamental differences and when each is more appropriate. Partitioned is simpler, Global is more flexible but complex.
*   **Distributed Systems Add Communication:** The dominant factor distinguishing distributed scheduling from multiprocessor scheduling is the significant impact of communication delays.
*   **Schedulability Analysis is Crucial:** Always consider how to verify that your chosen schedule will actually meet deadlines.
*   **Server-Based Approaches for Aperiodics:** For unpredictable tasks, servers are essential to guarantee their execution without compromising critical tasks.
*   **Fault Tolerance is a Design Goal:** In many real-time systems, especially distributed ones, the ability to recover from failures is as important as meeting deadlines under normal operation.
*   **RTOS Support:** Real-Time Operating Systems provide the underlying infrastructure for implementing these complex scheduling algorithms.
