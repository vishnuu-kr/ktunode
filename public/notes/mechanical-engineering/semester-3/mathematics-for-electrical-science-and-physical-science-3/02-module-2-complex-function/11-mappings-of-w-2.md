---
title: "Mappings of w= 𝑧2"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 2: Complex Function"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462ca6"
status: "completed"
scrapedAt: "2026-05-20T17:50:44.376Z"
---
# Mathematics for Electrical Science and Physical Science – 3

## Module 2: Complex Functions

### Topic: Mappings of $w = z^2$

This topic explores how the complex function $w = z^2$ transforms geometric shapes and regions in the $z$-plane (complex plane) to the $w$-plane. Understanding these mappings is crucial for applications in conformal mapping, which is a core concept in complex analysis and has significant relevance in various engineering fields, as outlined in Course Outcome CO2.

---

### 1. Introduction to Mappings in the Complex Plane

**Key Concept:** A mapping (or transformation) in the complex plane is a rule that assigns to each complex number $z = x + iy$ in one region (the $z$-plane) another complex number $w = u + iv$ in another region (the $w$-plane).

**Definition:** A complex function $w = f(z)$ defines a mapping from the $z$-plane to the $w$-plane. If $z = x + iy$ and $w = u + iv$, then $u$ and $v$ are functions of $x$ and $y$: $u = u(x, y)$ and $v = v(x, y)$.

**Relevance to CO2:** Mappings are fundamental to understanding conformal mapping, which is the subject of CO2. Conformal mappings preserve angles between curves and are widely used in solving boundary value problems in physics and engineering.

**References:**
*   **Kreyszig:** Chapter 14 introduces complex functions and mappings.
*   **Zill & Shanahan:** Chapter 1 discusses complex functions and their geometric interpretation.
*   **Ramana:** Chapter 32 covers complex variables and mappings.
*   **Grewal:** Chapter 14 deals with complex functions and their properties, including mappings.

---

### 2. The Mapping $w = z^2$

**Key Concept:** The function $w = z^2$ is a fundamental example of a complex mapping that distorts geometric shapes in a predictable way.

**Definition:** For a complex number $z = x + iy$, the mapping $w = z^2$ is defined as:
$w = (x + iy)^2 = x^2 + 2ixy + (iy)^2 = x^2 + 2ixy - y^2$
Therefore, the real and imaginary parts of $w$ are:
$u(x, y) = x^2 - y^2$
$v(x, y) = 2xy$

**Polar Form Analysis:**
Let $z = r e^{i\theta}$. Then,
$w = z^2 = (r e^{i\theta})^2 = r^2 e^{i(2\theta)}$

This means:
*   The magnitude of $w$ is $|w| = r^2$. If $r$ is the distance from the origin in the $z$-plane, the distance from the origin in the $w$-plane is the square of that distance.
*   The argument of $w$ is $\arg(w) = 2\arg(z)$. If $\theta$ is the angle with the positive real axis in the $z$-plane, the angle in the $w$-plane is twice that angle.

**Important Point:** The doubling of the argument is crucial for understanding how regions are mapped. A full circle of $2\pi$ in the $z$-plane's argument maps to two full circles of $2\pi$ (i.e., $4\pi$) in the $w$-plane's argument.

---

### 3. Mappings of Specific Geometric Shapes under $w = z^2$

#### 3.1. Lines

**a) Lines parallel to the real axis ($y = c$, where $c$ is a constant):**
Let $z = x + ic$.
$w = (x + ic)^2 = x^2 - c^2 + i(2xc)$
Here, $u = x^2 - c^2$ and $v = 2xc$.
From $v = 2xc$, we have $x = v/(2c)$ (assuming $c \neq 0$).
Substituting this into the expression for $u$:
$u = \left(\frac{v}{2c}\right)^2 - c^2 = \frac{v^2}{4c^2} - c^2$
$4c^2 u = v^2 - 4c^4$
$v^2 = 4c^2 u + 4c^4$
$v^2 = 4c^2 (u + c^2)$

This is the equation of a **parabola** opening to the right with its vertex at $(-c^2, 0)$ in the $w$-plane.

*   **If $c = 0$ (the real axis):** $y = 0 \implies z = x$. Then $w = x^2$. This maps the real axis to the non-negative real axis in the $w$-plane. $u = x^2$, $v = 0$.
*   **If $c > 0$:** The line $y=c$ maps to a parabola.
*   **If $c < 0$:** The line $y=c$ also maps to a parabola. The sign of $c$ affects the vertex position.

**Example:** Map the line $y=1$ ($c=1$).
$w = z^2 \implies u = x^2 - 1$, $v = 2x$.
$x = v/2$. $u = (v/2)^2 - 1 = v^2/4 - 1$.
$4u = v^2 - 4 \implies v^2 = 4u + 4 = 4(u+1)$. This is a parabola with vertex at $(-1, 0)$.

**b) Lines parallel to the imaginary axis ($x = k$, where $k$ is a constant):**
Let $z = k + iy$.
$w = (k + iy)^2 = k^2 - y^2 + i(2ky)$
Here, $u = k^2 - y^2$ and $v = 2ky$.
From $v = 2ky$, we have $y = v/(2k)$ (assuming $k \neq 0$).
Substituting this into the expression for $u$:
$u = k^2 - \left(\frac{v}{2k}\right)^2 = k^2 - \frac{v^2}{4k^2}$
$4k^2 u = 4k^4 - v^2$
$v^2 = 4k^4 - 4k^2 u$
$v^2 = -4k^2 (u - k^2)$

This is the equation of a **parabola** opening to the left with its vertex at $(k^2, 0)$ in the $w$-plane.

*   **If $k = 0$ (the imaginary axis):** $x = 0 \implies z = iy$. Then $w = (iy)^2 = -y^2$. This maps the imaginary axis to the non-positive real axis in the $w$-plane. $u = -y^2$, $v = 0$.
*   **If $k > 0$:** The line $x=k$ maps to a parabola.
*   **If $k < 0$:** The line $x=k$ also maps to a parabola.

**Example:** Map the line $x=2$ ($k=2$).
$w = z^2 \implies u = 4 - y^2$, $v = 4y$.
$y = v/4$. $u = 4 - (v/4)^2 = 4 - v^2/16$.
$16u = 64 - v^2 \implies v^2 = 64 - 16u = -16(u-4)$. This is a parabola with vertex at $(4, 0)$.

**c) Lines through the origin ($\theta = \alpha$, where $\alpha$ is a constant):**
These are rays starting from the origin.
Let $z = r e^{i\alpha}$.
$w = z^2 = (r e^{i\alpha})^2 = r^2 e^{i(2\alpha)}$
In polar coordinates in the $w$-plane, let $w = \rho e^{i\phi}$.
Then $\rho = r^2$ and $\phi = 2\alpha$.

This shows that a ray from the origin at an angle $\alpha$ in the $z$-plane is mapped to a ray from the origin at an angle $2\alpha$ in the $w$-plane. The distance from the origin is squared.

*   **Example:** The positive real axis ($z = x, x > 0$, so $\theta = 0$).
    $w = z^2$. If $z = x > 0$, $w = x^2$. This maps the positive real axis to the positive real axis in the $w$-plane. $\phi = 2(0) = 0$.
*   **Example:** The positive imaginary axis ($z = iy, y > 0$, so $\theta = \pi/2$).
    $w = z^2$. If $z = iy, y > 0$, $w = (iy)^2 = -y^2$. This maps the positive imaginary axis to the negative real axis in the $w$-plane. $\phi = 2(\pi/2) = \pi$.

**Summary of Line Mappings:**
*   Horizontal lines $y=c$ map to parabolas $v^2 = 4c^2(u+c^2)$.
*   Vertical lines $x=k$ map to parabolas $v^2 = -4k^2(u-k^2)$.
*   Rays through the origin $\theta = \alpha$ map to rays through the origin $\phi = 2\alpha$.

---

#### 3.2. Regions

**a) The first quadrant ($x \ge 0, y \ge 0$):**
In the first quadrant, $0 \le \theta \le \pi/2$.
Under $w = z^2$, the angle maps to $0 \le 2\theta \le \pi$.
This corresponds to the upper half of the $w$-plane (the region where the imaginary part $v \ge 0$).
The magnitude $r$ is squared, so $r \ge 0$ maps to $\rho \ge 0$.
Thus, the first quadrant of the $z$-plane is mapped to the upper half-plane ($v \ge 0$) of the $w$-plane.

**b) The upper half-plane ($y \ge 0$):**
In the upper half-plane, $0 \le \theta \le \pi$.
Under $w = z^2$, the angle maps to $0 \le 2\theta \le 2\pi$.
This covers the entire $w$-plane, but the argument is doubled.
If $z$ traverses the upper half-plane, $w$ traverses the entire $w$-plane twice.
For instance, the semi-circle in the upper half-plane with radius $R$ maps to a full circle of radius $R^2$.

**c) Rectangles:**
A rectangle with vertices $(x_1, y_1), (x_2, y_1), (x_2, y_2), (x_1, y_2)$ will map to a region bounded by curves derived from mapping its sides. As the sides are either horizontal or vertical lines, they map to parabolas. The resulting region will be bounded by these parabolas.

**Example:** Map the unit square in the first quadrant ($0 \le x \le 1, 0 \le y \le 1$).
The sides are:
*   $y=0, 0 \le x \le 1$: Maps to $v=0, 0 \le u \le 1$ (part of the real axis).
*   $x=1, 0 \le y \le 1$: Maps to $u = 1-y^2, v = 2y$. This is part of the parabola $v^2 = -4(u-1)$ with $0 \le v \le 2$ and $-3 \le u \le 1$.
*   $y=1, 0 \le x \le 1$: Maps to $u = x^2-1, v = 2x$. This is part of the parabola $v^2 = 4(u+1)$ with $0 \le v \le 2$ and $-1 \le u \le 0$.
*   $x=0, 0 \le y \le 1$: Maps to $v=0, -1 \le u \le 0$ (part of the real axis).

The resulting region is bounded by segments of the real axis and two parabolic arcs.

---

#### 3.3. Circles

**a) Circles centered at the origin ($|z| = R$, where $R$ is a constant):**
Let $z = R e^{i\theta}$.
$w = z^2 = (R e^{i\theta})^2 = R^2 e^{i(2\theta)}$
Let $w = \rho e^{i\phi}$. Then $\rho = R^2$ and $\phi = 2\theta$.

This means a circle of radius $R$ centered at the origin in the $z$-plane is mapped to a circle of radius $R^2$ centered at the origin in the $w$-plane. As $\theta$ varies from $0$ to $2\pi$, $2\theta$ varies from $0$ to $4\pi$. This indicates that the circle in the $w$-plane is traversed **twice**.

**Example:** Map $|z|=2$.
$w = z^2$. If $|z|=2$, then $|w| = |z^2| = |z|^2 = 2^2 = 4$.
The circle $|z|=2$ maps to the circle $|w|=4$.

**b) Circles not centered at the origin:**
These mappings are more complex and result in Cassini Ovals or related curves. The analysis involves substituting $z = w^{1/2}$, which can be multi-valued. For this topic, focusing on circles centered at the origin is usually sufficient unless specific instructions are given.

---

### 4. Conformal Mapping Property of $w = z^2$

**Key Concept:** A mapping $w = f(z)$ is conformal at a point $z_0$ if it preserves angles between intersecting curves at $z_0$ both in magnitude and orientation.

**Theorem:** A function $w = f(z)$ is conformal at a point $z_0$ if $f(z)$ is analytic at $z_0$ and $f'(z_0) \neq 0$.

**Analysis for $w = z^2$:**
*   The function $w = z^2$ is analytic everywhere in the complex plane.
*   Its derivative is $w' = dz^2/dz = 2z$.
*   The derivative $w' = 2z$ is zero only at $z_0 = 0$.

**Conclusion:**
*   The mapping $w = z^2$ is conformal at all points $z \neq 0$. This means that at any point $z_0 \neq 0$, angles between curves are preserved in magnitude and orientation.
*   At $z_0 = 0$, the derivative is zero ($w'(0) = 0$). This means the mapping is **not** conformal at the origin. At $z=0$, the angle between any two curves passing through it is doubled. For example, the positive real axis ($\theta=0$) and the positive imaginary axis ($\theta=\pi/2$) intersect at the origin at a $90^\circ$ angle. Under $w=z^2$, they map to the positive real axis ($\phi=0$) and the negative real axis ($\phi=\pi$), respectively. The angle between these mapped curves at the origin is $180^\circ$, which is twice the original angle.

**Relevance to CO2:** This section directly addresses the analyticity and conformal mapping aspect of CO2. It highlights where the mapping is conformal and where it is not, which is crucial for understanding its geometric properties and applications.

---

### 5. Examples and Applications

**Example 1: Mapping a Sector**
Map the sector defined by $0 \le \theta \le \pi/4$ and $r \ge 0$ in the $z$-plane.
Using polar coordinates, $z = r e^{i\theta}$.
$w = z^2 = r^2 e^{i(2\theta)}$.
The range of angles in the $z$-plane is $0 \le \theta \le \pi/4$.
The range of angles in the $w$-plane will be $0 \le 2\theta \le 2(\pi/4) = \pi/2$.
The range of magnitudes is $r^2 \ge 0$.
So, the sector maps to a sector in the $w$-plane defined by $0 \le \phi \le \pi/2$ and $\rho \ge 0$. This is the first quadrant of the $w$-plane.

**Example 2: Hydrodynamics (Potential Flow)**
The mapping $w = z^2$ can be used to model certain fluid flow problems. For instance, it can be used to transform a region where the flow is uniform into a region where the flow is more complex, or vice versa. The real part of $w$, $u = x^2 - y^2$, can represent the velocity potential for a 2D irrotational, incompressible flow. The lines $u = \text{constant}$ are equipotential lines, and the lines $v = 2xy = \text{constant}$ are stream functions.

**Example 3: Electrostatics**
Similarly, $w = z^2$ can be used to map equipotential lines in electrostatics. If $v$ represents the electric potential, then the lines $v = \text{constant}$ are equipotential lines. The mapping $w=z^2$ can transform a simple electrostatic field into a more complex one.

---

### 6. Practice Questions and Answers

**Question 1:**
Determine the image of the line $y = 3$ under the mapping $w = z^2$.
**Answer:**
Let $z = x + 3i$.
$w = z^2 = (x + 3i)^2 = x^2 + 6ix + (3i)^2 = x^2 - 9 + 6ix$.
So, $u = x^2 - 9$ and $v = 6x$.
From $v = 6x$, we get $x = v/6$.
Substitute this into the equation for $u$:
$u = (v/6)^2 - 9 = v^2/36 - 9$.
$36u = v^2 - 324$.
$v^2 = 36u + 324 = 36(u + 9)$.
This is the equation of a parabola opening to the right, with vertex at $(-9, 0)$.

**Question 2:**
Find the image of the upper half-plane ($y \ge 0$) under the mapping $w = z^2$.
**Answer:**
For $y \ge 0$, the argument of $z$ is $0 \le \arg(z) \le \pi$.
Let $z = re^{i\theta}$. Then $w = z^2 = r^2 e^{i(2\theta)}$.
The argument of $w$ is $2\theta$, so $0 \le 2\theta \le 2\pi$.
This covers all possible angles in the $w$-plane. The magnitude $|w| = r^2 \ge 0$.
Thus, the upper half-plane ($y \ge 0$) is mapped to the entire $w$-plane, with the region $v \ge 0$ being covered twice (once for $0 \le \theta \le \pi/2$, and again for $\pi/2 \le \theta \le \pi$).

**Question 3:**
What is the image of the circle $|z| = 1$ under the mapping $w = z^2$?
**Answer:**
Let $z = re^{i\theta}$. If $|z|=1$, then $r=1$.
$w = z^2 = (1 \cdot e^{i\theta})^2 = 1^2 \cdot e^{i(2\theta)} = e^{i(2\theta)}$.
The magnitude of $w$ is $|w| = 1$. The argument of $w$ is $2\theta$.
As $z$ traverses the unit circle $|z|=1$ once (from $\theta=0$ to $\theta=2\pi$), the argument $2\theta$ sweeps from $0$ to $4\pi$.
Therefore, the circle $|z|=1$ is mapped to the circle $|w|=1$ in the $w$-plane, and this circle is traversed twice.

**Question 4:**
Is the mapping $w = z^2$ conformal at $z = 1+i$? Justify your answer.
**Answer:**
The mapping $w = z^2$ is conformal at a point $z_0$ if $f(z)=z^2$ is analytic at $z_0$ and $f'(z_0) \neq 0$.
The function $f(z) = z^2$ is analytic everywhere.
The derivative is $f'(z) = 2z$.
At $z = 1+i$, $f'(1+i) = 2(1+i) = 2 + 2i$.
Since $2+2i \neq 0$, the mapping is conformal at $z = 1+i$.

**Question 5:**
What is the image of the ray $\theta = \pi/4$ ($z = r e^{i\pi/4}, r \ge 0$) under $w = z^2$?
**Answer:**
Let $z = r e^{i\pi/4}$.
$w = z^2 = (r e^{i\pi/4})^2 = r^2 e^{i(2 \cdot \pi/4)} = r^2 e^{i\pi/2}$.
This is a ray in the $w$-plane with argument $\pi/2$ and magnitude $r^2 \ge 0$.
So, it maps to the positive imaginary axis ($v \ge 0, u = 0$) in the $w$-plane.

---

### 7. Important Points to Remember

*   **Polar Form is Key:** $w = z^2$ is best understood in polar form: if $z = re^{i\theta}$, then $w = r^2 e^{i(2\theta)}$.
*   **Magnitude Squaring:** The distance from the origin is squared ($r \to r^2$).
*   **Argument Doubling:** The angle with the positive real axis is doubled ($\theta \to 2\theta$).
*   **Non-Conformal at Origin:** $w=z^2$ is not conformal at $z=0$ because $w'(0)=0$. Angles are doubled at the origin.
*   **Lines to Parabolas:** Horizontal and vertical lines (not through origin) map to parabolas.
*   **Rays to Rays:** Rays from the origin map to rays from the origin, with their angles doubled.
*   **Circles to Circles:** Circles centered at the origin map to circles centered at the origin, traversed twice.
*   **Upper Half-Plane to Full Plane:** The upper half-plane ($y \ge 0$) maps to the entire $w$-plane.

---

### 8. Alignment with Course Outcomes

*   **CO1 (Fourier Transforms):** While this topic doesn't directly involve Fourier transforms, understanding complex functions and their mappings is a prerequisite for advanced signal processing and system analysis where Fourier transforms are applied. The mathematical rigor developed here supports understanding more complex concepts.
*   **CO2 (Analyticity and Conformal Mapping):** This topic is directly aligned with CO2. We've analyzed the analyticity of $w=z^2$ and its conformal properties, particularly at $z=0$ and $z \neq 0$. This understanding is fundamental for applying conformal mapping techniques in various engineering problems.
*   **CO3 (Complex Integrals):** Knowledge of mappings can simplify the evaluation of complex integrals by transforming difficult regions of integration into simpler ones. Understanding how regions are transformed is a foundation for using techniques related to Cauchy's integral theorem and formula on transformed domains.
*   **CO4 (Series Expansion and Residue Theorem):** While not directly covered by this topic, a strong foundation in complex functions and their behavior under transformations is essential for understanding singularities and applying the residue theorem effectively. The mapping helps visualize how regions and functions behave near singularities.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=XZo4xyJXC2k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
