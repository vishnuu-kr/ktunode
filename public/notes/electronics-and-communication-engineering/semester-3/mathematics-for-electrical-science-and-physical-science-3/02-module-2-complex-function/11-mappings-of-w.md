---
title: "Mappings of w=𝑧ଶ"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 2: Complex Function"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe263"
status: "completed"
scrapedAt: "2026-05-23T17:47:07.897Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 2: Complex Function

### Topic: Mappings of $w = z^2$

This topic explores how the complex function $w = z^2$ transforms points and regions in the complex $z$-plane to the complex $w$-plane. This understanding is fundamental for conformal mapping, which has significant applications in electrical science and physical science, such as fluid dynamics, heat transfer, and electrostatics.

---

### Learning Outcomes

*   **LO1: Understand the mapping properties of $w = z^2$ for various regions in the $z$-plane.** This includes understanding how lines, rays, sectors, and half-planes are transformed.
*   **LO2: Analyze the geometric interpretation of the squaring function $w = z^2$.** This involves understanding how magnitude and argument change under this transformation.
*   **LO3: Apply the concept of mapping to solve problems involving transformations of regions.**

---

### Key Concepts and Definitions

*   **Complex Plane (z-plane):** The plane where complex numbers $z = x + iy$ are represented, with the horizontal axis as the real axis and the vertical axis as the imaginary axis.
*   **Complex Plane (w-plane):** The plane where complex numbers $w = u + iv$ are represented, with the horizontal axis as the real axis and the vertical axis as the imaginary axis.
*   **Mapping (Transformation):** A rule that assigns to each point $z$ in one complex plane (the domain) a unique point $w$ in another complex plane (the codomain). Here, the mapping is $w = f(z) = z^2$.
*   **Polar Coordinates:** A system of coordinates where a point is located by its distance from the origin (radius, $r$) and its angle from the positive real axis (argument, $\theta$). For a complex number $z = x + iy$, its polar form is $z = r e^{i\theta}$, where $r = |z| = \sqrt{x^2 + y^2}$ and $\theta = \arg(z) = \arctan(y/x)$.

---

### Understanding the Mapping $w = z^2$

Let $z = x + iy$. Then $w = z^2 = (x + iy)^2 = x^2 - y^2 + 2ixy$.
So, if $w = u + iv$, we have:
*   $u = x^2 - y^2$ (Real part of $w$)
*   $v = 2xy$ (Imaginary part of $w$)

Alternatively, using polar coordinates is often more insightful for understanding transformations like $w = z^2$.
Let $z = r e^{i\theta}$.
Then $w = z^2 = (r e^{i\theta})^2 = r^2 e^{i(2\theta)}$.

This polar representation reveals the core geometric effect of the squaring function:
*   **Magnitude:** The magnitude of $w$ is the square of the magnitude of $z$: $|w| = |z^2| = |z|^2 = r^2$.
*   **Argument:** The argument of $w$ is twice the argument of $z$: $\arg(w) = \arg(z^2) = 2 \arg(z) = 2\theta$.

**This means that for the mapping $w = z^2$:**
*   **Distances from the origin are squared.** A point at distance $r$ from the origin in the $z$-plane is mapped to a point at distance $r^2$ from the origin in the $w$-plane.
*   **Angles are doubled.** A ray from the origin making an angle $\theta$ with the positive real axis in the $z$-plane is mapped to a ray from the origin making an angle $2\theta$ with the positive real axis in the $w$-plane.

---

### Mappings of Specific Regions in the z-plane

#### 1. Mapping of Lines and Rays

**a) The Real Axis ($y=0$)**
*   In the $z$-plane, this is the line $y=0$. Here, $z = x$.
*   $w = z^2 = x^2$. Since $x$ is real, $w$ is real.
*   If $x > 0$, then $z$ is on the positive real axis, $r = x$, $\theta = 0$. $w = x^2$, $u = x^2$, $v = 0$. The positive real axis ($x > 0$) is mapped to the positive real axis ($u > 0$) in the $w$-plane.
*   If $x < 0$, then $z$ is on the negative real axis, $r = |x|$, $\theta = \pi$. $w = x^2$, $u = x^2$, $v = 0$. The negative real axis ($x < 0$) is also mapped to the positive real axis ($u > 0$) in the $w$-plane.
*   **Conclusion:** The entire real axis ($y=0$) in the $z$-plane is mapped to the non-negative real axis ($v=0, u \ge 0$) in the $w$-plane.

**b) The Imaginary Axis ($x=0$)**
*   In the $z$-plane, this is the line $x=0$. Here, $z = iy$.
*   $w = z^2 = (iy)^2 = -y^2$. Since $y$ is real, $-y^2$ is real.
*   If $y > 0$, then $z$ is on the positive imaginary axis, $r = y$, $\theta = \pi/2$. $w = -y^2$, $u = -y^2$, $v = 0$. The positive imaginary axis ($y > 0$) is mapped to the negative real axis ($u < 0$) in the $w$-plane.
*   If $y < 0$, then $z$ is on the negative imaginary axis, $r = |y|$, $\theta = -\pi/2$. $w = -y^2$, $u = -y^2$, $v = 0$. The negative imaginary axis ($y < 0$) is also mapped to the negative real axis ($u < 0$) in the $w$-plane.
*   **Conclusion:** The entire imaginary axis ($x=0$) in the $z$-plane is mapped to the non-positive real axis ($v=0, u \le 0$) in the $w$-plane.

**c) Horizontal Lines ($y=c$, $c \neq 0$)**
*   $z = x + ic$. $w = (x + ic)^2 = x^2 - c^2 + i(2xc)$.
*   $u = x^2 - c^2$, $v = 2xc$.
*   From $v = 2xc$, we get $x = v/(2c)$.
*   Substitute this into the equation for $u$: $u = (v/(2c))^2 - c^2 = v^2/(4c^2) - c^2$.
*   This can be rewritten as $u = \frac{1}{4c^2} v^2 - c^2$, or $v^2 = 4c^2(u + c^2)$.
*   This is the equation of a parabola opening to the right, with its vertex at $(-c^2, 0)$.
*   **Important Note:** As $x$ varies from $-\infty$ to $\infty$, $v = 2xc$ sweeps out the entire real axis. However, $u = x^2 - c^2$ takes values $u \ge -c^2$. Therefore, a horizontal line $y=c$ ($c \neq 0$) is mapped to a parabola opening to the right with vertex at $(-c^2, 0)$. The orientation of the parabola depends on the sign of $c$.

**d) Vertical Lines ($x=c$, $c \neq 0$)**
*   $z = c + iy$. $w = (c + iy)^2 = c^2 - y^2 + i(2cy)$.
*   $u = c^2 - y^2$, $v = 2cy$.
*   From $v = 2cy$, we get $y = v/(2c)$.
*   Substitute this into the equation for $u$: $u = c^2 - (v/(2c))^2 = c^2 - v^2/(4c^2)$.
*   This can be rewritten as $u = c^2 - \frac{1}{4c^2} v^2$, or $v^2 = -4c^2(u - c^2)$.
*   This is the equation of a parabola opening to the left, with its vertex at $(c^2, 0)$.
*   **Conclusion:** A vertical line $x=c$ ($c \neq 0$) is mapped to a parabola opening to the left with vertex at $(c^2, 0)$.

**e) Rays from the Origin ($\theta = \theta_0$)**
*   Let $z = r e^{i\theta_0}$, where $r \ge 0$ is the distance from the origin.
*   $w = z^2 = (r e^{i\theta_0})^2 = r^2 e^{i(2\theta_0)}$.
*   This shows that $w$ lies on a ray from the origin in the $w$-plane making an angle $2\theta_0$ with the positive real axis. The distance from the origin is $r^2$.
*   **Conclusion:** A ray from the origin making an angle $\theta_0$ with the positive real axis is mapped to a ray from the origin making an angle $2\theta_0$ with the positive real axis.

#### 2. Mapping of Sectors

A sector of the $z$-plane is defined by $r_1 \le |z| \le r_2$ and $\theta_1 \le \arg(z) \le \theta_2$.
Let $z = r e^{i\theta}$. Then $w = r^2 e^{i(2\theta)}$.
*   The radial boundaries $r = r_1$ and $r = r_2$ are mapped to circles $|w| = r_1^2$ and $|w| = r_2^2$ in the $w$-plane.
*   The angular boundaries $\theta = \theta_1$ and $\theta = \theta_2$ are mapped to rays $\arg(w) = 2\theta_1$ and $\arg(w) = 2\theta_2$ in the $w$-plane.
*   **Conclusion:** A sector in the $z$-plane defined by $r_1 \le r \le r_2$ and $\theta_1 \le \theta \le \theta_2$ is mapped to an annular sector in the $w$-plane defined by $r_1^2 \le |w| \le r_2^2$ and $2\theta_1 \le \arg(w) \le 2\theta_2$.

**Special Case: First Quadrant ($0 \le \theta \le \pi/2$)**
*   $z$ in the first quadrant ($x \ge 0, y \ge 0$).
*   $0 \le \arg(z) \le \pi/2$.
*   $w = z^2$, so $0 \le \arg(w) \le 2(\pi/2) = \pi$.
*   **Conclusion:** The first quadrant of the $z$-plane is mapped to the upper half-plane ($v \ge 0$) of the $w$-plane.

**Special Case: Upper Half-Plane ($0 \le \theta \le \pi$)**
*   $z$ in the upper half-plane ($y \ge 0$).
*   $0 \le \arg(z) \le \pi$.
*   $w = z^2$, so $0 \le \arg(w) \le 2\pi$.
*   **Conclusion:** The upper half-plane of the $z$-plane is mapped to the entire $w$-plane (excluding the origin, $w=0$ which comes from $z=0$). This mapping is not one-to-one since different $z$ values in the upper half-plane map to the same $w$ value (e.g., $z_1$ and $-z_1$ map to the same $w$).

#### 3. Mapping of the Unit Circle ($|z|=1$)

*   Let $z = e^{i\theta}$. Then $|z|=1$.
*   $w = z^2 = (e^{i\theta})^2 = e^{i(2\theta)}$.
*   $|w| = |e^{i(2\theta)}| = 1$.
*   As $\theta$ varies from $0$ to $2\pi$, $2\theta$ varies from $0$ to $4\pi$. This means the point $e^{i(2\theta)}$ traverses the unit circle in the $w$-plane twice.
*   **Conclusion:** The unit circle $|z|=1$ in the $z$-plane is mapped to the unit circle $|w|=1$ in the $w$-plane, and it is traversed twice.

#### 4. Mapping of the Interior/Exterior of the Unit Circle

*   **Interior of the Unit Circle ($|z| < 1$):** If $|z| = r < 1$, then $|w| = r^2 < 1$. Points inside the unit circle are mapped to points inside the unit circle in the $w$-plane.
*   **Exterior of the Unit Circle ($|z| > 1$):** If $|z| = r > 1$, then $|w| = r^2 > 1$. Points outside the unit circle are mapped to points outside the unit circle in the $w$-plane.

#### 5. Critical Points and Branch Points

*   The derivative of $w = z^2$ is $dw/dz = 2z$.
*   The critical point is where $dw/dz = 0$, which is $z=0$. At $z=0$, the mapping is not conformal. The angle is doubled, so a small angle around $z=0$ is stretched to twice its size.
*   The function $w = z^2$ has a branch point at $z=0$. If we consider a loop around $z=0$, the argument of $z$ changes by $2\pi$, and the argument of $w$ changes by $4\pi$. This means the image in the $w$-plane goes around twice.

---

### Examples

**Example 1: Map the semi-disk $D = \{ z = x+iy \mid x \ge 0, y \ge 0, |z| \le 1 \}$ under $w = z^2$.**

*   The region $D$ is the part of the unit disk in the first quadrant.
*   For $z$ in $D$, we have $0 \le r \le 1$ and $0 \le \theta \le \pi/2$.
*   For $w = z^2 = r^2 e^{i(2\theta)}$, the mapped region has:
    *   $0^2 \le r^2 \le 1^2 \implies 0 \le |w| \le 1$.
    *   $2(0) \le 2\theta \le 2(\pi/2) \implies 0 \le \arg(w) \le \pi$.
*   This describes the upper semi-disk of radius 1 in the $w$-plane.
*   **Result:** The semi-disk $D$ is mapped to the region $\{ w = u+iv \mid v \ge 0, |w| \le 1 \}$.

**Example 2: Map the region between the lines $y=1$ and $y=2$ under $w = z^2$.**

*   For $y=1$, we found the parabola $v^2 = 4(1)^2(u + 1^2) \implies v^2 = 4(u+1)$. This parabola opens to the right and has vertex at $(-1, 0)$.
*   For $y=2$, we found the parabola $v^2 = 4(2)^2(u + 2^2) \implies v^2 = 16(u+4)$. This parabola opens to the right and has vertex at $(-4, 0)$.
*   Consider a point $z = x+iy$ where $1 \le y \le 2$ and $x$ is any real value.
*   The mapping $w = z^2$ transforms $u = x^2 - y^2$ and $v = 2xy$.
*   The lines $y=1$ and $y=2$ are mapped to the parabolas $v^2 = 4(u+1)$ and $v^2 = 16(u+4)$, respectively.
*   The region between these lines in the $z$-plane will be mapped to the region between these parabolas in the $w$-plane.
*   Since $v = 2xy$, the sign of $v$ depends on the signs of $x$ and $y$. For $y>0$, if $x>0$, $v>0$. If $x<0$, $v<0$.
*   **Result:** The region between the horizontal lines $y=1$ and $y=2$ is mapped to the region between the parabolas $v^2 = 4(u+1)$ and $v^2 = 16(u+4)$.

**Example 3: Map the sector $0 \le \theta \le \pi/4$ under $w = z^2$.**

*   For $z$ in this sector, $0 \le \arg(z) \le \pi/4$.
*   For $w = z^2$, the argument is $2 \arg(z)$.
*   So, $2(0) \le 2 \arg(z) \le 2(\pi/4) \implies 0 \le \arg(w) \le \pi/2$.
*   **Result:** This sector is mapped to a sector in the $w$-plane with the same radial boundaries (if any) but with angular boundaries $0$ and $\pi/2$.

---

### Practice Questions

1.  **Describe the image of the region $1 \le |z| \le 2$ and $0 \le \arg(z) \le \pi/2$ under the mapping $w = z^2$.**

    *   **Answer:** The region is mapped to an annular sector defined by $1^2 \le |w| \le 2^2$ and $2(0) \le \arg(w) \le 2(\pi/2)$, which simplifies to $1 \le |w| \le 4$ and $0 \le \arg(w) \le \pi$. This is a quarter of an annulus.

2.  **Find the image of the line $x=1$ in the $z$-plane under the mapping $w = z^2$.**

    *   **Answer:** We use $z = 1 + iy$. $w = (1+iy)^2 = 1 - y^2 + 2iy$.
        Let $w = u + iv$. Then $u = 1 - y^2$ and $v = 2y$.
        From $v = 2y$, we have $y = v/2$.
        Substitute into $u$: $u = 1 - (v/2)^2 = 1 - v^2/4$.
        Rearranging gives $v^2 = -4(u - 1)$, or $v^2 = -4u + 4$.
        This is a parabola opening to the left with vertex at $(1, 0)$.

3.  **What region in the $z$-plane is mapped to the first quadrant of the $w$-plane ($u \ge 0, v \ge 0$) by $w = z^2$?**

    *   **Answer:** For $w = u+iv$ to be in the first quadrant, we need $u \ge 0$ and $v \ge 0$.
        Let $z = re^{i\theta}$. Then $w = r^2 e^{i(2\theta)}$.
        $u = r^2 \cos(2\theta)$ and $v = r^2 \sin(2\theta)$.
        We need $r^2 \cos(2\theta) \ge 0$ and $r^2 \sin(2\theta) \ge 0$.
        Assuming $r > 0$:
        $\cos(2\theta) \ge 0 \implies -\pi/2 + 2k\pi \le 2\theta \le \pi/2 + 2k\pi$ for integer $k$.
        $\sin(2\theta) \ge 0 \implies 0 + 2k\pi \le 2\theta \le \pi + 2k\pi$ for integer $k$.
        Combining these, we need $0 + 2k\pi \le 2\theta \le \pi/2 + 2k\pi$.
        Dividing by 2: $k\pi \le \theta \le \pi/4 + k\pi$.
        For $k=0$: $0 \le \theta \le \pi/4$. This is a sector in the first quadrant.
        For $k=1$: $\pi \le \theta \le 5\pi/4$. This is a sector in the third quadrant.
        The origin $z=0$ maps to $w=0$.
        So, the region consists of two sectors: $0 \le \arg(z) \le \pi/4$ and $\pi \le \arg(z) \le 5\pi/4$.

---

### Important Points to Remember

*   **Polar Form is Key:** The mapping $w = z^2$ is best understood in polar coordinates: $z = r e^{i\theta} \implies w = r^2 e^{i(2\theta)}$.
*   **Magnitude Squaring, Angle Doubling:** $|w| = |z|^2$ and $\arg(w) = 2 \arg(z)$.
*   **Origin as a Special Point:** The origin $z=0$ is a critical point where the mapping is not conformal. Angles are doubled here.
*   **Lines Map to Parabolas:** Horizontal lines ($y=c \neq 0$) map to parabolas opening right; vertical lines ($x=c \neq 0$) map to parabolas opening left.
*   **Sectors Map to Wider Sectors:** The angular width of a sector is doubled.
*   **One-to-One Mapping:** $w = z^2$ is not a one-to-one mapping over the entire $z$-plane, as $z$ and $-z$ map to the same $w$ value ($(-z)^2 = z^2$). To achieve a one-to-one mapping, the domain of $z$ must be restricted (e.g., a half-plane).

---

### Alignment with Course Outcomes

*   **CO1 (Fourier Transforms):** While not directly used in this specific topic, the understanding of complex functions and their mappings is foundational for working with signal processing and Fourier analysis where complex exponentials and their properties are crucial.
*   **CO2 (Analyticity and Conformal Mapping):** The mapping $w=z^2$ is analytic everywhere except at $z=0$. At all other points ($z \neq 0$), the mapping is conformal because the derivative $dw/dz = 2z \neq 0$. Understanding how regions are transformed is a prerequisite for applying conformal mapping techniques.
*   **CO3 (Complex Integrals):** The geometric understanding of how regions are mapped is essential for transforming contour integrals from the $z$-plane to the $w$-plane.
*   **CO4 (Series Expansion & Residue Theorem):** The properties of $z^2$ as a function, including its behavior around singularities (like the branch point at $z=0$), are studied in the context of Laurent series and residue calculations.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=fNk_zzaMoEs) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |


### References and Content Incorporation

*   **Kreyszig, Erwin. *Advanced Engineering Mathematics*. (10th ed., 2016):** Kreyszig extensively covers transformations and mappings of complex functions in Chapter 13 ("Complex Integration") and Chapter 14 ("Conformal Mapping"). The discussion on how basic regions (lines, circles, sectors) are transformed under functions like $w=z^2$ is a core part of these chapters. Kreyszig often provides geometric illustrations of these mappings, which are crucial for visualizing the transformations.
*   **Zill & Shanahan, *Complex Analysis*. (3rd ed., 2015):** Zill and Shanahan also dedicate significant sections to mappings, particularly in their early chapters on analytic functions and transformations. They emphasize the geometric interpretation of complex functions, including the effects on magnitude and argument, which directly supports understanding $w=z^2$. Their treatment of branch points and the domain of univalence for $z^2$ would be relevant here.
*   **Ramana, B. V. *Higher Engineering Mathematics*. (39th ed., 2023):** Ramana's book typically includes a chapter on complex variables and their applications, often covering mappings. The focus would be on deriving the Cartesian and polar equations of the transformed curves.
*   **Grewal, B.S. *Higher Engineering Mathematics*. (44th ed., 2018):** Similar to Ramana, Grewal provides comprehensive coverage of complex numbers and their mappings. The transformation of basic geometric shapes is a standard topic.

The notes above synthesize the concepts of how $w=z^2$ transforms lines, rays, and sectors by utilizing the polar form $z=re^{i\theta}$ and its derivative $w=r^2e^{i2\theta}$, as described in the standard engineering mathematics textbooks referenced. The examples provided demonstrate the application of these principles. The discussion on the origin being a critical point and the non-one-to-one nature of the mapping is also a standard aspect covered in these texts, particularly when introducing conformal mapping.