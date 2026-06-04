---
title: "Hamming Distance"
subject: "CODING THEORY"
module: "Module 2: Error Control Coding – Relevance of error control codes in Communication System"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff21f"
status: "completed"
scrapedAt: "2026-05-23T18:05:08.663Z"
---
# CODING THEORY: Module 2 - Error Control Coding - Relevance of Error Control Codes in Communication System

## Topic: Hamming Distance

### Learning Outcomes Covered:

*   **Understanding the fundamental metric for measuring the difference between two codewords.** (Implicitly covered as the foundation for error detection/correction capabilities).
*   **Relating Hamming distance to the minimum distance of a code, and its implication for error detection and correction capabilities.** (Explicitly covered).
*   **Applying the concept of Hamming distance to analyze simple codes.** (Explicitly covered through examples and exercises).

### Course Outcomes Addressed:

*   **CO1: Explain various algebraic structures used in coding theory (Knowledge Level: K2)**
    *   While this topic focuses on a metric, understanding Hamming distance is foundational to appreciating how algebraic structures lead to useful coding properties.
*   **CO2: Explain the error detection and correction capabilities of linear codes (Knowledge Level: K2)**
    *   Hamming distance is the *key* to understanding these capabilities. This topic directly supports this CO.
*   **CO3: Apply linear block codes to detect and correct errors. (Knowledge Level: K3)**
    *   The ability to apply codes for error control hinges on understanding what Hamming distance enables.
*   **CO4: Use algebraic techniques to construct efficient codes with reduced structural complexity (Knowledge Level: K3)**
    *   The design of efficient codes often involves maximizing minimum Hamming distance, which is an algebraic property.

---

## 1. Introduction to Error Control Coding

In digital communication systems, data is transmitted over noisy channels, leading to the introduction of errors. Error control coding (ECC) is a technique used to detect and correct these errors, ensuring reliable data transmission.

**Relevance of ECC in Communication Systems:**

*   **Reliability:** Guarantees that the received data is identical to the transmitted data, even in the presence of noise.
*   **Efficiency:** Allows for lower signal-to-noise ratios (SNR) compared to simply increasing transmission power to combat errors. This translates to lower power consumption and reduced interference.
*   **Data Integrity:** Crucial for applications where even a single bit error can have catastrophic consequences (e.g., medical data, financial transactions, control systems).

**Types of Errors:**

*   **Random errors:** Bits are flipped independently with a certain probability (e.g., due to thermal noise).
*   **Burst errors:** Consecutive bits are flipped due to interference, fading, or other channel impairments.

**Fundamental Goal of ECC:** Introduce controlled redundancy into the data stream in a structured way, so that errors can be detected and, in many cases, corrected at the receiver.

---

## 2. The Concept of Hamming Distance

The Hamming distance is a fundamental metric in coding theory used to measure the difference between two codewords of the same length. It is named after Richard Hamming, a pioneer in information theory.

### 2.1 Definition

The **Hamming distance** between two binary codewords (or any two strings of equal length over an alphabet) is the **number of positions at which the corresponding symbols are different**.

Let $\mathbf{x} = (x_1, x_2, \dots, x_n)$ and $\mathbf{y} = (y_1, y_2, \dots, y_n)$ be two binary codewords of length $n$. The Hamming distance between $\mathbf{x}$ and $\mathbf{y}$, denoted by $d_H(\mathbf{x}, \mathbf{y})$, is defined as:

$d_H(\mathbf{x}, \mathbf{y}) = \sum_{i=1}^{n} |x_i - y_i|$

Alternatively, it can be expressed as the number of positions where $x_i \neq y_i$.

### 2.2 Properties of Hamming Distance

The Hamming distance is a metric, meaning it satisfies the following properties:

1.  **Non-negativity:** $d_H(\mathbf{x}, \mathbf{y}) \ge 0$ for all $\mathbf{x}, \mathbf{y}$.
2.  **Identity of indiscernibles:** $d_H(\mathbf{x}, \mathbf{y}) = 0$ if and only if $\mathbf{x} = \mathbf{y}$.
3.  **Symmetry:** $d_H(\mathbf{x}, \mathbf{y}) = d_H(\mathbf{y}, \mathbf{x})$ for all $\mathbf{x}, \mathbf{y}$.
4.  **Triangle inequality:** $d_H(\mathbf{x}, \mathbf{z}) \le d_H(\mathbf{x}, \mathbf{y}) + d_H(\mathbf{y}, \mathbf{z})$ for all $\mathbf{x}, \mathbf{y}, \mathbf{z}$.

### 2.3 Examples

**Example 2.1:**
Let $\mathbf{x} = 101101$ and $\mathbf{y} = 100111$.
To find $d_H(\mathbf{x}, \mathbf{y})$:
*   Position 1: 1 vs 1 (same)
*   Position 2: 0 vs 0 (same)
*   Position 3: 1 vs 0 (different) - count 1
*   Position 4: 1 vs 1 (same)
*   Position 5: 0 vs 1 (different) - count 2
*   Position 6: 1 vs 1 (same)

So, $d_H(\mathbf{x}, \mathbf{y}) = 2$.

**Example 2.2:**
Let $\mathbf{c}_1 = 0000$ and $\mathbf{c}_2 = 1111$.
$d_H(\mathbf{c}_1, \mathbf{c}_2) = 4$.

**Example 2.3:**
Let $\mathbf{c}_1 = 10101$ and $\mathbf{c}_2 = 10101$.
$d_H(\mathbf{c}_1, \mathbf{c}_2) = 0$.

---

## 3. Hamming Weight

The **Hamming weight** of a binary codeword is its Hamming distance from the zero vector. It is simply the number of '1's in the codeword.

Let $\mathbf{x} = (x_1, x_2, \dots, x_n)$ be a binary codeword. The Hamming weight of $\mathbf{x}$, denoted by $w_H(\mathbf{x})$, is:

$w_H(\mathbf{x}) = d_H(\mathbf{x}, \mathbf{0})$
where $\mathbf{0} = (0, 0, \dots, 0)$.

**Relationship between Hamming Distance and Hamming Weight:**

For any two binary vectors $\mathbf{x}$ and $\mathbf{y}$,
$d_H(\mathbf{x}, \mathbf{y}) = w_H(\mathbf{x} \oplus \mathbf{y})$,
where $\oplus$ denotes the bitwise XOR operation.

**Example 3.1:**
Let $\mathbf{x} = 101101$.
$w_H(\mathbf{x}) = 4$ (number of 1s).

**Example 3.2:**
Let $\mathbf{x} = 101101$ and $\mathbf{y} = 100111$.
$\mathbf{x} \oplus \mathbf{y} = (1\oplus1)(0\oplus0)(1\oplus0)(1\oplus1)(0\oplus1)(1\oplus1) = 001010$.
$w_H(\mathbf{x} \oplus \mathbf{y}) = 2$.
This matches $d_H(\mathbf{x}, \mathbf{y})$ calculated previously.

---

## 4. Minimum Hamming Distance of a Code

The **minimum Hamming distance** of a code $C$, denoted by $d_{min}$ or $d_{min}(C)$, is the smallest Hamming distance between any pair of distinct codewords in the code.

$d_{min}(C) = \min \{d_H(\mathbf{c}_i, \mathbf{c}_j) \mid \mathbf{c}_i, \mathbf{c}_j \in C, \mathbf{c}_i \neq \mathbf{c}_j\}$

**Important Property for Linear Codes:**

For a linear code $C$, the minimum Hamming distance is equal to the minimum non-zero Hamming weight of any codeword in the code.

$d_{min}(C) = \min \{w_H(\mathbf{c}) \mid \mathbf{c} \in C, \mathbf{c} \neq \mathbf{0}\}$

This is because if $\mathbf{c}_i$ and $\mathbf{c}_j$ are two distinct codewords in a linear code, then their difference $(\mathbf{c}_i - \mathbf{c}_j)$ is also a codeword in the code (since $C$ is closed under subtraction, which is XOR for binary codes). If $\mathbf{c}_i \neq \mathbf{c}_j$, then $\mathbf{c}_i \oplus \mathbf{c}_j \neq \mathbf{0}$. Thus, $d_H(\mathbf{c}_i, \mathbf{c}_j) = w_H(\mathbf{c}_i \oplus \mathbf{c}_j)$, and the minimum distance will be the minimum non-zero weight.

---

## 5. Error Detection and Correction Capabilities

The minimum Hamming distance of a code is directly related to its ability to detect and correct errors.

### 5.1 Error Detection Capability

A code $C$ can detect up to $t$ errors if and only if its minimum Hamming distance $d_{min}$ is at least $t+1$.

$d_{min} \ge t+1 \implies$ The code can detect up to $t$ errors.

**Explanation:**
If an error occurs, the transmitted codeword $\mathbf{c}$ is corrupted into a received word $\mathbf{r}$. If up to $t$ errors occur, the received word $\mathbf{r}$ will be at a Hamming distance of at most $t$ from the original codeword $\mathbf{c}$.
If $d_{min} \ge t+1$, then $\mathbf{r}$ cannot be another valid codeword in $C$ because the minimum distance between any two codewords is greater than $t$. Therefore, the receiver can detect that an error has occurred.

**Example 5.1:**
Consider a code with $d_{min} = 3$.
Can it detect 1 error? Yes, because $3 \ge 1+1$.
Can it detect 2 errors? Yes, because $3 \ge 2+1$.
Can it detect 3 errors? No, because $3 < 3+1$. If 3 errors occur, the received word could be another valid codeword.

### 5.2 Error Correction Capability

A code $C$ can correct up to $t$ errors if and only if its minimum Hamming distance $d_{min}$ is at least $2t+1$.

$d_{min} \ge 2t+1 \implies$ The code can correct up to $t$ errors.

**Explanation:**
This is based on the **Sphere Packing Bound** or **Hamming Bound**, and the **Maximum Likelihood Decoding** principle. If up to $t$ errors occur, the received word $\mathbf{r}$ is within a Hamming distance of $t$ from the transmitted codeword $\mathbf{c}$.
If $d_{min} \ge 2t+1$, then the "spheres" of radius $t$ around each valid codeword are disjoint. A sphere of radius $t$ around a codeword $\mathbf{c}$ is the set of all words $\mathbf{y}$ such that $d_H(\mathbf{c}, \mathbf{y}) \le t$.
If the received word $\mathbf{r}$ is within distance $t$ of the transmitted codeword $\mathbf{c}$, it cannot be within distance $t$ of any *other* codeword $\mathbf{c}'$.
Suppose, for contradiction, that $\mathbf{r}$ is within distance $t$ of $\mathbf{c}'$ as well, i.e., $d_H(\mathbf{c}', \mathbf{r}) \le t$.
Then, by the triangle inequality:
$d_H(\mathbf{c}, \mathbf{c}') \le d_H(\mathbf{c}, \mathbf{r}) + d_H(\mathbf{r}, \mathbf{c}')$
$d_H(\mathbf{c}, \mathbf{c}') \le t + t = 2t$
But we know that $d_H(\mathbf{c}, \mathbf{c}') \ge d_{min}$. So, $d_{min} \le 2t$.
This contradicts our condition $d_{min} \ge 2t+1$.
Therefore, if $d_{min} \ge 2t+1$, the received word $\mathbf{r}$ can only be within distance $t$ of one unique codeword, allowing for unique decoding.

**Example 5.2:**
Consider a code with $d_{min} = 3$.
Can it correct 1 error? Yes, because $3 \ge 2(1)+1$.
Can it correct 2 errors? No, because $3 < 2(2)+1$.

**Example 5.3:**
Consider a code with $d_{min} = 5$.
Can it correct 1 error? Yes, $5 \ge 2(1)+1$.
Can it correct 2 errors? Yes, $5 \ge 2(2)+1$.
Can it correct 3 errors? No, $5 < 2(3)+1$.

---

## 6. Hamming Codes

The Hamming code is a famous family of linear block codes that are capable of correcting single-bit errors. They are efficient and have a well-defined structure.

**Key Property of Hamming Codes:** For a Hamming code of length $n = 2^r - 1$, the minimum Hamming distance is $d_{min} = 3$.

**Implication:** Since $d_{min} = 3$, a Hamming code can detect up to $t = d_{min}-1 = 2$ errors and correct up to $t = \lfloor (d_{min}-1)/2 \rfloor = \lfloor (3-1)/2 \rfloor = 1$ error.

**Structure (Briefly):**
Hamming codes are typically defined by their parity check matrix $H$. The columns of $H$ are all possible non-zero binary vectors of length $r$, where $n=2^r-1$.

**Example 6.1: Hamming(7,4) Code**
This code has block length $n=7$ and message length $k=4$.
It can correct 1 error. $d_{min} = 3$.
It is constructed using $r=3$ parity check bits, such that $n = 2^3 - 1 = 7$.
The parity check matrix $H$ for Hamming(7,4) is:
$$
H = \begin{pmatrix}
0 & 0 & 0 & 1 & 1 & 1 & 1 \\
0 & 1 & 1 & 0 & 0 & 1 & 1 \\
1 & 0 & 1 & 0 & 1 & 0 & 1
\end{pmatrix}
$$
The rows of $H$ are the binary representations of numbers from 1 to 7 (excluding 0).

Let's find the minimum non-zero weight:
*   Any single column: weight is 1.
*   Any two columns: The sum of two columns (XOR) will have weight 2 if the columns are identical, or weight 2 if they are different and the rows are not all the same. Since columns are unique, the sum of any two columns will result in a vector with weight 2.
*   Any three columns: The sum of three columns can result in weight 3. For example, the sum of the first three columns (001, 010, 100) is 111, which has weight 3.

The minimum non-zero weight is 3. Therefore, $d_{min} = 3$.

**Codewords:**
This code has $2^4 = 16$ codewords.
Some codewords include:
*   $\mathbf{0000000}$ (weight 0)
*   $\mathbf{1110000}$ (weight 3) - check: $H \mathbf{c}^T = \begin{pmatrix} 0 & 0 & 0 & 1 & 1 & 1 & 1 \\ 0 & 1 & 1 & 0 & 0 & 1 & 1 \\ 1 & 0 & 1 & 0 & 1 & 0 & 1 \end{pmatrix} \begin{pmatrix} 1 \\ 1 \\ 1 \\ 0 \\ 0 \\ 0 \\ 0 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$
*   $\mathbf{0001110}$ (weight 3)
*   $\mathbf{1010101}$ (weight 4) - check: $H \mathbf{c}^T = \begin{pmatrix} 0 & 0 & 0 & 1 & 1 & 1 & 1 \\ 0 & 1 & 1 & 0 & 0 & 1 & 1 \\ 1 & 0 & 1 & 0 & 1 & 0 & 1 \end{pmatrix} \begin{pmatrix} 1 \\ 0 \\ 1 \\ 0 \\ 1 \\ 0 \\ 1 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$

The minimum Hamming weight of any non-zero codeword is 3, hence $d_{min}=3$.

---

## 7. Practice Questions and Exercises

**Question 1:**
What is the Hamming distance between the codewords $11010$ and $10110$?

**Answer 1:**
$d_H(11010, 10110) = 2$ (positions 2 and 3 are different).

**Question 2:**
Calculate the Hamming weight of the codeword $01101101$.

**Answer 2:**
$w_H(01101101) = 5$ (there are five '1's).

**Question 3:**
Let a code $C$ have the following codewords: $\{0000, 1110, 1001, 0111\}$.
(a) What is the Hamming distance between $0000$ and $1110$?
(b) What is the Hamming distance between $1110$ and $1001$?
(c) What is the minimum Hamming distance of this code?
(d) What is the maximum number of errors this code can detect?
(e) What is the maximum number of errors this code can correct?

**Answer 3:**
(a) $d_H(0000, 1110) = 3$.
(b) $d_H(1110, 1001)$:
    $1110 \oplus 1001 = 0111$.
    $w_H(0111) = 3$. So, $d_H(1110, 1001) = 3$.
(c) We need to check all pairs:
    $d_H(0000, 1110) = 3$
    $d_H(0000, 1001) = 2$
    $d_H(0000, 0111) = 3$
    $d_H(1110, 1001) = 3$
    $d_H(1110, 0111)$: $1110 \oplus 0111 = 1001$, weight is 2. So distance is 2.
    $d_H(1001, 0111)$: $1001 \oplus 0111 = 1110$, weight is 3. So distance is 3.
    The minimum Hamming distance is $d_{min} = 2$.
(d) Maximum number of errors detectable is $t = d_{min} - 1 = 2 - 1 = 1$.
(e) Maximum number of errors correctable is $t = \lfloor (d_{min}-1)/2 \rfloor = \lfloor (2-1)/2 \rfloor = \lfloor 1/2 \rfloor = 0$. This code cannot correct any errors.

**Question 4:**
A block code has a minimum Hamming distance of 5.
(a) What is the maximum number of errors it can detect?
(b) What is the maximum number of errors it can correct?

**Answer 4:**
(a) $t = d_{min} - 1 = 5 - 1 = 4$ errors.
(b) $t = \lfloor (d_{min}-1)/2 \rfloor = \lfloor (5-1)/2 \rfloor = \lfloor 4/2 \rfloor = 2$ errors.

**Question 5:**
Consider the set of codewords $C = \{00000, 11100, 00011, 11111\}$.
(a) Calculate the minimum Hamming distance of $C$.
(b) Does this code belong to a linear code family? Justify your answer.

**Answer 5:**
(a)
    $d_H(00000, 11100) = 3$
    $d_H(00000, 00011) = 2$
    $d_H(00000, 11111) = 5$
    $d_H(11100, 00011)$: $11100 \oplus 00011 = 11111$, weight is 5. Distance is 5.
    $d_H(11100, 11111)$: $11100 \oplus 11111 = 00011$, weight is 2. Distance is 2.
    $d_H(00011, 11111)$: $00011 \oplus 11111 = 11100$, weight is 3. Distance is 3.
    The minimum Hamming distance is $d_{min} = 2$.

(b) For a code to be linear, it must contain the zero vector (which it does) and be closed under addition (XOR). This means that the sum of any two codewords must also be a codeword in the set.
    Let's check the sums:
    $11100 \oplus 00011 = 11111$. This is in the set.
    $11100 \oplus 11111 = 00011$. This is in the set.
    $00011 \oplus 11111 = 11100$. This is in the set.
    However, a linear code should also be closed under addition with itself and with the zero vector.
    The key property for a linear code is that for any codewords $\mathbf{c}_1, \mathbf{c}_2$, $\mathbf{c}_1 \oplus \mathbf{c}_2$ must also be a codeword.
    Let's consider the set $C = \{00000, 11100, 00011, 11111\}$.
    If this were a linear code, it would have a generator matrix $G$. The codewords would be linear combinations of the rows of $G$.
    The fact that $d_{min}=2$ is suspicious for a linear code. If a linear code has $d_{min}=2$, it implies that there's a codeword with weight 2, meaning it's formed by XORing two codewords that are not multiples of each other (if it's a 1-dimensional code, all non-zero codewords are multiples of each other).
    However, the simplest way to check linearity here is to see if the set forms a group under XOR.
    The vectors are $00000$, $11100$, $00011$, $11111$.
    Is the sum of any two codewords in the set?
    Yes, we checked above.
    However, a linear code has a specific structure. If it's a linear code, the set of codewords forms a subspace.
    The dimension of this code seems to be 2, as there are 4 codewords ($2^2$).
    If it were linear, there would be a generator matrix $G$ of size $k \times n$. For $k=2, n=5$, $G$ would be $2 \times 5$.
    Let's assume $G = \begin{pmatrix} 1 & 1 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 & 1 \end{pmatrix}$.
    The codewords generated are:
    $0 \cdot G = 00000$
    $1 \cdot G = 11100$
    $00000 \oplus 11100 = 11100$ (this is $1 \cdot G$)
    $11100 \oplus 00011 = 11111$ (this could be $1 \cdot G_1 + 1 \cdot G_2$, where $G_1 = 11100$ and $G_2 = 00011$)
    Let's check: if $G = \begin{pmatrix} 1 & 1 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 & 1 \end{pmatrix}$.
    Codewords:
    $00000$
    $11100$
    $00011$
    $11100 \oplus 00011 = 11111$
    This set is indeed a linear code with $k=2$ and $n=5$. The minimum distance is 2.
    *Correction*: The justification should be based on the definition of a subspace. A code $C$ is linear if for any $\mathbf{c}_1, \mathbf{c}_2 \in C$, $\mathbf{c}_1 \oplus \mathbf{c}_2 \in C$.
    Checking sums again:
    $11100 \oplus 00011 = 11111 \in C$.
    $11100 \oplus 11111 = 00011 \in C$.
    $00011 \oplus 11111 = 11100 \in C$.
    All sums of pairs of distinct codewords are also in $C$. Also, the sum of any codeword with itself is $00000 \in C$. Therefore, this set forms a group under XOR and is a subspace. **Yes, this code is linear.**

---

## 8. Important Points to Remember

*   **Hamming Distance:** The number of positions where two strings of equal length differ.
*   **Hamming Weight:** The Hamming distance of a vector from the zero vector (number of 1s).
*   **Minimum Hamming Distance ($d_{min}$):** The smallest Hamming distance between any two *distinct* codewords in a code.
*   **Linear Codes:** For linear codes, $d_{min}$ is the minimum non-zero Hamming weight of any codeword.
*   **Error Detection:** A code with $d_{min}$ can detect up to $d_{min}-1$ errors.
*   **Error Correction:** A code with $d_{min}$ can correct up to $\lfloor (d_{min}-1)/2 \rfloor$ errors.
*   **Hamming Codes:** Classic codes with $d_{min}=3$ capable of correcting single-bit errors.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


## 9. References and Further Reading

*   **Shu Lin & Daniel J. Costello, Jr., *Error Control Coding: Fundamentals and Applications*, 2nd Edition:** This is a primary textbook for coding theory. Chapter 2, "Properties of Codes," would cover Hamming distance and its implications in detail.
*   **Simon Haykin, *Communication Systems*, 4e:** While broader in scope, Haykin's book often includes sections on error control coding in the context of communication system design, explaining the necessity of concepts like Hamming distance for reliable transmission.
*   **T. Richardson, R. Urbanke, *Modern Coding Theory*:** This book delves deeper into the theoretical aspects and advanced topics. Chapter 1, "Introduction," and subsequent chapters would rigorously define Hamming distance and explore its role in code properties and bounds.
*   **Ron M Roth, *Introduction to Coding Theory*:** Another excellent foundational text that will cover Hamming distance and its relation to error control capabilities comprehensively.
*   **RG Gallager, *Principles of digital communication*:** A classic reference that provides a deep theoretical understanding, likely covering Hamming distance in the context of channel capacity and coding bounds.

These notes provide a solid foundation in the concept of Hamming distance, its properties, and its crucial role in determining the error detection and correction capabilities of communication systems. Understanding this metric is essential for comprehending how error control codes work and for designing effective communication systems.