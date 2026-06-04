---
title: "Analytic functions"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 2: Complex Function"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462ca0"
status: "completed"
scrapedAt: "2026-05-20T17:50:40.104Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 2: Complex Functions

### Topic: Analytic Functions

**Learning Outcomes:**

*   Understand the concept of analyticity of complex functions.
*   Understand the Cauchy-Riemann equations and their role in determining analyticity.
*   Identify harmonic functions and their conjugates.
*   Understand the geometric interpretation of analytic functions (conformal mapping).

**Course Outcomes Alignment:**

*   **CO2: Understand the analyticity of complex functions and apply it in conformal mapping. (Knowledge Level: K3)** - This topic directly addresses the core of CO2 by defining and explaining analyticity and its connection to conformal mapping.

---

### 1. Introduction to Complex Functions

A **complex function** is a function whose domain and/or range are subsets of the complex numbers $\mathbb{C}$. We typically consider functions of the form $w = f(z)$, where $z = x + iy$ and $w = u + iv$.

*   **Domain:** The set of complex numbers $z$ for which $f(z)$ is defined.
*   **Range:** The set of complex numbers $w$ that $f(z)$ can take.

**Example:**
If $f(z) = z^2$, then $z = x+iy$, so $f(z) = (x+iy)^2 = x^2 + 2ixy + (iy)^2 = x^2 - y^2 + i(2xy)$.
Here, $u(x,y) = x^2 - y^2$ and $v(x,y) = 2xy$ are the real and imaginary parts of $f(z)$, respectively.

---

### 2. Differentiability of Complex Functions

A complex function $f(z)$ is said to be **differentiable** at a point $z_0$ if the limit:

$$f'(z_0) = \lim_{\Delta z \to 0} \frac{f(z_0 + \Delta z) - f(z_0)}{\Delta z}$$

exists.

**Important Note:** For this limit to exist, it must be the same regardless of the path $\Delta z$ takes to approach $0$. This is a crucial difference from the differentiability of real functions.

---

### 3. Analytic Functions (Holomorphic Functions)

A complex function $f(z)$ is said to be **analytic** at a point $z_0$ if it is differentiable at $z_0$ and also at every point in some neighborhood (an open disk) around $z_0$.

A function is **analytic in a region** if it is analytic at every point in that region.

**Synonyms:** Analytic and **holomorphic** are used interchangeably.

**Key Insight:** If a function is differentiable at a single point, it does not guarantee analyticity. However, if a function is analytic in a region, it possesses remarkable properties.

**Reference:**
*   **Kreyszig, Chapter 12.4:** Discusses differentiability and introduces the concept of analyticity.
*   **Zill & Shanahan, Chapter 2.1:** Provides a thorough introduction to complex functions, limits, continuity, and differentiability.

---

### 4. The Cauchy-Riemann Equations

The Cauchy-Riemann equations are a necessary condition for a complex function to be differentiable.

Let $f(z) = u(x,y) + iv(x,y)$, where $u$ and $v$ are real-valued functions of two real variables $x$ and $y$.

The Cauchy-Riemann equations are:
1.  $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$
2.  $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$

**Theorem:** If $f(z) = u(x,y) + iv(x,y)$ is differentiable at a point $z = x + iy$, then the Cauchy-Riemann equations must hold at that point.

**Proof Sketch (using limits along real and imaginary axes):**
Let $z_0 = x_0 + iy_0$.
When $\Delta z$ approaches $0$ along the real axis, $\Delta z = \Delta x$, so $\Delta y = 0$.
$$f'(z_0) = \lim_{\Delta x \to 0} \frac{u(x_0+\Delta x, y_0) + iv(x_0+\Delta x, y_0) - (u(x_0, y_0) + iv(x_0, y_0))}{\Delta x}$$
$$f'(z_0) = \lim_{\Delta x \to 0} \frac{u(x_0+\Delta x, y_0) - u(x_0, y_0)}{\Delta x} + i \lim_{\Delta x \to 0} \frac{v(x_0+\Delta x, y_0) - v(x_0, y_0)}{\Delta x}$$
$$f'(z_0) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} \quad (\text{if partial derivatives exist})$$

When $\Delta z$ approaches $0$ along the imaginary axis, $\Delta z = i\Delta y$, so $\Delta x = 0$.
$$f'(z_0) = \lim_{\Delta y \to 0} \frac{u(x_0, y_0+\Delta y) + iv(x_0, y_0+\Delta y) - (u(x_0, y_0) + iv(x_0, y_0))}{i\Delta y}$$
$$f'(z_0) = \lim_{\Delta y \to 0} \frac{u(x_0, y_0+\Delta y) - u(x_0, y_0)}{i\Delta y} + \lim_{\Delta y \to 0} \frac{v(x_0, y_0+\Delta y) - v(x_0, y_0)}{\Delta y}$$
$$f'(z_0) = -i \frac{\partial u}{\partial y} + \frac{\partial v}{\partial y} \quad (\text{if partial derivatives exist})$$

Equating the real and imaginary parts of the two expressions for $f'(z_0)$:
Real parts: $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$
Imaginary parts: $\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y}$

These are the Cauchy-Riemann equations.

**Reference:**
*   **Ramana, Chapter 29:** Covers complex differentiation and the Cauchy-Riemann equations.
*   **Grewal, Chapter 14:** Explains complex differentiation and the conditions for differentiability.

---

### 5. Sufficient Conditions for Analyticity

While the Cauchy-Riemann equations are necessary for differentiability, they are not sufficient on their own for analyticity. We need an additional condition related to the continuity of the partial derivatives.

**Theorem:** If the partial derivatives $\frac{\partial u}{\partial x}, \frac{\partial u}{\partial y}, \frac{\partial v}{\partial x}, \frac{\partial v}{\partial y}$ exist in a neighborhood of $z_0$, are **continuous** at $z_0$, and satisfy the Cauchy-Riemann equations at $z_0$, then $f(z) = u(x,y) + iv(x,y)$ is differentiable at $z_0$.

Furthermore, if these conditions hold in an entire region, then $f(z)$ is analytic in that region.

**Formula for the Derivative:**
If $f(z)$ is analytic, its derivative can be expressed in terms of partial derivatives:
$$f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x}$$
or
$$f'(z) = \frac{\partial v}{\partial y} - i \frac{\partial u}{\partial y}$$

**Alternative form using complex partial derivatives (often seen in advanced texts):**
Let $f(z) = u(x,y) + iv(x,y)$. We can define the Wirtinger derivatives:
$\frac{\partial}{\partial z} = \frac{1}{2}\left(\frac{\partial}{\partial x} - i\frac{\partial}{\partial y}\right)$
$\frac{\partial}{\partial \bar{z}} = \frac{1}{2}\left(\frac{\partial}{\partial x} + i\frac{\partial}{\partial y}\right)$

A function $f(z)$ is analytic if and only if $\frac{\partial f}{\partial \bar{z}} = 0$.
This implies $f(z)$ can be written as a function of $z$ alone, i.e., $f(z) = F(z)$ for some function $F$.

The Cauchy-Riemann equations are equivalent to $\frac{\partial f}{\partial \bar{z}} = 0$.

**Reference:**
*   **Kreyszig, Chapter 12.4:** Elaborates on the conditions for analyticity and the Cauchy-Riemann equations.
*   **Zill & Shanahan, Chapter 2.2:** Discusses the Cauchy-Riemann equations and their sufficiency for differentiability.

---

### 6. Examples of Analytic Functions

Let's test some common functions for analyticity.

**Example 1: $f(z) = z^2$**
$z = x+iy$
$f(z) = (x+iy)^2 = x^2 - y^2 + i(2xy)$
So, $u(x,y) = x^2 - y^2$ and $v(x,y) = 2xy$.

Calculate partial derivatives:
$\frac{\partial u}{\partial x} = 2x$
$\frac{\partial u}{\partial y} = -2y$
$\frac{\partial v}{\partial x} = 2y$
$\frac{\partial v}{\partial y} = 2x$

Check Cauchy-Riemann equations:
1.  $\frac{\partial u}{\partial x} = 2x$ and $\frac{\partial v}{\partial y} = 2x$. So, $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$.
2.  $\frac{\partial u}{\partial y} = -2y$ and $-\frac{\partial v}{\partial x} = -2y$. So, $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$.

The Cauchy-Riemann equations are satisfied for all $x, y$.
The partial derivatives are $2x, -2y, 2y, 2x$, which are polynomials and thus continuous everywhere.
Therefore, $f(z) = z^2$ is analytic everywhere in $\mathbb{C}$.

The derivative is $f'(z) = \frac{\partial u}{\partial x} + i\frac{\partial v}{\partial x} = 2x + i(2y) = 2(x+iy) = 2z$. This matches the expected derivative of $z^2$.

**Example 2: $f(z) = |z|^2 = x^2 + y^2$**
$u(x,y) = x^2 + y^2$, $v(x,y) = 0$.

Calculate partial derivatives:
$\frac{\partial u}{\partial x} = 2x$
$\frac{\partial u}{\partial y} = 2y$
$\frac{\partial v}{\partial x} = 0$
$\frac{\partial v}{\partial y} = 0$

Check Cauchy-Riemann equations:
1.  $\frac{\partial u}{\partial x} = 2x$ and $\frac{\partial v}{\partial y} = 0$. For these to be equal, $2x=0$, so $x=0$.
2.  $\frac{\partial u}{\partial y} = 2y$ and $-\frac{\partial v}{\partial x} = 0$. For these to be equal, $2y=0$, so $y=0$.

The Cauchy-Riemann equations are only satisfied at the point $z = 0$ (where $x=0, y=0$).
Therefore, $f(z) = |z|^2$ is differentiable only at $z=0$, but it is *not* analytic at $z=0$ because the Cauchy-Riemann equations are not satisfied in any neighborhood around $0$.

**Example 3: $f(z) = \bar{z}$ (Complex Conjugate)**
$f(z) = x - iy$
$u(x,y) = x$, $v(x,y) = -y$.

Calculate partial derivatives:
$\frac{\partial u}{\partial x} = 1$
$\frac{\partial u}{\partial y} = 0$
$\frac{\partial v}{\partial x} = 0$
$\frac{\partial v}{\partial y} = -1$

Check Cauchy-Riemann equations:
1.  $\frac{\partial u}{\partial x} = 1$ and $\frac{\partial v}{\partial y} = -1$. These are never equal.
2.  $\frac{\partial u}{\partial y} = 0$ and $-\frac{\partial v}{\partial x} = 0$. These are equal.

Since the first Cauchy-Riemann equation is not satisfied anywhere, $f(z) = \bar{z}$ is not differentiable at any point, and therefore not analytic anywhere.

**Example 4: Polynomials**
Any polynomial in $z$, such as $P(z) = a_n z^n + a_{n-1} z^{n-1} + \dots + a_1 z + a_0$, where $a_i$ are complex constants, is analytic everywhere in $\mathbb{C}$ (an entire function). This is because the derivative of a polynomial in $z$ exists and is simply $P'(z) = na_n z^{n-1} + \dots + a_1$.

**Reference:**
*   **Ramana, Chapter 29, Solved Examples:** Provides numerous worked examples for checking analyticity.
*   **Grewal, Chapter 14, Examples:** Similar to Ramana, with practical examples.

---

### 7. Harmonic Functions and Conjugate Harmonic Functions

If $f(z) = u(x,y) + iv(x,y)$ is analytic in a region $R$, then its real part $u(x,y)$ and its imaginary part $v(x,y)$ are **harmonic functions** in $R$.

A real-valued function $h(x,y)$ of two variables is called **harmonic** if it possesses continuous second partial derivatives and satisfies Laplace's equation:

$$\nabla^2 h = \frac{\partial^2 h}{\partial x^2} + \frac{\partial^2 h}{\partial y^2} = 0$$

**Theorem:** If $f(z) = u(x,y) + iv(x,y)$ is analytic in a region $R$, then $u$ and $v$ are harmonic in $R$.

**Proof Sketch:**
Given Cauchy-Riemann equations:
(1) $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$
(2) $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$

Differentiate (1) with respect to $x$: $\frac{\partial^2 u}{\partial x^2} = \frac{\partial^2 v}{\partial x \partial y}$
Differentiate (2) with respect to $y$: $\frac{\partial^2 u}{\partial y^2} = -\frac{\partial^2 v}{\partial y \partial x}$

Assuming $u$ and $v$ have continuous second partial derivatives (which is true if $f$ is analytic), by Clairaut's Theorem (or Schwarz's Theorem), the mixed partial derivatives are equal: $\frac{\partial^2 v}{\partial x \partial y} = \frac{\partial^2 v}{\partial y \partial x}$.
Therefore, $\frac{\partial^2 u}{\partial x^2} = -\frac{\partial^2 u}{\partial y^2}$, which implies $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$. So, $u$ is harmonic.

Similarly, we can show $v$ is harmonic.
Differentiate (1) with respect to $y$: $\frac{\partial^2 u}{\partial y \partial x} = \frac{\partial^2 v}{\partial y^2}$
Differentiate (2) with respect to $x$: $\frac{\partial^2 u}{\partial x \partial y} = -\frac{\partial^2 v}{\partial x^2}$

Equating them: $\frac{\partial^2 v}{\partial y^2} = -\frac{\partial^2 v}{\partial x^2}$, which implies $\frac{\partial^2 v}{\partial x^2} + \frac{\partial^2 v}{\partial y^2} = 0$. So, $v$ is harmonic.

**Harmonic Conjugate:**
If $u(x,y)$ is harmonic, a function $v(x,y)$ is called a **harmonic conjugate** of $u$ if $u(x,y) + iv(x,y)$ is analytic.

**Finding the Harmonic Conjugate:**
Given a harmonic function $u(x,y)$, we can find its harmonic conjugate $v(x,y)$ by using the Cauchy-Riemann equations:
$\frac{\partial v}{\partial y} = \frac{\partial u}{\partial x}$
$\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y}$

We can integrate these equations.
Integrate $\frac{\partial v}{\partial y} = \frac{\partial u}{\partial x}$ with respect to $y$:
$v(x,y) = \int \frac{\partial u}{\partial x} dy + g(x)$, where $g(x)$ is an arbitrary function of $x$.

Now, differentiate this expression for $v(x,y)$ with respect to $x$:
$\frac{\partial v}{\partial x} = \frac{\partial}{\partial x} \left( \int \frac{\partial u}{\partial x} dy \right) + g'(x)$

Using the second Cauchy-Riemann equation:
$-\frac{\partial u}{\partial y} = \frac{\partial}{\partial x} \left( \int \frac{\partial u}{\partial x} dy \right) + g'(x)$

From this, we can solve for $g'(x)$. Once $g'(x)$ is found, integrate it to find $g(x)$. Substitute $g(x)$ back into the expression for $v(x,y)$. The constant of integration will be absorbed into the arbitrary constant of $f(z)$.

**Example 5: Find the harmonic conjugate of $u(x,y) = x^2 - y^2$.**
First, check if $u$ is harmonic:
$\frac{\partial u}{\partial x} = 2x$, $\frac{\partial^2 u}{\partial x^2} = 2$
$\frac{\partial u}{\partial y} = -2y$, $\frac{\partial^2 u}{\partial y^2} = -2$
$\nabla^2 u = 2 + (-2) = 0$. So, $u$ is harmonic.

Now, find $v(x,y)$ using Cauchy-Riemann equations:
$\frac{\partial v}{\partial y} = \frac{\partial u}{\partial x} = 2x$
$\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y} = -(-2y) = 2y$

Integrate $\frac{\partial v}{\partial y} = 2x$ with respect to $y$:
$v(x,y) = \int 2x dy = 2xy + g(x)$

Differentiate this $v$ with respect to $x$:
$\frac{\partial v}{\partial x} = 2y + g'(x)$

Equate this to the second Cauchy-Riemann equation:
$2y + g'(x) = 2y$
$g'(x) = 0$
$g(x) = C$ (a constant)

So, $v(x,y) = 2xy + C$.
Let's choose $C=0$ for simplicity. Then $v(x,y) = 2xy$.
The analytic function is $f(z) = u(x,y) + iv(x,y) = (x^2 - y^2) + i(2xy) = z^2$.

**Example 6: Find the harmonic conjugate of $u(x,y) = e^x \cos y$.**
Check if $u$ is harmonic:
$\frac{\partial u}{\partial x} = e^x \cos y$, $\frac{\partial^2 u}{\partial x^2} = e^x \cos y$
$\frac{\partial u}{\partial y} = -e^x \sin y$, $\frac{\partial^2 u}{\partial y^2} = -e^x \cos y$
$\nabla^2 u = e^x \cos y + (-e^x \cos y) = 0$. So, $u$ is harmonic.

Find $v(x,y)$ using Cauchy-Riemann equations:
$\frac{\partial v}{\partial y} = \frac{\partial u}{\partial x} = e^x \cos y$
$\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y} = -(-e^x \sin y) = e^x \sin y$

Integrate $\frac{\partial v}{\partial y} = e^x \cos y$ with respect to $y$:
$v(x,y) = \int e^x \cos y dy = e^x \sin y + g(x)$

Differentiate this $v$ with respect to $x$:
$\frac{\partial v}{\partial x} = e^x \sin y + g'(x)$

Equate this to the second Cauchy-Riemann equation:
$e^x \sin y + g'(x) = e^x \sin y$
$g'(x) = 0$
$g(x) = C$ (a constant)

So, $v(x,y) = e^x \sin y + C$.
Let's choose $C=0$. Then $v(x,y) = e^x \sin y$.
The analytic function is $f(z) = u(x,y) + iv(x,y) = e^x \cos y + i(e^x \sin y) = e^x (\cos y + i \sin y) = e^x e^{iy} = e^{x+iy} = e^z$.

**Reference:**
*   **Kreyszig, Chapter 12.4:** Discusses harmonic functions and their conjugates.
*   **Ramana, Chapter 29:** Covers the property of harmonic functions and methods to find conjugates.
*   **Grewal, Chapter 14:** Explains harmonic functions and their conjugates.

---

### 8. Geometric Interpretation: Conformal Mapping

An analytic function $f(z)$ transforms points and curves in the $z$-plane to points and curves in the $w$-plane.

**Conformal Mapping:**
A mapping $w = f(z)$ is called **conformal** at a point $z_0$ if it preserves angles between intersecting curves passing through $z_0$, both in magnitude and orientation.

**Theorem:** If $f(z)$ is analytic and $f'(z_0) \neq 0$ at $z_0$, then the mapping $w = f(z)$ is conformal at $z_0$.

**Explanation:**
Consider two curves $C_1$ and $C_2$ intersecting at $z_0$. Let their tangent vectors at $z_0$ be represented by complex numbers $s_1$ and $s_2$. The angle from $C_1$ to $C_2$ is the argument of $s_2/s_1$.

Under the mapping $w = f(z)$, these curves are mapped to $C'_1$ and $C'_2$ in the $w$-plane, with tangent vectors $f'(z_0)s_1$ and $f'(z_0)s_2$ at $w_0 = f(z_0)$.

The angle between $C'_1$ and $C'_2$ is the argument of $\frac{f'(z_0)s_2}{f'(z_0)s_1} = \frac{s_2}{s_1}$.
Thus, the angle is preserved.

The mapping is also conformal if $f'(z_0) = 0$ at points where the order of the zero is $1$. However, if $f'(z_0) = 0$, the angle is multiplied by the order of the zero of $f'(z)$ at $z_0$.

**Implications for Electrical Science and Physical Science:**
Conformal mappings are crucial in solving boundary value problems in:
*   **Fluid dynamics:** Mapping complex flow regions to simpler ones.
*   **Electrostatics:** Determining electric potentials and fields by mapping regions with complex geometries to simpler ones (like strips or disks).
*   **Heat conduction:** Solving temperature distribution problems.

**Example of a Conformal Mapping:**
Let $w = f(z) = z^2$.
$f'(z) = 2z$.
$f'(z) = 0$ only at $z=0$.
So, $w=z^2$ is conformal at all points except $z=0$. At $z=0$, the angle is doubled.

Consider the axes $x=0$ (y-axis) and $y=0$ (x-axis) in the $z$-plane, which intersect at $0$ at a right angle.
When mapped by $w=z^2$:
If $z = iy$ (on y-axis), then $w = (iy)^2 = -y^2$. This is the negative real axis in the $w$-plane.
If $z = x$ (on x-axis), then $w = x^2$. This is the positive real axis in the $w$-plane.
The angle between the negative real axis and the positive real axis in the $w$-plane is $\pi$ (or 180 degrees). The original angle was $\pi/2$ (90 degrees). This demonstrates that at $z=0$, the angle is doubled.

**Reference:**
*   **Kreyszig, Chapter 12.6:** Introduces conformal mapping and its conditions.
*   **Zill & Shanahan, Chapter 4:** Provides a dedicated chapter on conformal mapping, including many examples and applications.

---

### 9. Practice Questions

**Question 1:**
Determine if the function $f(z) = \text{Re}(z^2) + i \text{Im}(z^2)$ is analytic. If so, find its derivative.
(a) $f(z) = x^2 - y^2 + i(2xy)$
(b) $f(z) = x^2 + y^2 + i(2xy)$
(c) $f(z) = x^2 - y^2 + i(x^2 + y^2)$
(d) $f(z) = x^2 + y^2 + i(x^2 - y^2)$

**Question 2:**
For which of the following functions are the Cauchy-Riemann equations satisfied?
(a) $f(z) = \bar{z}$
(b) $f(z) = z \bar{z}$
(c) $f(z) = e^{\bar{z}}$
(d) $f(z) = |z|^2$

**Question 3:**
Find the harmonic conjugate of $u(x,y) = e^{-x} \sin(y)$.

**Question 4:**
Is the function $f(z) = \text{Im}(z^2) + i \text{Re}(z^2)$ analytic? Justify your answer.

**Question 5:**
At which points is the mapping $w = z^3$ conformal?

---

### 10. Answers to Practice Questions

**Answer 1:**
(a) $f(z) = x^2 - y^2 + i(2xy) = z^2$.
$u = x^2 - y^2$, $v = 2xy$.
$\frac{\partial u}{\partial x} = 2x$, $\frac{\partial v}{\partial y} = 2x \implies \frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$.
$\frac{\partial u}{\partial y} = -2y$, $\frac{\partial v}{\partial x} = 2y \implies \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$.
Cauchy-Riemann equations are satisfied, and partial derivatives are continuous. Thus, $f(z)$ is analytic.
$f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} = 2x + i(2y) = 2(x+iy) = 2z$.

**Answer 2:**
(b) $f(z) = z \bar{z} = |z|^2 = x^2 + y^2$.
$u = x^2 + y^2$, $v = 0$.
$\frac{\partial u}{\partial x} = 2x$, $\frac{\partial v}{\partial y} = 0$. For equality, $x=0$.
$\frac{\partial u}{\partial y} = 2y$, $\frac{\partial v}{\partial x} = 0$. For equality, $y=0$.
The Cauchy-Riemann equations are only satisfied at $z=0$. Since they are not satisfied in a neighborhood, the function is not analytic, but the CR equations are satisfied at a point. The question asks where CR are satisfied, which is only at $z=0$.

*Correction*: The question asks "For which of the following functions are the Cauchy-Riemann equations satisfied?" This could mean satisfied *everywhere* for analyticity, or satisfied *at some point*. If it means "satisfied for the function to be analytic", then the answer is none of the provided options in this context are analytic everywhere. However, if it means satisfied at *any* point, then (b) and (d) are satisfied at $z=0$. Let's assume the question is implicitly asking which functions *could be* analytic if CR are met. In that case, only (b) and (d) are candidates if we consider the point $z=0$. If the question implies satisfied *everywhere*, then none of them are.

Revisiting the options:
(a) $f(z) = \bar{z}$: $u=x, v=-y$. $\partial u/\partial x = 1$, $\partial v/\partial y = -1$. Never equal.
(b) $f(z) = z\bar{z} = x^2+y^2$: $u=x^2+y^2, v=0$. $\partial u/\partial x = 2x, \partial v/\partial y = 0$. Equal if $x=0$. $\partial u/\partial y = 2y, \partial v/\partial x = 0$. Equal if $y=0$. CR satisfied only at $(0,0)$.
(c) $f(z) = e^{\bar{z}} = e^{x-iy} = e^x(\cos(-y) + i\sin(-y)) = e^x(\cos y - i\sin y)$. $u=e^x\cos y, v=-e^x\sin y$. $\partial u/\partial x = e^x\cos y$, $\partial v/\partial y = -e^x\cos y$. Not equal.
(d) $f(z) = |z|^2 = x^2+y^2$: Same as (b).

Given standard interpretations, option (b) and (d) are the same function. The Cauchy-Riemann equations are satisfied at the point $z=0$ for $f(z)=|z|^2$.

**Answer 3:**
$u(x,y) = e^{-x} \sin y$.
$\frac{\partial u}{\partial x} = -e^{-x} \sin y$.
$\frac{\partial u}{\partial y} = e^{-x} \cos y$.

Using CR equations:
$\frac{\partial v}{\partial y} = \frac{\partial u}{\partial x} = -e^{-x} \sin y$.
$\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y} = -e^{-x} \cos y$.

Integrate $\frac{\partial v}{\partial y} = -e^{-x} \sin y$ with respect to $y$:
$v(x,y) = \int -e^{-x} \sin y dy = e^{-x} \cos y + g(x)$.

Differentiate with respect to $x$:
$\frac{\partial v}{\partial x} = -e^{-x} \cos y + g'(x)$.

Equate to the second CR equation:
$-e^{-x} \cos y + g'(x) = -e^{-x} \cos y$.
$g'(x) = 0 \implies g(x) = C$.

So, $v(x,y) = e^{-x} \cos y + C$. Choosing $C=0$, the harmonic conjugate is $v(x,y) = e^{-x} \cos y$.
The analytic function is $e^{-x} \sin y + i e^{-x} \cos y = e^{-x}(\sin y + i \cos y) = e^{-x} i (\cos y - i \sin y) = i e^{-x} e^{-iy} = i e^{-x-iy} = i e^{-\bar{z}}$.

**Answer 4:**
$f(z) = \text{Im}(z^2) + i \text{Re}(z^2) = 2xy + i(x^2 - y^2)$.
$u(x,y) = 2xy$, $v(x,y) = x^2 - y^2$.

$\frac{\partial u}{\partial x} = 2y$.
$\frac{\partial u}{\partial y} = 2x$.
$\frac{\partial v}{\partial x} = 2x$.
$\frac{\partial v}{\partial y} = -2y$.

Check Cauchy-Riemann equations:
1.  $\frac{\partial u}{\partial x} = 2y$ and $\frac{\partial v}{\partial y} = -2y$. For equality, $2y = -2y \implies 4y = 0 \implies y=0$.
2.  $\frac{\partial u}{\partial y} = 2x$ and $-\frac{\partial v}{\partial x} = -2x$. For equality, $2x = -2x \implies 4x = 0 \implies x=0$.

The Cauchy-Riemann equations are only satisfied at the point $z=0$. Since they are not satisfied in any neighborhood around $0$, the function is not analytic.

**Answer 5:**
$w = z^3$.
$f(z) = z^3$.
$f'(z) = 3z^2$.

The mapping $w=f(z)$ is conformal where $f'(z) \neq 0$.
$f'(z) = 0$ when $3z^2 = 0$, which means $z=0$.
Therefore, the mapping $w=z^3$ is conformal at all points $z \neq 0$.

---

### 11. Important Points to Remember

*   **Analyticity:** A function must be differentiable in an entire neighborhood of a point to be analytic at that point.
*   **Cauchy-Riemann Equations:** Necessary conditions for differentiability ($\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$ and $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$).
*   **Sufficiency for Analyticity:** CR equations plus continuous partial derivatives in a neighborhood.
*   **Harmonic Functions:** Real and imaginary parts of analytic functions satisfy Laplace's equation ($\nabla^2 h = 0$).
*   **Harmonic Conjugate:** If $u$ is harmonic, $v$ is its conjugate if $u+iv$ is analytic.
*   **Conformal Mapping:** A mapping $w=f(z)$ is conformal at $z_0$ if $f'(z_0) \neq 0$, preserving angles in magnitude and orientation.

This set of notes covers the fundamental aspects of analytic functions, their conditions for existence, properties of their real and imaginary parts, and their geometric significance in conformal mapping, aligning with the learning outcomes and course objectives.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=fNk_zzaMoEs) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
