---
title: "Number Systems and Codes – binary, octal and hexadecimal – conversions – ASCII code, Excess – 3 code, Gray code, BCD code Signed numbers – 1’s complement and 2’s complement – addition and subtraction"
subject: "DIGITAL ELECTRONICS"
module: "Module 1: Number Systems and Codes – binary, octal and hexadecimal – conversions – ASCII code, Excess – 3 code, Gray code, BCD code Signed numbers – 1’s complement and 2’s complement – addition and subtraction"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35e49"
status: "completed"
scrapedAt: "2026-05-23T16:15:48.342Z"
---
## DIGITAL ELECTRONICS - Module 1: Number Systems and Codes

This module introduces the fundamental building blocks of digital systems: number systems and codes. Understanding these concepts is crucial for comprehending how digital devices represent and process information.

---

### 1. Introduction to Number Systems

Digital systems work with discrete values, typically represented by two distinct states: **ON (1)** and **OFF (0)**. This is the basis of the **binary number system**. We will explore other number systems commonly used in digital electronics and their interrelationships.

---

### 2. Number Systems

#### 2.1 Binary Number System (Base-2)

*   **Definition:** A number system that uses only two digits, 0 and 1.
*   **Positional Value:** Each digit's position represents a power of 2, starting from $2^0$ for the rightmost digit (Least Significant Bit - LSB).
*   **Representation:** $(b_n b_{n-1} ... b_1 b_0)_2$, where $b_i$ is either 0 or 1.
*   **Example:** $(1011)_2 = 1 \times 2^3 + 0 \times 2^2 + 1 \times 2^1 + 1 \times 2^0 = 8 + 0 + 2 + 1 = (11)_{10}$

#### 2.2 Octal Number System (Base-8)

*   **Definition:** A number system that uses eight digits: 0, 1, 2, 3, 4, 5, 6, 7.
*   **Positional Value:** Each digit's position represents a power of 8.
*   **Representation:** $(o_n o_{n-1} ... o_1 o_0)_8$, where $o_i$ is a digit from 0 to 7.
*   **Example:** $(274)_8 = 2 \times 8^2 + 7 \times 8^1 + 4 \times 8^0 = 2 \times 64 + 7 \times 8 + 4 \times 1 = 128 + 56 + 4 = (188)_{10}$

#### 2.3 Decimal Number System (Base-10)

*   **Definition:** The number system we use in everyday life, with ten digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9.
*   **Positional Value:** Each digit's position represents a power of 10.
*   **Representation:** $(d_n d_{n-1} ... d_1 d_0)_{10}$, where $d_i$ is a digit from 0 to 9.
*   **Example:** $(188)_{10} = 1 \times 10^2 + 8 \times 10^1 + 8 \times 10^0 = 100 + 80 + 8 = (188)_{10}$

#### 2.4 Hexadecimal Number System (Base-16)

*   **Definition:** A number system that uses sixteen digits: 0-9 and A, B, C, D, E, F, where A=10, B=11, C=12, D=13, E=14, F=15.
*   **Positional Value:** Each digit's position represents a power of 16.
*   **Representation:** $(h_n h_{n-1} ... h_1 h_0)_{16}$, where $h_i$ is a digit from 0 to F.
*   **Example:** $(A5F)_{16} = A \times 16^2 + 5 \times 16^1 + F \times 16^0 = 10 \times 256 + 5 \times 16 + 15 \times 1 = 2560 + 80 + 15 = (2655)_{10}$

---

### 3. Conversions Between Number Systems

Understanding how to convert numbers between these systems is fundamental.

#### 3.1 Decimal to Other Bases

**Method: Repeated Division by the Base**

Divide the decimal number by the target base. The remainders, read from bottom to top, form the number in the new base.

*   **Decimal to Binary:**
    *   **Example:** Convert $(45)_{10}$ to binary.
        ```
        45 / 2 = 22 R 1
        22 / 2 = 11 R 0
        11 / 2 =  5 R 1
         5 / 2 =  2 R 1
         2 / 2 =  1 R 0
         1 / 2 =  0 R 1
        ```
        Result: $(101101)_2$

*   **Decimal to Octal:**
    *   **Example:** Convert $(188)_{10}$ to octal.
        ```
        188 / 8 = 23 R 4
         23 / 8 =  2 R 7
          2 / 8 =  0 R 2
        ```
        Result: $(274)_8$

*   **Decimal to Hexadecimal:**
    *   **Example:** Convert $(2655)_{10}$ to hexadecimal.
        ```
        2655 / 16 = 165 R 15 (F)
         165 / 16 =  10 R  5 (5)
          10 / 16 =   0 R 10 (A)
        ```
        Result: $(A5F)_{16}$

#### 3.2 Other Bases to Decimal

**Method: Sum of Positional Values**

Multiply each digit by its corresponding positional value (power of the base) and sum the results.

*   **Binary to Decimal:** (Already shown in 2.1)
*   **Octal to Decimal:** (Already shown in 2.2)
*   **Hexadecimal to Decimal:** (Already shown in 2.4)

#### 3.3 Binary to Octal and Hexadecimal

**Key Insight:**
*   3 binary digits (bits) can represent 8 different values (000 to 111), which is exactly what an octal digit represents.
*   4 binary digits (bits) can represent 16 different values (0000 to 1111), which is exactly what a hexadecimal digit represents.

**Method:** Group binary digits into groups of 3 (for octal) or 4 (for hexadecimal) starting from the LSB, padding with leading zeros if necessary. Convert each group to its corresponding octal or hexadecimal digit.

*   **Binary to Octal:**
    *   **Example:** Convert $(10110110)_2$ to octal.
        Group: `010 110 110`
        Convert: `2   6   6`
        Result: $(266)_8$

*   **Binary to Hexadecimal:**
    *   **Example:** Convert $(10110110)_2$ to hexadecimal.
        Group: `1011 0110`
        Convert: `B    6`
        Result: $(B6)_{16}$

#### 3.4 Octal and Hexadecimal to Binary

**Method:** Convert each octal or hexadecimal digit individually to its 3-bit binary equivalent (for octal) or 4-bit binary equivalent (for hexadecimal).

*   **Octal to Binary:**
    *   **Example:** Convert $(274)_8$ to binary.
        `2` -> `010`
        `7` -> `111`
        `4` -> `100`
        Result: $(010111100)_2 = (10111100)_2$ (leading zero removed)

*   **Hexadecimal to Binary:**
    *   **Example:** Convert $(A5F)_{16}$ to binary.
        `A` -> `1010`
        `5` -> `0101`
        `F` -> `1111`
        Result: $(101001011111)_2$

---

### 4. Binary Coded Decimal (BCD)

*   **Definition:** A coding system where each decimal digit (0-9) is represented by its equivalent 4-bit binary number.
*   **Purpose:** Useful for displaying decimal numbers directly in digital systems, as it avoids the need for complex conversions when interfacing with decimal displays.
*   **Representation:** Each decimal digit is independently encoded.
*   **Example:**
    *   Decimal `3` -> Binary `0011`
    *   Decimal `9` -> Binary `1001`
    *   Decimal `45` -> BCD `0100 0101`
*   **Standard BCD (8421 BCD):** The most common form, where the binary weights are 8, 4, 2, and 1.
*   **Invalid BCD Combinations:** The 4-bit binary combinations from 1010 (10) to 1111 (15) are invalid in BCD as they do not represent any decimal digit.

**(Refer to Floyd T.L, Chapter 1 for detailed examples of BCD encoding and conversions.)**

---

### 5. Other Binary Codes

#### 5.1 Excess-3 Code

*   **Definition:** A non-weighted, self-complementing BCD code. Each decimal digit is represented by its 4-bit binary equivalent plus 3 (0011).
*   **Properties:**
    *   **Non-weighted:** The positional values are not directly used for conversion.
    *   **Self-complementing:** The 9's complement of a decimal digit can be found by taking the 1's complement of its Excess-3 code.
*   **Encoding:** Add 3 to the standard binary representation of each decimal digit.
*   **Example:**
    *   Decimal `0` -> Binary `0000` -> Add 3 -> `0011` (Excess-3)
    *   Decimal `5` -> Binary `0101` -> Add 3 -> `1000` (Excess-3)
    *   Decimal `9` -> Binary `1001` -> Add 3 -> `1100` (Excess-3)
*   **Self-Complementing Example:**
    *   Decimal `3` is `0110` in Excess-3.
    *   Decimal `6` is `1001` in Excess-3.
    *   The 1's complement of `0110` is `1001`, which is the Excess-3 code for `6`. And `3 + 6 = 9`.

**(Refer to Albert Paul Malvino & Donald P. Leach, Chapter 1 for detailed explanations and examples of Excess-3 code.)**

#### 5.2 Gray Code (Reflected Binary Code)

*   **Definition:** A binary code where two successive values differ by only one bit.
*   **Purpose:** Useful in applications where transitions between states need to be unambiguous, such as in rotary encoders, error detection, and Karnaugh maps.
*   **Properties:**
    *   **Adjacent code difference:** Only one bit changes between consecutive codes.
    *   **No specific weighting:** Not directly a weighted code like BCD.
*   **Conversion from Binary to Gray Code:**
    *   The most significant bit (MSB) of the Gray code is the same as the MSB of the binary code.
    *   For subsequent bits, the Gray code bit is the XOR of the corresponding binary bit and the binary bit to its left (the next more significant bit).
    *   **Formula:** $G_i = B_i \oplus B_{i+1}$ (where $B_{n+1}$ is assumed to be 0).
*   **Example:** Convert Binary `1011` to Gray Code.
    ```
    Binary:  1  0  1  1
    Gray:    1  (1 XOR 0) (0 XOR 1) (1 XOR 1)
             1  1  1  0
    ```
    Gray Code: `1110`

*   **Conversion from Gray Code to Binary:**
    *   The MSB of the binary code is the same as the MSB of the Gray code.
    *   For subsequent bits, the binary bit is the XOR of the current Gray code bit and the previously calculated binary bit.
    *   **Formula:** $B_i = G_i \oplus B_{i+1}$ (where $B_{n+1}$ is assumed to be 0).
*   **Example:** Convert Gray Code `1110` to Binary.
    ```
    Gray:    1  1  1  0
    Binary:  1  (1 XOR 1) (1 XOR 0) (0 XOR 0)
             1  0  1  0
    ```
    Binary: `1010`

**(Refer to M. Morris Mano, Michael D. Ciletti, Chapter 1 for detailed explanations of Gray code and its applications.)**

#### 5.3 ASCII Code (American Standard Code for Information Interchange)

*   **Definition:** A character encoding standard used for electronic communication and computing. It represents text characters, such as letters, numbers, and punctuation marks, as numbers.
*   **Representation:** Typically uses 7 or 8 bits per character.
    *   **7-bit ASCII:** Represents 128 characters (uppercase and lowercase English letters, numbers 0-9, punctuation, and control characters).
    *   **8-bit ASCII (Extended ASCII):** Extends the 7-bit ASCII to 256 characters, including additional symbols, graphics characters, and characters from other languages.
*   **Purpose:** To standardize the representation of characters across different computer systems and devices, enabling data exchange.
*   **Example:**
    *   'A' (uppercase) is represented as `1000001` in 7-bit ASCII.
    *   'a' (lowercase) is represented as `1100001` in 7-bit ASCII.
    *   '0' (digit) is represented as `0111000` in 7-bit ASCII.
*   **Parity Bit:** The 8th bit in 8-bit ASCII can be used as a parity bit for error detection.

**(Refer to Digital Fundamentals by Floyd T.L, Chapter 1 for tables of ASCII characters and their binary representations.)**

---

### 6. Signed Numbers

In digital systems, numbers can be positive or negative. We need specific representations to handle the sign.

#### 6.1 Sign-Magnitude Representation

*   **Concept:** The most significant bit (MSB) is used to indicate the sign. Typically, `0` represents positive, and `1` represents negative. The remaining bits represent the magnitude of the number.
*   **Example:** For 4-bit representation:
    *   `+5` -> `0101` (0 for positive, 101 for magnitude 5)
    *   `-5` -> `1101` (1 for negative, 101 for magnitude 5)
*   **Drawbacks:**
    *   Two representations for zero (`+0` and `-0`).
    *   Arithmetic operations (addition/subtraction) are more complex due to the sign bit.

#### 6.2 One's Complement Representation

*   **Concept:** To represent a negative number, take the 1's complement (invert all bits) of its positive counterpart.
*   **Example:** For 4-bit representation:
    *   `+5` -> `0101`
    *   `-5` -> Invert `0101` -> `1010`
*   **Drawbacks:**
    *   Two representations for zero (`+0` is `0000`, `-0` is `1111`).
    *   Arithmetic operations are still somewhat complex, requiring an "end-around carry".

#### 6.3 Two's Complement Representation

*   **Concept:** The most widely used method for representing signed numbers in digital computers.
*   **How to find:**
    1.  **Positive numbers:** Represented in their standard binary form, with the MSB as 0.
    2.  **Negative numbers:**
        *   **Method 1:** Take the 1's complement of the positive number and add 1.
        *   **Method 2:** For an n-bit system, a negative number $-X$ is represented by $2^n - X$.
*   **Example:** For 4-bit representation:
    *   `+5` -> `0101`
    *   `-5`:
        *   Method 1: 1's complement of `0101` is `1010`. Add 1: `1010 + 1 = 1011`.
        *   Method 2: $2^4 - 5 = 16 - 5 = 11$. Binary of 11 is `1011`.
        So, `-5` is `1011`.
*   **Advantages:**
    *   Only one representation for zero (`0000`).
    *   Arithmetic operations (addition and subtraction) are simplified and can be performed using the same hardware circuits designed for unsigned addition.

**(Refer to Albert Paul Malvino & Donald P. Leach, Chapter 1 for comprehensive coverage of signed number representations and their properties.)**

---

### 7. Addition and Subtraction with Signed Numbers

Two's complement makes arithmetic operations much simpler.

#### 7.1 Addition in Two's Complement

*   **Rule:** Add the numbers as if they were unsigned. Discard any carry-out from the MSB.
*   **Example 1:** Add `+5` and `+3` (4-bit)
    ```
      0101  (+5)
    + 0011  (+3)
    ------
      1000  (+8)  (Discard carry-out)
    ```
*   **Example 2:** Add `+5` and `-3` (4-bit)
    *   `+5` is `0101`
    *   `-3` (1's complement of `0011` is `1100`, add 1) is `1101`
    ```
      0101  (+5)
    + 1101  (-3)
    ------
     10010
    ```
    Discard the carry-out from the MSB: `0010`. This is `+2`, which is correct (`+5 + (-3) = +2`).

*   **Example 3:** Add `-5` and `-3` (4-bit)
    *   `-5` is `1011`
    *   `-3` is `1101`
    ```
      1011  (-5)
    + 1101  (-3)
    ------
     11000
    ```
    Discard the carry-out from the MSB: `1000`. This is `-8` in 4-bit two's complement (1's complement of `1000` is `0111`, add 1 is `1000`. Positive 8 is `1000`, so `1000` is -8). This is correct (`-5 + (-3) = -8`).

#### 7.2 Subtraction in Two's Complement

*   **Rule:** To subtract $B$ from $A$ ($A - B$), convert $B$ to its two's complement form and add it to $A$.
    *   $A - B = A + (-B)$
*   **Example 1:** Subtract `+3` from `+5` (4-bit)
    *   $A = +5$ (`0101`)
    *   $B = +3$ (`0011`)
    *   $-B$ (two's complement of `0011`) is `1101`.
    ```
      0101  (+5)
    + 1101  (-3)
    ------
     10010
    ```
    Discard carry-out: `0010` (`+2`). Correct (`+5 - (+3) = +2`).

*   **Example 2:** Subtract `+5` from `+3` (4-bit)
    *   $A = +3$ (`0011`)
    *   $B = +5$ (`0101`)
    *   $-B$ (two's complement of `0101`) is `1011`.
    ```
      0011  (+3)
    + 1011  (-5)
    ------
     1110
    ```
    Result is `1110`. This is `-2` in 4-bit two's complement. Correct (`+3 - (+5) = -2`).

#### 7.3 Overflow Detection in Two's Complement Arithmetic

*   **Overflow:** Occurs when the result of an arithmetic operation is too large to be represented within the given number of bits.
*   **Rule for Addition:** An overflow occurs if:
    *   You add two positive numbers and get a negative result.
    *   You add two negative numbers and get a positive result.
    *   You add a positive and a negative number, overflow is not possible.
*   **Detection using MSBs:**
    *   Add two positive numbers: If the MSB of the result is 1, overflow.
    *   Add two negative numbers: If the MSB of the result is 0, overflow.
*   **Example (4-bit):**
    *   `+7` + `+2`
        `0111` (+7)
      + `0010` (+2)
      ------
        `1001` (-7) - Overflow occurs because two positives resulted in a negative.

**(Refer to Digital Principles and Applications by Albert Paul Malvino & Donald P. Leach, Chapter 1 for detailed examples and proofs of overflow conditions.)**

---

### 8. Learning Outcomes Addressed

*   **Identify various number systems, binary codes and formulate digital functions using Boolean algebra. (CO1 - K2):** This module covers number systems (binary, octal, hex, decimal), BCD, Excess-3, Gray, ASCII codes, and signed number representations. Understanding these is foundational for Boolean algebra and digital function formulation.
*   **Explain the basic concepts of programming using Verilog HDL (Knowledge Level: K2):** Understanding number systems and codes is essential for specifying digital logic behavior in hardware description languages like Verilog. For example, data types in Verilog often handle binary representations.
*   **Describe the operation of various analog to digital and digital to analog conversion circuits. (Knowledge Level: K2):** Digital systems often interface with the analog world. Knowing how analog values are converted to digital binary representations (and vice-versa) requires a solid understanding of binary.

---

### 9. Important Points to Remember

*   **Base:** The base of a number system determines the number of unique digits it uses and the positional value of each digit (powers of the base).
*   **Conversions:** Mastering conversions between binary, octal, and hexadecimal is crucial due to their prevalence in digital electronics. The 3-bit and 4-bit grouping is a key shortcut.
*   **BCD:** Useful for decimal interfacing but not as efficient for arithmetic as pure binary.
*   **Excess-3:** Self-complementing property is its main advantage for certain arithmetic operations.
*   **Gray Code:** Its single-bit change property makes it ideal for applications sensitive to transitions.
*   **ASCII:** The standard for character representation in computing.
*   **Two's Complement:** The preferred method for signed number representation due to its simplified arithmetic.
*   **Overflow:** Always be mindful of potential overflows when performing arithmetic operations, especially with fixed-width representations.

---

### 10. Practice Questions & Exercises

**Section A: Conversions**

1.  Convert the following decimal numbers to binary, octal, and hexadecimal:
    a) 150
    b) 78
    c) 255

2.  Convert the following binary numbers to decimal, octal, and hexadecimal:
    a) 11010110
    b) 10001110
    c) 11111111

3.  Convert the following octal numbers to binary and decimal:
    a) 372
    b) 105
    c) 777

4.  Convert the following hexadecimal numbers to binary and decimal:
    a) A5
    b) F0
    c) 1B3

**Section B: Codes**

5.  Represent the decimal number 57 in:
    a) Standard BCD (8421)
    b) Excess-3 code

6.  Convert the following binary numbers to:
    a) Gray code: 110010
    b) BCD: 101101

7.  What is the ASCII code for the character 'C' (uppercase)? What about the character 'c' (lowercase)?

**Section C: Signed Numbers & Arithmetic**

8.  Represent the following numbers in 8-bit two's complement:
    a) +45
    b) -28
    c) -127

9.  Perform the following additions using 8-bit two's complement arithmetic:
    a) +45 + (+28)
    b) +45 + (-28)
    c) -45 + (-28)
    d) -45 + (+28)

10. Perform the following subtractions using 8-bit two's complement arithmetic:
    a) +45 - (+28)
    b) +28 - (+45)
    c) -45 - (-28)
    d) -28 - (-45)

11. Identify if an overflow occurs in the following 8-bit two's complement additions:
    a) +90 + (+70)
    b) -90 + (-70)
    c) +20 + (-50)

---

### 11. Answers to Practice Questions

1.  a) Binary: 10010110, Octal: 226, Hex: 96
    b) Binary: 1001110, Octal: 116, Hex: 4E
    c) Binary: 11111111, Octal: 377, Hex: FF

2.  a) Decimal: 214, Octal: 326, Hex: D6
    b) Decimal: 142, Octal: 216, Hex: 8E
    c) Decimal: 255, Octal: 377, Hex: FF

3.  a) Binary: 100110110, Decimal: 254
    b) Binary: 1000101, Decimal: 69
    c) Binary: 111111111, Decimal: 511

4.  a) Binary: 10100101, Decimal: 165
    b) Binary: 11110000, Decimal: 240
    c) Binary: 110110001, Decimal: 433

5.  a) 57 -> BCD: 0101 0111
    b) 57 -> 5: 0101 + 0011 = 1000; 7: 0111 + 0011 = 1010. Excess-3: 1000 1010

6.  a) Binary 110010 -> Gray: 101011 (1, 1^0=1, 0^0=0, 0^1=1, 1^0=1, 0^1=1)
    b) Binary 101101 -> BCD: 0001 0011 0101 (10=0001, 11=0010+1=0011, 01=0001+0000(no)=0001(mistake here, should be 01=0001, no add 3 here if it's BCD))
       **Correction for 6b:** To convert Binary to BCD, you first convert the binary number to decimal, and then convert each decimal digit to its BCD representation.
       Binary 101101 is decimal 45.
       Decimal 4 is 0100 in BCD.
       Decimal 5 is 0101 in BCD.
       So, 101101 (binary) = 45 (decimal) = 0100 0101 (BCD).

7.  'C': 1000011 (7-bit ASCII)
    'c': 1100001 (7-bit ASCII)

8.  a) +45 -> 00101101
    b) -28 -> 1's comp of 00011100 is 11100011, add 1 -> 11100100
    c) -127 -> 1's comp of 01111111 is 10000000, add 1 -> 10000001

9.  a) +45 + (+28) = +73
        00101101 (+45)
      + 00011100 (+28)
      ----------
        01001001 (+73)

    b) +45 + (-28) = +17
        00101101 (+45)
      + 11100100 (-28)
      ----------
      1 00010001 -> discard carry -> 00010001 (+17)

    c) -45 + (-28) = -73
        11010011 (-45)
      + 11100100 (-28)
      ----------
      1 10111011 -> discard carry -> 10111011 (-73)

    d) -45 + (+28) = -17
        11010011 (-45)
      + 00011100 (+28)
      ----------
        11101111 (-17)

10. a) +45 - (+28) = +17
        +45 + (-28) = 00101101 + 11100100 = 100010001 -> 00010001 (+17)

    b) +28 - (+45) = -17
        +28 + (-45) = 00011100 + 11010011 = 11101111 (-17)

    c) -45 - (-28) = -17
        -45 + (+28) = 11010011 + 00011100 = 11101111 (-17)

    d) -28 - (-45) = +17
        -28 + (+45) = 11100100 + 00101101 = 100010001 -> 00010001 (+17)

11. a) +90 + (+70) = +160. In 8-bit, +90 is 01011010, +70 is 01000110.
        01011010
      + 01000110
      ----------
      1 00010000 -> Result is 00010000. MSB is 0 (positive), but adding two positives should give a positive. The MSB of the result is 0, indicating a positive number, but the actual sum is greater than +127, causing the sign bit to flip and indicate a negative number. **Overflow occurs.**

    b) -90 + (-70) = -160. -90 is 10101110. -70 is 10111010.
        10101110
      + 10111010
      ----------
      1 01101000. The carry-out from MSB is discarded. The result is 01101000. This is a positive number, but adding two negatives should result in a negative. **Overflow occurs.**

    c) +20 + (-50) = -30. Adding a positive and a negative number does not cause overflow. **No overflow.**
