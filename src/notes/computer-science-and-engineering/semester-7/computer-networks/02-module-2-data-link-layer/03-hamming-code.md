---
title: "Hamming Code"
subject: "COMPUTER NETWORKS"
module: "Module 2: Data Link Layer:"
branch: "Computer Science and Engineering"
semester: 7
topicId: "6841627a0fc9aa1fdbc8c926"
status: "completed"
scrapedAt: "2026-05-20T17:02:38.696Z"
---
# Computer Networks: Module 2 - Data Link Layer

## Topic: Hamming Code

### Learning Outcomes:

By the end of this topic, you should be able to:

*   Understand the need for error detection and correction in data transmission.
*   Explain the concept of parity bits and their role in error detection.
*   Describe the principles of Hamming codes for both error detection and correction.
*   Calculate the number of parity bits required for a given data word length.
*   Construct a Hamming code for a given data word.
*   Detect and correct single-bit errors in a received Hamming code word.
*   Understand the limitations of Hamming codes.

---

### 1. The Need for Error Detection and Correction

**1.1 Introduction to Errors in Data Transmission:**

*   Data transmitted over a communication channel can be corrupted due to various factors like:
    *   **Noise:** Electrical interference, thermal noise.
    *   **Attenuation:** Signal strength loss over distance.
    *   **Distortion:** Signal shape changes.
    *   **Interference:** Signals from other sources.
*   These errors can lead to incorrect data being received, causing malfunctions in systems or misinterpretation of information.

**1.2 Error Detection vs. Error Correction:**

*   **Error Detection:** The process of identifying whether an error has occurred during transmission. If an error is detected, the receiver typically requests a retransmission of the data.
    *   **Pros:** Simpler to implement, less overhead.
    *   **Cons:** Requires retransmission, which can be inefficient for reliable channels or real-time applications.
*   **Error Correction:** The process of not only detecting but also correcting the error without requiring retransmission.
    *   **Pros:** More efficient for real-time applications, reduces latency.
    *   **Cons:** More complex to implement, requires more overhead (more redundant bits).

**1.3 Role of Redundancy:**

*   Both error detection and correction rely on adding redundant bits (parity bits) to the original data. These extra bits are calculated based on the data bits and are transmitted along with the data.
*   By examining the relationship between the received data bits and parity bits, the receiver can determine if errors have occurred and, in some cases, where they are located.

---

### 2. Parity Bits: The Foundation

**2.1 Basic Concept:**

*   A parity bit is a single redundant bit added to a data word to make the total number of '1's in the word either even or odd.
*   **Even Parity:** The parity bit is set such that the total number of '1's in the data word plus the parity bit is even.
*   **Odd Parity:** The parity bit is set such that the total number of '1's in the data word plus the parity bit is odd.

**2.2 Example of Parity:**

Let's consider a 4-bit data word: `1011`

*   **Even Parity:**
    *   Number of '1's in `1011` is 3.
    *   To make the total even, we need one more '1'.
    *   Parity bit = `1`.
    *   Transmitted word (including parity): `11011` (5 bits). Total '1's = 4 (even).

*   **Odd Parity:**
    *   Number of '1's in `1011` is 3.
    *   To make the total odd, we need zero more '1's.
    *   Parity bit = `0`.
    *   Transmitted word (including parity): `01011` (5 bits). Total '1's = 3 (odd).

**2.3 Limitations of Simple Parity:**

*   Simple parity can detect **single-bit errors**.
*   It **cannot detect double-bit errors** (if two bits flip, the parity remains the same).
*   It **cannot correct any errors**; it only indicates that an error *might* have occurred.

---

### 3. Hamming Codes: Error Detection and Correction

**3.1 Introduction to Hamming Codes:**

*   Developed by Richard Hamming, Hamming codes are a class of linear error-correcting codes.
*   They are capable of detecting up to **two-bit errors** and correcting **single-bit errors**.
*   They achieve this by strategically placing parity bits at specific positions within the transmitted codeword.

**3.2 Calculating the Number of Parity Bits (p):**

*   For a data word of length 'm' bits, we need 'p' parity bits such that the total number of bits in the codeword (n = m + p) can represent $2^p$ unique states. These states must be sufficient to:
    *   Represent the 'm' data bits.
    *   Represent the 'p' parity bits themselves.
    *   Represent the 'n' possible single-bit error positions (including no error).
*   The condition is: $2^p \ge m + p + 1$

**3.3 Formula for Number of Parity Bits:**

The formula to determine the minimum number of parity bits required ($p$) for a given data word length ($m$) is:

$2^p \ge m + p + 1$

**Example:**

Let's find the number of parity bits for a 4-bit data word ($m=4$):

*   If $p=1$: $2^1 = 2$. $m+p+1 = 4+1+1 = 6$. $2 < 6$ (not enough).
*   If $p=2$: $2^2 = 4$. $m+p+1 = 4+2+1 = 7$. $4 < 7$ (not enough).
*   If $p=3$: $2^3 = 8$. $m+p+1 = 4+3+1 = 8$. $8 \ge 8$ (sufficient).

So, for a 4-bit data word, we need **3 parity bits**. The total codeword length will be $m+p = 4+3 = 7$ bits.

**3.4 Placement of Parity Bits:**

*   Parity bits are placed at positions that are powers of 2: $2^0, 2^1, 2^2, 2^3, \ldots$ (which are positions 1, 2, 4, 8, ... in the codeword).
*   Data bits fill the remaining positions.

**3.5 Calculating Parity Bits:**

Each parity bit ($P_i$) checks a specific set of bit positions in the codeword. A parity bit at position $2^k$ checks all bit positions whose binary representation has a '1' at the $k$-th bit (from the right, starting at 0).

*   **$P_1$ (at position 1, $2^0$):** Checks positions where the least significant bit (LSB) in the binary representation is 1. (1, 3, 5, 7, 9, 11, ...)
*   **$P_2$ (at position 2, $2^1$):** Checks positions where the second LSB is 1. (2, 3, 6, 7, 10, 11, ...)
*   **$P_3$ (at position 4, $2^2$):** Checks positions where the third LSB is 1. (4, 5, 6, 7, 12, 13, 14, 15, ...)
*   **$P_4$ (at position 8, $2^3$):** Checks positions where the fourth LSB is 1. (8, 9, 10, 11, 12, 13, 14, 15, ...)
    *   And so on...

**3.6 Constructing a Hamming Code (Example: 4-bit data):**

Let the data word be `1011` ($m=4$). We need $p=3$ parity bits. Codeword length $n=7$.

1.  **Codeword Structure:**
    *   Positions: `_ _ _ _ _ _ _` (1-indexed)
    *   Binary: `001 000 001` (3 parity bits, 4 data bits)
    *   Parity bit positions: 1, 2, 4 ($P_1, P_2, P_3$)
    *   Data bit positions: 3, 5, 6, 7
    *   Codeword: `P1 P2 D1 P3 D2 D3 D4`

2.  **Place Data Bits:**
    *   $D_1 = 1$ (at pos 3)
    *   $D_2 = 0$ (at pos 5)
    *   $D_3 = 1$ (at pos 6)
    *   $D_4 = 1$ (at pos 7)
    *   Codeword: `P1 P2 1 P3 0 1 1`

3.  **Calculate Parity Bits (using even parity):**

    *   **$P_1$ (checks 1, 3, 5, 7):**
        *   Positions to check: 1, 3, 5, 7
        *   Bits at these positions: $P_1, D_1, D_2, D_4$
        *   Values: $P_1, 1, 0, 1$
        *   To make the number of '1's even, $P_1$ must be `0`. (Current '1's: 2)

    *   **$P_2$ (checks 2, 3, 6, 7):**
        *   Positions to check: 2, 3, 6, 7
        *   Bits at these positions: $P_2, D_1, D_3, D_4$
        *   Values: $P_2, 1, 1, 1$
        *   To make the number of '1's even, $P_2$ must be `1`. (Current '1's: 3)

    *   **$P_3$ (checks 4, 5, 6, 7):**
        *   Positions to check: 4, 5, 6, 7
        *   Bits at these positions: $P_3, D_2, D_3, D_4$
        *   Values: $P_3, 0, 1, 1$
        *   To make the number of '1's even, $P_3$ must be `0`. (Current '1's: 2)

4.  **Final Hamming Codeword:**
    *   $P_1=0, P_2=1, P_3=0$
    *   Codeword: `0110011`

---

### 4. Error Detection and Correction with Hamming Codes

**4.1 The Syndrome:**

*   When a Hamming codeword is received, the receiver recalculates the parity bits based on the received data and parity bits.
*   These recalculated parity bits form a "syndrome."
*   The syndrome is a binary number that indicates the position of the error.

**4.2 Calculating the Syndrome (using even parity):**

For each parity bit $P_i$, calculate the parity of the positions it checks, including $P_i$ itself.

*   **$S_1$ (for $P_1$):** Calculate the parity of positions 1, 3, 5, 7. If the parity is incorrect (odd number of '1's), $S_1=1$, otherwise $S_1=0$.
*   **$S_2$ (for $P_2$):** Calculate the parity of positions 2, 3, 6, 7. If the parity is incorrect, $S_2=1$, otherwise $S_2=0$.
*   **$S_3$ (for $P_3$):** Calculate the parity of positions 4, 5, 6, 7. If the parity is incorrect, $S_3=1$, otherwise $S_3=0$.

The syndrome is formed by concatenating the parity check bits: $S = S_3 S_2 S_1$.

**4.3 Interpreting the Syndrome:**

*   **Syndrome = 000 (Zero):** No error detected.
*   **Syndrome = Non-zero:** The binary value of the syndrome indicates the position of the single-bit error. For example, if the syndrome is `101` (binary 5), it means the bit at position 5 is in error.

**4.4 Correcting the Error:**

*   If a non-zero syndrome is detected, flip the bit at the position indicated by the syndrome.

**4.5 Example: Detecting and Correcting an Error:**

Assume the original codeword was `0110011`.

*   **Scenario 1: Single-bit error at position 5.**
    *   Received codeword: `0110111` (bit at position 5 flipped from 0 to 1)
    *   Let's check the parity:
        *   **$P_1$ checks 1, 3, 5, 7:** Received bits are `0, 1, 1, 1`. Number of '1's = 3 (odd). Parity is incorrect. $S_1 = 1$.
        *   **$P_2$ checks 2, 3, 6, 7:** Received bits are `1, 1, 1, 1`. Number of '1's = 4 (even). Parity is correct. $S_2 = 0$.
        *   **$P_3$ checks 4, 5, 6, 7:** Received bits are `0, 1, 1, 1`. Number of '1's = 3 (odd). Parity is incorrect. $S_3 = 1$.
    *   **Syndrome:** $S_3 S_2 S_1 = 101$ (binary).
    *   **Interpretation:** The syndrome `101` (decimal 5) indicates an error at position 5.
    *   **Correction:** Flip the bit at position 5. `0110111` becomes `0110011`. This is the original codeword.

*   **Scenario 2: No error.**
    *   Received codeword: `0110011`
    *   **$P_1$ checks 1, 3, 5, 7:** Received bits are `0, 1, 0, 1`. Number of '1's = 2 (even). $S_1 = 0$.
    *   **$P_2$ checks 2, 3, 6, 7:** Received bits are `1, 1, 1, 1`. Number of '1's = 4 (even). $S_2 = 0$.
    *   **$P_3$ checks 4, 5, 6, 7:** Received bits are `0, 0, 1, 1`. Number of '1's = 2 (even). $S_3 = 0$.
    *   **Syndrome:** $S_3 S_2 S_1 = 000$. No error.

**4.6 Double-Bit Errors:**

*   Hamming codes can detect (but not correct) double-bit errors.
*   If two bits are flipped, the syndrome will be non-zero, but it will point to an incorrect position. The receiver will attempt to correct the bit at that indicated position, which might corrupt the data further.

---

### 5. Limitations of Hamming Codes

*   **Single-bit error correction:** Hamming codes are designed to correct only single-bit errors. They cannot inherently correct multiple-bit errors.
*   **Efficiency for multiple errors:** While they can detect double-bit errors, they don't correct them. For higher error rates or the need to correct multiple errors, more sophisticated codes (like Reed-Solomon codes) are required.
*   **Overhead:** Adding parity bits increases the total number of bits transmitted, which can reduce the effective data rate. The overhead is higher for longer data words.
*   **Complexity:** While simpler than some advanced codes, the calculation and checking of parity bits add computational overhead at both the sender and receiver.

---

### 6. Practice Questions and Exercises

**Question 1:**

A sender wants to transmit the data word `1101`.
a) Determine the minimum number of parity bits required using the Hamming code.
b) Calculate the Hamming codeword for the data word `1101` using even parity.

**Question 2:**

The following Hamming codeword was received: `1010110`. Assume even parity was used.
a) Calculate the syndrome.
b) Based on the syndrome, is there an error? If yes, at which position is the error located?
c) If there is an error, correct it to obtain the original data word.

**Question 3:**

Explain why simple parity is insufficient for reliable data transmission compared to Hamming codes.

---

### 7. Answers to Practice Questions

**Answer 1:**

a) Data word length $m = 4$.
We need to find $p$ such that $2^p \ge m + p + 1$.
*   $p=1$: $2^1 = 2 < 4 + 1 + 1 = 6$
*   $p=2$: $2^2 = 4 < 4 + 2 + 1 = 7$
*   $p=3$: $2^3 = 8 \ge 4 + 3 + 1 = 8$
Therefore, **3 parity bits** are required.

b) Data word: `1101`. Codeword length $n = m+p = 4+3 = 7$.
Codeword structure: `P1 P2 D1 P3 D2 D3 D4`
Data placement: $D_1=1$ (pos 3), $D_2=1$ (pos 5), $D_3=0$ (pos 6), $D_4=1$ (pos 7).
Codeword: `P1 P2 1 P3 1 0 1`

Calculating parity bits (even parity):
*   $P_1$ (checks 1, 3, 5, 7): Bits are $P_1, 1, 1, 1$. For even parity, $P_1=1$. (3 ones currently)
*   $P_2$ (checks 2, 3, 6, 7): Bits are $P_2, 1, 0, 1$. For even parity, $P_2=0$. (2 ones currently)
*   $P_3$ (checks 4, 5, 6, 7): Bits are $P_3, 1, 0, 1$. For even parity, $P_3=0$. (2 ones currently)

Hamming Codeword: `1010101`

**Answer 2:**

Received codeword: `1010110` (positions 1 to 7)

a) Calculating the syndrome (even parity):
*   $P_1$ (checks 1, 3, 5, 7): Bits are `1, 1, 1, 0`. Number of '1's = 3 (odd). Parity incorrect. $S_1 = 1$.
*   $P_2$ (checks 2, 3, 6, 7): Bits are `0, 1, 1, 0`. Number of '1's = 2 (even). Parity correct. $S_2 = 0$.
*   $P_3$ (checks 4, 5, 6, 7): Bits are `0, 1, 1, 0`. Number of '1's = 2 (even). Parity correct. $S_3 = 0$.

Syndrome: $S_3 S_2 S_1 = 001$.

b) The syndrome is `001` (binary), which is decimal 1.
Yes, there is an error at **position 1**.

c) Correcting the error at position 1:
Received codeword: `1010110`
Flip the bit at position 1: `0010110`

The original data word can be extracted by taking bits from non-parity positions (3, 5, 6, 7): `110`.
*(Correction: For a 7-bit codeword, the data bits are at positions 3, 5, 6, 7. So, the extracted data word is `110` from positions 3, 5, 6, 7 of the corrected codeword `0010110`. This means bits at pos 3, 5, 6, 7 are 1, 1, 0, 1. The data word is 1101.)*
*Correction for clarity*: The data bits are at positions 3, 5, 6, 7. In the corrected codeword `0010110`, these bits are 1 (pos 3), 1 (pos 5), 0 (pos 6), 0 (pos 7). This means the data word is `1100`. Let's re-verify the original encoding for `1101`.
Original codeword for `1101` was `1010101`.
If error at pos 1: `0010101`.
Let's check this received word: `0010101`.
$P_1$ checks 1,3,5,7: `0,1,1,1` -> odd, $S_1=1$.
$P_2$ checks 2,3,6,7: `0,1,0,1` -> even, $S_2=0$.
$P_3$ checks 4,5,6,7: `0,1,0,1` -> even, $S_3=0$.
Syndrome: 001. Error at pos 1. Corrected: `1010101`. Extracted data: `1101`.

Let's assume the received word in the question was intended to produce a valid syndrome. If the received word was `0010110` and the intended data was `1101`.
Original codeword for `1101` was `1010101`.
If error at pos 5: `1010001`.
If error at pos 6: `1010111`.
If error at pos 7: `1010100`.

Let's stick with the provided received word `1010110` and assume it was a valid transmission with a single error from some data.
Corrected codeword: `0010110`.
Extracted data bits:
Position 3: `1`
Position 5: `1`
Position 6: `0`
Position 7: `0`
Extracted data word: `1100`.

**Answer 3:**

Simple parity can only detect single-bit errors. If a double-bit error occurs, the parity remains unchanged, and the error goes undetected. Furthermore, simple parity does not provide any mechanism to locate the error. If an error is detected, the receiver has no information about which bit is incorrect and must request retransmission. Hamming codes, on the other hand, use strategically placed parity bits to not only detect single-bit errors but also to pinpoint the exact location of the error, allowing for automatic correction without retransmission. This makes Hamming codes more robust and efficient for ensuring data integrity in communication systems.

---

### Important Points to Remember:

*   **$2^p \ge m + p + 1$**: The fundamental formula for calculating the number of parity bits.
*   **Parity bit positions**: Powers of 2 (1, 2, 4, 8, ...).
*   **Parity check coverage**: Each parity bit checks positions whose binary representation has a '1' in the corresponding bit position.
*   **Syndrome**: The calculated value from received bits that indicates an error.
*   **Syndrome = 000**: No error.
*   **Non-zero Syndrome**: Indicates the position of a single-bit error.
*   **Hamming codes correct single-bit errors and detect double-bit errors.**
*   Always specify the parity scheme (even or odd) used. Even parity is more common in examples.
