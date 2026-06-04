---
title: "register usage"
subject: "ARM ARCHITECTURE AND PROGRAMMING"
module: "Module 3: Control structures in assembly language: instruction sequencing"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feaff"
status: "completed"
scrapedAt: "2026-05-23T17:53:35.564Z"
---
# ARM Architecture and Programming: Module 3 - Control Structures in Assembly Language: Instruction Sequencing

## Topic: Register Usage

### Introduction

Understanding register usage is fundamental to effective assembly language programming in ARM. Registers are small, high-speed storage locations within the CPU that hold data and instructions currently being processed. Efficiently managing register usage is crucial for optimizing program performance, minimizing memory access, and enabling complex control flow structures. This topic delves into the different types of registers available in ARM processors and common conventions for their use.

### Learning Outcomes Covered:

*   **LO 1: Describe the various types of registers available in the ARM processor.**
*   **LO 2: Explain the conventions for general-purpose register usage.**
*   **LO 3: Illustrate how register usage impacts the implementation of control structures.**
*   **LO 4: Analyze the role of special-purpose registers in program execution.**

### Course Outcomes Alignment:

*   **CO1: Use the features of C that are frequently used in embedded systems (Knowledge Level: K3)** - While this topic is about assembly, understanding register usage in assembly directly informs how C compilers manage variables and optimize code for embedded systems. Knowledge of register allocation helps in understanding why certain C constructs might be more efficient than others.
*   **CO2: Explain a programmer’s view of processor architecture (Knowledge Level: K2)** - This topic directly addresses the programmer's view of the CPU's internal storage, which is crucial for understanding how programs are executed at a low level.
*   **CO3: Choose between programming at the level of assembly or C as appropriate (Knowledge Level: K3)** - Understanding the strengths and limitations of register usage in assembly empowers developers to make informed decisions about when assembly language is necessary for performance-critical sections or when C is sufficient.

---

### 1. Types of Registers in ARM Processors

ARM processors, particularly those in the Cortex-M series, feature a variety of registers, each serving specific purposes. Understanding these types is essential for proper register management.

#### 1.1 General-Purpose Registers (GPRs)

*   **Description:** These are the most versatile registers and are primarily used for holding data, addresses, and intermediate results during program execution. They can be used by the programmer for almost any purpose.
*   **Number:** ARM Cortex-M processors typically have **16 general-purpose registers**, numbered R0 through R15.
*   **Key Characteristics:**
    *   Can hold 32-bit values (for ARMv7-M, like Cortex-M3/M4).
    *   Can be read from and written to by most instructions.
    *   Their usage is often dictated by calling conventions and compiler optimizations.

#### 1.2 Special-Purpose Registers

These registers have dedicated functions and are critical for controlling program flow, status, and processor operation.

##### 1.2.1 Program Counter (PC)

*   **Description:** The Program Counter (PC) holds the memory address of the **next instruction to be fetched**.
*   **Key Characteristics:**
    *   In ARM, the PC is typically **word-aligned**. Instructions are typically 32-bit (4 bytes).
    *   When an instruction is fetched, the PC is automatically incremented to point to the next instruction.
    *   Branch instructions and function calls modify the PC directly to alter the program flow.
    *   **Important Note (ARMv7-M):** The PC is *not* directly accessible as a GPR in the same way as R0-R15 for data manipulation. However, instructions like `ADD PC, PC, #offset` can be used to manipulate the PC for relative branching. Reading the PC often returns the address of the instruction currently being executed *plus 4* (on ARMv7-M).

##### 1.2.2 Stack Pointer (SP)

*   **Description:** The Stack Pointer (SP) holds the memory address of the **top of the current stack**. The stack is a region of memory used for temporary storage, function call management (return addresses, local variables), and interrupt handling.
*   **Key Characteristics:**
    *   There are typically two stacks: the Main Stack (MSP) and the Process Stack (PSP). The `CONTROL` register determines which stack is currently active.
    *   Instructions like `PUSH` and `POP` automatically adjust the SP.
    *   Saving and restoring registers during function calls and interrupts involves manipulating the SP.
    *   **Important Note:** The SP is typically aliased by register `R13`. So, `SP` and `R13` refer to the same physical register.

##### 1.2.3 Link Register (LR)

*   **Description:** The Link Register (LR) is used to store the **return address** when a subroutine (function or interrupt handler) is called. This allows the program to resume execution at the instruction following the call after the subroutine completes.
*   **Key Characteristics:**
    *   The LR is typically aliased by register `R14`. So, `LR` and `R14` refer to the same physical register.
    *   When a `BL` (Branch with Link) instruction is used to call a function, the address of the instruction *after* the `BL` is automatically stored in the LR.
    *   To return from a subroutine, the LR's value is typically loaded back into the PC.

##### 1.2.4 Program Status Registers (PSRs)

*   **Description:** PSRs contain various status bits that reflect the outcome of arithmetic and logical operations, and control the processor's operating state.
*   **Key PSRs in ARM Cortex-M:**
    *   **APSR (Application Program Status Register):** Contains condition flags (N, Z, C, V) from arithmetic/logical operations and other general status bits.
    *   **IPSR (Interrupt Program Status Register):** Contains the exception (interrupt) number being serviced.
    *   **EPSR (Execution Program Status Register):** Contains bits for control of the processor's execution state, such as the Thumb-state bit (T).
*   **Access:** These registers are accessed using special instructions like `MRS` (Move from Status Register) and `MSR` (Move to Status Register). They are not directly accessible as GPRs.

---

### 2. General-Purpose Register Usage Conventions

While GPRs (R0-R15) can be used for almost anything, adhering to established conventions greatly improves code readability, maintainability, and compatibility with compilers and operating systems. These conventions are often referred to as **Application Binary Interface (ABI)** rules.

#### 2.1 Calling Conventions (Example: ARM EABI)

The calling convention defines how functions pass arguments, return values, and manage local variables. For ARM, the EABI (Embedded Application Binary Interface) is a common standard.

*   **Argument Passing:**
    *   The first few arguments to a function are typically passed in registers.
    *   For ARM Cortex-M, the first four arguments are typically passed in `R0`, `R1`, `R2`, and `R3` respectively.
    *   If more arguments are needed, they are pushed onto the stack.
*   **Return Values:**
    *   Integer or pointer return values are typically placed in `R0`.
    *   Floating-point return values might use dedicated floating-point registers (if available).
*   **Register Preservation:**
    *   **Caller-saved (Volatile) Registers:** Registers that a function can freely use without needing to save their original values are called caller-saved registers. The caller is responsible for saving these registers if it needs their values after the function returns. In ARM, registers `R0-R3` (often used for arguments/return values) are typically caller-saved. `R12` is also often caller-saved.
    *   **Callee-saved (Non-Volatile) Registers:** Registers that a function must preserve its original value if it uses them are called callee-saved registers. The function must save these registers before using them (e.g., by pushing them onto the stack) and restore them before returning. In ARM, registers `R4-R11` are typically callee-saved. `R13` (SP), `R14` (LR), and `R15` (PC) have special roles.

#### 2.2 Register Usage Examples and Their Impact on Control Structures

Let's see how GPRs are used in control structures.

##### 2.2.1 Conditional Branching and Comparison

*   **Concept:** Instructions like `CMP` (Compare) or `SUBS` (Subtract and set flags) update the condition flags in the APSR. Conditional branch instructions (`BEQ`, `BNE`, `BGT`, etc.) then use these flags to decide whether to branch or continue sequentially.
*   **Register Usage:**
    *   `CMP Rn, Rm`: Compares the values in `Rn` and `Rm`. The result of `Rn - Rm` is not stored, but the condition flags (N, Z, C, V) in APSR are updated.
    *   `SUBS Rn, Rm`: Subtracts `Rm` from `Rn` and stores the result in `Rn`, also updating the flags.
*   **Example:** Checking if a variable `count` (stored in R4) is zero.

    ```assembly
    ; Assume count is in R4
    CMP R4, #0      ; Compare R4 with 0. Updates flags.
    BEQ is_zero     ; Branch to is_zero if Z flag is set (R4 == 0)
    ; ... code if R4 is not zero ...
    B end_if        ; Branch to end_if
is_zero:
    ; ... code if R4 is zero ...
end_if:
    ; ... rest of the program ...
    ```
    *   Here, `R4` is used to hold the variable. `CMP` uses `R4` and `R0` (implicitly, for the value 0) to set flags. The `BEQ` instruction uses the flags to control execution flow.

##### 2.2.2 Loops

*   **Concept:** Loops involve repeating a block of code a certain number of times or until a condition is met. This often involves a loop counter or a flag.
*   **Register Usage:**
    *   A register is typically used to hold the loop counter.
    *   Another register might hold the base address for array access or other data.
*   **Example:** A `for` loop to sum elements of an array.

    ```assembly
    ; Assume array_base is in R0, array_size is in R1
    ; Result will be in R2
    MOV R2, #0          ; Initialize sum to 0 (R2)
    MOV R3, R0          ; Copy array base address to R3 (current element pointer)
    MOV R4, R1          ; Copy array size to R4 (loop counter)

loop_start:
    CMP R4, #0          ; Check if loop counter is zero
    BEQ loop_end        ; If zero, exit loop

    LDR R5, [R3]        ; Load the current array element into R5
    ADD R2, R2, R5      ; Add the element to the sum (R2 = R2 + R5)
    ADD R3, R3, #4      ; Move pointer to the next element (assuming 32-bit elements)
    SUBS R4, R4, #1     ; Decrement loop counter and update flags
    B loop_start        ; Jump back to the start of the loop

loop_end:
    ; R2 now holds the sum
    ```
    *   `R0`, `R1` are used for input arguments.
    *   `R2` stores the accumulated sum.
    *   `R3` acts as a pointer to the current array element.
    *   `R4` serves as the loop counter. `SUBS` is used to decrement and set flags for the `BEQ` condition.

##### 2.2.3 Function Calls

*   **Concept:** Functions are blocks of code that can be called from multiple places. Register usage is critical for passing parameters and returning values without interfering with the caller's state.
*   **Register Usage:**
    *   `R0-R3` for incoming arguments and outgoing return values.
    *   `R4-R11` for callee-saved values that need to be preserved.
    *   `LR` (R14) to store the return address.
    *   `SP` (R13) for stack operations.
*   **Example:** A function `add_numbers` that takes two integers and returns their sum.

    ```assembly
    ; Main program
    MOV R0, #5      ; Argument 1 for add_numbers
    MOV R1, #7      ; Argument 2 for add_numbers
    BL add_numbers  ; Call add_numbers. LR gets PC+4.
    ; R0 now holds the returned sum (12)

    ; Function definition: add_numbers
    ; Arguments: R0 (a), R1 (b)
    ; Returns: R0 (a + b)
    ; Preserves: R4-R11, LR, SP
    add_numbers:
        PUSH {R4-R7, LR}  ; Save registers that might be modified and LR

        MOV R4, R0        ; Copy argument 'a' to R4 (callee-saved)
        MOV R5, R1        ; Copy argument 'b' to R5 (callee-saved)

        ADD R6, R4, R5    ; Calculate sum, store in R6 (callee-saved)

        MOV R0, R6        ; Move the result to R0 for return

        POP {R4-R7, LR}   ; Restore saved registers and LR
        BX LR             ; Branch back to the caller (using LR)
    ```
    *   The `BL` instruction saves the return address in `LR`.
    *   The `add_numbers` function uses `PUSH` and `POP` to save and restore callee-saved registers (`R4-R7`) and `LR` itself.
    *   Arguments are passed in `R0` and `R1`.
    *   The result is placed in `R0`.
    *   `BX LR` is used to return, effectively loading the `LR` value into the `PC`.

---

### 3. The Role of Special-Purpose Registers in Control Structures

Special-purpose registers are not just passive storage; they actively govern the processor's behavior and are integral to control flow.

#### 3.1 Program Counter (PC) for Branching

*   **Description:** The PC is the most critical register for instruction sequencing. All branch, jump, and call instructions directly manipulate the PC to change the flow of execution.
*   **Direct Manipulation:**
    *   `B label`: Unconditional branch to `label`. The PC is updated to the address of `label`.
    *   `BL label`: Branch with Link. The PC is updated to `label`, and `LR` (R14) is updated with the address of the instruction following the `BL`.
    *   Conditional Branches (`BEQ`, `BNE`, `BGT`, etc.): The PC is updated only if the condition specified by the flags in APSR is met.
*   **Example:**
    ```assembly
    ; Load the address of 'my_function' into R0
    LDR R0, =my_function
    ; Load the current PC into R1 (address of instruction after this one)
    ADD R1, PC, #4 ; Note: R1 = PC + 4 in ARMv7-M for the instruction after ADD
    ; Unconditional branch to my_function
    BX R0          ; Branch to the address in R0 (often used for function pointers)

    my_function:
        ; ... function code ...
        BX LR      ; Return from the function
    ```

#### 3.2 Stack Pointer (SP) for Subroutine Calls and Interrupts

*   **Description:** The SP is essential for managing the execution context during function calls and interrupt handling. It ensures that the program can return to the correct point of execution after a subroutine or interrupt.
*   **Stack Operations:**
    *   `PUSH {reglist}`: Decrements the SP and stores the registers in `reglist` onto the stack.
    *   `POP {reglist}`: Loads registers from the stack into `reglist` and increments the SP.
*   **Example (Function Prologue/Epilogue):**
    ```assembly
    ; Function prologue: save registers and LR
    PUSH {R4, LR}

    ; Function body

    ; Function epilogue: restore registers and return
    POP {R4, LR}
    BX LR
    ```
    *   When a function is called, its state (callee-saved registers, return address) is pushed onto the stack to preserve them.
    *   When the function returns, this saved state is popped off the stack, and the `LR` is used to return to the caller.

#### 3.3 Link Register (LR) for Returning from Subroutines

*   **Description:** The LR is the dedicated register for storing the return address from subroutine calls. Without the LR, a program would not know where to resume execution after a function call.
*   **Usage with `BL`:** The `BL` instruction automatically saves the return address in `LR`.
*   **Return mechanism:** The standard way to return from a subroutine is to branch to the address stored in `LR` using `BX LR`.
*   **Nested Calls:** If a function calls another function, the new function's `BL` will overwrite the current `LR`. Therefore, the calling function must save its own `LR` (typically onto the stack) before making the nested call.

---

### 4. Important Points to Remember

*   **Register Aliasing:** `R13` is `SP`, and `R14` is `LR`. Be aware of this when reading documentation or writing code.
*   **PC Behavior:** In ARMv7-M, reading the PC typically yields the address of the current instruction + 4. Direct manipulation of the PC for branching is done via specific instructions.
*   **Caller-Saved vs. Callee-Saved:** Understand the distinction and your responsibility for preserving registers based on calling conventions. Violating these conventions leads to unpredictable program behavior.
*   **Register Overlap:** When implementing control structures that involve function calls, be mindful of how registers are used by both the caller and the callee, especially `LR`. Nesting calls requires saving `LR`.
*   **Compiler Optimizations:** Compilers are adept at optimizing register usage. Understanding these concepts helps in debugging and writing hand-optimized assembly when necessary.
*   **Thumb vs. ARM State:** While this topic primarily focuses on register usage in the context of Cortex-M (which is primarily Thumb-2), understanding the general principles applies broadly to ARM architectures. The PC's behavior and specific instruction sets can vary slightly between ARM and Thumb states.

---

### Practice Questions/Exercises

**Question 1:**
Describe the primary function of the Link Register (LR) in ARM assembly programming and explain why it's crucial for implementing subroutine calls.

**Question 2:**
A function needs to be written that calculates the sum of three numbers. The function receives the numbers in registers `R0`, `R1`, and `R2`, and should return the sum in `R0`. You also need to use register `R4` internally within this function for a temporary calculation and must ensure that `R4`'s original value is preserved for the caller.
Write the assembly code for this function, including any necessary setup and teardown.

**Question 3:**
Consider the following assembly snippet. Assuming it's for a Cortex-M processor, what will be the final value in `R0`? Explain your reasoning, focusing on register usage and instruction sequencing.

```assembly
    MOV R0, #10
    MOV R1, #5
    ADD R0, R0, R1  ; R0 = R0 + R1
    SUBS R1, R1, #2 ; R1 = R1 - 2, update flags
    ADD R0, R0, R1  ; R0 = R0 + R1
    BX LR           ; Return
```

**Question 4:**
What is the difference between caller-saved and callee-saved registers, and what is the implication for a programmer when using them within a function?

---

### Answers to Practice Questions

**Answer 1:**
The Link Register (LR, often aliased as R14) is used to store the return address when a subroutine (function or interrupt handler) is called. This is typically done by a `BL` (Branch with Link) instruction, which automatically saves the address of the instruction *following* the `BL` into the LR. This allows the program to resume execution at the correct point after the subroutine completes. It's crucial because it provides the mechanism for the subroutine to "know" where to go back to in the calling code. To return, the value in LR is usually loaded into the PC using an instruction like `BX LR`.

**Answer 2:**
```assembly
; Function: sum_three_numbers
; Arguments: R0 (num1), R1 (num2), R2 (num3)
; Returns: R0 (sum)
; Preserves: R4

sum_three_numbers:
    PUSH {R4, LR}       ; Save R4 (callee-saved) and LR (return address) onto the stack

    MOV R4, R0          ; Copy num1 to R4 (for temporary use, preserving original R0)
    ADD R4, R4, R1      ; R4 = num1 + num2
    ADD R0, R4, R2      ; R0 = (num1 + num2) + num3 (result in R0 for return)

    POP {R4, LR}        ; Restore R4 and LR from the stack
    BX LR               ; Return to the caller
```
**Explanation:**
*   `PUSH {R4, LR}`: We save `R4` because we are going to use it, and it's a callee-saved register. We also save `LR` because the function might be called by another function, and we need to return correctly.
*   `MOV R4, R0`: We copy the first argument to `R4` to free up `R0` for accumulating the sum.
*   `ADD R4, R4, R1`: We add the second argument to `R4`.
*   `ADD R0, R4, R2`: We add the third argument to `R4` and store the final sum in `R0`, as required for the return value.
*   `POP {R4, LR}`: We restore the saved values of `R4` and `LR` from the stack.
*   `BX LR`: We branch to the address in `LR` to return to the caller.

**Answer 3:**
The final value in `R0` will be **22**.

**Step-by-step execution:**

1.  `MOV R0, #10`: `R0` becomes `10`.
2.  `MOV R1, #5`: `R1` becomes `5`.
3.  `ADD R0, R0, R1`: `R0 = R0 + R1`. `R0` becomes `10 + 5 = 15`.
4.  `SUBS R1, R1, #2`: `R1 = R1 - 2`. `R1` becomes `5 - 2 = 3`. The `SUBS` instruction also updates the condition flags in APSR (N, Z, C, V). In this case, `Z` will not be set as `3` is not zero.
5.  `ADD R0, R0, R1`: `R0 = R0 + R1`. `R0` becomes `15 + 3 = 18`.

Wait, let me re-evaluate that. My mistake. Let's trace again more carefully:

1.  `MOV R0, #10` -> `R0 = 10`
2.  `MOV R1, #5` -> `R1 = 5`
3.  `ADD R0, R0, R1` -> `R0 = 10 + 5 = 15`
4.  `SUBS R1, R1, #2` -> `R1 = 5 - 2 = 3`. Condition flags updated.
5.  `ADD R0, R0, R1` -> `R0 = 15 + 3 = 18`.

Ah, I see where I might have gone wrong in my initial thought process. The problem is in the *description* of the third instruction in the snippet. Let's assume the third instruction was meant to be different for a more interesting scenario, or if it's exactly as written, the result is indeed 18.

**Correction/Reinterpretation:** If the intention was to show a more complex register manipulation that might be misread, let's consider if `R0` was being used as a pointer. But the instructions are arithmetic.

Let's assume the snippet is exactly as written and trace once more for absolute certainty.

*   `MOV R0, #10` => `R0 = 10`
*   `MOV R1, #5` => `R1 = 5`
*   `ADD R0, R0, R1` => `R0 = 10 + 5 = 15`
*   `SUBS R1, R1, #2` => `R1 = 5 - 2 = 3`. Flags are set (e.g., `N=0`, `Z=0`, `C=1`, `V=0`).
*   `ADD R0, R0, R1` => `R0 = 15 + 3 = 18`
*   `BX LR` => Returns.

It seems my initial trace was correct. The final value in `R0` is **18**.

If the question was intended to trick, it might be about the state of `R1` *after* the `SUBS` instruction. However, the question specifically asks for the value in `R0`.

Let me try a different calculation to see if I can arrive at 22 for the sake of understanding a potential error:
Maybe `ADD R0, R0, R1` was meant to be `ADD R0, R0, R1` again, and `R1` was 7? No, `R1` becomes 3.
What if `ADD R0, R0, R1` was `ADD R0, R0, #7`? Then `15 + 7 = 22`. But the instruction clearly says `R1`.

Let's stick to the literal interpretation of the provided assembly code.

**Final Answer for Question 3:** The final value in `R0` will be **18**.

**Answer 4:**
*   **Caller-Saved Registers (Volatile):** These are registers that a function can modify without needing to save their original values before use. If the caller needs the value of a caller-saved register after the function returns, the *caller* is responsible for saving and restoring it before calling the function. In ARM, `R0-R3` and `R12` are typically caller-saved.
*   **Callee-Saved Registers (Non-Volatile):** These are registers that a function *must* preserve if it uses them. Before a function uses a callee-saved register, it must save its original value (usually onto the stack). After the function has finished its operations, it must restore the saved value back into the register before returning. In ARM, `R4-R11` are typically callee-saved.

**Implication for a programmer:**
When a programmer writes a function (or a block of assembly code), they need to be aware of this distinction:
*   If they use a caller-saved register, they don't need to save it themselves. However, they must understand that any function they call might change the value of these registers, and they are responsible for saving them if they need them later.
*   If they use a callee-saved register, they *must* save its original value upon entering their code block/function and restore it before exiting, to avoid corrupting the state of the calling code. Failure to do so is a common source of bugs. This often involves `PUSH`ing the registers at the beginning of the function and `POP`ping them at the end.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
