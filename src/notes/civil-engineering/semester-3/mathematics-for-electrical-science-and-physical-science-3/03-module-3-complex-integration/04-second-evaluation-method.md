---
title: "Second evaluation method"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 3: Complex Integration"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba81069f"
status: "completed"
scrapedAt: "2026-05-20T18:41:27.982Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 3: Complex Integration

### Topic: Second Evaluation Method for Complex Integrals

---

### 1. Introduction to the Second Evaluation Method

The Second Evaluation Method for complex integrals is a powerful technique that leverages the **Residue Theorem** to evaluate definite integrals of complex functions. This method is particularly useful for integrals that are difficult or impossible to solve using the direct definition of a complex integral (path integration) or Cauchy's Integral Theorem.

**Key Idea:** The value of a complex integral around a closed contour is directly related to the behavior of the integrand at its **singularities** (points where the function is not analytic) within that contour.

---

### 2. Key Concepts and Definitions

#### 2.1 Singularities of a Complex Function

A point $z_0$ is a **singularity** of a complex function $f(z)$ if $f(z)$ is not analytic at $z_0$.

*   **Isolated Singularity:** A singularity $z_0$ is isolated if there exists a punctured disk $0 < |z - z_0| < R$ for some $R > 0$ in which $f(z)$ is analytic.

*   **Types of Isolated Singularities:**
    *   **Removable Singularity:** If the Laurent series expansion of $f(z)$ around $z_0$ has no terms with negative powers of $(z - z_0)$ (i.e., the principal part is zero), then $z_0$ is a removable singularity. The function can be made analytic at $z_0$ by defining $f(z_0) = \lim_{z \to z_0} f(z)$.
    *   **Pole:** If the Laurent series expansion of $f(z)$ around $z_0$ has a finite number of terms with negative powers of $(z - z_0)$, and the lowest power is $-m$ (where $m$ is a positive integer), then $z_0$ is a **pole of order $m$**.
        *   A pole of order 1 is called a **simple pole**.
    *   **Essential Singularity:** If the Laurent series expansion of $f(z)$ around $z_0$ has an infinite number of terms with negative powers of $(z - z_0)$, then $z_0$ is an essential singularity.

#### 2.2 Laurent Series Expansion

For a function $f(z)$ analytic in an annulus $R_1 < |z - z_0| < R_2$, its Laurent series expansion around $z_0$ is given by:

$f(z) = \sum_{n=-\infty}^{\infty} a_n (z - z_0)^n = \sum_{n=0}^{\infty} a_n (z - z_0)^n + \sum_{n=1}^{\infty} b_n (z - z_0)^{-n}$

where:
*   $\sum_{n=0}^{\infty} a_n (z - z_0)^n$ is the **analytic part**.
*   $\sum_{n=1}^{\infty} b_n (z - z_0)^{-n}$ is the **principal part**.

#### 2.3 Residue of a Function at an Isolated Singularity

The **residue** of $f(z)$ at an isolated singularity $z_0$, denoted by $\text{Res}(f, z_0)$ or $\text{Res}_{z=z_0} f(z)$, is the coefficient of the $(z - z_0)^{-1}$ term in its Laurent series expansion around $z_0$. That is, $\text{Res}(f, z_0) = b_1$.

**Methods to Calculate Residues:**

*   **For a pole of order $m$ at $z_0$:**
    $\text{Res}(f, z_0) = \frac{1}{(m-1)!} \lim_{z \to z_0} \frac{d^{m-1}}{dz^{m-1}} \left[ (z - z_0)^m f(z) \right]$

*   **For a simple pole at $z_0$ (m=1):**
    $\text{Res}(f, z_0) = \lim_{z \to z_0} (z - z_0) f(z)$

*   **If $f(z)$ can be written as $\frac{p(z)}{q(z)}$ where $p(z_0) \neq 0$, $q(z_0) = 0$, and $q'(z_0) \neq 0$ (i.e., $z_0$ is a simple pole of $f(z)$):**
    $\text{Res}(f, z_0) = \frac{p(z_0)}{q'(z_0)}$

*   **For an essential singularity:** There isn't a simple general formula. One might need to find the Laurent series expansion or use specific properties of the function.

#### 2.4 Cauchy's Residue Theorem

If $f(z)$ is analytic inside and on a simple closed contour $C$, except for a finite number of isolated singularities $z_1, z_2, \dots, z_n$ inside $C$, then:

$\oint_C f(z) dz = 2\pi i \sum_{k=1}^n \text{Res}(f, z_k)$

This theorem forms the basis of the second evaluation method.

---

### 3. The Second Evaluation Method in Practice

The second evaluation method involves the following steps:

1.  **Identify the Contour ($C$):** Determine the closed path of integration. Common contours include circles, rectangles, and semi-circles.
2.  **Identify the Integrand ($f(z)$):** Recognize the function being integrated.
3.  **Find Singularities:** Locate all isolated singularities of $f(z)$.
4.  **Check Singularities Inside the Contour:** Determine which of these singularities lie strictly inside the contour $C$.
5.  **Calculate Residues:** For each singularity inside $C$, calculate its residue using the appropriate formula.
6.  **Apply the Residue Theorem:** Sum the residues of the singularities inside $C$ and multiply by $2\pi i$ to find the value of the integral.

---

### 4. Examples

**Example 1: Simple Pole**

**Problem:** Evaluate $\oint_C \frac{1}{z-1} dz$, where $C$ is the circle $|z| = 2$.

**Solution:**
1.  **Contour:** $C$ is the circle $|z| = 2$, centered at the origin with radius 2.
2.  **Integrand:** $f(z) = \frac{1}{z-1}$.
3.  **Singularities:** The singularity is at $z=1$.
4.  **Singularity Inside:** The singularity $z=1$ is inside the circle $|z|=2$ since $|1| < 2$.
5.  **Calculate Residue:** $z=1$ is a simple pole.
    $\text{Res}\left(\frac{1}{z-1}, 1\right) = \lim_{z \to 1} (z-1) \frac{1}{z-1} = \lim_{z \to 1} 1 = 1$.
6.  **Apply Residue Theorem:**
    $\oint_C \frac{1}{z-1} dz = 2\pi i \times \text{Res}\left(\frac{1}{z-1}, 1\right) = 2\pi i \times 1 = 2\pi i$.

**Example 2: Pole of Higher Order**

**Problem:** Evaluate $\oint_C \frac{e^z}{(z-2)^3} dz$, where $C$ is the circle $|z| = 3$.

**Solution:**
1.  **Contour:** $C$ is the circle $|z| = 3$.
2.  **Integrand:** $f(z) = \frac{e^z}{(z-2)^3}$.
3.  **Singularities:** The singularity is at $z=2$.
4.  **Singularity Inside:** $z=2$ is inside the circle $|z|=3$ since $|2| < 3$.
5.  **Calculate Residue:** $z=2$ is a pole of order $m=3$.
    $\text{Res}\left(\frac{e^z}{(z-2)^3}, 2\right) = \frac{1}{(3-1)!} \lim_{z \to 2} \frac{d^{3-1}}{dz^{3-1}} \left[ (z-2)^3 \frac{e^z}{(z-2)^3} \right]$
    $= \frac{1}{2!} \lim_{z \to 2} \frac{d^2}{dz^2} (e^z)$
    $= \frac{1}{2} \lim_{z \to 2} e^z = \frac{1}{2} e^2$.
6.  **Apply Residue Theorem:**
    $\oint_C \frac{e^z}{(z-2)^3} dz = 2\pi i \times \text{Res}\left(\frac{e^z}{(z-2)^3}, 2\right) = 2\pi i \times \frac{e^2}{2} = \pi i e^2$.

**Example 3: Simple Pole using $\frac{p(z)}{q(z)}$ form**

**Problem:** Evaluate $\oint_C \frac{z+1}{z(z-2)} dz$, where $C$ is the circle $|z| = 1$.

**Solution:**
1.  **Contour:** $C$ is the circle $|z| = 1$.
2.  **Integrand:** $f(z) = \frac{z+1}{z(z-2)}$.
3.  **Singularities:** The singularities are at $z=0$ and $z=2$.
4.  **Singularities Inside:**
    *   $z=0$: $|0| < 1$, so it's inside $C$.
    *   $z=2$: $|2| > 1$, so it's outside $C$.
    We only consider $z=0$.
5.  **Calculate Residue:** For $z=0$, $p(z) = z+1$ and $q(z) = z(z-2) = z^2 - 2z$.
    $p(0) = 0+1 = 1$.
    $q'(z) = 2z - 2$.
    $q'(0) = 2(0) - 2 = -2$.
    Since $p(0) \neq 0$, $q(0) = 0$, and $q'(0) \neq 0$, $z=0$ is a simple pole.
    $\text{Res}\left(\frac{z+1}{z(z-2)}, 0\right) = \frac{p(0)}{q'(0)} = \frac{1}{-2} = -\frac{1}{2}$.
6.  **Apply Residue Theorem:**
    $\oint_C \frac{z+1}{z(z-2)} dz = 2\pi i \times \text{Res}\left(\frac{z+1}{z(z(z-2))}, 0\right) = 2\pi i \times \left(-\frac{1}{2}\right) = -\pi i$.

**Example 4: Essential Singularity (Demonstration, direct calculation often needed)**

**Problem:** Evaluate $\oint_C e^{1/z} dz$, where $C$ is the circle $|z|=1$.

**Solution:**
1.  **Contour:** $C$ is the circle $|z|=1$.
2.  **Integrand:** $f(z) = e^{1/z}$.
3.  **Singularities:** The only singularity is at $z=0$.
4.  **Singularity Inside:** $z=0$ is inside $|z|=1$.
5.  **Calculate Residue:** $z=0$ is an essential singularity. We need the Laurent series expansion of $e^{1/z}$ around $z=0$.
    Recall the Maclaurin series for $e^u$: $e^u = 1 + u + \frac{u^2}{2!} + \frac{u^3}{3!} + \dots$
    Substitute $u = 1/z$:
    $e^{1/z} = 1 + \frac{1}{z} + \frac{(1/z)^2}{2!} + \frac{(1/z)^3}{3!} + \dots$
    $e^{1/z} = 1 + \frac{1}{z} + \frac{1}{2!z^2} + \frac{1}{3!z^3} + \dots$
    The coefficient of $1/z$ is $1$. So, $\text{Res}(e^{1/z}, 0) = 1$.
6.  **Apply Residue Theorem:**
    $\oint_C e^{1/z} dz = 2\pi i \times \text{Res}(e^{1/z}, 0) = 2\pi i \times 1 = 2\pi i$.

---

### 5. Practice Questions

**Question 1:** Evaluate $\oint_C \frac{z^2+1}{z(z-i)} dz$, where $C$ is the circle $|z| = \frac{1}{2}$.

**Question 2:** Evaluate $\oint_C \frac{\cos(\pi z)}{z^2-1} dz$, where $C$ is the circle $|z| = 2$.

**Question 3:** Evaluate $\oint_C \frac{e^{2z}}{z^3} dz$, where $C$ is the circle $|z| = 1$.

**Question 4:** Evaluate $\oint_C \frac{1}{z^2+4} dz$, where $C$ is the circle $|z-i| = 2$.

---

### 6. Answers to Practice Questions

**Answer 1:**
*   Singularities: $z=0$ and $z=i$.
*   Contour: $|z| = 1/2$.
*   Singularities inside: $z=0$ (since $|0| < 1/2$). $z=i$ is outside (since $|i|=1 > 1/2$).
*   Residue at $z=0$ (simple pole):
    $\text{Res}\left(\frac{z^2+1}{z(z-i)}, 0\right) = \lim_{z \to 0} z \cdot \frac{z^2+1}{z(z-i)} = \lim_{z \to 0} \frac{z^2+1}{z-i} = \frac{0^2+1}{0-i} = \frac{1}{-i} = i$.
*   Integral value: $2\pi i \times i = 2\pi i^2 = -2\pi$.

**Answer 2:**
*   Singularities: $z^2-1=0 \implies z=1, z=-1$.
*   Contour: $|z|=2$.
*   Singularities inside: $z=1$ (since $|1|<2$) and $z=-1$ (since $|-1|<2$).
*   Residue at $z=1$ (simple pole): $p(z) = \cos(\pi z)$, $q(z) = z^2-1$, $q'(z) = 2z$.
    $\text{Res}\left(\frac{\cos(\pi z)}{z^2-1}, 1\right) = \frac{p(1)}{q'(1)} = \frac{\cos(\pi)}{2(1)} = \frac{-1}{2}$.
*   Residue at $z=-1$ (simple pole):
    $\text{Res}\left(\frac{\cos(\pi z)}{z^2-1}, -1\right) = \frac{p(-1)}{q'(-1)} = \frac{\cos(-\pi)}{2(-1)} = \frac{-1}{-2} = \frac{1}{2}$.
*   Integral value: $2\pi i \times (\text{Res}(f, 1) + \text{Res}(f, -1)) = 2\pi i \times \left(-\frac{1}{2} + \frac{1}{2}\right) = 2\pi i \times 0 = 0$.

**Answer 3:**
*   Singularity: $z=0$.
*   Contour: $|z|=1$.
*   Singularity inside: $z=0$ (since $|0|<1$).
*   Residue at $z=0$ (pole of order 3):
    $f(z) = e^{2z} z^{-3}$. We need the coefficient of $z^{-1}$ in the Taylor series of $e^{2z}$ multiplied by $z^{-3}$.
    Taylor series of $e^{2z}$ around $z=0$: $e^{2z} = 1 + (2z) + \frac{(2z)^2}{2!} + \frac{(2z)^3}{3!} + \frac{(2z)^4}{4!} + \dots$
    $e^{2z} = 1 + 2z + 2z^2 + \frac{4}{3}z^3 + \frac{2}{3}z^4 + \dots$
    Then $f(z) = z^{-3} \left(1 + 2z + 2z^2 + \frac{4}{3}z^3 + \dots\right) = z^{-3} + 2z^{-2} + 2z^{-1} + \frac{4}{3} + \dots$
    The coefficient of $z^{-1}$ is $2$.
    Alternatively, using the formula:
    $\text{Res}\left(\frac{e^{2z}}{z^3}, 0\right) = \frac{1}{(3-1)!} \lim_{z \to 0} \frac{d^2}{dz^2} (z^3 \cdot \frac{e^{2z}}{z^3}) = \frac{1}{2} \lim_{z \to 0} \frac{d^2}{dz^2} (e^{2z})$
    $= \frac{1}{2} \lim_{z \to 0} (4e^{2z}) = \frac{1}{2} \times 4 = 2$.
*   Integral value: $2\pi i \times 2 = 4\pi i$.

**Answer 4:**
*   Singularities: $z^2+4=0 \implies z^2 = -4 \implies z = \pm 2i$.
*   Contour: $|z-i|=2$. This is a circle centered at $i$ with radius $2$.
*   Singularities inside:
    *   For $z=2i$: $|2i - i| = |i| = 1$. Since $1 < 2$, $z=2i$ is inside the contour.
    *   For $z=-2i$: $|-2i - i| = |-3i| = 3$. Since $3 > 2$, $z=-2i$ is outside the contour.
*   Residue at $z=2i$ (simple pole): $p(z) = 1$, $q(z) = z^2+4$, $q'(z) = 2z$.
    $\text{Res}\left(\frac{1}{z^2+4}, 2i\right) = \frac{p(2i)}{q'(2i)} = \frac{1}{2(2i)} = \frac{1}{4i} = \frac{-i}{4}$.
*   Integral value: $2\pi i \times \left(\frac{-i}{4}\right) = 2\pi i \left(\frac{-i}{4}\right) = -\frac{2\pi i^2}{4} = -\frac{2\pi (-1)}{4} = \frac{2\pi}{4} = \frac{\pi}{2}$.

---

### 7. Important Points to Remember

*   The **Residue Theorem** is the cornerstone of this method. It states that the integral around a closed loop is $2\pi i$ times the sum of the residues of the singularities enclosed by the loop.
*   **Correctly identify all singularities** of the integrand.
*   **Crucially, determine which singularities lie *inside* the given contour.** Singularities outside the contour do not contribute to the integral.
*   **Master the different methods for calculating residues**, especially for simple poles, poles of order $m$, and when the function is a ratio of two analytic functions.
*   For essential singularities, you might need to find the **Laurent series expansion** to identify the coefficient of $(z-z_0)^{-1}$.
*   The **choice of contour** is critical. For many real integral evaluations, specific contours like semi-circles are used, and the integral over the straight line segment is related to the real integral, while the integral over the arc often vanishes. This advanced application is a common extension of the second evaluation method.
*   Always double-check your calculations for derivatives and limits.

---
