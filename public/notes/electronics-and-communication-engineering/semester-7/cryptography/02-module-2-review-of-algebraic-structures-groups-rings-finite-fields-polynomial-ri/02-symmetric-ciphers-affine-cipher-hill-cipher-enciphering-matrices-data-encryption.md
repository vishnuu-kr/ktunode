---
title: "Symmetric Ciphers:  Affine cipher, Hill cipher, Enciphering matrices. Data Encryption standard (DES), Advanced Encryption standard (AES)."
subject: "CRYPTOGRAPHY"
module: "Module 2: Review of algebraic structures: groups, rings, finite fields, polynomial rings over finite field."
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff2b4"
status: "completed"
scrapedAt: "2026-05-23T18:05:35.418Z"
---
## Cryptography: Module 2 - Review of Algebraic Structures & Symmetric Ciphers

This module provides a foundational understanding of the algebraic structures essential for modern cryptography and delves into several key symmetric ciphers.

**Course Outcomes Addressed:** CO1, CO2, CO4

**Knowledge Level Targeted:** K3 (Apply)

---

### 1. Review of Algebraic Structures

This section revisits essential mathematical structures that underpin many cryptographic algorithms.

#### 1.1 Groups

**Definition:** A group $(G, *)$ is a set $G$ equipped with a binary operation $*$ that satisfies the following axioms:
1.  **Closure:** For all $a, b \in G$, $a * b \in G$.
2.  **Associativity:** For all $a, b, c \in G$, $(a * b) * c = a * (b * c)$.
3.  **Identity Element:** There exists an element $e \in G$ such that for all $a \in G$, $a * e = e * a = a$.
4.  **Inverse Element:** For every $a \in G$, there exists an element $a^{-1} \in G$ such that $a * a^{-1} = a^{-1} * a = e$.

**Abelian Group:** A group $(G, *)$ is called abelian (or commutative) if for all $a, b \in G$, $a * b = b * a$.

**Key Examples:**
*   **Integers modulo n under addition:** $(\mathbb{Z}_n, +)$ is an abelian group. The identity element is 0, and the inverse of $a$ is $n-a$ (or $-a \pmod n$).
*   **Non-zero integers modulo p under multiplication (where p is prime):** $(\mathbb{Z}_p^*, \times)$ is an abelian group. The identity element is 1. The inverse of $a$ is $a^{-1} \pmod p$ which exists for all $a \not\equiv 0 \pmod p$.

**Important Point:** The existence of inverses is crucial in cryptography for decryption.

**Reference:** Koblitz, Chapter 1.

#### 1.2 Rings

**Definition:** A ring $(R, +, \times)$ is a set $R$ equipped with two binary operations, addition ($+$) and multiplication ($\times$), such that:
1.  $(R, +)$ is an abelian group.
2.  $(R, \times)$ is closed and associative.
3.  **Distributivity:** For all $a, b, c \in R$, $a \times (b + c) = (a \times b) + (a \times c)$ and $(a + b) \times c = (a \times c) + (b \times c)$.

**Commutative Ring:** A ring $(R, +, \times)$ is commutative if for all $a, b \in R$, $a \times b = b \times a$.

**Ring with Unity (or Identity):** A ring $(R, +, \times)$ is a ring with unity if there exists an element $1 \in R$ such that for all $a \in R$, $a \times 1 = 1 \times a = a$.

**Key Examples:**
*   **Integers $(\mathbb{Z}, +, \times)$:** A commutative ring with unity.
*   **Integers modulo n $(\mathbb{Z}_n, +, \times)$:** A commutative ring with unity.

**Reference:** Koblitz, Chapter 2.

#### 1.3 Fields

**Definition:** A field $(F, +, \times)$ is a commutative ring with unity $(F, +, \times)$ such that for every non-zero element $a \in F$, there exists a multiplicative inverse $a^{-1} \in F$ (i.e., $a \times a^{-1} = 1$).

**Key Property:** In a field, division by non-zero elements is always possible.

**Key Examples:**
*   **Rational numbers $(\mathbb{Q}, +, \times)$, Real numbers $(\mathbb{R}, +, \times)$, Complex numbers $(\mathbb{C}, +, \times)$:** These are infinite fields.
*   **Integers modulo p $(\mathbb{Z}_p, +, \times)$ where p is a prime number:** This is a **finite field**, denoted as $GF(p)$ or $\mathbb{F}_p$.

**Important Point:** Finite fields are fundamental for modern cryptography as they allow for operations over a finite set of elements, making computations manageable.

**Reference:** Koblitz, Chapter 2.

#### 1.4 Finite Fields $GF(p^m)$

**Definition:** A finite field $GF(p^m)$ (also denoted $\mathbb{F}_{p^m}$) is a field containing $p^m$ elements, where $p$ is a prime number and $m$ is a positive integer.
*   If $m=1$, then $GF(p^1) = GF(p) = \mathbb{F}_p$.
*   If $m > 1$, the elements of $GF(p^m)$ are typically constructed using polynomial arithmetic over $GF(p)$.

**Construction of $GF(p^m)$ for $m > 1$:**
1.  Choose an irreducible polynomial $f(x)$ of degree $m$ over $GF(p)$.
2.  The elements of $GF(p^m)$ can be represented as polynomials of degree less than $m$ with coefficients from $GF(p)$.
3.  Arithmetic operations (addition and multiplication) are performed modulo $f(x)$.

**Example: $GF(2^2)$**
1.  Let $p=2$, $m=2$. Consider the irreducible polynomial $f(x) = x^2 + x + 1$ over $GF(2)$.
2.  The elements of $GF(2^2)$ are polynomials of degree less than 2:
    *   $0$
    *   $1$
    *   $x$
    *   $x+1$
3.  Addition is modulo 2 (XOR). Multiplication is modulo $x^2 + x + 1$.
    *   $x \times x = x^2 \equiv -(x+1) \pmod{x^2+x+1}$. Since we are in $GF(2)$, $-1 \equiv 1 \pmod 2$. So, $x^2 \equiv x+1 \pmod{x^2+x+1}$.

**Important Point:** The existence and construction of finite fields are crucial for algorithms that operate on bytes or blocks of data. AES, for instance, heavily relies on arithmetic in $GF(2^8)$.

**Reference:** Koblitz, Chapter 2; Stinson, Chapter 5.

#### 1.5 Polynomial Rings over Finite Fields

**Definition:** A polynomial ring $F[x]$ over a field $F$ is the set of all polynomials with coefficients in $F$, with polynomial addition and multiplication as the operations.

**Example: $GF(p)[x]$**
The ring of polynomials with coefficients in $GF(p)$.

**Quotient Rings and Irreducible Polynomials:**
We can form quotient rings $F[x] / \langle f(x) \rangle$, where $f(x)$ is a polynomial in $F[x]$. If $f(x)$ is irreducible (cannot be factored into lower-degree polynomials over $F$), then the quotient ring $F[x] / \langle f(x) \rangle$ forms a field, which is precisely $GF(p^m)$ if $\text{deg}(f) = m$.

**Important Point:** Irreducible polynomials are the building blocks for constructing finite fields of characteristic $p^m$.

**Reference:** Koblitz, Chapter 2; Stinson, Chapter 5.

---

### 2. Symmetric Ciphers

Symmetric ciphers use the same key for both encryption and decryption.

#### 2.1 Affine Cipher

**Description:** A simple substitution cipher where each letter in the plaintext is mapped to its numeric equivalent, encrypted using a simple linear function, and then converted back to a letter.

**Mathematical Foundation:** Operates over the group $(\mathbb{Z}_{26}, +)$.

**Encryption Function:** $E(x) = (ax + b) \pmod{26}$, where:
*   $x$ is the numerical representation of the plaintext letter.
*   $a$ and $b$ are the keys.
*   $a$ must be chosen such that $\gcd(a, 26) = 1$. This ensures that the encryption function is a permutation of $\mathbb{Z}_{26}$ and that a unique decryption key exists. The possible values for $a$ are $\{1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25\}$.
*   $b$ can be any integer from 0 to 25.

**Decryption Function:** $D(y) = a^{-1}(y - b) \pmod{26}$, where:
*   $y$ is the numerical representation of the ciphertext letter.
*   $a^{-1}$ is the multiplicative inverse of $a$ modulo 26.

**Example:**
Let $a = 5$, $b = 8$. $\gcd(5, 26) = 1$.
To find $a^{-1}$: We need $5x \equiv 1 \pmod{26}$. By trying values, $5 \times 21 = 105 = 4 \times 26 + 1$. So, $a^{-1} = 21$.

Plaintext: "HELLO"
Numerical representation: H=7, E=4, L=11, L=11, O=14

Encryption:
*   $E(7) = (5 \times 7 + 8) \pmod{26} = (35 + 8) \pmod{26} = 43 \pmod{26} = 17$ (R)
*   $E(4) = (5 \times 4 + 8) \pmod{26} = (20 + 8) \pmod{26} = 28 \pmod{26} = 2$ (C)
*   $E(11) = (5 \times 11 + 8) \pmod{26} = (55 + 8) \pmod{26} = 63 \pmod{26} = 11$ (L)
*   $E(11) = (5 \times 11 + 8) \pmod{26} = (55 + 8) \pmod{26} = 63 \pmod{26} = 11$ (L)
*   $E(14) = (5 \times 14 + 8) \pmod{26} = (70 + 8) \pmod{26} = 78 \pmod{26} = 0$ (A)

Ciphertext: "RCLLA"

Decryption:
*   $D(17) = 21(17 - 8) \pmod{26} = 21(9) \pmod{26} = 189 \pmod{26}$. $189 = 7 \times 26 + 7$. So, $D(17) = 7$ (H)
*   $D(2) = 21(2 - 8) \pmod{26} = 21(-6) \pmod{26} = -126 \pmod{26}$. $-126 = -5 \times 26 + 4$. So, $D(2) = 4$ (E)
*   $D(11) = 21(11 - 8) \pmod{26} = 21(3) \pmod{26} = 63 \pmod{26} = 11$ (L)
*   $D(11) = 21(11 - 8) \pmod{26} = 21(3) \pmod{26} = 63 \pmod{26} = 11$ (L)
*   $D(0) = 21(0 - 8) \pmod{26} = 21(-8) \pmod{26} = -168 \pmod{26}$. $-168 = -7 \times 26 + 14$. So, $D(0) = 14$ (O)

Decrypted Plaintext: "HELLO"

**Cryptanalysis (CO4):**
*   **Key Space:** The number of possible pairs $(a, b)$ where $\gcd(a, 26) = 1$. There are 12 possible values for $a$ and 26 for $b$. Total key space = $12 \times 26 = 312$. This is relatively small.
*   **Frequency Analysis:** Due to its simple linear nature, the Affine cipher is vulnerable to frequency analysis, similar to the Caesar cipher.

**Important Point:** The condition $\gcd(a, 26) = 1$ is critical for invertibility and thus for decryption.

**Reference:** Koblitz, Chapter 1; Stinson, Chapter 2.

#### 2.2 Hill Cipher

**Description:** A polygraphic substitution cipher that extends the Affine cipher by encrypting multiple letters (blocks) at a time using matrix multiplication.

**Mathematical Foundation:** Operates over the group $(\mathbb{Z}_{26}^n, +)$ using matrices from $GL_n(\mathbb{Z}_{26})$.

**Encryption Function:** $E(\mathbf{x}) = K\mathbf{x} \pmod{26}$, where:
*   $\mathbf{x}$ is a column vector representing a block of $n$ plaintext letters (converted to their numerical equivalents).
*   $K$ is an $n \times n$ encryption matrix (the key).
*   For $K$ to be a valid key, it must be invertible modulo 26, meaning $\det(K) \not\equiv 0 \pmod{26}$ and $\gcd(\det(K), 26) = 1$.

**Decryption Function:** $D(\mathbf{y}) = K^{-1}\mathbf{y} \pmod{26}$, where:
*   $\mathbf{y}$ is a column vector representing a block of $n$ ciphertext letters.
*   $K^{-1}$ is the inverse of matrix $K$ modulo 26.

**Example (n=2):**
Let the key matrix be $K = \begin{pmatrix} 3 & 3 \\ 2 & 5 \end{pmatrix}$.
We need to check if $K$ is invertible modulo 26:
$\det(K) = (3 \times 5) - (3 \times 2) = 15 - 6 = 9$.
$\gcd(9, 26) = 1$. So, $K$ is invertible.

To find $K^{-1}$:
1.  Adjugate matrix: $\text{adj}(K) = \begin{pmatrix} 5 & -3 \\ -2 & 3 \end{pmatrix}$.
2.  Multiplicative inverse of determinant: $9^{-1} \pmod{26}$. We need $9x \equiv 1 \pmod{26}$. By trying values, $9 \times 3 = 27 \equiv 1 \pmod{26}$. So, $9^{-1} = 3$.
3.  $K^{-1} \equiv 3 \times \begin{pmatrix} 5 & -3 \\ -2 & 3 \end{pmatrix} \pmod{26}$
    $K^{-1} \equiv \begin{pmatrix} 15 & -9 \\ -6 & 9 \end{pmatrix} \pmod{26}$
    $K^{-1} \equiv \begin{pmatrix} 15 & 17 \\ 20 & 9 \end{pmatrix} \pmod{26}$

Plaintext: "HELP"
Numerical representation: H=7, E=4, L=11, P=15
Blocks: $\mathbf{x}_1 = \begin{pmatrix} 7 \\ 4 \end{pmatrix}$, $\mathbf{x}_2 = \begin{pmatrix} 11 \\ 15 \end{pmatrix}$

Encryption:
*   $K\mathbf{x}_1 = \begin{pmatrix} 3 & 3 \\ 2 & 5 \end{pmatrix} \begin{pmatrix} 7 \\ 4 \end{pmatrix} \pmod{26} = \begin{pmatrix} 3 \times 7 + 3 \times 4 \\ 2 \times 7 + 5 \times 4 \end{pmatrix} \pmod{26} = \begin{pmatrix} 21 + 12 \\ 14 + 20 \end{pmatrix} \pmod{26} = \begin{pmatrix} 33 \\ 34 \end{pmatrix} \pmod{26} = \begin{pmatrix} 7 \\ 8 \end{pmatrix}$ (HH)
*   $K\mathbf{x}_2 = \begin{pmatrix} 3 & 3 \\ 2 & 5 \end{pmatrix} \begin{pmatrix} 11 \\ 15 \end{pmatrix} \pmod{26} = \begin{pmatrix} 3 \times 11 + 3 \times 15 \\ 2 \times 11 + 5 \times 15 \end{pmatrix} \pmod{26} = \begin{pmatrix} 33 + 45 \\ 22 + 75 \end{pmatrix} \pmod{26} = \begin{pmatrix} 78 \\ 97 \end{pmatrix} \pmod{26} = \begin{pmatrix} 24 \\ 19 \end{pmatrix}$ (YZ)

Ciphertext: "HHYZ"

Decryption:
*   $K^{-1}\begin{pmatrix} 7 \\ 8 \end{pmatrix} = \begin{pmatrix} 15 & 17 \\ 20 & 9 \end{pmatrix} \begin{pmatrix} 7 \\ 8 \end{pmatrix} \pmod{26} = \begin{pmatrix} 15 \times 7 + 17 \times 8 \\ 20 \times 7 + 9 \times 8 \end{pmatrix} \pmod{26} = \begin{pmatrix} 105 + 136 \\ 140 + 72 \end{pmatrix} \pmod{26} = \begin{pmatrix} 241 \\ 212 \end{pmatrix} \pmod{26}$. $241 = 9 \times 26 + 7$, $212 = 8 \times 26 + 4$. So, $\begin{pmatrix} 7 \\ 4 \end{pmatrix}$ (HE)
*   $K^{-1}\begin{pmatrix} 24 \\ 19 \end{pmatrix} = \begin{pmatrix} 15 & 17 \\ 20 & 9 \end{pmatrix} \begin{pmatrix} 24 \\ 19 \end{pmatrix} \pmod{26} = \begin{pmatrix} 15 \times 24 + 17 \times 19 \\ 20 \times 24 + 9 \times 19 \end{pmatrix} \pmod{26} = \begin{pmatrix} 360 + 323 \\ 480 + 171 \end{pmatrix} \pmod{26} = \begin{pmatrix} 683 \\ 651 \end{pmatrix} \pmod{26}$. $683 = 26 \times 26 + 7$, $651 = 25 \times 26 + 1$. So, $\begin{pmatrix} 7 \\ 1 \end{pmatrix}$ (HK). **Correction:** $25 \times 26 = 650$, so $651 \pmod{26} = 1$. This should be P=15. Let's recheck calculations.

Rechecking inverse calculation:
$K^{-1} \equiv \begin{pmatrix} 15 & 17 \\ 20 & 9 \end{pmatrix} \pmod{26}$
$K^{-1}\mathbf{x}_2 = \begin{pmatrix} 15 & 17 \\ 20 & 9 \end{pmatrix} \begin{pmatrix} 11 \\ 15 \end{pmatrix} \pmod{26} = \begin{pmatrix} 15 \times 11 + 17 \times 15 \\ 20 \times 11 + 9 \times 15 \end{pmatrix} \pmod{26} = \begin{pmatrix} 165 + 255 \\ 220 + 135 \end{pmatrix} \pmod{26} = \begin{pmatrix} 420 \\ 355 \end{pmatrix} \pmod{26}$.
$420 = 16 \times 26 + 4$, so $420 \pmod{26} = 4$.
$355 = 13 \times 26 + 17$, so $355 \pmod{26} = 17$.
This is $\begin{pmatrix} 4 \\ 17 \end{pmatrix}$ (ER). This is also incorrect.

Let's re-evaluate the example with a simpler key or known correct example.
**Corrected Example:**
Key matrix $K = \begin{pmatrix} 4 & 3 \\ 7 & 5 \end{pmatrix}$.
$\det(K) = (4 \times 5) - (3 \times 7) = 20 - 21 = -1$.
$\gcd(-1, 26) = 1$. Invertible.
$(-1)^{-1} \pmod{26} = -1 \equiv 25 \pmod{26}$.
$\text{adj}(K) = \begin{pmatrix} 5 & -3 \\ -7 & 4 \end{pmatrix}$.
$K^{-1} \equiv 25 \times \begin{pmatrix} 5 & -3 \\ -7 & 4 \end{pmatrix} \pmod{26}$
$K^{-1} \equiv \begin{pmatrix} 125 & -75 \\ -175 & 100 \end{pmatrix} \pmod{26}$
$125 = 4 \times 26 + 21 \equiv 21 \pmod{26}$
$-75 = -3 \times 26 + 3 \equiv 3 \pmod{26}$
$-175 = -7 \times 26 + 7 \equiv 7 \pmod{26}$
$100 = 3 \times 26 + 22 \equiv 22 \pmod{26}$
$K^{-1} \equiv \begin{pmatrix} 21 & 3 \\ 7 & 22 \end{pmatrix} \pmod{26}$

Plaintext: "ATTACK"
Blocks: $\begin{pmatrix} 0 \\ 19 \end{pmatrix}$, $\begin{pmatrix} 0 \\ 10 \end{pmatrix}$, $\begin{pmatrix} 10 \\ 2 \end{pmatrix}$

Encryption:
*   $K\begin{pmatrix} 0 \\ 19 \end{pmatrix} = \begin{pmatrix} 4 & 3 \\ 7 & 5 \end{pmatrix} \begin{pmatrix} 0 \\ 19 \end{pmatrix} \pmod{26} = \begin{pmatrix} 57 \\ 95 \end{pmatrix} \pmod{26} = \begin{pmatrix} 5 \\ 17 \end{pmatrix}$ (FH)
*   $K\begin{pmatrix} 0 \\ 10 \end{pmatrix} = \begin{pmatrix} 4 & 3 \\ 7 & 5 \end{pmatrix} \begin{pmatrix} 0 \\ 10 \end{pmatrix} \pmod{26} = \begin{pmatrix} 30 \\ 50 \end{pmatrix} \pmod{26} = \begin{pmatrix} 4 \\ 24 \end{pmatrix}$ (EY)
*   $K\begin{pmatrix} 10 \\ 2 \end{pmatrix} = \begin{pmatrix} 4 & 3 \\ 7 & 5 \end{pmatrix} \begin{pmatrix} 10 \\ 2 \end{pmatrix} \pmod{26} = \begin{pmatrix} 46 \\ 70 \end{pmatrix} \pmod{26} = \begin{pmatrix} 20 \\ 18 \end{pmatrix}$ (US)

Ciphertext: "FHE YUS"

Decryption:
*   $K^{-1}\begin{pmatrix} 5 \\ 17 \end{pmatrix} = \begin{pmatrix} 21 & 3 \\ 7 & 22 \end{pmatrix} \begin{pmatrix} 5 \\ 17 \end{pmatrix} \pmod{26} = \begin{pmatrix} 105 + 51 \\ 35 + 374 \end{pmatrix} \pmod{26} = \begin{pmatrix} 156 \\ 409 \end{pmatrix} \pmod{26}$. $156 = 6 \times 26 + 0 \equiv 0 \pmod{26}$. $409 = 15 \times 26 + 19 \equiv 19 \pmod{26}$. So, $\begin{pmatrix} 0 \\ 19 \end{pmatrix}$ (AT)
*   $K^{-1}\begin{pmatrix} 4 \\ 24 \end{pmatrix} = \begin{pmatrix} 21 & 3 \\ 7 & 22 \end{pmatrix} \begin{pmatrix} 4 \\ 24 \end{pmatrix} \pmod{26} = \begin{pmatrix} 84 + 72 \\ 28 + 528 \end{pmatrix} \pmod{26} = \begin{pmatrix} 156 \\ 556 \end{pmatrix} \pmod{26}$. $156 \equiv 0 \pmod{26}$. $556 = 21 \times 26 + 10 \equiv 10 \pmod{26}$. So, $\begin{pmatrix} 0 \\ 10 \end{pmatrix}$ (AK)
*   $K^{-1}\begin{pmatrix} 20 \\ 18 \end{pmatrix} = \begin{pmatrix} 21 & 3 \\ 7 & 22 \end{pmatrix} \begin{pmatrix} 20 \\ 18 \end{pmatrix} \pmod{26} = \begin{pmatrix} 420 + 54 \\ 140 + 396 \end{pmatrix} \pmod{26} = \begin{pmatrix} 474 \\ 536 \end{pmatrix} \pmod{26}$. $474 = 18 \times 26 + 6 \equiv 6 \pmod{26}$. $536 = 20 \times 26 + 16 \equiv 16 \pmod{26}$. So, $\begin{pmatrix} 6 \\ 16 \end{pmatrix}$ (GM). **Correction:** This should be CK. Let's recheck the original plaintext. ATTACK -> A=0, T=19, T=19, A=0, C=2, K=10.

Let's re-encrypt ATTACK using the corrected example.
Plaintext: "ATTACK"
Blocks: $\begin{pmatrix} 0 \\ 19 \end{pmatrix}$, $\begin{pmatrix} 19 \\ 19 \end{pmatrix}$, $\begin{pmatrix} 0 \\ 2 \end{pmatrix}$, $\begin{pmatrix} 10 \end{pmatrix}$ - Need to pad to make blocks of 2. Let's use "ATTACKXX"
Blocks: $\begin{pmatrix} 0 \\ 19 \end{pmatrix}$, $\begin{pmatrix} 19 \\ 19 \end{pmatrix}$, $\begin{pmatrix} 0 \\ 2 \end{pmatrix}$, $\begin{pmatrix} 10 \\ 23 \end{pmatrix}$ (X=23)

Encryption:
*   $K\begin{pmatrix} 0 \\ 19 \end{pmatrix} = \begin{pmatrix} 57 \\ 95 \end{pmatrix} \pmod{26} = \begin{pmatrix} 5 \\ 17 \end{pmatrix}$ (FH)
*   $K\begin{pmatrix} 19 \\ 19 \end{pmatrix} = \begin{pmatrix} 4 & 3 \\ 7 & 5 \end{pmatrix} \begin{pmatrix} 19 \\ 19 \end{pmatrix} \pmod{26} = \begin{pmatrix} 76 + 57 \\ 133 + 95 \end{pmatrix} \pmod{26} = \begin{pmatrix} 133 \\ 228 \end{pmatrix} \pmod{26} = \begin{pmatrix} 3 \\ 20 \end{pmatrix}$ (DV)
*   $K\begin{pmatrix} 0 \\ 2 \end{pmatrix} = \begin{pmatrix} 4 & 3 \\ 7 & 5 \end{pmatrix} \begin{pmatrix} 0 \\ 2 \end{pmatrix} \pmod{26} = \begin{pmatrix} 6 \\ 10 \end{pmatrix}$ (GK)
*   $K\begin{pmatrix} 10 \\ 23 \end{pmatrix} = \begin{pmatrix} 4 & 3 \\ 7 & 5 \end{pmatrix} \begin{pmatrix} 10 \\ 23 \end{pmatrix} \pmod{26} = \begin{pmatrix} 40 + 69 \\ 70 + 115 \end{pmatrix} \pmod{26} = \begin{pmatrix} 109 \\ 185 \end{pmatrix} \pmod{26} = \begin{pmatrix} 5 \\ 3 \end{pmatrix}$ (FD)

Ciphertext: "FH DV GK FD"

Decryption:
*   $K^{-1}\begin{pmatrix} 5 \\ 17 \end{pmatrix} = \begin{pmatrix} 21 & 3 \\ 7 & 22 \end{pmatrix} \begin{pmatrix} 5 \\ 17 \end{pmatrix} \pmod{26} = \begin{pmatrix} 156 \\ 409 \end{pmatrix} \pmod{26} = \begin{pmatrix} 0 \\ 19 \end{pmatrix}$ (AT)
*   $K^{-1}\begin{pmatrix} 3 \\ 20 \end{pmatrix} = \begin{pmatrix} 21 & 3 \\ 7 & 22 \end{pmatrix} \begin{pmatrix} 3 \\ 20 \end{pmatrix} \pmod{26} = \begin{pmatrix} 63 + 60 \\ 21 + 440 \end{pmatrix} \pmod{26} = \begin{pmatrix} 123 \\ 461 \end{pmatrix} \pmod{26}$. $123 = 4 \times 26 + 19 \equiv 19 \pmod{26}$. $461 = 17 \times 26 + 19 \equiv 19 \pmod{26}$. So, $\begin{pmatrix} 19 \\ 19 \end{pmatrix}$ (TT)
*   $K^{-1}\begin{pmatrix} 6 \\ 10 \end{pmatrix} = \begin{pmatrix} 21 & 3 \\ 7 & 22 \end{pmatrix} \begin{pmatrix} 6 \\ 10 \end{pmatrix} \pmod{26} = \begin{pmatrix} 126 + 30 \\ 42 + 220 \end{pmatrix} \pmod{26} = \begin{pmatrix} 156 \\ 262 \end{pmatrix} \pmod{26}$. $156 \equiv 0 \pmod{26}$. $262 = 10 \times 26 + 2 \equiv 2 \pmod{26}$. So, $\begin{pmatrix} 0 \\ 2 \end{pmatrix}$ (AC)
*   $K^{-1}\begin{pmatrix} 5 \\ 3 \end{pmatrix} = \begin{pmatrix} 21 & 3 \\ 7 & 22 \end{pmatrix} \begin{pmatrix} 5 \\ 3 \end{pmatrix} \pmod{26} = \begin{pmatrix} 105 + 9 \\ 35 + 66 \end{pmatrix} \pmod{26} = \begin{pmatrix} 114 \\ 101 \end{pmatrix} \pmod{26}$. $114 = 4 \times 26 + 10 \equiv 10 \pmod{26}$. $101 = 3 \times 26 + 23 \equiv 23 \pmod{26}$. So, $\begin{pmatrix} 10 \\ 23 \end{pmatrix}$ (KX)

Decrypted Plaintext: "ATTACKXX" (Correct!)

**Cryptanalysis (CO4):**
*   **Key Space:** For an $n \times n$ matrix, the key space is the number of invertible matrices in $GL_n(\mathbb{Z}_{26})$. This grows rapidly with $n$.
*   **Vulnerability:**
    *   **Known Plaintext Attack:** If an attacker knows $n$ plaintext-ciphertext pairs, they can set up $n$ linear equations and solve for the key matrix $K$. For $n=2$, knowing two pairs is enough. For $n=3$, knowing three pairs is enough.
    *   **Frequency Analysis:** While more complex than monoalphabetic ciphers, frequency analysis can still be applied to pairs of letters (digraphs) for $n=2$, or larger blocks for higher $n$.

**Important Point:** The size of the block ($n$) is critical. Larger $n$ increases the key space and resistance to frequency analysis but makes manual computation harder. The invertibility of the key matrix is paramount.

**Reference:** Koblitz, Chapter 1; Stinson, Chapter 2.

#### 2.3 Data Encryption Standard (DES)

**Description:** A symmetric block cipher that encrypts 64-bit blocks of data using a 56-bit key. It was a widely used standard for many years.

**Key Features:**
*   **Block Size:** 64 bits.
*   **Key Size:** 56 bits effective key (derived from a 64-bit key, where 8 bits are parity bits).
*   **Structure:** Feistel cipher.
*   **Rounds:** 16 rounds of encryption.

**Feistel Structure:**
A Feistel cipher splits the data block into two halves, $L_i$ and $R_i$. In each round $i$:
*   $L_{i+1} = R_i$
*   $R_{i+1} = L_i \oplus F(R_i, K_i)$
where $F$ is a round function and $K_i$ is the subkey for round $i$. The decryption is similar but uses subkeys in reverse order.

**DES Components:**
1.  **Initial Permutation (IP):** Permutes the 64-bit block.
2.  **Expansion Permutation (E):** Expands the 32-bit right half to 48 bits.
3.  **S-boxes (Substitution Boxes):** The core of the non-linearity. Each 6-bit input is mapped to a 4-bit output. There are 8 S-boxes.
4.  **Permutation P:** Permutes the 32-bit output of the S-boxes.
5.  **XOR with Subkey:** The output of $P$ is XORed with the round subkey ($K_i$).
6.  **Final Permutation (FP):** Inverse of the initial permutation.

**Key Schedule:**
Generates 16 subkeys ($K_i$), each 48 bits long, from the 56-bit key. This involves:
*   **Permuted Choice 1 (PC-1):** Selects 56 bits from the 64-bit key.
*   **Splitting:** The 56 bits are split into two 28-bit halves (C and D).
*   **Circular Left Shifts:** C and D are independently shifted left by 1 or 2 bits depending on the round.
*   **Permuted Choice 2 (PC-2):** Selects 48 bits from the shifted C and D halves to form the round subkey.

**Cryptanalysis (CO4):**
*   **Brute-Force Attack:** With a 56-bit key, the key space is $2^{56}$, which is feasible for modern computers, especially with specialized hardware.
*   **Differential Cryptanalysis:** Exploits how differences in plaintext propagate through the cipher. DES was designed to be resistant to this.
*   **Linear Cryptanalysis:** Exploits linear approximations of the cipher's operations. Requires a large number of known plaintexts.

**Important Point:** DES is now considered insecure due to its relatively small key size, making it vulnerable to brute-force attacks. It has been replaced by AES.

**Reference:** Stinson, Chapter 3; Menezes et al., Chapter 7.

#### 2.4 Advanced Encryption Standard (AES)

**Description:** The current standard symmetric encryption algorithm, adopted by the U.S. government to replace DES. It's a block cipher that operates on 128-bit blocks of data.

**Key Features:**
*   **Block Size:** 128 bits.
*   **Key Sizes:** 128, 192, or 256 bits.
*   **Structure:** Substitution-Permutation Network (SPN), not a Feistel cipher.
*   **Rounds:** The number of rounds depends on the key size:
    *   128-bit key: 10 rounds
    *   192-bit key: 12 rounds
    *   256-bit key: 14 rounds

**AES Architecture:**
AES operates on a $4 \times 4$ matrix of bytes called the **State**. The operations are performed on this State.

**AES Round Operations:**
Each round (except the last) consists of four transformations:
1.  **SubBytes:** A non-linear substitution step where each byte in the State is replaced by another byte using a pre-defined lookup table called the **S-box**. This S-box is derived from the multiplicative inverse in $GF(2^8)$ and a fixed affine transformation. This is the primary source of confusion.
2.  **ShiftRows:** A transposition step where the rows of the State are cyclically shifted by different offsets. This provides diffusion.
3.  **MixColumns:** A linear mixing operation that transforms each column of the State by multiplying the column vector with a fixed polynomial matrix over $GF(2^8)$. This also provides diffusion.
4.  **AddRoundKey:** The State is XORed with a Round Key (derived from the main key). This is the only operation that depends directly on the key.

**Final Round:** Consists of SubBytes, ShiftRows, and AddRoundKey. The MixColumns step is omitted.

**Key Expansion (Key Schedule):**
The original key is expanded into a set of Round Keys, one for each round. This process involves complex operations like cyclic shifts, substitutions using the AES S-box, and XORing with a round constant.

**Mathematical Basis:**
AES is heavily based on arithmetic in the finite field $GF(2^8)$.
*   **SubBytes:** Uses the inverse function in $GF(2^8)$.
*   **MixColumns:** Uses polynomial multiplication in the ring $GF(2^8)[x]/\langle x^8 + x^4 + x^3 + x + 1 \rangle$.

**Example: $GF(2^8)$ in AES**
The irreducible polynomial used for $GF(2^8)$ is $m(x) = x^8 + x^4 + x^3 + x + 1$.
Let $a(x) = x^7 + 1$ and $b(x) = x+1$.
Then $a(x) \times b(x) \pmod{m(x)}$ would be computed.
$(x^7+1)(x+1) = x^8 + x^7 + x + 1$.
Since $x^8 \equiv x^4 + x^3 + x + 1 \pmod{m(x)}$,
$x^8 + x^7 + x + 1 \equiv (x^4 + x^3 + x + 1) + x^7 + x + 1 \pmod{m(x)}$
$\equiv x^7 + x^4 + x^3 + 2x + 2 \pmod{m(x)}$
Since operations are in $GF(2)$, $2x \equiv 0$ and $2 \equiv 0$.
$\equiv x^7 + x^4 + x^3 \pmod{m(x)}$.
This is how multiplication is performed in $GF(2^8)$.

**Cryptanalysis (CO4):**
*   **Key Space:** For AES-128, the key space is $2^{128}$, which is astronomically large and considered secure against brute-force attacks.
*   **Known Attacks:** While no practical cryptanalytic attacks have been found that break AES significantly faster than brute force, some theoretical attacks exist against reduced-round versions of AES. These attacks exploit properties of the S-boxes and the finite field arithmetic. However, full AES remains highly secure.

**Important Point:** AES is the current gold standard for symmetric encryption due to its strong security, efficient implementation, and operation over the finite field $GF(2^8)$.

**Reference:** Stinson, Chapter 7; Menezes et al., Chapter 9.

---

### Practice Questions

**Q1. (Algebraic Structures)**
Let $p=5$. Consider the finite field $GF(5)$.
a) List all the elements of $GF(5)$.
b) What is the additive inverse of 3 in $GF(5)$?
c) What is the multiplicative inverse of 3 in $GF(5)$?
d) Is $(\mathbb{Z}_6, +, \times)$ a field? Explain why or why not.

**Q2. (Affine Cipher)**
Encrypt the message "CRYPTO" using the Affine cipher with key $a=7, b=10$. (A=0, B=1, ..., Z=25).
Find the decryption key.

**Q3. (Hill Cipher)**
Encrypt the message "SECURITY" using the Hill cipher with key $K = \begin{pmatrix} 3 & 1 \\ 2 & 4 \end{pmatrix} \pmod{26}$. Assume the message is padded with 'X' if needed. (A=0, ..., Z=25).

**Q4. (DES/AES Concepts)**
a) What is the primary difference in structure between DES and AES?
b) What mathematical field is central to the operations within AES?
c) Why is DES no longer considered secure for most applications?

---

### Answers to Practice Questions

**A1.**
a) The elements of $GF(5)$ are $\{0, 1, 2, 3, 4\}$.
b) The additive inverse of 3 in $GF(5)$ is 2, because $3 + 2 = 5 \equiv 0 \pmod 5$.
c) The multiplicative inverse of 3 in $GF(5)$ is 2, because $3 \times 2 = 6 \equiv 1 \pmod 5$.
d) No, $(\mathbb{Z}_6, +, \times)$ is not a field. Although it is a commutative ring with unity, not all non-zero elements have multiplicative inverses. For example, 2 has no multiplicative inverse modulo 6, because $\gcd(2, 6) = 2 \neq 1$.

**A2.**
Key: $a=7, b=10$. $\gcd(7, 26) = 1$.
To find $a^{-1}$: $7x \equiv 1 \pmod{26}$. $7 \times 15 = 105 = 4 \times 26 + 1$. So, $a^{-1} = 15$.
Message: "CRYPTO"
Numerical: C=2, R=17, Y=24, P=15, T=19, O=14

Encryption: $E(x) = (7x + 10) \pmod{26}$
*   $E(2) = (7 \times 2 + 10) \pmod{26} = (14 + 10) \pmod{26} = 24 \pmod{26} = 24$ (Y)
*   $E(17) = (7 \times 17 + 10) \pmod{26} = (119 + 10) \pmod{26} = 129 \pmod{26} = 25$ (Z)
*   $E(24) = (7 \times 24 + 10) \pmod{26} = (168 + 10) \pmod{26} = 178 \pmod{26} = 22$ (W)
*   $E(15) = (7 \times 15 + 10) \pmod{26} = (105 + 10) \pmod{26} = 115 \pmod{26} = 11$ (L)
*   $E(19) = (7 \times 19 + 10) \pmod{26} = (133 + 10) \pmod{26} = 143 \pmod{26} = 13$ (N)
*   $E(14) = (7 \times 14 + 10) \pmod{26} = (98 + 10) \pmod{26} = 108 \pmod{26} = 4$ (E)

Ciphertext: "Y Z W L N E"

Decryption Key: $a^{-1} = 15$.

**A3.**
Key: $K = \begin{pmatrix} 3 & 1 \\ 2 & 4 \end{pmatrix} \pmod{26}$.
$\det(K) = (3 \times 4) - (1 \times 2) = 12 - 2 = 10$.
$\gcd(10, 26) = 2 \neq 1$.
**The provided key matrix $K$ is not invertible modulo 26.** Therefore, the Hill cipher cannot be used with this key. A valid key matrix must have a determinant coprime to the modulus.

*(Self-correction: If a question provides an invalid key, it's important to point that out. If the intention was for a solvable problem, a different key would be needed. For example, if $K = \begin{pmatrix} 3 & 1 \\ 2 & 5 \end{pmatrix}$, $\det(K) = 13$, which is coprime to 26, and would be invertible.)*

**A4.**
a) DES uses a Feistel structure, where the data block is split, and a round function is applied to one half and XORed with the other. AES uses a Substitution-Permutation Network (SPN) structure, which involves byte-wise substitutions, row shifts, column mixing, and XORing with round keys.
b) The finite field $GF(2^8)$ is central to the operations within AES, particularly for the SubBytes and MixColumns transformations.
c) DES is no longer considered secure primarily because its 56-bit key is vulnerable to brute-force attacks using modern computing power. Attacks like differential and linear cryptanalysis are also more effective against DES compared to stronger algorithms.

---

### Important Points to Remember

*   **Algebraic Structures are the Building Blocks:** Groups, rings, and especially finite fields provide the mathematical framework for cryptographic operations.
*   **Invertibility is Key:** For decryption in symmetric ciphers, the keys (or related quantities) must be invertible. This is why conditions like $\gcd(a, m) = 1$ are crucial.
*   **Finite Fields for Modern Ciphers:** $GF(p^m)$ are essential for block ciphers like AES, enabling complex transformations over finite sets.
*   **Trade-offs in Block Ciphers:** Larger block sizes and key sizes generally increase security but also computational cost.
*   **Substitution and Permutation:** The core principles of modern block ciphers involve confusion (via substitutions like S-boxes) and diffusion (via permutations and mixing operations).
*   **DES is Outdated:** Rely on AES or other modern, secure symmetric ciphers.
*   **Cryptanalysis is Crucial:** Understanding how ciphers can be broken (e.g., brute-force, frequency analysis) is vital for evaluating their security.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
