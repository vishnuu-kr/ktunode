---
title: "Error detecting and correcting capability. (3hrs)"
subject: "CODING THEORY"
module: "Module 2: Error Control Coding – Relevance of error control codes in Communication System"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff221"
status: "completed"
scrapedAt: "2026-05-23T18:05:10.390Z"
---
# CODING THEORY - Module 2: Error Control Coding – Relevance of Error Control Codes in Communication Systems

## Topic: Error Detecting and Correcting Capability (3 hours)

---

### **1. Introduction to Error Control Coding**

*   **1.1 The Need for Error Control:**
    *   Communication channels are inherently noisy, introducing errors in transmitted data.
    *   These errors can corrupt information, leading to incorrect decoding and system malfunction.
    *   Error control coding adds redundancy to the transmitted data in a structured way to detect and/or correct these errors.
    *   **Analogy:** Imagine sending a message in a noisy environment. Repeating critical words or using a pre-arranged code (like Morse code's use of repeated dots for certain letters) helps ensure the message is understood. Error control codes do this in a mathematically rigorous way.

*   **1.2 Types of Errors:**
    *   **Single-bit errors:** Only one bit in a block of data is flipped.
    *   **Burst errors:** A contiguous sequence of multiple bits are flipped.
    *   **Random errors:** Errors occurring independently at various bit positions.

*   **1.3 Error Detection vs. Error Correction:**
    *   **Error Detection:** The receiver can determine if errors have occurred during transmission but cannot identify the location or nature of the errors. If an error is detected, the receiver typically requests a retransmission of the data block.
        *   *Benefit:* Simpler to implement, less overhead compared to correction.
        *   *Drawback:* Requires a feedback channel, which might not always be available or efficient (e.g., one-way communication).
    *   **Error Correction:** The receiver can not only detect errors but also identify and correct them, allowing for a complete and accurate decoding without retransmission.
        *   *Benefit:* Enables one-way communication, improves efficiency in environments with high error rates.
        *   *Drawback:* More complex coding schemes, higher redundancy (lower code rate).

---

### **2. Error Detecting Capabilities**

*   **2.1 Parity Check Codes:**
    *   **Concept:** The simplest form of error detection. A parity bit is added to a block of data bits.
    *   **Even Parity:** The parity bit is set such that the total number of '1's in the codeword (data bits + parity bit) is even.
    *   **Odd Parity:** The parity bit is set such that the total number of '1's in the codeword is odd.
    *   **Example:**
        *   Data: `10110`
        *   Even Parity: Count of '1's is 3 (odd). To make it even, parity bit is `1`. Codeword: `101101`.
        *   Odd Parity: Count of '1's is 3 (odd). To keep it odd, parity bit is `0`. Codeword: `101100`.
    *   **Detection Capability:** Detects all odd numbers of bit errors (e.g., 1-bit, 3-bit, 5-bit errors).
    *   **Limitation:** Cannot detect an even number of bit errors (e.g., 2-bit, 4-bit errors). If two bits flip, the parity remains unchanged.
    *   *Reference:* Haykin, *Communication Systems*, Chapter 8.

*   **2.2 Cyclic Redundancy Check (CRC) Codes:**
    *   **Concept:** A more powerful error detection code widely used in networking (e.g., Ethernet, Wi-Fi). CRCs are based on polynomial division in a finite field (GF(2)).
    *   **Encoding:**
        1.  Represent data bits as a polynomial $D(x)$.
        2.  Choose a generator polynomial $G(x)$ of degree $r$.
        3.  Shift the data polynomial $D(x)$ by $r$ positions (multiply by $x^r$).
        4.  Divide $x^r D(x)$ by $G(x)$ and obtain the remainder $R(x)$.
        5.  The codeword $C(x)$ is $x^r D(x) + R(x)$. The $r$ bits of $R(x)$ are the CRC checksum.
    *   **Detection:** The receiver calculates the remainder of the received codeword divided by $G(x)$. If the remainder is zero, the data is likely error-free.
    *   **Detection Capabilities (depends on $G(x)$):**
        *   Detects all single-bit errors.
        *   Detects all double-bit errors (if $G(x)$ has a factor of $x+1$ and no repeated roots).
        *   Detects all burst errors of length less than or equal to the degree of $G(x)$.
        *   Detects all bursts of length $r+1$ if the generator polynomial is primitive.
        *   Detects a very high percentage of longer burst errors and random errors.
    *   *Reference:* Lin & Costello, *Error Control Coding*, Chapter 4.
    *   **Example:**
        *   Data: `10110` ($D(x) = x^4 + x^2 + x$)
        *   Generator Polynomial: $G(x) = x^3 + x + 1$ (degree $r=3$)
        *   Calculate $x^3 D(x)$: $x^3(x^4 + x^2 + x) = x^7 + x^5 + x^4$
        *   Divide $x^7 + x^5 + x^4$ by $x^3 + x + 1$ (using binary polynomial division):
            ```
                x^4 + x^2 + x + 1
            x^3+x+1 | x^7 + 0x^6 + x^5 + x^4 + 0x^3 + 0x^2 + 0x + 0
                    -(x^7 + 0x^6 + x^4 + x^3)
                    -----------------------
                          0x^6 + x^5 + 0x^4 + x^3
                                -(x^5 + 0x^4 + x^3 + x^2)
                                -----------------------
                                      0x^4 + 0x^3 + x^2 + 0x
                                            -(x^4 + 0x^3 + x^2 + x)
                                            -------------------
                                                  0x^3 + 0x^2 + x + 0
                                                        -(x^3 + 0x^2 + x + 1)
                                                        -------------------
                                                              0x^2 + 0x + 1  <-- Remainder R(x) = 1
            ```
        *   Codeword: $x^7 + x^5 + x^4 + 1$. Transmitted bits: `10110001`.

*   **2.3 Checksum Codes:**
    *   **Concept:** A simpler alternative to CRC, often used in transport layer protocols (like TCP). It involves adding data blocks together (modulo some value) to create a checksum.
    *   **One's Complement Addition:** Often, data segments are added using one's complement arithmetic. The complement of the final sum is used as the checksum. This allows for easier error detection.
    *   **Detection Capability:** More robust than simple parity but less powerful than CRC. Good at detecting random errors.
    *   *Reference:* Haykin, *Communication Systems*, Chapter 8.

---

### **3. Error Correcting Capabilities**

*   **3.1 Introduction to Error Correction:**
    *   Error correction codes introduce enough redundancy to not only detect but also identify the erroneous bits and flip them back to their correct values.
    *   This is achieved by designing codes with specific structures that allow the receiver to infer the location of errors.

*   **3.2 Hamming Codes:**
    *   **Concept:** A class of linear block codes that can correct single-bit errors. They are efficient and relatively simple to implement.
    *   **Structure:** A Hamming code with parameters $(n, k)$ has $n$ total bits and $k$ data bits. The number of parity bits is $m = n-k$. The key relationship is $2^m - 1 \ge n$ (or $2^m - 1 \ge 2^m-k-1$, which is always true).
    *   **Encoding:** Parity bits are calculated based on specific subsets of data bits.
    *   **Syndrome:** The core of Hamming code error correction. The syndrome is calculated at the receiver by checking the parity of received bits. If the syndrome is non-zero, its value indicates the position of the erroneous bit.
    *   **Calculation of Syndrome (for a linear block code):**
        *   Let $\mathbf{y}$ be the received vector.
        *   Let $H$ be the parity-check matrix of the code.
        *   The syndrome is $\mathbf{s} = \mathbf{y}H^T$.
        *   If $\mathbf{s} = \mathbf{0}$, no error is detected.
        *   If $\mathbf{s} \neq \mathbf{0}$, the syndrome vector $\mathbf{s}$ is equal to the column of $H$ corresponding to the position of the error.
    *   **Example: Hamming (7,4) Code:**
        *   $n=7$, $k=4$, $m=3$. $2^3 - 1 = 7$.
        *   Data bits: $d_1, d_2, d_3, d_4$. Codeword bits: $c_1, c_2, c_3, c_4, c_5, c_6, c_7$.
        *   $c_1, c_2, c_4$ are parity bits. $c_3, c_5, c_6, c_7$ are data bits.
        *   Parity checks:
            *   $p_1 = c_1 \oplus c_3 \oplus c_5 \oplus c_7$ (bits 1, 3, 5, 7)
            *   $p_2 = c_2 \oplus c_3 \oplus c_6 \oplus c_7$ (bits 2, 3, 6, 7)
            *   $p_3 = c_4 \oplus c_5 \oplus c_6 \oplus c_7$ (bits 4, 5, 6, 7)
        *   Codeword structure: $c_1 c_2 c_3 c_4 c_5 c_6 c_7$
        *   **Parity Check Matrix H for Hamming (7,4):**
            ```
            H = | 1 0 1 0 1 0 1 |  (p1 check)
                | 0 1 1 0 0 1 1 |  (p2 check)
                | 0 0 0 1 1 1 1 |  (p3 check)
            ```
            (Columns are binary representations of positions 1 to 7: 001, 010, 011, 100, 101, 110, 111)
        *   **Encoding Example:** Data `1011` ($c_3=1, c_5=0, c_6=1, c_7=1$).
            *   $c_1 = c_3 \oplus c_5 \oplus c_7 = 1 \oplus 0 \oplus 1 = 0$
            *   $c_2 = c_3 \oplus c_6 \oplus c_7 = 1 \oplus 1 \oplus 1 = 1$
            *   $c_4 = c_5 \oplus c_6 \oplus c_7 = 0 \oplus 1 \oplus 1 = 0$
            *   Codeword: `0110011`
        *   **Error Correction Example:** Received codeword `0100011` (bit 3 is flipped).
            *   $\mathbf{y} = [0, 1, 0, 0, 0, 1, 1]$
            *   $\mathbf{s} = \mathbf{y}H^T = [0, 1, 0, 0, 0, 1, 1] \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 1 & 1 & 0 \\ 0 & 0 & 1 \\ 1 & 0 & 1 \\ 0 & 1 & 1 \\ 1 & 1 & 1 \end{pmatrix}$
            *   $\mathbf{s} = [ (0+0+0+0+0+1+1), (0+1+0+0+0+1+1), (0+0+0+0+0+1+1) ]$
            *   $\mathbf{s} = [ 0, 1, 0 ]$
            *   The syndrome `010` in binary is 2. This corresponds to the 2nd column of $H$, which indicates an error in the 2nd bit of the codeword. Correcting the 2nd bit (flipping it) restores the original codeword `0110011`.
    *   *Reference:* Lin & Costello, *Error Control Coding*, Chapter 3.

*   **3.3 Linear Block Codes (Generalization):**
    *   **Definition:** Codes where any linear combination of codewords is also a codeword. This property simplifies decoding.
    *   **Key Parameters:**
        *   $k$: Number of message bits.
        *   $n$: Codeword length.
        *   $d_{min}$: Minimum Hamming distance between any two distinct codewords. This is the crucial parameter for error correction capability.
    *   **Error Correction Capability:** A linear block code with minimum distance $d_{min}$ can correct up to $t$ errors if $d_{min} \ge 2t + 1$.
    *   **Syndrome Decoding:** A general approach for linear block codes.
    *   **Parity-Check Matrix ($H$) and Generator Matrix ($G$):**
        *   $H$ is an $m \times n$ matrix where $m=n-k$. $H G^T = 0$.
        *   $G$ is a $k \times n$ matrix. All codewords are of the form $\mathbf{c} = \mathbf{m}G$, where $\mathbf{m}$ is the message vector.
        *   The columns of $H$ corresponding to error positions are linearly independent if the code can correct that number of errors.
    *   **Sphere Packing Bound (or Hamming Bound):** Provides an upper limit on the rate of a block code for a given error-correcting capability. It states that the total number of possible received words that can be correctly decoded must be less than or equal to the total number of possible transmitted codewords, considering the error-correcting sphere around each codeword.
    *   *Reference:* Lin & Costello, *Error Control Coding*, Chapter 2 & 3; Roth, *Introduction to Coding Theory*, Chapter 5.

*   **3.4 Burst Error Correction Codes:**
    *   **Concept:** Designed to combat burst errors where multiple consecutive bits are corrupted.
    *   **Interleaving:** A common technique. Data bits are spread out (interleaved) before transmission. Errors occurring in a burst affect different original data bits, turning them into scattered single-bit errors, which can then be corrected by single-error correcting codes.
    *   **Reed-Solomon (RS) Codes:**
        *   **Concept:** Powerful non-binary block codes capable of correcting burst errors and random errors. They operate on symbols (groups of bits) rather than individual bits.
        *   **Capability:** An RS code of length $n$ with $s$ parity symbols can correct up to $t = \lfloor s/2 \rfloor$ symbol errors. If a burst error corrupts $b$ consecutive bits, it affects at most $b$ symbols. Therefore, RS codes can correct burst errors of length up to $t$ symbols.
        *   **Applications:** CDs, DVDs, QR codes, deep space communication.
        *   *Reference:* Lin & Costello, *Error Control Coding*, Chapter 6.
    *   **Fire Codes:** Specifically designed for burst error correction, can correct a single burst of errors of a specified length.
        *   *Reference:* Lin & Costello, *Error Control Coding*, Chapter 4.

---

### **4. Trade-offs and Performance**

*   **4.1 Code Rate:**
    *   **Definition:** The ratio of the number of message bits ($k$) to the total number of codeword bits ($n$), i.e., $R = k/n$.
    *   **Impact:** A higher code rate means less redundancy and thus less overhead, but generally weaker error correction capabilities. A lower code rate provides stronger error correction but at the cost of increased transmission bandwidth or latency.

*   **4.2 Error Probability:**
    *   The ultimate goal is to minimize the probability of a decoding error at the receiver.
    *   The effectiveness of a code is measured by how much it reduces the Bit Error Rate (BER) or Symbol Error Rate (SER) compared to an uncoded system at the same Signal-to-Noise Ratio (SNR).
    *   **Coding Gain:** The reduction in SNR required to achieve a certain BER compared to an uncoded system.
    *   *Reference:* Haykin, *Communication Systems*, Chapter 8.

*   **4.3 Complexity:**
    *   **Encoding and Decoding Complexity:** The computational resources (time, memory) required for encoding and decoding.
    *   **Trade-off:** More powerful codes (e.g., RS, Turbo, LDPC) often have higher computational complexity, which needs to be balanced with the required performance.

---

### **5. Modern Codes (Brief Overview)**

*   **5.1 Turbo Codes:**
    *   **Concept:** Iterative decoding using two or more simple constituent codes (often convolutional codes) in parallel with an interleaver.
    *   **Performance:** Achieved near-Shannon limit performance, significantly improving error correction capabilities.
    *   *Reference:* Richardson & Urbanke, *Modern Coding Theory*, Chapter 12.

*   **5.2 Low-Density Parity-Check (LDPC) Codes:**
    *   **Concept:** Linear block codes with sparse parity-check matrices. They are decoded using iterative belief propagation algorithms.
    *   **Performance:** Also achieve near-Shannon limit performance and are highly parallelizable, making them suitable for high-speed applications.
    *   *Reference:* Richardson & Urbanke, *Modern Coding Theory*, Chapter 11; Thangaraj, NPTEL Course on LDPC and Polar Codes.

*   **5.3 Polar Codes:**
    *   **Concept:** The first proven family of codes to achieve the Shannon capacity for binary-input discrete memoryless channels. They are constructed by "channel merging" and "channel splitting" operations.
    *   **Performance:** Excellent error correction capabilities, particularly for short-to-medium block lengths.
    *   *Reference:* Pfister, *A Brief Introduction to Polar Codes*; Gazi, *Polar Codes: A Non-Trivial Approach to Channel Coding*; Thangaraj, NPTEL Course on LDPC and Polar Codes.

---

### **Summary of Capabilities based on Minimum Distance ($d_{min}$)**

*   **Error Detection:**
    *   Can detect up to $d_{min}-1$ errors.
*   **Error Correction:**
    *   Can correct up to $t = \lfloor \frac{d_{min}-1}{2} \rfloor$ errors.

---

### **Important Points to Remember:**

*   **Redundancy is key:** Error control codes add redundant bits to enable detection/correction.
*   **Minimum Distance ($d_{min}$):** The most critical parameter for linear block codes, directly determining error correction capability.
*   **Syndrome:** A vector used in decoding linear block codes to identify error locations.
*   **Hamming Bound:** A theoretical limit on code performance.
*   **Trade-offs:** Code rate, complexity, and error correction capability are interconnected.
*   **Modern codes (Turbo, LDPC, Polar):** Offer near-capacity performance but with higher complexity.

---

### **Practice Questions:**

**Q1.** A block code has a minimum distance $d_{min} = 5$.
    a) What is the maximum number of errors it can reliably detect?
    b) What is the maximum number of errors it can reliably correct?

**Q2.** Consider a linear block code with the following parity-check matrix:
    $$
    H = \begin{pmatrix}
    1 & 1 & 0 & 1 & 0 \\
    0 & 1 & 1 & 0 & 1
    \end{pmatrix}
    $$
    a) What are the parameters $(n, k)$ of this code?
    b) Calculate the minimum distance $d_{min}$ of this code.
    c) What is the error-correcting capability of this code?
    d) If the received vector is $\mathbf{y} = [1, 0, 1, 1, 0]$, calculate the syndrome $\mathbf{s}$. Does this indicate an error? If so, what is the most likely error pattern?

**Q3.** Explain the primary difference between error detection and error correction. Give an example of a scenario where error detection is sufficient and another where error correction is essential.

**Q4.** How does interleaving help in combating burst errors?

**Q5.** Briefly describe the principle behind CRC codes and why they are generally more effective for error detection than simple parity checks.

---

### **Answers to Practice Questions:**

**A1.**
    a) Maximum number of detectable errors = $d_{min} - 1 = 5 - 1 = 4$.
    b) Maximum number of correctable errors = $\lfloor \frac{d_{min}-1}{2} \rfloor = \lfloor \frac{5-1}{2} \rfloor = \lfloor \frac{4}{2} \rfloor = 2$.

**A2.**
    a) The matrix $H$ is $2 \times 5$. Thus, $m=2$ (number of parity checks) and $n=5$ (codeword length).
       The number of message bits $k = n - m = 5 - 2 = 3$.
       Parameters are $(n, k) = (5, 3)$.

    b) To find $d_{min}$, we need to find the smallest number of linearly independent columns of $H$ that sum to the zero vector.
       *   Columns are: $c_1=[1,0]^T$, $c_2=[1,1]^T$, $c_3=[0,1]^T$, $c_4=[1,0]^T$, $c_5=[0,1]^T$.
       *   Check pairs:
           *   $c_1+c_2 = [1,0]^T + [1,1]^T = [0,1]^T \neq [0,0]^T$
           *   $c_1+c_3 = [1,0]^T + [0,1]^T = [1,1]^T \neq [0,0]^T$
           *   $c_1+c_4 = [1,0]^T + [1,0]^T = [0,0]^T$. Since $c_1$ and $c_4$ are identical non-zero columns, they are linearly dependent. This indicates that the code can correct at least 1 error.
           *   The weight of the columns: $w(c_1)=1, w(c_2)=2, w(c_3)=1, w(c_4)=1, w(c_5)=1$.
           *   The minimum non-zero weight of any column of $H$ is 1.
       *   The minimum distance of a linear block code is equal to the minimum Hamming weight of its non-zero codewords.
       *   The minimum Hamming weight of the non-zero codewords is the minimum number of linearly independent columns of $H$ that sum to zero.
       *   Since $c_1 = c_4$, and $c_1 \neq 0$, $c_1 + c_4 = 0$. This signifies a minimum distance of 2 if we consider the columns themselves. However, $d_{min}$ is the minimum weight of a *codeword*.
       *   Let's construct a generator matrix $G$. A systematic generator matrix for $H = [P | I_m]$ would be $G = [I_k | P^T]$. Our $H$ is not in this form.
       *   Let's find the minimum weight of non-zero codewords by finding the smallest number of columns that sum to zero.
           *   $c_1+c_4 = [0,0]^T$ (2 columns)
           *   $c_3+c_5 = [0,0]^T$ (2 columns)
           *   $c_1+c_2+c_3 = [1,0]^T+[1,1]^T+[0,1]^T = [0,0]^T$ (3 columns)
           *   $c_2+c_5 = [1,1]^T + [0,1]^T = [1,0]^T \neq 0$
       *   The smallest set of linearly dependent columns is $\{c_1, c_4\}$ or $\{c_3, c_5\}$. The number of columns in these sets is 2.
       *   Therefore, the minimum distance $d_{min} = 2$.

    c) Error-correcting capability $t = \lfloor \frac{d_{min}-1}{2} \rfloor = \lfloor \frac{2-1}{2} \rfloor = \lfloor \frac{1}{2} \rfloor = 0$.
       This code can only detect errors but cannot correct them. This implies the columns of $H$ are not distinct enough to uniquely identify a single error location. For single error correction, all columns of $H$ must be distinct and non-zero.

    d) Received vector $\mathbf{y} = [1, 0, 1, 1, 0]$.
       Syndrome $\mathbf{s} = \mathbf{y}H^T = [1, 0, 1, 1, 0] \begin{pmatrix} 1 & 0 \\ 1 & 1 \\ 0 & 1 \\ 1 & 0 \\ 0 & 1 \end{pmatrix}$
       $\mathbf{s} = [ (1 \cdot 1 + 0 \cdot 1 + 1 \cdot 0 + 1 \cdot 1 + 0 \cdot 0), (1 \cdot 0 + 0 \cdot 1 + 1 \cdot 1 + 1 \cdot 0 + 0 \cdot 1) ]$
       $\mathbf{s} = [ (1 + 0 + 0 + 1 + 0), (0 + 0 + 1 + 0 + 0) ]$
       $\mathbf{s} = [ 0, 1 ]$
       Since $\mathbf{s} = [0, 1] \neq [0, 0]$, an error is detected.
       The syndrome $\mathbf{s} = [0, 1]^T$ is the second column of $H$. This means the error is most likely in the bit position corresponding to the second column, which is bit 2.
       *Most likely error pattern:* `01000`.
       *Correction:* Flip the 2nd bit of $\mathbf{y}$: $[1, \mathbf{1}, 1, 1, 0]$.

**A3.**
    *   **Error Detection:** The receiver can identify that errors have occurred during transmission but cannot pinpoint their location or nature. The typical action is to request retransmission of the corrupted data block. This is suitable for applications where a feedback channel is available and latency due to retransmission is acceptable. Example: File transfer protocols (like FTP) often use error detection (e.g., CRC) and retransmission.
    *   **Error Correction:** The receiver can not only detect errors but also identify the location of the erroneous bits and correct them, allowing for continuous, uninterrupted data flow. This is essential for applications where a feedback channel is unavailable or impractical, or where retransmission would cause unacceptable delays. Example: Satellite communication (one-way), broadcast systems, deep space probes.

**A4.** Interleaving spreads the bits of a data block across different positions in the transmitted sequence. If a burst error corrupts a contiguous block of transmitted bits, it will affect only a few bits from each original data block after de-interleaving. This effectively converts a strong burst error into multiple weaker, independent single-bit errors, which can then be more effectively corrected by codes like Hamming codes that are designed for single-bit error correction.

**A5.**
    *   **CRC Principle:** CRC codes treat the data block as coefficients of a polynomial and perform polynomial division by a predefined generator polynomial $G(x)$ over a finite field (GF(2)). The remainder of this division is the checksum transmitted along with the data. At the receiver, the received codeword is divided by $G(x)$. If the remainder is zero, the data is considered error-free.
    *   **Effectiveness over Parity:**
        *   **Single Parity:** Detects only an odd number of errors. Fails for any even number of errors.
        *   **CRC:** A well-chosen generator polynomial can detect:
            *   All single-bit errors.
            *   All double-bit errors.
            *   All burst errors of length up to the degree of $G(x)$.
            *   A very high percentage of longer burst errors and random errors.
        The polynomial structure allows CRC to check for more complex error patterns than simple bit-wise parity. The choice of $G(x)$ is critical for its detection capabilities.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
