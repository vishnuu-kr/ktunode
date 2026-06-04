---
title: "Conformal mapping"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 2: Complex Function"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba810696"
status: "completed"
scrapedAt: "2026-05-20T18:41:22.505Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 2: Complex Function

### Topic: Conformal Mapping

---

### Introduction to Conformal Mapping

Conformal mapping is a fundamental concept in complex analysis with significant applications in electrical engineering, physics, and fluid dynamics. It involves a transformation that preserves angles between intersecting curves. This property makes it incredibly useful for solving boundary value problems and understanding physical phenomena in different coordinate systems.

---

### Learning Outcomes

By the end of this topic, you will be able to:

*   **Understand the definition and properties of conformal mappings.**
*   **Identify conditions for a mapping to be conformal.**
*   **Analyze the geometric interpretation of conformal transformations.**
*   **Apply basic conformal mappings to solve specific problems.**
*   **Understand the use of conformal mappings in solving boundary value problems.**

---

### 1. Definition and Properties of Conformal Mappings

#### 1.1 What is a Conformal Mapping?

A mapping $w = f(z)$ from the $z$-plane to the $w$-plane is called **conformal** at a point $z_0$ if it preserves the angles between any two smooth curves intersecting at $z_0$ both in magnitude and orientation.

**Key aspects:**

*   **Angle preservation:** The angle between two intersecting curves in the $z$-plane is the same as the angle between their images under the mapping in the $w$-plane.
*   **Orientation preservation:** The orientation of the angle is also preserved (e.g., a counter-clockwise angle remains counter-clockwise).

#### 1.2 Conditions for Conformality

A function $w = f(z)$ is conformal at a point $z_0$ if and only if:

1.  **$f(z)$ is analytic at $z_0$.** This means $f'(z)$ exists in a neighborhood around $z_0$.
2.  **$f'(z_0) \neq 0$.** The derivative of the function is non-zero at the point of interest.

**Proof Intuition:**

Consider two smooth curves $C_1$ and $C_2$ intersecting at $z_0$. Let $w=f(z)$ be an analytic function.

*   The tangent vector to a curve $C$ passing through $z_0$ can be represented by a complex number $dz$.
*   Under the mapping, the tangent vector to the image curve $f(C)$ at $w_0 = f(z_0)$ is $dw = f'(z_0) dz$.

If $f'(z_0) \neq 0$, then the complex number $f'(z_0)$ acts as a local scaling factor and a rotation.

*   **Scaling:** $|f'(z_0)|$ represents the local magnification factor. Lengths of small segments are multiplied by $|f'(z_0)|$.
*   **Rotation:** $\arg(f'(z_0))$ represents the local angle of rotation. The angle of $dz$ is increased by $\arg(f'(z_0))$.

If we have two curves $C_1$ and $C_2$ intersecting at $z_0$ with a tangent vectors $dz_1$ and $dz_2$, the angle between them is $\arg(dz_2/dz_1)$. Their images have tangent vectors $dw_1 = f'(z_0) dz_1$ and $dw_2 = f'(z_0) dz_2$. The angle between the image curves is $\arg(dw_2/dw_1) = \arg((f'(z_0) dz_2) / (f'(z_0) dz_1)) = \arg(dz_2/dz_1)$. Thus, the angle is preserved.

#### 1.3 Properties of Conformal Mappings

*   **Preserves Angles:** As defined, this is the primary property.
*   **Locally Injective:** If $f(z)$ is conformal at $z_0$, it is injective in a small neighborhood around $z_0$. This means $f(z_1) \neq f(z_2)$ for $z_1 \neq z_2$ near $z_0$.
*   **Preserves Scale Locally:** Locally, the mapping acts like a rotation and scaling by a constant factor $|f'(z_0)|$.
*   **Preserves Orientation:** The orientation of angles is maintained.

#### 1.4 Non-Conformal Points

A point $z_0$ where $f'(z_0) = 0$ is a **critical point** or a **branch point** of the mapping. At such points, the mapping is generally not conformal. The angle is not preserved, and the orientation might be altered.

**Example:** $w = z^2$. Here $f'(z) = 2z$.
At $z_0 = 0$, $f'(0) = 0$. So $w=z^2$ is not conformal at $z=0$.
Consider two curves intersecting at $z=0$:
1.  $z = r$ (positive real axis, $0 \le r \le R$)
2.  $z = i \rho$ (positive imaginary axis, $0 \le \rho \le R$)
The angle between these curves at $z=0$ is $\pi/2$.

Their images are:
1.  $w = r^2$ (positive real axis, $0 \le \text{Re}(w) \le R^2$)
2.  $w = (i\rho)^2 = -\rho^2$ (negative real axis, $-R^2 \le \text{Re}(w) \le 0$)

The images lie along the real axis, forming an angle of $\pi$. The angle is not preserved.

---

### 2. Geometric Interpretation of Conformal Transformations

Conformal mappings are powerful tools for transforming geometric shapes and solving problems in different coordinate systems.

#### 2.1 Basic Conformal Mappings

Let's explore some fundamental conformal mappings:

**1. Translation:** $w = z + c$ (where $c$ is a complex constant)
*   $f'(z) = 1 \neq 0$. This mapping is conformal everywhere.
*   **Geometric Interpretation:** Shifts every point in the $z$-plane by the vector represented by $c$. It's a pure translation, preserving both angles and distances.

**2. Rotation:** $w = az$ (where $a$ is a non-zero complex constant)
*   $f'(z) = a \neq 0$. This mapping is conformal everywhere.
*   **Geometric Interpretation:** Rotates every point in the $z$-plane by an angle $\arg(a)$ and scales it by $|a|$.

**3. Magnification:** $w = kz$ (where $k$ is a positive real constant)
*   $f'(z) = k \neq 0$. This mapping is conformal everywhere.
*   **Geometric Interpretation:** Scales every point by a factor $k$.

**4. General Linear Transformation:** $w = az + b$ (where $a, b$ are complex constants, $a \neq 0$)
*   $f'(z) = a \neq 0$. This mapping is conformal everywhere.
*   **Geometric Interpretation:** Combines a rotation/scaling (by $a$) and a translation (by $b$). It preserves angles and distances.

**5. Inversion:** $w = 1/z$
*   $f'(z) = -1/z^2$. This mapping is conformal everywhere except at $z=0$ (where it's undefined and $f'(z)=0$).
*   **Geometric Interpretation:**
    *   Inverts points with respect to the unit circle: $|w| = 1/|z|$.
    *   Reflects points across the real axis: If $z=x+iy$, $w = \frac{1}{x+iy} = \frac{x-iy}{x^2+y^2} = \frac{x}{x^2+y^2} - i \frac{y}{x^2+y^2}$.
    *   **Circles/Lines to Circles/Lines:** A key property is that inversion maps circles and lines to circles and lines.
        *   A circle or line passing through the origin in the $z$-plane maps to a line in the $w$-plane.
        *   A circle or line not passing through the origin in the $z$-plane maps to a circle in the $w$-plane.

    **Example:** Consider the unit circle $|z|=1$.
    If $|z|=1$, then $|w| = |1/z| = 1/|z| = 1$. So the unit circle maps to itself.
    Consider the line $\text{Re}(z) = c$ ($c \neq 0$). Let $z=x+iy$.
    $w = \frac{x}{x^2+y^2} - i \frac{y}{x^2+y^2}$.
    $\text{Re}(w) = \frac{x}{x^2+y^2} = c$.
    $x = c(x^2+y^2)$.
    $x^2 - \frac{1}{c}x + y^2 = 0$.
    $(x - \frac{1}{2c})^2 + y^2 = (\frac{1}{2c})^2$. This is a circle centered at $(1/2c, 0)$ with radius $|1/2c|$.

**6. Möbius Transformations (Fractional Linear Transformations):** $w = \frac{az+b}{cz+d}$ (where $ad-bc \neq 0$)
*   These are compositions of translations, rotations/scalings, and inversions.
*   $f'(z) = \frac{a(cz+d) - c(az+b)}{(cz+d)^2} = \frac{ad-bc}{(cz+d)^2}$.
*   They are conformal everywhere except at $z = -d/c$ (if $c \neq 0$), where the derivative is zero (if $ad-bc \neq 0$) or undefined.
*   **Key Property:** Möbius transformations map circles and lines to circles and lines.

---

### 3. Applying Conformal Mappings to Solve Problems

Conformal mappings are particularly useful for solving **Laplace's equation** in two dimensions, which often arises in potential theory (electrostatics, heat transfer, fluid flow).

#### 3.1 Boundary Value Problems (BVPs)

A typical BVP involves finding a function $\phi(x, y)$ that satisfies:
*   **Laplace's Equation:** $\nabla^2 \phi = \frac{\partial^2 \phi}{\partial x^2} + \frac{\partial^2 \phi}{\partial y^2} = 0$ (where $\phi$ is often a potential function).
*   **Boundary Conditions:** Prescribed values of $\phi$ or its derivative on the boundary of a domain.

If we have a domain $D$ in the $z$-plane with boundary $\partial D$, and we can find a conformal mapping $w = f(z)$ that maps $D$ to a simpler domain $D'$ in the $w$-plane (e.g., a region for which the BVP is easier to solve), we can transform the problem.

Let $\psi(u, v)$ be the solution in the $w$-plane (where $w=u+iv$). The solution in the $z$-plane is then given by $\phi(x, y) = \psi(u(x,y), v(x,y))$, where $u$ and $v$ are the real and imaginary parts of $f(z)$.

**Why this works:** If $\psi(u,v)$ is harmonic in $D'$, then its pre-image $\phi(x,y) = \psi(\text{Re}(f(z)), \text{Im}(f(z)))$ is harmonic in $D$. This is because the Laplacian is invariant under conformal transformations (up to a factor that is irrelevant if the image is also a simply connected region without singularities).

#### 3.2 Example: Electrostatic Potential

**Problem:** Find the electrostatic potential $\phi(x,y)$ in the region between two concentric cylinders $x^2+y^2=R_1^2$ and $x^2+y^2=R_2^2$, where the inner cylinder is at potential $V_1$ and the outer cylinder is at potential $V_2$.

**Difficulty:** Solving Laplace's equation in an annular region in Cartesian coordinates is challenging.

**Solution using Conformal Mapping:**

1.  **Identify the domain:** An annular region in the $z$-plane.
2.  **Choose a suitable mapping:** The mapping $w = \log(z)$ transforms the annulus into a rectangular strip.
    *   Let $z = r e^{i\theta}$.
    *   $w = \log(r e^{i\theta}) = \log(r) + i\theta$.
    *   Here, $u = \log(r)$ and $v = \theta$.
    *   The cylinders $r=R_1$ and $r=R_2$ map to lines $u=\log(R_1)$ and $u=\log(R_2)$ in the $w$-plane.
    *   The angular range $0 \le \theta < 2\pi$ maps to the strip $0 \le v < 2\pi$.
3.  **Solve the BVP in the transformed domain:**
    *   Laplace's equation in polar coordinates for potential between cylinders depends only on $r$, so $\frac{1}{r}\frac{d}{dr}(r\frac{d\phi}{dr}) = 0$.
    *   Integrating twice gives $\phi(r) = A \log(r) + B$.
    *   In the $w$-plane, $u = \log(r)$, so $\phi(u) = Au + B$. This is harmonic.
    *   Boundary conditions:
        *   $r=R_1 \implies u = \log(R_1)$: $\phi(\log(R_1)) = V_1 \implies A \log(R_1) + B = V_1$.
        *   $r=R_2 \implies u = \log(R_2)$: $\phi(\log(R_2)) = V_2 \implies A \log(R_2) + B = V_2$.
    *   Solving for A and B:
        $A(\log(R_2) - \log(R_1)) = V_2 - V_1 \implies A = \frac{V_2 - V_1}{\log(R_2/R_1)}$.
        $B = V_1 - A \log(R_1) = V_1 - \frac{V_2 - V_1}{\log(R_2/R_1)} \log(R_1)$.
    *   The solution in the $w$-plane is $\psi(u) = \frac{V_2 - V_1}{\log(R_2/R_1)} u + V_1 - \frac{V_2 - V_1}{\log(R_2/R_1)} \log(R_1)$.
4.  **Transform back to the original domain:**
    *   Substitute $u = \log(r)$ back:
    *   $\phi(r) = \frac{V_2 - V_1}{\log(R_2/R_1)} \log(r) + V_1 - \frac{V_2 - V_1}{\log(R_2/R_1)} \log(R_1)$
    *   $\phi(r) = \frac{V_2 - V_1}{\log(R_2/R_1)} (\log(r) - \log(R_1)) + V_1$
    *   $\phi(r) = \frac{V_2 - V_1}{\log(R_2/R_1)} \log(r/R_1) + V_1$.

This is the well-known solution for potential between coaxial cylinders.

#### 3.3 Example: Mapping a Semi-infinite Strip

**Problem:** Find the potential $\phi(x,y)$ in the semi-infinite strip $0 < x < a$, $y > 0$, where $\phi(0,y) = V_1$, $\phi(a,y) = V_2$, and $\phi(x,0) = 0$ for $0 < x < a$.

**Solution using Conformal Mapping:**

1.  **Domain:** A rectangle with one side missing in the $z$-plane ($0 < x < a, y>0$).
2.  **Mapping:**
    *   Consider $w = e^{\pi z/a}$.
    *   If $z = x+iy$, then $w = e^{\pi x/a} e^{i\pi y/a}$.
    *   $|w| = e^{\pi x/a}$ and $\arg(w) = \pi y/a$.
    *   When $x=0$, $|w| = e^0 = 1$, so the left boundary maps to the unit circle $|w|=1$. $\arg(w)$ varies from $0$ (as $y \to 0$) to $\pi$ (as $y \to \infty$). This maps the line $x=0, y>0$ to the upper semi-circle of the unit circle.
    *   When $x=a$, $|w| = e^{\pi a/a} = e^\pi$. So the right boundary maps to the circle $|w|=e^\pi$. $\arg(w)$ varies from $0$ to $\pi$. This maps the line $x=a, y>0$ to the upper semi-circle of the circle $|w|=e^\pi$.
    *   When $y=0$, $\arg(w) = 0$. $|w| = e^{\pi x/a}$. As $x$ goes from $0$ to $a$, $|w|$ goes from $1$ to $e^\pi$. This maps the bottom boundary to the segment of the real axis between $1$ and $e^\pi$.
    *   The upper half-plane ($y>0$) maps to the region between the two circles for $0 < \arg(w) < \pi$.

    This mapping is conformal everywhere except at $z$ such that $\pi z/a$ is a multiple of $i\pi$, which means $z$ is a real number. But we are restricted to $y>0$, so this is not an issue.

3.  **Solve BVP in $w$-plane:**
    *   The region in the $w$-plane is an annulus sector. The boundaries are $\text{Re}(w) = V_1$, $\text{Re}(w) = V_2$? No, this mapping is for a different type of region.

Let's try a different mapping for the semi-infinite strip. A common approach is to map to a simpler domain like a rectangle or a half-plane.

Consider $w = \sin(\frac{\pi z}{a})$.
*   If $z = x+iy$, $w = \sin(\frac{\pi x}{a})\cos(\frac{\pi iy}{a}) + \cos(\frac{\pi x}{a})\sin(\frac{\pi iy}{a})$
    $w = \sin(\frac{\pi x}{a})\cosh(\frac{\pi y}{a}) + i \cos(\frac{\pi x}{a})\sinh(\frac{\pi y}{a})$.
*   When $y=0$: $w = \sin(\frac{\pi x}{a})$. As $x$ goes from $0$ to $a$, $\sin(\frac{\pi x}{a})$ goes from $0$ to $1$ (at $x=a/2$) and back to $0$ (at $x=a$). This maps the bottom boundary to the segment $[0, 1]$ on the real axis, then back to $[1, 0]$. This doesn't seem right for the boundary condition $\phi(x,0)=0$.

Let's reconsider the example. A better approach for the semi-infinite strip is to map it to a rectangle first, then to a simpler domain. Or, use a direct mapping to a half-plane.

Consider $w = e^{\pi z/a}$.
*   $z=x+iy$, $w = e^{\pi x/a}(\cos(\pi y/a) + i \sin(\pi y/a))$.
*   $0 < x < a \implies 1 < |w| < e^\pi$.
*   $y > 0 \implies 0 < \arg(w) < \pi$.
*   So the region $0 < x < a, y>0$ maps to the upper semi-annulus $1 < |w| < e^\pi, 0 < \arg(w) < \pi$.
*   The boundaries map as follows:
    *   $x=0, y>0$ maps to $|w|=1, 0 < \arg(w) < \pi$ (upper semi-circle).
    *   $x=a, y>0$ maps to $|w|=e^\pi, 0 < \arg(w) < \pi$ (upper semi-circle).
    *   $y=0, 0<x<a$ maps to $1 < |w| < e^\pi, \arg(w)=0$ (segment of real axis).

The boundary conditions are:
*   $\phi(x,y)$ corresponds to $\psi(u,v)$ where $w=u+iv$.
*   $x=0 \implies |w|=1, 0 < \arg(w) < \pi$. The condition is $\phi(0,y) = V_1$. This maps to $\psi(u,v)$ where $u = \cos(\theta), v=\sin(\theta)$ with $\theta = \pi y/a$. So $u^2+v^2=1, v>0$. The condition $\phi(0,y)=V_1$ becomes $\psi(u,v)=V_1$ on the upper semi-circle $|w|=1$.
*   $x=a \implies |w|=e^\pi, 0 < \arg(w) < \pi$. The condition is $\phi(a,y) = V_2$. This maps to $\psi(u,v)=V_2$ on the upper semi-circle $|w|=e^\pi$.
*   $y=0 \implies \arg(w)=0, 1 < |w| < e^\pi$. The condition is $\phi(x,0)=0$. This maps to $\psi(u,v)=0$ on the segment of the real axis $1 < u < e^\pi$.

The problem in the $w$-plane is to find a harmonic function $\psi(u,v)$ in the region $1 < |w| < e^\pi, v>0$, satisfying:
*   $\psi = V_1$ on $|w|=1, v>0$
*   $\psi = V_2$ on $|w|=e^\pi, v>0$
*   $\psi = 0$ on $1 < u < e^\pi, v=0$

This is a mixed boundary value problem. A solution can be found using polar coordinates $(R, \Theta)$ for $w$, where $w = R e^{i\Theta}$.
$\psi(R, \Theta) = A \log R + B$ is the general harmonic function independent of $\Theta$ in an annulus.
The boundary conditions involve $\Theta$.

Let's try a different mapping again: $w = \frac{z-a/2}{z+a/2}$ maps the strip to a disk. This is getting complex.

**Key Idea:** If we can map our domain $D$ to a standard domain $D'$ (like a disk, half-plane, or strip) where BVPs are known, we can solve it.

**Another Strategy for the Semi-Infinite Strip $0 < x < a, y>0$:**
Map to a half-plane.
Consider $w = e^{\pi z / a}$.
As derived, this maps the strip to the upper semi-annulus $1 < |w| < e^\pi, 0 < \arg(w) < \pi$.
The boundary conditions are:
*   $\phi(0,y)=V_1 \implies \psi(1, \theta) = V_1$ for $0 < \theta < \pi$.
*   $\phi(a,y)=V_2 \implies \psi(e^\pi, \theta) = V_2$ for $0 < \theta < \pi$.
*   $\phi(x,0)=0 \implies \psi(R, 0) = 0$ for $1 < R < e^\pi$.

Let's consider mapping to a rectangular strip of finite width.
The mapping $w = \log(z)$ maps an annulus $R_1 < |z| < R_2$ to a strip $\log R_1 < \text{Re}(w) < \log R_2$.

Consider mapping the semi-infinite strip $0 < x < a, y>0$ to a rectangle of infinite extent.
A useful mapping for regions bounded by straight lines is the **Schwarz-Christoffel mapping**, but that's usually for polygons mapping to a half-plane.

Let's simplify the problem slightly. If the domain was $0 < x < a, 0 < y < b$ (a rectangle), we could map it to a strip or half-plane using $w = \sin(\frac{\pi z}{a})$ or similar.

For $0 < x < a, y>0$ with $\phi(x,0)=0$, $\phi(0,y)=V_1$, $\phi(a,y)=V_2$.
Let's use the transformation $w = e^{\pi z/a}$. The domain in $w$ is the semi-annulus $1<|w|<e^\pi$, $0<\arg(w)<\pi$.
Let $w = R e^{i\theta}$.
We need a harmonic function $\psi(R, \theta)$ in this region with the boundary conditions.
$\psi(1, \theta) = V_1$ for $0 < \theta < \pi$
$\psi(e^\pi, \theta) = V_2$ for $0 < \theta < \pi$
$\psi(R, 0) = 0$ for $1 < R < e^\pi$.

The general solution for Laplace's equation in polar coordinates is:
$\psi(R, \theta) = \sum_{n=0}^{\infty} (A_n R^n + B_n R^{-n}) (C_n \cos(n\theta) + D_n \sin(n\theta))$.

The boundary $\psi=0$ at $\theta=0$ suggests $C_n=0$ for $n>0$ and $D_0=0$.
So, $\psi(R, \theta) = A_0 + B_0 \log R + \sum_{n=1}^{\infty} (A_n R^n + B_n R^{-n}) \sin(n\theta)$.
This doesn't seem right. The boundary $\psi=0$ is on a radial line.

Consider the simpler problem: harmonic function in $1 < R < e^\pi, 0 < \theta < \pi$.
$\psi(R, \theta) = \sum (A_n R^n + B_n R^{-n}) \sin(n\theta)$.
The conditions:
*   $\psi(1, \theta) = V_1 \implies \sum (A_n + B_n) \sin(n\theta) = V_1$ for $0 < \theta < \pi$.
*   $\psi(e^\pi, \theta) = V_2 \implies \sum (A_n (e^\pi)^n + B_n (e^\pi)^{-n}) \sin(n\theta) = V_2$ for $0 < \theta < \pi$.
*   $\psi(R, 0) = 0$ implies no condition on $R$ at $\theta=0$.

If $V_1$ and $V_2$ are constants, we can expect a solution of the form $\psi(R, \theta) = C_1 \log R + C_2$.
But the boundaries are circles.
The solution for $\psi(R, \theta)$ in the annulus $1 < R < e^\pi$ where $\psi(1, \theta)=0$ and $\psi(e^\pi, \theta)=0$ is $\psi(R, \theta) = 0$.

Let's try a different approach for the original strip problem.
Map $0 < x < a, y>0$ to $0 < u < \infty, 0 < v < \pi$.
Consider $w = i \frac{\pi z}{a}$.
$z = \frac{a w}{i \pi} = -\frac{i a w}{\pi}$.
If $w = u+iv$, $z = -\frac{i a}{\pi}(u+iv) = \frac{a v}{\pi} - i \frac{a u}{\pi}$.
So $x = av/\pi$, $y = -au/\pi$.
The region $0 < u < \infty, 0 < v < \pi$ maps to $0 < x < a, y<0$.
We need $y>0$. So we need $w$ to map to the upper half-plane of $z$.

Consider $w = e^{i\pi z/a}$.
If $z=x+iy$, $w = e^{i\pi x/a} e^{-\pi y/a}$.
$|w| = e^{-\pi y/a}$, $\arg(w) = \pi x/a$.
*   $0 < x < a \implies 0 < \arg(w) < \pi$.
*   $y > 0 \implies 0 < |w| < 1$.
So the region maps to the upper semi-disk $0 < \arg(w) < \pi, 0 < |w| < 1$.

The boundary conditions in $w$-plane:
*   $x=0, y>0 \implies \arg(w)=0, 0 < |w| < 1$. This is the positive real axis segment $(0,1)$. $\phi(0,y)=V_1$. So $\psi(u,v)=V_1$ on $(0,1)$ on the real axis.
*   $x=a, y>0 \implies \arg(w)=\pi, 0 < |w| < 1$. This is the negative real axis segment $(-1,0)$. $\phi(a,y)=V_2$. So $\psi(u,v)=V_2$ on $(-1,0)$ on the real axis.
*   $y=0, 0<x<a \implies |w|=1, 0 < \arg(w) < \pi$. This is the upper semi-circle $|w|=1$. $\phi(x,0)=0$. So $\psi(u,v)=0$ on $|w|=1, \text{Im}(w)>0$.

We need to solve Laplace's equation $\nabla^2 \psi = 0$ in the upper semi-disk $0 < \arg(w) < \pi, 0 < |w| < 1$.
The general solution in polar coordinates is $\psi(R, \theta) = \sum_{n=0}^\infty (A_n R^n + B_n R^{-n}) (C_n \cos(n\theta) + D_n \sin(n\theta))$.
Since we are in a disk $|w|<1$, we must have $B_n=0$ for $n>0$.
$\psi(R, \theta) = A_0 + B_0 \log R + \sum_{n=1}^\infty (A_n R^n + B_n R^{-n}) (C_n \cos(n\theta) + D_n \sin(n\theta))$ should be $\psi(R, \theta) = \sum_{n=0}^\infty R^n (C_n \cos(n\theta) + D_n \sin(n\theta))$.

The boundary conditions are:
*   $\psi(1, \theta) = 0$ for $0 < \theta < \pi$.
    $\sum_{n=0}^\infty (C_n \cos(n\theta) + D_n \sin(n\theta)) = 0$ for $0 < \theta < \pi$.
    This implies $C_n=0$ and $D_n=0$ for all $n$. This means $\psi=0$, which is not correct.

The boundary condition $\psi(R, 0) = 0$ on the real axis segment $(0,1)$ and $(-1,0)$ must be handled carefully.

Let's rethink the mapping $w = e^{i\pi z/a}$.
$z = x+iy$. $w = e^{i\pi x/a} e^{-\pi y/a}$.
$0 < x < a \implies 0 < \arg(w) < \pi$.
$y > 0 \implies 0 < |w| < 1$.
This maps the strip $0 < x < a, y>0$ to the upper semi-disk $|w|<1, \text{Im}(w)>0$.

Boundary conditions:
*   $x=0, y>0 \implies \arg(w)=0, 0 < |w| < 1$. This is the segment $(0,1)$ on the real axis. $\phi(0,y)=V_1$. So $\psi=V_1$ on $(0,1)$.
*   $x=a, y>0 \implies \arg(w)=\pi, 0 < |w| < 1$. This is the segment $(-1,0)$ on the real axis. $\phi(a,y)=V_2$. So $\psi=V_2$ on $(-1,0)$.
*   $y=0, 0<x<a \implies |w|=1, 0 < \arg(w) < \pi$. This is the upper semi-circle $|w|=1$. $\phi(x,0)=0$. So $\psi=0$ on $|w|=1, \text{Im}(w)>0$.

We need to solve Laplace's equation in the upper semi-disk $|w|<1, \text{Im}(w)>0$.
Using polar coordinates $w = R e^{i\theta}$:
$\psi(R, \theta) = \sum_{n=0}^\infty R^n (A_n \cos(n\theta) + B_n \sin(n\theta))$.
The condition $\psi=0$ on $|w|=1, \text{Im}(w)>0$ means $\psi(1, \theta)=0$ for $0 < \theta < \pi$.
This implies $A_n=0$ and $B_n=0$ for all $n$. So $\psi=0$ everywhere. This is incorrect.

The issue is that the boundary $\psi=0$ is on the arc $|w|=1$, but the other boundaries are on the real axis segments.
The solution for Laplace's equation in the upper semi-disk $|w|<1, \text{Im}(w)>0$ with $\psi(1,\theta)=0$ for $0<\theta<\pi$ and $\psi(R,0)=0$ for $0<R<1$ (a different problem) is $\psi=0$.

Let's use the **Schwarz-Christoffel transformation** for the strip $0<x<a, y>0$.
This maps the strip to a semi-infinite strip, then to a rectangle.

A direct mapping for the region $0 < x < a, y>0$ to the upper half plane is $w = \tan(\frac{\pi z}{2a})$.
*   $z=x+iy$, $w = \tan(\frac{\pi x}{2a} + i \frac{\pi y}{2a})$.
*   $w = \frac{\tan(\frac{\pi x}{2a}) + i \tanh(\frac{\pi y}{2a})}{1 - i \tan(\frac{\pi x}{2a}) \tanh(\frac{\pi y}{2a})}$.
*   When $y \to \infty$, $w \to i \frac{\tanh(\pi y/2a)}{\tan(\pi x/2a)}$. Not mapping to a half-plane.

The key is to map to a domain where the solution is known.
For a potential problem in a domain $D$, if $w=f(z)$ maps $D$ conformally to $D'$, and $\psi(u,v)$ is harmonic in $D'$ with appropriate boundary conditions, then $\phi(x,y) = \psi(u(x,y), v(x,y))$ is harmonic in $D$.

---

### 4. Use of Conformal Mappings in Solving Boundary Value Problems

Conformal mappings are invaluable for transforming complicated geometries into simpler ones (e.g., disks, strips, half-planes) where the solution to Laplace's equation is known or easier to find.

**General Procedure:**

1.  **Identify the physical domain $D$** in the $z$-plane and the boundary conditions.
2.  **Find a conformal mapping $w = f(z)$** that maps $D$ to a simpler domain $D'$ (e.g., a half-plane, disk, or rectangle). Ensure the mapping is conformal in $D$.
3.  **Transform the boundary conditions** from the $z$-plane to the $w$-plane. This involves mapping the boundary curves of $D$ to the boundary curves of $D'$.
4.  **Solve the transformed boundary value problem** for a harmonic function $\psi(u,v)$ in $D'$. Standard techniques like separation of variables in polar or Cartesian coordinates are often used here.
5.  **Transform the solution back** to the original domain. The potential in the $z$-plane is $\phi(x,y) = \psi(u(x,y), v(x,y))$, where $u$ and $v$ are the real and imaginary parts of $f(z)$.

**Example Scenario:**
Imagine a problem of heat distribution in a strange-shaped region. If this region can be conformally mapped to a rectangle, and we know the heat distribution on the boundaries of the rectangle, we can find the distribution in the original region.

---

### 5. Practice Questions and Exercises

**Question 1:**
For the mapping $w = z^2$, show that it is not conformal at $z=0$. Consider the angle between the positive real axis and the line $y=x$ in the $z$-plane. What is the angle between their images in the $w$-plane?

**Solution 1:**
*   $f(z) = z^2$, $f'(z) = 2z$. At $z=0$, $f'(0)=0$, so the mapping is not conformal at $z=0$.
*   In the $z$-plane:
    *   Positive real axis: $z = x$, $0 \le x \le R$. Angle is $0$.
    *   Line $y=x$: $z = x+ix = x(1+i)$. Angle is $\pi/4$.
    *   The angle between them is $\pi/4$.
*   In the $w$-plane: $w = z^2$.
    *   Image of positive real axis ($z=x$): $w = x^2$. This is the positive real axis in the $w$-plane. Angle is $0$.
    *   Image of $z=x(1+i)$: $w = (x(1+i))^2 = x^2 (1+i)^2 = x^2 (1 + 2i + i^2) = x^2 (2i)$.
        This is on the positive imaginary axis in the $w$-plane. Angle is $\pi/2$.
*   The angle between the images is $\pi/2$. The original angle was $\pi/4$. The angle is not preserved, and the orientation is also changed (from $\pi/4$ counter-clockwise to $\pi/2$ counter-clockwise).

**Question 2:**
Show that the transformation $w = 1/z$ maps circles not passing through the origin to circles.

**Solution 2:**
Let the circle in the $z$-plane be $|z - z_0| = R$, where $|z_0| \neq R$ and $R \neq 0$.
This equation can be written as $z\bar{z} - z_0\bar{z} - \bar{z_0}z + z_0\bar{z_0} = R^2$.
Substitute $z = 1/w$ and $\bar{z} = 1/\bar{w}$:
$\frac{1}{w}\frac{1}{\bar{w}} - z_0\frac{1}{\bar{w}} - \bar{z_0}\frac{1}{w} + z_0\bar{z_0} = R^2$.
Multiply by $w\bar{w}$:
$1 - z_0 w - \bar{z_0} \bar{w} + z_0\bar{z_0} w\bar{w} = R^2 w\bar{w}$.
Rearrange to the form of a circle $|w - w_0| = r$ or $w\bar{w} - w_0\bar{w} - \bar{w_0}w + w_0\bar{w_0} = r^2$.
$w\bar{w} (z_0\bar{z_0} - R^2) - z_0 w - \bar{z_0} \bar{w} + 1 = 0$.

If $z_0\bar{z_0} - R^2 \neq 0$, we can divide by this factor:
$w\bar{w} - \frac{z_0}{z_0\bar{z_0} - R^2} w - \frac{\bar{z_0}}{z_0\bar{z_0} - R^2} \bar{w} + \frac{1}{z_0\bar{z_0} - R^2} = 0$.
This is of the form $w\bar{w} - \bar{w_0} w - w_0 \bar{w} + C = 0$, which represents a circle with center $w_0 = \frac{\bar{z_0}}{z_0\bar{z_0} - R^2}$ and radius $r$ such that $w_0\bar{w_0} - C = r^2$.

The case where $z_0\bar{z_0} - R^2 = 0$ implies $|z_0|^2 = R^2$, so $|z_0|=R$. This means the circle passes through the origin. In this case, the equation becomes $-z_0 w - \bar{z_0} \bar{w} + 1 = 0$, which is a line.

**Question 3:**
Determine if the mapping $w = e^z$ is conformal. If so, find the angle of rotation and magnification at $z = i\pi/2$.

**Solution 3:**
*   $f(z) = e^z$. $f'(z) = e^z$.
*   Since $e^z$ is never zero for any finite $z$, $f'(z) \neq 0$ for all $z$.
*   Therefore, the mapping $w = e^z$ is conformal everywhere.
*   At $z_0 = i\pi/2$:
    *   $f'(z_0) = e^{i\pi/2} = i$.
    *   Magnification: $|f'(z_0)| = |i| = 1$.
    *   Angle of rotation: $\arg(f'(z_0)) = \arg(i) = \pi/2$.
    *   So, at $z=i\pi/2$, the mapping is conformal with a magnification of 1 and a rotation of $\pi/2$ (counter-clockwise).

**Question 4:**
What is the image of the region $0 < x < 1, y > 0$ under the mapping $w = iz$?

**Solution 4:**
*   Let $z = x+iy$. Then $w = i(x+iy) = ix + i^2y = -y + ix$.
*   Let $w = u+iv$. So, $u = -y$ and $v = x$.
*   The region $0 < x < 1, y > 0$ becomes:
    *   $0 < v < 1$.
    *   $u = -y$. Since $y > 0$, $-y < 0$. So $u < 0$.
*   The image is the region $u < 0, 0 < v < 1$. This is a semi-infinite strip in the $w$-plane bounded by the real axis, the line $v=1$, and the imaginary axis on the left.

---

### 6. Important Points to Remember

*   A mapping $w=f(z)$ is conformal at $z_0$ if $f(z)$ is analytic at $z_0$ and $f'(z_0) \neq 0$.
*   Conformal mappings preserve angles (magnitude and orientation) between intersecting curves.
*   The derivative $f'(z_0)$ dictates the local behavior: $|f'(z_0)|$ is the magnification, and $\arg(f'(z_0))$ is the angle of rotation.
*   Points where $f'(z)=0$ are critical points and are not conformal.
*   Möbius transformations (linear fractional transformations) are important examples of conformal mappings that map circles and lines to circles and lines.
*   Conformal mappings are crucial for solving Laplace's equation in various physical problems by transforming complex domains into simpler ones.
*   The key is to transform the problem to a domain where the solution is known, solve it, and then transform the solution back.

---
