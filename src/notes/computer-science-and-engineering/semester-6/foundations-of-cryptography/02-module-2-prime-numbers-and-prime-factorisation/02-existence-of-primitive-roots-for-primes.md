---
title: "Existence of Primitive Roots for Primes"
subject: "FOUNDATIONS OF CRYPTOGRAPHY"
module: "Module 2: Prime numbers and Prime Factorisation "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bf0c"
status: "completed"
scrapedAt: "2026-05-20T16:53:31.931Z"
---
# Foundations of Cryptography: Module 2 - Prime Numbers and Prime Factorisation

## Topic: Existence of Primitive Roots for Primes

---

### Learning Outcomes

By the end of this topic, you should be able to:

*   Understand the definition of a primitive root modulo $p$.
*   Know the conditions under which a primitive root modulo $p$ exists.
*   Understand the proof for the existence of primitive roots modulo $p$.
*   Be able to identify numbers that have primitive roots.
*   Understand the importance of primitive roots in cryptography.

---

### 1. Key Concepts and Definitions

#### 1.1. Order of an Element Modulo $n$

The **order of an element $a$ modulo $n$**, denoted as $\text{ord}_n(a)$, is the smallest positive integer $k$ such that $a^k \equiv 1 \pmod{n}$.

**Important Properties:**

*   The order of $a$ modulo $n$ exists if and only if $\gcd(a, n) = 1$.
*   If $\gcd(a, n) = 1$, then by Euler's Totient Theorem, $a^{\phi(n)} \equiv 1 \pmod{n}$. This implies that the order of $a$ modulo $n$ must divide $\phi(n)$.

#### 1.2. Primitive Root Modulo $p$ (for a Prime $p$)

An integer $g$ is a **primitive root modulo $p$** (where $p$ is a prime number) if:

1.  $1 \le g < p$.
2.  The order of $g$ modulo $p$ is $\phi(p)$.
3.  Since $p$ is prime, $\phi(p) = p-1$. Therefore, $g$ is a primitive root modulo $p$ if $\text{ord}_p(g) = p-1$.

In simpler terms, a primitive root modulo $p$ is a generator of the multiplicative group of integers modulo $p$, denoted as $(\mathbb{Z}/p\mathbb{Z})^\times$. This means that the powers of $g$ modulo $p$ will produce all the numbers from $1$ to $p-1$:

$\{g^1 \pmod{p}, g^2 \pmod{p}, \dots, g^{p-1} \pmod{p}\} = \{1, 2, \dots, p-1\}$

#### 1.3. What is $(\mathbb{Z}/n\mathbb{Z})^\times$?

$(\mathbb{Z}/n\mathbb{Z})^\times$ is the set of integers $a$ such that $1 \le a < n$ and $\gcd(a, n) = 1$. This set forms a multiplicative group under multiplication modulo $n$. The size of this group is $\phi(n)$.

---

### 2. Existence of Primitive Roots

A fundamental question in number theory is: for which integers $n$ does a primitive root modulo $n$ exist?

**Theorem:** Primitive roots modulo $n$ exist if and only if $n$ is one of the following:

*   $n = 2$
*   $n = 4$
*   $n = p^k$, where $p$ is an odd prime and $k \ge 1$.
*   $n = 2p^k$, where $p$ is an odd prime and $k \ge 1$.

This topic focuses on the existence of primitive roots **for primes**. The theorem states that primitive roots exist modulo $p$ for **all primes $p$**.

**Special Case: $p=2$**
For $p=2$, $\phi(2) = 1$. The only element in $(\mathbb{Z}/2\mathbb{Z})^\times$ is $1$.
$1^1 \equiv 1 \pmod{2}$. So, $\text{ord}_2(1) = 1$.
Thus, $1$ is a primitive root modulo $2$.

**For Odd Primes $p$**
We need to show that for any odd prime $p$, there exists a primitive root modulo $p$. The order of any element $a$ in $(\mathbb{Z}/p\mathbb{Z})^\times$ must divide $\phi(p) = p-1$. We need to show that there is at least one element whose order is exactly $p-1$.

---

### 3. Proof of Existence of Primitive Roots for Odd Primes $p$

The proof of existence is constructive and relies on the following key ingredients:

*   **The structure of $(\mathbb{Z}/p\mathbb{Z})^\times$**: This group is cyclic for any prime $p$.
*   **Lagrange's Theorem**: The order of any element in a group divides the order of the group.
*   **Properties of polynomial roots over fields**: Specifically, a polynomial of degree $d$ over a field has at most $d$ roots.
*   **The structure of cyclic groups and orders of elements**: If $g$ is an element of order $m$, and $d|m$, then $g^{m/d}$ has order $d$.

**Proof Outline:**

The proof is usually divided into a few steps:

1.  **Understanding the structure of $(\mathbb{Z}/p\mathbb{Z})^\times$**: $(\mathbb{Z}/p\mathbb{Z})^\times$ is a cyclic group of order $p-1$. This is a crucial result that needs to be accepted or proven separately (often covered in abstract algebra courses).
2.  **Showing that there's an element of order $p-1$**: Since $(\mathbb{Z}/p\mathbb{Z})^\times$ is cyclic of order $p-1$, by definition of a cyclic group, there must exist a generator. This generator is precisely a primitive root.

**A More Detailed Constructive Approach (often used in cryptography contexts):**

This approach is more concrete and shows how to construct or find a primitive root.

**Theorem:** For any odd prime $p$, a primitive root exists modulo $p$.

**Proof:**

Let $p$ be an odd prime. We know that $\phi(p) = p-1$. Let the prime factorization of $p-1$ be $p-1 = q_1^{e_1} q_2^{e_2} \dots q_r^{e_r}$, where $q_i$ are distinct primes and $e_i \ge 1$.

We want to find an element $g$ such that $\text{ord}_p(g) = p-1$.
Consider an element $a$ such that $\gcd(a, p) = 1$.
We know that $\text{ord}_p(a)$ divides $p-1$.
If $\text{ord}_p(a) < p-1$, then $\text{ord}_p(a)$ must be a proper divisor of $p-1$.

**Key Insight:** If $a$ is NOT a primitive root, then its order is a proper divisor of $p-1$. This means that the order of $a$ must divide $(p-1)/q_i$ for some prime factor $q_i$ of $p-1$.
Therefore, $a^{(p-1)/q_i} \equiv 1 \pmod{p}$ for at least one prime factor $q_i$ of $p-1$.

**Conversely:** If $a^{(p-1)/q_i} \not\equiv 1 \pmod{p}$ for all prime factors $q_i$ of $p-1$, then the order of $a$ cannot be any proper divisor of $p-1$. Since the order must divide $p-1$, the only remaining possibility is that the order is exactly $p-1$. Thus, $a$ is a primitive root.

**The Construction Strategy:**

We look for an element $g$ such that $g^{(p-1)/q_i} \not\equiv 1 \pmod{p}$ for all distinct prime factors $q_i$ of $p-1$.

**Why does such an element exist?**

For each prime factor $q_i$ of $p-1$, there are exactly $(p-1)/q_i$ elements $x$ in $(\mathbb{Z}/p\mathbb{Z})^\times$ such that $x^{(p-1)/q_i} \equiv 1 \pmod{p}$. These are the elements whose order divides $(p-1)/q_i$.

The elements that are NOT primitive roots are those whose order divides $(p-1)/q_i$ for at least one $q_i$.
Let $S_i = \{a \in (\mathbb{Z}/p\mathbb{Z})^\times \mid a^{(p-1)/q_i} \equiv 1 \pmod{p}\}$. The size of $S_i$ is $(p-1)/q_i$.
The set of non-primitive roots is $\bigcup_{i=1}^r S_i$.

We need to show that there is at least one element $g$ that is NOT in any of these $S_i$.
The number of elements in $S_i$ is $N_i = (p-1)/q_i$.
The number of elements whose order is exactly $(p-1)/q_i$ is $\phi((p-1)/q_i)$.
The number of elements whose order is exactly $p-1$ (i.e., primitive roots) is $\phi(p-1)$.

**Crucial Fact:** The number of elements $a$ in $(\mathbb{Z}/p\mathbb{Z})^\times$ for which $a^k \equiv 1 \pmod p$ for a given $k$ dividing $p-1$ is $\gcd(k, p-1)$. However, the condition is about order *dividing* $k$. The number of elements $x$ with $\text{ord}_p(x) | k$ is $\gcd(k, p-1)$ if $k$ divides $p-1$. If $k$ is a divisor of $p-1$, then the number of elements $x$ such that $x^k \equiv 1 \pmod p$ is $\gcd(k, p-1)$. If $k=p-1$, then $\gcd(p-1, p-1) = p-1$.

Let's use the criterion: $g$ is a primitive root iff $g^{(p-1)/q_i} \not\equiv 1 \pmod{p}$ for all prime factors $q_i$ of $p-1$.

Consider the elements $a \in (\mathbb{Z}/p\mathbb{Z})^\times$.
For each $q_i$, there are exactly $\phi((p-1)/q_i)$ elements of order $(p-1)/q_i$.
The total number of elements is $p-1$.
The number of primitive roots is $\phi(p-1)$.
Since $p-1 \ge 2$ for an odd prime $p$, $\phi(p-1) \ge 1$.
Thus, there exists at least one element whose order is $p-1$, which is a primitive root.

**Simplified Argument (using cyclic group property):**

Since $(\mathbb{Z}/p\mathbb{Z})^\times$ is a cyclic group of order $p-1$, by definition, it has a generator. A generator of a cyclic group is an element whose order is equal to the order of the group. Therefore, there exists an element $g$ such that $\text{ord}_p(g) = p-1$. This element $g$ is a primitive root modulo $p$.

---

### 4. Examples

**Example 1: Modulo $p=5$**

*   $p=5$ is prime. $\phi(5) = 5-1 = 4$.
*   We need to find a primitive root $g$ such that $\text{ord}_5(g) = 4$.
*   The prime factors of $p-1=4$ are just $2$.
*   According to the criterion, we need to find $g$ such that $g^{4/2} = g^2 \not\equiv 1 \pmod{5}$.

Let's check elements $1, 2, 3, 4$:
*   **$g=1$**: $1^1 \equiv 1 \pmod{5}$. Order is $1$. Not a primitive root.
*   **$g=2$**:
    *   $2^1 \equiv 2 \pmod{5}$
    *   $2^2 \equiv 4 \pmod{5}$
    *   $2^3 \equiv 8 \equiv 3 \pmod{5}$
    *   $2^4 \equiv 16 \equiv 1 \pmod{5}$
    The order of $2$ is $4$. So, $2$ is a primitive root modulo $5$.
    Let's check the criterion: $2^{4/2} = 2^2 \equiv 4 \not\equiv 1 \pmod{5}$. This confirms it.

*   **$g=3$**:
    *   $3^1 \equiv 3 \pmod{5}$
    *   $3^2 \equiv 9 \equiv 4 \pmod{5}$
    *   $3^3 \equiv 27 \equiv 2 \pmod{5}$
    *   $3^4 \equiv 81 \equiv 1 \pmod{5}$
    The order of $3$ is $4$. So, $3$ is a primitive root modulo $5$.
    Let's check the criterion: $3^{4/2} = 3^2 \equiv 4 \not\equiv 1 \pmod{5}$. This confirms it.

*   **$g=4$**:
    *   $4^1 \equiv 4 \pmod{5}$
    *   $4^2 \equiv 16 \equiv 1 \pmod{5}$
    The order of $4$ is $2$. Not a primitive root.
    Let's check the criterion: $4^{4/2} = 4^2 \equiv 1 \pmod{5}$. This confirms it's not a primitive root.

**Primitive roots modulo 5 are 2 and 3.**

**Example 2: Modulo $p=7$**

*   $p=7$ is prime. $\phi(7) = 7-1 = 6$.
*   We need to find a primitive root $g$ such that $\text{ord}_7(g) = 6$.
*   The prime factorization of $p-1=6$ is $2 \times 3$.
*   According to the criterion, we need to find $g$ such that:
    *   $g^{6/2} = g^3 \not\equiv 1 \pmod{7}$
    *   $g^{6/3} = g^2 \not\equiv 1 \pmod{7}$

Let's check elements $1, 2, 3, 4, 5, 6$:
*   **$g=1$**: Order is $1$. Not a primitive root.
*   **$g=2$**:
    *   $2^1 \equiv 2 \pmod{7}$
    *   $2^2 \equiv 4 \pmod{7}$
    *   $2^3 \equiv 8 \equiv 1 \pmod{7}$
    The order of $2$ is $3$. Not a primitive root.
    Check criterion: $2^{6/3} = 2^2 \equiv 4 \not\equiv 1 \pmod{7}$. This is fine.
    But $2^{6/2} = 2^3 \equiv 1 \pmod{7}$. This fails the criterion.

*   **$g=3$**:
    *   $3^1 \equiv 3 \pmod{7}$
    *   $3^2 \equiv 9 \equiv 2 \pmod{7}$
    *   $3^3 \equiv 3 \times 2 = 6 \pmod{7}$
    *   $3^4 \equiv 3 \times 6 = 18 \equiv 4 \pmod{7}$
    *   $3^5 \equiv 3 \times 4 = 12 \equiv 5 \pmod{7}$
    *   $3^6 \equiv 3 \times 5 = 15 \equiv 1 \pmod{7}$
    The order of $3$ is $6$. So, $3$ is a primitive root modulo $7$.
    Check criterion:
    *   $3^{6/2} = 3^3 \equiv 6 \not\equiv 1 \pmod{7}$. (Passes)
    *   $3^{6/3} = 3^2 \equiv 2 \not\equiv 1 \pmod{7}$. (Passes)

*   **$g=4$**:
    *   $4^1 \equiv 4 \pmod{7}$
    *   $4^2 \equiv 16 \equiv 2 \pmod{7}$
    *   $4^3 \equiv 4 \times 2 = 8 \equiv 1 \pmod{7}$
    The order of $4$ is $3$. Not a primitive root.
    Check criterion: $4^{6/2} = 4^3 \equiv 1 \pmod{7}$. (Fails)

*   **$g=5$**:
    *   $5^1 \equiv 5 \pmod{7}$
    *   $5^2 \equiv 25 \equiv 4 \pmod{7}$
    *   $5^3 \equiv 5 \times 4 = 20 \equiv 6 \pmod{7}$
    *   $5^4 \equiv 5 \times 6 = 30 \equiv 2 \pmod{7}$
    *   $5^5 \equiv 5 \times 2 = 10 \equiv 3 \pmod{7}$
    *   $5^6 \equiv 5 \times 3 = 15 \equiv 1 \pmod{7}$
    The order of $5$ is $6$. So, $5$ is a primitive root modulo $7$.
    Check criterion:
    *   $5^{6/2} = 5^3 \equiv 6 \not\equiv 1 \pmod{7}$. (Passes)
    *   $5^{6/3} = 5^2 \equiv 4 \not\equiv 1 \pmod{7}$. (Passes)

*   **$g=6$**:
    *   $6^1 \equiv 6 \pmod{7}$
    *   $6^2 \equiv 36 \equiv 1 \pmod{7}$
    The order of $6$ is $2$. Not a primitive root.
    Check criterion: $6^{6/3} = 6^2 \equiv 1 \pmod{7}$. (Fails)

**Primitive roots modulo 7 are 3 and 5.**

---

### 5. Importance of Primitive Roots in Cryptography

Primitive roots are fundamental in constructing certain cryptographic systems. Their importance stems from the cyclic nature of the group $(\mathbb{Z}/p\mathbb{Z})^\times$, where $p$ is prime.

1.  **Discrete Logarithm Problem (DLP):**
    *   In cryptography, we often work with powers of a primitive root $g$ modulo $p$.
    *   Given $g$, $p$, and $y = g^x \pmod{p}$, the problem of finding $x$ is the **Discrete Logarithm Problem (DLP)**.
    *   The difficulty of solving the DLP in $(\mathbb{Z}/p\mathbb{Z})^\times$ for large primes $p$ is the basis for the security of many public-key cryptosystems.

2.  **Diffie-Hellman Key Exchange:**
    *   This is a prime example. Alice and Bob agree on a large prime $p$ and a primitive root $g$ modulo $p$.
    *   Alice chooses a secret $a$ and sends $A = g^a \pmod{p}$ to Bob.
    *   Bob chooses a secret $b$ and sends $B = g^b \pmod{p}$ to Alice.
    *   Alice computes $s = B^a = (g^b)^a = g^{ab} \pmod{p}$.
    *   Bob computes $s = A^b = (g^a)^b = g^{ab} \pmod{p}$.
    *   Both arrive at the same shared secret key $g^{ab} \pmod{p}$.
    *   An eavesdropper knowing $p, g, A, B$ needs to solve the DLP (find $a$ from $A$ or $b$ from $B$) to find the shared secret.

3.  **ElGamal Cryptosystem:**
    *   This is another public-key cryptosystem that relies on the DLP.
    *   A primitive root $g$ modulo $p$ is used as a generator.
    *   The security relies on the difficulty of computing the discrete logarithm.

4.  **Pseudorandom Number Generators (PRNGs):**
    *   Certain PRNGs utilize powers of primitive roots to generate sequences of pseudorandom numbers.

**Why $p$ must be prime?**

The existence of primitive roots is guaranteed for all primes $p$. This means we can always find a generator for the multiplicative group modulo $p$. This guarantees that the group is cyclic and thus suitable for cryptographic applications like Diffie-Hellman and ElGamal. If $n$ is composite and does not have primitive roots (e.g., $n=8$), the multiplicative group $(\mathbb{Z}/n\mathbb{Z})^\times$ is not cyclic, which limits its use in certain cryptographic schemes.

---

### 6. Important Points to Remember

*   **Primitive Root Modulo $p$**: An integer $g$ is a primitive root modulo a prime $p$ if its order modulo $p$ is $p-1$. This means the powers of $g$ generate all elements of $(\mathbb{Z}/p\mathbb{Z})^\times$.
*   **Existence for Primes**: A primitive root modulo $p$ exists for **every prime number $p$**.
*   **Criterion for Primitive Root**: An integer $g$ (where $1 \le g < p$) is a primitive root modulo $p$ if and only if $g^{(p-1)/q} \not\equiv 1 \pmod{p}$ for all distinct prime factors $q$ of $p-1$.
*   **Group Structure**: The multiplicative group of integers modulo $p$, $(\mathbb{Z}/p\mathbb{Z})^\times$, is always a cyclic group of order $p-1$ for any prime $p$. The primitive roots are precisely the generators of this cyclic group.
*   **Cryptographic Importance**: Primitive roots are crucial for the security and functionality of many public-key cryptosystems, most notably Diffie-Hellman key exchange and the ElGamal cryptosystem, due to the difficulty of the discrete logarithm problem.

---

### 7. Practice Questions and Exercises

**Question 1:**
What is the definition of a primitive root modulo a prime $p$?

**Answer 1:**
An integer $g$ is a primitive root modulo a prime $p$ if its order modulo $p$ is $p-1$. This means that the smallest positive integer $k$ such that $g^k \equiv 1 \pmod{p}$ is $k = p-1$. Alternatively, the powers of $g$ modulo $p$ generate all the numbers from $1$ to $p-1$.

**Question 2:**
Does a primitive root exist modulo $p=13$? If so, find one.

**Answer 2:**
Yes, since $p=13$ is a prime, a primitive root exists.
$\phi(13) = 13-1 = 12$.
The prime factorization of $12$ is $2^2 \times 3$. The distinct prime factors are $2$ and $3$.
We need to find $g$ such that:
*   $g^{12/2} = g^6 \not\equiv 1 \pmod{13}$
*   $g^{12/3} = g^4 \not\equiv 1 \pmod{13}$

Let's test $g=2$:
*   $2^1 \equiv 2 \pmod{13}$
*   $2^2 \equiv 4 \pmod{13}$
*   $2^3 \equiv 8 \pmod{13}$
*   $2^4 \equiv 16 \equiv 3 \pmod{13}$ (Check: $2^4 \equiv 3 \not\equiv 1 \pmod{13}$)
*   $2^5 \equiv 2 \times 3 = 6 \pmod{13}$
*   $2^6 \equiv 2 \times 6 = 12 \equiv -1 \pmod{13}$ (Check: $2^6 \equiv 12 \not\equiv 1 \pmod{13}$)
*   $2^{12} \equiv (2^6)^2 \equiv (-1)^2 \equiv 1 \pmod{13}$

Since $2^6 \not\equiv 1 \pmod{13}$ and $2^4 \not\equiv 1 \pmod{13}$, the order of $2$ is $12$.
Therefore, $2$ is a primitive root modulo $13$.

**Question 3:**
For which of the following moduli do primitive roots exist?
(a) $n=17$
(b) $n=15$
(c) $n=25$
(d) $n=14$
(e) $n=18$

**Answer 3:**
According to the theorem on the existence of primitive roots:
A primitive root modulo $n$ exists if and only if $n \in \{2, 4, p^k, 2p^k\}$ where $p$ is an odd prime and $k \ge 1$.

(a) $n=17$: $17$ is an odd prime. So, a primitive root exists.
(b) $n=15$: $15 = 3 \times 5$. This is not in the form $p^k$ or $2p^k$. So, no primitive root exists.
(c) $n=25$: $25 = 5^2$. Here $p=5$ (an odd prime) and $k=2$. So, a primitive root exists.
(d) $n=14$: $14 = 2 \times 7$. Here $p=7$ (an odd prime) and $k=1$. So, a primitive root exists.
(e) $n=18$: $18 = 2 \times 9 = 2 \times 3^2$. Here $p=3$ (an odd prime) and $k=2$. So, a primitive root exists.

**Correct Answers:** (a), (c), (d), (e).

**Question 4:**
Explain why the existence of primitive roots is important for the Diffie-Hellman key exchange protocol.

**Answer 4:**
The Diffie-Hellman key exchange protocol relies on the difficulty of the Discrete Logarithm Problem (DLP) in the multiplicative group of integers modulo a prime, $(\mathbb{Z}/p\mathbb{Z})^\times$. This group is cyclic for all primes $p$. A primitive root is a generator of this cyclic group, meaning its powers produce all the elements in the group. The security of Diffie-Hellman depends on an eavesdropper not being able to compute the shared secret key $g^{ab} \pmod p$, given $p, g, g^a \pmod p,$ and $g^b \pmod p$. This is equivalent to solving the DLP. The existence of primitive roots for all primes guarantees that we can always find a suitable generator $g$ for the group, allowing the protocol to be based on a well-defined cyclic group for which the DLP is hard.

---
---
