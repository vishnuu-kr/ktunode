---
title: "Process concepts:"
subject: "OPERATING SYSTEMS"
module: "Module 1: Introduction to Operating Systems"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8af90"
status: "completed"
scrapedAt: "2026-05-20T16:13:48.873Z"
---
## OPERATING SYSTEMS - Module 1: Introduction to Operating Systems - Process Concepts

**Module Overview:** This module introduces the fundamental concepts of operating systems (OS), laying the groundwork for understanding how OS manages system resources.

**Topic Overview:** This section focuses on the *Process*, a key abstraction in operating systems. We'll delve into what a process is, its components, states, and operations associated with it.

**Learning Outcomes:**

*   Understand the definition and components of a process.
*   Describe the different process states and the transitions between them.
*   Explain the concept of Process Control Block (PCB) and its importance.
*   Differentiate between process context switching and its overhead.
*   Understand process scheduling queues.
*   Explain various process creation and termination methods.

---

### 1. Definition and Components of a Process

*   **Definition:**
    *   A *process* is a program in execution. It is an active entity, as opposed to a program, which is a passive entity (set of instructions).
    *   A process represents an independent unit of execution within an operating system.
    *   It's more than just program code; it encompasses the current state of the execution.

*   **Key Components (Memory Layout of a Process):**
    *   **Text Section (Code):** Contains the executable code of the program.  This is typically read-only.
    *   **Data Section:** Stores global and static variables. These variables retain their values between function calls.
    *   **Heap:** Dynamically allocated memory used by the process during runtime (e.g., using `malloc` or `new`). The heap grows and shrinks as needed.
    *   **Stack:** Used for storing temporary data such as function parameters, return addresses, and local variables. It follows a LIFO (Last-In, First-Out) structure. Each thread has its own stack.

*   **Example:**
    *   Consider a C program that calculates the factorial of a number. The program code (text section) will contain the instructions for the factorial function. The input number and the calculated factorial (if stored globally) would be in the data section. If the program uses dynamic memory allocation within the factorial function, this will reside on the heap.  The function calls and local variables within the factorial function reside on the stack.

### 2. Process States and Transitions

*   **Process States:** A process transitions through different states during its lifetime:
    *   **New:** The process is being created. Resources are being allocated, and the process is not yet ready for execution.
    *   **Ready:** The process is waiting to be assigned to a processor. It has all the resources it needs and is ready to run.
    *   **Running:** The process's instructions are being executed by the CPU.
    *   **Waiting (Blocked):** The process is waiting for some event to occur (e.g., I/O completion, receiving a signal). It cannot proceed until the event happens.
    *   **Terminated:** The process has finished execution and is no longer active.  Its resources are being deallocated.

*   **State Diagram & Transitions:**

    ```
    New --> Ready  (Admitted)
    Ready --> Running (Scheduler dispatch)
    Running --> Ready (Interrupt, Time slice expiration)
    Running --> Waiting (I/O request, Event wait)
    Waiting --> Ready (I/O completion, Event occurs)
    Running --> Terminated (Process completion, Termination request)
    ```

    *   **Admitted:**  When the OS accepts a new process into the system.
    *   **Scheduler Dispatch:** The OS's scheduler chooses a process from the ready queue and assigns it to the CPU.
    *   **Interrupt:** An event that causes the CPU to stop executing the current process and switch to a different one (usually an interrupt handler).
    *   **I/O or Event Wait:**  The process needs to wait for an I/O operation (e.g., reading from disk) or a specific event (e.g., a semaphore signal).
    *   **I/O or Event Completion:** The I/O operation finishes, or the waited-for event occurs, allowing the process to become ready again.

*   **Example:**
    *   Imagine you start a web browser (New -> Ready). The OS scheduler eventually assigns the browser to the CPU (Ready -> Running). While loading a webpage, the browser may need to read data from the network (Running -> Waiting). Once the network data is received (Waiting -> Ready), the browser becomes ready to run again, and the scheduler might assign it back to the CPU (Ready -> Running) to display the webpage. Finally, when you close the browser (Running -> Terminated).

### 3. Process Control Block (PCB)

*   **Definition:** The PCB (also sometimes called a Process Descriptor) is a data structure used by the operating system to store all the information about a specific process. It's essentially the OS's "identity card" for each process.

*   **Importance:** The PCB is crucial for:
    *   **Process Management:** Tracking the state and resources of each process.
    *   **Context Switching:** Saving and restoring the state of a process when switching between processes.
    *   **Resource Allocation:** Managing the resources allocated to a process.
    *   **Scheduling:** Using the PCB information to make scheduling decisions.

*   **Typical Information Stored in a PCB:**
    *   **Process ID (PID):** A unique identifier for the process.
    *   **Process State:** Current state of the process (New, Ready, Running, Waiting, Terminated).
    *   **Program Counter (PC):** Address of the next instruction to be executed.
    *   **CPU Registers:** Values of the CPU registers (e.g., accumulator, index registers, stack pointer) at the time the process was last running.
    *   **Memory Management Information:** Base and limit registers, page tables, or segment tables used for memory management.
    *   **Accounting Information:** Amount of CPU time used, time limits, account numbers.
    *   **I/O Status Information:** List of open files, I/O devices allocated to the process.
    *   **Scheduling Information:** Priority, scheduling queue pointers.
    *   **Parent Process:** PID of the parent process.
    *   **Children Processes:** List of child processes.

*   **Example:** The OS needs to know where a process was in its execution before switching to another one. This "location" or state is stored in the PCB. When the OS switches back to the original process, it loads the information from the PCB to resume execution from the exact point where it left off.

### 4. Context Switching

*   **Definition:** Context switching is the process of saving the state of one process (the old process) and loading the saved state for another process (the new process). This allows the CPU to switch between multiple processes, creating the illusion of concurrency.

*   **Steps involved in Context Switching:**
    1.  **Save the state of the current process:** Store the values in CPU registers, the program counter, and other relevant information into the PCB of the current process.
    2.  **Load the state of the new process:** Retrieve the values from the PCB of the process to be executed next and load them into the CPU registers, program counter, and other hardware components.

*   **Overhead of Context Switching:** Context switching is an overhead because the CPU isn't doing any "useful" work during the switch. It's simply managing process states. The overhead arises from:
    *   Saving and restoring register values.
    *   Updating memory management tables.
    *   Invalidating caches.

*   **Factors affecting Context Switch Time:**
    *   Hardware support (e.g., dedicated registers for saving context).
    *   Amount of data to be saved and restored (size of the PCB).
    *   Speed of memory access.

*   **Example:** Imagine you're working on two documents simultaneously. You're typing in one document, and then you switch to the other. The act of switching documents is similar to context switching. You need to remember where you were in the first document (saving its context) before switching to the second, and vice versa.

### 5. Process Scheduling Queues

*   **Purpose:** To manage the processes in the system and their execution order.  Queues provide a structured way to organize processes based on their state.

*   **Common Scheduling Queues:**
    *   **Job Queue:** Contains all processes in the system. When a process enters the system, it is placed in the job queue.
    *   **Ready Queue:** Contains all processes that are ready to execute and are waiting for CPU time. Processes in the ready queue are typically stored in a linked list or other suitable data structure.
    *   **Device Queues:**  Each I/O device may have its own device queue. When a process requests I/O, it is placed in the queue for that specific device.

*   **Process Movement between Queues:** Processes move between these queues as they change state. For example:
    *   New process -> Job Queue -> Ready Queue
    *   Running process -> Waiting Queue (for I/O)
    *   Waiting process -> Ready Queue (upon I/O completion)

*   **Example:** If many programs are waiting to be executed (e.g., multiple users are submitting jobs to a batch processing system), all these programs would be initially placed in the Job Queue. The OS then selects processes from the Job Queue and moves them to the Ready Queue when they are ready for execution.

### 6. Process Creation and Termination

*   **Process Creation:**
    *   A process can create new processes, known as *child processes*.
    *   The creating process is called the *parent process*.
    *   Processes form a hierarchy of processes (a process tree).
    *   **System Call:** Process creation is typically achieved through a system call (e.g., `fork()` in Unix/Linux, `CreateProcess()` in Windows).
    *   **Resource Allocation:** When a new process is created, it requires resources (CPU time, memory, files, I/O devices). The parent process can either share resources with its child or allocate new resources to it.
    *   **Execution:**
        *   **Concurrent Execution:** The parent and child processes execute concurrently.
        *   **Parent Waits:** The parent process waits until the child process terminates.
    *   **Address Space:**
        *   **Duplicate:** The child process is a duplicate of the parent process (sharing the same program code and data).  Often followed by an `exec()` system call to load a new program.
        *   **New program:** The child process executes a new program.

*   **Process Termination:**
    *   A process terminates when it finishes executing its last statement and asks the operating system to delete it by using the `exit()` system call.
    *   The process may also be terminated by another process using a system call (e.g., `kill()` in Unix/Linux, `TerminateProcess()` in Windows).
    *   **Reasons for Termination:**
        *   **Normal Completion:** The process has finished its task successfully.
        *   **Time Limit Exceeded:** The process has exceeded its allocated CPU time.
        *   **Memory Unavailable:** The process requires more memory than is available.
        *   **Bounds Violation:** The process tries to access memory outside its allocated region.
        *   **Protection Error:** The process tries to access protected resources.
        *   **Arithmetic Error:** Division by zero, overflow, etc.
        *   **I/O Failure:** Failure to perform an I/O operation.
        *   **Invalid Instruction:**  The process attempts to execute an instruction that doesn't exist or is not allowed.
        *   **Parent Termination:** If a parent process terminates, the OS may terminate all its child processes (cascading termination). This avoids leaving orphaned processes running in the system.

*   **Example (Unix/Linux `fork()`):**
    ```c
    #include <stdio.h>
    #include <unistd.h>
    #include <sys/types.h>

    int main() {
        pid_t pid;

        pid = fork(); // Create a new process

        if (pid < 0) {
            fprintf(stderr, "Fork failed\n");
            return 1;
        } else if (pid == 0) {
            // Child process
            printf("Child process: PID = %d, Parent PID = %d\n", getpid(), getppid());
            // Execute a new program (e.g., using exec())
        } else {
            // Parent process
            printf("Parent process: PID = %d, Child PID = %d\n", getpid(), pid);
            wait(NULL); // Wait for the child to terminate (optional)
        }

        return 0;
    }
    ```
    This code demonstrates the `fork()` system call. `fork()` creates a nearly identical copy of the parent process.  The return value of `fork()` is 0 in the child process, the child's PID in the parent process, and -1 if an error occurred.  The `wait(NULL)` call in the parent makes the parent wait for the child process to terminate before continuing.

---

**Important Points to Remember:**

*   A process is more than just a program; it's a program in execution.
*   The PCB is the OS's central data structure for managing processes.
*   Context switching is essential for multitasking but introduces overhead.
*   Processes move through different queues (job, ready, device) depending on their state.
*   Process creation and termination are fundamental operations in an OS.

---

**Practice Questions/Exercises:**

1.  **Question:** Explain the difference between a program and a process.

    **Answer:** A program is a static set of instructions stored on disk, while a process is a dynamic entity representing the execution of that program. A program is passive, while a process is active.

2.  **Question:** List five pieces of information typically stored in a Process Control Block (PCB).

    **Answer:**
    *   Process ID (PID)
    *   Process State
    *   Program Counter (PC)
    *   CPU Registers
    *   Memory Management Information

3.  **Question:** What is context switching, and why is it necessary? What is the overhead associated with context switching?

    **Answer:** Context switching is the process of saving the state of one process and loading the state of another process to allow the CPU to switch between them. It's necessary for multitasking, allowing multiple processes to share the CPU. The overhead arises from saving and restoring register values, updating memory management tables, and invalidating caches.

4.  **Question:** Describe the different process states and the transitions between them using a diagram. (See state diagram in the notes above).

5.  **Question:** Explain the purpose of the Ready Queue in process scheduling.

    **Answer:** The Ready Queue holds all processes that are ready to execute and are waiting for CPU time. It's used by the scheduler to select the next process to run.

6.  **Question:** Describe the steps involved in creating a new process using the `fork()` system call in Unix/Linux.

    **Answer:**
    1.  The parent process calls `fork()`.
    2.  The OS creates a new process that is a nearly identical copy of the parent process (including code, data, open files).
    3.  The `fork()` system call returns twice: once in the parent process (returning the PID of the child) and once in the child process (returning 0).
    4.  The parent and child processes then execute independently.
    5.  Often the child process will then call `exec()` to replace its memory space with a new program.

7.  **Question:** What is cascading termination? Why is it implemented in operating systems?

    **Answer:** Cascading termination refers to the termination of all child processes when a parent process terminates. It is implemented to prevent orphaned processes from running indefinitely and potentially consuming system resources without a clear purpose.

---
