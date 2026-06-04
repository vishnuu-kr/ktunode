---
title: "Decimal to ASCII"
subject: "MICROPROCESSORS AND EMBEDDED SYSTEMS LAB"
module: "Module 9: Demo experiment using 8051 Microcontroller programming."
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f36501"
status: "completed"
scrapedAt: "2026-05-23T16:23:15.695Z"
---
## MICROPROCESSORS AND EMBEDDED SYSTEMS LAB

### Module 9: Demo Experiment using 8051 Microcontroller Programming

### Topic: Decimal to ASCII Conversion

---

### 1. Introduction to Decimal to ASCII Conversion

**Purpose:**
In embedded systems, numerical data often needs to be displayed on output devices like LCDs or transmitted serially. These devices typically work with ASCII characters. Therefore, converting a decimal number (represented internally in binary) into its ASCII equivalent is a fundamental operation.

**Definition:**
*   **Decimal Number:** A number represented in base-10, using digits 0-9. In the 8051, decimal numbers are usually stored in registers or memory as binary-coded binary (BCB) or simply as their binary representation.
*   **ASCII (American Standard Code for Information Interchange):** A character encoding standard that represents text in computers and other electronic devices. Each character is assigned a unique numerical code. For digits '0' through '9', their ASCII codes are consecutive.

**Why convert Decimal to ASCII?**
*   **Display on Character-Based Displays:** LCDs, serial terminals, etc., expect characters. A decimal number like 123 needs to be converted into the ASCII characters '1', '2', and '3' before it can be displayed.
*   **Serial Communication:** When sending numerical data over serial interfaces (like UART), it's often transmitted as a stream of ASCII characters.

**Key Concept:**
The ASCII codes for the decimal digits '0' through '9' are contiguous.
*   ASCII for '0' = 30h (Decimal 48)
*   ASCII for '1' = 31h (Decimal 49)
*   ...
*   ASCII for '9' = 39h (Decimal 57)

To convert a decimal digit (0-9) to its ASCII equivalent, we simply add the ASCII value of '0' (which is 30h or 48 decimal) to the decimal digit.

---

### 2. Learning Outcomes Covered

This topic directly addresses the following learning outcomes:

*   **Develop and execute ALP programs for solving arithmetic and logical problems using microcontroller (CO1, K3):** The conversion process involves arithmetic operations (addition) and logical manipulation of data, which are core to developing ALP programs.
*   **Develop embedded C programming using instruction sets of 8051 (CO2, K3):** The principles of decimal to ASCII conversion can be implemented using both Assembly Language Programs (ALP) and Embedded C, demonstrating the application of instruction sets.
*   **(Implicitly) Examine circuits for interfacing processor with various peripheral devices (CO3, K4):** While the conversion itself is a software task, it's a prerequisite for displaying data on peripherals like LCDs, thus indirectly supporting the understanding of interfacing.
*   **(Implicitly) Design a microcontroller based system with the help of various interfacing devices (CO4, K6):** A system that needs to display numerical data will require this conversion, contributing to the overall system design.

---

### 3. Core Concepts and Definitions

**3.1. Number Representation in 8051:**

*   **Binary:** The 8051, like all microcontrollers, internally operates on binary numbers. An 8-bit register can hold values from 00h to FFh (0 to 255 decimal).
*   **BCD (Binary Coded Decimal):** In some contexts, decimal numbers might be stored in BCD format, where each nibble (4 bits) represents a decimal digit. For example, 123 decimal could be stored as 12h 3h (or 01h 02h 03h if using multiple bytes). The conversion process might differ slightly depending on the initial format. For this topic, we assume the input is a standard binary representation of a number (e.g., a byte holding the value 75, which is 4Bh in hex).

**3.2. ASCII Codes for Digits:**

| Decimal Digit | Binary Value | Hex ASCII | Decimal ASCII | Character |
| :------------ | :----------- | :-------- | :------------ | :-------- |
| 0             | 0000 0000    | 30h       | 48            | '0'       |
| 1             | 0000 0001    | 31h       | 49            | '1'       |
| 2             | 0000 0010    | 32h       | 50            | '2'       |
| 3             | 0000 0011    | 33h       | 51            | '3'       |
| 4             | 0000 0100    | 34h       | 52            | '4'       |
| 5             | 0000 0101    | 35h       | 53            | '5'       |
| 6             | 0000 0110    | 36h       | 54            | '6'       |
| 7             | 0000 0111    | 37h       | 55            | '7'       |
| 8             | 0000 1000    | 38h       | 56            | '8'       |
| 9             | 0000 1001    | 39h       | 57            | '9'       |

**3.3. The Conversion Algorithm:**

The core idea is to separate the decimal number into its decimal digits (units, tens, hundreds, etc.) and then convert each digit to its ASCII character representation.

**For a single-digit number (0-9):**
1.  Take the decimal digit.
2.  Add 30h (ASCII for '0') to it.
3.  The result is the ASCII character for that digit.

**Example:** Convert decimal 7 to ASCII.
*   Decimal digit = 07h
*   ASCII for '0' = 30h
*   ASCII for '7' = 07h + 30h = 37h (which is the ASCII code for '7')

**For a two-digit number (e.g., 75):**
This is more complex. We need to extract the '7' (tens place) and '5' (units place).

**Method 1: Using Division and Remainder (if the number is within limits for 8-bit registers)**

*   **Step 1: Extract the Tens Digit:**
    *   Divide the number by 10. The quotient is the tens digit.
    *   The remainder is the units digit.
*   **Step 2: Convert to ASCII:**
    *   Add 30h to the tens digit quotient to get its ASCII representation.
    *   Add 30h to the units digit remainder to get its ASCII representation.

**Example: Convert decimal 75 to ASCII**

Let the number be stored in register `A`. `A = 75` (decimal) or `4Bh` (hex).

**Algorithm Breakdown:**

1.  **Tens Digit:**
    *   `75 / 10 = 7` (quotient)
    *   `75 % 10 = 5` (remainder)
2.  **Convert to ASCII:**
    *   Tens Digit ASCII: `7 + 30h = 37h` (ASCII for '7')
    *   Units Digit ASCII: `5 + 30h = 35h` (ASCII for '5')

The resulting ASCII characters would be '7' followed by '5'.

**Challenges with direct division in 8051 ALP:**
The 8051 does not have a direct `DIV` instruction. Division by 10 typically requires a subroutine. This makes the process more involved in Assembly.

**Method 2: Subtraction (for 2-digit numbers)**

This method is often preferred in 8051 Assembly for converting 2-digit numbers (00-99) to ASCII without a dedicated division routine.

*   **Step 1: Initialize:**
    *   Assume the decimal number (e.g., 75) is in a register, say `R0`.
    *   Assume the ASCII for '0' (30h) is in a register, say `R1`.
    *   We need two memory locations (or registers) to store the resulting ASCII digits, say `ASCII_Tens` and `ASCII_Units`.
*   **Step 2: Extract Tens Digit:**
    *   Subtract 10 repeatedly from the number until it becomes less than 10. Count how many times you subtracted 10. This count is the tens digit.
    *   The remaining value is the units digit.
*   **Step 3: Convert to ASCII:**
    *   Add 30h to the tens digit count.
    *   Add 30h to the remaining units digit value.

**Example: Convert decimal 75 to ASCII using subtraction**

Assume `R0 = 75` (decimal). `R1 = 30h`.

1.  **Tens Digit Extraction:**
    *   `R0 = 75`. Is `R0 < 10`? No.
    *   Subtract 10 from `R0`. `R0 = 65`. Increment Tens Counter (e.g., `R2 = 1`).
    *   `R0 = 65`. Is `R0 < 10`? No.
    *   Subtract 10 from `R0`. `R0 = 55`. Increment Tens Counter (e.g., `R2 = 2`).
    *   ... (repeat until R0 < 10)
    *   Eventually, `R0` will become `5`.
    *   The Tens Counter (`R2`) will hold `7`.
2.  **ASCII Conversion:**
    *   Tens ASCII: `R2 (7) + R1 (30h) = 37h`
    *   Units ASCII: `R0 (5) + R1 (30h) = 35h`

**For numbers greater than 99:**
The process becomes iterative. For a 3-digit number, you'd extract hundreds, tens, and units digits using division/subtraction by 100 and then 10, or repeated subtraction by 10.

**Ayala's Approach (Chapter 10 - Data Conversion Routines):**
Kenneth Ayala's book provides comprehensive routines for decimal-to-ASCII conversion, often employing clever subtraction loops for efficiency. He might present a routine that takes a number in `A` and returns the ASCII characters in consecutive memory locations.

---

### 4. Examples and Implementations

Let's consider a practical scenario: converting a single-byte decimal number (0-99) into two ASCII characters and storing them in memory.

**4.1. Assembly Language Program (ALP) Example:**

**Objective:** Convert a number in register `A` (assume it's between 0 and 99) into two ASCII characters. The tens digit ASCII will be stored at `MEM_LOC_1` and the units digit ASCII at `MEM_LOC_2`.

```assembly
ORG 0000H
    MOV A, #75       ; Load the decimal number (75) into Accumulator A
    MOV R0, A        ; Copy to R0 for manipulation
    MOV R1, #30H     ; Load ASCII of '0' into R1

    ; --- Convert 2-digit number (0-99) to ASCII ---

    ; Routine to find tens digit and units digit
    ; Input: R0 = decimal number (0-99)
    ; Output: R2 = tens digit, R0 = units digit
    MOV R2, #00H     ; Initialize tens digit counter to 0
    LOOP_SUB:
        CJNE R0, #99H, CHECK_LIMIT ; If R0 is not 99, continue
        SJMP STORE_DIGITS        ; If R0 is 99, handle it separately (or as part of general logic)

    CHECK_LIMIT:
        MOV B, #10H      ; Load 10 decimal (0AH) into B
        SUBB A, B        ; Subtract 10 from A (R0)
        JC STORE_DIGITS  ; If the result is negative (borrow occurred), we are done with subtraction
        INC R2           ; Increment tens digit counter
        SJMP LOOP_SUB    ; Repeat subtraction

    STORE_DIGITS:
    ; At this point:
    ; R2 holds the tens digit (e.g., 7 for 75)
    ; R0 holds the units digit (e.g., 5 for 75)

    ; Convert tens digit to ASCII
    ADD A, R1        ; ASCII_Tens = R2 + 30H. We need to use R2, not A
    MOV A, R2        ; Load tens digit into A
    ADD A, R1        ; Convert tens digit to ASCII
    MOV MEM_LOC_1, A ; Store ASCII of tens digit

    ; Convert units digit to ASCII
    MOV A, R0        ; Load units digit into A
    ADD A, R1        ; Convert units digit to ASCII
    MOV MEM_LOC_2, A ; Store ASCII of units digit

    SJMP $          ; Infinite loop to halt execution

MEM_LOC_1:  DS 1    ; Reserve 1 byte for ASCII Tens
MEM_LOC_2:  DS 1    ; Reserve 1 byte for ASCII Units

END
```

**Explanation:**

*   `MOV A, #75`: Loads the decimal number 75 into the accumulator.
*   `MOV R0, A`: Copies 75 to `R0` to preserve the original value if needed, and `R0` will be modified.
*   `MOV R1, #30H`: Loads the ASCII value of '0' into `R1`. This is the base for conversion.
*   `MOV R2, #00H`: Initializes `R2` to zero. This register will count how many times we subtract 10. This count represents the tens digit.
*   `LOOP_SUB`: This loop repeatedly subtracts 10 from the number in `R0`.
*   `SUBB A, B`: Subtracts `B` (which is 10) from `A` (which is `R0`). `SUBB` is used as it also handles the borrow flag.
*   `JC STORE_DIGITS`: If a borrow occurs (`JC` - Jump on Carry), it means `R0` is now less than 10, so we've found our units digit. We jump to `STORE_DIGITS`.
*   `INC R2`: If no borrow occurred, it means we successfully subtracted 10. We increment the tens digit counter (`R2`).
*   `SJMP LOOP_SUB`: Continues the subtraction process.
*   `MOV A, R2`: After the loop, `R2` holds the tens digit. We move it to the accumulator.
*   `ADD A, R1`: Add 30h to the tens digit to get its ASCII representation.
*   `MOV MEM_LOC_1, A`: Store the ASCII tens digit in the first memory location.
*   `MOV A, R0`: Load the remaining value in `R0` (which is the units digit) into the accumulator.
*   `ADD A, R1`: Add 30h to the units digit to get its ASCII representation.
*   `MOV MEM_LOC_2, A`: Store the ASCII units digit in the second memory location.

**4.2. Embedded C Example:**

```c
#include <reg51.h> // Include the 8051 register definitions

// Function to convert a decimal number (0-99) to ASCII characters
// Returns the ASCII characters in a two-element array: [tens_ascii, units_ascii]
void decimalToAscii(unsigned char decimalNum, unsigned char *asciiTens, unsigned char *asciiUnits) {
    unsigned char tensDigit;
    unsigned char unitsDigit;
    unsigned char asciiOffset = 0x30; // ASCII value of '0'

    if (decimalNum >= 100) {
        // Handle numbers >= 100 if necessary (e.g., return error or take modulo)
        // For simplicity, we assume 0-99 for this example
        return;
    }

    tensDigit = decimalNum / 10;   // Integer division gives the tens digit
    unitsDigit = decimalNum % 10;  // Modulo gives the units digit

    *asciiTens = tensDigit + asciiOffset;   // Convert tens digit to ASCII
    *asciiUnits = unitsDigit + asciiOffset; // Convert units digit to ASCII
}

void main() {
    unsigned char myDecimalNumber = 75;
    unsigned char asciiTensResult;
    unsigned char asciiUnitsResult;

    decimalToAscii(myDecimalNumber, &asciiTensResult, &asciiUnitsResult);

    // Now asciiTensResult holds '7' (0x37)
    // And asciiUnitsResult holds '5' (0x35)

    // Example: Display on an LCD (requires LCD interfacing code)
    // lcd_init();
    // lcd_cmd(0x80); // Go to first line
    // lcd_data(asciiTensResult);
    // lcd_data(asciiUnitsResult);

    while (1) {
        // Infinite loop
    }
}
```

**Explanation:**

*   `#include <reg51.h>`: Includes the necessary header file for 8051 peripherals.
*   `decimalToAscii(unsigned char decimalNum, unsigned char *asciiTens, unsigned char *asciiUnits)`: This function takes the decimal number and pointers to store the resulting ASCII characters.
*   `unsigned char asciiOffset = 0x30;`: Defines the ASCII value of '0'.
*   `tensDigit = decimalNum / 10;`: C's integer division directly calculates the tens digit.
*   `unitsDigit = decimalNum % 10;`: C's modulo operator directly calculates the units digit.
*   `*asciiTens = tensDigit + asciiOffset;`: Adds the offset to the digit to get its ASCII value and stores it via the pointer.
*   The `main` function demonstrates how to call this function and what the expected results are. The commented-out section shows how you might use these results with an LCD.

---

### 5. Practice Questions and Exercises

**Question 1 (Conceptual):**
What is the ASCII value of the decimal digit '5' in hexadecimal?

**Answer 1:**
The ASCII value of '0' is 30h. The decimal digit '5' is 5. So, the ASCII value of '5' is 5 + 30h = 35h.

---

**Question 2 (ALP Logic):**
Suppose you have a number `N` in the 8051's accumulator `A`, and `N` is guaranteed to be between 0 and 9. Write down the Assembly instructions to convert `N` into its ASCII character representation and store it in memory location `ASCII_DIGIT`.

**Answer 2:**
```assembly
MOV A, N_VALUE      ; Assume N_VALUE is defined and holds the decimal digit (e.g., 7)
MOV R0, #30H        ; Load ASCII of '0'
ADD A, R0           ; Convert to ASCII
MOV ASCII_DIGIT, A  ; Store the ASCII character
```
*Self-check:* If `N_VALUE` is 7 (07h), `A` becomes `07h + 30h = 37h`, which is the ASCII for '7'.

---

**Question 3 (ALP Algorithm):**
Describe the main challenge in performing decimal-to-ASCII conversion for a two-digit number (e.g., 75) using only subtraction in 8051 ALP, compared to a hardware multiplier/divider.

**Answer 3:**
The main challenge is the absence of a direct division or multiplication instruction for arbitrary numbers in the 8051. To perform division by 10 (required for separating tens and units digits), one needs to implement a division routine, often using repeated subtraction, which is more time-consuming and requires more code than a single instruction. Subtraction for tens digit extraction is feasible but requires a loop and a counter.

---

**Question 4 (Embedded C Logic):**
If a variable `num` in Embedded C holds the decimal value 9, what will be the value of `num + 0x30`?

**Answer 4:**
`num` = 9 (decimal) = 0x09 (hex).
`0x30` is the ASCII value of '0'.
`num + 0x30` = `0x09 + 0x30` = `0x39` (hex).
`0x39` is the ASCII value for the character '9'.

---

**Question 5 (System Design - CO4):**
You are designing a system to measure temperature using a sensor and display it on a 16x2 LCD. The temperature sensor outputs a digital value (e.g., 25 for 25°C). Outline the steps involved in displaying "25" on the LCD, highlighting where the Decimal to ASCII conversion fits in.

**Answer 5:**
1.  **Read Temperature:** Interface with the temperature sensor and obtain the digital reading (e.g., 25 decimal).
2.  **Decimal to ASCII Conversion:**
    *   The raw reading (25) is a binary representation of the number.
    *   This binary value needs to be converted into its ASCII character equivalents: '2' and '5'.
    *   For 25:
        *   Tens digit: 2. ASCII of '2' = 2 + 30h = 32h.
        *   Units digit: 5. ASCII of '5' = 5 + 30h = 35h.
3.  **LCD Interfacing:**
    *   Initialize the LCD controller.
    *   Send the command to set the cursor position (e.g., first line, first character).
    *   Send the ASCII character for the tens digit ('2' or 32h) to the LCD.
    *   Send the ASCII character for the units digit ('5' or 35h) to the LCD.
4.  **Display Output:** The LCD will now display "25".

---

### 6. Important Points to Remember

*   **ASCII of '0' is 30h (48 decimal).** This is the fundamental offset for converting decimal digits to ASCII characters.
*   **The ASCII codes for digits '0'-'9' are contiguous.** This simplifies the conversion.
*   **To convert a single decimal digit `d` (0-9) to ASCII:** `ASCII_d = d + 30h`.
*   **For multi-digit numbers, you must first extract each digit.** This is the most complex part, especially in Assembly.
*   **For 2-digit numbers (0-99), common methods are division by 10 or repeated subtraction of 10.**
*   **8051 lacks a direct division instruction**, making subroutines necessary for division in ALP.
*   **Embedded C simplifies multi-digit extraction** with its built-in division (`/`) and modulo (`%`) operators.
*   **The output of the conversion is a sequence of ASCII characters**, ready to be sent to display devices or communication interfaces.
*   **Consider the range of the decimal number.** The conversion logic will differ for single-digit, double-digit, or larger numbers.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 7. Textbook and Reference Book Content Integration

This topic is a fundamental building block for many embedded systems applications discussed in the provided textbooks.

*   **Kenneth Ayala, "The 8051 Microcontroller":** Chapter 10 typically covers I/O programming and data conversion routines. The principles of converting numerical data to characters for display on an LCD or terminal are thoroughly explained. Ayala likely provides detailed assembly language routines for decimal-to-ASCII conversion, perhaps using subtraction loops for efficiency. The concept of treating numbers as character codes for output is central to his examples.
*   **R. LylaB.Das, "Microprocessors and Microcontrollers":** This text would also cover data conversion as part of input/output operations and common embedded system tasks. The necessity of translating internal binary representations into human-readable ASCII for peripherals like LEDs (when displaying numbers) or displays would be highlighted.
*   **I. Scott MacKenzie, Raphael C.-W. Phan, "The 8051 Microcontroller":** Similar to Ayala, this reference would cover interfacing and data manipulation. ASCII conversion is a prerequisite for displaying numerical sensor readings or counters on character displays, a common task in embedded systems.
*   **Muhammad Ali Mazidi, "The 8051 Microcontroller and Embedded Systems":** Mazidi's book is known for its practical examples and detailed coverage of 8051 programming. Expect extensive explanations and code examples for converting decimal numbers to ASCII, especially in the context of LCD interfacing and serial communication. He might also discuss different algorithms for division by 10 in Assembly.

The core idea of adding `30h` to each digit is a universal principle across all these texts when dealing with ASCII conversion for decimal digits. The complexity arises in how to *extract* those digits from a multi-digit binary number, and that's where the textbook examples will offer different algorithmic approaches.

---

This comprehensive set of notes covers the Decimal to ASCII conversion topic, aligning with the learning outcomes and course outcomes by explaining the underlying principles, providing practical examples in both Assembly and C, and highlighting its importance in the context of embedded systems.