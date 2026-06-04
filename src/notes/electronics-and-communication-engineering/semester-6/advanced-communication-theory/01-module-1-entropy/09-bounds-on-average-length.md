---
title: "Bounds on average length"
subject: "ADVANCED COMMUNICATION THEORY"
module: "Module 1: Entropy"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fecf4"
status: "completed"
scrapedAt: "2026-05-23T17:58:25.838Z"
---
# ADVANCED COMMUNICATION THEORY - Module 1: Entropy

## Topic: Bounds on Average Length

### Learning Outcomes:

*   Understand the fundamental relationship between entropy and the average length of optimal codes.
*   Derive and explain the lower bound on the average code length.
*   Explain the concept of Kraft's inequality and its role in prefix codes.
*   Relate the average code length to the entropy of a discrete memoryless source.
*   Analyze the efficiency of coding schemes in terms of their average code length.

---

### 1. Introduction to Source Coding and Average Length

**Key Concept:** Source coding, also known as data compression, aims to represent information from a source using fewer bits than a fixed-length representation. The goal is to achieve this by assigning shorter codewords to more probable symbols and longer codewords to less probable symbols.

**Definition:** The **average code length** ($L$) of a uniquely decodable code for a discrete memoryless source (DMS) is the expected length of a codeword, calculated as:

$L = \sum_{i=1}^{k} p(x_i) l(x_i)$

where:
*   $p(x_i)$ is the probability of the $i$-th symbol $x_i$.
*   $l(x_i)$ is the length of the codeword assigned to symbol $x_i$.
*   $k$ is the number of distinct symbols in the source alphabet.

**Objective:** To minimize $L$ for a given source, thereby achieving efficient data compression.

---

### 2. Entropy as a Lower Bound on Average Length

**Key Concept:** Entropy is a fundamental measure of uncertainty or information content in a source. It sets a theoretical limit on the best possible compression achievable.

**Definition:** The **entropy** ($H(X)$) of a discrete random variable $X$ with alphabet $\{x_1, x_2, \ldots, x_k\}$ and probability mass function $p(x_i)$ is defined as:

$H(X) = -\sum_{i=1}^{k} p(x_i) \log_b p(x_i)$

where the base of the logarithm ($b$) determines the unit of entropy (e.g., $b=2$ for bits, $b=e$ for nats).

**Theorem (Shannon's First Theorem / Source Coding Theorem):** For a discrete memoryless source $X$, the average code length $L$ of any uniquely decodable code satisfies:

$L \geq H(X)$

**Explanation:**
*   This theorem establishes that the entropy of the source is the absolute minimum possible average code length achievable for any prefix code or uniquely decodable code.
*   It signifies that we cannot compress data to an average length less than the entropy of the source without losing information.
*   In practice, it's impossible to achieve an average code length exactly equal to the entropy unless the probabilities of the source symbols are negative powers of the base of the logarithm (e.g., $1/2, 1/4, 1/8$, etc., for base 2).

**(Referenced in: Cover & Thomas, Chapter 5; Goldsmith, Chapter 2)**

---

### 3. Kraft's Inequality and its Role

**Key Concept:** Kraft's inequality provides a condition for the existence of a prefix code (or uniquely decodable code) with a given set of codeword lengths.

**Definition:** For a code with codeword lengths $l_1, l_2, \ldots, l_k$, a prefix code exists if and only if the following inequality holds:

$\sum_{i=1}^{k} b^{-l_i} \leq 1$

where $b$ is the size of the alphabet of the codewords (e.g., $b=2$ for binary codes).

**Connection to Average Length:**
*   Kraft's inequality is crucial because it ensures that a set of codeword lengths can be constructed to form a valid prefix code.
*   Optimal prefix codes (like Huffman codes) are constructed such that the codeword lengths are as close as possible to $-\log_b p(x_i)$.

**(Referenced in: Cover & Thomas, Chapter 5; Haykin, Chapter 1)**

---

### 4. Derivation of the Lower Bound

**Key Concept:** The lower bound on the average code length can be derived by considering the properties of optimal codes and applying Jensen's inequality.

**Derivation Steps:**
1.  **Consider an optimal prefix code:** Let the codeword lengths be $l_1, l_2, \ldots, l_k$ for symbols $x_1, x_2, \ldots, x_k$ with probabilities $p(x_1), p(x_2), \ldots, p(x_k)$.
2.  **Kraft's Inequality for Optimal Codes:** For a complete prefix code (where $\sum_{i=1}^{k} b^{-l_i} = 1$), the codeword lengths are chosen to be as close as possible to $-\log_b p(x_i)$. Specifically, for a binary alphabet ($b=2$), Kraft's inequality becomes:
    $\sum_{i=1}^{k} 2^{-l_i} \leq 1$
3.  **Logarithmic Transformation:** Taking the logarithm base 2 of Kraft's inequality:
    $\log_2 \left(\sum_{i=1}^{k} 2^{-l_i}\right) \leq \log_2(1) = 0$
4.  **Applying Jensen's Inequality:** The function $f(x) = 2^{-x}$ is convex. Jensen's inequality states that for a convex function $f$ and probabilities $p_i$, $f\left(\sum p_i x_i\right) \leq \sum p_i f(x_i)$.
    Let's consider the quantity $\sum_{i=1}^{k} p(x_i) 2^{l(x_i)}$.
    For a prefix code, it can be shown that $\sum_{i=1}^{k} 2^{-l_i} \leq 1$.
    Consider the average length $L = \sum p(x_i) l(x_i)$.
    We can use the property that for any probability distribution $\{p_i\}$ and set of lengths $\{l_i\}$ satisfying Kraft's inequality ($\sum 2^{-l_i} \leq 1$), the average length $L = \sum p_i l_i$ is minimized when $l_i \approx -\log_2 p_i$.

5.  **Direct Proof using Jensen's Inequality (for optimal codes):**
    For an optimal prefix code where $2^{-l_i}$ is "tightly" related to $p(x_i)$, specifically if $l_i = \lceil -\log_2 p(x_i) \rceil$, we can use the following property derived from Kraft's inequality and convexity.
    Consider the expression:
    $2^L = 2^{\sum p(x_i) l(x_i)} = \prod_{i=1}^k (2^{l_i})^{p(x_i)}$
    From Kraft's inequality, $\sum_{i=1}^k 2^{-l_i} \leq 1$.
    Let's consider a specific construction. If we can find lengths $l_i$ such that $2^{-l_i} = p(x_i)$, then $L = \sum p(x_i) l_i = \sum p(x_i) (-\log_2 p(x_i)) = H(X)$.
    However, $p(x_i)$ are not always powers of 2. Huffman coding finds the best possible integer lengths.

    A more rigorous proof of the lower bound uses Jensen's inequality on the function $f(x) = 2^x$.
    $2^L = 2^{\sum p(x_i) l(x_i)} = \prod_{i=1}^k (2^{l_i})^{p(x_i)}$
    From Kraft's inequality, $\sum_{i=1}^k 2^{-l_i} \leq 1$.
    Consider the expectation of $2^{l(X)}$ where $X$ is a random variable that selects symbols according to their probabilities $p(x_i)$.
    $E[2^{l(X)}] = \sum_{i=1}^k p(x_i) 2^{l(x_i)}$

    Let's use the fact that for a uniquely decodable code, $\sum_{i=1}^k 2^{-l_i} \leq 1$.
    Let $p_i = p(x_i)$ and $l_i = l(x_i)$.
    We know that $l_i \geq -\log_2 p_i$ is not always true, but $l_i$ are integers.
    Let's consider the average length $L = \sum p_i l_i$.

    **Proof via AM-GM inequality:**
    For non-negative numbers $a_i$ and weights $w_i$ such that $\sum w_i = 1$, the weighted AM-GM inequality states:
    $\sum w_i a_i \geq \prod a_i^{w_i}$

    Let $w_i = p_i$ and $a_i = 2^{l_i}$.
    $\sum p_i 2^{l_i} \geq \prod (2^{l_i})^{p_i} = 2^{\sum p_i l_i} = 2^L$.

    This isn't directly leading to $L \geq H(X)$.

    **The classic proof uses $\log$ and convexity:**
    Take the logarithm base 2 of Kraft's inequality:
    $\log_2(\sum_{i=1}^k 2^{-l_i}) \leq 0$.

    Consider the expression:
    $L - H(X) = \sum p_i l_i - (-\sum p_i \log_2 p_i) = \sum p_i (l_i + \log_2 p_i)$
    $L - H(X) = \sum p_i \log_2 \left(\frac{2^{l_i}}{p_i}\right)$

    Let $q_i = 2^{-l_i}$. Kraft's inequality is $\sum q_i \leq 1$.
    $L - H(X) = \sum p_i \log_2 \left(\frac{1}{p_i q_i}\right) = -\sum p_i \log_2 (p_i q_i)$

    Using the Gibbs inequality: $-\sum p_i \log_2 p_i \geq -\sum p_i \log_2 q_i$.
    $H(X) \geq \sum p_i \log_2 (1/q_i) = \sum p_i l_i = L$.
    This form of Gibbs inequality is $H(X) \geq D(P || Q)$, where $D(P || Q)$ is the Kullback-Leibler divergence.
    $D(P || Q) = \sum p_i \log_2 \left(\frac{p_i}{q_i}\right) = \sum p_i (\log_2 p_i - \log_2 q_i)$
    $D(P || Q) = H(X) - \sum p_i \log_2 q_i = H(X) - \sum p_i (-l_i) = H(X) + \sum p_i l_i = H(X) + L$.
    This is not correct.

    Let's re-state the Gibbs inequality: For two probability distributions $P$ and $Q$ over the same alphabet,
    $H(X) = -\sum p_i \log_2 p_i \geq -\sum p_i \log_2 q_i = \sum p_i \log_2 (1/q_i)$.
    The difference is the KL divergence $D(P || Q) = \sum p_i \log_2(p_i/q_i) \geq 0$.

    We have Kraft's inequality: $\sum_{i=1}^k 2^{-l_i} \leq 1$.
    Let $q_i = 2^{-l_i}$. So $\sum q_i \leq 1$.
    We want to show $L = \sum p_i l_i \geq H(X) = -\sum p_i \log_2 p_i$.
    Rearranging: $\sum p_i l_i + \sum p_i \log_2 p_i \geq 0$
    $\sum p_i (l_i + \log_2 p_i) \geq 0$
    $\sum p_i \log_2 (2^{l_i} p_i) \geq 0$

    Consider the expression $\sum_{i=1}^k p_i \log_2 \left(\frac{p_i}{q_i}\right) = D(P || Q)$.
    $D(P || Q) = \sum p_i \log_2 p_i - \sum p_i \log_2 q_i$
    $D(P || Q) = -\sum p_i (-\log_2 p_i) - \sum p_i (-l_i)$
    $D(P || Q) = -H(X) + L$

    Since $D(P || Q) \geq 0$, we have $-H(X) + L \geq 0$, which means $L \geq H(X)$.
    This proof relies on the assumption that we can define a valid distribution $Q$ such that $q_i = 2^{-l_i}$. For a complete code, $\sum 2^{-l_i} = 1$, so we can set $q_i = 2^{-l_i}$. For an incomplete code, $\sum 2^{-l_i} < 1$. In that case, we can introduce a dummy symbol with probability $1 - \sum 2^{-l_i}$ and assign it a codeword of length infinity (or a very large length), which doesn't affect the average length for the original symbols. Alternatively, we can scale the probabilities.

    A cleaner way might be to directly use the convexity of $f(x) = 2^x$.
    $2^L = 2^{\sum p_i l_i} = \prod (2^{l_i})^{p_i}$.
    Let's define $y_i = 2^{l_i}$. So Kraft's inequality is $\sum y_i^{-1} \leq 1$.
    $2^L = \prod y_i^{p_i}$.

    Using AM-GM inequality: $\prod y_i^{p_i} \geq \sum p_i y_i$ if $\sum p_i = 1$. This is not what we want.

    Let's use the convexity of $f(x) = x \log_2 x$.
    The function $f(x) = x \log_2 x$ is convex.
    Consider $L = \sum p_i l_i$.
    We want to show $L \geq -\sum p_i \log_2 p_i$.

    The key is that for any prefix code with lengths $l_1, \ldots, l_k$, there exist probabilities $q_1, \ldots, q_k$ such that $\sum q_i \leq 1$ and $l_i \geq -\log_2 q_i$. If we can construct these $q_i$ from the $l_i$, we can use Gibbs inequality.
    From Kraft's inequality, $\sum_{i=1}^k 2^{-l_i} \leq 1$.
    Define $q_i = 2^{-l_i}$. These $q_i$ are probabilities for *some* distribution. However, they might not sum to 1, and they are derived from the code lengths, not the source probabilities.

    **The actual proof connects the average length to the "dual" distribution.**
    Let $l_i$ be the lengths of a prefix code for a source with probabilities $p_i$.
    We know $\sum_{i=1}^k 2^{-l_i} \leq 1$.
    Let $q_i = 2^{-l_i}$. Then $\sum q_i \leq 1$.
    Consider the average length $L = \sum p_i l_i$.
    We want to show $L \geq H(X) = -\sum p_i \log_2 p_i$.

    Let $P = \{p_1, \ldots, p_k\}$ be the source probability distribution.
    Let $Q = \{2^{-l_1}, \ldots, 2^{-l_k}\}$ be a set of values derived from code lengths.
    We know $\sum q_i \leq 1$. We can "normalize" $Q$ by letting $Q' = \{q_1/\sum q_j, \ldots, q_k/\sum q_j\}$ if $\sum q_j > 0$. If $\sum q_j = 0$, then all $l_i$ are infinite, which is trivial.
    Let $q'_i = \frac{2^{-l_i}}{\sum_{j=1}^k 2^{-l_j}}$. Then $\sum q'_i = 1$.
    Now, $l_i = -\log_2 q'_i - \log_2(\sum_{j=1}^k 2^{-l_j})$.
    $L = \sum p_i l_i = \sum p_i (-\log_2 q'_i - \log_2(\sum_{j=1}^k 2^{-l_j}))$
    $L = -\sum p_i \log_2 q'_i - (\sum p_i) \log_2(\sum_{j=1}^k 2^{-l_j})$
    $L = -\sum p_i \log_2 q'_i - \log_2(\sum_{j=1}^k 2^{-l_j})$

    Using Gibbs inequality $H(P) \geq \sum p_i \log_2 q'_i$:
    $H(X) \geq -\sum p_i \log_2 q'_i$.
    So, $L \geq H(X) - \log_2(\sum_{j=1}^k 2^{-l_j})$.

    Since $\sum_{j=1}^k 2^{-l_j} \leq 1$, then $\log_2(\sum_{j=1}^k 2^{-l_j}) \leq 0$.
    Therefore, $L \geq H(X) - (\text{a non-positive number})$.
    This shows $L \geq H(X)$ if the term $-\log_2(\sum_{j=1}^k 2^{-l_j})$ is positive, which is not guaranteed.

    **Correct Approach using Convexity of $2^x$ and AM-GM:**
    Let $l_i$ be the codeword lengths for a prefix code. Kraft's inequality is $\sum_{i=1}^k 2^{-l_i} \leq 1$.
    We want to show $L = \sum_{i=1}^k p_i l_i \geq H(X) = -\sum_{i=1}^k p_i \log_2 p_i$.
    This is equivalent to showing $\sum p_i \log_2(p_i 2^{l_i}) \geq 0$.

    Consider the function $f(x) = 2^x$. It is convex.
    Let $x_i = l_i$. We need weights. The weights are $p_i$.
    Let's try to relate the sum $\sum 2^{-l_i}$ to the average length.
    Take the logarithm base 2 of Kraft's inequality: $\log_2(\sum_{i=1}^k 2^{-l_i}) \leq 0$.

    A common method involves the relationship between entropy and lengths $l_i$ such that $l_i = -\log_2 p_i$. If such integer lengths exist (i.e., $p_i$ are powers of 2), then $L=H(X)$.
    When $p_i$ are not powers of 2, Huffman coding assigns integer lengths $l_i$ that are "close" to $-\log_2 p_i$, specifically $l_i = \lfloor -\log_2 p_i \rfloor$ or $\lceil -\log_2 p_i \rceil$.
    The bound $L \geq H(X)$ arises from the fact that $l_i$ must be integers and satisfy Kraft's inequality.

    Consider the expression:
    $\sum_{i=1}^k p_i \log_2 \left(\frac{p_i}{2^{-l_i}}\right) = \sum p_i \log_2 p_i - \sum p_i (-l_i) = -H(X) + L$.
    This is the KL divergence between the source distribution $P=\{p_i\}$ and the distribution $Q=\{2^{-l_i}\}$.
    However, $Q=\{2^{-l_i}\}$ is not necessarily a probability distribution because $\sum 2^{-l_i}$ might be less than 1.

    **Let's use the fact that for any set of integers $\{l_i\}$ satisfying $\sum 2^{-l_i} \leq 1$, we have $\sum p_i l_i \geq H(X)$ for any probability distribution $\{p_i\}$.**
    This can be proven using the following lemma:
    **Lemma:** If $\{l_i\}_{i=1}^k$ are integers satisfying $\sum_{i=1}^k 2^{-l_i} \leq 1$, then for any set of non-negative numbers $\{p_i\}_{i=1}^k$ such that $\sum p_i = 1$, it holds that $\sum_{i=1}^k p_i \log_2 (1/p_i) \leq \sum_{i=1}^k p_i l_i$.
    Proof of Lemma:
    Let $q_i = 2^{-l_i}$. Then $\sum q_i \leq 1$.
    Let $P = \{p_1, \ldots, p_k\}$ and $Q' = \{2^{-l_1}, \ldots, 2^{-l_k}\}$.
    Let's use the property that for any $\{p_i\}$ and $\{q_i\}$ with $\sum p_i = 1$, and $l_i = -\log_2 q_i$, we have $\sum p_i l_i = -\sum p_i \log_2 q_i$.
    We know that $H(X) = -\sum p_i \log_2 p_i$.
    We also know that $D(P||Q') = \sum p_i \log_2(p_i/q_i) \geq 0$.
    $D(P||Q') = -\sum p_i \log_2 q_i - (-\sum p_i \log_2 p_i) = \sum p_i l_i - H(X)$.
    So, $L - H(X) \geq 0$, which means $L \geq H(X)$.

    The crucial step is that we can construct $l_i$ from $p_i$ such that Kraft's inequality is satisfied and $l_i$ are integers. Huffman coding achieves this optimally. The bound $L \geq H(X)$ holds for *any* uniquely decodable code.

---

### 5. Shannon's Second Theorem (Channel Coding Theorem) and its relation to Average Length

While Shannon's Second Theorem deals with channel capacity and reliable communication over noisy channels, it builds upon the principles of source coding. The ability to compress data efficiently, as described by the bounds on average length, is a prerequisite for effective channel coding.

**Relevance:**
*   **Data Compression as a Preprocessing Step:** Before transmitting data over a noisy channel, it can be compressed to reduce the number of bits. This reduces the transmission rate and can improve overall system efficiency.
*   **Understanding Information Limits:** Entropy, which defines the lower bound on average length, is also a key component in defining channel capacity. This highlights the interconnectedness of information theory concepts.

**(Referenced in: Goldsmith, Chapter 2; Haykin, Chapter 1)**

---

### 6. Practical Implications and Efficiency

**Key Concept:** The efficiency of a coding scheme is measured by how close its average code length is to the entropy of the source.

**Definition:** The **efficiency** ($\eta$) of a code is defined as:

$\eta = \frac{H(X)}{L}$

**Analysis:**
*   An efficiency of 1 (or 100%) implies that the average code length is equal to the entropy, which is the theoretical best.
*   As shown by Shannon's first theorem, $\eta \leq 1$.
*   Codes like Huffman coding aim to achieve high efficiency by assigning codeword lengths $l_i$ as close as possible to $-\log_2 p(x_i)$.
*   **When probabilities are powers of 2:** If $p(x_i) = 2^{-m_i}$ for some integers $m_i$, then we can construct a code with lengths $l_i = m_i$ such that $L = H(X)$, achieving 100% efficiency.
*   **When probabilities are not powers of 2:** It's impossible to achieve 100% efficiency with uniquely decodable codes. There will always be a gap between $L$ and $H(X)$. This gap is related to the rounding up of $-\log_2 p(x_i)$ to the nearest integer codeword length.

**Example:**
Consider a source with probabilities:
$p(x_1) = 0.5$
$p(x_2) = 0.25$
$p(x_3) = 0.125$
$p(x_4) = 0.125$

Entropy:
$H(X) = -(0.5 \log_2 0.5 + 0.25 \log_2 0.25 + 0.125 \log_2 0.125 + 0.125 \log_2 0.125)$
$H(X) = -(0.5(-1) + 0.25(-2) + 0.125(-3) + 0.125(-3))$
$H(X) = -(-0.5 - 0.5 - 0.375 - 0.375) = -(-1.75) = 1.75$ bits/symbol.

Using Huffman coding, we would assign lengths:
$l(x_1) = -\log_2 0.5 = 1$
$l(x_2) = -\log_2 0.25 = 2$
$l(x_3) = -\log_2 0.125 = 3$
$l(x_4) = -\log_2 0.125 = 3$

Average Length ($L$):
$L = (0.5 \times 1) + (0.25 \times 2) + (0.125 \times 3) + (0.125 \times 3)$
$L = 0.5 + 0.5 + 0.375 + 0.375 = 1.75$ bits/symbol.

In this case, the average length equals the entropy, so the efficiency is 100%. This is possible because all probabilities are powers of 2.

**Example 2 (Probabilities not powers of 2):**
Consider a source with probabilities:
$p(x_1) = 0.4$
$p(x_2) = 0.3$
$p(x_3) = 0.2$
$p(x_4) = 0.1$

Entropy:
$H(X) = -(0.4 \log_2 0.4 + 0.3 \log_2 0.3 + 0.2 \log_2 0.2 + 0.1 \log_2 0.1)$
$H(X) \approx -(0.4 \times -1.32) + -(0.3 \times -1.74) + -(0.2 \times -2.32) + -(0.1 \times -3.32)$
$H(X) \approx 0.528 + 0.522 + 0.464 + 0.332 = 1.846$ bits/symbol.

Huffman coding would assign lengths approximately:
$-\log_2 0.4 \approx 1.32$, so $l_1 = 2$
$-\log_2 0.3 \approx 1.74$, so $l_2 = 2$
$-\log_2 0.2 \approx 2.32$, so $l_3 = 3$
$-\log_2 0.1 \approx 3.32$, so $l_4 = 4$

*(Note: The actual Huffman code generation involves building a tree. Let's assume these lengths for illustration.)*

Check Kraft's inequality: $2^{-2} + 2^{-2} + 2^{-3} + 2^{-4} = 0.25 + 0.25 + 0.125 + 0.0625 = 0.6875 \leq 1$. This set of lengths is valid.

Average Length ($L$):
$L = (0.4 \times 2) + (0.3 \times 2) + (0.2 \times 3) + (0.1 \times 4)$
$L = 0.8 + 0.6 + 0.6 + 0.4 = 2.4$ bits/symbol.

Efficiency ($\eta$):
$\eta = \frac{H(X)}{L} = \frac{1.846}{2.4} \approx 0.77$ or 77%.

This shows that when probabilities are not powers of 2, the average code length is greater than the entropy, and the efficiency is less than 100%.

**(Referenced in: Cover & Thomas, Chapter 5; Goldsmith, Chapter 2)**

---

### 7. Arithmetic Coding

**Key Concept:** Arithmetic coding is a more advanced form of entropy coding that can achieve compression closer to the theoretical entropy limit than Huffman coding, especially for sources with skewed probability distributions.

**How it Works:** Instead of assigning codewords of integer lengths to individual symbols, arithmetic coding represents an entire message (or a sequence of symbols) as a single fraction within the unit interval [0, 1). The interval is recursively subdivided based on the probabilities of the symbols.

**Advantage:** The effective codeword length for a symbol in arithmetic coding can be $-\log_2 p(x_i)$, allowing for fractional lengths and thus achieving average lengths very close to the entropy, even when probabilities are not powers of 2.

**Bounds on Average Length in Arithmetic Coding:**
For arithmetic coding, the average length of the coded representation of a sequence of $n$ symbols $x_1, x_2, \ldots, x_n$ is approximately $\frac{H(X_1, X_2, \ldots, X_n)}{n}$. For a memoryless source, this is $H(X)$ bits per symbol.

**Theoretical Limit:** The average length achieved by arithmetic coding is very close to $H(X)$, limited by factors like finite precision arithmetic and the need to flush the final codeword.

**(Referenced in: Cover & Thomas, Chapter 6; Goldsmith, Chapter 2)**

---

### 8. Summary of Bounds

*   **Fundamental Lower Bound:** For any uniquely decodable code (including prefix codes), the average code length $L$ for a discrete memoryless source $X$ is bounded by its entropy:
    $L \geq H(X)$

*   **Achievability:** Shannon's Source Coding Theorem states that for any $\epsilon > 0$, there exists a uniquely decodable code whose average length $L$ satisfies $H(X) \leq L < H(X) + \epsilon$. This means that for long sequences, we can get arbitrarily close to the entropy.

*   **Huffman Coding:** Provides an optimal prefix code, meaning it achieves the minimum average length among all prefix codes for a given source. Its average length is close to $H(X)$, but may be slightly higher if probabilities are not powers of 2.

*   **Arithmetic Coding:** Can achieve average lengths even closer to $H(X)$ by allowing fractional codeword lengths conceptually.

---

### 9. Practice Questions and Exercises

**Question 1:**
A discrete memoryless source has the following probability distribution:
$p(a) = 0.5$, $p(b) = 0.25$, $p(c) = 0.125$, $p(d) = 0.125$.
Calculate the entropy of this source. If a prefix code is designed for this source, what is the theoretical lower bound on its average code length?

**Answer 1:**
Entropy $H(X) = -(0.5 \log_2 0.5 + 0.25 \log_2 0.25 + 0.125 \log_2 0.125 + 0.125 \log_2 0.125)$
$H(X) = -(0.5 \times -1 + 0.25 \times -2 + 0.125 \times -3 + 0.125 \times -3)$
$H(X) = -(-0.5 - 0.5 - 0.375 - 0.375) = 1.75$ bits/symbol.
The theoretical lower bound on the average code length is equal to the entropy, which is 1.75 bits/symbol.

**Question 2:**
Consider a source with $p(x_1) = 0.6$, $p(x_2) = 0.4$.
a) Calculate the entropy of the source.
b) What is the theoretical lower bound on the average code length?
c) If a prefix code assigns lengths $l(x_1) = 1$ and $l(x_2) = 2$, is this a valid prefix code? Calculate its average length and efficiency.
d) Is it possible to achieve 100% efficiency for this source using a prefix code? Explain why or why not.

**Answer 2:**
a) Entropy $H(X) = -(0.6 \log_2 0.6 + 0.4 \log_2 0.4)$
$H(X) \approx -(0.6 \times -0.737) + -(0.4 \times -1.322)$
$H(X) \approx 0.442 + 0.529 = 0.971$ bits/symbol.

b) The theoretical lower bound on the average code length is $H(X) = 0.971$ bits/symbol.

c) Valid prefix code check using Kraft's inequality:
$\sum 2^{-l_i} = 2^{-1} + 2^{-2} = 0.5 + 0.25 = 0.75$.
Since $0.75 \leq 1$, this is a valid prefix code.
Average Length ($L$):
$L = p(x_1)l(x_1) + p(x_2)l(x_2) = (0.6 \times 1) + (0.4 \times 2) = 0.6 + 0.8 = 1.4$ bits/symbol.
Efficiency ($\eta$):
$\eta = \frac{H(X)}{L} = \frac{0.971}{1.4} \approx 0.694$ or 69.4%.

d) No, it is not possible to achieve 100% efficiency for this source using a prefix code. This is because the probabilities (0.6 and 0.4) are not negative powers of 2. To achieve 100% efficiency, the ideal codeword lengths would be $-\log_2 0.6 \approx 0.737$ and $-\log_2 0.4 \approx 1.322$. Since codeword lengths must be integers, they have to be rounded up, leading to an average length greater than the entropy.

**Question 3:**
Explain why the entropy of a source serves as a fundamental lower bound for the average code length of any uniquely decodable code. Reference the relevant theorem.

**Answer 3:**
The entropy $H(X)$ of a discrete memoryless source $X$ represents the average amount of information per symbol produced by the source. Shannon's First Theorem (Source Coding Theorem) states that the average code length $L$ of any uniquely decodable code for this source must satisfy $L \geq H(X)$. This is because any uniquely decodable code must be able to uniquely reconstruct the original sequence of symbols. The entropy quantifies the irreducible uncertainty in the source. If a code were to achieve an average length less than the entropy, it would imply that more information is being discarded or represented than the source's inherent information content, which is impossible without information loss. The proof relies on Kraft's inequality and the Gibbs inequality, showing that the discrepancy between the codeword lengths $l_i$ and the ideal lengths $-\log_2 p(x_i)$ leads to $L \geq H(X)$.

---

### Important Points to Remember:

*   **Entropy (H(X))** is the theoretical minimum average number of bits required to represent each symbol of a source.
*   **Average Code Length (L)** is the expected length of a codeword for a given coding scheme.
*   **Shannon's First Theorem:** States that $L \geq H(X)$ for any uniquely decodable code.
*   **Kraft's Inequality:** $\sum_{i=1}^k 2^{-l_i} \leq 1$ is a necessary and sufficient condition for the existence of a prefix code with lengths $l_i$.
*   **100% Efficiency** is achievable only when the source symbol probabilities are negative powers of the logarithm base (e.g., $1/2, 1/4, 1/8$ for binary codes).
*   **Huffman coding** achieves optimal prefix coding but might not reach 100% efficiency.
*   **Arithmetic coding** can achieve compression ratios very close to the entropy limit.

---

This concludes the study notes for "Bounds on Average Length" from Module 1: Entropy. Ensure you review the related concepts of entropy, conditional entropy, and mutual information for a complete understanding of information theory measures.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
