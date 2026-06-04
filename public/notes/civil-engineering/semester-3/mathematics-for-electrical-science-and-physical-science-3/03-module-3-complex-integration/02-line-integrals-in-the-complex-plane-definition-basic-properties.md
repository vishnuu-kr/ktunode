---
title: "Line integrals in the complex plane (Definition & Basic properties)"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 3: Complex Integration"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba81069d"
status: "completed"
scrapedAt: "2026-05-20T18:41:26.645Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3
## Module 3: Complex Integration
### Topic: Line Integrals in the Complex Plane (Definition & Basic Properties)

---

### Learning Outcomes Covered:

*   **Understand the definition of a complex line integral.**
*   **Explore the basic properties of complex line integrals.**
*   **Relate complex line integrals to real-valued line integrals.**
*   **Apply basic properties to simplify complex line integrals.**

---

### 1. Introduction to Line Integrals in the Complex Plane

In real calculus, line integrals are used to integrate a function along a curve. In the complex plane, line integrals extend this concept to functions of a complex variable and integrate them along curves in the complex plane. These integrals are fundamental to understanding concepts like Cauchy's Integral Theorem and Cauchy's Integral Formula, which are crucial in complex analysis and have wide applications in electrical and physical sciences.

---

### 2. Definition of a Complex Line Integral

A complex line integral of a complex-valued function $f(z)$ along a curve $C$ in the complex plane is defined as follows:

Let $C$ be a piecewise smooth curve in the complex plane, parameterized by $z(t) = x(t) + iy(t)$, where $a \le t \le b$. The complex line integral of $f(z)$ along $C$ is given by:

$$ \int_C f(z) \, dz $$

If $f(z) = u(x, y) + iv(x, y)$, and $dz = dx + i dy$, then the complex line integral can be expressed in terms of real line integrals:

$$ \int_C f(z) \, dz = \int_C (u + iv)(dx + i dy) $$
$$ = \int_C (u \, dx - v \, dy) + i \int_C (v \, dx + u \, dy) $$

**Key Idea:** The complex line integral is essentially a combination of two real line integrals.

**Parameterization:** To evaluate a complex line integral, we typically parameterize the curve $C$ using a real variable $t$. If $z(t) = x(t) + iy(t)$ for $a \le t \le b$, then $dz = z'(t) \, dt = (x'(t) + iy'(t)) \, dt$. The integral becomes:

$$ \int_C f(z) \, dz = \int_a^b f(z(t)) \, z'(t) \, dt $$

**Example:** Evaluate $\int_C z \, dz$ where $C$ is the line segment from $0$ to $1+i$.

*   **Parameterize C:** The line segment from $0$ to $1+i$ can be parameterized as $z(t) = t(1+i)$, where $0 \le t \le 1$.
*   **Find z'(t):** $z'(t) = 1+i$.
*   **Substitute into the integral:**
    $$ \int_C z \, dz = \int_0^1 [t(1+i)] (1+i) \, dt $$
    $$ = (1+i)^2 \int_0^1 t \, dt $$
    $$ = (1 + 2i + i^2) \left[ \frac{t^2}{2} \right]_0^1 $$
    $$ = (1 + 2i - 1) \left( \frac{1^2}{2} - \frac{0^2}{2} \right) $$
    $$ = 2i \left( \frac{1}{2} \right) = i $$

---

### 3. Basic Properties of Complex Line Integrals

Complex line integrals share several important properties with real line integrals, which are crucial for their manipulation and evaluation.

#### 3.1 Linearity

For complex numbers $\alpha$ and $\beta$, and functions $f(z)$ and $g(z)$:

$$ \int_C [\alpha f(z) + \beta g(z)] \, dz = \alpha \int_C f(z) \, dz + \beta \int_C g(z) \, dz $$

**Explanation:** This property means we can take out constants and distribute the integral over sums of functions.

**Example:** If $\int_C f(z) \, dz = A$ and $\int_C g(z) \, dz = B$, then $\int_C (2f(z) - 3g(z)) \, dz = 2A - 3B$.

#### 3.2 Additivity over Curves

If $C$ is a curve composed of two consecutive curves $C_1$ and $C_2$ (i.e., the endpoint of $C_1$ is the starting point of $C_2$), then:

$$ \int_C f(z) \, dz = \int_{C_1} f(z) \, dz + \int_{C_2} f(z) \, dz $$

**Explanation:** The integral along a path is the sum of the integrals along its sub-paths.

**Example:** If $C$ is the path from $0$ to $2$ passing through $1$, then $\int_C f(z) \, dz = \int_{0 \to 1} f(z) \, dz + \int_{1 \to 2} f(z) \, dz$.

#### 3.3 Orientation Reversal

If $-C$ denotes the curve $C$ traversed in the opposite direction, then:

$$ \int_{-C} f(z) \, dz = - \int_C f(z) \, dz $$

**Explanation:** Reversing the direction of integration negates the value of the integral.

**Example:** If $C$ is the path from $a$ to $b$, then $-C$ is the path from $b$ to $a$. $\int_{b \to a} f(z) \, dz = - \int_{a \to b} f(z) \, dz$.

#### 3.4 Estimation Lemma (Bounds on Integrals)

If $|f(z)| \le M$ for all $z$ on the curve $C$, and $L$ is the length of the curve $C$, then:

$$ \left| \int_C f(z) \, dz \right| \le M L $$

**Explanation:** This property provides an upper bound for the magnitude of a complex line integral. It's particularly useful when direct evaluation is difficult or when we only need to estimate the magnitude of an integral.

**How to find L:** If $C$ is parameterized by $z(t)$ for $a \le t \le b$, the length $L$ is given by:
$$ L = \int_a^b |z'(t)| \, dt $$

**Example:** Estimate the value of $\int_C \frac{e^z}{z^2+1} \, dz$ where $C$ is the circle $|z| = 2$ traversed counterclockwise.

*   **Curve C:** $|z| = 2$. This is a circle of radius 2 centered at the origin.
*   **Length of C (L):** The circumference of the circle is $L = 2 \pi r = 2 \pi (2) = 4\pi$.
*   **Find the maximum of |f(z)| on C:** For $|z|=2$, $|z^2+1| \ge ||z|^2 - 1| = |4 - 1| = 3$.
    Therefore, $|f(z)| = \left| \frac{e^z}{z^2+1} \right| = \frac{|e^z|}{|z^2+1|}$.
    On $|z|=2$, $|e^z| = |e^{x+iy}| = |e^x e^{iy}| = e^x$. The maximum value of $x$ on $|z|=2$ is $x=2$ (at $z=2$).
    So, on $C$, $|e^z| = |e^{x+iy}| = e^x \le e^2$.
    Thus, $|f(z)| \le \frac{e^2}{3}$. So, $M = \frac{e^2}{3}$.
*   **Apply the Estimation Lemma:**
    $$ \left| \int_C \frac{e^z}{z^2+1} \, dz \right| \le M L = \frac{e^2}{3} (4\pi) = \frac{4\pi e^2}{3} $$

#### 3.5 Integrals of Analytic Functions (Antiderivative Property)

If $f(z)$ is analytic in a simply connected domain $D$, and $C$ is a curve in $D$ connecting points $a$ and $b$, and $F(z)$ is an antiderivative of $f(z)$ (i.e., $F'(z) = f(z)$), then:

$$ \int_C f(z) \, dz = F(b) - F(a) $$

**Explanation:** This is a fundamental result analogous to the Fundamental Theorem of Calculus. If a function has an antiderivative in a region, the line integral depends only on the endpoints of the curve, not the path itself.

**Important Note:** This property requires $f(z)$ to be analytic in the region containing the curve $C$ and for $C$ to be contained within that region.

**Example:** Evaluate $\int_C z^2 \, dz$ where $C$ is any path from $z_1=1$ to $z_2=2+i$.

*   **Function:** $f(z) = z^2$. This function is analytic everywhere.
*   **Antiderivative:** An antiderivative of $z^2$ is $F(z) = \frac{z^3}{3}$.
*   **Apply the property:**
    $$ \int_C z^2 \, dz = F(2+i) - F(1) $$
    $$ = \frac{(2+i)^3}{3} - \frac{1^3}{3} $$
    $$ = \frac{1}{3} [(2+i)^3 - 1] $$
    Calculate $(2+i)^3$:
    $(2+i)^3 = 2^3 + 3(2^2)(i) + 3(2)(i^2) + i^3$
    $= 8 + 12i + 6(-1) + (-i)$
    $= 8 + 12i - 6 - i$
    $= 2 + 11i$
    So,
    $$ \int_C z^2 \, dz = \frac{1}{3} [ (2 + 11i) - 1 ] = \frac{1}{3} (1 + 11i) = \frac{1}{3} + \frac{11}{3}i $$

---

### 4. Practice Questions and Exercises

**Question 1:** Evaluate $\int_C \bar{z} \, dz$ where $C$ is the quarter-circle $|z|=1$ in the first quadrant, from $z=1$ to $z=i$.

**Question 2:** Evaluate $\int_C e^z \, dz$ where $C$ is the line segment from $0$ to $\pi i$.

**Question 3:** Let $f(z) = z^3$. Find the value of $\int_C f(z) \, dz$ where $C$ is any path from $z_0=1$ to $z_1=3$.

**Question 4:** Estimate the magnitude of the integral $\int_C \frac{\cos z}{z^2 - 2} \, dz$ where $C$ is the circle $|z|=1$.

**Question 5:** Evaluate $\int_C \frac{1}{z} \, dz$ where $C$ is the unit circle $|z|=1$ traversed counterclockwise. (Note: This will require parameterization as $\frac{1}{z}$ does not have a simple antiderivative in a domain containing the origin).

---

### 5. Answers to Practice Questions

**Answer 1:**
*   **Parameterize C:** $z(t) = e^{it} = \cos t + i \sin t$, for $0 \le t \le \frac{\pi}{2}$.
*   **$\bar{z}(t)$:** $\bar{z}(t) = e^{-it} = \cos t - i \sin t$.
*   **$z'(t)$:** $z'(t) = i e^{it} = i(\cos t + i \sin t) = -\sin t + i \cos t$.
*   **Integral:**
    $$ \int_C \bar{z} \, dz = \int_0^{\pi/2} e^{-it} (i e^{it}) \, dt $$
    $$ = \int_0^{\pi/2} i \, dt $$
    $$ = i [t]_0^{\pi/2} = i \frac{\pi}{2} $$

**Answer 2:**
*   The function $f(z) = e^z$ is analytic everywhere.
*   An antiderivative is $F(z) = e^z$.
*   The path is from $z_0 = 0$ to $z_1 = \pi i$.
*   Using the antiderivative property:
    $$ \int_C e^z \, dz = F(\pi i) - F(0) = e^{\pi i} - e^0 $$
    $$ = (-1) - 1 = -2 $$

**Answer 3:**
*   The function $f(z) = z^3$ is analytic everywhere.
*   An antiderivative is $F(z) = \frac{z^4}{4}$.
*   The path connects $z_0=1$ to $z_1=3$.
*   Using the antiderivative property:
    $$ \int_C z^3 \, dz = F(3) - F(1) = \frac{3^4}{4} - \frac{1^4}{4} $$
    $$ = \frac{81}{4} - \frac{1}{4} = \frac{80}{4} = 20 $$

**Answer 4:**
*   **Curve C:** $|z|=1$ (unit circle centered at origin).
*   **Length of C (L):** $L = 2 \pi (1) = 2\pi$.
*   **Function:** $f(z) = \frac{\cos z}{z^2 - 2}$.
*   **Find the maximum of |f(z)| on C:** For $|z|=1$, $|z^2-2| \ge ||z|^2 - 2| = |1-2| = |-1| = 1$.
    For $|z|=1$, $|\cos z| = \left| \frac{e^{iz} + e^{-iz}}{2} \right|$. Let $z=e^{i\theta}$.
    $|e^{i(e^{i\theta})}| = |e^{i(\cos \theta + i \sin \theta)}| = |e^{i \cos \theta - \sin \theta}| = e^{-\sin \theta}$.
    $|e^{-i(e^{i\theta})}| = |e^{-i(\cos \theta + i \sin \theta)}| = |e^{-i \cos \theta + \sin \theta}| = e^{\sin \theta}$.
    So, $|\cos z| \le \frac{e^{-\sin \theta} + e^{\sin \theta}}{2} = \cosh(\sin \theta)$.
    Since $|\sin \theta| \le 1$, $|\cos z| \le \cosh(1) = \frac{e + e^{-1}}{2}$.
    Thus, $|f(z)| \le \frac{\cosh(1)}{1} = \cosh(1)$. So, $M = \cosh(1)$.
*   **Apply the Estimation Lemma:**
    $$ \left| \int_C \frac{\cos z}{z^2 - 2} \, dz \right| \le M L = \cosh(1) (2\pi) = 2\pi \left( \frac{e + e^{-1}}{2} \right) = \pi (e + e^{-1}) $$

**Answer 5:**
*   **Parameterize C:** $z(t) = e^{it} = \cos t + i \sin t$, for $0 \le t \le 2\pi$.
*   **$dz$:** $dz = i e^{it} \, dt$.
*   **Integral:**
    $$ \int_C \frac{1}{z} \, dz = \int_0^{2\pi} \frac{1}{e^{it}} (i e^{it}) \, dt $$
    $$ = \int_0^{2\pi} i \, dt $$
    $$ = i [t]_0^{2\pi} = i (2\pi - 0) = 2\pi i $$

---

### Important Points to Remember:

*   **Definition:** A complex line integral is the integral of a complex function $f(z)$ along a curve $C$ in the complex plane, typically evaluated using a parameterization $z(t)$.
*   **Real vs. Complex:** The complex line integral can be broken down into two real line integrals.
*   **Antiderivative Property:** If $f(z)$ is analytic in a domain and has an antiderivative $F(z)$, then $\int_C f(z) \, dz = F(\text{end point}) - F(\text{start point})$, provided $C$ lies within the domain of analyticity. This is a *very powerful* simplification.
*   **Estimation Lemma:** Crucial for bounding the magnitude of an integral: $|\int_C f(z) \, dz| \le ML$.
*   **Analyticity:** The antiderivative property depends critically on the analyticity of the integrand in the region of the curve. Functions like $\frac{1}{z}$ are not analytic at $z=0$, so their integrals around curves containing $0$ cannot be evaluated using this simple property.

---
