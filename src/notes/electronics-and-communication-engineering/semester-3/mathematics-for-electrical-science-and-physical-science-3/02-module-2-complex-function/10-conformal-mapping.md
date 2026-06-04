---
title: "Conformal mapping"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 2: Complex Function"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe262"
status: "completed"
scrapedAt: "2026-05-23T17:47:07.097Z"
---
# Mathematics for Electrical Science and Physical Science – 3

## Module 2: Complex Functions

### Topic: Conformal Mapping

---

### 1. Introduction to Conformal Mapping

**Definition:**
A transformation $w = f(z)$ is called **conformal** at a point $z_0$ if it preserves angles between curves passing through $z_0$ in magnitude and direction.

**Key Concepts:**

*   **Geometric Interpretation:** Conformal mapping preserves the shape of small regions. It's like a distortion that doesn't introduce any "bending" or "tearing" at the point of conformality.
*   **Angle Preservation:** If two curves $C_1$ and $C_2$ intersect at $z_0$ with an angle $\theta$, and their images under $w = f(z)$ are $C_1'$ and $C_2'$ intersecting at $w_0 = f(z_0)$, then the angle between $C_1'$ and $C_2'$ is also $\theta$. This holds for both magnitude and orientation.
*   **Magnification Factor:** The ratio of the lengths of infinitesimally small segments is constant in all directions at a point of conformality. This magnification factor is given by $|f'(z_0)|$.

**Condition for Conformality:**
A transformation $w = f(z)$ is conformal at a point $z_0$ if and only if $f(z)$ is analytic at $z_0$ and $f'(z_0) \neq 0$.

**Analyticity and Conformality (Relating to CO2):**
*   **Analyticity:** A function $f(z)$ is analytic at $z_0$ if it is differentiable in some neighborhood of $z_0$. This implies that the Cauchy-Riemann equations are satisfied and the partial derivatives are continuous in that neighborhood. (Kreyszig, 10th ed., Chapter 12)
*   **Connection:** Analyticity of $f(z)$ ensures that the mapping is locally "smooth." The additional condition $f'(z_0) \neq 0$ ensures that the mapping does not shrink or stretch the space to a point at $z_0$, thus preserving angles.

**Why is it important in Electrical and Physical Science?**
Conformal mapping is a powerful tool for solving boundary value problems in two-dimensional fields, such as:
*   **Electrostatics:** Mapping complex potential functions to simplify geometries in electric field calculations.
*   **Fluid Dynamics:** Mapping flow patterns to analyze fluid motion.
*   **Heat Conduction:** Solving steady-state heat distribution problems.
*   **Elasticity:** Analyzing stress distribution.

**Reference:** Kreyszig's Advanced Engineering Mathematics, Chapter 12, Section 12.7, discusses conformal mappings and their properties. Zill and Shanahan's Complex Analysis, Chapter 8, also provides a detailed treatment.

---

### 2. Properties of Conformal Mappings

**Key Properties:**

*   **Angle Preservation:** As stated in the definition, angles between intersecting curves are preserved.
*   **Local Scaling:** Infinitesimal shapes are scaled by $|f'(z)|$. If $dz$ is a small vector in the $z$-plane, its image $dw = f'(z)dz$ in the $w$-plane has magnitude $|dw| = |f'(z)| |dz|$.
*   **Local Rotation:** The direction of the vector $dz$ is rotated by $\arg(f'(z))$. The angle of rotation is independent of the direction of $dz$.

**Important Theorem:**
If $f(z)$ is analytic in a domain $D$, then $f(z)$ is conformal at every point $z \in D$ where $f'(z) \neq 0$.

**Conversely:**
If $f(z)$ is a conformal mapping in a domain $D$, then $f(z)$ must be analytic in $D$.

**Reference:** Kreyszig (10th ed., Section 12.7) emphasizes these properties.

---

### 3. Examples of Conformal Mappings

**3.1. Translation:** $w = z + b$
*   **Properties:**
    *   $f'(z) = 1$. Since $f'(z) \neq 0$ everywhere, translation is conformal everywhere.
    *   Preserves distances and angles. It's just a rigid shift of the $z$-plane to the $w$-plane.
*   **Example:** Mapping $z_0$ to $z_0 + b$.

**3.2. Rotation:** $w = e^{i\phi} z$ (where $\phi$ is a real constant)
*   **Properties:**
    *   $f'(z) = e^{i\phi}$. Since $|f'(z)| = 1 \neq 0$, rotation is conformal everywhere.
    *   Rotates the plane by an angle $\phi$ around the origin. Preserves distances and angles.
*   **Example:** Mapping a point $z$ to $z$ rotated by $\phi$ counterclockwise around the origin.

**3.3. Magnification:** $w = az$ (where $a$ is a non-zero complex constant)
*   **Properties:**
    *   $f'(z) = a$. Since $a \neq 0$, magnification is conformal everywhere.
    *   If $a > 0$, it's a pure magnification by a factor of $a$.
    *   If $a$ is complex ($a = |a|e^{i\phi}$), it's a magnification by $|a|$ followed by a rotation by $\phi$.
*   **Example:** Mapping $z$ to $2z$ magnifies distances by 2. Mapping $z$ to $iz$ rotates by $\pi/2$.

**3.4. Linear Transformation:** $w = az + b$ ($a \neq 0$)
*   **Properties:**
    *   $f'(z) = a \neq 0$. Conformal everywhere.
    *   Combines magnification, rotation, and translation.
*   **Example:** $w = 2z + i$. This maps $z=1$ to $w=2+i$.

**3.5. Inversion:** $w = 1/z$
*   **Properties:**
    *   $f'(z) = -1/z^2$. This is analytic everywhere except at $z=0$.
    *   $f'(z) \neq 0$ for all finite $z$.
    *   Therefore, $w = 1/z$ is conformal everywhere except at $z=0$ and $z=\infty$.
*   **Geometric Interpretation:**
    *   Circles and lines are mapped to circles and lines.
    *   A circle passing through the origin is mapped to a line.
    *   A line not passing through the origin is mapped to a circle passing through the origin.
*   **Example:**
    *   Map the unit circle $|z|=1$ to $|w|=1$.
    *   Map the upper half-plane $\text{Im}(z) > 0$ to the unit disk $|w| < 1$.

**3.6. Fractional Linear Transformations (Möbius Transformations):** $w = \frac{az+b}{cz+d}$, where $ad-bc \neq 0$.
*   **Properties:**
    *   $f'(z) = \frac{ad-bc}{(cz+d)^2}$.
    *   Conformal everywhere except at $z = -d/c$ and $z = \infty$.
    *   These are very important as they map circles and lines to circles and lines.
*   **Example:** The inversion $w=1/z$ is a special case where $a=0, b=1, c=1, d=0$.

**3.7. Power Functions:** $w = z^n$ ($n$ is an integer)
*   **Properties:**
    *   $f'(z) = nz^{n-1}$.
    *   Conformal at $z$ if $nz^{n-1} \neq 0$. This means $z \neq 0$ (if $n > 1$) and $n \neq 0$.
    *   At $z=0$, if $n>1$, the angle is magnified by $n$. For example, $w=z^2$ maps the positive real axis to itself and the positive imaginary axis to itself. The angle between them is $\pi/2$. Under $w=z^2$, the angle becomes $\pi$. So angles are multiplied by $n$.
*   **Example:** $w=z^2$.
    *   The upper half-plane $\text{Im}(z) > 0$ is mapped to the entire $w$-plane except for the positive real axis.
    *   The first quadrant ($0 < \arg(z) < \pi/2$) is mapped to the upper half-plane ($0 < \arg(w) < \pi$). The angle $\pi/2$ is doubled to $\pi$.

**Reference:** Kreyszig (10th ed., Section 12.7) and Zill & Shanahan (3rd ed., Chapter 8) provide numerous examples of these transformations and their effects on regions. Ramana's Higher Engineering Mathematics also covers common transformations.

---

### 4. Applications of Conformal Mapping in Problem Solving

Conformal mapping is particularly useful for solving Laplace's equation in two dimensions.

**Laplace's Equation:**
$\nabla^2 \phi = \frac{\partial^2 \phi}{\partial x^2} + \frac{\partial^2 \phi}{\partial y^2} = 0$

If $\phi(x, y)$ is a solution to Laplace's equation (a harmonic function), and $w = f(z)$ is a conformal mapping ($z=x+iy, w=u+iv$), then $\psi(u, v) = \phi(x(u, v), y(u, v))$ is also a harmonic function in the $w$-plane. This means that harmonic functions remain harmonic under conformal mapping.

**Key Idea:**
1.  **Identify the Domain and Boundary Conditions:** The physical problem is defined in a certain region of the $z$-plane with specified conditions on its boundaries (e.g., constant potential, zero heat flux).
2.  **Map to a Simpler Domain:** Find a conformal map $w = f(z)$ that transforms the original complex domain into a simpler domain in the $w$-plane (e.g., a rectangle, a disk, a half-plane) where Laplace's equation is easier to solve.
3.  **Solve in the Simpler Domain:** Solve Laplace's equation in the $w$-plane with the transformed boundary conditions.
4.  **Map Back:** Use the inverse mapping $z = f^{-1}(w)$ to obtain the solution $\phi(x, y)$ in the original $z$-plane.

**Example Scenario: Electrostatics**
Consider a problem of finding the electric potential $\phi(x, y)$ in a region between two conductors. If the geometry is complicated, we can use conformal mapping to transform it into a simpler geometry (like parallel plates or concentric cylinders) where the potential is known.

**Reference:** Kreyszig (10th ed., Section 12.8) details the application of conformal mapping to boundary value problems.

---

### 5. Practice Questions and Exercises

**Question 1:**
Determine if the transformation $w = z^2$ is conformal at $z_0 = 1+i$. If so, find the angle of rotation and magnification at this point.

**Solution:**
*   The function is $f(z) = z^2$. It is analytic everywhere.
*   Its derivative is $f'(z) = 2z$.
*   At $z_0 = 1+i$, $f'(1+i) = 2(1+i)$.
*   Since $f'(1+i) \neq 0$, the mapping is conformal at $z_0 = 1+i$.
*   The magnification factor is $|f'(1+i)| = |2(1+i)| = 2|1+i| = 2\sqrt{1^2+1^2} = 2\sqrt{2}$.
*   The angle of rotation is $\arg(f'(1+i)) = \arg(2(1+i)) = \arg(1+i)$. Since $1+i$ is in the first quadrant, $\arg(1+i) = \arctan(1/1) = \pi/4$ radians or 45 degrees.

**Question 2:**
Show that the transformation $w = 1/z$ maps circles and lines to circles and lines.

**Solution:**
Consider a general circle or line in the $z$-plane:
$Az\bar{z} + Bz + \bar{B}\bar{z} + C = 0$, where $A, C$ are real, and $B$ is complex.
If $A=0$, it's a line. If $A \neq 0$, it's a circle.

Let $w = 1/z$, so $z = 1/w$. Substituting this into the equation:
$A(1/w)(1/\bar{w}) + B(1/w) + \bar{B}(1/\bar{w}) + C = 0$
Multiply by $w\bar{w}$:
$A + B\bar{w} + \bar{B}w + Cw\bar{w} = 0$
Rearrange:
$Cw\bar{w} + \bar{B}w + B\bar{w} + A = 0$

*   If $C=0$, this equation becomes $\bar{B}w + B\bar{w} + A = 0$. This is the equation of a line in the $w$-plane (since $B$ is complex, let $B = B_1 + iB_2$, then $(B_1 - iB_2)w + (B_1 + iB_2)\bar{w} + A = 0$, which simplifies to $2B_1 \text{Re}(w) - 2B_2 \text{Im}(w) + A = 0$, a line). This corresponds to the case where the original circle passed through the origin ($A \neq 0, C=0$).
*   If $C \neq 0$, we can divide by $C$: $w\bar{w} + (\bar{B}/C)w + (B/C)\bar{w} + A/C = 0$. This is the equation of a circle in the $w$-plane. This corresponds to the case where the original circle did not pass through the origin ($A \neq 0, C \neq 0$) or it was a line not passing through the origin ($A=0, C \neq 0$ leads to a circle after dividing by C).
This demonstrates that $w=1/z$ maps circles and lines to circles and lines.

**Question 3:**
Find a conformal mapping that transforms the upper half-plane $\text{Im}(z) > 0$ onto the unit disk $|w| < 1$.

**Solution:**
This is a classic problem. The mapping is given by a specific Möbius transformation.
The transformation must map the real axis ($\text{Im}(z)=0$) to the unit circle $|w|=1$.
Consider the mapping $w = f(z) = e^{i\alpha} \frac{z-z_0}{\bar{z_0}z-1}$, where $|z_0| \neq 1$.
To map the upper half-plane to the unit disk, we need to choose $z_0$ such that the imaginary part of $z_0$ is positive or negative (depending on the orientation) and then adjust $e^{i\alpha}$.
A common choice is $z_0 = i$ and $\alpha = 0$.
So, $w = \frac{z-i}{iz-1}$.
Let's check:
*   When $z=i$, $w = \frac{i-i}{i(i)-1} = \frac{0}{-1-1} = 0$. The point $z=i$ (in the upper half-plane) is mapped to the center of the disk.
*   When $z \to \infty$ along the real axis, $w \approx \frac{z}{iz} = \frac{1}{i} = -i$. This point is on the unit circle.
*   When $z=0$ (on the real axis), $w = \frac{0-i}{i(0)-1} = \frac{-i}{-1} = i$. This point is on the unit circle.
*   When $z=1$ (on the real axis), $w = \frac{1-i}{i-1} = \frac{1-i}{-(1-i)} = -1$. This point is on the unit circle.
The mapping $w = \frac{z-i}{iz-1}$ maps the upper half-plane $\text{Im}(z) > 0$ to the unit disk $|w|<1$.

*(Note: Other variations like $w = i \frac{z-i}{z+i}$ or $w = \frac{z-a}{z-\bar{a}}$ for $\text{Im}(a)>0$ also work, possibly with a rotation factor.)*

**Question 4:**
What are the conditions for a transformation $w = f(z)$ to be conformal at a point $z_0$?
*(Answer based on Section 1)*

**Answer:** The transformation $w = f(z)$ is conformal at $z_0$ if $f(z)$ is analytic at $z_0$ and $f'(z_0) \neq 0$.

---

### 6. Important Points to Remember

*   **Conformality:** Preserves angles in both magnitude and direction.
*   **Conditions:** $f(z)$ must be analytic and $f'(z_0) \neq 0$ at the point of conformality.
*   **Local Behavior:** A conformal map locally behaves like a magnification by $|f'(z)|$ and a rotation by $\arg(f'(z))$.
*   **Applications:** Crucial for solving 2D boundary value problems (Laplace's equation) in physics and engineering by simplifying geometries.
*   **Möbius Transformations:** A special class of functions ($w = \frac{az+b}{cz+d}$) that map circles and lines to circles and lines and are conformal everywhere except at poles.
*   **$w=z^n$:** Angles are multiplied by $n$ at $z=0$.

---

### 7. Relation to Course Outcomes

*   **CO1: Fourier Transforms:** While this topic doesn't directly involve Fourier transforms, the mathematical techniques for analyzing functions (like differentiability) are foundational. Fourier transforms are often used in conjunction with boundary value problems, which conformal mapping helps to solve.
*   **CO2: Analyticity and Conformal Mapping:** This is the core of the topic. Understanding analyticity (as discussed in earlier parts of Module 2) is essential for understanding conformality. The entire module is dedicated to this relationship. **Directly addressed.**
*   **CO3: Complex Integrals:** Conformal mapping can sometimes be used to transform the path of integration for complex integrals, potentially simplifying calculations. For instance, if the original domain is complex but maps conformally to a simpler domain, the integral over the original path might be transformed into an integral over a simpler path in the new domain.
*   **CO4: Series Expansion and Residue Theorem:** Conformal mapping can be used to understand the behavior of functions near singularities. However, the direct application of series expansion and the residue theorem to compute integrals is a separate but related technique for solving problems that might also be addressed by conformal mapping.

---

This set of notes provides a comprehensive overview of conformal mapping, covering its definition, properties, important examples, and applications, with a focus on its relevance to the course outcomes, particularly CO2. The references point to standard textbooks where further details can be found.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=fNk_zzaMoEs) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
