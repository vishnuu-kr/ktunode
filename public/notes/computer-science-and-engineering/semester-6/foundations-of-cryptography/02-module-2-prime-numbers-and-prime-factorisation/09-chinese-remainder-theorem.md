---
title: "Chinese Remainder Theorem"
subject: "FOUNDATIONS OF CRYPTOGRAPHY"
module: "Module 2: Prime numbers and Prime Factorisation "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bf13"
status: "completed"
scrapedAt: "2026-05-20T16:53:36.903Z"
---
# Foundations of Cryptography: Module 2 - Prime Numbers and Prime Factorization

## Topic: Chinese Remainder Theorem (CRT)

---

### 1. Introduction to the Chinese Remainder Theorem

The Chinese Remainder Theorem (CRT) is a fundamental theorem in number theory that provides a way to solve a system of linear congruences. In cryptography, it plays a crucial role in various algorithms, particularly in speeding up computations involving modular arithmetic, such as in RSA.

**Key Idea:** If we know the remainders of an integer when divided by several pairwise coprime integers, we can uniquely determine the remainder of that integer when divided by the product of those integers.

---

### 2. Learning Outcomes

This module aims to equip you with the understanding of the Chinese Remainder Theorem, enabling you to:

*   **Understand the statement of the Chinese Remainder Theorem:** Precisely articulate what the theorem states and its conditions.
*   **Solve systems of linear congruences using the CRT:** Apply the theorem to find solutions for given systems of congruences.
*   **Recognize the conditions for the existence and uniqueness of solutions:** Identify when a system of congruences has a solution and when that solution is unique within a certain range.
*   **Understand the applications of CRT in cryptography:** Appreciate how CRT is utilized in practical cryptographic algorithms.
*   **Derive the formula for the solution using CRT:** Understand the constructive proof of the CRT and how to build the solution.

---

### 3. Key Concepts and Definitions

#### 3.1. Congruence Relation

**Definition:** For integers $a$, $b$, and a positive integer $n$, we say $a$ is congruent to $b$ modulo $n$, written as $a \equiv b \pmod{n}$, if $n$ divides $(a - b)$.

**Equivalently:** $a$ and $b$ have the same remainder when divided by $n$.

#### 3.2. System of Linear Congruences

A system of linear congruences is a set of congruences of the form:

$x \equiv a_1 \pmod{n_1}$
$x \equiv a_2 \pmod{n_2}$
...
$x \equiv a_k \pmod{n_k}$

where $x$ is the unknown integer we want to find, $a_i$ are known remainders, and $n_i$ are the moduli.

#### 3.3. Pairwise Coprime Moduli

**Definition:** A set of integers $\{n_1, n_2, \ldots, n_k\}$ is pairwise coprime if the greatest common divisor (GCD) of any two distinct integers in the set is 1. That is, $\gcd(n_i, n_j) = 1$ for all $i \neq j$.

---

### 4. Statement of the Chinese Remainder Theorem

Let $n_1, n_2, \ldots, n_k$ be pairwise coprime positive integers.
Let $a_1, a_2, \ldots, a_k$ be any integers.

Then, the system of linear congruences:

$x \equiv a_1 \pmod{n_1}$
$x \equiv a_2 \pmod{n_2}$
...
$x \equiv a_k \pmod{n_k}$

has a unique solution modulo $N$, where $N = n_1 \cdot n_2 \cdot \ldots \cdot n_k$.

---

### 5. Constructive Proof and Solution Formula

The CRT guarantees a solution, and the proof itself provides a method for constructing it.

**Steps to find the solution:**

1.  **Calculate $N$**: The product of all the moduli: $N = n_1 \cdot n_2 \cdot \ldots \cdot n_k$.
2.  **For each $i$ from 1 to $k$**:
    *   Calculate $N_i = N / n_i$. This is the product of all moduli *except* $n_i$.
    *   Find the multiplicative inverse of $N_i$ modulo $n_i$. Let this inverse be $y_i$. So, $N_i \cdot y_i \equiv 1 \pmod{n_i}$. This inverse exists because $\gcd(N_i, n_i) = 1$ (since all $n_j$ are pairwise coprime, $n_i$ shares no common factors with the product of the other $n_j$).
3.  **Construct the solution**: The solution $x$ is given by:
    $x = (a_1 \cdot N_1 \cdot y_1) + (a_2 \cdot N_2 \cdot y_2) + \ldots + (a_k \cdot N_k \cdot y_k)$
4.  **Reduce modulo $N$**: The unique solution modulo $N$ is $x \pmod{N}$.

**Why this works:**

Consider the term $a_i \cdot N_i \cdot y_i$.
*   Modulo $n_i$: $a_i \cdot N_i \cdot y_i \equiv a_i \cdot 1 \equiv a_i \pmod{n_i}$ (by definition of $y_i$).
*   Modulo $n_j$ (where $j \neq i$): Since $n_j$ divides $N_i$ (because $N_i$ is the product of all moduli except $n_i$, and $n_j$ is one of those), we have $N_i \equiv 0 \pmod{n_j}$. Therefore, $a_i \cdot N_i \cdot y_i \equiv a_i \cdot 0 \cdot y_i \equiv 0 \pmod{n_j}$.

When we sum all these terms:
$x = \sum_{i=1}^k (a_i \cdot N_i \cdot y_i)$

*   Modulo $n_m$ (for any $m$ from 1 to $k$):
    $x \equiv (a_1 \cdot N_1 \cdot y_1) + \ldots + (a_m \cdot N_m \cdot y_m) + \ldots + (a_k \cdot N_k \cdot y_k) \pmod{n_m}$
    $x \equiv 0 + \ldots + a_m \cdot 1 + \ldots + 0 \pmod{n_m}$
    $x \equiv a_m \pmod{n_m}$

This shows that the constructed $x$ satisfies all congruences.

---

### 6. Examples

#### Example 1: Basic CRT Application

**Problem:** Find an integer $x$ such that:
$x \equiv 2 \pmod{3}$
$x \equiv 3 \pmod{5}$
$x \equiv 2 \pmod{7}$

**Solution:**

1.  **Moduli are pairwise coprime?** $\gcd(3, 5) = 1$, $\gcd(3, 7) = 1$, $\gcd(5, 7) = 1$. Yes, they are pairwise coprime.

2.  **Calculate $N$**: $N = 3 \cdot 5 \cdot 7 = 105$.

3.  **For each congruence:**
    *   **i = 1 ($n_1 = 3, a_1 = 2$)**:
        *   $N_1 = N / n_1 = 105 / 3 = 35$.
        *   Find $y_1$ such that $35 \cdot y_1 \equiv 1 \pmod{3}$.
            $35 \equiv 2 \pmod{3}$. So, $2 \cdot y_1 \equiv 1 \pmod{3}$.
            Multiply by 2 (inverse of 2 mod 3): $4 \cdot y_1 \equiv 2 \pmod{3} \implies 1 \cdot y_1 \equiv 2 \pmod{3}$. So, $y_1 = 2$.
    *   **i = 2 ($n_2 = 5, a_2 = 3$)**:
        *   $N_2 = N / n_2 = 105 / 5 = 21$.
        *   Find $y_2$ such that $21 \cdot y_2 \equiv 1 \pmod{5}$.
            $21 \equiv 1 \pmod{5}$. So, $1 \cdot y_2 \equiv 1 \pmod{5}$. So, $y_2 = 1$.
    *   **i = 3 ($n_3 = 7, a_3 = 2$)**:
        *   $N_3 = N / n_3 = 105 / 7 = 15$.
        *   Find $y_3$ such that $15 \cdot y_3 \equiv 1 \pmod{7}$.
            $15 \equiv 1 \pmod{7}$. So, $1 \cdot y_3 \equiv 1 \pmod{7}$. So, $y_3 = 1$.

4.  **Construct the solution**:
    $x = (a_1 \cdot N_1 \cdot y_1) + (a_2 \cdot N_2 \cdot y_2) + (a_3 \cdot N_3 \cdot y_3)$
    $x = (2 \cdot 35 \cdot 2) + (3 \cdot 21 \cdot 1) + (2 \cdot 15 \cdot 1)$
    $x = (140) + (63) + (30)$
    $x = 233$

5.  **Reduce modulo $N$**:
    $x \equiv 233 \pmod{105}$
    $233 = 2 \cdot 105 + 23$.
    So, $x \equiv 23 \pmod{105}$.

**Verification:**
*   $23 \pmod{3} = 2$ (Correct)
*   $23 \pmod{5} = 3$ (Correct)
*   $23 \pmod{7} = 2$ (Correct)

The unique solution modulo 105 is 23.

#### Example 2: Finding Multiplicative Inverse (Extended Euclidean Algorithm)

**Problem:** Find the multiplicative inverse of 35 modulo 3.

**Solution:** We need to solve $35y \equiv 1 \pmod{3}$.
Since $35 \equiv 2 \pmod{3}$, we need to solve $2y \equiv 1 \pmod{3}$.

We can use the Extended Euclidean Algorithm to find $\gcd(a, b)$ and express it as a linear combination $ax + by = \gcd(a, b)$. For modular inverse, we use $ax + ny = \gcd(a, n)$, and if $\gcd(a, n) = 1$, then $ax \equiv 1 \pmod{n}$, so $x$ is the inverse.

Here, we want the inverse of 2 mod 3:
$\gcd(2, 3)$:
$3 = 1 \cdot 2 + 1$
$1 = 3 - 1 \cdot 2$

So, $1 = 3(1) + 2(-1)$.
This means $2(-1) \equiv 1 \pmod{3}$.
The inverse is -1, which is equivalent to 2 modulo 3.

Alternatively, by inspection:
$2 \cdot 1 = 2 \equiv 2 \pmod{3}$
$2 \cdot 2 = 4 \equiv 1 \pmod{3}$
So, the inverse of 2 modulo 3 is 2.

---

### 7. Conditions for Existence and Uniqueness

*   **Existence:** A system of linear congruences $x \equiv a_i \pmod{n_i}$ has a solution **if and only if** $a_i \equiv a_j \pmod{\gcd(n_i, n_j)}$ for all $i \neq j$.
*   **Uniqueness (under CRT conditions):** If the moduli $n_1, n_2, \ldots, n_k$ are **pairwise coprime**, then the system has a **unique solution modulo $N = n_1 \cdot n_2 \cdot \ldots \cdot n_k$**.

If the moduli are not pairwise coprime, a solution might still exist, but it might not be unique modulo the product of the moduli. The CRT, as stated above, specifically applies to the pairwise coprime case.

---

### 8. Applications of CRT in Cryptography

The CRT is a powerful tool used in various cryptographic applications, most notably:

#### 8.1. Speeding up RSA Decryption/Signing

In RSA, decryption and signing involve modular exponentiation of a large number $m$ (or ciphertext $c$) to a large exponent $d$ (or private key $p$) modulo a large composite number $N = p \cdot q$, where $p$ and $q$ are large primes.
This calculation is $m^d \pmod{N}$.

Using CRT, this large computation can be broken down into two smaller computations:
1.  $m_p = m^d \pmod{p}$
2.  $m_q = m^d \pmod{q}$

These computations are significantly faster because the modulus is smaller. Once $m_p$ and $m_q$ are computed, the original $m^d \pmod{N}$ can be recovered using the CRT.

**How it works for RSA:**
Let $x = m^d \pmod{N}$.
We know $N = p \cdot q$, and $p$ and $q$ are prime, hence pairwise coprime.
We want to solve the system:
$x \equiv m^d \pmod{p}$
$x \equiv m^d \pmod{q}$

We can compute $d_p = d \pmod{(p-1)}$ and $d_q = d \pmod{(q-1)}$ using Fermat's Little Theorem.
Then, we compute:
$x_p = m^{d_p} \pmod{p}$
$x_q = m^{d_q} \pmod{q}$

Now, we have the system:
$x \equiv x_p \pmod{p}$
$x \equiv x_q \pmod{q}$

Using CRT, we can find the unique solution $x \pmod{pq}$, which is the original $m^d \pmod{N}$.

The CRT formula for two moduli $p$ and $q$ becomes:
$N = pq$
$N_p = q$, $N_q = p$
Find $y_p$ such that $q \cdot y_p \equiv 1 \pmod{p}$ (this is the modular inverse of $q$ mod $p$).
Find $y_q$ such that $p \cdot y_q \equiv 1 \pmod{q}$ (this is the modular inverse of $p$ mod $q$).

The solution is $x = (x_p \cdot q \cdot y_p) + (x_q \cdot p \cdot y_q) \pmod{pq}$.
A common optimization uses $y_p$ as the inverse of $q \pmod{p}$. Then $x = x_q + (x_p - x_q) \cdot y_p \cdot q \pmod{pq}$.

#### 8.2. Other Applications

*   **Secret Sharing Schemes:** CRT can be used to reconstruct a secret from a set of shares.
*   **Error Correction Codes:** Certain error detection and correction codes utilize principles related to CRT.
*   **Homomorphic Encryption:** Some homomorphic encryption schemes use CRT for efficient computation.

---

### 9. Practice Questions

1.  **Solve the following system of congruences using the Chinese Remainder Theorem:**
    $x \equiv 1 \pmod{4}$
    $x \equiv 2 \pmod{3}$
    $x \equiv 3 \pmod{5}$

2.  **Find the multiplicative inverse of 17 modulo 31.**

3.  **Explain in your own words why the moduli must be pairwise coprime for the standard Chinese Remainder Theorem.**

4.  **Consider the system:**
    $x \equiv 5 \pmod{6}$
    $x \equiv 2 \pmod{9}$
    **Does this system have a solution? If so, what are the conditions for its uniqueness? (Hint: Are the moduli pairwise coprime?)**

---

### 10. Answers to Practice Questions

1.  **Solution:**
    *   Moduli: 4, 3, 5. They are pairwise coprime.
    *   $N = 4 \cdot 3 \cdot 5 = 60$.
    *   **i = 1 ($n_1=4, a_1=1$)**:
        *   $N_1 = 60/4 = 15$.
        *   Find $y_1$ such that $15 y_1 \equiv 1 \pmod{4}$.
            $15 \equiv 3 \pmod{4}$, so $3 y_1 \equiv 1 \pmod{4}$.
            Multiply by 3 (inverse of 3 mod 4): $9 y_1 \equiv 3 \pmod{4} \implies 1 y_1 \equiv 3 \pmod{4}$. So, $y_1 = 3$.
    *   **i = 2 ($n_2=3, a_2=2$)**:
        *   $N_2 = 60/3 = 20$.
        *   Find $y_2$ such that $20 y_2 \equiv 1 \pmod{3}$.
            $20 \equiv 2 \pmod{3}$, so $2 y_2 \equiv 1 \pmod{3}$.
            Multiply by 2: $4 y_2 \equiv 2 \pmod{3} \implies 1 y_2 \equiv 2 \pmod{3}$. So, $y_2 = 2$.
    *   **i = 3 ($n_3=5, a_3=3$)**:
        *   $N_3 = 60/5 = 12$.
        *   Find $y_3$ such that $12 y_3 \equiv 1 \pmod{5}$.
            $12 \equiv 2 \pmod{5}$, so $2 y_3 \equiv 1 \pmod{5}$.
            Multiply by 3: $6 y_3 \equiv 3 \pmod{5} \implies 1 y_3 \equiv 3 \pmod{5}$. So, $y_3 = 3$.
    *   **Construct $x$**:
        $x = (1 \cdot 15 \cdot 3) + (2 \cdot 20 \cdot 2) + (3 \cdot 12 \cdot 3)$
        $x = 45 + 80 + 108$
        $x = 233$
    *   **Reduce modulo $N$**:
        $x \equiv 233 \pmod{60}$
        $233 = 3 \cdot 60 + 53$.
        So, $x \equiv 53 \pmod{60}$.

2.  **Solution:**
    We need to find $y$ such that $17y \equiv 1 \pmod{31}$.
    Using the Extended Euclidean Algorithm for $\gcd(17, 31)$:
    $31 = 1 \cdot 17 + 14$
    $17 = 1 \cdot 14 + 3$
    $14 = 4 \cdot 3 + 2$
    $3 = 1 \cdot 2 + 1$
    $1 = 3 - 1 \cdot 2$
    $1 = 3 - 1 \cdot (14 - 4 \cdot 3)$
    $1 = 3 - 14 + 4 \cdot 3$
    $1 = 5 \cdot 3 - 14$
    $1 = 5 \cdot (17 - 1 \cdot 14) - 14$
    $1 = 5 \cdot 17 - 5 \cdot 14 - 14$
    $1 = 5 \cdot 17 - 6 \cdot 14$
    $1 = 5 \cdot 17 - 6 \cdot (31 - 1 \cdot 17)$
    $1 = 5 \cdot 17 - 6 \cdot 31 + 6 \cdot 17$
    $1 = 11 \cdot 17 - 6 \cdot 31$

    So, $11 \cdot 17 \equiv 1 \pmod{31}$.
    The multiplicative inverse of 17 modulo 31 is 11.

3.  **Explanation:**
    The pairwise coprime condition ensures that for each $N_i = N/n_i$, we have $\gcd(N_i, n_i) = 1$. This is crucial because it guarantees that a multiplicative inverse of $N_i$ modulo $n_i$ exists. If $n_i$ and $n_j$ shared a common factor $d > 1$, then $N_i = N/n_i$ would still be divisible by $d$, and thus $\gcd(N_i, n_i)$ would be greater than 1, meaning $N_i$ would not have an inverse modulo $n_i$, and the construction of the solution would fail. The pairwise coprime condition simplifies the problem significantly and ensures a unique solution modulo $N$.

4.  **Solution:**
    *   Moduli: 6 and 9.
    *   $\gcd(6, 9) = 3$.
    *   The moduli are **not** pairwise coprime.
    *   We need to check the condition for existence: $a_1 \equiv a_2 \pmod{\gcd(n_1, n_2)}$.
        Is $5 \equiv 2 \pmod{3}$?
        $5 \pmod{3} = 2$.
        $2 \pmod{3} = 2$.
        Yes, $2 \equiv 2 \pmod{3}$. So, a solution **exists**.
    *   **Uniqueness:** Because the moduli are not pairwise coprime, the solution is not guaranteed to be unique modulo $N = 6 \cdot 9 = 54$. Instead, it will be unique modulo $\operatorname{lcm}(6, 9) = 18$.
    *   To find the solution:
        $x \equiv 5 \pmod{6} \implies x = 6k + 5$
        Substitute into the second congruence:
        $6k + 5 \equiv 2 \pmod{9}$
        $6k \equiv -3 \pmod{9}$
        $6k \equiv 6 \pmod{9}$
        This implies $6k = 9m + 6$ for some integer $m$.
        Divide by 3: $2k = 3m + 2$.
        This means $2k \equiv 2 \pmod{3}$.
        Multiply by 2 (inverse of 2 mod 3): $4k \equiv 4 \pmod{3} \implies k \equiv 1 \pmod{3}$.
        So, $k = 3j + 1$.
        Substitute $k$ back into $x = 6k + 5$:
        $x = 6(3j + 1) + 5$
        $x = 18j + 6 + 5$
        $x = 18j + 11$
        Therefore, $x \equiv 11 \pmod{18}$.
        The solution is unique modulo 18.

---

### 11. Important Points to Remember

*   The CRT allows us to solve systems of linear congruences.
*   The **critical condition** for the standard CRT is that the moduli must be **pairwise coprime**.
*   If the moduli are pairwise coprime, the solution is **unique modulo the product of the moduli ($N = n_1 \cdot n_2 \cdot \ldots \cdot n_k$)**.
*   The existence of a solution requires $a_i \equiv a_j \pmod{\gcd(n_i, n_j)}$ for all pairs of congruences.
*   The constructive proof provides the method to calculate the solution: $x = \sum_{i=1}^k (a_i \cdot N_i \cdot y_i) \pmod{N}$, where $N_i = N/n_i$ and $y_i$ is the modular inverse of $N_i$ modulo $n_i$.
*   CRT is widely used to **speed up computations** in RSA by breaking down large modular exponentiations into smaller ones.
*   The Extended Euclidean Algorithm is essential for finding the required multiplicative inverses.
