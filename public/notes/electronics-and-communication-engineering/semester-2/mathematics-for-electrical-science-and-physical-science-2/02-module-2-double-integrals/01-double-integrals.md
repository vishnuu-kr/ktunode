---
title: "Double integrals"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 2"
module: "Module 2: Double integrals"
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da1cd"
status: "completed"
scrapedAt: "2026-05-23T17:40:38.074Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 2

## Module 2: Double Integrals

### Topic: Double Integrals: The Foundation for Area, Volume, and Beyond

Hello everyone! Welcome back to our journey through the fascinating world of multivariable calculus. In this module, we're diving deep into **Double Integrals**. Think of single-variable calculus, where we used integration to find areas under curves. Double integrals are the natural extension of that idea, allowing us to measure "more" – specifically, volumes under surfaces and areas of regions in a plane. This is crucial for many concepts in electrical and physical sciences, as you'll see, directly tying into our Course Outcomes like CO2 (understanding theoretical ideas of multiple integrals and applying them to find areas and volumes) and even laying groundwork for CO4 concerning surface and volume integrals.

### 1. What is a Double Integral, Really? Laying the Groundwork

You've all mastered single integrals: $\int_a^b f(x) \, dx$. This represents the signed area between the curve $y=f(x)$ and the x-axis, from $x=a$ to $x=b$. What if we have a function of *two* variables, $z = f(x, y)$? This function defines a surface in 3D space.

Imagine you have a sheet of metal, and its thickness varies across its surface. If you can describe this thickness by a function $f(x, y)$, how do you find the total mass or volume of that sheet? That's where double integrals come in!

**The Core Idea: Partitioning and Summing**

Just like we partitioned an interval $[a, b]$ into small subintervals for single integrals, we'll partition a region $R$ in the $xy$-plane into tiny rectangular subregions, each with area $\Delta A = \Delta x \, \Delta y$.

For each tiny rectangle, we pick a sample point $(x_i^*, y_j^*)$ within it. The value of our function $f(x_i^*, y_j^*)$ at this point can be thought of as the *average height* of the surface $z = f(x, y)$ above that small rectangle.

If we multiply this height by the area of the rectangle, $f(x_i^*, y_j^*) \Delta A$, we get the volume of a small rectangular prism. This prism approximates the volume under the surface $z = f(x, y)$ and above the rectangle.

Now, if we sum up the volumes of all these tiny prisms over the entire region $R$, we get an approximation of the total volume.

$$ \text{Volume} \approx \sum_{i=1}^m \sum_{j=1}^n f(x_i^*, y_j^*) \Delta A $$

As we make these rectangles smaller and smaller (i.e., $\Delta x \to 0$ and $\Delta y \to 0$), this sum approaches the *exact* volume. This limit is what we define as the **double integral**:

$$ \iint_R f(x, y) \, dA = \lim_{m,n \to \infty} \sum_{i=1}^m \sum_{j=1}^n f(x_i^*, y_j^*) \Delta A $$

Here, $dA$ represents the infinitesimal area element, which for rectangular regions is $dx \, dy$ or $dy \, dx$.

**Connecting to Course Outcomes:**

*   **CO2:** This definition directly addresses the "theoretical idea of multiple integrals" and the ability to "apply them to find volumes of geometrical shapes." The sum of prisms is the intuitive link to volume calculation.

### 2. Evaluating Double Integrals: Iterated Integrals

So, how do we actually *compute* this limit? The magic of double integrals lies in their evaluation using **iterated integrals**. This means we integrate with respect to one variable at a time, treating the other variable as a constant.

Let's say our region $R$ is a rectangle defined by $a \le x \le b$ and $c \le y \le d$. The double integral can be evaluated as either:

$$ \iint_R f(x, y) \, dA = \int_c^d \left( \int_a^b f(x, y) \, dx \right) \, dy \quad \text{or} \quad \int_a^b \left( \int_c^d f(x, y) \, dy \right) \, dx $$

The inner integral is performed first, and the result is then integrated with respect to the outer variable. This is the **Fubini's Theorem** principle at play, which states that if $f(x, y)$ is continuous on a rectangle $R$, then the order of integration does not matter. This is a fantastic tool for simplifying problems!

**Example: Finding the Volume of a Simple Shape**

Let's say we want to find the volume under the plane $z = 2 + x + y$ over the rectangle $R = [0, 1] \times [0, 2]$ in the $xy$-plane.

Using iterated integrals:

$$ \text{Volume} = \int_0^2 \int_0^1 (2 + x + y) \, dx \, dy $$

*   **Inner integral (with respect to x, treating y as constant):**
    $$ \int_0^1 (2 + x + y) \, dx = \left[ 2x + \frac{x^2}{2} + yx \right]_0^1 $$
    $$ = \left( 2(1) + \frac{1^2}{2} + y(1) \right) - \left( 2(0) + \frac{0^2}{2} + y(0) \right) $$
    $$ = 2 + \frac{1}{2} + y = \frac{5}{2} + y $$

*   **Outer integral (with respect to y):**
    $$ \int_0^2 \left( \frac{5}{2} + y \right) \, dy = \left[ \frac{5}{2}y + \frac{y^2}{2} \right]_0^2 $$
    $$ = \left( \frac{5}{2}(2) + \frac{2^2}{2} \right) - \left( \frac{5}{2}(0) + \frac{0^2}{2} \right) $$
    $$ = 5 + \frac{4}{2} = 5 + 2 = 7 $$

So, the volume is 7 cubic units. This is a straightforward application of Fubini's Theorem, as found in typical examples in chapters like Anton's Calculus, Chapter 14.

**Intuitive Analogy:** Imagine you're painting a rectangular canvas. You first decide how much paint to use for each thin vertical strip (integrating with respect to y, if you move horizontally). Then, you sum up the paint needed for all the vertical strips (integrating with respect to x, as you move across the canvas). Or you could do it the other way around!

### 3. Double Integrals Over General Regions

The real power comes when our region $R$ isn't a simple rectangle. It could be a circle, a triangle, or any other shape. In such cases, we need to carefully determine the limits of integration. These limits will often depend on the other variable.

We categorize general regions into two types for integration:

*   **Type I Regions:** Described by $a \le x \le b$ and $g_1(x) \le y \le g_2(x)$. Here, for a fixed $x$, $y$ varies between two functions of $x$.
    The integral becomes:
    $$ \iint_R f(x, y) \, dA = \int_a^b \left( \int_{g_1(x)}^{g_2(x)} f(x, y) \, dy \right) \, dx $$

*   **Type II Regions:** Described by $c \le y \le d$ and $h_1(y) \le x \le h_2(y)$. Here, for a fixed $y$, $x$ varies between two functions of $y$.
    The integral becomes:
    $$ \iint_R f(x, y) \, dA = \int_c^d \left( \int_{h_1(y)}^{h_2(y)} f(x, y) \, dx \right) \, dy $$

**Finding the Limits: Sketching is Key!**

The most critical step is to **sketch the region of integration $R$**. This sketch will guide you in setting up the correct limits.

**Example: Area of a Region Bounded by Curves**

Let's find the area of the region bounded by the parabolas $y = x^2$ and $y = 2x - x^2$. This directly relates to **CO2: finding areas of geometrical shapes**.

1.  **Sketch the region:**
    *   $y = x^2$ is a standard parabola opening upwards.
    *   $y = 2x - x^2 = -(x^2 - 2x) = -( (x-1)^2 - 1 ) = 1 - (x-1)^2$ is a parabola opening downwards with its vertex at $(1, 1)$.

2.  **Find Intersection Points:**
    Set the equations equal: $x^2 = 2x - x^2$.
    $2x^2 - 2x = 0$
    $2x(x - 1) = 0$
    So, the intersection points occur at $x=0$ and $x=1$.
    When $x=0$, $y=0^2 = 0$. Point is $(0, 0)$.
    When $x=1$, $y=1^2 = 1$. Point is $(1, 1)$.

3.  **Determine Region Type and Limits:**
    In the interval $[0, 1]$, the upper curve is $y = 2x - x^2$ and the lower curve is $y = x^2$. This suggests a Type I region:
    *   $0 \le x \le 1$
    *   $x^2 \le y \le 2x - x^2$

    The area is given by the double integral of the function $f(x, y) = 1$ over this region $R$:
    $$ \text{Area} = \iint_R 1 \, dA $$

4.  **Set up and Evaluate the Iterated Integral:**
    $$ \text{Area} = \int_0^1 \left( \int_{x^2}^{2x - x^2} 1 \, dy \right) \, dx $$

    *   **Inner integral (with respect to y):**
        $$ \int_{x^2}^{2x - x^2} 1 \, dy = [y]_{x^2}^{2x - x^2} = (2x - x^2) - x^2 = 2x - 2x^2 $$

    *   **Outer integral (with respect to x):**
        $$ \int_0^1 (2x - 2x^2) \, dx = \left[ x^2 - \frac{2x^3}{3} \right]_0^1 $$
        $$ = \left( 1^2 - \frac{2(1)^3}{3} \right) - \left( 0^2 - \frac{2(0)^3}{3} \right) $$
        $$ = 1 - \frac{2}{3} = \frac{1}{3} $$

    The area of the region is $\frac{1}{3}$ square units. This is a classic example of how double integrals are used to compute areas, directly mapping to CO2.

**Pro-Tip for Exams:** When asked to find an area or volume, the first thing you should do is sketch the region of integration! This prevents setting up the integral incorrectly.

**Consider changing the order of integration:** Sometimes, a region might be easier to integrate as Type I, or perhaps Type II. Fubini's theorem allows us to switch the order if it simplifies the calculation. However, the limits will need to be re-expressed. This is a more advanced technique often covered in sections like Anton's Calculus, Chapter 14.6.

### 4. Changing the Order of Integration: A Practical Skill

Sometimes the integrand or the region of integration makes one order of integration much simpler than the other. Let's look at an example where switching the order is beneficial.

**Example: Reversing Integration Order**

Evaluate $\int_0^1 \int_{\sqrt{y}}^1 \cos(x^3) \, dx \, dy$.

If we try to integrate with respect to $y$ first, the integrand $\cos(x^3)$ doesn't have an elementary antiderivative with respect to $x$. This signals that we should probably switch the order of integration.

1.  **Identify the Region of Integration:**
    The limits are:
    *   $0 \le y \le 1$
    *   $\sqrt{y} \le x \le 1$

    Let's sketch this region:
    *   $x = \sqrt{y}$ implies $x^2 = y$ (since $x \ge 0$). This is the upper half of a parabola opening to the right.
    *   $x = 1$ is a vertical line.
    *   $y = 0$ is the x-axis.
    *   $y = 1$ is a horizontal line.

    The region is bounded by $y=0$, $x=1$, and $y=x^2$ (or $x=\sqrt{y}$ for $x \ge 0$).

2.  **Rewrite the Region as Type I:**
    From the sketch, we can see that $x$ ranges from $0$ to $1$. For a fixed $x$, $y$ ranges from the lower boundary $y=0$ to the upper boundary $y=x^2$.
    So, the region can be described as:
    *   $0 \le x \le 1$
    *   $0 \le y \le x^2$

3.  **Set up the Integral with Reversed Order:**
    The integral now becomes:
    $$ \int_0^1 \int_0^{x^2} \cos(x^3) \, dy \, dx $$

4.  **Evaluate the Integral:**
    *   **Inner integral (with respect to y, treating x as constant):**
        $$ \int_0^{x^2} \cos(x^3) \, dy = [\cos(x^3) \cdot y]_0^{x^2} = \cos(x^3) \cdot x^2 - \cos(x^3) \cdot 0 = x^2 \cos(x^3) $$

    *   **Outer integral (with respect to x):**
        $$ \int_0^1 x^2 \cos(x^3) \, dx $$
        This integral can be solved using a substitution. Let $u = x^3$. Then $du = 3x^2 \, dx$, which means $x^2 \, dx = \frac{1}{3} du$.
        When $x=0$, $u=0^3=0$. When $x=1$, $u=1^3=1$.
        The integral transforms to:
        $$ \int_0^1 \cos(u) \cdot \frac{1}{3} du = \frac{1}{3} \int_0^1 \cos(u) \, du $$
        $$ = \frac{1}{3} [\sin(u)]_0^1 = \frac{1}{3} (\sin(1) - \sin(0)) = \frac{1}{3} \sin(1) $$

The value of the integral is $\frac{1}{3}\sin(1)$. This demonstrates how changing the order of integration, a key technique discussed in texts like Thomas' Calculus, can turn an intractable problem into a solvable one.

**Connecting to Course Outcomes:**

*   **CO2:** This example directly reinforces the ability to "apply them to find areas and volumes" by showing how to correctly set up integrals for complex regions and how to manipulate them. It also implicitly touches on the "theoretical idea" by showing the power of Fubini's Theorem.
*   **CO1:** While not directly a max/min problem, understanding how to set up and evaluate integrals is fundamental for later applying derivatives in optimization, which is the focus of CO1.

### 5. Double Integrals in Polar Coordinates: A Smoother Ride

Many regions in science and engineering are circular or sectors of circles. Trying to describe these with Cartesian coordinates $(x, y)$ often leads to messy square roots in the limits of integration. Polar coordinates $(r, \theta)$ are a much better fit.

Recall the transformation:
*   $x = r \cos \theta$
*   $y = r \sin \theta$
*   $r^2 = x^2 + y^2$
*   $\tan \theta = y/x$

The crucial part for integration is the **Jacobian determinant**, which tells us how area elements transform. For polar coordinates, the infinitesimal area element $dA$ in Cartesian coordinates becomes $r \, dr \, d\theta$ in polar coordinates.

$$ dA = dx \, dy \quad \rightarrow \quad dA = r \, dr \, d\theta $$

The double integral in polar coordinates becomes:

$$ \iint_R f(x, y) \, dA = \iint_{R'} f(r \cos \theta, r \sin \theta) \, r \, dr \, d\theta $$

where $R'$ is the region described in polar coordinates.

**Typical Polar Regions:**

*   **Circular Sector:** $a \le r \le b$, $\alpha \le \theta \le \beta$
    $$ \int_\alpha^\beta \int_a^b f(r \cos \theta, r \sin \theta) \, r \, dr \, d\theta $$

**Example: Finding the Area of a Circle**

Let's find the area of a circle of radius $a$. In Cartesian coordinates, this would be $\int_{-a}^a \int_{-\sqrt{a^2-x^2}}^{\sqrt{a^2-x^2}} 1 \, dy \, dx$, which is quite complex.

In polar coordinates:
*   The radius $r$ varies from $0$ to $a$.
*   The angle $\theta$ varies from $0$ to $2\pi$ to cover the whole circle.

The integral for the area is:
$$ \text{Area} = \iint_R 1 \, dA = \int_0^{2\pi} \int_0^a 1 \cdot r \, dr \, d\theta $$

1.  **Inner integral (with respect to r):**
    $$ \int_0^a r \, dr = \left[ \frac{r^2}{2} \right]_0^a = \frac{a^2}{2} - 0 = \frac{a^2}{2} $$

2.  **Outer integral (with respect to $\theta$):**
    $$ \int_0^{2\pi} \frac{a^2}{2} \, d\theta = \frac{a^2}{2} [\theta]_0^{2\pi} = \frac{a^2}{2} (2\pi - 0) = \pi a^2 $$

Indeed, we get the familiar formula for the area of a circle! This is a beautiful example of how choosing the right coordinate system can dramatically simplify calculations. This is a concept you'll find emphasized in reference books like Kreyszig's Advanced Engineering Mathematics.

**Example: Volume under a Paraboloid**

Find the volume under the paraboloid $z = 4 - x^2 - y^2$ over the unit circle $x^2 + y^2 \le 1$.

1.  **Convert to Polar Coordinates:**
    *   The function $z = 4 - (x^2 + y^2)$ becomes $z = 4 - r^2$.
    *   The region is the unit circle $x^2 + y^2 \le 1$, which in polar coordinates is $0 \le r \le 1$ and $0 \le \theta \le 2\pi$.

2.  **Set up the Integral:**
    $$ \text{Volume} = \iint_R (4 - x^2 - y^2) \, dA = \int_0^{2\pi} \int_0^1 (4 - r^2) \cdot r \, dr \, d\theta $$

3.  **Evaluate the Integral:**
    *   **Inner integral (with respect to r):**
        $$ \int_0^1 (4r - r^3) \, dr = \left[ 2r^2 - \frac{r^4}{4} \right]_0^1 = \left( 2(1)^2 - \frac{1^4}{4} \right) - 0 = 2 - \frac{1}{4} = \frac{7}{4} $$

    *   **Outer integral (with respect to $\theta$):**
        $$ \int_0^{2\pi} \frac{7}{4} \, d\theta = \frac{7}{4} [\theta]_0^{2\pi} = \frac{7}{4} (2\pi - 0) = \frac{7\pi}{2} $$

The volume is $\frac{7\pi}{2}$ cubic units. This is a perfect illustration of how polar coordinates simplify calculations for circularly symmetric problems, directly linking to CO2.

**Connecting to Course Outcomes:**

*   **CO2:** This section is a direct application of finding volumes of geometrical shapes, especially those with radial symmetry. The transformation to polar coordinates is a key technique here.
*   **CO1 & CO3:** While not directly involving partial derivatives of multiple variables or line integrals, the understanding of coordinate transformations and Jacobians here builds a strong foundation for later topics in vector calculus where these concepts are essential.

### 6. Applications in Science and Engineering

Double integrals are not just abstract mathematical tools; they are fundamental in many areas of electrical science and physical science.

*   **Calculating Mass:** If a thin plate has a density function $\rho(x, y)$, its total mass $M$ over a region $R$ is given by:
    $$ M = \iint_R \rho(x, y) \, dA $$
    This is directly relevant to understanding material properties and distribution, impacting CO2.

*   **Finding Center of Mass:** The $x$-coordinate of the center of mass $(\bar{x}, \bar{y})$ for a plate of uniform density is:
    $$ \bar{x} = \frac{1}{M} \iint_R x \, dA \quad \text{and} \quad \bar{y} = \frac{1}{M} \iint_R y \, dA $$
    This is a direct application related to CO1's focus on multivariable functions and their applications.

*   **Moments of Inertia:** In mechanics, moments of inertia (which describe an object's resistance to rotational acceleration) are calculated using double integrals. For example, the moment of inertia about the z-axis ($I_z$) for a planar object with density $\rho(x,y)$ is:
    $$ I_z = \iint_R (x^2 + y^2) \rho(x, y) \, dA $$
    This is crucial in rotational dynamics for electrical machines and mechanical systems, linking to CO1 and CO4.

*   **Probability:** In probability and statistics, if $f(x, y)$ is a joint probability density function for two random variables $X$ and $Y$, the probability that $(X, Y)$ lies in a region $R$ is:
    $$ P((X, Y) \in R) = \iint_R f(x, y) \, dA $$
    This is a common application in signal processing and statistical physics.

**Think about it:** In electrical engineering, imagine a power distribution grid where the power output or potential varies across a geographical area. A double integral could help calculate the total power generated or the average potential. Or, in physics, consider the magnetic field produced by a current distribution on a surface; a double integral would be essential to sum up its contributions.

**Connecting to Course Outcomes:**

*   **CO1:** Concepts like center of mass and moments of inertia are direct applications of finding maxima/minima (or rather, weighted averages) of multivariable functions, fitting the "application in engineering problems" aspect.
*   **CO2:** Calculating mass and area are core applications related to volumes and areas.
*   **CO4:** Understanding moments of inertia and how they relate to mass distribution over an area is a stepping stone to understanding volume integrals and their relation to spatial distributions of physical quantities.

### Summary: Key Takeaways

*   **Definition:** A double integral $\iint_R f(x, y) \, dA$ represents the signed volume under the surface $z=f(x,y)$ and above the region $R$ in the $xy$-plane.
*   **Evaluation:** We use iterated integrals: integrate with respect to one variable, treating the other as a constant, and then integrate the result with respect to the second variable. Fubini's Theorem assures us the order doesn't matter for continuous functions on rectangles.
*   **General Regions:** Sketching is vital to set up limits for Type I ($y$ between functions of $x$) and Type II ($x$ between functions of $y$) regions.
*   **Changing Order:** Sometimes, switching the order of integration simplifies calculations significantly. This requires careful re-description of the region's boundaries.
*   **Polar Coordinates:** For circular or radially symmetric regions, switching to polar coordinates ($dA = r \, dr \, d\theta$) can make integrals much easier.
*   **Applications:** Double integrals are used for mass, center of mass, moments of inertia, areas, volumes, and probability calculations – all vital in science and engineering.

Remember, practice is key! Work through many examples to get comfortable setting up these integrals, especially for general regions and in polar coordinates.

---

### Sample Questions and Answers

**Question 1 (Conceptual):** Explain why the area element in polar coordinates is $r \, dr \, d\theta$ and not just $dr \, d\theta$.

**Answer:**
In Cartesian coordinates, a small rectangular area element is $dA = dx \, dy$. This is because the area of a rectangle is simply the product of its infinitesimal side lengths.
In polar coordinates, we're dealing with infinitesimal sectors of annuli (rings). A small region is bounded by $r$, $r+dr$, $\theta$, and $\theta+d\theta$. If we approximate this as a rectangle, its sides would have lengths $dr$ and $r \, d\theta$ (the arc length at radius $r$). The product of these lengths gives the area of this infinitesimal sector: $dA = dr \cdot (r \, d\theta) = r \, dr \, d\theta$.
The factor of $r$ arises because as the radius $r$ increases, the circumference of the circle increases, meaning a given change in angle $d\theta$ sweeps out a larger area. The $r$ factor accounts for this "stretching" of the area as we move radially outward. This is a fundamental aspect of coordinate transformations, as discussed in advanced calculus texts.

**Question 2 (Exam-Oriented):** Evaluate the double integral $\iint_R x y \, dA$, where $R$ is the region bounded by $y=x^2$ and $y=\sqrt{x}$.

**Answer:**
1.  **Sketch the Region:**
    *   $y=x^2$ is a parabola opening upwards.
    *   $y=\sqrt{x}$ is the upper half of a parabola opening to the right.
2.  **Find Intersection Points:**
    $x^2 = \sqrt{x}$
    $x^4 = x$
    $x^4 - x = 0$
    $x(x^3 - 1) = 0$
    $x(x-1)(x^2+x+1) = 0$
    The real solutions are $x=0$ and $x=1$.
    When $x=0$, $y=0^2=0$. Point $(0,0)$.
    When $x=1$, $y=1^2=1$. Point $(1,1)$.
3.  **Determine Region Type and Limits:**
    In the interval $[0, 1]$, the upper curve is $y=\sqrt{x}$ and the lower curve is $y=x^2$. This is a Type I region:
    *   $0 \le x \le 1$
    *   $x^2 \le y \le \sqrt{x}$
4.  **Set up and Evaluate the Iterated Integral:**
    $$ \iint_R x y \, dA = \int_0^1 \left( \int_{x^2}^{\sqrt{x}} x y \, dy \right) \, dx $$
    *   **Inner Integral (with respect to y):**
        $$ \int_{x^2}^{\sqrt{x}} x y \, dy = x \left[ \frac{y^2}{2} \right]_{x^2}^{\sqrt{x}} = x \left( \frac{(\sqrt{x})^2}{2} - \frac{(x^2)^2}{2} \right) $$
        $$ = x \left( \frac{x}{2} - \frac{x^4}{2} \right) = \frac{x^2}{2} - \frac{x^5}{2} $$
    *   **Outer Integral (with respect to x):**
        $$ \int_0^1 \left( \frac{x^2}{2} - \frac{x^5}{2} \right) \, dx = \frac{1}{2} \int_0^1 (x^2 - x^5) \, dx $$
        $$ = \frac{1}{2} \left[ \frac{x^3}{3} - \frac{x^6}{6} \right]_0^1 = \frac{1}{2} \left( \left( \frac{1^3}{3} - \frac{1^6}{6} \right) - 0 \right) $$
        $$ = \frac{1}{2} \left( \frac{1}{3} - \frac{1}{6} \right) = \frac{1}{2} \left( \frac{2-1}{6} \right) = \frac{1}{2} \cdot \frac{1}{6} = \frac{1}{12} $$
    The value of the integral is $\frac{1}{12}$.

**Question 3 (Application/Polar):** Find the volume of the solid that lies under the plane $z = 3 - x - y$ and above the region $R$ in the $xy$-plane bounded by the circle $x^2 + y^2 = 9$.

**Answer:**
1.  **Region Description:** The region $R$ is a circle of radius 3 centered at the origin. This is a perfect candidate for polar coordinates.
    In polar coordinates: $0 \le r \le 3$ and $0 \le \theta \le 2\pi$.
2.  **Convert Integrand to Polar:**
    The plane is $z = 3 - (x+y)$. In polar coordinates, $x = r \cos \theta$ and $y = r \sin \theta$, so $z = 3 - (r \cos \theta + r \sin \theta)$.
3.  **Area Element in Polar:** $dA = r \, dr \, d\theta$.
4.  **Set up and Evaluate the Integral:**
    $$ \text{Volume} = \iint_R (3 - x - y) \, dA = \int_0^{2\pi} \int_0^3 (3 - r \cos \theta - r \sin \theta) \, r \, dr \, d\theta $$
    $$ = \int_0^{2\pi} \int_0^3 (3r - r^2 \cos \theta - r^2 \sin \theta) \, dr \, d\theta $$
    *   **Inner Integral (with respect to r):**
        $$ \int_0^3 (3r - r^2 \cos \theta - r^2 \sin \theta) \, dr = \left[ \frac{3r^2}{2} - \frac{r^3}{3} \cos \theta - \frac{r^3}{3} \sin \theta \right]_0^3 $$
        $$ = \left( \frac{3(3)^2}{2} - \frac{3^3}{3} \cos \theta - \frac{3^3}{3} \sin \theta \right) - 0 $$
        $$ = \frac{27}{2} - 9 \cos \theta - 9 \sin \theta $$
    *   **Outer Integral (with respect to $\theta$):**
        $$ \int_0^{2\pi} \left( \frac{27}{2} - 9 \cos \theta - 9 \sin \theta \right) \, d\theta $$
        $$ = \left[ \frac{27}{2}\theta - 9 \sin \theta + 9 \cos \theta \right]_0^{2\pi} $$
        $$ = \left( \frac{27}{2}(2\pi) - 9 \sin(2\pi) + 9 \cos(2\pi) \right) - \left( 0 - 9 \sin(0) + 9 \cos(0) \right) $$
        $$ = (27\pi - 0 + 9) - (0 - 0 + 9) = 27\pi $$
    The volume is $27\pi$.

This covers the essentials of double integrals. Keep practicing, and you'll find them to be powerful tools in your engineering and science studies!

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
