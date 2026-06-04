---
title: "Instruction Set of 8051 & Addressing modes: Classification of 
instruction set - Data transfer group, arithmetic group, logical group, 
branching group."
subject: "MICROCONTROLLERS"
module: "Module 2: Instruction Set of 8051 & Addressing modes: Classification of 
instruction set "
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe59b"
status: "completed"
scrapedAt: "2026-05-23T17:51:04.806Z"
---
# Microcontrollers: Module 2 - Instruction Set of 8051 & Addressing Modes

## Introduction

The 8051 microcontroller boasts a rich and versatile instruction set, allowing it to perform a wide range of operations. Understanding this instruction set and the various ways data can be accessed (addressing modes) is fundamental to programming the 8051 effectively. This module delves into the classification of the 8051 instruction set into four major groups: Data Transfer, Arithmetic, Logical, and Branching. We will explore the purpose, syntax, and examples of instructions within each group, along with the addressing modes used by the 8051.

**Key Concept:** An **instruction** is a command that the microcontroller can understand and execute. The **instruction set** is the complete collection of all such commands. **Addressing modes** define how the operand (the data or memory location the instruction operates on) is specified.

**Alignment with Course Outcomes:**
*   **CO1 (K2):** This module directly addresses the architecture of the 8051 by detailing its instruction set, which is a core component of its functionality.
*   **CO2 (K5):** By understanding the instruction set and addressing modes, students will be able to develop programs that leverage these capabilities to perform specific tasks.

## 1. Classification of 8051 Instruction Set

The 8051 instruction set can be broadly categorized into four primary groups:

*   **Data Transfer Group:** Instructions that move data between internal registers, memory, and I/O ports.
*   **Arithmetic Group:** Instructions that perform mathematical operations like addition, subtraction, multiplication, and division.
*   **Logical Group:** Instructions that perform bitwise logical operations such as AND, OR, XOR, and NOT.
*   **Branching Group:** Instructions that alter the normal sequential flow of program execution, enabling decision-making and looping.

---

## 2. Data Transfer Group

This group of instructions is responsible for moving data within the microcontroller. Data can be transferred between:

*   **Internal Registers:** Such as Accumulator (A), B register, R0-R7 (in the selected register bank).
*   **Internal RAM:** On-chip data memory.
*   **External RAM:** Off-chip data memory (accessible via P0, P2, and DPTR).
*   **Program Memory (Code Memory):** Read-only memory holding the program code (accessible via PC and DPTR).
*   **I/O Ports:** For communication with external devices.

### Key Instructions and Addressing Modes:

| Instruction | Description                                                                   | Operand 1       | Operand 2       | Addressing Mode(s) Used                                       | Example                                         |
| :---------- | :---------------------------------------------------------------------------- | :-------------- | :-------------- | :------------------------------------------------------------ | :---------------------------------------------- |
| `MOV`       | Move data                                                                     | Destination     | Source          | Immediate, Register, Direct, Indirect, Indexed                | `MOV A, #55H` (Load 55H into Accumulator)       |
| `MOVX`      | Move data from/to External RAM                                                | Destination     | Source          | Indirect (using @R0/@R1), Direct (Port 0 for address)          | `MOVX A, @DPTR` (Move from external RAM pointed by DPTR to A) |
| `PUSH`      | Push data onto Stack                                                          | Register/Direct | N/A             | Register, Direct                                              | `PUSH ACC` (Push Accumulator onto the stack)    |
| `POP`       | Pop data from Stack                                                           | Register/Direct | N/A             | Register, Direct                                              | `POP PSW` (Pop from stack into Program Status Word) |
| `XCH`       | Exchange data between two locations                                           | Operand 1       | Operand 2       | Register, Direct, Indirect, Indexed                           | `XCH A, R0` (Exchange A and R0)                 |
| `XCHX`      | Exchange data between Accumulator and External RAM                            | Accumulator     | Indirect        | Indirect (using @R0/@R1), Direct (Port 0 for address)          | `XCH A, @R1` (Exchange A with content at @R1)   |
| `SWAP`      | Swap nibbles within the Accumulator                                           | Accumulator     | N/A             | Register                                                      | `SWAP A`                                        |
| `LD`        | Load data (often used in assembly for specific architectures, but conceptually similar to MOV) | Destination     | Source          | Various                                                       | (Not a standard 8051 instruction, but concept applies) |
| `ST`        | Store data (similar to MOV)                                                   | Destination     | Source          | Various                                                       | (Not a standard 8051 instruction, but concept applies) |

**Addressing Modes for Data Transfer:**

*   **Immediate Addressing:** The operand is a constant value directly included in the instruction.
    *   Syntax: `Instruction #Data`
    *   Example: `MOV A, #25H`
    *   *Textbook Reference:* Mazidi et al., Chapter 3.1.2

*   **Register Addressing:** The operand is a register (A, B, R0-R7).
    *   Syntax: `Instruction Reg1, Reg2`
    *   Example: `MOV R1, R0`
    *   *Textbook Reference:* Mazidi et al., Chapter 3.1.2

*   **Direct Addressing:** The operand is an internal RAM address (00H to 7FH) or special function register (SFR) address (80H to FFH).
    *   Syntax: `Instruction DirectAddress`
    *   Example: `MOV A, 30H` (Move content of RAM location 30H to Accumulator)
    *   *Textbook Reference:* Mazidi et al., Chapter 3.1.2

*   **Indirect Addressing:** The operand's address is held in a register. For internal RAM, `@R0` or `@R1` is used. For external RAM, `@DPTR` or `@R0`/`@R1` (with `MOVX`) is used.
    *   Syntax: `Instruction @Reg`
    *   Example: `MOV A, @R0` (Move content of RAM location pointed to by R0 to Accumulator)
    *   *Textbook Reference:* Mazidi et al., Chapter 3.1.2

*   **Indexed Addressing:** Used primarily for accessing program memory (look-up tables). The effective address is the sum of the Accumulator and either the Program Counter (PC) or the Data Pointer (DPTR).
    *   Syntax: `Instruction A, @A+DPTR` or `Instruction A, @A+PC`
    *   Example: `MOVC A, @A+DPTR` (Move byte from program memory at address DPTR + A to Accumulator)
    *   *Textbook Reference:* Mazidi et al., Chapter 3.1.2

**Important Points to Remember (Data Transfer):**
*   `MOVX` is exclusively for accessing **external** RAM.
*   `PUSH` and `POP` operate on the **stack**. The stack pointer (SP) is automatically managed.
*   `SWAP A` exchanges the upper and lower nibbles of the accumulator.
*   The 8051 has multiple register banks. `MOV` instructions can operate on registers within the currently selected bank.

**Practice Question (Data Transfer):**
Write an assembly code snippet to move the content of internal RAM location 50H to internal RAM location 60H.

**Answer:**
```assembly
MOV A, 50H      ; Move content of 50H to Accumulator
MOV 60H, A      ; Move content of Accumulator to 60H
```

---

## 3. Arithmetic Group

This group of instructions performs mathematical calculations. The Accumulator (A) is often involved as one of the operands.

### Key Instructions and Addressing Modes:

| Instruction | Description                                                                                   | Operand 1       | Operand 2       | Addressing Mode(s) Used                                       | Example                                      |
| :---------- | :-------------------------------------------------------------------------------------------- | :-------------- | :-------------- | :------------------------------------------------------------ | :------------------------------------------- |
| `ADD`       | Add operand to Accumulator                                                                    | Accumulator     | Operand         | Immediate, Register, Direct, Indirect, Indexed                | `ADD A, R2` (Add content of R2 to A)         |
| `ADDC`      | Add operand to Accumulator with Carry                                                         | Accumulator     | Operand         | Immediate, Register, Direct, Indirect, Indexed                | `ADDC A, #10H` (Add 10H and carry to A)      |
| `SUBB`      | Subtract operand from Accumulator with Borrow                                                 | Accumulator     | Operand         | Immediate, Register, Direct, Indirect, Indexed                | `SUBB A, R5` (Subtract R5 and borrow from A) |
| `INC`       | Increment operand by 1                                                                        | Operand         | N/A             | Register, Direct, Indirect, Indexed                           | `INC R3` (Increment R3)                      |
| `DEC`       | Decrement operand by 1                                                                        | Operand         | N/A             | Register, Direct, Indirect, Indexed                           | `DEC 40H` (Decrement RAM location 40H)       |
| `MUL`       | Multiply; unsigned 8-bit x 8-bit. Result in A (low byte) and B (high byte).                   | A               | B               | Register                                                      | `MUL AB` (Multiply A by B)                   |
| `DIV`       | Divide; unsigned 8-bit / 8-bit. Result in A (quotient) and B (remainder).                     | A               | B               | Register                                                      | `DIV AB` (Divide A by B)                     |
| `DA`        | Decimal Adjust Accumulator: Adjusts A to reflect the result of addition of two BCD numbers. | Accumulator     | N/A             | Register                                                      | `DA A`                                       |

**Addressing Modes for Arithmetic Group:**
The arithmetic instructions primarily use:
*   **Immediate:** For adding/subtracting immediate values.
*   **Register:** For operations involving registers (A, B, R0-R7).
*   **Direct:** For operations involving internal RAM locations or SFRs.
*   **Indirect:** For operations involving memory locations pointed to by R0 or R1.
*   **Indexed:** For accessing values from program memory (though less common for arithmetic operations compared to data transfer).

**Important Points to Remember (Arithmetic):**
*   The **Carry flag (CY)** in the Program Status Word (PSW) is crucial for `ADDC` and `SUBB`.
*   `MUL AB` and `DIV AB` are the only instructions that directly operate on both A and B registers.
*   `DA A` is used specifically for Binary Coded Decimal (BCD) arithmetic.
*   `INC` and `DEC` can operate on registers, internal RAM, and SFRs.

**Practice Question (Arithmetic):**
Write an assembly code snippet to add the content of internal RAM location 45H to the content of internal RAM location 55H and store the result in internal RAM location 65H. Assume no carry from the addition.

**Answer:**
```assembly
MOV A, 45H      ; Load content of 45H into Accumulator
ADD A, 55H      ; Add content of 55H to Accumulator
MOV 65H, A      ; Store the result in 65H
```

---

## 4. Logical Group

This group of instructions performs bitwise logical operations. The Accumulator is always one of the operands.

### Key Instructions and Addressing Modes:

| Instruction | Description                                                                                 | Operand 1       | Operand 2       | Addressing Mode(s) Used                                       | Example                                       |
| :---------- | :------------------------------------------------------------------------------------------ | :-------------- | :-------------- | :------------------------------------------------------------ | :-------------------------------------------- |
| `ANL`       | Logical AND between Accumulator and operand                                                 | Accumulator     | Operand         | Immediate, Register, Direct, Indirect, Indexed                | `ANL A, P1` (AND A with Port 1 state)         |
| `ORL`       | Logical OR between Accumulator and operand                                                  | Accumulator     | Operand         | Immediate, Register, Direct, Indirect, Indexed                | `ORL A, #0FH` (OR A with 0FH)                 |
| `XRL`       | Logical XOR between Accumulator and operand                                                 | Accumulator     | Operand         | Immediate, Register, Direct, Indirect, Indexed                | `XRL A, R7` (XOR A with R7)                   |
| `CPL`       | Complement (NOT) Accumulator                                                                | Accumulator     | N/A             | Register                                                      | `CPL A`                                       |
| `RL`        | Rotate Accumulator Left                                                                     | Accumulator     | N/A             | Register                                                      | `RL A` (Rotate left through Carry)            |
| `RLC`       | Rotate Accumulator Left through Carry                                                       | Accumulator     | N/A             | Register                                                      | `RLC A`                                       |
| `RR`        | Rotate Accumulator Right                                                                    | Accumulator     | N/A             | Register                                                      | `RR A` (Rotate right through Carry)           |
| `RRC`       | Rotate Accumulator Right through Carry                                                      | Accumulator     | N/A             | Register                                                      | `RRC A`                                       |
| `CLR`       | Clear (set to 0) a bit                                                                      | Bit             | N/A             | Bit Addressing                                                | `CLR P1.0` (Clear bit 0 of Port 1)            |
| `SETB`      | Set (to 1) a bit                                                                            | Bit             | N/A             | Bit Addressing                                                | `SETB P1.1` (Set bit 1 of Port 1)             |
| `CPL`       | Complement (flip) a bit                                                                     | Bit             | N/A             | Bit Addressing                                                | `CPL P1.2` (Toggle bit 2 of Port 1)           |
| `JB`        | Jump if Bit Set                                                                             | Bit             | Target Address  | Bit Addressing                                                | `JB P1.3, Label`                              |
| `JNB`       | Jump if Bit Not Set                                                                         | Bit             | Target Address  | Bit Addressing                                                | `JNB P1.4, Label`                             |

**Addressing Modes for Logical Group:**
Similar to arithmetic instructions, logical operations utilize:
*   **Immediate:** For direct logical operations with constant values.
*   **Register:** For operations with registers.
*   **Direct:** For operations with internal RAM or SFRs.
*   **Indirect:** For operations with memory locations pointed to by R0 or R1.
*   **Indexed:** For accessing data from program memory.
*   **Bit Addressing:** For bit manipulation instructions like `CLR`, `SETB`, `CPL`, `JB`, `JNB`.

**Important Points to Remember (Logical):**
*   The **Carry flag (CY)** is involved in rotate operations (`RLC`, `RRC`).
*   `RL` and `RR` rotate bits without affecting the Carry flag.
*   `RLC` and `RRC` rotate bits through the Carry flag, effectively performing an 8-bit rotation.
*   Bit addressing allows direct manipulation of individual bits within SFRs and internal RAM.

**Practice Question (Logical):**
Write an assembly code snippet to set bit 3 of Port 1 (P1.3) to HIGH.

**Answer:**
```assembly
SETB P1.3
```

---

## 5. Branching Group

These instructions control the flow of program execution. They allow the program to make decisions, repeat tasks (loops), and call subroutines.

### Key Instructions and Addressing Modes:

| Instruction | Description                                                                                                 | Operand 1       | Operand 2       | Addressing Mode(s) Used                                       | Example                                         |
| :---------- | :---------------------------------------------------------------------------------------------------------- | :-------------- | :-------------- | :------------------------------------------------------------ | :---------------------------------------------- |
| `SJMP`      | Short Jump: Unconditional jump to a relative address (within -128 to +127 bytes of current instruction).    | Relative Offset | N/A             | Relative                                                      | `SJMP Loop`                                     |
| `AJMP`      | Absolute Jump: Jumps to any address within the current 2K block of program memory.                          | Absolute Address| N/A             | Absolute                                                      | `AJMP MySubroutine`                             |
| `LJMP`      | Long Jump: Jumps to any address within the entire 64K program memory space.                                 | Target Address  | N/A             | Direct                                                        | `LJMP 0x1000`                                   |
| `JMP @A+DPTR` | Indirect Jump: Jumps to the address formed by adding the content of the Accumulator and DPTR.             | DPTR, A         | N/A             | Indexed                                                       | `JMP @A+DPTR`                                   |
| `JC`        | Jump if Carry is set                                                                                        | Target Address  | N/A             | Relative                                                      | `JC CarryError`                                 |
| `JNC`       | Jump if Carry is not set                                                                                    | Target Address  | N/A             | Relative                                                      | `JNC NoCarry`                                   |
| `JZ`        | Jump if Accumulator is Zero                                                                                 | Target Address  | N/A             | Relative                                                      | `JZ ZeroResult`                                 |
| `JNZ`       | Jump if Accumulator is Not Zero                                                                             | Target Address  | N/A             | Relative                                                      | `JNZ LoopContinue`                              |
| `DJNZ`      | Decrement and Jump if Not Zero: Decrements a register (R0-R7) or memory location and jumps if result is not zero. | Register/Direct | Target Address  | Register, Direct, Relative                                    | `DJNZ R4, Update`                               |
| `CJNE`      | Compare and Jump if Not Equal: Compares two operands and jumps if they are not equal.                     | Operand 1       | Operand 2       | Immediate, Register, Direct, Indirect, Relative               | `CJNE A, #0FFH, LoopEnd`                        |
| `ACALL`     | Absolute Call: Calls a subroutine within the current 2K block.                                              | Target Address  | N/A             | Absolute                                                      | `ACALL Delay`                                   |
| `LCALL`     | Long Call: Calls a subroutine anywhere within the 64K program memory space.                                 | Target Address  | N/A             | Direct                                                        | `LCALL PrintChar`                               | |
| `RET`       | Return from Subroutine: Pops the return address from the stack and jumps to it.                           | N/A             | N/A             | N/A                                                           | `RET`                                           |
| `RETI`      | Return from Interrupt: Similar to RET, but also re-enables interrupts if they were disabled.              | N/A             | N/A             | N/A                                                           | `RETI`                                          |

**Addressing Modes for Branching Group:**

*   **Relative Addressing:** Used by `SJMP`, `JC`, `JNC`, `JZ`, `JNZ`, `DJNZ`. The jump target is specified as an offset from the current instruction's address. This is useful for keeping code compact.
    *   Example: `SJMP $+5` (Jump 5 bytes forward)
    *   *Textbook Reference:* Mazidi et al., Chapter 3.1.2

*   **Absolute Addressing:** Used by `AJMP` and `ACALL`. The jump/call target is within the same 2K block of program memory. The lower 11 bits of the target address are encoded in the instruction.
    *   Example: `AJMP 1000H`
    *   *Textbook Reference:* Mazidi et al., Chapter 3.1.2

*   **Direct Addressing:** Used by `LJMP` and `LCALL`. The jump/call target can be anywhere in the 64K program memory space. The full 16-bit target address is specified.
    *   Example: `LCALL 2050H`
    *   *Textbook Reference:* Mazidi et al., Chapter 3.1.2

*   **Indexed Addressing:** Used by `JMP @A+DPTR`. The target address is calculated dynamically.
    *   Example: `JMP @A+DPTR`
    *   *Textbook Reference:* Mazidi et al., Chapter 3.1.2

*   **Bit Addressing:** Used by `JB` and `JNB` for conditional jumps based on the state of a specific bit.
    *   Example: `JB P1.5, CheckAgain`
    *   *Textbook Reference:* Mazidi et al., Chapter 3.1.2

**Important Points to Remember (Branching):**
*   The **stack** is used by `ACALL` and `LCALL` to store the return address. `RET` and `RETI` retrieve this address.
*   **`SJMP`** is for short, local jumps.
*   **`AJMP`** is for jumps within a 2K block.
*   **`LJMP`** is for jumps anywhere in the 64K program memory.
*   **`DJNZ`** is a common instruction for loop control.
*   **`CJNE`** is used for comparing values.
*   **`RETI`** is crucial for handling interrupts correctly.

**Practice Question (Branching):**
Write an assembly code snippet that repeatedly subtracts 1 from register R5 until R5 becomes zero, then jumps to a label called `END_LOOP`.

**Answer:**
```assembly
LOOP_START:
    DJNZ R5, LOOP_START ; Decrement R5, jump to LOOP_START if not zero
    SJMP END_LOOP       ; Jump to END_LOOP when R5 becomes zero
END_LOOP:
    ; ... rest of the program
```

---

## 6. Instruction Set Summary and Addressing Modes

The 8051 microcontroller has approximately 111 distinct instructions (some sources cite slightly different numbers due to variations in how instructions are counted, e.g., including different operand variations). These instructions are classified into the four groups discussed: Data Transfer, Arithmetic, Logical, and Branching.

The 8051 supports five main addressing modes:

1.  **Immediate Addressing:** Data is part of the instruction.
2.  **Register Addressing:** Operands are registers.
3.  **Direct Addressing:** Operands are in internal RAM or SFRs (00H-FFH).
4.  **Indirect Addressing:** Operands are in memory locations whose addresses are in registers `@R0`, `@R1`, or `@DPTR`.
5.  **Indexed Addressing:** Operands are accessed from program memory using `A + DPTR` or `A + PC`.

**Alignment with Course Outcomes:**
*   **CO1 (K2):** Understanding the instruction set and addressing modes provides a deep insight into how the 8051's internal architecture is utilized for data manipulation and program flow.
*   **CO2 (K5):** The ability to select the appropriate instruction and addressing mode is essential for writing efficient and effective 8051 programs.

---

## 7. Practice Questions (Comprehensive)

1.  **Question:** Explain the difference between `MOV A, 30H` and `MOV A, @R0` in terms of addressing modes and where the data is being fetched from.
    *   **Answer:**
        *   `MOV A, 30H`: Uses **direct addressing**. It fetches data from the internal RAM location whose address is `30H`. The address `30H` is directly embedded in the instruction.
        *   `MOV A, @R0`: Uses **indirect addressing**. It fetches data from the internal RAM location whose address is currently stored in register `R0`. The content of `R0` determines the source of data.

2.  **Question:** What is the primary function of the `DA A` instruction, and when would you typically use it?
    *   **Answer:** `DA A` (Decimal Adjust Accumulator) is used to adjust the Accumulator after an addition operation between two Binary Coded Decimal (BCD) numbers. It converts the binary result in the Accumulator into a BCD format. This is crucial for performing arithmetic operations on BCD data, which is often used in applications requiring display of decimal numbers (e.g., counters, calculators).

3.  **Question:** Write an assembly program to add two 16-bit numbers stored in internal RAM. The first number is at `20H` and `21H` (LSB at `20H`), and the second number is at `22H` and `23H` (LSB at `22H`). Store the 16-bit result at `24H` and `25H` (LSB at `24H`).
    *   **Answer:**
        ```assembly
        ORG 0000H       ; Start at address 0000H

        MOV A, 20H      ; Load LSB of first number into A
        ADD A, 22H      ; Add LSB of second number to A
        MOV 24H, A      ; Store LSB of result

        MOV A, 21H      ; Load MSB of first number into A
        ADDC A, 23H     ; Add MSB of second number with carry to A
        MOV 25H, A      ; Store MSB of result

        END             ; End of program
        ```

4.  **Question:** What is the difference between `RL A` and `RLC A`?
    *   **Answer:**
        *   `RL A` (Rotate Left): Rotates the bits of the Accumulator one position to the left. The bit shifted out of the most significant bit (MSB) is lost, and a 0 is shifted into the least significant bit (LSB). The Carry flag is *not* affected by the rotation itself (though the MSB before rotation might be copied into Carry, depending on the exact implementation, but it's not a through-carry rotation).
        *   `RLC A` (Rotate Left through Carry): Rotates the bits of the Accumulator one position to the left. The bit shifted out of the MSB is shifted into the Carry flag, and the previous state of the Carry flag is shifted into the LSB. This effectively performs a 9-bit rotation using the Accumulator and the Carry flag.

5.  **Question:** What is the purpose of `RETI` and how does it differ from `RET`?
    *   **Answer:**
        *   `RET` (Return from Subroutine): Pops the return address from the stack and jumps to that address. It's used to exit a normal subroutine.
        *   `RETI` (Return from Interrupt): Similar to `RET` in that it pops the return address from the stack. However, `RETI` also has the additional function of **re-enabling interrupt processing** if interrupts were disabled by the interrupt service routine (ISR). This is crucial for allowing nested interrupts or subsequent interrupts of the same priority level. `RETI` is specifically used at the end of an Interrupt Service Routine (ISR).

---

## Conclusion

This module has provided a foundational understanding of the 8051 microcontroller's instruction set, categorized into Data Transfer, Arithmetic, Logical, and Branching groups. We have also explored the various addressing modes that allow the 8051 to access data and control program flow. Mastering these concepts is paramount for developing effective embedded systems.

**Further Reading/Reference:**
*   **Mazidi et al., Chapter 3:** Focus on the detailed descriptions of each instruction and addressing mode.
*   **Ayala & Gadre, Chapter 4:** Provides further explanations and examples of the 8051 instruction set.
*   **Intel 8051 Datasheet:** For precise technical details on instruction timing and bit definitions of SFRs.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
