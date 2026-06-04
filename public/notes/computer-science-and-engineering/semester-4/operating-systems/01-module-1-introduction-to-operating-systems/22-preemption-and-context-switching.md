---
title: "Preemption and Context Switching"
subject: "OPERATING SYSTEMS"
module: "Module 1: Introduction to Operating Systems"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8afa1"
status: "completed"
scrapedAt: "2026-05-20T16:14:00.970Z"
---
# OPERATING SYSTEMS - Module 1: Introduction to Operating Systems - Preemption and Context Switching

## Learning Outcomes:

Upon completion of this topic, you should be able to:

*   Define preemption and context switching.
*   Explain the advantages and disadvantages of preemption.
*   Describe the steps involved in context switching.
*   Identify factors that influence the performance of context switching.
*   Distinguish between preemptive and non-preemptive scheduling.

## 1. Introduction

Preemption and context switching are fundamental concepts in modern operating systems, especially those employing multitasking. They are crucial for achieving responsiveness, fairness, and efficient resource utilization. Without these mechanisms, only one program could run at a time, and the system would become unresponsive to user input and other events.

## 2. Preemption

### 2.1. Definition

Preemption is the act of temporarily interrupting a task (process or thread) that is currently executing and allowing another task to run. The interrupted task is later resumed from the point of interruption.

*   **Key Idea:** An operating system forcibly takes control from a running process before that process voluntarily relinquishes it.

### 2.2. Why Preemption is Necessary

*   **Responsiveness:**  Ensures that the system remains responsive to user input and other events, even when long-running or CPU-intensive tasks are executing.
*   **Fairness:** Prevents a single process from monopolizing the CPU, thereby ensuring that other processes get a fair share of processing time.
*   **Real-time requirements:** Essential for real-time systems where tasks must be completed within strict deadlines.
*   **Priority Scheduling:** Allows higher-priority processes to immediately interrupt lower-priority processes.

### 2.3. Advantages of Preemption

*   **Improved Responsiveness:**  Users experience a more fluid and interactive system.
*   **Fair Resource Allocation:**  CPU time is distributed more equitably among processes.
*   **Support for Priority Scheduling:** Higher-priority tasks can preempt lower-priority ones.
*   **Ability to handle high-priority interrupts and events quickly.**

### 2.4. Disadvantages of Preemption

*   **Overhead:**  Preemption incurs overhead due to context switching (explained later). Frequent preemptions can degrade performance.
*   **Complexity:**  Preemption introduces complexity in the OS kernel and requires careful synchronization to avoid race conditions and data corruption.
*   **Potential for Priority Inversion:**  A lower-priority process holding a resource needed by a higher-priority process can indirectly block the higher-priority process (requires priority inheritance/ceiling protocols to address).
*   **Increased context switch overhead.**

### 2.5. Types of Preemption

*   **Time-Slice Preemption:** The OS allocates a fixed time quantum (time slice) to each process. When the time quantum expires, the process is preempted, and another process gets its turn.
*   **Priority-Based Preemption:** A higher-priority process becomes ready to run (e.g., due to an event or user interaction). The OS preempts the currently running lower-priority process to allow the higher-priority process to execute.
*   **I/O Completion Preemption:** When an I/O operation completes, the OS might preempt the currently running process if the I/O completion makes a higher-priority process ready.

### 2.6 Example

Imagine you are using a word processor and simultaneously downloading a large file. Without preemption, the download process might hog the CPU, making the word processor sluggish and unresponsive. With preemption, the OS allocates small time slices to both processes, ensuring that the word processor remains responsive even while the download is in progress. If the word processor needs to handle user input (e.g., typing), it can be given higher priority to preempt the download process and respond immediately.

## 3. Context Switching

### 3.1. Definition

Context switching is the process of saving the state of a currently running process (its context) and loading the state of another process to allow it to run. The context includes all the information that the OS needs to restart a process from where it left off.

*   **Key Idea:** Saving the current process's state and restoring another process's state so that it can continue execution.

### 3.2. Elements of Process Context

The context of a process typically includes:

*   **Program Counter (PC):**  The address of the next instruction to be executed.
*   **CPU Registers:**  Values stored in CPU registers (e.g., accumulator, index registers, stack pointer).
*   **Memory Management Information:**  Information about the process's address space (e.g., base and limit registers, page table).
*   **Process State:**  The current state of the process (e.g., running, ready, blocked).
*   **Open Files:**  List of files currently opened by the process.
*   **Scheduling Information:** Priority, time slice remaining, etc.

### 3.3. Steps Involved in Context Switching

1.  **Save the context of the current process:** The OS saves the values of the CPU registers, program counter, and other relevant information into the Process Control Block (PCB) of the current process.
2.  **Select the next process to run:** The OS uses a scheduling algorithm to choose the next process to be executed.
3.  **Load the context of the selected process:** The OS loads the values from the PCB of the selected process into the CPU registers, program counter, and other relevant hardware.
4.  **Start executing the new process:** The CPU starts executing instructions from the address indicated by the program counter.

### 3.4. Factors Influencing Context Switching Performance

*   **Hardware Support:** Some CPUs have hardware support for context switching, which can significantly reduce the overhead.
*   **Number of Registers:** The more registers that need to be saved and restored, the longer the context switch takes.
*   **Cache Coherency:**  Context switching can invalidate the CPU cache, leading to cache misses and increased memory access time.
*   **TLB (Translation Lookaside Buffer) Flushes:**  If the address spaces of the two processes are different, the TLB (which caches virtual-to-physical address translations) may need to be flushed, which further increases the overhead.
*   **Operating System Implementation:**  The efficiency of the context switching code in the OS kernel plays a crucial role.
*   **Frequency of Context Switching:** Highly frequent context switching can significantly reduce system performance.

### 3.5 Example

Imagine two processes, Process A and Process B, running on a system.

1.  Process A is running and its context (registers, program counter, memory map, etc.) is loaded into the CPU.
2.  Process A's time slice expires.
3.  The OS interrupts Process A.
4.  The OS saves Process A's context to its PCB.
5.  The OS chooses Process B to run next.
6.  The OS loads Process B's context from its PCB into the CPU.
7.  The CPU begins executing Process B from the point where it was last interrupted.
8.  Later, when Process B's time slice expires, the OS repeats the process, potentially switching back to Process A or another process.

## 4. Preemptive vs. Non-Preemptive Scheduling

The main difference between preemptive and non-preemptive scheduling lies in whether the OS can forcibly interrupt a running process.

*   **Preemptive Scheduling:** The OS can interrupt a running process and switch to another process based on scheduling policies (e.g., time slice expiry, higher-priority process becoming ready). This is the mechanism we've been discussing with preemption and context switching.
*   **Non-Preemptive Scheduling:** A process runs until it voluntarily relinquishes the CPU, either by completing its execution or by requesting a blocking operation (e.g., I/O). The OS cannot interrupt the process.  Examples include First-Come, First-Served (FCFS) and Shortest Job First (SJF) (in some implementations).

**Key Differences:**

| Feature         | Preemptive Scheduling | Non-Preemptive Scheduling |
|-----------------|-----------------------|--------------------------|
| Interruption    | Allowed by OS       | Not allowed by OS        |
| Responsiveness  | Better              | Potentially poor         |
| Fairness        | Better              | Can lead to starvation  |
| Complexity      | Higher              | Lower                   |
| Use Cases       | Most modern OSes     | Embedded systems, batch processing |

## 5. Practice Questions and Exercises

**Question 1:** Define preemption and context switching. Explain how they are related.

**Answer:** Preemption is the act of the OS interrupting a running process and allowing another process to run. Context switching is the mechanism used to implement preemption; it involves saving the state of the interrupted process and restoring the state of the new process.  Preemption triggers context switching.

**Question 2:**  List three advantages and three disadvantages of preemption.

**Answer:**

*   **Advantages:** Improved responsiveness, fair resource allocation, support for priority scheduling.
*   **Disadvantages:** Overhead due to context switching, increased OS complexity, potential for priority inversion.

**Question 3:** Describe the steps involved in context switching.

**Answer:**  (As described in section 3.3) Save the context of the current process, select the next process to run, load the context of the selected process, and start executing the new process.

**Question 4:**  What factors can influence the performance of context switching?

**Answer:** (As described in section 3.4) Hardware support, number of registers, cache coherency, TLB flushes, OS implementation, frequency of context switching.

**Question 5:** Explain the difference between preemptive and non-preemptive scheduling. Give an example of a scheduling algorithm for each.

**Answer:** (As described in section 4) Preemptive scheduling allows the OS to interrupt a running process, while non-preemptive scheduling does not.  Example of preemptive scheduling: Round Robin, Priority scheduling.  Example of non-preemptive scheduling: First-Come, First-Served (FCFS).

**Question 6:**  A system uses time-slice preemption with a time quantum of 10ms. Process A has been running for 7ms when Process B, with a higher priority, becomes ready. Will Process A be preempted immediately? Why or why not?

**Answer:** Yes, Process A will be preempted immediately. Even though its 10ms time slice hasn't expired, priority-based preemption takes precedence. The higher-priority Process B will preempt Process A.

**Question 7:**  Why is it important to have hardware support for context switching?

**Answer:** Hardware support for context switching, such as dedicated instructions or memory management features, can significantly reduce the overhead associated with saving and restoring process contexts. This leads to faster context switches and improved overall system performance. Without hardware support, context switching relies solely on software routines, which are generally slower.

## 6. Important Points to Remember

*   Preemption and context switching are essential for multitasking operating systems.
*   Preemption ensures responsiveness and fairness by allowing the OS to interrupt running processes.
*   Context switching is the mechanism used to save and restore process states during preemption.
*   Context switching introduces overhead, which can impact performance if not managed carefully.
*   Understanding the trade-offs between preemptive and non-preemptive scheduling is crucial for designing efficient operating systems.
*   The frequency of context switching directly impacts performance.  Too much context switching leads to overhead outweighing benefits.
