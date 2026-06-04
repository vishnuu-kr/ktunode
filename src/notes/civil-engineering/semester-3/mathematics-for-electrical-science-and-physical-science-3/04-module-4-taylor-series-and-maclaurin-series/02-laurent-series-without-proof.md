---
title: "Laurent series (without proof)"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 4: Taylor series and Maclaurin series"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba8106a6"
status: "completed"
scrapedAt: "2026-05-20T18:41:32.187Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 4: Taylor Series and Maclaurin Series

### Topic: Laurent Series (without proof)

---

### 1. Introduction to Laurent Series

#### 1.1 What is a Laurent Series?

*   A Laurent series is a **representation of a complex function as a power series in terms of both positive and negative powers of (z - a)**.
*   It's a generalization of the Taylor series, which only uses non-negative powers of (z - a).
*   Laurent series are particularly useful for representing functions that are **analytic in an annulus (a ring-shaped region)**, especially around points where the function might have singularities.

#### 1.2 The Annulus of Convergence

*   A Laurent series for a function $f(z)$ around a point $a$ converges in an **annulus** defined by $R_1 < |z - a| < R_2$, where $R_1$ and $R_2$ are non-negative real numbers.
*   **Inner Radius ($R_1$):** The function might have singularities inside the circle $|z - a| = R_1$.
*   **Outer Radius ($R_2$):** The function might have singularities outside the circle $|z - a| = R_2$.
*   The Laurent series representation is valid within this open annulus.

---

### 2. The Laurent Series Expansion

#### 2.1 General Form of the Laurent Series

The Laurent series expansion of a function $f(z)$ about a point $a$ is given by:

$f(z) = \sum_{n=-\infty}^{\infty} c_n (z - a)^n$

This can be broken down into two parts:

$f(z) = \sum_{n=0}^{\infty} c_n (z - a)^n + \sum_{n=1}^{\infty} c_{-n} (z - a)^{-n}$

*   **Analytic Part (Taylor Series):** $\sum_{n=0}^{\infty} c_n (z - a)^n$
    *   This part contains only non-negative powers of $(z - a)$ and is similar to a Taylor series. It represents the function's behavior where it is analytic.
*   **Principal Part:** $\sum_{n=1}^{\infty} c_{-n} (z - a)^{-n}$
    *   This part contains only negative powers of $(z - a)$. It describes the behavior of the function near a singularity at $z=a$.

#### 2.2 The Coefficients $c_n$

The coefficients $c_n$ are given by the contour integral formula:

$c_n = \frac{1}{2\pi i} \oint_{\gamma} \frac{f(z)}{(z - a)^{n+1}} dz$

where:
*   $\gamma$ is a simple closed contour lying within the annulus of convergence, enclosing the point $a$.
*   $i$ is the imaginary unit ($\sqrt{-1}$).

**Note:** While this is the formal definition, for many practical purposes, we derive Laurent series by algebraic manipulation using known series expansions (like geometric series) and relating them to Taylor series.

---

### 3. Key Concepts and Definitions

*   **Analytic Function:** A function that is differentiable at every point in an open disk.
*   **Singularity:** A point where a function is not analytic. For Laurent series, we are often interested in isolated singularities (poles and essential singularities).
*   **Annulus:** A region between two concentric circles in the complex plane.
*   **Principal Part:** The part of the Laurent series with negative powers of $(z-a)$. It captures the singularity's behavior.
*   **Analytic Part:** The part of the Laurent series with non-negative powers of $(z-a)$. It behaves like a Taylor series.
*   **Laurent Polynomial:** A Laurent series with a finite number of terms.
*   **Pole:** A singularity $a$ of $f(z)$ such that $|f(z)| \to \infty$ as $z \to a$. The order of the pole is the smallest positive integer $m$ for which $(z-a)^m f(z)$ is analytic and non-zero at $a$. In the Laurent series, this corresponds to the highest negative power $n=-m$.
*   **Essential Singularity:** A singularity where the principal part has infinitely many non-zero terms.
*   **Removable Singularity:** A singularity $a$ where the principal part is zero (i.e., all $c_{-n}$ for $n \ge 1$ are zero). The function can be made analytic by defining $f(a) = c_0$.

---

### 4. Deriving Laurent Series (Practical Methods)

Often, Laurent series are found by manipulating known series expansions, primarily the geometric series:

$\frac{1}{1 - w} = \sum_{n=0}^{\infty} w^n$, for $|w| < 1$.

**General Strategy:**

1.  **Identify the center of the expansion ($a$) and the annulus of convergence.**
2.  **Rewrite the function $f(z)$ in terms of $(z - a)$.** This usually involves algebraic manipulations like adding and subtracting $a$ in the denominator or numerator.
3.  **Express the rewritten function in a form that resembles the geometric series $\frac{1}{1 - w}$ or $\frac{1}{1 + w}$.**
4.  **Apply the geometric series formula.** This will introduce terms like $(z-a)^k$ or $(z-a)^{-k}$.
5.  **Separate the terms with positive and negative powers of $(z-a)$.**
6.  **Identify the coefficients $c_n$.**

---

### 5. Examples

#### Example 1: Expansion of $f(z) = \frac{1}{z(z-2)}$ about $a=0$

**Case 1: For the annulus $0 < |z| < 2$**

*   **Goal:** Expand $f(z)$ in powers of $z$.
*   We need to decompose $\frac{1}{z(z-2)}$ using partial fractions:
    $\frac{1}{z(z-2)} = \frac{A}{z} + \frac{B}{z-2}$
    $1 = A(z-2) + Bz$
    Setting $z=0 \implies 1 = -2A \implies A = -1/2$
    Setting $z=2 \implies 1 = 2B \implies B = 1/2$
    So, $f(z) = -\frac{1}{2z} + \frac{1}{2(z-2)}$

*   Now, focus on the term $\frac{1}{z-2}$ for the annulus $0 < |z| < 2$:
    $\frac{1}{z-2} = \frac{1}{-2(1 - z/2)} = -\frac{1}{2} \cdot \frac{1}{1 - (z/2)}$
*   Using the geometric series $\frac{1}{1-w} = \sum_{n=0}^{\infty} w^n$ with $w = z/2$ (and $|z/2| < 1$ which is true for $|z| < 2$):
    $\frac{1}{z-2} = -\frac{1}{2} \sum_{n=0}^{\infty} \left(\frac{z}{2}\right)^n = -\frac{1}{2} \sum_{n=0}^{\infty} \frac{z^n}{2^n} = -\sum_{n=0}^{\infty} \frac{z^n}{2^{n+1}}$

*   Substitute back into the partial fraction decomposition:
    $f(z) = -\frac{1}{2z} + \frac{1}{2} \left( -\sum_{n=0}^{\infty} \frac{z^n}{2^{n+1}} \right)$
    $f(z) = -\frac{1}{2z} - \sum_{n=0}^{\infty} \frac{z^n}{2^{n+2}}$
    $f(z) = -\frac{1}{2}z^{-1} - \left(\frac{1}{4} + \frac{z}{8} + \frac{z^2}{16} + \dots \right)$

*   This is the Laurent series for $0 < |z| < 2$.
    *   The principal part is $-\frac{1}{2}z^{-1}$.
    *   The analytic part is $-\sum_{n=0}^{\infty} \frac{z^n}{2^{n+2}}$.

**Case 2: For the annulus $|z| > 2$**

*   **Goal:** Expand $f(z)$ in powers of $z$.
*   Again, $f(z) = -\frac{1}{2z} + \frac{1}{2(z-2)}$.
*   Now, for the term $\frac{1}{z-2}$ in the annulus $|z| > 2$:
    $\frac{1}{z-2} = \frac{1}{z(1 - 2/z)}$
*   Using the geometric series with $w = 2/z$ (and $|2/z| < 1$ which is true for $|z| > 2$):
    $\frac{1}{z-2} = \frac{1}{z} \sum_{n=0}^{\infty} \left(\frac{2}{z}\right)^n = \frac{1}{z} \sum_{n=0}^{\infty} \frac{2^n}{z^n} = \sum_{n=0}^{\infty} \frac{2^n}{z^{n+1}}$

*   Substitute back:
    $f(z) = -\frac{1}{2z} + \frac{1}{2} \left( \sum_{n=0}^{\infty} \frac{2^n}{z^{n+1}} \right)$
    $f(z) = -\frac{1}{2z} + \sum_{n=0}^{\infty} \frac{2^n}{2z^{n+1}} = -\frac{1}{2z} + \sum_{n=0}^{\infty} \frac{2^{n-1}}{z^{n+1}}$
    Let's rewrite the sum by changing the index. Let $k = n+1$, so $n = k-1$.
    $f(z) = -\frac{1}{2z} + \sum_{k=1}^{\infty} \frac{2^{k-2}}{z^{k}}$
    $f(z) = \dots + \frac{2^{-2}}{z^3} + \frac{2^{-1}}{z^2} + \frac{2^0}{z^1}$
    $f(z) = \dots + \frac{1}{4z^3} + \frac{1}{2z^2} + \frac{1}{z}$

*   Let's express this in powers of $z^{-1}$:
    $f(z) = -\frac{1}{2}z^{-1} + \frac{1}{2} \left( \frac{1}{z} + \frac{2}{z^2} + \frac{4}{z^3} + \dots \right)$
    $f(z) = -\frac{1}{2}z^{-1} + \frac{1}{2} \left( \sum_{n=0}^{\infty} \frac{2^n}{z^{n+1}} \right)$
    $f(z) = -\frac{1}{2}z^{-1} + \frac{1}{2z} \sum_{n=0}^{\infty} \left(\frac{2}{z}\right)^n$
    $f(z) = -\frac{1}{2}z^{-1} + \frac{1}{2z} \left( 1 + \frac{2}{z} + \frac{4}{z^2} + \dots \right)$
    $f(z) = -\frac{1}{2}z^{-1} + \frac{1}{2}z^{-1} + \frac{2}{2}z^{-2} + \frac{4}{2}z^{-3} + \dots$
    $f(z) = z^{-2} + 2z^{-3} + 4z^{-4} + \dots$

    Let's go back to the summation form and simplify carefully:
    $f(z) = -\frac{1}{2z} + \sum_{n=0}^{\infty} \frac{2^n}{2z^{n+1}}$
    $f(z) = -\frac{1}{2}z^{-1} + \frac{1}{2} \sum_{n=0}^{\infty} 2^n z^{-(n+1)}$
    Let $k = n+1$, so $n=k-1$.
    $f(z) = -\frac{1}{2}z^{-1} + \frac{1}{2} \sum_{k=1}^{\infty} 2^{k-1} z^{-k}$
    $f(z) = -\frac{1}{2}z^{-1} + \frac{1}{2} (2^0 z^{-1} + 2^1 z^{-2} + 2^2 z^{-3} + \dots)$
    $f(z) = -\frac{1}{2}z^{-1} + \frac{1}{2} (1 \cdot z^{-1} + 2 \cdot z^{-2} + 4 \cdot z^{-3} + \dots)$
    $f(z) = -\frac{1}{2}z^{-1} + \frac{1}{2}z^{-1} + z^{-2} + 2z^{-3} + 4z^{-4} + \dots$
    $f(z) = z^{-2} + 2z^{-3} + 4z^{-4} + \dots$

    The Laurent series is: $\sum_{k=2}^{\infty} 2^{k-2} z^{-k}$. This means $c_{-2}=1, c_{-3}=2, c_{-4}=4$, etc. All other coefficients are zero. This function has a pole of order 2 at $z=0$.

#### Example 2: Expansion of $f(z) = e^{1/z}$ about $a=0$

*   **Goal:** Expand $f(z)$ in powers of $z$. The natural annulus around $z=0$ where $f(z)$ is analytic (except at $z=0$) is $0 < |z| < \infty$.
*   We know the Taylor series for $e^w$ about $w=0$: $e^w = \sum_{n=0}^{\infty} \frac{w^n}{n!}$.
*   Substitute $w = 1/z$. Since we are considering $z \neq 0$, $1/z$ is well-defined.
    $f(z) = e^{1/z} = \sum_{n=0}^{\infty} \frac{(1/z)^n}{n!} = \sum_{n=0}^{\infty} \frac{1}{n! z^n} = \sum_{n=0}^{\infty} \frac{1}{n!} z^{-n}$
    $f(z) = \frac{1}{0!}z^0 + \frac{1}{1!}z^{-1} + \frac{1}{2!}z^{-2} + \frac{1}{3!}z^{-3} + \dots$
    $f(z) = 1 + \frac{1}{z} + \frac{1}{2z^2} + \frac{1}{6z^3} + \dots$

*   This is the Laurent series for $0 < |z| < \infty$.
    *   The principal part is $\sum_{n=1}^{\infty} \frac{1}{n!} z^{-n}$.
    *   The analytic part is just the $n=0$ term, which is $1$.
*   Since the principal part has infinitely many non-zero terms, $z=0$ is an **essential singularity** for $e^{1/z}$.

#### Example 3: Expansion of $f(z) = \frac{\sin z}{z^3}$ about $a=0$

*   **Goal:** Expand $f(z)$ in powers of $z$. The annulus of convergence is $0 < |z| < \infty$.
*   We know the Taylor series for $\sin z$ about $z=0$:
    $\sin z = z - \frac{z^3}{3!} + \frac{z^5}{5!} - \frac{z^7}{7!} + \dots = \sum_{k=0}^{\infty} \frac{(-1)^k z^{2k+1}}{(2k+1)!}$
*   Now divide by $z^3$:
    $f(z) = \frac{1}{z^3} \left( z - \frac{z^3}{3!} + \frac{z^5}{5!} - \frac{z^7}{7!} + \dots \right)$
    $f(z) = \frac{z}{z^3} - \frac{z^3}{3!z^3} + \frac{z^5}{5!z^3} - \frac{z^7}{7!z^3} + \dots$
    $f(z) = z^{-2} - \frac{1}{3!} + \frac{z^2}{5!} - \frac{z^4}{7!} + \dots$
    $f(z) = z^{-2} - \frac{1}{6} + \frac{z^2}{120} - \frac{z^4}{5040} + \dots$

*   In summation notation:
    $f(z) = \frac{1}{z^3} \sum_{k=0}^{\infty} \frac{(-1)^k z^{2k+1}}{(2k+1)!} = \sum_{k=0}^{\infty} \frac{(-1)^k z^{2k+1-3}}{(2k+1)!} = \sum_{k=0}^{\infty} \frac{(-1)^k z^{2k-2}}{(2k+1)!}$

*   This is the Laurent series for $0 < |z| < \infty$.
    *   The principal part is $z^{-2}$ (from $k=0$).
    *   The analytic part is $-\frac{1}{6} + \frac{z^2}{120} - \frac{z^4}{5040} + \dots$
*   Since the principal part has a highest negative power ($z^{-2}$), this indicates a pole. The highest negative power is $-2$, so it's a pole of order 2.

---

### 6. Learning Outcomes Revisited

*   **Understanding the concept of Laurent series:** We have defined it as a power series with both positive and negative powers, used for functions analytic in an annulus.
*   **Identifying the annulus of convergence:** We discussed how the inner and outer radii are determined by singularities.
*   **Expanding functions into Laurent series:** We've shown practical methods using algebraic manipulation and known series, and provided examples.
*   **Recognizing the principal and analytic parts:** We've seen how these parts relate to the behavior of the function near singularities.
*   **Applying Laurent series in the context of electrical and physical sciences:** While not explicitly demonstrated with specific applications in this theoretical section, Laurent series are crucial for analyzing circuit behavior with singularities (e.g., impedance functions), wave propagation, and quantum mechanics where singularities arise. The techniques learned are foundational.

---

### 7. Important Points to Remember

*   **Laurent series generalize Taylor series:** Taylor series are a special case of Laurent series where the principal part is zero (all $c_{-n}=0$ for $n \ge 1$).
*   **Annulus of Convergence is Crucial:** A function can have different Laurent series expansions in different annuli around the same center point. The series is unique within a given annulus.
*   **Partial Fractions are Your Friend:** Often, complex rational functions can be broken down into simpler forms using partial fractions, making them easier to expand using the geometric series.
*   **Manipulate to Fit the Geometric Series:** The key to deriving Laurent series practically is to rewrite the expression to fit the form $\frac{1}{1-w}$ or $\frac{1}{1+w}$.
*   **Negative Powers Indicate Singularities:** The presence of terms with negative powers of $(z-a)$ signifies a singularity at $z=a$.
*   **The Highest Negative Power Determines the Pole Order:** If the principal part has a highest negative power $(z-a)^{-m}$ (where $m > 0$), then $a$ is a pole of order $m$. If there are infinitely many negative powers, it's an essential singularity.

---

### 8. Practice Questions

**Question 1:**
Find the Laurent series expansion of the function $f(z) = \frac{1}{z^2 - 3z + 2}$ valid in the annulus $1 < |z| < 2$.

**Question 2:**
Find the Laurent series expansion of $f(z) = z^2 e^{1/z}$ about $z=0$. Identify the type of singularity at $z=0$.

**Question 3:**
Find the Laurent series expansion of $f(z) = \frac{z+1}{z(z-2)}$ in the annulus $0 < |z-1| < 1$.

**Question 4:**
Expand $f(z) = \frac{1}{z^2+1}$ in a Laurent series about $z=0$ for the annulus $|z| > 1$.

---

### 9. Answers to Practice Questions

**Answer 1:**
$f(z) = \frac{1}{z^2 - 3z + 2} = \frac{1}{(z-1)(z-2)}$
Using partial fractions: $\frac{1}{(z-1)(z-2)} = \frac{A}{z-1} + \frac{B}{z-2}$
$1 = A(z-2) + B(z-1)$
Set $z=1 \implies 1 = -A \implies A = -1$
Set $z=2 \implies 1 = B$
So, $f(z) = \frac{-1}{z-1} + \frac{1}{z-2}$

For the annulus $1 < |z| < 2$:
*   For $\frac{-1}{z-1}$: We need powers of $z$. Since $|z|>1$, we can write $z-1 = z(1 - 1/z)$.
    $\frac{-1}{z-1} = \frac{-1}{z(1 - 1/z)} = -\frac{1}{z} \sum_{n=0}^{\infty} \left(\frac{1}{z}\right)^n = -\frac{1}{z} \sum_{n=0}^{\infty} z^{-n} = -\sum_{n=0}^{\infty} z^{-n-1}$
    $= -z^{-1} - z^{-2} - z^{-3} - \dots$
*   For $\frac{1}{z-2}$: We need powers of $z$. Since $|z|<2$, we can write $z-2 = -2(1 - z/2)$.
    $\frac{1}{z-2} = \frac{1}{-2(1 - z/2)} = -\frac{1}{2} \sum_{n=0}^{\infty} \left(\frac{z}{2}\right)^n = -\frac{1}{2} \sum_{n=0}^{\infty} \frac{z^n}{2^n} = -\sum_{n=0}^{\infty} \frac{z^n}{2^{n+1}}$
    $= -\frac{1}{2} - \frac{z}{4} - \frac{z^2}{8} - \dots$

Combining both:
$f(z) = \left(-\sum_{n=0}^{\infty} z^{-n-1}\right) + \left(-\sum_{n=0}^{\infty} \frac{z^n}{2^{n+1}}\right)$
$f(z) = \dots - z^{-3} - z^{-2} - z^{-1} - \frac{1}{2} - \frac{z}{4} - \frac{z^2}{8} - \dots$

**Answer 2:**
$f(z) = z^2 e^{1/z}$. We know $e^w = \sum_{n=0}^{\infty} \frac{w^n}{n!}$.
Substitute $w = 1/z$:
$e^{1/z} = \sum_{n=0}^{\infty} \frac{(1/z)^n}{n!} = \sum_{n=0}^{\infty} \frac{z^{-n}}{n!} = 1 + z^{-1} + \frac{z^{-2}}{2!} + \frac{z^{-3}}{3!} + \dots$
Now multiply by $z^2$:
$f(z) = z^2 \left( 1 + z^{-1} + \frac{z^{-2}}{2!} + \frac{z^{-3}}{3!} + \frac{z^{-4}}{4!} + \dots \right)$
$f(z) = z^2 + z + \frac{1}{2!} + \frac{z^{-1}}{3!} + \frac{z^{-2}}{4!} + \dots$
$f(z) = z^2 + z + \frac{1}{2} + \frac{1}{6z} + \frac{1}{24z^2} + \dots$

The singularity at $z=0$ is an **essential singularity** because the principal part ($\frac{1}{6z} + \frac{1}{24z^2} + \dots$) has infinitely many non-zero terms.

**Answer 3:**
We want the expansion around $a=1$. Let $w = z-1$. Then $z = w+1$.
$f(z) = \frac{(w+1)+1}{(w+1)((w+1)-2)} = \frac{w+2}{(w+1)(w-1)}$
Using partial fractions for the expression in $w$:
$\frac{w+2}{(w+1)(w-1)} = \frac{A}{w+1} + \frac{B}{w-1}$
$w+2 = A(w-1) + B(w+1)$
Set $w=1 \implies 3 = 2B \implies B = 3/2$
Set $w=-1 \implies 1 = -2A \implies A = -1/2$
So, $f(z) = \frac{-1/2}{w+1} + \frac{3/2}{w-1} = \frac{-1/2}{z-1+1} + \frac{3/2}{z-1-1}$

The annulus is $0 < |z-1| < 1$, which means $0 < |w| < 1$.
*   For $\frac{-1/2}{w+1}$: Since $|w|<1$, we can use the geometric series $\frac{1}{1+w} = \sum_{n=0}^{\infty} (-1)^n w^n$.
    $\frac{-1/2}{w+1} = -\frac{1}{2} \sum_{n=0}^{\infty} (-1)^n w^n = \sum_{n=0}^{\infty} \frac{(-1)^{n+1}}{2} w^n$
*   For $\frac{3/2}{w-1}$: We can write $w-1 = -(1-w)$.
    $\frac{3/2}{w-1} = \frac{3/2}{-(1-w)} = -\frac{3}{2} \sum_{n=0}^{\infty} w^n = -\frac{3}{2} \sum_{n=0}^{\infty} w^n$

Combining both:
$f(z) = \left(\sum_{n=0}^{\infty} \frac{(-1)^{n+1}}{2} w^n\right) + \left(-\frac{3}{2} \sum_{n=0}^{\infty} w^n\right)$
$f(z) = \sum_{n=0}^{\infty} \left( \frac{(-1)^{n+1}}{2} - \frac{3}{2} \right) w^n$
Substitute back $w = z-1$:
$f(z) = \sum_{n=0}^{\infty} \left( \frac{(-1)^{n+1} - 3}{2} \right) (z-1)^n$
For $n=0: \frac{(-1)^1 - 3}{2} = \frac{-1-3}{2} = -2$
For $n=1: \frac{(-1)^2 - 3}{2} = \frac{1-3}{2} = -1$
For $n=2: \frac{(-1)^3 - 3}{2} = \frac{-1-3}{2} = -2$
So the series is: $-2 - (z-1) - 2(z-1)^2 - (z-1)^3 - 2(z-1)^4 - \dots$

**Answer 4:**
$f(z) = \frac{1}{z^2+1}$. For $|z| > 1$:
$f(z) = \frac{1}{z^2(1 + 1/z^2)}$
Using the geometric series with $w = -1/z^2$. Since $|z| > 1$, $|1/z| < 1$, so $|-1/z^2| < 1$.
$f(z) = \frac{1}{z^2} \sum_{n=0}^{\infty} \left(-\frac{1}{z^2}\right)^n = \frac{1}{z^2} \sum_{n=0}^{\infty} (-1)^n z^{-2n}$
$f(z) = \sum_{n=0}^{\infty} (-1)^n z^{-2n-2}$
$f(z) = (-1)^0 z^{-2} + (-1)^1 z^{-4} + (-1)^2 z^{-6} + \dots$
$f(z) = z^{-2} - z^{-4} + z^{-6} - z^{-8} + \dots$

This is the Laurent series for $|z|>1$. All terms have non-negative powers of $z$ (or negative powers of $z$). The coefficients are $c_{-2}=1, c_{-4}=-1, c_{-6}=1$, etc. All other coefficients are zero.

---
**End of Notes**
