---
title: "Elliptic Curve Cryptography - Basics of elliptic curves"
subject: "COMPUTATIONAL NUMBER THEORY"
module: "Module 3: Public Key Cryptography "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cb43"
status: "completed"
scrapedAt: "2026-05-20T17:24:18.162Z"
---
# Computational Number Theory: Module 3 - Public Key Cryptography

## Topic: Elliptic Curve Cryptography - Basics of Elliptic Curves

This module introduces the fundamental concepts of elliptic curves, which form the mathematical backbone of Elliptic Curve Cryptography (ECC). ECC offers a powerful and efficient alternative to traditional public-key cryptosystems like RSA.

---

### Learning Outcomes

By the end of this topic, you will be able to:

*   **Define an elliptic curve** over a finite field and understand its algebraic representation.
*   **Understand the group structure** of points on an elliptic curve and the operation of point addition.
*   **Distinguish between different types of elliptic curves** relevant to cryptography (e.g., Weierstrass form).
*   **Grasp the concept of the Elliptic Curve Discrete Logarithm Problem (ECDLP)**, which underpins the security of ECC.
*   **Explain the basic principles of point multiplication** (scalar multiplication) on elliptic curves.

---

### 1. Definition of an Elliptic Curve

An elliptic curve is not an ellipse, despite its name. It is a specific type of algebraic curve defined by a cubic equation. For cryptographic applications, we are primarily interested in elliptic curves defined over **finite fields**.

#### 1.1 Elliptic Curves over Real Numbers (Intuitive Introduction)

To build intuition, let's first consider an elliptic curve defined over real numbers. A common form is the **Weierstrass equation**:

$y^2 = x^3 + ax + b$

where $a$ and $b$ are real constants.

**Key characteristics:**

*   **Smoothness:** The curve must be "smooth," meaning it doesn't have any cusps or self-intersections. This is guaranteed if the discriminant $\Delta = 4a^3 + 27b^2 \neq 0$.
*   **The Point at Infinity (O):** An essential component of the group structure. It can be visualized as a point infinitely far up or down the y-axis.

**Example (over real numbers):**

Consider the curve $y^2 = x^3 - x + 1$.
Here, $a = -1$ and $b = 1$.
The discriminant is $\Delta = 4(-1)^3 + 27(1)^2 = -4 + 27 = 23 \neq 0$. So, this is a smooth curve.

#### 1.2 Elliptic Curves over Finite Fields

In cryptography, we work with finite fields, most commonly $\mathbb{F}_p$ (where $p$ is a prime number) or $\mathbb{F}_{2^m}$ (binary fields).

An **elliptic curve $E$ over a finite field $\mathbb{F}_q$** is the set of points $(x, y)$ with coordinates in $\mathbb{F}_q$ that satisfy a specific cubic equation, along with a special point called the "point at infinity" (denoted by $O$).

The **short Weierstrass equation** for an elliptic curve over $\mathbb{F}_p$ (where $p > 3$) is:

$y^2 \equiv x^3 + ax + b \pmod{p}$

where $a, b \in \mathbb{F}_p$, and the discriminant $\Delta = 4a^3 + 27b^2 \not\equiv 0 \pmod{p}$ to ensure smoothness.

**Key Concepts:**

*   **Finite Field $\mathbb{F}_q$**: A set of $q$ elements with well-defined addition, subtraction, multiplication, and division (except by zero).
*   **Point $(x, y)$**: Both $x$ and $y$ are elements of the finite field $\mathbb{F}_q$.
*   **Point at Infinity ($O$)**: This is a conceptual point that acts as the identity element for the group operation.

**Example (over $\mathbb{F}_{17}$):**

Consider the curve $E: y^2 \equiv x^3 + 2x + 2 \pmod{17}$.
Here, $p = 17$, $a = 2$, $b = 2$.
Discriminant $\Delta = 4(2)^3 + 27(2)^2 = 4(8) + 27(4) = 32 + 108 \equiv 15 + 6 \equiv 21 \equiv 4 \pmod{17}$. Since $\Delta \not\equiv 0 \pmod{17}$, this is a valid elliptic curve.

Let's find some points on this curve:

*   **If $x = 0$**: $y^2 \equiv 0^3 + 2(0) + 2 \equiv 2 \pmod{17}$. We need to find $y$ such that $y^2 \equiv 2 \pmod{17}$.
    *   $1^2 = 1$, $2^2 = 4$, $3^2 = 9$, $4^2 = 16 \equiv -1$, $5^2 = 25 \equiv 8$, $6^2 = 36 \equiv 2$.
    *   So, $y \equiv 6 \pmod{17}$ is a solution.
    *   Also, $(-6)^2 \equiv 11^2 \equiv 121 \equiv 121 - 7 \times 17 = 121 - 119 = 2 \pmod{17}$.
    *   Thus, $(0, 6)$ and $(0, 11)$ are points on the curve.
*   **If $x = 1$**: $y^2 \equiv 1^3 + 2(1) + 2 \equiv 1 + 2 + 2 \equiv 5 \pmod{17}$. We need $y^2 \equiv 5 \pmod{17}$. Checking squares: $1, 4, 9, 16, 8, 2, 15, 13$. None of them are 5. So, no points with $x=1$.
*   **If $x = 2$**: $y^2 \equiv 2^3 + 2(2) + 2 \equiv 8 + 4 + 2 \equiv 14 \pmod{17}$. We need $y^2 \equiv 14 \pmod{17}$. Checking squares: $1, 4, 9, 16, 8, 2, 15, 13$. None of them are 14. So, no points with $x=2$.
*   **If $x = 3$**: $y^2 \equiv 3^3 + 2(3) + 2 \equiv 27 + 6 + 2 \equiv 35 \equiv 1 \pmod{17}$.
    *   So, $y^2 \equiv 1 \pmod{17}$.
    *   Solutions are $y \equiv 1 \pmod{17}$ and $y \equiv -1 \equiv 16 \pmod{17}$.
    *   Thus, $(3, 1)$ and $(3, 16)$ are points on the curve.

---

### 2. The Group Structure of Points on an Elliptic Curve

The set of points on an elliptic curve, along with the point at infinity, forms an **abelian group** under a specific addition operation. This group structure is crucial for cryptography.

#### 2.1 The Group Law (Point Addition)

The group operation is called **point addition**. Given two points $P$ and $Q$ on the curve, their sum $P+Q$ is also a point on the curve. The point at infinity $O$ acts as the identity element.

**Rules for Point Addition:**

1.  **Identity Element:** For any point $P$ on the curve, $P + O = O + P = P$.
2.  **Inverse:** For any point $P = (x, y)$, its inverse is $-P = (x, -y \pmod{p})$. We have $P + (-P) = O$.
3.  **Addition of Distinct Points ($P \neq Q$):**
    *   If $P+Q = O$, then $Q = -P$.
    *   If $P+Q \neq O$, the line passing through $P(x_1, y_1)$ and $Q(x_2, y_2)$ has a slope $m$:
        $m = \frac{y_2 - y_1}{x_2 - x_1} \pmod{p}$
    *   This line intersects the curve at a third point, say $R'$. The sum $P+Q$ is defined as the reflection of $R'$ across the x-axis, i.e., $P+Q = -R'$.
    *   The coordinates of $P+Q = (x_3, y_3)$ are:
        $x_3 \equiv m^2 - x_1 - x_2 \pmod{p}$
        $y_3 \equiv m(x_1 - x_3) - y_1 \pmod{p}$

4.  **Point Doubling ($P = Q$):**
    *   If $y_1 = 0$, then $P+P = 2P = O$ (because the tangent line at $P$ is vertical).
    *   If $y_1 \neq 0$, the tangent line at $P(x_1, y_1)$ has a slope $m$:
        $m = \frac{3x_1^2 + a}{2y_1} \pmod{p}$ (derived by implicit differentiation of $y^2 = x^3 + ax + b$)
    *   The coordinates of $2P = (x_3, y_3)$ are:
        $x_3 \equiv m^2 - 2x_1 \pmod{p}$
        $y_3 \equiv m(x_1 - x_3) - y_1 \pmod{p}$

**Important Note:** Division by zero in the slope calculation means the line is vertical.
*   For distinct points $P, Q$: If $x_1 = x_2$, then $y_1 = -y_2 \pmod{p}$, so $Q = -P$, and $P+Q=O$. This is covered by rule 2.
*   For point doubling: If $2y_1 \equiv 0 \pmod{p}$ (i.e., $y_1=0$ or $p=2$), the tangent line is vertical, and $2P=O$.

#### 2.2 Example of Point Addition over $\mathbb{F}_{17}$

Let's use the curve $E: y^2 \equiv x^3 + 2x + 2 \pmod{17}$ from before.
We found points $P = (0, 6)$ and $Q = (3, 1)$. Let's find $P+Q$.

*   $P = (x_1, y_1) = (0, 6)$
*   $Q = (x_2, y_2) = (3, 1)$

Since $P \neq Q$, we use the addition of distinct points formula.

1.  **Calculate the slope $m$**:
    $m = \frac{y_2 - y_1}{x_2 - x_1} \equiv \frac{1 - 6}{3 - 0} \equiv \frac{-5}{3} \equiv \frac{12}{3} \pmod{17}$
    To divide by 3, we need the modular inverse of 3 modulo 17.
    $3x \equiv 1 \pmod{17}$. $3 \times 6 = 18 \equiv 1 \pmod{17}$. So, $3^{-1} \equiv 6 \pmod{17}$.
    $m \equiv 12 \times 6 \equiv 72 \pmod{17}$.
    $72 = 4 \times 17 + 4$. So, $m \equiv 4 \pmod{17}$.

2.  **Calculate $x_3$**:
    $x_3 \equiv m^2 - x_1 - x_2 \pmod{17}$
    $x_3 \equiv 4^2 - 0 - 3 \pmod{17}$
    $x_3 \equiv 16 - 3 \equiv 13 \pmod{17}$.

3.  **Calculate $y_3$**:
    $y_3 \equiv m(x_1 - x_3) - y_1 \pmod{17}$
    $y_3 \equiv 4(0 - 13) - 6 \pmod{17}$
    $y_3 \equiv 4(-13) - 6 \pmod{17}$
    $y_3 \equiv 4(4) - 6 \pmod{17}$ (since $-13 \equiv 4 \pmod{17}$)
    $y_3 \equiv 16 - 6 \equiv 10 \pmod{17}$.

Therefore, $P+Q = (13, 10)$.

Let's verify if $(13, 10)$ is on the curve:
$y^2 \equiv 10^2 \equiv 100 \pmod{17}$.
$100 = 5 \times 17 + 15$. So, $y^2 \equiv 15 \pmod{17}$.

$x^3 + 2x + 2 \equiv 13^3 + 2(13) + 2 \pmod{17}$.
$13 \equiv -4 \pmod{17}$.
$13^3 \equiv (-4)^3 \equiv -64 \pmod{17}$.
$-64 = -4 \times 17 + 4$. So, $13^3 \equiv 4 \pmod{17}$.
$2(13) = 26 \equiv 9 \pmod{17}$.
$x^3 + 2x + 2 \equiv 4 + 9 + 2 \equiv 15 \pmod{17}$.
Since $y^2 \equiv 15$ and $x^3 + 2x + 2 \equiv 15 \pmod{17}$, the point $(13, 10)$ is indeed on the curve.

#### 2.3 Example of Point Doubling over $\mathbb{F}_{17}$

Let's calculate $2P$ for $P = (0, 6)$ on $E: y^2 \equiv x^3 + 2x + 2 \pmod{17}$.

*   $P = (x_1, y_1) = (0, 6)$. Since $y_1 = 6 \neq 0$, we use the tangent line formula.

1.  **Calculate the slope $m$**:
    $m = \frac{3x_1^2 + a}{2y_1} \pmod{17}$
    $m = \frac{3(0)^2 + 2}{2(6)} \equiv \frac{2}{12} \pmod{17}$.
    We need the modular inverse of 12 modulo 17.
    $12x \equiv 1 \pmod{17}$. $12 \times 10 = 120 = 7 \times 17 + 1$. So, $12^{-1} \equiv 10 \pmod{17}$.
    $m \equiv 2 \times 10 \equiv 20 \equiv 3 \pmod{17}$.

2.  **Calculate $x_3$ (which is $x_{2P}$)**:
    $x_3 \equiv m^2 - 2x_1 \pmod{17}$
    $x_3 \equiv 3^2 - 2(0) \pmod{17}$
    $x_3 \equiv 9 - 0 \equiv 9 \pmod{17}$.

3.  **Calculate $y_3$ (which is $y_{2P}$)**:
    $y_3 \equiv m(x_1 - x_3) - y_1 \pmod{17}$
    $y_3 \equiv 3(0 - 9) - 6 \pmod{17}$
    $y_3 \equiv 3(-9) - 6 \pmod{17}$
    $y_3 \equiv 3(8) - 6 \pmod{17}$ (since $-9 \equiv 8 \pmod{17}$)
    $y_3 \equiv 24 - 6 \pmod{17}$
    $y_3 \equiv 18 - 6 \equiv 12 \pmod{17}$.

Therefore, $2P = (9, 12)$.

Let's verify if $(9, 12)$ is on the curve:
$y^2 \equiv 12^2 \equiv 144 \pmod{17}$.
$144 = 8 \times 17 + 8$. So, $y^2 \equiv 8 \pmod{17}$.

$x^3 + 2x + 2 \equiv 9^3 + 2(9) + 2 \pmod{17}$.
$9^2 = 81 = 4 \times 17 + 13 \equiv 13 \pmod{17}$.
$9^3 \equiv 9 \times 13 \equiv 117 \pmod{17}$.
$117 = 6 \times 17 + 15$. So, $9^3 \equiv 15 \pmod{17}$.
$2(9) = 18 \equiv 1 \pmod{17}$.
$x^3 + 2x + 2 \equiv 15 + 1 + 2 \equiv 18 \equiv 1 \pmod{17}$.

Wait, there's a mistake somewhere. Let's recheck the calculations.

Recheck $m$ calculation:
$m \equiv \frac{2}{12} \pmod{17}$. $12^{-1} \equiv 10 \pmod{17}$.
$m \equiv 2 \times 10 \equiv 20 \equiv 3 \pmod{17}$. This is correct.

Recheck $x_3$ calculation:
$x_3 \equiv m^2 - 2x_1 \equiv 3^2 - 2(0) \equiv 9 \pmod{17}$. This is correct.

Recheck $y_3$ calculation:
$y_3 \equiv m(x_1 - x_3) - y_1 \pmod{17}$
$y_3 \equiv 3(0 - 9) - 6 \pmod{17}$
$y_3 \equiv 3(-9) - 6 \pmod{17}$
$y_3 \equiv 3(8) - 6 \pmod{17}$
$y_3 \equiv 24 - 6 \equiv 18 - 6 \equiv 12 \pmod{17}$. This calculation seems correct.

Let's recheck the verification of $2P = (9, 12)$ on the curve:
$y^2 \equiv 12^2 \equiv 144 \pmod{17}$. $144 = 8 \times 17 + 8$. So, $y^2 \equiv 8 \pmod{17}$. This is correct.

$x^3 + 2x + 2 \equiv 9^3 + 2(9) + 2 \pmod{17}$.
$9^3 \equiv 15 \pmod{17}$.
$2(9) \equiv 1 \pmod{17}$.
$x^3 + 2x + 2 \equiv 15 + 1 + 2 \equiv 18 \equiv 1 \pmod{17}$.

The verification fails. Let's look at the formula for $y_3$ again.
The line equation is $y - y_1 = m(x - x_1)$.
Substituting into the curve equation:
$(m(x - x_1) + y_1)^2 = x^3 + ax + b$
$m^2(x - x_1)^2 + 2my_1(x - x_1) + y_1^2 = x^3 + ax + b$
$m^2(x^2 - 2x x_1 + x_1^2) + 2my_1 x - 2my_1 x_1 + y_1^2 = x^3 + ax + b$
Since $y_1^2 = x_1^3 + ax_1 + b$:
$m^2 x^2 - 2m^2 x_1 x + m^2 x_1^2 + 2my_1 x - 2my_1 x_1 + x_1^3 + ax_1 + b = x^3 + ax + b$
$x^3 - m^2 x^2 + (a - 2my_1 + 2m^2 x_1)x + (b + 2my_1 x_1 - m^2 x_1^2 - x_1^3 - ax_1) = 0$

The roots of this cubic equation in $x$ are $x_1$ (double root) and $x_3$.
Sum of roots: $x_1 + x_1 + x_3 = -(\text{coefficient of } x^2) / (\text{coefficient of } x^3)$
$2x_1 + x_3 = -(-m^2) / 1 = m^2$.
So, $x_3 = m^2 - 2x_1$. This is correct.

Now, the $y$-coordinate of the third intersection point $R'$ is $y_{R'} = m(x_3 - x_1) + y_1$.
We want $P+Q = -R'$. So, $x_3$ is the $x$-coordinate of $P+Q$, and $y_3 = -y_{R'}$.
$y_3 = -(m(x_3 - x_1) + y_1)$
$y_3 = -m x_3 + m x_1 - y_1$.

Ah, the formula used was $y_3 \equiv m(x_1 - x_3) - y_1 \pmod{p}$. This is equivalent to $-m x_3 + m x_1 - y_1$. So the formula itself is correct.

Let's re-examine the algebra $9^3 \pmod{17}$.
$9 \times 9 = 81 \equiv 13 \pmod{17}$
$9 \times 13 = 117$. $117 = 6 \times 17 + 15$. $117 \equiv 15 \pmod{17}$. This is correct.

Let's re-check the question and the curve itself.
$E: y^2 \equiv x^3 + 2x + 2 \pmod{17}$. $P=(0, 6)$.
$a=2, b=2$.

$m = (3x_1^2+a)(2y_1)^{-1} = (3(0)^2+2)(2(6))^{-1} = 2 \times 12^{-1} \pmod{17}$.
$12^{-1} \equiv 10 \pmod{17}$.
$m = 2 \times 10 = 20 \equiv 3 \pmod{17}$.

$x_3 = m^2 - 2x_1 = 3^2 - 2(0) = 9 \pmod{17}$.

$y_3 = m(x_1 - x_3) - y_1 = 3(0 - 9) - 6 = 3(-9) - 6 = 3(8) - 6 = 24 - 6 = 18 \equiv 1 \pmod{17}$.

Ah, a calculation error in the previous attempt for $y_3$.
$y_3 \equiv 24 - 6 \equiv 18 \pmod{17}$.
$18 = 1 \times 17 + 1$. So, $y_3 \equiv 1 \pmod{17}$.

So, $2P = (9, 1)$.

Let's verify if $(9, 1)$ is on the curve:
$y^2 \equiv 1^2 \equiv 1 \pmod{17}$.

$x^3 + 2x + 2 \equiv 9^3 + 2(9) + 2 \pmod{17}$.
We found $9^3 \equiv 15 \pmod{17}$.
$2(9) \equiv 1 \pmod{17}$.
$x^3 + 2x + 2 \equiv 15 + 1 + 2 \equiv 18 \equiv 1 \pmod{17}$.

Now it matches! $2P = (9, 1)$.

This highlights the importance of careful modular arithmetic.

---

### 3. Types of Elliptic Curves in Cryptography

While the Weierstrass form $y^2 = x^3 + ax + b$ is common, specific forms are often chosen for efficiency or security reasons.

*   **Binary Fields ($\mathbb{F}_{2^m}$):** For efficiency in hardware implementations, elliptic curves over binary fields are often used. The equations can be simpler, such as:
    *   **Short Weierstrass form:** $y^2 + xy = x^3 + ax^2 + b$ (for $m > 1$)
    *   **Menezes-Okamoto-Valenta (MOV) attack:** This attack is relevant for curves in binary fields and influences the choice of curve parameters.
*   **Prime Fields ($\mathbb{F}_p$):** For general-purpose cryptography, prime fields are widely used. The short Weierstrass form is standard.

**Important Choice Factors:**

*   **Number of points on the curve ($n$):** The order of the group of points. For security, the order $n$ should be a large prime number. This ensures that the group is cyclic and has a large generator, which is essential for the Discrete Logarithm Problem.
*   **Subgroup Structure:** It's important to avoid subgroups of small order that could be vulnerable to certain attacks.
*   **Field Characteristic:** The choice between prime fields and binary fields impacts implementation complexity and performance.

---

### 4. The Elliptic Curve Discrete Logarithm Problem (ECDLP)

The security of ECC relies on the computational difficulty of solving the ECDLP.

**Definition:**

Given an elliptic curve $E$ defined over a finite field $\mathbb{F}_q$, a base point $G$ on $E$ of prime order $n$, and another point $P$ on $E$ such that $P = kG$ for some integer $k$ ($0 \le k < n$), the ECDLP is the problem of finding the integer $k$.

In simpler terms, if we know the starting point $G$ and the result of multiplying $G$ by some secret number $k$ (to get $P$), it's computationally infeasible to find that secret number $k$.

**Analogy to Discrete Logarithm Problem (DLP) in $\mathbb{F}_p^*$:**

In classical cryptography (like Diffie-Hellman in $\mathbb{F}_p^*$), the problem is to find $k$ given $g$ and $g^k \pmod{p}$. The ECDLP is the equivalent problem on elliptic curves, where multiplication replaces exponentiation and point addition replaces multiplication.

**Why is ECDLP hard?**

The group operation of point addition on elliptic curves does not exhibit the same algebraic properties that make the DLP solvable using algorithms like the Number Field Sieve. The best known algorithms for solving ECDLP are generally exponential in the size of the field and the order of the group.

**Key Security Implication:**

*   **Key Size:** The ECDLP is considered significantly harder than the DLP in $\mathbb{F}_p^*$. This means that ECC can achieve the same level of security as RSA or Diffie-Hellman with much smaller key sizes. For example, a 256-bit ECC key provides security roughly equivalent to a 3072-bit RSA key.

---

### 5. Point Multiplication (Scalar Multiplication)

Point multiplication is the fundamental operation used in ECC for key generation and encryption/decryption. It involves repeatedly adding a point $P$ to itself a certain number of times, or equivalently, multiplying the point $P$ by a scalar (an integer) $k$.

**Definition:**

Scalar multiplication of a point $P$ on an elliptic curve by an integer $k$ is defined as:
$kP = \underbrace{P + P + \dots + P}_{k \text{ times}}$

This is achieved by using the point addition and point doubling operations efficiently.

**Methods for Point Multiplication:**

*   **Naive Method (Repeated Doubling and Addition):**
    *   Convert the scalar $k$ to its binary representation.
    *   Iterate through the bits of $k$ from most significant to least significant.
    *   If the bit is 0, double the current point.
    *   If the bit is 1, double the current point and then add $P$.
    *   Start with $Q = O$. For each bit, $Q = 2Q$. If the bit is 1, $Q = Q+P$.

*   **Double-and-Add Algorithm (More Efficient):**
    Let $k = (k_m k_{m-1} \dots k_1 k_0)_2$.
    Initialize $R = O$.
    For $i$ from $m$ down to 0:
        $R = 2R$ (Point Doubling)
        If $k_i = 1$:
            $R = R + P$ (Point Addition)

    **Example: Calculate $5P$**
    The binary representation of 5 is $101_2$.
    $k = 5 = (101)_2$, so $m=2$, $k_2=1, k_1=0, k_0=1$.

    1.  Initialize $R = O$.
    2.  **i = 2 (MSB):**
        $R = 2R = 2 \times O = O$.
        $k_2 = 1$, so $R = R + P = O + P = P$. (Current $R = P$)
    3.  **i = 1:**
        $R = 2R = 2P$. (Current $R = 2P$)
        $k_1 = 0$, so no addition.
    4.  **i = 0 (LSB):**
        $R = 2R = 2(2P) = 4P$. (Current $R = 4P$)
        $k_0 = 1$, so $R = R + P = 4P + P = 5P$. (Current $R = 5P$)

    Final result: $5P$.

    This algorithm performs $m$ doublings and $s$ additions, where $s$ is the number of set bits (1s) in the binary representation of $k$.

**Why is point multiplication important?**

*   **Key Generation:** In ECC, a private key is a random integer $d$, and the public key is $Q = dG$, where $G$ is a generator point. This involves point multiplication.
*   **Encryption/Decryption:** ECC encryption schemes like ECIES use point multiplication to derive shared secrets.

---

### Practice Questions

1.  **Elliptic Curve Definition:**
    Consider the elliptic curve $E: y^2 \equiv x^3 + x + 1 \pmod{23}$.
    a.  What are the values of $a$ and $b$?
    b.  Calculate the discriminant $\Delta$ to verify it's a valid curve.
    c.  Find a point on the curve when $x=0$.
    d.  Find a point on the curve when $x=3$.

2.  **Point Addition:**
    Let $P = (3, 1)$ and $Q = (9, 10)$ be points on the curve $E: y^2 \equiv x^3 + 2x + 2 \pmod{17}$.
    Calculate $P+Q$. (Hint: You might recognize these points from the example).

3.  **Point Doubling:**
    Let $P = (3, 1)$ be a point on the curve $E: y^2 \equiv x^3 + 2x + 2 \pmod{17}$.
    Calculate $2P$.

4.  **ECDLP:**
    Suppose we are working with an elliptic curve $E$ over $\mathbb{F}_{29}$ with base point $G = (2, 3)$. If the private key $k = 5$, calculate the public key $Q = kG$.

---

### Answers to Practice Questions

1.  **Elliptic Curve Definition:**
    Consider the elliptic curve $E: y^2 \equiv x^3 + x + 1 \pmod{23}$.
    a.  $a = 1$, $b = 1$.
    b.  $\Delta = 4a^3 + 27b^2 \equiv 4(1)^3 + 27(1)^2 \equiv 4 + 27 \equiv 31 \equiv 8 \pmod{23}$.
        Since $\Delta \not\equiv 0 \pmod{23}$, it's a valid curve.
    c.  When $x=0$: $y^2 \equiv 0^3 + 0 + 1 \equiv 1 \pmod{23}$.
        $y^2 \equiv 1 \pmod{23}$ means $y \equiv 1 \pmod{23}$ or $y \equiv -1 \equiv 22 \pmod{23}$.
        Points: $(0, 1)$ and $(0, 22)$.
    d.  When $x=3$: $y^2 \equiv 3^3 + 3 + 1 \equiv 27 + 3 + 1 \equiv 31 \equiv 8 \pmod{23}$.
        We need $y^2 \equiv 8 \pmod{23}$. Let's check squares:
        $1^2=1, 2^2=4, 3^2=9, 4^2=16, 5^2=25\equiv 2, 6^2=36\equiv 13, 7^2=49\equiv 3, 8^2=64\equiv 18, 9^2=81\equiv 12, 10^2=100\equiv 8$.
        So, $y \equiv 10 \pmod{23}$ is a solution.
        The other solution is $y \equiv -10 \equiv 13 \pmod{23}$.
        Points: $(3, 10)$ and $(3, 13)$.

2.  **Point Addition:**
    $P = (3, 1)$, $Q = (9, 10)$ on $E: y^2 \equiv x^3 + 2x + 2 \pmod{17}$.
    $x_1 = 3, y_1 = 1$
    $x_2 = 9, y_2 = 10$
    $m = \frac{y_2 - y_1}{x_2 - x_1} \equiv \frac{10 - 1}{9 - 3} \equiv \frac{9}{6} \pmod{17}$.
    Inverse of $6 \pmod{17}$: $6x \equiv 1 \pmod{17}$. $6 \times 3 = 18 \equiv 1 \pmod{17}$. So $6^{-1} \equiv 3 \pmod{17}$.
    $m \equiv 9 \times 3 \equiv 27 \equiv 10 \pmod{17}$.
    $x_3 \equiv m^2 - x_1 - x_2 \equiv 10^2 - 3 - 9 \equiv 100 - 12 \equiv 100 - 12 \equiv 88 \pmod{17}$.
    $88 = 5 \times 17 + 3$. So $x_3 \equiv 3 \pmod{17}$.
    $y_3 \equiv m(x_1 - x_3) - y_1 \equiv 10(3 - 3) - 1 \equiv 10(0) - 1 \equiv -1 \equiv 16 \pmod{17}$.
    $P+Q = (3, 16)$.

3.  **Point Doubling:**
    $P = (3, 1)$ on $E: y^2 \equiv x^3 + 2x + 2 \pmod{17}$.
    $x_1 = 3, y_1 = 1$. $a = 2$.
    $m = \frac{3x_1^2 + a}{2y_1} \equiv \frac{3(3^2) + 2}{2(1)} \equiv \frac{3(9) + 2}{2} \equiv \frac{27 + 2}{2} \equiv \frac{29}{2} \pmod{17}$.
    $29 \equiv 12 \pmod{17}$.
    $m \equiv \frac{12}{2} \equiv 6 \pmod{17}$.
    $x_3 \equiv m^2 - 2x_1 \equiv 6^2 - 2(3) \equiv 36 - 6 \equiv 30 \pmod{17}$.
    $30 = 1 \times 17 + 13$. So $x_3 \equiv 13 \pmod{17}$.
    $y_3 \equiv m(x_1 - x_3) - y_1 \equiv 6(3 - 13) - 1 \equiv 6(-10) - 1 \equiv 6(7) - 1 \pmod{17}$ (since $-10 \equiv 7$).
    $y_3 \equiv 42 - 1 \equiv 41 \pmod{17}$.
    $41 = 2 \times 17 + 7$. So $y_3 \equiv 7 \pmod{17}$.
    $2P = (13, 7)$.

4.  **ECDLP:**
    $E$ over $\mathbb{F}_{29}$, $G = (2, 3)$, $k = 5$. Calculate $Q = 5G$.
    $5G = G + G + G + G + G$.
    Using the double-and-add algorithm: $5 = (101)_2$.

    1.  Initialize $R = O$.
    2.  **Bit 1 (MSB):** $R = 2R = O$. $R = R+G = G = (2, 3)$.
    3.  **Bit 0:** $R = 2R = 2G$.
        $x_1=2, y_1=3$. Curve equation needed for $a, b$. Let's assume a standard curve for this example. *Self-correction: The problem should specify the curve equation.*
        **Let's assume the curve is $y^2 \equiv x^3 + 1 \pmod{29}$.** ($a=0, b=1$).
        Calculate $2G = 2(2, 3)$:
        $m = \frac{3x_1^2 + a}{2y_1} \equiv \frac{3(2^2) + 0}{2(3)} \equiv \frac{12}{6} \equiv 2 \pmod{29}$.
        $x_3 \equiv m^2 - 2x_1 \equiv 2^2 - 2(2) \equiv 4 - 4 \equiv 0 \pmod{29}$.
        $y_3 \equiv m(x_1 - x_3) - y_1 \equiv 2(2 - 0) - 3 \equiv 4 - 3 \equiv 1 \pmod{29}$.
        So, $2G = (0, 1)$.

    4.  **Bit 1 (LSB):** $R = 2R = 2(2G) = 4G$. We have $R = (0, 1)$.
        $x_1=0, y_1=1$.
        $m = \frac{3x_1^2 + a}{2y_1} \equiv \frac{3(0^2) + 0}{2(1)} \equiv \frac{0}{2} \equiv 0 \pmod{29}$.
        $x_3 \equiv m^2 - 2x_1 \equiv 0^2 - 2(0) \equiv 0 \pmod{29}$.
        $y_3 \equiv m(x_1 - x_3) - y_1 \equiv 0(0 - 0) - 1 \equiv -1 \equiv 28 \pmod{29}$.
        So, $4G = (0, 28)$.
        $k_0 = 1$, so $R = R + G = 4G + G = 5G$.
        We need to add $4G=(0, 28)$ and $G=(2, 3)$.
        $x_1=0, y_1=28$
        $x_2=2, y_2=3$
        $m = \frac{y_2 - y_1}{x_2 - x_1} \equiv \frac{3 - 28}{2 - 0} \equiv \frac{-25}{2} \equiv \frac{4}{2} \equiv 2 \pmod{29}$.
        $x_3 \equiv m^2 - x_1 - x_2 \equiv 2^2 - 0 - 2 \equiv 4 - 2 \equiv 2 \pmod{29}$.
        $y_3 \equiv m(x_1 - x_3) - y_1 \equiv 2(0 - 2) - 28 \equiv 2(-2) - 28 \equiv -4 - 28 \equiv -32 \pmod{29}$.
        $-32 = -2 \times 29 + 26$. So $y_3 \equiv 26 \pmod{29}$.

    So, $Q = 5G = (2, 26)$.

    *Note: The answer for Question 4 depends heavily on the specific elliptic curve equation, which was not provided. The answer above assumes the common $y^2 = x^3 + 1 \pmod{p}$ form.*

---

### Important Points to Remember

*   **Elliptic curves for cryptography are defined over finite fields.**
*   **The point at infinity ($O$) is the identity element for point addition.**
*   **Point addition and doubling define the group law.** The formulas involve modular arithmetic.
*   **The Elliptic Curve Discrete Logarithm Problem (ECDLP) is the foundation of ECC security.** It is computationally hard to solve.
*   **Scalar multiplication ($kP$) is the core operation for ECC protocols.**
*   **ECC offers high security with smaller key sizes compared to RSA.**
*   **The choice of curve parameters (field, coefficients, generator, order) is crucial for security and performance.**

---
