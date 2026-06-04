---
title: "Volume calculated as triple integral"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 2"
module: "Module 2: Double integrals"
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912cd1"
status: "completed"
scrapedAt: "2026-05-20T18:36:56.611Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 2

## Module 2: Double Integrals

### Topic: Volume Calculated as Triple Integral

Welcome, everyone! In this session, we're going to build upon our understanding of double integrals, which we've used to find areas and, in a slightly extended way, volumes. Today, we're officially diving into the world of **triple integrals** and seeing how they provide a powerful and unified way to calculate volumes. This directly connects with our **Course Outcome 2 (CO2)**, which is to understand the theoretical idea of multiple integrals and apply them to find areas and volumes, and also **Course Outcome 4 (CO4)**, as we'll be seeing the foundational concepts of volume integrals.

### 1. From Double Integrals to Triple Integrals: A Gentle Introduction

Remember how we calculated the volume under a surface $z = f(x, y)$ over a region $R$ in the $xy$-plane? We did this with a double integral:

$$V = \iint_R f(x, y) \, dA$$

This formula essentially sums up infinitesimally small rectangular prisms, each with a base area $dA = dx \, dy$ (or $dy \, dx$) and a height $f(x, y)$. It’s like stacking infinitesimally thin slices of bread, where each slice’s area is $dA$ and its thickness is determined by the height of the surface.

Now, what if the solid itself has a more complex shape, not just a flat base and a top surface? What if the solid is bounded by *six* surfaces (like a rectangular box), or perhaps more irregular ones? This is where triple integrals truly shine. A triple integral allows us to integrate over a **three-dimensional region** in space.

Think of it this way: a double integral integrates a function of *two* variables over a *two-dimensional* region. A triple integral integrates a function of *three* variables over a *three-dimensional* region.

### 2. Defining the Triple Integral

Let's consider a solid region $E$ in three-dimensional space. To define the triple integral of a function $f(x, y, z)$ over $E$, denoted as $\iiint_E f(x, y, z) \, dV$, we can think of it as an extension of the Riemann sum. We partition the region $E$ into many small sub-regions, each with a small volume $\Delta V_k$. For each sub-region, we pick a sample point $(x_k^*, y_k^*, z_k^*)$, evaluate $f(x_k^*, y_k^*, z_k^*)$, and multiply it by $\Delta V_k$. The triple integral is then the limit of the sum of these products as the size of the sub-regions (and thus $\Delta V_k$) approaches zero.

$$ \iiint_E f(x, y, z) \, dV = \lim_{n \to \infty} \sum_{k=1}^n f(x_k^*, y_k^*, z_k^*) \Delta V_k $$

This might seem a bit abstract at first, but it’s a very powerful generalization.

### 3. Calculating Volume Using Triple Integrals

The most fundamental application of triple integrals for us right now is calculating **volume**. How do we do that? It’s beautifully simple: we integrate the function $f(x, y, z) = 1$ over the solid region $E$.

$$ V(E) = \iiint_E 1 \, dV $$

Why does this work? Think about the analogy again. If $f(x, y, z) = 1$, then $f(x_k^*, y_k^*, z_k^*) \Delta V_k$ is simply $1 \cdot \Delta V_k = \Delta V_k$. So, the Riemann sum is just the sum of all the small volumes, $\sum \Delta V_k$. As this sum approaches the total volume of the region $E$, we see that integrating $1$ over $E$ gives us the volume of $E$. This is a key concept for our **CO2**.

### 4. Iterated Triple Integrals: Making it Practical

Just like double integrals, triple integrals are evaluated using **iterated integrals**. This means we integrate with respect to one variable at a time, treating the other variables as constants. The order of integration matters and depends on how we set up the limits. The differential volume element $dV$ can be expressed in Cartesian coordinates as $dz \, dy \, dx$, $dz \, dx \, dy$, $dy \, dz \, dx$, $dy \, dx \, dz$, $dx \, dy \, dz$, or $dx \, dz \, dy$.

Let's consider a solid region $E$ that can be described by setting bounds for $z$ between two functions of $x$ and $y$, and then bounding $x$ and $y$ within a region $R$ in the $xy$-plane. That is, $E = \{(x, y, z) \mid (x, y) \in R, \text{ and } g_1(x, y) \le z \le g_2(x, y)\}$.

In this case, the triple integral becomes an iterated integral:

$$ V(E) = \iiint_E 1 \, dV = \iint_R \left( \int_{g_1(x, y)}^{g_2(x, y)} 1 \, dz \right) \, dA $$

And since $dA$ can be $dy \, dx$ or $dx \, dy$, we have two main ways to write this:

$$ V(E) = \int_a^b \int_{h_1(x)}^{h_2(x)} \int_{g_1(x, y)}^{g_2(x, y)} 1 \, dz \, dy \, dx $$

or

$$ V(E) = \int_c^d \int_{k_1(y)}^{k_2(y)} \int_{g_1(x, y)}^{g_2(x, y)} 1 \, dz \, dx \, dy $$

Notice how the inner integral $\int_{g_1(x, y)}^{g_2(x, y)} 1 \, dz$ evaluates to $z \Big|_{g_1(x, y)}^{g_2(x, y)} = g_2(x, y) - g_1(x, y)$. This difference, $g_2(x, y) - g_1(x, y)$, is exactly the height of the solid at the point $(x, y)$. So, the double integral $\iint_R (g_2(x, y) - g_1(x, y)) \, dA$ is precisely the volume we calculated earlier using double integrals! This shows the consistency and power of the triple integral formulation.

**This is a crucial connection:** The triple integral approach naturally encompasses the double integral method for volumes under a surface. If the solid is bounded below by $z=0$ and above by $z=f(x,y)$, then $g_1(x,y)=0$ and $g_2(x,y)=f(x,y)$, and the inner integral becomes $\int_0^{f(x,y)} 1 dz = f(x,y)$, leading back to $\iint_R f(x,y) dA$.

### 5. Setting Up the Limits: The Art of Describing Solids

The trickiest part, and where much of the learning lies, is correctly describing the solid region $E$ and setting up the appropriate limits of integration. This is where **CO4** comes into play as we deal with volume integrals. We need to be able to visualize the solid and express its boundaries mathematically.

Let's consider different types of solid descriptions:

**Type 1: $E$ is described as $g_1(x, y) \le z \le g_2(x, y)$ for $(x, y) \in R$.**
We've seen this already. We first evaluate the double integral over $R$.

**Type 2: $E$ is described as $h_1(x, z) \le y \le h_2(x, z)$ for $(x, z) \in R'$, where $R'$ is a region in the $xz$-plane.**
The volume integral is then:

$$ V(E) = \iiint_E 1 \, dV = \iint_{R'} \left( \int_{h_1(x, z)}^{h_2(x, z)} 1 \, dy \right) \, dA' $$
where $dA' = dz \, dx$ or $dx \, dz$.

**Type 3: $E$ is described as $k_1(y, z) \le x \le k_2(y, z)$ for $(y, z) \in R''$, where $R''$ is a region in the $yz$-plane.**
The volume integral is:

$$ V(E) = \iiint_E 1 \, dV = \iint_{R''} \left( \int_{k_1(y, z)}^{k_2(y, z)} 1 \, dx \right) \, dA'' $$
where $dA'' = dy \, dz$ or $dz \, dy$.

Often, a solid can be described in more than one way. Sometimes, choosing a different order of integration or a different projection onto a coordinate plane can simplify the calculation. This is akin to choosing the best order of integration in double integrals, but with an extra dimension.

### 6. Examples: Bringing it to Life

Let's work through some examples to make this concrete.

**Example 1: Volume of a Simple Box**

Consider a rectangular box defined by $0 \le x \le 2$, $0 \le y \le 3$, and $0 \le z \le 4$.
This is a straightforward case where the bounds are constants.

We want to calculate $V = \iiint_E 1 \, dV$.

Let's choose the order $dz \, dy \, dx$.
The limits for $z$ are from $0$ to $4$.
The limits for $y$ are from $0$ to $3$.
The limits for $x$ are from $0$ to $2$.

So, the integral is:
$$ V = \int_0^2 \int_0^3 \int_0^4 1 \, dz \, dy \, dx $$

Let's evaluate it step-by-step:
1.  Inner integral with respect to $z$:
    $$ \int_0^4 1 \, dz = [z]_0^4 = 4 - 0 = 4 $$
2.  Middle integral with respect to $y$:
    $$ \int_0^3 4 \, dy = [4y]_0^3 = 4(3) - 4(0) = 12 $$
3.  Outer integral with respect to $x$:
    $$ \int_0^2 12 \, dx = [12x]_0^2 = 12(2) - 12(0) = 24 $$

So, the volume is $24$. This makes perfect sense, as the volume of a box is length $\times$ width $\times$ height $= 2 \times 3 \times 4 = 24$. This example, while simple, reinforces the idea that integrating $1$ over a region gives its volume.

**Example 2: Volume under a Paraboloid**

Find the volume of the solid bounded by the paraboloid $z = x^2 + y^2$ and the plane $z = 4$.

Here, the solid is defined by $x^2 + y^2 \le z \le 4$. The region $R$ in the $xy$-plane over which we integrate is determined by the intersection of these two surfaces. Setting $z = x^2 + y^2$ and $z = 4$, we get $x^2 + y^2 = 4$. This is a circle of radius $2$ centered at the origin in the $xy$-plane.

So, our region $E$ is $\{(x, y, z) \mid x^2 + y^2 \le 4, x^2 + y^2 \le z \le 4\}$.

We can set up the triple integral as:
$$ V = \iint_R \left( \int_{x^2+y^2}^4 1 \, dz \right) \, dA $$
where $R$ is the disk $x^2 + y^2 \le 4$.

The inner integral is:
$$ \int_{x^2+y^2}^4 1 \, dz = [z]_{x^2+y^2}^4 = 4 - (x^2 + y^2) $$

Now we need to evaluate:
$$ V = \iint_R (4 - (x^2 + y^2)) \, dA $$
where $R$ is the disk $x^2 + y^2 \le 4$.

This double integral is much easier to solve using **polar coordinates** for the $xy$-plane.
In polar coordinates, $x^2 + y^2 = r^2$ and $dA = r \, dr \, d\theta$. The disk $R$ is described by $0 \le r \le 2$ and $0 \le \theta \le 2\pi$.

$$ V = \int_0^{2\pi} \int_0^2 (4 - r^2) r \, dr \, d\theta $$

Let's evaluate this iterated double integral:
1.  Inner integral with respect to $r$:
    $$ \int_0^2 (4r - r^3) \, dr = \left[ 2r^2 - \frac{r^4}{4} \right]_0^2 = \left( 2(2^2) - \frac{2^4}{4} \right) - (0) = \left( 8 - \frac{16}{4} \right) = 8 - 4 = 4 $$
2.  Outer integral with respect to $\theta$:
    $$ \int_0^{2\pi} 4 \, d\theta = [4\theta]_0^{2\pi} = 4(2\pi) - 4(0) = 8\pi $$

So, the volume of the solid is $8\pi$.

**Analogy for Example 2:** Imagine you have a bowl shaped like the paraboloid $z = x^2 + y^2$. You then fill it with water up to a height of $z=4$. The volume of the water is what we just calculated. The $4 - (x^2+y^2)$ term represents the height of the "water slice" at a given $(x,y)$ in the $xy$-plane. Summing these heights over the circular base gives the total volume.

**Example 3: Volume of a Wedge of a Cylinder**

Find the volume of the solid bounded by the cylinder $x^2 + y^2 = 4$, the plane $z = 0$, and the plane $y + z = 3$.

This problem requires careful visualization. The cylinder $x^2 + y^2 = 4$ has a radius of $2$ and is centered along the $z$-axis. The plane $z=0$ is the $xy$-plane, which forms the bottom of our solid. The plane $y+z=3$ can be rewritten as $z = 3-y$. This plane cuts through the cylinder.

The solid is bounded below by $z=0$ and above by $z = 3-y$.
The projection of this solid onto the $xy$-plane is the base of the cylinder, which is the disk $R$ defined by $x^2 + y^2 \le 4$.

So, the volume integral is:
$$ V = \iint_R \left( \int_0^{3-y} 1 \, dz \right) \, dA $$
where $R$ is the disk $x^2 + y^2 \le 4$.

The inner integral is:
$$ \int_0^{3-y} 1 \, dz = [z]_0^{3-y} = 3-y $$

Now we need to evaluate:
$$ V = \iint_R (3-y) \, dA $$
where $R$ is the disk $x^2 + y^2 \le 4$.

Again, using polar coordinates for the region $R$: $0 \le r \le 2$, $0 \le \theta \le 2\pi$. Remember that $y = r \sin \theta$.

$$ V = \int_0^{2\pi} \int_0^2 (3 - r \sin \theta) r \, dr \, d\theta $$

Let's split this into two integrals:
$$ V = \int_0^{2\pi} \int_0^2 3r \, dr \, d\theta - \int_0^{2\pi} \int_0^2 r^2 \sin \theta \, dr \, d\theta $$

First integral:
$$ \int_0^{2\pi} \left[ \frac{3r^2}{2} \right]_0^2 \, d\theta = \int_0^{2\pi} \left( \frac{3(2^2)}{2} - 0 \right) \, d\theta = \int_0^{2\pi} 6 \, d\theta = [6\theta]_0^{2\pi} = 12\pi $$

Second integral:
$$ \int_0^{2\pi} \left( \int_0^2 r^2 \, dr \right) \sin \theta \, d\theta = \int_0^{2\pi} \left[ \frac{r^3}{3} \right]_0^2 \sin \theta \, d\theta = \int_0^{2\pi} \frac{8}{3} \sin \theta \, d\theta $$
$$ = \frac{8}{3} [-\cos \theta]_0^{2\pi} = \frac{8}{3} (-\cos(2\pi) - (-\cos(0))) = \frac{8}{3} (-1 - (-1)) = \frac{8}{3} (0) = 0 $$

Combining the two parts: $V = 12\pi - 0 = 12\pi$.

**Why is the second part zero?** The integral of $\sin \theta$ over a full period (0 to $2\pi$) is zero. This happens because the solid is symmetric with respect to the $xz$-plane (where $y=0$). For every positive $y$ contribution to the volume (where $z=3-y$ is larger), there's a corresponding negative $y$ contribution (where $z=3-y$ is smaller). When we integrate $y$ over the disk, these cancel out.

**Connection to Engineering:** In electrical science, understanding volumes is crucial for calculating capacitance, inductance, or the distribution of charge and current in three-dimensional conductors. For example, calculating the capacitance of a capacitor with non-planar electrodes would involve integrating a dielectric constant over the volume between the electrodes. In physical science, it’s fundamental for understanding mass distribution, fluid dynamics (calculating volume flow rates), and the volume of materials in chemical reactions.

### 7. Changing the Order of Integration

Sometimes, the initial setup of the iterated triple integral might be difficult. Changing the order of integration can simplify the problem, much like it does for double integrals. This involves re-describing the solid region $E$ based on a different projection or a different order of variables. This is a more advanced topic but is essential for tackling more complex problems and is directly related to **CO4**.

For instance, if a solid is described by constant bounds for $z$, then functions of $z$ for $y$, and then functions of $y$ and $z$ for $x$, we might have:
$E = \{(x, y, z) \mid c \le z \le d, k_1(z) \le y \le k_2(z), g_1(y,z) \le x \le g_2(y,z) \}$

The integral would be:
$$ V = \int_c^d \int_{k_1(z)}^{k_2(z)} \int_{g_1(y,z)}^{g_2(y,z)} 1 \, dx \, dy \, dz $$

Choosing the right order of integration often depends on the shape of the solid and the nature of its bounding surfaces. Cylindrical and Spherical coordinates are also very powerful tools for simplifying triple integrals over regions with inherent symmetry, a topic you'll likely explore further.

### 8. Summary and Key Takeaways

*   **Volume as a Triple Integral:** The volume of a solid region $E$ can be found by calculating the triple integral of $1$ over that region: $V(E) = \iiint_E 1 \, dV$.
*   **Iterated Integrals:** Triple integrals are evaluated as iterated integrals, integrating with respect to one variable at a time.
*   **Setting Up Limits:** The most challenging but crucial step is correctly defining the limits of integration for $x, y, z$ to describe the solid region $E$. This involves visualizing the solid and its projections.
*   **Connection to Double Integrals:** The triple integral approach for volume is a natural extension of the double integral method for volumes under a surface.
*   **Practical Applications:** Understanding volumes calculated via triple integrals is fundamental in various electrical and physical science applications, from electromagnetism to material science. This aligns with **CO2** and **CO4**.

Remember this: **integrating 1 over a region gives you the "measure" of that region.** For a 1D interval, it's length; for a 2D region, it's area; and for a 3D solid, it's volume.

---

### Sample Questions with Answers

**1. Conceptual Question:**
Explain why integrating the function $f(x, y, z) = 1$ over a solid region $E$ gives the volume of $E$.

**Answer:**
The triple integral $\iiint_E f(x, y, z) \, dV$ is defined as the limit of a Riemann sum: $\lim_{n \to \infty} \sum_{k=1}^n f(x_k^*, y_k^*, z_k^*) \Delta V_k$. If we choose $f(x, y, z) = 1$ for all points, then $f(x_k^*, y_k^*, z_k^*) = 1$. The Riemann sum becomes $\lim_{n \to \infty} \sum_{k=1}^n 1 \cdot \Delta V_k = \lim_{n \to \infty} \sum_{k=1}^n \Delta V_k$. This sum is simply the sum of the volumes of all the infinitesimally small sub-regions that make up the solid $E$. As the size of these sub-regions approaches zero, this sum converges to the total volume of the region $E$. Thus, $\iiint_E 1 \, dV = V(E)$. This demonstrates the direct link between the integral of 1 and the measure (volume) of the region, directly addressing **CO2**.

**2. Exam-Oriented Question:**
Find the volume of the solid bounded by the planes $x=0$, $y=0$, $z=0$, and the plane $x+y+z=1$.

**Solution:**
This solid is a tetrahedron with vertices at $(0,0,0)$, $(1,0,0)$, $(0,1,0)$, and $(0,0,1)$.
We need to set up a triple integral $\iiint_E 1 \, dV$.
Let's describe the solid by considering its projection onto the $xy$-plane.
The plane $x+y+z=1$ can be written as $z = 1 - x - y$.
The solid is bounded below by $z=0$ and above by $z = 1 - x - y$.

The region $R$ in the $xy$-plane is formed by the intersection of $z = 1-x-y$ with $z=0$, which is $x+y=1$, along with the boundaries $x=0$ and $y=0$. This forms a right-angled triangle with vertices $(0,0)$, $(1,0)$, and $(0,1)$.

We can set up the integral with $dz \, dy \, dx$:
For a fixed $x$ and $y$ in this triangle, $z$ goes from $0$ to $1-x-y$.
For the region $R$, $x$ ranges from $0$ to $1$. For a fixed $x$, $y$ ranges from $0$ to $1-x$.

So, the volume integral is:
$$ V = \int_0^1 \int_0^{1-x} \int_0^{1-x-y} 1 \, dz \, dy \, dx $$

Evaluate step-by-step:
1.  Inner integral (with respect to $z$):
    $$ \int_0^{1-x-y} 1 \, dz = [z]_0^{1-x-y} = 1-x-y $$
2.  Middle integral (with respect to $y$):
    $$ \int_0^{1-x} (1-x-y) \, dy = \left[ (1-x)y - \frac{y^2}{2} \right]_0^{1-x} $$
    $$ = \left( (1-x)(1-x) - \frac{(1-x)^2}{2} \right) - (0) = (1-x)^2 - \frac{(1-x)^2}{2} = \frac{(1-x)^2}{2} $$
3.  Outer integral (with respect to $x$):
    $$ \int_0^1 \frac{(1-x)^2}{2} \, dx $$
    Let $u = 1-x$, so $du = -dx$. When $x=0$, $u=1$. When $x=1$, $u=0$.
    $$ \int_1^0 \frac{u^2}{2} (-du) = \int_0^1 \frac{u^2}{2} \, du = \left[ \frac{u^3}{6} \right]_0^1 = \frac{1^3}{6} - 0 = \frac{1}{6} $$

The volume of the tetrahedron is $1/6$. This is a classic result and is consistent with the formula for the volume of a pyramid (1/3 * base area * height). The base is a right triangle with area 1/2, and the height is 1, so volume is (1/3)*(1/2)*1 = 1/6. This reinforces **CO2** and demonstrates careful application of triple integrals, also touching upon **CO4**.
