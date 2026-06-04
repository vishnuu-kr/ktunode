---
title: "Surface integrals over surfaces of the form 
z=g(x, y)"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 2"
module: "Module 4: Green’s theorem (for simply connected domains, without proof) 
and applications to evaluating line integrals"
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912ce1"
status: "completed"
scrapedAt: "2026-05-20T18:37:06.539Z"
---
## Module 4: Green’s Theorem and Surface Integrals – Surface Integrals over Surfaces of the form $z=g(x, y)$

Welcome, everyone! Today, we delve into a crucial topic in our journey through multivariable calculus for electrical and physical sciences: **Surface Integrals**, specifically focusing on surfaces defined by the explicit form $z = g(x, y)$. This topic builds directly on our understanding of line integrals and sets the stage for more complex vector calculus concepts, ultimately connecting to Green's Theorem and beyond. It’s where we start thinking about integrating *over* surfaces, not just curves.

Remember, our overarching goal in this course is to equip you with the mathematical tools to model and solve problems in your respective fields. This module, in particular, directly addresses **Course Outcome 4 (CO4)**: "Apply the concepts of surface and volume integrals and to learn their inter-relations and applications." Understanding surface integrals allows us to quantify things like flux through a surface, the total mass of a thin sheet, or the work done by a force field moving across a surface.

### 1. What is a Surface Integral?

Imagine you have a thin, flexible sheet of material, perhaps a piece of highly conductive foil or a thin membrane in an electrical device. We want to understand properties distributed across this sheet – its temperature, its charge density, or its mass per unit area. A surface integral is the mathematical tool that allows us to sum up these distributed quantities over the entire surface.

Just as a line integral sums up a function along a curve, a surface integral sums up a function over a surface. But how do we "sum up" over a surface? The fundamental idea is to break the surface into infinitesimally small pieces, calculate the quantity of interest on each piece, and then add all these contributions together.

### 2. Surfaces of the Form $z = g(x, y)$

In many physical and electrical science applications, surfaces are naturally described by an equation where the $z$-coordinate is a function of the $x$ and $y$ coordinates. Think about:

*   **A tilted plane:** This is the simplest case, like a slanted stage or a solar panel tilted towards the sun.
*   **A curved surface:** Imagine the surface of a lens, a satellite dish, or the shape of a vibrating membrane.

When we express a surface $S$ as $z = g(x, y)$, we are essentially saying that for every point $(x, y)$ in a certain region $D$ in the $xy$-plane, there’s a unique $z$-value that defines a point on our surface $S$. This region $D$ is called the **projection** of the surface onto the $xy$-plane.

This form is particularly convenient for setting up surface integrals. It simplifies the parametrization of the surface.

### 3. Setting up the Surface Integral: The Key Idea

To calculate a surface integral of a function $f(x, y, z)$ over a surface $S$, we need a way to "measure" the infinitesimal pieces of the surface. This "measure" is often related to the surface area element, denoted as $dS$.

When our surface is given by $z = g(x, y)$ and projects onto a region $D$ in the $xy$-plane, we can relate $dS$ to the familiar area element in the $xy$-plane, $dA = dx \, dy$. This is where the concept of **surface area** comes into play, a topic we’ve touched upon and will now leverage.

Recall from our discussions on calculating surface areas (perhaps in earlier sections or related modules, often covered in chapters discussing applications of double integrals, like in Anton, Biven, Davis, Chapter 11 in the 12th Edition or Weir, Hass, Heil, Bogacki, Chapter 14 in Thomas' Calculus), the surface area element $dS$ for a surface $z = g(x, y)$ is given by:

$dS = \sqrt{1 + \left(\frac{\partial z}{\partial x}\right)^2 + \left(\frac{\partial z}{\partial y}\right)^2} \, dA$

Here, $\frac{\partial z}{\partial x}$ and $\frac{\partial z}{\partial y}$ are the partial derivatives of $g(x, y)$ with respect to $x$ and $y$, respectively. These terms essentially tell us how "steep" the surface is in the $x$ and $y$ directions. The square root term is a **magnification factor**: it accounts for the fact that a small flat area $dA$ in the $xy$-plane might stretch out to a larger area $dS$ on the curved surface. If the surface is flat (like a plane), this factor is just a constant. For a curved surface, it varies.

Now, to evaluate the surface integral of a function $f(x, y, z)$ over $S$, we substitute $z = g(x, y)$ into $f$, and use the $dS$ element:

$\iint_S f(x, y, z) \, dS = \iint_D f(x, y, g(x, y)) \sqrt{1 + \left(\frac{\partial z}{\partial x}\right)^2 + \left(\frac{\partial z}{\partial y}\right)^2} \, dA$

This is the **fundamental transformation** for our surface integrals! We’ve converted an integral over a 3D surface into a double integral over a 2D region $D$ in the $xy$-plane. This is a massive simplification, as we already know how to evaluate double integrals!

This directly helps us with **CO4** by showing *how* to apply surface integral concepts. We're taking a property distributed on a surface and summing it up, often by projecting it onto a planar region.

### 4. Evaluating Surface Integrals: A Step-by-Step Approach

Let's outline the process clearly. If you have a surface $S$ defined by $z = g(x, y)$ and you want to compute $\iint_S f(x, y, z) \, dS$:

1.  **Identify the function $f(x, y, z)$ and the surface $S$ (as $z=g(x, y)$).**
2.  **Determine the projection region $D$ in the $xy$-plane.** This is crucial. Often, the problem statement will specify bounds for $x$ and $y$, or the surface itself will naturally limit the $x$ and $y$ values. If the surface is capped by another surface (like a plane $z=c$), you'll need to find the intersection, which often defines the boundary of $D$.
3.  **Compute the partial derivatives:** Find $\frac{\partial z}{\partial x}$ and $\frac{\partial z}{\partial y}$.
4.  **Form the integrand:** Substitute $z = g(x, y)$ into $f(x, y, z)$ to get $f(x, y, g(x, y))$. Then, multiply this by the square root term: $f(x, y, g(x, y)) \sqrt{1 + \left(\frac{\partial z}{\partial x}\right)^2 + \left(\frac{\partial z}{\partial y}\right)^2}$.
5.  **Set up the double integral:** Write the integral as $\iint_D \left[ f(x, y, g(x, y)) \sqrt{1 + \left(\frac{\partial z}{\partial x}\right)^2 + \left(\frac{\partial z}{\partial y}\right)^2} \right] \, dA$. This $dA$ can be $dx \, dy$ or $dy \, dx$, depending on how you set up your limits for $D$.
6.  **Evaluate the double integral:** This is now a standard double integral problem. You might need to switch to polar coordinates if the region $D$ is circular.

This structured approach is key to tackling exam problems. Always start by identifying $D$ and calculating those partial derivatives accurately. A common mistake is forgetting the square root term or making an error in its calculation.

### 5. Examples to Visualize and Understand

Let's illustrate with an example that feels more grounded.

**Scenario:** Imagine a metal sheet shaped like a parabolic dish, described by the surface $z = x^2 + y^2$. Let's say we want to find the total amount of heat energy distributed on this dish, where the heat intensity at any point $(x, y, z)$ on the dish is given by $f(x, y, z) = z$. We'll consider only the portion of the dish that lies below the plane $z = 4$.

This connects to **CO4** by showing an application: calculating a total quantity (heat energy) distributed over a surface.

**Problem:** Calculate the surface integral $\iint_S z \, dS$ for the surface $S$ defined by $z = x^2 + y^2$, capped by the plane $z = 4$.

**Solution Breakdown:**

1.  **Identify $f$ and $S$:**
    *   $f(x, y, z) = z$
    *   $S$ is given by $z = g(x, y) = x^2 + y^2$.

2.  **Determine the projection region $D$:**
    *   The surface is $z = x^2 + y^2$.
    *   It's capped by $z = 4$.
    *   So, $x^2 + y^2 = 4$. This is a circle of radius 2 centered at the origin in the $xy$-plane.
    *   Therefore, our region $D$ is the disk $x^2 + y^2 \le 4$.

3.  **Compute partial derivatives:**
    *   $\frac{\partial z}{\partial x} = \frac{\partial}{\partial x}(x^2 + y^2) = 2x$
    *   $\frac{\partial z}{\partial y} = \frac{\partial}{\partial y}(x^2 + y^2) = 2y$

4.  **Form the integrand:**
    *   Substitute $z = x^2 + y^2$ into $f(x, y, z)$: $f(x, y, g(x, y)) = x^2 + y^2$.
    *   Calculate the square root term:
        $\sqrt{1 + \left(\frac{\partial z}{\partial x}\right)^2 + \left(\frac{\partial z}{\partial y}\right)^2} = \sqrt{1 + (2x)^2 + (2y)^2} = \sqrt{1 + 4x^2 + 4y^2} = \sqrt{1 + 4(x^2 + y^2)}$
    *   The integrand becomes: $(x^2 + y^2) \sqrt{1 + 4(x^2 + y^2)}$.

5.  **Set up the double integral:**
    *   The integral is $\iint_D (x^2 + y^2) \sqrt{1 + 4(x^2 + y^2)} \, dA$, where $D$ is the disk $x^2 + y^2 \le 4$.

6.  **Evaluate the double integral:**
    *   The region $D$ and the integrand $(x^2 + y^2) \sqrt{1 + 4(x^2 + y^2)}$ suggest using polar coordinates.
    *   In polar coordinates, $x^2 + y^2 = r^2$, and $dA = r \, dr \, d\theta$.
    *   The region $D$ is described by $0 \le r \le 2$ and $0 \le \theta \le 2\pi$.
    *   The integral becomes:
        $\int_0^{2\pi} \int_0^2 (r^2) \sqrt{1 + 4r^2} \, r \, dr \, d\theta$
        $= \int_0^{2\pi} \int_0^2 r^3 \sqrt{1 + 4r^2} \, dr \, d\theta$

    *   This integral requires a substitution. Let $u = 1 + 4r^2$. Then $du = 8r \, dr$, so $r \, dr = \frac{1}{8} du$. Also, $r^2 = \frac{u-1}{4}$.
    *   When $r = 0$, $u = 1$. When $r = 2$, $u = 1 + 4(2^2) = 1 + 16 = 17$.
    *   The inner integral becomes:
        $\int_1^{17} \left(\frac{u-1}{4}\right) \sqrt{u} \left(\frac{1}{8} du\right) = \frac{1}{32} \int_1^{17} (u^{3/2} - u^{1/2}) \, du$
        $= \frac{1}{32} \left[ \frac{2}{5}u^{5/2} - \frac{2}{3}u^{3/2} \right]_1^{17}$
        $= \frac{1}{16} \left[ \frac{1}{5}u^{5/2} - \frac{1}{3}u^{3/2} \right]_1^{17}$
        $= \frac{1}{16} \left[ \left(\frac{17^{5/2}}{5} - \frac{17^{3/2}}{3}\right) - \left(\frac{1}{5} - \frac{1}{3}\right) \right]$
        $= \frac{1}{16} \left[ \left(\frac{17\sqrt{17}}{5} - \frac{17\sqrt{17}}{3}\right) - \left(\frac{3-5}{15}\right) \right]$
        $= \frac{1}{16} \left[ 17\sqrt{17} \left(\frac{1}{5} - \frac{1}{3}\right) + \frac{2}{15} \right]$
        $= \frac{1}{16} \left[ 17\sqrt{17} \left(\frac{3-5}{15}\right) + \frac{2}{15} \right]$
        $= \frac{1}{16} \left[ 17\sqrt{17} \left(-\frac{2}{15}\right) + \frac{2}{15} \right]$
        $= \frac{1}{16} \frac{2}{15} [1 - 17\sqrt{17}]$
        $= \frac{1}{120} [1 - 17\sqrt{17}]$

    *   Now, integrate with respect to $\theta$:
        $\int_0^{2\pi} \frac{1}{120} [1 - 17\sqrt{17}] \, d\theta = \frac{1}{120} [1 - 17\sqrt{17}] [\theta]_0^{2\pi}$
        $= \frac{2\pi}{120} [1 - 17\sqrt{17}] = \frac{\pi}{60} [1 - 17\sqrt{17}]$

    *   **Wait!** Did I make a mistake? Let's recheck the substitution integral carefully.
        $\frac{1}{32} \int_1^{17} (u^{3/2} - u^{1/2}) \, du$
        $= \frac{1}{32} [\frac{2}{5}u^{5/2} - \frac{2}{3}u^{3/2}]_1^{17}$
        $= \frac{1}{16} [\frac{1}{5}u^{5/2} - \frac{1}{3}u^{3/2}]_1^{17}$
        $= \frac{1}{16} [(\frac{17^{5/2}}{5} - \frac{17^{3/2}}{3}) - (\frac{1}{5} - \frac{1}{3})]$
        $= \frac{1}{16} [\frac{3 \cdot 17^{5/2} - 5 \cdot 17^{3/2}}{15} - \frac{3-5}{15}]$
        $= \frac{1}{16} [\frac{17^{3/2}(3 \cdot 17 - 5)}{15} - \frac{-2}{15}]$
        $= \frac{1}{16} [\frac{17^{3/2}(51 - 5)}{15} + \frac{2}{15}]$
        $= \frac{1}{16} [\frac{17^{3/2}(46)}{15} + \frac{2}{15}]$
        $= \frac{1}{16 \cdot 15} [46 \cdot 17\sqrt{17} + 2]$
        $= \frac{1}{240} [782\sqrt{17} + 2]$
        $= \frac{1}{120} [391\sqrt{17} + 1]$

    *   Now integrating with respect to $\theta$:
        $\int_0^{2\pi} \frac{1}{120} [391\sqrt{17} + 1] \, d\theta = \frac{2\pi}{120} [391\sqrt{17} + 1] = \frac{\pi}{60} [391\sqrt{17} + 1]$

    *   **Phew!** Always double-check your arithmetic, especially with substitutions. The calculation part is where many errors creep in. Remember this: *the method is sound, but the execution requires meticulousness.*

**What does this result mean?** It represents the total heat energy distributed over the specified parabolic dish. Notice that the heat intensity $f=z$ increases as we move up the dish (larger $z$), and the surface area element accounts for the curvature, making the overall value significant.

### 6. Connecting to Course Outcomes and Other Concepts

*   **CO1 (Derivatives):** We heavily rely on computing partial derivatives to find the surface area element. This is a direct link.
*   **CO2 (Multiple Integrals):** The core of evaluating surface integrals over $z=g(x,y)$ surfaces is reducing them to double integrals over planar regions. This directly applies our knowledge of double integrals for area and volume calculations, now extended to surface properties.
*   **CO3 (Line Integrals):** While not directly calculating line integrals here, understanding line integrals is foundational. Surface integrals can often be related to line integrals via theorems like Stokes' Theorem (which we'll see later!).
*   **CO4 (Surface Integrals):** This entire topic is dedicated to applying surface integrals. We are quantifying a scalar function (like density, temperature) or a vector quantity (like flux, which we'll see with flux integrals) over a surface.

**Connection to Green's Theorem:** Although this specific topic is about surfaces of the form $z=g(x,y)$ and their surface integrals, Module 4 also includes Green's Theorem. Green's Theorem relates a line integral around a closed curve in a plane to a double integral over the region enclosed by the curve. It’s a 2D analogue of theorems like the Divergence Theorem and Stokes' Theorem. The surface integral methods we are learning now are the building blocks for the 3D versions of these theorems. For instance, the flux integral across a surface can often be converted into a volume integral via the Divergence Theorem, or into a line integral via Stokes' Theorem.

### 7. Common Pitfalls and Exam Tips

*   **Forgetting the $dA$ or $dS$ element:** Always remember you are integrating a quantity *per unit area* over an area.
*   **Incorrectly identifying the projection region $D$:** This is often the trickiest part. If the surface is not explicitly bounded in the $xy$-plane, you might need to find intersections with other surfaces to define $D$.
*   **Errors in partial derivatives:** Double-check your $\frac{\partial z}{\partial x}$ and $\frac{\partial z}{\partial y}$ calculations.
*   **Arithmetic errors in the integral evaluation:** This is very common. Take your time, especially with substitutions and definite integral evaluations.
*   **Confusing surface integrals with double integrals directly over $D$:** Remember the magnification factor $\sqrt{1 + (\partial z/\partial x)^2 + (\partial z/\partial y)^2}$. A flat surface ($z=c$) will have this factor equal to 1, making the surface integral look like a standard double integral.

**Exam Focus:** Problems will typically involve finding the mass of a thin sheet with varying density, or calculating the total charge on a surface. The surfaces will often be planes, paraboloids, cylinders, or cones, where $z=g(x,y)$ is a manageable function. Be prepared to use polar coordinates when $D$ is circular or annular.
