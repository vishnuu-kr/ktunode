---
title: "Complex Function"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 2: Complex Function"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe259"
status: "completed"
scrapedAt: "2026-05-23T17:46:59.734Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 2: Complex Functions

### Topic: Complex Functions

---

### Introduction

This module delves into the fascinating world of complex functions, which are essential tools in various branches of electrical and physical sciences. We will explore their properties, differentiation, integration, and series expansions, laying the groundwork for advanced topics like Fourier transforms and conformal mapping.

**Knowledge Level:** Primarily K3 (Applying) for most of the learning outcomes.

**Key Textbooks & References:**

*   **Kreyszig, E. (2016). *Advanced Engineering Mathematics* (10th ed.). John Wiley & Sons.** (Primary reference for definitions, theorems, and examples).
*   **Zill, D. G., & Shanahan, P. D. (2015). *Complex Analysis* (3rd ed.). Jones & Bartlett.** (Provides a rigorous treatment and further examples).
*   **Ramana, B. V. (2023). *Higher Engineering Mathematics* (39th ed.). McGraw-Hill Education.** (Offers practical applications and a broad range of examples).
*   **Grewal, B. S. (2018). *Higher Engineering Mathematics* (44th ed.). Khanna Publishers.** (Another valuable resource for problem-solving and concepts).
*   **Rao, K. R., Kim, D. N., & Hwang, J. J. (2011). *Fast Fourier Transform - Algorithms and Applications*. Springer.** (While focused on FFT, it highlights the importance of complex analysis in signal processing, which we will touch upon implicitly).

---

### Learning Outcomes Addressed in this Module:

*   Understanding and calculating derivatives of complex functions.
*   Recognizing and applying the Cauchy-Riemann equations to determine analyticity.
*   Evaluating complex integrals using fundamental theorems.
*   Performing series expansions of complex functions around singularities.
*   Applying the Residue Theorem to compute real integrals.
*   Understanding the basic concepts of conformal mapping.

---

### 1. Complex Numbers and Functions

#### 1.1 Complex Numbers Recap

*   **Definition:** A complex number $z$ is of the form $z = x + iy$, where $x$ and $y$ are real numbers, and $i$ is the imaginary unit with $i^2 = -1$.
    *   $x$ is the **real part** (Re($z$)).
    *   $y$ is the **imaginary part** (Im($z$)).
*   **Geometric Representation:** Complex numbers can be represented as points in the complex plane (Argand diagram).
    *   $z = x + iy$ corresponds to the point $(x, y)$.
    *   **Polar Form:** $z = r(\cos \theta + i \sin \theta) = r e^{i\theta}$, where $r = |z| = \sqrt{x^2 + y^2}$ is the **modulus** and $\theta = \arg(z)$ is the **argument**.
*   **Operations:** Addition, subtraction, multiplication, and division of complex numbers follow specific rules.
    *   **Multiplication in Polar Form:** $z_1 z_2 = r_1 r_2 e^{i(\theta_1 + \theta_2)}$.
    *   **Division in Polar Form:** $\frac{z_1}{z_2} = \frac{r_1}{r_2} e^{i(\theta_1 - \theta_2)}$.
*   **Powers and Roots:** De Moivre's Theorem: $(\cos \theta + i \sin \theta)^n = \cos(n\theta) + i \sin(n\theta)$.

*(Refer to Kreyszig, Chapter 1 for a comprehensive review.)*

#### 1.2 Complex Functions

*   **Definition:** A complex function $w = f(z)$ assigns a complex number $w$ to each complex number $z$ in a given domain.
*   **Representation:** $w = u(x, y) + i v(x, y)$, where $u(x, y)$ and $v(x, y)$ are real-valued functions of two real variables $x$ and $y$.
    *   $u(x, y)$ is the **real part** of $f(z)$.
    *   $v(x, y)$ is the **imaginary part** of $f(z)$.
*   **Examples of Complex Functions:**
    *   $f(z) = z^2 = (x+iy)^2 = (x^2 - y^2) + i(2xy)$. Here, $u(x, y) = x^2 - y^2$ and $v(x, y) = 2xy$.
    *   $f(z) = e^z = e^{x+iy} = e^x e^{iy} = e^x(\cos y + i \sin y)$. Here, $u(x, y) = e^x \cos y$ and $v(x, y) = e^x \sin y$.
    *   $f(z) = \frac{1}{z} = \frac{\bar{z}}{|z|^2} = \frac{x-iy}{x^2+y^2} = \frac{x}{x^2+y^2} - i\frac{y}{x^2+y^2}$. Here, $u(x, y) = \frac{x}{x^2+y^2}$ and $v(x, y) = -\frac{y}{x^2+y^2}$ (for $z \neq 0$).

---

### 2. Analyticity and Cauchy-Riemann Equations

*(This section directly addresses CO2: Understand the analyticity of complex functions and apply it in conformal mapping.)*

#### 2.1 Differentiability of Complex Functions

*   **Definition of Derivative:** The derivative of a complex function $f(z)$ at a point $z_0$ is defined as:
    $f'(z_0) = \lim_{\Delta z \to 0} \frac{f(z_0 + \Delta z) - f(z_0)}{\Delta z}$
    provided this limit exists and is independent of the path along which $\Delta z \to 0$.

#### 2.2 Cauchy-Riemann Equations

*   **Condition for Differentiability:** A complex function $f(z) = u(x, y) + iv(x, y)$ is differentiable at a point $z = x + iy$ if and only if the partial derivatives of $u$ and $v$ exist, are continuous, and satisfy the Cauchy-Riemann equations:
    $$ \frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} \quad \text{and} \quad \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x} $$
*   **If $f(z)$ is differentiable at $z$, then its derivative is given by:**
    $$ f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} $$
    or equivalently,
    $$ f'(z) = \frac{\partial v}{\partial y} - i \frac{\partial u}{\partial y} $$

*(Refer to Kreyszig, Section 15.1 for detailed explanation and proofs.)*

#### 2.3 Analytic Functions

*   **Definition:** A complex function $f(z)$ is called **analytic** in an open region $D$ if it is differentiable at every point in $D$.
*   **Synonyms:** Analytic functions are also called **holomorphic** or **regular**.
*   **Entire Functions:** An analytic function that is analytic in the entire complex plane is called an **entire function** (e.g., $e^z$, $z^2$, polynomials).
*   **Significance:** Analytic functions possess many desirable properties, including infinite differentiability and the ability to be represented by Taylor series.

#### 2.4 Harmonic Functions

*   **Definition:** A real-valued function $u(x, y)$ of two real variables is called **harmonic** if its second partial derivatives are continuous and satisfy Laplace's equation:
    $$ \nabla^2 u = \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0 $$
*   **Harmonic Conjugate:** If $f(z) = u(x, y) + iv(x, y)$ is analytic in a region $D$, then both $u(x, y)$ and $v(x, y)$ are harmonic in $D$. The function $v$ is called the **harmonic conjugate** of $u$.
*   **Finding the Harmonic Conjugate:** Given a harmonic function $u(x, y)$, we can find its harmonic conjugate $v(x, y)$ by using the Cauchy-Riemann equations:
    1.  Calculate $\frac{\partial u}{\partial x}$ and $\frac{\partial u}{\partial y}$.
    2.  From $\frac{\partial v}{\partial y} = \frac{\partial u}{\partial x}$ and $\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y}$, integrate to find $v$.

*(Refer to Kreyszig, Section 15.2 for properties of analytic functions and harmonic functions.)*

**Example 1: Checking for Analyticity**

Determine if the function $f(z) = z^3$ is analytic.

*   $f(z) = (x+iy)^3 = x^3 + 3x^2(iy) + 3x(iy)^2 + (iy)^3 = x^3 + 3ix^2y - 3xy^2 - iy^3$
*   $f(z) = (x^3 - 3xy^2) + i(3x^2y - y^3)$
*   So, $u(x, y) = x^3 - 3xy^2$ and $v(x, y) = 3x^2y - y^3$.

Calculate partial derivatives:
*   $\frac{\partial u}{\partial x} = 3x^2 - 3y^2$
*   $\frac{\partial u}{\partial y} = -6xy$
*   $\frac{\partial v}{\partial x} = 6xy$
*   $\frac{\partial v}{\partial y} = 3x^2 - 3y^2$

Check Cauchy-Riemann equations:
*   $\frac{\partial u}{\partial x} = 3x^2 - 3y^2$ and $\frac{\partial v}{\partial y} = 3x^2 - 3y^2$. So, $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$.
*   $\frac{\partial u}{\partial y} = -6xy$ and $-\frac{\partial v}{\partial x} = -(6xy) = -6xy$. So, $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$.

Since both Cauchy-Riemann equations are satisfied for all $x, y$, and the partial derivatives are continuous everywhere, $f(z) = z^3$ is analytic in the entire complex plane (it's an entire function).

Its derivative is $f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} = (3x^2 - 3y^2) + i(6xy)$.
Alternatively, directly from $f(z) = z^3$, we know $f'(z) = 3z^2 = 3(x+iy)^2 = 3(x^2 - y^2 + 2ixy) = (3x^2 - 3y^2) + i(6xy)$, which matches.

**Example 2: Finding Harmonic Conjugate**

Given $u(x, y) = x^2 - y^2 + 2x$, find its harmonic conjugate $v(x, y)$ and the corresponding analytic function $f(z)$.

1.  Check if $u$ is harmonic:
    *   $\frac{\partial u}{\partial x} = 2x + 2$
    *   $\frac{\partial u}{\partial y} = -2y$
    *   $\frac{\partial^2 u}{\partial x^2} = 2$
    *   $\frac{\partial^2 u}{\partial y^2} = -2$
    *   $\nabla^2 u = 2 + (-2) = 0$. So, $u$ is harmonic.

2.  Find $v(x, y)$ using Cauchy-Riemann equations:
    *   $\frac{\partial v}{\partial y} = \frac{\partial u}{\partial x} = 2x + 2$
    *   Integrating with respect to $y$: $v(x, y) = \int (2x + 2) dy = 2xy + 2y + g(x)$ (where $g(x)$ is an arbitrary function of $x$).

    *   $\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y} = -(-2y) = 2y$
    *   From our expression for $v$: $\frac{\partial v}{\partial x} = \frac{\partial}{\partial x} (2xy + 2y + g(x)) = 2y + g'(x)$.

    *   Equating the two expressions for $\frac{\partial v}{\partial x}$: $2y + g'(x) = 2y$.
    *   This implies $g'(x) = 0$, so $g(x) = C$ (a constant).

    *   Therefore, $v(x, y) = 2xy + 2y + C$.

3.  Construct the analytic function $f(z) = u(x, y) + iv(x, y)$:
    *   $f(z) = (x^2 - y^2 + 2x) + i(2xy + 2y + C)$
    *   We can often simplify this by recognizing patterns.
    *   Let's try to express $f(z)$ in terms of $z$. We know $z = x+iy$.
    *   $z^2 = (x+iy)^2 = x^2 - y^2 + 2ixy$.
    *   $2z = 2(x+iy) = 2x + 2iy$.
    *   So, $f(z) = (x^2 - y^2) + 2x + i(2xy) + i(2y) + iC$
    *   $f(z) = (x^2 - y^2 + 2ixy) + (2x + 2iy) + iC$
    *   $f(z) = z^2 + 2z + iC$.
    *   We can absorb the constant $iC$ into a new arbitrary constant $K$, so $f(z) = z^2 + 2z + K$.

**Practice Questions (Analyticity):**

1.  Determine if the following functions are analytic. If so, find their derivative and if possible, express it in terms of $z$.
    a) $f(z) = |z|^2$
    b) $f(z) = e^{\bar{z}}$
    c) $f(z) = \sin x \cosh y + i \cos x \sinh y$
2.  Given that $u(x, y) = e^x \cos y$ is harmonic, find its harmonic conjugate $v(x, y)$ and the analytic function $f(z) = u + iv$.

---

### 3. Complex Integration

*(This section directly addresses CO3: Compute complex integrals using Cauchy's integral theorem and Cauchy's integral formula.)*

#### 3.1 Contour Integration

*   **Definition:** A **contour** is a curve in the complex plane that consists of a finite number of smooth curves joined end-to-end. A contour is **closed** if its starting and ending points coincide.
*   **Complex Integral:** The integral of a function $f(z)$ along a contour $C$ is defined as:
    $$ \int_C f(z) dz $$
    If $f(z) = u(x, y) + iv(x, y)$ and $dz = dx + i dy$, then
    $$ \int_C f(z) dz = \int_C (u dx - v dy) + i \int_C (v dx + u dy) $$
    These are line integrals of vector fields.
*   **Parametrization:** If the contour $C$ can be parametrized by $z(t) = x(t) + iy(t)$ for $a \le t \le b$, then
    $$ \int_C f(z) dz = \int_a^b f(z(t)) z'(t) dt $$
    where $z'(t) = x'(t) + iy'(t)$.

#### 3.2 Cauchy's Integral Theorem

*   **Statement:** If $f(z)$ is analytic in a simply connected domain $D$, then for every closed contour $C$ in $D$,
    $$ \oint_C f(z) dz = 0 $$
*   **Simply Connected Domain:** A domain where any closed curve can be continuously shrunk to a point within the domain.
*   **Significance:** This theorem is fundamental. It implies that the integral of an analytic function over any closed loop is zero. This has profound implications for complex integration.

*(Refer to Kreyszig, Section 15.3 and Zill & Shanahan, Chapter 4 for detailed proofs and implications.)*

#### 3.3 Cauchy's Integral Formula

*   **Statement:** If $f(z)$ is analytic in a simply connected domain $D$ containing a simple closed contour $C$ and a point $z_0$ inside $C$, then
    $$ f(z_0) = \frac{1}{2\pi i} \oint_C \frac{f(z)}{z - z_0} dz $$
*   **Significance:** This formula allows us to calculate the value of an analytic function at a point inside a closed contour, provided we know the function's values on the contour itself. It also shows that the value of $f(z_0)$ is uniquely determined by the values of $f(z)$ on the boundary.

*   **Generalization (for derivatives):**
    $$ f^{(n)}(z_0) = \frac{n!}{2\pi i} \oint_C \frac{f(z)}{(z - z_0)^{n+1}} dz $$
    This formula allows us to calculate derivatives of analytic functions using contour integrals.

*(Refer to Kreyszig, Section 15.4 and Zill & Shanahan, Chapter 4 for detailed explanation.)*

**Example 3: Using Cauchy's Integral Theorem**

Evaluate $\oint_C \cos z \, dz$, where $C$ is any simple closed contour.

*   The function $f(z) = \cos z$ is analytic in the entire complex plane (it's an entire function).
*   By Cauchy's Integral Theorem, the integral of an analytic function over any simple closed contour is zero.
*   Therefore, $\oint_C \cos z \, dz = 0$.

**Example 4: Using Cauchy's Integral Formula**

Evaluate $\oint_C \frac{e^z}{z - 2} dz$, where $C$ is the circle $|z| = 3$.

*   The function $f(z) = e^z$ is analytic everywhere.
*   The contour $C$ is the circle $|z| = 3$.
*   The point $z_0 = 2$ is inside the circle $C$ because $|2| = 2 < 3$.
*   We can apply Cauchy's Integral Formula:
    $$ \oint_C \frac{f(z)}{z - z_0} dz = 2\pi i f(z_0) $$
*   Here, $f(z) = e^z$ and $z_0 = 2$.
*   So, $\oint_C \frac{e^z}{z - 2} dz = 2\pi i e^2$.

**Example 5: Using Cauchy's Integral Formula for Derivatives**

Evaluate $\oint_C \frac{\sin z}{z^2} dz$, where $C$ is the circle $|z| = 1$.

*   The function $f(z) = \sin z$ is analytic everywhere.
*   The contour $C$ is the circle $|z| = 1$.
*   The point $z_0 = 0$ is inside the circle $C$ because $|0| = 0 < 1$.
*   The integrand has the form $\frac{f(z)}{(z - z_0)^{n+1}}$, where $f(z) = \sin z$, $z_0 = 0$, and $n+1 = 2$, so $n = 1$.
*   We use the formula for the first derivative:
    $$ f'(z_0) = \frac{1!}{2\pi i} \oint_C \frac{f(z)}{(z - z_0)^2} dz $$
    Rearranging, we get:
    $$ \oint_C \frac{f(z)}{(z - z_0)^2} dz = 2\pi i f'(z_0) $$
*   Here, $f(z) = \sin z$, so $f'(z) = \cos z$. And $z_0 = 0$.
*   So, $\oint_C \frac{\sin z}{z^2} dz = 2\pi i f'(0) = 2\pi i \cos(0) = 2\pi i (1) = 2\pi i$.

**Practice Questions (Complex Integration):**

1.  Evaluate $\oint_C z^2 dz$ where $C$ is the line segment from $z=0$ to $z=1+i$.
2.  Evaluate $\oint_C \frac{1}{z} dz$ where $C$ is the circle $|z|=1$ traversed counterclockwise.
3.  Evaluate $\oint_C \frac{z+1}{z^2 + 1} dz$ where $C$ is the circle $|z| = 2$.
4.  Evaluate $\oint_C \frac{e^{iz}}{z - \pi} dz$ where $C$ is the circle $|z - \pi/2| = \pi$.
5.  Evaluate $\oint_C \frac{\cos(\pi z)}{z^3} dz$ where $C$ is the circle $|z| = 1$.

---

### 4. Series Expansion of Complex Functions

*(This section directly addresses CO4: Understand the series expansion of complex function about a singularity and apply residue theorem to compute real integrals.)*

#### 4.1 Taylor Series

*   **Statement:** If $f(z)$ is analytic in a disk $|z - z_0| < R$, then $f(z)$ can be represented by its Taylor series expansion about $z_0$:
    $$ f(z) = \sum_{n=0}^\infty a_n (z - z_0)^n $$
    where the coefficients are given by:
    $$ a_n = \frac{f^{(n)}(z_0)}{n!} = \frac{1}{2\pi i} \oint_C \frac{f(\zeta)}{(\zeta - z_0)^{n+1}} d\zeta $$
    where $C$ is any simple closed contour in the disk, enclosing $z_0$.

*   **Maclaurin Series:** A special case of Taylor series where $z_0 = 0$.
    $$ f(z) = \sum_{n=0}^\infty a_n z^n, \quad a_n = \frac{f^{(n)}(0)}{n!} $$

*(Refer to Kreyszig, Section 15.5 and Zill & Shanahan, Chapter 7.)*

#### 4.2 Laurent Series

*   **Singularities:** A point $z_0$ is a **singularity** of $f(z)$ if $f(z)$ is not analytic at $z_0$.
    *   **Isolated Singularity:** If there exists a punctured disk (disk with $z_0$ removed) around $z_0$ where $f(z)$ is analytic.
    *   **Types of Isolated Singularities:**
        *   **Removable Singularity:** If $\lim_{z \to z_0} f(z)$ exists and is finite.
        *   **Pole:** If $|f(z)| \to \infty$ as $z \to z_0$. The order of the pole is the smallest positive integer $m$ such that $\lim_{z \to z_0} (z - z_0)^m f(z)$ exists and is non-zero.
        *   **Essential Singularity:** If $\lim_{z \to z_0} f(z)$ does not exist (neither finite nor infinite).

*   **Statement:** If $f(z)$ is analytic in an annulus (ring-shaped region) $R_1 < |z - z_0| < R_2$, then $f(z)$ can be represented by its Laurent series expansion about $z_0$:
    $$ f(z) = \sum_{n=-\infty}^\infty a_n (z - z_0)^n = \sum_{n=0}^\infty a_n (z - z_0)^n + \sum_{n=1}^\infty b_n (z - z_0)^{-n} $$
    where $a_n$ and $b_n$ are given by:
    $$ a_n = \frac{1}{2\pi i} \oint_C \frac{f(\zeta)}{(\zeta - z_0)^{n+1}} d\zeta $$
    $$ b_n = \frac{1}{2\pi i} \oint_C \frac{f(\zeta)}{(\zeta - z_0)^{-n+1}} d\zeta $$
    for any simple closed contour $C$ in the annulus enclosing $z_0$.

*   **Principal Part and Analytic Part:**
    *   The series $\sum_{n=1}^\infty b_n (z - z_0)^{-n}$ is called the **principal part**.
    *   The series $\sum_{n=0}^\infty a_n (z - z_0)^n$ is called the **analytic part**.

*   **Classification using Laurent Series:**
    *   **Removable Singularity:** Principal part is zero ($b_n = 0$ for all $n \ge 1$).
    *   **Pole of order $m$:** The principal part has a finite number of terms, with $b_m \neq 0$ and $b_k = 0$ for $k > m$.
    *   **Essential Singularity:** The principal part has infinitely many terms.

*(Refer to Kreyszig, Section 15.6 and Zill & Shanahan, Chapter 7 for detailed explanation.)*

**Example 6: Taylor Series Expansion**

Find the Taylor series expansion of $f(z) = \frac{1}{1-z}$ about $z_0 = 0$.

*   This is a geometric series with first term 1 and common ratio $z$.
*   For $|z| < 1$, $f(z) = \frac{1}{1-z} = 1 + z + z^2 + z^3 + \dots = \sum_{n=0}^\infty z^n$.
*   This is valid for $|z| < 1$.

**Example 7: Laurent Series Expansion**

Find the Laurent series of $f(z) = \frac{1}{z(z-1)}$ for the annulus $1 < |z| < \infty$.

*   Use partial fractions: $\frac{1}{z(z-1)} = \frac{A}{z} + \frac{B}{z-1}$.
    $1 = A(z-1) + Bz \implies A = -1, B = 1$.
    So, $f(z) = \frac{1}{z-1} - \frac{1}{z}$.

*   We need the series for the annulus $1 < |z| < \infty$.
    *   For the term $\frac{1}{z-1}$: Since $|z| > 1$, we have $|\frac{1}{z}| < 1$.
        $\frac{1}{z-1} = \frac{1}{z(1 - \frac{1}{z})} = \frac{1}{z} \sum_{n=0}^\infty \left(\frac{1}{z}\right)^n = \sum_{n=0}^\infty \frac{1}{z^{n+1}} = \frac{1}{z} + \frac{1}{z^2} + \frac{1}{z^3} + \dots$

    *   For the term $-\frac{1}{z}$: This is already in the desired form.

*   Combining them:
    $f(z) = \left(\frac{1}{z} + \frac{1}{z^2} + \frac{1}{z^3} + \dots \right) - \frac{1}{z} = \frac{1}{z^2} + \frac{1}{z^3} + \frac{1}{z^4} + \dots = \sum_{n=2}^\infty \frac{1}{z^n}$.
    This is a Laurent series with only negative powers of $z$ (principal part).

**Example 8: Identifying Singularity and Laurent Series**

Find the Laurent series of $f(z) = e^{1/z}$ about $z_0 = 0$.

*   We know the Taylor series for $e^w = 1 + w + \frac{w^2}{2!} + \frac{w^3}{3!} + \dots$.
*   Substitute $w = \frac{1}{z}$:
    $f(z) = e^{1/z} = 1 + \frac{1}{z} + \frac{(1/z)^2}{2!} + \frac{(1/z)^3}{3!} + \dots = 1 + \frac{1}{z} + \frac{1}{2!z^2} + \frac{1}{3!z^3} + \dots$
*   $f(z) = \sum_{n=0}^\infty \frac{1}{n! z^n}$.
*   This series has infinitely many negative powers of $z$. Therefore, $z_0 = 0$ is an **essential singularity**.

#### 4.3 Residue Theorem

*(This section directly addresses CO4: Understand the series expansion of complex function about a singularity and apply residue theorem to compute real integrals.)*

*   **Definition of Residue:** The **residue** of $f(z)$ at an isolated singularity $z_0$, denoted by $\text{Res}(f, z_0)$ or $\text{Res}_{z=z_0} f(z)$, is the coefficient $b_1$ in the Laurent series expansion of $f(z)$ about $z_0$:
    $$ f(z) = \sum_{n=-\infty}^\infty a_n (z - z_0)^n $$
    Then $\text{Res}(f, z_0) = a_{-1}$.

*   **Calculating Residues:**
    *   **Simple Pole ($z_0$):** If $z_0$ is a simple pole, then $\text{Res}(f, z_0) = \lim_{z \to z_0} (z - z_0) f(z)$.
    *   **Pole of order $m$ ($z_0$):** If $z_0$ is a pole of order $m$, then $\text{Res}(f, z_0) = \frac{1}{(m-1)!} \lim_{z \to z_0} \frac{d^{m-1}}{dz^{m-1}} [(z - z_0)^m f(z)]$.
    *   **Using the relation:** If $f(z) = \frac{P(z)}{Q(z)}$ and $z_0$ is a simple root of $Q(z)$ but not of $P(z)$, then $\text{Res}(f, z_0) = \frac{P(z_0)}{Q'(z_0)}$.

*   **Residue Theorem Statement:** If $f(z)$ is analytic inside and on a simple closed contour $C$, except for a finite number of isolated singularities $z_1, z_2, \dots, z_k$ inside $C$, then
    $$ \oint_C f(z) dz = 2\pi i \sum_{j=1}^k \text{Res}(f, z_j) $$
*   **Significance:** This theorem provides a powerful method for evaluating contour integrals and, more importantly for applications, certain types of real integrals.

*(Refer to Kreyszig, Section 15.7 and Zill & Shanahan, Chapter 7 for detailed explanation.)*

**Example 9: Calculating Residues**

Find the residue of $f(z) = \frac{z+1}{z^2(z-2)}$ at its singularities.

*   Singularities are at $z=0$ (pole of order 2) and $z=2$ (simple pole).

    *   **At $z=2$ (simple pole):**
        $\text{Res}(f, 2) = \lim_{z \to 2} (z-2) f(z) = \lim_{z \to 2} (z-2) \frac{z+1}{z^2(z-2)} = \lim_{z \to 2} \frac{z+1}{z^2} = \frac{2+1}{2^2} = \frac{3}{4}$.

    *   **At $z=0$ (pole of order 2):**
        Using the formula for a pole of order $m=2$:
        $\text{Res}(f, 0) = \frac{1}{(2-1)!} \lim_{z \to 0} \frac{d}{dz} \left[ (z-0)^2 f(z) \right]$
        $\text{Res}(f, 0) = \lim_{z \to 0} \frac{d}{dz} \left[ z^2 \frac{z+1}{z^2(z-2)} \right] = \lim_{z \to 0} \frac{d}{dz} \left[ \frac{z+1}{z-2} \right]$
        Using quotient rule: $\frac{d}{dz} \left[ \frac{z+1}{z-2} \right] = \frac{1(z-2) - (z+1)(1)}{(z-2)^2} = \frac{z-2 - z - 1}{(z-2)^2} = \frac{-3}{(z-2)^2}$.
        $\text{Res}(f, 0) = \lim_{z \to 0} \frac{-3}{(z-2)^2} = \frac{-3}{(0-2)^2} = \frac{-3}{4}$.

**Example 10: Using Residue Theorem to Evaluate a Real Integral**

Evaluate the real integral $I = \int_0^{2\pi} \frac{d\theta}{2 + \cos \theta}$ using complex analysis.

*   **Substitution:** Let $z = e^{i\theta}$. Then $d\theta = \frac{dz}{iz}$. Also, $\cos \theta = \frac{z + z^{-1}}{2} = \frac{z + 1/z}{2} = \frac{z^2+1}{2z}$.
*   The contour $C$ is the unit circle $|z|=1$ traversed once counterclockwise as $\theta$ goes from $0$ to $2\pi$.
*   The integral becomes a complex integral:
    $I = \oint_C \frac{1}{2 + \frac{z^2+1}{2z}} \frac{dz}{iz} = \oint_C \frac{2z}{4z + z^2+1} \frac{dz}{iz} = \oint_C \frac{2}{i(z^2 + 4z + 1)} dz$
    $I = \frac{2}{i} \oint_C \frac{1}{z^2 + 4z + 1} dz$.

*   **Find the poles:** Solve $z^2 + 4z + 1 = 0$.
    Using the quadratic formula: $z = \frac{-4 \pm \sqrt{16 - 4}}{2} = \frac{-4 \pm \sqrt{12}}{2} = \frac{-4 \pm 2\sqrt{3}}{2} = -2 \pm \sqrt{3}$.
    The poles are $z_1 = -2 + \sqrt{3}$ and $z_2 = -2 - \sqrt{3}$.

*   **Identify poles inside the unit circle $|z|=1$:**
    *   $|-2 + \sqrt{3}| = |-2 + 1.732| = |-0.268| = 0.268 < 1$. So $z_1$ is inside $C$.
    *   $|-2 - \sqrt{3}| = |-2 - 1.732| = |-3.732| = 3.732 > 1$. So $z_2$ is outside $C$.

*   **Calculate the residue at the pole inside $C$ ($z_1 = -2 + \sqrt{3}$):**
    Let $f(z) = \frac{1}{z^2 + 4z + 1}$. The pole $z_1$ is simple.
    $f(z) = \frac{1}{(z - (-2+\sqrt{3}))(z - (-2-\sqrt{3}))}$.
    $\text{Res}(f, z_1) = \lim_{z \to z_1} (z - z_1) f(z) = \lim_{z \to z_1} \frac{1}{z - z_2} = \frac{1}{z_1 - z_2}$.
    $z_1 - z_2 = (-2 + \sqrt{3}) - (-2 - \sqrt{3}) = -2 + \sqrt{3} + 2 + \sqrt{3} = 2\sqrt{3}$.
    So, $\text{Res}(f, z_1) = \frac{1}{2\sqrt{3}}$.

*   **Apply the Residue Theorem:**
    $I = \frac{2}{i} \oint_C f(z) dz = \frac{2}{i} [2\pi i \times \text{Res}(f, z_1)]$
    $I = \frac{2}{i} \left( 2\pi i \times \frac{1}{2\sqrt{3}} \right) = 4\pi \times \frac{1}{2\sqrt{3}} = \frac{2\pi}{\sqrt{3}}$.
    Rationalizing the denominator: $I = \frac{2\pi\sqrt{3}}{3}$.

*(Refer to Kreyszig, Section 15.8 for application to real integrals.)*

**Practice Questions (Series and Residues):**

1.  Find the Laurent series expansion of $f(z) = \frac{z - 1}{z^2}$ about $z_0 = 0$. Identify the type of singularity at $z=0$.
2.  Find the residue of $f(z) = \frac{\sin z}{z^3}$ at $z=0$.
3.  Find the residue of $f(z) = \frac{1}{z(z^2+1)}$ at $z=i$.
4.  Evaluate $\int_{-\infty}^{\infty} \frac{x^2}{(x^2+1)(x^2+4)} dx$ using the residue theorem. (Hint: Consider the integral over a semicircular contour in the upper half-plane).
5.  Evaluate $\int_0^{2\pi} \frac{d\theta}{1 + a \cos \theta}$ for $|a| < 1$.

---

### 5. Conformal Mapping

*(This section directly addresses CO2: Understand the analyticity of complex functions and apply it in conformal mapping.)*

#### 5.1 Introduction to Conformal Mapping

*   **Definition:** A mapping $w = f(z)$ is **conformal** at a point $z_0$ if it preserves angles between curves passing through $z_0$, both in magnitude and in orientation.
*   **Condition for Conformality:** A mapping $w = f(z)$ is conformal at a point $z_0$ if and only if $f(z)$ is analytic at $z_0$ and $f'(z_0) \neq 0$.
*   **Local Behavior:** Near a point $z_0$ where $f'(z_0) \neq 0$, the mapping $w = f(z)$ acts like a rotation and a magnification. The angle of rotation is $\arg(f'(z_0))$, and the magnification factor is $|f'(z_0)|$.

#### 5.2 Properties of Conformal Mappings

*   **Angle Preservation:** If $f(z)$ is conformal at $z_0$, and $C_1$ and $C_2$ are two curves passing through $z_0$ with angle $\alpha$ between them, then the mapped curves $f(C_1)$ and $f(C_2)$ passing through $f(z_0)$ will have the same angle $\alpha$ (and same orientation).
*   **Geometric Interpretation:** Conformal mappings preserve the shape of small figures locally. They are essentially "distortionless" in terms of angles.

#### 5.3 Applications of Conformal Mapping

Conformal mappings are powerful tools for solving boundary value problems in various fields, including:

*   **Fluid Dynamics:** Mapping complex flow patterns to simpler geometries.
*   **Electrostatics:** Determining electric potentials and fields in regions with complex boundaries.
*   **Heat Transfer:** Solving steady-state heat conduction problems.

*   **Key Idea:** If a harmonic function (e.g., potential, temperature) satisfies certain boundary conditions in a complicated domain, and we can find a conformal mapping from this domain to a simpler domain (like a rectangle or a disk) where the boundary value problem is easier to solve, we can transfer the solution back to the original domain.

*(Refer to Kreyszig, Chapter 18 for a more in-depth treatment of conformal mapping and its applications.)*

**Example 11: Investigating Conformality**

Determine if the mapping $w = z^2$ is conformal at $z_0 = 1+i$.

*   $f(z) = z^2$ is analytic everywhere.
*   $f'(z) = 2z$.
*   At $z_0 = 1+i$, $f'(1+i) = 2(1+i) = 2 + 2i$.
*   Since $f'(1+i) = 2+2i \neq 0$, the mapping $w = z^2$ is conformal at $z_0 = 1+i$.
*   The angle of rotation is $\arg(2+2i) = \frac{\pi}{4}$ (45 degrees counterclockwise).
*   The magnification factor is $|2+2i| = \sqrt{2^2 + 2^2} = \sqrt{8} = 2\sqrt{2}$.

**Practice Questions (Conformal Mapping):**

1.  For the mapping $w = f(z) = z + \frac{1}{z}$, find the values of $z$ where the mapping is NOT conformal.
2.  If $w = f(z)$ is conformal at $z_0$ and $f'(z_0) = 3e^{i\pi/6}$, what happens to an angle of $\pi/3$ between two curves at $z_0$ after the mapping?
3.  Consider the mapping $w = e^z$. Is it conformal everywhere? If not, where is it not conformal?

---

### Summary of Key Concepts

*   **Analyticity:** Differentiability in an open region, governed by Cauchy-Riemann equations. Analytic functions are the cornerstone of complex analysis.
*   **Cauchy-Riemann Equations:** $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$ and $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$.
*   **Harmonic Functions:** Functions satisfying Laplace's equation, which are the real and imaginary parts of analytic functions.
*   **Cauchy's Integral Theorem:** $\oint_C f(z) dz = 0$ for analytic $f(z)$ and closed contour $C$.
*   **Cauchy's Integral Formula:** $f(z_0) = \frac{1}{2\pi i} \oint_C \frac{f(z)}{z - z_0} dz$.
*   **Laurent Series:** Expansion of a function around an isolated singularity, comprising an analytic part and a principal part.
*   **Residue:** The coefficient of $(z-z_0)^{-1}$ in the Laurent series.
*   **Residue Theorem:** $\oint_C f(z) dz = 2\pi i \sum \text{Res}(f, z_j)$ for singularities $z_j$ inside $C$. Crucial for evaluating real integrals.
*   **Conformal Mapping:** Angle-preserving mappings by analytic functions where the derivative is non-zero.

---

### Practice Questions and Answers (Comprehensive Review)

**Section 1 & 2 (Complex Numbers & Analyticity)**

1.  **Question:** Is $f(z) = \text{Re}(z) = x$ analytic?
    **Answer:** $u(x, y) = x$, $v(x, y) = 0$.
    $\frac{\partial u}{\partial x} = 1$, $\frac{\partial v}{\partial y} = 0$. Since $\frac{\partial u}{\partial x} \neq \frac{\partial v}{\partial y}$, $f(z) = x$ is not analytic.

2.  **Question:** Find the harmonic conjugate of $u(x, y) = x^3 - 3xy^2$.
    **Answer:** $\frac{\partial u}{\partial x} = 3x^2 - 3y^2$, $\frac{\partial u}{\partial y} = -6xy$.
    $\frac{\partial v}{\partial y} = 3x^2 - 3y^2 \implies v(x, y) = 3x^2y - y^3 + g(x)$.
    $\frac{\partial v}{\partial x} = 6xy + g'(x)$.
    We also need $\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y} = -(-6xy) = 6xy$.
    So, $6xy + g'(x) = 6xy \implies g'(x) = 0 \implies g(x) = C$.
    The harmonic conjugate is $v(x, y) = 3x^2y - y^3 + C$.
    The analytic function is $f(z) = (x^3 - 3xy^2) + i(3x^2y - y^3 + C) = z^3 + iC$.

**Section 3 (Complex Integration)**

3.  **Question:** Evaluate $\oint_C \frac{z}{z-2} dz$ where $C$ is the circle $|z|=1$.
    **Answer:** The function $f(z) = z$ is analytic. The point $z_0 = 2$ is outside the circle $|z|=1$. By Cauchy's Integral Theorem, $\oint_C f(z) dz = 0$ for analytic functions. The integrand has a singularity at $z=2$ outside the contour. However, the function we are integrating is $\frac{z}{z-2}$. The singularity is at $z=2$, which is outside $|z|=1$. The function $f(z) = z$ is analytic in the domain enclosed by $|z|=1$. Therefore, the integral is 0.
    Alternatively, consider the integrand $g(z) = \frac{z}{z-2}$. This function has a singularity at $z=2$. The contour is $|z|=1$. Since the singularity is outside the contour, and the function $g(z)$ is analytic within and on the contour, the integral is 0.

4.  **Question:** Evaluate $\oint_C \frac{1}{z^2} dz$ where $C$ is the circle $|z|=1$.
    **Answer:** The function $f(z) = 1$ is analytic. The integrand has a singularity at $z=0$, which is inside the circle $|z|=1$. This is a pole of order 2 at $z_0=0$. We can use Cauchy's Integral Formula for derivatives:
    $f''(z_0) = \frac{2!}{2\pi i} \oint_C \frac{f(z)}{(z - z_0)^3} dz$.
    Our integral is $\oint_C \frac{1}{z^2} dz$. This can be seen as $\oint_C \frac{z}{z^3} dz$ or $\oint_C \frac{1}{z^2} dz$.
    Let's rewrite the formula to match $\oint_C \frac{f(z)}{(z-z_0)^{n+1}} dz$. Here $n+1=2$, so $n=1$.
    $f'(z_0) = \frac{1!}{2\pi i} \oint_C \frac{f(z)}{(z - z_0)^2} dz$.
    In our case, $f(z) = 1$ (constant function). Then $f'(z) = 0$ and $f''(z) = 0$.
    Let's use the residue theorem directly. The singularity is $z=0$, which is a pole of order 2.
    $f(z) = \frac{1}{z^2}$.
    $\text{Res}(f, 0) = \frac{1}{(2-1)!} \lim_{z \to 0} \frac{d}{dz} [z^2 \cdot \frac{1}{z^2}] = \lim_{z \to 0} \frac{d}{dz} [1] = 0$.
    By the Residue Theorem, $\oint_C \frac{1}{z^2} dz = 2\pi i \times \text{Res}(f, 0) = 2\pi i \times 0 = 0$.

**Section 4 (Series and Residues)**

5.  **Question:** Find the residue of $f(z) = \frac{e^z}{z-1}$ at $z=1$.
    **Answer:** $z=1$ is a simple pole.
    $\text{Res}(f, 1) = \lim_{z \to 1} (z-1) \frac{e^z}{z-1} = \lim_{z \to 1} e^z = e^1 = e$.

6.  **Question:** Find the Laurent series of $f(z) = \frac{1}{z(z-1)}$ for $0 < |z| < 1$.
    **Answer:** $f(z) = \frac{1}{z-1} - \frac{1}{z}$.
    For $0 < |z| < 1$, we expand $\frac{1}{z-1}$ as a geometric series:
    $\frac{1}{z-1} = \frac{-1}{1-z} = -(1 + z + z^2 + z^3 + \dots)$.
    So, $f(z) = -(1 + z + z^2 + \dots) - \frac{1}{z} = -\frac{1}{z} - 1 - z - z^2 - \dots$
    This is the Laurent series for $0 < |z| < 1$. The singularity at $z=0$ is a simple pole.

7.  **Question:** Evaluate $\int_{-\infty}^{\infty} \frac{1}{x^2+1} dx$ using complex analysis.
    **Answer:** Consider the integral $\oint_C \frac{1}{z^2+1} dz$ over the contour $C$ formed by the real axis from $-R$ to $R$ and the upper semi-circle $\Gamma_R$ of radius $R$.
    Poles are at $z^2+1 = 0 \implies z = \pm i$.
    The pole inside the upper semi-circle is $z=i$.
    $\frac{1}{z^2+1} = \frac{1}{(z-i)(z+i)}$.
    Residue at $z=i$: $\text{Res}(f, i) = \lim_{z \to i} (z-i) \frac{1}{(z-i)(z+i)} = \lim_{z \to i} \frac{1}{z+i} = \frac{1}{2i}$.
    By Residue Theorem: $\oint_C \frac{1}{z^2+1} dz = 2\pi i \times \frac{1}{2i} = \pi$.
    As $R \to \infty$, the integral over $\Gamma_R$ goes to 0 (by Jordan's Lemma or estimation lemma).
    So, $\int_{-\infty}^{\infty} \frac{1}{x^2+1} dx + \lim_{R \to \infty} \int_{\Gamma_R} \frac{1}{z^2+1} dz = \pi$.
    $\int_{-\infty}^{\infty} \frac{1}{x^2+1} dx + 0 = \pi$.
    Thus, $\int_{-\infty}^{\infty} \frac{1}{x^2+1} dx = \pi$.

**Section 5 (Conformal Mapping)**

8.  **Question:** Where is the mapping $w = z^3$ NOT conformal?
    **Answer:** $f(z) = z^3$, $f'(z) = 3z^2$. The mapping is not conformal where $f'(z) = 0$.
    $3z^2 = 0 \implies z = 0$. So, the mapping is not conformal at $z=0$.

---

### Important Points to Remember

*   **Analyticity is key:** Most theorems and properties in complex analysis rely on the function being analytic. Always check for analyticity first.
*   **Cauchy-Riemann equations:** Master these for determining analyticity and finding harmonic conjugates.
*   **Cauchy's theorems are powerful:** Use Cauchy's Integral Theorem and Formula to evaluate integrals and function values, especially when the function is analytic.
*   **Laurent series for singularities:** Use them to classify singularities and find residues.
*   **Residue Theorem for real integrals:** A direct way to solve many challenging real integrals that are difficult to solve using real methods.
*   **Conformal mapping preserves angles:** This property is crucial for solving boundary value problems in physics and engineering.

---

This comprehensive study guide covers the essential topics of complex functions relevant to Mathematics for Electrical Science and Physical Science – 3, aligning with the provided learning and course outcomes. Remember to practice the examples and exercises thoroughly, consulting the recommended textbooks for deeper understanding and additional problems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=XZo4xyJXC2k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
