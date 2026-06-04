---
title: "First evaluation method"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 3: Complex Integration"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35a73"
status: "completed"
scrapedAt: "2026-05-23T16:14:41.462Z"
---
# Mathematics for Electrical Science and Physical Science – 3

## Module 3: Complex Integration

### Topic: First Evaluation Method - Direct Integration

This topic focuses on evaluating complex integrals directly by applying the definition of a complex line integral. This is a fundamental method that builds the intuition for more advanced techniques like Cauchy's Integral Theorem and Cauchy's Integral Formula, which are covered in subsequent topics.

---

### 1. Introduction to Complex Line Integrals

**Key Concept:** A complex line integral is the generalization of a real line integral to a path in the complex plane. It is used to integrate a complex-valued function along a curve in the complex plane.

**Definition:** Let $f(z)$ be a complex-valued function defined on a curve $C$ in the complex plane. Let $z(t) = x(t) + iy(t)$ be a parametric representation of $C$, where $t$ varies from $a$ to $b$. The complex line integral of $f(z)$ along $C$ is defined as:

$$ \int_C f(z) dz = \int_a^b f(z(t)) z'(t) dt $$

where $z'(t) = x'(t) + iy'(t)$ is the derivative of $z(t)$ with respect to $t$.

**Relationship to Real Integrals:** The complex integral can be broken down into two real integrals:

Let $f(z) = u(x, y) + iv(x, y)$. Then,
$$ \int_C f(z) dz = \int_C (u + iv)(dx + i dy) $$
$$ = \int_C (u dx - v dy) + i \int_C (v dx + u dy) $$

If $C$ is parameterized by $z(t) = x(t) + iy(t)$ for $a \le t \le b$, then $dx = x'(t) dt$ and $dy = y'(t) dt$. Substituting these:

$$ \int_C f(z) dz = \int_a^b [u(x(t), y(t)) x'(t) - v(x(t), y(t)) y'(t)] dt + i \int_a^b [v(x(t), y(t)) x'(t) + u(x(t), y(t)) y'(t)] dt $$

This shows that a complex line integral can be evaluated by evaluating two real line integrals.

**Textbook Reference:**
*   **Kreyszig, Chapter 12 (Complex Integration):** Introduces the concept of complex line integrals and their definition.
*   **Zill & Shanahan, Chapter 5 (Complex Integration):** Provides a thorough treatment of complex line integrals and their properties, including the decomposition into real integrals.
*   **Ramana, Chapter 29 (Complex Numbers and Integration):** Explains the formulation of complex line integrals and their evaluation.
*   **Grewal, Chapter 19 (Complex Integration):** Covers the definition and evaluation of complex line integrals.

---

### 2. Steps for Direct Integration

To evaluate a complex integral $\int_C f(z) dz$ using the direct method:

1.  **Parametrize the Curve C:** Find a parametric representation $z(t) = x(t) + iy(t)$ for the curve $C$, specifying the range of the parameter $t$.
2.  **Find the Derivative:** Calculate $z'(t) = \frac{dz}{dt}$.
3.  **Substitute:** Substitute $z(t)$ into the function $f(z)$ to get $f(z(t))$.
4.  **Integrate:** Evaluate the definite integral:
    $$ \int_a^b f(z(t)) z'(t) dt $$
    This will likely involve standard real integration techniques.

---

### 3. Examples of Direct Integration

**Example 1: Integration along a straight line.**

Evaluate $\int_C z^2 dz$, where $C$ is the straight line segment from $z=0$ to $z=1+i$.

**Solution:**

1.  **Parametrize C:** The straight line segment from $0$ to $1+i$ can be parameterized as $z(t) = t(1+i)$ for $0 \le t \le 1$.
    Alternatively, $x(t) = t$ and $y(t) = t$. So $z(t) = t + it$.

2.  **Find the Derivative:** $z'(t) = \frac{dz}{dt} = 1+i$.

3.  **Substitute:** $f(z) = z^2$. So, $f(z(t)) = (t(1+i))^2 = t^2 (1+i)^2 = t^2 (1 + 2i + i^2) = t^2 (1 + 2i - 1) = 2it^2$.

4.  **Integrate:**
    $$ \int_C z^2 dz = \int_0^1 (2it^2) (1+i) dt $$
    $$ = 2i(1+i) \int_0^1 t^2 dt $$
    $$ = 2i(1+i) \left[\frac{t^3}{3}\right]_0^1 $$
    $$ = 2i(1+i) \left(\frac{1}{3} - 0\right) $$
    $$ = \frac{2i(1+i)}{3} = \frac{2i + 2i^2}{3} = \frac{2i - 2}{3} = -\frac{2}{3} + \frac{2}{3}i $$

**Alternative parametrization check:**
$z(t) = t + it$, $0 \le t \le 1$.
$z'(t) = 1 + i$.
$f(z(t)) = (t+it)^2 = t^2(1+i)^2 = t^2(2i) = 2it^2$.
$$ \int_0^1 (2it^2)(1+i) dt = 2i(1+i) \int_0^1 t^2 dt = \frac{2i(1+i)}{3} = -\frac{2}{3} + \frac{2}{3}i $$
The result is the same.

---

**Example 2: Integration along a circular arc.**

Evaluate $\int_C \frac{1}{z} dz$, where $C$ is the unit circle $|z|=1$ traversed counterclockwise.

**Solution:**

1.  **Parametrize C:** The unit circle $|z|=1$ can be parameterized as $z(t) = e^{it}$ for $0 \le t \le 2\pi$.
    This means $x(t) = \cos(t)$ and $y(t) = \sin(t)$.

2.  **Find the Derivative:** $z'(t) = \frac{dz}{dt} = ie^{it}$.

3.  **Substitute:** $f(z) = \frac{1}{z}$. So, $f(z(t)) = \frac{1}{e^{it}} = e^{-it}$.

4.  **Integrate:**
    $$ \int_C \frac{1}{z} dz = \int_0^{2\pi} (e^{-it}) (ie^{it}) dt $$
    $$ = \int_0^{2\pi} i e^{-it+it} dt $$
    $$ = \int_0^{2\pi} i e^0 dt $$
    $$ = \int_0^{2\pi} i dt $$
    $$ = i [t]_0^{2\pi} $$
    $$ = i (2\pi - 0) = 2\pi i $$

---

**Example 3: Integration along a path defined piecewise.**

Evaluate $\int_C z dz$, where $C$ consists of two line segments:
$C_1$: from $z=0$ to $z=1$.
$C_2$: from $z=1$ to $z=1+i$.

**Solution:**

The integral is the sum of the integrals along $C_1$ and $C_2$: $\int_C z dz = \int_{C_1} z dz + \int_{C_2} z dz$.

**For $C_1$ (from 0 to 1):**
1.  **Parametrize $C_1$:** $z(t) = t$ for $0 \le t \le 1$.
2.  **Derivative:** $z'(t) = 1$.
3.  **Substitute:** $f(z) = z$. So, $f(z(t)) = t$.
4.  **Integrate:**
    $$ \int_{C_1} z dz = \int_0^1 t (1) dt = \left[\frac{t^2}{2}\right]_0^1 = \frac{1}{2} $$

**For $C_2$ (from 1 to 1+i):**
1.  **Parametrize $C_2$:** $z(t) = 1 + it$ for $0 \le t \le 1$.
    (Here, $t$ starts from 0 at $z=1$ and goes to 1 at $z=1+i$).
2.  **Derivative:** $z'(t) = i$.
3.  **Substitute:** $f(z) = z$. So, $f(z(t)) = 1 + it$.
4.  **Integrate:**
    $$ \int_{C_2} z dz = \int_0^1 (1+it) (i) dt $$
    $$ = i \int_0^1 (1+it) dt $$
    $$ = i \left[t + i\frac{t^2}{2}\right]_0^1 $$
    $$ = i \left(1 + i\frac{1}{2}\right) $$
    $$ = i + i^2\frac{1}{2} = i - \frac{1}{2} $$

**Total Integral:**
$$ \int_C z dz = \int_{C_1} z dz + \int_{C_2} z dz = \frac{1}{2} + \left(i - \frac{1}{2}\right) = i $$

---

### 4. Learning Outcomes Addressed by this Topic

This topic directly addresses the foundational aspects necessary for understanding and computing complex integrals. While not explicitly computing Fourier Transforms (CO1) or directly using Cauchy's theorems (CO3), it lays the groundwork.

*   **Foundation for CO3:** The ability to directly evaluate integrals is the prerequisite for understanding *why* Cauchy's Integral Theorem and Formula work. By performing direct integration, students grasp the definition of the complex integral and the role of the path.
*   **Conceptual understanding of complex functions:** Evaluating $f(z(t)) z'(t)$ requires understanding the function's behavior along the path, indirectly contributing to the understanding of analyticity (CO2) by showing how functions behave on curves.

---

### 5. Important Points to Remember

*   **Parametrization is Key:** The success of the direct method hinges on correctly parameterizing the curve $C$.
*   **Derivative of Parametrization:** Don't forget to multiply by $z'(t)$.
*   **Range of Parameter:** Ensure the parameter covers the entire curve and its range is correctly used in the definite integral.
*   **Substitution:** Substitute the parametric form of $z$ into $f(z)$ correctly.
*   **Real Integration Techniques:** Be proficient in evaluating standard real definite integrals.
*   **Piecewise Curves:** For curves made of multiple segments, evaluate the integral for each segment and sum the results.
*   **Orientation:** The direction (orientation) of the curve matters. If the curve is traversed in the opposite direction, the integral changes sign.

---

### 6. Practice Questions

1.  Evaluate $\int_C z^3 dz$ where $C$ is the line segment from $z=0$ to $z=2+2i$.
2.  Evaluate $\int_C \bar{z} dz$ where $C$ is the quarter-circle $|z|=1$ in the first quadrant, from $z=1$ to $z=i$.
3.  Evaluate $\int_C e^z dz$ where $C$ is the line segment from $z=0$ to $z=1+i\pi$.
4.  Evaluate $\int_C |z|^2 dz$ where $C$ is the circle $|z|=1$ traversed clockwise.
5.  Evaluate $\int_C (z+1) dz$ where $C$ is the path from $z=0$ to $z=1$ along the real axis and then from $z=1$ to $z=1+i$ parallel to the imaginary axis.

---

### 7. Answers to Practice Questions

1.  **Parametrization:** $z(t) = t(2+2i)$, $0 \le t \le 1$.
    $z'(t) = 2+2i$.
    $f(z(t)) = (t(2+2i))^3 = t^3 (2+2i)^3 = t^3 (8(1+i)^3) = t^3 (8(1+3i+3i^2+i^3)) = t^3 (8(1+3i-3-i)) = t^3 (8(-2+2i)) = 16t^3(-1+i)$.
    Integral: $\int_0^1 16t^3(-1+i)(2+2i) dt = 16(-1+i)(2+2i) \int_0^1 t^3 dt = 32(-1+i)(1+i) \left[\frac{t^4}{4}\right]_0^1$
    $= 32(-1-i+i+i^2) \frac{1}{4} = 32(-1-1) \frac{1}{4} = 32(-2) \frac{1}{4} = -16$.

2.  **Parametrization:** $z(t) = e^{it}$, $0 \le t \le \pi/2$.
    $z'(t) = ie^{it}$.
    $f(z(t)) = \bar{z}(t) = \overline{e^{it}} = e^{-it}$.
    Integral: $\int_0^{\pi/2} e^{-it} (ie^{it}) dt = \int_0^{\pi/2} i dt = i [t]_0^{\pi/2} = i \frac{\pi}{2}$.

3.  **Parametrization:** $z(t) = t + i\pi t$, $0 \le t \le 1$.
    $z'(t) = 1 + i\pi$.
    $f(z(t)) = e^{t+i\pi t} = e^t e^{i\pi t} = e^t (\cos(\pi t) + i\sin(\pi t))$.
    Integral: $\int_0^1 e^t (\cos(\pi t) + i\sin(\pi t)) (1+i\pi) dt$.
    Recall that $\int e^{ax} \cos(bx) dx = \frac{e^{ax}}{a^2+b^2}(a\cos(bx)+b\sin(bx))$ and $\int e^{ax} \sin(bx) dx = \frac{e^{ax}}{a^2+b^2}(a\sin(bx)-b\cos(bx))$.
    Here, the integrand is $e^{(1+i\pi)t}$. The integral is $\left[\frac{e^{(1+i\pi)t}}{1+i\pi}\right]_0^1 = \frac{e^{1+i\pi} - e^0}{1+i\pi} = \frac{e^1 e^{i\pi} - 1}{1+i\pi} = \frac{e(-1) - 1}{1+i\pi} = \frac{-e-1}{1+i\pi}$.
    Multiply by conjugate: $\frac{-(e+1)(1-i\pi)}{(1+i\pi)(1-i\pi)} = \frac{-(e+1)(1-i\pi)}{1+\pi^2} = -\frac{e+1}{1+\pi^2} + i\frac{(e+1)\pi}{1+\pi^2}$.

4.  **Parametrization:** $z(t) = e^{-it}$, $0 \le t \le 2\pi$ (for clockwise traversal).
    $z'(t) = -ie^{-it}$.
    $f(z(t)) = |z(t)|^2 = |e^{-it}|^2 = 1$.
    Integral: $\int_0^{2\pi} 1 (-ie^{-it}) dt = -i \int_0^{2\pi} e^{-it} dt = -i \left[\frac{e^{-it}}{-i}\right]_0^{2\pi} = [e^{-it}]_0^{2\pi} = e^{-2\pi i} - e^0 = 1 - 1 = 0$.

5.  **$C_1$ (0 to 1):** $z(t) = t$, $0 \le t \le 1$. $z'(t) = 1$. $\int_0^1 t (1) dt = [t^2/2]_0^1 = 1/2$.
    **$C_2$ (1 to 1+i):** $z(t) = 1+it$, $0 \le t \le 1$. $z'(t) = i$. $\int_0^1 (1+it+1) (i) dt = \int_0^1 (2+it)i dt = i \int_0^1 (2+it) dt = i [2t + it^2/2]_0^1 = i(2+i/2) = 2i - 1/2$.
    Total: $1/2 + (2i - 1/2) = 2i$.

---

This concludes the notes on the first evaluation method for complex integration. This method is crucial for building a solid understanding of complex integration as a prelude to more powerful theorems.
