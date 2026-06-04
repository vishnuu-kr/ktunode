---
title: "Linear block codes."
subject: "ADVANCED COMMUNICATION THEORY"
module: "Module 2: Channel Capacity of AWGN Channel"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fed08"
status: "completed"
scrapedAt: "2026-05-23T17:58:39.350Z"
---
# Advanced Communication Theory: Module 2 - Channel Capacity of AWGN Channel

## Topic: Linear Block Codes

This module focuses on understanding the capacity of the Additive White Gaussian Noise (AWGN) channel and the role of channel coding in achieving reliable communication. Linear block codes are a fundamental class of error-correcting codes widely used in digital communication systems.

---

### 1. Introduction to Channel Coding and Linear Block Codes

*   **Motivation:** Real-world communication channels are prone to errors introduced by noise (e.g., thermal noise, interference). Channel coding aims to detect and correct these errors, ensuring reliable data transmission.
*   **Course Outcome Alignment:** CO3: Apply channel coding for error detection and correction. (Knowledge Level: K3)
*   **Key Concept:** **Error Detection vs. Error Correction:**
    *   **Error Detection:** The receiver can determine if errors have occurred, but not necessarily where they are. This typically leads to retransmission of the corrupted data.
    *   **Error Correction:** The receiver can not only detect errors but also identify and correct them without retransmission.
*   **Linear Block Codes:** A class of block codes where the encoding and decoding processes are linear. This linearity simplifies the mathematical analysis and implementation.
*   **Textbook Reference:** Goldsmith, Chapter 5 (Error Control Coding); Lin & Costello, Chapter 2 (Linear Block Codes).

---

### 2. Fundamentals of Linear Block Codes

*   **Definition:** A linear block code is a **linear mapping** from a k-bit message block to an n-bit codeword, where n > k. The code rate, denoted by $R$, is defined as $R = k/n$. A higher code rate implies less redundancy and potentially lower error correction capability.
*   **Vector Space Representation:** Linear block codes can be viewed as subspaces of the vector space $F_2^n$, where $F_2 = \{0, 1\}$ is the binary field.
*   **Key Concepts:**
    *   **Message Vector (m):** A k-dimensional vector representing the original information bits. $m \in F_2^k$.
    *   **Codeword Vector (c):** An n-dimensional vector representing the encoded information bits. $c \in F_2^n$.
    *   **Generator Matrix (G):** A $k \times n$ matrix that generates all possible codewords from message vectors. The set of all codewords $C$ is given by $C = \{mG | m \in F_2^k\}$.
    *   **Parity Check Matrix (H):** An $(n-k) \times n$ matrix that defines the code's structure. A codeword $c$ is valid if and only if $cH^T = 0$, where $H^T$ is the transpose of $H$.
*   **Relationship between G and H:** The generator matrix and parity check matrix are related by $GH^T = 0$.
*   **Example:**
    Let's consider a simple $(n=3, k=2)$ linear block code.
    Message vector $m = [m_1, m_0]$.
    Generator matrix $G = \begin{bmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \end{bmatrix}$.
    The possible message vectors are:
    *   $m = [0, 0] \rightarrow c = [0, 0, 0]$
    *   $m = [0, 1] \rightarrow c = [0, 1, 1]$
    *   $m = [1, 0] \rightarrow c = [1, 0, 1]$
    *   $m = [1, 1] \rightarrow c = [1, 1, 0]$
    The codeword space is $C = \{[0,0,0], [0,1,1], [1,0,1], [1,1,0]\}$.
    The parity check matrix $H$ for this code can be derived. For example, $H = \begin{bmatrix} 1 & 1 & 1 \end{bmatrix}$ (n-k=1).
    Check: $GH^T = \begin{bmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \end{bmatrix} \begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix} = \begin{bmatrix} 1+0+1 \\ 0+1+1 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$ (modulo 2).

*   **Course Outcome Alignment:** CO3: Apply channel coding for error detection and correction. (Knowledge Level: K3)
*   **Textbook Reference:** Goldsmith, Chapter 5.1; Lin & Costello, Chapter 2.1, 2.2.

---

### 3. Encoding Process

*   **Systematic Encoding:** In systematic linear block codes, the codeword contains the original message bits followed by parity check bits, or vice-versa.
    *   If $c = [m | p]$, where $m$ is the k-bit message and $p$ is the (n-k)-bit parity check bits.
    *   The generator matrix can be written in systematic form: $G = [I_k | P]$, where $I_k$ is the $k \times k$ identity matrix and $P$ is a $k \times (n-k)$ matrix.
    *   The codeword is then $c = mG = [m | mP]$. The parity check bits $p$ are derived from the message bits as $p = mP$.
*   **Non-Systematic Encoding:** The message bits are mixed with parity bits in a more complex arrangement.
*   **Example (Systematic Encoding):**
    Using the previous example with $G = \begin{bmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \end{bmatrix}$. This is already in systematic form where $I_2 = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$ and $P = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$.
    Message $m = [1, 0]$.
    Codeword $c = mG = [1, 0] \begin{bmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \end{bmatrix} = [1 \cdot 1 + 0 \cdot 0, 1 \cdot 0 + 0 \cdot 1, 1 \cdot 1 + 0 \cdot 1] = [1, 0, 1]$.
    Here, the message bits are $[1, 0]$ and the parity bit is $[1]$. The parity bit is calculated as $p_0 = m_0 \oplus m_1 = 1 \oplus 0 = 1$. So, $c = [1, 0, 1]$.

*   **Course Outcome Alignment:** CO3: Apply channel coding for error detection and correction. (Knowledge Level: K3)
*   **Textbook Reference:** Goldsmith, Section 5.1.1; Lin & Costello, Section 2.3.

---

### 4. Decoding Process

*   **Syndrome Calculation:** The decoding process typically starts by calculating the **syndrome vector (s)** for the received vector $r$. The syndrome is calculated as $s = rH^T$.
    *   If $s = 0$, it indicates that the received vector $r$ is a valid codeword (no errors detected, or an undetectable error pattern).
    *   If $s \neq 0$, it indicates that an error has occurred.
*   **Error Detection:** If $s \neq 0$, an error is detected.
*   **Error Correction:** For error correction, the decoder needs to find the most likely transmitted codeword given the received vector. This usually involves:
    1.  **Syndrome Table:** For a given code, a syndrome table is pre-computed. This table maps each possible non-zero syndrome to the most likely error pattern.
    2.  **Error Correction:** The received vector $r$ is XORed with the identified error pattern to obtain the estimated message vector $\hat{m}$ and hence the estimated codeword $\hat{c}$.
*   **Minimum Hamming Distance ($d_{min}$):** The minimum Hamming distance between any two distinct codewords in a code is a crucial parameter. It determines the error detection and correction capabilities of the code.
    *   **Error Detection Capability:** A code can detect up to $d_{min} - 1$ errors.
    *   **Error Correction Capability:** A code can correct up to $\lfloor (d_{min} - 1) / 2 \rfloor$ errors.
*   **Relationship with Parity Check Matrix:** The columns of the parity check matrix $H$ are linearly independent if and only if the minimum Hamming distance of the code is at least 3. If $t$ columns are linearly dependent, then $d_{min} \le t+1$.
*   **Example (Syndrome Decoding):**
    Consider the code from the previous example ($G$ and $H$ as defined). Let the transmitted codeword be $c = [1, 0, 1]$.
    Suppose the received vector is $r = [1, 1, 1]$ (an error in the second bit).
    Syndrome calculation: $s = rH^T = [1, 1, 1] \begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix} = 1 \cdot 1 + 1 \cdot 1 + 1 \cdot 1 = 1 \pmod{2}$.
    Since $s=1 \neq 0$, an error is detected.
    For this simple code, the only non-zero syndrome is 1. This corresponds to an error pattern $e = [0, 1, 0]$.
    The estimated codeword is $\hat{c} = r \oplus e = [1, 1, 1] \oplus [0, 1, 0] = [1, 0, 1]$.
    The estimated message is $\hat{m} = [1, 0]$.

*   **Course Outcome Alignment:** CO3: Apply channel coding for error detection and correction. (Knowledge Level: K3)
*   **Textbook Reference:** Goldsmith, Section 5.1.2; Lin & Costello, Section 2.5.

---

### 5. Key Linear Block Code Families

*   **Hamming Codes:**
    *   **Parameters:** $(2^m - 1, 2^m - 1 - m, 3)$ for some integer $m \ge 2$.
    *   **Capabilities:** Can correct single-bit errors ($t=1$, since $d_{min}=3$).
    *   **Construction:** Their parity check matrices have columns that are unique non-zero binary vectors of length $m$.
    *   **Example:** Hamming(7,4) code ($m=3$). $n=7, k=4$. $d_{min}=3$. Can correct 1 error.
    *   **Textbook Reference:** Goldsmith, Section 5.2.1; Lin & Costello, Section 3.2.
*   **Repetition Codes:**
    *   **Parameters:** $(n, 1)$, where each information bit is repeated $n$ times.
    *   **Capabilities:** Can detect up to $n-1$ errors and correct up to $\lfloor (n-1)/2 \rfloor$ errors.
    *   **Example:** A $(3,1)$ repetition code transmits each bit three times. For message "1", codeword is "111". For "0", codeword is "000". If "110" is received, it can be corrected to "111".
    *   **Textbook Reference:** Goldsmith, Section 5.2.2; Rappaport, Chapter 7 (Error Control Coding).
*   **Cyclic Codes:** A subset of linear block codes where any cyclic shift of a codeword is also a codeword. They have algebraic structures that simplify encoding and decoding (e.g., using polynomial representation). Examples include BCH codes and Reed-Solomon codes.
    *   **Textbook Reference:** Goldsmith, Section 5.3; Lin & Costello, Chapter 4.
*   **BCH Codes and Reed-Solomon Codes:** More powerful codes capable of correcting multiple errors. They are often used in practical systems like satellite communications, CDs, and Wi-Fi.
    *   **Textbook Reference:** Goldsmith, Sections 5.3.2, 5.3.3; Lin & Costello, Chapters 5, 6.

---

### 6. Linear Block Codes in the Context of Channel Capacity

*   **Achieving Channel Capacity:** The Shannon-Hartley theorem states the maximum rate at which reliable communication can occur over an AWGN channel. While the theorem guarantees the existence of codes that can achieve this capacity, it doesn't specify how to construct them.
*   **Role of Linear Block Codes:** Linear block codes are practical building blocks for achieving this goal. By choosing appropriate linear block codes with sufficient error correction capability, we can approach the Shannon capacity.
*   **Trade-off between Rate and Performance:**
    *   **High Rate Codes (e.g., repetition codes):** Low complexity, but poor error correction capabilities and far from channel capacity.
    *   **Low Rate Codes (e.g., powerful concatenated codes):** High complexity, excellent error correction, can approach channel capacity.
*   **The Channel Coding Theorem (Shannon):** For a given AWGN channel with capacity $C$, for any rate $R < C$, there exist coding schemes that allow the probability of error at the decoder to be made arbitrarily small. This is achieved by using codes with increasing length.
*   **Course Outcome Alignment:** CO1: Explain information theory measures such as entropy, conditional entropy, mutual information (Knowledge Level: K2); CO3: Apply channel coding for error detection and correction (Knowledge Level: K3). This section connects the practical coding schemes to the theoretical limits.
*   **Textbook Reference:** Cover & Thomas, Chapter 7 (Channel Capacity and Coding); Goldsmith, Chapter 4 (AWGN Channel); Haykin, Chapter 3 (Information Theory and Source Coding).

---

### 7. Performance Analysis of Linear Block Codes

*   **Error Probability:** The performance of a linear block code is typically measured by its **probability of block error** ($P_b$) or **probability of bit error** ($P_e$).
*   **Bounding Error Probability:** Analytical expressions for $P_b$ and $P_e$ are often complex and depend on the error patterns that map to non-zero syndromes.
    *   **Union Bound:** A common technique to upper bound the probability of block error. It sums the probabilities of all error patterns that would be misinterpreted as a valid codeword.
    *   **$P_b \le \sum_{w=1}^{n} A_w P(\text{error pattern of weight } w)$**
        where $A_w$ is the number of error patterns of weight $w$ that are mapped to the same syndrome as a valid codeword.
*   **AWGN Channel Performance:**
    *   When transmitted over an AWGN channel, the received vector is $r = c + n$, where $n$ is the AWGN noise vector.
    *   The probability of a specific error pattern $e$ occurring depends on the number of bit errors in $e$ and the Signal-to-Noise Ratio (SNR).
    *   For binary phase shift keying (BPSK) modulation, the probability of a single bit error is $P_b = Q(\sqrt{2E_b/N_0})$, where $E_b/N_0$ is the bit energy to noise power spectral density ratio.
*   **Textbook Reference:** Goldsmith, Section 5.1.3; Lin & Costello, Section 2.6; Haykin, Chapter 4 (Digital Modulation and Multiplexing) for AWGN channel performance.

---

### 8. Practice Questions and Answers

**Question 1:** A linear block code has a generator matrix $G = \begin{bmatrix} 1 & 0 & 0 & 1 & 1 \\ 0 & 1 & 0 & 1 & 0 \\ 0 & 0 & 1 & 0 & 1 \end{bmatrix}$.
(a) What are the parameters $(n, k)$ of this code?
(b) What is the code rate?
(c) Is this code systematic? If so, write the systematic form of $G$.
(d) Find the parity check matrix $H$.
(e) What is the minimum Hamming distance of this code? What is its error detection and correction capability?

**Answer 1:**
(a) $n=5$ (codeword length), $k=3$ (message length). So, $(n, k) = (5, 3)$.
(b) Code rate $R = k/n = 3/5 = 0.6$.
(c) Yes, this code is systematic because the first $k=3$ columns contain the $3 \times 3$ identity matrix $I_3$. The systematic form is $G_{sys} = [I_3 | P]$, where $P = \begin{bmatrix} 1 & 1 \\ 1 & 0 \\ 0 & 1 \end{bmatrix}$.
(d) The parity check matrix $H$ is an $(n-k) \times n$ matrix such that $GH^T = 0$. For a systematic code $G = [I_k | P]$, $H = [P^T | I_{n-k}]$.
    Here, $P^T = \begin{bmatrix} 1 & 1 & 0 \\ 1 & 0 & 1 \end{bmatrix}$.
    So, $H = \begin{bmatrix} 1 & 1 & 0 & 1 & 0 \\ 1 & 0 & 1 & 0 & 1 \end{bmatrix}$.
(e) To find the minimum Hamming distance, we examine the linear combinations of rows of $G$.
    *   Weight of codewords (non-zero):
        *   $m=[0,0,1] \rightarrow c=[0,0,1,0,1]$, weight = 2
        *   $m=[0,1,0] \rightarrow c=[0,1,0,1,0]$, weight = 2
        *   $m=[1,0,0] \rightarrow c=[1,0,0,1,1]$, weight = 3
        *   $m=[0,1,1] \rightarrow c=[0,1,1,1,1]$, weight = 4
        *   $m=[1,0,1] \rightarrow c=[1,0,1,1,0]$, weight = 3
        *   $m=[1,1,0] \rightarrow c=[1,1,0,0,1]$, weight = 3
        *   $m=[1,1,1] \rightarrow c=[1,1,1,1,0]$, weight = 4
    The minimum non-zero codeword weight is 2. Therefore, $d_{min} = 2$.
    *   Error Detection Capability: $d_{min} - 1 = 2 - 1 = 1$ error.
    *   Error Correction Capability: $\lfloor (d_{min} - 1) / 2 \rfloor = \lfloor (2 - 1) / 2 \rfloor = \lfloor 0.5 \rfloor = 0$ errors. This code can only detect single-bit errors.

**Question 2:** Consider a $(3,1)$ repetition code.
(a) What is its generator matrix $G$?
(b) If the message "1" is transmitted, what is the codeword?
(c) If the received word is "101" over an AWGN channel, what is the decoded message? What is the probability of this error occurring if BPSK modulation is used and $E_b/N_0 = 3$ dB? (Hint: $Q(x) \approx e^{-x^2/2} / \sqrt{\pi x^2}$)

**Answer 2:**
(a) For a $(3,1)$ repetition code, $k=1, n=3$. The generator matrix is $G = \begin{bmatrix} 1 & 1 & 1 \end{bmatrix}$.
(b) If the message is "1", the codeword is $1 \times G = 1 \times \begin{bmatrix} 1 & 1 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 1 & 1 \end{bmatrix}$.
(c) Decoding a repetition code is usually done by majority voting. In "101", there are two "1"s and one "0". The majority is "1". So, the decoded message is "1".
    The error pattern is $e = \begin{bmatrix} 1 & 0 & 1 \end{bmatrix} \oplus \begin{bmatrix} 1 & 1 & 1 \end{bmatrix} = \begin{bmatrix} 0 & 1 & 0 \end{bmatrix}$. This is a single-bit error in the second bit.
    The probability of a single bit error in BPSK is $P_{bit\_error} = Q(\sqrt{2E_b/N_0})$.
    $E_b/N_0 = 3$ dB. Convert to linear scale: $10^{3/10} \approx 1.995$.
    $P_{bit\_error} = Q(\sqrt{2 \times 1.995}) = Q(\sqrt{3.99}) \approx Q(2)$.
    Using the approximation $Q(x) \approx e^{-x^2/2} / \sqrt{\pi x^2}$:
    $P_{bit\_error} \approx \frac{e^{-(2^2)/2}}{\sqrt{\pi (2^2)}} = \frac{e^{-2}}{\sqrt{4\pi}} \approx \frac{0.1353}{3.54} \approx 0.038$.
    The probability of a single-bit error in the received word "101" (transmitted "111") is indeed the bit error probability $P_{bit\_error}$. So, the probability of this error occurring is approximately 0.038.

---

### 9. Important Points to Remember

*   Linear block codes are defined by their **generator matrix (G)** and **parity check matrix (H)**, which are related by $GH^T = 0$.
*   The **code rate ($R=k/n$)** indicates the efficiency of the code.
*   The **minimum Hamming distance ($d_{min}$)** dictates the error detection ($d_{min}-1$) and correction ($\lfloor (d_{min}-1)/2 \rfloor$) capabilities.
*   **Systematic codes** simplify encoding by placing message bits directly within the codeword.
*   **Syndrome decoding** is a common method for identifying and correcting errors.
*   **Hamming codes** are simple and effective for single-error correction.
*   The goal of channel coding is to get as close as possible to the **Shannon capacity** of the channel.
*   Performance is evaluated by **error probabilities**, often bounded using techniques like the union bound.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 10. Further Reading and Resources

*   **Goldsmith, Wireless Communications:** Chapters 5 for detailed coverage of error control coding, including linear block codes and their performance.
*   **Lin & Costello, Error Control Coding:** Chapters 2 and 3 provide an in-depth mathematical treatment of linear block codes and Hamming codes.
*   **Cover & Thomas, Elements of Information Theory:** Chapter 7 discusses channel capacity and the fundamental limits of reliable communication.
*   **Haykin, Communication Systems:** Chapters related to digital communication and error control coding will offer complementary perspectives.

---