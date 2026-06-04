---
title: "ALP programming for implementing conditional call and return instructions: Toggle the bits of port 1 by sending the values of 55H and AAH continuously"
subject: "MICROPROCESSORS AND EMBEDDED SYSTEMS LAB"
module: "Module 3: ALP programming for implementing Boolean and logical instructions: bit manipulation."
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f364f0"
status: "completed"
scrapedAt: "2026-05-23T16:23:07.390Z"
---
# MICROPROCESSORS AND EMBEDDED SYSTEMS LAB

## Module 3: ALP Programming for Implementing Boolean and Logical Instructions: Bit Manipulation

### Topic: ALP Programming for Implementing Conditional Call and Return Instructions: Toggle the Bits of Port 1 by Sending the Values of 55H and AAH Continuously

---

### 1. Introduction to Bit Manipulation and Port Operations

This topic focuses on using Assembly Language Programming (ALP) to manipulate individual bits within ports of a microcontroller, specifically the 8051 family. We'll explore how to control output pins by sending specific bit patterns and how to achieve continuous toggling of these bits using conditional logic.

**Key Concepts:**

*   **Ports:** In microcontrollers like the 8051, ports are groups of parallel input/output pins that allow the microcontroller to interact with the external world. Port 1 in the 8051 is a general-purpose I/O port.
*   **Bit Manipulation:** The ability to access and modify individual bits within a byte. This is crucial for controlling specific outputs or reading individual inputs.
*   **ALP (Assembly Language Programming):** A low-level programming language that provides direct control over the microcontroller's hardware.
*   **Toggling:** The process of switching a bit from 0 to 1 or from 1 to 0.
*   **Conditional Instructions:** Instructions that execute based on the status of certain flags or conditions within the microcontroller. This allows for program flow control.

**Reference:**
*   **Kenneth Ayala's "The 8051 Microcontroller" (Chapter 4: I/O Ports):** This book provides a foundational understanding of the 8051's I/O ports, their registers, and how to control them. It will be instrumental in understanding how to write data to Port 1.
*   **R. Lyla B. Das's "Microprocessors and Microcontrollers" (Chapter 5: Microcontroller 8051):** This text also delves into the architecture of the 8051, including the functionality of its ports, which is essential for this topic.

---

### 2. Understanding 55H and AAH Bit Patterns

The values 55H and AAH are specific hexadecimal numbers that represent alternating bit patterns. Understanding these patterns is key to achieving the desired toggling effect on Port 1.

**Key Concepts:**

*   **Hexadecimal Representation:** A base-16 number system used to represent data more compactly than binary.
*   **Bit Patterns:** The sequence of 0s and 1s that make up a binary number.

**Analysis of Bit Patterns:**

*   **55H:**
    *   In binary: `0101 0101`
    *   This pattern has alternating '1's and '0's, starting with a '0' at the most significant bit (MSB) and a '1' at the least significant bit (LSB).
*   **AAH:**
    *   In binary: `1010 1010`
    *   This pattern also has alternating '1's and '0's, starting with a '1' at the MSB and a '0' at the LSB.

**How they achieve toggling:**
When you send 55H to Port 1, you set specific pins to high and others to low. When you then send AAH, you invert this pattern, effectively toggling the state of each pin.

---

### 3. Introduction to Conditional Call and Return Instructions

Conditional call and return instructions are fundamental for creating loops and subroutines that execute based on specific conditions. This allows for more dynamic and efficient program execution.

**Key Concepts:**

*   **Call Instruction (`CALL`):** Transfers program control to a subroutine. The address of the instruction following the `CALL` is pushed onto the stack, so the subroutine can return to the main program.
*   **Return Instruction (`RET`):** Transfers program control back to the instruction following the `CALL` that invoked the current subroutine. The return address is popped from the stack.
*   **Conditional Call (`CJNE`, `JZ`, `JNZ`, `JC`, `JNC`, etc.):** These instructions transfer control to a subroutine *only if* a specific condition is met.
*   **Conditional Return (`RET`, `RETI`):** In the context of this topic, we'll primarily use unconditional `RET` to exit a loop or subroutine. However, understanding that `RET` can be conditional based on the flags set by preceding instructions is important.

**Relevant 8051 Instructions:**

*   **`MOV P1, #55H`:** Moves the value 55H to Port 1.
*   **`MOV P1, #AAH`:** Moves the value AAH to Port 1.
*   **`ACALL`:** Absolute Call (calls a subroutine within the same 2KB block).
*   **`LCALL`:** Long Call (calls a subroutine anywhere in the 64KB address space).
*   **`RET`:** Return from subroutine.
*   **`SJMP`:** Short Jump (unconditional jump to a relative address within -128 to +127 bytes).
*   **`LJMP`:** Long Jump (unconditional jump to any address within the 64KB address space).
*   **`DJNZ`:** Decrement and Jump if Not Zero. This is a common instruction used to create loops.

**Textbook Integration:**

*   **Kenneth Ayala's "The 8051 Microcontroller" (Chapter 5: Instructions and Structure):** This chapter extensively covers the instruction set of the 8051, including jump, call, and return instructions. It will be crucial for understanding how to implement the continuous toggling logic.
*   **Muhammad Ali Mazidi's "The 8051 microcontroller and embedded systems" (Chapter 4: Instruction Set):** This reference provides detailed explanations of various instruction categories, including call and return mechanisms, which are directly applicable.

---

### 4. Implementing Continuous Toggling of Port 1

To toggle the bits of Port 1 continuously between 55H and AAH, we will create a loop that repeatedly performs these actions. While the topic mentions "conditional call and return," in this specific scenario, a simple infinite loop structure using jumps will achieve the desired continuous toggling. The "conditional" aspect can be interpreted as the loop's continuation based on the state of a counter (like in `DJNZ`) or simply the absence of a termination condition for an infinite loop.

**Program Structure:**

1.  **Initialization:** Set up the microcontroller environment (if necessary, though often not explicitly required for simple port manipulation).
2.  **Loop:**
    *   Send 55H to Port 1.
    *   Introduce a delay (important to *see* the toggling).
    *   Send AAH to Port 1.
    *   Introduce another delay.
    *   Jump back to the beginning of the loop.

**ALP Program Example (8051 Assembly):**

```assembly
ORG 0000H      ; Start program at address 0000H

LOOP:
    MOV P1, #55H    ; Load Port 1 with 55H (01010101)
    LCALL DELAY     ; Call the delay subroutine
    
    MOV P1, #AAH    ; Load Port 1 with AAH (10101010)
    LCALL DELAY     ; Call the delay subroutine
    
    SJMP LOOP       ; Jump back to the LOOP label to repeat
    
; --- Delay Subroutine ---
; This is a simple delay loop. The exact delay depends on the clock frequency.
; For demonstration, a few hundred milliseconds might be suitable.
DELAY:
    MOV R0, #10H     ; Initialize counter R0 (adjust as needed for desired delay)
DELAY_LOOP:
    DJNZ R0, DELAY_LOOP ; Decrement R0 and jump if not zero
    RET             ; Return from subroutine

END             ; End of assembly program
```

**Explanation:**

*   **`ORG 0000H`**: Specifies that the program should start execution from memory address 0000H, which is the reset vector for the 8051.
*   **`LOOP:`**: This is a label marking the beginning of our infinite loop.
*   **`MOV P1, #55H`**: This instruction moves the immediate value `55H` into the `P1` special function register. This output will be visible on the pins of Port 1.
*   **`LCALL DELAY`**: This instruction calls the `DELAY` subroutine. `LCALL` is used because the `DELAY` subroutine might be located anywhere in the program memory. The address of the instruction *after* `LCALL` is pushed onto the stack, and control is transferred to the `DELAY` subroutine.
*   **`MOV P1, #AAH`**: Similar to the previous `MOV` instruction, this loads Port 1 with `AAH`.
*   **`SJMP LOOP`**: This is a short jump instruction. It unconditionally jumps back to the `LOOP` label, creating an infinite loop.
*   **`DELAY:`**: This is the label for our delay subroutine.
*   **`MOV R0, #10H`**: Loads the register `R0` with the value `10H` (16 in decimal). This register will act as a counter for our delay loop. The value `10H` is a starting point; for a longer delay, you would use a larger value, or nest multiple loops.
*   **`DELAY_LOOP:`**: This is a label for the inner delay loop.
*   **`DJNZ R0, DELAY_LOOP`**: This is a crucial instruction. It decrements the value in `R0`. If `R0` is *not zero* after decrementing, it jumps back to the `DELAY_LOOP` label. This creates a loop that executes `10H` (16) times.
*   **`RET`**: When `R0` finally becomes zero, the `DJNZ` instruction does not jump. Control then proceeds to the `RET` instruction, which pops the return address from the stack and transfers control back to the main program after the `LCALL DELAY`.
*   **`END`**: This directive signifies the end of the assembly source code.

**Output:**
When this program is executed on an 8051 microcontroller connected to LEDs on Port 1, you will observe the LEDs continuously blinking, alternating between the pattern of 55H and AAH.

---

### 5. Incorporating Conditional Logic (Alternative Interpretation or Extension)

While the primary goal is continuous toggling, the phrase "conditional call and return" hints at scenarios where the toggling might stop based on a condition, or where the pattern might change.

**Example Scenario: Toggle until a button is pressed.**

Let's assume Port 3 Pin 0 (P3.0) is connected to a button. We want to toggle Port 1 until the button is pressed (assuming a logic high on button press).

**ALP Program Example:**

```assembly
ORG 0000H

MAIN_LOOP:
    MOV P1, #55H
    LCALL DELAY
    
    MOV P1, #AAH
    LCALL DELAY
    
    MOV P3, P3      ; Read Port 3 to check the button state
    JNB P3.0, MAIN_LOOP ; Jump to MAIN_LOOP if P3.0 is NOT set (button not pressed)

    ; If P3.0 is set (button pressed), the JNB will not jump, and the program will continue.
    ; Here, we can add a termination sequence or a different routine.
    
    ; Example: Turn off all Port 1 LEDs
    MOV P1, #00H
    SJMP $          ; Halt the program indefinitely

; --- Delay Subroutine ---
DELAY:
    MOV R0, #50H    ; Increased delay for better visibility
DELAY_LOOP:
    DJNZ R0, DELAY_LOOP
    RET

END
```

**Explanation of Additions:**

*   **`MOV P3, P3`**: This is a common technique to ensure the input buffer for Port 3 is read. While `JNB P3.0, ...` directly accesses the bit, reading the entire port can sometimes be useful for synchronization or if other pins on Port 3 are also being used.
*   **`JNB P3.0, MAIN_LOOP`**: This is a conditional jump instruction.
    *   `JNB` stands for "Jump if Not Bit."
    *   `P3.0` refers to bit 0 of Port 3.
    *   If the bit `P3.0` is `0` (logic low), the instruction will jump back to the `MAIN_LOOP`.
    *   If the bit `P3.0` is `1` (logic high, indicating the button is pressed), the `JNB` instruction will *not* jump, and program execution will continue to the next instruction.
*   **`MOV P1, #00H`**: Once the button is pressed, Port 1 is set to all zeros, turning off the LEDs.
*   **`SJMP $`**: This is an infinite loop at the current address (`$`). It effectively halts the program execution.

**Conditional Call/Return Connection:**
In this extended example, the `JNB` instruction acts as the condition. If the condition (button not pressed) is met, it "calls" (jumps to) the `MAIN_LOOP` again. When the condition is *not* met (button pressed), the execution "returns" from the implicit loop and proceeds to the termination phase.

---

### 6. Learning Outcomes and Course Outcomes Alignment

This topic directly addresses several learning outcomes and course outcomes:

**Learning Outcomes Covered:**

*   **Understanding of 55H and AAH bit patterns:** Essential for configuring the output.
*   **ALP programming for toggling Port 1:** Directly implemented through the ALP code.
*   **Use of delay routines:** Necessary to observe the toggling effect.
*   **Introduction to conditional instructions:** Demonstrated through the `SJMP` for the infinite loop and optionally `JNB` for conditional termination.
*   **Understanding the concept of continuous execution:** Achieved via the looping structure.

**Course Outcomes Alignment:**

*   **CO1: Develop and execute ALP programs for solving arithmetic and logical problems using microcontroller (Knowledge Level: K3):** This topic directly involves developing an ALP program to solve the problem of toggling Port 1 bits, which is a logical operation at the bit level. The student needs to *apply* their knowledge of instructions to create this solution.
*   **CO2: Develop embedded C programming using instruction sets of 8051 (Knowledge Level: K3):** While this topic is ALP focused, understanding the underlying instruction set is crucial for both ALP and embedded C development on the 8051. The principles learned here (port access, looping) are transferable to embedded C.
*   **CO3: Examine circuits for interfacing processor with various peripheral devices (Knowledge Level: K4):** To see the toggling, one would interface LEDs to Port 1. This requires understanding how to connect and interpret the behavior of peripherals with the microcontroller's output ports.
*   **CO4: Design a microcontroller based system with the help of various interfacing devices (Knowledge Level: K6):** Designing a system where Port 1 lights up in a specific alternating pattern, potentially controlled by a button press (as in the extension), involves system design principles. This topic provides a fundamental building block for such designs.

---

### 7. Practice Questions and Exercises

**Question 1:**
Explain the binary representation of 55H and AAH and why these values are used to toggle Port 1.

**Answer:**
*   `55H` in binary is `0101 0101`.
*   `AAH` in binary is `1010 1010`.
These values are used because they have alternating bits. When you switch from `0101 0101` to `1010 1010`, each bit position changes its state (0 to 1 or 1 to 0), effectively toggling the output on each port pin.

**Question 2:**
Write an ALP program for the 8051 that toggles Port 0 with the pattern `33H` and `CC`H continuously, with a shorter delay than the previous example.

**Answer:**
```assembly
ORG 0000H

LOOP:
    MOV P0, #33H    ; Load Port 0 with 33H (00110011)
    LCALL SHORT_DELAY
    
    MOV P0, #CCH    ; Load Port 0 with CCH (11001100)
    LCALL SHORT_DELAY
    
    SJMP LOOP

SHORT_DELAY:
    MOV R1, #10H    ; Shorter delay counter
SHORT_DELAY_LOOP:
    DJNZ R1, SHORT_DELAY_LOOP
    RET

END
```

**Question 3:**
What is the purpose of the `DJNZ R0, DELAY_LOOP` instruction?

**Answer:**
The `DJNZ R0, DELAY_LOOP` instruction decrements the value in register `R0`. If the result of the decrement operation is *not zero*, it jumps to the label `DELAY_LOOP`. This creates a loop that repeats a certain number of times, controlled by the initial value loaded into `R0`. It's a common way to implement delays in 8051 ALP.

**Question 4:**
If you wanted Port 1 to toggle between `00H` and `FFH`, what instructions would you use in your main loop?

**Answer:**
You would use:
```assembly
MOV P1, #00H
; delay
MOV P1, #0FFH
; delay
```
`00H` is `0000 0000` and `FFH` is `1111 1111`. These also represent a complete toggling of all bits.

---

### 8. Important Points to Remember

*   **Port Initialization:** For output operations, you generally don't need to explicitly initialize Port 1 before writing to it. However, for input operations or if a port is used for both, specific initialization might be required.
*   **Delay is Crucial:** Without a delay, the toggling will happen so fast that it will be imperceptible to the human eye when observing LEDs. The `LCALL DELAY` is essential for visualization.
*   **Clock Frequency:** The actual duration of the delay depends on the microcontroller's clock frequency and the number of clock cycles each instruction takes. The `DELAY` subroutine provided is a generic example and might need tuning for specific hardware.
*   **Register Usage:** Be mindful of which registers (`R0`, `R1`, etc.) are used for delay loops to avoid conflicts with other parts of your program.
*   **Stack Usage:** `LCALL` pushes an address onto the stack. Ensure that your program (especially if it has many nested subroutines) does not overflow the 8051's stack.
*   **Bit Addressing:** The 8051 supports bit-addressable memory. While we are manipulating entire ports here, it's worth noting that individual bits can also be accessed and modified using instructions like `SETB`, `CLR`, `CPL`, `JB`, `JNB`, etc. (though these are not the primary focus of *this specific* toggling task).

---

This comprehensive set of notes covers the fundamentals of toggling Port 1 using specific bit patterns in ALP for the 8051, incorporating references from the provided textbooks and aligning with the course outcomes. The examples and explanations aim to provide a solid understanding for practical lab implementation.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
