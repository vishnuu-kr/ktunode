---
title: "implementing loops"
subject: "ARM ARCHITECTURE AND PROGRAMMING"
module: "Module 3: Control structures in assembly language: instruction sequencing"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feafc"
status: "completed"
scrapedAt: "2026-05-23T17:53:33.479Z"
---
# ARM Architecture and Programming: Module 3 - Control Structures in Assembly Language: Implementing Loops

## Introduction to Loops in Assembly Language

Loops are fundamental control flow structures that allow a block of code to be executed repeatedly. In assembly language, implementing loops involves carefully managing instruction sequencing and using conditional branching to control the number of iterations. This module focuses on how to build efficient and effective loops using ARM assembly instructions.

**Learning Outcomes:**

*   **Understand the concept of a loop** and its necessity in programming.
*   **Identify the key components of a loop** (initialization, condition, update, body).
*   **Implement different types of loops** (e.g., count-controlled, condition-controlled) using ARM assembly instructions.
*   **Utilize conditional branch instructions** to control loop execution.
*   **Optimize loop performance** by minimizing overhead.
*   **Understand the role of registers** in loop management.

**Course Outcomes Alignment:**

*   **CO1 (C in Embedded Systems):** While this module focuses on assembly, understanding how loops are implemented at a low level provides a deeper appreciation for how C's `for`, `while`, and `do-while` loops are translated into machine code. This knowledge helps in writing more efficient C code. (K3)
*   **CO2 (Programmer's View of Processor Architecture):** This module directly addresses the programmer's view by demonstrating how the processor's ability to branch conditionally based on flags is used to create iterative processes. (K2)
*   **CO3 (Assembly vs. C Choice):** By understanding the mechanics of loop implementation in assembly, one can better judge when it's necessary to drop to assembly for performance-critical loops or when C provides sufficient abstraction and readability. (K3)

---

## Key Concepts and Definitions

### What is a Loop?

A loop is a sequence of instructions that is repeated until a certain condition is met. This repetition allows for the efficient execution of repetitive tasks without having to write the same code multiple times.

### Essential Components of a Loop:

1.  **Initialization:** Setting up initial values for loop control variables (e.g., a counter).
2.  **Condition:** A test that determines whether the loop should continue or terminate.
3.  **Loop Body:** The block of code that is executed repeatedly.
4.  **Update:** Modifying the loop control variable (e.g., incrementing or decrementing a counter) to move closer to the termination condition.

### Instruction Sequencing:

The order in which instructions are executed. In loops, this involves branching back to the beginning of the loop body or exiting the loop based on the condition.

### Conditional Branching:

Instructions that alter the program flow based on the state of condition flags in the Program Status Register (PSR).

---

## Implementing Loops in ARM Assembly

The core of loop implementation in ARM assembly relies on **branch instructions**, particularly **conditional branch instructions**.

### Common Loop Control Variables:

*   **Counter:** A register that holds the number of iterations to perform or the remaining iterations.
*   **Pointer:** A register that points to a memory location that is being accessed within the loop.

### Types of Loops and Their Implementation:

#### 1. Count-Controlled Loops

These loops execute a predetermined number of times. A counter register is used to track the iterations.

**General Structure:**

1.  Initialize the counter.
2.  Start the loop body.
3.  Perform loop operations.
4.  Update the counter (e.g., decrement).
5.  Check if the counter has reached the termination condition.
6.  If not terminated, branch back to the start of the loop body.
7.  If terminated, continue with the code after the loop.

**ARM Assembly Example: Counting Down from N to 1**

Let's say we want to loop 10 times. We'll use register `R0` as our counter.

```assembly
    MOV     R0, #10       @ Initialize counter R0 to 10
loop_start:
    @ --- Loop Body ---
    @ Example: Print "Hello" 10 times (simplified for illustration)
    @ Assume a function or system call to print is available elsewhere
    BL      print_hello   @ Branch with Link to a hypothetical print function

    @ --- Loop Update and Condition ---
    SUBS    R0, R0, #1    @ Decrement R0 and set flags (N, Z, C, V)
    BNE     loop_start    @ Branch if Not Equal (R0 != 0)

    @ --- Code after the loop ---
    @ Continue execution here
```

**Explanation:**

*   `MOV R0, #10`: Loads the initial value 10 into register `R0`.
*   `loop_start:`: This is a label marking the beginning of the loop.
*   `BL print_hello`: This is a placeholder for the actual code that performs the loop's task. `BL` (Branch with Link) is used for function calls, pushing the return address onto the stack.
*   `SUBS R0, R0, #1`: This is a crucial instruction.
    *   `SUB R0, R0, #1`: Subtracts 1 from `R0` and stores the result back in `R0`.
    *   The `S` suffix: **This is important!** It causes the instruction to update the condition flags (N - Negative, Z - Zero, C - Carry, V - Overflow) in the PSR based on the result of the subtraction.
*   `BNE loop_start`: `BNE` stands for "Branch if Not Equal". It checks the `Z` flag. If the `Z` flag is 0 (meaning the result of the `SUBS` was not zero), it branches to the `loop_start` label. When `R0` becomes 0 after decrementing, the `Z` flag will be set to 1, and `BNE` will *not* branch, thus exiting the loop.

**Alternative using `CMP` and `BNE`:**

Another common way to implement count-controlled loops is by comparing the counter with a target value.

```assembly
    MOV     R0, #10       @ Initialize counter R0 to 10
    MOV     R1, #0        @ Initialize loop index R1 to 0

loop_start_cmp:
    @ --- Loop Body ---
    BL      print_hello

    @ --- Loop Update and Condition ---
    ADD     R1, R1, #1    @ Increment loop index
    CMP     R1, R0        @ Compare R1 with R0 (sets flags)
    BLT     loop_start_cmp  @ Branch if Less Than (R1 < R0)

    @ --- Code after the loop ---
```

**Explanation:**

*   `MOV R1, #0`: Initializes a loop index `R1` to 0.
*   `ADD R1, R1, #1`: Increments the loop index.
*   `CMP R1, R0`: Compares `R1` with `R0`. This instruction subtracts `R0` from `R1` internally but does not store the result. Instead, it updates the condition flags.
*   `BLT loop_start_cmp`: `BLT` stands for "Branch if Less Than". It branches to `loop_start_cmp` if `R1` is less than `R0`. The loop will execute as long as `R1` is less than 10. When `R1` becomes 10, `CMP R1, R0` will result in a zero difference, setting the `Z` flag, and also potentially the `N` flag depending on the values. `BLT` will not branch if the result of the comparison is zero or positive.

**Important Note on `CMP` vs. `SUBS`:**

*   `SUBS R0, R0, #1`: Modifies the counter itself. Useful for countdown loops.
*   `CMP R1, R0`: Compares two registers (or a register and an immediate) without modifying them. Useful for comparing an index against a limit.

#### 2. Condition-Controlled Loops

These loops continue as long as a specific condition remains true (or false). The condition might be based on a flag, a comparison, or the state of a hardware device.

**General Structure:**

1.  Initialize necessary variables.
2.  Start the loop.
3.  Perform loop operations.
4.  Check the condition.
5.  If the condition is met, branch back to the start of the loop.
6.  If the condition is not met, exit the loop.

**ARM Assembly Example: Looping While a Flag is Set**

Let's say we want to read data from a buffer until a "data ready" flag (represented by a bit in a status register) is cleared.

```assembly
    @ Assume:
    @ R1 holds the address of the status register
    @ R2 holds the address of the data buffer
    @ The "data ready" bit is bit 0 of the status register

loop_data_ready:
    @ --- Condition Check ---
    LDR     R3, [R1]      @ Load the status register value into R3
    TST     R3, #0x01     @ Test bit 0 (AND R3 with 0x01, set flags)
    BNE     loop_data_ready @ Branch if Not Equal (if bit 0 is 1, i.e., data is ready)

    @ --- Loop Body ---
    @ Data is not ready yet, so we wait or do other tasks
    @ For this example, we'll just loop back.
    @ In a real scenario, you might poll or enter a low-power state.

    @ --- If data IS ready (previous BNE did not branch) ---
    LDR     R4, [R2]      @ Load data from the buffer
    ADD     R2, R2, #4    @ Move to the next data location (assuming 32-bit data)
    @ Process the loaded data (R4)
    BL      process_data  @ Call a hypothetical processing function

    @ --- Check for exit condition (e.g., end of buffer) ---
    CMP     R2, #buffer_end @ Compare current buffer pointer with end of buffer
    BLT     loop_data_ready @ If not at end, continue looping

    @ --- Code after the loop ---
```

**Explanation:**

*   `LDR R3, [R1]`: Loads the value of the status register (pointed to by `R1`) into `R3`.
*   `TST R3, #0x01`: The `TST` instruction performs a bitwise AND between `R3` and `0x01`. It *does not* store the result, but it *does* update the condition flags. Specifically, the `Z` flag is set if the result of the AND operation is zero. In this case, `R3 & 0x01` will be non-zero (setting `Z=0`) if bit 0 of `R3` is 1.
*   `BNE loop_data_ready`: Branches to `loop_data_ready` if the `Z` flag is 0. This means the loop continues as long as bit 0 of the status register is 1 (data is ready).
*   **Correction for the example logic:** The intent was likely to loop *while data is ready*. The current `BNE` means "loop if `Z` is NOT set", which happens when `R3 & 0x01` is non-zero (i.e., bit 0 is 1). So, it correctly loops while data is ready. If we wanted to loop *until* data is ready, we'd use `BEQ loop_data_ready`.

**Let's correct the example to loop *until* data is ready:**

```assembly
    @ Assume:
    @ R1 holds the address of the status register
    @ The "data ready" bit is bit 0 of the status register

wait_for_data:
    @ --- Condition Check ---
    LDR     R3, [R1]      @ Load the status register value into R3
    TST     R3, #0x01     @ Test bit 0 (AND R3 with 0x01, set flags)
    BEQ     wait_for_data @ Branch if Equal (if R3 & 0x01 is 0, i.e., data not ready)

    @ --- Code after the loop ---
    @ Data is now ready. Continue execution.
    @ Example: Load data from buffer pointed to by R2
    LDR     R4, [R2]
    ADD     R2, R2, #4    @ Move to the next data location
    BL      process_data
```

**Explanation (Corrected):**

*   `BEQ wait_for_data`: Branches to `wait_for_data` if the `Z` flag is 1. The `Z` flag is 1 if `R3 & 0x01` is 0, meaning bit 0 of the status register is 0 (data not ready). The loop continues *waiting* until bit 0 becomes 1.

#### 3. Infinite Loops

While not always intentional, infinite loops can be created by having a condition that never becomes false or by missing the exit condition. They are sometimes used in embedded systems to keep the processor busy, for example, in a main application loop.

**Example:**

```assembly
main_loop:
    @ Perform system tasks
    BL      handle_interrupts
    BL      process_sensors
    BL      update_display

    B       main_loop     @ Unconditional branch back to the start
```

**Explanation:**

*   `B main_loop`: This is an unconditional branch that always jumps back to the `main_loop` label, creating an infinite loop.

---

## Optimizing Loops

Efficiency in loops is crucial, especially in embedded systems with limited resources.

*   **Minimize Branch Overhead:**
    *   Use instructions that combine operations and condition checking (like `SUBS` with `BNE`).
    *   Avoid unnecessary branches inside the loop body.
*   **Register Usage:**
    *   Keep frequently accessed variables (like loop counters, pointers) in registers to avoid slow memory accesses.
    *   Avoid register spilling (saving and restoring registers to/from the stack) within tight loops.
*   **Instruction Choice:**
    *   `SUBS` is often more efficient than `CMP` followed by a separate branch if the counter is modified.
    *   Consider the ARM instruction set's capabilities for vectorized operations if dealing with blocks of data, though this is more advanced.
*   **Loop Unrolling (Advanced):**
    *   This technique involves replicating the loop body multiple times and adjusting the loop counter accordingly. This reduces the overhead of loop control instructions (branching, counter updates) at the cost of increased code size.
    *   Example: Instead of looping 100 times, unrolling might process 4 items per iteration, looping only 25 times.

---

## Practice Questions and Exercises

**Question 1:**

Write an ARM assembly code snippet that calculates the sum of numbers from 1 to 100. Use `R0` for the sum and `R1` as the counter.

**Answer 1:**

```assembly
    MOV     R0, #0        @ Initialize sum to 0
    MOV     R1, #100      @ Initialize counter to 100

loop_sum:
    ADD     R0, R0, R1    @ Add current counter value to sum
    SUBS    R1, R1, #1    @ Decrement counter and set flags
    BNE     loop_sum      @ Branch if counter is not zero

    @ R0 now holds the sum of numbers from 1 to 100 (5050)
    @ Continue execution...
```

**Question 2:**

Write an ARM assembly code snippet that iterates through an array of 5 integers stored at memory address `R2` and copies each integer to memory address `R3`. Use `R4` as the loop counter (counting down from 5).

**Answer 2:**

```assembly
    MOV     R4, #5        @ Initialize counter to 5
    MOV     R5, R2        @ R5 points to the source array
    MOV     R6, R3        @ R6 points to the destination array

loop_copy:
    LDR     R0, [R5]      @ Load an integer from the source array
    STR     R0, [R6]      @ Store the integer in the destination array

    ADD     R5, R5, #4    @ Move source pointer to the next integer (assuming 32-bit)
    ADD     R6, R6, #4    @ Move destination pointer to the next integer

    SUBS    R4, R4, #1    @ Decrement counter and set flags
    BNE     loop_copy     @ Branch if counter is not zero

    @ Array copied successfully
    @ Continue execution...
```

**Question 3:**

Explain the difference between `SUBS R0, R0, #1` and `CMP R0, #0` followed by `BEQ` in the context of a loop termination. When might you prefer one over the other?

**Answer 3:**

*   **`SUBS R0, R0, #1`:** This instruction decrements `R0` and updates the condition flags. If used with a `BNE` (Branch if Not Equal), it effectively counts down and exits when `R0` reaches zero. The key is that it **modifies the counter register**.
*   **`CMP R0, #0`:** This instruction compares `R0` with `0` by performing a subtraction internally but discards the result. It only updates the condition flags. If used with `BEQ` (Branch if Equal), it exits when `R0` is equal to `0`. The key is that it **does not modify the counter register**.

**Preference:**

*   **Use `SUBS`:** When you are decrementing a counter and don't need its value after the loop, or if you intend for the counter to reach zero. It's a single instruction that performs both the decrement and flag update, potentially saving a clock cycle compared to a separate `SUB` and `CMP`. This is common for countdown loops.
*   **Use `CMP`:** When you need to preserve the final value of the counter after the loop. For example, if you are comparing an index against an upper limit and want to know the exact value of the index when the loop terminates.

---

## Important Points to Remember

*   **Conditional branches are the backbone of loops in assembly.** Understand instructions like `BEQ`, `BNE`, `BLT`, `BGE`, `BHI`, `BLS`, etc.
*   **The `S` suffix on instructions (like `SUBS`, `ADDS`, `MOVS`) is critical** for updating condition flags that are used by conditional branches.
*   **Loop overhead:** Every branch, every counter update adds a small cost. Strive to minimize these within tight loops.
*   **Register allocation:** Use registers efficiently. Avoid frequent stack operations for loop variables.
*   **Clarity vs. Efficiency:** While optimization is important, maintain code readability. Clear labeling and comments are essential for understanding loop logic.
*   **Understand the condition flags:** Know which flags (N, Z, C, V) are set by which operations and how they are interpreted by branch instructions.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


## References and Further Reading

*   **Fundamentals of Embedded Software with the ARM Cortex M3 by Daniel W Lewis (Pearson, 2e, 2015):** Refer to chapters discussing instruction sets, addressing modes, and control flow structures. Lewis likely provides examples of basic loop constructs.
*   **The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors by Joseph Yiu (Elsevier, 3e, 2014):** Yiu's book is a comprehensive resource. Look for sections detailing the ARM instruction set, focusing on data processing instructions with the `S` suffix and the various branch instructions.
*   **Embedded systems with ARM Cortex M Microcontrollers in Assembly and C by Yifeng Zhu (E-man Press, 3e, 2018):** This book will offer practical examples of implementing loops in assembly for embedded applications, likely showing how C constructs translate to assembly.

This concludes Module 3 on implementing loops. Mastering these concepts is vital for building any program that requires repetitive operations in ARM assembly.