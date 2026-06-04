---
title: "Arm assembly language programming: Loading constants into registers"
subject: "ARM ARCHITECTURE AND PROGRAMMING"
module: "Module 2: Arm assembly language programming: Loading constants into registers"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feae9"
status: "completed"
scrapedAt: "2026-05-23T17:53:20.950Z"
---
# ARM ARCHITECTURE AND PROGRAMMING: Module 2 - Arm Assembly Language Programming: Loading Constants into Registers

---

## 1. Introduction to Register Loading in ARM Assembly

In embedded systems development, directly manipulating hardware registers is fundamental. ARM assembly language provides precise control over these operations. Loading constants into registers is a foundational task, enabling us to set initial values, control flags, or provide immediate data for calculations. This module focuses on the instructions and techniques used to achieve this.

**Course Outcome Alignment:**
*   **CO2 (K2):** Explain a programmer's view of processor architecture. Understanding how to load constants is crucial for understanding how the CPU manipulates data and prepares for operations.
*   **CO3 (K3):** Choose between programming at the level of assembly or C as appropriate. Knowing assembly techniques for register manipulation helps in understanding the underlying operations performed by C compilers and when direct assembly might be beneficial.

**Key Concepts:**
*   **Registers:** High-speed storage locations within the CPU used to hold data and instructions. ARM processors have a set of general-purpose registers (R0-R15).
*   **Constants (Immediate Values):** Fixed numerical values that are directly embedded within an instruction.
*   **Instruction Set:** The collection of commands that a processor can understand and execute.

---

## 2. The `MOV` Instruction: The Primary Tool for Loading Constants

The `MOV` (Move) instruction is the most common and versatile instruction for loading immediate values into registers.

**2.1. Basic `MOV` Syntax:**

```assembly
MOV <Rd>, #<immediate_value>
```

*   `<Rd>`: The destination register where the constant will be loaded.
*   `#<immediate_value>`: The constant value to be loaded. The `#` symbol denotes an immediate operand.

**2.2. Limitations of Immediate Values:**

The ARM instruction set has limitations on the range of immediate values that can be directly encoded into a `MOV` instruction. The immediate value is typically 12 bits wide, which can be rotated.

**Example:** Loading the value 5 into R0.

```assembly
MOV R0, #5
```

**Example:** Loading the value 255 into R1.

```assembly
MOV R1, #255
```

**Textbook Reference:**
*   **Lewis (2015):** Discusses the basic `MOV` instruction as a fundamental operation for transferring data between registers and loading immediate values.
*   **Yiu (2014):** Provides detailed explanations of the instruction formats and encoding, including the limitations of immediate operands for `MOV`.

---

## 3. Handling Larger Immediate Values: The `MOV` with Immediate and Barrel Shifter

To load constants larger than what can be directly encoded in a basic `MOV`, the `MOV` instruction can be combined with the ARM processor's "Barrel Shifter." The Barrel Shifter is a combinational circuit that performs shift and rotate operations on an operand before it is used by the ALU or loaded into a register.

**3.1. Immediate Value Encoding:**

The 32-bit immediate value is encoded using an 8-bit immediate value and a rotation count.

*   **8-bit immediate:** The lower 8 bits of the constant.
*   **Rotation count:** A value indicating how many times the 8-bit value should be rotated right. The rotation count is also 4 bits wide and can be an even number (0, 2, 4, ..., 30).

**Formula:** `Immediate_value = (8-bit_immediate) rotated right by (2 * rotation_count)`

This allows for a wider range of constants to be represented.

**Example:** Loading the value 256 into R0.

*   256 in binary is `0000 0000 0000 0000 0000 0001 0000 0000` (32 bits).
*   We can use the 8-bit value `0000 0001` (which is 1).
*   To get 256, we need to rotate this 1 by 8 bits to the left. A left rotation by 8 bits is equivalent to a right rotation by 24 bits.
*   Rotation count = 24 / 2 = 12.
*   Instruction: `MOV R0, #0x01, RRX #12` (The `RRX` indicates rotate right by a specified amount. However, the assembler typically handles this encoding implicitly).
*   The assembler will translate `MOV R0, #256` into the correct encoding using the 8-bit immediate and rotation.

**Example:** Loading the value 0xFF00 into R1.

*   0xFF00 in binary is `1111 1111 0000 0000` (16 bits, let's consider the lower 16 bits for this example).
*   We can use the 8-bit value `1111 1111` (0xFF).
*   To get 0xFF00, we need to rotate this 0xFF left by 8 bits. This means a right rotation by 24 bits.
*   Rotation count = 24 / 2 = 12.
*   Instruction: `MOV R1, #0xFF00` (The assembler will figure out the encoding).

**Important Note:** Assemblers are smart enough to calculate the correct 8-bit immediate and rotation count for you when you provide the full 32-bit constant.

**Textbook Reference:**
*   **Yiu (2014):** Dedicates significant sections to the Barrel Shifter and its role in extending the range of immediate values that can be encoded. It explains the 8-bit immediate and rotation encoding in detail.
*   **Zhu (2018):** Provides practical examples of using `MOV` with immediate values and how the compiler or assembler handles larger constants.

---

## 4. Loading Larger Constants: The `MVN` Instruction

The `MVN` (Move Not) instruction performs a bitwise NOT operation on an immediate value and then loads it into a register. This is particularly useful for loading values with many ones.

**4.1. `MVN` Syntax:**

```assembly
MVN <Rd>, #<immediate_value>
```

*   `<Rd>`: The destination register.
*   `#<immediate_value>`: The immediate value that will be bitwise NOTted.

**Example:** Loading `0xFFFFFFFE` into R0.

*   `0xFFFFFFFE` in binary is `1111 1111 1111 1111 1111 1111 1111 1110`.
*   The bitwise NOT of this is `0000 0000 0000 0000 0000 0000 0000 0001`, which is `1`.
*   So, to load `0xFFFFFFFE`, we can load `1` using `MVN`:

```assembly
MVN R0, #1
```

**Textbook Reference:**
*   **Lewis (2015):** Mentions `MVN` as an instruction for loading complemented values, useful for setting masks or specific bit patterns.

---

## 5. Loading Larger Constants: Load Immediate Value to Register (`LDR` Pseudoinstruction)

For constants that cannot be encoded even with the Barrel Shifter (e.g., values requiring a full 32-bit representation that doesn't fit the rotation scheme), the `LDR` pseudoinstruction is used. Pseudoinstructions are not actual machine instructions but are expanded by the assembler into one or more real instructions.

**5.1. `LDR` Pseudoinstruction for Constants:**

The assembler will typically place the constant value in memory (usually in a literal pool) and then generate a `LDR` instruction to load that value from memory into the register.

**5.2. Syntax:**

```assembly
LDR <Rd>, =<constant_value>
```

*   `<Rd>`: The destination register.
*   `=<constant_value>`: The constant value. The `=` signals to the assembler to treat this as a literal.

**Example:** Loading the value `0x12345678` into R2.

```assembly
LDR R2, =0x12345678
```

**Assembler Action:**
The assembler will:
1.  Place `0x12345678` in a nearby memory location (literal pool).
2.  Generate an instruction like `LDR R2, [PC, #offset]` where `PC` (Program Counter) points to the literal pool, and `#offset` is the distance to the stored constant.

**5.3. Why `LDR` is often preferred:**

Even for values that *could* be loaded with `MOV` and the Barrel Shifter, using `LDR` can sometimes result in simpler code for the programmer, as the assembler handles the complex encoding. It also guarantees that the full 32-bit range of constants can be loaded.

**Textbook Reference:**
*   **Lewis (2015):** Introduces pseudoinstructions and how `LDR` with `=` is used for loading arbitrary 32-bit constants by placing them in memory.
*   **Yiu (2014):** Explains the concept of literal pools and how the `LDR Rx, =value` pseudoinstruction is implemented, often using `MOV` with a shift, or a `LDR` from PC relative addressing.
*   **Zhu (2018):** Demonstrates practical uses of `LDR =value` for loading complex constants and masks.

---

## 6. Practical Examples and Exercises

**Objective:** To reinforce the understanding of loading constants into registers.

**Exercise 1:**
Write ARM assembly code to load the following values into the specified registers:
a) Load the decimal value 100 into register R3.
b) Load the hexadecimal value 0xABCD into register R4.
c) Load the binary value `0b1010101010101010` into register R5.
d) Load the value `0xFF00FF00` into register R6.

**Answers to Exercise 1:**

a)
```assembly
MOV R3, #100
```

b)
```assembly
MOV R4, #0xABCD
```

c)
```assembly
; The value is 16 bits. The assembler can handle binary notation with 0b prefix.
MOV R5, #0b1010101010101010
; Alternatively, as hex:
; MOV R5, #0xAAAA
```

d)
```assembly
; This value requires the Barrel Shifter or LDR pseudoinstruction.
; The assembler will handle the encoding for MOV.
MOV R6, #0xFF00FF00
; If the assembler struggled, one might use:
; LDR R6, =0xFF00FF00
```

**Exercise 2:**
Consider the following assembly code snippet. What are the final values in R0 and R1?

```assembly
MVN R0, #0
MOV R1, #0xFFFFFFFF
```

**Answers to Exercise 2:**

*   `MVN R0, #0`: The bitwise NOT of `0` (all zeros) is `0xFFFFFFFF` (all ones). So, R0 will contain `0xFFFFFFFF`.
*   `MOV R1, #0xFFFFFFFF`: This is a valid immediate value that can be encoded with the Barrel Shifter. R1 will contain `0xFFFFFFFF`.

**Exercise 3:**
Write ARM assembly code to load the value `0x12345678` into R7. Explain why you chose the instruction you did.

**Answer to Exercise 3:**

```assembly
LDR R7, =0x12345678
```

**Explanation:**
The value `0x12345678` is a full 32-bit value. While the Barrel Shifter can represent a wide range of constants, it's not guaranteed to represent *any* arbitrary 32-bit value in a single `MOV` instruction. The `LDR R7, =0x12345678` pseudoinstruction is the most robust way to ensure this arbitrary 32-bit constant is loaded. The assembler will place the value in a literal pool and generate the necessary instructions to load it into R7, often using `LDR R7, [PC, #offset]`.

---

## 7. Alignment and Performance Considerations

**Importance of Alignment:**
While not directly related to loading constants themselves, understanding data alignment is crucial when loading values from memory. `LDR` instructions typically expect data to be aligned to its word size (4 bytes for 32-bit values). Misaligned accesses can lead to performance penalties or even exceptions on some ARM architectures.

**Performance of `MOV` vs. `LDR`:**
*   **`MOV` with immediate:** Generally the fastest as it's a single instruction executed directly by the CPU.
*   **`LDR` from PC relative:** Requires the CPU to read from memory (the literal pool), which might be slightly slower than a direct `MOV` instruction if the constant fits within the `MOV` capabilities. However, for constants that *require* `LDR =value`, it's the only option.

**When to use which:**
*   For small, simple constants (0-255, or values easily formed by rotation), `MOV` is the most efficient.
*   For larger or arbitrary 32-bit constants, `LDR =value` is the standard and most reliable approach.
*   `MVN` is specifically useful for creating bitwise complements.

---

## 8. Summary and Key Takeaways

*   The `MOV <Rd>, #<immediate>` instruction is the primary method for loading constants into ARM registers.
*   The ARM processor uses an 8-bit immediate value and a rotation count to encode a wider range of constants within the `MOV` instruction via its Barrel Shifter.
*   The `MVN <Rd>, #<immediate>` instruction loads the bitwise NOT of an immediate value, useful for creating masks or complemented values.
*   For constants that cannot be represented by `MOV` or `MVN`, the `LDR <Rd>, =<constant>` pseudoinstruction is used. The assembler places the constant in memory and generates an instruction to load it.
*   Understanding the capabilities of `MOV` and the use of `LDR =value` is fundamental for efficient ARM assembly programming.

**Course Outcome Alignment:**
*   **CO1 (K3):** Use the features of C that are frequently used in embedded systems. Understanding these assembly techniques helps in appreciating how C compilers generate code for constant initialization.
*   **CO2 (K2):** Explain a programmer’s view of processor architecture. This module provides a direct insight into how the CPU handles immediate data.
*   **CO3 (K3):** Choose between programming at the level of assembly or C as appropriate. Knowing the underlying assembly operations for constants helps in making informed decisions about when to use assembly for performance or control.

---
This concludes the study notes for loading constants into registers in ARM assembly language programming. Remember to practice these concepts to solidify your understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
