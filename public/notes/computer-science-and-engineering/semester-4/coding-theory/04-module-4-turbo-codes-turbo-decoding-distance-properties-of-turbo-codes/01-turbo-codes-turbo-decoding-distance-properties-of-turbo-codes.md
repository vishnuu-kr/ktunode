---
title: "Turbo codes: Turbo decoding, Distance properties of turbo codes"
subject: "CODING THEORY"
module: "Module 4: Turbo codes: Turbo decoding, Distance properties of turbo codes"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b110"
status: "completed"
scrapedAt: "2026-05-20T16:10:32.108Z"
---
## Coding Theory: Module 4 - Turbo Codes: Turbo Decoding, Distance Properties

### Topic: Turbo Codes: Turbo Decoding, Distance Properties

**Description:** This topic covers the fundamental aspects of turbo codes, focusing on the iterative decoding process and the analysis of their distance properties.

**Learning Outcomes:**

*   Understand the iterative turbo decoding algorithm.
*   Describe the BCJR algorithm and its application in turbo decoding.
*   Explain the concept of extrinsic information and its role in turbo decoding.
*   Analyze the distance properties of turbo codes and their impact on performance.
*   Describe the relationship between interleaver design and turbo code performance.
*   Understand the role of puncturing in turbo codes.

---

### 1. Turbo Decoding: Iterative Decoding Algorithm

*   **Key Concept:** Turbo decoding is an iterative process that exploits the inherent redundancy introduced by two (or more) constituent encoders connected by an interleaver. The decoder attempts to successively refine the estimates of the data bits by exchanging information between the component decoders.

*   **Process:**
    *   The received signal is split into components corresponding to the outputs of the two constituent encoders.
    *   Each component decoder performs a soft-in soft-out (SISO) decoding, using the received data and *a priori* information to generate *a posteriori* probabilities (APPs) for the data bits.
    *   The *extrinsic information* (a measure of the confidence in the decoded bit provided by one decoder, independent of the other decoder's information) from one decoder is used as *a priori* information by the other decoder.
    *   This process is repeated (iterated) several times. Each iteration typically improves the decoding performance.
    *   After a pre-defined number of iterations, a hard decision is made on the *a posteriori* probabilities to produce the decoded data bits.

*   **Diagram:**

    ```
    Received Data -> Decoder 1 (SISO) -> Extrinsic Info -> Interleaver -> Decoder 2 (SISO) -> Extrinsic Info -> De-interleaver -> Decoder 1
                   ^                                                                                                         |
                   |___________________________________________________________________________________________________________|
                                                                  Iterations
    ```

*   **Important Points:**
    *   Turbo codes are *parallel concatenated convolutional codes (PCCC)*.
    *   Interleaving is crucial for good performance.
    *   The performance improves with more iterations, but with diminishing returns.
    *   Practical turbo decoders often use a small number of iterations (e.g., 6-10).

### 2. The BCJR Algorithm and Soft-In Soft-Out (SISO) Decoding

*   **Key Concept:** The Bahl-Cocke-Jelinek-Raviv (BCJR) algorithm is a key component of turbo decoders. It is a maximum a posteriori (MAP) decoding algorithm that provides soft outputs, i.e., the probabilities of the data bits being 0 or 1, given the received sequence. These soft outputs are crucial for iterative decoding.

*   **BCJR Algorithm Steps (Simplified):**
    1.  **Forward Recursion (Alpha):**  Calculates the probability of being in a state *s* at time *k*, given the received symbols up to time *k* (P(state_k = s | received_symbols_1:k)).
    2.  **Backward Recursion (Beta):** Calculates the probability of receiving the remaining symbols from time *k+1* to the end, given that the state at time *k* is *s* (P(received_symbols_k+1:N | state_k = s)).
    3.  **Soft Output Calculation (L-value):**  Combines the forward, backward, and branch metrics (transition probabilities) to calculate the Log-Likelihood Ratio (LLR) for each bit.  The LLR represents the log ratio of the probabilities that the bit is 1 versus the probability that the bit is 0, given the received sequence.  LLR(bit_k) = log(P(bit_k=1|received_sequence) / P(bit_k=0|received_sequence)).

*   **Soft-In Soft-Out (SISO) Decoding:**
    *   The BCJR algorithm provides *soft outputs* (LLRs).
    *   SISO decoders take *soft inputs* (LLRs of the received symbols and a priori information).
    *   The extrinsic information is derived from the LLR output of the BCJR algorithm by removing the contribution of the *a priori* information and the contribution of the channel observation.

*   **Example:** Suppose the BCJR algorithm calculates the LLR for a bit *b* as LLR(b) = 2.5. This means P(b=1 | received data) is significantly higher than P(b=0 | received data). If the *a priori* information for this bit was also positive (LLR > 0), the decoder has more confidence in the bit being 1.

### 3. Extrinsic Information

*   **Key Concept:** Extrinsic information is the crucial ingredient that enables iterative decoding to work effectively. It represents the new information about a bit that a decoder has obtained from the received data and the code structure, *excluding* any information that was already known *a priori*.

*   **Calculation:** Extrinsic information is extracted from the *a posteriori* LLR by subtracting the *a priori* LLR and the channel observation term.

    *   `Extrinsic LLR = A Posteriori LLR - A Priori LLR - Channel Observation`

*   **Role:**
    *   The extrinsic information from one decoder is passed to the other decoder as *a priori* information.
    *   By iteratively exchanging extrinsic information, each decoder can refine its estimate of the data bits and converge to a better solution.
    *   Without extrinsic information, the decoders would simply reinforce their initial beliefs, leading to little or no improvement in performance.

*   **Why Extrinsic Information Matters:** Prevents the decoders from becoming stuck in local optima during the iterative decoding process. It allows each decoder to contribute new information to the other, ultimately leading to a more accurate estimate of the transmitted data.

### 4. Distance Properties of Turbo Codes

*   **Key Concept:** The *minimum distance* (d<sub>min</sub>) of a code is the smallest Hamming distance between any two distinct codewords. A larger minimum distance generally implies better error-correcting capability. However, turbo codes have a more complex distance spectrum.

*   **Distance Spectrum:** The distance spectrum describes the number of codewords at each Hamming distance from the all-zero codeword. For turbo codes, the *low-weight codewords* (codewords with small Hamming weight) are particularly important.

*   **Interleaver and Low-Weight Codewords:** The interleaver plays a critical role in shaping the distance spectrum of turbo codes.
    *   A poorly designed interleaver can lead to the existence of many low-weight codewords, which can degrade the code's performance, especially at high signal-to-noise ratios (SNRs).
    *   A good interleaver spreads out the low-weight codewords, increasing the effective minimum distance and improving the overall performance.
    *   *S-random interleavers* and other structured interleaver designs are commonly used to improve the distance properties of turbo codes.

*   **Asymptotic Performance:** The distance properties, particularly the minimum distance and the number of low-weight codewords, influence the *error floor* of turbo codes. The error floor is the region of the bit error rate (BER) curve where the performance improvement with increasing SNR diminishes significantly. A large number of low-weight codewords leads to a higher error floor.

*   **Important Points:**
    *   Turbo codes typically don't have a well-defined minimum distance in the traditional sense. Instead, the distribution of low-weight codewords is more important.
    *   The interleaver is crucial for achieving good distance properties.

### 5. Interleaver Design

*   **Key Concept:** The interleaver is a crucial component of a turbo code. Its primary function is to scramble the order of the information bits before they are encoded by the second constituent encoder. This scrambling helps to break up the burst errors that can occur in the channel and improve the overall performance of the code.

*   **Design Considerations:**
    *   **Spread Low-Weight Codewords:** The interleaver should be designed to maximize the minimum distance and minimize the number of low-weight codewords.
    *   **Avoid Short Cycles:** The interleaver should avoid short cycles (i.e., short sequences of bits that map back to themselves after interleaving and de-interleaving). Short cycles can lead to the creation of low-weight codewords.
    *   **Ensure Sufficient Interleaving Gain:** The interleaver should be large enough to provide sufficient interleaving gain. The interleaving gain is the improvement in performance that results from interleaving the data.

*   **Common Interleaver Designs:**
    *   **Random Interleavers:**  Simple to implement, but may result in poor distance properties.
    *   **S-Random Interleavers:** Constraints on the minimum separation *S* between adjacent elements in the interleaved sequence. Better distance properties than random interleavers.
    *   **Helical Interleavers:** Used in 3G mobile communication systems.
    *   **Quadratic Permutation Polynomial (QPP) Interleavers:**  Algebraic construction; can be optimized for specific block lengths. Commonly used in LTE.

*   **Important Points:**
    *   The choice of interleaver significantly impacts the performance of the turbo code.
    *   A well-designed interleaver can significantly lower the error floor.
    *   Interleaver design is an active area of research.

### 6. Puncturing in Turbo Codes

*   **Key Concept:** Puncturing is the process of selectively deleting some of the coded bits before transmission. This allows the code rate to be increased without changing the encoder structure.

*   **Motivation:**
    *   To achieve different code rates with the same encoder.  For example, a turbo code with a natural rate of 1/3 can be punctured to achieve rates of 1/2, 2/3, or even higher.
    *   To match the code rate to the channel conditions.  Higher code rates are suitable for channels with high signal-to-noise ratios (SNRs), while lower code rates are better for channels with low SNRs.

*   **Implementation:**
    *   A puncturing pattern is used to specify which bits are to be deleted. The puncturing pattern is usually periodic.
    *   Puncturing can be applied to the parity bits of the constituent encoders. It's important to retain the systematic bits (the original information bits) for good performance.

*   **Impact on Performance:**
    *   Puncturing reduces the redundancy of the code, which can degrade the error-correcting capability.
    *   The choice of puncturing pattern significantly affects the performance of the code.
    *   Careful puncturing designs are needed to minimize the performance degradation.

*   **Example:**  Consider a turbo code with rate 1/3.  This means for every 1 information bit, 2 parity bits are generated by the two constituent encoders. To obtain a rate 1/2 code, we need to transmit 1 information bit for every 1 parity bit. Puncturing can achieve this by deleting one of the parity bits every time.

---

### Practice Questions/Exercises

**1. Explain the role of extrinsic information in turbo decoding.**

**Answer:** Extrinsic information represents the new information about a bit that a decoder has obtained, excluding any information that was already known *a priori*. It is crucial because it allows decoders to iteratively refine their estimates by exchanging *new* information, preventing them from simply reinforcing their initial beliefs.

**2. Describe the steps involved in the BCJR algorithm.**

**Answer:** The BCJR algorithm involves three main steps: (1) **Forward Recursion (Alpha):** Calculates probabilities of being in each state given received symbols up to that point. (2) **Backward Recursion (Beta):** Calculates probabilities of receiving remaining symbols given the current state. (3) **Soft Output Calculation (L-value):**  Combines forward, backward, and branch metrics to calculate the LLR for each bit, which represents the decoder's confidence in that bit.

**3. How does the interleaver affect the distance properties of a turbo code?**

**Answer:** The interleaver spreads out low-weight codewords, increasing the effective minimum distance and improving overall performance. A poorly designed interleaver can lead to many low-weight codewords, degrading performance, especially at high SNRs.

**4. What is puncturing, and why is it used in turbo codes?**

**Answer:** Puncturing is selectively deleting coded bits before transmission to increase the code rate. It is used to achieve different code rates with the same encoder, allowing adaptation to channel conditions.

**5. What is a SISO decoder? Explain its significance in Turbo Decoding.**

**Answer:** SISO stands for Soft-In Soft-Out. A SISO decoder, like the BCJR algorithm, takes soft inputs (LLRs) and produces soft outputs (LLRs). The soft outputs are essential in Turbo decoding because they carry the confidence (probability) information about each bit. This information is passed between the decoders in the iterative process, allowing them to refine their estimates and converge to a more accurate solution.  Without soft information, iterative decoding would not be as effective.

---

### Important Points to Remember

*   Turbo codes are powerful error-correcting codes based on parallel concatenation of convolutional codes.
*   Iterative decoding is key to their performance.
*   The BCJR algorithm is a widely used SISO decoding algorithm.
*   Extrinsic information is crucial for effective iterative decoding.
*   Interleaver design significantly impacts performance.
*   Puncturing is used to adjust the code rate.
*   The distance properties, particularly the low-weight codewords, influence the error floor.
