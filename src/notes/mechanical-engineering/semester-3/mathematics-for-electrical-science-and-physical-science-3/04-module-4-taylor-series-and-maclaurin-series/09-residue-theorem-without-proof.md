---
title: "Residue theorem (without proof)"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 4: Taylor series and Maclaurin series"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462cbb"
status: "completed"
scrapedAt: "2026-05-20T17:50:57.848Z"
---
# Module 4: Taylor Series and Maclaurin Series - Topic: Residue Theorem

**Subject:** MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3
**Module:** Module 4: Taylor Series and Maclaurin Series
**Topic:** Residue Theorem (without proof)

---

## Introduction and Context

This topic delves into the powerful **Residue Theorem**, a fundamental result in complex analysis that allows us to evaluate certain types of integrals, particularly definite integrals involving real variables. While Module 4 focuses on series expansions like Taylor and Maclaurin series, the Residue Theorem builds upon the concepts of singularities and residues, which are intimately related to these series expansions when dealing with complex functions. Understanding residues is crucial for computing complex integrals and, by extension, solving various problems in electrical and physical sciences, as indicated by Course Outcome CO4.

---

## 1. Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   **Understand the concept of residues of a complex function at an isolated singularity.**
*   **State and apply the Residue Theorem to evaluate complex contour integrals.**
*   **Relate the Residue Theorem to the computation of real definite integrals.**
*   **Recognize the importance of residues in the context of series expansions of complex functions.**

---

## 2. Key Concepts and Definitions

### 2.1. Isolated Singularities

An **isolated singularity** of a function $f(z)$ is a point $z_0$ such that $f(z)$ is not analytic at $z_0$, but there exists a neighborhood (an open disk) around $z_0$ where $f(z)$ is analytic everywhere except at $z_0$ itself.

*   **Example:** The function $f(z) = \frac{1}{z(z-1)}$ has isolated singularities at $z=0$ and $z=1$.

### 2.2. Laurent Series Expansion

The **Laurent series** of a function $f(z)$ about an isolated singularity $z_0$ is a representation of $f(z)$ as an infinite series in powers of $(z-z_0)$ and $(z-z_0)^{-1}$:

$f(z) = \sum_{n=-\infty}^{\infty} a_n (z-z_0)^n = \dots + \frac{a_{-2}}{(z-z_0)^2} + \frac{a_{-1}}{z-z_0} + a_0 + a_1(z-z_0) + a_2(z-z_0)^2 + \dots$

The part of the series with negative powers of $(z-z_0)$ is called the **principal part**, and the part with non-negative powers is called the **analytic part**.

*   **Kreyszig, 10th ed., Chapter 13 (Complex Integration), Section 13.3 (Cauchy's Integral Formula for Derivatives). Laurent series are introduced as a tool to understand functions around singularities, which directly leads to the concept of residues.**
*   **Zill & Shanahan, 3rd ed., Chapter 7 (Series and Residues), Section 7.1 (Sequences and Series of Complex Numbers) and Section 7.2 (Taylor and Laurent Series). This chapter lays the groundwork for understanding singularities and their representations.**

### 2.3. Residue of a Function at an Isolated Singularity

The **residue** of a function $f(z)$ at an isolated singularity $z_0$, denoted by $\text{Res}(f, z_0)$ or $\text{Res}_{z=z_0} f(z)$, is the coefficient $a_{-1}$ in the Laurent series expansion of $f(z)$ around $z_0$.

$f(z) = \sum_{n=-\infty}^{\infty} a_n (z-z_0)^n = \dots + \frac{a_{-2}}{(z-z_0)^2} + \frac{a_{-1}}{z-z_0} + a_0 + a_1(z-z_0) + \dots$

The residue $a_{-1}$ is the coefficient of the term $\frac{1}{z-z_0}$.

**Important Note:** The residue is a crucial component of the Laurent series and provides valuable information about the behavior of the function near its singularity.

### 2.4. Types of Isolated Singularities

The nature of the singularity $z_0$ is determined by the principal part of the Laurent series:

1.  **Removable Singularity:** If the principal part contains only finitely many terms (i.e., $a_{-n} = 0$ for all $n > 0$), then $z_0$ is a removable singularity. The residue at a removable singularity is always **zero**.
2.  **Pole:** If the principal part contains a finite number of terms with non-zero coefficients (i.e., $a_{-m} \neq 0$ for some largest integer $m \ge 1$, and $a_{-n} = 0$ for all $n > m$), then $z_0$ is a pole of order $m$. The residue at a pole of order $m$ can be calculated using specific formulas.
3.  **Essential Singularity:** If the principal part contains infinitely many terms with non-zero coefficients, then $z_0$ is an essential singularity.

### 2.5. Calculating Residues

While the definition of residue is the coefficient $a_{-1}$ from the Laurent series, we often use formulas to compute residues without explicitly finding the entire Laurent series.

*   **For a simple pole (pole of order 1) at $z_0$:**
    $\text{Res}(f, z_0) = \lim_{z \to z_0} (z-z_0) f(z)$

*   **For a pole of order $m$ at $z_0$:**
    $\text{Res}(f, z_0) = \frac{1}{(m-1)!} \lim_{z \to z_0} \frac{d^{m-1}}{dz^{m-1}} \left[ (z-z_0)^m f(z) \right]$

*   **If $f(z)$ can be written as $\frac{p(z)}{q(z)}$ where $p(z_0) \neq 0$, $q(z_0)=0$, and $q'(z_0) \neq 0$ (i.e., $z_0$ is a simple zero of $q(z)$):**
    $\text{Res}(f, z_0) = \frac{p(z_0)}{q'(z_0)}$

*   **Kreyszig, 10th ed., Section 13.4 (Residues. The Residue Theorem). This section is dedicated to the calculation and application of residues.**
*   **Ramana, 39th ed., Chapter 24 (Complex Integration), Section 24.7 (Cauchy's Residue Theorem). This section provides detailed methods for computing residues.**
*   **Grewal, 44th ed., Chapter 15 (Complex Integration), Section 15.8 (Residues). Similar to Kreyszig and Ramana, it covers residue calculation techniques.**

**Example:** Find the residue of $f(z) = \frac{e^z}{z^2}$ at $z=0$.
$z_0 = 0$. This is a pole of order 2. Using the formula for a pole of order $m=2$:
$\text{Res}(f, 0) = \frac{1}{(2-1)!} \lim_{z \to 0} \frac{d}{dz} \left[ (z-0)^2 \frac{e^z}{z^2} \right]$
$= \lim_{z \to 0} \frac{d}{dz} [e^z]$
$= \lim_{z \to 0} e^z = e^0 = 1$.

**Example:** Find the residue of $f(z) = \frac{\cos z}{z}$ at $z=0$.
$z_0 = 0$. This is a simple pole since $\cos(0) = 1 \neq 0$ and $z$ has a simple zero at $z=0$.
Using the formula $\frac{p(z)}{q'(z)}$ where $p(z) = \cos z$ and $q(z) = z$:
$p'(z) = -\sin z$.
$\text{Res}(f, 0) = \frac{\cos(0)}{1} = 1$.
Alternatively, using the limit formula for a simple pole:
$\text{Res}(f, 0) = \lim_{z \to 0} z \cdot \frac{\cos z}{z} = \lim_{z \to 0} \cos z = \cos(0) = 1$.

---

## 3. The Residue Theorem (Without Proof)

The **Residue Theorem** is a cornerstone of complex integration. It states that the integral of a complex function $f(z)$ around a simple closed contour $C$ is equal to $2\pi i$ times the sum of the residues of $f(z)$ at the isolated singularities that lie *inside* the contour $C$.

**Statement of the Residue Theorem:**

Let $f(z)$ be a function that is analytic inside and on a simple closed contour $C$, except for a finite number of isolated singularities $z_1, z_2, \dots, z_k$ inside $C$. Then,

$$ \oint_C f(z) dz = 2\pi i \sum_{j=1}^{k} \text{Res}(f, z_j) $$

where $\text{Res}(f, z_j)$ is the residue of $f(z)$ at the singularity $z_j$.

*   **Kreyszig, 10th ed., Section 13.4 (Residues. The Residue Theorem). This is the primary source for the statement and application of the theorem.**
*   **Zill & Shanahan, 3rd ed., Chapter 7 (Series and Residues), Section 7.4 (Residue Theorem). Explicitly presents the theorem and its applications.**
*   **Ramana, 39th ed., Section 24.7 (Cauchy's Residue Theorem). Provides the theorem and demonstrates its use in calculating integrals.**
*   **Grewal, 44th ed., Section 15.8 (Residues). Covers the theorem and its utility.**

**Conditions for applying the Residue Theorem:**

1.  $f(z)$ must be analytic inside and on the contour $C$, except for a finite number of isolated singularities.
2.  All singularities considered must lie *inside* the contour $C$.
3.  $C$ must be a simple closed contour (i.e., it does not intersect itself).

**Example:** Evaluate $\oint_C \frac{1}{z^2+1} dz$ where $C$ is the circle $|z|=2$ traversed counterclockwise.

1.  **Identify singularities:** The singularities of $f(z) = \frac{1}{z^2+1}$ occur when $z^2+1=0$, which means $z^2 = -1$, so $z = i$ and $z = -i$.
2.  **Check if singularities are inside C:** The contour $C$ is the circle $|z|=2$. Both $z=i$ (since $|i|=1 < 2$) and $z=-i$ (since $|-i|=1 < 2$) lie inside the circle.
3.  **Calculate residues:**
    *   At $z=i$: This is a simple pole.
        $\text{Res}(f, i) = \lim_{z \to i} (z-i) \frac{1}{(z-i)(z+i)} = \lim_{z \to i} \frac{1}{z+i} = \frac{1}{i+i} = \frac{1}{2i}$.
    *   At $z=-i$: This is also a simple pole.
        $\text{Res}(f, -i) = \lim_{z \to -i} (z+i) \frac{1}{(z-i)(z+i)} = \lim_{z \to -i} \frac{1}{z-i} = \frac{1}{-i-i} = \frac{1}{-2i}$.
4.  **Apply the Residue Theorem:**
    $\oint_C f(z) dz = 2\pi i (\text{Res}(f, i) + \text{Res}(f, -i))$
    $= 2\pi i \left( \frac{1}{2i} + \frac{1}{-2i} \right)$
    $= 2\pi i \left( \frac{1}{2i} - \frac{1}{2i} \right) = 2\pi i (0) = 0$.

---

## 4. Applications of the Residue Theorem

The Residue Theorem is particularly powerful for evaluating certain types of real definite integrals that are difficult or impossible to solve using elementary calculus techniques. This directly addresses Course Outcome CO4.

### 4.1. Evaluating Real Definite Integrals

Many real definite integrals can be transformed into complex contour integrals. Common types include:

*   Integrals of rational functions over $(-\infty, \infty)$.
*   Integrals of the form $\int_0^{2\pi} R(\cos \theta, \sin \theta) d\theta$.
*   Integrals of the form $\int_{-\infty}^{\infty} f(x) \cos(ax) dx$ or $\int_{-\infty}^{\infty} f(x) \sin(ax) dx$.

**General Strategy for $\int_{-\infty}^{\infty} f(x) dx$:**

1.  Consider the complex function $f(z)$.
2.  Choose a contour $C$ that includes the real axis segment $[-R, R]$ and a semicircle in the upper half-plane (or lower half-plane) of radius $R$. Let the semicircle be $C_R$. The contour $C$ is thus the union of the interval $[-R, R]$ on the real axis and $C_R$.
3.  Identify the isolated singularities of $f(z)$ that lie *inside* the contour $C$.
4.  Apply the Residue Theorem: $\oint_C f(z) dz = \int_{-R}^{R} f(x) dx + \int_{C_R} f(z) dz = 2\pi i \sum \text{Res}$.
5.  Evaluate the integral over $C_R$. For many functions $f(z)$ (e.g., rational functions where the degree of the denominator is at least 2 greater than the degree of the numerator, or functions that decay sufficiently fast), $\lim_{R \to \infty} \int_{C_R} f(z) dz = 0$ (Jordan's Lemma or standard semicircular contour argument).
6.  As $R \to \infty$, $\int_{-R}^{R} f(x) dx \to \int_{-\infty}^{\infty} f(x) dx$.
7.  Thus, $\int_{-\infty}^{\infty} f(x) dx = 2\pi i \sum \text{Res}(f, z_j)$ where $z_j$ are the poles of $f(z)$ in the upper half-plane.

**Example:** Evaluate $\int_{-\infty}^{\infty} \frac{1}{x^2+1} dx$.

1.  Complex function: $f(z) = \frac{1}{z^2+1}$.
2.  Contour: Consider the contour $C$ formed by the real interval $[-R, R]$ and the semicircle $C_R$ in the upper half-plane, with radius $R$.
3.  Singularities inside $C$: Poles are at $z=i$ and $z=-i$. Only $z=i$ lies in the upper half-plane.
4.  Residue at $z=i$: We calculated this earlier as $\frac{1}{2i}$.
5.  Apply Residue Theorem: For $R>1$, the contour $C$ encloses $z=i$.
    $\oint_C \frac{1}{z^2+1} dz = 2\pi i \cdot \text{Res}(f, i) = 2\pi i \left(\frac{1}{2i}\right) = \pi$.
6.  Evaluate integral parts:
    $\oint_C \frac{1}{z^2+1} dz = \int_{-R}^{R} \frac{1}{x^2+1} dx + \int_{C_R} \frac{1}{z^2+1} dz$.
    As $R \to \infty$, $\lim_{R \to \infty} \int_{C_R} \frac{1}{z^2+1} dz = 0$ (since degree of denominator is 2 more than numerator).
    So, $\lim_{R \to \infty} \int_{-R}^{R} \frac{1}{x^2+1} dx = \pi$.
    Therefore, $\int_{-\infty}^{\infty} \frac{1}{x^2+1} dx = \pi$.

**Example:** Evaluate $\int_0^{2\pi} \frac{1}{2+\cos\theta} d\theta$.

1.  Transformation to complex plane: Let $z = e^{i\theta}$. Then $d\theta = \frac{dz}{iz}$. Also, $\cos\theta = \frac{z+z^{-1}}{2} = \frac{z+1/z}{2} = \frac{z^2+1}{2z}$. The contour is the unit circle $|z|=1$.
2.  The integral becomes: $\oint_{|z|=1} \frac{1}{2 + \frac{z^2+1}{2z}} \cdot \frac{dz}{iz}$
    $= \oint_{|z|=1} \frac{1}{\frac{4z+z^2+1}{2z}} \cdot \frac{dz}{iz}$
    $= \oint_{|z|=1} \frac{2z}{z^2+4z+1} \cdot \frac{dz}{iz}$
    $= \frac{2}{i} \oint_{|z|=1} \frac{1}{z^2+4z+1} dz$.
3.  Singularities of $g(z) = \frac{1}{z^2+4z+1}$: The denominator is $z^2+4z+1$. Roots are $z = \frac{-4 \pm \sqrt{16-4}}{2} = \frac{-4 \pm \sqrt{12}}{2} = \frac{-4 \pm 2\sqrt{3}}{2} = -2 \pm \sqrt{3}$.
    So, the singularities are $z_1 = -2+\sqrt{3}$ and $z_2 = -2-\sqrt{3}$.
4.  Check singularities inside $|z|=1$:
    *   $|z_1| = |-2+\sqrt{3}| \approx |-2+1.732| = |-0.268| = 0.268 < 1$. So $z_1$ is inside the unit circle.
    *   $|z_2| = |-2-\sqrt{3}| \approx |-2-1.732| = |-3.732| = 3.732 > 1$. So $z_2$ is outside the unit circle.
5.  Calculate residue at $z_1 = -2+\sqrt{3}$ (simple pole):
    $g(z) = \frac{1}{(z-z_1)(z-z_2)}$.
    $\text{Res}(g, z_1) = \lim_{z \to z_1} (z-z_1) g(z) = \lim_{z \to z_1} \frac{1}{z-z_2} = \frac{1}{(-2+\sqrt{3}) - (-2-\sqrt{3})} = \frac{1}{-2+\sqrt{3}+2+\sqrt{3}} = \frac{1}{2\sqrt{3}}$.
6.  Apply Residue Theorem:
    The integral is $\frac{2}{i} \oint_{|z|=1} g(z) dz = \frac{2}{i} (2\pi i \cdot \text{Res}(g, z_1))$
    $= \frac{2}{i} (2\pi i \cdot \frac{1}{2\sqrt{3}}) = 2 \cdot \pi \cdot \frac{1}{\sqrt{3}} = \frac{2\pi}{\sqrt{3}}$.

---

## 5. Connection to Taylor/Maclaurin Series

While this topic is specifically about the Residue Theorem, it's important to remember its context within Module 4. Taylor and Maclaurin series provide the analytic part of a function's expansion. However, when dealing with singularities, the Laurent series (which includes the principal part) becomes essential. The coefficients of the principal part, particularly $a_{-1}$, are directly related to the nature of the singularity and are what we call the residue. Thus, understanding series expansions helps in comprehending the behavior of functions around their singularities, which is a prerequisite for applying the Residue Theorem.

*   **Taylor Series:** Represents an analytic function as an infinite sum of its derivatives at a point.
*   **Laurent Series:** Represents a function around an isolated singularity, including negative powers of $(z-z_0)$, which characterize the singularity. The coefficient $a_{-1}$ of $(z-z_0)^{-1}$ is the residue.

---

## 6. Important Points to Remember

*   The **residue** of a function $f(z)$ at an isolated singularity $z_0$ is the coefficient $a_{-1}$ of the $\frac{1}{z-z_0}$ term in its Laurent series expansion around $z_0$.
*   The **Residue Theorem** states that $\oint_C f(z) dz = 2\pi i \sum \text{Res}(f, z_j)$, where the sum is over all singularities $z_j$ inside the simple closed contour $C$.
*   **Residues** can be calculated using limits of $(z-z_0)f(z)$ for simple poles, or derivative formulas for higher-order poles.
*   The Residue Theorem is a powerful tool for evaluating certain real definite integrals, especially those that can be transformed into complex contour integrals.
*   When transforming real integrals to complex ones, pay close attention to the choice of contour and the evaluation of limits as the contour parameters go to infinity.

---

## 7. Practice Questions and Exercises

**(Note: Answers are provided below the questions.)**

1.  Find the residue of $f(z) = \frac{e^{iz}}{z^2+a^2}$ at $z=ia$, where $a>0$.
2.  Evaluate the integral $\oint_C \frac{e^z}{z-2} dz$, where $C$ is the circle $|z|=3$ traversed counterclockwise.
3.  Evaluate the integral $\oint_C \frac{\sin z}{z^2} dz$, where $C$ is the circle $|z|=1$ traversed counterclockwise.
4.  Evaluate the integral $\int_{-\infty}^{\infty} \frac{x^2}{x^4+1} dx$.
5.  Evaluate the integral $\int_0^{2\pi} \frac{d\theta}{1+\sin^2\theta}$.

---

## 8. Answers to Practice Questions

1.  **Solution:** The singularities are at $z^2+a^2=0$, so $z = \pm ia$.
    We are interested in $z=ia$, which is a simple pole.
    $\text{Res}(f, ia) = \lim_{z \to ia} (z-ia) \frac{e^{iz}}{(z-ia)(z+ia)} = \lim_{z \to ia} \frac{e^{iz}}{z+ia} = \frac{e^{i(ia)}}{ia+ia} = \frac{e^{-a}}{2ia} = \frac{-i e^{-a}}{2a}$.

2.  **Solution:** The singularity is at $z=2$. This point is inside the circle $|z|=3$.
    $f(z) = \frac{e^z}{z-2}$ has a simple pole at $z=2$.
    $\text{Res}(f, 2) = \lim_{z \to 2} (z-2) \frac{e^z}{z-2} = e^2$.
    By the Residue Theorem: $\oint_C f(z) dz = 2\pi i \cdot \text{Res}(f, 2) = 2\pi i e^2$.

3.  **Solution:** The singularity is at $z=0$. This is a pole of order 2.
    $f(z) = \frac{\sin z}{z^2}$.
    Using the formula for a pole of order $m=2$:
    $\text{Res}(f, 0) = \frac{1}{(2-1)!} \lim_{z \to 0} \frac{d}{dz} \left[ z^2 \cdot \frac{\sin z}{z^2} \right] = \lim_{z \to 0} \frac{d}{dz} (\sin z) = \lim_{z \to 0} \cos z = 1$.
    The contour $|z|=1$ encloses $z=0$.
    By the Residue Theorem: $\oint_C f(z) dz = 2\pi i \cdot \text{Res}(f, 0) = 2\pi i (1) = 2\pi i$.

4.  **Solution:** Consider $f(z) = \frac{z^2}{z^4+1}$. Poles are roots of $z^4+1=0$, which are $z = e^{i\pi/4}, e^{i3\pi/4}, e^{i5\pi/4}, e^{i7\pi/4}$.
    The poles in the upper half-plane are $z_1 = e^{i\pi/4} = \frac{1+i}{\sqrt{2}}$ and $z_2 = e^{i3\pi/4} = \frac{-1+i}{\sqrt{2}}$.
    Let $p(z) = z^2$ and $q(z) = z^4+1$. Then $q'(z) = 4z^3$.
    Residue at $z_1$: $\text{Res}(f, z_1) = \frac{p(z_1)}{q'(z_1)} = \frac{z_1^2}{4z_1^3} = \frac{1}{4z_1} = \frac{1}{4 e^{i\pi/4}} = \frac{1}{4} e^{-i\pi/4} = \frac{1}{4}(\frac{1-i}{\sqrt{2}})$.
    Residue at $z_2$: $\text{Res}(f, z_2) = \frac{p(z_2)}{q'(z_2)} = \frac{z_2^2}{4z_2^3} = \frac{1}{4z_2} = \frac{1}{4 e^{i3\pi/4}} = \frac{1}{4} e^{-i3\pi/4} = \frac{1}{4}(\frac{-1-i}{\sqrt{2}})$.
    Sum of residues: $\frac{1}{4\sqrt{2}}(1-i -1-i) = \frac{1}{4\sqrt{2}}(-2i) = \frac{-i}{2\sqrt{2}}$.
    Integral: $\int_{-\infty}^{\infty} \frac{x^2}{x^4+1} dx = 2\pi i \left( \frac{-i}{2\sqrt{2}} \right) = \frac{-2\pi i^2}{2\sqrt{2}} = \frac{2\pi}{2\sqrt{2}} = \frac{\pi}{\sqrt{2}}$.

5.  **Solution:** Let $z=e^{i\theta}$, $d\theta = \frac{dz}{iz}$, $\sin\theta = \frac{z-z^{-1}}{2i} = \frac{z-1/z}{2i} = \frac{z^2-1}{2iz}$.
    The integral becomes: $\oint_{|z|=1} \frac{1}{1 + (\frac{z^2-1}{2iz})^2} \frac{dz}{iz}$
    $= \oint_{|z|=1} \frac{1}{1 + \frac{(z^2-1)^2}{-4z^2}} \frac{dz}{iz} = \oint_{|z|=1} \frac{1}{\frac{-4z^2+(z^2-1)^2}{-4z^2}} \frac{dz}{iz}$
    $= \oint_{|z|=1} \frac{-4z^2}{-4z^2+z^4-2z^2+1} \frac{dz}{iz} = \oint_{|z|=1} \frac{-4z^2}{z^4-6z^2+1} \frac{dz}{iz}$
    $= \frac{-4}{i} \oint_{|z|=1} \frac{z}{z^4-6z^2+1} dz$.
    Let $w = z^2$. Then $z^4-6z^2+1 = w^2-6w+1$. Roots of $w^2-6w+1=0$ are $w = \frac{6 \pm \sqrt{36-4}}{2} = 3 \pm \sqrt{8} = 3 \pm 2\sqrt{2}$.
    So, $z^4-6z^2+1 = (z^2 - (3+2\sqrt{2}))(z^2 - (3-2\sqrt{2}))$.
    $z^2 = 3+2\sqrt{2} \implies z = \pm \sqrt{3+2\sqrt{2}} = \pm (\sqrt{2}+1)$.
    $z^2 = 3-2\sqrt{2} \implies z = \pm \sqrt{3-2\sqrt{2}} = \pm (\sqrt{2}-1)$.
    The poles of $\frac{z}{z^4-6z^2+1}$ are at $z_1 = \sqrt{2}+1$, $z_2 = -(\sqrt{2}+1)$, $z_3 = \sqrt{2}-1$, $z_4 = -(\sqrt{2}-1)$.
    Inside the unit circle $|z|=1$, the poles are $z_3 = \sqrt{2}-1 \approx 1.414 - 1 = 0.414$ and $z_4 = -(\sqrt{2}-1) \approx -0.414$.
    Let $h(z) = \frac{z}{z^4-6z^2+1}$.
    Residue at $z_3 = \sqrt{2}-1$: $\text{Res}(h, z_3) = \frac{z_3}{4z_3^3 - 12z_3} = \frac{1}{4z_3^2 - 12} = \frac{1}{4(\sqrt{2}-1)^2 - 12} = \frac{1}{4(2 - 2\sqrt{2} + 1) - 12} = \frac{1}{4(3 - 2\sqrt{2}) - 12} = \frac{1}{12 - 8\sqrt{2} - 12} = \frac{1}{-8\sqrt{2}}$.
    Residue at $z_4 = -(\sqrt{2}-1)$: $\text{Res}(h, z_4) = \frac{z_4}{4z_4^3 - 12z_4} = \frac{1}{4z_4^2 - 12} = \frac{1}{4(-(\sqrt{2}-1))^2 - 12} = \frac{1}{4(\sqrt{2}-1)^2 - 12} = \frac{1}{-8\sqrt{2}}$.
    Sum of residues = $\frac{1}{-8\sqrt{2}} + \frac{1}{-8\sqrt{2}} = \frac{-2}{8\sqrt{2}} = \frac{-1}{4\sqrt{2}}$.
    Integral = $\frac{-4}{i} (2\pi i \cdot \frac{-1}{4\sqrt{2}}) = \frac{-4}{i} \frac{-2\pi i}{4\sqrt{2}} = \frac{8\pi i}{4\sqrt{2}i} = \frac{2\pi}{\sqrt{2}} = \pi\sqrt{2}$.

---
This concludes the notes on the Residue Theorem. Remember to practice calculating residues and applying the theorem to various types of integrals.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
