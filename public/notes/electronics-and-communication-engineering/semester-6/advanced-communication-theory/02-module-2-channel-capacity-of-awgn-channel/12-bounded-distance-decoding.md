---
title: "Bounded distance decoding."
subject: "ADVANCED COMMUNICATION THEORY"
module: "Module 2: Channel Capacity of AWGN Channel"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fed0c"
status: "completed"
scrapedAt: "2026-05-23T17:58:42.256Z"
---
# Advanced Communication Theory - Module 2: Channel Capacity of AWGN Channel

## Topic: Bounded Distance Decoding

### Introduction

Bounded distance decoding is a class of decoding algorithms used in error-correcting codes. It aims to find a valid codeword that is "close" to the received noisy word. This closeness is typically measured by a distance metric, most commonly the Hamming distance for block codes and the Euclidean distance for continuous-amplitude channels like the Additive White Gaussian Noise (AWGN) channel. This topic focuses on understanding the principles and application of bounded distance decoding in the context of the AWGN channel, which is a fundamental model for many wireless communication systems.

### Learning Outcomes Addressed

*   **CO3: Apply channel coding for error detection and correction (Knowledge Level: K3)**
    *   Bounded distance decoding is a core technique for achieving error correction.
*   **CO4: Explain the basic Principle of wireless communication techniques (Knowledge Level: K2)**
    *   Understanding decoding is crucial for understanding how receivers combat noise in wireless systems.
*   **CO5: Describe the wireless channel models and analyse the performance of the modulation techniques for flat fading channels (Knowledge Level: K2)**
    *   While this topic focuses on AWGN, the principles of decoding extend to more complex channel models. The AWGN channel serves as a baseline.
*   **CO6: Identify the advantages of various diversity and equalization techniques for improving the wireless receiver performance (Knowledge Level: K3)**
    *   Decoding techniques work in conjunction with other receiver-side techniques to improve performance.

### Key Concepts and Definitions

*   **Codeword:** A valid sequence of symbols transmitted after encoding.
*   **Received Word:** The sequence of symbols received after passing through the channel, potentially corrupted by noise.
*   **Hamming Distance:** For binary codes, the number of positions at which two codewords of the same length differ. A smaller Hamming distance implies greater similarity.
*   **Euclidean Distance:** For continuous-amplitude signals (like those in AWGN channels), the square root of the sum of the squared differences between corresponding signal components.
*   **Minimum Distance ($d_{min}$):** The smallest Hamming distance between any two distinct codewords in a code. This is a crucial parameter determining the error-correcting capability of a code.
*   **Error Correction Capability ($t$):** A code can correct up to $t$ errors if its minimum distance is $d_{min} \ge 2t + 1$. This means that any received word within a Hamming distance of $t$ from a valid codeword is guaranteed to be closer to that codeword than to any other valid codeword.
*   **Decoding:** The process of recovering the original transmitted codeword from the received noisy word.
*   **Bounded Distance Decoding:** A decoding strategy that attempts to find a valid codeword within a specified distance $t$ from the received word. If no such codeword exists, or if multiple codewords are within that distance, the decoder may fail or make an incorrect decision.
*   **Sphere Decoding:** A specific type of bounded distance decoding that operates in continuous-amplitude channels like AWGN. It searches for the codeword within a hypersphere of a certain radius (related to the distance bound) around the received vector.

### Bounded Distance Decoding for Block Codes (Conceptual Overview)

While the module focuses on AWGN channels, it's important to understand the foundational concepts of bounded distance decoding for block codes, as the principles extend.

1.  **Encoder:** A message $m$ is encoded into a codeword $c$ of length $n$.
2.  **Channel:** The codeword $c$ is transmitted over the channel, becoming a received word $r$. In a binary symmetric channel (BSC), errors are flipped bits.
3.  **Decoder:** The decoder receives $r$ and tries to find the transmitted codeword $c$.
4.  **Decision Rule:** A common bounded distance decoding strategy is **Minimum Distance Decoding**.
    *   The decoder has a list of all valid codewords.
    *   For each received word $r$, it calculates the distance between $r$ and every valid codeword $c_i$.
    *   It chooses the codeword $c_j$ that has the minimum distance to $r$.
    *   If $d(r, c_j) \le t$, where $t$ is the error correction capability, it declares $c_j$ as the transmitted codeword.
    *   If no codeword is within distance $t$, or if multiple codewords are equally close and within distance $t$, the decoder declares an **undetected error** or a **hard-decision failure**.

**Example (Binary Block Code):**

Consider a simple repetition code: `0` -> `000`, `1` -> `111`.
The codewords are $C = \{000, 111\}$. The minimum distance $d_{min} = 3$. This code can correct $t = \lfloor(3-1)/2\rfloor = 1$ error.

*   **Message:** `0`
*   **Codeword:** `000`
*   **Received Word (with 1 error):** `010`

**Bounded Distance Decoding (Minimum Distance):**
*   Calculate distance between `010` and `000`: $d(\text{010, 000}) = 1$ (Hamming distance).
*   Calculate distance between `010` and `111`: $d(\text{010, 111}) = 2$ (Hamming distance).

Since $1 \le t=1$, the decoder correctly identifies `000` as the transmitted codeword.

### Bounded Distance Decoding for AWGN Channels

In AWGN channels, we deal with continuous-amplitude signals, and the noise is Gaussian. The decision metric is typically the **Euclidean distance** or, more commonly, the **squared Euclidean distance**.

Let:
*   $s(t)$ be the transmitted signal waveform.
*   $n(t)$ be the additive Gaussian noise.
*   $y(t) = s(t) + n(t)$ be the received signal waveform.

For block codes, the signal is often represented as a vector. Let $\mathbf{s}$ be the transmitted signal vector corresponding to a codeword, and $\mathbf{y}$ be the received signal vector. The noise vector $\mathbf{n}$ has components that are independent and identically distributed (i.i.d.) Gaussian random variables with zero mean and variance $\sigma^2$.

The decoder at the receiver aims to find the codeword $\mathbf{s}_j$ that is "closest" to the received vector $\mathbf{y}$.

**Maximum Likelihood (ML) Decoding:**
The ML decoder chooses the codeword $\mathbf{s}_j$ that maximizes the probability $P(\mathbf{y} | \mathbf{s}_j)$. For an AWGN channel, this is equivalent to minimizing the squared Euclidean distance between the received vector and the transmitted codeword vectors:

$$ \hat{\mathbf{s}} = \arg \min_{\mathbf{s}_j \in C} ||\mathbf{y} - \mathbf{s}_j||^2 $$

where $C$ is the set of all valid codewords, and $||\cdot||^2$ denotes the squared Euclidean distance.

**Bounded Distance Decoding in AWGN:**

Bounded distance decoding in AWGN is essentially performing ML decoding but with an additional constraint: the decoder only considers codewords within a certain distance threshold from the received vector. This threshold is related to the error correction capability of the code.

Let the code be designed to correct up to $t$ errors. The minimum Euclidean distance between codewords is important here. However, it's more common to relate the decoding radius to the signal-to-noise ratio (SNR) and the code's error-correcting capability.

The decoder seeks to find a codeword $\mathbf{s}_j$ such that:

$$ ||\mathbf{y} - \mathbf{s}_j||^2 \le D $$

where $D$ is a distance threshold. If a valid codeword $\mathbf{s}_j$ is found that satisfies this condition, it is declared as the transmitted codeword. If no such codeword exists, or if multiple codewords satisfy the condition, the decoder may declare an error.

**Relationship to Sphere Decoding:**

Sphere decoding is a practical algorithm for implementing bounded distance decoding for continuous-amplitude channels. It involves searching for the codeword closest to the received vector within a hypersphere of a specific radius centered at the received vector.

*   **Decoding Sphere Radius:** The radius of the sphere is often determined by the number of errors the code can correct, $t$. For a code with minimum distance $d_{min}$, a decoding radius related to $t$ can be set.

**Practical Considerations:**

*   **Computational Complexity:** For large block lengths and complex codes, enumerating all possible codewords to find the closest one can be computationally prohibitive. This is where algorithms like Sphere Decoding come into play.
*   **Code Design:** The effectiveness of bounded distance decoding heavily relies on the code's structure and its minimum distance. Codes like Reed-Solomon codes and Hamming codes are known for their good distance properties, making them amenable to bounded distance decoding.
*   **Hard vs. Soft Decision Decoding:**
    *   **Hard Decision:** The decoder receives quantized bits (0 or 1) and makes decisions based on these quantized values (e.g., Hamming distance).
    *   **Soft Decision:** The decoder receives analog values (e.g., received signal amplitudes) and uses this richer information to make a more informed decision, typically by minimizing Euclidean distance. Soft decision decoding is generally more robust and achieves better performance in AWGN. Bounded distance decoding can be performed with both hard and soft decisions.

### Sphere Decoding in Detail (for AWGN)

Sphere decoding is a method to find the closest codeword to a received vector in a lattice or code. It's particularly relevant for codes used in AWGN channels. The core idea is to reduce the search space by considering only the codewords that lie within a sphere of a certain radius around the received vector.

Let $\mathbf{y}$ be the received vector. We are looking for $\mathbf{s}_j \in C$ that minimizes $||\mathbf{y} - \mathbf{s}_j||^2$.

**Steps:**

1.  **Define the Decoding Sphere:** Choose a radius $R$. A common choice is related to the maximum number of errors $t$ the code can correct. For example, $R^2 = d_{max}^2$, where $d_{max}$ is the maximum squared Euclidean distance from a received vector to any valid codeword. However, for bounded distance decoding, a radius based on $t$ is more appropriate.
2.  **Generate Candidate Codewords:** Use a search algorithm to find all codewords $\mathbf{s}_j$ such that $||\mathbf{y} - \mathbf{s}_j||^2 \le R^2$.
3.  **Select the Closest:** Among the found candidate codewords, choose the one that minimizes $||\mathbf{y} - \mathbf{s}_j||^2$.

**Algorithms for Sphere Decoding:**
Various algorithms exist to efficiently find codewords within a sphere, such as:

*   **K-Best Sphere Decoding:** Iteratively searches for the $K$ closest codewords.
*   **Gao-Hamming Sphere Decoding:** A more efficient algorithm that leverages the algebraic structure of codes.

**Example (Conceptual Sphere Decoding):**
Imagine you have a set of possible codewords that are points in a 2D space. You receive a noisy point $\mathbf{y}$. You draw a circle (sphere in higher dimensions) of a certain radius around $\mathbf{y}$. Sphere decoding looks for all codeword points that fall inside this circle. Among those, it picks the one that is closest to $\mathbf{y}$.

### Error Probability and Performance

The probability of error for bounded distance decoding depends on:

*   **The code structure:** Specifically, its minimum distance $d_{min}$.
*   **The number of errors to be corrected ($t$):** The decoding radius is set based on $t$.
*   **The SNR (or Eb/No):** Higher SNR means less noise and thus a lower probability of exceeding the decoding radius.

For a code with minimum distance $d_{min}$, it can correct up to $t = \lfloor (d_{min}-1)/2 \rfloor$ errors. Bounded distance decoding aims to correct these errors. The probability of a decoding error (either an uncorrected error or a miscorrection) increases as the received vector gets closer to the decision boundary between two codewords.

**Key Point:** Bounded distance decoding offers a guaranteed performance up to $t$ errors. However, it can fail if more than $t$ errors occur, or if the noise pattern causes the received word to be closer to a different codeword.

### Connection to Channel Capacity

While this topic focuses on decoding, it's essential to remember that channel capacity represents the theoretical upper limit on the reliable communication rate over a channel. Error-correcting codes and their decoders are the practical means to approach this capacity.

*   **Shannon's Channel Coding Theorem:** States that for any channel with capacity $C$, there exist codes that can achieve arbitrarily low error probability at rates $R < C$.
*   **Bounded distance decoding** is a method that helps achieve these low error probabilities for specific codes up to their designed error correction capability.

**Example (Goldsmith, Wireless Communications, Chapter 6):** Goldsmith discusses error probability bounds for various codes in AWGN channels. The performance of codes that are suitable for bounded distance decoding (like linear block codes) can be analyzed using concepts like the **error event probability** and the **tail bound** on the complementary cumulative distribution function (CCDF) of the distance metric.

### Important Points to Remember

*   **Bounded distance decoding** aims to find a valid codeword within a predefined distance ($t$) from the received word.
*   The distance metric used is typically **Hamming distance** for discrete channels and **Euclidean distance** for continuous-amplitude channels like AWGN.
*   The effectiveness of bounded distance decoding is directly related to the **minimum distance ($d_{min}$)** of the error-correcting code. A code with $d_{min}$ can correct up to $t = \lfloor(d_{min}-1)/2\rfloor$ errors.
*   **Sphere decoding** is a practical algorithmic approach for implementing bounded distance decoding in AWGN channels, by searching within a hypersphere of a given radius.
*   While powerful, bounded distance decoding can fail if the number of errors exceeds the code's capability or if the noise pattern leads to ambiguity.
*   The performance of bounded distance decoding is measured by its **error probability**, which is a function of the code, the SNR, and the decoding radius.
*   This decoding strategy is fundamental for approaching the **channel capacity** for specific codes.

### Practice Questions and Exercises

**Question 1:**
What is the primary goal of bounded distance decoding?
a) To maximize the transmitted data rate.
b) To find a valid codeword within a specified distance from the received word.
c) To spread the transmitted signal over a wider bandwidth.
d) To filter out channel noise.

**Question 2:**
For a binary block code with minimum distance $d_{min} = 7$, what is the maximum number of errors $t$ that can be corrected using bounded distance decoding?
a) 2
b) 3
c) 4
d) 7

**Question 3:**
In the context of AWGN channels, which distance metric is typically used for bounded distance decoding?
a) Manhattan distance
b) Chebyshev distance
c) Euclidean distance
d) Hamming distance (unless quantization occurs)

**Question 4:**
True or False: Bounded distance decoding can guarantee error-free communication for any number of errors occurring on the channel.

**Question 5 (Conceptual):**
Explain why minimizing the Euclidean distance between the received vector and potential codewords is equivalent to Maximum Likelihood (ML) decoding for an AWGN channel. (Hint: Consider the probability density function of the received signal.)

**Answers:**

**Answer 1:**
b) To find a valid codeword within a specified distance from the received word.

**Answer 2:**
b) 3. The formula is $t = \lfloor (d_{min}-1)/2 \rfloor = \lfloor (7-1)/2 \rfloor = \lfloor 6/2 \rfloor = 3$.

**Answer 3:**
c) Euclidean distance. While Hamming distance is used for binary sequences after hard decisions, for continuous-amplitude signals in AWGN, the underlying metric for optimal decoding is Euclidean distance.

**Answer 4:**
False. Bounded distance decoding can only guarantee error correction up to a certain limit defined by the code's minimum distance and the decoding radius $t$. If more errors occur, the decoder may fail.

**Answer 5:**
In an AWGN channel, the received signal $\mathbf{y}$ is given by $\mathbf{y} = \mathbf{s} + \mathbf{n}$, where $\mathbf{s}$ is the transmitted codeword vector and $\mathbf{n}$ is the noise vector. The components of $\mathbf{n}$ are i.i.d. Gaussian random variables with zero mean and variance $\sigma^2$. The probability density function (PDF) of the received vector $\mathbf{y}$ given the transmitted codeword $\mathbf{s}_j$ is:
$P(\mathbf{y} | \mathbf{s}_j) = \frac{1}{(2\pi\sigma^2)^{N/2}} \exp\left(-\frac{||\mathbf{y} - \mathbf{s}_j||^2}{2\sigma^2}\right)$
where $N$ is the dimension of the vectors.

ML decoding seeks to maximize $P(\mathbf{y} | \mathbf{s}_j)$. Maximizing this expression is equivalent to minimizing the exponent's numerator, which is the squared Euclidean distance $||\mathbf{y} - \mathbf{s}_j||^2$. Therefore, for an AWGN channel, ML decoding is achieved by finding the codeword $\mathbf{s}_j$ that minimizes the squared Euclidean distance to the received vector $\mathbf{y}$.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### References and Further Reading

*   **Goldsmith, Andrea.** *Wireless Communications.* Cambridge University Press, 1/e, 2005. (Chapter 6 on Error Control Coding provides a good foundation for decoding principles).
*   **Haykin, Simon.** *Communication Systems.* John Wiley and Sons Inc, 4e, 2020. (Chapters related to digital communication and error control coding will cover decoding concepts).
*   **Lin, Shu, and Daniel J. Costello, Jr.** *Error Control Coding: Fundamentals and Applications.* Prentice Hall Inc, 2nd Edition 2011. (This is a highly recommended resource for detailed explanations of decoding algorithms for various codes, including bounded distance decoding and sphere decoding).
*   **Cover, Thomas M., and Joy A. Thomas.** *Elements of Information Theory.* Wiley-Interscience, 2/e 2006. (Provides the theoretical underpinnings of channel coding and capacity, contextualizing the importance of effective decoding).

This concludes the study notes for Bounded Distance Decoding in the context of the AWGN channel. Remember to practice applying these concepts to specific code examples and understand their implications for wireless system performance.