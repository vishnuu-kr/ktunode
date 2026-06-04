---
title: "parameter passing"
subject: "ARM ARCHITECTURE AND PROGRAMMING"
module: "Module 3: Control structures in assembly language: instruction sequencing"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feb00"
status: "completed"
scrapedAt: "2026-05-23T17:53:36.262Z"
---
# ARM Architecture and Programming: Module 3 - Control Structures & Instruction Sequencing

## Topic: Parameter Passing

This module focuses on how subroutines (functions/procedures) receive and return information, a fundamental aspect of structured programming and modular design in assembly language.

---

### 1. Introduction to Parameter Passing

**Key Concept:** Parameter passing is the mechanism by which data is transferred between a calling program (caller) and a called program (callee). This allows subroutines to operate on different data each time they are invoked, making them reusable and flexible.

**Learning Outcome Addressed:**
*   **LO: Understand the concept and methods of parameter passing in ARM assembly.** (Implied by the topic description and the need to implement subroutine logic).

**Course Outcome Alignment:**
*   **CO1: Use the features of C that are frequently used in embedded systems (K3):** Parameter passing is a core concept in C functions, which are often used in embedded systems. Understanding it in assembly helps bridge the gap.
*   **CO2: Explain a programmer’s view of processor architecture (K2):** Parameter passing reveals how the processor's registers and stack are utilized to manage data flow between functions.
*   **CO3: Choose between programming at the level of assembly or C as appropriate (K3):** Understanding assembly parameter passing informs decisions about when to use inline assembly or callable assembly routines within C.

**Reference Focus:**
*   **Lewis, Chapter on Subroutine Linkage and Parameter Passing:** This will provide foundational explanations of stack-based and register-based passing.
*   **Yiu, Chapters on Procedure Call Standard (PCS) and Stack Management:** Yiu's books are excellent for detailing the specific conventions used on ARM processors, which are crucial for interoperability between assembly and C.

---

### 2. Parameter Passing Methods

There are generally two primary methods for passing parameters:

#### 2.1. Register Passing

**Key Concept:** Parameters are passed by loading their values directly into designated processor registers before calling the subroutine.

**Advantages:**
*   **Speed:** Direct register access is the fastest way to transfer data.
*   **Efficiency:** Avoids the overhead of stack manipulation.

**Disadvantages:**
*   **Limited Number of Parameters:** The number of available general-purpose registers limits the number of parameters that can be passed efficiently this way.
*   **Register Preservation:** The caller might need to save registers used for parameter passing if they are also used for other purposes.

**ARM Procedure Call Standard (AAPCS):**
*   **What it is:** A set of rules and conventions that govern how functions should be called and how parameters and return values are handled on ARM processors. This is critical for ensuring that functions written in different languages (e.g., assembly and C) can call each other.
*   **Key Registers for Parameters:** AAPCS defines specific registers for passing parameters:
    *   `R0` to `R3`: Used for the first four integer or pointer arguments.
    *   `R0` also typically holds the return value of a function.
*   **Reference Focus:**
    *   **Yiu (Definitive Guide):** Chapters on AAPCS are essential for understanding register usage and stack frames in detail. This is where you'll find the precise mapping of parameters to registers.
    *   **Lewis:** May introduce basic register passing as a concept before delving into specific ARM conventions.

**Example (Illustrative - assumes hypothetical subroutine `ADD_NUMBERS`):**

Let's say we want to call a subroutine `ADD_NUMBERS` that takes two integer arguments and returns their sum.

```assembly
    MOV R0, #5      @ Load the first argument (5) into R0
    MOV R1, #10     @ Load the second argument (10) into R1

    BL ADD_NUMBERS  @ Branch and Link to the ADD_NUMBERS subroutine
                    @ The result will be in R0 upon return

    @ ... continue program execution ...

ADD_NUMBERS:
    @ Assume R0 and R1 contain the input parameters
    ADD R0, R0, R1  @ Add the values in R0 and R1, store result in R0
    BX LR           @ Branch and Exchange to Link Register (return to caller)
```

**Important Points to Remember:**
*   The caller is responsible for placing arguments in the correct registers (`R0`-`R3` for the first four).
*   The callee is responsible for using these registers for its computation and placing the return value in `R0`.
*   The `BL` (Branch and Link) instruction is crucial for calling subroutines, as it saves the return address in the `LR` (Link Register).

#### 2.2. Stack Passing

**Key Concept:** Parameters are pushed onto the processor's stack by the caller, and the callee then retrieves them from the stack.

**When it's used:**
*   **More than Four Parameters:** When a subroutine needs to accept more than four arguments, additional parameters are typically pushed onto the stack.
*   **Large Data Structures:** For passing large arrays or structures that are too big to fit into registers.
*   **When register passing is not feasible:** In complex scenarios or when adhering to specific calling conventions.

**Mechanism:**
1.  **Caller:**
    *   Pushes arguments onto the stack in reverse order (last argument first).
    *   Calls the subroutine using `BL`.
    *   May need to clean up the stack after the subroutine returns, depending on the calling convention.
2.  **Callee:**
    *   **Stack Frame Creation:** Often creates its own stack frame by pushing `LR` and potentially other registers it intends to use onto the stack.
    *   **Accessing Parameters:** Accesses parameters from the stack relative to the Frame Pointer (`FP`) or the Stack Pointer (`SP`) at the time of entry.
    *   **Returning:** Restores saved registers, removes its stack frame, and returns to the caller using `BX LR`.

**Reference Focus:**
*   **Lewis, Chapter on Stack Operation and Subroutine Linkage:** Explains the fundamental Last-In, First-Out (LIFO) nature of the stack.
*   **Yiu (Definitive Guide):** Provides detailed explanations of stack frame management for procedure calls according to AAPCS, including how the stack pointer and frame pointer are manipulated.

**Example (Illustrative - hypothetical subroutine `SUM_ARRAY` that takes an array pointer and size):**

Let's say we want to call `SUM_ARRAY` which takes a pointer to an array and the number of elements.

```assembly
    PUSH {R4-R7}    @ Caller: Save registers R4-R7 (as per AAPCS or convention)

    MOV R4, #array_start @ Load the array address into R4
    MOV R5, #5           @ Load the array size (5 elements) into R5

    PUSH {R4}       @ Caller: Push the array address onto the stack (last argument)
    PUSH {R5}       @ Caller: Push the array size onto the stack (first argument)

    BL SUM_ARRAY    @ Branch and Link to the SUM_ARRAY subroutine
                    @ The sum will be in R0 upon return

    ADD SP, SP, #4  @ Caller: Clean up the stack (remove the pushed arguments)
                    @ Note: Some conventions might handle this differently.

    POP {R4-R7}     @ Caller: Restore saved registers

    @ ... continue program execution ...

SUM_ARRAY:
    @ Callee: Save context (LR and any working registers)
    PUSH {LR}       @ Save the return address

    @ Callee: Establish stack frame (optional but common)
    @ PUSH {FP}     @ Save previous FP
    @ MOV FP, SP    @ Set new FP

    @ Callee: Access parameters
    @ Param 1 (size) is at [FP, #-4] (or SP at entry + 4 if no FP used)
    @ Param 2 (array ptr) is at [FP, #-8] (or SP at entry + 8 if no FP used)

    LDR R1, [SP, #4]        @ Get array size from stack (top element)
    LDR R0, [SP, #8]        @ Get array pointer from stack (second element)
                            @ Note: This assumes no FP used and arguments pushed directly
                            @ AAPCS might use FP and different offsets.

    MOV R2, #0              @ Initialize sum to 0

Loop:
    CMP R1, #0              @ Check if number of elements is zero
    BEQ EndLoop             @ If zero, exit loop

    LDR R3, [R0]            @ Load the current array element into R3
    ADD R2, R2, R3          @ Add element to sum

    ADD R0, R0, #4          @ Move pointer to next element (assuming 32-bit words)
    SUB R1, R1, #1          @ Decrement element count

    B Loop                  @ Continue loop

EndLoop:
    MOV R0, R2              @ Place the final sum in R0 for return

    @ Callee: Restore context
    @ MOV SP, FP            @ Restore SP if FP was used
    @ POP {FP}              @ Restore old FP

    POP {LR}                @ Restore return address
    BX LR                   @ Return to caller
```

**Important Points to Remember:**
*   The order of pushing arguments matters.
*   The callee must carefully manage its stack frame and ensure that all pushed registers are restored before returning.
*   The caller is responsible for cleaning up the stack if the convention dictates.
*   AAPCS defines how `SP` and `FP` are used and where parameters reside on the stack. `R0`-`R3` are often used for the first few arguments, and if more are needed, they go onto the stack.

#### 2.3. Hybrid Passing

**Key Concept:** A combination of register and stack passing. The first few parameters are passed in registers, and any remaining parameters are passed on the stack.

**Why it's common:**
*   Combines the efficiency of register passing for frequently accessed arguments with the flexibility of stack passing for less common or numerous ones.
*   This is the standard approach defined by AAPCS for a majority of function calls.

**AAPCS Compliance:**
*   The first four arguments are passed in `R0`, `R1`, `R2`, and `R3`.
*   If there are more than four arguments, the fifth and subsequent arguments are pushed onto the stack in order.
*   **Important:** The caller *does not* push the arguments that are already in registers. The stack only holds arguments beyond the first four.

**Example (Illustrative - subroutine `PROCESS_DATA` with 5 arguments):**

```assembly
    PUSH {R4-R7}    @ Caller: Save registers (e.g., R4-R7)

    MOV R0, #1      @ Arg 1
    MOV R1, #2      @ Arg 2
    MOV R2, #3      @ Arg 3
    MOV R3, #4      @ Arg 4
    MOV R4, #5      @ Arg 5

    PUSH {R4}       @ Caller: Push only the 5th argument onto the stack

    BL PROCESS_DATA @ Call the subroutine

    ADD SP, SP, #4  @ Caller: Clean up the stack (remove the 5th argument)

    POP {R4-R7}     @ Caller: Restore saved registers

    @ ...

PROCESS_DATA:
    PUSH {LR}       @ Save return address

    @ Parameters are in:
    @ R0, R1, R2, R3 (registers)
    @ Stack: Arg 5 is at [SP, #4] if LR is pushed.
    @ The exact offset depends on what else is pushed onto the stack by the callee.
    @ A common convention is to have a frame pointer.

    @ Example access if callee pushes LR and FP:
    @ Arg 1: R0
    @ Arg 2: R1
    @ Arg 3: R2
    @ Arg 4: R3
    @ Arg 5: [FP, #-12]  (This is a typical offset if FP is pushed, LR is pushed, and FP is set after SP)

    @ For simplicity, if only LR is pushed:
    @ Arg 1-4: R0-R3
    @ Arg 5: [SP, #4] (value that was in R4, pushed by caller)

    MOV R5, #0      @ Placeholder for sum

    ADD R5, R5, R0
    ADD R5, R5, R1
    ADD R5, R5, R2
    ADD R5, R5, R3

    LDR R6, [SP, #4] @ Load the 5th argument from the stack
    ADD R5, R5, R6

    MOV R0, R5      @ Return sum in R0

    POP {LR}        @ Restore return address
    BX LR           @ Return
```

**Important Points to Remember:**
*   **Adherence to AAPCS is paramount** for interoperability.
*   The caller decides which arguments go to registers and which go to the stack.
*   The callee needs to know the calling convention to correctly locate parameters.

---

### 3. Return Values

**Key Concept:** The mechanism by which a subroutine sends a result back to the caller.

**AAPCS for Return Values:**
*   **Integer/Pointer Return:** The return value is placed in `R0`.
*   **Multiple Return Values (up to 4):** If a function needs to return multiple integer or pointer values, they are typically placed in `R0`, `R1`, `R2`, and `R3` in the order they are intended to be returned.
*   **Larger Return Values (Structures/Arrays):** For larger data structures, the caller often allocates space on the stack or in memory and passes a pointer to this space as the *first* argument. The callee then writes the result into this memory location.

**Example (Illustrative - continuing with `ADD_NUMBERS`):**

```assembly
ADD_NUMBERS:
    ADD R0, R0, R1  @ Add the values in R0 and R1, store result in R0
    BX LR           @ Return. R0 already contains the result.
```

**Example (Illustrative - returning multiple values in registers):**

Let's say a subroutine `CALCULATE_STATS` returns the sum and count of numbers.

```assembly
CALCULATE_STATS:
    @ Assume R0 contains the array pointer and R1 contains the count
    @ ... (logic to calculate sum and count)
    @ Let's say sum is in R2 and count is in R1 (already there)

    MOV R0, R2      @ Put the sum in R0 (first return value)
    MOV R1, R1      @ Ensure count is in R1 (second return value)
    BX LR           @ Return
```

**Example (Illustrative - returning a large structure via pointer):**

```assembly
    .DATA
my_result_struct: .space 8  @ Allocate space for a structure (e.g., two words)

    .TEXT
    LDR R0, =my_result_struct @ Load address of struct into R0
    BL POPULATE_STRUCT       @ Call the subroutine

    @ ...

POPULATE_STRUCT:
    @ R0 contains the pointer to the result structure
    PUSH {LR}
    PUSH {R0}              @ Save the pointer to the result structure

    MOV R1, #100            @ First value to store
    MOV R2, #200            @ Second value to store

    LDR R3, [SP, #8]        @ Get the result structure pointer (after LR and R0 pushed)
    STR R1, [R3, #0]        @ Store first value at offset 0
    STR R2, [R3, #4]        @ Store second value at offset 4

    POP {R0}               @ Restore the result structure pointer
    POP {LR}               @ Restore return address
    BX LR                  @ Return
```

**Important Points to Remember:**
*   `R0` is the primary register for single return values.
*   For large data, use the "pointer to structure" method.

---

### 4. Register Preservation and Stack Frames

**Key Concept:** When a subroutine is called, it should not alter the caller's critical data stored in registers, unless those registers are specifically designated for return values or are part of the calling convention for parameter passing.

**AAPCS and Register Classes:**
*   **Scratch Registers (R0-R3, R12):** The callee is free to modify these registers without preserving them. They are used for parameter passing and return values.
*   **Callee-Saved Registers (R4-R11):** The callee *must* preserve these registers if it uses them. This means the callee must save their original values (usually by pushing them onto the stack) before using them and restore them before returning.
*   **Link Register (LR):** Used to store the return address. If a subroutine calls another subroutine, it must preserve the LR of the caller before overwriting it. This is typically done by pushing LR onto the stack.
*   **Stack Pointer (SP):** Must be managed carefully to maintain the integrity of the stack.

**Stack Frame:**
A dedicated region of the stack that a subroutine uses to store its local variables, saved registers, and parameters that were passed on the stack.

**Steps for creating and managing a stack frame:**
1.  **Caller:**
    *   Pushes arguments onto the stack (if necessary).
    *   Calls the subroutine (`BL`).
2.  **Callee:**
    *   Saves `LR` (return address).
    *   Saves `FP` (Frame Pointer) of the caller (optional, but good practice for debugging and nested calls).
    *   Sets up its own `FP` (e.g., `MOV FP, SP`).
    *   Saves any callee-saved registers (`R4`-`R11`) that it will use.
    *   Allocates space for local variables by decrementing `SP`.
3.  **Callee Execution:** Uses registers and its allocated stack space for computations.
4.  **Callee Return:**
    *   Restores callee-saved registers from the stack.
    *   Restores `FP` and `LR`.
    *   Returns to the caller (`BX LR`).

**Reference Focus:**
*   **Yiu (Definitive Guide):** Detailed explanation of stack frames, FP usage, and the preservation rules for each register class according to AAPCS. This is crucial for understanding how assembly functions integrate with C.

**Example (Illustrative - Callee preserving registers):**

```assembly
MY_SUBROUTINE:
    PUSH {R4, LR}       @ Save callee-saved R4 and the return address (LR)

    MOV R4, #10         @ Use R4 (a callee-saved register)
    MOV R0, R4          @ R0 is a scratch register, used for return

    POP {R4, LR}        @ Restore R4 and the return address
    BX LR               @ Return
```

**Important Points to Remember:**
*   Always preserve callee-saved registers (`R4-R11`) if you use them.
*   Always save `LR` before calling another subroutine.
*   The `PUSH` and `POP` instructions are used to manage the stack. The order of `POP` must be the reverse of `PUSH`.
*   Using `FP` can make stack frame management clearer, especially with nested calls and variable argument lists.

---

### 5. Parameter Passing in Embedded Systems (C Interoperability)

**Key Concept:** In embedded systems, assembly code often needs to interact with C code. Adhering to the ARM Procedure Call Standard (AAPCS) is essential for this interoperability.

**How it works:**
*   When a C function is compiled, the compiler generates assembly code that follows AAPCS for parameter passing and return values.
*   If you write an assembly function, you must also follow AAPCS so that C code can call it correctly.
*   This ensures that arguments passed from C arrive in the expected registers or on the stack, and that results returned by assembly are placed where the C code expects them.

**Learning Outcomes Addressed:**
*   **LO: Understand the concept and methods of parameter passing in ARM assembly.**
*   **LO: Apply parameter passing conventions for interacting with C code.**
*   **LO: Implement subroutines that correctly handle parameters and return values.**

**Course Outcome Alignment:**
*   **CO1: Use the features of C that are frequently used in embedded systems (K3):** Understanding how C functions handle parameters directly relates to this.
*   **CO2: Explain a programmer’s view of processor architecture (K2):** AAPCS is a direct manifestation of how the processor architecture is viewed by programmers for function calls.
*   **CO3: Choose between programming at the level of assembly or C as appropriate (K3):** Knowing how to pass parameters to/from C functions is critical for deciding when to use inline assembly or callable assembly routines.

**Reference Focus:**
*   **All Textbooks:** Each book will likely have sections dedicated to interfacing assembly with C and the role of AAPCS. Yiu's books are particularly strong on this aspect.

**Example Scenario:**
Imagine you have a C file:

```c
// main.c
extern int add_asm(int a, int b);

int main() {
    int x = 5;
    int y = 10;
    int sum;

    sum = add_asm(x, y); // Call the assembly function

    // ... use sum ...

    return 0;
}
```

And an assembly file (`add_asm.s`):

```assembly
    .GLOBAL add_asm

    .TEXT
    .ALIGN 2

add_asm:
    @ Parameters are in R0 and R1 according to AAPCS
    ADD R0, R0, R1      @ R0 = R0 + R1 (sum)
    BX LR               @ Return (result is in R0)
```

When the C compiler generates the call to `add_asm`, it will load `x` into `R0` and `y` into `R1` before executing the `BL` instruction to call `add_asm`. Our assembly function correctly uses `R0` and `R1` and places the result back into `R0`.

---

### 6. Practice Questions and Exercises

**Question 1:**
According to AAPCS, which registers are typically used for passing the first four integer arguments to a subroutine?
a) R4-R7
b) R0-R3
c) R12-R15
d) PC, LR, SP

**Answer 1:**
b) R0-R3

---

**Question 2:**
A subroutine needs to pass a large array (e.g., 100 elements) to another subroutine. Which parameter passing method is most appropriate?
a) Pass each element individually in registers R0-R3.
b) Push all 100 elements onto the stack.
c) Pass a pointer to the array in a register.
d) Pass the array size in a register and the array contents in the LR register.

**Answer 2:**
c) Pass a pointer to the array in a register. (This is the most efficient and standard way to pass large data structures).

---

**Question 3:**
If a subroutine modifies a register such as `R7`, what must it do to comply with AAPCS to preserve caller's data?
a) Do nothing, `R7` is a scratch register.
b) Push `R7` onto the stack before use and pop it before returning.
c) Return the original value of `R7` in `R0`.
d) The caller is responsible for saving `R7`.

**Answer 3:**
b) Push `R7` onto the stack before use and pop it before returning. (`R7` is a callee-saved register).

---

**Question 4:**
A C function `int process_values(int v1, int v2, int v3, int v4, int v5);` is called from C.
Describe how `v1` through `v5` would typically be passed to an assembly subroutine implementing `process_values` according to AAPCS.

**Answer 4:**
*   `v1` would be passed in `R0`.
*   `v2` would be passed in `R1`.
*   `v3` would be passed in `R2`.
*   `v4` would be passed in `R3`.
*   `v5` (the fifth argument) would be pushed onto the stack by the caller.

---

**Question 5 (Code Exercise):**
Write an ARM assembly subroutine named `SWAP_VALUES` that takes two integer arguments passed in `R0` and `R1`. The subroutine should swap the values in these registers and return the modified values in `R0` and `R1` respectively. Ensure you follow AAPCS regarding register usage.

**Solution 5:**

```assembly
    .GLOBAL SWAP_VALUES

    .TEXT
    .ALIGN 2

SWAP_VALUES:
    @ Input: R0 = value A, R1 = value B
    @ Output: R0 = value B, R1 = value A

    PUSH {R4, LR}       @ Save R4 (callee-saved) and LR (return address)

    MOV R4, R0          @ Save the original value of R0 into R4
    MOV R0, R1          @ Move the value of R1 into R0
    MOV R1, R4          @ Move the saved original value of R0 (now in R4) into R1

    POP {R4, LR}        @ Restore R4 and LR
    BX LR               @ Return
```

---

### 7. Key Points to Remember

*   **AAPCS is King:** For interoperability (especially with C), understanding and adhering to the ARM Procedure Call Standard is crucial.
*   **Register Usage:** `R0`-`R3` for the first four arguments and return values. `R4`-`R11` are callee-saved.
*   **Stack for More:** Use the stack for arguments beyond the fourth, or for large data.
*   **`BL` for Calls:** Always use `BL` to call subroutines to save the return address in `LR`.
*   **`BX LR` for Returns:** Use `BX LR` to return from a subroutine.
*   **Register Preservation:** If you use callee-saved registers (`R4`-`R11`), save them before use and restore them before returning.
*   **Stack Frame Management:** Be mindful of the stack pointer (`SP`) and frame pointer (`FP`) if you create stack frames.
*   **Return Values:** Primary return value in `R0`. Multiple return values in `R0`-`R3`. Large structures via pointer.

---

This comprehensive set of notes covers the essentials of parameter passing in ARM assembly, its alignment with C programming practices, and its importance for embedded systems development, drawing from the principles outlined in the provided textbooks.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
