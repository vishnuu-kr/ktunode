---
title: "Line integrals in the complex plane (Definition & Basic properties)"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 3: Complex Integration"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35a72"
status: "completed"
scrapedAt: "2026-05-23T16:14:40.794Z"
---
# Mathematics for Electrical Science and Physical Science – 3

## Module 3: Complex Integration

### Topic: Line Integrals in the Complex Plane (Definition & Basic Properties)

---

### **1. Introduction: The Need for Complex Line Integrals**

In electrical and physical sciences, many phenomena are modeled using differential equations, and their solutions often involve integration. When dealing with phenomena that have oscillatory or wave-like behavior, or when analyzing systems in the frequency domain, complex numbers and functions become indispensable. Complex line integrals provide a powerful tool to evaluate such integrals, which arise naturally in areas like:

*   **Electromagnetism:** Calculating potentials, fields, and work done by forces along paths.
*   **Fluid Dynamics:** Analyzing fluid flow and circulation.
*   **Signal Processing:** Understanding frequency response and system analysis.
*   **Quantum Mechanics:** Evaluating path integrals.

This topic lays the foundation for understanding more advanced concepts like Cauchy's Integral Theorem and Cauchy's Integral Formula, which are crucial for solving a vast array of problems in these fields.

---

### **2. Key Concepts and Definitions**

#### **2.1. Curves in the Complex Plane**

A **curve** in the complex plane is a set of points $z = x + iy$ where $x$ and $y$ are functions of a real parameter $t$, say $x = x(t)$ and $y = y(t)$. This can be represented as a complex-valued function of a real variable:

$z(t) = x(t) + iy(t)$, where $t \in [a, b]$.

*   **Parametrization:** The function $z(t)$ is called a parametrization of the curve.
*   **Smooth Curve:** A curve is called **smooth** if $z'(t) = x'(t) + iy'(t)$ exists and is continuous and non-zero for all $t \in [a, b]$. If $z'(t) = 0$ at some points, it's a piecewise smooth curve.
*   **Contour:** A **contour** is a piecewise smooth curve. Most of the complex integration we will perform is along contours.
*   **Direction:** The parameter $t$ typically dictates the direction along the curve. If $t$ increases from $a$ to $b$, we traverse the curve in a specific direction.

**Example:**
*   A straight line segment from $z_1$ to $z_2$: $z(t) = z_1 + t(z_2 - z_1)$, for $t \in [0, 1]$.
*   A circle of radius $R$ centered at $z_0$: $z(t) = z_0 + Re^{it}$, for $t \in [0, 2\pi]$.

*(Refer to Kreyszig, 10th ed., Section 7.1, for a detailed discussion on curves and contours.)*

#### **2.2. Complex Line Integral**

Let $f(z)$ be a complex-valued function defined on a curve $C$. The **complex line integral** of $f(z)$ along $C$ is defined using a Riemann sum, similar to real line integrals. If $C$ is parametrized by $z(t)$ for $t \in [a, b]$, and $f(z)$ is continuous on $C$, the line integral is defined as:

$$ \int_C f(z) \, dz = \lim_{n \to \infty} \sum_{k=1}^n f(z_k^*) \Delta z_k $$

where $z_k^*$ is a point on the $k$-th subinterval of $C$, and $\Delta z_k = z(t_k) - z(t_{k-1})$.

**Integral Representation using Parametrization:**

A more practical way to compute complex line integrals is by reducing them to definite integrals of real-valued functions. If $f(z)$ is continuous on a contour $C$ parametrized by $z(t) = x(t) + iy(t)$ for $t \in [a, b]$, then:

$$ \int_C f(z) \, dz = \int_a^b f(z(t)) z'(t) \, dt $$

This is the fundamental formula for evaluating complex line integrals. Here, $z'(t) = x'(t) + iy'(t)$, and $f(z(t))$ will be a complex-valued function of $t$. The integral on the right is a standard definite integral of a complex-valued function of a real variable, which is evaluated by integrating its real and imaginary parts separately.

Let $f(z) = u(x, y) + iv(x, y)$ and $z(t) = x(t) + iy(t)$. Then $dz = z'(t) dt = (x'(t) + iy'(t)) dt$.
The integral becomes:

$$ \int_C f(z) \, dz = \int_a^b [u(x(t), y(t)) + iv(x(t), y(t))] [x'(t) + iy'(t)] \, dt $$

$$ = \int_a^b [u x'(t) - v y'(t)] \, dt + i \int_a^b [v x'(t) + u y'(t)] \, dt $$

**Example:** Evaluate $\int_C z^2 \, dz$ where $C$ is the line segment from $0$ to $1 + i$.

*   **Parametrization of C:** $z(t) = t(1+i)$, for $t \in [0, 1]$.
*   **Derivative:** $z'(t) = 1+i$.
*   **Function:** $f(z) = z^2$. So, $f(z(t)) = (t(1+i))^2 = t^2(1+i)^2 = t^2(1 + 2i - 1) = 2it^2$.

Now, substitute into the integral formula:
$$ \int_C z^2 \, dz = \int_0^1 f(z(t)) z'(t) \, dt = \int_0^1 (2it^2)(1+i) \, dt $$
$$ = 2i(1+i) \int_0^1 t^2 \, dt = 2i(1+i) \left[ \frac{t^3}{3} \right]_0^1 $$
$$ = 2i(1+i) \left( \frac{1}{3} \right) = \frac{2i + 2i^2}{3} = \frac{-2 + 2i}{3} $$

*(Refer to Zill & Shanahan, 3rd ed., Chapter 5, for detailed coverage of line integrals.)*
*(Refer to Ramana, 39th ed., Chapter 18, and Grewal, 44th ed., Chapter 16, for real line integrals, which serve as a foundation.)*

---

### **3. Basic Properties of Complex Line Integrals**

These properties are analogous to those of definite integrals in real calculus and are essential for manipulating and simplifying complex line integrals.

#### **3.1. Linearity**

For any complex numbers $\alpha$ and $\beta$, and functions $f(z)$ and $g(z)$ integrable along $C$:

$$ \int_C (\alpha f(z) + \beta g(z)) \, dz = \alpha \int_C f(z) \, dz + \beta \int_C g(z) \, dz $$

**Example:** $\int_C (2z + 3) \, dz = 2 \int_C z \, dz + 3 \int_C 1 \, dz$.

#### **3.2. Additivity over Paths**

If $C_1$ and $C_2$ are two contours such that the endpoint of $C_1$ is the starting point of $C_2$, then the integral along the combined path $C_1 + C_2$ is the sum of the integrals along $C_1$ and $C_2$.

$$ \int_{C_1 + C_2} f(z) \, dz = \int_{C_1} f(z) \, dz + \int_{C_2} f(z) \, dz $$

**Example:** If $C_1$ is the segment from 0 to 1 and $C_2$ is the segment from 1 to $1+i$, then $\int_{C_1+C_2} z \, dz = \int_{C_1} z \, dz + \int_{C_2} z \, dz$.

#### **3.3. Orientation of the Path**

If $-C$ denotes the curve $C$ traversed in the opposite direction, then:

$$ \int_{-C} f(z) \, dz = - \int_C f(z) \, dz $$

If $C$ is parametrized by $z(t)$ for $t \in [a, b]$, then $-C$ can be parametrized by $\tilde{z}(t) = z(a+b-t)$ for $t \in [a, b]$.
Then $\tilde{z}'(t) = z'(a+b-t) \cdot (-1) = -z'(a+b-t)$.
$$ \int_{-C} f(z) \, dz = \int_a^b f(\tilde{z}(t)) \tilde{z}'(t) \, dt = \int_a^b f(z(a+b-t)) (-z'(a+b-t)) \, dt $$
Let $s = a+b-t$, so $ds = -dt$. When $t=a$, $s=b$. When $t=b$, $s=a$.
$$ = \int_b^a f(z(s)) (-z'(s)) (-ds) = \int_b^a f(z(s)) z'(s) \, ds = - \int_a^b f(z(s)) z'(s) \, ds = - \int_C f(z) \, dz $$

**Example:** The integral along the circle $|z|=1$ from $z=1$ to $z=-1$ (upper semi-circle) is different from the integral along the same circle from $z=-1$ to $z=1$ (lower semi-circle).

#### **3.4. Upper Bound for the Modulus of the Integral (ML-Inequality)**

Let $M$ be an upper bound for $|f(z)|$ on the contour $C$, i.e., $|f(z)| \leq M$ for all $z \in C$. Let $L$ be the length of the contour $C$. Then:

$$ \left| \int_C f(z) \, dz \right| \leq ML $$

**Proof:**
Let $C$ be parametrized by $z(t)$ for $t \in [a, b]$.
$$ \left| \int_C f(z) \, dz \right| = \left| \int_a^b f(z(t)) z'(t) \, dt \right| $$
Using the property that $|\int F(t) dt| \leq \int |F(t)| dt$ for a complex-valued function of a real variable $F(t)$:
$$ \leq \int_a^b |f(z(t)) z'(t)| \, dt = \int_a^b |f(z(t))| |z'(t)| \, dt $$
Since $|f(z(t))| \leq M$ for all $t$, and $|z'(t)| dt$ is the infinitesimal arc length $ds$ along the curve:
$$ \leq \int_a^b M |z'(t)| \, dt = M \int_a^b |z'(t)| \, dt $$
The integral $\int_a^b |z'(t)| \, dt$ is the arc length $L$ of the curve $C$.
$$ \leq ML $$

**Example:** Estimate the magnitude of the integral $\int_C \frac{e^z}{z^2+1} \, dz$ where $C$ is the quarter circle $|z|=2$ in the first quadrant, from $z=2$ to $z=2i$.

*   **Curve C:** $|z|=2$, $0 \leq \arg(z) \leq \pi/2$.
*   **Length of C:** $L = \frac{1}{4} (2\pi \cdot 2) = \pi$.
*   **Function:** $f(z) = \frac{e^z}{z^2+1}$.
*   **Bound M:** For $z$ on $C$, $|z|=2$.
    *   $|e^z| = |e^{x+iy}| = e^x$. On $C$, $x$ varies from 2 to 0. The maximum value of $e^x$ is $e^2$ (at $z=2$).
    *   $|z^2+1| \geq ||z|^2 - 1| = |2^2 - 1| = |4-1| = 3$ (by reverse triangle inequality).
    *   So, $|f(z)| = \frac{|e^z|}{|z^2+1|} \leq \frac{e^2}{3}$. Thus, $M = \frac{e^2}{3}$.

Using the ML-inequality:
$$ \left| \int_C \frac{e^z}{z^2+1} \, dz \right| \leq ML = \frac{e^2}{3} \cdot \pi = \frac{\pi e^2}{3} $$

*(Refer to Kreyszig, 10th ed., Section 7.3, for the ML-inequality.)*
*(Refer to Zill & Shanahan, 3rd ed., Chapter 5, for general properties.)*

#### **3.5. Dependence on the Path**

The value of a line integral can depend on the specific path taken between two points. However, if the function is "well-behaved" (analytic) in a simply connected domain, the integral might be path-independent. This concept is explored further in Cauchy's Integral Theorem.

---

### **4. Learning Outcomes Addressed**

*   **CO1: Determine the Fourier transforms of functions and apply them to solve problems arising in engineering. (Knowledge Level: K3)**
    *   While this topic directly deals with complex line integrals, the foundation laid here is essential for Fourier analysis. Fourier transforms often involve integrals of complex exponentials. Understanding how to integrate complex functions along paths is a prerequisite for Fourier analysis techniques.

*   **CO2: Understand the analyticity of complex functions and apply it in conformal mapping. (Knowledge Level: K3)**
    *   The concept of analyticity is central to complex analysis. Line integrals become significantly simpler when the integrand is analytic. This topic introduces the basic tools for integration, which will be extended by the properties of analytic functions.

*   **CO3: Compute complex integrals using Cauchy's integral theorem and Cauchy's integral formula. (Knowledge Level: K3)**
    *   This topic is the **direct precursor** to Cauchy's Integral Theorem and Formula. The ability to define and compute line integrals is the fundamental skill required to understand and apply these powerful theorems. The properties discussed here, like path dependence, highlight why theorems like Cauchy's are so important.

*   **CO4: Understand the series expansion of complex function about a singularity and apply residue theorem to compute real integrals. (Knowledge Level: K3)**
    *   Similar to CO1 and CO3, understanding complex line integrals is a building block for the Residue Theorem. The Residue Theorem often involves integrating a function around a closed contour, which relies heavily on the principles of complex line integration.

---

### **5. Practice Questions / Exercises**

**Question 1:** Evaluate $\int_C z \, dz$ where $C$ is the quarter circle $|z|=1$ in the first quadrant, parametrized by $z(t) = e^{it}$ for $t \in [0, \pi/2]$.

**Question 2:** Evaluate $\int_C \bar{z} \, dz$ where $C$ is the square with vertices $0, 1, 1+i, i$ traversed counterclockwise.

**Question 3:** Let $C$ be the line segment from $z_1 = 1+i$ to $z_2 = 3+2i$. Evaluate $\int_C (2z+1) \, dz$.

**Question 4:** Estimate the magnitude of $\int_C e^{z^2} \, dz$ where $C$ is the arc of the circle $|z|=1$ from $z=1$ to $z=i$.

---

### **6. Answers to Practice Questions**

**Answer 1:**
*   $z(t) = e^{it}$, $z'(t) = ie^{it}$.
*   $\int_C z \, dz = \int_0^{\pi/2} e^{it} (ie^{it}) \, dt = i \int_0^{\pi/2} e^{2it} \, dt$
*   $= i \left[ \frac{e^{2it}}{2i} \right]_0^{\pi/2} = \frac{1}{2} [e^{i\pi} - e^0] = \frac{1}{2} [-1 - 1] = -1$.

**Answer 2:**
This integral can be split into four line segments.
*   $C_1$: from 0 to 1. $z(t) = t$, $t \in [0, 1]$, $dz = dt$. $\int_{C_1} \bar{z} \, dz = \int_0^1 t \, dt = \frac{1}{2}$.
*   $C_2$: from 1 to $1+i$. $z(t) = 1+it$, $t \in [0, 1]$, $dz = i \, dt$. $\int_{C_2} \bar{z} \, dz = \int_0^1 (1-it) (i \, dt) = i \int_0^1 (1-it) \, dt = i [t - \frac{1}{2}it^2]_0^1 = i(1 - \frac{1}{2}i) = i + \frac{1}{2}$.
*   $C_3$: from $1+i$ to $i$. $z(t) = 1-t+i$, $t \in [0, 1]$, $dz = -dt$. $\int_{C_3} \bar{z} \, dz = \int_0^1 (1-t-i) (-dt) = -\int_0^1 (1-t-i) \, dt = -[t - \frac{1}{2}t^2 - it]_0^1 = -(1 - \frac{1}{2} - i) = -(\frac{1}{2} - i) = -\frac{1}{2} + i$.
*   $C_4$: from $i$ to 0. $z(t) = i(1-t)$, $t \in [0, 1]$, $dz = -i \, dt$. $\int_{C_4} \bar{z} \, dz = \int_0^1 (-it(1-t)) (-i \, dt) = \int_0^1 -t(1-t) \, dt = -\int_0^1 (t-t^2) \, dt = -[\frac{1}{2}t^2 - \frac{1}{3}t^3]_0^1 = -(\frac{1}{2} - \frac{1}{3}) = -\frac{1}{6}$.

Total integral = $\frac{1}{2} + (i + \frac{1}{2}) + (-\frac{1}{2} + i) - \frac{1}{6} = \frac{1}{2} + 2i - \frac{1}{6} = \frac{3-1}{6} + 2i = \frac{2}{6} + 2i = \frac{1}{3} + 2i$.

Alternatively, note that $f(z) = \bar{z}$ is not analytic. The integral is path-dependent.

**Answer 3:**
Let $f(z) = 2z+1$. This function is analytic. We can use the antiderivative.
The antiderivative of $f(z) = 2z+1$ is $F(z) = z^2 + z$.
Using the property for analytic functions (which will be formally established by the Fundamental Theorem of Contour Integration, a consequence of Cauchy's Theorem), the integral from $z_1$ to $z_2$ is $F(z_2) - F(z_1)$.
$F(z_2) = F(3+2i) = (3+2i)^2 + (3+2i) = (9 + 12i - 4) + (3+2i) = (5+12i) + (3+2i) = 8+14i$.
$F(z_1) = F(1+i) = (1+i)^2 + (1+i) = (1 + 2i - 1) + (1+i) = 2i + 1+i = 1+3i$.
$\int_C (2z+1) \, dz = (8+14i) - (1+3i) = 7+11i$.

**Answer 4:**
*   **Curve C:** Arc of $|z|=1$ from $z=1$ to $z=i$. This is a quarter circle.
*   **Length of C:** $L = \frac{1}{4}(2\pi \cdot 1) = \frac{\pi}{2}$.
*   **Function:** $f(z) = e^{z^2}$.
*   **Bound M:** For $z$ on $C$, $|z|=1$. Let $z = e^{it} = \cos t + i \sin t$ for $t \in [0, \pi/2]$.
    *   $z^2 = (e^{it})^2 = e^{i2t} = \cos(2t) + i \sin(2t)$.
    *   $|e^{z^2}| = |e^{\cos(2t) + i \sin(2t)}| = e^{\cos(2t)}$.
    *   For $t \in [0, \pi/2]$, $2t \in [0, \pi]$. The cosine function ranges from 1 (at $2t=0$, i.e., $t=0, z=1$) to -1 (at $2t=\pi$, i.e., $t=\pi/2, z=i$).
    *   The maximum value of $e^{\cos(2t)}$ occurs when $\cos(2t)$ is maximum, which is 1. So, the maximum value is $e^1 = e$.
    *   Thus, $M=e$.

Using the ML-inequality:
$$ \left| \int_C e^{z^2} \, dz \right| \leq ML = e \cdot \frac{\pi}{2} = \frac{\pi e}{2} $$

---

### **7. Important Points to Remember**

*   **Parametrization is Key:** Most complex line integrals are evaluated by transforming them into definite integrals of real-variable functions using a suitable parametrization of the curve.
*   **Derivative Matters:** Remember to calculate $z'(t)$ correctly when using the formula $\int_C f(z) \, dz = \int_a^b f(z(t)) z'(t) \, dt$.
*   **ML-Inequality:** This is a powerful tool for estimating the magnitude of integrals without necessarily computing them. It's crucial for proving theorems and bounding errors.
*   **Path Dependence:** The value of a line integral can depend on the path taken, especially for non-analytic functions. This is a motivator for the path-independence properties of integrals of analytic functions.
*   **Reversing Direction:** Negating the integral is equivalent to traversing the curve in the opposite direction.

---
