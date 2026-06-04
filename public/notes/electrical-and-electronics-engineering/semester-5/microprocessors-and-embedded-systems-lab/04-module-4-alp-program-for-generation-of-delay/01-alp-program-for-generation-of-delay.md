---
title: "ALP program for Generation of delay."
subject: "MICROPROCESSORS AND EMBEDDED SYSTEMS LAB"
module: "Module 4: ALP program for Generation of delay."
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f364f3"
status: "completed"
scrapedAt: "2026-05-23T16:23:08.899Z"
---
# MICROPROCESSORS AND EMBEDDED SYSTEMS LAB - Module 4: ALP Programs for Generation of Delay

## Introduction to Delay Generation

In embedded systems, controlling the timing of operations is crucial. Delay generation is a fundamental technique used to introduce pauses or specific time intervals between the execution of different tasks. This is essential for various applications like controlling the blinking rate of LEDs, serial communication protocols, motor control, and sensor readings.

Assembly Language Programming (ALP) provides direct control over the microcontroller's hardware, making it an efficient way to implement precise delays. This module focuses on how to generate delays using ALP for the 8051 microcontroller.

## Learning Outcomes Covered in this Module:

*   **Understanding the concept of delay generation in ALP:** Learn how to use instructions to create time delays.
*   **Implementing different delay techniques:** Explore various methods to achieve varying delay durations.
*   **Calculating delay periods:** Understand the factors that influence delay time and how to calculate them.
*   **Writing and debugging ALP programs for delay generation:** Gain practical experience in creating and testing delay routines.

## Key Concepts and Definitions

*   **Clock Cycle:** The fundamental unit of time in a microcontroller. The execution time of each instruction is measured in clock cycles.
*   **Machine Cycle:** A specific number of clock cycles required to execute a single instruction or a part of an instruction. For the 8051, a machine cycle typically consists of 12 clock cycles (though some instructions take fewer).
*   **Crystal Frequency:** The external crystal oscillator connected to the microcontroller determines its clock frequency. A higher crystal frequency results in faster execution and shorter delays.
*   **Delay Routine:** A block of assembly code designed to consume a specific amount of time.
*   **Nested Loops:** Using loops within loops to extend the delay period.

## How Delay is Achieved in ALP

Delays are primarily achieved by executing a sequence of instructions that take a predictable amount of time. By carefully choosing instructions and their execution counts, we can create precise time delays. The most common method involves using **loops** and **counter registers**.

The total delay is a function of:
1.  **The number of clock cycles per machine cycle.** (For 8051, this is 12 clock cycles per machine cycle).
2.  **The crystal frequency.** (e.g., 11.0592 MHz, 12 MHz).
3.  **The number of machine cycles per instruction.** (Each instruction has a specific execution time in machine cycles).
4.  **The number of times a loop or delay routine is executed.**

**Formula for Delay Calculation:**

```
Delay (in seconds) = (Number of Machine Cycles) * (Machine Cycles per Clock Cycle) * (Clock Cycles per Machine Cycle) / (Crystal Frequency)
```

For the 8051:
```
Delay (in seconds) = (Number of Machine Cycles) * (1/12) * (12) / (Crystal Frequency)
```
This simplifies to:
```
Delay (in seconds) = (Number of Machine Cycles) / (Crystal Frequency)
```

**Important Note:** Most 8051 instructions take 1 machine cycle to execute. However, some instructions like `DIV`, `MUL`, and `RET` take more. For basic delay loops, we usually assume 1 machine cycle per instruction.

## Types of Delay Generation Techniques

### 1. Simple Delay Loop (Using a Single Register)

This is the most basic method. A register is initialized to a certain value and decremented until it becomes zero. The loop itself takes a fixed number of machine cycles.

**Example: Delay for approximately 1 second using an 11.0592 MHz crystal.**

Let's assume the instruction `DJNZ Rn, label` takes 2 machine cycles (1 for the decrement and check, 1 for the jump if not zero).

| Instruction    | Machine Cycles |
| -------------- | -------------- |
| `MOV R0, #value` | 1              |
| `LOOP:`        |                |
| `DJNZ R0, LOOP`| 2              |
| `N0: MOV R1, #value` | 1              |
| `N1: DJNZ R1, N0` | 2              |
| `N2: MOV R2, #value` | 1              |
| `N3: DJNZ R2, N2` | 2              |
| `RET`          | 2              |

**Calculation:**

Let's aim for a delay of approximately 1 second.
Crystal Frequency = 11.0592 MHz
Machine Cycles per second = 11,059,200 cycles/sec
Desired Delay = 1 second
Total Machine Cycles needed = 11,059,200 cycles/sec * 1 sec = 11,059,200 machine cycles.

This is too large for a single loop. We need nested loops.

**Let's consider a single `DJNZ R0, LOOP` loop:**
*   `MOV R0, #value` takes 1 machine cycle.
*   The `LOOP:` label itself doesn't take cycles.
*   `DJNZ R0, LOOP` takes 2 machine cycles (decrement and jump).
*   The loop repeats `value` times.
*   So, total machine cycles for the loop = `value * 2`.
*   After the loop, the program continues.

**Example: Delay for ~1 ms using 11.0592 MHz.**
Target machine cycles ≈ 11059.2
Let's use `DJNZ R0, LOOP` which takes 2 machine cycles per iteration.
So, we need approximately 11059.2 / 2 = 5529.6 iterations.
We can use a register value like `200` (hex `C8`).
`MOV R0, #200` (1 MC)
`LOOP: DJNZ R0, LOOP` (2 MC per iteration) - Repeats 200 times. Total MC = 200 * 2 = 400 MC.
This is not enough.

### 2. Nested Delay Loops (Using Multiple Registers)

To achieve longer delays, we can nest delay loops. Each inner loop is executed a specific number of times by an outer loop.

**Example: Generating a longer delay using two nested loops.**

```assembly
; Assume crystal frequency is 11.0592 MHz
; Machine cycles per second = 11,059,200
; Target delay = 100 ms (0.1 seconds)
; Target machine cycles = 11,059,200 * 0.1 = 1,105,920 machine cycles

; Instruction Timing (approximate for 8051):
; MOV Rx, #data   : 1 Machine Cycle
; DJNZ Rx, label  : 2 Machine Cycles

; Let's design a delay routine:
; Outer loop (R1) controls how many times the inner loop (R0) runs.
; Inner loop (R0) runs a fixed number of times.

; Inner loop (R0):
; MOV R0, #250      ; 1 MC
; LOOP0: DJNZ R0, LOOP0 ; 2 MC * 250 iterations = 500 MC

; Total MC for inner loop = 1 + (250 * 2) = 501 MC.

; Outer loop (R1):
; MOV R1, #220      ; 1 MC
; LOOP1: CALL DELAY_INNER ; Let's assume DELAY_INNER takes 501 MC
;       DJNZ R1, LOOP1    ; 2 MC * 220 iterations = 440 MC

; Total MC for outer loop = 1 + (220 * 501) + (2 * 220) = 1 + 110220 + 440 = 110661 MC.

; This is still not enough for 1 second. Let's rethink.

; To achieve a delay, we need a total number of machine cycles.
; Target MC for 1 sec = 11,059,200

; Consider a three-level nested loop for a 1-second delay.
; Let's design for a delay that's a factor of the total needed cycles.
; Suppose we want the innermost loop to execute N times.

; Inner Loop (R0):
; MOV R0, #250      ; 1 MC
; LOOP0: DJNZ R0, LOOP0 ; 2 MC * 250 iterations = 500 MC
; Total MC for LOOP0 = 501 MC

; Middle Loop (R1):
; MOV R1, #250      ; 1 MC
; LOOP1: CALL DELAY_INNER ; Assume DELAY_INNER takes 501 MC.
;       DJNZ R1, LOOP1    ; 2 MC * 250 iterations = 500 MC
; Total MC for LOOP1 = 1 + (250 * 501) + (2 * 250) = 1 + 125250 + 500 = 125751 MC.

; Outer Loop (R2):
; MOV R2, #250      ; 1 MC
; LOOP2: CALL DELAY_MIDDLE ; Assume DELAY_MIDDLE takes 125751 MC.
;       DJNZ R2, LOOP2    ; 2 MC * 250 iterations = 500 MC
; Total MC for LOOP2 = 1 + (250 * 125751) + (2 * 250) = 1 + 31437750 + 500 = 31438251 MC.

; This is too much! The values need to be calculated carefully.

```

**Correct Approach to Nested Loops:**

Let's determine the number of iterations needed for each loop to reach a target delay.
Crystal Frequency = 11.0592 MHz
Desired Delay = 1 second
Target Machine Cycles = 11,059,200 MC

Consider the structure:
```assembly
DELAY_MAIN:
    MOV R2, #outer_count    ; Outer loop count
OUTER_LOOP:
    MOV R1, #middle_count   ; Middle loop count
MIDDLE_LOOP:
    MOV R0, #inner_count    ; Inner loop count
INNER_LOOP:
    DJNZ R0, INNER_LOOP     ; Takes 2 MC (decrement & jump)
    DJNZ R1, MIDDLE_LOOP    ; Takes 2 MC
    DJNZ R2, OUTER_LOOP     ; Takes 2 MC
    RET                     ; Takes 2 MC
```

The `DJNZ Rn, label` instruction takes 2 machine cycles if the jump is taken, and 1 machine cycle if the jump is not taken (when the register becomes zero). For delay calculation, we assume the jump is always taken until the loop finishes.

Let the inner loop execute `inner_count` times. Each iteration of `INNER_LOOP` takes 2 MC.
So, the `INNER_LOOP` block executes `inner_count * 2` MC.
The `DJNZ R0, INNER_LOOP` itself takes 2 MC per iteration.
Total MC for the inner loop (including `MOV R0`) = `1 (MOV R0) + (inner_count * 2)`.
However, the `DJNZ R0, INNER_LOOP` instruction is the one *causing* the loop.
So, the loop body takes `2` MC per iteration. The `DJNZ R0, INNER_LOOP` instruction itself is executed `inner_count` times.

**Let's refine the timing:**

```assembly
DELAY_ROUTINE:
    MOV R2, #OUTER_VAL    ; 1 MC
LOOP_OUTER:
    MOV R1, #MIDDLE_VAL   ; 1 MC
LOOP_MIDDLE:
    MOV R0, #INNER_VAL    ; 1 MC
LOOP_INNER:
    DJNZ R0, LOOP_INNER     ; 2 MC (for each iteration of inner loop)
    DJNZ R1, LOOP_MIDDLE    ; 2 MC (for each iteration of middle loop)
    DJNZ R2, LOOP_OUTER     ; 2 MC (for each iteration of outer loop)
    RET                     ; 2 MC
```

**Total Machine Cycles =**
`1 (MOV R2) + OUTER_VAL * (1 (MOV R1) + MIDDLE_VAL * (1 (MOV R0) + INNER_VAL * 2 + 2 (DJNZ R1)) + 2 (DJNZ R2))`

This is becoming complex. A simpler way to think about it is:
Each `DJNZ Rn, label` when it jumps, takes 2 MC.
When it doesn't jump (becomes zero), it takes 1 MC.

The total number of times `DJNZ R0, LOOP_INNER` executes and jumps is `INNER_VAL`.
The total number of times `DJNZ R1, LOOP_MIDDLE` executes and jumps is `MIDDLE_VAL`.
The total number of times `DJNZ R2, LOOP_OUTER` executes and jumps is `OUTER_VAL`.

**Let's reconsider the calculation based on the loop structure:**

```assembly
; Delay routine for ~1 second using 11.0592 MHz crystal
; Target MC = 11,059,200

; Try a 3-level nested loop with values around 250 for each register.
; A register can hold values from 1 to 256 (using FF).

; INNER LOOP:
; DJNZ R0, LOOP_INNER  ; 2 MC per iteration. Let R0 = 256 (00)
; Total iterations = 256
; MC for DJNZ R0 = 256 * 2 = 512 MC

; MIDDLE LOOP:
; DJNZ R1, LOOP_MIDDLE ; 2 MC per iteration. Let R1 = 256 (00)
; This loop executes the inner loop 256 times.
; MC for DJNZ R1 = 256 * 2 = 512 MC
; Total MC for the middle loop structure = 256 * (MC for inner loop processing)
; MC for processing inner loop = (256 * 2 MC for DJNZ R0) = 512 MC.
; So, MC for one iteration of middle loop = 512 MC.
; Total MC for middle loop = 256 * 512 = 131072 MC.

; OUTER LOOP:
; DJNZ R2, LOOP_OUTER  ; 2 MC per iteration. Let R2 = 256 (00)
; This loop executes the middle loop 256 times.
; Total MC for outer loop structure = 256 * (MC for middle loop processing)
; MC for processing middle loop = 256 * 512 = 131072 MC.
; Total MC for outer loop = 256 * 131072 = 33554432 MC.

; This is still too high. The mistake is in how we're counting.

```

**Corrected Calculation for Nested Loops:**

Let's analyze a typical nested delay subroutine:

```assembly
DELAY:
    MOV R7, #4         ; Outer loop counter. Let's say 4 iterations. (1 MC)
LOOP1:
    MOV R6, #255       ; Middle loop counter. Let's say 255 iterations. (1 MC)
LOOP2:
    MOV R5, #255       ; Inner loop counter. Let's say 255 iterations. (1 MC)
LOOP3:
    DJNZ R5, LOOP3     ; 2 MC * 255 iterations = 510 MC
    DJNZ R6, LOOP2     ; 2 MC * 255 iterations = 510 MC
    DJNZ R7, LOOP1     ; 2 MC * 4 iterations = 8 MC
    RET                ; 2 MC
```

**Total Machine Cycles:**
*   `MOV R7, #4` : 1 MC
*   `LOOP1:` : Start of outer loop
    *   `MOV R6, #255` : 1 MC
    *   `LOOP2:` : Start of middle loop
        *   `MOV R5, #255` : 1 MC
        *   `LOOP3:` : Start of inner loop
            *   `DJNZ R5, LOOP3` : 2 MC. This executes 255 times. So, `255 * 2 = 510 MC`.
        *   End of inner loop.
        *   `DJNZ R6, LOOP2` : 2 MC. This executes 255 times (for each outer loop iteration). So, `255 * 2 = 510 MC`.
    *   End of middle loop.
    *   `DJNZ R7, LOOP1` : 2 MC. This executes 4 times. So, `4 * 2 = 8 MC`.
*   End of outer loop.
*   `RET` : 2 MC

**Total MC =** 1 (MOV R7)
+ 4 * ( 1 (MOV R6) + 255 * (1 (MOV R5) + 255 * 2 (DJNZ R5) + 2 (DJNZ R6)) ) + 2 (RET)
This is incorrect. The structure is that the inner loop is fully executed within the middle loop.

**Corrected Calculation for Nested Loops (from Ayala's Book - Chapter 4, Section 4.2.1):**

Let's consider a standard nested loop structure:

```assembly
; Assuming 12MHz Crystal, 1 Machine Cycle = 12 Clock Cycles
; 1 Machine Cycle = 1 Microsecond
; To delay 1ms, we need 1000 machine cycles.

; Delay for approximately 1 ms
; Our delay routine will consume some initial cycles (MOV instructions)
; and then the loops.

MY_DELAY:
    MOV R0, #250        ; 1 MC
LOOP_DELAY:
    DJNZ R0, LOOP_DELAY ; 2 MC per iteration. Executes 250 times.
                        ; Total MC = 250 * 2 = 500 MC.
    RET                 ; 2 MC

; Total MC = 1 (MOV R0) + 500 (LOOP_DELAY) + 2 (RET) = 503 MC.
; Delay = 503 MC * 1us/MC = 0.503 ms. Close to 1 ms.

; For 1 ms exactly:
; Target MC = 1000
; Let's use DJNZ R0, LOOP_DELAY (2 MC)
; We need 1000 MC.
; If we subtract the initial MOV R0 (1 MC) and RET (2 MC), we need 997 MC for the loop.
; 997 MC / 2 MC/iter = 498.5 iterations. Not possible with integer.

; Let's try to get close to 1ms. If we use R0 = 250.
; MOV R0, #250 : 1 MC
; LOOP: DJNZ R0, LOOP : 250 * 2 MC = 500 MC
; Total MC = 1 + 500 = 501 MC.
; Delay = 501 MC * 1 us/MC = 0.501 ms.

; Using nested loops to reach a specific delay.
; Target Delay: 1 second (1,000,000 us) with 12MHz crystal.
; Target Machine Cycles: 1,000,000 MC.

; Consider a 3-level loop
; LOOP3: DJNZ R0, LOOP3 ; 2 MC
; LOOP2: DJNZ R1, LOOP2 ; 2 MC
; LOOP1: DJNZ R2, LOOP1 ; 2 MC

; Let's set the loop counts. We can load a register with FF (256).
; If R0 = 256, LOOP3 takes 256 * 2 = 512 MC.
; If R1 = 256, LOOP2 takes 256 * (MC for inner part).
; MC for inner part = 1 (MOV R0) + 512 (DJNZ R0) = 513 MC.
; LOOP2 takes 256 * (513) = 131328 MC.

; If R2 = 256, LOOP1 takes 256 * (MC for middle part).
; MC for middle part = 1 (MOV R1) + 131328 (LOOP2) = 131329 MC.
; LOOP1 takes 256 * (131329) = 33620224 MC.

; This is still too high. The standard way to calculate is to sum up the loop iterations.
; The total number of times the innermost instruction (DJNZ R0, LOOP3) executes is:
; INNER_ITERATIONS * MIDDLE_ITERATIONS * OUTER_ITERATIONS

; Let INNER_ITERATIONS = 256 (from R0 = 256)
; Let MIDDLE_ITERATIONS = 256 (from R1 = 256)
; Let OUTER_ITERATIONS = 256 (from R2 = 256)

; Total number of DJNZ R0 executions = 256 * 256 * 256 = 16777216.
; Each DJNZ R0 takes 2 MC. So, 16777216 * 2 = 33554432 MC.

; This calculation is missing the overhead of the outer DJNZ instructions.

; Let's use a known formula from textbooks for the MC count of a 3-level loop:
; MC = (INNER_COUNT + 1) * (MIDDLE_COUNT + 1) * (OUTER_COUNT + 1) * 2 - X
; Where X is a correction factor for the last jump.

; A more direct way:
; Consider the loop structure:
; LOOP_OUTER:
;   LOOP_MIDDLE:
;     LOOP_INNER:
;       DJNZ R0, LOOP_INNER
;     DJNZ R1, LOOP_MIDDLE
;   DJNZ R2, LOOP_OUTER

; Let's count the total number of times the "jump taken" occurs for the DJNZ instructions.
; DJNZ R0 jumps INNER_VAL times. Takes 2 MC per jump. Total: INNER_VAL * 2 MC.
; DJNZ R1 jumps MIDDLE_VAL times. Takes 2 MC per jump. Total: MIDDLE_VAL * 2 MC.
; DJNZ R2 jumps OUTER_VAL times. Takes 2 MC per jump. Total: OUTER_VAL * 2 MC.

; The total MC for a simple 3-nested loop structure (excluding the MOV instructions):
; Total MC = (INNER_VAL * 2) + (MIDDLE_VAL * (INNER_VAL * 2 + 2)) + (OUTER_VAL * (MIDDLE_VAL * (INNER_VAL * 2 + 2) + 2))
; This is getting complicated.

; Let's use the commonly cited formula for a 3-level loop:
; Total MC = (C1 * 2 + 1) * (C2 * 2 + 1) * (C3 * 2 + 1) - OVERHEAD
; Where C1, C2, C3 are the loop counts.
; The '+1' comes from the final jump not taken, and the '2' from DJNZ.

; Let's simplify the structure:
; LOOP1:
;   MOV R0, #X
; LOOP2:
;   DJNZ R0, LOOP2
;   DJNZ R1, LOOP1

; Number of cycles = (X * 2) + 2  (for the DJNZ R0 loop) + 2 (for the DJNZ R1)
; No, this is not correct either.

; Let's go back to the fundamental:
; LOOP_INNER: DJNZ R0, LOOP_INNER (2 MC)
; This loop runs R0 times. Total MC for loop is R0 * 2.

; Consider the subroutine:
; DELAY:
;   MOV R7, #N2  ; N2 iterations of outer loop (1 MC)
;   MOV R6, #N1  ; N1 iterations of middle loop (1 MC)
;   MOV R5, #N0  ; N0 iterations of inner loop (1 MC)
; LOOP3:
;   DJNZ R5, LOOP3 ; 2 MC * N0 iterations = 2*N0 MC
;   DJNZ R6, LOOP2 ; 2 MC * N1 iterations = 2*N1 MC
;   DJNZ R7, LOOP1 ; 2 MC * N2 iterations = 2*N2 MC
;   RET          ; 2 MC

; Total MC = 1(MOV R7) + 1(MOV R6) + 1(MOV R5)
;          + N0 * 2 (DJNZ R5)
;          + N1 * (2 + N0 * 2)  <- This is where it gets tricky.
; The DJNZ R6 executes N1 times, and each time it encounters the inner loop.

; Let's re-evaluate based on the total number of times a specific instruction executes.

; Total MC = (Number of times outer loop iterates * MC per middle loop)
;          + (Number of times middle loop iterates * MC per inner loop)
;          + (Number of times inner loop iterates * MC for innermost instruction)

; Structure:
; LOOP_OUTER:
;   LOOP_MIDDLE:
;     LOOP_INNER:
;       DJNZ R0, LOOP_INNER   ; 2 MC
;     DJNZ R1, LOOP_MIDDLE    ; 2 MC
;   DJNZ R2, LOOP_OUTER     ; 2 MC

; Total MC for the loop body (excluding MOV instructions) =
; N2 * [ N1 * ( N0 * 2 + 2 ) + 2 ] + 2 (for the final DJNZ R2)

; Let N0 = 256, N1 = 256, N2 = 256. (Using FF for the count)
; MC for innermost loop = 256 * 2 = 512 MC.

; MC for one iteration of middle loop (DJNZ R1) = 2 MC + MC for inner loop.
; MC for one iteration of middle loop = 2 + (256 * 2) = 2 + 512 = 514 MC.
; Total MC for middle loop = 256 * 514 = 131584 MC.

; MC for one iteration of outer loop (DJNZ R2) = 2 MC + MC for middle loop.
; MC for one iteration of outer loop = 2 + 131584 = 131586 MC.
; Total MC for outer loop = 256 * 131586 = 33684736 MC.

; This is still too high. The most standard and simplified approach:

; Total MC = (N0 * 2) + (N1 * (N0 * 2 + 2)) + (N2 * (N1 * (N0 * 2 + 2) + 2))
; This formula counts the DJNZ instructions.

; Let's use the formula for a delay subroutine from Kenneth Ayala's "The 8051 Microcontroller" (Chapter 4):
; The number of machine cycles for a loop of the form:
; LOOP: DJNZ RC, LOOP is 2 * RC + 1 (The +1 is for the final jump not taken).

; Consider a 3-level loop:
; DELAY:
;   MOV R7, #N2
; LOOP1:
;   MOV R6, #N1
; LOOP2:
;   MOV R4, #N0
; LOOP3:
;   DJNZ R4, LOOP3     ; (N0 * 2 + 1) MC
;   DJNZ R6, LOOP2     ; (N1 * 2 + 1) MC
;   DJNZ R7, LOOP1     ; (N2 * 2 + 1) MC
;   RET                ; 2 MC

; Total MC = 1 (MOV R7) + 1 (MOV R6) + 1 (MOV R4)
;          + N2 * [ 1 (MOV R6) + N1 * ( 1 (MOV R4) + (N0 * 2 + 1) + 2 ) + 2 ] + 2 (RET)
; Still not the right way to think.

; Let's simplify:
; The innermost instruction `DJNZ R4, LOOP3` is executed `N0` times. Each takes 2 MC.
; Total MC for this inner loop = `N0 * 2`.

; The `DJNZ R6, LOOP2` instruction is executed `N1` times. Each takes 2 MC.
; Each time it executes, it also has to "pay" for the inner loop (`N0 * 2` MC).
; So, for each middle loop iteration, it's `2 (DJNZ R6) + (N0 * 2)`.
; Total MC for the middle loop = `N1 * (2 + N0 * 2)`.

; The `DJNZ R7, LOOP1` instruction is executed `N2` times. Each takes 2 MC.
; Each time it executes, it has to "pay" for the middle loop (`N1 * (2 + N0 * 2)` MC).
; So, for each outer loop iteration, it's `2 (DJNZ R7) + N1 * (2 + N0 * 2)`.
; Total MC for the outer loop = `N2 * (2 + N1 * (2 + N0 * 2))`.

; Total MC = 1(MOV R7) + 1(MOV R6) + 1(MOV R5) + N2 * (2 + N1 * (2 + N0 * 2)) + 2(RET)

; Let's use the typical structure often seen in examples, which simplifies calculation:
; DELAY:
;   MOV R7, #N2
; LOOP1:
;   MOV R6, #N1
; LOOP2:
;   MOV R5, #N0
; LOOP3:
;   DJNZ R5, LOOP3
;   DJNZ R6, LOOP2
;   DJNZ R7, LOOP1
;   RET

; Total MC = N2 * (N1 * (N0 * 2 + 2) + 2) + 2  (This is a simplified version)
; Where N0, N1, N2 are the *decrement* counts (e.g., if we load 255, it decrements 255 times).

; Let's try to achieve 1 second (1,000,000 MC) with 12MHz crystal (1 MC = 1 us).
; We need approximately 1,000,000 MC.

; Let N0 = 255, N1 = 255, N2 = 255.
; MC = 255 * (255 * (255 * 2 + 2) + 2) + 2
; MC = 255 * (255 * (510 + 2) + 2) + 2
; MC = 255 * (255 * 512 + 2) + 2
; MC = 255 * (130560 + 2) + 2
; MC = 255 * 130562 + 2
; MC = 33300330 + 2 = 33300332 MC. Still too high.

; The values of N0, N1, N2 need to be smaller.

; Try N0 = 10, N1 = 10, N2 = 10.
; MC = 10 * (10 * (10 * 2 + 2) + 2) + 2
; MC = 10 * (10 * (20 + 2) + 2) + 2
; MC = 10 * (10 * 22 + 2) + 2
; MC = 10 * (220 + 2) + 2
; MC = 10 * 222 + 2
; MC = 2220 + 2 = 2222 MC.

; If we want ~1,000,000 MC, we need larger N values.
; If we use N0=255, N1=255, N2=?, then MC ~ N2 * 130562.
; N2 * 130562 ~ 1,000,000
; N2 ~ 1000000 / 130562 ~ 7.66.
; So, N2 around 7 or 8. Let's try N2=8.

; MC = 8 * (255 * (255 * 2 + 2) + 2) + 2
; MC = 8 * 130562 + 2
; MC = 1044496 + 2 = 1044498 MC. This is very close to 1 second.

; So, for a 1-second delay with 12MHz crystal:
; N0 = 255, N1 = 255, N2 = 8.

```assembly
;------------------------------------------------------------
; DELAY SUBROUTINE FOR ~1 SECOND DELAY
; Crystal Frequency: 12 MHz
; Machine Cycle: 1 us
; Target Delay: 1 second (1,000,000 us)
;------------------------------------------------------------
DELAY_1SEC:
    MOV R7, #8          ; Outer loop count (N2 = 8) ; 1 MC
LOOP1:
    MOV R6, #255        ; Middle loop count (N1 = 255) ; 1 MC
LOOP2:
    MOV R5, #255        ; Inner loop count (N0 = 255) ; 1 MC
LOOP3:
    DJNZ R5, LOOP3      ; 2 MC * 255 iterations = 510 MC
    DJNZ R6, LOOP2      ; 2 MC * 255 iterations = 510 MC
    DJNZ R7, LOOP1      ; 2 MC * 8 iterations = 16 MC
    RET                 ; 2 MC

; Total MC = 1 (MOV R7) + 8 * (1 (MOV R6) + 255 * (1 (MOV R5) + 255 * 2 (DJNZ R5) + 2 (DJNZ R6))) + 2 (RET)
; This is not how it accumulates.

; Using the formula Total MC = N2 * (N1 * (N0 * 2 + 2) + 2) + 2
; N0 = 255, N1 = 255, N2 = 8
; Total MC = 8 * (255 * (255 * 2 + 2) + 2) + 2
; Total MC = 8 * (255 * (510 + 2) + 2) + 2
; Total MC = 8 * (255 * 512 + 2) + 2
; Total MC = 8 * (130560 + 2) + 2
; Total MC = 8 * 130562 + 2
; Total MC = 1044496 + 2 = 1044498 MC

; Delay = 1044498 MC * 1 us/MC = 1044498 us = ~1.044 seconds.
; This is a very good approximation.
```

### 3. Using Timer/Counter Modules (More Advanced)

While ALP can directly implement delays, using the built-in timer/counter modules of the 8051 offers more accuracy and frees up the CPU for other tasks. This is a more advanced technique usually covered in later modules or when using C. However, understanding that timers exist for precise timing is important. Timers can be configured to generate interrupts after a specific period, and the CPU can continue executing other code while the timer counts down.

### 4. Using the `SJMP` and `ACALL`/`LCALL` Instruction Cycles

Some very short delays can be achieved by simply using the instruction cycles of jump or call instructions. However, these are usually not precise enough for significant delays.

**Example of very short delay:**
```assembly
    NOP         ; 1 MC
    NOP         ; 1 MC
    SJMP SHORT_DELAY ; 2 MC
    ; Some instructions here
SHORT_DELAY:
    NOP         ; 1 MC
    RET         ; 2 MC
```
Total MC = 1 + 1 + 2 + 1 + 2 = 7 MC.
This is a very small delay, usually not what is meant by "delay generation" in a practical sense.

## Calculating Delay Times

To calculate the delay for a given ALP routine, follow these steps:

1.  **Determine the Crystal Frequency:** This is usually provided (e.g., 11.0592 MHz, 12 MHz).
2.  **Calculate Machine Cycle Time:** For 8051, Machine Cycle = Crystal Frequency / 12.
    *   If Crystal = 12 MHz, MC Time = 12 MHz / 12 = 1 MHz = 1 µs.
    *   If Crystal = 11.0592 MHz, MC Time = 11.0592 MHz / 12 = 921.6 KHz = 1.085 µs.
3.  **Count Machine Cycles for Each Instruction:** Refer to an 8051 instruction set table. For basic `MOV`, `ADD`, `DJNZ` (when jumping), etc., it's usually 1 MC. `DJNZ` (when not jumping) is 1 MC. `RET`, `CALL` are typically 2 MC. `MUL`, `DIV` are higher (4 MC).
4.  **Sum the Machine Cycles for the Entire Delay Routine:** Be careful with loops. `DJNZ RC, LABEL` takes 2 MC per iteration if the jump is taken.
5.  **Calculate Total Delay:** Total Delay (in seconds) = Total Machine Cycles * Machine Cycle Time.

## ALP Program Structure for Delay

A typical ALP program for delay generation will involve:

*   **Initialization:** Setting up I/O ports if you're blinking an LED or interacting with hardware.
*   **Delay Subroutine:** A procedure (`PROC`/`ENDP` or using `CALL`/`RET`) that contains the delay logic.
*   **Main Program Loop:** Calling the delay subroutine repeatedly or using it within a larger program flow.

### Example ALP Program: Blinking an LED with a Delay

Let's say we want to blink an LED connected to Port P1.0 every 500 ms.
Crystal Frequency = 12 MHz (1 MC = 1 µs).
Target Delay = 500 ms = 500,000 µs.
Target Machine Cycles = 500,000 MC.

We can use a single loop with a large count, or nested loops. A single loop with `DJNZ R0, LOOP` takes `N * 2` MC (plus initial `MOV`). The max value for a register is 255 (FF). This provides a maximum of 255 * 2 = 510 MC. This is too small for 500 ms.

We need nested loops. Let's use a 2-level nested loop.
Total MC ≈ `N1 * (N0 * 2 + 2) + 2`.

Let's try `N0 = 255`. Inner loop MC = 255 * 2 = 510 MC.
We need `N1 * (510 + 2)` to be around 500,000.
`N1 * 512` ≈ 500,000
`N1` ≈ 500000 / 512 ≈ 976.
This means we need a loop count higher than 255, which requires a 3-level loop.

Let's use `N0 = 255`, `N1 = 255`.
Inner loop part `N0 * 2 = 510` MC.
Middle loop part `N1 * (N0 * 2 + 2) = 255 * (510 + 2) = 255 * 512 = 130560` MC.
We need `N2 * (130560 + 2)` ≈ 500,000.
`N2 * 130562` ≈ 500,000
`N2` ≈ 500000 / 130562 ≈ 3.83.
So, `N2 = 4`.

For 500 ms delay: `N0 = 255`, `N1 = 255`, `N2 = 4`.

```assembly
ORG 0000H

; Initialize Stack Pointer (optional for simple delay, but good practice)
MOV SP, #60H

MAIN:
    MOV P1, #00H      ; Turn off Port 1 initially (optional)

LOOP_FOREVER:
    SETB P1.0         ; Turn ON LED connected to P1.0 ; 1 MC
    ACALL DELAY_500MS ; Call the delay subroutine
    CLR P1.0          ; Turn OFF LED connected to P1.0 ; 1 MC
    ACALL DELAY_500MS ; Call the delay subroutine
    SJMP LOOP_FOREVER ; Jump back to loop

;------------------------------------------------------------
; DELAY SUBROUTINE FOR ~500 MS DELAY
; Crystal Frequency: 12 MHz (1 Machine Cycle = 1 us)
; Target Delay: 500 ms (500,000 us)
;------------------------------------------------------------
DELAY_500MS:
    MOV R7, #4          ; Outer loop count (N2 = 4) ; 1 MC
LOOP1:
    MOV R6, #255        ; Middle loop count (N1 = 255) ; 1 MC
LOOP2:
    MOV R5, #255        ; Inner loop count (N0 = 255) ; 1 MC
LOOP3:
    DJNZ R5, LOOP3      ; 2 MC * 255 iterations = 510 MC
    DJNZ R6, LOOP2      ; 2 MC * 255 iterations = 510 MC
    DJNZ R7, LOOP1      ; 2 MC * 4 iterations = 8 MC
    RET                 ; 2 MC

; Total MC = 4 * (255 * (255 * 2 + 2) + 2) + 2
; Total MC = 4 * (255 * 512 + 2) + 2
; Total MC = 4 * (130560 + 2) + 2
; Total MC = 4 * 130562 + 2
; Total MC = 522248 + 2 = 522250 MC.
; Delay = 522250 MC * 1 us/MC = 522.25 ms.
; This is close enough to 500 ms.

END
```

## Debugging Delay Routines

*   **Simulators:** Use a microcontroller simulator (like Keil uVision, Proteus) to run your ALP code. You can step through the code and observe the execution time in terms of clock cycles or machine cycles.
*   **Oscilloscope/Logic Analyzer:** For hardware implementation, connect an oscilloscope or logic analyzer to an output pin and toggle the pin within your delay routine. Measure the pulse width to verify the delay.
*   **Careful Calculation:** Double-check your machine cycle calculations. Small errors can lead to significant deviations in delay time.
*   **Register Usage:** Ensure that registers used for delays are not corrupted by other parts of your program if the delay routine is not a separate subroutine.

## Important Points to Remember

*   **Crystal Frequency is Key:** Always know your microcontroller's crystal frequency for accurate delay calculations.
*   **Machine Cycle Timing:** Understand that for 8051, 1 MC = 12 Clock Cycles.
*   **`DJNZ` Instruction:** This is the workhorse for creating delays using registers. Remember it takes 2 MC when jumping and 1 MC when the jump is not taken.
*   **Nested Loops:** Essential for generating longer delays than a single register can provide.
*   **Subroutines (`ACALL`/`LCALL` and `RET`):** Use subroutines to make your code modular and reusable. Remember they have their own execution cycle costs (typically 2 MC).
*   **`NOP` Instruction:** Consumes 1 machine cycle and does nothing. Can be used to fine-tune delays or as placeholders.
*   **Accuracy:** ALP delays are inherently dependent on the clock speed and instruction timings. For very critical timing, timer modules are preferred.

## Practice Questions and Exercises

**Q1.** Calculate the time taken for the following 8051 ALP code snippet to execute, assuming an 11.0592 MHz crystal.

```assembly
    MOV R0, #100
LOOP:
    DJNZ R0, LOOP
```

**Answer:**
*   Crystal Frequency = 11.0592 MHz
*   Machine Cycle Time = 11.0592 MHz / 12 = 0.9216 µs
*   `MOV R0, #100` : 1 MC
*   `LOOP:` : Label
*   `DJNZ R0, LOOP` : 2 MC per iteration. This loop runs 100 times.
*   Total MC for loop = 100 * 2 = 200 MC.
*   Total MC for snippet = 1 (MOV R0) + 200 (DJNZ loop) = 201 MC.
*   Total Delay = 201 MC * 0.9216 µs/MC = 185.2416 µs.

**Q2.** Design an ALP subroutine for the 8051 that creates a delay of approximately 10 ms using a 12 MHz crystal.

**Answer:**
*   Crystal Frequency = 12 MHz
*   Machine Cycle Time = 12 MHz / 12 = 1 µs
*   Target Delay = 10 ms = 10,000 µs
*   Target Machine Cycles = 10,000 MC

Let's use a 2-level nested loop.
Formula: Total MC ≈ `N1 * (N0 * 2 + 2) + 2`.

Try `N0 = 255`. Inner loop MC = 255 * 2 = 510 MC.
We need `N1 * (510 + 2)` ≈ 10,000.
`N1 * 512` ≈ 10,000
`N1` ≈ 10000 / 512 ≈ 19.5.
So, `N1` can be 19 or 20. Let's use `N1 = 20`.

```assembly
; DELAY_10MS SUBROUTINE
; Crystal: 12 MHz
DELAY_10MS:
    MOV R1, #20         ; Outer loop count (N1 = 20) ; 1 MC
LOOP1:
    MOV R0, #255        ; Inner loop count (N0 = 255) ; 1 MC
LOOP2:
    DJNZ R0, LOOP2      ; 2 MC * 255 iterations = 510 MC
    DJNZ R1, LOOP1      ; 2 MC * 20 iterations = 40 MC
    RET                 ; 2 MC

; Total MC = 1 (MOV R1) + 20 * (1 (MOV R0) + 255 * 2 (DJNZ R0) + 2 (DJNZ R1)) + 2 (RET)
; This accumulation is tricky. Let's use the formula again:
; Total MC = N1 * (N0 * 2 + 2) + 2
; N0 = 255, N1 = 20
; Total MC = 20 * (255 * 2 + 2) + 2
; Total MC = 20 * (510 + 2) + 2
; Total MC = 20 * 512 + 2
; Total MC = 10240 + 2 = 10242 MC.
; Delay = 10242 MC * 1 us/MC = 10242 µs = 10.242 ms.
; This is a good approximation for 10 ms.
```

**Q3.** What is the primary purpose of the `DJNZ` instruction in delay generation?
**Answer:** The `DJNZ` (Decrement and Jump if Not Zero) instruction is crucial because it allows a register to be used as a counter. It decrements the register's value and, if the value is not zero, jumps to a specified label. This forms the basis of loops, and by controlling the initial value of the register and the number of loop iterations, we can create time delays.

**Q4.** If you need to create a delay longer than what a single 8-bit register can provide (max 255 iterations), what technique would you employ?
**Answer:** Nested loops, where one loop counter controls the number of times another delay loop is executed. This can be extended to multiple levels of nesting (e.g., 3 or 4 levels) to achieve very long delays.

**Q5.** List at least two factors that affect the accuracy of an ALP-generated delay.
**Answer:**
1.  **Crystal Frequency:** Variations in the crystal frequency will directly impact the delay time.
2.  **Instruction Execution Time:** The precise number of machine cycles for each instruction (including the `DJNZ` jump and non-jump cases, `CALL`, `RET`, etc.) must be accurately accounted for.
3.  **Interrupts:** If interrupts are enabled and occur during the delay routine, they will add to the execution time, potentially making the delay longer than calculated.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


## References

*   **The 8051 Microcontroller by Kenneth Ayala:** This textbook provides clear explanations of instruction timings and demonstrates delay loop implementations with detailed calculations (Chapter 4).
*   **Microprocessors and Microcontrollers by R. Lyla B. Das:** Offers a foundational understanding of microcontroller architecture and programming, including sections on timing and delays.
*   **The 8051 Microcontroller by I. Scott MacKenzie, Raphael C.-W. Phan:** Likely covers instruction set details and timing aspects relevant to delay generation.
*   **The 8051 Microcontroller and Embedded Systems by Muhammad Ali Mazidi:** A comprehensive resource that typically includes detailed discussions on 8051 instruction timings, addressing modes, and practical examples of delay routines.

These notes aim to cover the core concepts of ALP delay generation for the 8051, aligning with the learning and course outcomes by explaining the "how" and "why" behind these essential embedded system techniques.