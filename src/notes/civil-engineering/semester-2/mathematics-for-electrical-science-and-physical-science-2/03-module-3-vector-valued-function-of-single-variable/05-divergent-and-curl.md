---
title: "Divergent and curl"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 2"
module: "Module 3: Vector valued function of single variable "
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912cd8"
status: "completed"
scrapedAt: "2026-05-20T18:37:00.745Z"
---
# Mathematics for Electrical Science and Physical Science – 2

## Module 3: Vector-Valued Functions of a Single Variable

### Topic: Divergence and Curl

Welcome, everyone! Today, we're diving into a really exciting part of our vector calculus journey – the concepts of **divergence** and **curl**. These are not just abstract mathematical ideas; they are fundamental tools for understanding and describing phenomena in physics and electrical science. Think about fluid flow, electromagnetism, or heat transfer – divergence and curl are the language we use to talk about what's happening *at a point* in these systems.

Our main goal today, keeping in mind **Course Outcome 3 (CO3)**, is to compute the derivatives of vector functions and learn their applications. Specifically, we'll be looking at how divergence and curl, which are derived from vector fields (functions that assign a vector to every point in space), help us analyze the behavior of these fields. While we're focusing on vector-valued functions of a single variable in this module, the concepts of divergence and curl are most naturally defined and applied to **vector fields**, which are functions of multiple variables (e.g., $\mathbf{F}(x, y, z)$). So, we'll bridge this a little by introducing these concepts as they are typically used, and you'll see how they build upon the foundational ideas of vector calculus we've been covering.

Let's get started!

---

### 1. Setting the Stage: Vector Fields

Before we talk about divergence and curl, we need to understand what they operate on. Divergence and curl are properties of **vector fields**.

**What is a vector field?** Imagine a landscape. At every point in that landscape, there's a direction and a magnitude associated with it. This could be wind velocity at different points on a weather map, the magnetic force field around a bar magnet, or the gravitational pull of the Earth at various locations.

Formally, a **vector field** in three dimensions is a function $\mathbf{F}$ that assigns to each point $(x, y, z)$ in a region of space a vector $\mathbf{F}(x, y, z)$. We can write this as:

$\mathbf{F}(x, y, z) = P(x, y, z) \mathbf{i} + Q(x, y, z) \mathbf{j} + R(x, y, z) \mathbf{k}$

where $P$, $Q$, and $R$ are scalar functions (also called component functions) of $x$, $y$, and $z$.

**Example:**
Consider a fluid flow. At each point $(x, y, z)$ in the fluid, the vector $\mathbf{F}(x, y, z)$ could represent the velocity of the fluid at that point.

*   **Relatable Example:** Think about a river. The water flows. At any given point in the river, there's a speed and a direction. If you could map this out for the entire river, you'd have a vector field of water velocity.

**Why are these concepts important for CO3?** Understanding vector fields is crucial for **CO3**, which deals with derivatives and line integrals of vector functions and their applications. Divergence and curl are specific types of derivatives applied to vector fields, and they directly help us understand the behavior of these fields, much like derivatives help us understand the behavior of scalar functions (like finding maxima and minima, as mentioned in **CO1**).

---

### 2. Divergence: How Much is Flowing Out?

Let's start with **divergence**. What does it tell us? Imagine a small region of space. Divergence at a point measures the extent to which the vector field is "expanding" or "contracting" outwards from that point. It's like a source or a sink.

**Intuitive Idea:**
Think of the water in our river example. If you place a tiny, imaginary box in the river, the divergence at the center of that box tells you whether more water is flowing *out* of the box than flowing *in*.

*   **Positive Divergence:** Means there's a net outflow of the "stuff" represented by the vector field from that point. It's like a source.
*   **Negative Divergence:** Means there's a net inflow of the "stuff" into that point. It's like a sink.
*   **Zero Divergence:** Means the amount flowing in equals the amount flowing out. The field is neither expanding nor contracting at that point. This is often called **incompressible** if the "stuff" is a fluid.

**Formal Definition:**
The divergence of a vector field $\mathbf{F}(x, y, z) = P(x, y, z) \mathbf{i} + Q(x, y, z) \mathbf{j} + R(x, y, z) \mathbf{k}$ is a scalar function, denoted by $\text{div} \mathbf{F}$ or $\nabla \cdot \mathbf{F}$, and is defined as:

$\text{div} \mathbf{F} = \nabla \cdot \mathbf{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}$

Here, $\nabla$ (nabla or del) is an operator: $\nabla = \frac{\partial}{\partial x} \mathbf{i} + \frac{\partial}{\partial y} \mathbf{j} + \frac{\partial}{\partial z} \mathbf{k}$. The dot product with $\mathbf{F}$ gives us the divergence. Notice that the result is a *scalar*, not a vector. This is a key distinction.

**Connecting to CO3:**
This definition directly relates to **CO3**. We are computing derivatives (partial derivatives in this case) of the component functions of a vector field. This is a higher-level derivative operation performed on a vector function.

**Example (Relatable):**
Imagine a crowd of people moving. Let $\mathbf{F}(x, y)$ be the velocity vector of each person at point $(x, y)$ on a city map.
*   If people are congregating at a particular spot (like a concert venue), the divergence there would be negative (a sink).
*   If people are spreading out from a central point (like exiting a train station), the divergence there would be positive (a source).
*   If people are just flowing past a point without bunching up or spreading out, the divergence is zero.

**Example (Mathematical):**
Let $\mathbf{F}(x, y, z) = x^2 \mathbf{i} + y^2 \mathbf{j} + z^2 \mathbf{k}$.
Here, $P(x, y, z) = x^2$, $Q(x, y, z) = y^2$, and $R(x, y, z) = z^2$.

Let's compute the divergence:
$\frac{\partial P}{\partial x} = \frac{\partial}{\partial x}(x^2) = 2x$
$\frac{\partial Q}{\partial y} = \frac{\partial}{\partial y}(y^2) = 2y$
$\frac{\partial R}{\partial z} = \frac{\partial}{\partial z}(z^2) = 2z$

So, $\text{div} \mathbf{F} = \nabla \cdot \mathbf{F} = 2x + 2y + 2z$.

Notice that the divergence is not constant; it depends on the point $(x, y, z)$. At the origin $(0,0,0)$, the divergence is $0$. But at $(1,1,1)$, the divergence is $6$. This tells us that at $(1,1,1)$, the field is expanding outwards.

**Exam Tip:** When asked to compute divergence, make sure you clearly identify $P, Q, R$ and then take the partial derivatives and sum them up. A common mistake is to forget the partial derivatives or mix them up.

**Reference:** This concept is thoroughly explained in Chapter 15 of "Thomas' Calculus" (15th edition) and Chapter 13 of "Calculus" by Anton, Biven, Davis (12th edition), under vector fields and their properties.

---

### 3. Curl: How Much is Rotating?

Now, let's move on to **curl**. While divergence deals with "flow out/in," curl deals with "rotation" or "circulation."

**Intuitive Idea:**
Imagine placing a tiny paddlewheel in our fluid flow. The curl at a point measures the tendency of the fluid to make the paddlewheel *rotate* around that point.

*   **Non-zero Curl:** Indicates that the fluid is swirling or circulating. The vector field has a rotational component.
*   **Zero Curl:** Indicates that there is no tendency for rotation at that point. Fields with zero curl are called **irrotational**.

**Formal Definition:**
The curl of a vector field $\mathbf{F}(x, y, z) = P(x, y, z) \mathbf{i} + Q(x, y, z) \mathbf{j} + R(x, y, z) \mathbf{k}$ is a vector function, denoted by $\text{curl} \mathbf{F}$ or $\nabla \times \mathbf{F}$, and is defined using a determinant-like structure:

$\text{curl} \mathbf{F} = \nabla \times \mathbf{F} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ P & Q & R \end{vmatrix}$

Expanding this determinant, we get:

$\text{curl} \mathbf{F} = \left( \frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z} \right) \mathbf{i} + \left( \frac{\partial P}{\partial z} - \frac{\partial R}{\partial x} \right) \mathbf{j} + \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) \mathbf{k}$

**Important Note:** The curl is a *vector* quantity. The direction of the curl vector indicates the axis of rotation (by the right-hand rule), and its magnitude indicates the strength of the rotation.

**Connecting to CO3:**
Again, this directly supports **CO3**. We are calculating partial derivatives of the component functions and combining them to form a new vector function. This is a key application of derivatives in understanding the behavior of vector fields, which are vector-valued functions.

**Example (Relatable):**
Think about water draining from a bathtub. As the water swirls down the drain, you have a strong rotational component. The curl would be significant and pointing downwards (if the drain is below you). If the water just flows straight down without swirling, the curl would be zero.

Another example: a merry-go-round. The velocity of points on the merry-go-round forms a vector field. If you imagine a small object on the edge, it's rotating. The curl of the velocity field would capture this rotation.

**Example (Mathematical):**
Let $\mathbf{F}(x, y, z) = yz \mathbf{i} + xz \mathbf{j} + xy \mathbf{k}$.
Here, $P(x, y, z) = yz$, $Q(x, y, z) = xz$, and $R(x, y, z) = xy$.

Let's calculate the curl:

*   **i-component:** $\frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z} = \frac{\partial}{\partial y}(xy) - \frac{\partial}{\partial z}(xz) = x - x = 0$
*   **j-component:** $\frac{\partial P}{\partial z} - \frac{\partial R}{\partial x} = \frac{\partial}{\partial z}(yz) - \frac{\partial}{\partial x}(xy) = y - y = 0$
*   **k-component:** $\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = \frac{\partial}{\partial x}(xz) - \frac{\partial}{\partial y}(yz) = z - z = 0$

So, $\text{curl} \mathbf{F} = 0 \mathbf{i} + 0 \mathbf{j} + 0 \mathbf{k} = \mathbf{0}$.

This means that the vector field $\mathbf{F}(x, y, z) = yz \mathbf{i} + xz \mathbf{j} + xy \mathbf{k}$ is **irrotational**.

**Let's try another example for curl:**
Let $\mathbf{F}(x, y, z) = y \mathbf{i} - x \mathbf{j}$. This is a 2D field, but we can embed it in 3D as $\mathbf{F}(x, y, z) = y \mathbf{i} - x \mathbf{j} + 0 \mathbf{k}$.
So, $P = y$, $Q = -x$, $R = 0$.

$\frac{\partial P}{\partial x} = 0$, $\frac{\partial P}{\partial y} = 1$, $\frac{\partial P}{\partial z} = 0$
$\frac{\partial Q}{\partial x} = -1$, $\frac{\partial Q}{\partial y} = 0$, $\frac{\partial Q}{\partial z} = 0$
$\frac{\partial R}{\partial x} = 0$, $\frac{\partial R}{\partial y} = 0$, $\frac{\partial R}{\partial z} = 0$

Curl calculation:
*   **i-component:** $\frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z} = 0 - 0 = 0$
*   **j-component:** $\frac{\partial P}{\partial z} - \frac{\partial R}{\partial x} = 0 - 0 = 0$
*   **k-component:** $\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = -1 - 1 = -2$

So, $\text{curl} \mathbf{F} = -2 \mathbf{k}$.

This result is interesting! It means that for this 2D field embedded in 3D, there's a rotation happening, and the axis of rotation is the z-axis. The negative sign indicates the direction of rotation (clockwise if viewed from the positive z-axis, following the right-hand rule). This field represents a sort of circular flow around the z-axis.

**Exam Tip:** Remember that the curl is a vector. Make sure to compute all three components correctly. The determinant form is helpful for remembering the pattern.

**Reference:** "Bird's Higher Engineering Mathematics" (9th edition) and "Advanced Engineering Mathematics" by Kreyszig (10th edition) often present these formulas clearly, and both cover vector calculus extensively. Chapter 15 of "Thomas' Calculus" is also a great resource.

---

### 4. Key Relationships and Applications

Divergence and curl are not isolated concepts. They have profound relationships and numerous applications in physics and engineering, directly linking to **CO1, CO3, and CO4**.

#### 4.1. Irrotational Fields and Potential Functions

A very important property relates to fields with zero curl. If $\text{curl} \mathbf{F} = \mathbf{0}$ for a vector field $\mathbf{F}$ defined on a simply connected region, then $\mathbf{F}$ is called **irrotational**.

**Key Theorem:** If $\text{curl} \mathbf{F} = \mathbf{0}$, then $\mathbf{F}$ can be expressed as the gradient of a scalar potential function $\phi$. That is, $\mathbf{F} = \nabla \phi$.

*   **Why is this useful?** Many fundamental forces in physics, like the gravitational force and electrostatic force (in static situations), are irrotational. This means we can describe these forces using a scalar potential function, which is often much easier to work with than the vector force field itself. For instance, the gravitational potential or electric potential.
*   **Link to CO1:** Finding a potential function $\phi$ such that $\nabla \phi = \mathbf{F}$ is directly related to finding antiderivatives, a core concept in calculus. This is akin to finding the potential energy from a force field, a common problem in mechanics.

#### 4.2. Solenoidal Fields and the Divergence Theorem

A vector field $\mathbf{F}$ is called **solenoidal** if its divergence is zero, i.e., $\text{div} \mathbf{F} = 0$.

*   **Physical Interpretation:** If $\mathbf{F}$ represents fluid velocity, then $\text{div} \mathbf{F} = 0$ means the fluid is **incompressible**. If $\mathbf{F}$ represents the magnetic field ($\mathbf{B}$), then $\text{div} \mathbf{B} = 0$ means there are no magnetic monopoles (sources or sinks of magnetic field lines), which is a fundamental law of electromagnetism.
*   **Link to CO4:** The Divergence Theorem (also known as Gauss's Theorem) provides a crucial link between a volume integral of the divergence of a vector field and a surface integral of the field itself. It states:

    $\iiint_V (\nabla \cdot \mathbf{F}) \, dV = \iint_S (\mathbf{F} \cdot \mathbf{n}) \, dS$

    This theorem allows us to relate what's happening *inside* a volume (the total "source" or "sink" measured by divergence) to what's happening on the *boundary surface* (the net flow across the surface). This is a cornerstone of applying multivariable calculus to physical problems and directly addresses **CO4**.

#### 4.3. Stokes' Theorem

Stokes' Theorem relates the curl of a vector field to the line integral of the field around a boundary curve. It states:

$\iint_S (\nabla \times \mathbf{F}) \cdot \mathbf{n} \, dS = \oint_C \mathbf{F} \cdot d\mathbf{r}$

*   **Interpretation:** The surface integral of the curl over a surface $S$ equals the line integral of the vector field $\mathbf{F}$ around the boundary curve $C$ of that surface.
*   **Link to CO3 & CO4:** This theorem beautifully connects line integrals ($\oint_C \mathbf{F} \cdot d\mathbf{r}$), which are central to **CO3**, with surface integrals of the curl ($\iint_S (\nabla \times \mathbf{F}) \cdot \mathbf{n} \, dS$), which builds on **CO4**. It's a powerful tool for simplifying calculations and understanding the relationship between rotation within a surface and the flow along its boundary.

#### 4.4. Second-Order Operations

We can also apply the gradient, divergence, and curl operators multiple times.

*   **Curl of a Gradient:** If $\mathbf{F} = \nabla \phi$, then $\text{curl} \mathbf{F} = \nabla \times (\nabla \phi) = \mathbf{0}$. This means the curl of the gradient of any scalar function is always the zero vector. This is a very useful identity! If you are given a vector field and can show it's the gradient of some scalar function, you immediately know its curl is zero.
*   **Divergence of a Curl:** If $\mathbf{G} = \text{curl} \mathbf{F}$, then $\text{div} \mathbf{G} = \nabla \cdot (\nabla \times \mathbf{F}) = 0$. This means the divergence of the curl of any vector field is always zero. This property is crucial in electromagnetism, for instance, where the magnetic field $\mathbf{B}$ can be written as the curl of the vector potential $\mathbf{A}$ ($\mathbf{B} = \nabla \times \mathbf{A}$), and we know that $\nabla \cdot \mathbf{B} = 0$.

These identities are very handy for checking work and simplifying problems. They are excellent for exam preparation.

---

### 5. Summary and Key Takeaways

Let's quickly recap the main points:

*   **Vector Fields:** Functions assigning a vector to each point in space. Crucial for describing physical phenomena.
*   **Divergence ($\nabla \cdot \mathbf{F}$):** A scalar quantity measuring the rate of outward flow from a point (source/sink strength). Positive means outflow, negative means inflow, zero means conservation (incompressibility).
*   **Curl ($\nabla \times \mathbf{F}$):** A vector quantity measuring the tendency of the field to rotate around a point. Non-zero curl indicates rotation; zero curl means the field is irrotational.
*   **Key Identities:**
    *   $\text{curl}(\nabla \phi) = \mathbf{0}$ (Gradient fields are irrotational)
    *   $\text{div}(\text{curl} \mathbf{F}) = 0$ (Curl fields are solenoidal/incompressible)
*   **Applications:** Divergence and curl are fundamental in understanding fluid dynamics, electromagnetism, and other areas of physics and engineering. They are key components in powerful theorems like the Divergence Theorem and Stokes' Theorem, which relate integrals over volumes, surfaces, and curves.

**Remember this:** Divergence is about "stuff coming out," and Curl is about "swirling." They are the local characteristics of a vector field. Understanding how to compute them and what they mean is essential for applying vector calculus to solve real-world problems. This directly addresses **CO3** by providing deeper analytical tools for vector functions.

---

### 6. Sample Questions and Answers

Here are some questions to test your understanding, covering both conceptual aspects and typical exam problems.

**Q1. Conceptual:** What does it mean for a vector field to have zero divergence at a point? Explain with an analogy.

**A1:** Zero divergence at a point means that the net flow of "stuff" (represented by the vector field) into or out of an infinitesimally small region around that point is zero. In other words, the amount flowing in equals the amount flowing out.

**Analogy:** Imagine a perfectly efficient traffic intersection where cars are flowing through. If the divergence is zero at the center of the intersection, it means that for every car entering a tiny box around the center, another car is exiting that box, and no cars are disappearing or spontaneously appearing. The flow is conserved locally.

**Q2. Calculation:** Compute the divergence and curl of the vector field $\mathbf{F}(x, y, z) = e^x \sin y \mathbf{i} + e^x \cos y \mathbf{j} + z^2 \mathbf{k}$.

**A2:**
Here, $P(x, y, z) = e^x \sin y$, $Q(x, y, z) = e^x \cos y$, and $R(x, y, z) = z^2$.

**Divergence:**
$\nabla \cdot \mathbf{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}$
$\frac{\partial P}{\partial x} = \frac{\partial}{\partial x}(e^x \sin y) = e^x \sin y$
$\frac{\partial Q}{\partial y} = \frac{\partial}{\partial y}(e^x \cos y) = -e^x \sin y$
$\frac{\partial R}{\partial z} = \frac{\partial}{\partial z}(z^2) = 2z$

So, $\nabla \cdot \mathbf{F} = (e^x \sin y) + (-e^x \sin y) + (2z) = 2z$.

**Curl:**
$\nabla \times \mathbf{F} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ e^x \sin y & e^x \cos y & z^2 \end{vmatrix}$

*   **i-component:** $\frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z} = \frac{\partial}{\partial y}(z^2) - \frac{\partial}{\partial z}(e^x \cos y) = 0 - 0 = 0$.
*   **j-component:** $\frac{\partial P}{\partial z} - \frac{\partial R}{\partial x} = \frac{\partial}{\partial z}(e^x \sin y) - \frac{\partial}{\partial x}(z^2) = 0 - 0 = 0$.
*   **k-component:** $\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = \frac{\partial}{\partial x}(e^x \cos y) - \frac{\partial}{\partial y}(e^x \sin y) = e^x \cos y - e^x \cos y = 0$.

So, $\nabla \times \mathbf{F} = 0 \mathbf{i} + 0 \mathbf{j} + 0 \mathbf{k} = \mathbf{0}$.

**Interpretation:** The divergence is $2z$. This means for $z>0$, the field is expanding, and for $z<0$, it's contracting. The curl is $\mathbf{0}$, indicating the field is irrotational.

**Q3. Conceptual/Application:** If a fluid is incompressible, what can you say about its velocity field? Relate this to the divergence operator.

**A3:** If a fluid is incompressible, it means that the volume occupied by a given mass of the fluid remains constant, regardless of pressure or flow. In terms of its velocity field $\mathbf{v}$, this implies that there are no sources or sinks within the fluid. Mathematically, this means that the divergence of the velocity field must be zero everywhere within the fluid.

So, for an incompressible fluid, $\nabla \cdot \mathbf{v} = 0$. This is a fundamental equation in fluid mechanics.

**Q4. Identity Application:** Show that if $\mathbf{F} = \nabla \phi$, then $\text{curl} \mathbf{F} = \mathbf{0}$.

**A4:**
We are given $\mathbf{F} = \nabla \phi$, which means $\mathbf{F} = \frac{\partial \phi}{\partial x} \mathbf{i} + \frac{\partial \phi}{\partial y} \mathbf{j} + \frac{\partial \phi}{\partial z} \mathbf{k}$.
So, $P = \frac{\partial \phi}{\partial x}$, $Q = \frac{\partial \phi}{\partial y}$, $R = \frac{\partial \phi}{\partial z}$.

The curl is given by:
$\text{curl} \mathbf{F} = \left( \frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z} \right) \mathbf{i} + \left( \frac{\partial P}{\partial z} - \frac{\partial R}{\partial x} \right) \mathbf{j} + \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) \mathbf{k}$

Let's compute each component:
*   **i-component:** $\frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z} = \frac{\partial}{\partial y}\left(\frac{\partial \phi}{\partial z}\right) - \frac{\partial}{\partial z}\left(\frac{\partial \phi}{\partial y}\right)$
    Using the property of continuous second partial derivatives (Schwarz's Theorem), the order of differentiation doesn't matter: $\frac{\partial^2 \phi}{\partial y \partial z} = \frac{\partial^2 \phi}{\partial z \partial y}$.
    Therefore, $\frac{\partial}{\partial y}\left(\frac{\partial \phi}{\partial z}\right) - \frac{\partial}{\partial z}\left(\frac{\partial \phi}{\partial y}\right) = \frac{\partial^2 \phi}{\partial y \partial z} - \frac{\partial^2 \phi}{\partial z \partial y} = 0$.

*   **j-component:** $\frac{\partial P}{\partial z} - \frac{\partial R}{\partial x} = \frac{\partial}{\partial z}\left(\frac{\partial \phi}{\partial x}\right) - \frac{\partial}{\partial x}\left(\frac{\partial \phi}{\partial z}\right)$
    Similarly, $\frac{\partial^2 \phi}{\partial z \partial x} = \frac{\partial^2 \phi}{\partial x \partial z}$.
    So, $\frac{\partial}{\partial z}\left(\frac{\partial \phi}{\partial x}\right) - \frac{\partial}{\partial x}\left(\frac{\partial \phi}{\partial z}\right) = \frac{\partial^2 \phi}{\partial z \partial x} - \frac{\partial^2 \phi}{\partial x \partial z} = 0$.

*   **k-component:** $\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = \frac{\partial}{\partial x}\left(\frac{\partial \phi}{\partial y}\right) - \frac{\partial}{\partial y}\left(\frac{\partial \phi}{\partial x}\right)$
    Again, $\frac{\partial^2 \phi}{\partial x \partial y} = \frac{\partial^2 \phi}{\partial y \partial x}$.
    So, $\frac{\partial}{\partial x}\left(\frac{\partial \phi}{\partial y}\right) - \frac{\partial}{\partial y}\left(\frac{\partial \phi}{\partial x}\right) = \frac{\partial^2 \phi}{\partial x \partial y} - \frac{\partial^2 \phi}{\partial y \partial x} = 0$.

Since all components are zero, $\text{curl} \mathbf{F} = \mathbf{0}$. This confirms the identity that the curl of a gradient is always the zero vector.

---
