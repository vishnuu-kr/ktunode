---
title: "Surface integrals over surfaces of the form z = g(x, y)"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 2"
module: "Module 4: Green’s theorem (for simply connected domains, without proof) and applications to evaluating line integrals"
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f9842"
status: "completed"
scrapedAt: "2026-05-23T16:08:20.518Z"
---
# Mathematics for Electrical Science and Physical Science - 2

## Module 4: Green’s Theorem and Applications to Line Integrals

### Topic: Surface Integrals Over Surfaces of the Form $z = g(x, y)$

Welcome, everyone! In this module, we’ve been delving into the powerful world of vector calculus, exploring line integrals and, importantly, Green's Theorem. Today, we're going to shift our focus to **surface integrals**, specifically those over surfaces that can be described as a function of two variables, $z = g(x, y)$. This is a really crucial concept because many physical phenomena, like heat distribution on a surface or the flow of fluid through a membrane, can be modeled using these types of surfaces.

Our journey today is directly connected to our course objectives. Specifically, we'll be building upon **CO4: Apply the concepts of surface and volume integrals and to learn their inter-relations and applications.** Understanding how to compute surface integrals over $z = g(x, y)$ is the foundational step towards applying these concepts to real-world problems in electrical and physical sciences. Think about calculating the total electric charge on a curved conductor shaped like a paraboloid, or the total mass of a thin sheet of material with a varying density profile. These are the kinds of problems we're preparing to tackle.

### 1. What is a Surface Integral?

Before we dive into the specifics of $z = g(x, y)$ surfaces, let’s quickly recap what a surface integral *is*. Just as a line integral allows us to integrate a function along a curve, a surface integral allows us to integrate a function over a surface. We can integrate either a scalar function (like density or temperature) or a vector function (like fluid velocity or electric field) over a surface.

Imagine you have a thin, flexible sheet of metal, and you want to know its total mass. If the density isn't uniform across the sheet, you can't just multiply the area by the density. You need to integrate the density function over the surface of the sheet. That, in essence, is a scalar surface integral.

### 2. Parametrization: The Key to Computation

The fundamental challenge in calculating surface integrals is that surfaces are inherently two-dimensional objects embedded in three-dimensional space. To work with them mathematically, we need a way to "flatten" them out or represent them in a way that’s amenable to integration, much like we use parametrization for curves.

For a surface defined by $z = g(x, y)$, a natural way to parametrize it is to let $x$ and $y$ be our parameters. So, our position vector $\mathbf{r}$ on the surface can be written as:

$\mathbf{r}(x, y) = x\mathbf{i} + y\mathbf{j} + g(x, y)\mathbf{k}$

Here, $x$ and $y$ vary over some domain $D$ in the $xy$-plane, which corresponds to the projection of our surface onto the $xy$-plane. This domain $D$ is often a region bounded by some curves.

Think of it like this: If you have a lampshade that’s not a perfect cylinder but has a more complex curved shape (like $z = \sin(x) + y^2$), you can describe any point on the lampshade by specifying its $x$ and $y$ coordinates. The height $z$ is then determined by the function $g(x, y)$.

### 3. The Differential Surface Area Element ($dS$)

Now, this is where things get a bit more involved, but it's the heart of the calculation. When we move a tiny bit in the $x$ and $y$ directions on our domain $D$ (say, by $dx$ and $dy$), this corresponds to a small patch of surface area $dS$ on our 3D surface. We need to figure out how $dS$ relates to $dx$ and $dy$.

From our vector calculus tools, specifically from the cross product of partial derivatives of our position vector, we know that the magnitude of $\mathbf{r}_x \times \mathbf{r}_y$ gives us the scaling factor that relates a small area element in the parameter domain ($dx dy$) to the corresponding surface area element ($dS$).

Let's compute these partial derivatives of $\mathbf{r}(x, y)$:

$\mathbf{r}_x = \frac{\partial \mathbf{r}}{\partial x} = \frac{\partial}{\partial x}(x\mathbf{i} + y\mathbf{j} + g(x, y)\mathbf{k}) = 1\mathbf{i} + 0\mathbf{j} + \frac{\partial g}{\partial x}\mathbf{k}$

$\mathbf{r}_y = \frac{\partial \mathbf{r}}{\partial y} = \frac{\partial}{\partial y}(x\mathbf{i} + y\mathbf{j} + g(x, y)\mathbf{k}) = 0\mathbf{i} + 1\mathbf{j} + \frac{\partial g}{\partial y}\mathbf{k}$

Now, let's find the cross product:

$\mathbf{r}_x \times \mathbf{r}_y = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 1 & 0 & \frac{\partial g}{\partial x} \\ 0 & 1 & \frac{\partial g}{\partial y} \end{vmatrix} = \left(0 \cdot \frac{\partial g}{\partial y} - \frac{\partial g}{\partial x} \cdot 1\right)\mathbf{i} - \left(1 \cdot \frac{\partial g}{\partial y} - \frac{\partial g}{\partial x} \cdot 0\right)\mathbf{j} + \left(1 \cdot 1 - 0 \cdot 0\right)\mathbf{k}$

$\mathbf{r}_x \times \mathbf{r}_y = -\frac{\partial g}{\partial x}\mathbf{i} - \frac{\partial g}{\partial y}\mathbf{j} + 1\mathbf{k}$

The magnitude of this vector is:

$\|\mathbf{r}_x \times \mathbf{r}_y\| = \sqrt{\left(-\frac{\partial g}{\partial x}\right)^2 + \left(-\frac{\partial g}{\partial y}\right)^2 + 1^2} = \sqrt{\left(\frac{\partial g}{\partial x}\right)^2 + \left(\frac{\partial g}{\partial y}\right)^2 + 1}$

This magnitude is precisely the factor that relates our infinitesimal area $dA = dx dy$ in the $xy$-plane to the corresponding infinitesimal surface area $dS$ on our curved surface. So, we have:

$dS = \sqrt{\left(\frac{\partial g}{\partial x}\right)^2 + \left(\frac{\partial g}{\partial y}\right)^2 + 1} \, dA = \sqrt{\left(\frac{\partial g}{\partial x}\right)^2 + \left(\frac{\partial g}{\partial y}\right)^2 + 1} \, dx dy$

This is a crucial formula to remember! It essentially tells us that the "slant" of the surface makes the surface area element larger than the projected area element in the $xy$-plane. Think of a small square drawn on a flat table. If you lift one edge of the table, that square becomes a parallelogram on the slanted surface, and its area increases. The term under the square root quantifies this increase in area due to the slant.

### 4. Evaluating Scalar Surface Integrals: The Main Formula

Now that we have our parametrization $\mathbf{r}(x, y)$ and our differential surface area $dS$, we can set up the scalar surface integral. If $f(x, y, z)$ is a scalar function that we want to integrate over the surface $S$ defined by $z = g(x, y)$, the surface integral is given by:

$\iint_S f(x, y, z) \, dS = \iint_D f(x, y, g(x, y)) \sqrt{\left(\frac{\partial g}{\partial x}\right)^2 + \left(\frac{\partial g}{\partial y}\right)^2 + 1} \, dA$

where $D$ is the projection of the surface $S$ onto the $xy$-plane.

**Let's break this down:**

1.  **Identify the surface:** Make sure your surface is indeed of the form $z = g(x, y)$.
2.  **Find $g(x, y)$ and its partial derivatives:** Calculate $\frac{\partial g}{\partial x}$ and $\frac{\partial g}{\partial y}$.
3.  **Determine the domain $D$:** Project your surface onto the $xy$-plane to find the region $D$ over which you will integrate. This is a common step where students can get stuck – visualizing the projection.
4.  **Substitute into the integrand:** Replace $z$ in your function $f(x, y, z)$ with $g(x, y)$. You'll then multiply this by the square root term we derived.
5.  **Evaluate the double integral:** Compute the double integral of the resulting function over the domain $D$. This usually involves setting up iterated integrals (e.g., $\int_a^b \int_{c(x)}^{d(x)} \dots dy dx$).

This formula directly connects to **CO4**. We are applying the concept of surface integrals by transforming a 3D integral into a 2D double integral over a planar region. This is exactly what it means to *apply* the concept.

### 5. Example: Mass of a Paraboloid Cap

Let's say we want to find the mass of a thin, flat cap of a paraboloid defined by $z = 4 - x^2 - y^2$, lying above the $xy$-plane. Assume the density of the material is given by $\rho(x, y, z) = x^2 + y^2$.

**Step 1: Identify the surface and function.**
Our surface is $z = 4 - x^2 - y^2$. So, $g(x, y) = 4 - x^2 - y^2$.
The density function is $\rho(x, y, z) = x^2 + y^2$.

**Step 2: Find partial derivatives of $g(x, y)$.**
$\frac{\partial g}{\partial x} = \frac{\partial}{\partial x}(4 - x^2 - y^2) = -2x$
$\frac{\partial g}{\partial y} = \frac{\partial}{\partial y}(4 - x^2 - y^2) = -2y$

**Step 3: Determine the domain $D$.**
The surface lies above the $xy$-plane, which means $z \ge 0$. So, $4 - x^2 - y^2 \ge 0$, which implies $x^2 + y^2 \le 4$. This is a circular disk of radius 2 centered at the origin in the $xy$-plane. So, $D$ is the region $x^2 + y^2 \le 4$.

**Step 4: Substitute into the integrand.**
First, we need to express the density function in terms of $x$ and $y$ using $z = g(x, y)$:
$\rho(x, y, g(x, y)) = x^2 + y^2$

Now, calculate the square root term:
$\sqrt{\left(\frac{\partial g}{\partial x}\right)^2 + \left(\frac{\partial g}{\partial y}\right)^2 + 1} = \sqrt{(-2x)^2 + (-2y)^2 + 1} = \sqrt{4x^2 + 4y^2 + 1}$

So, the integrand for our double integral becomes:
$(x^2 + y^2) \sqrt{4x^2 + 4y^2 + 1}$

**Step 5: Evaluate the double integral over $D$.**
The integral is $\iint_D (x^2 + y^2) \sqrt{4x^2 + 4y^2 + 1} \, dA$.
The domain $D$ is a disk, which strongly suggests switching to polar coordinates.
Let $x = r \cos \theta$ and $y = r \sin \theta$. Then $x^2 + y^2 = r^2$. The differential area $dA$ becomes $r dr d\theta$.
The limits of integration for $D$ are $0 \le r \le 2$ and $0 \le \theta \le 2\pi$.

The integral transforms to:
$\int_0^{2\pi} \int_0^2 (r^2) \sqrt{4r^2 + 1} \, r dr d\theta$
$= \int_0^{2\pi} \int_0^2 r^3 \sqrt{4r^2 + 1} \, dr d\theta$

To solve the inner integral $\int_0^2 r^3 \sqrt{4r^2 + 1} \, dr$, we can use a substitution. Let $u = 4r^2 + 1$. Then $du = 8r dr$, so $r dr = \frac{1}{8} du$.
Also, $r^2 = \frac{u-1}{4}$.
When $r=0$, $u = 4(0)^2 + 1 = 1$.
When $r=2$, $u = 4(2)^2 + 1 = 16 + 1 = 17$.

The integral becomes:
$\int_1^{17} \left(\frac{u-1}{4}\right) \sqrt{u} \left(\frac{1}{8} du\right) = \frac{1}{32} \int_1^{17} (u^{3/2} - u^{1/2}) du$
$= \frac{1}{32} \left[ \frac{2}{5}u^{5/2} - \frac{2}{3}u^{3/2} \right]_1^{17}$
$= \frac{1}{32} \left[ \left(\frac{2}{5}(17)^{5/2} - \frac{2}{3}(17)^{3/2}\right) - \left(\frac{2}{5}(1)^{5/2} - \frac{2}{3}(1)^{3/2}\right) \right]$
$= \frac{1}{32} \left[ \frac{2}{5}(17)^{5/2} - \frac{2}{3}(17)^{3/2} - \frac{2}{5} + \frac{2}{3} \right]$
$= \frac{1}{32} \left[ \frac{2}{5}(17)\sqrt{17^3} - \frac{2}{3}(17)\sqrt{17} - \frac{6}{15} + \frac{10}{15} \right]$
$= \frac{1}{32} \left[ \frac{34}{5}(17)\sqrt{17} - \frac{34}{3}\sqrt{17} + \frac{4}{15} \right]$
$= \frac{1}{32} \left[ \left(\frac{102}{15} - \frac{170}{15}\right)\sqrt{17} + \frac{4}{15} \right]$
$= \frac{1}{32} \left[ -\frac{68}{15}\sqrt{17} + \frac{4}{15} \right]$
$= \frac{1}{32} \cdot \frac{4}{15} \left[ -17\sqrt{17} + 1 \right]$
$= \frac{1}{120} (1 - 17\sqrt{17})$

This inner integral's result is a constant with respect to $\theta$. So the outer integral $\int_0^{2\pi} d\theta$ simply gives $2\pi$.

Total Mass $= 2\pi \times \frac{1}{120} (1 - 17\sqrt{17}) = \frac{\pi}{60} (1 - 17\sqrt{17})$

Wait a minute! Mass should be positive, and $1 - 17\sqrt{17}$ is clearly negative. What went wrong? Ah, the density $\rho = x^2 + y^2$ is always non-negative, and the square root term is always non-negative. The problem must be in my calculation of the integral or the setup.

Let's recheck the substitution.
$u = 4r^2 + 1$. $du = 8r dr$. $r^2 = (u-1)/4$.
Integral: $\int r^2 \sqrt{4r^2+1} \cdot r dr$.
Substitute: $\int \frac{u-1}{4} \sqrt{u} \frac{du}{8} = \frac{1}{32} \int (u^{3/2} - u^{1/2}) du$.
The antiderivative is $\frac{1}{32} [\frac{2}{5}u^{5/2} - \frac{2}{3}u^{3/2}]$.
Evaluating from $u=1$ to $u=17$:
$\frac{1}{32} [ (\frac{2}{5} 17^{5/2} - \frac{2}{3} 17^{3/2}) - (\frac{2}{5} - \frac{2}{3}) ]$
$= \frac{1}{32} [ \frac{2 \cdot 17^2 \sqrt{17}}{5} - \frac{2 \cdot 17 \sqrt{17}}{3} - (\frac{6-10}{15}) ]$
$= \frac{1}{32} [ \frac{578\sqrt{17}}{5} - \frac{34\sqrt{17}}{3} + \frac{4}{15} ]$
$= \frac{1}{32} [ \sqrt{17} (\frac{578}{5} - \frac{34}{3}) + \frac{4}{15} ]$
$= \frac{1}{32} [ \sqrt{17} (\frac{1734 - 170}{15}) + \frac{4}{15} ]$
$= \frac{1}{32} [ \sqrt{17} (\frac{1564}{15}) + \frac{4}{15} ]$
$= \frac{1}{32 \cdot 15} [ 1564\sqrt{17} + 4 ]$
$= \frac{4}{32 \cdot 15} [ 391\sqrt{17} + 1 ] = \frac{1}{8 \cdot 15} [ 391\sqrt{17} + 1 ] = \frac{1}{120} (1 + 391\sqrt{17})$

Okay, this result is positive, which makes sense for mass. The integral is:
$\int_0^{2\pi} \frac{1}{120} (1 + 391\sqrt{17}) d\theta = 2\pi \cdot \frac{1}{120} (1 + 391\sqrt{17}) = \frac{\pi}{60} (1 + 391\sqrt{17})$

This is a much more reasonable answer for mass! The key takeaway here is to be very careful with your integration, especially with substitutions. The polar coordinate transformation was crucial for simplifying the domain and the integrand.

**Why is this relatable?** Imagine coating this paraboloid cap with a material whose density depends on the square of the distance from the z-axis ($x^2+y^2$). To find the total amount of coating needed, you'd perform this surface integral.

### 6. Surface Integrals of Vector Fields

We can also integrate vector fields $\mathbf{F}$ over surfaces. For a surface $S$ defined by $z = g(x, y)$, the surface integral of $\mathbf{F}$ is defined as:

$\iint_S \mathbf{F} \cdot d\mathbf{S} = \iint_S \mathbf{F} \cdot \mathbf{n} \, dS$

where $\mathbf{n}$ is the outward unit normal vector to the surface.

To compute this, we use our parametrized surface $\mathbf{r}(x, y) = x\mathbf{i} + y\mathbf{j} + g(x, y)\mathbf{k}$. We already found $\mathbf{r}_x \times \mathbf{r}_y = -\frac{\partial g}{\partial x}\mathbf{i} - \frac{\partial g}{\partial y}\mathbf{j} + 1\mathbf{k}$.

The vector surface area element is $d\mathbf{S} = (\mathbf{r}_x \times \mathbf{r}_y) \, dA$.
So, $\mathbf{F} \cdot d\mathbf{S} = \mathbf{F} \cdot (\mathbf{r}_x \times \mathbf{r}_y) \, dA$.

If $\mathbf{F}(x, y, z) = P(x, y, z)\mathbf{i} + Q(x, y, z)\mathbf{j} + R(x, y, z)\mathbf{k}$, then:

$\iint_S \mathbf{F} \cdot d\mathbf{S} = \iint_D \left( P\left(\frac{\partial g}{\partial x}\right) + Q\left(\frac{\partial g}{\partial y}\right) - R \right) dA$

**Important Note:** The sign here depends on the orientation of the normal vector. The vector $\mathbf{r}_x \times \mathbf{r}_y = -\frac{\partial g}{\partial x}\mathbf{i} - \frac{\partial g}{\partial y}\mathbf{j} + 1\mathbf{k}$ points "upwards" (positive z-component) if the surface is oriented this way. If you need an "outward" normal and the surface is, say, the lower hemisphere of a sphere, you might need to reverse the sign. For $z = g(x, y)$ above the $xy$-plane, this form often gives the upward normal. However, always check the context or specific requirements for the normal vector's direction. Often, problem statements will clarify the required orientation.

**Let's re-derive the dot product carefully:**
$\mathbf{F} \cdot (\mathbf{r}_x \times \mathbf{r}_y) = (P\mathbf{i} + Q\mathbf{j} + R\mathbf{k}) \cdot (-\frac{\partial g}{\partial x}\mathbf{i} - \frac{\partial g}{\partial y}\mathbf{j} + 1\mathbf{k})$
$= P(-\frac{\partial g}{\partial x}) + Q(-\frac{\partial g}{\partial y}) + R(1)$
$= -P\frac{\partial g}{\partial x} - Q\frac{\partial g}{\partial y} + R$

So the integral becomes:
$\iint_S \mathbf{F} \cdot d\mathbf{S} = \iint_D \left( -P\frac{\partial g}{\partial x} - Q\frac{\partial g}{\partial y} + R \right) dA$

This is a critical formula for vector surface integrals.

**What does this represent physically?** Imagine fluid flowing through a porous membrane shaped like $z=g(x,y)$. The vector field $\mathbf{F}$ would represent the fluid velocity. The surface integral $\iint_S \mathbf{F} \cdot d\mathbf{S}$ would then calculate the *flux* of the fluid through the membrane – the net rate at which fluid is passing through the surface. This connects to **CO4** by applying surface integrals to understand physical flow phenomena.

### 7. Example: Flux Through a Parabolic Surface

Let's find the flux of the vector field $\mathbf{F}(x, y, z) = y\mathbf{i} - x\mathbf{j} + z\mathbf{k}$ through the surface $S$ given by $z = x^2 + y^2$, where $0 \le z \le 1$. We want the flux *upwards*.

**Step 1: Identify the surface and vector field.**
Surface: $z = x^2 + y^2$. So, $g(x, y) = x^2 + y^2$.
Vector field: $\mathbf{F}(x, y, z) = y\mathbf{i} - x\mathbf{j} + z\mathbf{k}$. Thus, $P=y$, $Q=-x$, $R=z$.

**Step 2: Find partial derivatives of $g(x, y)$.**
$\frac{\partial g}{\partial x} = 2x$
$\frac{\partial g}{\partial y} = 2y$

**Step 3: Determine the domain $D$.**
The condition $0 \le z \le 1$ means $0 \le x^2 + y^2 \le 1$. This is a circular disk of radius 1 centered at the origin in the $xy$-plane. So, $D$ is the region $x^2 + y^2 \le 1$.

**Step 4: Set up the integral.**
We need to evaluate $\iint_D \left( -P\frac{\partial g}{\partial x} - Q\frac{\partial g}{\partial y} + R \right) dA$.
Substitute $P=y$, $Q=-x$, $R=z$, and $\frac{\partial g}{\partial x}=2x$, $\frac{\partial g}{\partial y}=2y$.
Crucially, we must substitute $z$ with $g(x, y) = x^2 + y^2$ in the term $R$.

The integrand becomes:
$-(y)(2x) - (-x)(2y) + (x^2 + y^2)$
$= -2xy + 2xy + x^2 + y^2$
$= x^2 + y^2$

The integral is $\iint_D (x^2 + y^2) \, dA$.

**Step 5: Evaluate the double integral.**
Again, $D$ is a unit disk, so polar coordinates are ideal.
$x^2 + y^2 = r^2$, and $dA = r dr d\theta$.
Limits: $0 \le r \le 1$, $0 \le \theta \le 2\pi$.

$\int_0^{2\pi} \int_0^1 (r^2) \, r dr d\theta$
$= \int_0^{2\pi} \int_0^1 r^3 \, dr d\theta$

Inner integral: $\int_0^1 r^3 \, dr = \left[ \frac{r^4}{4} \right]_0^1 = \frac{1}{4} - 0 = \frac{1}{4}$.

Outer integral: $\int_0^{2\pi} \frac{1}{4} \, d\theta = \frac{1}{4} [\theta]_0^{2\pi} = \frac{1}{4} (2\pi - 0) = \frac{2\pi}{4} = \frac{\pi}{2}$.

So, the flux of $\mathbf{F}$ through the given surface, oriented upwards, is $\frac{\pi}{2}$.

**Think about this:** The vector field $\mathbf{F}$ represents, say, a flow of something. The surface is a curved boundary. The integral calculates how much of that flow passes *through* the boundary. If $\mathbf{F}$ was an electric field, this would be the electric flux. This is a direct application of **CO4**.

### 8. Connection to Green's Theorem (Briefly)

While our focus is on surface integrals for $z=g(x,y)$ and their direct computation, it's worth noting that Green's Theorem connects line integrals around a closed curve $C$ in the $xy$-plane to a double integral over the region $D$ enclosed by $C$. Surface integrals are the 3D generalization of this. Stokes' Theorem, for instance, relates a surface integral of the curl of a vector field to a line integral of the vector field around the boundary of the surface. Understanding surface integrals like these is fundamental to grasping these more advanced theorems.

### 9. Summary and Key Takeaways

*   **Surface integrals** extend integration from curves to surfaces.
*   For surfaces of the form $z = g(x, y)$, we parametrize using $\mathbf{r}(x, y) = x\mathbf{i} + y\mathbf{j} + g(x, y)\mathbf{k}$.
*   The differential surface area element is $dS = \sqrt{\left(\frac{\partial g}{\partial x}\right)^2 + \left(\frac{\partial g}{\partial y}\right)^2 + 1} \, dA$. This is a critical formula derived from the magnitude of the cross product of partial derivatives.
*   **Scalar surface integral:** $\iint_S f \, dS = \iint_D f(x, y, g(x, y)) \sqrt{\left(\frac{\partial g}{\partial x}\right)^2 + \left(\frac{\partial g}{\partial y}\right)^2 + 1} \, dA$.
*   **Vector surface integral (Flux):** $\iint_S \mathbf{F} \cdot d\mathbf{S} = \iint_D \left( -P\frac{\partial g}{\partial x} - Q\frac{\partial g}{\partial y} + R \right) dA$, where $\mathbf{F} = P\mathbf{i} + Q\mathbf{j} + R\mathbf{k}$. Remember to substitute $z=g(x,y)$ in $R$ if it depends on $z$.
*   **Common pitfalls:** Forgetting to substitute $z=g(x,y)$ in the integrand, errors in calculating partial derivatives, incorrect determination of the domain $D$, and mistakes in evaluating the final double integral (especially with coordinate transformations).
*   **Exam relevance:** You'll definitely be asked to compute scalar and vector surface integrals over surfaces of this form. Pay close attention to the wording to determine if it's a scalar integral (mass, area, etc.) or a vector integral (flux).

Remember, the core idea is to convert a 3D surface integral into a 2D planar integral over a region $D$. Mastering the formula for $dS$ and the correct integrand for vector fields is key. These concepts are directly building blocks for **CO1, CO3, and CO4**, enabling us to analyze multivariable functions, understand vector functions, and apply surface/volume integral concepts.

### Sample Questions with Answers

**Question 1 (Conceptual):**
When evaluating a surface integral of a scalar function $f(x,y,z)$ over a surface $S$ given by $z = g(x,y)$, what is the fundamental transformation that allows us to convert the 3D surface integral into a 2D double integral? Explain the role of the differential surface area element $dS$.

**Answer:**
The fundamental transformation is the use of a parametrization of the surface $S$. For a surface $z = g(x,y)$, we use the parametrization $\mathbf{r}(x,y) = x\mathbf{i} + y\mathbf{j} + g(x,y)\mathbf{k}$, where $(x,y)$ vary over a domain $D$ in the $xy$-plane. This allows us to express the surface integral as a double integral over $D$.

The differential surface area element $dS$ plays a crucial role by relating an infinitesimal area $dA = dx dy$ in the parameter domain $D$ to the corresponding infinitesimal surface area on $S$. It is given by $dS = \sqrt{\left(\frac{\partial g}{\partial x}\right)^2 + \left(\frac{\partial g}{\partial y}\right)^2 + 1} \, dA$. This factor accounts for the "slant" or curvature of the surface. The scalar surface integral is then computed as $\iint_D f(x, y, g(x, y)) \sqrt{\left(\frac{\partial g}{\partial x}\right)^2 + \left(\frac{\partial g}{\partial y}\right)^2 + 1} \, dA$.

**Question 2 (Exam-oriented - Scalar Surface Integral):**
Find the surface area of the part of the paraboloid $z = x^2 + y^2$ that lies below the plane $z = 4$.

**Answer:**
To find the surface area, we integrate the scalar function $f(x, y, z) = 1$ over the surface.
The surface is given by $z = g(x, y) = x^2 + y^2$.

1.  **Partial derivatives of $g$:**
    $\frac{\partial g}{\partial x} = 2x$
    $\frac{\partial g}{\partial y} = 2y$

2.  **Differential surface area element $dS$:**
    $dS = \sqrt{(2x)^2 + (2y)^2 + 1} \, dA = \sqrt{4x^2 + 4y^2 + 1} \, dA$.

3.  **Domain $D$:**
    The surface lies below $z=4$, so $x^2 + y^2 \le 4$. This is a disk of radius 2 centered at the origin in the $xy$-plane.

4.  **Surface Area Integral:**
    Surface Area $= \iint_S 1 \, dS = \iint_D \sqrt{4x^2 + 4y^2 + 1} \, dA$.

5.  **Evaluate the integral using polar coordinates:**
    Let $x = r \cos \theta$, $y = r \sin \theta$. Then $x^2 + y^2 = r^2$, $dA = r dr d\theta$.
    The domain $D$ is $0 \le r \le 2$, $0 \le \theta \le 2\pi$.
    The integral becomes:
    $\int_0^{2\pi} \int_0^2 \sqrt{4r^2 + 1} \, r dr d\theta$.

    To solve the inner integral $\int_0^2 \sqrt{4r^2 + 1} \, r dr$:
    Let $u = 4r^2 + 1$. Then $du = 8r dr$, so $r dr = \frac{1}{8} du$.
    When $r=0$, $u=1$. When $r=2$, $u=4(2^2)+1=17$.
    The integral is $\int_1^{17} \sqrt{u} \, \frac{1}{8} du = \frac{1}{8} \int_1^{17} u^{1/2} du$.
    $= \frac{1}{8} \left[ \frac{2}{3} u^{3/2} \right]_1^{17} = \frac{1}{12} \left[ u^{3/2} \right]_1^{17}$
    $= \frac{1}{12} (17^{3/2} - 1^{3/2}) = \frac{1}{12} (17\sqrt{17} - 1)$.

    Now, integrate with respect to $\theta$:
    $\int_0^{2\pi} \frac{1}{12} (17\sqrt{17} - 1) \, d\theta = \frac{1}{12} (17\sqrt{17} - 1) [\theta]_0^{2\pi}$
    $= \frac{1}{12} (17\sqrt{17} - 1) (2\pi) = \frac{\pi}{6} (17\sqrt{17} - 1)$.

    Thus, the surface area is $\frac{\pi}{6} (17\sqrt{17} - 1)$.

**Question 3 (Exam-oriented - Vector Surface Integral):**
Calculate the flux of the vector field $\mathbf{F}(x, y, z) = x\mathbf{i} + y\mathbf{j} + z\mathbf{k}$ through the surface $S$ given by $z = 1 - x - y$, for $x \ge 0, y \ge 0, z \ge 0$. Assume the flux is in the direction of the outward normal.

**Answer:**
The surface is $z = g(x, y) = 1 - x - y$.
The vector field is $\mathbf{F}(x, y, z) = P\mathbf{i} + Q\mathbf{j} + R\mathbf{k}$ with $P=x$, $Q=y$, $R=z$.

1.  **Partial derivatives of $g$:**
    $\frac{\partial g}{\partial x} = -1$
    $\frac{\partial g}{\partial y} = -1$

2.  **Check the orientation of the normal vector:**
    The vector $\mathbf{r}_x \times \mathbf{r}_y = -\frac{\partial g}{\partial x}\mathbf{i} - \frac{\partial g}{\partial y}\mathbf{j} + 1\mathbf{k} = -(-1)\mathbf{i} - (-1)\mathbf{j} + 1\mathbf{k} = \mathbf{i} + \mathbf{j} + \mathbf{k}$.
    This vector has a positive z-component, indicating an upward (or outward if the surface is above the xy-plane) normal. The surface $z = 1 - x - y$ in the first octant ($x \ge 0, y \ge 0, z \ge 0$) indeed projects onto a region in the xy-plane, and this normal points away from the xy-plane, which is generally considered the "outward" direction for such a surface segment.

3.  **Domain $D$:**
    The conditions $x \ge 0$, $y \ge 0$, and $z = 1 - x - y \ge 0$ define the domain $D$ in the $xy$-plane.
    $1 - x - y \ge 0 \implies x + y \le 1$.
    So, $D$ is a triangle with vertices $(0,0)$, $(1,0)$, and $(0,1)$.

4.  **Set up the flux integral:**
    $\iint_S \mathbf{F} \cdot d\mathbf{S} = \iint_D \left( -P\frac{\partial g}{\partial x} - Q\frac{\partial g}{\partial y} + R \right) dA$.
    Substitute $P=x, Q=y, R=z, \frac{\partial g}{\partial x}=-1, \frac{\partial g}{\partial y}=-1$.
    We must also substitute $z$ with $g(x, y) = 1 - x - y$.
    Integrand: $-(x)(-1) - (y)(-1) + (1 - x - y)$
    $= x + y + 1 - x - y = 1$.

5.  **Evaluate the integral:**
    Flux $= \iint_D 1 \, dA$.
    This is simply the area of the domain $D$. The domain $D$ is a right triangle with base 1 and height 1.
    Area of $D = \frac{1}{2} \times \text{base} \times \text{height} = \frac{1}{2} \times 1 \times 1 = \frac{1}{2}$.

    Alternatively, using iterated integrals for $D$:
    $\int_0^1 \int_0^{1-x} 1 \, dy dx = \int_0^1 [y]_0^{1-x} dx = \int_0^1 (1-x) dx$
    $= [x - \frac{x^2}{2}]_0^1 = (1 - \frac{1}{2}) - (0 - 0) = \frac{1}{2}$.

    The flux is $\frac{1}{2}$.

This concludes our session on surface integrals over surfaces of the form $z = g(x, y)$. Remember to practice these steps, especially the derivation of $dS$ and the setup for vector field integrals. Good luck with your studies!
