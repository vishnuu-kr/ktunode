---
title: "Registers of 8085"
subject: "MICROPROCESSORS AND EMBEDDED SYSTEMS"
module: "Module 1: Introduction to microprocessors "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f3620c"
status: "completed"
scrapedAt: "2026-05-23T16:22:35.754Z"
---
# MICROPROCESSORS AND EMBEDDED SYSTEMS

## Module 1: Introduction to Microprocessors

### Topic: Registers of 8085 Microprocessor

---

**Learning Outcomes Covered:**

*   Understand the fundamental building blocks of a microprocessor, specifically the registers in the 8085 architecture.
*   Relate the function of each register to its role in data manipulation, storage, and control within the 8085.
*   Grasp how registers are utilized in 8085 assembly language programming to perform operations.

---

### 1. Introduction to Registers in Microprocessors

Registers are small, high-speed storage locations within the CPU (Central Processing Unit) of a microprocessor. They are used to hold data, instructions, memory addresses, and control information that the microprocessor is actively working on. Think of them as the CPU's immediate workspace.

**Key Concepts:**

*   **Speed:** Registers are much faster than main memory (RAM), allowing the CPU to access data and instructions very quickly.
*   **Capacity:** Registers have a limited storage capacity, typically measured in bits (e.g., 8-bit, 16-bit).
*   **Functionality:** Different registers are designed for specific purposes, such as holding data, performing arithmetic operations, or managing program flow.

**Reference:**

*   **Gaonkar, Ramesh. *Microprocessor, Architecture, Programming and Applications*. Sixth edition, 2014.** Gaonkar's book provides an excellent foundational understanding of microprocessor architecture, including the critical role of registers. He emphasizes how registers are the primary interface for the programmer to interact with the CPU's internal operations.
*   **Ram, B. *Fundamentals of Microprocessor and Microcontrollers*. DHANPAT Rai Publications (P) Ltd.-New Delhi.** Ram's text also details the register structure of microprocessors, offering a clear explanation of their significance in data processing and control.

---

### 2. The 8085 Microprocessor Architecture and Registers

The Intel 8085 is an 8-bit microprocessor. Its architecture includes a set of general-purpose and special-purpose registers. Understanding these registers is crucial for writing effective 8085 assembly language programs.

**Alignment with Course Outcomes:**

*   **CO1: Describe the architecture of 8085 microprocessor and 8085 Assembly language programming.** This topic directly addresses the architecture part of CO1 by detailing the register set, which is a core component of the 8085's structure. It also lays the groundwork for understanding assembly language programming by explaining where data and instructions are temporarily stored.

---

### 3. Types of Registers in 8085

The 8085 microprocessor features a variety of registers, each with a specific function. These can be broadly categorized into:

**A. General-Purpose Registers:**

These registers can be used by the programmer to store temporary data during program execution. They can be used individually or in pairs.

*   **B, C Registers:**
    *   An 8-bit register pair.
    *   Can be used as separate 8-bit registers (B and C) or as a 16-bit register pair (BC).
    *   Often used for storing data, loop counters, or as memory pointers when paired with BC.
    *   **Example:** `MOV A, B` (moves the content of register B to register A) or `MOV B, data` (moves data into register B).

*   **D, E Registers:**
    *   An 8-bit register pair.
    *   Can be used as separate 8-bit registers (D and E) or as a 16-bit register pair (DE).
    *   Similar to B, C, they are versatile for data storage and memory addressing.
    *   **Example:** `ADD D` (adds the content of register D to register A).

*   **H, L Registers:**
    *   An 8-bit register pair.
    *   Can be used as separate 8-bit registers (H and L) or as a 16-bit register pair (HL).
    *   Crucially, the **HL pair is primarily used as a 16-bit memory address pointer**. This means it holds the address of a byte in memory.
    *   **Example:** `MOV A, M` (moves the byte from the memory location pointed to by the HL pair to register A). `SHLD 2000H` (stores the contents of the HL pair into memory locations 2000H and 2001H).

**Important Point to Remember:** The H and L registers are particularly important as they form the **HL pair**, which is the primary 16-bit address register for memory operations.

*   **A Register (Accumulator):**
    *   An 8-bit register.
    *   It is the most important register in the 8085.
    *   Most arithmetic and logical operations are performed with the accumulator. The result of these operations is typically stored back in the accumulator.
    *   **Example:** `ADD B` (adds the content of register B to the accumulator, and the result is stored in the accumulator). `ANI 0FH` (AND immediate data `0FH` with the accumulator, result in accumulator).

**Reference:**

*   **Gaonkar, Ramesh. *Microprocessor, Architecture, Programming and Applications*.** Gaonkar dedicates significant portions to the accumulator and general-purpose registers, illustrating their use in basic arithmetic and data transfer operations.

**B. Special-Purpose Registers:**

These registers have specific functions related to program execution, memory management, and status reporting.

*   **Program Counter (PC):**
    *   A 16-bit register.
    *   It holds the **address of the next instruction to be fetched** from memory.
    *   After fetching an instruction, the PC is automatically incremented to point to the subsequent instruction.
    *   This register is crucial for sequential program execution and also for handling jumps and branches.
    *   **Example:** When the processor executes a `JMP` (Jump) instruction, the PC is loaded with the address specified in the `JMP` instruction, changing the flow of execution.

*   **Stack Pointer (SP):**
    *   A 16-bit register.
    *   It points to a special area in RAM called the **stack**.
    *   The stack is used for temporary storage of data and addresses, particularly during subroutine calls and interrupt service routines.
    *   When data is pushed onto the stack, the SP is decremented. When data is popped from the stack, the SP is incremented.
    *   **Example:** The `CALL` instruction pushes the address of the instruction following `CALL` onto the stack (using SP), and the `RET` instruction pops that address from the stack back into the PC to return from the subroutine.

**Important Point to Remember:** The PC and SP are essential for controlling program flow and managing subroutine/interrupt execution.

*   **Instruction Register (IR):**
    *   An 8-bit register.
    *   When an instruction is fetched from memory, it is placed in the IR.
    *   The CPU's control unit then decodes the instruction in the IR to determine what operation needs to be performed.
    *   This register is internal to the CPU and not directly accessible to the programmer.

*   **General Purpose Registers (Temporary):**
    *   The 8085 also has temporary general-purpose registers (often denoted as W and Z) used internally by the ALU for performing operations. These are not directly accessible by the programmer.

**C. Flag Register (F or PSW - Program Status Word):**

*   An 8-bit register, but only **5 bits are used** to store status flags.
*   Flags are single-bit indicators that reflect the result of arithmetic and logical operations.
*   They are used to control the flow of program execution (e.g., conditional jumps).
*   The 5 flags in the 8085 are:
    1.  **Sign Flag (S):** Set (1) if the result of an operation is negative (MSB is 1). Reset (0) if the result is positive (MSB is 0).
    2.  **Zero Flag (Z):** Set (1) if the result of an operation is zero. Reset (0) if the result is non-zero.
    3.  **Auxiliary Carry Flag (AC):** Set (1) if there is a carry from bit 3 to bit 4 during an addition operation (relevant for BCD arithmetic). Reset (0) otherwise.
    4.  **Parity Flag (P):** Set (1) if the result has even parity (even number of set bits). Reset (0) if the result has odd parity (odd number of set bits).
    5.  **Carry Flag (CY):** Set (1) if there is a carry out of the most significant bit (MSB) during an addition operation, or a borrow into the MSB during a subtraction operation. Reset (0) otherwise.

**Important Point to Remember:** The flags are critical for implementing decision-making (conditional branching) in programs.

**Reference:**

*   **Ram, B. *Fundamentals of Microprocessor and Microcontrollers*.** Ram provides a detailed explanation of each flag and its specific conditions for being set or reset, crucial for understanding conditional operations.
*   **Rafiquzzaman, M. *Microprocessor Theory and Application*.** This book offers insights into how the flag register is used in the context of the ALU and its interaction with control signals.

---

### 4. Register Organization in 8085 - Summary

| Register Name | Size (bits) | Function                                                                  | Accessible to Programmer? |
| :------------ | :---------- | :------------------------------------------------------------------------ | :------------------------ |
| **A (Accumulator)** | 8           | Primary register for arithmetic/logic operations and data manipulation.   | Yes                       |
| **B, C**      | 8, 8        | General-purpose registers; can be used as BC (16-bit) for data storage.   | Yes                       |
| **D, E**      | 8, 8        | General-purpose registers; can be used as DE (16-bit) for data storage.   | Yes                       |
| **H, L**      | 8, 8        | General-purpose registers; **HL pair used as a 16-bit memory address pointer.** | Yes                       |
| **PC**        | 16          | Stores the address of the next instruction to be executed.                | No (managed by CPU)       |
| **SP**        | 16          | Points to the top of the stack in memory.                                 | Yes                       |
| **IR**        | 8           | Holds the current instruction being decoded.                              | No (internal to CPU)      |
| **Flags (S, Z, AC, P, CY)** | 5 (used)    | Store the status of the last arithmetic/logic operation.                  | Yes (indirectly)          |

---

### 5. Register Usage in 8085 Assembly Language Programming

**Alignment with Course Outcomes:**

*   **CO1: Describe the architecture of 8085 microprocessor and 8085 Assembly language programming.** Understanding registers is fundamental to writing 8085 assembly language.
*   **CO2: Understand the need for interrupts, Subroutines, timing diagram of 8085 microprocessor and interfacing.** Registers like SP and PC are vital for subroutines and interrupts.

**Examples of Register Usage:**

1.  **Data Transfer:**
    *   `MOV A, B;` (Move data from B to Accumulator)
    *   `MOV C, M;` (Move data from memory location pointed by HL to C)
    *   `LDA 2050H;` (Load Accumulator with data from memory address 2050H. The address is implicitly handled by the CPU's internal registers.)
    *   `LXI H, 2000H;` (Load the HL pair with the 16-bit address 2000H. This sets up HL as a memory pointer.)

2.  **Arithmetic Operations:**
    *   `ADD B;` (Adds content of B to Accumulator, result in A. The flags are updated.)
    *   `SUB C;` (Subtracts content of C from Accumulator, result in A. Flags updated.)
    *   `INR H;` (Increment register H by 1. Flags updated.)
    *   `DCX D;` (Decrement the DE register pair by 1. Flags NOT updated by this instruction.)

3.  **Conditional Operations using Flags:**
    *   `JZ LABEL;` (Jump to LABEL if Zero Flag is set (result was zero).)
    *   `JNC LABEL;` (Jump to LABEL if Carry Flag is not set (no carry).)
    *   `JC LABEL;` (Jump to LABEL if Carry Flag is set.)

4.  **Stack Operations:**
    *   `PUSH B;` (Pushes the BC register pair onto the stack. SP is decremented twice.)
    *   `POP D;` (Pops two bytes from the stack into the DE register pair. SP is incremented twice.)
    *   `CALL SUB_ROUTINE;` (Pushes the PC content (address of next instruction) onto the stack and then jumps to SUB_ROUTINE.)
    *   `RET;` (Pops PC content from the stack and returns to the calling routine.)

**Reference:**

*   **Gaonkar, Ramesh. *Microprocessor, Architecture, Programming and Applications*.** This book is replete with examples demonstrating how to use each register in practical assembly language programs.
*   **Margolis, Michael. *Arduino Cookbook*.** While focused on Arduino, this book can be conceptually related to how microcontrollers manage internal registers for specific tasks, even if the registers themselves are different.

---

### 6. Practice Questions and Exercises

**Instructions:** Attempt the following questions to test your understanding of 8085 registers.

1.  Which register in the 8085 is primarily used for arithmetic and logical operations?
    a) B
    b) H
    c) A (Accumulator)
    d) PC

2.  The HL register pair is most commonly used for what purpose?
    a) Storing temporary data
    b) Holding a 16-bit memory address
    c) Flagging an error condition
    d) Accumulating results

3.  What is the function of the Program Counter (PC)?
    a) It stores the address of the current instruction.
    b) It stores the address of the next instruction to be fetched.
    c) It stores data for arithmetic operations.
    d) It holds status flags.

4.  Which flag is set if the result of an arithmetic operation is zero?
    a) Sign Flag (S)
    b) Carry Flag (CY)
    c) Parity Flag (P)
    d) Zero Flag (Z)

5.  If you want to store the return address when calling a subroutine, which register is primarily used by the processor?
    a) HL pair
    b) SP (Stack Pointer)
    c) PC (Program Counter)
    d) DE pair

6.  Explain the difference between general-purpose registers and special-purpose registers in the 8085. Provide an example of each.

7.  Write a short 8085 assembly code snippet that loads the value `55H` into register C and then adds the content of register C to the accumulator.

---

### 7. Answers to Practice Questions

1.  **c) A (Accumulator)**
2.  **b) Holding a 16-bit memory address**
3.  **b) It stores the address of the next instruction to be fetched.**
4.  **d) Zero Flag (Z)**
5.  **b) SP (Stack Pointer)** (The PC stores the return address, but it's the SP that manages its storage on the stack during a CALL.)
6.  **Explanation:**
    *   **General-Purpose Registers:** These registers are directly accessible by the programmer and can be used for temporary data storage, calculations, or as part of memory pointers. Examples include the Accumulator (A), B, C, D, E, H, and L.
    *   **Special-Purpose Registers:** These registers have specific, often internal, functions that are critical for the microprocessor's operation but are not directly manipulated by the programmer in the same way. Examples include the Program Counter (PC) for instruction sequencing, the Stack Pointer (SP) for stack management, and the Instruction Register (IR) for holding the current instruction.
7.  **Assembly Code Snippet:**
    ```assembly
    MVI C, 55H    ; Move Immediate data 55H into register C
    ADD C         ; Add the content of register C to the Accumulator (A)
                  ; The result is stored in the Accumulator (A)
    ```

---

### 8. Key Takeaways and Summary

*   **Registers are fast, internal memory locations** within the CPU for immediate data access.
*   The **8085 has both general-purpose (A, B, C, D, E, H, L) and special-purpose registers (PC, SP, IR, Flags).**
*   The **Accumulator (A)** is central to arithmetic and logic operations.
*   The **HL pair** is the primary 16-bit memory address pointer.
*   The **PC** controls program execution flow by holding the address of the next instruction.
*   The **SP** manages the stack, crucial for subroutines and interrupts.
*   The **Flags register** indicates the status of operations, enabling conditional branching.
*   A firm grasp of these registers is essential for **8085 Assembly Language Programming (CO1).**

---

This study material provides a comprehensive overview of the registers in the 8085 microprocessor, directly supporting the learning outcomes for Module 1 and contributing to Course Outcome 1 and 2. Further exploration of programming examples in Gaonkar's book will solidify understanding.
