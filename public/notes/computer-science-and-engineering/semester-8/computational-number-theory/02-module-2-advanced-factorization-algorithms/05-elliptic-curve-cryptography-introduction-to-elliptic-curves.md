---
title: "Elliptic Curve Cryptography - Introduction to elliptic curves"
subject: "COMPUTATIONAL NUMBER THEORY"
module: "Module 2: Advanced Factorization Algorithms "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cb3e"
status: "completed"
scrapedAt: "2026-05-20T17:24:15.351Z"
---
# COMPUTATIONAL NUMBER THEORY - Module 2: Advanced Factorization Algorithms

## Topic: Elliptic Curve Cryptography - Introduction to Elliptic Curves

### Learning Outcomes:

*   Understand the definition of an elliptic curve over finite fields.
*   Familiarize with the group law on elliptic curves.
*   Understand the concept of point addition and doubling.
*   Explain the role of the elliptic curve discrete logarithm problem (ECDLP).
*   Discuss the advantages of ECC over traditional cryptography.

---

### 1. What are Elliptic Curves?

**Definition:** An elliptic curve is a non-singular cubic curve defined by an equation of the form:

$$y^2 = x^3 + ax + b$$

where $a$ and $b$ are coefficients, and the curve is non-singular.

**Non-Singular Condition:** The condition for non-singularity is that the discriminant, $\Delta$, is non-zero. The discriminant for the short Weierstrass equation is given by:

$$\Delta = -16(4a^3 + 27b^2)$$

**Elliptic Curves over Finite Fields:** In cryptography, we are particularly interested in elliptic curves defined over finite fields, typically $\mathbb{F}_p$ (where $p$ is a prime) or $\mathbb{F}_{2^m}$ (where $m$ is a positive integer).

*   **Over $\mathbb{F}_p$:** The equation is $y^2 \equiv x^3 + ax + b \pmod{p}$, where $a, b \in \mathbb{F}_p$ and $\Delta \not\equiv 0 \pmod{p}$.
*   **Over $\mathbb{F}_{2^m}$:** The equation can be in various forms, such as $y^2 + xy \equiv x^3 + ax + b \pmod{p}$. The short Weierstrass form is typically not used directly.

**The Point at Infinity ($\mathcal{O}$):**
To form a group, we introduce a special point called the **point at infinity**, denoted by $\mathcal{O}$. This point acts as the identity element for the group operation. Geometrically, it can be thought of as lying "infinitely far up" the y-axis.

**Points on an Elliptic Curve:** The set of points on an elliptic curve $E$ over a finite field $\mathbb{F}_q$ is the set of pairs $(x, y)$ satisfying the curve equation, plus the point at infinity $\mathcal{O}$. This set forms a finite abelian group under a special addition operation.

---

### 2. The Group Law on Elliptic Curves

The addition operation on elliptic curves is defined geometrically and has algebraic formulations. Let $P = (x_1, y_1)$ and $Q = (x_2, y_2)$ be two points on an elliptic curve $E$.

**Geometric Definition:**
To add $P$ and $Q$:
1.  Draw a line through $P$ and $Q$.
2.  This line will intersect the curve at a third point, say $R'$.
3.  The sum $P + Q$ is defined as the reflection of $R'$ across the x-axis.

**Important Cases for Addition:**

*   **Case 1: $P = \mathcal{O}$ or $Q = \mathcal{O}$:**
    *   $P + \mathcal{O} = P$
    *   $\mathcal{O} + Q = Q$

*   **Case 2: $P = (x_1, y_1)$ and $Q = (x_2, y_2)$ with $x_1 = x_2$ and $y_1 = -y_2 \pmod{p}$ (i.e., $Q$ is the inverse of $P$):**
    *   The line through $P$ and $Q$ is a vertical line.
    *   This vertical line intersects the curve at $P$, $Q$, and $\mathcal{O}$.
    *   Therefore, $P + Q = \mathcal{O}$.
    *   The inverse of $P = (x, y)$ is $-P = (x, -y)$.

*   **Case 3: $P = Q$ (Point Doubling):**
    *   The line through $P$ and $Q$ is the tangent line to the curve at $P$.
    *   The tangent line intersects the curve at $P$ (with multiplicity 2) and a third point $R'$.
    *   $P + P = 2P$ is the reflection of $R'$ across the x-axis.

*   **Case 4: $P \neq Q$ and $x_1 \neq x_2$:**
    *   The line through $P$ and $Q$ is not vertical.
    *   It intersects the curve at $P$, $Q$, and a third point $R'$.
    *   $P + Q$ is the reflection of $R'$ across the x-axis.

---

### 3. Algebraic Formulation of the Group Law

Let $E$ be the curve $y^2 = x^3 + ax + b$ over $\mathbb{F}_p$.

**3.1 Point Addition ($P + Q$ where $P \neq Q$ and $P \neq -Q$)**

Let $P = (x_1, y_1)$ and $Q = (x_2, y_2)$.
The slope of the line through $P$ and $Q$ is:

$$m = \frac{y_2 - y_1}{x_2 - x_1} \pmod{p}$$

The third intersection point $R' = (x_3, y_3)$ has coordinates:

$$x_3 = m^2 - x_1 - x_2 \pmod{p}$$
$$y_3 = m(x_1 - x_3) - y_1 \pmod{p}$$

The sum $P + Q = (x_3, -y_3) \pmod{p}$.

**3.2 Point Doubling ($P + P = 2P$)**

Let $P = (x_1, y_1)$.
The slope of the tangent line at $P$ is:

$$m = \frac{3x_1^2 + a}{2y_1} \pmod{p}$$

The coordinates of $2P = (x_3, y_3)$ are:

$$x_3 = m^2 - 2x_1 \pmod{p}$$
$$y_3 = m(x_1 - x_3) - y_1 \pmod{p}$$

The result of the doubling is $(x_3, -y_3) \pmod{p}$.

**Important Note on Division:** The formulas involve division. In modular arithmetic, division by $d$ is multiplication by the modular multiplicative inverse $d^{-1} \pmod{p}$. This inverse exists if $d \not\equiv 0 \pmod{p}$. This is where the non-singular condition becomes crucial:
*   If $2y_1 \equiv 0 \pmod{p}$ during point doubling, it implies $y_1 \equiv 0 \pmod{p}$ (since $p \neq 2$ for the short Weierstrass form). If $y_1 \equiv 0$, the tangent line is vertical, and $2P = \mathcal{O}$.
*   If $x_1 = x_2$ and $y_1 = -y_2$, then $P + Q = \mathcal{O}$. If $x_1 = x_2$ and $y_1 = y_2$, we need to use point doubling.

---

### 4. The Elliptic Curve Discrete Logarithm Problem (ECDLP)

**Scalar Multiplication:** A fundamental operation on elliptic curves is scalar multiplication. Given a point $P$ on an elliptic curve $E$ and a scalar $k$ (a positive integer), scalar multiplication is defined as:

$$kP = \underbrace{P + P + \dots + P}_{k \text{ times}}$$

This can be computed efficiently using algorithms like the double-and-add method.

**The ECDLP:**
Given an elliptic curve $E$ over a finite field $\mathbb{F}_q$, a base point $P \in E(\mathbb{F}_q)$, and another point $Q \in E(\mathbb{F}_q)$ such that $Q = kP$ for some integer $k$, the **Elliptic Curve Discrete Logarithm Problem (ECDLP)** is to find the integer $k$.

**Example:**
Let $E$ be $y^2 \equiv x^3 + x + 1 \pmod{23}$.
Let $P = (3, 10)$ be a point on $E$.
If we are given $Q = 3P$, we need to compute $3P = P + P + P$.
First, compute $2P$:
Slope $m = \frac{3(3^2) + 1}{2(10)} = \frac{28}{20} \equiv \frac{5}{20} \pmod{23}$.
The inverse of $20 \pmod{23}$ is $15$ since $20 \times 15 = 300 = 13 \times 23 + 1$.
So, $m \equiv 5 \times 15 = 75 \equiv 6 \pmod{23}$.
$x_3 = m^2 - 2x_1 = 6^2 - 2(3) = 36 - 6 = 30 \equiv 7 \pmod{23}$.
$y_3 = m(x_1 - x_3) - y_1 = 6(3 - 7) - 10 = 6(-4) - 10 = -24 - 10 = -34 \equiv 13 \pmod{23}$.
So, $2P = (7, 13)$.

Now, compute $3P = 2P + P$. Let $P_2 = (7, 13)$ and $P = (3, 10)$.
$x_1 = 7, y_1 = 13, x_2 = 3, y_2 = 10$.
$m = \frac{y_2 - y_1}{x_2 - x_1} = \frac{10 - 13}{3 - 7} = \frac{-3}{-4} = \frac{3}{4} \pmod{23}$.
The inverse of $4 \pmod{23}$ is $6$ since $4 \times 6 = 24 \equiv 1 \pmod{23}$.
So, $m \equiv 3 \times 6 = 18 \pmod{23}$.
$x_3 = m^2 - x_1 - x_2 = 18^2 - 7 - 3 = 324 - 10 = 314 \pmod{23}$.
$314 = 13 \times 23 + 15$, so $x_3 \equiv 15 \pmod{23}$.
$y_3 = m(x_1 - x_3) - y_1 = 18(7 - 15) - 13 = 18(-8) - 13 = -144 - 13 = -157 \pmod{23}$.
$-157 = -7 \times 23 + 4$, so $y_3 \equiv 4 \pmod{23}$.
The sum is $(x_3, -y_3) = (15, -4) \equiv (15, 19) \pmod{23}$.
Therefore, $Q = 3P = (15, 19)$.

If given $P=(3,10)$ and $Q=(15,19)$ on $E$, the ECDLP is to find $k$ such that $kP = Q$. In this case, $k=3$.

---

### 5. Advantages of ECC over Traditional Cryptography

ECC offers significant advantages, primarily related to key size for equivalent security.

*   **Smaller Key Sizes:** The security of ECC is based on the ECDLP, which is believed to be computationally harder than the factorization problem (used in RSA) or the discrete logarithm problem in finite fields (used in Diffie-Hellman and DSA). This means that ECC can achieve the same level of security with much smaller key sizes.
    *   Example: A 256-bit ECC key provides a security level comparable to a 3072-bit RSA key.

*   **Efficiency:** Smaller key sizes translate to:
    *   **Reduced Bandwidth:** Less data to transmit for keys.
    *   **Lower Storage Requirements:** Keys take up less space.
    *   **Faster Operations (for equivalent security):** While individual point multiplications can be more computationally intensive than modular exponentiation for the same bit length, they are significantly faster when comparing operations for equivalent security levels due to the smaller key sizes.
    *   **Lower Power Consumption:** Beneficial for mobile and embedded devices.

*   **Suitability for Constrained Environments:** ECC's efficiency makes it ideal for devices with limited computational power, memory, and battery life.

---

### Important Points to Remember:

*   Elliptic curves are cubic curves with a special addition law that forms an abelian group.
*   The point at infinity ($\mathcal{O}$) is the identity element of the group.
*   The group law has algebraic formulas for point addition and point doubling.
*   The security of ECC relies on the hardness of the Elliptic Curve Discrete Logarithm Problem (ECDLP).
*   ECC provides equivalent security with much smaller key sizes compared to RSA and DSA, leading to efficiency gains.
*   The non-singularity condition ($\Delta \neq 0$) is crucial for the well-definedness of the group law.
*   When working over $\mathbb{F}_p$, divisions are performed by multiplying with modular inverses.

---

### Practice Questions/Exercises:

1.  **Definition:** What is the defining equation of a short Weierstrass elliptic curve? What condition ensures it is non-singular?
2.  **Group Law:** Let $E$ be the curve $y^2 \equiv x^3 + 2x + 2 \pmod{17}$. Let $P = (5, 1)$ and $Q = (6, 3)$ be points on $E$. Calculate $P + Q$.
3.  **Point Doubling:** Using the same curve $E$ as in Question 2, calculate $2P$ for $P = (5, 1)$.
4.  **ECDLP:** Consider the curve $y^2 \equiv x^3 + x + 1 \pmod{23}$ and the base point $P = (3, 10)$. If $Q = 4P$, compute the coordinates of $Q$.
5.  **Comparison:** Explain the main advantage of using ECC over RSA for achieving equivalent security levels.

---

### Answers:

1.  **Definition:** The defining equation is $y^2 = x^3 + ax + b$. The non-singularity condition is that the discriminant $\Delta = -16(4a^3 + 27b^2)$ is non-zero.
2.  **Point Addition ($P + Q$):**
    $P = (5, 1), Q = (6, 3)$.
    $m = \frac{y_2 - y_1}{x_2 - x_1} = \frac{3 - 1}{6 - 5} = \frac{2}{1} \equiv 2 \pmod{17}$.
    $x_3 = m^2 - x_1 - x_2 = 2^2 - 5 - 6 = 4 - 11 = -7 \equiv 10 \pmod{17}$.
    $y_3 = m(x_1 - x_3) - y_1 = 2(5 - 10) - 1 = 2(-5) - 1 = -10 - 1 = -11 \equiv 6 \pmod{17}$.
    $P + Q = (x_3, -y_3) = (10, -6) \equiv (10, 11) \pmod{17}$.
3.  **Point Doubling ($2P$):**
    $P = (5, 1)$.
    $m = \frac{3x_1^2 + a}{2y_1} = \frac{3(5^2) + 2}{2(1)} = \frac{3(25) + 2}{2} = \frac{75 + 2}{2} = \frac{77}{2} \pmod{17}$.
    $77 \equiv 9 \pmod{17}$.
    $m = \frac{9}{2} \pmod{17}$. The inverse of $2 \pmod{17}$ is $9$ (since $2 \times 9 = 18 \equiv 1 \pmod{17}$).
    $m = 9 \times 9 = 81 \equiv 13 \pmod{17}$.
    $x_3 = m^2 - 2x_1 = 13^2 - 2(5) = 169 - 10 = 159 \pmod{17}$.
    $159 = 9 \times 17 + 6$, so $x_3 \equiv 6 \pmod{17}$.
    $y_3 = m(x_1 - x_3) - y_1 = 13(5 - 6) - 1 = 13(-1) - 1 = -13 - 1 = -14 \equiv 3 \pmod{17}$.
    $2P = (x_3, -y_3) = (6, -3) \equiv (6, 14) \pmod{17}$.
4.  **ECDLP (Scalar Multiplication):**
    We need to compute $4P = 2 \times (2P)$. From the example in the notes, $2P = (7, 13)$.
    Now, we need to compute $2 \times (7, 13)$ on $y^2 \equiv x^3 + x + 1 \pmod{23}$.
    Let $P' = (7, 13)$.
    $m = \frac{3x_1^2 + a}{2y_1} = \frac{3(7^2) + 1}{2(13)} = \frac{3(49) + 1}{26} = \frac{147 + 1}{26} = \frac{148}{26} \pmod{23}$.
    $148 = 6 \times 23 + 10$, so $148 \equiv 10 \pmod{23}$.
    $26 = 1 \times 23 + 3$, so $26 \equiv 3 \pmod{23}$.
    $m = \frac{10}{3} \pmod{23}$. The inverse of $3 \pmod{23}$ is $8$ (since $3 \times 8 = 24 \equiv 1 \pmod{23}$).
    $m = 10 \times 8 = 80 \equiv 11 \pmod{23}$.
    $x_3 = m^2 - 2x_1 = 11^2 - 2(7) = 121 - 14 = 107 \pmod{23}$.
    $107 = 4 \times 23 + 15$, so $x_3 \equiv 15 \pmod{23}$.
    $y_3 = m(x_1 - x_3) - y_1 = 11(7 - 15) - 13 = 11(-8) - 13 = -88 - 13 = -101 \pmod{23}$.
    $-101 = -5 \times 23 + 14$, so $y_3 \equiv 14 \pmod{23}$.
    $Q = 4P = (x_3, -y_3) = (15, -14) \equiv (15, 9) \pmod{23}$.
5.  **Comparison:** The main advantage is that ECC offers equivalent security with significantly smaller key sizes. This leads to reduced bandwidth, lower storage requirements, and more efficient computations (especially on resource-constrained devices) when comparing systems designed to withstand the same level of attack.
