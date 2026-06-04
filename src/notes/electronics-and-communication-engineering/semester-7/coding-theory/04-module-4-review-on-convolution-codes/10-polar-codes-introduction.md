---
title: "Polar Codes – Introduction"
subject: "CODING THEORY"
module: "Module 4: Review on Convolution Codes"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff239"
status: "completed"
scrapedAt: "2026-05-23T18:05:28.677Z"
---
# CODING THEORY - Module 4: Review on Convolution Codes
## Topic: Polar Codes – Introduction

This module provides an introduction to Polar Codes, a modern class of error-correcting codes that have gained significant attention for their ability to achieve the theoretical channel capacity.

---

### Learning Outcomes

By the end of this topic, you will be able to:

*   Understand the motivation and historical context behind Polar Codes.
*   Explain the concept of channel polarization.
*   Describe the construction of Polar Codes.
*   Discuss the properties of Polar Codes, including their capacity-achieving nature.
*   Relate Polar Codes to other modern error-correcting codes like Turbo Codes and LDPC Codes (aligning with CO6).

---

### 1. Motivation and Historical Context

*   **The Quest for Capacity:** A fundamental goal in coding theory is to design codes that can reliably transmit information over a noisy channel at rates arbitrarily close to the channel's capacity.
*   **Early Achievements:**
    *   **Shannon's Channel Coding Theorem (1948):** Proved the existence of codes that can achieve the channel capacity, but did not provide a constructive method. (Referenced in *Communication Systems* by Simon Haykin and *Principles of digital communication* by RG Gallager).
    *   **Reed-Solomon Codes:** Powerful block codes that are capacity-achieving for binary erasure channels.
    *   **Turbo Codes (1993):** Achieved near-capacity performance on the binary-input additive white Gaussian noise (BIAWGn) channel, revolutionizing the field. (Referenced in *Error Control Coding* by Lin & Costello and *LDPC and Polar Codes in 5G Standard* by A. Thangaraj).
    *   **LDPC Codes (1962, rediscovered 1998):** Also demonstrated near-capacity performance, particularly for large block lengths. (Referenced in *Error Control Coding* by Lin & Costello and *LDPC and Polar Codes in 5G Standard* by A. Thangaraj).
*   **The Gap:** Despite the success of Turbo and LDPC codes, a gap remained in finding codes that were both capacity-achieving and had a simple, mathematically proven construction process for *all* binary-input discrete memoryless channels (BMCs).
*   **Polar Codes (2008):** Introduced by Erdal Arıkan, Polar Codes were the first constructive method proven to achieve the capacity of *any* binary-input discrete memoryless channel. This was a major theoretical breakthrough. (Referenced in *A Brief Introduction to Polar Codes* by H. Pfister and *Polar Codes: A Non-Trivial Approach to Channel Coding* by O. Gazi).

---

### 2. Channel Polarization: The Core Idea

Channel polarization is the fundamental phenomenon that enables Polar Codes to achieve capacity. It refers to the process of transforming a set of $N$ independent and identically distributed (i.i.d.) binary-input channels into a smaller number of "polar" channels that are either nearly noiseless or nearly completely noisy.

*   **The Concept:** Imagine taking $N$ copies of a noisy channel and combining them in a specific way. As $N$ increases, the resulting $N$ synthesized channels tend to polarize:
    *   A fraction of these synthesized channels become **good channels** (close to error-free).
    *   The remaining fraction become **bad channels** (close to useless).
*   **Channel Symmetricity:** Polar codes work best on symmetric channels, where the probability of outputting '0' given input '1' is the same as the probability of outputting '1' given input '0'. The binary erasure channel (BEC) and binary-symmetric channel (BSC) are examples of symmetric channels.
*   **The Polarization Kernel:** The process of transforming $N$ channels into $2N$ synthesized channels is based on a recursive structure. This structure is represented by a "polarization kernel," which can be visualized as a binary tree.

---

### 3. Construction of Polar Codes

Polar codes are constructed by exploiting the channel polarization phenomenon. The process involves:

1.  **Channel Combining (Kernel Operation):**
    *   Start with $N$ independent and identical copies of a base channel $W$.
    *   Apply a specific operation, called the **Bernoulli kernel** or **kernel transformation**, to these $N$ channels to synthesize $N$ new channels. This operation is performed using a $(2N, N)$ Reed-Muller code construction (related to a Hadamard matrix).
    *   The kernel transformation for $N=2$ involves two pairs of channels:
        *   **Pair 1 (Erasure channel):** $W_1 = W \oplus W$ (e.g., for binary erasure channel, if one input is erased, the XOR sum is erased; if one input is known, the output is the other input).
        *   **Pair 2 (Direct channel):** $W_2 = W$ (where inputs are passed through without modification, but still with the noise of the base channel).
    *   This process is repeated recursively. For a block length of $2^n$, we start with $2^n$ channels and apply the kernel $n$ times. This results in $2^n$ synthesized channels, each with different reliability.

2.  **Channel Selection:**
    *   After $n$ kernel operations, we obtain $N = 2^n$ synthesized channels.
    *   These synthesized channels are ordered based on their **error-free probability** (or "gain").
    *   The channels with the highest error-free probabilities are designated as **good channels**.
    *   The channels with the lowest error-free probabilities are designated as **bad channels**.

3.  **Encoding:**
    *   To form a Polar Code of block length $N$, we select the $K$ best synthesized channels (where $K$ is the desired message length).
    *   The $K$ information bits are transmitted over these $K$ good channels.
    *   The remaining $N-K$ bits are set to a fixed value, usually '0' (these are often called **frozen bits**), and transmitted over the bad channels. These frozen bits are known to both the encoder and decoder and help in the decoding process.

4.  **Decoding:**
    *   The decoder receives the $N$ received bits.
    *   It then uses an algorithm, typically **Successive Cancellation (SC)** or its improved version **SC-List (SCL)**, to decode the message.
    *   SC decoding processes the bits sequentially, making a decision for each bit based on the information decoded so far and the nature of the synthesized channel it's associated with.

*   **Rate:** The code rate of a Polar Code is $R = K/N$.

*   **Example (N=2):**
    *   Let $W$ be a BIAWGn channel.
    *   We create two synthesized channels:
        *   $U_1 \rightarrow X_1, X_2$ transmitted over $W$.
        *   $U_2 \rightarrow X_1 \oplus X_2$ transmitted over $W$.
    *   The resulting channels are $W_1$ and $W_2$.
    *   Through channel polarization, one of these channels will become significantly better than the other.
    *   If we want to send 1 bit (K=1) with N=2:
        *   We identify which of $W_1$ or $W_2$ is the "better" channel.
        *   We transmit the information bit over this better channel.
        *   We transmit a '0' (frozen bit) over the "worse" channel.

---

### 4. Properties of Polar Codes

*   **Capacity Achieving:** This is the most significant property. For any binary-input discrete memoryless channel, Polar Codes can achieve the channel capacity as the block length $N$ tends to infinity. This was proven by Arıkan. (Referenced in *Polar Codes: A Non-Trivial Approach to Channel Coding* by O. Gazi and *A Brief Introduction to Polar Codes* by H. Pfister).
*   **Constructive:** Unlike Shannon's theorem, Polar Codes provide an explicit construction method.
*   **Finite Block Length Performance:** While theoretically capacity-achieving, their performance at finite block lengths is still being studied and optimized. They offer good performance compared to other codes at similar rates and block lengths.
*   **Complexity:**
    *   **Encoding:** Relatively simple, especially compared to Turbo Codes. It involves matrix multiplications.
    *   **Decoding:** The standard Successive Cancellation (SC) decoder has a complexity of $O(N \log N)$. Improved decoders like SC-List are more computationally intensive but offer better error correction performance.
*   **Relationship to Other Codes:**
    *   **Turbo Codes:** Both are iterative codes that achieve near-capacity. However, Turbo Codes rely on the concatenation of simple codes and are best suited for specific channels like BIAWGn. Polar codes are more general and construction is based on channel polarization. (Referenced in *LDPC and Polar Codes in 5G Standard* by A. Thangaraj).
    *   **LDPC Codes:** Both are powerful codes. LDPC codes are typically decoded using belief propagation algorithms, which are very effective but can be complex. Polar codes offer a different construction paradigm.

---

### 5. Key Concepts and Definitions

*   **Channel Capacity (C):** The maximum rate at which information can be transmitted over a noisy channel with an arbitrarily small probability of error. (Referenced in *Communication Systems* by Simon Haykin).
*   **Binary-Input Discrete Memoryless Channel (BICMC):** A communication channel where the input alphabet is binary {0, 1}, and the output depends only on the current input and the channel's inherent noise, not on past inputs or outputs.
*   **Symmetric Channel:** A channel where the conditional probabilities $P(y|x)$ satisfy $P(y=0|x=1) = P(y=1|x=0)$. The BSC is a prime example.
*   **Channel Polarization:** The phenomenon where $N$ i.i.d. channels, when subjected to a recursive combining process, converge to $N$ synthesized channels that are either near-perfect (good) or near-useless (bad).
*   **Bernoulli Kernel (Kernel Transformation):** The specific operation used to combine channels recursively. For $N=2$, it involves $(X_1, X_2) \rightarrow (X_1 \oplus X_2, X_1)$.
*   **Frozen Bits:** Predefined bits (usually '0') transmitted over the synthesized channels that are identified as "bad" (least reliable). They aid the decoder.
*   **Good Channels:** Synthesized channels that become highly reliable (close to error-free) after polarization.
*   **Bad Channels:** Synthesized Channels that remain highly unreliable (close to completely noisy) after polarization.
*   **Successive Cancellation (SC) Decoding:** A sequential decoding algorithm for Polar Codes where decisions are made one bit at a time, taking into account previously decoded bits.
*   **SC-List (SCL) Decoding:** An enhanced SC decoding algorithm that maintains a list of potential decoded sequences, improving error performance at the cost of increased complexity.

---

### 6. Aligning with Course Outcomes

*   **CO1: Explain various algebraic structures used in coding theory (Knowledge Level: K2)**
    *   While not explicitly focusing on complex algebraic structures like finite fields in this introductory topic, the underlying construction of Polar Codes involves operations that can be related to linear algebra and finite field properties when implemented efficiently (e.g., using Fast Walsh-Hadamard Transforms for kernel operations). The recursive combining step has a structural elegance.
*   **CO2: Explain the error detection and correction capabilities of linear codes (Knowledge Level: K2)**
    *   Polar Codes are linear codes. Their error correction capability stems from the ability to identify and utilize reliable "good" channels while using "frozen bits" on unreliable "bad" channels. This intelligent selection of channels directly impacts their error correction performance.
*   **CO3: Apply linear block codes to detect and correct errors. (Knowledge Level: K3)**
    *   This topic provides the foundation for understanding how Polar Codes (a type of linear block code) are constructed and how their structure enables error correction. Understanding the channel polarization principle is key to appreciating *why* they correct errors effectively.
*   **CO4: Use algebraic techniques to construct efficient codes with reduced structural complexity (Knowledge Level: K3)**
    *   The construction of Polar Codes, especially with efficient implementations of the kernel operations, can be considered an application of systematic construction techniques. While the "algebraic" part is more implicit in the kernel operations rather than explicit field arithmetic for basic understanding, the recursive structure is a form of engineered complexity reduction for achieving capacity.
*   **CO5: Apply convolutional code for error detection correction (Knowledge Level: K3)**
    *   This is a review module, and while we are introducing Polar Codes, the module context is "Review on Convolution Codes." The contrast between the sequential nature of convolutional codes and the block-based, channel-polarizing nature of Polar Codes can be made. However, direct application of *convolutional* codes is not the focus here.
*   **CO6: Illustrate modern error correcting codes like Turbo codes, LDPC code and polar codes (Knowledge Level: K2)**
    *   This topic directly addresses Polar Codes, explaining their fundamental concept, construction, and significance as a modern error-correcting code that achieves channel capacity. The historical context implicitly compares them with Turbo and LDPC codes.

---

### 7. Important Points to Remember

*   **Polar Codes achieve channel capacity.** This is their most critical theoretical achievement.
*   The core principle is **channel polarization**, transforming many unreliable channels into a few very reliable and many very unreliable ones.
*   The construction involves a recursive application of the **Bernoulli kernel**.
*   The code rate is determined by the number of **information bits** ($K$) versus the total **block length** ($N$).
*   **Frozen bits** are crucial for successful decoding.
*   **Successive Cancellation (SC)** is the primary decoding algorithm.

---

### 8. Practice Questions and Exercises

**Question 1:**
What is the primary theoretical advantage of Polar Codes over previously existing codes?
*   (a) Simpler encoding
*   (b) Lower decoding complexity
*   (c) Capacity-achieving property
*   (d) Better performance on random channels

**Answer:** (c) Capacity-achieving property

**Question 2:**
Explain the concept of "channel polarization" in your own words. What happens to a set of i.i.d. channels after repeated kernel operations?

**Answer:** Channel polarization is the process by which $N$ identical noisy channels, when combined in a specific recursive manner, split into two groups: a set of very reliable ("good") channels and a set of very unreliable ("bad") channels. As $N$ increases, the good channels become almost error-free, and the bad channels become almost completely noisy.

**Question 3:**
What is the role of "frozen bits" in Polar Codes?

**Answer:** Frozen bits are pre-determined bits (usually set to '0') that are transmitted over the synthesized channels identified as "bad" or least reliable. They are known to both the encoder and decoder and help the decoder make better decisions by providing known symbols on unreliable channels.

**Question 4:**
Consider a simple Polar Code construction with $N=2$. If you want to transmit $K=1$ bit, how would you choose to transmit the information bit and the frozen bit? Assume one of the synthesized channels is significantly better than the other.

**Answer:** The information bit should be transmitted over the significantly "better" (more reliable) synthesized channel, and the frozen bit ('0') should be transmitted over the "worse" (less reliable) synthesized channel.

**Question 5:**
Which of the following is a key component in the recursive construction of Polar Codes?
*   (a) Hamming kernel
*   (b) Bernoulli kernel
*   (c) Reed-Solomon kernel
*   (d) Convolutional kernel

**Answer:** (b) Bernoulli kernel

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 9. References

*   **Primary Textbooks:**
    *   *Error Control Coding : Fundamentals and Applications* by Shu Lin & Daniel J. Costello. Jr. (Prentice Hall Inc, 2nd Edition) - Provides foundational knowledge of coding theory and context for modern codes.
    *   *Communication Systems* by Simon Haykin (John Wiley and Sons Inc, 4e) - Covers Shannon's theory and channel capacity concepts.
    *   *Modern Coding Theory* by T. Richardson, R. Urbanke (Cambridge University Press) - Offers advanced perspectives relevant to the theoretical underpinnings of modern codes.

*   **Reference Books:**
    *   *A Brief Introduction to Polar Codes* by H. Pfister (Lec. Notes) - A good starting point for understanding Polar Codes.
    *   *Polar Codes: A Non-Trivial Approach to Channel Coding* by O. Gazi (Springer, 2018) - A more in-depth treatment of Polar Codes.
    *   *LDPC and Polar Codes in 5G Standard* by A. Thangaraj (, ) - Provides practical context and comparison with other advanced codes used in modern communication standards.

---
**(End of Notes)**