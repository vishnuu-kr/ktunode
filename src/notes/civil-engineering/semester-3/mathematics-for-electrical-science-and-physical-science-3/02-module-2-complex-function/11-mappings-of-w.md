---
title: "Mappings of w=𝑧ଶ"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 2: Complex Function"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba810697"
status: "completed"
scrapedAt: "2026-05-20T18:41:23.204Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 2: Complex Functions

## Topic: Mappings of $w = z^2$

---

### Introduction to Mappings

A **mapping** in complex analysis is a transformation of one complex plane (the $z$-plane) to another complex plane (the $w$-plane) using a complex function. Essentially, it's a way to visualize how regions and curves in the $z$-plane are distorted or transformed into the $w$-plane.

*   **$z$-plane:** The input complex plane, where points are represented by $z = x + iy$.
*   **$w$-plane:** The output complex plane, where points are represented by $w = u + iv$.
*   **Transformation:** A rule (the complex function) that relates points in the $z$-plane to points in the $w$-plane.

---

### Learning Outcomes: Mappings of $w = z^2$

By the end of this topic, you should be able to:

1.  **Understand the general nature of the mapping $w = z^2$.**
2.  **Determine how specific geometric shapes (lines, rays, circles, sectors) in the $z$-plane are mapped to the $w$-plane.**
3.  **Analyze the effect of the mapping on angles and areas.**
4.  **Identify and interpret the "branch cut" for the inverse mapping.**

---

### Key Concepts and Definitions

*   **Complex Number Representation:**
    *   Cartesian form: $z = x + iy$, where $x = \text{Re}(z)$ and $y = \text{Im}(z)$.
    *   Polar form: $z = r e^{i\theta} = r(\cos\theta + i\sin\theta)$, where $r = |z|$ is the magnitude (or modulus) and $\theta = \arg(z)$ is the argument (or angle).

*   **The Mapping Function $w = z^2$:**
    *   Let $z = x + iy$ and $w = u + iv$.
    *   $w = (x + iy)^2 = x^2 + 2ixy + (iy)^2 = x^2 + 2ixy - y^2 = (x^2 - y^2) + i(2xy)$.
    *   Therefore, the mapping equations are:
        *   $u = x^2 - y^2$
        *   $v = 2xy$

*   **Polar Form of the Mapping:**
    *   Let $z = r e^{i\theta}$.
    *   $w = z^2 = (r e^{i\theta})^2 = r^2 e^{i(2\theta)}$.
    *   This form is particularly insightful for understanding the mapping:
        *   The magnitude of $w$ is the square of the magnitude of $z$: $|w| = |z|^2$.
        *   The argument of $w$ is twice the argument of $z$: $\arg(w) = 2\arg(z)$.

---

### 1. General Nature of the Mapping $w = z^2$

The mapping $w = z^2$ has several key characteristics:

*   **Doubles the Angle:** For any point $z$ with argument $\theta$, the corresponding point $w$ will have an argument of $2\theta$. This means that angles are doubled.
*   **Squares the Magnitude:** For any point $z$ with magnitude $r$, the corresponding point $w$ will have a magnitude of $r^2$. Magnitudes are squared.
*   **Non-conformal at $z=0$:** At $z=0$, the mapping is *not* conformal. A conformal mapping preserves angles between intersecting curves. At $z=0$, the Jacobian of the transformation is zero, causing a collapse of the plane.
*   **Conformal Elsewhere:** For any $z \neq 0$, the mapping $w = z^2$ is conformal. This means that angles between curves intersecting at $z \neq 0$ are preserved in magnitude but might be doubled (due to the argument doubling).

---

### 2. Mappings of Specific Geometric Shapes

Let's explore how various shapes in the $z$-plane are transformed in the $w$-plane.

#### 2.1 Lines in the $z$-plane

*   **Vertical Lines ($x = c$):**
    *   $u = c^2 - y^2$
    *   $v = 2cy$
    *   From $v = 2cy$, we get $y = v/(2c)$ (if $c \neq 0$).
    *   Substitute into $u$: $u = c^2 - (v/(2c))^2 = c^2 - v^2/(4c^2)$.
    *   Rearranging gives: $u + \frac{v^2}{4c^2} = c^2 \implies \frac{v^2}{4c^2} = c^2 - u$.
    *   This is the equation of a **parabola** opening to the left in the $w$-plane, with its vertex at $(c^2, 0)$.
    *   **Special Case: $x=0$ (Imaginary Axis):**
        *   $u = -y^2$, $v = 0$.
        *   This maps to the **negative real axis** in the $w$-plane ($u \le 0$, $v=0$). The positive imaginary axis ($y>0$) maps to the negative real axis, and the negative imaginary axis ($y<0$) also maps to the negative real axis.

*   **Horizontal Lines ($y = c$):**
    *   $u = x^2 - c^2$
    *   $v = 2xc$
    *   From $v = 2xc$, we get $x = v/(2c)$ (if $c \neq 0$).
    *   Substitute into $u$: $u = (v/(2c))^2 - c^2 = v^2/(4c^2) - c^2$.
    *   Rearranging gives: $u + c^2 = \frac{v^2}{4c^2} \implies \frac{v^2}{4c^2} = u + c^2$.
    *   This is the equation of a **parabola** opening to the right in the $w$-plane, with its vertex at $(-c^2, 0)$.
    *   **Special Case: $y=0$ (Real Axis):**
        *   $u = x^2$, $v = 0$.
        *   This maps to the **real axis** in the $w$-plane. The positive real axis ($x>0$) maps to the positive real axis ($u>0$), and the negative real axis ($x<0$) also maps to the positive real axis ($u>0$).

*   **General Lines through the Origin ($\theta = \theta_0$ or $y = (\tan \theta_0) x$):**
    *   In polar coordinates, lines through the origin are rays with a constant argument $\theta_0$.
    *   $z = r e^{i\theta_0}$
    *   $w = z^2 = r^2 e^{i(2\theta_0)}$.
    *   This means a ray making an angle $\theta_0$ with the positive real axis in the $z$-plane is mapped to a ray making an angle $2\theta_0$ with the positive real axis in the $w$-plane. The magnitude is squared.
    *   **Example:** The ray $\theta = \pi/4$ ($y=x$ for $x>0$) maps to the ray $\arg(w) = 2(\pi/4) = \pi/2$ ($v>0, u=0$) in the $w$-plane.

#### 2.2 Circles in the $z$-plane

*   **Circles centered at the origin ($|z| = R$):**
    *   $z = R e^{i\theta}$
    *   $w = z^2 = (R e^{i\theta})^2 = R^2 e^{i(2\theta)}$.
    *   Let $w = \rho e^{i\phi}$. Then $\rho = R^2$ and $\phi = 2\theta$.
    *   This maps a circle of radius $R$ centered at the origin in the $z$-plane to a circle of radius $R^2$ centered at the origin in the $w$-plane.
    *   The angle range of the circle in the $z$-plane (e.g., $0 \le \theta \le 2\pi$) maps to twice that range in the $w$-plane (e.g., $0 \le \phi \le 4\pi$). This means the circle is traversed twice.

*   **Circles *not* centered at the origin:** These map to more complex curves, specifically **Lemniscates** (though the term lemniscate is typically reserved for $w^2 = z$, this transformation is related to Cassini ovals). For $w=z^2$, the mapping of a circle $|z-c|=R$ results in a curve whose Cartesian equation is more involved to derive but visually resembles a distorted circle or an oval.

#### 2.3 Sectors in the $z$-plane

*   **Sector defined by $\theta_1 \le \arg(z) \le \theta_2$ and $0 \le |z| \le R$:**
    *   Let $z = r e^{i\theta}$, where $0 \le r \le R$ and $\theta_1 \le \theta \le \theta_2$.
    *   $w = z^2 = r^2 e^{i(2\theta)}$.
    *   Let $w = \rho e^{i\phi}$. Then $\rho = r^2$ and $\phi = 2\theta$.
    *   The ranges become:
        *   $0 \le \rho \le R^2$ (since $0 \le r^2 \le R^2$)
        *   $2\theta_1 \le \phi \le 2\theta_2$ (since $2\theta_1 \le 2\theta \le 2\theta_2$)
    *   This maps a sector in the $z$-plane to a sector in the $w$-plane with the same radial boundaries (scaled by $R^2$) but with the angular width doubled.

    *   **Example:** Consider the sector $0 \le \arg(z) \le \pi/4$ and $|z| \le 1$.
        *   In the $z$-plane, this is the region in the first quadrant between the positive real axis and the line $y=x$.
        *   In the $w$-plane, it maps to $0 \le \rho \le 1^2=1$ and $2(0) \le \phi \le 2(\pi/4)$.
        *   So, $0 \le \rho \le 1$ and $0 \le \phi \le \pi/2$. This is a quarter circle of radius 1 in the first quadrant of the $w$-plane.

---

### 3. Effect on Angles and Areas

*   **Angles:**
    *   For $z \neq 0$, the mapping $w = z^2$ doubles all angles.
    *   If two curves intersect at $z_0 \neq 0$ with an angle $\alpha$, their images in the $w$-plane will intersect at $w_0 = z_0^2$ with an angle $2\alpha$.
    *   **At $z=0$:** The angle is not preserved. The origin collapses to a single point. For example, the first quadrant ($0 \le \arg(z) \le \pi/2$) maps to the upper half plane ($0 \le \arg(w) \le \pi$) and is "folded" in half.

*   **Areas:**
    *   The Jacobian of the transformation $w = z^2$ (with $z=x+iy$ and $w=u+iv$) gives the local magnification factor for areas.
    *   $u = x^2 - y^2$, $v = 2xy$
    *   $\frac{\partial u}{\partial x} = 2x$, $\frac{\partial u}{\partial y} = -2y$
    *   $\frac{\partial v}{\partial x} = 2y$, $\frac{\partial v}{\partial y} = 2x$
    *   The Jacobian determinant is:
        $J = \det \begin{pmatrix} \frac{\partial u}{\partial x} & \frac{\partial u}{\partial y} \\ \frac{\partial v}{\partial x} & \frac{\partial v}{\partial y} \end{pmatrix} = (2x)(2x) - (-2y)(2y) = 4x^2 + 4y^2 = 4(x^2 + y^2) = 4|z|^2$.
    *   The magnification factor for area is $|J| = 4|z|^2$.
    *   This means that a small area element $dA_z$ in the $z$-plane is mapped to an area element $dA_w$ in the $w$-plane such that $dA_w = |J| dA_z = 4|z|^2 dA_z$.
    *   Areas are scaled by a factor that depends on the square of the distance from the origin.

---

### 4. The Branch Cut for the Inverse Mapping

The inverse mapping of $w = z^2$ is $z = \sqrt{w}$. For a given $w \neq 0$, there are two possible values for $z$.

*   If $w = \rho e^{i\phi}$, then $z = \sqrt{\rho} e^{i(\phi/2 + k\pi)}$ for $k=0, 1$.
    *   $z_1 = \sqrt{\rho} e^{i\phi/2}$
    *   $z_2 = \sqrt{\rho} e^{i(\phi/2 + \pi)} = -\sqrt{\rho} e^{i\phi/2} = -z_1$.

To make $\sqrt{w}$ a single-valued function, we need to define a **branch cut**.

*   **Standard Branch Cut:** The most common branch cut for $z = \sqrt{w}$ is along the **negative real axis** in the $w$-plane.
    *   This means we typically restrict the argument of $w$ to $-\pi < \arg(w) < \pi$ (or $0 \le \arg(w) < 2\pi$ and choose one value consistently).
    *   If we choose $0 \le \arg(w) < 2\pi$, then $w = \rho e^{i\phi}$ implies $z = \sqrt{\rho} e^{i\phi/2}$ where $0 \le \phi/2 < \pi$. This corresponds to the upper half of the $z$-plane.
    *   The negative real axis ($u \le 0, v = 0$) in the $w$-plane is where $\arg(w)$ is $\pi$. The principal square root function is not defined at these points, or its value "jumps" across the cut.

*   **Effect of the Branch Cut:**
    *   The negative real axis in the $w$-plane acts as a barrier. If you cross this line, the value of $\sqrt{w}$ changes from one root to the other.
    *   Consider a circle $|w| = R$ in the $w$-plane. If this circle encircles the origin, it can be thought of as connecting the two branches of $\sqrt{w}$.
    *   If we choose the branch cut along the negative real axis, then the $w$-plane is essentially cut and can be opened up into a slit plane.
    *   The mapping $w=z^2$ maps the upper half of the $z$-plane (where $0 < \arg(z) < \pi$) onto the entire $w$-plane excluding the negative real axis. The lower half of the $z$-plane (where $-\pi < \arg(z) < 0$) maps onto the entire $w$-plane excluding the negative real axis as well.

---

### Important Points to Remember

*   $w = z^2$ squares the magnitude and doubles the argument of $z$.
*   **Lines $x=c$ map to parabolas $u = c^2 - v^2/(4c^2)$ (opening left if $c \neq 0$).**
*   **Lines $y=c$ map to parabolas $u = v^2/(4c^2) - c^2$ (opening right if $c \neq 0$).**
*   **The imaginary axis ($x=0$) maps to the negative real axis ($u \le 0, v=0$).**
*   **The real axis ($y=0$) maps to the positive real axis ($u \ge 0, v=0$).**
*   **Circles centered at the origin $|z|=R$ map to circles $|w|=R^2$.**
*   **Sectors $ \theta_1 \le \arg(z) \le \theta_2 $ have their angular width doubled: $2\theta_1 \le \arg(w) \le 2\theta_2$.**
*   The mapping is conformal everywhere except at $z=0$.
*   The area magnification factor is $|J| = 4|z|^2$.
*   The inverse mapping $z = \sqrt{w}$ has two values, requiring a branch cut (typically the negative real axis) to define a single-valued function.

---

### Practice Questions

**Question 1:**
Map the line segment from $z = 1+i$ to $z = 1-i$ under the transformation $w = z^2$.

**Question 2:**
Determine the image of the region $0 \le \arg(z) \le \pi/4$ and $|z| \le 2$ under the mapping $w = z^2$.

**Question 3:**
What curve in the $w$-plane corresponds to the line $y = 1$ in the $z$-plane under the mapping $w = z^2$?

**Question 4:**
If $z = 3 e^{i \pi/6}$, find the corresponding point $w$ under $w = z^2$.

**Question 5:**
Describe the mapping of the circle $|z| = 2$ under $w = z^2$. How many times is the image circle traversed?

**Question 6:**
Consider the region in the $z$-plane given by the first quadrant ($x \ge 0, y \ge 0$). Describe its image under $w = z^2$. What happens to the angles at the origin?

---

### Answers to Practice Questions

**Answer 1:**
The line segment from $z = 1+i$ to $z = 1-i$ is a vertical line $x=1$ for $-1 \le y \le 1$.
Using the mapping equation for vertical lines, $u = x^2 - y^2$ and $v = 2xy$.
For $x=1$:
$u = 1^2 - y^2 = 1 - y^2$
$v = 2(1)y = 2y$
From $v = 2y$, we get $y = v/2$.
Substituting into $u$: $u = 1 - (v/2)^2 = 1 - v^2/4$.
The range for $y$ is $-1 \le y \le 1$, so the range for $v$ is $2(-1) \le v \le 2(1)$, which is $-2 \le v \le 2$.
The equation $u = 1 - v^2/4$ is a parabola opening to the left with vertex at $(1, 0)$. The segment of the parabola is for $v$ values between -2 and 2.
**Image:** A parabolic arc $u = 1 - v^2/4$ for $-2 \le v \le 2$.

**Answer 2:**
The region is a sector bounded by rays $\theta_1 = 0$ and $\theta_2 = \pi/4$, and with $|z| \le R=2$.
The mapping $w = z^2$ transforms this region to a sector where $|w| = |z|^2 \le 2^2 = 4$ and $\arg(w) = 2\arg(z)$, so $2(0) \le \arg(w) \le 2(\pi/4)$.
**Image:** A sector defined by $0 \le |w| \le 4$ and $0 \le \arg(w) \le \pi/2$. This is a quarter circle of radius 4 in the first quadrant of the $w$-plane.

**Answer 3:**
The line $y=1$ is a horizontal line. For $c=1$:
$u = x^2 - 1^2 = x^2 - 1$
$v = 2x(1) = 2x$
From $v=2x$, $x = v/2$.
Substitute into $u$: $u = (v/2)^2 - 1 = v^2/4 - 1$.
This is a parabola opening to the right with vertex at $(-1, 0)$.
**Image:** The parabola $u = v^2/4 - 1$.

**Answer 4:**
Given $z = 3 e^{i \pi/6}$.
$w = z^2 = (3 e^{i \pi/6})^2 = 3^2 e^{i (2 \times \pi/6)} = 9 e^{i \pi/3}$.
In Cartesian form: $w = 9 (\cos(\pi/3) + i \sin(\pi/3)) = 9 (1/2 + i \sqrt{3}/2) = 9/2 + i 9\sqrt{3}/2$.
**Image:** $w = 9 e^{i \pi/3}$ or $w = 9/2 + i 9\sqrt{3}/2$.

**Answer 5:**
A circle $|z| = 2$ in the $z$-plane corresponds to a circle $|w| = |z|^2 = 2^2 = 4$ in the $w$-plane.
As $z$ traverses the circle $|z|=2$ once (e.g., $0 \le \theta \le 2\pi$), the argument of $w$ traverses $0 \le 2\theta \le 4\pi$. This means the image circle $|w|=4$ is traversed **twice**.

**Answer 6:**
The first quadrant of the $z$-plane is defined by $0 \le \arg(z) \le \pi/2$ and $|z| \ge 0$.
Under $w = z^2$:
The argument range becomes $2 \times 0 \le \arg(w) \le 2 \times \pi/2$, which is $0 \le \arg(w) \le \pi$. This corresponds to the upper half of the $w$-plane.
The magnitude range remains $|w| \ge 0$.
**Image:** The upper half of the $w$-plane ($v \ge 0$).
**Angles at the origin:** At $z=0$, the angle is not preserved. The original right angle at the origin in the $z$-plane (formed by the positive real axis and the positive imaginary axis) maps to a straight line (the positive real axis) in the $w$-plane. The mapping effectively "folds" the first quadrant onto the upper half-plane. The $90^\circ$ angle maps to a $180^\circ$ angle if you consider the full range of arguments.
