---
title: "Control structures in assembly language: instruction sequencing"
subject: "ARM ARCHITECTURE AND PROGRAMMING"
module: "Module 3: Control structures in assembly language: instruction sequencing"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feaf8"
status: "completed"
scrapedAt: "2026-05-23T17:53:30.670Z"
---
# ARM Architecture and Programming: Module 3 - Control Structures in Assembly Language: Instruction Sequencing

## Module Overview

This module delves into the fundamental mechanisms that allow assembly language programs to deviate from simple sequential execution. We will explore how ARM assembly language implements control structures like branching, looping, and conditional execution, which are essential for creating dynamic and responsive embedded systems. Understanding instruction sequencing is crucial for efficient program design and optimization.

## Learning Outcomes

By the end of this module, you will be able to:

*   Understand how ARM assembly language implements branching and looping constructs.
*   Explain the role of condition codes and conditional execution in controlling program flow.
*   Implement simple control structures (e.g., if-else, while loops) in ARM assembly.
*   Analyze and debug assembly code for common control flow errors.

## Course Outcomes Alignment

*   **CO1: Use the features of C that are frequently used in embedded systems (Knowledge Level: K3)**
    *   While this module focuses on assembly, understanding how control structures are implemented at the assembly level provides a deeper insight into the underlying mechanisms of C constructs like `if`, `else`, `while`, `for`, and `switch` statements. This knowledge helps in writing more efficient C code for embedded systems.
*   **CO2: Explain a programmer’s view of processor architecture (Knowledge Level: K2)**
    *   This module directly addresses the programmer's view by explaining how instructions manipulate the program counter (PC) and processor status register (PSR) to alter the flow of execution.
*   **CO3: Choose between programming at the level of assembly or C as appropriate (Knowledge Level: K3)**
    *   By understanding the intricacies of assembly-level control, you can better assess when it's beneficial to use assembly for performance-critical sections or direct hardware manipulation, or when C provides a more manageable and portable solution.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


## Textbook References

*   **Fundamentals of Embedded Software with the ARM Cortex M3 by Daniel W Lewis (Pearson, 2e, 2015):** This textbook will provide foundational knowledge on ARM architecture and low-level programming, likely covering branching and conditional execution in its early chapters. (Lewis, 2015)
*   **The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors by Joseph Yiu (Elsevier, 3e, 2014):** Yiu's book is a definitive resource for ARM Cortex-M processors, offering in-depth explanations of instruction sets, including those related to control flow. Expect detailed discussions on conditional execution and branching instructions. (Yiu, 2014)
*   **Embedded systems with ARM Cortex M Microcontrollers in Assembly and C by Yifeng Zhu (E-man Press, 3e, 2018):** This book will likely provide practical examples and hands-on guidance for implementing control structures in assembly for specific microcontroller families. (Zhu, 2018)

---

## 3.1 Introduction to Instruction Sequencing

In any programming paradigm, the order in which instructions are executed is paramount. By default, processors execute instructions sequentially, fetching and executing them one after another from memory. However, to create complex algorithms and responsive systems, we need mechanisms to alter this default flow. In assembly language, this is achieved through **instruction sequencing**.

**Key Concepts:**

*   **Sequential Execution:** Instructions are executed in the order they appear in memory.
*   **Program Counter (PC):** A special register that holds the memory address of the next instruction to be fetched and executed.
*   **Altering the PC:** To change the flow of execution, we need to modify the value of the PC. This is done through specific instructions.

**Textbook Connection:**

Lewis's "Fundamentals of Embedded Software" likely introduces the concept of the PC as central to instruction execution. (Lewis, 2015) Yiu's "Definitive Guide" will provide detailed architectural explanations of how the PC is updated by various instruction types. (Yiu, 2014)

---

## 3.2 Branching Instructions

Branching instructions are the cornerstone of altering program flow. They allow the processor to jump to a different location in memory, effectively skipping or repeating sections of code.

**Key Concepts:**

*   **Branch:** An instruction that changes the value of the Program Counter (PC) to a new address.
*   **Absolute Branch:** Branches to a fixed memory address.
*   **Relative Branch:** Branches to an address calculated relative to the current PC. This is more common as it makes code position-independent.
*   **Target Address:** The address to which the program branches.

**ARM Branch Instructions:**

The ARM instruction set provides a variety of branch instructions. Some of the most common include:

*   **`B` (Branch):** Unconditional branch. The PC is updated to the specified target address.
    *   **Syntax:** `B <label>`
    *   **Example:**
        ```assembly
        LOOP_START:
            ; ... instructions to execute in the loop ...
            B LOOP_START  ; Branch back to LOOP_START
        ```
        *   **Explanation:** The `B` instruction sets the PC to the address of `LOOP_START`, causing the code block labeled `LOOP_START` to execute repeatedly.
*   **`BL` (Branch with Link):** Used for subroutine (function) calls. It branches to a target address and stores the address of the *next* instruction in the Link Register (`LR`). This allows the subroutine to return to the calling code.
    *   **Syntax:** `BL <label>`
    *   **Example:**
        ```assembly
        MAIN:
            BL SUBROUTINE_FUNC  ; Call SUBROUTINE_FUNC
            ; ... code after the function call ...
            B END_PROG

        SUBROUTINE_FUNC:
            ; ... instructions of the subroutine ...
            BX LR               ; Return to the caller
        ```
        *   **Explanation:** `BL SUBROUTINE_FUNC` stores the address of the instruction after `BL` into `LR` and then jumps to `SUBROUTINE_FUNC`. `BX LR` (Branch and Exchange) is commonly used for returning from subroutines, as it also handles potential Thumb/ARM state switches.

**Important Points to Remember:**

*   **Labels:** Labels are symbolic names given to memory addresses, making code more readable and maintainable. The assembler resolves these labels to actual addresses.
*   **Link Register (`LR`):** Crucial for function calls and returns. Without saving `LR` and restoring it, a subroutine cannot return to its caller.

**Textbook Connection:**

Yiu's "Definitive Guide" will offer a comprehensive list and detailed explanation of all ARM branch instructions, including their encoding and typical usage scenarios. (Yiu, 2014) Lewis's book might cover `BL` as part of introducing subroutine calls. (Lewis, 2015)

---

## 3.3 Conditional Execution and Condition Codes

Many control structures in high-level languages like C (`if`, `while`) rely on conditions. In ARM assembly, conditions are checked by examining the **Program Status Register (PSR)**, specifically the **Condition Code Flags (N, Z, C, V)**.

**Key Concepts:**

*   **Condition Code Flags (N, Z, C, V):**
    *   **N (Negative):** Set if the result of an operation is negative.
    *   **Z (Zero):** Set if the result of an operation is zero.
    *   **C (Carry):** Set if an arithmetic operation results in a carry-out or if a logical operation has a bit shifted out.
    *   **V (Overflow):** Set if an arithmetic operation results in a signed overflow.
*   **Comparison Instructions (`CMP`, `CMN`, `TST`, `TEQ`):** These instructions perform a comparison without affecting the destination operands, but they *update* the condition code flags in the PSR.
    *   **`CMP Rn, Operand2`:** Subtracts `Operand2` from `Rn` and updates the flags.
    *   **`CMN Rn, Operand2`:** Adds `Operand2` to `Rn` and updates the flags.
    *   **`TST Rn, Operand2`:** Performs a bitwise AND of `Rn` and `Operand2` and updates the flags (useful for checking if specific bits are set).
    *   **`TEQ Rn, Operand2`:** Performs a bitwise XOR of `Rn` and `Operand2` and updates the flags (useful for checking equality).
*   **Conditional Branch Instructions:** Branch instructions that can be executed *only if* a specific condition is met.
*   **Conditional Execution Suffixes:** Most ARM data processing instructions can also be suffixed with condition codes, allowing them to execute conditionally without a separate branch.

**Common Condition Codes:**

| Mnemonic | Condition       | Z Flag | C Flag | N Flag | V Flag |
| :------- | :-------------- | :----- | :----- | :----- | :----- |
| **EQ**   | Equal           | 1      | X      | X      | X      |
| **NE**   | Not Equal       | 0      | X      | X      | X      |
| **CS/HS**| Carry Set/Unsigned Higher or Same | 1      | 1      | X      | X      |
| **CC/LO**| Carry Clear/Unsigned Lower | X      | 0      | X      | X      |
| **MI**   | Minus/Negative  | X      | X      | 1      | X      |
| **PL**   | Plus/Positive   | X      | X      | 0      | X      |
| **VS**   | Overflow        | X      | X      | X      | 1      |
| **VC**   | No Overflow     | X      | X      | X      | 0      |
| **HI**   | Unsigned Higher | 0      | 1      | X      | X      |
| **LS**   | Unsigned Lower or Same | X      | 0 or 1 | X      | X      |
| **GE**   | Signed Greater than or Equal | X      | X      | N=V    |        |
| **LT**   | Signed Less Than | X      | X      | N!=V   |        |
| **GT**   | Signed Greater Than | Z=0, N=V | X      |        |        |
| **LE**   | Signed Less Than or Equal | Z=1 or N!=V | X      |        |        |
| **AL**   | Always          | X      | X      | X      | X      |

*Note: 'X' means the flag's state does not matter for the condition.*

**Examples:**

**1. Implementing an `if` statement (e.g., `if (a == b)`):**

```assembly
    MOV R0, #10     ; Load a
    MOV R1, #10     ; Load b

    CMP R0, R1      ; Compare R0 and R1. Updates flags.
    BEQ IF_BRANCH   ; Branch if Equal (Z flag is set)

    ; Code to execute if a != b
    ; ...

    B END_IF        ; Skip the IF_BRANCH block

IF_BRANCH:
    ; Code to execute if a == b
    ; ...

END_IF:
    ; ... rest of the program ...
```
*   **Explanation:** `CMP R0, R1` subtracts R1 from R0. If R0 and R1 are equal, the result is 0, setting the Z flag. `BEQ IF_BRANCH` then branches to `IF_BRANCH` if the Z flag is set.

**2. Implementing an `if-else` statement (e.g., `if (x > 0)`):**

```assembly
    MOV R0, #5      ; Load x

    CMP R0, #0      ; Compare R0 with 0
    BGT ELSE_BRANCH ; Branch if Greater Than (Z=0 and N=V)

    ; Code for "if" block (x > 0)
    ; ...
    B END_IF_ELSE   ; Skip the ELSE block

ELSE_BRANCH:
    ; Code for "else" block (x <= 0)
    ; ...

END_IF_ELSE:
    ; ...
```
*   **Explanation:** `CMP R0, #0` compares `R0` with 0. If `R0` is greater than 0, the `N` flag will be 0 and the `V` flag will be 0 (N=V), satisfying the `GT` condition. `BGT ELSE_BRANCH` branches if `R0 > 0`.

**3. Conditional Execution Suffixes:**

Instead of branching, we can conditionally execute instructions:

```assembly
    MOV R0, #10     ; Load a
    MOV R1, #5      ; Load b

    CMP R0, R1      ; Compare R0 and R1
    ADDGT R2, R0, R1 ; If Greater Than (R0 > R1), R2 = R0 + R1
    ADDEQ R2, R0, R1 ; If Equal, R2 = R0 + R1
    ADDLE R2, R0, R1 ; If Less than or Equal, R2 = R0 + R1
```
*   **Explanation:** The `GT` suffix on `ADDGT` means the `ADD` instruction will only execute if the `GT` condition (Z=0 and N=V) is true. This can often be more efficient than a branch.

**Textbook Connection:**

Yiu's "Definitive Guide" is an excellent source for detailed explanations of the PSR, condition codes, and how various instructions affect them. (Yiu, 2014) Lewis will likely cover comparison and conditional branching as fundamental control flow concepts. (Lewis, 2015) Zhu's book might showcase specific examples of using these on Cortex-M microcontrollers. (Zhu, 2018)

---

## 3.4 Looping Constructs

Loops are essential for repetitive tasks. In assembly, loops are typically implemented using a combination of comparison, conditional branching, and unconditional branching.

**Key Concepts:**

*   **Loop Counter:** A register used to track the number of iterations.
*   **Loop Condition:** A condition checked to determine if the loop should continue or terminate.

**Implementing a `while` loop (e.g., `while (count > 0)`):**

```assembly
    MOV R0, #5      ; Initialize count = 5

LOOP_START:
    CMP R0, #0      ; Compare count with 0
    BLE LOOP_END    ; Branch if Less Than or Equal to 0 (terminate loop)

    ; Body of the loop
    ; Example: Decrement count
    SUBS R0, R0, #1 ; Decrement count and update flags (S suffix)
                    ; Use SUBS to automatically update flags without CMP

    ; Other loop operations...
    ; ...

    B LOOP_START    ; Branch back to the start of the loop

LOOP_END:
    ; Code after the loop
    ; ...
```
*   **Explanation:**
    1.  `MOV R0, #5`: Initializes `R0` (our `count`) to 5.
    2.  `LOOP_START:`: Marks the beginning of the loop.
    3.  `CMP R0, #0`: Compares `R0` with 0. This sets the flags based on the result of `R0 - 0`.
    4.  `BLE LOOP_END`: If `R0` is Less Than or Equal to 0 (meaning `R0 <= 0`), branch to `LOOP_END` to exit the loop.
    5.  `SUBS R0, R0, #1`: Decrements `R0` by 1. The `S` suffix means the flags are updated after this operation. This eliminates the need for a separate `CMP` instruction for the next iteration's check if we were to check `count > 0` after decrementing.
    6.  `B LOOP_START`: Unconditionally branches back to `LOOP_START` to continue the loop.
    7.  `LOOP_END:`: The code executed after the loop terminates.

**Alternative using `SUBS` for loop termination:**

```assembly
    MOV R0, #5      ; Initialize count = 5

LOOP_START:
    ; Body of the loop
    ; ...
    ; Example: Decrement count and check if zero
    SUBS R0, R0, #1 ; Decrement count. If count becomes 0, Z flag is set.

    ; If we want to loop while count > 0 (5 times):
    ; After SUBS, if R0 becomes -1, it means it was 0 before.
    ; The previous iteration was when R0 was 1, and SUBS R0, R0, #1 made it 0, setting Z.
    ; So, we should branch if NOT (R0 < 0 or Z is set after decrementing from 1)

    ; A clearer way for "while count > 0":
    ; Check count before decrementing if it's already 0 or less.
    CMP R0, #0      ; Compare current count with 0
    BLE LOOP_END    ; Branch if Less than or Equal to 0

    ; If count is still positive, perform the loop body and decrement
    ; ... loop body operations ...
    SUBS R0, R0, #1 ; Decrement count

    B LOOP_START    ; Repeat

LOOP_END:
    ; ...
```
*   **Refinement:** The `SUBS` instruction can be used to both decrement and check for termination. If we want to loop `N` times (e.g., 5 times), we can start with `N` and loop *while* `N` is not zero.

    ```assembly
    MOV R0, #5      ; Initialize counter (e.g., N=5)

LOOP_ITER:
    ; Loop body operations...
    ; Example: Add R1 to R2
    ADD R2, R2, R1

    SUBS R0, R0, #1 ; Decrement counter and set flags.
                    ; If R0 becomes 0, Z flag is set.

    ; Branch if counter is NOT zero (Z flag is 0)
    BNE LOOP_ITER   ; Branch if Not Equal to zero

    ; Code after loop
    ; ...
    ```
*   **Explanation:** This loop executes its body as long as `R0` is not zero. After each iteration, `R0` is decremented. When `R0` finally becomes 0, the `Z` flag will be set, and `BNE` will not branch, terminating the loop. This is a very common pattern for fixed-iteration loops.

**Textbook Connection:**

Zhu's book is likely to have practical examples of implementing loops on Cortex-M microcontrollers. (Zhu, 2018) Lewis and Yiu will both provide theoretical underpinnings of how comparison and branching instructions combine to form loops. (Lewis, 2015; Yiu, 2014)

---

## 3.5 Implementing `for` Loops

A `for` loop in C typically has an initialization, a condition, and an update step. We can mimic this in assembly.

**C `for` loop:**

```c
for (int i = 0; i < 10; i++) {
    // loop body
}
```

**Assembly Implementation:**

```assembly
    MOV R0, #0      ; Initialize i = 0 (R0 will be our loop counter)
    MOV R1, #10     ; Set loop limit (i < 10)

FOR_LOOP_START:
    CMP R0, R1      ; Compare i with limit (R0 < R1?)
    BGE FOR_LOOP_END ; Branch if Greater Than or Equal to limit (i >= 10)

    ; Loop body
    ; Example: Add R0 to R2
    ADD R2, R2, R0

    ; Update step: i++
    ADD R0, R0, #1  ; Increment i

    B FOR_LOOP_START ; Branch back to check condition

FOR_LOOP_END:
    ; Code after the loop
    ; ...
```
*   **Explanation:**
    1.  `MOV R0, #0`: Initializes the loop counter `i` to 0.
    2.  `MOV R1, #10`: Sets the upper bound for `i`.
    3.  `FOR_LOOP_START:`: The label marking the beginning of the loop.
    4.  `CMP R0, R1`: Compares the current value of `i` (`R0`) with the limit (`R1`).
    5.  `BGE FOR_LOOP_END`: If `i` is greater than or equal to the limit (i.e., `i >= 10`), the loop terminates.
    6.  `ADD R2, R2, R0`: This is the loop body, performing an operation.
    7.  `ADD R0, R0, #1`: Increments the loop counter `i`.
    8.  `B FOR_LOOP_START`: Unconditionally branches back to the start of the loop.
    9.  `FOR_LOOP_END:`: The code that executes after the loop has completed.

**Textbook Connection:**

All textbooks will likely cover how to implement basic iterative structures. Zhu's practical examples would be particularly helpful here. (Zhu, 2018)

---

## 3.6 Implementing `if-else if-else` Structures

These structures can be implemented by chaining conditional branches.

**C `if-else if-else`:**

```c
if (x > 10) {
    // block 1
} else if (x > 5) {
    // block 2
} else {
    // block 3
}
```

**Assembly Implementation:**

```assembly
    MOV R0, #7      ; Let's test with x = 7

    CMP R0, #10     ; Compare x with 10
    BLE ELSE_IF_COND; Branch if x <= 10 (skip block 1)

    ; Block 1: x > 10
    ; ...
    B END_IF_ELSE_IF ; Skip remaining blocks

ELSE_IF_COND:
    CMP R0, #5      ; Compare x with 5
    BLE ELSE_BLOCK  ; Branch if x <= 5 (skip block 2)

    ; Block 2: x > 5 (and we know x <= 10 from previous check)
    ; ...
    B END_IF_ELSE_IF ; Skip block 3

ELSE_BLOCK:
    ; Block 3: x <= 5
    ; ...

END_IF_ELSE_IF:
    ; ... rest of the code ...
```
*   **Explanation:**
    1.  The first `CMP` and `BLE` check the primary condition (`x > 10`). If `x` is not greater than 10, it branches to `ELSE_IF_COND`.
    2.  If it branched, the second `CMP` and `BLE` check the `else if` condition (`x > 5`). If `x` is not greater than 5, it branches to `ELSE_BLOCK`.
    3.  If neither of the previous conditions caused a branch, the code for the middle block (`x > 5` and `x <= 10`) is executed.
    4.  Each block that is executed ends with a branch to `END_IF_ELSE_IF` to skip the subsequent blocks.

**Textbook Connection:**

This is a direct application of combining conditional branches, a topic well-covered in all reference materials. (Lewis, 2015; Yiu, 2014; Zhu, 2018)

---

## 3.7 `switch` Statement Implementation (Conceptually)

Implementing a full `switch` statement in assembly can be done in several ways, the most common being:

1.  **Chained Comparisons:** Similar to `if-else if-else`, but with many more branches. This is simple but inefficient for large numbers of cases.
2.  **Jump Table:** A table of addresses. The `switch` value is used as an index into this table, and the program branches to the address found there. This is generally more efficient for dense, contiguous case values.

**Conceptual Jump Table Example (for `switch(value)` where `value` is 0, 1, or 2):**

```assembly
    ; Assume value is in R0

    ; Check if value is within the valid range (0-2)
    CMP R0, #2      ; Compare R0 with 2
    BGT SWITCH_DEFAULT ; Branch if R0 > 2

    ; Load the base address of the jump table into a register
    LDR R1, =JUMP_TABLE ; Load the address of JUMP_TABLE

    ; Calculate the offset for the jump table
    ; offset = value * 4 (since each entry is 4 bytes for ARM instructions)
    MUL R2, R0, #4  ; R2 = R0 * 4

    ; Add the offset to the base address to get the target jump address
    ADD R1, R1, R2  ; R1 = base_address + offset

    ; Load the actual jump instruction from the table
    LDR PC, [R1]    ; Load the PC from the calculated address in memory

JUMP_TABLE:
    B CASE_0        ; Target for case 0
    B CASE_1        ; Target for case 1
    B CASE_2        ; Target for case 2

CASE_0:
    ; Code for case 0
    ; ...
    B SWITCH_END    ; Branch out of switch

CASE_1:
    ; Code for case 1
    ; ...
    B SWITCH_END    ; Branch out of switch

CASE_2:
    ; Code for case 2
    ; ...
    B SWITCH_END    ; Branch out of switch

SWITCH_DEFAULT:
    ; Code for default case
    ; ...

SWITCH_END:
    ; ...
```
*   **Explanation:**
    *   The `value` (in `R0`) is checked to ensure it's within the valid range of the jump table.
    *   `LDR R1, =JUMP_TABLE` loads the *address* of the `JUMP_TABLE` into `R1`. The `=` syntax is a pseudo-instruction that tells the assembler to find the address of `JUMP_TABLE`.
    *   `MUL R2, R0, #4` calculates the byte offset into the table, assuming each target instruction is 4 bytes long.
    *   `ADD R1, R1, R2` computes the exact address of the desired jump instruction within the `JUMP_TABLE`.
    *   `LDR PC, [R1]` is the crucial step. It loads the value from the memory location pointed to by `R1` directly into the PC. Since the `JUMP_TABLE` contains `B` instructions, this effectively performs the branch.
    *   Each case block must end with a branch to `SWITCH_END` to exit the `switch` construct.

**Textbook Connection:**

While Lewis might cover this conceptually, Yiu's "Definitive Guide" is the most likely place to find detailed architectural information and assembly examples of jump tables and their efficient implementation on ARM. (Yiu, 2014) Zhu might also provide practical examples. (Zhu, 2018)

---

## 3.8 Best Practices and Optimization

*   **Use Conditional Execution Suffixes:** When possible, use conditional execution suffixes (`ADDEQ`, `MOVNE`, etc.) instead of conditional branches for simple conditions. This can reduce pipeline stalls and improve performance.
*   **Minimize Branching:** Deeply nested `if-else` structures or complex loop conditions can lead to performance degradation due to branch prediction misses.
*   **Optimize Loops:**
    *   **Loop Unrolling:** For small, fixed iteration loops, unrolling the loop body multiple times can eliminate the overhead of loop control instructions.
    *   **Strength Reduction:** Replace expensive operations (like multiplication) within a loop with cheaper ones (like addition) if possible.
*   **Use `SUBS` Efficiently:** For loops that decrement a counter, `SUBS` is often preferred over `CMP` followed by a separate decrement instruction, as it combines two operations.
*   **Understand Condition Code Behavior:** Be precise about which flags are affected by which instructions and ensure your conditional branches or executions correctly interpret the flag states.
*   **Readability:** While performance is important, maintainable code is crucial. Use meaningful labels and comments to explain complex control flow.

**Textbook Connection:**

Optimization techniques are a key aspect of embedded systems programming. Yiu's book, being a definitive guide, will likely have sections on performance optimization. (Yiu, 2014) Lewis and Zhu will also touch upon efficiency in the context of embedded constraints. (Lewis, 2015; Zhu, 2018)

---

## Practice Questions

1.  **Question:** Write ARM assembly code to implement the following C `if` statement:
    ```c
    int x = 15;
    if (x < 0) {
        // print_message("x is negative");
    }
    ```
    Assume `PRINT_MESSAGE` is a subroutine you can call.

    **Answer:**
    ```assembly
        MOV R0, #15         ; Initialize x = 15
        CMP R0, #0          ; Compare x with 0
        BGE NO_PRINT        ; Branch if x >= 0 (Greater Than or Equal)

        ; x < 0 block
        BL print_message    ; Call the subroutine

    NO_PRINT:
        ; Continue program execution
        ; ...
    ```

2.  **Question:** What is the purpose of the Link Register (`LR`)? How is it typically used with the `BL` instruction?

    **Answer:** The Link Register (`LR`) stores the return address when a subroutine is called using the `BL` (Branch with Link) instruction. When `BL <subroutine_label>` is executed, the processor automatically saves the address of the instruction *after* the `BL` into `LR`. To return from the subroutine, the `BX LR` (Branch and Exchange with Link) instruction is typically used, which restores the PC from `LR`, effectively returning control to the caller.

3.  **Question:** Consider the following ARM assembly snippet. What condition is being checked, and what code will execute if that condition is met?
    ```assembly
        MOV R1, #0x10
        MOV R2, #0x20
        TST R1, R2
        ; Some instruction with a condition code here
    ```
    What condition code suffix would make an instruction execute if the 5th bit (bit 4) of `R1` is NOT set?

    **Answer:** The `TST R1, R2` instruction performs a bitwise AND operation between `R1` and `R2`. The result of this operation is discarded, but the condition code flags (N, Z, C, V) are updated based on the result. The `TST` instruction is used to check if specific bits are set in an operand.

    To make an instruction execute if the 5th bit (bit 4) of `R1` is *not* set, you would use the `TST` instruction and then a conditional instruction with the `NE` (Not Equal) suffix. The `TST` instruction checks if the *result* of the AND operation is non-zero. If the 5th bit of `R1` is not set, then the AND operation with the corresponding bit in `R2` (if it's also 0) or any other bit that's set in `R2` will result in a value where the Z flag is 0.
    Therefore, the condition code suffix would be **`NE`**.

    Example:
    ```assembly
        MOV R1, #0x10       ; R1 = 0001 0000 (binary) - 5th bit is 1
        MOV R2, #0x08       ; R2 = 0000 1000 (binary) - 4th bit is 1

        TST R1, R2          ; R1 & R2 = 0000 0000 (binary). Z flag will be set.

        ; If we wanted to check if the 5th bit (bit 4) of R1 is SET:
        ; We would need R2 to have only the 5th bit set.
        MOV R2_mask, #0x10  ; Mask for bit 4
        TST R1, R2_mask     ; R1 & 0x10 = 0x10 (non-zero). Z flag cleared.
        ADDNE R3, R3, #1    ; This ADDNE will execute because Z is 0.

        ; To check if the 5th bit (bit 4) of R1 is NOT SET (Z flag is 1 after TST):
        MOV R1_val, #0x00   ; R1 = 0000 0000 (binary) - 5th bit is 0
        MOV R2_mask, #0x10  ; Mask for bit 4
        TST R1_val, R2_mask ; R1_val & 0x10 = 0x00 (zero). Z flag will be set.
        ADDNE R3, R3, #1    ; This ADDNE will NOT execute because Z is 1.
        ADDEQ R3, R3, #1    ; This ADDEQ will execute because Z is 1.
    ```
    So, if the 5th bit of `R1` is NOT set, `TST R1, #0x10` will result in zero, setting the Z flag. Thus, you'd use `ADDEQ` or `MOVEQ` to execute an instruction. The question asks for the suffix if the bit is NOT set, meaning Z flag is set. If the question implies checking a bit and acting *if it's not set*, you'd look for the condition that matches Z=1. The most common are `EQ` or `LO` or `CC`. However, the question phrasing "if the 5th bit ... is NOT set" typically means we want to perform an action when that bit is 0. `TST` followed by `EQ` or `NE` based on the result of the AND. If the bit *is* set, `TST` gives non-zero (Z=0); if the bit is *not* set, `TST` gives zero (Z=1). So, if the bit is NOT set (Z=1), you'd use `EQ` or `CC` etc. Let's assume `NE` was a misunderstanding of the bit check.

    **Revised Answer to Question 3 (focusing on bit testing):**
    `TST R1, R2` performs a bitwise AND. If the result is zero, the Z flag is set. If the result is non-zero, the Z flag is cleared.

    To make an instruction execute if the 5th bit (bit 4) of `R1` is *not* set, we need to isolate bit 4 of `R1` using a mask and check if the result of the `TST` is zero. The mask for bit 4 is `0x10` (binary `0001 0000`).

    ```assembly
        MOV R1, <value_to_test>  ; Load the value into R1
        MOV R2, #0x10            ; Mask for bit 4 (the 5th bit)

        TST R1, R2               ; Perform R1 AND R2. Sets Z flag if result is zero.
                                 ; If the 5th bit of R1 is 0, the result of R1 & 0x10 will be 0, setting Z.
                                 ; If the 5th bit of R1 is 1, the result of R1 & 0x10 will be 0x10, clearing Z.
    ```
    So, if the 5th bit of `R1` is **not set** (i.e., it's 0), `TST R1, R2` will result in `0`, and the **Z flag will be set**.
    Therefore, to execute an instruction when the 5th bit of `R1` is NOT set, you would use a condition code suffix that checks for the Z flag being set. The most common are **`EQ`** (Equal) or **`CC`** (Carry Clear, which also means Z=1 in many contexts related to comparisons, though `EQ` is more direct for zero results).

    The instruction would be: `ADDEQ R3, R3, #1` (or `ADDCC R3, R3, #1`).

4.  **Question:** Explain the difference between `B` and `BL` instructions in ARM assembly.

    **Answer:**
    *   **`B <label>` (Branch):** This is an unconditional branch instruction. It simply changes the Program Counter (PC) to the address specified by `<label>`, causing execution to jump to that new location. It does not save any return address.
    *   **`BL <label>` (Branch with Link):** This instruction is used for calling subroutines (functions). It performs an unconditional branch to `<label>`, similar to `B`. However, *before* branching, it automatically stores the address of the *next instruction* (the one immediately following the `BL`) into the Link Register (`LR`). This saved address is the return address, allowing the subroutine to return to the caller using an instruction like `BX LR`.

5.  **Question:** How would you implement a loop that executes exactly 100 times using ARM assembly?

    **Answer:** The most common and efficient way is to use a counter and the `SUBS` instruction for decrementing and checking for zero.

    ```assembly
        MOV R0, #100         ; Initialize counter to 100

    LOOP_100_TIMES:
        ; --- Body of the loop ---
        ; Perform desired operations here. For example:
        ; ADD R1, R1, #1
        ; ------------------------

        SUBS R0, R0, #1      ; Decrement R0. If R0 becomes 0, Z flag is set.

        ; Branch back to LOOP_100_TIMES if R0 is NOT zero (Z flag is 0).
        BNE LOOP_100_TIMES

        ; Code after the loop
        ; ...
    ```
    This code initializes a counter `R0` to 100. In each iteration, it executes the loop body, then decrements `R0` using `SUBS`. If `R0` becomes zero after the decrement, the Z flag is set, and the `BNE` (Branch if Not Equal) instruction will not branch, terminating the loop.

---

## Summary

This module has covered the essential mechanisms for controlling program flow in ARM assembly language. We've explored:

*   The role of the **Program Counter (PC)** in instruction sequencing.
*   **Branching instructions** (`B`, `BL`) for altering execution flow and calling subroutines.
*   The importance of **condition code flags** (N, Z, C, V) in the **PSR**.
*   How **comparison instructions** (`CMP`, `TST`, etc.) update flags.
*   The use of **conditional branches** and **conditional execution suffixes** for implementing `if`, `else if`, and other conditional logic.
*   Techniques for implementing **loops** (`while`, `for`) and conceptually how `switch` statements can be handled.
*   **Best practices** for writing efficient and readable control flow code.

Mastering these concepts is fundamental to developing sophisticated embedded software using ARM assembly.