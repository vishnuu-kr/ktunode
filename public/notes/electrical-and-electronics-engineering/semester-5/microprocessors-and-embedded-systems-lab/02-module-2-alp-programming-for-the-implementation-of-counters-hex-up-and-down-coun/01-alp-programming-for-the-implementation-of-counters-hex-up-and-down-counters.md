---
title: "ALP programming for the implementation of counters: Hex up and down counters"
subject: "MICROPROCESSORS AND EMBEDDED SYSTEMS LAB"
module: "Module 2: ALP programming for the implementation of counters: Hex up and down counters"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f364ec"
status: "completed"
scrapedAt: "2026-05-23T16:23:04.942Z"
---
# Microprocessors and Embedded Systems Lab

## Module 2: ALP Programming for the Implementation of Counters: Hex Up and Down Counters

### Topic: ALP Programming for the Implementation of Counters: Hex Up and Down Counters

---

### Introduction

This module focuses on developing Assembly Language Programs (ALP) for the 8051 microcontroller to implement hexadecimal up and down counters. Counters are fundamental building blocks in embedded systems, used for timing, event counting, and controlling sequences. We will explore how to create programs that increment and decrement a hexadecimal value displayed on an output port. This topic directly addresses **CO1: Develop and execute ALP programs for solving arithmetic and logical problems using microcontroller (Knowledge Level: K3)** by utilizing arithmetic and logical instructions for counter operations.

---

### Key Concepts and Definitions

*   **Counter:** A sequential logic circuit that counts the number of input pulses. In our context, these are software-implemented counters using the 8051's registers and instructions.
*   **Hexadecimal (Hex):** A base-16 number system using digits 0-9 and letters A-F. Hexadecimal numbers are commonly used in microcontroller programming due to their efficient representation of binary data.
*   **Up Counter:** A counter that increments its value with each clock pulse or event.
*   **Down Counter:** A counter that decrements its value with each clock pulse or event.
*   **Assembly Language Program (ALP):** A low-level programming language that provides a one-to-one mapping between instructions and machine code. It allows direct control over the microcontroller's hardware.
*   **8051 Microcontroller:** A popular 8-bit microcontroller known for its robust architecture and wide range of applications in embedded systems.
*   **Registers:** Small, fast memory locations within the microcontroller used to hold data and addresses for immediate processing. Key registers for this topic include:
    *   **Accumulator (A):** The primary register for arithmetic and logical operations.
    *   **B Register:** Another general-purpose register, often used in multiplication and division, and can also be used for temporary storage.
    *   **R0-R7:** General-purpose registers in the register banks, providing flexible data manipulation.
    *   **Program Counter (PC):** Holds the address of the next instruction to be executed.
    *   **Data Pointer (DPTR):** A 16-bit register used for accessing external memory or look-up tables.

---

### Principles of Counter Implementation in ALP

Implementing a counter in ALP involves repeatedly performing the following operations:

1.  **Initialization:** Setting an initial value for the counter.
2.  **Increment/Decrement:** Modifying the counter's value using arithmetic instructions.
3.  **Output:** Displaying the counter's current value on an output port.
4.  **Delay (Optional but Common):** Introducing a pause between updates to make the counting visible or to synchronize with external events.
5.  **Looping:** Repeating the increment/decrement and output process.
6.  **Condition Check (for Down Counters or specific ranges):** Checking if the counter has reached a certain value to reset or change direction.

---

### 1. Hexadecimal Up Counter Implementation

An up counter sequentially increments its value from a starting point. For a hexadecimal counter, this means incrementing from 00H, 01H, ..., FFH, and then potentially wrapping around to 00H.

#### Core Instructions for Up Counting:

*   **MOV:** To load initial values into registers or move data between registers/memory.
*   **INC:** To increment the value in a register (e.g., `INC A`, `INC R0`).
*   **ADD:** To add a value to a register. `ADD A, #01H` will increment the accumulator by 1.
*   **JNZ:** Jump if Not Zero. Useful for creating delays or looping a specific number of times.
*   **SJMP:** Short Jump. To create infinite loops.
*   **ACALL/LCALL:** To call a subroutine (e.g., for a delay routine).

#### Example ALP Program for a Hex Up Counter (Displaying on Port 1)

This program will continuously count up from 00H to FFH on Port 1.

```assembly
ORG 0000H       ; Start program at address 0000H

MAIN:
    MOV P1, #00H    ; Initialize Port 1 to 00H (optional, good practice)
    MOV A, #00H     ; Initialize Accumulator (our counter) to 00H

LOOP_UP:
    MOV P1, A       ; Output the current value of A to Port 1
    ACALL DELAY     ; Call a delay subroutine for visibility
    INC A           ; Increment the accumulator
    CJNE A, #00H, LOOP_UP ; If A is not 00H, jump back to LOOP_UP
                        ; If A becomes 00H (after FFH increment), it wraps around

    SJMP LOOP_UP    ; Infinite loop to keep counting

DELAY:
    MOV R0, #05H    ; Outer loop count for delay
DELAY_OUTER:
    MOV R1, #0FFH   ; Inner loop count for delay
DELAY_INNER:
    DJNZ R1, DELAY_INNER ; Decrement R1 and loop until R1 is zero
    DJNZ R0, DELAY_OUTER ; Decrement R0 and loop until R0 is zero
    RET             ; Return from subroutine

END             ; End of program
```

**Explanation:**

1.  **`ORG 0000H`**: Sets the program origin to the reset vector.
2.  **`MOV P1, #00H`**: Initializes Port 1. While not strictly necessary for the counter logic, it ensures a known state on the port at the start.
3.  **`MOV A, #00H`**: Loads the initial value `00H` into the Accumulator, which will serve as our counter.
4.  **`LOOP_UP:`**: This is the label for the main counting loop.
5.  **`MOV P1, A`**: The current value of the Accumulator (`A`) is transferred to Port 1, making it visible on connected LEDs.
6.  **`ACALL DELAY`**: Calls the `DELAY` subroutine to pause the execution, allowing us to see the counting sequence.
7.  **`INC A`**: Increments the Accumulator. If `A` was `FFH`, `INC A` will make it `00H` due to 8-bit overflow.
8.  **`CJNE A, #00H, LOOP_UP`**: This is a crucial instruction for wrap-around.
    *   `CJNE` (Compare and Jump if Not Equal) compares the Accumulator (`A`) with the immediate value `#00H`.
    *   If `A` is *not equal* to `00H` (meaning it's any value from `01H` to `FFH`), it jumps to the `LOOP_UP` label.
    *   If `A` *is equal* to `00H` (which happens after `INC A` when `A` was `FFH`), the jump is *not* taken, and the next instruction is executed.
9.  **`SJMP LOOP_UP`**: This `SJMP` is effectively unreachable in this specific logic because the `CJNE` handles the wrap-around condition. However, if we wanted to count up to a specific value and stop, or change direction, we would modify this part. In this example, it's redundant because `CJNE` forces the loop to continue until `A` becomes `00H`, at which point the next `CJNE` would also fail to jump, and the `SJMP` would take over. A cleaner way to express the infinite count up is often:
    ```assembly
    LOOP_UP:
        MOV P1, A
        ACALL DELAY
        INC A
        SJMP LOOP_UP ; This will naturally wrap around from FFH to 00H
    ```
    Let's refine the `LOOP_UP` logic for clarity and correctness as intended for a continuous counter. The `CJNE` is actually perfect for ensuring the loop continues *until* it wraps.

    **Revised `LOOP_UP` section for clarity:**
    ```assembly
    LOOP_UP:
        MOV P1, A       ; Output current value
        ACALL DELAY     ; Wait
        INC A           ; Increment counter
        ; The INC A instruction itself handles the wrap-around from FFH to 00H.
        ; We want to continue looping as long as A is not 00H (after the increment)
        ; OR we want to continue even if it IS 00H to show the wrap.
        ; The simplest way for a continuous up-counter is:
        SJMP LOOP_UP    ; Jump back to the start of the loop
    ```
    The `CJNE` instruction in the first example was intended to demonstrate a condition, but for a simple continuous up-counter that wraps, `SJMP LOOP_UP` after `INC A` is sufficient and clearer. The `INC A` will naturally roll over from `FFH` to `00H`.

**Reference Note:** Ayala's "The 8051 Microcontroller" (Chapter 4: Instruction Set) provides detailed explanations of instructions like `INC`, `CJNE`, and `SJMP`, which are fundamental to implementing such counter logic.

---

### 2. Hexadecimal Down Counter Implementation

A down counter decrements its value with each event. This typically involves starting from a high value and counting down towards 00H.

#### Core Instructions for Down Counting:

*   **MOV:** For initialization.
*   **DEC:** To decrement the value in a register (e.g., `DEC A`, `DEC R0`).
*   **SUBB:** To subtract a value from a register. `SUBB A, #01H` will decrement the accumulator by 1. `SUBB` is often used when dealing with borrows in multi-byte arithmetic, but for a single byte decrement, `DEC` is more direct.
*   **DJNZ:** Decrement and Jump if Not Zero. Can be used to control the number of decrements or create delays.
*   **CJNE:** To check if the counter has reached zero.
*   **SJMP:** For creating loops.

#### Example ALP Program for a Hex Down Counter (Displaying on Port 1)

This program will continuously count down from FFH to 00H on Port 1.

```assembly
ORG 0000H       ; Start program at address 0000H

MAIN:
    MOV P1, #00H    ; Initialize Port 1 to 00H
    MOV A, #0FFH    ; Initialize Accumulator (our counter) to FFH

LOOP_DOWN:
    MOV P1, A       ; Output the current value of A to Port 1
    ACALL DELAY     ; Call a delay subroutine for visibility
    DEC A           ; Decrement the accumulator
    CJNE A, #00H, LOOP_DOWN ; If A is not 00H, jump back to LOOP_DOWN
                        ; If A becomes 00H, the jump is not taken

    SJMP LOOP_DOWN  ; After reaching 00H, the CJNE condition fails.
                    ; This SJMP ensures we continue counting down from FFH
                    ; if the condition is met (i.e., after 00H).
                    ; Wait, this logic is flawed for a simple wrap-around.
                    ; Let's refine the loop control.

    ; Corrected logic for continuous down-counting wrap-around:
    ; If A reaches 00H after DEC A, the CJNE condition (A != 00H) fails.
    ; We *want* to continue the loop to display 00H and then wrap around.
    ; So the SJMP should always be taken for continuous counting.

    ; Re-evaluating the intent: If we want it to stop at 00H, we'd do something else.
    ; For a continuous down-counter that wraps from 00H to FFH:

    SJMP LOOP_DOWN  ; This should always be taken to maintain the loop


DELAY:
    MOV R0, #05H    ; Outer loop count for delay
DELAY_OUTER:
    MOV R1, #0FFH   ; Inner loop count for delay
DELAY_INNER:
    DJNZ R1, DELAY_INNER ; Decrement R1 and loop until R1 is zero
    DJNZ R0, DELAY_OUTER ; Decrement R0 and loop until R0 is zero
    RET             ; Return from subroutine

END             ; End of program
```

**Explanation of Down Counter Logic:**

1.  **`ORG 0000H`**: Program start.
2.  **`MOV P1, #00H`**: Initialize Port 1.
3.  **`MOV A, #0FFH`**: Initializes the Accumulator to `FFH`, the highest value for an 8-bit counter.
4.  **`LOOP_DOWN:`**: Label for the down-counting loop.
5.  **`MOV P1, A`**: Outputs the current value of `A` to Port 1.
6.  **`ACALL DELAY`**: Calls the delay subroutine.
7.  **`DEC A`**: Decrements the Accumulator. If `A` was `00H`, `DEC A` will make it `FFH`. This is the wrap-around for down-counting.
8.  **`CJNE A, #00H, LOOP_DOWN`**: This instruction is for *conditional* jumping.
    *   If `A` is *not equal* to `00H` (i.e., it's `FFH` down to `01H`), it jumps back to `LOOP_DOWN`.
    *   If `A` *is equal* to `00H` (after `DEC A` from `01H`), the jump is *not* taken.
9.  **`SJMP LOOP_DOWN`**: This `SJMP` instruction is placed *after* the `CJNE`.
    *   When `A` becomes `00H` (after decrementing from `01H`), the `CJNE` fails to jump. The program then proceeds to this `SJMP LOOP_DOWN`. This ensures the loop continues, and the `DEC A` will then wrap from `00H` to `FFH` in the next iteration.

    **Refined `LOOP_DOWN` section for clarity and continuous down-counting:**
    ```assembly
    LOOP_DOWN:
        MOV P1, A       ; Output current value
        ACALL DELAY     ; Wait
        DEC A           ; Decrement counter
        ; The DEC A instruction itself handles the wrap-around from 00H to FFH.
        ; We want to continue the loop regardless of the value to show FFH, FEH, ..., 01H, 00H, FFH, FEH...
        SJMP LOOP_DOWN  ; Jump back to the start of the loop
    ```
    Similar to the up-counter, the `SJMP` after `DEC A` is the most straightforward way to implement a continuous down-counter that wraps around. The `CJNE` can be useful if you want to stop at zero or perform a different action when zero is reached.

**Reference Note:** Lyla B. Das's "Microprocessors and Microcontrollers" (Chapter 6: 8051 Microcontroller Instruction Set) details `DEC` and `CJNE` instructions, reinforcing their use in counter logic.

---

### Implementing Counters with Specific Ranges or Conditions

Counters are rarely just infinite loops. You might want to:

*   Count up to a specific value (e.g., 00H to 09H for decimal display).
*   Count down from a specific value (e.g., 09H to 00H).
*   Reverse direction upon reaching an endpoint.
*   Count based on external input (e.g., button presses).

#### Example: Counting Up to 09H and Resetting

This program counts from 00H to 09H and then resets to 00H, repeating the cycle.

```assembly
ORG 0000H

MAIN:
    MOV P1, #00H
    MOV A, #00H     ; Start at 00H

LOOP_COUNT_TO_09:
    MOV P1, A       ; Output current value
    ACALL DELAY     ; Wait
    INC A           ; Increment
    CJNE A, #0AH, LOOP_COUNT_TO_09 ; Compare with 0AH (which is 10 in decimal)
                                ; If A is not 0AH, jump back to LOOP_COUNT_TO_09
                                ; If A IS 0AH, the jump is not taken.
                                ; This means we displayed 09H and are now about to increment to 0AH.

    ; When A becomes 0AH (which is 10 decimal, or 0A hex), the CJNE will not jump.
    ; The next instruction is executed.
    MOV A, #00H     ; Reset A to 00H after reaching 0AH
    SJMP LOOP_COUNT_TO_09 ; Go back to start the count again

DELAY:
    MOV R0, #05H
DELAY_OUTER:
    MOV R1, #0FFH
DELAY_INNER:
    DJNZ R1, DELAY_INNER
    DJNZ R0, DELAY_OUTER
    RET

END
```

**Explanation:**

*   The key change is `CJNE A, #0AH, LOOP_COUNT_TO_09`.
*   We want to stop *after* displaying `09H`.
*   `INC A` will increment `A` from `09H` to `0AH`.
*   At this point, `CJNE A, #0AH` will compare `A` (`0AH`) with `#0AH`. They are equal, so the jump is *not* taken.
*   The program then executes `MOV A, #00H` to reset the counter to `00H`.
*   Finally, `SJMP LOOP_COUNT_TO_09` restarts the loop, ensuring `00H` is displayed in the next iteration.

**Reference Note:** Mazidi's "The 8051 Microcontroller and Embedded Systems" (Chapter 5: I/O Programming) covers jump instructions like `CJNE` and their application in controlling program flow based on data values, essential for setting counter ranges.

---

### Interfacing with External Components (Conceptually)

While the examples focus on displaying counts on an output port (like Port 1), counters can be interfaced with various peripherals:

*   **Seven-Segment Displays:** To show hexadecimal digits. This requires decoding the hex value to drive the seven segments and potentially a digit select line. This relates to **CO3: Examine circuits for interfacing processor with various peripheral devices (Knowledge Level: K4)** and **CO4: Design a microcontroller based system with the help of various interfacing devices (Knowledge Level: K6)**.
*   **LEDs:** For simple visual indication of the count.
*   **External Interrupts:** To trigger counter increments/decrements based on external events.
*   **Timers:** The 8051's internal timers can be used to generate periodic pulses to drive the counter or to implement more precise delays.

---

### Practice Questions and Exercises

**Question 1:**
Write an ALP program for the 8051 to implement a hexadecimal up-counter that starts from `05H` and counts up to `0FH`, then stops. Display the count on Port 2.

**Answer 1:**

```assembly
ORG 0000H

MAIN:
    MOV P2, #00H
    MOV A, #05H     ; Start at 05H

LOOP_COUNT_TO_0FH:
    MOV P2, A       ; Output current value
    ACALL DELAY     ; Wait
    INC A           ; Increment
    CJNE A, #10H, LOOP_COUNT_TO_0FH ; Compare with 10H (which is 16 decimal, 0FH is 15)
                                ; If A is not 10H, jump.
                                ; If A IS 10H (after incrementing from 0FH), stop.
                                ; The loop continues as long as A is not 10H.
                                ; When A becomes 10H, the jump is NOT taken.

    ; If CJNE fails, it means A has reached 10H.
    ; The program will fall through.
    ; To stop, we can simply have an infinite loop here, or halt.
    ; For this problem, let's assume "stops" means it doesn't increment further.
    ; The current value 0FH will be displayed and the program will proceed.
    ; A simpler interpretation of "stops" is to simply exit the loop by doing nothing more.
    ; However, usually, it means continuing to display the last value or halting.

    ; Let's modify the loop to ensure it displays 0FH and then stops the counting increment.
    ; If the requirement is to stop incrementing *after* 0FH is displayed:

    ; Revised logic for stopping after 0FH:
    MOV A, #0FH     ; Ensure the last displayed value is 0FH (if the INC A made it 10H)
    ; The previous INC A would have made A=10H if the condition failed.
    ; So, if we want to *display* 0FH and then halt any further increment:
    ; The CJNE condition failing means A is 10H. We should have already displayed 0FH.
    ; Let's rethink the loop exit condition.

    ; Corrected logic: Count up to 0FH. The *last value* to be displayed is 0FH.
    ; So, we should check if A is *about to become* something greater than 0FH.

    ; Alternative loop structure:
    MOV A, #05H     ; Start at 05H
LOOP_COUNT_ALT:
    MOV P2, A       ; Output current value
    ACALL DELAY     ; Wait
    CJNE A, #0FH, CHECK_NEXT ; Compare with 0FH. If not equal, check if we should continue.
    ; If A is 0FH, we've reached the limit. Do nothing further.
    SJMP $          ; Halt the processor (or perform some other action)

CHECK_NEXT:
    INC A           ; Increment only if we haven't reached 0FH
    SJMP LOOP_COUNT_ALT ; Continue the loop

DELAY:
    MOV R0, #05H
DELAY_OUTER:
    MOV R1, #0FFH
DELAY_INNER:
    DJNZ R1, DELAY_INNER
    DJNZ R0, DELAY_OUTER
    RET

END
```
*(Self-correction: The initial attempt with `CJNE A, #10H` and then `MOV A, #00H` was for a count-up-and-reset. For stopping *at* 0FH, the logic needs to prevent the increment past 0FH. The alternative `LOOP_COUNT_ALT` structure is better suited for this.)*

**Question 2:**
Explain the purpose of the `CJNE` instruction in counter programs. How can it be used to implement a counter that wraps around from `00H` to `FFH`?

**Answer 2:**
The `CJNE` (Compare and Jump if Not Equal) instruction is used to compare the value in a register (usually the Accumulator) with another value (immediate data, another register, or a memory location). If the values are not equal, it performs a jump to a specified address.

In counter programs, `CJNE` is vital for:
1.  **Range Checking:** Detecting when a counter reaches a specific upper or lower limit.
2.  **Loop Control:** Ending a counting sequence at a desired value.
3.  **Wrap-around Logic:** While `INC` and `DEC` handle the automatic bit overflow for wrap-around (e.g., `FFH` + `01H` = `00H`, `00H` - `01H` = `FFH`), `CJNE` can be used to *react* to reaching a specific value.

To implement a counter that wraps around from `00H` to `FFH` (like a continuous down-counter):
If you use `DEC A`, when `A` is `00H`, `DEC A` makes it `FFH`.
You can then use `CJNE A, #00H, LOOP_CONTINUE`. If `A` is `FFH` (because it just wrapped from `00H`), `CJNE` will see `FFH != 00H` and jump to `LOOP_CONTINUE`. If `A` was `01H` and becomes `00H`, `CJNE` sees `00H == 00H` and *doesn't* jump. This would typically be followed by an `SJMP LOOP_CONTINUE` to ensure the loop always continues for a wrap-around counter.
In essence, while `INC`/`DEC` provide the wrap-around mechanism, `CJNE` can be used to conditionally execute code *after* a specific value is reached (or not reached), or to ensure a loop continues indefinitely after a wrap. For a simple continuous wrap-around, `SJMP` after `INC`/`DEC` is often sufficient.

**Question 3:**
What is the primary register used for arithmetic operations in the 8051 that is commonly employed as a counter in ALP?

**Answer 3:**
The **Accumulator (A)** is the primary register used for arithmetic operations in the 8051 and is commonly employed as a counter in ALP.

---

### Important Points to Remember

*   **8-bit Operations:** The 8051 primarily works with 8-bit registers. When counting, values will naturally wrap around (e.g., `FFH` + 1 = `00H`, `00H` - 1 = `FFH`).
*   **Register Choice:** While the Accumulator (`A`) is the most common for counting due to its role in arithmetic instructions, other general-purpose registers (`R0`-`R7`) can also be used with `INC` and `DEC`.
*   **Delays:** Always include delay routines to make the counting visible on output ports. The length of the delay affects the speed of the counter.
*   **Looping Constructs:** Use `SJMP`, `JMP`, `JC`, `JNC`, `JZ`, `JNZ`, `CJNE`, `DJNZ` effectively to control the counter's behavior.
*   **Hexadecimal Representation:** Be mindful of hexadecimal notation (e.g., `05H`, `0FFH`, `10H` for 16).
*   **Port Initialization:** It's good practice to initialize output ports to a known state (usually `00H`) before starting operations.
*   **Clear Labelling:** Use meaningful labels for your code sections (`LOOP_UP`, `LOOP_DOWN`, `DELAY`, etc.) to improve readability.

---

### Alignment with Course Outcomes

*   **CO1 (K3): Develop and execute ALP programs for solving arithmetic and logical problems using microcontroller:** This entire module directly addresses CO1. We are using arithmetic (`INC`, `DEC`) and logical (implicit in loop control) instructions to solve the problem of implementing counters. The examples provide the ALP code necessary for this.
*   **CO3 (K4): Examine circuits for interfacing processor with various peripheral devices:** While the examples focus on ports, the concept of displaying counts on LEDs or potentially driving seven-segment displays requires understanding how the microcontroller's output pins interface with these devices. This is the foundation for examining such circuits.
*   **CO4 (K6): Design a microcontroller based system with the help of various interfacing devices:** Designing a system that uses a counter (e.g., a step counter, a timer, a sequence controller) involves integrating counter logic with other components, which is the essence of system design. This module provides the core counter logic component.

---

This concludes the study notes for Module 2, Topic: ALP programming for the implementation of counters: Hex up and down counters. Remember to practice writing and simulating these programs to solidify your understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
