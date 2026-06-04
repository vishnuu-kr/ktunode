---
title: "cpu and vector table"
subject: "ARM ARCHITECTURE AND PROGRAMMING"
module: "Module 4: IO programming in assembly: Interrupts and exceptions"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feb13"
status: "completed"
scrapedAt: "2026-05-23T17:53:49.230Z"
---
# ARM Architecture and Programming: Module 4 - IO Programming in Assembly: Interrupts and Exceptions

## Topic: CPU and Vector Table

This topic explores the fundamental mechanisms that allow an ARM Cortex-M processor to respond to events, both internal (exceptions) and external (interrupts). Understanding the CPU's role and the vector table is crucial for effective IO programming in assembly.

---

### **Learning Outcomes Covered:**

*   **Understand the concept of interrupts and exceptions in ARM Cortex-M processors.** (Relates to CO2, K2)
*   **Explain the function of the vector table and its importance in exception handling.** (Relates to CO2, K2)
*   **Describe the processor's response to an interrupt or exception.** (Relates to CO2, K2)
*   **Identify the different types of exceptions and interrupts in ARM Cortex-M processors.** (Relates to CO2, K2)
*   **Explain the role of the Program Counter (PC) and Link Register (LR) in exception handling.** (Relates to CO2, K2)
*   **Write basic assembly code to handle a simple interrupt (conceptual understanding).** (Relates to CO3, K3)

---

### **Key Concepts and Definitions:**

#### **1. The ARM Cortex-M CPU's Role in Exception Handling**

The CPU is the central processing unit responsible for executing instructions. In the context of interrupts and exceptions, the CPU's primary roles are:

*   **Detecting the event:** The CPU constantly monitors for interrupt requests (IRQs) and internal exception conditions.
*   **Stopping current execution:** Upon detecting an event, the CPU temporarily halts the execution of the current program flow.
*   **Identifying the cause:** The CPU determines the specific type of interrupt or exception that has occurred.
*   **Branching to the handler:** Based on the identified cause, the CPU fetches the address of the appropriate handler routine from the vector table.
*   **Saving context:** The CPU automatically saves critical processor state (registers, program status) to the stack to allow for resumption of the interrupted task later.
*   **Executing the handler:** The CPU executes the instructions of the exception/interrupt handler.
*   **Restoring context and resuming:** After the handler completes, the CPU restores the saved context and resumes the interrupted program flow.

#### **2. Interrupts vs. Exceptions**

While often used interchangeably, there's a subtle but important distinction:

*   **Interrupts:** These are events that originate from *outside* the currently executing program. They are typically triggered by peripheral devices (e.g., a timer expiring, data arriving on a serial port, a button press). Interrupts are asynchronous to the instruction stream.
*   **Exceptions:** These are events that arise from *within* the currently executing program or from the processor itself. They can be:
    *   **Synchronous:** Occur as a direct result of executing an instruction (e.g., division by zero, illegal instruction, memory access violation).
    *   **Asynchronous:** While originating from within, they might not be directly tied to a specific instruction's execution, but rather a state change within the processor (e.g., NMI).

**Important Note:** The Cortex-M architecture uses the term "exception" to encompass both interrupts and synchronous/asynchronous internal events.

**(Referencing Lewis, Chapter 7: Interrupts and Exceptions)**

#### **3. The Vector Table**

The **vector table** is a critical data structure that the CPU consults when an interrupt or exception occurs. It's essentially a lookup table containing the starting addresses (vectors) of the routines that will handle each specific event.

*   **Location:** The vector table is typically located at the beginning of the microcontroller's flash memory (address `0x00000000` by default for many Cortex-M devices, but this can be remapped).
*   **Structure:** It's an array of 32-bit words, where each word is the address of an exception handler.
*   **Order:** The table is organized in a specific, fixed order for all Cortex-M processors. The first entry is for the Reset vector, followed by various exceptions, and then interrupts.
*   **Purpose:** By providing a jump table, the vector table decouples the hardware interrupt sources from the software exception handlers. The CPU doesn't need to know the actual memory location of each handler; it simply reads the address from the vector table.

**(Referencing Lewis, Chapter 7.2: The Vector Table)**

#### **4. Cortex-M Exception Model**

The Cortex-M architecture defines a standard set of exceptions. Each exception has a unique **vector number**, which corresponds to its position in the vector table.

| Vector Number | Exception Type             | mnemonic        | Description                                                                                                                                  | Priority |
| :------------ | :------------------------- | :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| -             | Initial Stack Pointer      |                 | Address of the initial value of the Main Stack Pointer (MSP).                                                                                | -        |
| 1             | Reset                      | `RESET`         | Executed when the processor is reset. The first instruction is fetched from the address specified by the Reset vector.                         | Highest  |
| 2             | Non-Maskable Interrupt     | `NMI`           | Highest priority interrupt, cannot be masked by software. Typically used for critical events like watchdog timer expiration or hardware faults. | High     |
| 3             | HardFault                  | `HARDFAULT`     | A bus fault or instruction fetch error that cannot be handled by a configurable fault handler. Unrecoverable.                                | High     |
| 4             | MemoryManagementFault      | `MEMMANAGE`     | Attempt to access memory that is not allowed by the Memory Protection Unit (MPU).                                                              | Medium   |
| 5             | BusFault                   | `BUSFAULT`      | A bus access error occurring during instruction fetch or data access.                                                                        | Medium   |
| 6             | UsageFault                 | `USAGEFAULT`    | An error during instruction execution (e.g., division by zero, unaligned access, invalid state transition).                                  | Medium   |
| 7-10          | Reserved                   |                 |                                                                                                                                              | -        |
| 11            | SVCall                     | `SVCall`        | Supervisor Call. Generated by the `SVC` instruction, used for system service calls (e.g., OS context switching).                            | Medium   |
| 12            | DebugMonitor               | `DEBUGMON`      | Used by the debug hardware.                                                                                                                  | Medium   |
| 13            | Reserved                   |                 |                                                                                                                                              | -        |
| 14            | PendSV                     | `PENDSV`        | Pendable Service Call. A system-level interrupt that can be triggered by software. Commonly used for OS context switching.                     | Low      |
| 15            | SysTick                    | `SYSTICK`       | Timer interrupt. Usually configured to generate periodic interrupts for system scheduling.                                                     | Low      |
| 16-239        | Interrupts (IRQs)          | `IRQ0` - `IRQ15`| Peripheral interrupts. The number of available IRQ channels varies by the specific microcontroller.                                            | Various  |

**(Referencing Yiu, Chapter 3: The Cortex-M Exception Model; Lewis, Chapter 7.1: Exception Types)**

#### **5. Processor Response to an Interrupt/Exception**

When an interrupt or exception occurs, the Cortex-M processor follows a well-defined sequence of actions:

1.  **Interrupt/Exception Detection:** The processor detects the pending interrupt request or exception condition.
2.  **Determine Exception Type:** The processor identifies the cause.
3.  **Check Priority and Masking:** If it's an interrupt, its priority is compared against the currently active interrupt priorities and the interrupt mask bits. If the interrupt is masked or has lower priority than the current execution, it's pended. If it's an exception with higher or equal priority than the current state (and not masked), it's taken immediately.
4.  **Load Vector:** The processor fetches the 32-bit exception handler address from the vector table at the offset corresponding to the exception type.
5.  **Update Stack Pointer:** The processor automatically updates the Stack Pointer (SP) to point to a new stack frame location.
6.  **Save Core Context:** Several critical registers are automatically pushed onto the stack:
    *   **Program Status Register (xPSR):** Contains the status flags (N, Z, C, V) and the processor mode.
    *   **Link Register (LR):** The return address from the *interrupted* instruction.
    *   **Program Counter (PC):** The address of the *next* instruction to be executed after the handler.
    *   **General-Purpose Registers:** R0-R3 are automatically pushed in the Cortex-M3/M4 for certain exceptions.
    *   **Additional Registers (Floating-point, etc.):** Depending on the core and specific exception, other registers might be stacked.
7.  **Set Processor State:** The processor automatically switches to the appropriate processor mode (e.g., Handler Mode) and sets the Stack Pointer to the Handler Stack Pointer (e.g., MSP or PSP).
8.  **Branch to Handler:** The processor loads the fetched exception handler address into the PC and begins executing the handler code.

**(Referencing Lewis, Chapter 7.3: The Exception Entry Sequence; Yiu, Chapter 3.2: Exception Entry and Return)**

#### **6. The Vector Table Structure (Detailed)**

Let's look closer at the vector table's initial entries for a typical Cortex-M microcontroller:

*   **Offset 0x00 (Address 0x00000000):** **Initial Stack Pointer (MSP) Value**
    *   This is not an address of a handler, but the *initial value* that the Main Stack Pointer (MSP) should be loaded with when the processor starts or is reset.
*   **Offset 0x04 (Address 0x00000004):** **Reset Vector**
    *   The address of the first instruction to be executed after a reset. This is typically the start of your application's startup code, which initializes the system and then branches to your `main` function.
*   **Offset 0x08 (Address 0x00000008):** **NMI Vector**
    *   The address of the Non-Maskable Interrupt handler.
*   **Offset 0x0C (Address 0x0000000C):** **HardFault Vector**
    *   The address of the HardFault handler.

...and so on, with each subsequent entry pointing to the handler for its corresponding exception or interrupt.

**(Referencing Yiu, Table 3.1: Cortex-M Exception and Interrupt Vector Table; Lewis, Figure 7.2: Vector Table)**

#### **7. The Role of PC and LR in Exception Handling**

*   **Program Counter (PC):**
    *   **During Normal Execution:** The PC points to the address of the *next instruction* to be fetched and executed.
    *   **During Exception Entry:** The PC is automatically pushed onto the stack. This pushed PC holds the address of the *first instruction to be executed after the exception handler completes*. When the handler finishes, the processor restores this PC value to resume execution where it left off.
*   **Link Register (LR):**
    *   **During Normal Execution:** The LR (R14) is used to store the return address from a subroutine call.
    *   **During Exception Entry (Cortex-M):** The LR is automatically pushed onto the stack. The value pushed into LR has a special pattern (e.g., `0xFFFFFFF1`, `0xFFFFFFF9`, `0xFFFFFFFD`, `0xFFFFFFF2`) that indicates the processor's state *before* the exception occurred (e.g., the stack used, the return address location). This is crucial for the exception return mechanism. The value that gets pushed into LR is typically `EXC_RETURN`.

**(Referencing Yiu, Chapter 3.2.1: Stack frame on exception entry; Lewis, Section 7.3.1: Stack Frame)**

#### **8. Software's View of the Vector Table**

From an assembly programmer's perspective, the vector table is a series of memory locations. To set up an interrupt handler, you need to:

1.  **Write the handler code:** This is your assembly routine that will execute when the interrupt occurs.
2.  **Determine the handler's address:** This is the memory address where your handler code resides.
3.  **Load the handler's address into the vector table:** You need to place the handler's address at the correct offset in the vector table.

**Example (Conceptual Assembly):**

```assembly
    .section .vectors    @ Define a section for the vector table
    .align 2             @ Align to a 4-byte boundary

    @ Vector 0: Initial Stack Pointer
    .word __initial_sp   @ Address of the initial stack pointer

    @ Vector 1: Reset Handler
    .word Reset_Handler  @ Address of our Reset Handler

    @ Vector 2: NMI Handler
    .word NMI_Handler    @ Address of our NMI Handler (can be a dummy)

    @ Vector 3: HardFault Handler
    .word HardFault_Handler @ Address of our HardFault Handler (essential)

    @ ... other exception vectors ...

    @ Vector 15: SysTick Handler
    .word SysTick_Handler @ Address of our SysTick Handler

    @ ... IRQ vectors ...

    @ --- Handler Code ---
    .section .text       @ Define a code section
    .global Reset_Handler
    .global NMI_Handler
    .global HardFault_Handler
    .global SysTick_Handler

Reset_Handler:
    @ Initialize stack, clocks, peripherals...
    BL main             @ Branch to the main application
    B .                 @ Loop forever if main returns

NMI_Handler:
    @ Placeholder or actual NMI handling
    BX LR               @ Return from exception

HardFault_Handler:
    @ Critical error: log or reset
    BX LR               @ Return (if possible, otherwise reset)

SysTick_Handler:
    @ Handle SysTick interrupt (e.g., increment a counter)
    @ ... do work ...
    BX LR               @ Return from interrupt
```

**Important Point:** The actual location of the vector table can sometimes be remapped by the system control block (SCB) to a different memory address, often at the beginning of RAM. This is crucial for certain boot scenarios or RTOS operations.

**(Referencing Zhu, Chapter 5: Interrupts and Exceptions; Lewis, Chapter 7.4: Exception Handling in Assembly)**

---

### **Practice Questions and Exercises:**

**Question 1 (K2):** What is the primary function of the vector table in the ARM Cortex-M architecture?

**Question 2 (K2):** Differentiate between an interrupt and an exception in the context of ARM Cortex-M. Provide an example of each.

**Question 3 (K2):** When an interrupt occurs, which essential processor registers are automatically pushed onto the stack by the hardware?

**Question 4 (K2):** What is the significance of the "Reset Vector" in the vector table?

**Question 5 (K3):** Imagine you are writing assembly code for a microcontroller and need to implement an interrupt handler for a timer. Describe the steps you would conceptually follow, mentioning the role of the vector table.

---

### **Answers to Practice Questions:**

**Answer 1:** The vector table is a lookup table containing the starting addresses of the exception and interrupt handler routines. When an interrupt or exception occurs, the CPU consults the vector table to find the correct handler to execute.

**Answer 2:**
*   **Interrupt:** An event originating from outside the currently executing program, usually a peripheral device. Example: A UART receiving a byte of data.
*   **Exception:** An event originating from within the currently executing program or the processor itself, often due to an error or a specific instruction. Example: A division by zero error (UsageFault) or a `SVC` instruction (SVCall).

**Answer 3:** The essential processor registers automatically pushed onto the stack during exception entry on a Cortex-M3/M4 are:
*   xPSR (Program Status Register)
*   LR (Link Register)
*   PC (Program Counter)
*   R0-R3 (for certain exceptions)

**Answer 4:** The Reset Vector is the entry in the vector table at offset `0x04`. It contains the address of the first instruction to be executed by the processor immediately after a reset event. This code typically initializes the system, including setting up the stack pointer, before branching to the main application code.

**Answer 5:** To implement a timer interrupt handler in assembly:
1.  **Write the Timer Handler Code:** Create an assembly routine that performs the desired actions (e.g., toggling an LED, incrementing a counter). This routine will end with a `BX LR` instruction to return from the exception.
2.  **Determine Handler Address:** Ensure your linker script places the handler code at a specific memory address.
3.  **Update Vector Table:** Locate the vector table in memory (usually at `0x00000000`). Find the entry corresponding to the timer interrupt (e.g., SysTick or a specific IRQ). Load the memory address of your timer handler code into that vector table entry.
4.  **Enable Interrupts:** Configure the interrupt controller (NVIC) to enable the specific timer interrupt and set its priority. Enable global interrupts.

---

### **Important Points to Remember:**

*   **Vector Table is Key:** The vector table is the CPU's roadmap for handling events. Its integrity is paramount.
*   **Fixed Order:** The order of entries in the vector table is standardized across Cortex-M processors.
*   **Reset Vector:** The initial stack pointer and reset vector are the first two entries and are crucial for system startup.
*   **Context Saving:** The automatic stacking of registers by the hardware simplifies exception handling, as you don't manually save all registers.
*   **`BX LR`:** This is the standard instruction used to return from an interrupt or exception handler in ARM assembly.
*   **Handler Mode:** When an exception is taken, the processor switches to a privileged mode called Handler Mode, which has its own stack pointer (MSP by default).
*   **Prioritization:** Interrupts and exceptions have priorities. Higher-priority events can preempt lower-priority ones.
*   **Masking:** Certain interrupts can be temporarily disabled (masked) using the Interrupt Mask Register (IMR) or the PRIMASK/FAULTMASK registers.

---

This concludes the notes on the CPU and Vector Table in ARM Architecture and Programming, focusing on interrupts and exceptions. Understanding these concepts is foundational for building robust embedded systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
