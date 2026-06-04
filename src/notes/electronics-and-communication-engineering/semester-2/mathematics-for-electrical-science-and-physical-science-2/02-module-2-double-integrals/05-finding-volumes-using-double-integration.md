---
title: "Finding volumes using double integration"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 2"
module: "Module 2: Double integrals"
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da1d1"
status: "completed"
scrapedAt: "2026-05-23T17:40:41.409Z"
---
# Mathematics for Electrical Science and Physical Science - 2

## Module 2: Double Integrals

### Topic: Finding Volumes using Double Integration

Welcome back, everyone! In this session, we're going to build upon our understanding of double integrals and explore a very tangible application: **calculating volumes**. This is where the abstract power of integration really starts to show its face in practical, geometric terms. Remember, our goal in this module is to understand multiple integrals and apply them to find areas and volumes (CO2). This topic directly addresses that, showing how double integrals can be used to measure the "space" occupied by three-dimensional objects.

### 1. The Fundamental Idea: Slicing and Summing (Revisited)

Think back to single-variable calculus when we introduced integration. What was integration, at its core? It was about summing up infinitely many infinitesimally small pieces – areas of rectangles, to be precise – to find the total area under a curve. We can apply the same philosophy here, but in three dimensions.

Imagine you have a solid object. How can we determine its volume? One intuitive way is to slice it up and add the volumes of those slices. But what kind of slices? If we slice it parallel to one of the coordinate planes, say the $xy$-plane, each slice would be a thin lamina with a certain area and an infinitesimal thickness.

Let our solid be defined by the region $R$ in the $xy$-plane over which it exists, and let the height of the solid at any point $(x, y)$ in $R$ be given by a function $z = f(x, y)$. Here, $f(x, y)$ represents the "height" or the "upper surface" of the solid, and we'll often assume it's non-negative, meaning the solid is "sitting" on the $xy$-plane. The $xy$-plane itself could be considered the "lower surface."

So, if we take a small rectangular area element, $\Delta A$, within our region $R$ at a point $(x, y)$, the "height" of the solid above this small area is approximately $f(x, y)$. The volume of a thin rectangular prism (or column) standing on this $\Delta A$ with height $f(x, y)$ and infinitesimal thickness $\Delta z$ (which is actually the thickness along the $z$-axis, so let's call it $\Delta h$ for height) would be approximately $f(x, y) \Delta A$.

When we sum up the volumes of all these tiny prisms over the entire region $R$, and then let these prisms become infinitesimally small (i.e., $\Delta A \to dA$), this sum turns into a **double integral**.

**The Key Concept:** The volume $V$ of a solid that lies above a region $R$ in the $xy$-plane and below the surface $z = f(x, y)$ is given by the double integral of $f(x, y)$ over $R$:

$$V = \iint_R f(x, y) \, dA$$

This is a fundamental result, and it directly ties into CO2, where we aim to apply multiple integrals to find volumes.

### 2. Setting Up the Double Integral for Volume

To actually compute this volume, we need to express $dA$ in terms of differentials $dx$ and $dy$. This leads us to the iterated integral form, which we've already been working with. The order of integration ($dx\,dy$ or $dy\,dx$) depends on how we describe the region $R$.

**Scenario 1: Rectangular Regions**

If our region $R$ is a rectangle defined by $a \le x \le b$ and $c \le y \le d$, setting up the double integral is straightforward. We can integrate with respect to $y$ first, then $x$, or vice versa.

*   **Integrating $dy$ then $dx$:**
    $$V = \int_a^b \left( \int_c^d f(x, y) \, dy \right) \, dx$$
    Here, the inner integral $\int_c^d f(x, y) \, dy$ calculates the area of a "vertical slice" through the solid at a fixed $x$ value, extending from $y=c$ to $y=d$. The outer integral then sums up the volumes of these thin slices as $x$ varies from $a$ to $b$.

*   **Integrating $dx$ then $dy$:**
    $$V = \int_c^d \left( \int_a^b f(x, y) \, dx \right) \, dy$$
    This is conceptually similar, just slicing in the other direction.

**Example 1: A Simple Paraboloid Cap**

Let's find the volume of the solid under the surface $z = 1 - x^2 - y^2$ and above the rectangle $R$ defined by $0 \le x \le 1$ and $0 \le y \le 1$.

Here, our height function is $f(x, y) = 1 - x^2 - y^2$. The region $R$ is a unit square. Let's integrate $dy$ first.

$$V = \int_0^1 \left( \int_0^1 (1 - x^2 - y^2) \, dy \right) \, dx$$

First, the inner integral with respect to $y$, treating $x$ as a constant:
$$ \int_0^1 (1 - x^2 - y^2) \, dy = \left[ y - x^2y - \frac{y^3}{3} \right]_0^1 $$
$$ = (1 - x^2(1) - \frac{1^3}{3}) - (0 - x^2(0) - \frac{0^3}{3}) $$
$$ = 1 - x^2 - \frac{1}{3} = \frac{2}{3} - x^2 $$

Now, we integrate this result with respect to $x$:
$$ V = \int_0^1 \left( \frac{2}{3} - x^2 \right) \, dx $$
$$ = \left[ \frac{2}{3}x - \frac{x^3}{3} \right]_0^1 $$
$$ = \left( \frac{2}{3}(1) - \frac{1^3}{3} \right) - (0 - 0) $$
$$ = \frac{2}{3} - \frac{1}{3} = \frac{1}{3} $$

So, the volume of this part of the paraboloid cap is $1/3$ cubic units. This is a direct application of the formula we just discussed.

**Scenario 2: Non-Rectangular Regions (More General)**

This is where things get more interesting and require careful description of the region $R$. A region $R$ can be described in two general ways for integration:

*   **Type I Region:** $R = \{ (x, y) \mid a \le x \le b, \ g_1(x) \le y \le g_2(x) \}$
    Here, we fix $x$ and let $y$ vary between two functions of $x$. This means we're taking vertical slices. When we integrate, we integrate $dy$ first, from $g_1(x)$ to $g_2(x)$, and then integrate $dx$ from $a$ to $b$.

    $$V = \int_a^b \left( \int_{g_1(x)}^{g_2(x)} f(x, y) \, dy \right) \, dx$$

*   **Type II Region:** $R = \{ (x, y) \mid c \le y \le d, \ h_1(y) \le x \le h_2(y) \}$
    Here, we fix $y$ and let $x$ vary between two functions of $y$. This means we're taking horizontal slices. We integrate $dx$ first, from $h_1(y)$ to $h_2(y)$, and then integrate $dy$ from $c$ to $d$.

    $$V = \int_c^d \left( \int_{h_1(y)}^{h_2(y)} f(x, y) \, dx \right) \, dy$$

**Example 2: Volume under a Plane over a Triangular Region**

Let's find the volume of the solid bounded by the plane $z = x + y + 1$ and the region $R$ in the $xy$-plane defined by the triangle with vertices at $(0,0)$, $(1,0)$, and $(0,1)$.

First, we need to sketch or visualize our region $R$. The vertices are $(0,0)$, $(1,0)$ on the x-axis, and $(0,1)$ on the y-axis. The hypotenuse of this triangle is the line connecting $(1,0)$ and $(0,1)$. We can find the equation of this line. The slope is $(1-0)/(0-1) = -1$. Using the point-slope form with $(1,0)$: $y - 0 = -1(x - 1)$, which simplifies to $y = -x + 1$, or $x + y = 1$.

Now, let's describe $R$ as a Type I region:
*   $x$ varies from $0$ to $1$.
*   For a fixed $x$, $y$ varies from the bottom boundary (the x-axis, $y=0$) to the top boundary (the line $y = 1-x$).
So, $R = \{ (x, y) \mid 0 \le x \le 1, \ 0 \le y \le 1-x \}$.

Our height function is $f(x, y) = x + y + 1$.
The volume is:
$$V = \int_0^1 \left( \int_0^{1-x} (x + y + 1) \, dy \right) \, dx$$

Let's tackle the inner integral first:
$$ \int_0^{1-x} (x + y + 1) \, dy = \left[ xy + \frac{y^2}{2} + y \right]_0^{1-x} $$
$$ = x(1-x) + \frac{(1-x)^2}{2} + (1-x) - (0) $$
$$ = x - x^2 + \frac{1 - 2x + x^2}{2} + 1 - x $$
$$ = x - x^2 + \frac{1}{2} - x + \frac{x^2}{2} + 1 - x $$
Combine terms:
$$ = (\frac{x^2}{2} - x^2) + (x - x - x) + (\frac{1}{2} + 1) $$
$$ = -\frac{x^2}{2} - x + \frac{3}{2} $$

Now, integrate this result with respect to $x$:
$$ V = \int_0^1 \left( -\frac{x^2}{2} - x + \frac{3}{2} \right) \, dx $$
$$ = \left[ -\frac{x^3}{6} - \frac{x^2}{2} + \frac{3}{2}x \right]_0^1 $$
$$ = \left( -\frac{1^3}{6} - \frac{1^2}{2} + \frac{3}{2}(1) \right) - (0) $$
$$ = -\frac{1}{6} - \frac{1}{2} + \frac{3}{2} $$
$$ = -\frac{1}{6} - \frac{3}{6} + \frac{9}{6} = \frac{5}{6} $$

So, the volume of the solid under the plane $z = x + y + 1$ over the given triangle is $5/6$ cubic units.

**What if we described R as a Type II region?**
*   $y$ varies from $0$ to $1$.
*   For a fixed $y$, $x$ varies from the y-axis ($x=0$) to the line $x = 1-y$.
So, $R = \{ (x, y) \mid 0 \le y \le 1, \ 0 \le x \le 1-y \}$.

The integral would be:
$$V = \int_0^1 \left( \int_0^{1-y} (x + y + 1) \, dx \right) \, dy$$
You can try working this out to confirm you get the same answer. This highlights the flexibility of double integrals and often, one order of integration is simpler than the other, as discussed in textbooks like Anton's Calculus.

### 3. Volumes Between Surfaces

What if our solid is bounded by two surfaces, say $z = f_1(x, y)$ (the upper surface) and $z = f_2(x, y)$ (the lower surface), over a region $R$ in the $xy$-plane?

In this case, the "height" of the solid at any point $(x, y)$ is the difference between the upper and lower surfaces: $f(x, y) = f_1(x, y) - f_2(x, y)$.
The volume is then:

$$V = \iint_R (f_1(x, y) - f_2(x, y)) \, dA$$

This is a crucial extension. It means if you want to find the volume of a region enclosed between two curved surfaces, you find the difference in their height functions and integrate that difference over the projection of the solid onto the $xy$-plane.

**Example 3: Volume between a Paraboloid and a Plane**

Let's find the volume of the solid that lies above the region $R$ in the $xy$-plane bounded by the circles $x^2 + y^2 = 1$ and $x^2 + y^2 = 4$, and is enclosed between the paraboloid $z = x^2 + y^2$ (lower surface) and the plane $z = 4$ (upper surface).

Our region $R$ is an annulus (a ring) between two circles centered at the origin.
*   The lower surface is $z = f_2(x, y) = x^2 + y^2$.
*   The upper surface is $z = f_1(x, y) = 4$.

The height difference is $f(x, y) = f_1(x, y) - f_2(x, y) = 4 - (x^2 + y^2)$.
The region $R$ is $1 \le x^2 + y^2 \le 4$.

Working with regions defined by circles often suggests using **polar coordinates**. Remember from our previous discussions on single integrals, and as covered in many calculus texts like Thomas' Calculus or Stewart's Essential Calculus, polar coordinates simplify integration over circular or annular regions.

In polar coordinates, $x = r \cos \theta$, $y = r \sin \theta$, so $x^2 + y^2 = r^2$.
The region $R$ is described by $1 \le r \le 2$ and $0 \le \theta \le 2\pi$.
The differential area element in polar coordinates is $dA = r \, dr \, d\theta$.
The height difference becomes $4 - r^2$.

The volume integral in polar coordinates is:
$$V = \iint_R (4 - (x^2 + y^2)) \, dA$$
$$V = \int_0^{2\pi} \int_1^2 (4 - r^2) \, r \, dr \, d\theta$$

Let's evaluate the inner integral with respect to $r$:
$$ \int_1^2 (4r - r^3) \, dr = \left[ 2r^2 - \frac{r^4}{4} \right]_1^2 $$
$$ = \left( 2(2^2) - \frac{2^4}{4} \right) - \left( 2(1^2) - \frac{1^4}{4} \right) $$
$$ = \left( 8 - \frac{16}{4} \right) - \left( 2 - \frac{1}{4} \right) $$
$$ = (8 - 4) - (\frac{8}{4} - \frac{1}{4}) $$
$$ = 4 - \frac{7}{4} = \frac{16 - 7}{4} = \frac{9}{4} $$

Now, integrate with respect to $\theta$:
$$ V = \int_0^{2\pi} \frac{9}{4} \, d\theta $$
$$ = \left[ \frac{9}{4}\theta \right]_0^{2\pi} $$
$$ = \frac{9}{4}(2\pi) - 0 = \frac{9\pi}{2} $$

So, the volume of the solid between the paraboloid and the plane, over the annular region, is $\frac{9\pi}{2}$ cubic units. This problem nicely demonstrates the use of polar coordinates, a common technique for volumes in certain geometric situations, as you'll find in advanced texts like Kreyszig's Advanced Engineering Mathematics.

### 4. Connection to Course Outcomes

Let's recap how this topic directly serves our course objectives:

*   **CO1: Compute the partial and total derivatives and maxima and minima of multivariable functions and to apply in engineering problems.** While this specific topic focuses on integration, the ability to define the height function $f(x,y)$ might sometimes involve finding the equation of a surface, which can be related to optimization problems solved using derivatives. For instance, finding the "highest" point of a surface before integrating.

*   **CO2: Understand theoretical idea of multiple integrals and to apply them to find areas and volumes of geometrical shapes.** This is the core of our discussion! We've seen how the double integral is a direct extension of summing infinitesimal volumes, allowing us to calculate volumes of solids with complex shapes. This is crucial for understanding the spatial properties of physical systems.

*   **CO3: Compute the derivatives and line integrals of vector functions and to learn their applications.** Not directly addressed in this topic, but the foundation of multivariable calculus, including partial derivatives, is essential for understanding the concepts leading to multiple integrals.

*   **CO4: Apply the concepts of surface and volume integrals and to learn their inter-relations and applications.** This topic is a stepping stone towards surface and volume integrals. By calculating volumes using double integrals, we are essentially integrating a scalar function (the height) over a 2D region, which is a simpler form of what volume integrals achieve. Understanding how volumes are constructed from "slices" provides intuition for triple integrals, which are the standard tool for direct volume calculation. Bird's Higher Engineering Mathematics often emphasizes this hierarchical understanding.

### 5. Why This Matters in Engineering and Physics

You might be thinking, "Where do I see this in real electrical or physical science?"

*   **Electrical Engineering:** Imagine analyzing the magnetic field distribution in a complex coil or the charge distribution in a capacitor. Sometimes, the volume occupied by these fields or charges can be approximated or calculated using these integration techniques, especially when dealing with potentials or field strengths that vary spatially. For instance, if you're calculating the total magnetic flux through a region, you might be integrating a field component over an area, a precursor to volume integration.

*   **Mechanical Engineering/Physics:** This is more direct. Calculating the volume of an irregularly shaped object for mass calculation, finding the volume of fluid displaced by an object, or determining the capacity of a container with a curved bottom are all direct applications. Think of the volume of a fuel tank in a rocket or the shape of a lens.

*   **Solid State Physics:** When dealing with crystal structures, the volume occupied by a unit cell or the total volume of a sample with specific lattice properties might involve integration over complex regions.

Remember, the ability to quantify "how much space" something occupies is fundamental in science and engineering. Double integrals provide a powerful mathematical tool for this.

### Summary and Key Takeaways

*   The volume of a solid under $z=f(x,y)$ and above a region $R$ in the $xy$-plane is $V = \iint_R f(x,y) \, dA$.
*   For rectangular regions, we use iterated integrals with constant limits.
*   For non-rectangular regions, we carefully define $R$ as Type I or Type II to set up the iterated integral with variable limits.
*   The volume between two surfaces $z = f_1(x,y)$ (upper) and $z = f_2(x,y)$ (lower) is $V = \iint_R (f_1(x,y) - f_2(x,y)) \, dA$.
*   Polar coordinates are often useful for regions with circular symmetry.
*   This topic directly fulfills CO2 and builds intuition for CO4.

Always sketch your region of integration $R$. This is critical for setting up the limits correctly, especially for non-rectangular regions. Also, consider if polar coordinates can simplify your problem, as seen in Example 3.

---

## Sample Questions and Answers

**Conceptual Question 1:** Explain the geometric interpretation of the double integral $\iint_R z \, dA$ when $z = f(x,y)$ represents the height of a solid above the region $R$ in the $xy$-plane.

**Answer:**
The double integral $\iint_R z \, dA$ represents the volume of the solid. Geometrically, we are summing up the volumes of infinitesimally thin columns. Each column has a base area of $dA$ (an infinitesimal element of area in the $xy$-plane) and a height $z = f(x,y)$ corresponding to that base. By integrating (summing) these tiny volumes $z \, dA$ over the entire region $R$, we obtain the total volume of the solid that is bounded below by the region $R$ and above by the surface $z = f(x,y)$. This is a direct application of the idea of slicing and summing from single-variable calculus, extended to three dimensions.

**Exam-Oriented Question 2:** Find the volume of the solid bounded by the cylinder $x^2 + y^2 = 4$ and the planes $z = 0$ and $y + z = 3$.

**Solution:**
First, let's understand the boundaries.
*   The cylinder $x^2 + y^2 = 4$ defines the lateral boundary of our solid. This means our region of integration $R$ in the $xy$-plane is the disk $x^2 + y^2 \le 4$.
*   The plane $z = 0$ is the lower boundary of the solid.
*   The plane $y + z = 3$ can be rewritten as $z = 3 - y$, which is our upper boundary.

So, we have a solid whose base is the disk $R: x^2 + y^2 \le 4$ in the $xy$-plane, the lower surface is $z = f_2(x, y) = 0$, and the upper surface is $z = f_1(x, y) = 3 - y$.
The volume $V$ is given by $\iint_R (f_1(x, y) - f_2(x, y)) \, dA$.
Here, $f_1(x, y) - f_2(x, y) = (3 - y) - 0 = 3 - y$.
The region $R$ is a disk of radius 2 centered at the origin. This suggests using polar coordinates for integration.

In polar coordinates:
*   $x = r \cos \theta$, $y = r \sin \theta$
*   $x^2 + y^2 = r^2$, so $r^2 \le 4 \implies 0 \le r \le 2$.
*   The region $R$ covers all angles, so $0 \le \theta \le 2\pi$.
*   The integrand $3 - y$ becomes $3 - r \sin \theta$.
*   The area element $dA$ becomes $r \, dr \, d\theta$.

The volume integral is:
$$V = \int_0^{2\pi} \int_0^2 (3 - r \sin \theta) \, r \, dr \, d\theta$$
$$V = \int_0^{2\pi} \int_0^2 (3r - r^2 \sin \theta) \, dr \, d\theta$$

Let's evaluate the inner integral with respect to $r$:
$$ \int_0^2 (3r - r^2 \sin \theta) \, dr = \left[ \frac{3r^2}{2} - \frac{r^3}{3} \sin \theta \right]_0^2 $$
$$ = \left( \frac{3(2^2)}{2} - \frac{2^3}{3} \sin \theta \right) - (0) $$
$$ = \left( \frac{3 \cdot 4}{2} - \frac{8}{3} \sin \theta \right) $$
$$ = 6 - \frac{8}{3} \sin \theta $$

Now, integrate this result with respect to $\theta$:
$$ V = \int_0^{2\pi} \left( 6 - \frac{8}{3} \sin \theta \right) \, d\theta $$
$$ = \left[ 6\theta - \frac{8}{3} (-\cos \theta) \right]_0^{2\pi} $$
$$ = \left[ 6\theta + \frac{8}{3} \cos \theta \right]_0^{2\pi} $$
$$ = \left( 6(2\pi) + \frac{8}{3} \cos(2\pi) \right) - \left( 6(0) + \frac{8}{3} \cos(0) \right) $$
$$ = \left( 12\pi + \frac{8}{3}(1) \right) - \left( 0 + \frac{8}{3}(1) \right) $$
$$ = 12\pi + \frac{8}{3} - \frac{8}{3} = 12\pi $$

The volume of the solid is $12\pi$. This type of question is common in exams, testing the ability to set up the integral and choose the appropriate coordinate system.

**Conceptual Question 3:** If $f(x,y)$ were negative over a portion of region $R$, what would $\iint_R f(x,y) \, dA$ represent geometrically in terms of volume?

**Answer:**
If $f(x,y)$ is negative over a portion of region $R$, the integral $\iint_R f(x,y) \, dA$ would not directly represent a geometric volume in the usual sense (a positive quantity of space). Instead, it would represent a "signed volume." Where $f(x,y)$ is positive, the integral contributes positively to the total, representing volume above the $xy$-plane. Where $f(x,y)$ is negative, the integral contributes negatively, effectively subtracting volume from the total, representing a "deficit" of volume or volume below the $xy$-plane. To find the actual geometric volume of a solid where the "height" function dips below zero, we would typically integrate the absolute value of the height function, $|f(x,y)|$, or split the region into parts where $f(x,y)$ is positive and negative and sum the absolute volumes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
