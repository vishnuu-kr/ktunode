---
title: "Fixed-Point Number Systems"
subject: "DIGITAL ELECTRONICS AND LOGIC DESIGN"
module: "Module 1: Introduction to digital Systems :"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ad44"
status: "completed"
scrapedAt: "2026-05-20T16:23:42.206Z"
---
# DIGITAL ELECTRONICS AND LOGIC DESIGN

## Module 1: Introduction to Digital Systems

### Topic: Fixed-Point Number Systems

**Learning Outcomes:**

*   Understand the concept of fixed-point representation.
*   Convert numbers between decimal and fixed-point binary representations.
*   Perform basic arithmetic operations (addition, subtraction) on fixed-point numbers.
*   Understand the limitations and trade-offs associated with fixed-point representation.
*   Calculate the range and precision of a fixed-point number system.

**1. Introduction to Fixed-Point Representation**

*   **Definition:** A fixed-point number system represents real numbers by fixing the position of the radix point (binary point in binary systems).  Unlike floating-point numbers, the position of the radix point is predetermined and does not change.
*   **Motivation:** Fixed-point representation provides a simpler and often more efficient alternative to floating-point representation, particularly in applications where computational power and memory are limited, such as embedded systems or digital signal processing (DSP).
*   **Format:**  A fixed-point number is represented as a sequence of bits, where a certain number of bits are allocated to the integer part and the remaining bits are allocated to the fractional part.
*   **Notation:** Typically denoted as `(I.F)` where `I` is the number of bits for the integer part and `F` is the number of bits for the fractional part. The total number of bits is `I + F`.  The sign bit (if signed) increases the total number of bits to `I + F + 1`.

**2. Binary Fixed-Point Representation**

*   **Understanding the Binary Point:** The binary point separates the integer part (to the left) from the fractional part (to the right). The weights assigned to the bits change based on their position relative to the binary point.
*   **Integer Part Weights:**  Same as in regular binary representation: ..., 2<sup>2</sup>, 2<sup>1</sup>, 2<sup>0</sup>
*   **Fractional Part Weights:**  2<sup>-1</sup>, 2<sup>-2</sup>, 2<sup>-3</sup>, ...
*   **Example:** In an (8.8) system, the bits are:
    *   b<sub>7</sub>b<sub>6</sub>b<sub>5</sub>b<sub>4</sub>b<sub>3</sub>b<sub>2</sub>b<sub>1</sub>b<sub>0</sub> . b<sub>-1</sub>b<sub>-2</sub>b<sub>-3</sub>b<sub>-4</sub>b<sub>-5</sub>b<sub>-6</sub>b<sub>-7</sub>b<sub>-8</sub>
    *   The weights are: 2<sup>7</sup>, 2<sup>6</sup>, ..., 2<sup>0</sup> . 2<sup>-1</sup>, 2<sup>-2</sup>, ..., 2<sup>-8</sup>

**3. Conversion Between Decimal and Fixed-Point Binary**

*   **Decimal to Fixed-Point Binary:**
    *   **Integer Part:** Convert the integer part to binary using standard binary conversion methods (repeated division by 2).
    *   **Fractional Part:** Multiply the fractional part by 2 repeatedly. The integer part of the result (0 or 1) becomes the next bit in the fractional part of the binary representation.  Continue until the fractional part becomes 0 or until the desired precision is reached.
    *   **Combine:** Concatenate the binary representation of the integer part and the binary representation of the fractional part, separated by the binary point.

    **Example:** Convert 5.625 to (4.4) fixed-point binary:

    *   **Integer Part (5):** 5<sub>10</sub> = 101<sub>2</sub>
    *   **Fractional Part (0.625):**
        *   0.625 * 2 = 1.25  ->  1
        *   0.25 * 2 = 0.5   ->  0
        *   0.5 * 2 = 1.0    ->  1
        *   0.0 * 2 = 0.0    ->  0 (we reached maximum 4 bits)
        *   0.625<sub>10</sub> = 0.1010<sub>2</sub>

    *   **Combine:** 101.1010<sub>2</sub>.  We need 4 bits for integer so pad on left with 0 -> 0101.1010
*   **Fixed-Point Binary to Decimal:**
    *   Multiply each bit by its corresponding weight (powers of 2).
    *   Sum the results.

    **Example:** Convert 10.011<sub>2</sub> to decimal (2.3 fixed-point):

    *   (1 * 2<sup>1</sup>) + (0 * 2<sup>0</sup>) + (0 * 2<sup>-1</sup>) + (1 * 2<sup>-2</sup>) + (1 * 2<sup>-3</sup>)
    *   = 2 + 0 + 0 + 0.25 + 0.125 = 2.375<sub>10</sub>

**4. Arithmetic Operations on Fixed-Point Numbers**

*   **Addition and Subtraction:**
    *   **Alignment:** Align the binary points of the numbers being added or subtracted. This might require padding with leading zeros (for integer part) or trailing zeros (for fractional part).
    *   **Perform:**  Perform addition or subtraction as with regular binary numbers.
    *   **Overflow/Underflow:**  Check for overflow or underflow in the integer part. Overflow occurs when the result is too large to be represented with the given number of integer bits. Underflow occurs if the minimum representable number is exceeded.
    *   **Truncation/Rounding:** If the result has more fractional bits than the fixed-point format allows, truncate or round the result to fit the format.

    **Example:** Add 2.5 and 1.75 using (3.2) representation:

    *   2.5 = 010.10<sub>2</sub>
    *   1.75 = 001.11<sub>2</sub>
    *   010.10 + 001.11 = 100.01
    *   Result: 100.01<sub>2</sub> = 4.25

*   **Multiplication and Division:** (More Complex, Typically Handled by Specialized Hardware or Software)
    *   These operations can significantly change the position of the binary point and might require shifting and scaling of the results to maintain the fixed-point format.

**5. Range and Precision**

*   **Range:** The range of a fixed-point number system is determined by the number of integer bits (`I`). If using unsigned representation, range is from 0 to (2<sup>I</sup> - 2<sup>-F</sup>). For signed representation, range is -(2<sup>I-1</sup>) to (2<sup>I-1</sup> - 2<sup>-F</sup>).
*   **Precision:** The precision of a fixed-point number system is determined by the number of fractional bits (`F`). It represents the smallest difference between two representable numbers.  Precision = 2<sup>-F</sup>.
*   **Trade-offs:** Increasing the number of integer bits (`I`) increases the range but reduces the precision. Increasing the number of fractional bits (`F`) increases the precision but reduces the range.  The total number of bits dictates the hardware requirements (memory, processing).
*   **Example:** For an (8.8) unsigned fixed-point number system:
    *   Range: 0 to (2<sup>8</sup> - 2<sup>-8</sup>) = 0 to (256 - 0.0039) = 0 to 255.9961
    *   Precision: 2<sup>-8</sup> = 0.0039

**6. Limitations and Considerations**

*   **Limited Range and Precision:**  Fixed-point numbers have a limited range and precision compared to floating-point numbers.
*   **Overflow and Underflow:**  Can easily lead to overflow or underflow if not handled carefully.
*   **Scaling and Rounding Errors:** Arithmetic operations may introduce scaling and rounding errors that can accumulate over time.
*   **Choosing the Right Format:** Selecting the appropriate number of integer and fractional bits is crucial for a given application. Requires careful analysis of the expected range and precision requirements.

**7. Important Points to Remember**

*   Fixed-point numbers are a trade-off between simplicity/efficiency and range/precision.
*   Understanding the number of integer and fractional bits is crucial for determining range and precision.
*   Careful overflow/underflow handling is essential.
*   Applications: Embedded systems, digital signal processing (DSP), control systems, games.

**Practice Questions/Exercises:**

1.  **Convert 7.375 to (4.4) fixed-point binary.**
    *   Integer part: 7<sub>10</sub> = 0111<sub>2</sub>
    *   Fractional part: 0.375 * 2 = 0.75 -> 0
                      0.75 * 2 = 1.5 -> 1
                      0.5 * 2 = 1.0 -> 1
                      0.0 * 2 = 0.0 -> 0
        0.375<sub>10</sub> = 0.0110<sub>2</sub>
    *   Result: **0111.0110<sub>2</sub>**

2.  **Convert 1101.0101<sub>2</sub> (4.4 fixed-point) to decimal.**
    *   (1 * 2<sup>3</sup>) + (1 * 2<sup>2</sup>) + (0 * 2<sup>1</sup>) + (1 * 2<sup>0</sup>) + (0 * 2<sup>-1</sup>) + (1 * 2<sup>-2</sup>) + (0 * 2<sup>-3</sup>) + (1 * 2<sup>-4</sup>)
    *   = 8 + 4 + 0 + 1 + 0 + 0.25 + 0 + 0.0625 = **13.3125<sub>10</sub>**

3.  **Add 3.125 and 2.875 using (3.3) fixed-point arithmetic. Show the binary representation and the decimal result.**
    *   3.125 = 011.001<sub>2</sub>
    *   2.875 = 010.111<sub>2</sub>
    *   011.001 + 010.111 = 110.000
    *   Result: 110.000<sub>2</sub> = **6.0<sub>10</sub>**

4.  **What is the range and precision of a (6.2) unsigned fixed-point number system?**
    *   Range: 0 to (2<sup>6</sup> - 2<sup>-2</sup>) = 0 to (64 - 0.25) = **0 to 63.75**
    *   Precision: 2<sup>-2</sup> = **0.25**

5. **Explain the trade-off between range and precision in fixed-point number systems.**
    *   Increasing the number of integer bits (I) increases the range of representable values, but decreases the precision because fewer bits are available for the fractional part.  Conversely, increasing the number of fractional bits (F) increases the precision (allows representing finer differences between values) but reduces the range, as fewer bits are available for the integer portion. The total number of bits is usually limited, so choosing I and F involves a trade-off to best suit the application's requirements.

These notes should provide a comprehensive overview of fixed-point number systems, covering the learning outcomes, key concepts, examples, and practice questions. Good luck with your studies!
