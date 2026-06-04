---
title: "Turbo Codes"
subject: "CODING THEORY"
module: "Module 4: Review on Convolution Codes"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff232"
status: "completed"
scrapedAt: "2026-05-23T18:05:23.308Z"
---
# Coding Theory: Module 4 - Review on Convolution Codes

## Topic: Turbo Codes

This module provides a review of convolutional codes, and within this context, we delve into one of the most significant advancements in error correction coding: Turbo Codes.

---

### **1. Introduction to Turbo Codes**

Turbo codes are a class of powerful error-correcting codes that, when introduced in 1993 by Claude Berrou, Michel J. Wabbes, and P. L. Michel, achieved performance remarkably close to the theoretical Shannon limit. Their significance lies in their ability to correct errors in data transmitted over noisy channels with unprecedented efficiency.

*   **Key Concept:** Turbo codes are the first practical codes that achieve near-Shannon-limit error correction performance.
*   **Origin:** Developed by Berrou, Wabbes, and Michel in 1993.
*   **Significance:** Revolutionized the field of error correction coding and influenced subsequent code designs (e.g., LDPC codes).

---

### **2. The Architecture of Turbo Codes**

Turbo codes are constructed using two or more simpler convolutional codes (constituent encoders) interleaved with a pseudorandom interleaver. The term "turbo" refers to the iterative decoding process that allows these codes to achieve their remarkable performance.

#### **2.1 Constituent Encoders**

*   **Type:** Typically, simple recursive systematic convolutional (RSC) codes are used as constituent encoders.
*   **Recursive Systematic Convolutional (RSC) Code:**
    *   **Systematic:** The encoder outputs the original data bits (systematic bits) along with parity bits. This simplifies decoding.
    *   **Recursive:** The encoder uses feedback, meaning the output depends not only on current input bits but also on past input bits through the feedback loop. This feedback mechanism is crucial for creating powerful codes.
*   **Constraint Length (k):** The constraint length of the constituent encoders is a critical parameter affecting performance and complexity. Shorter constraint lengths are often preferred for practical implementation due to decoding complexity.

**Example (from Lin & Costello, 2nd Ed.):**
A common RSC encoder used in Turbo codes is a rate $1/2$ encoder with generator polynomials $g^{(1)} = (1, 0, 1)$ and $g^{(2)} = (1, 1, 1)$ in octal. The feedback polynomial is $101$ (octal).

#### **2.2 The Interleaver**

The interleaver is a critical component that "scrambles" the input data sequence before it is fed to the second constituent encoder.

*   **Purpose:**
    *   **Destroys Correlation:** The interleaver breaks any correlation between the input bits to the two encoders. If the same input sequence were fed to both, the errors would likely affect them in a similar manner. The interleaver ensures that errors are spread out, making them easier to correct through iterative decoding.
    *   **Enhances Performance:** By decorrelating the inputs to the constituent encoders, the interleaver allows the decoder to extract more information about the transmitted bits at each iteration.
*   **Types of Interleavers:**
    *   **Block Interleaver:** Data is written into a matrix row by row and read out column by column (or vice versa).
    *   **Convolutional Interleaver:** Uses delay elements to achieve interleaving.
    *   **Pseudo-Random Interleavers:** The most common choice for Turbo codes. These are designed to have good statistical properties for spreading errors.

**Important Point:** The performance of a Turbo code is highly dependent on the choice of the interleaver. A well-designed interleaver is crucial for achieving near-Shannon-limit performance.

#### **2.3 Turbo Code Encoder Structure**

A typical Turbo encoder consists of two RSC encoders separated by an interleaver.

*   **Input Data Sequence:** $u = (u_1, u_2, \dots, u_N)$
*   **Encoder 1 (Constituent Encoder 1):** Takes the input sequence $u$ and produces two output streams:
    *   Systematic bits: $u$
    *   Parity bits: $p^{(1)} = (p^{(1)}_1, p^{(1)}_2, \dots, p^{(1)}_N)$
*   **Interleaver:** A permutation $\pi$ rearranges the input sequence $u$ to produce an interleaved sequence $u' = (u'_{\pi(1)}, u'_{\pi(2)}, \dots, u'_{\pi(N)})$, where $u'_i = u_{\pi^{-1}(i)}$.
*   **Encoder 2 (Constituent Encoder 2):** Takes the interleaved sequence $u'$ and produces parity bits: $p^{(2)} = (p^{(2)}_1, p^{(2)}_2, \dots, p^{(2)}_N)$.

The transmitted codeword is formed by concatenating the systematic bits from the first encoder and the parity bits from both encoders.

*   **Transmitted Codeword:** $(u_1, \dots, u_N, p^{(1)}_1, \dots, p^{(1)}_N, p^{(2)}_1, \dots, p^{(2)}_N)$
*   **Rate of Turbo Code:** For two rate $1/2$ constituent encoders with output streams $u$ and $p^{(1)}$, and interleaved $u'$ and $p^{(2)}$, the overall rate is $1/3$. By puncturing (removing) some parity bits, higher rates like $1/2$, $2/3$, $3/4$, etc., can be achieved.

---

### **3. Turbo Decoding: The Iterative Approach**

The decoding of Turbo codes is as revolutionary as their construction. It involves an iterative exchange of "soft" information between decoders for each constituent encoder.

#### **3.1 Soft-Decision Decoding**

Turbo codes are decoded using soft-decision decoding algorithms, which operate on probabilities (or log-likelihood ratios) rather than hard bit decisions (0 or 1). This is essential for Turbo codes to achieve their performance gains.

*   **Log-Likelihood Ratio (LLR):** A measure of the confidence in a received bit being 0 or 1. For a binary symbol $y$ received, the LLR of bit $u$ is defined as:
    $LLR(u) = \log \frac{P(u=1|y)}{P(u=0|y)}$
    A positive LLR indicates a higher probability of the bit being 1, while a negative LLR indicates a higher probability of it being 0.

#### **3.2 The Iterative Decoding Algorithm (e.g., BCJR Algorithm)**

The most common algorithm used for decoding each constituent convolutional code is the **Bahl-Cocke-Jelinek-Bussgang (BCJR) algorithm** (also known as the Maximum A Posteriori (MAP) or Soft-Output Viterbi Algorithm (SOVA) for trellis-based codes).

*   **BCJR Algorithm:** A dynamic programming algorithm that computes the a posteriori probability (or LLR) for each transmitted bit.
*   **Key Steps of Turbo Decoding:**
    1.  **Initialization:** The decoder for Encoder 1 receives the received systematic bits ($y_u$) and the received parity bits from Encoder 1 ($y_{p1}$). It computes initial LLRs for the input bits $u$.
    2.  **Iteration 1:**
        *   **Decoder 1:** Uses $y_u$ and $y_{p1}$ to compute soft-information (LLRs) about the original input bits $u$. This soft-information is called "a priori" information for Decoder 2.
        *   **Interleaver/Deinterleaver:** The soft-information from Decoder 1 is deinterleaved (using the same permutation $\pi^{-1}$) and then fed as "a priori" information to Decoder 2.
        *   **Decoder 2:** Receives the received parity bits from Encoder 2 ($y_{p2}$) and the deinterleaved soft-information from Decoder 1. It uses the BCJR algorithm to compute the a posteriori LLRs for the interleaved bits $u'$.
    3.  **Iteration 2:**
        *   **Deinterleaving:** The soft-information from Decoder 2 is deinterleaved (using the permutation $\pi$).
        *   **Decoder 1:** Receives the original systematic bits ($y_u$) and the deinterleaved soft-information from Decoder 2. It uses this new "a priori" information, along with $y_{p1}$, to recompute refined LLRs for the input bits $u$.
    4.  **Subsequent Iterations:** This process continues for a predefined number of iterations. Each iteration refines the soft-information passed between the decoders.
    5.  **Termination:** After the specified number of iterations, the LLRs from the final decoder are used to make hard decisions on the transmitted bits.

**Visual Representation (simplified):**

```
Input u ----> Encoder 1 ----> (u, p1)
               |             |
               |             |
               v             v
           Deinterleave   Receive p1
               ^             ^
               |             |
(Soft Info u') <--- Decoder 2 <--- Receive p2
               ^
               |
           Interleave
               ^
               |
Input u ----> Encoder 2 ----> Receive p2
```

**Note:** The actual data flow involves passing soft LLRs, not just data bits.

*   **Soft Information Transfer:** The output of a decoder is not just a hard bit decision but a soft LLR. This soft information is then used as a priori information for the other decoder.
*   **Number of Iterations:** Typically 4-20 iterations are sufficient for good performance. More iterations generally lead to better performance but increased complexity.

---

### **4. Performance of Turbo Codes**

Turbo codes exhibit an "error floor" and a very "waterfall" region in their Bit Error Rate (BER) curves, meaning their performance degrades very slowly as the signal-to-noise ratio (SNR) decreases.

*   **Waterfall Region:** Characterized by a rapid decrease in BER with a small increase in SNR. This is where Turbo codes excel.
*   **Error Floor:** At very low SNRs, the performance of Turbo codes can become limited by the interleaver design and the finite number of iterations.
*   **Comparison to other codes:**
    *   **Convolutional Codes:** Turbo codes significantly outperform traditional convolutional codes, especially at low SNRs.
    *   **Block Codes:** Turbo codes often outperform comparable block codes.
    *   **Shannon Limit:** Achieve performance very close to the theoretical maximum (Shannon limit) for a given channel.

**Important Point:** The performance of a Turbo code is a function of:
*   The constituent encoder design (e.g., generator polynomials, constraint length).
*   The interleaver design.
*   The number of decoding iterations.
*   The code rate.

---

### **5. Applications of Turbo Codes**

Turbo codes have found widespread use in various communication systems due to their excellent performance.

*   **3G Mobile Communication (UMTS):** Turbo codes are used for forward error correction in 3G standards, significantly improving data rates and reliability.
*   **Satellite Communications:** Used in deep space missions and other demanding environments.
*   **Wi-Fi:** In some higher data rate modes.
*   **Digital Video Broadcasting (DVB):** For enhanced error protection.
*   **5G NR (New Radio):** While LDPC codes are primarily used for data channels, Turbo codes (specifically Extended Turbo codes) are used for control channels in 5G. (Refer to CO6: Illustrate modern error correcting codes like Turbo codes...)

---

### **6. Knowledge Level Alignment (Course Outcomes)**

*   **CO1: Explain various algebraic structures used in coding theory (Knowledge Level: K2):** While Turbo codes themselves aren't strictly algebraic structures in the same way as cyclic codes, their constituent encoders are convolutional codes, which are defined by polynomial algebra (generator polynomials). Understanding these polynomials is foundational.
*   **CO2: Explain the error detection and correction capabilities of linear codes (Knowledge Level: K2):** Turbo codes are linear codes. Their error correction capabilities are explained by the iterative decoding process that leverages the structure of the constituent codes and the interleaver.
*   **CO3: Apply linear block codes to detect and correct errors. (Knowledge Level: K3):** This outcome is more directly related to block codes, but the principles of error correction are universal. Turbo codes, being a type of code, are applied to correct errors.
*   **CO4: Use algebraic techniques to construct efficient codes with reduced structural complexity (Knowledge Level: K3):** The construction of the constituent encoders uses algebraic techniques (polynomials). While Turbo codes are complex, the idea of building powerful codes from simpler, algebraically defined components relates to this outcome.
*   **CO5: Apply convolutional code for error detection correction (Knowledge Level: K3):** Turbo codes are built upon convolutional codes. Understanding how convolutional codes work (Viterbi algorithm for decoding) is a prerequisite for understanding Turbo code decoding.
*   **CO6: Illustrate modern error correcting codes like Turbo codes, LDPC code and polar codes (Knowledge Level: K2):** This module directly addresses Turbo codes, explaining their architecture and iterative decoding.

---

### **7. Key Concepts and Definitions to Remember**

*   **Constituent Encoder:** A simpler convolutional encoder used as a building block for Turbo codes.
*   **Recursive Systematic Convolutional (RSC) Code:** A type of convolutional encoder that outputs systematic bits and uses feedback.
*   **Interleaver:** A device that permutes the data sequence to break correlations.
*   **Soft-Decision Decoding:** Decoding based on probabilities or LLRs, not hard bit decisions.
*   **BCJR Algorithm:** A soft-output decoding algorithm for convolutional codes.
*   **Iterative Decoding:** A process where decoders exchange soft information over multiple iterations.
*   **Log-Likelihood Ratio (LLR):** A measure of confidence in a received bit.
*   **Waterfall Region:** The steep part of the BER curve where performance is excellent.
*   **Error Floor:** The residual error rate at very low SNRs.

---

### **8. Practice Questions and Exercises**

**Question 1 (Conceptual):**
What makes Turbo codes achieve performance close to the Shannon limit, and what is the role of the interleaver in this process?

**Answer:** Turbo codes achieve near-Shannon-limit performance through their iterative decoding structure. Two or more simple convolutional codes (often RSC codes) are combined with an interleaver. The interleaver breaks the correlation between the input sequences to the constituent encoders. The iterative decoding process then allows the constituent decoders to exchange soft information (LLRs). Each decoder uses the information from the other to refine its own estimate of the transmitted bits. This "bootstrap" effect, where each decoder gets progressively better information, is key to their performance. The interleaver ensures that errors are spread out, allowing the decoders to exploit the structure of the codes effectively and recover from many errors.

**Question 2 (Architectural):**
Draw a block diagram of a typical Turbo encoder with two constituent encoders. Label the key components and indicate the data flow.

**Answer:**
```
Input Data (u) ----> [Encoder 1] ----> (Systematic Bits (u), Parity Bits (p1))
                         |
                         | (Input u)
                         v
                    [Interleaver (pi)] ----> (Interleaved Input (u'))
                         |
                         | (Input u')
                         v
                    [Encoder 2] ----> (Parity Bits (p2))

Transmitted Codeword: Concatenation of (u, p1, p2)
```
*(Note: A more detailed diagram would show the internal structure of RSC encoders and the output streams for transmission).*

**Question 3 (Decoding):**
Explain the role of soft information in Turbo code decoding. Why is hard-decision decoding unsuitable for Turbo codes?

**Answer:** Soft information, typically in the form of Log-Likelihood Ratios (LLRs), represents the decoder's confidence in a particular bit being 0 or 1. In Turbo decoding, this soft information is passed iteratively between the constituent decoders. Each decoder uses the soft information from the other as "a priori" knowledge to improve its own decoding. This allows the decoders to "help" each other and refine their estimates, leading to significantly better error correction.

Hard-decision decoding makes definitive 0 or 1 decisions early on. If an initial hard decision is wrong, that error is propagated and amplified, and the subsequent decoders have no way to correct it. Soft information, on the other hand, carries probabilistic information that allows the decoders to correct early mistakes through subsequent iterations.

**Question 4 (Performance):**
What are the main factors that influence the performance of a Turbo code?

**Answer:**
The performance of a Turbo code is influenced by several factors:
1.  **Constituent Encoder Design:** Generator polynomials, constraint length (k), and feedback structure of the RSC codes.
2.  **Interleaver Design:** The type and length of the interleaver are crucial for breaking correlations and spreading errors.
3.  **Code Rate:** Higher code rates generally require more powerful constituent codes or more iterations to achieve similar performance.
4.  **Number of Decoding Iterations:** More iterations lead to better performance but increase decoding complexity.
5.  **Decoding Algorithm:** The specific soft-output decoding algorithm used (e.g., BCJR, SOVA).

**Question 5 (Application):**
Name one prominent application where Turbo codes have been widely adopted.

**Answer:** 3G Mobile Communication (UMTS) is a prominent application where Turbo codes have been widely adopted for forward error correction.

---

### **9. Important Points to Remember**

*   Turbo codes are a breakthrough in error correction coding, achieving performance close to the Shannon limit.
*   They are constructed from two or more simple codes (typically RSC) separated by an interleaver.
*   The iterative decoding process, exchanging soft information between decoders, is the core of their power.
*   The interleaver is critical; its design significantly impacts performance.
*   Soft-decision decoding is essential; hard-decision decoding is not suitable for Turbo codes.
*   Turbo codes offer a steep "waterfall" in their BER performance but can suffer from an "error floor."
*   They have been widely adopted in communication standards like 3G UMTS.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### **10. Textbook and Reference Integrations**

*   **Lin & Costello, 2nd Ed.:** Provides detailed explanations of convolutional codes, including RSC codes, and the principles of interleaving. The structure and performance of Turbo codes are discussed in later chapters.
*   **Haykin:** May offer broader context on communication systems and the need for powerful error correction codes like Turbo codes.
*   **Richardson & Urbanke:** This book is a foundational text in modern coding theory and will likely have in-depth coverage of Turbo codes, their decoding algorithms, and analysis.
*   **Gallager:** His work lays the theoretical groundwork for information theory and coding, which underpins the understanding of why codes like Turbo codes perform so well.
*   **Roth:** Introduces coding theory from a mathematical perspective, which can help in understanding the algebraic basis of constituent convolutional codes.
*   **Pfister & Gazi:** These references are specifically about Polar codes, but a review of Turbo codes helps understand the evolution of coding techniques and the quest for capacity-achieving codes, leading to the development of Polar codes.
*   **NPTEL Course:** Provides practical insights and potentially algorithmic details relevant to Turbo codes, especially in the context of 5G.

This review serves as an introduction to Turbo codes, highlighting their structure, decoding mechanism, performance, and significance in modern digital communication systems. A deeper understanding would involve studying the BCJR algorithm in detail and analyzing the impact of different interleaver designs.