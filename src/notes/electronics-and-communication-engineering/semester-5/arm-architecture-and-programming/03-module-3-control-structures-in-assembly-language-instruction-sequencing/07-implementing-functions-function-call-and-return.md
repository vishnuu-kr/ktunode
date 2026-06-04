---
title: "Implementing functions: function call and return"
subject: "ARM ARCHITECTURE AND PROGRAMMING"
module: "Module 3: Control structures in assembly language: instruction sequencing"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feafe"
status: "completed"
scrapedAt: "2026-05-23T17:53:34.867Z"
---
# ARM Architecture and Programming: Module 3 - Control Structures in Assembly Language

## Topic: Implementing Functions: Function Call and Return

This module delves into how functions are implemented in ARM assembly language, focusing on the crucial mechanisms of function calls and returns. Understanding these processes is fundamental to building modular and maintainable embedded software, and directly relates to how C code, when compiled, translates into assembly.

---

### 1. Learning Outcomes

By the end of this topic, you will be able to:

*   **Understand the concept of a function call and return in the context of assembly language.** (CO2: K2)
*   **Identify the role of the stack in function calls.** (CO2: K2)
*   **Explain the purpose of the Link Register (LR) in function calls.** (CO2: K2)
*   **Describe the typical assembly instructions used for function calls (e.g., BL, MOV LR, BX LR).** (CO2: K2)
*   **Illustrate how parameters are passed to and returned from functions in assembly.** (CO2: K2)
*   **Relate assembly-level function implementation to C-level function behavior.** (CO1: K3, CO3: K3)

---

### 2. Key Concepts and Definitions

#### 2.1. What is a Function (or Subroutine)?

In programming, a function (or subroutine) is a block of code that performs a specific task. It can be called (executed) from various parts of a program. Functions promote:

*   **Modularity:** Breaking down complex problems into smaller, manageable units.
*   **Reusability:** Writing code once and using it multiple times.
*   **Maintainability:** Easier to understand, debug, and update.

#### 2.2. The Role of the Stack in Function Calls

The **stack** is a region of memory that operates on a Last-In, First-Out (LIFO) principle. In the context of function calls, the stack is essential for:

*   **Storing the return address:** Where the program should resume execution after the function finishes.
*   **Passing arguments:** If arguments exceed the number that can be held in registers.
*   **Saving local variables:** Variables declared within the function that need to persist their values across recursive calls or nested calls.
*   **Saving registers:** Preserving the state of registers used by the calling function, so they can be restored upon function return.

The ARM Cortex-M processors typically use the **Stack Pointer (SP)** register to manage the stack. The stack grows downwards in memory (from higher addresses to lower addresses).

**Key Stack Operations:**

*   **Push:** Adds data to the top of the stack. In ARM assembly, this is often done using `PUSH`.
*   **Pop:** Removes data from the top of the stack. In ARM assembly, this is often done using `POP`.

#### 2.3. The Link Register (LR)

The **Link Register (LR)**, also known as R14, is a special-purpose register in ARM processors. Its primary role in function calls is to **store the return address**.

*   When a function call instruction is executed, the processor automatically saves the address of the instruction *immediately following* the call instruction into the LR.
*   This allows the function to know exactly where to return to after it has completed its execution.

#### 2.4. Function Call Mechanism

A typical function call involves several steps:

1.  **Parameter Passing:** Arguments (parameters) are passed to the function. This can be done via registers or the stack.
2.  **Saving Context (Optional but good practice):** The calling function might save certain registers it needs to preserve before the call.
3.  **Branching to the Function:** The program branches to the starting address of the function. The return address is saved simultaneously.
4.  **Function Execution:** The function performs its tasks. It may use its own registers, potentially saving and restoring them if they are also used by the calling function.
5.  **Return Value Passing:** The result of the function is placed in a designated register (commonly R0).
6.  **Returning to the Caller:** The function returns control to the instruction immediately following the call instruction in the caller.

#### 2.5. Function Return Mechanism

The function return mechanism is the inverse of the call:

1.  **Place Return Value:** The function places its result in a designated register (usually R0).
2.  **Restore Context (Optional):** The function restores any registers it saved before calling other functions or before returning.
3.  **Branching Back:** The function branches back to the address stored in the LR.

---

### 3. ARM Assembly Instructions for Function Call and Return

#### 3.1. `BL` (Branch with Link)

The most common instruction for calling a subroutine is `BL`.

*   **Functionality:** `BL` performs a branch to a label and simultaneously **copies the address of the next instruction into the Link Register (LR)**.
*   **Syntax:** `BL <label>`
*   **Example:**
    ```assembly
    ; Call the subroutine named 'my_function'
    BL my_function
    ; Execution continues here after my_function returns
    ```
*   **Textbook Reference:** Lewis (2015) likely discusses `BL` as the primary mechanism for subroutine calls. Yiu (2014) will provide detailed architectural explanations of how the `BL` instruction interacts with the processor pipeline and the LR.

#### 3.2. `BX` (Branch and Exchange)

The `BX` instruction is used to return from a function.

*   **Functionality:** `BX` branches to the address specified by a register. When used with `LR` (e.g., `BX LR`), it effectively returns control to the address stored in the Link Register.
*   **Syntax:** `BX <register>`
*   **Example:**
    ```assembly
    ; Inside the function, to return to the caller
    BX LR
    ```
*   **Textbook Reference:** Similar to `BL`, Lewis will cover its usage in function returns, while Yiu will explain its role in switching processor states (e.g., ARM vs. Thumb), though for Cortex-M, it's predominantly used for returning from subroutines.

#### 3.3. `MOV LR, PC` (For Indirect Calls or Saving LR)

While `BL` automatically saves the return address into LR, sometimes you need to explicitly set the LR.

*   **Functionality:** `MOV LR, PC` copies the current program counter (PC) value into the LR. This is useful if you're manually setting up a function call or need to save the return address for later use.
*   **Syntax:** `MOV LR, PC`
*   **Example:**
    ```assembly
    ; Save return address before a nested call or other operations
    MOV LR, PC
    ; ... potentially some operations ...
    ; Branch to another function (which will eventually BX LR)
    BL other_function
    ; ... execution continues after other_function ...
    ; Now, manually return to the original caller (if needed)
    BX LR
    ```
*   **Important Note:** This is less common for standard function calls than `BL`, but it's crucial for understanding how the LR can be managed.

#### 3.4. Saving and Restoring Registers with `PUSH` and `POP`

When a function uses registers that are also used by the calling function, it's essential to save those registers before use and restore them before returning. This is typically done using the `PUSH` and `POP` instructions.

*   **`PUSH`:** Pushes one or more registers onto the stack. The stack pointer (SP) is decremented accordingly.
    *   **Syntax:** `PUSH {<reg_list>}` (e.g., `PUSH {R4, R5, LR}`)
*   **`POP`:** Pops one or more registers from the stack. The stack pointer (SP) is incremented accordingly.
    *   **Syntax:** `POP {<reg_list>}` (e.g., `POP {R4, R5, PC}`)
        *   Note: Popping into `PC` is a common way to return, as it automatically loads the return address from the stack into the PC.

*   **Example: A Function that uses R4, R5 and needs to return**
    ```assembly
    ; --- Calling Function ---
    ; ... some code ...
    MOV R0, #10       ; Argument 1
    MOV R1, #5        ; Argument 2
    BL add_numbers    ; Call the function

    ; R0 now holds the result (e.g., 15)
    ; ... rest of the calling function ...

    END

    ; --- add_numbers Function ---
    add_numbers
        PUSH {R4, R5, LR}   ; Save R4, R5, and the return address (LR)

        ; Function logic: Assume R0 is num1, R1 is num2
        MOV R4, R0          ; Save num1 in R4 (because we might use R0 for intermediate results)
        MOV R5, R1          ; Save num2 in R5

        ADD R0, R4, R5      ; Perform addition, result in R0

        POP {R4, R5, PC}    ; Restore R4, R5, and return to the caller (PC = LR)
        ; The instruction following POP {..., PC} is never reached
    ```

*   **Textbook Reference:** Lewis (2015) and Zhu (2018) will dedicate sections to stack management and the `PUSH`/`POP` instructions for saving/restoring context. Yiu (2014) will provide the underlying architecture for how the stack pointer is manipulated by these instructions.

#### 3.5. Parameter Passing Conventions

*   **Register Passing:** The most efficient way to pass parameters is by using registers. For ARM Cortex-M, the first few arguments are typically passed in registers `R0` through `R3`.
    *   If there are more than four arguments, the remaining arguments are passed on the stack.
*   **Return Value:** The return value from a function is typically placed in register `R0`.
    *   If the return value is larger than what can fit in `R0` (e.g., a structure), it might be returned via a pointer passed as an argument, or a pointer to a buffer allocated by the caller.

*   **Textbook Reference:** Lewis (2015) and Zhu (2018) will discuss typical embedded system calling conventions, often aligning with the ARM Procedure Call Standard (AAPCS). Yiu (2014) might explain the register set and their intended uses in the architecture.

---

### 4. Relating Assembly to C Functions

(CO1: K3, CO3: K3)

Understanding function calls in assembly directly illuminates how C code is translated by the compiler.

*   **C Function Definition:**
    ```c
    int add_numbers(int num1, int num2) {
        return num1 + num2;
    }
    ```
*   **Compiled Assembly (Conceptual):**
    The C compiler would generate assembly code similar to the `add_numbers` example shown earlier using `BL`, `PUSH`, `POP`, and `BX LR`.

    *   `int num1` would likely be passed in `R0`.
    *   `int num2` would likely be passed in `R1`.
    *   The `return num1 + num2;` statement would compile to `ADD R0, R0, R1` (assuming `num1` is in `R0` and `num2` in `R1` after potentially moving arguments if they came from the stack).
    *   The function prologue would include `PUSH {LR}` (or `PUSH {R4, LR}` if it used `R4`).
    *   The function epilogue would include `POP {PC}` (or `POP {R4, PC}`).

*   **Why is this important?**
    *   **Performance Tuning:** By understanding the assembly output, you can identify inefficiencies in your C code or directly optimize critical sections in assembly.
    *   **Debugging:** When debugging complex C code involving function calls, knowing the underlying assembly can help pinpoint issues, especially with parameter passing or register corruption.
    *   **Embedded Constraints:** In highly constrained embedded systems, knowing how functions are implemented at the assembly level helps in making informed decisions about code size and stack usage.

---

### 5. Examples

#### 5.1. Simple Function Call and Return

**Scenario:** Call a function `print_message` that takes no arguments and does something.

```assembly
; --- main program ---
main
    BL print_message        ; Call the function

    ; After print_message returns, execution continues here
    B loop                  ; Infinite loop for simulation

; --- print_message function ---
print_message
    ; Save LR if we need to call other functions from here
    ; PUSH {LR}

    ; Simulate printing a message (e.g., sending to UART, not shown here)
    ; ... function's work ...

    ; Restore LR if it was saved
    ; POP {PC}              ; Or BX LR if LR was saved directly
    BX LR                   ; Return to caller
```

#### 5.2. Function with Arguments and Return Value

**Scenario:** A function `multiply` that takes two integers and returns their product.

```assembly
; --- main program ---
main
    MOV R0, #6      ; Argument 1 (num1)
    MOV R1, #7      ; Argument 2 (num2)
    BL multiply     ; Call multiply. Result will be in R0.

    ; R0 now contains 42
    ; ... rest of the program ...

loop
    B loop          ; Infinite loop

; --- multiply function ---
multiply
    PUSH {R4, LR}   ; Save R4 (to preserve caller's R4 if used) and the return address (LR)

    MOV R4, R0      ; Store the first argument (num1) in R4
    MUL R0, R4, R1  ; Multiply R4 (num1) by R1 (num2). Result in R0.

    POP {R4, PC}    ; Restore R4 and return to caller (PC = LR)
```

**Explanation:**
1.  In `main`, we load `6` into `R0` and `7` into `R1` as arguments.
2.  `BL multiply` transfers control to `multiply` and saves the address of the instruction *after* `BL` into `LR`.
3.  Inside `multiply`:
    *   `PUSH {R4, LR}` saves the current value of `R4` and `LR` onto the stack. This is good practice if `multiply` needs to use `R4` or if it plans to call another function, in which case `LR` would be overwritten by the `BL` to that new function.
    *   `MOV R4, R0` copies the first argument from `R0` into `R4` because the `MUL` instruction can use `R0` for the destination and one of the operands, but it's safer to move one argument to a preserved register like `R4`.
    *   `MUL R0, R4, R1` performs the multiplication. `R4` holds `num1`, `R1` holds `num2`. The result is placed in `R0` as per the convention for return values.
    *   `POP {R4, PC}` restores the saved value of `R4` and then loads the value from the stack (which was the original `LR`) into the `PC`, causing the program to resume execution at the instruction after the `BL multiply` in `main`.

---

### 6. Practice Questions and Exercises

**Question 1:**
What is the primary role of the Link Register (LR) during a function call in ARM assembly?

**Question 2:**
Which instruction is most commonly used to initiate a function call in ARM assembly, and what does it do besides branching?

**Question 3:**
If a function needs to use registers R4, R5, and R6, and it might call other functions, what instructions would you typically use at the beginning and end of the function to preserve the caller's context and ensure proper return?

**Question 4:**
Consider the following C code:
```c
int calculate_sum(int a, int b) {
    return a + b;
}

int main() {
    int x = 5;
    int y = 10;
    int result = calculate_sum(x, y);
    return 0;
}
```
Assuming `x` is loaded into `R0` and `y` into `R1` before the call to `calculate_sum`, what ARM assembly instructions would likely be generated for the `calculate_sum` function itself, assuming it needs to preserve `R4`?

**Question 5:**
Explain why using `PUSH` and `POP` to save and restore registers is important when implementing functions. What could happen if registers are not properly saved and restored?

---

### 7. Answers to Practice Questions

**Answer 1:**
The primary role of the Link Register (LR) is to store the **return address** – the address of the instruction immediately following the function call. This address is essential for the function to know where to resume execution after it has completed.

**Answer 2:**
The instruction `BL` (Branch with Link) is most commonly used to initiate a function call. Besides branching to the target function's address, it **automatically copies the address of the next instruction (the return address) into the Link Register (LR)**.

**Answer 3:**
At the beginning of the function, you would typically use:
`PUSH {R4, R5, R6, LR}`
At the end of the function (before returning), you would typically use:
`POP {R4, R5, R6, PC}`
Using `POP {..., PC}` is a common and efficient way to return as it restores the saved LR into the Program Counter.

**Answer 4:**
Assuming `x` is in `R0` and `y` is in `R1` when `calculate_sum` is called, and `calculate_sum` needs to preserve `R4`:

```assembly
calculate_sum
    PUSH {R4, LR}      ; Save R4 and the return address
    MOV R4, R0         ; Move first argument (a) to R4
    ADD R0, R4, R1     ; Add R4 (a) and R1 (b), store result in R0
    POP {R4, PC}       ; Restore R4 and return to caller
```
*(Note: If `calculate_sum` did not need to preserve `R4`, it could be simplified to `PUSH {LR}` and `POP {PC}` and directly use `ADD R0, R0, R1` if the arguments remained in `R0` and `R1`.)*

**Answer 5:**
Using `PUSH` and `POP` to save and restore registers is crucial to **prevent unintended modification of the calling function's state**. If registers used by the caller are overwritten by the called function without being saved and restored, the calling function might behave incorrectly upon resuming execution. This can lead to subtle bugs, corrupted data, and program crashes. It ensures that the called function acts as a self-contained unit without side effects on its environment.

---

### 8. Important Points to Remember

*   **`BL` is for Calling, `BX LR` (or `POP {PC}`) is for Returning.**
*   **The Stack (SP) is used for saving context:** return addresses, local variables, and register values.
*   **Always save and restore registers** that are used by the function and are also expected to be preserved by the calling convention.
*   **R0 is conventionally used for return values.**
*   **The first few arguments (typically up to R0-R3) are passed via registers.**
*   **Understanding assembly helps demystify C compiler behavior.**

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 9. Textbook References & Course Outcome Alignment

*   **Lewis (2015) Fundamentals of Embedded Software with the ARM Cortex M3:** This book will provide a practical introduction to the concepts, covering register usage, stack operations (`PUSH`/`POP`), and common instructions like `BL` and `BX` in the context of embedded programming. (CO2: K2, CO1: K3, CO3: K3)
*   **Yiu (2014) The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors:** This reference offers a deeper dive into the architectural details of the ARM Cortex-M processor family, explaining how the LR and SP registers function at the hardware level and the implications of different instructions. (CO2: K2)
*   **Zhu (2018) Embedded systems with ARM Cortex M Microcontrollers in Assembly and C:** This book bridges the gap between assembly and C, showing how C constructs, including functions, are translated into assembly. It reinforces the practical application of these concepts. (CO1: K3, CO2: K2, CO3: K3)

**Alignment with Course Outcomes:**

*   **CO1: Use the features of C that are frequently used in embedded systems (Knowledge Level: K3):** By understanding the assembly implementation of functions, students gain insight into how C functions are executed, enabling them to write more efficient and appropriate C code for embedded systems.
*   **CO2: Explain a programmer’s view of processor architecture (Knowledge Level: K2):** This topic directly exposes the programmer's view by detailing the role of special registers (SP, LR), memory management (stack), and specific instructions (`BL`, `BX`, `PUSH`, `POP`) that are fundamental to processor operation during function calls.
*   **CO3: Choose between programming at the level of assembly or C as appropriate (Knowledge Level: K3):** Understanding the overhead and mechanism of function calls in assembly allows developers to make informed decisions. For performance-critical tasks or low-level hardware interaction, assembly might be preferred, while for complex logic and readability, C is chosen. This topic provides the knowledge base for that decision.

---