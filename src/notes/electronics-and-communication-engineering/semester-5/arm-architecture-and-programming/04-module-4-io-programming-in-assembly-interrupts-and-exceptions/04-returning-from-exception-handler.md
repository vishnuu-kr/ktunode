---
title: "returning from exception handler"
subject: "ARM ARCHITECTURE AND PROGRAMMING"
module: "Module 4: IO programming in assembly: Interrupts and exceptions"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feb08"
status: "completed"
scrapedAt: "2026-05-23T17:53:41.102Z"
---
# ARM Architecture and Programming - Module 4: IO Programming in Assembly: Interrupts and Exceptions

## Topic: Returning from Exception Handler

This module focuses on understanding how to gracefully exit an exception handler in ARM processors, particularly within the context of embedded systems. We will explore the mechanisms and instructions used to restore the processor's state and resume normal execution.

---

### Learning Outcomes Covered:

*   **LO 4.x: Understand the mechanisms for returning from an exception handler in ARM assembly.**
    *   This topic directly addresses this outcome by detailing the specific instructions and processor behavior for returning.
*   **LO 4.y: Analyze the stack frame setup and restoration process during exception handling.**
    *   Understanding how to return implicitly involves knowing what was saved on the stack by the processor when the exception occurred.
*   **LO 4.z: Implement correct return sequences in ARM assembly for various exception types.**
    *   The principles discussed are applicable across different exception types.

---

### Course Outcomes Alignment:

*   **CO1: Use the features of C that are frequently used in embedded systems (Knowledge Level: K3)**
    *   While this topic is assembly-focused, understanding exception return mechanisms is crucial for writing interrupt service routines (ISRs) in C. Compilers generate assembly code for ISRs, and the underlying principles of returning are the same. Knowing these principles helps in debugging and optimizing C-based ISRs.
*   **CO2: Explain a programmer’s view of processor architecture (Knowledge Level: K2)**
    *   This topic provides a deep dive into a critical aspect of the processor's architecture: how it manages control flow during exceptional events and how that control flow is restored. It explains the role of specific registers and the processor state.
*   **CO3: Choose between programming at the level of assembly or C as appropriate (Knowledge Level: K3)**
    *   This topic reinforces the understanding of low-level processor operations. Knowing how exceptions are handled and how to return allows developers to make informed decisions about when to drop down to assembly for performance-critical ISRs or specific hardware interactions, and when C is sufficient.

---

### Key Concepts and Definitions:

*   **Exception:** A broad term encompassing interrupts (external events) and exceptions (internal events like data aborts or undefined instructions).
*   **Exception Handler (or Interrupt Service Routine - ISR):** A specific piece of code that is executed when an exception occurs.
*   **Stack:** A region of memory used for temporary storage of data, including function call parameters, local variables, and, importantly for exceptions, the processor's state.
*   **Processor State:** Refers to the values of various registers (Program Counter, status registers, general-purpose registers) that define the current execution context of the processor.
*   **Stack Frame:** The portion of the stack allocated for a specific function call or exception handler, typically containing saved registers and context information.
*   **Program Status Register (PSR):** A register that holds important status flags and control bits, including the Current Program Status Register (CPSR) and Saved Program Status Register (SPSR). When an exception occurs, the CPSR of the interrupted program is saved into the SPSR of the new processor mode.
*   **Link Register (LR):** In ARM, the LR register (R14) holds the return address for function calls. During exceptions, the processor automatically saves the return address (the address of the instruction *after* the one that caused the exception) into the LR of the *new* processor mode.

---

### Mechanisms for Returning from an Exception Handler:

The fundamental principle of returning from an exception handler is to restore the processor's state to what it was *before* the exception occurred, allowing the interrupted program to resume execution seamlessly. The ARM architecture provides specific instructions and relies on the stack mechanism for this.

#### 1. The Role of the Link Register (LR)

When an exception occurs, the ARM processor automatically:

*   **Saves the Program Counter (PC):** The PC value that would have been executed next (the address of the instruction *after* the exception-causing instruction) is saved into the Link Register (LR) of the processor mode into which it transitions (e.g., Handler Mode).
*   **Saves the Program Status Register (PSR):** The Current Program Status Register (CPSR) of the interrupted processor mode is saved into the Saved Program Status Register (SPSR) of the new processor mode.
*   **Sets the PC:** The PC is loaded with the starting address of the appropriate exception handler from the vector table.

Therefore, the LR in the new processor mode contains the crucial return address.

#### 2. The `SUBS PC, LR, #offset` Instruction

The primary and most common instruction used to return from an exception handler is `SUBS PC, LR, #offset`. Let's break this down:

*   **`SUBS` (Subtract and Set flags):** This is a special form of the `SUB` instruction. When used in this context, it not only performs subtraction but also has a critical side effect: it automatically **restores the CPSR from the SPSR** of the target processor mode. This is the key to returning the processor to its original state (flags, interrupt masks, etc.).
*   **`PC`:** The destination register. Writing to the PC causes a branch.
*   **`LR`:** The source register, holding the saved return address.
*   **`#offset`:** This is an optional immediate offset.

**Why the Offset?**

The processor saves the PC of the *next instruction to be executed*. If the instruction that caused the exception was a simple, single-cycle instruction, the saved PC would be correct. However, some ARM instructions (especially those involved in pipelining, or multi-cycle operations) might cause the processor to fetch the next instruction *before* completing the current one. In such cases, the saved PC might be one instruction ahead of where the program should logically resume.

*   For most exceptions (like interrupts, system calls), the exception is triggered by the execution of a specific instruction. The processor saves the address of the *next* instruction to execute. The exception handler then needs to resume execution from that saved address. In this scenario, the `SUBS PC, LR, #0` (or simply `SUBS PC, LR`) is sufficient.
*   For some specific exceptions, particularly those related to memory access faults (e.g., Data Abort), the saved LR might point to the instruction *after* the one that caused the fault. The faulting instruction might need to be re-executed after the fault condition is cleared. In these cases, an offset of `4` (for ARM state) or `2` (for Thumb state) might be used to adjust the return address to point to the faulting instruction itself.

**Common Return Sequences:**

*   **For most Interrupts:**
    ```assembly
    SUBS PC, LR, #0  ; Return from interrupt, restoring CPSR from SPSR
    ```
    or more concisely:
    ```assembly
    SUBS PC, LR       ; Equivalent to SUBS PC, LR, #0
    ```

*   **For exceptions requiring instruction re-execution (e.g., certain data aborts):**
    ```assembly
    ; Assume LR holds the address of the instruction after the faulting one
    ; Need to subtract 4 bytes (1 instruction) to point to the faulting instruction
    SUBS PC, LR, #4   ; Return to the faulting instruction
    ```
    *(Note: The exact offset depends on the instruction set state - ARM or Thumb. For Thumb, it would be `#2`.)*

#### 3. Stack Restoration (Implicitly handled by `SUBS PC, LR`)

When an exception occurs, the processor automatically pushes the PC and CPSR (into SPSR) onto the stack for the new processor mode. When `SUBS PC, LR` is executed, this PUSH operation is mirrored by an automatic POP of the SPSR back into the CPSR. This is the magic that restores the original processor state, including the execution mode and interrupt masks.

**What about General-Purpose Registers?**

The `SUBS PC, LR` instruction *only* restores the PC and CPSR. It does *not* automatically restore the general-purpose registers (R0-R12) or the LR (R14) of the interrupted task.

**Crucially, your exception handler *must* manually save and restore any general-purpose registers it modifies.** This is typically done using the `PUSH` and `POP` instructions.

**Example of saving and restoring registers in an ISR:**

```assembly
    ; --- ISR Entry ---
    PUSH    {R0-R3, LR}    ; Save general-purpose registers and the LR of the caller (which holds the return address)

    ; --- ISR Body ---
    ; ... perform I/O operations, update flags, etc.
    ; ... if your ISR needs to call subroutines, you'll need to save LR here if it's modified.

    ; --- ISR Exit ---
    POP     {R0-R3, LR}    ; Restore general-purpose registers and the original LR
    SUBS    PC, LR, #0     ; Return to the interrupted program
```

**Important Note on LR:**

In the example above, `{R0-R3, LR}` are pushed. The `LR` being pushed here is the LR of the *caller* of the ISR. However, when an exception occurs, the processor saves the return address (the PC of the interrupted code) into the *new mode's LR*.

So, the correct way to handle this is to save the *new mode's LR* (which contains the return address to the interrupted code) and then use it in the `SUBS PC, LR` instruction.

**Revised and Corrected ISR Exit Sequence:**

```assembly
    ; --- ISR Entry ---
    ; Processor automatically saved PC -> LR_Handler, CPSR -> SPSR_Handler
    ; Assume the exception handler is written in the Handler mode.
    PUSH    {R0-R3}        ; Save the general-purpose registers that the handler will use and modify.

    ; --- ISR Body ---
    ; ... I/O operations, logic ...

    ; --- ISR Exit ---
    POP     {R0-R3}        ; Restore the general-purpose registers
    ; Now, restore the original PC and CPSR from LR_Handler and SPSR_Handler
    SUBS    PC, LR, #0     ; This instruction performs:
                           ; 1. PC = LR - 0 (Branches to the saved return address)
                           ; 2. CPSR = SPSR (Restores processor state)
```

**Why `PUSH {R0-R3}` and not `{R0-R3, LR}`?**

When the exception happens, the processor itself saves the return address into the LR of the *handler mode*. This is the LR that `SUBS PC, LR` uses. Your ISR *doesn't* need to save this specific LR again. It only needs to save the general-purpose registers it plans to modify. If your ISR calls other subroutines, *then* you would need to push the LR of the handler mode before the `BL` (Branch with Link) instruction, and restore it after the `BL` returns.

#### 4. Return from Tail-Chained Interrupts

In some scenarios, an interrupt handler might itself be interrupted by a higher-priority interrupt. This is called **interrupt chaining** or **tail chaining**. When returning from a nested interrupt handler, the `SUBS PC, LR` instruction handles the restoration of the correct context. The LR in the handler mode will correctly point to the next instruction of the *outermost* interrupted task.

#### 5. Non-Maskable Interrupts (NMIs) and Other Special Cases

While the `SUBS PC, LR` is the standard, certain very high-priority exceptions or specific processor implementations might have slight variations or require careful consideration. However, for typical embedded programming with Cortex-M, this is the primary mechanism.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### Textbooks and Reference Material Integration:

*   **Lewis, "Fundamentals of Embedded Software with the ARM Cortex M3"**:
    *   Chapter 7 discusses interrupt handling. It details how the processor automatically saves state to the stack upon exception entry and the role of the LR in providing the return address. The `SUBS PC, LR` instruction is implicitly or explicitly covered as the means to exit an ISR and restore the CPSR.
    *   The book emphasizes that the ISR must save and restore any registers it uses.

*   **Yiu, "The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors"**:
    *   Chapter 2 (Processor Modes and Privileges) and Chapter 4 (Exceptions and Interrupts) are highly relevant. Yiu provides a detailed explanation of the exception entry and exit sequences.
    *   He clearly illustrates how the processor automatically pushes `PC` and `PSR` (into `SPSR`) and how `SUBS PC, LR` is used to pop `SPSR` back into `CPSR` and branch to the return address.
    *   Yiu also stresses the importance of the ISR saving/restoring context (general-purpose registers). He might show assembly examples of `PUSH` and `POP` for this purpose.

*   **Zhu, "Embedded systems with ARM Cortex M Microcontrollers in Assembly and C"**:
    *   This book often provides practical, code-centric examples. It would likely demonstrate ISR implementations in assembly, clearly showing the `PUSH`/`POP` for register saving and the `SUBS PC, LR` for the return.
    *   The focus on assembly programming means the explicit register manipulation and instruction usage for exception return will be well-covered.

---

### Important Points to Remember:

*   **Automatic State Saving:** The ARM processor automatically saves the PC and CPSR (into SPSR) when entering an exception handler.
*   **`SUBS PC, LR, #offset` is Key:** This instruction is the primary mechanism for returning. It branches to the address in LR and, critically, restores the CPSR from SPSR.
*   **Register Saving is Manual:** Your exception handler *must* manually save and restore any general-purpose registers (R0-R12) that it modifies using `PUSH` and `POP` instructions.
*   **LR in Handler Mode:** The LR in the handler mode (e.g., LR\_Handler) holds the return address to the interrupted program. The ISR should *not* push this specific LR unless it's making nested calls.
*   **Offset for Re-execution:** Use an offset with `SUBS PC, LR` (e.g., `#4` for ARM state, `#2` for Thumb state) if the exception handler needs to retry the instruction that caused the exception.
*   **Return Address Precision:** Ensure you understand if the saved LR points to the faulting instruction or the instruction after it. The standard `SUBS PC, LR` assumes the latter for most cases.
*   **Stack Alignment:** Be mindful of stack alignment when using `PUSH` and `POP` to ensure you don't corrupt the stack.

---

### Practice Questions:

**Question 1:**
What is the primary instruction used to return from an ARM exception handler, and what are its two main functions?

**Question 2:**
When an exception occurs, what information does the processor automatically save, and where does it save it?

**Question 3:**
Why is it necessary for an exception handler to manually save and restore general-purpose registers? Provide an assembly snippet showing how you would save R0 and R1 at the beginning of an ISR.

**Question 4:**
Consider an exception handler that needs to re-execute the instruction that caused the exception. Which instruction would you use for the return, and what offset would likely be required (assuming the exception occurred in ARM state)?

**Question 5:**
Explain the difference between the LR used in a typical function return (`BL` and `MOV PC, LR`) and the LR involved in an exception return (`SUBS PC, LR`).

---

### Answers to Practice Questions:

**Answer 1:**
The primary instruction is `SUBS PC, LR, #offset`. Its two main functions are:
1.  **Branching:** It updates the Program Counter (PC) with the value from the Link Register (LR), effectively branching to the address where execution should resume.
2.  **Restoring PSR:** It automatically restores the processor's original state by copying the Saved Program Status Register (SPSR) back into the Current Program Status Register (CPSR).

**Answer 2:**
When an exception occurs, the processor automatically saves:
1.  The **Program Counter (PC)** of the interrupted program (pointing to the next instruction to be executed) into the **Link Register (LR)** of the new processor mode.
2.  The **Current Program Status Register (CPSR)** of the interrupted program into the **Saved Program Status Register (SPSR)** of the new processor mode.

**Answer 3:**
It is necessary to manually save and restore general-purpose registers because the `SUBS PC, LR` instruction only restores the PC and CPSR. Any general-purpose registers that the ISR modifies (e.g., R0, R1, R4, etc.) would otherwise be corrupted for the interrupted program, leading to incorrect program behavior.

Assembly snippet for saving R0 and R1:
```assembly
    PUSH    {R0, R1}        ; Save R0 and R1 onto the stack
    ; ... ISR body ...
    POP     {R0, R1}        ; Restore R0 and R1 from the stack
    ; ... then proceed to SUBS PC, LR for return
```

**Answer 4:**
You would use the instruction `SUBS PC, LR, #4`. The offset of `#4` is typically required because the LR in the exception context usually holds the address of the instruction *after* the one that caused the exception. Subtracting 4 bytes (for ARM state) moves the PC back to the start of the faulting instruction, allowing it to be re-executed.

**Answer 5:**
*   **Function Return (`BL` and `MOV PC, LR`):** When a subroutine is called using `BL` (Branch with Link), the address of the next instruction is placed in LR. To return, `MOV PC, LR` simply loads this address into the PC, and execution continues. The CPSR is *not* affected.
*   **Exception Return (`SUBS PC, LR`):** In an exception return, the LR of the handler mode contains the return address to the interrupted program. `SUBS PC, LR` does two things: it loads the PC from LR *and* it restores the CPSR from the SPSR. This is crucial because the exception might have occurred in a different processor mode (e.g., User Mode to Handler Mode) with different flag settings, and this restoration ensures the interrupted program resumes with its original execution context.