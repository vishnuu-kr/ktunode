---
title: "entering the exception handler"
subject: "ARM ARCHITECTURE AND PROGRAMMING"
module: "Module 4: IO programming in assembly: Interrupts and exceptions"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feb07"
status: "completed"
scrapedAt: "2026-05-23T17:53:40.395Z"
---
# ARM Architecture and Programming: Module 4 - IO Programming in Assembly: Interrupts and Exceptions

## Topic: Entering the Exception Handler

This document provides comprehensive study notes on the process of entering an exception handler in ARM architecture, specifically focusing on ARM Cortex-M microcontrollers. It aims to cover the key concepts, mechanisms, and practical aspects relevant to embedded systems development using assembly language.

---

### **1. Learning Outcomes Covered**

*   **Understanding Exception Types:** Differentiate between interrupts, faults, and other exception sources in the ARM Cortex-M architecture.
*   **Exception Vector Table:** Explain the structure and purpose of the exception vector table and how it facilitates exception handling.
*   **Automatic State Saving:** Describe the processor's automatic saving of essential registers and processor state upon entering an exception handler.
*   **Stack Operations:** Detail the stack operations performed by the processor during exception entry, including the Push Multiple Registers (PUSH {R0-R3, R12, LR, PC, PSR}) and Push Additional Registers (if applicable) sequences.
*   **Return from Exception:** Explain the mechanism for returning from an exception handler, including the use of the exception return value in the Link Register (LR) and the Pop Multiple Registers (POP {R0-R3, R12, LR, PC, PSR}) instruction.
*   **Nested Exceptions:** Understand the concept of nested exceptions and how the processor manages them.
*   **Processor Mode and Privilege Levels:** Discuss how the processor's mode and privilege level change upon entering an exception handler.

---

### **2. Key Concepts and Definitions**

*   **Exception:** A generic term for an event that causes the processor to deviate from its normal program execution flow. This includes interrupts, faults (e.g., Bus Fault, Usage Fault, Memory Management Fault), and system calls.
    *   **Interrupt:** An external event (e.g., from an I/O peripheral) that requires immediate attention from the processor. Interrupts are typically asynchronous to the processor's instruction stream.
    *   **Fault:** An internal event caused by an erroneous instruction or data access. Faults are typically synchronous to the instruction stream.
*   **Exception Handler (or Interrupt Service Routine - ISR):** A block of code specifically written to service an exception. When an exception occurs, the processor branches to the address of the corresponding exception handler.
*   **Exception Vector Table (EVT):** A table in memory that stores the starting addresses (vectors) of all possible exception handlers. The EVT is typically located at the beginning of flash memory.
    *   **Vector:** An entry in the EVT containing the address of an exception handler.
*   **Link Register (LR - R14):** A special-purpose register that stores the return address to the instruction that would have been executed next if the exception had not occurred.
*   **Program Counter (PC):** A register that holds the address of the next instruction to be fetched.
*   **Processor Status Register (PSR):** A register that contains status flags (e.g., condition codes), interrupt masks, and processor mode bits. On Cortex-M, this includes the Application Program Status Register (APSR), Interrupt Program Status Register (IPSR), and Execution Program Status Register (EPSR).
*   **Stack:** A region of memory used for temporary storage of data, including function arguments, local variables, and, importantly, processor state during exception handling.
*   **Stack Pointer (SP):** A register that points to the top of the stack. Cortex-M processors have multiple stack pointers (MSP - Main Stack Pointer, PSP - Process Stack Pointer), but for exception entry, the MSP is typically used.
*   **Nested Exception:** An exception that occurs while another exception handler is already executing.

---

### **3. The Process of Entering an Exception Handler**

When an exception occurs, the ARM Cortex-M processor automatically performs a series of actions to transfer control to the appropriate exception handler. This process is designed to be efficient and to preserve the state of the interrupted program.

**Key Steps:**

1.  **Exception Detection:** The processor detects an exception condition (e.g., an interrupt request from a peripheral, a bus error).
2.  **Exception Prioritization:** If multiple exceptions are pending, the processor selects the highest-priority pending exception to service. (This is managed by the Nested Vectored Interrupt Controller - NVIC).
3.  **Exception Entry Sequence (Automatic Hardware Action):** The processor automatically executes the following steps:

    *   **Select Exception Vector:** The processor uses the exception number to calculate the offset into the Exception Vector Table. The vector at this offset provides the starting address of the handler.
    *   **Save Context (Automatic Stack Push):** The processor automatically pushes a subset of essential registers onto the stack (typically the Main Stack Pointer - MSP). This context includes:
        *   **R0-R3:** General-purpose registers that might have been modified by the interrupted instruction.
        *   **R12:** A special-purpose register used for intra-module calls.
        *   **LR (R14):** The Link Register, which contains the return address to the interrupted program.
        *   **PC (R15):** The Program Counter, which points to the instruction *after* the one that caused the exception (or the next instruction if it was an interrupt).
        *   **PSR (Program Status Register):** The current processor status.
        *   **Extended Context (if applicable):** For some exceptions (like memory faults), additional registers like R4-R11 and the original PSR might also be pushed onto the stack, depending on the processor's internal handling and the specific exception type. This is often referred to as a "late-arriving" or "extended" frame.
    *   **Update PSR:** The PSR is updated to reflect the new processor state. Crucially, the **IPSR** field within the PSR is updated to indicate the current exception number being serviced. This effectively disables lower-priority exceptions and can enable higher-priority ones.
    *   **Update LR:** The Link Register (LR) is set to a special exception return value (e.g., `0xFFFFFFF1`, `0xFFFFFFF9`, `0xFFFFFFFD`, `0xFFFFFFF1` depending on the exception and whether it was a hard fault or other exception, and whether it uses the extended stack frame). This value signals to the processor that a special return sequence should be executed when the handler finishes.
    *   **Load PC:** The PC is loaded with the address of the exception handler, fetched from the Exception Vector Table.
    *   **Update SP:** The Stack Pointer (SP) is decremented to point to the new top of the stack, which now contains the saved context.

4.  **Exception Handler Execution:** The processor begins executing instructions at the address loaded into the PC, which is the start of the exception handler.

---

### **4. Exception Vector Table (EVT) Structure**

The Exception Vector Table is a fundamental part of ARM Cortex-M exception handling.

*   **Location:** Usually located at the beginning of the flash memory (address `0x00000000`).
*   **Format:** A table of 32-bit words (addresses). Each entry is a pointer to the start of an exception handler.
*   **Vector Table Offset Register (VTOR):** The `VTOR` register in the System Control Block (SCB) can be used to relocate the vector table to a different memory location (e.g., RAM).
*   **Vector Size:** The size of the vector table depends on the number of exceptions supported by the specific Cortex-M microcontroller. Each exception, including interrupts, has a dedicated entry.

**Example Vector Table Entry:**

| Exception Type        | Offset from EVT start | Vector Address | Description                                                 |
| :-------------------- | :-------------------- | :------------- | :---------------------------------------------------------- |
| Reset                 | 0x00                  | `0x00000004`   | Address of the Reset Handler (usually `Reset_Handler`)      |
| NMI                   | 0x04                  | `0x00000008`   | Address of the Non-Maskable Interrupt Handler               |
| HardFault             | 0x08                  | `0x0000000C`   | Address of the HardFault Handler                            |
| MemManageFault        | 0x0C                  | `0x00000010`   | Address of the Memory Management Fault Handler              |
| ...                   | ...                   | ...            | ...                                                         |
| Interrupt 0 (e.g., TIM1) | `0x100 + 0*4`         | `Handler_TIM1` | Address of the Timer 1 Interrupt Handler                    |
| Interrupt 1 (e.g., ADC) | `0x100 + 1*4`         | `Handler_ADC`  | Address of the ADC Interrupt Handler                        |

**Important Note:** The first entry in the vector table (offset `0x00`) is usually a pointer to the initial stack pointer value. The Reset handler is at offset `0x04`.

---

### **5. Automatic Context Saving (Stack Frame)**

Upon entering an exception, the Cortex-M processor automatically pushes a specific set of registers onto the stack. This set of registers is known as the **stack frame**.

*   **Minimum Stack Frame (Exception Return Value `0xFFFFFFF9` or `0xFFFFFFFD`):**
    *   `R0`
    *   `R1`
    *   `R2`
    *   `R3`
    *   `R12`
    *   `LR` (updated with the exception return value)
    *   `PC` (address of the next instruction after the interrupted one)
    *   `xPSR` (current processor status register)

    This minimal frame is pushed using a single `PUSH` instruction by the hardware.

*   **Extended Stack Frame (Exception Return Value `0xFFFFFFF1`):**
    *   Includes all registers from the minimum frame, *plus*:
    *   `R4`, `R5`, `R6`, `R7`, `R8`, `R9`, `R10`, `R11`
    *   The original `PSR` (before the exception entry update) might be included as part of the PSR being pushed if the exception requires it.

    The extended stack frame is used for exceptions that might require saving more registers, particularly those that might be corrupted by the exception entry process or are needed to resume the interrupted context accurately. The processor determines whether to use the minimum or extended frame based on the exception type and specific configurations.

**How it looks on the stack (conceptual):**

```
Stack grows downwards (higher addresses to lower addresses)

High Address
+---------------------+  <-- MSP before exception entry
| Saved R0            |
+---------------------+
| Saved R1            |
+---------------------+
| Saved R2            |
+---------------------+
| Saved R3            |
+---------------------+
| Saved R12           |
+---------------------+
| Saved LR (Exception |
| return value)       |
+---------------------+
| Saved PC            |
+---------------------+
| Saved xPSR          |
+---------------------+  <-- MSP after exception entry
Low Address
```

**Textbook Reference (Lewis):** Chapter 7, "Interrupts and Exception Handling," in "Fundamentals of Embedded Software with the ARM Cortex M3" by Daniel W Lewis, discusses the processor's automatic stacking mechanism. It highlights that the Cortex-M processor implements automatic stacking of registers to preserve the state of the interrupted program, simplifying exception handler design.

**Textbook Reference (Yiu):** Chapter 3, "Core Registers," and Chapter 12, "Exception Handling," in "The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors" by Joseph Yiu, provides a detailed explanation of the stack frame formats (minimum and extended) and the specific exception return values. Yiu's book is excellent for understanding the nuances of the LR values and their impact on the return process.

---

### **6. Entering an Exception Handler in Assembly**

While the processor automatically saves registers, understanding the underlying assembly instructions is crucial for advanced scenarios and for comprehending what happens under the hood.

When an exception occurs, the processor doesn't execute explicit assembly instructions like `PUSH {R0-R3, R12, LR, PC, PSR}`. Instead, this is a **hardware-initiated sequence**.

However, a typical assembly language exception handler would look something like this:

```assembly
.section .text
.global MyInterruptHandler  // Make the handler visible globally

MyInterruptHandler:
    // --- Automatic Stack Frame Creation (Hardware Action) ---
    // The processor has already:
    // 1. Pushed R0-R3, R12, LR, PC, PSR onto the MSP.
    // 2. Updated LR with an exception return value.
    // 3. Loaded PC with the address of this handler.
    // 4. Updated xPSR to reflect the new exception mode.

    // At this point, the MSP points to the last saved register (xPSR).
    // The handler can now access saved registers on the stack
    // or use scratch registers for its own operations.

    // Example: Saving additional registers if needed (manual saving)
    // For a minimal handler, this might not be necessary if only
    // scratch registers are used for the handler's logic.
    // If you need to preserve registers R4-R7, you would:
    // PUSH {R4-R7}   // Manually push if you intend to use these registers

    // Read the original LR value (which is now on the stack) to determine
    // the return address of the interrupted task.
    // The LR value on the stack is actually the address of the next
    // instruction after the one that was interrupted.

    // Access the saved registers if required. For example, to retrieve
    // the value of R0 that was saved:
    // LDR R1, [SP, #0]  // Load saved R0 into R1 (SP points to xPSR at this point)
    // The offset depends on the exact stack frame size. Yiu's book details these offsets.
    // For minimum frame (xPSR on top):
    // LDR R1, [SP, #28] // Load saved R0 into R1 (assuming SP points to xPSR)
    // LDR R2, [SP, #24] // Load saved R1 into R2
    // ... and so on for other registers.

    // --- Exception Handler Logic ---
    // This is where your specific interrupt handling code goes.
    // For example, acknowledge the interrupt at the peripheral:
    // LDR R0, =UART0_SR  // Address of UART Status Register
    // LDR R1, [R0]      // Read status
    // AND R1, R1, #0x10 // Clear the RXNE flag (example)
    // STR R1, [R0]      // Write back to status register

    // If you manually pushed registers (e.g., R4-R7):
    // POP {R4-R7}       // Restore manually saved registers

    // --- Returning from the Exception ---
    // The return mechanism is also automatic via the LR's exception return value.
    // The handler should *not* modify LR directly in a way that prevents
    // the exception return.
    // To return, the handler simply finishes execution. The processor
    // detects the special LR value and performs the exception return.
    // The instruction that causes the return is implicitly handled by
    // the processor upon reaching the end of the exception handler's
    // execution block *if* the LR was not overwritten with a normal
    // subroutine return value.

    // A simple way to end a handler in assembly, relying on the automatic return:
    // EXCEPTION_RETURN_VALUE = 0xFFFFFFF9 // Example for minimum frame
    // MOV LR, EXCEPTION_RETURN_VALUE  // Not typically needed if handler just finishes
    // BX LR                         // This is how a normal subroutine returns,
                                    // but for exceptions, the hardware
                                    // uses the special LR value.

    // The actual return is triggered by the processor when it sees the
    // exception return value in LR and finishes the handler.
    // It will then pop the saved registers and resume execution.
    // The last instruction of a handler doesn't explicitly call 'BX LR' for
    // the exception return itself. The hardware handles it.

    // For clarity, one might conceptually think of it as:
    // POP {R0-R3, R12, LR, PC, PSR}  // Hardware instruction
    // But this is not written by the programmer.

    // If additional registers were manually saved (e.g., R4-R7):
    // POP {R4-R7} // Restore registers saved manually

    // The processor will implicitly perform the stack POP and resume.

    BX LR           // This is for normal subroutine returns.
                    // For exception returns, the hardware handles it
                    // based on the LR value pushed by the hardware.
                    // If the handler modifies LR, it MUST restore the
                    // exception return value before exiting.

    // For a typical simple handler where you don't modify LR or PC,
    // just finishing the code is sufficient.
    // The critical part is understanding that the LR holds the magic return value.

    // Correct way to end a handler is to let it fall through,
    // the processor sees the special LR and performs the return.
    // Some assemblers might require a specific syntax to indicate the end
    // or a branch back to the implicit return mechanism.
    // Often, a simple BX LR at the end is conceptually correct for the idea
    // of "returning," but the processor's hardware handles the stack unwinding
    // based on the specific exception return value in LR.

    // Let's consider the 'BX LR' for the return. The processor checks the LR value.
    // If it's an exception return value, it knows to pop the full stack frame.
    // So, a common pattern in assembly is to perform handler actions and then
    // let the processor handle the return via the special LR.

    // Consider the return instruction. The processor's core logic detects
    // the exception return value in LR. When the handler finishes,
    // it implicitly causes a return. A BX LR might be present to signify
    // the end of the handler's control flow.

    // If the handler *modifies* LR, it must restore the exception return value
    // before exiting.

    // Simple handler exit:
    // The processor will pop the saved registers and resume the interrupted task.

    // A common pattern for handlers in C or generated assembly is to simply
    // execute the handler's logic and then the compiler/toolchain
    // generates the appropriate return.
    // In raw assembly, you might see a BX LR, but the key is the special LR value.

    // The most straightforward way is to perform the handler's actions,
    // and then, if you manually saved any registers, restore them.
    // The return itself is managed by the processor based on the LR.
    // If the LR was corrupted by the handler, it needs to be restored.

    // Often, the final 'BX LR' is included in generated code to signify the return path.
    // However, the processor's hardware exception return logic is the crucial part.
    // If LR contains 0xFFFFFFF9, the processor knows to pop the minimum stack frame.

    // Final correct understanding:
    // The handler finishes. The processor inspects the LR. If it's an exception
    // return code, it pops the correct number of registers based on that code
    // and resumes the interrupted program. Explicit 'BX LR' *might* be present
    // in some generated assembly but isn't strictly necessary if the handler
    // doesn't alter LR and simply finishes. However, it's good practice to ensure
    // the return path is explicitly defined.

    // If you need to perform actions *before* the automatic return,
    // you would put them here. For example, clearing pending interrupts.

    // Example: A handler that does nothing but returns.
    // The processor has already saved context and loaded PC.
    // The handler logic is empty.
    // To ensure a proper return, the LR must retain its exception return value.
    // If the handler modified LR for some reason (e.g., nesting manually),
    // it MUST restore the original exception return value.

    // Typically, a simple handler might look like:
    // ... handler logic ...
    // POP {R0-R3, R12} // Restore scratch registers if used
    // BX LR // This is the normal return, but the processor handles exception return

    // The critical point is the LR value. If it's 0xFFFFFFF9 etc, the
    // processor will use it to pop the stack.
    // If you finish handler code, and LR contains the exception return
    // value, the processor will handle the pop and resume.
    // Let's be explicit about the return:
    // The processor handles the return. If you need to return from nested
    // interrupts, you would use BX LR.

    // If the handler itself is a subroutine that calls other functions,
    // those function calls will save/restore registers as usual.
    // The exception return value in LR needs to be preserved.

    // Simple handler end:
    // The exception return is handled by the hardware.
    // If you have manually saved registers, you must pop them.
    // Example: if PUSH {R4-R7} was used at the start:
    // POP {R4-R7}
    // The processor then performs the exception return.
    // The BX LR instruction is often generated to bridge the gap,
    // but the stack unwinding itself is dictated by the special LR value.

    // For a basic interrupt handler that does minimal work:
    // Handler_Code:
    //    ... Peripheral interaction ...
    //    BX LR // This is the standard exit for subs. For exceptions,
             // the LR value itself dictates the return.

    // To be precise, the processor *detects* the exception return value in LR
    // and performs the appropriate stack pop.
    // If the handler does not modify LR, simply ending the handler's execution
    // leads to the exception return.

    // Corrected understanding for assembly exit:
    // Perform handler actions.
    // If you saved registers manually (e.g., PUSH {R4-R7}), POP them back.
    // The hardware will handle the stack unwinding automatically.
    // The 'BX LR' at the end is often generated by compilers and implicitly
    // uses the exception return value in LR for the actual return.

    // If the handler *must* return to a specific instruction after its own logic,
    // it would set LR to that address and then use BX LR. But for a basic ISR,
    // the processor uses the pre-saved LR value.

    // So, after your handler logic:
    // If R4-R7 were used and saved:
    // POP {R4-R7}

    // The processor will now use the exception return value in LR to pop
    // the remaining registers and resume.

    // Best practice for explicit return in assembly (even though hardware does it):
    // ... handler logic ...
    // POP {R4-R7} // If saved
    // SUBS PC, LR, #4 // Or equivalent that uses the exception return value
                    // This instruction is actually what the hardware does.
                    // In modern Cortex-M, the special LR values are used.

    // In typical ISRs written in assembly, the end often looks like:
    // ... handler logic ...
    // POP {R0-R3, R12} // If these were used and you want to preserve their state from caller
    // BX LR          // This will work if LR is the exception return value.

    // The actual instruction that performs the exception return is
    // a hardware-decoded instruction that reads the exception return
    // value from LR, pops the correct stack frame, and loads PC.
    // The 'BX LR' is a general return instruction that will work here
    // because LR holds the exception return address.

    // Final thought on assembly:
    // Perform interrupt logic.
    // Manually pop any registers you manually pushed.
    // The processor automatically handles the rest of the stack unwinding
    // and resumption based on the special LR value.

    // A common, minimal handler:
    // MyInterruptHandler:
    //   // Handler code here (e.g., clear interrupt flag)
    //   BX LR  // Essential to ensure the return mechanism is invoked correctly.

    // The BX LR instruction is used to return from subroutines and also
    // to trigger the exception return mechanism when LR contains an exception
    // return code.

    // Important: Ensure LR is not corrupted. If it is, restore the exception return value.
    // Example: If you call a function from your ISR:
    // PUSH {LR}      // Save the exception return value before calling another function
    // BL MySubroutine
    // POP {LR}       // Restore the exception return value
    // BX LR          // Now correctly returns from the exception

    BX LR // This is the standard way to signal the end of an ISR in assembly.
          // The processor interprets the special LR value.

```

**Course Outcome Alignment:**

*   **CO2 (K2):** This section directly explains a programmer's view of processor architecture by detailing the register saving and PC/LR updates during exception entry.
*   **CO3 (K3):** Understanding these low-level assembly mechanics allows a programmer to choose between assembly and C appropriately. For complex interrupt handling or performance-critical sections, direct assembly knowledge is beneficial.

---

### **7. Returning from an Exception**

The return from an exception handler is also a carefully orchestrated process, largely handled by the processor based on the special value stored in the Link Register (LR).

**Key Steps:**

1.  **Handler Completion:** The exception handler code executes.
2.  **Implicit Return Mechanism:** When the handler finishes, the processor examines the value in the Link Register (LR).
3.  **Exception Return Value:** If LR contains one of the special exception return values (e.g., `0xFFFFFFF9`, `0xFFFFFFFD`, `0xFFFFFFF1`), the processor recognizes this as a request to return from an exception.
4.  **Automatic Stack Pop:** The processor automatically pops the saved registers from the stack (in the reverse order they were pushed) using the information encoded in the exception return value. This restores the state of the interrupted program.
    *   `POP {R0-R3, R12, LR, PC, PSR}` (conceptual, hardware equivalent)
5.  **Resumption of Interrupted Program:** The PC is loaded with the saved PC value (the address of the next instruction in the interrupted program), and the processor resumes execution of the interrupted program from that point. The original PSR is also restored.

**Return Values in LR and Stack Frame:**

*   `0xFFFFFFF9`: Returns from handler using the minimum stack frame. Pops {R0-R3, R12, LR, PC, PSR}.
*   `0xFFFFFFFD`: Returns from handler using the minimum stack frame, but EXC_RETURN bit 1 is set. This means the handler was entered from Thread mode and the return restores the processor to Thread mode using the Process Stack Pointer (PSP) if it was active.
*   `0xFFFFFFF1`: Returns from handler using the extended stack frame. Pops {R0-R3, R12, LR, PC, PSR} and {R4-R11, PSR}.

**Important Considerations for Return:**

*   **Do not overwrite the exception return value in LR** unless you are performing a nested interrupt handling and manually managing the stack. If you must call a subroutine from your ISR, you *must* save the LR (which contains the exception return value) before the `BL` instruction and restore it before the `BX LR` (or the implicit return).
*   **Manual Stack Operations:** If your handler manually pushes any registers (e.g., `PUSH {R4-R7}`), you *must* manually pop them back before the exception return occurs.

**Example of Saving/Restoring LR when calling a subroutine from an ISR:**

```assembly
.section .text
.global MyInterruptHandler

MyInterruptHandler:
    // LR currently holds the exception return value (e.g., 0xFFFFFFF9)

    PUSH {LR}          // Save the exception return value (e.g., 0xFFFFFFF9)
                       // The stack now has the saved exception LR, then the
                       // context pushed by hardware.
                       // SP now points to the saved exception LR.

    // Now, call a subroutine. This subroutine might use LR for its own returns.
    BL MySubroutine    // BL pushes the address of the instruction after BL onto LR.

    POP {LR}           // Restore the original exception return value into LR.
                       // SP now points to the last context register pushed by hardware.

    // The processor will now use this restored LR value for the exception return.
    BX LR              // Explicitly return from the exception handler.

MySubroutine:
    // Subroutine logic...
    // ...
    BX LR              // Returns to the caller (which is MyInterruptHandler)
```

**Course Outcome Alignment:**

*   **CO2 (K2):** Explains the programmer's view of the LR register's role in exception return and how it dictates the stack unwinding process.
*   **CO3 (K3):** Understanding this mechanism is vital for correctly implementing ISRs, especially when they involve calls to other functions or complex state management.

---

### **8. Nested Exceptions**

Nested exceptions occur when an exception handler is executing, and another, higher-priority exception occurs.

**How it works:**

1.  **Higher Priority Exception Occurs:** While an ISR for exception A is running, an interrupt for exception B occurs, where B has higher priority than A.
2.  **Preemption:** The Cortex-M processor (with its NVIC) will preempt the execution of handler A and immediately start executing handler B.
3.  **New Stack Frame:** Before jumping to handler B, the processor automatically pushes the current context of handler A's execution (including its saved registers and its LR, which holds the exception return value for handler A) onto the stack. This creates a new stack frame for handler B.
4.  **Handler B Execution:** Handler B executes.
5.  **Return from B:** When handler B finishes, the processor performs an exception return, restoring the context of handler A.
6.  **Resumption of Handler A:** Execution resumes within handler A at the point where it was preempted.
7.  **Return from A:** When handler A finishes, it performs its own exception return, resuming the original interrupted program.

**Key Points:**

*   **Priority-Based Preemption:** The Nested Vectored Interrupt Controller (NVIC) is crucial for managing exception priorities and enabling preemption.
*   **Stack Management:** Each nested exception requires its own stack frame to be pushed onto the stack, preserving the state of the interrupted handler.
*   **LR Management:** The LR register's value is critical. The processor automatically manages saving and restoring the LR containing the exception return values for each level of nesting.

**Textbook Reference (Yiu):** Chapter 12, "Exception Handling," in "The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors" provides detailed explanations and diagrams of nested interrupt handling and the stack frame management involved.

**Course Outcome Alignment:**

*   **CO2 (K2):** Illustrates the processor's ability to manage multiple interrupt contexts and priorities, deepening the understanding of its architectural capabilities.

---

### **9. Practice Questions and Answers**

**Question 1:** What is the primary function of the Exception Vector Table (EVT)?

**Answer:** The EVT is a table in memory that stores the starting addresses (vectors) of all possible exception handlers. When an exception occurs, the processor uses the exception number to calculate an offset into the EVT and fetches the address of the corresponding handler to execute.

**Question 2:** Describe the registers that are automatically pushed onto the stack when a Cortex-M processor enters an exception handler.

**Answer:** The processor automatically pushes a minimum set of registers: R0-R3, R12, LR (with an exception return value), PC, and the PSR. For certain exceptions, additional registers (R4-R11) might also be pushed, forming an extended stack frame.

**Question 3:** What special value is stored in the Link Register (LR) upon entering an exception handler, and what is its purpose?

**Answer:** The LR is updated with a special "exception return" value (e.g., `0xFFFFFFF9`, `0xFFFFFFFD`, `0xFFFFFFF1`). This value signals to the processor that when the handler finishes, it should perform an exception return sequence, which includes automatically popping the saved context from the stack and resuming the interrupted program.

**Question 4:** If your assembly language interrupt service routine (ISR) needs to call another function, what is the critical step you must perform before calling the function and after returning from it?

**Answer:** Before calling another function (`BL` or `BLX`), you must save the current value of LR (which contains the exception return value) onto the stack. After returning from the called function, you must restore the original exception return value from the stack back into LR before the handler finishes. This ensures the processor can correctly return from the exception.

**Question 5:** True or False: When an exception handler finishes, it explicitly executes a `BX LR` instruction to return to the interrupted program.

**Answer:** False. While `BX LR` is often present in generated assembly to signify the return path, the actual return from an exception is a hardware-initiated process. The processor detects the special exception return value in LR and automatically pops the saved context from the stack and resumes the interrupted program. The `BX LR` instruction, when LR holds an exception return value, correctly triggers this hardware mechanism.

---

### **10. Important Points to Remember**

*   **Automatic Context Saving:** The Cortex-M processor automatically saves critical registers onto the stack when an exception occurs. This is a hardware function.
*   **Exception Vector Table:** This table is the lookup mechanism for exception handler addresses. Its content is vital.
*   **Link Register (LR):** Crucial for exception returns. It holds a special code that tells the processor how to unwind the stack and resume the interrupted program.
*   **Stack Management:** Understand the stack frame structure and how it changes with different exception types and return values.
*   **Nested Exceptions:** The processor handles higher-priority interrupts preempting lower-priority handlers by pushing additional context onto the stack.
*   **ISR Return:** For basic ISRs in assembly, ensure you perform any necessary manual stack operations (e.g., saving/restoring registers used by the ISR). The `BX LR` is often used to explicitly signal the return, relying on the special LR value for the hardware to perform the stack unwind.
*   **LR Corruption:** Be extremely careful not to corrupt the LR value within an ISR, especially if you call other functions. Always save and restore the exception return value in such cases.

---

This concludes the study notes on entering the exception handler in ARM Architecture and Programming. By understanding these principles, you can effectively design and implement interrupt-driven systems and handle various exception scenarios in embedded applications.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
