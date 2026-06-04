---
title: "Single-Cycle Processor - Single Cycle Datapath, Single Cycle Control"
subject: "COMPUTER ORGANIZATION AND ARCHITECTURE"
module: "Module 2: Microarchitecture "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8b042"
status: "completed"
scrapedAt: "2026-05-20T16:11:14.206Z"
---
# Computer Organization and Architecture: Module 2 - Microarchitecture: Single-Cycle Processor

## Introduction

This module delves into the microarchitecture of a single-cycle processor. We will explore the datapath and control logic required to execute instructions in a single clock cycle. This is a fundamental building block for understanding more complex processor designs.

## Learning Outcomes

By the end of this module, you will be able to:

*   Describe the structure and function of a single-cycle datapath.
*   Understand the role of different components in the datapath (e.g., ALU, register file, memory).
*   Explain how instructions are executed in a single cycle.
*   Design a single-cycle control unit.
*   Analyze the limitations of a single-cycle design.

## 1. Single-Cycle Datapath

### 1.1 Key Concepts and Definitions

*   **Datapath:** The collection of functional units (e.g., ALU, registers, memory) and the interconnections between them that are used to perform operations on data.  The datapath is where the *data* flows and is processed.
*   **Control Unit:**  The component that generates the control signals to orchestrate the operation of the datapath.  The control unit tells the *datapath* what to do.
*   **Single-Cycle Implementation:** A processor design where each instruction is executed in a single clock cycle.  This implies that the clock cycle must be long enough to accommodate the slowest instruction.
*   **Instruction Fetch (IF):** Retrieving the instruction from memory.
*   **Instruction Decode (ID):** Interpreting the instruction and reading operands from registers.
*   **Execute (EX):** Performing the operation specified by the instruction (e.g., addition, subtraction).
*   **Memory Access (MEM):** Reading from or writing to memory, if required by the instruction.
*   **Write Back (WB):** Writing the result back to a register.

### 1.2 Datapath Components and Their Functions

A typical single-cycle datapath consists of the following components:

*   **Instruction Memory:** Stores the instructions to be executed.
*   **Program Counter (PC):** Holds the address of the next instruction to be fetched.
*   **Adder:** Increments the PC to point to the next instruction (usually PC + 4).  Also used within the ALU.
*   **Register File:** Stores registers.  It has two read ports (for reading two operands) and one write port (for writing the result).
*   **ALU (Arithmetic Logic Unit):** Performs arithmetic and logical operations (e.g., addition, subtraction, AND, OR).
*   **Data Memory:** Stores data that can be read or written by the processor.
*   **Sign Extension Unit:** Extends a shorter immediate value to the full word size.
*   **Multiplexers (Muxes):** Select one of several inputs based on a control signal.  Used for choosing between different data sources (e.g., selecting the ALU input).
*   **Shifters:** Perform bitwise shift operations (e.g., left shift, right shift).

### 1.3 Datapath Diagram (Simplified MIPS)

Here's a simplified datapath diagram based on the MIPS architecture.  Note this is a high-level representation:

```
                                   +---------+
                                   | PC      |
                                   +---------+
                                       |
                                       | PC + 4
                                       V
                                   +---------+
                                   | Adder   |--------+
                                   +---------+        |
                                       |              | PC Source Selection (Branch, Jump, Next)
                                       |              V
                                   +---------+      +------+
                                   | Instr.  |----->| Mux  |-----> Next PC
                                   | Memory  |      +------+
                                   +---------+
                                       | Instruction
                                       V
                                   +---------+
                                   | Control |  (Generates Control Signals)
                                   +---------+
                                       |  (Control Signals to different units)
                                       V
                                   +---------+    +---------+
                                   | Reg.    |--->| Reg.    |-----> Read Data 1
                                   | File    |    +---------+
                                   +---------+
                                       |
                                       |---> Read Address 1
                                       |
                                       |---> Read Address 2
                                       |
                                   +---------+    +---------+-----> Read Data 2
                                   | Reg.    |--->| Reg.    |
                                   | File    |    +---------+
                                   +---------+
                                       |
                                       |---> Write Address
                                       |
                                   +------+  |--> Write Data
                                   | ALU  |--+
                                   +------+  | ALU Control
                                       |    |
                                       V    |
                                   +------+  |
                                   | Mux  |--+--> ALU Input 2 (Register or Sign Extended Immediate)
                                   +------+
                                       |
                                       V
                                   +---------+
                                   | Data    |
                                   | Memory  |
                                   +---------+
                                       |
                                       V
                                   +------+
                                   | Mux  |-----> Write Data to Register File (ALU result or memory data)
                                   +------+
```

### 1.4 Instruction Execution Example (R-type: add $t0, $s1, $s2)

Let's trace the execution of an R-type instruction, `add $t0, $s1, $s2`, in the single-cycle datapath:

1.  **IF:** The PC contains the address of the `add` instruction. The instruction memory fetches the instruction.  The PC is incremented to point to the next instruction (PC + 4).
2.  **ID:** The instruction is decoded. The register file reads the values from registers `$s1` and `$s2` (specified in the instruction's rs and rt fields).
3.  **EX:** The ALU performs the addition operation using the values read from `$s1` and `$s2`. The `ALUControl` signal is set to perform addition.
4.  **MEM:** No memory access is required for R-type instructions, so this stage is essentially a no-op.
5.  **WB:** The result from the ALU is written back to register `$t0` (specified in the instruction's rd field).  The `RegWrite` control signal is asserted.

### 1.5 Instruction Execution Example (Load Word: lw $t0, 16($s1))

Let's trace the execution of a Load Word instruction, `lw $t0, 16($s1)`, in the single-cycle datapath:

1.  **IF:** The PC contains the address of the `lw` instruction. The instruction memory fetches the instruction. The PC is incremented to point to the next instruction (PC + 4).
2.  **ID:** The instruction is decoded. The register file reads the value from register `$s1` (specified in the instruction's rs field).
3.  **EX:** The ALU calculates the memory address by adding the value from `$s1` and the sign-extended immediate value (16). The `ALUControl` signal is set to perform addition.
4.  **MEM:** The data memory is accessed using the address calculated by the ALU. The memory reads the data at that address.
5.  **WB:** The data read from memory is written back to register `$t0` (specified in the instruction's rt field). The `RegWrite` control signal is asserted, and `MemtoReg` control signal selects memory data as the source for writing to the register file.

## 2. Single-Cycle Control

### 2.1 Key Concepts and Definitions

*   **Control Signals:** Signals that control the operation of the datapath components (e.g., `RegWrite`, `ALUSrc`, `MemRead`, `MemWrite`, `MemtoReg`, `Branch`, `Jump`, `ALUControl`).
*   **Control Unit Implementation:**  The control unit decodes the instruction's opcode and function code (for R-type instructions) and generates the appropriate control signals.  It can be implemented using a truth table or a microprogrammed control unit.

### 2.2 Control Signal Generation

The control signals are generated based on the opcode and function code fields of the instruction.

*   **Opcode:** Specifies the instruction type (e.g., R-type, Load, Store, Branch).
*   **Function Code:** Used for R-type instructions to specify the specific operation (e.g., add, sub, and, or).

The control unit can be implemented as a lookup table (truth table) that maps the opcode and function code to the appropriate control signal values.

### 2.3 Control Signal Examples

Here are some important control signals and their functions:

*   `RegWrite`:  Determines whether the register file should write data to a register. (1 = write, 0 = no write)
*   `RegDst`: Selects the destination register for the write operation. For R-type instructions, the destination register is specified by the `rd` field; for I-type instructions (like `lw` and `sw`), it's the `rt` field. (0 = rt, 1 = rd)
*   `ALUSrc`: Selects the second operand for the ALU. (0 = register read data 2, 1 = sign-extended immediate)
*   `MemRead`: Enables the data memory to read data. (1 = read, 0 = no read)
*   `MemWrite`: Enables the data memory to write data. (1 = write, 0 = no write)
*   `MemtoReg`: Selects the data written to the register file. (0 = ALU output, 1 = data from memory)
*   `Branch`: Enables the branch logic. (1 = branch, 0 = no branch)
*   `Jump`: Enables the jump logic. (1 = jump, 0 = no jump)
*   `ALUControl`:  Specifies the operation to be performed by the ALU.  This is often a multi-bit signal that encodes different ALU operations (e.g., 00 = AND, 01 = OR, 10 = ADD, 11 = SUB).  This control signal is derived from the instruction's *funct* field for R-type instructions.

### 2.4 Control Signal Truth Table (Simplified)

This table shows the control signal values for a subset of MIPS instructions:

| Instruction | Opcode | Function | RegWrite | RegDst | ALUSrc | MemtoReg | MemRead | MemWrite | Branch | Jump | ALUControl |
|-------------|--------|----------|----------|--------|--------|----------|---------|----------|--------|------|------------|
| R-type      | 000000 | varies   | 1        | 1      | 0      | 0        | 0       | 0        | 0      | 0    |  funct field |
| lw          | 100011 | N/A      | 1        | 0      | 1      | 1        | 1       | 0        | 0      | 0    | 0010 (add) |
| sw          | 101011 | N/A      | 0        | X      | 1      | X        | 0       | 1        | 0      | 0    | 0010 (add) |
| beq         | 000100 | N/A      | 0        | X      | 0      | X        | 0       | 0        | 1      | 0    | 0110 (sub) |
| j           | 000010 | N/A      | 0        | X      | X      | X        | 0       | 0        | 0      | 1    | XXXX       |

*   `X` means "don't care."
*   `funct field` indicates that the ALUControl signal is determined by the instruction's function code.
*   ALUControl values are examples. Actual values depend on the encoding used.
*   Note:  This table is simplified for clarity.  A complete truth table would include all MIPS instructions and all necessary control signals.

### 2.5 Creating a simple control unit

Assume you only have to support `add`, `lw`, and `beq`.  How would you implement a control unit using logic gates? (This is a simplified exercise)

You'd need to look at the opcode bits and use them to generate the relevant control signals.  For this small subset:

*   Opcode for `add`: 000000
*   Opcode for `lw`:  100011
*   Opcode for `beq`: 000100

You'd analyze the truth table and then design logic circuits (AND, OR, NOT gates) to generate `RegWrite`, `ALUSrc`, `MemtoReg`, `MemRead`, `Branch`, and `ALUControl` based on the opcode bits.  For example:

*   `RegWrite = NOT(Opcode[5]) AND NOT(Opcode[4]) AND NOT(Opcode[3]) AND NOT(Opcode[2]) AND NOT(Opcode[1]) AND NOT(Opcode[0]) OR (Opcode[5] AND NOT(Opcode[4]) AND NOT(Opcode[3]) AND NOT(Opcode[2]) AND Opcode[1] AND Opcode[0])` (This logic expresses that RegWrite is 1 for `add` and `lw`.)

(This is a complex expression and would be simplified using Boolean algebra techniques.  The purpose is to demonstrate how you'd translate the truth table to logic.)

## 3. Limitations of Single-Cycle Design

While the single-cycle design is conceptually simple, it has significant limitations:

*   **Long Clock Cycle:** The clock cycle time is determined by the slowest instruction. This means that even simple instructions take just as long to execute as the most complex ones, leading to inefficient performance.
*   **Inefficient Resource Utilization:**  Functional units (e.g., memory, ALU) are only used during specific stages of the instruction execution.  During other stages, they are idle, leading to poor resource utilization.
*   **Difficult to Implement Complex Instructions:** It becomes increasingly difficult to implement complex instructions in a single cycle without making the clock cycle excessively long.
*   **No Pipelining:**  The single-cycle design prevents the use of pipelining, which is a technique for improving processor throughput by overlapping the execution of multiple instructions.

## 4. Practice Questions and Exercises

**Question 1:**

Explain the purpose of the `ALUSrc` control signal. What are the two possible inputs it selects, and why are they needed?

**Answer:**

The `ALUSrc` control signal selects the second operand for the ALU. It has two possible inputs:

1.  **Register read data 2:** The value read from the register file using the `rt` field of the instruction. This is used for R-type instructions (e.g., `add $t0, $s1, $s2`) where both operands are registers.
2.  **Sign-extended immediate:** The sign-extended immediate value from the instruction. This is used for I-type instructions (e.g., `lw $t0, 16($s1)`) where one operand is a register and the other is an immediate value.

The `ALUSrc` signal is needed because different instructions require different types of operands for the ALU.

**Question 2:**

Suppose the `lw` instruction takes 8ns for memory access, 2ns for ALU operations, and 1ns for other stages. The `add` instruction takes 2ns for ALU operations, 1ns for register file access, and 1ns for other stages. What is the minimum clock cycle time for a single-cycle implementation that supports both `lw` and `add`?

**Answer:**

The clock cycle time must be long enough to accommodate the slowest instruction. In this case, the `lw` instruction is slower.  Therefore, the minimum clock cycle time is 8ns + 2ns + 1ns + 1ns + 1ns = 13ns.  (IF, ID, EX, MEM, WB)

**Question 3:**

What are the values of the following control signals for an R-type `or` instruction?

*   `RegWrite`
*   `RegDst`
*   `ALUSrc`
*   `MemtoReg`
*   `MemRead`
*   `MemWrite`
*   `Branch`
*   `Jump`
*   `ALUControl` (assume 00=AND, 01=OR, 10=ADD, 11=SUB) - You will need to look at MIPS architecture documentation to find the function code of 'or' instruction.

**Answer:**

*   `RegWrite` = 1
*   `RegDst` = 1
*   `ALUSrc` = 0
*   `MemtoReg` = 0
*   `MemRead` = 0
*   `MemWrite` = 0
*   `Branch` = 0
*   `Jump` = 0
*   `ALUControl` =  The correct value depends on how the ALU control signals are encoded. According to the MIPS green sheet, the `or` instruction has funct = 100101 (37 in decimal). Since it is an R-type instruction, the ALU control signal will be derived from the funct field.  Let's assume ALUControl= 01 corresponds to OR operation, it will then be 01.

**Question 4:**

Explain why a single-cycle processor is not an efficient design for modern processors.

**Answer:**

A single-cycle processor is not efficient because:

1.  The clock cycle time is limited by the slowest instruction.
2.  Functional units are idle for significant portions of the clock cycle.
3.  It prevents the use of pipelining.

These limitations lead to poor performance compared to more advanced processor designs like pipelined and multi-cycle implementations.

## 5. Important Points to Remember

*   The single-cycle processor is a simple but inefficient design.
*   The clock cycle time is determined by the slowest instruction.
*   The control unit generates the control signals that orchestrate the operation of the datapath.
*   The single-cycle design does not allow for pipelining.
*   Understanding the single-cycle processor is a fundamental step in understanding more complex processor architectures.

This comprehensive study guide provides a thorough overview of the single-cycle processor, including the datapath, control unit, and limitations. By studying these notes and working through the practice questions, you will gain a solid understanding of this fundamental concept in computer organization and architecture. Good luck!
