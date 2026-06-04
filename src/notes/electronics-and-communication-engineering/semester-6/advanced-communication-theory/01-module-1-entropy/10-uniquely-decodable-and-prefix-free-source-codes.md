---
title: "uniquely decodable and prefix-free source codes."
subject: "ADVANCED COMMUNICATION THEORY"
module: "Module 1: Entropy"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fecf5"
status: "completed"
scrapedAt: "2026-05-23T17:58:26.549Z"
---
# ADVANCED COMMUNICATION THEORY - Module 1: Entropy

## Topic: Uniquely Decodable and Prefix-Free Source Codes

This module introduces the fundamental concepts of information theory, focusing on entropy as a measure of information content and exploring techniques for efficient and reliable data representation. This topic specifically delves into the properties of source codes that enable unambiguous reconstruction of the original data.

---

### **Learning Outcomes Covered:**

*   **Understanding of Source Codes:** Grasp the concept of representing information using binary codes.
*   **Uniquely Decodable Codes:** Comprehend the conditions under which a sequence of codewords can be unambiguously translated back to the original source symbols.
*   **Prefix-Free Codes:** Understand the specific property that guarantees unique decodability by preventing any codeword from being a prefix of another.
*   **Relationship to Data Compression:** Recognize how these coding schemes are foundational to efficient data compression.

---

### **Course Outcomes Alignment:**

*   **CO1: Explain information theory measures such as entropy, conditional entropy, mutual information (Knowledge Level: K2)**
    *   This topic builds the foundation for understanding how efficiently data can be represented, which is directly related to entropy. The efficiency of a code is often measured against the entropy of the source.
*   **CO2: Apply source coding theorem for data compression. (Knowledge Level: K3)**
    *   Uniquely decodable and prefix-free codes are the building blocks for constructing efficient source codes as stipulated by the source coding theorem. Understanding these properties is crucial for applying the theorem in practice.

---

### **1. Introduction to Source Coding**

Source coding (or data compression) aims to represent data from a source using fewer bits than the original representation, without sacrificing essential information. This is achieved by exploiting the statistical properties of the source, such as the varying probabilities of different symbols.

*   **Source:** A device or process that generates a sequence of symbols.
*   **Alphabet:** The set of all possible symbols that the source can generate. Let the source alphabet be $\mathcal{X} = \{x_1, x_2, \dots, x_m\}$, with probabilities $P(x_i)$ such that $\sum_{i=1}^m P(x_i) = 1$.
*   **Codewords:** Binary sequences (strings of 0s and 1s) used to represent the source symbols.
*   **Code:** A set of codewords, where each source symbol is mapped to a unique codeword. Let the code for symbol $x_i$ be $c(x_i)$.
*   **Codebook:** The mapping from source symbols to their corresponding codewords.
*   **Encoded Sequence:** A sequence formed by concatenating the codewords of the symbols in the original source sequence.

**Example:**
Source alphabet $\mathcal{X} = \{A, B, C\}$.
Probabilities: $P(A) = 0.5$, $P(B) = 0.25$, $P(C) = 0.25$.

A possible codebook:
*   $A \rightarrow 0$
*   $B \rightarrow 10$
*   $C \rightarrow 11$

If the source sequence is $ABC$, the encoded sequence would be $01011$.

---

### **2. Uniquely Decodable (UD) Codes**

A code is **uniquely decodable** if any sequence of codewords can be unambiguously decoded back into the original sequence of source symbols. This means that there is only one possible way to parse an encoded sequence into individual codewords.

*   **Definition:** A code $C = \{c_1, c_2, \dots, c_m\}$ is uniquely decodable if for any two distinct sequences of indices $(i_1, i_2, \dots, i_k)$ and $(j_1, j_2, \dots, j_l)$, the concatenated codewords are different:
    $c_{i_1}c_{i_2}\dots c_{i_k} \neq c_{j_1}c_{j_2}\dots c_{j_l}$
    unless $k=l$ and $i_p = j_p$ for all $p=1, \dots, k$.

*   **Non-uniquely Decodable Codes:** A code is NOT uniquely decodable if there exist two different sequences of source symbols that produce the same encoded sequence. This is often due to one codeword being a prefix of another, or a concatenation of codewords being equal to another codeword or concatenation of other codewords.

**Example of a Non-UD Code:**
Source Alphabet: $\{A, B\}$
Codebook:
*   $A \rightarrow 0$
*   $B \rightarrow 01$

Consider the encoded sequence $01$.
This could be decoded as:
1.  $A$ followed by $B$ (if $A \rightarrow 0$ and $B \rightarrow 1$) - This is not our example.
2.  $A$ followed by $B$ if $A \rightarrow 0$ and $B \rightarrow 1$. Let's use the example codebook.
    *   If the source sequence is $AB$, encoded is $001$.
    *   If the source sequence is $AAB$, encoded is $0001$.

Let's re-evaluate the example for non-UD code:
Source Alphabet: $\{A, B, C\}$
Codebook:
*   $A \rightarrow 0$
*   $B \rightarrow 01$
*   $C \rightarrow 1$

Consider the encoded sequence $01$.
This could be decoded as:
1.  $A$ followed by $C$ ($0 \cdot 1$)
2.  $B$ ($01$)

Since there are two possible decodings, this code is **not uniquely decodable**.

**Key Insight (from Cover & Thomas, "Elements of Information Theory"):** A code is uniquely decodable if and only if no codeword is a prefix of another codeword, and no concatenation of codewords is equal to another codeword. The "no codeword is a prefix of another codeword" is a stronger, more practical condition.

---

### **3. Prefix-Free Codes (Instantaneous Codes)**

A **prefix-free code** is a special type of uniquely decodable code where **no codeword is a prefix of any other codeword**. This property allows for instantaneous decoding. When you receive bits, as soon as you form a complete codeword, you can immediately identify the source symbol without waiting for more bits to arrive.

*   **Definition:** A code $C = \{c_1, c_2, \dots, c_m\}$ is prefix-free if for any two distinct codewords $c_i$ and $c_j$ in $C$, $c_i$ is not a prefix of $c_j$, and $c_j$ is not a prefix of $c_i$.

*   **Instantaneous Decoding:** With a prefix-free code, the decoding process is straightforward. Read the incoming bits from left to right. As soon as the sequence of bits matches a codeword in the codebook, output the corresponding source symbol and start looking for the next codeword from the following bit.

**Example of Prefix-Free Codes:**
Source Alphabet: $\{A, B, C\}$
Probabilities: $P(A) = 0.5$, $P(B) = 0.25$, $P(C) = 0.25$.

Codebook 1 (from earlier example):
*   $A \rightarrow 0$
*   $B \rightarrow 10$
*   $C \rightarrow 11$

Let's check for prefix property:
*   Is '0' a prefix of '10' or '11'? No.
*   Is '10' a prefix of '0' or '11'? No.
*   Is '11' a prefix of '0' or '10'? No.
This code is prefix-free and therefore uniquely decodable.

**Example of a Code that is UD but NOT Prefix-Free:**
Source Alphabet: $\{A, B, C\}$
Codebook:
*   $A \rightarrow 0$
*   $B \rightarrow 10$
*   $C \rightarrow 101$

This code is **not prefix-free** because '10' is a prefix of '101'.
Let's see if it's UD. Consider the encoded sequence $101$.
1.  Decoded as $B$ followed by $C$ ($10 \cdot 1$) - This is not right. The codeword is $101$, not $10$ and $1$.
2.  Decoded as $C$ ($101$) - This is the correct decoding.

Consider the sequence $1010$.
1.  $B$ ($10$) followed by $A$ ($0$) - Incorrect, $1010$ does not match $10$ and $0$.
2.  $C$ ($101$) followed by $A$ ($0$) - Encoded sequence is $1010$. This means $C$ followed by $A$.

Let's construct an example where it's truly ambiguous without the prefix property.
Source Alphabet: $\{A, B\}$
Codebook:
*   $A \rightarrow 0$
*   $B \rightarrow 00$

This is not prefix-free because '0' is a prefix of '00'.
Encoded sequence $00$:
1.  $A$ followed by $A$ ($0 \cdot 0$)
2.  $B$ ($00$)

This code is **not uniquely decodable**. The prefix property is crucial for guaranteeing UD.

**Important Point:** All prefix-free codes are uniquely decodable. However, not all uniquely decodable codes are prefix-free. The prefix-free property is the most desirable for practical implementation due to its instantaneous decoding capability.

---

### **4. Kraft's Inequality and Constructing Prefix-Free Codes**

**Kraft's Inequality** provides a necessary and sufficient condition for the existence of a prefix-free code with a given set of codeword lengths.

*   **Statement of Kraft's Inequality:** For a binary alphabet, a prefix-free code with codeword lengths $l_1, l_2, \dots, l_m$ exists if and only if:
    $$ \sum_{i=1}^m 2^{-l_i} \le 1 $$

*   **Interpretation:** The sum of the "probabilities" represented by the codewords (where $2^{-l_i}$ can be thought of as a measure of the "space" occupied by a codeword of length $l_i$) must not exceed 1. If the sum is exactly 1, the code is called a **complete** or **full** code.

**Construction of Prefix-Free Codes (Using Binary Trees):**

Prefix-free codes can be visualized and constructed using binary trees.

*   **Nodes:** Represent prefixes of codewords.
*   **Root:** Represents the empty string.
*   **Edges:** Labeled '0' for going left, '1' for going right.
*   **Codewords:** Correspond to the paths from the root to the leaves of the tree.
*   **Prefix-Free Property:** In a prefix-free code, codewords correspond only to the leaves of the tree. Internal nodes cannot be codewords. This is naturally satisfied if codewords are only assigned to leaves.

**Example of Tree Construction (for Codebook 1):**
*   $A \rightarrow 0$ (Path from root to a leaf labeled '0')
*   $B \rightarrow 10$ (Path from root to a leaf labeled '10')
*   $C \rightarrow 11$ (Path from root to a leaf labeled '11')

```
      (root)
      /    \
     0      1
    (A)    / \
          0   1
         (B) (C)
```

In this tree:
*   '0' is a leaf (codeword for A).
*   '1' is an internal node.
*   '10' is a leaf (codeword for B).
*   '11' is a leaf (codeword for C).

No codeword ('0', '10', '11') is a prefix of another. For instance, '0' is not a prefix of '10' or '11' because you can't extend '0' to become '10' or '11' by traversing the tree from the leaf representing '0'.

**Using Kraft's Inequality for Code Design:**

Given source symbol probabilities, we can aim to construct prefix-free codes that are efficient. Huffman coding (discussed in later modules) is a prime example of an algorithm that uses symbol probabilities to construct optimal prefix-free codes.

Let's check Kraft's inequality for Codebook 1:
$l_A=1, l_B=2, l_C=2$.
$\sum 2^{-l_i} = 2^{-1} + 2^{-2} + 2^{-2} = 0.5 + 0.25 + 0.25 = 1$.
Since the sum is 1, this is a complete prefix-free code.

**Example where Kraft's Inequality is Violated (No Prefix-Free Code Exists):**
Suppose we want codeword lengths $l_1=1, l_2=1$.
$\sum 2^{-l_i} = 2^{-1} + 2^{-1} = 0.5 + 0.5 = 1$. This is a complete code. We can have codewords '0' and '1'.

Suppose we want codeword lengths $l_1=1, l_2=1, l_3=1$.
$\sum 2^{-l_i} = 2^{-1} + 2^{-1} + 2^{-1} = 0.5 + 0.5 + 0.5 = 1.5$.
Since $1.5 > 1$, no prefix-free code with these three lengths can exist. We can only have two codewords of length 1 ('0' and '1').

---

### **5. Relation to Entropy and Source Coding Theorem (Brief Mention)**

*   **Entropy ($H(X)$):** The theoretical minimum average number of bits per symbol required to represent the source.
    $H(X) = -\sum_{i=1}^m P(x_i) \log_2 P(x_i)$ bits per symbol.
*   **Average Codeword Length ($\bar{L}$):** The expected length of a codeword in a given code.
    $\bar{L} = \sum_{i=1}^m P(x_i) l_i$, where $l_i$ is the length of the codeword for symbol $x_i$.

**Source Coding Theorem (Shannon's First Theorem):** States that for a stationary, ergodic source with entropy $H(X)$, it is possible to compress the data such that the average number of bits per symbol in the compressed representation approaches $H(X)$, and no compression below $H(X)$ is possible.
*   For any $\epsilon > 0$, there exists a uniquely decodable code such that the average codeword length $\bar{L}$ satisfies $H(X) \le \bar{L} < H(X) + \epsilon$.

Uniquely decodable and prefix-free codes are the mechanisms by which we achieve this compression. While non-prefix-free UD codes can achieve the theoretical limit, prefix-free codes are preferred for practical reasons. Huffman coding, for instance, constructs optimal prefix-free codes that are very close to the entropy.

---

### **Key Points to Remember:**

*   **Uniquely Decodable (UD) Codes:** Allow for unambiguous reconstruction of the original source sequence from its encoded form.
*   **Prefix-Free Codes:** A subset of UD codes where no codeword is a prefix of another. This enables instantaneous decoding.
*   **All Prefix-Free Codes are UD, but not vice-versa.**
*   **Kraft's Inequality:** $\sum_{i=1}^m 2^{-l_i} \le 1$ is the condition for the existence of a prefix-free code with lengths $l_i$.
*   **Binary Tree Representation:** A powerful tool for visualizing and constructing prefix-free codes. Codewords correspond to leaves.
*   **Efficiency:** The goal of source coding is to achieve an average codeword length close to the source entropy $H(X)$. Prefix-free codes like those generated by Huffman coding are instrumental in this.

---

### **Practice Questions and Exercises:**

**Question 1:**
Consider the following codebook for a source with alphabet $\{A, B, C, D\}$:
*   $A \rightarrow 0$
*   $B \rightarrow 10$
*   $C \rightarrow 110$
*   $D \rightarrow 111$

**(a)** Is this code prefix-free? Justify your answer.
**(b)** Is this code uniquely decodable? Justify your answer.
**(c)** If the source transmits the sequence $ABCD$, what is the encoded sequence?
**(d)** If you receive the encoded sequence $010110111$, what is the decoded source sequence?
**(e)** Does this code satisfy Kraft's inequality? Calculate the sum $\sum 2^{-l_i}$.

**Answer 1:**
**(a)** Yes, this code is prefix-free.
    *   '0' is not a prefix of '10', '110', or '111'.
    *   '10' is not a prefix of '0', '110', or '111'.
    *   '110' is not a prefix of '0', '10', or '111'.
    *   '111' is not a prefix of '0', '10', or '110'.

**(b)** Yes, this code is uniquely decodable because it is prefix-free. Any prefix-free code is uniquely decodable.

**(c)** Encoded sequence for $ABCD$:
    *   $A \rightarrow 0$
    *   $B \rightarrow 10$
    *   $C \rightarrow 110$
    *   $D \rightarrow 111$
    Encoded sequence: $010110111$.

**(d)** Receiving $010110111$:
    *   Start with '0'. Matches codeword for $A$. Output $A$. Remaining: $10110111$.
    *   Start with '10'. Matches codeword for $B$. Output $B$. Remaining: $110111$.
    *   Start with '110'. Matches codeword for $C$. Output $C$. Remaining: $111$.
    *   Start with '111'. Matches codeword for $D$. Output $D$. Remaining: (empty).
    Decoded sequence: $ABCD$.

**(e)** The codeword lengths are $l_A=1, l_B=2, l_C=3, l_D=3$.
    $\sum 2^{-l_i} = 2^{-1} + 2^{-2} + 2^{-3} + 2^{-3}$
    $= 0.5 + 0.25 + 0.125 + 0.125$
    $= 0.5 + 0.25 + 0.25 = 1$.
    Yes, this code satisfies Kraft's inequality, and it is a complete code.

**Question 2:**
Consider a code with the following codewords: $\{0, 10, 01\}$.

**(a)** Is this code prefix-free?
**(b)** Is this code uniquely decodable? Explain why or why not, providing an example of ambiguous decoding if applicable.
**(c)** If it is not prefix-free, can you modify it slightly to make it prefix-free while maintaining unique decodability?

**Answer 2:**
**(a)** No, this code is not prefix-free. The codeword '0' is a prefix of '01'.

**(b)** No, this code is not uniquely decodable.
    Consider the encoded sequence $01$.
    *   It could be decoded as the codeword '01' (representing a single symbol).
    *   Or it could be decoded as the codeword '0' followed by the codeword '1' (but '1' is not a codeword in the set). Let's use the example that demonstrates ambiguity.
    Consider the set $\{0, 01\}$. Let's assume the source alphabet is $\{A, B\}$ with $A \rightarrow 0$ and $B \rightarrow 01$.
    If the received sequence is $01$:
    *   It could be the codeword for $B$.
    *   Or it could be the codeword for $A$ followed by a codeword '1'. But '1' is not a codeword here.

    Let's use the example from the text: $\{0, 01\}$.
    Source Alphabet: $\{X, Y\}$
    Codebook: $X \rightarrow 0$, $Y \rightarrow 01$.
    Encoded sequence $01$:
    *   Can be decoded as $Y$.
    *   Can be decoded as $X$ followed by *something*. The issue arises when a *sequence* of codewords matches another codeword or a sequence of codewords.

    Let's use a better example for non-UD: $\{0, 1, 00\}$.
    Source Alphabet: $\{A, B, C\}$
    Codebook: $A \rightarrow 0$, $B \rightarrow 1$, $C \rightarrow 00$.
    Encoded sequence $00$:
    *   Could be decoded as $C$.
    *   Could be decoded as $A$ followed by $A$ ($0 \cdot 0$).
    This code is not uniquely decodable.

    Back to the original question's code $\{0, 10, 01\}$:
    Let's check if any concatenation of codewords equals another codeword.
    *   $0$ + $10$ = $010$ (not in set)
    *   $0$ + $01$ = $001$ (not in set)
    *   $10$ + $0$ = $100$ (not in set)
    *   $10$ + $01$ = $1001$ (not in set)
    *   $01$ + $0$ = $010$ (not in set)
    *   $01$ + $10$ = $0110$ (not in set)

    The issue is specifically that '0' is a prefix of '01'.
    If the source sequence is $A \cdot (\text{symbol that maps to } 1)$, the encoded would be $01$.
    If the source sequence is $B$ (which maps to $01$), the encoded would be $01$.
    This is the ambiguity. The code is not uniquely decodable because '0' is a prefix of '01'.

**(c)** To make it prefix-free, we need to ensure no codeword is a prefix of another.
Original code: $\{0, 10, 01\}$.
Problem: '0' is a prefix of '01'.
We can extend '01' to be a new codeword, for example, by appending a '1'. Let's try to keep lengths short and satisfy Kraft's inequality.

If we want to keep '0' as a codeword for 'A', then '01' cannot be a codeword. We need to change '01'.
Let's try to make a prefix-free code with similar lengths.
*   $A \rightarrow 0$
*   $B \rightarrow 10$
*   $C \rightarrow 11$

This is the example from Question 1, and it's prefix-free. This is a common way to construct prefix-free codes. The original code $\{0, 10, 01\}$ tried to use $0, 10, 01$. Kraft's sum for $\{0, 10, 01\}$ would be $2^{-1} + 2^{-2} + 2^{-2} = 0.5 + 0.25 + 0.25 = 1$. This is a valid set of lengths for a prefix-free code. The specific assignment $A \rightarrow 0, B \rightarrow 10, C \rightarrow 01$ is what creates the non-prefix property due to the assignment of '0' and '01'.

A simple modification to make $\{0, 10, 01\}$ prefix-free would be to change $01$ to something like $11$. The code $\{0, 10, 11\}$ is prefix-free.

**Question 3:**
Which of the following sets of codeword lengths can form a prefix-free code for a binary alphabet?
**(a)** $\{1, 2, 2\}$
**(b)** $\{1, 1, 1\}$
**(c)** $\{2, 2, 2, 2\}$
**(d)** $\{1, 2, 3, 3\}$

**Answer 3:**
We use Kraft's inequality: $\sum_{i=1}^m 2^{-l_i} \le 1$.

**(a)** $\{1, 2, 2\}$
    $2^{-1} + 2^{-2} + 2^{-2} = 0.5 + 0.25 + 0.25 = 1$.
    Since the sum is $\le 1$, this set of lengths **can** form a prefix-free code.

**(b)** $\{1, 1, 1\}$
    $2^{-1} + 2^{-1} + 2^{-1} = 0.5 + 0.5 + 0.5 = 1.5$.
    Since the sum is $> 1$, this set of lengths **cannot** form a prefix-free code.

**(c)** $\{2, 2, 2, 2\}$
    $2^{-2} + 2^{-2} + 2^{-2} + 2^{-2} = 0.25 + 0.25 + 0.25 + 0.25 = 1$.
    Since the sum is $\le 1$, this set of lengths **can** form a prefix-free code.

**(d)** $\{1, 2, 3, 3\}$
    $2^{-1} + 2^{-2} + 2^{-3} + 2^{-3} = 0.5 + 0.25 + 0.125 + 0.125 = 0.5 + 0.25 + 0.25 = 1$.
    Since the sum is $\le 1$, this set of lengths **can** form a prefix-free code.

**Correct options are (a), (c), and (d).**

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### **References and Further Reading:**

*   **Elements of Information Theory by Joy A. Thomas, Thomas M. Cover (Wiley-Interscience, 2/e 2006):** Chapter 5 (Source Coding) discusses uniquely decodable codes and Kraft's inequality in detail.
*   **Wireless Communications by Theodore S. Rappaport (Pearson Education, 2/e 2022):** While more focused on physical layer, the principles of data representation are implicitly relevant.
*   **Communication Systems by Simon Haykin (John Wiley and Sons Inc, 4e, 2020):** Similar to Rappaport, it provides broader context for communication system design.
*   **Error Control Coding: Fundamentals and Applications by Shu Lin & Daniel J. Costello. Jr. (Prentice Hall Inc, 2nd Edition 2011):** This book delves deeply into coding theory, providing a strong foundation for understanding code properties.

This concludes the notes for Uniquely Decodable and Prefix-Free Source Codes in Module 1. Understanding these concepts is crucial for grasping the efficiency and reliability of communication systems.