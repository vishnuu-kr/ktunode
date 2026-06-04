---
title: "Process States"
subject: "OPERATING SYSTEMS"
module: "Module 1: Introduction to Operating Systems"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8af92"
status: "completed"
scrapedAt: "2026-05-20T16:13:50.296Z"
---
# OPERATING SYSTEMS - Module 1: Introduction to Operating Systems - Process States

## Learning Outcomes:

*   Understand the concept of a process.
*   Identify and describe the different process states.
*   Explain the transitions between different process states.
*   Understand the role of the operating system in managing process states.
*   Differentiate between process state diagrams and how they vary across systems.

## 1. What is a Process?

*   **Definition:** A process is a program in execution. It's an active entity, as opposed to a program, which is a passive entity (a set of instructions).
*   **Key Components:** A process generally includes:
    *   **Program Code (Text Section):** The actual instructions to be executed.
    *   **Program Counter (PC):** Indicates the address of the next instruction to be executed.
    *   **Processor Registers:** Temporary storage locations within the CPU used for calculations, addresses, etc.
    *   **Stack:**  Used for temporary data storage, such as function parameters, return addresses, and local variables.
    *   **Data Section:** Stores global variables.
    *   **Heap:** Dynamically allocated memory during process execution.
*   **Process vs. Program:**
    *   A program is a static entity stored on disk (e.g., an executable file).
    *   A process is a dynamic entity, an instance of a program being executed.  Multiple processes can run the same program concurrently, each with its own execution context.
*   **Process Context:** The "context" of a process is the set of information that the operating system needs to manage the process.  This includes the PC, register contents, stack pointer, memory allocation information, and open files.

## 2. Process States

A process transitions through different states during its lifetime, based on its current activity. The key states are:

*   **New:**
    *   **Description:** The process is being created.  The OS is initializing the process control block (PCB) and allocating resources.
    *   **Transitions:** From nowhere to the New state.
    *   **Example:** A user double-clicks an icon to start an application. The OS begins creating a new process for that application.

*   **Ready:**
    *   **Description:** The process is waiting to be assigned to a processor (CPU). It has all the necessary resources and is simply waiting for its turn.
    *   **Transitions:** From New to Ready, from Waiting to Ready.
    *   **Example:** After a process is created (New state), it enters the Ready queue, waiting for the CPU to become available.

*   **Running:**
    *   **Description:** The process is currently being executed by the CPU.
    *   **Transitions:** From Ready to Running.
    *   **Example:** The process currently executing instructions, performing calculations, or interacting with the user.

*   **Waiting (Blocked):**
    *   **Description:** The process is waiting for some event to occur, such as I/O completion, receiving a signal, or acquiring a lock. The CPU is *not* being used by this process.
    *   **Transitions:** From Running to Waiting.
    *   **Example:** A process requests data from a hard drive. It moves to the Waiting state until the data is retrieved and available.  Another example is waiting for user input.

*   **Terminated (Completed):**
    *   **Description:** The process has finished its execution.  The OS releases resources allocated to the process.
    *   **Transitions:** From Running to Terminated.
    *   **Example:** The application has completed its task and exits.

## 3. Process State Transitions

The transitions between process states are crucial for understanding how an OS manages processes:

*   **Admitted:**  The OS accepts a new process into the system (New -> Ready).  This decision often depends on system resources and scheduling policies.
*   **Scheduler Dispatch:** The OS selects a process from the Ready queue and assigns it to the CPU (Ready -> Running). This is determined by the scheduling algorithm.
*   **Interrupt:**  An event (e.g., timer interrupt, I/O interrupt) causes the running process to be interrupted and moved back to the Ready queue (Running -> Ready). This allows the OS to switch between processes, enabling multitasking.
*   **I/O or Event Wait:** The process requires I/O or some other event to occur, so it transitions to the Waiting state (Running -> Waiting).
*   **I/O or Event Completion:** The event that the process was waiting for has occurred, so it transitions back to the Ready queue (Waiting -> Ready).
*   **Exit:** The process completes its execution and terminates (Running -> Terminated).

## 4. Process State Diagram

A process state diagram is a graphical representation of the process states and the transitions between them. A typical diagram looks like this:

```
               +----------+
               |   New    |
               +----------+
                    | Admitted
                    V
               +----------+
               |  Ready   |
               +----------+
                    | Scheduler Dispatch
                    V
               +----------+
               | Running  |
               +----------+
               ^       | I/O or Event Wait
               | Interrupt/Time Slice  |
               |       V
               +----------+   +----------+
               | Waiting  |---|Terminated|
               +----------+   +----------+
                    ^  I/O or Event Completion
                    |
                    +-----------------------+
```

**Important Notes about State Diagrams:**

*   The exact states and transitions can vary depending on the operating system.
*   Some systems may have additional states like "Suspended" (temporarily removed from memory).
*   The diagram provides a high-level overview of process management.

## 5. Role of the Operating System in Managing Process States

The OS plays a critical role in managing process states:

*   **Process Creation:** The OS creates new processes and allocates resources for them.
*   **Process Scheduling:** The OS decides which process should be running on the CPU at any given time. This is done using scheduling algorithms (e.g., First-Come, First-Served, Shortest Job First, Round Robin).
*   **Context Switching:** The OS switches between different processes, saving the context of the current process and loading the context of the next process. This allows multitasking.
*   **Resource Management:** The OS allocates and deallocates resources (e.g., memory, I/O devices) to processes.
*   **Inter-Process Communication (IPC):** The OS provides mechanisms for processes to communicate with each other (e.g., shared memory, message passing).
*   **Process Termination:** The OS terminates processes and releases their resources.

## 6. Examples

*   **Web Browser:** When you open a web browser, the OS creates a new process for it.  The browser process stays in the Ready queue, waiting to be assigned to the CPU.  When you type a URL and press Enter, the browser process enters the Running state. It then makes a network request. The browser enters the Waiting state until the web server responds. Once the data is received, it returns to the Ready state to display the web page.  Closing the browser causes the process to enter the Terminated state.

*   **Text Editor:**  Typing in a text editor keeps the process in the Running state (with short Ready periods between keystrokes). Saving the file to disk causes the process to enter the Waiting state while the I/O operation completes.

## 7. Practice Questions & Exercises

**Question 1:**  Explain the difference between a program and a process.

**Answer:** A program is a passive entity, a set of instructions stored on disk. A process is an active entity, an instance of a program being executed. A single program can have multiple processes running concurrently.

**Question 2:** List the different process states and briefly describe each.

**Answer:**
*   **New:** Process being created.
*   **Ready:** Process waiting to be assigned to the CPU.
*   **Running:** Process currently being executed by the CPU.
*   **Waiting (Blocked):** Process waiting for an event (e.g., I/O).
*   **Terminated (Completed):** Process has finished execution.

**Question 3:** What is context switching, and why is it important?

**Answer:** Context switching is the process of saving the state of the current running process and loading the state of another process. This allows the OS to switch between multiple processes, giving the illusion of parallel execution (multitasking). It is crucial for responsiveness and efficient CPU utilization.

**Question 4:**  A process is currently in the Running state and needs to read data from a file on the hard drive. What state transition will occur?

**Answer:** The process will transition from the Running state to the Waiting (Blocked) state.

**Question 5:** Draw a simple process state diagram showing the states New, Ready, Running, Waiting, and Terminated, and label the transitions.

**Answer:** (Refer to the diagram in section 4)

## 8. Important Points to Remember

*   Processes are the fundamental unit of execution in an operating system.
*   Understanding process states is essential for comprehending how the OS manages and schedules tasks.
*   The OS is responsible for managing the transitions between process states.
*   The process state diagram is a useful tool for visualizing the lifecycle of a process.
*   Different operating systems may have variations in the process states and transitions.
