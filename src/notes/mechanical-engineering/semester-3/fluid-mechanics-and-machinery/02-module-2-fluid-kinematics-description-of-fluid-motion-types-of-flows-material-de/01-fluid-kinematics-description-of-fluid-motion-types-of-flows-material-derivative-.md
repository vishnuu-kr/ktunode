---
title: "Fluid kinematics: Description of fluid motion – Types of flows, Material derivative velocity and acceleration – Streamlines, path lines and streak lines, Stream function and velocity potential function, flow net ."
subject: "FLUID MECHANICS AND MACHINERY"
module: "Module 2: Fluid kinematics: Description of fluid motion – Types of flows, Material derivative velocity and acceleration – Streamlines, path lines and streak lines, Stream function and velocity potential function, flow net ."
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462d1c"
status: "completed"
scrapedAt: "2026-05-20T17:49:23.587Z"
---
# Fluid Mechanics and Machinery: Module 2 - Fluid Kinematics

This module introduces the study of fluid motion without considering the forces causing it. We'll learn how to describe fluid flow using various mathematical tools and concepts.

**Course Outcomes Addressed:**

*   **CO2:** Classify the fluid flow and apply the principles of kinematics using the conservation of mass and momentum equations. (Knowledge Level: K3)

---

## 1. Description of Fluid Motion

### 1.1 Introduction to Fluid Kinematics

Fluid kinematics is the branch of fluid mechanics that deals with the description of fluid motion. It focuses on the **geometry of motion** and the **relationship between velocity, acceleration, and time**, without delving into the forces responsible for the motion. This is analogous to how kinematics in mechanics describes the motion of rigid bodies.

### 1.2 Ways to Describe Fluid Motion

There are two primary approaches to describing fluid motion:

*   **Lagrangian Description:** Follows the motion of individual fluid particles as they move through space and time. It's like tracking a specific molecule of water in a river.
    *   **Focus:** Tracking the history of a single fluid particle.
    *   **Variables:** Properties (velocity, pressure, etc.) are functions of the initial position of the particle ($x_0, y_0, z_0$) and time ($t$).
    *   **Analogy:** A person riding a raft down a river. They experience the flow as it changes around them, but they are moving with the flow.
    *   **Usefulness:** Useful for tracking specific elements, like pollutants or heat, but becomes complex for turbulent flows with many particles.

*   **Eulerian Description:** Focuses on the flow properties (velocity, pressure, etc.) at fixed locations in space as time progresses. It's like standing on the bank of a river and observing the water flow past a fixed point.
    *   **Focus:** Observing fluid properties at fixed points in space.
    *   **Variables:** Properties are functions of position ($x, y, z$) and time ($t$).
    *   **Analogy:** A person standing on a bridge and observing the water flow underneath. They see different water particles passing by, each with its own velocity at that moment.
    *   **Usefulness:** More commonly used in engineering applications as it's easier to measure flow properties at fixed points.

**Key Point:** Most fluid mechanics analysis uses the Eulerian description.

**Textbook Reference:**
*   Cengel & Cimbala: Chapter 4 introduces both descriptions and emphasizes the Eulerian approach.
*   Som & Som: Chapter 2 also covers the Eulerian and Lagrangian approaches.

---

## 2. Types of Flows

Fluid flows can be classified based on various characteristics:

### 2.1 Based on Time Dependence

*   **Steady Flow:** Fluid properties (velocity, pressure, density) at any point in space remain constant with time.
    *   Mathematically: $\frac{\partial V}{\partial t} = 0$, $\frac{\partial P}{\partial t} = 0$, etc., at a fixed point.
    *   **Example:** Water flowing through a pipe at a constant rate.
*   **Unsteady (Transient) Flow:** Fluid properties at any point in space change with time.
    *   Mathematically: $\frac{\partial V}{\partial t} \neq 0$ or $\frac{\partial P}{\partial t} \neq 0$, at a fixed point.
    *   **Example:** Water flow in a pipe when a valve is being opened or closed.

### 2.2 Based on Spatial Variation

*   **Uniform Flow:** Velocity and other fluid properties are constant throughout the flow field. That is, they do not change with position.
    *   Mathematically: $\frac{\partial V}{\partial x} = 0$, $\frac{\partial V}{\partial y} = 0$, $\frac{\partial V}{\partial z} = 0$ (where V is velocity vector).
    *   **Example:** Flow in a straight, wide rectangular channel with a constant depth.
*   **Non-uniform Flow:** Velocity and other fluid properties change from point to point in the flow field.
    *   Mathematically: $\frac{\partial V}{\partial x} \neq 0$ or $\frac{\partial V}{\partial y} \neq 0$ or $\frac{\partial V}{\partial z} \neq 0$.
    *   **Example:** Flow in a converging nozzle, flow in a pipe with a bend.

### 2.3 Combined Classifications

*   **Steady Uniform Flow:** Properties are constant in space and time. (Rare in real-world scenarios).
*   **Unsteady Uniform Flow:** Properties are constant in space but change with time.
*   **Steady Non-uniform Flow:** Properties vary in space but are constant in time. (Most common in engineering, e.g., flow in a long pipe with gradual widening).
*   **Unsteady Non-uniform Flow:** Properties vary in both space and time. (Most complex, e.g., water hammer in pipes).

### 2.4 Based on Compressibility

*   **Incompressible Flow:** Density of the fluid remains constant throughout the flow field.
    *   Assumption: $\rho = \text{constant}$.
    *   **Example:** Most liquids and gases at low Mach numbers (typically < 0.3).
*   **Compressible Flow:** Density of the fluid changes significantly during the flow.
    *   **Example:** High-speed gas flows (e.g., flow through aircraft wings, rocket nozzles).

### 2.5 Based on Viscosity

*   **Viscous Flow:** The effects of viscosity are significant and cannot be ignored.
    *   Viscous forces play a crucial role in momentum transfer and energy dissipation.
    *   **Example:** Flow in pipes, boundary layers.
*   **Inviscid (Potential) Flow:** Viscous effects are negligible.
    *   Often a useful approximation for flows away from solid boundaries or at high Reynolds numbers.
    *   **Example:** Flow around streamlined bodies at high Reynolds numbers, flow in the core of a turbulent pipe flow.

### 2.6 Based on Flow Pattern

*   **Laminar Flow:** Fluid particles move in smooth, orderly layers (laminae) with minimal mixing between layers.
    *   Characterized by low Reynolds numbers.
    *   **Example:** Slow flow of honey or glycerin.
*   **Turbulent Flow:** Fluid particles move in a chaotic, irregular manner with significant mixing.
    *   Characterized by high Reynolds numbers.
    *   **Example:** Fast flow of water in a river, air flow over an airplane wing.
*   **Transitional Flow:** Flow regime between laminar and turbulent flow, exhibiting characteristics of both.

**Important Point:** The Reynolds number ($Re = \frac{\rho V L}{\mu}$) is a dimensionless parameter that helps determine whether a flow is likely to be laminar or turbulent.

**Textbook Reference:**
*   Cengel & Cimbala: Chapter 4.2 discusses classifications of fluid flow.
*   Bansal R.K.: Chapter 2 covers types of fluid flow in detail.

---

## 3. Material Derivative (Total Derivative)

The material derivative (or total derivative) is crucial for describing how properties change for a specific fluid particle moving along a streamline. It accounts for both the change of the property with time at a fixed point (local derivative) and the change of the property due to the particle's movement to a new location where the property might be different (convective derivative).

For a property $\psi(x, y, z, t)$, the material derivative $D\psi/Dt$ is defined as:

$$ \frac{D\psi}{Dt} = \frac{\partial \psi}{\partial t} + u \frac{\partial \psi}{\partial x} + v \frac{\partial \psi}{\partial y} + w \frac{\partial \psi}{\partial z} $$

where:
*   $\frac{\partial \psi}{\partial t}$ is the **local rate of change** (how $\psi$ changes with time at a fixed point).
*   $u \frac{\partial \psi}{\partial x} + v \frac{\partial \psi}{\partial y} + w \frac{\partial \psi}{\partial z}$ is the **convective rate of change** (how $\psi$ changes due to the particle moving to a new location).
*   $(u, v, w)$ are the components of the velocity vector $\mathbf{V}$.

In vector notation:

$$ \frac{D\psi}{Dt} = \frac{\partial \psi}{\partial t} + \mathbf{V} \cdot \nabla \psi $$

where $\nabla \psi = \left(\frac{\partial \psi}{\partial x}, \frac{\partial \psi}{\partial y}, \frac{\partial \psi}{\partial z}\right)$.

### 3.1 Material Derivative of Velocity (Acceleration)

Applying the material derivative to the velocity vector $\mathbf{V} = (u, v, w)$, we get the acceleration of a fluid particle:

$$ \mathbf{a} = \frac{D\mathbf{V}}{Dt} = \frac{\partial \mathbf{V}}{\partial t} + (\mathbf{V} \cdot \nabla) \mathbf{V} $$

In component form:

$$ a_x = \frac{Du}{Dt} = \frac{\partial u}{\partial t} + u \frac{\partial u}{\partial x} + v \frac{\partial u}{\partial y} + w \frac{\partial u}{\partial z} $$
$$ a_y = \frac{Dv}{Dt} = \frac{\partial v}{\partial t} + u \frac{\partial v}{\partial x} + v \frac{\partial v}{\partial y} + w \frac{\partial v}{\partial z} $$
$$ a_z = \frac{Dw}{Dt} = \frac{\partial w}{\partial t} + u \frac{\partial w}{\partial x} + v \frac{\partial w}{\partial y} + w \frac{\partial w}{\partial z} $$

The acceleration $\mathbf{a}$ has two components:

*   **Local acceleration:** $\frac{\partial \mathbf{V}}{\partial t}$. This is non-zero only for unsteady flows.
*   **Convective acceleration:** $(\mathbf{V} \cdot \nabla) \mathbf{V}$. This is non-zero if the velocity changes from point to point, even in a steady flow.

**Example:**
Consider a steady flow where the velocity in the x-direction is $u = Ax$ and $v=w=0$.
Here, the flow is steady ($\frac{\partial u}{\partial t} = 0$) but non-uniform in the x-direction ($\frac{\partial u}{\partial x} = A \neq 0$).

The acceleration of a fluid particle is:
$a_x = \frac{\partial u}{\partial t} + u \frac{\partial u}{\partial x} + v \frac{\partial u}{\partial y} + w \frac{\partial u}{\partial z}$
$a_x = 0 + (Ax)(A) + 0 + 0 = A^2x$

This shows that even in a steady flow, a particle can accelerate if it moves to a region of higher velocity.

**Textbook Reference:**
*   Cengel & Cimbala: Chapter 4.3, explaining the material derivative and acceleration.
*   Som & Som: Chapter 2.3 covers the acceleration of fluid particles.

---

## 4. Streamlines, Path Lines, and Streak Lines

These are graphical representations used to visualize fluid motion.

### 4.1 Streamlines

*   **Definition:** An imaginary line drawn in the flow field such that the velocity vector of a fluid particle at any point on the line is tangent to the line at that point.
*   **Mathematical Definition:** For a flow in 2D, a streamline is defined by the differential equation:
    $$ \frac{dx}{u} = \frac{dy}{v} = \frac{dz}{w} $$
    where $(u, v, w)$ is the velocity vector at $(x, y, z)$.
*   **Key Properties:**
    *   Streamlines are instantaneous representations of the flow field.
    *   In steady flow, streamlines do not change with time.
    *   In unsteady flow, streamlines change with time.
    *   Streamlines cannot cross each other (except at stagnation points).
    *   The spacing between streamlines indicates the relative velocity: closer spacing implies higher velocity, and wider spacing implies lower velocity.

**Example:**
Consider a 2D flow with velocity components $u = 2x$ and $v = -2y$.
The streamline equation is $\frac{dx}{2x} = \frac{dy}{-2y}$.
Integrating, we get $\ln(x) = -\ln(y) + C$, which simplifies to $xy = C'$, representing hyperbolas.

### 4.2 Path Lines

*   **Definition:** The actual path traced by a single fluid particle as it moves through the flow field over a period of time.
*   **Lagrangian Concept:** Path lines are inherently Lagrangian. To define a path line, we need to know the velocity of a specific particle as a function of time.
*   **Key Properties:**
    *   Path lines are the actual trajectories of fluid particles.
    *   In steady flow, the streamline and path line for a given particle coincide.
    *   In unsteady flow, streamlines and path lines can be different.

**Example:**
Consider a flow where velocity components depend on time: $u(t) = A \cos(\omega t)$, $v=0$.
If a particle starts at $x=0$ at $t=0$, its position $x(t)$ is found by integrating $dx/dt = u(t)$:
$\int_0^{x(t)} dx = \int_0^t A \cos(\omega \tau) d\tau$
$x(t) = \frac{A}{\omega} \sin(\omega t)$. This describes the path line, which is oscillatory.

### 4.3 Streak Lines

*   **Definition:** The locus of all fluid particles that have passed through a particular fixed point in space at different instants of time.
*   **Visualization Technique:** Often visualized by injecting dye at a fixed point in the flow.
*   **Key Properties:**
    *   Streak lines are Eulerian in nature.
    *   In steady flow, streak lines, streamlines, and path lines coincide.
    *   In unsteady flow, they can be distinct.

**Example:**
Imagine a nozzle with pulsating flow. A streak line would show the trails of all the fluid that has exited the nozzle up to the current moment, forming a wobbly line if the flow is unsteady.

**Summary of Differences:**
| Feature      | Streamline                               | Path Line                                    | Streak Line                                   |
| :----------- | :--------------------------------------- | :------------------------------------------- | :-------------------------------------------- |
| **Definition** | Tangent to velocity vector at a point    | Trajectory of a single particle              | Locus of particles passing a point            |
| **Nature**   | Instantaneous, Eulerian                  | Lagrangian                                   | Eulerian                                      |
| **Steady Flow** | Coincides with path & streak lines       | Coincides with streamline & streak lines     | Coincides with streamline & path lines        |
| **Unsteady Flow** | Changes with time, can differ from others | Actual trajectory, can differ from others    | Can differ from others, visualized by dye     |

**Textbook Reference:**
*   Cengel & Cimbala: Chapter 4.4, providing definitions and visual examples of streamlines, path lines, and streak lines.
*   Bansal R.K.: Chapter 2.4 discusses these visualization tools.

---

## 5. Stream Function and Velocity Potential Function

These are mathematical tools used to simplify the analysis of **2D, incompressible, irrotational flows**.

### 5.1 Stream Function ($\psi$)

*   **Applicability:** For 2D, incompressible, and often steady flows.
*   **Definition:** A scalar function $\psi(x, y)$ such that its partial derivatives with respect to position represent the velocity components.
    *   $u = \frac{\partial \psi}{\partial y}$
    *   $v = -\frac{\partial \psi}{\partial x}$
*   **Derivation from Continuity Equation:** For 2D incompressible flow: $\frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} = 0$.
    Substituting the stream function definition:
    $\frac{\partial}{\partial x}\left(\frac{\partial \psi}{\partial y}\right) + \frac{\partial}{\partial y}\left(-\frac{\partial \psi}{\partial x}\right) = 0$
    $\frac{\partial^2 \psi}{\partial x \partial y} - \frac{\partial^2 \psi}{\partial y \partial x} = 0$. This equation is always satisfied, meaning any function $\psi(x, y)$ defines a 2D incompressible flow.

*   **Physical Significance:**
    *   The value of $\psi$ is constant along a streamline. Thus, streamlines are curves of constant $\psi$.
    *   The difference in the stream function between two streamlines is equal to the volume flow rate per unit width between them. For two streamlines $\psi_1$ and $\psi_2$:
        $$ \dot{Q} = \int_{\psi_1}^{\psi_2} (\mathbf{V} \times d\mathbf{A}) = \int_{\psi_1}^{\psi_2} (v dx - u dy) $$
        Using the Cauchy-Riemann equations ($u = \partial\psi/\partial y$, $v = -\partial\psi/\partial x$):
        $v dx - u dy = (-\frac{\partial \psi}{\partial x}) dx - (\frac{\partial \psi}{\partial y}) dy = -(\frac{\partial \psi}{\partial x} dx + \frac{\partial \psi}{\partial y} dy) = -d\psi$
        So, $\dot{Q} = -\int_{\psi_1}^{\psi_2} d\psi = -(\psi_2 - \psi_1) = \psi_1 - \psi_2$.
        This means that if we define $\psi$ such that flow moves from lower $\psi$ to higher $\psi$, then $\Delta Q = \psi_2 - \psi_1$.

*   **Usefulness:**
    *   Automatically satisfies the continuity equation for 2D incompressible flow.
    *   Streamlines are easily identified as curves of constant $\psi$.

**Example:**
If $\psi = Ay^2$, then $u = \frac{\partial \psi}{\partial y} = 2Ay$ and $v = -\frac{\partial \psi}{\partial x} = 0$.
This represents a flow where velocity is only in the x-direction and varies linearly with y. The streamlines are horizontal lines ($y = \text{constant}$).

### 5.2 Velocity Potential Function ($\phi$)

*   **Applicability:** For 2D or 3D, **incompressible, irrotational flows**.
*   **Definition:** A scalar function $\phi(x, y, z)$ such that its gradient gives the velocity vector.
    *   $\mathbf{V} = \nabla \phi$
    *   $u = \frac{\partial \phi}{\partial x}$, $v = \frac{\partial \phi}{\partial y}$, $w = \frac{\partial \phi}{\partial z}$
*   **Derivation from Irrotationality:** A flow is irrotational if its vorticity is zero. For a 2D flow, vorticity is $\zeta_z = \frac{\partial v}{\partial x} - \frac{\partial u}{\partial y}$.
    Substituting the velocity potential definition:
    $\zeta_z = \frac{\partial}{\partial x}\left(\frac{\partial \phi}{\partial y}\right) - \frac{\partial}{\partial y}\left(\frac{\partial \phi}{\partial x}\right) = \frac{\partial^2 \phi}{\partial x \partial y} - \frac{\partial^2 \phi}{\partial y \partial x} = 0$.
    This means that any function $\phi(x, y)$ satisfying $\nabla^2 \phi = 0$ (Laplace's equation) defines an irrotational flow.

*   **Relationship with Stream Function (for 2D flow):**
    If a flow is both 2D incompressible and irrotational, then both stream function $\psi$ and velocity potential $\phi$ exist. They are related by Cauchy-Riemann equations:
    *   $u = \frac{\partial \psi}{\partial y} = \frac{\partial \phi}{\partial x}$
    *   $v = -\frac{\partial \psi}{\partial x} = \frac{\partial \phi}{\partial y}$
    This implies that $\psi$ and $\phi$ are conjugate harmonic functions.

*   **Physical Significance:**
    *   Lines of constant velocity potential ($\phi$) are called **equipotential lines**.
    *   The velocity vector is normal to the equipotential lines.
    *   For a stream function $\psi$, the velocity is tangent to the streamline. Since $\nabla \psi$ is normal to the lines of constant $\psi$, and $\nabla \phi$ is tangent to the lines of constant $\phi$, the relationship implies that streamlines are orthogonal to equipotential lines.

*   **Usefulness:**
    *   Automatically satisfies the continuity and irrotationality conditions for 2D incompressible flow.
    *   Helps in solving fluid flow problems using the Laplace equation, which has well-established solution methods.

**Example:**
For a uniform flow in the x-direction with velocity $U$, $\mathbf{V} = (U, 0)$.
$u = U, v = 0$.
Velocity potential: $\phi = Ux$ (since $\frac{\partial \phi}{\partial x} = U$ and $\frac{\partial \phi}{\partial y} = 0$).
Stream function: $\psi = Uy$ (since $\frac{\partial \psi}{\partial y} = U$ and $-\frac{\partial \psi}{\partial x} = 0$).
The streamlines are $y = \text{constant}$ (horizontal lines).
The equipotential lines are $x = \text{constant}$ (vertical lines).
They are orthogonal, as expected.

**Textbook Reference:**
*   Cengel & Cimbala: Chapter 4.5 covers stream functions and velocity potential.
*   Som & Som: Chapter 2.5 provides a thorough explanation of stream function and velocity potential.
*   Bansal R.K.: Chapter 2.8 and 2.9 detail these concepts.

---

## 6. Flow Net

*   **Definition:** A graphical representation of a 2D, irrotational, incompressible flow field, consisting of a set of streamlines and equipotential lines.
*   **Construction:**
    *   Streamlines are drawn based on the flow geometry and boundary conditions.
    *   Equipotential lines are drawn such that they are orthogonal to the streamlines and have constant potential differences between them.
    *   The spacing of both streamlines and equipotential lines is adjusted so that the elements formed between adjacent lines are approximately squares.
*   **Key Properties:**
    *   Consists of intersecting curves: streamlines and equipotential lines.
    *   Streamlines are lines of constant $\psi$.
    *   Equipotential lines are lines of constant $\phi$.
    *   Streamlines and equipotential lines are mutually orthogonal ($\psi$ and $\phi$ are conjugate harmonic functions).
    *   The network formed by these lines is called a flow net.
*   **Uses:**
    *   **Visualization:** Provides a clear picture of the flow pattern.
    *   **Qualitative Analysis:** Helps understand the flow behavior, identify regions of high and low velocity, and stagnation points.
    *   **Quantitative Analysis (Approximate):**
        *   **Velocity:** The velocity is approximately proportional to the spacing between streamlines. Where streamlines are close, velocity is high. $V \approx \frac{\Delta Q / W}{\Delta s}$, where $\Delta Q$ is the flow between streamlines, $W$ is the width, and $\Delta s$ is the spacing. If the flow net is constructed with uniform $\Delta\psi$ and $\Delta\phi$ and approximated by squares, then $\Delta s \approx \Delta n$ (where $\Delta n$ is spacing between equipotential lines). Velocity is inversely proportional to the spacing between streamlines.
        *   **Pressure Distribution:** Using Bernoulli's equation, the pressure can be inferred from the velocity distribution. Lower pressure is found in regions of higher velocity (closer streamlines).
        *   **Seepage Analysis:** Flow nets are widely used in groundwater hydrology to analyze seepage under hydraulic structures like dams. The flow rate can be calculated as $Q = K H \frac{N_f}{N_d}$, where $K$ is the permeability, $H$ is the head difference, $N_f$ is the number of flow channels, and $N_d$ is the number of equipotential drops.

**Example:**
Flow around a cylinder: A flow net would show streamlines wrapping around the cylinder, becoming straighter further away. Equipotential lines would be perpendicular to the streamlines. At the front and rear stagnation points, the velocity is zero. The velocity is highest at the sides of the cylinder.

**Important Point:** Flow nets are applicable to 2D, incompressible, steady, and irrotational flows.

**Textbook Reference:**
*   Cengel & Cimbala: Chapter 4.6 discusses flow nets and their applications.
*   Som & Som: Chapter 2.6 explains the construction and use of flow nets.
*   Bansal R.K.: Chapter 2.10 covers flow nets and their applications in seepage.

---

## Practice Questions and Answers

**Q1. Differentiate between steady and unsteady flow. Provide an example for each.**

**Answer:**
*   **Steady Flow:** Fluid properties (velocity, pressure, density) at any point in space remain constant with time. Example: Water flowing through a pipe at a constant flow rate.
*   **Unsteady Flow:** Fluid properties at any point in space change with time. Example: Water flow in a pipe when a valve is being opened or closed.

**Q2. What is the difference between a streamline and a path line? When do they coincide?**

**Answer:**
*   **Streamline:** An imaginary line tangent to the velocity vector at every point at a given instant. It represents the instantaneous direction of flow.
*   **Path Line:** The actual trajectory traced by a single fluid particle over time.
*   **Coincidence:** In **steady flow**, streamlines and path lines coincide. In unsteady flow, they can be different.

**Q3. For a 2D incompressible flow, if $u = 2xy$ and $v = y^2 - x^2$, determine if the flow is irrotational.**

**Answer:**
For irrotational flow, $\frac{\partial v}{\partial x} - \frac{\partial u}{\partial y} = 0$.
Given: $u = 2xy$, $v = y^2 - x^2$.
$\frac{\partial u}{\partial y} = 2x$
$\frac{\partial v}{\partial x} = -2x$
$\frac{\partial v}{\partial x} - \frac{\partial u}{\partial y} = -2x - 2x = -4x$.
Since $-4x \neq 0$, the flow is **rotational**.

**Q4. A 2D flow field is described by the velocity potential $\phi = x^2 - y^2$. Determine the velocity components and the stream function.**

**Answer:**
Given $\phi = x^2 - y^2$.
Velocity components:
$u = \frac{\partial \phi}{\partial x} = 2x$
$v = \frac{\partial \phi}{\partial y} = -2y$
This is a uniform flow in the x-direction that accelerates in the x-direction and decelerates in the y-direction.

To find the stream function $\psi$:
We know $u = \frac{\partial \psi}{\partial y}$ and $v = -\frac{\partial \psi}{\partial x}$.
From $u = 2x$: $\frac{\partial \psi}{\partial y} = 2x$. Integrating with respect to y: $\psi = 2xy + f(x)$.
From $v = -2y$: $-\frac{\partial \psi}{\partial x} = -2y \implies \frac{\partial \psi}{\partial x} = 2y$.
Differentiating $\psi = 2xy + f(x)$ with respect to x: $\frac{\partial \psi}{\partial x} = 2y + f'(x)$.
Equating this with $2y$: $2y + f'(x) = 2y \implies f'(x) = 0$.
Integrating $f'(x) = 0$ with respect to x: $f(x) = C$ (a constant).
So, the stream function is $\psi = 2xy + C$. Let's take $C=0$, so $\psi = 2xy$.
The streamlines are hyperbolas ($xy = \text{constant}$).

**Q5. What are the conditions for the existence of a stream function and a velocity potential function?**

**Answer:**
*   **Stream Function ($\psi$):** Exists for any 2D, incompressible flow (steady or unsteady).
*   **Velocity Potential Function ($\phi$):** Exists for any 2D or 3D, **irrotational** flow (steady or unsteady) and is incompressible.

**Q6. Describe the primary use of a flow net in fluid mechanics.**

**Answer:**
A flow net is used for visualizing 2D, irrotational, incompressible flow fields. It helps in understanding flow patterns, determining velocity and pressure distributions qualitatively, and approximately quantitatively. It is also used in seepage analysis.

---

## Important Points to Remember

*   **Eulerian vs. Lagrangian:** Most fluid mechanics problems use the Eulerian description.
*   **Material Derivative:** Accounts for both local and convective changes experienced by a fluid particle.
*   **Acceleration:** Has local (time-dependent) and convective (spatial-dependent) components.
*   **Streamlines, Path Lines, Streak Lines:** Visualizations of flow. They coincide in steady flow but can differ in unsteady flow.
*   **Stream Function ($\psi$):** Useful for 2D incompressible flows, automatically satisfies continuity. Curves of constant $\psi$ are streamlines. $\Delta Q = \psi_2 - \psi_1$.
*   **Velocity Potential ($\phi$):** Useful for 2D/3D incompressible, **irrotational** flows. $\mathbf{V} = \nabla \phi$. Satisfies Laplace's equation. Lines of constant $\phi$ are equipotential lines.
*   **Flow Net:** A grid of streamlines and equipotential lines for 2D, incompressible, irrotational flows. Helps in qualitative analysis and approximate quantitative predictions.

---
This set of notes covers the fundamental concepts of fluid kinematics, aligning with the learning outcomes and course outcomes for Module 2. The examples and practice questions are designed to reinforce understanding and application of these principles.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
