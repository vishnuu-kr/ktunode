---
title: "Poles"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 4: Taylor series and Maclaurin series"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba8106a8"
status: "completed"
scrapedAt: "2026-05-20T18:41:33.529Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 4: Taylor Series and Maclaurin Series

### Topic: Poles

---

### 1. Introduction to Poles

**What is a Pole?**

In the context of complex analysis and the study of functions, a **pole** is a type of singularity where a function "blows up" to infinity in a controlled way. More formally, a function $f(z)$ has a pole of order $m$ at $z_0$ if it can be written in the form:

$$f(z) = \frac{g(z)}{(z - z_0)^m}$$

where $g(z)$ is a function that is analytic (differentiable in a neighborhood) at $z_0$ and $g(z_0) \neq 0$.

**Distinguishing Poles from Other Singularities:**

It's important to differentiate poles from other types of isolated singularities:

*   **Removable Singularity:** A singularity $z_0$ is removable if $\lim_{z \to z_0} f(z)$ exists and is finite. In this case, we can redefine $f(z_0)$ to make the function analytic at $z_0$.
*   **Essential Singularity:** A singularity $z_0$ is essential if the function's behavior near $z_0$ is very erratic and cannot be represented by a finite-order Laurent series term $(z-z_0)^{-m}$. The Laurent series will have infinitely many terms with negative powers of $(z-z_0)$.

**How Poles Relate to Taylor/Maclaurin Series:**

While Taylor and Maclaurin series are primarily used for functions that are analytic in a neighborhood of the expansion point, the concept of poles is crucial when considering functions that *are not* analytic at certain points. The behavior of a function near a pole is characterized by its Laurent series expansion. A pole of order $m$ at $z_0$ corresponds to the highest power of $(z-z_0)^{-1}$ in the Laurent series of $f(z)$ around $z_0$.

---

### 2. Identifying Poles and Their Order

**Using the Laurent Series:**

The most direct way to identify a pole and its order is by examining the Laurent series expansion of $f(z)$ around a point $z_0$.

*   If the Laurent series of $f(z)$ around $z_0$ has a finite number of terms with negative powers of $(z-z_0)$, i.e., it is of the form:
    $$f(z) = \sum_{n=-\infty}^{\infty} a_n (z-z_0)^n = \sum_{n=1}^{m} \frac{a_{-n}}{(z-z_0)^n} + \sum_{n=0}^{\infty} a_n (z-z_0)^n$$
    where $a_{-m} \neq 0$ and $a_{-n} = 0$ for all $n > m$, then $f(z)$ has a pole of order $m$ at $z_0$.

**Using Limits:**

We can also identify poles and their orders using limits:

*   A function $f(z)$ has a pole of order $m$ at $z_0$ if and only if $\lim_{z \to z_0} (z-z_0)^m f(z)$ exists and is a non-zero finite complex number.
*   The smallest positive integer $m$ for which this limit is finite and non-zero is the order of the pole.

**Methods for Finding Poles:**

1.  **Denominator Zeros:** For rational functions (a ratio of polynomials), poles occur at the zeros of the denominator, provided these zeros are not also zeros of the numerator with at least the same multiplicity.

    *   If $f(z) = \frac{P(z)}{Q(z)}$, where $P(z)$ and $Q(z)$ are analytic functions, and $Q(z_0) = 0$ but $P(z_0) \neq 0$, then $z_0$ is a pole.
    *   If $P(z_0) = 0$ and $Q(z_0) = 0$, we need to consider the multiplicities of these zeros. If the multiplicity of the zero $z_0$ in $Q(z)$ is greater than the multiplicity of the zero $z_0$ in $P(z)$, then $z_0$ is a pole.

2.  **Behavior of the Function:** For more general functions, observing where the function tends to infinity can indicate a pole.

---

### 3. Examples of Poles

**Example 1: Simple Pole (Order 1)**

Consider the function $f(z) = \frac{1}{z-2}$.

*   **Method 1 (Laurent Series):** The function is already in the form $\frac{g(z)}{(z-z_0)^m}$, where $g(z) = 1$ and $m=1$ and $z_0 = 2$. $g(2) = 1 \neq 0$. The Laurent series around $z=2$ is just $f(z) = (z-2)^{-1}$, which has one term with a negative power, so it's a pole of order 1.
*   **Method 2 (Limits):**
    *   Check $m=1$: $\lim_{z \to 2} (z-2) f(z) = \lim_{z \to 2} (z-2) \frac{1}{z-2} = \lim_{z \to 2} 1 = 1$.
    Since the limit is finite and non-zero (1), $z=2$ is a pole of order 1.

**Example 2: Pole of Order 2**

Consider the function $f(z) = \frac{z}{(z-3)^2}$.

*   **Method 1 (Laurent Series):** $g(z) = z$, $m=2$, $z_0=3$. $g(3) = 3 \neq 0$. The function is already in the required form. The Laurent series around $z=3$ will have a term $\frac{3}{(z-3)^2}$ and other terms with non-negative powers of $(z-3)$. This indicates a pole of order 2.
*   **Method 2 (Limits):**
    *   Check $m=1$: $\lim_{z \to 3} (z-3) f(z) = \lim_{z \to 3} (z-3) \frac{z}{(z-3)^2} = \lim_{z \to 3} \frac{z}{z-3}$. This limit does not exist (it goes to infinity).
    *   Check $m=2$: $\lim_{z \to 3} (z-3)^2 f(z) = \lim_{z \to 3} (z-3)^2 \frac{z}{(z-3)^2} = \lim_{z \to 3} z = 3$.
    Since the limit for $m=2$ is finite and non-zero (3), $z=3$ is a pole of order 2.

**Example 3: Rational Function with Common Zeros**

Consider the function $f(z) = \frac{z^2 - 1}{(z-1)^3}$.

*   We can simplify $f(z) = \frac{(z-1)(z+1)}{(z-1)^3} = \frac{z+1}{(z-1)^2}$.
*   Now, comparing with the definition, $g(z) = z+1$ and $m=2$, $z_0=1$.
*   Check $g(1)$: $g(1) = 1+1 = 2 \neq 0$.
*   Therefore, $z=1$ is a pole of order 2.

**Example 4: Pole vs. Removable Singularity**

Consider the function $f(z) = \frac{z^2}{z}$.

*   **Method 1 (Simplification):** For $z \neq 0$, $f(z) = z$.
    *   The limit as $z \to 0$ is $\lim_{z \to 0} z = 0$. Since the limit is finite, $z=0$ is a removable singularity. We can redefine $f(0)=0$ to make it analytic.
*   **Method 2 (Laurent Series around $z=0$):** The function $f(z) = z$ is already its own Maclaurin series. There are no terms with negative powers of $z$. This indicates no pole.

Consider the function $f(z) = \frac{z}{z^2}$.

*   **Method 1 (Simplification):** For $z \neq 0$, $f(z) = \frac{1}{z} = z^{-1}$.
    *   The limit as $z \to 0$ is $\lim_{z \to 0} \frac{1}{z}$, which does not exist (goes to infinity).
*   **Method 2 (Laurent Series around $z=0$):** The function is already $z^{-1}$, which has one term with a negative power, $a_{-1} = 1 \neq 0$. This indicates a pole of order 1.
*   **Method 3 (Limits):**
    *   Check $m=1$: $\lim_{z \to 0} z f(z) = \lim_{z \to 0} z \frac{1}{z} = \lim_{z \to 0} 1 = 1$.
    Since the limit is finite and non-zero, $z=0$ is a pole of order 1.

---

### 4. Poles in Relation to Taylor Series and Maclaurin Series

**Domain of Convergence:**

*   The radius of convergence of a Taylor series expansion of $f(z)$ around $z_0$ is the distance from $z_0$ to the nearest singularity of $f(z)$.
*   If a function has a pole at $z_0$, it cannot have a Taylor series expansion around $z_0$ because the function is not analytic there.
*   If a function has a pole at $z_p$ and we want to find a Taylor series expansion around $z_0$ (where $f(z)$ is analytic), the radius of convergence will be $|z_p - z_0|$.

**Example:**

Consider $f(z) = \frac{1}{z-2}$. This function has a pole at $z_0 = 2$.
*   If we want to find the Taylor series expansion around $z = 0$, the radius of convergence will be $|2 - 0| = 2$. The Taylor series for $\frac{1}{1-w}$ is $\sum_{n=0}^{\infty} w^n$.
    $$f(z) = \frac{1}{z-2} = \frac{1}{-2(1 - z/2)} = -\frac{1}{2} \sum_{n=0}^{\infty} \left(\frac{z}{2}\right)^n = -\frac{1}{2} \sum_{n=0}^{\infty} \frac{z^n}{2^n} = \sum_{n=0}^{\infty} -\frac{1}{2^{n+1}} z^n$$
    This series converges for $|z/2| < 1$, which means $|z| < 2$. The radius of convergence is indeed 2, determined by the pole at $z=2$.

**Maclaurin Series:**

A Maclaurin series is a Taylor series expansion around $z_0 = 0$. Poles at $z=0$ directly affect the existence and convergence of Maclaurin series.

*   If a function has a pole at $z=0$, it cannot have a Maclaurin series.
*   If a function has a pole at $z=p \neq 0$, the Maclaurin series expansion will have a radius of convergence equal to $|p|$.

---

### 5. Poles and Residues (Brief Mention)

**Residue Theorem:**

While the primary focus here is identifying poles, it's important to note their significance in the Residue Theorem, a fundamental tool in complex integration. The residue of a function $f(z)$ at an isolated singularity $z_0$ is the coefficient $a_{-1}$ in its Laurent series expansion around $z_0$.

*   For a pole of order $m$ at $z_0$, the residue can be calculated as:
    $$\text{Res}(f, z_0) = \frac{1}{(m-1)!} \lim_{z \to z_0} \frac{d^{m-1}}{dz^{m-1}} \left[ (z-z_0)^m f(z) \right]$$

**Relevance:** The ability to identify poles and calculate their order is a prerequisite for calculating residues, which are essential for evaluating complex integrals.

---

### 6. Important Points to Remember

*   **Definition:** A pole of order $m$ at $z_0$ means $f(z) = \frac{g(z)}{(z-z_0)^m}$ where $g(z_0) \neq 0$ and $g(z)$ is analytic at $z_0$.
*   **Identification:**
    *   Look for zeros of the denominator that are not canceled by zeros of the numerator of equal or higher multiplicity.
    *   Use the limit definition: $\lim_{z \to z_0} (z-z_0)^m f(z)$ is finite and non-zero for the smallest such positive integer $m$.
*   **Laurent Series:** A pole of order $m$ at $z_0$ corresponds to the highest power of $(z-z_0)^{-1}$ in the Laurent series expansion.
*   **Radius of Convergence:** The radius of convergence of a Taylor series expansion around $z_0$ is limited by the distance to the nearest pole (or other singularity).
*   **Maclaurin Series:** A function must be analytic at $z=0$ to have a Maclaurin series. Poles at $z=0$ prevent the existence of a Maclaurin series.

---

### 7. Practice Questions and Exercises

**Question 1:**

Determine the order of the poles for the following functions, if any:

a) $f(z) = \frac{e^z}{z^2}$
b) $f(z) = \frac{\sin(z)}{z^3}$
c) $f(z) = \frac{1}{z(z-1)^2}$
d) $f(z) = \frac{z+1}{(z-i)^3}$
e) $f(z) = \frac{z^2-4}{z-2}$

**Question 2:**

Find the pole(s) and their order(s) for the function $f(z) = \frac{\cos(\pi z)}{(z-1)^2(z+2)}$.

**Question 3:**

Consider the function $f(z) = \frac{1}{z-a}$.
a) If $a=0$, what kind of singularity does $f(z)$ have at $z=0$? What is the order?
b) What is the radius of convergence of the Taylor series expansion of $f(z) = \frac{1}{z-a}$ around $z=0$, assuming $a \neq 0$?

**Question 4:**

Does the function $f(z) = \frac{z^3}{z^2}$ have a pole at $z=0$? Justify your answer.

---

### 8. Answers to Practice Questions

**Answer 1:**

a) $f(z) = \frac{e^z}{z^2}$. Here $g(z) = e^z$ and $z_0 = 0$. $g(0) = e^0 = 1 \neq 0$. The denominator is $z^2$, so $m=2$. Thus, $z=0$ is a pole of order **2**.
b) $f(z) = \frac{\sin(z)}{z^3}$. We know that $\sin(z) = z - \frac{z^3}{3!} + \frac{z^5}{5!} - \dots$.
   So, $f(z) = \frac{z - z^3/6 + \dots}{z^3} = \frac{1}{z^2} - \frac{1}{6} + \dots$.
   The Laurent series has a term $\frac{1}{z^2}$, and the coefficient of $\frac{1}{z}$ is 0. Alternatively, $\lim_{z \to 0} z \frac{\sin(z)}{z^3} = \lim_{z \to 0} \frac{\sin(z)}{z^2} = \infty$.
   $\lim_{z \to 0} z^2 \frac{\sin(z)}{z^3} = \lim_{z \to 0} \frac{\sin(z)}{z} = 1$.
   Since the limit is finite and non-zero for $m=2$, $z=0$ is a pole of order **2**.
c) $f(z) = \frac{1}{z(z-1)^2}$.
   *   At $z=0$: $g(z) = \frac{1}{(z-1)^2}$, $m=1$. $g(0) = \frac{1}{(0-1)^2} = 1 \neq 0$. So, $z=0$ is a pole of order **1**.
   *   At $z=1$: $g(z) = \frac{1}{z}$, $m=2$. $g(1) = \frac{1}{1} = 1 \neq 0$. So, $z=1$ is a pole of order **2**.
d) $f(z) = \frac{z+1}{(z-i)^3}$. Here $g(z) = z+1$, $m=3$, $z_0 = i$. $g(i) = i+1 \neq 0$. So, $z=i$ is a pole of order **3**.
e) $f(z) = \frac{z^2-4}{z-2} = \frac{(z-2)(z+2)}{z-2}$. For $z \neq 2$, $f(z) = z+2$.
   $\lim_{z \to 2} f(z) = \lim_{z \to 2} (z+2) = 4$. Since the limit is finite, $z=2$ is a **removable singularity**, not a pole.

**Answer 2:**

$f(z) = \frac{\cos(\pi z)}{(z-1)^2(z+2)}$

*   **At $z=1$:** The denominator has a zero of order 2 at $z=1$. The numerator is $\cos(\pi z)$. At $z=1$, $\cos(\pi \cdot 1) = \cos(\pi) = -1 \neq 0$.
    Since the numerator is non-zero at $z=1$ and the denominator has a zero of order 2, $z=1$ is a pole of order **2**.

*   **At $z=-2$:** The denominator has a zero of order 1 at $z=-2$. The numerator is $\cos(\pi z)$. At $z=-2$, $\cos(\pi \cdot -2) = \cos(-2\pi) = 1 \neq 0$.
    Since the numerator is non-zero at $z=-2$ and the denominator has a zero of order 1, $z=-2$ is a pole of order **1**.

**Answer 3:**

a) For $f(z) = \frac{1}{z}$ and $a=0$, $z_0=0$. The function can be written as $\frac{g(z)}{(z-z_0)^m}$ with $g(z)=1$ and $m=1$. $g(0) = 1 \neq 0$. So, $z=0$ is a pole of order **1** (a simple pole).

b) The function is $f(z) = \frac{1}{z-a}$. The singularity is at $z=a$.
   The Taylor series expansion around $z=0$ will have a radius of convergence equal to the distance from the center of expansion ($z=0$) to the nearest singularity.
   The nearest (and only) singularity is at $z=a$.
   Therefore, the radius of convergence is $|a - 0| = |a|$.

**Answer 4:**

The function is $f(z) = \frac{z^3}{z^2}$.
For $z \neq 0$, we can simplify $f(z) = z$.
To check for a pole at $z=0$, we can look at the limit:
$\lim_{z \to 0} f(z) = \lim_{z \to 0} z = 0$.
Since the limit exists and is finite, $z=0$ is a **removable singularity**, not a pole.
Alternatively, the Laurent series of $f(z)=z$ around $z=0$ is just $z$, which has no negative powers of $z$. This indicates no pole.
