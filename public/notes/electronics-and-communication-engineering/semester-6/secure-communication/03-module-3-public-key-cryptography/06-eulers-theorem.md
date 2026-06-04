---
title: "Euler’s theorem"
subject: "SECURE COMMUNICATION"
module: "Module 3: Public Key Cryptography: "
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fee89"
status: "completed"
scrapedAt: "2026-05-23T18:03:10.169Z"
---
# SECURE COMMUNICATION

## Module 3: Public Key Cryptography

### Topic: Euler's Theorem

**Learning Outcomes:**

*   Understand Euler's totient function ($\phi(n)$).
*   State and prove Euler's theorem.
*   Apply Euler's theorem in cryptographic contexts.
*   Relate Euler's theorem to Fermat's Little Theorem.

**Course Outcomes Alignment:**

*   **CO1 (K3):** Euler's Theorem is a cornerstone of modular arithmetic, which is fundamental to Public Key Cryptography. Understanding $\phi(n)$ and the theorem directly supports the application of modular arithmetic concepts.
*   **CO3 (K2):** Euler's Theorem is the mathematical foundation upon which the RSA algorithm is built, making it essential for outlining public key cryptography concepts.

---

### 1. Introduction to Modular Arithmetic and Euler's Totient Function

Before diving into Euler's Theorem, it's crucial to revisit concepts from modular arithmetic.

**Key Concepts:**

*   **Modular Arithmetic:** A system of arithmetic for integers, where numbers "wrap around" when reaching a certain value—the modulus.
    *   Notation: $a \equiv b \pmod{n}$ means $a$ and $b$ have the same remainder when divided by $n$.
    *   Equivalently, $n$ divides $(a-b)$.
*   **Greatest Common Divisor (GCD):** The largest positive integer that divides two or more integers without leaving a remainder.
    *   Notation: $\text{gcd}(a, b)$.
*   **Coprime (Relatively Prime):** Two integers are coprime if their greatest common divisor is 1.
    *   Notation: $\text{gcd}(a, b) = 1$.

**Euler's Totient Function ($\phi(n)$):**

*   **Definition:** For a positive integer $n$, $\phi(n)$ is the count of positive integers less than or equal to $n$ that are coprime to $n$.
*   **Example:**
    *   $\phi(10)$: The integers less than or equal to 10 are {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}.
    *   Integers coprime to 10 are those where $\text{gcd}(k, 10) = 1$. These are {1, 3, 7, 9}.
    *   Therefore, $\phi(10) = 4$.

**Calculating $\phi(n)$:**

*   **If $n = p$ (a prime number):**
    *   All integers from 1 to $p-1$ are coprime to $p$.
    *   So, $\phi(p) = p - 1$.
    *   **Example:** $\phi(7) = 7 - 1 = 6$. (Integers coprime to 7 are {1, 2, 3, 4, 5, 6}).
*   **If $n = p^k$ (a power of a prime):**
    *   The integers not coprime to $p^k$ are the multiples of $p$ up to $p^k$: $p, 2p, 3p, \dots, p^{k-1}p = p^k$. There are $p^{k-1}$ such multiples.
    *   So, $\phi(p^k) = p^k - p^{k-1} = p^k(1 - 1/p)$.
    *   **Example:** $\phi(8) = \phi(2^3) = 2^3 - 2^{3-1} = 8 - 2^2 = 8 - 4 = 4$. (Integers coprime to 8 are {1, 3, 5, 7}).
*   **If $n = pq$ (product of two distinct primes):**
    *   $\phi(pq) = \phi(p) \phi(q) = (p-1)(q-1)$.
    *   **Example:** $\phi(10) = \phi(2 \times 5) = \phi(2) \phi(5) = (2-1)(5-1) = 1 \times 4 = 4$.
*   **General Formula (for $n = p_1^{k_1} p_2^{k_2} \dots p_r^{k_r}$):**
    *   $\phi(n) = n \prod_{i=1}^{r} (1 - \frac{1}{p_i})$
    *   This can also be written as $\phi(n) = \phi(p_1^{k_1}) \phi(p_2^{k_2}) \dots \phi(p_r^{k_r})$.
    *   **Example:** $\phi(36) = \phi(2^2 \times 3^2) = \phi(2^2) \phi(3^2) = (2^2 - 2^1)(3^2 - 3^1) = (4-2)(9-3) = 2 \times 6 = 12$.
    *   Alternatively: $\phi(36) = 36 (1 - 1/2)(1 - 1/3) = 36 (1/2)(2/3) = 36 \times (1/3) = 12$.

**(Refer to Stallings, Chapter 3 for detailed properties of $\phi(n)$).**

---

### 2. Euler's Theorem

Euler's Theorem is a fundamental result in number theory that establishes a relationship between a number $a$, its totient $\phi(n)$, and the modulus $n$, provided that $a$ and $n$ are coprime.

**Statement of Euler's Theorem:**

If $a$ and $n$ are coprime positive integers, then:
$a^{\phi(n)} \equiv 1 \pmod{n}$

**Proof of Euler's Theorem (Conceptual Outline):**

The proof typically involves considering the set of integers $\{1, 2, \dots, n\}$ that are coprime to $n$. Let this set be $S = \{r_1, r_2, \dots, r_{\phi(n)}\}$, where $\text{gcd}(r_i, n) = 1$ for all $i$.

1.  **Consider multiples of $a$:** Take the set of multiples of $a$ modulo $n$: $\{ar_1 \pmod{n}, ar_2 \pmod{n}, \dots, ar_{\phi(n)} \pmod{n}\}$.
2.  **Coprimality of multiples:** Since $\text{gcd}(a, n) = 1$ and $\text{gcd}(r_i, n) = 1$, it follows that $\text{gcd}(ar_i, n) = 1$. This means that the set of multiples $\{ar_1 \pmod{n}, \dots, ar_{\phi(n)} \pmod{n}\}$ is a permutation of the original set $S = \{r_1, \dots, r_{\phi(n)}\}$ modulo $n$. In other words, the set of residues modulo $n$ remains the same, just possibly in a different order.
3.  **Product of elements:** If we multiply all elements in both sets, we get:
    $(ar_1)(ar_2)\dots(ar_{\phi(n)}) \equiv r_1 r_2 \dots r_{\phi(n)} \pmod{n}$
4.  **Simplification:**
    $a^{\phi(n)} (r_1 r_2 \dots r_{\phi(n)}) \equiv (r_1 r_2 \dots r_{\phi(n)}) \pmod{n}$
5.  **Cancellation:** Since each $r_i$ is coprime to $n$, their product $(r_1 r_2 \dots r_{\phi(n)})$ is also coprime to $n$. This allows us to cancel this product from both sides of the congruence (by multiplying by its modular inverse).
    $a^{\phi(n)} \equiv 1 \pmod{n}$

**(Refer to Stallings, Chapter 3; Forouzan, Chapter 9; Dummit & Foote, Chapter 1 for abstract algebra perspective; Koshy, Chapter 4 for number theory approach).**

---

### 3. Fermat's Little Theorem as a Special Case of Euler's Theorem

Fermat's Little Theorem is a direct consequence of Euler's Theorem when the modulus $n$ is a prime number.

**Statement of Fermat's Little Theorem:**

If $p$ is a prime number, then for any integer $a$ not divisible by $p$:
$a^{p-1} \equiv 1 \pmod{p}$

**Relationship to Euler's Theorem:**

*   When $n = p$ (a prime number), Euler's totient function is $\phi(p) = p - 1$.
*   Substituting $\phi(p) = p-1$ into Euler's Theorem:
    If $a$ and $p$ are coprime (i.e., $p$ does not divide $a$), then $a^{\phi(p)} \equiv 1 \pmod{p}$, which becomes $a^{p-1} \equiv 1 \pmod{p}$.

**An Alternative form of Fermat's Little Theorem:**

For any integer $a$ and prime $p$:
$a^p \equiv a \pmod{p}$

**Proof of Alternative Form:**
*   If $p$ divides $a$, then $a \equiv 0 \pmod{p}$. So, $a^p \equiv 0^p \equiv 0 \pmod{p}$ and $a \equiv 0 \pmod{p}$, hence $a^p \equiv a \pmod{p}$.
*   If $p$ does not divide $a$, then by the first form, $a^{p-1} \equiv 1 \pmod{p}$. Multiplying both sides by $a$, we get $a \cdot a^{p-1} \equiv a \cdot 1 \pmod{p}$, which is $a^p \equiv a \pmod{p}$.

**(Refer to Stallings, Chapter 3 for this relationship).**

---

### 4. Applications of Euler's Theorem in Cryptography

Euler's Theorem is fundamental to the security and operation of many public-key cryptosystems, most notably RSA.

**Key Cryptographic Concept: Modular Exponentiation**

Modular exponentiation is the process of calculating $(b^e) \pmod{m}$. This operation is computationally intensive for large numbers if done naively. Efficient algorithms exist to perform this.

**How Euler's Theorem is Used in RSA:**

The RSA algorithm relies on the property that if $e$ and $d$ are the public and private exponents respectively, chosen such that $e \cdot d \equiv 1 \pmod{\phi(n)}$, then for any message $M$:
$(M^e)^d \equiv M \pmod{n}$

Let's see why this works using Euler's Theorem:

*   We have $e \cdot d = k \cdot \phi(n) + 1$ for some integer $k$.
*   Therefore, $M^{ed} = M^{k \cdot \phi(n) + 1} = (M^{\phi(n)})^k \cdot M^1$.

**Case 1: $\text{gcd}(M, n) = 1$**
*   By Euler's Theorem, $M^{\phi(n)} \equiv 1 \pmod{n}$.
*   So, $M^{ed} \equiv (1)^k \cdot M \equiv M \pmod{n}$.

**Case 2: $\text{gcd}(M, n) \neq 1$**
*   If $\text{gcd}(M, n) \neq 1$, then $n$ must have a common prime factor with $M$. Let $p$ be such a prime factor.
*   Consider the congruence modulo $p$: $M \equiv 0 \pmod{p}$.
*   Then $M^{ed} \equiv 0^{ed} \equiv 0 \pmod{p}$ (since $ed \ge 1$).
*   And $M \equiv 0 \pmod{p}$. So, $M^{ed} \equiv M \pmod{p}$.
*   Now consider the congruence modulo $q$ (where $n=pq$).
    *   If $\text{gcd}(M, q) = 1$, then by Fermat's Little Theorem, $M^{q-1} \equiv 1 \pmod{q}$.
    *   We know $e \cdot d \equiv 1 \pmod{\phi(n)}$, which means $e \cdot d \equiv 1 \pmod{(p-1)(q-1)}$.
    *   This implies $e \cdot d = k(p-1)(q-1) + 1$.
    *   So, $M^{ed} = M^{k(p-1)(q-1) + 1} = (M^{q-1})^{k(p-1)} \cdot M$.
    *   $M^{ed} \equiv (1)^{k(p-1)} \cdot M \equiv M \pmod{q}$.
*   We have shown $M^{ed} \equiv M$ modulo $p$ and modulo $q$. Since $p$ and $q$ are distinct primes, by the Chinese Remainder Theorem, the congruence holds modulo $pq=n$.
*   Thus, $M^{ed} \equiv M \pmod{n}$ holds for all messages $M$.

**(Refer to Stallings, Chapter 9 for RSA implementation details; Forouzan, Chapter 12 for RSA and its relation to number theory).**

**Example Cryptographic Scenario:**

Let $n = 33$ and $\phi(n) = \phi(3 \times 11) = (3-1)(11-1) = 2 \times 10 = 20$.
Choose $e = 7$.
We need to find $d$ such that $7d \equiv 1 \pmod{20}$.
Using the extended Euclidean algorithm or by trial and error:
$7 \times 3 = 21 \equiv 1 \pmod{20}$. So, $d=3$.

*   **Encryption:** To encrypt a message $M$, compute $C = M^e \pmod{n}$.
    Let $M = 5$.
    $C = 5^7 \pmod{33}$
    $5^1 = 5$
    $5^2 = 25$
    $5^3 = 125 \equiv 125 - 3 \times 33 = 125 - 99 = 26 \pmod{33}$
    $5^4 \equiv 26 \times 5 = 130 \equiv 130 - 3 \times 33 = 130 - 99 = 31 \equiv -2 \pmod{33}$
    $5^7 = 5^3 \times 5^4 \equiv 26 \times (-2) \equiv -52 \pmod{33}$
    $-52 \equiv -52 + 2 \times 33 = -52 + 66 = 14 \pmod{33}$.
    So, $C = 14$.

*   **Decryption:** To decrypt ciphertext $C$, compute $M = C^d \pmod{n}$.
    $M = 14^3 \pmod{33}$
    $14^1 = 14$
    $14^2 = 196$
    $196 \div 33$: $196 = 5 \times 33 + 31$. So, $14^2 \equiv 31 \equiv -2 \pmod{33}$.
    $14^3 = 14^2 \times 14 \equiv (-2) \times 14 \equiv -28 \pmod{33}$.
    $-28 \equiv -28 + 33 = 5 \pmod{33}$.
    So, $M = 5$, which is the original message.

This demonstrates how Euler's Theorem underpins the ability to recover the original message after encryption.

**(Refer to Stallings, Chapter 9 for RSA; Forouzan, Chapter 12 for RSA examples; Koshy, Chapter 12 for applications in cryptography).**

---

### 5. Practice Questions and Exercises

**Question 1:**
Calculate $\phi(100)$.

**Answer 1:**
$100 = 2^2 \times 5^2$.
$\phi(100) = \phi(2^2) \times \phi(5^2)$
$\phi(2^2) = 2^2 - 2^1 = 4 - 2 = 2$.
$\phi(5^2) = 5^2 - 5^1 = 25 - 5 = 20$.
$\phi(100) = 2 \times 20 = 40$.
Alternatively: $\phi(100) = 100(1 - 1/2)(1 - 1/5) = 100(1/2)(4/5) = 100(4/10) = 100(2/5) = 40$.

**Question 2:**
Verify Euler's Theorem for $a=3$ and $n=7$.

**Answer 2:**
$n=7$ is prime, so $\phi(7) = 7-1 = 6$.
We need to check if $3^6 \equiv 1 \pmod{7}$.
$3^1 = 3$
$3^2 = 9 \equiv 2 \pmod{7}$
$3^3 \equiv 2 \times 3 = 6 \pmod{7}$
$3^6 = (3^3)^2 \equiv 6^2 = 36 \pmod{7}$
$36 \div 7$: $36 = 5 \times 7 + 1$. So, $36 \equiv 1 \pmod{7}$.
Thus, $3^6 \equiv 1 \pmod{7}$ is verified.

**Question 3:**
State Euler's Theorem.

**Answer 3:**
If $a$ and $n$ are coprime positive integers, then $a^{\phi(n)} \equiv 1 \pmod{n}$.

**Question 4:**
If $p$ and $q$ are distinct primes, what is $\phi(pq)$?

**Answer 4:**
$\phi(pq) = (p-1)(q-1)$.

**Question 5:**
Consider an RSA system with $n = 77$ ($p=7, q=11$). Let the public exponent $e = 13$. Find the private exponent $d$.

**Answer 5:**
$n = 77 = 7 \times 11$.
$\phi(77) = \phi(7) \phi(11) = (7-1)(11-1) = 6 \times 10 = 60$.
We need to find $d$ such that $e \cdot d \equiv 1 \pmod{\phi(n)}$, i.e., $13d \equiv 1 \pmod{60}$.
Using the extended Euclidean algorithm or by trying multiples of 13:
$13 \times 1 = 13$
$13 \times 2 = 26$
$13 \times 3 = 39$
$13 \times 4 = 52$
$13 \times 5 = 65 \equiv 5 \pmod{60}$
$13 \times 9 = 117 = 1 \times 60 + 57 \equiv 57 \equiv -3 \pmod{60}$
$13 \times 10 = 130 \equiv 10 \pmod{60}$
$13 \times 11 = 143 = 2 \times 60 + 23 \equiv 23 \pmod{60}$
$13 \times 30 = 390 = 6 \times 60 + 30 \equiv 30 \pmod{60}$
$13 \times 37 = 13 \times (30+7) = 390 + 91 \equiv 30 + 31 \equiv 61 \equiv 1 \pmod{60}$.
So, $d=37$.

---

### 6. Important Points to Remember

*   **$\phi(n)$ is the "reduced" totient:** It counts numbers relatively prime to $n$.
*   **Coprimality is key:** Euler's Theorem applies only when $a$ and $n$ share no common factors.
*   **Prime modulus simplifies:** When $n$ is prime, $\phi(n) = n-1$, and Euler's Theorem becomes Fermat's Little Theorem.
*   **RSA Foundation:** Euler's Theorem guarantees the decryption mechanism in RSA. The relationship $e \cdot d \equiv 1 \pmod{\phi(n)}$ is crucial.
*   **Modular Exponentiation:** Efficient calculation of $(b^e) \pmod{m}$ is vital for cryptographic performance.
*   **Generalization:** While Fermat's Little Theorem deals with prime moduli, Euler's Theorem provides a broader framework for composite moduli.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 7. References

*   **Stallings, William. *Cryptography and Network Security: Principles and Practice*. 4th Edition. Prentice Hall of India, 2006. (Chapter 3)**
*   **Forouzan, Behrouz A. *Cryptography and Network Security*. Tata McGraw-Hill, 2008. (Chapter 9)**
*   **Dummit, David S., and Richard M. Foote. *Abstract Algebra*. 2nd Edition. Wiley India Pvt. Ltd, 2008. (Relevant chapters on Group Theory, specifically cyclic groups and orders of elements)**
*   **Koshy, Thomas. *Elementary Number Theory with Applications*. 2nd Edition. Academic Press, 2007. (Chapters on Modular Arithmetic and Euler's Totient Function, Chapter 12 for Cryptography)**

This concludes the notes on Euler's Theorem in the context of Public Key Cryptography. Understanding this theorem is fundamental to grasping the mathematical underpinnings of modern cryptographic systems.