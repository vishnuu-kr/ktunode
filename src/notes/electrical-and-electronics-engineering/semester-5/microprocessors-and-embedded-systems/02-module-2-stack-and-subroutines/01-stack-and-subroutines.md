---
title: "Stack and Subroutines"
subject: "MICROPROCESSORS AND EMBEDDED SYSTEMS"
module: "Module 2: Stack and Subroutines"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f36214"
status: "completed"
scrapedAt: "2026-05-23T16:22:40.900Z"
---
# Microprocessors and Embedded Systems - Module 2: Stack and Subroutines

## Topic: Stack and Subroutines

---

### Introduction to Stack and Subroutines

This module delves into two fundamental concepts in microprocessor programming: **stacks** and **subroutines**. Understanding these concepts is crucial for efficient program execution, modular programming, and managing complex tasks within embedded systems.

---

### 1. The Stack

#### 1.1 What is a Stack?

*   **Definition:** A stack is a data structure that follows the **Last-In, First-Out (LIFO)** principle. This means the last element added to the stack is the first one to be removed.
*   **Analogy:** Think of a stack of plates. You add a new plate to the top, and when you need a plate, you take the one from the top.
*   **Hardware Implementation:** In microprocessors, a dedicated area of memory is designated as the stack. A special register, the **Stack Pointer (SP)**, is used to keep track of the current "top" of the stack.

#### 1.2 Stack Operations

*   **Push:** Adding an element to the top of the stack.
    *   The Stack Pointer (SP) is decremented (in most architectures, but can be incremented depending on the implementation).
    *   The data is then stored at the memory location pointed to by the SP.
*   **Pop:** Removing an element from the top of the stack.
    *   The data from the memory location pointed to by the SP is retrieved.
    *   The Stack Pointer (SP) is incremented (or decremented, depending on the architecture).

#### 1.3 The Stack Pointer (SP)

*   The SP is a **16-bit register** in microprocessors like the 8085.
*   It holds the **address of the last used location** on the stack.
*   When data is pushed onto the stack, the SP is **decremented first**, and then the data is stored.
*   When data is popped from the stack, the data is read first, and then the SP is **incremented**.
*   The stack grows **downwards** in memory (from higher addresses to lower addresses).

#### 1.4 Stack Management in 8085 Microprocessor

*   **Stack Initialization:** The programmer must initialize the SP with the highest memory address intended for the stack before using any stack operations. This is typically done using the `LXI SP, address` instruction.
    *   **Example:** `LXI SP, 3000H` will set the stack pointer to memory address `3000H`. The stack will then grow from `2FFFH` downwards.
*   **PUSH Instruction:** Pushes the contents of a register pair onto the stack.
    *   Syntax: `PUSH rp` (where `rp` is a register pair like BC, DE, HL, or AF).
    *   **Operation:**
        1.  `SP = SP - 1`
        2.  Store the higher byte of the register pair at the memory location pointed to by SP.
        3.  `SP = SP - 1`
        4.  Store the lower byte of the register pair at the memory location pointed to by SP.
    *   **Example:** `PUSH B` will push the contents of register B onto the stack, followed by register C.
*   **POP Instruction:** Pops the contents of the stack into a register pair.
    *   Syntax: `POP rp` (where `rp` is a register pair like BC, DE, HL, or AF).
    *   **Operation:**
        1.  Load the lower byte from the memory location pointed to by SP into the lower byte of the register pair.
        2.  `SP = SP + 1`
        3.  Load the higher byte from the memory location pointed to by SP into the higher byte of the register pair.
        4.  `SP = SP + 1`
    *   **Example:** `POP H` will pop data from the stack into register L first, then into register H.

#### 1.5 Importance of the Stack

*   **Subroutine Calls:** Essential for saving the return address when a subroutine is called (discussed in detail later).
*   **Interrupt Service Routines (ISRs):** Used to save the state of the CPU (registers) before executing the ISR, so that the original program can resume correctly after the interrupt is handled.
*   **Temporary Data Storage:** Can be used to temporarily store data or register contents when they are needed later, freeing up general-purpose registers.
*   **Passing Parameters:** In some programming paradigms, parameters can be passed to subroutines via the stack.

---

### 2. Subroutines

#### 2.1 What is a Subroutine?

*   **Definition:** A subroutine (also known as a function or procedure) is a self-contained block of code that performs a specific task.
*   **Purpose:**
    *   **Modularity:** Breaks down a large program into smaller, manageable, and reusable units.
    *   **Code Reusability:** Avoids redundant coding. A subroutine can be called from multiple places in the program.
    *   **Simplification:** Makes programs easier to understand, debug, and maintain.
*   **Analogy:** Think of a recipe for making a specific dish within a larger meal. You can call that recipe whenever you need that particular dish.

#### 2.2 Subroutine Call Mechanism

The execution of a subroutine involves two main instructions:

*   **CALL Instruction:** Transfers program control from the main program to the subroutine.
    *   **Operation:**
        1.  **Save Return Address:** The address of the instruction *immediately following* the `CALL` instruction (the return address) is pushed onto the stack. This is crucial so that the program knows where to resume execution after the subroutine finishes.
        2.  **Transfer Control:** The Program Counter (PC) is loaded with the starting address of the subroutine.
    *   **Syntax:** `CALL address` (e.g., `CALL 2000H`)
*   **RET Instruction:** Returns control from the subroutine back to the calling program.
    *   **Operation:**
        1.  **Retrieve Return Address:** The return address is popped from the stack into the Program Counter (PC).
        2.  **Resume Execution:** The program continues execution from the instruction following the original `CALL` instruction.

#### 2.3 Subroutine Call and Return Flow (using 8085 example)

```assembly
// Main Program
START:  MVI A, 05H      ; Load A with 5
        ADD B           ; Add content of B to A
        CALL ADD_MSG    ; Call the subroutine ADD_MSG
        HLT             ; Halt

ADD_MSG: PUSH PSW        ; Save Accumulator and Flags on stack
        MOV C, A        ; Move Accumulator to C
        MOV L, A        ; Move Accumulator to L
        MOV H, 00H      ; Initialize H to 00H
        ADD H           ; Add A and H (effectively doubling A's value)
        MOV A, L        ; Move the result back to Accumulator
        POP PSW         ; Restore Accumulator and Flags from stack
        RET             ; Return to the caller
```

**Execution Flow:**

1.  The main program executes `MVI A, 05H` and `ADD B`.
2.  When `CALL ADD_MSG` is encountered:
    *   The address of the `HLT` instruction is pushed onto the stack.
    *   The PC is loaded with the address of `ADD_MSG`.
3.  The subroutine `ADD_MSG` starts executing.
    *   `PUSH PSW` saves the current contents of the Accumulator (A) and the Flags register. This is important because the subroutine might modify these.
    *   The subroutine performs its operations (e.g., doubling the value in A).
    *   `POP PSW` restores the original values of A and Flags.
    *   `RET` is encountered.
4.  `RET` pops the return address (address of `HLT`) from the stack into the PC.
5.  The main program resumes execution from the `HLT` instruction.

#### 2.4 Subroutine Parameters and Return Values

*   **Passing Parameters:**
    *   **Register Method:** Pass values through general-purpose registers before calling the subroutine. This is the most common method.
    *   **Stack Method:** Push parameters onto the stack before the `CALL` instruction. The subroutine then pops them off.
*   **Returning Values:**
    *   **Register Method:** The subroutine stores the result in a designated register (often the Accumulator) before returning.
    *   **Stack Method:** Push the result onto the stack. The calling program then pops it.

#### 2.5 Nested Subroutines

*   **Definition:** A subroutine that calls another subroutine.
*   **Mechanism:** The stack handles nested calls seamlessly. When the first subroutine calls the second, the return address of the first subroutine is pushed onto the stack. When the second subroutine finishes, its return address is popped, returning control to the first subroutine. When the first subroutine finishes, its return address is popped, returning control to the original caller.
*   **Example:**
    ```assembly
    CALL SUB1     ; Main calls SUB1
    ...

    SUB1: PUSH PSW
          CALL SUB2 ; SUB1 calls SUB2
          ; ...
          POP PSW
          RET

    SUB2: PUSH PSW
          ; ...
          POP PSW
          RET
    ```
    When `CALL SUB2` is executed within `SUB1`, the return address for `SUB1` is pushed onto the stack. When `SUB2` finishes with `RET`, it pops the address for `SUB1`. When `SUB1` finishes with `RET`, it pops the original return address for the main program.

#### 2.6 Advantages of Subroutines

*   **Program Simplicity:** Easier to design, write, and understand.
*   **Reduced Development Time:** Reusing existing code saves time.
*   **Easier Debugging:** Individual subroutines can be tested and debugged independently.
*   **Memory Efficiency:** Common code segments are written only once.

#### 2.7 Important Considerations

*   **Stack Overflow:** If more data is pushed onto the stack than it can hold, a stack overflow occurs, leading to unpredictable behavior. The programmer must ensure the stack is large enough and that the SP is initialized correctly.
*   **Stack Underflow:** Attempting to pop from an empty stack can also cause issues.
*   **Register Preservation:** Subroutines should preserve the contents of registers that are important to the calling program, usually by pushing them onto the stack at the beginning of the subroutine and popping them off before returning.

---

### Connecting to Course Outcomes (COs)

*   **CO1 (Describe 8085 architecture and Assembly language programming):** Understanding `PUSH`, `POP`, `CALL`, `RET`, and the Stack Pointer is fundamental to 8085 Assembly language programming.
*   **CO2 (Need for interrupts, Subroutines, timing diagram of 8085 microprocessor and interfacing):** This module directly addresses subroutines and their role in program execution. The stack's use in interrupts is also a key concept.
*   **CO3 (Embedded system and selection of processors):** While this module focuses on core microprocessor concepts, the principles of modularity and efficient code execution through subroutines are directly applicable to embedded system design, influencing how software is structured and optimized.
*   **CO4 (Arduino Uno based system architecture and Arduino IDE):** Arduino's C/C++ environment heavily relies on functions (which are equivalent to subroutines). Understanding the underlying stack mechanism helps in comprehending how function calls and returns are managed, even if abstracted by the C++ language. The `call stack` in C++ operates on the same LIFO principle.
*   **CO5 (Write Programs using Embedded C and implement an application using Arduino UNO board):** Writing functions in Embedded C for Arduino is standard practice. This module provides the theoretical foundation for how these functions work.
*   **CO6 (RISC Architecture and ARM - Arduino DUE):** The concepts of stack and subroutines are universal across most processor architectures, including RISC and ARM. The `PUSH`, `POP`, `BL` (Branch with Link for subroutine calls), and `BX LR` (Branch and Exchange to Link Register for returns) instructions in ARM are analogous to the 8085 instructions and achieve the same goals of stack management and subroutine execution.

---
