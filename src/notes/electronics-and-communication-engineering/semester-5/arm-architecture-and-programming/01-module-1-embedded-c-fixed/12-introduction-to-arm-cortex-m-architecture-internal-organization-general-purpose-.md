---
title: "Introduction to Arm cortex M architecture: Internal organization-general purpose and special registers"
subject: "ARM ARCHITECTURE AND PROGRAMMING"
module: "Module 1: Embedded C: Fixed"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feae3"
status: "completed"
scrapedAt: "2026-05-23T17:53:17.524Z"
---
# ARM ARCHITECTURE AND PROGRAMMING - Module 1: Embedded C: Fixed

## Topic: Introduction to ARM Cortex-M Architecture: Internal Organization - General Purpose and Special Registers

---

### 1. Introduction to ARM Cortex-M Architecture

The ARM Cortex-M family of processors is widely used in embedded systems due to its efficiency, low power consumption, and performance. This module focuses on the internal organization of these processors, specifically the role of registers in programming.

#### 1.1. Programmer's View of the Processor (CO2 - K2)

From a programmer's perspective, the processor is seen as a collection of memory locations and registers. Registers are small, high-speed storage locations within the CPU itself. They are used to hold data that is currently being processed, instructions, memory addresses, and control information. Understanding the available registers and how they are used is crucial for writing efficient and effective embedded software.

**Key Concept:** A **programmer's view** abstracts away the complex internal hardware details of the CPU and presents the essential components that a programmer interacts with.

---

### 2. Internal Organization of ARM Cortex-M Processors

The ARM Cortex-M architecture is designed with a focus on embedded applications. Its internal organization includes pipelines, memory interfaces, and, importantly, a set of registers.

#### 2.1. The Instruction Pipeline

ARM Cortex-M processors typically employ a pipelined architecture. A pipeline breaks down the execution of an instruction into several stages (e.g., Fetch, Decode, Execute, Memory Access, Write-back). While one instruction is in the execute stage, the next can be fetched, leading to increased throughput.

*   **Example:** Imagine an assembly line. Each station performs a specific task on a product. The pipeline is similar, with each stage processing an instruction.

**Important Point:** While the pipeline improves performance, it can be affected by branches and data dependencies, which might cause stalls.

#### 2.2. Memory System

The Cortex-M architecture supports a Harvard architecture (or modified Harvard) where separate buses are used for instructions and data. This allows simultaneous fetching of instructions and data, further enhancing performance.

*   **Key Concept:** **Harvard Architecture:** Separate memory spaces and buses for instructions and data.
*   **Key Concept:** **Modified Harvard Architecture:** Allows some sharing of buses or memory to reduce cost and complexity while retaining most of the Harvard benefits.

---

### 3. Registers in ARM Cortex-M

Registers are fundamental to programming an embedded system. They are the fastest way to access data within the CPU. The Cortex-M architecture defines several types of registers, including general-purpose registers and special-purpose registers.

#### 3.1. General Purpose Registers (GPRs)

These registers are primarily used for storing data and memory addresses during program execution. The ARM Cortex-M architecture provides a set of 16 general-purpose registers.

*   **Register Naming:** Registers are typically named `R0` through `R15`.
*   **Usage:**
    *   Holding operands for arithmetic and logical operations.
    *   Storing intermediate results.
    *   Holding function arguments and return values.
    *   Used as pointers to memory locations.

**References:**
*   **Lewis, Ch 3.2.1 (General-Purpose Registers):** Discusses the usage of R0-R12 as general-purpose registers.
*   **Yiu, Ch 2.1 (General-Purpose Registers):** Provides a detailed explanation of the functionality and usage of R0-R12.

**Key Concept:** **General-Purpose Registers** are versatile and can be used for various tasks as defined by the programmer.

#### 3.2. Special Purpose Registers

These registers have specific functions tied to the processor's operation, control, and status. They are not as freely usable as GPRs and often have specific instructions or modes of access.

##### 3.2.1. Stack Pointer (SP)

The Stack Pointer is a crucial register used to manage the call stack. The stack is a region of memory used for storing temporary data, function call parameters, and return addresses.

*   **Register Name:** `SP` (can be represented by `R13` in some contexts).
*   **Function:** Points to the top of the stack.
*   **Operations:** `PUSH` (adds data to the stack) and `POP` (removes data from the stack) instructions manipulate the `SP`.
*   **Two Stack Pointers:** Cortex-M processors implement two stack pointers:
    *   **Main Stack Pointer (MSP):** Used by the processor when it's in Handler mode (e.g., during interrupts).
    *   **Process Stack Pointer (PSP):** Used by the processor when it's in Thread mode (normal application execution).

**References:**
*   **Lewis, Ch 3.2.1 (Stack Pointers):** Explains the concept of the stack and the role of the stack pointer.
*   **Yiu, Ch 2.1.2 (Stack Pointers):** Delves into the MSP and PSP and their usage in different processor modes.

**Important Point:** Correct management of the stack pointer is vital for preventing stack overflows and ensuring proper function execution.

##### 3.2.2. Link Register (LR)

The Link Register is used to store the return address when a subroutine or function call is made. This allows the program to return to the instruction following the function call.

*   **Register Name:** `LR` (can be represented by `R14`).
*   **Function:** Stores the address of the instruction to return to after a function call.
*   **Usage:** When a `BL` (Branch with Link) instruction is executed, the address of the next instruction is automatically saved in the `LR`. The function can then use the `BX LR` or `POP {..., PC}` instruction to return.

**References:**
*   **Lewis, Ch 3.2.1 (Link Register):** Describes the function of the LR in function calls.
*   **Yiu, Ch 2.1.3 (Link Register):** Details how the LR is used for function returns, including its role in nested function calls.

**Important Point:** In nested function calls, the `LR` value might need to be saved onto the stack to preserve the return address of the outer function.

##### 3.2.3. Program Counter (PC)

The Program Counter holds the address of the instruction that the processor is currently fetching or executing. It is automatically updated by the processor to point to the next instruction in sequence.

*   **Register Name:** `PC`.
*   **Function:** Points to the current instruction being executed or fetched.
*   **Usage:** When branching or jumping to a different memory location, the PC is updated with the target address.

**References:**
*   **Lewis, Ch 3.2.1 (Program Counter):** Explains the PC's role in instruction sequencing.
*   **Yiu, Ch 2.1.4 (Program Counter):** Discusses how the PC is updated during instruction fetch and execution, and its role in branches.

**Important Point:** Directly manipulating the PC can be dangerous and should only be done when the programmer intends to change the flow of execution, such as in jump instructions.

##### 3.2.4. Program Status Register (PSR)

The Program Status Register (PSR) contains various status flags and control bits that reflect the current state of the processor. It is a combination of several individual registers. In Cortex-M, the main PSR is the **Application Program Status Register (APSR)**. Other parts like EPSR (Execution Program Status Register) and IPSR (Interrupt Program Status Register) are integrated into the overall status register concept, often accessed indirectly or through specific instructions.

The APSR typically includes:
*   **Condition Flags:**
    *   **N (Negative):** Set if the result of an operation is negative.
    *   **Z (Zero):** Set if the result of an operation is zero.
    *   **C (Carry):** Set if a carry-out occurred from the most significant bit during an arithmetic operation, or if a borrow occurred.
    *   **V (Overflow):** Set if a signed arithmetic operation resulted in an overflow.
*   **Interrupt Masks/Control Bits:** Bits that control whether the processor responds to interrupts (e.g., I/N bits for disabling exceptions).

**References:**
*   **Lewis, Ch 3.2.1 (Status Register):** Briefly mentions the status register and its flags.
*   **Yiu, Ch 2.1.5 (Program Status Register):** Provides a comprehensive breakdown of the PSR, including condition flags and their usage in conditional execution.
*   **Zhu, Ch 2.3.2 (Status Registers):** Explains the role of status registers in controlling program flow and indicating results.

**Key Concept:** **Condition Flags** are used to make decisions in programs (e.g., if-else statements, loops) based on the results of previous operations.

##### 3.2.5. Special Registers for Control and Configuration (e.g., Control Register, MSP/PSP Selectors)

Beyond the core PSR, Cortex-M processors have other special registers for controlling processor behavior and managing system resources.

*   **Control Register:** Controls the selection of stack pointer (MSP/PSP) and the processor's privilege level (privileged/unprivileged).
    *   `SPSEL` bit: 0 for MSP, 1 for PSP.
    *   `nPRIV` bit: 0 for privileged mode, 1 for unprivileged mode.
*   **MSP/PSP Access:** Specific instructions or mechanisms are used to load/store values into MSP and PSP.

**References:**
*   **Yiu, Ch 2.1.6 (Special Registers):** Covers registers like the Control Register and their configuration bits.
*   **Lewis, Ch 3.2.2 (Processor Modes and Stacks):** Touches upon the selection of stack pointers.

**Important Point:** Understanding processor modes and privilege levels is essential for system stability and security in embedded applications.

#### 3.3. Register Bank (R0-R15)

The general-purpose registers and some special-purpose registers (SP, LR, PC) can be viewed as a register bank.

*   **R0-R12:** Primarily general-purpose data and address registers.
*   **R13 (SP):** Stack Pointer.
*   **R14 (LR):** Link Register.
*   **R15 (PC):** Program Counter.

**References:**
*   **Lewis, Ch 3.2.1 (General-Purpose Registers):** Lists R0-R15 and their primary roles.
*   **Yiu, Ch 2.1 (General-Purpose Registers):** Groups R0-R15 and explains their dual roles as GPRs and special registers.

**Important Point:** While R13-R15 can be used as general-purpose registers in some contexts, their primary functions as SP, LR, and PC are critical for program execution and should generally be respected.

---

### 4. Using Registers in Embedded C (CO1 - K3, CO3 - K3)

Embedded C leverages these registers indirectly through compiler optimizations and directly through inline assembly or specific compiler built-ins.

#### 4.1. Compiler's Role

The C compiler plays a vital role in managing registers. When you write C code, the compiler translates it into assembly instructions, deciding which registers to use for variables, function arguments, and return values.

*   **Variable Allocation:** Local variables within functions are often stored in registers for faster access.
*   **Function Arguments:** Parameters passed to functions are typically passed through registers (e.g., R0, R1, R2, R3 as per the ARM Procedure Call Standard - AAPCS).
*   **Return Values:** Function return values are usually placed in `R0`.

**Example (C Code):**

```c
int add(int a, int b) {
    return a + b;
}

int main() {
    int x = 5;
    int y = 10;
    int sum = add(x, y);
    // ...
    return 0;
}
```

**Compiler Output (Conceptual Assembly):**

```assembly
; Function add(int a, int b)
; a is in R0, b is in R1
add:
    ADD R0, R0, R1  ; R0 = R0 + R1 (result stored in R0, which is the return register)
    BX LR           ; Branch and exchange to the Link Register (return)

; Function main()
main:
    MOV R0, #5      ; Load 5 into R0 (for variable x)
    MOV R1, #10     ; Load 10 into R1 (for variable y)
    BL add          ; Call add, LR will store the return address
                    ; The result of add (in R0) is now stored in 'sum'
    MOV R4, R0      ; Store the result from R0 into R4 (for variable sum)
    ; ...
    BX LR           ; Return from main
```

**References:**
*   **Zhu, Ch 2.4 (C Programming Language Features for ARM):** Discusses how C constructs map to ARM assembly and register usage.
*   **Lewis, Ch 3.3 (Embedded C Programming):** Explains how C code utilizes processor features.

**Course Outcome Alignment:**
*   **CO1 (K3):** Understanding how C code utilizes registers helps in writing efficient embedded C.
*   **CO3 (K3):** Knowing that the compiler manages registers allows programmers to make informed decisions about when to optimize with inline assembly.

#### 4.2. Inline Assembly and Compiler Built-ins

For performance-critical sections or when direct hardware manipulation is needed, programmers can use inline assembly or compiler-specific built-in functions.

*   **Inline Assembly:** Allows embedding assembly language instructions directly within C code.
*   **Compiler Built-ins:** Special functions provided by the compiler that map directly to specific assembly instructions or operations, often for accessing special registers.

**Example (Using GCC Inline Assembly for Control Register):**

```c
// Example: Reading the MSP value (demonstrative, actual access might differ)
uint32_t get_main_stack_pointer() {
    uint32_t sp_val;
    __asm__ volatile ("MRS %0, MSP" : "=r" (sp_val)); // MRS moves from system register to general purpose register
    return sp_val;
}

// Example: Setting the PSP (demonstrative)
void set_process_stack_pointer(uint32_t psp_val) {
    __asm__ volatile ("MSR PSP, %0" : : "r" (psp_val)); // MSR moves from general purpose register to system register
}
```

**References:**
*   **Zhu, Ch 2.5 (Assembly Language Programming):** Provides examples of using assembly directly.
*   **Lewis, Ch 3.3.3 (Inline Assembly):** Discusses the use of inline assembly in embedded C.

**Important Point:** Inline assembly should be used judiciously as it can make code less portable and harder to read.

---

### 5. Practice Questions and Exercises

**Question 1 (CO2 - K2):**
Which register is primarily used to store the return address of a function call in ARM Cortex-M processors?
a) PC
b) SP
c) LR
d) R0

**Answer:** c) LR (Link Register)

**Question 2 (CO2 - K2):**
The ARM Cortex-M architecture has two Stack Pointers. What are they, and what are their primary uses?

**Answer:**
The two stack pointers are:
1.  **Main Stack Pointer (MSP):** Used when the processor is in Handler mode (e.g., during interrupt service routines).
2.  **Process Stack Pointer (PSP):** Used when the processor is in Thread mode (normal application execution).

**Question 3 (CO1 - K3):**
Consider the following C code snippet. If this were compiled for an ARM Cortex-M processor, which register would the compiler most likely use to store the result of `result = num1 + num2;` before it's used by the `printf` function?

```c
#include <stdio.h>

int main() {
    int num1 = 10;
    int num2 = 20;
    int result;

    result = num1 + num2;
    printf("The result is: %d\n", result);

    return 0;
}
```

**Answer:** The compiler would likely store `result` in a general-purpose register (e.g., `R0` or another available register) for efficient access. If this `result` is passed as an argument to `printf`, it would be placed in `R0` according to the ARM Procedure Call Standard (AAPCS).

**Question 4 (CO3 - K3):**
You need to optimize a critical loop that performs a complex calculation and requires precise control over register usage. Would you primarily rely on the C compiler's automatic register allocation, or would you consider using inline assembly? Justify your answer.

**Answer:** For critical loops requiring precise control over register usage and performance optimization, using **inline assembly** would be a better choice. While the C compiler is good at register allocation, inline assembly allows the programmer to have direct control over which registers are used for specific operations, manage register lifetimes explicitly, and implement optimizations that the compiler might not automatically perform. This is crucial when dealing with specific processor instruction sets or when minimizing register spilling is essential for performance.

---

### 6. Important Points to Remember

*   **Registers are Fast:** Accessing data in registers is significantly faster than accessing data in memory.
*   **Register Usage Conventions:** Follow conventions (like AAPCS) for function calls to ensure compatibility between different code modules and the compiler.
*   **SP, LR, PC are Special:** While R13-R15 can sometimes be used as GPRs, their primary roles as SP, LR, and PC are critical for program flow and stack management. Misusing them can lead to program crashes.
*   **PSR Flags for Decisions:** Condition flags in the PSR are the basis for conditional execution of instructions and control flow in programs.
*   **Compiler is Your Ally:** The C compiler abstracts much of the direct register management, but understanding registers empowers you to write more efficient code and troubleshoot performance issues.
*   **Privilege Levels:** Be aware of privileged vs. unprivileged modes and how they affect access to certain system registers and memory.

---

This module provides a foundational understanding of the ARM Cortex-M architecture's internal organization, with a specific emphasis on registers. This knowledge is essential for anyone programming embedded systems using C and wanting to optimize their code or delve into lower-level programming techniques.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
