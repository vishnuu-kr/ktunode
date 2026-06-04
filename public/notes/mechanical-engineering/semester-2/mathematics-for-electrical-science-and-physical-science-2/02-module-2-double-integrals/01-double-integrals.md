---
title: "Double integrals"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 2"
module: "Module 2: Double integrals"
branch: "Mechanical Engineering"
semester: 2
topicId: "68bd1edffeb4799d95e839a2"
status: "completed"
scrapedAt: "2026-05-20T17:45:46.241Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 2

## Module 2: Double Integrals

### Topic: Double Integrals

Hello everyone! Welcome back to our journey through the fascinating world of multivariable calculus. In this module, we're going to dive into the concept of **Double Integrals**. Now, you might be thinking, "We've already dealt with integrals in single-variable calculus. What's new here?" Well, just as single integrals help us calculate areas under curves in 2D, double integrals are our go-to tool for calculating **volumes under surfaces** in 3D. And as we'll see, their applications extend far beyond just volumes, playing crucial roles in electrical science and physical science.

This topic is particularly important for our **Course Outcome 2 (CO2): Understand theoretical idea of multiple integrals and to apply them to find areas and volumes of geometrical shapes.** We'll be building a solid understanding of what these double integrals represent and how to use them to solve practical problems. You'll also see how this naturally leads into later course outcomes concerning surface and volume integrals.

#### 1. From Single Integrals to Double Integrals: A Natural Progression

Remember how a single definite integral, $\int_a^b f(x) \, dx$, essentially sums up infinitesimal "rectangles" of area $f(x) \, dx$ over an interval $[a, b]$? This gives us the area under the curve $y=f(x)$.

Now, let's imagine we have a function of two variables, say $z = f(x, y)$. This function describes a surface in three-dimensional space. Instead of an interval on the x-axis, we're now interested in a region, let's call it $R$, in the xy-plane. To find the volume under this surface $z=f(x, y)$ and above the region $R$, we need to sum up infinitesimal "columns" of volume.

How do we get these infinitesimal volumes? Well, if we consider a tiny rectangular patch in the xy-plane with dimensions $\Delta x$ and $\Delta y$, its area is $\Delta A = \Delta x \, \Delta y$. If we multiply this area by the height of the surface above it, $f(x, y)$, we get an infinitesimal volume element, $\Delta V \approx f(x, y) \, \Delta x \, \Delta y$.

A double integral is precisely the tool that allows us to sum up all these infinitesimal volume elements over the entire region $R$. We denote this as:

$$ V = \iint_R f(x, y) \, dA $$

Here, $dA$ represents the infinitesimal area element in the xy-plane. It's often written as $dx \, dy$ or $dy \, dx$, depending on the order of integration we choose.

Think of it like this: Imagine you're trying to calculate the total amount of rainfall over a city park. The park is our region $R$ in the xy-plane. The rainfall intensity at any point $(x, y)$ in the park might vary, let's say $f(x, y)$ millimeters per square meter per hour. To find the total volume of water that falls on the park, you'd essentially be summing up the volume of water (intensity $\times$ area) over every tiny square meter of the park. That's exactly what a double integral does for us!

**Key Idea:** Double integrals extend the concept of summation from one dimension (areas under curves) to two dimensions (volumes under surfaces).

#### 2. Evaluating Double Integrals: Iterated Integrals

The fundamental theorem of calculus is our guiding principle here. Just as we break down $\int_a^b f(x) \, dx$ into antiderivatives, we can evaluate a double integral by performing a sequence of single integrations. This leads us to the concept of **iterated integrals**.

An iterated integral is formed by evaluating one integral at a time, treating the other variable as a constant. For a double integral over a rectangular region $R = [a, b] \times [c, d]$, we have two ways to set up the iteration:

*   **Integration with respect to y first, then x:**
    $$ \int_a^b \left( \int_c^d f(x, y) \, dy \right) \, dx $$
    Here, we first treat $x$ as a constant and integrate $f(x, y)$ with respect to $y$ from $y=c$ to $y=d$. The result will be a function of $x$ only. Then, we integrate this resulting function of $x$ with respect to $x$ from $x=a$ to $x=b$.

*   **Integration with respect to x first, then y:**
    $$ \int_c^d \left( \int_a^b f(x, y) \, dx \right) \, dy $$
    Similarly, we first treat $y$ as a constant, integrate $f(x, y)$ with respect to $x$ from $x=a$ to $x=b$. The result is a function of $y$. Then, we integrate this function of $y$ with respect to $y$ from $y=c$ to $y=d$.

This is where Fubini's Theorem comes into play. For a continuous function $f(x, y)$ over a rectangular region $R = [a, b] \times [c, d]$, Fubini's Theorem tells us that:

$$ \iint_R f(x, y) \, dA = \int_a^b \left( \int_c^d f(x, y) \, dy \right) \, dx = \int_c^d \left( \int_a^b f(x, y) \, dx \right) \, dy $$

This is incredibly useful! It means that for rectangular regions, we can choose the order of integration that is easiest to compute. This is a fundamental concept for solving problems, and it directly supports **CO2** by giving us the computational tools.

**Example: Volume of a Rectangular Box**

Let's find the volume under the plane $z = 2x + 3y + 1$ over the rectangular region $R = [0, 1] \times [0, 2]$. This is a straightforward application.
We want to calculate:
$$ \iint_R (2x + 3y + 1) \, dA $$

Let's use the order $dy \, dx$:
$$ \int_0^1 \left( \int_0^2 (2x + 3y + 1) \, dy \right) \, dx $$

First, the inner integral (with respect to $y$, treating $x$ as constant):
$$ \int_0^2 (2x + 3y + 1) \, dy = \left[ 2xy + \frac{3}{2}y^2 + y \right]_0^2 $$
$$ = \left( 2x(2) + \frac{3}{2}(2)^2 + 2 \right) - \left( 2x(0) + \frac{3}{2}(0)^2 + 0 \right) $$
$$ = 4x + \frac{3}{2}(4) + 2 = 4x + 6 + 2 = 4x + 8 $$

Now, the outer integral (with respect to $x$):
$$ \int_0^1 (4x + 8) \, dx = \left[ 2x^2 + 8x \right]_0^1 $$
$$ = (2(1)^2 + 8(1)) - (2(0)^2 + 8(0)) = 2 + 8 = 10 $$

So, the volume under the plane is 10 cubic units. This confirms **CO2** by providing a volume calculation.

**Quick Tip for Exams:** Always check if the region is rectangular. If it is, Fubini's theorem makes your life much easier. Whichever order of integration is simpler, go for it!

#### 3. Double Integrals Over General Regions

What happens when our region $R$ isn't a simple rectangle? This is where things get a bit more nuanced but also more powerful. We need to define the limits of integration based on the shape of the region. There are two main types of regions we consider:

*   **Type I Region:** A region bounded by the vertical lines $x=a$ and $x=b$, and by the graphs of two continuous functions $y=g_1(x)$ and $y=g_2(x)$, where $g_1(x) \le g_2(x)$ for all $x$ in $[a, b]$.

    For such a region, the double integral is set up as an iterated integral like this:
    $$ \iint_R f(x, y) \, dA = \int_a^b \left( \int_{g_1(x)}^{g_2(x)} f(x, y) \, dy \right) \, dx $$
    We integrate with respect to $y$ first, from the lower boundary curve $g_1(x)$ to the upper boundary curve $g_2(x)$. The result is a function of $x$. Then, we integrate this function with respect to $x$ from $a$ to $b$.

    **Analogy:** Imagine you're measuring the amount of dust settling on a specialized sensor board. The board has a specific shape. For a Type I region, imagine slicing the board vertically along the x-axis. Each slice has a varying width (determined by the $g_1(x)$ and $g_2(x)$ boundaries) and you're summing up the dust intensity across the height of that slice, then summing up these slice totals across the entire length of the board.

*   **Type II Region:** A region bounded by the horizontal lines $y=c$ and $y=d$, and by the graphs of two continuous functions $x=h_1(y)$ and $x=h_2(y)$, where $h_1(y) \le h_2(y)$ for all $y$ in $[c, d]$.

    For a Type II region, the integral is set up as:
    $$ \iint_R f(x, y) \, dA = \int_c^d \left( \int_{h_1(y)}^{h_2(y)} f(x, y) \, dx \right) \, dy $$
    Here, we integrate with respect to $x$ first, from the left boundary curve $h_1(y)$ to the right boundary curve $h_2(y)$. The result is a function of $y$. Then, we integrate this function with respect to $y$ from $c$ to $d$.

    **Analogy:** This is like slicing the sensor board horizontally. Each slice has a varying length (determined by $h_1(y)$ and $h_2(y)$ boundaries), and you're summing the dust intensity across the width of that slice, then summing up these slice totals across the entire height of the board.

**Example: Area of a Simple Region**

Let's find the area of the region bounded by the parabola $y = x^2$ and the line $y = x + 2$. This is a classic example that often appears in exams.

First, we need to visualize and define our region $R$. We find the intersection points of $y = x^2$ and $y = x + 2$:
$x^2 = x + 2 \implies x^2 - x - 2 = 0 \implies (x-2)(x+1) = 0$.
So, the intersection points are at $x = -1$ and $x = 2$.
When $x=-1$, $y=(-1)^2=1$. When $x=2$, $y=2^2=4$.

Let's sketch this. The parabola $y=x^2$ opens upwards, and the line $y=x+2$ has a positive slope and y-intercept at 2. The line is above the parabola in the region between $x=-1$ and $x=2$.

So, we can define this as a Type I region:
*   $x$ ranges from $a = -1$ to $b = 2$.
*   For a fixed $x$, $y$ ranges from the lower curve $y = x^2$ (so $g_1(x) = x^2$) to the upper curve $y = x + 2$ (so $g_2(x) = x + 2$).

The area of $R$ is given by $\iint_R 1 \, dA$. Why 1? Because we are essentially summing up infinitesimal area elements $dA = dx \, dy$. When $f(x, y) = 1$, the integral $\iint_R 1 \, dA$ gives the area of the region $R$. This is a direct application of **CO2**.

Area $= \int_{-1}^2 \left( \int_{x^2}^{x+2} 1 \, dy \right) \, dx$

Inner integral:
$\int_{x^2}^{x+2} 1 \, dy = [y]_{x^2}^{x+2} = (x+2) - x^2 = x + 2 - x^2$.

Outer integral:
Area $= \int_{-1}^2 (x + 2 - x^2) \, dx = \left[ \frac{x^2}{2} + 2x - \frac{x^3}{3} \right]_{-1}^2$
$= \left( \frac{2^2}{2} + 2(2) - \frac{2^3}{3} \right) - \left( \frac{(-1)^2}{2} + 2(-1) - \frac{(-1)^3}{3} \right)$
$= \left( \frac{4}{2} + 4 - \frac{8}{3} \right) - \left( \frac{1}{2} - 2 - \frac{-1}{3} \right)$
$= \left( 2 + 4 - \frac{8}{3} \right) - \left( \frac{1}{2} - 2 + \frac{1}{3} \right)$
$= \left( 6 - \frac{8}{3} \right) - \left( \frac{3}{6} - \frac{12}{6} + \frac{2}{6} \right)$
$= \left( \frac{18-8}{3} \right) - \left( \frac{3-12+2}{6} \right)$
$= \frac{10}{3} - \left( \frac{-7}{6} \right) = \frac{10}{3} + \frac{7}{6} = \frac{20}{6} + \frac{7}{6} = \frac{27}{6} = \frac{9}{2}$.

So, the area of the region is $9/2$ square units.

**Important Note on Changing Order of Integration:** Sometimes, the region might be easier to describe as a Type II region, or the integral might be easier to evaluate in the $dx \, dy$ order. In such cases, you need to sketch the region carefully and rewrite the limits. This skill is crucial and often tested. For our example above, can we describe it as a Type II region?

Let's try to express the boundaries as functions of $y$:
From $y = x^2$, we get $x = \pm \sqrt{y}$. The right half is $x = \sqrt{y}$ and the left half is $x = -\sqrt{y}$.
From $y = x+2$, we get $x = y-2$.

Now, we need to consider the range of $y$. The lowest $y$ value in the intersection is 1 (at $x=-1$), and the highest is 4 (at $x=2$).
However, the bounding curves for $x$ change at $y=1$.
For $0 \le y \le 1$, the region is bounded by $x = -\sqrt{y}$ on the left and $x = \sqrt{y}$ on the right.
For $1 \le y \le 4$, the region is bounded by $x = y-2$ on the left and $x = \sqrt{y}$ on the right.

This means we have to split the integral into two parts if we want to use the Type II description!
Area $= \int_0^1 \left( \int_{-\sqrt{y}}^{\sqrt{y}} 1 \, dx \right) \, dy + \int_1^4 \left( \int_{y-2}^{\sqrt{y}} 1 \, dx \right) \, dy$

This is significantly more work than the Type I setup for this particular problem. This reinforces the idea that **sketching the region is paramount** and helps you choose the most efficient integration order.

**Connection to Electrical/Physical Science (CO2, CO4):** Finding areas of planar regions is fundamental. For instance, calculating the area of a cross-section of a conductor or a magnetic field's influence zone. When we move to volumes (CO2) and later to surface/volume integrals (CO4), this concept of defining regions and integrating over them becomes even more critical. For example, calculating the total charge distributed over a 2D plate or the mass of a lamina with varying density.

#### 4. Applications of Double Integrals

Double integrals are not just theoretical constructs; they are powerful tools for solving real-world problems in various fields.

*   **Volumes:** As we've seen, $\iint_R f(x, y) \, dA$ calculates the volume under the surface $z = f(x, y)$ and above the region $R$ in the xy-plane. This is directly related to **CO2**.
*   **Areas:** Setting $f(x, y) = 1$ gives the area of the region $R$. We just did an example of this.
*   **Mass:** If a thin flat plate (a lamina) has a density function $\rho(x, y)$ (mass per unit area) over a region $R$, its total mass $M$ is given by:
    $$ M = \iint_R \rho(x, y) \, dA $$
    This is an application of **CO2** to a physical property and builds towards understanding mass distributions relevant to **CO4**.
*   **Centroids and Centers of Mass:** For a lamina with density $\rho(x, y)$ over region $R$, the coordinates of the center of mass $(\bar{x}, \bar{y})$ are given by:
    $$ \bar{x} = \frac{1}{M} \iint_R x \, \rho(x, y) \, dA \quad \text{and} \quad \bar{y} = \frac{1}{M} \iint_R y \, \rho(x, y) \, dA $$
    These calculations involve double integrals and are crucial for understanding the physical properties of objects, linking to **CO2**'s application aspect.
*   **Moments of Inertia:** This is a key concept in mechanics and electrical engineering (e.g., rotational inertia). The moment of inertia of a lamina about an axis is calculated using double integrals. For example, the moment of inertia about the z-axis ($I_z$) is:
    $$ I_z = \iint_R (x^2 + y^2) \rho(x, y) \, dA $$
    This is a direct application that often appears in exams for physical science and engineering students.
*   **Average Value of a Function:** The average value of a function $f(x, y)$ over a region $R$ is given by:
    $$ f_{\text{avg}} = \frac{1}{\text{Area}(R)} \iint_R f(x, y) \, dA $$
    This is useful for averaging quantities like temperature, voltage, or current density over an area. This concept directly utilizes the results of double integrals and supports **CO2** by providing a method to find average quantities.

**Electrical Science Connection (CO1, CO3, CO4):**
While this module focuses on double integrals (CO2), these concepts lay the groundwork for more advanced topics. For example, if $f(x, y)$ represents the charge density on a 2D surface, the double integral $\iint_R f(x, y) \, dA$ gives the total charge on that surface. This relates to electrostatics. Further, concepts like flux, which involves integrating a vector field over a surface, naturally extend from these basic ideas of integration over regions. Understanding partial derivatives (CO1) is essential for setting up vector fields and density functions, and line integrals (CO3) and surface integrals (CO4) are direct extensions of this integration over different geometric entities.

#### 5. Double Integrals in Polar Coordinates

Just as polar coordinates simplify integration in single-variable calculus for circular regions, they can be extremely useful for double integrals when the region of integration or the integrand has a circular symmetry.

Recall the transformation from Cartesian to polar coordinates:
$x = r \cos \theta$
$y = r \sin \theta$

The crucial element when changing variables in multiple integrals is the **Jacobian determinant**, which represents the scaling factor for the area element. For the transformation to polar coordinates, the Jacobian is $r$. Therefore, the differential area element $dA$ in Cartesian coordinates ($dx \, dy$ or $dy \, dx$) becomes $r \, dr \, d\theta$ in polar coordinates.

$$ dA = dx \, dy = r \, dr \, d\theta $$

So, a double integral $\iint_R f(x, y) \, dA$ over a region $R$ in the xy-plane can be transformed into an integral in polar coordinates:
$$ \iint_R f(x, y) \, dA = \iint_{R'} f(r \cos \theta, r \sin \theta) \, r \, dr \, d\theta $$
where $R'$ is the region $R$ described in polar coordinates.

**When to use Polar Coordinates?**

1.  **Circular or Sector-like Regions:** If the region $R$ is a disk, a sector of a disk, an annulus, or can be easily described by constant ranges of $r$ and $\theta$.
2.  **Integrands with $x^2 + y^2$:** If the function $f(x, y)$ involves $x^2 + y^2$ terms, as these simplify to $r^2$.

**Example: Volume of a Hemisphere**

Let's find the volume of a solid hemisphere of radius $a$. This is the volume under the surface $z = \sqrt{a^2 - x^2 - y^2}$ (the upper hemisphere) and above the disk $R: x^2 + y^2 \le a^2$ in the xy-plane.

The function is $f(x, y) = \sqrt{a^2 - x^2 - y^2}$. The region $R$ is a disk of radius $a$ centered at the origin. This screams "polar coordinates!"

In polar coordinates, the region $R$ is described by:
$0 \le r \le a$ (radius varies from 0 to $a$)
$0 \le \theta \le 2\pi$ (angle covers the full circle)

The function becomes $f(r \cos \theta, r \sin \theta) = \sqrt{a^2 - (r^2 \cos^2 \theta + r^2 \sin^2 \theta)} = \sqrt{a^2 - r^2(\cos^2 \theta + \sin^2 \theta)} = \sqrt{a^2 - r^2}$.

The volume integral in polar coordinates is:
$$ V = \int_0^{2\pi} \int_0^a (\sqrt{a^2 - r^2}) \, r \, dr \, d\theta $$

Now, let's evaluate this. The inner integral is with respect to $r$:
$$ \int_0^a r \sqrt{a^2 - r^2} \, dr $$
We can use a substitution here. Let $u = a^2 - r^2$. Then $du = -2r \, dr$, so $r \, dr = -\frac{1}{2} du$.
When $r=0$, $u = a^2$. When $r=a$, $u = a^2 - a^2 = 0$.

The integral becomes:
$$ \int_{a^2}^0 \sqrt{u} \left(-\frac{1}{2} du\right) = -\frac{1}{2} \int_{a^2}^0 u^{1/2} \, du $$
$$ = \frac{1}{2} \int_0^{a^2} u^{1/2} \, du $$
$$ = \frac{1}{2} \left[ \frac{u^{3/2}}{3/2} \right]_0^{a^2} = \frac{1}{2} \left[ \frac{2}{3} u^{3/2} \right]_0^{a^2} $$
$$ = \frac{1}{3} [(a^2)^{3/2} - 0^{3/2}] = \frac{1}{3} (a^3) = \frac{a^3}{3} $$

Now, the outer integral with respect to $\theta$:
$$ V = \int_0^{2\pi} \left( \frac{a^3}{3} \right) \, d\theta $$
Since $a^3/3$ is a constant with respect to $\theta$:
$$ V = \frac{a^3}{3} \int_0^{2\pi} 1 \, d\theta = \frac{a^3}{3} [\theta]_0^{2\pi} $$
$$ V = \frac{a^3}{3} (2\pi - 0) = \frac{2}{3} \pi a^3 $$

This is indeed the well-known formula for the volume of a hemisphere. This is a perfect example for **CO2**, demonstrating a volume calculation using a different coordinate system.

**Remember:** The Jacobian factor $r$ is crucial. Forgetting it is a very common mistake when switching to polar coordinates. Always double-check that $r \, dr \, d\theta$ is used!

#### 6. Summary and Key Takeaways

Let's recap the essential points we've covered regarding double integrals:

*   **Concept:** Double integrals extend single integration to calculate volumes under surfaces and more generally sum quantities over 2D regions. $\iint_R f(x, y) \, dA$ is the fundamental notation.
*   **Iterated Integrals:** We evaluate double integrals by performing sequential single integrations. For a rectangular region $R = [a, b] \times [c, d]$ and a continuous function $f(x, y)$, Fubini's Theorem states $\iint_R f(x, y) \, dA = \int_a^b \int_c^d f(x, y) \, dy \, dx = \int_c^d \int_a^b f(x, y) \, dx \, dy$.
*   **General Regions:** For non-rectangular regions, we define Type I (vertical slices) and Type II (horizontal slices) regions, setting up appropriate limits for the iterated integrals:
    *   Type I: $\int_a^b \int_{g_1(x)}^{g_2(x)} f(x, y) \, dy \, dx$
    *   Type II: $\int_c^d \int_{h_1(y)}^{h_2(y)} f(x, y) \, dx \, dy$
    **Crucially, always sketch the region to determine the correct limits and choose the most convenient order of integration.**
*   **Applications:** Double integrals are vital for finding volumes, areas, mass, center of mass, moments of inertia, and average values of functions. These are core concepts for **CO2** and build towards **CO4**.
*   **Polar Coordinates:** For regions with circular symmetry or integrands involving $x^2+y^2$, converting to polar coordinates ($x=r\cos\theta, y=r\sin\theta$) can simplify calculations, remembering that $dA = r \, dr \, d\theta$.

Understanding double integrals is a significant step in multivariable calculus. It bridges the gap between basic integration and the more complex concepts in vector calculus and their applications in physics and engineering. Keep practicing sketching regions and setting up integrals – that's where the real understanding and exam success lie!

---

### Sample Questions and Answers

Here are some sample questions that test your understanding of double integrals, covering both conceptual aspects and typical exam formats.

**Question 1 (Conceptual - CO2)**
What does the double integral $\iint_R 1 \, dA$ represent geometrically?

**Answer:**
The double integral $\iint_R 1 \, dA$ represents the **area** of the region $R$ in the xy-plane. When the integrand is 1, we are essentially summing up infinitesimal area elements $dA$ over the entire region $R$.

**Question 2 (Calculational - Rectangular Region - CO2)**
Evaluate the double integral $\int_0^1 \int_0^2 (x^2 y + 2y) \, dy \, dx$.

**Answer:**
First, we evaluate the inner integral with respect to $y$, treating $x$ as a constant:
$$ \int_0^2 (x^2 y + 2y) \, dy = \left[ \frac{x^2 y^2}{2} + y^2 \right]_0^2 $$
$$ = \left( \frac{x^2 (2)^2}{2} + (2)^2 \right) - \left( \frac{x^2 (0)^2}{2} + (0)^2 \right) $$
$$ = \left( \frac{4x^2}{2} + 4 \right) - (0) = 2x^2 + 4 $$
Now, we evaluate the outer integral with respect to $x$:
$$ \int_0^1 (2x^2 + 4) \, dx = \left[ \frac{2x^3}{3} + 4x \right]_0^1 $$
$$ = \left( \frac{2(1)^3}{3} + 4(1) \right) - \left( \frac{2(0)^3}{3} + 4(0) \right) $$
$$ = \frac{2}{3} + 4 = \frac{2}{3} + \frac{12}{3} = \frac{14}{3} $$
So, the value of the double integral is $\frac{14}{3}$.

**Question 3 (Setting up Integral for Area - Type I/II Region - CO2)**
Set up the double integral for the area of the region bounded by the curves $y=x^3$ and $y=x$, for $x \ge 0$. You do not need to evaluate it.

**Answer:**
First, find intersection points for $x \ge 0$:
$x^3 = x \implies x^3 - x = 0 \implies x(x^2 - 1) = 0 \implies x(x-1)(x+1) = 0$.
For $x \ge 0$, the intersections are at $x=0$ and $x=1$.
When $x=0$, $y=0$. When $x=1$, $y=1$.

Sketching the region: For $0 \le x \le 1$, the line $y=x$ is above the curve $y=x^3$.
This region can be described as a Type I region:
*   $x$ ranges from $a=0$ to $b=1$.
*   For a fixed $x$, $y$ ranges from the lower curve $y=x^3$ to the upper curve $y=x$.

The area is given by $\iint_R 1 \, dA$.
Setting up the integral as a Type I region:
$$ \text{Area} = \int_0^1 \int_{x^3}^x 1 \, dy \, dx $$

Alternatively, as a Type II region:
From $y=x^3$, we have $x = y^{1/3}$. From $y=x$, we have $x=y$.
For $0 \le y \le 1$, the line $x=y$ is to the left of $x=y^{1/3}$.
*   $y$ ranges from $c=0$ to $d=1$.
*   For a fixed $y$, $x$ ranges from the left curve $x=y$ to the right curve $x=y^{1/3}$.

Setting up the integral as a Type II region:
$$ \text{Area} = \int_0^1 \int_y^{y^{1/3}} 1 \, dx \, dy $$
Either of these setups is a correct answer. The Type I setup is usually slightly easier to evaluate directly in this case.

**Question 4 (Application - Mass Calculation - CO2)**
A thin flat plate has the shape of the region bounded by $y=x^2$ and $y=\sqrt{x}$. The density of the plate is given by $\rho(x, y) = x+y$ (mass per unit area). Find the total mass of the plate.

**Answer:**
First, find the intersection points of $y=x^2$ and $y=\sqrt{x}$:
$x^2 = \sqrt{x} \implies x^4 = x \implies x^4 - x = 0 \implies x(x^3 - 1) = 0$.
For $x \ge 0$, intersections are at $x=0$ and $x=1$.
When $x=0$, $y=0$. When $x=1$, $y=1$.
Sketching the region: For $0 \le x \le 1$, $\sqrt{x} \ge x^2$.
So, the region $R$ can be described as a Type I region:
*   $x$ from 0 to 1.
*   $y$ from $x^2$ to $\sqrt{x}$.

The total mass is $M = \iint_R \rho(x, y) \, dA = \iint_R (x+y) \, dA$.
We set up the integral:
$$ M = \int_0^1 \int_{x^2}^{\sqrt{x}} (x+y) \, dy \, dx $$

Evaluate the inner integral:
$$ \int_{x^2}^{\sqrt{x}} (x+y) \, dy = \left[ xy + \frac{y^2}{2} \right]_{x^2}^{\sqrt{x}} $$
$$ = \left( x\sqrt{x} + \frac{(\sqrt{x})^2}{2} \right) - \left( x(x^2) + \frac{(x^2)^2}{2} \right) $$
$$ = \left( x^{3/2} + \frac{x}{2} \right) - \left( x^3 + \frac{x^4}{2} \right) $$
$$ = x^{3/2} + \frac{x}{2} - x^3 - \frac{x^4}{2} $$

Now, evaluate the outer integral:
$$ M = \int_0^1 \left( x^{3/2} + \frac{x}{2} - x^3 - \frac{x^4}{2} \right) \, dx $$
$$ M = \left[ \frac{x^{5/2}}{5/2} + \frac{x^2}{4} - \frac{x^4}{4} - \frac{x^5}{10} \right]_0^1 $$
$$ M = \left[ \frac{2}{5}x^{5/2} + \frac{x^2}{4} - \frac{x^4}{4} - \frac{x^5}{10} \right]_0^1 $$
$$ M = \left( \frac{2}{5}(1)^{5/2} + \frac{(1)^2}{4} - \frac{(1)^4}{4} - \frac{(1)^5}{10} \right) - (0) $$
$$ M = \frac{2}{5} + \frac{1}{4} - \frac{1}{4} - \frac{1}{10} = \frac{2}{5} - \frac{1}{10} $$
$$ M = \frac{4}{10} - \frac{1}{10} = \frac{3}{10} $$
The total mass of the plate is $3/10$.

**Question 5 (Polar Coordinates - CO2)**
Evaluate the double integral $\iint_R e^{-(x^2+y^2)} \, dA$, where $R$ is the region bounded by the circles $x^2+y^2=1$ and $x^2+y^2=4$.

**Answer:**
The region $R$ is an annulus (a ring) between two circles centered at the origin. This is a perfect candidate for polar coordinates.
The region $R$ in polar coordinates is:
$1 \le r \le 2$
$0 \le \theta \le 2\pi$

The integrand is $e^{-(x^2+y^2)}$, which becomes $e^{-r^2}$ in polar coordinates.
The differential area element is $dA = r \, dr \, d\theta$.

The integral in polar coordinates is:
$$ \iint_R e^{-(x^2+y^2)} \, dA = \int_0^{2\pi} \int_1^2 e^{-r^2} \, r \, dr \, d\theta $$

First, evaluate the inner integral with respect to $r$:
$$ \int_1^2 r e^{-r^2} \, dr $$
Use substitution: Let $u = -r^2$. Then $du = -2r \, dr$, so $r \, dr = -\frac{1}{2} du$.
When $r=1$, $u = -1^2 = -1$. When $r=2$, $u = -2^2 = -4$.

The integral becomes:
$$ \int_{-1}^{-4} e^u \left(-\frac{1}{2} du\right) = -\frac{1}{2} \int_{-1}^{-4} e^u \, du $$
$$ = \frac{1}{2} \int_{-4}^{-1} e^u \, du $$
$$ = \frac{1}{2} [e^u]_{-4}^{-1} = \frac{1}{2} (e^{-1} - e^{-4}) $$

Now, evaluate the outer integral with respect to $\theta$:
$$ \int_0^{2\pi} \frac{1}{2} (e^{-1} - e^{-4}) \, d\theta $$
Since $\frac{1}{2} (e^{-1} - e^{-4})$ is a constant with respect to $\theta$:
$$ = \frac{1}{2} (e^{-1} - e^{-4}) \int_0^{2\pi} 1 \, d\theta $$
$$ = \frac{1}{2} (e^{-1} - e^{-4}) [\theta]_0^{2\pi} $$
$$ = \frac{1}{2} (e^{-1} - e^{-4}) (2\pi) $$
$$ = \pi (e^{-1} - e^{-4}) = \pi \left(\frac{1}{e} - \frac{1}{e^4}\right) $$
The value of the double integral is $\pi (e^{-1} - e^{-4})$.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
