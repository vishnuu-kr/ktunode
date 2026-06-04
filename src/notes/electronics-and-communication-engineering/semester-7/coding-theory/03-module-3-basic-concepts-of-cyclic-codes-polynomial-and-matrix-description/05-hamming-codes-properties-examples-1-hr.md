---
title: "Hamming Codes-properties-Examples (1 hr)"
subject: "CODING THEORY"
module: "Module 3: Basic concepts of cyclic codes – Polynomial and matrix description."
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff22c"
status: "completed"
scrapedAt: "2026-05-23T18:05:19.285Z"
---
# CODING THEORY: Module 3 - Basic Concepts of Cyclic Codes

## Topic: Hamming Codes - Properties and Examples

**(Approximate Time: 1 Hour)**

---

### **Introduction**

Hamming codes are a class of linear block codes that are well-known for their ability to correct single-bit errors. They are a fundamental building block in the study of error-correcting codes due to their simplicity and efficiency, particularly for detecting and correcting single errors. This topic will delve into the properties of Hamming codes and illustrate them with practical examples.

---

### **Learning Outcomes**

By the end of this topic, you should be able to:

*   Understand the definition and construction of Hamming codes.
*   Explain the properties of Hamming codes, including their error detection and correction capabilities.
*   Apply algebraic techniques to construct and analyze Hamming codes.
*   Illustrate the use of Hamming codes with concrete examples.
*   Relate Hamming codes to the broader concepts of linear block codes.

---

### **Key Concepts and Definitions**

#### **1. Linear Block Codes (Review)**

Before diving into Hamming codes, let's briefly recap essential concepts of linear block codes:

*   **Block Code:** A code that encodes a block of $k$ message bits into a block of $n$ codeword bits.
*   **Linear Block Code:** A block code where the set of all codewords forms a linear subspace of the vector space $\mathbb{F}_2^n$. This means:
    *   The zero vector is a codeword.
    *   The sum (modulo 2) of any two codewords is also a codeword.
*   **Generator Matrix ($G$):** An $k \times n$ matrix such that any codeword $c$ can be represented as $c = mG$, where $m$ is a $1 \times k$ message vector.
*   **Parity-Check Matrix ($H$):** An $(n-k) \times n$ matrix such that $cH^T = 0$ for any codeword $c$. The rows of $H$ are linearly independent, and the minimum distance $d_{min}$ of a linear block code is equal to the minimum number of linearly dependent columns of $H$.
*   **Minimum Distance ($d_{min}$):** The minimum Hamming distance between any two distinct codewords. It determines the error-detecting and error-correcting capabilities of the code.
    *   **Error Detection:** A code can detect up to $d_{min}-1$ errors.
    *   **Error Correction:** A code can correct up to $\lfloor (d_{min}-1)/2 \rfloor$ errors.

*(Refer to Lin & Costello, Chapter 2 for a detailed review of linear block codes.)*

#### **2. Hamming Codes**

Hamming codes are a specific family of linear block codes with particularly good properties for single-error correction.

*   **Definition:** A Hamming code is a linear block code that can correct all single-bit errors.
*   **Parameters:** A Hamming code is often denoted by $Ham(r, 2)$, where $r$ is an integer and $n = 2^r - 1$. The number of parity bits is $m = n-k = r$, and the number of data bits is $k = n - r = 2^r - 1 - r$.

#### **3. Construction of Hamming Codes**

The construction of a Hamming code is based on the columns of its parity-check matrix $H$.

*   **Parity-Check Matrix ($H$):** The parity-check matrix $H$ of a Hamming code of length $n = 2^r - 1$ is an $r \times (2^r - 1)$ matrix whose columns are all the distinct non-zero binary vectors of length $r$. The columns are typically ordered in increasing binary value from 1 to $2^r - 1$.

    *   **Example for $r=2$:**
        *   $n = 2^2 - 1 = 3$.
        *   Number of parity bits $m = r = 2$.
        *   Number of data bits $k = n - m = 3 - 2 = 1$.
        *   The non-zero binary vectors of length 2 are: 01, 10, 11.
        *   $H = \begin{pmatrix} 0 & 1 & 1 \\ 1 & 0 & 1 \end{pmatrix}$
        *   This is a $(3,1)$ code. Codewords are $m \cdot G$. We need to find $G$.
        *   Since $H$ is $2 \times 3$, $G$ is $1 \times 3$. We know $GH^T = 0$.
        *   Let $G = \begin{pmatrix} g_1 & g_2 & g_3 \end{pmatrix}$.
        *   $\begin{pmatrix} g_1 & g_2 & g_3 \end{pmatrix} \begin{pmatrix} 0 & 1 \\ 1 & 0 \\ 1 & 1 \end{pmatrix} = \begin{pmatrix} 0 & 0 \end{pmatrix}$
        *   $g_2 + g_3 = 0 \implies g_2 = g_3$
        *   $g_1 + g_3 = 0 \implies g_1 = g_3$
        *   So, $g_1 = g_2 = g_3$. If we choose $g_1=1$, then $G = \begin{pmatrix} 1 & 1 & 1 \end{pmatrix}$.
        *   Codewords: $0 \cdot G = 000$, $1 \cdot G = 111$. This is a repetition code and not a useful Hamming code.

    *   **Key Insight for Generator Matrix:** For systematic codes, the generator matrix $G$ is typically in the form $G = [I_k | P]$, where $I_k$ is the $k \times k$ identity matrix and $P$ is a $k \times m$ matrix. The parity-check matrix $H$ is then in the form $H = [P^T | I_m]$.

    *   **Revisiting $r=2$ ($n=3, k=1$):**
        *   This $r=2$ case isn't the "typical" Hamming code we refer to. The standard Hamming codes are usually $Ham(r,2)$ where $n=2^r-1$ and $k=n-r$. The smallest useful Hamming code is $Ham(2,2)$, which is actually $Ham(r=2)$ on $n=2^2-1=3$ bits, but it has $r=2$ parity bits, so $k=3-2=1$ data bit.
        *   Let's adjust our construction perspective. We want $k$ data bits and $r$ parity bits, making $n = k+r$ codeword length.
        *   The parity-check matrix $H$ is $r \times n$. The columns of $H$ are the $2^r - 1$ non-zero binary vectors of length $r$. The codeword length is $n = 2^r - 1$. The number of parity bits is $m=r$. So, the number of data bits is $k = n-m = (2^r-1) - r$.

    *   **Example for $r=2$ (Corrected Understanding):**
        *   $n = 2^2 - 1 = 3$. Number of parity bits $m = r = 2$. Number of data bits $k = 3 - 2 = 1$.
        *   $H = \begin{pmatrix} 0 & 1 & 1 \\ 1 & 0 & 1 \end{pmatrix}$ (columns are 01, 10, 11).
        *   We want to find a generator matrix $G$ of size $k \times n = 1 \times 3$.
        *   The parity bits are typically computed from the data bits. Let the codeword be $c = (d_1 | p_1 p_2)$.
        *   We need to choose $H$ in the form $[P^T | I_m]$ for a systematic generator matrix $G = [I_k | P]$.
        *   Let's try a different $H$ for $n=3, k=1$. We need $r=2$ parity bits. The columns of $H$ should be all non-zero vectors of length 2.
        *   $H = \begin{pmatrix} 0 & 1 & 1 \\ 1 & 0 & 1 \end{pmatrix}$ has columns 01, 10, 11. This is correct.
        *   If we arrange $H$ such that the last $r=2$ columns are $I_2$:
        *   $H = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \end{pmatrix}$. Here $n=3, k=1$. $P^T = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$ and $I_2 = \begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix}$... This is not $I_2$.
        *   The columns of $H$ must be all distinct non-zero vectors of length $r$. The order of columns matters for the systematic form.
        *   Let's use the standard construction where $H = [P^T | I_r]$ and $G = [I_k | P]$.
        *   For $r=2$, $n=3$. We need $r=2$ parity bits. So $k = n-r = 3-2=1$.
        *   $H$ is $r \times n = 2 \times 3$.
        *   Let the last two columns of $H$ be $I_2$: $H = [\mathbf{v}_1 | \mathbf{v}_2 | \mathbf{v}_3]$.
        *   We need to choose $\mathbf{v}_1, \mathbf{v}_2, \mathbf{v}_3$ to be all distinct non-zero binary vectors of length $r=2$. And importantly, $\mathbf{v}_1, \mathbf{v}_2, \mathbf{v}_3$ must be linearly independent (or $H$ must have linearly independent columns for the code to be useful).
        *   The columns are: $\begin{pmatrix} 0 \\ 1 \end{pmatrix}$, $\begin{pmatrix} 1 \\ 0 \end{pmatrix}$, $\begin{pmatrix} 1 \\ 1 \end{pmatrix}$.
        *   Let's arrange them to have $I_r$ at the end. So, the last two columns are $\begin{pmatrix} 0 \\ 1 \end{pmatrix}$ and $\begin{pmatrix} 1 \\ 0 \end{pmatrix}$. The remaining column is $\begin{pmatrix} 1 \\ 1 \end{pmatrix}$.
        *   $H = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 1 \end{pmatrix}$ - No, this $H$ has columns $10, 01, 01$. This is not correct. The columns must be distinct and non-zero.

        *   **Standard Construction of $Ham(r,2)$:**
            *   Length $n = 2^r - 1$.
            *   Number of parity bits $m = r$.
            *   Number of data bits $k = n - r = 2^r - 1 - r$.
            *   Parity-Check Matrix $H$: $r \times n$ matrix whose columns are all $2^r - 1$ distinct non-zero binary vectors of length $r$.

        *   **Example for $r=3$ (The first "true" Hamming code):**
            *   $n = 2^3 - 1 = 7$.
            *   Number of parity bits $m = r = 3$.
            *   Number of data bits $k = n - m = 7 - 3 = 4$.
            *   This is a $(7, 4)$ Hamming code.
            *   $H$ is a $3 \times 7$ matrix. The columns are all distinct non-zero binary vectors of length 3:
                *   001 (1), 010 (2), 011 (3), 100 (4), 101 (5), 110 (6), 111 (7).
            *   Let's arrange $H$ to have $I_3$ as the last 3 columns for systematic encoding:
                *   $H = \begin{pmatrix}
                    0 & 0 & 1 & 1 & 0 & 1 & 1 \\
                    0 & 1 & 0 & 1 & 1 & 0 & 1 \\
                    1 & 0 & 0 & 1 & 1 & 1 & 0
                    \end{pmatrix}$
                    *   Column 1: 001 (which corresponds to decimal 1)
                    *   Column 2: 010 (decimal 2)
                    *   Column 3: 100 (decimal 4)
                    *   Column 4: 110 (decimal 6)
                    *   Column 5: 101 (decimal 5)
                    *   Column 6: 011 (decimal 3)
                    *   Column 7: 111 (decimal 7)
                *   This order of columns is based on binary weights, or sometimes based on powers of 2. Let's use the standard binary sequence for columns, and then rearrange to get $I_r$ at the end.

            *   **Standard Column Ordering for $H$ of $Ham(r,2)$:** The columns are the binary representations of the integers $1, 2, 3, \dots, 2^r-1$.
                *   For $r=3$, $n=7$:
                    *   Column 1: 001
                    *   Column 2: 010
                    *   Column 3: 011
                    *   Column 4: 100
                    *   Column 5: 101
                    *   Column 6: 110
                    *   Column 7: 111

            *   To get the systematic form $G = [I_k | P]$, we need $H = [P^T | I_r]$. The columns of $I_r$ must correspond to specific binary vectors.
            *   Let's form $H$ with $I_r$ at the end. The last $r$ columns of $H$ will be $I_r$. The first $k$ columns will be $P^T$.
            *   For $r=3$, $k=4$. $H$ is $3 \times 7$.
            *   $H = [ \mathbf{v}_1 \mathbf{v}_2 \mathbf{v}_3 \mathbf{v}_4 \mid I_3 ]$
            *   The columns $\mathbf{v}_1, \dots, \mathbf{v}_k$ are chosen from the remaining $n-r = 2^r-1-r$ non-zero binary vectors, and they must be linearly independent and distinct from the vectors forming $I_r$. The vectors forming $I_r$ are those with a single '1'. For $r=3$, these are 100, 010, 001.
            *   The set of all non-zero vectors of length 3 is {001, 010, 011, 100, 101, 110, 111}.
            *   Vectors for $I_3$: {001, 010, 100}.
            *   Remaining vectors: {011, 101, 110, 111}. We need to choose 4 columns for $H$, and the last 3 are $I_3$. This structure isn't directly $H=[P^T | I_r]$ if $P^T$ has $k$ columns.

            *   **Correct Systematic Construction:**
                *   For a $(n,k)$ linear code with systematic generator matrix $G = [I_k | P]$, the parity-check matrix is $H = [P^T | I_{n-k}]$.
                *   For Hamming codes, $n = 2^r - 1$, $n-k = r$.
                *   So, $H = [P^T | I_r]$. $H$ is $r \times (2^r-1)$.
                *   $P^T$ must be $r \times k$. The columns of $H$ are the $2^r-1$ non-zero binary vectors of length $r$.
                *   The columns of $I_r$ are $r$ specific non-zero binary vectors (those with a single 1). The remaining $k = (2^r-1) - r$ columns of $H$ form $P^T$.
                *   Let the columns of $H$ be $c_1, c_2, \dots, c_n$.
                *   If we set the last $r$ columns of $H$ to be $I_r$, i.e., $c_{n-r+1}, \dots, c_n$ are the binary vectors corresponding to $2^{r-1}, 2^{r-2}, \dots, 2^0$ (or some standard order).
                *   **Standard Choice:** The columns of $H$ are the binary representations of $1, 2, \dots, 2^r-1$. The columns corresponding to powers of 2 (1, 2, 4, ...) usually form $I_r$.
                *   For $r=3$, $n=7$, $k=4$. The columns are binary reps of 1 to 7.
                    *   1: 001
                    *   2: 010
                    *   3: 011
                    *   4: 100
                    *   5: 101
                    *   6: 110
                    *   7: 111
                *   Let $I_3$ be formed by columns 1, 2, and 4 (001, 010, 100).
                *   So, $H = [ \mathbf{v}_3 \mathbf{v}_5 \mathbf{v}_6 \mathbf{v}_7 | \mathbf{v}_1 \mathbf{v}_2 \mathbf{v}_4 ]$ where $\mathbf{v}_i$ is the column vector for integer $i$.
                *   $H = \begin{pmatrix}
                    0 & 1 & 1 & 1 & | & 0 & 0 & 1 \\
                    1 & 0 & 1 & 1 & | & 0 & 1 & 0 \\
                    1 & 1 & 0 & 1 & | & 1 & 0 & 0
                    \end{pmatrix}$
                *   Here, the first 4 columns are the parity bits $p_1, p_2, p_3, p_4$, and the last 3 columns are the check bits $c_1, c_2, c_3$. This form is not systematic.

                *   **Systematic form ($G = [I_k | P], H = [P^T | I_r]$):**
                    *   Let the data bits be $d_1, d_2, d_3, d_4$.
                    *   $G = [I_4 | P]$. $P$ is $4 \times 3$.
                    *   $H = [P^T | I_3]$. $P^T$ is $3 \times 4$. The columns of $H$ must be all distinct non-zero binary vectors of length 3.
                    *   The columns of $I_3$ are 100, 010, 001.
                    *   The remaining columns for $P^T$ must be chosen from {011, 101, 110, 111} and must be linearly independent from each other and from columns of $I_3$.
                    *   Let's choose the columns for $P^T$ to be the remaining ones: 011, 101, 110, 111. But $P^T$ needs 4 columns. This means $k=4$, so $P^T$ is $3 \times 4$. $H$ is $3 \times 7$.
                    *   The columns of $H$ are $c_1, \dots, c_7$.
                    *   If $H = [P^T | I_3]$, then the columns of $I_3$ must be among the $2^r-1$ non-zero vectors.
                    *   Let $H$ have columns corresponding to binary representations of $1, 2, \dots, 7$.
                    *   $H = \begin{pmatrix}
                        0 & 0 & 0 & 1 & 1 & 1 & 1 \\
                        0 & 1 & 1 & 0 & 0 & 1 & 1 \\
                        1 & 0 & 1 & 0 & 1 & 0 & 1
                        \end{pmatrix}$
                        *   Column 1: 001
                        *   Column 2: 010
                        *   Column 3: 100
                        *   Column 4: 011
                        *   Column 5: 101
                        *   Column 6: 110
                        *   Column 7: 111
                    *   This is a valid $H$ for a $(7,4)$ Hamming code. The columns are all distinct non-zero vectors of length 3.
                    *   Now, to make it systematic, we reorder the columns of $H$ (and the corresponding bits in the codeword).
                    *   We want $G = [I_4 | P]$. This means $H = [P^T | I_3]$.
                    *   The columns of $I_3$ are 100, 010, 001. These are the binary representations of 4, 2, 1.
                    *   So, let the last 3 columns of $H$ be the columns for 1, 2, 4.
                    *   Let $H = [ \mathbf{c}_1 \mathbf{c}_2 \mathbf{c}_3 \mathbf{c}_4 | \mathbf{c}_5 \mathbf{c}_6 \mathbf{c}_7 ]$ where $\mathbf{c}_i$ is the column for integer $i$.
                    *   $H = \begin{pmatrix}
                        0 & 0 & 0 & 1 & 1 & 1 & 1 \\
                        0 & 1 & 1 & 0 & 0 & 1 & 1 \\
                        1 & 0 & 1 & 0 & 1 & 0 & 1
                        \end{pmatrix}$
                    *   We want $H = [P^T | I_3]$. So, $P^T$ will be the first 4 columns.
                    *   $P^T = \begin{pmatrix}
                        0 & 0 & 0 & 1 \\
                        0 & 1 & 1 & 0 \\
                        1 & 0 & 1 & 0
                        \end{pmatrix}$. Then $P = \begin{pmatrix}
                        0 & 0 & 1 \\
                        0 & 1 & 0 \\
                        0 & 1 & 1 \\
                        1 & 0 & 0
                        \end{pmatrix}$.
                    *   $G = [I_4 | P] = \begin{pmatrix}
                        1 & 0 & 0 & 0 & | & 0 & 0 & 1 \\
                        0 & 1 & 0 & 0 & | & 0 & 1 & 0 \\
                        0 & 0 & 1 & 0 & | & 0 & 1 & 1 \\
                        0 & 0 & 0 & 1 & | & 1 & 0 & 0
                        \end{pmatrix}$
                    *   This is the standard systematic generator matrix for the $(7,4)$ Hamming code.

*(Refer to Lin & Costello, Chapter 3 for detailed construction of Hamming codes.)*

#### **4. Properties of Hamming Codes**

*   **Minimum Distance ($d_{min}$):** For a Hamming code $Ham(r,2)$, the minimum distance is $d_{min} = 3$.
    *   **Proof Sketch:** The minimum distance of a linear code is the minimum number of linearly independent columns of $H$.
        *   Any single column of $H$ is non-zero.
        *   Any two columns of $H$ are linearly independent because the columns of $H$ are distinct non-zero binary vectors. If two columns were linearly dependent, they would have to be identical (since we are in $\mathbb{F}_2$), but the columns are all distinct.
        *   The minimum number of linearly dependent columns is 3 (e.g., $c_i + c_j + c_k = 0$). Can we find 3 columns that sum to zero? The columns are all non-zero vectors of length $r$. Consider the sum of all columns: $\sum_{i=1}^{2^r-1} \mathbf{c}_i = \mathbf{0}$. For example, in $r=3$, $\mathbf{c}_1+\mathbf{c}_2+\mathbf{c}_3+\mathbf{c}_4+\mathbf{c}_5+\mathbf{c}_6+\mathbf{c}_7 = \mathbf{0}$.
        *   However, the columns are constructed such that any *subset* of columns chosen for $P^T$ and $I_r$ will have certain properties.
        *   The key property for $d_{min}=3$ is that no two columns are identical (ensuring $d_{min} \ge 2$), and no column is the sum of two other columns. Let's verify this. If $\mathbf{c}_i = \mathbf{c}_j + \mathbf{c}_k$ for distinct $i, j, k$, then the columns $\mathbf{c}_i, \mathbf{c}_j, \mathbf{c}_k$ are linearly dependent.
        *   The standard construction ensures that no column is the sum of two other columns. Consider the vector space $\mathbb{F}_2^r$. The columns are all non-zero vectors. If $\mathbf{v}_i = \mathbf{v}_j + \mathbf{v}_k$, this is equivalent to $\mathbf{v}_i + \mathbf{v}_j + \mathbf{v}_k = \mathbf{0}$. This property is avoided by the specific choice of columns for $H$.
        *   The minimum number of columns whose sum is zero determines $d_{min}$. For Hamming codes, the smallest such subset has size 3.

*   **Error Detection:** Can detect up to $d_{min}-1 = 3-1=2$ errors.
*   **Error Correction:** Can correct up to $\lfloor (d_{min}-1)/2 \rfloor = \lfloor (3-1)/2 \rfloor = \lfloor 1 \rfloor = 1$ error. This is their primary strength.
*   **Codeword Length ($n$):** $n = 2^r - 1$. This makes them "perfect" codes in a certain sense, as they achieve the theoretical sphere-packing bound for single-error correction.
*   **Number of Parity Bits ($m$):** $m = r$.
*   **Number of Data Bits ($k$):** $k = n - m = 2^r - 1 - r$.

*(Refer to Lin & Costello, Chapter 3, for proof of $d_{min}=3$.)*

#### **5. Syndrome Decoding**

Hamming codes are particularly amenable to syndrome decoding.

*   **Syndrome ($s$):** For a received vector $y$, the syndrome is calculated as $s = yH^T$.
*   **Syndrome Properties:**
    *   If $y$ is a valid codeword ($y=c$), then $s = cH^T = 0$.
    *   If $y$ contains a single-bit error at position $j$ (i.e., $y = c + \mathbf{e}_j$, where $\mathbf{e}_j$ is a vector with 1 at position $j$ and 0 elsewhere), then $s = (c + \mathbf{e}_j)H^T = cH^T + \mathbf{e}_j H^T = 0 + \mathbf{e}_j H^T = (\text{j-th column of } H^T)^T$.
    *   The syndrome $s$ is a vector of length $r$. If the received vector has a single error at position $j$, the syndrome $s$ will be equal to the $j$-th column of $H$.

*   **Decoding Procedure:**
    1.  Receive vector $y$.
    2.  Compute the syndrome $s = yH^T$.
    3.  If $s = 0$, assume no error occurred, and the message is the data part of $y$.
    4.  If $s \neq 0$, find the column in $H$ that is equal to $s$. Let this be the $j$-th column.
    5.  Assume an error occurred at position $j$. The corrected codeword is $\hat{c} = y + \mathbf{e}_j$.
    6.  Extract the message from $\hat{c}$.

*(Refer to Lin & Costello, Chapter 3, for detailed syndrome decoding.)*

---

### **Examples**

#### **Example 1: The $(7, 4)$ Hamming Code ($r=3$)**

*   $n = 2^3 - 1 = 7$.
*   $m = r = 3$ parity bits.
*   $k = n - m = 7 - 3 = 4$ data bits.
*   $d_{min} = 3$. Can correct 1 error.

*   **Generator Matrix ($G$):**
    $G = \begin{pmatrix}
    1 & 0 & 0 & 0 & 0 & 0 & 1 \\
    0 & 1 & 0 & 0 & 1 & 1 & 0 \\
    0 & 0 & 1 & 0 & 1 & 1 & 0 \\
    0 & 0 & 0 & 1 & 1 & 0 & 0
    \end{pmatrix}$
    *(Note: The $P$ part of this $G$ matrix is $\begin{pmatrix} 0 & 0 & 1 \\ 0 & 1 & 0 \\ 0 & 1 & 1 \\ 1 & 0 & 0 \end{pmatrix}$. This implies $H = [P^T | I_3]$ with $P^T = \begin{pmatrix} 0 & 0 & 0 & 1 \\ 0 & 1 & 1 & 0 \\ 1 & 0 & 1 & 0 \end{pmatrix}$. This $P^T$ has columns {001, 010, 011, 100} if we read them differently. The column indexing in $H$ is crucial.)*

    Let's stick to the $H$ matrix derived earlier, which leads to a well-defined $G$:
    *   $H = \begin{pmatrix}
        0 & 0 & 0 & 1 & 1 & 1 & 1 \\
        0 & 1 & 1 & 0 & 0 & 1 & 1 \\
        1 & 0 & 1 & 0 & 1 & 0 & 1
        \end{pmatrix}$
        (Columns correspond to binary of 1, 2, 4, 3, 5, 6, 7)
    *   For systematic encoding, we rearrange bits so data bits come first, followed by parity bits.
    *   Let the codeword be $(d_1 d_2 d_3 d_4 p_1 p_2 p_3)$.
    *   The parity bits $p_1, p_2, p_3$ are computed based on $d_1, d_2, d_3, d_4$.
    *   The syndrome calculation is based on the original $H$. Let's consider the data bits $d_1, d_2, d_3, d_4$ in the first 4 positions and parity bits $p_1, p_2, p_3$ in the last 3 positions.
    *   The generator matrix $G = [I_4 | P]$ assumes the codeword structure $(d_1, \dots, d_k, p_1, \dots, p_m)$.
    *   Let the codeword be $(d_1 d_2 d_3 d_4 c_1 c_2 c_3)$.
    *   $H$ has columns that are binary representations of 1 to 7.
    *   $H = \begin{pmatrix}
        0 & 0 & 0 & 1 & 1 & 1 & 1 \\
        0 & 1 & 1 & 0 & 0 & 1 & 1 \\
        1 & 0 & 1 & 0 & 1 & 0 & 1
        \end{pmatrix}$
        (This $H$ implies codeword structure $(d_1, d_2, d_3, d_4, p_1, p_2, p_3)$ where $p_i$ are parity bits computed from $d_j$, and the columns of $H$ match the bit positions).
    *   Let's form $G$ from $H$. $GH^T = 0$.
    *   For systematic code $G=[I_k | P]$, $H=[P^T | I_r]$.
    *   To get $G=[I_4 | P]$, we need $H=[P^T | I_3]$.
    *   The columns of $I_3$ are 100, 010, 001. These correspond to positions 4, 2, 1 if we number the columns 1 to 7.
    *   Let's rearrange the columns of $H$ and the corresponding bits in the codeword to achieve the systematic form.
    *   Let the codeword be $c = (c_1 c_2 c_3 c_4 c_5 c_6 c_7)$.
    *   Let $c_1, c_2, c_3, c_4$ be data bits ($d_1, d_2, d_3, d_4$), and $c_5, c_6, c_7$ be parity bits ($p_1, p_2, p_3$).
    *   $G = [I_4 | P]$. $H = [P^T | I_3]$.
    *   The columns of $H$ are the $2^r-1$ non-zero binary vectors of length $r$.
    *   Let's choose the columns of $H$ to be the binary representation of $1, 2, \dots, 7$.
    *   $H = \begin{pmatrix}
        0 & 0 & 0 & 1 & 1 & 1 & 1 \\
        0 & 1 & 1 & 0 & 0 & 1 & 1 \\
        1 & 0 & 1 & 0 & 1 & 0 & 1
        \end{pmatrix}$
        (Columns correspond to indices 1, 2, 4, 3, 5, 6, 7 in the codeword).

    *   **Generating Codewords:** Let the message be $m = (1011)$.
        *   $G = [I_4 | P]$ where $P$ is derived from $H$.
        *   To get $G = [I_4 | P]$, we need $H = [P^T | I_3]$.
        *   The columns of $I_3$ are 100, 010, 001. These correspond to bit positions 4, 2, 1 in the matrix $H$ as commonly defined for the $(7,4)$ code.
        *   $H_{std} = \begin{pmatrix}
            0 & 0 & 1 & 0 & 1 & 1 & 1 \\
            1 & 0 & 1 & 1 & 0 & 1 & 0 \\
            0 & 1 & 1 & 1 & 1 & 0 & 0
            \end{pmatrix}$
            (Columns for 1, 2, 4, 3, 5, 6, 7) - This is not the standard $H$ I usually see.

        *   **Let's use the commonly cited $G$ and $H$ for $(7,4)$ Hamming code:**
            *   $G = \begin{pmatrix}
                1 & 0 & 0 & 0 & 1 & 0 & 1 \\
                0 & 1 & 0 & 0 & 1 & 1 & 0 \\
                0 & 0 & 1 & 0 & 1 & 1 & 0 \\
                0 & 0 & 0 & 1 & 0 & 1 & 1
                \end{pmatrix}$
            *   $H = \begin{pmatrix}
                1 & 1 & 1 & 0 & 1 & 0 & 0 \\
                0 & 1 & 1 & 1 & 0 & 1 & 0 \\
                1 & 1 & 0 & 1 & 0 & 0 & 1
                \end{pmatrix}$
                (Columns are binary for 3, 5, 6, 7, 1, 2, 4 - this is a permutation of standard columns)
            *   The standard $H$ for $(7,4)$ Hamming code is formed using columns of binary representations of $1, 2, \dots, 7$:
                $H = \begin{pmatrix}
                0 & 0 & 0 & 1 & 1 & 1 & 1 \\
                0 & 1 & 1 & 0 & 0 & 1 & 1 \\
                1 & 0 & 1 & 0 & 1 & 0 & 1
                \end{pmatrix}$
                (Columns correspond to indices 1, 2, 4, 3, 5, 6, 7 of codeword bits).

            *   Let's use this $H$ for syndrome calculation.
            *   To generate codewords systematically with $G=[I_4|P]$, we need $H=[P^T|I_3]$.
            *   Let $H = [ \mathbf{c}_1 \mathbf{c}_2 \mathbf{c}_3 \mathbf{c}_4 | \mathbf{c}_5 \mathbf{c}_6 \mathbf{c}_7 ]$. We need to rearrange columns so that $I_3$ is at the end.
            *   The columns of $I_3$ are 100, 010, 001 (binary for 4, 2, 1).
            *   Let's define $H$ with columns sorted by binary value:
                $H' = \begin{pmatrix}
                0 & 0 & 0 & 0 & 1 & 1 & 1 \\
                0 & 1 & 1 & 0 & 0 & 1 & 0 \\
                1 & 0 & 1 & 1 & 0 & 0 & 0
                \end{pmatrix}$
                (Columns for 1, 2, 3, 4, 5, 6, 7).

            *   To get $G=[I_4|P]$ and $H=[P^T|I_3]$, we need $I_3$ in $H$.
            *   Let's pick the columns for $I_3$ to be the columns for 1, 2, 4.
            *   $H = [ \mathbf{c}_3 \mathbf{c}_5 \mathbf{c}_6 \mathbf{c}_7 | \mathbf{c}_1 \mathbf{c}_2 \mathbf{c}_4 ]$
            *   $H = \begin{pmatrix}
                0 & 1 & 1 & 1 & | & 0 & 0 & 1 \\
                1 & 0 & 1 & 1 & | & 0 & 1 & 0 \\
                1 & 1 & 0 & 1 & | & 1 & 0 & 0
                \end{pmatrix}$
                (Here, data bits $d_1, d_2, d_3, d_4$ correspond to original columns 3, 5, 6, 7, and parity bits $p_1, p_2, p_3$ correspond to original columns 1, 2, 4).
            *   $P^T = \begin{pmatrix} 0 & 1 & 1 & 1 \\ 1 & 0 & 1 & 1 \\ 1 & 1 & 0 & 1 \end{pmatrix}$.
            *   $P = \begin{pmatrix} 0 & 1 & 1 \\ 1 & 0 & 1 \\ 1 & 1 & 0 \\ 1 & 1 & 1 \end{pmatrix}$.
            *   $G = [I_4 | P] = \begin{pmatrix}
                1 & 0 & 0 & 0 & | & 0 & 1 & 1 \\
                0 & 1 & 0 & 0 & | & 1 & 0 & 1 \\
                0 & 0 & 1 & 0 & | & 1 & 1 & 0 \\
                0 & 0 & 0 & 1 & | & 1 & 1 & 1
                \end{pmatrix}$
                This is a valid systematic generator matrix for the $(7,4)$ Hamming code.

        *   **Encoding:** Message $m = (1011)$.
            *   $c = mG = (1011) \begin{pmatrix}
                1 & 0 & 0 & 0 & 0 & 1 & 1 \\
                0 & 1 & 0 & 0 & 1 & 0 & 1 \\
                0 & 0 & 1 & 0 & 1 & 1 & 0 \\
                0 & 0 & 0 & 1 & 1 & 1 & 1
                \end{pmatrix}$
            *   $c = (1, 01, 01, 01, 0+1+1, 1+0+1, 1+1+1)$
            *   $c = (1, 0, 1, 1, 1+1, 1+1, 1+1+1)$ (all mod 2)
            *   $c = (1, 0, 1, 1, 0, 0, 1)$
            *   So, codeword for (1011) is 1011001.

        *   **Decoding (Syndrome):** Suppose received vector is $y = 1010001$ (one error in the 4th bit).
            *   We use the $H$ matrix corresponding to the bit positions:
                $H = \begin{pmatrix}
                0 & 0 & 0 & 1 & 1 & 1 & 1 \\
                0 & 1 & 1 & 0 & 0 & 1 & 1 \\
                1 & 0 & 1 & 0 & 1 & 0 & 1
                \end{pmatrix}$
                (Columns for bits 1, 2, 3, 4, 5, 6, 7).
            *   $y = (1, 0, 1, 0, 0, 0, 1)$
            *   $s = yH^T = (1010001) \begin{pmatrix}
                0 & 0 & 1 \\
                0 & 1 & 0 \\
                0 & 1 & 1 \\
                1 & 0 & 0 \\
                1 & 0 & 1 \\
                1 & 1 & 0 \\
                1 & 1 & 1
                \end{pmatrix}$
            *   $s = ( (1\cdot0+0\cdot0+1\cdot0+0\cdot1+0\cdot1+0\cdot1+1\cdot1), \quad (1\cdot0+0\cdot1+1\cdot1+0\cdot0+0\cdot0+0\cdot1+1\cdot1), \quad (1\cdot1+0\cdot0+1\cdot1+0\cdot0+0\cdot1+0\cdot0+1\cdot1) )$
            *   $s = ( (0+0+0+0+0+0+1), \quad (0+0+1+0+0+0+1), \quad (1+0+1+0+0+0+1) )$
            *   $s = (1, 0, 1)$ (all mod 2).
            *   The syndrome $s = 101$ (binary for 5).
            *   Look at the columns of $H$. The 5th column is $\begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}$.
            *   This matches the syndrome. Therefore, an error occurred in the 5th bit position.
            *   Corrected codeword $\hat{c} = y + \mathbf{e}_5 = (1010001) + (0000100) = 1010101$.
            *   The data bits are the first 4 bits: (1010). This is the corrected message.

*(Refer to Haykin, Chapter 5, for syndrome calculation examples.)*

#### **Example 2: The $(15, 11)$ Hamming Code ($r=4$)**

*   $n = 2^4 - 1 = 15$.
*   $m = r = 4$ parity bits.
*   $k = n - m = 15 - 4 = 11$ data bits.
*   $d_{min} = 3$. Can correct 1 error.

*   **Parity-Check Matrix ($H$):** $4 \times 15$ matrix with columns being all non-zero binary vectors of length 4.
*   **Generator Matrix ($G$):** $11 \times 15$ matrix, typically in systematic form $G = [I_{11} | P]$.

This code is used in applications like ECC memory. It's a larger code but follows the same principles.

---

### **Practice Questions/Exercises**

1.  **Construct the parity-check matrix $H$ for a $(7,4)$ Hamming code.** List all its columns and show that $d_{min}=3$.
2.  **For the $(7,4)$ Hamming code with the following generator matrix:**
    $G = \begin{pmatrix}
    1 & 0 & 0 & 0 & 0 & 1 & 1 \\
    0 & 1 & 0 & 0 & 1 & 0 & 1 \\
    0 & 0 & 1 & 0 & 1 & 1 & 0 \\
    0 & 0 & 0 & 1 & 1 & 1 & 1
    \end{pmatrix}$
    Encode the message $m = (1101)$.
3.  **Consider a received vector $y = 1110101$ for the $(7,4)$ Hamming code.** Use syndrome decoding to determine if an error occurred and if so, in which position. What is the corrected codeword and message?
4.  **Explain why Hamming codes are called "perfect" codes.**
5.  **What is the length and number of parity bits for a Hamming code with $r=5$? What is its minimum distance and error-correcting capability?**

---

### **Answers to Practice Questions**

1.  **Parity-Check Matrix $H$ for $(7,4)$ Hamming Code:**
    We need $r=3$, $n=7$. The columns of $H$ are all distinct non-zero binary vectors of length 3.
    Columns are binary representations of 1 to 7:
    $\mathbf{c}_1 = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}$, $\mathbf{c}_2 = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}$, $\mathbf{c}_3 = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}$, $\mathbf{c}_4 = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}$, $\mathbf{c}_5 = \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}$, $\mathbf{c}_6 = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}$, $\mathbf{c}_7 = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$.
    $H = [\mathbf{c}_1 \mathbf{c}_2 \mathbf{c}_3 \mathbf{c}_4 \mathbf{c}_5 \mathbf{c}_6 \mathbf{c}_7] = \begin{pmatrix}
    0 & 0 & 0 & 1 & 1 & 1 & 1 \\
    0 & 1 & 1 & 0 & 0 & 1 & 1 \\
    1 & 0 & 1 & 0 & 1 & 0 & 1
    \end{pmatrix}$
    *   **$d_{min}=3$:**
        *   No column is the zero vector.
        *   No two columns are identical (as they are distinct binary vectors).
        *   No column is the sum of two other columns (this is a property of the specific choice of vectors for $H$). For example, $\mathbf{c}_1 + \mathbf{c}_2 = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix} = \mathbf{c}_3$. Wait, this IS a linear dependency!
        *   **Correction:** The $d_{min}$ is the minimum number of columns that sum to zero. The standard construction ensures that no *subset* of columns forming $P^T$ or $I_r$ would have this property in a specific way.
        *   The property $\mathbf{c}_i = \mathbf{c}_j + \mathbf{c}_k$ means columns $i, j, k$ are linearly dependent.
        *   For the standard $H$, $\mathbf{c}_1+\mathbf{c}_2=\mathbf{c}_3$, $\mathbf{c}_1+\mathbf{c}_4=\mathbf{c}_5$, $\mathbf{c}_2+\mathbf{c}_4=\mathbf{c}_6$, $\mathbf{c}_1+\mathbf{c}_2+\mathbf{c}_4=\mathbf{c}_7$. The minimal set of columns summing to zero is of size 3 (e.g., $\mathbf{c}_1+\mathbf{c}_2+\mathbf{c}_3=0$ is false. $\mathbf{c}_1 + \mathbf{c}_2 + \mathbf{c}_3 + \mathbf{c}_4 + \mathbf{c}_5 + \mathbf{c}_6 + \mathbf{c}_7 = 0$ is true as the sum of all non-zero vectors is zero).
        *   The key is that the set of columns used for $P^T$ and $I_r$ in a systematic code cannot contain subsets of columns that sum to zero.
        *   The columns of $H$ are the binary representations of $1, \dots, 2^r-1$. For $r=3$, $1=(001), 2=(010), 3=(011), 4=(100), 5=(101), 6=(110), 7=(111)$.
        *   The property that makes $d_{min}=3$ is that no column is the sum of two other columns. For example, $1+2=3$, so $\mathbf{c}_1+\mathbf{c}_2=\mathbf{c}_3$. This means columns 1, 2, and 3 are linearly dependent. $H$ has linearly dependent columns, but the *minimum number* of linearly dependent columns is 3.
        *   The linear dependency $\mathbf{c}_1 + \mathbf{c}_2 = \mathbf{c}_3$ means that if columns 1 and 2 are error locations, then column 3 will also be indicated by the syndrome, which is not what we want.
        *   The standard construction of $H$ ensures that the columns are chosen such that this issue is avoided for single-error correction. The columns of $H$ are distinct non-zero vectors of length $r$. The minimum distance is the smallest number of columns that are linearly dependent. For the standard Hamming code, the smallest set of columns that sums to zero is of size 3.

2.  **Encoding message (1101):**
    $m = (1101)$
    $G = \begin{pmatrix}
    1 & 0 & 0 & 0 & 0 & 1 & 1 \\
    0 & 1 & 0 & 0 & 1 & 0 & 1 \\
    0 & 0 & 1 & 0 & 1 & 1 & 0 \\
    0 & 0 & 0 & 1 & 1 & 1 & 1
    \end{pmatrix}$
    $c = mG = (1101) \begin{pmatrix}
    1 & 0 & 0 & 0 & 0 & 1 & 1 \\
    0 & 1 & 0 & 0 & 1 & 0 & 1 \\
    0 & 0 & 1 & 0 & 1 & 1 & 0 \\
    0 & 0 & 0 & 1 & 1 & 1 & 1
    \end{pmatrix}$
    $c = (1\cdot1, 1\cdot1, 0\cdot1, 1\cdot1, \quad 1\cdot0+1\cdot1+0\cdot1+1\cdot1, \quad 1\cdot1+1\cdot0+0\cdot1+1\cdot1, \quad 1\cdot1+1\cdot1+0\cdot0+1\cdot1 )$
    $c = (1, 1, 0, 1, \quad 0+1+0+1, \quad 1+0+0+1, \quad 1+1+0+1)$
    $c = (1, 1, 0, 1, \quad 1+1, \quad 1+1, \quad 1+1+1)$
    $c = (1, 1, 0, 1, \quad 0, \quad 0, \quad 1)$
    The encoded codeword is $1101001$.

3.  **Syndrome decoding $y = 1110101$:**
    Using the $H$ matrix from question 1 (columns are binary for 1 to 7):
    $H = \begin{pmatrix}
    0 & 0 & 0 & 1 & 1 & 1 & 1 \\
    0 & 1 & 1 & 0 & 0 & 1 & 1 \\
    1 & 0 & 1 & 0 & 1 & 0 & 1
    \end{pmatrix}$
    $y = (1110101)$
    $s = yH^T = (1110101) \begin{pmatrix}
    0 & 0 & 1 \\
    0 & 1 & 0 \\
    0 & 1 & 1 \\
    1 & 0 & 0 \\
    1 & 0 & 1 \\
    1 & 1 & 0 \\
    1 & 1 & 1
    \end{pmatrix}$
    $s = ( (1\cdot0+1\cdot0+1\cdot0+0\cdot1+1\cdot1+0\cdot1+1\cdot1), \quad (1\cdot0+1\cdot1+1\cdot1+0\cdot0+1\cdot0+0\cdot1+1\cdot1), \quad (1\cdot1+1\cdot0+1\cdot1+0\cdot0+1\cdot1+0\cdot0+1\cdot1) )$
    $s = ( (0+0+0+0+1+0+1), \quad (0+1+1+0+0+0+1), \quad (1+0+1+0+1+0+1) )$
    $s = ( 1+1, \quad 1+1+1, \quad 1+1+1+1 )$
    $s = (0, 1, 0)$ (all mod 2).
    The syndrome $s = 010$ (binary for 2).
    The 2nd column of $H$ is $\begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}$.
    This matches the syndrome. So, an error occurred in the 2nd bit position.
    Corrected codeword $\hat{c} = y + \mathbf{e}_2 = (1110101) + (0100000) = 1010101$.
    The message bits are the first 4 bits of $\hat{c}$: $(1010)$.

4.  **"Perfect" Codes:** Hamming codes are called perfect codes because they achieve the theoretical upper bound on the number of errors that can be corrected for a given code rate and length, according to the Hamming bound (also known as the sphere-packing bound). For single-error correction, a code is perfect if the spheres of radius 1 around each codeword completely fill the entire space of possible received vectors without overlapping. The Hamming bound states that for a binary block code of length $n$, dimension $k$, and minimum distance $d$, the number of codewords $M = 2^k$ must satisfy:
    $M \sum_{i=0}^t \binom{n}{i} \le 2^n$, where $t = \lfloor (d-1)/2 \rfloor$.
    For a Hamming code with $d=3$, $t=1$. So, $2^k (1 + n) \le 2^n$.
    Substituting $n = 2^r-1$ and $k = 2^r-1-r$:
    $2^{2^r-1-r} (1 + 2^r-1) = 2^{2^r-1-r} (2^r) = 2^{2^r-1-r+r} = 2^{2^r-1} = 2^n$.
    The equality holds, meaning Hamming codes perfectly fill the space for single-error correction.

5.  **Hamming code with $r=5$:**
    *   Length $n = 2^r - 1 = 2^5 - 1 = 32 - 1 = 31$.
    *   Number of parity bits $m = r = 5$.
    *   Number of data bits $k = n - m = 31 - 5 = 26$. This is a $(31, 26)$ Hamming code.
    *   Minimum distance $d_{min} = 3$.
    *   Error-correcting capability $t = \lfloor (3-1)/2 \rfloor = 1$. It can correct single-bit errors.

---

### **Highlight Important Points to Remember**

*   **Hamming code parameters:** $n = 2^r - 1$, $m = r$ parity bits, $k = 2^r - 1 - r$ data bits.
*   **Minimum distance:** $d_{min} = 3$.
*   **Error Correction:** Corrects all single-bit errors.
*   **Parity-Check Matrix ($H$):** Columns are all distinct non-zero binary vectors of length $r$. This is key to its properties.
*   **Syndrome Decoding:** A very efficient method for detecting and locating single-bit errors.
*   **Perfect Codes:** Hamming codes are perfect for single-error correction, achieving the Hamming bound.
*   **Trade-off:** While efficient for single-error correction, they are not designed for burst errors or multiple-bit errors.

---

### **Alignment with Course Outcomes**

*   **CO1: Explain various algebraic structures used in coding theory (Knowledge Level: K2)**
    *   Hamming codes are linear block codes, which are based on vector spaces over finite fields ($\mathbb{F}_2$). Their construction relies on the properties of these vector spaces.
*   **CO2: Explain the error detection and correction capabilities of linear codes (Knowledge Level: K2)**
    *   This topic directly addresses how the properties of $H$ (specifically, distinct non-zero columns) lead to $d_{min}=3$ and thus single-error correction.
*   **CO3: Apply linear block codes to detect and correct errors (Knowledge Level: K3)**
    *   The examples and syndrome decoding procedure demonstrate how to apply Hamming codes for error detection and correction.
*   **CO4: Use algebraic techniques to construct efficient codes with reduced structural complexity (Knowledge Level: K3)**
    *   The systematic construction of $G$ and $H$ for Hamming codes is an algebraic technique. Their simple structure and efficient decoding make them "efficient" for their purpose.
*   **CO5: Apply convolutional code for error detection correction (Knowledge Level: K3)**
    *   While this topic focuses on block codes, it provides context for understanding error correction in general, which is a prerequisite for convolutional codes.
*   **CO6: Illustrate modern error correcting codes like Turbo codes, LDOC code and polar codes (Knowledge Level: K2)**
    *   Hamming codes serve as a foundational example of error-correcting codes, illustrating the fundamental principles that are extended and enhanced in modern codes.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### **References**

*   **Lin & Costello, "Error Control Coding: Fundamentals and Applications"**: Chapters 2 and 3 are highly relevant for linear block codes, parity-check matrices, generator matrices, minimum distance, and Hamming codes.
*   **Haykin, "Communication Systems"**: Likely covers basic block codes and error correction principles, possibly including Hamming codes as an example in relevant chapters on digital communication.
*   **Richardson & Urbanke, "Modern Coding Theory"**: While focusing on modern codes, it will likely cover foundational codes like Hamming codes in its early chapters for context and comparison.
*   **Roth, "Introduction to Coding Theory"**: A dedicated coding theory book would offer a thorough algebraic treatment of Hamming codes.

---