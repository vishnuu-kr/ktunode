---
title: "Programming 8051 Using Assembly Language: Introduction to 8051 
assembly language programming. Data types & directives, Concept of 
subroutine. Software delay programming."
subject: "MICROCONTROLLERS"
module: "Module 3: Programming 8051 Using Assembly Language: Introduction to 8051 
assembly language programming. Data types & directives, Concept of 
subroutine. Software delay programming."
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe59e"
status: "completed"
scrapedAt: "2026-05-23T17:51:06.150Z"
---
# Module 3: Programming 8051 Using Assembly Language: Introduction to 8051 Assembly Language Programming

This module introduces you to the fundamentals of programming the 8051 microcontroller using its assembly language. You will learn about the basic building blocks of assembly programs, how to handle data, and how to structure your code efficiently.

## 1. Introduction to 8051 Assembly Language Programming

8051 assembly language is a low-level programming language that directly interacts with the microcontroller's hardware. Each instruction in assembly language corresponds to a specific operation that the processor can perform.

### 1.1. Why Assembly Language for 8051?

*   **Direct Hardware Control:** Assembly language allows for precise control over the 8051's peripherals and registers, crucial for embedded systems where efficiency and timing are critical.
*   **Understanding Microcontroller Operation:** Learning assembly language provides a deep understanding of how microcontrollers work at the fundamental level.
*   **Optimization:** For time-critical operations or very small code size, assembly can offer better performance than higher-level languages.
*   **Bootstrapping:** Often, the initial bootloader or low-level driver code is written in assembly.

**Key Concept:** An **assembler** is a program that translates assembly language mnemonics into machine code (binary instructions) that the microcontroller can execute.

### 1.2. Structure of an 8051 Assembly Program

An 8051 assembly program typically consists of:

*   **Directives:** Instructions for the assembler, not executed by the microcontroller.
*   **Instructions:** The actual commands for the microcontroller.
*   **Labels:** Symbolic names assigned to memory addresses or instructions for easier referencing.
*   **Comments:** Explanations within the code, ignored by the assembler.

**General Structure:**

```assembly
<label> <instruction> <operand1> <operand2> ; <comment>
```

**Example:**

```assembly
; This program adds two numbers and stores the result

START:  MOV A, #5     ; Move the value 5 into the Accumulator (A)
        MOV B, #10    ; Move the value 10 into the B register
        ADD A, B      ; Add the content of B to A. Result is in A.
        SJMP $        ; Infinite loop to stop execution
```

**Important Point:** The `$` symbol in `SJMP $` represents the current program counter's address. This creates an infinite loop, effectively halting the program at that point.

### 1.3. Registers in the 8051

Understanding the 8051's registers is crucial for assembly programming.

*   **Accumulator (A):** The primary register for arithmetic and logical operations.
*   **B Register:** Used in multiplication and division operations, and can also be used as a general-purpose register.
*   **Program Counter (PC):** Holds the address of the next instruction to be fetched. It's a 16-bit register, allowing addressing up to 64KB of program memory.
*   **Data Pointer (DPTR):** A 16-bit register (DPH and DPL) used for accessing external data memory.
*   **Program Status Word (PSW):** Contains flag bits that indicate the status of arithmetic operations (Carry, Auxiliary Carry, Overflow, Parity) and also includes register bank selection bits.
*   **Stack Pointer (SP):** A 8-bit register that points to the top of the stack in internal RAM.
*   **General Purpose Registers (R0-R7):** Organized into four banks (Bank 0, Bank 1, Bank 2, Bank 3). Each bank has 8 registers. The currently active bank is determined by bits RS0 and RS1 in the PSW.

**Reference:** Mazidi et al. (2007) provides detailed explanations of each register and their functions.

## 2. Data Types & Directives

### 2.1. Data Types

The 8051 primarily deals with 8-bit data. However, it can also handle:

*   **8-bit Data:** The most common. Can be represented as immediate values (e.g., `#55h`), register contents, or memory locations.
*   **16-bit Data:** Used for addresses (like DPTR) or specific arithmetic operations.

### 2.2. Assembler Directives

Directives are commands to the assembler, guiding it on how to assemble the code. They do not generate executable machine code themselves.

*   **`ORG` (Origin):** Specifies the starting address for the program code.
    *   **Example:** `ORG 0000h`  ; Start program at memory address 0000h.

*   **`EQU` (Equate):** Assigns a symbolic name to a constant value or an address. This improves code readability and maintainability.
    *   **Example:**
        ```assembly
        PORT1   EQU P1      ; Assign the name PORT1 to the address of Port 1
        DELAY_VAL EQU 100   ; Assign the value 100 to the name DELAY_VAL
        ```

*   **`DB` (Define Byte):** Reserves memory space and initializes it with byte-sized data.
    *   **Example:** `DATA DB 12h, 34h, 56h` ; Reserves 3 bytes and stores 12h, 34h, 56h.

*   **`DW` (Define Word):** Reserves memory space and initializes it with word-sized (16-bit) data.
    *   **Example:** `TABLE DW 0100h, 0200h` ; Reserves 4 bytes (2 words) for the table.

*   **`RSEG` (Code Segment):** Indicates the start of a code segment (program memory).
    *   **Example:** `RSEG AT 0B000h` ; Places the following code at address B000h.

*   **`CSEG` (Code Segment):** Similar to RSEG, often used interchangeably depending on the assembler.

*   **`DSEG` (Data Segment):** Indicates the start of a data segment (internal or external RAM).
    *   **Example:** `DSEG AT 30h` ; Start defining data at internal RAM address 30h.

*   **`ORG` (for Data Segment):** Can also be used within DSEG to specify data addresses.
    *   **Example:**
        ```assembly
        DSEG
        ORG 40h
        BUFFER: DS 10 ; Reserve 10 bytes for a buffer
        ```
        *   **`DS` (Define Storage):** Reserves uninitialized memory space.

*   **`END`:** Marks the end of the assembly program.

**Reference:** Ayala and Gadre (2010) thoroughly explains the purpose and usage of various assembler directives.

## 3. Concept of Subroutine

A subroutine (or procedure) is a block of code that performs a specific task and can be called from different parts of the main program. This promotes code reusability and modularity.

### 3.1. Subroutine Call and Return Mechanism

The 8051 uses the stack to manage subroutine calls and returns.

1.  **`CALL` Instruction:** When a `CALL` instruction is executed:
    *   The current value of the Program Counter (PC) is pushed onto the stack.
    *   The PC is loaded with the address of the subroutine.
2.  **Subroutine Execution:** The instructions within the subroutine are executed.
3.  **`RET` (Return) Instruction:** When a `RET` instruction is encountered at the end of the subroutine:
    *   The return address is popped from the stack back into the PC.
    *   Program execution resumes from the instruction immediately following the `CALL`.

**Important Point:** The stack pointer (SP) is automatically updated to point to the next available location on the stack when data is pushed (e.g., by `CALL` or `PUSH`) and decremented when data is popped (e.g., by `RET` or `POP`).

### 3.2. Types of `CALL` Instructions

*   **`ACALL` (Absolute CALL):** Calls a subroutine within the same 2KB block of program memory. It uses a shorter, 11-bit address offset.
*   **`LCALL` (Long CALL):** Calls a subroutine anywhere within the 64KB program memory space. It uses a 16-bit address. `LCALL` is generally preferred for its flexibility.

### 3.3. Subroutine Design Considerations

*   **Parameter Passing:** How to pass data to and from the subroutine. This can be done through registers or memory locations.
*   **Register Usage:** Subroutines should ideally preserve the state of registers that were in use before the call, or document which registers they modify. `PUSH` and `POP` instructions are used for this.
*   **Reentrancy:** A subroutine is reentrant if it can be interrupted and called again before its previous invocation completes. This is typically achieved by using the stack to save all critical register values.

### 3.4. Example: Subroutine for Addition

```assembly
; Main program
ORG 0000H
    MOV A, #5
    MOV R0, A       ; Pass first number in R0
    MOV A, #10
    MOV R1, A       ; Pass second number in R1

    CALL ADD_SUB     ; Call the addition subroutine

    ; Result is now in R7 (as defined in ADD_SUB)
    MOV P1, R7      ; Display the result on Port 1

    SJMP $          ; Infinite loop

; Subroutine to add contents of R0 and R1, result in R7
ADD_SUB:
    PUSH 0          ; Save R0 on stack
    PUSH 1          ; Save R1 on stack

    MOV A, R0       ; Move R0 to Accumulator
    ADD A, R1       ; Add R1 to Accumulator
    MOV R7, A       ; Store result in R7

    POP 1           ; Restore R1 from stack
    POP 0           ; Restore R0 from stack
    RET             ; Return to caller
```

**Explanation:**
*   The `PUSH` instructions save the original values of `R0` and `R1` on the stack before they are used.
*   After the addition, the `POP` instructions restore the original values of `R0` and `R1`.
*   `RET` returns control to the main program.

**Reference:** Mazidi et al. (2007) dedicates a chapter to subroutines and their efficient use.

## 4. Software Delay Programming

Software delays are used to introduce time delays in a program. They are typically implemented using loops that execute a fixed number of times.

### 4.1. How Software Delays Work

A software delay loop involves:
1.  Initializing a counter register with a specific value.
2.  Decrementing the counter in a loop.
3.  Exiting the loop when the counter reaches zero.

The duration of the delay depends on:
*   The initial value of the counter.
*   The number of instructions within the loop.
*   The clock frequency of the microcontroller.

### 4.2. Single-Loop Delay

A simple delay can be achieved with a single loop.

```assembly
; Delay for approximately N clock cycles (depends on instructions)
; Let's assume 12MHz crystal frequency
; T = 1/12MHz = 0.0833 microseconds (us) per machine cycle
; Each instruction takes 1 machine cycle (mostly)

DELAY_LOOP:
    MOV R7, #250    ; Load R7 with 250 (approx. 1 machine cycle)
LOOP1:
    DJNZ R7, LOOP1  ; Decrement R7 and jump if not zero (approx. 2 machine cycles if jump taken)
                    ; DJNZ instruction takes 1 cycle to decrement and 1 cycle to check/jump
                    ; Total cycles for DJNZ loop = 250 * 2 = 500 cycles
                    ; Add 1 cycle for initial MOV = 501 cycles
                    ; Delay = 501 * (1/12MHz) = 501 * 0.0833 us = ~41.7 us
```

*   `DJNZ` (Decrement and Jump if Not Zero): A common instruction for loops. It decrements the specified register and jumps to the label if the register is not zero.

### 4.3. Multi-Loop Delay

For longer delays, nested loops are used. Each nested loop multiplies the delay.

```assembly
; Longer delay using nested loops
; Assume 12MHz crystal frequency

DELAY_MAIN:
    MOV R6, #4       ; Outer loop counter (e.g., 4 iterations)
LOOP_OUTER:
    MOV R7, #250    ; Inner loop counter (e.g., 250 iterations)
LOOP_INNER:
    DJNZ R7, LOOP_INNER ; Inner loop: 250 * 2 = 500 cycles
    DJNZ R6, LOOP_OUTER ; Outer loop: 4 * (500 + 1) = 2004 cycles (approx)
                        ; + 1 for initial MOV R6, #4

Total cycles for delay routines (approx):
    MOV R6, #4: 1 cycle
    MOV R7, #250: 1 cycle
    DJNZ R7, LOOP_INNER: 2 cycles (if jump taken), 1 cycle (if not taken)
    DJNZ R6, LOOP_OUTER: 2 cycles (if jump taken), 1 cycle (if not taken)

Estimated cycles = 1 (MOV R6) + 1 (MOV R7) + 4 * (250 * 2 (DJNZ R7) + 1 (DJNZ R6))
                 = 2 + 4 * (500 + 1)
                 = 2 + 4 * 501
                 = 2 + 2004 = 2006 cycles

Total delay = 2006 * (1/12MHz) = 2006 * 0.0833 us = ~167.1 us
```

**Calculation Formula for Delay (with a specific loop structure):**

Delay time = (Number of iterations in outer loop * Number of iterations in inner loop * Cycles per inner loop instruction + Cycles for outer loop DJNZ) * Machine Cycle Time

**Important Point:** The exact number of cycles for each instruction is critical for precise delay calculation. Refer to the 8051 instruction set for cycle counts.

### 4.4. Using `SJMP` for Delay

You can also use `SJMP` to create a delay loop, though `DJNZ` is generally more efficient.

```assembly
DELAY_LOOP_SJMP:
    MOV R5, #200
LOOP_SJMP:
    ; Some NOPs or other instructions if needed
    SJMP LOOP_SJMP
    ; ... INC R5 ...
    ; DJNZ R5, LOOP_SJMP ; This structure is flawed.
    ; A proper SJMP loop would involve an increment and a conditional jump or a decrement.

; Better SJMP delay loop example
DELAY_LOOP_SJMP_CORRECT:
    MOV R5, #200
LOOP_SJMP_CORRECT:
    INC R5          ; Increment R5 (1 cycle)
    CJNE R5, #255, LOOP_SJMP_CORRECT ; Compare and jump if not equal (2 cycles)
                                   ; Loop runs 255 times (assuming R5 starts at 0)
                                   ; Total cycles ~ 255 * (1+2) = 765 cycles
```

**Reference:** Ayala and Gadre (2010) provide examples and detailed analysis of software delay routines.

### 4.5. Using Timer for Delay (Brief Mention)

While this module focuses on software delays, it's important to note that hardware timers are a more accurate and efficient way to generate precise time delays without consuming CPU cycles for the delay loop itself. This will likely be covered in later modules.

## 5. Practice Questions & Answers

**Question 1:** What is the primary purpose of the `EQU` directive in 8051 assembly language?
**Answer:** The `EQU` directive assigns a symbolic name to a constant value or an address. This makes the code more readable, maintainable, and easier to modify. For example, `PORT1 EQU P1` makes it easier to refer to the port than using the raw address `P1`.

**Question 2:** Explain the difference between `ACALL` and `LCALL`.
**Answer:**
*   `ACALL` (Absolute CALL) can call a subroutine only within the same 2KB block of program memory. It uses a 3-bit offset relative to the current PC.
*   `LCALL` (Long CALL) can call a subroutine from anywhere in the 64KB program memory space. It uses a full 16-bit address. `LCALL` is more versatile.

**Question 3:** Write an 8051 assembly code snippet to create a software delay of approximately 100 microseconds (us) using a 16MHz crystal.

**Answer:**
Assume 16MHz crystal frequency. Machine cycle time = 1 / (16MHz / 12) = 1 / 1.33MHz = 0.75 microseconds (us).

We need a loop that takes roughly 100 us / 0.75 us = ~133 machine cycles.

Let's use a single `DJNZ` loop:
`DJNZ R7, LOOP1` takes 2 cycles if the jump is taken.
To get 133 cycles, we need ~133 / 2 = ~66.5 iterations. Let's use 67 iterations.

```assembly
; Approximate 100us delay with 16MHz crystal
ORG 0000H
    ; ... your code ...

    MOV R7, #67     ; Load counter with 67
DELAY_LOOP:
    DJNZ R7, DELAY_LOOP ; Decrement R7 and jump if not zero
                        ; Takes 2 cycles per iteration (67 * 2 = 134 cycles)

    ; ... rest of your code ...
    SJMP $

END
```
**Cycle Calculation:**
*   `MOV R7, #67`: 1 cycle
*   `DJNZ R7, DELAY_LOOP`: 67 iterations * 2 cycles/iteration = 134 cycles
*   Total cycles = 1 + 134 = 135 cycles
*   Total Delay = 135 cycles * 0.75 us/cycle = 101.25 us (This is a good approximation).

**Question 4:** What happens to the Stack Pointer (SP) when `PUSH A` is executed?
**Answer:** When `PUSH A` is executed, the content of the Accumulator (A) is stored at the memory location pointed to by SP. Then, the SP is incremented by 1.

**Question 5:** Write an 8051 assembly subroutine that takes a value in `R0` and returns its square in `A`.

**Answer:**
```assembly
; Subroutine to square the value in R0, result in A
SQUARE_SUB:
    PUSH 0          ; Save R0 as it will be modified
    MOV A, R0       ; Move the input value to Accumulator
    MOV B, R0       ; Move the input value to B register
    MUL AB          ; Multiply A and B. Result (8-bit low byte) is in A,
                    ; 8-bit high byte is in B. For values up to 15*15=225, A will hold the square.
                    ; For larger values, the result might overflow into B.
                    ; We assume input R0 is small enough that A can hold the square.

    POP 0           ; Restore R0
    RET             ; Return to caller
```

## 6. Important Points to Remember

*   **Clock Frequency:** The speed of the 8051 is determined by its crystal oscillator. Most instructions take 12 clock cycles for one machine cycle.
*   **Instruction Cycle Times:** Different instructions take a different number of machine cycles to execute. Refer to the 8051 instruction set for details.
*   **Stack Operation:** Understand how `PUSH`, `POP`, `CALL`, and `RET` affect the stack pointer and the flow of execution.
*   **Register Banks:** Be aware of the register banks and how to switch between them (via PSW).
*   **Addressing Modes:** Familiarize yourself with the various addressing modes of the 8051 (Immediate, Register, Direct, Indirect, Indexed).
*   **Assembler Specifics:** Some directives or syntax might vary slightly between different 8051 assemblers (e.g., Keil, SDCC).

This module provides the foundational knowledge for programming the 8051 in assembly. As you progress, you will build upon these concepts to develop more complex applications.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
