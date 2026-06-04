---
title: "Arm assembly language instruction format and operands"
subject: "ARM ARCHITECTURE AND PROGRAMMING"
module: "Module 1: Embedded C: Fixed"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feae7"
status: "completed"
scrapedAt: "2026-05-23T17:53:20.314Z"
---
# ARM Architecture and Programming: Module 1 - Embedded C: Fixed

## Topic: ARM Assembly Language Instruction Format and Operands

This module introduces fundamental concepts of ARM assembly language, focusing on instruction formats and operands, which are crucial for understanding how programs are executed at the processor level. This knowledge directly supports Course Outcomes CO1, CO2, and CO3 by providing insight into the programmer's view of the processor and enabling informed decisions about programming levels.

### 1. Introduction to ARM Assembly Language

ARM assembly language is a low-level programming language that directly corresponds to the machine instructions that a processor can execute. Understanding assembly is essential for:

*   **Deepening understanding of processor architecture (CO2):** It reveals how high-level language constructs are translated into machine operations.
*   **Optimizing code for performance and size:** Direct control over hardware allows for efficient resource utilization.
*   **Debugging embedded systems:** Assembly can be used to inspect the state of the processor and memory during execution.
*   **Interfacing with hardware:** Many embedded tasks require direct manipulation of hardware registers, often done in assembly.

**Key Concept:** **Machine Code** is the binary representation of instructions that the processor can directly execute. Assembly language is a human-readable mnemonic representation of this machine code.

**Reference:** Lewis, "Fundamentals of Embedded Software with the ARM Cortex M3," Chapter 1 provides an overview of embedded systems and the role of assembly.

### 2. ARM Instruction Format

ARM instructions, particularly for the Cortex-M series, generally follow a fixed-length format (typically 32 bits). While the exact format can vary slightly depending on the instruction set (e.g., Thumb vs. ARM), the core components remain consistent.

**General Structure of a 32-bit ARM Instruction:**

| Bits [31:28] | Bits [27:20] | Bits [19:16] | Bits [15:12] | Bits [11:0] |
| :----------- | :----------- | :----------- | :----------- | :---------- |
| Condition    | Opcode       | Operand 2    | Rn           | Operand 1   |

*   **Condition (Bits [31:28]):** Specifies the condition under which the instruction will be executed. Most instructions can be conditionally executed, which is a powerful feature of ARM. If the condition is not met, the instruction is effectively skipped.
    *   **Common Condition Codes:**
        *   `AL` (Always): Execute regardless of flags.
        *   `EQ` (Equal): Execute if Z flag is set.
        *   `NE` (Not Equal): Execute if Z flag is clear.
        *   `CS` or `HS` (Carry Set / Higher or Same): Execute if C flag is set.
        *   `CC` or `LO` (Carry Clear / Lower): Execute if C flag is clear.
        *   `MI` (Minus / Negative): Execute if N flag is set.
        *   `PL` (Plus / Positive or Zero): Execute if N flag is clear.
        *   `VS` (Overflow Set): Execute if V flag is set.
        *   `VC` (Overflow Clear): Execute if V flag is clear.
        *   `HI` (Higher): Execute if C flag is set and Z flag is clear.
        *   `LS` (Lower or Same): Execute if C flag is clear or Z flag is set.
        *   `GE` (Greater than or Equal): Execute if N == V.
        *   `LT` (Less Than): Execute if N != V.
        *   `GT` (Greater Than): Execute if Z == 0 and N == V.
        *   `LE` (Less Than or Equal): Execute if Z == 1 or N != V.
*   **Opcode (Bits [27:20]):** Defines the operation to be performed (e.g., `ADD`, `SUB`, `MOV`, `LDR`, `STR`).
*   **Operand 2 (Bits [19:16]):** Specifies the second operand for the instruction. This can be a register, an immediate value, or a shifted register.
*   **Rn (Bits [15:12]):** Specifies the first operand register.
*   **Operand 1 (Bits [11:0]):** Specifies the third operand or other control bits, depending on the instruction type.

**Important Point:** For most Cortex-M processors, the Thumb instruction set (specifically Thumb-2) is used, which offers a mix of 16-bit and 32-bit instructions. However, understanding the 32-bit format provides a foundational understanding.

**Reference:** Yiu, "The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors," Chapter 4 delves into the instruction sets and their encoding.

### 3. Operands in ARM Assembly

Operands are the data that instructions operate on. ARM assembly supports various types of operands, allowing for flexible data manipulation.

#### 3.1. Registers

ARM processors have a set of general-purpose registers (GPRs) that are used to store data and addresses. The Cortex-M3/M4 processors typically have 16 GPRs, denoted as R0 to R15.

*   **R0-R12:** General-purpose registers.
*   **R13 (SP):** Stack Pointer.
*   **R14 (LR):** Link Register (stores the return address for function calls).
*   **R15 (PC):** Program Counter (points to the current instruction being executed).

**Key Concept:** Registers provide the fastest access to data for the CPU.

**Example:**
```assembly
MOV R0, R1   ; Move the content of register R1 into register R0
ADD R2, R0, R3 ; Add the content of R0 and R3, store the result in R2
```

**CO2 Alignment:** Understanding registers is fundamental to understanding the programmer's view of the processor.

#### 3.2. Immediate Values

Immediate values are constant numbers that are directly embedded within the instruction.

*   **Format:** Typically represented by a `#` symbol followed by the decimal, hexadecimal, or binary value.
    *   `#10` (decimal)
    *   `#0xA` (hexadecimal)
    *   `#0b1010` (binary)

**Example:**
```assembly
MOV R4, #5      ; Load the immediate value 5 into register R4
ADD R5, R5, #2  ; Add 2 to the value in R5 and store the result back in R5
```

**Limitations:** The size of immediate values that can be encoded directly in an instruction is limited. Larger immediate values might require multiple instructions or loading from memory. ARM's immediate encoding allows for a wider range of immediate values than a simple 12-bit field by using rotation.

**Reference:** Lewis, Chapter 5, discusses data transfer and arithmetic instructions, including immediate operands.

#### 3.3. Memory Addresses

Data can be stored in memory (RAM or Flash) and accessed by the processor using memory addresses. ARM assembly uses specific instructions for loading data from memory into registers (`LDR`) and storing data from registers into memory (`STR`).

*   **Addressing Modes:** ARM provides various addressing modes to access memory, making data retrieval flexible. Some common ones include:
    *   **Register Indirect:** `LDR R0, [R1]` - Load data from the memory address pointed to by R1 into R0.
    *   **Register Indirect with Offset:** `LDR R0, [R1, #4]` - Load data from the memory address R1 + 4 into R0.
    *   **Register Indirect with Scaled Offset:** `LDR R0, [R1, R2, LSL #2]` - Load data from the memory address R1 + (R2 shifted left by 2 bits) into R0.
    *   **Pre-indexed:** `LDR R0, [R1, #4]!` - Load data from R1 + 4 into R0, and then update R1 to R1 + 4.
    *   **Post-indexed:** `LDR R0, [R1], #4` - Load data from the address in R1 into R0, and then update R1 to R1 + 4.

**Key Concept:** Memory access is generally slower than register access. Efficient use of registers and appropriate addressing modes is crucial for performance.

**Example:**
```assembly
LDR R0, [R1]       ; Load a word from memory address stored in R1 into R0
STR R2, [R3, #8]   ; Store the word from R2 to memory address R3 + 8
```

**CO3 Alignment:** Understanding memory access in assembly is vital when deciding whether to use C's pointer arithmetic or direct assembly for memory-intensive operations.

#### 3.4. Shifted Register Operands

One of the powerful features of ARM is the ability to perform a shift operation on a register as part of an operand. This can be combined with other operations, saving extra instructions.

*   **Types of Shifts:**
    *   **Logical Shift Left (LSL):** Fills vacated bits with zeros. Equivalent to multiplication by powers of 2.
    *   **Logical Shift Right (LSR):** Fills vacated bits with zeros.
    *   **Arithmetic Shift Right (ASR):** Fills vacated bits with the sign bit, preserving the sign of the number.
    *   **Rotate Right (ROR):** Rotates bits around, with the shifted-out bit re-entering at the other end.
    *   **Rotate Right Extended (RRX):** Rotates bits right, with the Carry flag shifted into the most significant bit.

**Syntax:** `Rn, <shift_type> #<amount>` or `Rn, <shift_type> Rm`

**Example:**
```assembly
ADD R0, R1, R2, LSL #2  ; R0 = R1 + (R2 shifted left by 2 bits)
MOV R3, R4, LSR #1      ; R3 = R4 logically shifted right by 1 bit
```

**Important Point:** Shift operations can be performed on the second operand of many data processing instructions, such as `ADD`, `SUB`, `AND`, `ORR`, `EOR`.

**Reference:** Yiu, Chapter 4, details the various addressing modes and shift operations.

### 4. Instruction Types and Operands

Different types of ARM instructions utilize operands in distinct ways.

#### 4.1. Data Processing Instructions

These instructions perform arithmetic and logical operations on register operands.

*   **Operands:** Typically involve two or three register operands, and the second operand can be a register or an immediate value, potentially shifted.
*   **Examples:**
    *   `ADD Rd, Rn, Operand2`
    *   `SUB Rd, Rn, Operand2`
    *   `AND Rd, Rn, Operand2`
    *   `ORR Rd, Rn, Operand2`
    *   `MOV Rd, Operand2` (Copies Operand2 to Rd)

**Example:**
```assembly
ADD R5, R6, R7, LSL #1  ; R5 = R6 + (R7 << 1)
```

#### 4.2. Data Transfer Instructions (Load/Store)

These instructions move data between registers and memory.

*   **Operands:**
    *   **Load (`LDR`):** `LDR Rd, <address>` - Loads data from `<address>` into `Rd`.
    *   **Store (`STR`):** `STR Rd, <address>` - Stores data from `Rd` to `<address>`.
*   **Address Operands:** Can be complex, involving base registers, offsets, and pre/post-indexing.

**Example:**
```assembly
LDR R4, [R7, #0x10]     ; Load word from memory at R7+0x10 into R4
STR R0, [R1]!           ; Store word from R0 to memory at R1, then update R1 = R1 + size of word
```

#### 4.3. Branch Instructions

These instructions alter the flow of program execution by changing the Program Counter (PC).

*   **Operands:** Typically a label representing a memory address.
*   **Examples:**
    *   `B label` (Unconditional branch)
    *   `BEQ label` (Branch if Equal)
    *   `BL label` (Branch with Link - used for function calls)

**Example:**
```assembly
LOOP_START:
    ; ... instructions ...
    CMP R0, #10
    BNE LOOP_START  ; Branch back to LOOP_START if R0 is not equal to 10
```

### 5. Thumb-2 Instruction Set and Operands

Cortex-M processors primarily use the Thumb-2 instruction set, which offers a mix of 16-bit and 32-bit instructions. This provides a good balance between code density and performance.

*   **16-bit Thumb Instructions:**
    *   More compact, leading to smaller code size.
    *   Often have fewer operand types and addressing modes.
    *   Example: `MOV R0, R1` (32-bit ARM) vs. `MOV R0, R1` (16-bit Thumb) - similar mnemonic, but different encoding.
*   **32-bit Thumb-2 Instructions:**
    *   Provide more flexibility and functionality, similar to 32-bit ARM instructions.
    *   Allow for more complex addressing modes and operand types.

**Key Concept:** The assembler automatically selects the most appropriate instruction encoding (16-bit or 32-bit Thumb-2) based on the instruction and its operands.

**Reference:** Zhu, "Embedded systems with ARM Cortex M Microcontrollers in Assembly and C," provides practical examples of Thumb assembly.

### 6. How C Maps to Assembly

Understanding assembly instruction formats and operands helps in understanding how C code is translated into machine code.

*   **Variables:** Typically mapped to registers for frequent access or to memory locations (stack or global).
*   **Arithmetic Operations:** C operators (`+`, `-`, `*`, `/`, `%`) are translated into corresponding ARM data processing instructions.
*   **Assignments:** `variable = value;` often maps to `MOV` or `LDR`/`STR` instructions.
*   **Loops and Conditionals:** `if`, `while`, `for` statements are implemented using branch instructions (`B`, `BEQ`, `BNE`, etc.) and conditional execution.
*   **Function Calls:** Mapped to `BL` (Branch with Link) and stack operations for passing parameters and returning values.

**CO1 & CO3 Alignment:** This knowledge directly supports CO1 (using C features in embedded systems) and CO3 (choosing between assembly and C) by revealing the underlying mechanism of C execution and highlighting areas where assembly might offer advantages.

**Example:**
Consider the C code:
```c
int x = 5;
int y;
y = x + 10;
```

This could be translated into assembly like:
```assembly
    MOV R0, #5      ; Load immediate 5 into R0 (representing x)
    ADD R1, R0, #10 ; R1 = R0 + 10 (representing y = x + 10)
```

### 7. Important Points to Remember

*   **Register Usage:** Always be mindful of which registers are being used and what their purpose is, especially `SP`, `LR`, and `PC`.
*   **Conditional Execution:** Leverage conditional execution to reduce the number of branch instructions, improving code efficiency.
*   **Addressing Modes:** Choose the appropriate addressing mode for memory access to optimize performance.
*   **Shift Operations:** Utilize shifted register operands to perform calculations more efficiently.
*   **Thumb-2:** Understand that Cortex-M processors primarily use Thumb-2, which has both 16-bit and 32-bit instructions.

### 8. Practice Questions

1.  **What is the purpose of the `L` suffix in ARM assembly instructions like `LDR` and `STR`?**
    *   Answer: `LDR` stands for "Load Register" and `STR` stands for "Store Register." The `R` indicates that the operation involves a register. The `L` in `LDR` signifies "Load" from memory into a register. The `S` in `STR` signifies "Store" from a register to memory.

2.  **Given the instruction `ADD R0, R1, R2, LSL #3`, describe what operation is being performed.**
    *   Answer: The instruction adds the value in register `R1` to the value in register `R2` after `R2` has been logically shifted left by 3 bits. The result of this addition is stored in register `R0`.

3.  **Explain the difference between `B label` and `BL label` instructions.**
    *   Answer: `B label` is an unconditional branch instruction that simply jumps to the specified `label`. `BL label` (Branch with Link) is used for function calls. It jumps to the `label` and also stores the address of the instruction immediately following the `BL` in the Link Register (`LR`), so that the function can return to the correct place after execution.

4.  **Which register is typically used as the Stack Pointer (SP) in ARM processors?**
    *   Answer: Register `R13` is conventionally used as the Stack Pointer (SP).

5.  **Consider the following C code snippet:**
    ```c
    int a = 10;
    int b = 20;
    int sum;
    sum = a + b;
    ```
    **Suggest a possible ARM assembly code translation for the line `sum = a + b;` assuming `a` is in `R1` and `b` is in `R2`.**
    *   Answer: `ADD R0, R1, R2` (assuming `sum` is to be stored in `R0`).

### 9. Exercises

1.  **Write ARM assembly code to load the immediate value `0x55` into register `R4` and then move the value from `R4` into register `R5`.**
2.  **Write ARM assembly code to add the contents of register `R6` and `R7`, and store the result in `R8`. Then, increment the value in `R8` by 1 and store the final result back in `R8`.**
3.  **Assume a variable `data_value` is stored at memory address `0x20000000`. Write ARM assembly code to load this value into register `R0`.**
4.  **Write ARM assembly code to store the value of register `R3` into memory location pointed to by register `R2` plus an offset of 8 bytes.**

---

### Answers to Exercises

1.  ```assembly
    MOV R4, #0x55   ; Load immediate value 0x55 into R4
    MOV R5, R4      ; Move the content of R4 into R5
    ```

2.  ```assembly
    ADD R8, R6, R7  ; R8 = R6 + R7
    ADD R8, R8, #1  ; Increment R8 by 1
    ```

3.  ```assembly
    LDR R0, =0x20000000 ; Load the address 0x20000000 into R0 (using a pseudo-instruction for address loading)
    LDR R0, [R0]        ; Load the data from the memory address in R0 into R0
    ```
    *Note: The `LDR Rd, =label` syntax is a pseudo-instruction that the assembler translates into appropriate `MOV` or `LDR` instructions to load an address or immediate value.*

4.  ```assembly
    STR R3, [R2, #8]    ; Store the content of R3 to the memory address R2 + 8

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
