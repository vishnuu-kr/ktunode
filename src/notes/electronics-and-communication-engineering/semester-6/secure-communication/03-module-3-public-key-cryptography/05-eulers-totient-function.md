---
title: "Euler’s Totient Function"
subject: "SECURE COMMUNICATION"
module: "Module 3: Public Key Cryptography: "
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fee88"
status: "completed"
scrapedAt: "2026-05-23T18:03:09.330Z"
---
# SECURE COMMUNICATION - Module 3: Public Key Cryptography

## Topic: Euler's Totient Function

**Learning Outcomes:**

*   Understand the definition and properties of Euler's totient function.
*   Be able to compute Euler's totient function for various integers.
*   Appreciate the significance of Euler's totient function in number theory and its applications in cryptography.
*   Relate Euler's totient function to the concept of the multiplicative group of integers modulo n.

**Course Outcomes Alignment:**

*   **CO1 (K3):** This topic directly supports CO1 by delving into modular arithmetic and its properties, which are foundational for public-key cryptography. Understanding $\phi(n)$ is crucial for modular arithmetic operations.
*   **CO3 (K2):** Euler's totient function is a cornerstone of the RSA algorithm, which this outcome aims to outline. Its role in determining the exponent in RSA is critical.

---

### 1. Introduction to Euler's Totient Function ($\phi(n)$)

**Definition:**

Euler's totient function, denoted by $\phi(n)$ (or sometimes $\varphi(n)$ or Euler's phi function), counts the number of positive integers less than or equal to $n$ that are relatively prime to $n$.

Two integers $a$ and $n$ are **relatively prime** (or coprime) if their greatest common divisor (GCD) is 1, i.e., $\text{gcd}(a, n) = 1$.

**Notation:**

$\phi(n) = |\{a \in \{1, 2, \dots, n\} \mid \text{gcd}(a, n) = 1\}|$

**Example:**

Let's find $\phi(10)$.
The integers from 1 to 10 are: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.
We need to find which of these are relatively prime to 10.
*   gcd(1, 10) = 1
*   gcd(2, 10) = 2
*   gcd(3, 10) = 1
*   gcd(4, 10) = 2
*   gcd(5, 10) = 5
*   gcd(6, 10) = 2
*   gcd(7, 10) = 1
*   gcd(8, 10) = 2
*   gcd(9, 10) = 1
*   gcd(10, 10) = 10

The integers relatively prime to 10 are 1, 3, 7, 9.
Therefore, $\phi(10) = 4$.

---

### 2. Properties of Euler's Totient Function

#### 2.1 If $p$ is a prime number:

If $p$ is a prime number, then every integer from 1 to $p-1$ is relatively prime to $p$.
So, $\phi(p) = p - 1$.

**Example:**
*   $\phi(7)$: Since 7 is prime, $\phi(7) = 7 - 1 = 6$. (The numbers are 1, 2, 3, 4, 5, 6)
*   $\phi(11)$: Since 11 is prime, $\phi(11) = 11 - 1 = 10$.

#### 2.2 If $p$ is a prime number and $k \ge 1$:

If $p$ is a prime number, then $\phi(p^k) = p^k - p^{k-1}$.

This can be written as $\phi(p^k) = p^k(1 - 1/p)$.

**Derivation:**
The integers from 1 to $p^k$ that are *not* relatively prime to $p^k$ are the multiples of $p$. These are $p, 2p, 3p, \dots, (p^{k-1})p = p^k$.
There are $p^{k-1}$ such multiples.
So, the number of integers relatively prime to $p^k$ is the total number of integers ($p^k$) minus the number of multiples of $p$ ($p^{k-1}$).
$\phi(p^k) = p^k - p^{k-1}$.

**Example:**
*   $\phi(8) = \phi(2^3)$. Here $p=2, k=3$.
    $\phi(2^3) = 2^3 - 2^{3-1} = 8 - 2^2 = 8 - 4 = 4$.
    The integers relatively prime to 8 are 1, 3, 5, 7. Indeed, there are 4.
*   $\phi(27) = \phi(3^3)$. Here $p=3, k=3$.
    $\phi(3^3) = 3^3 - 3^{3-1} = 27 - 3^2 = 27 - 9 = 18$.

#### 2.3 If $m$ and $n$ are relatively prime (i.e., gcd(m, n) = 1):

If $m$ and $n$ are relatively prime, then $\phi(mn) = \phi(m) \phi(n)$.
This means Euler's totient function is a **multiplicative function**.

**Example:**
*   We know $\phi(10) = 4$.
    Since $10 = 2 \times 5$, and gcd(2, 5) = 1, we can use the multiplicative property.
    $\phi(10) = \phi(2) \phi(5)$.
    Since 2 and 5 are prime, $\phi(2) = 2-1 = 1$ and $\phi(5) = 5-1 = 4$.
    So, $\phi(10) = 1 \times 4 = 4$. This matches our previous calculation.

---

### 3. Computing $\phi(n)$ Using Prime Factorization

This is the most general way to compute $\phi(n)$. If the prime factorization of $n$ is given by:
$n = p_1^{k_1} p_2^{k_2} \cdots p_r^{k_r}$
where $p_1, p_2, \dots, p_r$ are distinct prime numbers and $k_1, k_2, \dots, k_r$ are positive integers, then:

$\phi(n) = \phi(p_1^{k_1}) \phi(p_2^{k_2}) \cdots \phi(p_r^{k_r})$ (due to the multiplicative property)

Using the property for prime powers, we get:
$\phi(n) = (p_1^{k_1} - p_1^{k_1-1}) (p_2^{k_2} - p_2^{k_2-1}) \cdots (p_r^{k_r} - p_r^{k_r-1})$

This can also be written as:
$\phi(n) = p_1^{k_1}(1 - 1/p_1) \cdot p_2^{k_2}(1 - 1/p_2) \cdots p_r^{k_r}(1 - 1/p_r)$
$\phi(n) = (p_1^{k_1} p_2^{k_2} \cdots p_r^{k_r}) (1 - 1/p_1) (1 - 1/p_2) \cdots (1 - 1/p_r)$
$\phi(n) = n \prod_{i=1}^{r} (1 - 1/p_i)$

**Example:** Compute $\phi(100)$.

First, find the prime factorization of 100.
$100 = 10 \times 10 = (2 \times 5) \times (2 \times 5) = 2^2 \times 5^2$.
Here, $p_1 = 2, k_1 = 2$ and $p_2 = 5, k_2 = 2$.

Using the formula $\phi(n) = n \prod_{i=1}^{r} (1 - 1/p_i)$:
$\phi(100) = 100 (1 - 1/2) (1 - 1/5)$
$\phi(100) = 100 (1/2) (4/5)$
$\phi(100) = 100 \times (4/10)$
$\phi(100) = 40$.

Alternatively, using $\phi(p^k) = p^k - p^{k-1}$:
$\phi(100) = \phi(2^2 \times 5^2) = \phi(2^2) \phi(5^2)$
$\phi(2^2) = 2^2 - 2^{2-1} = 4 - 2^1 = 4 - 2 = 2$.
$\phi(5^2) = 5^2 - 5^{2-1} = 25 - 5^1 = 25 - 5 = 20$.
$\phi(100) = 2 \times 20 = 40$.

Both methods yield the same result.

**Example:** Compute $\phi(96)$.

Prime factorization of 96:
$96 = 2 \times 48 = 2 \times 2 \times 24 = 2 \times 2 \times 2 \times 12 = 2 \times 2 \times 2 \times 2 \times 6 = 2 \times 2 \times 2 \times 2 \times 2 \times 3 = 2^5 \times 3^1$.
Here, $p_1 = 2, k_1 = 5$ and $p_2 = 3, k_2 = 1$.

Using the formula $\phi(n) = n \prod_{i=1}^{r} (1 - 1/p_i)$:
$\phi(96) = 96 (1 - 1/2) (1 - 1/3)$
$\phi(96) = 96 (1/2) (2/3)$
$\phi(96) = 96 \times (2/6)$
$\phi(96) = 96 \times (1/3)$
$\phi(96) = 32$.

Alternatively, using $\phi(p^k) = p^k - p^{k-1}$:
$\phi(96) = \phi(2^5 \times 3^1) = \phi(2^5) \phi(3^1)$
$\phi(2^5) = 2^5 - 2^{5-1} = 32 - 2^4 = 32 - 16 = 16$.
$\phi(3^1) = 3^1 - 3^{1-1} = 3 - 3^0 = 3 - 1 = 2$.
$\phi(96) = 16 \times 2 = 32$.

---

### 4. Euler's Totient Function and the Multiplicative Group of Integers Modulo $n$

The set of integers $\{1, 2, \dots, n\}$ that are relatively prime to $n$ forms a group under multiplication modulo $n$. This group is denoted by $(\mathbb{Z}/n\mathbb{Z})^\times$ or $U_n$.

The **order** of this group is exactly $\phi(n)$.

**Key Theorem (Euler's Theorem):**

If $a$ and $n$ are relatively prime integers ($\text{gcd}(a, n) = 1$), then:
$a^{\phi(n)} \equiv 1 \pmod{n}$

**Significance in Cryptography (RSA):**

Euler's theorem is fundamental to the RSA public-key cryptosystem. In RSA, we choose two large prime numbers $p$ and $q$, and set $n = pq$. Then $\phi(n) = \phi(pq)$. Since $p$ and $q$ are distinct primes, they are relatively prime.
So, $\phi(n) = \phi(p)\phi(q) = (p-1)(q-1)$.

The RSA algorithm relies on the fact that for any message $M$ and public key exponent $e$, the decryption using the private key exponent $d$ correctly recovers the original message:
$(M^e)^d \equiv M \pmod{n}$
This is achieved when $ed \equiv 1 \pmod{\phi(n)}$.
Euler's theorem guarantees that if $a$ and $n$ are coprime, then $a^{\phi(n)} \equiv 1 \pmod{n}$. This property is generalized in the RSA setting to ensure that raising to the power of $ed$ (which is congruent to 1 modulo $\phi(n)$) recovers the original message. Specifically, $M^{ed} \equiv M^{1 + k\phi(n)} \equiv M \cdot (M^{\phi(n)})^k \equiv M \cdot 1^k \equiv M \pmod n$ for some integer $k$, provided $\text{gcd}(M, n) = 1$. The theorem can be extended to cover cases where $\text{gcd}(M, n) \ne 1$.

**Reference:**

*   **Stallings (4th Edition):** Chapter 13 covers number theory concepts, including Euler's totient function and Euler's theorem, as prerequisites for RSA. The multiplicative group of integers modulo $n$ and its order $\phi(n)$ are discussed.
*   **Forouzan (2008):** Likely discusses number theory basics in its initial chapters, building up to public-key cryptography concepts.
*   **Dummit & Foote:** This abstract algebra text provides a rigorous foundation for group theory, including the structure of $(\mathbb{Z}/n\mathbb{Z})^\times$ and its order.
*   **Koshy:** This book on elementary number theory would thoroughly cover the properties and computation of $\phi(n)$, along with Euler's theorem.

---

### 5. Practice Questions and Answers

**Question 1:** What is the value of $\phi(17)$?
**Answer:** Since 17 is a prime number, $\phi(17) = 17 - 1 = 16$.

**Question 2:** What is the value of $\phi(16)$?
**Answer:** $16 = 2^4$. Using the formula $\phi(p^k) = p^k - p^{k-1}$:
$\phi(16) = \phi(2^4) = 2^4 - 2^{4-1} = 16 - 2^3 = 16 - 8 = 8$.

**Question 3:** What is the value of $\phi(30)$?
**Answer:** First, find the prime factorization of 30: $30 = 2 \times 3 \times 5$.
Since 2, 3, and 5 are distinct primes, they are relatively prime.
Using the multiplicative property:
$\phi(30) = \phi(2) \phi(3) \phi(5)$
$\phi(30) = (2-1)(3-1)(5-1)$
$\phi(30) = 1 \times 2 \times 4 = 8$.

Alternatively, using the formula $\phi(n) = n \prod_{i=1}^{r} (1 - 1/p_i)$:
$\phi(30) = 30 (1 - 1/2) (1 - 1/3) (1 - 1/5)$
$\phi(30) = 30 (1/2) (2/3) (4/5)$
$\phi(30) = 30 \times (8/30)$
$\phi(30) = 8$.

**Question 4:** If $\text{gcd}(a, 21) = 1$, what is the smallest positive integer $k$ such that $a^k \equiv 1 \pmod{21}$?
**Answer:** According to Euler's Theorem, $a^{\phi(21)} \equiv 1 \pmod{21}$ if $\text{gcd}(a, 21) = 1$.
We need to calculate $\phi(21)$.
The prime factorization of 21 is $21 = 3 \times 7$.
$\phi(21) = \phi(3) \phi(7) = (3-1)(7-1) = 2 \times 6 = 12$.
So, $a^{12} \equiv 1 \pmod{21}$.
The smallest such positive integer $k$ is a divisor of $\phi(21) = 12$. The possible values for $k$ are divisors of 12: 1, 2, 3, 4, 6, 12.
The question asks for *the* smallest positive integer $k$. Euler's theorem states $a^{\phi(n)} \equiv 1 \pmod n$. The exponent for which this is true for *all* $a$ coprime to $n$ is $\phi(n)$. So $k = \phi(21) = 12$.
(Note: For a specific 'a', the smallest such exponent might be smaller than $\phi(21)$, it would be the order of 'a' modulo 21, which is a divisor of $\phi(21)$. However, the question implies the general case guaranteed by Euler's Theorem).

**Question 5:** Calculate $\phi(54)$.
**Answer:** Prime factorization of 54: $54 = 2 \times 27 = 2 \times 3^3$.
$\phi(54) = \phi(2^1 \times 3^3) = \phi(2^1) \phi(3^3)$
$\phi(2^1) = 2^1 - 2^0 = 2 - 1 = 1$.
$\phi(3^3) = 3^3 - 3^2 = 27 - 9 = 18$.
$\phi(54) = 1 \times 18 = 18$.

---

### 6. Important Points to Remember

*   **Definition:** $\phi(n)$ counts positive integers $\le n$ that are relatively prime to $n$.
*   **Prime Numbers:** If $p$ is prime, $\phi(p) = p-1$.
*   **Prime Powers:** If $p$ is prime, $\phi(p^k) = p^k - p^{k-1} = p^k(1 - 1/p)$.
*   **Multiplicative Property:** If $\text{gcd}(m, n) = 1$, then $\phi(mn) = \phi(m)\phi(n)$.
*   **General Formula:** For $n = p_1^{k_1} p_2^{k_2} \cdots p_r^{k_r}$, $\phi(n) = n \prod_{i=1}^{r} (1 - 1/p_i)$.
*   **Euler's Theorem:** If $\text{gcd}(a, n) = 1$, then $a^{\phi(n)} \equiv 1 \pmod{n}$. This is crucial for public-key cryptography like RSA.
*   **Group Theory Connection:** $\phi(n)$ is the order of the multiplicative group $(\mathbb{Z}/n\mathbb{Z})^\times$.

---

This concludes the study notes on Euler's Totient Function. This concept is a fundamental building block for understanding and implementing public-key cryptosystems, particularly RSA. Mastering its properties and computation is essential for anyone studying secure communication.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
