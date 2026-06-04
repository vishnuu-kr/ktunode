---
title: "thread and handler modes"
subject: "ARM ARCHITECTURE AND PROGRAMMING"
module: "Module 4: IO programming in assembly: Interrupts and exceptions"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feb06"
status: "completed"
scrapedAt: "2026-05-23T17:53:39.696Z"
---
# ARM Architecture and Programming: Module 4 - IO Programming in Assembly: Interrupts and Exceptions

## Topic: Thread and Handler Modes

### 1. Introduction to Processor Modes in ARM

Processors, especially those used in embedded systems like the ARM Cortex-M series, operate in different **processor modes**. These modes dictate the access privileges, stack pointer, and available registers for a given task. Understanding these modes is crucial for writing robust and efficient low-level code, particularly when dealing with interrupts and exceptions.

**Key Concept:** Processor modes allow the CPU to behave differently based on the context of its operation, providing mechanisms for privilege control and efficient interrupt/exception handling.

**Referenced from:**
*   **Lewis (2015), Chapter 4: Processor Modes and Memory Organization:** This chapter likely introduces the fundamental processor modes of the ARM Cortex-M architecture, including User, Handler, and other privileged modes, and explains their purpose.
*   **Yiu (2014), Chapter 2: Programmer's View:** Yiu's book is a definitive guide and will extensively cover the processor modes, including their associated registers and how they change during operation.

### 2. Thread Mode

**Thread Mode** is the primary execution mode for an operating system's threads or application tasks. It's where the bulk of the application code runs.

**Key Concepts:**

*   **Purpose:** To execute normal application code.
*   **Privilege Level:** Can be either **Thread Mode Privileged** or **Thread Mode Unprivileged**.
    *   **Thread Mode Privileged:** Allows access to all system resources and instructions, including privileged operations. This is often used for low-level system tasks or when OS features require full privileges.
    *   **Thread Mode Unprivileged:** Has restricted access to certain resources and instructions, enhancing system security and stability. For example, it cannot modify the Memory Protection Unit (MPU) or access certain system registers.
*   **Stack:** Uses a dedicated **Thread Stack Pointer (SP)**. The processor can have two stack pointers: Main Stack Pointer (MSP) and Process Stack Pointer (PSP). Thread Mode can use either.
    *   **MSP:** Typically used by the exception/interrupt handler and the OS kernel.
    *   **PSP:** Typically used by application threads.
*   **Entry/Exit:** The processor typically enters Thread Mode on reset. It can transition to other modes (like Handler Mode) when an interrupt or exception occurs. It returns to Thread Mode after the interrupt/exception handler completes.

**Example (Conceptual):**
Imagine a system with a sensor reading task and a display update task. Both of these tasks would run in Thread Mode. One might run in privileged Thread Mode if it needs direct hardware access, while the other might run in unprivileged Thread Mode for safety.

**Learning Outcome Alignment:**
*   **LO1 (IO programming in assembly):** Understanding Thread Mode is foundational to any IO programming, as the application performing IO will reside here.
*   **LO2 (Programmer's view of processor architecture):** This directly addresses the programmer's view of the processor, specifically how application code executes.
*   **LO3 (Assembly vs. C):** While tasks in Thread Mode can be written in C, understanding the underlying mode is crucial if assembly is used for performance-critical sections or direct hardware interaction within these tasks.

### 3. Handler Mode

**Handler Mode** is a special processor mode designed exclusively for handling **exceptions and interrupts**.

**Key Concepts:**

*   **Purpose:** To service hardware interrupts and software exceptions.
*   **Privilege Level:** Always **privileged**. This allows the handler to access all system resources and instructions necessary to service the interrupt or exception, regardless of the privilege level of the code that was executing before the event.
*   **Stack:** Uses the **Main Stack Pointer (MSP)**. This is a critical distinction from Thread Mode, which can use PSP. The processor automatically switches to MSP when entering Handler Mode to ensure that a stable stack is available for exception handling, even if the application thread was using PSP.
*   **Entry/Exit:** The processor automatically enters Handler Mode when an interrupt request (IRQ) or an exception occurs. It exits Handler Mode when the exception handler finishes and returns execution to the interrupted program.
*   **Automatic Context Saving:** Upon entering Handler Mode, the processor automatically pushes several registers onto the stack (e.g., PC, LR, PSR, R0-R3). This is known as **automatic hardware stacking**. This preserves the state of the interrupted program, allowing it to resume correctly.
*   **Return from Handler:** The LR (Link Register) in Handler Mode contains a special value (often `0xFFFFFFF9` for an IRQ, `0xFFFFFFFD` for a NMI, etc.) which indicates that the LR's return address points to the **EXC_RETURN** instruction in the handler, and also signifies that the processor should restore the banked registers and return to the appropriate previous mode.

**Example (Conceptual):**
If a timer interrupt occurs while the system is in Thread Mode, the processor automatically switches to Handler Mode. The interrupt service routine (ISR) executes in Handler Mode, services the timer, and then the processor returns to Thread Mode, resuming the interrupted task.

**Referenced from:**
*   **Lewis (2015), Chapter 11: Interrupts and Exceptions:** This chapter will detail the transition between modes during interrupts, the role of the LR register, and the context switching process.
*   **Yiu (2014), Chapter 3: Exception Model:** Yiu's work is paramount here, providing an in-depth explanation of the exception model, including the entry into Handler Mode, register stacking, and the return mechanism.
*   **Zhu (2018), Chapter 5: Interrupts and Exceptions:** Zhu's book will likely offer practical examples of setting up interrupt handlers and the code flow within Handler Mode using assembly.

**Learning Outcome Alignment:**
*   **LO1 (IO programming in assembly):** Interrupt handlers are a core part of IO programming in assembly, as they are often triggered by IO peripheral events.
*   **LO2 (Programmer's view of processor architecture):** Understanding Handler Mode, its privilege, stack usage, and automatic context saving is fundamental to the programmer's view of how exceptions are managed.
*   **LO3 (Assembly vs. C):** Interrupt handlers are a classic use case for assembly programming due to the need for precise control over register saving and minimal overhead.

### 4. Transition Between Thread and Handler Modes

The transitions between Thread Mode and Handler Mode are a fundamental aspect of interrupt-driven systems.

**Key Concepts:**

*   **Interrupt Entry:**
    1.  An interrupt request is detected by the interrupt controller (e.g., NVIC - Nested Vectored Interrupt Controller).
    2.  The processor acknowledges the interrupt.
    3.  The processor automatically switches to **Handler Mode**.
    4.  The processor automatically saves the context (PC, LR, PSR, R0-R3) onto the **MSP**.
    5.  The LR is updated to a special value indicating a return from exception.
    6.  The PC is loaded with the address of the appropriate interrupt handler from the vector table.
    7.  Execution begins in the interrupt handler.

*   **Exception Entry:** Similar to interrupt entry, but the specific exception type determines the vector table entry and the special LR value.

*   **Return from Handler:**
    1.  The interrupt/exception handler finishes execution.
    2.  The handler typically executes a special return instruction (e.g., `BX LR` or `POP {..., PC}`). When this instruction is executed with the special LR value, it signifies a **late-arriving exception return**.
    3.  The processor automatically restores the saved registers from the MSP.
    4.  The processor automatically switches back to the previous **Thread Mode** (or another exception handler mode if a higher priority interrupt occurred).
    5.  Execution resumes from the instruction that was interrupted.

**Important Point:** The automatic stacking and the use of MSP in Handler Mode are crucial for ensuring that the interrupted program's state is correctly preserved and restored, regardless of which stack (MSP or PSP) was being used in Thread Mode.

**Referenced from:**
*   **Lewis (2015), Chapter 11:** Will detail the interrupt handling flow and context switching.
*   **Yiu (2014), Chapter 3 & 4:** Yiu's detailed explanation of the exception model, including the precise stack operations and register manipulations during mode transitions, is essential.
*   **Zhu (2018), Chapter 5:** Provides practical assembly code examples demonstrating the return from interrupt and the implications for mode switching.

**Learning Outcome Alignment:**
*   **LO1 (IO programming in assembly):** This is the core mechanism by which IO peripherals signal events to the CPU.
*   **LO2 (Programmer's view of processor architecture):** This directly explains the dynamic behavior of the processor in response to external events.
*   **LO3 (Assembly vs. C):** The `BX LR` instruction, when used with the special LR values, is a key piece of assembly knowledge for returning from interrupts.

### 5. Register Usage and Stack Pointers (MSP vs. PSP)

The distinction between MSP and PSP is critical when understanding Thread and Handler modes.

| Feature             | Thread Mode                                      | Handler Mode                                       |
| :------------------ | :----------------------------------------------- | :------------------------------------------------- |
| **Primary Purpose** | Application execution                            | Interrupt and exception handling                   |
| **Privilege**       | Privileged or Unprivileged                       | Always Privileged                                  |
| **Stack Pointer**   | Can use MSP or PSP (configured via SCR register) | **Always uses MSP** (automatically switched)       |
| **Context Saving**  | No automatic stacking on mode entry              | **Automatic hardware stacking** of R0-R3, PC, LR, PSR |
| **Entry Mechanism** | Reset, return from exception                     | Interrupts, exceptions                             |
| **Exit Mechanism**  | Transition to Handler Mode, return from exception | Return from exception                              |

**The `SCR` (Configuration and Control Register):**

*   The `SCR` register controls aspects of processor behavior, including which stack pointer (MSP or PSP) is used in Thread Mode (`SPSEL` bit).
*   When `SPSEL` is 0, Thread Mode uses MSP.
*   When `SPSEL` is 1, Thread Mode uses PSP.

**Register Banking:**
When an interrupt occurs, the processor automatically banks some registers (e.g., LR, PSR, R0-R3) for the exception entry. This means that separate sets of these registers are available for Handler Mode and Thread Mode, simplifying context saving.

**Referenced from:**
*   **Lewis (2015), Chapter 4 & 11:** Will explain the `SCR` register and its role in stack selection for Thread Mode.
*   **Yiu (2014), Chapter 2 & 3:** Yiu provides exhaustive details on register banking and the behavior of stack pointers during mode transitions.
*   **Zhu (2018), Chapter 5:** May show assembly code for configuring the `SCR` register.

**Learning Outcome Alignment:**
*   **LO1 (IO programming in assembly):** Knowing which stack is used is crucial for writing assembly handlers and for understanding how to manage stack space.
*   **LO2 (Programmer's view of processor architecture):** This is a direct illustration of the programmer's view of how different modes manage their execution context through distinct stack pointers and register banking.
*   **LO3 (Assembly vs. C):** In C, the compiler manages stack usage. In assembly, the programmer must be aware of these differences.

### 6. Practice Questions and Exercises

**Question 1:**
When an interrupt occurs, the ARM Cortex-M processor automatically switches to which mode? What stack pointer does it use in this mode?

**Answer 1:**
The processor automatically switches to **Handler Mode**. It uses the **Main Stack Pointer (MSP)** in Handler Mode.

**Question 2:**
What is the primary purpose of Thread Mode? Can Thread Mode be privileged or unprivileged?

**Answer 2:**
The primary purpose of Thread Mode is to execute normal application code. Thread Mode can be either **privileged** or **unprivileged**, depending on the system configuration.

**Question 3:**
Describe the process of automatic context saving when the processor enters Handler Mode. Which registers are automatically saved, and where are they saved?

**Answer 3:**
When entering Handler Mode, the processor automatically saves the following registers onto the stack:
*   R0-R3
*   R12 (IP)
*   LR (Link Register)
*   PSR (Program Status Register)
*   PC (Program Counter)

These registers are saved onto the **MSP**.

**Question 4:**
What is the significance of the special values found in the LR register when returning from an exception handler in Handler Mode?

**Answer 4:**
The special values in the LR register (e.g., `0xFFFFFFF9` for IRQ) indicate to the processor that:
1.  The value in LR points to an **EXC_RETURN** instruction within the handler.
2.  The processor should perform a **late-arriving exception return**.
3.  During the return, it should automatically restore the banked registers from the stack and switch back to the appropriate previous processor mode (e.g., Thread Mode).

**Question 5 (Assembly Focus):**
Suppose you are writing an interrupt handler in assembly. If the interrupt occurred while your application thread was running and using the Process Stack Pointer (PSP), how would you ensure your interrupt handler functions correctly without corrupting the application's stack?

**Answer 5:**
You don't need to explicitly manage the application's stack (PSP) because when the interrupt occurs, the processor automatically switches to Handler Mode and pushes the necessary context onto the **MSP**. Your interrupt handler should use the MSP for its own stack operations if needed. When the handler finishes, the `BX LR` instruction (or equivalent) with the special LR value will automatically restore the context from the MSP and return control to the interrupted thread, which will resume using its original stack pointer (PSP).

**Important Point:** The processor's built-in exception handling mechanism, including automatic mode switching, stack management (using MSP in Handler Mode), and register banking, greatly simplifies interrupt service routine development.

### 7. Summary and Key Takeaways

*   **Processor Modes:** ARM Cortex-M processors have distinct modes (Thread, Handler) for managing execution and privilege.
*   **Thread Mode:** For general application execution. Can be privileged or unprivileged. Uses either MSP or PSP.
*   **Handler Mode:** Exclusively for interrupts and exceptions. Always privileged. Uses MSP.
*   **Mode Transitions:** Hardware-driven, involving automatic context saving and restoration.
*   **MSP vs. PSP:** Critical distinction. Handler Mode *always* uses MSP. Thread Mode *can* use PSP for application threads, leaving MSP for the OS/handlers.
*   **Automatic Stacking:** Essential for correct interrupt handling; the processor saves key registers onto the MSP upon entering Handler Mode.
*   **EXC_RETURN:** Special values in LR signal the processor to perform a late exception return, restoring context and switching back to the previous mode.
*   **Assembly Advantage:** Understanding these low-level details is paramount when writing interrupt handlers or performance-critical IO routines in assembly, ensuring precise control over system state.

This topic forms the bedrock of understanding how embedded systems respond to events and manage concurrent operations, a key aspect of IO programming in assembly.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
