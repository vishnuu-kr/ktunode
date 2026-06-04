---
title: "Number Systems – Binary, Hexadecimal, grouping bits, Base conversion"
subject: "DIGITAL ELECTRONICS AND LOGIC DESIGN"
module: "Module 1: Introduction to digital Systems :"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ad42"
status: "completed"
scrapedAt: "2026-05-20T16:23:40.772Z"
---
## DIGITAL ELECTRONICS AND LOGIC DESIGN: Module 1 - Number Systems

**Module 1: Introduction to Digital Systems**
**Topic: Number Systems – Binary, Hexadecimal, grouping bits, Base conversion**

**Learning Outcomes:**

*   Understand the concept of different number systems used in digital electronics.
*   Define and describe the Binary number system.
*   Define and describe the Hexadecimal number system.
*   Learn to group bits for easier representation and manipulation.
*   Convert numbers between Binary, Decimal, and Hexadecimal systems.
*   Apply base conversion techniques in practical scenarios.

---

### 1. Introduction to Number Systems

*   **Definition:** A number system is a mathematical notation for representing numbers using a set of symbols (digits) and a base (radix).
*   **Base (Radix):**  The number of unique digits used to represent numbers in a number system.  For example, the decimal system (base-10) uses 10 digits (0-9).
*   **Positional Value:** The value of a digit depends on its position within the number.  Each position represents a power of the base.
*   **Common Number Systems in Digital Electronics:**
    *   **Binary (Base-2):**  Uses 2 digits: 0 and 1.  Fundamental to digital systems.
    *   **Decimal (Base-10):**  Uses 10 digits: 0-9.  The system humans generally use.
    *   **Hexadecimal (Base-16):** Uses 16 digits: 0-9 and A-F.  Convenient shorthand for binary numbers.
    *   **Octal (Base-8):** Uses 8 digits: 0-7.  Less common than hexadecimal but still used sometimes.

### 2. Binary Number System (Base-2)

*   **Definition:** A number system that uses only two digits, 0 and 1, to represent numbers.
*   **Bits:** Each digit in a binary number is called a bit (binary digit).
*   **LSB (Least Significant Bit):** The rightmost bit in a binary number.  It has the smallest positional value (2<sup>0</sup>).
*   **MSB (Most Significant Bit):** The leftmost bit in a binary number.  It has the largest positional value (2<sup>n-1</sup>, where n is the number of bits).
*   **Positional Values:**  From right to left, the positional values are 2<sup>0</sup>, 2<sup>1</sup>, 2<sup>2</sup>, 2<sup>3</sup>, and so on.
*   **Example:** The binary number 1011 represents (1 x 2<sup>3</sup>) + (0 x 2<sup>2</sup>) + (1 x 2<sup>1</sup>) + (1 x 2<sup>0</sup>) = 8 + 0 + 2 + 1 = 11 in decimal.

### 3. Hexadecimal Number System (Base-16)

*   **Definition:** A number system that uses 16 digits: 0-9 and A-F, where A=10, B=11, C=12, D=13, E=14, and F=15.
*   **Positional Values:**  From right to left, the positional values are 16<sup>0</sup>, 16<sup>1</sup>, 16<sup>2</sup>, 16<sup>3</sup>, and so on.
*   **Usefulness:**  Hexadecimal is used as a shorthand for representing binary numbers because each hexadecimal digit can be represented by exactly 4 bits.
*   **Example:** The hexadecimal number 2A represents (2 x 16<sup>1</sup>) + (10 x 16<sup>0</sup>) = 32 + 10 = 42 in decimal.

### 4. Grouping Bits

*   **Purpose:** To make long binary numbers more manageable and easier to read.
*   **Grouping for Hexadecimal:** Binary numbers are often grouped into sets of 4 bits, starting from the rightmost bit. Each group of 4 bits can then be directly translated into a hexadecimal digit.
*   **Example:** The binary number 1101011010 can be grouped as 11 0101 1010.  Padding with leading zeros if necessary, becomes 0011 0101 1010.  Converting each group:
    *   0011 = 3
    *   0101 = 5
    *   1010 = A
    *   Therefore, the hexadecimal equivalent is 35A.
*   **Grouping for Octal:** Binary numbers are grouped into sets of 3 bits, starting from the rightmost bit.  Each group of 3 bits can then be directly translated into an octal digit.

### 5. Base Conversion

*   **Decimal to Binary:**
    *   **Method:** Repeatedly divide the decimal number by 2. The remainders, read in reverse order, form the binary equivalent.
    *   **Example:** Convert 25 to binary:
        *   25 / 2 = 12 remainder 1
        *   12 / 2 = 6  remainder 0
        *   6 / 2  = 3  remainder 0
        *   3 / 2  = 1  remainder 1
        *   1 / 2  = 0  remainder 1
        *   Binary equivalent: 11001
*   **Binary to Decimal:**
    *   **Method:** Multiply each bit by its positional value (power of 2) and sum the results.
    *   **Example:** Convert 10110 to decimal:
        *   (1 x 2<sup>4</sup>) + (0 x 2<sup>3</sup>) + (1 x 2<sup>2</sup>) + (1 x 2<sup>1</sup>) + (0 x 2<sup>0</sup>) = 16 + 0 + 4 + 2 + 0 = 22
*   **Decimal to Hexadecimal:**
    *   **Method:** Repeatedly divide the decimal number by 16.  The remainders, read in reverse order, form the hexadecimal equivalent. Convert remainders 10-15 to A-F.
    *   **Example:** Convert 42 to hexadecimal:
        *   42 / 16 = 2 remainder 10 (A)
        *   2 / 16 = 0 remainder 2
        *   Hexadecimal equivalent: 2A
*   **Hexadecimal to Decimal:**
    *   **Method:** Multiply each digit by its positional value (power of 16) and sum the results.  Convert A-F to their decimal equivalents (10-15).
    *   **Example:** Convert 3F to decimal:
        *   (3 x 16<sup>1</sup>) + (15 x 16<sup>0</sup>) = 48 + 15 = 63
*   **Binary to Hexadecimal:**
    *   **Method:** Group the binary number into sets of 4 bits (from right to left).  Convert each group to its hexadecimal equivalent.
    *   **Example:** Convert 11110010 to hexadecimal:
        *   1111 0010
        *   F    2
        *   Hexadecimal equivalent: F2
*   **Hexadecimal to Binary:**
    *   **Method:** Convert each hexadecimal digit to its 4-bit binary equivalent.
    *   **Example:** Convert A5 to binary:
        *   A = 1010
        *   5 = 0101
        *   Binary equivalent: 10100101

### 6. Practice Questions/Exercises

1.  **Convert the following decimal numbers to binary:**
    *   a) 17
    *   b) 55
    *   c) 128

2.  **Convert the following binary numbers to decimal:**
    *   a) 1101
    *   b) 101010
    *   c) 11111111

3.  **Convert the following decimal numbers to hexadecimal:**
    *   a) 31
    *   b) 255
    *   c) 4096

4.  **Convert the following hexadecimal numbers to decimal:**
    *   a) 1A
    *   b) FF
    *   c) 100

5.  **Convert the following binary numbers to hexadecimal:**
    *   a) 10101111
    *   b) 00110011
    *   c) 111100001111

6.  **Convert the following hexadecimal numbers to binary:**
    *   a) 2B
    *   b) CD
    *   c) F0

**Answers:**

1.  a) 10001, b) 110111, c) 10000000
2.  a) 13, b) 42, c) 255
3.  a) 1F, b) FF, c) 1000
4.  a) 26, b) 255, c) 256
5.  a) AF, b) 33, c) F0F
6.  a) 00101011, b) 11001101, c) 11110000

### 7. Important Points to Remember

*   Understand the base of each number system.  This determines the positional values.
*   Practice base conversion regularly to become proficient.
*   Hexadecimal is a useful shorthand for representing binary data.
*   Grouping bits simplifies working with large binary numbers.
*   Remember the decimal equivalents of A-F in hexadecimal (10-15).
*   Pay close attention to the order of remainders when converting from decimal to other bases.
*   MSB and LSB are fundamental concepts for understanding digital logic.
