---
title: "Fluid Kinematics"
subject: "MECHANICS OF FLUID FLOW"
module: "Module 1: Basic Concepts and Fundamentals: Fluid statics"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810a5f"
status: "completed"
scrapedAt: "2026-05-20T18:46:20.221Z"
---
# MECHANICS OF FLUID FLOW: MODULE 1 - BASIC CONCEPTS AND FUNDAMENTALS: FLUID STATICS

## Topic: Fluid Kinematics

This module focuses on understanding the motion of fluids without considering the forces causing that motion. We will explore how to describe fluid motion and analyze its characteristics.

---

### 1. Introduction to Fluid Kinematics

Fluid kinematics is the branch of fluid mechanics that deals with the **description of fluid motion** without considering the forces or causes that produce the motion. It's all about *how* the fluid moves.

**Key Concepts:**

*   **Fluid Flow:** The movement of a fluid (liquid or gas) from one point to another.
*   **Kinematic Description:** Using mathematical tools to describe the position, velocity, and acceleration of fluid particles.

---

### 2. Ways of Describing Fluid Motion

There are two primary ways to describe fluid motion:

#### 2.1 Lagrangian Description (Particle Description)

*   **Concept:** Follows the path of individual fluid particles over time. You track each specific particle as it moves.
*   **Analogy:** Imagine releasing a dye blob into a river and tracking the path of that specific blob as it drifts downstream.
*   **Mathematical Representation:**
    *   Position of a fluid particle is a function of its initial position ($\mathbf{x}_0$) and time ($t$): $\mathbf{x}(t) = f(\mathbf{x}_0, t)$.
    *   Velocity of a fluid particle: $\mathbf{v}(t) = \frac{d\mathbf{x}}{dt}$.
*   **Advantages:** Directly tracks particle history and properties.
*   **Disadvantages:** Difficult to apply for complex flows and large numbers of particles. Often impractical for engineering analysis.

#### 2.2 Eulerian Description (Field Description)

*   **Concept:** Focuses on specific points in space and observes the fluid properties (velocity, pressure, density) at those fixed locations as time passes. You observe the flow through fixed control volumes or points.
*   **Analogy:** Imagine standing on a bridge and measuring the velocity of the water passing under you at that exact spot, and repeating this observation over time.
*   **Mathematical Representation:**
    *   Fluid properties (like velocity $\mathbf{v}$, pressure $p$, density $\rho$) are expressed as functions of spatial coordinates ($x, y, z$) and time ($t$):
        *   $\mathbf{v} = \mathbf{v}(x, y, z, t)$
        *   $p = p(x, y, z, t)$
        *   $\rho = \rho(x, y, z, t)$
*   **Advantages:** More practical for most engineering applications as it describes the flow field at fixed locations. Most analytical and computational fluid dynamics (CFD) methods use this approach.
*   **Disadvantages:** Does not directly track the history of individual particles.

---

### 3. Describing Fluid Motion: Kinematic Description of Velocity and Acceleration

Using the Eulerian approach, we can describe the velocity and acceleration of fluid particles.

#### 3.1 Velocity Field

*   **Definition:** The velocity field describes the velocity of every fluid particle at every point in space and time.
*   **Vector Field:** Velocity is a vector quantity, so it has both magnitude and direction.
*   **Components:** In Cartesian coordinates, the velocity vector $\mathbf{v}$ is typically expressed as:
    $\mathbf{v}(x, y, z, t) = u(x, y, z, t)\mathbf{i} + v(x, y, z, t)\mathbf{j} + w(x, y, z, t)\mathbf{k}$
    Where:
    *   $u, v, w$ are the velocity components in the $x, y, z$ directions, respectively.
    *   $\mathbf{i}, \mathbf{j}, \mathbf{k}$ are unit vectors in the $x, y, z$ directions.

#### 3.2 Acceleration Field

The acceleration of a fluid particle in the Eulerian framework is more complex than a simple time derivative because the velocity of a particle changes not only with time but also as it moves to different locations. This is known as the **material derivative** or **substantial derivative**.

*   **Definition:** The acceleration of a fluid particle describes the rate of change of its velocity.
*   **Material Derivative ($\frac{D}{Dt}$):** For any property $\phi$ of a fluid particle (like velocity, temperature, etc.), the material derivative is given by:
    $\frac{D\phi}{Dt} = \frac{\partial\phi}{\partial t} + u\frac{\partial\phi}{\partial x} + v\frac{\partial\phi}{\partial y} + w\frac{\partial\phi}{\partial z}$

    *   $\frac{\partial\phi}{\partial t}$: **Local acceleration** (rate of change of $\phi$ at a fixed point in space).
    *   $u\frac{\partial\phi}{\partial x} + v\frac{\partial\phi}{\partial y} + w\frac{\partial\phi}{\partial z}$: **Convective acceleration** (rate of change of $\phi$ due to the particle moving to a new location in space where $\phi$ has a different value).

*   **Acceleration Vector of a Fluid Particle ($\mathbf{a}$):** Applying the material derivative to the velocity vector $\mathbf{v}$:
    $\mathbf{a} = \frac{D\mathbf{v}}{Dt} = \frac{\partial\mathbf{v}}{\partial t} + (\mathbf{v} \cdot \nabla)\mathbf{v}$

    In Cartesian coordinates:
    $\mathbf{a} = \frac{Du}{Dt}\mathbf{i} + \frac{Dv}{Dt}\mathbf{j} + \frac{Dw}{Dt}\mathbf{k}$

    Where:
    *   $\frac{Du}{Dt} = \frac{\partial u}{\partial t} + u\frac{\partial u}{\partial x} + v\frac{\partial u}{\partial y} + w\frac{\partial u}{\partial z}$
    *   $\frac{Dv}{Dt} = \frac{\partial v}{\partial t} + u\frac{\partial v}{\partial x} + v\frac{\partial v}{\partial y} + w\frac{\partial v}{\partial z}$
    *   $\frac{Dw}{Dt} = \frac{\partial w}{\partial t} + u\frac{\partial w}{\partial x} + v\frac{\partial w}{\partial y} + w\frac{\partial w}{\partial z}$

**Example:**
Consider a velocity field $\mathbf{v} = (x^2y)\mathbf{i} + (2xy)\mathbf{j} + 0\mathbf{k}$.
Let's find the acceleration of a fluid particle at point $(1, 2, 0)$.

*   $u = x^2y$, $v = 2xy$, $w = 0$.
*   $\frac{\partial u}{\partial t} = 0$, $\frac{\partial v}{\partial t} = 0$, $\frac{\partial w}{\partial t} = 0$ (steady flow).
*   $\frac{\partial u}{\partial x} = 2xy$, $\frac{\partial u}{\partial y} = x^2$, $\frac{\partial u}{\partial z} = 0$
*   $\frac{\partial v}{\partial x} = 2y$, $\frac{\partial v}{\partial y} = 2x$, $\frac{\partial v}{\partial z} = 0$
*   $\frac{\partial w}{\partial x} = 0$, $\frac{\partial w}{\partial y} = 0$, $\frac{\partial w}{\partial z} = 0$

At point $(1, 2, 0)$:
$u = (1)^2(2) = 2$
$v = 2(1)(2) = 4$
$w = 0$

Calculate acceleration components:
$\frac{Du}{Dt} = \frac{\partial u}{\partial t} + u\frac{\partial u}{\partial x} + v\frac{\partial u}{\partial y} + w\frac{\partial u}{\partial z}$
$\frac{Du}{Dt} = 0 + (2)(2(1)(2)) + (4)((1)^2) + (0)(0)$
$\frac{Du}{Dt} = 0 + 8 + 4 + 0 = 12$

$\frac{Dv}{Dt} = \frac{\partial v}{\partial t} + u\frac{\partial v}{\partial x} + v\frac{\partial v}{\partial y} + w\frac{\partial v}{\partial z}$
$\frac{Dv}{Dt} = 0 + (2)(2(2)) + (4)(2(1)) + (0)(0)$
$\frac{Dv}{Dt} = 0 + 8 + 8 + 0 = 16$

$\frac{Dw}{Dt} = 0$ (since $w=0$ and its derivatives are 0)

So, the acceleration vector at $(1, 2, 0)$ is $\mathbf{a} = 12\mathbf{i} + 16\mathbf{j} + 0\mathbf{k}$.

---

### 4. Describing Fluid Motion: Classification of Flow

Fluid flows can be classified based on various criteria. Understanding these classifications helps in selecting appropriate analysis methods.

#### 4.1 Based on Time Dependence

*   **Steady Flow:** Fluid properties (velocity, pressure, density, etc.) at any point in space do not change with time.
    *   $\frac{\partial}{\partial t} (\text{any property}) = 0$
    *   Example: Water flowing at a constant rate through a pipe.

*   **Unsteady Flow (Transient Flow):** Fluid properties at any point in space change with time.
    *   $\frac{\partial}{\partial t} (\text{any property}) \neq 0$
    *   Example: Water flowing from a faucet that is being turned on or off.

#### 4.2 Based on Velocity Variation with Space

*   **Uniform Flow:** Velocity is the same at all points in the flow at any given instant. This implies no spatial variation in velocity.
    *   $\frac{\partial u}{\partial x} = \frac{\partial u}{\partial y} = \frac{\partial u}{\partial z} = 0$
    *   $\frac{\partial v}{\partial x} = \frac{\partial v}{\partial y} = \frac{\partial v}{\partial z} = 0$
    *   $\frac{\partial w}{\partial x} = \frac{\partial w}{\partial y} = \frac{\partial w}{\partial z} = 0$
    *   This is a rare condition, mostly idealized. Example: Flow in a very long, straight pipe far from any disturbances.

*   **Non-uniform Flow:** Velocity varies from point to point in the flow.
    *   At least one spatial derivative of velocity components is non-zero.
    *   Example: Flow in a converging or diverging nozzle, flow around an object.

**Important Note:** A flow can be steady but non-uniform (e.g., flow in a pipe with friction, velocity varies radially but not with time). A flow can be unsteady but uniform (e.g., water in a filled reservoir where the level is dropping but the velocity everywhere at the surface is the same at a given instant).

#### 4.3 Based on Viscous Effects

*   **Viscous Flow (Real Flow):** The effects of viscosity (internal friction) are significant and cannot be ignored.
    *   Example: Flow in pipes, flow over surfaces.

*   **Inviscid Flow (Ideal Flow):** Viscosity is assumed to be negligible. This is an idealization used for simplification, often valid for flows far from boundaries or at very high velocities where inertial forces dominate.
    *   Example: Flow around an airplane wing at high speeds, far from the surface.

#### 4.4 Based on Compressibility

*   **Incompressible Flow:** Density of the fluid remains constant. This is a good approximation for liquids and for gases at low velocities (Mach number typically < 0.3).
    *   $\rho = \text{constant}$
    *   $\frac{D\rho}{Dt} = 0$

*   **Compressible Flow:** Density of the fluid changes significantly. This occurs at high velocities for gases (Mach number > 0.3).
    *   $\rho$ is a function of pressure and temperature.
    *   Example: Flow of air at supersonic speeds, gas dynamics.

#### 4.5 Based on Flow Pattern

*   **Laminar Flow:** Fluid moves in smooth, parallel layers (laminae) with no significant mixing between layers. Characterized by low velocities and high viscosity.
    *   Orderly and predictable.
    *   Viscosity plays a dominant role.
    *   Example: Slow flow of honey, oil flow in bearings.

*   **Turbulent Flow:** Fluid moves in a chaotic, irregular manner with significant mixing and eddies. Characterized by high velocities and low viscosity.
    *   Disorderly and unpredictable.
    *   Inertial forces dominate over viscous forces.
    *   Example: Water flow in a river, airflow over a car at speed.

*   **Transitional Flow:** Flow that is neither fully laminar nor fully turbulent, exhibiting characteristics of both.

**Reynolds Number ($Re$):** A dimensionless quantity that helps predict flow patterns. It's the ratio of inertial forces to viscous forces.
$Re = \frac{\rho V L}{\mu} = \frac{V L}{\nu}$
Where:
*   $\rho$ = density
*   $V$ = characteristic velocity
*   $L$ = characteristic length
*   $\mu$ = dynamic viscosity
*   $\nu = \frac{\mu}{\rho}$ = kinematic viscosity

*   Typically, for pipe flow:
    *   $Re < 2300$: Laminar Flow
    *   $2300 < Re < 4000$: Transitional Flow
    *   $Re > 4000$: Turbulent Flow

#### 4.6 Based on Flow Geometry

*   **One-dimensional (1D) Flow:** Flow properties vary significantly in only one spatial direction. Assumptions are made to neglect variations in other directions.
    *   Example: Flow through a long, straight pipe where we only consider changes along the axial direction.

*   **Two-dimensional (2D) Flow:** Flow properties vary significantly in two spatial directions.
    *   Example: Flow over a wide airfoil where variations in the spanwise direction are negligible.

*   **Three-dimensional (3D) Flow:** Flow properties vary significantly in all three spatial directions.
    *   Example: Flow around a sphere, flow in a pipe bend.

---

### 5. Describing Fluid Motion: Pathlines, Streaklines, and Streamlines

These are visual representations of fluid motion, particularly useful in Eulerian descriptions.

#### 5.1 Pathline

*   **Definition:** The locus of positions occupied by a single fluid particle during its motion over a period of time. This is what a Lagrangian observer would see.
*   **Representation:** A curve traced by a specific fluid particle.
*   **Relationship with Velocity:** If you know the velocity field $\mathbf{v}(x, y, z, t)$, you can find the pathline of a particle starting at $\mathbf{x}_0$ by solving the differential equations:
    $\frac{dx}{dt} = u(x, y, z, t)$
    $\frac{dy}{dt} = v(x, y, z, t)$
    $\frac{dz}{dt} = w(x, y, z, t)$
    with initial conditions $x(0) = x_0, y(0) = y_0, z(0) = z_0$.

#### 5.2 Streakline

*   **Definition:** The locus of positions of all fluid particles that have passed through a particular point in space at different times. This is what a dye injected continuously at a fixed point would show.
*   **Representation:** A curve that represents all particles that have recently passed through a fixed point.
*   **Key Feature:** In **steady flow**, pathlines, streaklines, and streamlines are identical. In **unsteady flow**, they can be different.

#### 5.3 Streamline

*   **Definition:** A curve that is instantaneously tangent to the velocity vector of the fluid at every point.
*   **Representation:** A curve drawn such that its direction at any point coincides with the direction of the velocity vector at that point.
*   **Mathematical Definition:** In Cartesian coordinates, the streamline is defined by the differential equation:
    $\frac{dx}{u} = \frac{dy}{v} = \frac{dz}{w}$
    This means the tangent vector to the streamline $(\Delta x, \Delta y, \Delta z)$ is parallel to the velocity vector $(u, v, w)$.

**Important Note:** Streamlines represent the instantaneous direction of motion of fluid particles.

**Example:**
Consider the velocity field $\mathbf{v} = (2x)\mathbf{i} + (-2y)\mathbf{j}$.
Find the streamline passing through the point $(1, 1)$.

Using the streamline equation:
$\frac{dx}{u} = \frac{dy}{v}$
$\frac{dx}{2x} = \frac{dy}{-2y}$

Integrate both sides:
$\int \frac{dx}{2x} = \int \frac{dy}{-2y}$
$\frac{1}{2} \ln|x| = -\frac{1}{2} \ln|y| + C_1$
$\ln|x| + \ln|y| = 2C_1$
$\ln|xy| = C_2$
$xy = e^{C_2} = C$

Now, use the point $(1, 1)$ to find the constant $C$:
$(1)(1) = C \implies C = 1$
So the streamline equation is $xy = 1$. This is a hyperbola.

---

### 6. Flow Visualization Techniques

These are methods used to make fluid flow visible, aiding in understanding and analysis.

*   **Streamer Lines:** Thin threads of dye or smoke injected into the flow at different points along a line. They resemble streamlines but show the spatial extent of the flow.
*   **Particle Image Velocimetry (PIV):** A non-intrusive optical method that measures instantaneous velocity fields. Small tracer particles are seeded in the flow and illuminated by a laser sheet. Images are captured at two instants, and the displacement of particles is used to calculate velocity.
*   **Laser Doppler Velocimetry (LDV):** Another non-intrusive optical technique that measures the velocity of individual particles as they pass through a focused laser beam.
*   **Surface Oil Film:** A thin layer of oil applied to a surface. The flow patterns of the oil reveal the boundary layer behavior and flow separation.
*   **Tufts:** Small, flexible strings or threads attached to a surface. Their deflection indicates the flow direction near the surface.

---

### 7. Conservation of Mass: The Continuity Equation

The principle of conservation of mass applied to fluid flow leads to the continuity equation. It states that mass cannot be created or destroyed.

#### 7.1 Differential Form of Continuity Equation

For a fluid element of infinitesimal volume $dV = dx dy dz$:

*   **Mass flow rate entering the element:** $\rho u \, dy dz$ (on the left face)
*   **Mass flow rate leaving the element:** $(\rho u + \frac{\partial(\rho u)}{\partial x} dx) dy dz$ (on the right face)
*   **Net rate of mass flow out in x-direction:** $\frac{\partial(\rho u)}{\partial x} dx dy dz$

Similarly for y and z directions.

The rate of change of mass within the element is $\frac{\partial(\rho dx dy dz)}{\partial t} = \frac{\partial\rho}{\partial t} dx dy dz$.

By conservation of mass, (rate of mass accumulation) = (net rate of mass inflow).
$\frac{\partial\rho}{\partial t} dx dy dz = - \left( \frac{\partial(\rho u)}{\partial x} + \frac{\partial(\rho v)}{\partial y} + \frac{\partial(\rho w)}{\partial z} \right) dx dy dz$

This simplifies to the differential form of the continuity equation:

$\frac{\partial\rho}{\partial t} + \frac{\partial(\rho u)}{\partial x} + \frac{\partial(\rho v)}{\partial y} + \frac{\partial(\rho w)}{\partial z} = 0$

Using vector notation, this is:
$\frac{\partial\rho}{\partial t} + \nabla \cdot (\rho \mathbf{v}) = 0$

**For Incompressible Flow ($\rho = \text{constant}$):**
If density is constant, then $\frac{\partial\rho}{\partial t} = 0$ and $\frac{\partial\rho}{\partial x} = \frac{\partial\rho}{\partial y} = \frac{\partial\rho}{\partial z} = 0$.
The continuity equation simplifies to:
$\frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} + \frac{\partial w}{\partial z} = 0$
or
$\nabla \cdot \mathbf{v} = 0$

This states that the velocity field of an incompressible flow is "divergence-free."

#### 7.2 Integral Form of Continuity Equation

Consider a fixed control volume $V$ bounded by a control surface $S$.
The rate of change of mass within the control volume plus the net rate of mass flow out across the control surface must be zero.

$\frac{d}{dt} \int_{V} \rho \, dV + \int_{S} \rho (\mathbf{v} \cdot \mathbf{n}) \, dA = 0$
Where:
*   $\int_{V} \rho \, dV$ is the total mass within the control volume.
*   $\int_{S} \rho (\mathbf{v} \cdot \mathbf{n}) \, dA$ is the net mass flow rate out of the control surface.
*   $\mathbf{n}$ is the outward normal vector to the control surface.

**For Steady Flow ($\frac{\partial}{\partial t} = 0$):**
$\int_{S} \rho (\mathbf{v} \cdot \mathbf{n}) \, dA = 0$

**For Incompressible Flow and a Control Volume with a single inlet and single outlet (e.g., a pipe section):**
Let the inlet have area $A_1$ and average velocity $V_1$, and the outlet have area $A_2$ and average velocity $V_2$.
$\rho_1 A_1 V_1 = \rho_2 A_2 V_2$

If incompressible:
$A_1 V_1 = A_2 V_2$
or
$Q_1 = Q_2$
Where $Q$ is the volumetric flow rate ($Q = AV$).

This is a very useful form for engineering calculations.

**Example:**
Water flows through a pipe that has a diameter of 0.1 m at section 1 and 0.05 m at section 2. If the velocity at section 1 is 2 m/s, what is the velocity at section 2? Assume incompressible flow.

*   $D_1 = 0.1 \, m \implies R_1 = 0.05 \, m \implies A_1 = \pi R_1^2 = \pi (0.05)^2 \, m^2$
*   $D_2 = 0.05 \, m \implies R_2 = 0.025 \, m \implies A_2 = \pi R_2^2 = \pi (0.025)^2 \, m^2$
*   $V_1 = 2 \, m/s$

Using $A_1 V_1 = A_2 V_2$:
$V_2 = V_1 \frac{A_1}{A_2} = V_1 \frac{\pi R_1^2}{\pi R_2^2} = V_1 \left(\frac{R_1}{R_2}\right)^2$
$V_2 = 2 \, m/s \times \left(\frac{0.05 \, m}{0.025 \, m}\right)^2 = 2 \, m/s \times (2)^2 = 2 \, m/s \times 4 = 8 \, m/s$

The velocity at section 2 is 8 m/s. As the pipe narrows, the velocity increases to maintain the same volumetric flow rate.

---

### 8. Kinematics of Fluid Elements

We can analyze the deformation of a fluid element, which is how it changes shape as it moves. This involves concepts like translation, rotation, and rate of angular deformation (which relates to shear).

#### 8.1 Translation

*   The center of the fluid element moves with the velocity of the flow at that point.
*   The rate of change of the position of the center of the element is given by the velocity vector $\mathbf{v}$.

#### 8.2 Rotation

*   **Vorticity ($\boldsymbol{\omega}$):** A measure of the local rotation of a fluid element. It is defined as the curl of the velocity vector:
    $\boldsymbol{\omega} = \nabla \times \mathbf{v}$
    In Cartesian coordinates:
    $\boldsymbol{\omega} = (\frac{\partial w}{\partial y} - \frac{\partial v}{\partial z})\mathbf{i} + (\frac{\partial u}{\partial z} - \frac{\partial w}{\partial x})\mathbf{j} + (\frac{\partial v}{\partial x} - \frac{\partial u}{\partial y})\mathbf{k}$

*   **Irrotational Flow:** A flow where vorticity is zero everywhere ($\boldsymbol{\omega} = 0$). This means fluid elements do not rotate.
    *   $\nabla \times \mathbf{v} = 0$
    *   In such flows, the velocity can be expressed as the gradient of a scalar potential function $\phi$: $\mathbf{v} = \nabla \phi$. This is called a **potential flow**.
    *   Example: Inviscid flow far from boundaries.

#### 8.3 Deformation (Rate of Strain)

*   Fluid elements can stretch or compress. This is described by the **rate of strain tensor**.
*   **Linear Strain Rate:** The rate at which the length of a fluid element changes. For example, the rate of stretching in the x-direction is $\frac{\partial u}{\partial x}$.
*   **Volumetric Strain Rate (Rate of Expansion):** The rate of change of the volume of a fluid element. This is the sum of the linear strain rates in three orthogonal directions:
    $\text{Rate of Expansion} = \frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} + \frac{\partial w}{\partial z}$
*   For incompressible flow, the volumetric strain rate is zero: $\nabla \cdot \mathbf{v} = 0$, as seen in the continuity equation.

---

### 9. Summary of Key Concepts

*   **Lagrangian vs. Eulerian Description:** Following particles vs. observing fixed points. Eulerian is dominant in engineering.
*   **Material Derivative:** Captures both local and convective changes for a fluid particle.
*   **Flow Classification:** Steady/Unsteady, Uniform/Non-uniform, Viscous/Inviscid, Compressible/Incompressible, Laminar/Turbulent.
*   **Reynolds Number:** Predicts laminar vs. turbulent flow based on inertial vs. viscous forces.
*   **Streamlines, Pathlines, Streaklines:** Visual representations of flow; identical in steady flow.
*   **Continuity Equation:** Expresses conservation of mass. For incompressible flow, $\nabla \cdot \mathbf{v} = 0$.
*   **Vorticity:** Measures local rotation of fluid elements ($\boldsymbol{\omega} = \nabla \times \mathbf{v}$).
*   **Irrotational Flow:** Flow with zero vorticity.

---

### 10. Practice Questions and Exercises

**Q1. [Definitions]**
Differentiate between Lagrangian and Eulerian descriptions of fluid motion. Which is more commonly used in fluid mechanics and why?

**Q2. [Acceleration]**
A velocity field is given by $\mathbf{v} = (3x^2y)\mathbf{i} - (3xy^2)\mathbf{j} + (2zt)\mathbf{k}$.
Calculate the acceleration of a fluid particle at point (1, 2, 3) at time $t=2$.

**Q3. [Flow Classification]**
State whether each of the following flows is steady or unsteady, and uniform or non-uniform. Briefly justify your answer.
a) Water flow from a tap that is being turned on and off.
b) Airflow in a long, straight horizontal pipe at constant temperature and pressure, with no losses.
c) Flow of water in a river.
d) Water flowing from a sprinkler head where the water pressure fluctuates.

**Q4. [Continuity Equation]**
Water flows through a horizontal pipe. At section 1, the diameter is 0.2 m and the velocity is 3 m/s. At section 2, the diameter is 0.1 m.
a) Assuming incompressible flow, calculate the average velocity at section 2.
b) If the density of the fluid at section 1 is $998 \, kg/m^3$ and at section 2 is $995 \, kg/m^3$, and the velocity at section 1 is 3 m/s, what is the velocity at section 2 if the flow is not necessarily incompressible but steady?

**Q5. [Streamlines]**
For the velocity field $\mathbf{v} = (2x)\mathbf{i} + (y)\mathbf{j}$, find the equation of the streamline passing through the point (2, 1).

**Q6. [Vorticity]**
Calculate the vorticity for the velocity field $\mathbf{v} = (2x^2y)\mathbf{i} + (2xy^2)\mathbf{j}$. Is this flow irrotational?

**Q7. [Reynolds Number]**
Consider water flowing through a pipe of diameter 0.05 m at a velocity of 0.1 m/s. Calculate the Reynolds number. (Assume kinematic viscosity of water $\nu = 1.0 \times 10^{-6} \, m^2/s$). Based on your calculation, what type of flow is expected?

---

### Answers to Practice Questions

**A1.**
*   **Lagrangian:** Follows individual fluid particles. Tracks history. Impractical for complex flows.
*   **Eulerian:** Observes fluid properties at fixed spatial points. Describes the flow field. Widely used in engineering.
    Eulerian is more common due to its practicality in analyzing flows at specific locations and its suitability for mathematical and computational methods.

**A2.**
$\mathbf{v} = (3x^2y)\mathbf{i} - (3xy^2)\mathbf{j} + (2zt)\mathbf{k}$
$u = 3x^2y$, $v = -3xy^2$, $w = 2zt$

Calculate partial derivatives:
$\frac{\partial u}{\partial t} = 0$
$\frac{\partial u}{\partial x} = 6xy$, $\frac{\partial u}{\partial y} = 3x^2$, $\frac{\partial u}{\partial z} = 0$
$\frac{\partial v}{\partial t} = 0$
$\frac{\partial v}{\partial x} = -3y^2$, $\frac{\partial v}{\partial y} = -6xy$, $\frac{\partial v}{\partial z} = 0$
$\frac{\partial w}{\partial t} = 2z$
$\frac{\partial w}{\partial x} = 0$, $\frac{\partial w}{\partial y} = 0$, $\frac{\partial w}{\partial z} = 2t$

At point (1, 2, 3) and $t=2$:
$u = 3(1)^2(2) = 6$
$v = -3(1)(2)^2 = -12$
$w = 2(3)(2) = 12$

$\frac{Du}{Dt} = \frac{\partial u}{\partial t} + u\frac{\partial u}{\partial x} + v\frac{\partial u}{\partial y} + w\frac{\partial u}{\partial z}$
$\frac{Du}{Dt} = 0 + (6)(6(1)(2)) + (-12)(3(1)^2) + (12)(0)$
$\frac{Du}{Dt} = 0 + 72 - 36 + 0 = 36$

$\frac{Dv}{Dt} = \frac{\partial v}{\partial t} + u\frac{\partial v}{\partial x} + v\frac{\partial v}{\partial y} + w\frac{\partial v}{\partial z}$
$\frac{Dv}{Dt} = 0 + (6)(-3(2)^2) + (-12)(-6(1)(2)) + (12)(0)$
$\frac{Dv}{Dt} = 0 - 72 + 144 + 0 = 72$

$\frac{Dw}{Dt} = \frac{\partial w}{\partial t} + u\frac{\partial w}{\partial x} + v\frac{\partial w}{\partial y} + w\frac{\partial w}{\partial z}$
$\frac{Dw}{Dt} = 2(3) + (6)(0) + (-12)(0) + (12)(2(2))$
$\frac{Dw}{Dt} = 6 + 0 + 0 + 48 = 54$

Acceleration vector $\mathbf{a} = 36\mathbf{i} + 72\mathbf{j} + 54\mathbf{k}$.

**A3.**
a) **Unsteady:** Velocity changes with time as the tap is turned on/off. **Non-uniform:** Velocity likely varies across the cross-section of the water stream.
b) **Steady:** Properties (velocity, pressure) at any point do not change with time. **Uniform:** Velocity is assumed to be the same at all points in the pipe at any given instant.
c) **Unsteady:** River flow rates and velocities typically vary with time (rain, season, etc.). **Non-uniform:** Velocity varies across the width and depth of the river.
d) **Unsteady:** Fluctuating pressure means fluctuating velocity. **Non-uniform:** Velocity will vary with radial position from the sprinkler head.

**A4.**
a) Assuming incompressible flow ($A_1 V_1 = A_2 V_2$):
$A_1 = \pi (0.1)^2 = 0.01\pi \, m^2$
$A_2 = \pi (0.05)^2 = 0.0025\pi \, m^2$
$V_2 = V_1 \frac{A_1}{A_2} = 3 \, m/s \times \frac{0.01\pi \, m^2}{0.0025\pi \, m^2} = 3 \times 4 = 12 \, m/s$.

b) For steady flow: $\rho_1 A_1 V_1 = \rho_2 A_2 V_2$
$V_2 = V_1 \frac{\rho_1 A_1}{\rho_2 A_2} = 3 \, m/s \times \frac{998 \, kg/m^3 \times 0.01\pi \, m^2}{995 \, kg/m^3 \times 0.0025\pi \, m^2}$
$V_2 = 3 \times \frac{998 \times 4}{995} = 3 \times \frac{3992}{995} \approx 3 \times 4.012 \approx 12.036 \, m/s$.

**A5.**
$\mathbf{v} = (2x)\mathbf{i} + (y)\mathbf{j}$
$\frac{dx}{u} = \frac{dy}{v}$
$\frac{dx}{2x} = \frac{dy}{y}$
$\int \frac{dx}{2x} = \int \frac{dy}{y}$
$\frac{1}{2}\ln|x| = \ln|y| + C_1$
$\ln|x| = 2\ln|y| + 2C_1$
$\ln|x| = \ln(y^2) + C_2$
$x = C_3 y^2$
Using point (2, 1):
$2 = C_3 (1)^2 \implies C_3 = 2$
Streamline equation: $x = 2y^2$.

**A6.**
$\mathbf{v} = (2x^2y)\mathbf{i} + (2xy^2)\mathbf{j}$
$u = 2x^2y$, $v = 2xy^2$, $w = 0$.
$\boldsymbol{\omega} = (\frac{\partial w}{\partial y} - \frac{\partial v}{\partial z})\mathbf{i} + (\frac{\partial u}{\partial z} - \frac{\partial w}{\partial x})\mathbf{j} + (\frac{\partial v}{\partial x} - \frac{\partial u}{\partial y})\mathbf{k}$
$\boldsymbol{\omega} = (0 - 0)\mathbf{i} + (0 - 0)\mathbf{j} + (\frac{\partial (2xy^2)}{\partial x} - \frac{\partial (2x^2y)}{\partial y})\mathbf{k}$
$\boldsymbol{\omega} = (0)\mathbf{i} + (0)\mathbf{j} + (2y^2 - 2(2x^2))\mathbf{k}$
$\boldsymbol{\omega} = (2y^2 - 4x^2)\mathbf{k}$
Since $\boldsymbol{\omega} \neq 0$, the flow is **not irrotational**.

**A7.**
$Re = \frac{VL}{\nu} = \frac{(0.1 \, m/s)(0.05 \, m)}{1.0 \times 10^{-6} \, m^2/s} = \frac{0.005}{1.0 \times 10^{-6}} = 5000$
For pipe flow, $Re = 5000$ falls in the **transitional flow** regime ($2300 < Re < 4000$ for laminar to turbulent transition, but the specific ranges can vary depending on the source and definition). It's moving towards turbulent.

---

### Important Points to Remember

*   **Eulerian vs. Lagrangian:** Choose the description that best suits the problem. Most practical analysis uses Eulerian.
*   **Material Derivative:** Always use the material derivative when describing the acceleration of a fluid *particle* in Eulerian coordinates.
*   **Continuity Equation:** It's a fundamental conservation law. For incompressible flow, it simplifies to $\nabla \cdot \mathbf{v} = 0$.
*   **Streamlines:** They are instantaneous and show the direction of flow. They are identical to pathlines and streaklines only in steady flow.
*   **Reynolds Number:** Crucial for predicting flow behavior (laminar vs. turbulent) and is a key parameter in dimensional analysis.
*   **Vorticity:** Indicates local rotation. Zero vorticity means irrotational flow, a special case often simplified using potential flow theory.
