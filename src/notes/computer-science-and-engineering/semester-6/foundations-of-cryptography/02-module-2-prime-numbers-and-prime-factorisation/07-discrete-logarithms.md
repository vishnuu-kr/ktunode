---
title: "Discrete Logarithms"
subject: "FOUNDATIONS OF CRYPTOGRAPHY"
module: "Module 2: Prime numbers and Prime Factorisation "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bf11"
status: "completed"
scrapedAt: "2026-05-20T16:53:35.483Z"
---
# Foundations of Cryptography: Module 2 - Prime Numbers and Prime Factorisation

## Topic: Discrete Logarithms

### Introduction

Discrete logarithms are a fundamental building block in modern cryptography, particularly in asymmetric encryption schemes like Diffie-Hellman key exchange and the ElGamal cryptosystem. Unlike regular logarithms, which operate over real numbers, discrete logarithms are defined within finite fields or cyclic groups. This "discrete" nature makes them computationally hard to solve, forming the basis for the security of many cryptographic algorithms.

---

### 1. Learning Outcomes Covered

This set of notes will cover the following learning outcomes related to discrete logarithms:

*   **Understanding the definition of a discrete logarithm.**
*   **Identifying the groups and fields where discrete logarithms are typically computed.**
*   **Explaining the computational hardness of the Discrete Logarithm Problem (DLP).**
*   **Recognizing the cryptographic significance of DLP.**
*   **Familiarity with algorithms that solve DLP in specific cases.**

---

### 2. Key Concepts and Definitions

#### 2.1. Cyclic Groups

Before diving into discrete logarithms, it's crucial to understand cyclic groups.

*   **Group:** A set $G$ with a binary operation (e.g., multiplication or addition) that satisfies four properties:
    1.  **Closure:** For any $a, b \in G$, $a \cdot b \in G$.
    2.  **Associativity:** For any $a, b, c \in G$, $(a \cdot b) \cdot c = a \cdot (b \cdot c)$.
    3.  **Identity Element:** There exists an element $e \in G$ such that for all $a \in G$, $a \cdot e = e \cdot a = a$.
    4.  **Inverse Element:** For every $a \in G$, there exists an element $a^{-1} \in G$ such that $a \cdot a^{-1} = a^{-1} \cdot a = e$.

*   **Generator:** An element $g \in G$ is a **generator** (or primitive root) if every element in $G$ can be expressed as a power of $g$. That is, for any $h \in G$, there exists an integer $x$ such that $h = g^x$.

*   **Cyclic Group:** A group $G$ is called **cyclic** if it has at least one generator.

**Example:** The group of integers modulo a prime $p$ under multiplication, denoted as $\mathbb{Z}_p^*$, is a cyclic group. For example, $\mathbb{Z}_7^* = \{1, 2, 3, 4, 5, 6\}$ under multiplication modulo 7. The element 3 is a generator because:
*   $3^1 \equiv 3 \pmod{7}$
*   $3^2 \equiv 9 \equiv 2 \pmod{7}$
*   $3^3 \equiv 2 \cdot 3 \equiv 6 \pmod{7}$
*   $3^4 \equiv 6 \cdot 3 \equiv 18 \equiv 4 \pmod{7}$
*   $3^5 \equiv 4 \cdot 3 \equiv 12 \equiv 5 \pmod{7}$
*   $3^6 \equiv 5 \cdot 3 \equiv 15 \equiv 1 \pmod{7}$
The order of the group is $p-1 = 6$. The element 3 generates all elements in $\mathbb{Z}_7^*$.

#### 2.2. Discrete Logarithm Definition

Given a cyclic group $G$ with a generator $g$, and an element $h \in G$, the **discrete logarithm** of $h$ with base $g$ is the integer $x$ such that $g^x = h$.

We write this as $x = \log_g(h)$.

**Important Note:** The discrete logarithm is usually defined modulo the order of the group. If the order of the group $G$ is $n$, then $x$ is typically taken in the range $0 \le x < n$.

**Example:** In $\mathbb{Z}_7^*$ with generator $g=3$:
*   We found $3^3 \equiv 6 \pmod{7}$. Therefore, the discrete logarithm of 6 with base 3 is 3.
    $\log_3(6) = 3 \pmod{6}$ (modulo the order of the group)
*   We found $3^2 \equiv 2 \pmod{7}$. Therefore, the discrete logarithm of 2 with base 3 is 2.
    $\log_3(2) = 2 \pmod{6}$

#### 2.3. Finite Fields and Groups for Discrete Logarithms

Discrete logarithms are typically computed in the following mathematical structures:

*   **The multiplicative group of integers modulo a prime $p$, $\mathbb{Z}_p^*$:** This group consists of integers $\{1, 2, \dots, p-1\}$ under multiplication modulo $p$. The order of this group is $p-1$. The discrete logarithm problem in this group is often denoted as **DL_p**.

*   **The multiplicative group of integers modulo $n$ where $n$ is composite, $\mathbb{Z}_n^*$:** This group consists of integers less than $n$ that are relatively prime to $n$. The order of this group is given by Euler's totient function, $\phi(n)$. The discrete logarithm problem here is also denoted as DL_n.

*   **Finite Fields $\mathbb{F}_{p^k}$:** For a prime $p$ and an integer $k \ge 1$, the finite field $\mathbb{F}_{p^k}$ contains $p^k$ elements. The multiplicative group of this field, $\mathbb{F}_{p^k}^*$, has order $p^k - 1$ and is cyclic. The discrete logarithm problem in these fields is often more difficult than in $\mathbb{Z}_p^*$.

*   **Elliptic Curve Groups:** These are groups defined by points on an elliptic curve over a finite field. The operation is typically point addition. The discrete logarithm problem in elliptic curve groups (Elliptic Curve Discrete Logarithm Problem - ECDLP) is considered even harder than DLP in finite fields for equivalent key sizes.

---

### 3. The Discrete Logarithm Problem (DLP)

The **Discrete Logarithm Problem (DLP)** is the problem of finding the discrete logarithm $x$ given a cyclic group $G$, a generator $g$, and an element $h \in G$ such that $h = g^x$.

**Formally:** Given $G$, $g \in G$ (generator), and $h \in G$, find $x$ such that $g^x = h$.

**Computational Hardness:** For properly chosen groups and parameters, finding $x$ is computationally infeasible for current algorithms. This hardness is the bedrock of many cryptographic systems.

**Contrast with "Normal" Logarithms:** In real numbers, calculating $\log_b(y)$ is relatively easy if you have a calculator or a table. However, in finite groups, the operation is modular exponentiation ($g^x \pmod{p}$), and finding the exponent $x$ given $g$, $h$, and $p$ is extremely difficult.

---

### 4. Cryptographic Significance of DLP

The difficulty of the Discrete Logarithm Problem makes it suitable for various cryptographic applications:

*   **Key Exchange:**
    *   **Diffie-Hellman Key Exchange:** Allows two parties to establish a shared secret key over an insecure channel without prior shared secrets. The security relies on the hardness of DLP.

*   **Digital Signatures:**
    *   **ElGamal Digital Signature Scheme:** Provides authentication and integrity for messages.

*   **Encryption:**
    *   **ElGamal Encryption:** A public-key encryption scheme based on DLP.

*   **Zero-Knowledge Proofs:** Schemes like the Schnorr identification protocol use DLP.

---

### 5. Algorithms for Solving DLP (and why they are generally inefficient)

While DLP is hard in general, there are algorithms that can solve it, especially for specific types of groups or small parameters. Understanding these helps appreciate why larger parameters are chosen for security.

#### 5.1. Brute-Force (Trial Multiplication)

*   **Description:** Try all possible values of $x$ from $0$ up to the order of the group minus one. For each $x$, compute $g^x$ and check if it equals $h$.
*   **Complexity:** $O(n)$, where $n$ is the order of the group. For $\mathbb{Z}_p^*$, this is $O(p)$.
*   **Example:** In $\mathbb{Z}_7^*$ with $g=3$ and $h=6$:
    *   $x=0: 3^0 = 1 \ne 6$
    *   $x=1: 3^1 = 3 \ne 6$
    *   $x=2: 3^2 = 9 \equiv 2 \ne 6$
    *   $x=3: 3^3 = 27 \equiv 6$. Found $x=3$.
*   **Usefulness:** Only feasible for very small group orders. For cryptographic purposes, group orders are chosen to be extremely large (e.g., hundreds or thousands of bits), making brute-force infeasible.

#### 5.2. Baby-Step Giant-Step Algorithm

*   **Description:** A meet-in-the-middle algorithm that significantly improves upon brute-force.
    1.  Choose an integer $m \approx \sqrt{n}$ (where $n$ is the group order).
    2.  **Baby Steps:** Compute and store the pairs $(g^j, j)$ for $j = 0, 1, \dots, m-1$ in a lookup table (e.g., a hash map).
    3.  **Giant Steps:** Compute $g^{-m} \pmod{n}$. Then, compute $h \cdot (g^{-m})^i$ for $i = 0, 1, \dots, m-1$.
    4.  For each giant step value, check if it exists as a first element in the baby steps table. If $h \cdot (g^{-m})^i = g^j$, then $h \cdot g^{-im} = g^j$, which means $h = g^{im+j}$. The discrete logarithm is $x = im+j$.
*   **Complexity:** $O(\sqrt{n})$ time and $O(\sqrt{n})$ space.
*   **Example:** In $\mathbb{Z}_{11}^*$ with generator $g=2$ and $h=9$. The order of $\mathbb{Z}_{11}^*$ is $n=10$.
    *   Let $m = \lceil \sqrt{10} \rceil = 4$.
    *   **Baby Steps (compute $2^j$ for $j=0,1,2,3$):**
        *   $(2^0, 0) = (1, 0)$
        *   $(2^1, 1) = (2, 1)$
        *   $(2^2, 2) = (4, 2)$
        *   $(2^3, 3) = (8, 3)$
        *   Store these in a table: `{1: 0, 2: 1, 4: 2, 8: 3}`
    *   **Giant Steps:** We need $g^{-m} = 2^{-4} \pmod{11}$. First find the inverse of 2 mod 11. $2 \cdot 6 = 12 \equiv 1 \pmod{11}$, so $2^{-1} \equiv 6$.
        Then $g^{-m} = 2^{-4} \equiv 6^4 \pmod{11}$.
        $6^2 = 36 \equiv 3 \pmod{11}$
        $6^4 = (6^2)^2 \equiv 3^2 = 9 \pmod{11}$. So $g^{-m} \equiv 9 \pmod{11}$.
    *   **Compute $h \cdot (g^{-m})^i$ for $i=0,1,2,3$ and check against baby steps table:**
        *   $i=0: h \cdot (g^{-m})^0 = 9 \cdot 1 = 9$. Is 9 in the table? No.
        *   $i=1: h \cdot (g^{-m})^1 = 9 \cdot 9 = 81 \equiv 4 \pmod{11}$. Is 4 in the table? Yes, with $j=2$.
        *   We found a match: $h \cdot (g^{-m})^1 = g^2$. So, $h = g^{1 \cdot m + 2} = g^{1 \cdot 4 + 2} = g^6$.
        *   The discrete logarithm is $x=6$. Let's check: $2^6 = 64 \equiv 9 \pmod{11}$. Correct!
*   **Usefulness:** Better than brute-force but still infeasible for very large groups.

#### 5.3. Pohlig-Hellman Algorithm

*   **Description:** This algorithm works efficiently when the order of the group $n$ has small prime factors. It reduces the DLP in a group of order $n$ to several DLPs in subgroups of prime order $q$, where $q$ is a prime factor of $n$.
    1.  Let $n$ be the order of the group. Factor $n$ into its prime power factorization: $n = q_1^{e_1} q_2^{e_2} \dots q_k^{e_k}$.
    2.  For each prime factor $q_i$ of $n$:
        *   Consider the subgroup of order $q_i$. The problem reduces to solving $g^x \equiv h \pmod{p}$ within this subgroup. This can be further broken down for $q_i^{e_i}$.
        *   Let $x = x_1 + x_2 q_1 + \dots + x_k q_1^{k-1}$ where $0 \le x_i < q_1$.
        *   Compute $h^{n/q_i} \pmod{p}$. This element is in the subgroup of order $q_i$.
        *   Solve the DLP for this subgroup using a method like Baby-Step Giant-Step. This gives $x \pmod{q_i}$.
    3.  Combine the results for each prime factor using the Chinese Remainder Theorem (CRT) to find $x \pmod{n}$.
*   **Complexity:** The complexity is dominated by the largest prime factor of $n$. If $n$ has a very large prime factor, this algorithm is inefficient. If $n$ is a product of small primes, it's efficient. The complexity is roughly $O(\sum e_i (\log n + \sqrt{q_i}))$.
*   **Usefulness:** This highlights why choosing a prime $p$ such that $p-1$ has at least one large prime factor is important for $\mathbb{Z}_p^*$. If $p-1$ is a Mersenne prime or a product of small primes, Pohlig-Hellman can be efficient.

#### 5.4. Index Calculus Algorithms

*   **Description:** These are more sophisticated algorithms for DLP in finite fields $\mathbb{Z}_p^*$. They work by choosing a "factor base" of small primes. The idea is to express powers of the generator and the target element $h$ as products of these small primes.
    1.  **Factor Base:** Select a set of small primes $B = \{p_1, p_2, \dots, p_k\}$.
    2.  **Relation Finding:** Find relations of the form $g^y \equiv \prod p_i^{a_i} \pmod{p}$ and $h \cdot g^z \equiv \prod p_i^{b_i} \pmod{p}$. This is done by generating random exponents and checking if the resulting elements can be factored over the factor base.
    3.  **Linear Algebra:** The logarithms of the primes in the factor base with respect to $g$ are unknown. This gives a system of linear equations over $\mathbb{Z}_{p-1}$. Solve this system using linear algebra techniques (e.g., Gaussian elimination).
*   **Complexity:** The complexity depends on the size of the factor base and the number of relations needed. For $\mathbb{Z}_p^*$, it is subexponential. The best known index calculus algorithms (like the Number Field Sieve) have a complexity of roughly $L_p(1/3)$, which is still very hard for large $p$, but significantly better than exponential.
*   **Usefulness:** This is the most efficient known algorithm for DLP in $\mathbb{Z}_p^*$. It's why $p$ must be very large (e.g., 2048 bits or more). For finite fields $\mathbb{F}_{p^k}$, there are similar but generally less efficient variants.

#### 5.5. Elliptic Curve Discrete Logarithm Problem (ECDLP)

*   **Description:** The problem of finding $x$ such that $xG = P$, where $G$ is a generator point and $P$ is a point on an elliptic curve over a finite field.
*   **Hardness:** The best known algorithms for ECDLP are exponential in the size of the field parameters, making it generally harder than DLP in finite fields for comparable bit lengths. There is no known subexponential algorithm for ECDLP on general elliptic curves.
*   **Usefulness:** This is why elliptic curve cryptography (ECC) is popular. It offers the same level of security as traditional finite field cryptography with much smaller key sizes. For example, a 256-bit ECC key offers comparable security to a 3072-bit RSA or Diffie-Hellman key.

---

### 6. Important Points to Remember

*   **Cyclic Group:** Discrete logarithms are defined in cyclic groups.
*   **Generator:** A generator is essential for defining discrete logarithms.
*   **DLP Definition:** Finding $x$ such that $g^x = h$ is the Discrete Logarithm Problem.
*   **Computational Hardness:** DLP is computationally hard in appropriately chosen groups, forming the basis of many cryptosystems.
*   **Group Choice Matters:** The difficulty of DLP varies significantly depending on the underlying group (e.g., $\mathbb{Z}_p^*$, $\mathbb{F}_{p^k}$, elliptic curve groups).
*   **Algorithm Efficiency:** Brute-force is too slow. Baby-Step Giant-Step is $O(\sqrt{n})$. Pohlig-Hellman is good if $n$ has small prime factors. Index Calculus is subexponential for $\mathbb{Z}_p^*$. ECDLP is generally harder than finite field DLP.
*   **Cryptographic Parameters:** To ensure security, cryptographic systems use parameters (like prime $p$ in $\mathbb{Z}_p^*$) with very large orders, making all known DLP algorithms infeasible.

---

### 7. Practice Questions and Exercises

**Question 1:**
Consider the multiplicative group $\mathbb{Z}_{13}^* = \{1, 2, \dots, 12\}$ under multiplication modulo 13.
Let $g=2$ be a generator.
a) Compute the powers of 2 modulo 13 and show that 2 is indeed a generator.
b) Find the discrete logarithm of 11 with base 2. That is, find $x$ such that $2^x \equiv 11 \pmod{13}$.

**Question 2:**
Let $G = \mathbb{Z}_{11}^*$ with generator $g=2$. Suppose we want to find the discrete logarithm of $h=8$.
Use the Baby-Step Giant-Step algorithm to find $x$ such that $2^x \equiv 8 \pmod{11}$.

**Question 3:**
The order of the group $\mathbb{Z}_{37}^*$ is $36$. Factorize 36 into its prime power factorization.
If we wanted to use Pohlig-Hellman to solve DLP in $\mathbb{Z}_{37}^*$, would this algorithm be efficient? Explain why or why not.

**Question 4:**
In your own words, explain why the Discrete Logarithm Problem is considered "hard" in cryptography.

---

### 8. Answers to Practice Questions

**Answer 1:**
Consider the multiplicative group $\mathbb{Z}_{13}^* = \{1, 2, \dots, 12\}$ under multiplication modulo 13.
Let $g=2$ be a generator.
a) Compute the powers of 2 modulo 13 and show that 2 is indeed a generator.
The order of $\mathbb{Z}_{13}^*$ is $13-1=12$.
$2^1 \equiv 2 \pmod{13}$
$2^2 \equiv 4 \pmod{13}$
$2^3 \equiv 8 \pmod{13}$
$2^4 \equiv 16 \equiv 3 \pmod{13}$
$2^5 \equiv 2 \cdot 3 = 6 \pmod{13}$
$2^6 \equiv 2 \cdot 6 = 12 \pmod{13}$
$2^7 \equiv 2 \cdot 12 = 24 \equiv 11 \pmod{13}$
$2^8 \equiv 2 \cdot 11 = 22 \equiv 9 \pmod{13}$
$2^9 \equiv 2 \cdot 9 = 18 \equiv 5 \pmod{13}$
$2^{10} \equiv 2 \cdot 5 = 10 \pmod{13}$
$2^{11} \equiv 2 \cdot 10 = 20 \equiv 7 \pmod{13}$
$2^{12} \equiv 2 \cdot 7 = 14 \equiv 1 \pmod{13}$
Since $2^{12} \equiv 1 \pmod{13}$ and no smaller power is 1, 2 is a generator of $\mathbb{Z}_{13}^*$.

b) Find the discrete logarithm of 11 with base 2. That is, find $x$ such that $2^x \equiv 11 \pmod{13}$.
From the calculations above, $2^7 \equiv 11 \pmod{13}$.
Therefore, the discrete logarithm of 11 with base 2 is **7**.
$\log_2(11) = 7 \pmod{12}$.

**Answer 2:**
Let $G = \mathbb{Z}_{11}^*$ with generator $g=2$. We want to find $\log_2(8)$. The order of the group is $n=10$.
Use the Baby-Step Giant-Step algorithm. Let $m = \lceil \sqrt{10} \rceil = 4$.

**Baby Steps (compute $g^j$ for $j=0, \dots, m-1=3$):**
*   $j=0: 2^0 \equiv 1 \pmod{11}$. Pair: $(1, 0)$
*   $j=1: 2^1 \equiv 2 \pmod{11}$. Pair: $(2, 1)$
*   $j=2: 2^2 \equiv 4 \pmod{11}$. Pair: $(4, 2)$
*   $j=3: 2^3 \equiv 8 \pmod{11}$. Pair: $(8, 3)$
Baby Steps Table: `{1: 0, 2: 1, 4: 2, 8: 3}`

**Giant Steps:**
We need $g^{-m} = 2^{-4} \pmod{11}$.
First, find $2^{-1} \pmod{11}$: $2 \cdot 6 = 12 \equiv 1 \pmod{11}$, so $2^{-1} \equiv 6 \pmod{11}$.
Then, $g^{-m} = 2^{-4} \equiv (2^{-1})^4 \equiv 6^4 \pmod{11}$.
$6^2 = 36 \equiv 3 \pmod{11}$
$6^4 = (6^2)^2 \equiv 3^2 = 9 \pmod{11}$.
So, $g^{-m} \equiv 9 \pmod{11}$.

**Compute $h \cdot (g^{-m})^i$ for $i=0, \dots, 3$ and check against the table:**
*   $i=0: h \cdot (g^{-m})^0 = 8 \cdot 1 = 8 \pmod{11}$. Is 8 in the table? Yes, with $j=3$.
    We found a match: $h \cdot (g^{-m})^0 = g^3$. So, $h = g^{0 \cdot m + 3} = g^3$.
    The discrete logarithm is $x=3$.

Check: $2^3 \equiv 8 \pmod{11}$. Correct.

**Answer 3:**
The order of $\mathbb{Z}_{37}^*$ is $n=36$.
Prime factorization of $36$: $36 = 2^2 \cdot 3^2$.
The prime factors are 2 and 3, and their powers are 2 and 2.
The Pohlig-Hellman algorithm's efficiency depends on the size of the largest prime factor of the group order. Here, the largest prime factor is 3. The complexity is related to $\sqrt{3}$, which is very small.
Yes, the Pohlig-Hellman algorithm would be **very efficient** for solving DLP in $\mathbb{Z}_{37}^*$ because the order of the group (36) has only small prime factors (2 and 3).

**Answer 4:**
The Discrete Logarithm Problem (DLP) is considered "hard" in cryptography because, for large prime moduli and suitable generators, there is no known algorithm that can solve it efficiently in polynomial time. While we can easily compute $g^x \pmod{p}$ (modular exponentiation), reversing this process to find $x$ given $g$, $h$, and $p$ is computationally infeasible. Current best algorithms for DLP in finite fields have subexponential complexity, and for elliptic curve groups, the best algorithms are exponential. This difficulty allows cryptographic systems to rely on the inability of an adversary to recover the secret exponent $x$ from public information.

---
This concludes the study notes for Discrete Logarithms. Remember that the practical implementation of these concepts requires careful selection of group parameters to ensure the computational hardness of DLP.
