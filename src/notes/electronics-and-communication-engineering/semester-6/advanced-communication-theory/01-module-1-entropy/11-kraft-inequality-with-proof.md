---
title: "Kraft Inequality (with proof)"
subject: "ADVANCED COMMUNICATION THEORY"
module: "Module 1: Entropy"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fecf6"
status: "completed"
scrapedAt: "2026-05-23T17:58:27.257Z"
---
# Advanced Communication Theory: Module 1 - Entropy

## Topic: Kraft Inequality (with proof)

### 1. Introduction

This section delves into the fundamental **Kraft Inequality**, a cornerstone in the theory of **prefix codes** (also known as instantaneous codes). Prefix codes are crucial in source coding and data compression because they allow for unambiguous decoding of a sequence of symbols. The Kraft Inequality provides a necessary and sufficient condition for the existence of a prefix code with a given set of codeword lengths.

**Key Concepts:**

*   **Source Coding:** The process of representing information from a source using a code, typically with the goal of compression or error detection/correction.
*   **Prefix Code (Instantaneous Code):** A code where no codeword is a prefix of another codeword. This property ensures that as soon as a complete codeword is received, it can be uniquely identified without waiting for subsequent bits.
*   **Codeword Lengths:** The number of bits in a specific codeword.
*   **Alphabet:** The set of symbols from which codewords are constructed (e.g., binary alphabet {0, 1}).

**Learning Outcomes Covered:**

*   This topic directly contributes to **CO1: Explain information theory measures such as entropy, conditional entropy, mutual information**. While not directly calculating entropy, understanding prefix codes and their efficiency is intimately linked to entropy as the theoretical lower bound on average codeword length.
*   It is foundational for **CO2: Apply source coding theorem for data compression**. The Kraft Inequality is essential for constructing optimal prefix codes that approach the entropy limit.

**Textbook/Reference Mentions:**

*   **Elements of Information Theory by Joy A Thomas, Thomas M Cover:** This is the primary resource for information theory concepts, including the Kraft Inequality. Chapters related to source coding will cover this extensively.
*   **Wireless Communications by Andrea Goldsmith:** While focused on wireless, Goldsmith will likely touch upon source coding and its role in efficient data transmission.
*   **Communication Systems by Simon Haykin:** Haykin's comprehensive coverage of communication systems will include digital communication principles, where source coding and efficient representation are vital.

### 2. Prefix Codes

A prefix code is a set of codewords $C = \{c_1, c_2, \dots, c_m\}$, where each $c_i$ is a sequence of symbols from an alphabet $\Sigma$, such that for any two distinct codewords $c_i$ and $c_j$ ($i \neq j$), $c_i$ is not a prefix of $c_j$.

**Example:**

Consider a binary alphabet $\Sigma = \{0, 1\}$.

*   **Prefix Code:** $C = \{0, 10, 11\}$
    *   $0$ is not a prefix of $10$ or $11$.
    *   $10$ is not a prefix of $0$ or $11$.
    *   $11$ is not a prefix of $0$ or $10$.
*   **Not a Prefix Code:** $C = \{0, 01, 1\}$
    *   Here, $0$ is a prefix of $01$. This code is not a prefix code.

**Why are Prefix Codes Important?**

Prefix codes allow for **instantaneous decoding**. When a sequence of bits is received, the decoder can identify a codeword as soon as it is completed, without needing to look ahead. This simplifies the decoding process significantly.

**Visualizing Prefix Codes with Trees:**

Prefix codes can be represented using **binary trees** (for binary alphabets).

*   Each internal node represents a partial codeword.
*   Each leaf node represents a complete codeword.
*   The path from the root to a leaf defines the codeword.
*   The prefix property ensures that no codeword corresponds to an internal node; all codewords correspond to leaf nodes.

**Example:** For $C = \{0, 10, 11\}$:

```
      (root)
      /    \
     0      1
           /  \
          0    1
         (10) (11)
```

Here, $0$ is a codeword (a leaf). $10$ is a codeword (a leaf). $11$ is a codeword (a leaf). The path to $1$ is an internal node and not a codeword itself, thus ensuring no codeword is a prefix of another.

### 3. The Kraft Inequality

The Kraft Inequality, often referred to as the **Kraft-McMillan Inequality**, provides a condition on the lengths of codewords in a prefix code.

**Statement:**

For any uniquely decodable code $C = \{c_1, c_2, \dots, c_m\}$ with codewords of length $l_1, l_2, \dots, l_m$ over an alphabet of size $D$, the following inequality must hold:

$$ \sum_{i=1}^{m} D^{-l_i} \le 1 $$

*   **For a prefix code:** The inequality $\sum_{i=1}^{m} D^{-l_i} \le 1$ is a **necessary and sufficient condition** for the existence of such a prefix code.
*   **For uniquely decodable codes (not necessarily prefix):** The inequality is only a necessary condition.

**Interpretation:**

The term $D^{-l_i}$ can be interpreted as the "fraction of the code space" occupied by the codeword $c_i$. For a binary alphabet ($D=2$), $2^{-l_i}$ is the probability assigned to a codeword of length $l_i$ if we were to construct an optimal prefix code where codeword lengths are inversely related to their probabilities. The sum of these fractions cannot exceed 1, as it would imply that we are trying to assign more "code space" than is available.

**Impact on Optimal Codes:**

*   If the sum is exactly 1 ($\sum_{i=1}^{m} D^{-l_i} = 1$), the code is called a **complete code**. Complete prefix codes are considered "full" or "saturated" and do not waste any code space.
*   The Kraft Inequality is fundamental to proving the **Source Coding Theorem**, which states that there exists a prefix code for a source with entropy $H(X)$ such that the average codeword length $L$ satisfies $H(X) \le L < H(X) + 1$.

### 4. Proof of the Kraft Inequality (for Prefix Codes)

We will prove the Kraft Inequality for prefix codes using the tree representation.

**Assumptions:**

*   Alphabet size is $D$.
*   We have $m$ codewords: $c_1, c_2, \dots, c_m$.
*   The lengths of these codewords are $l_1, l_2, \dots, l_m$.
*   The code is a prefix code.

**Proof using Tree Representation:**

1.  **Construct a Binary Tree:** For a prefix code over an alphabet of size $D$, we can visualize its structure using a $D$-ary tree. Each codeword corresponds to a leaf node in this tree. The prefix property ensures that no codeword corresponds to an internal node.

2.  **Assign Nodes to Codewords:** Let's associate each codeword $c_i$ with a unique leaf node in the $D$-ary tree. The depth of this leaf node from the root is its length $l_i$.

3.  **Consider the "Expansion" of the Tree:** Imagine a full $D$-ary tree of depth $L_{max} = \max(l_1, l_2, \dots, l_m)$.
    *   A full $D$-ary tree of depth $k$ has $D^k$ leaf nodes.
    *   In our prefix code tree, some nodes at depth $l_i$ are designated as codewords (leaves).
    *   For any codeword $c_i$ at depth $l_i$, none of its descendants can be codewords, because that would violate the prefix property (a codeword cannot be a prefix of another).

4.  **Contribution of Each Codeword to Code Space:** A codeword $c_i$ of length $l_i$ "claims" a specific path from the root. If we consider a full $D$-ary tree of a sufficiently large depth $L$, the number of paths of length $l_i$ starting with $c_i$ is $D^{L-l_i}$. However, a more direct way is to think about the fraction of nodes at depth $L$.

    A more intuitive approach for the proof is to consider the "contribution" of each codeword to the total number of available "slots" in a hypothetical full tree.

5.  **Alternative Proof using Fractional Counting (more common and direct):**

    Consider a full $D$-ary tree.
    *   At depth $l$, there are $D^l$ nodes.
    *   A codeword $c_i$ of length $l_i$ can be thought of as occupying one "branch" at depth $l_i$.
    *   If we have $m$ codewords with lengths $l_1, \dots, l_m$, and this set forms a prefix code, we can imagine assigning these codewords to the leaf nodes of a $D$-ary tree.

    Let's use the concept of "unoccupied slots" or "available paths".
    *   Consider a very deep full $D$-ary tree, say of depth $L$, where $L \ge l_i$ for all $i$.
    *   The total number of leaf nodes at depth $L$ is $D^L$.

    Now, consider a prefix code.
    *   A codeword $c_i$ of length $l_i$ represents a path of length $l_i$ from the root. Since it's a prefix code, this path ends at a leaf node.
    *   All other possible paths of length $L$ that *start* with $c_i$ (i.e., are extensions of $c_i$) cannot be codewords themselves, nor can they be prefixes of other codewords.

    Let's assign a "share" of the total code space ($D^L$) to each codeword.
    *   A codeword of length $l_i$ essentially uses up $1$ of the $D^{l_i}$ possible branches at depth $l_i$.
    *   To make the sum work out, consider the fraction of "available paths" of length $L$.
    *   A codeword $c_i$ of length $l_i$ "blocks" $D^{L-l_i}$ paths of length $L$ that extend from it.

    A cleaner way to prove $\sum D^{-l_i} \le 1$ for prefix codes is to construct a specific code with these lengths if the inequality holds, or to show that if the inequality is violated, we must have a non-prefix code.

    **Proof Construction Method (Sufficiency):**
    Assume $\sum_{i=1}^{m} D^{-l_i} \le 1$. We need to show that a prefix code with these lengths exists.
    1.  Order the lengths: $l_1 \le l_2 \le \dots \le l_m$.
    2.  Consider the first codeword $c_1$. Assign it the first $l_1$ symbols of the alphabet (e.g., if $D=2$, assign $0^{l_1}$).
    3.  For the second codeword $c_2$, assign it the next available $l_2$ length sequence. If $l_2 > l_1$, we need to be careful not to create a prefix.
    4.  This constructive approach can become complicated. A more elegant proof relies on the tree argument.

    **Proof using Tree Structure and "Filling" the Tree:**
    Let's use the $D$-ary tree.
    *   Consider a full $D$-ary tree. The total number of nodes at depth $k$ is $D^k$.
    *   Let's define a measure for each node at depth $k$ as $D^{-k}$.
    *   The root has measure $D^0 = 1$.
    *   The total measure of all nodes at depth $k$ is $D^k \times D^{-k} = 1$.

    Now, consider our prefix code $\{c_1, \dots, c_m\}$ with lengths $\{l_1, \dots, l_m\}$.
    *   Each codeword $c_i$ can be associated with a leaf node at depth $l_i$.
    *   The prefix property means that no codeword's path is an ancestor of another codeword's path.

    Imagine we are "placing" codewords as leaves in the $D$-ary tree.
    *   We can assign the first codeword $c_1$ (length $l_1$) to a specific path of length $l_1$. This path corresponds to a node at depth $l_1$. This node effectively "uses up" $D^{-l_1}$ of the total "tree capacity".
    *   Any path that starts with $c_1$ cannot be a codeword. These are the $D^{L-l_1}$ paths of length $L$ starting with $c_1$ (for a large $L$).

    Let's define $\nu_k$ as the number of codewords of length $k$.
    If $\sum_{i=1}^{m} D^{-l_i} > 1$, then it's impossible to construct a prefix code.
    If $\sum_{i=1}^{m} D^{-l_i} \le 1$, then a prefix code exists.

    **Let's focus on the proof that IF a prefix code exists, THEN the inequality holds (Necessity):**
    1.  Construct a $D$-ary tree. For a prefix code, each codeword corresponds to a unique leaf node.
    2.  Consider a codeword $c_i$ of length $l_i$. This codeword corresponds to a node at depth $l_i$.
    3.  Because it's a prefix code, this node must be a leaf node. If it were an internal node, then any path extending from it would also be a prefix of $c_i$, violating the prefix property.
    4.  Let's consider a "minimal" full tree that contains all our codewords as leaves. This isn't quite right because the codewords might be at different depths.

    **Correct Proof using the Tree Property:**
    Consider a $D$-ary tree. For a prefix code, each codeword corresponds to a leaf node. Let the lengths of the $m$ codewords be $l_1, l_2, \dots, l_m$.
    1.  Construct a $D$-ary tree. For each codeword $c_i$, assign it to a leaf node at depth $l_i$.
    2.  The prefix property ensures that no codeword's node is an ancestor of another codeword's node.
    3.  Consider a "full" $D$-ary tree of depth $L_{max} = \max(l_1, \dots, l_m)$. The total number of leaf nodes at depth $L_{max}$ in a full tree is $D^{L_{max}}$.
    4.  Consider the number of "available slots" at each depth.
    5.  **The Key Insight:** For each codeword $c_i$ of length $l_i$, we can think of it as occupying a specific "slot" at depth $l_i$. The total number of available slots at depth $k$ is $D^k$.
    6.  Let's think about how many leaf nodes are "covered" by each codeword. A codeword $c_i$ of length $l_i$ can be thought of as occupying a single node at depth $l_i$.
    7.  If we have a prefix code, we can "fill" a $D$-ary tree starting from the longest codewords.

    **A more common proof of sufficiency (if $\sum D^{-l_i} \le 1$, then a prefix code exists):**
    1.  Let $l_1, l_2, \dots, l_m$ be the lengths. Assume $\sum_{i=1}^{m} D^{-l_i} \le 1$.
    2.  If $\sum_{i=1}^{m} D^{-l_i} < 1$, we can always add dummy codewords of appropriate lengths until the sum equals 1. For example, if the sum is $0.9$ and the maximum length is 5, we can find a length $k$ such that adding $D^{-k}$ brings the sum to 1. Or, more generally, we can always add a dummy codeword of length $L_{max}+1$ to maintain the prefix property and fill the sum to 1. Thus, we can assume $\sum_{i=1}^{m} D^{-l_i} = 1$ without loss of generality for existence.
    3.  Consider the set of all possible sequences of length $l_1, l_2, \dots, l_m$.
    4.  Let's construct the code greedily.
        *   Sort the lengths: $l_1 \le l_2 \le \dots \le l_m$.
        *   Assign the first codeword $c_1$ to be the first sequence of length $l_1$ (e.g., $00\dots0$).
        *   For $c_2$, find the next available sequence of length $l_2$. This means we need to ensure it's not prefixed by $c_1$.
        *   This greedy assignment can be visualized by "consuming" branches of the tree.

    **Let's refine the proof of necessity ($\sum D^{-l_i} \le 1$ for a prefix code):**
    1.  Consider a prefix code $C = \{c_1, \dots, c_m\}$ with lengths $l_1, \dots, l_m$.
    2.  Construct a $D$-ary tree. Each codeword $c_i$ corresponds to a leaf node at depth $l_i$.
    3.  Consider a sufficiently large depth $L$. For each codeword $c_i$, it represents a path of length $l_i$. This path can be extended in $D^{L-l_i}$ ways to reach depth $L$.
    4.  The total number of paths of length $L$ in a full $D$-ary tree is $D^L$.
    5.  Let $N$ be the number of codewords.
    6.  Let's assign a "weight" to each codeword: $w_i = D^{-l_i}$.
    7.  We want to show $\sum_{i=1}^{m} w_i \le 1$.
    8.  Consider a "packing" argument. Imagine we have a large $D$-ary tree.
    9.  Let's try a constructive proof of the inequality itself, not just existence.

    **Proof by Induction (often used):**
    Let $P(m)$ be the proposition that for a prefix code of $m$ codewords with lengths $l_1, \dots, l_m$, $\sum_{i=1}^{m} D^{-l_i} \le 1$.

    *   **Base Case (m=1):** A single codeword $c_1$ of length $l_1$. The inequality is $D^{-l_1} \le 1$, which is always true for $l_1 \ge 0$.

    *   **Inductive Hypothesis:** Assume $P(k)$ is true for any prefix code with $k$ codewords.

    *   **Inductive Step (m=k+1):** Consider a prefix code $C = \{c_1, \dots, c_k, c_{k+1}\}$ with lengths $l_1, \dots, l_k, l_{k+1}$.
        1.  Without loss of generality, assume $l_1 \le l_2 \le \dots \le l_{k+1}$.
        2.  Since it's a prefix code, the codeword $c_{k+1}$ (which is one of the longest) cannot be a prefix of any other codeword. Conversely, no other codeword can be a prefix of $c_{k+1}$.
        3.  Consider the set of codewords $C' = \{c_1, \dots, c_k\}$. If $c_{k+1}$ is not a prefix of any $c_i$ (for $i \le k$) and no $c_i$ is a prefix of $c_{k+1}$, we can think about creating a new set of codeword lengths.
        4.  Let's consider the structure of the $D$-ary tree. If $c_{k+1}$ is a leaf node at depth $l_{k+1}$, then none of its descendants can be leaf nodes.

        **Alternative Inductive Approach (Focus on Tree Pruning):**
        Let's assume the inequality holds for all prefix codes with $m$ codewords. Consider a prefix code with $m+1$ codewords $c_1, \dots, c_{m+1}$ of lengths $l_1, \dots, l_{m+1}$.
        1.  Sort the lengths: $l_1 \le l_2 \le \dots \le l_{m+1}$.
        2.  Consider the codewords that are "maximal" in the sense that they are not prefixes of any other codeword. In a prefix code, *all* codewords must correspond to leaf nodes.
        3.  Let's select $D$ codewords that share the same prefix of length $l_{m+1}-1$. This is getting complicated.

    **Proof via Canonical Huffman Codes (often cited in conjunction):**
    While Huffman coding provides an algorithm to construct optimal prefix codes, the Kraft inequality is more fundamental.

    **The most common and elegant proof for Necessity (i.e., for any prefix code, the inequality must hold):**
    1.  Let $C = \{c_1, \dots, c_m\}$ be a prefix code with lengths $l_1, \dots, l_m$.
    2.  Construct a $D$-ary tree. Each codeword $c_i$ corresponds to a unique leaf node at depth $l_i$.
    3.  Let $L = \max(l_1, \dots, l_m)$. Consider a full $D$-ary tree of depth $L$.
    4.  For each codeword $c_i$ at depth $l_i$, it represents a specific path of length $l_i$. This path can be extended to any depth $L$ in $D^{L-l_i}$ ways.
    5.  Since $c_i$ is a leaf node, none of the $D^{L-l_i}$ paths that extend from it can be codewords themselves.
    6.  Let's count the total number of "leaf slots" available at depth $L$ in a full tree, which is $D^L$.
    7.  Consider the number of nodes at depth $L$ that are descendants of a codeword $c_i$. This is $D^{L-l_i}$.
    8.  The prefix property implies that the sets of descendant nodes for different codewords are disjoint.
    9.  Therefore, the sum of the number of descendant paths of length $L$ for all codewords cannot exceed the total number of paths of length $L$:
        $$ \sum_{i=1}^{m} D^{L-l_i} \le D^L $$
    10. Dividing both sides by $D^L$:
        $$ \sum_{i=1}^{m} \frac{D^{L-l_i}}{D^L} \le \frac{D^L}{D^L} $$
        $$ \sum_{i=1}^{m} D^{L-l_i-L} \le 1 $$
        $$ \sum_{i=1}^{m} D^{-l_i} \le 1 $$
    This proves the Kraft Inequality for prefix codes.

    **Proof of Sufficiency (if $\sum D^{-l_i} \le 1$, a prefix code with these lengths exists):**
    1.  Assume $\sum_{i=1}^{m} D^{-l_i} \le 1$.
    2.  If the sum is strictly less than 1, we can "pad" the code by adding dummy codewords until the sum becomes exactly 1. This can be done by finding the smallest integer $k$ such that $\sum D^{-l_i} + D^{-k} \le 1$ and adding a codeword of length $k$. Repeat this until the sum is 1. This process maintains the ability to form a prefix code. So, we can assume $\sum_{i=1}^{m} D^{-l_i} = 1$.
    3.  Let's construct the prefix code:
        *   Sort the lengths: $l_1 \le l_2 \le \dots \le l_m$.
        *   Consider a $D$-ary tree. We need to assign $m$ leaf nodes at depths $l_1, \dots, l_m$.
        *   **Algorithm:**
            a.  Start with the longest length, $l_m$. Assign the first available sequence of length $l_m$ to $c_m$. Let's say we assign $00\dots0$ (length $l_m$).
            b.  For $c_{m-1}$ with length $l_{m-1}$: Assign the lexicographically next available sequence of length $l_{m-1}$. The key is to ensure that the chosen sequence is not a prefix of $c_m$ and $c_m$ is not a prefix of it.

            **A more robust constructive proof:**
            Let's represent each codeword $c_i$ by a node $v_i$ in the $D$-ary tree at depth $l_i$. The condition $\sum D^{-l_i} = 1$ means that the "total measure" of these nodes is 1.
            Consider the nodes at depth $L = \max(l_i)$.
            We can define a mapping from sequences to integers. For binary codes, a sequence $b_1b_2\dots b_k$ can be mapped to $\sum_{j=1}^k b_j 2^{k-j}$ (if $b_j \in \{0,1\}$).
            Let's sort the lengths: $l_1 \le l_2 \le \dots \le l_m$.
            Assign the first codeword $c_1$ to the first possible sequence of length $l_1$.
            Assign the second codeword $c_2$ to the next available sequence of length $l_2$ that is not prefixed by $c_1$.

            **The standard constructive proof using the inequality value:**
            Assume $\sum_{i=1}^{m} D^{-l_i} = 1$.
            1.  Sort the lengths: $l_1 \le l_2 \le \dots \le l_m$.
            2.  Assign codeword $c_1$ to the sequence represented by the integer $0$ at depth $l_1$. (e.g., $00\dots0$ for binary).
            3.  Assign codeword $c_2$ to the sequence represented by the integer $1$ at depth $l_2$.
            4.  General step: To assign $c_i$ with length $l_i$:
                *   Let $v_i$ be the "integer value" of the codeword $c_i$ interpreted as a number in base $D$ and scaled to depth $l_i$.
                *   A systematic way to construct the code is as follows:
                    *   For each $i = 1, \dots, m$:
                        *   Calculate $x_i = \text{integer value of } c_i \text{ at depth } l_i$.
                        *   If $l_i < l_{i+1}$, then $c_i$ is a prefix of $c_{i+1}$'s potential position.
                    *   Consider the number of full codewords of length $l_i$ that we can form.
                    *   A method from Cover & Thomas:
                        *   Sort lengths: $l_1 \le l_2 \le \dots \le l_m$.
                        *   Choose $c_1$ to be $00\dots0$ (length $l_1$).
                        *   To choose $c_2$ (length $l_2$), find the first sequence of length $l_2$ that is not prefixed by $c_1$.
                        *   Let $y_i$ be the integer value of the $i$-th codeword, scaled to its length.
                        *   Let $y_1 = 0$. (Represents $0^l_1$)
                        *   For $i=2, \dots, m$, set $y_i = y_{i-1} + 1$ (if $l_i = l_{i-1}$) or $y_i = (y_{i-1}+1) \times D^{l_i - l_{i-1}}$ (if $l_i > l_{i-1}$).
                        *   Ensure that these $y_i$ values are unique and do not cause prefixing.
                        *   The condition $\sum D^{-l_i} = 1$ guarantees that this construction can be done without prefix violations.

    **Example of Sufficiency:**
    Let $D=2$ and lengths be $l_1=2, l_2=3, l_3=3$.
    Kraft sum: $2^{-2} + 2^{-3} + 2^{-3} = \frac{1}{4} + \frac{1}{8} + \frac{1}{8} = \frac{2+1+1}{8} = \frac{4}{8} = \frac{1}{2} \le 1$.
    So, a prefix code exists. Let's construct it.
    Sorted lengths: $l_1=2, l_2=3, l_3=3$.
    1.  Assign $c_1$ (length 2). Let $c_1 = 00$.
    2.  Assign $c_2$ (length 3). Find the next available 3-bit sequence not starting with 00.
        *   Available 3-bit sequences: 000, 001, 010, 011, 100, 101, 110, 111.
        *   Sequences starting with 00: 000, 001. These are blocked by $c_1$.
        *   The next available sequence is 010. Let $c_2 = 010$.
    3.  Assign $c_3$ (length 3). Find the next available 3-bit sequence not starting with 00 or 010.
        *   The next available is 011. Let $c_3 = 011$.

    Our prefix code is $\{00, 010, 011\}$.
    Check: $00$ is not a prefix of $010$ or $011$. $010$ is not a prefix of $00$ or $011$. $011$ is not a prefix of $00$ or $010$. This is a valid prefix code.

### 5. Examples and Applications

**Example 1: Checking Kraft Inequality**

Can we form a prefix code with codeword lengths {2, 2, 3, 3} over a binary alphabet?
Kraft sum: $2^{-2} + 2^{-2} + 2^{-3} + 2^{-3} = \frac{1}{4} + \frac{1}{4} + \frac{1}{8} + \frac{1}{8} = \frac{2+2+1+1}{8} = \frac{6}{8} = \frac{3}{4} \le 1$.
Yes, a prefix code exists.

**Example 2: Checking Kraft Inequality**

Can we form a prefix code with codeword lengths {1, 2, 2, 2} over a binary alphabet?
Kraft sum: $2^{-1} + 2^{-2} + 2^{-2} + 2^{-2} = \frac{1}{2} + \frac{1}{4} + \frac{1}{4} + \frac{1}{4} = \frac{2+1+1+1}{4} = \frac{5}{4} > 1$.
No, a prefix code cannot be formed with these lengths.

**Example 3: Optimal Prefix Codes and Entropy**

Consider a source with probabilities $P(X=x_1) = 1/2$, $P(X=x_2) = 1/4$, $P(X=x_3) = 1/4$.
Entropy $H(X) = -(\frac{1}{2} \log_2 \frac{1}{2} + \frac{1}{4} \log_2 \frac{1}{4} + \frac{1}{4} \log_2 \frac{1}{4})$
$H(X) = -(\frac{1}{2}(-1) + \frac{1}{4}(-2) + \frac{1}{4}(-2)) = -(-\frac{1}{2} - \frac{1}{2} - \frac{1}{2}) = \frac{3}{2} = 1.5$ bits.

To create an optimal prefix code (like Huffman coding), we assign shorter codewords to higher probability symbols.
Let codeword lengths be $l_1, l_2, l_3$ for $x_1, x_2, x_3$ respectively.
We want $l_1 < l_2, l_3$. A common choice is $l_1=1, l_2=2, l_3=2$.
Kraft sum: $2^{-1} + 2^{-2} + 2^{-2} = \frac{1}{2} + \frac{1}{4} + \frac{1}{4} = 1$. This is a complete prefix code.
Average codeword length $L = \frac{1}{2}(1) + \frac{1}{4}(2) + \frac{1}{4}(2) = \frac{1}{2} + \frac{1}{2} + \frac{1}{2} = 1.5$ bits.
Here, $L = H(X)$. This is the ideal case.

What if we used lengths {2, 2, 2}?
Kraft sum: $2^{-2} + 2^{-2} + 2^{-2} = \frac{1}{4} + \frac{1}{4} + \frac{1}{4} = \frac{3}{4} \le 1$.
Average codeword length $L = \frac{1}{2}(2) + \frac{1}{4}(2) + \frac{1}{4}(2) = 1 + \frac{1}{2} + \frac{1}{2} = 2$ bits.
This code is valid, but not optimal, as $L > H(X)$.

**Applications:**

*   **Data Compression:** Kraft Inequality is essential for designing prefix codes (like Huffman codes) that achieve compression close to the entropy limit.
*   **Error Control Coding:** While more directly related to channel coding, the principles of unique decodability and codeword assignment are fundamental.
*   **File Formats and Protocols:** Efficient representation of data in various digital systems.

### 6. Practice Questions and Exercises

**Question 1:**
Determine if a prefix code with codeword lengths {3, 3, 3, 3, 3} can exist over a binary alphabet. Justify your answer using the Kraft Inequality.

**Question 2:**
Can a prefix code with codeword lengths {1, 2, 3, 3, 4, 4} exist over an alphabet of size $D=3$? Justify your answer.

**Question 3:**
You are given the following codeword lengths for a binary prefix code: $l_1 = 1$, $l_2 = 3$, $l_3 = 3$, $l_4 = 3$.
(a) Does the Kraft Inequality hold for these lengths?
(b) If it holds, can you construct a possible set of codewords? If not, why?

**Question 4:**
Let a source have the following probability distribution: $P(a) = 0.5$, $P(b) = 0.25$, $P(c) = 0.125$, $P(d) = 0.125$.
(a) Calculate the entropy of this source.
(b) Find the optimal codeword lengths for a prefix code to represent this source, aiming to minimize the average codeword length.
(c) Verify if your chosen codeword lengths satisfy the Kraft Inequality.

### 7. Answers to Practice Questions

**Answer 1:**
Kraft sum: $5 \times 2^{-3} = 5 \times \frac{1}{8} = \frac{5}{8}$.
Since $\frac{5}{8} \le 1$, a prefix code with these lengths *can* exist.

**Answer 2:**
Kraft sum: $3^{-1} + 3^{-2} + 3^{-3} + 3^{-3} + 3^{-4} + 3^{-4}$
$= \frac{1}{3} + \frac{1}{9} + \frac{1}{27} + \frac{1}{27} + \frac{1}{81} + \frac{1}{81}$
$= \frac{27}{81} + \frac{9}{81} + \frac{3}{81} + \frac{3}{81} + \frac{1}{81} + \frac{1}{81}$
$= \frac{27 + 9 + 3 + 3 + 1 + 1}{81} = \frac{44}{81}$.
Since $\frac{44}{81} \le 1$, a prefix code with these lengths can exist over an alphabet of size $D=3$.

**Answer 3:**
(a) Kraft sum: $2^{-1} + 2^{-3} + 2^{-3} + 2^{-3} = \frac{1}{2} + \frac{1}{8} + \frac{1}{8} + \frac{1}{8} = \frac{4+1+1+1}{8} = \frac{7}{8}$.
Yes, the Kraft Inequality holds because $\frac{7}{8} \le 1$.

(b) Since the Kraft sum is less than 1, a prefix code can be constructed. Here's one possible construction:
*   $l_1 = 1$: Assign codeword $0$.
*   $l_2 = 3$: The next available 3-bit sequences not starting with $0$.
    *   Block sequences starting with $0$: $000, 001, 010, 011, 100, 101, 110, 111$. (All 3-bit sequences start with $0$ or $1$. The codeword $0$ leaves all 3-bit sequences starting with $1$ as available for length 3 if $l_1=1$, but this is wrong logic for prefix codes).
    *   Correct logic: The codeword $0$ at depth 1 blocks all descendants. So any codeword of length 3 cannot start with $0$. This means all 3-bit codewords must start with $1$.
    *   We have three codewords of length 3. The available 3-bit sequences starting with $1$ are $100, 101, 110, 111$.
    *   Assign $100$ to $c_2$.
    *   Assign $101$ to $c_3$.
    *   Assign $110$ to $c_4$.
    The prefix code is $\{0, 100, 101, 110\}$.

**Answer 4:**
(a) Entropy calculation:
$H(X) = -(0.5 \log_2 0.5 + 0.25 \log_2 0.25 + 0.125 \log_2 0.125 + 0.125 \log_2 0.125)$
$H(X) = -(0.5(-1) + 0.25(-2) + 0.125(-3) + 0.125(-3))$
$H(X) = -(-0.5 - 0.5 - 0.375 - 0.375)$
$H(X) = -(-1 - 0.75) = 1.75$ bits.

(b) Optimal codeword lengths (Huffman coding approach):
Assign shortest codewords to highest probabilities.
$P(a) = 0.5$ (assign length 1)
$P(b) = 0.25$ (assign length 2)
$P(c) = 0.125$ (assign length 3)
$P(d) = 0.125$ (assign length 3)
Codeword lengths: {1, 2, 3, 3}.

(c) Kraft Inequality check for {1, 2, 3, 3}:
Kraft sum: $2^{-1} + 2^{-2} + 2^{-3} + 2^{-3} = \frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \frac{1}{8} = \frac{4+2+1+1}{8} = \frac{8}{8} = 1$.
The Kraft Inequality holds (and is complete).

### 8. Important Points to Remember

*   **Prefix codes are crucial for unambiguous decoding.**
*   The **Kraft Inequality** states $\sum_{i=1}^{m} D^{-l_i} \le 1$.
*   For **prefix codes**, the Kraft Inequality is both **necessary and sufficient** for the existence of such a code.
*   For general **uniquely decodable codes**, it is only **necessary**.
*   The inequality helps determine if a set of codeword lengths is *feasible*.
*   The equality case ($\sum D^{-l_i} = 1$) corresponds to **complete codes**, which are efficient and do not waste code space.
*   Kraft Inequality is a fundamental link to the **Source Coding Theorem** and the concept of **entropy** as the lower bound on average codeword length.
*   The proof often relies on visualizing codes as leaf nodes in a $D$-ary tree and using the concept of occupying branches or "code space".

### 9. Alignment with Course Outcomes

*   **CO1: Explain information theory measures such as entropy, conditional entropy, mutual information (Knowledge Level: K2)**
    *   This topic directly supports understanding the efficiency of source coding, which is measured by average codeword length relative to entropy. The Kraft inequality sets the bounds on achievable lengths.

*   **CO2: Apply source coding theorem for data compression. (Knowledge Level: K3)**
    *   The Kraft Inequality is a prerequisite for understanding and applying source coding theorems like the Shannon's Source Coding Theorem. It provides the mathematical basis for constructing codes that approach the entropy limit, which is the goal of data compression.

This concludes the study notes on the Kraft Inequality. Understanding this inequality is fundamental to various advanced communication topics, especially in source coding and data compression.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
