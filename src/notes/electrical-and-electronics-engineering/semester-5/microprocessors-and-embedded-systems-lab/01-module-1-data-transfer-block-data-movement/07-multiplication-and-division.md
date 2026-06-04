---
title: "Multiplication and Division."
subject: "MICROPROCESSORS AND EMBEDDED SYSTEMS LAB"
module: "Module 1: Data transfer: Block data movement"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f364e9"
status: "completed"
scrapedAt: "2026-05-23T16:23:03.422Z"
---
# Microprocessors and Embedded Systems Lab - Module 1: Data Transfer - Multiplication and Division

## 1. Introduction to Multiplication and Division in Microcontrollers

This module focuses on implementing multiplication and division operations, fundamental arithmetic tasks, within the context of microcontrollers, specifically the 8051 family, as is common in introductory embedded systems labs. Understanding these operations is crucial for developing programs that perform calculations, control systems, and process data.

**Key Concepts:**

*   **Arithmetic Operations:** Multiplication and division are core arithmetic operations.
*   **8051 Architecture:** The 8051 microcontroller has specific instructions and methods for performing these operations. Unlike modern processors with dedicated hardware multipliers and dividers, the 8051 often relies on iterative algorithms for these tasks.
*   **Assembly Language Programming (ALP):** These operations are typically implemented using specific assembly language instructions.
*   **Embedded C Programming:** When using Embedded C, the compiler translates high-level code into machine instructions, often leveraging optimized routines for multiplication and division.

**Learning Outcomes Addressed:**

*   **CO1 (K3):** Develop and execute ALP programs for solving arithmetic and logical problems using microcontroller. (This topic directly aligns with solving arithmetic problems.)
*   **CO2 (K3):** Develop embedded C programming using instruction sets of 8051. (Understanding how multiplication and division are handled at a lower level aids in efficient C programming.)

---

## 2. Multiplication in the 8051 Microcontroller

The 8051 microcontroller has a dedicated hardware multiplier instruction: `MUL`. This instruction is designed to perform 8-bit by 8-bit multiplication.

### 2.1 The `MUL` Instruction

*   **Syntax:** `MUL AB`
*   **Operands:**
    *   `A`: Accumulator (8-bit) - The first operand.
    *   `B`: Register B (8-bit) - The second operand.
*   **Operation:** Multiplies the content of the Accumulator (A) with the content of Register B.
*   **Result Storage:**
    *   **Lower 8 bits of the product:** Stored in the Accumulator (A).
    *   **Higher 8 bits of the product:** Stored in Register B.
*   **Carry Flag (CY):** The Carry flag (CY) is set if the multiplication results in a 16-bit product (i.e., if the higher 8 bits are non-zero).
*   **Overflow Flag (OV):** The Overflow flag (OV) is set if the result overflows the 16-bit register pair A and B. In the case of 8-bit multiplication, OV is set if the product exceeds 255.
*   **Limitations:** The `MUL AB` instruction performs only 8-bit by 8-bit multiplication. For larger numbers, you need to implement multi-byte multiplication algorithms.

**Example (8-bit Multiplication):**

Let's multiply `05H` (5 decimal) by `03H` (3 decimal).

1.  **Initialization:**
    *   `MOV A, #05H`  ; Load 05H into Accumulator A
    *   `MOV B, #03H`  ; Load 03H into Register B
2.  **Multiplication:**
    *   `MUL AB`       ; Multiply A and B
3.  **Result:**
    *   After `MUL AB`:
        *   `A` will contain `0FH` (the lower 8 bits of 15).
        *   `B` will contain `00H` (the higher 8 bits of 15).
        *   The product is `000FH` (15 decimal).

**Textbook Reference:**

*   **Kenneth Ayala, "The 8051 Microcontroller" (Cengage Learning):** Chapter 4, "Arithmetic and Logic Instructions," discusses the `MUL AB` instruction in detail, including its operation and register usage.
*   **R. LylaB.Das, "Microprocessors and Microcontrollers" (Pearson Education):** Likely covers the `MUL` instruction in its chapter on 8051 instruction set architecture.

### 2.2 Multi-Byte Multiplication (Conceptual - requires algorithms)

For multiplying numbers larger than 8 bits (e.g., 16-bit by 8-bit, or 16-bit by 16-bit), you need to implement algorithms using multiple `MUL AB` operations and careful handling of intermediate results and carries.

**General Approach for 16-bit x 8-bit Multiplication:**

Let `X16` be a 16-bit number stored in `R0` (low byte) and `R1` (high byte), and `Y8` be an 8-bit number in `R2`.

1.  Initialize the result (e.g., a 24-bit result in `R3`, `R4`, `R5`) to zero.
2.  Multiply the low byte of `X16` (`R0`) by `Y8` (`R2`). Store the result in `A` and `B`.
3.  Add the lower byte of the product (`A`) to the low byte of the result (`R3`). Handle carry.
4.  Add the higher byte of the product (`B`) to the middle byte of the result (`R4`). Handle carry.
5.  Multiply the high byte of `X16` (`R1`) by `Y8` (`R2`). Store the result in `A` and `B`.
6.  Add the lower byte of this new product (`A`) to the middle byte of the result (`R4`). Handle carry.
7.  Add the higher byte of this new product (`B`) to the high byte of the result (`R5`). Handle carry.

**Important Point to Remember:** The `MUL AB` instruction is limited to 8-bit operands. For larger numbers, you must implement multi-byte multiplication algorithms.

---

## 3. Division in the 8051 Microcontroller

The 8051 microcontroller does not have a single hardware division instruction like `MUL`. Instead, division is typically performed using **iterative algorithms** such as the **restoring division algorithm** or **non-restoring division algorithm**.

### 3.1 Restoring Division Algorithm (Conceptual)

This is a common method for implementing division in microcontrollers. It involves repeated subtraction and shifting.

**General Idea for 8-bit by 8-bit Division (Dividend in A, Divisor in B):**

1.  **Initialization:**
    *   Initialize the quotient (result) to 0.
    *   Initialize the remainder to the dividend (e.g., in A).
    *   The divisor is in B.
2.  **Iteration:** Perform a loop for 8 bits (or the number of bits in the divisor).
    *   Shift the remainder left by one bit.
    *   Subtract the divisor (B) from the shifted remainder.
    *   **If the subtraction result is non-negative (remainder >= divisor):**
        *   The quotient bit for this position is 1.
        *   The result of the subtraction becomes the new remainder.
    *   **If the subtraction result is negative (remainder < divisor):**
        *   The quotient bit for this position is 0.
        *   Restore the remainder by adding the divisor back.
    *   Shift the quotient left by one bit and set the least significant bit (LSB) based on the quotient bit determined.
3.  **Final Result:** After 8 iterations, the quotient will be in a designated register (e.g., B or a separate register) and the final remainder will be in A.

**Example (Conceptual 8-bit Division: 15 / 3):**

*   Dividend (A) = `0FH` (15)
*   Divisor (B) = `03H` (3)

This is a simplified illustration of the process. A real implementation would involve more register manipulation and conditional jumps.

**Challenges with Division:**

*   **Complexity:** Implementing division algorithms in assembly requires careful management of registers, subtractions, and conditional logic.
*   **Speed:** Iterative division is generally slower than multiplication.
*   **Zero Division:** Programs must handle the case where the divisor is zero to prevent program crashes.

**Textbook Reference:**

*   **Kenneth Ayala, "The 8051 Microcontroller" (Cengage Learning):** While the `DIV` instruction isn't directly available, Ayala might discuss software division routines or refer to the computational limitations.
*   **R. LylaB.Das, "Microprocessors and Microcontrollers" (Pearson Education):** This textbook is likely to dedicate a section to software implementation of division algorithms due to the absence of a dedicated hardware instruction in the 8051.
*   **Muhammad Ali Mazidi, "The 8051 Microcontroller and Embedded Systems" (Pearson Education):** Mazidi's book is known for its practical examples and would likely provide assembly code for division routines.

### 3.2 Division in Embedded C

When you write division in Embedded C, the compiler handles the complexity.

```c
unsigned char dividend = 15;
unsigned char divisor = 3;
unsigned char quotient;
unsigned char remainder;

// Integer division
quotient = dividend / divisor; // quotient will be 5
remainder = dividend % divisor; // remainder will be 0

// For larger numbers
unsigned int dividend_16 = 500;
unsigned int divisor_16 = 10;
unsigned int quotient_16;
unsigned int remainder_16;

quotient_16 = dividend_16 / divisor_16; // quotient_16 will be 50
remainder_16 = dividend_16 % divisor_16; // remainder_16 will be 0
```

**How the Compiler Handles It:**

The Embedded C compiler for the 8051 will generate assembly code that uses efficient division algorithms (likely based on the concepts discussed above) to perform the division. For larger data types (e.g., `int`, `long`), it will generate multi-byte division routines.

**Learning Outcome Addressed:**

*   **CO2 (K3):** Develop embedded C programming using instruction sets of 8051. (Understanding the underlying mechanisms helps in writing more efficient C code.)

**Important Point to Remember:** The 8051 lacks a dedicated hardware division instruction. Division is performed using software algorithms. Always check for division by zero in your C programs.

---

## 4. Practical Examples and Exercises

These exercises will help solidify your understanding of multiplication and division in the context of the 8051.

### 4.1 Exercise 1: 8-bit Multiplication

**Problem:** Write an 8051 Assembly Language program to multiply the number stored in memory location `30H` by the number stored in memory location `31H`. Store the lower byte of the product in `40H` and the higher byte in `41H`.

**Solution:**

```assembly
ORG 0000H
MOV A, 30H      ; Load the first number into Accumulator
MOV B, 31H      ; Load the second number into Register B
MUL AB          ; Multiply A and B
MOV 40H, A      ; Store the lower byte of the product in 40H
MOV 41H, B      ; Store the higher byte of the product in 41H
HERE: SJMP HERE ; Infinite loop
END
```

**Explanation:**

*   `ORG 0000H`: Sets the program origin to address 0000H.
*   `MOV A, 30H`: Loads the byte from memory address `30H` into the accumulator `A`.
*   `MOV B, 31H`: Loads the byte from memory address `31H` into register `B`.
*   `MUL AB`: Performs the 8-bit multiplication of `A` and `B`. The result is placed in `A` (low byte) and `B` (high byte).
*   `MOV 40H, A`: Copies the low byte of the product from `A` to memory address `40H`.
*   `MOV 41H, B`: Copies the high byte of the product from `B` to memory address `41H`.
*   `HERE: SJMP HERE`: An infinite loop to halt the program execution.

**Testing:**
*   Place `0AH` (10 decimal) at `30H`.
*   Place `05H` (5 decimal) at `31H`.
*   After execution, `40H` should contain `32H` (50 decimal) and `41H` should contain `00H`.

---

### 4.2 Exercise 2: Embedded C Multiplication

**Problem:** Write an Embedded C program for an 8051 microcontroller to multiply two 8-bit numbers, `num1 = 12` and `num2 = 5`, and store the result.

**Solution:**

```c
#include <reg51.h> // Include the register definition file for 8051

sbit LED_PIN = P1^0; // Example: using an LED to indicate completion

void main(void) {
    unsigned char num1 = 12;
    unsigned char num2 = 5;
    unsigned int result; // Use unsigned int to hold the 16-bit result

    // Perform multiplication
    result = num1 * num2;

    // You can now use the 'result' variable.
    // For example, blink an LED to indicate the operation is done.
    LED_PIN = 1; // Turn on LED
    // In a real application, you would do something meaningful with 'result'
    // For demonstration, we just blink the LED
    for (volatile int i = 0; i < 10000; i++); // Small delay
    LED_PIN = 0; // Turn off LED
    for (volatile int i = 0; i < 10000; i++); // Small delay

    while (1) {
        // Stay in an infinite loop
    }
}
```

**Explanation:**

*   `#include <reg51.h>`: This header file provides definitions for the special function registers (SFRs) of the 8051.
*   `sbit LED_PIN = P1^0;`: Defines a bit variable `LED_PIN` to control an LED connected to port P1, pin 0.
*   `unsigned char num1 = 12;`: Declares an 8-bit unsigned character variable `num1` and initializes it to 12.
*   `unsigned char num2 = 5;`: Declares an 8-bit unsigned character variable `num2` and initializes it to 5.
*   `unsigned int result;`: Declares a 16-bit unsigned integer variable `result` to store the product (since 8-bit x 8-bit can result in a 16-bit value).
*   `result = num1 * num2;`: This is the core of the operation. The C compiler translates this into the appropriate 8051 assembly instructions, likely using `MUL AB`.
*   The LED blinking part is a common way to show that the program has executed a part of its logic.

**Testing:**
*   Compile and run this code on an 8051 simulator or development board.
*   Observe the LED blinking. You can verify the value of `result` in the debugger (it should be `000C` in hexadecimal, which is 12 decimal).

---

### 4.3 Exercise 3: Division by Zero Prevention (Embedded C)

**Problem:** Write an Embedded C program that divides `dividend = 20` by `divisor = 0`. Implement a mechanism to prevent division by zero.

**Solution:**

```c
#include <reg51.h>

sbit ERROR_LED = P1^1; // LED to indicate an error (division by zero)

void main(void) {
    unsigned char dividend = 20;
    unsigned char divisor = 0;
    unsigned int quotient;

    // Check for division by zero before performing the operation
    if (divisor == 0) {
        // Handle the error: Division by zero is not allowed
        ERROR_LED = 1; // Turn on the error LED
        // You might want to log this error, stop further execution, etc.
    } else {
        // Perform division only if the divisor is not zero
        quotient = dividend / divisor;
        // In a real scenario, you'd use the quotient.
        // For this example, we don't need to do anything with the quotient
        // if the divisor is non-zero, as we are focusing on the error case.
    }

    while (1) {
        // Main loop
    }
}
```

**Explanation:**

*   The `if (divisor == 0)` statement is crucial. It checks if the `divisor` is zero before the division operation.
*   If `divisor` is zero, the `ERROR_LED` is turned on, signaling an error condition. The division operation is skipped.
*   If `divisor` is not zero, the division `quotient = dividend / divisor;` is performed safely.

**Testing:**
*   Compile and run this code.
*   Observe that the `ERROR_LED` turns on, indicating that the division by zero was detected and prevented. If you change `divisor` to a non-zero value (e.g., `4`), the `ERROR_LED` will remain off, and the division would proceed (though the result isn't explicitly used in this example).

---

## 5. Summary and Key Takeaways

*   **Multiplication:** The 8051 has a dedicated `MUL AB` instruction for 8-bit by 8-bit multiplication, storing the result in registers `A` (low byte) and `B` (high byte). For larger numbers, software algorithms are required.
*   **Division:** The 8051 does *not* have a hardware division instruction. Division is performed using iterative software algorithms (e.g., restoring division). This makes division more complex to implement in Assembly and generally slower than multiplication.
*   **Embedded C:** When using Embedded C, the compiler handles the generation of efficient assembly code for both multiplication and division.
*   **Division by Zero:** It is critical to always check for division by zero in your programs, especially in C, to prevent runtime errors.

---

## 6. Further Learning and Exploration

*   **Multi-Byte Multiplication Algorithms:** Research and try to implement 16-bit x 16-bit multiplication in 8051 Assembly.
*   **Software Division Algorithms:** Study the restoring and non-restoring division algorithms in more detail and attempt to implement an 8-bit by 8-bit division routine in Assembly.
*   **Performance:** Compare the execution time of multiplication and division for different data sizes.
*   **Floating-Point Arithmetic:** Explore how floating-point multiplication and division are handled (they are significantly more complex and often require dedicated libraries or co-processors).

---

This comprehensive set of notes covers the essential aspects of multiplication and division for microcontrollers, specifically the 8051, aligning with the learning outcomes of your course. Remember to practice these concepts through coding and simulation.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
