---
title: "Comparing square and cube of 16 bit numbers."
subject: "MICROPROCESSORS AND EMBEDDED SYSTEMS LAB"
module: "Module 1: Data transfer: Block data movement"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f364ea"
status: "completed"
scrapedAt: "2026-05-23T16:23:04.179Z"
---
# MICROPROCESSORS AND EMBEDDED SYSTEMS LAB

## Module 1: Data Transfer: Block Data Movement

## Topic: Comparing Square and Cube of 16-bit Numbers

**1. Introduction**

This topic focuses on a practical application of data transfer and arithmetic operations within the context of microprocessors and embedded systems. We will explore how to calculate the square and cube of 16-bit numbers and then compare these results. This exercise helps in understanding:

*   **Data Handling:** Moving and manipulating data of a specific bit-width (16-bit).
*   **Arithmetic Operations:** Performing multiplication for squaring and cubing.
*   **Conditional Logic:** Comparing results and branching based on the comparison.
*   **Algorithmic Thinking:** Developing a step-by-step procedure for solving the problem.

**2. Learning Outcomes**

Upon successful completion of this topic, you will be able to:

*   Understand the process of calculating the square and cube of 16-bit numbers.
*   Implement algorithms for squaring and cubing using assembly language and/or embedded C.
*   Utilize data transfer instructions for moving 16-bit values.
*   Employ arithmetic instructions for multiplication.
*   Implement conditional branching instructions for comparison.
*   Analyze the results of the calculations and make decisions based on them.
*   (Implicitly) Relate these operations to broader embedded system functionalities involving data processing and decision-making.

**3. Key Concepts and Definitions**

*   **16-bit Number:** A number that can be represented using 16 binary digits. This allows for a larger range of values compared to 8-bit numbers. In the context of the 8051, 16-bit operations often involve using two 8-bit registers or dedicated 16-bit registers (like DPTR).
*   **Square of a Number (n²):** The result of multiplying a number by itself (n * n).
*   **Cube of a Number (n³):** The result of multiplying a number by itself three times (n * n * n).
*   **Data Transfer Instructions:** Instructions used to move data between registers, memory locations, and I/O ports. Examples include `MOV`, `MOVX`, `PUSH`, `POP`.
*   **Arithmetic Instructions:** Instructions used to perform mathematical calculations. For squaring and cubing, `MUL` (multiply) is crucial.
*   **Comparison Instructions:** Instructions used to compare two values, typically setting flags in the status register (e.g., `CJNE`, `JC`, `JNC`, `JZ`, `JNZ`).
*   **Branching/Jumping Instructions:** Instructions that alter the normal sequential execution flow based on the status of flags or specific conditions. Examples include `JMP`, `SJMP`, `LJMP`, `AJMP`, `DJNZ`, `JZ`, `JNZ`.
*   **Accumulator (A):** A primary register in microprocessors used for arithmetic and logical operations.
*   **Register Pairs:** In architectures like the 8051, two 8-bit registers can be combined to form a 16-bit register (e.g., R0 and R1 forming the R0R1 pair).

**4. Algorithms for Squaring and Cubing**

### 4.1. Squaring a 16-bit Number (n * n)

To square a 16-bit number, we need to perform a multiplication.

**Algorithm:**

1.  **Load the 16-bit number:** Store the number in a suitable location (e.g., two consecutive memory bytes or a register pair). Let's assume it's stored in `R0R1` (where `R0` is the high byte and `R1` is the low byte).
2.  **Prepare for multiplication:** The `MUL` instruction in the 8051 typically multiplies the Accumulator (A) with another register or memory location. For 16-bit multiplication, the process is more involved. A common approach for 16x16 multiplication is to break it down into several 8x8 multiplications.

    *   **Simplified approach (if the result fits in 16 bits):** If we are confident the square of our 16-bit number will fit within 16 bits, we can use a simplified approach. However, for a full 16x16 multiplication resulting in a 32-bit product, we need a more robust algorithm. Let's consider the 8051's `MUL AB` instruction which multiplies 8-bit A with 8-bit B, resulting in a 16-bit product in `AB`.

    *   **Full 16x16 Multiplication (yielding 32 bits):**
        Let the 16-bit number be `N = N_high * 256 + N_low`.
        We want to calculate `N * N`.
        `N * N = (N_high * 256 + N_low) * (N_high * 256 + N_low)`
        `N * N = (N_high * 256 * N_high * 256) + (N_high * 256 * N_low) + (N_low * N_high * 256) + (N_low * N_low)`

        This can be broken down into 8-bit multiplications and additions:
        *   `Temp1 = N_low * N_low` (16-bit result)
        *   `Temp2 = N_low * N_high` (16-bit result)
        *   `Temp3 = N_high * N_low` (16-bit result)
        *   `Temp4 = N_high * N_high` (16-bit result)

        The final result would be a combination of these, requiring careful addition and handling of carries.

    *   **For this lab topic, let's assume we are working with a scenario where the multiplication is simpler, or we're using a higher-level language where built-in functions handle it.** If we're strictly using the 8051's `MUL AB`, and we want to square a 16-bit number `R0R1`, we'd have to do something like:
        *   Load `R1` (low byte) into `A`.
        *   Multiply `A` by `R1` (using `MUL AB` if `B` is `R1`, or by moving `R1` to `B`). Result in `AB`. Store `AB` as `Square_low`.
        *   Load `R0` (high byte) into `A`.
        *   Multiply `A` by `R1`. Result in `AB`. This is part of the cross-product term. Add this to `Square_low` with carry.
        *   Load `R1` into `A`.
        *   Multiply `A` by `R0`. Result in `AB`. Add this to the previous result with carry.
        *   Load `R0` into `A`.
        *   Multiply `A` by `R0`. Result in `AB`. This is `N_high * N_high * 256 * 256`, which will likely overflow a 16-bit register.

        **Due to the complexity of 16x16 multiplication for a 32-bit result using only 8-bit operations on the 8051, often for lab exercises, either the numbers are smaller, or a library function is used, or the focus is on demonstrating data movement and basic multiplication of two 8-bit numbers.**

        **Let's simplify for the lab context and assume we're squaring an 8-bit number for demonstration, or using a C compiler for 16-bit operations.**

### 4.2. Cubing a 16-bit Number (n * n * n)

Cubing involves two multiplication steps:
1.  Calculate the square: `n * n`.
2.  Multiply the square by the original number: `(n * n) * n`.

**Algorithm:**

1.  **Load the 16-bit number (n).**
2.  **Calculate the square of n (n²):** Follow the squaring algorithm described above. Store the result (let's call it `Square_result`).
3.  **Multiply Square_result by n:**
    *   Load the appropriate part of `Square_result` into the accumulator.
    *   Load the appropriate part of `n` into another register.
    *   Perform multiplication.
    *   Handle carries and additions to form the final 24-bit or 32-bit cube result.

**Example Scenario (Simplified for 8-bit for clarity on 8051):**

Let's say we want to square and cube the 8-bit number `05H`.

*   **Number (n):** `05H`
*   **Square (n²):** `05H * 05H = 19H`
*   **Cube (n³):** `19H * 05H = 79H`

**Assembly Example (8-bit multiplication using 8051 MUL AB):**

```assembly
; Assume number to be squared is in R0 (8-bit)
MOV A, R0      ; Load the number into Accumulator
MOV B, R0      ; Load the number into Register B
MUL AB         ; Multiply A by B. Result is in AB (16-bit)
               ; A holds the MSB, B holds the LSB of the square
; Store the square in memory if needed

; Now to cube it, we need to multiply the square (AB) by R0 again.
; This requires more complex 16x8 multiplication logic or a library.

; For demonstration purposes, let's just show the squaring of 8-bit.
; Suppose we want to compare n and n^2 for 8-bit n.

ORG 0000H
START:
    MOV R0, #05H        ; Load number 05H into R0
    MOV A, R0           ; Load number into Accumulator
    MOV B, R0           ; Load number into B
    MUL AB              ; Square the number (result in AB)

    ; Now we have the square in AB. Let's compare R0 with the LSB of the square (B)
    ; This comparison is trivial (05H vs 05H), but demonstrates the concept.
    CJNE A, #00H, IS_NOT_ZERO  ; Check if MSB of square is zero
    SJMP COMPARE_LSB          ; If MSB is zero, compare LSB

COMPARE_LSB:
    CJNE B, R0, NOT_EQUAL     ; Compare LSB of square with original number
    SJMP EQUAL_SQUARE_ORIGINAL

NOT_EQUAL:
    ; Handle case where square's LSB is not equal to original number
    ; e.g., jump to a routine to indicate "square not equal to original"
    SJMP END_PROG

EQUAL_SQUARE_ORIGINAL:
    ; Handle case where square's LSB is equal to original number
    ; e.g., jump to a routine to indicate "square equals original"
    SJMP END_PROG

IS_NOT_ZERO:
    ; Handle case where square's MSB is not zero (result is > 255)
    ; e.g., jump to a routine to indicate "square is larger"
    SJMP END_PROG

END_PROG:
    SJMP END_PROG       ; Infinite loop

END
```

**Referencing Textbooks:**

*   **Kenneth Ayala's "The 8051 Microcontroller":** Chapter 5 (Instruction Set) will detail `MUL AB` and other arithmetic/data transfer instructions. It might also discuss techniques for handling multi-byte arithmetic.
*   **R. Lyla B. Das's "Microprocessors and Microcontrollers":** This book will likely cover the architecture of microprocessors like the 8051, including register usage and arithmetic operations. It may also provide examples of basic algorithms.

**3.3. Comparing the Square and Cube**

1.  **Calculate Square:** Obtain the 16-bit (or potentially larger) value of `n²`.
2.  **Calculate Cube:** Obtain the value of `n³`.
3.  **Comparison:**
    *   **n² vs. n³:** This is generally straightforward. For `n > 1`, `n³` will be greater than `n²`. For `n = 1`, `n² = n³ = 1`. For `n = 0`, `n² = n³ = 0`. For `n < 0`, the comparison logic depends on signed arithmetic.
    *   **Comparison using flags:**
        *   Subtract the two numbers (`n³ - n²` or `n² - n³`).
        *   Check the Carry flag (`JC`/`JNC`) or Zero flag (`JZ`/`JNZ`) to determine the relationship (greater than, less than, or equal to).

**Example Comparison Logic (assuming `Square_result` and `Cube_result` are stored):**

Let's assume `Square_result` is in `R2R3` (MSB in R2, LSB in R3) and `Cube_result` is in `R4R5R6R7` (for a 32-bit result). For simplicity of comparison, let's assume both results fit in 16 bits, and `n²` is in `R2R3` and `n³` is in `R4R5`.

```assembly
; Assume n^2 is in R2R3 (R2=MSB, R3=LSB)
; Assume n^3 is in R4R5 (R4=MSB, R5=LSB)

    MOV A, R4           ; Load MSB of n^3 into A
    SUBB A, R2          ; Subtract MSB of n^2 from MSB of n^3 (with borrow)
    MOV R6, A           ; Store intermediate difference in R6

    MOV A, R5           ; Load LSB of n^3 into A
    SUBB A, R3          ; Subtract LSB of n^2 from LSB of n^3 (with borrow)
    MOV R7, A           ; Store final difference in R7 (R7R6 contains n^3 - n^2)

    ; Now compare R7R6 (the difference)
    MOV A, R7           ; Load MSB of difference
    JZ CHECK_LSB        ; If MSB is zero, check LSB

    ; If MSB is not zero, the result is either > 0 or < 0 (depending on signed/unsigned)
    ; Assuming unsigned comparison: if R7 is not zero, n^3 is likely larger.
    SJMP SQUARE_LESS_THAN_CUBE

CHECK_LSB:
    MOV A, R6           ; Load LSB of difference
    JZ EQUAL_SQUARE_CUBE  ; If LSB is also zero, they are equal

    ; If LSB is not zero, and MSB was zero, then the sign is determined by LSB.
    ; Assuming unsigned comparison: if R6 > 0, n^3 > n^2. If R6 < 0, n^3 < n^2.
    ; For unsigned subtraction, if the LSB is non-zero and MSB is zero,
    ; and the operation was (n^3 - n^2), then n^3 >= n^2.
    SJMP SQUARE_LESS_THAN_CUBE ; In unsigned context, if difference is positive

SQUARE_LESS_THAN_CUBE:
    ; Handle case where n^2 < n^3
    SJMP END_PROG

EQUAL_SQUARE_CUBE:
    ; Handle case where n^2 = n^3
    SJMP END_PROG

END_PROG:
    SJMP END_PROG

END
```

**Important Note:** The complexity of 16-bit (or larger) arithmetic and comparisons is significant in assembly. For this lab, understanding the fundamental data transfer and comparison instructions, and how they are applied to arithmetic results, is key. Using an embedded C compiler often simplifies these operations significantly.

**4. Embedded C Implementation (Illustrative)**

```c
#include <reg51.h> // For 8051 specific definitions

// Assume a function to calculate square and cube of a 16-bit number
// For simplicity, using built-in C operators

unsigned int num = 100; // Example 16-bit number
unsigned long square;   // Use long for square to avoid overflow for larger numbers
unsigned long cube;     // Use long for cube

void main() {
    // Calculate square
    square = (unsigned long)num * num;

    // Calculate cube
    cube = square * num; // Or cube = (unsigned long)num * num * num;

    // Compare square and cube
    if (square < cube) {
        // Square is less than cube
        // Perform action, e.g., set an output pin
        P1 = 0x01; // Example: Turn on LED 1
    } else if (square > cube) {
        // Square is greater than cube
        // Perform action, e.g., set another output pin
        P1 = 0x02; // Example: Turn on LED 2
    } else {
        // Square is equal to cube
        // Perform action
        P1 = 0x03; // Example: Turn on LEDs 1 and 2
    }

    while (1); // Infinite loop
}
```

**5. Connecting to Course Outcomes (COs)**

*   **CO1: Develop and execute ALP programs for solving arithmetic and logical problems using microcontroller (Knowledge Level: K3)**
    *   This topic directly addresses CO1 by requiring the development and understanding of assembly code to perform arithmetic (squaring, cubing) and logical (comparison, branching) operations on 16-bit numbers. The examples provided demonstrate this.

*   **CO2: Develop embedded C programming using instruction sets of 8051 (Knowledge Level: K3)**
    *   The embedded C example illustrates how higher-level constructs translate to underlying processor operations. While the C code hides the explicit assembly instructions, understanding the problem in assembly helps appreciate the efficiency and logic implemented by the compiler.

*   **CO3: Examine circuits for interfacing processor with various peripheral devices (Knowledge Level: K4)**
    *   While this specific topic doesn't explicitly require hardware interfacing, the results of the comparison (square vs. cube) would typically be used to control peripheral devices (e.g., LEDs, LCDs). Understanding how to generate these control signals is a precursor to examining interfacing circuits.

*   **CO4: Design a microcontroller based system with the help of various interfacing devices (Knowledge Level: K6)**
    *   Designing a system that compares squares and cubes of numbers would involve selecting appropriate memory for storage, choosing how to input the number, and deciding how to output the comparison result via peripherals. This aligns with the design aspect of CO4.

*   **CO5: Design an Arduino based system with the help of various interfacing devices (Knowledge Level: K6)**
    *   The principles learned here are transferable to Arduino (which uses AVR microcontrollers). The core concepts of data manipulation, arithmetic, and conditional logic remain the same, although the syntax and instruction set differ.

**6. Practice Questions and Exercises**

1.  **Question:** What are the maximum and minimum values that can be represented by a 16-bit unsigned integer? How might this affect the calculation of squares and cubes?
    *   **Answer:** Minimum: 0. Maximum: 65535. For a 16-bit number `n`, `n*n` can be up to `65535 * 65535 ≈ 4.29 * 10^9`. This requires more than 16 bits (it needs 32 bits). Similarly, `n*n*n` will require even more bits. This means for general 16-bit inputs, the results of squaring and cubing will overflow a 16-bit register, necessitating the use of multi-byte arithmetic (e.g., 32-bit or 64-bit calculations).

2.  **Question:** Briefly explain the process of multiplying two 8-bit numbers in the 8051 using the `MUL AB` instruction. Where is the result stored?
    *   **Answer:** The `MUL AB` instruction multiplies the 8-bit content of the Accumulator (A) with the 8-bit content of register B. The 16-bit result is stored with the most significant byte (MSB) in register A and the least significant byte (LSB) in register B.

3.  **Question:** If you are comparing a 16-bit number `n` with its square `n²`, and you know that `n` is an unsigned integer, under what conditions will `n²` be equal to `n`?
    *   **Answer:** `n² = n` occurs when:
        *   `n = 0` (0² = 0)
        *   `n = 1` (1² = 1)

4.  **Question:** Outline an approach in assembly language to compare if a 16-bit number stored in `R0R1` (R0=MSB, R1=LSB) is equal to another 16-bit number stored in `R2R3` (R2=MSB, R3=LSB).
    *   **Answer:**
        *   Compare the most significant bytes: `MOV A, R0`, `SUBB A, R2`. If the result is not zero, they are not equal.
        *   If the MSBs were equal, compare the least significant bytes: `MOV A, R1`, `SUBB A, R3`.
        *   If both comparisons result in zero difference, the 16-bit numbers are equal. Use flags or jump instructions (`JZ`, `CJNE`) to implement the logic.

**7. Important Points to Remember**

*   **Data Width:** Be mindful of the bit-width of your numbers and the registers you are using. 16-bit operations often require combining two 8-bit registers or specialized instructions if available.
*   **Overflow:** For squaring and cubing, especially with larger 16-bit inputs, the results will often exceed the capacity of 16-bit registers. You will need to implement multi-byte arithmetic routines to handle this, or use data types in C that support larger sizes (like `long` or `long long`).
*   **Multiplication Algorithms:** Implementing full 16x16 or 32x32 multiplication in assembly is complex and involves multiple 8x8 multiplications and careful addition with carry management.
*   **Comparison Logic:** Use subtraction and flag checks (`JC`, `JNC`, `JZ`, `JNZ`) or direct comparison instructions (`CJNE`) for comparing numbers.
*   **Signed vs. Unsigned:** The behavior of comparison and arithmetic operations can differ significantly depending on whether you are dealing with signed or unsigned numbers.
*   **8051 Architecture:** Familiarize yourself with the 8051's accumulator, register banks, DPTR (16-bit pointer), and the `MUL AB` instruction.

**8. References**

*   **Kenneth Ayala's "The 8051 Microcontroller"**: Refer to chapters on the 8051 instruction set, arithmetic operations, and perhaps examples of multi-byte arithmetic if available.
*   **R. Lyla B. Das's "Microprocessors and Microcontrollers"**: Consult sections on microprocessor architecture, register organization, and basic arithmetic algorithms.
*   **Muhammad Ali Mazidi's "The 8051 microcontroller and embedded systems"**: This is a comprehensive resource that will likely cover multi-byte arithmetic and provide detailed examples of assembly programming for arithmetic tasks.
*   **I. Scott MacKenzie, Raphael C.-W. Phan's "The 8051 Microcontroller"**: Useful for specific instruction details and programming techniques.

This comprehensive study guide provides the foundational knowledge for understanding and implementing the comparison of squares and cubes of 16-bit numbers in a microprocessors and embedded systems lab setting. Remember to practice with actual assembly code or embedded C to solidify your understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
