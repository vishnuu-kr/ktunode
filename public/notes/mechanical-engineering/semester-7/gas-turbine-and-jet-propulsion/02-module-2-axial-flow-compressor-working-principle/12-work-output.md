---
title: "work output"
subject: "GAS TURBINE AND JET PROPULSION"
module: "Module 2: Axial flow compressor – Working principle"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463caa"
status: "completed"
scrapedAt: "2026-05-20T18:13:55.482Z"
---
# GAS TURBINE AND JET PROPULSION

## Module 2: Axial Flow Compressor – Working Principle

### Topic: Work Output

---

### 1. Introduction to Work Output in Axial Flow Compressors

The primary function of an axial flow compressor is to increase the pressure of the incoming air by imparting kinetic energy and then converting this kinetic energy into a pressure rise. This energy transfer is achieved through the work done on the fluid by the rotating blades. Understanding work output is crucial for analyzing compressor performance, efficiency, and its contribution to the overall gas turbine cycle.

---

### 2. Key Concepts and Definitions

*   **Work Done (W):** The energy transferred to the fluid by the rotating blades. In a compressor, this work is positive as energy is added to the system.
*   **Specific Work (w):** The work done per unit mass of fluid. This is often expressed in J/kg or kJ/kg.
*   **Blade Speed (U):** The tangential velocity of the rotating blades at a specific radius. $U = \omega r$, where $\omega$ is the angular velocity and $r$ is the radius.
*   **Absolute Velocity (V):** The velocity of the fluid as observed from a stationary frame of reference.
*   **Relative Velocity (W):** The velocity of the fluid as observed from the rotating frame of reference of the blade.
*   **Velocity Triangles:** Diagrams that represent the vector addition of velocities at the inlet and outlet of a blade row. They are essential for analyzing the work done.
*   **Tangential Velocity Component ($V_{u}$ or $C_{u}$):** The component of absolute velocity in the direction of blade rotation. This component is directly responsible for transferring energy to the fluid.
*   **Axial Velocity Component ($V_{a}$ or $C_{a}$):** The component of absolute velocity in the direction of the compressor axis. This component is generally kept constant across a blade row in an ideal axial compressor, though it varies slightly in reality due to density changes.
*   **Radial Velocity Component ($V_{r}$ or $C_{r}$):** The component of absolute velocity in the radial direction.
*   **Euler's Turbine Theorem (or Euler's Equation for Turbomachinery):** A fundamental equation that relates the work done on a fluid to the change in the tangential velocity component of the fluid. For a compressor, it states:

    **Specific Work Output (w) = $U_2 V_{u2} - U_1 V_{u1}$**

    Where:
    *   $U_1$ and $U_2$ are the blade speeds at the inlet and outlet of a blade row, respectively.
    *   $V_{u1}$ and $V_{u2}$ are the tangential components of the absolute fluid velocity at the inlet and outlet of a blade row, respectively.

*   **Isentropic Work:** The ideal minimum work required to achieve a certain pressure rise, assuming an isentropic (reversible adiabatic) compression process.
*   **Actual Work:** The work actually done on the fluid, which is always greater than the isentropic work due to irreversibilities (friction, turbulence).

---

### 3. Working Principle and Work Transfer

The work is done on the air by the rotating blades. Each stage of an axial flow compressor consists of a set of rotating blades (rotor) followed by a set of stationary blades (stator).

*   **Rotor Blades:** The rotor blades are airfoils that are designed to impart kinetic energy to the air. As the rotor rotates, the air flowing through it experiences an increase in its velocity and a change in direction. The tangential component of the air's velocity increases, meaning the rotor blades are doing positive work on the air.
*   **Stator Blades:** The stator blades are fixed and are also airfoils. Their primary role is to diffuse the high-velocity air leaving the rotor, converting some of its kinetic energy into a pressure rise without any further work input. They also guide the flow to the next rotor stage.

**Mechanism of Work Transfer:**

1.  **Rotor Action:** The rotor blades are designed to accelerate the air in the tangential direction. This is achieved by creating a pressure difference across the airfoil due to the relative motion of the air and the blade. The tangential force exerted by the blade on the air is what causes the air's tangential velocity component to increase.
2.  **Euler's Equation in Detail:** Consider a single stage (rotor + stator).
    *   **Rotor Inlet:** The fluid enters the rotor with an absolute velocity $V_1$ and a tangential component $V_{u1}$. The rotor blade has a tangential speed $U_1$. The relative velocity is $W_1 = V_1 - U_1$ (vector subtraction).
    *   **Rotor Outlet:** The fluid leaves the rotor with an absolute velocity $V_2$ and a tangential component $V_{u2}$. The rotor blade has a tangential speed $U_2$. The relative velocity is $W_2 = V_2 - U_2$.
    *   **Work Done by Rotor:** According to Euler's equation, the work done per unit mass by the rotor is $w_{rotor} = U_2 V_{u2} - U_1 V_{u1}$. For a compressor, we typically design $U_2 > U_1$ and $V_{u2}$ to be significantly larger than $V_{u1}$ (which is often zero or small in the initial stages if the inlet flow is purely axial).

    *   **Stator Action:** The stator redirects the flow and slows it down, converting kinetic energy into pressure. However, the stator itself does no work on the fluid in the ideal case (as it is stationary). The work input to the fluid is solely from the rotor.

**Total Work Output per Stage:** The net work added to the air by a single stage is the work done by the rotor. The stator's function is to efficiently convert kinetic energy to pressure energy.

---

### 4. Velocity Triangles and Work Output

Velocity triangles are graphical tools that help visualize and calculate the velocity components and work done.

**For a Rotor Blade:**

Let:
*   $V_1$, $V_{u1}$, $V_{a1}$ be the absolute velocity and its tangential and axial components at the rotor inlet.
*   $W_1$, $W_{u1}$, $W_{a1}$ be the relative velocity and its tangential and axial components at the rotor inlet.
*   $U_1$ be the blade speed at the rotor inlet.

At the rotor inlet, by vector addition: $V_1 = U_1 + W_1$ (vector sum).
This means $V_{u1} = U_1 + W_{u1}$. (Note: $W_{u1}$ is the tangential component of relative velocity, which can be negative).

Let:
*   $V_2$, $V_{u2}$, $V_{a2}$ be the absolute velocity and its tangential and axial components at the rotor outlet.
*   $W_2$, $W_{u2}$, $W_{a2}$ be the relative velocity and its tangential and axial components at the rotor outlet.
*   $U_2$ be the blade speed at the rotor outlet.

At the rotor outlet, by vector addition: $V_2 = U_2 + W_2$ (vector sum).
This means $V_{u2} = U_2 + W_{u2}$.

**Work Output from Euler's Equation:**

Specific Work Output (w) = $U_2 V_{u2} - U_1 V_{u1}$

Substituting the relationships from the velocity triangles:

$w = U_2 (U_2 + W_{u2}) - U_1 (U_1 + W_{u1})$
$w = U_2^2 + U_2 W_{u2} - U_1^2 - U_1 W_{u1}$

This form is less commonly used directly for work calculation compared to the $U \Delta V_u$ form. The most direct application of Euler's equation for work output is using the tangential components of absolute velocities.

**Simplified Case (No Radial Velocity Change, Constant Blade Speed):**
In many introductory analyses, particularly for specific blade sections, it's assumed that the axial velocity $V_a$ is constant across the rotor ($V_{a1} = V_{a2} = V_a$), and for a simplified analysis of a single stage, we might consider $U_1 \approx U_2 = U$. However, in a real axial compressor, blade speed typically increases with radius, and axial velocity can change slightly.

A more practical application often considers the **reaction degree** or **degree of reaction**.

---

### 5. Work Output in Relation to Pressure Rise

The work done on the air by the compressor directly contributes to its pressure rise. According to the First Law of Thermodynamics for a steady-flow process:

$Q - W = \Delta H = c_p \Delta T$ (for adiabatic process $Q=0$)
$-W = c_p \Delta T$

Here, W is the work done *by* the system. For a compressor, work is done *on* the system, so we use $-W_{in}$ where $W_{in}$ is work input.

$-W_{in} = c_p (T_2 - T_1)$

The specific work output ($w$) calculated from Euler's equation represents the *mechanical* work input per unit mass. This mechanical work is converted into internal energy and enthalpy increase of the air, leading to a temperature and pressure rise.

*   **Ideal (Isentropic) Work Input ($w_{isentropic}$):**
    $w_{isentropic} = c_p (T_{2s} - T_1)$
    From the isentropic relation $T_2/T_1 = (P_2/P_1)^{(\gamma-1)/\gamma}$,
    $w_{isentropic} = c_p T_1 \left[ \left(\frac{P_2}{P_1}\right)^{(\gamma-1)/\gamma} - 1 \right]$

*   **Actual Work Input ($w_{actual}$):**
    $w_{actual} = c_p (T_2 - T_1)$

The ratio of isentropic work to actual work is the **isentropic efficiency** ($\eta_c$):

$\eta_c = \frac{w_{isentropic}}{w_{actual}} = \frac{c_p (T_{2s} - T_1)}{c_p (T_2 - T_1)} = \frac{T_{2s} - T_1}{T_2 - T_1}$

This highlights the importance of work output from Euler's equation as it directly relates to the compressor's thermodynamic performance.

---

### 6. Work Output Variations Across Stages and Radius

*   **Work Distribution:** In a multi-stage axial compressor, the total pressure rise is achieved in increments by each stage. The work output per stage is designed to be roughly equal for uniform axial velocity and blade speed across stages. However, practical designs might vary work distribution for optimization.
*   **Work Variation with Radius:** Blade speed ($U = \omega r$) increases with radius. If the work output per unit mass is to be kept constant across the blade height (for consistent stage performance), the velocity triangles must be designed accordingly. This leads to different blade shapes and incidence angles at the root, mean, and tip of the blades.
    *   **Free Vortex Design:** A common design where the product $r V_u$ is constant. This implies $V_u$ decreases as $r$ increases, which, coupled with increasing $U$, leads to a relatively constant work output across the radius.
    *   **Forced Vortex Design:** $U$ varies linearly with $r$, and $V_u$ also varies. This can lead to significant changes in work output across the blade height.

**Impact on Velocity Triangles:**
As $U$ increases with radius, to maintain the same $V_{u2} - V_{u1}$ (and thus the same work output), $V_{u2}$ and $V_{u1}$ must also be adjusted. This means the inlet and outlet velocity triangles will look different at different radii.

---

### 7. Practice Questions and Exercises

**Question 1:**
An axial flow compressor rotor blade section operates at a radius where the blade speed is 300 m/s. At the inlet to the rotor, the absolute air velocity is purely axial at 150 m/s. At the outlet, the absolute air velocity has an axial component of 130 m/s and a tangential component of 70 m/s. Calculate the specific work output of this rotor blade section.

**Answer 1:**
We use Euler's equation: $w = U_2 V_{u2} - U_1 V_{u1}$.
Given:
$U_1 = 300$ m/s (assuming this is the blade speed at the inlet radius for this section)
$V_{u1} = 0$ m/s (absolute air velocity is purely axial at inlet)
$U_2 = 300$ m/s (assuming blade speed is constant for this section analysis, often a simplification for a specific radius)
$V_{u2} = 70$ m/s (tangential component of absolute velocity at outlet)

$w = (300 \text{ m/s} \times 70 \text{ m/s}) - (300 \text{ m/s} \times 0 \text{ m/s})$
$w = 21000 \text{ J/kg}$
$w = 21 \text{ kJ/kg}$

**Question 2:**
Consider a compressor stage where the rotor inlet blade speed is 250 m/s and the outlet blade speed is 350 m/s. At the rotor inlet, the tangential component of absolute velocity is 0 m/s (purely axial flow). At the rotor outlet, the tangential component of absolute velocity is 100 m/s. Calculate the specific work output of this stage.

**Answer 2:**
Using Euler's equation: $w = U_2 V_{u2} - U_1 V_{u1}$.
Given:
$U_1 = 250$ m/s
$V_{u1} = 0$ m/s
$U_2 = 350$ m/s
$V_{u2} = 100$ m/s

$w = (350 \text{ m/s} \times 100 \text{ m/s}) - (250 \text{ m/s} \times 0 \text{ m/s})$
$w = 35000 \text{ J/kg}$
$w = 35 \text{ kJ/kg}$

**Question 3 (Conceptual):**
Explain why the tangential component of the absolute velocity of the air is crucial for determining the work output of an axial flow compressor stage.

**Answer 3:**
The work done on a fluid in a rotating machine is directly proportional to the change in the tangential component of the fluid's absolute velocity, as stated by Euler's equation ($w = U_2 V_{u2} - U_1 V_{u1}$). The tangential velocity component ($V_u$) represents the momentum of the fluid in the direction of rotation. The rotating blades exert a torque on the fluid, increasing its tangential momentum and hence its tangential velocity component. This increase in tangential velocity is the direct mechanism by which mechanical energy is transferred from the blades to the fluid, resulting in work output. The axial component of velocity is related to the mass flow rate, and while essential for compressor function, it doesn't directly contribute to the work input from the blades in the same way the tangential component does.

---

### 8. Important Points to Remember

*   **Euler's Equation is Key:** Always remember $w = U_2 V_{u2} - U_1 V_{u1}$ for work output calculation.
*   **Tangential Velocity is Crucial:** The tangential component of absolute velocity ($V_u$) is directly responsible for work transfer.
*   **Rotor Does the Work:** In an axial compressor stage, the rotor blades are responsible for adding work to the fluid. Stators primarily diffuse the flow and convert kinetic energy to pressure.
*   **Velocity Triangles are Essential:** Use velocity triangles to determine the components of absolute and relative velocities.
*   **Work Input vs. Work Output:** Compressor work is usually expressed as work *input*. Euler's equation gives work *output* from the fluid's perspective, which is equal to work input to the fluid.
*   **Work and Pressure Rise:** Mechanical work input (from Euler's equation) is converted into an increase in the internal energy and enthalpy of the air, leading to a pressure rise.
*   **Efficiency Matters:** Actual work is always higher than isentropic work due to losses. Isentropic efficiency relates these two.
*   **Radius Dependence:** Blade speed ($U$) increases with radius, which affects the velocity triangles and work distribution across the blade height.

---

### 9. Alignment with Course Outcomes

*   **CO1 (Thermodynamics & Fluid Dynamics Principles):** This topic directly applies fluid dynamics principles (velocity triangles, Euler's equation) to understand the energy transfer in a compressor, which is a core component of gas turbine cycles. The relationship between work and temperature/pressure rise aligns with thermodynamics. (K3 - Applying)
*   **CO2 (Axial Flow Compressor Performance):** Calculating work output is fundamental to analyzing the performance characteristics and efficiencies of axial flow compressors. (K4 - Analyzing)
*   **CO3 (Component Performance Analysis):** Understanding the work output of the compressor is critical for analyzing the overall performance of gas turbine systems, as the compressor's output dictates the conditions for the combustor and turbine. (K4 - Analyzing)
*   **CO4 (Jet & Rocket Propulsion):** While this module focuses on the compressor, the work done by the compressor is a prerequisite for the overall power output of a jet engine, impacting thrust generation. (K2 - Understanding)

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 10. References & Further Reading

*   **Gas Turbines by V Ganesan:** Chapter on compressors will detail the working principle, velocity triangles, and work calculation.
*   **Turbines, Compressors and Fans by S M Yahya:** Excellent coverage of axial flow compressors, including detailed treatment of velocity triangles and work done.
*   **Gas Turbine & Jet Rocket Propulsion by Mathur M L:** Provides a foundation for understanding the role of the compressor in the overall propulsion system.
*   **Gas Turbine Theory by H. Cohen:** A comprehensive text offering advanced analysis of compressor aerodynamics, including detailed derivations of work output and performance.

---