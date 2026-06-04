---
title: "Essential Singularities"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 4: Taylor series and Maclaurin series"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462cb7"
status: "completed"
scrapedAt: "2026-05-20T17:50:54.990Z"
---
# Module 4: Taylor Series and Maclaurin Series - Essential Singularities

## 1. Introduction to Singularities

In the study of complex analysis, singularities of a complex function are points where the function fails to be analytic. Understanding the nature of these singularities is crucial for various applications, including series expansions and residue calculus. While Taylor and Maclaurin series provide power series representations of analytic functions around a point, they are not defined at singular points. This module delves into a specific type of singularity: **Essential Singularities**.

**Key Concept:** A point $z_0$ is a singularity of a complex function $f(z)$ if $f(z)$ is not analytic at $z_0$.

**Relationship to Course Outcomes:**
*   **CO4:** Understanding series expansion of complex functions about a singularity is directly related to this topic. Essential singularities represent points where the Laurent series expansion reveals crucial information about the function's behavior.

**References:**
*   **Kreyszig, Chapter 14 (Complex Integration):** While Kreyszig focuses on integration, the concept of singularities is foundational for understanding contour integration and the behavior of functions near such points.
*   **Zill & Shanahan, Chapter 4 (Series and Residues):** This reference is highly relevant as it explicitly discusses different types of singularities and their implications for series expansions.

## 2. Types of Singularities

Before discussing essential singularities, it's important to recall the other types of isolated singularities:

### 2.1 Removable Singularities

A singularity $z_0$ is **removable** if there exists a function $g(z)$ that is analytic in a neighborhood of $z_0$ (including $z_0$) such that $f(z) = g(z)$ for all $z$ in the punctured neighborhood of $z_0$.

**Key Properties:**
*   $\lim_{z \to z_0} f(z)$ exists and is finite.
*   The Laurent series expansion of $f(z)$ around $z_0$ contains no terms with negative powers of $(z - z_0)$.

### 2.2 Poles

A singularity $z_0$ is a **pole** of order $m$ if $f(z)$ can be written as $f(z) = \frac{g(z)}{(z - z_0)^m}$, where $g(z)$ is analytic and non-zero at $z_0$, and $m$ is a positive integer.

**Key Properties:**
*   $\lim_{z \to z_0} |f(z)| = \infty$.
*   The Laurent series expansion of $f(z)$ around $z_0$ has a finite number of terms with negative powers of $(z - z_0)$, the highest power being $m$.

### 2.3 Essential Singularities

A singularity $z_0$ is an **essential singularity** if it is neither a removable singularity nor a pole.

**Key Properties:**
*   The behavior of $f(z)$ near an essential singularity is extremely wild.
*   The Laurent series expansion of $f(z)$ around $z_0$ has an **infinite number of terms** with negative powers of $(z - z_0)$.

**Theorem (Casorati-Weierstrass):** If $z_0$ is an essential singularity of $f(z)$, then for any $\epsilon > 0$, the set $\{f(z) : 0 < |z - z_0| < \epsilon\}$ is dense in the complex plane $\mathbb{C}$. This means that in any neighborhood of $z_0$, the function $f(z)$ takes on values arbitrarily close to any complex number.

**Theorem (Picard's Great Theorem):** If $z_0$ is an essential singularity of $f(z)$, then for any $\epsilon > 0$, the set $\{f(z) : 0 < |z - z_0| < \epsilon\}$ takes on every complex value infinitely often, with at most one exception.

**References:**
*   **Zill & Shanahan, Chapter 4:** Provides rigorous definitions and theorems regarding these singularity types.
*   **Kreyszig, Chapter 14:** Discusses the implications of singularities for contour integration, which is influenced by the nature of the singularity.

## 3. Identifying Essential Singularities

The primary way to identify an essential singularity is through the **Laurent series expansion**. If the principal part (the terms with negative powers of $(z - z_0)$) of the Laurent series has infinitely many non-zero terms, then $z_0$ is an essential singularity.

**Laurent Series Expansion:** For a function $f(z)$ analytic in the annulus $r < |z - z_0| < R$, the Laurent series is given by:
$f(z) = \sum_{n=-\infty}^{\infty} c_n (z - z_0)^n = \sum_{n=0}^{\infty} a_n (z - z_0)^n + \sum_{n=1}^{\infty} b_n (z - z_0)^{-n}$

The first part, $\sum_{n=0}^{\infty} a_n (z - z_0)^n$, is the analytic part (or Taylor series part).
The second part, $\sum_{n=1}^{\infty} b_n (z - z_0)^{-n}$, is the principal part.

**Key Insight for Essential Singularities:** If the principal part $\sum_{n=1}^{\infty} b_n (z - z_0)^{-n}$ contains infinitely many non-zero coefficients $b_n$, then $z_0$ is an essential singularity.

**Practical Methods for Identification:**

1.  **Examine the Function's Form:** Some functions are known to have essential singularities.
2.  **Try to Eliminate the Singularity:** If you can't cancel out a factor of $(z - z_0)$ in the denominator or show that the limit is finite or infinite in a consistent way, it might be essential.
3.  **Consider Transformations:** Sometimes, a substitution can transform a potential essential singularity into a pole or removable singularity, helping in its identification.

## 4. Examples of Functions with Essential Singularities

The most common example of a function with an essential singularity is the exponential function $e^{1/z}$ at $z=0$.

### Example 1: $f(z) = e^{1/z}$ at $z_0 = 0$

Let's find the Laurent series expansion of $f(z) = e^{1/z}$ around $z_0 = 0$. We know the Maclaurin series for $e^w$ is:
$e^w = \sum_{n=0}^{\infty} \frac{w^n}{n!} = 1 + w + \frac{w^2}{2!} + \frac{w^3}{3!} + \dots$

Substitute $w = 1/z$:
$e^{1/z} = \sum_{n=0}^{\infty} \frac{(1/z)^n}{n!} = \sum_{n=0}^{\infty} \frac{1}{n! z^n} = 1 + \frac{1}{z} + \frac{1}{2! z^2} + \frac{1}{3! z^3} + \dots$

This series is valid for all $z \neq 0$. The principal part of this Laurent series is:
$\frac{1}{z} + \frac{1}{2! z^2} + \frac{1}{3! z^3} + \dots = \sum_{n=1}^{\infty} \frac{1}{n! z^n}$

Since this series has infinitely many non-zero terms, $z_0 = 0$ is an **essential singularity** of $e^{1/z}$.

**Verification using Theorems:**
*   **Casorati-Weierstrass:** For any $\epsilon > 0$, $e^{1/z}$ takes on values arbitrarily close to any complex number in the punctured disk $0 < |z| < \epsilon$.
*   **Picard's Great Theorem:** $e^{1/z}$ takes on every complex value infinitely often, with at most one exception, in any punctured neighborhood of $z=0$. (The exception is 0, which is not attained).

### Example 2: $f(z) = \sin(1/z)$ at $z_0 = 0$

The Maclaurin series for $\sin(w)$ is:
$\sin(w) = w - \frac{w^3}{3!} + \frac{w^5}{5!} - \dots = \sum_{n=0}^{\infty} \frac{(-1)^n w^{2n+1}}{(2n+1)!}$

Substitute $w = 1/z$:
$\sin(1/z) = \frac{1}{z} - \frac{1}{3! z^3} + \frac{1}{5! z^5} - \dots = \sum_{n=0}^{\infty} \frac{(-1)^n}{(2n+1)! z^{2n+1}}$

This series is valid for all $z \neq 0$. The principal part consists of all the terms, and since there are infinitely many non-zero terms, $z_0 = 0$ is an **essential singularity** of $\sin(1/z)$.

### Example 3: $f(z) = e^{g(z)}$ where $g(z)$ has an essential singularity

If $g(z)$ has an essential singularity at $z_0$, then $e^{g(z)}$ will also have an essential singularity at $z_0$. For instance, consider $f(z) = e^{e^{1/z}}$ at $z_0 = 0$.

### Example 4: Functions constructed by specific transformations

Consider $f(z) = \cos(1/z)$ at $z_0 = 0$.
$\cos(w) = 1 - \frac{w^2}{2!} + \frac{w^4}{4!} - \dots$
$\cos(1/z) = 1 - \frac{1}{2! z^2} + \frac{1}{4! z^4} - \dots = \sum_{n=0}^{\infty} \frac{(-1)^n}{(2n)! z^{2n}}$
This also has an essential singularity at $z=0$.

**Important Point to Remember:** Functions of the form $e^{h(z)}$ or $\sin(h(z))$, $\cos(h(z))$, etc., where $h(z)$ has a singularity at $z_0$, often lead to essential singularities for the outer function if the inner function $h(z)$ itself behaves in a way that leads to an infinite series of negative powers.

**References:**
*   **Zill & Shanahan, Chapter 4:** Provides detailed examples and discussions on identifying singularities.
*   **Ramana, Chapter 36 (Complex Analysis):** Often includes sections on singularities and their classification with illustrative examples.

## 5. Implications of Essential Singularities in Series Expansions

Essential singularities are significant because they mark points where standard Taylor series fail to exist. The behavior of the function around these points is captured by the infinite principal part of the Laurent series.

*   **No Taylor Series:** A function cannot have a Taylor series expansion around an essential singularity because a Taylor series is a power series with only non-negative powers of $(z - z_0)$, implying the function is analytic at $z_0$.
*   **Laurent Series is Key:** The Laurent series expansion around an essential singularity is the most powerful tool to understand the function's local behavior. The coefficients of the principal part (the $b_n$ terms) are given by the formula:
    $b_n = \frac{1}{2\pi i} \oint_C \frac{f(\zeta)}{(\zeta - z_0)^{n+1}} d\zeta$
    where $C$ is a simple closed contour around $z_0$ within the annulus of convergence.
*   **Residue at Essential Singularity:** The coefficient $b_1$ is the residue of $f(z)$ at $z_0$, denoted as $\text{Res}(f, z_0)$. For essential singularities, calculating this residue often involves finding the coefficient of $1/(z-z_0)$ in the Laurent series, which might require skillful series manipulation as direct integration can be complex.

**Alignment with Course Outcomes:**
*   **CO4:** This directly relates to understanding series expansion about a singularity. The nature of the singularity (essential, pole, removable) dictates the form and presence of the principal part of the Laurent series.

## 6. Practice Questions and Exercises

**Question 1:**
Determine the type of singularity for each of the following functions at $z_0 = 0$:
a) $f(z) = \frac{\sin(z)}{z}$
b) $f(z) = \frac{e^z - 1}{z}$
c) $f(z) = \frac{1}{z^2}$
d) $f(z) = e^{-1/z^2}$

**Solution 1:**
a) $f(z) = \frac{1}{z} (z - \frac{z^3}{3!} + \dots) = 1 - \frac{z^2}{3!} + \dots$. The limit as $z \to 0$ is 1. This is a **removable singularity**.
b) $f(z) = \frac{1}{z} ((1 + z + \frac{z^2}{2!} + \dots) - 1) = \frac{1}{z} (z + \frac{z^2}{2!} + \dots) = 1 + \frac{z}{2!} + \dots$. The limit as $z \to 0$ is 1. This is a **removable singularity**.
c) $f(z) = \frac{1}{z^2}$. As $z \to 0$, $|f(z)| \to \infty$. The Laurent series is already $1/z^2$, with a pole of order 2. This is a **pole of order 2**.
d) $f(z) = e^{-1/z^2}$. Substitute $w = -1/z^2$ into $e^w = 1 + w + \frac{w^2}{2!} + \dots$.
$e^{-1/z^2} = 1 + (-\frac{1}{z^2}) + \frac{(-1/z^2)^2}{2!} + \frac{(-1/z^2)^3}{3!} + \dots$
$e^{-1/z^2} = 1 - \frac{1}{z^2} + \frac{1}{2! z^4} - \frac{1}{3! z^6} + \dots = \sum_{n=0}^{\infty} \frac{(-1)^{n+1}}{n! z^{2n}}$ (for $n \ge 1$, term is $\frac{(-1)^n (-1/z^2)^n}{n!} = \frac{(-1)^{2n}}{n! z^{2n}} = \frac{1}{n! z^{2n}}$; let's re-evaluate)
Let $w = -1/z^2$. The series for $e^w$ is $\sum_{k=0}^\infty \frac{w^k}{k!}$.
$e^{-1/z^2} = \sum_{k=0}^\infty \frac{(-1/z^2)^k}{k!} = \sum_{k=0}^\infty \frac{(-1)^k}{k! (z^2)^k} = \sum_{k=0}^\infty \frac{(-1)^k}{k! z^{2k}}$
$e^{-1/z^2} = \frac{(-1)^0}{0! z^0} + \frac{(-1)^1}{1! z^2} + \frac{(-1)^2}{2! z^4} + \frac{(-1)^3}{3! z^6} + \dots$
$e^{-1/z^2} = 1 - \frac{1}{z^2} + \frac{1}{2! z^4} - \frac{1}{3! z^6} + \dots$
The principal part has infinitely many non-zero terms. This is an **essential singularity**.

**Question 2:**
Consider the function $f(z) = z^3 \cos(1/z)$. Determine the nature of the singularity at $z_0 = 0$.

**Solution 2:**
We know the series for $\cos(w)$ is $1 - \frac{w^2}{2!} + \frac{w^4}{4!} - \dots$.
Substitute $w = 1/z$:
$\cos(1/z) = 1 - \frac{1}{2! z^2} + \frac{1}{4! z^4} - \dots$
Now multiply by $z^3$:
$f(z) = z^3 \left(1 - \frac{1}{2! z^2} + \frac{1}{4! z^4} - \dots \right)$
$f(z) = z^3 - \frac{z^3}{2! z^2} + \frac{z^3}{4! z^4} - \dots$
$f(z) = z^3 - \frac{z}{2!} + \frac{1}{4! z} - \frac{1}{3! z^3} + \dots$

The Laurent series expansion around $z_0 = 0$ is:
$f(z) = z^3 - \frac{1}{2}z - \frac{1}{24z} + \frac{1}{6z^3} - \dots$

The principal part of this expansion is $-\frac{1}{24z} + \frac{1}{6z^3} - \dots$, which contains infinitely many terms with negative powers of $z$. Therefore, $z_0 = 0$ is an **essential singularity**.

**Question 3:**
Find the residue of $f(z) = e^{1/z}$ at $z_0 = 0$.

**Solution 3:**
From Example 1, the Laurent series expansion of $e^{1/z}$ around $z_0 = 0$ is:
$e^{1/z} = 1 + \frac{1}{z} + \frac{1}{2! z^2} + \frac{1}{3! z^3} + \dots$
The residue is the coefficient of the $1/z$ term, which is $b_1$.
In this series, the coefficient of $1/z$ is $1$.
Therefore, $\text{Res}(e^{1/z}, 0) = 1$.

**Important Point to Remember:** The residue at an essential singularity is often the coefficient of the $(z-z_0)^{-1}$ term in its Laurent series.

## 7. Summary and Key Takeaways

*   **Singularities:** Points where a function is not analytic.
*   **Types of Isolated Singularities:** Removable, Pole, Essential.
*   **Essential Singularity:** Neither removable nor a pole. Characterized by an **infinite number of terms with negative powers** in its Laurent series expansion.
*   **Theorems:** Casorati-Weierstrass and Picard's Great Theorem describe the extreme behavior of functions near essential singularities.
*   **Identification:** Primarily through examining the Laurent series expansion.
*   **Common Examples:** $e^{1/z}$, $\sin(1/z)$, $\cos(1/z)$ at $z=0$.
*   **Implications:** Essential singularities prevent Taylor series expansions. The Laurent series is critical for understanding function behavior. The residue at an essential singularity is the coefficient of the $(z-z_0)^{-1}$ term.

This topic is fundamental for understanding the broader landscape of complex functions and their behavior, especially when dealing with contour integration and the residue theorem, as per **CO4**. Understanding essential singularities is crucial for correctly applying these powerful tools in electrical and physical sciences.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
