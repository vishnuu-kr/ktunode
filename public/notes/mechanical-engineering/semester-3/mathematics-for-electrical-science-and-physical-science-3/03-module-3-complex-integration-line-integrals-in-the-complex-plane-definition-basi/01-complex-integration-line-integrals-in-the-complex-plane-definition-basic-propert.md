---
title: "Complex Integration: Line integrals in the complex plane (Definition & Basic properties)"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 3: Complex Integration: Line integrals in the complex plane (Definition & Basic properties)"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462cab"
status: "completed"
scrapedAt: "2026-05-20T17:50:47.181Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 3: Complex Integration: Line Integrals in the Complex Plane

---

### Topic: Complex Integration: Line Integrals in the Complex Plane (Definition & Basic Properties)

**Course Outcomes Alignment:**
This module directly supports **CO3: Compute complex integrals using Cauchy's integral theorem and Cauchy's integral formula.** While this specific topic focuses on the definition and basic properties, it lays the groundwork for understanding the theorems mentioned in CO3. The understanding of line integrals is fundamental to applying these powerful theorems.

**Learning Outcomes Addressed:**
*   Understand the concept of a contour in the complex plane.
*   Define and evaluate complex line integrals along a given contour.
*   Understand the basic properties of complex line integrals.

---

### 1. Introduction to Complex Integration

Complex integration is a fundamental tool in complex analysis with wide-ranging applications in electrical engineering (e.g., circuit analysis, signal processing) and physical science (e.g., fluid dynamics, quantum mechanics). It extends the concept of real line integrals to functions of a complex variable.

---

### 2. Curves and Contour Integration

**2.1. Curves in the Complex Plane**

A curve $C$ in the complex plane can be represented parametrically by a function $z(t) = x(t) + iy(t)$, where $t$ is a real parameter, typically varying over an interval $[a, b]$.

*   **Continuous Curve:** A curve $z(t)$ is continuous if both $x(t)$ and $y(t)$ are continuous functions of $t$.
*   **Smooth Curve:** A curve $z(t)$ is smooth if $z'(t) = x'(t) + iy'(t)$ exists and is continuous, and $z'(t) \neq 0$ for all $t$ in the interval.
*   **Piecewise Smooth Curve:** A curve is piecewise smooth if it consists of a finite number of smooth curve segments joined end-to-end. The joins are called corners.
*   **Simple Curve:** A curve is simple if it does not intersect itself.
*   **Closed Curve:** A curve $C$ is closed if its endpoints coincide, i.e., $z(a) = z(b)$.

**2.2. Contours**

A **contour** is a piecewise smooth, simple curve. It is the path along which we integrate a complex function.

**Example:**
Consider the curve $z(t) = t + it^2$, for $0 \le t \le 1$.
Here, $x(t) = t$ and $y(t) = t^2$.
$z'(t) = 1 + 2it$. Since $z'(t)$ is continuous and non-zero for $0 \le t \le 1$, this is a smooth curve.
If the interval was $[-1, 1]$, it would be a simple closed curve if we consider the path from $t=-1$ to $t=1$ and then back from $t=1$ to $t=-1$. However, for integration, we typically consider a simple curve, and the direction of traversal is important.

---

### 3. Definition of Complex Line Integral

Let $f(z)$ be a complex-valued function defined on a domain containing a contour $C$. The complex line integral of $f(z)$ along $C$, denoted by $\int_C f(z) dz$, is defined as follows:

If $C$ is parameterized by $z(t) = x(t) + iy(t)$ for $a \le t \le b$, then the integral is given by:

$$ \int_C f(z) dz = \int_a^b f(z(t)) z'(t) dt $$

**Explanation:**

1.  **Parameterization:** We first represent the contour $C$ parametrically using a real variable $t$.
2.  **Function on the Contour:** We substitute the parametric form of $z(t)$ into the function $f(z)$ to get $f(z(t))$, which is a complex-valued function of the real variable $t$.
3.  **Derivative of Parameterization:** We compute the derivative of the parameterization, $z'(t) = x'(t) + iy'(t)$.
4.  **Integration with respect to 't':** The complex line integral is then a definite integral of the product $f(z(t)) z'(t)$ with respect to the real parameter $t$, from the starting value $a$ to the ending value $b$. This is an integral of a complex-valued function of a real variable, which can be split into real and imaginary parts:
    $$ \int_a^b [u(x(t), y(t)) + iv(x(t), y(t))] [x'(t) + iy'(t)] dt $$
    $$ = \int_a^b [u x' - v y'] dt + i \int_a^b [v x' + u y'] dt $$

This definition is analogous to the line integral of a vector field in multivariable calculus. If we let $f(z) = u(x, y) + iv(x, y)$, and $dz = dx + i dy$, the integral can also be written as:

$$ \int_C f(z) dz = \int_C (u + iv)(dx + i dy) = \int_C (u dx - v dy) + i \int_C (v dx + u dy) $$

The terms $(u dx - v dy)$ and $(v dx + u dy)$ are real line integrals of vector fields.

**Key Point:** The value of the complex line integral depends on the function $f(z)$ and the contour $C$, including its direction.

---

### 4. Examples of Complex Line Integrals

**Example 1: Integrating a simple function along a straight line**

**Problem:** Evaluate $\int_C z^2 dz$ where $C$ is the line segment from $z = 0$ to $z = 1 + i$.

**Solution:**
1.  **Parameterize C:** The line segment from $0$ to $1+i$ can be parameterized as $z(t) = t(1+i)$ for $0 \le t \le 1$.
    Alternatively, $z(t) = t + it$ for $0 \le t \le 1$.
    Let's use $z(t) = t + it$.
    Then $x(t) = t$ and $y(t) = t$.
2.  **Find z'(t):** $z'(t) = 1 + i$.
3.  **Find f(z(t)):** $f(z) = z^2$, so $f(z(t)) = (t + it)^2 = t^2 (1+i)^2 = t^2 (1 + 2i + i^2) = t^2 (1 + 2i - 1) = 2it^2$.
4.  **Evaluate the integral:**
    $$ \int_C z^2 dz = \int_0^1 f(z(t)) z'(t) dt = \int_0^1 (2it^2)(1+i) dt $$
    $$ = 2i(1+i) \int_0^1 t^2 dt = 2i(1+i) \left[ \frac{t^3}{3} \right]_0^1 $$
    $$ = 2i(1+i) \left( \frac{1}{3} - 0 \right) = \frac{2i(1+i)}{3} = \frac{2i + 2i^2}{3} = \frac{2i - 2}{3} = -\frac{2}{3} + i\frac{2}{3} $$

**Example 2: Integrating along a circular arc**

**Problem:** Evaluate $\int_C \frac{1}{z} dz$ where $C$ is the unit circle $|z|=1$ traversed counterclockwise.

**Solution:**
1.  **Parameterize C:** The unit circle $|z|=1$ can be parameterized as $z(t) = e^{it} = \cos(t) + i \sin(t)$ for $0 \le t \le 2\pi$.
2.  **Find z'(t):** $z'(t) = ie^{it}$.
3.  **Find f(z(t)):** $f(z) = \frac{1}{z}$, so $f(z(t)) = \frac{1}{e^{it}} = e^{-it}$.
4.  **Evaluate the integral:**
    $$ \int_C \frac{1}{z} dz = \int_0^{2\pi} f(z(t)) z'(t) dt = \int_0^{2\pi} (e^{-it})(ie^{it}) dt $$
    $$ = \int_0^{2\pi} i e^{-it} e^{it} dt = \int_0^{2\pi} i e^0 dt = \int_0^{2\pi} i dt $$
    $$ = i [t]_0^{2\pi} = i (2\pi - 0) = 2\pi i $$

This result is particularly important and will be revisited with Cauchy's integral formula.

---

### 5. Basic Properties of Complex Line Integrals

Let $C$ and $C_1, C_2$ be contours, and $f(z), g(z)$ be complex-valued functions.

1.  **Linearity:** For complex constants $\alpha$ and $\beta$:
    $$ \int_C [\alpha f(z) + \beta g(z)] dz = \alpha \int_C f(z) dz + \beta \int_C g(z) dz $$
    This property follows directly from the linearity of real integrals.

2.  **Additivity of Contour:** If $C$ is a contour that is the union of two contours $C_1$ and $C_2$ traversed in sequence (i.e., the endpoint of $C_1$ is the starting point of $C_2$), then:
    $$ \int_C f(z) dz = \int_{C_1} f(z) dz + \int_{C_2} f(z) dz $$
    This means that if $C = C_1 \cup C_2$ with $C_1$ ending where $C_2$ begins, the integral over $C$ is the sum of the integrals over $C_1$ and $C_2$.

3.  **Reversal of Path:** If $-C$ denotes the contour $C$ traversed in the opposite direction, then:
    $$ \int_{-C} f(z) dz = - \int_C f(z) dz $$
    If $C$ is parameterized by $z(t)$ for $a \le t \le b$, then $-C$ can be parameterized by $w(\tau) = z(a+b-\tau)$ for $a \le \tau \le b$.

4.  **Integral Inequality (ML-inequality):** If $|f(z)| \le M$ for all $z$ on a contour $C$ of length $L$, then:
    $$ \left| \int_C f(z) dz \right| \le ML $$
    **Proof:**
    $$ \left| \int_C f(z) dz \right| = \left| \int_a^b f(z(t)) z'(t) dt \right| $$
    Using the property that the magnitude of an integral is less than or equal to the integral of the magnitude:
    $$ \le \int_a^b |f(z(t)) z'(t)| dt = \int_a^b |f(z(t))| |z'(t)| dt $$
    Since $|f(z)| \le M$ for $z$ on $C$, we have $|f(z(t))| \le M$.
    $$ \le \int_a^b M |z'(t)| dt = M \int_a^b |z'(t)| dt $$
    The integral $\int_a^b |z'(t)| dt$ is the length of the contour $C$, denoted by $L$.
    $$ = ML $$
    Therefore, $\left| \int_C f(z) dz \right| \le ML$.

**Important:** The ML-inequality is a powerful tool for estimating the magnitude of complex line integrals, especially when direct computation is difficult or impossible.

---

### 6. Important Points to Remember

*   **Contour:** A contour is a piecewise smooth, simple curve. Its direction matters for integration.
*   **Parameterization:** The key to evaluating a complex line integral is to parameterize the contour and substitute into the integral definition.
*   **Derivative of Parameterization:** Remember to include $z'(t) dt$ in the integral.
*   **Properties:** Linearity, additivity of contours, and path reversal are fundamental properties.
*   **ML-Inequality:** Useful for bounding the magnitude of an integral.
*   **Non-Path Independence (for general functions):** Unlike real line integrals of conservative vector fields, complex line integrals are generally *not* path-independent. The value of $\int_C f(z) dz$ depends on the specific contour $C$, not just its endpoints, unless $f(z)$ has certain properties (like being analytic everywhere). This path dependence is crucial for many theorems in complex analysis.

---

### 7. Practice Questions and Exercises

**Question 1:** Evaluate $\int_C z dz$ where $C$ is the line segment from $z=1$ to $z=2+i$.

**Solution:**
1.  **Parameterize C:** $z(t) = (1+t(1+i))$ for $0 \le t \le 1$.
    $z(t) = (1+t) + it$.
2.  **Find z'(t):** $z'(t) = 1 + i$.
3.  **Find f(z(t)):** $f(z) = z$, so $f(z(t)) = (1+t) + it$.
4.  **Evaluate the integral:**
    $$ \int_C z dz = \int_0^1 [(1+t) + it](1+i) dt $$
    $$ = (1+i) \int_0^1 (1+t+it+it^2) dt $$
    $$ = (1+i) \int_0^1 (1+t+i(t+t^2)) dt $$
    $$ = (1+i) \left[ t + \frac{t^2}{2} + i\left(\frac{t^2}{2} + \frac{t^3}{3}\right) \right]_0^1 $$
    $$ = (1+i) \left[ 1 + \frac{1}{2} + i\left(\frac{1}{2} + \frac{1}{3}\right) \right] $$
    $$ = (1+i) \left[ \frac{3}{2} + i\left(\frac{3+2}{6}\right) \right] = (1+i) \left[ \frac{3}{2} + i\frac{5}{6} \right] $$
    $$ = \frac{3}{2} + i\frac{5}{6} + i\frac{3}{2} + i^2\frac{5}{6} $$
    $$ = \frac{3}{2} - \frac{5}{6} + i\left(\frac{5}{6} + \frac{3}{2}\right) $$
    $$ = \frac{9-5}{6} + i\left(\frac{5+9}{6}\right) = \frac{4}{6} + i\frac{14}{6} = \frac{2}{3} + i\frac{7}{3} $$

**Question 2:** Evaluate $\int_C z^2 dz$ where $C$ is the circle $|z|=1$ traversed counterclockwise.

**Solution:**
1.  **Parameterize C:** $z(t) = e^{it}$ for $0 \le t \le 2\pi$.
2.  **Find z'(t):** $z'(t) = ie^{it}$.
3.  **Find f(z(t)):** $f(z) = z^2$, so $f(z(t)) = (e^{it})^2 = e^{2it}$.
4.  **Evaluate the integral:**
    $$ \int_C z^2 dz = \int_0^{2\pi} (e^{2it})(ie^{it}) dt = \int_0^{2\pi} ie^{3it} dt $$
    $$ = i \left[ \frac{e^{3it}}{3i} \right]_0^{2\pi} = \frac{1}{3} [e^{3it}]_0^{2\pi} $$
    $$ = \frac{1}{3} (e^{i6\pi} - e^0) = \frac{1}{3} (1 - 1) = 0 $$

**Question 3 (ML-inequality application):** Let $C$ be the circle $|z|=2$ traversed counterclockwise. Estimate the value of $\left| \int_C \frac{e^z}{z^2+1} dz \right|$.

**Solution:**
1.  **Contour C:** Circle $|z|=2$. Its length is $L = 2\pi r = 2\pi(2) = 4\pi$.
2.  **Function f(z):** $f(z) = \frac{e^z}{z^2+1}$.
3.  **Find an upper bound M for |f(z)| on C:**
    On $|z|=2$, $|e^z| = |e^{x+iy}| = |e^x| |e^{iy}| = e^x$. The maximum value of $x$ on $|z|=2$ (i.e., $x^2+y^2=4$) is $x=2$ (when $y=0$). So, $|e^z| \le e^2$.
    For the denominator, $|z^2+1|$. By the reverse triangle inequality, $|z^2+1| \ge ||z^2| - 1| = |4 - 1| = 3$.
    So, $|f(z)| = \left| \frac{e^z}{z^2+1} \right| \le \frac{|e^z|}{|z^2+1|} \le \frac{e^2}{3}$.
    Therefore, we can choose $M = \frac{e^2}{3}$.
4.  **Apply ML-inequality:**
    $$ \left| \int_C \frac{e^z}{z^2+1} dz \right| \le ML = \left(\frac{e^2}{3}\right) (4\pi) = \frac{4\pi e^2}{3} $$
    The integral is bounded by $\frac{4\pi e^2}{3}$.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |


### 8. References

*   **Kreyszig, E. (2016). *Advanced Engineering Mathematics* (10th ed.). John Wiley & Sons.**
    *   Chapter 12, Section 12.3 (Complex Integration) covers the definition of line integrals and basic properties.
*   **Zill, D. G., & Shanahan, P. D. (2015). *Complex Analysis* (3rd ed.). Jones & Bartlett Learning.**
    *   Chapter 4, Section 4.1 (Definite Integrals) provides a thorough treatment of contour integrals, their definitions, parameterization, and examples.
*   **Ramana, B. V. (2023). *Higher Engineering Mathematics* (39th ed.). McGraw-Hill Education.**
    *   While specific section numbers might vary by edition, look for chapters on complex variables and contour integration.
*   **Grewal, B. S. (2018). *Higher Engineering Mathematics* (44th ed.). Khanna Publishers.**
    *   Similar to Ramana, refer to chapters on complex analysis for definitions and properties of contour integrals.

---
This concludes the notes on the definition and basic properties of complex line integrals. The subsequent modules will build upon these foundations to explore more advanced concepts like Cauchy's theorems and their applications.