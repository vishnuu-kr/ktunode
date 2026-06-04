---
title: "First evaluation method"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 3: Complex Integration"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba81069e"
status: "completed"
scrapedAt: "2026-05-20T18:41:27.340Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 3: Complex Integration

### Topic: First Evaluation Method

This topic introduces the fundamental method for evaluating complex line integrals, laying the groundwork for more advanced techniques.

---

### Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Understand the definition of a complex line integral.
*   Parametrize a given curve in the complex plane.
*   Evaluate complex line integrals by transforming them into real integrals using parametrization.
*   Distinguish between different types of curves (e.g., line segments, arcs of circles) and their appropriate parametrization.
*   Apply the concept of the first evaluation method to solve problems related to complex line integrals.

---

### 1. Definition of a Complex Line Integral

A complex line integral, denoted as $\int_C f(z) dz$, is the generalization of a real line integral to the complex plane. It represents the integral of a complex-valued function $f(z)$ along a curve $C$ in the complex plane.

**Key Concepts:**

*   **Complex Plane:** A two-dimensional plane where points are represented by complex numbers $z = x + iy$, with $x$ being the real part and $y$ being the imaginary part.
*   **Curve C:** A path in the complex plane. Curves can be simple (not self-intersecting), closed (starting and ending at the same point), or piecewise smooth.
*   **Complex-valued function $f(z)$:** A function that maps a complex number $z$ to another complex number $f(z)$. We can write $f(z) = u(x, y) + iv(x, y)$, where $u$ and $v$ are real-valued functions of $x$ and $y$.
*   **Differential $dz$:** In the complex plane, $dz = dx + i dy$.

**Formal Definition:**
Let $C$ be a piecewise smooth curve parametrized by $z(t) = x(t) + iy(t)$ for $a \le t \le b$. If $f(z)$ is a complex-valued function continuous on $C$, then the complex line integral of $f(z)$ along $C$ is defined as:

$$
\int_C f(z) dz = \int_a^b f(z(t)) z'(t) dt
$$

where $z'(t) = \frac{dz}{dt} = x'(t) + iy'(t)$.

---

### 2. Parametrization of Curves in the Complex Plane

To evaluate a complex line integral, we first need to parametrize the curve $C$ along which we are integrating. Parametrization expresses the complex variable $z$ as a function of a real parameter, usually denoted by $t$.

**General Approach:**

1.  **Identify the curve:** Determine the geometric shape of the curve (e.g., a straight line segment, a circle, an ellipse).
2.  **Express $z$ in terms of a real parameter $t$:** Write $z(t) = x(t) + iy(t)$, where $x(t)$ and $y(t)$ are real-valued functions of $t$.
3.  **Determine the range of the parameter $t$:** This corresponds to the starting and ending points of the curve.
4.  **Calculate the derivative $z'(t)$:** Find $\frac{dz}{dt} = x'(t) + iy'(t)$.
5.  **Substitute into the integral formula:** Replace $f(z)$ with $f(z(t))$ and $dz$ with $z'(t) dt$ in the integral $\int_a^b f(z(t)) z'(t) dt$.
6.  **Evaluate the resulting real integral:** Compute the definite integral with respect to $t$.

**Common Parametrizations:**

*   **Line Segment from $z_1$ to $z_2$:**
    A line segment can be parametrized as:
    $$
    z(t) = z_1 + (z_2 - z_1)t, \quad 0 \le t \le 1
    $$
    Then, $z'(t) = z_2 - z_1$.

    **Example:** Parametrize the line segment from $z_1 = 1 + 2i$ to $z_2 = 3 + 4i$.
    $z(t) = (1 + 2i) + ((3 + 4i) - (1 + 2i))t$
    $z(t) = (1 + 2i) + (2 + 2i)t$
    $z(t) = (1 + 2t) + i(2 + 2t)$, for $0 \le t \le 1$.
    $z'(t) = 2 + 2i$.

*   **Arc of a Circle Centered at the Origin:**
    For a circle of radius $R$ in the complex plane, a counter-clockwise parametrization is:
    $$
    z(t) = R e^{it} = R(\cos t + i \sin t), \quad t_1 \le t \le t_2
    $$
    where $t$ represents the angle in radians. The range $[t_1, t_2]$ defines the portion of the circle.
    Then, $z'(t) = i R e^{it} = i z(t)$.

    **Example:** Parametrize the upper semi-circle of radius 2 centered at the origin, traversed counter-clockwise.
    The upper semi-circle starts at $z = 2$ (angle 0) and ends at $z = -2$ (angle $\pi$).
    $z(t) = 2 e^{it} = 2(\cos t + i \sin t)$, for $0 \le t \le \pi$.
    $z'(t) = 2i e^{it}$.

*   **Arc of a Circle Centered at $z_0$:**
    For a circle of radius $R$ centered at $z_0$, a counter-clockwise parametrization is:
    $$
    z(t) = z_0 + R e^{it} = z_0 + R(\cos t + i \sin t), \quad t_1 \le t \le t_2
    $$
    Then, $z'(t) = i R e^{it}$.

    **Example:** Parametrize the quarter circle of radius 1 centered at $z_0 = 1$ in the first quadrant, traversed counter-clockwise.
    The quarter circle starts at $z = 1+i$ (angle $\pi/2$ relative to the center) and ends at $z = 2$ (angle 0 relative to the center).
    $z(t) = 1 + 1 e^{i(t + \pi/2)} = 1 + i e^{it}$, for $0 \le t \le \pi/2$. (Note: Adjusted for starting at $1+i$).
    Alternatively, we can parametrize directly using angles from the positive real axis relative to the center:
    Start: $1+i$, angle $\pi/4$ relative to $(1,0)$ shifted by $(1,0)$.
    End: $2$, angle $0$ relative to $(1,0)$ shifted by $(1,0)$.
    So, $z(t) = 1 + 1 e^{it}$, for $\pi/4 \ge t \ge 0$ (clockwise) or $0 \le t \le \pi/4$ (counter-clockwise).
    If we want counter-clockwise from $1+i$ to $2$, the angles are $\pi/4$ to $0$ or $2\pi + 0$ to $2\pi + \pi/4$. Let's parametrize from $2$ to $1+i$ first for counter-clockwise.
    $z(t) = 1 + e^{it}$, for $0 \le t \le \pi/4$.
    $z'(t) = i e^{it}$.

---

### 3. Evaluating Complex Line Integrals Using Parametrization (First Evaluation Method)

This method involves transforming the complex line integral into a definite integral of a real-valued function of a real variable $t$.

**Steps:**

1.  **Parametrize the curve $C$:** Express $z$ as $z(t)$ for $a \le t \le b$.
2.  **Calculate $z'(t)$:** Find the derivative of $z(t)$ with respect to $t$.
3.  **Express $f(z)$ in terms of $t$:** Substitute $z(t)$ into $f(z)$.
4.  **Form the integral:** Set up the integral as $\int_a^b f(z(t)) z'(t) dt$.
5.  **Evaluate the real integral:** Calculate the definite integral.

**Example 1: Integrating along a Line Segment**

Evaluate $\int_C z^2 dz$ where $C$ is the line segment from $z=0$ to $z=1+i$.

1.  **Parametrize C:** The line segment from $z_1=0$ to $z_2=1+i$ is parametrized by:
    $z(t) = 0 + (1+i - 0)t = (1+i)t$, for $0 \le t \le 1$.

2.  **Calculate $z'(t)$:**
    $z'(t) = \frac{d}{dt}((1+i)t) = 1+i$.

3.  **Express $f(z)$ in terms of $t$:**
    $f(z) = z^2$. So, $f(z(t)) = ((1+i)t)^2 = (1+i)^2 t^2$.
    $(1+i)^2 = 1^2 + 2(1)(i) + i^2 = 1 + 2i - 1 = 2i$.
    So, $f(z(t)) = 2i t^2$.

4.  **Form the integral:**
    $\int_C z^2 dz = \int_0^1 f(z(t)) z'(t) dt = \int_0^1 (2i t^2) (1+i) dt$.

5.  **Evaluate the real integral:**
    $\int_0^1 2i (1+i) t^2 dt = 2i (1+i) \int_0^1 t^2 dt$
    $= 2i (1+i) \left[\frac{t^3}{3}\right]_0^1$
    $= 2i (1+i) \left(\frac{1^3}{3} - \frac{0^3}{3}\right)$
    $= 2i (1+i) \frac{1}{3}$
    $= \frac{2i}{3} (1+i)$
    $= \frac{2i}{3} + \frac{2i^2}{3}$
    $= \frac{2i}{3} - \frac{2}{3}$
    $= -\frac{2}{3} + \frac{2}{3}i$.

**Example 2: Integrating along a Circular Arc**

Evaluate $\int_C \frac{1}{z} dz$ where $C$ is the unit circle $|z|=1$ traversed counter-clockwise.

1.  **Parametrize C:** The unit circle $|z|=1$ can be parametrized as:
    $z(t) = e^{it} = \cos t + i \sin t$, for $0 \le t \le 2\pi$ (for a full counter-clockwise traversal).

2.  **Calculate $z'(t)$:**
    $z'(t) = \frac{d}{dt}(e^{it}) = i e^{it}$.

3.  **Express $f(z)$ in terms of $t$:**
    $f(z) = \frac{1}{z}$. So, $f(z(t)) = \frac{1}{e^{it}} = e^{-it}$.

4.  **Form the integral:**
    $\int_C \frac{1}{z} dz = \int_0^{2\pi} f(z(t)) z'(t) dt = \int_0^{2\pi} (e^{-it}) (i e^{it}) dt$.

5.  **Evaluate the real integral:**
    $\int_0^{2\pi} i e^{-it} e^{it} dt = \int_0^{2\pi} i e^0 dt = \int_0^{2\pi} i dt$
    $= i [t]_0^{2\pi}$
    $= i (2\pi - 0)$
    $= 2\pi i$.

**Example 3: Piecewise Smooth Curves**

Evaluate $\int_C z dz$ where $C$ is the path from $z=0$ to $z=1$ and then from $z=1$ to $z=1+i$.

The curve $C$ consists of two line segments:
$C_1$: from $0$ to $1$.
$C_2$: from $1$ to $1+i$.

We evaluate the integral over each segment and sum the results.

**For $C_1$ (from $0$ to $1$):**
1.  **Parametrize $C_1$:** $z_1(t) = t$, for $0 \le t \le 1$.
2.  **$z_1'(t)$:** $z_1'(t) = 1$.
3.  **$f(z_1(t))$:** $f(z) = z$, so $f(z_1(t)) = t$.
4.  **Integral over $C_1$:**
    $\int_{C_1} z dz = \int_0^1 t \cdot 1 dt = \int_0^1 t dt = \left[\frac{t^2}{2}\right]_0^1 = \frac{1}{2}$.

**For $C_2$ (from $1$ to $1+i$):**
1.  **Parametrize $C_2$:** $z_2(t) = 1 + it$, for $0 \le t \le 1$. (Alternatively, $z_2(t) = 1 + (1+i - 1)t = 1+it$).
2.  **$z_2'(t)$:** $z_2'(t) = i$.
3.  **$f(z_2(t))$:** $f(z) = z$, so $f(z_2(t)) = 1+it$.
4.  **Integral over $C_2$:**
    $\int_{C_2} z dz = \int_0^1 (1+it) \cdot i dt = \int_0^1 (i + i^2 t) dt = \int_0^1 (i - t) dt$
    $= \left[it - \frac{t^2}{2}\right]_0^1 = (i(1) - \frac{1^2}{2}) - (0 - 0) = i - \frac{1}{2}$.

**Total Integral:**
$\int_C z dz = \int_{C_1} z dz + \int_{C_2} z dz = \frac{1}{2} + (i - \frac{1}{2}) = i$.

---

### 4. Important Points to Remember

*   **Parametrization is Crucial:** The choice of parametrization can affect the form of the integral, but the final result should be independent of the parametrization (as long as it traces the curve in the specified direction).
*   **Direction Matters:** The integral $\int_C f(z) dz$ is sensitive to the direction of traversal of the curve $C$. If the curve is traversed in the opposite direction, the integral's sign changes.
*   **Piecewise Smooth Curves:** For curves composed of multiple segments, evaluate the integral over each segment separately and sum the results.
*   **The Derivative $dz/dt$:** Always remember to include the $z'(t) dt$ term in the integral.
*   **Complex Arithmetic:** Be careful with complex number multiplication and squaring during the evaluation.
*   **The Function $f(z)$:** Ensure you correctly substitute the parametrized $z(t)$ into the function $f(z)$.

---

### Practice Questions

**Question 1:**
Evaluate $\int_C (z + 1) dz$ where $C$ is the line segment from $z=0$ to $z=2i$.

**Question 2:**
Evaluate $\int_C |z|^2 dz$ where $C$ is the circle $|z|=1$ traversed counter-clockwise.

**Question 3:**
Evaluate $\int_C e^z dz$ where $C$ is the curve parametrized by $z(t) = t + it^2$, for $0 \le t \le 1$.

**Question 4:**
Evaluate $\int_C \bar{z} dz$ where $C$ is the boundary of the square with vertices $0, 1, 1+i, i$, traversed counter-clockwise.

---

### Answers to Practice Questions

**Answer 1:**
1.  **Parametrize C:** The line segment from $z_1=0$ to $z_2=2i$ is $z(t) = (2i)t$, for $0 \le t \le 1$.
2.  **$z'(t)$:** $z'(t) = 2i$.
3.  **$f(z(t))$:** $f(z) = z+1$, so $f(z(t)) = 2it + 1$.
4.  **Integral:** $\int_C (z+1) dz = \int_0^1 (2it + 1)(2i) dt$.
5.  **Evaluate:** $\int_0^1 (4i^2 t + 2i) dt = \int_0^1 (-4t + 2i) dt = [-2t^2 + 2it]_0^1 = (-2(1)^2 + 2i(1)) - (0) = -2 + 2i$.

**Answer 2:**
1.  **Parametrize C:** The unit circle is $z(t) = e^{it}$, for $0 \le t \le 2\pi$.
2.  **$z'(t)$:** $z'(t) = ie^{it}$.
3.  **$f(z(t))$:** $f(z) = |z|^2 = z\bar{z}$. So, $f(z(t)) = |e^{it}|^2 = 1$.
4.  **Integral:** $\int_C |z|^2 dz = \int_0^{2\pi} (1)(ie^{it}) dt$.
5.  **Evaluate:** $\int_0^{2\pi} ie^{it} dt = i \int_0^{2\pi} e^{it} dt = i \left[\frac{e^{it}}{i}\right]_0^{2\pi} = [e^{it}]_0^{2\pi} = e^{i2\pi} - e^{i0} = 1 - 1 = 0$.

**Answer 3:**
1.  **Parametrize C:** $z(t) = t + it^2$, for $0 \le t \le 1$.
2.  **$z'(t)$:** $z'(t) = 1 + 2it$.
3.  **$f(z(t))$:** $f(z) = e^z$, so $f(z(t)) = e^{t+it^2}$.
4.  **Integral:** $\int_C e^z dz = \int_0^1 e^{t+it^2}(1 + 2it) dt$.
5.  **Evaluate:** This integral is challenging to evaluate directly by hand in a standard exam setting. However, recall that $e^z$ is an analytic function. For analytic functions, the integral depends only on the endpoints.
    $\int_C e^z dz = [e^z]_0^{1+i} = e^{1+i} - e^0 = e^1 e^i - 1 = e(\cos(1) + i \sin(1)) - 1$.
    If we were forced to evaluate the integral:
    $\int_0^1 e^t e^{it^2} (1+2it) dt$. This involves integration by parts or special techniques.
    However, the fundamental theorem of calculus for complex line integrals states that if $F'(z) = f(z)$, then $\int_C f(z) dz = F(z_b) - F(z_a)$, where $z_a$ and $z_b$ are the start and end points. For $f(z) = e^z$, an antiderivative is $F(z) = e^z$.
    Start point $z_a = z(0) = 0$.
    End point $z_b = z(1) = 1 + i$.
    So, $\int_C e^z dz = e^{1+i} - e^0 = e(\cos(1) + i\sin(1)) - 1$.

**Answer 4:**
The square boundary $C$ consists of four line segments:
$C_1$: from $0$ to $1$ ($z(t) = t$, $0 \le t \le 1$)
$C_2$: from $1$ to $1+i$ ($z(t) = 1+it$, $0 \le t \le 1$)
$C_3$: from $1+i$ to $i$ ($z(t) = 1+i - t + i(-t+1)$ - Let's parametrize differently. From $1+i$ to $i$: $z(t) = 1+i(1-t)$, $0 \le t \le 1$)
$C_4$: from $i$ to $0$ ($z(t) = i(1-t)$, $0 \le t \le 1$)

We evaluate $\int_C \bar{z} dz$ for each segment.

*   **$C_1$ (0 to 1):** $z(t)=t$, $z'(t)=1$. $\bar{z}(t)=t$.
    $\int_0^1 t \cdot 1 dt = [\frac{t^2}{2}]_0^1 = \frac{1}{2}$.

*   **$C_2$ (1 to 1+i):** $z(t)=1+it$, $z'(t)=i$. $\bar{z}(t)=1-it$.
    $\int_0^1 (1-it) i dt = \int_0^1 (i - i^2t) dt = \int_0^1 (i+t) dt = [it + \frac{t^2}{2}]_0^1 = i + \frac{1}{2}$.

*   **$C_3$ (1+i to i):** $z(t)=1+i(1-t)$, $z'(t)=-i$. $\bar{z}(t)=1-i(1-t)$.
    $\int_0^1 (1-i(1-t)) (-i) dt = \int_0^1 (-i + i^2(1-t)) dt = \int_0^1 (-i - (1-t)) dt = \int_0^1 (-i-1+t) dt$
    $= [-it - t + \frac{t^2}{2}]_0^1 = (-i - 1 + \frac{1}{2}) - 0 = -i - \frac{1}{2}$.

*   **$C_4$ (i to 0):** $z(t)=i(1-t)$, $z'(t)=-i$. $\bar{z}(t)=-i(1-t)$.
    $\int_0^1 (-i(1-t)) (-i) dt = \int_0^1 (i^2(1-t)) dt = \int_0^1 -(1-t) dt = \int_0^1 (t-1) dt$
    $= [\frac{t^2}{2} - t]_0^1 = (\frac{1}{2} - 1) - 0 = -\frac{1}{2}$.

**Total Integral:**
$\int_C \bar{z} dz = \frac{1}{2} + (i + \frac{1}{2}) + (-i - \frac{1}{2}) + (-\frac{1}{2}) = 0$.

---
