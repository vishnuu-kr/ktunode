---
title: "Assembly language programming- Basic Instruction set to write Simple programs - Arithmetic, Logical, Branching instructions, Opcodes, hand coding"
subject: "MICROPROCESSORS AND EMBEDDED SYSTEMS"
module: "Module 1: Introduction to microprocessors "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f3620f"
status: "completed"
scrapedAt: "2026-05-23T16:22:37.988Z"
---
# Microprocessors and Embedded Systems - Module 1: Introduction to Microprocessors

## Topic: Assembly Language Programming - Basic Instruction Set, Arithmetic, Logical, Branching Instructions, Opcodes, Hand Coding

---

### 1. Introduction to Assembly Language Programming

**Learning Outcome:** Understand the fundamental principles of assembly language programming, including its relationship to machine code and its role in interacting directly with microprocessor hardware.

**Course Outcome Alignment:** CO1: Describe the architecture of 8085 microprocessor and 8085 Assembly language programming. (Knowledge Level: K2)

**Key Concepts:**

*   **Machine Code:** The raw binary instructions that a microprocessor directly understands. It's a sequence of 0s and 1s.
*   **Assembly Language:** A low-level programming language that uses mnemonics (short abbreviations) to represent machine code instructions. It's a human-readable representation of machine code.
*   **Assembler:** A software program that translates assembly language code into machine code.
*   **Mnemonics:** Symbolic representations of machine instructions (e.g., `MOV` for move, `ADD` for add, `JMP` for jump).
*   **Opcodes (Operation Codes):** The part of a machine instruction that specifies the operation to be performed. In assembly language, opcodes are typically represented by mnemonics.
*   **Operands:** The data or memory addresses on which the operation is to be performed.

**Why Assembly Language?**

*   **Direct Hardware Control:** Allows for precise control over the microprocessor's operations, registers, and memory.
*   **Efficiency:** Can produce highly optimized code for speed and memory usage, crucial for resource-constrained embedded systems.
*   **Understanding Microprocessor Architecture:** Essential for understanding how a microprocessor functions at its core.

**Reference:**
*   Gaonkar, R. (2014). *Microprocessor, Architecture, Programming and Applications*. (Sixth edition). Penram International Publishing. (Chapter on Assembly Language Programming)
*   Ram, B. (n.d.). *Fundamentals of Microprocessor and Microcontrollers*. DHANPAT Rai Publications (P) Ltd. (Sections on Instruction Set)

---

### 2. Basic Instruction Set for Writing Simple Programs

**Learning Outcome:** Identify and understand the basic categories of instructions used in assembly language programming for simple tasks.

**Course Outcome Alignment:** CO1: Describe the architecture of 8085 microprocessor and 8085 Assembly language programming. (Knowledge Level: K2)

**Key Categories of Instructions:**

*   **Data Transfer Instructions:** Move data between registers, memory locations, and input/output ports.
*   **Arithmetic Instructions:** Perform mathematical operations like addition, subtraction, increment, and decrement.
*   **Logical Instructions:** Perform bitwise logical operations like AND, OR, XOR, and complement.
*   **Branching Instructions:** Alter the normal sequential execution of a program by jumping to different parts of the code based on conditions.
*   **Control Instructions:** Manage the microprocessor's operations, such as interrupt handling, stack operations, and processor control.

---

### 3. Arithmetic Instructions

**Learning Outcome:** Learn to use arithmetic instructions to perform basic calculations in assembly language.

**Course Outcome Alignment:** CO1: Describe the architecture of 8085 microprocessor and 8085 Assembly language programming. (Knowledge Level: K2)

**Key Arithmetic Instructions (Common Examples, often found in 8085):**

*   **ADD `reg` / `mem`:** Adds the content of a register or memory location to the Accumulator (A).
    *   *Example (8085):* `ADD B` (Adds content of register B to Accumulator)
    *   *Example (8085):* `ADD M` (Adds content of memory location pointed by HL pair to Accumulator)
*   **ADC `reg` / `mem`:** Adds the content of a register or memory location *plus the carry flag* to the Accumulator.
    *   *Example (8085):* `ADC C` (Adds C + Carry to Accumulator)
*   **SUB `reg` / `mem`:** Subtracts the content of a register or memory location from the Accumulator.
    *   *Example (8085):* `SUB D` (Subtracts D from Accumulator)
*   **SBB `reg` / `mem`:** Subtracts the content of a register or memory location *and the borrow (carry)* from the Accumulator.
    *   *Example (8085):* `SBB E` (Subtracts E + Borrow from Accumulator)
*   **INR `reg` / `mem`:** Increments the content of a register or memory location by 1.
    *   *Example (8085):* `INR A` (Increments Accumulator)
    *   *Example (8085):* `INR M` (Increments memory location pointed by HL pair)
*   **DCR `reg` / `mem`:** Decrements the content of a register or memory location by 1.
    *   *Example (8085):* `DCR L` (Decrements register L)
*   **DAD `rp`:** Adds the content of a register pair to the HL register pair. (e.g., `DAD B` adds BC to HL)
*   **DAA (Decimal Adjust Accumulator):** Adjusts the Accumulator to represent the correct decimal sum after an ADD or ADC operation. (Crucial for BCD arithmetic).

**Example Program: Adding two numbers**

Let's assume we want to add 5 and 10 and store the result.

```assembly
; Assume the microprocessor is an 8085

MVI A, 05H    ; Load immediate value 5 into Accumulator (A)
MVI B, 0AH    ; Load immediate value 10 into Register B
ADD B         ; Add content of B to A. Result is stored in A (A = A + B)
; Now A holds the result (0FH or 15 decimal)
HLT           ; Halt the processor
```

**Important Point:** The Accumulator (A register) is often the primary register for arithmetic operations in many microprocessors like the 8085.

---

### 4. Logical Instructions

**Learning Outcome:** Utilize logical instructions to perform bitwise operations for data manipulation and decision making.

**Course Outcome Alignment:** CO1: Describe the architecture of 8085 microprocessor and 8085 Assembly language programming. (Knowledge Level: K2)

**Key Logical Instructions (Common Examples, often found in 8085):**

*   **ANA `reg` / `mem`:** Performs a bitwise AND operation between the Accumulator and the content of a register or memory location. The result is stored in the Accumulator.
    *   *Example (8085):* `ANA C` (A = A AND C)
*   **ORA `reg` / `mem`:** Performs a bitwise OR operation between the Accumulator and the content of a register or memory location. The result is stored in the Accumulator.
    *   *Example (8085):* `ORA D` (A = A OR D)
*   **XRA `reg` / `mem`:** Performs a bitwise XOR (Exclusive OR) operation between the Accumulator and the content of a register or memory location. The result is stored in the Accumulator.
    *   *Example (8085):* `XRA E` (A = A XOR E)
*   **CMA (Complement Accumulator):** Inverts all bits in the Accumulator (0 becomes 1, 1 becomes 0).
    *   *Example (8085):* `CMA` (A = NOT A)
*   **CMC (Complement Carry Flag):** Inverts the state of the Carry Flag.
*   **STC (Set Carry Flag):** Sets the Carry Flag to 1.
*   **ANI `data`:** Performs bitwise AND with an immediate data value.
*   **ORI `data`:** Performs bitwise OR with an immediate data value.
*   **XRI `data`:** Performs bitwise XOR with an immediate data value.
*   **RLC (Rotate Left through Carry):** Rotates the bits of the Accumulator to the left by one position. The MSB is shifted to the Carry Flag, and the Carry Flag's content is shifted to the LSB.
*   **RRC (Rotate Right through Carry):** Rotates the bits of the Accumulator to the right by one position. The LSB is shifted to the Carry Flag, and the Carry Flag's content is shifted to the MSB.
*   **RAL (Rotate Left through Carry):** Rotates the bits of the Accumulator to the left by one position. The MSB is shifted to the Carry Flag, and the Carry Flag's content is shifted to the LSB (similar to RLC but the Carry Flag is involved in the rotation).
*   **RAR (Rotate Right through Carry):** Rotates the bits of the Accumulator to the right by one position. The LSB is shifted to the Carry Flag, and the Carry Flag's content is shifted to the MSB (similar to RRC but the Carry Flag is involved in the rotation).

**Example Program: Masking the lower nibble**

Let's say we want to clear the lower 4 bits of a number stored in the Accumulator.

```assembly
; Assume the microprocessor is an 8085

MVI A, 9CH    ; Load immediate value 9CH (1001 1100) into Accumulator
MVI B, F0H    ; Load immediate value F0H (1111 0000) into Register B
ANA B         ; Perform A = A AND B
; Now A holds 90H (1001 0000), lower nibble is cleared.
HLT           ; Halt the processor
```

**Important Point:** Logical instructions are often used for bit manipulation, testing specific bits, or setting/clearing fields within a byte.

---

### 5. Branching Instructions

**Learning Outcome:** Implement control flow in programs using branching instructions, enabling conditional execution and looping.

**Course Outcome Alignment:** CO1: Describe the architecture of 8085 microprocessor and 8085 Assembly language programming. (Knowledge Level: K2)

**Key Branching Instructions:**

Branching instructions alter the program flow. They are essential for creating decision-making capabilities and loops.

*   **Unconditional Jump (`JMP`):** Transfers program control to a specified memory address without any condition.
    *   *Example (8085):* `JMP 2050H` (Jump to address 2050H)
*   **Conditional Jumps:** Transfer program control to a specified memory address *only if* a particular condition is met (based on the status of the flag register).

    *   **JC `address`:** Jump if Carry flag is set (Carry = 1).
    *   **JNC `address`:** Jump if Carry flag is not set (Carry = 0).
    *   **JZ `address`:** Jump if Zero flag is set (Zero = 1).
    *   **JNZ `address`:** Jump if Zero flag is not set (Zero = 0).
    *   **JM `address`:** Jump if Sign flag is set (Sign = 1, typically indicates a negative number).
    *   **JP `address`:** Jump if Sign flag is not set (Sign = 0, typically indicates a positive number).
    *   **JPE `address`:** Jump if Parity flag is set (Parity = 1, indicates even number of set bits).
    *   **JPO `address`:** Jump if Parity flag is not set (Parity = 0, indicates odd number of set bits).

*   **Call Instructions (`CALL`, `CC`, `CNC`, etc.):** Similar to jumps, but they push the current program counter onto the stack before jumping. This allows the program to return to the point after the call using a `RET` instruction. Used for implementing subroutines/functions.
    *   *Example (8085):* `CALL SUB_ROUTINE_ADDR`
*   **Return Instructions (`RET`, `RC`, `RNC`, etc.):** Returns from a subroutine by popping the program counter from the stack.
    *   *Example (8085):* `RET`

**Example Program: Counting down from 5 to 1**

```assembly
; Assume the microprocessor is an 8085

MVI C, 05H    ; Initialize counter in register C to 5

LOOP:         ; Label for the loop
; Perform some operation here if needed (e.g., display the count)

DCR C         ; Decrement the counter in C
JNZ LOOP      ; If the Zero flag is NOT set (C is not zero), jump back to LOOP

HLT           ; Halt when C becomes zero
```

**Important Point:** Branching instructions are the foundation of program control flow, enabling loops, conditional execution, and the creation of modular programs through subroutines.

---

### 6. Opcodes and Hand Coding

**Learning Outcome:** Understand the concept of opcodes and how they relate to mnemonics, and appreciate the process of manual coding in assembly language.

**Course Outcome Alignment:** CO1: Describe the architecture of 8085 microprocessor and 8085 Assembly language programming. (Knowledge Level: K2)

**Opcodes:**

*   **Definition:** The part of a machine language instruction that specifies the operation to be performed by the CPU.
*   **Representation:** In assembly language, opcodes are represented by mnemonics (e.g., `MOV`, `ADD`, `JMP`).
*   **Machine Code:** Each mnemonic directly corresponds to a specific binary opcode (and potentially operand encoding) that the microprocessor's control unit interprets.
*   **Variable Length:** Opcodes themselves can have different lengths in machine code, and the total instruction length depends on the opcode and the type of operand(s).

**Hand Coding:**

*   **Definition:** The process of writing assembly language programs manually, directly translating the logic into mnemonics and operands. This involves understanding the microprocessor's instruction set, register set, and memory addressing modes.
*   **Process:**
    1.  **Algorithm Design:** Define the steps required to solve the problem.
    2.  **Instruction Selection:** Choose appropriate assembly instructions for each step.
    3.  **Operand Specification:** Determine the registers or memory addresses for each instruction.
    4.  **Addressing Modes:** Select the correct addressing mode (e.g., immediate, register, direct, indirect) for accessing data.
    5.  **Labeling:** Assign labels to memory addresses for easier referencing (especially for jumps and calls).
    6.  **Assembly:** Use an assembler (software) to convert the hand-coded assembly program into machine code.
*   **Importance:** Crucial for understanding the low-level operations of the microprocessor and for developing highly optimized code for critical sections of embedded systems. It also helps in debugging by understanding what the machine code is actually doing.

**Example:**

Consider the instruction `MVI A, 05H` in 8085 assembly.

*   **Mnemonic:** `MVI` (Move Immediate)
*   **Opcode (Hexadecimal):** `3E`
*   **Operand (Hexadecimal):** `05`
*   **Machine Code (Hexadecimal):** `3E 05` (This is a 2-byte instruction)

When you hand-code, you write `MVI A, 05H`. The assembler looks up the opcode for `MVI` that targets register A and the operand `05H` and generates the machine code `3E 05`.

**Reference:**
*   Rafiquzzaman, M. (n.d.). *Microprocessor Theory and Application*. PHI Learning. (Chapters on Instruction Set Architecture and Programming)

---

### 7. Practice Questions and Answers

**Question 1:** Write an assembly language program (assuming 8085) to add two numbers, 25H and 30H, and store the result in memory location 2000H.

**Answer:**

```assembly
MVI A, 25H    ; Load 25H into Accumulator
MVI B, 30H    ; Load 30H into Register B
ADD B         ; Add B to A. Result is in A (55H)
STA 2000H     ; Store the content of A at memory location 2000H
HLT           ; Halt the processor
```

**Question 2:** What is the purpose of the `JNZ` instruction? Explain with an example.

**Answer:** The `JNZ` (Jump if Not Zero) instruction transfers program control to a specified address if the Zero flag (Z) in the flag register is 0. This means the result of the previous operation was non-zero. It is commonly used to control loops.

*   **Example:**
    ```assembly
    MVI C, 03H    ; Initialize counter C to 3
    LOOP_START:
        ; Some operations
        DCR C         ; Decrement counter
        JNZ LOOP_START  ; If C is not zero, jump back to LOOP_START
    ```
    This code will execute the instructions between `LOOP_START:` and `DCR C` three times.

**Question 3:** Explain the difference between `RLC` and `RAL` instructions in the context of the 8085 microprocessor.

**Answer:**
*   **`RLC` (Rotate Left through Carry):** Rotates the bits of the Accumulator to the left. The most significant bit (MSB) is shifted into the Carry flag, and the Carry flag's original content is shifted into the least significant bit (LSB).
*   **`RAL` (Rotate Left through Carry):** Rotates the bits of the Accumulator to the left. The MSB is shifted into the Carry flag, and the Carry flag's original content is shifted into the LSB. **Crucially, `RAL` treats the Carry flag as part of the 8-bit rotation.** So, it's like a left shift where the Carry flag *participates* in the rotation, whereas in `RLC`, the Carry flag *receives* the MSB and the LSB is filled by the original Carry flag value.

**Question 4:** If the Accumulator contains `10110010` and the Carry flag is `0`, what will be the content of the Accumulator and the Carry flag after executing `RLC`?

**Answer:**
*   Original Accumulator: `10110010`
*   Original Carry Flag: `0`

After `RLC`:
*   The MSB (`1`) of the accumulator goes to the Carry flag. So, Carry Flag becomes `1`.
*   The rest of the bits shift left: `0110010`.
*   The original Carry flag (`0`) goes into the LSB.
*   New Accumulator: `01100100`

**Result:** Accumulator = `01100100` (64H), Carry Flag = `1`.

---

### 8. Important Points to Remember

*   **Assembly vs. Machine Code:** Assembly language is a human-readable representation of machine code.
*   **Opcodes:** The core of an instruction specifying the operation.
*   **Mnemonics:** Symbolic names for opcodes.
*   **Registers:** Small, fast storage locations within the CPU used for temporary data manipulation (e.g., Accumulator, B, C, D, E, H, L in 8085).
*   **Memory:** External storage used to hold programs and data.
*   **Flags:** Bits in a special register (Flag Register) that store the status of operations (e.g., Zero, Carry, Sign, Parity).
*   **Addressing Modes:** Ways to specify the location of operands (e.g., immediate data, register content, memory address).
*   **Labels:** Symbolic names for memory addresses used to make code more readable and manageable.
*   **Assembler:** The tool that translates assembly code to machine code.
*   **Hand Coding:** Essential for understanding low-level operation and optimization.

---

### 9. Further Exploration (Connecting to Other Modules/Course Outcomes)

*   **CO2:** Understanding the instruction set is the first step to understanding timing diagrams (how long instructions take) and interrupt handling (how to respond to external events). Branching instructions are key to managing program flow during interrupt service routines.
*   **CO3 & CO4:** While this topic focuses on generic assembly, the principles learned apply directly to microcontrollers like Arduino. Understanding assembly helps appreciate the underlying hardware and how the C++ based "sketches" are ultimately translated into machine code for the microcontroller.
*   **CO5 & CO6:** Embedded C and ARM assembly, while different in syntax, share the same fundamental concepts of data manipulation, arithmetic, logical operations, and control flow that are introduced here with basic assembly.

---
This comprehensive study note covers the essential aspects of assembly language programming, focusing on basic instructions, opcodes, and hand coding, as required for Module 1 of Microprocessors and Embedded Systems. It aligns with the specified learning outcomes and course outcomes, providing definitions, examples, and practice questions.
