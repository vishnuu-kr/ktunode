---
title: "Instructions and instruction sequencing"
subject: "COMPUTER ORGANIZATION"
module: "Module 1: Basic Structure of computers –functional units "
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35f52"
status: "completed"
scrapedAt: "2026-05-23T16:14:56.267Z"
---
# Computer Organization: Module 1 - Basic Structure of Computers: Functional Units
## Topic: Instructions and Instruction Sequencing

These study notes provide a comprehensive overview of instructions and instruction sequencing within the context of basic computer structure and functional units. They are designed to align with the learning outcomes and course outcomes of your Computer Organization course, referencing the specified textbooks.

---

### 1. Introduction to Instructions

An **instruction** is a command given to a computer to perform a specific operation. It's the fundamental building block of any program. Instructions are stored in memory and executed by the processor in a specific sequence.

#### 1.1 Instruction Components (Instruction Format)

A typical instruction consists of two main parts:

*   **Opcode (Operation Code):** Specifies the operation to be performed (e.g., ADD, SUBTRACT, LOAD, STORE, BRANCH).
*   **Operands:** Specify the data or locations of data on which the operation is to be performed. Operands can be:
    *   **Registers:** Fast storage locations within the CPU.
    *   **Memory Locations:** Data stored in the main memory.
    *   **Immediate Values:** Constants directly embedded within the instruction.

**Example Instruction Format:**

```
| Opcode | Operand 1 | Operand 2 | Operand 3 |
```

*   **Hamacher, Vranesic, & Zaky (5/e):** Discusses various instruction formats, including fixed-length and variable-length instructions, and how they impact the instruction set architecture (ISA). Chapter 2, "Machine Instructions and Addressing Modes," is highly relevant.
*   **Mano (Digital Logic & Computer Design, 2004):** Introduces the basic concepts of instruction sets and how they are represented in binary. Chapter 1, "Digital Computer Introduction," provides foundational information.

#### 1.2 Instruction Set Architecture (ISA)

The ISA defines the set of instructions that a particular processor can execute. It's the interface between the hardware and the software. Key aspects of an ISA include:

*   **Instruction Set:** The collection of all available instructions.
*   **Data Types:** The types of data the processor can manipulate (e.g., integers, floating-point numbers).
*   **Registers:** The number, size, and purpose of the CPU's registers.
*   **Addressing Modes:** How operands are specified in instructions.
*   **Memory Architecture:** How the processor accesses memory.

**Importance:** A well-designed ISA is crucial for efficient program execution and ease of programming.

---

### 2. Types of Instructions

Instructions can be broadly categorized based on the operations they perform:

#### 2.1 Data Transfer Instructions

These instructions move data between different locations without altering it.

*   **LOAD:** Copies data from memory to a CPU register.
    *   **Example:** `LOAD R1, Memory_Address` (Copies data from `Memory_Address` to register `R1`).
*   **STORE:** Copies data from a CPU register to memory.
    *   **Example:** `STORE R2, Memory_Address` (Copies data from register `R2` to `Memory_Address`).
*   **MOVE:** Copies data between registers or between a register and an immediate value.
    *   **Example:** `MOVE R3, R4` (Copies data from `R4` to `R3`).
    *   **Example:** `MOVE R5, #10` (Copies the immediate value `10` to register `R5`).

#### 2.2 Arithmetic Instructions

These instructions perform arithmetic operations on data.

*   **ADD:** Adds two operands.
    *   **Example:** `ADD R1, R2, R3` (Adds the contents of `R2` and `R3` and stores the result in `R1`).
*   **SUBTRACT:** Subtracts one operand from another.
    *   **Example:** `SUB R1, R2, R3` (Subtracts `R3` from `R2` and stores the result in `R1`).
*   **MULTIPLY:** Multiplies two operands.
*   **DIVIDE:** Divides one operand by another.
*   **INCREMENT/DECREMENT:** Adds or subtracts 1 from an operand.
    *   **Example:** `INC R1` (Adds 1 to the content of `R1`).

#### 2.3 Logical Instructions

These instructions perform bitwise logical operations.

*   **AND:** Performs a bitwise AND operation.
*   **OR:** Performs a bitwise OR operation.
*   **NOT:** Performs a bitwise NOT operation (inverts bits).
*   **XOR:** Performs a bitwise Exclusive OR operation.
*   **SHIFT/ROTATE:** Moves bits to the left or right, optionally with wrap-around (rotate).

#### 2.4 Control Flow Instructions (Branching and Jumping)

These instructions alter the normal sequential execution of instructions.

*   **BRANCH (Conditional Jump):** Transfers control to a different instruction location based on a condition.
    *   **Example:** `BEQ R1, R2, Label` (Branch to `Label` if `R1` equals `R2`).
    *   **Conditions:** Equal (EQ), Not Equal (NE), Greater Than (GT), Less Than (LT), Greater Than or Equal (GE), Less Than or Equal (LE).
*   **JUMP (Unconditional Branch):** Transfers control to a specified instruction location regardless of any condition.
    *   **Example:** `JUMP Label` (Go to the instruction at `Label`).
*   **CALL:** Transfers control to a subroutine (function or procedure) and saves the return address.
*   **RETURN:** Transfers control back to the caller after a subroutine has finished.

#### 2.5 Other Instructions

*   **Input/Output (I/O) Instructions:** Used to communicate with peripheral devices.
*   **Interrupt Instructions:** Used to handle exceptions and external events.
*   **Stack Instructions:** Push and Pop operations for managing the program stack.

*   **Patterson & Hennessy (5/e):** Chapter 2, "Instructions: Language of the Processor," provides an in-depth look at RISC (Reduced Instruction Set Computer) and CISC (Complex Instruction Set Computer) ISAs and their instruction types.
*   **Stallings (9/e):** Chapter 6, "Instruction Set Principles," discusses instruction format, types, and operand modes extensively.

---

### 3. Instruction Sequencing

Instruction sequencing is the process of determining the order in which instructions are executed. The **Program Counter (PC)** plays a crucial role in this.

#### 3.1 The Program Counter (PC)

*   **Definition:** A special register in the CPU that holds the memory address of the *next* instruction to be fetched and executed.
*   **Sequential Execution:** After an instruction is fetched, the PC is automatically incremented to point to the next sequential instruction in memory. This is the default behavior.

#### 3.2 Control Flow Changes

Control flow instructions (branching, jumping, calling) modify the value of the PC, thus altering the sequential execution path.

*   **Branching:** If a branch condition is met, the CPU loads the target address of the branch into the PC.
*   **Jumping:** The PC is loaded with the target address specified in the jump instruction.
*   **Calling a Subroutine:** The address of the instruction *after* the CALL is pushed onto the stack, and the PC is loaded with the address of the first instruction of the subroutine.
*   **Returning from a Subroutine:** The return address is popped from the stack and loaded into the PC.

#### 3.3 Fetch-Decode-Execute Cycle

This is the fundamental cycle of instruction execution:

1.  **Fetch:** The instruction at the memory address pointed to by the PC is retrieved from memory and loaded into the Instruction Register (IR).
2.  **Decode:** The opcode in the IR is decoded to determine the operation to be performed and the operands involved.
3.  **Execute:** The specified operation is performed. This may involve accessing memory, performing arithmetic/logic operations, or updating the PC.

**During execution, the PC is typically updated:**

*   For sequential execution: PC is incremented to point to the next instruction.
*   For control flow instructions: PC is updated to the target address of the branch/jump or the return address.

*   **Mano (Computer System Architecture, 2007):** Chapter 5, "CPU," details the fetch-decode-execute cycle and the role of the PC and IR.
*   **Hamacher, Vranesic, & Zaky (5/e):** Chapter 4, "Processor Organization," elaborates on the control unit's role in managing the instruction cycle.

---

### 4. Addressing Modes and Instruction Sequencing

Addressing modes are crucial for how instructions access operands, and they significantly impact instruction sequencing and efficiency.

#### 4.1 Common Addressing Modes

*   **Immediate Addressing:** The operand is part of the instruction itself.
    *   **Example:** `ADD R1, #10` (Add the value 10 to R1).
*   **Register Direct Addressing:** The operand is in a CPU register.
    *   **Example:** `ADD R1, R2` (Add the content of R2 to R1).
*   **Register Indirect Addressing:** The address of the operand is in a CPU register.
    *   **Example:** `LOAD R1, (R2)` (Load the value from the memory address stored in R2 into R1).
*   **Direct (Absolute) Addressing:** The operand's memory address is directly specified in the instruction.
    *   **Example:** `LOAD R1, 1000` (Load the value from memory address 1000 into R1).
*   **Indirect Addressing:** The address of the operand is stored in memory, and the instruction contains the memory address of that address.
    *   **Example:** `LOAD R1, ((R2))` (Load the value from the memory address stored in the memory location pointed to by R2, into R1).
*   **Indexed Addressing:** The operand's address is calculated by adding an index register's content to an address specified in the instruction.
    *   **Example:** `LOAD R1, 1000(R3)` (Load from memory address 1000 + content of R3).
*   **Base Register Addressing:** Similar to indexed addressing, but a base register holds the base address.
*   **Stack Addressing:** Operands are implicitly on the stack (e.g., PUSH, POP).

#### 4.2 Impact on Instruction Sequencing

*   **Conditional Branches:** The effectiveness of conditional branches relies on the ability to compare values in registers or memory, which in turn depends on efficient addressing modes.
*   **Subroutine Calls:** Indirect addressing or register indirect addressing is often used to specify the target address of a subroutine call, especially in dynamic environments.
*   **Data Structures:** Indexed and base register addressing are essential for efficiently accessing elements in arrays and other data structures, impacting the overall program flow and execution speed.

*   **Hamacher, Vranesic, & Zaky (5/e):** Chapter 2, "Machine Instructions and Addressing Modes," provides a thorough explanation of various addressing modes and their implications.
*   **Stallings (9/e):** Chapter 6, "Instruction Set Principles," also covers addressing modes in detail, explaining their impact on instruction length and addressing capability.
*   **CO1:** This topic directly addresses the learning outcome "Identify the relevance of functional units, memory locations and addressing modes in a digital computer." Understanding how instructions access operands via different addressing modes is fundamental to comprehending memory interaction.

---

### 5. High-Level Language to Machine Instructions

High-level programming languages (like C, Python, Java) are translated into machine instructions by compilers. This translation process is complex and involves:

*   **Instruction Selection:** Choosing appropriate machine instructions for high-level language constructs.
*   **Register Allocation:** Assigning program variables to CPU registers for faster access.
*   **Instruction Scheduling:** Reordering instructions to optimize for pipelining and reduce execution time.

**Example:**

High-level code: `x = a + b`

Could be translated to machine instructions (assuming `a` is in `R1`, `b` is in `R2`, and `x` is to be stored in `R3`):

```assembly
LOAD R1, address_of_a   ; Load 'a' into R1
LOAD R2, address_of_b   ; Load 'b' into R2
ADD R3, R1, R2          ; Add R1 and R2, store in R3
STORE R3, address_of_x  ; Store R3 to 'x'
```

*   **Patterson & Hennessy (5/e):** Chapter 1, "Introduction," discusses the compilation process and the role of the ISA.

---

### 6. Practice Questions and Answers

**Question 1:** What is the primary function of the Program Counter (PC)?
    a) Store the current instruction.
    b) Store the result of the last operation.
    c) Store the address of the next instruction to be fetched.
    d) Store the address of the current instruction.

**Answer 1:** c) Store the address of the next instruction to be fetched.

**Question 2:** Explain the difference between a direct and an indirect addressing mode. Provide a hypothetical instruction for each.
    *   **Direct Addressing:** The operand's memory address is directly specified in the instruction.
        *   Hypothetical Instruction: `LOAD R1, 2000H` (Load data from memory address 2000H into register R1).
    *   **Indirect Addressing:** The instruction contains the address of a memory location that, in turn, holds the operand's address.
        *   Hypothetical Instruction: `LOAD R1, (2000H)` (Load data from the memory location whose address is stored at memory address 2000H into register R1).

**Question 3:** Which type of instruction is used to transfer control to a subroutine?
    a) BRANCH
    b) JUMP
    c) CALL
    d) LOAD

**Answer 3:** c) CALL

**Question 4:** Given the following instructions and assuming sequential execution (PC increments by 1 after each fetch):
    1.  `LOAD R1, 100` (Address 500)
    2.  `ADD R2, R1, R0` (Address 501)
    3.  `BEQ R2, R3, Target` (Address 502)
    4.  `Target: STORE R1, 200` (Address 505)

    If the condition in instruction 3 (`BEQ R2, R3, Target`) is met, what will be the value of the PC after the execution of instruction 3? Assume `Target` refers to Address 505.

**Answer 4:** If the condition is met, the PC will be updated to the address of the `Target` label, which is **505**. If the condition were not met, the PC would be incremented to 503 (address of the next sequential instruction).

---

### 7. Important Points to Remember

*   **Instruction:** The fundamental command unit executed by a computer.
*   **Opcode & Operands:** The two primary components of an instruction.
*   **PC:** Crucial for sequential instruction fetching.
*   **Fetch-Decode-Execute Cycle:** The basic operational cycle of a CPU.
*   **Control Flow Instructions:** Alter the normal sequential execution of programs.
*   **Addressing Modes:** Determine how instructions access data, impacting efficiency and complexity.
*   **ISA:** Defines the computer's instruction set and its fundamental capabilities.
*   **Compiler:** Translates high-level code into machine instructions.

---

### 8. Alignment with Course Outcomes

*   **CO1: Identify the relevance of functional units, memory locations and addressing modes in a digital computer. (Knowledge Level: K2)**
    *   This entire topic directly addresses CO1 by explaining what instructions are, how they interact with memory (via addressing modes), and how functional units (like the PC and IR) are involved in their execution.
*   **CO2: Illustrate the register transfer logic, Processor logic design. (Knowledge Level: K2)**
    *   While not fully covered here, the concept of instructions being loaded into registers (IR) and the PC holding addresses directly relates to register transfer logic, a precursor to processor logic design.
*   **CO3: Explain the implementation aspects of arithmetic algorithms and pipelining concept in a digital computer. (Knowledge Level: K3)**
    *   Arithmetic instructions are a key component of what needs to be implemented. Understanding the sequence of these instructions is foundational for exploring pipelining.
*   **CO4: Demonstrate the control signals required for the execution of a given instruction. (Knowledge Level: K3)**
    *   The fetch-decode-execute cycle inherently involves control signals. The decode stage determines which operation to perform, and the execution stage requires specific control signals to activate the appropriate functional units and pathways based on the instruction type.
*   **CO5: Illustrate the organization of different types of memories and I/O organization. (Knowledge Level: K2)**
    *   Instructions and operands reside in memory. Understanding how instructions access memory through various addressing modes is crucial for understanding memory organization and interaction.

---

This concludes the study notes for Instructions and Instruction Sequencing. Ensure you review the relevant chapters in the provided textbooks for a deeper understanding and to solidify your knowledge.
