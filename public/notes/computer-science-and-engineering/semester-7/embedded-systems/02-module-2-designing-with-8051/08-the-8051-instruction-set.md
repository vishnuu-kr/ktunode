---
title: "The 8051 Instruction Set"
subject: "EMBEDDED SYSTEMS"
module: "Module 2: Designing with 8051 : "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c249"
status: "completed"
scrapedAt: "2026-05-20T17:05:32.773Z"
---
# EMBEDDED SYSTEMS - Module 2: Designing with 8051

## Topic: The 8051 Instruction Set

---

### **Learning Outcomes:**

Upon completion of this topic, you will be able to:

*   **Understand the fundamental categories of the 8051 instruction set.**
*   **Identify and explain the purpose of common data transfer instructions.**
*   **Describe the operation of arithmetic and logical instructions.**
*   **Recognize and explain the functionality of jump and branch instructions.**
*   **Explain the role of control instructions in program execution.**
*   **Differentiate between various addressing modes supported by the 8051.**
*   **Write simple assembly language programs for the 8051 microcontroller.**

---

### **1. Introduction to the 8051 Instruction Set**

The 8051 microcontroller has a rich and versatile instruction set, designed for efficient control and manipulation of data. Understanding these instructions is crucial for programming the 8051 in assembly language. The instructions can be broadly categorized based on their function.

#### **Key Concepts:**

*   **Instruction:** A command given to the microcontroller to perform a specific operation.
*   **Assembly Language:** A low-level programming language that uses mnemonics (short codes) to represent machine instructions.
*   **Opcode:** The part of an instruction that specifies the operation to be performed.
*   **Operand:** The data or memory location on which the operation is to be performed.

#### **Instruction Categories:**

The 8051 instruction set can be divided into the following main categories:

*   **Data Transfer Instructions:** Move data between registers, memory locations, and I/O ports.
*   **Arithmetic Instructions:** Perform mathematical operations like addition, subtraction, multiplication, and division.
*   **Logical Instructions:** Perform bitwise logical operations like AND, OR, XOR, and complement.
*   **Jump and Branch Instructions:** Alter the sequential flow of program execution based on certain conditions.
*   **Control Instructions:** Manage program execution flow, interrupts, and processor status.
*   **Bit-Oriented Instructions:** Operate on individual bits within registers and memory locations.

---

### **2. Data Transfer Instructions**

These instructions are used to move data within the 8051.

#### **2.1. MOV (Move)**

The most common data transfer instruction. It moves data from a source to a destination.

*   **Syntax:** `MOV destination, source`
*   **Operands:**
    *   **Register to Register:** `MOV A, B` (Move the content of register B to register A)
    *   **Immediate Data to Register:** `MOV A, #55h` (Load the hexadecimal value 55 into register A)
    *   **Immediate Data to Memory:** `MOV DPTR, #1000h` (Load the 16-bit immediate value 1000h into the Data Pointer)
    *   **Register to Memory:** `MOV @R0, A` (Move the content of register A to the memory location pointed to by register R0)
    *   **Memory to Register:** `MOV A, 30h` (Move the content of internal RAM address 30h to register A)
    *   **Memory to Memory:** `MOV 40h, 50h` (Move the content of internal RAM address 50h to internal RAM address 40h)
    *   **I/O Port to Register:** `MOV A, P1` (Read the state of Port 1 and store it in register A)
    *   **Register to I/O Port:** `MOV P2, A` (Write the content of register A to Port 2)

#### **2.2. PUSH and POP**

Used to save and retrieve data from the internal RAM stack.

*   **PUSH source:** Pushes the content of the source onto the stack.
    *   `PUSH ACC` (Push the accumulator onto the stack)
    *   `PUSH PSW` (Push the Program Status Word onto the stack)
*   **POP destination:** Pops data from the top of the stack into the destination.
    *   `POP ACC` (Pop the top of the stack into the accumulator)
    *   `POP PSW` (Pop the top of the stack into the Program Status Word)

*   **Important:** The stack pointer (SP) is automatically incremented before data is pushed and decremented after data is popped.

#### **2.3. XCH (Exchange)**

Exchanges the content of two memory locations or registers.

*   **Syntax:** `XCH destination, source`
*   **Examples:**
    *   `XCH A, R0` (Exchange the content of the accumulator with register R0)
    *   `XCH A, 30h` (Exchange the content of the accumulator with internal RAM address 30h)

#### **2.4. XCHD (Exchange Digit)**

Exchanges the lower nibble (4 bits) of the accumulator with the lower nibble of a memory location.

*   **Syntax:** `XCHD A, @Rn` (where Rn is R0 or R1)
*   **Example:** `XCHD A, @R0`

---

### **3. Arithmetic Instructions**

These instructions perform mathematical operations.

#### **3.1. ADD (Add)**

Adds the source operand to the accumulator and stores the result in the accumulator.

*   **Syntax:** `ADD A, source`
*   **Flags affected:** CY (Carry), AC (Auxiliary Carry), OV (Overflow)
*   **Example:** `ADD A, #05h` (Add 5 to the accumulator)

#### **3.2. ADDC (Add with Carry)**

Adds the source operand and the carry flag to the accumulator.

*   **Syntax:** `ADDC A, source`
*   **Flags affected:** CY, AC, OV
*   **Example:** `ADDC A, R1`

#### **3.3. SUBB (Subtract with Borrow)**

Subtracts the source operand and the borrow bit (CY) from the accumulator.

*   **Syntax:** `SUBB A, source`
*   **Flags affected:** CY, AC, OV
*   **Example:** `SUBB A, #10h`

#### **3.4. INC (Increment)**

Increments the operand by 1.

*   **Syntax:** `INC operand`
*   **Operands:** Register, direct memory address, register indirect (`@Rn`), DPTR.
*   **Flags affected:** AC, OV (CY is not affected by INC on registers or memory).
*   **Example:** `INC R2`

#### **3.5. DEC (Decrement)**

Decrements the operand by 1.

*   **Syntax:** `DEC operand`
*   **Operands:** Register, direct memory address, register indirect (`@Rn`).
*   **Flags affected:** AC, OV (CY is not affected by DEC on registers or memory).
*   **Example:** `DEC DPTR` (Decrements the 16-bit DPTR)

#### **3.6. MUL (Multiply)**

Multiplies the accumulator by register B. The 16-bit result is stored in registers A (lower byte) and B (higher byte).

*   **Syntax:** `MUL AB`
*   **Flags affected:** CY (set if result > 255), OV (OV = CY)
*   **Example:** If A = 10h, B = 02h, then after `MUL AB`, A = 14h, B = 00h.

#### **3.7. DIV (Divide)**

Divides the accumulator by register B. The quotient is stored in register A, and the remainder is stored in register B.

*   **Syntax:** `DIV AB`
*   **Flags affected:** CY (set if overflow, i.e., B=0), OV (OV = CY)
*   **Example:** If A = 0Ah, B = 02h, then after `DIV AB`, A = 05h, B = 00h.

---

### **4. Logical Instructions**

These instructions perform bitwise logical operations. The accumulator is always involved as one of the operands.

#### **4.1. ANL (AND Logical)**

Performs a bitwise AND operation between the accumulator and the source.

*   **Syntax:** `ANL A, source`
*   **Flags affected:** CY (cleared), AC (undefined), OV (cleared)
*   **Example:** `ANL A, #0Fh` (Masks the upper nibble of A)

#### **4.2. ORL (OR Logical)**

Performs a bitwise OR operation between the accumulator and the source.

*   **Syntax:** `ORL A, source`
*   **Flags affected:** CY (cleared), AC (undefined), OV (cleared)
*   **Example:** `ORL A, #80h` (Sets the MSB of A)

#### **4.3. XRL (Exclusive OR Logical)**

Performs a bitwise XOR operation between the accumulator and the source.

*   **Syntax:** `XRL A, source`
*   **Flags affected:** CY (cleared), AC (undefined), OV (cleared)
*   **Example:** `XRL A, #FFh` (Inverts the bits of A)

#### **4.4. CPL (Complement)**

Inverts all the bits of the accumulator.

*   **Syntax:** `CPL A`
*   **Flags affected:** CY (undefined), AC (undefined), OV (undefined)
*   **Example:** If A = 0Fh, after `CPL A`, A = F0h.

#### **4.5. RL (Rotate Left)**

Rotates the bits of the accumulator to the left. The leftmost bit is shifted into the carry flag, and the carry flag's content is shifted into the rightmost bit.

*   **Syntax:** `RL A`
*   **Flags affected:** CY (updated), AC (undefined), OV (undefined)
*   **Example:** If A = 10010011b, after `RL A`, A = 00100111b, CY = 1.

#### **4.6. RLC (Rotate Left through Carry)**

Rotates the bits of the accumulator to the left, with the carry flag participating in the rotation. The leftmost bit of A goes into CY, and the original CY goes into the rightmost bit of A.

*   **Syntax:** `RLC A`
*   **Flags affected:** CY (updated), AC (undefined), OV (undefined)
*   **Example:** If A = 10010011b and CY = 1, after `RLC A`, A = 00100111b, CY = 1.

#### **4.7. RR (Rotate Right)**

Rotates the bits of the accumulator to the right. The rightmost bit is shifted into the carry flag, and the carry flag's content is shifted into the leftmost bit.

*   **Syntax:** `RR A`
*   **Flags affected:** CY (updated), AC (undefined), OV (undefined)
*   **Example:** If A = 10010011b, after `RR A`, A = 11001001b, CY = 1.

#### **4.8. RRC (Rotate Right through Carry)**

Rotates the bits of the accumulator to the right, with the carry flag participating in the rotation. The rightmost bit of A goes into CY, and the original CY goes into the leftmost bit of A.

*   **Syntax:** `RRC A`
*   **Flags affected:** CY (updated), AC (undefined), OV (undefined)
*   **Example:** If A = 10010011b and CY = 0, after `RRC A`, A = 01001001b, CY = 1.

---

### **5. Jump and Branch Instructions**

These instructions control the flow of program execution.

#### **5.1. Unconditional Jump (SJMP, LJMP, AJMP)**

These instructions transfer program control to a specified address.

*   **SJMP (Short Jump):** Jumps to a relative address within a -128 to +127 byte range.
    *   **Syntax:** `SJMP label`
*   **LJMP (Long Jump):** Jumps to any address within the 64KB address space.
    *   **Syntax:** `LJMP label`
*   **AJMP (Absolute Jump):** Jumps to any address within the same 2KB page of program memory.
    *   **Syntax:** `AJMP label`

#### **5.2. Conditional Jumps**

These jumps are executed only if a specific condition is met. The condition is usually based on the state of flags in the PSW (Program Status Word).

*   **JZ (Jump if Zero):** Jumps if the accumulator is zero.
    *   **Syntax:** `JZ label`
*   **JNZ (Jump if Not Zero):** Jumps if the accumulator is not zero.
    *   **Syntax:** `JNZ label`
*   **JC (Jump if Carry):** Jumps if the Carry flag (CY) is set.
    *   **Syntax:** `JC label`
*   **JNC (Jump if Not Carry):** Jumps if the Carry flag (CY) is clear.
    *   **Syntax:** `JNC label`
*   **JB (Jump if Bit):** Jumps if a specific bit is set.
    *   **Syntax:** `JB bit_address, label` (e.g., `JB P1.0, GO_HIGH`)
*   **JNB (Jump if Not Bit):** Jumps if a specific bit is clear.
    *   **Syntax:** `JNB bit_address, label`
*   **JBC (Jump if Bit and Clear):** Jumps if a specific bit is set, and then clears that bit.
    *   **Syntax:** `JBC bit_address, label`
*   **DJNZ (Decrement and Jump if Not Zero):** Decrements a register (or memory location) and jumps to the label if the result is not zero.
    *   **Syntax:** `DJNZ Rn, label` (where Rn is R0-R7)
    *   **Example:** `DJNZ R7, LOOP_AGAIN` (Used for loop counters)
*   **CJNE (Compare and Jump if Not Equal):** Compares two operands. If they are not equal, it jumps to the label. It also affects the flags like SUBB.
    *   **Syntax:** `CJNE A, source, label`
    *   **Example:** `CJNE A, #10h, CHECK_VALUE`

#### **5.3. CALL (Call Subroutine)**

Calls a subroutine. It pushes the address of the next instruction onto the stack and then jumps to the subroutine.

*   **Syntax:** `CALL label`

#### **5.4. RET (Return from Subroutine)**

Returns from a subroutine. It pops the return address from the stack and resumes execution from that address.

*   **Syntax:** `RET`

#### **5.5. RETI (Return from Interrupt)**

Returns from an interrupt service routine. It also signals the end of interrupt processing.

*   **Syntax:** `RETI`

---

### **5. Control Instructions**

These instructions manage program execution and processor status.

#### **5.1. NOP (No Operation)**

Does nothing. It consumes one clock cycle.

*   **Syntax:** `NOP`
*   **Use:** Often used for timing delays or as placeholders.

#### **5.2. HALT (Stop CPU)**

Puts the CPU in a low-power mode. The CPU resumes execution when an interrupt occurs or a reset is applied.

*   **Syntax:** `HALT` (Note: The 8051 instruction set does not have a direct `HALT` instruction in the same way some processors do. However, `WAIT` or `SLEEP` modes can be achieved through specific instruction sequences or external hardware controls. For practical purposes in many 8051 contexts, `NOP` can be used as a placeholder, and power-saving is often managed externally or through specific modes not directly exposed as a single assembly instruction like `HALT`.) *Correction: The 8051 does not have a `HALT` instruction. The closest is `POWER DOWN` or `IDLE` which are not standard 8051 mnemonics.* For practical purposes in this context, we'll focus on commonly used control instructions.

#### **5.3. SWAP (Swap Nibbles)**

Swaps the lower and upper nibbles of the accumulator.

*   **Syntax:** `SWAP A`
*   **Example:** If A = 12h (0001 0010b), after `SWAP A`, A = 21h (0010 0001b).

#### **5.4. DI (Disable Interrupts) / EI (Enable Interrupts)**

While not explicit single instructions in the standard 8051 assembly mnemonics, interrupt handling is managed by **setting or clearing the EA bit in the IE (Interrupt Enable) register**. This is typically done using `MOV` instructions.

*   **To Disable Global Interrupts:** `CLR EA` (Clear the EA bit in the IE register)
*   **To Enable Global Interrupts:** `SETB EA` (Set the EA bit in the IE register)

*   **Important:** Individual interrupt sources are enabled/disabled by setting/clearing their respective bits (e.g., ET0, EX0) in the IE register.

#### **5.5. CLR (Clear Bit)**

Clears a specified bit to 0.

*   **Syntax:** `CLR bit_address`
*   **Example:** `CLR P1.0` (Clears bit 0 of Port 1)

#### **5.6. SETB (Set Bit)**

Sets a specified bit to 1.

*   **Syntax:** `SETB bit_address`
*   **Example:** `SETB P0.7` (Sets bit 7 of Port 0)

---

### **6. Bit-Oriented Instructions**

These instructions operate on individual bits.

#### **6.1. SETB, CLR, CPL (as described above)**

#### **6.2. JB, JNB, JBC (Conditional Jumps on Bits, as described above)**

#### **6.3. SETB C / CLR C / CPL C**

These instructions directly manipulate the Carry flag (CY).

*   **SETB C:** Sets the Carry flag to 1.
*   **CLR C:** Clears the Carry flag to 0.
*   **CPL C:** Complements (inverts) the Carry flag.

#### **6.4. ANL C, bit / ORL C, bit**

These perform logical operations on the Carry flag with a bit.

*   **ANL C, bit:** ANDs the Carry flag with a specified bit. The result is stored in the Carry flag.
    *   **Example:** `ANL C, P3.2` (If P3.2 is 0, CY becomes 0)
*   **ORL C, bit:** ORs the Carry flag with a specified bit. The result is stored in the Carry flag.
    *   **Example:** `ORL C, P3.2` (If P3.2 is 1, CY becomes 1)

---

### **7. Addressing Modes**

Addressing modes specify how the operand for an instruction is accessed. The 8051 supports several addressing modes:

#### **7.1. Immediate Addressing**

The operand is a constant value embedded within the instruction itself. Indicated by `#`.

*   **Example:** `MOV A, #30h`

#### **7.2. Register Addressing**

The operand is a register.

*   **Examples:** `MOV A, R0`, `ADD A, R5`

#### **7.3. Direct Addressing**

The operand is a memory location. This can be internal RAM (00h-7Fh), Special Function Registers (SFRs, 80h-FFh), or the lower 128 bytes of external RAM if available.

*   **Examples:** `MOV A, 40h` (Internal RAM), `MOV P1, A` (SFR)

#### **7.4. Register Indirect Addressing**

The operand's address is held in a register. For 8-bit data, `@R0` or `@R1` are used. For 16-bit data (e.g., DPTR), `@A+DPTR` or `MOVX @DPTR` for external memory.

*   **Examples:** `MOV A, @R0` (Accesses internal RAM pointed to by R0), `MOVX A, @DPTR` (Accesses external data memory pointed to by DPTR)

#### **7.5. Indexed Addressing**

The operand address is formed by adding the contents of the Accumulator (A) to the contents of DPTR or PC. Primarily used for accessing look-up tables in program memory.

*   **Syntax:** `MOVC A, @A+DPTR` or `MOVC A, @A+PC`
*   **MOVC:** Move Code - used for accessing program memory.

#### **7.6. Implied Addressing**

The operand is implied by the instruction itself; no explicit operand is given.

*   **Examples:** `RL A`, `CPL A`, `RET`

---

### **8. Practice Questions and Exercises**

**Question 1:**
Which instruction would you use to load the value 05h into register R3?
a) `MOV R3, 05h`
b) `MOV R3, #05h`
c) `MOV #05h, R3`
d) `LOAD R3, 05h`

**Question 2:**
If the accumulator contains `55h` and register B contains `02h`, what will be the content of the accumulator and register B after executing `MUL AB`?

**Question 3:**
Write an assembly program snippet to toggle bit P1.5.

**Question 4:**
What is the purpose of the `DJNZ` instruction?

**Question 5:**
Explain the difference between `RL A` and `RLC A`.

**Question 6:**
Write an assembly program snippet that loads the value `FFh` into the accumulator and then shifts it left twice, using `RLC`. What will be the final value of the accumulator and the carry flag?

**Question 7:**
Which addressing mode is used in the instruction `MOVX A, @DPTR`?

---

### **Answers to Practice Questions**

**Answer 1:**
b) `MOV R3, #05h` (Immediate addressing is used for loading constant values into registers.)

**Answer 2:**
The `MUL AB` instruction multiplies A by B.
A = `55h` = `0101 0101b`
B = `02h` = `0000 0010b`
Result of multiplication (55h * 2h) = `AAh`.
Since the result is less than 256, the lower byte is `AAh` and the higher byte (in B) is `00h`.
So, after `MUL AB`:
Accumulator (A) will contain `AAh`.
Register B will contain `00h`.

**Answer 3:**
To toggle a bit, you can use the `CPL` (Complement) instruction on the specific bit.
```assembly
CPL P1.5
```

**Answer 4:**
The `DJNZ` instruction decrements a specified register (R0-R7) or memory location by one. If the result of the decrement is not zero, program control is transferred to a specified label. It's commonly used for loop counting.

**Answer 5:**
*   `RL A` (Rotate Left): Rotates the bits of the accumulator to the left. The most significant bit (MSB) is shifted into the Carry flag, and the Carry flag's content is shifted into the least significant bit (LSB). The Carry flag is *not* part of the rotation.
*   `RLC A` (Rotate Left through Carry): Rotates the bits of the accumulator to the left. The MSB of the accumulator is shifted into the Carry flag, and the original content of the Carry flag is shifted into the LSB of the accumulator. The Carry flag *is* part of the rotation.

**Answer 6:**
Initial: A = `FFh` (`1111 1111b`), CY = (unknown, but let's assume 0 for clarity)

First `RLC A`:
MSB of A (1) goes to CY.
Original CY (0) goes to LSB of A.
A becomes `1111 1110b` (`FEh`).
CY becomes `1`.

Second `RLC A`:
MSB of A (1) goes to CY.
Original CY (1) goes to LSB of A.
A becomes `1111 1101b` (`FDh`).
CY becomes `1`.

Final value of accumulator: `FDh`
Final value of carry flag: `1`

**Answer 7:**
The addressing mode used in `MOVX A, @DPTR` is **Register Indirect Addressing** (specifically for external data memory access using DPTR).

---

### **Important Points to Remember:**

*   **Accumulator (A) is Central:** Many arithmetic and logical instructions implicitly operate on the accumulator.
*   **PSW Register:** The Program Status Word (PSW) contains important flags like Carry (CY), Auxiliary Carry (AC), and Overflow (OV) that are affected by arithmetic and some logical operations and are used by conditional jumps.
*   **Stack Pointer (SP):** Crucial for subroutine calls and returns. Remember that `PUSH` increments SP before storing, and `POP` retrieves data before decrementing SP.
*   **Addressing Modes:** Choose the correct addressing mode to access data efficiently (Immediate, Register, Direct, Indirect, Indexed).
*   **`MOVX` vs. `MOV`:** `MOV` is used for internal RAM and SFRs, while `MOVX` is used for external data memory access. `MOVC` is used for program memory access (e.g., look-up tables).
*   **Register Banks:** The 8051 has four register banks (Bank 0 to Bank 3). The currently active bank is selected by bits RS1 and RS0 in the PSW.
*   **Assembly Language Structure:** Programs typically consist of labels, mnemonics (instructions), operands, and comments.

---
This covers the core of the 8051 instruction set. For a complete understanding, refer to the official 8051 datasheet and practice writing various small programs to solidify your knowledge.
