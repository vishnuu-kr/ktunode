---
title: "Huffman code"
subject: "ADVANCED COMMUNICATION THEORY"
module: "Module 1: Entropy"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fecf8"
status: "completed"
scrapedAt: "2026-05-23T17:58:28.736Z"
---
# ADVANCED COMMUNICATION THEORY
## Module 1: Entropy
### Topic: Huffman Code

---

**Module/Topic Relevance:**
This topic directly supports **Course Outcome 2 (CO2): Apply source coding theorem for data compression.** Huffman coding is a practical and widely used method for achieving data compression, a fundamental aspect of efficient communication. It demonstrates how to represent data with variable-length codes based on symbol probabilities, thereby minimizing the average code length.

---

### 1. Introduction to Source Coding and Data Compression

Source coding, also known as data compression, is the process of representing information using fewer bits than the original representation. The primary goal is to reduce the bandwidth or storage required for data transmission and storage.

**Key Concept: Information Theory and Compression**
Information theory, pioneered by Claude Shannon, provides a theoretical framework for understanding the limits of data compression. The **Source Coding Theorem** states that it is possible to compress a source of information to a rate arbitrarily close to its entropy without losing information (lossless compression).

**Textbook Reference:**
*   **Elements of Information Theory by Joy A Thomas, Thomas M Cover (Wiley-Interscience, 2/e 2006):** Chapter 5 discusses Source Coding and the Source Coding Theorem in detail.

---

### 2. The Need for Variable-Length Coding

**Problem:** Fixed-length codes assign the same number of bits to every symbol, regardless of its frequency. This is inefficient when symbol frequencies vary significantly.

**Example:**
Consider a message made up of symbols A, B, C, D with the following probabilities:
*   P(A) = 0.5
*   P(B) = 0.25
*   P(C) = 0.125
*   P(D) = 0.125

If we use a fixed-length code (e.g., 2 bits per symbol):
*   A: 00
*   B: 01
*   C: 10
*   D: 11

Average code length = 0.5*(2) + 0.25*(2) + 0.125*(2) + 0.125*(2) = 2 bits/symbol.

However, the entropy of this source is:
H(X) = - Σ p(x) log₂(p(x))
H(X) = -(0.5 log₂(0.5) + 0.25 log₂(0.25) + 0.125 log₂(0.125) + 0.125 log₂(0.125))
H(X) = -(0.5*(-1) + 0.25*(-2) + 0.125*(-3) + 0.125*(-3))
H(X) = -(-0.5 - 0.5 - 0.375 - 0.375) = 1.75 bits/symbol.

We are using 2 bits/symbol, which is more than the theoretical minimum of 1.75 bits/symbol.

**Solution:** Variable-length coding can assign shorter codes to more frequent symbols and longer codes to less frequent symbols, thereby reducing the average code length.

---

### 3. Huffman Coding Algorithm

Huffman coding is a greedy algorithm that constructs an optimal prefix code for a given set of symbols and their probabilities. A prefix code means that no codeword is a prefix of another codeword, which is essential for unambiguous decoding.

**Algorithm Steps:**

1.  **Initialization:** Create a list of all symbols with their probabilities. Each symbol is considered a leaf node in a binary tree, with its probability as its weight.
2.  **Iteration:**
    *   Select the two nodes with the smallest probabilities from the list.
    *   Create a new parent node whose probability is the sum of the probabilities of the two selected nodes.
    *   Make the two selected nodes the left and right children of the new parent node. Conventionally, assign '0' to the edge leading to the left child and '1' to the edge leading to the right child (or vice-versa, as long as it's consistent).
    *   Remove the two selected nodes from the list and add the new parent node.
3.  **Termination:** Repeat step 2 until only one node (the root of the Huffman tree) remains in the list.
4.  **Codeword Generation:** Traverse the tree from the root to each leaf node. The sequence of 0s and 1s along the path forms the codeword for the symbol at that leaf node.

**Key Concepts:**
*   **Prefix Code:** No codeword is a prefix of another. This allows for immediate decoding as soon as a complete codeword is received.
*   **Optimal Prefix Code:** A prefix code that minimizes the expected codeword length for a given set of symbol probabilities. Huffman coding guarantees this optimality.
*   **Greedy Algorithm:** At each step, the algorithm makes the locally optimal choice (combining the two least probable symbols) in the hope of finding a global optimum.

**Textbook Reference:**
*   **Elements of Information Theory by Joy A Thomas, Thomas M Cover (Wiley-Interscience, 2/e 2006):** Section 5.2 describes the Huffman coding algorithm.
*   **Wireless Communications by Andrea Goldsmith (Cambridge University Press, 1/e, 2005):** While not the primary focus, Section 1.3.2 touches upon source coding and its efficiency.
*   **Communication Systems by Simon Haykin (John Wiley and Sons Inc, 4e, 2020):** Chapter 12 discusses source coding and its application to digital communications, including Huffman coding.

---

### 4. Example of Huffman Coding

Let's apply the Huffman algorithm to the previous example:
Symbols: A, B, C, D
Probabilities: P(A) = 0.5, P(B) = 0.25, P(C) = 0.125, P(D) = 0.125

**Step 1: Initial List of Nodes**
(A: 0.5), (B: 0.25), (C: 0.125), (D: 0.125)

**Step 2: Iterations**

*   **Iteration 1:**
    *   Select C (0.125) and D (0.125) (smallest probabilities).
    *   Create new node CD with probability 0.125 + 0.125 = 0.25.
    *   Assign C to the left (0), D to the right (1) (or vice-versa).
    *   List: (A: 0.5), (B: 0.25), (CD: 0.25)

*   **Iteration 2:**
    *   Select B (0.25) and CD (0.25) (two smallest probabilities).
    *   Create new node BCD with probability 0.25 + 0.25 = 0.5.
    *   Assign B to the left (0), CD to the right (1).
    *   List: (A: 0.5), (BCD: 0.5)

*   **Iteration 3:**
    *   Select A (0.5) and BCD (0.5) (the remaining two nodes).
    *   Create new node ABCD (root) with probability 0.5 + 0.5 = 1.0.
    *   Assign A to the left (0), BCD to the right (1).
    *   List: (ABCD: 1.0)

**Step 3: Huffman Tree**

```
        (1.0)
       /     \
      /       \
   (0.5)     (0.5)
   /   \     /   \
  A     (0.25) B  (0.25)
(0.5)    /    \     /    \
        C(0.125) D(0.125)
```
*(Note: The assignment of 0/1 to branches can be swapped for left/right children, leading to a different but equally optimal set of codewords)*

**Step 4: Codeword Generation (assuming left=0, right=1)**

*   A: Path from root is Left -> **0**
*   B: Path from root is Right -> Left -> **10**
*   C: Path from root is Right -> Right -> Left -> **110**
*   D: Path from root is Right -> Right -> Right -> **111**

**Analysis:**

*   **Codewords:** A=0, B=10, C=110, D=111
*   **Average Code Length:**
    *   (0.5 * 1 bit) + (0.25 * 2 bits) + (0.125 * 3 bits) + (0.125 * 3 bits)
    *   0.5 + 0.5 + 0.375 + 0.375 = **1.75 bits/symbol**

This is exactly equal to the entropy of the source, demonstrating the optimality of Huffman coding.

---

### 5. Properties and Advantages of Huffman Coding

*   **Optimality:** Generates an optimal prefix code in terms of minimizing the average code length for a given set of symbol probabilities.
*   **Uniqueness:** For a given set of probabilities, the resulting average code length is unique, although the actual codewords might differ based on arbitrary choices (e.g., which of two equal-probability nodes to combine first, or which branch gets '0' and which gets '1').
*   **Prefix Property:** Ensures unambiguous decoding.
*   **Simplicity:** Relatively easy to implement.
*   **Efficiency:** Achieves compression close to the entropy limit.

**Important Point to Remember:** Huffman coding is optimal for **symbol-by-symbol coding** where symbols are encoded independently. It assumes that the probabilities of symbols are known in advance.

**Textbook Reference:**
*   **Elements of Information Theory by Joy A Thomas, Thomas M Cover (Wiley-Interscience, 2/e 2006):** Chapter 5 further elaborates on the optimality proofs and properties.

---

### 6. Limitations of Huffman Coding

*   **Two-Pass Algorithm:** Requires two passes over the data. The first pass counts symbol frequencies, and the second pass generates the compressed data using the generated codebook. This can be a disadvantage in streaming applications where only one pass is possible.
*   **Requires Probability Knowledge:** The algorithm needs the probabilities of the source symbols. If these probabilities are not known or change dynamically, it might require adaptive Huffman coding or a different compression technique.
*   **Not Optimal for Grouping Symbols:** Huffman coding encodes symbols individually. If there are correlations between symbols or patterns in their occurrence, coding symbol groups (e.g., using arithmetic coding or Lempel-Ziv variants) can achieve better compression.

---

### 7. Relation to Course Outcomes

*   **CO2: Apply source coding theorem for data compression.** Huffman coding is a practical application of the source coding theorem. By constructing variable-length codes based on symbol probabilities, it aims to achieve a compression rate close to the source entropy, as predicted by the theorem.

---

### 8. Practice Questions and Answers

**Question 1:**
A discrete memoryless source has the following probability distribution for its symbols:
$P(X_1) = 0.4$, $P(X_2) = 0.3$, $P(X_3) = 0.2$, $P(X_4) = 0.1$.
Construct a Huffman code for this source and calculate its average code length.

**Answer 1:**
**1. Initialization:**
Nodes: $(X_1: 0.4), (X_2: 0.3), (X_3: 0.2), (X_4: 0.1)$

**2. Iterations:**
*   Combine $X_4$ (0.1) and $X_3$ (0.2) -> New Node $N_1$ (0.3). $X_4=0, X_3=1$ (or vice-versa).
    List: $(X_1: 0.4), (X_2: 0.3), (N_1: 0.3)$
*   Combine $X_2$ (0.3) and $N_1$ (0.3) -> New Node $N_2$ (0.6). $X_2=0, N_1=1$ (or vice-versa).
    List: $(X_1: 0.4), (N_2: 0.6)$
*   Combine $X_1$ (0.4) and $N_2$ (0.6) -> Root (1.0). $X_1=0, N_2=1$ (or vice-versa).

**3. Huffman Tree:**
```
        (1.0)
       /     \
      /       \
   (0.4)     (0.6)
   /         /   \
 X1        X2    (0.3)
          (0.3)  /    \
                X4    X3
               (0.1) (0.2)
```
*(Assuming left=0, right=1 for clarity)*

**4. Codewords:**
*   $X_1$: 0 (Length 1)
*   $X_2$: 10 (Length 2)
*   $X_3$: 111 (Length 3)
*   $X_4$: 110 (Length 3)

**5. Average Code Length:**
$L_{avg} = \sum_{i=1}^{4} P(X_i) \cdot length(X_i)$
$L_{avg} = (0.4 \times 1) + (0.3 \times 2) + (0.2 \times 3) + (0.1 \times 3)$
$L_{avg} = 0.4 + 0.6 + 0.6 + 0.3$
$L_{avg} = 1.9$ bits/symbol

**Entropy Calculation (for comparison):**
$H(X) = -(0.4 \log_2 0.4 + 0.3 \log_2 0.3 + 0.2 \log_2 0.2 + 0.1 \log_2 0.1)$
$H(X) \approx -(0.4 \times -1.32) - (0.3 \times -1.74) - (0.2 \times -2.32) - (0.1 \times -3.32)$
$H(X) \approx 0.528 + 0.522 + 0.464 + 0.332 \approx 1.846$ bits/symbol
The average code length (1.9 bits/symbol) is close to the entropy (1.846 bits/symbol).

---

**Question 2:**
Why is a prefix code essential for unambiguous decoding in source coding?

**Answer 2:**
A prefix code ensures that no codeword is a prefix of another codeword. This means that as soon as a sequence of bits matching a codeword is received, the decoder can unambiguously identify that symbol and start decoding the next codeword immediately. If a codeword could be a prefix of another, the decoder would not know whether to stop and decode the current symbol or wait for more bits to form a longer potential codeword.

**Example:** If codewords were A="0" and B="01", receiving "01" would be ambiguous. Is it symbol A followed by something else, or is it symbol B? With a prefix code, e.g., A="0" and B="10", receiving "0" clearly means A, and receiving "10" clearly means B.

---

### 9. Important Points to Remember

*   **Huffman coding** is a method for **lossless data compression**.
*   It assigns **variable-length codes** based on symbol **probabilities**.
*   The goal is to minimize the **average code length**, bringing it close to the source **entropy**.
*   It generates **optimal prefix codes**.
*   The algorithm is **greedy**, combining the two least probable symbols at each step.
*   Requires **two passes** over the data and **known symbol probabilities**.
*   Essential for understanding practical data compression techniques and their theoretical underpinnings in information theory.

---

This concludes the notes on Huffman coding. It provides a foundational understanding of a key source coding technique and its relation to information theory principles.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
