---
title: "Complex Integration: Line integrals in the complex plane (Definition & Basic properties)"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 3: Complex Integration: Line integrals in the complex plane (Definition & Basic properties)"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe268"
status: "completed"
scrapedAt: "2026-05-23T17:47:11.183Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 3: Complex Integration: Line Integrals in the Complex Plane

---

### Topic: Complex Integration: Line Integrals in the Complex Plane (Definition & Basic Properties)

---

**Knowledge Level:** K3 (Application)

**Course Outcomes Alignment:**
*   **CO3:** Compute complex integrals using Cauchy's integral theorem and Cauchy's integral formula. (This module builds the foundational understanding for CO3).

---

### 1. Introduction to Complex Integration

Complex integration is a fundamental tool in complex analysis with vast applications in electrical engineering (e.g., circuit analysis, signal processing) and physical science (e.g., fluid dynamics, quantum mechanics). It extends the concept of real line integrals to functions of complex variables along curves in the complex plane.

---

### 2. Curves in the Complex Plane

Before defining complex line integrals, we need to understand how curves are represented in the complex plane.

*   **Parametric Representation:** A curve $C$ in the complex plane can be represented parametrically by a complex-valued function $z(t) = x(t) + iy(t)$, where $t$ is a real parameter, typically varying over an interval $[a, b]$.
    *   $x(t)$ and $y(t)$ are real-valued continuous functions of $t$.
    *   As $t$ varies from $a$ to $b$, the point $z(t)$ traces out the curve $C$.

*   **Smooth Curves:** A curve $C$ is called **smooth** if $z'(t) = x'(t) + iy'(t)$ exists and is continuous for all $t$ in $(a, b)$, and $z'(t) \neq 0$ for all $t$ in $(a, b)$.
    *   A smooth curve has a well-defined tangent at every point.

*   **Piecewise Smooth Curves:** A curve $C$ is **piecewise smooth** if it consists of a finite number of smooth curves joined end-to-end.
    *   This allows for curves with corners.

*   **Direction:** The orientation or direction of the curve is determined by the increasing values of the parameter $t$.

**Example:**
Consider the curve $C$ that is a straight line segment from $z_1 = 1 + i$ to $z_2 = 3 + 2i$.
We can parameterize this curve as:
$z(t) = z_1 + t(z_2 - z_1)$, for $t \in [0, 1]$.
$z(t) = (1 + i) + t((3 + 2i) - (1 + i))$
$z(t) = (1 + i) + t(2 + i)$
$z(t) = (1 + 2t) + i(1 + t)$
Here, $x(t) = 1 + 2t$ and $y(t) = 1 + t$.
$z'(t) = 2 + i$. Since $z'(t)$ is a non-zero constant, this is a smooth curve.

**Reference:** Kreyszig, Section 12.3: Complex Integration. Discusses parameterization of curves.

---

### 3. Definition of Complex Line Integral

Let $f(z)$ be a complex-valued function defined on a curve $C$ parameterized by $z(t)$, where $a \le t \le b$. The complex line integral of $f(z)$ along $C$ is defined as:

$$
\int_C f(z) \, dz = \int_a^b f(z(t)) z'(t) \, dt
$$

This definition is analogous to the line integral in vector calculus: $\int_C \mathbf{F} \cdot d\mathbf{r}$.

*   $f(z)$: The integrand, a complex function.
*   $dz$: The differential of the path, which is $z'(t) \, dt$.
*   $C$: The path of integration.

**Evaluation:** To evaluate this integral, we substitute the parametric form of the curve $z(t)$ into the function $f(z)$, multiply by the derivative of the path $z'(t)$, and integrate with respect to the real parameter $t$ over its range.

**Example 1: Simple Power Function**
Evaluate $\int_C z^2 \, dz$ along the curve $C$ given by $z(t) = t + it^2$, for $t \in [0, 1]$.

**Solution:**
1.  **Parametric form:** $z(t) = t + it^2$.
2.  **Derivative of the path:** $z'(t) = \frac{dz}{dt} = 1 + i(2t)$.
3.  **Integrand in terms of t:** $f(z(t)) = (z(t))^2 = (t + it^2)^2 = t^2 + 2i t^3 + (it^2)^2 = t^2 + 2it^3 - t^4$.
4.  **Integral:**
    $$
    \int_C z^2 \, dz = \int_0^1 (t^2 + 2it^3 - t^4) (1 + 2it) \, dt
    $$
    Expand the integrand:
    $(t^2 + 2it^3 - t^4)(1 + 2it) = t^2(1+2it) + 2it^3(1+2it) - t^4(1+2it)$
    $= t^2 + 2it^3 + 2it^3 + 4i^2t^4 - t^4 - 2it^5$
    $= t^2 + 4it^3 - 4t^4 - t^4 - 2it^5$
    $= (t^2 - 5t^4) + i(4t^3 - 2t^5)$

    Now integrate with respect to $t$:
    $$
    \int_0^1 [(t^2 - 5t^4) + i(4t^3 - 2t^5)] \, dt
    $$
    $$
    = \left[ \frac{t^3}{3} - \frac{5t^5}{5} \right]_0^1 + i \left[ \frac{4t^4}{4} - \frac{2t^6}{6} \right]_0^1
    $$
    $$
    = \left[ \frac{t^3}{3} - t^5 \right]_0^1 + i \left[ t^4 - \frac{t^6}{3} \right]_0^1
    $$
    $$
    = \left( \frac{1}{3} - 1 \right) - (0) + i \left( 1 - \frac{1}{3} \right) - (0)
    $$
    $$
    = -\frac{2}{3} + i \frac{2}{3}
    $$

**Example 2: Integration along a Circle**
Evaluate $\int_C \frac{1}{z} \, dz$ along the unit circle $|z| = 1$ traversed counterclockwise.

**Solution:**
1.  **Parametric form:** The unit circle $|z|=1$ can be parameterized by $z(t) = e^{it} = \cos t + i \sin t$, for $t \in [0, 2\pi]$.
2.  **Derivative of the path:** $z'(t) = \frac{dz}{dt} = ie^{it}$.
3.  **Integrand in terms of t:** $f(z(t)) = \frac{1}{z(t)} = \frac{1}{e^{it}} = e^{-it}$.
4.  **Integral:**
    $$
    \int_C \frac{1}{z} \, dz = \int_0^{2\pi} (e^{-it}) (ie^{it}) \, dt
    $$
    $$
    = \int_0^{2\pi} i \, dt
    $$
    $$
    = i [t]_0^{2\pi}
    $$
    $$
    = i (2\pi - 0) = 2\pi i
    $$

**Reference:** Zill & Shanahan, Chapter 6: Complex Integration. Provides a rigorous definition and examples. Ramana, Chapter 35: Complex Integration. Grewal, Chapter 20: Complex Integration.

---

### 4. Basic Properties of Complex Line Integrals

The complex line integral possesses several important properties, similar to real line integrals and vector line integrals.

Let $f(z)$ and $g(z)$ be complex functions, and $C$ be a piecewise smooth curve.

1.  **Linearity:**
    $$
    \int_C [\alpha f(z) + \beta g(z)] \, dz = \alpha \int_C f(z) \, dz + \beta \int_C g(z) \, dz
    $$
    where $\alpha$ and $\beta$ are complex constants.
    *   This means the integral of a linear combination of functions is the linear combination of their integrals.

2.  **Additivity over Path:** If $C$ is composed of two curves $C_1$ and $C_2$ such that $C = C_1 \cup C_2$, and the end point of $C_1$ is the starting point of $C_2$, then:
    $$
    \int_C f(z) \, dz = \int_{C_1} f(z) \, dz + \int_{C_2} f(z) \, dz
    $$

3.  **Reversal of Path:** If $-C$ denotes the curve $C$ traversed in the opposite direction, then:
    $$
    \int_{-C} f(z) \, dz = - \int_C f(z) \, dz
    $$

4.  **Independence of Parameterization:** The value of the integral is independent of the specific parameterization chosen for the curve, as long as the orientation and the set of points traced remain the same.

5.  **Upper Bound for Modulus of the Integral:** If $|f(z)| \le M$ for all $z$ on $C$, and $L$ is the length of the curve $C$, then:
    $$
    \left| \int_C f(z) \, dz \right| \le M L
    $$
    This is a crucial property for estimating the magnitude of an integral. The length $L$ of a curve parameterized by $z(t) = x(t) + iy(t)$ for $a \le t \le b$ is given by:
    $$
    L = \int_a^b |z'(t)| \, dt
    $$

**Example 3: Using the Upper Bound Property**
Estimate the value of $\int_C \frac{e^z}{z^2+1} \, dz$ where $C$ is the circle $|z|=2$ traversed counterclockwise.

**Solution:**
1.  **Path:** $C$ is the circle $|z|=2$, with radius $R=2$.
2.  **Length of the path:** $L = 2\pi R = 2\pi(2) = 4\pi$.
3.  **Maximum modulus of the integrand:** Let $f(z) = \frac{e^z}{z^2+1}$. On $|z|=2$:
    *   $|e^z| = |e^{x+iy}| = |e^x e^{iy}| = e^x$. Since $z$ is on $|z|=2$, $x$ ranges from -2 to 2. The maximum value of $e^x$ occurs at $x=2$, so $|e^z| \le e^2$.
    *   For the denominator, $|z^2+1|$. By the triangle inequality, $|z^2+1| \ge ||z^2| - |-1|| = |4 - 1| = 3$.
    *   Therefore, $|f(z)| = \left| \frac{e^z}{z^2+1} \right| \le \frac{|e^z|}{|z^2+1|} \le \frac{e^2}{3}$.
    *   So, $M = \frac{e^2}{3}$.

4.  **Estimate the integral:**
    $$
    \left| \int_C \frac{e^z}{z^2+1} \, dz \right| \le M L = \left( \frac{e^2}{3} \right) (4\pi) = \frac{4\pi e^2}{3}
    $$

**Reference:** Kreyszig, Section 12.3. Discusses the ML-inequality. Zill & Shanahan, Chapter 6.

---

### 5. Line Integrals of Analytic Functions

A crucial concept is how the integral behaves when the integrand $f(z)$ is analytic.

*   **Antiderivative:** If a function $f(z)$ has an **antiderivative** $F(z)$ in a domain $D$ (i.e., $F'(z) = f(z)$ for all $z \in D$), then for any piecewise smooth curve $C$ in $D$ joining $z_1$ to $z_2$:
    $$
    \int_C f(z) \, dz = F(z_2) - F(z_1)
    $$
    This is the **complex analogue of the fundamental theorem of calculus**. It significantly simplifies integration if an antiderivative can be found.

*   **Cauchy's Integral Theorem (for simple paths):** If $f(z)$ is analytic in a simply connected domain $D$, and $C$ is any piecewise smooth curve lying entirely in $D$, then:
    $$
    \int_C f(z) \, dz = 0
    $$
    This is a cornerstone of complex integration. It implies that the integral of an analytic function around any closed loop in its domain of analyticity is zero.

**Conditions for Cauchy's Integral Theorem:**
1.  $f(z)$ is analytic in a domain $D$.
2.  $C$ is a closed piecewise smooth curve within $D$.

**Example 4: Using the Antiderivative Property**
Evaluate $\int_C z^n \, dz$ where $n \neq -1$ and $C$ is any piecewise smooth curve from $z_1$ to $z_2$.

**Solution:**
The function $f(z) = z^n$ (for $n \neq -1$) has an antiderivative $F(z) = \frac{z^{n+1}}{n+1}$.
This antiderivative is analytic everywhere. Therefore, by the fundamental theorem of calculus for complex integrals:
$$
\int_C z^n \, dz = F(z_2) - F(z_1) = \frac{z_2^{n+1}}{n+1} - \frac{z_1^{n+1}}{n+1}
$$

**Example 5: Using Cauchy's Integral Theorem**
Evaluate $\int_C \cos(z) \, dz$ where $C$ is the unit circle $|z|=1$ traversed counterclockwise.

**Solution:**
The function $f(z) = \cos(z)$ is analytic everywhere in the complex plane. The unit circle $C$ is a closed curve. Therefore, by Cauchy's Integral Theorem:
$$
\int_C \cos(z) \, dz = 0
$$
The antiderivative is $\sin(z)$, so $\int_C \cos(z) \, dz = \sin(z_2) - \sin(z_1)$. Since $C$ is closed, $z_1 = z_2$, hence the result is 0.

**Example 6: When the Function is Not Analytic**
Evaluate $\int_C \frac{1}{z} \, dz$ along the unit circle $|z|=1$ traversed counterclockwise (which we did before, result $2\pi i$).

**Solution:**
The function $f(z) = \frac{1}{z}$ is **not** analytic at $z=0$. The unit circle $|z|=1$ encloses the point $z=0$. Therefore, Cauchy's Integral Theorem **does not apply**. The integral is not zero, and its value is $2\pi i$.

**Reference:** Kreyszig, Section 12.4: Fundamental Theorem of Cauchy's Integral Theorem. Zill & Shanahan, Chapter 6. Ramana, Chapter 35. Grewal, Chapter 20.

---

### 6. Important Points to Remember

*   The definition of a complex line integral $\int_C f(z) \, dz = \int_a^b f(z(t)) z'(t) \, dt$ requires parameterizing the curve $C$.
*   The value of the integral depends on the path $C$ and the function $f(z)$.
*   If $f(z)$ has an antiderivative $F(z)$ in a domain, the integral is simply $F(z_2) - F(z_1)$, independent of the path between $z_1$ and $z_2$.
*   If $f(z)$ is analytic in a domain and $C$ is a closed curve in that domain, the integral is zero (Cauchy's Integral Theorem). This is a powerful result.
*   The ML-inequality is useful for estimating the magnitude of an integral without calculating it directly.
*   The function $f(z) = 1/z$ is analytic everywhere except at $z=0$. Integrals of $1/z$ around closed curves enclosing $z=0$ are non-zero.

---

### 7. Practice Questions and Exercises

**Question 1:**
Evaluate $\int_C z^3 \, dz$ along the line segment from $z=0$ to $z=1+i$.

**Question 2:**
Evaluate $\int_C e^z \, dz$ along the curve $z(t) = t^2 + it$, for $t \in [-1, 1]$.

**Question 3:**
Evaluate $\int_C \bar{z} \, dz$ along the line segment from $z=-1$ to $z=1$.

**Question 4:**
Evaluate $\int_C \frac{1}{z-a} \, dz$ where $C$ is the circle $|z-a|=r$ traversed counterclockwise.

**Question 5:**
Estimate the value of $\int_C \frac{1}{z^2+4} \, dz$ where $C$ is the circle $|z|=3$ traversed counterclockwise, using the ML-inequality.

---

### 8. Answers to Practice Questions

**Answer 1:**
*   **Parametric form:** $z(t) = t(1+i)$ for $t \in [0, 1]$.
*   $z'(t) = 1+i$.
*   $f(z(t)) = (t(1+i))^3 = t^3 (1+i)^3 = t^3 (1 + 3i + 3i^2 + i^3) = t^3 (1 + 3i - 3 - i) = t^3 (-2 + 2i)$.
*   $\int_C z^3 \, dz = \int_0^1 t^3 (-2 + 2i) (1+i) \, dt = (-2+2i)(1+i) \int_0^1 t^3 \, dt$
    $= (-2 - 2i + 2i + 2i^2) \left[\frac{t^4}{4}\right]_0^1 = (-2 - 2) \left(\frac{1}{4}\right) = -4 \times \frac{1}{4} = -1$.

**Alternatively, using the antiderivative:**
$f(z) = z^3$. Antiderivative $F(z) = \frac{z^4}{4}$.
$z_1 = 0$, $z_2 = 1+i$.
$\int_C z^3 \, dz = F(1+i) - F(0) = \frac{(1+i)^4}{4} - \frac{0^4}{4} = \frac{((1+i)^2)^2}{4} = \frac{(1+2i+i^2)^2}{4} = \frac{(2i)^2}{4} = \frac{4i^2}{4} = \frac{-4}{4} = -1$.

**Answer 2:**
*   $f(z) = e^z$. This function is analytic everywhere.
*   Its antiderivative is $F(z) = e^z$.
*   The curve starts at $z(-1) = (-1)^2 + i(-1) = 1 - i$.
*   The curve ends at $z(1) = (1)^2 + i(1) = 1 + i$.
*   $\int_C e^z \, dz = F(1+i) - F(1-i) = e^{1+i} - e^{1-i} = e^1 e^i - e^1 e^{-i} = e(\cos(1) + i\sin(1) - (\cos(-1) + i\sin(-1)))$
    $= e(\cos(1) + i\sin(1) - (\cos(1) - i\sin(1))) = e(2i\sin(1)) = 2ie \sin(1)$.

**Answer 3:**
*   **Parametric form:** $z(t) = t$ for $t \in [-1, 1]$.
*   $z'(t) = 1$.
*   $f(z(t)) = \bar{z}(t) = \bar{t} = t$ (since $t$ is real).
*   $\int_C \bar{z} \, dz = \int_{-1}^1 t \cdot 1 \, dt = \left[\frac{t^2}{2}\right]_{-1}^1 = \frac{1^2}{2} - \frac{(-1)^2}{2} = \frac{1}{2} - \frac{1}{2} = 0$.

**Answer 4:**
*   $f(z) = \frac{1}{z-a}$. This function is analytic everywhere except at $z=a$.
*   The curve $C$ is the circle $|z-a|=r$, which encloses the point $z=a$.
*   Thus, Cauchy's Integral Theorem does **not** apply directly.
*   **Parametric form:** $z(t) = a + re^{it}$ for $t \in [0, 2\pi]$.
*   $z'(t) = ire^{it}$.
*   $f(z(t)) = \frac{1}{(a+re^{it}) - a} = \frac{1}{re^{it}} = \frac{1}{r}e^{-it}$.
*   $\int_C \frac{1}{z-a} \, dz = \int_0^{2\pi} \left(\frac{1}{r}e^{-it}\right) (ire^{it}) \, dt = \int_0^{2\pi} i \, dt = i[t]_0^{2\pi} = 2\pi i$.
*   This result is known as the Cauchy Integral Formula for derivatives of order 0.

**Answer 5:**
*   **Path:** $C$ is the circle $|z|=3$, so $L = 2\pi(3) = 6\pi$.
*   **Integrand:** $f(z) = \frac{1}{z^2+4}$.
*   On $|z|=3$, we need to find the maximum modulus $M$.
    *   $|z^2+4| \ge ||z^2| - |-4|| = |3^2 - 4| = |9 - 4| = 5$.
    *   So, $|f(z)| = \left|\frac{1}{z^2+4}\right| \le \frac{1}{5}$. Thus $M = \frac{1}{5}$.
*   **Estimate:**
    $$
    \left| \int_C \frac{1}{z^2+4} \, dz \right| \le M L = \left(\frac{1}{5}\right) (6\pi) = \frac{6\pi}{5}
    $$

---

This module provides the foundational understanding of complex line integrals, which is essential for understanding more advanced concepts like Cauchy's Integral Theorem, Cauchy's Integral Formula, and the Residue Theorem, all of which are crucial for solving problems in electrical science and physical science.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |
