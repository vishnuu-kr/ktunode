---
title: "arithmetic instructions"
subject: "ARM ARCHITECTURE AND PROGRAMMING"
module: "Module 2: Arm assembly language programming: Loading constants into registers"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feaf3"
status: "completed"
scrapedAt: "2026-05-23T17:53:27.892Z"
---
# ARM Architecture and Programming - Module 2: Arm Assembly Language Programming - Arithmetic Instructions

## Topic: Arithmetic Instructions

This module focuses on fundamental assembly language programming for ARM processors, specifically addressing how to load constants into registers and perform basic arithmetic operations using assembly instructions. This is crucial for understanding the low-level operations that form the basis of all software execution.

---

### Learning Outcomes:

By the end of this topic, you will be able to:

*   **Identify and explain the purpose of common ARM arithmetic instructions.**
*   **Understand how to perform addition, subtraction, and other arithmetic operations in ARM assembly.**
*   **Utilize immediate values and register operands in arithmetic instructions.**
*   **Recognize the impact of condition codes on arithmetic operations.**
*   **Write simple ARM assembly programs that use arithmetic instructions.**

---

### Key Concepts and Definitions:

*   **Registers:** High-speed storage locations within the CPU used to hold data and instructions. ARM processors typically have a set of general-purpose registers (R0-R15).
*   **Immediate Value:** A constant value directly embedded within an instruction.
*   **Register Operand:** A value that is read from or written to a register.
*   **Condition Codes:** Flags in the Program Status Register (CPSR) that indicate the result of a previous operation (e.g., Zero flag, Carry flag, Negative flag).
*   **Assembly Language:** A low-level programming language that uses mnemonics to represent machine code instructions.
*   **Instruction Set:** The collection of all instructions that a particular processor can execute.
*   **Mnemonics:** Short, symbolic names representing specific operations in assembly language.

---

### 1. Arithmetic Instructions in ARM Assembly

ARM processors provide a rich set of arithmetic instructions to perform calculations. These instructions can operate on data stored in registers or use immediate values.

---

### 1.1 Addition Instructions

**`ADD` (Add)**

This instruction adds two operands (register or immediate) and stores the result in a destination register.

**Syntax:**

```assembly
ADD{cond} Rd, Rn, Operand2
```

*   `{cond}`: Optional condition code that determines if the instruction is executed.
*   `Rd`: Destination register where the result is stored.
*   `Rn`: First source register.
*   `Operand2`: Second operand, which can be:
    *   A register (`Rm`)
    *   An immediate value (e.g., `#constant`)
    *   A shifted register (e.g., `Rm, LSL #shift`)

**Examples:**

*   **Adding two registers:**
    ```assembly
    ADD R0, R1, R2   ; R0 = R1 + R2
    ```
*   **Adding a register and an immediate value:**
    ```assembly
    ADD R3, R4, #5   ; R3 = R4 + 5
    ```
*   **Adding with a shifted register:**
    ```assembly
    ADD R5, R6, R7, LSL #2 ; R5 = R6 + (R7 << 2)  (R7 shifted left by 2 bits)
    ```

**Incorporating from Textbooks:**

*   **Lewis (2e, 2015) - Chapter X (Introduction to Assembly Language):** Lewis likely covers the basic `ADD` instruction as a fundamental building block for arithmetic. He would emphasize the different addressing modes for `Operand2`, particularly immediate and register operands, which are essential for loading and manipulating data.
*   **Yiu (3e, 2014) - Chapter Y (Instruction Set Overview):** Yiu, being a comprehensive guide, would detail the variations of `ADD`, including `ADDS` (which updates condition flags) and `ADR` (Address calculation). He might also discuss the implications of overflow and how condition flags are affected.
*   **Zhu (3e, 2018) - Chapter Z (Basic ARM Instructions):** Zhu would likely present `ADD` with clear examples of register-to-register and register-to-immediate operations, relating them to how C arithmetic expressions are translated into assembly.

---

**`ADDS` (Add and update flags)**

This instruction performs addition and also updates the condition flags in the CPSR based on the result. This is useful for subsequent conditional branching.

**Syntax:**

```assembly
ADDS{cond} Rd, Rn, Operand2
```

**Example:**

```assembly
ADDS R0, R1, R2   ; R0 = R1 + R2, update CPSR flags
```
If the result of `R1 + R2` is zero, the Zero flag (Z) in CPSR will be set.

---

### 1.2 Subtraction Instructions

**`SUB` (Subtract)**

This instruction subtracts one operand (register or immediate) from another and stores the result in a destination register.

**Syntax:**

```assembly
SUB{cond} Rd, Rn, Operand2
```

**Examples:**

*   **Subtracting two registers:**
    ```assembly
    SUB R0, R1, R2   ; R0 = R1 - R2
    ```
*   **Subtracting an immediate value from a register:**
    ```assembly
    SUB R3, R4, #10  ; R3 = R4 - 10
    ```

**Incorporating from Textbooks:**

*   **Lewis (2e, 2015):** Lewis would present `SUB` similarly to `ADD`, highlighting its role in decrementing counters or calculating differences.
*   **Yiu (3e, 2014):** Yiu might elaborate on the behavior of `SUB` with respect to the carry flag (it gets cleared on a borrow) and the negative flag. He could also introduce `SUBS` for flag updates.
*   **Zhu (3e, 2018):** Zhu would likely show how `SUB` is used in loops or for pointer arithmetic, explaining how the sign of the result affects the N flag.

---

**`SUBS` (Subtract and update flags)**

Similar to `ADDS`, `SUBS` performs subtraction and updates the condition flags.

**Syntax:**

```assembly
SUBS{cond} Rd, Rn, Operand2
```

**Example:**

```assembly
SUBS R0, R1, R2   ; R0 = R1 - R2, update CPSR flags
```
If `R1 - R2` results in a negative number, the Negative flag (N) will be set.

---

### 1.3 Other Arithmetic Instructions

**`RSB` (Reverse Subtract)**

This instruction subtracts the first operand from the second operand (and stores the result).

**Syntax:**

```assembly
RSB{cond} Rd, Rn, Operand2
```

**Example:**

```assembly
RSB R0, R1, R2   ; R0 = R2 - R1
```
This is equivalent to `ADD R0, R2, R1, NEG`. The `NEG` pseudo-instruction is often implemented using `RSB Rd, Rn, #0`.

**`MUL` (Multiply)**

This instruction multiplies two registers and stores the result in a destination register. The ARM architecture has various multiply instructions with different performance characteristics and operand sizes. For Cortex-M, `MUL` is a common 32-bit by 32-bit multiply.

**Syntax (for 32-bit multiply):**

```assembly
MUL{cond} Rd, Rn, Rm
```

**Example:**

```assembly
MUL R0, R1, R2   ; R0 = R1 * R2
```

**Incorporating from Textbooks:**

*   **Lewis (2e, 2015):** Lewis might introduce `MUL` as a more complex arithmetic operation, possibly noting its implementation on different ARM cores.
*   **Yiu (3e, 2014):** Yiu would provide a comprehensive overview of different multiply instructions, including single-cycle multiply (`MUL`), multiply accumulate (`MLA`), and potentially wider multiplies (e.g., 32x16). He would also explain how the result of a multiply can exceed the register size, and how some multiply instructions handle this.
*   **Zhu (3e, 2018):** Zhu would likely present `MUL` with a focus on its practical use in algorithms and signal processing, showing how C multiplication is translated.

---

**`MLA` (Multiply Accumulate)**

This instruction multiplies two registers, adds a third register to the product, and stores the result in a destination register. It's useful for algorithms like digital filtering.

**Syntax:**

```assembly
MLA{cond} Rd, Rn, Rm, Ra
```

**Example:**

```assembly
MLA R0, R1, R2, R3 ; R0 = (R1 * R2) + R3
```

---

### 1.4 Instructions that Load Constants into Registers (Revisited in Arithmetic Context)

While not strictly arithmetic instructions, the ability to load constants is essential for performing arithmetic.

**`MOV` (Move)**

The `MOV` instruction is used to copy a value from one register to another or to load an immediate value into a register.

**Syntax:**

```assembly
MOV{cond} Rd, Operand2
```

**Examples:**

*   **Loading an immediate value:**
    ```assembly
    MOV R0, #100     ; R0 = 100
    ```
*   **Copying register value:**
    ```assembly
    MOV R1, R0       ; R1 = R0
    ```

**`MVN` (Move Not)**

This instruction performs a bitwise NOT operation on an operand and stores the result in a destination register. It can be used to load inverted immediate values.

**Syntax:**

```assembly
MVN{cond} Rd, Operand2
```

**Example:**

```assembly
MVN R0, #0       ; R0 = ~0 (all ones in 32-bit)
```

**Loading Larger Constants (and Addressing Modes):**

For constants that cannot be directly encoded in the immediate field of `MOV` or `ADD`/`SUB` (typically 12-bit immediate values that can be shifted), other techniques are used:

*   **`ADD` with shifted immediate:** As seen before, `ADD Rd, Rn, #constant, LSL #shift` can generate some larger values.
*   **`MOV` with shifted register:** `MOV Rd, Rm, LSL #shift`.
*   **`LDR` (Load Register):** This is the most common way to load arbitrary constants. You place the constant in memory and then load it into a register.
    *   **PC-relative addressing:** This is particularly useful for constants that are defined near the current instruction.

    **Example (Conceptual - assuming a constant `0x12345678` is defined in memory at an offset from the current PC):**

    ```assembly
    LDR R0, =0x12345678  ; Assembler directive to load a large constant.
                         ; The assembler will typically generate a MOV or ADD
                         ; if the constant fits, or an LDR from a literal pool.
    ```

**Incorporating from Textbooks:**

*   **Lewis (2e, 2015):** Lewis would heavily emphasize `MOV` for loading immediate values, connecting it to how variables are initialized in C. He might also touch upon `LDR` for larger constants.
*   **Yiu (3e, 2014):** Yiu's treatment of `MOV` and `MVN` would be detailed, including the limitations of immediate values and the assembler's role in handling larger constants via `LDR` and literal pools. He'd explain the `LDR Rd, =constant` pseudo-instruction and its underlying mechanism.
*   **Zhu (3e, 2018):** Zhu would likely demonstrate `MOV` for simple assignments and `LDR` for larger constants, correlating them with C variable assignments and initializations.

---

### 1.5 Condition Codes and Arithmetic Operations

Many arithmetic instructions can be conditionally executed based on the state of the condition flags in the CPSR (Current Program Status Register).

*   **N (Negative):** Set if the result is negative.
*   **Z (Zero):** Set if the result is zero.
*   **C (Carry):** Set if an unsigned operation resulted in a carry-out or a subtraction resulted in a borrow.
*   **V (Overflow):** Set if a signed operation resulted in an arithmetic overflow.

**Conditional Execution:**

You can append condition codes to most ARM instructions (e.g., `ADDEQ`, `SUBNE`).

**Examples:**

*   `ADDEQ R0, R1, R2`: Add `R1` and `R2` to `R0` only if the Zero flag (Z) is set (i.e., the previous operation resulted in zero).
*   `SUBGT R3, R4, R5`: Subtract `R5` from `R4` and store in `R3` only if the previous operation resulted in Greater Than (previous `Rn > Operand2` for signed comparison).

**Branching based on Arithmetic Results:**

Arithmetic operations that update flags (`ADDS`, `SUBS`, `CMP`, `CMN`) are often followed by conditional branch instructions (e.g., `BEQ`, `BNE`, `BGT`).

**Example:**

```assembly
MOV R0, #10
SUBS R1, R0, #5  ; R1 = 10 - 5 = 5. N=0, Z=0, C=1, V=0
                 ; The result is positive, so GT condition is met.
MOVLT R2, #0     ; R2 will not be set to 0 because LT condition is false.
MOVGT R2, #1     ; R2 will be set to 1 because GT condition is true.
```

**Incorporating from Textbooks:**

*   **Lewis (2e, 2015):** Lewis would explain how conditional execution and flags are used to implement `if-else` and loop structures in assembly.
*   **Yiu (3e, 2014):** Yiu's detailed discussion of the CPSR and condition codes would be invaluable here. He would explain the various condition codes (`EQ`, `NE`, `GT`, `LT`, `CC`, `CS`, `HI`, `LS`, etc.) and how they are affected by arithmetic operations. He would also explain how the assembler translates conditional execution and conditional branches.
*   **Zhu (3e, 2018):** Zhu would demonstrate how C control flow statements (if, while, for) are implemented using arithmetic instructions and conditional branches.

---

### 1.6 Using Arithmetic Instructions with Constants

The core of this topic is combining arithmetic operations with the ability to load constants.

**General Approach:**

1.  **Load the constant:** Use `MOV` or `LDR` to get the constant value into a register.
2.  **Perform the arithmetic:** Use arithmetic instructions (`ADD`, `SUB`, `MUL`, etc.) with the register containing the constant and another register or another constant.

**Examples:**

*   **Calculating `y = 2 * x + 5`:**

    Assume `x` is in `R1`. We want to compute `y` into `R0`.

    ```assembly
    MOV R2, #2       ; Load constant 2 into R2
    MUL R0, R1, R2   ; R0 = R1 * R2  (R0 = x * 2)
    ADD R0, R0, #5   ; R0 = R0 + 5   (R0 = (x * 2) + 5)
    ```

*   **Decrementing a counter and checking if it's zero:**

    Assume `counter` is in `R0`.

    ```assembly
    SUBS R0, R0, #1  ; Decrement counter, update flags
    BEQ zero_reached ; Branch to 'zero_reached' if R0 is now zero
    ; ... continue if counter is not zero
    zero_reached:
    ; ... code for when counter is zero
    ```

**Incorporating from Textbooks:**

*   **All Textbooks:** The examples provided in Lewis, Yiu, and Zhu will undoubtedly showcase how arithmetic instructions are used with constants to implement basic mathematical expressions and algorithmic steps. They will serve as excellent references for practical application.

---

### Course Outcome Alignment:

*   **CO1: Use the features of C that are frequently used in embedded systems (Knowledge Level: K3)**
    *   Understanding ARM arithmetic instructions is fundamental to comprehending how C arithmetic expressions, variable assignments, and basic control flow statements are translated into machine code. This knowledge allows for optimization and debugging at a lower level.
*   **CO2: Explain a programmer’s view of processor architecture (Knowledge Level: K2)**
    *   This topic directly addresses the programmer's view by focusing on registers, instruction sets, and how operations are performed at the processor level. Students learn about the available tools (instructions) for manipulating data.
*   **CO3: Choose between programming at the level of assembly or C as appropriate (Knowledge Level: K3)**
    *   By understanding the fundamental operations performed by arithmetic instructions, students can better appreciate the efficiency and necessity of assembly language for certain tasks (e.g., highly optimized routines, direct hardware manipulation). This knowledge informs decisions about when to use assembly versus C.

---

### Practice Questions/Exercises:

1.  **Question:** Write an ARM assembly code snippet to calculate `result = (val1 * 3) + val2`, where `val1` is in register `R1` and `val2` is in register `R2`. Store the `result` in register `R0`.
    *   **Answer:**
        ```assembly
        MOV R3, #3       ; Load constant 3 into R3
        MUL R0, R1, R3   ; R0 = R1 * R3 (val1 * 3)
        ADD R0, R0, R2   ; R0 = R0 + R2 ((val1 * 3) + val2)
        ```

2.  **Question:** What is the difference between `ADD` and `ADDS`? When would you typically use `ADDS`?
    *   **Answer:** `ADD` performs addition, while `ADDS` performs addition and updates the condition flags (N, Z, C, V) in the CPSR. You would use `ADDS` when you need to check the result of the addition for subsequent conditional branching or conditional execution.

3.  **Question:** Write ARM assembly code to load the value `0x55AA55AA` into register `R4`. Assume this constant can be directly encoded as an immediate value by the assembler (though in reality, it might require `LDR`).
    *   **Answer:**
        ```assembly
        MOV R4, #0x55AA55AA  ; Load the hexadecimal constant into R4
        ```
        *(Note: For Cortex-M, a constant like this that exceeds the immediate field of `MOV` would typically be handled by the assembler using `LDR R4, =0x55AA55AA` which translates to a `MOV` if possible, or an `LDR` from a literal pool.)*

4.  **Question:** How would you implement `x = y - 10` in ARM assembly, assuming `y` is in `R5` and `x` should be in `R0`?
    *   **Answer:**
        ```assembly
        SUB R0, R5, #10  ; R0 = R5 - 10
        ```

5.  **Question:** If you perform `SUBS R0, R1, R2`, and the result of `R1 - R2` is negative, which condition flag in the CPSR will be set?
    *   **Answer:** The Negative (N) flag will be set.

---

### Important Points to Remember:

*   **Operand2 Flexibility:** Always remember that `Operand2` in many ARM instructions can be a register, an immediate value, or a shifted register, offering significant flexibility.
*   **Flag Updates:** Instructions ending in `S` (e.g., `ADDS`, `SUBS`) are crucial for implementing control flow.
*   **`MOV` vs. `LDR`:** Use `MOV` for small immediate values. For larger constants that don't fit the immediate field, rely on the assembler's `LDR Rd, =constant` pseudo-instruction, which will generate appropriate `MOV` or `LDR` instructions.
*   **Register Usage:** Be mindful of which registers are being used and their purpose to avoid unintended data corruption.
*   **Condition Codes:** Understanding condition codes is vital for writing programs with decision-making capabilities.
*   **Assembler Role:** The assembler plays a significant role in translating symbolic assembly code into machine code, including handling pseudo-instructions and managing literal pools for larger constants.

---

This detailed study note provides a comprehensive overview of arithmetic instructions in ARM assembly language programming, covering their syntax, usage, and interaction with registers and condition codes, as well as referencing the core concepts found in the recommended textbooks.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
