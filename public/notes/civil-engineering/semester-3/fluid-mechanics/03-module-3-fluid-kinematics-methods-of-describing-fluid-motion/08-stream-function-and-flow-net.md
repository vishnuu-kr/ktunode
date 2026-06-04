---
title: "stream function and flow net"
subject: "FLUID MECHANICS"
module: "Module 3: Fluid Kinematics : Methods of describing fluid motion"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba8106f9"
status: "completed"
scrapedAt: "2026-05-20T18:40:36.135Z"
---
# Fluid Mechanics - Module 3: Fluid Kinematics

## Topic: Stream Function and Flow Net

---

### Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Understand the concept of the stream function and its applications in 2D incompressible flow.
*   Derive the stream function for simple flow fields.
*   Define and explain the properties of streamlines.
*   Understand the concept of the velocity potential function.
*   Recognize the conditions for irrotational flow and the relationship between stream function and velocity potential.
*   Define and construct flow nets for 2D potential flow problems.
*   Use flow nets to determine velocities and pressure distributions in simple flow situations.
*   Appreciate the limitations of the stream function and flow net methods.

---

### 1. Introduction to Fluid Kinematics

Fluid kinematics deals with the description of fluid motion without considering the forces causing the motion. It focuses on velocity, acceleration, flow patterns, and related quantities.

---

### 2. Methods of Describing Fluid Motion

There are two primary ways to describe fluid motion:

*   **Lagrangian Description:** Follows individual fluid particles as they move through space and time. Imagine tracking a single drop of water.
*   **Eulerian Description:** Focuses on fixed points in space and observes the fluid properties (velocity, pressure, etc.) passing through these points. This is the more common approach in fluid mechanics.

---

### 3. Streamlines, Pathlines, and Streaklines

While not the primary focus of this topic, understanding these related concepts is crucial:

*   **Streamline:** An imaginary line in a fluid flow such that the tangent to the line at any point is in the direction of the velocity vector at that point.
    *   **Key Property:** Fluid cannot cross a streamline.
    *   **In 2D:** For a flow with velocity components $u(x, y)$ and $v(x, y)$, the differential equation of a streamline is:
        $$\frac{dx}{u} = \frac{dy}{v}$$
        or
        $$u \, dy - v \, dx = 0$$

*   **Pathline:** The actual path traced by a single fluid particle over time.
*   **Streakline:** The locus of fluid particles that have passed through a particular point in space at different times. It's like a snapshot of all particles that have ever been at a certain location.

*   **For steady flow, streamlines, pathlines, and streaklines are identical.**

---

### 4. The Stream Function ($\psi$)

The stream function is a mathematical concept used to describe **2D incompressible flow**.

**4.1 Definition:**

For a 2D incompressible flow with velocity components $u(x, y)$ and $v(x, y)$, the stream function, denoted by $\psi(x, y)$, is defined such that:

*   The velocity component in the $x$-direction ($u$) is given by the partial derivative of $\psi$ with respect to $y$:
    $$u = \frac{\partial \psi}{\partial y}$$
*   The velocity component in the $y$-direction ($v$) is given by the negative partial derivative of $\psi$ with respect to $x$:
    $$v = -\frac{\partial \psi}{\partial x}$$

**4.2 Verification of Incompressibility:**

The continuity equation for 2D incompressible flow is $\frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} = 0$.
Let's substitute the definitions of $u$ and $v$ in terms of $\psi$:
$$\frac{\partial}{\partial x} \left(\frac{\partial \psi}{\partial y}\right) + \frac{\partial}{\partial y} \left(-\frac{\partial \psi}{\partial x}\right) = 0$$
$$\frac{\partial^2 \psi}{\partial x \partial y} - \frac{\partial^2 \psi}{\partial y \partial x} = 0$$
By Clairaut's theorem (if the second partial derivatives are continuous), this equation is always satisfied. Therefore, any function $\psi(x, y)$ automatically satisfies the continuity equation for 2D incompressible flow.

**4.3 Properties of Streamlines and the Stream Function:**

*   **Constant Value of $\psi$ Defines a Streamline:** If we set $\psi = C$ (where C is a constant), then $d\psi = \frac{\partial \psi}{\partial x} dx + \frac{\partial \psi}{\partial y} dy = 0$.
    Substituting the velocity components:
    $$-v \, dx + u \, dy = 0 \implies u \, dy - v \, dx = 0$$
    This is the differential equation for a streamline. Thus, all points on a streamline have the same value of the stream function.

*   **Volume Flow Rate Between Streamlines:** The volume flow rate per unit width ($\dot{Q}$) between two streamlines $\psi_1$ and $\psi_2$ is given by the difference in their stream function values:
    $$\dot{Q} = \int_{s_1}^{s_2} (u \, dy - v \, dx)$$
    Along the streamline $\psi = \text{constant}$, $u\, dy - v\, dx = 0$. Consider a path from $(x_1, y_1)$ to $(x_2, y_2)$.
    Let $\psi_1$ be the stream function at $(x_1, y_1)$ and $\psi_2$ be the stream function at $(x_2, y_2)$.
    $\psi_2 - \psi_1 = \int_{(x_1,y_1)}^{(x_2,y_2)} \left(\frac{\partial \psi}{\partial x} dx + \frac{\partial \psi}{\partial y} dy\right)$
    $\psi_2 - \psi_1 = \int_{(x_1,y_1)}^{(x_2,y_2)} (-v \, dx + u \, dy)$
    This integral represents the flow rate across a line segment connecting $(x_1, y_1)$ to $(x_2, y_2)$.
    Therefore, the flow rate per unit width between streamline $\psi_1$ and streamline $\psi_2$ is:
    $$\dot{Q} = \psi_2 - \psi_1$$
    **Important:** The value of $\psi$ is arbitrary up to an additive constant. We typically set $\psi = 0$ at a convenient boundary or axis.

**4.4 Examples of Stream Function:**

*   **Uniform Flow in the Positive x-direction:**
    $u = U$, $v = 0$.
    $u = \frac{\partial \psi}{\partial y} = U \implies \psi = Uy + f(x)$
    $v = -\frac{\partial \psi}{\partial x} = 0 \implies \frac{d}{dx} (Uy + f(x)) = 0 \implies U \frac{\partial y}{\partial x} + \frac{df}{dx} = 0$. Since y is independent of x, $\frac{\partial y}{\partial x} = 0$, so $\frac{df}{dx} = 0$. Thus $f(x)$ is a constant, say $C_1$.
    $\psi(x, y) = Uy + C_1$. Let $C_1 = 0$, so $\psi = Uy$.
    Streamlines are $Uy = C'$, which are horizontal lines ($y = C'/U$).

*   **Uniform Flow in the Positive y-direction:**
    $u = 0$, $v = U$.
    $u = \frac{\partial \psi}{\partial y} = 0 \implies \psi = f(x)$
    $v = -\frac{\partial \psi}{\partial x} = U \implies -\frac{df}{dx} = U \implies \frac{df}{dx} = -U \implies f(x) = -Ux + C_2$.
    $\psi(x, y) = -Ux + C_2$. Let $C_2 = 0$, so $\psi = -Ux$.
    Streamlines are $-Ux = C'$, which are vertical lines ($x = -C'/U$).

*   **Source at the Origin:** A source is a point where fluid is introduced into the flow.
    The radial velocity $v_r = \frac{m}{2\pi r}$, where $m$ is the strength of the source (volume flow rate per unit length). The tangential velocity $v_\theta = 0$.
    In polar coordinates $(r, \theta)$, $u_r = \frac{\partial \psi}{r \partial \theta}$ and $u_\theta = -\frac{\partial \psi}{\partial r}$.
    Here, $u_r = \frac{m}{2\pi r}$ and $u_\theta = 0$.
    $u_\theta = -\frac{\partial \psi}{\partial r} = 0 \implies \psi = f(\theta)$.
    $u_r = \frac{1}{r} \frac{\partial \psi}{\partial \theta} = \frac{1}{r} \frac{df}{d\theta} = \frac{m}{2\pi r} \implies \frac{df}{d\theta} = \frac{m}{2\pi}$.
    $f(\theta) = \frac{m}{2\pi} \theta + C_3$.
    $\psi(r, \theta) = \frac{m}{2\pi} \theta + C_3$. Let $C_3 = 0$, so $\psi = \frac{m}{2\pi} \theta$.
    Streamlines are $\frac{m}{2\pi} \theta = C'$, which are radial lines emanating from the origin.

*   **Vortex at the Origin:** A vortex is a point where fluid rotates.
    The tangential velocity $v_\theta = \frac{\Gamma}{2\pi r}$, where $\Gamma$ is the circulation. The radial velocity $v_r = 0$.
    In polar coordinates: $u_r = 0$, $u_\theta = \frac{\Gamma}{2\pi r}$.
    $u_r = \frac{\partial \psi}{r \partial \theta} = 0 \implies \psi = f(\theta)$.
    $u_\theta = -\frac{\partial \psi}{\partial r} = \frac{\Gamma}{2\pi r}$.
    $-\frac{df}{dr} = \frac{\Gamma}{2\pi r}$. Since $\psi$ depends only on $\theta$, this is only valid if $f(\theta)$ is a constant, which implies $u_\theta = 0$. This suggests that a simple vortex is not irrotational.
    Let's reconsider the definition of the stream function in polar coordinates for a general 2D flow:
    $u_r = \frac{1}{r} \frac{\partial \psi}{\partial \theta}$
    $u_\theta = -\frac{\partial \psi}{\partial r}$
    For a vortex where $u_r = 0$ and $u_\theta = \frac{\Gamma}{2\pi r}$:
    $u_r = \frac{1}{r} \frac{\partial \psi}{\partial \theta} = 0 \implies \psi$ is independent of $\theta$, so $\psi = f(r)$.
    $u_\theta = -\frac{\partial \psi}{\partial r} = \frac{\Gamma}{2\pi r}$.
    $-\frac{df}{dr} = \frac{\Gamma}{2\pi r} \implies f(r) = -\frac{\Gamma}{2\pi} \ln(r) + C_4$.
    $\psi(r) = -\frac{\Gamma}{2\pi} \ln(r) + C_4$. Let $C_4=0$, so $\psi = -\frac{\Gamma}{2\pi} \ln(r)$.
    Streamlines are $-\frac{\Gamma}{2\pi} \ln(r) = C'$, which are circles centered at the origin ($r = \text{constant}$).

*   **Superposition of Flows:** The stream function is linear, so stream functions for different flows can be added to represent the combined flow. This is a powerful tool.
    *   **Example: Flow past a circular cylinder (potential flow):**
        The stream function for uniform flow ($U$ in x-direction) is $\psi_{uniform} = Uy$.
        The stream function for a doublet (combination of source and sink at the same point) is $\psi_{doublet} = -\frac{Kd \sin \theta}{r}$, where $K$ is related to the strength. In polar coordinates, with uniform flow $U$ along the x-axis, the stream function for flow past a cylinder of radius $R$ is often written as:
        $$\psi(r, \theta) = U \left(r - \frac{R^2}{r}\right) \sin \theta$$
        The velocity components in polar coordinates are:
        $u_r = \frac{1}{r} \frac{\partial \psi}{\partial \theta} = \frac{U}{r} \left(r - \frac{R^2}{r}\right) \cos \theta = U \left(1 - \frac{R^2}{r^2}\right) \cos \theta$
        $u_\theta = -\frac{\partial \psi}{\partial r} = -U \left(1 - \frac{R^2}{r^2}\right) \sin \theta$
        At the cylinder surface ($r=R$), $u_r = 0$ and $u_\theta = -2U \sin \theta$. The tangential velocity is maximum at $\theta = \pm \pi/2$.

---

### 5. The Velocity Potential Function ($\phi$)

The velocity potential function is another way to describe fluid motion, particularly **irrotational flow**.

**5.1 Definition:**

For a velocity field $\mathbf{v} = (u, v, w)$, the velocity potential function $\phi$ is defined such that:

*   $u = \frac{\partial \phi}{\partial x}$
*   $v = \frac{\partial \phi}{\partial y}$
*   $w = \frac{\partial \phi}{\partial z}$

In vector form: $\mathbf{v} = \nabla \phi$.

**5.2 Condition for Irrotational Flow:**

A flow is irrotational if the curl of the velocity vector is zero: $\nabla \times \mathbf{v} = \mathbf{0}$.
If $\mathbf{v} = \nabla \phi$, then $\nabla \times (\nabla \phi) = \mathbf{0}$. This is a mathematical identity, meaning that **if a velocity potential function exists, the flow is automatically irrotational.**

**5.3 Continuity Equation in terms of $\phi$:**

For incompressible flow, the continuity equation is $\nabla \cdot \mathbf{v} = 0$.
Substituting $\mathbf{v} = \nabla \phi$:
$\nabla \cdot (\nabla \phi) = 0$
$$\nabla^2 \phi = 0$$
This is known as **Laplace's equation**. Any function $\phi$ that satisfies Laplace's equation describes a 2D incompressible irrotational flow.

**5.4 Examples of Velocity Potential:**

*   **Uniform Flow in the Positive x-direction:**
    $u = U$, $v = 0$.
    $u = \frac{\partial \phi}{\partial x} = U \implies \phi = Ux + g(y)$
    $v = \frac{\partial \phi}{\partial y} = 0 \implies \frac{\partial}{\partial y}(Ux + g(y)) = 0 \implies g'(y) = 0 \implies g(y) = C_5$.
    $\phi(x, y) = Ux + C_5$. Let $C_5 = 0$, so $\phi = Ux$.
    This satisfies Laplace's equation: $\frac{\partial^2 (Ux)}{\partial x^2} + \frac{\partial^2 (Ux)}{\partial y^2} = 0 + 0 = 0$.

*   **Source at the Origin (Polar Coordinates):**
    $u_r = \frac{m}{2\pi r}$, $u_\theta = 0$.
    In polar coordinates, for irrotational flow, the velocity potential is:
    $u_r = \frac{\partial \phi}{\partial r}$
    $u_\theta = \frac{1}{r} \frac{\partial \phi}{\partial \theta}$
    $u_\theta = \frac{1}{r} \frac{\partial \phi}{\partial \theta} = 0 \implies \phi = f(r)$.
    $u_r = \frac{\partial \phi}{\partial r} = \frac{df}{dr} = \frac{m}{2\pi r}$.
    $f(r) = \frac{m}{2\pi} \ln(r) + C_6$.
    $\phi(r) = \frac{m}{2\pi} \ln(r) + C_6$. Let $C_6=0$, so $\phi = \frac{m}{2\pi} \ln(r)$.
    This satisfies Laplace's equation in polar coordinates: $\frac{1}{r} \frac{\partial}{\partial r} \left(r \frac{\partial \phi}{\partial r}\right) + \frac{1}{r^2} \frac{\partial^2 \phi}{\partial \theta^2} = 0$.
    $\frac{1}{r} \frac{\partial}{\partial r} \left(r \frac{m}{2\pi r}\right) + 0 = \frac{1}{r} \frac{\partial}{\partial r} \left(\frac{m}{2\pi}\right) = 0$.

---

### 6. Relationship between Stream Function ($\psi$) and Velocity Potential ($\phi$)

*   **Irrotational Flow Condition:** For a flow to have both a stream function and a velocity potential, it must be 2D, incompressible, and irrotational.
*   **Orthogonality:** Streamlines ($\psi = \text{constant}$) are orthogonal (perpendicular) to equipotential lines ($\phi = \text{constant}$).
    *   The slope of a streamline is $\frac{dy}{dx} \Big|_{\psi=\text{const}} = \frac{v}{u}$.
    *   The slope of an equipotential line is $\frac{dy}{dx} \Big|_{\phi=\text{const}} = \frac{\partial \phi / \partial x}{\partial \phi / \partial y} = \frac{u}{v}$.
    *   The product of these slopes is $\frac{v}{u} \times \frac{u}{v} = 1$. Wait, this is not orthogonal. This shows they are parallel. Let's check the definition of slope.
    The differential of $\psi$ is $d\psi = \frac{\partial \psi}{\partial x} dx + \frac{\partial \psi}{\partial y} dy = -v \, dx + u \, dy$. For $\psi = \text{constant}$, $d\psi = 0$, so $u \, dy = v \, dx \implies \frac{dy}{dx} = \frac{v}{u}$. This is the slope of the streamline.
    The differential of $\phi$ is $d\phi = \frac{\partial \phi}{\partial x} dx + \frac{\partial \phi}{\partial y} dy = u \, dx + v \, dy$. For $\phi = \text{constant}$, $d\phi = 0$, so $u \, dx = -v \, dy \implies \frac{dy}{dx} = -\frac{u}{v}$. This is the slope of the equipotential line.
    The product of slopes is $\frac{v}{u} \times \left(-\frac{u}{v}\right) = -1$. This confirms that streamlines and equipotential lines are **orthogonal**.

*   **Cauchy-Riemann Equations:** For a complex function $f(z) = \phi(x, y) + i\psi(x, y)$, where $z = x + iy$, the Cauchy-Riemann equations are:
    $\frac{\partial \phi}{\partial x} = \frac{\partial \psi}{\partial y}$
    $\frac{\partial \phi}{\partial y} = -\frac{\partial \psi}{\partial x}$
    These are exactly the relationships between velocity components and $\phi$ and $\psi$. This shows that $\phi$ and $\psi$ are conjugate harmonic functions.

---

### 7. Flow Nets

A flow net is a graphical representation of 2D potential flow. It consists of:

*   **Streamlines:** Lines along which the stream function is constant.
*   **Equipotential lines:** Lines along which the velocity potential is constant.

**7.1 Construction of a Flow Net:**

Flow nets are constructed by drawing a grid of orthogonal, curvilinear squares (or approximately squares) that satisfy the boundary conditions of the flow.

*   **Boundary Conditions:**
    *   Solid boundaries must coincide with streamlines ($\psi = \text{constant}$).
    *   For irrotational flow, the normal component of velocity at a solid boundary is zero, which is consistent with streamlines.
    *   The tangential component of velocity along a solid boundary is not necessarily zero in the general case, but for irrotational flow (like potential flow), the velocity along the boundary is given by $v_t = \frac{\partial \phi}{\partial s}$, where $s$ is the tangential direction.

*   **Procedure:**
    1.  **Sketch the Boundaries:** Draw the physical boundaries of the flow region.
    2.  **Draw Streamlines:** Sketch a few streamlines, starting with $\psi = 0$ on one boundary and then adding others at equal increments of $\Delta\psi$. The number of streamlines depends on the desired accuracy and the flow geometry.
    3.  **Draw Equipotential Lines:** Sketch a few equipotential lines, starting with $\phi = 0$ on one boundary and then adding others at equal increments of $\Delta\phi$.
    4.  **Adjust and Refine:** Iteratively adjust the spacing of the lines to make the cells as square-like as possible and ensure orthogonality. The spacing between adjacent streamlines should be proportional to the velocity, and the spacing between adjacent equipotential lines should be proportional to the velocity.
        *   **Key to Square Cells:** If the spacing between adjacent streamlines is $\Delta n$ and the spacing between adjacent equipotential lines is $\Delta l$, then for "square" cells, $\Delta n \approx \Delta l$.
        *   The velocity magnitude $V$ at any point is related to the spacing of equipotential lines and streamlines. If $\Delta \phi$ is the potential difference between adjacent equipotential lines and $\Delta s$ is the distance between them along a streamline, then $V \approx \frac{\Delta \phi}{\Delta s}$.
        *   If the cells are approximately square, $\Delta s \approx \Delta n$. Thus, $V \approx \frac{\Delta \phi}{\Delta n}$.
        *   Also, since $\psi = \text{constant}$ for streamlines, the flow rate between two streamlines is $\Delta \psi$. If there are $N_s$ intervals between streamlines, then $V \approx \frac{\Delta \psi}{\Delta n}$.
        *   **Therefore, in a well-constructed flow net, the velocity is inversely proportional to the spacing between streamlines:** $V \propto \frac{1}{\Delta n}$. Where the streamlines are closer together, the velocity is higher.

**7.2 Applications of Flow Nets:**

*   **Determining Velocity:** The velocity at any point is inversely proportional to the spacing between the adjacent streamlines at that point.
*   **Determining Pressure:** Using Bernoulli's equation, the pressure can be determined if the velocity is known: $P + \frac{1}{2}\rho V^2 = \text{constant}$. Higher velocity implies lower pressure.
*   **Estimating Discharge:** The total flow rate can be estimated from the number of streamlines and the spacing.

**7.3 Examples of Flow Nets:**

*   **Flow through a Porous Medium:** A common application is modeling groundwater flow.
*   **Flow around Obstacles:** Flow around a submerged object or through a channel constriction.
*   **Drainage:** Flow into a drain.

**7.4 Limitations of Flow Nets:**

*   **2D Irrotational Flow Only:** They are strictly valid only for 2D, incompressible, irrotational flows (potential flow).
*   **Approximation:** Especially for complex geometries, achieving perfectly square cells is difficult, leading to approximations.
*   **Requires Skill:** Constructing accurate flow nets requires practice and judgment.
*   **Viscosity Ignored:** Viscous effects are neglected.

---

### 8. Practice Questions and Exercises

**Question 1:**
For a 2D incompressible flow, the stream function is given by $\psi(x, y) = x^2 - y^2$.
(a) Determine the velocity components $u$ and $v$.
(b) Is the flow rotational or irrotational?
(c) Determine the equation of the streamline passing through the origin (0, 0).
(d) Determine the equation of the streamline passing through (2, 1).
(e) Calculate the volume flow rate per unit width between the streamlines $\psi = 0$ and $\psi = 3$.

**Answer 1:**
(a) $u = \frac{\partial \psi}{\partial y} = -2y$, $v = -\frac{\partial \psi}{\partial x} = -2x$.
(b) The flow is irrotational if $\frac{\partial u}{\partial y} = \frac{\partial v}{\partial x}$.
    $\frac{\partial u}{\partial y} = \frac{\partial}{\partial y}(-2y) = -2$.
    $\frac{\partial v}{\partial x} = \frac{\partial}{\partial x}(-2x) = -2$.
    Since $\frac{\partial u}{\partial y} = \frac{\partial v}{\partial x}$, the flow is irrotational. Alternatively, we can check if $\nabla^2 \psi = 0$.
    $\frac{\partial^2 \psi}{\partial x^2} = \frac{\partial}{\partial x}(-2x) = -2$.
    $\frac{\partial^2 \psi}{\partial y^2} = \frac{\partial}{\partial y}(-2y) = -2$.
    $\frac{\partial^2 \psi}{\partial x^2} + \frac{\partial^2 \psi}{\partial y^2} = -2 + (-2) = -4 \neq 0$.
    Wait, the condition for *having* a potential function is that $\nabla^2 \psi = 0$. The condition for *irrotationality* is $\frac{\partial u}{\partial y} = \frac{\partial v}{\partial x}$.
    Let's re-evaluate irrotationality: $\omega_z = \frac{1}{2} (\frac{\partial v}{\partial x} - \frac{\partial u}{\partial y}) = \frac{1}{2} (-2 - (-2)) = 0$. So the flow is irrotational.

    Let's check for a velocity potential. For irrotational flow, we must have $u = \frac{\partial \phi}{\partial x}$ and $v = \frac{\partial \phi}{\partial y}$.
    $u = -2y \implies \phi = -2xy + g(y)$.
    $v = \frac{\partial \phi}{\partial y} = -2x + g'(y) = -2x \implies g'(y) = 0 \implies g(y) = C$.
    So, $\phi = -2xy + C$.
    Now, let's check Laplace's equation for $\phi$:
    $\frac{\partial^2 \phi}{\partial x^2} = \frac{\partial^2 (-2xy)}{\partial x^2} = 0$.
    $\frac{\partial^2 \phi}{\partial y^2} = \frac{\partial^2 (-2xy)}{\partial y^2} = 0$.
    $\nabla^2 \phi = 0 + 0 = 0$.
    So, $\phi = -2xy$ is a valid velocity potential, confirming the flow is irrotational.
    My earlier check on $\psi$ was incorrect. $\nabla^2 \psi = 0$ is the condition for the stream function to satisfy continuity *and* be related to a velocity potential (i.e., for the flow to be irrotational). Let's re-check the $\psi$ condition.
    If $\psi$ satisfies Laplace's equation, then the flow is irrotational.
    $\frac{\partial^2 \psi}{\partial x^2} = -2$
    $\frac{\partial^2 \psi}{\partial y^2} = -2$
    $\nabla^2 \psi = -2 + (-2) = -4$.
    This means the stream function $\psi = x^2 - y^2$ describes a **rotational** flow. Let me correct my understanding or the question statement.

    **Correction:** A stream function $\psi$ automatically satisfies continuity for 2D incompressible flow. However, the flow is irrotational if and only if $\psi$ also satisfies Laplace's equation, i.e., $\nabla^2 \psi = 0$.
    In this case, $\nabla^2 \psi = -4$, so the flow is **rotational**.

    Let's re-evaluate the learning outcome regarding $\nabla^2 \psi = 0$ and irrotational flow.
    A flow is irrotational if $\nabla \times \mathbf{v} = 0$.
    For $\mathbf{v} = (u, v) = (\frac{\partial \psi}{\partial y}, -\frac{\partial \psi}{\partial x})$, the vorticity is $\omega_z = \frac{\partial v}{\partial x} - \frac{\partial u}{\partial y} = -\frac{\partial^2 \psi}{\partial x^2} - \frac{\partial^2 \psi}{\partial y^2} = -\nabla^2 \psi$.
    So, the flow is irrotational if $\nabla^2 \psi = 0$. My previous calculation was correct that $\nabla^2 \psi = -4$, so the flow is **rotational**. This means the question has a discrepancy if the intention was irrotational flow.

    However, the question asks to determine velocity components and streamline equations. The definitions of $u$ and $v$ from $\psi$ are always valid for 2D incompressible flow. The question about rotationality might be a trick or an indicator of a different type of problem. Assuming the definition of $\psi$ is given, we proceed.

    Let's assume the question *meant* to ask about a stream function that *does* result in irrotational flow. A common example is $\psi = 2xy$.
    If $\psi = 2xy$:
    $u = \frac{\partial \psi}{\partial y} = 2x$.
    $v = -\frac{\partial \psi}{\partial x} = -2y$.
    $\frac{\partial u}{\partial y} = 0$, $\frac{\partial v}{\partial x} = 0$. So, $\omega_z = 0$. This is irrotational.
    $\nabla^2 \psi = \frac{\partial^2 (2xy)}{\partial x^2} + \frac{\partial^2 (2xy)}{\partial y^2} = 0 + 0 = 0$. This satisfies Laplace's equation.

    Let's proceed with the original question as stated, assuming we just need to work with the given $\psi$.

    (a) $u = -2y$, $v = -2x$.
    (b) $\omega_z = -\nabla^2 \psi = -(-4) = 4$. The flow is **rotational**.
    (c) Streamline through (0, 0): $\psi = 0^2 - 0^2 = 0$. So the streamline is $x^2 - y^2 = 0$, which is $y = \pm x$.
    (d) Streamline through (2, 1): $\psi = 2^2 - 1^2 = 4 - 1 = 3$. So the streamline is $x^2 - y^2 = 3$.
    (e) Flow rate $\dot{Q} = \psi_2 - \psi_1$.
        Streamline $\psi_1 = 0$. Streamline $\psi_2 = 3$.
        $\dot{Q} = 3 - 0 = 3$.

**Question 2:**
For a 2D incompressible flow, the velocity potential is given by $\phi(x, y) = x^2 - y^2$.
(a) Determine the velocity components $u$ and $v$.
(b) Is the flow rotational or irrotational?
(c) Determine the equation of an equipotential line passing through the origin (0, 0).
(d) Determine the equation of an equipotential line passing through (2, 1).
(e) Can a stream function exist for this flow? If so, find it.

**Answer 2:**
(a) $u = \frac{\partial \phi}{\partial x} = 2x$, $v = \frac{\partial \phi}{\partial y} = -2y$.
(b) For a flow described by a velocity potential, it is always irrotational.
    Check: $\omega_z = \frac{\partial v}{\partial x} - \frac{\partial u}{\partial y} = \frac{\partial (-2y)}{\partial x} - \frac{\partial (2x)}{\partial y} = 0 - 0 = 0$. The flow is irrotational.
    Also, $\nabla^2 \phi = \frac{\partial^2 (x^2 - y^2)}{\partial x^2} + \frac{\partial^2 (x^2 - y^2)}{\partial y^2} = 2 + (-2) = 0$. This satisfies Laplace's equation.
(c) Equipotential line through (0, 0): $\phi = 0^2 - 0^2 = 0$. So the equipotential line is $x^2 - y^2 = 0$, which is $y = \pm x$.
(d) Equipotential line through (2, 1): $\phi = 2^2 - 1^2 = 4 - 1 = 3$. So the equipotential line is $x^2 - y^2 = 3$.
(e) Yes, a stream function can exist because the flow is irrotational and 2D incompressible.
    We need $u = \frac{\partial \psi}{\partial y}$ and $v = -\frac{\partial \psi}{\partial x}$.
    $u = 2x \implies \frac{\partial \psi}{\partial y} = 2x \implies \psi = 2xy + f(x)$.
    $v = -2y \implies -\frac{\partial \psi}{\partial x} = -2y \implies \frac{\partial \psi}{\partial x} = 2y$.
    $\frac{\partial}{\partial x}(2xy + f(x)) = 2y + f'(x) = 2y$.
    This implies $f'(x) = 0$, so $f(x) = C$.
    Thus, $\psi(x, y) = 2xy + C$. Let $C=0$, so $\psi = 2xy$.

**Question 3:**
Describe the flow represented by the stream function $\psi = A \sin(\frac{\pi x}{L}) \sinh(\frac{\pi y}{L})$ for $0 \le x \le L$ and $0 \le y \le H$. Assuming this represents a flow between two parallel plates.

**Answer 3:**
This stream function likely represents flow in a confined region. Let's check if it satisfies Laplace's equation for irrotational flow.
$\frac{\partial \psi}{\partial x} = A \frac{\pi}{L} \cos(\frac{\pi x}{L}) \sinh(\frac{\pi y}{L})$
$\frac{\partial^2 \psi}{\partial x^2} = -A (\frac{\pi}{L})^2 \sin(\frac{\pi x}{L}) \sinh(\frac{\pi y}{L})$
$\frac{\partial \psi}{\partial y} = A \sin(\frac{\pi x}{L}) \frac{\pi}{L} \cosh(\frac{\pi y}{L})$
$\frac{\partial^2 \psi}{\partial y^2} = A \sin(\frac{\pi x}{L}) (\frac{\pi}{L})^2 \sinh(\frac{\pi y}{L})$

$\nabla^2 \psi = \frac{\partial^2 \psi}{\partial x^2} + \frac{\partial^2 \psi}{\partial y^2} = -A (\frac{\pi}{L})^2 \sin(\frac{\pi x}{L}) \sinh(\frac{\pi y}{L}) + A (\frac{\pi}{L})^2 \sin(\frac{\pi x}{L}) \sinh(\frac{\pi y}{L}) = 0$.
This stream function satisfies Laplace's equation, so the flow is irrotational.

The velocity components are:
$u = \frac{\partial \psi}{\partial y} = A \frac{\pi}{L} \sin(\frac{\pi x}{L}) \cosh(\frac{\pi y}{L})$
$v = -\frac{\partial \psi}{\partial x} = -A \frac{\pi}{L} \cos(\frac{\pi x}{L}) \sinh(\frac{\pi y}{L})$

Boundary conditions:
If the boundaries are $y=0$ and $y=H$:
At $y=0$: $\psi = A \sin(\frac{\pi x}{L}) \sinh(0) = 0$. This is a streamline, so the bottom boundary is a streamline.
At $y=H$: $\psi = A \sin(\frac{\pi x}{L}) \sinh(\frac{\pi H}{L})$. This value is constant for a given $x$.

If the boundaries are $x=0$ and $x=L$:
At $x=0$: $\psi = A \sin(0) \sinh(\frac{\pi y}{L}) = 0$. This is a streamline.
At $x=L$: $\psi = A \sin(\pi) \sinh(\frac{\pi y}{L}) = 0$. This is also a streamline.

This stream function represents the flow between two walls at $x=0$ and $x=L$, where the flow is confined. The flow profile varies with $y$. Without more information on $A$ and $H$, it's hard to give a specific physical interpretation of the flow pattern beyond "irrotational flow between two parallel walls." The presence of $\cosh(\frac{\pi y}{L})$ in $u$ and $\sinh(\frac{\pi y}{L})$ in $v$ suggests a flow that accelerates in the $x$-direction and has a $y$-velocity component that grows with $y$ (and is zero at $y=0$).

---

### 9. Important Points to Remember

*   **Stream Function ($\psi$):**
    *   Used for 2D incompressible flow.
    *   Satisfies continuity automatically.
    *   Streamlines are curves of constant $\psi$.
    *   The difference in $\psi$ between two streamlines is the volume flow rate per unit width.
    *   Flow is irrotational if $\nabla^2 \psi = 0$.

*   **Velocity Potential ($\phi$):**
    *   Used for irrotational flow.
    *   Satisfies $\mathbf{v} = \nabla \phi$.
    *   Satisfies Laplace's equation $\nabla^2 \phi = 0$ for incompressible, irrotational flow.
    *   Equipotential lines are curves of constant $\phi$.

*   **Relationship:**
    *   Streamlines and equipotential lines are orthogonal.
    *   $\phi$ and $\psi$ are conjugate harmonic functions.

*   **Flow Nets:**
    *   Graphical representation of 2D potential flow.
    *   Composed of orthogonal streamlines and equipotential lines.
    *   Velocity is inversely proportional to the spacing between streamlines.
    *   Useful for estimating velocities and pressures, but limited to irrotational flow.

---
