---
title: "Using Divergence theorem 
to find flux"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 2"
module: "Module 4: Green’s theorem (for simply connected domains, without proof) 
and applications to evaluating line integrals"
branch: "Mechanical Engineering"
semester: 2
topicId: "68bd1edffeb4799d95e839b9"
status: "completed"
scrapedAt: "2026-05-20T17:46:05.423Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 2

## Module 4: Green's Theorem (for simply connected domains, without proof) and Applications to Evaluating Line Integrals

### Topic: Using the Divergence Theorem to Find Flux

Welcome, everyone! In this module, we’ve been exploring powerful tools that connect different types of integrals. We started with Green's Theorem, which beautifully links a line integral around a simple closed curve in the plane to a double integral over the region enclosed by that curve. This is fantastic for simplifying certain calculations, especially when dealing with vector fields in 2D.

Now, we're going to take a significant leap into three dimensions and meet a generalization of Green's Theorem: the **Divergence Theorem**. Just as Green's Theorem connects a line integral to an area integral, the Divergence Theorem connects a surface integral (specifically, a flux integral) to a volume integral. This is an incredibly important concept, particularly in fields like fluid dynamics, electromagnetism, and heat transfer, where we often want to understand how something (like a fluid or a field) is flowing *out* of a region.

### 1. Flux: What Are We Measuring?

Before diving into the Divergence Theorem, let's make sure we're clear on what **flux** means. Imagine a river. If you were to place a net across the river, the flux would be the total amount of water passing through that net per unit of time. In physics and engineering, we often talk about the flux of a **vector field**.

Think of a vector field $\mathbf{F}(x, y, z)$ as representing, say, the velocity of a fluid at every point $(x, y, z)$ in space. If we have a surface $S$ in this space, the flux of $\mathbf{F}$ across $S$ is a measure of the "net flow" of the vector field through that surface.

Mathematically, flux is represented by a surface integral:

$$ \text{Flux} = \iint_S \mathbf{F} \cdot d\mathbf{S} $$

Here, $\mathbf{F}$ is our vector field, and $d\mathbf{S}$ is an infinitesimal surface area vector. The dot product $\mathbf{F} \cdot d\mathbf{S}$ tells us how much of the vector field is perpendicular to the surface at each point, contributing to the flow *through* the surface. If $\mathbf{F}$ is parallel to the surface, its contribution to the flux is zero.

**Connection to Course Outcomes:** This directly relates to **CO4: Apply the concepts of surface and volume integrals and to learn their inter-relations and applications.** We are calculating flux, which is a type of surface integral, and the Divergence Theorem will link this to a volume integral.

### 2. The Divergence Theorem: The Big Picture

So, the Divergence Theorem provides a bridge between a surface integral over a closed surface and a volume integral over the region enclosed by that surface. It's a fundamental result in vector calculus, and understanding it allows us to solve problems that would otherwise be incredibly complex.

**The Statement of the Divergence Theorem:**

Let $E$ be a solid region in $\mathbb{R}^3$ bounded by a piecewise smooth, closed surface $S$ whose outward unit normal vector is $\mathbf{n}$. If $\mathbf{F}$ is a vector field with continuous partial derivatives on an open region containing $E$, then:

$$ \iint_S \mathbf{F} \cdot d\mathbf{S} = \iiint_E \nabla \cdot \mathbf{F} \, dV $$

Let's break this down.

*   **$S$:** This is our closed surface, like the boundary of a sphere, a cube, or any other closed volume. It must be "well-behaved" (piecewise smooth).
*   **$\mathbf{F}$:** Our vector field.
*   **$\mathbf{F} \cdot d\mathbf{S}$:** This is the flux element. The integral on the left side is the **total flux** of $\mathbf{F}$ out of the region $E$ through its boundary surface $S$.
*   **$\nabla \cdot \mathbf{F}$:** This is the **divergence** of the vector field $\mathbf{F}$. We'll define this shortly.
*   **$dV$:** This is the infinitesimal volume element. The integral on the right side is a **volume integral** over the entire solid region $E$.

**What does Divergence tell us?**

The divergence of a vector field $\mathbf{F} = \langle P, Q, R \rangle$ at a point $(x, y, z)$ is defined as:

$$ \nabla \cdot \mathbf{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z} $$

Think of $\nabla \cdot \mathbf{F}$ as a measure of the "outwardness" of the vector field at a specific point.

*   If $\nabla \cdot \mathbf{F} > 0$ at a point, it means that, on average, the field is flowing *out* of an infinitesimal region around that point. This point acts like a source.
*   If $\nabla \cdot \mathbf{F} < 0$, the field is flowing *in*, and the point acts like a sink.
*   If $\nabla \cdot \mathbf{F} = 0$, the field is **solenoidal** or **incompressible**. This means that whatever flows into an infinitesimal region also flows out, so there's no net creation or destruction of "stuff" within that region.

**Analogy:** Imagine smoke rising from a fire. At the fire, there's a positive divergence (smoke is generated). As the smoke spreads out, it might diffuse, and if you consider a region with no new smoke being generated inside it, the net flow of smoke out of that region (flux) is related to the total "spreading" within it.

**Connection to Course Outcomes:** This is deeply tied to **CO1: Compute the partial and total derivatives and maxima and minima of multivariable functions and to apply in engineering problems.** Calculating divergence requires computing partial derivatives. It also connects to **CO3: Compute the derivatives and line integrals of vector functions and to learn their applications.** Divergence is a derivative operation on vector functions.

### 3. Why is the Divergence Theorem Useful? Evaluating Flux Integrals

The power of the Divergence Theorem lies in its ability to transform a potentially difficult surface integral into a (often) simpler volume integral.

When do we use it? Typically, when asked to calculate the flux of a vector field $\mathbf{F}$ through a closed surface $S$, and the region $E$ enclosed by $S$ is easier to describe and integrate over.

**The Strategy:**

1.  **Identify the vector field $\mathbf{F}$ and the closed surface $S$.**
2.  **Determine the solid region $E$ enclosed by $S$.** This is crucial.
3.  **Calculate the divergence of $\mathbf{F}$, $\nabla \cdot \mathbf{F}$.** This involves taking partial derivatives.
4.  **Set up the volume integral:** $\iiint_E (\nabla \cdot \mathbf{F}) \, dV$.
5.  **Evaluate the volume integral.** This might involve changing to spherical, cylindrical, or other convenient coordinate systems.

**Example Scenario:** Imagine you're an engineer analyzing heat flow in a solid object. The vector field $\mathbf{F}$ might represent the rate of heat transfer at each point. The surface $S$ could be the outer boundary of the object. You want to know the net rate at which heat is flowing *out* of the object. The Divergence Theorem allows you to do this by looking at how "hotter" or "cooler" the object is internally (represented by divergence) rather than tracing the heat flow across every tiny part of the surface.

**Textbook Reference:** This topic is a cornerstone of vector calculus. You'll find detailed explanations and examples in Anton, Biven, Davis (12th ed.) and Weir, Hass, Heil, Bogacki (15th ed.) under sections dedicated to the Divergence Theorem. Kreyszig and Bird also provide excellent coverage in their engineering mathematics texts.

### 4. Let's Work Through an Example!

Suppose we want to calculate the flux of the vector field $\mathbf{F}(x, y, z) = \langle x^2, y^2, z^2 \rangle$ through the closed surface $S$ which is the surface of the unit sphere $x^2 + y^2 + z^2 = 1$.

**Step 1: Identify $\mathbf{F}$ and $S$.**
We have $\mathbf{F}(x, y, z) = \langle x^2, y^2, z^2 \rangle$.
$S$ is the surface of the unit sphere $x^2 + y^2 + z^2 = 1$. This is a closed surface.

**Step 2: Determine the region $E$.**
The region $E$ enclosed by $S$ is the solid unit ball: $E = \{ (x, y, z) \mid x^2 + y^2 + z^2 \le 1 \}$.

**Step 3: Calculate the divergence of $\mathbf{F}$.**
$\mathbf{F} = \langle P, Q, R \rangle$, where $P=x^2$, $Q=y^2$, $R=z^2$.
$\nabla \cdot \mathbf{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}$
$\nabla \cdot \mathbf{F} = \frac{\partial}{\partial x}(x^2) + \frac{\partial}{\partial y}(y^2) + \frac{\partial}{\partial z}(z^2)$
$\nabla \cdot \mathbf{F} = 2x + 2y + 2z$

**Step 4: Set up the volume integral.**
Using the Divergence Theorem, the flux is:
$$ \iint_S \mathbf{F} \cdot d\mathbf{S} = \iiint_E (\nabla \cdot \mathbf{F}) \, dV = \iiint_E (2x + 2y + 2z) \, dV $$

**Step 5: Evaluate the volume integral.**
The region $E$ is the unit sphere, which is nicely symmetric. Integrating $2x + 2y + 2z$ over the unit sphere might seem tricky. However, let's think about the symmetry of the region and the integrand.

The integral of $2x$ over the unit sphere is zero because the sphere is symmetric with respect to the yz-plane, and $2x$ is an odd function with respect to $x$. For every point $(x, y, z)$ where we have a positive contribution from $2x$, there's a corresponding point $(-x, y, z)$ where we have a negative contribution of the same magnitude. The same logic applies to the integral of $2y$ (symmetric with respect to the xz-plane) and $2z$ (symmetric with respect to the xy-plane).

So,
$$ \iiint_E 2x \, dV = 0 $$
$$ \iiint_E 2y \, dV = 0 $$
$$ \iiint_E 2z \, dV = 0 $$

Therefore, the total flux is:
$$ \iiint_E (2x + 2y + 2z) \, dV = 0 + 0 + 0 = 0 $$

**Result:** The flux of $\mathbf{F}(x, y, z) = \langle x^2, y^2, z^2 \rangle$ through the unit sphere is 0.

**What if the divergence was simpler?**
Let's try a different vector field: $\mathbf{F}(x, y, z) = \langle x, y, z \rangle$.
$\nabla \cdot \mathbf{F} = \frac{\partial}{\partial x}(x) + \frac{\partial}{\partial y}(y) + \frac{\partial}{\partial z}(z) = 1 + 1 + 1 = 3$.
The flux through the unit sphere would be:
$$ \iiint_E 3 \, dV = 3 \iiint_E \, dV $$
The integral $\iiint_E \, dV$ is simply the volume of the region $E$, which is the unit sphere. The volume of a sphere with radius $r$ is $\frac{4}{3}\pi r^3$. For the unit sphere ($r=1$), the volume is $\frac{4}{3}\pi$.
So, the flux is $3 \times \frac{4}{3}\pi = 4\pi$.

**Remember this:** The Divergence Theorem is your best friend when calculating flux through closed surfaces, especially when the divergence is a constant or a simple function, and the region is easily described.

**Connection to Course Outcomes:** This example clearly demonstrates **CO4** by applying surface integral concepts (flux) and relating it to a volume integral. It also reinforces **CO1** through the calculation of partial derivatives for divergence and **CO3** by using vector field derivatives.

### 5. Applications in Electrical Science and Physical Science

The Divergence Theorem is not just a mathematical curiosity; it's a fundamental law with direct applications:

*   **Electromagnetism (Gauss's Law):** The divergence of the electric field $\mathbf{E}$ is proportional to the charge density $\rho$ (Gauss's law in differential form: $\nabla \cdot \mathbf{E} = \frac{\rho}{\epsilon_0}$). The Divergence Theorem relates the flux of the electric field through a closed surface to the total charge enclosed within that surface. This is how we often calculate electric fields from symmetric charge distributions.
*   **Fluid Dynamics:** If $\mathbf{F}$ represents the velocity field of a fluid, $\nabla \cdot \mathbf{F}$ is the rate of expansion or compression of the fluid at a point. If $\nabla \cdot \mathbf{F} = 0$, the fluid is incompressible. The flux of the velocity field through a surface represents the volume flow rate. The Divergence Theorem states that the total outward volume flow rate from a region is equal to the integral of the fluid's expansion rate over the volume.
*   **Heat Transfer:** If $\mathbf{F}$ represents the heat flux, then $-\nabla \cdot \mathbf{F}$ is related to the rate of change of temperature in Fourier's law. The Divergence Theorem can help analyze the net rate of heat leaving a region.

**Course Outcome Link:** All these applications directly align with **CO1** and **CO4**, demonstrating how mathematical concepts are applied to solve real-world physical and engineering problems.

### 6. Connection to Green's Theorem and Line Integrals

While the Divergence Theorem operates in 3D and deals with flux, it's important to see its conceptual lineage from Green's Theorem.

*   **Green's Theorem (2D):** $\oint_C \mathbf{F} \cdot d\mathbf{r} = \iint_D \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right) \, dA$. Here, $\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}$ is like a "2D curl" or "2D divergence" in a specific sense, measuring the circulation of the field around a point.
*   **Divergence Theorem (3D):** $\iint_S \mathbf{F} \cdot d\mathbf{S} = \iiint_E \nabla \cdot \mathbf{F} \, dV$. Here, $\nabla \cdot \mathbf{F}$ measures the outward flow from a point.

Both theorems relate a boundary integral (line integral in 2D, surface integral in 3D) to an integral over the enclosed region (area integral in 2D, volume integral in 3D). They are fundamental examples of the **Generalized Stokes' Theorem**, which is a vast generalization of these concepts.

**Important Note for Exams:** You'll often be asked to *use* the Divergence Theorem to evaluate a flux integral. Don't try to evaluate the surface integral directly unless it's extremely simple. The question usually implies using the theorem.

### 7. Common Pitfalls and Quick Recall Tips

*   **Surface Must Be Closed:** The Divergence Theorem *only* applies to closed surfaces $S$. If your surface is not closed, you cannot directly apply the theorem. You might need to "close it" with an additional surface and adjust your calculation accordingly.
*   **Outward Normal:** The theorem requires the *outward* normal vector. Make sure your orientation is correct.
*   **Region $E$:** Correctly identifying the solid region $E$ enclosed by $S$ is paramount for setting up the volume integral.
*   **Divergence Calculation:** Be meticulous with your partial derivatives. A small error here will lead to a wrong answer.
*   **Integral Evaluation:** The difficulty often shifts to evaluating the volume integral. Be prepared to use different coordinate systems (spherical, cylindrical) if the region or integrand suggests it.

**Quick Recall:**
*   Divergence Theorem: Flux out of $S$ = Volume integral of Divergence over $E$.
*   Flux: $\iint_S \mathbf{F} \cdot d\mathbf{S}$
*   Divergence: $\nabla \cdot \mathbf{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}$ for $\mathbf{F} = \langle P, Q, R \rangle$.

### Sample Questions and Answers

**1. Conceptual Question:**
What is the physical interpretation of the divergence of a vector field, and how does the Divergence Theorem relate this local property to a global property (flux)?

**Answer:**
The divergence of a vector field $\mathbf{F}$ at a point, $\nabla \cdot \mathbf{F}$, represents the rate at which the field is expanding or contracting outwards from that point. A positive divergence indicates a source, a negative divergence indicates a sink, and zero divergence means the field is incompressible or solenoidal at that point. The Divergence Theorem states that the total flux of the vector field through a closed surface $S$ is equal to the volume integral of its divergence over the region $E$ enclosed by $S$. This means the total "outflow" through the boundary is equivalent to summing up all the sources and sinks (positive and negative divergences) within the enclosed volume.

**2. Exam-Oriented Question:**
Evaluate the flux of the vector field $\mathbf{F}(x, y, z) = \langle xz, yz, -z^2 \rangle$ through the closed surface $S$ bounding the cylinder $x^2 + y^2 \le 1$ for $0 \le z \le 2$. Use the Divergence Theorem.

**Solution:**
The surface $S$ is the boundary of the solid cylinder $E = \{ (x, y, z) \mid x^2 + y^2 \le 1, 0 \le z \le 2 \}$.
We need to calculate the flux: $\iint_S \mathbf{F} \cdot d\mathbf{S}$.

Using the Divergence Theorem, this is equal to $\iiint_E \nabla \cdot \mathbf{F} \, dV$.

**Step 1: Calculate the divergence.**
$\mathbf{F} = \langle xz, yz, -z^2 \rangle$.
$P = xz$, $Q = yz$, $R = -z^2$.
$\nabla \cdot \mathbf{F} = \frac{\partial}{\partial x}(xz) + \frac{\partial}{\partial y}(yz) + \frac{\partial}{\partial z}(-z^2)$
$\nabla \cdot \mathbf{F} = z + z - 2z = 0$.

**Step 2: Evaluate the volume integral.**
The flux is $\iiint_E 0 \, dV$.
Since the integrand is identically zero, the integral is 0.

**Answer:** The flux of $\mathbf{F}$ through the given surface is 0.

**Reasoning:** The divergence of the vector field is zero everywhere. This means the vector field is solenoidal, implying that whatever amount of the field enters any small volume must also leave it. Consequently, the net flux across any closed surface bounding such a region must be zero.

**3. Conceptual/Application Question:**
Explain why the Divergence Theorem is particularly useful when dealing with vector fields that have a constant divergence. Give an example.

**Answer:**
If a vector field $\mathbf{F}$ has a constant divergence, say $\nabla \cdot \mathbf{F} = k$, then the Divergence Theorem simplifies the flux calculation significantly. The flux integral becomes:
$$ \iint_S \mathbf{F} \cdot d\mathbf{S} = \iiint_E k \, dV = k \iiint_E \, dV = k \times (\text{Volume of } E) $$
Thus, to find the flux, you simply need to compute the constant divergence and multiply it by the volume of the region enclosed by the surface. This avoids the often complicated surface integral.

**Example:** As shown in our earlier example, for $\mathbf{F}(x, y, z) = \langle x, y, z \rangle$, the divergence is $\nabla \cdot \mathbf{F} = 3$, which is a constant. If $S$ is the unit sphere ($r=1$), its volume is $V = \frac{4}{3}\pi (1)^3 = \frac{4}{3}\pi$. The flux is $3 \times \frac{4}{3}\pi = 4\pi$. This is much easier than parameterizing the sphere and calculating the surface integral directly.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
