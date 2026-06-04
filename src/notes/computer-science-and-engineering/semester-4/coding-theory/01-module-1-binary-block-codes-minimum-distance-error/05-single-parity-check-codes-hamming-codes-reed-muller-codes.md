---
title: "Single parity check codes, Hamming codes, Reed Muller codes."
subject: "CODING THEORY"
module: "Module 1: Binary block codes, Minimum distance, Error"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b105"
status: "completed"
scrapedAt: "2026-05-20T16:10:26.322Z"
---
## CODING THEORY - Module 1: Binary Block Codes, Minimum Distance, Error

**Topic: Single Parity Check Codes, Hamming Codes, Reed-Muller Codes**

**Learning Outcomes:**

*   Understand the principle and construction of Single Parity Check (SPC) codes.
*   Understand the principle and construction of Hamming codes.
*   Understand the principle and construction of Reed-Muller codes.
*   Calculate the minimum distance of each code and its error detection and correction capabilities.
*   Encode and decode messages using SPC, Hamming, and Reed-Muller codes.
*   Compare and contrast SPC, Hamming, and Reed-Muller codes.

---

### 1. Single Parity Check (SPC) Codes

*   **Definition:**  A Single Parity Check (SPC) code is the simplest form of error detection code. It adds a single parity bit to a block of data bits to ensure that the total number of 1s in the encoded block (data bits + parity bit) is either even (even parity) or odd (odd parity).

*   **Construction:**
    *   **Data Bits:** Let 'k' be the number of data bits.
    *   **Parity Bit:** The (k+1)th bit is the parity bit.
        *   **Even Parity:**  The parity bit is set such that the total number of 1s in the k+1 bits is even.
        *   **Odd Parity:** The parity bit is set such that the total number of 1s in the k+1 bits is odd.

*   **Encoding:**
    *   Calculate the number of 1s in the data bits.
    *   If using even parity:
        *   If the number of 1s is even, set the parity bit to 0.
        *   If the number of 1s is odd, set the parity bit to 1.
    *   If using odd parity:
        *   If the number of 1s is even, set the parity bit to 1.
        *   If the number of 1s is odd, set the parity bit to 0.

*   **Decoding and Error Detection:**
    *   Count the number of 1s in the received codeword (data bits + parity bit).
    *   If using even parity:
        *   If the number of 1s is even, assume no error.
        *   If the number of 1s is odd, detect an error.
    *   If using odd parity:
        *   If the number of 1s is odd, assume no error.
        *   If the number of 1s is even, detect an error.

*   **Parameters:**
    *   Block length: n = k + 1
    *   Number of data bits: k
    *   Code rate: R = k/n = k/(k+1)
    *   Minimum distance: d_min = 2

*   **Error Detection and Correction Capabilities:**
    *   **Error Detection:** SPC codes can detect all odd numbers of errors.  If an odd number of bits are flipped during transmission, the parity will be incorrect, and the error will be detected.
    *   **Error Correction:** SPC codes **cannot** correct any errors. They can only detect the presence of an error.

*   **Example:**  Encoding the data bits `1010` using even parity:
    *   Data bits: `1010` (k=4)
    *   Number of 1s: 2 (even)
    *   Parity bit: 0
    *   Encoded codeword: `10100`

*   **Example:**  Detecting an error in the received codeword `11011` using even parity:
    *   Received codeword: `11011`
    *   Number of 1s: 4 (even)
    *   Since the parity is even, the SPC decoder would assume that the message was transmitted without errors.

*   **Important Points:**
    *   SPC codes are simple to implement but have limited error correction capabilities.
    *   They are only effective for detecting single bit errors or odd numbers of bit errors.

### 2. Hamming Codes

*   **Definition:** Hamming codes are a family of linear block codes designed to correct single-bit errors.  They are perfect codes, meaning they achieve the highest possible code rate for a given block length and minimum distance.

*   **Construction:**
    *   The parameters of a Hamming code are defined by an integer `r ≥ 2`.
    *   Block length: n = 2<sup>r</sup> - 1
    *   Number of data bits: k = 2<sup>r</sup> - 1 - r
    *   Number of parity bits: r
    *   Code rate: R = k/n = (2<sup>r</sup> - 1 - r) / (2<sup>r</sup> - 1)

*   **Parity Bit Placement:**
    *   Parity bits are placed at bit positions that are powers of 2 (1, 2, 4, 8, 16, etc.).
    *   Data bits fill the remaining positions.

*   **Parity Bit Calculation:**
    *   Each parity bit checks a specific set of bits.
    *   The parity bit at position 2<sup>i</sup> checks all bit positions that have a 1 in the i-th position of their binary representation.
    *   For example:
        *   Parity bit at position 1 (2<sup>0</sup>) checks positions 1, 3, 5, 7, 9, 11, ...
        *   Parity bit at position 2 (2<sup>1</sup>) checks positions 2, 3, 6, 7, 10, 11, ...
        *   Parity bit at position 4 (2<sup>2</sup>) checks positions 4, 5, 6, 7, 12, 13, 14, 15,...

*   **Encoding:**
    1.  Determine the values of `n` and `k` for the desired Hamming code.
    2.  Place the parity bits at positions 1, 2, 4, 8, etc.  Place the data bits in the remaining positions.
    3.  Calculate each parity bit based on the data bits it checks using even (or odd) parity.

*   **Decoding and Error Correction:**
    1.  Recalculate the parity bits based on the received codeword.
    2.  Form the syndrome by concatenating the recalculated parity bits.
    3.  The syndrome (interpreted as a binary number) represents the position of the error.  A syndrome of 0 indicates no error.
    4.  Flip the bit at the position indicated by the syndrome to correct the error.

*   **Example:** Hamming(7, 4) code (r=3)
    *   n = 2<sup>3</sup> - 1 = 7
    *   k = 2<sup>3</sup> - 1 - 3 = 4
    *   Let the data bits be `1011`.
    *   Place data bits: `_ _ 1 _ 0 1 1` (where '_' represents a parity bit position)
    *   Assign parity bits p1, p2, p4: `p1 p2 1 p4 0 1 1`
    *   Calculate p1: checks positions 1, 3, 5, 7.  So, p1 + 1 + 0 + 1 = even => p1 = 0
    *   Calculate p2: checks positions 2, 3, 6, 7.  So, p2 + 1 + 1 + 1 = even => p2 = 1
    *   Calculate p4: checks positions 4, 5, 6, 7.  So, p4 + 0 + 1 + 1 = even => p4 = 0
    *   Encoded codeword: `0 1 1 0 0 1 1`

    *   **Error Correction Example:** Suppose the received codeword is `0 1 1 1 0 1 1` (error in position 4).
        *   Recalculate p1: 0 + 1 + 0 + 1 = 0 (even)
        *   Recalculate p2: 1 + 1 + 1 + 1 = 0 (even)
        *   Recalculate p4: 1 + 0 + 1 + 1 = 1 (odd)
        *   Syndrome: `100` (binary 4)
        *   Error is in position 4.  Flip the bit in position 4: `0 1 1 0 0 1 1`

*   **Parameters:**
    *   Minimum distance: d_min = 3

*   **Error Detection and Correction Capabilities:**
    *   **Error Detection:** Hamming codes can detect up to two errors.
    *   **Error Correction:** Hamming codes can correct single-bit errors.

*   **Important Points:**
    *   Hamming codes are efficient for single-bit error correction.
    *   They are widely used in memory systems and other applications where single-bit errors are common.
    *   They are perfect codes, meaning they achieve the theoretical limit for error correction capability given their length and rate.

### 3. Reed-Muller Codes

*   **Definition:** Reed-Muller (RM) codes are a class of linear block codes that can be defined recursively. They provide a range of code rates and error correction capabilities, making them suitable for various applications.

*   **Construction:**
    *   RM codes are denoted by RM(r, m), where:
        *   `r` is the order of the code (determines error correction capability).
        *   `m` determines the block length.

    *   **Block Length:** n = 2<sup>m</sup>
    *   **Dimension (Number of data bits):** k = ∑<sub>i=0</sub><sup>r</sup> (<sup>m</sup>C<sub>i</sub>) (sum of binomial coefficients)

        *   Where (<sup>m</sup>C<sub>i</sub>) = m! / (i! * (m-i)!)

    *   **Code Rate:** R = k/n = (∑<sub>i=0</sub><sup>r</sup> (<sup>m</sup>C<sub>i</sub>)) / 2<sup>m</sup>

    *   **Recursive Definition:**  The RM(r, m) code can be defined recursively using the following construction based on two RM(r, m-1) and RM(r-1, m-1) codes:

        *   C<sub>1</sub> is RM(r, m-1) with length n<sub>1</sub>=2<sup>m-1</sup>
        *   C<sub>2</sub> is RM(r-1, m-1) with length n<sub>2</sub>=2<sup>m-1</sup>

        *   Then, C = { (u, u+v) | u ∈ C<sub>1</sub>, v ∈ C<sub>2</sub>} which is RM(r, m) has length n=2<sup>m</sup>=n<sub>1</sub>+n<sub>2</sub>=2<sup>m-1</sup>+2<sup>m-1</sup>
*   **Basis Vectors:**  A Reed-Muller code can be defined by its basis vectors. These basis vectors are formed by taking the product of variables x<sub>1</sub>, x<sub>2</sub>, ..., x<sub>m</sub>, where each x<sub>i</sub> can be either 0 or 1.

    *   For example, for RM(1, 3), the basis vectors are:
        *   1 (the all-ones vector)
        *   x<sub>1</sub>
        *   x<sub>2</sub>
        *   x<sub>3</sub>

*   **Encoding:**
    1.  Determine the parameters `r` and `m` for the desired Reed-Muller code.
    2.  Calculate the block length `n` and the dimension `k`.
    3.  Represent the message as a linear combination of the basis vectors.
    4.  The encoded codeword is the result of this linear combination.
*   **Decoding:**
    *   Decoding RM codes can be complex, especially for higher-order codes.  A common decoding algorithm is the **majority-logic decoding**.

*   **Parameters:**
    *   Minimum distance: d_min = 2<sup>m-r</sup>

*   **Error Detection and Correction Capabilities:**
    *   **Error Detection:** RM codes can detect up to d_min - 1 errors.
    *   **Error Correction:** RM codes can correct up to ⌊(d_min - 1)/2⌋ errors.

*   **Examples:**

    *   **RM(0, m):** Repetition code of length 2<sup>m</sup>.
    *   **RM(m-1, m):**  Single parity check code of length 2<sup>m</sup>.
    *   **RM(1, m):**  First-order Reed-Muller code.

    *   **RM(1,3) example**
        * r=1, m=3
        * n = 2<sup>3</sup> = 8
        * k = (<sup>3</sup>C<sub>0</sub>) + (<sup>3</sup>C<sub>1</sub>) = 1 + 3 = 4
        * Basis vectors will correspond to the following logic functions
            * f1 = 1
            * f2 = x1
            * f3 = x2
            * f4 = x3
            * the bits are indexed from 0 to n-1. The variables are defined as follows:
                * x1 = (0,0,0,0,1,1,1,1)
                * x2 = (0,0,1,1,0,0,1,1)
                * x3 = (0,1,0,1,0,1,0,1)
            *  If the input bits are (1,0,1,1) then the codeword c is the linear combination
                *  c = 1*f1 + 0*f2 + 1*f3 + 1*f4 = f1+f3+f4
                *  c = (1,1,1,1,1,1,1,1) + (0,0,1,1,0,0,1,1) + (0,1,0,1,0,1,0,1) = (1,0,0,1,1,0,0,1)

*   **Important Points:**
    *   Reed-Muller codes offer a trade-off between code rate and error correction capability.
    *   Lower-order RM codes have higher code rates but weaker error correction.
    *   Higher-order RM codes have lower code rates but stronger error correction.
    *   RM codes are used in various applications, including satellite communication, deep space exploration, and wireless communication.
    *   They are particularly useful in channels with high noise levels.

---

### Comparison of SPC, Hamming, and Reed-Muller Codes

| Feature             | Single Parity Check (SPC) | Hamming Code             | Reed-Muller Code        |
|----------------------|---------------------------|--------------------------|--------------------------|
| Error Detection    | Odd number of errors       | Up to 2 errors           | Up to d_min - 1 errors     |
| Error Correction   | None                      | Single-bit errors        | Up to ⌊(d_min - 1)/2⌋ errors |
| Minimum Distance   | 2                         | 3                        | 2<sup>m-r</sup>            |
| Complexity          | Low                       | Medium                   | High                    |
| Code Rate           | High                      | Medium                   | Variable                 |
| Application         | Simple error detection     | Memory systems, error detection and correction | Space communication, deep space exploration, noise correction |
| Ease of Implementation| Simple                  | Moderate                | Complex                  |
| Code length (n)     | k+1                       | 2<sup>r</sup>-1               | 2<sup>m</sup>                 |

---

### Practice Questions and Exercises

1.  **SPC Code:**  Encode the data `11001` using odd parity. What is the resulting codeword?
    *   **Answer:**  `110011` (The number of 1s in `11001` is 3, so the parity bit must be 1 to make the total number of 1s odd.)

2.  **SPC Code:** You receive the codeword `011010` and are using even parity. Is there an error? If so, can you correct it?
    *   **Answer:** Yes, there is an error. The number of 1s is 3, which is odd, violating the even parity rule.  You cannot correct the error with SPC alone.

3.  **Hamming Code:** Construct a Hamming(7, 4) code. What are the possible codewords? Encode the data `1001`.
    *   **Answer:** The 16 codewords would be all possible combinations of the information bits. The encoding for `1001` can be done by placing the info bits in respective bit locations and calculating parity bits.

4.  **Hamming Code:**  You receive the codeword `1011010` which was encoded using a Hamming(7,4) code. Assuming single-bit error, find the original data bits.
    *   **Answer:** Recalculate parity bits and find the error location using the syndrome. Flip that bit. Then, extract the data bits from the corrected code word.

5.  **Reed-Muller Code:**  Consider RM(1,2). What is n and k for this code? List the basis vectors.
     * **Answer:**
         * n = 2<sup>2</sup> = 4
         * k = (<sup>2</sup>C<sub>0</sub>) + (<sup>2</sup>C<sub>1</sub>) = 1 + 2 = 3
         * The basis vectors are
             * f1 = 1
             * f2 = x1
             * f3 = x2
             * x1 = (0,0,1,1)
             * x2 = (0,1,0,1)
             * f1= (1,1,1,1)

6.  **Comparison:**  What are the advantages and disadvantages of using a Hamming code over a Single Parity Check code?
    *   **Answer:** Hamming codes can correct single-bit errors, while SPC codes can only detect odd numbers of errors. Hamming codes have a lower code rate than SPC codes. Hamming Codes have higher minimum distance than SPC codes.

7.  **Reed-Muller:** What is the minimum distance of the RM(2,4) code?
    *   **Answer:** d_min = 2<sup>m-r</sup> = 2<sup>4-2</sup> = 2<sup>2</sup> = 4

---

### Important Points to Remember

*   **Minimum Distance (d_min):** This is the most important parameter because it determines the code's error detection and correction capabilities. A larger minimum distance means better error correction.
*   **Code Rate (R):**  This measures the efficiency of the code.  A higher code rate means more data bits are transmitted per codeword bit, but it also means less redundancy for error correction.
*   **Trade-offs:** There is always a trade-off between error correction capability (d_min) and code rate (R).
*   **Applications:**  The choice of which code to use depends on the specific application and the characteristics of the communication channel (e.g., noise level, acceptable error rate).
*   **Linearity:** All these codes (SPC, Hamming, Reed-Muller) are *linear*. This means that the sum of any two codewords is also a codeword. This property simplifies encoding and decoding.
