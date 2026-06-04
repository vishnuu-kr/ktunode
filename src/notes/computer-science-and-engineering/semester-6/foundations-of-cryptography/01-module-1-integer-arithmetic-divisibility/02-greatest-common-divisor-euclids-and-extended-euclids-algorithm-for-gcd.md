---
title: "Greatest Common Divisor Euclid’s and Extended Euclid’s Algorithm for GCD"
subject: "FOUNDATIONS OF CRYPTOGRAPHY"
module: "Module 1: Integer Arithmetic – Divisibility"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bf06"
status: "completed"
scrapedAt: "2026-05-20T16:53:28.326Z"
---
# FOUNDATIONS OF CRYPTOGRAPHY

## Module 1: Integer Arithmetic – Divisibility

### Topic: Greatest Common Divisor (GCD) and Euclid's & Extended Euclid's Algorithms

---

### 1. Introduction to Divisibility and GCD

**Key Concepts:**

*   **Divisibility:** An integer $a$ is divisible by an integer $b$ (where $b \neq 0$) if there exists an integer $k$ such that $a = bk$. This is often denoted as $b | a$.
    *   If $b$ divides $a$, then $b$ is a **divisor** or **factor** of $a$.
    *   If $b$ does not divide $a$, we denote it as $b \nmid a$.

*   **Common Divisor:** A common divisor of two integers $a$ and $b$ is an integer $d$ that divides both $a$ and $b$.

*   **Greatest Common Divisor (GCD):** The greatest common divisor of two non-zero integers $a$ and $b$, denoted as $\gcd(a, b)$, is the largest positive integer that divides both $a$ and $b$.

**Important Points to Remember:**

*   The GCD is always positive.
*   $\gcd(a, b) = \gcd(b, a)$.
*   $\gcd(a, 0) = |a|$ for any non-zero integer $a$. This is because every integer divides 0, and the largest divisor of $a$ is $|a|$.
*   $\gcd(a, a) = |a|$.
*   If $\gcd(a, b) = 1$, then $a$ and $b$ are said to be **relatively prime** or **coprime**.

**Example:**

Let's find the common divisors of 12 and 18.

*   Divisors of 12: $\pm 1, \pm 2, \pm 3, \pm 4, \pm 6, \pm 12$
*   Divisors of 18: $\pm 1, \pm 2, \pm 3, \pm 6, \pm 9, \pm 18$

The common divisors are: $\pm 1, \pm 2, \pm 3, \pm 6$.
The greatest common divisor is 6. So, $\gcd(12, 18) = 6$.

---

### 2. Euclid's Algorithm for GCD

**Learning Outcomes Covered:**

*   Understand the principle behind Euclid's algorithm.
*   Apply Euclid's algorithm to compute the GCD of two integers.

**Key Concept:**

Euclid's algorithm is an efficient method for computing the greatest common divisor (GCD) of two integers. It is based on the principle that the greatest common divisor of two numbers does not change if the larger number is replaced by its difference with the smaller number. This process is repeated until the smaller number becomes zero. A more efficient version uses the remainder from division.

**Principle:**

For any two integers $a$ and $b$ with $b \neq 0$, the following property holds:
$\gcd(a, b) = \gcd(b, a \pmod b)$

where $a \pmod b$ is the remainder when $a$ is divided by $b$.

**Algorithm Steps:**

1.  Given two non-negative integers $a$ and $b$, with $a \ge b$.
2.  If $b = 0$, then $\gcd(a, b) = a$. This is the base case.
3.  If $b \neq 0$, then replace $a$ with $b$ and $b$ with $a \pmod b$.
4.  Repeat step 2.

**Example:**

Let's compute $\gcd(48, 18)$ using Euclid's algorithm.

1.  $\gcd(48, 18)$
    *   $48 = 2 \times 18 + 12$
    *   So, $\gcd(48, 18) = \gcd(18, 12)$

2.  $\gcd(18, 12)$
    *   $18 = 1 \times 12 + 6$
    *   So, $\gcd(18, 12) = \gcd(12, 6)$

3.  $\gcd(12, 6)$
    *   $12 = 2 \times 6 + 0$
    *   So, $\gcd(12, 6) = \gcd(6, 0)$

4.  The remainder is 0, so the GCD is the non-zero number, which is 6.
    *   $\gcd(48, 18) = 6$.

**Important Points to Remember:**

*   Euclid's algorithm is guaranteed to terminate because the remainders are strictly decreasing positive integers until they reach zero.
*   It's efficient for large numbers.

---

### 3. Extended Euclid's Algorithm

**Learning Outcomes Covered:**

*   Understand the purpose of the Extended Euclid's Algorithm.
*   Apply the Extended Euclid's Algorithm to find coefficients for Bézout's identity.
*   Relate the Extended Euclid's Algorithm to finding modular multiplicative inverses.

**Key Concepts:**

*   **Bézout's Identity:** For any two integers $a$ and $b$, there exist integers $x$ and $y$ (called Bézout coefficients) such that:
    $ax + by = \gcd(a, b)$

*   **Extended Euclid's Algorithm:** This algorithm not only computes the GCD of $a$ and $b$ but also finds the coefficients $x$ and $y$ that satisfy Bézout's identity.

*   **Modular Multiplicative Inverse:** For integers $a$ and $m$, the modular multiplicative inverse of $a$ modulo $m$ is an integer $x$ such that $ax \equiv 1 \pmod m$. An inverse exists if and only if $\gcd(a, m) = 1$.

**Purpose of Extended Euclid's Algorithm:**

The Extended Euclid's Algorithm is crucial in cryptography for several reasons, most notably for:

1.  **Finding Modular Multiplicative Inverses:** If $\gcd(a, m) = 1$, then Bézout's identity states that $ax + my = 1$. Taking this equation modulo $m$, we get $ax \equiv 1 \pmod m$. Therefore, $x$ is the modular multiplicative inverse of $a$ modulo $m$.
2.  **Solving Linear Diophantine Equations:** Equations of the form $ax + by = c$ can be solved if and only if $\gcd(a, b)$ divides $c$. The Extended Euclid's Algorithm helps find one particular solution.

**Algorithm Steps (Iterative Approach):**

Let $a$ and $b$ be the two integers for which we want to find $\gcd(a, b)$ and coefficients $x, y$ such that $ax + by = \gcd(a, b)$.

Initialize:
*   $r_0 = a$, $r_1 = b$
*   $x_0 = 1$, $y_0 = 0$  (representing $a = 1 \cdot a + 0 \cdot b$)
*   $x_1 = 0$, $y_1 = 1$  (representing $b = 0 \cdot a + 1 \cdot b$)

For $i = 1, 2, \dots$ as long as $r_i \neq 0$:
1.  Calculate the quotient $q_i = \lfloor r_{i-1} / r_i \rfloor$.
2.  Calculate the next remainder: $r_{i+1} = r_{i-1} - q_i r_i$.
3.  Calculate the corresponding coefficients:
    *   $x_{i+1} = x_{i-1} - q_i x_i$
    *   $y_{i+1} = y_{i-1} - q_i y_i$

When $r_{i+1} = 0$, then $\gcd(a, b) = r_i$, and the corresponding coefficients are $x = x_i$ and $y = y_i$.

**Example:**

Let's find $\gcd(48, 18)$ and the coefficients $x, y$ such that $48x + 18y = \gcd(48, 18)$.

| i   | $r_i$ | $q_i = \lfloor r_{i-1}/r_i \rfloor$ | $x_i$ | $y_i$ | Equation (for verification) |
| :-- | :---- | :-------------------------------- | :---- | :---- | :-------------------------- |
| 0   | 48    | -                                 | 1     | 0     | $48 = 1 \cdot 48 + 0 \cdot 18$ |
| 1   | 18    | $q_1 = \lfloor 48/18 \rfloor = 2$ | 0     | 1     | $18 = 0 \cdot 48 + 1 \cdot 18$ |
| 2   | 12    | $q_2 = \lfloor 18/12 \rfloor = 1$ | $x_2 = x_0 - q_1 x_1 = 1 - 2 \cdot 0 = 1$ | $y_2 = y_0 - q_1 y_1 = 0 - 2 \cdot 1 = -2$ | $12 = 1 \cdot 48 + (-2) \cdot 18$ |
| 3   | 6     | $q_3 = \lfloor 12/6 \rfloor = 2$  | $x_3 = x_1 - q_2 x_2 = 0 - 1 \cdot 1 = -1$ | $y_3 = y_1 - q_2 y_2 = 1 - 1 \cdot (-2) = 3$ | $6 = (-1) \cdot 48 + 3 \cdot 18$ |
| 4   | 0     | -                                 |       |       |                             |

The algorithm stops when $r_i = 0$.
So, $\gcd(48, 18) = r_3 = 6$.
The coefficients are $x = x_3 = -1$ and $y = y_3 = 3$.

Verification: $48(-1) + 18(3) = -48 + 54 = 6$. This matches $\gcd(48, 18)$.

**Example: Finding Modular Multiplicative Inverse**

Find the modular multiplicative inverse of 7 modulo 26.
We need to find $x$ such that $7x \equiv 1 \pmod{26}$.
This is equivalent to finding $x, y$ such that $7x + 26y = \gcd(7, 26)$.

First, let's use Euclid's algorithm to find $\gcd(7, 26)$:
*   $26 = 3 \cdot 7 + 5 \implies \gcd(26, 7) = \gcd(7, 5)$
*   $7 = 1 \cdot 5 + 2 \implies \gcd(7, 5) = \gcd(5, 2)$
*   $5 = 2 \cdot 2 + 1 \implies \gcd(5, 2) = \gcd(2, 1)$
*   $2 = 2 \cdot 1 + 0 \implies \gcd(2, 1) = 1$
So, $\gcd(7, 26) = 1$. An inverse exists.

Now, let's use the Extended Euclid's Algorithm to find the coefficients:

| i   | $r_i$ | $q_i$ | $x_i$ | $y_i$ | Equation (for verification) |
| :-- | :---- | :---- | :---- | :---- | :-------------------------- |
| 0   | 26    | -     | 1     | 0     | $26 = 1 \cdot 26 + 0 \cdot 7$  |
| 1   | 7     | $q_1 = \lfloor 26/7 \rfloor = 3$ | 0     | 1     | $7 = 0 \cdot 26 + 1 \cdot 7$   |
| 2   | 5     | $q_2 = \lfloor 7/5 \rfloor = 1$  | $x_2 = 1 - 3 \cdot 0 = 1$ | $y_2 = 0 - 3 \cdot 1 = -3$ | $5 = 1 \cdot 26 + (-3) \cdot 7$  |
| 3   | 2     | $q_3 = \lfloor 5/2 \rfloor = 2$  | $x_3 = 0 - 1 \cdot 1 = -1$ | $y_3 = 1 - 1 \cdot (-3) = 4$ | $2 = (-1) \cdot 26 + 4 \cdot 7$  |
| 4   | 1     | $q_4 = \lfloor 2/1 \rfloor = 2$  | $x_4 = 1 - 2 \cdot (-1) = 3$ | $y_4 = -3 - 2 \cdot 4 = -11$ | $1 = 3 \cdot 26 + (-11) \cdot 7$ |
| 5   | 0     | -     |       |       |                             |

The GCD is 1. The coefficients for $26x + 7y = 1$ are $x=3$ and $y=-11$.
We are looking for the inverse of 7 modulo 26. From the equation $26(3) + 7(-11) = 1$, we take it modulo 26:
$26(3) + 7(-11) \equiv 1 \pmod{26}$
$0 + 7(-11) \equiv 1 \pmod{26}$
$7(-11) \equiv 1 \pmod{26}$

So, $-11$ is the inverse of 7 modulo 26. However, we usually want a positive inverse.
$-11 \equiv -11 + 26 \equiv 15 \pmod{26}$.

Therefore, the modular multiplicative inverse of 7 modulo 26 is 15.

Verification: $7 \times 15 = 105$.
$105 \div 26 = 4$ with a remainder of $1$.
$105 \equiv 1 \pmod{26}$. This is correct.

**Important Points to Remember:**

*   The Extended Euclid's Algorithm is a constructive proof of Bézout's identity.
*   It's the standard way to compute modular multiplicative inverses, which are fundamental in many cryptographic algorithms (e.g., RSA).
*   When computing modular inverses, ensure that the GCD of the number and the modulus is 1.
*   The coefficients $x$ and $y$ can be negative. To get a positive modular inverse, add the modulus to a negative coefficient until it becomes positive.

---

### 4. Practice Questions and Exercises

**Question 1:**
Find the greatest common divisor of 105 and 30 using Euclid's algorithm.

**Question 2:**
Find integers $x$ and $y$ such that $105x + 30y = \gcd(105, 30)$ using the Extended Euclid's Algorithm.

**Question 3:**
Find the modular multiplicative inverse of 5 modulo 17.

**Question 4:**
Find the modular multiplicative inverse of 11 modulo 23.

---

### 5. Answers to Practice Questions

**Answer 1:**
Using Euclid's algorithm for $\gcd(105, 30)$:
1.  $105 = 3 \times 30 + 15 \implies \gcd(105, 30) = \gcd(30, 15)$
2.  $30 = 2 \times 15 + 0 \implies \gcd(30, 15) = 15$
Therefore, $\gcd(105, 30) = 15$.

**Answer 2:**
We need to find $x, y$ such that $105x + 30y = 15$.

| i   | $r_i$ | $q_i$ | $x_i$ | $y_i$ | Equation (for verification)        |
| :-- | :---- | :---- | :---- | :---- | :--------------------------------- |
| 0   | 105   | -     | 1     | 0     | $105 = 1 \cdot 105 + 0 \cdot 30$   |
| 1   | 30    | 3     | 0     | 1     | $30 = 0 \cdot 105 + 1 \cdot 30$    |
| 2   | 15    | 2     | $x_2 = 1 - 3 \cdot 0 = 1$ | $y_2 = 0 - 3 \cdot 1 = -3$ | $15 = 1 \cdot 105 + (-3) \cdot 30$ |
| 3   | 0     | -     |       |       |                                    |

So, $\gcd(105, 30) = 15$, and the coefficients are $x=1$ and $y=-3$.
Verification: $105(1) + 30(-3) = 105 - 90 = 15$.

**Answer 3:**
Find $x$ such that $5x \equiv 1 \pmod{17}$.
$\gcd(5, 17) = 1$, so an inverse exists.
Using Extended Euclid's Algorithm for $5x + 17y = 1$:

| i   | $r_i$ | $q_i$ | $x_i$ | $y_i$ | Equation (for verification)        |
| :-- | :---- | :---- | :---- | :---- | :--------------------------------- |
| 0   | 17    | -     | 1     | 0     | $17 = 1 \cdot 17 + 0 \cdot 5$    |
| 1   | 5     | 3     | 0     | 1     | $5 = 0 \cdot 17 + 1 \cdot 5$     |
| 2   | 2     | 2     | $x_2 = 1 - 3 \cdot 0 = 1$ | $y_2 = 0 - 3 \cdot 1 = -3$ | $2 = 1 \cdot 17 + (-3) \cdot 5$  |
| 3   | 1     | 2     | $x_3 = 0 - 2 \cdot 1 = -2$ | $y_3 = 1 - 2 \cdot (-3) = 7$ | $1 = (-2) \cdot 17 + 7 \cdot 5$  |
| 4   | 0     | -     |       |       |                                    |

From $17(-2) + 5(7) = 1$, we have $5(7) \equiv 1 \pmod{17}$.
The inverse of 5 modulo 17 is 7.

**Answer 4:**
Find $x$ such that $11x \equiv 1 \pmod{23}$.
$\gcd(11, 23) = 1$, so an inverse exists.
Using Extended Euclid's Algorithm for $11x + 23y = 1$:

| i   | $r_i$ | $q_i$ | $x_i$ | $y_i$ | Equation (for verification)        |
| :-- | :---- | :---- | :---- | :---- | :--------------------------------- |
| 0   | 23    | -     | 1     | 0     | $23 = 1 \cdot 23 + 0 \cdot 11$   |
| 1   | 11    | 2     | 0     | 1     | $11 = 0 \cdot 23 + 1 \cdot 11$   |
| 2   | 1     | 11    | $x_2 = 1 - 2 \cdot 0 = 1$ | $y_2 = 0 - 2 \cdot 1 = -2$ | $1 = 1 \cdot 23 + (-2) \cdot 11$ |
| 3   | 0     | -     |       |       |                                    |

From $23(1) + 11(-2) = 1$, we have $11(-2) \equiv 1 \pmod{23}$.
The inverse is $-2$.
Converting to a positive inverse: $-2 \equiv -2 + 23 \equiv 21 \pmod{23}$.
The inverse of 11 modulo 23 is 21.

---

### 6. Important Points to Remember (Summary)

*   **Divisibility:** $b|a$ if $a = bk$ for some integer $k$.
*   **GCD:** The largest positive integer that divides both numbers. $\gcd(a, b) = \gcd(b, a)$, $\gcd(a, 0) = |a|$.
*   **Euclid's Algorithm:** Efficiently finds GCD using the property $\gcd(a, b) = \gcd(b, a \pmod b)$.
*   **Bézout's Identity:** $ax + by = \gcd(a, b)$ for some integers $x, y$.
*   **Extended Euclid's Algorithm:** Finds GCD and Bézout coefficients $x, y$.
*   **Modular Inverse:** $ax \equiv 1 \pmod m$. Exists iff $\gcd(a, m) = 1$. The Extended Euclid's Algorithm is used to compute it. The coefficient $x$ from $ax + my = 1$ (taken modulo $m$) is the inverse.

---
