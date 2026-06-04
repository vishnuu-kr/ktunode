---
title: "Triple integral in Cartesian and cylindrical coordinates"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 2"
module: "Module 2: Double integrals"
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f9835"
status: "completed"
scrapedAt: "2026-05-23T16:08:10.641Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 2

## Module 2: Double Integrals and Beyond

### Topic: Triple Integrals in Cartesian and Cylindrical Coordinates

Welcome back, everyone! In our journey through multivariable calculus, we’ve already explored the power of double integrals to calculate areas and volumes. Today, we're going to extend this concept to three dimensions with **triple integrals**. Think of it as moving from calculating the area of a flat shape to calculating the volume of a solid, and then even further to understanding properties *within* that solid. This is crucial for us in Electrical and Physical Sciences as we deal with charge distributions, fluid flow, magnetic fields, and much more – all inherently three-dimensional phenomena.

This topic directly addresses **CO4: Apply the concepts of surface and volume integrals and to learn their inter-relations and applications (Knowledge Level: K3)**. Triple integrals are the foundational building blocks for understanding volume integrals, and as we’ll see, they have deep connections to surface integrals and are essential for many advanced applications in physics and engineering. We'll also touch upon how understanding these integrals relates to **CO2: Understand theoretical idea of multiple integrals and to apply them to find areas and volumes of geometrical shapes (Knowledge Level: K3)**, but now in a 3D context.

### 1. What is a Triple Integral?

Imagine a solid object, let's call it $E$. We want to understand something about this object that isn't just its overall volume, but perhaps its density distribution, or the total mass if its density varies from point to point. Just like a double integral sums up infinitesimal areas to get an area, a triple integral sums up infinitesimal volumes to give us a measure of some property over that volume.

Formally, if we have a function $f(x, y, z)$ that describes some property (like density or temperature) at each point $(x, y, z)$ within a solid region $E$, the triple integral of $f$ over $E$ is denoted as:

$$ \iiint_E f(x, y, z) \, dV $$

Here, $dV$ represents an infinitesimal volume element. The challenge, of course, is defining and calculating this integral. We break down the solid region $E$ into tiny rectangular boxes (cubes, really) of volume $\Delta V = \Delta x \Delta y \Delta z$. For each box, we pick a sample point $(x_i^*, y_j^*, z_k^*)$ and multiply the function's value at that point, $f(x_i^*, y_j^*, z_k^*)$, by the volume of the box, $\Delta V$. Summing these up over all boxes and taking the limit as the box dimensions approach zero gives us the triple integral.

This process sounds a lot like the Riemann sums we used for single and double integrals, and that's no coincidence! It's the natural extension of summing up small contributions to get a total.

#### 1.1. Triple Integrals for Volume

The most basic application of a triple integral is to find the volume of the solid region $E$ itself. If we want to calculate just the volume, we integrate the function $f(x, y, z) = 1$ over the region $E$. Why 1? Because when we multiply $1$ by the infinitesimal volume element $dV$, we're essentially just summing up all the infinitesimal volumes that make up $E$.

$$ \text{Volume}(E) = \iiint_E 1 \, dV $$

This is a direct application of **CO2**, but now in 3D. We're calculating a volume, but instead of just using geometric formulas, we're using integration, which is a much more powerful tool for complex shapes.

#### 1.2. Triple Integrals for Mass and Other Properties

Let's say we have a solid object with a variable density given by $\rho(x, y, z)$ (mass per unit volume). To find the total mass $M$ of the object, we integrate this density function over the volume of the object:

$$ M = \iiint_E \rho(x, y, z) \, dV $$

This is where triple integrals truly shine in physical science. We can use them to find the total amount of charge in a region, the total heat energy, or the average temperature if we know the temperature at every point. This directly connects to **CO4**, as we are integrating a property over a volume.

### 2. Triple Integrals in Cartesian Coordinates

Just as we evaluated double integrals by iterating over $dx \, dy$ or $dy \, dx$, we can evaluate triple integrals by iterating over $dz \, dy \, dx$ (or any permutation of $dx$, $dy$, $dz$). The order of integration often depends on the shape of the region $E$.

Let's consider a solid region $E$ defined by bounds:

*   $a \le x \le b$ (constant bounds for the outer integral)
*   $g_1(x) \le y \le g_2(x)$ (bounds for $y$ that might depend on $x$)
*   $h_1(x, y) \le z \le h_2(x, y)$ (bounds for $z$ that depend on both $x$ and $y$)

Then the triple integral becomes an iterated integral:

$$ \iiint_E f(x, y, z) \, dV = \int_a^b \int_{g_1(x)}^{g_2(x)} \int_{h_1(x, y)}^{h_2(x, y)} f(x, y, z) \, dz \, dy \, dx $$

**The Key is Setting Up the Limits:**
This is often the trickiest part and where most mistakes happen! Think about slicing the solid.

*   The *outermost* integral will have constant limits (e.g., from $x=a$ to $x=b$). This defines the extent of your solid along that axis.
*   The *middle* integral's limits will depend on the variable of the outer integral (e.g., $y$ limits depending on $x$). This describes how the cross-section changes as you move along the first axis.
*   The *innermost* integral's limits will depend on the variables of the outer and middle integrals (e.g., $z$ limits depending on $x$ and $y$). This describes the extent of your solid along the third axis for a given $(x, y)$ point.

**Analogy Time:** Imagine you're filling a swimming pool with water, but the density of the water changes based on depth. You want to know the total "stuff" (say, dissolved minerals) in the pool.
1.  You’d first consider the entire length and width of the pool – these are your outer limits.
2.  Then, for each $(x, y)$ position on the surface, you'd consider how deep the water goes – these are your intermediate limits.
3.  Finally, at each tiny volume element within the water, you’d measure the mineral concentration and multiply by the tiny volume. Summing all these up gives you the total minerals. This is exactly what the iterated integral does!

**Example 1: Volume of a Wedge**
Let's find the volume of the solid region $E$ bounded by the coordinate planes and the plane $x + y + z = 1$.

This solid is a tetrahedron with vertices at $(0,0,0)$, $(1,0,0)$, $(0,1,0)$, and $(0,0,1)$.

1.  **Determine the limits for $x$:** The solid extends from $x=0$ to $x=1$. So, $\int_0^1 \dots dx$.
2.  **Determine the limits for $y$:** For a fixed $x$, the base of the solid lies in the $xy$-plane. The plane $x+y+z=1$ intersects the $xy$-plane ($z=0$) at $x+y=1$, or $y=1-x$. So, for a fixed $x$, $y$ ranges from $0$ to $1-x$. Thus, $\int_0^1 \int_0^{1-x} \dots dy \, dx$.
3.  **Determine the limits for $z$:** For a fixed $(x, y)$, the solid is bounded below by the $xy$-plane ($z=0$) and above by the plane $x+y+z=1$, which means $z=1-x-y$. So, $z$ ranges from $0$ to $1-x-y$. Thus, $\int_0^1 \int_0^{1-x} \int_0^{1-x-y} \, dz \, dy \, dx$.

Now, we integrate $f(x, y, z) = 1$ for volume:

$$ V = \int_0^1 \int_0^{1-x} \int_0^{1-x-y} 1 \, dz \, dy \, dx $$

*   Innermost integral: $\int_0^{1-x-y} 1 \, dz = [z]_0^{1-x-y} = 1-x-y$.
*   Middle integral: $\int_0^{1-x} (1-x-y) \, dy = [y - xy - \frac{y^2}{2}]_0^{1-x}$
    $= (1-x) - x(1-x) - \frac{(1-x)^2}{2}$
    $= (1-x) - x + x^2 - \frac{1-2x+x^2}{2}$
    $= 1-2x+x^2 - \frac{1}{2} + x - \frac{x^2}{2}$
    $= \frac{1}{2} - x + \frac{x^2}{2}$.
*   Outermost integral: $\int_0^1 (\frac{1}{2} - x + \frac{x^2}{2}) \, dx = [\frac{1}{2}x - \frac{x^2}{2} + \frac{x^3}{6}]_0^1$
    $= \frac{1}{2} - \frac{1}{2} + \frac{1}{6} = \frac{1}{6}$.

So, the volume of this tetrahedron is $1/6$. This matches what we'd expect from geometric formulas, but the triple integral method is generalizable. This example is a good illustration of how to set up limits for a simple solid, directly addressing **CO2** and laying the groundwork for **CO4**.

**Common Pitfall:** Incorrectly setting up the limits of integration. Always visualize the slicing process, starting from the innermost integral.

### 3. Triple Integrals in Cylindrical Coordinates

Cartesian coordinates are great, but for regions with circular symmetry, like cylinders, cones, or spheres, switching to **cylindrical coordinates** can simplify our calculations dramatically. This is analogous to using polar coordinates for double integrals.

**Recall Cylindrical Coordinates:**
A point $(x, y, z)$ in Cartesian coordinates can be represented in cylindrical coordinates $(r, \theta, z)$ as follows:

*   $x = r \cos \theta$
*   $y = r \sin \theta$
*   $z = z$

And the inverse transformations:

*   $r^2 = x^2 + y^2$ (This $r$ is the same as the $r$ in polar coordinates, representing the distance from the $z$-axis)
*   $\tan \theta = \frac{y}{x}$
*   $z = z$

**The Jacobian and the Volume Element:**
When we change coordinate systems in integration, we need to adjust the infinitesimal volume element $dV$. In Cartesian coordinates, $dV = dx \, dy \, dz$. In cylindrical coordinates, the volume element is:

$$ dV = r \, dr \, d\theta \, dz $$

The factor of $r$ comes from the Jacobian of the transformation, which accounts for the stretching of area elements in polar (and thus cylindrical) coordinates. Remember this $r$ in $dV$ is absolutely crucial! Forgetting it is a very common error.

**Setting Up Triple Integrals in Cylindrical Coordinates:**
If our region $E$ has symmetry around the $z$-axis, it's often natural to describe it using bounds for $r$, $\theta$, and $z$. A typical region might be described as:

*   $a \le \theta \le b$ (constant or variable bounds for the angle)
*   $g_1(\theta) \le r \le g_2(\theta)$ (bounds for $r$ that might depend on $\theta$)
*   $h_1(r, \theta) \le z \le h_2(r, \theta)$ (bounds for $z$ that depend on $r$ and $\theta$)

The triple integral then becomes:

$$ \iiint_E f(x, y, z) \, dV = \int_a^b \int_{g_1(\theta)}^{g_2(\theta)} \int_{h_1(r, \theta)}^{h_2(r, \theta)} f(r \cos \theta, r \sin \theta, z) \, r \, dz \, dr \, d\theta $$

Notice that we also need to substitute the Cartesian expressions for $x$ and $y$ in $f(x, y, z)$ with their cylindrical equivalents.

**Example 2: Volume of a Cylinder**
Let's find the volume of a cylinder with radius $R$ and height $H$. We can set this up in Cartesian coordinates, but it's much cleaner in cylindrical coordinates. The cylinder is described by $x^2 + y^2 \le R^2$ and $0 \le z \le H$.

In cylindrical coordinates, this is:
*   $0 \le \theta \le 2\pi$ (a full circle)
*   $0 \le r \le R$ (radius from 0 to $R$)
*   $0 \le z \le H$ (height from 0 to $H$)

We are calculating the volume, so $f(x, y, z) = 1$.

$$ V = \iiint_E 1 \, dV = \int_0^{2\pi} \int_0^R \int_0^H r \, dz \, dr \, d\theta $$

Let's evaluate this step-by-step:

*   Innermost integral: $\int_0^H r \, dz = r[z]_0^H = rH$.
*   Middle integral: $\int_0^R (rH) \, dr = H [\frac{r^2}{2}]_0^R = H \frac{R^2}{2}$.
*   Outermost integral: $\int_0^{2\pi} (H \frac{R^2}{2}) \, d\theta = \frac{HR^2}{2} [\theta]_0^{2\pi} = \frac{HR^2}{2} (2\pi) = \pi R^2 H$.

And voilà! We get the familiar formula for the volume of a cylinder. This again highlights **CO2** but shows the power of changing coordinates for simplification.

**Example 3: Mass of a Solid Hemisphere**
Consider a solid hemisphere of radius $a$ with its flat face on the $xy$-plane, and let its density be $\rho(x, y, z) = z$. What is its total mass?

The hemisphere is described by $x^2 + y^2 + z^2 \le a^2$ and $z \ge 0$.
In cylindrical coordinates:
*   $0 \le \theta \le 2\pi$
*   $0 \le r \le a$
*   The upper boundary of the hemisphere is $z = \sqrt{a^2 - x^2 - y^2}$. In cylindrical coordinates, this is $z = \sqrt{a^2 - r^2}$. So, $0 \le z \le \sqrt{a^2 - r^2}$.
*   The density function is $\rho(x, y, z) = z$.

The mass integral is:
$$ M = \iiint_E \rho(x, y, z) \, dV = \int_0^{2\pi} \int_0^a \int_0^{\sqrt{a^2 - r^2}} z \cdot r \, dz \, dr \, d\theta $$

Let's evaluate:

*   Innermost integral: $\int_0^{\sqrt{a^2 - r^2}} z r \, dz = r [\frac{z^2}{2}]_0^{\sqrt{a^2 - r^2}} = r \frac{(\sqrt{a^2 - r^2})^2}{2} = \frac{1}{2} r (a^2 - r^2)$.
*   Middle integral: $\int_0^a \frac{1}{2} r (a^2 - r^2) \, dr = \frac{1}{2} \int_0^a (a^2 r - r^3) \, dr$
    $= \frac{1}{2} [a^2 \frac{r^2}{2} - \frac{r^4}{4}]_0^a$
    $= \frac{1}{2} (a^2 \frac{a^2}{2} - \frac{a^4}{4}) = \frac{1}{2} (\frac{a^4}{2} - \frac{a^4}{4}) = \frac{1}{2} (\frac{a^4}{4}) = \frac{a^4}{8}$.
*   Outermost integral: $\int_0^{2\pi} \frac{a^4}{8} \, d\theta = \frac{a^4}{8} [\theta]_0^{2\pi} = \frac{a^4}{8} (2\pi) = \frac{\pi a^4}{4}$.

So, the total mass of this hemisphere with density proportional to height is $\frac{\pi a^4}{4}$. This is a good example demonstrating **CO4** for a physical property (mass) using a triple integral.

**When to Use Cylindrical Coordinates:**
Think "cylinder," "cone," "dome," or anything with rotational symmetry around an axis. If the boundaries of your region involve $x^2 + y^2 = R^2$ or $\sqrt{x^2 + y^2}$, cylindrical coordinates are almost certainly your best friend.

### 4. Connecting to Course Outcomes

Let's recap how this topic ties into our course objectives:

*   **CO1: Compute the partial and total derivatives and maxima and minima of multivariable functions and to apply in engineering problems.** While this topic focuses on integrals, the understanding of multivariable functions $f(x, y, z)$ and their behavior over a region is foundational. For instance, finding the center of mass (which involves calculating moments, often using triple integrals) requires finding minimum or average values of quantities, indirectly relating to optimization.
*   **CO2: Understand theoretical idea of multiple integrals and to apply them to find areas and volumes of geometrical shapes.** We've directly applied triple integrals to calculate volumes of solids, extending the concept from double integrals for areas. The process of setting up iterated integrals is the core of applying these theoretical ideas.
*   **CO3: Compute the derivatives and line integrals of vector functions and to learn their applications.** While not directly covered here, vector calculus builds upon scalar fields and multiple integrals. Concepts like divergence and curl, which are central to vector calculus, are often calculated using partial derivatives of scalar fields, and their integrals over volumes (divergence theorem) or surfaces are deeply connected to the triple and double integrals we've studied.
*   **CO4: Apply the concepts of surface and volume integrals and to learn their inter-relations and applications.** This is where triple integrals fit most prominently. We've seen how to calculate mass using triple integrals, which is a direct application of volume integrals. The ability to evaluate these integrals over complex domains, especially by changing coordinate systems, is crucial for advanced applications like calculating moments of inertia, fluid flow, electric potential, etc. The relationship between volume integrals and surface integrals via theorems like the Divergence Theorem will be a key focus later in the course, and our current ability to compute volume integrals is prerequisite knowledge.

**Summary for Exams:**

*   **Cartesian:** Set up iterated integrals $\int \int \int f(x,y,z) \, dz \, dy \, dx$. Focus on correctly defining the limits based on the solid's geometry, often by visualizing slices.
*   **Cylindrical:** Use $x = r \cos \theta, y = r \sin \theta, z = z$ and $dV = r \, dr \, d\theta \, dz$. Crucial for regions with rotational symmetry. Remember the factor of $r$ in $dV$!
*   **The Choice:** If the region's boundaries involve $x^2+y^2$, think cylindrical. If it's a simple rectangular box or a region bounded by planes with no obvious symmetry, Cartesian might be fine.

We've covered a lot today, moving from the basic definition of a triple integral to its application in both Cartesian and cylindrical coordinate systems. Remember, mastering the setup of the limits of integration and the correct volume element is key to success in evaluating these integrals.

### Sample Questions and Answers

**Question 1 (Conceptual):**
When would you choose to use cylindrical coordinates instead of Cartesian coordinates for evaluating a triple integral, and why?

**Answer:**
You would choose cylindrical coordinates when the solid region $E$ exhibits symmetry about an axis (typically the $z$-axis). This often occurs when the boundaries of the region involve expressions like $x^2 + y^2 = R^2$ (cylinders), cones, or paraboloids of revolution. The reason for this choice is that the integration limits become much simpler in cylindrical coordinates ($r$, $\theta$, $z$) compared to Cartesian coordinates ($x$, $y$, $z$). For instance, a cylinder of radius $R$ would have bounds $0 \le r \le R$ and $0 \le \theta \le 2\pi$, which are constant and easy to integrate over. Furthermore, the volume element $dV = r \, dr \, d\theta \, dz$ correctly accounts for the geometry of cylindrical slices. Forgetting the $r$ in $dV$ is a common mistake when using cylindrical coordinates.

**Question 2 (Application - Exam Style):**
Evaluate the triple integral $\iiint_E x \, dV$, where $E$ is the solid region bounded by the cylinder $x^2 + y^2 = 4$ and the planes $z=0$ and $z=3$.

**Answer:**
The region $E$ is a cylinder of radius 2, centered along the $z$-axis, extending from $z=0$ to $z=3$. This symmetry strongly suggests using cylindrical coordinates.

1.  **Coordinate Transformation:**
    *   $x = r \cos \theta$
    *   $y = r \sin \theta$
    *   $z = z$
    *   $dV = r \, dz \, dr \, d\theta$

2.  **Determine the Limits of Integration:**
    *   For the cylinder $x^2 + y^2 \le 4$, in cylindrical coordinates, $r^2 \le 4$, so $0 \le r \le 2$.
    *   To cover the entire cylinder, the angle $\theta$ must range from $0$ to $2\pi$.
    *   The height of the cylinder is given by the planes $z=0$ and $z=3$, so $0 \le z \le 3$.

3.  **Set up the Integral:**
    The function $f(x, y, z) = x$ becomes $f(r \cos \theta, r \sin \theta, z) = r \cos \theta$ in cylindrical coordinates.
    $$ \iiint_E x \, dV = \int_0^{2\pi} \int_0^2 \int_0^3 (r \cos \theta) \, r \, dz \, dr \, d\theta $$
    $$ = \int_0^{2\pi} \int_0^2 \int_0^3 r^2 \cos \theta \, dz \, dr \, d\theta $$

4.  **Evaluate the Integral:**
    *   Innermost integral with respect to $z$:
        $$ \int_0^3 r^2 \cos \theta \, dz = r^2 \cos \theta [z]_0^3 = 3r^2 \cos \theta $$
    *   Middle integral with respect to $r$:
        $$ \int_0^2 3r^2 \cos \theta \, dr = 3 \cos \theta \int_0^2 r^2 \, dr = 3 \cos \theta [\frac{r^3}{3}]_0^2 = 3 \cos \theta (\frac{8}{3}) = 8 \cos \theta $$
    *   Outermost integral with respect to $\theta$:
        $$ \int_0^{2\pi} 8 \cos \theta \, d\theta = 8 [\sin \theta]_0^{2\pi} = 8 (\sin(2\pi) - \sin(0)) = 8 (0 - 0) = 0 $$

**Result:** The value of the triple integral is 0. This makes physical sense. The function $x$ is positive for $x>0$ (the right half of the cylinder) and negative for $x<0$ (the left half). Due to the symmetry of the cylinder about the $yz$-plane, the positive contributions from the right half cancel out the negative contributions from the left half.

**Question 3 (Conceptual/Setup):**
Describe the region of integration for the triple integral $\int_0^2 \int_0^{\sqrt{4-x^2}} \int_0^{x^2+y^2} dz \, dy \, dx$ in cylindrical coordinates. What would be the integrand and the volume element in cylindrical coordinates?

**Answer:**
First, let's understand the region of integration in Cartesian coordinates.
*   The outer integral is $\int_0^2 dx$, so $0 \le x \le 2$.
*   The middle integral is $\int_0^{\sqrt{4-x^2}} dy$. This implies $y$ ranges from $0$ to $\sqrt{4-x^2}$. Squaring the upper bound gives $y^2 = 4-x^2$, or $x^2 + y^2 = 4$. Since $x \ge 0$ and $y \ge 0$ from the limits, this describes a quarter-circle in the first quadrant of the $xy$-plane with radius 2.
*   The inner integral is $\int_0^{x^2+y^2} dz$. This means $z$ ranges from $0$ to $x^2+y^2$.

So, the region is a quarter-cylinder in the first octant, bounded below by the $xy$-plane ($z=0$) and above by the paraboloid $z = x^2+y^2$.

Now, let's convert this to cylindrical coordinates:
*   **Region:**
    *   $x^2+y^2=4$ becomes $r^2=4$, so $r=2$. Since it's a quarter-circle in the first quadrant, $0 \le r \le 2$ and $0 \le \theta \le \pi/2$.
    *   The bounds for $z$ are $0 \le z \le x^2+y^2$. In cylindrical coordinates, this becomes $0 \le z \le r^2$.

*   **Integrand and Volume Element:**
    Let the original integrand be $f(x, y, z)$. In cylindrical coordinates, the integrand would be $f(r \cos \theta, r \sin \theta, z)$.
    The volume element in cylindrical coordinates is $dV = r \, dz \, dr \, d\theta$.

Therefore, the integral in cylindrical coordinates would be:
$$ \int_0^{\pi/2} \int_0^2 \int_0^{r^2} f(r \cos \theta, r \sin \theta, z) \, r \, dz \, dr \, d\theta $$
(Note: The original question only provided the limits, not the integrand itself. If the integrand were, say, $z$, then it would become $\int_0^{\pi/2} \int_0^2 \int_0^{r^2} z \cdot r \, dz \, dr \, d\theta$.)
