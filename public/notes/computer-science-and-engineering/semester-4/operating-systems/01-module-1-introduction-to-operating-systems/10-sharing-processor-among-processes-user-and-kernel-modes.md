---
title: "Sharing processor among processes - user and kernel modes"
subject: "OPERATING SYSTEMS"
module: "Module 1: Introduction to Operating Systems"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8af95"
status: "completed"
scrapedAt: "2026-05-20T16:13:52.427Z"
---
## OPERATING SYSTEMS - Module 1: Introduction to Operating Systems - Sharing Processor Among Processes: User and Kernel Modes

**Learning Outcomes:**

*   Understand the need for process sharing in operating systems.
*   Explain the concepts of User Mode and Kernel Mode.
*   Describe how the operating system switches between User Mode and Kernel Mode.
*   Understand the purpose of privilege levels and their role in system security.
*   Identify operations that require Kernel Mode execution.
*   Explain the relationship between system calls and mode switching.

**1. The Need for Process Sharing:**

*   **Definition of a Process:** A program in execution. It is an active entity, unlike a program, which is passive.
*   **Why Share?** Modern operating systems support multitasking, allowing multiple processes to appear to execute concurrently. This is achieved through:
    *   **Time-sharing:** The processor's time is divided into small intervals, and each process gets a slice of this time.  This allows multiple users to interact with their programs simultaneously.
    *   **Resource Utilization:** Sharing the processor improves overall system resource utilization, as processes are frequently waiting for I/O or other events.  If one process is waiting, another can use the processor.
*   **Context Switching:** The mechanism the OS uses to quickly switch between processes. It involves saving the state (registers, program counter, etc.) of the current process and loading the saved state of the next process.

    *   **Example:** Consider two processes, Process A and Process B. The OS allocates a time slice to Process A. After Process A's time slice expires (or it blocks waiting for I/O), the OS performs a context switch, saving Process A's state and loading Process B's state. Process B then executes until its time slice expires, and the process repeats.
*   **Importance of Fairness:** OS scheduling algorithms aim to provide fairness to all processes, preventing any single process from monopolizing the CPU.

**2. User Mode and Kernel Mode:**

*   **Kernel Mode (also called Supervisor Mode, System Mode, or Privileged Mode):**
    *   **Definition:**  A privileged mode of operation in which the OS kernel executes. In this mode, the OS has unrestricted access to all hardware resources (CPU, memory, I/O devices).
    *   **Purpose:** To protect the system from malfunctioning or malicious user programs. The kernel needs full control to manage resources and ensure system stability.
    *   **Restrictions:** No restrictions. Kernel code can execute any instruction and access any memory location.
*   **User Mode:**
    *   **Definition:**  A non-privileged mode of operation in which user applications execute.
    *   **Purpose:**  To provide a restricted environment for user programs, limiting their access to system resources.
    *   **Restrictions:**  User mode processes cannot directly access hardware or privileged instructions.  They must request these services from the OS kernel.

**3. Switching Between User Mode and Kernel Mode:**

*   **Hardware Support:** CPUs have a special bit or register (often called the "mode bit" or "privilege bit") that indicates the current operating mode (User or Kernel).
*   **How it Works:**
    *   **Normal Operation:** The system typically starts in Kernel Mode during boot.
    *   **User Program Execution:** When a user program is launched, the OS switches the CPU to User Mode.
    *   **System Call:**  When a user program needs to perform a privileged operation (e.g., reading a file, allocating memory, sending network data), it makes a *system call* to the OS.
    *   **System Call Handling:**
        1.  The system call triggers a hardware interrupt.
        2.  The CPU switches to Kernel Mode.
        3.  The OS kernel's system call handler is invoked.
        4.  The handler performs the requested operation on behalf of the user process.
        5.  After completing the operation, the handler returns control to the user process.
        6.  The CPU switches back to User Mode.
*   **Importance of Interrupts:** Interrupts are crucial for mode switching and handling system calls.  They allow the OS to regain control of the system and perform privileged operations safely.

**4. Privilege Levels:**

*   **Concept:** Many modern CPUs (e.g., x86) support multiple privilege levels (rings).  Ring 0 is the most privileged (Kernel Mode), and Ring 3 is the least privileged (User Mode).  Rings 1 and 2 can be used for other system software, but are rarely used in modern OS designs.
*   **Purpose:** Finer-grained control over resource access and security.
*   **Example (x86):**
    *   **Ring 0:** Kernel Mode (full access)
    *   **Ring 1-2:**  Device drivers (limited access) - often unused in modern systems
    *   **Ring 3:** User Mode (restricted access)

**5. Operations Requiring Kernel Mode Execution:**

*   **I/O Operations:**  Accessing disk drives, network interfaces, printers, etc.
*   **Memory Management:**  Allocating and deallocating memory, managing virtual memory.
*   **Process Management:** Creating, destroying, scheduling, and managing processes.
*   **Interrupt Handling:**  Responding to hardware and software interrupts.
*   **Clock Management:**  Setting and reading the system clock.
*   **Accessing System Resources:**  Any operation that directly affects the hardware or could compromise system security.

**6. System Calls and Mode Switching:**

*   **System Call Definition:** An interface through which user programs can request services from the operating system kernel.  It's essentially a function call that transitions the CPU from User Mode to Kernel Mode.
*   **Examples of System Calls:**
    *   `open()`: Opens a file.
    *   `read()`: Reads data from a file.
    *   `write()`: Writes data to a file.
    *   `fork()`: Creates a new process.
    *   `exec()`: Executes a new program.
    *   `exit()`: Terminates a process.
    *   `malloc()`: Allocates memory (often implemented as a library function built on top of system calls like `brk` or `mmap`).
*   **How System Calls Work:**
    1.  The user program calls a library function that wraps the system call.
    2.  The library function sets up the necessary arguments and invokes a special CPU instruction (e.g., `int 0x80` on x86, `syscall` instruction).
    3.  This instruction triggers a hardware interrupt.
    4.  The CPU switches to Kernel Mode and jumps to the OS's interrupt handler for system calls.
    5.  The handler identifies the specific system call requested and dispatches it to the appropriate kernel function.
    6.  The kernel function performs the requested operation.
    7.  The kernel sets a return value (success or error code) in a register.
    8.  The kernel executes a return-from-interrupt instruction.
    9.  The CPU switches back to User Mode, and the library function returns the value to the user program.

**7.  Important Points to Remember:**

*   User Mode protects the OS from user programs.
*   Kernel Mode allows the OS to manage system resources.
*   System calls are the interface between user programs and the OS kernel.
*   Mode switching is essential for secure and efficient multitasking.
*   Privilege levels provide a more granular approach to security.

**Practice Questions and Exercises:**

1.  **Explain the difference between User Mode and Kernel Mode. Why are both necessary?**

    *   **Answer:** User Mode is a non-privileged mode where user applications execute with limited access to system resources, preventing them from directly accessing hardware or privileged instructions. Kernel Mode is a privileged mode where the OS kernel executes, having unrestricted access to all hardware resources. Both are necessary because User Mode protects the OS from malicious or malfunctioning user programs, while Kernel Mode provides the OS with the control needed to manage resources and ensure system stability.

2.  **What is a system call? Give three examples of system calls and explain what they do.**

    *   **Answer:** A system call is an interface through which user programs request services from the operating system kernel.
        *   `open()`: Opens a file, allowing the user program to read from or write to it.
        *   `read()`: Reads data from a file or other input source into a buffer in the user program's memory.
        *   `write()`: Writes data from a buffer in the user program's memory to a file or other output destination.

3.  **Describe the steps involved when a user program makes a system call.  Include how the CPU switches between User Mode and Kernel Mode.**

    *   **Answer:**  (See section 6 above - System Calls and Mode Switching) The key steps are:
        1. User program calls a library wrapper.
        2. Library wrapper invokes a special CPU instruction (triggering an interrupt).
        3. CPU switches to Kernel Mode.
        4. OS interrupt handler identifies and dispatches the system call.
        5. Kernel performs the operation.
        6. Kernel sets a return value.
        7. Kernel executes return-from-interrupt instruction.
        8. CPU switches back to User Mode.
        9. Library function returns the result to the user program.

4.  **Why is it important for the operating system to protect itself from user programs?**

    *   **Answer:**  If user programs were allowed direct access to hardware and system resources, they could:
        *   Crash the system.
        *   Access or modify data belonging to other users or the operating system.
        *   Monopolize system resources, preventing other programs from running.
        *   Install malicious software (viruses, malware).

5.  **Explain the role of interrupts in switching between User Mode and Kernel Mode.**

    *   **Answer:** Interrupts are crucial for mode switching. When a user program makes a system call, it triggers an interrupt.  The interrupt causes the CPU to switch to Kernel Mode and transfer control to the OS's interrupt handler.  This allows the OS to handle the system call request safely and securely. Similarly, hardware interrupts (e.g., from a keyboard or network card) also trigger a switch to Kernel Mode, allowing the OS to respond to external events.

6.  **What are privilege levels (rings), and how are they used in some operating systems?**

    *   **Answer:** Privilege levels (rings) are hierarchical levels of privilege assigned to different code segments (e.g., kernel, device drivers, user applications). They provide a more granular approach to controlling access to system resources. Ring 0 is the most privileged (Kernel Mode), and Ring 3 is the least privileged (User Mode). The CPU enforces these levels by checking the privilege level of the code attempting to access a resource against the required privilege level for that resource.
