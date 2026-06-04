---
title: "Review on LBC-Generator matrix"
subject: "CODING THEORY"
module: "Module 2: Error Control Coding – Relevance of error control codes in Communication System"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff222"
status: "completed"
scrapedAt: "2026-05-23T18:05:11.196Z"
---
Absolutely! Here are comprehensive study notes for the "Review on LBC-Generator matrix" topic within Module 2 of Coding Theory, designed to meet your requirements:

---

# CODING THEORY: Module 2 - Error Control Coding - Relevance of Error Control Codes in Communication System

## Topic: Review on LBC-Generator Matrix

### 1. Introduction to Linear Block Codes (LBCs)

Linear Block Codes (LBCs) are a fundamental class of error-correcting codes used extensively in digital communication systems. Their linearity property simplifies encoding and decoding processes and allows for powerful algebraic analysis.

*   **Definition:** A block code is linear if the sum (modulo 2, i.e., XOR) of any two codewords is also a codeword.
*   **Vector Space:** The set of all possible codewords for a linear block code forms a vector subspace of the vector space $GF(2)^n$, where $n$ is the block length.
*   **Parameters of an LBC:**
    *   **n:** Codeword length (total number of bits in a transmitted codeword).
    *   **k:** Message length (number of bits in the original message).
    *   **d_min:** Minimum Hamming distance between any two distinct codewords. This determines the error-detecting and error-correcting capabilities of the code.
    *   **(n, k) Code:** An LBC with parameters $n$ and $k$.

### 2. The Generator Matrix ($G$)

The generator matrix is the cornerstone for defining and generating codewords in a linear block code.

*   **Definition:** The generator matrix $G$ of an $(n, k)$ linear block code is a $k \times n$ matrix over $GF(2)$ whose rows are a basis for the code's vector subspace.
*   **Properties of $G$:**
    *   Each row of $G$ is a codeword.
    *   The $k$ rows of $G$ are linearly independent.
    *   Any codeword $c$ can be represented as $c = mG$, where $m$ is a $1 \times k$ message vector (row vector).
*   **Codeword Generation:**
    Given a message vector $m = [m_1, m_2, \dots, m_k]$, the corresponding codeword $c = [c_1, c_2, \dots, c_n]$ is obtained by the matrix multiplication:
    $c = mG$
    (All operations are performed over $GF(2)$).

*   **Example:**
    Consider a $(7, 3)$ systematic linear block code with generator matrix:
    $G = \begin{bmatrix} 1 & 0 & 0 & 1 & 1 & 0 & 1 \\ 0 & 1 & 0 & 1 & 0 & 1 & 1 \\ 0 & 0 & 1 & 0 & 1 & 1 & 0 \end{bmatrix}$
    Let the message vector be $m = [1, 0, 1]$.
    The codeword $c$ is:
    $c = mG = [1, 0, 1] \begin{bmatrix} 1 & 0 & 0 & 1 & 1 & 0 & 1 \\ 0 & 1 & 0 & 1 & 0 & 1 & 1 \\ 0 & 0 & 1 & 0 & 1 & 1 & 0 \end{bmatrix}$
    $c = [(1\cdot1 + 0\cdot0 + 1\cdot0), (1\cdot0 + 0\cdot1 + 1\cdot0), (1\cdot0 + 0\cdot0 + 1\cdot1), (1\cdot1 + 0\cdot1 + 1\cdot0), (1\cdot1 + 0\cdot0 + 1\cdot1), (1\cdot0 + 0\cdot1 + 1\cdot1), (1\cdot1 + 0\cdot1 + 1\cdot0)]$
    $c = [1, 0, 1, 1, 0, 0, 1]$ (Modulo 2)

**Relationship to Course Outcomes:**

*   **CO1:** Explaining the generator matrix involves understanding the algebraic structure of a vector subspace over $GF(2)$. (K2)
*   **CO2:** The generator matrix implicitly defines the error detection and correction capabilities, as it generates the set of valid codewords. (K2)
*   **CO3:** Generating a codeword using the generator matrix is a direct application of linear block codes. (K3)
*   **CO4:** Understanding different forms of the generator matrix (e.g., systematic) helps in constructing codes with desirable properties. (K3)

### 3. Systematic Form of the Generator Matrix

A systematic code is one where the original message bits appear unchanged in the transmitted codeword. This simplifies the decoding process significantly.

*   **Definition:** A generator matrix $G$ is in systematic form if it can be written as $G = [I_k | P]$, where:
    *   $I_k$ is the $k \times k$ identity matrix.
    *   $P$ is a $k \times (n-k)$ matrix.
*   **Codeword Structure:** For a systematic code, if $m = [m_1, m_2, \dots, m_k]$, then the codeword $c = [m_1, m_2, \dots, m_k | p_1, p_2, \dots, p_{n-k}]$, where the last $n-k$ bits are parity bits calculated from the message bits.

*   **Example (Continuing from above):**
    The generator matrix $G = \begin{bmatrix} 1 & 0 & 0 & 1 & 1 & 0 & 1 \\ 0 & 1 & 0 & 1 & 0 & 1 & 1 \\ 0 & 0 & 1 & 0 & 1 & 1 & 0 \end{bmatrix}$ is in systematic form because the first $k=3$ columns form the $3 \times 3$ identity matrix. Here, $I_3 = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$ and $P = \begin{bmatrix} 1 & 1 & 0 & 1 \\ 1 & 0 & 1 & 1 \\ 0 & 1 & 1 & 0 \end{bmatrix}$.

*   **Important Note:** Not all generator matrices are initially in systematic form. However, any linear block code can be represented by a generator matrix in systematic form. This can be achieved by performing elementary row operations on the original generator matrix.

**Relationship to Course Outcomes:**

*   **CO3:** The systematic form of $G$ directly facilitates the application of linear block codes by making message bits readily identifiable in the codeword. (K3)
*   **CO4:** Understanding how to transform a generator matrix into systematic form is an algebraic technique for code construction with reduced complexity in decoding. (K3)

### 4. Properties related to the Generator Matrix

The generator matrix $G$ holds vital information about the code's structure and performance.

*   **Span Property:** The set of all codewords, denoted by $C$, is the span of the rows of $G$. $C = \{mG \mid m \in GF(2)^k\}$.
*   **Dimension of the Code:** The dimension of the code $C$ is equal to $k$, the number of rows in $G$.
*   **Minimum Distance ($d_{min}$):** The minimum distance $d_{min}$ of an LBC is equal to the minimum Hamming weight of any non-zero codeword.
    *   **Hamming Weight:** The number of non-zero (or '1') entries in a vector or codeword.
    *   **Calculating $d_{min}$:**
        1.  Generate all $2^k$ codewords and find the minimum non-zero Hamming weight. This is computationally expensive for large $k$.
        2.  A more efficient way is to consider the weights of linear combinations of the rows of $G$. The minimum weight of a non-zero codeword is the minimum weight of any non-zero linear combination of the rows of $G$.
        *   $d_{min} = \min \{wt(c) \mid c \in C, c \neq 0\}$
        *   $d_{min} = \min \{wt(mG) \mid m \in GF(2)^k, m \neq 0\}$

**Relationship to Course Outcomes:**

*   **CO2:** The minimum Hamming weight, derived from the generator matrix, directly dictates error detection and correction capabilities. A code with $d_{min}$ can detect up to $d_{min}-1$ errors and correct up to $\lfloor (d_{min}-1)/2 \rfloor$ errors. (K2)
*   **CO3:** Understanding how $d_{min}$ relates to codewords generated by $G$ is crucial for applying LBCs. (K3)
*   **CO4:** Techniques to construct generator matrices that yield a desired minimum distance are part of code design. (K3)

### 5. Relation to the Parity Check Matrix ($H$)

The parity check matrix $H$ is dual to the generator matrix $G$ and is essential for error detection and syndrome calculation.

*   **Definition:** The parity check matrix $H$ of an $(n, k)$ linear block code is an $(n-k) \times n$ matrix over $GF(2)$ such that $G H^T = 0$ (the zero matrix), where $H^T$ is the transpose of $H$.
*   **Property:** For any codeword $c$, it must satisfy the parity check equation: $c H^T = 0$.
*   **Syndrome:** When a received vector $y$ is not a valid codeword (i.e., it contains errors), the syndrome $s$ is calculated as $s = y H^T$.
    *   If $s = 0$, no error is detected (or the error pattern is undetectable by this code).
    *   If $s \neq 0$, an error has occurred, and the syndrome can often be used to identify the error location.

*   **Systematic Parity Check Matrix:** If $G = [I_k | P]$, then the corresponding systematic parity check matrix is $H = [P^T | I_{n-k}]$.

*   **Example (Continuing from above):**
    For $G = \begin{bmatrix} 1 & 0 & 0 & 1 & 1 & 0 & 1 \\ 0 & 1 & 0 & 1 & 0 & 1 & 1 \\ 0 & 0 & 1 & 0 & 1 & 1 & 0 \end{bmatrix}$ ($k=3, n=7$), $P = \begin{bmatrix} 1 & 1 & 0 & 1 \\ 1 & 0 & 1 & 1 \\ 0 & 1 & 1 & 0 \end{bmatrix}$.
    The systematic parity check matrix is:
    $H = [P^T | I_{n-k}] = \begin{bmatrix} 1 & 1 & 0 & | & 1 & 0 & 0 \\ 1 & 0 & 1 & | & 0 & 1 & 0 \\ 0 & 1 & 1 & | & 0 & 0 & 1 \end{bmatrix}$
    This is a $3 \times 7$ matrix $(n-k = 7-3=4)$. Wait, this is wrong. $H$ should be $(n-k) \times n$.
    Let's re-check the structure. For $G=[I_k|P]$, $H=[P^T|I_{n-k}]$.
    So, $P^T = \begin{bmatrix} 1 & 1 & 0 \\ 1 & 0 & 1 \\ 0 & 1 & 1 \\ 1 & 1 & 0 \end{bmatrix}$. This is a $4 \times 3$ matrix.
    $I_{n-k} = I_4 = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$. This is a $4 \times 4$ matrix.
    Ah, the example $G$ has $n=7, k=3$. So $n-k = 4$.
    $G = [I_3 | P]$ where $P$ is $3 \times 4$.
    $P = \begin{bmatrix} 1 & 1 & 0 & 1 \\ 1 & 0 & 1 & 1 \\ 0 & 1 & 1 & 0 \end{bmatrix}$.
    Then $P^T = \begin{bmatrix} 1 & 1 & 0 \\ 1 & 0 & 1 \\ 0 & 1 & 1 \\ 1 & 1 & 0 \end{bmatrix}$. This is $4 \times 3$.
    $I_{n-k} = I_4 = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$. This is $4 \times 4$.
    So, $H = [P^T | I_{n-k}]$ is NOT the correct form.
    The correct form for $G=[I_k|P]$ is $H = [P^T | I_{n-k}]$ IF $P$ is $k \times (n-k)$ and $H$ is $(n-k) \times n$.
    Let's use the definition $G H^T = 0$.
    Let $G = [I_k | P]$. Then $G^T = \begin{bmatrix} I_k \\ P^T \end{bmatrix}$.
    Let $H = [H_1 | H_2]$ where $H_1$ is $(n-k) \times k$ and $H_2$ is $(n-k) \times (n-k)$.
    $G H^T = [I_k | P] \begin{bmatrix} H_1^T \\ H_2^T \end{bmatrix} = I_k H_1^T + P H_2^T = 0$.
    This means $H_1^T = -P H_2^T = P H_2^T$ (since we are in $GF(2)$).
    The simplest choice for $H_2$ is $I_{n-k}$. Then $H_2^T = I_{n-k}$.
    So, $H_1^T = P$. This means $H_1 = P^T$.
    Thus, $H = [P^T | I_{n-k}]$.

    Let's re-evaluate the example: $G = [I_3 | P]$, $k=3, n=7$.
    $P = \begin{bmatrix} 1 & 1 & 0 & 1 \\ 1 & 0 & 1 & 1 \\ 0 & 1 & 1 & 0 \end{bmatrix}$ (This is $3 \times 4$).
    $P^T = \begin{bmatrix} 1 & 1 & 0 \\ 1 & 0 & 1 \\ 0 & 1 & 1 \\ 1 & 1 & 0 \end{bmatrix}$ (This is $4 \times 3$).
    $I_{n-k} = I_4 = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$ (This is $4 \times 4$).
    So $H = [P^T | I_{n-k}]$ is NOT $H$ is $(n-k) \times n$.
    The structure is $H = [P^T | I_{n-k}]$ where $P^T$ is $(n-k) \times k$ and $I_{n-k}$ is $(n-k) \times (n-k)$.
    Therefore, $P^T$ must be $(n-k) \times k$.
    My $P$ matrix from the $G$ example was $3 \times 4$. This means $k=3$ and $n-k=4$. So $n=7$.
    $G = [I_3 | P]$ with $P$ being $3 \times 4$.
    $G = \begin{bmatrix} 1 & 0 & 0 & | & 1 & 1 & 0 & 1 \\ 0 & 1 & 0 & | & 1 & 0 & 1 & 1 \\ 0 & 0 & 1 & | & 0 & 1 & 1 & 0 \end{bmatrix}$
    Here $P = \begin{bmatrix} 1 & 1 & 0 & 1 \\ 1 & 0 & 1 & 1 \\ 0 & 1 & 1 & 0 \end{bmatrix}$.
    Then $P^T = \begin{bmatrix} 1 & 1 & 0 \\ 1 & 0 & 1 \\ 0 & 1 & 1 \\ 1 & 1 & 0 \end{bmatrix}$ (This is $4 \times 3$).
    $I_{n-k} = I_4 = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$ (This is $4 \times 4$).
    So $H = [P^T | I_4]$. This is a $4 \times (3+4) = 4 \times 7$ matrix. This is correct.
    $H = \begin{bmatrix} 1 & 1 & 0 & 1 & 0 & 0 & 0 \\ 1 & 0 & 1 & 0 & 1 & 0 & 0 \\ 0 & 1 & 1 & 0 & 0 & 1 & 0 \\ 1 & 1 & 0 & 0 & 0 & 0 & 1 \end{bmatrix}$

    Let's verify $GH^T=0$:
    $G = \begin{bmatrix} 1 & 0 & 0 & 1 & 1 & 0 & 1 \\ 0 & 1 & 0 & 1 & 0 & 1 & 1 \\ 0 & 0 & 1 & 0 & 1 & 1 & 0 \end{bmatrix}$
    $H^T = \begin{bmatrix} 1 & 1 & 0 & 1 \\ 1 & 0 & 1 & 1 \\ 0 & 1 & 1 & 0 \\ 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$
    $GH^T = \begin{bmatrix}
    (1\cdot1+0\cdot1+0\cdot0+1\cdot1+1\cdot0+0\cdot0+1\cdot0) & (1\cdot1+0\cdot0+0\cdot1+1\cdot0+1\cdot1+0\cdot0+1\cdot0) & (1\cdot0+0\cdot1+0\cdot1+1\cdot0+1\cdot0+0\cdot1+1\cdot0) & (1\cdot1+0\cdot1+0\cdot0+1\cdot0+1\cdot0+0\cdot0+1\cdot1) \\
    (0\cdot1+1\cdot1+0\cdot0+1\cdot1+0\cdot0+1\cdot0+1\cdot0) & (0\cdot1+1\cdot0+0\cdot1+1\cdot0+0\cdot1+1\cdot0+1\cdot0) & (0\cdot0+1\cdot1+0\cdot1+1\cdot0+0\cdot0+1\cdot0+1\cdot0) & (0\cdot1+1\cdot1+0\cdot0+1\cdot0+0\cdot0+1\cdot0+1\cdot1) \\
    (0\cdot1+0\cdot1+1\cdot0+0\cdot1+1\cdot0+1\cdot0+0\cdot0) & (0\cdot1+0\cdot0+1\cdot1+0\cdot0+1\cdot1+1\cdot0+0\cdot0) & (0\cdot0+0\cdot1+1\cdot1+0\cdot0+1\cdot0+1\cdot0+0\cdot0) & (0\cdot1+0\cdot1+1\cdot0+0\cdot0+1\cdot0+1\cdot0+0\cdot1)
    \end{bmatrix}$
    $GH^T = \begin{bmatrix}
    (1+0+0+1+0+0+0) & (1+0+0+0+1+0+0) & (0+0+0+0+0+0+0) & (1+0+0+0+0+0+1) \\
    (0+1+0+1+0+0+0) & (0+0+0+0+0+0+0) & (0+1+0+0+0+0+0) & (0+1+0+0+0+0+1) \\
    (0+0+0+0+0+0+0) & (0+0+1+0+1+0+0) & (0+0+1+0+0+0+0) & (0+0+0+0+0+0+0)
    \end{bmatrix}$
    $GH^T = \begin{bmatrix}
    0 & 0 & 0 & 0 \\
    0 & 0 & 0 & 0 \\
    0 & 0 & 0 & 0
    \end{bmatrix}$ (Modulo 2)
    This confirms the relationship.

**Relationship to Course Outcomes:**

*   **CO2:** The parity check matrix $H$ is directly used for error detection and correction via syndrome calculation. (K2)
*   **CO3:** Calculating the syndrome using $H$ is a key step in applying LBCs for error correction. (K3)
*   **CO4:** Understanding the duality between $G$ and $H$ and how to derive one from the other is an algebraic technique in code construction. (K3)

### 6. Important Points to Remember

*   **Linearity is Key:** All operations on codewords (addition, scalar multiplication) are performed modulo 2.
*   **Generator Matrix $G$:** Defines the code space. Any linear combination of its rows is a codeword. $c = mG$.
*   **Systematic Form $G = [I_k | P]$:** Simplifies decoding as message bits are directly visible.
*   **Minimum Distance $d_{min}$:** Crucial for error-correction capability. $d_{min}$ is the minimum Hamming weight of any non-zero codeword.
*   **Parity Check Matrix $H$:** Used for error detection and syndrome calculation. $cH^T = 0$ for any codeword $c$.
*   **Syndrome $s = yH^T$:** Non-zero syndrome indicates an error.
*   **Duality:** $G H^T = 0$. If $G=[I_k|P]$, then $H=[P^T|I_{n-k}]$.

### 7. Practice Questions and Exercises

**Question 1:**
Consider a linear block code with the following generator matrix:
$G = \begin{bmatrix} 1 & 1 & 0 & 1 \\ 0 & 1 & 1 & 0 \end{bmatrix}$
(a) What are the parameters $(n, k)$ of this code?
(b) List all the codewords of this code.
(c) What is the minimum Hamming distance of this code?
(d) Is this code systematic? If not, can you find a systematic generator matrix for this code?
(e) Find the parity check matrix $H$ for this code.
(f) If the received vector is $y = [1, 0, 1, 1]$, what is the syndrome? Does it detect an error?

**Answer 1:**
(a) The matrix $G$ has 2 rows and 4 columns. Therefore, $k=2$ and $n=4$. The parameters are $(4, 2)$.
(b) The message space consists of $2^k = 2^2 = 4$ possible message vectors:
    *   $m_1 = [0, 0]$: $c_1 = [0, 0]G = [0, 0, 0, 0]$
    *   $m_2 = [0, 1]$: $c_2 = [0, 1]G = [0, 1, 1, 0]$
    *   $m_3 = [1, 0]$: $c_3 = [1, 0]G = [1, 1, 0, 1]$
    *   $m_4 = [1, 1]$: $c_4 = [1, 1]G = [1, 1, 0, 1] \oplus [0, 1, 1, 0] = [1, 0, 1, 1]$
    The codewords are $\{[0,0,0,0], [0,1,1,0], [1,1,0,1], [1,0,1,1]\}$.
(c) To find the minimum Hamming distance, we find the Hamming weight of the non-zero codewords:
    *   $wt([0,1,1,0]) = 2$
    *   $wt([1,1,0,1]) = 3$
    *   $wt([1,0,1,1]) = 3$
    The minimum non-zero Hamming weight is 2. So, $d_{min} = 2$.
(d) The code is not systematic because the first $k=2$ columns do not form an identity matrix.
    To find a systematic generator matrix, we can perform row operations. Swap the first and second rows of $G$:
    $G' = \begin{bmatrix} 0 & 1 & 1 & 0 \\ 1 & 1 & 0 & 1 \end{bmatrix}$
    Now, perform row operation $R_1 \leftarrow R_1 \oplus R_2$:
    $G'' = \begin{bmatrix} 1 & 0 & 1 & 1 \\ 1 & 1 & 0 & 1 \end{bmatrix}$ (This is not systematic, first column is correct but second is not)
    Let's try row operations on $G$:
    $G = \begin{bmatrix} 1 & 1 & 0 & 1 \\ 0 & 1 & 1 & 0 \end{bmatrix}$
    Swap row 1 and row 2 to bring a '1' in the top-left.
    $G' = \begin{bmatrix} 0 & 1 & 1 & 0 \\ 1 & 1 & 0 & 1 \end{bmatrix}$
    To get the first column as $[1, 0]^T$, we need to XOR row 1 with row 2.
    $R_1 \leftarrow R_1 \oplus R_2$:
    $G'' = \begin{bmatrix} 1 & 0 & 1 & 1 \\ 1 & 1 & 0 & 1 \end{bmatrix}$
    This is still not systematic. The first column is $[1, 1]^T$, not $[1, 0]^T$.

    Let's try an alternative approach to systematically form the matrix. We want to transform $G$ into $[I_k | P]$.
    $G = \begin{bmatrix} 1 & 1 & 0 & 1 \\ 0 & 1 & 1 & 0 \end{bmatrix}$
    To get $I_2$ in the first two columns:
    The first column is already $[1, 0]^T$. Good.
    The second column is $[1, 1]^T$. To make it $[0, 1]^T$, we need to perform $R_1 \leftarrow R_1 \oplus R_2$.
    $G_{new} = \begin{bmatrix} 1 \oplus 0 & 1 \oplus 1 & 0 \oplus 1 & 1 \oplus 0 \\ 0 & 1 & 1 & 0 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 1 & 1 \\ 0 & 1 & 1 & 0 \end{bmatrix}$
    Now, the first two columns form $I_2$. So, the systematic generator matrix is $G_{sys} = [I_2 | P]$ where $P = \begin{bmatrix} 1 & 1 \\ 1 & 0 \end{bmatrix}$.
    $G_{sys} = \begin{bmatrix} 1 & 0 & 1 & 1 \\ 0 & 1 & 1 & 0 \end{bmatrix}$
    Let's check if $G_{sys}$ generates the same code:
    *   $m=[0,0]: c=[0,0,0,0]$
    *   $m=[0,1]: c=[0,1,1,0]$
    *   $m=[1,0]: c=[1,0,1,1]$
    *   $m=[1,1]: c=[1,1,1\oplus1, 1\oplus0] = [1,1,0,1]$
    Yes, it generates the same codewords.
    So, a systematic generator matrix is $\begin{bmatrix} 1 & 0 & 1 & 1 \\ 0 & 1 & 1 & 0 \end{bmatrix}$.

(e) For $G_{sys} = [I_k | P]$, the parity check matrix is $H = [P^T | I_{n-k}]$.
    Here $k=2, n=4$, so $n-k=2$.
    $P = \begin{bmatrix} 1 & 1 \\ 1 & 0 \end{bmatrix}$.
    $P^T = \begin{bmatrix} 1 & 1 \\ 1 & 0 \end{bmatrix}$.
    $I_{n-k} = I_2 = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$.
    $H = [P^T | I_2] = \begin{bmatrix} 1 & 1 & | & 1 & 0 \\ 1 & 0 & | & 0 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 1 & 1 & 0 \\ 1 & 0 & 0 & 1 \end{bmatrix}$.

(f) Given $y = [1, 0, 1, 1]$.
    Calculate the syndrome $s = yH^T$:
    $H^T = \begin{bmatrix} 1 & 1 \\ 1 & 0 \\ 1 & 0 \\ 0 & 1 \end{bmatrix}$
    $s = [1, 0, 1, 1] \begin{bmatrix} 1 & 1 \\ 1 & 0 \\ 1 & 0 \\ 0 & 1 \end{bmatrix}$
    $s = [(1\cdot1 + 0\cdot1 + 1\cdot1 + 1\cdot0), (1\cdot1 + 0\cdot0 + 1\cdot0 + 1\cdot1)]$
    $s = [1+0+1+0, 1+0+0+1]$
    $s = [0, 0]$ (Modulo 2)
    The syndrome is $s = [0, 0]$. This means no error is detected.

    Let's recheck the calculation.
    $y = [1, 0, 1, 1]$.
    $H = \begin{bmatrix} 1 & 1 & 1 & 0 \\ 1 & 0 & 0 & 1 \end{bmatrix}$.
    Syndrome calculation: $s = yH^T$.
    $s_1 = y_1h_{11} + y_2h_{12} + y_3h_{13} + y_4h_{14} = 1(1) + 0(1) + 1(1) + 1(0) = 1+0+1+0 = 0$.
    $s_2 = y_1h_{21} + y_2h_{22} + y_3h_{23} + y_4h_{24} = 1(1) + 0(0) + 1(0) + 1(1) = 1+0+0+1 = 0$.
    Syndrome $s = [0, 0]$.

    Let's check if $y$ is a codeword. The codewords were $\{[0,0,0,0], [0,1,1,0], [1,1,0,1], [1,0,1,1]\}$.
    $y = [1, 0, 1, 1]$ is indeed a codeword ($c_4$). So, it's expected that the syndrome is zero. The question implies an error has occurred, but $y$ is a valid codeword. Let's assume a typo in the question and use a received vector with an error.

    Suppose $y = [1, 1, 1, 1]$. This is one bit flipped from $c_4=[1,0,1,1]$.
    $s_1 = 1(1) + 1(1) + 1(1) + 1(0) = 1+1+1+0 = 1$.
    $s_2 = 1(1) + 1(0) + 1(0) + 1(1) = 1+0+0+1 = 0$.
    Syndrome $s = [1, 0]$.
    This non-zero syndrome indicates an error. To correct, we look for a column in $H^T$ that matches the syndrome.
    $H^T = \begin{bmatrix} 1 & 1 \\ 1 & 0 \\ 1 & 0 \\ 0 & 1 \end{bmatrix}$.
    The syndrome is $[1, 0]$. The third column of $H^T$ is $[1, 0]^T$. This indicates the error is in the 3rd position.
    Received vector $y = [1, 1, 1, 1]$.
    Error vector $e = [0, 0, 1, 0]$.
    Corrected codeword $c = y \oplus e = [1, 1, 1, 1] \oplus [0, 0, 1, 0] = [1, 1, 0, 1]$.
    Let's check if $[1, 1, 0, 1]$ is a codeword. Yes, it is $c_3$.

**Question 2:**
Let the generator matrix of a $(6,3)$ linear block code be:
$G = \begin{bmatrix} 1 & 0 & 0 & 1 & 0 & 1 \\ 0 & 1 & 0 & 1 & 1 & 0 \\ 0 & 0 & 1 & 0 & 1 & 1 \end{bmatrix}$
(a) What is the minimum Hamming distance of this code? (Hint: Consider linear combinations of rows of $G$.)
(b) Determine the parity check matrix $H$.

**Answer 2:**
(a) $k=3, n=6$. $d_{min}$ is the minimum weight of a non-zero codeword.
    The rows of $G$ are:
    $r_1 = [1, 0, 0, 1, 0, 1]$ (weight 3)
    $r_2 = [0, 1, 0, 1, 1, 0]$ (weight 3)
    $r_3 = [0, 0, 1, 0, 1, 1]$ (weight 3)
    Consider sums of two rows:
    $r_1 \oplus r_2 = [1, 1, 0, 0, 1, 1]$ (weight 4)
    $r_1 \oplus r_3 = [1, 0, 1, 1, 1, 0]$ (weight 4)
    $r_2 \oplus r_3 = [0, 1, 1, 1, 0, 1]$ (weight 4)
    Consider sum of three rows:
    $r_1 \oplus r_2 \oplus r_3 = [1, 1, 1, 1, 0, 0]$ (weight 4)
    The minimum weight of any non-zero codeword is 3. Therefore, $d_{min} = 3$.

(b) Since $G$ is already in the form $[I_3 | P]$, where $P = \begin{bmatrix} 1 & 0 & 1 \\ 1 & 1 & 0 \\ 0 & 1 & 1 \end{bmatrix}$.
    The parity check matrix $H$ is $[P^T | I_{n-k}]$.
    $n-k = 6-3 = 3$. So $I_{n-k} = I_3$.
    $P^T = \begin{bmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \\ 1 & 0 & 1 \end{bmatrix}$.
    $I_3 = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$.
    $H = [P^T | I_3] = \begin{bmatrix} 1 & 1 & 0 & | & 1 & 0 & 0 \\ 0 & 1 & 1 & | & 0 & 1 & 0 \\ 1 & 0 & 1 & | & 0 & 0 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 1 & 0 & 1 & 0 & 0 \\ 0 & 1 & 1 & 0 & 1 & 0 \\ 1 & 0 & 1 & 0 & 0 & 1 \end{bmatrix}$.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 8. References

*   **Error Control Coding: Fundamentals and Applications** by Shu Lin & Daniel J. Costello, Jr. (Prentice Hall Inc, 2nd Edition) - Chapters related to linear block codes, generator matrices, and parity check matrices.
*   **Communication Systems** by Simon Haykin (John Wiley and Sons Inc, 4e) - Provides context on the role of error control codes in communication systems.
*   **Modern Coding Theory** by T. Richardson, R. Urbanke (Cambridge University Press) - Offers advanced perspectives on coding theory, including properties of codes defined by matrices.
*   **Principles of digital communication** by R.G. Gallager (Cambridge University Press) - Foundational text for digital communication and coding theory.
*   **Introduction to Coding Theory** by Ron M Roth (Cambridge University Press) - Excellent resource for understanding the algebraic foundations of coding theory, including generator matrices.

---