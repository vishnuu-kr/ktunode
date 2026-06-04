---
title: "CALL and RETURN instructions"
subject: "MICROPROCESSORS AND EMBEDDED SYSTEMS"
module: "Module 2: Stack and Subroutines"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f36215"
status: "completed"
scrapedAt: "2026-05-23T16:22:41.647Z"
---
## Microprocessors and Embedded Systems - Module 2: Stack and Subroutines

### Topic: CALL and RETURN Instructions

**Learning Outcomes Covered:**

*   Understand the fundamental concepts of subroutines and how `CALL` and `RETURN` instructions facilitate their implementation in microprocessor programming.
*   Explain the role of the stack in subroutine execution, including the storage and retrieval of return addresses and parameters.
*   Analyze the execution flow of programs involving subroutines using `CALL` and `RETURN`.
*   Relate the use of `CALL` and `RETURN` to efficient program design and code reusability.
*   Apply the knowledge of `CALL` and `RETURN` to write simple programs involving subroutines in an assembly-like context (relevant to 8085 as a foundational example, and conceptually to embedded systems).

---

### 1. Introduction to Subroutines

Subroutines (also known as procedures or functions) are blocks of code that perform a specific task. They are used to:

*   **Improve Program Readability:** Break down complex programs into smaller, manageable units.
*   **Enhance Code Reusability:** Avoid writing the same code multiple times. A subroutine can be called from different parts of the program.
*   **Simplify Program Debugging:** Easier to test and debug individual subroutines.

**Key Concept:** Subroutines allow for a modular approach to programming, leading to more organized and maintainable code.

---

### 2. The Stack: A Crucial Component for Subroutines

The **stack** is a region of memory organized as a Last-In, First-Out (LIFO) data structure. It is managed by a dedicated register called the **Stack Pointer (SP)**.

*   **Stack Pointer (SP):** A 16-bit register that always points to the top of the stack.
*   **Push Operation:** Adds data to the top of the stack. The SP is decremented before data is pushed.
*   **Pop Operation:** Removes data from the top of the stack. Data is retrieved, and then the SP is incremented.

**Why is the stack essential for subroutines?**

When a subroutine is called, the microprocessor needs to remember *where to return* to after the subroutine finishes executing. This "return address" is stored on the stack. Additionally, if subroutines pass parameters or need to preserve the state of certain registers, the stack is used for this purpose.

**Reference:**
*   **Ram, B. (Fundamentals of Microprocessor and Microcontrollers):** Discusses the stack and stack pointer extensively in the context of 8085 architecture and memory management.
*   **Gaonkar, R. (Microprocessor, Architecture, Programming and Applications):** Provides detailed explanations of stack operations and their role in subroutine calls and interrupt handling in 8085.

---

### 3. The CALL Instruction

The `CALL` instruction is used to transfer program control to a subroutine. When a `CALL` instruction is executed, the microprocessor performs the following actions:

1.  **Pushes the Current Program Counter (PC) onto the Stack:** The PC holds the address of the instruction immediately following the `CALL` instruction. This is the **return address**. The SP is decremented twice (since addresses are 16 bits) to make space for the return address.
2.  **Loads the Subroutine's Starting Address into the PC:** The PC is updated with the address of the first instruction of the subroutine.

**Types of CALL Instructions:**

*   **Unconditional CALL:** `CALL address` (e.g., `CALL 2000H`). Transfers control to the subroutine at `address` without any conditions.
*   **Conditional CALL:** `CC address`, `CNC address`, `CZ address`, `CNZ address`, etc. Transfers control to the subroutine at `address` only if a specific flag condition is met (e.g., `CZ` calls if the Zero flag is set).

**Example (8085 Assembly-like):**

```assembly
; Main Program
    ...
    LDA 1000H     ; Load data into accumulator
    CALL ADD_FIVE ; Call the subroutine ADD_FIVE
    STA 1001H     ; Store result
    ...

ADD_FIVE:       ; Start of the subroutine
    ADI 05H       ; Add 5 to the accumulator
    RET           ; Return to the caller
```

**Execution Flow:**

1.  The `CALL ADD_FIVE` instruction is encountered.
2.  The current PC value (pointing to `STA 1001H`) is pushed onto the stack.
3.  The PC is loaded with the address of `ADD_FIVE`.
4.  The microprocessor starts executing instructions from `ADD_FIVE`.
5.  The `ADI 05H` instruction modifies the accumulator.
6.  The `RET` instruction is encountered.

**Key Concept:** `CALL` initiates subroutine execution by saving the return address and transferring control to the subroutine.

---

### 4. The RETURN Instruction

The `RETURN` instruction is used to transfer program control back from a subroutine to the point in the main program where the subroutine was called. When a `RETURN` instruction is executed, the microprocessor performs the following actions:

1.  **Pops the Return Address from the Stack into the PC:** The SP is incremented twice, and the value pointed to by the SP is loaded into the PC.
2.  **Program Execution Continues from the Return Address:** The microprocessor resumes execution from the instruction immediately following the `CALL` instruction.

**Types of RETURN Instructions:**

*   **Unconditional RET:** `RET`. Returns from any subroutine.
*   **Conditional RETs:** `RC`, `RNC`, `RZ`, `RNZ`, etc. These return from a subroutine only if a specific flag condition is met.

**Example (Continuing from above):**

```assembly
; Main Program
    ...
    LDA 1000H     ; Load data into accumulator
    CALL ADD_FIVE ; Call the subroutine ADD_FIVE
    STA 1001H     ; Store result
    ...

ADD_FIVE:       ; Start of the subroutine
    ADI 05H       ; Add 5 to the accumulator
    RET           ; Return to the caller
```

**Execution Flow (continued):**

1.  The `RET` instruction in `ADD_FIVE` is encountered.
2.  The return address (which was pushed onto the stack by `CALL ADD_FIVE`) is popped from the stack into the PC.
3.  The PC now points to `STA 1001H`.
4.  The microprocessor continues execution from `STA 1001H`.

**Key Concept:** `RETURN` restores the program flow to the caller by retrieving the return address from the stack.

---

### 5. Stack Management for Subroutines

**Important considerations for using the stack with subroutines:**

*   **Stack Initialization:** The SP must be initialized to a valid memory location (usually the end of available RAM) before any `CALL` or `PUSH` operations.
    *   **Example (8085):** `LXI SP, 2FFFH` (assuming the stack grows downwards from 2FFFH).
*   **Stack Overflow:** If the stack is not large enough to hold all the return addresses and pushed data, a stack overflow can occur, leading to program crashes.
*   **Nested Subroutines:** Subroutines can call other subroutines. Each `CALL` pushes a new return address onto the stack, and each `RET` pops one off. The stack handles nested calls correctly due to its LIFO nature.
*   **Register Preservation:** If a subroutine modifies registers that are used by the main program, it should save the original contents of these registers on the stack (using `PUSH`) before modifying them and restore them (using `POP`) before returning.

**Example: Register Preservation**

```assembly
; Main Program
    ...
    MOV A, 50H     ; Accumulator has value 50H
    CALL PROCESS_DATA
    MOV B, A       ; B will hold the modified accumulator value
    ...

PROCESS_DATA:
    PUSH PSW      ; Save accumulator and flags on the stack
    PUSH B        ; Save B register on the stack

    ; ... subroutine logic using A, B, etc. ...
    MOV A, 10H    ; Modify accumulator

    POP B         ; Restore B register
    POP PSW       ; Restore accumulator and flags
    RET
```

**Reference:**
*   **Margolis, M. (Arduino Cookbook):** While focused on Arduino, the principles of function calls and the underlying mechanisms (often managed by the compiler but conceptually similar) are relevant. The concept of passing arguments and returning values implicitly involves stack-like behavior.
*   **Rafiquzzaman, M. (Microprocessor Theory and Application):** Provides a deep dive into processor architecture, including how `CALL` and `RET` interact with the stack and PC.

---

### 6. Subroutines in Embedded Systems (Conceptual Link to Arduino)

While Arduino C/C++ compilers abstract away the direct `CALL` and `RET` assembly instructions, these underlying operations are still performed. When you define a function in Arduino (e.g., `void loop()`, `void setup()`, or any custom function), the compiler generates assembly code that utilizes `CALL` and `RET` or similar mechanisms.

*   **Function Calls:** Every function call in Arduino C/C++ corresponds to a `CALL` operation at the assembly level.
*   **Return Values:** Returning a value from a function often involves placing the value in a designated register or on the stack before the `RET` instruction.
*   **Stack Usage in Arduino:** The Arduino environment manages the stack for function calls, local variables, and parameters. Understanding the concept of stack management is crucial for debugging and optimizing code, especially when dealing with memory constraints.

**Reference:**
*   **Baichtal, J. (Arduino for beginners):** Introduces basic programming concepts, including functions, which are built upon the principles of subroutines.
*   **Pajankar, A. (Arduino Made Simple):** Covers functions and modular programming in Arduino.
*   **Monk, S. (Programming Arduino Next Steps):** Delves deeper into advanced programming techniques, where understanding function calls and their underlying mechanisms becomes more important.
*   **Hughes, J.M. (Arduino: A Technical Reference):** Provides a detailed look at the Arduino architecture and programming, touching upon how C/C++ features map to processor operations.
*   **Boxall, J. (Arduino Workshop):** Practical projects often involve creating reusable functions, demonstrating the application of subroutine concepts.
*   **Blum, J. (Exploring Arduino):** Covers hardware interfacing and software development, where well-structured code using functions is essential.

---

### 7. Practice Questions and Exercises

**Question 1:** Explain the role of the Stack Pointer (SP) in the execution of the `CALL` and `RETURN` instructions.
**Answer:** The SP is a 16-bit register that points to the top of the stack. When `CALL` is executed, the SP is decremented twice to push the current PC value (return address) onto the stack. When `RETURN` is executed, the SP is incremented twice to pop the return address from the stack back into the PC, thereby restoring the program flow.

**Question 2:** What happens during a nested subroutine call? How does the stack handle it?
**Answer:** During a nested subroutine call, the return address of the *current* subroutine is pushed onto the stack. The PC is then loaded with the address of the *next* subroutine. The stack's LIFO (Last-In, First-Out) nature ensures that when the nested subroutine returns, its return address is popped first, resuming the execution of the calling subroutine. When that subroutine returns, its return address is popped, and control goes back to the original caller.

**Question 3:** Write a short 8085 assembly-like program that defines a subroutine to add two numbers stored in memory locations `2000H` and `2001H`, stores the result in `2002H`, and then returns. Assume the stack pointer is initialized.

```assembly
; Program to add two numbers using a subroutine

    ORG 0000H
    LXI SP, 2FFFH   ; Initialize Stack Pointer (example)

    LDA 2000H       ; Load first number into Accumulator
    MOV B, A        ; Move the first number to register B
    LDA 2001H       ; Load second number into Accumulator
    ADD B           ; Add the number in B to Accumulator
    STA 2002H       ; Store the sum

    HLT             ; Halt after initial calculation (optional for demonstration)

; Subroutine to add two numbers and store the result
; Assumes first number is in Accumulator, second number is in Memory Location 2001H
ADD_NUMBERS:
    PUSH PSW        ; Save Accumulator and Flags
    MOV C, A        ; Move the first number (in Acc) to register C
    LDA 2001H       ; Load the second number into Accumulator
    ADD C           ; Add the number in C to Accumulator
    STA 2002H       ; Store the sum in 2002H
    POP PSW         ; Restore Accumulator and Flags
    RET             ; Return to the caller
```
*(Note: The provided assembly example is simplified and for illustrative purposes. A more robust subroutine would typically involve more explicit parameter passing and return mechanisms.)*

**Question 4:** Why is it important to preserve register values in a subroutine if they are used by the main program? How is this achieved?
**Answer:** It's important to preserve register values because subroutines are often called from different parts of a program, and the main program may rely on the contents of those registers. If a subroutine modifies a register without saving its original value, it can lead to incorrect program behavior or data corruption in the main program. This is typically achieved by using `PUSH` to save the register's contents onto the stack before modification and `POP` to restore the original value before the subroutine returns.

**Question 5:** In an Arduino context, what is the equivalent concept to the `CALL` and `RETURN` instructions?
**Answer:** In Arduino C/C++, the equivalent concept to `CALL` and `RETURN` instructions are **function calls** and **function returns**. When you define and call a function in Arduino, the compiler generates underlying assembly code that utilizes processor mechanisms similar to `CALL` and `RET` to manage program flow, pass parameters, and return values.

---

### 8. Important Points to Remember

*   **Stack:** LIFO structure essential for subroutines and interrupts.
*   **SP:** Points to the top of the stack.
*   **CALL:** Pushes PC onto the stack and loads PC with subroutine address.
*   **RETURN:** Pops PC from the stack and resumes execution.
*   **Nested Calls:** Handled correctly by the stack's LIFO property.
*   **Register Preservation:** Use `PUSH` and `POP` to save and restore registers used by subroutines.
*   **Stack Initialization:** Critical for correct operation.
*   **Stack Overflow:** A potential problem if the stack is too small.
*   **Embedded Systems:** Functions in Arduino/Embedded C are implemented using the principles of `CALL` and `RET`.

---

This concludes the notes for the `CALL` and `RETURN` instructions. Understanding these instructions is fundamental to grasping program flow control and modular programming in microprocessor and embedded systems.
