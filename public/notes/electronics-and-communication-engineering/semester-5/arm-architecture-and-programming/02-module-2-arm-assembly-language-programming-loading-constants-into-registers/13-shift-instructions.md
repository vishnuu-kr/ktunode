---
title: "shift instructions"
subject: "ARM ARCHITECTURE AND PROGRAMMING"
module: "Module 2: Arm assembly language programming: Loading constants into registers"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feaf5"
status: "completed"
scrapedAt: "2026-05-23T17:53:29.280Z"
---
# ARM Architecture and Programming: Module 2 - Shift Instructions

## Introduction to Shift Instructions

Shift instructions are fundamental operations in assembly language that allow you to manipulate the bits within a register by moving them to the left or right. These operations are crucial for a variety of tasks, including:

*   **Arithmetic operations:** Multiplication by powers of 2 (left shifts) and division by powers of 2 (right shifts).
*   **Bit manipulation:** Isolating, setting, or clearing specific bits.
*   **Data formatting:** Rearranging data for specific purposes.

This topic focuses on understanding and utilizing the various shift instructions available in ARM assembly language, particularly within the context of loading constants into registers (though their application extends far beyond this).

---

## Learning Outcomes Addressed:

*   **LO1: Understand the purpose and usage of shift instructions in ARM assembly language.**
*   **LO2: Identify and differentiate between various types of shift instructions (Logical Shift Left, Logical Shift Right, Arithmetic Shift Right, Rotate Right).**
*   **LO3: Apply shift instructions to perform bit manipulation and arithmetic operations.**
*   **LO4: Understand the effect of shift operations on condition flags.**

---

## Key Concepts and Definitions:

### Bitwise Operations:
Operations that manipulate individual bits of data. Shifts are a form of bitwise operation.

### Shift Amount:
The number of positions by which bits are moved. This can be an immediate value (a constant) or the value in another register.

### Shifted Register:
The destination register that will hold the result of the shift operation.

### Source Register:
The register whose bits are being shifted.

### Operand:
The data that is being shifted.

### Logical Shift Left (LSL):
*   **Operation:** Bits are shifted to the left. Zeros are inserted into the least significant bit (LSB) positions. Bits shifted off the most significant bit (MSB) are discarded.
*   **Purpose:** Effectively multiplies the operand by 2 for each position shifted.
*   **Syntax:** `LSL Rd, Rm, #n` (where `Rd` is the destination, `Rm` is the source, and `#n` is the immediate shift amount) or `LSL Rd, Rm, Rs` (where `Rs` contains the shift amount).

### Logical Shift Right (LSR):
*   **Operation:** Bits are shifted to the right. Zeros are inserted into the most significant bit (MSB) positions. Bits shifted off the least significant bit (LSB) are discarded.
*   **Purpose:** Effectively divides unsigned numbers by 2 for each position shifted.
*   **Syntax:** `LSR Rd, Rm, #n` or `LSR Rd, Rm, Rs`.

### Arithmetic Shift Right (ASR):
*   **Operation:** Bits are shifted to the right. The original most significant bit (MSB) is replicated into the new MSB positions. This preserves the sign of the number. Bits shifted off the LSB are discarded.
*   **Purpose:** Effectively divides signed numbers by 2 for each position shifted, preserving the sign.
*   **Syntax:** `ASR Rd, Rm, #n` or `ASR Rd, Rm, Rs`.

### Rotate Right (ROR):
*   **Operation:** Bits are shifted to the right. Bits shifted off the LSB are inserted back into the MSB positions.
*   **Purpose:** Useful for circular data manipulation and certain cryptographic algorithms.
*   **Syntax:** `ROR Rd, Rm, #n` or `ROR Rd, Rm, Rs`.

### Rotate Right with Extend (RRX):
*   **Operation:** A special case of ROR where the rotate amount is 1. The Carry flag (C) from the Program Status Register (PSR) is shifted into the MSB position.
*   **Purpose:** Useful for extending the reach of a right shift or for implementing multiplication by odd numbers.
*   **Syntax:** `RRX Rd, Rm` (implicitly rotates `Rm` by 1 using the Carry flag).

### Instruction Format:
Most shift instructions in ARM follow a common format:

`OPCODE {cond} Rd, Rm, Operand2`

*   `OPCODE`: The mnemonic for the shift instruction (e.g., LSL, LSR, ASR, ROR).
*   `{cond}`: Optional condition code for conditional execution.
*   `Rd`: Destination Register.
*   `Rm`: Source Register.
*   `Operand2`: Can be an immediate value (`#n`) or another register (`Rs`) which specifies the shift amount.

---

## Referencing Textbooks:

### Fundamentals of Embedded Software with the ARM Cortex M3 by Daniel W. Lewis (Pearson, 2e, 2015):

Lewis's textbook, particularly in its discussion of assembly language programming for the ARM Cortex-M3, will provide a practical understanding of how shift instructions are used in embedded contexts. He often illustrates these instructions with examples relevant to manipulating peripheral registers or performing basic calculations. You can expect to find explanations of the bitwise nature of these operations and their impact on data.

### The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors by Joseph Yiu (Elsevier, 3e, 2014):

Yiu's book offers a deep dive into the ARM architecture. For shift instructions, expect detailed explanations of their instruction set encoding, their behavior within the pipeline, and their interactions with the condition flags. Yiu often provides low-level insights that are crucial for understanding the precise execution semantics of each shift type. He will likely emphasize the difference between logical and arithmetic shifts, especially concerning signed number representation.

### Embedded Systems with ARM Cortex M Microcontrollers in Assembly and C by Yifeng Zhu (E-man Press, 3e, 2018):

Zhu's book will likely provide clear, step-by-step examples of using shift instructions in both assembly and C. He will connect these instructions to practical embedded system tasks, such as data conversion, bit-field manipulation in hardware registers, and efficient arithmetic. His approach often focuses on the programmer's perspective and how to achieve desired results using these fundamental operations.

---

## Detailed Notes on Shift Instructions:

### 1. Logical Shift Left (LSL)

*   **Purpose:** Multiply by powers of 2.
*   **Operation:** Shifts bits to the left.
    *   LSB is filled with 0.
    *   MSB is discarded.
*   **Example:**
    Let `R0` contain `0x00000005` (binary `...00000101`)
    `LSL R1, R0, #2`
    *   `R0` is shifted left by 2 positions.
    *   The two LSBs (`01`) are lost.
    *   Two `0`s are inserted into the LSB positions.
    *   `R1` will contain `0x00000014` (binary `...00010100`), which is 5 * 4.

*   **Impact on Flags:**
    *   **N (Negative):** Set if the MSB of the result is 1.
    *   **Z (Zero):** Set if the result is all zeros.
    *   **C (Carry):** Holds the last bit shifted out of the MSB.
    *   **V (Overflow):** Not affected by LSL.

*   **Usage in Loading Constants:** Can be used to create larger constants by shifting smaller ones. For example, to load `0x80` into a register: `MOV R0, #1` followed by `LSL R0, R0, #7`.

### 2. Logical Shift Right (LSR)

*   **Purpose:** Divide unsigned numbers by powers of 2.
*   **Operation:** Shifts bits to the right.
    *   MSB is filled with 0.
    *   LSB is discarded.
*   **Example:**
    Let `R0` contain `0x00000014` (binary `...00010100`)
    `LSR R1, R0, #2`
    *   `R0` is shifted right by 2 positions.
    *   The two LSBs (`00`) are lost.
    *   Two `0`s are inserted into the MSB positions.
    *   `R1` will contain `0x00000005` (binary `...00000101`), which is 20 / 4.

*   **Impact on Flags:**
    *   **N (Negative):** Set if the MSB of the result is 1.
    *   **Z (Zero):** Set if the result is all zeros.
    *   **C (Carry):** Holds the last bit shifted out of the LSB.
    *   **V (Overflow):** Not affected by LSR.

### 3. Arithmetic Shift Right (ASR)

*   **Purpose:** Divide signed numbers by powers of 2, preserving the sign.
*   **Operation:** Shifts bits to the right.
    *   MSB is filled with copies of the original MSB (sign extension).
    *   LSB is discarded.
*   **Example:**
    Let `R0` contain `0xFFFFFFF8` (binary `11111111...11111000`), which represents -8 in two's complement.
    `ASR R1, R0, #2`
    *   `R0` is shifted right by 2 positions.
    *   The two LSBs (`00`) are lost.
    *   Two copies of the original MSB (`1`) are inserted into the MSB positions.
    *   `R1` will contain `0xFFFFFFFE` (binary `11111111...11111110`), which represents -2 in two's complement. This is -8 / 4.

    Compare with LSR:
    `LSR R1, R0, #2` (where R0 is `0xFFFFFFF8`)
    *   `R1` would contain `0x3FFFFFFC` (binary `00111111...11111100`), which is incorrect for signed division.

*   **Impact on Flags:**
    *   **N (Negative):** Set if the MSB of the result is 1.
    *   **Z (Zero):** Set if the result is all zeros.
    *   **C (Carry):** Holds the last bit shifted out of the LSB.
    *   **V (Overflow):** Not affected by ASR.

### 4. Rotate Right (ROR)

*   **Purpose:** Circular shift of bits.
*   **Operation:** Shifts bits to the right. Bits shifted off the LSB are inserted into the MSB positions.
*   **Example:**
    Let `R0` contain `0x80000001` (binary `10000000...00000001`)
    `ROR R1, R0, #1`
    *   `R0` is rotated right by 1 position.
    *   The LSB (`1`) is shifted out and inserted into the MSB position.
    *   `R1` will contain `0x40000000` (binary `01000000...00000000`). Wait, this is incorrect. Let's re-examine ROR.

    **Corrected Example for ROR:**
    Let `R0` contain `0x80000001` (binary `10000000...00000001`)
    `ROR R1, R0, #1`
    *   The bit at position 0 (LSB) is `1`.
    *   This `1` is shifted into the MSB (position 31).
    *   All other bits shift right by one.
    *   `R1` will contain `0x40000000` (binary `01000000...00000000`) -> This is still not quite right. Let's be very precise.

    **Precise ROR Example:**
    Let `R0` contain `0x80000001` (binary `1000 0000 0000 0000 0000 0000 0000 0001`)
    `ROR R1, R0, #1`
    1.  The LSB of `R0` is `1`. This bit will become the new MSB.
    2.  The remaining bits `0000 0000 0000 0000 0000 0000 0000 000` (from bit 1 to bit 31) are shifted one position to the right.
    3.  So, the bit that was at bit 1 moves to bit 0, bit 2 to bit 1, ..., bit 31 to bit 30.
    4.  The bit that was at bit 0 (`1`) moves to bit 31 (MSB).
    5.  Result in `R1`: `1100 0000 0000 0000 0000 0000 0000 0000` (binary) = `0xC0000000`.

    Let's try another example:
    Let `R0` contain `0x00000005` (binary `...00000101`)
    `ROR R1, R0, #2`
    *   The LSBs are `01`. These bits are shifted out.
    *   The bit at position 1 (`0`) is shifted out and becomes the new MSB.
    *   The bit at position 0 (`1`) is shifted out and becomes the new bit 31.
    *   The remaining bits `...000001` are shifted right by 2.
    *   The two bits shifted out from the LSB (`01`) are inserted into the MSB positions.
    *   `R1` will contain `0x40000001` (binary `01000000...00000001`).

*   **Impact on Flags:**
    *   **N (Negative):** Set if the MSB of the result is 1.
    *   **Z (Zero):** Set if the result is all zeros.
    *   **C (Carry):** Holds the last bit shifted out of the LSB. This is the bit that gets rotated into the MSB.
    *   **V (Overflow):** Not affected by ROR.

### 5. Rotate Right with Extend (RRX)

*   **Purpose:** Similar to ROR by 1, but uses the Carry flag as the bit shifted into the MSB.
*   **Operation:** Shifts bits of `Rm` to the right by 1 position. The Carry flag (C) is shifted into the MSB. The LSB is discarded and becomes the new Carry flag value.
*   **Syntax:** `RRX Rd, Rm`
*   **Example:**
    Let `R0` contain `0x00000005` (binary `...00000101`) and the Carry flag (C) be `1`.
    `RRX R1, R0`
    1.  `R0` is shifted right by 1. The LSB is `1`.
    2.  The Carry flag value (`1`) is shifted into the MSB position.
    3.  The LSB (`1`) becomes the new Carry flag value.
    4.  `R1` will contain `0x80000002` (binary `10000000...00000010`). The Carry flag remains `1`.

    Let `R0` contain `0x00000005` (binary `...00000101`) and the Carry flag (C) be `0`.
    `RRX R1, R0`
    1.  `R0` is shifted right by 1. The LSB is `1`.
    2.  The Carry flag value (`0`) is shifted into the MSB position.
    3.  The LSB (`1`) becomes the new Carry flag value.
    4.  `R1` will contain `0x00000002` (binary `00000000...00000010`). The Carry flag becomes `1`.

*   **Impact on Flags:**
    *   **N (Negative):** Set if the MSB of the result is 1.
    *   **Z (Zero):** Set if the result is all zeros.
    *   **C (Carry):** Holds the last bit shifted out of the LSB.
    *   **V (Overflow):** Not affected by RRX.

---

## Shift Instructions with Register Shift Count

*   Shift amount can also be specified by the content of a register. This is often referred to as a *variable shift*.
*   **Syntax:** `OPCODE {cond} Rd, Rm, Rs`
*   **Example:**
    `MOV R0, #5`       // R0 = 5
    `MOV R1, #2`       // R1 = 2
    `LSL R2, R0, R1`   // R2 = R0 << R1 (R2 = 5 << 2 = 20)

    `MOV R0, #0x14`    // R0 = 20 (0001 0100)
    `MOV R1, #2`       // R1 = 2
    `LSR R2, R0, R1`   // R2 = R0 >> R1 (R2 = 20 >> 2 = 5)

*   **Important Note:** When the shift count is in a register (`Rs`), the value in `Rs` is typically masked to the lower 5 bits (for 32-bit registers). This means a shift count of 0-31 is valid. A shift count of 32 or more will result in a shift of 0 (or the count modulo 32). Consult the specific ARM processor documentation for exact behavior.

---

## Shift by Immediate as part of other instructions (e.g., `MOV`)

The `MOV` instruction can also perform shifts by an immediate value. This is a very common and efficient way to load shifted constants.

*   **Syntax:** `MOV Rd, Rm, SHIFT_TYPE #<shift_amount>`
*   **Examples:**
    *   `MOV R0, R1, LSL #2` ; R0 = R1 << 2
    *   `MOV R0, R1, LSR #1` ; R0 = R1 >> 1 (unsigned)
    *   `MOV R0, R1, ASR #3` ; R0 = R1 >> 3 (signed)

This form of `MOV` instruction is powerful as it combines data movement with a shift in a single instruction cycle, making it highly efficient.

---

## Loading Constants into Registers using Shift Instructions

Shift instructions are crucial for constructing constants when the required value cannot be directly represented by the immediate field of a single `MOV` or `MVN` instruction.

**Scenario:** Load the value `0x80000000` into a register (e.g., `R0`).

*   **Direct `MOV` limitation:** `MOV` instructions typically have a limited immediate range (e.g., 8-bit immediate rotated within 32 bits). `0x80000000` is too large to be loaded directly.

*   **Solution using `MOV` and `LSL`:**
    ```assembly
    ; Load the value 1 into R0
    MOV R0, #1

    ; Shift R0 left by 31 positions
    ; The result will be 1 shifted left 31 times, which is 0x80000000
    LSL R0, R0, #31
    ```

*   **Alternative using `MOV` with immediate shift:**
    ```assembly
    ; Load the value 1 into R0 and shift it left by 31 positions in one go
    MOV R0, #1, LSL #31
    ```
    This is more efficient as it's a single instruction.

**Scenario:** Load the value `0x00000003` into `R1`.

*   **Solution using `ORR` and shifts (if multiple bits are needed):**
    If we want to load `0x3` (binary `11`), we could do:
    ```assembly
    MOV R0, #1      ; R0 = 0x00000001 (binary ...0001)
    LSL R0, R0, #1  ; R0 = 0x00000002 (binary ...0010)
    MOV R2, #1      ; R2 = 0x00000001 (binary ...0001)
    ORR R1, R0, R2  ; R1 = R0 | R2 = 0x00000003 (binary ...0011)
    ```
    This demonstrates how shifts can be combined with other instructions to build complex constants.

---

## Alignment and Shifted Operands

When loading constants or manipulating data, it's important to remember that many ARM instructions can take a *shifted register* as their second operand. This allows for operations like:

`ADD R0, R1, R2, LSL #2` ; R0 = R1 + (R2 << 2)

This feature is very powerful for efficient calculations and data manipulation. While this topic is about loading constants, understanding this broader capability of shifted operands is beneficial.

---

## Connection to Course Outcomes:

*   **CO1: Use the features of C that are frequently used in embedded systems (Knowledge Level: K3)**
    *   Shift operations are directly translatable to C's `<<`, `>>`, and bitwise operators. Understanding assembly shifts helps in writing efficient C code for embedded systems where bit manipulation is common (e.g., configuring hardware registers).
    *   Example: `*(volatile uint32_t*)(0x40010000) = 0x01 << 8;` in C is equivalent to an assembly sequence that might involve `MOV` and `LSL`.

*   **CO2: Explain a programmer’s view of processor architecture (Knowledge Level: K2)**
    *   Shift instructions demonstrate how the processor manipulates data at the bit level. Understanding the difference between LSL, LSR, and ASR clarifies how signed and unsigned numbers are handled, which is a core aspect of processor architecture.
    *   The impact on condition flags (N, Z, C) is a direct exposure to the processor's internal state management.

*   **CO3: Choose between programming at the level of assembly or C as appropriate (Knowledge Level: K3)**
    *   For highly optimized bit manipulations, bit-field extraction, or direct hardware register control where specific bits need to be set or cleared precisely, assembly language with shift instructions can be more efficient and direct than C.
    *   Understanding the assembly implementation allows a programmer to make an informed decision about when C's higher-level abstractions are sufficient and when direct assembly access might be necessary for performance or control.

---

## Important Points to Remember:

*   **LSL:** Multiply by powers of 2, fills with 0s.
*   **LSR:** Divide unsigned by powers of 2, fills with 0s.
*   **ASR:** Divide signed by powers of 2, preserves sign (fills with MSB).
*   **ROR:** Circular shift, bits wrap around.
*   **RRX:** Rotate right by 1 using the Carry flag.
*   Shift amounts can be immediate (`#n`) or from a register (`Rs`).
*   Shift instructions are often combined with `MOV` to efficiently load shifted immediate values.
*   Always consider the data type (signed vs. unsigned) when choosing between LSR and ASR.
*   Pay close attention to the Carry flag (C) as it stores the bit shifted out.

---

## Practice Questions and Exercises:

**Question 1:**
What is the result of the following ARM assembly instructions? Assume `R0` initially contains `0xC0000000`.
```assembly
LSR R1, R0, #4
```
*   a) `0xF0000000`
*   b) `0x30000000`
*   c) `0xC0000000`
*   d) `0x0C000000`

**Answer 1:**
`R0` is `1100 0000 0000 0000 0000 0000 0000 0000`.
`LSR R1, R0, #4`: Shifts right by 4. Zeros are inserted into the MSBs.
Result: `0000 1100 0000 0000 0000 0000 0000 0000`
This is `0x0C000000`.
**Correct Answer: d)**

**Question 2:**
Which instruction would you use to divide a signed number stored in `R0` by 8 (which is $2^3$)?
*   a) `LSL R1, R0, #3`
*   b) `LSR R1, R0, #3`
*   c) `ASR R1, R0, #3`
*   d) `ROR R1, R0, #3`

**Answer 2:**
To divide a signed number by a power of 2, you must use the Arithmetic Shift Right (ASR) instruction to preserve the sign bit.
**Correct Answer: c)**

**Question 3:**
If `R0` contains `0xAAAAAAAA` and the Carry flag is `1`, what is the value in `R1` after executing `RRX R1, R0`?
*   a) `0x55555555`
*   b) `0xD5555555`
*   c) `0xAAAAAAAA`
*   d) `0x15555555`

**Answer 3:**
`R0` is `1010 1010 1010 1010 1010 1010 1010 1010` (binary).
The Carry flag is `1`.
`RRX R1, R0`:
1.  Shift `R0` right by 1. The LSB is `0`.
2.  Insert the Carry flag (`1`) into the MSB.
3.  The LSB (`0`) becomes the new Carry flag.
Result in `R1`: `1101 0101 0101 0101 0101 0101 0101 0101` (binary).
This is `0xD5555555`. The new Carry flag is `0`.
**Correct Answer: b)**

**Question 4:**
Write an ARM assembly snippet to load the value `0x00000040` into `R2`.

**Answer 4:**
```assembly
; Load the value 1 into R0
MOV R0, #1
; Shift R0 left by 6 positions (2^6 = 64)
LSL R2, R0, #6
```
Or more efficiently:
```assembly
; Load the value 1 into R2 and shift it left by 6 positions in one instruction
MOV R2, #1, LSL #6
```

**Question 5:**
Explain the difference between `LSR R0, R1, #1` and `ASR R0, R1, #1` if `R1` contains `0x80000000` (the most negative signed integer in 32-bit two's complement).

**Answer 5:**
*   `R1` = `0x80000000` (binary `1000 0000 ... 0000 0000`). This represents the most negative signed number.

*   **`LSR R0, R1, #1`**:
    *   Shifts `R1` right by 1. The LSB (`0`) is discarded.
    *   A `0` is inserted into the MSB.
    *   Result in `R0`: `0100 0000 ... 0000 0000` (binary) = `0x40000000`. This is a positive number.

*   **`ASR R0, R1, #1`**:
    *   Shifts `R1` right by 1. The LSB (`0`) is discarded.
    *   The original MSB (`1`) is replicated and inserted into the MSB position (sign extension).
    *   Result in `R0`: `1100 0000 ... 0000 0000` (binary) = `0xC0000000`. This is a negative number.

The key difference is that `ASR` preserves the sign of the number, whereas `LSR` treats the number as unsigned and inserts a zero, potentially changing the interpretation of the number's sign. For signed division by 2, `ASR` is correct.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
