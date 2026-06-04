---
title: "CRC"
subject: "COMPUTER NETWORKS"
module: "Module 2: Data Link Layer:"
branch: "Computer Science and Engineering"
semester: 7
topicId: "6841627a0fc9aa1fdbc8c927"
status: "completed"
scrapedAt: "2026-05-20T17:02:39.340Z"
---
# Computer Networks: Module 2 - Data Link Layer
## Topic: Cyclic Redundancy Check (CRC)

---

### **1. Introduction to Error Detection**

*   **Purpose:** The Data Link Layer is responsible for reliable data transfer between adjacent nodes on a network. One crucial aspect of reliability is detecting and correcting errors that may occur during transmission.
*   **Sources of Errors:** Noise, signal degradation, interference, faulty hardware.
*   **Error Detection vs. Error Correction:**
    *   **Error Detection:** Identifies if an error has occurred. The receiver discards the corrupted frame and may request retransmission.
    *   **Error Correction:** Identifies and corrects the error without retransmission. This is more complex and resource-intensive.
*   **Common Error Detection Techniques:**
    *   Parity Check
    *   Checksum
    *   **Cyclic Redundancy Check (CRC)**

---

### **2. Cyclic Redundancy Check (CRC)**

*   **Definition:** CRC is a widely used and powerful error-detection code. It treats the data as a binary number and performs polynomial division to generate a checksum (called a Frame Check Sequence or FCS).
*   **Core Idea:** Based on the principles of polynomial arithmetic over a finite field (specifically, GF(2), which deals with binary numbers where addition and subtraction are XOR operations).
*   **How it Works (Conceptual):**
    1.  **Sender:**
        *   The sender appends a fixed number of redundant bits (the FCS) to the original data.
        *   The FCS is calculated such that the entire transmitted message (data + FCS) is divisible by a predetermined binary polynomial (the generator polynomial).
    2.  **Receiver:**
        *   The receiver performs the same division on the received message using the same generator polynomial.
        *   If the remainder is zero, the message is assumed to be error-free.
        *   If the remainder is non-zero, an error is detected.

---

### **3. Key Concepts and Definitions**

*   **Data (Message):** The sequence of bits to be transmitted. Let's represent it as a polynomial `M(x)`.
*   **Generator Polynomial (G(x)):** A predefined binary polynomial used for both the sender and receiver. It's crucial that both parties use the **same** generator polynomial.
    *   The degree of the generator polynomial determines the number of bits in the FCS. If `deg(G(x)) = k`, then the FCS will have `k` bits.
    *   **Properties of a good generator polynomial:**
        *   It must have a term with `x^0` (i.e., it must be odd). This ensures that a frame of all zeros is not accidentally considered valid if it contains errors.
        *   It should be irreducible.
        *   It should detect common error patterns (single-bit, double-bit, odd numbers of bits, burst errors).
*   **Frame Check Sequence (FCS):** The redundant bits appended to the data for error detection.
*   **Polynomial Representation:** Binary data can be represented as polynomials. For example, the binary string `1101` can be represented as the polynomial `1*x^3 + 1*x^2 + 0*x^1 + 1*x^0 = x^3 + x^2 + 1`.
*   **Division in GF(2):** This is essentially XOR-based division.
    *   Addition: `0 + 0 = 0`, `0 + 1 = 1`, `1 + 0 = 1`, `1 + 1 = 0` (This is XOR).
    *   Subtraction: Same as addition in GF(2).
    *   Multiplication: Standard binary multiplication.

---

### **4. CRC Calculation Process (Sender Side)**

Let `M` be the original data and `G` be the generator polynomial. We want to find `R` (the remainder or FCS) such that `(M * x^k + R)` is perfectly divisible by `G`, where `k` is the degree of `G`.

1.  **Append k zeros to the data:** Multiply the data polynomial `M(x)` by `x^k`. This effectively shifts the data `k` bits to the left, creating space for the FCS. Let this be `M'(x) = M(x) * x^k`.
    *   *Example:* If Data = `1101` (4 bits) and Generator `G(x) = x^3 + x + 1` (degree k=3), then `M'(x)` becomes `1101000`.

2.  **Perform Polynomial Division:** Divide `M'(x)` by `G(x)` using XOR operations. The remainder of this division is the FCS, `R(x)`.
    *   *Example (continued):*
        *   `M'(x)` = `1101000` (representing `x^6 + x^5 + x^3`)
        *   `G(x)` = `1011` (representing `x^3 + x + 1`)

        ```
              10100   <-- Quotient (not needed for FCS)
            _________
        1011|1101000  <-- M'(x)
             1011
             ----
              01110
               0000
               ----
                11100
                1011
                ----
                 01100
                 0000
                 ----
                  1100  <-- Remainder (R(x))
        ```
        The remainder is `100` (representing `x^2`). **Correction:** The example calculation above seems to have a calculation error. Let's redo the division correctly.

        **Corrected Polynomial Division Example:**
        *   `M'(x)` = `1101000` (`x^6 + x^5 + x^3`)
        *   `G(x)` = `1011` (`x^3 + x + 1`)

        ```
              10100   <-- Quotient
            _________
        1011|1101000
             1011     (1101 XOR 1011 = 0110)
             ----
              01100
               0000   (01100 shifted, XOR with 0000 = 01100)
               ----
                11000
                1011  (11000 XOR 1011 = 0111)
                ----
                 01110
                 0000 (01110 shifted, XOR with 0000 = 01110)
                 ----
                  1110  <-- Remainder (R(x)) = 110
        ```
        The remainder is `110` (representing `x^2 + x`).

3.  **Append the FCS to the original data:** The FCS is `R(x)`.
    *   *Example:* Original Data = `1101`. FCS = `110`. Transmitted Frame = `1101110`.

---

### **5. CRC Calculation Process (Receiver Side)**

1.  **Receive the entire frame:** This includes the original data and the FCS. Let this be `T(x)`.
2.  **Perform Polynomial Division:** Divide `T(x)` by the generator polynomial `G(x)`.
    *   *Example:* Received Frame `T(x)` = `1101110`. `G(x)` = `1011`.

    ```
              10100   <-- Quotient
            _________
        1011|1101110
             1011
             ----
              01111
               0000
               ----
                11110
                1011
                ----
                 01010
                 0000
                 ----
                  1010  <-- Remainder (R'(x))
    ```

3.  **Check the Remainder:**
    *   If the remainder is **zero**, the frame is considered error-free.
    *   If the remainder is **non-zero**, an error is detected.

---

### **6. Why CRC is Effective**

*   **Detects Single-Bit Errors:** Any generator polynomial that includes `x^0` will detect all single-bit errors.
*   **Detects Double-Bit Errors:** A CRC with a degree `k` can detect all double-bit errors if the generator polynomial `G(x)` has the property that `G(x)` is not divisible by `x^i + x^j` for `0 <= i < j <= k`. This is usually achieved by selecting a suitable irreducible polynomial.
*   **Detects Odd Numbers of Errors:** Any generator polynomial that is divisible by `x+1` (which is always true for polynomials with an even number of terms, like `x^3 + x + 1`) will detect all odd numbers of errors.
*   **Detects Burst Errors:** CRC can detect burst errors (contiguous sequences of erroneous bits) of length up to `k` bits (the degree of the generator polynomial). If the burst length `b` is less than or equal to `k`, the probability of the error being undetected is `1 / 2^k`.

---

### **7. Common Generator Polynomials**

*   **CRC-8:** Degree 8. `x^8 + x^2 + x + 1` (Hex: `0x07`, often `0x31` is used as `x^8` is assumed). Used in USB.
*   **CRC-16:** Degree 16.
    *   `x^16 + x^12 + x^5 + 1` (CRC-16-IBM, Hex: `0x8005`). Used in Modbus, CRC checks in some network protocols.
    *   `x^16 + x^15 + x^2 + 1` (CRC-16-CCITT-FALSE, Hex: `0x1021`). Used in X.25, HDLC.
*   **CRC-32:** Degree 32. `x^32 + x^26 + x^23 + x^22 + x^16 + x^12 + x^11 + x^10 + x^8 + x^7 + x^5 + x^4 + x^2 + x + 1` (CRC-32, Hex: `0x04C11DB7`). Used in Ethernet, PKZIP, PNG.

---

### **8. Important Points to Remember**

*   **CRC is an error detection, not error correction, mechanism.**
*   The **generator polynomial (G(x)) is crucial** and must be the same for both sender and receiver.
*   The degree of G(x) determines the length of the FCS.
*   The calculation involves **polynomial division using XOR** over GF(2).
*   A **zero remainder** at the receiver indicates a likely error-free transmission.
*   CRC is highly effective at detecting common error patterns, especially burst errors up to the degree of the generator polynomial.

---

### **9. Practice Questions and Exercises**

**Question 1:**
A sender wants to transmit the data `1011001`. The generator polynomial is `G(x) = x^4 + x + 1`.
a) Represent the data and generator polynomial in binary strings.
b) Calculate the CRC checksum (FCS) that should be appended to the data.
c) What would be the transmitted frame?
d) If the receiver receives the frame `1011001110` (with an error), what would be the remainder when it performs CRC division?

**Answer 1:**
a) Data: `1011001`. Generator: `G(x) = x^4 + 0x^3 + 0x^2 + 1x + 1` -> Binary: `10011`. Degree `k = 4`.
b) **Sender Side Calculation:**
    *   Append `k=4` zeros to data: `10110010000`.
    *   Divide `10110010000` by `10011` (using XOR):

    ```
              1010001
            _________
        10011|10110010000
             10011
             -----
              0010100
               00000
               -----
                010000
                00000
                -----
                 100000
                 10011
                 -----
                  000110
                  00000
                  -----
                   01100  <-- Remainder (FCS) = 0110
    ```
    *   The FCS is `0110`.

c) Transmitted Frame: `10110010110`

d) **Receiver Side Calculation:**
    *   Received frame: `1011001110`
    *   Divide `1011001110` by `10011`:

    ```
              1010000
            _________
        10011|1011001110
             10011
             -----
              0010100
               00000
               -----
                010001
                00000
                -----
                 100011
                 10011
                 -----
                  000000 <-- Remainder is 0000
    ```
    **Correction:** The received frame `1011001110` does not contain an error relative to the original transmission `10110010110`. Let's assume an error occurred, say the 5th bit from the left was flipped: `10111010110`.

    **Receiver Side Calculation with Error (assuming 5th bit flipped):**
    *   Received frame: `10111010110`
    *   Divide `10111010110` by `10011`:

    ```
              1010001
            _________
        10011|10111010110
             10011
             -----
              0010101
               00000
               -----
                010010
                00000
                -----
                 100101
                 10011
                 -----
                  000001  <-- Remainder is 0001
    ```
    *   The remainder is `0001`, which is non-zero, indicating an error.

**Question 2:**
What property of the generator polynomial `G(x)` ensures that CRC can detect all single-bit errors?

**Answer 2:**
The generator polynomial `G(x)` must have a term with `x^0` (i.e., it must be an odd polynomial). This ensures that when a single bit is flipped, the resulting polynomial will not be divisible by `G(x)`.

**Question 3:**
Explain the difference between CRC and a simple parity check. Why is CRC generally preferred for error detection?

**Answer 3:**
*   **Parity Check:** Adds a single bit to make the total number of '1's even (or odd). It can only detect an odd number of bit errors. It fails to detect an even number of bit errors (e.g., two bits flipped).
*   **CRC:** Uses polynomial division to generate a checksum of multiple bits. It's significantly more powerful than parity checking and can detect a much wider range of error patterns, including all single-bit, double-bit, odd-number bit, and most burst errors up to the degree of the generator polynomial. This makes it a more robust and reliable error detection mechanism for computer networks.

---
