---
title: "return values"
subject: "ARM ARCHITECTURE AND PROGRAMMING"
module: "Module 3: Control structures in assembly language: instruction sequencing"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feb01"
status: "completed"
scrapedAt: "2026-05-23T17:53:36.897Z"
---
# ARM Architecture and Programming: Module 3 - Control Structures in Assembly Language: Instruction Sequencing

## Topic: Return Values

This module focuses on how assembly language functions handle returning values to their callers. Understanding this is crucial for writing modular and reusable code, effectively bridging the gap between assembly and higher-level languages like C.

### Learning Outcomes Covered:

*   **Explain the mechanism for passing return values from a subroutine/function to its caller in ARM assembly.** (Directly addresses return values)
*   **Implement subroutines that return different data types (e.g., single byte, half-word, word, multiple registers) in ARM assembly.** (Practical application of return value mechanisms)
*   **Understand the relationship between function return values and calling conventions.** (Contextualizes return value handling)

### Key Concepts and Definitions:

*   **Subroutine/Function:** A block of code designed to perform a specific task, which can be called from other parts of the program. In assembly, these are often implemented using the `BL` (Branch with Link) instruction for calling and `BX LR` (Branch and Exchange to Link Register) for returning.
*   **Caller:** The part of the program that initiates the call to a subroutine.
*   **Callee:** The subroutine being called.
*   **Return Value:** The data or result that a subroutine provides back to the caller upon completion.
*   **Calling Convention:** A set of rules that govern how functions pass arguments and return values. This ensures interoperability between different functions, even if written by different developers or compiled by different tools. ARM processors, like many architectures, have specific calling conventions (e.g., AAPCS - ARM Architecture Procedure Call Standard).
*   **Registers:** The primary mechanism for passing arguments and return values in ARM assembly.

### 3.1 The ARM Procedure Call Standard (AAPCS) and Return Values

The AAPCS defines how procedures (functions) interact. For return values, it specifies which registers are used:

*   **Single Word Return Value:** The most common scenario for returning a single integer value is to use **Register R0**.
    *   **Example:** If a function calculates a sum, the sum would be placed in R0 before returning.

*   **Multiple Word Return Values (for larger data types or structures):**
    *   If a function needs to return a value larger than a single word (e.g., a 64-bit integer), **R0 and R1** are used. R0 typically holds the least significant word, and R1 holds the most significant word.
    *   **Example:** A function returning a 64-bit count would place the lower 32 bits in R0 and the upper 32 bits in R1.

*   **Floating-Point Return Values:** If the processor has a Floating-Point Unit (FPU) and the convention supports it, floating-point return values are typically placed in **floating-point registers (S0, D0)**. The specific register depends on the floating-point data type (single-precision or double-precision).

*   **Structure/Array Return Values:** For structures or arrays that fit within the general-purpose registers, the AAPCS allows for returning the first few elements in registers. However, for larger structures or arrays, a common approach is to:
    *   The **caller allocates space** for the structure/array on the stack.
    *   The **caller passes a pointer** to this allocated space as an argument to the callee.
    *   The **callee populates the structure/array** at the memory location pointed to by the argument.

### 3.2 Implementing Return Values in Assembly

Let's explore practical examples of how to implement return values.

#### Example 1: Returning a Single Word (Integer)

**Scenario:** A function `add_numbers` that takes two numbers as input and returns their sum.

**Caller Code (Conceptual):**

```assembly
    LDR R1, num1         ; Load first number into R1
    LDR R2, num2         ; Load second number into R2
    BL add_numbers       ; Call the add_numbers subroutine
    ; The sum is now in R0 after the call
    MOV R3, R0           ; Store the result in R3
```

**Callee Code (`add_numbers`):**

```assembly
add_numbers:
    ADD R0, R1, R2       ; Calculate sum and store in R0 (the return value register)
    BX LR                ; Return to the caller
```

**Explanation:**
*   The `ADD R0, R1, R2` instruction calculates the sum of the arguments (which are assumed to be in R1 and R2, according to a typical calling convention for arguments) and stores the result directly in **R0**.
*   `BX LR` branches back to the instruction following the `BL` in the caller, and the result is available in R0.

#### Example 2: Returning a 64-bit Integer

**Scenario:** A function `multiply_long` that multiplies two 32-bit numbers and returns a 64-bit product.

**Caller Code (Conceptual):**

```assembly
    LDR R1, val1         ; Load first value into R1
    LDR R2, val2         ; Load second value into R2
    BL multiply_long     ; Call the multiply_long subroutine
    ; The 64-bit result is in R0 (lower 32 bits) and R1 (upper 32 bits)
    MOV R3, R0           ; Store lower part of result
    MOV R4, R1           ; Store upper part of result
```

**Callee Code (`multiply_long`):**

```assembly
multiply_long:
    ; Assume inputs are in R1 and R2 (as per convention)
    MUL R0, R1, R2       ; Perform 32x32 -> 32 multiplication, result in R0 (lower part)
    ; For a full 64-bit multiplication, more instructions are needed.
    ; Let's illustrate with a placeholder for the upper bits calculation.
    ; In a real scenario, you'd use UMULL or SMULL for 64-bit results.

    ; Using UMULL (Unsigned Multiply Long) for a 64-bit result:
    ; UMULL R0, R1, R1, R2  ; R0 = (R1 * R2) [lower 32 bits]
                          ; R1 = (R1 * R2) [upper 32 bits]

    ; For the sake of this example, let's assume a simple case where we just want to demonstrate R0/R1 usage.
    ; If we were just conceptually showing the return mechanism for a known 64-bit value:
    ; MOV R0, #0x12345678   ; Lower 32 bits
    ; MOV R1, #0xABCD0000   ; Upper 32 bits

    BX LR                ; Return to the caller
```

**Explanation:**
*   The `UMULL` (Unsigned Multiply Long) or `SMULL` (Signed Multiply Long) instructions are specifically designed for 64-bit multiplications. They take two source registers and produce a 64-bit result, storing the lower 32 bits in the first destination register and the upper 32 bits in the second destination register.
*   In the AAPCS, R0 is used for the lower 32 bits and **R1 for the upper 32 bits** of a 64-bit return value.

#### Example 3: Returning a Structure (via Pointer)

**Scenario:** A function `get_point` that returns the coordinates of a point (x, y), where x and y are 32-bit integers.

**Caller Code (Conceptual):**

```assembly
    ; Allocate space for the point structure on the stack
    SUB SP, SP, #8       ; Allocate 8 bytes for x and y
    MOV R0, SP           ; Load the address of the allocated space into R0 (first argument)

    BL get_point         ; Call the get_point subroutine

    ; The point coordinates are now stored at the address in R0 (which was the SP)
    LDR R1, [SP, #0]     ; Load x from the stack
    LDR R2, [SP, #4]     ; Load y from the stack

    ADD SP, SP, #8       ; Deallocate space from the stack

    ; R1 now holds x, R2 now holds y
```

**Callee Code (`get_point`):**

```assembly
get_point:
    ; Assume R0 contains the pointer to the memory where the point should be stored
    MOV R1, #10          ; Example x-coordinate
    MOV R2, #20          ; Example y-coordinate

    STR R1, [R0, #0]     ; Store x at the address in R0 + offset 0
    STR R2, [R0, #4]     ; Store y at the address in R0 + offset 4

    BX LR                ; Return to the caller
```

**Explanation:**
*   The caller explicitly allocates memory for the structure on the stack using `SUB SP, SP, #8` (8 bytes for two 32-bit integers).
*   The **caller passes a pointer** to this allocated memory in **R0** (the first argument register).
*   The callee (`get_point`) receives this pointer in R0.
*   The callee then uses `STR` (Store) instructions to write the `x` and `y` values into the memory locations indicated by the pointer.
*   The caller retrieves the values from the stack after the function returns.

### 3.3 Important Points to Remember

*   **AAPCS is Key:** Always adhere to the ARM Procedure Call Standard (AAPCS) to ensure compatibility. R0 is the primary register for returning single-word values.
*   **Register Preservation:** If a subroutine modifies registers that the caller needs to preserve (other than those designated for return values or argument passing), the subroutine must save these registers (e.g., on the stack) before using them and restore them before returning.
*   **Multiple Register Returns:** For 64-bit values, R0 and R1 are used in tandem.
*   **Structures and Pointers:** For larger data structures, passing a pointer for the callee to populate is the standard approach.
*   **C Interaction:** Understanding how C functions return values is crucial when interfacing C code with assembly routines. C compilers typically follow the AAPCS for argument and return value passing.

### Practice Questions/Exercises:

1.  **Question:** A function in ARM assembly needs to return an unsigned 32-bit integer. Which register should be used to hold this return value according to the AAPCS?
    **Answer:** R0

2.  **Question:** If a function returns a 64-bit unsigned integer, how are the two 32-bit parts of the result typically placed in registers for the caller to access?
    **Answer:** The lower 32 bits are placed in R0, and the upper 32 bits are placed in R1.

3.  **Question:** Consider a scenario where an assembly function calculates the length of a string and needs to return this length. If the string is guaranteed to be less than 256 characters, what register would you use for the return value?
    **Answer:** R0 (since the length will fit in a single 32-bit word).

4.  **Question:** You are writing an assembly function that needs to return a large structure (e.g., 12 bytes). Describe the general approach for returning this structure to the caller.
    **Answer:** The caller should allocate space on the stack for the structure and pass a pointer to this space as an argument to the function. The function then populates the structure at the memory location pointed to by the argument.

5.  **Question:** Write a simple ARM assembly subroutine that takes two numbers (passed in R1 and R2) and returns their product in R0. Assume the product fits within a 32-bit word.

    **Code for Question 5:**

    ```assembly
    ; Function to multiply two 32-bit numbers and return the result
    ; Inputs: R1 = multiplicand, R2 = multiplier
    ; Output: R0 = product
    multiply_values:
        MUL R0, R1, R2   ; Multiply R1 by R2, store the 32-bit result in R0
        BX LR            ; Return to the caller
    ```

### Course Outcome Alignment:

*   **CO1: Use the features of C that are frequently used in embedded systems (Knowledge Level: K3)**
    *   This topic indirectly supports CO1 by illustrating how assembly functions handle return values, mirroring the behavior of C functions in embedded systems that also rely on calling conventions. Understanding these low-level mechanisms helps in writing better C code for embedded systems.

*   **CO2: Explain a programmer’s view of processor architecture (Knowledge Level: K2)**
    *   This topic directly contributes to CO2 by detailing the role of specific registers (R0, R1) in the processor's architecture for function communication, which is a fundamental aspect of a programmer's view.

*   **CO3: Choose between programming at the level of assembly or C as appropriate (Knowledge Level: K3)**
    *   By understanding how return values are handled in assembly, developers can make informed decisions about when to use assembly for performance-critical operations that require precise control over data return, or when C's abstraction is sufficient. This knowledge empowers them to choose the appropriate programming level.

---
This concludes the study notes on return values in ARM assembly language. Remember that mastering these concepts is vital for creating robust and efficient embedded software.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
