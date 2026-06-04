---
title: "Fluid dynamics : Forces in fluid motion"
subject: "FLUID MECHANICS"
module: "Module 3: Fluid Kinematics : Methods of describing fluid motion"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba8106fa"
status: "completed"
scrapedAt: "2026-05-20T18:40:36.775Z"
---
# Fluid Mechanics: Module 3 - Fluid Kinematics: Methods of Describing Fluid Motion

## Topic: Fluid Dynamics: Forces in Fluid Motion

This topic delves into the fundamental forces that govern the motion of fluids. Understanding these forces is crucial for analyzing and predicting fluid behavior in various engineering applications.

---

### Learning Outcomes:

*   **LO1: Understand the fundamental forces acting on a fluid element.**
*   **LO2: Differentiate between the various types of forces and their contributions to fluid motion.**
*   **LO3: Analyze the relationship between forces and fluid acceleration using Newton's Second Law.**
*   **LO4: Apply the concept of body forces and surface forces to fluid motion analysis.**
*   **LO5: Recognize the importance of dimensionless numbers in relating different types of forces.**

---

### 1. Introduction to Forces in Fluid Motion

Fluid motion is a result of the interplay of various forces acting on the fluid. These forces can be broadly categorized as:

*   **Body Forces:** Forces acting on the entire mass of the fluid element.
*   **Surface Forces:** Forces acting on the surface of the fluid element.

The net force acting on a fluid element dictates its acceleration according to Newton's Second Law of Motion ($F = ma$).

---

### 2. Types of Forces Acting on a Fluid Element

#### 2.1. Body Forces

Body forces are proportional to the mass of the fluid element.

*   **Gravity Force ($F_g$):**
    *   **Definition:** The force exerted on the fluid due to gravitational acceleration.
    *   **Direction:** Always acts downwards, towards the center of the Earth.
    *   **Magnitude:** $F_g = m \cdot g$, where $m$ is the mass of the fluid element and $g$ is the acceleration due to gravity.
    *   **Volume Density:** Often expressed in terms of specific weight ($\gamma$) where $\gamma = \rho \cdot g$, and $\rho$ is the fluid density. Then, $F_g = \gamma \cdot V$, where $V$ is the volume of the fluid element.
    *   **Example:** The weight of water in a reservoir, the gravitational pull on atmospheric air.

*   **Electromagnetic Forces ($F_e$):**
    *   **Definition:** Forces arising from the interaction of electrically charged fluid particles with electric and magnetic fields.
    *   **Relevance:** Significant for plasmas, ionized gases, and magnetohydrodynamics (MHD).
    *   **Example:** Lorentz force acting on a charged particle moving in a magnetic field.

*   **Coriolis Force ($F_c$):**
    *   **Definition:** An apparent force that acts on objects moving within a rotating frame of reference.
    *   **Relevance:** Important for large-scale atmospheric and oceanic phenomena.
    *   **Example:** The deflection of winds in the Northern Hemisphere due to the Earth's rotation.

**Important Note:** For most common fluid mechanics problems at the macroscopic level, gravity is the dominant body force.

#### 2.2. Surface Forces

Surface forces act on the surfaces of the fluid element. They arise from the interactions between adjacent fluid particles or between the fluid and its boundaries.

*   **Pressure Force ($F_p$):**
    *   **Definition:** Force exerted by the pressure of the fluid on the surface of the element. Pressure acts perpendicular to the surface.
    *   **Nature:** A normal force.
    *   **Magnitude:** $F_p = P \cdot A$, where $P$ is the pressure and $A$ is the area of the surface. In differential form, the net pressure force on a small element is related to the pressure gradient.
    *   **Example:** The force exerted by water on the walls of a pipe, the lift on an airplane wing due to pressure differences.

*   **Viscous Forces ($F_v$):**
    *   **Definition:** Forces arising from the internal friction within the fluid due to viscosity. These forces resist relative motion between adjacent fluid layers.
    *   **Nature:** Tangential (shear) forces.
    *   **Mechanism:** Caused by molecular momentum exchange.
    *   **Magnitude:** Proportional to the viscosity of the fluid and the velocity gradients. For Newtonian fluids, shear stress ($\tau$) is given by $\tau = \mu \frac{du}{dy}$, where $\mu$ is the dynamic viscosity and $\frac{du}{dy}$ is the velocity gradient. The force is then $F_v = \tau \cdot A$.
    *   **Example:** The drag force experienced by an object moving through a viscous fluid, the resistance to flow in a pipe.

*   **Surface Tension Forces ($F_{st}$):**
    *   **Definition:** Forces that arise from the cohesive forces between fluid molecules at the free surface. They tend to minimize the surface area.
    *   **Nature:** Tangential forces acting along the surface.
    *   **Relevance:** Significant for small-scale phenomena involving free surfaces.
    *   **Magnitude:** Related to surface tension coefficient ($\sigma$) and the length of the surface.
    *   **Example:** The formation of droplets, capillary action (e.g., water rising in a thin tube), the behavior of soap bubbles.

---

### 3. Newton's Second Law in Fluid Motion

Newton's Second Law of Motion ($F_{net} = m \cdot a$) is the cornerstone of fluid dynamics. For a fluid element, the net force is the sum of all body and surface forces. This net force causes the fluid element to accelerate.

**Mathematical Representation:**

For a fluid element of mass $dm$, the equation of motion is:

$$
\sum F_{body} + \sum F_{surface} = dm \cdot \mathbf{a}
$$

where:
*   $\sum F_{body}$ is the sum of all body forces.
*   $\sum F_{surface}$ is the sum of all surface forces.
*   $dm$ is the mass of the fluid element.
*   $\mathbf{a}$ is the acceleration of the fluid element.

To analyze fluid motion, we often work with forces per unit mass or per unit volume.

*   **Force per unit mass:** $\frac{\sum F}{m} = \mathbf{a}$
*   **Force per unit volume:** $\frac{\sum F}{V}$

This leads to the fundamental equations of fluid motion, such as the **Cauchy's momentum equation** (for inviscid fluids) and the **Navier-Stokes equations** (for viscous fluids).

**Key Concept: Pressure Gradient**

The pressure force on a fluid element is driven by the pressure gradient. If the pressure varies across a fluid element, there will be a net force due to pressure.

*   **In one dimension:** The net pressure force per unit volume is $-\frac{\partial P}{\partial x}$.
*   **In three dimensions:** The net pressure force per unit volume is $-\nabla P$ (the negative gradient of pressure).

---

### 4. Application of Forces in Fluid Motion Analysis

Understanding these forces allows us to analyze various fluid phenomena:

*   **Hydrostatics:** Fluids at rest. The dominant force is pressure, which varies with depth due to gravity.
    *   Equation: $\frac{dP}{dz} = -\rho g$ (for vertical direction)
*   **Inviscid Flow (Eulerian Fluid):** Neglects viscous forces. Motion is governed by pressure and body forces (primarily gravity).
    *   **Euler's Equation:** Represents Newton's Second Law for inviscid fluids. In its Bernoulli form, it relates pressure, velocity, and elevation along a streamline.
*   **Viscous Flow (Navier-Stokes Equations):** Accounts for pressure, body forces, and viscous forces. This is the most general form of fluid motion equations.
    *   **Key Elements:** Inertial forces, pressure forces, viscous forces, body forces.

---

### 5. Dimensionless Numbers and Force Ratios

In fluid mechanics, it's often useful to compare the relative importance of different forces. This is achieved through dimensionless numbers, which are ratios of characteristic forces.

*   **Reynolds Number ($Re$):**
    *   **Definition:** Ratio of inertial forces to viscous forces.
    *   **Formula:** $Re = \frac{\rho V L}{\mu} = \frac{V L}{\nu}$
        *   $\rho$: Fluid density
        *   $V$: Characteristic velocity
        *   $L$: Characteristic length
        *   $\mu$: Dynamic viscosity
        *   $\nu$: Kinematic viscosity ($\nu = \mu/\rho$)
    *   **Significance:**
        *   **Low $Re$ (e.g., $Re < 2300$ for pipe flow):** Viscous forces dominate, leading to **laminar flow** (smooth, layered).
        *   **High $Re$ (e.g., $Re > 4000$ for pipe flow):** Inertial forces dominate, leading to **turbulent flow** (chaotic, irregular).
        *   **Intermediate $Re$:** Transition from laminar to turbulent flow.

*   **Froude Number ($Fr$):**
    *   **Definition:** Ratio of inertial forces to gravitational forces.
    *   **Formula:** $Fr = \frac{V}{\sqrt{g L}}$
    *   **Significance:** Important for flows with free surfaces where gravity plays a significant role.
        *   **$Fr < 1$ (Subcritical flow):** Gravitational forces dominate.
        *   **$Fr = 1$ (Critical flow):** Inertial and gravitational forces are balanced.
        *   **$Fr > 1$ (Supercritical flow):** Inertial forces dominate.
    *   **Example:** Flow over weirs, ship hydrodynamics, open channel flow.

*   **Mach Number ($Ma$):**
    *   **Definition:** Ratio of fluid velocity to the speed of sound in the fluid.
    *   **Formula:** $Ma = \frac{V}{c}$
        *   $c$: Speed of sound in the fluid
    *   **Significance:** Important for compressible flows where density variations are significant due to velocity changes.
        *   **$Ma < 0.3$ (Incompressible flow):** Compressibility effects are negligible.
        *   **$Ma > 0.3$ (Compressible flow):** Compressibility effects are significant.

**Important Point:** Dimensionless numbers help us scale up or down experiments and understand the fundamental flow regimes without needing to know the exact magnitudes of all forces. They are crucial for similitude and modeling.

---

### 6. Practice Questions and Exercises

**Question 1:**
Identify the primary body force and surface forces acting on water flowing through a long, horizontal pipe at moderate speeds. Explain the relative significance of each force in this scenario.

**Answer 1:**
*   **Primary Body Force:** Gravity (acts downwards, but since the pipe is horizontal, its effect on the horizontal flow is minimal unless there are vertical accelerations or variations in pipe diameter).
*   **Primary Surface Forces:**
    *   **Pressure Force:** Drives the flow from a region of higher pressure to lower pressure.
    *   **Viscous Forces:** Act at the pipe walls, opposing the flow and causing a velocity gradient.
*   **Relative Significance:** Pressure forces are the driving force for flow in a horizontal pipe. Viscous forces are crucial as they cause resistance (friction loss) and create the velocity profile. Gravity's direct influence on the horizontal flow is less significant than pressure and viscous forces.

**Question 2:**
A fluid element has a mass of $10^{-6}$ kg. If the net force acting on it is $2 \times 10^{-5}$ N, what is its acceleration?

**Answer 2:**
Using Newton's Second Law, $F = ma$:
$a = \frac{F}{m} = \frac{2 \times 10^{-5} \text{ N}}{10^{-6} \text{ kg}} = 20 \text{ m/s}^2$

**Question 3:**
In a steady flow of air in an airplane engine at high speed, which dimensionless number would be most important to consider when analyzing the flow? Explain why.

**Answer 3:**
The **Mach Number ($Ma$)** would be most important. High speeds in an airplane engine imply that the fluid velocity is comparable to the speed of sound. At these speeds, density variations become significant, and compressibility effects must be considered. The Mach number quantifies this compressibility. Reynolds number would also be important for viscosity effects, but Mach number directly addresses the high-speed nature of the flow.

**Question 4:**
What physical phenomenon is primarily governed by surface tension forces in fluid mechanics?
a) Flow in large rivers
b) Capillary rise in a narrow tube
c) Drag on a ship's hull
d) Aerodynamic lift on an airplane wing

**Answer 4:**
b) Capillary rise in a narrow tube

---

### 7. Important Points to Remember

*   Fluid motion is a consequence of the net force acting on the fluid, governed by Newton's Second Law.
*   Forces are categorized into **body forces** (acting on the mass, e.g., gravity, electromagnetic) and **surface forces** (acting on the surface, e.g., pressure, viscous, surface tension).
*   **Pressure forces** are due to pressure gradients and act perpendicular to surfaces.
*   **Viscous forces** are due to internal friction and resist relative motion, acting tangentially as shear stresses.
*   The **Reynolds number ($Re$)** is a critical dimensionless parameter comparing inertial to viscous forces, determining the flow regime (laminar vs. turbulent).
*   The **Froude number ($Fr$)** compares inertial to gravitational forces, important for free-surface flows.
*   The **Mach number ($Ma$)** compares fluid velocity to the speed of sound, crucial for compressible flows.
*   Understanding the relative magnitudes of these forces allows for simplification and effective analysis of complex fluid behavior.

---
