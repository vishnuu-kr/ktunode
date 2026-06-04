---
title: "maximum efficiency-compounding-reheat factor-blade height-"
subject: "POWER PLANT ENGINEERING"
module: "Module 2: Steam generator classifications"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463788"
status: "completed"
scrapedAt: "2026-05-20T18:06:30.021Z"
---
This is a very ambitious request that requires generating detailed study notes for a specific topic within a broader subject, incorporating multiple learning outcomes, course outcomes, and referencing specific textbooks. The topic "maximum efficiency-compounding-reheat factor-blade height" is a mix of concepts related to steam turbines and steam generators, and how they interact for overall plant efficiency.

**Important Note:** Directly extracting and presenting content from specific textbooks without their explicit permission would constitute copyright infringement. Therefore, these notes will be generated based on common knowledge and principles of Power Plant Engineering, drawing upon the *types* of information found in the referenced textbooks to provide a comprehensive and structured study guide. The goal is to provide accurate and understandable explanations that would likely be found in such resources.

Let's break down the topic and align it with the provided outcomes.

---

# POWER PLANT ENGINEERING: Module 2: Steam Generator Classifications & Related Concepts

## Topic: Maximum Efficiency, Compounding, Reheat Factor, and Blade Height

### **Module Overview:**

This module delves into the fundamental classifications and operational aspects of steam generators, the heart of thermal power plants. We will explore how various design choices and operational strategies influence the overall efficiency and performance of the steam cycle.

---

### **1. Maximum Efficiency in Thermal Power Plants**

**Key Concept:** Maximum theoretical efficiency of a thermal power plant is governed by the Carnot cycle. However, practical efficiencies are significantly lower due to irreversibilities in various components. This section focuses on achieving the highest possible *practical* efficiency within the limitations of real-world systems.

*   **Carnot Efficiency ($\eta_{Carnot}$):**
    *   The theoretical maximum efficiency achievable by any heat engine operating between two temperature reservoirs.
    *   Formula: $\eta_{Carnot} = 1 - \frac{T_{cold}}{T_{hot}}$, where $T_{cold}$ and $T_{hot}$ are the absolute temperatures of the cold and hot reservoirs, respectively.
    *   **Important Note:** This is an ideal limit and cannot be reached in practice due to entropy generation in real processes.

*   **Practical Considerations for Maximizing Efficiency:**
    *   **Maximizing Boiler Efficiency:**
        *   **Complete Combustion:** Ensuring all fuel is burnt to release maximum heat.
        *   **Minimizing Flue Gas Losses:** Reducing heat lost with exhaust gases (e.g., through air preheaters, economizers).
        *   **Minimizing Radiation and Convection Losses:** Proper insulation of the boiler.
        *   **Water Wall Design:** Efficient heat transfer from combustion gases to water.
    *   **Maximizing Turbine Efficiency:**
        *   **High Steam Inlet Temperature and Pressure:** Increases the enthalpy drop and potential work output.
        *   **Low Condenser Pressure (High Vacuum):** Decreases the exhaust enthalpy, maximizing expansion.
        *   **Minimizing Internal Irreversibilities:** Efficient nozzle and blade design, minimizing friction and leakage.
        *   **Compounding (discussed below):** To reduce blade speed and improve efficiency.
        *   **Reheating (discussed below):** To improve the enthalpy drop and reduce moisture in later stages.
    *   **Maximizing Condenser Efficiency:**
        *   **Effective Heat Transfer:** Ensuring efficient cooling of exhaust steam to produce a low condenser pressure.
        *   **Minimizing Air Leakage:** Air in the condenser reduces the vacuum and lowers efficiency.
    *   **Optimizing Rankine Cycle:**
        *   **Superheating:** Increases the average temperature at which heat is added, raising Carnot efficiency.
        *   **Reheating:** Increases the average temperature at which heat is added and improves turbine efficiency.
        *   **Regenerative Feedwater Heating:** Preheats feedwater using steam extracted from the turbine, reducing the amount of heat needed in the boiler and improving overall cycle efficiency.

*   **Alignment with Course Outcomes:**
    *   **CO2 (K3):** Calculating performance parameters of Rankine cycles directly relates to achieving and understanding maximum efficiency.
    *   **CO3 (K3):** Turbine efficiency is crucial for overall plant efficiency.

*   **Referenced Content Style (El Wakil, Nag):** These textbooks would likely present detailed analyses of each term in the Rankine cycle efficiency and discuss practical limitations and methods to overcome them, often with thermodynamic diagrams.

---

### **2. Compounding in Steam Turbines**

**Key Concept:** Compounding is a method of dividing the expansion of steam across multiple stages (nozzles and blades) in a steam turbine. This is done to reduce the high rotational speed of a single-stage turbine, making it more practical and efficient.

*   **Why Compounding is Necessary:**
    *   In a simple impulse turbine, the steam expands through a nozzle, achieving a very high velocity. To extract work efficiently, the blade speed must be approximately half the steam jet velocity.
    *   For high steam pressures and temperatures, the resulting steam velocities are extremely high, leading to impractically high blade speeds, which cause:
        *   **Centrifugal Stress:** High stress on the blades and rotor.
        *   **High Tip Speeds:** Leading to excessive friction losses and erosion.
        *   **Low Blade Efficiency:** If blade speed is not matched to steam speed.

*   **Types of Compounding:**

    *   **Velocity Compounding (Curtis Turbine):**
        *   **Mechanism:** Steam expands through a single nozzle, gaining high velocity. The steam then passes through multiple rows of moving blades, each alternating with a stationary guide blade row. The guide blades redirect the steam onto the next set of moving blades, allowing further work extraction.
        *   **Expansion:** Occurs only in the nozzle.
        *   **Pressure:** Remains relatively constant across the blade rows.
        *   **Diagram:** Single nozzle, then alternating rows of moving and stationary blades.
        *   **Efficiency:** Good for high-pressure, low-volume steam (e.g., initial stages of large turbines).

    *   **Pressure Compounding (Rateau Turbine):**
        *   **Mechanism:** Steam expands through multiple simple nozzles (or nozzle diaphragms) and corresponding rows of moving blades. Between each set of moving blades, there is a stationary guide blade row that redirects the steam and a diaphragm that causes a pressure drop.
        *   **Expansion:** Occurs in each nozzle stage.
        *   **Pressure:** Decreases gradually across each stage.
        *   **Diagram:** Multiple stages, each with a nozzle diaphragm and a row of moving and stationary blades.
        *   **Efficiency:** Most common type for moderate to high-power turbines.

    *   **Pressure-Velocity Compounding (Combination of Curtis and Rateau):**
        *   **Mechanism:** Combines features of both. For example, a few stages might be velocity compounded (Curtis) followed by several stages of pressure compounding (Rateau).
        *   **Efficiency:** Offers a balance of benefits.

*   **Blade Speed Ratio (U/V):**
    *   $U$ = Blade speed
    *   $V$ = Steam jet velocity
    *   **Maximum theoretical efficiency** for an impulse turbine occurs when $U/V = 0.5$.
    *   Compounding allows the blade speed ($U$) to be reduced to practical limits while still maintaining a favorable $U/V$ ratio for efficient energy transfer.

*   **Alignment with Course Outcomes:**
    *   **CO3 (K3):** Understanding compounding is directly related to turbine design for efficient work extraction.

*   **Referenced Content Style (Nagpal, Gupta):** These books would provide detailed diagrams of each compounding type, derivations of ideal velocity triangles, and explanations of how compounding impacts efficiency and practical considerations.

---

### **3. Reheat Factor**

**Key Concept:** The reheat factor ($RF$) accounts for the fact that in a multi-stage turbine with reheating, the expansion process is not truly isentropic. As steam expands and performs work, its temperature drops. In subsequent stages, if reheat is employed, the steam is reheated. This reheating process slightly increases the enthalpy at the beginning of the subsequent expansion compared to a single, non-reheated expansion, and this effect is captured by the reheat factor.

*   **Definition:** The reheat factor is defined as the ratio of the total work obtained in a multi-stage expansion with reheating to the work that would have been obtained if the steam had expanded isentropically from the initial pressure to the final pressure in a single stage.

*   **Mathematical Representation:**
    *   Let $W_{actual}$ be the actual work done by the steam in a multi-stage expansion with reheating.
    *   Let $W_{isentropic}$ be the work done if the steam expanded isentropically from the initial state to the final pressure.
    *   $RF = \frac{W_{actual}}{W_{isentropic}}$

*   **Physical Interpretation:**
    *   Due to friction and other irreversibilities in each stage, the actual enthalpy drop per stage is slightly less than the isentropic enthalpy drop. This means the steam leaves each stage with slightly higher enthalpy than it would in an isentropic expansion.
    *   When reheat is applied, the steam is returned to a higher enthalpy level than it would have if it had simply expanded isentropically through all stages.
    *   The reheat factor is typically greater than 1 for systems with reheating because the irreversibilities in the initial stages cause the steam to have a higher enthalpy entering the reheater than it would in a purely isentropic expansion. The reheating then effectively boosts this enthalpy further.

*   **Factors Affecting Reheat Factor:**
    *   **Degree of Reheating:** Higher reheat pressures lead to a higher reheat factor.
    *   **Number of Stages:** More stages with reheating generally increase the reheat factor.
    *   **Turbine Efficiency:** Lower stage efficiencies (higher irreversibilities) tend to increase the reheat factor.
    *   **Initial Steam Conditions:** Higher initial pressures and temperatures can influence the reheat factor.

*   **Importance:**
    *   Accurate calculation of the reheat factor is essential for predicting the actual work output of a reheat turbine.
    *   It's a measure of the effectiveness of the reheating process in improving overall turbine work.

*   **Alignment with Course Outcomes:**
    *   **CO2 (K3):** Reheat is a modification to the Rankine cycle. Calculating its impact involves performance parameters.
    *   **CO3 (K3):** Reheat directly affects the work output of the turbine.

*   **Referenced Content Style (El Wakil, Nag):** Textbooks would present detailed thermodynamic derivations of the reheat factor, often using Mollier charts or enthalpy-entropy diagrams to illustrate the process and its impact on work output. They would also likely provide empirical correlations or tables for estimating the reheat factor.

---

### **4. Blade Height in Steam Turbines**

**Key Concept:** Blade height refers to the axial dimension of the turbine blades. It directly influences the volume of steam that can flow through the turbine per unit time and, consequently, the power output.

*   **Relationship with Steam Flow Rate and Power:**
    *   The cross-sectional area available for steam flow through the turbine blades is proportional to the blade height (and the number of blades, but height is the primary variable for stage capacity).
    *   A larger blade height allows more steam to pass through the turbine, thus increasing the mass flow rate.
    *   Increased mass flow rate, with a given enthalpy drop per unit mass, leads to higher power output.

*   **Factors Determining Blade Height:**
    *   **Turbine Capacity (Power Output):** Higher power output requires a larger mass flow rate, necessitating taller blades in the later stages.
    *   **Specific Volume of Steam:** As steam expands through the turbine, its specific volume increases significantly. To maintain reasonable steam velocities and exit conditions, blade height must increase in later stages to accommodate the larger volume.
        *   $V_{steam} = m \times v$, where $V_{steam}$ is the volume flow rate, $m$ is mass flow rate, and $v$ is specific volume.
        *   For constant $m$ and increasing $v$, $V_{steam}$ increases.
        *   The annulus area ($A$) is roughly proportional to $D \times h$, where $D$ is rotor diameter and $h$ is blade height.
        *   $V_{steam} \approx A \times V_{flow}$, where $V_{flow}$ is the axial velocity of steam.
        *   Therefore, $h$ must increase with $v$.
    *   **Blade Tip Speed (Rotational Speed and Diameter):**
        *   Higher rotational speeds or larger rotor diameters increase blade tip speed ($U = \omega r$).
        *   For a given steam velocity and optimum blade speed ratio ($U/V$), a higher blade speed might require shorter blades to avoid excessive centrifugal forces or might dictate a larger diameter.
    *   **Stage Efficiency:** While not directly determining height, the design of a stage for optimal efficiency (e.g., nozzle angle, blade angle) will indirectly influence the required blade height to achieve the desired flow.
    *   **Axial Thrust:** The pressure difference across the blade row acting on the annulus area creates an axial thrust. Blade height and steam velocity profiles contribute to this thrust, which must be managed by thrust bearings.

*   **Blade Height Variation Along the Turbine:**
    *   **First Stage:** Blades are typically shorter because the steam is at high pressure and low specific volume.
    *   **Later Stages:** As steam expands and its specific volume increases, blade height increases progressively to handle the larger volume flow. The last stage blade can be very long to extract the maximum possible energy from the expanded steam before it enters the condenser.

*   **Aerodynamic Considerations:**
    *   **Tip Leakage:** Leakage of steam over the blade tips reduces efficiency. Longer blades can exacerbate this problem if not properly sealed.
    *   **Flow Control:** Proper aerodynamic design of blade profiles is crucial for efficient energy transfer at different blade heights.

*   **Alignment with Course Outcomes:**
    *   **CO3 (K3):** Blade height is a critical design parameter for steam turbines that directly impacts their performance and efficiency.
    *   **CO1 (K2):** Understanding blade height is part of understanding the components and working of steam turbines.

*   **Referenced Content Style (El Wakil, Nagpal):** These books would provide detailed derivations relating blade height to steam flow, specific volume, and power output. They would also include diagrams showing the typical variation of blade height across different stages of a steam turbine and discuss aerodynamic principles governing blade design.

---

### **Summary of Key Concepts and Interrelationships:**

*   **Maximum Practical Efficiency** is achieved by optimizing each component of the Rankine cycle and the steam turbine.
*   **Compounding** is essential for **steam turbine efficiency** by reducing blade speeds to practical levels, improving the $U/V$ ratio.
*   **Reheat Factor** quantifies the thermodynamic benefit of reheating in multi-stage turbines, correcting for irreversibilities and increasing overall work output.
*   **Blade Height** is a crucial design parameter in turbines that adapts to the increasing specific volume of steam in later stages, ensuring efficient flow and maximizing power output.

---

### **Practice Questions and Exercises:**

**Question 1 (CO2, K3):**
A thermal power plant operates on a Rankine cycle. The turbine inlet conditions are 3 MPa and 500°C. The condenser pressure is 0.05 MPa. Assuming isentropic expansion in the turbine and pump, calculate the Carnot efficiency and the Rankine cycle efficiency.

**Answer:**
*   **Carnot Efficiency:**
    *   Turbine inlet temperature ($T_{hot}$) = 500°C = 773.15 K
    *   Condenser temperature ($T_{cold}$) can be approximated from the saturation temperature at 0.05 MPa. From steam tables, saturation temperature at 0.05 MPa is approximately 32.89°C = 306.04 K.
    *   $\eta_{Carnot} = 1 - \frac{T_{cold}}{T_{hot}} = 1 - \frac{306.04}{773.15} \approx 0.604$ or 60.4%.

*   **Rankine Cycle Efficiency:**
    *   State 1 (Turbine Inlet): $P_1 = 3$ MPa, $T_1 = 500^\circ$C. From steam tables, $h_1 = 3450.1$ kJ/kg, $s_1 = 6.7560$ kJ/kg·K.
    *   State 2 (Turbine Outlet): $P_2 = 0.05$ MPa, $s_2 = s_1 = 6.7560$ kJ/kg·K. Using steam tables for $P_2=0.05$ MPa and $s_2=6.7560$ kJ/kg·K, we find it is in the superheated region. Interpolating or using software, $h_2 \approx 2630$ kJ/kg.
    *   Work output of turbine ($W_T$) = $h_1 - h_2 = 3450.1 - 2630 = 820.1$ kJ/kg.
    *   State 3 (Condenser Outlet/Pump Inlet): Saturated liquid at 0.05 MPa. From steam tables, $h_3 = h_f$ at 0.05 MPa $\approx 137.78$ kJ/kg.
    *   State 4 (Pump Outlet): $P_4 = 3$ MPa. Work done by pump ($W_P$) $\approx v_3(P_4 - P_3)$. Specific volume of saturated liquid at 0.05 MPa ($v_3$) $\approx 0.001003$ m³/kg.
    *   $W_P = 0.001003 \times (3000 - 50)$ kJ/kg $\approx 2.95$ kJ/kg.
    *   $h_4 = h_3 + W_P = 137.78 + 2.95 = 140.73$ kJ/kg.
    *   Heat added in boiler ($Q_{in}$) = $h_1 - h_4 = 3450.1 - 140.73 = 3309.37$ kJ/kg.
    *   Net work output ($W_{net}$) = $W_T - W_P = 820.1 - 2.95 = 817.15$ kJ/kg.
    *   Rankine Efficiency ($\eta_{Rankine}$) = $\frac{W_{net}}{Q_{in}} = \frac{817.15}{3309.37} \approx 0.247$ or 24.7%.

**Question 2 (CO3, K3):**
In a velocity-compounded impulse turbine stage, the steam leaves the nozzle with a velocity of 600 m/s. If the blade speed is 200 m/s and the blade speed ratio is kept at the optimum for maximum efficiency, what is the ideal work done per unit mass of steam?

**Answer:**
*   Ideal work done in an impulse turbine stage is related to the change in kinetic energy. For maximum efficiency in a single impulse stage, the blade speed is half the steam jet speed ($U = V/2$).
*   However, the question implies we need to calculate the work output based on the given blade speed.
*   The specific work done by the moving blades is given by: $W_{stage} = U \times (V_{relative,in} \cos \beta_1 - V_{relative,out} \cos \beta_2)$, where $\beta$ is the blade angle and $V_{relative}$ is the relative velocity.
*   A simpler approach related to the blade speed ratio and kinetic energy:
    *   The kinetic energy of the steam leaving the nozzle is $\frac{1}{2}V^2 = \frac{1}{2}(600)^2 = 180000$ J/kg = 180 kJ/kg.
    *   For maximum efficiency in an impulse stage, the blade speed ($U$) should be half the steam jet velocity ($V$). Here, $U = 200$ m/s and $V = 600$ m/s. This means the $U/V$ ratio is $200/600 = 1/3$, which is not optimal for a single stage.
    *   If we assume the question is asking for the work extracted *given* this blade speed and the steam leaves the nozzle with 600 m/s, and assuming ideal conditions (no friction), the relative velocity of steam entering the blades will be $V_{rel,in} = V - U = 600 - 200 = 400$ m/s.
    *   For a simple impulse turbine to be efficient, the steam should leave the moving blades with the same relative velocity as it entered, but in the opposite direction (ideally $V_{rel,out} = V_{rel,in}$). The stationary blades then redirect this steam.
    *   The work done per unit mass is $W = U \times \Delta V_{tangential}$. In an ideal impulse stage, $\Delta V_{tangential} = 2U$.
    *   So, ideal work $W_{ideal} = U \times (2U) = 2U^2$.
    *   $W_{ideal} = 2 \times (200)^2 = 2 \times 40000 = 80000$ J/kg = 80 kJ/kg.
    *   This assumes the stage is designed such that the steam is fully reversed in relative motion by the blades.

**Question 3 (CO2, K3):**
In a reheat cycle, the steam is expanded in the high-pressure turbine, then reheated to the initial temperature, and finally expanded in the low-pressure turbine to the condenser pressure. Explain how the reheat factor affects the net work output and thermal efficiency compared to a non-reheat cycle.

**Answer:**
*   **Net Work Output:** The reheat factor is greater than 1, indicating that the total work output from a reheat turbine is higher than that of a non-reheat turbine expanding over the same pressure range (considering irreversibilities). This is because reheating increases the average temperature at which heat is added in the cycle and also improves the enthalpy drop in the later stages, leading to more work extraction.
*   **Thermal Efficiency:** By increasing the net work output for a similar or slightly increased heat input (depending on the reheat temperature), the reheat cycle generally exhibits higher thermal efficiency than a non-reheat cycle, especially at higher initial pressures. The reheat factor is a measure of how effectively this additional work is realized.

**Question 4 (CO1, CO3, K2/K3):**
Why do the blades in the last stage of a steam turbine typically have a much greater height than the blades in the initial stages?

**Answer:**
*   **Increasing Specific Volume:** As steam expands through successive stages of a turbine, its pressure decreases, and its specific volume ($v$) increases significantly.
*   **Maintaining Velocity:** To extract work efficiently, the steam velocity through the blades must be kept within a reasonable range.
*   **Mass Flow Rate:** The volume flow rate of steam through a stage is the product of its mass flow rate and specific volume. To maintain a consistent mass flow rate (and thus power output) while accommodating the increasing specific volume, the cross-sectional area for flow must increase.
*   **Annulus Area:** The annulus area available for flow is approximately the product of the circumference (related to the rotor diameter) and the blade height. In the later stages, to handle the large specific volume of the expanded steam without requiring an excessively large rotor diameter or excessively high axial steam velocity, the blade height is increased. This ensures that the volume of steam passing through the stage per unit time is efficiently processed to extract the maximum possible energy.

---

### **Important Points to Remember:**

*   **Maximum efficiency** in a thermal power plant is a continuous pursuit of minimizing irreversibilities in every component.
*   **Compounding** is a practical necessity for steam turbines to reduce excessive rotational speeds and improve blade efficiency.
*   The **reheat factor** quantifies the positive thermodynamic impact of reheating on turbine work output.
*   **Blade height** in a turbine increases with the specific volume of steam in successive stages to ensure efficient flow and maximize power output.
*   Understanding the interplay between these concepts is crucial for analyzing and designing efficient steam power plants.

---

This comprehensive set of notes covers the requested topics and aligns with the provided learning and course outcomes, offering a structured approach to studying these critical aspects of steam generator and turbine design. Remember to consult your textbooks for detailed derivations, diagrams, and specific examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
