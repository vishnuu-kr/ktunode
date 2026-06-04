---
title: "Basic Algorithms - Algorithms for modular arithmetic"
subject: "COMPUTATIONAL NUMBER THEORY"
module: "Module 1: Introduction to Number Theory "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cb37"
status: "completed"
scrapedAt: "2026-05-20T17:24:11.198Z"
---
# Computational Number Theory: Module 1 - Introduction to Number Theory

## Topic: Basic Algorithms - Algorithms for Modular Arithmetic

### Learning Outcomes:

By the end of this topic, you should be able to:

*   Understand the fundamental properties of modular arithmetic.
*   Perform basic arithmetic operations (addition, subtraction, multiplication) modulo $n$.
*   Understand the concept of modular inverse and its importance.
*   Explain and apply the Extended Euclidean Algorithm to find modular inverses.
*   Understand and implement the concept of modular exponentiation.
*   Recognize the efficiency of these algorithms in computational contexts.

---

### 1. Introduction to Modular Arithmetic

Modular arithmetic is a system of arithmetic for integers, where numbers "wrap around" upon reaching a certain value—the modulus. It's fundamental to many areas of computer science, cryptography, and number theory.

**Key Concepts & Definitions:**

*   **Congruence Modulo n:** For two integers $a$ and $b$, and a positive integer $n$ (the modulus), we say that $a$ is congruent to $b$ modulo $n$ if $n$ divides the difference $a - b$. This is denoted as $a \equiv b \pmod{n}$.

    *   **Example:** $10 \equiv 4 \pmod{6}$ because $6$ divides $10 - 4 = 6$.
    *   **Example:** $7 \equiv -2 \pmod{3}$ because $3$ divides $7 - (-2) = 9$.

*   **Remainder:** $a \equiv b \pmod{n}$ is equivalent to saying that $a$ and $b$ have the same remainder when divided by $n$. The remainder $r$ is typically chosen such that $0 \le r < n$.

    *   **Example:** $10 \div 6$ has a remainder of $4$. So $10 \equiv 4 \pmod{6}$.
    *   **Example:** $7 \div 3$ has a remainder of $1$. $-2 \div 3$ has a remainder of $1$ (since $-2 = -1 \times 3 + 1$). So $7 \equiv 1 \pmod{3}$ and $-2 \equiv 1 \pmod{3}$, which means $7 \equiv -2 \pmod{3}$.

*   **Residue Class:** The set of all integers congruent to a given integer modulo $n$ is called its residue class modulo $n$.

    *   **Example:** The residue class of $4$ modulo $6$ is $\{\dots, -8, -2, 4, 10, 16, \dots\}$.

*   **Set of Residues:** The set $\{0, 1, 2, \dots, n-1\}$ is called the set of least non-negative residues modulo $n$.

**Properties of Modular Arithmetic:**

If $a \equiv b \pmod{n}$ and $c \equiv d \pmod{n}$, then:

1.  **Addition:** $a + c \equiv b + d \pmod{n}$
2.  **Subtraction:** $a - c \equiv b - d \pmod{n}$
3.  **Multiplication:** $a \times c \equiv b \times d \pmod{n}$

These properties allow us to perform arithmetic operations on residue classes, and the result is independent of which representative from the residue class we choose.

---

### 2. Basic Algorithms for Modular Arithmetic Operations

We can perform addition, subtraction, and multiplication modulo $n$ by simply performing the operation and then taking the remainder when divided by $n$.

**Algorithm 2.1: Modular Addition**

To compute $(a + b) \pmod{n}$:

1.  Compute $s = a + b$.
2.  Compute $r = s \pmod{n}$. This is the remainder when $s$ is divided by $n$.
3.  The result is $r$.

**Example:** Compute $(15 + 23) \pmod{7}$

1.  $s = 15 + 23 = 38$.
2.  $r = 38 \pmod{7}$. Since $38 = 5 \times 7 + 3$, the remainder is $3$.
3.  Result: $3$.

Alternatively, we can reduce the operands first:
$(15 \pmod{7} + 23 \pmod{7}) \pmod{7} = (1 + 2) \pmod{7} = 3 \pmod{7} = 3$.

**Algorithm 2.2: Modular Subtraction**

To compute $(a - b) \pmod{n}$:

1.  Compute $d = a - b$.
2.  Compute $r = d \pmod{n}$.
3.  The result is $r$. (Ensure $r$ is in the range $[0, n-1]$).

**Example:** Compute $(10 - 25) \pmod{12}$

1.  $d = 10 - 25 = -15$.
2.  $r = -15 \pmod{12}$. Since $-15 = -2 \times 12 + 9$, the remainder is $9$.
3.  Result: $9$.

Alternatively, $(10 \pmod{12} - 25 \pmod{12}) \pmod{12} = (10 - 1) \pmod{12} = 9 \pmod{12} = 9$.

**Algorithm 2.3: Modular Multiplication**

To compute $(a \times b) \pmod{n}$:

1.  Compute $p = a \times b$.
2.  Compute $r = p \pmod{n}$.
3.  The result is $r$.

**Example:** Compute $(8 \times 9) \pmod{5}$

1.  $p = 8 \times 9 = 72$.
2.  $r = 72 \pmod{5}$. Since $72 = 14 \times 5 + 2$, the remainder is $2$.
3.  Result: $2$.

Alternatively, $(8 \pmod{5} \times 9 \pmod{5}) \pmod{5} = (3 \times 4) \pmod{5} = 12 \pmod{5} = 2$.

**Important Point to Remember:**
When dealing with negative numbers in modular arithmetic, ensure your resulting remainder is non-negative and less than the modulus. A common way to achieve this is: if $r < 0$, add $n$ to $r$. For example, $-15 \pmod{12} = -15 + 12 = -3$, then $-3 + 12 = 9$. Or more directly, $-15 = -2 \times 12 + 9$.

---

### 3. Modular Inverse

A crucial concept in modular arithmetic is the modular inverse.

**Key Concepts & Definitions:**

*   **Modular Multiplicative Inverse:** For an integer $a$ and a modulus $n$, the modular multiplicative inverse of $a$ modulo $n$ is an integer $x$ such that $a \cdot x \equiv 1 \pmod{n}$.

    *   The inverse exists if and only if $a$ and $n$ are coprime (i.e., their greatest common divisor, $\text{gcd}(a, n)$, is 1).
    *   If the inverse exists, it is unique modulo $n$. We often denote it as $a^{-1} \pmod{n}$.

**Why are Modular Inverses Important?**

Modular inverses are essential for division in modular arithmetic. If we want to compute $(a / b) \pmod{n}$, it's equivalent to computing $(a \cdot b^{-1}) \pmod{n}$, where $b^{-1}$ is the modular inverse of $b$ modulo $n$.

**Example:** Find the modular inverse of $3$ modulo $7$.
We are looking for an $x$ such that $3x \equiv 1 \pmod{7}$.
Let's test values for $x$:
*   $3 \times 1 = 3 \equiv 3 \pmod{7}$
*   $3 \times 2 = 6 \equiv 6 \pmod{7}$
*   $3 \times 3 = 9 \equiv 2 \pmod{7}$
*   $3 \times 4 = 12 \equiv 5 \pmod{7}$
*   $3 \times 5 = 15 \equiv 1 \pmod{7}$
So, the modular inverse of $3$ modulo $7$ is $5$. $\text{gcd}(3, 7) = 1$, so an inverse exists.

---

### 4. The Extended Euclidean Algorithm (EEA)

The Extended Euclidean Algorithm is a powerful tool that not only finds the greatest common divisor (GCD) of two integers but also finds integers $x$ and $y$ such that $ax + by = \text{gcd}(a, b)$. This is known as Bézout's Identity.

When we want to find the modular inverse of $a$ modulo $n$, we need to solve $ax \equiv 1 \pmod{n}$. This congruence is equivalent to the equation $ax + ny = 1$ for some integer $y$. The EEA can find such $x$ and $y$ if $\text{gcd}(a, n) = 1$.

**Algorithm 4.1: Extended Euclidean Algorithm**

Given two non-negative integers $a$ and $b$, the EEA finds their $\text{gcd}(a, b)$ and integers $x, y$ such that $ax + by = \text{gcd}(a, b)$.

Let $a = r_0$ and $b = r_1$. We perform the division algorithm repeatedly:
$r_i = q_{i+1} r_{i+1} + r_{i+2}$ for $i = 0, 1, 2, \dots, k-1$, where $r_{k+1} = 0$.
The $\text{gcd}(a, b)$ is $r_k$.

We can express each remainder $r_i$ as a linear combination of $a$ and $b$: $r_i = s_i a + t_i b$.
Initialize:
*   $s_0 = 1, t_0 = 0$ (since $r_0 = 1 \cdot a + 0 \cdot b$)
*   $s_1 = 0, t_1 = 1$ (since $r_1 = 0 \cdot a + 1 \cdot b$)

For $i = 2, \dots, k$:
$r_i = r_{i-2} - q_i r_{i-1}$
Substitute $r_j = s_j a + t_j b$:
$s_i a + t_i b = (s_{i-2} a + t_{i-2} b) - q_i (s_{i-1} a + t_{i-1} b)$
$s_i a + t_i b = (s_{i-2} - q_i s_{i-1}) a + (t_{i-2} - q_i t_{i-1}) b$

By comparing coefficients of $a$ and $b$, we get the recurrence relations:
*   $s_i = s_{i-2} - q_i s_{i-1}$
*   $t_i = t_{i-2} - q_i t_{i-1}$

The algorithm terminates when $r_{k+1} = 0$, and $\text{gcd}(a, b) = r_k$. The coefficients $x$ and $y$ are $s_k$ and $t_k$ respectively.

**Example:** Find the modular inverse of $7$ modulo $26$.
We need to solve $7x \equiv 1 \pmod{26}$, which means finding $x, y$ such that $7x + 26y = 1$.
We apply the EEA to $a=26$ and $b=7$.

| i | $r_i$ | $q_i$ | $s_i$ | $t_i$ | Calculation                                       |
|---|-------|-------|-------|-------|---------------------------------------------------|
| 0 | 26    |       | 1     | 0     | $26 = 1 \cdot 26 + 0 \cdot 7$                      |
| 1 | 7     | 3     | 0     | 1     | $7 = 0 \cdot 26 + 1 \cdot 7$                       |
| 2 | 5     | 1     | 1     | -3    | $26 = 3 \cdot 7 + 5 \implies 5 = 26 - 3 \cdot 7$   |
| 3 | 2     | 2     | -1    | 4     | $7 = 1 \cdot 5 + 2 \implies 2 = 7 - 1 \cdot 5$     |
| 4 | 1     | 2     | 3     | -7    | $5 = 2 \cdot 2 + 1 \implies 1 = 5 - 2 \cdot 2$     |
| 5 | 0     |       |       |       | $2 = 2 \cdot 1 + 0$                                |

Let's trace the $s_i$ and $t_i$ values using the recurrence:
$q_2 = \lfloor 26/7 \rfloor = 3$.
$r_2 = 26 - 3 \cdot 7 = 5$.
$s_2 = s_0 - q_2 s_1 = 1 - 3 \cdot 0 = 1$.
$t_2 = t_0 - q_2 t_1 = 0 - 3 \cdot 1 = -3$.
So, $5 = 1 \cdot 26 + (-3) \cdot 7$.

$q_3 = \lfloor 7/5 \rfloor = 1$.
$r_3 = 7 - 1 \cdot 5 = 2$.
$s_3 = s_1 - q_3 s_2 = 0 - 1 \cdot 1 = -1$.
$t_3 = t_1 - q_3 t_2 = 1 - 1 \cdot (-3) = 4$.
So, $2 = (-1) \cdot 26 + 4 \cdot 7$.

$q_4 = \lfloor 5/2 \rfloor = 2$.
$r_4 = 5 - 2 \cdot 2 = 1$.
$s_4 = s_2 - q_4 s_3 = 1 - 2 \cdot (-1) = 3$.
$t_4 = t_2 - q_4 t_3 = -3 - 2 \cdot 4 = -3 - 8 = -11$.
So, $1 = 3 \cdot 26 + (-11) \cdot 7$.

The $\text{gcd}(7, 26) = 1$. We have found $x=-11$ and $y=3$ (for $a=26, b=7$) such that $26y + 7x = 1$.
Wait, the equation we want is $7x + 26y = 1$.
From our calculation $1 = 3 \cdot 26 + (-11) \cdot 7$.
So, $7 \cdot (-11) + 26 \cdot 3 = 1$.
Here, $x = -11$ and $y = 3$.

The modular inverse of $7$ modulo $26$ is $-11$. To get the non-negative representative:
$-11 \equiv -11 + 26 \pmod{26} \equiv 15 \pmod{26}$.

Let's check: $7 \times 15 = 105$.
$105 \pmod{26}$. $105 = 4 \times 26 + 1$. So $105 \equiv 1 \pmod{26}$.
The modular inverse of $7$ modulo $26$ is $15$.

**Important Point to Remember:**
When using the EEA to find $a^{-1} \pmod{n}$, set $a$ as the second number in the EEA (i.e., compute $\text{gcd}(n, a)$). The equation will be $nx + ay = \text{gcd}(n, a)$. If $\text{gcd}(n, a) = 1$, then $nx + ay = 1$. Taking this modulo $n$, we get $ay \equiv 1 \pmod{n}$. Thus, $y$ is the modular inverse of $a$.

Let's redo the example with the correct convention ($a=7, n=26$ for finding $7^{-1} \pmod{26}$). We need $7x + 26y = 1$.

| i | $r_i$ | $q_i$ | $s_i$ | $t_i$ | Calculation                                       |
|---|-------|-------|-------|-------|---------------------------------------------------|
| 0 | 7     |       | 1     | 0     | $7 = 1 \cdot 7 + 0 \cdot 26$                      |
| 1 | 26    | 0     | 0     | 1     | $26 = 0 \cdot 7 + 1 \cdot 26$                      |
| 2 | 7     | 3     | 1     | -3    | $26 = 3 \cdot 7 + 5 \implies 5 = 26 - 3 \cdot 7$   |  Oops, division order reversed.

Let's follow the standard $a=n$, $b=a$ approach for $a^{-1} \pmod n$. So we run EEA on $(26, 7)$.
The goal is $ax + ny = \text{gcd}(a, n)$.
We want $7x + 26y = 1$. So we should run EEA on $(7, 26)$.

| i | $r_i$ | $q_i$ | $s_i$ | $t_i$ | Calculation for $r_i = s_i a + t_i b$ where $a=7, b=26$ |
|---|-------|-------|-------|-------|------------------------------------------------------|
| 0 | 7     |       | 1     | 0     | $7 = 1 \cdot 7 + 0 \cdot 26$                         |
| 1 | 26    | 0     | 0     | 1     | $26 = 0 \cdot 7 + 1 \cdot 26$                         |
| 2 | 7     | 3     | 1     | -3    | $r_2 = r_0 - q_1 r_1$ is not how it works.           |

The correct way to run EEA for $ax + ny = \text{gcd}(a, n)$ is to use the original numbers $a$ and $n$ in the recurrence. Let's use the standard notation where we compute $\text{gcd}(a, b)$: $a=7, b=26$.

We want $7x + 26y = \text{gcd}(7, 26)$.

| i | $r_i$ | $q_i$ | $s_i$ | $t_i$ | $r_i = s_i \cdot 7 + t_i \cdot 26$ |
|---|-------|-------|-------|-------|------------------------------------|
| 0 | 7     |       | 1     | 0     | $7 = 1 \cdot 7 + 0 \cdot 26$       |
| 1 | 26    | 0     | 0     | 1     | $26 = 0 \cdot 7 + 1 \cdot 26$       |
| 2 | 7     | 3     | 1     | -3    | $q_1 = \lfloor 26/7 \rfloor = 3$. $r_2 = 26 - 3 \cdot 7 = 5$. $s_2 = s_0 - q_1 s_1 = 1 - 3 \cdot 0 = 1$. $t_2 = t_0 - q_1 t_1 = 0 - 3 \cdot 1 = -3$. $5 = 1 \cdot 7 + (-3) \cdot 26$. |
| 3 | 2     | 1     | -1    | 4     | $q_2 = \lfloor 7/5 \rfloor = 1$. $r_3 = 7 - 1 \cdot 5 = 2$. $s_3 = s_1 - q_2 s_2 = 0 - 1 \cdot 1 = -1$. $t_3 = t_1 - q_2 t_2 = 1 - 1 \cdot (-3) = 4$. $2 = (-1) \cdot 7 + 4 \cdot 26$. |
| 4 | 1     | 2     | 3     | -11   | $q_3 = \lfloor 5/2 \rfloor = 2$. $r_4 = 5 - 2 \cdot 2 = 1$. $s_4 = s_2 - q_3 s_3 = 1 - 2 \cdot (-1) = 3$. $t_4 = t_2 - q_3 t_3 = -3 - 2 \cdot 4 = -11$. $1 = 3 \cdot 7 + (-11) \cdot 26$. |
| 5 | 0     |       |       |       |                                    |

The $\text{gcd}(7, 26) = 1$. The equation is $1 = 3 \cdot 7 + (-11) \cdot 26$.
We want to find $x$ such that $7x \equiv 1 \pmod{26}$.
From $1 = 3 \cdot 7 + (-11) \cdot 26$, take modulo $26$:
$1 \equiv 3 \cdot 7 + (-11) \cdot 0 \pmod{26}$
$1 \equiv 3 \cdot 7 \pmod{26}$
So, $x = 3$.

Let's check: $7 \times 3 = 21 \equiv 21 \pmod{26}$. This is incorrect.

**Correction:** The table should be for $a$ and $b$ where $a>b$. So we should run EEA on $(26, 7)$ to find $26x + 7y = \text{gcd}(26, 7)$.

| i | $r_i$ | $q_i$ | $s_i$ | $t_i$ | $r_i = s_i \cdot 26 + t_i \cdot 7$ |
|---|-------|-------|-------|-------|------------------------------------|
| 0 | 26    |       | 1     | 0     | $26 = 1 \cdot 26 + 0 \cdot 7$      |
| 1 | 7     | 3     | 0     | 1     | $7 = 0 \cdot 26 + 1 \cdot 7$       |
| 2 | 5     | 1     | 1     | -3    | $q_1 = \lfloor 26/7 \rfloor = 3$. $r_2 = 26 - 3 \cdot 7 = 5$. $s_2 = s_0 - q_1 s_1 = 1 - 3 \cdot 0 = 1$. $t_2 = t_0 - q_1 t_1 = 0 - 3 \cdot 1 = -3$. $5 = 1 \cdot 26 + (-3) \cdot 7$. |
| 3 | 2     | 2     | -1    | 4     | $q_2 = \lfloor 7/5 \rfloor = 1$. $r_3 = 7 - 1 \cdot 5 = 2$. $s_3 = s_1 - q_2 s_2 = 0 - 1 \cdot 1 = -1$. $t_3 = t_1 - q_2 t_2 = 1 - 1 \cdot (-3) = 4$. $2 = (-1) \cdot 26 + 4 \cdot 7$. |
| 4 | 1     | 2     | 3     | -11   | $q_3 = \lfloor 5/2 \rfloor = 2$. $r_4 = 5 - 2 \cdot 2 = 1$. $s_4 = s_2 - q_3 s_3 = 1 - 2 \cdot (-1) = 3$. $t_4 = t_2 - q_3 t_3 = -3 - 2 \cdot 4 = -11$. $1 = 3 \cdot 26 + (-11) \cdot 7$. |
| 5 | 0     |       |       |       |                                    |

We have $1 = 3 \cdot 26 + (-11) \cdot 7$.
We want $7x \equiv 1 \pmod{26}$.
From $1 = 3 \cdot 26 + (-11) \cdot 7$, take modulo $26$:
$1 \equiv 3 \cdot 0 + (-11) \cdot 7 \pmod{26}$
$1 \equiv -11 \cdot 7 \pmod{26}$
So, $x = -11$.
The non-negative inverse is $-11 + 26 = 15$.
This matches our earlier manual calculation.

**Key takeaway for modular inverse using EEA:**
To find $a^{-1} \pmod{n}$, run the EEA on $(n, a)$ to find $nx + ay = \text{gcd}(n, a)$. If $\text{gcd}(n, a) = 1$, then $ay \equiv 1 \pmod{n}$, and $y$ is the inverse. Make sure to adjust $y$ to be in the range $[0, n-1]$.

---

### 5. Modular Exponentiation

Modular exponentiation is the process of computing $a^b \pmod{n}$, where $a$, $b$, and $n$ are integers. This is a fundamental operation in many cryptographic algorithms, such as RSA.

A naive approach of computing $a^b$ and then taking the modulo $n$ is computationally infeasible for large values of $b$ due to the enormous size of $a^b$.

**Algorithm 5.1: Exponentiation by Squaring (Binary Exponentiation)**

This algorithm computes $a^b \pmod{n}$ efficiently by leveraging the binary representation of the exponent $b$.

Let $b = (b_k b_{k-1} \dots b_1 b_0)_2$, where $b_i \in \{0, 1\}$.
Then $b = \sum_{i=0}^k b_i 2^i$.
And $a^b = a^{\sum_{i=0}^k b_i 2^i} = \prod_{i=0}^k a^{b_i 2^i}$.

The algorithm works as follows:

1.  Initialize `result = 1`.
2.  Reduce $a$ modulo $n$: `a = a % n`.
3.  Iterate while $b > 0$:
    *   If $b$ is odd (i.e., the last bit of $b$ is 1):
        `result = (result * a) % n`
    *   Square $a$: `a = (a * a) % n`
    *   Right shift $b$ (integer division by 2): `b = b // 2`
4.  Return `result`.

**Example:** Compute $3^{13} \pmod{17}$.
Here, $a=3$, $b=13$, $n=17$.
The binary representation of $b=13$ is $1101_2$ (since $13 = 8 + 4 + 1 = 1 \cdot 2^3 + 1 \cdot 2^2 + 0 \cdot 2^1 + 1 \cdot 2^0$).

Let's trace the algorithm:
Initialize: `result = 1`, `a = 3`, `b = 13`.

**Iteration 1:**
*   $b = 13$ (odd). `result = (1 * 3) % 17 = 3`.
*   `a = (3 * 3) % 17 = 9`.
*   `b = 13 // 2 = 6`.

**Iteration 2:**
*   $b = 6$ (even).
*   `a = (9 * 9) % 17 = 81 % 17$. $81 = 4 \times 17 + 13$. So `a = 13`.
*   `b = 6 // 2 = 3`.

**Iteration 3:**
*   $b = 3$ (odd). `result = (3 * 13) % 17 = 39 % 17`. $39 = 2 \times 17 + 5$. So `result = 5`.
*   `a = (13 * 13) % 17 = 169 % 17$. $169 = 9 \times 17 + 16$. So `a = 16`.
*   `b = 3 // 2 = 1`.

**Iteration 4:**
*   $b = 1$ (odd). `result = (5 * 16) % 17 = 80 % 17$. $80 = 4 \times 17 + 12$. So `result = 12`.
*   `a = (16 * 16) % 17 = 256 % 17$. $256 = 15 \times 17 + 1$. So `a = 1`.
*   `b = 1 // 2 = 0`.

Loop terminates. The result is `12`.

Let's verify: $3^{13} = 3^8 \cdot 3^4 \cdot 3^1$.
$3^1 = 3$
$3^2 = 9$
$3^4 = 81 \equiv 13 \pmod{17}$
$3^8 = (3^4)^2 \equiv 13^2 = 169 \equiv 16 \pmod{17}$
$3^{13} = 3^8 \cdot 3^4 \cdot 3^1 \equiv 16 \cdot 13 \cdot 3 \pmod{17}$
$16 \cdot 13 = 208$. $208 = 12 \times 17 + 4$. So $208 \equiv 4 \pmod{17}$.
$3^{13} \equiv 4 \cdot 3 \pmod{17} \equiv 12 \pmod{17}$.
The result is correct.

**Efficiency:**
The number of multiplications and squarings is proportional to the number of bits in the exponent $b$, which is $O(\log b)$. This is a significant improvement over the naive method.

---

### 6. Practice Questions and Exercises

**Section 1: Basic Modular Arithmetic**

1.  Calculate:
    *   $(45 + 67) \pmod{10}$
    *   $(100 - 35) \pmod{12}$
    *   $(23 \times 15) \pmod{8}$
    *   $(-15 + 8) \pmod{5}$

**Section 2: Modular Inverse**

2.  Find the modular inverse of $5$ modulo $13$.
3.  Find the modular inverse of $17$ modulo $42$ using the Extended Euclidean Algorithm.
4.  Does the modular inverse of $6$ modulo $10$ exist? Explain why or why not.

**Section 3: Modular Exponentiation**

5.  Compute $2^{10} \pmod{100}$.
6.  Compute $5^{27} \pmod{31}$ using exponentiation by squaring.

---

### Answers to Practice Questions

**Section 1: Basic Modular Arithmetic**

1.  *   $(45 + 67) \pmod{10} = 112 \pmod{10} = 2$.
        Alternatively: $(45 \pmod{10} + 67 \pmod{10}) \pmod{10} = (5 + 7) \pmod{10} = 12 \pmod{10} = 2$.
    *   $(100 - 35) \pmod{12} = 65 \pmod{12}$. $65 = 5 \times 12 + 5$. So, $5$.
        Alternatively: $(100 \pmod{12} - 35 \pmod{12}) \pmod{12} = (4 - 11) \pmod{12} = -7 \pmod{12} = 5$.
    *   $(23 \times 15) \pmod{8} = 345 \pmod{8}$. $345 = 43 \times 8 + 1$. So, $1$.
        Alternatively: $(23 \pmod{8} \times 15 \pmod{8}) \pmod{8} = (7 \times 7) \pmod{8} = 49 \pmod{8} = 1$.
    *   $(-15 + 8) \pmod{5} = -7 \pmod{5}$. $-7 = -2 \times 5 + 3$. So, $3$.
        Alternatively: $(-15 \pmod{5} + 8 \pmod{5}) \pmod{5} = (0 + 3) \pmod{5} = 3 \pmod{5} = 3$.

**Section 2: Modular Inverse**

2.  Find $x$ such that $5x \equiv 1 \pmod{13}$.
    *   $5 \times 1 = 5$
    *   $5 \times 2 = 10$
    *   $5 \times 3 = 15 \equiv 2 \pmod{13}$
    *   $5 \times 4 = 20 \equiv 7 \pmod{13}$
    *   $5 \times 5 = 25 \equiv 12 \pmod{13}$
    *   $5 \times 6 = 30 \equiv 4 \pmod{13}$
    *   $5 \times 7 = 35 \equiv 9 \pmod{13}$
    *   $5 \times 8 = 40 \equiv 1 \pmod{13}$
    The modular inverse of $5$ modulo $13$ is $8$.

3.  Find $17^{-1} \pmod{42}$. Use EEA on $(42, 17)$.
    We want $42x + 17y = \text{gcd}(42, 17)$.

    | i | $r_i$ | $q_i$ | $s_i$ | $t_i$ | $r_i = s_i \cdot 42 + t_i \cdot 17$ |
    |---|-------|-------|-------|-------|------------------------------------|
    | 0 | 42    |       | 1     | 0     | $42 = 1 \cdot 42 + 0 \cdot 17$      |
    | 1 | 17    | 2     | 0     | 1     | $17 = 0 \cdot 42 + 1 \cdot 17$      |
    | 2 | 8     | 2     | 1     | -2    | $42 = 2 \cdot 17 + 8 \implies 8 = 42 - 2 \cdot 17$. $s_2=1, t_2=-2$. |
    | 3 | 1     | 8     | -2    | 5     | $17 = 2 \cdot 8 + 1 \implies 1 = 17 - 2 \cdot 8$. $s_3 = 0 - 2 \cdot 1 = -2$. $t_3 = 1 - 2 \cdot (-2) = 5$. $1 = (-2) \cdot 42 + 5 \cdot 17$. |
    | 4 | 0     |       |       |       |                                    |

    From $1 = (-2) \cdot 42 + 5 \cdot 17$. Taking modulo $42$:
    $1 \equiv (-2) \cdot 0 + 5 \cdot 17 \pmod{42}$
    $1 \equiv 5 \cdot 17 \pmod{42}$.
    The modular inverse of $17$ modulo $42$ is $5$.

4.  The modular inverse of $6$ modulo $10$ does not exist because $\text{gcd}(6, 10) = 2$, which is not equal to $1$. For a modular inverse to exist, the number and the modulus must be coprime.

**Section 3: Modular Exponentiation**

5.  Compute $2^{10} \pmod{100}$.
    Binary of $10$ is $1010_2$.

    Initialize: `result = 1`, `a = 2`, `b = 10`.
    *   **Iter 1 (b=10, even):** `a = (2*2)%100 = 4`, `b = 5`.
    *   **Iter 2 (b=5, odd):** `result = (1*4)%100 = 4`, `a = (4*4)%100 = 16`, `b = 2`.
    *   **Iter 3 (b=2, even):** `a = (16*16)%100 = 256%100 = 56`, `b = 1`.
    *   **Iter 4 (b=1, odd):** `result = (4*56)%100 = 224%100 = 24`, `a = (56*56)%100 = 3136%100 = 36`, `b = 0`.
    Result is $24$.

6.  Compute $5^{27} \pmod{31}$.
    Binary of $27$ is $11011_2$ ($16 + 8 + 2 + 1$).

    Initialize: `result = 1`, `a = 5`, `b = 27`.
    *   **Iter 1 (b=27, odd):** `result = (1*5)%31 = 5`, `a = (5*5)%31 = 25`, `b = 13`.
    *   **Iter 2 (b=13, odd):** `result = (5*25)%31 = 125%31`. $125 = 4 \times 31 + 1$. So `result = 1`. `a = (25*25)%31 = 625%31`. $625 = 20 \times 31 + 5$. So `a = 5`. `b = 6`.
    *   **Iter 3 (b=6, even):** `a = (5*5)%31 = 25`, `b = 3`.
    *   **Iter 4 (b=3, odd):** `result = (1*25)%31 = 25`, `a = (25*25)%31 = 5`, `b = 1`.
    *   **Iter 5 (b=1, odd):** `result = (25*5)%31 = 125%31 = 1`, `a = (5*5)%31 = 25`, `b = 0`.
    Result is $1$.

---

### Important Points to Remember:

*   **Congruence:** $a \equiv b \pmod{n}$ means $n | (a-b)$.
*   **Properties:** Modular addition, subtraction, and multiplication preserve congruence.
*   **Modular Inverse:** $a^{-1} \pmod{n}$ exists if and only if $\text{gcd}(a, n) = 1$.
*   **Extended Euclidean Algorithm (EEA):** Used to find modular inverses by solving $ax + ny = \text{gcd}(a, n)$. When finding $a^{-1} \pmod{n}$, run EEA on $(n, a)$.
*   **Modular Exponentiation (Exponentiation by Squaring):** Efficiently computes $a^b \pmod{n}$ by processing the binary representation of $b$. Avoids large intermediate numbers.
*   **Negative Remainders:** Always ensure your final remainder is in the range $[0, n-1]$.
