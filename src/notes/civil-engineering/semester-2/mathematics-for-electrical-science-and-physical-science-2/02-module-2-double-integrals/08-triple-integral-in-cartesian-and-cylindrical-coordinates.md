---
title: "Triple
integral in Cartesian and cylindrical coordinates."
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 2"
module: "Module 2: Double integrals"
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912cd2"
status: "completed"
scrapedAt: "2026-05-20T18:36:57.310Z"
---
# Mathematics for Electrical Science and Physical Science – 2

## Module 2: Double Integrals

### Topic: Triple Integrals in Cartesian and Cylindrical Coordinates

Welcome, everyone! In our previous sessions, we’ve delved into the fascinating world of double integrals, understanding how they help us measure areas and volumes in two dimensions. Now, we're stepping up our game to three dimensions. Think about measuring the amount of water in a swimming pool, the mass of a solid object, or the electric potential within a region of space. These are all problems that require us to move beyond 2D and into the realm of 3D – and that's where triple integrals come in.

This topic directly supports our **Course Outcome CO4: Apply the concepts of surface and volume integrals and to learn their inter-relations and applications.** By mastering triple integrals, we're building the foundational understanding needed to tackle more complex concepts like volume integrals and their interconnections with other areas of calculus, which are crucial for your electrical and physical science studies. We're also enhancing our ability to **CO2: Understand theoretical idea of multiple integrals and to apply them to find areas and volumes of geometrical shapes.** Here, we extend that to *volumes of solids* and much more.

### 1. What is a Triple Integral? The Intuitive Approach

Imagine you have a solid object, say, a potato. We want to figure out something about this potato, like its total mass, or its density at different points. If the density were uniform, we could just multiply density by volume. But what if the density varies? That's where triple integrals shine.

A triple integral is essentially an extension of a definite integral (which sums up values along a line) and a double integral (which sums up values over an area). A triple integral sums up values over a *three-dimensional region*.

Think of it like this:

*   **Single Integral:** Summing up infinitely thin slices along a line (like finding the area under a curve). We integrate a function $f(x)$ over an interval $[a, b]$: $\int_a^b f(x) \, dx$.
*   **Double Integral:** Summing up infinitely thin columns over a 2D region (like finding the volume under a surface). We integrate a function $f(x, y)$ over a region $R$: $\iint_R f(x, y) \, dA$.
*   **Triple Integral:** Summing up infinitely tiny cubes (or small volume elements) over a 3D region (like finding the total mass of a solid with varying density). We integrate a function $f(x, y, z)$ over a solid region $W$: $\iiint_W f(x, y, z) \, dV$.

The function $f(x, y, z)$ here represents some quantity that varies throughout the solid. Common examples include:

*   **Density:** If $f(x, y, z)$ is the density at point $(x, y, z)$, then $\iiint_W \rho(x, y, z) \, dV$ gives the total mass of the solid $W$. This is a direct application of **CO4**.
*   **Temperature:** If $f(x, y, z)$ is the temperature, the integral could represent something related to heat distribution.
*   **Electric Potential or Charge Density:** Crucial for electrical science applications.

### 2. Triple Integrals in Cartesian Coordinates

In Cartesian coordinates, our familiar $(x, y, z)$ system, the infinitesimal volume element $dV$ is simply $dx \, dy \, dz$. So, a triple integral in Cartesian coordinates looks like this:

$$ \iiint_W f(x, y, z) \, dV = \iiint_W f(x, y, z) \, dx \, dy \, dz $$

The trickiest part, as with double integrals, is setting up the limits of integration. These limits define the boundaries of our 3D region $W$. The order of integration ($dx \, dy \, dz$, $dy \, dx \, dz$, etc.) matters and depends on how we slice up the solid.

**Iterated Triple Integrals:** We evaluate triple integrals as iterated integrals, much like we did with double integrals. We integrate with respect to one variable at a time, treating the others as constants.

Let's consider a common scenario where the region $W$ is bounded by surfaces. Suppose $W$ is defined by:

$a \le x \le b$
$g_1(x) \le y \le g_2(x)$
$h_1(x, y) \le z \le h_2(x, y)$

This describes a region where we first fix $x$, then let $y$ vary within a range determined by $x$, and finally let $z$ vary within a range determined by both $x$ and $y$. The integral would be set up as:

$$ \iiint_W f(x, y, z) \, dV = \int_a^b \int_{g_1(x)}^{g_2(x)} \int_{h_1(x, y)}^{h_2(x, y)} f(x, y, z) \, dz \, dy \, dx $$

**The Order of Integration is Key!**

You can often change the order of integration, but you *must* adjust the limits accordingly. For example, if the region $W$ can be described as:

$c \le y \le d$
$k_1(y) \le x \le k_2(y)$
$l_1(x, y) \le z \le l_2(x, y)$

Then the integral becomes:

$$ \iiint_W f(x, y, z) \, dV = \int_c^d \int_{k_1(y)}^{k_2(y)} \int_{l_1(x, y)}^{l_2(x, y)} f(x, y, z) \, dz \, dx \, dy $$

**Example 1: Volume of a Simple Solid**

Let's find the volume of the solid region $W$ bounded by the planes $x=0$, $y=0$, $z=0$, and $2x + 3y + 4z = 12$.

This is a tetrahedron in the first octant.
*   The plane $2x + 3y + 4z = 12$ is the slanted face.
*   The other three planes are the coordinate planes.

To set up the limits, let's express $z$ in terms of $x$ and $y$: $z = \frac{12 - 2x - 3y}{4} = 3 - \frac{1}{2}x - \frac{3}{4}y$.
Since $z \ge 0$, we have $3 - \frac{1}{2}x - \frac{3}{4}y \ge 0$, which means $\frac{1}{2}x + \frac{3}{4}y \le 3$.

Now, we need to determine the projection of this solid onto the $xy$-plane. This projection is the region bounded by $x=0$, $y=0$, and the line $\frac{1}{2}x + \frac{3}{4}y = 3$.
Let's find the intercepts of this line:
*   If $y=0$, then $\frac{1}{2}x = 3 \implies x = 6$. So, the $x$-intercept is $(6, 0)$.
*   If $x=0$, then $\frac{3}{4}y = 3 \implies y = 4$. So, the $y$-intercept is $(0, 4)$.

The region in the $xy$-plane is a triangle with vertices $(0,0)$, $(6,0)$, and $(0,4)$.

We can describe this region in the $xy$-plane in two ways:
1.  $0 \le x \le 6$ and $0 \le y \le 4 - \frac{4}{3}x$
2.  $0 \le y \le 4$ and $0 \le x \le 6 - \frac{3}{2}y$

Let's use the first description for $x$ and $y$. The limits for $z$ are from the base plane ($z=0$) up to the slanted plane ($z = 3 - \frac{1}{2}x - \frac{3}{4}y$).

So, the volume (which is $\iiint_W 1 \, dV$) is:

$$ V = \int_0^6 \int_0^{4 - \frac{4}{3}x} \int_0^{3 - \frac{1}{2}x - \frac{3}{4}y} \, dz \, dy \, dx $$

Let's evaluate this step by step.

**Step 1: Integrate with respect to $z$**
$$ \int_0^{3 - \frac{1}{2}x - \frac{3}{4}y} \, dz = \left[ z \right]_0^{3 - \frac{1}{2}x - \frac{3}{4}y} = 3 - \frac{1}{2}x - \frac{3}{4}y $$

**Step 2: Integrate with respect to $y$**
Now we integrate the result from Step 1 with respect to $y$, from $0$ to $4 - \frac{4}{3}x$:
$$ \int_0^{4 - \frac{4}{3}x} \left( 3 - \frac{1}{2}x - \frac{3}{4}y \right) \, dy $$
Treat $x$ as a constant:
$$ \left[ 3y - \frac{1}{2}xy - \frac{3}{8}y^2 \right]_0^{4 - \frac{4}{3}x} $$
Substitute the upper limit:
$$ 3\left(4 - \frac{4}{3}x\right) - \frac{1}{2}x\left(4 - \frac{4}{3}x\right) - \frac{3}{8}\left(4 - \frac{4}{3}x\right)^2 $$
$$ = \left(12 - 4x\right) - \left(2x - \frac{2}{3}x^2\right) - \frac{3}{8}\left(16 - \frac{32}{3}x + \frac{16}{9}x^2\right) $$
$$ = 12 - 4x - 2x + \frac{2}{3}x^2 - \left(6 - \frac{4}{1}x + \frac{2}{9}x^2\right) $$
$$ = 12 - 6x + \frac{2}{3}x^2 - 6 + 4x - \frac{2}{9}x^2 $$
$$ = 6 - 2x + \left(\frac{2}{3} - \frac{2}{9}\right)x^2 = 6 - 2x + \left(\frac{6-2}{9}\right)x^2 = 6 - 2x + \frac{4}{9}x^2 $$

**Step 3: Integrate with respect to $x$**
Finally, integrate the result from Step 2 with respect to $x$, from $0$ to $6$:
$$ \int_0^6 \left( 6 - 2x + \frac{4}{9}x^2 \right) \, dx $$
$$ = \left[ 6x - x^2 + \frac{4}{27}x^3 \right]_0^6 $$
$$ = 6(6) - (6)^2 + \frac{4}{27}(6)^3 $$
$$ = 36 - 36 + \frac{4}{27}(216) $$
$$ = \frac{4 \times 216}{27} = 4 \times 8 = 32 $$

So, the volume of the tetrahedron is 32 cubic units.

*   **Exam Tip:** For volume calculations, the integrand is always 1. The main challenge is correctly identifying the limits of integration for the region. Drawing a sketch of the region and its projection onto the coordinate planes is highly recommended. This ties into **CO2** where we apply multiple integrals to find volumes.

**Example 2: Finding Mass with Varying Density**

Suppose a solid object occupies the region $W$ defined by $0 \le x \le 1$, $0 \le y \le 1$, and $0 \le z \le 1$ (a unit cube). Its density is given by $\rho(x, y, z) = x + y + z$. Let's find its total mass.

The mass $M$ is given by:
$$ M = \iiint_W \rho(x, y, z) \, dV = \int_0^1 \int_0^1 \int_0^1 (x + y + z) \, dz \, dy \, dx $$

Let's evaluate this iterated integral:

**Step 1: Integrate with respect to $z$**
$$ \int_0^1 (x + y + z) \, dz = \left[ xz + yz + \frac{1}{2}z^2 \right]_0^1 = x(1) + y(1) + \frac{1}{2}(1)^2 - (0) = x + y + \frac{1}{2} $$

**Step 2: Integrate with respect to $y$**
$$ \int_0^1 \left( x + y + \frac{1}{2} \right) \, dy = \left[ xy + \frac{1}{2}y^2 + \frac{1}{2}y \right]_0^1 $$
$$ = x(1) + \frac{1}{2}(1)^2 + \frac{1}{2}(1) - (0) = x + \frac{1}{2} + \frac{1}{2} = x + 1 $$

**Step 3: Integrate with respect to $x$**
$$ \int_0^1 (x + 1) \, dx = \left[ \frac{1}{2}x^2 + x \right]_0^1 $$
$$ = \frac{1}{2}(1)^2 + 1 - (0) = \frac{1}{2} + 1 = \frac{3}{2} $$

So, the total mass of the unit cube with density $\rho(x, y, z) = x + y + z$ is $\frac{3}{2}$ units.

*   **Remember this:** When evaluating iterated integrals, carefully treat the variables that are not being integrated as constants. This is a common area where mistakes can happen.

### 3. Triple Integrals in Cylindrical Coordinates

Cylindrical coordinates are particularly useful when dealing with solids that have cylindrical symmetry, like cylinders, cones, or regions bounded by circular surfaces. They extend polar coordinates from 2D to 3D.

**Recall Polar Coordinates (2D):**
A point $(x, y)$ is represented by $(r, \theta)$, where:
$x = r \cos \theta$
$y = r \sin \theta$
$r^2 = x^2 + y^2$
$dA = r \, dr \, d\theta$

**Cylindrical Coordinates (3D):**
We add a third coordinate, $z$, which remains the same. A point $(x, y, z)$ is represented by $(r, \theta, z)$, where:
$x = r \cos \theta$
$y = r \sin \theta$
$z = z$

The relationships are:
$r^2 = x^2 + y^2$ (the distance from the $z$-axis)
$\tan \theta = \frac{y}{x}$
$z = z$

The volume element $dV$ in cylindrical coordinates is **not** $dr \, d\theta \, dz$. Due to the stretching of the area element in polar coordinates, the volume element becomes:
$$ dV = r \, dr \, d\theta \, dz $$
This extra factor of $r$ is crucial and often forgotten. It's the Jacobian of the transformation.

**Triple Integral in Cylindrical Coordinates:**
$$ \iiint_W f(x, y, z) \, dV = \iiint_W f(r \cos \theta, r \sin \theta, z) \, r \, dr \, d\theta \, dz $$

**Setting Up Limits in Cylindrical Coordinates:**

When describing a region $W$ in cylindrical coordinates, we typically follow this pattern for the iterated integral:

$$ \int_{\alpha}^{\beta} \int_{\phi_1(\theta)}^{\phi_2(\theta)} \int_{g_1(r, \theta)}^{g_2(r, \theta)} f(r \cos \theta, r \sin \theta, z) \, r \, dz \, dr \, d\theta $$

Let's break down what each part means:

1.  **$dz$:** The $z$ limits are usually the simplest. They describe the lower and upper bounds for $z$ at a given $(r, \theta)$ point. For example, $z$ might range from a plane like $z=0$ to a surface like $z = r^2$. So, $g_1(r, \theta) \le z \le g_2(r, \theta)$.
2.  **$dr$ and $d\theta$:** These define the region in the $xy$-plane (or $r\theta$-plane), which is essentially a polar description.
    *   $\theta$ typically ranges from a constant to a constant: $\alpha \le \theta \le \beta$. This covers the angular sweep of the region.
    *   For a fixed $\theta$, $r$ ranges from a function of $\theta$ to another function of $\theta$: $\phi_1(\theta) \le r \le \phi_2(\theta)$. These are radial lines originating from the origin in the $xy$-plane.

**Why Cylindrical Coordinates?**

Consider a problem involving a cylinder. If you tried to set this up in Cartesian coordinates, the limits for $x$ and $y$ would involve square roots ($x^2+y^2 = R^2 \implies y = \pm \sqrt{R^2-x^2}$), making the integration quite messy. In cylindrical coordinates, a cylinder $x^2 + y^2 = R^2$ is simply $r = R$, which is much easier to handle.

**Example 3: Volume of a Cylinder**

Let's find the volume of a cylinder with radius $R$ and height $H$. The cylinder is defined by $x^2 + y^2 \le R^2$ and $0 \le z \le H$.

In Cartesian coordinates, this would be:
$$ V = \int_{-R}^R \int_{-\sqrt{R^2-x^2}}^{\sqrt{R^2-x^2}} \int_0^H \, dz \, dy \, dx $$
This looks complicated! Let's switch to cylindrical coordinates.

In cylindrical coordinates:
*   The region $x^2 + y^2 \le R^2$ becomes $r^2 \le R^2$, which means $0 \le r \le R$ (since $r$ is a distance, $r \ge 0$).
*   The angle $\theta$ sweeps a full circle, so $0 \le \theta \le 2\pi$.
*   The height limits are $0 \le z \le H$.
*   The function we are integrating is $f(x, y, z) = 1$ for volume.

So, the integral becomes:
$$ V = \int_0^{2\pi} \int_0^R \int_0^H (1) \, r \, dz \, dr \, d\theta $$

Let's evaluate this:

**Step 1: Integrate with respect to $z$**
$$ \int_0^H r \, dz = r [z]_0^H = rH $$

**Step 2: Integrate with respect to $r$**
$$ \int_0^R rH \, dr = H \int_0^R r \, dr = H \left[ \frac{1}{2}r^2 \right]_0^R = H \left( \frac{1}{2}R^2 - 0 \right) = \frac{1}{2}HR^2 $$

**Step 3: Integrate with respect to $\theta$**
$$ \int_0^{2\pi} \frac{1}{2}HR^2 \, d\theta = \frac{1}{2}HR^2 [\theta]_0^{2\pi} = \frac{1}{2}HR^2 (2\pi - 0) = \pi R^2 H $$

This is the well-known formula for the volume of a cylinder! Cylindrical coordinates made this calculation much cleaner. This is a fundamental example for **CO2**.

**Example 4: Mass of a Solid Cone**

Find the mass of a solid cone with height $H$ and base radius $R$. The vertex is at the origin, and the base is parallel to the $xy$-plane at $z=H$. The density is $\rho(x, y, z) = z$.

The cone's boundary can be described by the equation $z = \frac{H}{R} \sqrt{x^2+y^2}$ or, in cylindrical coordinates, $z = \frac{H}{R} r$.
The region $W$ is described by:
*   $0 \le \theta \le 2\pi$ (full circle)
*   $0 \le r \le R$ (base radius)
*   $\frac{H}{R}r \le z \le H$ (from the cone surface to the top plane)

The mass $M$ is:
$$ M = \iiint_W \rho(x, y, z) \, dV = \iiint_W z \, r \, dz \, dr \, d\theta $$

Setting up the integral:
$$ M = \int_0^{2\pi} \int_0^R \int_{\frac{H}{R}r}^H z \, r \, dz \, dr \, d\theta $$

Let's evaluate this:

**Step 1: Integrate with respect to $z$**
$$ \int_{\frac{H}{R}r}^H z \, r \, dz = r \int_{\frac{H}{R}r}^H z \, dz = r \left[ \frac{1}{2}z^2 \right]_{\frac{H}{R}r}^H $$
$$ = \frac{1}{2}r \left( H^2 - \left(\frac{H}{R}r\right)^2 \right) = \frac{1}{2}r \left( H^2 - \frac{H^2}{R^2}r^2 \right) $$
$$ = \frac{1}{2}H^2 r - \frac{1}{2}\frac{H^2}{R^2}r^3 $$

**Step 2: Integrate with respect to $r$**
$$ \int_0^R \left( \frac{1}{2}H^2 r - \frac{1}{2}\frac{H^2}{R^2}r^3 \right) \, dr $$
$$ = \left[ \frac{1}{2}H^2 \frac{r^2}{2} - \frac{1}{2}\frac{H^2}{R^2} \frac{r^4}{4} \right]_0^R $$
$$ = \left[ \frac{1}{4}H^2 r^2 - \frac{1}{8}\frac{H^2}{R^2}r^4 \right]_0^R $$
$$ = \left( \frac{1}{4}H^2 R^2 - \frac{1}{8}\frac{H^2}{R^2}R^4 \right) - (0) $$
$$ = \frac{1}{4}H^2 R^2 - \frac{1}{8}H^2 R^2 = \left(\frac{2}{8} - \frac{1}{8}\right)H^2 R^2 = \frac{1}{8}H^2 R^2 $$

**Step 3: Integrate with respect to $\theta$**
$$ \int_0^{2\pi} \frac{1}{8}H^2 R^2 \, d\theta = \frac{1}{8}H^2 R^2 [\theta]_0^{2\pi} $$
$$ = \frac{1}{8}H^2 R^2 (2\pi) = \frac{1}{4}\pi H^2 R^2 $$

The mass of the cone is $\frac{1}{4}\pi H^2 R^2$.

*   **Analogy:** Imagine filling a conical mold with a sand-like material whose density increases with height. The triple integral with cylindrical coordinates allows us to sum up the mass of all these tiny grains, considering how their density changes and how the shape of the mold constrains their placement. This is a great example for **CO4**.

### 4. Changing Order of Integration (Cylindrical)

Just like in Cartesian coordinates, the order of integration in cylindrical coordinates can be changed. The most common orders are $dz \, dr \, d\theta$, $dr \, dz \, d\theta$, and $dr \, d\theta \, dz$. The key is to correctly describe the region $W$ in the new order.

**Example 5: Re-evaluating the Cone Mass Integral**

Let's try to set up the cone integral with a different order, say $dr \, dz \, d\theta$.
The region is $0 \le \theta \le 2\pi$, $0 \le r \le R$, $\frac{H}{R}r \le z \le H$.

Let's flip $z$ and $r$ limits: $dr \, dz \, d\theta$.
*   $0 \le \theta \le 2\pi$.
*   Now we need to describe the $rz$-plane projection. The boundaries are $r=0$, $r=R$, $z=H$, and $z = \frac{H}{R}r$ (or $r = \frac{R}{H}z$).
*   If we integrate $dr$ first, we need limits for $r$ in terms of $z$.
    *   The lowest $z$ is $0$, the highest is $H$. So, $0 \le z \le H$.
    *   For a fixed $z$, $r$ goes from $0$ up to the cone surface, which is $r = \frac{R}{H}z$.
    *   So, $0 \le r \le \frac{R}{H}z$.

The integral becomes:
$$ M = \int_0^{2\pi} \int_0^H \int_0^{\frac{R}{H}z} z \, r \, dr \, dz \, d\theta $$

Let's evaluate this to confirm:

**Step 1: Integrate with respect to $r$**
$$ \int_0^{\frac{R}{H}z} z \, r \, dr = z \int_0^{\frac{R}{H}z} r \, dr = z \left[ \frac{1}{2}r^2 \right]_0^{\frac{R}{H}z} $$
$$ = \frac{1}{2}z \left(\frac{R}{H}z\right)^2 = \frac{1}{2}z \left(\frac{R^2}{H^2}z^2\right) = \frac{1}{2}\frac{R^2}{H^2}z^3 $$

**Step 2: Integrate with respect to $z$**
$$ \int_0^H \frac{1}{2}\frac{R^2}{H^2}z^3 \, dz = \frac{1}{2}\frac{R^2}{H^2} \int_0^H z^3 \, dz $$
$$ = \frac{1}{2}\frac{R^2}{H^2} \left[ \frac{1}{4}z^4 \right]_0^H = \frac{1}{2}\frac{R^2}{H^2} \left(\frac{1}{4}H^4\right) = \frac{1}{8}\frac{R^2 H^2}{1} = \frac{1}{8}R^2 H^2 $$

**Step 3: Integrate with respect to $\theta$**
$$ \int_0^{2\pi} \frac{1}{8}R^2 H^2 \, d\theta = \frac{1}{8}R^2 H^2 [\theta]_0^{2\pi} = \frac{1}{8}R^2 H^2 (2\pi) = \frac{1}{4}\pi R^2 H^2 $$

We got the same result! This confirms the power of changing variables and understanding how the region's boundaries transform. This flexibility is what allows us to tackle complex problems more efficiently, a key aspect of **CO4**.

### 5. Connection to Course Outcomes

Let's explicitly link this topic back to our course outcomes:

*   **CO2: Understand theoretical idea of multiple integrals and to apply them to find areas and volumes of geometrical shapes.**
    *   We've directly applied triple integrals (with $f(x,y,z)=1$) to find the volumes of a tetrahedron and a cylinder. Understanding the summation process over a 3D region is the core idea.

*   **CO4: Apply the concepts of surface and volume integrals and to learn their inter-relations and applications.**
    *   Triple integrals are the fundamental tool for calculating volume integrals. When the integrand is density ($\rho$), the triple integral gives us mass. If the integrand is charge density ($\rho_q$), it gives us total charge. If the integrand is related to temperature or pressure, it can give us total heat or total force.
    *   The examples of mass calculation directly showcase applications in physical science. For electrical science, imagine finding the total charge in a region with a non-uniform charge distribution – that's a triple integral of the charge density function.

**Thinking Ahead to Spherical Coordinates (Not in this specific topic, but related):**
Just as cylindrical coordinates are great for cylindrical symmetry, spherical coordinates are perfect for spherical symmetry (like spheres or cones). They involve coordinates $(\rho, \theta, \phi)$ where $\rho$ is the distance from the origin, $\theta$ is the azimuthal angle (same as cylindrical), and $\phi$ is the polar angle (from the positive $z$-axis). The volume element there is $dV = \rho^2 \sin \phi \, d\rho \, d\phi \, d\theta$. This highlights how coordinate systems are chosen based on the geometry of the problem for simplification.

### Summary of Key Takeaways

*   **Triple integrals extend integration to three dimensions**, allowing us to calculate quantities over solid regions.
*   **In Cartesian coordinates**, $dV = dx \, dy \, dz$. Iterated integrals are set up by defining the bounds for $x$, $y$, and $z$ sequentially.
*   **In Cylindrical coordinates**, we use $(r, \theta, z)$. $x = r \cos \theta$, $y = r \sin \theta$. The volume element is $dV = r \, dr \, d\theta \, dz$. This system is excellent for regions with cylindrical symmetry.
*   The **Jacobian factor $r$** in the cylindrical volume element is crucial and must not be forgotten.
*   The setup of **limits of integration** is the most critical part of evaluating triple integrals, whether in Cartesian or cylindrical coordinates. Visualizing the region is key.
*   Triple integrals are fundamental for calculating **mass, volume, center of mass, moments of inertia, total charge**, and other physical quantities when these properties vary within a 3D object.

**Common Pitfalls to Avoid:**

*   Forgetting the $r$ in $dV$ for cylindrical coordinates.
*   Incorrectly describing the limits of integration, especially when changing the order or when the region is complex.
*   Confusing the roles of $\theta$ and $\phi$ if you've encountered spherical coordinates. (Stick to $r, \theta, z$ for cylindrical).

Understanding triple integrals is a significant step in your journey through multivariable calculus. They equip you with powerful tools to model and solve problems in the physical and electrical sciences that are inherently three-dimensional. Keep practicing the setup of limits and the evaluation of iterated integrals!

---

## Sample Questions with Answers

**1. Conceptual Question:**
What is the primary advantage of using cylindrical coordinates over Cartesian coordinates for evaluating triple integrals, and why?

**Answer:**
The primary advantage of cylindrical coordinates is when dealing with regions or integrands that exhibit **cylindrical symmetry**. This means the shape or function has properties that are constant or vary with the distance from an axis (usually the $z$-axis) and the angle around it.
For example, a cylinder $x^2+y^2=R^2$ is described simply by $r=R$ in cylindrical coordinates. In Cartesian coordinates, this boundary involves $\sqrt{R^2-x^2}$ and $\pm$ signs, making the limits of integration much more complex. The integrand $f(x,y,z)$ may also simplify when expressed in terms of $r$, $\theta$, and $z$. The volume element $dV = r \, dr \, d\theta \, dz$ accounts for the 'stretching' in the area element as we move away from the origin in the polar plane, which is naturally handled by the $r$ factor.

**2. Application Question (Exam Style):**
A solid region $W$ is bounded below by the cone $z = \sqrt{x^2 + y^2}$ and above by the sphere $x^2 + y^2 + z^2 = 8$. Find the mass of the solid if its density is given by $\rho(x, y, z) = \sqrt{x^2 + y^2}$.

**Answer:**
This problem involves a cone and a sphere, suggesting that cylindrical or spherical coordinates might be suitable. Since the density also involves $\sqrt{x^2 + y^2} = r$, cylindrical coordinates seem appropriate.

**Region Description:**
*   **Cone:** $z = \sqrt{x^2 + y^2}$ is $z = r$ in cylindrical coordinates.
*   **Sphere:** $x^2 + y^2 + z^2 = 8$ is $r^2 + z^2 = 8$.

**Finding Limits:**
The solid is between the cone and the sphere. The intersection of the cone and sphere occurs when $z=r$ and $r^2+z^2=8$. Substituting $z=r$ into the sphere equation:
$r^2 + r^2 = 8 \implies 2r^2 = 8 \implies r^2 = 4 \implies r = 2$ (since $r \ge 0$).
When $r=2$, $z=2$. So the intersection is a circle of radius 2 at height $z=2$.

*   **$z$ limits:** For a fixed $r$ and $\theta$, $z$ goes from the cone surface up to the sphere surface.
    *   Lower bound: $z = r$.
    *   Upper bound: $z = \sqrt{8 - r^2}$.
*   **$r$ limits:** The projection onto the $xy$-plane is a disk of radius 2 (where the cone and sphere intersect). So, $0 \le r \le 2$.
*   **$\theta$ limits:** The region is symmetric around the $z$-axis, so it covers a full circle: $0 \le \theta \le 2\pi$.

**Density:** $\rho(x, y, z) = \sqrt{x^2 + y^2} = r$.
**Volume element:** $dV = r \, dz \, dr \, d\theta$.

**The Integral:**
$$ M = \iiint_W \rho \, dV = \int_0^{2\pi} \int_0^2 \int_r^{\sqrt{8-r^2}} (r) \, r \, dz \, dr \, d\theta $$
$$ M = \int_0^{2\pi} \int_0^2 r^2 \int_r^{\sqrt{8-r^2}} \, dz \, dr \, d\theta $$

**Evaluation:**
**Step 1: Integrate with respect to $z$**
$$ \int_r^{\sqrt{8-r^2}} \, dz = [z]_r^{\sqrt{8-r^2}} = \sqrt{8-r^2} - r $$

**Step 2: Integrate with respect to $r$**
$$ \int_0^2 r^2 (\sqrt{8-r^2} - r) \, dr = \int_0^2 (r^2\sqrt{8-r^2} - r^3) \, dr $$
This integral can be split into two parts: $\int_0^2 r^2\sqrt{8-r^2} \, dr$ and $\int_0^2 r^3 \, dr$.

The second part is easy: $\int_0^2 r^3 \, dr = [\frac{r^4}{4}]_0^2 = \frac{2^4}{4} - 0 = \frac{16}{4} = 4$.

For the first part, $\int_0^2 r^2\sqrt{8-r^2} \, dr$, we can use a trigonometric substitution. Let $r = 2\sin\phi$. Then $dr = 2\cos\phi \, d\phi$.
When $r=0$, $2\sin\phi=0 \implies \phi=0$.
When $r=2$, $2\sin\phi=2 \implies \sin\phi=1 \implies \phi=\frac{\pi}{2}$.
$\sqrt{8-r^2} = \sqrt{8 - 4\sin^2\phi} = \sqrt{4(2 - \sin^2\phi)} = 2\sqrt{2 - \sin^2\phi}$. This looks tricky.

Let's reconsider. What if we used **spherical coordinates**?
*   Cone $z = r \implies \rho \cos\phi = \rho \sin\phi \implies \cos\phi = \sin\phi \implies \tan\phi = 1 \implies \phi = \frac{\pi}{4}$.
*   Sphere $x^2+y^2+z^2=8 \implies \rho^2=8 \implies \rho=\sqrt{8}=2\sqrt{2}$.
*   Density $\rho(x,y,z) = \sqrt{x^2+y^2} = \rho\sin\phi$.
*   Volume element $dV = \rho^2\sin\phi \, d\rho \, d\phi \, d\theta$.

**Spherical Coordinate Limits:**
*   $\theta$: $0$ to $2\pi$ (full circle)
*   $\phi$: $0$ to $\frac{\pi}{4}$ (from the $z$-axis down to the cone)
*   $\rho$: $0$ to $2\sqrt{2}$ (from the origin to the sphere)

**The Integral in Spherical Coordinates:**
$$ M = \int_0^{2\pi} \int_0^{\pi/4} \int_0^{2\sqrt{2}} (\rho\sin\phi) (\rho^2\sin\phi) \, d\rho \, d\phi \, d\theta $$
$$ M = \int_0^{2\pi} \int_0^{\pi/4} \int_0^{2\sqrt{2}} \rho^3\sin^2\phi \, d\rho \, d\phi \, d\theta $$

**Evaluation in Spherical Coordinates:**
**Step 1: Integrate with respect to $\rho$**
$$ \int_0^{2\sqrt{2}} \rho^3 \, d\rho = \left[\frac{\rho^4}{4}\right]_0^{2\sqrt{2}} = \frac{(2\sqrt{2})^4}{4} - 0 = \frac{(16 \times 4)}{4} = 16 $$

**Step 2: Integrate with respect to $\phi$**
$$ \int_0^{\pi/4} 16\sin^2\phi \, d\phi $$
Using $\sin^2\phi = \frac{1-\cos(2\phi)}{2}$:
$$ 16 \int_0^{\pi/4} \frac{1-\cos(2\phi)}{2} \, d\phi = 8 \int_0^{\pi/4} (1-\cos(2\phi)) \, d\phi $$
$$ = 8 \left[\phi - \frac{1}{2}\sin(2\phi)\right]_0^{\pi/4} $$
$$ = 8 \left[\left(\frac{\pi}{4} - \frac{1}{2}\sin(\frac{\pi}{2})\right) - \left(0 - \frac{1}{2}\sin(0)\right)\right] $$
$$ = 8 \left[\frac{\pi}{4} - \frac{1}{2}(1) - 0\right] = 8 \left(\frac{\pi}{4} - \frac{1}{2}\right) = 2\pi - 4 $$

**Step 3: Integrate with respect to $\theta$**
$$ \int_0^{2\pi} (2\pi - 4) \, d\theta = (2\pi - 4) [\theta]_0^{2\pi} = (2\pi - 4)(2\pi) = 4\pi^2 - 8\pi $$

The mass is $4\pi^2 - 8\pi$.

*   **Reasoning:** This question demonstrates the importance of choosing the right coordinate system. While the problem was stated to potentially use cylindrical, the combination of a cone and a sphere boundary, along with the density function, made spherical coordinates a much more straightforward path. Spherical coordinates are ideal for regions with spherical symmetry or boundaries defined by spheres and cones. This ties into **CO4** as it involves a physical quantity (mass) calculated over a volume with complex boundaries.

**3. Calculation Question (Cartesian):**
Evaluate the triple integral $\iiint_E y \, dV$ where $E$ is the solid bounded by the planes $x=0, y=0, z=0$ and $x+y+z=1$.

**Answer:**
This is the tetrahedron in Example 1, but with the integrand $y$ instead of 1.
The region $E$ is defined by:
$0 \le x \le 1$
$0 \le y \le 1-x$
$0 \le z \le 1-x-y$

The integral is:
$$ \int_0^1 \int_0^{1-x} \int_0^{1-x-y} y \, dz \, dy \, dx $$

**Step 1: Integrate with respect to $z$**
$$ \int_0^{1-x-y} y \, dz = y [z]_0^{1-x-y} = y(1-x-y) = y - xy - y^2 $$

**Step 2: Integrate with respect to $y$**
$$ \int_0^{1-x} (y - xy - y^2) \, dy $$
$$ = \left[\frac{1}{2}y^2 - \frac{1}{2}xy^2 - \frac{1}{3}y^3\right]_0^{1-x} $$
$$ = \frac{1}{2}(1-x)^2 - \frac{1}{2}x(1-x)^2 - \frac{1}{3}(1-x)^3 $$
Factor out $(1-x)^2$:
$$ = (1-x)^2 \left(\frac{1}{2} - \frac{1}{2}x\right) - \frac{1}{3}(1-x)^3 $$
$$ = (1-x)^2 \frac{1-x}{2} - \frac{1}{3}(1-x)^3 $$
$$ = \frac{1}{2}(1-x)^3 - \frac{1}{3}(1-x)^3 $$
$$ = \left(\frac{1}{2} - \frac{1}{3}\right)(1-x)^3 = \frac{1}{6}(1-x)^3 $$

**Step 3: Integrate with respect to $x$**
$$ \int_0^1 \frac{1}{6}(1-x)^3 \, dx $$
Let $u = 1-x$, so $du = -dx$. When $x=0, u=1$. When $x=1, u=0$.
$$ \int_1^0 \frac{1}{6} u^3 (-du) = -\frac{1}{6} \int_1^0 u^3 \, du = \frac{1}{6} \int_0^1 u^3 \, du $$
$$ = \frac{1}{6} \left[\frac{u^4}{4}\right]_0^1 = \frac{1}{6} \left(\frac{1}{4} - 0\right) = \frac{1}{24} $$

The value of the integral is $\frac{1}{24}$. This calculation directly uses the skills developed for **CO2** and **CO4** by applying multiple integrals to find a weighted sum over a volume.
