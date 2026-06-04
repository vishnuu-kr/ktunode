---
title: "Mappings of w=𝑧ଶ"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 2: Complex Function"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35a6c"
status: "completed"
scrapedAt: "2026-05-23T16:14:37.262Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 2: Complex Functions

### Topic: Mappings of w = z²

---

**Introduction:**

This topic explores the geometric interpretation of the complex function $w = z^2$. We will investigate how this function transforms geometric shapes in the $z$-plane (the complex plane of the independent variable $z$) to shapes in the $w$-plane (the complex plane of the dependent variable $w$). Understanding these mappings is fundamental to the study of conformal mappings, which are crucial in various fields of electrical and physical science, such as fluid dynamics, electrostatics, and heat conduction.

---

### Learning Outcomes:

*   Understand the transformation of curves and regions under $w = z^2$.
*   Analyze the behavior of $w = z^2$ regarding angles and scale changes.
*   Relate the mapping of $w = z^2$ to the concept of conformal mapping.

---

### Key Concepts and Definitions:

**1. Complex Number Representation:**
A complex number $z$ can be represented in rectangular form as $z = x + iy$, where $x$ is the real part and $y$ is the imaginary part. It can also be represented in polar form as $z = r(\cos \theta + i \sin \theta) = re^{i\theta}$, where $r = |z| = \sqrt{x^2 + y^2}$ is the modulus and $\theta = \arg(z)$ is the argument.

**2. The Mapping Function:**
The function under consideration is $w = f(z) = z^2$. Let $w = u + iv$.

**3. Transformation of Rectangular Coordinates:**
If $z = x + iy$, then
$w = z^2 = (x + iy)^2 = x^2 + 2ixy + (iy)^2 = x^2 + 2ixy - y^2$
Therefore, the real part of $w$ is $u = x^2 - y^2$, and the imaginary part of $w$ is $v = 2xy$.

**4. Transformation of Polar Coordinates:**
If $z = re^{i\theta}$, then
$w = z^2 = (re^{i\theta})^2 = r^2 e^{i2\theta}$
In polar form, $w = R e^{i\phi}$, where $R = r^2$ and $\phi = 2\theta$.

This polar representation reveals two crucial aspects of the mapping:
*   **Modulus:** The modulus of $w$ is the square of the modulus of $z$. $|w| = |z|^2$.
*   **Argument:** The argument of $w$ is twice the argument of $z$. $\arg(w) = 2 \arg(z)$.

**5. Conformal Mapping:**
A mapping $w = f(z)$ is conformal at a point $z_0$ if it preserves angles between curves passing through $z_0$ both in magnitude and orientation, provided $f'(z_0) \neq 0$.

For $w = z^2$, the derivative is $w' = f'(z) = 2z$.
Thus, $f'(z_0) \neq 0$ implies $2z_0 \neq 0$, which means $z_0 \neq 0$.
Therefore, the mapping $w = z^2$ is conformal everywhere except at $z=0$.

**6. Geometric Interpretation of the Mapping:**

*   **Lines:**
    *   **Horizontal lines ($y = c$):**
        If $y=c$, then $u = x^2 - c^2$ and $v = 2xc$.
        From $v = 2xc$, we have $x = v/(2c)$ (if $c \neq 0$).
        Substituting into the expression for $u$: $u = (v/(2c))^2 - c^2 = v^2/(4c^2) - c^2$.
        This is the equation of a **parabola**: $v^2 = 4c^2(u + c^2)$.
        The vertex of this parabola is at $(-c^2, 0)$.
        If $c=0$ (the real axis, $y=0$), then $z = x$ and $w = x^2$. This maps the real axis to the non-negative real axis ($u \ge 0$, $v=0$).

    *   **Vertical lines ($x = c$):**
        If $x=c$, then $u = c^2 - y^2$ and $v = 2cy$.
        From $v = 2cy$, we have $y = v/(2c)$ (if $c \neq 0$).
        Substituting into the expression for $u$: $u = c^2 - (v/(2c))^2 = c^2 - v^2/(4c^2)$.
        This is also the equation of a **parabola**: $v^2 = 4c^2(c^2 - u)$.
        The vertex of this parabola is at $(c^2, 0)$.
        If $c=0$ (the imaginary axis, $x=0$), then $z = iy$ and $w = (iy)^2 = -y^2$. This maps the imaginary axis to the non-positive real axis ($u \le 0$, $v=0$).

*   **Regions:**
    *   **Quadrants:**
        *   **First Quadrant ($x > 0, y > 0$):** Here, $0 < \arg(z) < \pi/2$. For $w = z^2$, $0 < \arg(w) < \pi$. This means the first quadrant in the $z$-plane maps to the upper half of the $w$-plane. In terms of magnitude, $|w| = |z|^2$.
        *   **Second Quadrant ($x < 0, y > 0$):** Here, $\pi/2 < \arg(z) < \pi$. For $w = z^2$, $\pi < \arg(w) < 2\pi$ (or $-\pi < \arg(w) < 0$). This means the second quadrant in the $z$-plane maps to the lower half of the $w$-plane.
        *   **Third Quadrant ($x < 0, y < 0$):** Here, $\pi < \arg(z) < 3\pi/2$. For $w = z^2$, $2\pi < \arg(w) < 3\pi$ (or $0 < \arg(w) < \pi$). This means the third quadrant in the $z$-plane maps to the upper half of the $w$-plane.
        *   **Fourth Quadrant ($x > 0, y < 0$):** Here, $3\pi/2 < \arg(z) < 2\pi$. For $w = z^2$, $3\pi < \arg(w) < 4\pi$ (or $-\pi/2 < \arg(w) < 0$). This means the fourth quadrant in the $z$-plane maps to the lower half of the $w$-plane.

    *   **Sector of an Annulus:**
        Consider a region defined by $r_1 \le |z| \le r_2$ and $\theta_1 \le \arg(z) \le \theta_2$.
        Under $w = z^2$, this region transforms to:
        *   $r_1^2 \le |w| \le r_2^2$ (an annulus with inner radius $r_1^2$ and outer radius $r_2^2$).
        *   $2\theta_1 \le \arg(w) \le 2\theta_2$ (a sector whose angular width is doubled).

**7. Angle Preservation (Conformality):**
If $z_1$ and $z_2$ are two points in the $z$-plane, and $w_1 = f(z_1)$ and $w_2 = f(z_2)$, then the angle between the vector $z_2 - z_1$ and the tangent to a curve passing through $z_1$ is preserved in magnitude and orientation when mapped to the $w$-plane, provided $f'(z_1) \neq 0$.
The angle is magnified by $\arg(f'(z_0))$. For $w = z^2$, $f'(z) = 2z$. So, $\arg(f'(z_0)) = \arg(2z_0) = \arg(z_0)$. This means angles are doubled.

**8. Scale Change:**
The magnification factor of the mapping at a point $z_0$ is $|f'(z_0)|$. For $w = z^2$, the magnification factor is $|2z_0| = 2|z_0|$. This means that lengths are scaled by a factor of $2|z_0|$ at a distance $|z_0|$ from the origin.

---

### Examples:

**Example 1: Mapping a Semi-Circle**
Map the semi-circle $|z| \le 2$, $y \ge 0$ under $w = z^2$.

*   **z-plane:** This is the upper half of a disk of radius 2 centered at the origin.
*   **Mapping:**
    *   $|z| \le 2 \implies |z|^2 \le 4 \implies |w| \le 4$.
    *   $y \ge 0$ means $0 \le \arg(z) \le \pi$.
    *   For $w = z^2$, $\arg(w) = 2 \arg(z)$, so $0 \le \arg(w) \le 2\pi$. This covers the entire $w$-plane.
*   **Result:** The region maps to a disk of radius 4 in the $w$-plane, $|w| \le 4$. The upper semi-circle boundary maps to the entire circle $|w|=4$.

**Example 2: Mapping a Square**
Map the square region defined by $0 \le x \le 1$ and $0 \le y \le 1$ under $w = z^2$.

*   **z-plane:** A unit square with vertices at (0,0), (1,0), (1,1), (0,1).
*   **Mapping:**
    *   The origin $(0,0)$ maps to $(0,0)$.
    *   The real axis segment $0 \le x \le 1$ ($y=0$) maps to $0 \le u \le 1$, $v=0$ (a segment on the real axis).
    *   The imaginary axis segment $0 \le y \le 1$ ($x=0$) maps to $u \le 0$, $v=0$ (a segment on the real axis, from 0 to -1).
    *   The line $x=1$, $0 \le y \le 1$: This maps to $u = 1 - y^2$, $v = 2y$.
        From $v=2y$, $y=v/2$. Substitute into $u$: $u = 1 - (v/2)^2 = 1 - v^2/4$.
        This is a parabola $v^2 = 4(1-u)$. For $0 \le y \le 1$, $0 \le v \le 2$. So, this is a parabolic arc from (1,0) to (0,2) in the $w$-plane.
    *   The line $y=1$, $0 \le x \le 1$: This maps to $u = x^2 - 1$, $v = 2x$.
        From $v=2x$, $x=v/2$. Substitute into $u$: $u = (v/2)^2 - 1 = v^2/4 - 1$.
        This is a parabola $v^2 = 4(u+1)$. For $0 \le x \le 1$, $0 \le v \le 2$. So, this is a parabolic arc from (-1,0) to (0,2) in the $w$-plane.
*   **Result:** The square maps to a region bounded by the real axis from -1 to 1, and two parabolic arcs.

**Example 3: Mapping a Ray**
Map the ray $\arg(z) = \pi/4$ ($y=x > 0$) under $w = z^2$.

*   **z-plane:** A ray starting from the origin with an angle of $\pi/4$ with the positive real axis.
*   **Mapping:**
    *   $\arg(z) = \pi/4$.
    *   For $w = z^2$, $\arg(w) = 2 \arg(z) = 2(\pi/4) = \pi/2$.
*   **Result:** The ray maps to the positive imaginary axis in the $w$-plane.

---

### Practice Questions and Exercises:

**Question 1:**
Determine the images of the following sets under the mapping $w = z^2$:
(a) The line $y=1$.
(b) The line $x=1$.
(c) The positive real axis.
(d) The circle $|z|=R$.

**Answer 1:**
(a) The line $y=1$ maps to the parabola $v^2 = 4(u+1)$.
(b) The line $x=1$ maps to the parabola $v^2 = 4(1-u)$.
(c) The positive real axis maps to the positive real axis.
(d) The circle $|z|=R$ maps to the circle $|w|=R^2$.

**Question 2:**
Describe the region in the $w$-plane that the rectangular region $1 \le x \le 2$, $0 \le y \le \pi$ maps to under $w = z^2$.

**Answer 2:**
The region is bounded by:
*   The arc $v^2 = 4(u+1)$ for $0 \le v \le 2\pi$.
*   The arc $v^2 = 4(4-u)$ for $0 \le v \le 2\pi$.
*   The line segment $u = 1, 0 \le v \le 2\pi$ (from $x=1$, $y=0$ to $y=\pi$).
*   The line segment $u = 4, 0 \le v \le 2\pi$ (from $x=2$, $y=0$ to $y=\pi$).

More precisely, the mapping of the boundaries:
*   $x=1$, $0 \le y \le \pi$: $u=1-y^2, v=2y$. This is a parabolic arc $v^2 = 4(1-u)$ from $(1,0)$ to $(1-\pi^2, 2\pi)$.
*   $x=2$, $0 \le y \le \pi$: $u=4-y^2, v=2y$. This is a parabolic arc $v^2 = 4(4-u)$ from $(4,0)$ to $(4-\pi^2, 2\pi)$.
*   $y=0$, $1 \le x \le 2$: $u=x^2, v=0$. This is a line segment on the real axis from $(1,0)$ to $(4,0)$.
*   $y=\pi$, $1 \le x \le 2$: $u=x^2-\pi^2, v=2\pi x$. This is a parabolic arc $v^2 = 4\pi^2(u+\pi^2)$ from $(1-\pi^2, 2\pi)$ to $(4-\pi^2, 2\pi)$.

The region in the $w$-plane is bounded by $u = x^2 - y^2$ and $v = 2xy$.

**Question 3:**
Show that the mapping $w = z^2$ maps the region $1 < |z| < 2$ and $0 < \arg(z) < \pi/2$ to the region $1 < |w| < 4$ and $0 < \arg(w) < \pi$.

**Answer 3:**
Let $z = re^{i\theta}$.
Given region: $1 < r < 2$ and $0 < \theta < \pi/2$.
For $w = z^2$, we have $w = (re^{i\theta})^2 = r^2 e^{i2\theta}$.
Let $w = R e^{i\phi}$. Then $R = r^2$ and $\phi = 2\theta$.

From $1 < r < 2$, squaring gives $1^2 < r^2 < 2^2$, which means $1 < R < 4$.
From $0 < \theta < \pi/2$, multiplying by 2 gives $0 < 2\theta < \pi$, which means $0 < \phi < \pi$.
Therefore, the region $1 < |z| < 2$ and $0 < \arg(z) < \pi/2$ maps to the region $1 < |w| < 4$ and $0 < \arg(w) < \pi$.

---

### Important Points to Remember:

*   The mapping $w = z^2$ transforms polar coordinates $(r, \theta)$ to $(r^2, 2\theta)$.
*   **Moduli are squared, and arguments are doubled.** This is a key takeaway.
*   Lines parallel to the real and imaginary axes in the $z$-plane generally map to parabolas in the $w$-plane.
*   The mapping $w = z^2$ is conformal everywhere except at the origin ($z=0$), where angles are doubled and the scale factor is zero.
*   The mapping folds the $z$-plane. For example, the upper half of the $z$-plane maps to the entire $w$-plane. The first and third quadrants of the $z$-plane both map to the upper half of the $w$-plane.

---
