---
title: "First evaluation method"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 3: Complex Integration: Line integrals in the complex plane (Definition & Basic properties)"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462cac"
status: "completed"
scrapedAt: "2026-05-20T17:50:47.894Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 3: Complex Integration: Line Integrals in the Complex Plane (Definition & Basic Properties)

### Topic: First Evaluation Method

---

**Course Outcomes (COs) Addressed:**

*   **CO3:** Compute complex integrals using Cauchy's integral theorem and Cauchy's integral formula. (Knowledge Level: K3) - This topic directly contributes to understanding the foundations of computing complex integrals.

---

### 1. Introduction to Line Integrals in the Complex Plane

The evaluation of complex integrals, particularly line integrals, is a cornerstone of complex analysis and has significant applications in electrical and physical sciences, such as analyzing circuits, fluid dynamics, and electrostatics. The first method of evaluating these integrals relies on the fundamental definition and properties of line integrals in the complex plane.

**Key Concept:** A line integral in the complex plane is the generalization of line integrals in real calculus, extended to functions of a complex variable along a curve in the complex plane.

**Learning Outcome Covered:** This section sets the groundwork for understanding the definition and basic properties of line integrals, crucial for all subsequent evaluation methods.

---

### 2. Definition of a Complex Line Integral

Let $f(z)$ be a complex-valued function of a complex variable $z = x + iy$. Let $C$ be a piecewise smooth curve in the complex plane, parameterized by $z(t) = x(t) + iy(t)$, where $t$ varies from $a$ to $b$.

The complex line integral of $f(z)$ along the curve $C$ is defined as:

$$ \int_C f(z) \, dz = \int_a^b f(z(t)) z'(t) \, dt $$

where $z'(t) = \frac{dz}{dt} = x'(t) + iy'(t)$.

**Key Concepts & Definitions:**

*   **Complex-valued function of a complex variable ($f(z)$):** A function that maps a complex number to a complex number, $f(z) = u(x, y) + iv(x, y)$.
*   **Curve $C$ in the complex plane:** A set of points in the complex plane that can be traced.
*   **Piecewise smooth curve:** A curve that can be divided into a finite number of smooth segments. A smooth curve has a continuously differentiable tangent vector.
*   **Parameterization ($z(t)$):** Expressing the complex variable $z$ as a function of a real parameter $t$.
*   **$z'(t)$:** The derivative of the parameterization with respect to $t$, representing the tangent vector to the curve.

**References:**

*   **Kreyszig, 10th ed., Section 6.1 (Line Integrals):** Provides the formal definition of line integrals in the complex plane and their relation to real line integrals.
*   **Zill & Shanahan, 3rd ed., Section 4.1 (Complex Line Integrals):** Offers a similar definition and introductory examples.
*   **Ramana, 39th ed., Chapter 21 (Complex Integration):** Covers the definition and basic properties of contour integrals.

**Example 1:** Evaluate $\int_C z^2 \, dz$ along the straight line segment $C$ from $z=0$ to $z=1+i$.

**Solution:**

1.  **Parameterize the curve $C$:** The line segment from $0$ to $1+i$ can be parameterized as $z(t) = t(1+i)$, where $t$ varies from $0$ to $1$.
2.  **Find $z'(t)$:** $z'(t) = \frac{dz}{dt} = 1+i$.
3.  **Substitute into the integral definition:**
    $$ \int_C z^2 \, dz = \int_0^1 (t(1+i))^2 (1+i) \, dt $$
    $$ = \int_0^1 t^2 (1+i)^2 (1+i) \, dt $$
    $$ = (1+i)^3 \int_0^1 t^2 \, dt $$
4.  **Evaluate the integral:**
    $$ (1+i)^3 = 1^3 + 3(1^2)(i) + 3(1)(i^2) + i^3 = 1 + 3i - 3 - i = -2 + 2i $$
    $$ \int_0^1 t^2 \, dt = \left[ \frac{t^3}{3} \right]_0^1 = \frac{1}{3} $$
5.  **Combine the results:**
    $$ \int_C z^2 \, dz = (-2 + 2i) \times \frac{1}{3} = -\frac{2}{3} + \frac{2}{3}i $$

**Knowledge Level (K3):** This example requires applying the definition to compute a specific integral, demonstrating the ability to perform the calculation.

---

### 3. Evaluation using Real Line Integrals

The complex line integral can be expressed in terms of real line integrals. If $f(z) = u(x, y) + iv(x, y)$ and $dz = dx + i dy$, then:

$$ \int_C f(z) \, dz = \int_C (u + iv)(dx + i dy) $$
$$ = \int_C (u \, dx - v \, dy) + i \int_C (v \, dx + u \, dy) $$

This formula is particularly useful when the path $C$ can be described in terms of $x$ and $y$, and $u$ and $v$ are known functions of $x$ and $y$.

**Key Concept:** The complex line integral can be decomposed into two real line integrals, one for the real part and one for the imaginary part.

**Learning Outcome Covered:** This method directly supports CO3 by providing a way to compute complex integrals by reducing them to real line integrals.

**References:**

*   **Kreyszig, 10th ed., Section 6.1:** Explicitly shows this decomposition.
*   **Ramana, 39th ed., Chapter 21:** Discusses the relationship between complex line integrals and real line integrals.

**Example 2:** Evaluate $\int_C \bar{z} \, dz$ along the curve $C$ defined by $y=x^2$ from $(0,0)$ to $(1,1)$.

**Solution:**

1.  **Identify $f(z)$ and its real/imaginary parts:** $f(z) = \bar{z} = x - iy$. So, $u(x, y) = x$ and $v(x, y) = -y$.
2.  **Parameterize $C$:** The curve is given by $y = x^2$. We can parameterize it using $x$ as the parameter: $x = t$, so $y = t^2$. This means $z(t) = t + it^2$, where $t$ varies from $0$ to $1$.
3.  **Find $dx$ and $dy$:** $dx = \frac{dx}{dt} dt = 1 \, dt$. $dy = \frac{dy}{dt} dt = 2t \, dt$.
4.  **Apply the real line integral formula:**
    $$ \int_C \bar{z} \, dz = \int_C (x \, dx - (-y) \, dy) + i \int_C (-y \, dx + x \, dy) $$
    $$ = \int_C (x \, dx + y \, dy) + i \int_C (-y \, dx + x \, dy) $$
5.  **Substitute the parameterization:**
    $$ \int_C (x \, dx + y \, dy) = \int_0^1 (t)(1 \, dt) + (t^2)(2t \, dt) = \int_0^1 (t + 2t^3) \, dt $$
    $$ \int_C (-y \, dx + x \, dy) = \int_0^1 -(t^2)(1 \, dt) + (t)(2t \, dt) = \int_0^1 (-t^2 + 2t^2) \, dt = \int_0^1 t^2 \, dt $$
6.  **Evaluate the integrals:**
    $$ \int_0^1 (t + 2t^3) \, dt = \left[ \frac{t^2}{2} + \frac{2t^4}{4} \right]_0^1 = \frac{1}{2} + \frac{1}{2} = 1 $$
    $$ \int_0^1 t^2 \, dt = \left[ \frac{t^3}{3} \right]_0^1 = \frac{1}{3} $$
7.  **Combine the results:**
    $$ \int_C \bar{z} \, dz = 1 + i \frac{1}{3} $$

**Alternative approach using $z'(t)$:**

1.  **Parameterization:** $z(t) = t + it^2$, $t \in [0, 1]$.
2.  **$z'(t)$:** $z'(t) = 1 + 2it$.
3.  **$\bar{z}(t)$:** $\bar{z}(t) = t - it^2$.
4.  **Substitute and integrate:**
    $$ \int_C \bar{z} \, dz = \int_0^1 (t - it^2)(1 + 2it) \, dt $$
    $$ = \int_0^1 (t + 2it^2 - it^2 - 2i^2t^3) \, dt $$
    $$ = \int_0^1 (t + it^2 + 2t^3) \, dt $$
    $$ = \left[ \frac{t^2}{2} + i\frac{t^3}{3} + \frac{2t^4}{4} \right]_0^1 $$
    $$ = \frac{1}{2} + \frac{1}{3}i + \frac{1}{2} = 1 + \frac{1}{3}i $$

Both methods yield the same result. The first method (using $dx, dy$) is more explicit about the real and imaginary components.

**Knowledge Level (K3):** This example demonstrates applying the decomposition formula and evaluating the resulting real line integrals, which is a direct application of CO3.

---

### 4. Properties of Complex Line Integrals

Understanding the basic properties of complex line integrals is crucial for simplifying calculations and for developing more advanced theorems.

**Key Properties:**

1.  **Linearity:** For functions $f(z)$ and $g(z)$ and constants $a$ and $b$:
    $$ \int_C (af(z) + bg(z)) \, dz = a \int_C f(z) \, dz + b \int_C g(z) \, dz $$
    *This property follows directly from the linearity of integrals and differentiation in the definition.*

2.  **Additivity over Paths:** If $C$ is composed of two curves $C_1$ and $C_2$ such that $C = C_1 + C_2$ (meaning the endpoint of $C_1$ is the starting point of $C_2$), then:
    $$ \int_C f(z) \, dz = \int_{C_1} f(z) \, dz + \int_{C_2} f(z) \, dz $$
    *This allows us to break down complex paths into simpler segments.*

3.  **Reversal of Path:** If $-C$ denotes the curve $C$ traversed in the opposite direction, then:
    $$ \int_{-C} f(z) \, dz = - \int_C f(z) \, dz $$
    *This is a direct consequence of reversing the limits of integration in the parameterization.*

4.  **Boundedness (Integral Inequality):** If $|f(z)| \leq M$ for all $z$ on $C$, and $L$ is the length of the curve $C$, then:
    $$ \left| \int_C f(z) \, dz \right| \leq ML $$
    *This is a very important inequality, often used to bound integrals or to prove convergence.*

**Learning Outcome Covered:** These properties are foundational for understanding how to manipulate and simplify complex integrals, directly supporting CO3.

**References:**

*   **Kreyszig, 10th ed., Section 6.1:** Lists and explains these properties.
*   **Zill & Shanahan, 3rd ed., Section 4.1:** Also covers these fundamental properties.
*   **Grewal, 44th ed., Chapter 22:** Details the properties of contour integration.

**Example 3 (Illustrating Integral Inequality):** Estimate the magnitude of $\int_C \frac{e^z}{z^2+1} \, dz$ where $C$ is the quarter circle $|z|=2$ in the first quadrant.

**Solution:**

1.  **Identify the curve $C$ and its length $L$:** $C$ is a quarter circle of radius 2 in the first quadrant. The length of a quarter circle of radius $r$ is $\frac{1}{4}(2\pi r) = \frac{\pi r}{2}$. Here, $r=2$, so $L = \frac{\pi(2)}{2} = \pi$.

2.  **Find an upper bound $M$ for $|f(z)|$ on $C$:**
    $f(z) = \frac{e^z}{z^2+1}$. On $|z|=2$, we have $z = 2e^{i\theta}$ for $\theta \in [0, \pi/2]$.
    $|e^z| = |e^{x+iy}| = e^x$. For $z$ on the quarter circle in the first quadrant, $x$ varies from 0 to 2. The maximum value of $x$ is 2. So, the maximum value of $|e^z|$ is $e^2$.
    For the denominator, $|z^2+1|$. By the triangle inequality, $|z^2+1| \geq ||z^2| - |-1|| = |2^2 - 1| = |4-1| = 3$.
    So, $|f(z)| = \frac{|e^z|}{|z^2+1|} \leq \frac{e^2}{3}$.
    Therefore, we can take $M = \frac{e^2}{3}$.

3.  **Apply the integral inequality:**
    $$ \left| \int_C \frac{e^z}{z^2+1} \, dz \right| \leq ML = \frac{e^2}{3} \times \pi = \frac{\pi e^2}{3} $$

**Knowledge Level (K3):** This example requires identifying bounds and applying the integral inequality, which is a key skill for manipulating and estimating complex integrals as per CO3.

---

### 5. Important Points to Remember

*   **Parameterization is Key:** The first method of evaluating complex line integrals fundamentally relies on choosing an appropriate parameterization of the curve $C$.
*   **Derivative of Parameterization ($z'(t)$):** Don't forget to include $z'(t)$ in the integral.
*   **Real vs. Complex Integration:** Be mindful of whether you are performing integration with respect to a real variable ($t$) or a complex variable ($z$).
*   **Integral Inequality:** The $ML$-inequality is a powerful tool for estimating the magnitude of integrals without explicitly computing them.
*   **Piecewise Smoothness:** The definition and properties generally hold for piecewise smooth curves. If a curve has corners, you may need to split the integral into segments.
*   **Analyticity vs. Real/Imaginary Parts:** While $f(z)$ might be analytic, the integral evaluation via real line integrals requires $u(x, y)$ and $v(x, y)$ to be functions that can be integrated along the path.

---

### 6. Practice Questions/Exercises

1.  Evaluate $\int_C z \, dz$ along the semicircle $C$ defined by $|z|=1$ from $z=1$ to $z=-1$ through the upper half-plane.
    *   **Answer:** $\int_C z \, dz = \int_{-\pi/2}^{\pi/2} (e^{i\theta})(ie^{i\theta}) \, d\theta = i \int_{-\pi/2}^{\pi/2} e^{2i\theta} \, d\theta = i \left[ \frac{e^{2i\theta}}{2i} \right]_{-\pi/2}^{\pi/2} = \frac{1}{2} (e^{i\pi} - e^{-i\pi}) = \frac{1}{2}(-1 - (-1)) = 0$.

2.  Evaluate $\int_C \frac{1}{z} \, dz$ along the unit circle $|z|=1$ counterclockwise.
    *   **Answer:** Parameterize $C$ as $z(t) = e^{it}$ for $t \in [0, 2\pi]$. Then $z'(t) = ie^{it}$.
        $$ \int_C \frac{1}{z} \, dz = \int_0^{2\pi} \frac{1}{e^{it}} (ie^{it}) \, dt = \int_0^{2\pi} i \, dt = [it]_0^{2\pi} = 2\pi i $$

3.  Evaluate $\int_C x \, dz$ where $C$ is the line segment from $z=0$ to $z=1+i$.
    *   **Answer:** Parameterize $C$ as $z(t) = t(1+i)$ for $t \in [0, 1]$. So $x(t) = t$ and $y(t) = t$. $z'(t) = 1+i$.
        $$ \int_C x \, dz = \int_0^1 t (1+i) \, dt = (1+i) \int_0^1 t \, dt = (1+i) \left[ \frac{t^2}{2} \right]_0^1 = \frac{1+i}{2} $$

4.  Estimate the magnitude of $\int_C \frac{\log z}{z^2} \, dz$ where $C$ is the circle $|z|=e$ traversed counterclockwise. (Note: $\log z$ is the principal branch of the logarithm).
    *   **Answer:** $C$ is $|z|=e$, so $L = 2\pi e$. For $|z|=e$, $\log z = \ln|z| + i \operatorname{Arg}(z) = \ln e + i \theta = 1 + i\theta$, where $\theta \in [0, 2\pi)$ for the full circle.
        $|\log z| \leq \ln|z| + |\operatorname{Arg}(z)| = 1 + 2\pi$. The maximum value of $|\log z|$ on $C$ is $1+2\pi$.
        $|z^2| = |z|^2 = e^2$.
        $|f(z)| = \frac{|\log z|}{|z^2|} \leq \frac{1+2\pi}{e^2}$. So $M = \frac{1+2\pi}{e^2}$.
        $\left| \int_C \frac{\log z}{z^2} \, dz \right| \leq ML = \frac{1+2\pi}{e^2} \times 2\pi e = \frac{2\pi(1+2\pi)e}{e^2} = \frac{2\pi(1+2\pi)}{e}$.

---

This concludes the notes on the first evaluation method for complex line integrals. The next steps in complex integration will involve more sophisticated theorems that often bypass the need for direct parameterization and integration.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=fNk_zzaMoEs) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
