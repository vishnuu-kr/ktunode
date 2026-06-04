---
title: "Number theory:  Primes, divisibility, linear diaphantine equations, congruences, system of linear congruences, Wilson theorem, Fermat‘s little theorem, Euler's theorem. Multiplicative functions, Primitive roots, Quadratic congruences- quadratic residues, Legrende symbol."
subject: "CRYPTOGRAPHY"
module: "Module 1: Introduction to cryptology : Stream and block ciphers"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff2b1"
status: "completed"
scrapedAt: "2026-05-23T18:05:33.786Z"
---
This is a comprehensive set of study notes for the "Number Theory" topic within Module 1 of your Cryptography course. These notes aim to cover all learning outcomes, incorporate content from the provided textbooks, and align with the course outcomes.

---

# Module 1: Introduction to Cryptology - Number Theory

**Course Outcomes (CO) Alignment:**

*   **CO1: Apply the principles of number theory and abstract algebra in cryptology. (Knowledge Level: K3)** - This module directly addresses this by introducing fundamental number theoretic concepts crucial for understanding cryptographic algorithms.
*   **CO2: Design and analyze various symmetric ciphers (Knowledge Level: K3)** - Many symmetric ciphers rely on modular arithmetic and properties of prime numbers.
*   **CO3: Design and analyze various asymmetric ciphers (Knowledge Level: K3)** - Asymmetric cryptography (like RSA) is heavily reliant on prime numbers, modular arithmetic, and theorems like Fermat's Little Theorem and Euler's Theorem.
*   **CO4: Apply the mathematical techniques for the cryptanalysis of symmetric and asymmetric ciphers. (Knowledge Level: K3)** - Understanding number theory is essential for breaking many cryptosystems.

---

## 1. Primes and Divisibility

### 1.1. Divisibility

**Definition:** An integer $a$ divides an integer $b$, denoted $a|b$, if there exists an integer $c$ such that $b = ac$. If $a$ does not divide $b$, we write $a \nmid b$.

**Key Properties:**

*   If $a|b$ and $b|c$, then $a|c$ (Transitivity).
*   If $a|b$, then $|a| \le |b|$ (assuming $b \neq 0$).
*   If $a|b$ and $a|c$, then $a|(bx + cy)$ for any integers $x, y$ (Linear Combinations).
*   If $a|b$ and $b \neq 0$, then $a$ is a divisor of $b$. The positive divisors of $b$ are often of primary interest.

**Example:** $3|12$ because $12 = 3 \times 4$.

**Reference:** Koblitz, Chapter 1: "Divisibility and the Euclidean Algorithm". Koshy, Chapter 2: "Divisibility".

### 1.2. Prime Numbers

**Definition:** A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. Numbers greater than 1 that are not prime are called composite numbers.

**Key Concepts:**

*   **The number 1 is neither prime nor composite.**
*   **Fundamental Theorem of Arithmetic:** Every integer greater than 1 can be uniquely represented as a product of prime numbers, up to the order of the factors.

**Example:**
*   Primes: 2, 3, 5, 7, 11, 13, 17, 19, 23, ...
*   Composite: 4 ($2^2$), 6 ($2 \times 3$), 8 ($2^3$), 9 ($3^2$), 10 ($2 \times 5$), 12 ($2^2 \times 3$), ...

**Importance in Cryptography:** Prime numbers are the building blocks of integers and are fundamental to many cryptographic algorithms, particularly in public-key cryptography (e.g., RSA relies on the difficulty of factoring large numbers into their prime components).

**Reference:** Koblitz, Chapter 1. Koshy, Chapter 3: "Prime Numbers". Handbook of Applied Cryptography (HAC), Chapter 8: "Integer Factorization".

### 1.3. Greatest Common Divisor (GCD)

**Definition:** The greatest common divisor of two integers $a$ and $b$, denoted $\gcd(a, b)$, is the largest positive integer that divides both $a$ and $b$.

**Key Concepts:**

*   **Euclidean Algorithm:** An efficient method for computing the GCD of two integers. It's based on the principle that $\gcd(a, b) = \gcd(b, a \pmod b)$.
    *   **Recursive Step:** $\gcd(a, b) = \gcd(b, a - b)$ if $a > b$.
    *   **Base Case:** $\gcd(a, 0) = a$.

**Example:** Find $\gcd(48, 18)$.
1.  $48 = 2 \times 18 + 12 \implies \gcd(48, 18) = \gcd(18, 12)$
2.  $18 = 1 \times 12 + 6 \implies \gcd(18, 12) = \gcd(12, 6)$
3.  $12 = 2 \times 6 + 0 \implies \gcd(12, 6) = \gcd(6, 0) = 6$.
    So, $\gcd(48, 18) = 6$.

**Reference:** Koblitz, Chapter 1. Koshy, Chapter 4: "The Euclidean Algorithm". HAC, Chapter 8.

### 1.4. Coprime (Relatively Prime)

**Definition:** Two integers $a$ and $b$ are said to be coprime (or relatively prime) if their greatest common divisor is 1, i.e., $\gcd(a, b) = 1$.

**Example:** $\gcd(7, 10) = 1$, so 7 and 10 are coprime. $\gcd(6, 9) = 3$, so 6 and 9 are not coprime.

**Reference:** Koblitz, Chapter 1. Koshy, Chapter 4.

---

## 2. Linear Diophantine Equations

**Definition:** A linear Diophantine equation is an equation of the form $ax + by = c$, where $a, b, c$ are integers, and we are looking for integer solutions $(x, y)$.

**Solvability Condition:**

*   The equation $ax + by = c$ has integer solutions if and only if $\gcd(a, b)$ divides $c$.

**Finding a Particular Solution:**

1.  If $\gcd(a, b) \nmid c$, there are no integer solutions.
2.  If $\gcd(a, b) | c$, let $d = \gcd(a, b)$. Divide the equation by $d$:
    $(a/d)x + (b/d)y = c/d$.
    Now, $\gcd(a/d, b/d) = 1$.
3.  Use the Extended Euclidean Algorithm to find integers $x_0'$ and $y_0'$ such that $(a/d)x_0' + (b/d)y_0' = 1$.
4.  Multiply by $c/d$: $(a/d)(x_0' \cdot c/d) + (b/d)(y_0' \cdot c/d) = c/d$.
    A particular solution is $x_p = x_0' \cdot c/d$ and $y_p = y_0' \cdot c/d$.

**General Solution:**

If $(x_p, y_p)$ is a particular solution to $ax + by = c$, then the general solution is given by:
$x = x_p + (b/d)t$
$y = y_p - (a/d)t$
where $t$ is any integer and $d = \gcd(a, b)$.

**Example:** Solve $6x + 9y = 21$.
1.  $a=6, b=9, c=21$. $\gcd(6, 9) = 3$.
2.  Since $3 | 21$, solutions exist.
3.  Divide by 3: $2x + 3y = 7$.
4.  Use Extended Euclidean Algorithm for $\gcd(2, 3)$:
    *   $3 = 1 \times 2 + 1$
    *   $1 = 3 - 1 \times 2$
    So, $2(-1) + 3(1) = 1$.
    Here, $x_0' = -1, y_0' = 1$.
5.  Multiply by $c/d = 7$: $2(-1 \times 7) + 3(1 \times 7) = 7$.
    $2(-7) + 3(7) = 7$.
    A particular solution is $x_p = -7, y_p = 7$.
6.  General Solution: $d=3$.
    $x = -7 + (9/3)t = -7 + 3t$
    $y = 7 - (6/3)t = 7 - 2t$, where $t$ is any integer.

**Reference:** Koblitz, Chapter 1. Koshy, Chapter 5: "Linear Diophantine Equations".

---

## 3. Congruences

### 3.1. Definition and Properties

**Definition:** Let $a, b$ be integers and $m$ be a positive integer. We say $a$ is congruent to $b$ modulo $m$, denoted $a \equiv b \pmod m$, if $m | (a - b)$. This means $a - b = km$ for some integer $k$, or $a = b + km$.

**Key Concepts:**

*   **Modulo Operation:** $a \pmod m$ is the remainder when $a$ is divided by $m$. So, $a \equiv b \pmod m$ is equivalent to $a \pmod m = b \pmod m$.
*   **Residue Class:** The set of all integers congruent to a given integer $a$ modulo $m$ is called the residue class of $a$ modulo $m$, denoted $[a]_m$ or $a+m\mathbb{Z}$.
    *   $[a]_m = \{..., a-2m, a-m, a, a+m, a+2m, ...\}$
*   **Complete Residue System (CRS):** A set of $m$ integers, no two of which are congruent modulo $m$. The set $\{0, 1, 2, ..., m-1\}$ is a common CRS.

**Properties:**

*   If $a \equiv b \pmod m$ and $c \equiv d \pmod m$, then:
    *   $a+c \equiv b+d \pmod m$
    *   $a-c \equiv b-d \pmod m$
    *   $ac \equiv bd \pmod m$
*   If $a \equiv b \pmod m$, then $a^k \equiv b^k \pmod m$ for any non-negative integer $k$.
*   If $a \equiv b \pmod m$, then $ka \equiv kb \pmod m$ for any integer $k$.

**Example:**
*   $17 \equiv 5 \pmod{12}$ because $12 | (17-5)$, i.e., $12 | 12$.
*   $25 \equiv 1 \pmod{4}$.
*   $10 \equiv -2 \pmod{12}$ because $12 | (10 - (-2))$, i.e., $12 | 12$.

**Reference:** Koblitz, Chapter 2: "Congruences". Koshy, Chapter 6: "Congruences". HAC, Chapter 4: "Finite Fields".

### 3.2. Linear Congruences

**Definition:** A linear congruence is an equation of the form $ax \equiv b \pmod m$, where $a, b, m$ are integers and $m > 0$. We are looking for integer solutions for $x$.

**Solvability Condition:**

*   The linear congruence $ax \equiv b \pmod m$ has solutions if and only if $\gcd(a, m)$ divides $b$.

**Number of Solutions:**

*   If $\gcd(a, m) = d$ and $d|b$, then there are exactly $d$ incongruent solutions modulo $m$.

**Finding Solutions:**

1.  If $d = \gcd(a, m)$ divides $b$, let $a' = a/d$, $b' = b/d$, and $m' = m/d$.
2.  The congruence $ax \equiv b \pmod m$ is equivalent to $a'x \equiv b' \pmod{m'}$.
3.  Now, $\gcd(a', m') = 1$. This means $a'$ has a multiplicative inverse modulo $m'$. Let $(a')^{-1}$ be this inverse.
4.  Multiply by $(a')^{-1}$: $(a')^{-1}a'x \equiv (a')^{-1}b' \pmod{m'}$.
    $x \equiv (a')^{-1}b' \pmod{m'}$.
5.  Let $x_0 = (a')^{-1}b' \pmod{m'}$ be the unique solution modulo $m'$.
6.  The $d$ solutions modulo $m$ are given by:
    $x_0, x_0 + m', x_0 + 2m', ..., x_0 + (d-1)m'$.

**Example:** Solve $6x \equiv 9 \pmod{15}$.
1.  $a=6, b=9, m=15$. $\gcd(6, 15) = 3$.
2.  Since $3 | 9$, solutions exist. $d=3$.
3.  Divide by 3: $2x \equiv 3 \pmod{5}$.
4.  Find the inverse of $2 \pmod 5$:
    *   $2 \times 1 = 2 \pmod 5$
    *   $2 \times 2 = 4 \pmod 5$
    *   $2 \times 3 = 6 \equiv 1 \pmod 5$. So, $(2)^{-1} \equiv 3 \pmod 5$.
5.  Multiply by 3: $3 \times 2x \equiv 3 \times 3 \pmod 5$.
    $6x \equiv 9 \pmod 5$.
    $x \equiv 4 \pmod 5$.
    So, $x_0 = 4$.
6.  The solutions modulo 15 are:
    $x_0 = 4$
    $x_0 + m' = 4 + 5 = 9$
    $x_0 + 2m' = 4 + 10 = 14$
    The solutions are $x \equiv 4, 9, 14 \pmod{15}$.

**Reference:** Koblitz, Chapter 2. Koshy, Chapter 7: "Linear Congruences".

---

## 4. System of Linear Congruences

**Definition:** A system of linear congruences is a set of congruences of the form:
$x \equiv a_1 \pmod{m_1}$
$x \equiv a_2 \pmod{m_2}$
...
$x \equiv a_k \pmod{m_k}$

### 4.1. Chinese Remainder Theorem (CRT)

**Theorem:** Let $m_1, m_2, ..., m_k$ be pairwise coprime positive integers (i.e., $\gcd(m_i, m_j) = 1$ for $i \neq j$). Then the system of congruences above has a unique solution modulo $M = m_1 m_2 \cdots m_k$.

**Algorithm for Solving:**

1.  Calculate $M = m_1 m_2 \cdots m_k$.
2.  For each $i$ from 1 to $k$, calculate $M_i = M/m_i$.
3.  For each $i$, find the multiplicative inverse of $M_i$ modulo $m_i$. Let this inverse be $y_i$, so $M_i y_i \equiv 1 \pmod{m_i}$. This inverse exists because $\gcd(M_i, m_i) = 1$.
4.  The solution is given by:
    $x \equiv a_1 M_1 y_1 + a_2 M_2 y_2 + \cdots + a_k M_k y_k \pmod M$.

**Example:** Solve the system:
$x \equiv 2 \pmod 3$
$x \equiv 3 \pmod 5$
$x \equiv 2 \pmod 7$

1.  $m_1=3, m_2=5, m_3=7$. These are pairwise coprime.
2.  $M = 3 \times 5 \times 7 = 105$.
3.  Calculate $M_i$ and their inverses $y_i$:
    *   $i=1$: $m_1=3, a_1=2$. $M_1 = M/m_1 = 105/3 = 35$.
        We need to solve $35 y_1 \equiv 1 \pmod 3$.
        $35 \equiv 2 \pmod 3$. So, $2 y_1 \equiv 1 \pmod 3$.
        $2 \times 2 = 4 \equiv 1 \pmod 3$. So, $y_1 = 2$.
    *   $i=2$: $m_2=5, a_2=3$. $M_2 = M/m_2 = 105/5 = 21$.
        We need to solve $21 y_2 \equiv 1 \pmod 5$.
        $21 \equiv 1 \pmod 5$. So, $1 y_2 \equiv 1 \pmod 5$.
        So, $y_2 = 1$.
    *   $i=3$: $m_3=7, a_3=2$. $M_3 = M/m_3 = 105/7 = 15$.
        We need to solve $15 y_3 \equiv 1 \pmod 7$.
        $15 \equiv 1 \pmod 7$. So, $1 y_3 \equiv 1 \pmod 7$.
        So, $y_3 = 1$.
4.  Calculate the solution:
    $x \equiv a_1 M_1 y_1 + a_2 M_2 y_2 + a_3 M_3 y_3 \pmod{105}$
    $x \equiv (2 \times 35 \times 2) + (3 \times 21 \times 1) + (2 \times 15 \times 1) \pmod{105}$
    $x \equiv 140 + 63 + 30 \pmod{105}$
    $x \equiv 233 \pmod{105}$
    $233 = 2 \times 105 + 23$.
    $x \equiv 23 \pmod{105}$.

**Reference:** Koblitz, Chapter 2. Koshy, Chapter 8: "The Chinese Remainder Theorem".

---

## 5. Special Theorems in Modular Arithmetic

These theorems are fundamental to many cryptographic protocols.

### 5.1. Wilson's Theorem

**Theorem:** For a prime number $p$, $(p-1)! \equiv -1 \pmod p$. Conversely, if $(n-1)! \equiv -1 \pmod n$ for an integer $n > 1$, then $n$ must be prime.

**Proof Sketch (for prime $p$):**
Consider the numbers $1, 2, ..., p-1$. Each of these numbers has a unique multiplicative inverse modulo $p$. The inverse of $a$ is $a^{-1}$ such that $a \cdot a^{-1} \equiv 1 \pmod p$.
The only numbers that are their own inverses modulo $p$ are 1 and $p-1$ (since $(p-1)^2 = p^2 - 2p + 1 \equiv 1 \pmod p$).
All other numbers $2, 3, ..., p-2$ can be paired up $(a, a^{-1})$ such that their product is congruent to 1 modulo $p$.
Therefore, $(p-1)! = 1 \cdot (p-1) \cdot (\text{product of pairs}) \equiv 1 \cdot (p-1) \cdot 1 \equiv p-1 \equiv -1 \pmod p$.

**Example:**
*   For $p=5$ (prime): $(5-1)! = 4! = 24$. $24 \equiv -1 \pmod 5$ (since $24 = 5 \times 5 - 1$).
*   For $n=4$ (composite): $(4-1)! = 3! = 6$. $6 \equiv 2 \pmod 4$, not $-1 \pmod 4$.

**Importance:** Primarily a theoretical result for primality testing.

**Reference:** Koblitz, Chapter 2. Koshy, Chapter 9: "Wilson's Theorem and Fermat's Little Theorem".

### 5.2. Fermat's Little Theorem (FLT)

**Theorem:** If $p$ is a prime number, then for any integer $a$ not divisible by $p$, we have $a^{p-1} \equiv 1 \pmod p$.
An alternative form: For any integer $a$ and any prime $p$, $a^p \equiv a \pmod p$.

**Proof Sketch (for $a^{p-1} \equiv 1 \pmod p$):**
Consider the set of non-zero residues modulo $p$: $\{1, 2, ..., p-1\}$.
Multiply each element by $a$ (where $p \nmid a$): $\{a \cdot 1, a \cdot 2, ..., a \cdot (p-1)\}$.
Since $\gcd(a, p) = 1$, all these products $a \cdot k$ are distinct modulo $p$ and are non-zero. Thus, the set $\{a \cdot 1, a \cdot 2, ..., a \cdot (p-1)\}$ is just a permutation of the set $\{1, 2, ..., p-1\}$ modulo $p$.
Therefore, the product of elements in both sets must be congruent:
$(a \cdot 1)(a \cdot 2) \cdots (a \cdot (p-1)) \equiv 1 \cdot 2 \cdots (p-1) \pmod p$
$a^{p-1} (1 \cdot 2 \cdots (p-1)) \equiv (p-1)! \pmod p$
$a^{p-1} (p-1)! \equiv (p-1)! \pmod p$.
Since $(p-1)! \not\equiv 0 \pmod p$ (by Wilson's Theorem), we can divide by $(p-1)!$ to get $a^{p-1} \equiv 1 \pmod p$.

**Proof Sketch (for $a^p \equiv a \pmod p$):**
Case 1: $p \nmid a$. By FLT, $a^{p-1} \equiv 1 \pmod p$. Multiply by $a$: $a \cdot a^{p-1} \equiv a \cdot 1 \pmod p \implies a^p \equiv a \pmod p$.
Case 2: $p | a$. Then $a \equiv 0 \pmod p$. So, $a^p \equiv 0^p \equiv 0 \pmod p$. Also $a \equiv 0 \pmod p$. Thus, $a^p \equiv a \pmod p$.

**Example:**
*   Let $p=5$ and $a=3$. $3^{5-1} = 3^4 = 81$. $81 = 16 \times 5 + 1$, so $81 \equiv 1 \pmod 5$.
*   Using $a^p \equiv a \pmod p$: $3^5 = 243$. $243 = 48 \times 5 + 3$, so $243 \equiv 3 \pmod 5$.

**Importance:**
*   Used in the design of RSA encryption (exponentiation by powers).
*   Basis for Fermat primality test (probabilistic primality test).

**Reference:** Koblitz, Chapter 2. Koshy, Chapter 9. HAC, Chapter 5: "Number Theory".

### 5.3. Euler's Theorem

**Theorem:** If $a$ and $m$ are coprime integers ($\gcd(a, m) = 1$), then $a^{\phi(m)} \equiv 1 \pmod m$, where $\phi(m)$ is Euler's totient function.

**Euler's Totient Function ($\phi(m)$):**
**Definition:** $\phi(m)$ is the number of positive integers less than or equal to $m$ that are relatively prime to $m$.

**Properties of $\phi(m)$:**
*   If $p$ is a prime number, $\phi(p) = p-1$. (This makes Euler's Theorem a generalization of FLT: $a^{p-1} \equiv 1 \pmod p$ if $p \nmid a$).
*   If $p$ is a prime and $k \ge 1$, $\phi(p^k) = p^k - p^{k-1} = p^k(1 - 1/p)$.
*   If $\gcd(m, n) = 1$, then $\phi(mn) = \phi(m)\phi(n)$ (Multiplicative Property).

**Formula for $\phi(m)$:**
If the prime factorization of $m$ is $m = p_1^{k_1} p_2^{k_2} \cdots p_r^{k_r}$, then
$\phi(m) = m \prod_{i=1}^r (1 - 1/p_i) = \prod_{i=1}^r (p_i^{k_i} - p_i^{k_i-1}) = \phi(p_1^{k_1})\phi(p_2^{k_2}) \cdots \phi(p_r^{k_r})$.

**Example:**
*   $\phi(10) = \phi(2 \times 5) = \phi(2) \phi(5) = (2-1)(5-1) = 1 \times 4 = 4$. The numbers coprime to 10 are 1, 3, 7, 9.
*   $\phi(16) = \phi(2^4) = 2^4 - 2^3 = 16 - 8 = 8$. The numbers are 1, 3, 5, 7, 9, 11, 13, 15.

**Proof Sketch for Euler's Theorem (using group theory implicitly):**
Consider the set of integers $\{a \in \{1, ..., m\} : \gcd(a, m) = 1\}$. This set forms a group under multiplication modulo $m$, denoted by $(\mathbb{Z}/m\mathbb{Z})^\times$. The order of this group is $\phi(m)$.
By Lagrange's theorem in group theory, for any element $a$ in this group, $a^{|G|} \equiv 1 \pmod m$, where $|G|$ is the order of the group. So, $a^{\phi(m)} \equiv 1 \pmod m$.

**Example:**
*   Let $m=10$, $a=3$. $\gcd(3, 10)=1$. $\phi(10)=4$.
    $3^{\phi(10)} = 3^4 = 81$. $81 \equiv 1 \pmod{10}$.
*   Let $m=7$, $a=2$. $\gcd(2, 7)=1$. $\phi(7)=6$.
    $2^{\phi(7)} = 2^6 = 64$. $64 = 9 \times 7 + 1$, so $64 \equiv 1 \pmod 7$. (This is FLT as 7 is prime).

**Importance:**
*   Crucial for RSA algorithm: It defines the order of the multiplicative group, and its inverse is used in decryption.
*   Used in modular exponentiation.

**Reference:** Koblitz, Chapter 2. Koshy, Chapter 9. HAC, Chapter 5.

---

## 6. Multiplicative Functions

**Definition:** A function $f(n)$ is called multiplicative if for any two coprime positive integers $m$ and $n$, $f(mn) = f(m)f(n)$.

**Properties:**
*   If $f$ is multiplicative, and the prime factorization of $n$ is $n = p_1^{k_1} p_2^{k_2} \cdots p_r^{k_r}$, then $f(n) = f(p_1^{k_1}) f(p_2^{k_2}) \cdots f(p_r^{k_r})$.

**Examples of Multiplicative Functions:**

1.  **Euler's Totient Function ($\phi(n)$):** As shown above, $\phi(mn) = \phi(m)\phi(n)$ if $\gcd(m, n) = 1$.
2.  **Sum of Divisors Function ($\sigma_k(n)$):**
    **Definition:** $\sigma_k(n) = \sum_{d|n} d^k$. The sum of the $k$-th powers of the positive divisors of $n$.
    *   $\sigma_1(n)$ is the sum of divisors, often denoted $\sigma(n)$.
    *   $\sigma_0(n)$ is the number of divisors, often denoted $d(n)$ or $\tau(n)$.
    **Property:** If $n = p^k$, $\sigma_k(p^k) = 1^k + p^k + (p^2)^k + \cdots + (p^k)^k = \frac{(p^k)^{k+1}-1}{(p^k)-1}$.
    For $\sigma_1(p^k) = 1 + p + p^2 + \cdots + p^k = \frac{p^{k+1}-1}{p-1}$.
    For $\sigma_0(p^k) = k+1$.
    If $\gcd(m, n) = 1$, then $\sigma_k(mn) = \sigma_k(m)\sigma_k(n)$.

    **Example:**
    *   $\sigma_1(12) = \sigma_1(2^2 \cdot 3) = \sigma_1(2^2)\sigma_1(3) = (1+2+4)(1+3) = 7 \times 4 = 28$.
        Divisors of 12 are 1, 2, 3, 4, 6, 12. Sum = $1+2+3+4+6+12 = 28$.
    *   $\sigma_0(12) = \sigma_0(2^2)\sigma_0(3) = (2+1)(1+1) = 3 \times 2 = 6$.
        Divisors are 1, 2, 3, 4, 6, 12 (6 divisors).

3.  **Number of Divisors Function ($d(n)$ or $\tau(n)$):**
    **Definition:** $d(n)$ is the number of positive divisors of $n$.
    **Property:** If $n = p_1^{k_1} p_2^{k_2} \cdots p_r^{k_r}$, then $d(n) = (k_1+1)(k_2+1)\cdots(k_r+1)$. This shows it's multiplicative.

    **Example:**
    *   $d(12) = d(2^2 \cdot 3^1) = (2+1)(1+1) = 3 \times 2 = 6$.

**Importance:** Understanding these functions is helpful for analyzing the structure of numbers and their divisors, which can be relevant in cryptography (e.g., in factoring or in constructing number-theoretic transforms).

**Reference:** Koblitz, Chapter 2. Koshy, Chapter 10: "Multiplicative Functions".

---

## 7. Primitive Roots

**Definition:** Let $m$ be a positive integer. An integer $g$ is a primitive root modulo $m$ if $\gcd(g, m) = 1$ and the order of $g$ modulo $m$ is $\phi(m)$.
The **order of $g$ modulo $m$** is the smallest positive integer $k$ such that $g^k \equiv 1 \pmod m$.

**Existence of Primitive Roots:**
Primitive roots modulo $m$ exist if and only if $m$ is one of the following: $2, 4, p^k,$ or $2p^k$, where $p$ is an odd prime and $k \ge 1$.

**Example:**
*   Modulo 7: $\phi(7) = 6$.
    Consider $g=3$. $\gcd(3, 7)=1$.
    $3^1 \equiv 3 \pmod 7$
    $3^2 \equiv 9 \equiv 2 \pmod 7$
    $3^3 \equiv 3 \times 2 \equiv 6 \pmod 7$
    $3^4 \equiv 3 \times 6 \equiv 18 \equiv 4 \pmod 7$
    $3^5 \equiv 3 \times 4 \equiv 12 \equiv 5 \pmod 7$
    $3^6 \equiv 3 \times 5 \equiv 15 \equiv 1 \pmod 7$
    The order of 3 modulo 7 is 6, which is $\phi(7)$. So, 3 is a primitive root modulo 7.

*   Modulo 10: $\phi(10) = 4$. Primitive roots exist since $10 = 2 \times 5^1$.
    Let's check $g=3$. $\gcd(3, 10)=1$.
    $3^1 \equiv 3 \pmod{10}$
    $3^2 \equiv 9 \pmod{10}$
    $3^3 \equiv 27 \equiv 7 \pmod{10}$
    $3^4 \equiv 81 \equiv 1 \pmod{10}$
    The order of 3 modulo 10 is 4, which is $\phi(10)$. So, 3 is a primitive root modulo 10.
    Other primitive root is 7.

*   Modulo 8: $\phi(8) = 4$.
    The integers coprime to 8 are 1, 3, 5, 7.
    $1^1 \equiv 1 \pmod 8$. Order is 1.
    $3^1 \equiv 3, 3^2 \equiv 9 \equiv 1 \pmod 8$. Order is 2.
    $5^1 \equiv 5, 5^2 \equiv 25 \equiv 1 \pmod 8$. Order is 2.
    $7^1 \equiv 7, 7^2 \equiv 49 \equiv 1 \pmod 8$. Order is 2.
    No element has order 4. Thus, there are no primitive roots modulo 8.

**Importance:**
*   Primitive roots are the generators of the multiplicative group $(\mathbb{Z}/m\mathbb{Z})^\times$ when it is cyclic.
*   They are used in the construction of Diffie-Hellman key exchange and ElGamal encryption, where exponents are taken modulo $p$ (a prime), and the primitive root is often used as the base.

**Reference:** Koblitz, Chapter 3: "Primitive Roots and Power Residues". Koshy, Chapter 11: "Primitive Roots". HAC, Chapter 5.

---

## 8. Quadratic Congruences

### 8.1. Quadratic Residues and Non-residues

**Definition:** Let $p$ be an odd prime and $a$ be an integer such that $\gcd(a, p) = 1$.
*   $a$ is a **quadratic residue** modulo $p$ if the congruence $x^2 \equiv a \pmod p$ has a solution.
*   $a$ is a **quadratic non-residue** modulo $p$ if the congruence $x^2 \equiv a \pmod p$ has no solution.

**Key Facts:**
*   For an odd prime $p$, exactly half of the non-zero residues modulo $p$ are quadratic residues, and the other half are quadratic non-residues.
*   If $a \equiv b \pmod p$, then $a$ is a quadratic residue iff $b$ is a quadratic residue.

**Example:** Modulo $p=5$:
*   $1^2 \equiv 1 \pmod 5$
*   $2^2 \equiv 4 \pmod 5$
*   $3^2 \equiv 9 \equiv 4 \pmod 5$
*   $4^2 \equiv 16 \equiv 1 \pmod 5$
The quadratic residues modulo 5 are 1 and 4.
The quadratic non-residues modulo 5 are 2 and 3.

**Example:** Modulo $p=7$:
*   $1^2 \equiv 1 \pmod 7$
*   $2^2 \equiv 4 \pmod 7$
*   $3^2 \equiv 9 \equiv 2 \pmod 7$
*   $4^2 \equiv 16 \equiv 2 \pmod 7$
*   $5^2 \equiv 25 \equiv 4 \pmod 7$
*   $6^2 \equiv 36 \equiv 1 \pmod 7$
The quadratic residues modulo 7 are 1, 2, 4.
The quadratic non-residues modulo 7 are 3, 5, 6.

**Reference:** Koblitz, Chapter 3. Koshy, Chapter 13: "Quadratic Congruences".

### 8.2. Legendre Symbol

**Definition:** For an odd prime $p$ and an integer $a$ not divisible by $p$, the Legendre symbol $(a/p)$ is defined as:
$$
\left(\frac{a}{p}\right) =
\begin{cases}
1 & \text{if } a \text{ is a quadratic residue modulo } p \\
-1 & \text{if } a \text{ is a quadratic non-residue modulo } p
\end{cases}
$$
If $p | a$, then $(a/p) = 0$.

**Properties of the Legendre Symbol:**

1.  $(a/p) \equiv a^{(p-1)/2} \pmod p$. (This is Euler's Criterion).
2.  If $a \equiv b \pmod p$, then $(a/p) = (b/p)$.
3.  $(ab/p) = (a/p)(b/p)$ (Multiplicative Property).
4.  $(a^2/p) = 1$ if $p \nmid a$.
5.  $(1/p) = 1$.
6.  $(-1/p) = (-1)^{(p-1)/2}$. This means:
    *   $(-1/p) = 1$ if $p \equiv 1 \pmod 4$ (i.e., $-1$ is a QR).
    *   $(-1/p) = -1$ if $p \equiv 3 \pmod 4$ (i.e., $-1$ is a QNR).
7.  $(2/p) = (-1)^{(p^2-1)/8}$. This means:
    *   $(2/p) = 1$ if $p \equiv 1, 7 \pmod 8$ (i.e., $2$ is a QR).
    *   $(2/p) = -1$ if $p \equiv 3, 5 \pmod 8$ (i.e., $2$ is a QNR).
8.  **Law of Quadratic Reciprocity:** For distinct odd primes $p$ and $q$:
    $\left(\frac{p}{q}\right)\left(\frac{q}{p}\right) = (-1)^{((p-1)/2)((q-1)/2)}$
    Or, equivalently:
    $\left(\frac{p}{q}\right) = \begin{cases} \left(\frac{q}{p}\right) & \text{if } p \equiv 1 \pmod 4 \text{ or } q \equiv 1 \pmod 4 \\ -\left(\frac{q}{p}\right) & \text{if } p \equiv 3 \pmod 4 \text{ and } q \equiv 3 \pmod 4 \end{cases}$

**Example:** Evaluate $(10/13)$.
1.  $(10/13) = (2/13)(5/13)$ by property 3.
2.  Calculate $(2/13)$: $13 \equiv 5 \pmod 8$. So, $(2/13) = -1$ by property 7.
3.  Calculate $(5/13)$: Using quadratic reciprocity. $p=5, q=13$. Both are odd primes.
    $5 \equiv 1 \pmod 4$, $13 \equiv 1 \pmod 4$. So, $(5/13) = (13/5)$ by property 8.
4.  Calculate $(13/5)$: $13 \equiv 3 \pmod 5$. So, $(13/5) = (3/5)$.
5.  Calculate $(3/5)$: Use quadratic reciprocity again. $p=3, q=5$.
    $3 \equiv 3 \pmod 4$, $5 \equiv 1 \pmod 4$. So, $(3/5) = (5/3)$ by property 8.
6.  Calculate $(5/3)$: $5 \equiv 2 \pmod 3$. So, $(5/3) = (2/3)$.
7.  Calculate $(2/3)$: $3 \equiv 3 \pmod 8$. So, $(2/3) = -1$ by property 7.

Putting it all together:
$(10/13) = (2/13)(5/13) = (-1) \times (-1) = 1$.
So, 10 is a quadratic residue modulo 13.

Let's check: $x^2 \equiv 10 \pmod{13}$.
$1^2=1, 2^2=4, 3^2=9, 4^2=16 \equiv 3, 5^2=25 \equiv 12 \equiv -1, 6^2=36 \equiv 10$.
Indeed, $x=6$ is a solution.

**Importance:**
*   The Legendre symbol and quadratic reciprocity are essential tools for determining whether a number is a quadratic residue.
*   This forms the basis for the Solovay-Strassen primality test, a probabilistic primality test, which uses the Jacobi symbol (a generalization of the Legendre symbol).
*   Used in elliptic curve cryptography for certain operations.

**Reference:** Koblitz, Chapter 3. Koshy, Chapter 13. HAC, Chapter 5.

---

## Practice Questions and Exercises

**Section 1: Primes and Divisibility**

1.  Find $\gcd(1071, 462)$ using the Euclidean Algorithm.
2.  Are 17 and 31 coprime? Justify.

**Section 2: Linear Diophantine Equations**

3.  Solve the linear Diophantine equation $12x + 30y = 42$.

**Section 3: Congruences**

4.  Solve the linear congruence $7x \equiv 4 \pmod{12}$.
5.  Find the remainder of $3^{100} \pmod{17}$.

**Section 4: System of Linear Congruences**

6.  Solve the system of congruences:
    $x \equiv 1 \pmod 2$
    $x \equiv 2 \pmod 3$
    $x \equiv 3 \pmod 5$

**Section 5: Special Theorems**

7.  Show that $10^{16} \equiv 1 \pmod{17}$ using Fermat's Little Theorem.
8.  Calculate $\phi(100)$ and verify Euler's Theorem for $a=3$ and $m=100$.

**Section 6: Multiplicative Functions**

9.  Calculate $\sigma(30)$ and $d(30)$.

**Section 7: Primitive Roots**

10. Find a primitive root modulo 11, if one exists.

**Section 8: Quadratic Congruences and Legendre Symbol**

11. Determine if 5 is a quadratic residue modulo 13 using the Legendre symbol.
12. Evaluate $(15/19)$.

---

## Answers to Practice Questions

1.  **Answer:**
    $1071 = 2 \times 462 + 147$
    $462 = 3 \times 147 + 21$
    $147 = 7 \times 21 + 0$
    So, $\gcd(1071, 462) = 21$.

2.  **Answer:** Yes, 17 and 31 are coprime. $\gcd(17, 31) = 1$ since both are prime numbers and are distinct.

3.  **Answer:**
    $\gcd(12, 30) = 6$. Since $6 | 42$, solutions exist.
    Divide by 6: $2x + 5y = 7$.
    Using Extended Euclidean Algorithm for $\gcd(2, 5)$: $5 = 2 \times 2 + 1 \implies 1 = 5 - 2 \times 2$.
    So, $2(-2) + 5(1) = 1$.
    Multiply by 7: $2(-14) + 5(7) = 7$.
    A particular solution is $x_p = -14, y_p = 7$.
    General solution: $d=6$.
    $x = -14 + (30/6)t = -14 + 5t$
    $y = 7 - (12/6)t = 7 - 2t$, where $t$ is any integer.

4.  **Answer:**
    $7x \equiv 4 \pmod{12}$. $\gcd(7, 12) = 1$, so a unique solution exists.
    We need the inverse of $7 \pmod{12}$.
    $7 \times 1 = 7$
    $7 \times 2 = 14 \equiv 2$
    $7 \times 3 = 21 \equiv 9$
    $7 \times 4 = 28 \equiv 4$
    $7 \times 5 = 35 \equiv 11 \equiv -1$
    $7 \times (-5) \equiv 1 \pmod{12}$ (since $-35 = -3 \times 12 + 1$).
    Inverse of 7 is $-5 \equiv 7 \pmod{12}$.
    Multiply by 7: $7 \times 7x \equiv 7 \times 4 \pmod{12}$
    $49x \equiv 28 \pmod{12}$
    $x \equiv 4 \pmod{12}$.
    Solution: $x \equiv 4 \pmod{12}$.

5.  **Answer:**
    Using Fermat's Little Theorem, $a^{p-1} \equiv 1 \pmod p$ if $p$ is prime and $p \nmid a$.
    Here $p=17$ (prime) and $a=3$. $17 \nmid 3$.
    So, $3^{16} \equiv 1 \pmod{17}$.
    We need $3^{100} \pmod{17}$.
    $100 = 16 \times 6 + 4$.
    $3^{100} = 3^{16 \times 6 + 4} = (3^{16})^6 \times 3^4 \pmod{17}$.
    Since $3^{16} \equiv 1 \pmod{17}$,
    $(3^{16})^6 \times 3^4 \equiv 1^6 \times 3^4 \equiv 3^4 \pmod{17}$.
    $3^4 = 81$.
    $81 = 4 \times 17 + 13$.
    So, $81 \equiv 13 \pmod{17}$.
    Thus, $3^{100} \equiv 13 \pmod{17}$.

6.  **Answer:**
    $M = 2 \times 3 \times 5 = 30$.
    $i=1: m_1=2, a_1=1$. $M_1 = 30/2 = 15$. $15 \equiv 1 \pmod 2$. Inverse of $15 \pmod 2$ is $1$. $y_1=1$.
    $i=2: m_2=3, a_2=2$. $M_2 = 30/3 = 10$. $10 \equiv 1 \pmod 3$. Inverse of $10 \pmod 3$ is $1$. $y_2=1$.
    $i=3: m_3=5, a_3=3$. $M_3 = 30/5 = 6$. $6 \equiv 1 \pmod 5$. Inverse of $6 \pmod 5$ is $1$. $y_3=1$.
    $x \equiv a_1 M_1 y_1 + a_2 M_2 y_2 + a_3 M_3 y_3 \pmod{30}$
    $x \equiv (1 \times 15 \times 1) + (2 \times 10 \times 1) + (3 \times 6 \times 1) \pmod{30}$
    $x \equiv 15 + 20 + 18 \pmod{30}$
    $x \equiv 53 \pmod{30}$
    $53 = 1 \times 30 + 23$.
    $x \equiv 23 \pmod{30}$.

7.  **Answer:**
    By Fermat's Little Theorem, for prime $p=17$, we have $a^{16} \equiv 1 \pmod{17}$ for any integer $a$ not divisible by 17.
    For $a=10$, $\gcd(10, 17)=1$.
    Therefore, $10^{16} \equiv 1 \pmod{17}$.

8.  **Answer:**
    $m=100 = 2^2 \times 5^2$.
    $\phi(100) = \phi(2^2) \phi(5^2) = (2^2 - 2^1)(5^2 - 5^1) = (4-2)(25-5) = 2 \times 20 = 40$.
    Euler's Theorem states $a^{\phi(m)} \equiv 1 \pmod m$ if $\gcd(a, m) = 1$.
    Here $a=3, m=100$. $\gcd(3, 100) = 1$.
    So, $3^{\phi(100)} = 3^{40} \equiv 1 \pmod{100}$.

9.  **Answer:**
    $30 = 2 \times 3 \times 5$.
    $\sigma(30) = \sigma(2)\sigma(3)\sigma(5) = (1+2)(1+3)(1+5) = 3 \times 4 \times 6 = 72$.
    $d(30) = d(2^1)d(3^1)d(5^1) = (1+1)(1+1)(1+1) = 2 \times 2 \times 2 = 8$.
    The divisors of 30 are 1, 2, 3, 5, 6, 10, 15, 30.
    Sum of divisors = $1+2+3+5+6+10+15+30 = 72$.
    Number of divisors = 8.

10. **Answer:**
    Modulo 11, $\phi(11) = 11-1 = 10$. We need an element with order 10.
    Let's check $g=2$:
    $2^1=2$
    $2^2=4$
    $2^3=8$
    $2^4=16 \equiv 5$
    $2^5=10 \equiv -1$
    $2^{10} \equiv (-1)^2 \equiv 1 \pmod{11}$.
    The order of 2 is 10, which is $\phi(11)$. So, 2 is a primitive root modulo 11.
    (Other primitive roots exist, e.g., 6, 7, 8).

11. **Answer:**
    We need to check if $x^2 \equiv 5 \pmod{13}$ has a solution. We can use the Legendre symbol $(5/13)$.
    $13 \equiv 1 \pmod 4$. By quadratic reciprocity, $(5/13) = (13/5)$.
    $13 \equiv 3 \pmod 5$. So, $(13/5) = (3/5)$.
    $5 \equiv 1 \pmod 4$. By quadratic reciprocity, $(3/5) = (5/3)$.
    $5 \equiv 2 \pmod 3$. So, $(5/3) = (2/3)$.
    For $(2/3)$, $3 \equiv 3 \pmod 8$. So, $(2/3) = -1$.
    Therefore, $(5/13) = -1$.
    5 is a quadratic non-residue modulo 13.

12. **Answer:**
    $(15/19) = (3/19)(5/19)$.
    For $(3/19)$: $3 \equiv 3 \pmod 4, 19 \equiv 3 \pmod 4$. So, $(3/19) = -(19/3)$.
    $19 \equiv 1 \pmod 3$. So, $(19/3) = (1/3)$.
    $(1/3) = 1$ (since $1^2 \equiv 1 \pmod 3$).
    So, $(3/19) = -(1) = -1$.

    For $(5/19)$: $5 \equiv 1 \pmod 4, 19 \equiv 3 \pmod 4$. So, $(5/19) = (19/5)$.
    $19 \equiv 4 \pmod 5$. So, $(19/5) = (4/5)$.
    $(4/5) = (2^2/5) = 1$.
    So, $(5/19) = 1$.

    Finally, $(15/19) = (3/19)(5/19) = (-1)(1) = -1$.
    15 is a quadratic non-residue modulo 19.

---

## Important Points to Remember

*   **Primes are building blocks:** Their unique factorization is crucial.
*   **GCD and Euclidean Algorithm:** Essential for many number theory problems and finding inverses.
*   **Modular Arithmetic Properties:** Understand how addition, subtraction, and multiplication behave modulo $m$.
*   **Linear Congruences:** Key to solving systems and many cryptographic steps. Remember the role of $\gcd(a, m)$.
*   **CRT:** A powerful tool for solving systems of congruences and for reconstructing messages.
*   **FLT and Euler's Theorem:** Fundamental for modular exponentiation and the security of RSA. Euler's Theorem is a generalization of FLT.
*   **$\phi(m)$ calculation:** Be comfortable with its properties and calculation for prime powers and products of primes.
*   **Primitive Roots:** Understand their definition and when they exist. They are generators for cyclic groups.
*   **Quadratic Residues:** Know the definition and the role of Legendre Symbol.
*   **Legendre Symbol Properties:** Especially Euler's Criterion and the Law of Quadratic Reciprocity, are powerful tools for calculation.
*   **$\gcd(a, m) = 1$ is often a key condition** for theorems and properties to hold (e.g., inverses, Euler's Theorem, quadratic residues).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
