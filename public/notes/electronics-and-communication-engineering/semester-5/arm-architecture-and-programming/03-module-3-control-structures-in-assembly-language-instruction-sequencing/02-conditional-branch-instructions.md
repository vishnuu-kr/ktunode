---
title: "conditional branch instructions"
subject: "ARM ARCHITECTURE AND PROGRAMMING"
module: "Module 3: Control structures in assembly language: instruction sequencing"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feaf9"
status: "completed"
scrapedAt: "2026-05-23T17:53:31.377Z"
---
# ARM Architecture and Programming: Module 3 - Control Structures in Assembly Language: Instruction Sequencing

## Topic: Conditional Branch Instructions

This module focuses on how to control the flow of execution in ARM assembly language. Conditional branch instructions are fundamental to creating programs that can make decisions based on the state of the processor.

---

### Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Understand the concept of conditional execution in ARM assembly.
*   Identify and explain the purpose of various conditional branch instructions.
*   Utilize conditional branch instructions to implement decision-making constructs (e.g., `if-else`, `while`, `for` loops) in assembly.
*   Explain how conditional execution affects instruction sequencing and program flow.
*   Relate the use of conditional branch instructions to higher-level language constructs (CO1, CO3).
*   Describe the programmer's view of how conditional branches affect program execution (CO2).

---

### Key Concepts and Definitions

*   **Instruction Sequencing:** The order in which instructions are executed by the processor. By default, instructions are executed sequentially from the top of the program to the bottom.
*   **Control Structures:** Programming constructs that alter the default sequential execution of instructions, enabling decision-making, looping, and subroutine calls.
*   **Conditional Execution:** The ability of an instruction to execute only if a specific condition is met. In ARM, this is primarily achieved through conditional branch instructions.
*   **Condition Codes:** Flags stored in the **Application Program Status Register (APSR)** that indicate the outcome of arithmetic and logical operations. These flags are crucial for making decisions in conditional branches.

---

### The APSR and Condition Codes

The APSR register holds status flags that are updated by many arithmetic and logical instructions. The primary flags used for conditional branching are:

| Flag | Name    | Description                                         |
| :--- | :------ | :-------------------------------------------------- |
| N    | Negative | Set if the result of an operation is negative.      |
| Z    | Zero    | Set if the result of an operation is zero.          |
| C    | Carry   | Set if an unsigned overflow occurred (or borrow).   |
| V    | Overflow | Set if a signed overflow occurred.                  |

**Important Point:** The Z flag is particularly important for checking equality. If an operation results in zero, the Z flag is set.

---

### Conditional Branch Instructions

Conditional branch instructions allow the program to jump to a different location in the code based on the state of the condition code flags in the APSR. The general format of a conditional branch instruction is:

`B<condition> <label>`

Where:

*   `B`: The base mnemonic for a branch instruction.
*   `<condition>`: A two-letter suffix that specifies the condition to be checked.
*   `<label>`: The target address (or label) to jump to if the condition is met.

If the specified condition is **true**, the processor fetches the next instruction from the `<label>`. If the condition is **false**, the processor continues with the next instruction in the current sequential flow.

---

### Common Conditional Codes and Their Meanings

Here are some of the most frequently used conditional codes:

| Mnemonic | Condition Name      | Meaning                                     | Tested Flags (APSR) |
| :------- | :------------------ | :------------------------------------------ | :------------------ |
| **EQ**   | Equal               | Z == 1                                      | Z                   |
| **NE**   | Not Equal           | Z == 0                                      | Z                   |
| **CS**   | Carry Set (Unsigned Higher or Same) | C == 1                                      | C                   |
| **CC**   | Carry Clear (Unsigned Lower)     | C == 0                                      | C                   |
| **MI**   | Minus (Negative)    | N == 1                                      | N                   |
| **PL**   | Plus (Non-negative) | N == 0                                      | N                   |
| **VS**   | Overflow            | V == 1                                      | V                   |
| **VC**   | No Overflow         | V == 0                                      | V                   |
| **HI**   | Unsigned Higher     | C == 1 AND Z == 0                           | C, Z                |
| **LS**   | Unsigned Lower or Same | C == 0 OR Z == 1                            | C, Z                |
| **GE**   | Signed Greater Than or Equal | (N == V)                                    | N, V                |
| **LT**   | Signed Less Than    | (N != V)                                    | N, V                |
| **GT**   | Signed Greater Than | (Z == 0 AND N == V)                         | Z, N, V             |
| **LE**   | Signed Less Than or Equal | (Z == 1 OR N != V)                          | Z, N, V             |

**Reference:** *Fundamentals of Embedded Software with the ARM Cortex M3* by Daniel W Lewis (Pearson, 2e, 2015) provides a good overview of these conditional codes and their usage in Chapter 5. *The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors* by Joseph Yiu (Elsevier, 3e, 3rd ed.) also extensively covers processor status flags and conditional execution in its early chapters.

---

### Implementing Control Structures with Conditional Branches

Conditional branch instructions are the building blocks for implementing higher-level control structures.

#### 1. If-Then Statements

An `if` statement checks a condition and executes a block of code if the condition is true.

**High-Level C Example:**

```c
if (a == b) {
    // do something
}
```

**Assembly Implementation:**

```assembly
; Assume a is in R0, b is in R1
CMP R0, R1      ; Compare R0 and R1. Sets flags based on the result (R0 - R1).
BEQ  are_equal  ; Branch if Equal (Z=1) to the 'are_equal' label.

; Code here executes if a != b

are_equal:
; Code here executes if a == b
```

**Explanation:**

*   `CMP R0, R1`: The `CMP` (Compare) instruction subtracts `R1` from `R0` and updates the APSR flags (N, Z, C, V) accordingly. It's equivalent to `SUBS R0, R0, R1` but discards the result of the subtraction.
*   `BEQ are_equal`: If the result of the comparison was zero (meaning `R0` equals `R1`), the `Z` flag is set, and `BEQ` (Branch if Equal) causes a jump to the `are_equal` label.

#### 2. If-Then-Else Statements

An `if-else` statement executes one block of code if a condition is true and another block if it's false.

**High-Level C Example:**

```c
if (x > 5) {
    // code block 1
} else {
    // code block 2
}
```

**Assembly Implementation (Signed comparison):**

```assembly
; Assume x is in R0
MOV R1, #5      ; Load the value 5 into R1
CMP R0, R1      ; Compare R0 (x) with R1 (5)
BGT  block1     ; Branch if Greater Than (signed) to block1

; Code here executes if x <= 5 (the "else" block)
    BL block2     ; Branch and Link to block2 (or simply B block2 if no return is needed)
    B end_if      ; Branch to the end of the if-else structure

block1:
; Code here executes if x > 5 (the "if" block)

end_if:
; Code continues here after the if-else
```

**Explanation:**

*   `CMP R0, R1`: Compares `R0` with `R1`.
*   `BGT block1`: If `R0` is greater than `R1` (signed comparison), branch to `block1`.
*   If the `BGT` condition is false, execution falls through. The code for the "else" part is then executed.
*   `B end_if`: After the "else" block, a branch to `end_if` is needed to skip the "if" block.

#### 3. While Loops

A `while` loop repeatedly executes a block of code as long as a condition remains true.

**High-Level C Example:**

```c
int i = 0;
while (i < 10) {
    // do something with i
    i++;
}
```

**Assembly Implementation:**

```assembly
    MOV R4, #0      ; Initialize i = 0 (using R4 for i)
    MOV R5, #10     ; Load the loop limit (10) into R5

loop_start:
    CMP R4, R5      ; Compare i with the limit
    BHS  loop_end   ; Branch if Higher or Same (i >= 10) to loop_end

    ; --- Start of loop body ---
    ; Example: print i or do some calculation
    ; ...
    ADD R4, R4, #1  ; Increment i (i++)
    ; --- End of loop body ---

    B loop_start    ; Unconditional branch back to the start of the loop

loop_end:
    ; Code continues after the loop
```

**Explanation:**

*   The loop starts at `loop_start`.
*   `CMP R4, R5`: Compares the loop counter `i` (in `R4`) with the limit (in `R5`).
*   `BHS loop_end`: `BHS` (Branch if Higher or Same) checks if `C==1` and `Z==0`. For unsigned comparison, this means `R4 >= R5`. If true, the loop terminates.
*   The code within the loop body is executed.
*   `ADD R4, R4, #1`: Increments the loop counter `i`.
*   `B loop_start`: An unconditional branch goes back to the beginning of the loop for the next iteration.

#### 4. For Loops

A `for` loop is typically used when the number of iterations is known or can be calculated.

**High-Level C Example:**

```c
for (int i = 0; i < 5; i++) {
    // do something
}
```

**Assembly Implementation:**

```assembly
    MOV R4, #0      ; Initialize i = 0 (using R4 for i)
    MOV R5, #5      ; Load the loop limit (5) into R5

for_loop_start:
    CMP R4, R5      ; Compare i with the limit
    BGE  for_loop_end ; Branch if Greater Than or Equal (i >= 5) to for_loop_end

    ; --- Start of loop body ---
    ; Example: do something
    ; ...
    ; --- End of loop body ---

    ADD R4, R4, #1  ; Increment i (i++)
    B for_loop_start ; Go back to the start of the loop

for_loop_end:
    ; Code continues after the loop
```

**Explanation:**

This is very similar to the `while` loop. The `for` loop's initialization, condition check, and increment are all explicitly managed.

*   `MOV R4, #0`: Initialization.
*   `CMP R4, R5`: Condition check (using `BGE` for `i >= 5` to exit).
*   `ADD R4, R4, #1`: Increment.
*   `B for_loop_start`: Jump back to check the condition again.

**Reference:** *Embedded systems with ARM Cortex M Microcontrollers in Assembly and C* by Yifeng Zhu (E-man Press, 3rd ed.) provides practical examples of implementing loops and conditional statements using ARM assembly in Chapter 6.

---

### Important Points to Remember

*   **Condition Codes are Crucial:** Understand how the N, Z, C, and V flags are set by arithmetic and logical operations. Instructions like `CMP`, `TST`, `TEQ`, and `CMN` are specifically designed to set these flags.
*   **Unsigned vs. Signed Comparisons:** Be mindful of whether you are performing unsigned (e.g., `HI`, `LS`) or signed (e.g., `GT`, `LE`) comparisons. This affects which condition codes are relevant.
*   **Branch Offset:** Conditional branch instructions typically use a relative offset to calculate the target address. This means the target address is specified as a number of bytes relative to the current instruction.
*   **`BX` and `BLX`:** While not strictly conditional branches, `BX` (Branch and Exchange) and `BLX` (Branch and Link and Exchange) can be used to change the processor state (e.g., from ARM to Thumb mode). Their use in conjunction with conditional execution is possible but less common for simple control flow.
*   **`IT` (If-Then) Instruction (Thumb-2):** Modern ARM architectures (like Cortex-M series) support the `IT` instruction in Thumb-2 mode, which allows a limited form of conditional execution for a small sequence of instructions *without* using explicit branch instructions. This can improve performance by reducing pipeline stalls. However, for basic control structures and understanding fundamentals, explicit `B<condition>` is key.
    *   *Example (Thumb-2):*
        ```assembly
        CMP R0, R1
        IT EQ           ; If Equal, then the next instruction (or up to 3) will execute conditionally
        ADDEQ R2, R2, #1 ; Add 1 to R2 only if R0 == R1
        ```
    *   **Note:** This feature is specific to Thumb-2 and later. For classic ARM assembly or when focusing on the core concept of instruction sequencing via branches, `B<condition>` is the primary tool.

---

### Practice Questions and Exercises

**Question 1:**

Write an ARM assembly code snippet that checks if the value in register `R0` is positive. If it is, load the value `0x55` into `R1`. If it's not positive, load `0xAA` into `R1`.

**Answer 1:**

```assembly
    ; Assume R0 contains the value to check

    CMP R0, #0      ; Compare R0 with 0. Sets flags.
    BPL  positive    ; Branch if Plus (N=0, signed positive) to 'positive' label

    ; Code here executes if R0 <= 0 (not positive)
    MOV R1, #0xAA   ; Load 0xAA into R1
    B    end_check   ; Branch to the end

positive:
    ; Code here executes if R0 > 0 (positive)
    MOV R1, #0x55   ; Load 0x55 into R1

end_check:
    ; Execution continues here
```

**Explanation:**
*   `CMP R0, #0` compares `R0` with `0`.
*   `BPL` (Branch if Plus) checks if the `N` flag is clear (`N=0`), which indicates a non-negative (positive or zero) result. If `R0` is positive, the branch occurs.
*   If the `BPL` condition is false (i.e., `R0` is negative, meaning `N=1`), execution falls through to `MOV R1, #0xAA`.
*   The `B end_check` ensures that the `MOV R1, #0x55` instruction is skipped when `R0` is not positive.

**Question 2:**

Implement a `for` loop that counts down from 10 to 1 (inclusive). Inside the loop, add the current value of the counter to register `R2`. Assume `R2` is initialized to 0 before the loop.

**Answer 2:**

```assembly
    MOV R0, #10     ; Initialize counter i = 10 (using R0 for i)
    MOV R2, #0      ; Initialize accumulator R2 = 0

countdown_loop:
    CMP R0, #0      ; Compare counter with 0
    BLE  loop_end   ; Branch if Less Than or Equal (i <= 0) to loop_end

    ; --- Start of loop body ---
    ADD R2, R2, R0  ; Add current value of counter (R0) to R2
    ; --- End of loop body ---

    SUB R0, R0, #1  ; Decrement counter (i--)
    B countdown_loop ; Go back to the start of the loop

loop_end:
    ; R2 now holds the sum (10+9+...+1)
    ; Execution continues here
```

**Explanation:**
*   The loop starts at `countdown_loop`.
*   `MOV R0, #10`: Initializes the counter `i` to 10.
*   `CMP R0, #0`: Compares the counter with 0.
*   `BLE loop_end`: `BLE` (Branch if Less Than or Equal) checks if `Z=1` or `N!=V`. For a simple count down, `BLE` essentially checks if `i <= 0`. If the condition is true, the loop terminates.
*   `ADD R2, R2, R0`: Adds the current value of the counter to `R2`.
*   `SUB R0, R0, #1`: Decrements the counter.
*   `B countdown_loop`: Unconditionally branches back to re-evaluate the loop condition.

**Question 3:**

Which instruction would you use to branch to a label named `process_data` if the result of a previous comparison indicated that two unsigned numbers were *not* equal?

**Answer 3:**

`BNE process_data`

**Explanation:**
`BNE` (Branch if Not Equal) checks if the `Z` flag is clear (`Z=0`). The `CMP` instruction sets the `Z` flag if the two operands are equal. Therefore, `BNE` branches when the operands are not equal.

---

### Relating to Course Outcomes

*   **CO1: Use the features of C that are frequently used in embedded systems (Knowledge Level: K3)**
    This topic directly supports CO1 by showing how fundamental C control structures like `if`, `if-else`, `while`, and `for` are implemented using ARM assembly's conditional branch instructions. Understanding these low-level implementations helps in writing more efficient embedded code and debugging C code that might be translated into these assembly constructs.
*   **CO2: Explain a programmer’s view of processor architecture (Knowledge Level: K2)**
    This topic exposes the programmer to the concept of the APSR and condition code flags. It demonstrates how these architectural features are directly manipulated by instructions to influence the flow of program execution, providing a clear view of how the processor makes decisions based on data states.
*   **CO3: Choose between programming at the level of assembly or C as appropriate (Knowledge Level: K3)**
    By understanding the underlying assembly mechanisms for control flow, programmers can better assess when it's beneficial to drop down to assembly. For performance-critical sections, direct control over branching might be necessary. This knowledge helps in making informed decisions about the best programming language for specific tasks within an embedded system.

---

This concludes the notes on conditional branch instructions. Mastering these instructions is essential for writing any non-trivial program in assembly language.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
