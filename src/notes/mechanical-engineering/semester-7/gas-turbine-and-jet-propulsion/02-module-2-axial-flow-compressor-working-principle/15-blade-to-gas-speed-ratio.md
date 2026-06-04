---
title: "blade to gas speed ratio"
subject: "GAS TURBINE AND JET PROPULSION"
module: "Module 2: Axial flow compressor – Working principle"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463cad"
status: "completed"
scrapedAt: "2026-05-20T18:13:57.924Z"
---
# GAS TURBINE AND JET PROPULSION: Module 2: Axial Flow Compressor – Working Principle

## Topic: Blade to Gas Speed Ratio

This module delves into the fundamental principles governing the operation of axial flow compressors, with a specific focus on the critical concept of the blade to gas speed ratio. Understanding this ratio is crucial for analyzing compressor performance, efficiency, and ultimately, the overall effectiveness of a gas turbine engine.

---

### 1. Introduction to Axial Flow Compressors

Axial flow compressors are rotary compressors where the working fluid moves parallel to the axis of rotation. They are characterized by stages, each consisting of a row of stator vanes (nozzle guide vanes) and a row of rotor blades (rotating airfoils).

*   **Stator Vanes:** These stationary blades guide the incoming air onto the rotor blades at the optimal angle and also convert some of the pressure energy into kinetic energy, increasing the velocity of the air.
*   **Rotor Blades:** These rotating blades impart kinetic energy to the air, thereby increasing its velocity and pressure. The work done on the air by the rotor blades is the primary mechanism for compression.

**Key Concept:** The compression process in an axial flow compressor is achieved through a series of stages, where each stage involves a static and a rotating component. The rotating component (rotor) is where the bulk of the work is done on the fluid.

---

### 2. Understanding Velocity Diagrams

The analysis of an axial flow compressor's performance heavily relies on velocity diagrams. These diagrams graphically represent the velocities of the air and the blades at the mean radius of the blade row.

**Key Concepts:**

*   **Absolute Velocity ($V$):** The velocity of the air as observed by a stationary observer.
*   **Blade Velocity ($U$):** The tangential velocity of the rotor blades, determined by the rotational speed and the radius. $U = \omega r$, where $\omega$ is the angular velocity and $r$ is the radius.
*   **Relative Velocity ($W$):** The velocity of the air as observed by an observer moving with the rotor blades. $W = V - U$ (vector subtraction).

**Velocity Diagram Components:**

*   **Absolute Velocity ($V$):** Typically decomposed into an axial component ($V_a$) and a tangential component ($V_u$).
*   **Blade Velocity ($U$):** Purely tangential.
*   **Relative Velocity ($W$):** Decomposed into an axial component ($W_a$) and a tangential component ($W_u$).

**Important Point:** The relative velocity ($W$) is critical because it's the velocity at which the air interacts with the airfoil shape of the rotor blades. The airfoil design is optimized for this relative flow.

---

### 3. The Blade to Gas Speed Ratio (Velocity Ratio)

The blade to gas speed ratio is a crucial parameter that quantifies the relationship between the speed of the rotor blades and the speed of the air passing through the compressor. It is a key determinant of the efficiency and performance of each compressor stage.

**Definition:**

The **blade to gas speed ratio**, often denoted by $\psi$ or $\lambda$, is defined as the ratio of the blade tangential velocity ($U$) to the absolute air velocity ($V$) at the entry to the rotor.

$$
\psi = \frac{U}{V}
$$

**Alternative Definitions and Considerations:**

While the above is the most common definition, variations exist depending on the specific point of reference (e.g., inlet to the rotor or outlet from the rotor). However, the fundamental concept remains the relationship between blade speed and air speed.

**Importance of the Blade to Gas Speed Ratio:**

The blade to gas speed ratio directly influences:

*   **Work Input per Stage:** Higher ratios generally lead to a greater tangential velocity imparted to the air by the rotor blades, thus increasing the work done per stage.
*   **Stage Efficiency:** There exists an optimal blade to gas speed ratio for maximum stage efficiency. Deviating significantly from this optimum can lead to increased losses due to factors like flow separation, incidence losses, and shock losses.
*   **Compressor Design:** Engine designers carefully select the blade to gas speed ratio based on the desired pressure ratio and flow characteristics.

**Referencing Textbooks:**

*   **V. Ganesan (Gas Turbines):** Emphasizes that the blade to gas speed ratio is a key parameter in stage design, influencing the work done and the incidence angles of the air onto the rotor blades. (Chapter on Axial Flow Compressors)
*   **S. M. Yahya (Turbines, Compressors and Fans):** Discusses how this ratio affects the velocity triangles and highlights its impact on aerodynamic efficiency, particularly in relation to the Mach number of the flow relative to the blades. (Chapter on Axial Flow Compressors)
*   **Mathur M. L. (Gas Turbine & Jet Rocket Propulsion):** Connects the blade to gas speed ratio to the specific work done by the compressor stage and its role in achieving the desired pressure rise. (Chapter on Compressor Design)

---

### 4. Velocity Diagrams and Blade to Gas Speed Ratio

Let's analyze how the blade to gas speed ratio appears in velocity diagrams. Consider a single stage of an axial flow compressor at the mean radius.

**At Rotor Inlet:**

*   Absolute Velocity: $V_1$ (with components $V_{a1}$ and $V_{u1}$)
*   Blade Velocity: $U$ (purely tangential)
*   Relative Velocity: $W_1$ (vector difference $V_1 - U$)

**At Rotor Outlet:**

*   Absolute Velocity: $V_2$ (with components $V_{a2}$ and $V_{u2}$)
*   Blade Velocity: $U$ (purely tangential)
*   Relative Velocity: $W_2$ (vector difference $V_2 - U$)

**The Blade to Gas Speed Ratio ($\psi = U/V_1$):**

This ratio dictates the magnitude of the relative velocity ($W_1$) compared to the blade speed ($U$). A higher $\psi$ means the blade is moving much faster than the incoming absolute air.

**Example (Conceptual):**

Imagine a rotor blade moving at 300 m/s ($U$) and the air entering the rotor with an absolute velocity of 150 m/s ($V_1$).
$\psi = 300 / 150 = 2$.
In this scenario, the rotor is significantly "outrunning" the air, which can lead to certain flow behaviors and potential losses if not managed.

Conversely, if the rotor blade moves at 150 m/s ($U$) and the air enters at 300 m/s ($V_1$).
$\psi = 150 / 300 = 0.5$.
Here, the air is moving much faster than the blade.

**Connection to Stage Work:**

The **specific work done per unit mass** by the rotor is given by the change in whirl velocity:

$$
W_{stage} = U (V_{u1} - V_{u2})
$$

(Note: In an ideal compressor, $V_{u2}$ is often negative, representing a change in tangential direction that adds to the work).

The blade to gas speed ratio influences the achievable whirl velocities ($V_{u1}, V_{u2}$) and consequently the specific work output.

---

### 5. Impact of Blade to Gas Speed Ratio on Performance and Efficiency

The blade to gas speed ratio is intrinsically linked to the aerodynamic performance of a compressor stage.

*   **Incidence Losses:** The angle at which the air strikes the rotor blade (incidence angle) is directly affected by the ratio $U/V_1$. If the ratio is too high or too low, the incidence angle can be far from the blade's design (stagger) angle, leading to flow separation and increased losses.
*   **Surge:** Compressors have a stable operating range. If the blade to gas speed ratio is too low for a given operating condition, the compressor can surge – a phenomenon characterized by intermittent flow reversal and a significant drop in performance.
*   **Choke:** Conversely, if the blade speed is too high relative to the airflow, or the airflow is too high for the blade speed, the compressor can choke. This is when the flow at the throat of the airfoil reaches sonic velocity, and further increases in flow rate are not possible.
*   **Mach Number Effects:** At high blade speeds, the relative Mach number ($M_w = W/a$, where 'a' is the speed of sound) can become significant. When $M_w$ approaches unity, compressibility effects, shock waves, and associated losses become dominant. The blade to gas speed ratio plays a role in determining these relative Mach numbers.
*   **Efficiency:** For a typical axial compressor stage, there is an optimal range for the blade to gas speed ratio to achieve maximum adiabatic efficiency. This optimum is often in the range of 0.5 to 0.8, but can vary significantly with blade design and operating conditions.

**Referencing Textbooks:**

*   **H. Cohen (Gas Turbine Theory):** Provides detailed analysis on how the blade to gas speed ratio affects the velocity triangles and consequently the stage efficiency, surge, and choke limits. It often uses dimensionless parameters like the **flow coefficient** ($\phi = V_a / U$) and **pressure coefficient** ($\psi_p = \Delta P / (\rho U^2)$) where the blade to gas speed ratio ($U/V$) is implicitly involved.
*   **Rolls Royce (The Jet Engine):** Discusses the practical implications of blade speed on compressor design, highlighting how varying the blade speed across different compressor stages in a multi-stage compressor is necessary to maintain optimal aerodynamic conditions.

---

### 6. Course Outcome Alignment

This topic directly addresses several course outcomes:

*   **CO1 (Thermodynamics and Fluid Dynamics):** Understanding the blade to gas speed ratio requires applying principles of fluid dynamics (velocity triangles, flow behavior) and thermodynamics (pressure rise, work done).
*   **CO2 (Axial Flow Compressor Performance):** The blade to gas speed ratio is a fundamental parameter for analyzing the performance and efficiency of axial flow compressor stages.
*   **CO3 (Component Characteristics):** This topic focuses on the characteristics of a key compressor component – the rotor blade and its interaction with the airflow.
*   **CO4 (Jet Propulsion Principles):** While primarily about compressors, the compressor is a vital part of a jet engine. The efficiency of the compressor, influenced by the blade to gas speed ratio, directly impacts the overall thrust and efficiency of the jet engine.

---

### 7. Important Points to Remember

*   The blade to gas speed ratio ($\psi = U/V$) relates rotor speed to airflow speed.
*   It significantly impacts the work input, incidence angles, and aerodynamic losses in a compressor stage.
*   Each stage has an optimal blade to gas speed ratio for maximum efficiency.
*   Deviations from the optimal ratio can lead to surge, choke, or increased losses due to flow separation or shock waves.
*   Velocity diagrams are essential tools for analyzing the impact of this ratio.
*   The ratio is a design parameter that engineers manipulate to achieve desired compressor performance.

---

### 8. Practice Questions and Exercises

**Question 1:**

Define the blade to gas speed ratio for an axial flow compressor.

**Answer:**
The blade to gas speed ratio ($\psi$) is defined as the ratio of the tangential velocity of the rotor blade ($U$) to the absolute velocity of the air at the inlet to the rotor ($V_1$). Mathematically, $\psi = U/V_1$.

**Question 2:**

How does a high blade to gas speed ratio generally affect the incidence angle of the airflow onto the rotor blades, assuming other factors remain constant?

**Answer:**
A high blade to gas speed ratio (i.e., $U$ is much larger than $V_1$) generally leads to a more negative whirl component of the relative velocity at the rotor inlet. This, in turn, tends to increase the incidence angle at which the air strikes the rotor blades. If this increase is too large, it can lead to flow separation and reduced efficiency.

**Question 3:**

If the tangential blade speed in a compressor stage is 400 m/s and the absolute air velocity at the rotor inlet is 200 m/s, what is the blade to gas speed ratio? What might be a potential concern with this ratio?

**Answer:**
Blade to gas speed ratio ($\psi$) = $U/V_1 = 400 \text{ m/s} / 200 \text{ m/s} = 2$.
A ratio of 2 is generally considered high. Potential concerns include very large incidence angles leading to flow separation, significant losses, and potentially exceeding the Mach number limits for the relative flow if air velocities are also high.

**Question 4:**

Explain the relationship between the blade to gas speed ratio and stage efficiency.

**Answer:**
There is an optimal range for the blade to gas speed ratio that maximizes the stage efficiency. Below this optimum, the work input per stage may be insufficient. Above this optimum, incidence losses, flow separation, and compressibility effects can increase significantly, reducing efficiency.

**Question 5 (Application):**

A designer is tasked with increasing the pressure ratio of a single-stage compressor. They are considering increasing the rotational speed of the rotor. How would this affect the blade to gas speed ratio, and what are the potential consequences for the compressor's operation?

**Answer:**
Increasing the rotational speed of the rotor will increase the blade tangential velocity ($U$). Assuming the inlet absolute air velocity ($V_1$) remains relatively constant, the blade to gas speed ratio ($\psi = U/V_1$) will increase.
**Potential Consequences:**
*   **Increased Work Input:** Higher $U$ will lead to a greater change in whirl velocity, thus increasing the work done per stage and the pressure rise.
*   **Higher Incidence Angles:** The relative velocity vector will shift, potentially increasing the incidence angle. If the increase is too large, it can cause flow separation and reduce efficiency.
*   **Increased Mach Numbers:** The relative Mach number ($W/a$) will likely increase, potentially leading to compressibility losses and shock waves, especially at the rotor blade tips.
*   **Shift in Operating Point:** The compressor's operating point on its characteristic map will shift. It might move towards higher pressure ratios but could also move into less efficient or unstable regions (e.g., approaching surge or choke).
*   **Need for Re-design:** A significant increase in blade speed might necessitate re-designing the rotor blade airfoil shapes to maintain optimal incidence angles and manage compressibility effects.

---

This comprehensive set of notes provides a foundational understanding of the blade to gas speed ratio within the context of axial flow compressors. It bridges theoretical concepts with practical implications, essential for analyzing and designing gas turbine engines.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
