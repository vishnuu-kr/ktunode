---
title: "Review of Information theory"
subject: "QUANTUM COMPUTING"
module: "Module 1: Review of Basics Concepts"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bd1f"
status: "completed"
scrapedAt: "2026-05-20T16:56:49.422Z"
---
# Quantum Computing: Module 1 - Review of Information Theory

## Introduction

This module reviews the foundational concepts of Information Theory crucial for understanding Quantum Computing. We'll explore key definitions, theorems, and examples to bridge the gap between classical and quantum information.

**Learning Outcomes:**

*   Understand the concept of entropy as a measure of uncertainty.
*   Calculate the entropy of a discrete random variable.
*   Explain the concept of mutual information and its relation to entropy.
*   Understand the implications of Shannon's Source Coding Theorem.
*   Apply these concepts in the context of data compression.

## 1. Information and Uncertainty

*   **Information:**  Reduces uncertainty about the outcome of an event.  The more surprising an event, the more information it conveys.

*   **Uncertainty:**  A measure of the lack of knowledge about an outcome. Entropy quantifies this uncertainty.

## 2. Entropy (Shannon Entropy)

*   **Definition:** Entropy, denoted as H(X), quantifies the average amount of information needed to describe the outcome of a random variable X.  It represents the average level of "surprise" inherent in possible outcomes of the variable.

*   **Formula:** For a discrete random variable X with possible outcomes {x₁, x₂, ..., xₙ} and corresponding probabilities {p₁, p₂, ..., pₙ}, the entropy is:

    ```
    H(X) = - Σ pᵢ log₂ pᵢ
    ```

    Where the summation is over all possible values of i from 1 to n. The base of the logarithm is typically 2, resulting in entropy measured in *bits*.

*   **Units:**  bits (when log base 2 is used).

*   **Properties:**
    *   *H(X) ≥ 0*: Entropy is always non-negative.
    *   *H(X) ≤ log₂ n*: The maximum entropy occurs when all outcomes are equally likely.

*   **Interpretation:**
    *   *Low Entropy:* Indicates that the outcome is predictable (little surprise).
    *   *High Entropy:* Indicates that the outcome is unpredictable (high surprise).

*   **Example:** Consider a fair coin toss. X can be Head (H) or Tail (T), each with probability 1/2.

    ```
    H(X) = - (1/2) log₂(1/2) - (1/2) log₂(1/2) = - (1/2)(-1) - (1/2)(-1) = 1 bit
    ```

    A biased coin with P(H) = 0.9 and P(T) = 0.1 has:

    ```
    H(X) = - (0.9) log₂(0.9) - (0.1) log₂(0.1) ≈ 0.469 bits
    ```

    Notice that the biased coin has lower entropy, as we're more certain about the outcome.

## 3. Joint Entropy

*   **Definition:** The joint entropy of two random variables X and Y, denoted as H(X, Y), measures the uncertainty associated with knowing both X and Y.

*   **Formula:**
    ```
    H(X, Y) = - Σ Σ p(xᵢ, yⱼ) log₂ p(xᵢ, yⱼ)
    ```
    Where p(xᵢ, yⱼ) is the joint probability of X = xᵢ and Y = yⱼ.

*   **Relationship to Individual Entropies:** H(X, Y) ≤ H(X) + H(Y).  Equality holds if X and Y are independent.

## 4. Conditional Entropy

*   **Definition:** The conditional entropy of X given Y, denoted as H(X|Y), measures the uncertainty of X after knowing the value of Y.

*   **Formula:**
    ```
    H(X|Y) = - Σ Σ p(xᵢ, yⱼ) log₂ p(xᵢ|yⱼ)
             = Σ p(yⱼ) H(X|Y = yⱼ)
    ```
    Where p(xᵢ|yⱼ) is the conditional probability of X = xᵢ given Y = yⱼ.

*   **Chain Rule for Entropy:** H(X, Y) = H(Y) + H(X|Y) = H(X) + H(Y|X)

*   **Intuition:** H(X|Y) represents the average amount of information needed to describe X, *knowing* the value of Y.

## 5. Mutual Information

*   **Definition:** Mutual information, denoted as I(X; Y), quantifies the amount of information that one random variable tells us about another.  It measures the reduction in uncertainty about X due to knowing Y (or vice versa).

*   **Formula:**
    ```
    I(X; Y) = H(X) - H(X|Y) = H(Y) - H(Y|X) = H(X) + H(Y) - H(X, Y)
    ```

*   **Properties:**
    *   *I(X; Y) = I(Y; X)*: Symmetric.
    *   *I(X; Y) ≥ 0*: Always non-negative.
    *   *I(X; Y) = 0* if and only if X and Y are independent.

*   **Interpretation:**
    *   *High I(X; Y):* X and Y are highly dependent; knowing one significantly reduces uncertainty about the other.
    *   *Low I(X; Y):* X and Y are nearly independent; knowing one provides little information about the other.

*   **Example:** Let X represent whether it's raining, and Y represent whether someone is carrying an umbrella.  If raining and carrying an umbrella are strongly correlated, then I(X; Y) will be high.

## 6. Shannon's Source Coding Theorem (Lossless Data Compression)

*   **Statement:**  Shannon's Source Coding Theorem states that the average number of bits required to represent the output of a discrete memoryless source (DMS) is bounded below by the entropy of the source.

*   **Implications:**
    *   It defines a fundamental limit on data compression.
    *   It provides a theoretical justification for data compression algorithms.
    *   It shows that we can compress data *on average* to a length close to its entropy.

*   **Mathematically:** For a sequence of *n* independent and identically distributed (i.i.d.) random variables X₁, X₂, ..., Xₙ from a source X,  there exists a code such that the average code length *L* per source symbol satisfies:

    ```
    H(X) ≤ L < H(X) + ε
    ```

    for arbitrarily small ε > 0, as n approaches infinity.

*   **Practical Significance:**  This theorem tells us that we can, in principle, compress a sequence of symbols such that each symbol requires approximately H(X) bits on average, but we cannot compress it further without losing information (lossless compression).

*   **Key Concepts:**
    *   **Discrete Memoryless Source (DMS):**  A source that emits symbols independently and according to a fixed probability distribution.

## 7. Data Compression

*   Information theory provides the foundation for many data compression techniques.

*   **Lossless Compression:**  Techniques that allow for perfect reconstruction of the original data after decompression (e.g., Huffman coding, Lempel-Ziv algorithms).

*   **Lossy Compression:**  Techniques that discard some information to achieve higher compression ratios (e.g., JPEG, MP3).  These are suitable for data where some loss of fidelity is acceptable.

*   **Huffman Coding:**  A popular lossless compression algorithm that assigns shorter codes to more frequent symbols and longer codes to less frequent symbols.  Its average code length approaches the entropy of the source.

## Important Points to Remember

*   Entropy is a fundamental measure of uncertainty.
*   Mutual information quantifies the dependence between random variables.
*   Shannon's Source Coding Theorem sets a lower bound on lossless data compression.
*   Understanding these concepts is essential for grasping the principles of quantum information theory and quantum data compression.

## Practice Questions/Exercises

1.  **Entropy Calculation:** A random variable X can take on the values A, B, C, and D with probabilities 1/2, 1/4, 1/8, and 1/8 respectively.  Calculate the entropy H(X).

    **Answer:**
    ```
    H(X) = - (1/2)log₂(1/2) - (1/4)log₂(1/4) - (1/8)log₂(1/8) - (1/8)log₂(1/8)
         = - (1/2)(-1) - (1/4)(-2) - (1/8)(-3) - (1/8)(-3)
         = 1/2 + 1/2 + 3/8 + 3/8
         = 1 + 3/4 = 1.75 bits
    ```

2.  **Mutual Information Example:**  Let X be a binary random variable with P(X=0) = p and P(X=1) = 1-p.  Let Y = X with probability q and Y = 1-X with probability 1-q. Calculate I(X;Y).

    **Answer:**

    This problem requires using the formula I(X;Y) = H(X) - H(X|Y) and calculating H(X|Y).

    *   H(X) = -p log₂(p) - (1-p) log₂(1-p)
    *   H(X|Y) = P(Y=0)H(X|Y=0) + P(Y=1)H(X|Y=1)

    Calculating  P(Y=0), P(Y=1), H(X|Y=0), H(X|Y=1)  requires using the given conditional probabilities. This will yield a complex expression that demonstrates the relationship between q and the mutual information.  (This is a more advanced question)

3.  **Conceptual Question:** Explain in your own words what entropy represents in the context of a communication system.

    **Answer:** Entropy represents the average amount of "surprise" or uncertainty associated with the messages sent by the source in the communication system. A higher entropy source emits more unpredictable messages, requiring more bits on average to represent them efficiently.

4.  **Source Coding Theorem Implication:** What does Shannon's Source Coding Theorem tell us about the limits of lossless data compression?

    **Answer:** Shannon's Source Coding Theorem tells us that we cannot losslessly compress data to a size smaller than its entropy on average. The entropy represents the theoretical lower bound for the number of bits needed to represent the data without losing information.

5.  **Independent Variables:** If two random variables X and Y are independent, what is their mutual information I(X;Y)?

    **Answer:** If X and Y are independent, then their mutual information I(X;Y) is 0.  This is because knowing the value of one variable provides no information about the value of the other. H(X|Y) = H(X), and consequently, I(X;Y) = H(X) - H(X|Y) = H(X) - H(X) = 0.
