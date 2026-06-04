---
title: "Triple integrals"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 2"
module: "Module 2: Double integrals"
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da1d2"
status: "completed"
scrapedAt: "2026-05-23T17:40:42.197Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 2
## Module 2: Double Integrals
### Topic: Triple Integrals

Hello everyone, and welcome back! Today, we're embarking on a journey into three dimensions with **Triple Integrals**. We've already built a solid foundation with double integrals, where we explored areas and volumes in 2D. Now, we're extending that concept to calculate **volumes** and even **masses** of three-dimensional objects, which is incredibly relevant for our work in electrical and physical sciences. Think about calculating the total charge distribution in a complex solid object or the total magnetic flux through a 3D region – that's where triple integrals shine!

This topic directly connects with **Course Outcome 4 (CO4)**: "Apply the concepts of surface and volume integrals and to learn their inter-relations and applications." Triple integrals are our fundamental tool for understanding and calculating **volume integrals**, which are a cornerstone of physical science applications. As we progress, you'll also see how they relate to surface integrals, as hinted at in CO4.

Our primary textbook for this exploration is **Calculus by H. Anton, I. Biven, S. Davis (12th edition)**, and we'll also draw insights from excellent resources like **Thomas' Calculus** and **Advanced Engineering Mathematics by Kreyszig**.

### 1. What Exactly is a Triple Integral?

So, what *is* a triple integral? Imagine you have a three-dimensional region in space, let's call it $E$. Instead of summing up infinitesimal areas (like in double integrals), we're now summing up infinitesimal **volumes**, $dV$, multiplied by some function, $f(x, y, z)$, defined over that region.

Formally, a triple integral of a function $f(x, y, z)$ over a solid region $E$ is denoted as:

$$ \iiint_E f(x, y, z) \, dV $$

Think of $f(x, y, z)$ as a "density" function. If $f(x, y, z) = 1$, then the triple integral simply gives us the **volume** of the region $E$. This is a direct extension of how $\iint_R dA$ gives the area of a 2D region. If $f(x, y, z)$ represents the **mass density** at a point $(x, y, z)$ within the object $E$, then $\iiint_E f(x, y, z) \, dV$ calculates the **total mass** of the object. This is a crucial application in physical science!

### 2. Setting Up Triple Integrals: The Fubini Theorem for Triple Integrals

Just like with double integrals, we evaluate triple integrals by breaking them down into a sequence of single integrals, using iterated integration. This is where **Fubini's Theorem** comes into play again, but now for three variables.

For a rectangular box (a simple cuboid) $E$ defined by $a \le x \le b$, $c \le y \le d$, and $e \le z \le k$, the triple integral can be computed in any order of integration ($dz \, dy \, dx$, $dx \, dy \, dz$, etc.) as long as the limits are constant:

$$ \iiint_E f(x, y, z) \, dV = \int_a^b \int_c^d \int_e^k f(x, y, z) \, dz \, dy \, dx $$

The order of integration ($dz \, dy \, dx$, $dy \, dz \, dx$, etc.) doesn't matter for a rectangular box, as long as the limits are constants.

**Example: Volume of a Box**
Let's find the volume of a box defined by $0 \le x \le 2$, $0 \le y \le 3$, and $0 \le z \le 4$. We use $f(x, y, z) = 1$ for volume.

$$ V = \int_0^2 \int_0^3 \int_0^4 1 \, dz \, dy \, dx $$

Let's evaluate this step-by-step:

1.  **Innermost integral (with respect to z):**
    $$ \int_0^4 1 \, dz = [z]_0^4 = 4 - 0 = 4 $$

2.  **Middle integral (with respect to y):**
    $$ \int_0^3 4 \, dy = [4y]_0^3 = 4(3) - 4(0) = 12 $$

3.  **Outermost integral (with respect to x):**
    $$ \int_0^2 12 \, dx = [12x]_0^2 = 12(2) - 12(0) = 24 $$

So, the volume is 24 cubic units. Of course, for a box, we know this is just length × width × height (2 × 3 × 4 = 24). But this demonstrates the process for more complex regions.

### 3. Triple Integrals Over General Solid Regions

The real power comes when our region $E$ isn't a simple box. This is where things get interesting and require careful visualization. We'll be dealing with regions bounded by surfaces.

There are typically three types of regions we consider, analogous to how we handled areas in double integrals:

*   **Type I Region:** Bounded below by a surface $z = g_1(x, y)$ and above by a surface $z = g_2(x, y)$, over a region $R$ in the $xy$-plane.
    The integral looks like:
    $$ \iiint_E f(x, y, z) \, dV = \iint_R \left( \int_{g_1(x,y)}^{g_2(x,y)} f(x, y, z) \, dz \right) \, dA $$
    Here, $dA$ can be $dx \, dy$ or $dy \, dx$, and the limits for $x$ and $y$ are determined by the region $R$ in the $xy$-plane.

*   **Type II Region:** Bounded on one side by a surface $y = h_1(x, z)$ and on the other side by $y = h_2(x, z)$, over a region $S$ in the $xz$-plane.
    The integral looks like:
    $$ \iiint_E f(x, y, z) \, dV = \iint_S \left( \int_{h_1(x,z)}^{h_2(x,z)} f(x, y, z) \, dy \right) \, dA $$
    Here, $dA$ can be $dx \, dz$ or $dz \, dx$, and the limits for $x$ and $z$ are determined by the region $S$ in the $xz$-plane.

*   **Type III Region:** Bounded on one side by $x = k_1(y, z)$ and on the other side by $x = k_2(y, z)$, over a region $T$ in the $yz$-plane.
    The integral looks like:
    $$ \iiint_E f(x, y, z) \, dV = \iint_T \left( \int_{k_1(y,z)}^{k_2(y,z)} f(x, y, z) \, dx \right) \, dA $$
    Here, $dA$ can be $dy \, dz$ or $dz \, dy$, and the limits for $y$ and $z$ are determined by the region $T$ in the $yz$-plane.

**Which order of integration to choose?** This is a crucial practical point, often tested in exams! You choose the order that simplifies the integration and allows you to set up the limits most easily. Often, visualizing the region and projecting it onto one of the coordinate planes (xy, xz, or yz) is key.

**Analogy:** Imagine you're trying to measure the amount of water in a swimming pool with a complex, irregular shape.
*   If you integrate with respect to depth ($z$) first, you're calculating the volume of water at a specific $(x, y)$ horizontal location. Then you sum these up over the entire surface area of the pool ($dA$). This corresponds to a Type I region setup.
*   If you integrate with respect to width ($y$) first, you're calculating the volume of water along a specific $x-z$ plane. Then you sum these up over the entire $xz$ cross-section. This is a Type II setup.

**Example: Volume Under a Paraboloid**
Let's find the volume of the solid bounded above by the plane $z = 4$ and below by the paraboloid $z = x^2 + y^2$.

This is a Type I region. The upper surface is $z = 4$. The lower surface is $z = x^2 + y^2$. So, $g_2(x, y) = 4$ and $g_1(x, y) = x^2 + y^2$.
To find the region $R$ in the $xy$-plane, we look at where the bounding surfaces intersect. Setting $z=z$:
$x^2 + y^2 = 4$
This is a circle of radius 2 centered at the origin in the $xy$-plane. So, $R$ is the disk $x^2 + y^2 \le 4$.

The integral is:
$$ V = \iint_R \left( \int_{x^2+y^2}^4 \, dz \right) \, dA $$

First, let's do the inner integral with respect to $z$:
$$ \int_{x^2+y^2}^4 \, dz = [z]_{x^2+y^2}^4 = 4 - (x^2 + y^2) $$

Now we need to evaluate:
$$ V = \iint_R (4 - (x^2 + y^2)) \, dA $$
where $R$ is the disk $x^2 + y^2 \le 4$.

For a circular region, **cylindrical coordinates** are usually our best friend. Remember from double integrals how they simplify calculations over disks and circles?
Recall: $x = r \cos \theta$, $y = r \sin \theta$, $x^2 + y^2 = r^2$, $dA = r \, dr \, d\theta$.
For the disk $x^2 + y^2 \le 4$, the limits are $0 \le r \le 2$ and $0 \le \theta \le 2\pi$.

So, the integral becomes:
$$ V = \int_0^{2\pi} \int_0^2 (4 - r^2) \, r \, dr \, d\theta $$

Let's evaluate the inner integral with respect to $r$:
$$ \int_0^2 (4r - r^3) \, dr = \left[ 2r^2 - \frac{r^4}{4} \right]_0^2 = \left( 2(2^2) - \frac{2^4}{4} \right) - (0) = (2(4) - \frac{16}{4}) = 8 - 4 = 4 $$

Now, the outer integral with respect to $\theta$:
$$ \int_0^{2\pi} 4 \, d\theta = [4\theta]_0^{2\pi} = 4(2\pi) - 4(0) = 8\pi $$

So, the volume of the solid is $8\pi$ cubic units. This is a classic problem, and understanding how to set it up and switch to cylindrical coordinates is key for exams!

### 4. Cylindrical Coordinates: A Powerful Tool

As you saw in the example above, cylindrical coordinates are often indispensable for triple integrals, especially when dealing with regions that have rotational symmetry.

**Recall:**
*   $x = r \cos \theta$
*   $y = r \sin \theta$
*   $z = z$
*   $r^2 = x^2 + y^2$
*   $dV$ in cylindrical coordinates is $r \, dz \, dr \, d\theta$. The Jacobian $r$ is crucial! Don't forget it.

**When to use cylindrical coordinates?**
*   When the region of integration is a cylinder, cone, or any shape with rotational symmetry around the z-axis.
*   When the integrand involves $x^2 + y^2$ or terms that simplify with $r^2$.

**Example: Mass of a Cone**
Let's find the mass of a solid cone with height $H$ and base radius $R$, assuming a constant density $\rho_0$.
The cone can be described as the region $0 \le z \le H(1 - \frac{r}{R})$, where $0 \le r \le R$ and $0 \le \theta \le 2\pi$.
The mass $M$ is given by $\iiint_E \rho_0 \, dV$.

In cylindrical coordinates:
$$ M = \int_0^{2\pi} \int_0^R \int_0^{H(1 - r/R)} \rho_0 \, r \, dz \, dr \, d\theta $$

Let's evaluate:
1.  **Innermost integral (z):**
    $$ \int_0^{H(1 - r/R)} \rho_0 r \, dz = \rho_0 r [z]_0^{H(1 - r/R)} = \rho_0 r H \left(1 - \frac{r}{R}\right) = \rho_0 H \left(r - \frac{r^2}{R}\right) $$

2.  **Middle integral (r):**
    $$ \int_0^R \rho_0 H \left(r - \frac{r^2}{R}\right) \, dr = \rho_0 H \left[ \frac{r^2}{2} - \frac{r^3}{3R} \right]_0^R $$
    $$ = \rho_0 H \left( \frac{R^2}{2} - \frac{R^3}{3R} \right) = \rho_0 H \left( \frac{R^2}{2} - \frac{R^2}{3} \right) = \rho_0 H R^2 \left( \frac{3-2}{6} \right) = \frac{1}{6} \rho_0 H R^2 $$

3.  **Outermost integral ($\theta$):**
    $$ \int_0^{2\pi} \frac{1}{6} \rho_0 H R^2 \, d\theta = \frac{1}{6} \rho_0 H R^2 [\theta]_0^{2\pi} = \frac{1}{6} \rho_0 H R^2 (2\pi) = \frac{1}{3} \rho_0 H R^2 \pi $$

So, the mass of the cone is $\frac{1}{3} \pi R^2 H \rho_0$. This makes sense: it's density times the volume of the cone ($\frac{1}{3} \pi R^2 H$). Always check if your result makes physical sense!

### 5. Spherical Coordinates: For Spheres and More

Just as cylindrical coordinates are useful for rotational symmetry around the z-axis, **spherical coordinates** are perfect for regions with spherical symmetry.

**Recall:**
*   $x = \rho \sin \phi \cos \theta$
*   $y = \rho \sin \phi \sin \theta$
*   $z = \rho \cos \phi$
*   $\rho^2 = x^2 + y^2 + z^2$ (distance from origin)
*   $\phi$ is the angle from the positive z-axis (polar angle), $0 \le \phi \le \pi$.
*   $\theta$ is the angle from the positive x-axis in the xy-plane (azimuthal angle), $0 \le \theta \le 2\pi$.
*   $dV$ in spherical coordinates is $\rho^2 \sin \phi \, d\rho \, d\phi \, d\theta$. The Jacobian is $\rho^2 \sin \phi$. **Do not forget these terms!**

**When to use spherical coordinates?**
*   When the region of integration is a sphere, hemisphere, or a sector of a sphere.
*   When the integrand involves $x^2 + y^2 + z^2$ or terms that simplify with $\rho^2$.
*   For problems involving solid angles or certain types of charge/mass distributions with spherical symmetry.

**Example: Volume of a Sphere**
Let's find the volume of a sphere of radius $a$. We use $f(\rho, \phi, \theta) = 1$.
The sphere of radius $a$ is described by $0 \le \rho \le a$, $0 \le \phi \le \pi$, $0 \le \theta \le 2\pi$.

$$ V = \int_0^{2\pi} \int_0^{\pi} \int_0^a \rho^2 \sin \phi \, d\rho \, d\phi \, d\theta $$

Let's break this down:
1.  **Innermost integral ($\rho$):**
    $$ \int_0^a \rho^2 \sin \phi \, d\rho = \sin \phi \left[ \frac{\rho^3}{3} \right]_0^a = \sin \phi \left( \frac{a^3}{3} - 0 \right) = \frac{a^3}{3} \sin \phi $$

2.  **Middle integral ($\phi$):**
    $$ \int_0^{\pi} \frac{a^3}{3} \sin \phi \, d\phi = \frac{a^3}{3} [-\cos \phi]_0^{\pi} = \frac{a^3}{3} (-\cos \pi - (-\cos 0)) $$
    $$ = \frac{a^3}{3} (-(-1) - (-1)) = \frac{a^3}{3} (1 + 1) = \frac{2a^3}{3} $$

3.  **Outermost integral ($\theta$):**
    $$ \int_0^{2\pi} \frac{2a^3}{3} \, d\theta = \frac{2a^3}{3} [\theta]_0^{2\pi} = \frac{2a^3}{3} (2\pi - 0) = \frac{4\pi a^3}{3} $$

And there it is – the familiar formula for the volume of a sphere! This confirms that our understanding of spherical coordinates and their $dV$ is correct.

**Example: Mass of a Hemisphere with Varying Density**
Suppose we have a hemisphere of radius $R$ centered at the origin, lying above the $xy$-plane. Let its density be $\rho(x, y, z) = k z$, where $k$ is a constant. We want to find its mass.
The hemisphere is described by $0 \le \rho \le R$, $0 \le \phi \le \pi/2$, $0 \le \theta \le 2\pi$.
The density in spherical coordinates is $\rho(x, y, z) = k z = k (\rho \cos \phi)$.

The mass $M$ is $\iiint_E \rho(x, y, z) \, dV$:
$$ M = \int_0^{2\pi} \int_0^{\pi/2} \int_0^R (k \rho \cos \phi) \, (\rho^2 \sin \phi) \, d\rho \, d\phi \, d\theta $$
$$ M = k \int_0^{2\pi} \int_0^{\pi/2} \int_0^R \rho^3 \cos \phi \sin \phi \, d\rho \, d\phi \, d\theta $$

1.  **Innermost integral ($\rho$):**
    $$ \int_0^R \rho^3 \cos \phi \sin \phi \, d\rho = \cos \phi \sin \phi \left[ \frac{\rho^4}{4} \right]_0^R = \cos \phi \sin \phi \frac{R^4}{4} $$

2.  **Middle integral ($\phi$):**
    This one looks a bit trickier. We have $\cos \phi \sin \phi$. We can use the substitution $u = \sin \phi$, then $du = \cos \phi \, d\phi$. When $\phi=0$, $u=0$. When $\phi=\pi/2$, $u=1$.
    Alternatively, we can use the identity $\sin(2\phi) = 2 \sin \phi \cos \phi$, so $\cos \phi \sin \phi = \frac{1}{2} \sin(2\phi)$.
    Let's use the substitution $u = \sin \phi$:
    $$ \int_0^{\pi/2} \left(\frac{R^4}{4} \cos \phi \sin \phi\right) \, d\phi = \frac{R^4}{4} \int_0^{\pi/2} \cos \phi \sin \phi \, d\phi $$
    $$ = \frac{R^4}{4} \left[ \frac{\sin^2 \phi}{2} \right]_0^{\pi/2} = \frac{R^4}{4} \left( \frac{\sin^2(\pi/2)}{2} - \frac{\sin^2(0)}{2} \right) $$
    $$ = \frac{R^4}{4} \left( \frac{1^2}{2} - \frac{0^2}{2} \right) = \frac{R^4}{4} \left( \frac{1}{2} \right) = \frac{R^4}{8} $$

3.  **Outermost integral ($\theta$):**
    $$ \int_0^{2\pi} k \left(\frac{R^4}{8}\right) \, d\theta = k \frac{R^4}{8} [\theta]_0^{2\pi} = k \frac{R^4}{8} (2\pi) = \frac{k \pi R^4}{4} $$

So, the mass of the hemisphere is $\frac{k \pi R^4}{4}$. This demonstrates how varying density affects the total mass calculation.

### 6. Change of Variables in Triple Integrals

Just like in double integrals, we can use a change of variables for triple integrals to simplify both the region of integration and the integrand. If we have a transformation from $(u, v, w)$ to $(x, y, z)$:
$x = x(u, v, w)$
$y = y(u, v, w)$
$z = z(u, v, w)$

Then, the triple integral $\iiint_E f(x, y, z) \, dV$ becomes $\iiint_G f(x(u, v, w), y(u, v, w), z(u, v, w)) \, |J| \, du \, dv \, dw$, where $G$ is the region in the $uvw$-space and $J$ is the Jacobian of the transformation:

$$ J = \det \begin{pmatrix} \frac{\partial x}{\partial u} & \frac{\partial x}{\partial v} & \frac{\partial x}{\partial w} \\ \frac{\partial y}{\partial u} & \frac{\partial y}{\partial v} & \frac{\partial y}{\partial w} \\ \frac{\partial z}{\partial u} & \frac{\partial z}{\partial v} & \frac{\partial z}{\partial w} \end{pmatrix} $$

We've already implicitly used this when we discussed cylindrical and spherical coordinates, as they are specific transformations from $(r, \theta, z)$ and $(\rho, \phi, \theta)$ to $(x, y, z)$, respectively, and their Jacobians are the factors we included in $dV$.

**Key takeaway:** Using the correct coordinate system (Cartesian, cylindrical, or spherical) and applying the appropriate Jacobian is paramount for successful evaluation of triple integrals. When in doubt, sketching the region is your best friend!

### Connecting to Course Outcomes:

*   **CO4:** Triple integrals are the direct mechanism for **volume integrals**. Calculating volumes (when $f=1$) and masses (when $f=$ density) are fundamental applications. We've seen how to set up these integrals over various regions and utilize different coordinate systems to simplify them. The relationship between triple integrals and their applications in physics (like mass distribution, charge distribution) is very clear.

### Exam Tips:

*   **Visualization is Key:** Be able to sketch the 3D region. Project it onto the $xy$, $xz$, or $yz$ planes to determine the limits of integration.
*   **Choice of Coordinates:** If the region has symmetry (cylindrical, spherical), *always* consider switching to that coordinate system. This often turns a very difficult integral into a manageable one.
*   **Don't Forget the Jacobian:** When changing to cylindrical or spherical coordinates, remember the extra factor in $dV$: $r$ for cylindrical, and $\rho^2 \sin \phi$ for spherical. This is a common mistake.
*   **Order of Integration:** Think about which order of integration ($dz \, dy \, dx$, $dx \, dy \, dz$, etc.) will make the integration process easiest. Sometimes you might need to change the order, which requires careful re-parameterization of the region.
*   **Fubini's Theorem:** For rectangular regions, the order doesn't matter. For general regions, you integrate with respect to one variable at a time, treating the others as constants for that step.

### Summary:

Triple integrals extend the concepts of integration to three dimensions, allowing us to calculate volumes, masses, and other physical quantities over solid regions. The key steps involve:
1.  Defining the region of integration $E$.
2.  Choosing the appropriate coordinate system (Cartesian, cylindrical, or spherical).
3.  Setting up the limits of integration based on the region's boundaries.
4.  Including the correct Jacobian factor in $dV$.
5.  Evaluating the iterated integral.

Remember, practice is vital. The more regions you visualize and the more integrals you set up and solve, the more comfortable you'll become with this powerful technique!

---

## Sample Questions with Answers:

**1. Conceptual Question:**
What is the primary physical interpretation of a triple integral $\iiint_E f(x, y, z) \, dV$ when $f(x, y, z)$ represents the density of a solid object occupying region $E$?

**Answer:**
If $f(x, y, z)$ represents the density at a point $(x, y, z)$ within a solid region $E$, then the triple integral $\iiint_E f(x, y, z) \, dV$ calculates the **total mass** of the solid object. This is because we are summing up the infinitesimal mass elements, $\rho \, dV$, over the entire volume of the object.

**2. Exam-Oriented Question:**
Evaluate the triple integral $\iiint_E z \, dV$, where $E$ is the solid region bounded by the cylinder $x^2 + y^2 = 1$ and the planes $z=0$ and $z=y+2$.

**Reasoning and Solution:**
The region $E$ is a cylinder with radius 1, extending from the $xy$-plane ($z=0$) up to the plane $z=y+2$. The base of the cylinder in the $xy$-plane is the disk $x^2 + y^2 \le 1$.

Given the cylindrical nature of the base and the integrand $z$ (which is simple), cylindrical coordinates are the most suitable choice.
In cylindrical coordinates:
*   $x = r \cos \theta$
*   $y = r \sin \theta$
*   $z = z$
*   $dV = r \, dz \, dr \, d\theta$

The region $E$ can be described as:
*   $0 \le r \le 1$ (radius of the cylinder)
*   $0 \le \theta \le 2\pi$ (full circle for the base)
*   $0 \le z \le y+2$. Substituting $y = r \sin \theta$, the upper limit for $z$ becomes $r \sin \theta + 2$.

The integral becomes:
$$ \iiint_E z \, dV = \int_0^{2\pi} \int_0^1 \int_0^{r \sin \theta + 2} z \cdot r \, dz \, dr \, d\theta $$

Let's evaluate step-by-step:

*   **Innermost integral (z):**
    $$ \int_0^{r \sin \theta + 2} z \, r \, dz = r \int_0^{r \sin \theta + 2} z \, dz = r \left[ \frac{z^2}{2} \right]_0^{r \sin \theta + 2} $$
    $$ = r \left( \frac{(r \sin \theta + 2)^2}{2} - 0 \right) = \frac{r}{2} (r^2 \sin^2 \theta + 4r \sin \theta + 4) $$
    $$ = \frac{r^3}{2} \sin^2 \theta + 2r^2 \sin \theta + 2r $$

*   **Middle integral (r):**
    $$ \int_0^1 \left( \frac{r^3}{2} \sin^2 \theta + 2r^2 \sin \theta + 2r \right) \, dr $$
    $$ = \left[ \frac{r^4}{8} \sin^2 \theta + \frac{2r^3}{3} \sin \theta + r^2 \right]_0^1 $$
    $$ = \left( \frac{1}{8} \sin^2 \theta + \frac{2}{3} \sin \theta + 1 \right) - (0) $$
    $$ = \frac{1}{8} \sin^2 \theta + \frac{2}{3} \sin \theta + 1 $$

*   **Outermost integral ($\theta$):**
    $$ \int_0^{2\pi} \left( \frac{1}{8} \sin^2 \theta + \frac{2}{3} \sin \theta + 1 \right) \, d\theta $$

    We need to integrate each term:
    *   $\int_0^{2\pi} 1 \, d\theta = [\theta]_0^{2\pi} = 2\pi$.
    *   $\int_0^{2\pi} \frac{2}{3} \sin \theta \, d\theta = \frac{2}{3} [-\cos \theta]_0^{2\pi} = \frac{2}{3} (-1 - (-1)) = 0$. (Integral of sine over a full period is zero).
    *   $\int_0^{2\pi} \frac{1}{8} \sin^2 \theta \, d\theta$. Use the identity $\sin^2 \theta = \frac{1 - \cos(2\theta)}{2}$.
        $$ \frac{1}{8} \int_0^{2\pi} \frac{1 - \cos(2\theta)}{2} \, d\theta = \frac{1}{16} \int_0^{2\pi} (1 - \cos(2\theta)) \, d\theta $$
        $$ = \frac{1}{16} \left[ \theta - \frac{1}{2} \sin(2\theta) \right]_0^{2\pi} = \frac{1}{16} \left( (2\pi - 0) - (0 - 0) \right) = \frac{2\pi}{16} = \frac{\pi}{8} $$

    Summing these up: $2\pi + 0 + \frac{\pi}{8} = \frac{16\pi + \pi}{8} = \frac{17\pi}{8}$.

**Answer:** The value of the triple integral is $\frac{17\pi}{8}$.

**3. Application Question (relates to CO4):**
A solid hemisphere of radius $R$ has its density given by $\rho(x,y,z) = kz^2$, where $k$ is a positive constant. Find the mass of the hemisphere using spherical coordinates. Assume the hemisphere is in the upper half-space ($z \ge 0$).

**Reasoning and Solution:**
The hemisphere is defined by $0 \le \rho \le R$, $0 \le \phi \le \pi/2$, and $0 \le \theta \le 2\pi$.
The density in spherical coordinates is $\rho(x,y,z) = kz^2$. Since $z = \rho \cos \phi$, the density becomes $\rho(\rho, \phi, \theta) = k (\rho \cos \phi)^2 = k \rho^2 \cos^2 \phi$.
The differential volume element in spherical coordinates is $dV = \rho^2 \sin \phi \, d\rho \, d\phi \, d\theta$.

The mass $M$ is given by:
$$ M = \iiint_E \rho \, dV = \int_0^{2\pi} \int_0^{\pi/2} \int_0^R (k \rho^2 \cos^2 \phi) (\rho^2 \sin \phi) \, d\rho \, d\phi \, d\theta $$
$$ M = k \int_0^{2\pi} \int_0^{\pi/2} \int_0^R \rho^4 \cos^2 \phi \sin \phi \, d\rho \, d\phi \, d\theta $$

Let's evaluate:

*   **Innermost integral ($\rho$):**
    $$ \int_0^R \rho^4 \cos^2 \phi \sin \phi \, d\rho = \cos^2 \phi \sin \phi \int_0^R \rho^4 \, d\rho = \cos^2 \phi \sin \phi \left[ \frac{\rho^5}{5} \right]_0^R $$
    $$ = \frac{R^5}{5} \cos^2 \phi \sin \phi $$

*   **Middle integral ($\phi$):**
    $$ \int_0^{\pi/2} \frac{R^5}{5} \cos^2 \phi \sin \phi \, d\phi $$
    Let $u = \cos \phi$. Then $du = -\sin \phi \, d\phi$.
    When $\phi=0$, $u=\cos(0)=1$. When $\phi=\pi/2$, $u=\cos(\pi/2)=0$.
    $$ \frac{R^5}{5} \int_1^0 u^2 (-du) = -\frac{R^5}{5} \int_1^0 u^2 \, du = \frac{R^5}{5} \int_0^1 u^2 \, du $$
    $$ = \frac{R^5}{5} \left[ \frac{u^3}{3} \right]_0^1 = \frac{R^5}{5} \left( \frac{1}{3} - 0 \right) = \frac{R^5}{15} $$

*   **Outermost integral ($\theta$):**
    $$ \int_0^{2\pi} k \left( \frac{R^5}{15} \right) \, d\theta = k \frac{R^5}{15} \int_0^{2\pi} \, d\theta = k \frac{R^5}{15} [\theta]_0^{2\pi} $$
    $$ = k \frac{R^5}{15} (2\pi) = \frac{2k\pi R^5}{15} $$

**Answer:** The mass of the hemisphere is $\frac{2k\pi R^5}{15}$.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |
