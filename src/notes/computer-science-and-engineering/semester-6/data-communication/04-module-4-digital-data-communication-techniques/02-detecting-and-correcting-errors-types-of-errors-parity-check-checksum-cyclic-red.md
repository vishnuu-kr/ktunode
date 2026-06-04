---
title: "Detecting and correcting errors - Types of errors, Parity check, Checksum, Cyclic Redundancy Check (CRC), Forward Error Correction (FEC), Hamming distance, Hamming code."
subject: "DATA COMMUNICATION"
module: "Module 4: Digital data communication techniques "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8beec"
status: "completed"
scrapedAt: "2026-05-20T16:51:45.429Z"
---
# Data Communication: Module 4 - Digital Data Communication Techniques

## Topic: Detecting and Correcting Errors

This module focuses on techniques used in digital data communication to ensure the integrity of transmitted data by detecting and correcting errors that may occur during transmission.

---

### **Learning Outcomes**

By the end of this module, you should be able to:

*   Identify different types of errors that can occur in digital data transmission.
*   Explain the principles of parity checks and their limitations.
*   Describe the checksum technique for error detection.
*   Understand the operation and advantages of Cyclic Redundancy Check (CRC).
*   Define Forward Error Correction (FEC) and its role.
*   Explain the concept of Hamming distance.
*   Understand the principles and application of Hamming codes for error detection and correction.

---

### **1. Types of Errors in Digital Data Transmission**

Errors are inevitable in data communication due to various physical phenomena affecting the transmission medium.

*   **Definition:** Errors are changes in the original data that occur during transmission.
*   **Causes:**
    *   **Noise:** Unwanted electrical or electromagnetic signals that interfere with the data signal.
        *   **Thermal Noise (White Noise):** Caused by the random movement of electrons in conductors due to temperature. It is present in all communication systems.
        *   **Intermodulation Noise:** Occurs when signals at different frequencies share the same transmission medium, generating new frequencies that interfere with the original signals.
        *   **Crosstalk:** Unwanted coupling of signals from one transmission line to another.
        *   **Impulse Noise:** Non-continuous, irregular noise caused by external factors like lightning, power surges, or faulty equipment. It tends to cause burst errors.
    *   **Attenuation:** The loss of signal strength over distance. If attenuation is too severe, the signal may become indistinguishable from noise.
    *   **Distortion:** Occurs when the shape of the signal is changed during transmission, often due to different frequency components of the signal traveling at different speeds through the medium.
    *   **Attenuation Distortion:** Different frequencies attenuate by different amounts.
    *   **Phase Distortion:** Different frequencies experience different phase shifts.

*   **Types of Errors based on impact:**
    *   **Single-Bit Error:** Only one bit in the data unit is changed (from 0 to 1 or 1 to 0).
        *   *Example:* If the original data is `10110010`, a single-bit error could result in `10110110`.
    *   **Burst Error:** Two or more bits in the data unit are corrupted. The number of consecutive bits affected is the *length* of the burst error.
        *   *Example:* If the original data is `101100101110`, a burst error of length 4 could result in `101101111110`.
        *   *Cause:* Often caused by impulse noise, which can affect a contiguous block of bits.

---

### **2. Error Detection Techniques**

These techniques add redundant bits to the original data to allow the receiver to detect if errors have occurred.

#### **2.1. Parity Check**

*   **Definition:** A simple error detection method that adds a parity bit to a data unit to make the total number of 1s either even or odd.
*   **Principle:**
    *   **Even Parity:** The parity bit is set to 0 or 1 such that the total number of 1s in the data unit (including the parity bit) is even.
    *   **Odd Parity:** The parity bit is set to 0 or 1 such that the total number of 1s in the data unit (including the parity bit) is odd.
*   **Encoding:**
    *   Count the number of 1s in the original data bits.
    *   If the count is odd and even parity is used, set the parity bit to 1.
    *   If the count is even and even parity is used, set the parity bit to 0.
    *   If the count is odd and odd parity is used, set the parity bit to 0.
    *   If the count is even and odd parity is used, set the parity bit to 1.
*   **Detection:**
    *   At the receiver, recount the total number of 1s in the received data unit (including the parity bit).
    *   If even parity is used and the total count is odd, an error is detected.
    *   If odd parity is used and the total count is even, an error is detected.
*   **Limitations:**
    *   **Cannot correct errors.**
    *   **Cannot detect** an even number of bit errors (e.g., two single-bit errors occurring in the same data unit). If two bits flip, the parity will remain the same.
    *   Typically used for single-bit error detection.

*   **Example (Even Parity):**
    *   Original Data: `1011001`
    *   Number of 1s = 4 (even)
    *   Parity bit = 0
    *   Transmitted data with parity: `10110010`
    *   *Scenario 1 (No error):* Receiver gets `10110010`. Count of 1s = 4 (even). No error detected.
    *   *Scenario 2 (Single-bit error):* Receiver gets `10110110`. Count of 1s = 5 (odd). Error detected.
    *   *Scenario 3 (Double-bit error):* Receiver gets `11110010`. Count of 1s = 5 (odd). Error detected.
    *   *Scenario 4 (Double-bit error):* Receiver gets `10100010`. Count of 1s = 4 (even). **Error NOT detected.**

#### **2.2. Checksum**

*   **Definition:** A more robust error detection technique that involves summing up all the data units and transmitting the sum (or a part of it) as the checksum.
*   **Principle:**
    1.  The data is divided into fixed-size blocks (e.g., 16-bit words).
    2.  All blocks are added together using one's complement arithmetic.
    3.  The one's complement of the sum is calculated and transmitted as the checksum.
    4.  At the receiver, all received blocks are added together using one's complement arithmetic.
    5.  The one's complement of this sum is calculated.
    6.  If the final one's complement is zero, the data is assumed to be error-free. Otherwise, an error is detected.
*   **Advantages:**
    *   Can detect more types of errors than simple parity checks, especially multiple bit errors within a block.
*   **Limitations:**
    *   **Cannot correct errors.**
    *   Less efficient than CRC for detecting burst errors.
    *   Can fail to detect certain error patterns where the sum of corrupted bits happens to cancel out the error.

*   **Example:**
    *   Data blocks: `1010101010101010` (Block 1), `1100110011001100` (Block 2)
    *   **Sender Side:**
        *   Block 1: `1010101010101010`
        *   Block 2: `1100110011001100`
        *   Sum (one's complement addition):
            ```
              1010101010101010
            + 1100110011001100
            ------------------
              0111100101101110
            ```
            (Carry out `1` is ignored in one's complement addition if not carried over to the next column).
        *   One's complement of the sum: `1000011010010001` (This is the checksum).
        *   Transmitted: Block 1, Block 2, Checksum.
    *   **Receiver Side:**
        *   Received Block 1: `1010101010101010`
        *   Received Block 2: `1100110011001100`
        *   Received Checksum: `1000011010010001`
        *   Summing all three:
            ```
              1010101010101010
              1100110011001100
            + 1000011010010001
            ------------------
              0111100101101111  (sum of first two)
            + 1000011010010001
            ------------------
              1111111111111110
            ```
        *   One's complement of the final sum: `0000000000000001`
        *   Since the result is not zero, an error is detected.

#### **2.3. Cyclic Redundancy Check (CRC)**

*   **Definition:** A powerful and widely used error detection technique based on polynomial division in modulo-2 arithmetic. It is particularly effective at detecting burst errors.
*   **Principle:**
    1.  **Polynomial Representation:** The data bits and the generator polynomial are represented as binary polynomials.
        *   Data bits `D` are represented as a polynomial `D(x)`.
        *   Generator polynomial `G(x)` is a predetermined polynomial of a specific degree.
    2.  **Appending Zeros:** The data bits are appended with `n` zeros, where `n` is the degree of the generator polynomial `G(x)`. This creates `D(x) * x^n`.
    3.  **Modulo-2 Division:** `D(x) * x^n` is divided by `G(x)` using modulo-2 arithmetic (XOR operations for subtraction and addition).
        *   The remainder of this division is the CRC value.
    4.  **Transmission:** The CRC value is appended to the original data bits and transmitted.
    5.  **Verification:** At the receiver, the received data (including the CRC) is divided by the same generator polynomial `G(x)`.
    6.  **Error Detection:** If the remainder is zero, the data is assumed to be error-free. If the remainder is non-zero, an error is detected.
*   **Modulo-2 Arithmetic:**
    *   Addition: XOR
    *   Subtraction: XOR
    *   Multiplication: Standard binary multiplication, followed by XORing terms with the same power.
    *   Division: Long division using XOR operations.
*   **Generator Polynomials:** Common CRC polynomials include:
    *   CRC-8
    *   CRC-16 (e.g., CRC-16-CCITT)
    *   CRC-32 (commonly used in Ethernet)
*   **Advantages:**
    *   **Excellent burst error detection:** Can detect all burst errors of a length less than or equal to the degree of the generator polynomial.
    *   Can detect most longer burst errors.
    *   High probability of detecting all single-bit and double-bit errors.
*   **Limitations:**
    *   **Cannot correct errors.**
    *   Choosing the right generator polynomial is crucial for its effectiveness.

*   **Example (Simplified CRC-3):**
    *   Assume Data: `1101`
    *   Assume Generator Polynomial `G(x)`: `1011` (degree 3)
    *   **Sender Side:**
        1.  Data in binary: `1101`
        2.  Append `n=3` zeros: `1101000`
        3.  Divide `1101000` by `1011` (using XOR for division):

            ```
                1110  <- Quotient
              _______
            1011|1101000
                1011
                ----
                 1100
                 1011
                 ----
                  1100
                  1011
                  ----
                   100  <- Remainder (CRC)
            ```
        4.  CRC value is `100`.
        5.  Transmitted data: `1101100` (Original data + CRC)

    *   **Receiver Side:**
        1.  Received data: `1101100`
        2.  Divide `1101100` by `1011`:

            ```
                1110  <- Quotient
              _______
            1011|1101100
                1011
                ----
                 1101
                 1011
                 ----
                  1100
                  1011
                  ----
                   100  <- Remainder
            ```
        3.  Since the remainder is `100` (non-zero), an error is detected.

    *   **If a single-bit error occurs (e.g., `1101100` becomes `1111100`):**
        1.  Received data: `1111100`
        2.  Divide `1111100` by `1011`:

            ```
                1111  <- Quotient
              _______
            1011|1111100
                1011
                ----
                 1001
                 1011
                 ----
                  0100
                  1011
                  ----
                   111  <- Remainder
            ```
        3.  Since the remainder is `111` (non-zero), an error is detected.

---

### **3. Forward Error Correction (FEC)**

*   **Definition:** Techniques that allow the receiver to **correct** errors without the need for retransmission. This is achieved by adding more redundant bits than simple error detection methods.
*   **Principle:**
    *   Encoding: The original data is encoded with a specific algorithm that adds redundant bits. This redundancy is structured in a way that it provides information about the location of potential errors.
    *   Transmission: The encoded data is transmitted.
    *   Decoding: The receiver decodes the received data. If errors are detected, the encoding structure is used to identify and correct the erroneous bits.
*   **Advantages:**
    *   **Error correction capability:** Reduces the need for retransmissions, which is crucial in environments where retransmission is impossible or very inefficient (e.g., deep space communication, satellite communication, high-speed wireless).
    *   Improves overall throughput and reduces latency.
*   **Disadvantages:**
    *   **Overhead:** Requires a larger number of redundant bits compared to error detection methods, leading to lower data rates for the same bandwidth.
    *   **Complexity:** FEC encoding and decoding algorithms are generally more complex.
*   **Examples of FEC Codes:**
    *   Hamming codes (discussed below)
    *   Reed-Solomon codes
    *   Convolutional codes
    *   LDPC codes

---

### **4. Hamming Distance**

*   **Definition:** The Hamming distance between two binary strings of equal length is the number of positions at which the corresponding symbols are different. It's a measure of how dissimilar two strings are.
*   **Principle:**
    *   To calculate the Hamming distance, we can XOR the two strings. The number of 1s in the resulting XORed string is the Hamming distance.
*   **Application in Error Detection/Correction:**
    *   The minimum Hamming distance (`d_min`) between any two valid codewords in a code is a crucial parameter that determines the error-detecting and error-correcting capabilities of the code.
    *   **Error Detection:** A code can detect up to `d_min - 1` errors. If `t` errors occur, the received codeword might be transformed into another valid codeword if `t` is less than `d_min`.
    *   **Error Correction:** A code can correct up to `floor((d_min - 1) / 2)` errors.

*   **Example:**
    *   Codeword 1: `10110`
    *   Codeword 2: `11010`
    *   XOR:
        ```
          10110
        ^ 11010
        -------
          01100
        ```
    *   Number of 1s in the XOR result = 2.
    *   Hamming distance between `10110` and `11010` is 2.

    *   Let's say a code has a minimum Hamming distance `d_min = 3`.
        *   It can detect up to `3 - 1 = 2` errors. If 1 or 2 errors occur, the received string will not match any valid codeword.
        *   It can correct up to `floor((3 - 1) / 2) = floor(1) = 1` error. If 1 error occurs, the received string can be uniquely mapped back to the original correct codeword.

---

### **5. Hamming Code**

*   **Definition:** A type of linear error-correcting code that can detect up to two-bit errors or correct one-bit errors. It's a form of FEC.
*   **Principle:**
    *   **Parity Bits Placement:** Hamming codes strategically place parity bits at positions that are powers of 2 (1, 2, 4, 8, ...).
    *   **Parity Calculation:** Each parity bit checks a specific set of data bits. The set of data bits checked by a parity bit is determined by the binary representation of the bit position. A parity bit at position $2^p$ checks all bit positions whose binary representation has a 1 in the $p$-th position (counting from the right, starting at position 0).
    *   **Error Detection and Location:** If an error occurs, the parity checks will fail for certain parity bits. The positions of these failing parity bits, when combined (summed), indicate the position of the erroneous bit.
*   **Structure:**
    *   For `m` data bits, `r` parity bits are required such that $2^r \ge m + r + 1$. This ensures there are enough unique combinations of parity check failures to represent all possible bit positions (including no error).
    *   Total bits = `m + r`.
    *   **Standard Hamming Code (e.g., Hamming (7,4)):**
        *   `m = 4` data bits.
        *   `r = 3` parity bits.
        *   Condition: $2^3 \ge 4 + 3 + 1 \implies 8 \ge 8$. (Satisfied)
        *   Total bits = 7.
        *   Bit positions: 1, 2, 3, 4, 5, 6, 7
        *   Parity bit positions: $P_1$ (pos 1), $P_2$ (pos 2), $P_3$ (pos 4)
        *   Data bit positions: $D_1$ (pos 3), $D_2$ (pos 5), $D_3$ (pos 6), $D_4$ (pos 7)
        *   **Parity Checks:**
            *   $P_1$ checks positions with a 1 in the 0th bit of their binary representation: 1 (001), 3 (011), 5 (101), 7 (111). So, $P_1$ checks bits 1, 3, 5, 7.
            *   $P_2$ checks positions with a 1 in the 1st bit of their binary representation: 2 (010), 3 (011), 6 (110), 7 (111). So, $P_2$ checks bits 2, 3, 6, 7.
            *   $P_3$ checks positions with a 1 in the 2nd bit of their binary representation: 4 (100), 5 (101), 6 (110), 7 (111). So, $P_3$ checks bits 4, 5, 6, 7.
        *   **Codeword Structure (Hamming (7,4)):**
            ```
            Position: 7 6 5 4 3 2 1
            Bit Type: D D D P D P P
            ```
            (Often written in reverse order: $P_1 P_2 D_1 P_3 D_2 D_3 D_4$)
            Let's use the $P_1 P_2 D_1 P_3 D_2 D_3 D_4$ format for consistency.
            ```
            Position: 4 3 2 1
            Bit Type: P1 P2 D1 P3
            ```
            Correct standard representation for Hamming (7,4):
            ```
            Position:  7  6  5  4  3  2  1
            Bit Type:  D4 D3 D2 P3 D1 P2 P1
            ```
            This is confusing. Let's stick to the common representation of bit positions and which parity checks them:

            | Position (Decimal) | Position (Binary) | P1 Check (LSB) | P2 Check | P3 Check |
            | :----------------- | :---------------- | :------------- | :------- | :------- |
            | 1                  | 001               | 1              | 0        | 0        | P1
            | 2                  | 010               | 0              | 1        | 0        | P2
            | 3                  | 011               | 1              | 1        | 0        | D1
            | 4                  | 100               | 0              | 0        | 1        | P3
            | 5                  | 101               | 1              | 0        | 1        | D2
            | 6                  | 110               | 0              | 1        | 1        | D3
            | 7                  | 111               | 1              | 1        | 1        | D4

            **Parity Bit Calculations (for Even Parity):**
            *   $P_1$ = $D_1 \oplus D_2 \oplus D_4$ (Checks bits 3, 5, 7)
            *   $P_2$ = $D_1 \oplus D_3 \oplus D_4$ (Checks bits 3, 6, 7)
            *   $P_3$ = $D_2 \oplus D_3 \oplus D_4$ (Checks bits 5, 6, 7)

            Note: The parity bits themselves are included in the checks. So, for example, $P_1$ covers bit 1, and bits 3, 5, 7. The calculation for $P_1$ is $P_1 \oplus D_1 \oplus D_2 \oplus D_4 = 0$ (for even parity). This means $P_1 = D_1 \oplus D_2 \oplus D_4$.

*   **Example (Hamming (7,4) - Correcting Single-Bit Error):**
    *   Data bits: `1011` (representing $D_1=1, D_2=0, D_3=1, D_4=1$)
    *   **Sender Side (Even Parity):**
        *   $P_1 = D_1 \oplus D_2 \oplus D_4 = 1 \oplus 0 \oplus 1 = 0$
        *   $P_2 = D_1 \oplus D_3 \oplus D_4 = 1 \oplus 1 \oplus 1 = 1$
        *   $P_3 = D_2 \oplus D_3 \oplus D_4 = 0 \oplus 1 \oplus 1 = 0$
        *   Codeword (Positions: P1, P2, D1, P3, D2, D3, D4): `0 1 1 0 0 1 1`

    *   **Receiver Side (Assume a single-bit error occurs at position 5):**
        *   Received Codeword: `0 1 1 0 1 1 1` (Bit at position 5 is flipped from 0 to 1)
        *   **Calculate Syndrome Bits (Error Indicators):**
            *   $S_1$ (for $P_1$ check): Bits at positions 1, 3, 5, 7. Received bits: `0` (pos 1), `1` (pos 3), `1` (pos 5), `1` (pos 7).
                $S_1 = P_1 \oplus D_1 \oplus D_2 \oplus D_4 = 0 \oplus 1 \oplus 1 \oplus 1 = 1$
            *   $S_2$ (for $P_2$ check): Bits at positions 2, 3, 6, 7. Received bits: `1` (pos 2), `1` (pos 3), `1` (pos 6), `1` (pos 7).
                $S_2 = P_2 \oplus D_1 \oplus D_3 \oplus D_4 = 1 \oplus 1 \oplus 1 \oplus 1 = 0$
            *   $S_3$ (for $P_3$ check): Bits at positions 4, 5, 6, 7. Received bits: `0` (pos 4), `1` (pos 5), `1` (pos 6), `1` (pos 7).
                $S_3 = P_3 \oplus D_2 \oplus D_3 \oplus D_4 = 0 \oplus 0 \oplus 1 \oplus 1 = 0$
        *   **Syndrome:** `S3 S2 S1` = `001`. This is the binary representation of the error position.
        *   The syndrome `001` (decimal 1) indicates an error in position 1. Wait, the example was error at position 5. Let's recheck the parity calculation and syndrome calculation.

        **Corrected Example (Hamming (7,4) - Correcting Single-Bit Error):**
        *   Data bits: `1011` ($D_1=1, D_2=0, D_3=1, D_4=1$)
        *   **Sender Side (Even Parity):**
            *   $P_1$ checks bits 1, 3, 5, 7. $P_1 \oplus 3 \oplus 5 \oplus 7 = 0$.
                $P_1 \oplus D_1 \oplus D_2 \oplus D_4 = 0$
                $P_1 \oplus 1 \oplus 0 \oplus 1 = 0 \implies P_1 \oplus 0 = 0 \implies P_1 = 0$
            *   $P_2$ checks bits 2, 3, 6, 7. $P_2 \oplus 3 \oplus 6 \oplus 7 = 0$.
                $P_2 \oplus D_1 \oplus D_3 \oplus D_4 = 0$
                $P_2 \oplus 1 \oplus 1 \oplus 1 = 0 \implies P_2 \oplus 1 = 0 \implies P_2 = 1$
            *   $P_3$ checks bits 4, 5, 6, 7. $P_3 \oplus 5 \oplus 6 \oplus 7 = 0$.
                $P_3 \oplus D_2 \oplus D_3 \oplus D_4 = 0$
                $P_3 \oplus 0 \oplus 1 \oplus 1 = 0 \implies P_3 \oplus 0 = 0 \implies P_3 = 0$
            *   Codeword (Positions: 7, 6, 5, 4, 3, 2, 1): `D4 D3 D2 P3 D1 P2 P1` = `1 1 0 0 1 1 0`

        *   **Receiver Side (Assume a single-bit error occurs at position 5):**
            *   Received Codeword: `1 1 1 0 1 1 0` (Bit at position 5 is flipped from 0 to 1)
            *   **Calculate Syndrome Bits (Error Indicators):**
                *   $S_1$ (for $P_1$ check): Bits at positions 1, 3, 5, 7. Received bits: `0` (pos 1), `1` (pos 3), `1` (pos 5), `1` (pos 7).
                    $S_1 = P_1 \oplus D_1 \oplus D_2 \oplus D_4 = 0 \oplus 1 \oplus 0 \oplus 1 = 0$ (Wait, the position of parity bit P1 is 1, D1 is 3, D2 is 5, D4 is 7. The calculation is using the actual bit values, not their position.)
                    $S_1 = \text{Received bit at pos 1} \oplus \text{Received bit at pos 3} \oplus \text{Received bit at pos 5} \oplus \text{Received bit at pos 7}$
                    $S_1 = 0 \oplus 1 \oplus 1 \oplus 1 = 1$
                *   $S_2$ (for $P_2$ check): Bits at positions 2, 3, 6, 7. Received bits: `1` (pos 2), `1` (pos 3), `1` (pos 6), `1` (pos 7).
                    $S_2 = \text{Received bit at pos 2} \oplus \text{Received bit at pos 3} \oplus \text{Received bit at pos 6} \oplus \text{Received bit at pos 7}$
                    $S_2 = 1 \oplus 1 \oplus 1 \oplus 1 = 0$
                *   $S_3$ (for $P_3$ check): Bits at positions 4, 5, 6, 7. Received bits: `0` (pos 4), `1` (pos 5), `1` (pos 6), `1` (pos 7).
                    $S_3 = \text{Received bit at pos 4} \oplus \text{Received bit at pos 5} \oplus \text{Received bit at pos 6} \oplus \text{Received bit at pos 7}$
                    $S_3 = 0 \oplus 1 \oplus 1 \oplus 1 = 1$
            *   **Syndrome:** `S3 S2 S1` = `101`. This is the binary representation of the error position (decimal 5).
            *   The syndrome `101` (decimal 5) indicates an error in position 5.
            *   **Correction:** Flip the bit at position 5: `1 1 1 0 1 1 0` becomes `1 1 0 0 1 1 0`.
            *   Extracted data bits: `1011`.

*   **Advantages:**
    *   Can correct single-bit errors.
    *   Can detect double-bit errors.
    *   Relatively simple to implement compared to more advanced FEC codes.
*   **Limitations:**
    *   Cannot correct more than one bit error.
    *   Increased overhead for longer data messages.

---

### **Important Points to Remember**

*   **Noise** is the primary cause of errors in digital transmission.
*   **Burst errors** are harder to detect and correct than single-bit errors.
*   **Error Detection** methods add redundancy to detect errors but don't fix them.
*   **Error Correction** methods add more redundancy to detect and fix errors.
*   **Parity Check:** Simple, detects odd numbers of bit errors (usually 1), fails on even numbers.
*   **Checksum:** Sums data blocks, good for detecting common errors, but can fail on specific error patterns.
*   **CRC:** Polynomial-based, very effective for burst error detection, widely used in networking protocols.
*   **Hamming Distance:** A measure of the difference between two codewords, crucial for understanding error-correcting capabilities. `d_min` determines detection/correction limits.
*   **Hamming Code:** A specific FEC code that uses strategically placed parity bits to correct single-bit errors and detect double-bit errors.

---

### **Practice Questions**

1.  What is the difference between thermal noise and impulse noise?
2.  A sender transmits the binary sequence `1101001` using even parity. What is the parity bit appended?
3.  If the receiver receives `1101101` with even parity, is an error detected? Explain why or why not.
4.  What is the primary limitation of the parity check method?
5.  Describe the main steps involved in the checksum error detection technique.
6.  Explain the principle behind CRC and why it's effective at detecting burst errors.
7.  What is the maximum number of errors a code with a minimum Hamming distance of 5 can detect and correct?
8.  Consider a Hamming code where data bits $D_1=1, D_2=0, D_3=0$. If even parity is used, calculate the parity bits $P_1, P_2, P_3$ for a Hamming (7,4) code. What is the transmitted codeword?
9.  If the received codeword in the previous question is `0110100` (original was `0110100` -> `0110000` if P1=0, P2=1, P3=0, D1=1, D2=0, D3=0), identify the error position and correct it. Assume the codeword bits are ordered $P_1 P_2 D_1 P_3 D_2 D_3 D_4$.

---

### **Answers to Practice Questions**

1.  **Thermal Noise:** Caused by the random movement of electrons due to temperature, present in all circuits. It's generally broadband and has a uniform power spectral density.
    **Impulse Noise:** Non-continuous, high-amplitude, short-duration noise caused by external events like lightning or switching transients. It often results in burst errors.
2.  Original data: `1101001`. Number of 1s = 4 (even). For even parity, the parity bit is `0`. Transmitted: `11010010`.
3.  Received data: `1101101`. Count of 1s = 5 (odd). With even parity, the total count of 1s should be even. Since it's odd, an error is detected.
4.  The primary limitation of the parity check method is that it cannot detect an even number of bit errors (e.g., two single-bit errors occurring in the same data unit).
5.  The checksum technique involves dividing the data into blocks, summing these blocks using one's complement arithmetic, taking the one's complement of the sum as the checksum, and transmitting it. At the receiver, the data blocks plus the checksum are summed using one's complement arithmetic. If the final result is zero, no error is detected; otherwise, an error is detected.
6.  CRC treats data as coefficients of a polynomial and performs modulo-2 division by a generator polynomial. The remainder of this division is the CRC. It's effective for burst errors because a burst error will typically result in a non-zero remainder after division by the generator polynomial, especially if the generator polynomial is chosen to have certain properties.
7.  A code with a minimum Hamming distance of 5 can detect up to `5 - 1 = 4` errors. It can correct up to `floor((5 - 1) / 2) = floor(2) = 2` errors.
8.  Data bits: $D_1=1, D_2=0, D_3=0$.
    *   $P_1$ checks bits 1, 3, 5, 7. $P_1 \oplus D_1 \oplus D_2 \oplus D_4 = 0$. Assuming $D_4$ is the last data bit and we have 3 data bits $D_1, D_2, D_3$, the codeword structure needs to be clear. For Hamming (7,4), it's 4 data bits. If we are using only 3 data bits for this example, let's adjust.
    *   Let's use the Hamming(7,4) with 4 data bits, $D_1=1, D_2=0, D_3=0, D_4=1$.
        *   $P_1$ checks bits 1, 3, 5, 7: $P_1 \oplus D_1 \oplus D_2 \oplus D_4 = 0 \implies P_1 \oplus 1 \oplus 0 \oplus 1 = 0 \implies P_1 = 0$.
        *   $P_2$ checks bits 2, 3, 6, 7: $P_2 \oplus D_1 \oplus D_3 \oplus D_4 = 0 \implies P_2 \oplus 1 \oplus 0 \oplus 1 = 0 \implies P_2 = 0$.
        *   $P_3$ checks bits 4, 5, 6, 7: $P_3 \oplus D_2 \oplus D_3 \oplus D_4 = 0 \implies P_3 \oplus 0 \oplus 0 \oplus 1 = 0 \implies P_3 = 1$.
        *   Transmitted codeword ($P_1 P_2 D_1 P_3 D_2 D_3 D_4$): `0 0 1 1 0 0 1`.

9.  Received codeword: `0110100`. Let's assume the original data was $D_1=1, D_2=0, D_3=0$. From the previous question's calculations, the parity bits are $P_1=0, P_2=0, P_3=1$. So, original codeword bits for positions 1,2,3,4,5,6,7 would be $P_1, P_2, D_1, P_3, D_2, D_3, D_4$. For 3 data bits $D_1, D_2, D_3$, we need to define the positions. A standard Hamming(7,4) means 4 data bits.

    Let's re-evaluate the question's premise. If the *received* codeword is `0110100`, and the *original* codeword was `0110000` (which implies $P_1=0, P_2=0, D_1=1, P_3=0, D_2=0, D_3=0, D_4=0$, this is not consistent with previous question's calculations).

    Let's assume the question meant the received codeword is `0110100` and we need to find the error. We use the original correct codeword `0 0 1 1 0 0 1` calculated in Q8.
    Received: `0 1 1 0 1 0 0`
    Original: `0 0 1 1 0 0 1`
    XORing these to find differences:
    `0110100`
    `0011001`
    `-------`
    `0101101`

    This difference `0101101` is not a single bit flip. There must be a misunderstanding in how the question is phrased or how it relates to Q8.

    **Let's assume the received codeword has a single bit error.**
    Received Codeword: `0110100`
    Parity bit checks:
    *   $S_1$ (checks positions 1, 3, 5, 7): `0` (pos 1) $\oplus$ `1` (pos 3) $\oplus$ `1` (pos 5) $\oplus$ `0` (pos 7) = $0 \oplus 1 \oplus 1 \oplus 0 = 0$
    *   $S_2$ (checks positions 2, 3, 6, 7): `1` (pos 2) $\oplus$ `1` (pos 3) $\oplus$ `0` (pos 6) $\oplus$ `0` (pos 7) = $1 \oplus 1 \oplus 0 \oplus 0 = 0$
    *   $S_3$ (checks positions 4, 5, 6, 7): `0` (pos 4) $\oplus$ `1` (pos 5) $\oplus$ `0` (pos 6) $\oplus$ `0` (pos 7) = $0 \oplus 1 \oplus 0 \oplus 0 = 1$

    Syndrome: $S_3 S_2 S_1 = 100$. This indicates an error in position 4.
    Correction: Flip the bit at position 4.
    Received: `0 1 1 0 1 0 0`
    Corrected: `0 1 1 1 1 0 0`
    Extracted data bits (D1, D2, D3, D4): `1 1 0 0`.

    *(Note: The initial phrasing of Q9 seems to imply a comparison with a specific "original codeword" which wasn't consistent with Q8's calculation. The provided answer assumes a single-bit error in the received `0110100` and uses the standard Hamming(7,4) parity checks to find and correct it.)*
