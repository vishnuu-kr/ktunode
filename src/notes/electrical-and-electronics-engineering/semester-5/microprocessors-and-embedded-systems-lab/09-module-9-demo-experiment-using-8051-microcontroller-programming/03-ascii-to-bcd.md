---
title: "ASCII to BCD"
subject: "MICROPROCESSORS AND EMBEDDED SYSTEMS LAB"
module: "Module 9: Demo experiment using 8051 Microcontroller programming."
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f364ff"
status: "completed"
scrapedAt: "2026-05-23T16:23:14.202Z"
---
# MICROPROCESSORS AND EMBEDDED SYSTEMS LAB: Module 9 - Demo Experiment: ASCII to BCD Conversion using 8051 Microcontroller

## 1. Introduction

This module focuses on a practical demonstration of an 8051 microcontroller programming task: converting ASCII characters representing digits into their Binary Coded Decimal (BCD) equivalents. This is a fundamental operation in many embedded systems where input is often received as ASCII characters (e.g., from a keypad or serial port) and needs to be processed numerically.

### 1.1. What is ASCII?
**ASCII (American Standard Code for Information Interchange)** is a character encoding standard for electronic communication. ASCII codes represent text in computers, telecommunications equipment, and other devices. Each character, like '0', '1', '2', ..., '9', 'A', 'a', etc., is assigned a unique numerical code.

*   **Example:**
    *   '0' is represented by ASCII code 30H (Decimal 48)
    *   '1' is represented by ASCII code 31H (Decimal 49)
    *   '9' is represented by ASCII code 39H (Decimal 57)

### 1.2. What is BCD?
**BCD (Binary Coded Decimal)** is a binary-encoded representation of decimal numbers. In BCD, each decimal digit (0-9) is represented by a 4-bit binary nibble. This is often used for displaying numbers on seven-segment displays or for decimal arithmetic where the precision of decimal representation is crucial.

*   **Example:**
    *   Decimal 0 is represented as 0000B (0H)
    *   Decimal 1 is represented as 0001B (1H)
    *   Decimal 9 is represented as 1001B (9H)

### 1.3. The Need for ASCII to BCD Conversion
Microcontrollers often receive numerical input as a string of ASCII characters. For arithmetic operations or display purposes, these ASCII characters need to be converted into their numerical BCD (or binary) equivalents. For instance, if the microcontroller receives the ASCII characters '1' and '2', it needs to convert them into the numerical values 1 and 2 respectively before performing operations like addition (1 + 2 = 3).

## 2. Learning Outcomes Covered

This experiment directly addresses the following learning outcomes:

*   **CO1: Develop and execute ALP programs for solving arithmetic and logical problems using microcontroller (Knowledge Level: K3)**
    *   The ASCII to BCD conversion involves logical operations (AND, SUBTRACT) to manipulate character codes and derive numerical values. This demonstrates problem-solving using assembly language.
*   **CO2: Develop embedded C programming using instruction sets of 8051 (Knowledge Level: K3)**
    *   While the primary focus might be ALP, the underlying principles of character manipulation and conversion are transferable to Embedded C, demonstrating an understanding of how to work with character data.
*   **CO3: Examine circuits for interfacing processor with various peripheral devices (Knowledge Level: K4)**
    *   Although not explicitly a circuit-heavy experiment, understanding ASCII input implies a peripheral like a keypad or serial port is involved, which requires knowledge of their interfacing.
*   **CO4: Design a microcontroller based system with the help of various interfacing devices (Knowledge Level: K6)**
    *   This fundamental conversion is a building block for designing systems that accept numerical input and process it.

## 3. The Conversion Logic (ASCII to BCD)

The key to converting an ASCII digit character to its BCD equivalent lies in understanding the ASCII encoding of digits.

**Observation:**
*   ASCII for '0' is 30H (0011 0000B)
*   ASCII for '1' is 31H (0011 0001B)
*   ASCII for '2' is 32H (0011 0010B)
*   ...
*   ASCII for '9' is 39H (0011 1001B)

Notice that the higher nibble (the most significant 4 bits) for all ASCII digits '0' through '9' is always `0011` (which is 3H). The lower nibble (the least significant 4 bits) corresponds directly to the BCD value of the digit.

**Conversion Method:**
To convert an ASCII digit character to its BCD equivalent, we need to remove the `0011` prefix. This can be achieved by subtracting `30H` from the ASCII character.

*   **ASCII('0') - 30H = 30H - 30H = 00H (BCD 0)**
*   **ASCII('1') - 30H = 31H - 30H = 01H (BCD 1)**
*   **ASCII('9') - 30H = 39H - 30H = 09H (BCD 9)**

**Example:**
If the input is the ASCII character '7':
1.  ASCII code for '7' is 37H.
2.  Subtract 30H from 37H: `37H - 30H = 07H`.
3.  07H is the BCD representation of the decimal digit 7.

**Handling Multiple Digits:**
For multi-digit numbers, you would process each ASCII character sequentially. For example, to convert "12" to BCD:

1.  Convert '1' (ASCII 31H) to BCD: `31H - 30H = 01H`.
2.  Convert '2' (ASCII 32H) to BCD: `32H - 30H = 02H`.

The result would be two BCD values, 01H and 02H, which can then be combined or processed further. For example, to form the decimal number 12, you might shift the first BCD value (01H) left by 4 bits (multiply by 10 in BCD terms) and add the second BCD value: `(01H << 4) + 02H = 10H + 02H = 12H`.

## 4. 8051 Assembly Language Program (ALP) Example

Let's consider a simple ALP to convert a single ASCII digit stored in a register (e.g., R0) to its BCD equivalent and store it in another register (e.g., R1).

**Assumptions:**
*   The input ASCII digit ('0'-'9') is in register R0.
*   The output BCD value will be stored in register R1.

```assembly
ORG 0000H          ; Program starts at memory location 0000H

MAIN:
    MOV R0, #'7'     ; Load ASCII character '7' into R0 (ASCII '7' is 37H)

    ; --- ASCII to BCD Conversion ---
    MOV A, R0        ; Move the ASCII character from R0 to Accumulator (A)
    CLR C            ; Ensure Carry flag is clear before subtraction
    SUBB A, #'0'     ; Subtract ASCII '0' (30H) from Accumulator
                     ; The result in A will be the BCD value.
                     ; For '7', A = 37H - 30H = 07H

    MOV R1, A        ; Store the BCD value from Accumulator into R1

    ; --- Program ends here for demonstration ---
    SJMP $           ; Infinite loop to halt the program

END
```

**Explanation of Instructions:**

*   `ORG 0000H`: Sets the origin of the program to memory address 0000H.
*   `MOV R0, #'7'`: Loads the ASCII character '7' into register R0. The assembler interprets `'7'` as its ASCII value (37H).
*   `MOV A, R0`: Copies the content of R0 (ASCII '7') into the Accumulator (A).
*   `CLR C`: Clears the Carry flag. This is important when using `SUBB` as `SUBB A, data` performs `A = A - data - Carry`. If we only want `A = A - data`, Carry must be 0.
*   `SUBB A, #'0'`: Subtracts the ASCII value of '0' (which is 30H) from the Accumulator. Since the Carry flag is cleared, this effectively performs `A = A - 30H`.
    *   If A contained 37H ('7'), then `A = 37H - 30H = 07H`.
    *   If A contained 30H ('0'), then `A = 30H - 30H = 00H`.
    *   If A contained 39H ('9'), then `A = 39H - 30H = 09H`.
*   `MOV R1, A`: Stores the result (the BCD value) from the Accumulator into register R1.
*   `SJMP $`: This creates an infinite loop, effectively stopping the program execution at this point for demonstration purposes.

## 5. Handling Input from Ports or Memory

In a real-world scenario, the ASCII digit would typically come from an input port (e.g., connected to a keypad) or from RAM.

**Example: Reading from Port P1**

Let's say the ASCII digit is received on Port P1.

```assembly
ORG 0000H

MAIN:
    MOV P1, #0FFH    ; Initialize Port P1 as output (or input as needed, but we are reading)
                     ; For reading, the direction is often implicitly set by the peripheral.

    ; Assume an ASCII digit is now available on Port P1

    MOV A, P1        ; Read the ASCII character from Port P1 into Accumulator
    CLR C            ; Clear Carry flag
    SUBB A, #'0'     ; Convert ASCII to BCD

    ; The BCD value is now in the Accumulator

    ; Further processing or storage can be done here
    ; For example, store it in RAM location 30H
    MOV 30H, A

    SJMP $

END
```

## 6. Handling Multiple Digit ASCII Strings (Advanced)

To convert a multi-digit ASCII string (e.g., "123") into a single BCD number or a series of BCD bytes, a loop and some arithmetic (multiplication by 10) are required.

**Logic for "123":**

1.  Read '1' (ASCII 31H). Convert to BCD: `01H`. Current BCD value = `01H`.
2.  Read '2' (ASCII 32H). Convert to BCD: `02H`.
3.  To incorporate '2' into the existing number: Multiply the current BCD value (`01H`) by 10, then add the new BCD value (`02H`).
    *   BCD multiplication by 10 is often done by `(value << 4) + (value << 3) + value` or by specific multiplication routines. A simpler way is `(value * 10)`.
    *   Let's assume a `MUL10` subroutine exists.
    *   `result = MUL10(01H) + 02H = 0AH + 02H = 0CH` (Decimal 12).
4.  Read '3' (ASCII 33H). Convert to BCD: `03H`.
5.  Multiply current BCD value (`0CH`) by 10, then add the new BCD value (`03H`).
    *   `result = MUL10(0CH) + 03H = 78H + 03H = 7BH` (This is not BCD for 123. BCD for 123 would be 123H or 01 02 03 as bytes).

**Correction:** For forming a decimal number like 123, you would typically store each BCD digit separately or use a BCD arithmetic routine. If the goal is to represent '123' as a decimal number, you'd store `01H`, `02H`, `03H` in separate memory locations or registers.

**Example for storing multiple BCD digits:**

```assembly
ORG 0000H

DATA_SEGMENT:
    ASCII_STRING DB '123'  ; Null-terminated string in internal RAM
    BCD_RESULT DB 3 DUP(?) ; Space for 3 BCD digits

MAIN:
    MOV DPTR, #ASCII_STRING ; Point DPTR to the string
    MOV R1, #0              ; Index for BCD_RESULT
    MOV R2, #0              ; Counter for string length (or use a terminator)

LOOP_CONVERT:
    MOV A, @DPTR            ; Get the next ASCII character
    CLR C
    SUBB A, #'0'            ; Convert to BCD

    MOV @R1, A              ; Store the BCD digit in BCD_RESULT

    INC DPTR                ; Move to the next character in the string
    INC R1                  ; Move to the next storage location

    ; Check for string termination or process a fixed number of digits
    ; For this example, let's assume we process 3 digits.
    MOV A, R1
    CJNE A, #3, LOOP_CONVERT ; If R1 is not 3, continue loop

    SJMP $                  ; Halt

END
```

**Key Point:** For multi-digit conversion to a single numerical value, be careful whether you need a binary representation or a BCD representation. The above example stores individual BCD bytes. Converting "123" to a single binary number would involve BCD-to-binary conversion or BCD arithmetic routines.

## 7. Interfacing Considerations (CO3)

While this specific experiment doesn't involve complex hardware interfacing, understanding the context is crucial:

*   **Keypad Input:** If the ASCII digits come from a keypad, you would need to implement a keypad scanning routine to detect key presses and then read the corresponding ASCII code. This involves configuring I/O ports for input and output, using pull-up/pull-down resistors, and implementing debouncing. (Refer to Ayala, Chapter 4: I/O Port Programming).
*   **Serial Communication (UART):** If digits are received via RS-232 or another serial protocol, you would need to configure the 8051's UART (Serial Port) for the correct baud rate, data bits, and parity. You would then write interrupt service routines (ISRs) or poll the UART status to receive incoming characters. (Refer to Ayala, Chapter 7: Serial Port Programming).
*   **Displaying BCD Output:** The converted BCD values are often displayed on seven-segment displays. This requires interfacing the 8051's I/O ports to drive the segments and common cathodes/anodes of the displays, possibly using multiplexing for multiple digits. (Refer to Ayala, Chapter 5: Timer/Counter Programming for applications like multiplexing).

## 8. Design Considerations (CO4)

Designing a system that uses ASCII to BCD conversion involves:

*   **Input Method:** How will the ASCII digits be entered? (Keypad, serial port, sensors providing ASCII output).
*   **Data Storage:** Where will the ASCII input be temporarily stored? (Registers, RAM buffers).
*   **Conversion Algorithm:** Which method will be used? (Simple subtraction, loop-based for multiple digits).
*   **Output Method:** How will the converted BCD data be used? (Display on LEDs/7-segments, for arithmetic operations, transmission via serial port).
*   **Error Handling:** What happens if non-digit characters are received? The current example assumes valid input. A robust system would need to validate input and handle errors (e.g., ignore non-digits, display an error message).

## 9. Practice Questions

**Question 1:**
What is the BCD equivalent of the ASCII character '5'? Show the steps.

**Answer 1:**
ASCII character '5' has an ASCII code of 35H.
To convert to BCD, subtract 30H:
`35H - 30H = 05H`
The BCD equivalent is 05H.

**Question 2:**
Write a short 8051 ALP snippet that reads an ASCII digit from Port P2, converts it to BCD, and stores the result in R5.

**Answer 2:**
```assembly
ORG 0000H

MAIN:
    MOV A, P2        ; Read ASCII digit from Port P2 into Accumulator
    CLR C            ; Clear Carry flag
    SUBB A, #'0'     ; Convert ASCII digit to BCD
    MOV R5, A        ; Store the BCD result in R5

    SJMP $           ; Halt

END
```

**Question 3:**
If you read the ASCII character 'A' (which has ASCII code 41H) and perform `SUBB A, #'0'`, what will be the result in the accumulator? Is this result meaningful as a BCD digit? Explain.

**Answer 3:**
The ASCII character 'A' has the code 41H.
Performing `SUBB A, #'0'` means `A = 41H - 30H`.
`41H - 30H = 11H`.
The result in the accumulator will be 11H.
This result is **not meaningful** as a BCD digit. BCD digits range from 00H to 09H. ASCII characters '0' through '9' convert to these valid BCD values. However, characters like 'A' through 'Z' or 'a' through 'z' are not digits, and subtracting '0' from their ASCII codes produces unintended, non-BCD values. A proper implementation would first check if the input character is indeed an ASCII digit ('0' to '9') before performing the conversion.

## 10. Important Points to Remember

*   **ASCII Representation of Digits:** Remember that ASCII digits '0' through '9' are represented by hexadecimal values 30H through 39H.
*   **Conversion Constant:** The key to ASCII-to-BCD conversion for digits is subtracting the ASCII value of '0' (which is 30H).
*   **`SUBB` Instruction:** Use `SUBB A, data` with `CLR C` beforehand for simple subtraction.
*   **Input Source:** Be aware of where the ASCII data is coming from (ports, memory, serial).
*   **Error Checking:** For robust applications, always validate that the input character is within the ASCII range for digits ('0'-'9') before performing the conversion.
*   **Multi-Digit Handling:** For multi-digit numbers, you'll need loops and potentially BCD arithmetic routines (like multiplication by 10) or store each BCD digit separately.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


## 11. Textbooks and References

*   **Kenneth Ayala, "The 8051 Microcontroller":** Likely covers fundamental concepts of 8051 programming, data conversion, and I/O operations. Look for chapters on Assembly Language Programming, I/O Ports, and Arithmetic Operations.
*   **R. Lyla B. Das, "Microprocessors and Microcontrollers":** Provides a broad overview. Focus on sections pertaining to the 8051 instruction set, data transfer, and arithmetic instructions.
*   **I. Scott MacKenzie, Raphael C.-W. Phan, "The 8051 Microcontroller":** Offers in-depth examples and practical applications. May have specific routines or discussions on character conversions.
*   **Muhammad Ali Mazidi, "The 8051 Microcontroller and Embedded Systems":** A comprehensive resource. Likely has detailed explanations of data formats, character encoding, and various conversion algorithms with code examples. Look for chapters on assembly language programming and data manipulation.

This module provides a foundational understanding of data conversion, essential for building interactive embedded systems with the 8051 microcontroller.