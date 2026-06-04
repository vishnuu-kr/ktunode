---
title: "Fluid dynamics: Continuity equation, Euler’s, and Bernoulli’s equations."
subject: "FLUID MECHANICS AND MACHINERY"
module: "Module 2: Fluid kinematics: Description of fluid motion – Types of flows, Material derivative velocity and acceleration – Streamlines, path lines and streak lines, Stream function and velocity potential function, flow net ."
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462d1d"
status: "completed"
scrapedAt: "2026-05-20T17:49:24.304Z"
---
# Fluid Mechanics and Machinery - Module 2: Fluid Kinematics & Dynamics

This module delves into the fundamental principles governing fluid motion. We'll explore how to describe fluid flow and then focus on the key governing equations of fluid dynamics: the continuity equation, Euler's equation, and Bernoulli's equation. These equations are crucial for analyzing fluid behavior and designing fluid machinery.

**Course Outcomes Addressed:**

*   **CO2:** Classify fluid flow and apply the principles of kinematics and dynamics using conservation of mass and momentum equations. (Knowledge Level: K3)

**Learning Outcomes Covered in this Topic:**

*   Understanding the continuity equation and its applications.
*   Deriving and applying Euler's equation for inviscid fluid flow.
*   Deriving and applying Bernoulli's equation for inviscid, incompressible, steady flow along a streamline.

---

## 1. Fluid Dynamics: Governing Equations

Fluid dynamics is concerned with the motion of fluids and the forces that cause this motion. At the heart of fluid dynamics lie fundamental conservation laws that govern the behavior of fluids. For this topic, we will focus on the **conservation of mass** (continuity equation) and the **conservation of momentum** (leading to Euler's and Bernoulli's equations).

---

### 1.1 The Continuity Equation (Conservation of Mass)

The continuity equation is a mathematical statement of the principle of conservation of mass applied to fluid flow. It states that in a steady flow, the mass entering a control volume must equal the mass leaving it.

#### Key Concepts:

*   **Mass Flow Rate ($\dot{m}$):** The mass of fluid passing through a cross-section per unit time.
    *   $\dot{m} = \rho \cdot A \cdot V$
    *   Where:
        *   $\rho$ is the fluid density (kg/m³)
        *   $A$ is the cross-sectional area (m²)
        *   $V$ is the average velocity of the fluid normal to the area (m/s)

*   **Volume Flow Rate (Discharge, $Q$):** The volume of fluid passing through a cross-section per unit time. For incompressible fluids ($\rho$ = constant):
    *   $Q = A \cdot V$
    *   $Q = \dot{m} / \rho$

#### Forms of the Continuity Equation:

**1. Integral Form (for a Control Volume):**

For a fixed control volume (CV), the rate of accumulation of mass within the CV is equal to the net rate of mass flow into the CV across its boundaries.

$$
\frac{\partial}{\partial t} \int_{CV} \rho \, d\mathcal{V} + \int_{CS} \rho (\vec{V} \cdot \vec{n}) \, dA = 0
$$

*   $\frac{\partial}{\partial t} \int_{CV} \rho \, d\mathcal{V}$: Rate of change of mass within the control volume.
*   $\int_{CS} \rho (\vec{V} \cdot \vec{n}) \, dA$: Net mass flow rate out of the control surface (CS). $\vec{n}$ is the outward normal vector.

**2. Differential Form (for a Fluid Particle):**

This form is derived using the divergence theorem and applies at every point within the fluid.

$$
\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \vec{V}) = 0
$$

Where:
*   $\frac{\partial \rho}{\partial t}$: Rate of change of density at a point.
*   $\nabla \cdot (\rho \vec{V})$: Divergence of the mass flux ($\rho \vec{V}$).

**3. Continuity Equation for Steady, Incompressible Flow:**

For steady flow ($\frac{\partial}{\partial t} = 0$) and incompressible flow ($\rho$ = constant), the continuity equation simplifies significantly.

*   **Differential Form:**
    $$
    \nabla \cdot \vec{V} = 0
    $$
    This means the divergence of the velocity field is zero.

*   **Integral Form (for a Control Volume with Defined Inlets/Outlets):**
    If we consider a control volume with one inlet (area $A_1$, velocity $V_1$) and one outlet (area $A_2$, velocity $V_2$), and no other flows across the boundaries:
    $$
    \rho_1 A_1 V_1 = \rho_2 A_2 V_2
    $$
    For **incompressible** flow ($\rho_1 = \rho_2 = \rho$):
    $$
    A_1 V_1 = A_2 V_2 \quad \text{or} \quad Q_1 = Q_2
    $$
    This is a fundamental result: for steady, incompressible flow, the volume flow rate is constant across different sections of the flow.

#### Important Points to Remember:

*   The continuity equation is a statement of **conservation of mass**.
*   For steady, incompressible flow, the **volume flow rate ($Q$) is constant**.
*   As the cross-sectional area decreases, the velocity must increase to maintain a constant flow rate.

#### Examples:

*   **Water flowing through a pipe:** If water flows through a pipe that narrows from a diameter of 10 cm to 5 cm, the velocity of the water in the narrower section will be four times the velocity in the wider section (since area is proportional to diameter squared, $A \propto D^2$).
    *   $A_1 = \frac{\pi}{4} (0.1)^2$
    *   $A_2 = \frac{\pi}{4} (0.05)^2 = \frac{\pi}{4} (0.1/2)^2 = \frac{1}{4} A_1$
    *   $A_1 V_1 = A_2 V_2 \implies V_2 = \frac{A_1}{A_2} V_1 = \frac{A_1}{A_1/4} V_1 = 4V_1$.

*   **Air flow from a fan:** The air velocity increases as it exits the fan and is directed through a nozzle.

#### Practice Question 1:

Air at standard atmospheric conditions ($\rho = 1.225 \, \text{kg/m}^3$) flows through a horizontal pipe. At section 1, the velocity is $V_1 = 5 \, \text{m/s}$ and the diameter is $D_1 = 0.2 \, \text{m}$. At section 2, the diameter is $D_2 = 0.1 \, \text{m}$. Assuming steady, incompressible flow, what is the velocity $V_2$ at section 2?

**Answer:**

1.  Calculate the areas:
    *   $A_1 = \frac{\pi}{4} D_1^2 = \frac{\pi}{4} (0.2 \, \text{m})^2 = 0.0314 \, \text{m}^2$
    *   $A_2 = \frac{\pi}{4} D_2^2 = \frac{\pi}{4} (0.1 \, \text{m})^2 = 0.00785 \, \text{m}^2$
2.  Use the continuity equation for incompressible flow: $A_1 V_1 = A_2 V_2$
3.  Solve for $V_2$:
    *   $V_2 = \frac{A_1 V_1}{A_2} = \frac{(0.0314 \, \text{m}^2)(5 \, \text{m/s})}{0.00785 \, \text{m}^2} = 20 \, \text{m/s}$

---

### 1.2 Euler's Equation (Conservation of Momentum)

Euler's equation is a differential equation that describes the motion of an inviscid, incompressible fluid. It is derived from Newton's second law of motion applied to a fluid particle. It relates pressure, velocity, and elevation in a fluid flow.

#### Key Concepts:

*   **Inviscid Fluid:** A fluid with zero viscosity. In reality, all fluids have viscosity, but for many flows (especially at high speeds or large scales), the viscosity can be neglected to simplify analysis.
*   **Body Forces:** Forces acting on the volume of the fluid, such as gravity.
*   **Surface Forces:** Forces acting on the surface of the fluid, such as pressure and viscous stresses. Euler's equation considers only pressure forces and body forces.

#### Derivation Sketch (using control volume or Lagrangian approach):

Consider a small fluid particle moving along a streamline. The forces acting on it are:
1.  **Pressure forces:** Acting perpendicular to the surfaces of the particle.
2.  **Gravitational force:** Acting downwards.

Applying Newton's second law (F = ma) along the streamline:

$$
\sum F_{\text{tangential}} = m \cdot a_{\text{tangential}}
$$

For an inviscid fluid, only pressure and gravity contribute to the forces along the streamline. After some manipulation and integration, Euler's equation is obtained.

#### The Equation:

Euler's equation in differential form along a streamline is:

$$
\rho \frac{DV}{Dt} = -\frac{\partial p}{\partial s} - \rho g \frac{\partial z}{\partial s}
$$

Where:
*   $\rho$: density
*   $\frac{DV}{Dt}$: Material derivative of velocity (acceleration of the fluid particle)
*   $\frac{\partial p}{\partial s}$: Pressure gradient along the streamline
*   $g$: acceleration due to gravity
*   $\frac{\partial z}{\partial s}$: Change in elevation along the streamline

More commonly, Euler's equation is expressed in a form that can be integrated along a streamline for steady flow:

$$
\frac{\partial p}{\partial s} + \rho V \frac{\partial V}{\partial s} + \rho g \frac{\partial z}{\partial s} = 0
$$

When integrated between two points (1 and 2) along a streamline, assuming gravity acts in the z-direction:

$$
p_1 + \frac{1}{2} \rho V_1^2 + \rho g z_1 = p_2 + \frac{1}{2} \rho V_2^2 + \rho g z_2
$$

This form is essentially Bernoulli's equation for an inviscid fluid.

#### Important Points to Remember:

*   Euler's equation applies to **inviscid** fluids.
*   It is derived from **Newton's second law** (conservation of momentum).
*   It relates pressure, velocity, and elevation.

---

### 1.3 Bernoulli's Equation (Energy Equation for Inviscid Flow)

Bernoulli's equation is one of the most important equations in fluid dynamics. It is derived from Euler's equation for steady, incompressible, inviscid flow along a streamline and represents a statement of **conservation of mechanical energy**.

#### Key Concepts:

*   **Incompressible Flow:** Density ($\rho$) is constant.
*   **Steady Flow:** Fluid properties (velocity, pressure, density) at any point in the flow do not change with time.
*   **Inviscid Flow:** No viscosity, meaning no internal friction.
*   **Along a Streamline:** Bernoulli's equation in its most common form is applied to points lying on the same streamline.

#### Derivation Sketch:

Start with the integrated form of Euler's equation along a streamline:
$$
p_1 + \frac{1}{2} \rho V_1^2 + \rho g z_1 = p_2 + \frac{1}{2} \rho V_2^2 + \rho g z_2
$$

This can be rearranged to:
$$
\left(p + \frac{1}{2} \rho V^2 + \rho g z\right)_1 = \left(p + \frac{1}{2} \rho V^2 + \rho g z\right)_2
$$

This means that the quantity $(p + \frac{1}{2} \rho V^2 + \rho g z)$ is constant along a streamline for steady, incompressible, inviscid flow.

#### The Equation:

**Bernoulli's Equation:**

$$
p + \frac{1}{2} \rho V^2 + \rho g z = \text{constant}
$$

This equation can be divided by $\rho g$ to express it in terms of heads:

$$
\frac{p}{\rho g} + \frac{V^2}{2g} + z = \text{constant}
$$

Where:
*   $\frac{p}{\rho g}$: **Pressure Head** (the height of a column of fluid that would exert the pressure $p$)
*   $\frac{V^2}{2g}$: **Velocity Head** (the kinetic energy per unit weight of fluid, equivalent to the height the fluid would rise due to its velocity)
*   $z$: **Elevation Head** (the potential energy per unit weight of fluid, or the height above a datum)

The sum of these three heads is the **Total Head**, which remains constant along a streamline for an ideal fluid.

#### Interpretation of Terms:

*   $p$: Static Pressure (pressure exerted by the fluid at rest)
*   $\frac{1}{2} \rho V^2$: Dynamic Pressure (pressure due to the motion of the fluid)
*   $\rho g z$: Hydrostatic Pressure (pressure due to gravity and elevation)

So, Bernoulli's equation can be seen as:
$$
\text{Static Pressure} + \text{Dynamic Pressure} + \text{Hydrostatic Pressure} = \text{Constant}
$$

#### Extensions of Bernoulli's Equation:

1.  **Between two points not on the same streamline:** Bernoulli's equation holds between any two points in a **irrotational flow field** (where the curl of velocity is zero). For most practical applications encountered in introductory fluid mechanics, the flow is assumed to be irrotational, allowing its application more broadly.
2.  **With Energy Losses (Real Fluids):** For real fluids with viscosity, energy is lost due to friction. Bernoulli's equation can be modified to include these losses:
    $$
    \frac{p_1}{\rho g} + \frac{V_1^2}{2g} + z_1 = \frac{p_2}{\rho g} + \frac{V_2^2}{2g} + z_2 + h_L
    $$
    Where $h_L$ represents the head loss due to friction (often called "head loss" or "energy loss"). This is a more advanced topic covered in later modules.
3.  **With Pump/Turbine:** If a pump adds energy or a turbine extracts energy, these terms are included in the equation.

#### Important Points to Remember:

*   Bernoulli's equation is a statement of **conservation of mechanical energy** for ideal fluids.
*   It applies to **steady, incompressible, inviscid flow**.
*   It can be applied between points **along a streamline**.
*   An increase in velocity is accompanied by a decrease in static pressure, and vice-versa, provided the elevation remains constant.

#### Examples:

*   **Venturimeter:** Used to measure flow rate. The narrowing of the Venturi tube increases the velocity, leading to a decrease in pressure, which can be measured.
    *   $p_1 + \frac{1}{2} \rho V_1^2 = p_2 + \frac{1}{2} \rho V_2^2$ (assuming horizontal flow, $z_1 = z_2$)
    *   Since $V_2 > V_1$, then $p_2 < p_1$.

*   **Pitot Tube:** Used to measure fluid velocity. It measures the stagnation pressure (where velocity is zero) and the static pressure. The difference allows calculation of velocity.
    *   Stagnation point: $V_{stag} = 0$.
    *   $p_{stag} + \frac{1}{2} \rho (0)^2 + \rho g z = p_{static} + \frac{1}{2} \rho V^2 + \rho g z$
    *   $p_{stag} = p_{static} + \frac{1}{2} \rho V^2$
    *   $V = \sqrt{\frac{2(p_{stag} - p_{static})}{\rho}}$

*   **Curve ball in baseball:** The spin on the ball creates a pressure difference on opposite sides, causing a curved trajectory.
*   **Airplane wing lift:** The air moving faster over the curved upper surface of the wing creates lower pressure compared to the lower surface, generating lift.

#### Practice Question 2:

Water flows through a horizontal pipe. At point 1, the pressure is $p_1 = 200 \, \text{kPa}$, velocity is $V_1 = 2 \, \text{m/s}$, and the diameter is $D_1 = 0.1 \, \text{m}$. At point 2, the diameter is $D_2 = 0.05 \, \text{m}$. Assuming steady, incompressible, inviscid flow, what is the pressure $p_2$ at point 2? The density of water is $\rho = 1000 \, \text{kg/m}^3$.

**Answer:**

1.  Calculate the areas:
    *   $A_1 = \frac{\pi}{4} D_1^2 = \frac{\pi}{4} (0.1 \, \text{m})^2 = 0.00785 \, \text{m}^2$
    *   $A_2 = \frac{\pi}{4} D_2^2 = \frac{\pi}{4} (0.05 \, \text{m})^2 = 0.00196 \, \text{m}^2$
2.  Use the continuity equation to find $V_2$:
    *   $A_1 V_1 = A_2 V_2 \implies V_2 = \frac{A_1 V_1}{A_2} = \frac{(0.00785)(2)}{0.00196} = 8 \, \text{m/s}$
3.  Apply Bernoulli's equation (since the pipe is horizontal, $z_1 = z_2$):
    *   $p_1 + \frac{1}{2} \rho V_1^2 = p_2 + \frac{1}{2} \rho V_2^2$
4.  Solve for $p_2$:
    *   $p_2 = p_1 + \frac{1}{2} \rho (V_1^2 - V_2^2)$
    *   $p_2 = 200,000 \, \text{Pa} + \frac{1}{2} (1000 \, \text{kg/m}^3) ((2 \, \text{m/s})^2 - (8 \, \text{m/s})^2)$
    *   $p_2 = 200,000 \, \text{Pa} + 500 \, \text{kg/m}^3 (4 - 64) \, \text{m}^2/\text{s}^2$
    *   $p_2 = 200,000 \, \text{Pa} + 500 (-60) \, \text{N/m}^2$
    *   $p_2 = 200,000 \, \text{Pa} - 30,000 \, \text{Pa} = 170,000 \, \text{Pa} = 170 \, \text{kPa}$

---

### 1.4 Connection to Course Outcomes

*   **CO2:** This topic directly addresses CO2 by:
    *   Introducing the **continuity equation** as a conservation of mass principle for classifying fluid flow (steady/unsteady, compressible/incompressible) and applying it to practical scenarios.
    *   Introducing **Euler's and Bernoulli's equations** as direct applications of momentum and energy conservation principles, respectively, to analyze fluid dynamics. We see how pressure, velocity, and elevation are interconnected in flowing fluids. The ability to use these equations to predict fluid behavior aligns with the outcome's requirement to "apply the principles of kinematic and dynamics using the conservation of mass and momentum equations."

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 1.5 References

*   **Fluid Mechanics by Cengel Y. A. and J. M. Cimbala (Tata McGraw Hill, 2013):** Chapters focusing on Fluid Kinematics and Fluid Dynamics will cover these equations. The text provides a thorough explanation with numerous examples and problems. Look for sections on the continuity equation and Bernoulli's equation.
*   **Introduction to Fluid Mechanics and Fluid Machines by Som S.K. (McGraw Hill Education India, 2011):** Similar to Cengel, this textbook will have dedicated chapters on fluid kinematics and dynamics, including derivations and applications of the continuity and Bernoulli equations.
*   **Fluid Mechanics and Hydraulic Machines by Bansal R.K. (Laxmi Publications, 2005):** This is a classic Indian textbook that offers comprehensive coverage of these topics, often with a strong emphasis on problem-solving relevant to engineering applications.

---

## Summary of Key Takeaways:

*   **Continuity Equation:** Conservation of mass. For steady, incompressible flow: $A_1V_1 = A_2V_2$.
*   **Euler's Equation:** Conservation of momentum for inviscid flow. Relates pressure, velocity, and elevation gradients.
*   **Bernoulli's Equation:** Conservation of mechanical energy for steady, incompressible, inviscid flow along a streamline: $\frac{p}{\rho g} + \frac{V^2}{2g} + z = \text{constant}$.
*   **Applications:** These equations are fundamental for analyzing flow in pipes, nozzles, diffusers, wings, and various fluid machinery.

---

This concludes the topic on the Continuity, Euler's, and Bernoulli's equations. Understanding these foundational principles is critical for further study in fluid mechanics and machinery.