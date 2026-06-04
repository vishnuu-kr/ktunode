---
title: "Complex Integration"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 3: Complex Integration"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba81069c"
status: "completed"
scrapedAt: "2026-05-20T18:41:26.004Z"
---
# Mathematics for Electrical Science and Physical Science – 3

## Module 3: Complex Integration

### Topic: Complex Integration

This module delves into the fundamental concepts of complex integration, a powerful tool used extensively in electrical engineering (e.g., circuit analysis, signal processing) and physical sciences (e.g., quantum mechanics, fluid dynamics).

---

### Learning Outcomes:

By the end of this topic, you should be able to:

1.  **Define and understand the concept of a contour integral of a complex function.**
2.  **Understand and apply Cauchy's Integral Theorem and its consequences.**
3.  **Understand and apply Cauchy's Integral Formula and its consequences.**
4.  **Define and calculate the residue of a complex function at an isolated singularity.**
5.  **Apply the Residue Theorem to evaluate complex integrals.**

---

### 1. Contour Integrals of Complex Functions

#### 1.1 Definition of a Contour

A **contour** is a piecewise smooth curve in the complex plane. This means it's made up of a finite number of smooth arcs, where each arc has a continuously turning tangent.

*   **Smooth Arc:** A curve $\gamma$ is smooth if it can be represented by a parametric equation $z(t) = x(t) + iy(t)$, where $x(t)$ and $y(t)$ are continuously differentiable, and $z'(t) \neq 0$ for all $t$ in the parameter interval.
*   **Piecewise Smooth:** A contour is a collection of smooth arcs joined end-to-end.

#### 1.2 Definition of a Contour Integral

Let $f(z)$ be a complex-valued function defined on a contour $\gamma$. The **contour integral** of $f(z)$ along $\gamma$ is defined as:

$$ \int_\gamma f(z) \, dz $$

This integral can be calculated using the parameterization of the contour. If $\gamma$ is parameterized by $z(t) = x(t) + iy(t)$ for $a \le t \le b$, then:

$$ \int_\gamma f(z) \, dz = \int_a^b f(z(t)) z'(t) \, dt $$

Where $z'(t) = x'(t) + iy'(t)$.

**In terms of real and imaginary parts:**

If $f(z) = u(x,y) + iv(x,y)$ and $dz = dx + i dy$, then:

$$ \int_\gamma f(z) \, dz = \int_\gamma (u+iv)(dx+idy) = \int_\gamma (u \, dx - v \, dy) + i \int_\gamma (v \, dx + u \, dy) $$

These are line integrals in the real plane, which can be evaluated using Green's Theorem if the contour is closed and the conditions are met.

#### 1.3 Properties of Contour Integrals

*   **Additivity:** If $\gamma$ is composed of two contours $\gamma_1$ and $\gamma_2$ such that the end of $\gamma_1$ is the start of $\gamma_2$, then $\int_\gamma f(z) \, dz = \int_{\gamma_1} f(z) \, dz + \int_{\gamma_2} f(z) \, dz$.
*   **Reversal of Path:** $\int_{-\gamma} f(z) \, dz = -\int_\gamma f(z) \, dz$, where $-\gamma$ is the contour $\gamma$ traversed in the opposite direction.
*   **Linearity:** $\int_\gamma (af(z) + bg(z)) \, dz = a \int_\gamma f(z) \, dz + b \int_\gamma g(z) \, dz$ for complex constants $a$ and $b$.

#### 1.4 Example: Evaluating a Contour Integral

**Problem:** Evaluate $\int_\gamma z^2 \, dz$ where $\gamma$ is the straight line segment from $z_0 = 0$ to $z_1 = 1+i$.

**Solution:**

1.  **Parameterize the contour:** The line segment can be parameterized as $z(t) = t(1+i)$, for $0 \le t \le 1$.
2.  **Calculate $z'(t)$:** $z'(t) = 1+i$.
3.  **Substitute into the integral:** $f(z) = z^2$, so $f(z(t)) = (t(1+i))^2 = t^2(1+i)^2 = t^2(1 + 2i + i^2) = t^2(1 + 2i - 1) = 2it^2$.
4.  **Evaluate the definite integral:**
    $$ \int_\gamma z^2 \, dz = \int_0^1 f(z(t)) z'(t) \, dt = \int_0^1 (2it^2)(1+i) \, dt $$
    $$ = 2i(1+i) \int_0^1 t^2 \, dt = 2i(1+i) \left[ \frac{t^3}{3} \right]_0^1 $$
    $$ = 2i(1+i) \left( \frac{1}{3} - 0 \right) = \frac{2i(1+i)}{3} = \frac{2i + 2i^2}{3} = \frac{2i - 2}{3} = -\frac{2}{3} + \frac{2}{3}i $$

**Result:** $\int_\gamma z^2 \, dz = -\frac{2}{3} + \frac{2}{3}i$

---

### 2. Cauchy's Integral Theorem and its Consequences

#### 2.1 Cauchy's Integral Theorem (or Goursat's Theorem)

**Statement:** If $f(z)$ is **analytic** (holomorphic) in a simply connected domain $D$, then for every simple closed contour $\gamma$ in $D$,
$$ \oint_\gamma f(z) \, dz = 0 $$

*   **Analytic Function:** A function $f(z)$ is analytic in a domain if it is differentiable at every point in that domain. This implies that the Cauchy-Riemann equations are satisfied, and the function is infinitely differentiable.
*   **Simply Connected Domain:** A domain in the complex plane is simply connected if every simple closed curve in the domain encloses only points that are also in the domain. Essentially, it has no "holes".

**Consequence 1: Path Independence**

If $f(z)$ is analytic in a domain $D$, then the contour integral $\int_\gamma f(z) \, dz$ is independent of the path $\gamma$ connecting two points $z_0$ and $z_1$ within $D$. This means if $\gamma_1$ and $\gamma_2$ are two contours in $D$ with the same starting point $z_0$ and ending point $z_1$, then:
$$ \int_{\gamma_1} f(z) \, dz = \int_{\gamma_2} f(z) \, dz $$

This implies the existence of an **antiderivative**. If $f(z)$ is analytic in a simply connected domain $D$, then there exists a function $F(z)$ such that $F'(z) = f(z)$ for all $z \in D$. In this case:
$$ \int_\gamma f(z) \, dz = F(z_1) - F(z_0) $$
where $z_0$ is the start point and $z_1$ is the end point of $\gamma$.

#### 2.2 Example: Using Path Independence

**Problem:** Evaluate $\int_\gamma \cos(z) \, dz$ where $\gamma$ is a contour from $z=0$ to $z=\pi i$.

**Solution:**
Since $\cos(z)$ is analytic everywhere, we can use the antiderivative. An antiderivative of $\cos(z)$ is $\sin(z)$ because $\frac{d}{dz}(\sin(z)) = \cos(z)$.
Therefore,
$$ \int_\gamma \cos(z) \, dz = \sin(\pi i) - \sin(0) $$
Recall that $\sin(iz) = i \sinh(z)$. So, $\sin(\pi i) = i \sinh(\pi)$.
$$ \sin(\pi i) = i \left( \frac{e^\pi - e^{-\pi}}{2} \right) $$
And $\sin(0) = 0$.
$$ \int_\gamma \cos(z) \, dz = i \sinh(\pi) - 0 = i \sinh(\pi) $$

---

### 3. Cauchy's Integral Formula and its Consequences

#### 3.1 Cauchy's Integral Formula

**Statement:** Let $f(z)$ be analytic in a simply connected domain $D$. Let $\gamma$ be a simple closed contour in $D$, and let $z_0$ be any point **inside** $\gamma$. Then,
$$ f(z_0) = \frac{1}{2\pi i} \oint_\gamma \frac{f(z)}{z-z_0} \, dz $$

This formula allows us to calculate the value of an analytic function at any point inside a closed contour, provided we know the function's values on the contour itself.

**Rearranging:**
$$ \oint_\gamma \frac{f(z)}{z-z_0} \, dz = 2\pi i f(z_0) $$

#### 3.2 Consequences of Cauchy's Integral Formula: Derivatives

Cauchy's Integral Formula can be generalized to find the derivatives of an analytic function. If $f(z)$ is analytic in a domain $D$ and $\gamma$ is a simple closed contour in $D$ with $z_0$ inside $\gamma$, then the $n$-th derivative of $f$ at $z_0$ is given by:

$$ f^{(n)}(z_0) = \frac{n!}{2\pi i} \oint_\gamma \frac{f(z)}{(z-z_0)^{n+1}} \, dz $$

**Rearranging:**
$$ \oint_\gamma \frac{f(z)}{(z-z_0)^{n+1}} \, dz = \frac{2\pi i}{n!} f^{(n)}(z_0) $$

These formulas are crucial because they imply that if a function is analytic, its derivatives exist and are also analytic. This is a much stronger condition than for real-valued functions.

#### 3.3 Examples: Using Cauchy's Integral Formula

**Example 1: Evaluate $\oint_\gamma \frac{e^z}{z-2} \, dz$ where $\gamma$ is the circle $|z|=1$.**

**Solution:**
*   The function $f(z) = e^z$ is analytic everywhere.
*   The contour $\gamma$ is the circle $|z|=1$.
*   The point $z_0 = 2$.
*   The point $z_0=2$ is **outside** the contour $\gamma$ (since $|2| > 1$).
*   Since $f(z)/(z-z_0)$ has no singularities inside $\gamma$, and $f(z)=e^z$ is analytic, by Cauchy's Integral Theorem, the integral is 0.

**Corrected Problem Statement (for illustrative purposes): Evaluate $\oint_\gamma \frac{e^z}{z-2} \, dz$ where $\gamma$ is the circle $|z|=3$.**

**Solution:**
*   The function $f(z) = e^z$ is analytic everywhere.
*   The contour $\gamma$ is the circle $|z|=3$.
*   The point $z_0 = 2$.
*   The point $z_0=2$ is **inside** the contour $\gamma$ (since $|2| < 3$).
*   We can use Cauchy's Integral Formula: $\oint_\gamma \frac{f(z)}{z-z_0} \, dz = 2\pi i f(z_0)$.
*   Here, $f(z) = e^z$ and $z_0 = 2$.
*   So, the integral is $2\pi i f(2) = 2\pi i e^2$.

**Result:** $2\pi i e^2$

**Example 2: Evaluate $\oint_\gamma \frac{\cos(\pi z)}{z^2-1} \, dz$ where $\gamma$ is the circle $|z|=2$.**

**Solution:**
*   The function $f(z) = \cos(\pi z)$ is analytic everywhere.
*   The contour $\gamma$ is the circle $|z|=2$.
*   The denominator is $z^2-1 = (z-1)(z+1)$. The singularities are at $z=1$ and $z=-1$.
*   Both singularities $z_0=1$ and $z_0=-1$ are **inside** the contour $\gamma$ (since $|1|<2$ and $|-1|<2$).
*   We need to rewrite the integrand as $\frac{f(z)}{(z-z_0)^{n+1}}$.
*   We can use partial fractions or rewrite the integrand as:
    $$ \frac{\cos(\pi z)}{(z-1)(z+1)} = \frac{1}{2} \left( \frac{\cos(\pi z)}{z-1} - \frac{\cos(\pi z)}{z+1} \right) $$
*   Now we have two integrals to evaluate:
    $$ I_1 = \oint_\gamma \frac{\cos(\pi z)}{z-1} \, dz \quad \text{and} \quad I_2 = \oint_\gamma \frac{\cos(\pi z)}{z+1} \, dz $$
*   For $I_1$, $z_0=1$, $f(z)=\cos(\pi z)$. $I_1 = 2\pi i f(1) = 2\pi i \cos(\pi) = 2\pi i (-1) = -2\pi i$.
*   For $I_2$, $z_0=-1$, $f(z)=\cos(\pi z)$. $I_2 = 2\pi i f(-1) = 2\pi i \cos(-\pi) = 2\pi i (-1) = -2\pi i$.
*   The total integral is $\frac{1}{2} (I_1 - I_2) = \frac{1}{2} (-2\pi i - (-2\pi i)) = \frac{1}{2}(0) = 0$.

**Wait, let's re-check the decomposition:**
The formula for the derivative is $\oint_\gamma \frac{f(z)}{(z-z_0)^{n+1}} \, dz = \frac{2\pi i}{n!} f^{(n)}(z_0)$.
The formula for the function itself is $\oint_\gamma \frac{f(z)}{z-z_0} \, dz = 2\pi i f(z_0)$.

Let's rewrite the integral as:
$$ \oint_\gamma \frac{\cos(\pi z)}{(z-1)(z+1)} \, dz = \oint_\gamma \left( \frac{A}{z-1} + \frac{B}{z+1} \right) \cos(\pi z) \, dz $$
We can group terms differently to fit the formula directly.
Consider the term $\frac{\cos(\pi z)}{z-1}$. Here $f(z) = \cos(\pi z)$ and $z_0=1$. So the integral is $2\pi i \cos(\pi) = -2\pi i$.
Consider the term $\frac{\cos(\pi z)}{z+1}$. Here $f(z) = \cos(\pi z)$ and $z_0=-1$. So the integral is $2\pi i \cos(-\pi) = -2\pi i$.

Let's use a different approach for clarity:
We want to evaluate $\oint_\gamma \frac{f(z)}{z-z_0} \, dz$.
For the singularity at $z=1$: Let's write the integrand as $\frac{\frac{\cos(\pi z)}{z+1}}{z-1}$.
Here, $g(z) = \frac{\cos(\pi z)}{z+1}$. This function is analytic inside $|z|=2$ because the only singularity is at $z=-1$, which is on the boundary if we consider the function definition for a smaller contour, but here it's inside the circle. Wait, $z=-1$ is a singularity of $g(z)$! This decomposition is tricky.

Let's use the derivative formula.
We need to evaluate $\oint_\gamma \frac{f(z)}{(z-z_0)^{n+1}} \, dz$.

Let's split the integrand into two parts where each part fits the CIF form.
$$ \oint_\gamma \frac{\cos(\pi z)}{(z-1)(z+1)} \, dz $$
Consider the singularity at $z_0=1$. We write the integrand as $\frac{\frac{\cos(\pi z)}{z+1}}{z-1}$.
The function $g(z) = \frac{\cos(\pi z)}{z+1}$ is analytic inside $|z|=2$ (except at $z=-1$, which we are not focusing on for this term). The singularity of $g(z)$ is at $z=-1$, which is inside our contour. This means the original form is problematic.

**Let's rethink the partial fraction approach:**
$$ \frac{1}{(z-1)(z+1)} = \frac{1}{2} \left( \frac{1}{z-1} - \frac{1}{z+1} \right) $$
So,
$$ \oint_\gamma \frac{\cos(\pi z)}{(z-1)(z+1)} \, dz = \frac{1}{2} \oint_\gamma \left( \frac{\cos(\pi z)}{z-1} - \frac{\cos(\pi z)}{z+1} \right) \, dz $$
$$ = \frac{1}{2} \left( \oint_\gamma \frac{\cos(\pi z)}{z-1} \, dz - \oint_\gamma \frac{\cos(\pi z)}{z+1} \, dz \right) $$
For the first integral, $f(z) = \cos(\pi z)$ and $z_0=1$. The value is $2\pi i \cos(\pi) = 2\pi i (-1) = -2\pi i$.
For the second integral, $f(z) = \cos(\pi z)$ and $z_0=-1$. The value is $2\pi i \cos(-\pi) = 2\pi i (-1) = -2\pi i$.
So the total integral is $\frac{1}{2}(-2\pi i - (-2\pi i)) = \frac{1}{2}(0) = 0$.

**There must be a mistake in my reasoning or the problem setup.**
Let's try to use the derivative formula.
If we had $\oint_\gamma \frac{f(z)}{(z-z_0)^2} \, dz = 2\pi i f'(z_0)$.

Let's consider a simpler version: $\oint_\gamma \frac{1}{z^2-1} \, dz$ with $|z|=2$.
$$ \frac{1}{2} \left( \oint_\gamma \frac{1}{z-1} \, dz - \oint_\gamma \frac{1}{z+1} \, dz \right) $$
$$ \frac{1}{2} (2\pi i(1) - 2\pi i(1)) = 0 $$
This seems correct.

**Let's re-evaluate Example 2 with the correct understanding of what $f(z)$ is in the CIF.**
The CIF states $\oint_\gamma \frac{g(z)}{z-z_0} \, dz = 2\pi i g(z_0)$ where $g(z)$ is analytic inside $\gamma$.

For $\oint_\gamma \frac{\cos(\pi z)}{z-1} \, dz$, here $g(z) = \cos(\pi z)$ is analytic inside $|z|=2$, and $z_0=1$ is inside. So the integral is $2\pi i \cos(\pi) = -2\pi i$.
For $\oint_\gamma \frac{\cos(\pi z)}{z+1} \, dz$, here $g(z) = \cos(\pi z)$ is analytic inside $|z|=2$, and $z_0=-1$ is inside. So the integral is $2\pi i \cos(-\pi) = -2\pi i$.

The result of 0 seems correct based on this.

**Let's try another Example to solidify understanding.**
**Example 3: Evaluate $\oint_\gamma \frac{z^2}{z-i} \, dz$ where $\gamma$ is the circle $|z|=2$.**

**Solution:**
*   $f(z) = z^2$ is analytic everywhere.
*   $\gamma$ is $|z|=2$.
*   $z_0 = i$.
*   $|i|=1 < 2$, so $z_0$ is inside $\gamma$.
*   Using CIF: $\oint_\gamma \frac{f(z)}{z-z_0} \, dz = 2\pi i f(z_0)$.
*   Here $f(z) = z^2$ and $z_0 = i$.
*   Integral = $2\pi i (i^2) = 2\pi i (-1) = -2\pi i$.

**Example 4: Evaluate $\oint_\gamma \frac{e^z}{(z-1)^2} \, dz$ where $\gamma$ is the circle $|z|=2$.**

**Solution:**
*   $f(z) = e^z$ is analytic everywhere.
*   $\gamma$ is $|z|=2$.
*   $z_0 = 1$.
*   $|1|=1 < 2$, so $z_0$ is inside $\gamma$.
*   We need to use the derivative formula: $\oint_\gamma \frac{f(z)}{(z-z_0)^{n+1}} \, dz = \frac{2\pi i}{n!} f^{(n)}(z_0)$.
*   Here $n+1 = 2$, so $n=1$.
*   The integral is $\frac{2\pi i}{1!} f'(1)$.
*   $f(z) = e^z$, so $f'(z) = e^z$.
*   $f'(1) = e^1 = e$.
*   Integral = $2\pi i e$.

---

### 4. Residues of a Complex Function

#### 4.1 Singularities

A point $z_0$ is a **singularity** of a function $f(z)$ if $f(z)$ is not analytic at $z_0$.

*   **Isolated Singularity:** If there exists a punctured neighborhood of $z_0$ where $f(z)$ is analytic, then $z_0$ is an isolated singularity.
    *   **Removable Singularity:** If $\lim_{z \to z_0} f(z)$ exists and is finite, then $z_0$ is a removable singularity. In this case, we can redefine $f(z_0)$ to make the function analytic at $z_0$.
    *   **Pole:** If $\lim_{z \to z_0} |f(z)| = \infty$, then $z_0$ is a pole. A pole of order $m$ occurs if $(z-z_0)^m f(z)$ has a removable singularity at $z_0$ but $(z-z_0)^{m-1} f(z)$ does not.
    *   **Essential Singularity:** If the limit does not exist and $z_0$ is not a pole, it's an essential singularity.

#### 4.2 Laurent Series

Near an isolated singularity $z_0$, a function $f(z)$ can be represented by a **Laurent series**:

$$ f(z) = \sum_{n=-\infty}^{\infty} a_n (z-z_0)^n = \dots + \frac{a_{-2}}{(z-z_0)^2} + \frac{a_{-1}}{z-z_0} + a_0 + a_1(z-z_0) + a_2(z-z_0)^2 + \dots $$

The part with negative powers of $(z-z_0)$ is called the **principal part**.

*   If the principal part is finite (only finitely many negative powers), then $z_0$ is a pole. The order of the pole is the smallest $m$ such that $a_{-m} \neq 0$.
*   If the principal part is infinite (infinitely many negative powers), then $z_0$ is an essential singularity.

#### 4.3 Definition of the Residue

The **residue** of $f(z)$ at an isolated singularity $z_0$, denoted by $\text{Res}(f, z_0)$ or $\text{Res}_{z=z_0} f(z)$, is the coefficient $a_{-1}$ in the Laurent series expansion of $f(z)$ around $z_0$.

$$ f(z) = \sum_{n=-\infty}^{\infty} a_n (z-z_0)^n \implies \text{Res}(f, z_0) = a_{-1} $$

The residue $a_{-1}$ can be calculated using the formula:
$$ a_{-1} = \frac{1}{2\pi i} \oint_\gamma \frac{f(z)}{(z-z_0)^1} \, dz $$
where $\gamma$ is a small simple closed contour around $z_0$, oriented counterclockwise.

#### 4.4 Calculating Residues

**1. For a simple pole ($m=1$):**
If $z_0$ is a simple pole, the Laurent series is $f(z) = \frac{a_{-1}}{z-z_0} + a_0 + a_1(z-z_0) + \dots$
Then $(z-z_0)f(z) = a_{-1} + a_0(z-z_0) + a_1(z-z_0)^2 + \dots$
Taking the limit as $z \to z_0$:
$$ \text{Res}(f, z_0) = \lim_{z \to z_0} (z-z_0) f(z) $$
If $f(z)$ can be written as $\frac{p(z)}{q(z)}$ where $p(z_0) \neq 0$, $q(z_0)=0$, and $q'(z_0) \neq 0$, then $z_0$ is a simple pole.
$$ \text{Res}(f, z_0) = \frac{p(z_0)}{q'(z_0)} $$

**2. For a pole of order $m$:**
If $z_0$ is a pole of order $m$, the Laurent series starts with $\frac{a_{-m}}{(z-z_0)^m}$.
Consider $(z-z_0)^m f(z) = a_{-m} + a_{-m+1}(z-z_0) + \dots + a_{-1}(z-z_0)^{m-1} + a_0(z-z_0)^m + \dots$
To get $a_{-1}$, we need to differentiate this $m-1$ times and then evaluate at $z_0$.
$$ \frac{d^{m-1}}{dz^{m-1}} [(z-z_0)^m f(z)] = (m-1)! a_{-1} + m! a_0 (z-z_0) + \dots $$
Taking the limit as $z \to z_0$:
$$ \text{Res}(f, z_0) = \frac{1}{(m-1)!} \lim_{z \to z_0} \frac{d^{m-1}}{dz^{m-1}} [(z-z_0)^m f(z)] $$

#### 4.5 Examples: Calculating Residues

**Example 1: Find the residue of $f(z) = \frac{z^2}{z-2}$ at $z=2$.**

**Solution:**
*   $z_0 = 2$ is a singularity.
*   $f(z) = \frac{z^2}{z-2}$. This is in the form $\frac{p(z)}{q(z)}$.
*   $p(z) = z^2$, $q(z) = z-2$.
*   $p(2) = 4 \neq 0$. $q(2) = 0$. $q'(z) = 1$, so $q'(2) = 1 \neq 0$.
*   This indicates a simple pole at $z=2$.
*   Using the formula $\text{Res}(f, z_0) = \frac{p(z_0)}{q'(z_0)}$:
    $$ \text{Res}(f, 2) = \frac{2^2}{1} = 4 $$
*   Alternatively, using $\lim_{z \to z_0} (z-z_0) f(z)$:
    $$ \text{Res}(f, 2) = \lim_{z \to 2} (z-2) \frac{z^2}{z-2} = \lim_{z \to 2} z^2 = 2^2 = 4 $$

**Example 2: Find the residue of $f(z) = \frac{\sin(z)}{z^2}$ at $z=0$.**

**Solution:**
*   $z_0 = 0$ is a singularity.
*   $f(z) = \frac{\sin(z)}{z^2}$.
*   Let's check the order of the pole.
*   $(z-0)^1 f(z) = z \frac{\sin(z)}{z^2} = \frac{\sin(z)}{z}$. We know $\lim_{z \to 0} \frac{\sin(z)}{z} = 1$. So this is a removable singularity.
*   In fact, the Laurent series of $\frac{\sin(z)}{z^2}$ around $z=0$:
    $$ \sin(z) = z - \frac{z^3}{3!} + \frac{z^5}{5!} - \dots $$
    $$ \frac{\sin(z)}{z^2} = \frac{1}{z^2} \left( z - \frac{z^3}{3!} + \frac{z^5}{5!} - \dots \right) = \frac{1}{z} - \frac{z}{3!} + \frac{z^3}{5!} - \dots $$
*   The coefficient $a_{-1}$ is 1. So the residue is 1.
*   This is not a pole, but we can still define the residue if it has a Laurent expansion.

**Example 3: Find the residue of $f(z) = \frac{1}{(z-1)^3(z+2)}$ at $z=1$.**

**Solution:**
*   $z_0 = 1$ is a singularity.
*   The denominator has $(z-1)^3$, suggesting a pole of order 3.
*   Let's verify: $f(z) = \frac{1}{(z-1)^3(z+2)}$.
*   We need to calculate $\text{Res}(f, 1) = \frac{1}{(3-1)!} \lim_{z \to 1} \frac{d^{3-1}}{dz^{3-1}} [(z-1)^3 f(z)]$.
*   $\text{Res}(f, 1) = \frac{1}{2!} \lim_{z \to 1} \frac{d^2}{dz^2} \left[ (z-1)^3 \frac{1}{(z-1)^3(z+2)} \right]$.
*   $\text{Res}(f, 1) = \frac{1}{2} \lim_{z \to 1} \frac{d^2}{dz^2} \left[ \frac{1}{z+2} \right]$.
*   Let $g(z) = \frac{1}{z+2} = (z+2)^{-1}$.
*   $g'(z) = -1(z+2)^{-2} = -\frac{1}{(z+2)^2}$.
*   $g''(z) = (-1)(-2)(z+2)^{-3} = \frac{2}{(z+2)^3}$.
*   Now evaluate the limit:
    $$ \text{Res}(f, 1) = \frac{1}{2} \lim_{z \to 1} \frac{2}{(z+2)^3} = \frac{1}{2} \frac{2}{(1+2)^3} = \frac{1}{3^3} = \frac{1}{27} $$

---

### 5. The Residue Theorem

#### 5.1 Statement of the Residue Theorem

**Statement:** Let $f(z)$ be analytic in a simply connected domain $D$, except for a finite number of isolated singularities $z_1, z_2, \dots, z_n$ inside $D$. Let $\gamma$ be a simple closed contour in $D$ that encloses all these singularities. Then,
$$ \oint_\gamma f(z) \, dz = 2\pi i \sum_{k=1}^n \text{Res}(f, z_k) $$

This theorem is a generalization of Cauchy's Integral Theorem (when there are no singularities inside $\gamma$, the sum is empty and the integral is 0) and Cauchy's Integral Formula (which can be seen as a special case for a single singularity).

#### 5.2 Applications of the Residue Theorem

The Residue Theorem is extremely powerful for evaluating definite integrals in real analysis, particularly those involving trigonometric functions or rational functions. It is also fundamental in complex analysis itself.

#### 5.3 Examples: Using the Residue Theorem

**Example 1: Evaluate $\oint_\gamma \frac{e^z}{z(z-1)^2} \, dz$ where $\gamma$ is the circle $|z|=2$.**

**Solution:**
1.  **Identify singularities:** The singularities are at $z=0$ and $z=1$.
2.  **Check if singularities are inside $\gamma$:**
    *   $|0|=0 < 2$, so $z=0$ is inside.
    *   $|1|=1 < 2$, so $z=1$ is inside.
3.  **Calculate the residue at each singularity:**
    *   **At $z=0$ (simple pole):**
        $f(z) = \frac{e^z}{z(z-1)^2}$. $p(z) = e^z$, $q(z) = z(z-1)^2$.
        $q'(z) = (z-1)^2 + z \cdot 2(z-1) = (z-1)(z-1+2z) = (z-1)(3z-1)$.
        $\text{Res}(f, 0) = \frac{p(0)}{q'(0)} = \frac{e^0}{(0-1)(3(0)-1)} = \frac{1}{(-1)(-1)} = 1$.
    *   **At $z=1$ (pole of order 2):**
        $\text{Res}(f, 1) = \frac{1}{(2-1)!} \lim_{z \to 1} \frac{d}{dz} [(z-1)^2 f(z)]$.
        $\text{Res}(f, 1) = \lim_{z \to 1} \frac{d}{dz} \left[ (z-1)^2 \frac{e^z}{z(z-1)^2} \right] = \lim_{z \to 1} \frac{d}{dz} \left[ \frac{e^z}{z} \right]$.
        Let $h(z) = \frac{e^z}{z}$. $h'(z) = \frac{ze^z - e^z}{z^2}$.
        $\text{Res}(f, 1) = \lim_{z \to 1} \frac{ze^z - e^z}{z^2} = \frac{1 \cdot e^1 - e^1}{1^2} = \frac{e-e}{1} = 0$.
        (This is a bit surprising, let's double check by Laurent expansion of $e^z/z$ around $z=1$. Let $u = z-1$, so $z = u+1$. $e^z/z = e^{u+1}/(u+1) = e \cdot e^u \cdot (1+u)^{-1} = e (1+u+\frac{u^2}{2!}+\dots)(1-u+u^2-\dots)$. The coefficient of $u^{-1}$ is what we need, which corresponds to $1/z$, so $a_{-1}$ is indeed the coefficient of $(z-1)^{-1}$. The Laurent series of $1/z$ around $z=1$ is $1/(1+(z-1)) = 1 - (z-1) + (z-1)^2 - \dots$. The Laurent series of $e^z$ around $z=1$ is $e^1 \cdot e^{z-1} = e(1+(z-1)+\frac{(z-1)^2}{2!} + \dots)$. So $e^z/z = e(1+(z-1)+\dots) \times (1-(z-1)+(z-1)^2-\dots)$. The coefficient of $(z-1)^{-1}$ is $e \times (\text{coefficient of } (z-1)^{-1} \text{ in } 1/z) = e \times 0 = 0$. Yes, the residue is 0.)

4.  **Apply the Residue Theorem:**
    $$ \oint_\gamma f(z) \, dz = 2\pi i (\text{Res}(f, 0) + \text{Res}(f, 1)) $$
    $$ = 2\pi i (1 + 0) = 2\pi i $$

**Example 2: Evaluate $\oint_\gamma \frac{1}{z^2+1} \, dz$ where $\gamma$ is the circle $|z|=3$.**

**Solution:**
1.  **Identify singularities:** The singularities are where $z^2+1=0$, so $z^2 = -1$, which gives $z = i$ and $z = -i$.
2.  **Check if singularities are inside $\gamma$:**
    *   $|i|=1 < 3$, so $z=i$ is inside.
    *   $|-i|=1 < 3$, so $z=-i$ is inside.
3.  **Calculate the residue at each singularity:**
    *   $f(z) = \frac{1}{z^2+1}$. This is a simple pole at $z=i$ and $z=-i$.
    *   Let $p(z)=1$ and $q(z)=z^2+1$. $q'(z)=2z$.
    *   **At $z=i$:** $\text{Res}(f, i) = \frac{p(i)}{q'(i)} = \frac{1}{2i} = \frac{-i}{2}$.
    *   **At $z=-i$:** $\text{Res}(f, -i) = \frac{p(-i)}{q'(-i)} = \frac{1}{2(-i)} = \frac{1}{-2i} = \frac{i}{2}$.
4.  **Apply the Residue Theorem:**
    $$ \oint_\gamma f(z) \, dz = 2\pi i (\text{Res}(f, i) + \text{Res}(f, -i)) $$
    $$ = 2\pi i \left( \frac{-i}{2} + \frac{i}{2} \right) = 2\pi i (0) = 0 $$

**This is interesting, let's verify this using Cauchy's Integral Formula.**
We can write $\frac{1}{z^2+1} = \frac{1}{(z-i)(z+i)}$.
We can split this into $\frac{1}{2i} \left( \frac{1}{z-i} - \frac{1}{z+i} \right)$.
$$ \oint_\gamma \frac{1}{z^2+1} \, dz = \frac{1}{2i} \left( \oint_\gamma \frac{1}{z-i} \, dz - \oint_\gamma \frac{1}{z+i} \, dz \right) $$
Using CIF for $\oint_\gamma \frac{1}{z-i} \, dz$: $f(z)=1$, $z_0=i$. Integral is $2\pi i (1) = 2\pi i$.
Using CIF for $\oint_\gamma \frac{1}{z+i} \, dz$: $f(z)=1$, $z_0=-i$. Integral is $2\pi i (1) = 2\pi i$.
So the total integral is $\frac{1}{2i} (2\pi i - 2\pi i) = 0$.

---

### Practice Questions

1.  **Evaluate $\int_\gamma z \, dz$ where $\gamma$ is the semicircle $|z|=1$ in the upper half-plane, from $z=1$ to $z=-1$.**
    *   *Hint: Parameterize using $z(t) = e^{it}$, $0 \le t \le \pi$.*

2.  **Evaluate $\oint_\gamma \frac{e^{iz}}{z-\pi} \, dz$ where $\gamma$ is the circle $|z|=2$.**
    *   *Hint: Check if the singularity is inside or outside the contour.*

3.  **Evaluate $\oint_\gamma \frac{\sin(\pi z)}{z^2(z-2)} \, dz$ where $\gamma$ is the circle $|z|=1$.**
    *   *Hint: Identify singularities and their orders within the contour. You might need the derivative formula.*

4.  **Find the residue of $f(z) = \frac{z+1}{z^2(z-3)}$ at $z=0$.**
    *   *Hint: This is a pole of order 2.*

5.  **Find the residue of $f(z) = \frac{\cos(z)}{z^2-z}$ at $z=0$.**
    *   *Hint: Factor the denominator and identify the pole type.*

---

### Answers to Practice Questions

1.  **$\int_\gamma z \, dz$**
    *   Parameterization: $z(t) = e^{it}$, $z'(t) = ie^{it}$.
    *   Integral: $\int_0^\pi e^{it} (ie^{it}) \, dt = i \int_0^\pi e^{2it} \, dt$
    *   $= i \left[ \frac{e^{2it}}{2i} \right]_0^\pi = \frac{1}{2} [e^{2i\pi} - e^0] = \frac{1}{2} [1 - 1] = 0$.
    *   *Alternatively, since $z$ has an antiderivative ($z^2/2$), the integral depends only on the endpoints: $\frac{(-1)^2}{2} - \frac{1^2}{2} = \frac{1}{2} - \frac{1}{2} = 0$.*

2.  **$\oint_\gamma \frac{e^{iz}}{z-\pi} \, dz$ where $\gamma$ is $|z|=2$.**
    *   The function $f(z) = e^{iz}$ is analytic everywhere.
    *   The singularity is at $z_0 = \pi$.
    *   $|z_0| = |\pi| \approx 3.14$. This is **outside** the contour $|z|=2$.
    *   Since the singularity is outside the closed contour, the integrand is analytic within and on the contour. By Cauchy's Integral Theorem, the integral is **0**.

3.  **$\oint_\gamma \frac{\sin(\pi z)}{z^2(z-2)} \, dz$ where $\gamma$ is $|z|=1$.**
    *   Singularities: $z=0$ (order 2) and $z=2$ (simple pole).
    *   Inside $\gamma$ ($|z|=1$): Only $z=0$ is inside.
    *   We need the residue at $z=0$. $f(z) = \frac{\sin(\pi z)}{z^2(z-2)}$.
    *   The residue at $z=0$ (pole of order 2) is:
        $$ \text{Res}(f, 0) = \frac{1}{(2-1)!} \lim_{z \to 0} \frac{d}{dz} \left[ z^2 \frac{\sin(\pi z)}{z^2(z-2)} \right] $$
        $$ = \lim_{z \to 0} \frac{d}{dz} \left[ \frac{\sin(\pi z)}{z-2} \right] $$
        Let $g(z) = \frac{\sin(\pi z)}{z-2}$. $g'(z) = \frac{\pi \cos(\pi z)(z-2) - \sin(\pi z)(1)}{(z-2)^2}$.
        $$ \text{Res}(f, 0) = \frac{\pi \cos(0)(0-2) - \sin(0)(1)}{(0-2)^2} = \frac{\pi(1)(-2) - 0}{(-2)^2} = \frac{-2\pi}{4} = -\frac{\pi}{2} $$
    *   By the Residue Theorem:
        $$ \oint_\gamma f(z) \, dz = 2\pi i \times \text{Res}(f, 0) = 2\pi i \left(-\frac{\pi}{2}\right) = -\pi^2 i $$

4.  **Residue of $f(z) = \frac{z+1}{z^2(z-3)}$ at $z=0$.**
    *   This is a pole of order 2 at $z=0$.
    *   $\text{Res}(f, 0) = \frac{1}{(2-1)!} \lim_{z \to 0} \frac{d}{dz} \left[ z^2 \frac{z+1}{z^2(z-3)} \right]$
    *   $= \lim_{z \to 0} \frac{d}{dz} \left[ \frac{z+1}{z-3} \right]$
    *   Let $g(z) = \frac{z+1}{z-3}$. $g'(z) = \frac{1(z-3) - (z+1)(1)}{(z-3)^2} = \frac{z-3-z-1}{(z-3)^2} = \frac{-4}{(z-3)^2}$.
    *   $\text{Res}(f, 0) = \lim_{z \to 0} \frac{-4}{(z-3)^2} = \frac{-4}{(0-3)^2} = \frac{-4}{9}$.

5.  **Residue of $f(z) = \frac{\cos(z)}{z^2-z}$ at $z=0$.**
    *   Denominator $z^2-z = z(z-1)$.
    *   Singularities are at $z=0$ and $z=1$.
    *   At $z=0$, it's a simple pole.
    *   $\text{Res}(f, 0) = \lim_{z \to 0} z f(z) = \lim_{z \to 0} z \frac{\cos(z)}{z(z-1)}$
    *   $= \lim_{z \to 0} \frac{\cos(z)}{z-1} = \frac{\cos(0)}{0-1} = \frac{1}{-1} = -1$.

---

### Important Points to Remember:

*   **Analyticity is Key:** Many powerful theorems (Cauchy's Integral Theorem, Cauchy's Integral Formula) rely on the function being analytic in a domain.
*   **Contour Orientation:** Integrals along closed contours are typically assumed to be counterclockwise. Reversing the direction negates the integral.
*   **Location of Singularities:** For Cauchy's theorems and the Residue Theorem, knowing whether a singularity is inside or outside the contour is crucial.
*   **Laurent Series:** The coefficient $a_{-1}$ of the $(z-z_0)^{-1}$ term in the Laurent series is the residue.
*   **Residue Calculation:** Master the formulas for calculating residues at simple poles and poles of higher order.
*   **Residue Theorem:** This theorem elegantly relates a contour integral to the sum of residues of the singularities enclosed by the contour.

This concludes the notes for Complex Integration. Practice these concepts thoroughly, as they are foundational for many advanced topics in mathematics, physics, and engineering.
