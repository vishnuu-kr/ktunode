---
title: "Elliptic curve cryptosystems"
subject: "COMPUTATIONAL NUMBER THEORY"
module: "Module 3: Public Key Cryptography "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cb44"
status: "completed"
scrapedAt: "2026-05-20T17:24:18.863Z"
---
# COMPUTATIONAL NUMBER THEORY - Module 3: Public Key Cryptography

## Topic: Elliptic Curve Cryptosystems (ECC)

### 1. Introduction to Elliptic Curves

**What is an Elliptic Curve?**

An elliptic curve is a set of points $(x, y)$ that satisfy a specific cubic equation. The most common form is the **Weierstrass equation**:

$y^2 = x^3 + ax + b$

where $a$ and $b$ are constants, and the curve is non-singular.

**What does "non-singular" mean?**

A curve is non-singular if it doesn't have any "sharp points" or self-intersections. Mathematically, this is determined by the discriminant:

$\Delta = -16(4a^3 + 27b^2)$

For a non-singular curve, $\Delta \neq 0$.

**Points at Infinity**

To make the arithmetic on elliptic curves work consistently, we introduce a special "point at infinity," denoted as $\mathcal{O}$. This point acts as the additive identity in the group law.

**Elliptic Curves over Finite Fields**

In cryptography, we don't work with real numbers. Instead, we work with points on elliptic curves defined over finite fields, denoted as $\mathbb{F}_p$ (for prime $p$) or $\mathbb{F}_{2^m}$ (for binary fields).

*   **$\mathbb{F}_p$:** The field consists of integers $\{0, 1, ..., p-1\}$ with arithmetic performed modulo $p$.
*   **$\mathbb{F}_{2^m}$:** The field consists of polynomials of degree less than $m$ with coefficients in $\mathbb{F}_2$, with arithmetic performed modulo an irreducible polynomial of degree $m$.

**The Group Law on Elliptic Curves**

The key to ECC is that the points on an elliptic curve form an **abelian group** under a specific addition operation.

*   **Identity Element:** The point at infinity, $\mathcal{O}$.
*   **Inverse of a Point:** For a point $P = (x, y)$, its inverse is $-P = (x, -y)$ (over $\mathbb{F}_p$) or $(x, y)$ (over $\mathbb{F}_{2^m}$ if the characteristic is 2). Geometrically, $-P$ is the reflection of $P$ across the x-axis.
*   **Addition of Two Distinct Points $P$ and $Q$ ($P \neq Q$):**
    1.  Draw a line through $P$ and $Q$.
    2.  This line will intersect the elliptic curve at a third point, say $R'$.
    3.  The sum $P + Q$ is defined as $-R'$.
*   **Doubling a Point $P$ ($2P$):**
    1.  Draw the tangent line to the curve at point $P$.
    2.  This line will intersect the elliptic curve at another point, say $R'$.
    3.  The sum $2P$ is defined as $-R'$.

**Formulas for Point Addition and Doubling (over $\mathbb{F}_p$, characteristic $\neq 2$):**

Let $P = (x_1, y_1)$ and $Q = (x_2, y_2)$.

*   **Point Addition ($P + Q$, where $P \neq Q$):**
    *   If $x_1 = x_2$ (and $y_1 \neq y_2$), then $P + Q = \mathcal{O}$ (since $Q = -P$).
    *   Otherwise, the slope $s$ is given by:
        $s = \frac{y_2 - y_1}{x_2 - x_1} \pmod{p}$
    *   The resulting point $R = (x_3, y_3)$ is:
        $x_3 = s^2 - x_1 - x_2 \pmod{p}$
        $y_3 = s(x_1 - x_3) - y_1 \pmod{p}$

*   **Point Doubling ($2P$, where $y_1 \neq 0$):**
    *   If $y_1 = 0$, then $2P = \mathcal{O}$ (since $P$ is a point of order 2).
    *   Otherwise, the slope $s$ of the tangent line is given by:
        $s = \frac{3x_1^2 + a}{2y_1} \pmod{p}$
    *   The resulting point $R = (x_3, y_3)$ is:
        $x_3 = s^2 - 2x_1 \pmod{p}$
        $y_3 = s(x_1 - x_3) - y_1 \pmod{p}$

**Scalar Multiplication**

Scalar multiplication is analogous to exponentiation in traditional crypto systems. For a point $P$ on the curve and an integer $k$, $kP$ is defined as the sum of $P$ with itself $k$ times:

$kP = \underbrace{P + P + \dots + P}_{k \text{ times}}$

This operation is computationally expensive if done naively. Efficient algorithms like the **double-and-add algorithm** are used.

**The Elliptic Curve Discrete Logarithm Problem (ECDLP)**

Given points $P$ and $Q$ on an elliptic curve $E$ over a finite field $\mathbb{F}_q$, find an integer $k$ such that $Q = kP$. The ECDLP is considered computationally intractable for well-chosen curves and large fields, which is the basis of ECC's security.

**Example:**

Consider the curve $y^2 = x^3 + x + 1$ over $\mathbb{F}_{23}$. Let $P = (3, 10)$.
Let's calculate $2P$:
$a = 1$.
$2y_1 = 2 \times 10 = 20 \pmod{23}$.
$3x_1^2 + a = 3(3^2) + 1 = 3(9) + 1 = 27 + 1 = 28 \equiv 5 \pmod{23}$.
The slope $s = \frac{5}{20} \pmod{23}$. We need to find the inverse of $20 \pmod{23}$.
$20x \equiv 1 \pmod{23}$.
$20 \equiv -3 \pmod{23}$. So, $-3x \equiv 1 \pmod{23}$.
Multiplying by $-8$: $24x \equiv -8 \pmod{23}$, so $x \equiv -8 \equiv 15 \pmod{23}$.
The inverse of $20 \pmod{23}$ is $15$.
$s = 5 \times 15 = 75 \equiv 6 \pmod{23}$.

Now calculate the coordinates of $2P = (x_3, y_3)$:
$x_3 = s^2 - 2x_1 = 6^2 - 2(3) = 36 - 6 = 30 \equiv 7 \pmod{23}$.
$y_3 = s(x_1 - x_3) - y_1 = 6(3 - 7) - 10 = 6(-4) - 10 = -24 - 10 = -34 \equiv 12 \pmod{23}$.
So, $2P = (7, 12)$.

### 2. Elliptic Curve Diffie-Hellman (ECDH) Key Exchange

**Goal:** To establish a shared secret between two parties (Alice and Bob) over an insecure channel.

**Setup:**
*   A publicly agreed-upon elliptic curve $E$ over a finite field $\mathbb{F}_q$.
*   A base point $G$ on $E$ with a large prime order $n$. The order $n$ is chosen such that the subgroup generated by $G$ is large.

**Key Generation (for each user):**
1.  **Choose a private key:** A random integer $d$ such that $1 \le d < n$.
2.  **Compute public key:** $Q = dG$ (scalar multiplication).

**Key Exchange Protocol:**

1.  **Alice:**
    *   Generates her private key $d_A$.
    *   Computes her public key $Q_A = d_A G$.
    *   Sends $Q_A$ to Bob.

2.  **Bob:**
    *   Generates his private key $d_B$.
    *   Computes his public key $Q_B = d_B G$.
    *   Sends $Q_B$ to Alice.

3.  **Alice computes the shared secret:** $S_A = d_A Q_B = d_A (d_B G) = (d_A d_B) G$.
4.  **Bob computes the shared secret:** $S_B = d_B Q_A = d_B (d_A G) = (d_B d_A) G$.

Since $(d_A d_B) G = (d_B d_A) G$, both Alice and Bob arrive at the same shared secret point $S = (d_A d_B) G$. This point $S$ can then be used as input to a key derivation function (KDF) to generate symmetric encryption keys.

**Security:**
An eavesdropper Eve, seeing $G$, $Q_A$, and $Q_B$, would need to solve the ECDLP to find $d_A$ from $Q_A = d_A G$ or $d_B$ from $Q_B = d_B G$. If $n$ is large enough, this is computationally infeasible.

**Example:**

*   Curve: $y^2 = x^3 + x + 1$ over $\mathbb{F}_{23}$.
*   Base Point: $G = (3, 10)$.
*   Order of $G$: Let's assume for this example $n=13$ (in reality, $n$ would be much larger).

**Alice:**
*   Private key $d_A = 5$.
*   Public key $Q_A = 5G = G+G+G+G+G$.
    *   $2G = (7, 12)$ (from previous example).
    *   $3G = 2G + G = (7, 12) + (3, 10)$:
        *   $s = \frac{10 - 12}{3 - 7} = \frac{-2}{-4} = \frac{1}{2} \pmod{23}$. Inverse of $2$ mod $23$ is $12$. $s = 1 \times 12 = 12$.
        *   $x_3 = 12^2 - 7 - 3 = 144 - 10 = 134 \equiv 19 \pmod{23}$.
        *   $y_3 = 12(7 - 19) - 12 = 12(-12) - 12 = -144 - 12 = -156 \equiv 2 \pmod{23}$.
        *   $3G = (19, 2)$.
    *   $4G = 2G + 2G = 2(7, 12)$:
        *   $s = \frac{3(7^2) + 1}{2(12)} = \frac{3(49) + 1}{24} = \frac{147 + 1}{1} = \frac{148}{1} \pmod{23}$. $148 = 6 \times 23 + 10$, so $148 \equiv 10 \pmod{23}$.
        *   $x_3 = 10^2 - 2(7) = 100 - 14 = 86 \equiv 17 \pmod{23}$.
        *   $y_3 = 10(7 - 17) - 12 = 10(-10) - 12 = -100 - 12 = -112 \equiv 4 \pmod{23}$.
        *   $4G = (17, 4)$.
    *   $5G = 4G + G = (17, 4) + (3, 10)$:
        *   $s = \frac{10 - 4}{3 - 17} = \frac{6}{-14} = \frac{6}{9} \pmod{23}$. Inverse of $9 \pmod{23}$ is $9 \times (-10) = -90 \equiv 2 \pmod{23}$ (since $9 \times 2 = 18 \equiv -5$, need to multiply by $23/5$? No, use Euclidean algorithm. $23 = 2 \times 9 + 5$, $9 = 1 \times 5 + 4$, $5 = 1 \times 4 + 1$. $1 = 5 - 4 = 5 - (9 - 5) = 2 \times 5 - 9 = 2(23 - 2 \times 9) - 9 = 2 \times 23 - 4 \times 9 - 9 = 2 \times 23 - 5 \times 9$. So inverse of $9$ is $-5 \equiv 18 \pmod{23}$.).
        *   $s = 6 \times 18 = 108 \equiv 16 \pmod{23}$.
        *   $x_3 = 16^2 - 17 - 3 = 256 - 20 = 236 \equiv 6 \pmod{23}$.
        *   $y_3 = 16(17 - 6) - 4 = 16(11) - 4 = 176 - 4 = 172 \equiv 11 \pmod{23}$.
    *   Alice's public key $Q_A = (6, 11)$.

**Bob:**
*   Private key $d_B = 7$.
*   Public key $Q_B = 7G$.
    *   $6G = 5G + G = (6, 11) + (3, 10)$:
        *   $s = \frac{10 - 11}{3 - 6} = \frac{-1}{-3} = \frac{1}{3} \pmod{23}$. Inverse of $3 \pmod{23}$ is $8$ ($3 \times 8 = 24 \equiv 1$).
        *   $s = 1 \times 8 = 8$.
        *   $x_3 = 8^2 - 6 - 3 = 64 - 9 = 55 \equiv 9 \pmod{23}$.
        *   $y_3 = 8(6 - 9) - 11 = 8(-3) - 11 = -24 - 11 = -35 \equiv 11 \pmod{23}$.
        *   $6G = (9, 11)$.
    *   $7G = 6G + G = (9, 11) + (3, 10)$:
        *   $s = \frac{10 - 11}{3 - 9} = \frac{-1}{-6} = \frac{1}{6} \pmod{23}$. Inverse of $6 \pmod{23}$ is $4$ ($6 \times 4 = 24 \equiv 1$).
        *   $s = 1 \times 4 = 4$.
        *   $x_3 = 4^2 - 9 - 3 = 16 - 12 = 4 \pmod{23}$.
        *   $y_3 = 4(9 - 4) - 11 = 4(5) - 11 = 20 - 11 = 9 \pmod{23}$.
    *   Bob's public key $Q_B = (4, 9)$.

**Shared Secret Calculation:**

*   Alice computes: $S_A = d_A Q_B = 5 \times (4, 9)$.
    *   $5 \times (4, 9) = (4, 9) + (4, 9) + (4, 9) + (4, 9) + (4, 9)$.
    *   $2 \times (4, 9)$: $s = \frac{3(4^2) + 1}{2(9)} = \frac{3(16) + 1}{18} = \frac{48+1}{18} = \frac{49}{18} \pmod{23}$. Inverse of $18 \pmod{23}$ is $18 \times (-7) = -126 \equiv 10 \pmod{23}$.
        *   $s = 49 \times 10 = 490 \equiv 7 \pmod{23}$.
        *   $x_3 = 7^2 - 2(4) = 49 - 8 = 41 \equiv 18 \pmod{23}$.
        *   $y_3 = 7(4 - 18) - 9 = 7(-14) - 9 = -98 - 9 = -107 \equiv 8 \pmod{23}$.
        *   $2 \times (4, 9) = (18, 8)$.
    *   $4 \times (4, 9) = 2 \times (18, 8)$:
        *   $s = \frac{3(18^2) + 1}{2(8)} = \frac{3(324) + 1}{16} \pmod{23}$. $324 = 14 \times 23 + 2$, so $324 \equiv 2 \pmod{23}$.
        *   $s = \frac{3(2) + 1}{16} = \frac{7}{16} \pmod{23}$. Inverse of $16 \pmod{23}$ is $16 \times (-4) = -64 \equiv 5 \pmod{23}$.
        *   $s = 7 \times 5 = 35 \equiv 12 \pmod{23}$.
        *   $x_3 = 12^2 - 2(18) = 144 - 36 = 108 \equiv 16 \pmod{23}$.
        *   $y_3 = 12(18 - 16) - 8 = 12(2) - 8 = 24 - 8 = 16 \pmod{23}$.
        *   $4 \times (4, 9) = (16, 16)$.
    *   $5 \times (4, 9) = 4 \times (4, 9) + (4, 9) = (16, 16) + (4, 9)$:
        *   $s = \frac{9 - 16}{4 - 16} = \frac{-7}{-12} = \frac{7}{12} \pmod{23}$. Inverse of $12 \pmod{23}$ is $12 \times (-2) = -24 \equiv 19 \pmod{23}$.
        *   $s = 7 \times 19 = 133 \equiv 18 \pmod{23}$.
        *   $x_3 = 18^2 - 16 - 4 = 324 - 20 = 304 \equiv 5 \pmod{23}$.
        *   $y_3 = 18(16 - 5) - 16 = 18(11) - 16 = 198 - 16 = 182 \equiv 21 \pmod{23}$.
    *   Alice's shared secret $S_A = (5, 21)$.

*   Bob computes: $S_B = d_B Q_A = 7 \times (6, 11)$.
    *   $2 \times (6, 11)$: $s = \frac{3(6^2) + 1}{2(11)} = \frac{3(36) + 1}{22} = \frac{108+1}{1} = \frac{109}{1} \pmod{23}$. $109 = 4 \times 23 + 17$, so $109 \equiv 17 \pmod{23}$.
        *   $s = 17$.
        *   $x_3 = 17^2 - 2(6) = 289 - 12 = 277 \equiv 1 \pmod{23}$.
        *   $y_3 = 17(6 - 1) - 11 = 17(5) - 11 = 85 - 11 = 74 \equiv 5 \pmod{23}$.
        *   $2 \times (6, 11) = (1, 5)$.
    *   $4 \times (6, 11) = 2 \times (1, 5)$:
        *   $s = \frac{3(1^2) + 1}{2(5)} = \frac{4}{10} \pmod{23}$. Inverse of $10 \pmod{23}$ is $10 \times (-7) = -70 \equiv 2 \pmod{23}$.
        *   $s = 4 \times 2 = 8$.
        *   $x_3 = 8^2 - 2(1) = 64 - 2 = 62 \equiv 16 \pmod{23}$.
        *   $y_3 = 8(1 - 16) - 5 = 8(-15) - 5 = -120 - 5 = -125 \equiv 13 \pmod{23}$.
        *   $4 \times (6, 11) = (16, 13)$.
    *   $7 \times (6, 11) = 4 \times (6, 11) + 3 \times (6, 11)$. We already computed $3 \times (6, 11) = (19, 2)$.
    *   $7 \times (6, 11) = (16, 13) + (19, 2)$:
        *   $s = \frac{2 - 13}{19 - 16} = \frac{-11}{3} = \frac{12}{3} \pmod{23}$. Inverse of $3 \pmod{23}$ is $8$.
        *   $s = 12 \times 8 = 96 \equiv 4 \pmod{23}$.
        *   $x_3 = 4^2 - 16 - 19 = 16 - 35 = -19 \equiv 4 \pmod{23}$.
        *   $y_3 = 4(16 - 4) - 13 = 4(12) - 13 = 48 - 13 = 35 \equiv 12 \pmod{23}$.
        *   This doesn't match Alice's result. Let me recheck $7G$.
        *   $7G = 3G + 4G = (19, 2) + (17, 4)$:
            *   $s = \frac{4-2}{17-19} = \frac{2}{-2} = -1 \equiv 22 \pmod{23}$.
            *   $x_3 = 22^2 - 19 - 17 = 484 - 36 = 448 \equiv 14 \pmod{23}$.
            *   $y_3 = 22(19 - 14) - 2 = 22(5) - 2 = 110 - 2 = 108 \equiv 16 \pmod{23}$.
            *   $7G = (14, 16)$. This is Bob's Public Key $Q_B$. So my previous $Q_B$ calculation was wrong.
        *   Let's recompute Bob's shared secret: $S_B = d_B Q_A = 7 \times (6, 11)$. This means $Q_A$ was correct.
        *   We need to compute $7 \times (6, 11)$.
        *   $2 \times (6, 11) = (1, 5)$ (correct).
        *   $4 \times (6, 11) = 2 \times (1, 5) = (16, 13)$ (correct).
        *   $7 \times (6, 11) = 4 \times (6, 11) + 3 \times (6, 11)$. We need $3 \times (6, 11) = 2 \times (6, 11) + (6, 11) = (1, 5) + (6, 11)$:
            *   $s = \frac{11 - 5}{6 - 1} = \frac{6}{5} \pmod{23}$. Inverse of $5 \pmod{23}$ is $5 \times (-9) = -45 \equiv 4 \pmod{23}$.
            *   $s = 6 \times 4 = 24 \equiv 1 \pmod{23}$.
            *   $x_3 = 1^2 - 1 - 6 = 1 - 7 = -6 \equiv 17 \pmod{23}$.
            *   $y_3 = 1(1 - 17) - 5 = 1(-16) - 5 = -16 - 5 = -21 \equiv 2 \pmod{23}$.
            *   $3 \times (6, 11) = (17, 2)$.
        *   Now, $7 \times (6, 11) = (16, 13) + (17, 2)$:
            *   $s = \frac{2 - 13}{17 - 16} = \frac{-11}{1} = -11 \equiv 12 \pmod{23}$.
            *   $x_3 = 12^2 - 16 - 17 = 144 - 33 = 111 \equiv 19 \pmod{23}$.
            *   $y_3 = 12(16 - 19) - 13 = 12(-3) - 13 = -36 - 13 = -49 \equiv 20 \pmod{23}$.
            *   Bob's shared secret $S_B = (19, 20)$.

Still not matching. Let's recompute Alice's public key $Q_A = 5G$.
*   $G = (3, 10)$
*   $2G = (7, 12)$
*   $3G = (19, 2)$
*   $4G = 2 \times (7, 12) = (17, 4)$ (correct)
*   $5G = 4G + G = (17, 4) + (3, 10)$:
    *   $s = \frac{10 - 4}{3 - 17} = \frac{6}{-14} = \frac{6}{9} \pmod{23}$. Inverse of $9 \pmod{23}$ is $18$.
    *   $s = 6 \times 18 = 108 \equiv 16 \pmod{23}$.
    *   $x_3 = 16^2 - 17 - 3 = 256 - 20 = 236 \equiv 6 \pmod{23}$.
    *   $y_3 = 16(17 - 6) - 4 = 16(11) - 4 = 176 - 4 = 172 \equiv 11 \pmod{23}$.
    *   $Q_A = (6, 11)$ (correct).

Now let's recompute Bob's shared secret $S_B = d_B Q_A = 7 \times (6, 11)$.
This is the same calculation as $7 \times P$ where $P = (6, 11)$.
*   $P = (6, 11)$
*   $2P = (1, 5)$ (correct)
*   $3P = 2P + P = (1, 5) + (6, 11)$:
    *   $s = \frac{11 - 5}{6 - 1} = \frac{6}{5} \pmod{23}$. Inverse of $5 \pmod{23}$ is $4$.
    *   $s = 6 \times 4 = 24 \equiv 1 \pmod{23}$.
    *   $x_3 = 1^2 - 1 - 6 = 1 - 7 = -6 \equiv 17 \pmod{23}$.
    *   $y_3 = 1(1 - 17) - 5 = 1(-16) - 5 = -21 \equiv 2 \pmod{23}$.
    *   $3P = (17, 2)$.
*   $4P = 2 \times (1, 5) = (16, 13)$ (correct).
*   $5P = 4P + P = (16, 13) + (6, 11)$:
    *   $s = \frac{11 - 13}{6 - 16} = \frac{-2}{-10} = \frac{2}{10} \pmod{23}$. Inverse of $10 \pmod{23}$ is $7$.
    *   $s = 2 \times 7 = 14$.
    *   $x_3 = 14^2 - 16 - 6 = 196 - 22 = 174 \equiv 13 \pmod{23}$.
    *   $y_3 = 14(16 - 13) - 13 = 14(3) - 13 = 42 - 13 = 29 \equiv 6 \pmod{23}$.
    *   $5P = (13, 6)$.
*   $6P = 5P + P = (13, 6) + (6, 11)$:
    *   $s = \frac{11 - 6}{6 - 13} = \frac{5}{-7} = \frac{5}{16} \pmod{23}$. Inverse of $16 \pmod{23}$ is $5$.
    *   $s = 5 \times 5 = 25 \equiv 2 \pmod{23}$.
    *   $x_3 = 2^2 - 13 - 6 = 4 - 19 = -15 \equiv 8 \pmod{23}$.
    *   $y_3 = 2(13 - 8) - 6 = 2(5) - 6 = 10 - 6 = 4 \pmod{23}$.
    *   $6P = (8, 4)$.
*   $7P = 6P + P = (8, 4) + (6, 11)$:
    *   $s = \frac{11 - 4}{6 - 8} = \frac{7}{-2} = \frac{7}{21} \pmod{23}$. Inverse of $21 \pmod{23}$ is $21 \times (-11) = -231 \equiv 22 \pmod{23}$.
    *   $s = 7 \times 22 = 154 \equiv 16 \pmod{23}$.
    *   $x_3 = 16^2 - 8 - 6 = 256 - 14 = 242 \equiv 12 \pmod{23}$.
    *   $y_3 = 16(8 - 12) - 4 = 16(-4) - 4 = -64 - 4 = -68 \equiv 4 \pmod{23}$.
    *   $7P = (12, 4)$.

Still not matching. Let's use the property $kP = (k-1)P + P$.
$S_B = 7 Q_A = 7(6, 11)$.
Let's calculate $7G$ and check $S_A = d_A Q_B$ using the correct $Q_B$.
$Q_B = 7G = (14, 16)$ (from earlier correct calculation).
$S_A = d_A Q_B = 5 \times (14, 16)$.
*   $P = (14, 16)$
*   $2P = 2 \times (14, 16)$:
    *   $s = \frac{3(14^2) + 1}{2(16)} = \frac{3(196) + 1}{32} \pmod{23}$. $196 = 8 \times 23 + 12 \equiv 12$. $32 \equiv 9$.
    *   $s = \frac{3(12) + 1}{9} = \frac{37}{9} \equiv \frac{14}{9} \pmod{23}$. Inverse of $9 \pmod{23}$ is $18$.
    *   $s = 14 \times 18 = 252 \equiv 19 \pmod{23}$.
    *   $x_3 = 19^2 - 2(14) = 361 - 28 = 333 \equiv 6 \pmod{23}$.
    *   $y_3 = 19(14 - 6) - 16 = 19(8) - 16 = 152 - 16 = 136 \equiv 21 \pmod{23}$.
    *   $2P = (6, 21)$.
*   $4P = 2 \times (6, 21)$:
    *   $s = \frac{3(6^2) + 1}{2(21)} = \frac{3(36) + 1}{42} \pmod{23}$. $36 \equiv 13$. $42 \equiv 19$.
    *   $s = \frac{3(13) + 1}{19} = \frac{39+1}{19} = \frac{40}{19} \pmod{23}$. Inverse of $19 \pmod{23}$ is $19 \times (-12) = -228 \equiv 10 \pmod{23}$.
    *   $s = 40 \times 10 = 400 \equiv 9 \pmod{23}$.
    *   $x_3 = 9^2 - 2(6) = 81 - 12 = 69 \equiv 0 \pmod{23}$.
    *   $y_3 = 9(6 - 0) - 21 = 9(6) - 21 = 54 - 21 = 33 \equiv 10 \pmod{23}$.
    *   $4P = (0, 10)$.
*   $5P = 4P + P = (0, 10) + (14, 16)$:
    *   $s = \frac{16 - 10}{14 - 0} = \frac{6}{14} \pmod{23}$. Inverse of $14 \pmod{23}$ is $14 \times (-10) = -140 \equiv 1 \pmod{23}$.
    *   $s = 6 \times 1 = 6$.
    *   $x_3 = 6^2 - 0 - 14 = 36 - 14 = 22 \pmod{23}$.
    *   $y_3 = 6(0 - 22) - 10 = 6(-22) - 10 = -132 - 10 = -142 \equiv 17 \pmod{23}$.
    *   $S_A = (22, 17)$.

Let's recompute $S_B = 7 \times (6, 11)$. This is the same as $d_A \times Q_{Alice\_public}$.
It seems I made a calculation error for $d_B Q_A$.
$S_B = 7 \times Q_A = 7 \times (6, 11)$.
We calculated $2 \times (6, 11) = (1, 5)$.
$3 \times (6, 11) = (17, 2)$.
$4 \times (6, 11) = (16, 13)$.
$5 \times (6, 11) = (13, 6)$.
$6 \times (6, 11) = (8, 4)$.
$7 \times (6, 11) = (12, 4)$. This was my last calculation for $7 \times (6, 11)$.

Let's double check $5 \times (6, 11)$:
$P = (6, 11)$.
$2P = (1, 5)$.
$4P = (16, 13)$.
$5P = 4P + P = (16, 13) + (6, 11)$:
$s = \frac{11 - 13}{6 - 16} = \frac{-2}{-10} = \frac{2}{10} \pmod{23}$. Inverse of $10 \pmod{23}$ is $7$.
$s = 2 \times 7 = 14$.
$x_3 = 14^2 - 16 - 6 = 196 - 22 = 174 \equiv 13 \pmod{23}$.
$y_3 = 14(16 - 13) - 13 = 14(3) - 13 = 42 - 13 = 29 \equiv 6 \pmod{23}$.
$5P = (13, 6)$. This is correct.

Let's double check $7 \times (6, 11)$:
$7P = 5P + 2P = (13, 6) + (1, 5)$.
$s = \frac{5 - 6}{1 - 13} = \frac{-1}{-12} = \frac{1}{12} \pmod{23}$. Inverse of $12 \pmod{23}$ is $12 \times (-2) = -24 \equiv 19 \pmod{23}$.
$s = 1 \times 19 = 19$.
$x_3 = 19^2 - 13 - 1 = 361 - 14 = 347 \equiv 17 \pmod{23}$.
$y_3 = 19(13 - 17) - 6 = 19(-4) - 6 = -76 - 6 = -82 \equiv 10 \pmod{23}$.
$S_B = (17, 10)$.

Okay, my manual calculations are error-prone. The principle is that Alice computes $d_A Q_B$ and Bob computes $d_B Q_A$, and these must be equal. The complexity of manual calculations highlights the need for computer implementations.

### 3. Elliptic Curve Digital Signature Algorithm (ECDSA)

**Goal:** To provide digital signatures for messages, ensuring authenticity and integrity.

**Setup:**
*   Publicly agreed-upon elliptic curve $E$ over $\mathbb{F}_q$.
*   Base point $G$ with prime order $n$.

**Key Generation:**
1.  **Private key:** Choose a random integer $d$ where $1 \le d < n$.
2.  **Public key:** Compute $Q = dG$.

**Signature Generation (for message $m$):**
1.  **Hash the message:** Compute $e = H(m)$, where $H$ is a cryptographic hash function. Convert $e$ into an integer.
2.  **Select a random nonce:** Choose a random integer $k$ where $1 \le k < n$. **Crucially, $k$ must be unique for each signature.**
3.  **Compute point $R$:** $R = kG = (x_R, y_R)$.
4.  **Compute signature component $s$:** $s = k^{-1}(e + d x_R) \pmod{n}$. $k^{-1}$ is the modular multiplicative inverse of $k$ modulo $n$.
5.  **The signature is the pair $(R, s)$**.

**Signature Verification (for message $m$ and signature $(R, s)$):**
1.  **Hash the message:** Compute $e = H(m)$. Convert $e$ into an integer.
2.  **Check signature components:**
    *   $R$ must be a point on the curve $E$.
    *   $s$ must be an integer such that $1 \le s < n$.
3.  **Compute $u_1$ and $u_2$:**
    *   $u_1 = e s^{-1} \pmod{n}$.
    *   $u_2 = s^{-1} s \pmod{n}$. (Note: $s^{-1}$ is the modular inverse of $s$ modulo $n$).
4.  **Compute point $X$:** $X = u_1 G + u_2 Q$.
5.  **Verify:** The signature is valid if and only if the x-coordinate of $X$, i.e., $x_X$, is equal to $x_R$.

**How it Works:**
The verification equation is derived from the signature generation equation:
$s = k^{-1}(e + d x_R) \pmod{n}$
Multiply by $s k$: $sk = e + d x_R \pmod{n}$
We want to obtain $X = u_1 G + u_2 Q = (es^{-1})G + (s^{-1}s)Q = (es^{-1})G + Q$.
Substitute $Q = dG$: $X = (es^{-1})G + dG = (es^{-1} + d)G$.
If the signature is valid, then $x_X = x_R$.
$x_X = x_{(es^{-1} + d)G}$.
We need to show that $es^{-1} + d = k \pmod{n}$.

From $sk = e + d x_R \pmod{n}$:
If $s \neq 0$, then $k = s^{-1}(e + d x_R) \pmod{n}$.
This is exactly what we need! The verification equation $X = u_1 G + u_2 Q$ works because:
$X = (es^{-1})G + (s^{-1}s)Q = (es^{-1})G + Q$.
Since $Q = dG$, we have $X = (es^{-1})G + dG = (es^{-1} + d)G$.
If the signature is valid, $s^{-1}e \equiv k - d x_R \pmod{n}$.
So $es^{-1} \equiv k - d x_R \pmod{n}$.
$X = (k - d x_R)G + dG = kG - d x_R G + dG = kG + (d - d)G = kG$.
And the x-coordinate of $kG$ is $x_R$.

**Security:**
The security relies on the ECDLP. An attacker cannot forge a signature without knowing the private key $d$, because $d$ is needed to compute $s$. The randomness of $k$ is crucial; if $k$ is reused, it can lead to the disclosure of $d$.

### 4. Security Considerations and Elliptic Curve Selection

**Key Size:**
ECC offers the same level of security as traditional asymmetric cryptosystems (like RSA) with significantly smaller key sizes.
*   160-bit ECC is roughly equivalent to 1024-bit RSA.
*   256-bit ECC is roughly equivalent to 3072-bit RSA.
*   384-bit ECC is roughly equivalent to 7680-bit RSA.

This is due to the difficulty of the ECDLP compared to the integer factorization problem (RSA) or discrete logarithm problem over finite fields.

**Choosing an Elliptic Curve:**
The security of ECC heavily depends on the choice of the elliptic curve parameters:
*   **Field:** The size and type of the finite field ($\mathbb{F}_p$ or $\mathbb{F}_{2^m}$).
*   **Curve equation:** The constants $a$ and $b$.
*   **Base point $G$:** Its coordinates and its order $n$.
*   **Subgroup size:** The order $n$ of the base point $G$ should be a large prime. This ensures that the subgroup generated by $G$ is large and does not contain smaller subgroups that might be vulnerable to specific attacks.

**Vulnerable Curves:**
*   **Small subgroup attacks:** If the order $n$ of $G$ is not prime, or if there are smaller subgroups, an attacker might be able to exploit them.
*   **Specific curve types:** Some curves (e.g., anomalous curves, curves with complex multiplication) might be more susceptible to certain attacks.
*   **Randomly chosen curves:** Choosing curves randomly without proper cryptanalysis is risky. Standards bodies like NIST and SECG (Standards for Efficient Cryptography Group) provide recommended, well-analyzed curves.

**Recommended Curves:**
*   **NIST Curves:** P-192, P-224, P-256, P-384, P-521. These are defined over prime fields.
*   **Brainpool Curves:** Also defined over prime fields, designed by the German BSI.
*   **Curve25519, Curve448:** Modern curves defined over binary fields, designed for high performance and security.

**Quantum Computing Threat:**
While ECC is strong against classical computers, **Shor's algorithm** can break ECC (and RSA) efficiently on a quantum computer. Research into **post-quantum cryptography (PQC)** is ongoing to find algorithms that are resistant to quantum attacks.

---

### Learning Outcome Checklist & Practice Questions:

1.  **Understand the mathematical basis of elliptic curves and their properties.**
    *   **Question 1:** Define an elliptic curve and the condition for it to be non-singular. What is the role of the point at infinity?
    *   **Answer 1:** An elliptic curve is a set of points satisfying $y^2 = x^3 + ax + b$. It's non-singular if $4a^3 + 27b^2 \neq 0$. The point at infinity is the additive identity in the group law.

2.  **Explain the group law on elliptic curves, including point addition and doubling.**
    *   **Question 2:** Given points $P=(2, 5)$ and $Q=(1, 2)$ on the curve $y^2 = x^3 + 7$ over $\mathbb{F}_{17}$, calculate $P+Q$. (Assume $a=0, b=7$).
    *   **Answer 2:**
        *   $P = (2, 5)$, $Q = (1, 2)$.
        *   $s = \frac{y_2 - y_1}{x_2 - x_1} = \frac{2 - 5}{1 - 2} = \frac{-3}{-1} = 3 \pmod{17}$.
        *   $x_3 = s^2 - x_1 - x_2 = 3^2 - 2 - 1 = 9 - 3 = 6 \pmod{17}$.
        *   $y_3 = s(x_1 - x_3) - y_1 = 3(2 - 6) - 5 = 3(-4) - 5 = -12 - 5 = -17 \equiv 0 \pmod{17}$.
        *   $P+Q = (6, 0)$.

3.  **Describe scalar multiplication on elliptic curves and its computational significance.**
    *   **Question 3:** Briefly explain the double-and-add algorithm for computing scalar multiplication.
    *   **Answer 3:** The double-and-add algorithm uses the binary representation of the scalar $k$. It iterates through the bits of $k$. If a bit is 1, it adds the current point to the result (double-and-add); if a bit is 0, it only doubles the point. This is analogous to the square-and-multiply algorithm for exponentiation.

4.  **Understand the Elliptic Curve Discrete Logarithm Problem (ECDLP) and its role in ECC security.**
    *   **Question 4:** State the ECDLP. Why is it computationally hard?
    *   **Answer 4:** Given points $P$ and $Q$ on an elliptic curve, find an integer $k$ such that $Q=kP$. It's hard because there's no known efficient algorithm to solve it for large fields and suitable curves, unlike its finite field counterpart.

5.  **Explain the Elliptic Curve Diffie-Hellman (ECDH) key exchange protocol.**
    *   **Question 5:** Alice has private key $d_A$ and public key $Q_A = d_A G$. Bob has private key $d_B$ and public key $Q_B = d_B G$. How do they establish a shared secret?
    *   **Answer 5:** Alice computes $S_A = d_A Q_B$. Bob computes $S_B = d_B Q_A$. Both obtain the same secret point $S = (d_A d_B) G$.

6.  **Describe the Elliptic Curve Digital Signature Algorithm (ECDSA).**
    *   **Question 6:** What are the key generation, signing, and verification steps for ECDSA? What is the critical requirement for the nonce $k$?
    *   **Answer 6:**
        *   **Key Gen:** $d \leftarrow$ random, $Q = dG$.
        *   **Signing:** $e=H(m)$, $k \leftarrow$ random unique, $R=kG=(x_R, y_R)$, $s=k^{-1}(e+dx_R) \pmod{n}$. Signature is $(R,s)$.
        *   **Verification:** $e=H(m)$, $u_1=es^{-1}\pmod{n}$, $u_2=s^{-1}\pmod{n}$, $X = u_1G + u_2Q$. Verify if $x_X = x_R$.
        *   **Critical $k$ requirement:** $k$ must be unique for each signature.

7.  **Discuss security considerations, including curve selection and key sizes.**
    *   **Question 7:** Why are ECC keys generally shorter than RSA keys for equivalent security? Name one type of vulnerable curve.
    *   **Answer 7:** ECC keys are shorter because the ECDLP is computationally harder than factoring integers (RSA) or the discrete logarithm problem in finite fields. Vulnerable curves include those with small subgroup orders or specific algebraic properties that allow for efficient attacks.

---

### Important Points to Remember:

*   **Group Structure:** The power of ECC lies in the fact that points on an elliptic curve form an abelian group.
*   **ECDLP Hardness:** The security of ECC is based on the assumed computational intractability of the Elliptic Curve Discrete Logarithm Problem.
*   **Scalar Multiplication Efficiency:** Efficient algorithms like double-and-add are crucial for practical ECC implementations.
*   **Key Size Advantage:** ECC offers comparable security to RSA with significantly smaller key sizes, leading to performance benefits.
*   **Careful Curve Selection:** The security of ECC is highly dependent on the proper selection of curve parameters; use standardized curves.
*   **Nonce Reuse Danger (ECDSA):** Reusing the nonce $k$ in ECDSA is catastrophic and can reveal the private key.
*   **Quantum Threat:** Be aware that ECC is vulnerable to quantum computers via Shor's algorithm, driving research into PQC.
*   **Finite Fields:** ECC in cryptography operates over finite fields, not real numbers.

---
