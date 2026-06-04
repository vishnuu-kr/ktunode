---
title: "Hamming Bound"
subject: "CODING THEORY"
module: "Module 2: Error Control Coding – Relevance of error control codes in Communication System"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff225"
status: "completed"
scrapedAt: "2026-05-23T18:05:13.766Z"
---
# CODING THEORY: Module 2 - Error Control Coding – Relevance of Error Control Codes in Communication System

## Topic: Hamming Bound

### Introduction to Error Control Coding and its Relevance

In digital communication systems, information is transmitted through a noisy channel, which can introduce errors into the transmitted data. Error control coding is a technique used to detect and correct these errors, ensuring reliable communication. This module focuses on understanding the fundamental limits of error correction and introduces the Hamming Bound as a significant early result in this field.

**Relevance in Communication Systems:**

*   **Reliability:** Error control codes are crucial for ensuring that the received data is as close as possible to the transmitted data, especially in channels with high noise levels.
*   **Efficiency:** By correcting errors, we can reduce the need for retransmissions, leading to more efficient use of channel bandwidth and lower latency.
*   **Data Integrity:** In applications like data storage and transmission of critical information, error detection and correction are paramount for maintaining data integrity.

### Key Concepts and Definitions

**1. Code:** A code is a set of predefined codewords, which are sequences of symbols from a specific alphabet.

**2. Codeword:** A codeword is a valid sequence of symbols that can be transmitted.

**3. Message:** The original information to be transmitted.

**4. Encoder:** A device or algorithm that maps a message to a codeword.

**5. Decoder:** A device or algorithm that maps a received sequence back to a message (or a codeword).

**6. Channel:** The medium through which information is transmitted, which can introduce noise and errors.

**7. Received Word:** The sequence of symbols received at the receiver, which may or may not be a valid codeword.

**8. Error:** A discrepancy between the transmitted codeword and the received word.

**9. Hamming Weight:** The Hamming weight of a binary codeword is the number of '1's in it.
    *   **Example:** The Hamming weight of `101101` is 4.

**10. Hamming Distance:** The Hamming distance between two codewords is the number of positions at which they differ.
    *   **Example:** The Hamming distance between `101101` and `110100` is 4.

**11. Minimum Hamming Distance ($d_{min}$):** For a given code $C$, $d_{min}$ is the smallest Hamming distance between any two distinct codewords in $C$.
    *   **Property:** $d_{min} = \min \{wt(c) \mid c \in C, c \neq 0\}$, where $wt(c)$ is the Hamming weight of codeword $c$.

**12. Error Detection Capability:** A code can detect up to $d_{min} - 1$ errors. If $k$ errors occur, and the received word is not a valid codeword, then at least one error is detected.

**13. Error Correction Capability:** A code can correct up to $\lfloor \frac{d_{min} - 1}{2} \rfloor$ errors. This is often denoted by $t$.
    *   **Example:** If $d_{min} = 3$, then $t = \lfloor \frac{3-1}{2} \rfloor = 1$. The code can correct 1 error.
    *   **Example:** If $d_{min} = 5$, then $t = \lfloor \frac{5-1}{2} \rfloor = 2$. The code can correct 2 errors.

**Connecting to Course Outcomes:**

*   **CO2:** Understanding $d_{min}$ directly relates to explaining the error detection and correction capabilities of linear codes.

### The Hamming Bound

The Hamming Bound, also known as the Sphere Packing Bound or the First-Order Bound, provides an upper limit on the number of codewords that can exist in a binary block code of a given length and minimum distance. It essentially states that spheres of radius $t = \lfloor \frac{d_{min}-1}{2} \rfloor$ around each valid codeword, within the space of all possible received words, must be disjoint.

**Derivation and Intuition:**

Consider a binary code $C$ of length $n$ with $M$ codewords and minimum distance $d_{min}$. Let $t = \lfloor \frac{d_{min}-1}{2} \rfloor$ be the error-correcting capability.

*   **Total possible received words:** For a code of length $n$, there are $2^n$ possible received words.
*   **Spheres of influence:** For each codeword $c \in C$, we can define a "sphere" of radius $t$ around it. This sphere consists of all received words that are within a Hamming distance of $t$ from $c$.
*   **Disjoint spheres:** If the code can correct $t$ errors, then any two spheres of radius $t$ around distinct codewords must not overlap. This is because if a received word falls into the spheres of two different codewords, the decoder would not be able to uniquely determine which codeword was transmitted.
*   **Size of a sphere:** The number of words within a Hamming distance of $k$ from a given word of length $n$ is given by the sum of binomial coefficients:
    $$ V(n, k) = \sum_{i=0}^{k} \binom{n}{i} $$
    This represents the number of received words that can be generated from a single codeword by introducing at most $k$ errors.

**The Hamming Bound Inequality:**

Since the spheres of radius $t$ around each of the $M$ codewords are disjoint, the total number of words covered by these spheres cannot exceed the total number of possible words of length $n$.

$$ M \cdot V(n, t) \le 2^n $$

where:
*   $M$ is the number of codewords.
*   $n$ is the length of the codewords.
*   $t = \lfloor \frac{d_{min}-1}{2} \rfloor$ is the error-correcting capability.
*   $V(n, t) = \sum_{i=0}^{t} \binom{n}{i}$ is the volume of a sphere of radius $t$.

**Rearranging the Hamming Bound:**

The Hamming Bound can also be expressed in terms of the code rate $R = \frac{\log_2 M}{n}$ and the relative minimum distance $\delta_{min} = \frac{d_{min}}{n}$.

*   From $M \cdot V(n, t) \le 2^n$, taking $\log_2$ on both sides:
    $$ \log_2 M + \log_2 V(n, t) \le n $$
    $$ \frac{\log_2 M}{n} + \frac{\log_2 V(n, t)}{n} \le 1 $$
    $$ R + \frac{\log_2 V(n, t)}{n} \le 1 $$

**Interpretation of the Hamming Bound:**

The Hamming Bound tells us that there's a trade-off between the number of codewords ($M$), the length of the code ($n$), and the minimum distance ($d_{min}$) (or error-correcting capability $t$). Codes that achieve the Hamming Bound are called **perfect codes**.

**Perfect Codes:**

A code is called a perfect code if the spheres of radius $t = \lfloor \frac{d_{min}-1}{2} \rfloor$ around its codewords partition the entire space of $2^n$ possible words without any overlap or gaps. This means:

$$ M \cdot V(n, t) = 2^n $$

**Example:** The Hamming codes are examples of perfect codes.

**Limitations of the Hamming Bound:**

*   **Existence of Perfect Codes:** Perfect codes are very rare. For binary codes, the only known perfect codes are:
    *   The trivial repetition codes ($d_{min}=2$).
    *   The Hamming codes.
    *   The Golay code (a non-linear code of length 24).
*   **Tightness of the Bound:** For most codes, the Hamming Bound is not tight, meaning the actual number of codewords $M$ is much less than the bound suggests. It provides a fundamental limit, but not necessarily an achievable one for most code constructions.

**Connecting to Textbooks:**

*   **Shu Lin & Daniel J. Costello, Jr. - Error Control Coding: Fundamentals and Applications (2nd Edition):** This textbook provides a thorough treatment of the Hamming Bound, including its derivation and implications. Chapter 3, "Bounds on the Performance of Error-Correcting Codes," is particularly relevant. They discuss the sphere packing argument and the condition for perfect codes.
*   **T. Richardson, R. Urbanke - Modern Coding Theory:** While this book focuses on more modern codes, it will likely touch upon fundamental bounds like the Hamming Bound as a historical and theoretical baseline.
*   **RG Gallager - Principles of digital communication:** Gallager's book is a foundational text in information theory and coding. It is highly likely to cover the Hamming Bound and its relation to channel capacity and coding limits.

### Hamming Codes (Example of Perfect Codes)

The Hamming codes are a family of linear block codes that are perfect. They were discovered by Richard Hamming.

**Properties of Hamming Codes:**

*   **Parameters:** A Hamming code is denoted by $Ham(r, 2)$, which is a binary block code with:
    *   Length $n = 2^r - 1$
    *   Number of information bits $k = 2^r - 1 - r$
    *   Number of parity check bits $n-k = r$
    *   Minimum distance $d_{min} = 3$
    *   Error-correcting capability $t = \lfloor \frac{3-1}{2} \rfloor = 1$.

**Hamming Bound for Hamming Codes:**

Let's verify the Hamming Bound for a Hamming code, say $Ham(3, 2)$:
*   $r = 3$
*   $n = 2^3 - 1 = 7$
*   $k = 2^3 - 1 - 3 = 8 - 1 - 3 = 4$
*   $M = 2^k = 2^4 = 16$
*   $d_{min} = 3$, so $t = 1$.

The Hamming Bound states: $M \cdot V(n, t) \le 2^n$.
$$ 16 \cdot V(7, 1) \le 2^7 $$
$$ V(7, 1) = \binom{7}{0} + \binom{7}{1} = 1 + 7 = 8 $$
$$ 16 \cdot 8 \le 128 $$
$$ 128 \le 128 $$

Since $M \cdot V(n, t) = 2^n$, the Hamming code $Ham(3, 2)$ achieves the Hamming Bound, making it a perfect code.

**Construction of Hamming Codes:**

Hamming codes are constructed using a parity-check matrix $H$ whose columns are all distinct non-zero binary vectors of length $r$.

For $Ham(3, 2)$: $r=3$, $n=7$. We need $r=3$ parity check bits. The columns of $H$ are all non-zero binary vectors of length 3:

$$ H = \begin{bmatrix} 0 & 0 & 0 & 1 & 1 & 1 & 1 \\ 0 & 1 & 1 & 0 & 0 & 1 & 1 \\ 1 & 0 & 1 & 0 & 1 & 0 & 1 \end{bmatrix} $$

The columns are:
001, 010, 011, 100, 101, 110, 111. (We exclude 000).

The code consists of all binary vectors $c$ of length 7 such that $Hc^T = 0$.

**Connecting to Course Outcomes:**

*   **CO1:** Understanding the structure of the parity-check matrix $H$ involves concepts from linear algebra, which are algebraic structures.
*   **CO2:** The minimum distance $d_{min}=3$ for Hamming codes directly translates to their error detection (detects 2 errors) and correction (corrects 1 error) capabilities.
*   **CO3:** Applying Hamming codes to detect and correct errors would involve calculating syndrome and using the parity-check matrix.
*   **CO4:** Hamming codes provide an efficient construction with reduced structural complexity (compared to brute-force search for codes), demonstrating algebraic techniques.

### Singleton Bound

The Singleton Bound is another important bound that provides an upper limit on the number of codewords for a given length $n$ and minimum distance $d_{min}$. It is generally tighter than the Hamming Bound.

**The Singleton Bound Inequality:**

For any code $C$ of length $n$ with $M$ codewords and minimum distance $d_{min}$:

$$ M \le 2^{n - d_{min} + 1} $$

**Derivation and Intuition:**

Consider a code $C$ with $M$ codewords and minimum distance $d_{min}$.
Let $c_1, c_2, \dots, c_M$ be the codewords.
Let $d_{min}(c_i, c_j) \ge d_{min}$ for $i \neq j$.

Consider a codeword $c$. If we delete any $d_{min}-1$ positions from $c$, the remaining $n - (d_{min}-1)$ symbols form a unique prefix of length $n - d_{min} + 1$. This is because if two different codewords $c_i$ and $c_j$ had the same prefix of length $n - d_{min} + 1$ after deleting $d_{min}-1$ positions, their Hamming distance would be at most $n - (n - d_{min} + 1) = d_{min} - 1$, which contradicts the minimum distance.

Therefore, there can be at most $2^{n - d_{min} + 1}$ distinct prefixes of length $n - d_{min} + 1$. Since each codeword maps to a unique prefix, $M \le 2^{n - d_{min} + 1}$.

**Connection to Code Rate:**

Taking $\log_2$ of the Singleton Bound:
$$ \log_2 M \le n - d_{min} + 1 $$
$$ \frac{\log_2 M}{n} \le \frac{n - d_{min} + 1}{n} $$
$$ R \le 1 - \frac{d_{min}}{n} + \frac{1}{n} $$
$$ R \le 1 - \delta_{min} + \frac{1}{n} $$

**Maximum Distance Separable (MDS) Codes:**

Codes that meet the Singleton Bound with equality are called Maximum Distance Separable (MDS) codes.
$$ M = 2^{n - d_{min} + 1} $$
This implies:
$$ d_{min} = n - \log_2 M + 1 $$
So, for a given $n$ and $M$, MDS codes achieve the largest possible minimum distance.

**Examples of MDS Codes:**
*   Reed-Solomon codes are a class of MDS codes.
*   The trivial code with all zeros is an MDS code.
*   The code with $M=2$ (two codewords, one being all zeros and the other all ones) is an MDS code.

**Relationship between Hamming and Singleton Bounds:**

For any code, the Singleton Bound is always tighter than or equal to the Hamming Bound.
$$ 2^{n - d_{min} + 1} \ge \sum_{i=0}^{\lfloor \frac{d_{min}-1}{2} \rfloor} \binom{n}{i} $$
This inequality holds true.

**Connecting to Course Outcomes:**

*   **CO3:** Understanding MDS codes and their properties is useful for applying efficient codes.
*   **CO4:** MDS codes represent an efficient construction that maximizes $d_{min}$ for a given $n$ and $M$, showcasing algebraic techniques.

### Plotting Bounds and Code Performance

Bounds are crucial for understanding the theoretical limits of error correction. When we plot the achievable rate ($R$) versus the relative minimum distance ($\delta_{min}$), the bounds provide an upper envelope. Codes that lie close to the upper envelope are considered good codes.

*   **The Gilbert-Varshamov Bound:** Another important bound that provides a lower envelope for achievable $(R, \delta_{min})$ pairs.
*   **The Sphere Packing (Hamming) Bound:** Provides an upper limit on achievable $R$ for a given $\delta_{min}$ (or vice-versa).
*   **The Singleton Bound:** A tighter upper bound, especially important for understanding MDS codes.

**Visualizing Bounds:**

Imagine a plot with $\delta_{min}$ on the x-axis and $R$ on the y-axis.

*   The Hamming Bound forms a curve above the Gilbert-Varshamov Bound.
*   The Singleton Bound forms an even tighter curve above the Hamming Bound.
*   Achievable code regions lie below these upper bounds and above the Gilbert-Varshamov Bound.

**Important Points to Remember:**

*   The Hamming Bound provides an upper limit on the number of codewords for a given code length and error-correcting capability.
*   It is derived from the sphere packing argument: disjoint spheres of radius $t$ around codewords.
*   Perfect codes achieve the Hamming Bound, and Hamming codes are a notable example.
*   The Singleton Bound is generally tighter and identifies MDS codes as codes that achieve it.
*   Bounds help us understand the fundamental trade-offs in error control coding.

### Practice Questions and Exercises

**Question 1:**
A binary block code has length $n=10$, minimum distance $d_{min}=5$, and $M=32$ codewords. Calculate the error-correcting capability ($t$) and verify if this code is capable of correcting 2 errors.
**(CO2)**

**Answer 1:**
The error-correcting capability is $t = \lfloor \frac{d_{min}-1}{2} \rfloor = \lfloor \frac{5-1}{2} \rfloor = \lfloor \frac{4}{2} \rfloor = 2$.
Since $t=2$, the code is capable of correcting up to 2 errors.

**Question 2:**
Consider a code with length $n=8$, minimum distance $d_{min}=4$, and $M=16$ codewords.
a) Calculate the error-correcting capability ($t$).
b) Calculate the Hamming Bound for this code.
c) Calculate the Singleton Bound for this code.
d) Which bound is tighter?
**(CO2)**

**Answer 2:**
a) $t = \lfloor \frac{d_{min}-1}{2} \rfloor = \lfloor \frac{4-1}{2} \rfloor = \lfloor \frac{3}{2} \rfloor = 1$.
b) Hamming Bound: $M \cdot V(n, t) \le 2^n$
   $M = 16$, $n = 8$, $t = 1$.
   $V(8, 1) = \binom{8}{0} + \binom{8}{1} = 1 + 8 = 9$.
   Hamming Bound: $16 \cdot 9 \le 2^8$
                  $144 \le 256$.
   The Hamming Bound states that $M \le \frac{2^n}{V(n,t)} = \frac{256}{9} \approx 28.44$. So, $M$ must be less than or equal to 28. Our $M=16$ satisfies this.

c) Singleton Bound: $M \le 2^{n - d_{min} + 1}$
   $M \le 2^{8 - 4 + 1}$
   $M \le 2^5$
   $M \le 32$.
   Our $M=16$ satisfies this.

d) Comparing the bounds on $M$:
   Hamming Bound: $M \le 28.44$
   Singleton Bound: $M \le 32$
   The Hamming Bound is tighter in this case, as it imposes a stricter limit on $M$.

**Question 3:**
What are the parameters ($n, k, d_{min}$) of the Hamming code $Ham(2, 2)$? Is this code a perfect code? Verify its parameters against the Hamming Bound.
**(CO2, CO4)**

**Answer 3:**
For $Ham(r, 2)$: $n = 2^r - 1$, $k = 2^r - 1 - r$.
For $Ham(2, 2)$: $r=2$.
*   $n = 2^2 - 1 = 3$
*   $k = 2^2 - 1 - 2 = 4 - 1 - 2 = 1$
*   $M = 2^k = 2^1 = 2$.
*   The minimum distance for any Hamming code $Ham(r, 2)$ is $d_{min} = 3$.

Is it a perfect code? Yes, all Hamming codes are perfect codes.

Verify against the Hamming Bound: $M \cdot V(n, t) \le 2^n$.
*   $M = 2$, $n = 3$.
*   $d_{min} = 3$, so $t = \lfloor \frac{3-1}{2} \rfloor = 1$.
*   $V(3, 1) = \binom{3}{0} + \binom{3}{1} = 1 + 3 = 4$.

Hamming Bound: $2 \cdot 4 \le 2^3$
                $8 \le 8$.
The code achieves the Hamming Bound ($M \cdot V(n, t) = 2^n$), confirming it is a perfect code.

**Question 4:**
If a code has $n=15$ and $d_{min}=7$. What is the maximum number of codewords $M$ allowed by the Singleton Bound? What is the code rate if $M$ is maximized according to this bound? Is this code likely to be MDS?
**(CO3, CO4)**

**Answer 4:**
Singleton Bound: $M \le 2^{n - d_{min} + 1}$
$n=15$, $d_{min}=7$.
$M \le 2^{15 - 7 + 1}$
$M \le 2^9$
$M \le 512$.

The maximum number of codewords allowed by the Singleton Bound is $M_{max} = 512$.
If $M = 512$, then $k = \log_2 M = \log_2 512 = 9$.
The code rate $R = \frac{k}{n} = \frac{9}{15} = \frac{3}{5} = 0.6$.

Since the code can achieve $M = 2^{n - d_{min} + 1}$ (by choosing $M=512$ and $n=15, d_{min}=7$), it is an MDS code.

---

This concludes the study notes for the Hamming Bound. Remember to consult your textbooks for a deeper understanding and more examples. The key takeaway is that the Hamming Bound provides a fundamental limit on the performance of error-correcting codes, and perfect codes are a special class of codes that meet this bound.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
