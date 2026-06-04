---
title: "Binary Arithmetic – Addition and subtraction, Unsigned and Signed numbers"
subject: "DIGITAL ELECTRONICS AND LOGIC DESIGN"
module: "Module 1: Introduction to digital Systems :"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ad43"
status: "completed"
scrapedAt: "2026-05-20T16:23:41.486Z"
---
## DIGITAL ELECTRONICS AND LOGIC DESIGN: MODULE 1 - Binary Arithmetic

**Module:** 1: Introduction to Digital Systems
**Topic:** Binary Arithmetic – Addition and Subtraction, Unsigned and Signed Numbers

**Learning Outcomes:**

*   Understand the basics of binary number representation.
*   Perform binary addition and subtraction.
*   Understand and represent unsigned and signed numbers in binary.
*   Perform addition and subtraction of signed binary numbers using 2's complement.
*   Understand the concepts of overflow and underflow in binary arithmetic.

### 1. Binary Number Representation

*   **Definition:** Binary is a base-2 number system, using only two digits: 0 and 1. Each digit in a binary number is called a bit.

*   **Place Value:**  Similar to decimal, binary uses place value.  However, instead of powers of 10, binary uses powers of 2. From right to left, the place values are 2^0, 2^1, 2^2, 2^3, and so on.

    *   Example: The binary number 1011 represents:
        (1 * 2^3) + (0 * 2^2) + (1 * 2^1) + (1 * 2^0) = 8 + 0 + 2 + 1 = 11 (decimal)

*   **Conversion:**
    *   **Binary to Decimal:**  Multiply each bit by its corresponding power of 2 and sum the results.
    *   **Decimal to Binary:** Repeatedly divide the decimal number by 2, noting the remainder at each step.  The remainders, read from bottom to top, form the binary equivalent.

    *   Example: Converting 25 (decimal) to binary:
        *   25 / 2 = 12 remainder 1
        *   12 / 2 = 6  remainder 0
        *   6 / 2  = 3  remainder 0
        *   3 / 2  = 1  remainder 1
        *   1 / 2  = 0  remainder 1

        Therefore, 25 (decimal) = 11001 (binary)

### 2. Binary Addition

*   **Rules of Binary Addition:**
    *   0 + 0 = 0
    *   0 + 1 = 1
    *   1 + 0 = 1
    *   1 + 1 = 10 (0 with a carry of 1)

*   **Procedure:**  Add the bits in each column, starting from the rightmost column.  If the sum is greater than 1, carry over the '1' to the next column.

    *   Example: Adding 1011 and 0110:

    ```
       1011
    +  0110
    -------
      10001
    ```
    Explanation:
    * Rightmost column: 1 + 0 = 1
    * Second column from right: 1 + 1 = 10 (0 with carry 1)
    * Third column from right: 0 + 1 + 1 (carry) = 10 (0 with carry 1)
    * Leftmost column: 1 + 0 + 1 (carry) = 10

### 3. Binary Subtraction

*   **Rules of Binary Subtraction:**
    *   0 - 0 = 0
    *   1 - 0 = 1
    *   1 - 1 = 0
    *   0 - 1 = 1 (with a borrow of 1 from the next significant bit)

*   **Borrowing:** When subtracting 1 from 0, you need to borrow from the next higher bit. Borrowing 1 from a column makes that column's value decrease by 1, and the column being borrowed to becomes equivalent to 2 (10 in binary).

    *   Example: Subtracting 0110 from 1011:

    ```
       1011
    -  0110
    -------
       0101
    ```
    Explanation:
    * Rightmost column: 1 - 0 = 1
    * Second column from right: 1 - 1 = 0
    * Third column from right: 0 - 1 = Borrow from the next column, so the '0' becomes '10' (2), and the leftmost '1' becomes '0'. Now, 10 - 1 = 1
    * Leftmost column: 0 - 0 = 0

### 4. Unsigned and Signed Numbers

*   **Unsigned Numbers:** Represent only positive values. All bits represent the magnitude of the number.

*   **Signed Numbers:** Represent both positive and negative values.  Several methods exist to represent signed numbers:
    *   **Sign-Magnitude:** The leftmost bit represents the sign (0 for positive, 1 for negative), and the remaining bits represent the magnitude.

        *   Example (8-bit):
            *   +5 = 00000101
            *   -5 = 10000101

        *   **Disadvantage:**  Two representations for zero (+0 and -0).  Also, arithmetic is more complex.

    *   **1's Complement:**  Positive numbers are represented the same as in sign-magnitude. To find the 1's complement of a negative number, invert all the bits (change 0s to 1s and 1s to 0s).

        *   Example (8-bit):
            *   +5 = 00000101
            *   -5 = 11111010 (1's complement of 00000101)

        *   **Disadvantage:**  Still has two representations for zero.

    *   **2's Complement:** The most common method for representing signed numbers in computers.  Positive numbers are represented as in sign-magnitude.  To find the 2's complement of a negative number:
        1.  Find the 1's complement.
        2.  Add 1 to the 1's complement.

        *   Example (8-bit):
            *   +5 = 00000101
            *   -5:
                1.  1's complement of 00000101 = 11111010
                2.  Add 1: 11111010 + 1 = 11111011

        *   **Advantage:** Only one representation for zero, and arithmetic is simpler.

### 5. Addition and Subtraction of Signed Binary Numbers using 2's Complement

*   **Addition:** Add the two numbers, including the sign bit.  If there is a carry-out from the sign bit, discard it.

    *   Example:  5 + (-3) using 2's complement (8-bit):
        *   5 = 00000101
        *   -3 = 11111101 (2's complement)

        ```
            00000101
        +   11111101
        -----------
          1 00000010
        ```

        Discard the carry-out. Result: 00000010 = 2

*   **Subtraction:** To subtract A - B, take the 2's complement of B and add it to A.

    *   Example: 5 - 3 using 2's complement (8-bit):
        *   5 = 00000101
        *   3 = 00000011
        *   -3 = 11111101 (2's complement of 3)

        ```
            00000101
        +   11111101
        -----------
          1 00000010
        ```

        Discard the carry-out. Result: 00000010 = 2

### 6. Overflow and Underflow

*   **Definition:** Overflow and underflow occur when the result of an arithmetic operation is outside the range that can be represented with the available number of bits.

*   **Overflow:** Occurs when adding two positive numbers and the result is negative, or when adding two negative numbers and the result is positive.  In 2's complement, this means the sign bit is incorrect.  Overflow is most easily detected by checking if the carry into the sign bit differs from the carry out of the sign bit.  If they differ, overflow has occurred.

*   **Underflow:**  Less common in integer arithmetic.  Typically refers to a result that is too small to represent (e.g., approaching zero in floating-point). In integer arithmetic, underflow can occur when subtracting a large positive number from a small positive number, resulting in a large negative number which may exceed the representation range.

*   **Detection (2's Complement):**  In 2's complement addition, overflow occurs if:
    *   Two positive numbers are added and the result is negative.
    *   Two negative numbers are added and the result is positive.
    *  More formally: Overflow occurs if the carry into the sign bit is different from the carry out of the sign bit.

*   **Example (4-bit 2's Complement):**
    *   7 + 1 = 0111 + 0001 = 1000 = -8  (Overflow - two positive numbers resulted in a negative number)
    *   -8 + -1 = 1000 + 1111 = 0111 (with carry out) = 7 (Overflow - two negative numbers resulted in a positive number)

**Important Points to Remember:**

*   Binary is the fundamental number system for digital systems.
*   2's complement is the most widely used representation for signed numbers due to its efficient arithmetic operations and single representation of zero.
*   Be aware of overflow and underflow conditions when performing arithmetic operations to ensure the accuracy of your results.
*   Discard the final carry-out only after performing 2's complement addition.  If you need to perform a calculation for overflow purposes then consider the carry-out.
*   Practicing conversions and calculations is crucial for understanding binary arithmetic.

**Practice Questions/Exercises:**

1.  Convert the following decimal numbers to binary: 15, 42, 100.
2.  Convert the following binary numbers to decimal: 1101, 10110, 11111.
3.  Perform the following binary additions: 1010 + 0101, 1111 + 0001, 10110 + 11001.
4.  Perform the following binary subtractions: 1100 - 0100, 1000 - 0001, 11010 - 01111.
5.  Represent the following numbers in 8-bit sign-magnitude, 1's complement, and 2's complement: +10, -7, -12.
6.  Perform the following additions using 8-bit 2's complement: 10 + 5, -5 + (-3), 7 + (-10).  Indicate if overflow occurs.
7.  Perform the following subtractions using 8-bit 2's complement: 5 - 3, 3 - 5, -7 - 2.

**Answers:**

1.  *   15 = 1111
    *   42 = 101010
    *   100 = 1100100
2.  *   1101 = 13
    *   10110 = 22
    *   11111 = 31
3.  *   1010 + 0101 = 1111
    *   1111 + 0001 = 10000
    *   10110 + 11001 = 101111
4.  *   1100 - 0100 = 1000
    *   1000 - 0001 = 0111
    *   11010 - 01111 = 01011
5.  *   +10:
        *   Sign-Magnitude: 00001010
        *   1's Complement: 00001010
        *   2's Complement: 00001010
    *   -7:
        *   Sign-Magnitude: 10000111
        *   1's Complement: 11111000
        *   2's Complement: 11111001
    *   -12:
        *   Sign-Magnitude: 10001100
        *   1's Complement: 11110011
        *   2's Complement: 11110100
6.  *   10 + 5 = 00001010 + 00000101 = 00001111 = 15 (No overflow)
    *   -5 + (-3) = 11111011 + 11111101 = 11111000 = -8 (No overflow)
    *   7 + (-10) = 00000111 + 11110110 = 111111001 = -3 (No overflow)
7.  *   5 - 3 = 00000101 + 11111101 = 00000010 = 2
    *   3 - 5 = 00000011 + 11111011 = 11111110 = -2
    *   -7 - 2 = 11111001 + 11111110 = 11110111 = -9
