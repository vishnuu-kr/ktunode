---
title: "Processes - Process states, Process control block, threads, scheduling, Operations on processes - process creation and termination"
subject: "OPERATING SYSTEMS"
module: "Module 1: Introduction: Operating system overview – Functions, Boot Process"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f365df"
status: "completed"
scrapedAt: "2026-05-23T16:30:04.435Z"
---
# OPERATING SYSTEMS: Module 1 - Introduction: Processes

**Learning Outcomes:**

*   Understand the fundamental concept of a process.
*   Describe the different states a process can be in during its lifecycle.
*   Explain the structure and contents of a Process Control Block (PCB).
*   Differentiate between a process and a thread.
*   Understand the purpose and basic mechanisms of process scheduling.
*   Explain how processes are created and terminated.
*   Relate the concepts of processes to the overall functions of an operating system (CO1).
*   Illustrate the concepts of process management and process scheduling mechanisms (CO2).

**Course Outcomes Alignment:**

*   **CO1:** This topic contributes by explaining the core entity (process) that an OS manages to achieve its functions.
*   **CO2:** This topic directly addresses process management (states, PCB, creation/termination) and introduces scheduling mechanisms.

---

## 1. Processes: The Dynamic Execution of Programs

An operating system's primary role is to manage resources and provide an environment for programs to run. The fundamental concept for achieving this is the **process**.

### 1.1 Key Concepts and Definitions

*   **Program:** A passive collection of instructions, stored on disk. It's static.
    *   *Example:* The `notepad.exe` file on your Windows computer.
*   **Process:** An *active* instance of a program. It's a program in execution. A process is dynamic and has a lifecycle.
    *   *Example:* When you double-click `notepad.exe`, you create a process that is now executing the instructions of Notepad. You can have multiple instances of Notepad running simultaneously, each as a separate process.

**Silberschatz et al., 9th Edition, Chapter 3:** Defines a process as a program in execution. It contains the program counter, stack, and data section.

### 1.2 Process States

A process transitions through various states during its lifetime. These states represent the current activity of the process. The common states are:

*   **New (or Created):** The process is being created. The OS is performing initial setup, like allocating resources.
*   **Ready:** The process has all the resources it needs to execute, except for the CPU. It is waiting in a queue for its turn on the CPU.
    *   *Example:* Multiple applications open on your computer are likely in the Ready state, waiting for the CPU.
*   **Running:** The process is currently executing instructions on the CPU.
*   **Waiting (or Blocked):** The process cannot execute, even if the CPU is free. This is usually because it's waiting for some event to occur, such as I/O completion or the availability of a resource.
    *   *Example:* A process reading data from a hard disk will be in the Waiting state until the disk operation is complete.
*   **Terminated (or Exited):** The process has finished execution. The OS deallocates its resources.

**Diagrammatic Representation of Process States:**

```
       +-----------+      +-----------+
       |   New     |----->|   Ready   |
       +-----------+      +-----------+
                              | ^
                              | | (Schedule)
                              V |
                        +-----------+      +-----------+
                        | Running   |----->| Waiting   |
                        +-----------+      +-----------+
                              |              | ^
                              | (Event)      | | (Event Complete)
                              V              |
                        +-----------+
                        | Terminated|
                        +-----------+
```

**Tanenbaum, 6th Edition, Chapter 2:** Discusses process states and the transitions between them, emphasizing the role of the scheduler.

**Important Point to Remember:** A process can only transition from Running to Waiting if it initiates an event that it must wait for. It can transition from Running to Ready when it's preempted by the scheduler.

### 1.3 Process Control Block (PCB) / Task Control Block (TCB)

The operating system needs to manage multiple processes. To do this, it maintains information about each process. This information is stored in a data structure called the **Process Control Block (PCB)**, also known as the Task Control Block (TCB). Each process has its own PCB.

**Key Information Stored in a PCB:**

*   **Process State:** The current state of the process (New, Ready, Running, Waiting, Terminated).
*   **Process ID (PID):** A unique identifier assigned to each process by the OS.
*   **Program Counter (PC):** Points to the next instruction to be executed by the process.
*   **CPU Registers:** The current values of the CPU registers for the process. When a process is switched out, its register values are saved in the PCB so it can resume execution from where it left off.
*   **CPU Scheduling Information:**
    *   **Priority:** The priority of the process.
    *   **Scheduling Queues:** Pointers to the queues the process is in (e.g., ready queue, I/O queues).
    *   **Scheduling Parameters:** Other parameters used by scheduling algorithms (e.g., time quantum for round-robin).
*   **Memory Management Information:**
    *   **Pointers to process tables:** Such as page tables or segment tables, used to access the process's memory.
    *   **Base and Limit Registers:** For memory protection.
*   **Accounting Information:**
    *   **CPU Usage:** Amount of CPU time used.
    *   **Time Limits:** Maximum CPU time allowed.
    *   **Account Numbers:** For billing purposes.
*   **I/O Status Information:**
    *   **List of open files:** Files currently accessed by the process.
    *   **List of allocated I/O devices:** Peripherals assigned to the process.
    *   **Messages:** Information about pending messages.

**Silberschatz et al., 9th Edition, Chapter 3:** Provides a detailed description of the PCB and its contents, emphasizing its crucial role in context switching.

**Nutt et al., 3rd Edition, Chapter 4:** Also covers the PCB, highlighting its function in managing process information and enabling context switching.

---

## 2. Threads: Lightweight Processes

A **thread** is the smallest unit of execution within a process. It's often referred to as a "lightweight process." A process can have multiple threads, all sharing the same resources (like memory space, files, etc.) but executing different parts of the program concurrently.

### 2.1 Key Concepts and Definitions

*   **Process (Heavyweight Process):** Has its own memory space, resources, and execution context.
*   **Thread (Lightweight Process):** Shares the memory space and resources of its parent process. Each thread has its own:
    *   **Thread ID:** Unique identifier within the process.
    *   **Program Counter (PC):** Tracks its execution flow.
    *   **Register Set:** Holds its current CPU state.
    *   **Stack:** For local variables and function calls.

**Advantages of Threads:**

*   **Responsiveness:** Allows an application to remain responsive even if one part is blocked or performing a long operation.
*   **Resource Sharing:** Threads within the same process share memory and resources, which is more efficient than inter-process communication.
*   **Economy:** Creating and switching between threads is much faster than creating and switching between processes because they don't need to allocate separate memory space.
*   **Scalability:** Can effectively utilize multi-processor architectures.

**Thread vs. Process Differences:**

| Feature              | Process                                | Thread                                     |
| :------------------- | :------------------------------------- | :----------------------------------------- |
| **Memory Space**     | Separate, isolated memory space        | Shares memory space with other threads in the same process |
| **Resource Sharing** | Resources (files, devices) are not shared by default | Shares resources with other threads in the same process |
| **Creation Cost**    | High (resource allocation, PCB setup)  | Low (minimal resource allocation)          |
| **Context Switching**| High (saving/restoring full process state) | Low (saving/restoring thread state)        |
| **Communication**    | Via Inter-Process Communication (IPC) mechanisms (slower) | Direct access to shared memory (faster)    |
| **Fault Isolation**  | If one process crashes, others are unaffected | If one thread crashes, the entire process can crash |

**Silberschatz et al., 9th Edition, Chapter 4:** Provides an in-depth discussion on threads, including user-level and kernel-level threads, and their models.

**Tanenbaum, 6th Edition, Chapter 3:** Also covers threads extensively, explaining their benefits and different implementation approaches.

---

## 3. Scheduling: Deciding Who Runs Next

**Process scheduling** is the mechanism by which the operating system decides which process (or thread) in the ready queue gets to use the CPU next. This is crucial for multitasking and ensuring efficient utilization of the CPU.

### 3.1 Key Concepts and Definitions

*   **CPU Scheduler:** Selects a process from the ready queue to be allocated to the CPU.
*   **Dispatcher:** The module that gives control of the CPU to the process selected by the CPU scheduler. It performs the context switch.
*   **Scheduling Criteria:** Metrics used to evaluate scheduling algorithms:
    *   **CPU Utilization:** Keep the CPU as busy as possible.
    *   **Throughput:** Number of processes completed per unit of time.
    *   **Turnaround Time:** The total time taken from submission to completion of a process. (Completion Time - Arrival Time)
    *   **Waiting Time:** The amount of time a process spends waiting in the ready queue.
    *   **Response Time:** The time from submission until the first response is produced. (Time of first execution - Arrival Time)

### 3.2 Scheduling Types

*   **Non-preemptive Scheduling:** Once a process starts executing, it continues until it terminates or voluntarily releases the CPU (e.g., by performing an I/O operation).
*   **Preemptive Scheduling:** The currently running process can be interrupted (preempted) by the scheduler and moved to the ready queue, typically because a higher-priority process has arrived or its time slice has expired.

### 3.3 Common Scheduling Algorithms (Introduction)

While detailed algorithms are often covered in later modules, it's important to understand the concepts:

*   **First-Come, First-Served (FCFS):** Processes are executed in the order they arrive in the ready queue. (Non-preemptive)
    *   *Example:* A queue at a bank.
*   **Shortest Job Next (SJN) / Shortest Job First (SJF):** The process with the smallest estimated next CPU burst time is selected to run next. (Can be preemptive or non-preemptive).
    *   *Challenge:* Predicting the next CPU burst time accurately.
*   **Priority Scheduling:** Each process is assigned a priority, and the CPU is allocated to the process with the highest priority. (Can be preemptive or non-preemptive).
    *   *Challenge:* **Starvation** – low-priority processes may never get to run.
*   **Round Robin (RR):** Each process gets a small unit of CPU time (time quantum or time slice). When the time quantum expires, the process is preempted and moved to the end of the ready queue. (Preemptive).
    *   *Example:* A teacher giving each student a short turn to speak.
    *   *Key Parameter:* Time Quantum size. Too large, it behaves like FCFS; too small, it leads to excessive context switching overhead.

**Silberschatz et al., 9th Edition, Chapter 6:** Dedicates a significant portion to CPU scheduling algorithms, covering their pros, cons, and performance evaluation.

**Tanenbaum, 6th Edition, Chapter 3:** Also delves into various scheduling algorithms and their implications.

---

## 4. Operations on Processes

The operating system must be able to create and terminate processes.

### 4.1 Process Creation

A parent process can create a child process. The OS performs the following steps when creating a new process:

1.  **Assign a Process ID (PID):** The OS allocates a unique PID to the new child process.
2.  **Allocate PCB:** The OS creates a PCB for the new process.
3.  **Load Program:** The OS loads the program code from secondary storage (disk) into memory.
4.  **Allocate Resources:** The OS allocates necessary resources like memory space, I/O devices, etc. (This can vary depending on whether the child shares resources with the parent).
5.  **Set Initial State:** The child process is typically placed in the Ready state.
6.  **Establish Parent-Child Relationship:** The OS records the relationship in its process management structures.

**Process Creation Models:**

*   **Parent uses `fork()` and `exec()`:**
    *   `fork()` system call: Creates a duplicate of the calling process (the child process). The child process inherits a copy of the parent's address space, open files, etc.
    *   `exec()` system call: Replaces the current process image with a new program. After `fork()`, the child usually uses `exec()` to load a different program to run.
*   **Parent creates child, waits for child to terminate:** The parent process is suspended until the child process terminates.
*   **Parent creates child, continues concurrently:** The parent process continues its execution without waiting for the child.

**Silberschatz et al., 9th Edition, Chapter 3:** Explains process creation using `fork()` and `exec()`, providing Unix/Linux examples.

**Example:**

When you open a web browser, the browser process might `fork()` multiple child processes to handle different tabs or network requests. Each child process can then `exec()` a specific task.

### 4.2 Process Termination

A process terminates when it:

1.  **Exits Normally:** The process completes its execution and calls an `exit()` system call.
2.  **Causes an Error:** It encounters an error that forces termination (e.g., division by zero, illegal memory access).
3.  **Is Killed by Another Process:** Another process (usually with the appropriate privilege) sends a signal to terminate it.

**Steps involved in Process Termination:**

1.  **Deallocate Resources:** The OS releases all resources allocated to the process (memory, open files, I/O devices).
2.  **Remove PCB:** The PCB of the terminated process is removed from the OS's active process list.
3.  **Inform Parent:** If the parent process is waiting for the child's termination, the OS informs the parent and provides an exit status.

**Hierarchical Termination:** In some systems, when a parent process terminates, all its child processes are also terminated automatically. This is known as **cascading termination**.

**Silberschatz et al., 9th Edition, Chapter 3:** Discusses process termination, including the role of the `exit()` system call and the handling of terminated processes by their parents.

---

## Practice Questions and Answers

**Question 1:**
What is the fundamental difference between a program and a process?

**Answer:**
A program is a passive collection of instructions stored on disk. A process is an active instance of a program, currently executing.

---

**Question 2:**
List and briefly describe the five common states of a process.

**Answer:**
*   **New:** The process is being created.
*   **Ready:** The process is in memory and waiting to be assigned to the CPU.
*   **Running:** The process is currently executing instructions on the CPU.
*   **Waiting (Blocked):** The process is waiting for some event to occur (e.g., I/O completion).
*   **Terminated (Exited):** The process has finished execution.

---

**Question 3:**
What are the key pieces of information typically stored in a Process Control Block (PCB)?

**Answer:**
Key information includes: Process State, Process ID (PID), Program Counter (PC), CPU Registers, CPU Scheduling Information (priority, queues), Memory Management Information (page tables), Accounting Information (CPU usage), and I/O Status Information.

---

**Question 4:**
Explain the primary difference between a process and a thread.

**Answer:**
A process has its own separate memory space and resources, while threads within the same process share memory space and resources, each having its own execution context (PC, registers, stack).

---

**Question 5:**
Which scheduling algorithm is generally considered fair and provides a reasonable response time, especially for interactive systems?

**Answer:**
Round Robin (RR) is generally considered fair and good for interactive systems due to its time-slicing mechanism.

---

**Question 6:**
What are the two main system calls used in Unix-like systems for process creation? Explain their roles.

**Answer:**
*   `fork()`: Creates a new process that is a duplicate of the calling process.
*   `exec()`: Replaces the current process's image with a new program. Typically used by the child process after `fork()` to load and execute a different program.

---

## Summary of Important Points to Remember

*   **Process vs. Program:** Process is active, program is passive.
*   **Process States:** Understand the transitions between New, Ready, Running, Waiting, and Terminated.
*   **PCB:** The OS's data structure for managing each process, containing its execution context and state. Essential for context switching.
*   **Threads:** Lightweight processes that share resources within a parent process, enabling better responsiveness and efficiency.
*   **Scheduling:** The OS mechanism for selecting which process runs on the CPU, aiming for efficiency and fairness.
*   **Process Creation/Termination:** Involves resource allocation/deallocation and managing parent-child relationships. System calls like `fork()` and `exec()` are fundamental.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


## References Incorporated

This study material has drawn upon core concepts and organizational structures found in:

*   **Operating System Concepts by Silberschatz, Galvin, Gagne (9th Ed., 2015):** Particularly for the definition of processes, states, PCB contents, and process creation/termination via `fork`/`exec`.
*   **Modern Operating Systems by Andrew S. Tanenbaum (6th Ed., 2015):** For general concepts of process states, scheduling, and threads.
*   **Operating Systems by Garry Nutt, Nabendu Chaki, Sarmistha Neogy (3rd Ed.):** Used for general understanding of process management and PCB functions.
*   **Operating Systems by D.M. Dhamdhere (2nd Ed., 2011):** Provides foundational knowledge on OS structures and process concepts.
*   **Operating Systems by Sibsankar Haldar, Alex A Aravind (Pearson Education):** Contributes to understanding the fundamental building blocks of OS design, including processes.

This concludes Module 1's topic on Processes. Understanding these fundamentals is crucial for grasping more advanced OS concepts like inter-process communication, synchronization, and memory management.