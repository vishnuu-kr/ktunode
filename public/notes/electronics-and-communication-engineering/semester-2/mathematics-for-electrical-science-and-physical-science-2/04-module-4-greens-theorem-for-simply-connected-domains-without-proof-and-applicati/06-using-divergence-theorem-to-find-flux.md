---
title: "Using Divergence theorem to find flux"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 2"
module: "Module 4: Green’s theorem (for simply connected domains, without proof) and applications to evaluating line integrals"
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da1e6"
status: "completed"
scrapedAt: "2026-05-23T17:40:57.407Z"
---
# Module 4: Green's Theorem and Applications to Evaluating Line Integrals

## Topic: Using the Divergence Theorem to Find Flux

Welcome, everyone! In this module, we're delving into the fascinating world of vector calculus, exploring powerful theorems that simplify complex calculations, especially when dealing with fields and their behavior. We've already touched upon Green's Theorem, which beautifully connects line integrals around a closed curve with a double integral over the region enclosed. Today, we're going to broaden our perspective and introduce a theorem that operates in three dimensions: the **Divergence Theorem**. This theorem is absolutely crucial for understanding how quantities "flow" through surfaces and is incredibly useful in many areas of electrical science and physical science.

### Revisiting Flux: What are we actually measuring?

Before we jump into the Divergence Theorem itself, let's quickly recap what "flux" means. Imagine a river, and you're trying to measure how much water is passing through a particular section of the riverbank. Flux is essentially that measure of "flow." In vector calculus, flux quantifies the rate at which a vector field "flows" across a given surface.

Think about electric fields or magnetic fields. We're often interested in how much of that field is passing through a certain area, say, the surface of a conductor or the area enclosed by a coil. This "amount of field passing through" is precisely what flux measures.

Calculating flux directly often involves a surface integral, which can be quite involved. This is where theorems like the Divergence Theorem come in as incredibly powerful tools for simplification. They allow us to convert a potentially difficult surface integral into a more manageable volume integral. This is a core theme in our course – finding clever ways to transform problems into simpler forms.

### Introducing the Divergence Theorem: The 3D Cousin of Green's Theorem

Just as Green's Theorem relates a line integral in 2D to an area integral, the **Divergence Theorem** (also known as Gauss's Theorem) does something similar but in **three dimensions**. It provides a profound link between the **flux of a vector field across a closed surface** and the **divergence of that field within the volume enclosed by the surface**.

Let's break this down.

**Key Concepts:**

*   **Vector Field ($\mathbf{F}$):** In 3D, a vector field assigns a vector to each point in space. Think of it as a force field, a fluid velocity field, or an electromagnetic field. For instance, $\mathbf{F}(x, y, z) = P(x, y, z) \mathbf{i} + Q(x, y, z) \mathbf{j} + R(x, y, z) \mathbf{k}$.
*   **Closed Surface ($S$):** This is a surface that encloses a region of space, much like the skin of an orange encloses the fruit. It has no holes and forms a boundary.
*   **Flux ($\iint_S \mathbf{F} \cdot d\mathbf{S}$):** This is the surface integral that measures the net flow of the vector field $\mathbf{F}$ across the surface $S$. The dot product $\mathbf{F} \cdot d\mathbf{S}$ ensures we are only considering the component of the field perpendicular to the surface, which is what contributes to flow.
*   **Divergence of $\mathbf{F}$ ($\nabla \cdot \mathbf{F}$):** The divergence is a scalar function that measures the "outwardness" of the vector field at a point. If the divergence is positive at a point, it means the field is expanding or originating from that point (like a source). If it's negative, the field is contracting or terminating at that point (like a sink). If it's zero, the field is neither expanding nor contracting locally.
    The divergence is calculated as:
    $\nabla \cdot \mathbf{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}$.

**The Statement of the Divergence Theorem:**

Now, for the theorem itself. For a sufficiently smooth, three-dimensional vector field $\mathbf{F}$ and a solid region $E$ bounded by a piecewise smooth, closed surface $S$ with outward unit normal vector $\mathbf{n}$, the Divergence Theorem states:

$$ \iint_S \mathbf{F} \cdot d\mathbf{S} = \iiint_E (\nabla \cdot \mathbf{F}) \, dV $$

In simpler terms: **The total outward flux of a vector field across a closed surface is equal to the volume integral of the divergence of that field over the region enclosed by the surface.**

Think of it this way: Imagine a sealed balloon filled with smoke. The rate at which smoke is escaping from the balloon's surface (the flux) is directly related to how much the smoke is expanding *inside* the balloon (the divergence integrated over the volume). If the smoke inside isn't expanding or contracting anywhere within the balloon, then no net smoke will come out of the surface. This is the essence of flux being zero when divergence is zero everywhere inside.

This theorem is incredibly powerful because it allows us to transform a surface integral (which can be tricky to set up and compute, especially for complex surfaces) into a volume integral, which is often much easier to evaluate using standard multiple integration techniques we’ve learned. This directly relates to **CO4: Apply the concepts of surface and volume integrals and to learn their inter-relations and applications**.

### Why is this so useful? Applications in Electrical Science and Physical Science

This theorem is a cornerstone in many scientific disciplines:

*   **Electromagnetism:** Gauss's Law for electricity, a fundamental law, is a direct consequence of the Divergence Theorem. It relates the electric flux through a closed surface to the enclosed electric charge. Specifically, $\nabla \cdot \mathbf{E} = \rho/\epsilon_0$, where $\mathbf{E}$ is the electric field, $\rho$ is the charge density, and $\epsilon_0$ is the permittivity of free space. Applying the Divergence Theorem to $\iint_S \mathbf{E} \cdot d\mathbf{S} = \iiint_E (\nabla \cdot \mathbf{E}) \, dV$ leads directly to Gauss's Law in its integral form: $\iint_S \mathbf{E} \cdot d\mathbf{S} = \frac{1}{\epsilon_0} \iiint_E \rho \, dV = \frac{Q_{enc}}{\epsilon_0}$. This is a fantastic example of how abstract mathematical theorems underpin crucial physical laws.
*   **Fluid Dynamics:** We can use it to analyze the flow of fluids. If $\mathbf{F}$ represents the velocity field of a fluid, then the flux across a surface tells us the rate at which fluid is passing through that surface. The divergence, $\nabla \cdot \mathbf{F}$, represents the rate at which fluid is expanding or compressing at a point. If the fluid is incompressible, its divergence is zero, and therefore the net flux across any closed surface will also be zero.
*   **Heat Transfer:** It can be used to analyze heat flow, where the vector field represents the direction and magnitude of heat transfer.

### Using the Divergence Theorem to Find Flux: The Practical Steps

So, how do we actually *use* this theorem to calculate flux? The general strategy is to:

1.  **Identify the Vector Field ($\mathbf{F}$) and the Closed Surface ($S$).** The problem will usually specify these. The surface $S$ will define a solid region $E$.
2.  **Calculate the Divergence of the Vector Field ($\nabla \cdot \mathbf{F}$).** This involves taking partial derivatives of the components of $\mathbf{F}$ and summing them up. This is where our understanding of partial derivatives from earlier modules comes into play (**CO1: Compute the partial and total derivatives...**).
3.  **Set up the Volume Integral ($\iiint_E (\nabla \cdot \mathbf{F}) \, dV$).** This is the integral of the divergence over the region $E$ enclosed by the surface $S$.
4.  **Evaluate the Volume Integral.** This is often the most straightforward part, as we can use standard techniques for multiple integrals. The choice of integration order and coordinate system (Cartesian, cylindrical, spherical) will depend on the geometry of the region $E$ and the divergence function. This directly connects to **CO2: Understand theoretical idea of multiple integrals and to apply them to find areas and volumes of geometrical shapes**.

**Example 1: A Simple Sphere**

Let's say we have the vector field $\mathbf{F}(x, y, z) = x\mathbf{i} + y\mathbf{j} + z\mathbf{k}$ and we want to find the flux of $\mathbf{F}$ outward through the sphere $x^2 + y^2 + z^2 = a^2$.

*   **Step 1: Identify $\mathbf{F}$ and $S$.**
    $\mathbf{F}(x, y, z) = x\mathbf{i} + y\mathbf{j} + z\mathbf{k}$.
    The surface $S$ is the sphere $x^2 + y^2 + z^2 = a^2$. This surface encloses a solid ball $E$ defined by $x^2 + y^2 + z^2 \le a^2$.

*   **Step 2: Calculate the Divergence.**
    Here, $P(x, y, z) = x$, $Q(x, y, z) = y$, and $R(x, y, z) = z$.
    $\nabla \cdot \mathbf{F} = \frac{\partial}{\partial x}(x) + \frac{\partial}{\partial y}(y) + \frac{\partial}{\partial z}(z) = 1 + 1 + 1 = 3$.
    Notice that the divergence is a constant! This simplifies things immensely.

*   **Step 3: Set up the Volume Integral.**
    We need to calculate $\iiint_E (\nabla \cdot \mathbf{F}) \, dV = \iiint_E 3 \, dV$.

*   **Step 4: Evaluate the Volume Integral.**
    $\iiint_E 3 \, dV = 3 \iiint_E \, dV$.
    What is $\iiint_E \, dV$? This is simply the volume of the region $E$. Since $E$ is a ball of radius $a$, its volume is $\frac{4}{3}\pi a^3$.
    So, the flux is $3 \times \left(\frac{4}{3}\pi a^3\right) = 4\pi a^3$.

**Think about this:** If we tried to calculate the flux directly using a surface integral, we would need to parameterize the sphere, calculate $d\mathbf{S}$, and compute the dot product $\mathbf{F} \cdot d\mathbf{S}$ for each point on the sphere. That's a lot more work! The Divergence Theorem makes it very manageable.

This example highlights how calculating the divergence, and then integrating a simple function over a region, can be far easier than a direct surface integral. This connects to **CO4**'s aim to understand inter-relations between surface and volume integrals and their applications.

**Analogy Time:** Imagine you're an air quality scientist tracking pollution. You have a vector field representing wind velocity and pollutant concentration. You want to know the total rate at which pollutants are leaving a city (the flux through the city boundaries). The Divergence Theorem tells you that you can figure this out by measuring how much the pollutant "concentration field" is expanding or contracting at every point within the city and summing it all up. If the pollutant is just being moved around but not generated or destroyed within the city limits, the net outward flow will be zero.

**Example 2: A Cylindrical Can**

Let's consider the vector field $\mathbf{F}(x, y, z) = y\mathbf{i} - x\mathbf{j} + z^2\mathbf{k}$. We want to find the flux of $\mathbf{F}$ outward through the surface of the cylinder $x^2 + y^2 = 4$ for $0 \le z \le 5$.

*   **Step 1: Identify $\mathbf{F}$ and $S$.**
    $\mathbf{F}(x, y, z) = y\mathbf{i} - x\mathbf{j} + z^2\mathbf{k}$.
    The surface $S$ is the closed cylindrical surface. This includes the top disk ($z=5$), the bottom disk ($z=0$), and the curved side wall ($x^2+y^2=4$). The solid region $E$ is the cylinder $x^2+y^2 \le 4$, $0 \le z \le 5$.

*   **Step 2: Calculate the Divergence.**
    $P(x, y, z) = y$, $Q(x, y, z) = -x$, $R(x, y, z) = z^2$.
    $\nabla \cdot \mathbf{F} = \frac{\partial}{\partial x}(y) + \frac{\partial}{\partial y}(-x) + \frac{\partial}{\partial z}(z^2) = 0 + 0 + 2z = 2z$.
    The divergence is $2z$.

*   **Step 3: Set up the Volume Integral.**
    We need to calculate $\iiint_E (\nabla \cdot \mathbf{F}) \, dV = \iiint_E 2z \, dV$.

*   **Step 4: Evaluate the Volume Integral.**
    The region $E$ is a cylinder. It's often easiest to integrate over cylindrical regions using cylindrical coordinates.
    In cylindrical coordinates:
    $x = r\cos\theta$
    $y = r\sin\theta$
    $z = z$
    $dV = r \, dz \, dr \, d\theta$
    The region $E$ is described by:
    $0 \le r \le 2$ (since $x^2+y^2 = r^2 \le 4$)
    $0 \le \theta \le 2\pi$ (a full circle)
    $0 \le z \le 5$

    The integral becomes:
    $$ \iiint_E 2z \, dV = \int_0^{2\pi} \int_0^2 \int_0^5 (2z) \, r \, dz \, dr \, d\theta $$
    Let's evaluate this step by step:
    First, integrate with respect to $z$:
    $$ \int_0^5 2z \, dz = \left[ z^2 \right]_0^5 = 5^2 - 0^2 = 25 $$
    Now, integrate with respect to $r$:
    $$ \int_0^2 25r \, dr = 25 \left[ \frac{r^2}{2} \right]_0^2 = 25 \left(\frac{2^2}{2} - 0\right) = 25 \left(\frac{4}{2}\right) = 25 \times 2 = 50 $$
    Finally, integrate with respect to $\theta$:
    $$ \int_0^{2\pi} 50 \, d\theta = 50 [\theta]_0^{2\pi} = 50 (2\pi - 0) = 100\pi $$
    So, the flux of $\mathbf{F}$ outward through the cylinder is $100\pi$.

**Important Note on the Surface:** The Divergence Theorem *requires* a closed surface. If the problem gave you only the curved side of the cylinder, you would need to add the top and bottom disks to make it closed before applying the theorem. However, using the Divergence Theorem, you don't need to calculate the flux through each part separately; the theorem handles it all via the volume integral.

This second example showcases the power of using the Divergence Theorem with different coordinate systems, particularly cylindrical coordinates, which is common in engineering problems involving rotational symmetry, directly linking to **CO2** and **CO4**.

### Connecting to Course Outcomes

Let's explicitly tie this back to our course outcomes:

*   **CO1: Compute the partial and total derivatives and maxima and minima of multivariable functions and to apply in engineering problems.**
    Calculating the divergence, $\nabla \cdot \mathbf{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}$, is a direct application of computing partial derivatives. Understanding how these derivatives combine tells us about the "source" or "sink" nature of the vector field at any given point.

*   **CO2: Understand theoretical idea of multiple integrals and to apply them to find areas and volumes of geometrical shapes.**
    The Divergence Theorem converts a surface integral into a volume integral. Evaluating this volume integral often requires choosing an appropriate coordinate system (Cartesian, cylindrical, spherical) and setting up the limits of integration correctly based on the geometry of the enclosed region. This is a core application of multiple integrals.

*   **CO3: Compute the derivatives and line integrals of vector functions and to learn their applications.**
    While this topic primarily focuses on the Divergence Theorem (surface and volume integrals), the underlying vector fields are defined by functions of multiple variables, which we explored in terms of derivatives. The connection to line integrals is more indirect here, but Green's theorem and the Divergence Theorem are part of the broader family of fundamental theorems of calculus in vector analysis that link different types of integrals.

*   **CO4: Apply the concepts of surface and volume integrals and to learn their inter-relations and applications.**
    This is the most directly addressed outcome. The Divergence Theorem is *the* key inter-relation between the flux (a surface integral) and the divergence integrated over a volume (a volume integral). We are learning how to apply these concepts to solve problems, particularly finding flux without direct surface integration.

### Common Pitfalls and Exam Tips

*   **Is the Surface Closed?** The Divergence Theorem *only* applies to closed surfaces. If you are given an open surface, you cannot directly use the theorem. You might need to find a closed surface that includes the given open surface and potentially other surfaces, calculate the flux through the entire closed surface using the Divergence Theorem, and then subtract the flux through the "other" surfaces if you need the flux through just the original open surface.
*   **Sign of the Normal Vector:** The theorem specifies the *outward* unit normal. Make sure your understanding of "outward" aligns with the enclosed volume.
*   **Divergence Calculation:** Double-check your partial derivatives! A small error here will lead to a completely wrong result for the flux.
*   **Volume Integration:** Choosing the correct coordinate system for the volume integral is crucial. For regions with spherical symmetry, use spherical coordinates. For cylindrical symmetry, use cylindrical coordinates. Cartesian coordinates are often suitable for rectangular boxes or simple regions.
*   **Constant Divergence vs. Variable Divergence:** When the divergence is a constant, the volume integral is simply the constant times the volume of the region. This is a quick check. If the divergence is variable, like $2z$ in our second example, you need to perform the full integration.

**Remember this:** The Divergence Theorem is a powerful tool for simplifying flux calculations. If you can calculate the divergence of the field and set up and evaluate the volume integral over the enclosed region, you've found the flux efficiently.

---

### Sample Questions and Answers

**Conceptual Question 1:** Explain in your own words why the Divergence Theorem is useful for calculating the flux of a vector field across a closed surface.

**Answer:** The Divergence Theorem is useful because it transforms a potentially complicated surface integral (calculating flux directly) into a volume integral. Surface integrals can be challenging to set up and evaluate, especially for irregular surfaces. The divergence of the vector field tells us about the "source" or "sink" behavior of the field at every point within the enclosed volume. By integrating this divergence over the entire volume, we get the total net outward flow (flux) from the boundary surface, often much more easily than by direct integration over the surface itself. It's a way of using local information (divergence) to understand global behavior (flux).

**Conceptual Question 2:** If $\nabla \cdot \mathbf{F} = 0$ for all points within a solid region $E$, what can you say about the flux of $\mathbf{F}$ across any closed surface $S$ that bounds a portion of $E$?

**Answer:** If $\nabla \cdot \mathbf{F} = 0$ throughout the region $E$, then the Divergence Theorem states that the outward flux across any closed surface $S$ bounding a portion of $E$ is:
$$ \iint_S \mathbf{F} \cdot d\mathbf{S} = \iiint_E (\nabla \cdot \mathbf{F}) \, dV = \iiint_E 0 \, dV = 0 $$
Therefore, the net outward flux of $\mathbf{F}$ across any such closed surface is zero. This implies that the vector field is "solenoidal" or "divergence-free" within that region, meaning whatever flows into a region must also flow out; there are no net sources or sinks within.

**Exam-Oriented Question 1:** Calculate the outward flux of the vector field $\mathbf{F}(x, y, z) = x^2\mathbf{i} + y^2\mathbf{j} + z^2\mathbf{k}$ through the surface of the cube defined by $0 \le x \le 1$, $0 \le y \le 1$, $0 \le z \le 1$.

**Solution:**
1.  **Identify $\mathbf{F}$ and $S$.**
    $\mathbf{F}(x, y, z) = x^2\mathbf{i} + y^2\mathbf{j} + z^2\mathbf{k}$.
    The surface $S$ is the boundary of the cube $E$ defined by $0 \le x \le 1$, $0 \le y \le 1$, $0 \le z \le 1$.

2.  **Calculate the Divergence.**
    $P(x, y, z) = x^2$, $Q(x, y, z) = y^2$, $R(x, y, z) = z^2$.
    $\nabla \cdot \mathbf{F} = \frac{\partial}{\partial x}(x^2) + \frac{\partial}{\partial y}(y^2) + \frac{\partial}{\partial z}(z^2) = 2x + 2y + 2z$.

3.  **Set up the Volume Integral.**
    We need to calculate $\iiint_E (\nabla \cdot \mathbf{F}) \, dV = \iiint_E (2x + 2y + 2z) \, dV$.

4.  **Evaluate the Volume Integral.**
    The region $E$ is a unit cube. We can evaluate this in Cartesian coordinates:
    $$ \iiint_E (2x + 2y + 2z) \, dV = \int_0^1 \int_0^1 \int_0^1 (2x + 2y + 2z) \, dz \, dy \, dx $$
    Integrate with respect to $z$:
    $$ \int_0^1 (2x + 2y + 2z) \, dz = \left[ 2xz + 2yz + z^2 \right]_0^1 = (2x(1) + 2y(1) + 1^2) - (0) = 2x + 2y + 1 $$
    Now integrate with respect to $y$:
    $$ \int_0^1 (2x + 2y + 1) \, dy = \left[ 2xy + y^2 + y \right]_0^1 = (2x(1) + 1^2 + 1) - (0) = 2x + 2 $$
    Finally, integrate with respect to $x$:
    $$ \int_0^1 (2x + 2) \, dx = \left[ x^2 + 2x \right]_0^1 = (1^2 + 2(1)) - (0) = 1 + 2 = 3 $$
    The outward flux is 3.

**Exam-Oriented Question 2:** Let $\mathbf{F}(x, y, z) = x^3\mathbf{i} + y^3\mathbf{j} + z^3\mathbf{k}$. Find the flux of $\mathbf{F}$ outward through the sphere $x^2 + y^2 + z^2 = 9$.

**Solution:**
1.  **Identify $\mathbf{F}$ and $S$.**
    $\mathbf{F}(x, y, z) = x^3\mathbf{i} + y^3\mathbf{j} + z^3\mathbf{k}$.
    The surface $S$ is the sphere $x^2 + y^2 + z^2 = 9$. The enclosed region $E$ is the ball $x^2 + y^2 + z^2 \le 9$.

2.  **Calculate the Divergence.**
    $P(x, y, z) = x^3$, $Q(x, y, z) = y^3$, $R(x, y, z) = z^3$.
    $\nabla \cdot \mathbf{F} = \frac{\partial}{\partial x}(x^3) + \frac{\partial}{\partial y}(y^3) + \frac{\partial}{\partial z}(z^3) = 3x^2 + 3y^2 + 3z^2 = 3(x^2 + y^2 + z^2)$.

3.  **Set up the Volume Integral.**
    We need to calculate $\iiint_E (\nabla \cdot \mathbf{F}) \, dV = \iiint_E 3(x^2 + y^2 + z^2) \, dV$.

4.  **Evaluate the Volume Integral.**
    The region $E$ is a sphere, and the integrand $x^2 + y^2 + z^2$ also suggests spherical coordinates.
    In spherical coordinates:
    $x^2 + y^2 + z^2 = \rho^2$
    $dV = \rho^2 \sin\phi \, d\rho \, d\phi \, d\theta$
    The sphere $x^2 + y^2 + z^2 = 9$ means $\rho = 3$. So the limits are:
    $0 \le \rho \le 3$
    $0 \le \phi \le \pi$
    $0 \le \theta \le 2\pi$

    The integral becomes:
    $$ \iiint_E 3(x^2 + y^2 + z^2) \, dV = \int_0^{2\pi} \int_0^{\pi} \int_0^3 3\rho^2 (\rho^2 \sin\phi) \, d\rho \, d\phi \, d\theta $$
    $$ = \int_0^{2\pi} \int_0^{\pi} \int_0^3 3\rho^4 \sin\phi \, d\rho \, d\phi \, d\theta $$
    Integrate with respect to $\rho$:
    $$ \int_0^3 3\rho^4 \, d\rho = 3 \left[ \frac{\rho^5}{5} \right]_0^3 = 3 \left( \frac{3^5}{5} - 0 \right) = 3 \left( \frac{243}{5} \right) = \frac{729}{5} $$
    Now integrate with respect to $\phi$:
    $$ \int_0^{\pi} \frac{729}{5} \sin\phi \, d\phi = \frac{729}{5} [-\cos\phi]_0^{\pi} = \frac{729}{5} (-\cos\pi - (-\cos0)) = \frac{729}{5} (-(-1) - (-1)) = \frac{729}{5} (1+1) = \frac{729}{5} \times 2 = \frac{1458}{5} $$
    Finally, integrate with respect to $\theta$:
    $$ \int_0^{2\pi} \frac{1458}{5} \, d\theta = \frac{1458}{5} [\theta]_0^{2\pi} = \frac{1458}{5} (2\pi - 0) = \frac{2916\pi}{5} $$
    The outward flux is $\frac{2916\pi}{5}$.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
