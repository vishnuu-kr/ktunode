---
title: "fluid dynamics analysis of rotating machines"
subject: "GAS TURBINE AND JET PROPULSION"
module: "Module 1: Gas Turbines – Introduction"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463c8c"
status: "completed"
scrapedAt: "2026-05-20T18:13:34.895Z"
---
# GAS TURBINE AND JET PROPULSION

## Module 1: Gas Turbines – Introduction

### Topic: Fluid Dynamics Analysis of Rotating Machines

**Learning Outcomes:**

*   Understand the fundamental principles of fluid dynamics applied to rotating machinery.
*   Analyze the flow behavior in turbomachinery components like blades and rotors.
*   Apply basic aerodynamic concepts to the design and performance analysis of gas turbines.
*   Understand the role of velocity triangles in analyzing flow through rotating blades.
*   Recognize the importance of dimensionless parameters in turbomachinery analysis.

---

### 1. Introduction to Fluid Dynamics in Rotating Machines

Fluid dynamics is the study of fluids (liquids and gases) in motion and the forces acting upon them. In the context of rotating machines like gas turbines, understanding fluid dynamics is crucial for analyzing the energy transfer between the fluid and the rotating components (blades).

*   **Energy Transfer:** Rotating machines work by transferring energy to or from a fluid. In a gas turbine, the hot expanding gases transfer their energy to the rotor, causing it to spin. In a compressor, the rotor imparts energy to the fluid to increase its pressure.
*   **Key Components:** Gas turbines consist of several rotating components:
    *   **Compressor:** Increases the pressure of the working fluid (air).
    *   **Turbine:** Extracts energy from the high-temperature, high-pressure gas.
*   **Flow Patterns:** The fluid flows through these components, interacting with the stationary (stator) and rotating (rotor) blades. The flow is complex and three-dimensional, but simplified 1D and 2D analyses are often used initially.

**Reference:**
*   *Gas Turbines* by V. Ganesan (McGraw Hill Education, Third, 2017) - Chapter 2 on Aerodynamics of Aerofoils and Cascades.
*   *Gas Turbine Theory* by H. Cohen (Pearson Education, Seventh, 2019) - Chapter 3 on Aerodynamics of Aerofoils and Cascades.

---

### 2. Basic Aerodynamic Concepts

*   **Aerofoil/Airfoil:** The cross-sectional shape of a blade is called an aerofoil. Its shape is optimized to generate lift and minimize drag when fluid flows over it.
    *   **Stagger Angle:** The angle between the chord line of the aerofoil and a reference line (e.g., the axis of rotation).
    *   **Chord Line:** The straight line joining the leading edge to the trailing edge of the aerofoil.
    *   **Camber:** The curvature of the aerofoil.
    *   **Angle of Attack (AoA) / Incidence Angle:** The angle between the incoming fluid flow and the chord line of the aerofoil. This angle significantly affects the lift and drag forces.

*   **Cascade:** A row of aerofoils placed side-by-side, representing the blades in a compressor or turbine stage.

*   **Lift and Drag:**
    *   **Lift:** The component of the aerodynamic force perpendicular to the direction of the relative fluid flow. It is the primary force responsible for driving the turbine rotor or causing pressure rise in the compressor.
    *   **Drag:** The component of the aerodynamic force parallel to the direction of the relative fluid flow. It opposes the motion and represents energy loss.

**Reference:**
*   *Turbines, Compressors and Fans* by S. M. Yahya (McGraw Hill, Fourth, 2011) - Chapter 2 on Aerodynamics of Cascades.
*   *Gas Turbine Theory* by H. Cohen (Pearson Education, Seventh, 2019) - Chapter 3 provides detailed analysis of aerofoil characteristics.

---

### 3. Velocity Triangles

Velocity triangles are graphical representations used to analyze the flow of fluid relative to a rotating blade. They are essential for understanding the angles and speeds at which the fluid enters and leaves a blade.

**Key Concepts:**

*   **Absolute Velocity ($V$):** The velocity of the fluid as observed by a stationary observer.
*   **Blade Velocity ($U$):** The tangential velocity of the rotating blade, given by $U = \omega r$, where $\omega$ is the angular velocity and $r$ is the radius.
*   **Relative Velocity ($W$):** The velocity of the fluid as observed by an observer moving with the blade. It is the vector difference between the absolute velocity and the blade velocity: $W = V - U$.

**Components of Velocity:**

*   **Tangential Component ($V_u$, $W_u$):** The component of velocity tangential to the direction of rotation.
*   **Axial Component ($V_a$):** The component of velocity parallel to the axis of rotation.
*   **Radial Component ($V_r$):** The component of velocity perpendicular to the axis of rotation. In simple axial flow machines, this is often assumed to be zero.

**Construction of a Velocity Triangle:**

Consider a single stage of a turbomachine with a row of rotor blades.

*   **At the Inlet:**
    *   Draw the absolute velocity vector $V_1$.
    *   Draw the blade velocity vector $U$ (horizontal, assuming axial flow).
    *   The relative velocity $W_1$ is the vector difference $V_1 - U$.
    *   The angle of the relative velocity with respect to the tangent is the inlet relative flow angle ($\beta_1$).
    *   The angle of the absolute velocity with respect to the tangent is the inlet absolute flow angle ($\alpha_1$).

*   **At the Outlet:**
    *   Draw the blade velocity vector $U$ (same magnitude as inlet for a single stage, but in the same direction relative to the blade).
    *   Draw the absolute velocity vector $V_2$.
    *   The relative velocity $W_2$ is the vector difference $V_2 - U$.
    *   The angle of the relative velocity with respect to the tangent is the outlet relative flow angle ($\beta_2$).
    *   The angle of the absolute velocity with respect to the tangent is the outlet absolute flow angle ($\alpha_2$).

**Blade Angles:**

*   **Rotor Blade Angle ($\phi_1$, $\phi_2$):** The angle of the blade profile at the inlet and outlet, usually measured relative to the tangential direction. The rotor blade is designed such that the relative flow enters without shock (ideally parallel to the blade surface). Therefore, the relative flow angle ($\beta_1$) should match the blade inlet angle ($\phi_1$).

**Energy Transfer (Work Done):**

The work done per unit mass of fluid by the rotor is given by the Euler turbomachine equation:

$W_{rotor} = U_2 V_{u2} - U_1 V_{u1}$

Where:
*   $U_1, U_2$ are the blade velocities at the inlet and outlet.
*   $V_{u1}, V_{u2}$ are the tangential components of absolute velocity at the inlet and outlet.

For a simple axial flow machine where the radius is constant ($U_1 = U_2 = U$):

$W_{rotor} = U (V_{u2} - V_{u1})$

*   **In a turbine:** The tangential component of velocity generally increases in the direction of rotation ($V_{u2} > V_{u1}$), resulting in positive work output.
*   **In a compressor:** The tangential component of velocity generally decreases ($V_{u2} < V_{u1}$) or even reverses direction, requiring work input.

**Reference:**
*   *Gas Turbines* by V. Ganesan (McGraw Hill Education, Third, 2017) - Chapter 3 on Velocity Diagrams.
*   *Turbines, Compressors and Fans* by S. M. Yahya (McGraw Hill, Fourth, 2011) - Chapter 3 on Velocity Triangles.
*   *Gas Turbine Theory* by H. Cohen (Pearson Education, Seventh, 2019) - Chapter 4 on Velocity Triangles.

---

### 4. Flow Through Axial Flow Machines

Axial flow compressors and turbines are characterized by fluid flow primarily parallel to the axis of rotation.

**Key Considerations:**

*   **Axial Velocity ($V_a$):** Remains relatively constant through a stage (ignoring compressibility effects and stream tube variations). It is crucial for determining the mass flow rate.
*   **Tangential Velocity Change ($\Delta V_u$):** The change in the tangential component of absolute velocity across the rotor is directly related to the work done by the rotor.
*   **Blade Shape and Angles:** The geometry of the blades is designed based on the velocity triangles to achieve the desired flow deflection and energy transfer.
*   **Incidence Loss:** If the relative flow does not enter the blade parallel to its leading edge, there is a loss in performance and efficiency. The difference between the relative flow angle and the blade inlet angle is the incidence angle.

**Example: Axial Flow Compressor Stage**

An axial flow compressor stage typically consists of a row of stator blades followed by a row of rotor blades.

*   **Stator:** Guides the flow and converts pressure into kinetic energy (velocity) or vice-versa, preparing the flow for the rotor. In a compressor, stators usually increase the swirl.
*   **Rotor:** Imparts kinetic energy to the fluid, increasing its pressure and velocity. The rotor blades are aerofoils designed to accelerate the flow in a tangential direction, thus doing work on the fluid.

**Velocity Triangles for a Stage (Rotor followed by Stator):**

The flow leaving the rotor ($V_2, W_2, U$) then enters the stator. The stator blades are stationary.

*   **Inlet to Rotor:** $V_1$, $U$, $W_1$ (forming velocity triangle 1).
*   **Outlet from Rotor / Inlet to Stator:** $V_2$, $U$, $W_2$ (forming velocity triangle 2).
*   **Outlet from Stator:** $V_3$, $U$, $W_3$ (forming velocity triangle 3). The stator redirects the flow without changing the blade speed, so $U$ is constant.

**Reference:**
*   *Gas Turbines* by V. Ganesan (McGraw Hill Education, Third, 2017) - Chapter 4 on Velocity Triangles and Stage Properties.
*   *Turbines, Compressors and Fans* by S. M. Yahya (McGraw Hill, Fourth, 2011) - Chapter 4 on Flow Through Axial Compressors.

---

### 5. Dimensionless Parameters in Turbomachinery

Dimensionless parameters are crucial for scaling experimental results and comparing the performance of geometrically similar turbomachines of different sizes or operating under different conditions.

*   **Reynolds Number ($Re$):** Represents the ratio of inertial forces to viscous forces.
    $Re = \frac{\rho V L}{\mu}$
    Where:
    *   $\rho$ is the fluid density.
    *   $V$ is a characteristic velocity.
    *   $L$ is a characteristic length (e.g., chord length).
    *   $\mu$ is the dynamic viscosity of the fluid.
    High Reynolds numbers are typical in gas turbines, indicating predominantly inertial effects.

*   **Mach Number ($M$):** Represents the ratio of fluid velocity to the speed of sound.
    $M = \frac{V}{a}$
    Where:
    *   $V$ is the fluid velocity.
    *   $a$ is the speed of sound in the fluid.
    Mach number is critical for analyzing compressibility effects, especially in high-speed compressors and turbine stages. Different flow regimes exist: subsonic ($M<1$), sonic ($M=1$), and supersonic ($M>1$).

*   **Specific Speed ($N_s$):** A dimensionless parameter used to classify pumps and turbines. It relates the speed, power, and head (or flow rate) of a machine at its best efficiency point. While more commonly associated with pumps and hydraulic turbines, similar concepts apply to gas turbines for characterizing their suitability for different applications.
    For turbines, it relates rotational speed ($N$), power output ($P$), and head ($H$):
    $N_s = \frac{N \sqrt{P}}{H^{5/4}}$
    For compressors, it relates rotational speed ($N$), volumetric flow rate ($Q$), and head developed ($\Delta p / \rho$):
    $N_s = \frac{N \sqrt{Q}}{( \Delta p / \rho )^{3/4}}$
    The specific speed helps in selecting the appropriate machine type for a given operating condition.

*   **Flow Coefficient ($\phi$) and Head/Work Coefficient ($\psi$):**
    *   **Flow Coefficient ($\phi$):** Relates the axial velocity to the blade speed.
        $\phi = \frac{V_a}{U}$
    *   **Work Coefficient ($\psi$):** Relates the work done to the blade speed squared.
        $\psi = \frac{W_{rotor}}{U^2}$ (for turbines, this would be the energy extracted per unit mass divided by $U^2$)

These coefficients are useful for correlating performance data across different operating points and machine sizes.

**Reference:**
*   *Gas Turbines* by V. Ganesan (McGraw Hill Education, Third, 2017) - Chapter 1 mentions the importance of dimensionless parameters.
*   *Gas Turbine Theory* by H. Cohen (Pearson Education, Seventh, 2019) - Chapter 1 provides a good overview of dimensionless parameters.

---

### 6. Aerodynamics of Blade Rows (Cascades)

The analysis of flow over a single aerofoil in isolation is often insufficient. Blades in turbomachinery are arranged in rows (cascades), and the flow interaction between adjacent blades must be considered.

*   **Pitch:** The distance between the centers of adjacent blades in a row.
*   **Solidity:** The ratio of the chord length to the pitch ($\sigma = c/s$). Higher solidity generally leads to better guidance of the flow but also higher losses.
*   **Pitch-to-Chord Ratio:** Affects the blade loading and the flow deflection.

**Flow Deflection:**
The angle by which the fluid is turned as it passes through a blade row is called flow deflection. This is a key parameter in designing stages to achieve the desired pressure and velocity changes.

**Losses in Blade Rows:**
Several factors contribute to losses in turbomachinery:
*   **Profile Loss:** Due to friction and boundary layer development on the blade surfaces.
*   **Incidence Loss:** Due to the misalignment of the relative flow with the blade's leading edge.
*   **Circulation Loss:** Due to the formation of wingtip vortices in 3D flow.
*   **Secondary Flow Loss:** Complex flow patterns arising from pressure gradients across the blade span.

**Reference:**
*   *Gas Turbines* by V. Ganesan (McGraw Hill Education, Third, 2017) - Chapter 2 discusses the aerodynamics of aerofoils and cascades.
*   *Turbines, Compressors and Fans* by S. M. Yahya (McGraw Hill, Fourth, 2011) - Chapter 2 on Aerodynamics of Cascades.

---

### Practice Questions and Answers

**Question 1:**
Define the following terms related to the fluid dynamics of rotating machines:
a) Absolute velocity
b) Blade velocity
c) Relative velocity
d) Angle of attack

**Answer 1:**
a) **Absolute velocity ($V$):** The velocity of the fluid as observed by a stationary observer.
b) **Blade velocity ($U$):** The tangential velocity of the rotating blade, calculated as $U = \omega r$.
c) **Relative velocity ($W$):** The velocity of the fluid as observed by an observer moving with the blade, calculated as the vector difference $W = V - U$.
d) **Angle of attack (AoA):** The angle between the incoming fluid flow and the chord line of the aerofoil.

---

**Question 2:**
State the Euler turbomachine equation for the work done per unit mass of fluid by a rotor.

**Answer 2:**
The Euler turbomachine equation for the work done per unit mass of fluid by a rotor is:
$W_{rotor} = U_2 V_{u2} - U_1 V_{u1}$
where:
*   $U_1, U_2$ are the blade velocities at the inlet and outlet respectively.
*   $V_{u1}, V_{u2}$ are the tangential components of the absolute velocity of the fluid at the inlet and outlet respectively.

---

**Question 3:**
In an axial flow compressor stage, the axial velocity of the air is $V_a = 150$ m/s and the blade speed is $U = 200$ m/s. Calculate the flow coefficient.

**Answer 3:**
The flow coefficient ($\phi$) is defined as the ratio of the axial velocity ($V_a$) to the blade speed ($U$).
$\phi = \frac{V_a}{U}$
Given:
$V_a = 150$ m/s
$U = 200$ m/s

$\phi = \frac{150}{200} = 0.75$

The flow coefficient is 0.75.

---

**Question 4:**
What is the significance of the Reynolds number and Mach number in turbomachinery analysis?

**Answer 4:**
*   **Reynolds Number ($Re$):** Indicates the ratio of inertial forces to viscous forces. High $Re$ in gas turbines signifies that inertial effects dominate, leading to thinner boundary layers and less viscous drag compared to low $Re$ flows. It's crucial for predicting flow behavior and losses.
*   **Mach Number ($M$):** Indicates the ratio of fluid velocity to the speed of sound. It is critical for analyzing compressibility effects. High Mach numbers can lead to shock waves, flow separation, and significant performance changes, requiring careful aerodynamic design.

---

### Important Points to Remember:

*   **Velocity Triangles:** Essential for analyzing the flow angles and velocities at the inlet and outlet of rotating blades.
*   **Euler's Equation:** Relates the work done by the rotor to the change in the tangential component of absolute velocity.
*   **Blade Angles:** Must be matched with the relative flow angles for efficient energy transfer and to minimize incidence losses.
*   **Axial Flow:** Characterized by flow primarily parallel to the axis of rotation. The axial velocity is key for mass flow rate.
*   **Dimensionless Parameters:** Reynolds number, Mach number, and flow/work coefficients are vital for scaling and comparing turbomachinery performance.
*   **Aerofoil Design:** The shape of the aerofoil is critical for generating lift and minimizing drag, influencing stage performance.

---

**Alignment with Course Outcomes:**

*   **CO1:** This topic directly addresses the application of fluid dynamics principles to understand the flow behavior within gas turbine components, laying the groundwork for analyzing cycle performance and efficiency. (Knowledge Level: K3)
*   **CO2:** Velocity triangles and the analysis of flow through blade rows are fundamental to analyzing the performance characteristics of axial flow compressors and reaction turbines. (Knowledge Level: K4)
*   **CO3:** Understanding the fluid dynamics within components like blades and the use of velocity triangles are essential for analyzing the overall performance of gas turbine systems. (Knowledge Level: K4)
*   **CO4:** While this topic focuses on the rotating machinery aspects of gas turbines, the fundamental fluid dynamics principles are transferable to understanding the flow in jet propulsion systems. (Knowledge Level: K2 - foundational)

This concludes Module 1, Topic 1. The next topics will build upon these fundamental fluid dynamics principles to delve deeper into the operation of specific gas turbine components.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
