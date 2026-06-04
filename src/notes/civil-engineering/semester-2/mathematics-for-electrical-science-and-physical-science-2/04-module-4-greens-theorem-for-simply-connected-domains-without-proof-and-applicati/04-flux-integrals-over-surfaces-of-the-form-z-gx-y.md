---
title: "Flux integrals over surfaces of the form z = g(x, y)"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 2"
module: "Module 4: Green’s theorem (for simply connected domains, without proof) 
and applications to evaluating line integrals"
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912ce2"
status: "completed"
scrapedAt: "2026-05-20T18:37:07.242Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 2

## Module 4: Green's Theorem and Applications to Line Integrals

### Topic: Flux Integrals Over Surfaces of the Form $z = g(x, y)$

Welcome, everyone! In this module, we're diving into the fascinating world of vector calculus and its powerful applications. Specifically, we're going to focus on how to calculate something called a "flux integral" over surfaces that have a particular, very common shape: those defined by an equation like $z = g(x, y)$. This is a crucial topic, linking directly to understanding how quantities like fluid flow or electric fields permeate through surfaces, which is fundamental in both electrical science and physical science.

Our journey here builds upon our understanding of line integrals, and it's going to help us bridge the gap towards more advanced concepts like surface integrals and the integral theorems that connect them, like Green's Theorem. Remember, our overarching goal in this course is to equip you with the mathematical tools to solve real-world engineering problems. CO3 (computing derivatives and line integrals of vector functions and their applications) and CO4 (applying surface and volume integrals and their inter-relations) are particularly relevant here. We're essentially preparing the ground for those CO4 applications by mastering this specific type of surface integral.

---

### 1. What is Flux? A Conceptual Dive

Before we get into the nitty-gritty of calculations, let's get a feel for what "flux" actually means. Imagine a river flowing. If you were to hold a net in the water, the amount of water passing through that net per unit of time is its flux. In physics and engineering, flux is generally defined as the rate of flow of a quantity (like fluid, heat, electric field, magnetic field) across a surface.

Think about it this way:
*   **Fluid Flow:** If you have a vector field representing the velocity of water, the flux through a surface tells you how much water is passing *through* that surface.
*   **Electric Field:** If you have an electric field, the flux through a surface tells you how much of that field is "pointing through" the surface. This is foundational to Gauss's Law.

So, flux is all about quantifying "how much of something is going through."

#### Connecting to Previous Concepts

We've already worked with line integrals, where we integrated a vector field along a *curve*. Now, we're stepping up a dimension. Instead of a curve, we have a *surface*, and instead of integrating along the curve, we're integrating over the surface. This is the essence of a **surface integral**.

---

### 2. Surfaces of the Form $z = g(x, y)$: A Common Scenario

Many physical phenomena are modeled by systems that lie on or interact with surfaces described by $z = g(x, y)$.
*   Think of the curved surface of a hill described by its elevation $z$ as a function of your position $(x, y)$ on a map.
*   Or consider a thin, flexible sheet where the height $z$ varies across its $xy$-plane projection.
*   In electrical engineering, a conducting surface whose shape can be defined this way is a common scenario.

These surfaces are what we call **graphs of functions of two variables**. They are generally "smooth" and "well-behaved," which is important for our integration techniques.

#### Visualizing the Surface and its Normal Vector

Crucially for flux integrals, we need to consider the **orientation** of the surface. This is represented by a **normal vector**, a vector that is perpendicular to the surface at each point. For flux, we typically care about the *outward* pointing normal or a specified normal direction.

For a surface $z = g(x, y)$, the orientation is intimately tied to its gradient. If we rewrite the surface equation as $G(x, y, z) = g(x, y) - z = 0$, then the gradient of $G$, $\nabla G$, will be normal to the surface.

Let's calculate $\nabla G$:
$\nabla G = \left\langle \frac{\partial G}{\partial x}, \frac{\partial G}{\partial y}, \frac{\partial G}{\partial z} \right\rangle = \left\langle \frac{\partial g}{\partial x}, \frac{\partial g}{\partial y}, -1 \right\rangle$.

This vector $\mathbf{n}_G = \left\langle g_x, g_y, -1 \right\rangle$ is normal to the surface $z = g(x, y)$.

Now, for flux, we usually need a *unit* normal vector. We can get this by dividing by its magnitude:
$\|\nabla G\| = \sqrt{\left(\frac{\partial g}{\partial x}\right)^2 + \left(\frac{\partial g}{\partial y}\right)^2 + (-1)^2} = \sqrt{g_x^2 + g_y^2 + 1}$.

So, a unit normal vector is $\mathbf{u}_G = \frac{\nabla G}{\|\nabla G\|} = \frac{\left\langle g_x, g_y, -1 \right\rangle}{\sqrt{g_x^2 + g_y^2 + 1}}$.

**Important Point:** This normal vector $\mathbf{n}_G = \left\langle g_x, g_y, -1 \right\rangle$ always has a negative $z$-component. This means it points generally *downwards*. If we need an *upward* pointing normal, we would use $-\mathbf{n}_G = \left\langle -g_x, -g_y, 1 \right\rangle$. The direction we choose depends on the problem statement, often specifying "outward" or a particular orientation. For many applications, we'll deal with projections onto the $xy$-plane, and the choice of normal direction will be clear from context or problem specification.

#### Relating to the $xy$-Plane Projection

The key idea for integrating over such a surface is to "flatten" it onto the $xy$-plane. Let $D$ be the region in the $xy$-plane over which the surface $z = g(x, y)$ is defined. The flux integral over the surface $S$ can often be transformed into a double integral over this region $D$.

---

### 3. The Flux Integral: Definition and Formula

Let $\mathbf{F}(x, y, z) = \langle P(x, y, z), Q(x, y, z), R(x, y, z) \rangle$ be a vector field. The flux of $\mathbf{F}$ across a surface $S$ is given by the surface integral:

$$ \text{Flux} = \iint_S \mathbf{F} \cdot d\mathbf{S} $$

where $d\mathbf{S}$ represents a vector area element. It has magnitude $dS$ (the differential surface area) and direction given by the unit normal vector $\mathbf{n}$. So, $d\mathbf{S} = \mathbf{n} \, dS$.

The integral becomes:
$$ \text{Flux} = \iint_S \mathbf{F} \cdot \mathbf{n} \, dS $$

#### Transforming to a Double Integral Over the $xy$-Plane

For a surface $S$ given by $z = g(x, y)$, parameterized by $(x, y)$, the surface element $dS$ is related to the differential area $dA = dx \, dy$ in the $xy$-plane by:

$$ dS = \sqrt{1 + \left(\frac{\partial g}{\partial x}\right)^2 + \left(\frac{\partial g}{\partial y}\right)^2} \, dA $$

Also, the vector element $d\mathbf{S}$ can be expressed as:

$$ d\mathbf{S} = \mathbf{N} \, dA = \left\langle -\frac{\partial g}{\partial x}, -\frac{\partial g}{\partial y}, 1 \right\rangle \, dx \, dy $$

This $\mathbf{N}$ is the normal vector pointing upwards (positive $z$-component). If you need the downward normal, it would be $\left\langle \frac{\partial g}{\partial x}, \frac{\partial g}{\partial y}, -1 \right\rangle \, dx \, dy$. The choice depends on the problem.

Let's assume we are interested in the flux through $S$ in the direction of the *upward* unit normal $\mathbf{n} = \frac{\langle -g_x, -g_y, 1 \rangle}{\sqrt{g_x^2 + g_y^2 + 1}}$.

Then, $\mathbf{F} \cdot \mathbf{n} \, dS = \mathbf{F} \cdot \left( \frac{\langle -g_x, -g_y, 1 \rangle}{\sqrt{g_x^2 + g_y^2 + 1}} \right) \sqrt{g_x^2 + g_y^2 + 1} \, dA$
$= \mathbf{F} \cdot \langle -g_x, -g_y, 1 \rangle \, dA$.

Let $\mathbf{F} = \langle P, Q, R \rangle$. Then $\mathbf{F} \cdot \langle -g_x, -g_y, 1 \rangle = P(-g_x) + Q(-g_y) + R(1) = -P g_x - Q g_y + R$.

So, the flux integral becomes a double integral over the region $D$ in the $xy$-plane:

$$ \text{Flux} = \iint_D (-P(x, y, g(x, y)) g_x(x, y) - Q(x, y, g(x, y)) g_y(x, y) + R(x, y, g(x, y))) \, dA $$

Here, $P$, $Q$, and $R$ are evaluated at the point $(x, y, z)$ on the surface, which is $(x, y, g(x, y))$.

**Formula to Remember:** For a surface $z = g(x, y)$ and vector field $\mathbf{F} = \langle P, Q, R \rangle$, the flux across $S$ with upward normal is:
$$ \iint_S \mathbf{F} \cdot d\mathbf{S} = \iint_D \left( -P \frac{\partial g}{\partial x} - Q \frac{\partial g}{\partial y} + R \right) \, dA $$
where $D$ is the projection of $S$ onto the $xy$-plane, and $P, Q, R$ are evaluated at $(x, y, g(x, y))$.

If the problem asks for flux in the direction of the *downward* normal $\left\langle g_x, g_y, -1 \right\rangle$, the integral becomes:
$$ \iint_S \mathbf{F} \cdot d\mathbf{S} = \iint_D \left( P \frac{\partial g}{\partial x} + Q \frac{\partial g}{\partial y} - R \right) \, dA $$

**Crucial Note:** Always check the specified direction of the flux! If it's not specified, "outward" is often assumed, and for a surface $z=g(x,y)$, the upward normal is usually the relevant one for outward flux if the surface is oriented "upwards" from the $xy$-plane.

---

### 4. Worked Examples: Bringing the Concepts to Life

Let's tackle some examples to solidify your understanding. These will help connect with CO3 and CO4.

#### Example 1: Simple Flow Through a Paraboloid

**Problem:** Find the flux of the vector field $\mathbf{F}(x, y, z) = \langle x, y, z \rangle$ upward through the surface $S$ given by $z = x^2 + y^2$, where $0 \le z \le 1$.

**Thinking Process:**
1.  **Identify the Surface:** $z = g(x, y) = x^2 + y^2$. This is a paraboloid opening upwards.
2.  **Identify the Region D:** The condition $0 \le z \le 1$ means $0 \le x^2 + y^2 \le 1$. So, $D$ is the unit disk in the $xy$-plane, centered at the origin.
3.  **Identify the Vector Field Components:** $P = x$, $Q = y$, $R = z$.
4.  **Calculate Partial Derivatives of g:**
    $\frac{\partial g}{\partial x} = \frac{\partial}{\partial x}(x^2 + y^2) = 2x$
    $\frac{\partial g}{\partial y} = \frac{\partial}{\partial y}(x^2 + y^2) = 2y$
5.  **Evaluate F on the Surface:** We need $\mathbf{F}(x, y, g(x, y))$. Since $z = g(x, y) = x^2 + y^2$, we have:
    $P(x, y, g(x, y)) = x$
    $Q(x, y, g(x, y)) = y$
    $R(x, y, g(x, y)) = z = x^2 + y^2$
6.  **Apply the Flux Formula (Upward Normal):**
    Flux $= \iint_D \left( -P \frac{\partial g}{\partial x} - Q \frac{\partial g}{\partial y} + R \right) \, dA$
    Flux $= \iint_D \left( -(x)(2x) - (y)(2y) + (x^2 + y^2) \right) \, dA$
    Flux $= \iint_D (-2x^2 - 2y^2 + x^2 + y^2) \, dA$
    Flux $= \iint_D (-x^2 - y^2) \, dA$
7.  **Evaluate the Double Integral:** The region $D$ is the unit disk $x^2 + y^2 \le 1$. This is a perfect candidate for polar coordinates.
    Let $x = r \cos \theta$, $y = r \sin \theta$. Then $x^2 + y^2 = r^2$, and $dA = r \, dr \, d\theta$.
    The limits for $D$ in polar coordinates are $0 \le r \le 1$ and $0 \le \theta \le 2\pi$.
    Flux $= \int_0^{2\pi} \int_0^1 (-r^2) \, r \, dr \, d\theta$
    Flux $= \int_0^{2\pi} \int_0^1 -r^3 \, dr \, d\theta$
    Flux $= \int_0^{2\pi} \left[ -\frac{r^4}{4} \right]_0^1 \, d\theta$
    Flux $= \int_0^{2\pi} \left( -\frac{1}{4} - 0 \right) \, d\theta$
    Flux $= -\frac{1}{4} \int_0^{2\pi} \, d\theta$
    Flux $= -\frac{1}{4} [\theta]_0^{2\pi}$
    Flux $= -\frac{1}{4} (2\pi - 0) = -\frac{\pi}{2}$

**Interpretation:** The negative flux means that the net flow of the vector field $\mathbf{F}$ through the paraboloid surface is *into* the region enclosed by it, not out of it. For $\mathbf{F} = \langle x, y, z \rangle$, this makes sense; the vector field generally points away from the origin, and as you move up the paraboloid, the $z$ component increases, pointing outwards, but the radial components $x, y$ are "pulled inwards" by the surface's curvature. This example directly uses CO4 principles.

---

#### Example 2: Flux of a Constant Field Through a Plane

**Problem:** Find the flux of the vector field $\mathbf{F}(x, y, z) = \langle 0, 0, 5 \rangle$ upward through the portion of the plane $z = 2x + 3y + 1$ that lies above the region $D$ in the $xy$-plane bounded by $x=0, y=0, x=1, y=1$.

**Thinking Process:**
1.  **Identify the Surface:** $z = g(x, y) = 2x + 3y + 1$. This is a plane.
2.  **Identify the Region D:** $D$ is the square in the $xy$-plane with vertices $(0,0), (1,0), (1,1), (0,1)$.
3.  **Identify the Vector Field Components:** $P = 0$, $Q = 0$, $R = 5$. Note that $\mathbf{F}$ is a constant field pointing purely in the $z$-direction.
4.  **Calculate Partial Derivatives of g:**
    $\frac{\partial g}{\partial x} = \frac{\partial}{\partial x}(2x + 3y + 1) = 2$
    $\frac{\partial g}{\partial y} = \frac{\partial}{\partial y}(2x + 3y + 1) = 3$
5.  **Evaluate F on the Surface:** Since $\mathbf{F}$ is constant, its components are always 0, 0, and 5, regardless of the point $(x, y, z)$.
    $P(x, y, g(x, y)) = 0$
    $Q(x, y, g(x, y)) = 0$
    $R(x, y, g(x, y)) = 5$
6.  **Apply the Flux Formula (Upward Normal):**
    Flux $= \iint_D \left( -P \frac{\partial g}{\partial x} - Q \frac{\partial g}{\partial y} + R \right) \, dA$
    Flux $= \iint_D \left( -(0)(2) - (0)(3) + 5 \right) \, dA$
    Flux $= \iint_D 5 \, dA$
7.  **Evaluate the Double Integral:** The integral of a constant over a region is simply the constant multiplied by the area of the region.
    Area of $D$ (the square) = base $\times$ height = $1 \times 1 = 1$.
    Flux $= 5 \times \text{Area}(D) = 5 \times 1 = 5$.

**Interpretation:** The flux of a constant vertical field through a tilted plane is simply the magnitude of the vertical component of the field multiplied by the *area of the projection* of the surface onto the horizontal plane. This makes intuitive sense! The field is always pointing upwards with strength 5. The surface has an area of projection of 1 on the $xy$-plane. So, the total upward flow through that projected area is $5 \times 1 = 5$. This is a very direct application of the formula and relates to CO4.

---

#### Example 3: Flux with Downward Normal

**Problem:** Find the flux of the vector field $\mathbf{F}(x, y, z) = \langle xz, yz, xy \rangle$ downward through the surface $S$ given by $z = 4 - x^2 - y^2$, for $z \ge 0$.

**Thinking Process:**
1.  **Identify the Surface:** $z = g(x, y) = 4 - x^2 - y^2$. This is a paraboloid opening downwards.
2.  **Identify the Region D:** The condition $z \ge 0$ means $4 - x^2 - y^2 \ge 0$, which implies $x^2 + y^2 \le 4$. So, $D$ is the disk of radius 2 centered at the origin in the $xy$-plane.
3.  **Identify the Vector Field Components:** $P = xz$, $Q = yz$, $R = xy$.
4.  **Calculate Partial Derivatives of g:**
    $\frac{\partial g}{\partial x} = \frac{\partial}{\partial x}(4 - x^2 - y^2) = -2x$
    $\frac{\partial g}{\partial y} = \frac{\partial}{\partial y}(4 - x^2 - y^2) = -2y$
5.  **Evaluate F on the Surface:** Substitute $z = g(x, y) = 4 - x^2 - y^2$ into $\mathbf{F}$.
    $P(x, y, g(x, y)) = x(4 - x^2 - y^2)$
    $Q(x, y, g(x, y)) = y(4 - x^2 - y^2)$
    $R(x, y, g(x, y)) = xy$
6.  **Apply the Flux Formula (Downward Normal):** Remember, the formula for downward normal uses $+Pg_x + Qg_y - R$.
    Flux $= \iint_D \left( P \frac{\partial g}{\partial x} + Q \frac{\partial g}{\partial y} - R \right) \, dA$
    Flux $= \iint_D \left( [x(4 - x^2 - y^2)](-2x) + [y(4 - x^2 - y^2)](-2y) - (xy) \right) \, dA$
    Flux $= \iint_D \left( -2x^2(4 - x^2 - y^2) - 2y^2(4 - x^2 - y^2) - xy \right) \, dA$
    Flux $= \iint_D \left( -(2x^2 + 2y^2)(4 - x^2 - y^2) - xy \right) \, dA$
7.  **Evaluate the Double Integral:** Again, polar coordinates are best for the disk $D$. $x^2+y^2 = r^2$, $dA = r \, dr \, d\theta$. Limits are $0 \le r \le 2$, $0 \le \theta \le 2\pi$.
    Flux $= \int_0^{2\pi} \int_0^2 \left( -(2r^2)(4 - r^2) - (r \cos \theta)(r \sin \theta) \right) r \, dr \, d\theta$
    Flux $= \int_0^{2\pi} \int_0^2 \left( -8r^2 + 2r^4 - r^2 \cos \theta \sin \theta \right) r \, dr \, d\theta$
    Flux $= \int_0^{2\pi} \int_0^2 \left( -8r^3 + 2r^5 - r^3 \cos \theta \sin \theta \right) \, dr \, d\theta$

    Let's integrate with respect to $r$ first:
    $\int_0^2 \left( -8r^3 + 2r^5 - r^3 \cos \theta \sin \theta \right) \, dr$
    $= \left[ -8\frac{r^4}{4} + 2\frac{r^6}{6} - \frac{r^4}{4} \cos \theta \sin \theta \right]_0^2$
    $= \left[ -2r^4 + \frac{r^6}{3} - \frac{r^4}{4} \cos \theta \sin \theta \right]_0^2$
    $= (-2(2^4) + \frac{2^6}{3} - \frac{2^4}{4} \cos \theta \sin \theta) - (0)$
    $= (-2(16) + \frac{64}{3} - \frac{16}{4} \cos \theta \sin \theta)$
    $= -32 + \frac{64}{3} - 4 \cos \theta \sin \theta$
    $= -\frac{96}{3} + \frac{64}{3} - 4 \cos \theta \sin \theta$
    $= -\frac{32}{3} - 4 \cos \theta \sin \theta$

    Now integrate with respect to $\theta$:
    Flux $= \int_0^{2\pi} \left( -\frac{32}{3} - 4 \cos \theta \sin \theta \right) \, d\theta$
    Flux $= \int_0^{2\pi} -\frac{32}{3} \, d\theta - \int_0^{2\pi} 4 \cos \theta \sin \theta \, d\theta$

    The first integral: $\int_0^{2\pi} -\frac{32}{3} \, d\theta = -\frac{32}{3} [\theta]_0^{2\pi} = -\frac{32}{3} (2\pi) = -\frac{64\pi}{3}$.

    The second integral: $\int_0^{2\pi} 4 \cos \theta \sin \theta \, d\theta$. We can use the identity $\sin(2\theta) = 2 \sin \theta \cos \theta$. So, $4 \cos \theta \sin \theta = 2 \sin(2\theta)$.
    $\int_0^{2\pi} 2 \sin(2\theta) \, d\theta = \left[ -\cos(2\theta) \right]_0^{2\pi} = (-\cos(4\pi)) - (-\cos(0)) = (-1) - (-1) = 0$.
    Alternatively, recognize that $\int_0^{2\pi} \sin(kx) dx = 0$ for any integer $k \ne 0$.

    So, Flux $= -\frac{64\pi}{3} - 0 = -\frac{64\pi}{3}$.

**Interpretation:** The flux is negative. This indicates that the net flow is in the direction opposite to the downward normal, meaning it's upwards, or inwards into the volume enclosed by the paraboloid. This is another example applying CO4.

---

### 5. Connections to Green's Theorem and Course Outcomes

You might be wondering, "Where does Green's Theorem fit in?" While this topic *specifically* focuses on surfaces of the form $z=g(x,y)$, the *reason* we are studying these flux integrals is to build towards the Divergence Theorem, which generalizes Green's Theorem to 3D. Green's Theorem itself relates a line integral around a simple closed curve $C$ in the $xy$-plane to a double integral over the region $D$ enclosed by $C$.

$$ \oint_C P \, dx + Q \, dy = \iint_D \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) \, dA $$

Notice the similarity in structure: relating a boundary integral (line integral) to a surface integral (double integral over a region).

Our work here on flux integrals over surfaces $z=g(x,y)$ is essentially preparing us for surface integrals in general, and then for the Divergence Theorem. The Divergence Theorem states that for a vector field $\mathbf{F}$ and a solid region $E$ with a closed, piecewise smooth boundary surface $S$ with outward unit normal $\mathbf{n}$:

$$ \iint_S \mathbf{F} \cdot d\mathbf{S} = \iiint_E \text{div}(\mathbf{F}) \, dV $$

where $\text{div}(\mathbf{F}) = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}$.

**How does this connect to our topic?**
*   **CO3:** Understanding how to compute line integrals is a prerequisite for line integrals around curves in 3D, which are part of surface integrals. Our focus here on vector fields $\mathbf{F}$ and their behavior is also part of CO3.
*   **CO4:** This entire topic is a direct application of CO4. We are computing flux (a type of surface integral) and relating it to a double integral over a planar region. This is a stepping stone to triple integrals and the Divergence Theorem.

**Key Takeaway:** The method of transforming a surface integral over $z=g(x,y)$ into a double integral over its $xy$-plane projection is a fundamental technique that you will see reappear in more complex scenarios. It's about choosing the right coordinate system or projection to simplify integration.

---

### 6. Tips for Success and Common Pitfalls

*   **Direction of Flux:** This is paramount. Always double-check whether the question asks for flux in the upward, downward, outward, or inward direction. The sign of your result depends entirely on this.
*   **Correctly Evaluating F:** Ensure you substitute $z = g(x, y)$ into your vector field $\mathbf{F} = \langle P, Q, R \rangle$ *before* you perform the dot product with the normal's components.
*   **Partial Derivatives:** Be careful with your partial differentiation of $g(x, y)$. Simple algebraic errors here propagate through the entire calculation.
*   **Region D:** Correctly identifying the projection region $D$ in the $xy$-plane is crucial for setting up the double integral limits.
*   **Polar Coordinates:** For circular or disk-shaped regions $D$, switching to polar coordinates usually simplifies the integral significantly. Remember $dA = r \, dr \, d\theta$ and the corresponding limits.
*   **Sign Errors:** The negative signs in the formula for upward flux ($-Pg_x - Qg_y$) are a common source of errors. Double-check them.

---

### Sample Questions and Answers

**Q1. Conceptual:** What does the flux integral represent physically?
**A1:** The flux integral quantifies the rate at which a vector field is flowing or passing through a given surface. It measures "how much of the field goes through." For instance, it can represent the rate of fluid flow through a surface or the total electric field lines piercing a surface.

**Q2. Calculation:** Find the flux of $\mathbf{F}(x, y, z) = \langle x, y, z \rangle$ upward through the surface $S$ given by $z = x^2 + y^2$ over the region $D = \{ (x, y) \,|\, x^2 + y^2 \le 4 \}$.
**A2:**
*   $z = g(x, y) = x^2 + y^2$.
*   $g_x = 2x$, $g_y = 2y$.
*   $P = x, Q = y, R = z = x^2 + y^2$.
*   Flux $= \iint_D (-P g_x - Q g_y + R) \, dA = \iint_D (-(x)(2x) - (y)(2y) + (x^2+y^2)) \, dA$
*   $= \iint_D (-2x^2 - 2y^2 + x^2 + y^2) \, dA = \iint_D (-x^2 - y^2) \, dA$.
*   Using polar coordinates for $D$ ($0 \le r \le 2, 0 \le \theta \le 2\pi$):
    $\int_0^{2\pi} \int_0^2 (-r^2) r \, dr \, d\theta = \int_0^{2\pi} \int_0^2 -r^3 \, dr \, d\theta$
    $= \int_0^{2\pi} [-\frac{r^4}{4}]_0^2 \, d\theta = \int_0^{2\pi} -\frac{16}{4} \, d\theta = \int_0^{2\pi} -4 \, d\theta$
    $= [-4\theta]_0^{2\pi} = -8\pi$.
    **Answer:** $-8\pi$.

**Q3. Conceptual/Formula Application:** If a vector field is $\mathbf{F} = \langle 0, 0, k \rangle$ (a constant vertical field) and the surface is $z=c$ (a horizontal plane) over a region $D$ in the $xy$-plane, what is the flux upwards?
**A3:**
*   $z = g(x, y) = c$.
*   $g_x = 0$, $g_y = 0$.
*   $P = 0, Q = 0, R = k$.
*   Flux $= \iint_D (-P g_x - Q g_y + R) \, dA = \iint_D (-(0)(0) - (0)(0) + k) \, dA = \iint_D k \, dA$.
*   Since $k$ is constant, Flux $= k \times \text{Area}(D)$.
    **Answer:** The flux is $k$ times the area of the region $D$. This makes physical sense: the flow is purely vertical, so it's determined by the vertical component of the field and the area it passes through.

**Q4. Pitfall Identification:** What is the most critical piece of information to extract from the problem statement when calculating a flux integral?
**A4:** The direction of the flux (or the orientation of the surface). This determines the sign of the normal vector used in the calculation, and hence the sign of the final flux value.

---
