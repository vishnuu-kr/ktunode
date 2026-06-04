---
title: "Modular Arithmetic"
subject: "FOUNDATIONS OF CRYPTOGRAPHY"
module: "Module 2: Prime numbers and Prime Factorisation "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bf12"
status: "completed"
scrapedAt: "2026-05-20T16:53:36.192Z"
---
# Foundations of Cryptography: Module 2 - Prime Numbers and Prime Factorisation

## Topic: Modular Arithmetic

This module explores the fundamental concepts of modular arithmetic, which forms the bedrock of many modern cryptographic algorithms. Understanding modular arithmetic is crucial for comprehending how encryption and decryption processes work.

---

### 1. Introduction to Modular Arithmetic

Modular arithmetic is a system of arithmetic for integers, where numbers "wrap around" upon reaching a certain value—the modulus. It's essentially arithmetic with a remainder.

*   **Analogy:** Think of a clock. A standard clock has 12 hours. When you add hours, if you go past 12, you reset to 1. For example, 10 AM + 4 hours is 2 PM. This is analogous to modular arithmetic where the modulus is 12.

---

### 2. Key Concepts and Definitions

*   **Congruence:**
    *   **Definition:** Two integers, $a$ and $b$, are said to be congruent modulo $m$ (where $m$ is a positive integer) if their difference $(a - b)$ is an integer multiple of $m$.
    *   **Notation:** $a \equiv b \pmod{m}$
    *   **Meaning:** This is read as "$a$ is congruent to $b$ modulo $m$".
    *   **Equivalently:** This means that $a$ and $b$ have the same remainder when divided by $m$.

*   **Modulus:**
    *   **Definition:** The positive integer $m$ in the notation $a \equiv b \pmod{m}$ is called the modulus.

*   **Residue:**
    *   **Definition:** When an integer $a$ is divided by a positive integer $m$, the remainder $r$ is called the residue of $a$ modulo $m$.
    *   **Range:** The residue $r$ is typically in the range $0 \le r < m$.
    *   **Example:** The residue of 17 modulo 5 is 2, because $17 = 3 \times 5 + 2$. So, $17 \equiv 2 \pmod{5}$.

*   **Complete Residue System:**
    *   **Definition:** A set of $m$ integers, no two of which are congruent modulo $m$, is called a complete residue system modulo $m$.
    *   **Common Example:** The set $\{0, 1, 2, \dots, m-1\}$ is the most common complete residue system modulo $m$.

*   **Least Non-negative Residue:**
    *   **Definition:** For any integer $a$ and positive modulus $m$, there is a unique integer $r$ such that $a \equiv r \pmod{m}$ and $0 \le r < m$. This $r$ is called the least non-negative residue of $a$ modulo $m$.

---

### 3. Operations in Modular Arithmetic

Modular arithmetic respects the standard arithmetic operations: addition, subtraction, and multiplication.

*   **Modular Addition:**
    *   If $a \equiv b \pmod{m}$ and $c \equiv d \pmod{m}$, then $a+c \equiv b+d \pmod{m}$.
    *   **Process:** Add the numbers, then find the remainder when divided by the modulus.
    *   **Example:**
        *   $15 \equiv 2 \pmod{13}$
        *   $10 \equiv 10 \pmod{13}$
        *   $15 + 10 = 25$
        *   $25 \pmod{13}$: $25 = 1 \times 13 + 12$. So, $25 \equiv 12 \pmod{13}$.
        *   Also, $2 + 10 = 12$. Thus, $15 + 10 \equiv 2 + 10 \equiv 12 \pmod{13}$.

*   **Modular Subtraction:**
    *   If $a \equiv b \pmod{m}$ and $c \equiv d \pmod{m}$, then $a-c \equiv b-d \pmod{m}$.
    *   **Process:** Subtract the numbers, then find the remainder when divided by the modulus. Be careful with negative results – add the modulus until you get a non-negative result.
    *   **Example:**
        *   $20 \equiv 7 \pmod{13}$
        *   $5 \equiv 5 \pmod{13}$
        *   $20 - 5 = 15$
        *   $15 \pmod{13}$: $15 = 1 \times 13 + 2$. So, $15 \equiv 2 \pmod{13}$.
        *   Also, $7 - 5 = 2$. Thus, $20 - 5 \equiv 7 - 5 \equiv 2 \pmod{13}$.
    *   **Example with Negative Result:**
        *   $5 \equiv 5 \pmod{13}$
        *   $10 \equiv 10 \pmod{13}$
        *   $5 - 10 = -5$
        *   To find the residue of -5 modulo 13: $-5 + 13 = 8$. So, $-5 \equiv 8 \pmod{13}$.
        *   Also, $5 - 10 \equiv 5 - 10 \equiv -5 \equiv 8 \pmod{13}$.

*   **Modular Multiplication:**
    *   If $a \equiv b \pmod{m}$ and $c \equiv d \pmod{m}$, then $ac \equiv bd \pmod{m}$.
    *   **Process:** Multiply the numbers, then find the remainder when divided by the modulus.
    *   **Example:**
        *   $3 \equiv 3 \pmod{7}$
        *   $5 \equiv 5 \pmod{7}$
        *   $3 \times 5 = 15$
        *   $15 \pmod{7}$: $15 = 2 \times 7 + 1$. So, $15 \equiv 1 \pmod{7}$.
        *   Also, $3 \times 5 \equiv 1 \pmod{7}$.

*   **Modular Exponentiation:**
    *   If $a \equiv b \pmod{m}$, then $a^k \equiv b^k \pmod{m}$ for any positive integer $k$.
    *   **Process:** Repeatedly multiply the base by itself, taking the modulus at each step or after a few steps to keep numbers manageable.
    *   **Example:** Calculate $3^4 \pmod{5}$.
        *   $3^1 \equiv 3 \pmod{5}$
        *   $3^2 = 3 \times 3 = 9 \equiv 4 \pmod{5}$
        *   $3^3 = 3^2 \times 3 \equiv 4 \times 3 = 12 \equiv 2 \pmod{5}$
        *   $3^4 = 3^3 \times 3 \equiv 2 \times 3 = 6 \equiv 1 \pmod{5}$
        *   So, $3^4 \equiv 1 \pmod{5}$.

---

### 4. Important Properties of Modular Arithmetic

These properties are crucial for simplifying calculations and proving cryptographic concepts.

*   **Reflexivity:** $a \equiv a \pmod{m}$ for any integer $a$ and positive integer $m$.
    *   *Proof:* $a - a = 0$, and $0$ is a multiple of any integer $m$ ($0 = 0 \times m$).

*   **Symmetry:** If $a \equiv b \pmod{m}$, then $b \equiv a \pmod{m}$.
    *   *Proof:* If $a \equiv b \pmod{m}$, then $a - b = km$ for some integer $k$. Then $b - a = -(a - b) = -(km) = (-k)m$. Since $-k$ is also an integer, $b \equiv a \pmod{m}$.

*   **Transitivity:** If $a \equiv b \pmod{m}$ and $b \equiv c \pmod{m}$, then $a \equiv c \pmod{m}$.
    *   *Proof:* If $a \equiv b \pmod{m}$, then $a - b = k_1m$ for some integer $k_1$. If $b \equiv c \pmod{m}$, then $b - c = k_2m$ for some integer $k_2$. Adding these equations: $(a - b) + (b - c) = k_1m + k_2m$. This simplifies to $a - c = (k_1 + k_2)m$. Since $k_1 + k_2$ is an integer, $a \equiv c \pmod{m}$.

*   **Addition and Multiplication Properties (already discussed):**
    *   $(a+c) \equiv (b+d) \pmod{m}$ if $a \equiv b \pmod{m}$ and $c \equiv d \pmod{m}$.
    *   $(ac) \equiv (bd) \pmod{m}$ if $a \equiv b \pmod{m}$ and $c \equiv d \pmod{m}$.

*   **Compatibility with Subtraction:**
    *   $(a-c) \equiv (b-d) \pmod{m}$ if $a \equiv b \pmod{m}$ and $c \equiv d \pmod{m}$.

*   **Multiplication by a Constant:**
    *   If $a \equiv b \pmod{m}$, then $ka \equiv kb \pmod{m}$ for any integer $k$.

---

### 5. Modular Inverse

A crucial concept in cryptography, particularly for decryption in schemes like RSA.

*   **Definition:** For an integer $a$ and a positive modulus $m$, an integer $a^{-1}$ is called the modular multiplicative inverse of $a$ modulo $m$ if $a \cdot a^{-1} \equiv 1 \pmod{m}$.
*   **Existence:** The modular inverse $a^{-1}$ exists if and only if $a$ and $m$ are coprime, meaning their greatest common divisor (GCD) is 1 ($\text{gcd}(a, m) = 1$).
*   **Finding the Modular Inverse:**
    *   **Brute Force (for small moduli):** Try multiplying $a$ by each number from 1 to $m-1$ until the product is congruent to 1 modulo $m$.
    *   **Extended Euclidean Algorithm:** This is the efficient and standard method. It finds integers $x$ and $y$ such that $ax + my = \text{gcd}(a, m)$. If $\text{gcd}(a, m) = 1$, then $ax + my = 1$. Taking this equation modulo $m$, we get $ax \equiv 1 \pmod{m}$, so $x$ is the modular inverse of $a$ modulo $m$.

*   **Example:** Find the modular inverse of 3 modulo 11.
    *   We are looking for $x$ such that $3x \equiv 1 \pmod{11}$.
    *   **Brute Force:**
        *   $3 \times 1 = 3 \pmod{11}$
        *   $3 \times 2 = 6 \pmod{11}$
        *   $3 \times 3 = 9 \pmod{11}$
        *   $3 \times 4 = 12 \equiv 1 \pmod{11}$
    *   So, the modular inverse of 3 modulo 11 is 4.

*   **Example using Extended Euclidean Algorithm:** Find the modular inverse of 7 modulo 26.
    *   We want to solve $7x + 26y = \text{gcd}(7, 26)$.
    *   First, find $\text{gcd}(7, 26)$ using the Euclidean Algorithm:
        *   $26 = 3 \times 7 + 5$
        *   $7 = 1 \times 5 + 2$
        *   $5 = 2 \times 2 + 1$
        *   $2 = 2 \times 1 + 0$
    *   So, $\text{gcd}(7, 26) = 1$. The inverse exists.
    *   Now, work backwards to express 1 in terms of 7 and 26:
        *   From $5 = 2 \times 2 + 1 \implies 1 = 5 - 2 \times 2$
        *   From $7 = 1 \times 5 + 2 \implies 2 = 7 - 1 \times 5$
        *   Substitute 2: $1 = 5 - 2 \times (7 - 1 \times 5) = 5 - 2 \times 7 + 2 \times 5 = 3 \times 5 - 2 \times 7$
        *   From $26 = 3 \times 7 + 5 \implies 5 = 26 - 3 \times 7$
        *   Substitute 5: $1 = 3 \times (26 - 3 \times 7) - 2 \times 7 = 3 \times 26 - 9 \times 7 - 2 \times 7 = 3 \times 26 - 11 \times 7$
    *   So, we have $1 = (-11) \times 7 + 3 \times 26$.
    *   Taking this modulo 26: $(-11) \times 7 \equiv 1 \pmod{26}$.
    *   The inverse is $-11$. To get the least non-negative residue: $-11 + 26 = 15$.
    *   The modular inverse of 7 modulo 26 is 15. (Check: $7 \times 15 = 105$. $105 = 4 \times 26 + 1$. So, $105 \equiv 1 \pmod{26}$.)

---

### 6. Fermat's Little Theorem

A powerful theorem that relates modular arithmetic to prime numbers.

*   **Statement:** If $p$ is a prime number, then for any integer $a$ not divisible by $p$, we have $a^{p-1} \equiv 1 \pmod{p}$.
*   **Corollaries/Alternative Forms:**
    *   For any integer $a$ and prime $p$, $a^p \equiv a \pmod{p}$.
        *   *Proof:* If $p$ does not divide $a$, then $a^{p-1} \equiv 1 \pmod{p}$. Multiply both sides by $a$: $a \cdot a^{p-1} \equiv a \cdot 1 \pmod{p}$, which gives $a^p \equiv a \pmod{p}$. If $p$ divides $a$, then $a \equiv 0 \pmod{p}$. In this case, $a^p \equiv 0^p \equiv 0 \pmod{p}$ (for $p \ge 1$) and $a \equiv 0 \pmod{p}$, so $a^p \equiv a \pmod{p}$ still holds.

*   **Applications:**
    *   **Simplifying large exponents:** It can be used to reduce large powers modulo a prime. For example, to calculate $3^{100} \pmod{7}$:
        *   Since 7 is prime and 7 does not divide 3, by Fermat's Little Theorem, $3^{7-1} \equiv 3^6 \equiv 1 \pmod{7}$.
        *   We can write $100 = 16 \times 6 + 4$.
        *   So, $3^{100} = 3^{16 \times 6 + 4} = (3^6)^{16} \times 3^4$.
        *   Modulo 7: $3^{100} \equiv (1)^{16} \times 3^4 \equiv 1 \times 3^4 \equiv 3^4 \pmod{7}$.
        *   $3^4 = 81$.
        *   $81 \pmod{7}$: $81 = 11 \times 7 + 4$. So, $81 \equiv 4 \pmod{7}$.
        *   Therefore, $3^{100} \equiv 4 \pmod{7}$.

---

### 7. Euler's Totient Theorem

A generalization of Fermat's Little Theorem to composite moduli.

*   **Euler's Totient Function ($\phi(n)$):**
    *   **Definition:** $\phi(n)$ (phi of n) counts the number of positive integers up to $n$ that are relatively prime to $n$. In other words, it's the number of $k$ such that $1 \le k \le n$ and $\text{gcd}(k, n) = 1$.
    *   **Examples:**
        *   $\phi(1) = 1$ (gcd(1,1)=1)
        *   $\phi(2) = 1$ (gcd(1,2)=1; 2 is not coprime to 2)
        *   $\phi(3) = 2$ (gcd(1,3)=1, gcd(2,3)=1)
        *   $\phi(4) = 2$ (gcd(1,4)=1, gcd(3,4)=1; 2 and 4 are not coprime)
        *   $\phi(5) = 4$ (1, 2, 3, 4 are coprime to 5)
        *   $\phi(6) = 2$ (gcd(1,6)=1, gcd(5,6)=1; 2, 3, 4, 6 are not coprime)

*   **Formula for $\phi(n)$:**
    *   If the prime factorization of $n$ is $n = p_1^{k_1} p_2^{k_2} \cdots p_r^{k_r}$, then:
        $\phi(n) = n \left(1 - \frac{1}{p_1}\right) \left(1 - \frac{1}{p_2}\right) \cdots \left(1 - \frac{1}{p_r}\right)$
    *   Alternatively: $\phi(n) = (p_1^{k_1} - p_1^{k_1-1})(p_2^{k_2} - p_2^{k_2-1}) \cdots (p_r^{k_r} - p_r^{k_r-1})$

    *   **Example:** Calculate $\phi(12)$.
        *   Prime factorization of 12 is $2^2 \times 3^1$.
        *   Using the first formula: $\phi(12) = 12 \left(1 - \frac{1}{2}\right) \left(1 - \frac{1}{3}\right) = 12 \left(\frac{1}{2}\right) \left(\frac{2}{3}\right) = 12 \times \frac{1}{3} = 4$.
        *   The numbers coprime to 12 are 1, 5, 7, 11. There are 4 such numbers.

*   **Euler's Totient Theorem Statement:** If $a$ and $n$ are coprime integers (i.e., $\text{gcd}(a, n) = 1$), then $a^{\phi(n)} \equiv 1 \pmod{n}$.

*   **Relationship to Fermat's Little Theorem:** If $n=p$ is a prime number, then $\phi(p) = p-1$ (all numbers from 1 to $p-1$ are coprime to $p$). In this case, Euler's Totient Theorem becomes $a^{p-1} \equiv 1 \pmod{p}$, which is Fermat's Little Theorem.

*   **Applications:** Similar to Fermat's Little Theorem, it's used to simplify large exponents in modular arithmetic for composite moduli.

---

### 8. Learning Outcomes Checklist

Let's ensure all learning outcomes are covered by this study guide.

*   **Demonstrate an understanding of the basic concepts of modular arithmetic, including congruence, modulus, residue, and complete residue systems.**
    *   Covered in Sections 1 and 2.
*   **Perform calculations involving modular addition, subtraction, and multiplication.**
    *   Covered in Section 3.
*   **Understand and apply the concept of modular inverse, including its existence and methods for calculation.**
    *   Covered in Section 5.
*   **State and apply Fermat's Little Theorem to simplify modular exponentiation.**
    *   Covered in Section 6.
*   **Define and compute Euler's totient function $\phi(n)$.**
    *   Covered in Section 7.
*   **State and apply Euler's Totient Theorem to simplify modular exponentiation for composite moduli.**
    *   Covered in Section 7.

---

### 9. Practice Questions and Exercises

**Question 1:**
Calculate the following:
a) $23 \pmod{7}$
b) $100 \pmod{12}$
c) $-15 \pmod{8}$

**Question 2:**
Given $a \equiv 5 \pmod{11}$ and $b \equiv 7 \pmod{11}$, calculate:
a) $(a+b) \pmod{11}$
b) $(a-b) \pmod{11}$
c) $(a \times b) \pmod{11}$

**Question 3:**
Find the modular inverse of 13 modulo 29.

**Question 4:**
Using Fermat's Little Theorem, calculate $5^{48} \pmod{7}$.

**Question 5:**
Calculate $\phi(18)$.

**Question 6:**
Using Euler's Totient Theorem, calculate $3^{20} \pmod{10}$.

---

### 10. Answers to Practice Questions

**Answer 1:**
a) $23 = 3 \times 7 + 2$. So, $23 \equiv 2 \pmod{7}$.
b) $100 = 8 \times 12 + 4$. So, $100 \equiv 4 \pmod{12}$.
c) $-15 = -2 \times 8 + 1$. So, $-15 \equiv 1 \pmod{8}$.
    Alternatively: $-15 \equiv -15 + 8 \equiv -7 \pmod{8}$. $-7 + 8 \equiv 1 \pmod{8}$.

**Answer 2:**
Given $a \equiv 5 \pmod{11}$ and $b \equiv 7 \pmod{11}$.
a) $(a+b) \equiv (5+7) \equiv 12 \pmod{11}$. $12 \equiv 1 \pmod{11}$.
b) $(a-b) \equiv (5-7) \equiv -2 \pmod{11}$. $-2 \equiv -2 + 11 \equiv 9 \pmod{11}$.
c) $(a \times b) \equiv (5 \times 7) \equiv 35 \pmod{11}$. $35 = 3 \times 11 + 2$. So, $35 \equiv 2 \pmod{11}$.

**Answer 3:**
We need to find $x$ such that $13x \equiv 1 \pmod{29}$.
Using the Extended Euclidean Algorithm for $\text{gcd}(13, 29)$:
*   $29 = 2 \times 13 + 3$
*   $13 = 4 \times 3 + 1$
*   $3 = 3 \times 1 + 0$
$\text{gcd}(13, 29) = 1$.
Working backwards:
*   $1 = 13 - 4 \times 3$
*   Substitute $3 = 29 - 2 \times 13$: $1 = 13 - 4 \times (29 - 2 \times 13) = 13 - 4 \times 29 + 8 \times 13 = 9 \times 13 - 4 \times 29$.
So, $9 \times 13 \equiv 1 \pmod{29}$.
The modular inverse of 13 modulo 29 is 9.

**Answer 4:**
We need to calculate $5^{48} \pmod{7}$.
Since 7 is prime and 7 does not divide 5, by Fermat's Little Theorem: $5^{7-1} \equiv 5^6 \equiv 1 \pmod{7}$.
We can write $48 = 8 \times 6$.
So, $5^{48} = 5^{8 \times 6} = (5^6)^8$.
Modulo 7: $5^{48} \equiv (1)^8 \equiv 1 \pmod{7}$.

**Answer 5:**
We need to calculate $\phi(18)$.
The prime factorization of 18 is $2^1 \times 3^2$.
Using the formula: $\phi(18) = 18 \left(1 - \frac{1}{2}\right) \left(1 - \frac{1}{3}\right) = 18 \left(\frac{1}{2}\right) \left(\frac{2}{3}\right) = 18 \times \frac{1}{3} = 6$.
Alternatively: $\phi(18) = (2^1 - 2^0)(3^2 - 3^1) = (2-1)(9-3) = 1 \times 6 = 6$.
The numbers coprime to 18 are 1, 5, 7, 11, 13, 17. There are 6 of them.

**Answer 6:**
We need to calculate $3^{20} \pmod{10}$.
First, find $\phi(10)$. The prime factorization of 10 is $2^1 \times 5^1$.
$\phi(10) = 10 \left(1 - \frac{1}{2}\right) \left(1 - \frac{1}{5}\right) = 10 \left(\frac{1}{2}\right) \left(\frac{4}{5}\right) = 10 \times \frac{2}{5} = 4$.
Since $\text{gcd}(3, 10) = 1$, by Euler's Totient Theorem: $3^{\phi(10)} \equiv 3^4 \equiv 1 \pmod{10}$.
We want to calculate $3^{20} \pmod{10}$. We can write $20 = 5 \times 4$.
So, $3^{20} = 3^{5 \times 4} = (3^4)^5$.
Modulo 10: $3^{20} \equiv (1)^5 \equiv 1 \pmod{10}$.

---

### 11. Important Points to Remember

*   **Congruence is about remainders:** $a \equiv b \pmod{m}$ means $a$ and $b$ leave the same remainder when divided by $m$.
*   **Modulus is always positive:** In cryptographic contexts, the modulus is typically a positive integer.
*   **Properties of congruence:** Reflexivity, symmetry, and transitivity are fundamental.
*   **Operations preserve congruence:** If $a \equiv b$ and $c \equiv d \pmod m$, then $a+c \equiv b+d$, $a-c \equiv b-d$, and $ac \equiv bd \pmod m$.
*   **Modular inverse exists iff gcd(a, m) = 1:** This is a critical condition.
*   **Extended Euclidean Algorithm is the standard way to find modular inverses.**
*   **Fermat's Little Theorem:** For prime $p$, $a^{p-1} \equiv 1 \pmod p$ (if $p \nmid a$). Powers modulo a prime can be simplified using $p-1$.
*   **Euler's Totient Theorem:** A generalization for composite moduli. $a^{\phi(n)} \equiv 1 \pmod n$ (if $\text{gcd}(a, n) = 1$). Powers modulo $n$ can be simplified using $\phi(n)$.
*   **Prime factorization is key to $\phi(n)$.**
*   **Modular arithmetic is the language of much of modern cryptography.** Understanding these basics is essential.

---
