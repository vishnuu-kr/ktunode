---
title: "Introduction to digital circuits: Review of number systems representation- conversions, Arithmetic of Binary number systems, Signed and unsigned numbers, BCD."
subject: "LOGIC CIRCUIT DESIGN"
module: "Module 1: Introduction to digital circuits: Review of number systems representation"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe31f"
status: "completed"
scrapedAt: "2026-05-23T17:46:08.598Z"
---
# Module 1: Introduction to Digital Circuits - Review of Number Systems and Representation

## 1.1 Introduction to Digital Circuits

**Objective:** To understand the fundamental building blocks of digital systems and the importance of number system representation.

**Key Concepts:**

*   **Analog vs. Digital Signals:**
    *   **Analog:** Continuous range of values, subject to noise and distortion. Examples: voice, temperature, light intensity.
    *   **Digital:** Discrete values, typically represented as binary (0s and 1s). Less susceptible to noise, easier to process and store. Examples: computers, smartphones, CDs.
*   **Binary System:** The foundation of digital electronics. Uses two distinct states:
    *   **0 (Low):** Represents "off," "false," "low voltage."
    *   **1 (High):** Represents "on," "true," "high voltage."
*   **Bits and Bytes:**
    *   **Bit:** The smallest unit of digital information (0 or 1).
    *   **Byte:** A group of 8 bits.
*   **Digital Systems:** Circuits designed to process and manipulate digital signals. They rely heavily on the binary number system.

**Importance of Number System Representation:**
Digital systems perform operations on data. This data is ultimately represented in binary. Understanding how to represent numbers in different systems and convert between them is crucial for designing and analyzing digital circuits.

**Alignment with Course Outcomes:**
*   **CO1 (K3):** Understanding number systems is fundamental to applying digital representation and Boolean algebra.

**References:**
*   *Digital Fundamentals* by Thomas L. Floyd (Chapter 1)
*   *Fundamentals of Digital Logic with Verilog Design* by Stephen Brown (Chapter 1)

---

## 1.2 Review of Number Systems

**Objective:** To understand the concepts of positional number systems and their bases, and to be able to convert numbers between different bases.

**Key Concepts:**

*   **Positional Number System:** The value of a digit depends on its position within the number. Each position represents a power of the base.
*   **Base (Radix):** The number of unique digits used in a number system.

### 1.2.1 Decimal Number System (Base-10)

*   **Digits:** 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
*   **Representation:** Each digit's value is the digit multiplied by $10^{\text{position}}$.
    *   Example: $123_{10} = 1 \times 10^2 + 2 \times 10^1 + 3 \times 10^0 = 100 + 20 + 3 = 123$

### 1.2.2 Binary Number System (Base-2)

*   **Digits:** 0, 1
*   **Representation:** Each digit's value is the digit multiplied by $2^{\text{position}}$.
    *   Example: $1011_2 = 1 \times 2^3 + 0 \times 2^2 + 1 \times 2^1 + 1 \times 2^0 = 8 + 0 + 2 + 1 = 11_{10}$
*   **Terminology:**
    *   **LSB (Least Significant Bit):** The rightmost bit, representing the smallest power of 2.
    *   **MSB (Most Significant Bit):** The leftmost bit, representing the largest power of 2.

### 1.2.3 Octal Number System (Base-8)

*   **Digits:** 0, 1, 2, 3, 4, 5, 6, 7
*   **Representation:** Each digit's value is the digit multiplied by $8^{\text{position}}$.
    *   Example: $25_8 = 2 \times 8^1 + 5 \times 8^0 = 16 + 5 = 21_{10}$

### 1.2.4 Hexadecimal Number System (Base-16)

*   **Digits:** 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F
    *   A = 10, B = 11, C = 12, D = 13, E = 14, F = 15
*   **Representation:** Each digit's value is the digit multiplied by $16^{\text{position}}$.
    *   Example: $A3_{16} = A \times 16^1 + 3 \times 16^0 = 10 \times 16 + 3 \times 1 = 160 + 3 = 163_{10}$

---

## 1.3 Conversions Between Number Systems

**Objective:** To master the techniques for converting numbers between decimal, binary, octal, and hexadecimal systems.

### 1.3.1 Decimal to Binary Conversion

**Method 1: Repeated Division by 2**

1.  Divide the decimal number by 2.
2.  Record the remainder.
3.  Use the quotient as the new number and repeat the process until the quotient is 0.
4.  The binary equivalent is obtained by reading the remainders from bottom to top.

    *   **Example:** Convert $25_{10}$ to binary.
        ```
        25 / 2 = 12 remainder 1 (LSB)
        12 / 2 =  6 remainder 0
         6 / 2 =  3 remainder 0
         3 / 2 =  1 remainder 1
         1 / 2 =  0 remainder 1 (MSB)
        ```
        So, $25_{10} = 11001_2$.

**Method 2: Sum of Powers of 2**

1.  Find the largest power of 2 that is less than or equal to the decimal number.
2.  Subtract this power of 2 from the number.
3.  Repeat the process with the remainder.
4.  Place a '1' in the binary position corresponding to the powers of 2 used and '0' in the other positions.

    *   **Example:** Convert $25_{10}$ to binary.
        *   Largest power of 2 $\le 25$ is $16$ ($2^4$).
        *   $25 - 16 = 9$.
        *   Largest power of 2 $\le 9$ is $8$ ($2^3$).
        *   $9 - 8 = 1$.
        *   Largest power of 2 $\le 1$ is $1$ ($2^0$).
        *   $1 - 1 = 0$.
        *   We used $2^4, 2^3, 2^0$.
        *   Binary representation: $2^4 2^3 2^2 2^1 2^0 \rightarrow 1\ 1\ 0\ 0\ 1_2$.
        *   So, $25_{10} = 11001_2$.

### 1.3.2 Binary to Decimal Conversion

*   Multiply each binary digit by its corresponding power of 2 and sum the results.

    *   **Example:** Convert $11001_2$ to decimal.
        $11001_2 = 1 \times 2^4 + 1 \times 2^3 + 0 \times 2^2 + 0 \times 2^1 + 1 \times 2^0 = 16 + 8 + 0 + 0 + 1 = 25_{10}$.

### 1.3.3 Decimal to Octal Conversion

**Method 1: Repeated Division by 8**
(Similar to decimal to binary, but divide by 8).

    *   **Example:** Convert $150_{10}$ to octal.
        ```
        150 / 8 = 18 remainder 6 (LSB)
         18 / 8 =  2 remainder 2
          2 / 8 =  0 remainder 2 (MSB)
        ```
        So, $150_{10} = 226_8$.

**Method 2: Using Binary Conversion**
1.  Convert the decimal number to binary.
2.  Group the binary bits into sets of three, starting from the LSB (add leading zeros if necessary).
3.  Convert each group of three bits to its octal equivalent.

    *   **Example:** Convert $150_{10}$ to octal.
        1.  $150_{10} = 10010110_2$ (from previous conversion or calculation).
        2.  Group into threes: `010 010 110` (added a leading zero).
        3.  Convert groups:
            *   $010_2 = 2_8$
            *   $010_2 = 2_8$
            *   $110_2 = 6_8$
        *   So, $150_{10} = 226_8$.

### 1.3.4 Octal to Decimal Conversion

*   Multiply each octal digit by its corresponding power of 8 and sum the results.

    *   **Example:** Convert $226_8$ to decimal.
        $226_8 = 2 \times 8^2 + 2 \times 8^1 + 6 \times 8^0 = 2 \times 64 + 2 \times 8 + 6 \times 1 = 128 + 16 + 6 = 150_{10}$.

### 1.3.5 Octal to Binary Conversion

*   Convert each octal digit to its 3-bit binary equivalent.

    *   **Example:** Convert $226_8$ to binary.
        *   $2_8 = 010_2$
        *   $2_8 = 010_2$
        *   $6_8 = 110_2$
        *   So, $226_8 = 010\ 010\ 110_2 = 10010110_2$.

### 1.3.6 Binary to Octal Conversion

*   Group the binary bits into sets of three from the LSB. Convert each group to its octal equivalent.

    *   **Example:** Convert $10010110_2$ to octal.
        1.  Group into threes: `10 010 110` (added a leading zero to the leftmost group: `010`).
        2.  Convert groups:
            *   $010_2 = 2_8$
            *   $010_2 = 2_8$
            *   $110_2 = 6_8$
        *   So, $10010110_2 = 226_8$.

### 1.3.7 Decimal to Hexadecimal Conversion

**Method 1: Repeated Division by 16**
(Similar to decimal to binary, but divide by 16. Remember to convert remainders > 9 to their hex characters).

    *   **Example:** Convert $275_{10}$ to hexadecimal.
        ```
        275 / 16 = 17 remainder 3 (LSB)
         17 / 16 =  1 remainder 1
          1 / 16 =  0 remainder 1 (MSB)
        ```
        So, $275_{10} = 113_{16}$.

    *   **Example 2:** Convert $427_{10}$ to hexadecimal.
        ```
        427 / 16 = 26 remainder 11 (B)
         26 / 16 =  1 remainder 10 (A)
          1 / 16 =  0 remainder 1 (MSB)
        ```
        So, $427_{10} = 1AB_{16}$.

**Method 2: Using Binary Conversion**
1.  Convert the decimal number to binary.
2.  Group the binary bits into sets of four, starting from the LSB (add leading zeros if necessary).
3.  Convert each group of four bits to its hexadecimal equivalent.

    *   **Example:** Convert $275_{10}$ to hexadecimal.
        1.  $275_{10} = 100010011_2$.
        2.  Group into fours: `0001 0011` (added leading zeros).
        3.  Convert groups:
            *   $0001_2 = 1_{16}$
            *   $0011_2 = 3_{16}$
        *   So, $275_{10} = 113_{16}$.

    *   **Example 2:** Convert $427_{10}$ to hexadecimal.
        1.  $427_{10} = 110101011_2$.
        2.  Group into fours: `0001 1010 1011` (added leading zeros).
        3.  Convert groups:
            *   $0001_2 = 1_{16}$
            *   $1010_2 = A_{16}$
            *   $1011_2 = B_{16}$
        *   So, $427_{10} = 1AB_{16}$.

### 1.3.8 Hexadecimal to Decimal Conversion

*   Multiply each hex digit by its corresponding power of 16 and sum the results.

    *   **Example:** Convert $1AB_{16}$ to decimal.
        $1AB_{16} = 1 \times 16^2 + A \times 16^1 + B \times 16^0 = 1 \times 256 + 10 \times 16 + 11 \times 1 = 256 + 160 + 11 = 427_{10}$.

### 1.3.9 Hexadecimal to Binary Conversion

*   Convert each hexadecimal digit to its 4-bit binary equivalent.

    *   **Example:** Convert $1AB_{16}$ to binary.
        *   $1_{16} = 0001_2$
        *   $A_{16} = 1010_2$
        *   $B_{16} = 1011_2$
        *   So, $1AB_{16} = 0001\ 1010\ 1011_2 = 110101011_2$.

### 1.3.10 Binary to Hexadecimal Conversion

*   Group the binary bits into sets of four from the LSB. Convert each group to its hexadecimal equivalent.

    *   **Example:** Convert $110101011_2$ to hexadecimal.
        1.  Group into fours: `0001 1010 1011` (added leading zeros).
        2.  Convert groups:
            *   $0001_2 = 1_{16}$
            *   $1010_2 = A_{16}$
            *   $1011_2 = B_{16}$
        *   So, $110101011_2 = 1AB_{16}$.

**Alignment with Course Outcomes:**
*   **CO1 (K3):** Essential for representing information and performing arithmetic in digital circuits.

**Important Points to Remember:**
*   The grouping for Octal-Binary conversion is 3 bits per digit.
*   The grouping for Hexadecimal-Binary conversion is 4 bits per digit.
*   These groupings are based on the relationship between bases: $8 = 2^3$ and $16 = 2^4$.
*   Always check your conversions by converting back to the original base.

**References:**
*   *Digital Fundamentals* by Thomas L. Floyd (Chapters 2 & 3)
*   *Fundamentals of Digital Logic with Verilog Design* by Stephen Brown (Chapter 1)
*   *Digital Design: With an Introduction to the Verilog HDL...* by M Morris Mano, Michael D. Ciletti (Chapter 1)

---

## 1.4 Arithmetic of Binary Number Systems

**Objective:** To understand how basic arithmetic operations (addition, subtraction) are performed in the binary system, mirroring decimal arithmetic.

### 1.4.1 Binary Addition

*   **Rules:**
    *   $0 + 0 = 0$
    *   $0 + 1 = 1$
    *   $1 + 0 = 1$
    *   $1 + 1 = 0$ with a carry of 1 to the next higher position ($1+1 = 10_2$)
    *   $1 + 1 + 1 = 1$ with a carry of 1 to the next higher position ($1+1+1 = 11_2$)

*   **Procedure:** Add column by column, from right to left (LSB to MSB), carrying over any 1s to the next column.

    *   **Example 1:** Add $1011_2 + 0110_2$
        ```
          1 0 1 1   (11 in decimal)
        + 0 1 1 0   ( 6 in decimal)
        -------
          1 0 0 0 1   (19 in decimal)

        Explanation:
        LSB: 1 + 0 = 1 (no carry)
        Next: 1 + 1 = 0, carry 1
        Next: 0 + 1 + carry(1) = 0, carry 1
        MSB: 1 + 0 + carry(1) = 0, carry 1
        Final Carry: 1
        Result: 10001 (which is 16 + 0 + 0 + 0 + 1 = 17. Oh, wait. 11+6 = 17. My example was wrong. Let's re-do the calculation.)
        ```
        Corrected Example 1: Add $1011_2 + 0110_2$
        ```
          1 0 1 1   (11 in decimal)
        + 0 1 1 0   ( 6 in decimal)
        -------
          1 0 0 0 1   (17 in decimal)

        Explanation:
        LSB: 1 + 0 = 1 (no carry)
        Next: 1 + 1 = 0, carry 1
        Next: 0 + 1 + carry(1) = 0, carry 1
        MSB: 1 + 0 + carry(1) = 0, carry 1
        Final Carry: 1
        Result: 10001 (1*16 + 0*8 + 0*4 + 0*2 + 1*1 = 17). Correct.
        ```

    *   **Example 2:** Add $1101_2 + 0111_2$
        ```
          1 1 0 1   (13 in decimal)
        + 0 1 1 1   ( 7 in decimal)
        -------
         1 0 1 0 0  (20 in decimal)

        Explanation:
        LSB: 1 + 1 = 0, carry 1
        Next: 0 + 1 + carry(1) = 0, carry 1
        Next: 1 + 1 + carry(1) = 1, carry 1
        MSB: 1 + 0 + carry(1) = 0, carry 1
        Final Carry: 1
        Result: 10100 (1*16 + 0*8 + 1*4 + 0*2 + 0*1 = 20). Correct.
        ```

### 1.4.2 Binary Subtraction

*   **Rules:**
    *   $0 - 0 = 0$
    *   $1 - 0 = 1$
    *   $1 - 1 = 0$
    *   $0 - 1 =$ Requires borrowing from the next significant position. When borrowing, the current position becomes 2 ( $10_2$ in binary). So, $10_2 - 1 = 1$.

*   **Procedure:** Subtract column by column, from right to left (LSB to MSB). If a 0 needs to be subtracted from a 1 (or vice-versa), borrow from the next left position. Borrowing '1' from a position makes that position's value 0 and adds 2 ($10_2$) to the current position.

    *   **Example 1:** Subtract $1101_2 - 0110_2$
        ```
          1 1 0 1   (13 in decimal)
        - 0 1 1 0   ( 6 in decimal)
        -------
          0 1 1 1   ( 7 in decimal)

        Explanation:
        LSB: 1 - 0 = 1 (no borrow)
        Next: 0 - 1. Need to borrow. Borrow from the next position (becomes 0). Current position becomes $10_2$. $10_2 - 1 = 1$.
        Next: Previous 0 - 1. Need to borrow. Borrow from the MSB position (becomes 0). Current position becomes $10_2$. $10_2 - 1 = 1$.
        MSB: Previous 0 - 0 = 0.
        Result: 0111 (which is 7). Correct.
        ```

    *   **Example 2:** Subtract $1010_2 - 0111_2$
        ```
          1 0 1 0   (10 in decimal)
        - 0 1 1 1   ( 7 in decimal)
        -------
          0 0 1 1   ( 3 in decimal)

        Explanation:
        LSB: 0 - 1. Need to borrow. Borrow from the next position (becomes 0). Current position becomes $10_2$. $10_2 - 1 = 1$.
        Next: Previous 0 - 1. Need to borrow. Borrow from the MSB position (becomes 0). Current position becomes $10_2$. $10_2 - 1 = 1$.
        MSB: Previous 0 - 0 = 0.
        Result: 0011 (which is 3). Correct.
        ```

### 1.4.3 Binary Multiplication

*   **Rules:** Similar to decimal multiplication, using only 0s and 1s.
    *   $0 \times 0 = 0$
    *   $0 \times 1 = 0$
    *   $1 \times 0 = 0$
    *   $1 \times 1 = 1$
*   **Procedure:**
    1.  Perform partial products. If the multiplier bit is 1, write the multiplicand. If it's 0, write 0s. Shift each subsequent partial product one position to the left.
    2.  Add all the partial products.

    *   **Example:** Multiply $110_2 \times 101_2$
        ```
            1 1 0   (6 in decimal)
          x 1 0 1   (5 in decimal)
          -----
            1 1 0   (110 * 1)
          0 0 0     (110 * 0, shifted left)
        + 1 1 0       (110 * 1, shifted left twice)
        ---------
        1 0 0 0 0   (30 in decimal)

        Explanation:
        110 * 1 = 110
        110 * 0 (shifted) = 000
        110 * 1 (shifted twice) = 11000
        Sum:
          00110
          00000
        + 11000
        -------
          100010 (This is wrong. The shifted values are critical.)
        ```
        Corrected Example: Multiply $110_2 \times 101_2$
        ```
            1 1 0   (6 in decimal)
          x 1 0 1   (5 in decimal)
          -----
            1 1 0   (110 * 1)
           000    (110 * 0, shifted)
        + 110     (110 * 1, shifted twice)
        -------
          100010  (This is still wrong. The alignment is key.)
        ```
        Let's align properly:
        ```
              1 1 0   (6)
            x 1 0 1   (5)
            -------
              1 1 0   (110 * 1)
             0 0 0    (110 * 0, shifted one place left)
           1 1 0      (110 * 1, shifted two places left)
           -------
           1 0 0 0 1 0 (This seems large. Let's redo the carry logic)
        ```
        Let's re-evaluate the carry logic during addition:
        ```
            1 1 0
          x 1 0 1
          -------
            1 1 0   (row 1)
           0 0 0    (row 2, shifted)
          1 1 0     (row 3, shifted twice)
          -------
          Col 0 (LSB): 0 = 0
          Col 1: 1 + 0 = 1
          Col 2: 1 + 0 + 0 = 1
          Col 3: 0 + 1 = 1
          Col 4: 1 = 1
          Result: 11110
        ```
        Let's check: $110_2 = 6_{10}$. $101_2 = 5_{10}$. $6 \times 5 = 30_{10}$.
        $11110_2 = 1 \times 16 + 1 \times 8 + 1 \times 4 + 1 \times 2 + 0 \times 1 = 16 + 8 + 4 + 2 = 30_{10}$.
        Correct!

### 1.4.4 Binary Division

*   Similar to decimal long division. It's simpler because each step involves either subtracting the divisor or not, based on whether it's less than or equal to the current dividend part.

    *   **Example:** Divide $11001_2$ by $101_2$ ($25_{10}$ by $5_{10}$).
        ```
             101   (Quotient)
           _______
        101|11001   (Dividend)
           -101    (101 <= 110)
           ----
            0010   (Bring down the next bit)
            -000   (101 > 010, so quotient bit is 0)
            ----
             00101  (Bring down the next bit)
            -00101  (101 <= 101)
            ------
                0   (Remainder)
        ```
        Result: Quotient = $101_2$, Remainder = $0_2$.
        $25_{10} / 5_{10} = 5_{10}$ (which is $101_2$). Correct.

**Alignment with Course Outcomes:**
*   **CO1 (K3):** Understanding binary arithmetic is essential for manipulating data in digital circuits.
*   **CO2 (K5):** Designing circuits that perform arithmetic operations (e.g., adders, subtractors) requires knowledge of these fundamental binary operations.

**References:**
*   *Digital Fundamentals* by Thomas L. Floyd (Chapter 4)
*   *Fundamentals of Digital Logic with Verilog Design* by Stephen Brown (Chapter 5)
*   *Digital Design: With an Introduction to the Verilog HDL...* by M Morris Mano, Michael D. Ciletti (Chapter 7)

---

## 1.5 Signed and Unsigned Numbers

**Objective:** To understand how to represent both positive and negative numbers in binary and the implications for arithmetic operations.

### 1.5.1 Unsigned Numbers

*   **Definition:** Represent only non-negative integers (0 and positive integers).
*   **Representation:** The most straightforward binary representation. The value is determined by the sum of powers of 2, as discussed previously.
*   **Range:** For an $n$-bit unsigned number, the range is from $0$ to $2^n - 1$.
    *   Example (4-bit): $0000_2$ to $1111_2$, which is $0_{10}$ to $15_{10}$.

### 1.5.2 Signed Numbers

*   **Definition:** Represent both positive and negative integers.
*   **Need for Sign Representation:** Digital systems need to handle calculations involving negative numbers.
*   **Common Representation Methods:**

    1.  **Sign-Magnitude Representation:**
        *   **Concept:** The most significant bit (MSB) represents the sign (0 for positive, 1 for negative), and the remaining bits represent the magnitude of the number.
        *   **Example (4-bit):**
            *   $+5_{10} \rightarrow 0101_2$ (MSB is 0 for positive, 101 is the magnitude of 5)
            *   $-5_{10} \rightarrow 1101_2$ (MSB is 1 for negative, 101 is the magnitude of 5)
        *   **Drawbacks:**
            *   Two representations for zero ($+0$ and $-0$).
            *   Two separate circuits are needed for addition/subtraction for positive and negative numbers.

    2.  **One's Complement Representation:**
        *   **Concept:** Positive numbers are represented as in sign-magnitude. Negative numbers are obtained by inverting all the bits of the positive equivalent.
        *   **Example (4-bit):**
            *   $+5_{10} \rightarrow 0101_2$
            *   $-5_{10}$: Invert bits of $0101_2 \rightarrow 1010_2$
        *   **Drawbacks:**
            *   Still has two representations for zero ($0000_2$ and $1111_2$).
            *   Arithmetic can be complex (requires an end-around carry).

    3.  **Two's Complement Representation:**
        *   **Concept:** This is the most widely used method in digital systems due to its simplicity in arithmetic operations.
            *   **Positive numbers:** Represented as in sign-magnitude (MSB is 0).
            *   **Negative numbers:** Obtained by taking the one's complement of the positive number and adding 1.
        *   **Procedure for obtaining 2's complement of a negative number $-X$:**
            1.  Represent the positive magnitude of $X$ in binary.
            2.  Invert all the bits (one's complement).
            3.  Add 1 to the result.
        *   **Example (4-bit):**
            *   $+5_{10} \rightarrow 0101_2$
            *   $-5_{10}$:
                1.  Positive 5: $0101_2$
                2.  Invert: $1010_2$
                3.  Add 1: $1010_2 + 1_2 = 1011_2$
                *   So, $-5_{10}$ is represented as $1011_2$.
        *   **Range:** For an $n$-bit two's complement number, the range is from $-2^{n-1}$ to $+2^{n-1} - 1$.
            *   Example (4-bit): $-2^{4-1} = -2^3 = -8$ to $+2^{4-1} - 1 = +7$.
            *   $0000_2 = 0$
            *   $0111_2 = 7$
            *   $1000_2 = -8$ (This is the most negative number)
            *   $1111_2 = -1$
        *   **Advantages:**
            *   Only one representation for zero ($0000_2$).
            *   Arithmetic operations (addition and subtraction) can be performed uniformly for both positive and negative numbers using the same hardware (adders).
        *   **To convert a negative 2's complement number back to decimal:**
            1.  If the MSB is 1, it's negative.
            2.  Perform the 2's complement operation again (invert bits, add 1).
            3.  Convert the resulting binary number to decimal and prefix with a minus sign.
            *   **Example:** Convert $1011_2$ (assuming 4-bit 2's complement).
                1.  MSB is 1, so it's negative.
                2.  Invert $1011_2 \rightarrow 0100_2$.
                3.  Add 1: $0100_2 + 1_2 = 0101_2$.
                4.  Convert $0101_2$ to decimal: $5_{10}$.
                5.  Therefore, $1011_2$ represents $-5_{10}$.

### 1.5.3 Two's Complement Arithmetic

*   **Addition:**
    *   Simply add the two numbers using binary addition. Ignore any carry-out from the MSB.
    *   **Example:** $5_{10} + (-3_{10})$
        *   $5_{10} = 0101_2$
        *   $-3_{10}$: (3 is $0011_2$; invert to $1100_2$; add 1 to get $1101_2$)
        ```
          0101  ( 5)
        + 1101  (-3)
        ------
         10010
        ```
        *   Ignore the carry-out from MSB. Result is $10010_2$. Oops, this is a 5-bit result from 4-bit numbers. The carry-out is the 5th bit.
        *   Correct calculation (4-bit):
        ```
          0101  ( 5)
        + 1101  (-3)
        ------
        1 0010
        ```
        *   Discard the carry-out bit. Result: $0010_2$, which is $2_{10}$. Correct.

*   **Subtraction:**
    *   To subtract $A - B$, add $A + (-B)$. Convert $B$ to its two's complement and add.
    *   **Example:** $5_{10} - 3_{10}$
        *   This is $5 + (-3)$, which we already calculated as $0010_2$.
    *   **Example:** $3_{10} - 5_{10}$
        *   This is $3 + (-5)$.
        *   $3_{10} = 0011_2$
        *   $-5_{10} = 1011_2$ (from previous example)
        ```
          0011  ( 3)
        + 1011  (-5)
        ------
        1 1110
        ```
        *   Discard the carry-out bit. Result: $1110_2$.
        *   Convert $1110_2$ back: Invert ($0001_2$), add 1 ($0010_2$). This is $2_{10}$. So, $1110_2$ represents $-2_{10}$. Correct.

*   **Overflow:** Occurs when the result of an arithmetic operation is outside the representable range for the given number of bits.
    *   **In 2's complement addition:** Overflow occurs if:
        *   Adding two positive numbers results in a negative number.
        *   Adding two negative numbers results in a positive number.
    *   **In 2's complement subtraction ($A - B$):** Overflow occurs if:
        *   Subtracting a negative number from a positive number results in a negative number.
        *   Subtracting a positive number from a negative number results in a positive number.

**Alignment with Course Outcomes:**
*   **CO1 (K3):** Essential for representing and manipulating signed data in digital systems.
*   **CO2 (K5):** Designing arithmetic circuits (adders, subtractors) requires a deep understanding of signed number representation and arithmetic.

**Important Points to Remember:**
*   Two's complement is the standard for signed number representation in most digital computers.
*   The MSB in 2's complement indicates the sign: 0 for positive, 1 for negative.
*   The range of an $n$-bit 2's complement system is $[-2^{n-1}, 2^{n-1}-1]$.
*   Subtraction is performed by adding the two's complement of the subtrahend.
*   Be mindful of potential overflow conditions.

**References:**
*   *Digital Fundamentals* by Thomas L. Floyd (Chapter 4)
*   *Fundamentals of Digital Logic with Verilog Design* by Stephen Brown (Chapter 5)
*   *Digital Design: With an Introduction to the Verilog HDL...* by M Morris Mano, Michael D. Ciletti (Chapter 7)
*   *Introduction to Logic Circuits & Logic Design with Verilog* by Brock J. LaMeres (Chapter 2)

---

## 1.6 Binary Coded Decimal (BCD)

**Objective:** To understand BCD, a method for representing decimal digits in binary, and its applications.

**Key Concepts:**

*   **Definition:** BCD is a binary encoding method where each decimal digit (0-9) is represented by its own 4-bit binary equivalent.
*   **Encoding:**
    *   $0_{10} \rightarrow 0000_2$
    *   $1_{10} \rightarrow 0001_2$
    *   $2_{10} \rightarrow 0010_2$
    *   ...
    *   $9_{10} \rightarrow 1001_2$
*   **Note:** BCD uses only 10 of the 16 possible 4-bit combinations (0000 to 1001). The combinations 1010 to 1111 are invalid in BCD.

### 1.6.1 BCD Representation

*   **Concept:** A multi-digit decimal number is represented by concatenating the 4-bit BCD codes for each digit.

    *   **Example:** Represent $157_{10}$ in BCD.
        *   $1_{10} \rightarrow 0001_2$
        *   $5_{10} \rightarrow 0101_2$
        *   $7_{10} \rightarrow 0111_2$
        *   So, $157_{10}$ in BCD is $0001\ 0101\ 0111$.

*   **Unpacked vs. Packed BCD:**
    *   **Unpacked BCD:** Each BCD digit is stored in a separate byte (8 bits), typically with the upper 4 bits as zeros. Example: $157_{10}$ unpacked $\rightarrow$ `0000 0001` `0000 0101` `0000 0111`.
    *   **Packed BCD:** Two BCD digits are stored in a single byte (8 bits). Example: $157_{10}$ packed $\rightarrow$ `0001 0101` `0111 ....` (The second byte would hold the '7' and potentially a leading zero for even numbers of digits). For $157_{10}$, it would be `0001 0101` (for 15) and `0111` (for 7, with the upper nibble usually 0).

### 1.6.2 BCD Arithmetic

*   **Addition:**
    1.  Perform binary addition on the BCD digits.
    2.  If the result of a 4-bit addition is greater than 9 (i.e., $1001_2$) or if there was a carry-out from the addition, add $0110_2$ (6 in decimal) to the result.
    3.  If there was a carry-out from adding $0110_2$, carry it over to the next BCD digit.

    *   **Example 1:** Add $5_{10} + 3_{10}$ in BCD.
        *   $5_{10} \rightarrow 0101_2$
        *   $3_{10} \rightarrow 0011_2$
        *   Binary addition:
            ```
              0101
            + 0011
            ------
              1000  (This is $8_{10}$, which is $\le 9$. No carry-out.)
            ```
        *   Result: $1000_2$, which is $8_{10}$ in BCD. Correct.

    *   **Example 2:** Add $7_{10} + 8_{10}$ in BCD.
        *   $7_{10} \rightarrow 0111_2$
        *   $8_{10} \rightarrow 1000_2$
        *   Binary addition:
            ```
              0111
            + 1000
            ------
              1111  (This is $15_{10}$, which is $> 9$. Also, no carry-out from this 4-bit sum itself.)
            ```
        *   Since $1111_2 > 1001_2$, add $0110_2$:
            ```
              1111
            + 0110
            ------
             1 0101
            ```
        *   The result is $0101_2$ with a carry-out of 1.
        *   The carry-out of 1 goes to the next BCD digit position.
        *   So, $7_{10} + 8_{10} = 15_{10}$ in BCD is `0001 0101`.
        *   This means the first digit is $0101_2$ (5) and there's a carry of 1 to the next position. Correct.

    *   **Example 3:** Add $25_{10} + 37_{10}$ in BCD.
        *   $25_{10} \rightarrow 0010\ 0101_2$
        *   $37_{10} \rightarrow 0011\ 0111_2$
        *   Add the rightmost digits (5 + 7):
            ```
              0101 (5)
            + 0111 (7)
            ------
              1100 (12)
            ```
        *   $1100_2 > 1001_2$. Add $0110_2$:
            ```
              1100
            + 0110
            ------
             1 0010
            ```
        *   Result of the rightmost digit addition is $0010_2$ (2) with a carry of 1.
        *   Add the next digits (2 + 3) plus the carry from the previous step:
            ```
              0010 (2)
            + 0011 (3)
            + 0001 (carry)
            ------
              0110 (6)
            ```
        *   The result $0110_2$ is $\le 9$ and no carry-out.
        *   So, the BCD representation of $62_{10}$ is $0110\ 0010_2$. Correct.

### 1.6.3 Applications of BCD

*   **Digital Displays:** Used in electronic calculators, digital clocks, and multimeters where decimal output is required.
*   **Interface with Decimal Input Devices:** When a system needs to directly read decimal input from keyboards or other devices.
*   **Simplicity:** Easier to understand and debug for applications that are inherently decimal-based, compared to direct binary arithmetic which might require complex conversions.

**Disadvantages of BCD:**
*   **Inefficient:** Uses more bits than pure binary representation for numbers greater than 9. For example, $9_{10}$ is $1001_2$ in BCD but also $1001_2$ in binary. However, $10_{10}$ is $0001\ 0000_2$ in BCD but just $1010_2$ in binary. BCD requires 8 bits for 10, while binary needs only 4 bits.
*   **More Complex Arithmetic:** Binary arithmetic is simpler to implement in hardware than BCD arithmetic.

**Alignment with Course Outcomes:**
*   **CO1 (K3):** Understanding BCD is crucial for representing decimal data within digital systems.
*   **CO2 (K5):** Designing circuits that perform decimal arithmetic (e.g., in calculators) requires knowledge of BCD representation and arithmetic rules.

**Important Points to Remember:**
*   BCD represents each decimal digit individually with 4 bits.
*   The BCD codes for 0-9 are the same as the standard binary codes for 0-9.
*   Combinations 1010-1111 are invalid in BCD.
*   BCD arithmetic requires special correction steps (adding 6) to maintain the BCD format.

**References:**
*   *Digital Fundamentals* by Thomas L. Floyd (Chapter 3)
*   *Fundamentals of Digital Logic with Verilog Design* by Stephen Brown (Chapter 1)
*   *Digital Design: With an Introduction to the Verilog HDL...* by M Morris Mano, Michael D. Ciletti (Chapter 7)

---

## Practice Questions

**Section 1.3: Conversions**

1.  Convert the following decimal numbers to binary:
    a) $45_{10}$
    b) $123_{10}$
2.  Convert the following binary numbers to decimal:
    a) $110110_2$
    b) $1000001_2$
3.  Convert the following decimal numbers to octal:
    a) $250_{10}$
    b) $789_{10}$
4.  Convert the following octal numbers to decimal:
    a) $345_8$
    b) $107_8$
5.  Convert the following decimal numbers to hexadecimal:
    a) $512_{10}$
    b) $1024_{10}$
    c) $4095_{10}$
6.  Convert the following hexadecimal numbers to decimal:
    a) $1F_{16}$
    b) $A0C_{16}$
7.  Convert $111010110_2$ to octal and hexadecimal.
8.  Convert $532_8$ to binary and hexadecimal.
9.  Convert $3A7_{16}$ to binary and octal.

**Section 1.4: Binary Arithmetic**

10. Perform binary addition:
    a) $10110_2 + 1101_2$
    b) $11101_2 + 10011_2$
11. Perform binary subtraction:
    a) $11010_2 - 1011_2$
    b) $10100_2 - 1101_2$
12. Perform binary multiplication:
    a) $1101_2 \times 101_2$
    b) $10110_2 \times 110_2$
13. Perform binary division:
    a) $11110_2 \div 10_2$
    b) $100010_2 \div 101_2$

**Section 1.5: Signed Numbers**

14. Represent the following numbers in 5-bit two's complement:
    a) $+10_{10}$
    b) $-6_{10}$
    c) $-15_{10}$
15. What are the decimal values of the following 6-bit two's complement numbers?
    a) $011101_2$
    b) $101010_2$
    c) $111111_2$
16. Perform the following operations using 4-bit two's complement arithmetic. Indicate if overflow occurs.
    a) $5_{10} + 2_{10}$
    b) $3_{10} + (-5_{10})$
    c) $-4_{10} + (-5_{10})$
    d) $6_{10} - 2_{10}$
    e) $3_{10} - 7_{10}$

**Section 1.6: BCD**

17. Represent the decimal number $975_{10}$ in BCD.
18. Convert the following BCD number to its decimal equivalent: $0100\ 0011\ 1001_2$
19. Perform the following addition in BCD. Show intermediate steps.
    a) $4_{10} + 5_{10}$
    b) $9_{10} + 6_{10}$
    c) $45_{10} + 38_{10}$

---

## Answers to Practice Questions

**Section 1.3: Conversions**

1.  a) $45_{10} = 101101_2$
    b) $123_{10} = 1111011_2$
2.  a) $110110_2 = 32 + 16 + 0 + 4 + 2 + 0 = 54_{10}$
    b) $1000001_2 = 64 + 0 + 0 + 0 + 0 + 0 + 1 = 65_{10}$
3.  a) $250_{10} = 372_8$ ($250/8 = 31 R 2, 31/8 = 3 R 7, 3/8 = 0 R 3$)
    b) $789_{10} = 1425_8$ ($789/8 = 98 R 5, 98/8 = 12 R 2, 12/8 = 1 R 4, 1/8 = 0 R 1$)
4.  a) $345_8 = 3 \times 8^2 + 4 \times 8^1 + 5 \times 8^0 = 3 \times 64 + 4 \times 8 + 5 \times 1 = 192 + 32 + 5 = 229_{10}$
    b) $107_8 = 1 \times 8^2 + 0 \times 8^1 + 7 \times 8^0 = 1 \times 64 + 0 + 7 \times 1 = 64 + 7 = 71_{10}$
5.  a) $512_{10} = 200_{16}$ ($512/16 = 32 R 0, 32/16 = 2 R 0, 2/16 = 0 R 2$)
    b) $1024_{10} = 400_{16}$ ($1024/16 = 64 R 0, 64/16 = 4 R 0, 4/16 = 0 R 4$)
    c) $4095_{10} = FFF_{16}$ ($4095/16 = 255 R 15(F), 255/16 = 15 R 15(F), 15/16 = 0 R 15(F)$)
6.  a) $1F_{16} = 1 \times 16^1 + 15 \times 16^0 = 16 + 15 = 31_{10}$
    b) $A0C_{16} = 10 \times 16^2 + 0 \times 16^1 + 12 \times 16^0 = 10 \times 256 + 0 + 12 \times 1 = 2560 + 12 = 2572_{10}$
7.  $111010110_2$
    *   Octal: Group into 3s: $111\ 010\ 110_2$. Convert: $7\ 2\ 6_8$. So, $726_8$.
    *   Hexadecimal: Group into 4s: $0001\ 1101\ 0110_2$. Convert: $1\ D\ 6_{16}$. So, $1D6_{16}$.
8.  $532_8$
    *   Binary: $5 \rightarrow 101$, $3 \rightarrow 011$, $2 \rightarrow 010$. So, $101011010_2$.
    *   Hexadecimal: Convert to binary first ($101011010_2$), then group into 4s: $0001\ 0101\ 1010_2$. Convert: $1\ 5\ A_{16}$. So, $15A_{16}$.
9.  $3A7_{16}$
    *   Binary: $3 \rightarrow 0011$, $A \rightarrow 1010$, $7 \rightarrow 0111$. So, $001110100111_2$.
    *   Octal: Convert to binary first ($001110100111_2$), then group into 3s: $001\ 110\ 100\ 111_2$. Convert: $1\ 6\ 4\ 7_8$. So, $1647_8$.

**Section 1.4: Binary Arithmetic**

10. a) $10110_2 + 1101_2 = 100011_2$
    b) $11101_2 + 10011_2 = 110000_2$
11. a) $11010_2 - 1011_2 = 01111_2$ (or $1111_2$)
    b) $10100_2 - 1101_2 = 00111_2$ (or $111_2$)
12. a) $1101_2 \times 101_2 = 1000001_2$ ($13 \times 5 = 65$)
    b) $10110_2 \times 110_2 = 10000100_2$ ($22 \times 6 = 132$)
13. a) $11110_2 \div 10_2 = 1111_2$ (Quotient) ($30 \div 2 = 15$)
    b) $100010_2 \div 101_2 = 110_2$ (Quotient) ($34 \div 5 = 6$ remainder 4. Oh, $100010_2 = 34$, $101_2 = 5$. $34/5 = 6$ remainder $4$. Let's re-check the binary division.)
    ```
         110   (Quotient)
       _______
    101|100010
       -101
       ----
        0110  (Bring down 0)
        -000  (101 > 110, so quotient bit is 0)
        ----
         01101 (Bring down 1)
        -0101  (101 <= 1101)
        ----
          0100 (Remainder)
    ```
    Result: Quotient $110_2$ (6), Remainder $100_2$ (4). Correct.

**Section 1.5: Signed Numbers**

14. 5-bit two's complement: Range is $-16$ to $+15$.
    a) $+10_{10} = 01010_2$ (5 bits)
    b) $-6_{10}$: 6 is $00110_2$. Invert: $11001_2$. Add 1: $11010_2$.
    c) $-15_{10}$: 15 is $01111_2$. Invert: $10000_2$. Add 1: $10001_2$.
15. 6-bit two's complement: Range is $-32$ to $+31$.
    a) $011101_2 = 32 + 16 + 8 + 0 + 4 + 1 = 16 + 4 + 1 = 21_{10}$ (Correct MSB is 0 for positive). $011101_2 = 1 \times 32 + 1 \times 16 + 1 \times 8 + 0 \times 4 + 1 \times 2 + 1 \times 1$. Wait, this is 6 bits. Let's use powers of 2. $2^5+2^4+2^3+2^2+2^1+2^0 = 32+16+8+4+2+1$. For $011101_2$, MSB is 0. Value is $0 \times 32 + 1 \times 16 + 1 \times 8 + 1 \times 4 + 0 \times 2 + 1 \times 1 = 16 + 8 + 4 + 1 = 29_{10}$.
    b) $101010_2$: MSB is 1 (negative). Invert: $010101_2$. Add 1: $010110_2$. Convert: $1 \times 16 + 0 \times 8 + 1 \times 4 + 1 \times 2 + 0 \times 1 = 16 + 4 + 2 = 22_{10}$. So, $-22_{10}$.
    c) $111111_2$: MSB is 1 (negative). Invert: $000000_2$. Add 1: $000001_2$. Convert: $1_{10}$. So, $-1_{10}$.
16. 4-bit two's complement (range $-8$ to $+7$).
    a) $5_{10} + 2_{10}$: $0101_2 + 0010_2 = 0111_2$. Decimal value is $7_{10}$. No overflow.
    b) $3_{10} + (-5_{10})$: $0011_2 + 1011_2 = 1110_2$. Decimal value is $-2_{10}$. No overflow.
    c) $-4_{10} + (-5_{10})$: $1100_2 + 1011_2 = 10111_2$. Discard MSB carry: $0111_2$. Decimal value is $7_{10}$. However, the expected answer is $-9_{10}$. Adding $-4$ and $-5$ should result in $-9$, which is outside the range of $-8$ to $+7$. So, **overflow occurs**. The result $0111_2$ is incorrect.
    d) $6_{10} - 2_{10} = 6 + (-2)$. $0110_2 + 1110_2 = 10100_2$. Discard MSB carry: $0100_2$. Decimal value is $4_{10}$. No overflow.
    e) $3_{10} - 7_{10} = 3 + (-7)$. $0011_2 + 1001_2 = 1010_2$. Decimal value is $-2_{10}$. No overflow.

**Section 1.6: BCD**

17. $975_{10}$:
    $9 \rightarrow 1001$
    $7 \rightarrow 0111$
    $5 \rightarrow 0101$
    BCD: $1001\ 0111\ 0101_2$
18. $0100\ 0011\ 1001_2$:
    $0100 \rightarrow 4$
    $0011 \rightarrow 3$
    $1001 \rightarrow 9$
    Decimal: $439_{10}$
19. a) $4_{10} + 5_{10}$:
    $0100_2 + 0101_2 = 1001_2$. This is $\le 9$ and no carry. Result: $1001_2$ (9).
    b) $9_{10} + 6_{10}$:
    $1001_2 + 0110_2 = 1111_2$. This is $> 9$. Add $0110_2$: $1111_2 + 0110_2 = 10101_2$.
    Result: $0101_2$ with a carry of 1. So, $15_{10}$ (BCD: $0001\ 0101_2$).
    c) $45_{10} + 38_{10}$:
    Digits: $5+8$ and $4+3$.
    $5_{10} + 8_{10}$: $0101_2 + 1000_2 = 1101_2$. This is $> 9$. Add $0110_2$: $1101_2 + 0110_2 = 10011_2$.
    Result of rightmost digit: $0011_2$ with carry 1.
    Digits: $4_{10} + 3_{10} + \text{carry } 1$: $0100_2 + 0011_2 + 0001_2 = 1000_2$. This is $\le 9$ and no carry.
    Result: $1000\ 0011_2$ (83). So, $83_{10}$.

---

## Summary and Key Takeaways

*   Digital systems operate on discrete binary values (0 and 1).
*   Understanding number systems (decimal, binary, octal, hexadecimal) and their conversions is fundamental.
*   Binary arithmetic follows simple rules, but requires careful handling of carries and borrows.
*   Two's complement is the standard for representing signed numbers, enabling unified arithmetic operations.
*   BCD offers a way to represent decimal numbers directly in binary but is less efficient in terms of bit usage and requires special arithmetic procedures.
*   These concepts form the bedrock for understanding more complex digital circuits and logic design.

**Alignment with Course Outcomes:**
*   **CO1 (K3):** This entire module directly supports CO1 by providing the foundational knowledge of digital representation and the basis for Boolean algebra and circuit design.
*   **CO2 (K5):** While this module focuses on representation and arithmetic, it lays the groundwork for CO2 by explaining the operations that combinational and sequential circuits will perform on these numbers.
*   **CO3 (K5), CO4 (K2):** Not directly addressed in this introductory module, but the understanding of number systems is a prerequisite for HDL-based design and performance analysis of logic families.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
