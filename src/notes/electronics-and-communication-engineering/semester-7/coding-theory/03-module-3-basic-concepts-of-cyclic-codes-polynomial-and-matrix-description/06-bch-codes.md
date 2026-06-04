---
title: "BCH codes"
subject: "CODING THEORY"
module: "Module 3: Basic concepts of cyclic codes – Polynomial and matrix description."
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff22d"
status: "completed"
scrapedAt: "2026-05-23T18:05:20.116Z"
---
# CODING THEORY - Module 3: Basic concepts of cyclic codes – Polynomial and matrix description

## Topic: BCH Codes

---

### Introduction to BCH Codes

BCH codes are a powerful class of cyclic error-correcting codes that offer superior error detection and correction capabilities compared to simple cyclic codes like Hamming codes. They are designed to correct multiple random errors within a block of data. The "BCH" stands for Bose, Chaudhuri, and Hocquenghem, the mathematicians who independently discovered these codes.

**Key Contribution:** BCH codes provide a systematic way to construct codes with a guaranteed minimum Hamming distance, which directly relates to their error-correcting capability.

---

### Learning Outcomes Covered:

*   **LO1: Explain the basic principles of BCH codes.** (Implicitly covered through definitions and construction)
*   **LO2: Understand the relationship between BCH codes and cyclic codes.** (BCH codes are a subclass of cyclic codes)
*   **LO3: Discuss the error correction capabilities of BCH codes.** (Guaranteed minimum distance)
*   **LO4: Describe the generator polynomial and parity-check matrix for BCH codes.** (Polynomial and matrix descriptions)
*   **LO5: Understand the encoding and decoding process for BCH codes (at a conceptual level for this module).** (Focus on polynomial representation)

---

### Course Outcomes Alignment:

*   **CO1: Explain various algebraic structures used in coding theory (Knowledge Level: K2)**
    *   BCH codes heavily rely on finite fields (Galois fields) and polynomial algebra, demonstrating the application of these algebraic structures.
*   **CO2: Explain the error detection and correction capabilities of linear codes (Knowledge Level: K2)**
    *   The guaranteed minimum distance of BCH codes directly explains their error correction capabilities.
*   **CO3: Apply linear block codes to detect and correct errors (Knowledge Level: K3)**
    *   While detailed decoding algorithms are beyond this introductory module, understanding the structure of BCH codes lays the groundwork for applying them.
*   **CO4: Use algebraic techniques to construct efficient codes with reduced structural complexity (Knowledge Level: K3)**
    *   The systematic construction of BCH codes using primitive elements and minimal polynomials is a prime example of algebraic techniques for efficient code construction.

---

## 1. Algebraic Foundations for BCH Codes

BCH codes are constructed using the properties of finite fields, specifically Galois Fields ($GF(2^m)$).

### 1.1. Finite Fields ($GF(q)$)

*   **Definition:** A finite field is a set with a finite number of elements equipped with addition and multiplication operations that satisfy the field axioms (associativity, commutativity, distributivity, existence of additive and multiplicative identities and inverses, except for zero for multiplicative inverse).
*   **Galois Fields ($GF(2^m)$):** These are finite fields with $2^m$ elements, where $m$ is a positive integer. They are crucial for constructing BCH codes because they allow for polynomial arithmetic and have primitive elements with useful properties.
    *   **Elements:** Elements of $GF(2^m)$ can be represented as polynomials of degree less than $m$ with coefficients in $GF(2)$. Arithmetic is performed modulo an irreducible polynomial of degree $m$ over $GF(2)$.
    *   **Primitive Element ($\alpha$):** An element $\alpha$ in $GF(2^m)$ is called a primitive element if its powers $\alpha^1, \alpha^2, \ldots, \alpha^{2^m-1}$ generate all the non-zero elements of the field. The order of $\alpha$ is $2^m-1$.
    *   **Minimal Polynomial:** For any element $\beta \in GF(2^m)$, its minimal polynomial over $GF(2)$ is the monic polynomial of least degree with coefficients in $GF(2)$ that has $\beta$ as a root. The minimal polynomial of a primitive element $\alpha$ is irreducible and has degree $m$.

**Reference:** *Error Control Coding: Fundamentals and Applications* by Shu Lin & Daniel J. Costello, Jr. (Chapter 4: Finite Fields) provides a comprehensive treatment of finite fields.

---

## 2. BCH Codes: Definition and Properties

### 2.1. Definition of BCH Codes

A **BCH code** of length $n = 2^m - 1$ over $GF(2)$ is a cyclic code with the property that its parity-check polynomial $h(x)$ has roots $\alpha^1, \alpha^2, \ldots, \alpha^{2t}$ in $GF(2^m)$, where $\alpha$ is a primitive element of $GF(2^m)$.

*   **Parameters:**
    *   $n$: Codeword length. For primitive BCH codes, $n = 2^m - 1$.
    *   $k$: Message length.
    *   $d$: Minimum Hamming distance.
    *   $t$: Number of errors the code can correct. A BCH code with roots $\alpha^1, \ldots, \alpha^{2t}$ can correct at least $t$ errors.

### 2.2. Generator Polynomial of BCH Codes

The generator polynomial $g(x)$ of a cyclic code is a divisor of $x^n - 1$. For a BCH code, $g(x)$ is the **least common multiple (LCM)** of the minimal polynomials of $\alpha^1, \alpha^2, \ldots, \alpha^{2t}$.

*   Let $m_i(x)$ be the minimal polynomial of $\alpha^i$ over $GF(2)$.
*   Then, $g(x) = \text{lcm}(m_1(x), m_2(x), \ldots, m_{2t}(x))$.
*   **Important Property:** If $m_i(x)$ is the minimal polynomial of $\alpha^i$, then $m_{2i}(x) = m_i(x)$. This is because $\alpha^{2i} = (\alpha^i)^2$, and squaring elements in $GF(2^m)$ preserves their minimal polynomial. Therefore, the roots of $g(x)$ are $\alpha^1, \alpha^2, \ldots, \alpha^{2t-1}$.

**How to find $g(x)$:**

1.  **Choose $m$:** Determine the Galois field $GF(2^m)$ to be used. This determines the codeword length $n = 2^m - 1$.
2.  **Find a primitive element $\alpha$:** Find a primitive element in $GF(2^m)$. This is usually done by choosing an irreducible polynomial of degree $m$ over $GF(2)$ and taking a root of that polynomial.
3.  **Find minimal polynomials:** For $i = 1, 2, \ldots, t$, find the minimal polynomial $m_i(x)$ of $\alpha^i$ over $GF(2)$. Note that $m_i(x) = m_{2i}(x)$. So, we only need to find minimal polynomials for $\alpha^1, \alpha^2, \ldots, \alpha^{t}$.
4.  **Construct $g(x)$:** $g(x) = \prod_{i=1}^{t} m_i(x)$.

**Example:** Construct a $(7, 4)$ BCH code.
*   Let $m=3$. Then $n = 2^3 - 1 = 7$. The field is $GF(2^3)$.
*   Let $p(x) = x^3 + x + 1$ be an irreducible polynomial over $GF(2)$. Let $\alpha$ be a root of $p(x)$.
*   The elements of $GF(2^3)$ are $\{0, 1, \alpha, \alpha^2, \alpha^3 = \alpha+1, \alpha^4 = \alpha^2+\alpha, \alpha^5 = \alpha^2+\alpha+1, \alpha^6 = \alpha^2+1\}$.
*   The minimal polynomial of $\alpha$ over $GF(2)$ is $m_1(x) = x^3 + x + 1$.
*   The powers of $\alpha$ are:
    *   $\alpha^1$: $m_1(x) = x^3 + x + 1$
    *   $\alpha^2$: $m_2(x) = x^3 + x^2 + 1$ (the polynomial whose roots are $\alpha^2, \alpha^4, \alpha^8 = \alpha$)
    *   $\alpha^3$: $m_3(x) = x^2 + x + 1$ (the polynomial whose roots are $\alpha^3, \alpha^6$)
    *   $\alpha^4$: $m_4(x) = m_2(x)$
    *   $\alpha^5$: $m_5(x) = x^2 + 1$ (the polynomial whose roots are $\alpha^5, \alpha^{10} = \alpha^5$)
    *   $\alpha^6$: $m_6(x) = m_3(x)$
*   To correct $t=1$ error: We need roots $\alpha^1, \alpha^2$.
    *   $g(x) = m_1(x) \cdot m_2(x) = (x^3 + x + 1)(x^3 + x^2 + 1)$
    *   $g(x) = x^6 + x^5 + x^2 + x^4 + x^3 + x + x^3 + x^2 + 1$
    *   $g(x) = x^6 + x^5 + x^4 + 2x^3 + 2x^2 + x + 1$
    *   Working in $GF(2)$, coefficients are modulo 2: $g(x) = x^6 + x^5 + x^4 + x + 1$.
    *   The degree of $g(x)$ is 6. The number of parity-check bits is $n-k = 6$.
    *   The message length is $k = n - \text{deg}(g(x)) = 7 - 6 = 1$. This is not the common $(7,4)$ code.
*   To correct $t=2$ errors: We need roots $\alpha^1, \alpha^2, \alpha^3, \alpha^4$. Since $m_4(x) = m_2(x)$, we need $m_1(x), m_2(x), m_3(x)$.
    *   $g(x) = m_1(x) \cdot m_2(x) \cdot m_3(x) = (x^3 + x + 1)(x^3 + x^2 + 1)(x^2 + x + 1)$
    *   $g(x) = (x^6 + x^5 + x^4 + x + 1)(x^2 + x + 1)$
    *   $g(x) = x^8 + x^7 + x^6 + x^3 + x^2 + x^6 + x^5 + x^4 + x^2 + x + x^5 + x^4 + x^3 + x + 1$
    *   $g(x) = x^8 + x^7 + 2x^6 + 2x^5 + 2x^4 + 2x^3 + 2x^2 + 2x + 1$
    *   In $GF(2)$: $g(x) = x^8 + x + 1$. This results in an 8-bit codeword length, which is not a primitive BCH code.

**Revisiting the $(7, 4)$ BCH code:** The standard $(7, 4)$ BCH code is a single-error correcting code with $n=7, k=4, d=3$.
*   To get $k=4$, we need $\text{deg}(g(x)) = n-k = 7-4 = 3$.
*   This requires using a different primitive polynomial and possibly a shorter code length.
*   Let's consider a different $m$. If we want a code of length $n=7$, we must use $m=3$.
*   The common $(7,4)$ code is actually a Hamming code. The primitive $(7,4)$ BCH code corrects only 1 error.
*   To correct $t=1$ error, $g(x)$ needs to have roots $\alpha^1, \alpha^2$.
    *   $m_1(x)$ for $\alpha$ (root of $x^3+x+1$) is $x^3+x+1$.
    *   $m_2(x)$ for $\alpha^2$ (root of $x^3+x^2+1$) is $x^3+x^2+1$.
    *   $g(x) = (x^3+x+1)(x^3+x^2+1) = x^6+x^5+x^4+x+1$.
    *   This gives $k = 7-6=1$, an $(7,1)$ code.

**Important Correction:** The common $(7,4)$ code is the Hamming code, which can be viewed as a BCH code. A $(7,4)$ code means $n=7$ and $k=4$. This implies the generator polynomial degree is $7-4=3$.
*   For a $(7,4)$ BCH code, we need $n=7$, so $m=3$.
*   To achieve $k=4$, $\text{deg}(g(x)) = 3$.
*   The generator polynomial must divide $x^7-1$.
*   $x^7-1 = (x+1)(x^3+x+1)(x^3+x^2+1)$ over $GF(2)$.
*   If we take $g(x) = x^3+x+1$ (minimal polynomial of $\alpha$), this is a cyclic code of length 7. Its roots are $\alpha, \alpha^2, \alpha^4$. This code can correct at least 1 error. The dimension $k = 7-3=4$.
*   Therefore, the $(7,4)$ BCH code (which is also a Hamming code) has $g(x) = x^3+x+1$. It corrects $t=1$ error.

**To correct $t=2$ errors:**
*   We need roots $\alpha^1, \alpha^2, \alpha^3, \alpha^4$.
*   $g(x) = \text{lcm}(m_1(x), m_2(x), m_3(x), m_4(x))$
*   For $m=3$, the minimal polynomials are:
    *   $m_1(x) = x^3 + x + 1$ (roots $\alpha, \alpha^2, \alpha^4$)
    *   $m_2(x) = x^3 + x^2 + 1$ (roots $\alpha^2, \alpha^4, \alpha^8=\alpha$)
    *   $m_3(x) = x^2 + x + 1$ (roots $\alpha^3, \alpha^6$)
    *   $m_4(x) = m_2(x)$
*   So, we need $m_1(x)$ and $m_2(x)$.
*   $g(x) = \text{lcm}(m_1(x), m_2(x)) = m_1(x) \cdot m_2(x) = (x^3+x+1)(x^3+x^2+1) = x^6+x^5+x^4+x+1$.
*   This gives $k = 7-6=1$, a $(7,1)$ code that can correct $t=2$ errors.

**Key Takeaway:** The generator polynomial $g(x)$ of a BCH code is the product of the minimal polynomials of $\alpha^1, \alpha^2, \ldots, \alpha^{2t}$. The number of errors corrected ($t$) determines the specific minimal polynomials included in $g(x)$.

**Reference:** *Modern Coding Theory* by T. Richardson, R. Urbanke (Chapter 3: Cyclic Codes) and *Error Control Coding* by Lin & Costello (Chapter 5: BCH Codes) detail the construction and properties of BCH codes.

### 2.3. Parity-Check Polynomial of BCH Codes

For a cyclic code, the generator polynomial $g(x)$ and the parity-check polynomial $h(x)$ are related by $g(x)h(x) = x^n - 1$.

*   The parity-check polynomial $h(x)$ is the minimal polynomial of $\alpha$.
*   Wait, this is for primitive BCH codes.
*   For a BCH code designed to correct $t$ errors, the parity-check polynomial $h(x)$ is chosen such that its roots include $\alpha^1, \alpha^2, \ldots, \alpha^{2t}$.
*   The standard construction is to set $h(x)$ as the **minimal polynomial of $\alpha$**, which is an irreducible polynomial of degree $m$.
*   If $h(x)$ is the minimal polynomial of $\alpha$, then its roots are $\alpha^1, \alpha^2, \ldots, \alpha^{2^m-1}$. This means $h(x)$ would divide $x^n-1$.
*   For a $t$-error correcting BCH code, the parity-check polynomial is often constructed by taking the product of the minimal polynomials of $\alpha^1, \alpha^2, \ldots, \alpha^{2t-1}$.
*   Let $h(x)$ be the parity-check polynomial. The generator polynomial $g(x)$ is then $(x^n-1)/h(x)$.

**Let's clarify the relationship between $g(x)$ and $h(x)$ for BCH codes:**

*   A linear code is defined by its parity-check matrix $H$. For cyclic codes, $H$ can be derived from the parity-check polynomial $h(x)$.
*   The generator polynomial $g(x)$ is the lowest-degree polynomial that divides $x^n-1$ and is a factor of any codeword polynomial.
*   The parity-check polynomial $h(x)$ is the lowest-degree polynomial such that $g(x)h(x) = x^n-1$.
*   The roots of $g(x)$ are related to the error-correction capability.
*   For a BCH code designed to correct $t$ errors, the roots of the **generator polynomial** $g(x)$ include $\alpha^1, \alpha^2, \ldots, \alpha^{2t}$. This statement is often seen, but it's more accurately stated that the minimal polynomials corresponding to these roots are factors of $g(x)$.

**More precise definition:** A BCH code of length $n=2^m-1$ and designed to correct $t$ errors is a cyclic code whose generator polynomial $g(x)$ is the polynomial of least degree over $GF(2)$ that has $\alpha^1, \alpha^2, \ldots, \alpha^{2t}$ as roots in $GF(2^m)$.

*   $g(x) = \text{lcm}(m_1(x), m_2(x), \ldots, m_{2t}(x))$, where $m_i(x)$ is the minimal polynomial of $\alpha^i$.
*   Since $m_i(x) = m_{2i}(x)$, we have $g(x) = \text{lcm}(m_1(x), m_3(x), \ldots, m_{2t-1}(x))$.

**Example revisited:** $(7, 4)$ BCH code (Hamming code, $t=1$).
*   $n=7$, $m=3$. $\alpha$ is a primitive element.
*   We need to correct $t=1$ error. So we need roots $\alpha^1, \alpha^2$.
*   $g(x) = \text{lcm}(m_1(x), m_2(x))$.
*   For $m=3$, $m_1(x) = x^3+x+1$ and $m_2(x) = x^3+x^2+1$.
*   $g(x) = (x^3+x+1)(x^3+x^2+1) = x^6+x^5+x^4+x+1$. This gives $k=1$.

**Revisiting the $(7,4)$ Hamming code connection:** The Hamming code of length 7, parity-check matrix $H = \begin{pmatrix} 0 & 0 & 0 & 1 & 1 & 1 & 1 \\ 0 & 1 & 1 & 0 & 0 & 1 & 1 \\ 1 & 0 & 1 & 0 & 1 & 0 & 1 \end{pmatrix}$.
*   The generator polynomial for the Hamming code is $g(x) = x^3 + x + 1$.
*   The parity-check polynomial is $h(x) = \frac{x^7-1}{g(x)} = \frac{(x+1)(x^3+x+1)(x^3+x^2+1)}{x^3+x+1} = (x+1)(x^3+x^2+1) = x^4+x^3+x+1$.
*   The roots of $g(x) = x^3+x+1$ are $\alpha, \alpha^2, \alpha^4$. This means it can correct at least $t=1$ error.
*   The roots of $h(x)$ are related to the parity-check bits and error syndromes. For a cyclic code, the roots of $g(x)$ are a subset of the roots of $x^n-1$. The roots of $h(x)$ are the remaining roots. The set of roots of $g(x)$ determines the code's properties.

**Correction:** For a cyclic code, the generator polynomial $g(x)$ is the polynomial of lowest degree such that $c(x) = m(x)g(x)$ for any codeword $c(x)$, where $m(x)$ is the message polynomial. The parity-check polynomial $h(x)$ satisfies $g(x)h(x) = x^n-1$. The minimum distance of a cyclic code is related to the number of consecutive roots of $g(x)$.

For BCH codes designed to correct $t$ errors, the generator polynomial $g(x)$ is constructed such that its roots are $\alpha^1, \alpha^2, \ldots, \alpha^{2t}$. This means $g(x) = \text{lcm}(m_1(x), m_2(x), \ldots, m_{2t}(x))$.

**Important Distinction:**
*   **Primitive BCH codes:** Length $n = 2^m-1$. The generator polynomial $g(x)$ has roots $\alpha^1, \ldots, \alpha^{2t}$. The degree of $g(x)$ is typically $mt$.
*   **Non-primitive BCH codes:** Length $n$ is a divisor of $2^m-1$. They are constructed similarly but over a subfield.

### 2.4. Error Correction Capability

A BCH code with generator polynomial $g(x)$ whose roots include $\alpha^1, \alpha^2, \ldots, \alpha^{2t}$ can correct at least $t$ errors. This is guaranteed by the **BCH Bound** (or minimum distance bound).

*   **$d \ge 2t + 1$**: The minimum Hamming distance $d$ of such a code is at least $2t+1$.
*   This implies the code can detect $2t$ errors and correct $t$ errors.

**How it works (Conceptual):**
During decoding, received syndromes are calculated by evaluating the received polynomial at powers of $\alpha$. If the received word is $r(x) = c(x) + e(x)$, where $c(x)$ is the codeword and $e(x)$ is the error polynomial, then the syndrome $s_i = r(\alpha^i) = e(\alpha^i)$. If there are $t$ errors at positions $j_1, \ldots, j_t$, then $e(x) = x^{j_1} + \ldots + x^{j_t}$. The syndromes will be $s_i = \alpha^{i j_1} + \ldots + \alpha^{i j_t}$. By analyzing these $2t$ syndromes (for $i=1, \ldots, 2t$), it's possible to determine the error locations and magnitudes.

**Reference:** *Principles of digital communication* by RG Gallager (Chapter 6: Error-correcting codes) discusses error bounds.

---

## 3. Matrix Description of BCH Codes

Like all linear codes, BCH codes can be described by their generator matrix $G$ and parity-check matrix $H$.

### 3.1. Generator Matrix $G$

The generator matrix $G$ for a linear block code of dimension $k$ and length $n$ is a $k \times n$ matrix whose rows are a basis for the code. For a cyclic code, the generator polynomial $g(x)$ can be used to construct $G$.

*   If $g(x)$ has degree $n-k$, the standard form of the generator matrix is:
    $G = \begin{pmatrix} 1 & 0 & \cdots & 0 & g_{n-k} & \cdots & g_1 & g_0 \\ 0 & 1 & \cdots & 0 & 0 & \cdots & 0 & 0 \\ \vdots & \vdots & \ddots & \vdots & \vdots & \ddots & \vdots & \vdots \\ 0 & 0 & \cdots & 1 & 0 & \cdots & 0 & 0 \end{pmatrix}$
    (This assumes $g(x) = g_0 + g_1x + \ldots + g_{n-k}x^{n-k}$, where $g_0=1$ if $g(x)$ is monic).
*   A more common representation is to place the coefficients of $g(x)$ in the last $n-k+1$ columns.
    Let $g(x) = g_0 + g_1x + \ldots + g_{n-k}x^{n-k}$, with $g_0=1$.
    $G = \begin{pmatrix}
    g_0 & g_1 & \cdots & g_{n-k} & 0 & \cdots & 0 \\
    0 & g_0 & g_1 & \cdots & g_{n-k} & \cdots & 0 \\
    \vdots & \vdots & \ddots & \ddots & \ddots & \ddots & \vdots \\
    0 & 0 & \cdots & g_0 & g_1 & \cdots & g_{n-k}
    \end{pmatrix}$
    This is a $k \times n$ matrix. The first row is the coefficients of $g(x)$ padded with zeros. The subsequent rows are cyclic shifts of the first row.

### 3.2. Parity-Check Matrix $H$

The parity-check matrix $H$ is an $(n-k) \times n$ matrix such that $HG^T = 0$. For a cyclic code, $H$ is closely related to the parity-check polynomial $h(x)$.

*   If $h(x)$ is the parity-check polynomial of degree $n-k$, the standard form of the parity-check matrix is:
    $H = \begin{pmatrix} h_{n-k} & h_{n-k-1} & \cdots & h_1 & h_0 & 0 & \cdots & 0 \\ 0 & h_{n-k} & h_{n-k-1} & \cdots & h_1 & h_0 & \cdots & 0 \\ \vdots & \vdots & \ddots & \ddots & \ddots & \ddots & \ddots & \vdots \\ 0 & 0 & \cdots & h_{n-k} & h_{n-k-1} & \cdots & h_1 & h_0 \end{pmatrix}$
    (where $h(x) = h_0 + h_1x + \ldots + h_{n-k}x^{n-k}$, with $h_0=1$ if $h(x)$ is monic).

**Example:** The $(7,4)$ BCH code ($t=1$) with $g(x) = x^3+x+1$ ($n=7, k=4$).
*   The generator polynomial is $g(x) = 1 \cdot x^3 + 0 \cdot x^2 + 1 \cdot x + 1 \cdot x^0$. Here $n-k=3$.
*   Generator Matrix $G$ ($4 \times 7$):
    $G = \begin{pmatrix}
    1 & 0 & 1 & 1 & 0 & 0 & 0 \\
    0 & 1 & 0 & 1 & 1 & 0 & 0 \\
    0 & 0 & 1 & 0 & 1 & 1 & 0 \\
    0 & 0 & 0 & 1 & 0 & 1 & 1
    \end{pmatrix}$

*   Parity-check polynomial $h(x) = \frac{x^7-1}{g(x)} = (x+1)(x^3+x^2+1) = x^4+x^3+x+1$.
    $h(x) = 1 \cdot x^4 + 1 \cdot x^3 + 0 \cdot x^2 + 1 \cdot x + 1 \cdot x^0$. Here $n-k=4$.
*   Parity-Check Matrix $H$ ($3 \times 7$):
    $H = \begin{pmatrix}
    1 & 1 & 0 & 1 & 1 & 0 & 0 \\
    0 & 1 & 1 & 0 & 1 & 1 & 0 \\
    0 & 0 & 1 & 1 & 0 & 1 & 1
    \end{pmatrix}$

**Verification:** $HG^T$ should be the zero matrix.
$G^T = \begin{pmatrix}
1 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 \\
1 & 0 & 1 & 0 \\
1 & 1 & 0 & 1 \\
0 & 1 & 1 & 0 \\
0 & 0 & 1 & 1 \\
0 & 0 & 0 & 1
\end{pmatrix}$
$HG^T = \begin{pmatrix}
1 & 1 & 0 & 1 & 1 & 0 & 0 \\
0 & 1 & 1 & 0 & 1 & 1 & 0 \\
0 & 0 & 1 & 1 & 0 & 1 & 1
\end{pmatrix} \begin{pmatrix}
1 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 \\
1 & 0 & 1 & 0 \\
1 & 1 & 0 & 1 \\
0 & 1 & 1 & 0 \\
0 & 0 & 1 & 1 \\
0 & 0 & 0 & 1
\end{pmatrix}$
Calculating the product:
Row 1: $(1,1,0,1,1,0,0) \cdot (1,0,1,1,0,0,0)^T = 1+0+0+1+0+0+0 = 0$ (mod 2)
Row 1: $(1,1,0,1,1,0,0) \cdot (0,1,0,1,1,0,0)^T = 0+1+0+1+1+0+0 = 1$ (mod 2). This should be zero!

**Let's re-examine the matrix construction.**
The standard generator matrix $G$ for a cyclic code with generator polynomial $g(x) = g_0 + g_1x + \dots + g_{n-k}x^{n-k}$ is given by:
$G = \begin{pmatrix}
g_0 & g_1 & \cdots & g_{n-k} & 0 & \cdots & 0 \\
0 & g_0 & g_1 & \cdots & g_{n-k} & \cdots & 0 \\
\vdots & \vdots & \ddots & \ddots & \ddots & \ddots & \vdots \\
0 & 0 & \cdots & g_0 & g_1 & \cdots & g_{n-k}
\end{pmatrix}$
This matrix generates codewords $c(x) = m(x)g(x)$.

The parity-check matrix $H$ is formed by taking the first $n-k$ columns of $G$ and then taking the transpose of the matrix formed by taking the last $n-k$ columns of $G$, and placing them appropriately to create a generator matrix for the dual code.

**A more direct construction of $H$ from $h(x)$ is standard:**
Let $h(x) = h_0 + h_1x + \ldots + h_{n-k}x^{n-k}$.
$H = \begin{pmatrix}
h_0 & h_1 & \cdots & h_{n-k} & 0 & \cdots & 0 \\
0 & h_0 & h_1 & \cdots & h_{n-k} & \cdots & 0 \\
\vdots & \vdots & \ddots & \ddots & \ddots & \ddots & \vdots \\
0 & 0 & \cdots & h_0 & h_1 & \cdots & h_{n-k}
\end{pmatrix}$
This is an $(n-k) \times n$ matrix. This matrix generates the dual code.

**Correcting the $H$ matrix calculation for $(7,4)$ BCH:**
$h(x) = x^4+x^3+x+1$. Here $n-k=4$. The $H$ matrix should be $4 \times 7$.
$h_0=1, h_1=1, h_2=0, h_3=1, h_4=1$.
$H = \begin{pmatrix}
1 & 1 & 0 & 1 & 1 & 0 & 0 \\
0 & 1 & 1 & 0 & 1 & 1 & 0 \\
0 & 0 & 1 & 1 & 0 & 1 & 1 \\
0 & 0 & 0 & 1 & 1 & 0 & 1
\end{pmatrix}$
This is a $4 \times 7$ matrix. For a code of length $n=7$ and dimension $k=4$, the parity-check matrix should be $(n-k) \times n = 3 \times 7$.

**The issue is that the $h(x)$ derived from $g(x)$ is not always the "minimal" $h(x)$ that defines the code.**

**For cyclic codes, the parity-check polynomial $h(x)$ can be any divisor of $x^n-1$. The generator polynomial $g(x)$ is then $(x^n-1)/h(x)$.**

**Revisiting the BCH definition:** A cyclic code is a BCH code if its parity-check polynomial $h(x)$ has roots $\alpha^1, \alpha^2, \ldots, \alpha^{2t}$ in $GF(2^m)$.

*   For the $(7,4)$ Hamming code, $n=7$. We use $m=3$. Primitive element $\alpha$.
*   $x^7-1 = (x+1)(x^3+x+1)(x^3+x^2+1)$.
*   If $h(x) = x^3+x+1$, then $g(x) = (x+1)(x^3+x^2+1) = x^4+x^3+x+1$. This gives $k=4$. The roots of $h(x)$ are $\alpha, \alpha^2, \alpha^4$. This matches the definition of a $t=1$ error correcting BCH code.
    *   Parity-check polynomial: $h(x) = x^3+x+1$. Degree is 3, so $n-k=3$. $H$ is $3 \times 7$.
    *   $H = \begin{pmatrix}
        1 & 0 & 1 & 1 & 0 & 0 & 0 \\
        0 & 1 & 0 & 1 & 1 & 0 & 0 \\
        0 & 0 & 1 & 0 & 1 & 1 & 0
        \end{pmatrix}$ (This is the $G$ of the Hamming code if it was standard form, but it's actually $H$ here)
        Let's use the shifted structure for $H$:
        $h(x) = 1 \cdot x^3 + 0 \cdot x^2 + 1 \cdot x + 1 \cdot x^0$.
        $H = \begin{pmatrix}
        1 & 0 & 1 & 1 & 0 & 0 & 0 \\
        0 & 1 & 0 & 1 & 1 & 0 & 0 \\
        0 & 0 & 1 & 0 & 1 & 1 & 0
        \end{pmatrix}$
        This is the standard systematic form of the parity check matrix.

*   If $g(x) = x^3+x+1$, then $h(x) = (x+1)(x^3+x^2+1) = x^4+x^3+x+1$.
    *   $g(x)$ has roots $\alpha, \alpha^2, \alpha^4$. This implies it can correct $t=1$ error.
    *   Generator polynomial $g(x) = x^3+x+1$. Degree 3, so $n-k=3$.
    *   Generator Matrix $G$ ($4 \times 7$):
        $G = \begin{pmatrix}
        1 & 0 & 1 & 1 & 0 & 0 & 0 \\
        0 & 1 & 0 & 1 & 1 & 0 & 0 \\
        0 & 0 & 1 & 0 & 1 & 1 & 0 \\
        0 & 0 & 0 & 1 & 0 & 1 & 1
        \end{pmatrix}$

**Crucial Point:** The definition of a BCH code is based on the roots of its **generator polynomial**. The generator polynomial $g(x)$ is chosen to have roots $\alpha^1, \alpha^2, \ldots, \alpha^{2t}$.

This implies that the minimal polynomials of these elements must divide $g(x)$.
$g(x) = \text{lcm}(m_1(x), m_2(x), \ldots, m_{2t}(x))$.

**Reference:** Lin & Costello's textbook (Chapter 5) is the authoritative source for the detailed construction and properties of BCH codes, including their generator polynomials and parity-check matrices.

---

## 4. Encoding BCH Codes

Encoding is similar to other cyclic codes. Given a message polynomial $m(x)$ of degree $k-1$, the codeword polynomial $c(x)$ is formed by $c(x) = m(x)g(x) \pmod{x^n-1}$.

This can be implemented using a polynomial shift-register circuit.

---

## 5. Decoding BCH Codes (Conceptual Overview)

Decoding BCH codes is significantly more complex than simple codes like Hamming codes. It typically involves two main steps:

1.  **Syndrome Calculation:** Compute the syndromes $s_i = r(\alpha^i)$ for $i = 1, 2, \ldots, 2t$, where $r(x)$ is the received polynomial.
2.  **Error Location and Correction:** Use the syndromes to find the error locations (error positions) and error magnitudes. This is the challenging part and involves solving a system of non-linear equations. Algorithms like the **Berlekamp-Massey algorithm** or the **Euclidean algorithm** are used for this purpose.

**For this module's scope, understanding that the number of roots ($2t$) determines the decoding complexity and the number of errors that can be corrected is sufficient.**

---

## 6. Types of BCH Codes

*   **Primitive BCH Codes:** Length $n=2^m-1$.
*   **Non-primitive BCH Codes:** Length $n$ is a divisor of $2^m-1$. These are constructed by using a subfield of $GF(2^m)$.
*   **Extended BCH Codes:** By adding an overall parity bit, the error-correction capability can be slightly improved or the error detection capability enhanced.

---

## Practice Questions and Answers

**Q1. What is the fundamental property that distinguishes BCH codes from other cyclic codes?**

**Answer:** BCH codes are characterized by the fact that their generator polynomial has a specific set of roots in a finite field, namely $\alpha^1, \alpha^2, \ldots, \alpha^{2t}$, which guarantees the correction of at least $t$ errors.

**Q2. For a BCH code of length $n = 2^m - 1$, what is the minimum number of consecutive powers of a primitive element $\alpha$ that must be roots of the generator polynomial $g(x)$ to guarantee the correction of $t$ errors?**

**Answer:** $2t$ consecutive powers, i.e., $\alpha^1, \alpha^2, \ldots, \alpha^{2t}$.

**Q3. If a BCH code has a generator polynomial $g(x)$ of degree $d_g$, what is the minimum distance $d$ of the code guaranteed by the BCH bound?**

**Answer:** The BCH bound states that if $g(x)$ has roots $\alpha^1, \alpha^2, \ldots, \alpha^{2t}$, then the minimum distance $d \ge 2t+1$.

**Q4. Construct the generator polynomial for a primitive BCH code of length $n=7$ ($m=3$) that can correct $t=1$ error.**

**Answer:**
*   We need roots $\alpha^1, \alpha^2$.
*   From the example, for $m=3$:
    *   $m_1(x) = x^3 + x + 1$ (minimal polynomial of $\alpha$)
    *   $m_2(x) = x^3 + x^2 + 1$ (minimal polynomial of $\alpha^2$)
*   $g(x) = \text{lcm}(m_1(x), m_2(x)) = m_1(x) \cdot m_2(x)$ since they are distinct irreducible polynomials.
*   $g(x) = (x^3+x+1)(x^3+x^2+1) = x^6 + x^5 + x^4 + x + 1$.
*   This gives a code of length 7 and dimension $k = 7-6 = 1$. So it's a $(7,1)$ BCH code.

**Q5. Consider the $(7,4)$ Hamming code, which is a BCH code. What is its generator polynomial and how many errors can it correct?**

**Answer:**
*   Generator polynomial $g(x) = x^3 + x + 1$.
*   The roots of $g(x)$ are $\alpha^1, \alpha^2, \alpha^4$. This corresponds to $2t=2$ consecutive powers (actually 3 powers, but $\alpha^4$ is related to $\alpha^2$).
*   The number of consecutive powers of roots that guarantees correction is $2t$. If we consider $\alpha^1, \alpha^2$, then $2t=2$, so $t=1$.
*   Therefore, the $(7,4)$ Hamming code can correct $t=1$ error.

---

## Important Points to Remember

*   **BCH codes are cyclic codes.**
*   **Construction is based on finite field properties (Galois Fields $GF(2^m)$).**
*   **Generator polynomial $g(x)$ is the LCM of minimal polynomials of $\alpha^1, \ldots, \alpha^{2t}$.**
*   **The presence of $\alpha^1, \ldots, \alpha^{2t}$ as roots of $g(x)$ guarantees correction of at least $t$ errors.**
*   **The BCH bound states $d \ge 2t+1$.**
*   **Decoding is complex, often using Berlekamp-Massey or Euclidean algorithms.**
*   **Primitive BCH codes have length $n = 2^m-1$.**
*   **The $(7,4)$ Hamming code is a $(7,4)$ BCH code that corrects $t=1$ error.**

---

This concludes the notes on BCH codes for Module 3. Further exploration into the decoding algorithms is recommended for a complete understanding of their practical implementation.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
