---
title: "translating if-then and if-then-else statements to assembly"
subject: "ARM ARCHITECTURE AND PROGRAMMING"
module: "Module 3: Control structures in assembly language: instruction sequencing"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feafa"
status: "completed"
scrapedAt: "2026-05-23T17:53:32.074Z"
---
# ARM Architecture and Programming: Module 3 - Control Structures in Assembly Language: Instruction Sequencing

## Topic: Translating If-Then and If-Then-Else Statements to Assembly

This module focuses on how to implement conditional execution, a fundamental aspect of programming, using ARM assembly language. We will explore how to translate high-level `if-then` and `if-then-else` statements into sequences of ARM instructions, understanding the underlying principles of instruction sequencing and branching.

### Learning Outcomes Addressed:

*   **Translate `if-then` and `if-then-else` statements from C to ARM assembly language.** (Directly addressed)
*   **Understand the role of conditional execution and branching in controlling program flow.** (Underpins the translation process)
*   **Utilize comparison instructions and conditional branch instructions effectively.** (Essential tools for translation)
*   **Analyze the generated assembly code for logic and efficiency.** (Part of understanding the translation)

### Key Concepts and Definitions:

*   **Instruction Sequencing:** The order in which instructions are executed by the processor. Normally, instructions are executed sequentially, one after the other.
*   **Control Flow:** The order in which statements, instructions, or function calls of a program are executed or evaluated.
*   **Conditional Execution:** The ability of certain instructions to execute only if a specific condition is met. ARM architecture supports conditional execution for many instructions.
*   **Branching:** Changing the normal sequential flow of execution by jumping to a different instruction address.
*   **Comparison Instructions:** Instructions that compare the values of two operands and set status flags in the Program Status Register (PSR). The most common is `CMP` (Compare).
*   **Conditional Branch Instructions:** Instructions that cause a branch to occur only if a specific condition, based on the status flags, is true. Examples include `BNE` (Branch if Not Equal), `BEQ` (Branch if Equal), `BLT` (Branch if Less Than), etc.
*   **Status Flags (N, Z, C, V):** Bits in the PSR that reflect the outcome of arithmetic and logical operations.
    *   **N (Negative):** Set if the result is negative.
    *   **Z (Zero):** Set if the result is zero.
    *   **C (Carry):** Set if an unsigned operation resulted in a carry-out or borrow-in.
    *   **V (Overflow):** Set if a signed operation resulted in an overflow.
*   **Program Counter (PC):** A register that holds the address of the next instruction to be fetched and executed. Branch instructions modify the PC.

### Translating If-Then Statements to Assembly:

An `if-then` statement in C executes a block of code only if a given condition is true.

**C Code Example:**

```c
int a = 10;
int b = 5;
int result;

if (a > b) {
    result = a - b;
}
// ... rest of the code
```

**Translation Strategy:**

1.  **Compare the operands:** Use the `CMP` instruction to compare `a` and `b`.
2.  **Branch if the condition is NOT met:** Use a conditional branch instruction to skip the `if` block if the condition (`a > b`) is false.
3.  **Execute the `if` block:** If the condition is true, the program continues to execute the instructions within the `if` block.
4.  **Fall through:** If the condition is false and the branch is taken, execution continues after the `if` block. If the condition is true, execution proceeds through the `if` block and then falls through to the code following it.

**ARM Assembly Translation:**

Assuming `a` is in register `R0` and `b` is in register `R1`, and the `if` block is to be translated to instructions starting at `IF_BLOCK`.

```assembly
    CMP R0, R1      ; Compare R0 (a) and R1 (b). Sets flags based on R0 - R1.
    ; For (a > b), we need to branch if (a <= b).
    ; a <= b is equivalent to (a < b) OR (a == b).
    ; In terms of flags from CMP R0, R1:
    ; a < b  => Z=0, N=1 (negative result) => LT (Less Than) or MI (Minus)
    ; a == b => Z=1                       => EQ (Equal)
    ; So, we branch if LT or EQ. The mnemonic for (NOT GT) is LE (Less Than or Equal).
    BLE IF_SKIP     ; Branch if Less Than or Equal (a <= b). If true, skip the IF_BLOCK.

IF_BLOCK:
    ; Code for the 'if' block (result = a - b;)
    SUB R2, R0, R1  ; R2 = R0 - R1 (result = a - b)
    ; ... potentially store R2 in memory if 'result' is a variable

IF_SKIP:
    ; Code after the 'if' statement
    ; ...
```

**Explanation:**

*   `CMP R0, R1`: This instruction performs `R0 - R1` and updates the PSR flags.
    *   If `R0 < R1`, the result is negative, and the `N` flag will be set. The `Z` flag will be clear.
    *   If `R0 == R1`, the result is zero, and the `Z` flag will be set.
    *   If `R0 > R1`, the result is positive, and the `Z` and `N` flags will be clear. A carry-out will occur for unsigned greater than, and no borrow for unsigned less than.
*   `BLE IF_SKIP`: This is a **conditional branch instruction**. It checks the flags set by `CMP R0, R1`. `BLE` (Branch if Less Than or Equal) is true if the `Z` flag is set (equal) OR if the `N` flag is set and the `V` flag is the same as the `N` flag (signed less than). For `a > b`, the condition is false if `a <= b`. `BLE` is the mnemonic for "less than or equal".
    *   If `a <= b` (condition for not executing the `if` block), `BLE` is true, and execution jumps to `IF_SKIP`.
    *   If `a > b` (condition for executing the `if` block), `BLE` is false, and execution continues to the next instruction (`SUB R2, R0, R1`).

**Important Note on Condition Codes:**

The choice of the conditional branch mnemonic is crucial and depends on how the comparison is performed and what condition is being tested. It's often easier to think: "If the condition is *false*, I want to *skip* the block."

*   If `a > b`: We want to execute. So, if `a <= b`, we branch away.
*   `CMP R0, R1` sets flags for `R0 - R1`.
*   `a <= b` translates to `R0 <= R1`. For signed comparisons, this corresponds to the `LE` condition.
*   So, `BLE IF_SKIP` correctly skips the block if `a <= b`.

### Translating If-Then-Else Statements to Assembly:

An `if-then-else` statement in C executes one block of code if a condition is true and another block if the condition is false.

**C Code Example:**

```c
int x = 20;
int y = 30;
int result;

if (x < y) {
    result = y - x; // If x < y
} else {
    result = x - y; // If x >= y
}
// ... rest of the code
```

**Translation Strategy:**

1.  **Compare the operands:** Use `CMP` to compare `x` and `y`.
2.  **Branch if the `if` condition is false:** Use a conditional branch to jump to the `else` block if the `if` condition (`x < y`) is not met.
3.  **Execute the `if` block:** If the `if` condition is true, execute the `if` block's code.
4.  **Unconditional branch to skip the `else` block:** After executing the `if` block, use an unconditional branch (`B`) to skip the `else` block.
5.  **Execute the `else` block:** If the `if` condition was false and the branch to the `else` block was taken, execute the `else` block's code.
6.  **Fall through:** Execution continues after the `else` block.

**ARM Assembly Translation:**

Assuming `x` is in register `R0` and `y` is in register `R1`, and `result` is stored in `R2`.

```assembly
    CMP R0, R1      ; Compare R0 (x) and R1 (y). Sets flags based on R0 - R1.
    ; For (x < y), we need to branch to ELSE_BLOCK if (x >= y).
    ; x >= y is equivalent to NOT (x < y).
    ; For signed comparison, x < y corresponds to the LT mnemonic.
    ; So, we branch if NOT LT, which is GE (Greater Than or Equal).
    BGE ELSE_BLOCK  ; Branch if Greater Than or Equal (x >= y). If true, jump to ELSE_BLOCK.

IF_BLOCK:
    ; Code for the 'if' block (result = y - x;)
    SUB R2, R1, R0  ; R2 = R1 - R0 (result = y - x)
    B SKIP_ELSE     ; Unconditional branch to skip the ELSE_BLOCK

ELSE_BLOCK:
    ; Code for the 'else' block (result = x - y;)
    SUB R2, R0, R1  ; R2 = R0 - R1 (result = x - y)

SKIP_ELSE:
    ; Code after the 'if-else' statement
    ; ...
```

**Explanation:**

*   `CMP R0, R1`: Compares `R0` and `R1`, setting flags.
*   `BGE ELSE_BLOCK`: If `R0 >= R1` (i.e., the `if` condition `x < y` is false), branch to `ELSE_BLOCK`.
*   `IF_BLOCK:`: If the `BGE` condition was false (meaning `x < y` is true), execution continues here.
*   `SUB R2, R1, R0`: Executes the `if` block's logic.
*   `B SKIP_ELSE`: After the `if` block is executed, we *must* skip the `else` block, so an unconditional branch to `SKIP_ELSE` is used.
*   `ELSE_BLOCK:`: If the `BGE` branch was taken, execution starts here.
*   `SUB R2, R0, R1`: Executes the `else` block's logic.
*   `SKIP_ELSE:`: This label marks the point where execution continues after either the `if` or `else` block has completed.

**Reference to Textbooks:**

*   **Fundamentals of Embedded Software with the ARM Cortex M3 by Daniel W Lewis (Pearson, 2e, 2015):** Chapter 5, "Conditional Execution and Branching," would be highly relevant, detailing how to use comparison and conditional branch instructions. It likely provides examples of translating C control flow to assembly.
*   **The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors by Joseph Yiu (Elsevier, 3e, 2014):** This book offers deep insights into the ARM instruction set. Chapters on data processing instructions (including `CMP`) and branch instructions will be crucial. Yiu's explanations of condition codes and flag manipulation are invaluable.
*   **Embedded Systems with ARM Cortex M Microcontrollers in Assembly and C by Yifeng Zhu (E-man Press, 3e, 2018):** Zhu's text is likely to provide practical, step-by-step translations of C constructs to assembly, with numerous examples specific to Cortex-M microcontrollers.

### Incorporating Content from Textbooks:

*   **Conditional Execution (ARM Feature):** Lewis and Yiu both emphasize that ARM allows many instructions to be conditionally executed. While we're focusing on conditional *branches* here to implement `if-else`, it's good to remember that direct conditional execution of simple operations (e.g., `ADDNE R0, R0, R1`) is also a powerful ARM feature that can sometimes simplify code, though it might not directly map to a full C `if-then` block without careful structuring.
*   **Comparison Flags:** All three books will detail the function of the N, Z, C, and V flags in the PSR, which are the bedrock of conditional branching.
*   **Branch Instruction Mnemonics:** The specific mnemonics like `EQ`, `NE`, `LT`, `LE`, `GT`, `GE`, `HI`, `LS`, `CC`, `CS`, `PL`, `VC`, `VS` are systematically explained in Yiu and Lewis. Zhu will likely demonstrate their practical application.
*   **Efficient Code Generation:** When translating, a good understanding of the assembly generated by C compilers (as discussed in embedded systems texts like Lewis or Zhu) can inform how to write efficient manual assembly.

### Alignment with Course Outcomes:

*   **CO1: Use the features of C that are frequently used in embedded systems (Knowledge Level: K3).** By translating `if-then` and `if-then-else` to assembly, we are demonstrating a deep understanding of how these fundamental C control structures are implemented at a lower level, thus enhancing our ability to use them effectively in embedded contexts.
*   **CO2: Explain a programmer’s view of processor architecture (Knowledge Level: K2).** This topic directly addresses the programmer's view by showing how the internal state of the processor (flags) and the control of the program counter (branches) are used to execute conditional logic. We are seeing the processor as an executor of instructions that manipulate state and flow.
*   **CO3: Choose between programming at the level of assembly or C as appropriate (Knowledge Level: K3).** Understanding the translation process allows us to appreciate the trade-offs. We can see how much more verbose assembly is for control structures compared to C. This knowledge helps in deciding when to use assembly (e.g., for extreme optimization or direct hardware control) and when C is more practical and maintainable.

### Practice Questions/Exercises:

**Question 1:**
Translate the following C code snippet into ARM assembly language. Assume `flag` is a boolean (0 for false, non-zero for true) stored in `R0`, and `value` is an integer stored in `R1`. The code should add 5 to `value` if `flag` is true.

```c
int value = 100;
int flag = 1; // Assume true
int result;

if (flag) {
    result = value + 5;
} else {
    result = value; // Implicitly, if flag is false
}
```

**Answer 1:**

```assembly
    ; Assume R0 holds 'flag' and R1 holds 'value'
    ; Assume R2 will hold 'result'

    CMP R0, #0      ; Compare R0 (flag) with 0. Sets flags based on R0 - 0.
    ; We want to execute the 'if' block if R0 is non-zero (true).
    ; If R0 is zero (false), we want to branch to the else/skip part.
    ; CMP R0, #0 sets Z=1 if R0 is 0, and Z=0 if R0 is non-zero.
    ; So, we branch if Z=1 (Equal to 0).
    BEQ ELSE_SKIP   ; Branch if Equal to 0 (flag is false).

IF_BLOCK:
    ; Code for the 'if' block (result = value + 5;)
    ADD R2, R1, #5  ; R2 = R1 + 5
    B SKIP_ALL      ; Branch to skip the 'else' part

ELSE_SKIP:
    ; Code for the 'else' part (result = value;)
    MOV R2, R1      ; R2 = R1

SKIP_ALL:
    ; Code after the if-else statement
    ; R2 now holds the final result.
```

**Question 2:**
Translate the following C code snippet into ARM assembly language. Assume `count` is stored in `R3` and `threshold` is stored in `R4`.

```c
int count = 50;
int threshold = 75;
int difference;

if (count >= threshold) {
    difference = count - threshold;
} else {
    difference = threshold - count;
}
```

**Answer 2:**

```assembly
    ; Assume R3 holds 'count' and R4 holds 'threshold'
    ; Assume R5 will hold 'difference'

    CMP R3, R4      ; Compare R3 (count) and R4 (threshold). Sets flags based on R3 - R4.
    ; We want to execute the 'if' block if count >= threshold.
    ; So, we branch to the 'else' block if count < threshold.
    ; For CMP R3, R4: R3 < R4 corresponds to the LT mnemonic.
    BLT ELSE_BLOCK  ; Branch if Less Than (count < threshold).

IF_BLOCK:
    ; Code for the 'if' block (difference = count - threshold;)
    SUB R5, R3, R4  ; R5 = R3 - R4
    B SKIP_ELSE     ; Branch to skip the ELSE_BLOCK

ELSE_BLOCK:
    ; Code for the 'else' block (difference = threshold - count;)
    SUB R5, R4, R3  ; R5 = R4 - R3

SKIP_ELSE:
    ; Code after the if-else statement
    ; R5 now holds the difference.
```

### Important Points to Remember:

*   **Condition Codes:** Master the common condition codes (`EQ`, `NE`, `LT`, `LE`, `GT`, `GE`) and how they relate to the `CMP` instruction's results. Remember that `CMP Rn, Operand2` effectively computes `Rn - Operand2` and sets flags.
*   **Branch Direction:** Think about the condition under which you want to *skip* a block of code. This often dictates which conditional branch to use.
*   **Unconditional Branches:** `B label` is essential for ensuring that only one of the `if` or `else` blocks is executed in an `if-then-else` structure.
*   **Register Allocation:** Plan your register usage carefully. Ensure that temporary values used in comparisons or calculations are stored in appropriate registers.
*   **Code Readability:** Use meaningful labels (`IF_BLOCK`, `ELSE_BLOCK`, `SKIP_ELSE`) to make your assembly code understandable.
*   **Cortex-M Specifics:** While the core principles are general ARM, specific ARM instruction sets (like Thumb or Thumb-2) used on Cortex-M devices might have slight variations in instruction encoding or availability, but the logic of conditional branching remains consistent.

This comprehensive set of notes covers the translation of `if-then` and `if-then-else` statements to ARM assembly, referencing key concepts and aligning with the provided learning and course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
