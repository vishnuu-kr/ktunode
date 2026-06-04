---
title: "Minimum Distance"
subject: "CODING THEORY"
module: "Module 2: Error Control Coding – Relevance of error control codes in Communication System"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff220"
status: "completed"
scrapedAt: "2026-05-23T18:05:09.534Z"
---
# CODING THEORY: Module 2 - Error Control Coding
## Topic: Minimum Distance

### 1. Introduction to Minimum Distance

**What is Minimum Distance?**

The minimum distance, denoted by $d_{min}$, of a code $C$ is the smallest Hamming distance between any two distinct codewords in $C$.

**Key Concept:** Hamming distance measures the number of positions at which two codewords of the same length differ.

**Definition (Hamming Distance):** For two binary vectors $\mathbf{x} = (x_1, x_2, \dots, x_n)$ and $\mathbf{y} = (y_1, y_2, \dots, y_n)$, the Hamming distance $d(\mathbf{x}, \mathbf{y})$ is defined as:

$d(\mathbf{x}, \mathbf{y}) = \sum_{i=1}^{n} |x_i - y_i| = |\{i : x_i \neq y_i\}|$

**Example:**
Let $\mathbf{x} = (1, 0, 1, 1)$ and $\mathbf{y} = (1, 1, 0, 1)$.
$d(\mathbf{x}, \mathbf{y}) = |1-1| + |0-1| + |1-0| + |1-1| = 0 + 1 + 1 + 0 = 2$.

**Minimum Distance of a Code:**
For a code $C = \{\mathbf{c}_1, \mathbf{c}_2, \dots, \mathbf{c}_M\}$, the minimum distance $d_{min}$ is:

$d_{min} = \min \{ d(\mathbf{c}_i, \mathbf{c}_j) : \mathbf{c}_i, \mathbf{c}_j \in C, \mathbf{c}_i \neq \mathbf{c}_j \}$

**Important Property:** For any linear code $C$, the minimum distance is equal to the minimum Hamming weight of any non-zero codeword.

**Definition (Hamming Weight):** The Hamming weight of a codeword $\mathbf{c}$, denoted by $w(\mathbf{c})$, is the number of non-zero entries in $\mathbf{c}$. For a binary code, this is the number of 1s in the codeword.

**Theorem:** For a linear code $C$, $d_{min} = \min \{ w(\mathbf{c}) : \mathbf{c} \in C, \mathbf{c} \neq \mathbf{0} \}$.

**Proof (Intuitive):**
Let $\mathbf{c}_i$ and $\mathbf{c}_j$ be two distinct codewords in a linear code $C$. Since $C$ is linear, the difference $\mathbf{c}_i - \mathbf{c}_j$ is also a codeword in $C$.
$d(\mathbf{c}_i, \mathbf{c}_j) = w(\mathbf{c}_i - \mathbf{c}_j)$ (for binary codes, subtraction is equivalent to XOR).
If $\mathbf{c}_i \neq \mathbf{c}_j$, then $\mathbf{c}_i - \mathbf{c}_j \neq \mathbf{0}$.
Therefore, the minimum distance between any two distinct codewords is the minimum weight of any non-zero codeword.

---

### 2. Relevance of Minimum Distance in Error Control Coding

The minimum distance is a crucial parameter that directly dictates the error detection and error correction capabilities of a code. This is a fundamental concept covered in **CO2** (Explain the error detection and correction capabilities of linear codes) and relevant to **CO3** (Apply linear block codes to detect and correct errors).

**Error Detection Capability:**

*   A code $C$ can detect up to $t$ errors if and only if its minimum distance $d_{min}$ satisfies $d_{min} \ge t+1$.
*   This means if no more than $t$ errors occur, the received word will not be a valid codeword.
*   **Explanation:** If $t$ errors occur, the received word $\mathbf{r}$ will differ from the transmitted codeword $\mathbf{c}$ in at most $t$ positions. So, $d(\mathbf{c}, \mathbf{r}) \le t$. If $d_{min} \ge t+1$, then $\mathbf{r}$ cannot be any other codeword $\mathbf{c}'$ because $d(\mathbf{c}', \mathbf{r}) \ge d_{min} \ge t+1$. Thus, the decoder can determine that an error has occurred.

**Error Correction Capability:**

*   A code $C$ can correct up to $t$ errors if and only if its minimum distance $d_{min}$ satisfies $d_{min} \ge 2t+1$.
*   **Explanation:** Suppose a codeword $\mathbf{c}$ is transmitted and $t$ errors occur, resulting in a received word $\mathbf{r}$ where $d(\mathbf{c}, \mathbf{r}) \le t$. If the code can correct up to $t$ errors, the decoder should be able to uniquely identify $\mathbf{c}$ as the transmitted codeword. This is possible if $\mathbf{r}$ is closer to $\mathbf{c}$ than to any other codeword $\mathbf{c}'$.
    *   The condition for unique decoding is: $d(\mathbf{c}, \mathbf{r}) < d_{min} - d(\mathbf{c}, \mathbf{r})$.
    *   If $d(\mathbf{c}, \mathbf{r}) \le t$, then we need $t < d_{min} - t$, which implies $2t < d_{min}$, or $d_{min} \ge 2t+1$.
    *   The "sphere of radius $t$" around $\mathbf{c}$ (all words within Hamming distance $t$ of $\mathbf{c}$) must not overlap with the sphere of radius $t$ around any other codeword $\mathbf{c}'$. The minimum distance of $2t+1$ ensures that the spheres of radius $t$ centered at different codewords are disjoint.

**Sphere Packing Bound (or Hamming Bound):**
This bound relates the code rate to the minimum distance, giving an upper limit on the number of codewords that can be packed into a given space without their "error spheres" overlapping. For binary codes of length $n$, dimension $k$ (message bits), and minimum distance $d_{min}$:

$M \cdot \sum_{i=0}^{t} \binom{n}{i} \le 2^n$, where $t = \lfloor \frac{d_{min}-1}{2} \rfloor$.
And $2^n$ is the total number of possible $n$-bit words.

*   **Significance:** This bound suggests that for a fixed length $n$ and a desired error correction capability $t$, there's a trade-off. To achieve higher $t$, the number of codewords $M$ must decrease, leading to a lower code rate ($k/n$). This is a fundamental limitation in coding theory.

---

### 3. Calculating Minimum Distance

Finding the minimum distance of a linear block code often involves examining the weights of all non-zero codewords. For large codes, this is computationally infeasible. However, for smaller codes or specific code structures, it can be done directly or through bounds.

**Methods:**

1.  **Brute Force (for small codes):**
    *   List all non-zero codewords.
    *   Calculate the Hamming weight of each non-zero codeword.
    *   The minimum of these weights is $d_{min}$.

2.  **Generator Matrix Method (for linear codes):**
    *   For a linear code $C$ with generator matrix $G$, any codeword $\mathbf{c}$ can be expressed as $\mathbf{c} = \mathbf{m}G$, where $\mathbf{m}$ is a message vector.
    *   The minimum distance is the minimum Hamming weight of all non-zero codewords generated by $\mathbf{m}G$.
    *   **Example:** If $G$ is in systematic form $G = [I_k | P]$, where $I_k$ is the $k \times k$ identity matrix and $P$ is a $k \times (n-k)$ matrix.
        *   A message vector $\mathbf{m} = (m_1, \dots, m_k)$.
        *   Codeword $\mathbf{c} = \mathbf{m}G = (m_1, \dots, m_k) [I_k | P] = (m_1, \dots, m_k, m_1 p_{11} + \dots + m_k p_{k1}, \dots)$.
        *   The weight of the codeword depends on the linear combinations of rows of $G$ (or columns of $P$, with the identity part).

3.  **Parity Check Matrix Method (for linear codes):**
    *   For a linear code $C$ with parity check matrix $H$, a codeword $\mathbf{c}$ satisfies $\mathbf{c}H^T = \mathbf{0}$.
    *   The minimum distance $d_{min}$ is the smallest integer $d$ such that there exist $d$ columns of $H$ that are linearly dependent.
    *   **Explanation:** If a set of $d$ columns of $H$ are linearly dependent, their sum is the zero vector. Let these columns be indexed by $i_1, i_2, \dots, i_d$. Then $h_{i_1} + h_{i_2} + \dots + h_{i_d} = \mathbf{0}$.
        If we choose a codeword $\mathbf{c}$ such that $c_{i_1}=1, c_{i_2}=1, \dots, c_{i_d}=1$ and all other entries are zero, then $\mathbf{c}H^T = \mathbf{0}$, meaning $\mathbf{c}$ is a codeword of weight $d$. The minimum such $d$ is $d_{min}$.
    *   This is a more efficient method than brute-forcing codewords, but checking all subsets of columns can still be computationally expensive for large $n$.

**Bounds on Minimum Distance:**

*   **Trivial Bound:** $d_{min} \le n+1$. (The maximum distance between any two binary vectors of length $n$ is $n$. The distance between $\mathbf{0}$ and $\mathbf{11\dots1}$ is $n$. So $d_{min}$ can't exceed $n$). Actually, $d_{min} \le n$.
*   **Singleton Bound:** $d_{min} \le n - k + 1$.
    *   This bound applies to any code (linear or non-linear).
    *   For linear codes, it's derived by considering the rank of submatrices of $H$.
    *   Codes that achieve this bound are called **Maximum Distance Separable (MDS)** codes. MDS codes are very efficient in terms of error correction for their length and number of parity bits.
*   **Plotkin Bound:** $d_{min} \le n \frac{M-1}{M \log_2 M}$ (for $M \ge 3$).
*   **Other Bounds:** Hamming Bound, Johnson Bound, Linear Programming Bound (more advanced, used to derive bounds for specific code families).

---

### 4. Examples

**Example 1: Hamming Code (7,4)**

*   Generator matrix $G$ or Parity Check matrix $H$ defines the code.
*   Let's use the parity check matrix $H$ for the (7,4) Hamming code:
    $H = \begin{pmatrix} 0 & 0 & 0 & 1 & 1 & 1 & 1 \\ 0 & 1 & 1 & 0 & 0 & 1 & 1 \\ 1 & 0 & 1 & 0 & 1 & 0 & 1 \end{pmatrix}$
*   The columns of $H$ are all the non-zero binary vectors of length 3, each appearing exactly once.
*   **Checking Linear Dependence of Columns:**
    *   Any single column is non-zero, so not linearly dependent.
    *   Let's check pairs of columns: Are any two columns the same? No. Are any two columns linearly dependent (i.e., one is a scalar multiple of the other)? For binary fields, this means one is equal to the other, which is not the case.
    *   Let's check triplets of columns:
        *   Consider columns 1, 2, 3: $\begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix} + \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix} + \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$? No, this is $\begin{pmatrix} 0 \\ 2 \\ 2 \end{pmatrix} \equiv \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix} \pmod 2$. Ah, this is correct. Columns 1, 2, 3 are: col1 = (0,0,1), col2 = (0,1,0), col3 = (0,1,1). Sum is (0,2,1) not zero.
        *   Let's try columns 1, 2, 4: $\begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix} + \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix} + \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix} \neq \mathbf{0}$.
        *   Let's check columns where the sum of entries is 2 (i.e., two columns are the same, which is not happening).
        *   Let's check where the sum of two columns is a third column.
        *   Consider columns 1 and 2: $\begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix} + \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}$. This is column 3.
        *   So, columns 1, 2, and 3 are linearly dependent: $h_1 + h_2 + h_3 = \mathbf{0}$.
*   This means there exists a codeword of weight 3. For example, if we set $c_1=1, c_2=1, c_3=1$ and all other bits to 0, then $\mathbf{c} = (0,0,1,1,0,0,0)$ is not a codeword. This is not how it works.
*   The linear dependence means that a codeword can be constructed with non-zero entries in positions corresponding to these columns.
    *   Let's consider a message $(0,0,0,1)$.
        The generator matrix $G$ for Hamming (7,4) in systematic form can be derived from $H = [P^T | I_3]$ (or $H = [I_3 | P]$ depending on convention).
        If $H = [P^T | I_3]$, then $P^T = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 1 & 1 \\ 1 & 0 & 1 \end{pmatrix}$, so $P = \begin{pmatrix} 0 & 0 & 1 \\ 0 & 1 & 0 \\ 0 & 1 & 1 \end{pmatrix}$.
        $G = [I_4 | P] = \begin{pmatrix} 1 & 0 & 0 & 0 & 0 & 0 & 1 \\ 0 & 1 & 0 & 0 & 0 & 1 & 0 \\ 0 & 0 & 1 & 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 1 & 1 & 0 & 1 \end{pmatrix}$
    *   Let's find a codeword of weight 3.
        Consider a message $\mathbf{m} = (0,0,0,1)$.
        $\mathbf{c} = (0,0,0,1) G = (0,0,0,1,1,0,1)$. Weight is 3.
    *   Since we found a codeword of weight 3, and no two columns are identical (so no weight 2 codewords), the minimum distance $d_{min}$ is 3.
*   **Error Detection/Correction for Hamming (7,4):**
    *   $d_{min} = 3$.
    *   Detect $t$ errors: $3 \ge t+1 \implies t \le 2$. Can detect 2 errors.
    *   Correct $t$ errors: $3 \ge 2t+1 \implies 2t \le 2 \implies t \le 1$. Can correct 1 error.

**Example 2: Repetition Code (3,1)**

*   A 1-bit message is repeated 3 times. $k=1, n=3$.
*   Message bits: (0), (1).
*   Codewords: (0,0,0), (1,1,1).
*   $C = \{(0,0,0), (1,1,1)\}$
*   Hamming distance between distinct codewords: $d((0,0,0), (1,1,1)) = 3$.
*   Minimum distance $d_{min} = 3$.
*   **Error Detection/Correction:**
    *   Detect $t$ errors: $3 \ge t+1 \implies t \le 2$. Can detect 2 errors.
    *   Correct $t$ errors: $3 \ge 2t+1 \implies t \le 1$. Can correct 1 error.
    *   If (0,0,0) is sent and (1,1,0) is received, it's 2 errors. $d((0,0,0), (1,1,0)) = 2$. $d((1,1,1), (1,1,0)) = 1$. Since (1,1,0) is closer to (1,1,1), it will be decoded as (1,1,1). This illustrates single error correction.

**Example 3: Simple Parity Code (3,2)**

*   Message bits: $(m_1, m_2)$.
*   Codeword: $(m_1, m_2, p)$, where $p = m_1 \oplus m_2$.
*   $k=2, n=3$.
*   Possible messages: (0,0), (0,1), (1,0), (1,1).
*   Codewords:
    *   (0,0) -> (0,0,0)
    *   (0,1) -> (0,1,1)
    *   (1,0) -> (1,0,1)
    *   (1,1) -> (1,1,0)
*   $C = \{(0,0,0), (0,1,1), (1,0,1), (1,1,0)\}$.
*   Let's calculate distances between distinct codewords:
    *   $d((0,0,0), (0,1,1)) = 2$
    *   $d((0,0,0), (1,0,1)) = 2$
    *   $d((0,0,0), (1,1,0)) = 2$
    *   $d((0,1,1), (1,0,1)) = d( (0\oplus1), (1\oplus0), (1\oplus1) ) = d(1,1,0) = 2$
    *   $d((0,1,1), (1,1,0)) = d( (0\oplus1), (1\oplus1), (1\oplus0) ) = d(1,0,1) = 2$
    *   $d((1,0,1), (1,1,0)) = d( (1\oplus1), (0\oplus1), (1\oplus0) ) = d(0,1,1) = 2$
*   Minimum distance $d_{min} = 2$.
*   **Error Detection/Correction:**
    *   Detect $t$ errors: $2 \ge t+1 \implies t \le 1$. Can detect 1 error.
    *   Correct $t$ errors: $2 \ge 2t+1 \implies 2t \le 1 \implies t \le 0.5$. Can correct 0 errors.
    *   This code is good for detecting single errors (e.g., if (0,0,0) is sent and (0,1,0) is received, it's detected as an error because it's not in $C$). It cannot correct errors because if (0,0,0) is sent and (0,1,1) is received (1 error), $d((0,0,0), (0,1,1)) = 2$. The received word (0,1,1) is a valid codeword. The decoder would wrongly decode it as (0,1,1).

---

### 5. Minimum Distance and Code Performance (Relationship to Channel)

The minimum distance is a key indicator of a code's performance in the presence of noise. A larger $d_{min}$ generally leads to better error correction capabilities.

**Impact of Noise:**
*   When transmitting over a noisy channel (e.g., Binary Symmetric Channel - BSC), some transmitted bits may be flipped.
*   The decoder receives a word $\mathbf{r}$ that is likely different from the transmitted codeword $\mathbf{c}$.
*   The goal is to choose the codeword $\mathbf{c}'$ from the code $C$ that is "closest" to $\mathbf{r}$. This is the **maximum likelihood decoding** principle.

**Maximum Likelihood Decoding (MLD):**
Given a received vector $\mathbf{r}$, the decoder chooses the codeword $\hat{\mathbf{c}} \in C$ such that $d(\mathbf{r}, \hat{\mathbf{c}})$ is minimized.

**How $d_{min}$ affects MLD:**
*   If $d(\mathbf{c}, \mathbf{r}) \le t$ where $d_{min} \ge 2t+1$, then for any other codeword $\mathbf{c}'$, $d(\mathbf{c}', \mathbf{r}) \ge d_{min} - d(\mathbf{c}, \mathbf{r}) \ge (2t+1) - t = t+1$.
*   This means the received vector $\mathbf{r}$ is strictly closer to the transmitted codeword $\mathbf{c}$ than to any other codeword $\mathbf{c}'$. Thus, MLD will correctly decode the received word.

**Relationship to Code Rate:**
*   As discussed with the Sphere Packing Bound, achieving a large $d_{min}$ often comes at the cost of a lower code rate (more parity bits relative to message bits).
*   A good code balances error correction capability ($d_{min}$) with efficiency (code rate $k/n$).

**Types of Codes based on $d_{min}$:**

*   **Perfect Codes:** Codes where the spheres of radius $t$ around each codeword are disjoint and exactly fill the entire space of $2^n$ possible words. For binary codes, the Hamming codes are examples of perfect codes. They achieve the Hamming bound with equality.
*   **MDS Codes:** Codes that achieve the Singleton bound $d_{min} = n - k + 1$. These are optimal in terms of distance for a given $n$ and $k$. Examples include Reed-Solomon codes.
*   **Optimal Codes:** Codes that achieve the best possible $d_{min}$ for a given $n$, $k$, and channel type (e.g., BSC). Finding optimal codes is a very difficult problem.

---

### 6. Practice Questions

**Question 1:**
What is the minimum distance of the following code $C$?
$C = \{0000, 0110, 1010, 1100\}$

**Question 2:**
Consider a linear code $C$ with minimum distance $d_{min} = 5$.
a) How many errors can this code detect?
b) How many errors can this code correct?

**Question 3:**
Let a linear block code have the following parity check matrix:
$H = \begin{pmatrix} 1 & 1 & 0 & 1 & 0 \\ 0 & 1 & 1 & 0 & 1 \end{pmatrix}$
What is the minimum distance of this code?

**Question 4:**
For a code of length $n=5$, $k=2$ message bits, and $d_{min}=3$. What is the maximum number of errors it can correct? What is the code rate?

---

### 7. Answers to Practice Questions

**Answer 1:**
The code is $C = \{0000, 0110, 1010, 1100\}$.
Let's calculate the Hamming distances between all distinct pairs of codewords:
*   $d(0000, 0110) = 2$
*   $d(0000, 1010) = 2$
*   $d(0000, 1100) = 2$
*   $d(0110, 1010) = d(0\oplus1, 1\oplus0, 1\oplus1, 0\oplus0) = d(1,1,0,0) = 2$
*   $d(0110, 1100) = d(0\oplus1, 1\oplus1, 1\oplus0, 0\oplus0) = d(1,0,1,0) = 2$
*   $d(1010, 1100) = d(1\oplus1, 0\oplus1, 1\oplus0, 0\oplus0) = d(0,1,1,0) = 2$

The minimum distance $d_{min} = 2$.
*(Note: This is not a linear code because it is missing codewords. For example, if we consider the weights of non-zero codewords for linear codes, we look for the minimum weight. Here, all non-zero codewords have weight 2. If it were linear, the minimum distance would be 2.)*

**Answer 2:**
Given $d_{min} = 5$.
a) Number of detectable errors ($t_{detect}$) is given by $d_{min} \ge t_{detect} + 1$.
   $5 \ge t_{detect} + 1 \implies t_{detect} \le 4$.
   The code can detect up to 4 errors.

b) Number of correctable errors ($t_{correct}$) is given by $d_{min} \ge 2t_{correct} + 1$.
   $5 \ge 2t_{correct} + 1 \implies 4 \ge 2t_{correct} \implies t_{correct} \le 2$.
   The code can correct up to 2 errors.

**Answer 3:**
The parity check matrix is $H = \begin{pmatrix} 1 & 1 & 0 & 1 & 0 \\ 0 & 1 & 1 & 0 & 1 \end{pmatrix}$.
The minimum distance $d_{min}$ is the smallest integer $d$ for which there exist $d$ linearly dependent columns in $H$.
*   **Check for $d=2$:** Are any two columns identical or negatives of each other (in GF(2), identical)? No. Are any two columns linearly dependent (i.e., one is equal to the other)? No.
*   **Check for $d=3$:** We need to check if any set of 3 columns sums to the zero vector.
    Let the columns be $h_1, h_2, h_3, h_4, h_5$.
    $h_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}, h_2 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}, h_3 = \begin{pmatrix} 0 \\ 1 \end{pmatrix}, h_4 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}, h_5 = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$.
    We observe that $h_1 = h_4$ and $h_3 = h_5$.
    Consider the set of columns $\{h_1, h_2, h_4\}$. Sum = $h_1 + h_2 + h_4 = \begin{pmatrix} 1 \\ 0 \end{pmatrix} + \begin{pmatrix} 1 \\ 1 \end{pmatrix} + \begin{pmatrix} 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 1+1+1 \\ 0+1+0 \end{pmatrix} = \begin{pmatrix} 1 \\ 1 \end{pmatrix} \neq \mathbf{0}$.
    Wait, linear dependence means the *sum* of the columns is zero.
    The columns are vectors. $h_1 = (1,0)^T, h_2 = (1,1)^T, h_3 = (0,1)^T, h_4 = (1,0)^T, h_5 = (0,1)^T$.
    We need to find if there exist indices $i_1, \dots, i_d$ such that $h_{i_1} + \dots + h_{i_d} = \mathbf{0}$ (vector sum over GF(2)).
    *   **$d=2$:** Are any two columns identical? $h_1 = h_4$ and $h_3 = h_5$. This means columns 1 and 4 are linearly dependent if they are different (which they are not, they are identical). If $h_i = h_j$ for $i \neq j$, then $h_i + h_j = \mathbf{0}$. So, columns 1 and 4 are linearly dependent, sum is $\mathbf{0}$. This implies a codeword of weight 2 exists (e.g., 10010).
    *   Let's confirm. $H \mathbf{c}^T = \mathbf{0}$. If $\mathbf{c} = (1,0,0,1,0)$, then $H \mathbf{c}^T = \begin{pmatrix} 1 & 1 & 0 & 1 & 0 \\ 0 & 1 & 1 & 0 & 1 \end{pmatrix} \begin{pmatrix} 1 \\ 0 \\ 0 \\ 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 1(1)+0+0+1(1)+0 \\ 0+0+0+0+0 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$. So, (1,0,0,1,0) is a codeword of weight 2.
    *   Since we found a set of 2 linearly dependent columns (columns 1 and 4 are identical), the minimum distance is 2.

    The minimum distance $d_{min} = 2$.

**Answer 4:**
Given $n=5$, $k=2$, $d_{min}=3$.
*   Maximum number of errors it can correct ($t_{correct}$):
    $d_{min} \ge 2t_{correct} + 1$
    $3 \ge 2t_{correct} + 1 \implies 2 \ge 2t_{correct} \implies t_{correct} \le 1$.
    It can correct up to 1 error.
*   Code rate ($R$) is given by $R = k/n$.
    $R = 2/5$.

---

### 8. Important Points to Remember

*   **Minimum distance ($d_{min}$)** is the smallest Hamming distance between any two distinct codewords.
*   For **linear codes**, $d_{min}$ is the minimum Hamming weight of any **non-zero** codeword.
*   $d_{min}$ directly determines error detection and correction capabilities:
    *   Detect up to $t$ errors: $d_{min} \ge t+1$.
    *   Correct up to $t$ errors: $d_{min} \ge 2t+1$.
*   The **Singleton Bound** ($d_{min} \le n-k+1$) provides an upper limit on $d_{min}$. Codes achieving this are MDS.
*   A larger $d_{min}$ generally implies better error correction performance but often at the expense of a lower code rate.
*   Finding $d_{min}$ for general codes is hard. For linear codes, checking linear dependency of columns of $H$ is a key method.

---

### 9. Alignment with Course Outcomes

*   **CO1: Explain various algebraic structures used in coding theory (Knowledge Level: K2)**
    *   Hamming distance and weight are based on vector spaces over GF(2) (or other fields). The linearity of codes is a direct application of vector space properties.
*   **CO2: Explain the error detection and correction capabilities of linear codes (Knowledge Level: K2)**
    *   This entire topic of Minimum Distance is fundamental to explaining these capabilities. The inequalities $d_{min} \ge t+1$ and $d_{min} \ge 2t+1$ are core concepts here.
*   **CO3: Apply linear block codes to detect and correct errors. (Knowledge Level: K3)**
    *   Understanding $d_{min}$ is crucial for applying a code. If a code's $d_{min}$ is known, we know how many errors it can handle. When choosing a code for a specific application, its $d_{min}$ is a primary consideration.
*   **CO4: Use algebraic techniques to construct efficient codes with reduced structural complexity (Knowledge Level: K3)**
    *   While this topic focuses on the property ($d_{min}$), the methods to find it (like using the parity check matrix) involve algebraic techniques. Constructing codes to achieve a desired $d_{min}$ is the essence of code design, aiming for efficiency.
*   **CO5: Apply convolutional code for error detection correction (Knowledge Level: K3)**
    *   While this module is about block codes, the concept of minimum distance extends to convolutional codes as well (specifically, the free distance of a convolutional code plays a similar role).
*   **CO6: Illustrate modern error correcting codes like Turbo codes, LDOC code and polar codes (Knowledge Level: K2)**
    *   Understanding the importance of minimum distance in classical codes provides context for appreciating the advancements in modern codes. While modern codes might not have a simple, single minimum distance parameter in the same way as linear block codes, they are designed to achieve good distance properties to approach the Shannon limit.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 10. Textbook References

*   **Error Control Coding: Fundamentals and Applications by Shu Lin & Daniel J. Costello. Jr.**
    *   Chapter 3 (Linear Block Codes): This chapter will extensively cover Hamming distance, weight, parity check matrices, generator matrices, and properties related to error detection/correction, including minimum distance for linear block codes.
    *   Chapter 4 (Bounds on Code Performance): Discusses bounds like the Singleton bound and Sphere Packing bound, which are directly related to $d_{min}$.
*   **Communication Systems by Simon Haykin**
    *   Chapter 10 (Error Control Coding): Provides a good overview of coding principles in the context of communication systems, likely introducing $d_{min}$ as a measure of code performance and its relation to error probabilities.
*   **Modern Coding Theory by T. Richardson, R. Urbanke**
    *   Chapter 1 (Introduction and Basic Notions): Will define Hamming distance, weight, and minimum distance as foundational concepts. It will also discuss bounds on $d_{min}$ and its implications for code design.

This section aims to guide further study by pointing to the relevant chapters and topics within the prescribed textbooks that cover the concept of minimum distance in detail.