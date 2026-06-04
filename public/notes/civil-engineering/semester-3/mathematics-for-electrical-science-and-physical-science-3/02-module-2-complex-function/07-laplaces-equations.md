---
title: "Laplace’s Equations"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 2: Complex Function"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba810693"
status: "completed"
scrapedAt: "2026-05-20T18:41:20.335Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 2: Complex Functions

### Topic: Laplace’s Equations

**Description:** This topic introduces Laplace's Equation within the context of complex functions, exploring its properties, solutions, and applications in electrical and physical sciences.

---

### Learning Outcomes:

By the end of this topic, you should be able to:

*   **Understand the definition and properties of Laplace's Equation.**
*   **Recognize and verify solutions to Laplace's Equation (harmonic functions).**
*   **Understand the Cauchy-Riemann equations and their relationship to harmonic functions.**
*   **Apply the Dirichlet problem and its significance in physical applications.**
*   **Introduce basic methods for solving Laplace's Equation in simple domains (e.g., using conformal mapping).**

---

### 1. Introduction to Laplace's Equation

Laplace's Equation is a fundamental partial differential equation (PDE) that appears in many areas of physics and engineering, including electrostatics, fluid dynamics, heat transfer, and potential theory.

#### Key Concepts and Definitions:

*   **Laplace's Equation:** In two dimensions, for a function $u(x, y)$, Laplace's Equation is given by:
    $$ \nabla^2 u = \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0 $$
    where $\nabla^2$ is the Laplacian operator.

*   **Harmonic Function:** A function $u(x, y)$ is called **harmonic** if it satisfies Laplace's Equation.

*   **Potential Function:** In many physical problems, a harmonic function represents a potential, such as electrostatic potential, gravitational potential, or temperature distribution in steady-state conditions.

*   **Second-Order Partial Derivatives:** To verify if a function is harmonic, we need to compute its second partial derivatives with respect to $x$ and $y$ and check if their sum is zero.

#### Example 1.1: Verifying a Harmonic Function

Let $u(x, y) = x^2 - y^2$.

*   First partial derivatives:
    *   $\frac{\partial u}{\partial x} = 2x$
    *   $\frac{\partial u}{\partial y} = -2y$

*   Second partial derivatives:
    *   $\frac{\partial^2 u}{\partial x^2} = \frac{\partial}{\partial x}(2x) = 2$
    *   $\frac{\partial^2 u}{\partial y^2} = \frac{\partial}{\partial y}(-2y) = -2$

*   Check Laplace's Equation:
    *   $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 2 + (-2) = 0$

Since the sum of the second partial derivatives is zero, $u(x, y) = x^2 - y^2$ is a harmonic function.

#### Example 1.2: Verifying Another Harmonic Function

Let $u(x, y) = e^x \cos y$.

*   First partial derivatives:
    *   $\frac{\partial u}{\partial x} = e^x \cos y$
    *   $\frac{\partial u}{\partial y} = -e^x \sin y$

*   Second partial derivatives:
    *   $\frac{\partial^2 u}{\partial x^2} = \frac{\partial}{\partial x}(e^x \cos y) = e^x \cos y$
    *   $\frac{\partial^2 u}{\partial y^2} = \frac{\partial}{\partial y}(-e^x \sin y) = -e^x \cos y$

*   Check Laplace's Equation:
    *   $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = e^x \cos y + (-e^x \cos y) = 0$

Thus, $u(x, y) = e^x \cos y$ is also a harmonic function.

---

### 2. Properties of Harmonic Functions

Harmonic functions possess several important properties that make them useful in solving physical problems.

#### Key Concepts and Definitions:

*   **Mean Value Property:** For a harmonic function $u(x, y)$, the average value of $u$ over any circular disk is equal to the value of $u$ at the center of the disk.
    $$ u(x_0, y_0) = \frac{1}{2\pi r} \int_{C_r} u(x, y) \, ds $$
    where $C_r$ is a circle of radius $r$ centered at $(x_0, y_0)$, and $ds$ is the arc length element. Equivalently, for a disk $D_r$:
    $$ u(x_0, y_0) = \frac{1}{\pi r^2} \iint_{D_r} u(x, y) \, dA $$

*   **Maximum/Minimum Principle:** A non-constant harmonic function defined on a bounded, closed, and connected domain $\Omega$ attains its maximum and minimum values on the boundary of $\Omega$. This means that a harmonic function cannot have an interior maximum or minimum unless it is constant.

*   **Analytic Functions and Harmonic Functions:** A remarkable connection exists between harmonic functions and analytic complex functions. If $f(z) = f(x+iy) = u(x, y) + iv(x, y)$ is an analytic function, then both its real part $u(x, y)$ and its imaginary part $v(x, y)$ are harmonic functions.

#### Relationship with Cauchy-Riemann Equations

The Cauchy-Riemann equations are a necessary condition for a complex function to be analytic. They also directly link the harmonicity of the real and imaginary parts.

*   **Cauchy-Riemann Equations:** For a complex function $f(z) = u(x, y) + iv(x, y)$ to be analytic, the following must hold:
    $$ \frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} \quad \text{and} \quad \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x} $$

*   **Connection to Harmonicity:**
    *   If $f(z) = u(x, y) + iv(x, y)$ is analytic, then $u(x, y)$ is harmonic:
        $$ \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = \frac{\partial}{\partial x}\left(\frac{\partial v}{\partial y}\right) + \frac{\partial}{\partial y}\left(-\frac{\partial v}{\partial x}\right) = \frac{\partial^2 v}{\partial x \partial y} - \frac{\partial^2 v}{\partial y \partial x} $$
        Assuming $v$ has continuous second partial derivatives (which is true for analytic functions), by Clairaut's theorem, $\frac{\partial^2 v}{\partial x \partial y} = \frac{\partial^2 v}{\partial y \partial x}$, so the sum is 0.

    *   Similarly, if $f(z)$ is analytic, then $v(x, y)$ is harmonic:
        $$ \frac{\partial^2 v}{\partial x^2} + \frac{\partial^2 v}{\partial y^2} = \frac{\partial}{\partial x}\left(-\frac{\partial u}{\partial y}\right) + \frac{\partial}{\partial y}\left(\frac{\partial u}{\partial x}\right) = -\frac{\partial^2 u}{\partial x \partial y} + \frac{\partial^2 u}{\partial y \partial x} $$
        Again, this sum is 0.

*   **Conjugate Harmonic Function:** If $u(x, y)$ is harmonic, its corresponding harmonic function $v(x, y)$ such that $f(z) = u(x, y) + iv(x, y)$ is analytic is called the **conjugate harmonic function** of $u$.

#### Example 2.1: Finding the Conjugate Harmonic Function

Let $u(x, y) = x^2 - y^2$. We know this is harmonic. Let's find its conjugate harmonic function $v(x, y)$ such that $f(z) = u(x, y) + iv(x, y)$ is analytic.

Using the Cauchy-Riemann equations:
*   $\frac{\partial u}{\partial x} = 2x$
*   $\frac{\partial u}{\partial y} = -2y$

From $ \frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} $, we have $ \frac{\partial v}{\partial y} = 2x $. Integrating with respect to $y$:
$ v(x, y) = \int 2x \, dy = 2xy + g(x) $
where $g(x)$ is a function of $x$ only.

From $ \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x} $, we have $ -2y = -\frac{\partial}{\partial x}(2xy + g(x)) $.
$ -2y = -(2y + g'(x)) $
$ -2y = -2y - g'(x) $
$ g'(x) = 0 $
Integrating with respect to $x$:
$ g(x) = C $
where $C$ is a constant.

So, $v(x, y) = 2xy + C$.

Let's verify that $v(x, y)$ is harmonic:
*   $\frac{\partial v}{\partial x} = 2y$
*   $\frac{\partial v}{\partial y} = 2x$
*   $\frac{\partial^2 v}{\partial x^2} = 0$
*   $\frac{\partial^2 v}{\partial y^2} = 0$
*   $\frac{\partial^2 v}{\partial x^2} + \frac{\partial^2 v}{\partial y^2} = 0 + 0 = 0$. So $v(x, y)$ is harmonic.

The analytic function is $f(z) = (x^2 - y^2) + i(2xy + C)$.
We can recognize that $z = x+iy$, so $z^2 = (x+iy)^2 = x^2 + 2ixy + (iy)^2 = x^2 - y^2 + i(2xy)$.
Thus, $f(z) = z^2 + iC$, which is indeed analytic.

#### Example 2.2: Using the $z = x+iy$ Substitution

Let $u(x, y) = \ln(x^2 + y^2)$.
We can recognize that $x^2 + y^2 = |z|^2 = z\bar{z}$.
So, $u(x, y) = \ln(z\bar{z}) = \ln z + \ln \bar{z}$. This isn't directly helpful for finding the analytic function.

Let's compute the derivatives:
*   $\frac{\partial u}{\partial x} = \frac{2x}{x^2 + y^2}$
*   $\frac{\partial u}{\partial y} = \frac{2y}{x^2 + y^2}$

*   $\frac{\partial^2 u}{\partial x^2} = \frac{2(x^2 + y^2) - 2x(2x)}{(x^2 + y^2)^2} = \frac{2x^2 + 2y^2 - 4x^2}{(x^2 + y^2)^2} = \frac{2y^2 - 2x^2}{(x^2 + y^2)^2}$
*   $\frac{\partial^2 u}{\partial y^2} = \frac{2(x^2 + y^2) - 2y(2y)}{(x^2 + y^2)^2} = \frac{2x^2 + 2y^2 - 4y^2}{(x^2 + y^2)^2} = \frac{2x^2 - 2y^2}{(x^2 + y^2)^2}$

*   $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = \frac{2y^2 - 2x^2}{(x^2 + y^2)^2} + \frac{2x^2 - 2y^2}{(x^2 + y^2)^2} = 0$.
So $u(x, y) = \ln(x^2 + y^2)$ is harmonic.

To find $v(x, y)$:
*   $\frac{\partial u}{\partial x} = \frac{2x}{x^2 + y^2}$
*   $\frac{\partial u}{\partial y} = \frac{2y}{x^2 + y^2}$

From $ \frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} $:
$ \frac{\partial v}{\partial y} = \frac{2x}{x^2 + y^2} $
Integrating with respect to $y$:
$ v(x, y) = \int \frac{2x}{x^2 + y^2} \, dy $
This integration is tricky. Let's use the other Cauchy-Riemann equation:

From $ \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x} $:
$ \frac{2y}{x^2 + y^2} = -\frac{\partial v}{\partial x} $
$ \frac{\partial v}{\partial x} = -\frac{2y}{x^2 + y^2} $
Integrating with respect to $x$:
$ v(x, y) = \int -\frac{2y}{x^2 + y^2} \, dx $
Recall the derivative of $\arctan(y/x)$: $\frac{\partial}{\partial x} \arctan(y/x) = \frac{1}{1 + (y/x)^2} \cdot (-\frac{y}{x^2}) = \frac{x^2}{x^2+y^2} \cdot (-\frac{y}{x^2}) = -\frac{y}{x^2+y^2}$.
So, $v(x, y) = 2 \arctan(y/x) + h(y)$.

Now, let's check this with the first integration from $ \frac{\partial v}{\partial y} = \frac{2x}{x^2 + y^2} $:
$ v(x, y) = \int \frac{2x}{x^2 + y^2} \, dy $
This is $ 2x \int \frac{1}{x^2 + y^2} \, dy = 2x \cdot \frac{1}{x} \arctan(\frac{y}{x}) = 2 \arctan(y/x) $.
This matches the form $2 \arctan(y/x) + h(y)$ if $h(y)$ is a constant.

So, $v(x, y) = 2 \arctan(y/x) + C$.

The analytic function is $f(z) = \ln(x^2 + y^2) + i(2 \arctan(y/x) + C)$.
We know that $\arg(z) = \arctan(y/x)$ (for $x>0$).
Also, $z = x+iy$, so $\ln z = \ln|z| + i \arg(z) = \ln(\sqrt{x^2+y^2}) + i \arctan(y/x) = \frac{1}{2}\ln(x^2+y^2) + i \arctan(y/x)$.
Our $u(x, y)$ is $ \ln(x^2 + y^2) = 2 \cdot \frac{1}{2} \ln(x^2 + y^2)$.
So, $f(z) = 2 \ln|z| + i (2 \arg(z) + C') = 2 \ln z + iC''$.

---

### 3. The Dirichlet Problem

The Dirichlet problem is a fundamental problem in potential theory and involves finding a harmonic function within a given domain that takes specified values on the boundary of that domain.

#### Key Concepts and Definitions:

*   **Domain ($\Omega$):** A region in the complex plane (or $\mathbb{R}^2$).
*   **Boundary ($\partial \Omega$):** The edge of the domain.
*   **Dirichlet Problem:** Given a domain $\Omega$ and a continuous function $g$ defined on its boundary $\partial \Omega$, the Dirichlet problem is to find a function $u(x, y)$ such that:
    1.  $u(x, y)$ is harmonic in $\Omega$ (i.e., $\nabla^2 u = 0$ in $\Omega$).
    2.  $u(x, y) = g(x, y)$ for all $(x, y)$ on the boundary $\partial \Omega$.

#### Significance in Physical Applications:

The Dirichlet problem has numerous applications:

*   **Electrostatics:** Finding the electrostatic potential $V(x, y)$ in a region where the potential is known on the boundaries (e.g., conductors).
*   **Heat Transfer:** Determining the steady-state temperature distribution $T(x, y)$ in a region where the temperature is fixed on the boundaries.
*   **Fluid Dynamics:** Calculating the velocity potential in irrotational fluid flow.

#### Example 3.1: Dirichlet Problem in a Rectangular Domain

Consider a rectangular plate occupying the region $0 \le x \le a$, $0 \le y \le b$. Suppose the temperature on the four edges is given by:
*   $u(x, 0) = f_1(x)$ for $0 \le x \le a$ (bottom edge)
*   $u(x, b) = f_2(x)$ for $0 \le x \le a$ (top edge)
*   $u(0, y) = g_1(y)$ for $0 \le y \le b$ (left edge)
*   $u(a, y) = g_2(y)$ for $0 \le y \le b$ (right edge)

The problem is to find $u(x, y)$ such that $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$ within the rectangle and $u$ matches these boundary conditions.

**Note:** Solving the general Dirichlet problem for arbitrary domains and boundary conditions can be complex. For simple domains like disks or rectangles, and specific boundary conditions (e.g., zero on some boundaries), analytical solutions can be found using methods like separation of variables or conformal mapping.

---

### 4. Solving Laplace's Equation Using Conformal Mapping

Conformal mapping provides a powerful technique for solving Laplace's equation, especially for domains that are not simple rectangles or disks but can be conformally mapped to such domains.

#### Key Concepts and Definitions:

*   **Conformal Mapping:** A complex function $w = f(z)$ that preserves angles between curves at points where it is analytic. If $w = f(z)$ is conformal, then the Jacobian of the transformation $(x, y) \mapsto (u, v)$ where $w = u+iv$, has a non-zero determinant.

*   **Transformation of Harmonic Functions:** If $u(x, y)$ is harmonic in the $z$-plane, and $w = f(z)$ is a conformal mapping, then the function $U(u, v) = u(x(u, v), y(u, v))$ is harmonic in the $w$-plane, where $x$ and $y$ are expressed in terms of $u$ and $v$. More precisely, if $f(z) = U_f(x, y) + iV_f(x, y)$ is analytic, and $u(x, y)$ is harmonic, then $u$ can be expressed in terms of $f(z)$ as $u(x, y) = u( \text{Re}(f^{-1}(w)), \text{Im}(f^{-1}(w)) )$. Let $z = g(w) = x(u,v) + iy(u,v)$. Then $u(x,y)$ becomes $U(u,v) = u(x(u,v), y(u,v))$. If $u$ is harmonic in the $z$-plane, then $U$ is harmonic in the $w$-plane.

    The key idea is that if we have a solution $U(u, v)$ in the simple domain (e.g., a disk or half-plane) of the $w$-plane, we can transform it back to the original domain in the $z$-plane using the inverse mapping $z = f^{-1}(w)$.

*   **Strategy for Solving Dirichlet Problems:**
    1.  **Map the original domain $\Omega_z$ in the $z$-plane to a simpler domain $\Omega_w$ in the $w$-plane** (e.g., a disk or a half-plane) using a conformal mapping $w = f(z)$.
    2.  **Find the harmonic function $U(u, v)$ in the simpler domain $\Omega_w$** that satisfies the transformed boundary conditions. This is usually easier to solve.
    3.  **Transform the solution back to the original domain $\Omega_z$** using the inverse mapping $z = f^{-1}(w)$, so $u(x, y) = U(u(x, y), v(x, y))$.

#### Example 4.1: Solving Laplace's Equation in a Half-Plane

Consider the upper half-plane $y > 0$ ($Im(z) > 0$) in the $z$-plane. We want to find a function $u(x, y)$ such that $\nabla^2 u = 0$ for $y > 0$ and $u(x, 0) = g(x)$ on the real axis.

*   **Conformal Map:** The conformal map $w = f(z) = z$ (identity map) maps the upper half-plane $Im(z) > 0$ to itself. This doesn't simplify the domain but is a valid mapping. A more useful mapping for boundary conditions on the real axis is often $w = z^2$ or $w = e^z$.
    Let's consider a simpler case where we want to map a disk to a half-plane. For instance, mapping the unit disk $|z| \le 1$ to the upper half-plane $Im(w) \ge 0$. A common mapping is $w = i \frac{1+z}{1-z}$.

    Let's stick to the half-plane problem and consider the solution directly, which can be derived using Fourier transforms or Green's functions, but also relates to complex analysis.
    The solution to the Dirichlet problem for the upper half-plane is given by Poisson's integral formula:
    $$ u(x, y) = \frac{1}{\pi} \int_{-\infty}^{\infty} \frac{y}{(x-\xi)^2 + y^2} g(\xi) \, d\xi \quad \text{for } y > 0 $$
    Here, $u(x, y)$ is harmonic in the upper half-plane and $u(x, 0) = g(x)$. The kernel $K(x, y, \xi) = \frac{1}{\pi} \frac{y}{(x-\xi)^2 + y^2}$ is called the Poisson kernel for the half-plane.

    **Connection to Complex Analysis:** The Poisson kernel can be related to the imaginary part of a logarithmic function. If $f(z)$ is analytic, then $\text{Im}(f(z))$ is harmonic.

#### Example 4.2: Mapping a Sector to a Half-Plane

Consider a sector of an annulus defined by $1 < r < R$ and $0 < \theta < \alpha$ in polar coordinates, or in the $z$-plane. We want to map this to a rectangular domain, or a half-plane.

Let's consider a simpler example of mapping a domain.
Suppose we want to solve Laplace's equation in the region between two concentric circles, $|z|=1$ and $|z|=R$. The boundary conditions are $u=0$ on $|z|=1$ and $u=V$ on $|z|=R$.

*   **Conformal Map:** The mapping $w = \ln z$ transforms the annulus $1 < |z| < R$ to a rectangle in the $w$-plane: $0 < \text{Re}(w) < \ln R$ and $Im(w) \in [0, 2\pi)$ (or any interval of length $2\pi$ for the argument).
    Let $z = re^{i\theta}$. Then $w = \ln(re^{i\theta}) = \ln r + i\theta$.
    The annulus $1 < r < R$ and $0 \le \theta < 2\pi$ (for a full annulus) maps to the rectangle $0 < \text{Re}(w) < \ln R$ and $0 \le \text{Im}(w) < 2\pi$.

    The boundary conditions transform:
    *   $|z|=1 \implies r=1 \implies \text{Re}(w) = \ln 1 = 0$. So, $U(0, \text{Im}(w)) = 0$.
    *   $|z|=R \implies r=R \implies \text{Re}(w) = \ln R$. So, $U(\ln R, \text{Im}(w)) = V$.
    *   The sides of the rectangle corresponding to $\theta = 0$ and $\theta = 2\pi$ for the full annulus ($z = r$ and $z = r e^{i2\pi}$) both map to $Im(w) = 0$ and $Im(w) = 2\pi$ respectively, implying a periodic boundary condition in the $\theta$ direction.

*   **Solving in the $w$-plane:** The problem in the $w$-plane is to find $U(u, v)$ where $w = u+iv$, such that $\nabla^2 U = 0$ for $0 < u < \ln R$ and $0 < v < 2\pi$, with $U(0, v) = 0$ and $U(\ln R, v) = V$.
    This is a standard Laplace equation on a rectangle with Dirichlet boundary conditions. Using separation of variables, the solution is:
    $$ U(u, v) = V \frac{u}{\ln R} $$
    This assumes the $v$ boundaries are periodic or do not impose conditions. If the domain is a strip $0 < u < \ln R$ and $v \in \mathbb{R}$, then $U(u, v) = V \frac{u}{\ln R}$ is a harmonic function that satisfies $U(0, v)=0$ and $U(\ln R, v)=V$.

*   **Transforming back:** Now, substitute $u = \text{Re}(w) = \text{Re}(\ln z) = \ln |z|$.
    $$ U(\ln |z|) = V \frac{\ln |z|}{\ln R} $$
    So, the solution in the original annulus is $u(x, y) = V \frac{\ln(\sqrt{x^2+y^2})}{\ln R} = \frac{V}{2\ln R} \ln(x^2+y^2)$.

---

### 5. Practice Questions and Exercises

**Question 5.1:**
Verify that the function $u(x, y) = \sin(x) \cosh(y)$ is harmonic.

**Solution 5.1:**
*   $\frac{\partial u}{\partial x} = \cos(x) \cosh(y)$
*   $\frac{\partial u}{\partial y} = \sin(x) \sinh(y)$
*   $\frac{\partial^2 u}{\partial x^2} = -\sin(x) \cosh(y)$
*   $\frac{\partial^2 u}{\partial y^2} = \sin(x) \cosh(y)$
*   $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = -\sin(x) \cosh(y) + \sin(x) \cosh(y) = 0$.
Therefore, $u(x, y) = \sin(x) \cosh(y)$ is harmonic.

**Question 5.2:**
Given that $u(x, y) = x^3 - 3xy^2$ is harmonic, find its conjugate harmonic function $v(x, y)$.

**Solution 5.2:**
*   $\frac{\partial u}{\partial x} = 3x^2 - 3y^2$
*   $\frac{\partial u}{\partial y} = -6xy$

Using $ \frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} $:
$ \frac{\partial v}{\partial y} = 3x^2 - 3y^2 $
Integrate with respect to $y$:
$ v(x, y) = \int (3x^2 - 3y^2) \, dy = 3x^2y - y^3 + g(x) $

Using $ \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x} $:
$ -6xy = -\frac{\partial}{\partial x}(3x^2y - y^3 + g(x)) $
$ -6xy = -(6xy + g'(x)) $
$ -6xy = -6xy - g'(x) $
$ g'(x) = 0 \implies g(x) = C $

So, the conjugate harmonic function is $v(x, y) = 3x^2y - y^3 + C$.

**Question 5.3:**
Is the function $u(x, y) = e^{x^2-y^2} \cos(2xy)$ harmonic?

**Solution 5.3:**
This requires computing higher-order derivatives. Let's try to relate it to a complex function.
Consider $z^2 = x^2 - y^2 + i(2xy)$.
Then $e^{z^2} = e^{(x^2-y^2) + i(2xy)} = e^{x^2-y^2} (\cos(2xy) + i\sin(2xy))$.
The real part of $e^{z^2}$ is $u(x, y) = e^{x^2-y^2} \cos(2xy)$.
Since $e^{z^2}$ is an analytic function (as $z^2$ is analytic and $e^w$ is analytic), its real part must be harmonic.
Therefore, $u(x, y) = e^{x^2-y^2} \cos(2xy)$ is harmonic.

**Question 5.4:**
Consider the unit disk $|z| < 1$. If the boundary is held at $u(x, y) = x^2+y^2$, what is the value of the harmonic function $u(x, y)$ at the center $(0, 0)$?

**Solution 5.4:**
The boundary condition is $u(x, y) = x^2+y^2 = |z|^2$ on $|z|=1$.
For a harmonic function $u(x, y)$, the Mean Value Property states that $u(x_0, y_0)$ is the average of $u$ over any circle centered at $(x_0, y_0)$.
For the center $(0,0)$ and a circle of radius $r=1$ (which is the boundary itself):
$u(0, 0) = \frac{1}{2\pi(1)} \int_{|z|=1} u(x, y) \, ds$
$u(0, 0) = \frac{1}{2\pi} \int_{|z|=1} (x^2+y^2) \, ds$
On the circle $|z|=1$, $x^2+y^2 = 1$.
$u(0, 0) = \frac{1}{2\pi} \int_{|z|=1} 1 \, ds = \frac{1}{2\pi} (\text{circumference of the circle})$
$u(0, 0) = \frac{1}{2\pi} (2\pi \cdot 1) = 1$.

Alternatively, using the Maximum/Minimum principle, the function $u(x,y) = x^2+y^2$ is *not* harmonic. The question implies that there *is* a harmonic function that *satisfies* these boundary conditions. The harmonic function that satisfies $u(x,y)=x^2+y^2$ on the boundary of the unit disk is $u(x,y) = |z|^2$. However, $|z|^2 = x^2+y^2$ is not harmonic: $\frac{\partial^2}{\partial x^2}(x^2+y^2) = 2$ and $\frac{\partial^2}{\partial y^2}(x^2+y^2) = 2$, so $\nabla^2 u = 4 \neq 0$.

There might be a misunderstanding in the question's premise or wording. If the question *meant* to ask about the boundary values, then $u(x,y)=1$ at the boundary for $u(x,y)=x^2+y^2$.

Let's re-evaluate based on the standard Dirichlet problem: we seek a harmonic function $u(x,y)$ such that on the boundary $|z|=1$, $u(x,y)=g(x,y)$. If $g(x,y)=1$, then the harmonic function inside the disk is $u(x,y)=1$ (constant harmonic function).
If $g(x,y)=x^2+y^2$, we would need to find a harmonic function $u(x,y)$ that matches $x^2+y^2$ on the boundary. The solution for a disk $|z|<R$ with boundary $u(re^{i\theta}) = f(\theta)$ is given by the Poisson integral formula for the disk:
$u(r, \theta) = \frac{R^2 - r^2}{2\pi} \int_0^{2\pi} \frac{f(\phi)}{R^2 - 2Rr\cos(\theta-\phi) + r^2} \, d\phi$.
For $|z|=1$, $r=1$. $f(\phi)$ here represents the boundary value as a function of angle.
If $g(x, y) = x^2 + y^2 = 1$ on $|z|=1$, then $f(\phi)=1$.
$u(r, \theta) = \frac{1-r^2}{2\pi} \int_0^{2\pi} \frac{1}{1 - 2r\cos(\theta-\phi) + r^2} \, d\phi$.
This integral evaluates to $\frac{2\pi}{ \sqrt{1-r^2}}$.
So, $u(r, \theta) = \frac{1-r^2}{2\pi} \cdot \frac{2\pi}{\sqrt{1-r^2}} = \sqrt{1-r^2}$. This is not correct.

Let's assume the question meant: If a harmonic function $u(x, y)$ has boundary values $u=1$ on $|z|=1$, what is $u(0,0)$?
Answer: By the Mean Value Property, $u(0,0)$ is the average of $u$ on the boundary, so $u(0,0) = 1$.

If the question implies that $u(x,y) = x^2+y^2$ is somehow the *harmonic* solution, this is incorrect. The only harmonic function within the unit disk that has boundary values $u=1$ is the constant function $u(x,y)=1$. The center value would be 1.

**Let's assume the question meant that the boundary values of the harmonic function are $u(x,y) = 1$ on $|z|=1$.**
Then by the mean value property applied to the unit circle centered at $(0,0)$:
$u(0,0) = \frac{1}{2\pi} \int_{|z|=1} u(x,y) ds$
$u(0,0) = \frac{1}{2\pi} \int_{|z|=1} 1 ds = \frac{1}{2\pi} (2\pi \times 1) = 1$.

**Important Point:** The function $u(x, y) = |z|^2 = x^2+y^2$ is *not* harmonic. It's a common pitfall to assume that any simple function satisfying boundary conditions is the solution. The solution *must* be harmonic.

---

### Important Points to Remember:

*   Laplace's equation is $\nabla^2 u = \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$.
*   Functions satisfying Laplace's equation are called **harmonic**.
*   If $f(z) = u(x, y) + iv(x, y)$ is analytic, then both $u(x, y)$ and $v(x, y)$ are harmonic.
*   The Cauchy-Riemann equations are central to the relationship between analytic functions and harmonic functions.
*   Harmonic functions have the **Mean Value Property** and the **Maximum/Minimum Principle**.
*   The **Dirichlet Problem** is about finding a harmonic function given its boundary values.
*   **Conformal mapping** is a powerful tool to solve Laplace's equation by transforming domains to simpler ones where solutions are known.
*   The transformation preserves harmonicity: if $u$ is harmonic in the $z$-plane, then the transformed function $U$ in the $w$-plane (via $w=f(z)$) is also harmonic.

---
This concludes the study notes for Laplace's Equations within Module 2: Complex Functions. Remember to practice the examples and exercises to solidify your understanding.
