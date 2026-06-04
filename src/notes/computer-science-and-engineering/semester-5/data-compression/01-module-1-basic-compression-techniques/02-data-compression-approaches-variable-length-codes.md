---
title: "Data Compression Approaches - Variable-Length Codes"
subject: "DATA COMPRESSION"
module: "Module 1: Basic Compression Techniques :"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b774"
status: "completed"
scrapedAt: "2026-05-20T16:44:19.988Z"
---
# DATA COMPRESSION - Module 1: Basic Compression Techniques - Variable-Length Codes

## Introduction

This module delves into the fundamental concepts of data compression, focusing specifically on Variable-Length Codes.  These codes are essential for achieving higher compression ratios than fixed-length codes, especially when dealing with data where some symbols appear more frequently than others.

**Learning Outcomes:**

*   Understand the concept of variable-length codes.
*   Explain the advantages and disadvantages of variable-length codes compared to fixed-length codes.
*   Describe and apply prefix codes (including Huffman coding and Shannon-Fano coding).
*   Identify and resolve ambiguity issues in variable-length codes.
*   Evaluate the efficiency of different variable-length coding schemes.

## 1. Concept of Variable-Length Codes

*   **Definition:** Variable-length codes assign codewords of different lengths to different symbols in the source alphabet. More frequent symbols receive shorter codewords, while less frequent symbols receive longer codewords.  This strategy aims to reduce the average number of bits needed to represent the data.

*   **Key Idea:** Exploit the redundancy of uneven symbol probabilities.  If some symbols occur much more often than others, representing those frequent symbols with fewer bits can significantly reduce the overall data size.

*   **Example:** Consider an alphabet {A, B, C, D} with probabilities P(A) = 0.5, P(B) = 0.25, P(C) = 0.125, P(D) = 0.125.  A fixed-length code would use 2 bits per symbol (00, 01, 10, 11). A variable-length code might use: A=0, B=10, C=110, D=111.  For a long sequence with the given probabilities, the variable-length code will likely be shorter on average.

## 2. Advantages and Disadvantages of Variable-Length Codes

*   **Advantages:**
    *   **Higher Compression Ratio:** Can achieve better compression than fixed-length codes when symbol probabilities are skewed.
    *   **Efficiency:**  Optimized variable-length codes can approach the theoretical entropy limit, providing near-optimal compression.

*   **Disadvantages:**
    *   **Complexity:** Encoding and decoding processes are more complex than fixed-length codes.  Requires tables or trees to map symbols to codewords and vice versa.
    *   **Error Propagation:** A single bit error can potentially corrupt multiple decoded symbols, especially if the code is not carefully designed.  Fixed-length codes are more resilient to single-bit errors.
    *   **Decoding Ambiguity:** Not all variable-length codes are uniquely decodable. We need to ensure the code is designed to avoid ambiguity.

## 3. Prefix Codes (A Crucial Property for Variable-Length Codes)

*   **Definition:** A prefix code (also called a prefix-free code) is a type of variable-length code where no codeword is a prefix of any other codeword. This property guarantees unique decodability.

*   **Importance:** Prefix codes avoid ambiguity.  When decoding, you can immediately identify the end of a codeword without needing to look ahead.

*   **Example of a Prefix Code:** A = 0, B = 10, C = 110, D = 111 (as shown earlier). No codeword is a prefix of another.

*   **Example of a Non-Prefix Code:** A = 0, B = 01, C = 10, D = 11.  The codeword for A (0) is a prefix of the codeword for B (01).  This makes decoding ambiguous.  If you see a "0", is it an "A" or the beginning of a "B"?

*   **Kraft-McMillan Inequality:**  This inequality provides a necessary and sufficient condition for the existence of a prefix code. For a code with codeword lengths l<sub>1</sub>, l<sub>2</sub>, ..., l<sub>n</sub>, the following must hold:
    ∑<sub>i=1</sub><sup>n</sup> (1/r)<sup>l<sub>i</sub></sup> ≤ 1
    Where r is the radix of the code (usually 2 for binary codes).  This means the sum of the inverse of the lengths to the power of the base should be less than or equal to 1.

### 3.1 Huffman Coding

*   **Description:** A popular and efficient prefix coding algorithm that constructs an optimal variable-length code based on the frequencies (probabilities) of the symbols.

*   **Algorithm:**

    1.  **Initialization:** Create a leaf node for each symbol in the alphabet, and assign a weight equal to its probability. Add all nodes to a priority queue (min-heap) based on their weights.
    2.  **Iteration:**
        *   Extract the two nodes with the smallest weights from the queue.
        *   Create a new internal node. Assign the two extracted nodes as its children (left and right). The weight of the new node is the sum of the weights of its children.
        *   Insert the new node back into the queue.
    3.  **Termination:** Repeat step 2 until only one node remains in the queue. This is the root of the Huffman tree.
    4.  **Code Assignment:** Traverse the Huffman tree from the root to each leaf node. Assign '0' to the left branch and '1' to the right branch. The path from the root to a leaf represents the codeword for the corresponding symbol.

*   **Example:** Let's use the alphabet {A, B, C, D} with probabilities P(A) = 0.4, P(B) = 0.3, P(C) = 0.2, P(D) = 0.1.

    1.  Initial Nodes: A(0.4), B(0.3), C(0.2), D(0.1)
    2.  Combine D and C: New Node (C+D) = 0.3, Children: C(0.2), D(0.1).  Queue: A(0.4), B(0.3), (C+D)(0.3)
    3.  Combine B and (C+D): New Node (B+C+D) = 0.6, Children: B(0.3), (C+D)(0.3). Queue: A(0.4), (B+C+D)(0.6)
    4.  Combine A and (B+C+D): New Node (A+B+C+D) = 1.0, Children: A(0.4), (B+C+D)(0.6). Queue: (A+B+C+D)(1.0) - This is the root.

    Now, assign codes:
    *   A: 0
    *   B: 10
    *   C: 110
    *   D: 111

*   **Properties:** Huffman codes are optimal prefix codes in the sense that they minimize the average codeword length for a given probability distribution. However, they are not necessarily unique.

### 3.2 Shannon-Fano Coding

*   **Description:** Another variable-length prefix coding algorithm, though generally less efficient than Huffman coding.

*   **Algorithm:**

    1.  **Order:** Sort the symbols according to their probabilities in decreasing order.
    2.  **Partition:** Divide the symbols into two groups such that the sum of probabilities in each group is as close as possible.
    3.  **Assign Codes:** Assign '0' to all symbols in the first group and '1' to all symbols in the second group.
    4.  **Recursion:** Recursively apply steps 2 and 3 to each group until each group contains only one symbol.

*   **Example:** Let's use the alphabet {A, B, C, D} with probabilities P(A) = 0.4, P(B) = 0.3, P(C) = 0.2, P(D) = 0.1.

    1.  Order: A(0.4), B(0.3), C(0.2), D(0.1)
    2.  Partition: Group 1: A, B (0.7); Group 2: C, D (0.3)
    3.  Assign Codes: A = 0x, B = 0x, C = 1x, D = 1x
    4.  Recurse:
        *   Group 1: A(0.4), B(0.3) -> Partition: A(0.4), B(0.3) -> A = 00, B = 01
        *   Group 2: C(0.2), D(0.1) -> Partition: C(0.2), D(0.1) -> C = 10, D = 11

    Final Codes:
    *   A: 00
    *   B: 01
    *   C: 10
    *   D: 11

*   **Properties:** Shannon-Fano coding produces prefix codes, but it doesn't always guarantee optimal compression (minimum average codeword length).

## 4. Identifying and Resolving Ambiguity Issues

*   **Ambiguity:**  Occurs when a sequence of bits can be decoded into multiple possible sequences of symbols.

*   **How to identify ambiguity:**
    *   Check if any codeword is a prefix of another codeword.  If so, the code is ambiguous.
    *   Attempt to decode a sequence of bits. If you encounter a point where you can't uniquely determine the next symbol, the code is ambiguous.

*   **Resolving Ambiguity:**
    *   **Ensure Prefix Property:**  The most effective way to prevent ambiguity is to design the code as a prefix code.  Huffman coding and Shannon-Fano coding, when implemented correctly, guarantee this.
    *   **Use Delimiters (Less Common):** Introduce special symbols (delimiters) to separate codewords. This is less efficient but can be used if creating a prefix code is impossible or undesirable.

## 5. Evaluating the Efficiency of Different Variable-Length Coding Schemes

*   **Average Codeword Length (L):** A key metric for evaluating the efficiency of a coding scheme. It's calculated as:

    L = ∑<sub>i=1</sub><sup>n</sup> P(s<sub>i</sub>) * l<sub>i</sub>

    Where:
    *   P(s<sub>i</sub>) is the probability of symbol s<sub>i</sub>
    *   l<sub>i</sub> is the length of the codeword assigned to symbol s<sub>i</sub>
    *   n is the number of symbols in the alphabet.

*   **Entropy (H):** The theoretical lower bound on the average codeword length. It represents the average amount of information contained in each symbol.  Calculated as:

    H = - ∑<sub>i=1</sub><sup>n</sup> P(s<sub>i</sub>) * log<sub>2</sub>(P(s<sub>i</sub>))

*   **Efficiency (η):**  Measures how close the average codeword length is to the entropy.

    η = H / L

    A higher efficiency indicates a better coding scheme.  An efficiency of 1 (or 100%) means the code has achieved the theoretical lower bound for compression.

*   **Redundancy (R):**  The difference between the average codeword length and the entropy.

    R = L - H

    Redundancy represents the extra bits used beyond the minimum required.  A lower redundancy indicates a better coding scheme.

*   **Comparing Huffman and Shannon-Fano:** Generally, Huffman coding is more efficient than Shannon-Fano coding because it aims to minimize the average codeword length during the tree construction process.  However, Shannon-Fano is easier to implement.

## Practice Questions/Exercises

1.  **Decoding:** Given the Huffman code: A=0, B=10, C=110, D=111. Decode the sequence: 0101100111.

    **Answer:** A B C A D

2.  **Huffman Coding:** Construct a Huffman code for the alphabet {E, F, G, H, I} with probabilities P(E) = 0.3, P(F) = 0.25, P(G) = 0.2, P(H) = 0.15, P(I) = 0.1.  What are the resulting codewords?

    **Answer:** (One possible solution): E=00, F=01, G=10, H=110, I=111

3.  **Shannon-Fano Coding:** Construct a Shannon-Fano code for the same alphabet and probabilities as in question 2.  What are the resulting codewords?

    **Answer:** (One possible solution): E=00, F=01, G=10, H=110, I=111

4.  **Average Codeword Length:** Calculate the average codeword length for the Huffman code generated in question 2.

    **Answer:** L = (0.3 * 2) + (0.25 * 2) + (0.2 * 2) + (0.15 * 3) + (0.1 * 3) = 2.25 bits/symbol

5.  **Entropy Calculation:** Calculate the entropy for the probability distribution given in question 2.

    **Answer:** H = - (0.3 * log2(0.3)) - (0.25 * log2(0.25)) - (0.2 * log2(0.2)) - (0.15 * log2(0.15)) - (0.1 * log2(0.1)) ≈ 2.226 bits/symbol

6. **Efficiency:** Calculate the efficiency of the Huffman code generated in Question 2, using the entropy calculated in Question 5 and the average codeword length calculated in Question 4.

    **Answer:** η = 2.226/2.25 = 0.989 or 98.9%

7. **Prefix Code Check:** Is the following code a prefix code: A=1, B=10, C=110, D=1110, E=1111?

    **Answer:** Yes, it is a prefix code. No codeword is a prefix of any other codeword.

## Important Points to Remember

*   Variable-length codes are more efficient than fixed-length codes when symbol probabilities are skewed.
*   Prefix codes are crucial for ensuring unique decodability.
*   Huffman coding is generally more efficient than Shannon-Fano coding, but both are valuable prefix coding techniques.
*   Average codeword length, entropy, and efficiency are key metrics for evaluating the performance of data compression schemes.
*   Always check for ambiguity when designing variable-length codes.
