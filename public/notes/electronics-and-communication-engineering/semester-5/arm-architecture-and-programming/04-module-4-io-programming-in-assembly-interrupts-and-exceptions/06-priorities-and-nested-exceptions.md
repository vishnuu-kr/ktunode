---
title: "priorities and nested exceptions"
subject: "ARM ARCHITECTURE AND PROGRAMMING"
module: "Module 4: IO programming in assembly: Interrupts and exceptions"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feb0a"
status: "completed"
scrapedAt: "2026-05-23T17:53:42.499Z"
---
# ARM Architecture and Programming: Module 4 - IO Programming in Assembly: Interrupts and Exceptions

## Topic: Priorities and Nested Exceptions

### 1. Introduction to Interrupts and Exceptions

This topic builds upon the foundational understanding of interrupts and exceptions introduced in Module 4. We'll delve into how the ARM processor handles multiple concurrent events, prioritizing them and managing nested occurrences to ensure orderly execution and system stability.

**Key Concepts:**

*   **Interrupt:** An event that signals to the processor that an external or internal device requires immediate attention. This typically suspends the current program execution and transfers control to a designated interrupt service routine (ISR).
*   **Exception:** A broader term that encompasses interrupts, faults, and aborts. These are events that disrupt the normal sequential flow of program execution.
*   **Interrupt Service Routine (ISR):** A specific piece of code designed to handle a particular interrupt.
*   **Nested Exception:** An exception that occurs while the processor is already handling another exception.

### 2. Exception Prioritization

When multiple interrupt or exception sources are active simultaneously, the processor needs a mechanism to decide which one to service first. This is achieved through **exception prioritization**.

**Key Concepts:**

*   **Priority Levels:** Each interrupt and exception source is assigned a priority level. Lower numerical values typically indicate higher priority.
*   **Preemption:** A higher-priority interrupt or exception can interrupt the servicing of a lower-priority one.

**How Prioritization Works (ARM Cortex-M specific, as per Lewis & Yiu):**

*   **Nested Vectored Interrupt Controller (NVIC):** The ARM Cortex-M architecture utilizes the NVIC to manage interrupts. The NVIC is responsible for:
    *   Receiving interrupt requests from peripherals.
    *   Assigning priority levels to these requests.
    *   Selecting the highest-priority pending interrupt to signal the processor core.
    *   Generating an interrupt vector to the appropriate ISR.
*   **Priority Grouping:** The NVIC allows for the configuration of priority groups. This means that a certain number of bits are used for priority preemption (determining if a higher priority interrupt can interrupt a lower priority one), and the remaining bits are used for sub-priority (determining the order of interrupts with the same preemption priority).
    *   **Lewis (2e, Chapter 10):** Discusses the NVIC's role in interrupt handling and priority management, including the concept of priority grouping and how it impacts preemption.
    *   **Yiu (3e, Chapter 4):** Provides a detailed explanation of the NVIC's architecture, including registers for priority configuration (e.g., `AIRCR` for priority grouping) and how the processor core interacts with the NVIC.
*   **Interrupt Masking:** The processor can mask (disable) specific interrupts or all interrupts to prevent them from interrupting the current critical section of code.
    *   **Cortex-M Exception Model:** The Cortex-M processor has a mechanism to control interrupt masking using the `PRIMASK` and `FAULTMASK` registers, as well as the `BASEPRI` register.
        *   `PRIMASK`: When set, masks all exceptions except `Non-Maskable Interrupt` (NMI).
        *   `FAULTMASK`: When set, masks all exceptions except `NMI` and `HardFault`.
        *   `BASEPRI`: Allows masking of exceptions below a specified priority level.
    *   **Yiu (3e, Chapter 4):** Elaborates on these registers and their usage for controlling interrupt masking and enabling/disabling preemption.

**Example:**

Imagine two peripherals generating interrupts:

1.  **Timer Interrupt (High Priority):** The timer is used for critical timing operations.
2.  **UART Interrupt (Low Priority):** The UART is used for receiving data.

If the UART interrupt occurs while the Timer ISR is executing, the processor will *not* switch to the UART ISR because the Timer interrupt has a higher priority. However, if the Timer interrupt occurs *while the UART ISR is executing*, the processor will preempt the UART ISR, save its context, and start executing the Timer ISR. Once the Timer ISR completes, the processor will resume the UART ISR from where it was interrupted.

### 3. Nested Exceptions

Nested exceptions occur when an exception handler itself is interrupted by a higher-priority exception. This requires careful management to ensure that the system state is correctly preserved and restored.

**Key Concepts:**

*   **Stacking:** When an exception occurs, the processor automatically pushes certain critical registers onto the stack. This includes the program counter (`PC`), status registers (`PSR`), and potentially other registers depending on the exception type and processor mode. This process is known as "stacking" or "context saving."
*   **Unstacking:** When an exception handler finishes, the saved registers are popped off the stack, restoring the processor to its state before the exception occurred. This is called "unstacking" or "context restoration."
*   **Stack Frame:** The set of registers pushed onto the stack for an exception form a stack frame. The size and content of the stack frame can vary.
*   **Return from Exception:** The process of unstacking registers and resuming execution from the interrupted context. This is typically achieved by a special instruction like `BX LR` (Branch and Exchange to Link Register) or specific return from exception instructions.

**How Nested Exceptions are Handled (ARM Cortex-M specific):**

*   **Automatic Stacking:** The Cortex-M processor's hardware automatically stacks the core registers when an exception occurs. This is crucial for nested exceptions as it ensures that the state of the interrupted ISR is preserved.
*   **Prioritization and Preemption:** As discussed earlier, the NVIC ensures that a higher-priority exception will preempt a lower-priority one. The automatic stacking mechanism is key to enabling this preemption without losing the state of the lower-priority handler.
*   **Tail-Chaining:** A mechanism where the processor, after finishing an exception, immediately checks for other pending exceptions without returning to the interrupted application code. If another exception is pending, it proceeds directly to the next ISR. This can improve interrupt latency.
    *   **Yiu (3e, Chapter 4):** Describes tail-chaining and how it contributes to efficient exception handling in Cortex-M processors.
*   **Late Arriving and Early Exiting:** Concepts related to how interrupts are handled around instruction execution, especially concerning exceptions that might cause instruction fetches to be retried.

**Example:**

1.  The processor is executing normal application code.
2.  A Low Priority Interrupt (LPI) occurs (e.g., UART data received).
3.  The processor saves its current state (PC, PSR) and jumps to the UART ISR.
4.  While the UART ISR is executing, a High Priority Interrupt (HPI) occurs (e.g., Timer overflow).
5.  The processor, due to HPI's higher priority, preempts the UART ISR.
6.  It automatically saves the current state of the UART ISR (including its `PC` and `PSR`) onto the stack.
7.  The processor jumps to the Timer ISR.
8.  The Timer ISR executes and completes.
9.  Upon completion of the Timer ISR, the processor "unstack"s the saved registers of the UART ISR.
10. The processor resumes execution of the UART ISR from where it was interrupted.
11. Once the UART ISR completes, the processor "unstack"s the original application code's saved registers and resumes normal execution.

**Textbook References for Nested Exceptions:**

*   **Lewis (2e, Chapter 10):** Explains the exception model and how the processor handles saving and restoring context for interrupts, which is the basis for nested exception handling.
*   **Yiu (3e, Chapter 4):** Provides a comprehensive explanation of the Cortex-M exception model, including the stack frame management, the role of the `EXC_RETURN` value in `LR` (Link Register) for returning from exceptions, and how preemption works with nested interrupts.

### 4. Programming Considerations for Priorities and Nested Exceptions

Effective management of priorities and nested exceptions in assembly requires careful coding practices.

**Key Programming Practices:**

*   **Prioritize ISRs Appropriately:** Assign priority levels based on the criticality and timing requirements of the associated peripherals.
*   **Keep ISRs Short and Efficient:** Long ISRs increase the window for higher-priority interrupts to occur, potentially leading to increased latency for those critical interrupts.
*   **Critical Sections:** Use interrupt disabling (e.g., setting `PRIMASK` or using `BASEPRI`) to protect critical sections of code where shared resources are accessed or where reentrancy is a concern.
    *   **Lewis (2e, Chapter 10):** Emphasizes the importance of short ISRs and the need to protect shared data.
    *   **Zhu (3e, Chapter 5):** Discusses assembly-level techniques for enabling and disabling interrupts for critical sections.
*   **Reentrancy:** If an ISR can be preempted by another instance of itself (e.g., due to a higher priority interrupt from the same peripheral), it must be designed to be reentrant. This means it can safely execute multiple times concurrently without data corruption.
*   **Stack Usage:** Be mindful of stack usage within ISRs, especially for nested exceptions. Excessive stack usage can lead to stack overflow.
*   **Return from Exception:** Ensure correct return mechanisms are used to restore the processor state. For Cortex-M, this often involves setting the `LR` to a special `EXC_RETURN` value.

**Assembly Language Snippets (Conceptual):**

```assembly
; Example: Entering a high-priority ISR

    PUSH    {R0-R3, LR}     ; Save essential registers onto the stack
    ; ... Timer ISR code ...
    ; If a higher priority interrupt occurs here,
    ; the processor will automatically stack the current state
    ; and jump to the higher priority ISR.

    POP     {R0-R3, LR}     ; Restore essential registers
    BX      LR              ; Return from interrupt

; Example: Protecting a critical section

    MRS     R0, PRIMASK     ; Read the current PRIMASK state
    CPSID   I               ; Disable all interrupts (PRIMASK = 1)

    ; --- Critical Section Start ---
    ; Access shared resource here
    ; ...
    ; --- Critical Section End ---

    MSR     PRIMASK, R0     ; Restore the original PRIMASK state (re-enable interrupts if they were enabled)

```

**Learning Outcome Alignment:**

*   **CO1 (C Features in Embedded):** While this topic is assembly-focused, the concepts of prioritizing tasks and managing concurrent events are directly transferable to C programming in embedded systems. Understanding these underlying hardware mechanisms is crucial for writing efficient and reliable C code.
*   **CO2 (Programmer's View of Processor):** This topic directly addresses the programmer's view of how the processor handles interrupts and exceptions, including register usage (PC, PSR, PRIMASK, BASEPRI), stack management, and the flow of control.
*   **CO3 (Assembly vs. C):** Understanding the intricacies of interrupt prioritization and nested exceptions highlights scenarios where assembly might be preferred for fine-grained control over timing, minimal overhead, and direct hardware manipulation. However, it also underscores the complexity, motivating the use of C for higher-level management and abstraction.

### 5. Practice Questions and Exercises

**Question 1:**
Explain the role of the Nested Vectored Interrupt Controller (NVIC) in managing interrupt priorities on an ARM Cortex-M processor. How does priority grouping affect interrupt handling?

**Answer 1:**
The NVIC is a hardware block responsible for managing interrupts from various peripherals. It receives interrupt requests, assigns priorities based on configuration, and signals the processor core to execute the highest-priority pending interrupt. Priority grouping divides the priority bits into those for preemption and those for sub-priority. Higher preemption priority allows an interrupt to interrupt a lower-priority interrupt. Sub-priority determines the order of interrupts with the same preemption priority.

**Question 2:**
What is a nested exception, and what hardware mechanism in ARM Cortex-M processors is essential for handling them correctly?

**Answer 2:**
A nested exception occurs when an exception handler is interrupted by another, higher-priority exception. The essential hardware mechanism for handling nested exceptions correctly is the automatic stacking of processor state (registers like PC and PSR) onto the stack when an exception occurs. This allows the processor to save the context of the interrupted handler and restore it upon returning.

**Question 3:**
Consider a system with two interrupt sources: a UART (priority 2) and a system tick timer (priority 1). If the timer ISR is executing and a UART interrupt occurs, what will happen? What happens if the UART interrupt occurs while the timer ISR is executing?

**Answer 3:**
*   **Timer ISR executing, UART interrupt occurs:** Since the UART interrupt has a lower priority than the timer interrupt, the UART interrupt will be ignored or will remain pending until the timer ISR completes. The timer ISR will continue executing without interruption.
*   **UART ISR executing, Timer interrupt occurs:** Since the Timer interrupt has a higher priority, it will preempt the UART ISR. The processor will automatically save the state of the UART ISR onto the stack, switch to the Timer ISR, and execute it. After the Timer ISR finishes, the processor will unstack the saved state of the UART ISR and resume its execution.

**Question 4:**
What are the potential drawbacks of having very long ISRs, especially in systems with multiple interrupt sources?

**Answer 4:**
Long ISRs can:
1.  **Increase interrupt latency for higher-priority interrupts:** A long ISR occupies the processor, delaying the servicing of more critical interrupts.
2.  **Increase the likelihood of nested interrupts:** The longer an ISR runs, the more time there is for another interrupt to occur.
3.  **Consume more stack space:** If nested interrupts occur within a long ISR, each nesting level requires additional stack space for context saving.
4.  **Reduce overall system responsiveness:** If critical tasks are delayed by long ISRs, the system may appear sluggish.

**Question 5:**
How can an assembly programmer protect a shared variable from being corrupted by concurrent interrupts? Provide a conceptual assembly code snippet.

**Answer 5:**
An assembly programmer can protect a shared variable by temporarily disabling interrupts before accessing the variable and re-enabling them afterwards, creating a "critical section."

```assembly
; Assume R0 holds the address of the shared variable
; Assume R1 is used to hold the temporary value

    MRS     R2, PRIMASK     ; Save the current interrupt mask state
    CPSID   I               ; Disable interrupts

    ; --- Start of Critical Section ---
    LDR     R1, [R0]        ; Load the shared variable into R1
    ; Perform operations on R1
    ADD     R1, R1, #1      ; Example: Increment the variable
    STR     R1, [R0]        ; Store the updated value back
    ; --- End of Critical Section ---

    MSR     PRIMASK, R2     ; Restore the original interrupt mask state
```

### 6. Important Points to Remember

*   **Priority is Key:** The core mechanism for handling multiple simultaneous events is prioritization.
*   **NVIC is the Manager:** On ARM Cortex-M, the NVIC is central to interrupt management and prioritization.
*   **Automatic Context Saving:** Hardware support for automatic stacking is vital for correct nested exception handling.
*   **Short ISRs are Good Practice:** Minimize the time spent in ISRs to reduce latency and the chance of unnecessary nesting.
*   **Critical Sections Require Protection:** Always protect shared resources accessed within ISRs or between ISRs and the main program.
*   **Reentrancy is Important:** Design ISRs to be reentrant if they can be interrupted by themselves.
*   **Stack Overflow is a Risk:** Be mindful of stack usage, especially with deep nesting.

This comprehensive study of priorities and nested exceptions provides a solid foundation for understanding how ARM processors manage concurrent events, a critical aspect of real-time embedded system development.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
