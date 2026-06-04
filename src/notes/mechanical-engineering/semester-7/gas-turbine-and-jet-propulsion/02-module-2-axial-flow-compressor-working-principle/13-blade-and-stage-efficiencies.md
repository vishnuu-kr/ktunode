---
title: "blade and stage efficiencies"
subject: "GAS TURBINE AND JET PROPULSION"
module: "Module 2: Axial flow compressor – Working principle"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463cab"
status: "completed"
scrapedAt: "2026-05-20T18:13:56.492Z"
---
## GAS TURBINE AND JET PROPULSION

### Module 2: Axial Flow Compressor – Working Principle

#### Topic: Blade and Stage Efficiencies

---

**Learning Outcomes:**

Upon successful completion of this topic, you will be able to:

*   Define and explain the concepts of blade efficiency and stage efficiency in axial flow compressors.
*   Differentiate between the various types of efficiencies used to assess compressor performance.
*   Analyze the factors affecting blade and stage efficiencies.
*   Calculate blade and stage efficiencies using given parameters.
*   Relate blade and stage efficiencies to the overall performance of an axial flow compressor and gas turbine cycle (CO1, CO2, CO3).

---

**Course Outcomes Alignment:**

*   **CO1 (K3):** Apply principles of thermodynamics and fluid dynamics to understand performance and efficiency. (Understanding the calculation and influencing factors of blade and stage efficiencies directly applies these principles).
*   **CO2 (K4):** Analyze performance characteristics and efficiencies of axial flow compressors. (This topic is central to analyzing compressor performance).
*   **CO3 (K4):** Analyze the performance of gas turbine systems by understanding component characteristics. (Compressor efficiency directly impacts overall gas turbine performance).

---

**1. Introduction to Compressor Efficiencies**

Axial flow compressors are critical components in gas turbine engines, responsible for increasing the pressure of the incoming air. Their efficiency directly impacts the overall performance and fuel consumption of the engine. To accurately assess this performance, various efficiency metrics are employed, focusing on both individual blade passages and entire stages.

**Key Concept:** Efficiency in a compressor represents the ratio of ideal work input to actual work input required to achieve a certain pressure rise.

---

**2. Blade Efficiency (or Aerodynamic Efficiency)**

Blade efficiency quantifies the effectiveness of the airfoil shape of the compressor blades in imparting kinetic energy to the air and converting it into pressure energy. It primarily addresses the aerodynamic losses within the blade passage.

**Definition:**

Blade efficiency ($\eta_{blade}$ or $\eta_{aero}$) is defined as the ratio of the theoretical work that should be done on the fluid by a perfectly shaped blade to the actual work done on the fluid by the given blade.

$\eta_{blade} = \frac{\text{Theoretical work done by blade}}{\text{Actual work done by blade}}$

**Explanation:**

*   **Theoretical work:** This represents the ideal work transfer that would occur without any losses, such as friction, flow separation, or leakage. It is often related to the change in kinetic energy imparted to the fluid by the blade.
*   **Actual work:** This is the work actually done by the blade on the fluid, accounting for all aerodynamic losses.

**Factors Affecting Blade Efficiency:**

*   **Blade Profile and Aerodynamics:** The shape of the airfoil, its camber, thickness, and stagger angle significantly influence flow behavior and losses. (Refer to Ganesan, Chapter 10 for detailed airfoil theory).
*   **Reynolds Number:** Higher Reynolds numbers generally lead to smoother flow and reduced skin friction losses, thus improving blade efficiency.
*   **Mach Number:** At high Mach numbers, compressibility effects, shock waves, and boundary layer growth can lead to significant losses.
*   **Flow Incidence and Deviation:** The angle at which the air strikes the blade (incidence angle) and the angle at which it leaves the blade (deviation angle) affect the velocity triangles and can cause flow separation if not optimized.
*   **Blade Surface Roughness:** Rough surfaces increase skin friction, reducing efficiency.
*   **Tip Leakage:** Air bypassing the blade tips through clearances between the rotor tip and the casing is a significant source of loss. (Mentioned in Yahya, Chapter 7).

**Important Point to Remember:** Blade efficiency is a measure of how well the individual airfoil shapes perform their function, minimizing aerodynamic losses *within* the blade passage.

---

**3. Stage Efficiency**

A stage in an axial flow compressor consists of a row of rotor blades followed by a row of stator blades. Stage efficiency accounts for the overall performance of this combined unit in terms of pressure rise and work input.

**Definition:**

Stage efficiency ($\eta_{stage}$) is defined as the ratio of the ideal work done to achieve the actual pressure rise across the stage to the actual work input to the stage.

$\eta_{stage} = \frac{\text{Ideal work for actual pressure rise}}{\text{Actual work input to the stage}}$

**Alternative Definition (Isentropic):**

More commonly, stage efficiency is defined based on isentropic compression.

$\eta_{stage} = \frac{\text{Isentropic work input}}{\text{Actual work input}}$

Where:
*   **Isentropic work input:** The work that would be required if the compression across the stage were isentropic (reversible adiabatic). This is calculated using the isentropic relation $w_{isen} = c_p (T_{2s} - T_{1})$, where $T_{2s}$ is the isentropic outlet temperature.
*   **Actual work input:** The actual work supplied to the stage, determined from the enthalpy rise of the fluid, $w_{actual} = c_p (T_{2a} - T_{1})$, where $T_{2a}$ is the actual outlet temperature.

Therefore, $\eta_{stage} = \frac{c_p (T_{2s} - T_{1})}{c_p (T_{2a} - T_{1})} = \frac{T_{2s} - T_{1}}{T_{2a} - T_{1}}$

**Explanation:**

*   The stage efficiency considers both the aerodynamic losses within the blades (covered by blade efficiency) and other losses that occur within a stage, such as:
    *   **Mixing losses:** After the rotor, the flow is a non-uniform mixture of high and low-energy streams. The stator's job is to diffuse this mixed flow. Stagnation pressure losses occur during this mixing and diffusion process.
    *   **Disc friction:** The rotating disc of the rotor causes friction with the surrounding air, consuming energy.
    *   **Leakage:** Air leakage over the rotor blade tips and through seals at the shaft.
    *   **End wall losses:** Losses occurring at the hub and casing due to secondary flows and boundary layers.

**Relationship between Blade and Stage Efficiency:**

Blade efficiency is a component of stage efficiency. Stage efficiency is a more comprehensive measure of the overall effectiveness of a compressor stage.

**Important Point to Remember:** Stage efficiency accounts for all losses within a rotor-stator pair, including aerodynamic losses and mechanical losses.

---

**4. Other Relevant Efficiencies**

While blade and stage efficiencies are paramount for compressors, it's useful to be aware of related terms used in gas turbine analysis.

*   **Isentropic Efficiency of a Compressor (Overall):** This is the most commonly used metric for the entire compressor. It compares the actual work input to the compressor with the work input required for an isentropic compression from the inlet conditions to the actual outlet pressure.

    $\eta_{compressor, isentropic} = \frac{\text{Isentropic work input}}{\text{Actual work input}} = \frac{h_{2s} - h_1}{h_{2a} - h_1}$

    For an ideal gas with constant specific heat, this simplifies to:
    $\eta_{compressor, isentropic} = \frac{T_{2s} - T_1}{T_{2a} - T_{1}}$

    This overall efficiency is related to stage efficiencies: $\eta_{compressor, isentropic} = \frac{\sum (\text{isentropic work per stage})}{\sum (\text{actual work per stage})}$

*   **Mechanical Efficiency:** This relates to losses in rotating machinery due to friction in bearings, seals, and disc windage (disc friction). While not directly a fluid dynamic efficiency, it affects the actual power delivered to the compressor. (Mathur M L, Chapter 3 discusses mechanical aspects).

*   **Volumetric Efficiency:** This is more relevant for positive displacement compressors, but for axial compressors, it relates to the volume flow rate achieved compared to the swept volume of the impeller. It indicates how well the compressor "fills" its passages.

---

**5. Factors Affecting Stage Efficiency**

*   **Blade Loading:** Higher pressure rise per stage (higher blade loading) often leads to lower efficiency due to increased aerodynamic losses.
*   **Flow Coefficient ($\phi$):** This dimensionless parameter relates the axial velocity to the blade tip speed ($ \phi = V_a / U $). There's an optimal flow coefficient for maximum stage efficiency.
*   **Stage Loading Coefficient ($\psi$):** This relates the isentropic work per stage to the square of the blade tip speed ($ \psi = \Delta h_0 / U^2 $). Higher loading coefficients generally decrease efficiency. (Yahya, Chapter 7 provides detailed analysis of these coefficients).
*   **Diffusion Factor (D):** This parameter, often used in blade design, quantifies the amount of diffusion (velocity decrease) in the blade passage. Higher diffusion factors increase the likelihood of flow separation and reduce efficiency.
*   **Number of Stages:** As the number of stages increases, the overall pressure ratio achieved also increases. However, cumulative losses mean that efficiency might not scale linearly.
*   **Manufacturing Tolerances:** Variations in blade profiles and clearances from the ideal design can reduce stage efficiency.

---

**6. Velocity Diagrams and Efficiency Calculations**

Velocity diagrams are crucial for understanding the flow and calculating work and efficiency. For a single stage:

*   **Rotor Action:** The rotor blades are rotating, and they impart work to the fluid, increasing its kinetic and potential energy (enthalpy).
*   **Stator Action:** The stator blades are stationary and guide the flow from the rotor exit to the next rotor inlet, typically converting kinetic energy into pressure energy through diffusion.

**Work Done per Stage (from velocity diagrams):**

Actual work done per unit mass flow rate: $W_{actual} = U (V_{w2} - V_{w1})$
Where:
*   $U$ is the rotor blade speed.
*   $V_{w1}$ is the whirl velocity component entering the rotor.
*   $V_{w2}$ is the whirl velocity component leaving the rotor.

Isentropic work done per unit mass flow rate: $W_{isen} = c_p (T_{2s} - T_{1})$

**Stage Efficiency Calculation Example:**

Consider a single compressor stage with the following parameters:

*   Inlet stagnation temperature ($T_1$): 290 K
*   Outlet stagnation temperature ($T_{2a}$): 340 K
*   Isentropic outlet stagnation temperature ($T_{2s}$): 325 K
*   Specific heat of air ($c_p$): 1.005 kJ/kg.K

**Calculate the stage efficiency.**

**Solution:**

Using the formula for stage efficiency:
$\eta_{stage} = \frac{T_{2s} - T_{1}}{T_{2a} - T_{1}}$

$\eta_{stage} = \frac{325 \text{ K} - 290 \text{ K}}{340 \text{ K} - 290 \text{ K}}$
$\eta_{stage} = \frac{35 \text{ K}}{50 \text{ K}}$
$\eta_{stage} = 0.70$ or 70%

This means that for the actual temperature rise achieved, only 70% of the work input was effectively used for isentropic compression, with the remaining 30% lost due to inefficiencies.

---

**7. Importance of High Efficiencies**

*   **Fuel Efficiency:** Higher compressor efficiency means less work input is required for a given pressure rise, leading to lower fuel consumption in the gas turbine engine. (CO1)
*   **Power Output:** A more efficient compressor allows the turbine to extract more useful work from the expanded gases, increasing the overall power output. (CO1)
*   **Engine Size and Weight:** Achieving a required pressure ratio with fewer stages or smaller components can lead to more compact and lighter engines.
*   **Operating Range:** Efficient compressors generally have a wider stable operating range, reducing the risk of surge (sudden flow reversal).

---

**8. Summary of Key Efficiencies in Compressors:**

| Efficiency Type       | Definition                                                                      | Primary Focus                                              |
| :-------------------- | :------------------------------------------------------------------------------ | :--------------------------------------------------------- |
| **Blade Efficiency**  | Theoretical work by blade / Actual work by blade                                | Aerodynamic performance of individual blade profile        |
| **Stage Efficiency**  | Isentropic work for stage / Actual work for stage                               | Overall performance of a rotor-stator pair               |
| **Isentropic Comp. Eff.** | Isentropic work for overall compressor / Actual work for overall compressor | Overall performance of the entire compressor section       |

---

**Important Points to Remember:**

*   **Efficiency is always less than 100%.** Losses are unavoidable in real-world fluid machinery.
*   **Stage efficiency is a more inclusive metric than blade efficiency.**
*   **High compressor efficiency is crucial for gas turbine performance.**
*   **Velocity diagrams are essential tools for analyzing and calculating compressor performance.**
*   **Factors like blade design, operating conditions, and manufacturing quality all influence efficiency.**
*   **Ganesan, Yahya, and Mathur provide comprehensive treatments of these topics, with detailed theoretical backgrounds and design considerations.** (Referencing textbooks for deeper understanding).

---

**Practice Questions:**

1.  **Define** blade efficiency and stage efficiency in your own words.
2.  A compressor stage has an inlet stagnation temperature of 300 K. The actual outlet stagnation temperature is 360 K. If the stage efficiency is 75%, calculate the isentropic outlet stagnation temperature. (CO1, CO2)
    *   **Answer:** $\eta_{stage} = \frac{T_{2s} - T_{1}}{T_{2a} - T_{1}} \Rightarrow 0.75 = \frac{T_{2s} - 300}{360 - 300} \Rightarrow 0.75 = \frac{T_{2s} - 300}{60} \Rightarrow 45 = T_{2s} - 300 \Rightarrow T_{2s} = 345$ K
3.  List at least three factors that can significantly reduce the blade efficiency of an axial flow compressor. (CO2)
    *   **Answer:** Blade surface roughness, flow separation due to poor incidence, tip leakage, high Mach number effects.
4.  Explain why stage efficiency is generally lower than the ideal blade efficiency of the rotor and stator blades within that stage. (CO2)
    *   **Answer:** Stage efficiency accounts for additional losses beyond those inherent in the blade profiles themselves, such as mixing losses between rotor and stator, disc friction, end wall losses, and leakage.
5.  How does an increase in the number of stages affect the overall isentropic efficiency of a multi-stage axial flow compressor, assuming identical stages? Justify your answer. (CO2, CO3)
    *   **Answer:** As the number of stages increases, the overall isentropic efficiency tends to decrease slightly due to the cumulative effect of losses in each stage. While the ideal work input is distributed over more stages, the actual work input per stage, with its associated losses, accumulates.

---

**Further Reading/References:**

*   **Ganesan, V. (2017). *Gas Turbines*. McGraw Hill Education.** (Chapter 10 and relevant sections on compressor aerodynamics and performance).
*   **Yahya, S. M. (2011). *Turbines, Compressors and Fans*. McGraw Hill.** (Chapter 7 on Axial Flow Compressors provides detailed analysis of stage performance, velocity diagrams, and efficiency parameters).
*   **Mathur, M. L. (2010). *Gas Turbine & Jet Rocket Propulsion*. Standard Publishers Distributors.** (Sections discussing compressor types and their performance characteristics).
*   **Cohen, H. (2019). *Gas Turbine Theory*. Pearson Education.** (Provides advanced theoretical treatment of compressor aerodynamics and efficiency analysis).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
