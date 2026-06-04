---
title: "flow through blade rows"
subject: "GAS TURBINE AND JET PROPULSION"
module: "Module 2: Axial flow compressor – Working principle"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463ca4"
status: "completed"
scrapedAt: "2026-05-20T18:13:51.277Z"
---
# GAS TURBINE AND JET PROPULSION: Module 2 - Axial Flow Compressor: Working Principle

## Topic: Flow Through Blade Rows

This module focuses on understanding the fundamental working principle of axial flow compressors, specifically delving into the complexities of how the fluid flows through the various blade rows. This knowledge is crucial for analyzing compressor performance and efficiency, directly contributing to Course Outcomes CO1, CO2, and CO3.

---

### 1. Introduction to Axial Flow Compressors and Blade Rows

**Key Concept:** Axial flow compressors are characterized by the primary direction of fluid flow being parallel to the axis of rotation. They consist of alternating rows of stationary **stator vanes** and rotating **rotor blades**.

*   **Purpose of Axial Flow Compressors:** To increase the pressure and temperature of the working fluid (typically air) before it enters the combustion chamber. This energy input is vital for the thermodynamic cycle of a gas turbine. (CO1)
*   **Blade Rows Structure:**
    *   **Rotor Blades:** Attached to a rotating disc, they impart kinetic and pressure energy to the fluid. They are airfoil shaped, designed to efficiently extract energy from the rotating shaft and transfer it to the fluid.
    *   **Stator Vanes:** Stationary blades attached to the casing. Their primary function is to guide the fluid and convert some of the kinetic energy gained in the rotor into pressure energy. They also prepare the flow for the next rotor stage by setting the correct incidence angle.
*   **Stages:** A compressor is made up of multiple stages. Each stage typically consists of one row of rotor blades followed by one row of stator vanes.

---

### 2. Aerodynamics of Flow Through a Single Blade Row

Understanding the flow through a single row of blades (either rotor or stator) is the foundation for understanding the entire compressor.

**Key Concept:** The flow through a blade row involves complex interactions between the fluid and the blade surfaces, governed by principles of fluid dynamics and aerodynamics.

#### 2.1 Velocity Triangles

**Key Concept:** Velocity triangles are graphical representations that depict the velocities of the fluid at the inlet and outlet of a blade row, considering the motion of the blades. They are essential for analyzing energy transfer and flow behavior.

*   **Absolute Velocity (V):** The velocity of the fluid as observed by a stationary observer.
*   **Blade Velocity (U):** The tangential velocity of the rotor blade at the mean radius, given by $U = \omega r$, where $\omega$ is the angular velocity and $r$ is the radius.
*   **Relative Velocity (W):** The velocity of the fluid as observed by an observer moving with the blade.

**For a Rotor Blade Row:**

*   **Inlet Velocity Triangle (1):**
    *   $V_{a1}$: Axial velocity at inlet (constant for an ideal compressor).
    *   $V_{w1}$: Tangential (whirl) velocity at inlet.
    *   $V_1$: Absolute velocity at inlet.
    *   $W_{w1}$: Tangential component of relative velocity at inlet.
    *   $W_{a1}$: Axial component of relative velocity at inlet (often equal to $V_{a1}$ if axial velocity is uniform).
    *   $W_1$: Relative velocity at inlet.

    *Relationships:*
    *   $V_1^2 = V_{a1}^2 + V_{w1}^2$
    *   $W_1^2 = W_{a1}^2 + W_{w1}^2$
    *   $W_{w1} = V_{w1} - U$ (This is crucial: the relative whirl component is the absolute whirl minus the blade speed).
    *   $W_{a1} = V_{a1}$ (assuming no pre-whirl and axial flow).

*   **Outlet Velocity Triangle (2):**
    *   $V_{a2}$: Axial velocity at outlet.
    *   $V_{w2}$: Tangential (whirl) velocity at outlet.
    *   $V_2$: Absolute velocity at outlet.
    *   $W_{w2}$: Tangential component of relative velocity at outlet.
    *   $W_{a2}$: Axial component of relative velocity at outlet.
    *   $W_2$: Relative velocity at outlet.

    *Relationships:*
    *   $V_2^2 = V_{a2}^2 + V_{w2}^2$
    *   $W_2^2 = W_{a2}^2 + W_{w2}^2$
    *   $W_{w2} = V_{w2} - U$

**For a Stator Blade Row:**

*   **Inlet Velocity Triangle (1):** This is the outlet triangle from the preceding rotor stage ($V_1, V_{a1}, V_{w1}, W_1, W_{a1}, W_{w1}$).
*   **Outlet Velocity Triangle (2):**
    *   $V_{a2}$: Axial velocity at outlet.
    *   $V_{w2}$: Tangential (whirl) velocity at outlet.
    *   $V_2$: Absolute velocity at outlet.
    *   Stators do not rotate, so $U=0$. This simplifies the relationships.
    *   $W_{w2} = V_{w2}$
    *   $W_{a2} = V_{a2}$

    *Relationships:*
    *   $V_2^2 = V_{a2}^2 + V_{w2}^2$
    *   $W_2^2 = W_{a2}^2 + W_{w2}^2$
    *   The stator's primary role is to change the direction of the absolute velocity vector, reducing the whirl component ($V_{w1}$ from rotor outlet to $V_{w2}$ at stator outlet) and converting kinetic energy into pressure.

**(Refer to Ganesan, Chapter 5 for detailed velocity triangle derivations and examples.)**

#### 2.2 Work Input and Pressure Rise

**Key Concept:** The work done by the compressor on the fluid per unit mass is directly related to the change in whirl velocity across the rotor blades. The pressure rise is a consequence of this work input and the aerodynamic design of the blades.

*   **Euler's Turbine Equation (for compressors):** The work done per unit mass ($W_{in}$) is given by:
    $W_{in} = U_2 V_{w2} - U_1 V_{w1}$ (where $U_1, V_{w1}$ are at the inlet and $U_2, V_{w2}$ are at the outlet).
    *   For a single stage, assuming mean radius, $U_1 = U_2 = U$.
    *   Thus, $W_{in} = U (V_{w2} - V_{w1})$. This shows that work input is proportional to the change in whirl velocity imparted by the rotor.

*   **Pressure Rise:** The total pressure rise in a compressor stage is achieved through:
    1.  **Work Input by Rotor:** Increases the fluid's kinetic and internal energy.
    2.  **Diffusion in Rotor:** Rotor blades are designed as diffusers, converting some of the kinetic energy imparted into static pressure.
    3.  **Diffusion in Stator:** Stator vanes are also designed as diffusers, further converting kinetic energy into static pressure and guiding the flow for the next stage.

**(CO1, CO2, CO3)**

#### 2.3 Flow Angles and Incidence

**Key Concept:** The angle at which the relative velocity vector strikes the blade is the **incidence angle**. The angle of the blade's chord line relative to the axial direction is the **blade angle**.

*   **Blade Angle ($\beta$):** The angle of the blade's mean chord line relative to the axial direction. This is a geometric parameter of the blade.
*   **Inlet Flow Angle ($\alpha$):** The angle of the relative velocity vector with respect to the axial direction at the blade leading edge.
*   **Incidence Angle ($\Delta \alpha$):** The difference between the blade angle and the flow angle at the leading edge.
    $\Delta \alpha = \beta - \alpha$
    *   **Positive Incidence:** Flow angle is less than blade angle.
    *   **Negative Incidence:** Flow angle is greater than blade angle.
    *   **Zero Incidence:** Flow angle equals blade angle (ideal for maximum efficiency and minimal losses).

*   **Outlet Flow Angle ($\gamma$):** The angle of the relative velocity vector at the blade trailing edge.
*   **Blade Outlet Angle ($\delta$):** The angle of the blade's mean chord line at the trailing edge.

**(Refer to Yahya, Chapter 4 for detailed discussion on incidence and deviation angles.)**

#### 2.4 Deviation Angle

**Key Concept:** Due to viscous effects and the curvature of the flow, the fluid leaves the blade trailing edge at an angle slightly different from the blade's trailing edge angle. This difference is the **deviation angle ($\delta_d$)**.

*   **Outlet Flow Angle ($\gamma$):** $\gamma = \delta - \delta_d$.
*   **Dean's Rule or Carter's Rule:** Empirical correlations are used to estimate deviation angles. For example, Carter's rule relates deviation angle to blade geometry: $\delta_d = m \frac{\theta}{b} \phi$, where $m$ is a constant, $\theta$ is blade angle, $b$ is blade span, and $\phi$ is a flow coefficient.

**Important Point to Remember:** Optimal performance of a blade row occurs when the incidence angle is zero (or very close to zero), meaning the relative flow enters parallel to the blade's leading edge. This minimizes flow separation and losses.

---

### 3. Flow Through Multiple Blade Rows (Stages)

An axial flow compressor consists of multiple stages, each designed to incrementally increase the pressure.

**Key Concept:** Each stage contributes to the overall pressure rise, and the outlet conditions of one stage become the inlet conditions for the next.

*   **Series Operation:** Stages are arranged in series. The axial velocity remains relatively constant across the compressor (ignoring casing divergence).
*   **Stator Role:**
    *   **Straighten the Flow:** Reduces the tangential (whirl) component of the absolute velocity leaving the rotor.
    *   **Convert Kinetic Energy to Pressure Energy:** Stators are designed as diffusers.
    *   **Set Incidence Angle for Next Rotor:** Guides the flow to enter the subsequent rotor at the optimal angle.
*   **Rotor Role:**
    *   **Impart Energy:** Increases both kinetic and internal energy of the fluid.
    *   **Induce Whirl:** Creates a tangential velocity component.
    *   **Diffusion:** Some pressure rise occurs within the rotor due to diffusion.

**Example of a single stage:**
1.  Air enters the rotor blades with an initial absolute velocity $V_1$ and an axial velocity $V_{a1}$.
2.  The rotor blades rotate, imparting energy and creating a relative velocity $W_1$.
3.  The fluid leaves the rotor with an absolute velocity $V_2$ (with a higher tangential component $V_{w2}$) and a relative velocity $W_2$.
4.  The stator vanes then receive this flow, reduce the whirl component ($V_{w2}$) to zero (or a small value) as $V_{w3}$, convert the kinetic energy into pressure, and guide the flow into the next rotor stage. The axial velocity remains approximately constant ($V_{a1} \approx V_{a2}$).

**(Refer to Mathur & Mathur, Chapter 4 for staged compressor analysis.)**

---

### 4. Types of Blade Rows

Compressors utilize different types of blades for varying purposes.

*   **Axial vs. Radial Blades:** While this module focuses on axial flow, some compressors might have radial components. However, axial compressors are dominant for high flow rates.
*   **Blade Design:**
    *   **Airfoil Shape:** Blades are aerodynamically shaped airfoils to minimize drag and maximize lift (or impulse/reaction).
    *   **Twisted Blades:** Blades are often twisted along their span to account for the variation in blade speed ($U$) from root to tip ($U = \omega r$). This ensures a more uniform incidence angle along the span, improving efficiency.
    *   **Camber:** The curvature of the airfoil.
    *   **Chord Length:** The length of the airfoil.
    *   **Pitch:** The distance between corresponding points on adjacent blades.

---

### 5. Performance Parameters Influenced by Flow Through Blade Rows

Understanding flow through blade rows directly impacts key compressor performance metrics.

*   **Isentropic Efficiency ($\eta_{isen}$):** The ratio of the ideal work required to compress the fluid to the actual work done.
    $\eta_{isen} = \frac{\text{Isentropic work input}}{\text{Actual work input}}$
    *   Losses within blade rows (friction, separation, shock waves at high speeds) reduce the actual work input required for a given pressure rise, thus lowering efficiency.
*   **Pressure Ratio:** The ratio of the outlet pressure to the inlet pressure. Each stage contributes to this ratio.
*   **Work Input:** As per Euler's equation, directly related to whirl velocity changes.
*   **Stalling:** Occurs when flow separation on the blade surfaces becomes widespread, leading to a sudden drop in pressure rise and flow rate. This is a critical operational limit determined by incidence angles and flow conditions.
*   **Choking:** Occurs when the flow velocity reaches the speed of sound in the narrowest part of the passage (throat) between blades, limiting further increase in mass flow rate.

**(CO1, CO2, CO3)**

---

### 6. Key Concepts and Definitions Summary

*   **Stator Vane:** Stationary blade row, guides flow, converts kinetic to pressure energy.
*   **Rotor Blade:** Rotating blade row, imparts energy, creates whirl.
*   **Velocity Triangle:** Graphical representation of fluid velocities.
*   **Absolute Velocity (V):** Velocity observed by a stationary observer.
*   **Blade Velocity (U):** Tangential velocity of the rotor.
*   **Relative Velocity (W):** Velocity observed by an observer moving with the blade.
*   **Whirl Velocity ($V_w$):** Tangential component of absolute velocity.
*   **Axial Velocity ($V_a$):** Component of absolute velocity parallel to the compressor axis.
*   **Incidence Angle:** Angle between relative velocity and blade chord at the leading edge.
*   **Deviation Angle:** Angle between relative velocity and blade chord at the trailing edge, due to viscous effects.
*   **Euler's Turbine Equation:** Relates work input to changes in whirl velocity.
*   **Stage:** One rotor and one stator row.

---

### 7. Important Points to Remember

*   The primary function of rotors is to add energy to the fluid and create whirl, while stators recover kinetic energy and guide the flow.
*   Velocity triangles are essential tools for analyzing the flow and energy transfer in each blade row.
*   Zero incidence angle at the blade leading edge generally leads to maximum efficiency and minimal losses.
*   Deviation angle is a loss mechanism that needs to be accounted for in blade design.
*   The axial velocity is generally assumed to be constant across the compressor for simplified analysis.
*   Each stage of an axial compressor contributes to the overall pressure rise.
*   Blade design (airfoil shape, twist) is crucial for efficient flow management.

---

### 8. Practice Questions and Exercises

**Question 1:**
An axial flow compressor rotor blade has a blade speed of 150 m/s. At the outlet of the rotor, the absolute velocity of the air is 200 m/s, making an angle of 60° with the axial direction. The axial velocity is 100 m/s. Determine the velocity of the air relative to the rotor blade at the outlet.
**Answer:**
Given:
$U = 150$ m/s
$V_2 = 200$ m/s
Angle of $V_2$ with axial direction = 60°
$V_{a2} = 100$ m/s

We need to find $W_2$.
First, find the tangential component of absolute velocity, $V_{w2}$:
$V_{w2} = V_2 \cos(60^\circ) = 200 \times 0.5 = 100$ m/s.
However, we are given $V_{a2} = 100$ m/s. Let's re-evaluate $V_{w2}$ using $V_2$ and $V_{a2}$:
$V_2^2 = V_{a2}^2 + V_{w2}^2$
$200^2 = 100^2 + V_{w2}^2$
$40000 = 10000 + V_{w2}^2$
$V_{w2}^2 = 30000$
$V_{w2} = \sqrt{30000} = 100\sqrt{3} \approx 173.2$ m/s.

Now, we can find the components of the relative velocity $W_2$:
The tangential component of relative velocity is $W_{w2} = V_{w2} - U$.
$W_{w2} = 173.2 - 150 = 23.2$ m/s.
The axial component of relative velocity is $W_{a2} = V_{a2} = 100$ m/s (assuming axial flow).

Now, calculate the magnitude of the relative velocity $W_2$:
$W_2^2 = W_{a2}^2 + W_{w2}^2$
$W_2^2 = 100^2 + (23.2)^2$
$W_2^2 = 10000 + 538.24$
$W_2^2 = 10538.24$
$W_2 = \sqrt{10538.24} \approx 102.66$ m/s.

**Question 2:**
A stator row follows a rotor stage. The absolute velocity leaving the rotor is 250 m/s at 70° to the axial direction. The axial velocity is 120 m/s. The stator vanes are designed to produce an outlet absolute velocity that is purely axial. Calculate the work done by the preceding rotor per stage if the rotor speed is 200 m/s. Assume the inlet whirl velocity to the rotor is negligible.
**Answer:**
Given:
Rotor inlet: $V_{w1} = 0$ (negligible)
Rotor outlet: $V_2 = 250$ m/s, angle with axial = 70°, $V_{a2} = 120$ m/s.
Rotor speed: $U = 200$ m/s.

First, find the tangential component of absolute velocity leaving the rotor ($V_{w2}$):
$V_{w2} = V_2 \sin(70^\circ) = 250 \times 0.9397 \approx 234.93$ m/s.
(Alternatively, using $V_{a2}$: $V_{w2} = \sqrt{V_2^2 - V_{a2}^2} = \sqrt{250^2 - 120^2} = \sqrt{62500 - 14400} = \sqrt{48100} \approx 219.3$ m/s. There seems to be an inconsistency in the given values. Let's proceed with the angle-based calculation for $V_{w2}$ as it's more direct from the velocity triangle concept).

Assuming the angle given (70°) correctly describes the velocity vector from the axial direction:
$V_{w2} = V_2 \cos(70^\circ) = 250 \times 0.3420 = 85.5$ m/s.
$V_{a2} = V_2 \sin(70^\circ) = 250 \times 0.9397 = 234.9$ m/s.
This contradicts the given $V_{a2} = 120$ m/s.

Let's use the components provided. If $V_{a2} = 120$ m/s and $V_2 = 250$ m/s:
$V_{w2} = \sqrt{V_2^2 - V_{a2}^2} = \sqrt{250^2 - 120^2} = \sqrt{62500 - 14400} = \sqrt{48100} \approx 219.3$ m/s.
The angle of absolute velocity from axial would be $\arctan(219.3/120) \approx 61.1^\circ$.

Let's assume the intended question implies the *absolute* velocity at rotor outlet is 250 m/s, with axial component 120 m/s.
Then, $V_{w2} = 219.3$ m/s.

Work done by rotor per stage (using Euler's equation, assuming $U_1 = U_2 = U$ for one stage):
$W_{in} = U (V_{w2} - V_{w1})$
$W_{in} = 200 \text{ m/s} \times (219.3 \text{ m/s} - 0 \text{ m/s})$
$W_{in} = 43860$ J/kg or 43.86 kJ/kg.

**Note:** Always ensure consistency of given parameters in velocity triangle problems. Often, angles are measured from the axial or tangential direction.

---

### 9. Relevance to Course Outcomes

*   **CO1 (Thermodynamics and Fluid Dynamics):** This topic directly applies fluid dynamics principles (velocity triangles, flow angles) to understand how energy is transferred to the fluid, which is the basis for thermodynamic cycles.
*   **CO2 (Axial Flow Compressor Performance):** Understanding flow through blade rows is fundamental to calculating compressor efficiency, pressure rise per stage, and identifying potential loss mechanisms (incidence, deviation, diffusion).
*   **CO3 (Component Performance Analysis):** This module provides the detailed analysis of the compressor's primary components (rotors and stators) and how their interaction influences the overall compressor performance.
*   **CO4 (Jet and Rocket Propulsion):** The compressor is a key component in jet engines. Understanding its working is a prerequisite for analyzing the entire propulsion system.

This detailed study of flow through blade rows forms the bedrock for all subsequent analysis of compressor stages and overall compressor performance.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
