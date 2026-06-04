---
title: "preserving registers"
subject: "ARM ARCHITECTURE AND PROGRAMMING"
module: "Module 3: Control structures in assembly language: instruction sequencing"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feb03"
status: "completed"
scrapedAt: "2026-05-23T17:53:38.294Z"
---
# ARM Architecture and Programming: Module 3 - Control Structures in Assembly Language: Instruction Sequencing

## Topic: Preserving Registers

This topic delves into the crucial practice of preserving registers when writing assembly language programs for ARM processors, particularly focusing on how this impacts instruction sequencing and subroutine calls.

---

### Learning Outcomes Covered:

*   **Understanding the need for register preservation:** Why it's essential to save and restore register values.
*   **Identifying caller-saved and callee-saved registers:** Differentiating between registers the caller must save and registers the callee must save.
*   **Implementing register preservation techniques:** Learning common methods like using the stack.
*   **Applying register preservation in subroutine calls:** Understanding how it facilitates modular programming.
*   **Relating register preservation to the ARM Procedure Call Standard (AAPCS):** How the standard dictates register usage and preservation.

---

### Key Concepts and Definitions:

*   **Register Preservation:** The act of saving the current value of a register before modifying it and restoring its original value later. This is critical to prevent unintended side effects in calling routines or other parts of the program.
*   **Subroutine (Function/Procedure):** A block of code designed to perform a specific task that can be called from different parts of a program.
*   **Caller:** The part of the program that calls a subroutine.
*   **Callee:** The subroutine that is being called.
*   **Volatile Registers:** Registers that a called subroutine is free to modify without needing to restore their original values. The caller implicitly accepts that these registers may be changed.
*   **Non-Volatile Registers:** Registers that a called subroutine *must* preserve. If the callee modifies these registers, it is obligated to restore their original values before returning.
*   **Stack:** A region of memory used for temporary storage. In ARM, it's typically implemented as a Last-In, First-Out (LIFO) data structure, commonly used for saving return addresses, local variables, and register values during subroutine calls.
*   **Stack Pointer (SP):** A register (usually `R13` in ARM) that points to the current top of the stack.
*   **Push:** An operation that adds data to the top of the stack, typically by decrementing the stack pointer and then storing the data at the new stack pointer address.
*   **Pop:** An operation that retrieves data from the top of the stack, typically by reading the data at the stack pointer address and then incrementing the stack pointer.
*   **ARM Procedure Call Standard (AAPCS):** A set of conventions that define how procedures (subroutines) should be called and how arguments are passed, return values are handled, and registers are preserved. Adherence to AAPCS promotes interoperability between different functions and compilers.

---

### Why is Register Preservation Necessary?

In assembly language programming, especially when dealing with subroutines, it's crucial to ensure that a called subroutine doesn't inadvertently corrupt the data or program state of the calling routine. This is achieved through register preservation.

*   **Preventing Side Effects:** Without preservation, a subroutine might modify a register that the calling code relies on for its ongoing operations, leading to incorrect results or program crashes.
*   **Modular Programming:** Register preservation is fundamental to building modular software. It allows developers to create independent subroutines that can be used without needing to know the internal register usage of every other part of the program.
*   **Interoperability:** When different modules or libraries are developed, adhering to established conventions like AAPCS ensures they can work together seamlessly.

---

### Caller-Saved vs. Callee-Saved Registers:

The responsibility for preserving registers is divided between the caller and the callee. The ARM Procedure Call Standard (AAPCS) defines which registers fall into which category.

**1. Caller-Saved Registers (often called "Scratch Registers" or "Volatile Registers"):**

*   **Responsibility:** The *caller* is responsible for preserving these registers if it needs their values after the subroutine call.
*   **Why:** The callee is free to use these registers for its own temporary storage and computations without needing to restore them.
*   **Common AAPCS Caller-Saved Registers:**
    *   `R0` - `R3`: Commonly used for passing arguments and returning values.
    *   `R12` (IP - Intra-Procedure-call scratch register)
    *   `LR` (Link Register - `R14`): Used to store the return address. If a subroutine calls another subroutine, it might need to save the `LR` of the caller.
    *   `PC` (Program Counter - `R15`): Not directly preserved as a value, but the `LR` holds the return address.

**2. Callee-Saved Registers (often called "Non-Volatile Registers"):**

*   **Responsibility:** The *callee* is responsible for preserving these registers if it intends to use them for its own operations.
*   **Why:** The caller assumes that these registers will retain their original values after the subroutine returns.
*   **Common AAPCS Callee-Saved Registers:**
    *   `R4` - `R11`: Typically used for local variables, parameters, and general-purpose storage within a subroutine.
    *   `SP` (`R13`): The stack pointer itself is maintained by the stack operations.

**(Refer to Lewis, Chapter 6: Subroutines and Stack Operations, and Yiu, Chapter 4: Procedure Call Standard and Stack Operations for detailed discussions on AAPCS register classification.)**

---

### Implementing Register Preservation: Using the Stack

The most common and effective method for preserving registers is by using the stack.

**Process:**

1.  **Before Calling a Subroutine:** If the caller needs to preserve any callee-saved registers that it intends to use within the subroutine, it must push their current values onto the stack.
2.  **During Subroutine Execution:** The callee can now freely use any caller-saved registers. If the callee needs to use any callee-saved registers, it must push their original values onto the stack *before* modifying them.
3.  **Upon Returning from Subroutine:**
    *   The callee pops the saved callee-saved registers from the stack and restores them to their original locations.
    *   The caller pops any saved caller-saved registers from the stack and restores them.

**Stack Pointer (SP) Management:**

*   When pushing registers, the stack pointer is typically decremented (for a descending stack, which is common in ARM).
*   When popping registers, the stack pointer is incremented.
*   The `PUSH` and `POP` instructions are optimized for this purpose.

#### Example: Preserving Registers with a Subroutine

Let's consider a scenario where `main` calls a subroutine `process_data`. `main` uses `R4` for an important value and `process_data` needs to use `R4` for its internal calculations.

**Scenario:** `main` needs to preserve its `R4` before calling `process_data`. `process_data` also needs to preserve `R7` because it uses it for a loop counter.

```assembly
; Assume R4 and R7 hold important values in main

; --- Code in main ---
    PUSH {R4, R5}     ; Caller: Save R4 (callee-saved) and R5 (example) before calling.
                      ; LR might also need to be saved if process_data calls another function.
                      ; If LR is needed, use PUSH {R4, R5, LR}.

    ; ... code that uses R4 and R5 ...

    BL process_data   ; Call the subroutine

    ; ... code in main that still relies on the original R4 and R5 ...

    POP {R4, R5}      ; Caller: Restore R4 and R5 after the subroutine returns.
                      ; If LR was pushed, it would be popped here as well.

; --- Subroutine: process_data ---
process_data:
    ; Callee: Preserve R7 (callee-saved) before using it.
    PUSH {R7}

    ; ... code within process_data that uses R7 ...
    MOV R7, #10       ; Example: process_data uses R7

    ; ... more processing ...

    ; Callee: Restore R7 before returning.
    POP {R7}

    BX LR             ; Return from the subroutine (Branch and Exchange to Link Register)

```

**Explanation:**

*   **Caller (`main`):**
    *   `PUSH {R4, R5}`: Saves the current values of `R4` and `R5` onto the stack. This is necessary because `process_data` might modify them, and `main` needs their original values later. `R4` and `R5` are generally considered callee-saved by AAPCS.
    *   `BL process_data`: The `BL` (Branch with Link) instruction jumps to the `process_data` label. Crucially, it also stores the address of the *next* instruction in `main` into the `LR` (Link Register). This `LR` value is the return address.
    *   `POP {R4, R5}`: After `process_data` returns (by executing `BX LR`), `main` retrieves the saved values of `R4` and `R5` from the stack, restoring them to their original states.
*   **Callee (`process_data`):**
    *   `PUSH {R7}`: Saves the current value of `R7` onto the stack. This is because `process_data` intends to use `R7` for its own purposes, and the caller (or other functions called by `process_data`) might be relying on its original value. `R7` is a callee-saved register.
    *   `MOV R7, #10`: `process_data` uses `R7` for its operation.
    *   `POP {R7}`: Before returning, `process_data` restores the original value of `R7` from the stack.
    *   `BX LR`: This instruction branches to the address stored in the `LR`. Since `main` used `BL process_data`, `LR` contains the return address in `main`.

**Important Considerations for `PUSH`/`POP`:**

*   **Multiple Registers:** You can push or pop multiple registers at once, e.g., `PUSH {R4-R7}`. This is more efficient than individual `PUSH` instructions.
*   **Stack Growth Direction:** ARM processors typically use a descending stack (SP decreases as items are pushed).
*   **`LR` Preservation:** If a subroutine calls another subroutine, it must save its own `LR` (which is the return address for the current function) before calling the new subroutine. This is often done by pushing `LR` along with other callee-saved registers.
*   **`PC` and `SP`:** `PC` cannot be directly pushed or popped. `SP` is managed by `PUSH`/`POP` operations.

#### **Efficient Stack Operations:**

ARM provides instructions like `LDM` (Load Multiple) and `STM` (Store Multiple) which can perform the push and pop operations for a list of registers more efficiently.

*   `STMDB SP!, {R4-R7, LR}`: Store Multiple Decrement Before. This pushes `R4` through `R7` and `LR` onto the stack, decrementing `SP` before each store. The `!` indicates that `SP` should be updated. This is equivalent to `PUSH {R4-R7, LR}`.
*   `LDMIA SP!, {R4-R7, PC}`: Load Multiple Increment After. This pops registers from the stack, incrementing `SP` after each load. If `PC` is in the list of registers to be loaded, the popped value will be loaded directly into the `PC`, effectively performing the return. This is equivalent to `POP {R4-R7}` followed by `BX LR` if `LR` was the last register pushed and is loaded into `PC`.

**(Refer to Lewis, Chapter 6.4: Subroutine Control Flow and Yiu, Chapter 4.3: Stack Frame Setup and Teardown for detailed examples of `STM` and `LDM` for stack operations.)**

---

### Register Preservation in Subroutine Calls and the AAPCS:

The ARM Procedure Call Standard (AAPCS) provides guidelines to ensure that functions can be called reliably. A key part of AAPCS is the register usage convention.

*   **Argument Passing:** `R0`-`R3` are used for the first four arguments to a function.
*   **Return Values:** `R0` is used for the return value.
*   **Register Preservation:**
    *   If a function (callee) uses `R4`-`R11`, it must save them on the stack before using them and restore them before returning.
    *   If a function (callee) modifies `R0`-`R3`, `R12`, or `LR`, it's assumed the caller has either saved them if necessary or is content with them being modified.
    *   `R14` (`LR`) should be preserved if the function calls another function. The `BL` instruction automatically saves the return address into `LR`. If a function needs to call another function, it must save its current `LR` first.

**(Refer to Yiu, Chapter 4: Procedure Call Standard and Stack Operations for a comprehensive overview of AAPCS, including register classification and stack frame management.)**

---

### Aligning with Course Outcomes:

*   **CO1: Use the features of C that are frequently used in embedded systems (K3)**
    *   While this topic is about assembly, understanding register preservation in assembly directly informs how C compilers manage local variables, function arguments, and return values. Knowledge of `R4`-`R11` as callee-saved registers helps understand why C compilers might generate code that saves these registers. It also highlights the underlying efficiency of stack operations, which C leverages implicitly.
*   **CO2: Explain a programmer’s view of processor architecture (K2)**
    *   This topic directly addresses the programmer's view by explaining the roles of specific registers (`R0`-`R15`), the stack pointer (`SP`), the Link Register (`LR`), and the concept of register classes (caller-saved vs. callee-saved). It shows how these architectural features are used to manage program flow and data during subroutine calls.
*   **CO3: Choose between programming at the level of assembly or C as appropriate (K3)**
    *   Understanding the complexities of register preservation in assembly underscores why high-level languages like C are often preferred. C compilers abstract away these details, handling register allocation and preservation automatically. However, for performance-critical sections or hardware interaction, knowing assembly and register preservation is essential for writing efficient C code or hand-optimizing critical routines.

---

### Practice Questions and Exercises:

**Question 1:**
What is the primary reason for preserving registers in assembly language programming?
a) To increase program speed.
b) To allow subroutines to modify registers freely without side effects.
c) To maintain the integrity of data and program state in calling routines.
d) To reduce the amount of code.

**Question 2:**
Which of the following registers are typically considered "callee-saved" according to the AAPCS?
a) `R0`, `R1`, `R2`, `R3`
b) `R4`, `R5`, `R6`, `R7`
c) `R12`
d) `PC`

**Question 3:**
When a subroutine needs to call another subroutine, why is it crucial to preserve the `LR` register?
a) The `LR` register is needed for arithmetic operations within the nested subroutine.
b) The `LR` register holds the return address for the current subroutine. If it's overwritten, the program won't know where to return.
c) The `LR` register is used to pass arguments to the nested subroutine.
d) The `LR` register's value is important for the stack pointer.

**Question 4:**
Write a small ARM assembly code snippet that demonstrates a subroutine `my_adds` that adds two numbers passed in `R0` and `R1`, stores the result in `R2`, and importantly, preserves `R4` if it uses it. Assume `R4` might be used by the caller.

---

### Answers:

**Answer 1:**
c) To maintain the integrity of data and program state in calling routines.
*   Explanation: Register preservation ensures that the state of the calling program is not altered unexpectedly by the called subroutine.

**Answer 2:**
b) `R4`, `R5`, `R6`, `R7`
*   Explanation: Registers `R4` through `R11` are generally callee-saved, meaning the subroutine must save and restore them if it uses them. `R0`-`R3` are caller-saved for arguments/return values, `R12` is a scratch register, and `PC` is the program counter.

**Answer 3:**
b) The `LR` register holds the return address for the current subroutine. If it's overwritten, the program won't know where to return.
*   Explanation: The `BL` instruction stores the return address in `LR`. If the subroutine calls another function, it uses `BL` again, overwriting the original `LR`. Thus, the original `LR` (the return address to the caller) must be saved before the nested call.

**Answer 4:**
```assembly
; --- Subroutine: my_adds ---
; Input: R0 = first number, R1 = second number
; Output: R2 = sum
; Preserves: R4 if used.

my_adds:
    ; Check if R4 is needed. If so, save it.
    ; For this example, let's assume R4 is used for a temporary counter.
    PUSH {R4}        ; Preserve R4 (callee-saved) before using it.

    MOV R2, R0       ; Initialize R2 with the first number
    ADD R2, R2, R1   ; Add the second number to R2

    ; Example usage of R4 within the subroutine
    MOV R4, #0       ; Initialize R4
@loop:
    CMP R4, #5
    BGE @end_loop    ; Branch if R4 is greater than or equal to 5
    ADD R2, R2, R1   ; Perform some operation with R4 influencing R2 (example)
    ADD R4, R4, #1   ; Increment R4
    B @loop

@end_loop:

    ; Restore R4 before returning
    POP {R4}         ; Restore the original value of R4

    BX LR            ; Return to the caller

; --- Caller Code Example (Illustrative) ---
; main:
;    PUSH {R4}         ; Caller preserves its own R4 if needed after the call
;    MOV R0, #5
;    MOV R1, #10
;    BL my_adds        ; Call the subroutine
;    ; R2 now holds the sum (modified by my_adds)
;    ; The original R4 is preserved by main if it was pushed.
;    POP {R4}          ; Caller restores its R4
;    BX LR
```
*   Explanation: The `my_adds` subroutine first preserves `R4` by pushing it onto the stack. It then performs its addition. An example of `R4` being used internally is shown. Finally, it restores `R4` before returning using `BX LR`. The caller would also be responsible for preserving its own `R4` if it needed its value after the call.

---

### Important Points to Remember:

*   **AAPCS is Key:** Always refer to the ARM Procedure Call Standard for register usage and preservation rules.
*   **Stack is Your Friend:** The stack is the primary mechanism for saving and restoring registers.
*   **Caller vs. Callee Responsibility:** Clearly understand who is responsible for which registers.
*   **`LR` Handling:** Nested subroutine calls require careful management of the `LR` register.
*   **`STM`/`LDM` Efficiency:** Use `STM`/`LDM` for multiple register stack operations for better performance.
*   **Compiler Behavior:** High-level languages (like C) abstract these details, but understanding assembly implementation helps write more efficient C code and debug low-level issues.

---
This comprehensive study guide covers the essential aspects of preserving registers in ARM assembly language programming, aligning with the learning outcomes and course objectives.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
