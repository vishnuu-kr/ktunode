---
title: "Singularities and Zeros – Isolated Singularity"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 4: Taylor series and Maclaurin series"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35a7c"
status: "completed"
scrapedAt: "2026-05-23T16:14:48.039Z"
---
# Mathematics for Electrical Science and Physical Science – 3

## Module 4: Taylor Series and Maclaurin Series

### Topic: Singularities and Zeros – Isolated Singularity

**Learning Outcomes:**

*   Understand the concept of a singularity of a complex function.
*   Classify isolated singularities as removable singularities, poles, or essential singularities.
*   Determine the nature of isolated singularities by examining the Laurent series expansion of a complex function.
*   Relate the behavior of a function near an isolated singularity to its analytic properties.

---

### 1. Introduction to Singularities

In the study of complex functions, singularities are points where a function fails to be analytic. This means the function is not differentiable in a neighborhood around that point. For many applications in electrical and physical sciences, understanding the behavior of functions near these singularities is crucial.

*   **Analytic Function:** A complex function $f(z)$ is analytic at a point $z_0$ if it is differentiable in some neighborhood of $z_0$. A function is analytic in a region if it is analytic at every point in that region.

*   **Singularity:** A point $z_0$ is a singularity of $f(z)$ if $f(z)$ is not analytic at $z_0$.

**Kreyszig, 10th Ed., Chapter 14 (Complex Integration):** While this module focuses on series expansions, singularities are foundational for understanding complex integration and residue theory as discussed in Kreyszig's Chapter 14. The behavior at singularities dictates the type of contour integration we can perform.

**Zill & Shanahan, 3rd Ed., Chapter 8 (Series and Approximations):** This chapter directly addresses series expansions, including Taylor and Laurent series, which are essential for classifying singularities.

---

### 2. Isolated Singularities

An isolated singularity of a function $f(z)$ is a point $z_0$ such that:
1.  $f(z)$ is not analytic at $z_0$.
2.  There exists a punctured disk $0 < |z - z_0| < R$ (for some $R > 0$) where $f(z)$ is analytic.

In simpler terms, a singularity is isolated if it's the *only* singularity within a certain distance. Many functions encountered in physics and engineering (like $1/z$, $e^{1/z}$) have isolated singularities.

**Key Concept:** The nature of an isolated singularity $z_0$ is determined by the behavior of the function $f(z)$ in any punctured neighborhood of $z_0$.

---

### 3. Classification of Isolated Singularities

The classification of isolated singularities relies on the **Laurent series expansion** of $f(z)$ about the singularity $z_0$. The Laurent series is a generalization of the Taylor series that includes negative powers of $(z - z_0)$:

$$f(z) = \sum_{n=-\infty}^{\infty} c_n (z - z_0)^n = \sum_{n=0}^{\infty} a_n (z - z_0)^n + \sum_{n=1}^{\infty} b_n (z - z_0)^{-n}$$

The part with negative powers, $\sum_{n=1}^{\infty} b_n (z - z_0)^{-n}$, is called the **principal part** of the Laurent series. The classification depends on this principal part.

**Types of Isolated Singularities:**

#### 3.1. Removable Singularity

*   **Definition:** A point $z_0$ is a removable singularity of $f(z)$ if the principal part of its Laurent series expansion about $z_0$ contains no terms (i.e., $b_n = 0$ for all $n \ge 1$). This means the Laurent series is actually a Taylor series.
*   **Behavior:** The function $f(z)$ can be made analytic at $z_0$ by defining or redefining $f(z_0)$ appropriately.
*   **Condition:** $z_0$ is a removable singularity if and only if $\lim_{z \to z_0} f(z)$ exists and is finite.
*   **Laurent Series Form:**
    $$f(z) = \sum_{n=0}^{\infty} a_n (z - z_0)^n = a_0 + a_1(z-z_0) + a_2(z-z_0)^2 + \dots$$
    (No negative powers of $(z-z_0)$)

*   **Example:** Consider $f(z) = \frac{\sin z}{z}$.
    The singularity is at $z_0 = 0$.
    The Taylor series for $\sin z$ about $z=0$ is $z - \frac{z^3}{3!} + \frac{z^5}{5!} - \dots$.
    So, $f(z) = \frac{1}{z} \left( z - \frac{z^3}{3!} + \frac{z^5}{5!} - \dots \right) = 1 - \frac{z^2}{3!} + \frac{z^4}{5!} - \dots$.
    This is a Taylor series, so $z=0$ is a removable singularity.
    We can define $f(0) = 1$ to make the function analytic at $z=0$.
    Also, $\lim_{z \to 0} \frac{\sin z}{z} = 1$, confirming it's removable.

#### 3.2. Pole

*   **Definition:** A point $z_0$ is a pole of $f(z)$ if the principal part of its Laurent series expansion about $z_0$ has a finite number of non-zero terms. That is, $b_n = 0$ for all $n > m$, but $b_m \ne 0$ for some positive integer $m$.
*   **Order of the Pole:** The positive integer $m$ is called the **order** of the pole. If $m=1$, it's a **simple pole**.
*   **Behavior:** As $z \to z_0$, $|f(z)| \to \infty$.
*   **Condition:** $z_0$ is a pole of order $m$ if and only if $\lim_{z \to z_0} (z - z_0)^m f(z)$ exists and is a non-zero finite value.
*   **Laurent Series Form:**
    $$f(z) = \frac{b_m}{(z - z_0)^m} + \frac{b_{m-1}}{(z - z_0)^{m-1}} + \dots + \frac{b_1}{z - z_0} + a_0 + a_1(z-z_0) + \dots$$
    where $b_m \ne 0$.

*   **Example 1 (Simple Pole):** Consider $f(z) = \frac{e^z}{z}$.
    The singularity is at $z_0 = 0$.
    The Laurent series is $f(z) = \frac{1}{z} (1 + z + \frac{z^2}{2!} + \dots) = \frac{1}{z} + 1 + \frac{z}{2!} + \dots$.
    The principal part is $\frac{1}{z}$. This has one term with a negative power ($b_1 = 1$).
    So, $z=0$ is a pole of order $m=1$ (a simple pole).
    Check: $\lim_{z \to 0} (z - 0)^1 f(z) = \lim_{z \to 0} z \cdot \frac{e^z}{z} = \lim_{z \to 0} e^z = e^0 = 1$, which is finite and non-zero.

*   **Example 2 (Pole of Order 2):** Consider $f(z) = \frac{\cos z}{z^2}$.
    The singularity is at $z_0 = 0$.
    The Taylor series for $\cos z$ about $z=0$ is $1 - \frac{z^2}{2!} + \frac{z^4}{4!} - \dots$.
    So, $f(z) = \frac{1}{z^2} (1 - \frac{z^2}{2!} + \frac{z^4}{4!} - \dots) = \frac{1}{z^2} - \frac{1}{2!} + \frac{z^2}{4!} - \dots$.
    The principal part is $\frac{1}{z^2}$. This has one term with a negative power ($b_2 = 1$).
    So, $z=0$ is a pole of order $m=2$.
    Check: $\lim_{z \to 0} (z - 0)^2 f(z) = \lim_{z \to 0} z^2 \cdot \frac{\cos z}{z^2} = \lim_{z \to 0} \cos z = \cos 0 = 1$, which is finite and non-zero.

**Ramana, 39th Ed., Chapter 20 (Complex Integration):** Ramana's book provides thorough explanations and examples of poles and their orders using the Laurent series, aligning with this classification.

#### 3.3. Essential Singularity

*   **Definition:** A point $z_0$ is an essential singularity of $f(z)$ if the principal part of its Laurent series expansion about $z_0$ contains infinitely many non-zero terms.
*   **Behavior:** The behavior of $f(z)$ near an essential singularity is very complex and erratic. The **Casorati-Weierstrass Theorem** (also known as the Great Picard Theorem for essential singularities) states that in any neighborhood of an essential singularity $z_0$, the function $f(z)$ takes on every complex value infinitely many times, with at most one exception.
*   **Laurent Series Form:**
    $$f(z) = \sum_{n=1}^{\infty} b_n (z - z_0)^{-n} + \sum_{n=0}^{\infty} a_n (z - z_0)^n$$
    where infinitely many $b_n$ (for $n \ge 1$) are non-zero.

*   **Example:** Consider $f(z) = e^{1/z}$.
    The singularity is at $z_0 = 0$.
    The Taylor series for $e^w$ about $w=0$ is $1 + w + \frac{w^2}{2!} + \frac{w^3}{3!} + \dots$.
    Substitute $w = 1/z$:
    $f(z) = e^{1/z} = 1 + \frac{1}{z} + \frac{1}{2! z^2} + \frac{1}{3! z^3} + \dots$
    The principal part is $1 + \frac{1}{z} + \frac{1}{2! z^2} + \frac{1}{3! z^3} + \dots$. This contains infinitely many non-zero terms.
    Therefore, $z=0$ is an essential singularity.

*   **Example:** Consider $f(z) = \sin(1/z)$.
    The singularity is at $z_0 = 0$.
    Using the Taylor series for $\sin w = w - \frac{w^3}{3!} + \frac{w^5}{5!} - \dots$ and substituting $w=1/z$:
    $f(z) = \sin(1/z) = \frac{1}{z} - \frac{1}{3! z^3} + \frac{1}{5! z^5} - \dots$.
    The principal part is $\frac{1}{z} - \frac{1}{3! z^3} + \frac{1}{5! z^5} - \dots$. This has infinitely many non-zero terms.
    Therefore, $z=0$ is an essential singularity.

**Zill & Shanahan, 3rd Ed., Chapter 8:** This chapter provides a clear explanation of how the coefficients of the Laurent series determine the type of singularity.

**Grewal, 44th Ed., Chapter 22 (Complex Variables and Applications):** Grewal's text offers numerous examples and exercises on identifying singularities and their classifications.

---

### 4. Methods to Determine the Nature of an Isolated Singularity

Given an isolated singularity $z_0$ of $f(z)$, we can determine its type using the following methods:

#### 4.1. By Examining the Limit

*   **Removable Singularity:** If $\lim_{z \to z_0} f(z)$ exists and is finite, then $z_0$ is a removable singularity.
*   **Pole:** If $\lim_{z \to z_0} f(z) = \infty$, then $z_0$ is a pole. To find the order $m$, find the smallest positive integer $m$ such that $\lim_{z \to z_0} (z - z_0)^m f(z)$ is finite and non-zero. This limit will be $b_m$.
*   **Essential Singularity:** If $\lim_{z \to z_0} f(z)$ does not exist (and is not $\infty$), then $z_0$ is an essential singularity.

#### 4.2. By Examining the Laurent Series

This is the most definitive method. Compute the Laurent series of $f(z)$ about $z_0$.
*   **Removable:** Principal part is zero.
*   **Pole:** Principal part has a finite number of non-zero terms. The order is the highest negative power.
*   **Essential:** Principal part has infinitely many non-zero terms.

#### 4.3. Using Properties of Known Functions

If $f(z)$ can be expressed as a ratio of analytic functions, $f(z) = \frac{p(z)}{q(z)}$, where $p(z_0) \ne 0$ and $q(z_0) = 0$:
*   If $z_0$ is a zero of $q(z)$ of order $m$, and $p(z_0) \ne 0$, then $z_0$ is a pole of $f(z)$ of order $m$.
*   If $z_0$ is a zero of $q(z)$ of order $m$ and also a zero of $p(z)$ of order $k$:
    *   If $k \ge m$, then $z_0$ is a removable singularity for $f(z)$ (after cancellation).
    *   If $k < m$, then $z_0$ is a pole of order $m-k$ for $f(z)$.

**Example:** $f(z) = \frac{z^2 - 1}{z - 1}$.
Singularity at $z_0 = 1$.
Here, $p(z) = z^2 - 1$ and $q(z) = z - 1$.
$p(1) = 1^2 - 1 = 0$. $z=1$ is a zero of order 1 for $p(z)$.
$q(1) = 1 - 1 = 0$. $z=1$ is a zero of order 1 for $q(z)$.
Since the orders are equal ($k=1, m=1$), $z=1$ is a removable singularity.
$f(z) = \frac{(z-1)(z+1)}{z-1} = z+1$ for $z \ne 1$. $\lim_{z \to 1} f(z) = 1+1=2$.

**Example:** $f(z) = \frac{1}{(z-2)^3}$.
Singularity at $z_0 = 2$.
$p(z) = 1$ (no zero at $z=2$). $q(z) = (z-2)^3$, which has a zero of order $m=3$ at $z=2$.
Since $p(2) \ne 0$, $z=2$ is a pole of order 3.

---

### 5. Relation to Course Outcomes

*   **CO4: Understand the series expansion of complex function about a singularity and apply residue theorem to compute real integrals.**
    *   This topic is the direct foundation for CO4. Understanding the classification of singularities (removable, pole, essential) is achieved by examining the Laurent series expansion. The coefficients of the principal part of the Laurent series, especially $b_1$, are crucial for the residue theorem. Identifying poles is essential to locate the singularities that contribute to residues.

---

### 6. Practice Questions and Exercises

**Question 1:** Classify the isolated singularity $z_0=0$ for each of the following functions:
a) $f(z) = z \cos(\frac{1}{z})$
b) $f(z) = \frac{e^z - 1}{z^2}$
c) $f(z) = \frac{\sin(z^2)}{z}$
d) $f(z) = z e^{-1/z^2}$

**Solution 1:**
a) $f(z) = z \cos(\frac{1}{z}) = z \left( 1 - \frac{(1/z)^2}{2!} + \frac{(1/z)^4}{4!} - \dots \right) = z \left( 1 - \frac{1}{2z^2} + \frac{1}{24z^4} - \dots \right)$
$f(z) = z - \frac{1}{2z} + \frac{1}{24z^3} - \dots$
The principal part has infinitely many terms ($-\frac{1}{2z} + \frac{1}{24z^3} - \dots$).
Therefore, $z_0=0$ is an **essential singularity**.

b) $f(z) = \frac{e^z - 1}{z^2}$
$e^z - 1 = (1 + z + \frac{z^2}{2!} + \frac{z^3}{3!} + \dots) - 1 = z + \frac{z^2}{2!} + \frac{z^3}{3!} + \dots$
$f(z) = \frac{1}{z^2} \left( z + \frac{z^2}{2!} + \frac{z^3}{3!} + \dots \right) = \frac{1}{z} + \frac{1}{2!} + \frac{z}{3!} + \dots$
The principal part is $\frac{1}{z}$. This has a single term with a negative power.
Therefore, $z_0=0$ is a **pole of order 1 (simple pole)**.

c) $f(z) = \frac{\sin(z^2)}{z}$
$\sin(w) = w - \frac{w^3}{3!} + \frac{w^5}{5!} - \dots$
$\sin(z^2) = z^2 - \frac{(z^2)^3}{3!} + \frac{(z^2)^5}{5!} - \dots = z^2 - \frac{z^6}{3!} + \frac{z^{10}}{5!} - \dots$
$f(z) = \frac{1}{z} \left( z^2 - \frac{z^6}{3!} + \frac{z^{10}}{5!} - \dots \right) = z - \frac{z^5}{3!} + \frac{z^9}{5!} - \dots$
This is a Taylor series. The singularity $z_0=0$ is **removable**.
Check: $\lim_{z \to 0} \frac{\sin(z^2)}{z} = \lim_{z \to 0} z \frac{\sin(z^2)}{z^2} = 0 \cdot 1 = 0$.

d) $f(z) = z e^{-1/z^2}$
$e^w = 1 + w + \frac{w^2}{2!} + \frac{w^3}{3!} + \dots$
Let $w = -1/z^2$.
$f(z) = z \left( 1 + (-\frac{1}{z^2}) + \frac{(-1/z^2)^2}{2!} + \frac{(-1/z^2)^3}{3!} + \dots \right)$
$f(z) = z \left( 1 - \frac{1}{z^2} + \frac{1}{2!z^4} - \frac{1}{3!z^6} + \dots \right)$
$f(z) = z - \frac{1}{z} + \frac{1}{2!z^3} - \frac{1}{3!z^5} + \dots$
The principal part has infinitely many terms ($-\frac{1}{z} + \frac{1}{2!z^3} - \frac{1}{3!z^5} + \dots$).
Therefore, $z_0=0$ is an **essential singularity**.

**Question 2:** Find the order of the pole for $f(z) = \frac{1 - \cos z}{z^3}$ at $z_0 = 0$.

**Solution 2:**
The singularity is at $z_0 = 0$.
We can use the limit method. We need to find the smallest $m$ such that $\lim_{z \to 0} z^m f(z)$ is finite and non-zero.
$\cos z = 1 - \frac{z^2}{2!} + \frac{z^4}{4!} - \dots$
$1 - \cos z = 1 - (1 - \frac{z^2}{2!} + \frac{z^4}{4!} - \dots) = \frac{z^2}{2!} - \frac{z^4}{4!} + \dots$
$f(z) = \frac{1}{z^3} \left( \frac{z^2}{2!} - \frac{z^4}{4!} + \dots \right) = \frac{1}{2!z} - \frac{z}{4!} + \dots$
The Laurent series is $\frac{1}{2z} - \frac{z}{24} + \dots$.
The principal part is $\frac{1}{2z}$. The highest negative power is $-1$, so $b_1 = 1/2$.
Thus, $z_0=0$ is a **pole of order 1**.

Alternatively, using the limit:
Let's test $m=1$: $\lim_{z \to 0} z \cdot \frac{1 - \cos z}{z^3} = \lim_{z \to 0} \frac{1 - \cos z}{z^2}$.
Using L'Hopital's rule twice:
$\lim_{z \to 0} \frac{\sin z}{2z} = \lim_{z \to 0} \frac{\cos z}{2} = \frac{1}{2}$.
Since the limit for $m=1$ is finite and non-zero, $z_0=0$ is a **pole of order 1**.

---

### 7. Important Points to Remember

*   **Singularities:** Points where a function is not analytic.
*   **Isolated Singularity:** A singularity with a punctured neighborhood where the function is analytic.
*   **Laurent Series:** The key tool for analyzing isolated singularities. $f(z) = \sum_{n=-\infty}^{\infty} c_n (z - z_0)^n$.
*   **Principal Part:** The sum of terms with negative powers of $(z-z_0)$. Its nature dictates the singularity type.
*   **Removable Singularity:** Principal part is zero. $\lim_{z \to z_0} f(z)$ exists and is finite.
*   **Pole:** Principal part has a finite number of non-zero terms. $\lim_{z \to z_0} f(z) = \infty$. Order $m$ is the highest negative power.
*   **Essential Singularity:** Principal part has infinitely many non-zero terms. Behavior is very erratic.
*   **Classification Methods:** Limits, Laurent series coefficients, and properties of ratios of analytic functions.

---
