---
title: "Low Density Parity Codes"
subject: "CODING THEORY"
module: "Module 4: Review on Convolution Codes"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff234"
status: "completed"
scrapedAt: "2026-05-23T18:05:24.803Z"
---
# CODING THEORY: Module 4 - Review on Convolutional Codes

## Topic: Low Density Parity Check (LDPC) Codes

This module provides a review of convolutional codes, and within this context, we will now delve into Low Density Parity Check (LDPC) codes. While LDPC codes are technically block codes, their introduction here is often to contrast their structure and decoding complexity with earlier codes, and to highlight modern advancements in coding theory.

### Learning Outcomes Covered in this Topic:

*   **Illustrate modern error correcting codes like ... LDPC codes ...** (CO6: K2)

### 1. Introduction to LDPC Codes

LDPC codes are a class of linear block codes that can approach the Shannon limit, making them highly efficient error-correcting codes. They are characterized by their sparse parity-check matrices.

*   **Key Concept:** **Sparse Parity-Check Matrix (H)**
    *   A parity-check matrix `H` is considered "sparse" if it contains a relatively small number of '1's (non-zero entries) in each row and column, compared to the total number of entries.
    *   **Definition:** An `m x n` parity-check matrix `H` is called a **low-density parity-check matrix** if the number of '1's in each row and column is small and bounded, independent of the code length `n`. This small number is often referred to as the **weight** of the row/column.

*   **Why Sparse?**
    *   **Efficient Decoding:** The sparsity of `H` is crucial for enabling efficient decoding algorithms, particularly iterative decoding.
    *   **Reduced Complexity:** Compared to codes with dense parity-check matrices (like some traditional block codes), LDPC codes offer lower computational complexity during decoding for a given performance level.

*   **Historical Context:**
    *   LDPC codes were first introduced by **Robert Gallager** in his 1962 PhD thesis.
    *   However, due to the complexity of constructing them and the lack of efficient decoding algorithms at the time, they were largely forgotten until their rediscovery in the late 1990s by **Mackay**.

*   **Connection to Course Outcomes:**
    *   **CO6 (Illustrate modern error correcting codes like ... LDPC codes):** This topic directly addresses this outcome by introducing LDPC codes as a significant modern error-correcting code.

### 2. Structure of LDPC Codes

LDPC codes are defined by their parity-check matrix `H`.

*   **Parity-Check Matrix (H):**
    *   For a linear block code of length `n` with `k` information bits, the parity-check matrix `H` is an `(n-k) x n` matrix.
    *   The rows of `H` are linearly independent, and the code is the null space of `H`.
    *   A codeword `c` satisfies `Hc^T = 0`.

*   **Tanner Graph Representation:**
    *   **Key Concept:** LDPC codes are often visualized and analyzed using a bipartite graph called the **Tanner graph**.
    *   **Definition:** A Tanner graph for an LDPC code with parity-check matrix `H` has two sets of nodes:
        *   **Variable Nodes (V):** `n` nodes, each representing a bit in the codeword.
        *   **Check Nodes (C):** `m` nodes (where `m = n-k`), each representing a parity-check equation.
    *   An edge exists between a variable node `v_i` and a check node `c_j` if and only if the entry `H_{ji}` in the parity-check matrix is '1'.
    *   **Properties of the Tanner Graph:**
        *   Each variable node has a degree equal to the number of '1's in its corresponding column in `H`.
        *   Each check node has a degree equal to the number of '1's in its corresponding row in `H`.
        *   In a "regular" LDPC code, all variable nodes have the same degree (say, `d_v`) and all check nodes have the same degree (say, `d_c`).
        *   In an "irregular" LDPC code, the degrees of variable and check nodes can vary.

*   **Example: A Simple LDPC Code**
    Consider a code with `n=6` and `k=3`. The parity-check matrix `H` could be:
    ```
    H = | 1 1 0 1 0 0 |
        | 0 1 1 0 1 0 |
        | 0 0 1 1 0 1 |
    ```
    Here, `m = n-k = 6-3 = 3`.
    *   The number of '1's in each row is 3.
    *   The number of '1's in each column is either 1 or 2.
    *   This is a low-density matrix.

    **Tanner Graph for the example:**
    *   Variable Nodes: $v_1, v_2, v_3, v_4, v_5, v_6$
    *   Check Nodes: $c_1, c_2, c_3$

    Edges:
    *   $(v_1, c_1), (v_2, c_1), (v_4, c_1)$
    *   $(v_2, c_2), (v_3, c_2), (v_5, c_2)$
    *   $(v_3, c_3), (v_4, c_3), (v_6, c_3)$

    *(Imagine a bipartite graph with these connections)*

### 3. Construction of LDPC Codes

The performance of LDPC codes is highly dependent on the structure of their parity-check matrices. There are two main approaches:

*   **Pseudorandom LDPC Codes:**
    *   These codes are constructed by randomly placing the '1's in the parity-check matrix, subject to constraints to ensure good error-correction properties.
    *   **Constraints:**
        *   Each row must have a specified number of '1's (row weight).
        *   Each column must have a specified number of '1's (column weight).
        *   **No small cycles:** The Tanner graph should ideally not contain short cycles (especially cycles of length 4). Cycles of length 4 in the Tanner graph correspond to a structure in `H` where there's a submatrix of the form:
          ```
          | 1 1 0 0 |
          | 1 1 0 0 |
          | 0 0 1 1 |
          | 0 0 1 1 |
          ```
          or permutations. Small cycles can lead to error propagation during iterative decoding, degrading performance.
    *   **How to build:** Randomly assign '1's to satisfy the weight constraints, then check for small cycles. If small cycles exist, regenerate parts of the matrix.
    *   **Textbook Reference:** Discussions on constructing pseudorandom codes can be found in **Shu Lin & Daniel J. Costello. Jr.'s "Error Control Coding: Fundamentals and Applications"**, particularly in sections discussing modern block codes and their properties.

*   **Structured LDPC Codes:**
    *   These codes are constructed using specific patterns or algebraic methods to guarantee the absence of short cycles and often to facilitate efficient encoding.
    *   **Examples:**
        *   **Circulant Matrices:** LDPC codes can be constructed using circulant matrices, where each row is a cyclic shift of the row above it. This can help avoid short cycles.
        *   **Quasi-Cyclic LDPC Codes:** These codes are composed of circulant blocks, which makes them easier to encode.
        *   **Finite Geometries and Designs:** More advanced constructions leverage concepts from combinatorial design theory, such as finite projective planes, to create LDPC codes with provably good properties and no short cycles.
    *   **Textbook Reference:** **"Modern Coding Theory" by T. Richardson and R. Urbanke** provides in-depth coverage of various construction methods for LDPC codes, including those based on finite geometries and their theoretical underpinnings.

*   **Regular vs. Irregular LDPC Codes:**
    *   **Regular LDPC Codes:** All variable nodes have the same degree `d_v`, and all check nodes have the same degree `d_c`. Simpler to analyze.
    *   **Irregular LDPC Codes:** Variable and check node degrees vary according to specific degree distributions.
    *   **Key Insight (Mackay):** By carefully choosing **irregular degree distributions**, one can achieve better performance than regular LDPC codes. This involves having some high-degree variable nodes (more robust) and some low-degree check nodes (less likely to cause error propagation).
    *   **Analysis:** The performance of irregular LDPC codes is often analyzed using density evolution, a technique that tracks the distribution of messages passed on the Tanner graph during iterative decoding.

### 4. Decoding of LDPC Codes

The power of LDPC codes lies in their efficient decoding algorithms, primarily **belief propagation (BP)** and its variants.

*   **Iterative Decoding:** LDPC codes are almost exclusively decoded using iterative algorithms.
    *   **Principle:** The decoder iteratively exchanges "messages" (beliefs or probabilities) between variable nodes and check nodes on the Tanner graph.
    *   **Goal:** To refine the estimate of each codeword bit until a satisfactory level of confidence is reached.

*   **Message Passing Algorithms:**
    *   **Belief Propagation (BP):** The foundational algorithm. It passes "soft" messages (probability distributions or log-likelihood ratios - LLRs) on the edges of the Tanner graph.
        *   **Variable-to-Check (V2C) Message:** A variable node sends its current belief about the bit's value to connected check nodes.
        *   **Check-to-Variable (C2V) Message:** A check node aggregates the messages from connected variable nodes to determine if the parity-check equation is satisfied. It then sends updated beliefs back to the variable nodes.
    *   **Minimum Sum (MS) Decoding:** A simplification of BP that is computationally less intensive. Instead of summing probabilities, it finds the minimum of values.
    *   **Sum-Product Algorithm (SPA):** Essentially the same as Belief Propagation when applied to the Tanner graph.

*   **Decoding Process (Simplified View):**
    1.  **Initialization:** The decoder receives the noisy received vector (often as LLRs) and initializes the messages at the variable nodes.
    2.  **Iteration 1:**
        *   Variable nodes send messages to check nodes.
        *   Check nodes process these messages and send updated messages back to variable nodes.
    3.  **Subsequent Iterations:** Steps from Iteration 1 are repeated. With each iteration, the messages become more refined, and the estimates of the codeword bits improve.
    4.  **Termination:** The decoder stops after a maximum number of iterations or when a convergence criterion is met (e.g., the estimated codeword satisfies the parity-check equations).

*   **Performance:**
    *   **Proximity to Shannon Limit:** LDPC codes, when decoded with BP or a close variant, can achieve performance very close to the Shannon capacity of the channel, especially for long code lengths.
    *   **Threshold Effect:** LDPC codes exhibit a "threshold effect." Below a certain signal-to-noise ratio (SNR), decoding fails catastrophically; above it, they can decode with very low error probabilities. This threshold is very close to the channel capacity.
    *   **Code Length Dependence:** The performance and decoding complexity of LDPC codes are highly dependent on their length `n`. Longer codes generally offer better performance but require more decoding iterations and computational power.

*   **Textbook Reference:**
    *   **Shu Lin & Daniel J. Costello. Jr.'s "Error Control Coding: Fundamentals and Applications"** dedicates significant portions to iterative decoding algorithms like BP and their application to LDPC codes.
    *   **"Modern Coding Theory" by T. Richardson and R. Urbanke** provides a rigorous mathematical treatment of belief propagation and density evolution for analyzing LDPC code performance.
    *   **"Principles of digital communication" by RG Gallager** is the foundational text where the concept of iterative decoding for LDPC codes was first introduced.

### 5. Applications of LDPC Codes

LDPC codes have found widespread use in modern communication systems due to their excellent performance and flexibility.

*   **Digital Video Broadcasting (DVB-S2):** LDPC codes are used for satellite communication.
*   **Wi-Fi (IEEE 802.11n, 802.11ac, 802.11ax):** Used in Wi-Fi standards for improved reliability and throughput.
*   **5G NR (New Radio):** LDPC codes are a key component of the forward error correction (FEC) scheme in 5G cellular networks.
*   **DSL (Digital Subscriber Line):** Used in broadband internet access over telephone lines.
*   **Solid State Drives (SSDs):** For error correction in flash memory.

*   **Reference Book:** The NPTEL course "LDPC and Polar Codes in 5G Standard" by A. Thangaraj would provide specific details on LDPC code usage in 5G.

### 6. Important Points to Remember

*   **Sparsity is Key:** The low density of '1's in the parity-check matrix is the defining characteristic and the enabler of efficient iterative decoding.
*   **Tanner Graph:** A powerful visualization tool for understanding the structure of LDPC codes and for guiding decoding algorithms.
*   **Iterative Decoding:** Belief Propagation (BP) and its variants are the primary decoding methods.
*   **Proximity to Shannon Limit:** LDPC codes are among the most powerful codes in practice, capable of achieving performance very close to theoretical limits.
*   **Threshold Effect:** A sharp transition in performance as the SNR changes.
*   **Code Length Matters:** Performance generally improves with increasing code length, but at the cost of higher complexity.
*   **Pseudorandom vs. Structured:** Both construction methods are used, with pseudorandom offering flexibility and structured codes offering guaranteed properties and sometimes easier encoding.
*   **Irregularity Advantage:** Properly designed irregular LDPC codes can outperform regular ones.

### Practice Questions and Exercises

1.  **Question:** What is the fundamental property of the parity-check matrix `H` that defines an LDPC code?
    **Answer:** The parity-check matrix `H` of an LDPC code is sparse, meaning it contains a small and bounded number of '1's in each row and column, independent of the code length.

2.  **Question:** Explain the role of the Tanner graph in the context of LDPC codes.
    **Answer:** The Tanner graph is a bipartite graph used to represent the structure of an LDPC code. It has variable nodes (representing codeword bits) and check nodes (representing parity-check equations). An edge connects a variable node to a check node if the corresponding entry in the parity-check matrix is '1'. This graph is essential for visualizing the code's structure and for understanding message-passing decoding algorithms.

3.  **Question:** Briefly describe the iterative decoding process for LDPC codes.
    **Answer:** Iterative decoding involves multiple rounds (iterations) of message passing between variable nodes and check nodes on the Tanner graph. Variable nodes pass their current bit estimates (beliefs) to connected check nodes. Check nodes combine these beliefs to check parity equations and send updated beliefs back to the variable nodes. This process is repeated until the estimates converge or a maximum number of iterations is reached.

4.  **Question:** Why are LDPC codes considered "modern" error-correcting codes, and what is their main advantage?
    **Answer:** LDPC codes are considered modern because they were rediscovered and their efficient decoding algorithms developed in the late 1990s, enabling them to achieve performance very close to the Shannon limit, which was a long-standing goal in coding theory. Their main advantage is their excellent error-correction capability and their adaptability to various communication standards.

5.  **Question:** What is meant by the "threshold effect" in LDPC codes?
    **Answer:** The threshold effect refers to the sharp transition in the performance of LDPC codes as the signal-to-noise ratio (SNR) changes. Below a certain SNR (the threshold), the decoder fails to correct errors, resulting in a high bit error rate. Above the threshold, the decoder can correct errors with very low probability. This threshold is very close to the channel's capacity.

6.  **Exercise (Conceptual):** Consider an LDPC code with a parity-check matrix `H` where all columns have weight 2 and all rows have weight 3.
    *   If the code length `n` is 100, how many check nodes (`m`) are there, assuming it's a regular LDPC code?
    *   **Hint:** The total number of '1's in `H` can be calculated in two ways: (sum of column weights) and (sum of row weights).
    *   **Answer:**
        *   Total number of '1's = (column weight) * n = 2 * 100 = 200.
        *   Total number of '1's = (row weight) * m = 3 * m.
        *   Therefore, 3 * m = 200. This equation implies that `m` would not be an integer (200/3). This highlights a crucial constraint: for a regular LDPC code, `(column weight) * n = (row weight) * m`. This means that the product of column weight and code length must be divisible by the row weight. In a practical construction, either the column weights, row weights, or code length would need to be adjusted to satisfy this divisibility for regularity.
        *   If we assume a valid regular construction exists, and say the row weight was 4 instead of 3, then: 4 * m = 200 => m = 50 check nodes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 7. References and Further Reading

*   **Shu Lin & Daniel J. Costello. Jr. - Error Control Coding: Fundamentals and Applications (2nd Edition):** Provides a solid introduction to LDPC codes, their properties, and decoding.
*   **T. Richardson, R. Urbanke - Modern Coding Theory:** Offers a deeper, more theoretical treatment of LDPC code construction, analysis (density evolution), and decoding algorithms.
*   **RG Gallager - Principles of digital communication:** The foundational work where LDPC codes and their iterative decoding were first proposed.
*   **NPTEL Course (A. Thangaraj) - LDPC and Polar Codes in 5G Standard:** Essential for understanding the practical implementation and significance of LDPC codes in modern communication systems like 5G.

This concludes the section on LDPC codes within the review of convolutional codes. While LDPC codes are block codes, their introduction here serves to highlight the evolution of error correction techniques towards codes that can operate close to the Shannon limit, driven by efficient iterative decoding.