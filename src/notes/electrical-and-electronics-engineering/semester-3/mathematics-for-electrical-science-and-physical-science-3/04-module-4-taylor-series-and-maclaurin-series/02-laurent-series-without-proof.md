---
title: "Laurent series (without proof)"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 4: Taylor series and Maclaurin series"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35a7b"
status: "completed"
scrapedAt: "2026-05-23T16:14:47.293Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 4: Taylor series and Maclaurin series

### Topic: Laurent Series (Without Proof)

**Course Outcomes Addressed:**
*   **CO4:** Understand the series expansion of complex function about a singularity and apply residue theorem to compute real integrals. (Knowledge Level: K3) - *Laurent series are fundamental to understanding expansions around singularities, which is crucial for the residue theorem.*

**Learning Outcomes for this Topic:**
*   Understand the concept of a Laurent series expansion of a complex function.
*   Identify the annulus of convergence for a Laurent series.
*   Determine the coefficients of a Laurent series.
*   Recognize the different types of singularities based on the Laurent series expansion.

---

### 1. Introduction to Laurent Series

While Taylor series provide a representation of a complex function as an infinite sum of non-negative powers of $(z-z_0)$, they are only valid in a disk where the function is analytic. However, many functions have singularities, and we often need to represent them in regions surrounding these singularities. The **Laurent series** generalizes the Taylor series to allow for negative powers of $(z-z_0)$, enabling us to represent functions in **annuli** (regions between two concentric circles).

---

### 2. The Laurent Series Expansion

A Laurent series expansion of a complex function $f(z)$ about a point $z_0$ represents $f(z)$ in an annulus centered at $z_0$.

**Definition:**
Let $f(z)$ be a complex function that is analytic in an annulus $A$ defined by $R_1 < |z - z_0| < R_2$, where $0 \le R_1 < R_2 \le \infty$. Then, $f(z)$ can be represented by the Laurent series:

$$f(z) = \sum_{n=-\infty}^{\infty} c_n (z - z_0)^n$$

where the coefficients $c_n$ are given by the contour integral formula:

$$c_n = \frac{1}{2\pi i} \oint_C \frac{f(s)}{(s - z_0)^{n+1}} ds$$

Here, $C$ is any simple closed contour in the annulus $A$ that encloses $z_0$.

**Structure of the Laurent Series:**
The Laurent series is often split into two parts:

*   **Principal Part:** The part with negative powers of $(z-z_0)$:
    $$P(z) = \sum_{n=1}^{\infty} c_{-n} (z - z_0)^{-n}$$
*   **Analytic Part (or Taylor Part):** The part with non-negative powers of $(z-z_0)$:
    $$T(z) = \sum_{n=0}^{\infty} c_n (z - z_0)^n$$

So, $f(z) = T(z) + P(z)$.

**Key Insight (from Kreyszig, 10th ed., Chapter 14.2):**
The existence of a Laurent series expansion in an annulus is guaranteed for functions analytic in that annulus. The coefficients $c_n$ are uniquely determined by the function and the point $z_0$.

---

### 3. Annulus of Convergence

The Laurent series expansion of $f(z)$ about $z_0$ converges in the largest possible annulus $R_1 < |z - z_0| < R_2$ in which $f(z)$ is analytic.

*   $R_1$: The radius of the inner circle (or 0 if analytic at $z_0$).
*   $R_2$: The radius of the outer circle (or $\infty$ if analytic for all $|z-z_0|$ greater than some value).

**Important Point:** If $R_1 = 0$ and $R_2 = R$, the annulus becomes a disk $|z-z_0| < R$, and the Laurent series reduces to a Taylor series (the principal part will have a finite number of terms or be zero if there's no singularity at $z_0$). If $R_1 = R$ and $R_2 = \infty$, the annulus is an exterior region $R < |z - z_0|$.

---

### 4. Calculation of Laurent Series Coefficients

While the integral formula provides the definition of the coefficients, direct integration can be cumbersome. We often use algebraic methods, manipulating known series (like the geometric series) or using properties of analytic functions.

**Geometric Series:**
Recall the geometric series formula:
$$\frac{1}{1-w} = \sum_{n=0}^{\infty} w^n, \quad |w| < 1$$

**Example 1: Finding the Laurent Series of $f(z) = \frac{1}{z(z-1)}$ about $z_0 = 0$.**

We need to find the series in different annuli.

**Case 1: $0 < |z| < 1$**
We want to expand $f(z)$ in powers of $z$. Using partial fractions:
$f(z) = \frac{1}{z(z-1)} = \frac{A}{z} + \frac{B}{z-1}$
$1 = A(z-1) + Bz$
Setting $z=0 \implies 1 = A(-1) \implies A = -1$.
Setting $z=1 \implies 1 = B(1) \implies B = 1$.
So, $f(z) = -\frac{1}{z} + \frac{1}{z-1}$.

Now, expand $\frac{1}{z-1}$ for $0 < |z| < 1$.
$\frac{1}{z-1} = -\frac{1}{1-z} = - \sum_{n=0}^{\infty} z^n$ for $|z| < 1$.

Therefore, for $0 < |z| < 1$:
$f(z) = -\frac{1}{z} - \sum_{n=0}^{\infty} z^n = -\frac{1}{z} - (1 + z + z^2 + z^3 + \dots)$
$f(z) = -\frac{1}{z} - 1 - z - z^2 - z^3 - \dots$

This is a Laurent series with $c_{-1} = -1$, $c_0 = -1$, $c_1 = -1$, etc., and $c_n = 0$ for $n \ge 1$.
$f(z) = -z^{-1} + \sum_{n=0}^{\infty} (-1) z^n$.

**Case 2: $|z| > 1$**
Again, $f(z) = -\frac{1}{z} + \frac{1}{z-1}$.
Now, we need to expand $\frac{1}{z-1}$ for $|z| > 1$.
$\frac{1}{z-1} = \frac{1}{z(1 - \frac{1}{z})} = \frac{1}{z} \sum_{n=0}^{\infty} \left(\frac{1}{z}\right)^n = \frac{1}{z} \left(1 + \frac{1}{z} + \frac{1}{z^2} + \dots \right)$ for $|\frac{1}{z}| < 1 \implies |z| > 1$.
$\frac{1}{z-1} = \sum_{n=0}^{\infty} z^{-n-1} = \sum_{n=1}^{\infty} z^{-n}$ for $|z| > 1$.

Therefore, for $|z| > 1$:
$f(z) = -\frac{1}{z} + \sum_{n=1}^{\infty} z^{-n} = -\frac{1}{z} + (\frac{1}{z} + \frac{1}{z^2} + \frac{1}{z^3} + \dots)$
$f(z) = \frac{1}{z^2} + \frac{1}{z^3} + \dots$
$f(z) = \sum_{n=2}^{\infty} z^{-n}$.

This is a Laurent series with $c_{-n} = 1$ for $n \ge 2$, and all other coefficients are zero.

**Example 2: Finding the Laurent Series of $f(z) = e^{2/z}$ about $z_0 = 0$.**

We know the Maclaurin series for $e^w$ is $e^w = \sum_{n=0}^{\infty} \frac{w^n}{n!}$.
Let $w = \frac{2}{z}$. This expansion is valid for all $z \neq 0$, meaning it's valid in the annulus $0 < |z| < \infty$.

$f(z) = e^{2/z} = \sum_{n=0}^{\infty} \frac{(2/z)^n}{n!} = \sum_{n=0}^{\infty} \frac{2^n}{n! z^n} = \sum_{n=0}^{\infty} \frac{2^n}{n!} z^{-n}$

$f(z) = \frac{2^0}{0!} z^0 + \frac{2^1}{1!} z^{-1} + \frac{2^2}{2!} z^{-2} + \frac{2^3}{3!} z^{-3} + \dots$
$f(z) = 1 + 2z^{-1} + 2z^{-2} + \frac{8}{6} z^{-3} + \dots$
$f(z) = 1 + \frac{2}{z} + \frac{2}{z^2} + \frac{4}{3z^3} + \dots$

This is a Laurent series with $c_0 = 1$, $c_{-1} = 2$, $c_{-2} = 2$, $c_{-3} = 4/3$, and $c_n = 0$ for $n \ge 1$.
The annulus of convergence is $0 < |z| < \infty$.

**Reference (Zill & Shanahan, 3rd ed., Chapter 7.1):**
The general procedure for finding Laurent series often involves:
1.  Using partial fraction decomposition if $f(z)$ is a rational function.
2.  Expressing each term in partial fractions as a series of powers of $(z-z_0)$.
3.  Utilizing the geometric series and other known series expansions (like for $e^z$, $\sin z$, $\cos z$).
4.  Carefully ensuring the correct region of convergence for each series used.

---

### 5. Types of Singularities and Laurent Series

The behavior of the principal part of the Laurent series at $z_0$ characterizes the singularity of $f(z)$ at $z_0$.

**Definition of Singularities (related to Laurent Series):**
If $f(z)$ has a Laurent series expansion about $z_0$ in the annulus $0 < |z - z_0| < R$:
$$f(z) = \sum_{n=-\infty}^{\infty} c_n (z - z_0)^n$$

1.  **Removable Singularity:** If the principal part is zero (i.e., $c_n = 0$ for all $n < 0$), then $z_0$ is a removable singularity. The function $f(z)$ can be made analytic at $z_0$ by defining $f(z_0) = c_0$. This is equivalent to the Taylor series case where the principal part vanishes.

2.  **Pole of order m:** If $c_{-m} \neq 0$ and $c_{-n} = 0$ for all $n > m$ (for some positive integer $m$), then $z_0$ is a pole of order $m$. The principal part has finitely many terms.
    *   If $m=1$, it's a simple pole.

3.  **Essential Singularity:** If the principal part has infinitely many non-zero terms (i.e., $c_n \neq 0$ for infinitely many negative integers $n$), then $z_0$ is an essential singularity.

**Example (continued from above):**

*   For $f(z) = \frac{1}{z(z-1)}$:
    *   About $z_0 = 0$, in $0 < |z| < 1$, the Laurent series is $f(z) = -z^{-1} - 1 - z - z^2 - \dots$. The principal part is $-z^{-1}$. Since it has only one term with a negative power, $z_0=0$ is a **simple pole**.
    *   About $z_0 = 1$, we would do a similar expansion.
        Let $w = z-1$, so $z = w+1$.
        $f(z) = \frac{1}{(w+1)w} = \frac{1}{w} \frac{1}{w+1}$.
        For $0 < |w| < 1$: $\frac{1}{w+1} = \sum_{n=0}^{\infty} (-1)^n w^n$.
        $f(z) = \frac{1}{w} \sum_{n=0}^{\infty} (-1)^n w^n = \sum_{n=0}^{\infty} (-1)^n w^{n-1} = \sum_{k=-\infty}^{\infty} (-1)^{k+1} w^k$
        $f(z) = (-1)^{-1}w^{-1} + (-1)^0 w^0 + (-1)^1 w^1 + \dots$
        $f(z) = -w^{-1} + 1 - w + w^2 - \dots$
        Substituting $w = z-1$: $f(z) = -(z-1)^{-1} + 1 - (z-1) + (z-1)^2 - \dots$.
        Here, $z_0=1$ is also a **simple pole**.

*   For $f(z) = e^{2/z}$ about $z_0 = 0$:
    The Laurent series is $f(z) = 1 + \frac{2}{z} + \frac{2}{z^2} + \frac{4}{3z^3} + \dots$.
    The principal part has infinitely many non-zero terms ($\frac{2^n}{n!} z^{-n}$ for all $n \ge 1$). Thus, $z_0 = 0$ is an **essential singularity**.

**Reference (Ramana, 39th ed., Chapter 26):**
Laurent series are critical for understanding the nature of singularities. The coefficients of the principal part directly reveal whether a singularity is removable, a pole, or essential. This is directly linked to CO4, as the residue (the coefficient $c_{-1}$) is crucial for evaluating integrals.

---

### 6. Important Points to Remember

*   **Annulus:** Laurent series expansions are valid in annuli, not just disks.
*   **Principal Part:** The terms with negative powers of $(z-z_0)$ form the principal part.
*   **Singularity Classification:** The principal part dictates the type of singularity at $z_0$.
    *   No negative powers $\implies$ Removable singularity.
    *   Finite number of negative powers $\implies$ Pole.
    *   Infinite number of negative powers $\implies$ Essential singularity.
*   **Uniqueness:** For a given function $f(z)$ and a given annulus $A$ centered at $z_0$, the Laurent series expansion is unique.
*   **Algebraic Calculation:** While the integral formula defines coefficients, algebraic manipulation using geometric series and known expansions is often more practical for finding the series.
*   **Residue:** The coefficient $c_{-1}$ in the Laurent series is called the **residue** of $f(z)$ at $z_0$. This is extremely important for evaluating complex integrals using the Residue Theorem (as per CO4).

---

### 7. Practice Questions

**Question 1:**
Find the Laurent series of $f(z) = \frac{1}{z^2 - 4}$ in the annulus $0 < |z - 2| < 4$.

**Question 2:**
Determine the nature of the singularity of $f(z) = z \sin\left(\frac{1}{z}\right)$ at $z_0 = 0$. Find its Laurent series expansion around $z_0 = 0$.

**Question 3:**
Find the Laurent series expansion of $f(z) = \frac{e^z}{z(z-1)}$ for the annulus $1 < |z| < \infty$.

---

### 8. Answers to Practice Questions

**Answer 1:**
$f(z) = \frac{1}{z^2 - 4} = \frac{1}{(z-2)(z+2)}$.
Using partial fractions: $\frac{1}{(z-2)(z+2)} = \frac{A}{z-2} + \frac{B}{z+2}$.
$1 = A(z+2) + B(z-2)$.
Set $z=2$: $1 = A(4) \implies A = 1/4$.
Set $z=-2$: $1 = B(-4) \implies B = -1/4$.
So, $f(z) = \frac{1}{4(z-2)} - \frac{1}{4(z+2)}$.

We need the series in $0 < |z - 2| < 4$. Let $w = z-2$. Then $z = w+2$.
The annulus becomes $0 < |w| < 4$.

The first term is $\frac{1}{4w}$. This is already in the desired form $c_{-1} w^{-1}$.

For the second term, $-\frac{1}{4(z+2)}$:
$z+2 = (w+2)+2 = w+4$.
So, $-\frac{1}{4(z+2)} = -\frac{1}{4(w+4)} = -\frac{1}{16(1 + w/4)}$.

Since $0 < |w| < 4$, we have $|w/4| < 1$. We can use the geometric series:
$\frac{1}{1 + w/4} = \sum_{n=0}^{\infty} \left(-\frac{w}{4}\right)^n = \sum_{n=0}^{\infty} (-1)^n \frac{w^n}{4^n}$.

So, $-\frac{1}{4(z+2)} = -\frac{1}{16} \sum_{n=0}^{\infty} (-1)^n \frac{w^n}{4^n} = -\frac{1}{16} \left(1 - \frac{w}{4} + \frac{w^2}{16} - \frac{w^3}{64} + \dots \right)$.

Combining the terms:
$f(z) = \frac{1}{4w} - \frac{1}{16} \sum_{n=0}^{\infty} (-1)^n \frac{w^n}{4^n}$
$f(z) = \frac{1}{4}w^{-1} - \frac{1}{16} \left(1 - \frac{w}{4} + \frac{w^2}{16} - \dots \right)$
$f(z) = \frac{1}{4}w^{-1} - \frac{1}{16} + \frac{1}{64}w - \frac{1}{256}w^2 + \dots$

Substituting back $w = z-2$:
$f(z) = \frac{1}{4}(z-2)^{-1} - \frac{1}{16} + \frac{1}{64}(z-2) - \frac{1}{256}(z-2)^2 + \dots$

The Laurent series is $\frac{1}{4}(z-2)^{-1} - \sum_{n=0}^{\infty} \frac{(-1)^n}{16 \cdot 4^n} (z-2)^n$.
The principal part is $\frac{1}{4}(z-2)^{-1}$, indicating a **simple pole** at $z=2$.

**Answer 2:**
We know the Maclaurin series for $\sin(x)$: $\sin(x) = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n+1}}{(2n+1)!}$.
Let $x = \frac{1}{z}$. For $z \neq 0$, this is valid.
$\sin\left(\frac{1}{z}\right) = \frac{1}{z} - \frac{(1/z)^3}{3!} + \frac{(1/z)^5}{5!} - \dots = \frac{1}{z} - \frac{1}{6z^3} + \frac{1}{120z^5} - \dots = \sum_{n=0}^{\infty} (-1)^n \frac{1}{(2n+1)!} z^{-(2n+1)}$.

Now, multiply by $z$:
$f(z) = z \sin\left(\frac{1}{z}\right) = z \left( \frac{1}{z} - \frac{1}{6z^3} + \frac{1}{120z^5} - \dots \right)$
$f(z) = 1 - \frac{1}{6z^2} + \frac{1}{120z^4} - \dots = 1 - \sum_{n=1}^{\infty} (-1)^n \frac{1}{(2n+1)!} z^{-(2n)}$.

The Laurent series expansion around $z_0=0$ is $f(z) = 1 - \frac{1}{6}z^{-2} + \frac{1}{120}z^{-4} - \dots$.
The principal part is $-\frac{1}{6}z^{-2} + \frac{1}{120}z^{-4} - \dots$.
Since the principal part has infinitely many non-zero terms (specifically, terms with negative even powers $z^{-2}, z^{-4}, \dots$), the singularity at $z_0 = 0$ is an **essential singularity**.

**Answer 3:**
$f(z) = \frac{e^z}{z(z-1)}$. We need the expansion for $1 < |z| < \infty$.
Using partial fractions: $\frac{1}{z(z-1)} = -\frac{1}{z} + \frac{1}{z-1}$.
So, $f(z) = e^z \left(-\frac{1}{z} + \frac{1}{z-1}\right) = -\frac{e^z}{z} + \frac{e^z}{z-1}$.

We need to expand $e^z$ and $\frac{e^z}{z-1}$ in the annulus $1 < |z| < \infty$.
The Maclaurin series for $e^z$ is $e^z = \sum_{k=0}^{\infty} \frac{z^k}{k!}$.

First term: $-\frac{e^z}{z} = -\frac{1}{z} \sum_{k=0}^{\infty} \frac{z^k}{k!} = -\sum_{k=0}^{\infty} \frac{z^{k-1}}{k!} = -\sum_{j=-\infty}^{\infty} \frac{z^j}{(j+1)!}$ (by setting $j=k-1$).
$-\frac{e^z}{z} = -(\frac{z^{-1}}{1!} + \frac{z^0}{2!} + \frac{z^1}{3!} + \dots) = -\frac{1}{z} - \frac{1}{2} - \frac{z}{6} - \dots$

Second term: $\frac{e^z}{z-1}$. For $|z| > 1$, we write $\frac{1}{z-1} = \frac{1}{z(1 - 1/z)} = \frac{1}{z} \sum_{n=0}^{\infty} \left(\frac{1}{z}\right)^n = \sum_{n=0}^{\infty} z^{-n-1} = \sum_{n=1}^{\infty} z^{-n}$.
So, $\frac{e^z}{z-1} = e^z \sum_{n=1}^{\infty} z^{-n} = \left(\sum_{k=0}^{\infty} \frac{z^k}{k!}\right) \left(\sum_{n=1}^{\infty} z^{-n}\right)$.

This is a Cauchy product. Let's write out a few terms:
$e^z = 1 + z + \frac{z^2}{2!} + \frac{z^3}{3!} + \dots$
$\frac{1}{z-1} = z^{-1} + z^{-2} + z^{-3} + \dots$

$\frac{e^z}{z-1} = (1 + z + \frac{z^2}{2!} + \dots)(z^{-1} + z^{-2} + z^{-3} + \dots)$
Multiply $e^z$ by $z^{-1}$: $1 \cdot z^{-1} + z \cdot z^{-1} + \frac{z^2}{2!} z^{-1} + \dots = z^{-1} + 1 + \frac{z}{2!} + \frac{z^2}{3!} + \dots$
Multiply $e^z$ by $z^{-2}$: $1 \cdot z^{-2} + z \cdot z^{-2} + \frac{z^2}{2!} z^{-2} + \dots = z^{-2} + z^{-1} + \frac{1}{2!} + \frac{z}{3!} + \dots$
Multiply $e^z$ by $z^{-3}$: $1 \cdot z^{-3} + z \cdot z^{-3} + \frac{z^2}{2!} z^{-3} + \dots = z^{-3} + z^{-2} + \frac{z^{-1}}{2!} + \frac{1}{3!} + \dots$

Summing these (grouping by powers of $z$):
$z^{-1}: (1+1) = 2$
$z^0: (1 + 1) = 2$
$z^1: (\frac{1}{2!} + \frac{1}{1!} + \frac{1}{2!}) = \frac{1}{2} + 1 + \frac{1}{2} = 2$
$z^{-2}: (1+1+1) = 3$
$z^{-3}: (1+1) = 2$

This approach becomes tedious quickly. Let's use the integral formula or a more systematic method.
For $f(z) = -\frac{e^z}{z} + \frac{e^z}{z-1}$, we need $c_n$.
$c_n = \frac{1}{2\pi i} \oint_C \left(-\frac{e^s}{s^{n+1}} + \frac{e^s}{(s-1)s^{n+1}}\right) ds$

Let's reconsider the algebraic expansion.
For $|z| > 1$, $\frac{1}{z-1} = \sum_{n=1}^{\infty} z^{-n}$.
$\frac{e^z}{z-1} = e^z \left(z^{-1} + z^{-2} + z^{-3} + \dots \right)$.
We need to express this as a series in powers of $z$ and $z^{-1}$.

Consider $\frac{e^z}{z-1}$ for $|z|>1$.
We can write $\frac{e^z}{z-1} = \frac{e^z}{z(1-1/z)} = z^{-1} e^z \sum_{n=0}^\infty (z^{-1})^n = \sum_{n=0}^\infty z^{-n-1} e^z = \sum_{n=0}^\infty z^{-n-1} \sum_{k=0}^\infty \frac{z^k}{k!}$.
This is a convolution of coefficients. Let's look at the powers of $z$.
$z^{-1} \left( \sum_{k=0}^\infty \frac{z^k}{k!} \right) \left( \sum_{n=0}^\infty z^{-n} \right) = \sum_{n=0}^\infty z^{-n-1} \sum_{k=0}^\infty \frac{z^k}{k!}$
$= \sum_{n=0}^\infty \sum_{k=0}^\infty \frac{1}{k!} z^{k-n-1}$

Let $m = k-n-1$. Then $k = m+n+1$.
Sum is over $n \ge 0$ and $k \ge 0$.
For a fixed power $z^p$, we need $p = k-n-1$, so $k = p+n+1$.
Since $k \ge 0$, we need $p+n+1 \ge 0$.
The coefficient of $z^p$ is $\sum_{n=0}^\infty \frac{1}{(p+n+1)!}$, where the sum is restricted such that $p+n+1 \ge 0$.

Let's go back to:
$f(z) = -\frac{e^z}{z} + \frac{e^z}{z-1}$
$f(z) = -\sum_{k=0}^{\infty} \frac{z^{k-1}}{k!} + \frac{e^z}{z-1}$

For $|z|>1$, $\frac{1}{z-1} = \frac{1}{z} \frac{1}{1-1/z} = \frac{1}{z} \sum_{m=0}^\infty (1/z)^m = \sum_{m=1}^\infty z^{-m}$.
$\frac{e^z}{z-1} = e^z \sum_{m=1}^\infty z^{-m} = \left(1+z+\frac{z^2}{2!}+\dots\right)\left(z^{-1}+z^{-2}+z^{-3}+\dots\right)$
$= (z^{-1}+z^{-2}+z^{-3}+\dots) + (1+z^{-1}+z^{-2}+\dots) + (\frac{z}{2!}+\frac{1}{2!}+z^{-1}+\dots) + \dots$

Let's focus on the powers of $z$ for the Laurent series.
$f(z) = -\frac{1}{z} \sum_{k=0}^\infty \frac{z^k}{k!} + \frac{1}{z-1} \sum_{k=0}^\infty \frac{z^k}{k!}$
$f(z) = \sum_{k=0}^\infty (-\frac{1}{k!} z^{k-1}) + \sum_{k=0}^\infty (\frac{1}{z-1} \frac{z^k}{k!})$
$f(z) = (-\frac{1}{0!}z^{-1} - \frac{1}{1!}z^0 - \frac{1}{2!}z^1 - \dots) + \frac{1}{z-1}(1+z+\frac{z^2}{2!}+\dots)$

For the second term $\frac{e^z}{z-1}$ in $|z|>1$:
$\frac{e^z}{z-1} = \frac{e^z}{z(1 - 1/z)} = z^{-1} e^z \sum_{n=0}^{\infty} z^{-n} = \sum_{n=0}^{\infty} z^{-n-1} \sum_{k=0}^{\infty} \frac{z^k}{k!}$
This is a convolution of coefficients.
The term for $z^p$ in the sum is obtained when $k-n-1 = p$, i.e., $k = p+n+1$.
The coefficient of $z^p$ is $\sum_{n=0}^\infty \frac{1}{k!} = \sum_{n=0}^{\infty} \frac{1}{(p+n+1)!}$, provided $p+n+1 \ge 0$.

Let's combine the two parts.
$f(z) = -\sum_{j=-\infty}^{\infty} \frac{1}{(j+1)!} z^j + \sum_{p=-\infty}^{\infty} \left(\sum_{n=0, p+n+1\ge 0}^\infty \frac{1}{(p+n+1)!}\right) z^p$

Let's look at the coefficient of $z^j$:
From the first term: $c_j = -\frac{1}{(j+1)!}$ for $j \ge -1$ (since $k \ge 0 \implies j+1 \ge 0$) and $c_j=0$ for $j < -1$.
More precisely, the first term is $-(\frac{1}{0!}z^{-1} + \frac{1}{1!}z^0 + \frac{1}{2!}z^1 + \dots)$.
So, $c_j^{(1)} = -\frac{1}{(j+1)!}$ for $j \ge -1$, and $0$ otherwise.

From the second term $\frac{e^z}{z-1}$:
$\frac{e^z}{z-1} = \frac{e^z}{z(1-1/z)} = z^{-1} e^z (1+z^{-1}+z^{-2}+\dots)$
$= z^{-1}(1+z+\frac{z^2}{2!}+\dots) + z^{-2}(1+z+\frac{z^2}{2!}+\dots) + z^{-3}(1+z+\frac{z^2}{2!}+\dots) + \dots$
$= (z^{-1}+1+\frac{z}{2!}+\frac{z^2}{3!}+\dots) + (z^{-2}+z^{-1}+1+\frac{z}{2!}+\dots) + (z^{-3}+z^{-2}+z^{-1}+\dots) + \dots$

Coefficient of $z^j$ for $\frac{e^z}{z-1}$ is $c_j^{(2)}$.
$c_j^{(2)} = \sum_{n=0}^\infty \frac{1}{(j+n+1)!}$ where $j+n+1 \ge 0$.

Let's sum the coefficients for $f(z) = -\frac{e^z}{z} + \frac{e^z}{z-1}$.
$c_j = c_j^{(1)} + c_j^{(2)}$
$c_j = -\frac{1}{(j+1)!} + \sum_{n=0, j+n+1\ge 0}^\infty \frac{1}{(j+n+1)!}$

Consider specific powers:
$j=-1$: $c_{-1} = -\frac{1}{(-1+1)!} + \sum_{n=0, -1+n+1\ge 0}^\infty \frac{1}{(-1+n+1)!} = -\frac{1}{0!} + \sum_{n=0}^\infty \frac{1}{n!} = -1 + e = e-1$.
$j=0$: $c_0 = -\frac{1}{(0+1)!} + \sum_{n=0, 0+n+1\ge 0}^\infty \frac{1}{(0+n+1)!} = -1 + \sum_{n=0}^\infty \frac{1}{(n+1)!}$.
$\sum_{n=0}^\infty \frac{1}{(n+1)!} = \frac{1}{1!} + \frac{1}{2!} + \frac{1}{3!} + \dots = (1 + \frac{1}{1!} + \frac{1}{2!} + \dots) - 1 = e-1$.
So $c_0 = -1 + (e-1) = e-2$.

$j=-2$: $c_{-2} = -\frac{1}{(-2+1)!} + \sum_{n=0, -2+n+1\ge 0}^\infty \frac{1}{(-2+n+1)!} = -\frac{1}{(-1)!}$ (undefined, or consider $k=j+n+1$, so $k \ge 0$).
The sum $\sum_{n=0, j+n+1\ge 0}^\infty \frac{1}{(j+n+1)!}$ implies we sum for $n \ge \max(0, -j-1)$.
For $j=-2$, we sum for $n \ge \max(0, -(-2)-1) = \max(0, 1) = 1$.
$c_{-2} = 0 + \sum_{n=1}^\infty \frac{1}{(-2+n+1)!} = \sum_{n=1}^\infty \frac{1}{(n-1)!}$. Let $m = n-1$.
$c_{-2} = \sum_{m=0}^\infty \frac{1}{m!} = e$.
$c_{-2} = c_{-2}^{(1)} + c_{-2}^{(2)} = 0 + e = e$.

This indicates the calculation is complex by hand.
A simplified approach for $\frac{e^z}{z-1}$ for $|z|>1$:
$\frac{e^z}{z-1} = \frac{e^z - e^1 + e^1}{z-1} = \frac{e^z - e}{z-1} + \frac{e}{z-1}$.
$\frac{e^z - e}{z-1} = \frac{e^z - e}{z-1} \frac{1}{z(1-1/z)} = \frac{e^z-e}{z-1} z^{-1} \sum_{n=0}^{\infty} z^{-n}$
$= ( \frac{e^z-e}{z-1} ) (\sum_{n=1}^{\infty} z^{-n})$.
The function $\frac{e^z-e}{z-1}$ is analytic for $|z|>1$. Its Taylor series around $z=0$ is not useful here.
However, $\frac{e^z-e}{z-1}$ can be expanded in powers of $1/z$.
$\frac{e^z-e}{z-1} = \frac{e^z}{z-1} - \frac{e}{z-1}$.
$\frac{e^z}{z-1} = \frac{1}{z-1} + \frac{z}{z-1} + \frac{z^2}{2!(z-1)} + \dots$
$= (z^{-1}+z^{-2}+z^{-3}+\dots) + (1+z^{-1}+z^{-2}+\dots) + (\frac{z}{2!}+\frac{1}{2!}+z^{-1}+\dots) + \dots$
$= (1+1)z^0 + (1+1+\frac{1}{2!})z^{-1} + (1+1+\frac{1}{2!})z^{-2} + \dots$
This is still complicated.

Let's use the coefficients derived from the convolution sum.
$c_j = -\frac{1}{(j+1)!} + \sum_{n=0, j+n+1\ge 0}^\infty \frac{1}{(j+n+1)!}$

The full Laurent series is the sum of the series for $-\frac{e^z}{z}$ and $\frac{e^z}{z-1}$.
$-\frac{e^z}{z} = -z^{-1} - \frac{1}{2} - \frac{z}{6} - \frac{z^2}{24} - \dots$
$\frac{e^z}{z-1}$ for $|z|>1$:
$\frac{e^z}{z-1} = \frac{e^z}{z(1-1/z)} = z^{-1}e^z\sum_{n=0}^\infty z^{-n}$
$= z^{-1}(1+z+\frac{z^2}{2!}+\dots)(1+z^{-1}+z^{-2}+\dots)$
$= z^{-1} ( (1)(1) + (1)(z^{-1}) + (1)(z^{-2}) + \dots$
$+ (z)(1) + (z)(z^{-1}) + (z)(z^{-2}) + \dots$
$+ (\frac{z^2}{2!})(1) + (\frac{z^2}{2!})(z^{-1}) + \dots )$
$= z^{-1} ( 1 + z^{-1} + z^{-2} + \dots$
$+ z + 1 + z^{-1} + \dots$
$+ \frac{z^2}{2!} + \frac{z}{2!} + \frac{1}{2!} + \dots )$
Collecting powers:
$= (z^{-1} + z^{-2} + z^{-3} + \dots)$
$+ (1 + z^{-1} + z^{-2} + \dots)$
$+ (\frac{z}{2!} + \frac{1}{2!} + z^{-1} + \dots)$
$+ (\frac{z^2}{3!} + \frac{z}{3!} + \frac{1}{3!} + \dots)$

Terms in $\frac{e^z}{z-1}$ (for $|z|>1$):
$z^{-1}: 1+1 = 2$
$z^0: 1+1 = 2$
$z^1: \frac{1}{2!} + \frac{1}{1!} + \frac{1}{2!} = 2$ (Mistake here, previous coeff of $z^1$ in $e^z$ is $1/2!$, $z^0$ is 1)
$e^z = 1+z+\frac{z^2}{2!}+\dots$
$z^{-1}e^z = z^{-1}+1+\frac{z}{2!}+\frac{z^2}{3!}+\dots$
$z^{-2}e^z = z^{-2}+z^{-1}+1+\frac{z}{2!}+\dots$
$z^{-3}e^z = z^{-3}+z^{-2}+z^{-1}+1+\dots$

$\frac{e^z}{z-1} = z^{-1}e^z + z^{-2}e^z + z^{-3}e^z + \dots$
$= (z^{-1}+1+\frac{z}{2!}+\dots) + (z^{-2}+z^{-1}+1+\dots) + (z^{-3}+z^{-2}+z^{-1}+\dots) + \dots$
$z^{-1}: 1+1 = 2$
$z^0: 1+1 = 2$
$z^1: \frac{1}{2!} + \frac{1}{1!} = \frac{3}{2}$ (This is still wrong, let's be systematic)

$\frac{e^z}{z-1} = \sum_{n=1}^\infty z^{-n} e^z$. The coefficient of $z^p$ is $\sum_{n=1}^\infty \text{coeff of } z^{p+n} \text{ in } e^z$.
Coeff of $z^m$ in $e^z$ is $1/m!$. So we need $p+n = k$.
Coeff of $z^p$ in $\frac{e^z}{z-1}$ is $\sum_{n=1}^\infty \frac{1}{(p+n)!}$, where $p+n \ge 0$.

So $f(z) = -\sum_{k=0}^\infty \frac{z^{k-1}}{k!} + \sum_{p=-\infty}^\infty (\sum_{n=1, p+n\ge 0}^\infty \frac{1}{(p+n)!}) z^p$.
Let $j = k-1$ for the first sum, so $k=j+1$. $j$ ranges from $-1$ to $\infty$.
$f(z) = \sum_{j=-1}^\infty (-\frac{1}{(j+1)!}) z^j + \sum_{p=-\infty}^\infty (\sum_{n=1, p+n\ge 0}^\infty \frac{1}{(p+n)!}) z^p$.
Let $p$ be the power.
$c_j = -\frac{1}{(j+1)!} + \sum_{n=1, j+n\ge 0}^\infty \frac{1}{(j+n)!}$.

$j=-1$: $c_{-1} = -\frac{1}{0!} + \sum_{n=1, -1+n\ge 0}^\infty \frac{1}{(-1+n)!} = -1 + \sum_{n=1}^\infty \frac{1}{(n-1)!} = -1 + \sum_{m=0}^\infty \frac{1}{m!} = -1 + e = e-1$.
$j=0$: $c_0 = -\frac{1}{1!} + \sum_{n=1, 0+n\ge 0}^\infty \frac{1}{(0+n)!} = -1 + \sum_{n=1}^\infty \frac{1}{n!} = -1 + (e-1) = e-2$.
$j=1$: $c_1 = -\frac{1}{2!} + \sum_{n=1, 1+n\ge 0}^\infty \frac{1}{(1+n)!} = -\frac{1}{2} + \sum_{n=1}^\infty \frac{1}{(n+1)!} = -\frac{1}{2} + (\frac{1}{2!} + \frac{1}{3!} + \dots) = -\frac{1}{2} + (e-2) = e - \frac{5}{2}$.
$j=-2$: $c_{-2} = -\frac{1}{(-2+1)!} + \sum_{n=1, -2+n\ge 0}^\infty \frac{1}{(-2+n)!} = 0 + \sum_{n=2}^\infty \frac{1}{(n-2)!} = \sum_{m=0}^\infty \frac{1}{m!} = e$.
$j=-3$: $c_{-3} = -\frac{1}{(-3+1)!} + \sum_{n=1, -3+n\ge 0}^\infty \frac{1}{(-3+n)!} = 0 + \sum_{n=3}^\infty \frac{1}{(n-3)!} = \sum_{m=0}^\infty \frac{1}{m!} = e$.

The Laurent series starts like this:
$f(z) = (e-1)z^{-1} + (e-2)z^0 + (e - \frac{5}{2})z^1 + \dots + e z^{-2} + e z^{-3} + \dots$
This calculation is still complex and prone to errors. The key is to identify the terms and their corresponding powers correctly.

A more structured way to represent this is via coefficient calculation for each power $z^p$.
$f(z) = \sum_{p=-\infty}^{\infty} c_p z^p$.
$c_p = -\frac{1}{(p+1)!} \quad (\text{if } p \ge -1) \quad + \sum_{n=1, p+n\ge 0}^\infty \frac{1}{(p+n)!}$

This covers the structure and coefficient calculation for Laurent series, linking to CO4 for understanding series about singularities.

---
This concludes the notes on Laurent Series. Remember to practice expanding various functions in different annuli to build your understanding and skill. The concept of the residue ($c_{-1}$) will be crucial in subsequent topics.
