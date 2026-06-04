---
title: "Stokes theorem (without proof)"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 2"
module: "Module 4: Green’s theorem (for simply connected domains, without proof) 
and applications to evaluating line integrals"
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912ce5"
status: "completed"
scrapedAt: "2026-05-20T18:37:09.357Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 2
## Module 4: Green’s Theorem and Applications to Evaluating Line Integrals

### Topic: Stokes’ Theorem (without proof)

Welcome, everyone! In our journey through multivariable calculus, we've explored how line integrals can help us understand things like the work done by a force along a path or the circulation of a fluid. We've seen Green's Theorem, which beautifully links a line integral around a closed curve in a plane to a double integral over the region it encloses. Now, we're going to elevate our thinking from 2D to 3D. Today, we introduce **Stokes' Theorem**.

Stokes' Theorem is a powerful generalization of Green's Theorem. If Green's Theorem deals with a planar region and its boundary curve, Stokes' Theorem deals with a **surface** and its **boundary curve** in three-dimensional space. Think of it as a way to relate something happening *on* a surface to something happening *around* the edge of that surface. This is incredibly useful in many areas of physics and engineering, especially in electromagnetism and fluid dynamics.

### Connecting to Our Course Objectives

Before we dive deep, let's quickly see how Stokes' Theorem aligns with our course outcomes.

*   **CO1 (Derivatives and Minima/Maxima):** While not directly about optimization, understanding the curl of a vector field, which is central to Stokes' Theorem, involves partial derivatives. The curl is essentially a measure of the infinitesimal "rotation" of the vector field.
*   **CO2 (Multiple Integrals for Areas/Volumes):** Stokes' Theorem transforms a line integral into a surface integral. So, it directly connects line integrals with surface integrals, a key concept for CO4.
*   **CO3 (Derivatives and Line Integrals of Vector Functions):** This is where Stokes' Theorem shines brightest! It provides a fundamental link between the line integral of a vector field along a curve and the surface integral of the curl of that field over any surface bounded by that curve. This is a direct application of understanding line integrals.
*   **CO4 (Surface and Volume Integrals):** Stokes' Theorem is a cornerstone that relates surface integrals to line integrals. Understanding this connection is vital for appreciating the power of surface integrals in describing phenomena like flux.

So, as we learn Stokes' Theorem, we're reinforcing our understanding of vector calculus, particularly line and surface integrals, and how their derivatives (in the form of curl) connect them.

### What is Stokes’ Theorem? The Big Picture

In essence, Stokes' Theorem states that the line integral of a vector field $\mathbf{F}$ around a closed curve $C$ is equal to the surface integral of the **curl** of $\mathbf{F}$ over any surface $S$ whose boundary is $C$.

Let's write that down formally. If $C$ is a piecewise smooth, simple, closed curve, oriented counterclockwise when viewed from above, and $S$ is an orientable surface bounded by $C$, with the orientation of $S$ consistent with the orientation of $C$ (think of the "right-hand rule"), then:

$$ \oint_C \mathbf{F} \cdot d\mathbf{r} = \iint_S (\nabla \times \mathbf{F}) \cdot d\mathbf{S} $$

Let's break down the components of this crucial equation.

#### Understanding the Components

1.  **The Vector Field $\mathbf{F}$**: This is the function we are integrating. In physics, it could represent a force, an electric field, a magnetic field, or a fluid velocity. For example, if $\mathbf{F}$ is a force field, the left side ($\oint_C \mathbf{F} \cdot d\mathbf{r}$) represents the **work done** by the force field as an object moves along the curve $C$.

2.  **The Curve $C$**: This is a one-dimensional path, typically closed, in 3D space. Its orientation matters – it needs to be traversed in a specific direction.

3.  **The Line Integral $\oint_C \mathbf{F} \cdot d\mathbf{r}$**: This measures how much the vector field $\mathbf{F}$ "aligns" with the direction of motion along the curve $C$. It sums up the tangential component of $\mathbf{F}$ along $C$.

4.  **The Curl of $\mathbf{F}$, denoted by $\nabla \times \mathbf{F}$**: This is a new concept for us, but it's central to Stokes' Theorem.
    *   Remember $\nabla$ (del) from our work with gradients? $\nabla = \frac{\partial}{\partial x}\mathbf{i} + \frac{\partial}{\partial y}\mathbf{j} + \frac{\partial}{\partial z}\mathbf{k}$.
    *   The **curl** is a vector operation. If $\mathbf{F}(x, y, z) = P(x, y, z)\mathbf{i} + Q(x, y, z)\mathbf{j} + R(x, y, z)\mathbf{k}$, then the curl is calculated as:
        $$ \nabla \times \mathbf{F} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ P & Q & R \end{vmatrix} = \left(\frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z}\right)\mathbf{i} + \left(\frac{\partial P}{\partial z} - \frac{\partial R}{\partial x}\right)\mathbf{j} + \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right)\mathbf{k} $$
    *   What does the curl *mean* intuitively? Imagine placing a small paddlewheel in a fluid flow represented by $\mathbf{F}$. The curl measures the tendency of the fluid to make that paddlewheel spin. A larger curl means more "rotational" motion in the field. If the curl is zero everywhere, the field is called **irrotational**.

5.  **The Surface $S$**: This is a 2D "sheet" in 3D space. It must be orientable, meaning we can consistently define an "up" or "down" side (or "inside" or "outside" of a normal vector). The surface has a boundary, which is our curve $C$.

6.  **The Surface Integral $\iint_S (\nabla \times \mathbf{F}) \cdot d\mathbf{S}$**: This integral sums up the component of the curl of $\mathbf{F}$ that is *normal* to the surface $S$, over the entire surface. $d\mathbf{S}$ is a vector element of surface area, pointing in the direction of the surface's normal vector.

#### The "Orientation" Rule – Crucial for Stokes' Theorem

The phrase "orientation consistent with the orientation of $C$" is vital. Think of it like this: if you're walking along curve $C$ in its specified direction, the surface $S$ should always be on your "left-hand side". Alternatively, if you curl the fingers of your right hand in the direction of $C$, your thumb points in the direction of the surface's normal vector, $\mathbf{n}$. This ensures the line integral and surface integral are measuring related quantities in a consistent way.

**Analogy:** Imagine a river (the vector field $\mathbf{F}$) flowing around a circular island (the surface $S$). The boundary of the island is a circular path (curve $C$). The line integral $\oint_C \mathbf{F} \cdot d\mathbf{r}$ measures the total "swirl" of the river water as you paddle around the island's edge. The curl of $\mathbf{F}$, $(\nabla \times \mathbf{F})$, measures the local spinning tendency of the water at any point on the island's surface. The surface integral $\iint_S (\nabla \times \mathbf{F}) \cdot d\mathbf{S}$ sums up the "spinning action" across the entire surface of the island. Stokes' Theorem says these two quantities are equal!

### Why is Stokes’ Theorem So Useful? Evaluating Line Integrals!

The primary application of Stokes' Theorem, as stated in our module description, is to **evaluate line integrals**. Sometimes, calculating a line integral directly can be very tedious. $\oint_C \mathbf{F} \cdot d\mathbf{r}$ often involves parameterizing the curve $C$, which can be complicated.

Stokes' Theorem offers an alternative: if we can find a surface $S$ bounded by $C$ such that the surface integral $\iint_S (\nabla \times \mathbf{F}) \cdot d\mathbf{S}$ is easier to compute, we can use that instead. This often happens when the surface $S$ is a simple geometric shape like a plane, a paraboloid, or a sphere.

**Think about it:**
*   A line integral $\oint_C \mathbf{F} \cdot d\mathbf{r}$ is a 1D integral.
*   A surface integral $\iint_S (\nabla \times \mathbf{F}) \cdot d\mathbf{S}$ is a 2D integral.

Often, evaluating a 2D integral over a "nice" surface is computationally easier than a 1D integral around a potentially complex curve. This is the essence of why these "fundamental theorems" of calculus (like the Fundamental Theorem of Calculus itself, Green's Theorem, Divergence Theorem, and Stokes' Theorem) are so powerful – they relate integrals of different dimensions, often simplifying calculations.

### Examples to Solidify Understanding

Let’s work through a couple of examples to see how this works in practice.

#### Example 1: Evaluating a Line Integral Using Stokes' Theorem

**Problem:** Evaluate the line integral $\oint_C \mathbf{F} \cdot d\mathbf{r}$, where $\mathbf{F}(x, y, z) = \langle -y^2, x^2, xz \rangle$ and $C$ is the boundary of the part of the paraboloid $z = 1 - x^2 - y^2$ that lies above the $xy$-plane ($z \ge 0$). The curve $C$ is oriented counterclockwise when viewed from above.

**Solution Strategy:**
Directly parameterizing $C$ (which is the circle $x^2 + y^2 = 1$ in the $xy$-plane) and then integrating $\mathbf{F}$ might be feasible but let's try Stokes' Theorem. We need to calculate $\iint_S (\nabla \times \mathbf{F}) \cdot d\mathbf{S}$ over the surface $S$ defined by $z = 1 - x^2 - y^2$ for $0 \le z \le 1$.

**Step 1: Calculate the Curl of $\mathbf{F}$**
Let $\mathbf{F}(x, y, z) = P\mathbf{i} + Q\mathbf{j} + R\mathbf{k} = -y^2\mathbf{i} + x^2\mathbf{j} + xz\mathbf{k}$.
$P = -y^2$, $Q = x^2$, $R = xz$.

$$ \nabla \times \mathbf{F} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ -y^2 & x^2 & xz \end{vmatrix} $$
$$ = \left(\frac{\partial(xz)}{\partial y} - \frac{\partial(x^2)}{\partial z}\right)\mathbf{i} - \left(\frac{\partial(xz)}{\partial x} - \frac{\partial(-y^2)}{\partial z}\right)\mathbf{j} + \left(\frac{\partial(x^2)}{\partial x} - \frac{\partial(-y^2)}{\partial y}\right)\mathbf{k} $$
$$ = (0 - 0)\mathbf{i} - (z - 0)\mathbf{j} + (2x - (-2y))\mathbf{k} $$
$$ \nabla \times \mathbf{F} = 0\mathbf{i} - z\mathbf{j} + (2x + 2y)\mathbf{k} = \langle 0, -z, 2x+2y \rangle $$

**Step 2: Set up the Surface Integral**
The surface $S$ is given by $z = g(x, y) = 1 - x^2 - y^2$. The boundary curve $C$ is where $z=0$, so $1 - x^2 - y^2 = 0$, which means $x^2 + y^2 = 1$. This is the unit circle in the $xy$-plane. The region $D$ in the $xy$-plane over which we integrate is the disk $x^2 + y^2 \le 1$.

The surface integral formula when $z = g(x, y)$ is:
$$ \iint_S (\nabla \times \mathbf{F}) \cdot d\mathbf{S} = \iint_D \left[ -P_g \frac{\partial R}{\partial x} - P_g \frac{\partial R}{\partial y} + \frac{\partial R}{\partial z} \right] dA $$
where $\mathbf{F} = \langle P, Q, R \rangle$, and $P_g = -(\frac{\partial z}{\partial x}) = -(-2x) = 2x$, $Q_g = -(\frac{\partial z}{\partial y}) = -(-2y) = 2y$.
However, a more general formula for $z=g(x,y)$ is:
$$ \iint_S (\nabla \times \mathbf{F}) \cdot d\mathbf{S} = \iint_D \left( (-P) \frac{\partial z}{\partial x} + (-Q) \frac{\partial z}{\partial y} + R \right) dA $$
Let's re-evaluate the surface integral $\iint_S (\nabla \times \mathbf{F}) \cdot d\mathbf{S}$. The vector $d\mathbf{S}$ for a surface $z=g(x,y)$ is given by $(-\frac{\partial z}{\partial x}\mathbf{i} - \frac{\partial z}{\partial y}\mathbf{j} + \mathbf{k}) dA$.
So, $(\nabla \times \mathbf{F}) \cdot d\mathbf{S} = \langle 0, -z, 2x+2y \rangle \cdot \langle -\frac{\partial z}{\partial x}, -\frac{\partial z}{\partial y}, 1 \rangle dA$.
Here, $\frac{\partial z}{\partial x} = -2x$ and $\frac{\partial z}{\partial y} = -2y$.
$$ (\nabla \times \mathbf{F}) \cdot d\mathbf{S} = (0)(-2x) + (-z)(-2y) + (2x+2y)(1) dA $$
$$ = 2yz + 2x + 2y \, dA $$

Now, substitute $z = 1 - x^2 - y^2$ into this expression:
$$ (2y(1-x^2-y^2) + 2x + 2y) dA = (2y - 2x^2y - 2y^3 + 2x + 2y) dA $$
$$ = (4y + 2x - 2x^2y - 2y^3) dA $$

**Step 3: Evaluate the Double Integral over the Disk D**
The region $D$ is the unit disk $x^2 + y^2 \le 1$. This is a perfect candidate for polar coordinates.
Let $x = r \cos \theta$ and $y = r \sin \theta$. Then $dA = r dr d\theta$. The limits for $r$ are $0$ to $1$, and for $\theta$ are $0$ to $2\pi$.

The integrand becomes:
$$ 4(r \sin \theta) + 2(r \cos \theta) - 2(r \cos \theta)^2 (r \sin \theta) - 2(r \sin \theta)^3 $$
$$ = 4r \sin \theta + 2r \cos \theta - 2r^3 \cos^2 \theta \sin \theta - 2r^3 \sin^3 \theta $$
$$ = 4r \sin \theta + 2r \cos \theta - 2r^3 \sin \theta (\cos^2 \theta + \sin^2 \theta) $$
$$ = 4r \sin \theta + 2r \cos \theta - 2r^3 \sin \theta $$

Now, integrate:
$$ \iint_D (4y + 2x - 2x^2y - 2y^3) dA = \int_0^{2\pi} \int_0^1 (4r \sin \theta + 2r \cos \theta - 2r^3 \sin \theta) r dr d\theta $$
$$ = \int_0^{2\pi} \int_0^1 (4r^2 \sin \theta + 2r^2 \cos \theta - 2r^4 \sin \theta) dr d\theta $$

Integrate with respect to $r$:
$$ \int_0^1 (4r^2 \sin \theta + 2r^2 \cos \theta - 2r^4 \sin \theta) dr = \left[ \frac{4r^3}{3}\sin\theta + \frac{2r^3}{3}\cos\theta - \frac{2r^5}{5}\sin\theta \right]_0^1 $$
$$ = \frac{4}{3}\sin\theta + \frac{2}{3}\cos\theta - \frac{2}{5}\sin\theta $$
$$ = \left(\frac{4}{3} - \frac{2}{5}\right)\sin\theta + \frac{2}{3}\cos\theta $$
$$ = \left(\frac{20-6}{15}\right)\sin\theta + \frac{2}{3}\cos\theta $$
$$ = \frac{14}{15}\sin\theta + \frac{2}{3}\cos\theta $$

Now, integrate with respect to $\theta$:
$$ \int_0^{2\pi} \left( \frac{14}{15}\sin\theta + \frac{2}{3}\cos\theta \right) d\theta $$
$$ = \left[ -\frac{14}{15}\cos\theta + \frac{2}{3}\sin\theta \right]_0^{2\pi} $$
$$ = \left(-\frac{14}{15}\cos(2\pi) + \frac{2}{3}\sin(2\pi)\right) - \left(-\frac{14}{15}\cos(0) + \frac{2}{3}\sin(0)\right) $$
$$ = \left(-\frac{14}{15}(1) + 0\right) - \left(-\frac{14}{15}(1) + 0\right) $$
$$ = -\frac{14}{15} - (-\frac{14}{15}) = 0 $$

So, the line integral $\oint_C \mathbf{F} \cdot d\mathbf{r} = 0$.

**Key takeaway from this example:** The surface integral turned out to be simpler, especially using polar coordinates for the disk. This is a common scenario where Stokes' Theorem shines.

#### Example 2: When the Curl is Zero

Consider the vector field $\mathbf{F}(x, y, z) = \nabla \phi$ for some scalar function $\phi(x, y, z)$. Such a field is called **conservative**. A key property of conservative fields is that their curl is zero: $\nabla \times \mathbf{F} = \nabla \times (\nabla \phi) = \mathbf{0}$.

If $\mathbf{F}$ is conservative, then $\nabla \times \mathbf{F} = \mathbf{0}$. What does Stokes' Theorem tell us?
$$ \oint_C \mathbf{F} \cdot d\mathbf{r} = \iint_S (\nabla \times \mathbf{F}) \cdot d\mathbf{S} = \iint_S \mathbf{0} \cdot d\mathbf{S} = \iint_S 0 \, dS = 0 $$
This means that for any conservative vector field, the line integral around **any** closed curve $C$ is **zero**. This is a fundamental property and a great check! It also implies that the line integral of a conservative field is path-independent.

**Example:** Let $\mathbf{F}(x, y, z) = \langle 2xy, x^2, z \rangle$.
Let's check if this field is conservative. We need to see if it's the gradient of some potential function $\phi$.
$\frac{\partial \phi}{\partial x} = 2xy \implies \phi(x, y, z) = x^2y + f(y, z)$
$\frac{\partial \phi}{\partial y} = x^2 \implies \frac{\partial}{\partial y}(x^2y + f(y, z)) = x^2 + \frac{\partial f}{\partial y} = x^2 \implies \frac{\partial f}{\partial y} = 0$. So $f(y, z)$ does not depend on $y$. Let $f(y, z) = g(z)$.
$\phi(x, y, z) = x^2y + g(z)$.
$\frac{\partial \phi}{\partial z} = z \implies \frac{\partial}{\partial z}(x^2y + g(z)) = g'(z) = z$.
Integrating $g'(z) = z$ gives $g(z) = \frac{1}{2}z^2 + K$.
So, $\phi(x, y, z) = x^2y + \frac{1}{2}z^2 + K$.

Since $\mathbf{F}$ is conservative, its curl must be zero. Let's verify:
$P = 2xy, Q = x^2, R = z$.
$\nabla \times \mathbf{F} = \left(\frac{\partial z}{\partial y} - \frac{\partial x^2}{\partial z}\right)\mathbf{i} + \left(\frac{\partial 2xy}{\partial z} - \frac{\partial z}{\partial x}\right)\mathbf{j} + \left(\frac{\partial x^2}{\partial x} - \frac{\partial 2xy}{\partial y}\right)\mathbf{k}$
$\nabla \times \mathbf{F} = (0 - 0)\mathbf{i} + (0 - 0)\mathbf{j} + (2x - 2x)\mathbf{k} = \mathbf{0}$.

Indeed, the curl is zero. Now, if we were asked to calculate $\oint_C \mathbf{F} \cdot d\mathbf{r}$ for any closed curve $C$ in $\mathbb{R}^3$, the answer is simply 0 because $\mathbf{F}$ is conservative. This is a huge shortcut!

**Remember this:** If you can show a vector field is conservative (by finding a potential function or by showing its curl is zero), the line integral over any closed loop is zero.

### Practical Considerations and Common Pitfalls

1.  **Orientation is Key:** Always check the orientation of the curve $C$ and ensure it's consistent with the surface $S$ and its normal vector $d\mathbf{S}$. If the orientation is reversed, the result of the integral will be negated. The "right-hand rule" is your best friend here.
2.  **Choosing the Right Surface:** The power of Stokes' Theorem lies in choosing a surface $S$ that makes the surface integral easy. Often, a simple planar surface bounded by $C$ is the easiest if $C$ lies in a plane.
3.  **Curl Calculation:** Be meticulous when calculating the curl. A single sign error in the determinant calculation can lead to the wrong answer. Double-check your partial derivatives.
4.  **Surface Integral Calculation:** Setting up and evaluating the surface integral correctly is crucial. The choice of parameterization for $S$ and the calculation of $d\mathbf{S}$ (or its components) must be precise. Using the formula for $z=g(x,y)$ or $x=g(y,z)$ or $y=g(x,z)$ is often simpler than general surface parameterization.
5.  **Conservative Fields:** Recognize when a field is conservative. This is a common "trick" or shortcut in exam problems.

### Relation to Green's Theorem

Stokes' Theorem is a generalization of Green's Theorem. How?
Imagine a surface $S$ that is flat and lies entirely in the $xy$-plane. Let this surface be bounded by a curve $C$.
The vector field $\mathbf{F}$ can be written as $\mathbf{F} = P(x, y)\mathbf{i} + Q(x, y)\mathbf{j} + 0\mathbf{k}$.
The curl of $\mathbf{F}$ is:
$$ \nabla \times \mathbf{F} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ P & Q & 0 \end{vmatrix} = \left(\frac{\partial(0)}{\partial y} - \frac{\partial(Q)}{\partial z}\right)\mathbf{i} - \left(\frac{\partial(0)}{\partial x} - \frac{\partial(P)}{\partial z}\right)\mathbf{j} + \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right)\mathbf{k} $$
Since $P$ and $Q$ only depend on $x$ and $y$, their partial derivatives with respect to $z$ are zero.
So, $\nabla \times \mathbf{F} = 0\mathbf{i} - 0\mathbf{j} + \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right)\mathbf{k}$.

The surface $S$ is in the $xy$-plane, so its normal vector is $\mathbf{k}$ (assuming counterclockwise orientation of $C$ and "up" as the normal direction). Thus, $d\mathbf{S} = \mathbf{k} \, dA$.
The surface integral becomes:
$$ \iint_S (\nabla \times \mathbf{F}) \cdot d\mathbf{S} = \iint_S \left\langle 0, 0, \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right\rangle \cdot \langle 0, 0, 1 \rangle dA $$
$$ = \iint_S \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right) dA $$

Now, let's look at the line integral side of Stokes' Theorem:
$$ \oint_C \mathbf{F} \cdot d\mathbf{r} = \oint_C \langle P, Q, 0 \rangle \cdot \langle dx, dy, dz \rangle = \oint_C (P \, dx + Q \, dy) $$
Stokes' Theorem states:
$$ \oint_C (P \, dx + Q \, dy) = \iint_S \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right) dA $$
This is precisely Green's Theorem for a simply connected domain in the $xy$-plane! Thus, Stokes' Theorem naturally extends Green's Theorem to any orientable surface in 3D space.

### Summary and Key Takeaways

*   **Stokes' Theorem:** Relates the line integral of a vector field $\mathbf{F}$ around a closed curve $C$ to the surface integral of its curl over any surface $S$ bounded by $C$.
    $$ \oint_C \mathbf{F} \cdot d\mathbf{r} = \iint_S (\nabla \times \mathbf{F}) \cdot d\mathbf{S} $$
*   **Curl:** $\nabla \times \mathbf{F}$ measures the infinitesimal rotational tendency of a vector field.
*   **Application:** Primarily used to simplify the evaluation of line integrals by converting them into (often easier) surface integrals.
*   **Conservative Fields:** If $\mathbf{F}$ is conservative ($\nabla \times \mathbf{F} = \mathbf{0}$), then the line integral around any closed loop is zero.
*   **Orientation:** The orientation of $C$ and $S$ must be consistent (right-hand rule).
*   **Generalization:** Stokes' Theorem generalizes Green's Theorem to 3D surfaces.

This theorem is a cornerstone of vector calculus, with widespread applications in electromagnetism (e.g., Faraday's Law of Induction, Ampère's Law), fluid dynamics, and other areas of physical science and engineering. Understanding this connection between the "boundary" (the curve) and the "interior" (the surface) is a profound concept.

---

### Sample Questions and Answers

**Question 1 (Conceptual):** What is the physical interpretation of the curl of a vector field, and how does it relate to Stokes' Theorem?

**Answer:** The curl of a vector field $\mathbf{F}$, denoted $\nabla \times \mathbf{F}$, is a vector quantity that measures the tendency of the field to "rotate" or "circulate" at a point. Imagine placing a small paddlewheel in the field; the curl describes how much that paddlewheel would spin and in what direction.

Stokes' Theorem states that the line integral of $\mathbf{F}$ around a closed curve $C$ is equal to the surface integral of the curl of $\mathbf{F}$ over any surface $S$ bounded by $C$. This means the total "circulation" around the boundary curve $C$ is equivalent to the sum of all the local "rotational" tendencies (represented by the curl) over the entire surface $S$ that encloses $C$. If the curl is zero everywhere on the surface, the circulation around its boundary must also be zero.

**Question 2 (Exam-Oriented):** Evaluate $\oint_C \mathbf{F} \cdot d\mathbf{r}$, where $\mathbf{F}(x, y, z) = \langle y, -x, z^2 \rangle$ and $C$ is the circle $x^2 + y^2 = 4$ in the $xy$-plane, oriented counterclockwise.

**Answer:**
The curve $C$ is a circle of radius 2 in the $xy$-plane ($z=0$). We can use Stokes' Theorem to evaluate this line integral.
Let $S$ be the disk $x^2 + y^2 \le 4$ in the $xy$-plane. The boundary of $S$ is $C$. The orientation of $C$ is counterclockwise, which is consistent with the outward normal vector $\mathbf{k}$ for the disk $S$.

First, calculate the curl of $\mathbf{F}$:
$\mathbf{F} = \langle P, Q, R \rangle = \langle y, -x, z^2 \rangle$.
$P=y, Q=-x, R=z^2$.
$$ \nabla \times \mathbf{F} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ y & -x & z^2 \end{vmatrix} $$
$$ = \left(\frac{\partial(z^2)}{\partial y} - \frac{\partial(-x)}{\partial z}\right)\mathbf{i} - \left(\frac{\partial(z^2)}{\partial x} - \frac{\partial(y)}{\partial z}\right)\mathbf{j} + \left(\frac{\partial(-x)}{\partial x} - \frac{\partial(y)}{\partial y}\right)\mathbf{k} $$
$$ = (0 - 0)\mathbf{i} - (0 - 0)\mathbf{j} + (-1 - 1)\mathbf{k} $$
$$ \nabla \times \mathbf{F} = -2\mathbf{k} = \langle 0, 0, -2 \rangle $$

Now, we need to evaluate the surface integral $\iint_S (\nabla \times \mathbf{F}) \cdot d\mathbf{S}$.
Since $S$ is the disk $x^2+y^2 \le 4$ in the $xy$-plane ($z=0$), the unit normal vector is $\mathbf{n} = \mathbf{k}$. So, $d\mathbf{S} = \mathbf{k} \, dA$.
$$ \iint_S (\nabla \times \mathbf{F}) \cdot d\mathbf{S} = \iint_S \langle 0, 0, -2 \rangle \cdot \langle 0, 0, 1 \rangle dA $$
$$ = \iint_S (-2) \, dA = -2 \iint_S dA $$
The integral $\iint_S dA$ is simply the area of the disk $S$. The radius of the disk is $r=2$.
Area of $S = \pi r^2 = \pi (2^2) = 4\pi$.
So, the surface integral is $-2 \times 4\pi = -8\pi$.

Therefore, by Stokes' Theorem, $\oint_C \mathbf{F} \cdot d\mathbf{r} = -8\pi$.

**Common Pitfall Check:**
*   Did we calculate the curl correctly? Yes.
*   Did we choose the correct surface and its orientation? Yes, the disk $z=0$ bounded by $C$.
*   Is the normal vector $\mathbf{k}$ consistent with counterclockwise $C$? Yes, the right-hand rule confirms this.
*   Is the calculation of the surface integral correct? Yes, it's a constant times the area.

**Question 3 (Conceptual/Application):** If a vector field $\mathbf{F}$ has $\nabla \times \mathbf{F} = \mathbf{0}$ everywhere in a region, what can you conclude about the line integral of $\mathbf{F}$ around any closed curve $C$ in that region? Explain using Stokes' Theorem.

**Answer:** If $\nabla \times \mathbf{F} = \mathbf{0}$ everywhere in a region, then $\mathbf{F}$ is called an **irrotational** vector field. By Stokes' Theorem, we have:
$$ \oint_C \mathbf{F} \cdot d\mathbf{r} = \iint_S (\nabla \times \mathbf{F}) \cdot d\mathbf{S} $$
If $\nabla \times \mathbf{F} = \mathbf{0}$ for all points on the surface $S$, then the integrand becomes $\mathbf{0} \cdot d\mathbf{S} = 0$.
$$ \iint_S 0 \, dS = 0 $$
Therefore, for any closed curve $C$ in a region where $\mathbf{F}$ has zero curl, the line integral $\oint_C \mathbf{F} \cdot d\mathbf{r}$ is **zero**. This means that the line integral of an irrotational field is independent of the path taken between two points, and it is zero when integrated around any closed loop. This is a fundamental property often related to the existence of a potential function for the field.
