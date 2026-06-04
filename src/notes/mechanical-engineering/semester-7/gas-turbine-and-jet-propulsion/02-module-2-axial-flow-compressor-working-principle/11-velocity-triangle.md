---
title: "velocity triangle"
subject: "GAS TURBINE AND JET PROPULSION"
module: "Module 2: Axial flow compressor – Working principle"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463ca9"
status: "completed"
scrapedAt: "2026-05-20T18:13:54.778Z"
---
# Gas Turbine and Jet Propulsion: Module 2 - Axial Flow Compressor - Working Principle: Velocity Triangle

## 1. Introduction to Velocity Triangles in Axial Flow Compressors

An axial flow compressor consists of a series of rotating blades (rotors) and stationary blades (stators) arranged coaxially. The primary function of the compressor is to increase the pressure of the air by imparting kinetic energy to it through the rotating blades and then converting this kinetic energy into pressure energy using the stationary blades.

The **velocity triangle** is a graphical representation of the velocities of the air at the inlet and outlet of each blade row (rotor and stator). It's a crucial tool for understanding and analyzing the fluid flow behavior within the compressor and is fundamental to achieving the course outcomes.

*   **CO1 (K3):** Understanding the velocity triangles helps in applying fluid dynamics principles to the compressor's operation.
*   **CO2 (K4):** Analyzing these triangles allows for the calculation of work done, pressure rise, and efficiency of each stage, which is essential for performance analysis.
*   **CO3 (K4):** The velocity triangles are the foundation for understanding how each component (rotor and stator) contributes to the overall compressor performance.

### Key Concepts and Definitions:

*   **Absolute Velocity ($V$):** The velocity of the air relative to a stationary observer. It has both tangential and radial components.
*   **Blade Velocity ($U$):** The tangential velocity of the rotor blade. This is determined by the rotational speed of the compressor and the radius at which the flow occurs.
*   **Relative Velocity ($W$):** The velocity of the air relative to the moving blades of the rotor. This is the velocity with which the air "sees" the blades.

## 2. Velocity Triangles for a Single Stage

A single stage of an axial flow compressor consists of a rotor row and a stator row. The velocity triangles are drawn at the inlet and outlet of both the rotor and the stator. For simplicity, we often consider the mean diameter for analysis.

### 2.1. Rotor Blade Velocity Triangle

**At the Rotor Inlet:**

*   $V_{a1}$: Axial velocity component (constant across the stage, assuming no radial flow).
*   $V_{w1}$: Tangential velocity component of the air entering the rotor.
*   $V_1$: Absolute velocity entering the rotor ($\vec{V}_1 = \vec{V}_{a1} + \vec{V}_{w1}$).
*   $U_1$: Blade speed at the rotor inlet (tangential).
*   $W_1$: Relative velocity entering the rotor ($\vec{W}_1 = \vec{V}_1 - \vec{U}_1$).

**At the Rotor Outlet:**

*   $V_{a2}$: Axial velocity component (ideally same as $V_{a1}$).
*   $V_{w2}$: Tangential velocity component of the air leaving the rotor. This is the tangential velocity imparted to the air by the rotor.
*   $V_2$: Absolute velocity leaving the rotor ($\vec{V}_2 = \vec{V}_{a2} + \vec{V}_{w2}$).
*   $U_1$: Blade speed at the rotor outlet (assumed constant across the rotor for simplicity at a given radius).
*   $W_2$: Relative velocity leaving the rotor ($\vec{W}_2 = \vec{V}_2 - \vec{U}_1$).

**Diagram:**

```
      V_a1 (Axial)
       /|
      / |
     /  | W1 (Relative)
    /   |
   /____|____ U1 (Blade Velocity)
  V_w1 (Tangential)
```

At Rotor Outlet:

```
      V_a2 (Axial)
       /|
      / |
     /  | W2 (Relative)
    /   |
   /____|____ U1 (Blade Velocity)
  V_w2 (Tangential)
```

### 2.2. Stator Blade Velocity Triangle

The stator blades are stationary and are designed to diffuse the air from the rotor outlet and direct it onto the next rotor row at the correct angle.

**At the Stator Inlet (Rotor Outlet Conditions):**

*   $V_{a2}$: Axial velocity component.
*   $V_{w2}$: Tangential velocity component of the air entering the stator.
*   $V_2$: Absolute velocity entering the stator.

**At the Stator Outlet:**

*   $V_{a3}$: Axial velocity component (ideally same as $V_{a2}$).
*   $V_{w3}$: Tangential velocity component of the air leaving the stator. The stator's function is to reduce $V_{w2}$ to $V_{w3}$ and convert velocity head into pressure head. Ideally, $V_{w3}$ is close to zero for a simple stator.
*   $V_3$: Absolute velocity leaving the stator ($\vec{V}_3 = \vec{V}_{a3} + \vec{V}_{w3}$).

**Diagram:**

At Stator Inlet (same as Rotor Outlet):

```
      V_a2 (Axial)
       /|
      / |
     /  | V2 (Absolute)
    /   |
   /____|____ (No Blade Velocity - Stationary)
  V_w2 (Tangential)
```

At Stator Outlet:

```
      V_a3 (Axial)
       /|
      / |
     /  | V3 (Absolute)
    /   |
   /____|____ (No Blade Velocity - Stationary)
  V_w3 (Tangential)
```

**Important Relationship:** The absolute velocity leaving the stator ($V_3$) is the velocity entering the next rotor row ($V_1'$ for the next stage), where $V_{a3}$ ideally equals $V_{a1}$, and $V_{w3}$ becomes $V_{w1}'$.

## 3. Work Done and Stage Efficiency

The primary purpose of the velocity triangle is to calculate the work done by the compressor.

### 3.1. Work Done per Unit Mass

According to **Euler's turbomachine equation**, the work done per unit mass ($W_{stage}$) is given by the change in whirl momentum:

$W_{stage} = U (V_{w2} - V_{w1})$

Where:
*   $U$ is the blade speed.
*   $V_{w1}$ is the whirl velocity at the inlet to the rotor.
*   $V_{w2}$ is the whirl velocity at the outlet from the rotor.

**Derivation (from Cohen & Rogers, "Gas Turbine Theory"):**
The work done per unit mass is given by the change in angular momentum. For a rotor stage:
Work Done/mass = $U_2 V_{w2, \text{rotor outlet}} - U_1 V_{w1, \text{rotor inlet}}$
If we assume constant blade speed $U$ across the rotor for simplicity at a given radius, and considering the convention where $V_{w1}$ is often considered negative (inlet whirl) and $V_{w2}$ positive (outlet whirl):
$W_{stage} = U (V_{w2} - (-V_{w1}))$  (if $V_{w1}$ is taken as magnitude directed opposite to $U$)
or
$W_{stage} = U (V_{w2} + V_{w1})$ if $V_{w1}$ is already defined with its sign relative to $U$.

**Referencing Ganesan, "Gas Turbines":**
Ganesan emphasizes the use of the velocity triangles to determine the whirl velocity components. The work done per unit mass is directly related to the change in the tangential component of absolute velocity multiplied by the blade speed.

**Example:**
Consider a rotor stage where:
*   Blade speed $U = 200$ m/s.
*   Inlet whirl velocity $V_{w1} = -50$ m/s (meaning the air is moving in the opposite direction to blade rotation).
*   Outlet whirl velocity $V_{w2} = 100$ m/s (meaning the air is moving in the same direction as blade rotation).

Work done per unit mass $= U (V_{w2} - V_{w1}) = 200 \times (100 - (-50)) = 200 \times 150 = 30,000$ J/kg.

### 3.2. Stage Efficiency

*   **Isentropic Efficiency ($\eta_{stage}$):** This is the ratio of the ideal isentropic enthalpy rise (or pressure rise) to the actual enthalpy rise (or pressure rise) achieved by the stage.
    $\eta_{stage} = \frac{\text{Isentropic enthalpy rise}}{\text{Actual enthalpy rise}} = \frac{h_{t2s} - h_{t1}}{h_{t2a} - h_{t1}}$
    Where:
    *   $h_{t1}$ is the stagnation enthalpy at the inlet.
    *   $h_{t2s}$ is the stagnation enthalpy for isentropic compression to the actual outlet pressure.
    *   $h_{t2a}$ is the actual stagnation enthalpy at the outlet.

*   **Total Pressure Efficiency ($\eta_{tp}$):** This is the ratio of the ideal isentropic pressure rise to the actual pressure rise.
    $\eta_{tp} = \frac{P_{t2s} - P_{t1}}{P_{t2a} - P_{t1}}$

The velocity triangles are used to calculate the actual enthalpy/pressure rise ($h_{t2a} - h_{t1}$ or $P_{t2a} - P_{t1}$) by determining the outlet velocities and thus the kinetic energy change.

*   **CO2 (K4):** Calculating these efficiencies directly relies on the velocity triangle analysis.
*   **CO3 (K4):** Understanding how velocity changes in rotors and stators informs the overall stage efficiency.

## 4. Velocity Triangles for Different Blade Shapes and Flow Conditions

The shape of the blades and the angles they make with the axial direction significantly influence the velocity triangles.

### 4.1. Blade Angles

*   **Inlet Blade Angle ($\beta_1$):** The angle of the rotor blade at its inlet with respect to the axial direction. This is the angle at which the air should enter the rotor to match the relative velocity vector.
*   **Outlet Blade Angle ($\beta_2$):** The angle of the rotor blade at its outlet with respect to the axial direction. This angle dictates the direction of the relative velocity vector leaving the rotor.
*   **Stator Inlet Angle ($\gamma_1$):** The angle of the stator blade at its inlet with respect to the axial direction. This angle directs the flow from the rotor outlet onto the stator.
*   **Stator Outlet Angle ($\gamma_2$):** The angle of the stator blade at its outlet with respect to the axial direction. This angle guides the flow to the next rotor stage.

**Relationship in the Velocity Triangle:**

*   At the rotor inlet: $\tan(\beta_1) = \frac{V_{w1}}{V_{a1}}$ (assuming $V_{w1}$ is in the same direction as $U$)
    More generally, if $V_{w1}$ is in the opposite direction to $U$ (as is common when $U$ is large):
    $\tan(\beta_1) = \frac{V_{w1}}{V_{a1}}$ where $V_{w1}$ is the magnitude of the whirl component relative to the blade. The angle $\beta_1$ is measured from the axial direction to the relative velocity vector $W_1$.
    The blade angle is often specified as the angle between the blade chord and the axial direction. For ideal flow, the relative velocity vector should align with the blade.
    So, $\beta_1$ is the angle of $W_1$ with the axial direction.

*   At the rotor outlet: $\tan(\beta_2) = \frac{V_{w2}}{V_{a2}}$ (where $V_{w2}$ and $V_{a2}$ are components of $V_2$)
    Similarly, $\beta_2$ is the angle of $W_2$ with the axial direction.

*   At the stator inlet: $\tan(\gamma_1) = \frac{V_{w2}}{V_{a2}}$ (since $V_2$ is the incoming velocity)
    $\gamma_1$ is the angle of $V_2$ with the axial direction.

*   At the stator outlet: $\tan(\gamma_2) = \frac{V_{w3}}{V_{a3}}$
    $\gamma_2$ is the angle of $V_3$ with the axial direction.

**Referencing Yahya, "Turbines, Compressors and Fans":**
Yahya provides detailed diagrams and explanations of how blade angles are determined from the velocity triangles to ensure proper flow guidance and minimize losses. He emphasizes that the blade angle is often the chord angle, and for minimal loss, the relative flow should align with the chord.

### 4.2. Types of Stages Based on Velocity Triangles

**a) Impulse Stage:**
In an ideal impulse stage, the entire pressure rise occurs in the rotor, and the stator only redirects the flow without changing its velocity or pressure. This means the absolute velocity leaving the stator is the same as that leaving the rotor ($V_3 = V_2$). This implies $V_{w3} = V_{w2}$ and $V_{a3} = V_{a2}$. However, stators are typically used to reduce swirl, so for a stator to achieve $V_3=V_2$, it would imply the stator adds swirl, which is not its purpose.
A more practical definition of an impulse stage in compressors is one where the velocity of the air relative to the rotor is changed in magnitude, and the absolute velocity leaving the rotor is at a high angle, which is then diffused by the stator. In a pure impulse turbine, the pressure drop occurs entirely in the nozzle (stator equivalent) and velocity increases. For a compressor, an impulse stage is where the blade speed ($U$) is much larger than the change in whirl velocity.

**b) Reaction Stage:**
In a reaction stage, both the rotor and the stator contribute to the pressure rise. A common type is the **50% reaction stage**, where the enthalpy change (and thus pressure change) is equally divided between the rotor and the stator.
*   In a 50% reaction stage, the velocity triangles are designed such that:
    *   The relative velocity entering the rotor ($W_1$) is equal in magnitude to the relative velocity leaving the stator ($W_3$).
    *   The absolute velocity leaving the rotor ($V_2$) is equal in magnitude to the absolute velocity entering the rotor ($V_1$).

    **Diagram for 50% Reaction Stage:**
    At Rotor Inlet: $V_1$, $U$, $W_1$ form a triangle.
    At Rotor Outlet: $V_2$, $U$, $W_2$ form a triangle.
    At Stator Outlet: $V_3$, $W_3$ form a triangle.

    For 50% reaction: $W_1 = W_3$ and $V_1 = V_2$.
    This implies the velocity triangles at the rotor inlet and rotor outlet are symmetrical in a specific way, and the stator is designed to reverse the whirl component imparted by the rotor.

*   **Degree of Reaction:** The proportion of enthalpy rise occurring in the rotor.
    Degree of Reaction $= \frac{\text{Enthalpy rise in rotor}}{\text{Enthalpy rise in stage}} = \frac{h_{t2a} - h_{t1}}{h_{t3a} - h_{t1}}$
    For a 50% reaction stage, this ratio is 0.5.

**Referencing Mathur & Sharma, "Gas Turbine & Jet Rocket Propulsion":**
This textbook often uses detailed examples to illustrate the differences in velocity triangles for impulse and reaction stages, showing how blade angles are chosen to achieve specific reaction degrees.

## 5. Practice Questions and Exercises

**Question 1:**
In an axial flow compressor stage, at the rotor inlet, the axial velocity is 150 m/s, and the whirl velocity is -40 m/s (opposite to the direction of rotation). The blade speed is 200 m/s. At the rotor outlet, the axial velocity is 140 m/s, and the whirl velocity is 100 m/s.
(a) Draw the velocity triangles at the rotor inlet and outlet.
(b) Calculate the relative velocities at the rotor inlet and outlet.
(c) Calculate the work done per unit mass by the rotor.
(d) If the stator reduces the whirl velocity from 100 m/s to 20 m/s, while maintaining the axial velocity at 140 m/s, draw the stator velocity triangle and calculate the work done by the stator (which is zero, but it converts kinetic energy to pressure).

**Solution 1:**

**(a) Velocity Triangles:**

**Rotor Inlet:**
*   $V_{a1} = 150$ m/s
*   $V_{w1} = -40$ m/s (magnitude of whirl)
*   $U = 200$ m/s

```
      V_a1 = 150
       /|
      / |
     /  | W1
    /   |
   /____|____ U = 200
  |V_w1|= 40
```
The angle of $W_1$ with the axial direction $\beta_1$:
$\tan(\beta_1) = \frac{V_{w1}}{V_{a1}} = \frac{40}{150} \approx 0.2667$
$\beta_1 \approx 14.93^\circ$

**Rotor Outlet:**
*   $V_{a2} = 140$ m/s
*   $V_{w2} = 100$ m/s
*   $U = 200$ m/s

```
      V_a2 = 140
       /|
      / |
     /  | W2
    /   |
   /____|____ U = 200
  V_w2 = 100
```
The angle of $W_2$ with the axial direction $\beta_2$:
$\tan(\beta_2) = \frac{V_{w2}}{V_{a2}} = \frac{100}{140} \approx 0.7143$
$\beta_2 \approx 35.54^\circ$

**(b) Relative Velocities:**
*   Rotor Inlet ($W_1$):
    $W_1^2 = V_{a1}^2 + (U - V_{w1})^2 = 150^2 + (200 - (-40))^2 = 150^2 + 240^2 = 22500 + 57600 = 80100$
    $W_1 = \sqrt{80100} \approx 283$ m/s

*   Rotor Outlet ($W_2$):
    $W_2^2 = V_{a2}^2 + (U - V_{w2})^2 = 140^2 + (200 - 100)^2 = 140^2 + 100^2 = 19600 + 10000 = 29600$
    $W_2 = \sqrt{29600} \approx 172$ m/s

**(c) Work Done per Unit Mass by Rotor:**
Using Euler's turbomachine equation:
$W_{stage} = U (V_{w2} - V_{w1})$
$W_{stage} = 200 \times (100 - (-40)) = 200 \times 140 = 28,000$ J/kg

**(d) Stator Velocity Triangle and Work:**

**Stator Inlet (Rotor Outlet Conditions):**
*   $V_{a2} = 140$ m/s
*   $V_{w2} = 100$ m/s
*   $V_2 = \sqrt{V_{a2}^2 + V_{w2}^2} = \sqrt{140^2 + 100^2} = \sqrt{19600 + 10000} = \sqrt{29600} \approx 172$ m/s

**Stator Outlet:**
*   $V_{a3} = 140$ m/s (assumed constant)
*   $V_{w3} = 20$ m/s

```
      V_a3 = 140
       /|
      / |
     /  | V3
    /   |
   /____|____ (Stationary)
  V_w3 = 20
```
$V_3 = \sqrt{V_{a3}^2 + V_{w3}^2} = \sqrt{140^2 + 20^2} = \sqrt{19600 + 400} = \sqrt{20000} \approx 141.4$ m/s

**Work Done by Stator:**
The stator does not do work on the fluid. Its function is to diffuse the flow and reduce the whirl. The change in kinetic energy across the stator is $\frac{1}{2}(V_2^2 - V_3^2)$.
$KE_{in} = \frac{1}{2} V_2^2 = \frac{1}{2} (172)^2 \approx 14792$ J/kg
$KE_{out} = \frac{1}{2} V_3^2 = \frac{1}{2} (141.4)^2 \approx 10000$ J/kg
The stator converts this kinetic energy into pressure.

**Question 2:**
For a 50% reaction stage, what is the relationship between the absolute velocity entering the rotor ($V_1$) and the relative velocity leaving the rotor ($W_2$)? Explain why.

**Solution 2:**
For a 50% reaction stage, the enthalpy rise in the rotor is equal to the enthalpy rise in the stator. Assuming constant specific heat and density changes for simplicity, this implies that the change in kinetic energy across the rotor is equal to the change in kinetic energy across the stator.

Mathematically, for a 50% reaction stage, we have:
1.  $V_1 = V_2$ (Magnitude of absolute velocity entering rotor equals magnitude of absolute velocity leaving rotor).
2.  $W_1 = W_3$ (Magnitude of relative velocity entering rotor equals magnitude of relative velocity leaving stator).

From the velocity triangles:
*   Rotor Inlet: $W_1^2 = V_{a1}^2 + (U - V_{w1})^2$
*   Rotor Outlet: $W_2^2 = V_{a2}^2 + (U - V_{w2})^2$
*   Stator Outlet: $W_3^2 = V_{a3}^2 + (U - V_{w3})^2$

If $V_1 = V_2$, then $\sqrt{V_{a1}^2 + V_{w1}^2} = \sqrt{V_{a2}^2 + V_{w2}^2}$.
If we assume $V_{a1} = V_{a2} = V_a$ (constant axial velocity), then $V_{w1} = V_{w2}$. This implies that the whirl component is not changed by the rotor, which contradicts the purpose of a compressor.

Let's re-examine the implications of 50% reaction:
The enthalpy rise in the rotor is $\Delta h_{rotor} = \frac{1}{2} (W_2^2 - W_1^2)$.
The enthalpy rise in the stator is $\Delta h_{stator} = \frac{1}{2} (V_1^2 - V_3^2)$.
For 50% reaction, $\Delta h_{rotor} = \Delta h_{stator}$.
Assuming constant axial velocity $V_a$:
$\frac{1}{2} (V_{a}^2 + (U-V_{w2})^2 - (V_{a}^2 + (U-V_{w1})^2)) = \frac{1}{2} (V_{a}^2 + V_{w1}^2 - V_{a}^2 + V_{w3}^2)$
$(U-V_{w2})^2 - (U-V_{w1})^2 = V_{w1}^2 - V_{w3}^2$ (This is for the ideal case where $V_1=V_2$, $W_1=W_3$)

A more direct consequence of 50% reaction is that the velocity diagram at the rotor inlet and outlet are related.
Specifically, for a 50% reaction stage, the area swept by the relative velocity vector $W$ in the rotor is equal to the area swept by the absolute velocity vector $V$ in the stator. This leads to $V_1 = W_2$ and $W_1 = V_2$ (not quite, this is for turbines).

For a 50% reaction compressor stage, the velocity triangles are designed such that the diagram for the rotor inlet looks like the diagram for the stator outlet, but with relative velocities instead of absolute velocities.
This means:
$V_{a,rotor\_inlet} = V_{a,stator\_outlet}$
$V_{w,rotor\_inlet} = -V_{w,stator\_outlet}$
$W_{rotor\_inlet} = V_{stator\_outlet}$
$W_{rotor\_outlet} = V_{rotor\_inlet}$

Therefore, for a 50% reaction stage, the magnitude of the absolute velocity entering the rotor ($V_1$) is equal to the magnitude of the relative velocity leaving the rotor ($W_2$), i.e., $V_1 = W_2$.

## 6. Important Points to Remember

*   **Velocity Triangles are essential for:** Analyzing flow, calculating work done, determining stage efficiency, and designing blade angles.
*   **Components:** Absolute Velocity ($V$), Blade Velocity ($U$), Relative Velocity ($W$).
*   **Velocity Components:** Axial ($V_a$) and Tangential/Whirl ($V_w$).
*   **Euler's Equation:** $W_{stage} = U (V_{w2} - V_{w1})$ is the fundamental equation for work done in a turbomachine.
*   **Blade Angles:** $\beta$ for rotors, $\gamma$ for stators. They are crucial for directing the flow correctly.
*   **50% Reaction Stage:** Characterized by $V_1 = W_2$ and $W_1 = V_2$ (for turbines, adjust for compressors). In compressors, it implies symmetrical velocity diagrams in a sense, with equal enthalpy rise in rotor and stator.
*   **Assumptions:** Often axial velocity is assumed constant across a stage, and blade speed is constant at a given radius. Real compressors have radial flow and variations in $V_a$.
*   **Referencing Textbooks:** Ganesan provides a good foundation, Yahya dives deeper into design aspects, and Mathur offers practical examples. Cohen offers advanced theoretical treatment.

## 7. Course Outcome Alignment

*   **CO1 (K3):** The study of velocity triangles directly applies thermodynamics and fluid dynamics principles (vector addition, Euler's equation) to understand compressor operation.
*   **CO2 (K4):** Velocity triangles are the core analytical tool for calculating work done, pressure rise, and efficiency of axial flow compressors.
*   **CO3 (K4):** Understanding how velocity changes in rotors and stators, as depicted by the triangles, allows for the analysis of the performance characteristics of these individual components and their contribution to the overall compressor.
*   **CO4 (K2):** While this module focuses on compressors, the fundamental understanding of velocity triangles is a precursor to analyzing jet propulsion systems, where similar velocity diagrams are used for propulsive force calculations.

This comprehensive set of notes covers the working principle of the velocity triangle in axial flow compressors, its application in calculating performance parameters, and its relevance to the course outcomes, drawing upon the specified textbooks and reference materials.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
