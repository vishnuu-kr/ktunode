---
title: "– Measuring instruments – Pitot tube, Orificemeter, Venturimeter, Rectangular and Triangular Notches-(notches Problems not required)."
subject: "FLUID MECHANICS AND MACHINERY"
module: "Module 2: Fluid kinematics: Description of fluid motion – Types of flows, Material derivative velocity and acceleration – Streamlines, path lines and streak lines, Stream function and velocity potential function, flow net ."
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462d1e"
status: "completed"
scrapedAt: "2026-05-20T17:49:25.021Z"
---
# Fluid Mechanics and Machinery: Module 2 - Fluid Kinematics & Measuring Instruments

This module delves into the fundamental concepts of fluid kinematics, which describes the motion of fluids without considering the forces causing the motion. We will then explore various instruments used to measure fluid flow.

**Course Outcomes Alignment:**

*   **CO2:** Classify fluid flow and apply kinematic principles using conservation of mass. This module directly addresses flow classification and the kinematic descriptions necessary for applying conservation of mass.

**Learning Outcomes Addressed:**

*   Understand the description of fluid motion.
*   Differentiate between various types of fluid flows.
*   Comprehend the concept of the material derivative and its application to velocity and acceleration.
*   Distinguish between streamlines, path lines, and streak lines.
*   Grasp the concepts of stream function and velocity potential function and their applications.
*   Understand the principle and application of flow nets.
*   Understand the working principle and application of Pitot tube, Orificemeter, Venturimeter, Rectangular and Triangular Notches.

---

## 2.1 Description of Fluid Motion

Fluid motion can be described in two primary ways:

### 2.1.1 Eulerian and Lagrangian Approaches

*   **Eulerian Approach:** This is the most common approach. It focuses on fixed points in space and observes the fluid particles passing through these points.
    *   **Key Concept:** Properties of the fluid (velocity, pressure, density) are described as functions of space and time, e.g., $\vec{v}(x, y, z, t)$.
    *   **Analogy:** Imagine standing on a bridge and observing the river flow past you. You note the speed and direction of the water at your specific location.
    *   **Textbook Reference:** Cengel & Cimbala (2013) and Som & Cimbala (2011) extensively use the Eulerian approach.

*   **Lagrangian Approach:** This approach follows individual fluid particles as they move through space and time.
    *   **Key Concept:** Properties are described as functions of the initial position of the particle and time, e.g., $\vec{v}(x_0, y_0, z_0, t)$.
    *   **Analogy:** Imagine attaching a small buoy to a specific water parcel and tracking its journey down the river.
    *   **Textbook Reference:** While less common for general flow description, it's crucial for understanding turbulence and particle dispersion. White (2003) might touch upon this.

---

### 2.1.2 Types of Flows

Flows can be classified based on various criteria:

#### 2.1.2.1 Based on Velocity

*   **Steady Flow:** Fluid properties (velocity, density, pressure) at any point in space do not change with time.
    *   $\frac{\partial \phi}{\partial t} = 0$ where $\phi$ represents any fluid property.
    *   **Example:** Water flowing through a pipe at a constant rate.
    *   **Important Point:** This does *not* mean properties are the same everywhere in space.

*   **Unsteady (Transient) Flow:** Fluid properties at any point in space change with time.
    *   $\frac{\partial \phi}{\partial t} \neq 0$.
    *   **Example:** Water flow in a pipe when a valve is being opened or closed.

#### 2.1.2.2 Based on Velocity Variation in Space

*   **Uniform Flow:** Velocity is the same at all points in space at a given instant.
    *   $\frac{\partial \vec{v}}{\partial s} = 0$ where $s$ is the distance along any direction.
    *   **Example:** Idealized flow in a straight, wide channel with no friction.

*   **Non-uniform Flow:** Velocity varies from point to point in space at a given instant.
    *   $\frac{\partial \vec{v}}{\partial s} \neq 0$.
    *   **Example:** Flow in a converging nozzle, or flow near the walls of a pipe due to friction.

#### 2.1.2.3 Combined Classifications

Flows are often described by combining these classifications:

*   **Steady Uniform Flow:** Velocity is constant with time and space. (Idealized)
*   **Steady Non-uniform Flow:** Velocity is constant with time but varies with space. (e.g., flow through a nozzle)
*   **Unsteady Uniform Flow:** Velocity varies with time but is constant with space. (Rare)
*   **Unsteady Non-uniform Flow:** Velocity varies with both time and space. (Most common in real-world scenarios)

#### 2.1.2.4 Based on Compressibility

*   **Incompressible Flow:** Density of the fluid remains constant throughout the flow.
    *   $\rho = \text{constant}$.
    *   **Assumption:** Valid for liquids and gases at low Mach numbers (typically Ma < 0.3).
    *   **Example:** Water flow in most engineering applications.

*   **Compressible Flow:** Density of the fluid changes significantly during the flow.
    *   $\rho \neq \text{constant}$.
    *   **Example:** High-speed gas flows (aerodynamics), flow in turbines.

#### 2.1.2.5 Based on Viscosity Effects

*   **Viscous Flow:** Viscosity plays a significant role and cannot be neglected.
    *   **Example:** Flow in pipes, boundary layers.

*   **Inviscid (Ideal) Flow:** Viscosity is assumed to be zero.
    *   **Assumption:** Used for simplification, especially in outer flow regions away from boundaries.
    *   **Example:** Flow far from the surfaces of an airplane wing.

#### 2.1.2.6 Based on Dimensionality

*   **One-Dimensional Flow:** Velocity and other properties vary only in one spatial direction.
    *   **Example:** Flow through a long pipe where changes across the diameter are neglected.

*   **Two-Dimensional Flow:** Velocity and other properties vary in two spatial directions.
    *   **Example:** Flow over a wide airfoil (neglecting spanwise variation).

*   **Three-Dimensional Flow:** Velocity and other properties vary in all three spatial directions.
    *   **Example:** Flow around a sphere.

#### 2.1.2.7 Based on Flow Pattern

*   **Laminar Flow:** Fluid particles move in smooth, orderly layers (laminae) with little or no mixing between them.
    *   **Characteristics:** Low velocities, high viscosity, or small characteristic lengths.
    *   **Re < 2100 (for flow in a pipe).** (Reynolds Number - introduced in later modules but good to be aware of the transition)
    *   **Example:** Very slow flow of honey.

*   **Turbulent Flow:** Fluid particles move in a chaotic, irregular manner with significant mixing.
    *   **Characteristics:** High velocities, low viscosity, or large characteristic lengths.
    *   **Re > 4000 (for flow in a pipe).**
    *   **Example:** Water flow in a river, air flow around an aircraft.

*   **Transitional Flow:** Flow regime between laminar and turbulent flow.

#### 2.1.2.8 Rotational and Irrotational Flow

*   **Rotational Flow:** Fluid elements rotate about their own center of mass as they move.
    *   **Key Concept:** Vorticity is non-zero.
    *   **Example:** Flow near a rotating shaft, vortex flows.

*   **Irrotational Flow:** Fluid elements do not rotate about their own center of mass.
    *   **Key Concept:** Vorticity is zero everywhere.
    *   **Simplification:** Allows the use of velocity potential function.
    *   **Example:** Idealized flow far from boundaries.

---

### 2.1.3 Material Derivative (Total Derivative, Acceleration Derivative)

The material derivative describes the rate of change of a property of a fluid particle as it moves. It accounts for both the local change in time and the change due to the particle's movement in a region where the property varies.

Let $\phi = \phi(x, y, z, t)$ be a fluid property. For a fluid particle moving along a path defined by $\vec{r}(t) = (x(t), y(t), z(t))$, the rate of change of $\phi$ following the particle is:

$$ \frac{D\phi}{Dt} = \frac{\partial \phi}{\partial t} + \frac{\partial \phi}{\partial x} \frac{dx}{dt} + \frac{\partial \phi}{\partial y} \frac{dy}{dt} + \frac{\partial \phi}{\partial z} \frac{dt}{dt} $$

Since $\frac{dx}{dt} = u$, $\frac{dy}{dt} = v$, and $\frac{dz}{dt} = w$ (velocity components), we can write:

$$ \frac{D\phi}{Dt} = \frac{\partial \phi}{\partial t} + u \frac{\partial \phi}{\partial x} + v \frac{\partial \phi}{\partial y} + w \frac{\partial \phi}{\partial z} $$

In vector form, this is:

$$ \frac{D\phi}{Dt} = \frac{\partial \phi}{\partial t} + (\vec{v} \cdot \nabla) \phi $$

where $\nabla = \frac{\partial}{\partial x} \hat{i} + \frac{\partial}{\partial y} \hat{j} + \frac{\partial}{\partial z} \hat{k}$ is the gradient operator.

#### 2.1.3.1 Material Derivative of Velocity (Acceleration)

The acceleration of a fluid particle is the material derivative of its velocity vector $\vec{v} = (u, v, w)$:

$$ \vec{a} = \frac{D\vec{v}}{Dt} = \frac{\partial \vec{v}}{\partial t} + (\vec{v} \cdot \nabla) \vec{v} $$

In component form:

$$ a_x = \frac{Du}{Dt} = \frac{\partial u}{\partial t} + u \frac{\partial u}{\partial x} + v \frac{\partial u}{\partial y} + w \frac{\partial u}{\partial z} $$
$$ a_y = \frac{Dv}{Dt} = \frac{\partial v}{\partial t} + u \frac{\partial v}{\partial x} + v \frac{\partial v}{\partial y} + w \frac{\partial v}{\partial z} $$
$$ a_z = \frac{Dw}{Dt} = \frac{\partial w}{\partial t} + u \frac{\partial w}{\partial x} + v \frac{\partial w}{\partial y} + w \frac{\partial w}{\partial z} $$

*   $\frac{\partial \vec{v}}{\partial t}$: Local acceleration (change in velocity at a fixed point due to unsteadiness).
*   $(\vec{v} \cdot \nabla) \vec{v}$: Convective acceleration (change in velocity due to the particle moving to a different location with a different velocity).

**Example:** Consider a fluid flow with velocity $\vec{v} = (2xt, y^2, 0)$.
Find the acceleration of a fluid particle at $(1, 2, 0)$ at $t=1$.

Here, $u=2xt$, $v=y^2$, $w=0$.
At $(1, 2, 0)$ and $t=1$: $u=2(1)(1)=2$, $v=2^2=4$, $w=0$.

Local acceleration:
$\frac{\partial u}{\partial t} = 2x$, $\frac{\partial v}{\partial t} = 0$, $\frac{\partial w}{\partial t} = 0$.
At $(1, 2, 0, 1)$: $\frac{\partial u}{\partial t} = 2(1) = 2$.

Convective acceleration:
$\frac{\partial u}{\partial x} = 2t$, $\frac{\partial u}{\partial y} = 0$, $\frac{\partial u}{\partial z} = 0$
$\frac{\partial v}{\partial x} = 0$, $\frac{\partial v}{\partial y} = 2y$, $\frac{\partial v}{\partial z} = 0$
$\frac{\partial w}{\partial x} = 0$, $\frac{\partial w}{\partial y} = 0$, $\frac{\partial w}{\partial z} = 0$

At $(1, 2, 0, 1)$:
$u \frac{\partial u}{\partial x} = 2 \times (2 \times 1) = 4$
$v \frac{\partial v}{\partial y} = 4 \times (2 \times 2) = 16$

Total acceleration:
$a_x = \frac{\partial u}{\partial t} + u \frac{\partial u}{\partial x} + v \frac{\partial u}{\partial y} + w \frac{\partial u}{\partial z} = 2 + 4 + 0 + 0 = 6$
$a_y = \frac{\partial v}{\partial t} + u \frac{\partial v}{\partial x} + v \frac{\partial v}{\partial y} + w \frac{\partial v}{\partial z} = 0 + 2(0) + 4(4) + 0(0) = 16$
$a_z = \frac{\partial w}{\partial t} + u \frac{\partial w}{\partial x} + v \frac{\partial w}{\partial y} + w \frac{\partial w}{\partial z} = 0 + 2(0) + 4(0) + 0(0) = 0$

So, $\vec{a} = (6, 16, 0)$.

**Important Point:** For steady flow, $\frac{\partial \phi}{\partial t} = 0$. The material derivative then only represents the convective change.

---

### 2.1.4 Streamlines, Path Lines, and Streak Lines

These are graphical representations of fluid motion.

#### 2.1.4.1 Streamlines

*   **Definition:** A curve that is everywhere tangent to the instantaneous velocity vector of the fluid.
*   **Key Concept:** In a steady flow, streamlines do not change with time. In unsteady flow, they change moment by moment.
*   **Mathematical Representation:** For a 2D flow with velocity components $u$ and $v$, the streamline equation is given by:
    $$ \frac{dx}{u} = \frac{dy}{v} = \frac{dz}{w} $$
    For 2D flow: $\frac{dx}{u} = \frac{dy}{v}$.
*   **Important Point:** Streamlines cannot cross each other in a single-phase flow. The amount of fluid flowing between two adjacent streamlines (in a 2D representation) is constant if they are drawn with a specific spacing related to the stream function.
*   **Analogy:** Imagine taking a snapshot of the flow; the streamlines represent the direction of flow at that instant.
*   **Textbook Reference:** All textbooks (Cengel & Cimbala, Som & Cimbala, Bansal R.K., White F.M.) cover this concept thoroughly.

#### 2.1.4.2 Path Lines

*   **Definition:** The actual path traced by a fluid particle as it moves with the flow.
*   **Key Concept:** This is the Lagrangian description of motion.
*   **Example:** If you inject a dye particle into a flow and track its trajectory, that is its path line.
*   **Important Point:** In steady flow, streamlines and path lines coincide. In unsteady flow, they generally do not.

#### 2.1.4.3 Streak Lines

*   **Definition:** The locus of all fluid particles that have passed through a particular point in space at any time.
*   **Key Concept:** It's what you would see if you continuously inject dye from a single point.
*   **Example:** Imagine a smoke trail from a chimney.
*   **Important Point:** Streak lines also generally differ from streamlines and path lines in unsteady flows. They can be used to visualize unsteady flow patterns.

**Summary Table:**

| Feature       | Streamline                                  | Path Line                                      | Streak Line                                       |
| :------------ | :------------------------------------------ | :--------------------------------------------- | :------------------------------------------------ |
| **Definition**| Tangent to velocity vector at an instant.   | Path of a single particle.                     | Locus of particles passing through a point.       |
| **Perspective**| Eulerian (observing fixed points).          | Lagrangian (following a particle).             | Eulerian (observing particles from a source).   |
| **Steady Flow**| Coincides with path line and streak line. | Coincides with streamline and streak line.     | Coincides with streamline and path line.          |
| **Unsteady Flow**| Changes moment to moment.                   | Actual trajectory of a particle.               | Visualizes instantaneous flow from a source.      |

---

### 2.1.5 Stream Function ($\psi$)

The stream function is a scalar function used to describe two-dimensional, incompressible, irrotational flows. It simplifies the analysis by automatically satisfying the continuity equation for such flows.

*   **Definition:** For a 2D flow with velocity components $u$ and $v$, the stream function $\psi(x, y, t)$ is defined such that:
    $$ u = \frac{\partial \psi}{\partial y} \quad \text{and} \quad v = -\frac{\partial \psi}{\partial x} $$
    For steady flow, the definition is often:
    $$ u = \frac{\partial \psi}{\partial y} \quad \text{and} \quad v = -\frac{\partial \psi}{\partial x} $$
*   **Continuity Equation Satisfaction:** For incompressible flow, the continuity equation is $\frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} = 0$.
    Substituting the definitions of $u$ and $v$:
    $$ \frac{\partial}{\partial x} \left( \frac{\partial \psi}{\partial y} \right) + \frac{\partial}{\partial y} \left( -\frac{\partial \psi}{\partial x} \right) = \frac{\partial^2 \psi}{\partial x \partial y} - \frac{\partial^2 \psi}{\partial y \partial x} = 0 $$
    This equation is always satisfied by definition.

*   **Properties of Streamlines:**
    *   Lines of constant $\psi$ are streamlines.
    *   The difference in stream function between two streamlines ($\psi_2 - \psi_1$) represents the volume flow rate per unit depth between them.
    *   $$ \Delta Q = \int_{\text{path}} (u \, dy - v \, dx) $$
        Substituting $u = \frac{\partial \psi}{\partial y}$ and $v = -\frac{\partial \psi}{\partial x}$:
        $$ \Delta Q = \int_{\text{path}} \left( \frac{\partial \psi}{\partial y} \, dy - \left(-\frac{\partial \psi}{\partial x}\right) \, dx \right) = \int_{\text{path}} \left( \frac{\partial \psi}{\partial y} \, dy + \frac{\partial \psi}{\partial x} \, dx \right) $$
        This is the total differential of $\psi$, $d\psi$.
        $$ \Delta Q = \int d\psi = \psi_2 - \psi_1 $$
        So, the volume flow rate per unit depth between streamlines $\psi_1$ and $\psi_2$ is $\psi_2 - \psi_1$.

*   **Example:** For a uniform flow in the x-direction with velocity $U$: $u=U$, $v=0$.
    $$ U = \frac{\partial \psi}{\partial y} \implies \psi = Uy + f(x) $$
    $$ 0 = -\frac{\partial \psi}{\partial x} = -\frac{df}{dx} \implies f(x) = \text{constant} $$
    So, $\psi = Uy + C$. If we set $C=0$, then $\psi = Uy$.
    Streamlines are lines of constant $U$, which are horizontal lines ($y = \text{constant}$), consistent with uniform flow along the x-axis.

*   **Example:** For flow in a corner (e.g., $u=x, v=-y$):
    $$ x = \frac{\partial \psi}{\partial y} \implies \psi = xy + f(x) $$
    $$ -y = -\frac{\partial \psi}{\partial x} = -y - \frac{df}{dx} \implies \frac{df}{dx} = 0 \implies f(x) = C $$
    So, $\psi = xy + C$. Setting $C=0$, $\psi = xy$.
    Streamlines are $xy = \text{constant}$. These are hyperbolas, representing flow turning around a corner.

*   **Important Point:** The stream function is only defined for 2D, incompressible, and (often) irrotational flows.

---

### 2.1.6 Velocity Potential Function ($\phi$)

The velocity potential function is a scalar function used to describe irrotational flows. It simplifies the analysis by automatically satisfying the condition for irrotationality.

*   **Definition:** For an irrotational flow, the velocity vector $\vec{v}$ can be expressed as the gradient of a scalar potential function $\phi$:
    $$ \vec{v} = \nabla \phi $$
    In Cartesian coordinates:
    $$ u = \frac{\partial \phi}{\partial x}, \quad v = \frac{\partial \phi}{\partial y}, \quad w = \frac{\partial \phi}{\partial z} $$

*   **Irrotationality Satisfaction:** A flow is irrotational if its vorticity ($\vec{\omega} = \nabla \times \vec{v}$) is zero.
    $$ \vec{\omega} = \nabla \times (\nabla \phi) $$
    The curl of a gradient of any scalar function is always zero. Therefore, any flow described by a velocity potential function is inherently irrotational.

*   **Laplace Equation:** For an incompressible and irrotational flow, the continuity equation ($\nabla \cdot \vec{v} = 0$) and the velocity potential definition ($\vec{v} = \nabla \phi$) lead to the Laplace equation:
    $$ \nabla \cdot (\nabla \phi) = 0 $$
    $$ \nabla^2 \phi = 0 $$
    In Cartesian coordinates:
    $$ \frac{\partial^2 \phi}{\partial x^2} + \frac{\partial^2 \phi}{\partial y^2} + \frac{\partial^2 \phi}{\partial z^2} = 0 $$
    Solving the Laplace equation with appropriate boundary conditions yields the velocity potential, and hence the velocity field.

*   **Relationship with Stream Function (for 2D Incompressible Irrotational Flow):**
    For a 2D flow, if both $\psi$ and $\phi$ exist:
    $$ u = \frac{\partial \psi}{\partial y} = \frac{\partial \phi}{\partial x} $$
    $$ v = -\frac{\partial \psi}{\partial x} = \frac{\partial \phi}{\partial y} $$
    These are the Cauchy-Riemann equations, indicating that $\phi$ and $\psi$ are conjugate functions. Lines of constant $\phi$ (equipotential lines) are orthogonal to lines of constant $\psi$ (streamlines).

*   **Example:** Uniform flow along the x-axis with velocity $U$:
    $u=U, v=0, w=0$.
    $$ U = \frac{\partial \phi}{\partial x} \implies \phi = Ux + f(y) $$
    $$ 0 = \frac{\partial \phi}{\partial y} = \frac{df}{dy} \implies f(y) = \text{constant} $$
    So, $\phi = Ux + C$. Setting $C=0$, $\phi = Ux$.
    Equipotential lines are vertical lines ($x = \text{constant}$). Streamlines are horizontal lines ($y = \text{constant}$). They are orthogonal.

*   **Important Point:** The velocity potential function is only defined for irrotational flows. It does not automatically satisfy continuity unless the Laplace equation is also satisfied.

---

### 2.1.7 Flow Net

A flow net is a graphical representation of a two-dimensional, incompressible, irrotational flow. It consists of a set of streamlines and equipotential lines.

*   **Construction:**
    1.  **Identify Boundaries:** Determine the physical boundaries of the flow region.
    2.  **Sketch Streamlines:** Draw streamlines tangent to the velocity vector, ensuring they represent the flow pattern. In regions where velocity is high, streamlines are closer; where velocity is low, they are further apart.
    3.  **Sketch Equipotential Lines:** Draw equipotential lines (lines of constant $\phi$) such that they are everywhere orthogonal to the streamlines.
    4.  **Form "Curvilinear Squares":** Adjust the spacing of streamlines and equipotential lines so that the grid formed by them consists of approximately "curvilinear squares." This means the distance between adjacent streamlines is roughly equal to the distance between adjacent equipotential lines in the direction perpendicular to the streamline.
*   **Properties:**
    *   Streamlines and equipotential lines are mutually orthogonal.
    *   The spacing of streamlines is inversely proportional to the local velocity.
    *   The difference in potential between adjacent equipotential lines is constant.
    *   The volume flow rate between adjacent streamlines is constant if the spacing is correct for curvilinear squares.
*   **Applications:**
    *   **Visualizing Flow Patterns:** Understanding how fluid flows around obstacles, through conduits, or in seepage beneath structures.
    *   **Estimating Velocities:** Velocity is inversely proportional to the spacing between streamlines.
    *   **Estimating Pressure:** Using Bernoulli's equation, pressure can be estimated from velocity.
    *   **Seepage Analysis:** Used in geotechnical engineering to analyze groundwater flow through dams and earthen structures.
*   **Example:** Flow around a cylinder.
    *   Streamlines will be tangent to the cylinder surface (no-slip condition for viscous, but here we're often assuming inviscid for flow nets).
    *   Equipotential lines will be radial from the center of the cylinder.
    *   The velocity will be highest at the sides of the cylinder and zero at the front and rear stagnation points.
*   **Textbook Reference:** Bansal R.K. and White F.M. provide excellent illustrations and discussions on flow nets for seepage analysis.

---

## 2.2 Measuring Instruments

These instruments are crucial for quantifying fluid flow, pressure, and velocity.

### 2.2.1 Pitot Tube

*   **Princ:** Based on Bernoulli's equation. It measures the stagnation pressure (total pressure) at a point in the flow. By also measuring the static pressure at the same point, the dynamic pressure, and hence the velocity, can be determined.
*   **Working:**
    1.  A Pitot tube has an opening facing directly into the flow. The fluid comes to rest at this opening, creating a stagnation point where the pressure is the stagnation pressure ($P_0$).
    2.  The Pitot tube also has openings on the sides, perpendicular to the flow, to measure the static pressure ($P_s$).
    3.  Bernoulli's equation between the stagnation point (point 1) and a point on the same streamline in the free stream (point 2) where velocity is $V$:
        $$ P_1 + \frac{1}{2} \rho V_1^2 + \rho g z_1 = P_2 + \frac{1}{2} \rho V_2^2 + \rho g z_2 $$
        Assuming the Pitot tube is aligned horizontally ($z_1 = z_2$) and $V_1=0$ at the stagnation point:
        $$ P_0 + 0 = P_s + \frac{1}{2} \rho V^2 $$
        The velocity $V$ is then:
        $$ V = \sqrt{\frac{2(P_0 - P_s)}{\rho}} $$
        where $(P_0 - P_s)$ is the dynamic pressure.
*   **Measurement:** The pressure difference $(P_0 - P_s)$ is typically measured using a manometer.
*   **Application:** Measuring local velocity at a point in a flow, used in aircraft for airspeed indication, and in wind tunnels.
*   **Limitations:**
    *   Measures velocity at only one point.
    *   Sensitive to the orientation of the tube with respect to the flow.
    *   Prone to clogging by debris.
    *   Less accurate at very low velocities.
*   **Textbook Reference:** Cengel & Cimbala (2013) and Som & Cimbala (2011) provide detailed explanations and diagrams.

---

### 2.2.2 Orificemeter (Orifice Meter)

*   **Princ:** Based on Bernoulli's equation and the principle of conservation of mass. It measures the flow rate by creating a pressure drop across a constricted area (orifice plate).
*   **Working:**
    1.  An orifice plate is a thin plate with a sharp-edged hole in the center, inserted into a pipe.
    2.  As the fluid flows through the orifice, its velocity increases, and consequently, its pressure decreases.
    3.  A pressure tapping is made just upstream of the orifice plate ($P_1$) and another a short distance downstream where the jet reaches its minimum cross-sectional area (vena contracta, $P_2$).
    4.  Bernoulli's equation between the upstream tap and the vena contracta (assuming horizontal pipe and neglecting losses for ideal flow):
        $$ P_1 + \frac{1}{2} \rho V_1^2 = P_2 + \frac{1}{2} \rho V_2^2 $$
        Rearranging for flow rate ($Q$):
        Let $A_1$ be the cross-sectional area of the pipe and $A_2$ be the area of the orifice.
        From continuity: $A_1 V_1 = A_2 V_2 \implies V_1 = V_2 \frac{A_2}{A_1}$.
        Substituting $V_1$ into Bernoulli's equation:
        $$ P_1 - P_2 = \frac{1}{2} \rho \left( V_2^2 - V_1^2 \right) = \frac{1}{2} \rho V_2^2 \left( 1 - \left(\frac{A_2}{A_1}\right)^2 \right) $$
        $$ V_2 = \sqrt{\frac{2(P_1 - P_2)}{\rho \left( 1 - (A_2/A_1)^2 \right)}} $$
        The actual flow rate is $Q = C_d A_2 V_2$, where $C_d$ is the coefficient of discharge, accounting for losses and the vena contracta.
        $$ Q = C_d A_2 \sqrt{\frac{2(P_1 - P_2)}{\rho \left( 1 - (A_2/A_1)^2 \right)}} $$
*   **Measurement:** The pressure difference $(P_1 - P_2)$ is measured.
*   **Application:** Flow rate measurement in pipelines.
*   **Advantages:** Simple, inexpensive.
*   **Disadvantages:**
    *   Large permanent pressure loss.
    *   Lower accuracy compared to a Venturimeter.
    *   Requires careful installation.
*   **Textbook Reference:** Bansal R.K. and Som & Cimbala (2011) are good sources for detailed derivations and diagrams.

---

### 2.2.3 Venturimeter (Venturi Meter)

*   **Princ:** Similar to the orificemeter, it measures flow rate based on Bernoulli's equation and conservation of mass, but uses a gradual constriction and expansion.
*   **Working:**
    1.  A Venturimeter consists of a converging section, a throat (constricted section), and a diverging section.
    2.  The converging section accelerates the flow and creates a pressure drop.
    3.  The diverging section gradually expands the flow, recovering most of the pressure.
    4.  Pressure taps are located at the inlet (section 1) and the throat (section 2).
    5.  Bernoulli's equation between inlet and throat (assuming horizontal pipe):
        $$ P_1 + \frac{1}{2} \rho V_1^2 = P_2 + \frac{1}{2} \rho V_2^2 $$
        Using continuity $A_1 V_1 = A_2 V_2$, where $A_1$ is the inlet area and $A_2$ is the throat area:
        $$ V_2 = \sqrt{\frac{2(P_1 - P_2)}{\rho \left( 1 - (A_2/A_1)^2 \right)}} $$
        The flow rate is $Q = C_v C_d A_2 V_2$. However, the coefficient of velocity ($C_v$) is usually very close to 1, so:
        $$ Q = C_d A_2 \sqrt{\frac{2(P_1 - P_2)}{\rho \left( 1 - (A_2/A_1)^2 \right)}} $$
        The coefficient of discharge ($C_d$) for a Venturimeter is typically higher and more constant (around 0.95-0.98) than for an orificemeter due to less friction and gradual expansion.
*   **Measurement:** The pressure difference $(P_1 - P_2)$ is measured.
*   **Application:** Accurate flow rate measurement in pipelines, especially for large pipes and where pressure loss is a concern.
*   **Advantages:**
    *   Low permanent pressure loss due to the diverging section.
    *   Higher accuracy and more reliable coefficient of discharge.
*   **Disadvantages:**
    *   More expensive and occupies more space than an orificemeter.
*   **Textbook Reference:** Cengel & Cimbala (2013), Som & Cimbala (2011), and Bansal R.K. cover this comprehensively.

---

### 2.2.4 Rectangular and Triangular Notches

*   **Princ:** Notches are structures used to measure flow rate in open channels. They create a known contraction of the flow, leading to a measurable head (depth of water upstream of the notch). The flow rate is related to this head.
*   **Note:** Problems involving calculations for notches are not required for this module. Focus is on understanding their purpose and basic principle.

#### 2.2.4.1 Rectangular Notch

*   **Description:** A rectangular opening in the side of a tank or channel. The top edge is sharp.
*   **Princ:** The flow over a rectangular notch is generally treated as flow over a suppressed weir. The flow rate is proportional to the width of the notch and the power of the head.
*   **Application:** Measuring discharge in open channels where the flow rate is relatively high.

#### 2.2.4.2 Triangular Notch (V-notch)

*   **Description:** A triangular opening, typically with an apex angle (e.g., 90 degrees). The sides are sharp.
*   **Princ:** The flow rate over a triangular notch is proportional to the head raised to a higher power than for a rectangular notch (specifically, $H^{5/2}$). This makes it more sensitive to changes in head.
*   **Application:** Measuring discharge in open channels where the flow rate is low or varies significantly. More accurate for a wider range of flow rates than rectangular notches.

**General Principle for Notches:**
The flow rate ($Q$) over a notch is typically expressed as:
$Q = C_d \times (\text{Area of flow over notch}) \times (\text{Average velocity})$
For both types, this relationship is often simplified to:
$Q = K H^n$
where $K$ is a constant that depends on the notch geometry and fluid properties, $H$ is the head over the sill, and $n$ is an exponent that depends on the notch shape (e.g., $n \approx 3/2$ for rectangular, $n \approx 5/2$ for triangular).

**Important Point:** Notches are for open channel flow, while Venturimeters and Orificemeters are for closed conduit (pipe) flow.

---

## Practice Questions and Answers

**1. Define Steady Flow and Uniform Flow.**

*   **Answer:**
    *   **Steady Flow:** Fluid properties (velocity, density, pressure) at any point in space do not change with time. Mathematically, $\frac{\partial \phi}{\partial t} = 0$ for any fluid property $\phi$.
    *   **Uniform Flow:** Velocity is the same at all points in space at a given instant. Mathematically, $\frac{\partial \vec{v}}{\partial s} = 0$, where $s$ is the distance along any direction.

**2. What is the difference between a streamline and a path line in unsteady flow?**

*   **Answer:** A streamline is always tangent to the velocity vector at a given instant, representing the instantaneous direction of flow. A path line is the actual trajectory traced by a fluid particle over time. In unsteady flow, these two lines generally do not coincide because the velocity vector changes direction and magnitude at each point as time progresses.

**3. Write down the mathematical definition of the stream function $\psi$ for a 2D incompressible flow and explain the significance of lines of constant $\psi$.**

*   **Answer:** For a 2D flow with velocity components $u$ and $v$:
    $$ u = \frac{\partial \psi}{\partial y} \quad \text{and} \quad v = -\frac{\partial \psi}{\partial x} $$
    Lines of constant $\psi$ are streamlines. The difference in stream function between two streamlines, $\psi_2 - \psi_1$, represents the volume flow rate per unit depth between them.

**4. What is the condition for a flow to be irrotational? How is the velocity potential function related to this condition?**

*   **Answer:** A flow is irrotational if its vorticity ($\vec{\omega} = \nabla \times \vec{v}$) is zero everywhere. The velocity potential function $\phi$ is defined such that $\vec{v} = \nabla \phi$. The curl of the gradient of any scalar function is always zero, so any flow described by a velocity potential function is inherently irrotational.

**5. Which instrument is generally preferred for accurate flow measurement in a pipeline where a low permanent pressure loss is desirable?**

*   **Answer:** The Venturimeter is preferred due to its gradual diverging section, which allows for significant pressure recovery and thus a lower permanent pressure loss compared to an orificemeter.

**6. In which type of flow measurement are notches used, and what is the basic principle behind them?**

*   **Answer:** Notches are used for measuring flow rate in open channels. The basic principle involves creating a controlled obstruction (notch) that causes a measurable head of fluid upstream, and the flow rate is related to this head and the geometry of the notch.

**7. A fluid flow is described by $\vec{v} = (2x, -2y, 0)$. Is this flow rotational or irrotational?**

*   **Answer:**
    We need to calculate the vorticity $\vec{\omega} = \nabla \times \vec{v}$.
    $u=2x, v=-2y, w=0$.
    $$ \vec{\omega} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ 2x & -2y & 0 \end{vmatrix} $$
    $$ \vec{\omega} = \hat{i} \left( \frac{\partial(0)}{\partial y} - \frac{\partial(-2y)}{\partial z} \right) - \hat{j} \left( \frac{\partial(0)}{\partial x} - \frac{\partial(2x)}{\partial z} \right) + \hat{k} \left( \frac{\partial(-2y)}{\partial x} - \frac{\partial(2x)}{\partial y} \right) $$
    $$ \vec{\omega} = \hat{i}(0 - 0) - \hat{j}(0 - 0) + \hat{k}(0 - 0) = 0 $$
    Since the vorticity is zero, the flow is **irrotational**.

**8. For the flow in Q7, can a velocity potential function be defined? If so, find it.**

*   **Answer:** Yes, because the flow is irrotational, a velocity potential function $\phi$ can be defined such that $\vec{v} = \nabla \phi$.
    $u = \frac{\partial \phi}{\partial x} = 2x \implies \phi = x^2 + f(y, z)$
    $v = \frac{\partial \phi}{\partial y} = -2y \implies \phi = -y^2 + g(x, z)$
    $w = \frac{\partial \phi}{\partial z} = 0 \implies \phi = h(x, y)$
    Comparing these, we get:
    $\phi = x^2 - y^2 + C$.
    Let's verify:
    $\frac{\partial \phi}{\partial x} = 2x$ (Matches $u$)
    $\frac{\partial \phi}{\partial y} = -2y$ (Matches $v$)
    $\frac{\partial \phi}{\partial z} = 0$ (Matches $w$)
    So, the velocity potential function is $\phi = x^2 - y^2 + C$.

**9. For the flow in Q7, can a stream function be defined? If so, find it.**

*   **Answer:** Yes, because the flow is 2D and incompressible (continuity equation $\frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} = \frac{\partial (2x)}{\partial x} + \frac{\partial (-2y)}{\partial y} = 2 - 2 = 0$ is satisfied).
    $u = \frac{\partial \psi}{\partial y} = 2x \implies \psi = 2xy + f(x)$
    $v = -\frac{\partial \psi}{\partial x} = -2y \implies -\frac{\partial \psi}{\partial x} = -2y \implies \frac{\partial \psi}{\partial x} = 2y$
    From the first equation, $\frac{\partial \psi}{\partial x} = \frac{df}{dx}$.
    So, $\frac{df}{dx} = 2y$. This is only possible if $y$ is a function of $x$, which is not generally true for a stream function.
    Let's recheck the definition and assumptions. The stream function is defined for 2D flow. If we consider the flow in the xy-plane, with $w=0$, then $u$ and $v$ only depend on $x$ and $y$.
    $u=2x, v=-2y$.
    $u = \frac{\partial \psi}{\partial y} \implies 2x = \frac{\partial \psi}{\partial y} \implies \psi = 2xy + f(x)$
    $v = -\frac{\partial \psi}{\partial x} \implies -2y = -\frac{\partial \psi}{\partial x} \implies \frac{\partial \psi}{\partial x} = 2y$
    From $\psi = 2xy + f(x)$, we have $\frac{\partial \psi}{\partial x} = 2y + \frac{df}{dx}$.
    Equating the two expressions for $\frac{\partial \psi}{\partial x}$:
    $2y + \frac{df}{dx} = 2y \implies \frac{df}{dx} = 0 \implies f(x) = C$.
    So, the stream function is $\psi = 2xy + C$. Let $C=0$.
    $\psi = 2xy$.
    Let's verify:
    $u = \frac{\partial \psi}{\partial y} = 2x$ (Matches)
    $v = -\frac{\partial \psi}{\partial x} = -2y$ (Matches)
    The stream function can be defined.

---

## Important Points to Remember

*   **Eulerian vs. Lagrangian:** Eulerian describes motion at fixed points; Lagrangian follows fluid particles.
*   **Steady vs. Unsteady:** Steady means properties at a point don't change with time. Unsteady means they do.
*   **Uniform vs. Non-uniform:** Uniform means velocity is the same everywhere in space. Non-uniform means it varies spatially.
*   **Material Derivative:** Accounts for both local and convective changes in a fluid property. Crucial for acceleration.
*   **Streamlines:** Everywhere tangent to the velocity vector. Key for visualizing flow patterns.
*   **Path Lines:** Actual path of a fluid particle.
*   **Streak Lines:** Locus of particles passing through a fixed point.
*   **Stream Function ($\psi$):** Defined for 2D, incompressible flow. Lines of constant $\psi$ are streamlines. $\psi_2 - \psi_1$ is the flow rate per unit depth.
*   **Velocity Potential ($\phi$):** Defined for irrotational flow. $\vec{v} = \nabla \phi$. Lines of constant $\phi$ are equipotential lines.
*   **Flow Nets:** Intersecting streamlines and equipotential lines, forming curvilinear squares. Useful for visualizing and analyzing 2D, incompressible, irrotational flows.
*   **Measuring Instruments:**
    *   **Pitot Tube:** Measures local velocity by measuring stagnation and static pressure.
    *   **Orificemeter/Venturimeter:** Measure flow rate using Bernoulli's principle and continuity, creating a pressure drop across a constriction. Venturimeter has lower pressure loss.
    *   **Notches (Rectangular/Triangular):** Used for flow rate measurement in open channels based on the head over the notch.

---
This concludes Module 2 notes. Remember to practice deriving and applying these concepts to fully grasp fluid kinematics and the principles of flow measurement.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
