---
title: "Divergent and curl"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 2"
module: "Module 3: Vector valued function of single variable "
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f983a"
status: "completed"
scrapedAt: "2026-05-23T16:08:14.416Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 2

## Module 3: Vector Valued Functions of a Single Variable

### Topic: Divergence and Curl

Welcome everyone! In this module, we've been exploring vector-valued functions of a single variable, which are crucial for describing quantities that have both magnitude and direction, and how these quantities change over time or space. Think about fluid flow, electromagnetic fields, or heat distribution – these are all beautifully described using vector fields. Today, we’re diving into two fundamental concepts that help us understand the *behavior* of these vector fields: **divergence** and **curl**. These are not just mathematical curiosities; they have deep physical significance, especially in electromagnetism and fluid dynamics, directly linking to our Course Outcomes, particularly **CO3: Compute the derivatives and line integrals of vector functions and to learn their applications.**

### Understanding Vector Fields

Before we jump into divergence and curl, let's quickly recap what a vector field is. A vector field assigns a vector to each point in space. For instance, a wind map shows a vector at each location indicating the wind's direction and speed. In our context, we're often dealing with vector fields $\mathbf{F}(x, y, z)$ in three dimensions, where each component of the vector is a function of $x$, $y$, and $z$. For example, $\mathbf{F}(x, y, z) = P(x, y, z)\mathbf{i} + Q(x, y, z)\mathbf{j} + R(x, y, z)\mathbf{k}$.

### 1. Divergence: The "Outward Flow"

Imagine you’re standing in a river. The water is flowing around you. Divergence is like a measure of how much the water is "spreading out" or "compressing" at your exact location.

**What is Divergence?**

Formally, the divergence of a vector field $\mathbf{F}(x, y, z) = P(x, y, z)\mathbf{i} + Q(x, y, z)\mathbf{j} + R(x, y, z)\mathbf{k}$ is a **scalar field** given by:

$$
\text{div } \mathbf{F} = \nabla \cdot \mathbf{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}
$$

Here, $\nabla$ (nabla) is the vector differential operator, defined as $\nabla = \frac{\partial}{\partial x}\mathbf{i} + \frac{\partial}{\partial y}\mathbf{j} + \frac{\partial}{\partial z}\mathbf{k}$. The dot product captures the essence of divergence.

**Physical Interpretation of Divergence**

*   **Positive Divergence:** If $\text{div } \mathbf{F} > 0$ at a point, it means that at that point, there is a net "outflow" of the quantity represented by the vector field. Think of it as a source.
    *   **Fluid Analogy:** Imagine a faucet in a sink. At the faucet's opening, water is coming out, spreading in all directions. The divergence of the velocity field of the water would be positive at the faucet.
    *   **Electromagnetism (Gauss's Law):** In electrostatics, the divergence of the electric field $\mathbf{E}$ is related to the charge density $\rho$ by $\nabla \cdot \mathbf{E} = \frac{\rho}{\epsilon_0}$. A positive divergence means there's a positive charge (a source of electric field) at that point.
*   **Negative Divergence:** If $\text{div } \mathbf{F} < 0$, it means there's a net "inflow" or accumulation of the quantity at that point. It's like a sink.
    *   **Fluid Analogy:** Imagine a drain in a sink. Water flows towards it and disappears. The divergence of the velocity field would be negative near the drain.
    *   **Electromagnetism:** If you have a negative charge, the electric field lines point inwards, and the divergence of $\mathbf{E}$ would be negative in that region.
*   **Zero Divergence:** If $\text{div } \mathbf{F} = 0$, the field is called **divergence-free** or **solenoidal**. This means that at that point, the amount of the quantity flowing in equals the amount flowing out. There’s no net creation or destruction of the quantity at that point.
    *   **Fluid Analogy:** For an incompressible fluid that's not being added to or removed, its velocity field is divergence-free everywhere. Imagine the steady flow of water in a pipe – what flows into a small section must flow out.
    *   **Electromagnetism (Magnetism):** Magnetic fields are always divergence-free ($\nabla \cdot \mathbf{B} = 0$). This is a fundamental law of physics stating that there are no magnetic monopoles (no isolated north or south poles). Magnetic field lines always form closed loops.

**Connecting to Course Outcomes:** Divergence is a direct application of partial derivatives, fundamental to **CO1**. Understanding divergence-free fields is key to many physical phenomena, and its interpretation as a source or sink is vital for applications.

**Example:**
Let $\mathbf{F}(x, y, z) = x^2y \mathbf{i} + yz^2 \mathbf{j} + zx^3 \mathbf{k}$.
Here, $P(x, y, z) = x^2y$, $Q(x, y, z) = yz^2$, and $R(x, y, z) = zx^3$.
Let's calculate its divergence:
$\frac{\partial P}{\partial x} = \frac{\partial}{\partial x}(x^2y) = 2xy$
$\frac{\partial Q}{\partial y} = \frac{\partial}{\partial y}(yz^2) = z^2$
$\frac{\partial R}{\partial z} = \frac{\partial}{\partial z}(zx^3) = x^3$

So, $\text{div } \mathbf{F} = \nabla \cdot \mathbf{F} = 2xy + z^2 + x^3$.
This scalar field tells us about the "flow balance" at any point $(x, y, z)$. For instance, at the origin $(0, 0, 0)$, the divergence is $0$. At the point $(1, 1, 1)$, the divergence is $2(1)(1) + (1)^2 + (1)^3 = 2 + 1 + 1 = 4$, indicating a net outflow at this point.

### 2. Curl: The "Rotation" or "Twist"

Now, let’s think about whether a vector field is "spinning" or "rotating" at a point. That's what curl measures.

**What is Curl?**

The curl of a vector field $\mathbf{F}(x, y, z) = P(x, y, z)\mathbf{i} + Q(x, y, z)\mathbf{j} + R(x, y, z)\mathbf{k}$ is another **vector field**, denoted by $\text{curl } \mathbf{F}$ or $\nabla \times \mathbf{F}$. It’s calculated using a cross product involving the nabla operator:

$$
\text{curl } \mathbf{F} = \nabla \times \mathbf{F} = \begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\
\frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
P & Q & R
\end{vmatrix}
$$

Expanding this determinant, we get:

$$
\text{curl } \mathbf{F} = \left(\frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z}\right)\mathbf{i} + \left(\frac{\partial P}{\partial z} - \frac{\partial R}{\partial x}\right)\mathbf{j} + \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right)\mathbf{k}
$$

**Physical Interpretation of Curl**

*   **Non-zero Curl:** If $\text{curl } \mathbf{F}$ is non-zero at a point, it indicates that the vector field is "rotating" or "circulating" around that point. The direction of the curl vector gives the axis of rotation (by the right-hand rule), and its magnitude indicates the strength of the rotation.
    *   **Fluid Analogy:** Imagine placing a small paddlewheel in a swirling vortex of water. If the paddlewheel starts spinning, the fluid has a non-zero curl there. The axis of the paddlewheel's spin aligns with the direction of the curl vector.
    *   **Example:** Consider a whirlpool. The water is clearly rotating. The velocity field of the water would have a non-zero curl in the region of the whirlpool.
*   **Zero Curl:** If $\text{curl } \mathbf{F} = \mathbf{0}$ at a point (or throughout a region), the field is called **irrotational** at that point (or in that region). This means there's no tendency for the field to circulate or spin.
    *   **Fluid Analogy:** Imagine a river flowing in a straight line without any eddies or swirls. The velocity field of such a flow would be irrotational.
    *   **Electromagnetism:** Again, magnetic fields are irrotational for static situations. However, changing electric fields can *induce* magnetic fields with curl, as described by Ampère's law with Maxwell's addition ($\nabla \times \mathbf{B} = \mu_0\mathbf{J} + \mu_0\epsilon_0 \frac{\partial \mathbf{E}}{\partial t}$). For time-varying fields, curl becomes very important. Faraday's law of induction, $\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}$, tells us that a changing magnetic field *induces* an electric field with a non-zero curl (an electromotive force or voltage that can drive current). This is crucial for understanding how generators and transformers work!

**Connecting to Course Outcomes:** Curl, like divergence, involves partial derivatives, reinforcing **CO1**. The concept of rotational fields is a core idea in understanding fluid mechanics and electromagnetic induction, directly relating to **CO3**’s emphasis on applications. If a field is irrotational, it often simplifies certain calculations, like the ability to express the field as the gradient of a scalar potential.

**Example:**
Let $\mathbf{F}(x, y, z) = yz \mathbf{i} + xz \mathbf{j} + xy \mathbf{k}$.
Here, $P = yz$, $Q = xz$, $R = xy$.
Let’s compute its curl:

*   $\frac{\partial R}{\partial y} = \frac{\partial}{\partial y}(xy) = x$
*   $\frac{\partial Q}{\partial z} = \frac{\partial}{\partial z}(xz) = x$
*   $\frac{\partial P}{\partial z} = \frac{\partial}{\partial z}(yz) = y$
*   $\frac{\partial R}{\partial x} = \frac{\partial}{\partial x}(xy) = y$
*   $\frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}(xz) = z$
*   $\frac{\partial P}{\partial y} = \frac{\partial}{\partial y}(yz) = z$

Now, plug these into the curl formula:
$\text{curl } \mathbf{F} = (x - x)\mathbf{i} + (y - y)\mathbf{j} + (z - z)\mathbf{k} = 0\mathbf{i} + 0\mathbf{j} + 0\mathbf{k} = \mathbf{0}$.

So, this vector field $\mathbf{F}$ is irrotational everywhere! This is a significant property. For instance, this field can be expressed as the gradient of a scalar potential. If we look for a scalar function $\phi$ such that $\nabla \phi = \mathbf{F}$, we'd expect $\frac{\partial \phi}{\partial x} = yz$, $\frac{\partial \phi}{\partial y} = xz$, and $\frac{\partial \phi}{\partial z} = xy$. Integrating these, we find that $\phi(x, y, z) = xyz$ satisfies all conditions (up to a constant).

**Important Identity: Curl of a Gradient**
A very important result, often found in textbooks like Anton, Biven, Davis and Kreyszig, is that the curl of the gradient of any scalar function $\phi$ is always the zero vector:
$$ \text{curl}(\nabla \phi) = \nabla \times (\nabla \phi) = \mathbf{0} $$
This means any vector field that can be expressed as the gradient of a scalar function (a **conservative field**) is always irrotational. This is a powerful tool for checking if a field is conservative.

**Important Identity: Divergence of a Curl**
Another key identity is that the divergence of the curl of any vector field $\mathbf{F}$ is always zero:
$$ \text{div}(\text{curl } \mathbf{F}) = \nabla \cdot (\nabla \times \mathbf{F}) = 0 $$
This means that the curl of any vector field is always divergence-free. This makes sense intuitively: if a field represents rotation, it can't have a net source or sink of that rotation. If you try to calculate $\text{div}(\text{curl } \mathbf{F})$ using the partial derivatives, you'll find that all terms cancel out, leaving zero. This is also useful for checking calculations – if you compute the curl of a field and then its divergence, and you don't get zero, you’ve likely made a mistake in your partial derivatives!

**Connecting to Course Outcomes:** These identities are fundamental theoretical results. Understanding them is part of the deeper conceptual grasp required by **CO1** and **CO3**. They also serve as checks in problem-solving, essential for exam-oriented preparation.

### How Divergence and Curl Relate to Other Concepts

*   **Line Integrals (CO3):** Curl is intimately linked to line integrals. The **Stokes' Theorem** states that the flux of the curl of a vector field through a surface is equal to the line integral of the vector field around the boundary of that surface. This is a cornerstone of vector calculus and connects a "surface integral of a curl" to a "line integral of the field."
*   **Surface and Volume Integrals (CO4):** Divergence is the key player in the **Divergence Theorem** (also known as Gauss's Theorem). It states that the flux of a vector field out of a closed surface is equal to the triple integral of the divergence of the field over the volume enclosed by the surface. This is immensely useful for relating quantities within a volume to quantities on its boundary, and it’s fundamental in areas like fluid dynamics and electromagnetism.

Remember these theorems – they are frequent visitors in exams and are crucial for applying these concepts to physical problems.

### Quick Recall and Exam Tips

*   **Divergence:** $\nabla \cdot \mathbf{F}$, scalar output, measures "outward flow" or "source/sink strength." Think of it as a dot product with $\nabla$.
*   **Curl:** $\nabla \times \mathbf{F}$, vector output, measures "rotation" or "circulation." Think of it as a cross product with $\nabla$.
*   **Irrotational Fields:** $\text{curl } \mathbf{F} = \mathbf{0}$. Can be written as $\nabla \phi$.
*   **Divergence-Free Fields (Solenoidal):** $\text{div } \mathbf{F} = 0$. Crucial for incompressible fluids and magnetism.
*   **Key Identities:** $\text{curl}(\nabla \phi) = \mathbf{0}$ and $\text{div}(\text{curl } \mathbf{F}) = 0$. Use these as checks!
*   **Exam Pitfall:** Mixing up the formulas for divergence and curl, or calculating the wrong partial derivatives. Be very careful with your signs and order of subtraction in the curl components. Double-check your gradient operator definition.

### Summary

Divergence and curl are powerful tools for understanding the local behavior of vector fields. Divergence tells us about sources and sinks, indicating whether a field is expanding or contracting at a point. Curl quantifies rotation, revealing if a field is swirling around a point. Both are direct applications of partial derivatives and are foundational for understanding many physical laws, from fluid dynamics to electromagnetism, linking directly to the core objectives of this course. Keep practicing their calculation and interpretation, and you’ll find them invaluable in your studies.

***

## Sample Questions and Answers

**Question 1 (Conceptual):**
What does it mean for a vector field to have zero divergence at a point? Give a physical example.

**Answer:**
A vector field having zero divergence at a point means that, at that specific location, the net rate of flow out of an infinitesimally small region around the point is zero. In other words, the amount of the quantity represented by the vector field entering the region is exactly equal to the amount leaving it. There is no net creation or destruction of the quantity at that point.

**Physical Example:** The velocity field of an **incompressible fluid** that is flowing steadily without any sources or sinks within it. For instance, consider the water flow in a perfectly smooth, straight pipe where the water density is constant and there are no leaks or inflows. At any point within the water, what flows in must flow out. Another example is the magnetic field $\mathbf{B}$ in all physical situations ($\nabla \cdot \mathbf{B} = 0$).

**Question 2 (Calculation & Interpretation):**
Given the vector field $\mathbf{F}(x, y, z) = (x^2 + y)\mathbf{i} + (y^2 + z)\mathbf{j} + (z^2 + x)\mathbf{k}$, calculate its divergence and curl. Interpret the results at the origin $(0,0,0)$.

**Answer:**
The vector field is $\mathbf{F}(x, y, z) = P\mathbf{i} + Q\mathbf{j} + R\mathbf{k}$, where $P = x^2 + y$, $Q = y^2 + z$, and $R = z^2 + x$.

**Divergence Calculation:**
$\text{div } \mathbf{F} = \nabla \cdot \mathbf{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}$
$\frac{\partial P}{\partial x} = \frac{\partial}{\partial x}(x^2 + y) = 2x$
$\frac{\partial Q}{\partial y} = \frac{\partial}{\partial y}(y^2 + z) = 2y$
$\frac{\partial R}{\partial z} = \frac{\partial}{\partial z}(z^2 + x) = 2z$
So, $\text{div } \mathbf{F} = 2x + 2y + 2z$.

**Divergence Interpretation at (0,0,0):**
At $(0,0,0)$, $\text{div } \mathbf{F} = 2(0) + 2(0) + 2(0) = 0$.
This means that at the origin, there is no net outflow or inflow. The field is locally divergence-free at this point.

**Curl Calculation:**
$\text{curl } \mathbf{F} = \nabla \times \mathbf{F} = \left(\frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z}\right)\mathbf{i} + \left(\frac{\partial P}{\partial z} - \frac{\partial R}{\partial x}\right)\mathbf{j} + \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right)\mathbf{k}$
$\frac{\partial R}{\partial y} = \frac{\partial}{\partial y}(z^2 + x) = 0$
$\frac{\partial Q}{\partial z} = \frac{\partial}{\partial z}(y^2 + z) = 1$
$\frac{\partial P}{\partial z} = \frac{\partial}{\partial z}(x^2 + y) = 0$
$\frac{\partial R}{\partial x} = \frac{\partial}{\partial x}(z^2 + x) = 1$
$\frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}(y^2 + z) = 0$
$\frac{\partial P}{\partial y} = \frac{\partial}{\partial y}(x^2 + y) = 1$

So, $\text{curl } \mathbf{F} = (0 - 1)\mathbf{i} + (0 - 1)\mathbf{j} + (0 - 1)\mathbf{k} = -\mathbf{i} - \mathbf{j} - \mathbf{k}$.

**Curl Interpretation at (0,0,0):**
The curl is a constant vector, $-\mathbf{i} - \mathbf{j} - \mathbf{k}$, which is non-zero. This means the vector field $\mathbf{F}$ has a rotational component at every point in space, including the origin. The direction of rotation is given by $-\mathbf{i} - \mathbf{j} - \mathbf{k}$, and its magnitude is $\sqrt{(-1)^2 + (-1)^2 + (-1)^2} = \sqrt{3}$. This indicates a swirling or rotational tendency in the field.

**Question 3 (Theoretical Check):**
Verify the identity $\text{div}(\text{curl } \mathbf{F}) = 0$ for the vector field $\mathbf{G}(x, y, z) = yx^2 \mathbf{i} + x y^2 \mathbf{j} + z \mathbf{k}$.

**Answer:**
First, let's find the curl of $\mathbf{G}$.
$\mathbf{G} = P\mathbf{i} + Q\mathbf{j} + R\mathbf{k}$, with $P = yx^2$, $Q = x y^2$, $R = z$.

Partial derivatives for curl:
$\frac{\partial R}{\partial y} = \frac{\partial}{\partial y}(z) = 0$
$\frac{\partial Q}{\partial z} = \frac{\partial}{\partial z}(x y^2) = 0$
$\frac{\partial P}{\partial z} = \frac{\partial}{\partial z}(yx^2) = 0$
$\frac{\partial R}{\partial x} = \frac{\partial}{\partial x}(z) = 0$
$\frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}(x y^2) = y^2$
$\frac{\partial P}{\partial y} = \frac{\partial}{\partial y}(yx^2) = x^2$

$\text{curl } \mathbf{G} = (0 - 0)\mathbf{i} + (0 - 0)\mathbf{j} + (y^2 - x^2)\mathbf{k} = (y^2 - x^2)\mathbf{k}$.

Now, let's find the divergence of $\text{curl } \mathbf{G}$. Let $\mathbf{H} = \text{curl } \mathbf{G} = 0\mathbf{i} + 0\mathbf{j} + (y^2 - x^2)\mathbf{k}$.
Here, $P_H = 0$, $Q_H = 0$, $R_H = y^2 - x^2$.

$\text{div}(\text{curl } \mathbf{G}) = \nabla \cdot \mathbf{H} = \frac{\partial P_H}{\partial x} + \frac{\partial Q_H}{\partial y} + \frac{\partial R_H}{\partial z}$
$\frac{\partial P_H}{\partial x} = \frac{\partial}{\partial x}(0) = 0$
$\frac{\partial Q_H}{\partial y} = \frac{\partial}{\partial y}(0) = 0$
$\frac{\partial R_H}{\partial z} = \frac{\partial}{\partial z}(y^2 - x^2) = 0$

So, $\text{div}(\text{curl } \mathbf{G}) = 0 + 0 + 0 = 0$.
The identity is verified for this vector field. This indicates our curl calculation was likely correct, as the divergence of any curl must be zero.
