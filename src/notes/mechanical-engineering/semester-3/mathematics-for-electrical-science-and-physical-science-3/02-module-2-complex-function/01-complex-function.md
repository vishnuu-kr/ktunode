---
title: "Complex Function"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 2: Complex Function"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462c9c"
status: "completed"
scrapedAt: "2026-05-20T17:50:37.259Z"
---
# Mathematics for Electrical Science and Physical Science – 3

## Module 2: Complex Functions

### Topic: Complex Function

---

This module introduces the fundamental concepts of complex functions, which are essential for advanced analysis in electrical science and physical science. We will explore the definition of a complex function, its properties, and various ways to represent and analyze them. This understanding will pave the way for topics like analyticity, integration, and series expansions, which are crucial for solving complex problems in these fields.

---

### Learning Outcomes:

*   Understand the definition and representation of complex functions.
*   Analyze the basic properties of complex functions, including limits, continuity, and derivatives.
*   Introduce the concept of analytic functions and their significance.
*   Explore conformal mapping and its applications.
*   Compute complex integrals using Cauchy's integral theorem and Cauchy's integral formula.
*   Understand series expansions of complex functions about singularities and apply the residue theorem to compute real integrals.

---

### Course Outcomes Alignment:

This topic directly contributes to:

*   **CO2: Understand the analyticity of complex functions and apply it in conformal mapping. (Knowledge Level: K3)**
*   **CO3: Compute complex integrals using Cauchy's integral theorem and Cauchy's integral formula. (Knowledge Level: K3)**
*   **CO4: Understand the series expansion of complex function about a singularity and apply residue theorem to compute real integrals. (Knowledge Level: K3)**

---

## 1. Introduction to Complex Functions

### 1.1 Definition of a Complex Function

A **complex function** $f$ is a rule that assigns to each complex number $z$ in a set $D$ (the domain) a unique complex number $w$. We write $w = f(z)$.

*   **Domain (D):** The set of complex numbers $z$ for which $f(z)$ is defined.
*   **Range:** The set of values $w = f(z)$ for $z$ in $D$.

**Example:** $f(z) = z^2$. If $z = 2 + 3i$, then $f(z) = (2+3i)^2 = 4 + 12i + 9i^2 = 4 + 12i - 9 = -5 + 12i$.

### 1.2 Representation of Complex Functions

A complex number $z$ can be written as $z = x + iy$, where $x$ is the real part and $y$ is the imaginary part. A complex function $f(z)$ can be expressed in terms of its real and imaginary parts.

Let $f(z) = u(x, y) + iv(x, y)$, where $u(x, y)$ is the real part and $v(x, y)$ is the imaginary part of $f(z)$.

*   $u(x, y)$ and $v(x, y)$ are real-valued functions of two real variables $x$ and $y$.

**Example:** $f(z) = z^2$
If $z = x + iy$, then $f(z) = (x + iy)^2 = x^2 + 2ixy + (iy)^2 = x^2 + 2ixy - y^2 = (x^2 - y^2) + i(2xy)$.
So, $u(x, y) = x^2 - y^2$ and $v(x, y) = 2xy$.

**Key Point:** Understanding the real and imaginary parts of a complex function is crucial for visualizing its behavior and analyzing its properties.

### 1.3 Graphical Representation

Visualizing complex functions is more challenging than real functions.

*   **2D to 2D Mapping:** A complex function maps points from a $z$-plane (domain) to a $w$-plane (range). This involves mapping two real variables $(x, y)$ to two other real variables $(u, v)$.
*   **Domain Coloring:** Assigning colors to points in the $z$-plane based on the argument of $f(z)$ and brightness based on the modulus of $f(z)$.

*(Refer to Kreyszig, 10th ed., Chapter 12 for visual examples of domain coloring and mappings).*

---

## 2. Basic Properties of Complex Functions

### 2.1 Limits of Complex Functions

Let $f(z) = u(x, y) + iv(x, y)$. The limit of $f(z)$ as $z$ approaches $z_0 = x_0 + iy_0$ is $L = A + iB$ if and only if the limits of the real and imaginary parts exist and are equal to $A$ and $B$ respectively.

$\lim_{z \to z_0} f(z) = L$ if and only if $\lim_{(x,y) \to (x_0,y_0)} u(x, y) = A$ and $\lim_{(x,y) \to (x_0,y_0)} v(x, y) = B$.

**Important Note:** For the limit to exist, it must be the same regardless of the path taken by $z$ to approach $z_0$.

**Example:** Find $\lim_{z \to 1+i} \frac{z^2 + 1}{z - (1+i)}$.
Let $f(z) = \frac{z^2+1}{z-(1+i)}$.
If $z = 1+i$, the denominator is zero. We can factor the numerator: $z^2+1 = (z-i)(z+i)$.
This doesn't immediately simplify. Let's try polynomial long division or algebraic manipulation.
Consider $z^2+1$. We are interested in $z \to 1+i$. Let $z = 1+i + h$, where $h \to 0$.
$f(1+i+h) = \frac{(1+i+h)^2 + 1}{(1+i+h) - (1+i)} = \frac{(1+i)^2 + 2(1+i)h + h^2 + 1}{h}$
$= \frac{1 + 2i + i^2 + 2h + 2ih + h^2 + 1}{h} = \frac{1 + 2i - 1 + 2h + 2ih + h^2 + 1}{h}$
$= \frac{2i + 2h + 2ih + h^2 + 1}{h}$
As $h \to 0$, this expression approaches infinity.

Let's reconsider the numerator factorization: $z^2+1$. This is incorrect. We need to factor it in terms of roots of $-1$. The roots of $z^2 = -1$ are $z = i$ and $z = -i$. So, $z^2+1 = (z-i)(z+i)$.
Let's check if $1+i$ is a root of $z^2+1$: $(1+i)^2 + 1 = 1 + 2i - 1 + 1 = 1+2i \neq 0$.

The problem might be stated incorrectly for simplification, or it intends to show a limit that does not exist or goes to infinity.

Let's try another example where the limit exists:
Find $\lim_{z \to i} z^2$.
$f(z) = z^2$. As $z \to i$, $f(z) \to i^2 = -1$.
Using real and imaginary parts:
$z = x+iy$, $z^2 = (x^2-y^2) + i(2xy)$.
$z_0 = i = 0+1i$, so $x_0 = 0, y_0 = 1$.
$\lim_{(x,y) \to (0,1)} (x^2-y^2) = 0^2 - 1^2 = -1$.
$\lim_{(x,y) \to (0,1)} (2xy) = 2(0)(1) = 0$.
So, $\lim_{z \to i} z^2 = -1 + i(0) = -1$.

### 2.2 Continuity of Complex Functions

A complex function $f(z)$ is **continuous** at a point $z_0$ if:
1.  $f(z_0)$ is defined.
2.  $\lim_{z \to z_0} f(z)$ exists.
3.  $\lim_{z \to z_0} f(z) = f(z_0)$.

If these conditions hold for all $z$ in a domain $D$, then $f(z)$ is continuous on $D$.

**Theorem:** If $f(z) = u(x, y) + iv(x, y)$, then $f(z)$ is continuous at $z_0 = x_0 + iy_0$ if and only if $u(x, y)$ and $v(x, y)$ are continuous at $(x_0, y_0)$.

**Example:** $f(z) = |z|$.
$z = x+iy$, so $f(z) = \sqrt{x^2+y^2} + i(0)$.
$u(x, y) = \sqrt{x^2+y^2}$, $v(x, y) = 0$.
Both $u(x, y)$ and $v(x, y)$ are continuous for all $(x, y)$.
Therefore, $f(z) = |z|$ is continuous everywhere in the complex plane.

### 2.3 Derivatives of Complex Functions

A complex function $f(z)$ is **differentiable** at $z_0$ if the limit
$$f'(z_0) = \lim_{\Delta z \to 0} \frac{f(z_0 + \Delta z) - f(z_0)}{\Delta z}$$
exists. The limit is the derivative of $f$ at $z_0$.

**Important Note:** For the derivative to exist, the limit must be the same regardless of the path $\Delta z$ takes to approach 0. This is a much stronger condition than for limits.

**Example:** $f(z) = z^2$.
$f'(z) = \lim_{\Delta z \to 0} \frac{(z + \Delta z)^2 - z^2}{\Delta z} = \lim_{\Delta z \to 0} \frac{z^2 + 2z \Delta z + (\Delta z)^2 - z^2}{\Delta z}$
$= \lim_{\Delta z \to 0} \frac{2z \Delta z + (\Delta z)^2}{\Delta z} = \lim_{\Delta z \to 0} (2z + \Delta z) = 2z$.
The derivative exists for all $z$.

**Example:** $f(z) = \bar{z}$.
$f(z) = x - iy$.
$f(z_0 + \Delta z) - f(z_0) = \overline{z_0 + \Delta z} - \overline{z_0} = \overline{\Delta z}$.
So, $f'(z_0) = \lim_{\Delta z \to 0} \frac{\overline{\Delta z}}{\Delta z}$.
Let $\Delta z = \Delta x + i \Delta y$. Then $\overline{\Delta z} = \Delta x - i \Delta y$.
If $\Delta z$ approaches 0 along the real axis ($\Delta y = 0$, $\Delta x \to 0$): $\lim_{\Delta x \to 0} \frac{\Delta x}{\Delta x} = 1$.
If $\Delta z$ approaches 0 along the imaginary axis ($\Delta x = 0$, $\Delta y \to 0$): $\lim_{\Delta y \to 0} \frac{-i \Delta y}{i \Delta y} = -1$.
Since the limits are different, $f'(z) = \bar{z}$ is not differentiable anywhere.

### 2.4 Cauchy-Riemann Equations

The **Cauchy-Riemann (C-R) equations** provide a necessary and sufficient condition for a complex function to be differentiable.

Let $f(z) = u(x, y) + iv(x, y)$. If $f(z)$ is differentiable at $z = x+iy$, then the first partial derivatives of $u$ and $v$ must satisfy:
$$\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$$
$$\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$$

**Theorem:** If $f(z) = u(x, y) + iv(x, y)$ is defined in a neighborhood of $z_0 = x_0 + iy_0$, and if the partial derivatives $u_x, u_y, v_x, v_y$ exist in that neighborhood and are continuous at $(x_0, y_0)$, and if they satisfy the Cauchy-Riemann equations at $(x_0, y_0)$, then $f(z)$ is differentiable at $z_0$, and its derivative is given by:
$$f'(z_0) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x}$$
or equivalently,
$$f'(z_0) = \frac{\partial v}{\partial y} - i \frac{\partial u}{\partial y}$$

**Example:** Show that $f(z) = z^2$ is differentiable and find its derivative.
$f(z) = (x^2 - y^2) + i(2xy)$.
$u(x, y) = x^2 - y^2$, $v(x, y) = 2xy$.
Partial derivatives:
$u_x = 2x$, $u_y = -2y$
$v_x = 2y$, $v_y = 2x$

Check C-R equations:
$u_x = 2x$ and $v_y = 2x$. So, $u_x = v_y$.
$u_y = -2y$ and $v_x = 2y$. So, $u_y = -v_x$.
The C-R equations are satisfied for all $x, y$. The partial derivatives are continuous everywhere.
Therefore, $f(z) = z^2$ is differentiable everywhere.
$f'(z) = u_x + iv_x = 2x + i(2y) = 2(x+iy) = 2z$. This matches our previous result.

**Example:** Show that $f(z) = \bar{z}$ is not differentiable.
$f(z) = x - iy$.
$u(x, y) = x$, $v(x, y) = -y$.
Partial derivatives:
$u_x = 1$, $u_y = 0$
$v_x = 0$, $v_y = -1$

Check C-R equations:
$u_x = 1$, $v_y = -1$. $u_x \neq v_y$.
The C-R equations are not satisfied. Therefore, $f(z) = \bar{z}$ is not differentiable.

---

## 3. Analytic Functions

### 3.1 Definition of Analytic Functions

A complex function $f(z)$ is said to be **analytic** at a point $z_0$ if it is differentiable not only at $z_0$ but also in some neighborhood (an open disk) containing $z_0$.

A function that is analytic at every point in a domain $D$ is said to be **analytic on $D$**.

**Alternative terms:** A function can also be called **holomorphic** or **regular**.

**Key Point:** Analyticity is a very strong property. If a function is analytic, it means it is infinitely differentiable and can be represented by a power series (Taylor series) in a neighborhood of any point in its domain.

### 3.2 Entire Functions

An **entire function** is a function that is analytic on the entire complex plane (i.e., in every domain).

**Examples of Entire Functions:**
*   Polynomials: $P(z) = a_n z^n + a_{n-1} z^{n-1} + \dots + a_1 z + a_0$
*   $e^z$
*   $\sin z$, $\cos z$
*   $\sinh z$, $\cosh z$

**Examples of Functions NOT Entire:**
*   $f(z) = \frac{1}{z}$ is analytic everywhere except at $z=0$.
*   $f(z) = \log z$ is analytic everywhere except for the branch cut (e.g., the non-positive real axis).

### 3.3 Harmonic Functions

If a function $f(z) = u(x, y) + iv(x, y)$ is analytic in a domain $D$, then both its real part $u(x, y)$ and its imaginary part $v(x, y)$ are **harmonic functions** in $D$. A harmonic function is a function that satisfies Laplace's equation:

$\nabla^2 \phi = \frac{\partial^2 \phi}{\partial x^2} + \frac{\partial^2 \phi}{\partial y^2} = 0$.

The partial derivatives of $u$ and $v$ satisfy the Cauchy-Riemann equations. By differentiating the C-R equations, we can show that $u$ and $v$ are harmonic.

For $u$:
$u_{xx} = v_{yx}$
$u_{yy} = v_{xy}$
Since $v_{xy} = v_{yx}$ (under conditions of analyticity), we have $u_{xx} = u_{yy}$, so $u_{xx} + u_{yy} = 0$.

For $v$:
$v_{xx} = -u_{yx}$
$v_{yy} = -u_{xy}$
Since $u_{xy} = u_{yx}$, we have $v_{xx} = v_{yy}$, so $v_{xx} + v_{yy} = 0$.

**Conjugate Harmonic Function:** If $u(x, y)$ is harmonic in $D$, then its harmonic conjugate $v(x, y)$ is a harmonic function such that $f(z) = u(x, y) + iv(x, y)$ is analytic in $D$.

**Example:** $f(z) = z^2 = (x^2 - y^2) + i(2xy)$.
$u(x, y) = x^2 - y^2$.
$u_{xx} = 2$, $u_{yy} = -2$. $u_{xx} + u_{yy} = 2 + (-2) = 0$. So, $u$ is harmonic.
$v(x, y) = 2xy$.
$v_{xx} = 0$, $v_{yy} = 0$. $v_{xx} + v_{yy} = 0 + 0 = 0$. So, $v$ is harmonic.

**Finding the Harmonic Conjugate:**
Given a harmonic function $u(x, y)$, we can find its harmonic conjugate $v(x, y)$ by using the Cauchy-Riemann equations:
$v_y = u_x$ and $v_x = -u_y$.
Integrate $v_y = u_x$ with respect to $y$ to get $v(x, y) = \int u_x(x, y) dy + g(x)$.
Then, differentiate this expression for $v$ with respect to $x$ and equate it to $-u_y$ to find $g(x)$.

**Example:** Find the harmonic conjugate of $u(x, y) = x^2 - y^2$.
$u_x = 2x$, $u_y = -2y$.
$v_y = u_x = 2x \implies v(x, y) = \int 2x dy = 2xy + g(x)$.
$v_x = \frac{\partial}{\partial x}(2xy + g(x)) = 2y + g'(x)$.
We need $v_x = -u_y = -(-2y) = 2y$.
So, $2y + g'(x) = 2y$. This implies $g'(x) = 0$, so $g(x) = C$ (a constant).
Thus, $v(x, y) = 2xy + C$. The harmonic conjugate is $2xy$ (we can choose $C=0$).

*(Refer to Zill & Shanahan, 3rd ed., Chapter 4 for a deeper discussion on harmonic functions and their conjugates).*

---

## 4. Conformal Mapping

### 4.1 Definition of Conformal Mapping

A mapping $w = f(z)$ is **conformal** at a point $z_0$ if it preserves angles between curves passing through $z_0$, both in magnitude and in sense (orientation).

**Theorem:** If $f(z)$ is analytic and $f'(z_0) \neq 0$ at $z_0$, then the mapping $w = f(z)$ is conformal at $z_0$.

**Key Points:**
*   **Angle Preservation:** The angle between two intersecting curves in the $z$-plane is preserved in the $w$-plane.
*   **Sense Preservation:** The orientation of the angle (e.g., counterclockwise) is also preserved.
*   **Magnification Factor:** The mapping locally scales lengths by the factor $|f'(z_0)|$.

### 4.2 Jacobian of the Transformation

The Jacobian of the transformation from $(x, y)$ to $(u, v)$ is given by the determinant:
$$J = \det \begin{pmatrix} \frac{\partial u}{\partial x} & \frac{\partial u}{\partial y} \\ \frac{\partial v}{\partial x} & \frac{\partial v}{\partial y} \end{pmatrix}$$
If $f(z) = u(x, y) + iv(x, y)$ is analytic, then $u_x = v_y$ and $u_y = -v_x$.
$J = u_x v_y - u_y v_x = u_x (u_x) - (-v_x) v_x = u_x^2 + v_x^2 = |f'(z)|^2$.
The Jacobian is the square of the magnitude of the derivative, which is the local magnification factor.

### 4.3 Mapping Properties of Analytic Functions

*   **Analytic functions:** Are generally conformal where their derivative is non-zero.
*   **Zeros of $f'(z)$:** At points where $f'(z) = 0$, the mapping may not be conformal. Angles might be magnified or distorted.
*   **Geometric Interpretation:** An analytic function $f(z)$ can be viewed as a combination of a rotation by $\arg(f'(z))$ and a magnification by $|f'(z)|$ in the neighborhood of a point $z$ where $f'(z) \neq 0$.

### 4.4 Applications of Conformal Mapping

Conformal mapping is a powerful tool for solving boundary value problems in physics and engineering, particularly in:
*   **Fluid Dynamics:** Streamline patterns.
*   **Electrostatics:** Electric field distribution between conductors.
*   **Heat Conduction:** Temperature distribution.

By mapping a complex domain (with a complicated geometry) to a simpler domain (like a rectangle or a disk) where the problem is easier to solve, we can transform the solution back to the original domain.

**Example:** The Joukowsky transformation $w = z + \frac{1}{z}$ is used to map circles in the $z$-plane to airfoils in the $w$-plane, which is crucial in aerodynamics.

*(Refer to Ramana, 39th ed., Chapter 28 for examples of conformal mapping and applications).*

---

## 5. Complex Integration

### 5.1 Complex Contour Integrals

A **contour** is a curve in the complex plane. A **directed contour** is a curve traced in a specific direction. We denote a directed contour from $z_a$ to $z_b$ by $C$.

The **contour integral** of a complex function $f(z)$ along a contour $C$ is defined as:
$$\int_C f(z) dz$$

If $f(z) = u(x, y) + iv(x, y)$ and $z(t) = x(t) + iy(t)$ for $a \le t \le b$, then:
$$\int_C f(z) dz = \int_a^b f(z(t)) z'(t) dt$$
This can also be written as:
$$\int_C f(z) dz = \int_C (u dx - v dy) + i \int_C (v dx + u dy)$$

**Example:** Evaluate $\int_C z^2 dz$ where $C$ is the line segment from $z=0$ to $z=1+i$.
Parameterize $C$: $z(t) = t(1+i)$ for $0 \le t \le 1$.
Then $z'(t) = 1+i$.
$f(z) = z^2$. So, $f(z(t)) = (t(1+i))^2 = t^2 (1+i)^2 = t^2 (1 + 2i - 1) = t^2 (2i)$.
$\int_C z^2 dz = \int_0^1 f(z(t)) z'(t) dt = \int_0^1 (t^2 (2i)) (1+i) dt$
$= 2i(1+i) \int_0^1 t^2 dt = 2i(1+i) [\frac{t^3}{3}]_0^1 = 2i(1+i) \frac{1}{3}$
$= \frac{2i + 2i^2}{3} = \frac{2i - 2}{3} = -\frac{2}{3} + \frac{2}{3}i$.

**Theorem:** If $f(z)$ is continuous on a contour $C$, then $\int_C f(z) dz$ exists.

### 5.2 Fundamental Theorem of Calculus for Complex Integrals

If $f(z)$ is analytic in a domain containing a contour $C$, and $f'(z)$ is continuous on $C$, then:
$$\int_C f'(z) dz = f(z_b) - f(z_a)$$
where $z_a$ is the starting point and $z_b$ is the ending point of $C$.

**Example:** Evaluate $\int_C e^z dz$ where $C$ is any contour from $z=1$ to $z=i$.
$f'(z) = e^z$, so $f(z) = e^z$.
$\int_C e^z dz = f(i) - f(1) = e^i - e^1 = (\cos 1 + i \sin 1) - e$.

### 5.3 Cauchy's Integral Theorem (Goursat's Theorem)

**Cauchy's Integral Theorem:** If $f(z)$ is analytic in a simply connected domain $D$, then for every simple closed contour $C$ in $D$,
$$\oint_C f(z) dz = 0$$

**Simply Connected Domain:** A domain where every simple closed curve can be continuously shrunk to a point within the domain.

**Implications:**
*   If $f(z)$ is analytic in a simply connected domain $D$, then the integral of $f(z)$ along any closed contour in $D$ is zero.
*   This implies that the contour integral of an analytic function is independent of the path taken between two points.

**Example:** Evaluate $\oint_C \cos z dz$ where $C$ is the circle $|z|=1$.
$f(z) = \cos z$ is analytic everywhere in the complex plane. The circle $|z|=1$ is a simple closed contour.
By Cauchy's Integral Theorem, $\oint_C \cos z dz = 0$.

### 5.4 Cauchy's Integral Formula

**Cauchy's Integral Formula:** If $f(z)$ is analytic in a simply connected domain $D$ and $C$ is a simple closed contour in $D$, and $z_0$ is any point inside $C$, then
$$f(z_0) = \frac{1}{2\pi i} \oint_C \frac{f(z)}{z - z_0} dz$$

This formula allows us to compute the value of an analytic function at an interior point $z_0$ if we know its values on the boundary $C$.

Rearranging, we get:
$$\oint_C \frac{f(z)}{z - z_0} dz = 2\pi i f(z_0)$$

**Example:** Evaluate $\oint_C \frac{e^z}{z-1} dz$ where $C$ is the circle $|z|=2$.
Here, $f(z) = e^z$, which is analytic everywhere. The point $z_0 = 1$ is inside the circle $|z|=2$.
Using Cauchy's Integral Formula:
$\oint_C \frac{e^z}{z-1} dz = 2\pi i f(1) = 2\pi i e^1 = 2\pi i e$.

**Cauchy's Integral Formula for Derivatives:** If $f(z)$ is analytic in $D$ and $C$ is a simple closed contour in $D$, and $z_0$ is inside $C$, then $f(z)$ is differentiable at $z_0$ and all its derivatives exist. The $n$-th derivative is given by:
$$f^{(n)}(z_0) = \frac{n!}{2\pi i} \oint_C \frac{f(z)}{(z - z_0)^{n+1}} dz$$

Rearranging, we get:
$$\oint_C \frac{f(z)}{(z - z_0)^{n+1}} dz = \frac{2\pi i}{n!} f^{(n)}(z_0)$$

**Example:** Evaluate $\oint_C \frac{\sin z}{z^2} dz$ where $C$ is the circle $|z|=1$.
Here, $f(z) = \sin z$, which is analytic everywhere. The point $z_0 = 0$ is inside the circle $|z|=1$.
We need to find the first derivative of $f(z) = \sin z$. $f'(z) = \cos z$.
Using the formula for $n=1$:
$\oint_C \frac{\sin z}{z^{1+1}} dz = \frac{2\pi i}{1!} f'(0)$.
$\oint_C \frac{\sin z}{z^2} dz = 2\pi i (\cos 0) = 2\pi i (1) = 2\pi i$.

*(Refer to Kreyszig, 10th ed., Chapter 13 and Zill & Shanahan, 3rd ed., Chapter 4 for detailed explanations and examples of complex integration).*

---

## 6. Series Expansion of Complex Functions

### 6.1 Taylor Series

If $f(z)$ is analytic in an open disk $|z - z_0| < R$, then $f(z)$ can be represented by its Taylor series expansion about $z_0$:
$$f(z) = \sum_{n=0}^{\infty} a_n (z - z_0)^n$$
where the coefficients $a_n$ are given by:
$$a_n = \frac{f^{(n)}(z_0)}{n!}$$
This is directly derived from Cauchy's Integral Formula for Derivatives.

**Example:** Find the Taylor series of $f(z) = e^z$ about $z_0 = 0$.
$f^{(n)}(z) = e^z$ for all $n$.
$f^{(n)}(0) = e^0 = 1$.
$a_n = \frac{1}{n!}$.
The Taylor series is $e^z = \sum_{n=0}^{\infty} \frac{z^n}{n!} = 1 + z + \frac{z^2}{2!} + \frac{z^3}{3!} + \dots$
This series converges for all $z$ (radius of convergence $R=\infty$).

### 6.2 Laurent Series

If $f(z)$ is analytic in an annulus $A: R_1 < |z - z_0| < R_2$, then $f(z)$ can be represented by its Laurent series expansion about $z_0$:
$$f(z) = \sum_{n=-\infty}^{\infty} c_n (z - z_0)^n$$
where the coefficients $c_n$ are given by:
$$c_n = \frac{1}{2\pi i} \oint_C \frac{f(z)}{(z - z_0)^{n+1}} dz$$
Here, $C$ is any simple closed contour in the annulus $A$ that encloses $z_0$.

The Laurent series consists of two parts:
*   **Analytic Part (or Taylor Part):** $\sum_{n=0}^{\infty} c_n (z - z_0)^n$ (non-negative powers of $z-z_0$).
*   **Principal Part:** $\sum_{n=-\infty}^{-1} c_n (z - z_0)^n$ (negative powers of $z-z_0$).

### 6.3 Singularities of Complex Functions

A point $z_0$ is a **singularity** of $f(z)$ if $f(z)$ is not analytic at $z_0$.

Types of Isolated Singularities:
1.  **Removable Singularity:** If the principal part of the Laurent series is zero (i.e., only non-negative powers of $z-z_0$). This means $f(z)$ can be made analytic by defining or redefining $f(z_0)$ appropriately. If $\lim_{z \to z_0} f(z)$ exists, then $z_0$ is a removable singularity.
2.  **Pole:** If the principal part has a finite number of terms (i.e., $c_n = 0$ for all $n < -m$, where $m \ge 1$). The smallest such $m$ is the **order** of the pole.
3.  **Essential Singularity:** If the principal part has infinitely many terms.

**Example:**
*   $f(z) = \frac{\sin z}{z}$. At $z_0=0$, the Laurent series starts with $1 - \frac{z^2}{3!} + \dots$. The principal part is zero, so $z_0=0$ is a removable singularity. $\lim_{z \to 0} \frac{\sin z}{z} = 1$.
*   $f(z) = \frac{1}{z}$. At $z_0=0$, the Laurent series is $\frac{1}{z}$. This is a pole of order 1.
*   $f(z) = e^{1/z}$. At $z_0=0$, the Laurent series is $1 + \frac{1}{z} + \frac{1}{2!z^2} + \dots$. This has infinitely many terms in the principal part, so $z_0=0$ is an essential singularity.

### 6.4 The Residue Theorem

The **Residue** of a function $f(z)$ at an isolated singularity $z_0$ is the coefficient $c_{-1}$ in its Laurent series expansion about $z_0$.
$$f(z) = \sum_{n=-\infty}^{\infty} c_n (z - z_0)^n$$
$\text{Res}(f, z_0) = c_{-1}$.

If $z_0$ is a pole of order $m$, the residue can be computed using:
$$\text{Res}(f, z_0) = \frac{1}{(m-1)!} \lim_{z \to z_0} \frac{d^{m-1}}{dz^{m-1}} [(z - z_0)^m f(z)]$$

**The Residue Theorem:** If $f(z)$ is analytic in a simply connected domain $D$ except for a finite number of isolated singularities $z_1, z_2, \dots, z_k$ inside a simple closed contour $C$ in $D$, then
$$\oint_C f(z) dz = 2\pi i \sum_{j=1}^k \text{Res}(f, z_j)$$

**Application:** The Residue Theorem is extremely useful for computing definite integrals of real functions, particularly those involving trigonometric functions or rational functions.

**Example:** Evaluate $\oint_C \frac{1}{z^2 - 1} dz$ where $C$ is the circle $|z|=2$.
The singularities are at $z^2 - 1 = 0$, so $z = 1$ and $z = -1$. Both are inside the circle $|z|=2$.
$f(z) = \frac{1}{z^2 - 1} = \frac{1}{(z-1)(z+1)}$.
These are simple poles.

Residue at $z=1$:
Using the formula for $m=1$: $\text{Res}(f, 1) = \lim_{z \to 1} (z-1) \frac{1}{(z-1)(z+1)} = \lim_{z \to 1} \frac{1}{z+1} = \frac{1}{1+1} = \frac{1}{2}$.

Residue at $z=-1$:
$\text{Res}(f, -1) = \lim_{z \to -1} (z+1) \frac{1}{(z-1)(z+1)} = \lim_{z \to -1} \frac{1}{z-1} = \frac{1}{-1-1} = -\frac{1}{2}$.

By the Residue Theorem:
$\oint_C \frac{1}{z^2 - 1} dz = 2\pi i (\text{Res}(f, 1) + \text{Res}(f, -1)) = 2\pi i (\frac{1}{2} + (-\frac{1}{2})) = 2\pi i (0) = 0$.

**Example:** Evaluate $\int_{-\infty}^{\infty} \frac{1}{x^2+1} dx$.
Consider the complex function $f(z) = \frac{1}{z^2+1}$.
The singularities are at $z^2+1=0$, so $z = i$ and $z = -i$.
We consider a contour consisting of the real axis from $-R$ to $R$ and a semi-circular arc in the upper half-plane. As $R \to \infty$, this becomes a closed contour.
The only singularity inside the upper semi-circle is $z=i$.

Residue at $z=i$:
$f(z) = \frac{1}{(z-i)(z+i)}$.
$\text{Res}(f, i) = \lim_{z \to i} (z-i) \frac{1}{(z-i)(z+i)} = \lim_{z \to i} \frac{1}{z+i} = \frac{1}{i+i} = \frac{1}{2i}$.

By the Residue Theorem:
$\oint_C f(z) dz = 2\pi i \text{Res}(f, i) = 2\pi i (\frac{1}{2i}) = \pi$.

The integral along the semi-circular arc tends to zero as $R \to \infty$ (by Jordan's Lemma or estimation).
So, $\lim_{R \to \infty} \oint_C f(z) dz = \int_{-\infty}^{\infty} \frac{1}{x^2+1} dx$.
Therefore, $\int_{-\infty}^{\infty} \frac{1}{x^2+1} dx = \pi$.

*(Refer to Kreyszig, 10th ed., Chapter 17 and Ramana, 39th ed., Chapter 29 for extensive coverage of series expansions and residue theorem).*

---

## Practice Questions

1.  **Differentiability:** Determine if the function $f(z) = \text{Re}(z^2)$ is differentiable.
2.  **Cauchy-Riemann Equations:** For the function $f(z) = z^3$, find $u(x, y)$ and $v(x, y)$, verify the Cauchy-Riemann equations, and find $f'(z)$.
3.  **Analyticity:** Is $f(z) = |z|^2$ analytic? Justify your answer.
4.  **Harmonic Functions:** Show that $u(x, y) = e^x \cos y$ is harmonic. Find its harmonic conjugate $v(x, y)$ such that $f(z) = u(x, y) + iv(x, y)$ is analytic.
5.  **Cauchy's Integral Formula:** Evaluate $\oint_C \frac{e^{2z}}{z-i\pi} dz$, where $C$ is the circle $|z| = \frac{\pi}{2}$.
6.  **Cauchy's Integral Formula for Derivatives:** Evaluate $\oint_C \frac{\cos(\pi z)}{z^2-1} dz$, where $C$ is the circle $|z|=2$.
7.  **Laurent Series:** Find the Laurent series of $f(z) = \frac{1}{z(z-1)}$ in the annulus $0 < |z-1| < 1$.
8.  **Residue Theorem:** Evaluate $\oint_C \frac{1}{z^2+4} dz$, where $C$ is the circle $|z|=3$.
9.  **Residue Theorem for Real Integrals:** Evaluate $\int_0^{2\pi} \frac{d\theta}{2+\cos\theta}$ using the residue theorem.

---

## Answers to Practice Questions

1.  $f(z) = \text{Re}(z^2) = x^2 - y^2$. $u(x, y) = x^2 - y^2$, $v(x, y) = 0$.
    $u_x = 2x$, $u_y = -2y$, $v_x = 0$, $v_y = 0$.
    C-R equations: $u_x = 2x \neq v_y = 0$ (unless $x=0$). $u_y = -2y \neq -v_x = 0$ (unless $y=0$).
    The C-R equations are not satisfied in any neighborhood, so $f(z)$ is not differentiable.
2.  $f(z) = z^3 = (x+iy)^3 = x^3 + 3x^2(iy) + 3x(iy)^2 + (iy)^3 = x^3 + 3ix^2y - 3xy^2 - iy^3$.
    $u(x, y) = x^3 - 3xy^2$, $v(x, y) = 3x^2y - y^3$.
    $u_x = 3x^2 - 3y^2$, $u_y = -6xy$.
    $v_x = 6xy$, $v_y = 3x^2 - 3y^2$.
    C-R equations: $u_x = v_y = 3x^2 - 3y^2$ and $u_y = -v_x = -6xy$. They are satisfied.
    $f'(z) = u_x + iv_x = (3x^2 - 3y^2) + i(6xy) = 3(x^2 - y^2 + 2ixy) = 3(x+iy)^2 = 3z^2$.
3.  $f(z) = |z|^2 = x^2 + y^2$. $u(x, y) = x^2 + y^2$, $v(x, y) = 0$.
    $u_x = 2x$, $u_y = 2y$, $v_x = 0$, $v_y = 0$.
    C-R equations: $u_x = 2x \neq v_y = 0$ (unless $x=0$). $u_y = 2y \neq -v_x = 0$ (unless $y=0$).
    The C-R equations are only satisfied at the origin $(0,0)$. However, for analyticity, they must be satisfied in a neighborhood. Thus, $f(z)=|z|^2$ is not analytic.
4.  $u(x, y) = e^x \cos y$.
    $u_x = e^x \cos y$, $u_y = -e^x \sin y$.
    $u_{xx} = e^x \cos y$, $u_{yy} = -e^x \cos y$.
    $u_{xx} + u_{yy} = e^x \cos y - e^x \cos y = 0$. So, $u$ is harmonic.
    Using C-R equations to find $v$:
    $v_y = u_x = e^x \cos y \implies v(x, y) = \int e^x \cos y dy = e^x \sin y + g(x)$.
    $v_x = e^x \sin y + g'(x)$.
    We need $v_x = -u_y = -(-e^x \sin y) = e^x \sin y$.
    So, $e^x \sin y + g'(x) = e^x \sin y \implies g'(x) = 0 \implies g(x) = C$.
    $v(x, y) = e^x \sin y + C$. We can choose $C=0$, so $v(x, y) = e^x \sin y$.
    The analytic function is $f(z) = e^x \cos y + i e^x \sin y = e^x (\cos y + i \sin y) = e^x e^{iy} = e^{x+iy} = e^z$.
5.  $f(z) = e^{2z}$. $z_0 = i\pi$. The point $i\pi$ is inside the circle $|z| = \frac{\pi}{2}$ because $|i\pi| = \pi$.
    Using Cauchy's Integral Formula: $\oint_C \frac{f(z)}{z-z_0} dz = 2\pi i f(z_0)$.
    $\oint_C \frac{e^{2z}}{z-i\pi} dz = 2\pi i e^{2(i\pi)} = 2\pi i e^{2i\pi} = 2\pi i (\cos(2\pi) + i\sin(2\pi)) = 2\pi i (1+0) = 2\pi i$.
6.  $f(z) = \frac{1}{z^2-1}$. We need to find the second derivative of $f(z)$.
    $f'(z) = \frac{-2z}{(z^2-1)^2}$.
    $f''(z) = \frac{-2(z^2-1)^2 - (-2z) \cdot 2(z^2-1)(2z)}{(z^2-1)^4} = \frac{-2(z^2-1) + 8z^2}{(z^2-1)^3} = \frac{-2z^2+2+8z^2}{(z^2-1)^3} = \frac{6z^2+2}{(z^2-1)^3}$.
    The singularities are at $z=1$ and $z=-1$. Both are inside the circle $|z|=2$.
    Using Cauchy's Integral Formula for derivatives $\oint_C \frac{f(z)}{(z - z_0)^{n+1}} dz = \frac{2\pi i}{n!} f^{(n)}(z_0)$.
    We need to split the integral:
    $\oint_C \frac{1}{(z-1)(z+1)} dz = \oint_C \frac{1/ (z+1)}{z-1} dz + \oint_C \frac{1/(z-1)}{z+1} dz$.
    For the first integral: $g(z) = \frac{1}{z+1}$, $z_0=1$. $g(1) = \frac{1}{1+1} = \frac{1}{2}$. Integral = $2\pi i \cdot \frac{1}{2} = \pi i$.
    For the second integral: $h(z) = \frac{1}{z-1}$, $z_0=-1$. $h(-1) = \frac{1}{-1-1} = -\frac{1}{2}$. Integral = $2\pi i \cdot (-\frac{1}{2}) = -\pi i$.
    Total integral = $\pi i - \pi i = 0$.

    Alternatively, consider the form $\oint_C \frac{f(z)}{(z-z_0)^2} dz$. Here $f(z) = \frac{1}{z+1}$ for $z_0=1$, $n=1$.
    $\oint_C \frac{1/(z+1)}{z-1)^2} dz = \frac{2\pi i}{1!} f'(1)$. $f'(z) = -\frac{1}{(z+1)^2}$. $f'(1) = -\frac{1}{4}$. Integral = $2\pi i (-\frac{1}{4}) = -\frac{\pi i}{2}$.
    And for $z_0=-1$: $f(z) = \frac{1}{z-1}$. $f'(z) = -\frac{1}{(z-1)^2}$. $f'(-1) = -\frac{1}{(-2)^2} = -\frac{1}{4}$.
    $\oint_C \frac{1/(z-1)}{z+1)^2} dz = \frac{2\pi i}{1!} f'(-1) = 2\pi i (-\frac{1}{4}) = -\frac{\pi i}{2}$.
    This approach seems to be more complicated due to the split. The first approach using partial fractions is more direct.

    Let's re-read the question: $\oint_C \frac{\cos(\pi z)}{z^2-1} dz$.
    $f(z) = \cos(\pi z)$. Singularities at $z=1$ and $z=-1$.
    Split into $\oint_C \frac{\cos(\pi z)/(z+1)}{z-1} dz + \oint_C \frac{\cos(\pi z)/(z-1)}{z+1} dz$.
    Integral 1: $g(z) = \frac{\cos(\pi z)}{z+1}$. $z_0=1$. $g(1) = \frac{\cos(\pi)}{1+1} = \frac{-1}{2}$. Integral $= 2\pi i (-\frac{1}{2}) = -\pi i$.
    Integral 2: $h(z) = \frac{\cos(\pi z)}{z-1}$. $z_0=-1$. $h(-1) = \frac{\cos(-\pi)}{-1-1} = \frac{-1}{-2} = \frac{1}{2}$. Integral $= 2\pi i (\frac{1}{2}) = \pi i$.
    Total integral $= -\pi i + \pi i = 0$.

7.  $f(z) = \frac{1}{z(z-1)}$. We want the Laurent series in $0 < |z-1| < 1$. Let $w = z-1$, so $z = w+1$.
    $f(z) = \frac{1}{(w+1)w} = \frac{1}{w} \cdot \frac{1}{w+1}$.
    Use partial fractions for $\frac{1}{w(w+1)} = \frac{A}{w} + \frac{B}{w+1}$. $1 = A(w+1) + Bw$.
    If $w=0$, $1=A$. If $w=-1$, $1=-B \implies B=-1$.
    $f(z) = \frac{1}{w} - \frac{1}{w+1}$.
    We need a series in powers of $w$. For the term $\frac{1}{w+1}$, since $|w|<1$, we can use the geometric series:
    $\frac{1}{w+1} = \frac{1}{1-(-w)} = \sum_{n=0}^{\infty} (-w)^n = 1 - w + w^2 - w^3 + \dots$
    So, $f(z) = \frac{1}{w} - (1 - w + w^2 - w^3 + \dots)$
    $= \frac{1}{z-1} - 1 + (z-1) - (z-1)^2 + (z-1)^3 - \dots$
    $= (z-1)^{-1} - \sum_{n=0}^{\infty} (-1)^n (z-1)^n$.
    The coefficients are $c_{-1} = 1$, $c_0 = -1$, $c_1 = 1$, $c_2 = -1$, and so on. $c_n = (-1)^{n+1}$ for $n \ge 0$.
8.  $f(z) = \frac{1}{z^2+4}$. Singularities at $z^2+4=0 \implies z = \pm 2i$.
    The circle is $|z|=3$. Both $2i$ and $-2i$ are inside.
    $f(z) = \frac{1}{(z-2i)(z+2i)}$.
    Residue at $z=2i$: $\text{Res}(f, 2i) = \lim_{z \to 2i} (z-2i) \frac{1}{(z-2i)(z+2i)} = \lim_{z \to 2i} \frac{1}{z+2i} = \frac{1}{2i+2i} = \frac{1}{4i}$.
    Residue at $z=-2i$: $\text{Res}(f, -2i) = \lim_{z \to -2i} (z+2i) \frac{1}{(z-2i)(z+2i)} = \lim_{z \to -2i} \frac{1}{z-2i} = \frac{1}{-2i-2i} = \frac{1}{-4i}$.
    By Residue Theorem: $\oint_C f(z) dz = 2\pi i (\frac{1}{4i} + \frac{1}{-4i}) = 2\pi i (0) = 0$.
9.  Let $z = e^{i\theta}$. Then $dz = ie^{i\theta} d\theta = iz d\theta$. So $d\theta = \frac{dz}{iz}$.
    Also, $\cos\theta = \frac{z+z^{-1}}{2} = \frac{z+1/z}{2} = \frac{z^2+1}{2z}$.
    The integral becomes $\oint_C \frac{1}{2 + \frac{z^2+1}{2z}} \frac{dz}{iz} = \oint_C \frac{1}{\frac{4z+z^2+1}{2z}} \frac{dz}{iz}$.
    $= \oint_C \frac{2z}{z^2+4z+1} \frac{dz}{iz} = \oint_C \frac{2}{i(z^2+4z+1)} dz$.
    The singularities are the roots of $z^2+4z+1=0$. Using the quadratic formula:
    $z = \frac{-4 \pm \sqrt{16-4}}{2} = \frac{-4 \pm \sqrt{12}}{2} = \frac{-4 \pm 2\sqrt{3}}{2} = -2 \pm \sqrt{3}$.
    $z_1 = -2 + \sqrt{3} \approx -0.268$. $|z_1| < 1$.
    $z_2 = -2 - \sqrt{3} \approx -3.732$. $|z_2| > 1$.
    The contour $C$ is the unit circle $|z|=1$. Only $z_1 = -2+\sqrt{3}$ is inside the unit circle.
    The function is $g(z) = \frac{2}{i(z^2+4z+1)}$.
    Residue at $z_1$: $\text{Res}(g, z_1) = \lim_{z \to z_1} (z-z_1) \frac{2}{i(z-z_1)(z-z_2)} = \frac{2}{i(z_1-z_2)}$.
    $z_1 - z_2 = (-2+\sqrt{3}) - (-2-\sqrt{3}) = 2\sqrt{3}$.
    $\text{Res}(g, z_1) = \frac{2}{i(2\sqrt{3})} = \frac{1}{i\sqrt{3}}$.
    By Residue Theorem: $\oint_C g(z) dz = 2\pi i \cdot \text{Res}(g, z_1) = 2\pi i \cdot \frac{1}{i\sqrt{3}} = \frac{2\pi}{\sqrt{3}}$.
    Therefore, $\int_0^{2\pi} \frac{d\theta}{2+\cos\theta} = \frac{2\pi}{\sqrt{3}}$.

---

## Important Points to Remember

*   **Analyticity is key:** Differentiability is a strong condition, and analyticity (differentiable in a neighborhood) is even stronger, leading to properties like Taylor series expansion and Cauchy's theorems.
*   **Cauchy-Riemann Equations:** The fundamental test for differentiability.
*   **Cauchy's Theorems:** Powerful tools for evaluating complex integrals, especially for analytic functions.
*   **Residue Theorem:** Essential for computing integrals, both complex and real, by identifying singularities.
*   **Conformal Mapping:** Useful for transforming complex geometries to simpler ones for easier problem-solving.
*   **Laurent Series:** Extends Taylor series to functions with singularities, crucial for residue calculation.

---
This concludes the study notes for the topic "Complex Function" from Module 2. Please ensure to review the relevant chapters in the provided textbooks for further details and examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=XZo4xyJXC2k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
