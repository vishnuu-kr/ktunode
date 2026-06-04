---
title: "temporary variables"
subject: "ARM ARCHITECTURE AND PROGRAMMING"
module: "Module 3: Control structures in assembly language: instruction sequencing"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feb02"
status: "completed"
scrapedAt: "2026-05-23T17:53:37.601Z"
---
# ARM Architecture and Programming: Module 3 - Control Structures in Assembly Language: Instruction Sequencing

## Topic: Temporary Variables

This module delves into the fundamental concepts of controlling program flow in ARM assembly language, with a particular focus on how to manage and utilize temporary variables effectively. Understanding temporary variables is crucial for efficient instruction sequencing and for translating high-level programming constructs into low-level assembly code.

---

### Learning Outcomes Covered:

*   **Understanding the role of temporary variables in assembly language programming.** (Directly addressed by this topic)
*   **Identifying situations where temporary variables are necessary for instruction sequencing.** (Directly addressed by this topic)
*   **Demonstrating the use of registers as temporary variables in ARM assembly.** (Directly addressed by this topic)
*   **Applying principles of efficient register usage for temporary variables.** (Directly addressed by this topic)
*   **Relating the use of temporary variables in assembly to their counterparts in high-level languages (e.g., C).** (Addressed through examples and comparisons)

---

### 1. Key Concepts and Definitions

*   **Temporary Variable:** In assembly language, a temporary variable is a placeholder for data that is needed for a short duration during the execution of a sequence of instructions. It's typically used to hold intermediate results, loop counters, or values that need to be preserved while performing other operations. Unlike global or local variables that have specific storage locations in memory, temporary variables are often implemented using processor registers for speed and efficiency.

*   **Registers:** Registers are small, high-speed storage locations directly within the CPU. They are the fastest way to access and manipulate data in a processor. In ARM, there are a general-purpose register file (e.g., R0-R15).

*   **Instruction Sequencing:** The order in which instructions are executed by the processor. Control structures like branches, jumps, and calls alter this default sequential execution. Temporary variables play a vital role in enabling these control structures by holding values that determine the execution path.

*   **Register Allocation:** The process of assigning registers to hold specific data or program elements. Efficient register allocation is key to optimizing assembly code performance.

---

### 2. The Need for Temporary Variables in Instruction Sequencing

Temporary variables are indispensable for implementing control structures and managing data flow in assembly language. Here are key scenarios where they are essential:

*   **Holding Intermediate Results:** When performing calculations involving multiple steps, you need to store the result of each step before proceeding to the next.
    *   **Example:** Calculating `a = (b + c) * d`. You'd likely need a temporary variable to store `(b + c)` before multiplying by `d`.

*   **Loop Counters:** Loops require a variable to track the number of iterations. This counter is incremented or decremented in each iteration and checked against a termination condition.
    *   **Example:** A `for` loop in C. The loop counter variable would be a temporary variable in assembly.

*   **Conditional Execution:** Values used in conditional branches (e.g., comparing two numbers) often need to be held in registers temporarily.
    *   **Example:** `if (x > y) ...`. The values of `x` and `y` would be loaded into registers for comparison.

*   **Function/Subroutine Parameters and Return Values:** Registers are commonly used to pass arguments to subroutines and to return values from them. These register contents act as temporary variables during the subroutine's execution.

*   **Saving and Restoring Register Context:** When a subroutine is called, it might need to preserve the values of registers used by the calling routine. These preserved values are temporarily stored and later restored.

---

### 3. Using Registers as Temporary Variables in ARM Assembly

The primary way to implement temporary variables in ARM assembly is by using the general-purpose registers.

**Key ARM Registers:**

*   **R0-R12:** General-purpose registers that can be used for any purpose, including holding temporary variables.
*   **R13 (SP):** Stack Pointer. While primarily for managing the stack, it can sometimes be used for temporary storage if managed carefully.
*   **R14 (LR):** Link Register. Stores the return address for subroutine calls. Can be used as a temporary register if the original return address is saved.
*   **R15 (PC):** Program Counter. Points to the next instruction to be executed. Generally not used as a general-purpose temporary variable.

**Register Allocation Strategy:**

*   **Prioritize R0-R3:** These registers are often used for passing arguments and return values in function calls (AAPCS - ARM Architecture Procedure Call Standard). It's good practice to use these for temporary values that are part of function interactions.
*   **Use R4-R11:** These are excellent candidates for general-purpose temporary variables within a function or code block.
*   **Be Mindful of Caller/Callee Saved Registers:** If a function uses registers that the caller might also be using, it's responsible for saving their original values (e.g., on the stack) before modifying them and restoring them before returning. Registers R4-R11 are typically callee-saved, meaning a called function should preserve their values if it uses them. R0-R3 are caller-saved.

---

### 4. Examples of Temporary Variable Usage

Let's illustrate with examples.

**Example 1: Calculating `result = (a + b) * c`**

Assume `a`, `b`, and `c` are already loaded into registers `R1`, `R2`, and `R3` respectively. We want the final `result` in `R0`.

```assembly
    ; Assume:
    ; R1 holds 'a'
    ; R2 holds 'b'
    ; R3 holds 'c'

    ADD R4, R1, R2      ; R4 = R1 + R2 (R4 is a temporary to hold 'a + b')
    MUL R0, R4, R3      ; R0 = R4 * R3 (R0 holds the final result, R4 was temporary)

    ; R4 can now be reused for other purposes
```

*   **Explanation:**
    *   `R1` and `R2` hold the operands `a` and `b`.
    *   `R4` is used as a **temporary variable** to store the sum `a + b`.
    *   The `MUL` instruction then uses the value in `R4` and `R3` (holding `c`) to compute the final result, which is placed in `R0`.
    *   `R4` served its purpose as a temporary and can now be overwritten.

**Example 2: Implementing a Simple Loop**

Let's count down from 5 to 1 and print a message for each count. Assume a subroutine `PrintNumber` exists that prints the value in `R0`.

```assembly
    ; Initialize counter and loop parameters
    MOV R4, #5          ; R4 is our temporary variable (loop counter), initialized to 5
    MOV R5, #1          ; Assume R5 holds some other value or is a parameter for PrintNumber

LoopStart:
    CMP R4, #0          ; Compare the counter with 0
    BEQ LoopEnd         ; If R4 is equal to 0, branch to LoopEnd

    MOV R0, R4          ; Move the current count (in R4) to R0 for printing
    BL PrintNumber      ; Call the subroutine to print the number

    SUB R4, R4, #1      ; Decrement the counter (R4)
    B LoopStart         ; Branch back to the start of the loop

LoopEnd:
    ; Continue program execution
```

*   **Explanation:**
    *   `R4` is the **temporary variable** acting as the loop counter. It's initialized to 5.
    *   `CMP R4, #0` compares the counter with the termination condition (0).
    *   `SUB R4, R4, #1` decrements the counter in each iteration.
    *   `R0` is also used as a temporary register to hold the value to be printed by `PrintNumber`.

---

### 5. Practice Questions and Exercises

**Question 1:**

You need to compute `x = (y * z) + w`. Assume `y`, `z`, and `w` are loaded into registers `R5`, `R6`, and `R7` respectively. Show the ARM assembly code to perform this calculation and store the result in `R0`. Identify which register you use as a temporary variable.

**Answer 1:**

```assembly
    ; Assume:
    ; R5 holds 'y'
    ; R6 holds 'z'
    ; R7 holds 'w'

    MUL R4, R5, R6      ; R4 = R5 * R6 (R4 is the temporary variable for the product)
    ADD R0, R4, R7      ; R0 = R4 + R7 (R0 holds the final result)

    ; R4 was used as a temporary variable.
```

**Question 2:**

Write ARM assembly code to implement a loop that iterates 10 times. Inside the loop, add the current iteration number (starting from 1) to a sum stored in `R3`. Use `R4` as your loop counter and `R0` as the current iteration number.

**Answer 2:**

```assembly
    ; Initialize sum and counter
    MOV R3, #0          ; R3 will hold the sum, initialized to 0
    MOV R4, #10         ; R4 is the loop counter, initialized to 10

LoopStart:
    CMP R4, #0          ; Check if counter is zero
    BEQ LoopEnd         ; If zero, exit loop

    MOV R0, R4          ; R0 holds the current iteration number (from 10 down to 1)
    ; If you need iteration 1 to 10, you'd need to calculate it, e.g., SUB R0, #11, R4
    ; For simplicity, let's use the countdown value for now, assuming the requirement is to add it.
    ; A better approach for counting 1 to 10:
    ; MOV R0, #10       ; Initialize a separate counter for iteration number
    ; SUB R0, R0, R4    ; Calculate current iteration number (10 - 9 = 1, ..., 10 - 0 = 10)
    ; ADD R3, R3, R0    ; Add the iteration number to the sum

    ; Let's re-do for iteration 1 to 10 using a separate counter for clarity:

    MOV R3, #0          ; R3: sum, initialized to 0
    MOV R4, #10         ; R4: loop counter (countdown)
    MOV R0, #1          ; R0: iteration number (countdown), starting from 1

LoopStartRevised:
    CMP R4, #0          ; Check if counter is zero
    BEQ LoopEndRevised  ; If zero, exit loop

    ADD R3, R3, R0      ; Add current iteration number (R0) to the sum (R3)

    ADD R4, R4, #-1     ; Decrement loop counter (R4)
    ADD R0, R0, #1      ; Increment iteration number (R0)
    B LoopStartRevised  ; Branch back to loop start

LoopEndRevised:
    ; R3 now holds the sum of numbers from 1 to 10 (which is 55)
```

*   **Explanation:**
    *   `R4` is the **temporary variable** acting as the loop counter, counting down from 10.
    *   `R0` is used as a **temporary variable** to hold the current iteration number, counting up from 1.
    *   `R3` stores the accumulating sum.
    *   The loop continues as long as `R4` is not zero.

---

### 6. Important Points to Remember

*   **Registers are your primary tool:** For efficiency, always try to use registers for temporary variables in assembly.
*   **Be aware of register usage conventions (AAPCS):** Understand which registers are expected to be preserved by called functions (callee-saved) and which can be freely modified (caller-saved).
*   **Register Overwriting:** Once a temporary variable's value is no longer needed, the register can be reused for other purposes. Be careful not to overwrite a register holding a value you'll need later without saving it first.
*   **Documentation:** When writing assembly, comment your code to indicate which registers are being used for temporary variables and their purpose. This significantly improves readability and maintainability.
*   **Optimization:** Efficient use of temporary variables (i.e., minimizing unnecessary register saves/restores and using the fastest available registers) is a key aspect of performance optimization in assembly.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 7. References and Textual Content Integration

*   **Fundamentals of Embedded Software with the ARM Cortex M3 by Daniel W Lewis (Pearson, 2e, 2015):** This textbook likely provides foundational explanations of processor architecture, including the role of registers and basic instruction sets. Chapter 3, "Introduction to ARM Assembly Language," would be particularly relevant for understanding basic register operations and how they relate to temporary storage. Lewis emphasizes the importance of registers for speed and direct hardware manipulation.

*   **The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors by Joseph Yiu (Elsevier, 3e, 2014):** Yiu's book is an authoritative source for ARM Cortex-M specifics. Chapter 2, "ARM Processor Architecture," would detail the register file organization (R0-R15), the purpose of the Link Register (LR), and the Stack Pointer (SP). Understanding the AAPCS (ARM Architecture Procedure Call Standard) as discussed in Yiu's book is crucial for proper register allocation, especially concerning temporary variables passed between functions. Yiu highlights the performance implications of register usage.

*   **Embedded Systems with ARM Cortex M Microcontrollers in Assembly and C by Yifeng Zhu (E-man Press, 3e, 2018):** Zhu's book bridges assembly and C. Chapter 3, "ARM Assembly Language Programming," would provide practical examples of assembly instructions and how to implement basic control flow. Zhu's approach often contrasts assembly implementations with their C equivalents, implicitly showing how variables in C (like loop counters or intermediate calculation results) are mapped to registers as temporary variables in assembly.

---

### 8. Alignment with Course Outcomes

*   **CO1: Use the features of C that are frequently used in embedded systems (Knowledge Level: K3):** While this topic is on assembly, understanding temporary variables in assembly helps us appreciate how C constructs like temporary variables, loop counters, and intermediate calculation storage are implemented under the hood. This knowledge enhances our ability to write more efficient C code for embedded systems.

*   **CO2: Explain a programmer’s view of processor architecture (Knowledge Level: K2):** This topic directly addresses the programmer's view of the processor by focusing on the register file as the primary resource for temporary data storage. We learn how registers facilitate instruction sequencing and data manipulation.

*   **CO3: Choose between programming at the level of assembly or C as appropriate (Knowledge Level: K3):** By understanding the fundamental mechanics of temporary variable handling in assembly, we gain insight into the low-level operations that compilers perform. This awareness helps in making informed decisions about when assembly might offer a performance advantage (e.g., highly optimized loops) or when C's abstraction is more suitable for rapid development and maintainability. We can see that efficient temporary variable management is a key performance differentiator.

---