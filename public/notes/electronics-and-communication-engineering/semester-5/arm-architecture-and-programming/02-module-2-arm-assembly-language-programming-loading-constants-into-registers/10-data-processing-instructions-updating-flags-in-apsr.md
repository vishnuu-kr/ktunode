---
title: "data processing instructions: updating flags in APSR"
subject: "ARM ARCHITECTURE AND PROGRAMMING"
module: "Module 2: Arm assembly language programming: Loading constants into registers"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feaf2"
status: "completed"
scrapedAt: "2026-05-23T17:53:27.192Z"
---
# ARM Architecture and Programming: Module 2 - Arm Assembly Language Programming

## Topic: Data Processing Instructions: Updating Flags in APSR

### Learning Outcomes:

By the end of this topic, you will be able to:

*   Understand the role of the Application Program Status Register (APSR) in ARM assembly.
*   Identify which data processing instructions affect the APSR flags.
*   Explain how the N, Z, C, and V flags are updated by specific data processing instructions.
*   Utilize flag updates for conditional execution and decision-making in assembly programs.

### Key Concepts and Definitions:

*   **APSR (Application Program Status Register):** A 32-bit register that holds condition flags and interrupt status bits. It's a part of the processor's state and is crucial for controlling program flow.
*   **Condition Flags:** These are individual bits within the APSR that indicate the result of a previous operation. The primary flags relevant to data processing are:
    *   **N (Negative):** Set to 1 if the result of the operation is negative. For signed arithmetic, this indicates the most significant bit (MSB) of the result is 1.
    *   **Z (Zero):** Set to 1 if the result of the operation is zero.
    *   **C (Carry):** Set to 1 if an unsigned arithmetic operation resulted in a carry-out from the most significant bit. For subtraction, it's set if no borrow occurred.
    *   **V (Overflow):** Set to 1 if a signed arithmetic operation resulted in an overflow. This means the result is too large or too small to be represented in the destination register using two's complement.
*   **Data Processing Instructions:** A class of ARM instructions that perform arithmetic and logical operations on data in registers (e.g., `ADD`, `SUB`, `AND`, `ORR`, `MOV`).
*   **Conditional Execution:** The ability of certain ARM instructions to execute only if a specific condition, determined by the state of the condition flags in the APSR, is met.
*   **Side Effects:** Operations that change the state of the processor beyond the primary intended result, such as modifying the condition flags.

### 1. The Role of the APSR in ARM Assembly

The APSR is fundamental to how ARM processors make decisions and control program flow. After any data processing instruction, the condition flags within the APSR are updated based on the outcome of that operation. These flags then become the basis for conditional branching, conditional execution of instructions, and other control mechanisms.

**Reference:** Lewis, *Fundamentals of Embedded Software with the ARM Cortex M3*, Chapter 3.2.2 "The CPSR/APSR", often discusses the status registers and their components, including the condition flags.

**CO2: Explain a programmer’s view of processor architecture (Knowledge Level: K2)**
Understanding the APSR and its flags is a core aspect of a programmer's view of the ARM processor's architecture, as it dictates how operations influence subsequent program behavior.

### 2. Data Processing Instructions and Flag Updates

Most data processing instructions in ARM assembly can be configured to update the condition flags in the APSR. This is a critical feature for implementing logic and control flow.

#### 2.1 Instructions That Typically Update Flags

*   **Arithmetic Instructions:** `ADD` (Add), `SUB` (Subtract), `ADC` (Add with Carry), `SBC` (Subtract with Carry), `RSB` (Reverse Subtract), `AVG` (Average - specific to some architectures).
*   **Logical Instructions:** While `AND`, `ORR`, `EOR`, `BIC` (Bit Clear), `ORN` (OR with NOT) typically do *not* update flags by default, they can be instructed to do so using the `S` suffix.
*   **Move Instructions:** `MOV` (Move) and `MVN` (Move Not) can also update flags with the `S` suffix.
*   **Comparison Instructions:** `CMP` (Compare) and `CMN` (Compare Negative) are specifically designed to update flags without writing a result to a destination register. They perform a subtraction or addition internally and discard the result, leaving only the flag updates.

#### 2.2 The 'S' Suffix: Explicitly Updating Flags

Many ARM data processing instructions have an optional `'S'` suffix. When this suffix is present, the instruction will update the condition flags in the APSR based on its result.

**Syntax:**
`INSTRUCTION{cond} Rd, Rn, Operand2`
If the `S` suffix is added:
`INSTRUCTIONS{cond} Rd, Rn, Operand2`

**Example:**

*   `ADD R0, R1, R2` - Adds the contents of R1 and R2 and stores the result in R0. **Flags are NOT updated by default.**
*   `ADDS R0, R1, R2` - Adds the contents of R1 and R2 and stores the result in R0. **Flags in APSR ARE updated.**

**Reference:** Yiu, *The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors*, Chapter 4 "ARM Instruction Set Overview" and subsequent sections on data processing instructions, will detail the behavior of the `S` suffix.

**CO3: Choose between programming at the level of assembly or C as appropriate (Knowledge Level: K3)**
Understanding how to control flag updates in assembly directly corresponds to how high-level languages like C implement conditional logic and loops, allowing a programmer to make informed decisions about which level is best suited for specific tasks.

### 3. How Flags are Updated by Specific Data Processing Instructions

Let's look at how the N, Z, C, and V flags are affected by common instructions with the `S` suffix.

#### 3.1 `ADDS` (Add with Flags)

*   **Operation:** `Rd = Rn + Operand2`
*   **N Flag:** Set if the result in `Rd` is negative (MSB is 1).
*   **Z Flag:** Set if the result in `Rd` is zero.
*   **C Flag:**
    *   Set if an unsigned addition results in a carry-out from the most significant bit (e.g., `0xFFFFFFFF + 1`).
    *   This flag is crucial for multi-word arithmetic.
*   **V Flag:**
    *   Set if a signed addition results in an overflow. This happens when adding two positive numbers yields a negative result, or adding two negative numbers yields a positive result.
    *   `V = (Rn[31] == Operand2[31]) AND (Rd[31] != Rn[31])` (Simplified logic for MSB)

**Example:**
Assume `R0 = 5` (0x00000005) and `R1 = 3` (0x00000003).
`ADDS R2, R0, R1`
*   Result in `R2` = 8 (0x00000008).
*   N = 0 (Result is positive)
*   Z = 0 (Result is not zero)
*   C = 0 (No carry-out in unsigned addition)
*   V = 0 (No overflow in signed addition)

Assume `R0 = 0xFFFFFFFF` and `R1 = 1`.
`ADDS R2, R0, R1`
*   Result in `R2` = 0x00000000.
*   N = 0
*   Z = 1 (Result is zero)
*   C = 1 (Carry-out occurred in unsigned addition)
*   V = 1 (Signed overflow: adding two large positive numbers resulted in a wrap-around to a negative interpretation).

#### 3.2 `SUBS` (Subtract with Flags)

*   **Operation:** `Rd = Rn - Operand2`
*   **N Flag:** Set if the result in `Rd` is negative (MSB is 1).
*   **Z Flag:** Set if the result in `Rd` is zero.
*   **C Flag:**
    *   Set if no borrow occurred during the subtraction.
    *   For unsigned subtraction, this means `Rn >= Operand2`. If a borrow is needed (i.e., `Rn < Operand2`), the C flag is cleared.
*   **V Flag:**
    *   Set if a signed subtraction results in an overflow. This happens when subtracting a negative number from a positive number results in a negative value (that shouldn't be), or subtracting a positive number from a negative number results in a positive value (that shouldn't be).
    *   `V = (Rn[31] != Operand2[31]) AND (Rd[31] == Rn[31])` (Simplified logic for MSB)

**Example:**
Assume `R0 = 10` (0x0000000A) and `R1 = 3` (0x00000003).
`SUBS R2, R0, R1`
*   Result in `R2` = 7 (0x00000007).
*   N = 0
*   Z = 0
*   C = 1 (No borrow occurred, as 10 >= 3)
*   V = 0

Assume `R0 = 3` (0x00000003) and `R1 = 10` (0x0000000A).
`SUBS R2, R0, R1`
*   Result in `R2` = -7 (0xFFFFFFF9).
*   N = 1 (Result is negative)
*   Z = 0
*   C = 0 (Borrow occurred, as 3 < 10)
*   V = 0

#### 3.3 `CMP` (Compare)

*   **Operation:** `Rn - Rn2` (where `Rn2` is the second operand). The result is discarded, but flags are updated. Effectively `SUBS Rn, Rn, Rn2` but without storing the result.
*   **Purpose:** To compare two values. The flag updates indicate the relationship between the operands.
    *   `Z = 1` implies `Rn == Rn2`.
    *   `C = 1` and `Z = 0` implies `Rn > Rn2` (unsigned).
    *   `C = 0` implies `Rn < Rn2` (unsigned).
    *   For signed comparisons, the N and V flags are also used in conjunction with Z.

**Example:**
Assume `R0 = 10`, `R1 = 3`.
`CMP R0, R1`
*   Internal operation: `10 - 3 = 7`.
*   N = 0, Z = 0, C = 1, V = 0.
    *   This tells us `R0 > R1` (unsigned).

Assume `R0 = 3`, `R1 = 10`.
`CMP R0, R1`
*   Internal operation: `3 - 10 = -7`.
*   N = 1, Z = 0, C = 0, V = 0.
    *   This tells us `R0 < R1` (unsigned).

Assume `R0 = 5`, `R1 = 5`.
`CMP R0, R1`
*   Internal operation: `5 - 5 = 0`.
*   N = 0, Z = 1, C = 1, V = 0.
    *   This tells us `R0 == R1`.

**CO1: Use the features of C that are frequently used in embedded systems (Knowledge Level: K3)**
Understanding `CMP` and flag behavior is directly analogous to how `if` statements and `while` loops work in C, where comparisons lead to different code paths. This knowledge helps in translating C logic to assembly or vice-versa.

#### 3.4 Logical Instructions with 'S' Suffix (`ANDS`, `ORRS`, `EORS`, `BICS`)

*   **Operation:** Perform the logical operation. The `S` suffix causes the flags to be updated.
*   **N Flag:** Set if the MSB of the result is 1.
*   **Z Flag:** Set if the result is entirely zero.
*   **C Flag:** Unaffected by logical operations.
*   **V Flag:** Unaffected by logical operations.

**Example:**
Assume `R0 = 0b10101010` and `R1 = 0b11001100`.
`EORS R2, R0, R1`
*   `R0 = 1010 1010`
*   `R1 = 1100 1100`
*   `R2 = 0110 0110` (Result of XOR)
*   N = 0 (MSB is 0)
*   Z = 0 (Result is not all zeros)
*   C and V are unaffected.

**Important Point to Remember:** Logical operations generally do *not* affect the C or V flags. They primarily affect N and Z.

### 4. Using Flag Updates for Conditional Execution and Decision-Making

The real power of flag updates lies in using them to control program flow. This is achieved through conditional branch instructions and conditional execution of other instructions.

#### 4.1 Conditional Branch Instructions

These instructions allow the program to jump to a different part of the code based on the state of the condition flags.

*   `B<cond> label` (Branch): Unconditional branch.
*   `BEQ label` (Branch if Equal): Branches if Z flag is set.
*   `BNE label` (Branch if Not Equal): Branches if Z flag is clear.
*   `BGT label` (Branch if Greater Than): Branches if Z=0 and N=V. (Signed comparison)
*   `BLT label` (Branch if Less Than): Branches if N!=V. (Signed comparison)
*   `BGE label` (Branch if Greater Than or Equal): Branches if N=V. (Signed comparison)
*   `BLE label` (Branch if Less Than or Equal): Branches if Z=1 or N!=V. (Signed comparison)
*   `BCS label` (Branch if Carry Set): Branches if C flag is set.
*   `BCC label` (Branch if Carry Clear): Branches if C flag is clear.

**Example:** A simple program to check if a number is even or odd.
```assembly
    MOV R0, #5      ; Load number to R0
    ANDS R0, R0, #1 ; Perform R0 AND 1. If R0 is even, R0 & 1 = 0. If odd, R0 & 1 = 1.
                    ; ANDS updates flags.
    BEQ IsEven      ; If Z flag is set (result was 0), branch to IsEven.
    ; If not equal, it's odd
    MOV R1, #1      ; R1 = 1 (representing odd)
    B End           ; Branch to End
IsEven:
    MOV R1, #0      ; R1 = 0 (representing even)
End:
    ; R1 now holds 0 for even, 1 for odd
```

**CO1: Use the features of C that are frequently used in embedded systems (Knowledge Level: K3)**
This example directly maps to a C `if-else` statement. `if (number % 2 == 0)` would be implemented using `ANDS` and `BEQ`.

#### 4.2 Conditional Execution of Other Instructions

Many ARM instructions can be preceded by a condition code. If the condition is met, the instruction executes; otherwise, it's effectively a `NOP` (No Operation). This avoids branches, which can be more efficient.

**Syntax:**
`INSTRUCTION{cond} ...`

**Example:** Incrementing a register only if it's less than 10.
```assembly
    MOV R0, #8      ; R0 = 8
    CMP R0, #10     ; Compare R0 with 10. Sets flags: N=0, Z=0, C=1 (8 is less than 10 unsigned)
    ADDLT R0, R0, #1 ; Add 1 to R0 ONLY IF Less Than (LT condition, C=1 and Z=0)
                    ; R0 becomes 9.

    MOV R0, #12     ; R0 = 12
    CMP R0, #10     ; Compare R0 with 10. Sets flags: N=0, Z=0, C=0 (12 is not less than 10 unsigned)
    ADDLT R0, R0, #1 ; ADDLT will NOT execute because LT condition (C=1 and Z=0) is false.
                    ; R0 remains 12.
```

**CO1: Use the features of C that are frequently used in embedded systems (Knowledge Level: K3)**
This is similar to `if (x < 10) x++;` in C, but implemented without an explicit `if` statement and branch.

**CO2: Explain a programmer’s view of processor architecture (Knowledge Level: K2)**
Understanding conditional execution is a key aspect of the ARM programmer's model, showcasing a distinct feature of the architecture for efficient code.

### 5. Practice Questions and Exercises

**Question 1:**
What is the purpose of the APSR in ARM assembly programming?
**Answer:** The APSR holds the condition flags (N, Z, C, V) and interrupt status bits, which are updated by instructions and used to control program flow and conditional execution.

**Question 2:**
Which suffix is used with ARM data processing instructions to ensure that the condition flags are updated?
**Answer:** The 'S' suffix (e.g., `ADDS`, `SUBS`, `ANDS`).

**Question 3:**
Consider the following instructions:
```assembly
    MOV R0, #0xFFFFFFFE  ; R0 = -2 (signed)
    MOV R1, #2
    ADDS R2, R0, R1      ; R2 = R0 + R1
```
What will be the state of the N, Z, C, and V flags after the `ADDS` instruction?
**Answer:**
*   `R0 = 0xFFFFFFFE`
*   `R1 = 0x00000002`
*   `R2 = 0xFFFFFFFE + 0x00000002 = 0x00000000`
*   **N = 0** (Result is not negative)
*   **Z = 1** (Result is zero)
*   **C = 1** (Unsigned addition produced a carry-out)
*   **V = 1** (Signed addition overflow: -2 + 2 = 0, but if interpreted as the highest positive signed integer + 1, it would overflow to the most negative. In this case, -2 + 2 = 0, which is correct. However, the V flag logic `(Rn[31] == Operand2[31]) AND (Rd[31] != Rn[31])` needs careful application. Here, Rn[31]=1, Operand2[31]=0. They are not equal, so V is 0. Let's re-evaluate the typical C behavior: `-2 + 2 = 0`. This does not overflow. The V flag should be 0. The rule is: V is set if signs of operands are the same and the sign of the result is different. Rn is negative (MSB 1), R1 is positive (MSB 0). They have different signs, so V cannot be set due to this. Thus, **V = 0**.)

**Question 4:**
If you want to check if the result of a subtraction is positive, which flag(s) would you primarily look at and what condition would you use for a branch?
**Answer:** You would primarily look at the N flag and the V flag. For signed numbers, a positive result has N=0. If N=0 and V=0, it's positive. If N=1 and V=1, it's positive (due to overflow from two negatives). A common way to check for "greater than zero" (signed) is using `BGT` or by checking `Z=0` and `N=V`. If you just want to know if it's *not negative*, you'd check for N=0, which means `BPL` (Branch if PLus/Positive) or `BGE` (Branch if Greater than or Equal - if the zero case is included).

**Question 5 (Practical Exercise):**
Write a short ARM assembly code snippet that:
1.  Loads the number 15 into register `R0`.
2.  Loads the number 7 into register `R1`.
3.  Subtracts `R1` from `R0` and updates the flags.
4.  If the result is less than zero, it should store the value `1` in `R2`. Otherwise, it should store `0` in `R2`.
5.  Assume the code runs to completion.

**Answer:**
```assembly
    MOV R0, #15     ; R0 = 15
    MOV R1, #7      ; R1 = 7
    SUBS R2, R0, R1 ; R2 = R0 - R1. Flags are updated.
                    ; R2 = 15 - 7 = 8.
                    ; N=0, Z=0, C=1, V=0 (since 8 is positive and no overflow)

    ; Check if R2 is less than zero (N flag would be 1)
    ; Since R2 is 8, N is 0. The condition for 'less than zero' is not met.
    BLT NegativeResult ; This branch will not be taken.

    ; If the branch is not taken, it means the result was not negative.
    MOV R2, #0      ; Store 0 in R2 (result was not negative)
    B End           ; Branch to the end

NegativeResult:
    MOV R2, #1      ; Store 1 in R2 (result was negative)
End:
    ; Program finishes here. R2 will contain 0.
```

**Self-Correction/Refinement for Question 5:** The prompt asked "If the result is less than zero". My `SUBS` result was 8, so the `BLT` condition (N=1) was false. My code correctly set `R2` to 0. If I had used `MOV R0, #7` and `MOV R1, #15`, then `SUBS R2, R0, R1` would yield `R2 = -8` (N=1, Z=0, C=0, V=0), and `BLT NegativeResult` would be taken, setting `R2` to 1. This demonstrates correct flag usage for conditional branching.

### 6. Important Points to Remember

*   **The `S` suffix is critical:** Without it, most data processing instructions will not update the condition flags.
*   **`CMP` and `CMN` are dedicated flag-updaters:** They are the preferred way to compare values as they don't waste cycles storing a result.
*   **N, Z, C, V flags have specific meanings:** Understand what each flag signifies for both signed and unsigned arithmetic.
*   **Logical operations rarely affect C and V:** They primarily impact N and Z.
*   **Conditional execution is powerful:** Use `INSTRUCTION{cond}` to avoid branches where possible for performance gains.
*   **Careful with signed vs. unsigned comparisons:** The interpretation of N and V flags is crucial for correct signed arithmetic and comparisons.

This concludes the study notes for data processing instructions and APSR flag updates in ARM assembly language programming. Understanding these concepts is fundamental to writing efficient and effective embedded software.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
