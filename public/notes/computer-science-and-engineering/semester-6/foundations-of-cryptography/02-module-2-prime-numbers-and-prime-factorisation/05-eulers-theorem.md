---
title: "Euler’s Theorem"
subject: "FOUNDATIONS OF CRYPTOGRAPHY"
module: "Module 2: Prime numbers and Prime Factorisation "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bf0f"
status: "completed"
scrapedAt: "2026-05-20T16:53:34.061Z"
---
# FOUNDATIONS OF CRYPTOGRAPHY - Module 2: Prime Numbers and Prime Factorisation

## Topic: Euler's Theorem

### Introduction

Euler's Theorem is a fundamental result in number theory that has significant applications in cryptography, particularly in public-key cryptosystems like RSA. It provides a powerful tool for simplifying modular arithmetic, especially when dealing with large exponents. This topic will explore the statement of Euler's Theorem, its relationship with Fermat's Little Theorem, and its practical implications.

### Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   **State and explain Euler's Theorem.**
*   **Understand the concept of Euler's totient function ($\phi(n)$).**
*   **Prove Euler's Theorem (or understand the key ideas behind its proof).**
*   **Apply Euler's Theorem to simplify modular exponentiation.**
*   **Relate Euler's Theorem to Fermat's Little Theorem.**
*   **Identify applications of Euler's Theorem in cryptography.**

---

### 1. Euler's Totient Function ($\phi(n)$)

Before delving into Euler's Theorem, we must understand Euler's totient function, denoted by $\phi(n)$ (or $\varphi(n)$).

**Definition:**
Euler's totient function $\phi(n)$ counts the number of positive integers less than or equal to $n$ that are relatively prime to $n$. Two integers are relatively prime if their greatest common divisor (GCD) is 1.

**Key Properties and Calculation:**

*   **If $p$ is a prime number:**
    $\phi(p) = p - 1$
    *   *Explanation:* All integers from 1 to $p-1$ are relatively prime to a prime $p$.

*   **If $p$ is a prime number and $k \ge 1$:**
    $\phi(p^k) = p^k - p^{k-1} = p^k(1 - \frac{1}{p})$
    *   *Explanation:* The numbers not relatively prime to $p^k$ are the multiples of $p$: $p, 2p, 3p, \ldots, (p^{k-1})p$. There are $p^{k-1}$ such multiples. So, $\phi(p^k) = p^k - p^{k-1}$.

*   **If $m$ and $n$ are relatively prime (i.e., $\text{gcd}(m, n) = 1$):**
    $\phi(mn) = \phi(m)\phi(n)$
    *   *Explanation:* The totient function is multiplicative.

*   **General Formula for $\phi(n)$:**
    If the prime factorization of $n$ is $n = p_1^{k_1} p_2^{k_2} \cdots p_r^{k_r}$, then
    $\phi(n) = n \prod_{i=1}^{r} (1 - \frac{1}{p_i}) = p_1^{k_1-1}(p_1-1) p_2^{k_2-1}(p_2-1) \cdots p_r^{k_r-1}(p_r-1)$

**Examples of $\phi(n)$ Calculation:**

*   $\phi(7)$: Since 7 is prime, $\phi(7) = 7 - 1 = 6$.
    (The numbers are 1, 2, 3, 4, 5, 6)

*   $\phi(10)$: Prime factorization of 10 is $2 \times 5$.
    Using the multiplicative property: $\phi(10) = \phi(2) \phi(5) = (2-1)(5-1) = 1 \times 4 = 4$.
    Alternatively, using the general formula: $\phi(10) = 10(1 - \frac{1}{2})(1 - \frac{1}{5}) = 10(\frac{1}{2})(\frac{4}{5}) = 10 \times \frac{4}{10} = 4$.
    (The numbers relatively prime to 10 are 1, 3, 7, 9)

*   $\phi(12)$: Prime factorization of 12 is $2^2 \times 3$.
    $\phi(12) = \phi(2^2) \phi(3) = (2^2 - 2^{2-1})(3-1) = (4 - 2)(2) = 2 \times 2 = 4$.
    Alternatively: $\phi(12) = 12(1 - \frac{1}{2})(1 - \frac{1}{3}) = 12(\frac{1}{2})(\frac{2}{3}) = 12 \times \frac{2}{6} = 4$.
    (The numbers relatively prime to 12 are 1, 5, 7, 11)

*   $\phi(p^k)$: $\phi(3^2) = \phi(9)$. Numbers not relatively prime to 9 are multiples of 3: 3, 6, 9.
    So, $\phi(9) = 9 - 3 = 6$.
    Using the formula: $\phi(3^2) = 3^2 - 3^{2-1} = 9 - 3 = 6$.

---

### 2. Euler's Theorem

Euler's Theorem states a relationship between a number, its totient, and modular arithmetic.

**Statement of Euler's Theorem:**
If $a$ and $n$ are relatively prime positive integers (i.e., $\text{gcd}(a, n) = 1$), then:
$a^{\phi(n)} \equiv 1 \pmod{n}$

**Explanation:**
This theorem means that if you raise an integer $a$ to the power of $\phi(n)$ (where $\phi(n)$ is the totient of $n$), and $a$ and $n$ share no common factors other than 1, the result will have a remainder of 1 when divided by $n$.

**Example:**
Let $a = 3$ and $n = 10$.
We know $\text{gcd}(3, 10) = 1$, so they are relatively prime.
We calculated $\phi(10) = 4$.
According to Euler's Theorem: $3^{\phi(10)} \equiv 1 \pmod{10}$, which means $3^4 \equiv 1 \pmod{10}$.
Let's verify:
$3^1 = 3$
$3^2 = 9$
$3^3 = 27 \equiv 7 \pmod{10}$
$3^4 = 81 \equiv 1 \pmod{10}$
The theorem holds true.

---

### 3. Proof of Euler's Theorem (Intuitive Approach)

A formal proof of Euler's Theorem relies on group theory concepts. However, we can understand the key ideas using a combinatorial argument involving the set of numbers relatively prime to $n$.

**Key Idea:**
Consider the set $S = \{a_1, a_2, \ldots, a_{\phi(n)}\}$ of positive integers less than $n$ that are relatively prime to $n$.
When we multiply each element in $S$ by $a$ (where $\text{gcd}(a, n) = 1$), the resulting set of residues modulo $n$ is the same as the original set $S$, though the elements might be in a different order.

**Steps:**

1.  **Consider the set $S = \{a_1, a_2, \ldots, a_{\phi(n)}\}$ where $\text{gcd}(a_i, n) = 1$ and $1 \le a_i < n$.**
    The size of this set is $\phi(n)$.

2.  **Consider the set $aS = \{a \cdot a_1, a \cdot a_2, \ldots, a \cdot a_{\phi(n)}\}$.**
    We need to show that the residues of the elements in $aS$ modulo $n$ are precisely the elements of $S$ (in some order).

    *   **Property 1: All elements in $aS$ are relatively prime to $n$.**
        If $\text{gcd}(a, n) = 1$ and $\text{gcd}(a_i, n) = 1$, then $\text{gcd}(a \cdot a_i, n) = 1$. This is a property of GCDs.

    *   **Property 2: No two elements in $aS$ are congruent modulo $n$.**
        Suppose $a \cdot a_i \equiv a \cdot a_j \pmod{n}$ for $i \ne j$. Since $\text{gcd}(a, n) = 1$, we can multiply both sides by the multiplicative inverse of $a$ modulo $n$. This gives $a_i \equiv a_j \pmod{n}$. However, all $a_i$ are distinct and less than $n$. If $a_i \equiv a_j \pmod{n}$ and $1 \le a_i, a_j < n$, then it must be that $a_i = a_j$. This contradicts our assumption that $i \ne j$. Therefore, all $a \cdot a_i$ are distinct modulo $n$.

    *   **Property 3: All elements in $aS$ are within the range $[1, n-1]$ (when considered as residues).**
        Since $\text{gcd}(a \cdot a_i, n) = 1$, none of the residues $a \cdot a_i \pmod{n}$ can be 0. Also, if $a \cdot a_i \equiv 0 \pmod{n}$, it would imply $n | (a \cdot a_i)$, which is not possible as $\text{gcd}(a \cdot a_i, n) = 1$. Thus, the residues are between 1 and $n-1$.

3.  **Conclusion of the Set Equivalence:**
    The set of residues $\{a \cdot a_1 \pmod{n}, a \cdot a_2 \pmod{n}, \ldots, a \cdot a_{\phi(n)} \pmod{n}\}$ is a permutation of the set $S = \{a_1, a_2, \ldots, a_{\phi(n)}\}$.

4.  **Product Congruence:**
    Since the sets are the same (as sets of residues), their products must be congruent modulo $n$:
    $(a \cdot a_1) \cdot (a \cdot a_2) \cdots (a \cdot a_{\phi(n)}) \equiv a_1 \cdot a_2 \cdots a_{\phi(n)} \pmod{n}$
    $a^{\phi(n)} \cdot (a_1 \cdot a_2 \cdots a_{\phi(n)}) \equiv (a_1 \cdot a_2 \cdots a_{\phi(n)}) \pmod{n}$

5.  **Final Step:**
    Let $P = a_1 \cdot a_2 \cdots a_{\phi(n)}$. We know that $\text{gcd}(a_i, n) = 1$ for all $i$. Therefore, $\text{gcd}(P, n) = 1$.
    The congruence becomes: $a^{\phi(n)} \cdot P \equiv P \pmod{n}$.
    Since $\text{gcd}(P, n) = 1$, we can divide both sides by $P$ (or multiply by the multiplicative inverse of $P$ modulo $n$):
    $a^{\phi(n)} \equiv 1 \pmod{n}$.

---

### 4. Application: Simplifying Modular Exponentiation

Euler's Theorem is incredibly useful for reducing large exponents in modular arithmetic.

**How to use it:**
If $\text{gcd}(a, n) = 1$, then $a^k \pmod{n}$ can be simplified by reducing the exponent $k$ modulo $\phi(n)$.
Specifically, if $k = q \cdot \phi(n) + r$, where $0 \le r < \phi(n)$ (i.e., $k \equiv r \pmod{\phi(n)}$), then:
$a^k = a^{q \cdot \phi(n) + r} = (a^{\phi(n)})^q \cdot a^r$
Since $a^{\phi(n)} \equiv 1 \pmod{n}$:
$a^k \equiv (1)^q \cdot a^r \pmod{n}$
$a^k \equiv a^r \pmod{n}$

**This means that $a^k \equiv a^{k \pmod{\phi(n)}} \pmod{n}$, provided $\text{gcd}(a, n) = 1$.**

**Example:**
Calculate $7^{100} \pmod{10}$.
1.  Check if $\text{gcd}(7, 10) = 1$. Yes, it is.
2.  Calculate $\phi(10)$. We know $\phi(10) = 4$.
3.  Reduce the exponent 100 modulo $\phi(10) = 4$.
    $100 \pmod{4} = 0$.
    So, $7^{100} \equiv 7^0 \pmod{10}$.
    $7^{100} \equiv 1 \pmod{10}$.

**Example 2:**
Calculate $2^{1000} \pmod{13}$.
1.  Check if $\text{gcd}(2, 13) = 1$. Yes, 13 is prime, so it's relatively prime to any number not a multiple of 13.
2.  Calculate $\phi(13)$. Since 13 is prime, $\phi(13) = 13 - 1 = 12$.
3.  Reduce the exponent 1000 modulo $\phi(13) = 12$.
    $1000 \div 12$:
    $1000 = 12 \times 83 + 4$
    So, $1000 \equiv 4 \pmod{12}$.
4.  Therefore, $2^{1000} \equiv 2^4 \pmod{13}$.
5.  Calculate $2^4 \pmod{13}$:
    $2^4 = 16 \equiv 3 \pmod{13}$.
    So, $2^{1000} \equiv 3 \pmod{13}$.

**Important Note on Exponent 0:**
If $k \pmod{\phi(n)} = 0$, we replace the exponent with $\phi(n)$ itself, not 0, to avoid issues when $a=0$ or when the base is not truly 1. However, if $\text{gcd}(a, n)=1$, $a^{\phi(n)} \equiv 1 \pmod{n}$, so $a^0 \equiv 1 \pmod n$ is also correct. It's safer and more consistent to use $a^{\phi(n)}$ in place of $a^0$ when the remainder is 0. The rule is $a^k \equiv a^{k \pmod{\phi(n)}} \pmod{n}$, where if $k \pmod{\phi(n)} = 0$, we understand this as $a^{\phi(n)}$.

Let's re-evaluate $7^{100} \pmod{10}$.
$100 \pmod{4} = 0$.
So, $7^{100} \equiv 7^4 \pmod{10}$.
$7^1 = 7$
$7^2 = 49 \equiv 9 \pmod{10}$
$7^3 \equiv 9 \times 7 = 63 \equiv 3 \pmod{10}$
$7^4 \equiv 3 \times 7 = 21 \equiv 1 \pmod{10}$.
The result is the same, but using the exponent $\phi(n)$ when the remainder is 0 is a robust practice.

---

### 5. Relation to Fermat's Little Theorem

Fermat's Little Theorem (FLT) is a special case of Euler's Theorem.

**Fermat's Little Theorem Statement:**
If $p$ is a prime number, then for any integer $a$ not divisible by $p$, we have:
$a^{p-1} \equiv 1 \pmod{p}$

**Connection to Euler's Theorem:**
Euler's Theorem states: $a^{\phi(n)} \equiv 1 \pmod{n}$ for $\text{gcd}(a, n) = 1$.
If $n$ is a prime number $p$, then $\phi(p) = p-1$.
Substituting $n=p$ into Euler's Theorem:
$a^{\phi(p)} \equiv 1 \pmod{p}$
$a^{p-1} \equiv 1 \pmod{p}$
This is exactly Fermat's Little Theorem.

**Therefore, Fermat's Little Theorem is a direct consequence of Euler's Theorem when the modulus $n$ is a prime number.**

**Example of FLT:**
Calculate $3^{10} \pmod{7}$.
1.  $p=7$ is prime. $\text{gcd}(3, 7) = 1$.
2.  According to FLT, $3^{7-1} \equiv 3^6 \equiv 1 \pmod{7}$.
3.  We need to calculate $3^{10} \pmod{7}$.
    $10 = 1 \times 6 + 4$.
    $3^{10} = 3^{6+4} = 3^6 \cdot 3^4 \equiv 1 \cdot 3^4 \pmod{7}$.
    $3^4 = 81$.
    $81 \div 7$: $81 = 11 \times 7 + 4$.
    So, $81 \equiv 4 \pmod{7}$.
    Thus, $3^{10} \equiv 4 \pmod{7}$.

---

### 6. Applications in Cryptography

Euler's Theorem is a cornerstone of modern cryptography, particularly in the **RSA algorithm**.

*   **RSA Algorithm:**
    *   RSA relies on the difficulty of factoring large numbers.
    *   The public key and private key are generated using large prime numbers $p$ and $q$.
    *   The modulus $n$ is the product of these primes: $n = pq$.
    *   The totient of $n$ is $\phi(n) = \phi(pq) = \phi(p)\phi(q) = (p-1)(q-1)$.
    *   In RSA, a message $m$ is encrypted as $c = m^e \pmod{n}$, where $e$ is the public exponent.
    *   The decryption is performed as $m = c^d \pmod{n}$, where $d$ is the private exponent.
    *   The relationship between $e$ and $d$ is such that $ed \equiv 1 \pmod{\phi(n)}$.
    *   Using Euler's Theorem:
        $c^d \equiv (m^e)^d \pmod{n}$
        $c^d \equiv m^{ed} \pmod{n}$
        Since $ed = k \cdot \phi(n) + 1$ for some integer $k$:
        $m^{ed} \equiv m^{k \cdot \phi(n) + 1} \pmod{n}$
        $m^{ed} \equiv (m^{\phi(n)})^k \cdot m^1 \pmod{n}$
        If $\text{gcd}(m, n) = 1$, then $m^{\phi(n)} \equiv 1 \pmod{n}$.
        $m^{ed} \equiv (1)^k \cdot m \pmod{n}$
        $m^{ed} \equiv m \pmod{n}$
        This shows why RSA decryption works correctly. The condition $\text{gcd}(m, n) = 1$ is usually met. If not, there's a slightly more general result (Carmichael function) or specific handling required, but for practical purposes, Euler's Theorem is the foundation.

*   **Efficient Modular Exponentiation:**
    As demonstrated in Section 4, Euler's Theorem allows us to compute $a^b \pmod{n}$ efficiently by reducing the exponent $b$ modulo $\phi(n)$, even when $b$ is very large. This is crucial for cryptographic operations that involve exponentiation with massive numbers.

---

### Important Points to Remember

*   **Relative Primality is Key:** Euler's Theorem ($a^{\phi(n)} \equiv 1 \pmod{n}$) *only* holds when $a$ and $n$ are relatively prime ($\text{gcd}(a, n) = 1$).
*   **Euler's Totient Function ($\phi(n)$):** This function is central to Euler's Theorem. It counts numbers less than or equal to $n$ that are coprime to $n$.
*   **Calculating $\phi(n)$:**
    *   $\phi(p) = p-1$ for prime $p$.
    *   $\phi(p^k) = p^k - p^{k-1}$.
    *   $\phi(mn) = \phi(m)\phi(n)$ if $\text{gcd}(m, n) = 1$.
    *   General formula: $\phi(n) = n \prod_{p|n} (1 - \frac{1}{p})$.
*   **Simplifying Exponents:** For $a^b \pmod{n}$ where $\text{gcd}(a, n) = 1$, we can compute $a^{b \pmod{\phi(n)}} \pmod{n}$.
*   **Fermat's Little Theorem is a Special Case:** FLT is Euler's Theorem applied to prime moduli.
*   **RSA Foundation:** Euler's Theorem is essential for understanding why RSA encryption and decryption work.

---

### Practice Questions

1.  Calculate $\phi(24)$.
2.  Calculate $5^{100} \pmod{12}$.
3.  Calculate $3^{500} \pmod{17}$.
4.  Is it true that $2^{20} \equiv 1 \pmod{30}$? Justify your answer using Euler's Theorem.
5.  Show that if $\text{gcd}(a, n) = 1$, then $a^{\phi(n)k+1} \equiv a \pmod{n}$ for any positive integer $k$.

---

### Answers to Practice Questions

1.  **Calculate $\phi(24)$.**
    Prime factorization of 24 is $2^3 \times 3^1$.
    $\phi(24) = \phi(2^3) \phi(3)$
    $\phi(2^3) = 2^3 - 2^{3-1} = 8 - 4 = 4$.
    $\phi(3) = 3 - 1 = 2$.
    $\phi(24) = 4 \times 2 = 8$.
    *(Alternatively: $\phi(24) = 24(1 - \frac{1}{2})(1 - \frac{1}{3}) = 24(\frac{1}{2})(\frac{2}{3}) = 24 \times \frac{2}{6} = 24 \times \frac{1}{3} = 8$)*.

2.  **Calculate $5^{100} \pmod{12}$.**
    First, check $\text{gcd}(5, 12)$. $\text{gcd}(5, 12) = 1$.
    Calculate $\phi(12)$. Prime factorization of 12 is $2^2 \times 3$.
    $\phi(12) = \phi(2^2)\phi(3) = (2^2 - 2^1)(3-1) = (4-2)(2) = 2 \times 2 = 4$.
    Now, reduce the exponent 100 modulo $\phi(12) = 4$.
    $100 \pmod{4} = 0$.
    So, $5^{100} \equiv 5^4 \pmod{12}$.
    $5^1 = 5$
    $5^2 = 25 \equiv 1 \pmod{12}$
    $5^3 \equiv 1 \times 5 = 5 \pmod{12}$
    $5^4 \equiv 5 \times 5 = 25 \equiv 1 \pmod{12}$.
    Therefore, $5^{100} \equiv 1 \pmod{12}$.

3.  **Calculate $3^{500} \pmod{17}$.**
    First, check $\text{gcd}(3, 17)$. Since 17 is prime, $\text{gcd}(3, 17) = 1$.
    Calculate $\phi(17)$. Since 17 is prime, $\phi(17) = 17 - 1 = 16$.
    Now, reduce the exponent 500 modulo $\phi(17) = 16$.
    $500 \div 16$:
    $500 = 16 \times 31 + 4$.
    So, $500 \equiv 4 \pmod{16}$.
    Therefore, $3^{500} \equiv 3^4 \pmod{17}$.
    $3^4 = 81$.
    $81 \div 17$: $81 = 4 \times 17 + 13$.
    So, $81 \equiv 13 \pmod{17}$.
    Therefore, $3^{500} \equiv 13 \pmod{17}$.

4.  **Is it true that $2^{20} \equiv 1 \pmod{30}$? Justify your answer using Euler's Theorem.**
    First, check $\text{gcd}(2, 30)$. $\text{gcd}(2, 30) = 2$, which is not 1.
    Euler's Theorem *requires* that the base and modulus be relatively prime. Since $\text{gcd}(2, 30) \neq 1$, we cannot directly apply Euler's Theorem to conclude $2^{20} \equiv 1 \pmod{30}$.

    Let's check the actual values:
    $2^{20} \pmod{30}$.
    $2^1 = 2$
    $2^2 = 4$
    $2^3 = 8$
    $2^4 = 16$
    $2^5 = 32 \equiv 2 \pmod{30}$
    The powers of 2 modulo 30 repeat with a cycle of 4: $2, 4, 8, 16, 2, 4, 8, 16, \ldots$
    $2^{20} \pmod{30}$ will be the same as $2^{20 \pmod{4}} \pmod{30}$ if the cycle length was related to $\phi(30)$. But here the base is not coprime to the modulus.
    Since $20 \pmod 4 = 0$, if it were a cycle, it would correspond to the last element in the cycle, which is 16.
    $2^{20} \pmod{30} \equiv 2^{5 \times 4} \pmod{30}$. Since $2^5 \equiv 2 \pmod{30}$,
    $2^{20} = (2^5)^4 \equiv 2^4 \pmod{30}$
    $2^4 = 16$.
    So, $2^{20} \equiv 16 \pmod{30}$.
    Therefore, it is **not true** that $2^{20} \equiv 1 \pmod{30}$.

    *Crucial takeaway: Always check the coprime condition before applying Euler's Theorem.*

5.  **Show that if $\text{gcd}(a, n) = 1$, then $a^{\phi(n)k+1} \equiv a \pmod{n}$ for any positive integer $k$.**
    We are given that $\text{gcd}(a, n) = 1$.
    By Euler's Theorem, we know that $a^{\phi(n)} \equiv 1 \pmod{n}$.
    We want to show that $a^{\phi(n)k+1} \equiv a \pmod{n}$.
    Let's rewrite the left side:
    $a^{\phi(n)k+1} = a^{\phi(n)k} \cdot a^1 = (a^{\phi(n)})^k \cdot a$.
    Substitute $a^{\phi(n)} \equiv 1 \pmod{n}$ into the expression:
    $a^{\phi(n)k+1} \equiv (1)^k \cdot a \pmod{n}$.
    Since $(1)^k = 1$ for any integer $k$:
    $a^{\phi(n)k+1} \equiv 1 \cdot a \pmod{n}$.
    $a^{\phi(n)k+1} \equiv a \pmod{n}$.
    This proves the statement. This is essentially the step used in RSA decryption where $ed \equiv 1 \pmod{\phi(n)}$. If $ed = k\phi(n) + 1$, then $m^{ed} = m^{k\phi(n)+1} \equiv m \pmod n$.

---
