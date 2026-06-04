---
title: "Noisy Channels"
subject: "COMPUTER NETWORKS"
module: "Module 2: Data Link Layer:"
branch: "Computer Science and Engineering"
semester: 7
topicId: "6841627a0fc9aa1fdbc8c92b"
status: "completed"
scrapedAt: "2026-05-20T17:02:42.109Z"
---
# Computer Networks: Module 2 - Data Link Layer: Noisy Channels

---

## 1. Introduction to Noisy Channels

### 1.1 What is a Noisy Channel?

*   **Definition:** A noisy channel is a communication medium where errors can be introduced into the data being transmitted. These errors are typically caused by physical phenomena affecting the signal.
*   **Impact:** The presence of noise means that the data received at the destination might not be identical to the data sent by the source. This can lead to data corruption and incorrect interpretation.

### 1.2 Sources of Noise in Communication Channels

*   **Thermal Noise (Johnson-Nyquist Noise):**
    *   Caused by the random thermal motion of electrons in conductors.
    *   Present in all electronic components and transmission media.
    *   Proportional to bandwidth and temperature.
    *   Often considered "white noise" because it's spread evenly across all frequencies.
*   **Interference:**
    *   **Electromagnetic Interference (EMI):** Caused by external electromagnetic fields (e.g., from motors, fluorescent lights, other communication signals).
    *   **Crosstalk:** Signal leakage from one communication channel to another. Common in bundled cables.
    *   **Impulse Noise:** Short, high-amplitude bursts of noise caused by events like lightning, switching surges, or faulty equipment. Can corrupt multiple bits at once.
*   **Attenuation:**
    *   The gradual loss of signal strength as it travels over a distance.
    *   While not directly "noise" in the sense of adding random bits, significant attenuation can make the signal weaker and more susceptible to other noise sources, effectively increasing the error rate.
*   **Distortion:**
    *   Changes in the shape of the signal as it passes through the medium.
    *   Can be caused by non-linearities in the transmission medium or equipment.

---

## 2. Error Detection

### 2.1 The Need for Error Detection

*   Since noisy channels can introduce errors, the Data Link Layer must have mechanisms to detect these errors.
*   Error detection allows the receiver to identify if the received data is corrupted.
*   Once detected, the receiver can signal the sender to retransmit the corrupted data.

### 2.2 Key Concepts in Error Detection

*   **Redundancy:** The core principle of error detection is to add extra information (redundancy) to the original data. This redundant information is calculated based on the data itself.
*   **Error Detection Codes:** These are algorithms that generate the redundant information and can be used to check for errors upon reception.

### 2.3 Common Error Detection Techniques

#### 2.3.1 Parity Checking

*   **Concept:** Adds a single bit (parity bit) to a block of data bits.
*   **Purpose:** To make the total number of set bits (1s) in the block either even or odd, depending on the chosen parity scheme.
*   **Types:**
    *   **Even Parity:** The parity bit is set to 0 if the number of 1s in the data is already even, and set to 1 if the number of 1s is odd. The total number of 1s (including the parity bit) will always be even.
    *   **Odd Parity:** The parity bit is set to 1 if the number of 1s in the data is already even, and set to 0 if the number of 1s is odd. The total number of 1s (including the parity bit) will always be odd.

*   **Example (Even Parity):**
    *   Data: `1011001` (4 ones)
    *   Parity bit needed: `0` (to keep the total number of ones even)
    *   Codeword: `10110010`

*   **Limitations:**
    *   Can detect **single-bit errors**.
    *   **Cannot detect even numbers of errors** (e.g., if two bits flip, the parity might still be correct).

#### 2.3.2 Checksum

*   **Concept:** Treats the data as a sequence of numbers (e.g., 16-bit words). All numbers are added together using one's complement arithmetic. The sum's one's complement is then sent as the checksum.
*   **Process:**
    1.  **Sender:**
        *   Divide the data into segments of fixed size (e.g., 16 bits).
        *   Treat each segment as a binary number.
        *   Add all segments together using one's complement addition.
        *   Take the one's complement of the sum. This is the checksum.
        *   Append the checksum to the data.
    2.  **Receiver:**
        *   Divide the received data (including the checksum) into segments.
        *   Add all segments together using one's complement addition.
        *   Take the one's complement of the sum.
        *   If the result is all zeros, the data is likely error-free. Otherwise, an error is detected.

*   **Example (Simplified - using 4-bit segments and normal addition for illustration):**
    *   Data: `1010 1100 0011 1101`
    *   Segments: `1010`, `1100`, `0011`, `1101`
    *   Sum: `1010 + 1100 + 0011 + 1101 = 10010` (with a carry)
    *   For checksum, we often use one's complement addition where carries are wrapped around.
    *   Let's assume 4-bit segments and wrap-around addition:
        *   `1010`
        *   `1100`
        *   `0011`
        *   `1101`
        *   ---
        *   Sum: `10010`
        *   Wrap-around carry: `1`
        *   Sum (final): `0011` (the last 4 bits)
        *   Checksum (one's complement of sum): `1100`
    *   Transmitted data: `1010 1100 0011 1101 1100`
    *   **Receiver Calculation:**
        *   `1010 + 1100 + 0011 + 1101 + 1100 = 11010`
        *   Wrap-around carry: `1`
        *   Final sum: `1011`
        *   One's complement of `1011` is `0100`. Since this is not zero, an error is detected.

*   **Advantages:** More robust than simple parity, can detect a wider range of errors.
*   **Limitations:** Still not foolproof; can fail to detect certain combinations of errors.

#### 2.3.3 Cyclic Redundancy Check (CRC)

*   **Concept:** Treats data as a binary number and performs polynomial division with a predefined generator polynomial. The remainder of this division is the CRC code, which is appended to the data.
*   **Mathematical Basis:** Based on polynomial arithmetic over GF(2) (Galois Field of 2 elements, where addition and subtraction are XOR operations).
*   **Process:**
    1.  **Sender:**
        *   Let `M(x)` be the binary message represented as a polynomial.
        *   Let `G(x)` be the generator polynomial (fixed for a given CRC standard).
        *   Multiply `M(x)` by `x^n`, where `n` is the degree of `G(x)`. This appends `n` zeros to the message.
        *   Calculate the remainder `R(x)` by dividing `M(x) * x^n` by `G(x)` using polynomial division (modulo-2 arithmetic).
        *   The transmitted codeword is `T(x) = M(x) * x^n + R(x)`.
    2.  **Receiver:**
        *   Receives `T'(x)`.
        *   Divides `T'(x)` by `G(x)`.
        *   If the remainder is 0, the data is considered error-free. Otherwise, an error is detected.

*   **Example (Simplified - short polynomials):**
    *   Message `M = 1101` (polynomial `M(x) = x^3 + x^2 + 0x + 1`)
    *   Generator `G = 101` (polynomial `G(x) = x^2 + 0x + 1`)
    *   Degree of `G(x)` is 2 (`n=2`).
    *   Append `n=2` zeros to `M`: `110100` (polynomial `M(x) * x^2 = x^5 + x^4 + 0x^3 + x^2`)
    *   **Polynomial Division (Modulo-2):**
        ```
            x^3 + x + 1   <-- Quotient
        x^2+1 | x^5 + x^4 + 0x^3 + x^2 + 0x + 0
              -(x^5       + x^3)
              ------------------
                    x^4 + x^3 + x^2
                  -(x^4       + x^2)
                  ------------------
                        x^3 + 0x^2 + 0x
                      -(x^3       + x)
                      ------------------
                            0x^2 + x + 0
                          -(0x^2 + 0) <-- Remainder is 0x+0 = 0
                          ----------
                                x
        ```
        *Let's redo the division carefully.*
        ```
            x^3 + x^2 + 0x + 1   <-- Quotient
        x^2+0x+1 | x^5 + x^4 + 0x^3 + x^2 + 0x + 0
                 -(x^5       + x^3)  <-- x^3 * (x^2+1)
                 ------------------
                       x^4 + x^3 + x^2
                     -(x^4       + x^2) <-- x^2 * (x^2+1)
                     ------------------
                           x^3 + 0x^2 + 0x
                         -(x^3       + x)   <-- x * (x^2+1)
                         ------------------
                               0x^2 + x + 0
                             -(0x^2 + 0)    <-- 0 * (x^2+1)
                             -----------
                                   x + 0   <-- Remainder is x (or 10 in binary)
        ```
    *   CRC code (remainder): `10`
    *   Transmitted codeword: `110110`

*   **Advantages:** Very powerful in detecting common errors (single-bit, double-bit, odd number of errors, burst errors up to the degree of the generator polynomial). Widely used in Ethernet, Wi-Fi, etc.
*   **Common Generator Polynomials:**
    *   CRC-8 (e.g., ATM header check)
    *   CRC-16 (e.g., IBM Bisync, Modbus)
    *   CRC-32 (e.g., Ethernet, PKZIP, PNG)

---

## 3. Error Correction

### 3.1 The Need for Error Correction

*   While error detection tells us *that* an error occurred, it doesn't tell us *where*. To fix the error, we need to know which bit(s) are wrong.
*   Error correction aims to automatically correct errors without requiring retransmission. This is crucial for applications where retransmission is expensive or impossible (e.g., satellite communication, broadcasting, stored data correction).

### 3.2 Key Concepts in Error Correction

*   **Redundancy for Correction:** Error correction codes use even more redundancy than error detection codes. This extra redundancy provides information about the location of the error.
*   **Hamming Distance:** A measure of the difference between two codewords. It's the number of positions at which the corresponding bits are different. A code with minimum Hamming distance `d` can detect `d-1` errors and correct `floor((d-1)/2)` errors.

### 3.3 Common Error Correction Techniques

#### 3.3.1 Hamming Codes

*   **Concept:** A family of linear error-correcting codes that can detect up to two-bit errors and correct single-bit errors.
*   **Mechanism:** Places parity bits at positions that are powers of 2 (1, 2, 4, 8, 16, ...). Each parity bit checks a specific subset of the data bits and other parity bits.
*   **How it works:**
    1.  **Determine number of parity bits:** For `m` data bits, you need `r` parity bits such that `2^r >= m + r + 1`.
    2.  **Positioning parity bits:** Parity bits are placed at positions 2^i (1, 2, 4, 8, ...). Data bits fill the remaining positions.
    3.  **Calculating parity bits:** Each parity bit `p_i` at position `2^(i-1)` checks all bit positions whose binary representation has a 1 in the `i`-th position (from the right, starting at 1).
        *   `p1` (pos 1) checks positions: 1, 3, 5, 7, 9, 11, ...
        *   `p2` (pos 2) checks positions: 2, 3, 6, 7, 10, 11, ...
        *   `p3` (pos 4) checks positions: 4, 5, 6, 7, 12, 13, ...
        *   `p4` (pos 8) checks positions: 8, 9, 10, 11, 12, 13, 14, 15, ...
    4.  **Receiving and Checking:**
        *   The receiver recalculates the parity bits based on the received data bits.
        *   It then compares the recalculated parity bits with the received parity bits.
        *   A "syndrome" is formed by concatenating the results of these checks (0 if parity is correct, 1 if incorrect).
        *   The syndrome value, interpreted as a binary number, directly indicates the position of the single-bit error.
        *   If the syndrome is 0, no error occurred. If it's non-zero, the bit at the syndrome position is flipped.

*   **Example (Hamming(7,4) Code - 4 data bits, 3 parity bits):**
    *   Data bits (d4, d3, d2, d1) = `1011`
    *   Parity bits: p1 (pos 1), p2 (pos 2), p3 (pos 4)
    *   Codeword positions: `p1 d2 p2 d3 d4 p5 d6 ...` -> `p1 d2 p2 d3 d4 p4 d5 d6 d7 ...`
    *   Let's use positions: `p1 p2 d1 p3 d2 d3 d4`
    *   Positions: `1  2  3  4  5  6  7`
    *   Data bits assigned: `d1` at 3, `d2` at 5, `d3` at 6, `d4` at 7.
    *   `p1` checks positions: 1, 3, 5, 7. Bits at these positions: `p1`, `d1`, `d2`, `d4`.
    *   `p2` checks positions: 2, 3, 6, 7. Bits at these positions: `p2`, `d1`, `d3`, `d4`.
    *   `p3` checks positions: 4, 5, 6, 7. Bits at these positions: `p3`, `d2`, `d3`, `d4`.

    *   Let data `d4d3d2d1 = 1011`.
    *   Codeword structure: `p1 p2 d1 p3 d2 d3 d4`
    *   `p1` checks `p1, d1, d2, d4`. For even parity:
        *   `p1` checks `1, 1, 0, 1` (positions 3, 5, 7). Number of 1s is 3 (odd).
        *   Set `p1 = 1` to make total 1s even (1+0+1+1 = 3, need 1). Oops, `p1` is at position 1.
        *   `p1` checks positions 1, 3, 5, 7. The data bits are at 3, 5, 7.
        *   `d1` (pos 3) = 1, `d2` (pos 5) = 0, `d4` (pos 7) = 1.
        *   `p1` checks `p1`, `d1`, `d2`, `d4`. For even parity, `p1 XOR d1 XOR d2 XOR d4` must be 0.
        *   `p1 XOR 1 XOR 0 XOR 1 = 0`.
        *   `p1 XOR 0 = 0`, so `p1 = 0`.
    *   `p2` checks `p2, d1, d3, d4`. For even parity, `p2 XOR d1 XOR d3 XOR d4` must be 0.
        *   `d1` (pos 3) = 1, `d3` (pos 6) = 1, `d4` (pos 7) = 1.
        *   `p2 XOR 1 XOR 1 XOR 1 = 0`.
        *   `p2 XOR 1 = 0`, so `p2 = 1`.
    *   `p3` checks `p3, d2, d3, d4`. For even parity, `p3 XOR d2 XOR d3 XOR d4` must be 0.
        *   `d2` (pos 5) = 0, `d3` (pos 6) = 1, `d4` (pos 7) = 1.
        *   `p3 XOR 0 XOR 1 XOR 1 = 0`.
        *   `p3 XOR 0 = 0`, so `p3 = 0`.

    *   Codeword: `p1 p2 d1 p3 d2 d3 d4` = `0 1 1 0 0 1 1`

    *   **Error Scenario:** Suppose bit at position 6 (`d3`) flips to 0.
        *   Received codeword: `0 1 1 0 0 0 1`
        *   Recalculate checks:
            *   Check 1 (pos 1, 3, 5, 7): `p1` vs `d1, d2, d4`. `0` vs `1, 0, 1`. `0 XOR 1 XOR 0 XOR 1 = 0`. (Correct)
            *   Check 2 (pos 2, 3, 6, 7): `p2` vs `d1, d3, d4`. `1` vs `1, 0, 1`. `1 XOR 1 XOR 0 XOR 1 = 1`. (Error detected)
            *   Check 3 (pos 4, 5, 6, 7): `p3` vs `d2, d3, d4`. `0` vs `0, 0, 1`. `0 XOR 0 XOR 0 XOR 1 = 1`. (Error detected)
        *   Syndrome bits (reading checks from lowest to highest position): Check 1 result, Check 2 result, Check 3 result.
        *   Syndrome: `011` (binary).
        *   Interpreting `011` as a decimal number gives 3. This indicates the error is at position 3.
        *   The bit at position 3 is `d1`, which is `1`.
        *   Wait, the error was at position 6. Let's check the syndrome calculation again.
        *   The syndrome bits are associated with the parity bits that detected the error.
        *   If check 1 fails, bit 1 is set in syndrome. If check 2 fails, bit 2 is set. If check 3 fails, bit 4 is set.
        *   Check 2 failed -> bit 2 of syndrome is 1.
        *   Check 3 failed -> bit 4 of syndrome is 1.
        *   Syndrome value: `0100` (for p3) + `0010` (for p2) = `0110` (binary) -> 6.
        *   The error is at position 6. Flip the bit at position 6.

*   **Advantages:** Efficient for single-bit error correction.
*   **Limitations:** Can only correct single-bit errors reliably. Can detect double-bit errors but cannot correct them.

#### 3.3.2 Forward Error Correction (FEC) Codes (General Concept)

*   **Concept:** A broader category of codes that add redundancy to data to enable both error detection and correction at the receiver.
*   **Examples:**
    *   **Reed-Solomon Codes:** Powerful codes used in CDs, DVDs, QR codes, and satellite communications. They are particularly good at correcting burst errors (multiple consecutive bit errors).
    *   **Convolutional Codes:** Used in wireless communication (e.g., Wi-Fi, cellular). They encode data streams with memory.
    *   **LDPC (Low-Density Parity-Check) Codes:** Modern, powerful codes used in Wi-Fi, 5G, and satellite communications, known for their near-optimal performance.

*   **Trade-off:** FEC codes add significant overhead (redundancy), which reduces the effective data rate. The choice of FEC code depends on the channel characteristics and the acceptable trade-off between error resilience and throughput.

---

## 4. Practice Questions and Exercises

---

### **Question 1 (Parity):**

A sender transmits the 7-bit ASCII character 'A' with even parity. The ASCII code for 'A' is `1000001`.

a) What is the complete 8-bit codeword that is transmitted?
b) If the transmitted codeword `11000001` is received, does it indicate an error using even parity? Explain.
c) If two bits in the codeword `11000001` flip, can even parity detect this error? Explain.

**Answer:**

a) 'A' is `1000001`. There are two '1's (even number). To maintain even parity, the parity bit should be `0`. The codeword is `10000010`.

b) The received codeword is `11000001`. Let's count the '1's: `1` + `1` + `0` + `0` + `0` + `0` + `0` + `1` = 3 '1's. Since 3 is an odd number, and the sender used even parity, this indicates an error.

c) If two bits flip, for example, the first and the last bits flip: `11000001` becomes `01000000`. This has only one '1', which is odd. Since the expected parity is even, an error is detected.
    However, if the first bit flips from 1 to 0, and the third bit flips from 0 to 1: `11000001` becomes `01100001`. This has four '1's (even number). In this case, even parity *cannot* detect the error.

---

### **Question 2 (CRC - Conceptual):**

Explain the fundamental principle behind Cyclic Redundancy Check (CRC) for error detection. What makes CRC generally more robust than simple parity checks?

**Answer:**

CRC treats the data as a binary number and uses polynomial division (modulo-2 arithmetic) with a predefined generator polynomial. The remainder of this division is the CRC code appended to the data. At the receiver, the same division is performed. If the remainder is zero, the data is considered error-free.

CRC is more robust than simple parity checks because it considers the data as a whole polynomial and uses the properties of polynomial division to detect a wider range of errors. It is particularly effective at detecting burst errors (multiple consecutive bit errors) and other common error patterns that simple parity checks often miss. The strength of CRC depends on the choice of the generator polynomial.

---

### **Question 3 (Hamming Code - Conceptual):**

In a Hamming code, how does the placement of parity bits and their checking mechanisms allow for the detection and correction of single-bit errors?

**Answer:**

Hamming codes place parity bits at positions that are powers of two (1, 2, 4, 8, etc.). Each parity bit checks a specific, unique combination of data bits and other parity bits. The positions checked by each parity bit are determined by the binary representation of the bit positions.

When an error occurs, one or more parity checks will fail. The set of parity bits that detect the error corresponds to the binary representation of the position of the erroneous bit. For example, if parity bits at positions 1 and 4 detect an error, the syndrome bits (1 for failed check, 0 for passed) would be `0...0101` (binary), which corresponds to decimal 5, indicating the error is at position 5. By summing the positions of the failed parity bits, the receiver can directly pinpoint the location of the single-bit error and flip that bit to correct it.

---

### **Question 4 (Fill in the Blanks):**

1.  Noise in a communication channel can cause __________ in the transmitted data.
2.  __________ is the process of adding extra information to data to detect errors.
3.  A single parity bit can typically detect only __________ errors.
4.  __________ is a powerful error detection technique that uses polynomial division.
5.  __________ codes are used for automatic error correction without retransmission.

**Answer:**

1.  errors
2.  Redundancy
3.  single-bit
4.  CRC (Cyclic Redundancy Check)
5.  Forward Error Correction (FEC) / Error Correction

---

## 5. Important Points to Remember

*   **Noisy Channels are the Norm:** Real-world communication channels are rarely perfect and are subject to various forms of noise.
*   **Error Control is Crucial:** The Data Link Layer's primary responsibility related to noisy channels is to provide reliable data transfer. This is achieved through error control mechanisms.
*   **Error Detection vs. Error Correction:**
    *   **Detection:** Identifies that an error has occurred. Usually followed by retransmission.
    *   **Correction:** Identifies and fixes the error automatically. Requires more redundancy.
*   **Redundancy is the Key:** Both error detection and correction rely on adding redundant information to the data.
*   **Trade-offs:** More robust error detection and correction come at the cost of increased overhead (more bits sent per data bit), reducing throughput.
*   **CRC is Widely Used:** For error detection, CRC is a very common and effective method in modern networking.
*   **Hamming Codes:** A foundational example of error correction, particularly for single-bit errors.
*   **FEC is Advanced:** Modern FEC codes like Reed-Solomon and LDPC are essential for demanding applications requiring high reliability in noisy environments.

---
