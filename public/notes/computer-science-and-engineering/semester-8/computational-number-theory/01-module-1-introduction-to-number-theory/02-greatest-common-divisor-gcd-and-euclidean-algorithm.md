---
title: "Greatest common divisor (GCD) and Euclidean algorithm"
subject: "COMPUTATIONAL NUMBER THEORY"
module: "Module 1: Introduction to Number Theory "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cb32"
status: "completed"
scrapedAt: "2026-05-20T17:24:07.740Z"
---
# Computational Number Theory: Module 1 - Introduction to Number Theory

## Topic: Greatest Common Divisor (GCD) and Euclidean Algorithm

### Learning Outcomes:

*   **LO1: Understand the definition and properties of the Greatest Common Divisor (GCD).**
*   **LO2: Learn the Euclidean Algorithm for computing the GCD of two integers.**
*   **LO3: Understand the concept of pairwise coprime integers.**
*   **LO4: Be familiar with the relationship between GCD and the Bezout's Identity.**
*   **LO5: Understand the properties of GCD in relation to divisibility and prime factorization.**
*   **LO6: Be able to apply the Euclidean Algorithm and its extensions to solve problems.**

---

### 1. Greatest Common Divisor (GCD)

#### 1.1. Definition

The **Greatest Common Divisor (GCD)** of two non-zero integers, $a$ and $b$, is the largest positive integer that divides both $a$ and $b$ without leaving a remainder.

*   It is also commonly referred to as the **Highest Common Factor (HCF)**.
*   We denote the GCD of $a$ and $b$ as $\gcd(a, b)$.

**Example:**
Find $\gcd(12, 18)$.
*   Divisors of 12: 1, 2, 3, 4, 6, 12
*   Divisors of 18: 1, 2, 3, 6, 9, 18
*   Common divisors: 1, 2, 3, 6
*   The largest common divisor is 6. So, $\gcd(12, 18) = 6$.

#### 1.2. Properties of GCD

*   **Commutativity:** $\gcd(a, b) = \gcd(b, a)$
*   **Associativity:** $\gcd(a, b, c) = \gcd(\gcd(a, b), c) = \gcd(a, \gcd(b, c))$
*   **Identity Element:** $\gcd(a, 0) = |a|$ (for any non-zero integer $a$). This is because any integer divides 0, and the largest divisor of $a$ is $|a|$.
*   **GCD with 1:** $\gcd(a, 1) = 1$ for any integer $a$.
*   **GCD with itself:** $\gcd(a, a) = |a|$ for any non-zero integer $a$.
*   **GCD and Multiples:** $\gcd(ka, kb) = |k| \gcd(a, b)$ for any integer $k$.
*   **GCD and Division:** If $a = bq + r$, then $\gcd(a, b) = \gcd(b, r)$, where $0 \le r < |b|$. (This is the fundamental property used in the Euclidean Algorithm).
*   **If $d = \gcd(a, b)$, then $a = dx$ and $b = dy$ for some integers $x$ and $y$ such that $\gcd(x, y) = 1$.**

#### 1.3. GCD using Prime Factorization

For any two non-zero integers $a$ and $b$, if their prime factorizations are:
$a = p_1^{a_1} p_2^{a_2} \cdots p_n^{a_n}$
$b = p_1^{b_1} p_2^{b_2} \cdots p_n^{b_n}$
(where $p_i$ are distinct prime numbers and $a_i, b_i \ge 0$), then:
$\gcd(a, b) = p_1^{\min(a_1, b_1)} p_2^{\min(a_2, b_2)} \cdots p_n^{\min(a_n, b_n)}$

**Example:**
Find $\gcd(72, 120)$ using prime factorization.
*   $72 = 2^3 \cdot 3^2 \cdot 5^0$
*   $120 = 2^3 \cdot 3^1 \cdot 5^1$
*   $\gcd(72, 120) = 2^{\min(3, 3)} \cdot 3^{\min(2, 1)} \cdot 5^{\min(0, 1)}$
*   $\gcd(72, 120) = 2^3 \cdot 3^1 \cdot 5^0 = 8 \cdot 3 \cdot 1 = 24$.

**Important Note:** While prime factorization is conceptually clear, it can be computationally expensive for very large numbers. The Euclidean Algorithm is generally more efficient.

---

### 2. Euclidean Algorithm

The Euclidean Algorithm is an efficient method for computing the GCD of two integers. It is based on the principle that the GCD of two numbers does not change if the larger number is replaced by its difference with the smaller number. This process is repeated until one of the numbers becomes zero, and the other non-zero number is the GCD.

A more efficient version uses the property $\gcd(a, b) = \gcd(b, r)$, where $r$ is the remainder when $a$ is divided by $b$.

#### 2.1. The Algorithm

Given two non-negative integers $a$ and $b$, with $a \ge b$:

1.  If $b = 0$, then $\gcd(a, b) = a$.
2.  If $b \ne 0$, divide $a$ by $b$ to get a quotient $q$ and a remainder $r$, such that $a = bq + r$, where $0 \le r < b$.
3.  Replace $a$ with $b$ and $b$ with $r$.
4.  Repeat steps 1-3 until the remainder $r$ becomes 0. The last non-zero remainder is the GCD.

#### 2.2. Example: Finding $\gcd(48, 18)$

*   **Step 1:** $48 = 18 \cdot 2 + 12$  ($\gcd(48, 18) = \gcd(18, 12)$)
*   **Step 2:** $18 = 12 \cdot 1 + 6$   ($\gcd(18, 12) = \gcd(12, 6)$)
*   **Step 3:** $12 = 6 \cdot 2 + 0$    ($\gcd(12, 6) = \gcd(6, 0)$)

The last non-zero remainder is 6. Therefore, $\gcd(48, 18) = 6$.

#### 2.3. Example: Finding $\gcd(1071, 462)$

*   $1071 = 462 \cdot 2 + 147$
*   $462 = 147 \cdot 3 + 21$
*   $147 = 21 \cdot 7 + 0$

The last non-zero remainder is 21. Therefore, $\gcd(1071, 462) = 21$.

#### 2.4. Importance of the Euclidean Algorithm

*   **Efficiency:** It's very efficient, especially for large numbers, as the number of steps is logarithmic with respect to the input numbers.
*   **Foundation for other algorithms:** It forms the basis for many other algorithms in computational number theory, such as finding modular inverses.

---

### 3. Pairwise Coprime Integers

#### 3.1. Definition

A set of integers is said to be **pairwise coprime** (or mutually coprime) if the GCD of any two distinct integers in the set is 1.

**Example:**
The set $\{3, 5, 7\}$ is pairwise coprime because:
*   $\gcd(3, 5) = 1$
*   $\gcd(3, 7) = 1$
*   $\gcd(5, 7) = 1$

**Example:**
The set $\{6, 10, 15\}$ is *not* pairwise coprime because:
*   $\gcd(6, 10) = 2 \ne 1$
*   $\gcd(6, 15) = 3 \ne 1$
*   $\gcd(10, 15) = 5 \ne 1$

**Note:** A set of integers can be coprime (meaning their overall GCD is 1) without being pairwise coprime. For instance, $\{6, 10, 15\}$ is coprime since $\gcd(6, 10, 15) = 1$, but it is not pairwise coprime.

---

### 4. Bezout's Identity

#### 4.1. Definition

**Bezout's Identity** states that for any two integers $a$ and $b$, not both zero, there exist integers $x$ and $y$ such that:
$ax + by = \gcd(a, b)$

Furthermore, $\gcd(a, b)$ is the smallest positive integer that can be expressed in this form.

#### 4.2. Extended Euclidean Algorithm

The Extended Euclidean Algorithm is an extension of the Euclidean Algorithm that finds the integers $x$ and $y$ that satisfy Bezout's Identity. It works by keeping track of the coefficients used in each step of the Euclidean Algorithm.

**Algorithm Outline:**

We want to find $x, y$ such that $ax + by = \gcd(a, b)$.
We start with the equations:
$a = a \cdot 1 + b \cdot 0$
$b = a \cdot 0 + b \cdot 1$

Let's track the coefficients $(x, y)$ for each remainder.
If $a = bq + r$, we can express $r$ as $r = a - bq$.
Substituting the expressions for $a$ and $b$ in terms of the original numbers, we can derive the expressions for $r$.

**Example: Finding $x, y$ for $\gcd(48, 18)$**

We know $\gcd(48, 18) = 6$. We want to find $x, y$ such that $48x + 18y = 6$.

From the Euclidean Algorithm steps:
1.  $48 = 18 \cdot 2 + 12 \implies 12 = 48 - 18 \cdot 2$
2.  $18 = 12 \cdot 1 + 6 \implies 6 = 18 - 12 \cdot 1$

Now, substitute the expression for 12 from step 1 into step 2:
$6 = 18 - (48 - 18 \cdot 2) \cdot 1$
$6 = 18 - 48 \cdot 1 + 18 \cdot 2$
$6 = 18 \cdot (1 + 2) - 48 \cdot 1$
$6 = 18 \cdot 3 - 48 \cdot 1$

So, we have $48 \cdot (-1) + 18 \cdot 3 = 6$.
Here, $x = -1$ and $y = 3$.

**Example: Finding $x, y$ for $\gcd(1071, 462)$**

We know $\gcd(1071, 462) = 21$. We want to find $x, y$ such that $1071x + 462y = 21$.

Euclidean Algorithm steps:
1.  $1071 = 462 \cdot 2 + 147 \implies 147 = 1071 - 462 \cdot 2$
2.  $462 = 147 \cdot 3 + 21 \implies 21 = 462 - 147 \cdot 3$

Substitute expression for 147 from step 1 into step 2:
$21 = 462 - (1071 - 462 \cdot 2) \cdot 3$
$21 = 462 - 1071 \cdot 3 + 462 \cdot 6$
$21 = 462 \cdot (1 + 6) - 1071 \cdot 3$
$21 = 462 \cdot 7 - 1071 \cdot 3$

So, we have $1071 \cdot (-3) + 462 \cdot 7 = 21$.
Here, $x = -3$ and $y = 7$.

**Important Point:** The coefficients $x$ and $y$ in Bezout's Identity are not unique. If $(x_0, y_0)$ is a solution, then $(x_0 + k \frac{b}{\gcd(a,b)}, y_0 - k \frac{a}{\gcd(a,b)})$ for any integer $k$ is also a solution.

---

### 5. GCD Properties in Relation to Divisibility and Prime Factorization

We've touched upon these, but let's consolidate:

*   **Divisibility:** If $d \mid a$ and $d \mid b$, then $d \mid \gcd(a, b)$.
    *   This means that the GCD is the "greatest" common divisor. Any other common divisor must divide the GCD.

*   **Prime Factorization Recap:**
    *   $\gcd(a, b) = \prod_p p^{\min(v_p(a), v_p(b))}$, where $v_p(n)$ is the exponent of prime $p$ in the prime factorization of $n$.

*   **Relation to Least Common Multiple (LCM):**
    *   For positive integers $a$ and $b$, $\gcd(a, b) \cdot \operatorname{lcm}(a, b) = ab$.
    *   This is a crucial relationship in number theory.

    **Example:**
    $\gcd(12, 18) = 6$
    $\operatorname{lcm}(12, 18) = 36$
    $6 \cdot 36 = 216$
    $12 \cdot 18 = 216$

---

### 6. Applications of GCD and Euclidean Algorithm

*   **Simplifying Fractions:** To simplify a fraction $\frac{a}{b}$, we can divide both the numerator and denominator by $\gcd(a, b)$.
    *   Example: $\frac{48}{18} = \frac{48 \div 6}{18 \div 6} = \frac{8}{3}$.

*   **Modular Inverse:** The Extended Euclidean Algorithm is used to find the modular multiplicative inverse. If $\gcd(a, m) = 1$, then there exist integers $x$ and $y$ such that $ax + my = 1$. Taking this equation modulo $m$, we get $ax \equiv 1 \pmod{m}$, so $x$ is the modular inverse of $a$ modulo $m$.

*   **Solving Linear Diophantine Equations:** Equations of the form $ax + by = c$ have integer solutions if and only if $\gcd(a, b) \mid c$. The Extended Euclidean Algorithm helps find these solutions.

*   **Cryptography:** GCD calculations are fundamental in many cryptographic algorithms, such as RSA.

---

### Practice Questions and Exercises

1.  **Calculate:**
    *   a) $\gcd(54, 24)$
    *   b) $\gcd(119, 287)$
    *   c) $\gcd(1001, 2431)$

2.  **Are the following sets pairwise coprime?**
    *   a) $\{10, 21, 33\}$
    *   b) $\{7, 11, 13\}$

3.  **Using the Euclidean Algorithm, find integers $x$ and $y$ such that $180x + 48y = \gcd(180, 48)$.**

4.  **Find $\gcd(252, 105)$ and express it in the form $252x + 105y$.**

5.  **What is $\gcd(0, 5)$?**

6.  **If $\gcd(a, b) = d$, then what is $\gcd(a/d, b/d)$?**

7.  **Find $\operatorname{lcm}(36, 60)$ using the relationship between GCD and LCM.**

---

### Answers to Practice Questions

1.  **Calculate:**
    *   a) $\gcd(54, 24)$:
        *   $54 = 24 \cdot 2 + 6$
        *   $24 = 6 \cdot 4 + 0$
        *   **Answer:** $\gcd(54, 24) = 6$
    *   b) $\gcd(119, 287)$:
        *   $287 = 119 \cdot 2 + 49$
        *   $119 = 49 \cdot 2 + 21$
        *   $49 = 21 \cdot 2 + 7$
        *   $21 = 7 \cdot 3 + 0$
        *   **Answer:** $\gcd(119, 287) = 7$
    *   c) $\gcd(1001, 2431)$:
        *   $2431 = 1001 \cdot 2 + 429$
        *   $1001 = 429 \cdot 2 + 143$
        *   $429 = 143 \cdot 3 + 0$
        *   **Answer:** $\gcd(1001, 2431) = 143$

2.  **Are the following sets pairwise coprime?**
    *   a) $\{10, 21, 33\}$:
        *   $\gcd(10, 21) = 1$
        *   $\gcd(10, 33) = 1$
        *   $\gcd(21, 33) = 3$
        *   **Answer:** No, because $\gcd(21, 33) \ne 1$.
    *   b) $\{7, 11, 13\}$:
        *   $\gcd(7, 11) = 1$
        *   $\gcd(7, 13) = 1$
        *   $\gcd(11, 13) = 1$
        *   **Answer:** Yes, all pairs have a GCD of 1.

3.  **Using the Euclidean Algorithm, find integers $x$ and $y$ such that $180x + 48y = \gcd(180, 48)$.**
    *   $\gcd(180, 48)$:
        *   $180 = 48 \cdot 3 + 36 \implies 36 = 180 - 48 \cdot 3$
        *   $48 = 36 \cdot 1 + 12 \implies 12 = 48 - 36 \cdot 1$
        *   $36 = 12 \cdot 3 + 0$
    *   $\gcd(180, 48) = 12$.
    *   Substitute:
        *   $12 = 48 - (180 - 48 \cdot 3) \cdot 1$
        *   $12 = 48 - 180 \cdot 1 + 48 \cdot 3$
        *   $12 = 48 \cdot (1 + 3) - 180 \cdot 1$
        *   $12 = 48 \cdot 4 - 180 \cdot 1$
    *   So, $180 \cdot (-1) + 48 \cdot 4 = 12$.
    *   **Answer:** $x = -1, y = 4$ (or any equivalent pair).

4.  **Find $\gcd(252, 105)$ and express it in the form $252x + 105y$.**
    *   $\gcd(252, 105)$:
        *   $252 = 105 \cdot 2 + 42 \implies 42 = 252 - 105 \cdot 2$
        *   $105 = 42 \cdot 2 + 21 \implies 21 = 105 - 42 \cdot 2$
        *   $42 = 21 \cdot 2 + 0$
    *   $\gcd(252, 105) = 21$.
    *   Substitute:
        *   $21 = 105 - (252 - 105 \cdot 2) \cdot 2$
        *   $21 = 105 - 252 \cdot 2 + 105 \cdot 4$
        *   $21 = 105 \cdot (1 + 4) - 252 \cdot 2$
        *   $21 = 105 \cdot 5 - 252 \cdot 2$
    *   So, $252 \cdot (-2) + 105 \cdot 5 = 21$.
    *   **Answer:** $\gcd(252, 105) = 21$, and $x = -2, y = 5$.

5.  **What is $\gcd(0, 5)$?**
    *   **Answer:** By definition, $\gcd(a, 0) = |a|$. So, $\gcd(0, 5) = 5$.

6.  **If $\gcd(a, b) = d$, then what is $\gcd(a/d, b/d)$?**
    *   If $a = dx$ and $b = dy$, then $\gcd(a, b) = d \cdot \gcd(x, y)$.
    *   Since $\gcd(a, b) = d$, we must have $\gcd(x, y) = 1$.
    *   Therefore, $\gcd(a/d, b/d) = \gcd(x, y) = 1$.
    *   **Answer:** 1.

7.  **Find $\operatorname{lcm}(36, 60)$ using the relationship between GCD and LCM.**
    *   First, find $\gcd(36, 60)$:
        *   $60 = 36 \cdot 1 + 24$
        *   $36 = 24 \cdot 1 + 12$
        *   $24 = 12 \cdot 2 + 0$
        *   $\gcd(36, 60) = 12$.
    *   Using the formula $\gcd(a, b) \cdot \operatorname{lcm}(a, b) = ab$:
        *   $12 \cdot \operatorname{lcm}(36, 60) = 36 \cdot 60$
        *   $\operatorname{lcm}(36, 60) = \frac{36 \cdot 60}{12}$
        *   $\operatorname{lcm}(36, 60) = 3 \cdot 60 = 180$.
    *   **Answer:** $\operatorname{lcm}(36, 60) = 180$.

---

### Important Points to Remember

*   **Definition of GCD:** The largest *positive* integer that divides both numbers.
*   **Euclidean Algorithm Property:** $\gcd(a, b) = \gcd(b, r)$ where $r$ is the remainder of $a \div b$. This is the core of its efficiency.
*   **Termination of Euclidean Algorithm:** The algorithm *always* terminates because the remainders are strictly decreasing positive integers.
*   **Bezout's Identity:** $ax + by = \gcd(a, b)$. This establishes a linear combination equal to the GCD.
*   **Extended Euclidean Algorithm:** Crucial for finding the coefficients $x$ and $y$ in Bezout's Identity.
*   **Pairwise Coprime:** A stronger condition than just being coprime. Every pair in the set must have a GCD of 1.
*   **GCD vs. LCM:** Understand their fundamental relationship: $\gcd(a, b) \cdot \operatorname{lcm}(a, b) = ab$.
*   **Efficiency:** For large numbers, the Euclidean Algorithm is significantly more efficient than prime factorization for finding the GCD.
