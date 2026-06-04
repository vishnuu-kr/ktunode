---
title: "Prime numbers and Prime Factorisation - Primitive Roots"
subject: "FOUNDATIONS OF CRYPTOGRAPHY"
module: "Module 2: Prime numbers and Prime Factorisation "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bf0b"
status: "completed"
scrapedAt: "2026-05-20T16:53:31.213Z"
---
# FOUNDATIONS OF CRYPTOGRAPHY

## Module 2: Prime Numbers and Prime Factorisation

### Topic: Primitive Roots

---

### 1. Introduction to Primitive Roots

Primitive roots are a fundamental concept in number theory with significant applications in cryptography, particularly in the construction of finite fields and in algorithms like the Diffie-Hellman key exchange. They are related to the multiplicative order of elements in a group.

**Key Concept:** In the context of cryptography, we are primarily interested in primitive roots modulo a prime number, or more generally, modulo $n$ where $n$ is an integer.

---

### 2. Understanding Multiplicative Order

Before defining primitive roots, it's essential to understand the concept of the multiplicative order of an element.

**Definition:** Let $a$ be an integer and $n$ be a positive integer such that $\gcd(a, n) = 1$. The **multiplicative order of $a$ modulo $n$**, denoted as $\text{ord}_n(a)$, is the smallest positive integer $k$ such that $a^k \equiv 1 \pmod{n}$.

**Important Property:** If $\gcd(a, n) = 1$, then $\text{ord}_n(a)$ always exists and $\text{ord}_n(a)$ divides $\phi(n)$, where $\phi(n)$ is Euler's totient function.

**Example:**
Find the order of 3 modulo 7.
We need to find the smallest positive integer $k$ such that $3^k \equiv 1 \pmod{7}$.
* $3^1 \equiv 3 \pmod{7}$
* $3^2 \equiv 9 \equiv 2 \pmod{7}$
* $3^3 \equiv 3 \times 2 \equiv 6 \pmod{7}$
* $3^4 \equiv 3 \times 6 \equiv 18 \equiv 4 \pmod{7}$
* $3^5 \equiv 3 \times 4 \equiv 12 \equiv 5 \pmod{7}$
* $3^6 \equiv 3 \times 5 \equiv 15 \equiv 1 \pmod{7}$

So, $\text{ord}_7(3) = 6$.
Note that $\phi(7) = 7-1 = 6$ (since 7 is prime), and indeed 6 divides 6.

---

### 3. Definition of Primitive Roots

Now we can define primitive roots.

**Definition:** An integer $g$ is called a **primitive root modulo $n$** if $\gcd(g, n) = 1$ and the multiplicative order of $g$ modulo $n$ is equal to $\phi(n)$. That is, $\text{ord}_n(g) = \phi(n)$.

**In simpler terms:** A primitive root modulo $n$ is an element whose powers generate all the other elements in the set of integers relatively prime to $n$ (under multiplication modulo $n$). The set of integers relatively prime to $n$ forms a multiplicative group modulo $n$, denoted as $(\mathbb{Z}/n\mathbb{Z})^\times$. The order of this group is $\phi(n)$. A primitive root is a **generator** of this cyclic group.

---

### 4. Existence of Primitive Roots

Primitive roots do not exist for all integers $n$. They exist for $n$ if and only if $n$ is one of the following forms:

*   $n = 1$
*   $n = 2$
*   $n = 4$
*   $n = p^k$, where $p$ is an odd prime and $k \ge 1$.
*   $n = 2p^k$, where $p$ is an odd prime and $k \ge 1$.

**Important Point:** For cryptographic applications, we are primarily concerned with primitive roots modulo a prime number $p$.

**Theorem:** Primitive roots exist modulo any prime number $p$.

---

### 5. Finding Primitive Roots Modulo a Prime $p$

Let $p$ be a prime number. We want to find a primitive root $g$ modulo $p$.
We know that $\phi(p) = p-1$. So, we are looking for an element $g$ such that $\text{ord}_p(g) = p-1$.

To check if an element $g$ (where $1 \le g < p$) is a primitive root modulo $p$, we need to verify that $g^{p-1} \equiv 1 \pmod{p}$ (which is guaranteed by Fermat's Little Theorem) AND for every proper divisor $d$ of $p-1$, we must have $g^d \not\equiv 1 \pmod{p}$.

A more efficient way to check this is to only test the powers $g^{(p-1)/q} \pmod{p}$ for all distinct prime factors $q$ of $p-1$.

**Algorithm to find a primitive root modulo a prime $p$:**

1.  Calculate $\phi(p) = p-1$.
2.  Find the distinct prime factors of $p-1$. Let them be $q_1, q_2, \ldots, q_k$.
3.  Iterate through integers $g = 2, 3, \ldots, p-1$.
4.  For each $g$, check if $g^{(p-1)/q_i} \not\equiv 1 \pmod{p}$ for all $i = 1, \ldots, k$.
5.  The first $g$ that satisfies this condition is a primitive root modulo $p$.

**Example:** Find a primitive root modulo $p = 13$.

1.  $\phi(13) = 13-1 = 12$.
2.  The prime factorization of $12$ is $2^2 \times 3$. The distinct prime factors are $q_1 = 2$ and $q_2 = 3$.
3.  We need to check values of $g$ from 2 to 12.
    *   Check $g=2$:
        *   $2^{(13-1)/2} = 2^{12/2} = 2^6 \pmod{13}$
        *   $2^1 \equiv 2 \pmod{13}$
        *   $2^2 \equiv 4 \pmod{13}$
        *   $2^3 \equiv 8 \pmod{13}$
        *   $2^4 \equiv 16 \equiv 3 \pmod{13}$
        *   $2^5 \equiv 6 \pmod{13}$
        *   $2^6 \equiv 12 \equiv -1 \pmod{13}$
        *   Since $2^6 \equiv -1 \not\equiv 1 \pmod{13}$, we proceed to the next prime factor.
        *   $2^{(13-1)/3} = 2^{12/3} = 2^4 \pmod{13}$
        *   We already calculated $2^4 \equiv 3 \pmod{13}$.
        *   Since $2^4 \equiv 3 \not\equiv 1 \pmod{13}$, and $2^6 \not\equiv 1 \pmod{13}$, $g=2$ is a primitive root modulo 13.

**Let's verify the order of 2 modulo 13:**
The order must divide $\phi(13) = 12$. Possible orders are 1, 2, 3, 4, 6, 12.
We know $2^6 \equiv -1 \pmod{13}$, so the order cannot be 1, 2, 3, 4, or 6.
Therefore, the order must be 12. So 2 is indeed a primitive root.

**What if we tried $g=3$?**
*   Check $g=3$:
    *   $3^{(13-1)/2} = 3^6 \pmod{13}$
    *   $3^1 \equiv 3 \pmod{13}$
    *   $3^2 \equiv 9 \pmod{13}$
    *   $3^3 \equiv 27 \equiv 1 \pmod{13}$
    *   Since $3^3 \equiv 1 \pmod{13}$, the order of 3 is 3, which is not equal to 12. So 3 is not a primitive root.

---

### 6. Properties and Importance in Cryptography

Primitive roots are crucial in cryptography for several reasons:

*   **Cyclic Groups:** They are generators of the multiplicative group of integers modulo $p$, $(\mathbb{Z}/p\mathbb{Z})^\times$, which is a cyclic group of order $p-1$. This cyclic nature is essential for many cryptographic protocols.
*   **Diffie-Hellman Key Exchange:** Primitive roots are used as the base $g$ in the Diffie-Hellman key exchange algorithm. The security of DH relies on the difficulty of the discrete logarithm problem in a cyclic group generated by a primitive root.
    *   Alice chooses a primitive root $g$ modulo a large prime $p$.
    *   Alice chooses a secret integer $a$, computes $A = g^a \pmod{p}$, and sends $A$ to Bob.
    *   Bob chooses a secret integer $b$, computes $B = g^b \pmod{p}$, and sends $B$ to Alice.
    *   Alice computes $(B)^a \equiv (g^b)^a \equiv g^{ab} \pmod{p}$.
    *   Bob computes $(A)^b \equiv (g^a)^b \equiv g^{ab} \pmod{p}$.
    *   Both arrive at the same shared secret $g^{ab} \pmod{p}$.
*   **ElGamal Cryptosystem:** This public-key cryptosystem also relies on the discrete logarithm problem in a cyclic group, often generated by a primitive root modulo a large prime.
*   **Finite Field Arithmetic:** Primitive roots are used to define generators for finite fields, which are fundamental for error-correcting codes and advanced cryptographic schemes.

**Highlight:** The difficulty of finding the discrete logarithm of an element with respect to a primitive root in a large cyclic group is the foundation of the security of many modern cryptosystems.

---

### 7. Number of Primitive Roots

If a primitive root exists modulo $n$, then there are exactly $\phi(\phi(n))$ primitive roots modulo $n$.

**Example:** For $p=13$, $\phi(13) = 12$.
The number of primitive roots modulo 13 is $\phi(\phi(13)) = \phi(12)$.
The prime factorization of 12 is $2^2 \times 3$.
$\phi(12) = 12(1 - 1/2)(1 - 1/3) = 12(1/2)(2/3) = 4$.
So, there are 4 primitive roots modulo 13. We found 2. Let's check others:
We know the primitive roots are $g^k \pmod{13}$ where $\gcd(k, 12) = 1$.
The values of $k$ such that $\gcd(k, 12) = 1$ are 1, 5, 7, 11.
*   $k=1: 2^1 \equiv 2 \pmod{13}$ (already found)
*   $k=5: 2^5 \equiv 32 \equiv 6 \pmod{13}$
*   $k=7: 2^7 \equiv 2^6 \cdot 2^1 \equiv (-1) \cdot 2 \equiv -2 \equiv 11 \pmod{13}$
*   $k=11: 2^{11} \equiv 2^{10} \cdot 2^1 \equiv (2^5)^2 \cdot 2 \equiv 6^2 \cdot 2 \equiv 36 \cdot 2 \equiv 10 \cdot 2 \equiv 20 \equiv 7 \pmod{13}$

The primitive roots modulo 13 are 2, 6, 7, and 11.

---

### 8. Practice Questions and Exercises

**Question 1:**
What is the multiplicative order of 5 modulo 11?

**Question 2:**
Is 3 a primitive root modulo 17? Justify your answer.

**Question 3:**
Find a primitive root modulo 19.

**Question 4:**
How many primitive roots are there modulo 23?

---

### 9. Answers

**Answer 1:**
We need to find the smallest positive integer $k$ such that $5^k \equiv 1 \pmod{11}$.
$\phi(11) = 11-1 = 10$. The order must divide 10. Possible orders are 1, 2, 5, 10.
*   $5^1 \equiv 5 \pmod{11}$
*   $5^2 \equiv 25 \equiv 3 \pmod{11}$
*   $5^5 = 5^2 \cdot 5^2 \cdot 5 \equiv 3 \cdot 3 \cdot 5 \equiv 9 \cdot 5 \equiv 45 \equiv 1 \pmod{11}$
The order of 5 modulo 11 is 5.

**Answer 2:**
To check if 3 is a primitive root modulo 17:
1.  $\phi(17) = 17-1 = 16$.
2.  Prime factors of 16 are just $2$ ($16 = 2^4$). So we only need to check $3^{16/2} = 3^8 \pmod{17}$.
3.  $3^1 \equiv 3 \pmod{17}$
    $3^2 \equiv 9 \pmod{17}$
    $3^3 \equiv 27 \equiv 10 \pmod{17}$
    $3^4 \equiv 3 \times 10 \equiv 30 \equiv 13 \pmod{17}$
    $3^8 = (3^4)^2 \equiv 13^2 \equiv 169 \pmod{17}$
    $169 = 17 \times 9 + 16$. So, $169 \equiv 16 \equiv -1 \pmod{17}$.
Since $3^8 \equiv -1 \not\equiv 1 \pmod{17}$, 3 is a primitive root modulo 17.

**Answer 3:**
To find a primitive root modulo 19:
1.  $\phi(19) = 19-1 = 18$.
2.  Prime factorization of $18$ is $2 \times 3^2$. The distinct prime factors are 2 and 3.
3.  We need to check $g^{(18/2)} = g^9$ and $g^{(18/3)} = g^6$ for $g = 2, 3, \ldots$.
    *   Try $g=2$:
        *   $2^6 \pmod{19}$:
            $2^1 \equiv 2$
            $2^2 \equiv 4$
            $2^3 \equiv 8$
            $2^4 \equiv 16 \equiv -3$
            $2^5 \equiv -6$
            $2^6 \equiv -12 \equiv 7 \pmod{19}$
            Since $2^6 \not\equiv 1 \pmod{19}$, proceed.
        *   $2^9 = 2^6 \cdot 2^3 \equiv 7 \cdot 8 \equiv 56 \equiv 18 \equiv -1 \pmod{19}$
            Since $2^9 \not\equiv 1 \pmod{19}$, $g=2$ is a primitive root modulo 19.

**Answer 4:**
The number of primitive roots modulo 23 is $\phi(\phi(23))$.
$\phi(23) = 23-1 = 22$.
The prime factorization of 22 is $2 \times 11$.
$\phi(22) = 22(1 - 1/2)(1 - 1/11) = 22(1/2)(10/11) = 11 \times (10/11) = 10$.
There are 10 primitive roots modulo 23.

---

### 10. Important Points to Remember

*   **Order:** The multiplicative order of $a$ modulo $n$, $\text{ord}_n(a)$, is the smallest $k>0$ such that $a^k \equiv 1 \pmod{n}$, provided $\gcd(a,n)=1$.
*   **Primitive Root:** An integer $g$ is a primitive root modulo $n$ if $\text{ord}_n(g) = \phi(n)$.
*   **Existence:** Primitive roots exist modulo $n$ if and only if $n \in \{1, 2, 4, p^k, 2p^k\}$, where $p$ is an odd prime. They always exist modulo any prime $p$.
*   **Finding Primitive Roots mod $p$:** To check if $g$ is a primitive root mod $p$, verify $g^{(p-1)/q} \not\equiv 1 \pmod{p}$ for all distinct prime factors $q$ of $p-1$.
*   **Cryptographic Significance:** Primitive roots generate cyclic groups, crucial for Diffie-Hellman, ElGamal, and understanding discrete logarithm problem security.
*   **Number of Primitive Roots:** If primitive roots exist modulo $n$, there are $\phi(\phi(n))$ of them.

---
