---
title: "change of coordinates in double integrals (Cartesian to 
polar)"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 2"
module: "Module 2: Double integrals"
branch: "Mechanical Engineering"
semester: 2
topicId: "68bd1edffeb4799d95e839a4"
status: "completed"
scrapedAt: "2026-05-20T17:45:47.712Z"
---
## Mathematics for Electrical Science and Physical Science – 2

### Module 2: Double Integrals

#### Topic: Change of Coordinates in Double Integrals (Cartesian to Polar)

Welcome, everyone! Today, we're diving into a really powerful technique for evaluating double integrals: the **change of coordinates**, specifically from **Cartesian (x, y)** to **Polar (r, θ)** coordinates. This isn't just a mathematical trick; it's a tool that can transform seemingly impossible integration problems into something quite manageable, especially when dealing with circular or sector-shaped regions. This topic directly ties into **CO2**, where we aim to "understand the theoretical idea of multiple integrals and to apply them to find areas and volumes." By mastering this change of coordinates, we'll gain a much deeper appreciation for how integrals can simplify complex geometrical calculations.

### Why Change Coordinates? The Power of Perspective

Think about trying to find the area of a circle using Cartesian coordinates. We'd set up an integral like this:

$\iint_R dA = \int_{-a}^{a} \int_{-\sqrt{a^2 - x^2}}^{\sqrt{a^2 - x^2}} dy \, dx$

where $R$ is a circle of radius $a$. This looks a bit intimidating, doesn't it? The limits of integration themselves involve square roots, making the evaluation quite tedious.

Now, imagine describing that same circle using polar coordinates. What are the key features? A constant radius, $r = a$, and an angle, $\theta$, that sweeps all the way around from $0$ to $2\pi$. It's much simpler! This is the core idea behind changing coordinates: **sometimes, a different coordinate system perfectly matches the geometry of the problem, making the integration significantly easier.**

This aligns with **CO1**, where we learn to apply multivariable calculus concepts to engineering problems. Many physical phenomena in electrical and physical sciences, like the magnetic field around a wire, the distribution of charge on a circular plate, or the flow of heat in a circular object, have inherent radial symmetry. Polar coordinates are tailor-made for these situations.

### Introducing Polar Coordinates

Before we jump into the integration, let's quickly recap what polar coordinates are. Instead of specifying a point by its horizontal (x) and vertical (y) distances from the origin, we use its **distance from the origin (r)** and the **angle (θ)** it makes with the positive x-axis.

**Key Relationships:**

*   **From Polar to Cartesian:**
    *   $x = r \cos \theta$
    *   $y = r \sin \theta$

*   **From Cartesian to Polar:**
    *   $r^2 = x^2 + y^2 \implies r = \sqrt{x^2 + y^2}$ (since $r$ is typically taken as non-negative)
    *   $\tan \theta = \frac{y}{x}$ (the angle $\theta$ needs careful consideration based on the quadrant of (x, y))

These fundamental relationships are crucial, as they form the basis of our transformation. You'll find these well-explained in standard texts like **Anton, Biven, and Davis (12th ed.)** and **Thomas' Calculus (15th ed.)**.

### The Infinitesimal Area Element: dA

When we change coordinates, the way we measure "area" needs to change too. In Cartesian coordinates, our infinitesimal area element is simply $dA = dx \, dy$. But what is it in polar coordinates?

Imagine a small region in the $r\theta$-plane defined by $dr$ and $d\theta$. This forms a small rectangle. When we map this to the $xy$-plane, it's no longer a rectangle; it's a small "curvy rectangle," which we call a **polar rectangle**. The sides of this curved region are approximately $dr$ (along a radial line) and $r \, d\theta$ (along an arc of radius $r$).

Therefore, the infinitesimal area element in polar coordinates is:

$dA = r \, dr \, d\theta$

**Remember this!** The presence of the extra '$r$' is absolutely vital. It accounts for the fact that as the radius $r$ increases, the arc length $r \, d\theta$ also increases, meaning the area covered by a fixed $d\theta$ and $dr$ grows linearly with $r$. This is a key concept often tested, and forgetting the '$r$' is a common mistake.

### The Jacobian: The Formal Link

For those who like the more formal mathematical underpinning, the change of variables in multiple integrals is governed by the **Jacobian determinant**. For a transformation from $(u, v)$ to $(x, y)$, we have:

$x = x(u, v)$, $y = y(u, v)$

The Jacobian of this transformation is denoted by $J$ or $\frac{\partial(x, y)}{\partial(u, v)}$ and is defined as:

$J = \begin{vmatrix} \frac{\partial x}{\partial u} & \frac{\partial x}{\partial v} \\ \frac{\partial y}{\partial u} & \frac{\partial y}{\partial v} \end{vmatrix} = \frac{\partial x}{\partial u} \frac{\partial y}{\partial v} - \frac{\partial x}{\partial v} \frac{\partial y}{\partial u}$

The fundamental theorem for changing variables states that:

$\iint_R f(x, y) \, dx \, dy = \iint_{R'} f(x(u, v), y(u, v)) \left| \frac{\partial(x, y)}{\partial(u, v)} \right| \, du \, dv$

Here, $R'$ is the region in the $uv$-plane corresponding to $R$ in the $xy$-plane, and we take the absolute value of the Jacobian because area elements must be positive.

Let's apply this to our Cartesian to polar transformation, where $(u, v)$ are effectively $(r, \theta)$:

$x = r \cos \theta$
$y = r \sin \theta$

Now, let's compute the partial derivatives:
$\frac{\partial x}{\partial r} = \cos \theta$
$\frac{\partial x}{\partial \theta} = -r \sin \theta$
$\frac{\partial y}{\partial r} = \sin \theta$
$\frac{\partial y}{\partial \theta} = r \cos \theta$

The Jacobian determinant is:

$J = \begin{vmatrix} \cos \theta & -r \sin \theta \\ \sin \theta & r \cos \theta \end{vmatrix} = (\cos \theta)(r \cos \theta) - (-r \sin \theta)(\sin \theta)$
$J = r \cos^2 \theta + r \sin^2 \theta = r(\cos^2 \theta + \sin^2 \theta) = r(1) = r$

So, the Jacobian for the transformation from polar to Cartesian coordinates is simply $r$. This confirms our earlier intuition for $dA$:

$dx \, dy = \left| \frac{\partial(x, y)}{\partial(r, \theta)} \right| dr \, d\theta = |r| \, dr \, d\theta$

Since $r$ is typically non-negative in our regions of integration, $dx \, dy = r \, dr \, d\theta$. This formal derivation gives us confidence in the '$r$' factor. This connection between the Jacobian and the area element is a key takeaway, and understanding it helps connect with **CO2**.

### The Transformation Process: A Step-by-Step Approach

To successfully evaluate a double integral using polar coordinates, follow these steps:

1.  **Analyze the Region of Integration (R):** Sketch the region $R$ in the $xy$-plane. This is the most critical step! Look for circular arcs, sectors, or any features that suggest radial symmetry. This directly helps in understanding the geometry for **CO2**.
2.  **Describe the Region in Polar Coordinates (R'):** Once you have a good sketch, determine the bounds for $r$ and $\theta$ that cover the *exact* same region $R$.
    *   **For r:** What is the range of distances from the origin to points within $R$? This might be a constant value (like for a circle) or a function of $\theta$ (like for a sector bounded by lines and a circle).
    *   **For θ:** What is the range of angles needed to sweep through the entire region $R$? This is often a constant interval, like $[0, 2\pi]$ for a full circle or $[0, \pi/2]$ for a quarter circle.
3.  **Transform the Integrand:** Replace every $x$ and $y$ in the integrand $f(x, y)$ with their polar equivalents: $x = r \cos \theta$ and $y = r \sin \theta$. So, $f(x, y)$ becomes $f(r \cos \theta, r \sin \theta)$.
4.  **Replace dA:** Substitute $dx \, dy$ with $r \, dr \, d\theta$.
5.  **Set Up the Polar Integral:** Assemble the transformed integrand, the $r \, dr \, d\theta$ element, and the polar limits for $r$ and $\theta$ to form the new integral. The order of integration is typically $dr \, d\theta$ or $d\theta \, dr$. If the limits for $r$ depend on $\theta$, you must integrate with respect to $r$ first.
6.  **Evaluate the Integral:** Compute the resulting double integral. This is where your understanding of single-variable calculus is essential.

### Examples: Making it Concrete

Let's work through a few examples to solidify these steps. These will help illustrate the practical application for **CO2**.

#### Example 1: Area of a Circle

Let's find the area of a circle of radius $a$. The region $R$ is $x^2 + y^2 \le a^2$.

1.  **Region:** A circle centered at the origin with radius $a$.
2.  **Polar Description (R'):**
    *   $r$: The distance from the origin ranges from $0$ to $a$. So, $0 \le r \le a$.
    *   $\theta$: To cover the entire circle, the angle sweeps from $0$ to $2\pi$. So, $0 \le \theta \le 2\pi$.
3.  **Integrand:** We are finding area, so $f(x, y) = 1$. This remains $1$ in polar coordinates.
4.  **dA:** Replace $dx \, dy$ with $r \, dr \, d\theta$.
5.  **Polar Integral:**
    $\text{Area} = \iint_R dA = \int_{0}^{2\pi} \int_{0}^{a} r \, dr \, d\theta$
6.  **Evaluation:**
    $\int_{0}^{a} r \, dr = \left[ \frac{r^2}{2} \right]_0^a = \frac{a^2}{2}$
    $\int_{0}^{2\pi} \frac{a^2}{2} \, d\theta = \frac{a^2}{2} [\theta]_0^{2\pi} = \frac{a^2}{2} (2\pi) = \pi a^2$.

See? Much simpler than the Cartesian approach! This also demonstrates a basic application of **CO2**.

#### Example 2: A More Complex Integrand

Evaluate $\iint_R (x^2 + y^2) \, dA$, where $R$ is the region in the first quadrant bounded by the circle $x^2 + y^2 = 4$ and the coordinate axes.

1.  **Region:** First quadrant, within a circle of radius 2. This is a quarter-circle.
2.  **Polar Description (R'):**
    *   $r$: The distance from the origin ranges from $0$ to $2$. So, $0 \le r \le 2$.
    *   $\theta$: Since it's the first quadrant, the angle sweeps from $0$ to $\pi/2$. So, $0 \le \theta \le \pi/2$.
3.  **Integrand Transformation:**
    $x^2 + y^2 = (r \cos \theta)^2 + (r \sin \theta)^2 = r^2 \cos^2 \theta + r^2 \sin^2 \theta = r^2 (\cos^2 \theta + \sin^2 \theta) = r^2$.
    So, the integrand becomes $r^2$.
4.  **dA:** Replace $dx \, dy$ with $r \, dr \, d\theta$.
5.  **Polar Integral:**
    $\iint_R (x^2 + y^2) \, dA = \int_{0}^{\pi/2} \int_{0}^{2} (r^2) (r \, dr \, d\theta) = \int_{0}^{\pi/2} \int_{0}^{2} r^3 \, dr \, d\theta$
6.  **Evaluation:**
    Inner integral: $\int_{0}^{2} r^3 \, dr = \left[ \frac{r^4}{4} \right]_0^2 = \frac{2^4}{4} - 0 = \frac{16}{4} = 4$.
    Outer integral: $\int_{0}^{\pi/2} 4 \, d\theta = 4 [\theta]_0^{\pi/2} = 4 \left(\frac{\pi}{2}\right) = 2\pi$.

The result is $2\pi$. This example showcases how to handle a non-constant integrand and demonstrates the practical application of **CO2**.

#### Example 3: Region with Variable Radius

Evaluate $\iint_R y \, dA$, where $R$ is the region bounded by the x-axis, the line $y=x$, and the circle $x^2+y^2=1$.

1.  **Region:** Let's sketch this. It's in the first quadrant. It's bounded below by the x-axis ($\theta=0$). It's bounded above by the line $y=x$. Remember, $y=x$ corresponds to $\tan \theta = y/x = 1$, which means $\theta = \pi/4$. It's bounded radially by the circle $x^2+y^2=1$, which is $r=1$.
2.  **Polar Description (R'):**
    *   $r$: The region extends from the origin ($r=0$) out to the circle $r=1$. So, $0 \le r \le 1$.
    *   $\theta$: The region is between the x-axis ($\theta=0$) and the line $y=x$ ($\theta=\pi/4$). So, $0 \le \theta \le \pi/4$.
3.  **Integrand Transformation:**
    $y = r \sin \theta$.
4.  **dA:** Replace $dx \, dy$ with $r \, dr \, d\theta$.
5.  **Polar Integral:**
    $\iint_R y \, dA = \int_{0}^{\pi/4} \int_{0}^{1} (r \sin \theta) (r \, dr \, d\theta) = \int_{0}^{\pi/4} \int_{0}^{1} r^2 \sin \theta \, dr \, d\theta$
6.  **Evaluation:**
    Inner integral: $\int_{0}^{1} r^2 \sin \theta \, dr = \sin \theta \int_{0}^{1} r^2 \, dr = \sin \theta \left[ \frac{r^3}{3} \right]_0^1 = \sin \theta \left(\frac{1}{3}\right) = \frac{1}{3} \sin \theta$.
    Outer integral: $\int_{0}^{\pi/4} \frac{1}{3} \sin \theta \, d\theta = \frac{1}{3} \int_{0}^{\pi/4} \sin \theta \, d\theta = \frac{1}{3} [-\cos \theta]_0^{\pi/4}$
    $= \frac{1}{3} (-\cos(\pi/4) - (-\cos(0))) = \frac{1}{3} (-\frac{\sqrt{2}}{2} + 1) = \frac{1}{3} (1 - \frac{\sqrt{2}}{2})$.

This example highlights a region where $r$ is constant, but $\theta$ is not a full sweep, a common scenario for problems related to **CO2** and engineering applications involving sectors.

### Applications in Science and Engineering

The ability to switch to polar coordinates is incredibly useful in many scientific and engineering fields. Consider:

*   **Electrical Engineering:** Analyzing the magnetic field of a current-carrying wire or the electric field around a charged disk often involves circular symmetry, making polar coordinates ideal. Calculating flux through a circular surface would use this technique. This directly relates to **CO4** when considering surface integrals with symmetry.
*   **Physics:** Calculating the gravitational force between two objects with spherical symmetry, or the electric potential due to a charged sphere, can be simplified using spherical or cylindrical coordinates (which extend the polar idea). Even in 2D, problems involving fluid flow in pipes or heat distribution on a circular plate benefit immensely. This is also relevant to **CO2** for volumes and areas.
*   **Signal Processing:** Fourier transforms in 2D can sometimes exploit circular symmetry using polar coordinates.

The texts by **Kreyszig (10th ed.)** and **Bird (9th ed.)** often provide excellent examples of these applications in engineering mathematics.

### Common Pitfalls and Exam Tips

*   **Forgetting the 'r' in dA:** This is the most frequent error. Always remember $dA = r \, dr \, d\theta$.
*   **Incorrectly defining the region R':** Sketching is crucial. Make sure your polar bounds cover the *exact* same area as the Cartesian region. Pay close attention to the angles, especially when lines like $y=x$ or the axes are boundaries.
*   **Confusing $dr \, d\theta$ and $d\theta \, dr$ order:** If the limits for $r$ depend on $\theta$, you *must* integrate with respect to $r$ first.
*   **Transforming the integrand correctly:** Be careful with substitutions, especially if the integrand involves expressions like $x^2+y^2$ or terms like $y/x$.
*   **Evaluating trigonometric integrals:** Ensure you're comfortable integrating functions involving $\sin \theta$, $\cos \theta$, $\sec^2 \theta$, etc.

When studying for exams, practice sketching regions and setting up the polar integrals. Many questions will test your ability to correctly identify the polar bounds and the transformed integrand. Understanding the geometric meaning of the Jacobian (as the scaling factor for area) will help reinforce the '$r$' factor.

### Summary and Looking Ahead

We've seen how changing from Cartesian to polar coordinates can dramatically simplify double integrals when dealing with circular or radially symmetric regions. The key is the transformation of the area element $dA = dx \, dy$ to $dA = r \, dr \, d\theta$, driven by the Jacobian of the transformation. This technique is a powerful tool that directly helps us tackle problems involving areas and volumes, as outlined in **CO2**, and finds broad applications in electrical and physical sciences, linking to all our course outcomes.

In our next session, we might explore other coordinate transformations, like generalized polar coordinates or even moving to 3D with cylindrical and spherical coordinates, building on the foundation we've laid today.

### Sample Questions and Answers

Here are a few practice questions to test your understanding:

**Question 1 (Conceptual):**
Explain why the Jacobian for the transformation from Cartesian to polar coordinates is $r$.

**Answer:** The Jacobian of a coordinate transformation represents the factor by which infinitesimal areas are scaled when moving from one coordinate system to another. In polar coordinates, an infinitesimal region in the $r\theta$-plane defined by $dr$ and $d\theta$ maps to a region in the $xy$-plane whose area is approximately $r \, dr \, d\theta$. This is because the arc length corresponding to $d\theta$ at radius $r$ is $r \, d\theta$, while the radial extent is $dr$. The Jacobian determinant of the transformation $x = r\cos\theta, y = r\sin\theta$ is $\frac{\partial(x,y)}{\partial(r,\theta)} = r$, which accounts for this geometric scaling. This understanding is crucial for **CO2**.

**Question 2 (Application):**
Evaluate the double integral $\iint_R \sqrt{x^2 + y^2} \, dA$, where $R$ is the region within the circle $x^2 + y^2 = 9$ and above the x-axis.

**Solution:**
1.  **Region Sketch:** The region $R$ is the upper semi-circle of radius 3, centered at the origin.
2.  **Polar Description (R'):**
    *   $r$: Ranges from $0$ to $3$. So, $0 \le r \le 3$.
    *   $\theta$: For the upper semi-circle, the angle ranges from $0$ to $\pi$. So, $0 \le \theta \le \pi$.
3.  **Integrand Transformation:** $\sqrt{x^2 + y^2} = \sqrt{r^2} = r$ (since $r \ge 0$).
4.  **dA:** $r \, dr \, d\theta$.
5.  **Polar Integral:**
    $\int_{0}^{\pi} \int_{0}^{3} (r) (r \, dr \, d\theta) = \int_{0}^{\pi} \int_{0}^{3} r^2 \, dr \, d\theta$.
6.  **Evaluation:**
    Inner integral: $\int_{0}^{3} r^2 \, dr = \left[ \frac{r^3}{3} \right]_0^3 = \frac{3^3}{3} - 0 = \frac{27}{3} = 9$.
    Outer integral: $\int_{0}^{\pi} 9 \, d\theta = 9 [\theta]_0^{\pi} = 9(\pi - 0) = 9\pi$.

The value of the integral is $9\pi$. This question tests the core concepts for **CO2**.

**Question 3 (Exam-Oriented - Common Pitfall):**
Find the area of the region enclosed by the cardioid $r = 1 + \cos \theta$.

**Solution:**
1.  **Region:** The cardioid $r = 1 + \cos \theta$. We need to find the area, so $f(x, y) = 1$.
2.  **Polar Description (R'):**
    *   $r$: Ranges from $0$ to $1 + \cos \theta$. So, $0 \le r \le 1 + \cos \theta$.
    *   $\theta$: To trace the entire cardioid, $\theta$ ranges from $0$ to $2\pi$. So, $0 \le \theta \le 2\pi$.
3.  **Integrand:** $1$.
4.  **dA:** $r \, dr \, d\theta$.
5.  **Polar Integral:**
    $\text{Area} = \int_{0}^{2\pi} \int_{0}^{1+\cos\theta} r \, dr \, d\theta$.
6.  **Evaluation:**
    Inner integral: $\int_{0}^{1+\cos\theta} r \, dr = \left[ \frac{r^2}{2} \right]_0^{1+\cos\theta} = \frac{(1+\cos\theta)^2}{2}$.
    Outer integral: $\int_{0}^{2\pi} \frac{(1+\cos\theta)^2}{2} \, d\theta$.
    Expand $(1+\cos\theta)^2 = 1 + 2\cos\theta + \cos^2\theta$.
    Use the identity $\cos^2\theta = \frac{1 + \cos(2\theta)}{2}$.
    So, the integrand becomes $\frac{1}{2} \left( 1 + 2\cos\theta + \frac{1 + \cos(2\theta)}{2} \right) = \frac{1}{2} \left( \frac{3}{2} + 2\cos\theta + \frac{1}{2}\cos(2\theta) \right)$.
    Now integrate from $0$ to $2\pi$:
    $\int_{0}^{2\pi} \left( \frac{3}{4} + \cos\theta + \frac{1}{4}\cos(2\theta) \right) \, d\theta$
    $= \left[ \frac{3}{4}\theta + \sin\theta + \frac{1}{8}\sin(2\theta) \right]_0^{2\pi}$
    $= \left( \frac{3}{4}(2\pi) + \sin(2\pi) + \frac{1}{8}\sin(4\pi) \right) - (0 + 0 + 0)$
    $= \frac{3\pi}{2}$.

This problem involves a common polar curve and requires careful integration, testing **CO2**. A mistake here could be in the trigonometric integration or setting up the limits for $r$.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |
