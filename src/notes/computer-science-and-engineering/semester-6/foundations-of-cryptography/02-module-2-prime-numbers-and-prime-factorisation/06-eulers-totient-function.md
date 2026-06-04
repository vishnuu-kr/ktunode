---
title: "Euler’s Totient Function"
subject: "FOUNDATIONS OF CRYPTOGRAPHY"
module: "Module 2: Prime numbers and Prime Factorisation "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bf10"
status: "completed"
scrapedAt: "2026-05-20T16:53:34.776Z"
---
# FOUNDATIONS OF CRYPTOGRAPHY - Module 2: Prime Numbers and Prime Factorisation

## Topic: Euler's Totient Function

---

### Learning Outcomes:

*   **Understanding the Definition:** Define Euler's totient function ($\phi(n)$) and its purpose.
*   **Calculating $\phi(n)$:** Learn and apply methods to calculate $\phi(n)$ for a given integer $n$.
*   **Properties of $\phi(n)$:** Understand and utilize key properties of Euler's totient function.
*   **Applications in Cryptography:** Recognize the significance of $\phi(n)$ in cryptographic systems.

---

### 1. Introduction to Euler's Totient Function

**Key Concept:** Euler's totient function, denoted by $\phi(n)$ (or $\varphi(n)$), is an arithmetic function that counts the number of positive integers up to a given integer $n$ that are relatively prime to $n$.

**Definition:**
For a positive integer $n$, Euler's totient function $\phi(n)$ is defined as:
$$ \phi(n) = |\{k \in \mathbb{Z}^+ : 1 \le k \le n \text{ and } \gcd(k, n) = 1\}| $$
where $\gcd(k, n)$ is the greatest common divisor of $k$ and $n$.

**Purpose:**
*   It counts numbers that "play well" with $n$ in terms of divisibility.
*   It's fundamental to understanding modular arithmetic and forms the basis for many cryptographic algorithms, most notably RSA.

**Example 1.1: Calculating $\phi(n)$ for small values**

*   **$\phi(1)$:**
    *   Integers from 1 to 1: {1}
    *   $\gcd(1, 1) = 1$.
    *   So, $\phi(1) = 1$.

*   **$\phi(2)$:**
    *   Integers from 1 to 2: {1, 2}
    *   $\gcd(1, 2) = 1$
    *   $\gcd(2, 2) = 2$
    *   So, $\phi(2) = 1$.

*   **$\phi(3)$:**
    *   Integers from 1 to 3: {1, 2, 3}
    *   $\gcd(1, 3) = 1$
    *   $\gcd(2, 3) = 1$
    *   $\gcd(3, 3) = 3$
    *   So, $\phi(3) = 2$.

*   **$\phi(4)$:**
    *   Integers from 1 to 4: {1, 2, 3, 4}
    *   $\gcd(1, 4) = 1$
    *   $\gcd(2, 4) = 2$
    *   $\gcd(3, 4) = 1$
    *   $\gcd(4, 4) = 4$
    *   So, $\phi(4) = 2$.

*   **$\phi(5)$:**
    *   Integers from 1 to 5: {1, 2, 3, 4, 5}
    *   $\gcd(1, 5) = 1$
    *   $\gcd(2, 5) = 1$
    *   $\gcd(3, 5) = 1$
    *   $\gcd(4, 5) = 1$
    *   $\gcd(5, 5) = 5$
    *   So, $\phi(5) = 4$.

*   **$\phi(6)$:**
    *   Integers from 1 to 6: {1, 2, 3, 4, 5, 6}
    *   $\gcd(1, 6) = 1$
    *   $\gcd(2, 6) = 2$
    *   $\gcd(3, 6) = 3$
    *   $\gcd(4, 6) = 2$
    *   $\gcd(5, 6) = 1$
    *   $\gcd(6, 6) = 6$
    *   So, $\phi(6) = 2$.

---

### 2. Calculating $\phi(n)$

**2.1 Formula for Prime Numbers**

**Key Concept:** If $p$ is a prime number, then all integers from 1 to $p-1$ are relatively prime to $p$.

**Formula:**
For a prime number $p$:
$$ \phi(p) = p - 1 $$

**Example 2.1.1:**
*   $\phi(7)$: Since 7 is prime, $\phi(7) = 7 - 1 = 6$. The numbers are {1, 2, 3, 4, 5, 6}.
*   $\phi(11)$: Since 11 is prime, $\phi(11) = 11 - 1 = 10$.

**2.2 Formula for Prime Powers**

**Key Concept:** For a prime $p$ and a positive integer $k$, the integers not relatively prime to $p^k$ are the multiples of $p$ up to $p^k$.

**Formula:**
For a prime $p$ and an integer $k \ge 1$:
$$ \phi(p^k) = p^k - p^{k-1} = p^k \left(1 - \frac{1}{p}\right) $$

**Derivation:**
The integers from 1 to $p^k$ are $\{1, 2, \ldots, p^k\}$.
The integers not relatively prime to $p^k$ are those divisible by $p$. These are $p, 2p, 3p, \ldots, m \cdot p$ where $m \cdot p \le p^k$.
The largest multiple of $p$ less than or equal to $p^k$ is $p^k$ itself, which is $p^{k-1} \cdot p$.
So, there are $p^{k-1}$ multiples of $p$ in the range $[1, p^k]$.
Therefore, the number of integers relatively prime to $p^k$ is:
Total numbers - Numbers divisible by $p$
$= p^k - p^{k-1}$
$= p^{k-1}(p - 1)$
$= p^k(1 - \frac{1}{p})$

**Example 2.2.1:**
*   $\phi(4) = \phi(2^2)$: Using the formula, $\phi(2^2) = 2^2 - 2^{2-1} = 4 - 2^1 = 4 - 2 = 2$. (Matches Example 1.1)
*   $\phi(8) = \phi(2^3)$: $\phi(2^3) = 2^3 - 2^{3-1} = 8 - 2^2 = 8 - 4 = 4$. The numbers are {1, 3, 5, 7}.
*   $\phi(9) = \phi(3^2)$: $\phi(3^2) = 3^2 - 3^{2-1} = 9 - 3^1 = 9 - 3 = 6$. The numbers are {1, 2, 4, 5, 7, 8}.
*   $\phi(27) = \phi(3^3)$: $\phi(3^3) = 3^3 - 3^{3-1} = 27 - 3^2 = 27 - 9 = 18$.

**2.3 General Formula using Prime Factorization**

**Key Concept:** Euler's totient function is a multiplicative function. This means if $\gcd(m, n) = 1$, then $\phi(m \cdot n) = \phi(m) \cdot \phi(n)$.

**Theorem (Multiplicative Property):**
If $\gcd(m, n) = 1$, then $\phi(mn) = \phi(m)\phi(n)$.

**General Formula:**
If the prime factorization of $n$ is given by:
$$ n = p_1^{k_1} p_2^{k_2} \cdots p_r^{k_r} $$
where $p_1, p_2, \ldots, p_r$ are distinct prime numbers and $k_1, k_2, \ldots, k_r$ are positive integers, then:
$$ \phi(n) = \phi(p_1^{k_1}) \phi(p_2^{k_2}) \cdots \phi(p_r^{k_r}) $$
Using the formula for prime powers:
$$ \phi(n) = \left(p_1^{k_1} - p_1^{k_1-1}\right) \left(p_2^{k_2} - p_2^{k_2-1}\right) \cdots \left(p_r^{k_r} - p_r^{k_r-1}\right) $$
This can also be written as:
$$ \phi(n) = p_1^{k_1}\left(1 - \frac{1}{p_1}\right) p_2^{k_2}\left(1 - \frac{1}{p_2}\right) \cdots p_r^{k_r}\left(1 - \frac{1}{p_r}\right) $$
$$ \phi(n) = \left(p_1^{k_1} p_2^{k_2} \cdots p_r^{k_r}\right) \left(1 - \frac{1}{p_1}\right) \left(1 - \frac{1}{p_2}\right) \cdots \left(1 - \frac{1}{p_r}\right) $$
$$ \phi(n) = n \prod_{p|n} \left(1 - \frac{1}{p}\right) $$
where the product is over all distinct prime factors $p$ of $n$.

**Example 2.3.1: Calculating $\phi(n)$ for composite numbers**

*   **$\phi(10)$:**
    *   Prime factorization of 10 is $2^1 \cdot 5^1$. The distinct prime factors are 2 and 5.
    *   Using the multiplicative property: $\phi(10) = \phi(2) \cdot \phi(5)$.
    *   Since 2 and 5 are prime: $\phi(2) = 2-1 = 1$, $\phi(5) = 5-1 = 4$.
    *   $\phi(10) = 1 \cdot 4 = 4$.
    *   Numbers relatively prime to 10 are {1, 3, 7, 9}. (Correct)
    *   Using the general formula: $\phi(10) = 10 \left(1 - \frac{1}{2}\right) \left(1 - \frac{1}{5}\right) = 10 \left(\frac{1}{2}\right) \left(\frac{4}{5}\right) = 10 \cdot \frac{4}{10} = 4$.

*   **$\phi(12)$:**
    *   Prime factorization of 12 is $2^2 \cdot 3^1$. The distinct prime factors are 2 and 3.
    *   $\phi(12) = \phi(2^2) \cdot \phi(3^1)$.
    *   $\phi(2^2) = 2^2 - 2^1 = 4 - 2 = 2$.
    *   $\phi(3^1) = 3 - 1 = 2$.
    *   $\phi(12) = 2 \cdot 2 = 4$.
    *   Numbers relatively prime to 12 are {1, 5, 7, 11}. (Correct)
    *   Using the general formula: $\phi(12) = 12 \left(1 - \frac{1}{2}\right) \left(1 - \frac{1}{3}\right) = 12 \left(\frac{1}{2}\right) \left(\frac{2}{3}\right) = 12 \cdot \frac{2}{6} = 12 \cdot \frac{1}{3} = 4$.

*   **$\phi(30)$:**
    *   Prime factorization of 30 is $2^1 \cdot 3^1 \cdot 5^1$. Distinct prime factors are 2, 3, 5.
    *   $\phi(30) = \phi(2) \cdot \phi(3) \cdot \phi(5) = (2-1) \cdot (3-1) \cdot (5-1) = 1 \cdot 2 \cdot 4 = 8$.
    *   Using the general formula: $\phi(30) = 30 \left(1 - \frac{1}{2}\right) \left(1 - \frac{1}{3}\right) \left(1 - \frac{1}{5}\right) = 30 \left(\frac{1}{2}\right) \left(\frac{2}{3}\right) \left(\frac{4}{5}\right) = 30 \cdot \frac{8}{30} = 8$.

---

### 3. Properties of Euler's Totient Function

**Property 3.1: Multiplicative Function**
As stated earlier, if $\gcd(m, n) = 1$, then $\phi(mn) = \phi(m)\phi(n)$.

**Property 3.2: $\phi(p^k) = p^k - p^{k-1}$**
This is the formula for prime powers, derived in Section 2.2.

**Property 3.3: $\phi(p) = p - 1$**
This is the formula for prime numbers, derived in Section 2.1.

**Property 3.4: If $n > 2$ and $n$ is even, then $\phi(n)$ is even.**
*   If $n = 2^k$ with $k > 1$, then $\phi(n) = 2^k - 2^{k-1} = 2^{k-1}(2-1) = 2^{k-1}$. For $k > 1$, $k-1 \ge 1$, so $\phi(n)$ is even.
*   If $n$ has an odd prime factor $p$, then $n = p^k \cdot m$ where $\gcd(p^k, m) = 1$.
    *   If $n$ is even and $n > 2$, then $n$ must have a factor of 2. So $n = 2^a \cdot b$, where $b$ is odd and $a \ge 1$.
    *   If $a=1$, $n = 2 \cdot b$. $\phi(n) = \phi(2) \cdot \phi(b) = 1 \cdot \phi(b)$. If $b > 1$, $\phi(b)$ can be odd (e.g., $\phi(3)=2$, $\phi(5)=4$, $\phi(p)=p-1$). Ah, this statement is not universally true for *all* even $n>2$. Let's rephrase and clarify.

    **Revised Property 3.4:** If $n > 2$, then $\phi(n)$ is even.
    *   **Case 1: $n$ has an odd prime factor $p$.**
        Let $n = p^k \cdot m$, where $\gcd(p^k, m) = 1$.
        Then $\phi(n) = \phi(p^k) \phi(m)$.
        $\phi(p^k) = p^k - p^{k-1} = p^{k-1}(p-1)$. Since $p$ is an odd prime, $p-1$ is even. Thus $\phi(p^k)$ is even.
        If $\phi(p^k)$ is even, then $\phi(n) = \text{even} \cdot \phi(m)$ is even.
    *   **Case 2: $n$ has no odd prime factors.**
        This means $n$ must be a power of 2. So $n = 2^k$ for some $k \ge 1$.
        If $n > 2$, then $k > 1$.
        $\phi(n) = \phi(2^k) = 2^k - 2^{k-1} = 2^{k-1}(2-1) = 2^{k-1}$.
        Since $k > 1$, $k-1 \ge 1$. Therefore, $\phi(n) = 2^{k-1}$ is even.
    *   **Conclusion:** For any $n > 2$, $\phi(n)$ is even.

**Property 3.5: Euler's Totient Theorem**
**Key Concept:** This theorem relates modular exponentiation to Euler's totient function.

**Theorem:**
If $a$ and $n$ are relatively prime positive integers (i.e., $\gcd(a, n) = 1$), then:
$$ a^{\phi(n)} \equiv 1 \pmod{n} $$

**Significance:** This is a generalization of Fermat's Little Theorem (which states $a^{p-1} \equiv 1 \pmod{p}$ for prime $p$ and $\gcd(a,p)=1$).

**Example 3.5.1:**
*   Let $a=3$ and $n=10$. We know $\gcd(3, 10) = 1$.
*   $\phi(10) = 4$.
*   According to Euler's Totient Theorem, $3^{\phi(10)} \equiv 1 \pmod{10}$.
*   $3^4 = 81$.
*   $81 \equiv 1 \pmod{10}$. (Correct)

*   Let $a=5$ and $n=12$. We know $\gcd(5, 12) = 1$.
*   $\phi(12) = 4$.
*   According to Euler's Totient Theorem, $5^{\phi(12)} \equiv 1 \pmod{12}$.
*   $5^4 = 625$.
*   $625 \div 12$: $625 = 12 \times 52 + 1$.
*   $625 \equiv 1 \pmod{12}$. (Correct)

**Property 3.6: If $n = p$ (a prime number), then $\phi(n) = n-1$.**
This is a direct consequence of Property 3.3.

**Property 3.7: If $n = p^k$, then $\phi(n) = p^k - p^{k-1}$.**
This is a direct consequence of Property 3.2.

**Property 3.8: If $\gcd(a, n) = 1$, then $\phi(an) = \phi(a)\phi(n)$ if and only if $\gcd(a, n)=1$.**
This reiterates the multiplicative property and its condition.

---

### 4. Applications in Cryptography

**Key Concept:** Euler's totient function is a cornerstone of modern public-key cryptography, particularly the RSA algorithm.

**4.1 RSA Algorithm**

**How $\phi(n)$ is used:**
1.  **Key Generation:**
    *   Choose two distinct large prime numbers, $p$ and $q$.
    *   Calculate $n = p \cdot q$. This $n$ is the modulus for both public and private keys.
    *   Calculate $\phi(n) = \phi(p \cdot q)$. Since $p$ and $q$ are distinct primes, $\gcd(p, q) = 1$.
        Using the multiplicative property: $\phi(n) = \phi(p) \cdot \phi(q) = (p-1)(q-1)$.
    *   Choose a public exponent $e$ such that $1 < e < \phi(n)$ and $\gcd(e, \phi(n)) = 1$.
    *   Calculate the private exponent $d$ such that $d \cdot e \equiv 1 \pmod{\phi(n)}$. This means $d$ is the modular multiplicative inverse of $e$ modulo $\phi(n)$.

2.  **Encryption:**
    *   To encrypt a message $m$ (represented as an integer where $0 \le m < n$), the sender computes the ciphertext $c$:
        $$ c = m^e \pmod{n} $$

3.  **Decryption:**
    *   The recipient uses their private key $(d, n)$ to decrypt the ciphertext $c$:
        $$ m = c^d \pmod{n} $$

**Why it works (using Euler's Totient Theorem):**
The decryption process works because:
$$ c^d \equiv (m^e)^d \pmod{n} $$
$$ c^d \equiv m^{ed} \pmod{n} $$
We chose $d$ such that $ed \equiv 1 \pmod{\phi(n)}$. This means $ed = k \cdot \phi(n) + 1$ for some integer $k$.
So,
$$ m^{ed} = m^{k \cdot \phi(n) + 1} = m^{k \cdot \phi(n)} \cdot m^1 = (m^{\phi(n)})^k \cdot m $$
By Euler's Totient Theorem, if $\gcd(m, n) = 1$, then $m^{\phi(n)} \equiv 1 \pmod{n}$.
Therefore,
$$ (m^{\phi(n)})^k \cdot m \equiv 1^k \cdot m \equiv m \pmod{n} $$
Thus, $c^d \equiv m \pmod{n}$.

**Important Note:** This holds even if $\gcd(m, n) \ne 1$. If $\gcd(m, n) \ne 1$, then $m$ must share a prime factor with $n$. Since $n=pq$, $m$ must be a multiple of $p$ or $q$ (or both). The proof in this case is slightly more involved but relies on the same principles extended via the Chinese Remainder Theorem.

**4.2 Other Applications**

*   **Pseudorandom Number Generators:** $\phi(n)$ is used in the design of certain pseudorandom number generators.
*   **Discrete Logarithm Problem:** Understanding $\phi(n)$ is crucial for analyzing the difficulty of the discrete logarithm problem in the multiplicative group of integers modulo $n$, $(\mathbb{Z}/n\mathbb{Z})^\times$.

---

### 5. Practice Questions and Exercises

**Instructions:** Calculate $\phi(n)$ for the following values of $n$.

**Question 1:**
Calculate $\phi(17)$.

**Question 2:**
Calculate $\phi(36)$.

**Question 3:**
Calculate $\phi(100)$.

**Question 4:**
Calculate $\phi(99)$.

**Question 5:**
Given that $\phi(n) = 12$, find a possible value for $n$.

**Question 6:**
Let $n=pq$ where $p$ and $q$ are distinct primes. If $\phi(n)=40$, find possible pairs of $(p,q)$.

---

### Answers to Practice Questions

**Answer 1:**
17 is a prime number.
$\phi(17) = 17 - 1 = 16$.

**Answer 2:**
Prime factorization of 36 is $2^2 \cdot 3^2$.
$\phi(36) = \phi(2^2) \cdot \phi(3^2)$
$\phi(2^2) = 2^2 - 2^1 = 4 - 2 = 2$.
$\phi(3^2) = 3^2 - 3^1 = 9 - 3 = 6$.
$\phi(36) = 2 \cdot 6 = 12$.

Alternatively, using the formula:
$\phi(36) = 36 \left(1 - \frac{1}{2}\right) \left(1 - \frac{1}{3}\right) = 36 \left(\frac{1}{2}\right) \left(\frac{2}{3}\right) = 36 \cdot \frac{2}{6} = 36 \cdot \frac{1}{3} = 12$.

**Answer 3:**
Prime factorization of 100 is $2^2 \cdot 5^2$.
$\phi(100) = \phi(2^2) \cdot \phi(5^2)$
$\phi(2^2) = 2^2 - 2^1 = 4 - 2 = 2$.
$\phi(5^2) = 5^2 - 5^1 = 25 - 5 = 20$.
$\phi(100) = 2 \cdot 20 = 40$.

Alternatively, using the formula:
$\phi(100) = 100 \left(1 - \frac{1}{2}\right) \left(1 - \frac{1}{5}\right) = 100 \left(\frac{1}{2}\right) \left(\frac{4}{5}\right) = 100 \cdot \frac{4}{10} = 40$.

**Answer 4:**
Prime factorization of 99 is $3^2 \cdot 11^1$.
$\phi(99) = \phi(3^2) \cdot \phi(11^1)$
$\phi(3^2) = 3^2 - 3^1 = 9 - 3 = 6$.
$\phi(11^1) = 11 - 1 = 10$.
$\phi(99) = 6 \cdot 10 = 60$.

Alternatively, using the formula:
$\phi(99) = 99 \left(1 - \frac{1}{3}\right) \left(1 - \frac{1}{11}\right) = 99 \left(\frac{2}{3}\right) \left(\frac{10}{11}\right) = 99 \cdot \frac{20}{33} = 3 \cdot 20 = 60$.

**Answer 5:**
We need to find $n$ such that $\phi(n) = 12$.
Possible scenarios for $\phi(n)=12$:
*   $n$ is prime: $p-1=12 \implies p=13$. So, $n=13$ is a possibility. $\phi(13) = 12$.
*   $n=p^k$:
    *   $\phi(p^2) = p^2 - p = p(p-1) = 12$. No integer solution for $p$.
    *   $\phi(p^3) = p^3 - p^2 = p^2(p-1) = 12$. No integer solution for $p$.
    *   $\phi(p^k) = p^k(1-1/p) = p^{k-1}(p-1) = 12$.
        If $p=2$, $2^{k-1}(1)=12 \implies 2^{k-1}=12$, no integer $k$.
        If $p=3$, $3^{k-1}(2)=12 \implies 3^{k-1}=6$, no integer $k$.
        If $p=5$, $5^{k-1}(4)=12 \implies 5^{k-1}=3$, no integer $k$.
        If $p=7$, $7^{k-1}(6)=12 \implies 7^{k-1}=2$, no integer $k$.
        If $p=11$, $11^{k-1}(10)=12$, no integer $k$.
        If $p=13$, $13^{k-1}(12)=12 \implies 13^{k-1}=1 \implies k-1=0 \implies k=1$. This gives $n=13^1=13$.
*   $n=pq$ (distinct primes):
    *   $\phi(pq) = (p-1)(q-1) = 12$.
    *   Possible factor pairs of 12: (1, 12), (2, 6), (3, 4).
        *   $p-1=1, q-1=12 \implies p=2, q=13$. $n=2 \cdot 13 = 26$. $\phi(26) = \phi(2)\phi(13) = 1 \cdot 12 = 12$. Valid.
        *   $p-1=2, q-1=6 \implies p=3, q=7$. $n=3 \cdot 7 = 21$. $\phi(21) = \phi(3)\phi(7) = 2 \cdot 6 = 12$. Valid.
        *   $p-1=3, q-1=4 \implies p=4$ (not prime), invalid.
*   $n=p^2q$:
    *   $\phi(p^2q) = \phi(p^2)\phi(q) = (p^2-p)(q-1) = p(p-1)(q-1) = 12$.
        *   If $p=2$, $2(1)(q-1)=12 \implies 2(q-1)=12 \implies q-1=6 \implies q=7$. $n=2^2 \cdot 7 = 4 \cdot 7 = 28$. $\phi(28) = \phi(4)\phi(7) = 2 \cdot 6 = 12$. Valid.
        *   If $p=3$, $3(2)(q-1)=12 \implies 6(q-1)=12 \implies q-1=2 \implies q=3$. But $p$ and $q$ must be distinct. Invalid.

Possible values for $n$ include 13, 21, 26, 28. The question asks for "a possible value".

**Answer 6:**
We are given $n=pq$ where $p$ and $q$ are distinct primes, and $\phi(n) = 40$.
So, $\phi(pq) = (p-1)(q-1) = 40$.
We need to find pairs of factors of 40: (1, 40), (2, 20), (4, 10), (5, 8).
Let $p-1$ and $q-1$ be these pairs.
*   $p-1=1, q-1=40 \implies p=2, q=41$. Both are prime. $n=2 \cdot 41 = 82$.
*   $p-1=2, q-1=20 \implies p=3, q=21$. 21 is not prime. Invalid.
*   $p-1=4, q-1=10 \implies p=5, q=11$. Both are prime. $n=5 \cdot 11 = 55$.
*   $p-1=5, q-1=8 \implies p=6$. 6 is not prime. Invalid.

Possible pairs $(p,q)$ are $(2, 41)$ and $(5, 11)$.
Therefore, possible values for $n$ are 82 and 55. The question asks for possible pairs of $(p,q)$.

---

### Important Points to Remember:

*   **$\phi(n)$ counts** the positive integers up to $n$ that are **relatively prime** to $n$.
*   **Prime numbers are easy:** $\phi(p) = p-1$.
*   **Prime powers are also easy:** $\phi(p^k) = p^k - p^{k-1} = p^k(1 - 1/p)$.
*   **Multiplicative property is key:** If $\gcd(m, n) = 1$, then $\phi(mn) = \phi(m)\phi(n)$.
*   **General formula:** $n = p_1^{k_1} \cdots p_r^{k_r} \implies \phi(n) = n \prod_{i=1}^r (1 - 1/p_i)$.
*   **For $n > 2$, $\phi(n)$ is always even.**
*   **Euler's Totient Theorem:** $a^{\phi(n)} \equiv 1 \pmod{n}$ if $\gcd(a, n) = 1$.
*   **RSA:** The security of RSA relies on the difficulty of factoring $n=pq$ to find $\phi(n)=(p-1)(q-1)$. Knowing $\phi(n)$ allows decryption.

---
