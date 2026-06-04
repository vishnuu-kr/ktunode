---
title: "Subtraction"
subject: "MICROPROCESSORS AND EMBEDDED SYSTEMS LAB"
module: "Module 1: Data transfer: Block data movement"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f364e8"
status: "completed"
scrapedAt: "2026-05-23T16:23:02.668Z"
---
# Microprocessors and Embedded Systems Lab: Module 1 - Data Transfer: Block Data Movement - Subtraction

This module focuses on fundamental data manipulation techniques within microprocessors, specifically the 8051 microcontroller. We will delve into the essential operation of subtraction, which is crucial for a wide range of arithmetic and logical operations.

## Learning Outcomes (LOs) Addressed in this Topic:

By the end of this topic, you should be able to:

*   **LO1: Implement subtraction of single bytes and multiple bytes using 8051 Assembly Language Programs (ALPs).** (Directly relates to CO1)
*   **LO2: Understand and utilize the subtraction instruction in Embedded C programs for the 8051.** (Directly relates to CO2)
*   **LO3: Recognize how subtraction is used in data processing and control logic, impacting peripheral interfacing and system design.** (Indirectly relates to CO3 and CO4)
*   **LO4: Apply subtraction principles in the design of embedded systems that require arithmetic calculations.** (Indirectly relates to CO4 and CO5)

## Key Concepts and Definitions:

### 1. Subtraction Operation:

Subtraction is a fundamental arithmetic operation that finds the difference between two numbers. In the context of microprocessors, this typically involves operating on data stored in registers or memory locations.

### 2. Signed vs. Unsigned Numbers:

*   **Unsigned Numbers:** Represented as positive integers. The 8051 can perform subtraction on unsigned numbers.
*   **Signed Numbers:** Represented using schemes like two's complement. The 8051's subtraction instruction inherently handles two's complement arithmetic, making it versatile for both signed and unsigned operations.

### 3. The 8051 Subtraction Instruction: `SUB`

The primary instruction for subtraction in the 8051 is `SUB`.

*   **Syntax:** `SUB A, <source>`
*   **Functionality:** Subtracts the `<source>` operand from the Accumulator (A) register and stores the result in the Accumulator. The `<source>` can be a register, a direct memory address, an indirect memory address, or an immediate value.
*   **Flags Affected:**
    *   **Carry Flag (CY):** Set if a borrow is needed (i.e., if the subtraction results in a negative number for unsigned operations). Cleared otherwise.
    *   **Auxiliary Carry Flag (AC):** Set if a borrow is needed from bit 3 to bit 4 during subtraction. Cleared otherwise. This is important for BCD arithmetic.
    *   **Overflow Flag (OV):** Set if signed overflow occurs. For subtraction, overflow occurs if the sign of the result is incorrect.
    *   **Zero Flag (Z):** Set if the result of the subtraction is zero. Cleared otherwise.
    *   **Sign Flag (S):** Copy of the most significant bit (MSB) of the result.

### 4. Subtract with Borrow Instruction: `SUBNB`

The 8051 also has a `SUBNB` instruction (or `SUBB A, <source>` which is the same instruction).

*   **Syntax:** `SUBB A, <source>`
*   **Functionality:** Subtracts the `<source>` operand **AND** the Carry flag (CY) from the Accumulator (A). This is crucial for performing multi-byte subtractions.
*   **Flags Affected:** Same as `SUB`.

### 5. Two's Complement Subtraction:

Subtraction is often implemented using the concept of adding the two's complement of the subtrahend. For example, A - B = A + (-B). The 8051's `SUB` instruction effectively performs this. To get the two's complement of a number, invert all its bits (`CPL`) and then add 1 (`ADD A, #01H`).

### 6. Block Data Movement and Subtraction:

While this topic is specifically about subtraction, it's important to remember its context within block data movement. Subtraction is often performed on data that has been moved into registers or memory as a block. For instance, you might subtract a block of subtrahends from a block of minuends.

## Implementing Subtraction in 8051 ALPs:

### 1. Single Byte Subtraction:

**Example 1: Subtracting an immediate value from the Accumulator.**

```assembly
MOV A, #05H   ; Load 05H into Accumulator
MOV B, #02H   ; Load 02H into B register
SUB A, B      ; Subtract B from A (A = A - B)
              ; Result: A = 03H
```

**Example 2: Subtracting a register from the Accumulator.**

```assembly
MOV A, #0AH   ; Load 0AH into Accumulator
MOV R0, #03H  ; Load 03H into R0
SUB A, R0     ; Subtract R0 from A (A = A - R0)
              ; Result: A = 07H
```

**Example 3: Subtracting from a direct memory location.**

```assembly
MOV A, 30H    ; Load the content of memory location 30H into A
MOV DPTR, #40H ; Load the address of the subtrahend into DPTR
MOV B, @DPTR  ; Load the content of memory location pointed by DPTR into B
SUB A, B      ; Subtract B from A
MOV 31H, A    ; Store the result in memory location 31H
```

### 2. Multi-Byte Subtraction:

For multi-byte subtraction, we use the `SUBB` instruction along with the Carry flag. The process involves subtracting the least significant bytes first, and then for subsequent bytes, subtracting the subtrahend and the borrow (Carry flag).

**Example: Subtracting two 16-bit numbers (e.g., `2000H - 1500H`)**

Let the minuend be stored at `20H` (LSB) and `21H` (MSB).
Let the subtrahend be stored at `30H` (LSB) and `31H` (MSB).
The result will be stored starting at `40H`.

```assembly
ORG 0000H
MOV R0, #20H   ; Pointer to minuend LSB
MOV R1, #30H   ; Pointer to subtrahend LSB
MOV R2, #40H   ; Pointer to result LSB

MOV A, @R0     ; Load minuend LSB into A
SUB A, @R1     ; Subtract subtrahend LSB from A
MOV @R2, A     ; Store result LSB

INC R0         ; Point to minuend MSB
INC R1         ; Point to subtrahend MSB
INC R2         ; Point to result MSB

MOV A, @R0     ; Load minuend MSB into A
SUBB A, @R1    ; Subtract subtrahend MSB AND the carry from A
MOV @R2, A     ; Store result MSB

END
```

**Explanation of the Multi-Byte Example:**

1.  **Initialization:** We set up pointers to the start of the minuend, subtrahend, and result blocks.
2.  **LSB Subtraction:** The least significant bytes are subtracted using `SUB`. If the subtraction of the LSBs results in a borrow (i.e., CY is set), this borrow will be propagated to the next subtraction.
3.  **MSB Subtraction with Borrow:** The most significant bytes are subtracted using `SUBB`. This instruction subtracts the subtrahend MSB **and** the current state of the Carry flag (which represents the borrow from the LSB subtraction).
4.  **Storing Results:** The results of each byte subtraction are stored in the designated result memory locations.

### 3. Using the `CPL` and `ADD` for Two's Complement Subtraction (Illustrative):

While `SUB` is the direct way, understanding the two's complement method is beneficial.

**Example: A - B using two's complement**

```assembly
MOV A, #05H   ; A = 05H
MOV B, #02H   ; B = 02H

CPL B         ; Invert B (B = FDH)
ADD A, B      ; Add A and inverted B (A = 05H + FDH = 102H) - Carry will be set
INC A         ; Add 1 to the result (A = 103H) - This is A + (-B) if B was 02H

              ; The result in A is 03H. Note that the Carry flag will be set
              ; because the original subtraction 05 - 02 was positive.
              ; For negative results, the Carry flag would be cleared after
              ; the SUB instruction, and this method would produce the
              ; correct two's complement representation.
```

**Important Note:** Directly using `SUB` is more efficient and straightforward for subtraction in the 8051. The two's complement method is shown here to illustrate the underlying principle.

## Implementing Subtraction in Embedded C (8051):

Embedded C for the 8051 provides high-level constructs to perform subtraction, which are then translated into assembly instructions by the compiler.

```c
#include <reg51.h> // Include register definitions for 8051

sbit LED1 = P1^0; // Example: Connect an LED for debugging

void main(void) {
    unsigned char minuend = 0x15;
    unsigned char subtrahend = 0x0A;
    unsigned char result;

    // Direct subtraction
    result = minuend - subtrahend;

    // Example of subtraction with a register
    unsigned char reg_value = 0x05;
    result = result - reg_value;

    // Example of subtraction from memory (simulated)
    unsigned char data_array[2];
    data_array[0] = 0x20;
    data_array[1] = 0x10;
    result = data_array[0] - data_array[1];

    // You can observe the result using a debugger or by toggling an LED
    if (result < 0x10) { // Example condition
        LED1 = 1;
    } else {
        LED1 = 0;
    }

    while (1) {
        // Infinite loop
    }
}
```

**How the compiler translates this:**

When you write `result = minuend - subtrahend;`, the compiler will typically generate assembly instructions similar to:

```assembly
MOV A, minuend_variable_address
SUB A, subtrahend_variable_address
MOV result_variable_address, A
```

For multi-byte subtractions, it will use `SUB` and `SUBB` accordingly.

**Alignment with CO2:** This C code demonstrates the use of subtraction as an arithmetic operation within an embedded C program for the 8051, directly fulfilling CO2.

## Practice Questions and Exercises:

**Question 1:**
Write an 8051 ALP to subtract the number `15H` from the number `50H` and store the result in memory location `70H`.

**Answer 1:**
```assembly
ORG 0000H
MOV A, #50H       ; Load minuend into Accumulator
MOV B, #15H       ; Load subtrahend into B register
SUB A, B          ; Subtract B from A (A = 50H - 15H = 3BH)
MOV 70H, A        ; Store the result in memory location 70H
END
```

**Question 2:**
Consider two 16-bit numbers. The first number is stored at `40H` (LSB) and `41H` (MSB). The second number is stored at `50H` (LSB) and `51H` (MSB). Write an 8051 ALP to subtract the second number from the first and store the result at `60H` (LSB) and `61H` (MSB). Assume the first number is greater than the second.

**Answer 2:**
```assembly
ORG 0000H
MOV R0, #40H   ; Pointer to first number LSB
MOV R1, #50H   ; Pointer to second number LSB
MOV R2, #60H   ; Pointer to result LSB

MOV A, @R0     ; Load first number LSB into A
SUB A, @R1     ; Subtract second number LSB from A
MOV @R2, A     ; Store result LSB

INC R0         ; Point to first number MSB
INC R1         ; Point to second number MSB
INC R2         ; Point to result MSB

MOV A, @R0     ; Load first number MSB into A
SUBB A, @R1    ; Subtract second number MSB AND the carry from A
MOV @R2, A     ; Store result MSB

END
```

**Question 3:**
Write an Embedded C code snippet for the 8051 that subtracts the value `0x08` from a variable `sensor_reading` and stores the outcome back into `sensor_reading`.

**Answer 3:**
```c
#include <reg51.h>

void main(void) {
    unsigned char sensor_reading = 0x1A;

    sensor_reading = sensor_reading - 0x08; // Performs subtraction

    // sensor_reading now holds 0x12

    while(1) {
        // ...
    }
}
```

## Important Points to Remember:

*   **Accumulator is Key:** The `SUB` and `SUBB` instructions always operate on the Accumulator (A).
*   **Carry Flag for Borrow:** The Carry flag (CY) acts as a borrow flag in subtraction. When performing multi-byte subtraction, a set CY after subtracting the LSBs indicates a borrow that must be accounted for in the next byte subtraction using `SUBB`.
*   **Two's Complement:** The 8051's subtraction naturally handles two's complement arithmetic, allowing it to correctly subtract signed numbers.
*   **Flag Status:** Always be aware of how subtraction affects the processor flags (CY, AC, OV, Z, S), as these flags are often used for conditional branching and further processing.
*   **`SUB` vs. `SUBB`:** Use `SUB` for the first byte of a multi-byte subtraction and `SUBB` for all subsequent bytes.
*   **Textbook References:**
    *   **Ayala's "The 8051 Microcontroller":** Chapter 4 typically covers the instruction set, including arithmetic operations like subtraction. Pay attention to the discussion on flags and addressing modes.
    *   **Das's "Microprocessors and Microcontrollers":** Similar to Ayala, this textbook will detail the `SUB` and `SUBB` instructions and their behavior with flags.
    *   **Mazidi's "The 8051 Microcontroller and Embedded Systems":** This book is excellent for understanding the practical implementation and provides numerous examples of arithmetic operations in ALP.

## Alignment with Course Outcomes (COs):

*   **CO1 (Develop and execute ALP programs for solving arithmetic and logical problems using microcontroller):** This topic directly enables the development of ALPs for subtraction, a core arithmetic problem. The examples and practice questions demonstrate this. (Knowledge Level: K3 - Applying)
*   **CO2 (Develop embedded C programming using instruction sets of 8051):** The C code example shows how subtraction can be expressed in embedded C, which the compiler translates into 8051 instructions. (Knowledge Level: K3 - Applying)
*   **CO3 (Examine circuits for interfacing processor with various peripheral devices):** While not directly about interfacing, subtraction is a fundamental operation that might be performed on data read from or sent to peripherals. For instance, calculating the difference between two sensor readings. (Knowledge Level: K4 - Analyzing)
*   **CO4 (Design a microcontroller based system with the help of various interfacing devices):** A system design often requires arithmetic operations. Subtracting values for scaling, calibration, or control logic necessitates understanding subtraction. (Knowledge Level: K6 - Creating)
*   **CO5 (Design an Arduino based system with the help of various interfacing devices):** While the focus is 8051, the fundamental concept of subtraction is universal. If a student were to translate an 8051-based arithmetic logic to an Arduino (which uses AVR microcontrollers), the core understanding of subtraction remains the same. (Knowledge Level: K6 - Creating)

This concludes our study of subtraction within the context of data transfer and block data movement for the 8051 microcontroller. Understanding subtraction is foundational for all subsequent arithmetic operations and complex embedded system designs.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
