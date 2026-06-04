---
title: "Complex Function"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 2: Complex Function"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35a62"
status: "completed"
scrapedAt: "2026-05-23T16:14:29.420Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 2: Complex Functions

This module delves into the fundamental concepts of complex functions, their properties, and applications in various scientific and engineering domains. We will explore concepts like analyticity, contour integration, and series expansions, which are crucial for understanding advanced topics such as Fourier transforms and conformal mapping.

---

### Topic: Complex Function

This topic introduces the concept of a complex function, defining its domain, codomain, and how to represent it in terms of its real and imaginary parts. We will also examine the conditions for a complex function to be differentiable, leading to the crucial concept of analyticity.

---

### Learning Outcomes:

By the end of this topic, you will be able to:

*   Define and represent complex functions.
*   Understand and apply the concept of continuity and differentiability for complex functions.
*   State and apply the Cauchy-Riemann equations to determine if a function is analytic.
*   Understand the concept of harmonic functions and their relationship to analytic functions.
*   Define and understand the concept of conformal mapping.

---

### Key Concepts and Definitions:

#### 1. Complex Functions

A **complex function** is a function whose domain and/or range are sets of complex numbers. We typically denote a complex function as $w = f(z)$, where $z = x + iy$ is the complex variable and $w = u + iv$ is the complex value of the function.

*   **Representation:** A complex function $f(z)$ can be expressed in terms of its real and imaginary parts:
    $f(z) = f(x + iy) = u(x, y) + iv(x, y)$
    where $u(x, y)$ is the real part and $v(x, y)$ is the imaginary part of $f(z)$.

*   **Domain and Range:** The **domain** of $f(z)$ is the set of complex numbers $z$ for which $f(z)$ is defined. The **range** is the set of all possible values of $w = f(z)$.

**Example:**
Let $f(z) = z^2$. We can write this in terms of $x$ and $y$:
$z = x + iy$
$f(z) = (x + iy)^2 = x^2 + 2ixy + (iy)^2 = x^2 + 2ixy - y^2 = (x^2 - y^2) + i(2xy)$
So, $u(x, y) = x^2 - y^2$ and $v(x, y) = 2xy$.

**Reference:** Kreyszig, Chapter 13, Section 13.1: Complex Functions

#### 2. Continuity of Complex Functions

A complex function $f(z)$ is **continuous** at a point $z_0$ if:
1.  $f(z_0)$ is defined.
2.  $\lim_{z \to z_0} f(z)$ exists.
3.  $\lim_{z \to z_0} f(z) = f(z_0)$.

For $f(z) = u(x, y) + iv(x, y)$ to be continuous at $z_0 = x_0 + iy_0$, both $u(x, y)$ and $v(x, y)$ must be continuous as real functions of two real variables at $(x_0, y_0)$.

**Example:**
The function $f(z) = z^2$ is continuous everywhere in the complex plane, as $u(x, y) = x^2 - y^2$ and $v(x, y) = 2xy$ are continuous polynomials.

#### 3. Differentiability of Complex Functions

A complex function $f(z)$ is **differentiable** at a point $z_0$ if the limit
$f'(z_0) = \lim_{\Delta z \to 0} \frac{f(z_0 + \Delta z) - f(z_0)}{\Delta z}$
exists. The limit must exist regardless of the path along which $\Delta z$ approaches zero.

#### 4. The Cauchy-Riemann Equations

The **Cauchy-Riemann equations** are a pair of partial differential equations that provide a necessary and sufficient condition for a complex function $f(z) = u(x, y) + iv(x, y)$ to be differentiable at a point $z_0 = x_0 + iy_0$, provided that the partial derivatives of $u$ and $v$ are continuous at $(x_0, y_0)$.

**Conditions for Differentiability:**
If $f(z) = u(x, y) + iv(x, y)$ is differentiable at $z_0$, then the following partial derivatives exist and satisfy the Cauchy-Riemann equations at $(x_0, y_0)$:
$$ \frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} \quad \text{and} \quad \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x} $$

**Sufficient Condition for Differentiability:**
If the partial derivatives $\frac{\partial u}{\partial x}$, $\frac{\partial u}{\partial y}$, $\frac{\partial v}{\partial x}$, and $\frac{\partial v}{\partial y}$ exist in a neighborhood of $z_0 = x_0 + iy_0$, are continuous at $(x_0, y_0)$, and satisfy the Cauchy-Riemann equations at $(x_0, y_0)$, then $f(z)$ is differentiable at $z_0$.

**Derivative in terms of partial derivatives:**
If $f(z)$ is differentiable at $z_0$, its derivative can be expressed as:
$$ f'(z_0) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} $$
or equivalently, using the Cauchy-Riemann equations:
$$ f'(z_0) = \frac{\partial v}{\partial y} - i \frac{\partial u}{\partial y} $$

**Example:**
Let $f(z) = z^2 = (x^2 - y^2) + i(2xy)$.
Here, $u(x, y) = x^2 - y^2$ and $v(x, y) = 2xy$.
Let's compute the partial derivatives:
$\frac{\partial u}{\partial x} = 2x$
$\frac{\partial u}{\partial y} = -2y$
$\frac{\partial v}{\partial x} = 2y$
$\frac{\partial v}{\partial y} = 2x$

Checking the Cauchy-Riemann equations:
$\frac{\partial u}{\partial x} = 2x$ and $\frac{\partial v}{\partial y} = 2x$. So, $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$.
$\frac{\partial u}{\partial y} = -2y$ and $-\frac{\partial v}{\partial x} = -(2y) = -2y$. So, $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$.
Since the Cauchy-Riemann equations are satisfied for all $(x, y)$ and the partial derivatives are continuous, $f(z) = z^2$ is differentiable everywhere.
The derivative is $f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} = 2x + i(2y) = 2(x+iy) = 2z$.

**Reference:** Kreyszig, Chapter 13, Section 13.2: Differentiation and Cauchy-Riemann Equations

#### 5. Analyticity (Holomorphic Functions)

A complex function $f(z)$ is said to be **analytic** (or **holomorphic**) in an open region $D$ if it is differentiable at every point $z$ in $D$. If $f(z)$ is analytic at a point $z_0$, it is also analytic in some neighborhood of $z_0$.

*   **Analytic at a Point:** A function $f(z)$ is analytic at a point $z_0$ if it is differentiable at $z_0$ and in some neighborhood around $z_0$.
*   **Analytic in a Region:** A function $f(z)$ is analytic in an open connected set (a region) if it is differentiable at every point in that set.

**Important Note:** If a function is differentiable at a point, it does not necessarily mean it is analytic at that point unless it is also differentiable in a neighborhood around that point.

**Examples of Analytic Functions:**
*   Polynomials in $z$: $P(z) = a_n z^n + a_{n-1} z^{n-1} + \dots + a_1 z + a_0$ are analytic everywhere in the complex plane.
*   $f(z) = e^z$ is analytic everywhere.
*   $f(z) = \sin z$, $f(z) = \cos z$ are analytic everywhere.

**Example of a function NOT analytic everywhere:**
Let $f(z) = \bar{z} = x - iy$.
Here, $u(x, y) = x$ and $v(x, y) = -y$.
$\frac{\partial u}{\partial x} = 1$
$\frac{\partial u}{\partial y} = 0$
$\frac{\partial v}{\partial x} = 0$
$\frac{\partial v}{\partial y} = -1$

Checking the Cauchy-Riemann equations:
$\frac{\partial u}{\partial x} = 1$, $\frac{\partial v}{\partial y} = -1$. So, $\frac{\partial u}{\partial x} \neq \frac{\partial v}{\partial y}$.
The Cauchy-Riemann equations are not satisfied anywhere. Therefore, $f(z) = \bar{z}$ is not differentiable at any point, and thus not analytic anywhere.

**Reference:** Kreyszig, Chapter 13, Section 13.3: Analytic Functions

#### 6. Harmonic Functions

A real-valued function $h(x, y)$ of two real variables is called **harmonic** in a region $D$ if its second partial derivatives exist and are continuous in $D$, and satisfy **Laplace's equation**:
$$ \nabla^2 h = \frac{\partial^2 h}{\partial x^2} + \frac{\partial^2 h}{\partial y^2} = 0 $$

**Relationship to Analytic Functions:**
If $f(z) = u(x, y) + iv(x, y)$ is analytic in a region $D$, then both its real part $u(x, y)$ and its imaginary part $v(x, y)$ are **harmonic** functions in $D$.

**Conjugate Harmonic Functions:**
If $u(x, y)$ and $v(x, y)$ are harmonic in $D$ and $f(z) = u(x, y) + iv(x, y)$ is analytic in $D$, then $v$ is called a **harmonic conjugate** of $u$ (and vice-versa).

**Finding the Harmonic Conjugate:**
Given a harmonic function $u(x, y)$, we can find its harmonic conjugate $v(x, y)$ using the Cauchy-Riemann equations:
$\frac{\partial v}{\partial y} = \frac{\partial u}{\partial x}$ and $\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y}$.
We can integrate these equations with respect to $y$ and $x$ respectively, and then combine the results to find $v(x, y)$.

**Example:**
We saw that $f(z) = z^2 = (x^2 - y^2) + i(2xy)$ is analytic.
$u(x, y) = x^2 - y^2$ and $v(x, y) = 2xy$.
Let's check if they are harmonic:
For $u(x, y) = x^2 - y^2$:
$\frac{\partial u}{\partial x} = 2x$, $\frac{\partial^2 u}{\partial x^2} = 2$
$\frac{\partial u}{\partial y} = -2y$, $\frac{\partial^2 u}{\partial y^2} = -2$
$\nabla^2 u = \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 2 + (-2) = 0$. So, $u$ is harmonic.

For $v(x, y) = 2xy$:
$\frac{\partial v}{\partial x} = 2y$, $\frac{\partial^2 v}{\partial x^2} = 0$
$\frac{\partial v}{\partial y} = 2x$, $\frac{\partial^2 v}{\partial y^2} = 0$
$\nabla^2 v = \frac{\partial^2 v}{\partial x^2} + \frac{\partial^2 v}{\partial y^2} = 0 + 0 = 0$. So, $v$ is harmonic.
Thus, $v(x, y) = 2xy$ is the harmonic conjugate of $u(x, y) = x^2 - y^2$.

**Reference:** Kreyszig, Chapter 13, Section 13.4: Harmonic Functions

#### 7. Conformal Mapping

A mapping $w = f(z)$ is called **conformal** at a point $z_0$ if it preserves angles between curves passing through $z_0$ in magnitude and direction.

**Conditions for Conformal Mapping:**
If $f(z)$ is analytic in a region $D$, and $f'(z_0) \neq 0$ at a point $z_0$ in $D$, then the mapping $w = f(z)$ is conformal at $z_0$.

**Properties of Conformal Mappings:**
*   **Angle Preservation:** Conformal mappings preserve the angles between intersecting curves (both magnitude and orientation).
*   **Local Scaling:** In a small neighborhood around $z_0$, the mapping acts like a rotation and a uniform magnification by $|f'(z_0)|$.

**Significance in Physical Sciences and Engineering:**
Conformal mappings are powerful tools for solving boundary value problems in:
*   **Fluid Dynamics:** Mapping complex flow regions to simpler ones.
*   **Electrostatics:** Determining electric potentials in complex geometries.
*   **Heat Conduction:** Analyzing temperature distribution.

**Example:**
The mapping $w = z^2$ is conformal at all points except $z=0$.
At $z = 1 + i$, $f'(z) = 2z$. So, $f'(1+i) = 2(1+i) \neq 0$.
The mapping $w = z^2$ is conformal at $z = 1+i$. The angle between any two curves passing through $1+i$ is preserved in the $w$-plane.

Consider the curves $y=x$ and $y=-x$ passing through $z=0$.
The angle between them is $\pi/2$.
For $w = z^2 = (x^2 - y^2) + i(2xy)$:
The curve $y=x$ maps to $u = x^2 - x^2 = 0$ and $v = 2x^2$. So, $v = 2u^2$ (a parabola).
The curve $y=-x$ maps to $u = x^2 - (-x)^2 = 0$ and $v = 2x(-x) = -2x^2$. So, $v = -2u^2$ (another parabola).
At $z=0$, $f'(z) = 2z = 0$. The mapping is not conformal at $z=0$. The angle between the curves in the $w$-plane is $\pi/2$, but the angle between the corresponding curves $v=2u^2$ and $v=-2u^2$ at $u=0$ is not necessarily preserved in the same way as it would be for a conformal mapping.

**Reference:** Kreyszig, Chapter 13, Section 13.5: Conformal Mapping

---

### Course Outcomes Alignment:

*   **CO1: Determine the Fourier transforms of functions and apply them to solve problems arising in engineering. (Knowledge Level: K3)**
    *   While this topic doesn't directly cover Fourier Transforms, the understanding of complex functions is foundational for their analysis. Fourier Transform theory heavily relies on complex exponentials and integration in the complex plane.

*   **CO2: Understand the analyticity of complex functions and apply it in conformal mapping. (Knowledge Level: K3)**
    *   This topic directly addresses the concept of analyticity (Sections 5) and its application in conformal mapping (Section 7). The conditions for analyticity (Cauchy-Riemann equations) and the criteria for a mapping to be conformal ($f'(z) \neq 0$) are core to this outcome.

*   **CO3: Compute complex integrals using Cauchy's integral theorem and Cauchy's integral formula. (Knowledge Level: K3)**
    *   This topic lays the groundwork for CO3. The concept of differentiability and analyticity is essential before one can discuss contour integration and its powerful theorems.

*   **CO4: Understand the series expansion of complex function about a singularity and apply residue theorem to compute real integrals. (Knowledge Level: K3)**
    *   Similar to CO3, this topic provides the necessary foundational knowledge of complex functions, which is a prerequisite for understanding series expansions and the residue theorem.

---

### Important Points to Remember:

*   A complex function $f(z) = u(x, y) + iv(x, y)$ is differentiable at $z_0$ if the Cauchy-Riemann equations ($\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$ and $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$) are satisfied and the partial derivatives are continuous.
*   **Analyticity** is a stronger condition than differentiability; a function is analytic in a region if it is differentiable at every point in that region.
*   If $f(z)$ is analytic, its real and imaginary parts ($u$ and $v$) are **harmonic** functions, meaning they satisfy Laplace's equation ($\nabla^2 u = 0$ and $\nabla^2 v = 0$).
*   A mapping $w = f(z)$ is **conformal** at $z_0$ if $f(z)$ is analytic at $z_0$ and $f'(z_0) \neq 0$. Conformal mappings preserve angles in both magnitude and direction.

---

### Practice Questions/Exercises:

**1. Representation and Differentiability:**
Given $f(z) = z^3$.
a) Express $f(z)$ in the form $u(x, y) + iv(x, y)$.
b) Verify if $f(z)$ is differentiable everywhere.
c) Find the derivative $f'(z)$.

**Answer:**
a) $z = x + iy$
$f(z) = (x+iy)^3 = x^3 + 3x^2(iy) + 3x(iy)^2 + (iy)^3$
$f(z) = x^3 + 3ix^2y - 3xy^2 - iy^3$
$f(z) = (x^3 - 3xy^2) + i(3x^2y - y^3)$
So, $u(x, y) = x^3 - 3xy^2$ and $v(x, y) = 3x^2y - y^3$.

b) Compute partial derivatives:
$\frac{\partial u}{\partial x} = 3x^2 - 3y^2$
$\frac{\partial u}{\partial y} = -6xy$
$\frac{\partial v}{\partial x} = 6xy$
$\frac{\partial v}{\partial y} = 3x^2 - 3y^2$

Check Cauchy-Riemann equations:
$\frac{\partial u}{\partial x} = 3x^2 - 3y^2$ and $\frac{\partial v}{\partial y} = 3x^2 - 3y^2$. They are equal.
$\frac{\partial u}{\partial y} = -6xy$ and $-\frac{\partial v}{\partial x} = -(6xy) = -6xy$. They are equal.
Since the Cauchy-Riemann equations are satisfied for all $(x, y)$ and the partial derivatives are continuous (they are polynomials), $f(z) = z^3$ is differentiable everywhere.

c) $f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} = (3x^2 - 3y^2) + i(6xy)$.
Alternatively, we know that the derivative of $z^3$ is $3z^2$.
$3z^2 = 3(x+iy)^2 = 3(x^2 + 2ixy - y^2) = 3(x^2 - y^2) + i(6xy)$.
This matches our result.

**2. Analyticity and Harmonic Functions:**
Given $f(z) = e^x (\cos y + i \sin y)$.
a) Express $f(z)$ in the form $u(x, y) + iv(x, y)$.
b) Determine if $f(z)$ is analytic. If so, find its derivative.
c) Verify if $u(x, y)$ and $v(x, y)$ are harmonic.

**Answer:**
a) $f(z) = e^x \cos y + i e^x \sin y$.
So, $u(x, y) = e^x \cos y$ and $v(x, y) = e^x \sin y$.

b) Compute partial derivatives:
$\frac{\partial u}{\partial x} = e^x \cos y$
$\frac{\partial u}{\partial y} = -e^x \sin y$
$\frac{\partial v}{\partial x} = e^x \sin y$
$\frac{\partial v}{\partial y} = e^x \cos y$

Check Cauchy-Riemann equations:
$\frac{\partial u}{\partial x} = e^x \cos y$ and $\frac{\partial v}{\partial y} = e^x \cos y$. They are equal.
$\frac{\partial u}{\partial y} = -e^x \sin y$ and $-\frac{\partial v}{\partial x} = -(e^x \sin y) = -e^x \sin y$. They are equal.
Since the Cauchy-Riemann equations are satisfied for all $(x, y)$ and the partial derivatives are continuous, $f(z)$ is analytic everywhere.
The derivative is $f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} = e^x \cos y + i e^x \sin y = e^x (\cos y + i \sin y) = e^x e^{iy} = e^{x+iy} = e^z$.

c) Verify if $u(x, y)$ and $v(x, y)$ are harmonic:
For $u(x, y) = e^x \cos y$:
$\frac{\partial u}{\partial x} = e^x \cos y$, $\frac{\partial^2 u}{\partial x^2} = e^x \cos y$
$\frac{\partial u}{\partial y} = -e^x \sin y$, $\frac{\partial^2 u}{\partial y^2} = -e^x \cos y$
$\nabla^2 u = e^x \cos y + (-e^x \cos y) = 0$. So, $u$ is harmonic.

For $v(x, y) = e^x \sin y$:
$\frac{\partial v}{\partial x} = e^x \sin y$, $\frac{\partial^2 v}{\partial x^2} = e^x \sin y$
$\frac{\partial v}{\partial y} = e^x \cos y$, $\frac{\partial^2 v}{\partial y^2} = -e^x \sin y$
$\nabla^2 v = e^x \sin y + (-e^x \sin y) = 0$. So, $v$ is harmonic.
Thus, $u$ and $v$ are harmonic.

**3. Conformal Mapping:**
Consider the mapping $w = z^2$.
a) At what points is this mapping conformal?
b) Consider the lines $y=x$ and $y=-x$ passing through $z=0$. What is the angle between them?
c) What are the images of these lines under the mapping $w = z^2$?
d) What is the angle between the images of these lines in the $w$-plane at $w=0$?

**Answer:**
a) The mapping $w = z^2$ is conformal where $f'(z) \neq 0$.
$f'(z) = 2z$.
So, the mapping is conformal for all $z$ such that $2z \neq 0$, which means $z \neq 0$.

b) The lines $y=x$ and $y=-x$ are perpendicular, so the angle between them is $\pi/2$ radians (or 90 degrees).

c) Let $z = x+iy$.
If $y=x$, then $z = x + ix = x(1+i)$.
$w = z^2 = (x(1+i))^2 = x^2 (1+i)^2 = x^2 (1 + 2i + i^2) = x^2 (1 + 2i - 1) = x^2 (2i) = 2x^2 i$.
Let $w = u + iv$. Then $u = 0$ and $v = 2x^2$. This is a part of the positive $v$-axis (since $x^2 \ge 0$). More accurately, it's the ray $v = 2u^2$ where $u=0$ and $v \ge 0$.

If $y=-x$, then $z = x - ix = x(1-i)$.
$w = z^2 = (x(1-i))^2 = x^2 (1-i)^2 = x^2 (1 - 2i + i^2) = x^2 (1 - 2i - 1) = x^2 (-2i) = -2x^2 i$.
Let $w = u + iv$. Then $u = 0$ and $v = -2x^2$. This is a part of the negative $v$-axis. More accurately, it's the ray $v = -2u^2$ where $u=0$ and $v \le 0$.

d) The images are the positive $v$-axis ($u=0, v \ge 0$) and the negative $v$-axis ($u=0, v \le 0$). These two rays form the $v$-axis. The angle between them at $w=0$ is $\pi$ radians (or 180 degrees).

Wait, there seems to be a misunderstanding in the problem interpretation or my example. Let's re-evaluate.

**Revisiting Example 3(d):**
The lines $y=x$ and $y=-x$ intersect at $z=0$ with an angle of $\pi/2$.
The mapping $w=z^2$ is NOT conformal at $z=0$ because $f'(0)=0$.
The angle scaling factor is $|f'(z)|$ and the angle rotation is $\arg(f'(z))$.
At $z=0$, the scaling factor is 0, and the argument is undefined.

Let's consider the curves $y=x$ and $y=0$ passing through $z=1$. The angle is $\pi/4$.
$f'(1) = 2(1) = 2$. The angle is preserved, scaled by $|f'(1)|=2$.
$y=x \implies z = x(1+i)$. $w = z^2 = x^2(2i)$. This maps to the $v$-axis $u=0, v=2x^2$.
$y=0 \implies z = x$. $w = z^2 = x^2$. This maps to the $u$-axis $u=x^2, v=0$.

The original angle between $y=x$ and $y=0$ at $z=1$ is indeed $\pi/4$.
The image of $y=x$ is $u=0, v=2x^2$.
The image of $y=0$ is $u=x^2, v=0$.
These intersect at $w=0$.

Let's consider curves passing through $z=1$.
Curve 1: $y=x$. $z=x(1+i)$. $\arg(z) = \pi/4$.
Curve 2: $y=0$. $z=x$. $\arg(z) = 0$.
Angle is $\pi/4$.

$w=z^2$.
Image of Curve 1: $w = (x(1+i))^2 = x^2(2i)$. This is the ray $v=2u^2$ where $u=0, v \ge 0$ (the positive v-axis segment).
Image of Curve 2: $w = x^2$. This is the ray $u=x^2, v=0$ where $v=0, u \ge 0$ (the positive u-axis segment).

The angle between the positive $v$-axis and the positive $u$-axis is $\pi/2$.
The angle between the rays $y=x$ and $y=0$ at $z=1$ was $\pi/4$.
The mapping $w=z^2$ at $z=1$ is conformal. $f'(1)=2$.
The angle should be scaled by $|f'(1)|=2$. So the new angle should be $(\pi/4) \times 2 = \pi/2$.
This confirms that the mapping $w=z^2$ preserves the angle of $\pi/4$ between the lines $y=x$ and $y=0$ at $z=1$.

**Correction for 3(d):** The question asks about the angle between the images of $y=x$ and $y=-x$ in the $w$-plane.
The image of $y=x$ is the ray $u=0, v=2x^2$.
The image of $y=-x$ is the ray $u=0, v=-2x^2$.
These are the positive and negative $v$-axis segments originating from $w=0$.
The angle between the positive $v$-axis and the negative $v$-axis is $\pi$ (180 degrees).

However, the original angle between $y=x$ and $y=-x$ at $z=0$ was $\pi/2$. Since the mapping is NOT conformal at $z=0$, the angle is not preserved. The question might be implicitly assuming a limit or asking about the behaviour around $z=0$.

Let's consider a point near $z=0$, say $z = \epsilon (1+i)$ and $z = \epsilon (1-i)$ for small $\epsilon > 0$. The angle between these two points relative to the origin is $\pi/2$.
Their images are $w_1 = \epsilon^2 (2i)$ and $w_2 = \epsilon^2 (-2i)$.
These are points on the positive and negative $v$-axis respectively. The angle between $w_1$ and $w_2$ at the origin is $\pi$. This shows the angle doubling.

**Final Answer for 3(d):** The angle between the image of $y=x$ (positive $v$-axis segment) and the image of $y=-x$ (negative $v$-axis segment) in the $w$-plane is $\pi$ radians. This is consistent with the angle doubling property of $w=z^2$ for non-conformal points.

---
