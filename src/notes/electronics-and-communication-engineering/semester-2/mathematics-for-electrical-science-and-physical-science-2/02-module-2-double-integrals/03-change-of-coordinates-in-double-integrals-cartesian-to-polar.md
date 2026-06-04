---
title: "change of coordinates in double integrals (Cartesian to polar)"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 2"
module: "Module 2: Double integrals"
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da1cf"
status: "completed"
scrapedAt: "2026-05-23T17:40:39.775Z"
---
# Mathematics for Electrical Science and Physical Science - 2

## Module 2: Double Integrals

### Topic: Change of Coordinates in Double Integrals (Cartesian to Polar)

Welcome, everyone! Today, we're diving into a really powerful technique that can make our lives so much easier when dealing with double integrals: the **change of coordinates**. Specifically, we'll be focusing on transitioning from the familiar **Cartesian coordinate system** (the x-y plane) to the often more intuitive **polar coordinate system**.

Why do we even bother with this? Well, imagine you have a region of integration that's circular, or has radial symmetry – like a pizza slice, a circular disk, or the area between two concentric circles. Trying to describe the boundaries of these shapes using x and y can get pretty messy, involving square roots and complications. Polar coordinates, on the other hand, are designed precisely for these kinds of shapes, using distance from the origin ($r$) and an angle ($\theta$). By switching to polar coordinates, we can often simplify the integrand and the limits of integration dramatically, making the entire integration process much more manageable. This directly ties into our **Course Outcome 2 (CO2)**, where we aim to *understand the theoretical idea of multiple integrals and apply them to find areas and volumes of geometrical shapes*. When those shapes are circular, polar coordinates are your best friend!

Let's start by recalling what polar coordinates are all about, a concept you've likely encountered before in your studies, as covered in texts like Anton, Biven, and Davis.

### 1. Understanding Polar Coordinates

In the Cartesian system, we locate a point using its horizontal (x) and vertical (y) distances from the origin. In polar coordinates, we locate a point by its **distance from the origin** (which we call $r$) and the **angle** (which we call $\theta$) that the line segment connecting the origin to the point makes with the positive x-axis.

*   **Relationship between Cartesian and Polar Coordinates:**

    The bridge between these two systems is crucial for our change of variables. If a point $(x, y)$ in Cartesian coordinates corresponds to $(r, \theta)$ in polar coordinates, then the following relationships hold:

    *   $x = r \cos \theta$
    *   $y = r \sin \theta$

    And conversely, we can find $r$ and $\theta$ from $x$ and $y$:

    *   $r^2 = x^2 + y^2 \implies r = \sqrt{x^2 + y^2}$ (We usually take $r \ge 0$)
    *   $\tan \theta = \frac{y}{x}$ (We need to be careful with the quadrant of $(x, y)$ to determine the correct $\theta$)

    Think of it like this: if you're giving directions to someone. In Cartesian, you might say "go 3 blocks east and 4 blocks north." In polar, you'd say "walk 5 blocks in the direction that makes a 53.13-degree angle with the east street." For navigating a circular city, polar coordinates might be much more efficient!

### 2. The Jacobian of the Transformation

Now, here's the really important part when changing variables in integration. When we switch from Cartesian to polar coordinates, we're not just changing the variables $x$ and $y$ to $r$ and $\theta$. We also need to account for how the "infinitesimal area element" changes. In Cartesian coordinates, this is $dA = dx \, dy$ (or $dy \, dx$). In polar coordinates, it's $dA = r \, dr \, d\theta$.

Where does this extra '$r$' come from? It's the **Jacobian determinant** of the transformation. The Jacobian is a fundamental concept in multivariable calculus, crucial for understanding how areas and volumes scale under a coordinate transformation. Texts like Thomas' Calculus and Kreyszig's Advanced Engineering Mathematics delve deeply into this.

The Jacobian of the transformation from Cartesian $(x, y)$ to polar $(r, \theta)$ is defined as:

$J = \frac{\partial(x, y)}{\partial(r, \theta)} = \begin{vmatrix} \frac{\partial x}{\partial r} & \frac{\partial x}{\partial \theta} \\ \frac{\partial y}{\partial r} & \frac{\partial y}{\partial \theta} \end{vmatrix}$

Let's calculate this. We have:
*   $\frac{\partial x}{\partial r} = \cos \theta$
*   $\frac{\partial x}{\partial \theta} = -r \sin \theta$
*   $\frac{\partial y}{\partial r} = \sin \theta$
*   $\frac{\partial y}{\partial \theta} = r \cos \theta$

So, the Jacobian is:
$J = \begin{vmatrix} \cos \theta & -r \sin \theta \\ \sin \theta & r \cos \theta \end{vmatrix} = (\cos \theta)(r \cos \theta) - (-r \sin \theta)(\sin \theta)$
$J = r \cos^2 \theta + r \sin^2 \theta = r(\cos^2 \theta + \sin^2 \theta) = r(1) = r$

The absolute value of the Jacobian is what we use in the integral: $|J| = |r|$. Since $r$ represents distance from the origin, we typically consider $r \ge 0$, so $|r| = r$.

Therefore, the differential area element transforms as:

$dx \, dy = |J| \, dr \, d\theta = r \, dr \, d\theta$

This means that when we set up a double integral in polar coordinates, we must include this factor of $r$ in our integrand. This is a common pitfall for students – forgetting the $r$! Remember this: **the area element in polar coordinates is $r \, dr \, d\theta$, not just $dr \, d\theta$.**

### 3. Setting Up Double Integrals in Polar Coordinates

So, if we have a double integral of a function $f(x, y)$ over a region $D$ in the xy-plane:

$\iint_D f(x, y) \, dA$

and we want to switch to polar coordinates, we follow these steps:

1.  **Express $f(x, y)$ in terms of $r$ and $\theta$**: Replace every $x$ with $r \cos \theta$ and every $y$ with $r \sin \theta$.
2.  **Determine the region of integration in polar coordinates**: This is often the trickiest part. You need to describe the boundaries of your region $D$ using inequalities involving $r$ and $\theta$.
    *   **For $r$**: Usually, $r$ will range from a constant value (often 0) to another constant value, or a function of $\theta$.
    *   **For $\theta$**: $\theta$ typically ranges from a constant to another constant, covering the angular sweep of your region. A full circle is $0 \le \theta \le 2\pi$. A semicircle might be $0 \le \theta \le \pi$.
3.  **Replace $dA$ with $r \, dr \, d\theta$**: This is where the Jacobian comes in.
4.  **Integrate**: Set up the iterated integral with the new function, the new limits, and the $r \, dr \, d\theta$ element.

The form of the integral will look like this:

$\iint_D f(x, y) \, dx \, dy = \iint_{D_{polar}} f(r \cos \theta, r \sin \theta) \cdot r \, dr \, d\theta$

Where $D_{polar}$ is the region $D$ described in polar coordinates.

This transformation is particularly useful for **Course Outcome 2 (CO2)**, as it simplifies the calculation of areas and volumes for circular or radially symmetric shapes. It also implicitly relates to **CO1** if the function $f(x,y)$ involves terms like $x^2+y^2$, which become much simpler as $r^2$.

### 4. Examples: Bringing it to Life!

Let's work through some examples to solidify our understanding.

**Example 1: Area of a Circular Disk**

Find the area of a disk of radius $a$ centered at the origin.

*   **Cartesian Approach (briefly):**
    The region is $x^2 + y^2 \le a^2$. The area is $\iint_D 1 \, dx \, dy$.
    The limits would be something like $y$ from $-\sqrt{a^2-x^2}$ to $\sqrt{a^2-x^2}$, and $x$ from $-a$ to $a$. This integral $\int_{-a}^a \int_{-\sqrt{a^2-x^2}}^{\sqrt{a^2-x^2}} 1 \, dy \, dx$ is doable but involves trigonometric substitutions.

*   **Polar Approach:**
    1.  **Region in Polar Coordinates:**
        A disk of radius $a$ is described by $0 \le r \le a$ and $0 \le \theta \le 2\pi$. This is much cleaner!
    2.  **Integrand:**
        Our function is $f(x, y) = 1$. In polar coordinates, it's still 1.
    3.  **Area Element:**
        $dA = r \, dr \, d\theta$.
    4.  **The Integral:**
        Area $= \int_0^{2\pi} \int_0^a 1 \cdot r \, dr \, d\theta$

    Now, let's evaluate:
    Inner integral (with respect to $r$):
    $\int_0^a r \, dr = \left[ \frac{r^2}{2} \right]_0^a = \frac{a^2}{2} - 0 = \frac{a^2}{2}$

    Outer integral (with respect to $\theta$):
    $\int_0^{2\pi} \frac{a^2}{2} \, d\theta = \frac{a^2}{2} [\theta]_0^{2\pi} = \frac{a^2}{2} (2\pi - 0) = \pi a^2$.

    And there you have it – the familiar formula for the area of a circle! See how much simpler the setup and integration were? This is a prime example of how polar coordinates can simplify calculations for geometric shapes, directly supporting **CO2**.

**Example 2: A More Complex Region and Integrand**

Evaluate $\iint_D (x^2 + y^2) \, dA$, where $D$ is the region in the first quadrant bounded by the circle $x^2 + y^2 = 4$ and the x-axis.

*   **Visualizing the Region:**
    This is a quarter of a circle with radius 2, located in the first quadrant (where both $x$ and $y$ are positive). Imagine a slice of pizza cut from the top-right quadrant of a pizza.

*   **Cartesian Approach (why it's tedious):**
    The region is bounded by $y=0$, $x=0$, and $x^2 + y^2 = 4$.
    The limits for $y$ would be from 0 to $\sqrt{4-x^2}$, and for $x$ from 0 to 2.
    The integral would be $\int_0^2 \int_0^{\sqrt{4-x^2}} (x^2 + y^2) \, dy \, dx$. The integrand $y^2$ and the limit $\sqrt{4-x^2}$ will lead to tricky integration.

*   **Polar Approach:**
    1.  **Region in Polar Coordinates:**
        *   The circle $x^2 + y^2 = 4$ becomes $r^2 = 4$, so $r = 2$. Since it's a disk (or part of one) centered at the origin, $r$ ranges from 0 to 2.
        *   The first quadrant is defined by angles from $0$ (positive x-axis) to $\frac{\pi}{2}$ (positive y-axis). So, $0 \le \theta \le \frac{\pi}{2}$.
        *   The region $D$ in polar coordinates is $0 \le r \le 2$ and $0 \le \theta \le \frac{\pi}{2}$.

    2.  **Integrand in Polar Coordinates:**
        We have $x^2 + y^2$. In polar coordinates, $x = r \cos \theta$ and $y = r \sin \theta$.
        So, $x^2 + y^2 = (r \cos \theta)^2 + (r \sin \theta)^2 = r^2 \cos^2 \theta + r^2 \sin^2 \theta = r^2 (\cos^2 \theta + \sin^2 \theta) = r^2$.
        Much simpler, isn't it? This is where the power of polar coordinates truly shines, connecting to **CO1** where we deal with multivariable functions and their properties.

    3.  **Area Element:**
        $dA = r \, dr \, d\theta$.

    4.  **The Integral:**
        $\iint_D (x^2 + y^2) \, dA = \int_0^{\pi/2} \int_0^2 (r^2) \cdot r \, dr \, d\theta$
        $= \int_0^{\pi/2} \int_0^2 r^3 \, dr \, d\theta$

    Now, let's evaluate:
    Inner integral (with respect to $r$):
    $\int_0^2 r^3 \, dr = \left[ \frac{r^4}{4} \right]_0^2 = \frac{2^4}{4} - 0 = \frac{16}{4} = 4$.

    Outer integral (with respect to $\theta$):
    $\int_0^{\pi/2} 4 \, d\theta = 4 [\theta]_0^{\pi/2} = 4 \left(\frac{\pi}{2} - 0\right) = 4 \cdot \frac{\pi}{2} = 2\pi$.

    So, the value of the integral is $2\pi$. This example clearly demonstrates how polar coordinates simplify both the integrand and the limits for regions with circular symmetry, which is key for **CO2**.

**Example 3: Integration over an Annulus (Region Between Two Circles)**

Calculate $\iint_D (x^2 + y^2) \, dA$, where $D$ is the region between the circles $x^2 + y^2 = 1$ and $x^2 + y^2 = 9$.

*   **Visualizing the Region:**
    This is like a donut or a washer. It's the area outside the smaller circle of radius 1 and inside the larger circle of radius 3, centered at the origin.

*   **Polar Approach:**
    1.  **Region in Polar Coordinates:**
        *   The inner circle $x^2 + y^2 = 1$ becomes $r^2 = 1$, so $r=1$.
        *   The outer circle $x^2 + y^2 = 9$ becomes $r^2 = 9$, so $r=3$.
        *   Thus, $r$ ranges from 1 to 3: $1 \le r \le 3$.
        *   Since the region is a full annulus (donut), $\theta$ covers all angles: $0 \le \theta \le 2\pi$.

    2.  **Integrand in Polar Coordinates:**
        Again, $x^2 + y^2$ becomes $r^2$.

    3.  **Area Element:**
        $dA = r \, dr \, d\theta$.

    4.  **The Integral:**
        $\iint_D (x^2 + y^2) \, dA = \int_0^{2\pi} \int_1^3 (r^2) \cdot r \, dr \, d\theta$
        $= \int_0^{2\pi} \int_1^3 r^3 \, dr \, d\theta$

    Let's evaluate:
    Inner integral (with respect to $r$):
    $\int_1^3 r^3 \, dr = \left[ \frac{r^4}{4} \right]_1^3 = \frac{3^4}{4} - \frac{1^4}{4} = \frac{81}{4} - \frac{1}{4} = \frac{80}{4} = 20$.

    Outer integral (with respect to $\theta$):
    $\int_0^{2\pi} 20 \, d\theta = 20 [\theta]_0^{2\pi} = 20 (2\pi - 0) = 40\pi$.

    The value of the integral is $40\pi$. This example showcases the power of polar coordinates for regions with radial symmetry, making calculations for annular regions much simpler, again reinforcing **CO2**.

### 5. When to Use Polar Coordinates

You should strongly consider switching to polar coordinates when:

*   **The region of integration has circular or radial symmetry.** This includes disks, sectors of disks, annuli, or regions bounded by polar curves.
*   **The integrand involves terms like $x^2 + y^2$, $\sqrt{x^2 + y^2}$, or expressions that simplify nicely in polar form.** As we saw, $x^2 + y^2 = r^2$ and $\sqrt{x^2 + y^2} = r$. These simplifications are key to making the integration manageable. This directly aids in **CO1** and **CO2**.

For example, if you're calculating the mass of a circular plate with a density that depends on the distance from the center, polar coordinates are almost certainly the way to go. You'll often see these types of problems in physics and engineering applications, aligning with our broader **Course Outcomes**.

### 6. Common Pitfalls and Tips

*   **Forgetting the Jacobian ($r$):** I cannot stress this enough. Always include the $r$ factor in your integral: $r \, dr \, d\theta$. This is the most common mistake.
*   **Incorrectly defining the region in polar coordinates:** Sketching the region is essential. Pay close attention to the bounds for $r$ and $\theta$. Are they constants, or do they depend on each other? For instance, a region shaped like a crescent might have $r$ depending on $\theta$.
*   **Choosing the wrong range for $\theta$:** Ensure your $\theta$ limits sweep out the entire region exactly once. For example, using $0 \le \theta \le 4\pi$ for a single circle would integrate over it twice.
*   **Confusing $r$ and $\theta$ limits:** Remember $r$ is a distance (non-negative), and $\theta$ is an angle.

Remember, the goal is to simplify the problem. If switching to polar coordinates makes the integrand or the region of integration more complicated, stick with Cartesian coordinates. However, for anything with circular symmetry, polar coordinates are usually a massive advantage.

### Sample Questions and Answers

Here are a few questions to test your understanding, ranging from conceptual to exam-style.

**Question 1 (Conceptual):**
Why is the Jacobian factor of $r$ necessary when changing from Cartesian to polar coordinates in a double integral?

**Answer:**
The Jacobian factor $r$ is necessary because it represents the scaling factor for the area element when transforming from Cartesian coordinates $(dx \, dy)$ to polar coordinates $(dr \, d\theta)$. The transformation $x = r \cos \theta$, $y = r \sin \theta$ warps the grid of squares in the $xy$-plane into a grid of curvilinear sectors in the $r\theta$-plane. The area of a small rectangle of size $dr \times d\theta$ in the $r\theta$-plane is mapped to a region in the $xy$-plane whose area is approximately $r \, dr \, d\theta$. This scaling accounts for the fact that the "density" of area coverage changes with distance from the origin in polar coordinates. Specifically, as $r$ increases, the radial lines are further apart, and the sectors are larger for the same change in angle $d\theta$. Forgetting this factor leads to incorrect area or volume calculations, impacting **CO2**.

**Question 2 (Application):**
Evaluate the double integral $\iint_D e^{-(x^2+y^2)} \, dA$, where $D$ is the region inside the circle $x^2+y^2 = 16$.

**Answer:**
This integral is a classic example where polar coordinates are essential. The integrand $e^{-(x^2+y^2)}$ and the circular region $x^2+y^2 \le 16$ strongly suggest a polar transformation.

1.  **Region in Polar Coordinates:** The circle $x^2+y^2 = 16$ is $r^2=16$, so $r=4$. The entire disk means $0 \le r \le 4$ and $0 \le \theta \le 2\pi$.

2.  **Integrand in Polar Coordinates:** $x^2+y^2 = r^2$. So, $e^{-(x^2+y^2)} = e^{-r^2}$.

3.  **Area Element:** $dA = r \, dr \, d\theta$.

4.  **The Integral:**
    $\iint_D e^{-(x^2+y^2)} \, dA = \int_0^{2\pi} \int_0^4 e^{-r^2} \cdot r \, dr \, d\theta$.

    Now, let's solve the inner integral with respect to $r$:
    $\int_0^4 r e^{-r^2} \, dr$.
    We can use a substitution here. Let $u = -r^2$. Then $du = -2r \, dr$, which means $r \, dr = -\frac{1}{2} du$.
    When $r=0$, $u=0$. When $r=4$, $u = -(4^2) = -16$.
    So, the integral becomes:
    $\int_0^{-16} e^u \left(-\frac{1}{2} \, du\right) = -\frac{1}{2} \int_0^{-16} e^u \, du = -\frac{1}{2} [e^u]_0^{-16} = -\frac{1}{2} (e^{-16} - e^0) = -\frac{1}{2} (e^{-16} - 1) = \frac{1}{2} (1 - e^{-16})$.

    Now, the outer integral with respect to $\theta$:
    $\int_0^{2\pi} \frac{1}{2} (1 - e^{-16}) \, d\theta = \frac{1}{2} (1 - e^{-16}) [\theta]_0^{2\pi} = \frac{1}{2} (1 - e^{-16}) (2\pi - 0) = \pi (1 - e^{-16})$.

    The value of the integral is $\pi (1 - e^{-16})$. This type of integral, often related to the Gaussian function, is practically impossible to solve in Cartesian coordinates but straightforward in polar coordinates, highlighting its importance for **CO2**.

**Question 3 (Identification of Region):**
Describe the region $D$ defined by the polar inequalities $0 \le r \le 2\cos\theta$ and $0 \le \theta \le \pi/2$ in Cartesian coordinates. What would be the integral if we wanted to find the area of this region?

**Answer:**
Let's convert the polar inequality $r \le 2\cos\theta$ to Cartesian coordinates.
Multiply both sides by $r$ (since $r > 0$ in the specified range of $\theta$, this is valid):
$r^2 \le 2r\cos\theta$.
We know $r^2 = x^2 + y^2$ and $x = r\cos\theta$.
So, $x^2 + y^2 \le 2x$.
Rearranging this, we get $x^2 - 2x + y^2 \le 0$.
Completing the square for the $x$ terms: $(x^2 - 2x + 1) + y^2 \le 1$.
This simplifies to $(x-1)^2 + y^2 \le 1$.
This is the equation of a circle centered at $(1, 0)$ with a radius of 1.

Now consider the limits on $\theta$: $0 \le \theta \le \pi/2$. This restricts us to the first quadrant.
Therefore, the region $D$ is the portion of the circle $(x-1)^2 + y^2 \le 1$ that lies in the first quadrant. This is a semicircle in the first quadrant.

To find the area of this region, we would set up the double integral:
Area $= \iint_D 1 \, dA$.
In polar coordinates, the region $D$ is given by $0 \le r \le 2\cos\theta$ and $0 \le \theta \le \pi/2$.
The area integral in polar coordinates is:
Area $= \int_0^{\pi/2} \int_0^{2\cos\theta} 1 \cdot r \, dr \, d\theta$.

Evaluating this integral:
Inner integral: $\int_0^{2\cos\theta} r \, dr = \left[\frac{r^2}{2}\right]_0^{2\cos\theta} = \frac{(2\cos\theta)^2}{2} - 0 = \frac{4\cos^2\theta}{2} = 2\cos^2\theta$.
Outer integral: $\int_0^{\pi/2} 2\cos^2\theta \, d\theta$.
Using the identity $\cos^2\theta = \frac{1+\cos(2\theta)}{2}$:
$\int_0^{\pi/2} 2 \left(\frac{1+\cos(2\theta)}{2}\right) \, d\theta = \int_0^{\pi/2} (1+\cos(2\theta)) \, d\theta$.
$= \left[\theta + \frac{1}{2}\sin(2\theta)\right]_0^{\pi/2}$
$= \left(\frac{\pi}{2} + \frac{1}{2}\sin(\pi)\right) - \left(0 + \frac{1}{2}\sin(0)\right)$
$= \left(\frac{\pi}{2} + 0\right) - (0 + 0) = \frac{\pi}{2}$.
The area is $\frac{\pi}{2}$. This shows how polar coordinates are used to define and integrate over regions that are simple in polar form but more complex in Cartesian form, supporting **CO2**.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |
