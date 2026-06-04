---
title: "Residue theorem (without proof)"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 4: Taylor series and Maclaurin series"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba8106ad"
status: "completed"
scrapedAt: "2026-05-20T18:41:36.788Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3
## Module 4: Taylor Series and Maclaurin Series
### Topic: Residue Theorem (Without Proof)

---

### 1. Introduction to the Residue Theorem

The Residue Theorem is a powerful tool in complex analysis that allows us to evaluate contour integrals of analytic functions. It's particularly useful for calculating definite integrals that are difficult or impossible to solve using real methods. This theorem connects the value of a contour integral to the residues of the function at its singularities within the contour.

---

### 2. Key Concepts and Definitions

#### 2.1. Complex Functions and Analytic Functions

*   **Complex Function:** A function $f(z)$ where both the input $z$ and the output $f(z)$ are complex numbers. We can write $z = x + iy$ and $f(z) = u(x,y) + iv(x,y)$, where $u$ and $v$ are real-valued functions of two real variables.
*   **Analytic Function:** A complex function $f(z)$ is analytic in a region if it is differentiable at every point in that region. This implies that the Cauchy-Riemann equations are satisfied and the function is infinitely differentiable.

#### 2.2. Singularities of a Complex Function

*   **Singularity:** A point $z_0$ where a complex function $f(z)$ is not analytic.
*   **Isolated Singularity:** A singularity $z_0$ such that there exists a deleted neighborhood (an open disk around $z_0$ excluding $z_0$ itself) where $f(z)$ is analytic.

#### 2.3. Types of Isolated Singularities

1.  **Removable Singularity:** If the Laurent series expansion of $f(z)$ around $z_0$ has no terms with negative powers of $(z-z_0)$, then $z_0$ is a removable singularity. In this case, $\lim_{z \to z_0} f(z)$ exists and is finite.
2.  **Pole:** If the Laurent series expansion of $f(z)$ around $z_0$ has a finite number of terms with negative powers of $(z-z_0)$, and the highest negative power is $n$, then $z_0$ is a pole of order $n$. The Laurent series will look like:
    $$f(z) = \frac{a_{-n}}{(z-z_0)^n} + \frac{a_{-n+1}}{(z-z_0)^{n-1}} + \dots + \frac{a_{-1}}{z-z_0} + a_0 + a_1(z-z_0) + \dots$$
    where $a_{-n} \neq 0$.
3.  **Essential Singularity:** If the Laurent series expansion of $f(z)$ around $z_0$ has an infinite number of terms with negative powers of $(z-z_0)$, then $z_0$ is an essential singularity.

#### 2.4. The Residue of a Function at a Point

*   **Residue:** For an isolated singularity $z_0$, the residue of $f(z)$ at $z_0$, denoted by $\text{Res}(f, z_0)$ or $\text{Res}_{z=z_0} f(z)$, is the coefficient of the $(z-z_0)^{-1}$ term in the Laurent series expansion of $f(z)$ around $z_0$.
    In the Laurent series expansion:
    $$f(z) = \sum_{n=-\infty}^{\infty} a_n (z-z_0)^n$$
    The residue is $a_{-1}$.

#### 2.5. Methods for Calculating Residues

*   **For a Pole of Order $n$ at $z_0$:**
    $$\text{Res}(f, z_0) = \frac{1}{(n-1)!} \lim_{z \to z_0} \frac{d^{n-1}}{dz^{n-1}} \left[ (z-z_0)^n f(z) \right]$$
*   **For a Simple Pole (Pole of Order 1) at $z_0$:**
    $$\text{Res}(f, z_0) = \lim_{z \to z_0} (z-z_0) f(z)$$
    If $f(z)$ can be written as $\frac{P(z)}{Q(z)}$ where $P(z_0) \neq 0$, $Q(z_0) = 0$, and $Q'(z_0) \neq 0$ (i.e., $z_0$ is a simple zero of the denominator), then:
    $$\text{Res}(f, z_0) = \frac{P(z_0)}{Q'(z_0)}$$

---

### 3. The Residue Theorem

**Statement of the Theorem (Without Proof):**

Let $f(z)$ be a function that is analytic inside and on a simple closed contour $C$, except for a finite number of isolated singularities $z_1, z_2, \dots, z_n$ that lie inside $C$. Then the contour integral of $f(z)$ along $C$ is given by:

$$\oint_C f(z) dz = 2\pi i \sum_{k=1}^n \text{Res}(f, z_k)$$

In words, the integral of $f(z)$ around the closed contour $C$ is $2\pi i$ times the sum of the residues of $f(z)$ at all the singularities that are enclosed by $C$.

---

### 4. Examples

**Example 1: Calculating a Contour Integral**

Evaluate $\oint_C \frac{e^z}{z^2(z-1)} dz$, where $C$ is the circle $|z| = 2$, traversed counterclockwise.

**Solution:**

1.  **Identify the function and contour:**
    $f(z) = \frac{e^z}{z^2(z-1)}$
    $C$ is the circle $|z| = 2$.

2.  **Find the singularities of $f(z)$:**
    The singularities occur where the denominator is zero: $z^2(z-1) = 0$.
    The singularities are $z = 0$ (a pole of order 2) and $z = 1$ (a simple pole).

3.  **Determine which singularities lie inside the contour:**
    The circle $|z| = 2$ encloses both $z = 0$ and $z = 1$, as $|0| < 2$ and $|1| < 2$.

4.  **Calculate the residues at the enclosed singularities:**

    *   **Residue at $z = 0$ (pole of order 2):**
        Using the formula for a pole of order $n=2$:
        $$\text{Res}(f, 0) = \frac{1}{(2-1)!} \lim_{z \to 0} \frac{d}{dz} \left[ (z-0)^2 f(z) \right]$$
        $$\text{Res}(f, 0) = \lim_{z \to 0} \frac{d}{dz} \left[ z^2 \cdot \frac{e^z}{z^2(z-1)} \right]$$
        $$\text{Res}(f, 0) = \lim_{z \to 0} \frac{d}{dz} \left[ \frac{e^z}{z-1} \right]$$
        Now, differentiate $\frac{e^z}{z-1}$ using the quotient rule:
        $$\frac{d}{dz} \left( \frac{e^z}{z-1} \right) = \frac{e^z(z-1) - e^z(1)}{(z-1)^2} = \frac{ze^z - e^z - e^z}{(z-1)^2} = \frac{ze^z - 2e^z}{(z-1)^2}$$
        Now, take the limit as $z \to 0$:
        $$\text{Res}(f, 0) = \lim_{z \to 0} \frac{ze^z - 2e^z}{(z-1)^2} = \frac{0 \cdot e^0 - 2e^0}{(0-1)^2} = \frac{0 - 2}{1} = -2$$

    *   **Residue at $z = 1$ (simple pole):**
        Using the formula for a simple pole:
        $$\text{Res}(f, 1) = \lim_{z \to 1} (z-1) f(z)$$
        $$\text{Res}(f, 1) = \lim_{z \to 1} (z-1) \cdot \frac{e^z}{z^2(z-1)}$$
        $$\text{Res}(f, 1) = \lim_{z \to 1} \frac{e^z}{z^2} = \frac{e^1}{1^2} = e$$

5.  **Apply the Residue Theorem:**
    $$\oint_C f(z) dz = 2\pi i \left( \text{Res}(f, 0) + \text{Res}(f, 1) \right)$$
    $$\oint_C f(z) dz = 2\pi i (-2 + e)$$

**Example 2: Using the $P(z)/Q'(z)$ formula**

Evaluate $\oint_C \frac{z}{z^2+1} dz$, where $C$ is the circle $|z-i|=1$, traversed counterclockwise.

**Solution:**

1.  **Identify the function and contour:**
    $f(z) = \frac{z}{z^2+1}$
    $C$ is the circle $|z-i|=1$.

2.  **Find the singularities of $f(z)$:**
    The denominator is $z^2+1$. Setting it to zero: $z^2+1 = 0 \implies z^2 = -1 \implies z = i$ and $z = -i$.
    These are simple poles because the derivative of the denominator $Q'(z) = 2z$ is non-zero at these points ($Q'(i) = 2i \neq 0$, $Q'(-i) = -2i \neq 0$).

3.  **Determine which singularities lie inside the contour:**
    The contour is $|z-i|=1$. This is a circle centered at $i$ with radius 1.
    *   For $z=i$: $|i-i| = |0| = 0$. Since $0 < 1$, $z=i$ is inside the contour.
    *   For $z=-i$: $|-i-i| = |-2i| = 2$. Since $2 > 1$, $z=-i$ is outside the contour.

4.  **Calculate the residue at the enclosed singularity ($z=i$):**
    We can use the formula $\text{Res}(f, z_0) = \frac{P(z_0)}{Q'(z_0)}$, where $P(z) = z$ and $Q(z) = z^2+1$, so $Q'(z) = 2z$.
    $$\text{Res}(f, i) = \frac{P(i)}{Q'(i)} = \frac{i}{2i} = \frac{1}{2}$$

5.  **Apply the Residue Theorem:**
    Since only $z=i$ is inside the contour:
    $$\oint_C f(z) dz = 2\pi i \cdot \text{Res}(f, i)$$
    $$\oint_C f(z) dz = 2\pi i \cdot \frac{1}{2} = \pi i$$

---

### 5. Practice Questions/Exercises

**Question 1:**
Evaluate $\oint_C \frac{1}{z(z-2)} dz$, where $C$ is the circle $|z-1|=2$, traversed counterclockwise.

**Question 2:**
Find the residue of $f(z) = \frac{\cos(\pi z)}{z^2-1}$ at $z=1$.

**Question 3:**
Evaluate $\oint_C \frac{e^{iz}}{z^2+4} dz$, where $C$ is the circle $|z|=3$, traversed counterclockwise.

**Question 4:**
Determine if $z=0$ is a removable singularity, a pole, or an essential singularity for the function $f(z) = z^2 \sin(1/z)$.

---

### 6. Answers to Practice Questions

**Answer 1:**
The singularities are at $z=0$ and $z=2$. The contour $|z-1|=2$ is a circle centered at $1$ with radius $2$.
*   $|0-1| = |-1| = 1 < 2$, so $z=0$ is inside.
*   $|2-1| = |1| = 1 < 2$, so $z=2$ is inside.

We need to calculate the residues at both $z=0$ and $z=2$. These are simple poles.
*   $\text{Res}(f, 0) = \lim_{z \to 0} z \cdot \frac{1}{z(z-2)} = \lim_{z \to 0} \frac{1}{z-2} = -\frac{1}{2}$.
*   $\text{Res}(f, 2) = \lim_{z \to 2} (z-2) \cdot \frac{1}{z(z-2)} = \lim_{z \to 2} \frac{1}{z} = \frac{1}{2}$.

By the Residue Theorem:
$\oint_C f(z) dz = 2\pi i \left( -\frac{1}{2} + \frac{1}{2} \right) = 2\pi i (0) = 0$.

**Answer 2:**
$f(z) = \frac{\cos(\pi z)}{z^2-1}$. The singularities are at $z=1$ and $z=-1$. We are interested in $z=1$, which is a simple pole.
Let $P(z) = \cos(\pi z)$ and $Q(z) = z^2-1$. Then $Q'(z) = 2z$.
Using the formula $\text{Res}(f, z_0) = \frac{P(z_0)}{Q'(z_0)}$ for a simple pole:
$\text{Res}(f, 1) = \frac{\cos(\pi \cdot 1)}{2 \cdot 1} = \frac{\cos(\pi)}{2} = \frac{-1}{2}$.

**Answer 3:**
$f(z) = \frac{e^{iz}}{z^2+4}$. The singularities are at $z^2+4=0 \implies z^2=-4 \implies z=2i$ and $z=-2i$. These are simple poles.
The contour is $|z|=3$.
*   $|2i| = 2 < 3$, so $z=2i$ is inside.
*   $|-2i| = 2 < 3$, so $z=-2i$ is inside.

Let $P(z) = e^{iz}$ and $Q(z) = z^2+4$, so $Q'(z) = 2z$.
*   Residue at $z=2i$: $\text{Res}(f, 2i) = \frac{P(2i)}{Q'(2i)} = \frac{e^{i(2i)}}{2(2i)} = \frac{e^{-2}}{4i}$.
*   Residue at $z=-2i$: $\text{Res}(f, -2i) = \frac{P(-2i)}{Q'(-2i)} = \frac{e^{i(-2i)}}{2(-2i)} = \frac{e^{2}}{-4i}$.

By the Residue Theorem:
$\oint_C f(z) dz = 2\pi i \left( \frac{e^{-2}}{4i} + \frac{e^{2}}{-4i} \right) = 2\pi i \left( \frac{e^{-2} - e^{2}}{4i} \right)$
$\oint_C f(z) dz = 2\pi i \cdot \frac{-(e^2 - e^{-2})}{4i} = -\frac{2\pi}{4} (e^2 - e^{-2}) = -\frac{\pi}{2} (e^2 - e^{-2})$.
This can also be written as $\pi \sinh(2)$ with a negative sign.

**Answer 4:**
$f(z) = z^2 \sin(1/z)$.
The singularity is at $z=0$. We need to examine the Laurent series expansion of $\sin(w)$ around $w=0$, which is:
$\sin(w) = w - \frac{w^3}{3!} + \frac{w^5}{5!} - \dots$
Let $w = 1/z$. As $z \to 0$, $w \to \infty$.
The expansion for $f(z)$ around $z=0$ is:
$f(z) = z^2 \left( \frac{1}{z} - \frac{(1/z)^3}{3!} + \frac{(1/z)^5}{5!} - \dots \right)$
$f(z) = z^2 \left( \frac{1}{z} - \frac{1}{6z^3} + \frac{1}{120z^5} - \dots \right)$
$f(z) = z - \frac{1}{6z} + \frac{1}{120z^3} - \dots$

The Laurent series has terms with negative powers of $z$, specifically $1/z$ and $1/z^3$. Since there are infinitely many terms with negative powers (implied by the series for $\sin$), $z=0$ is an **essential singularity**.

---

### 7. Important Points to Remember

*   The Residue Theorem is applicable only to **isolated singularities** within the contour.
*   The contour must be **simple and closed**. The orientation (counterclockwise is standard) matters for the sign of the integral.
*   If there are no singularities inside the contour, the integral is **zero**.
*   When calculating residues, correctly identify the **order of the pole**. Using the wrong formula can lead to incorrect results.
*   For a rational function $f(z) = P(z)/Q(z)$, if $z_0$ is a simple zero of $Q(z)$ and $P(z_0) \neq 0$, then $\text{Res}(f, z_0) = P(z_0)/Q'(z_0)$. This is a very efficient shortcut.
*   The Residue Theorem is a cornerstone for evaluating various types of real definite integrals that appear in advanced calculus and applied mathematics, particularly in physics and engineering.

---
