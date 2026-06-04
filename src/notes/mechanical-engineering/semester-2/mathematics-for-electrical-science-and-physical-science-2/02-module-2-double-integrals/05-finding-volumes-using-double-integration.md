---
title: "Finding volumes 
using double integration"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 2"
module: "Module 2: Double integrals"
branch: "Mechanical Engineering"
semester: 2
topicId: "68bd1edffeb4799d95e839a6"
status: "completed"
scrapedAt: "2026-05-20T17:45:49.181Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 2
## Module 2: Double Integrals
### Topic: Finding Volumes Using Double Integration

Hello everyone! Welcome back to our exploration of multivariable calculus. In this session, we're going to build on our understanding of double integrals and tackle a really visual and practical application: **finding volumes**. This is a fantastic area where abstract mathematical concepts meet tangible geometric shapes, and it ties directly into our Course Outcomes, particularly CO2: "Understand theoretical idea of multiple integrals and to apply them to find areas and volumes of geometrical shapes." We'll be seeing how the power of double integration allows us to calculate volumes of solids in a way that's both elegant and robust.

Think about it: we've learned how to find areas of 2D regions using single integrals. Now, we're stepping into the third dimension, and double integrals are our tool for understanding the "space occupied" by solids. This is directly relevant to engineering problems where we might need to calculate the volume of material needed for a component, the amount of fluid a container can hold, or even the mass of an object with varying density. This topic is crucial for developing that intuitive grasp of how integrals work in higher dimensions.

### 1. The Fundamental Idea: Slicing and Summing in 3D

Let's start by recalling how we found the area under a curve $y=f(x)$ from $x=a$ to $x=b$. We essentially sliced the region into thin rectangles of width $\Delta x$ and height $f(x)$, calculated the area of each rectangle ($f(x) \Delta x$), and summed them up. As $\Delta x$ approached zero, this sum became a definite integral: $\int_a^b f(x) \, dx$.

Now, imagine we have a surface in 3D space defined by $z = f(x,y)$. We want to find the volume of the solid that lies *under* this surface and *above* a region $R$ in the $xy$-plane. How can we extend our slicing idea?

Instead of slicing into rectangles in 2D, we'll slice the region $R$ in the $xy$-plane into small rectangular "columns" with base area $\Delta A = \Delta x \Delta y$. For each of these small columns, the height of the solid above it is approximately constant and given by the function value $z = f(x,y)$ at a point within that small rectangle. So, the volume of a tiny "pillar" or "column" rising from this small rectangular base is approximately $f(x,y) \Delta A$.

If we sum up the volumes of all these tiny pillars over the entire region $R$, we get an approximation of the total volume:
$$ \text{Volume} \approx \sum_{\text{all columns}} f(x,y) \Delta A $$

As we make these rectangular bases smaller and smaller (i.e., $\Delta x \to 0$ and $\Delta y \to 0$), this sum converges to a definite integral. And this, my friends, is precisely what a double integral is for!

The volume $V$ of the solid that lies above the region $R$ in the $xy$-plane and beneath the surface $z = f(x,y)$ is given by:
$$ V = \iint_R f(x,y) \, dA $$

Here, $f(x,y)$ is our "height" function, and $dA$ represents the infinitesimal area element in the $xy$-plane. This is a direct application of CO2, showing how multiple integrals help us compute volumes.

### 2. Evaluating Double Integrals for Volume: Iterated Integrals

So, how do we actually *compute* $\iint_R f(x,y) \, dA$? This is where iterated integrals come in. Just as we learned to evaluate double integrals by fixing one variable and integrating with respect to the other, we can do the same here. The order of integration can often be chosen to simplify the calculation.

**Case 1: Region $R$ is a Rectangle**

Let's say our region $R$ is a simple rectangle defined by $a \le x \le b$ and $c \le y \le d$. In this case, our double integral becomes an iterated integral, and we have two options for the order of integration:

*   **Integrate with respect to $y$ first, then $x$:**
    $$ V = \int_a^b \left( \int_c^d f(x,y) \, dy \right) \, dx $$
    Here, when we integrate with respect to $y$, we treat $x$ as a constant. The inner integral, $\int_c^d f(x,y) \, dy$, will give us a result that is a function of $x$ only. This function essentially represents the area of a cross-section of the solid at a fixed $x$ value, sliced perpendicular to the $x$-axis. We then integrate this cross-sectional area along the $x$-axis from $a$ to $b$ to get the total volume. This is a beautiful connection to how we think about volumes using single integrals in introductory calculus!

*   **Integrate with respect to $x$ first, then $y$:**
    $$ V = \int_c^d \left( \int_a^b f(x,y) \, dx \right) \, dy $$
    Similarly, here we treat $y$ as a constant during the inner integration with respect to $x$. The inner integral gives us a function of $y$ (the area of a cross-section perpendicular to the $y$-axis), which we then integrate from $c$ to $d$.

**Example 1: Volume under a Paraboloid**

Let's find the volume of the solid that lies under the paraboloid $z = 4 - x^2 - y^2$ and above the rectangle $R = [0, 1] \times [0, 2]$ in the $xy$-plane.

Our function is $f(x,y) = 4 - x^2 - y^2$. The region $R$ is $0 \le x \le 1$ and $0 \le y \le 2$.

Let's choose to integrate with respect to $y$ first:
$$ V = \int_0^1 \left( \int_0^2 (4 - x^2 - y^2) \, dy \right) \, dx $$

First, evaluate the inner integral:
$$ \int_0^2 (4 - x^2 - y^2) \, dy $$
Treating $x$ as a constant, the antiderivative with respect to $y$ is $4y - x^2y - \frac{y^3}{3}$. Now, evaluate this from $y=0$ to $y=2$:
$$ \left[ 4y - x^2y - \frac{y^3}{3} \right]_0^2 = \left( 4(2) - x^2(2) - \frac{2^3}{3} \right) - (0) $$
$$ = 8 - 2x^2 - \frac{8}{3} = \frac{24}{3} - \frac{8}{3} - 2x^2 = \frac{16}{3} - 2x^2 $$

Now, we integrate this result with respect to $x$ from 0 to 1:
$$ V = \int_0^1 \left( \frac{16}{3} - 2x^2 \right) \, dx $$
The antiderivative is $\frac{16}{3}x - \frac{2x^3}{3}$. Evaluate from $x=0$ to $x=1$:
$$ V = \left[ \frac{16}{3}x - \frac{2x^3}{3} \right]_0^1 = \left( \frac{16}{3}(1) - \frac{2(1)^3}{3} \right) - (0) $$
$$ V = \frac{16}{3} - \frac{2}{3} = \frac{14}{3} $$

So, the volume of the solid is $\frac{14}{3}$ cubic units.

**Quick Recall Tip:** For rectangular regions, the order of integration usually doesn't change the final answer, but one order might be significantly easier to compute than the other depending on the function. Always look for the simpler path!

### 3. Regions with More Complex Shapes

Often, the region $R$ in the $xy$-plane isn't a simple rectangle. It might be bounded by curves. In such cases, we need to define the limits of integration carefully. This is where we categorize regions into Type I and Type II, just as we did for finding areas with double integrals. This directly helps us with CO2, as it's the same principle applied to volumes.

**Type I Region:** $R$ is defined by $a \le x \le b$ and $g_1(x) \le y \le g_2(x)$.
The volume integral is:
$$ V = \int_a^b \left( \int_{g_1(x)}^{g_2(x)} f(x,y) \, dy \right) \, dx $$
Here, we integrate with respect to $y$ first, with limits that are functions of $x$. The inner integral represents the area of a vertical strip at a fixed $x$, and the outer integral sums these areas along the $x$-axis.

**Type II Region:** $R$ is defined by $c \le y \le d$ and $h_1(y) \le x \le h_2(y)$.
The volume integral is:
$$ V = \int_c^d \left( \int_{h_1(y)}^{h_2(y)} f(x,y) \, dx \right) \, dy $$
Here, we integrate with respect to $x$ first, with limits that are functions of $y$. The inner integral represents the area of a horizontal strip at a fixed $y$, and the outer integral sums these areas along the $y$-axis.

**Example 2: Volume under a Plane over a Triangular Region**

Let's find the volume of the solid under the plane $z = x + y + 1$ and above the triangular region $R$ in the $xy$-plane with vertices $(0,0)$, $(1,0)$, and $(0,1)$.

First, we need to sketch the region $R$ and describe its boundaries.
The vertices are $(0,0)$, $(1,0)$, and $(0,1)$.
The line connecting $(1,0)$ and $(0,1)$ has the equation $y - 0 = \frac{1-0}{0-1}(x-1)$, which simplifies to $y = -1(x-1)$, or $y = 1-x$. This can also be written as $x = 1-y$.

We can describe this region in two ways:

**As a Type I region:**
For $x$ from 0 to 1, $y$ goes from the bottom boundary $y=0$ to the top boundary $y = 1-x$.
So, $0 \le x \le 1$ and $0 \le y \le 1-x$.

**As a Type II region:**
For $y$ from 0 to 1, $x$ goes from the left boundary $x=0$ to the right boundary $x = 1-y$.
So, $0 \le y \le 1$ and $0 \le x \le 1-y$.

Let's choose to integrate as a Type I region (this is often a matter of preference or what looks simpler).
Our function is $f(x,y) = x + y + 1$.
$$ V = \int_0^1 \left( \int_0^{1-x} (x + y + 1) \, dy \right) \, dx $$

Inner integral: $\int_0^{1-x} (x + y + 1) \, dy$
Treating $x$ as constant, the antiderivative is $xy + \frac{y^2}{2} + y$.
Evaluate from $y=0$ to $y=1-x$:
$$ \left[ xy + \frac{y^2}{2} + y \right]_0^{1-x} = x(1-x) + \frac{(1-x)^2}{2} + (1-x) - (0) $$
$$ = x - x^2 + \frac{1 - 2x + x^2}{2} + 1 - x $$
$$ = -x^2 + \frac{1}{2} - x + \frac{x^2}{2} + 1 $$
$$ = -\frac{x^2}{2} - x + \frac{3}{2} $$

Outer integral: $\int_0^1 \left( -\frac{x^2}{2} - x + \frac{3}{2} \right) \, dx$
The antiderivative is $-\frac{x^3}{6} - \frac{x^2}{2} + \frac{3}{2}x$.
Evaluate from $x=0$ to $x=1$:
$$ \left[ -\frac{x^3}{6} - \frac{x^2}{2} + \frac{3}{2}x \right]_0^1 = \left( -\frac{1^3}{6} - \frac{1^2}{2} + \frac{3}{2}(1) \right) - (0) $$
$$ = -\frac{1}{6} - \frac{1}{2} + \frac{3}{2} = -\frac{1}{6} + \frac{2}{2} = -\frac{1}{6} + 1 = \frac{5}{6} $$

So, the volume of this solid is $\frac{5}{6}$ cubic units.

**What if we chose Type II?**
$$ V = \int_0^1 \left( \int_0^{1-y} (x + y + 1) \, dx \right) \, dy $$
Inner integral: $\int_0^{1-y} (x + y + 1) \, dx$
Antiderivative: $\frac{x^2}{2} + xy + x$.
Evaluate from $x=0$ to $x=1-y$:
$$ \left[ \frac{x^2}{2} + xy + x \right]_0^{1-y} = \frac{(1-y)^2}{2} + y(1-y) + (1-y) - (0) $$
$$ = \frac{1 - 2y + y^2}{2} + y - y^2 + 1 - y $$
$$ = \frac{1}{2} - y + \frac{y^2}{2} - y^2 + 1 $$
$$ = -\frac{y^2}{2} - y + \frac{3}{2} $$
Notice this is the same expression we got for the inner integral in the Type I case, but with $y$ instead of $x$. This makes sense as the integrand $x+y+1$ is symmetric in $x$ and $y$, and the triangular region is also symmetric about the line $y=x$.

Outer integral: $\int_0^1 \left( -\frac{y^2}{2} - y + \frac{3}{2} \right) \, dy$
Antiderivative: $-\frac{y^3}{6} - \frac{y^2}{2} + \frac{3}{2}y$.
Evaluate from $y=0$ to $y=1$:
$$ \left[ -\frac{y^3}{6} - \frac{y^2}{2} + \frac{3}{2}y \right]_0^1 = -\frac{1}{6} - \frac{1}{2} + \frac{3}{2} = \frac{5}{6} $$
Indeed, we get the same result. This consistency is a cornerstone of double integration.

**Relatable Analogy:** Imagine you're building a sculpture from clay, and the height of the clay at any point $(x,y)$ on your workbench is given by $f(x,y)$. You want to know how much clay you've used. You could section your workbench into many tiny squares. For each square, you estimate the volume of clay as (height at that square) $\times$ (area of the square). Summing these up gives an estimate. The double integral is the perfect way to get the exact volume by making these squares infinitely small.

### 4. Solids Bounded by Surfaces

Sometimes, we're not looking for the volume *under* a single surface, but the volume *between* two surfaces. Suppose we have two surfaces, $z = f_1(x,y)$ (the upper surface) and $z = f_2(x,y)$ (the lower surface), and they define a solid over a region $R$ in the $xy$-plane.

The height of the solid at any point $(x,y)$ in $R$ is the difference between the upper and lower surface heights: $f_1(x,y) - f_2(x,y)$.
Therefore, the volume of the solid is given by:
$$ V = \iint_R (f_1(x,y) - f_2(x,y)) \, dA $$
This is directly related to CO4, which talks about applying concepts of volume integrals.

**Example 3: Volume Between Two Paraboloids**

Find the volume of the solid enclosed by the paraboloids $z = x^2 + y^2$ (opens upwards) and $z = 8 - x^2 - y^2$ (opens downwards).

First, we need to determine the region $R$ in the $xy$-plane over which these surfaces enclose a volume. This region is defined by where the two surfaces intersect. We set the $z$ values equal:
$$ x^2 + y^2 = 8 - x^2 - y^2 $$
$$ 2x^2 + 2y^2 = 8 $$
$$ x^2 + y^2 = 4 $$
This is the equation of a circle with radius 2 centered at the origin in the $xy$-plane. So, our region $R$ is the disk $x^2 + y^2 \le 4$.

In this case, $f_1(x,y) = 8 - x^2 - y^2$ (the upper surface) and $f_2(x,y) = x^2 + y^2$ (the lower surface).
The volume is:
$$ V = \iint_R ((8 - x^2 - y^2) - (x^2 + y^2)) \, dA $$
$$ V = \iint_R (8 - 2(x^2 + y^2)) \, dA $$

The region $R$ is a disk, which suggests that using polar coordinates will simplify the calculation significantly. In polar coordinates, $x^2 + y^2 = r^2$ and $dA = r \, dr \, d\theta$. The disk $x^2 + y^2 \le 4$ corresponds to $0 \le r \le 2$ and $0 \le \theta \le 2\pi$.

The integral becomes:
$$ V = \int_0^{2\pi} \int_0^2 (8 - 2r^2) \, r \, dr \, d\theta $$
$$ V = \int_0^{2\pi} \int_0^2 (8r - 2r^3) \, dr \, d\theta $$

Inner integral: $\int_0^2 (8r - 2r^3) \, dr$
Antiderivative: $4r^2 - \frac{2r^4}{4} = 4r^2 - \frac{1}{2}r^4$.
Evaluate from $r=0$ to $r=2$:
$$ \left[ 4r^2 - \frac{1}{2}r^4 \right]_0^2 = \left( 4(2)^2 - \frac{1}{2}(2)^4 \right) - (0) $$
$$ = 4(4) - \frac{1}{2}(16) = 16 - 8 = 8 $$

Outer integral: $\int_0^{2\pi} 8 \, d\theta$
Antiderivative: $8\theta$.
Evaluate from $\theta=0$ to $\theta=2\pi$:
$$ [8\theta]_0^{2\pi} = 8(2\pi) - 0 = 16\pi $$

So, the volume enclosed by the two paraboloids is $16\pi$ cubic units.

**Polar Coordinates are Your Friend!** When the region $R$ is a circle or a sector of a circle, or when the integrand involves $x^2+y^2$, switching to polar coordinates is almost always the best strategy. This is a key technique taught in calculus, and its application to volumes is profound. Remember that $dA = r \, dr \, d\theta$ and you need to transform your limits and integrand accordingly.

### 5. Common Pitfalls and Exam Focus

*   **Incorrectly defining the region $R$:** Always sketch the region of integration in the $xy$-plane. This is paramount! If the region is wrong, your limits will be wrong, and so will your answer.
*   **Flipping the order of integration incorrectly:** Make sure the limits of integration are compatible with the chosen order. For Type I, inner limits ($y$) depend on the outer variable ($x$). For Type II, inner limits ($x$) depend on the outer variable ($y$).
*   **Forgetting the $r$ in $dA$ when switching to polar coordinates:** This is a very common mistake! $dA = r \, dr \, d\theta$, not just $dr \, d\theta$.
*   **Algebraic errors during integration or evaluation:** These types of problems involve a lot of algebra, so be meticulous. Double-check your antiderivatives and substitutions.
*   **Not identifying the upper and lower surfaces correctly:** When finding the volume between two surfaces, ensure you subtract the lower surface from the upper surface to get a positive height.

**Exam Tip:** Problems asking for volumes are very common. They test your ability to set up the integral correctly based on the geometry described. They will often involve non-rectangular regions or require a switch to polar coordinates. Understanding how to transform Cartesian coordinates to polar coordinates and vice versa, including the Jacobian factor $r$, is vital for these types of questions. This directly connects to CO2 and CO4.

### Summary

To find the volume of a solid under a surface $z=f(x,y)$ above a region $R$ in the $xy$-plane, we use the double integral:
$$ V = \iint_R f(x,y) \, dA $$
To find the volume between two surfaces $z=f_1(x,y)$ and $z=f_2(x,y)$ over a region $R$, we use:
$$ V = \iint_R (f_1(x,y) - f_2(x,y)) \, dA $$
The key steps involve:
1.  **Identifying the surfaces and the region $R$.**
2.  **Determining the limits of integration** for $R$, either in Cartesian (Type I or Type II) or polar coordinates.
3.  **Setting up the iterated integral**, ensuring the integrand is correct and the order of integration is appropriate.
4.  **Evaluating the integral**, paying close attention to algebra and the proper use of coordinate systems.

Remember, double integration for volumes is a direct extension of the slicing and summing principle from single-variable calculus. It's a powerful tool that allows us to quantify three-dimensional space with precision.

---

### Sample Questions and Answers

**Question 1 (Conceptual):** Explain how the concept of a double integral relates to finding the volume of a solid. What does the integrand $f(x,y)$ and the area element $dA$ represent in this context?

**Answer 1:**
The double integral $\iint_R f(x,y) \, dA$ represents the volume of a solid by extending the idea of summing up infinitesimal rectangular prisms. In this context:
*   The **integrand $f(x,y)$** represents the **height** of the solid at a specific point $(x,y)$ in the region $R$ of the $xy$-plane. It describes the "upper surface" of the solid.
*   The **area element $dA$** represents an infinitesimally small rectangular (or polar infinitesimal) area in the $xy$-plane. It serves as the base of a tiny "column" or "pillar" of the solid.

The double integral sums up the volumes of all these infinitesimal columns, where the volume of each column is approximately its height $f(x,y)$ multiplied by its base area $dA$. As the base areas become infinitesimally small, this sum converges to the exact volume of the solid. This directly relates to CO2.

**Question 2 (Application - Rectangular Region):** Calculate the volume of the solid under the surface $z = x^2 + 2y$ and above the rectangle $R = [0, 2] \times [0, 3]$ in the $xy$-plane.

**Answer 2:**
The volume $V$ is given by the double integral:
$$ V = \iint_R (x^2 + 2y) \, dA $$
where $R$ is the rectangle $0 \le x \le 2$ and $0 \le y \le 3$.
We can set this up as an iterated integral. Let's integrate with respect to $y$ first, then $x$:
$$ V = \int_0^2 \left( \int_0^3 (x^2 + 2y) \, dy \right) \, dx $$

Evaluate the inner integral:
$$ \int_0^3 (x^2 + 2y) \, dy = \left[ x^2y + y^2 \right]_0^3 $$
$$ = (x^2(3) + 3^2) - (x^2(0) + 0^2) = 3x^2 + 9 $$

Now, evaluate the outer integral:
$$ V = \int_0^2 (3x^2 + 9) \, dx = \left[ x^3 + 9x \right]_0^2 $$
$$ = (2^3 + 9(2)) - (0^3 + 9(0)) = (8 + 18) - 0 = 26 $$
The volume of the solid is 26 cubic units.

**Question 3 (Application - Non-Rectangular Region):** Find the volume of the solid lying under the plane $z = 2x + y + 1$ and above the triangular region $R$ in the $xy$-plane bounded by the lines $x=0$, $y=0$, and $x+y=2$.

**Answer 3:**
First, sketch the region $R$. The vertices are $(0,0)$, $(2,0)$, and $(0,2)$.
The line connecting $(2,0)$ and $(0,2)$ is $x+y=2$, or $y=2-x$.

We can describe $R$ as a Type I region: $0 \le x \le 2$ and $0 \le y \le 2-x$.
The integrand is $f(x,y) = 2x + y + 1$.
The volume integral is:
$$ V = \int_0^2 \left( \int_0^{2-x} (2x + y + 1) \, dy \right) \, dx $$

Inner integral: $\int_0^{2-x} (2x + y + 1) \, dy$
Antiderivative: $2xy + \frac{y^2}{2} + y$.
Evaluate from $y=0$ to $y=2-x$:
$$ \left[ 2xy + \frac{y^2}{2} + y \right]_0^{2-x} = 2x(2-x) + \frac{(2-x)^2}{2} + (2-x) - 0 $$
$$ = 4x - 2x^2 + \frac{4 - 4x + x^2}{2} + 2 - x $$
$$ = 4x - 2x^2 + 2 - 2x + \frac{x^2}{2} + 2 - x $$
$$ = -\frac{3}{2}x^2 + x + 4 $$

Outer integral:
$$ V = \int_0^2 \left( -\frac{3}{2}x^2 + x + 4 \right) \, dx = \left[ -\frac{3}{2} \frac{x^3}{3} + \frac{x^2}{2} + 4x \right]_0^2 $$
$$ V = \left[ -\frac{x^3}{2} + \frac{x^2}{2} + 4x \right]_0^2 $$
$$ = \left( -\frac{2^3}{2} + \frac{2^2}{2} + 4(2) \right) - (0) $$
$$ = \left( -\frac{8}{2} + \frac{4}{2} + 8 \right) = (-4 + 2 + 8) = 6 $$
The volume is 6 cubic units.

**Question 4 (Application - Polar Coordinates):** Find the volume of the solid lying under the surface $z = 12 - x^2 - y^2$ and above the disk $R$ defined by $x^2 + y^2 \le 9$.

**Answer 4:**
The region $R$ is a disk of radius 3 centered at the origin. The surface is $z = 12 - (x^2 + y^2)$. This problem is ideal for polar coordinates.
In polar coordinates, $x^2 + y^2 = r^2$, so the surface is $z = 12 - r^2$.
The region $R$ is described by $0 \le r \le 3$ and $0 \le \theta \le 2\pi$.
The area element is $dA = r \, dr \, d\theta$.

The volume integral is:
$$ V = \iint_R (12 - x^2 - y^2) \, dA = \int_0^{2\pi} \int_0^3 (12 - r^2) \, r \, dr \, d\theta $$
$$ V = \int_0^{2\pi} \int_0^3 (12r - r^3) \, dr \, d\theta $$

Inner integral:
$$ \int_0^3 (12r - r^3) \, dr = \left[ 6r^2 - \frac{r^4}{4} \right]_0^3 $$
$$ = \left( 6(3)^2 - \frac{3^4}{4} \right) - (0) = 6(9) - \frac{81}{4} = 54 - \frac{81}{4} $$
$$ = \frac{216 - 81}{4} = \frac{135}{4} $$

Outer integral:
$$ V = \int_0^{2\pi} \frac{135}{4} \, d\theta = \left[ \frac{135}{4}\theta \right]_0^{2\pi} $$
$$ = \frac{135}{4}(2\pi) - 0 = \frac{135\pi}{2} $$
The volume of the solid is $\frac{135\pi}{2}$ cubic units.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
