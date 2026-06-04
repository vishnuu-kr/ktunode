---
title: "Stack instructions"
subject: "ARM ARCHITECTURE AND PROGRAMMING"
module: "Module 2: Arm assembly language programming: Loading constants into registers"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feaf1"
status: "completed"
scrapedAt: "2026-05-23T17:53:26.503Z"
---
# ARM Architecture and Programming: Module 2 - Arm Assembly Language Programming

## Topic: Stack Instructions

**Module Description:** This module delves into the fundamentals of ARM assembly language programming, with a specific focus on how to load constants into registers and, in this topic, how to utilize the crucial stack instructions.

**Learning Outcomes:** Upon successful completion of this topic, you will be able to:

*   Understand the concept and purpose of the stack in ARM assembly.
*   Identify and explain the functionality of common ARM stack instructions.
*   Apply stack instructions to manage function calls, local variables, and data storage in assembly programs.
*   Analyze the impact of stack operations on the program's execution flow and register usage.
*   Relate stack usage to concepts covered in C programming for embedded systems.

**Course Outcomes Alignment:**

*   **CO1 (C Programming in Embedded Systems - K3):** Understanding stack operations in assembly directly aids in comprehending how C functions manage their local variables and return addresses, as these mechanisms are often implemented using the stack. This allows for a deeper understanding of C's behavior in resource-constrained environments.
*   **CO2 (Programmer's View of Processor Architecture - K2):** Stack instructions are fundamental to the programmer's view of the processor. They demonstrate how the processor manages execution context, subroutine calls, and data storage dynamically, directly impacting how a programmer reasons about program flow.
*   **CO3 (Assembly vs. C - K3):** By understanding the low-level implementation of function calls and data management via the stack in assembly, programmers can make more informed decisions about when assembly is necessary for performance optimization or specific hardware interactions, and when higher-level C constructs are sufficient and more productive.

---

### 1. The Stack: A Fundamental Concept

**Key Concept:** The stack is a region of memory that operates on a Last-In, First-Out (LIFO) principle. It's a crucial data structure used for:

*   **Function Call Management:** Storing return addresses (where to resume execution after a function returns) and function arguments.
*   **Local Variable Storage:** Allocating space for variables that are local to a function.
*   **Temporary Data Storage:** Holding intermediate results or values that need to be temporarily preserved.

**How it Works:**

*   **Stack Pointer (SP):** A dedicated register, typically **R13**, known as the Stack Pointer (SP), always points to the top of the stack.
*   **Push:** Adding data to the stack. This involves decrementing the SP and then storing the data at the new SP address.
*   **Pop:** Removing data from the stack. This involves reading the data at the current SP address and then incrementing the SP.

**Stack Growth Direction:**

ARM processors typically use a **full descending stack**. This means:

*   The stack grows towards **lower memory addresses**.
*   The SP points to the **highest-addressed byte** of the stack frame (or the next available space).

**(Reference: Lewis, "Fundamentals of Embedded Software with the ARM Cortex M3", Chapter 5 - Memory and Data Management, discusses memory organization and stack usage.)**

---

### 2. Common ARM Stack Instructions

ARM provides specialized instructions for efficient stack operations. These instructions often operate on multiple registers simultaneously.

#### 2.1 Push Instructions

These instructions store one or more registers onto the stack.

*   **`PUSH` (Push Multiple Registers)**
    *   **Syntax:** `PUSH {<reglist>}`
    *   **Operation:** Decrements the SP by 4 bytes for each register in `<reglist>` and stores the specified registers onto the stack. The order of storage depends on the register list.
    *   **Example:**
        ```assembly
        PUSH {R0, R1, R3}
        ```
        This instruction will push the values of R0, R1, and R3 onto the stack. If R13 (SP) was `0x20000100` before this instruction, after the `PUSH` it will be `0x200000F4` (assuming 32-bit registers, 3 registers * 4 bytes/register = 12 bytes decremented). The highest-addressed register in the list will be stored at the highest address pushed.

*   **`STMDB` (Store Multiple Decrement Before)**
    *   **Syntax:** `STMDB <Rn>!, {<reglist>}`
    *   **Operation:** This is a more general instruction that can be used as a PUSH. It decrements the base register `<Rn>` by 4 bytes for each register in `<reglist>` and then stores the specified registers to memory starting at the decremented `<Rn>`. The `!` suffix indicates that the base register `<Rn>` itself is updated with the new address.
    *   **`STMDB SP!, {<reglist>}`** is equivalent to `PUSH {<reglist>}`.
    *   **Example:**
        ```assembly
        STMDB R13!, {R0, R1, R3}  @ Equivalent to PUSH {R0, R1, R3}
        ```

**(Reference: Yiu, "The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors", Chapter 4 - The ARM Instruction Set, details the `STM` family of instructions.)**

#### 2.2 Pop Instructions

These instructions retrieve one or more registers from the stack.

*   **`POP` (Pop Multiple Registers)**
    *   **Syntax:** `POP {<reglist>}`
    *   **Operation:** Reads the specified registers from memory starting at the address pointed to by SP and then increments SP by 4 bytes for each register popped. The first register in the list will be loaded from the lowest address on the stack.
    *   **Example:**
        ```assembly
        POP {R0, R1, R3}
        ```
        This instruction will pop values from the stack into R0, R1, and R3. If R13 (SP) was `0x200000F4` before this instruction, after the `POP` it will be `0x20000100`. R0 will be loaded with the value at `0x200000F4`, R1 with `0x200000F8`, and R3 with `0x200000FC`.

*   **`LDMIA` (Load Multiple Increment After)**
    *   **Syntax:** `LDMIA <Rn>!, {<reglist>}`
    *   **Operation:** This is a more general instruction that can be used as a POP. It reads the specified registers from memory starting at the address pointed to by `<Rn>`, and then increments `<Rn>` by 4 bytes for each register loaded. The `!` suffix indicates that the base register `<Rn>` itself is updated with the new address.
    *   **`LDMIA SP!, {<reglist>}`** is equivalent to `POP {<reglist>}`.
    *   **Example:**
        ```assembly
        LDMIA R13!, {R0, R1, R3}  @ Equivalent to POP {R0, R1, R3}
        ```

**(Reference: Lewis, "Fundamentals of Embedded Software with the ARM Cortex M3", Chapter 5 - Memory and Data Management, also covers `LDM` and `STM` families.)**

---

### 3. Stack Usage in Function Calls

A critical application of stack instructions is in managing function calls, a concept familiar from C programming.

**The Call Stack Procedure:**

1.  **Calling a Function (Function Caller):**
    *   **Push Arguments (Optional):** If arguments are passed via the stack (common for many arguments or when registers are insufficient).
    *   **Push Return Address:** The `BL` (Branch with Link) instruction automatically stores the return address (the address of the instruction immediately after the `BL`) in the **Link Register (LR)**.
    *   **Branch to Function:** Execute the `BL <function_label>` instruction.

2.  **Entering a Function (Function Callee):**
    *   **Save Context (Prologue):**
        *   Push the **Link Register (LR)** onto the stack. This is essential to restore the return address when the function finishes.
        *   Push any registers that the function will use and modify (callee-saved registers). This prevents the function from corrupting the caller's register values.
        *   Allocate space for local variables by decrementing SP further.
    *   **Execute Function Body:** Perform the function's operations using registers and local stack space.
    *   **Restore Context (Epilogue):**
        *   Deallocate local variables by incrementing SP.
        *   Pop callee-saved registers from the stack.
        *   Pop the **Link Register (LR)** from the stack back into the PC (Program Counter) to return to the caller.
    *   **Return:** Execute the `BX LR` (Branch and Exchange to Link Register) instruction.

**(Reference: Yiu, "The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors", Chapter 7 - Procedure Call Standard and Stack Frame, provides a detailed breakdown of stack frame management.)**
**(Reference: Zhu, "Embedded systems with ARM Cortex M Microcontrollers in Assembly and C", Chapter 6 - Procedure Calls and Stack, explains function call mechanisms.)**

**Example Scenario: A simple `add_numbers` function**

Let's assume a function `add_numbers` that takes two arguments (e.g., in R0 and R1) and returns their sum in R0.

```assembly
; --- Caller Code ---
main:
    MOV R0, #5      ; First argument
    MOV R1, #10     ; Second argument
    BL add_numbers  ; Call the function
    ; R0 now holds the sum (15)
    B end_program

; --- Function: add_numbers ---
add_numbers:
    PUSH {LR}       ; Save the return address (LR) onto the stack

    ADD R0, R0, R1  ; Add the two arguments (result in R0)

    POP {PC}        ; Restore LR into PC to return.
                    ; PC is implicitly updated with the value popped from the stack.
                    ; This is a common idiom for returning from functions.
```

**Explanation:**

1.  In `main`, R0 and R1 are loaded with values.
2.  `BL add_numbers` transfers control to `add_numbers` and saves the address of the instruction after `BL` into LR.
3.  `PUSH {LR}` saves the return address from LR onto the stack. SP is decremented.
4.  `ADD R0, R0, R1` performs the addition.
5.  `POP {PC}` loads the value from the top of the stack into the Program Counter (PC). Since the stack contained the saved LR, this effectively returns execution to the instruction after the `BL` in `main`. SP is incremented.

**Important Note on `POP {PC}`:** When `POP` or `LDMIA` pop into the PC, it's a direct branch to the address loaded. This is a highly efficient way to return from subroutines in ARM assembly.

---

### 4. Practice Questions and Exercises

**Question 1:**
What is the primary purpose of the stack in ARM assembly language programming?

**Answer:**
The stack is a LIFO (Last-In, First-Out) memory structure used for managing function calls (storing return addresses and arguments), allocating space for local variables, and temporarily storing data.

---

**Question 2:**
Consider the following assembly snippet. If the Stack Pointer (SP) is initially at `0x20000120`, what will be the value of SP after the `PUSH {R4, R7, R0}` instruction, and what will be stored at `0x2000011C`?

```assembly
    PUSH {R4, R7, R0}
```

**Answer:**
*   **SP after instruction:** Each register pushed consumes 4 bytes. Three registers are pushed, so the SP will be decremented by 12 bytes.
    `0x20000120 - 12 = 0x20000114`
    The new SP will be `0x20000114`.
*   **Content at `0x2000011C`:** The `PUSH` instruction stores registers in the order they appear in the register list, with the highest-addressed register being stored at the highest address within the pushed block. So, R4 will be at `0x20000120 - 4 = 0x2000011C`, R7 at `0x20000120 - 8 = 0x20000118`, and R0 at `0x20000120 - 12 = 0x20000114`.
    Therefore, `0x2000011C` will contain the value of **R4**.

---

**Question 3:**
Write an ARM assembly code snippet that pushes registers R2 and R5 onto the stack, then pops them back into R5 and R2 respectively. Assume the SP is correctly managed.

**Answer:**

```assembly
    PUSH {R2, R5}   @ Push R2 and R5 onto the stack
    POP {R5, R2}    @ Pop values back into R5 and R2
```

**Alternatively, using STMDB and LDMIA:**

```assembly
    STMDB SP!, {R2, R5}  @ Push R2 and R5 using STMDB
    LDMIA SP!, {R5, R2}  @ Pop values back into R5 and R2 using LDMIA
```

---

**Question 4:**
Explain why saving the Link Register (LR) onto the stack is crucial when calling a subroutine in ARM assembly.

**Answer:**
The Link Register (LR) holds the return address – the address of the instruction in the calling code that should be executed after the subroutine finishes. If the subroutine itself needs to call other subroutines, the original LR value would be overwritten by the `BL` instruction used for the nested call. By pushing the LR onto the stack at the beginning of the subroutine, its original value is preserved. Before the subroutine returns, this saved LR is popped from the stack back into the Program Counter (PC), ensuring that execution resumes at the correct instruction in the original caller.

---

### 5. Important Points to Remember

*   **SP is R13:** Always remember that R13 is the Stack Pointer.
*   **Full Descending Stack:** ARM typically uses a full descending stack, meaning the stack pointer decrements before storing data and increments after retrieving data.
*   **`PUSH` and `POP` vs. `STM`/`LDM`:** `PUSH` and `POP` are convenient mnemonics for `STMDB SP!, {...}` and `LDMIA SP!, {...}` respectively. Understanding the `STM`/`LDM` families offers more flexibility.
*   **Register Order:** When pushing or popping multiple registers, the instruction specifies the order of operations, affecting which register gets stored/loaded at which memory address relative to the stack pointer.
*   **Stack Frame Management:** For complex functions, a "stack frame" is created. This typically involves pushing LR, then potentially pushed callee-saved registers, and finally allocating space for local variables by adjusting SP.
*   **Return Mechanism:** `BX LR` is the standard way to return from a subroutine in ARM.

---

This topic on stack instructions is fundamental to writing any non-trivial assembly program, especially those involving procedure calls. Mastering these instructions will significantly enhance your understanding of program execution flow and memory management in ARM-based systems, directly supporting CO1, CO2, and CO3.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
