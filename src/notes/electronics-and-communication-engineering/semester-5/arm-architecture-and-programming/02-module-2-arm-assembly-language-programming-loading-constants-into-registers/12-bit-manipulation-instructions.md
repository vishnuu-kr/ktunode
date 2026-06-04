---
title: "bit manipulation instructions"
subject: "ARM ARCHITECTURE AND PROGRAMMING"
module: "Module 2: Arm assembly language programming: Loading constants into registers"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feaf4"
status: "completed"
scrapedAt: "2026-05-23T17:53:28.583Z"
---
# ARM Architecture and Programming: Module 2 - Arm Assembly Language Programming: Loading Constants into Registers

## Topic: Bit Manipulation Instructions

**Knowledge Level Alignment:**

*   **CO1 (K3):** While this topic primarily focuses on assembly, understanding bit manipulation is fundamental to how certain C constructs (like bitwise operators, masks) are implemented efficiently in embedded systems.
*   **CO2 (K2):** This topic directly addresses the programmer's view of the processor by detailing how individual bits within registers can be accessed and modified using specific instructions.
*   **CO3 (K3):** Understanding the low-level control offered by bit manipulation instructions helps programmers decide when assembly might be necessary for highly optimized bit-level operations that are cumbersome or inefficient in C.

---

### 1. Introduction to Bit Manipulation in ARM Assembly

Bit manipulation refers to the operations performed on individual bits of data. In ARM assembly, these operations are crucial for:

*   **Setting specific bits:** Turning individual bits ON (to 1).
*   **Clearing specific bits:** Turning individual bits OFF (to 0).
*   **Toggling specific bits:** Flipping the state of individual bits (0 to 1, 1 to 0).
*   **Testing specific bits:** Checking if a particular bit is set or not.
*   **Extracting specific bits:** Isolating a group of bits from a larger value.
*   **Shifting bits:** Moving bits to the left or right, which is equivalent to multiplication or division by powers of 2.

These operations are foundational for controlling hardware peripherals, implementing flags, encoding/decoding data, and performing low-level optimizations.

**Reference:** *The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors* by Joseph Yiu (3e) provides extensive detail on the instruction set, including the bit manipulation capabilities. *Fundamentals of Embedded Software with the ARM Cortex M3* by Daniel W Lewis (2e) also covers the practical application of these instructions.

---

### 2. Key Bit Manipulation Instructions

ARM assembly provides a rich set of instructions for bit manipulation. We'll focus on the most common ones relevant to loading and manipulating constants.

#### 2.1. Logical Instructions

These instructions perform bitwise logical operations on operand registers.

**a) AND (Logical AND)**

*   **Purpose:** Performs a bitwise AND operation between two registers. A bit in the result is set to 1 only if the corresponding bits in both source registers are 1.
*   **Syntax:** `AND{<cond>} <Rd>, <Rn>, <Rm>`
    *   `<Rd>`: Destination register.
    *   `<Rn>`: First source register.
    *   `<Rm>`: Second source register.
*   **Example:** Masking to clear bits. If we want to clear the lowest 4 bits of a register `R0`, we can AND it with a mask `0xFFFFFFF0`.
    ```assembly
    MOV R1, #0xFFFFFFF0  // Load the mask into R1
    AND R0, R0, R1       // R0 = R0 AND R1 (clears the lower 4 bits of R0)
    ```
    *   **Concept:** The `AND` operation with a mask of 0s will always result in 0 for those bits, effectively clearing them. A mask of 1s will preserve the original bits.

**b) ORR (Logical OR)**

*   **Purpose:** Performs a bitwise OR operation between two registers. A bit in the result is set to 1 if the corresponding bit in either of the source registers is 1.
*   **Syntax:** `ORR{<cond>} <Rd>, <Rn>, <Rm>`
*   **Example:** Setting specific bits. To set the lowest 4 bits of `R0` to 1, we can OR it with `0x0000000F`.
    ```assembly
    MOV R1, #0x0000000F  // Load the mask into R1
    ORR R0, R0, R1       // R0 = R0 OR R1 (sets the lower 4 bits of R0)
    ```
    *   **Concept:** The `ORR` operation with a mask of 1s will always result in 1 for those bits, effectively setting them. A mask of 0s will preserve the original bits.

**c) EOR (Logical XOR)**

*   **Purpose:** Performs a bitwise Exclusive OR (XOR) operation between two registers. A bit in the result is set to 1 if the corresponding bits in the source registers are different.
*   **Syntax:** `EOR{<cond>} <Rd>, <Rn>, <Rm>`
*   **Example:** Toggling specific bits. To toggle the lowest 4 bits of `R0`, we can XOR it with `0x0000000F`.
    ```assembly
    MOV R1, #0x0000000F  // Load the mask into R1
    EOR R0, R0, R1       // R0 = R0 XOR R1 (toggles the lower 4 bits of R0)
    ```
    *   **Concept:** XORing a bit with 1 flips the bit (0 XOR 1 = 1, 1 XOR 1 = 0). XORing with 0 leaves the bit unchanged (0 XOR 0 = 0, 1 XOR 0 = 1).

**d) BIC (Bit Clear)**

*   **Purpose:** Clears bits in a register that are set in a second register. It performs a bitwise AND between the first register and the bitwise NOT of the second register. `Rd = Rn AND (NOT Rm)`.
*   **Syntax:** `BIC{<cond>} <Rd>, <Rn>, <Rm>`
*   **Example:** Clearing specific bits. This is often more direct than using `AND` for clearing.
    ```assembly
    MOV R1, #0x0000000F  // Load the mask into R1 (bits to clear are 1)
    BIC R0, R0, R1       // R0 = R0 AND (NOT R1) (clears the lower 4 bits of R0)
    ```
    *   **Concept:** `BIC` is equivalent to `AND` with an inverted mask. If `Rm` has a 1 at a bit position, that bit in `Rn` will be cleared in `Rd`.

**e) MVN (Move NOT)**

*   **Purpose:** Loads the bitwise complement (logical NOT) of an immediate value or a register into a destination register.
*   **Syntax:** `MVN{<cond>} <Rd>, <operand2>`
    *   `<operand2>` can be a register or an immediate value.
*   **Example:** Creating a mask with all bits set except for the lowest 4.
    ```assembly
    MVN R1, #0x0000000F  // R1 = NOT(0x0000000F) = 0xFFFFFFF0
    ```
    *   **Concept:** Useful for generating masks where you want to preserve most bits or clear specific bits.

#### 2.2. Shift and Rotate Instructions

These instructions move bits within a register. They are often used in conjunction with logical instructions or to perform arithmetic operations.

**a) LSL (Logical Shift Left)**

*   **Purpose:** Shifts the bits of a register to the left by a specified number of positions. Zeros are shifted in from the right. Left shift by `n` is equivalent to multiplication by $2^n$.
*   **Syntax:** `LSL{<cond>} <Rd>, <Rn>, <Rm>` (shift by register) or `LSL #<imm>` (shift by immediate)
    *   When used as a shift operation *within* another instruction (e.g., `ADD R1, R2, R3, LSL #2`), `<Rm>` is the register to be shifted, and the immediate is the shift amount.
    *   To load a shifted value directly into a register, you often use `LSL` as a *pseudo-instruction* or as part of another instruction that supports shift operands. For loading constants, `MOV` with an immediate shifted value is more common.
*   **Example (as part of another instruction):**
    ```assembly
    MOV R0, #5         // R0 = 5 (0101)
    ADD R1, R0, R0, LSL #1 // R1 = R0 + (R0 << 1) = 5 + (5 * 2) = 5 + 10 = 15
    ```
*   **Example (loading a shifted constant):**
    ```assembly
    MOV R0, #1          // Load 1 (0001)
    LSL R0, R0, #3      // R0 = R0 << 3 = 1 * 8 = 8 (0000 1000)
    // Alternatively, and more commonly for immediate shifts:
    MOV R0, #8          // Directly load 8
    ```
    *   **Important Note:** While `LSL R0, R0, #3` is valid, ARM also supports immediate shifts directly within `MOV`. For example, `MOV R0, #1, LSL #3` loads the value `1 << 3` (which is 8) directly into `R0`. This is very efficient for loading shifted constants.

**b) LSR (Logical Shift Right)**

*   **Purpose:** Shifts the bits of a register to the right by a specified number of positions. Zeros are shifted in from the left. Right shift by `n` is equivalent to integer division by $2^n$ for unsigned numbers.
*   **Syntax:** `LSR{<cond>} <Rd>, <Rn>, <Rm>` (shift by register) or `LSR #<imm>` (shift by immediate)
*   **Example (as part of another instruction):**
    ```assembly
    MOV R0, #20        // R0 = 20 (10100)
    SUB R1, R0, R0, LSR #2 // R1 = R0 - (R0 >> 2) = 20 - (20 / 4) = 20 - 5 = 15
    ```
*   **Example (loading a shifted constant):**
    ```assembly
    MOV R0, #128        // Load 128 (1000 0000)
    LSR R0, R0, #2      // R0 = R0 >> 2 = 128 / 4 = 32 (0010 0000)
    // Alternatively:
    MOV R0, #32
    ```
    *   **Important Note:** Similar to `LSL`, ARM supports `MOV R0, #128, LSR #2` to load the value $128 >> 2$ directly.

**c) ASR (Arithmetic Shift Right)**

*   **Purpose:** Shifts the bits of a register to the right by a specified number of positions. The sign bit (the most significant bit, MSB) is replicated from the left. This preserves the sign of the number, making it suitable for signed integer division.
*   **Syntax:** `ASR{<cond>} <Rd>, <Rn>, <Rm>` (shift by register) or `ASR #<imm>` (shift by immediate)
*   **Example (as part of another instruction):**
    ```assembly
    MOV R0, #-16       // R0 = -16 (assuming 2's complement, e.g., 0xFFFFFFF0)
    SUB R1, R0, R0, ASR #2 // R1 = R0 - (R0 >> 2) = -16 - (-16 / 4) = -16 - (-4) = -12
    ```
    *   **Note:** The behavior of ASR with negative numbers is crucial for signed arithmetic.

**d) ROR (Rotate Right)**

*   **Purpose:** Rotates the bits of a register to the right by a specified number of positions. Bits shifted out from the right are inserted into the leftmost positions.
*   **Syntax:** `ROR{<cond>} <Rd>, <Rn>, <Rm>` (rotate by register) or `ROR #<imm>` (rotate by immediate)
*   **Example:**
    ```assembly
    MOV R0, #0x80000001  // MSB and LSB are set
    ROR R0, R0, #1       // R0 becomes 0x40000000 | 0x00000000 = 0x40000000 (MSB rotated to bit 30)
                       // Actually, ROR #1 moves bit 0 to bit 31.
                       // R0 = 1000...0001
                       // ROR R0, R0, #1 -> 11000...000
    // Let's re-evaluate ROR with a clearer example:
    MOV R0, #0x00000005  // R0 = 0...0101
    ROR R0, R0, #1       // R0 = 10...010 (bit 0 moved to bit 31, other bits shifted right)
    ```
    *   **Concept:** Useful for circular buffers or cryptographic operations.

**e) RRX (Rotate Right Extended)**

*   **Purpose:** Rotates the bits of a register to the right by one position, with the carry flag (C) being shifted into the MSB. This is useful for multi-word shifts and can be combined with `LSR`.
*   **Syntax:** `RRX{<cond>} <Rd>, <Rm>` (implicitly shifts `Rm` and places result in `Rd`, using the current C flag)
    *   It can be used as an instruction on its own or as a shift option for `LSR`. `LSR Rd, Rn, #0` followed by `RRX Rd, Rd` effectively performs a right shift by 1, incorporating the initial carry.
*   **Example:**
    ```assembly
    MOV R0, #0x80000000  // MSB is set
    CLR C               // Assume Carry flag is clear (0)
    RRX R1, R0          // R1 = 01000...0000 (MSB shifted out, 0 shifted in from Carry)

    MOV R0, #0x80000000
    SET C               // Assume Carry flag is set (1)
    RRX R1, R0          // R1 = 11000...0000 (MSB shifted out, 1 shifted in from Carry)
    ```
    *   **Concept:** `RRX` is `ROR #1` but uses the carry flag instead of shifting the LSB into the MSB. It's particularly useful when combined with a standard shift to achieve larger shifts.

#### 2.3. Bit-Specific Instructions (More Advanced but Relevant)

While the focus is on loading constants, it's worth noting instructions that can operate on individual bits or small groups of bits, which are often implemented using the logical and shift operations discussed above.

*   **Test Bits (TST):** Performs a bitwise AND and updates the condition flags (N, Z, C, V) without affecting the destination register. Useful for checking if specific bits are set.
    *   `TST Rn, <operand2>`
*   **Set Bits (SETEND):** Not directly a bit manipulation instruction, but relates to endianness which is a byte-level arrangement.
*   **Bit-Field Instructions (SBFX, UBFX, BFC, BFI):** These are powerful instructions found in some ARM profiles (like Cortex-M) that allow extracting or inserting arbitrary bit fields of specified lengths. While not directly for loading *constants* into registers in a simple way, they are crucial for manipulating data represented in fields.
    *   `UBFX Rd, Rn, #lsb, #width` (Unsigned Bit Field Extract)
    *   `SBFX Rd, Rn, #lsb, #width` (Signed Bit Field Extract)
    *   `BFC Rd, #lsb, #width` (Bit Field Clear)
    *   `BFI Rd, Rn, #lsb, #width` (Bit Field Insert)

    *   **Example (UBFX):** Extract 4 bits starting from bit 2 of `R0` and put them into `R1`.
        ```assembly
        UBFX R1, R0, #2, #4 // R1 = (R0 >> 2) AND 0x0F
        ```

---

### 3. Loading Constants into Registers Using Bit Manipulation Concepts

The `MOV` instruction is the primary way to load immediate constants. However, its effectiveness is enhanced by understanding how constants are represented in binary and how bit manipulation instructions can *create* those constants or modify existing values to achieve desired bit patterns.

*   **Direct Loading:**
    ```assembly
    MOV R0, #123      // Loads the decimal value 123 into R0
    MOV R1, #0x7B     // Loads the hexadecimal value 7B (123) into R1
    ```

*   **Loading Shifted Constants:** The `MOV` instruction with a shift operand is extremely efficient for loading constants that are powers of 2 or multiples of powers of 2.
    ```assembly
    MOV R0, #1, LSL #3  // Loads 1 << 3 = 8 into R0
    MOV R1, #255, LSR #4 // Loads 255 >> 4 = 15 (0xF) into R1
    MOV R2, #0xFF, ROR #8 // Rotates 0xFF by 8 bits. For 32-bit: 0xFF000000
    ```
    *   **Textbook Link:** *Fundamentals of Embedded Software with the ARM Cortex M3* (Lewis, 2e) likely covers the various forms of the `MOV` instruction and its ability to handle immediate shifts, as this is fundamental for initializing registers.

*   **Creating Masks and Patterns:** Bit manipulation instructions like `AND`, `ORR`, `EOR`, and `BIC` are used with constants (loaded via `MOV`) to create specific bit patterns in registers.

    *   **Example: Loading a mask to enable bits 3, 5, and 7**
        *   Bit 3: `0000 1000` (0x08)
        *   Bit 5: `0010 0000` (0x20)
        *   Bit 7: `1000 0000` (0x80)
        ```assembly
        MOV R1, #0x08     // Load bit 3 mask
        ORR R2, R1, #0x20 // Combine with bit 5 mask: R2 = 0x28
        ORR R2, R2, #0x80 // Combine with bit 7 mask: R2 = 0xA8
        ```
        Alternatively, using a single immediate value:
        ```assembly
        MOV R2, #0xA8     // Directly load the combined mask (0000 1000 | 0010 0000 | 1000 0000 = 1010 1000)
        ```

---

### 4. Important Points to Remember

*   **Immediate Values in `MOV`:** The `MOV` instruction can load immediate values. However, there are limitations on the range and complexity of immediate values that can be directly encoded. For more complex immediate values, the `MVN` instruction (to invert) or a sequence of `MOV` and `ORR` instructions might be needed. The ARM Architecture Reference Manual details the encodings for immediate operands.
*   **Register-Controlled Shifts:** While you can shift by an immediate value in `MOV`, other shift instructions (`LSL`, `LSR`, `ASR`, `ROR`) can also use a *register* as the shift amount, providing more dynamic control.
*   **Conditional Execution:** Most ARM instructions can be suffixed with condition codes (e.g., `MOVEQ`, `ANDNE`) to execute them only if a certain condition is met. This is powerful for controlling program flow but less direct for constant loading.
*   **Instruction Encoding:** Understanding how these instructions are encoded in machine code is essential for deeper embedded development or reverse engineering, but for typical assembly programming, the mnemonics suffice.
*   **Cortex-M Specifics:** Cortex-M processors typically support the Thumb-2 instruction set, which includes many of these bit manipulation operations. The exact availability and encoding might vary slightly across different ARM cores. Joseph Yiu's books are excellent resources for core-specific instruction sets.

---

### 5. Practice Questions and Exercises

**Question 1:**
Load the value $5$ into register `R0`. Then, using bit manipulation instructions, shift `R0` left by 2 positions and store the result in `R1`. What is the value in `R1`?

**Answer 1:**
```assembly
MOV R0, #5         // R0 = 5 (0101)
// Option 1: Using LSL with MOV (efficient)
MOV R1, R0, LSL #2 // R1 = 5 << 2 = 5 * 4 = 20 (0001 0100)

// Option 2: Using LSL as a separate instruction
// MOV R1, R0      // Load R0 into R1
// LSL R1, R1, #2  // Shift R1 left by 2

// Option 3: Using ADD (conceptual, not direct bit manipulation instruction for shift)
// ADD R1, R0, R0, LSL #2 // R1 = R0 + (R0 << 2) = 5 + 20 = 25 (Incorrect logic for this question)
```
The value in `R1` is `20`.

**Question 2:**
Assume register `R2` holds the value `0b11001010`.
Write ARM assembly code to clear the 3rd and 6th bits (from the right, starting at bit 0) of `R2` and store the result in `R3`.

**Answer 2:**
The bits to clear are:
*   Bit 3: `0000 1000` (binary) = `0x08` (hex)
*   Bit 6: `0100 0000` (binary) = `0x40` (hex)

We can use `BIC` or `AND` with an inverted mask.

```assembly
MOV R2, #0xCA      // Load the initial value (0b11001010) into R2

// Using BIC: Create a mask with 1s at positions to clear
MOV R3, #0x08      // Mask for bit 3
ORR R3, R3, #0x40  // Combine with mask for bit 6. R3 = 0x08 | 0x40 = 0x48 (0b01001000)
BIC R3, R2, R3     // R3 = R2 AND (NOT R3) -> Clears bits 3 and 6 in R2

// The result in R3 will be 0b10001000 (0x88)
```

Alternatively, using `AND` with an inverted mask:
```assembly
MOV R2, #0xCA      // Load the initial value

// Using AND: Create a mask with 0s at positions to clear
MOV R3, #0xF7      // Mask for bits to keep (0b11110111, NOT 0b00001000)
AND R3, R3, #0xBF  // Combine with mask for bit 6 (0b10111111). R3 = 0xF7 AND 0xBF = 0xB7 (0b10110111)
AND R3, R2, R3     // R3 = R2 AND R3

// This approach requires careful construction of the AND mask.
// The BIC approach is generally cleaner for clearing specific bits.
```

**Question 3:**
Write ARM assembly code to load the value `0x12345678` into register `R4`.

**Answer 3:**
The value `0x12345678` is within the range that can be loaded directly by `MOV` or `MVN`.

```assembly
MOV R4, #0x12345678  // Directly loads the 32-bit immediate value
```
*Note: For larger or more complex immediate values not directly supported by `MOV`, a sequence like `MOV R4, #0x1234` and `ORR R4, R4, #0x5678 << 16` (or similar) might be needed, but `0x12345678` is directly encodable.*

---

This set of notes provides a foundational understanding of bit manipulation instructions in ARM assembly, crucial for tasks ranging from setting peripheral control bits to implementing efficient algorithms. The examples demonstrate how these instructions work and how they complement the `MOV` instruction for loading and manipulating data.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
