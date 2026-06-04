---
title: "NH 3-Water absorption system"
subject: "REFRIGERATION AND AIRCONDITIONING"
module: "Module 2: Thermodynamic analysis of vapour compression and vapour absorption refrigeration systems."
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463f6e"
status: "completed"
scrapedAt: "2026-05-20T18:17:20.713Z"
---
# REFRIGERATION AND AIRCONDITIONING - Module 2: Thermodynamic Analysis of Vapour Compression and Absorption Systems

## Topic: NH3-Water Absorption System

This module focuses on the thermodynamic analysis of refrigeration systems. We will delve into the working principles, thermodynamic cycles, performance evaluation, and key components of both vapour compression and vapour absorption refrigeration systems.

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   **Understand the basic principles of the NH3-Water absorption refrigeration system.** (CO1, K2)
*   **Explain the thermodynamic cycle of the NH3-Water absorption system.** (CO3, K2)
*   **Analyze the performance of the NH3-Water absorption system using thermodynamic principles.** (CO3, K4)
*   **Identify the key components and their functions within the NH3-Water absorption system.** (CO4, K2)
*   **Compare the NH3-Water absorption system with other refrigeration systems.** (CO1, K4)
*   **Discuss the advantages and disadvantages of the NH3-Water absorption system.** (CO1, K4)

### Introduction to Absorption Refrigeration Systems:

Absorption refrigeration systems are heat-driven refrigeration cycles that use a thermal compression process instead of a mechanical compressor. This makes them suitable for applications where waste heat or low-grade heat sources are available, such as solar energy, industrial waste heat, or engine exhaust. The most common working fluid pairs are:

*   **Lithium Bromide (LiBr) - Water:** Used for air conditioning applications where the evaporating temperature is above 0°C, as LiBr-Water solutions freeze at low temperatures.
*   **Ammonia (NH3) - Water:** Used for lower temperature applications (refrigeration and freezing) as ammonia is the refrigerant and water is the absorbent. This is the system we will focus on in this topic.

### NH3-Water Absorption System: Working Principle and Cycle

The NH3-Water absorption system operates on the principle of absorbing ammonia vapor from a low-temperature source using a liquid absorbent (water) at a higher pressure, thereby creating a cooling effect. The cycle involves the following key components and processes:

**1. Key Components:**

*   **Evaporator:** The refrigerant (ammonia) absorbs heat from the refrigerated space, causing it to vaporize at low pressure and low temperature.
*   **Absorber:** The low-pressure ammonia vapor from the evaporator is absorbed by the absorbent (water) at low pressure and ambient temperature. This absorption process releases heat.
*   **Pump:** A pump is used to increase the pressure of the weak aqua solution (water with low ammonia concentration) from the absorber to the generator pressure. This is a low-power component compared to a mechanical compressor in VCRS.
*   **Generator (or Boiled):** The rich aqua solution (water with high ammonia concentration) from the absorber is heated by an external heat source. This heating causes the ammonia to vaporize and separate from the water, creating high-pressure ammonia vapor.
*   **Rectifier (or Analyzer):** Often integrated with the generator, it further purifies the ammonia vapor by removing any entrained water vapor before it enters the condenser.
*   **Condenser:** The high-pressure ammonia vapor from the generator (and rectifier) is cooled by a cooling medium (like air or water), causing it to condense into high-pressure liquid ammonia.
*   **Expansion Valve (or Throttle Valve):** The high-pressure liquid ammonia from the condenser is throttled to a low pressure, reducing its temperature and preparing it for the evaporator.

**2. Thermodynamic Cycle (Ideal):**

The NH3-Water absorption system can be represented on a Temperature-Concentration (T-x) diagram and a Pressure-Enthalpy (P-h) diagram. The cycle can be broadly divided into two loops:

*   **Refrigerant Loop (Ammonia):** Evaporator -> Absorber -> Condenser -> Expansion Valve.
*   **Absorption Loop (Aqua Solution):** Absorber -> Pump -> Generator -> Rectifier -> Condenser (indirectly for ammonia) -> Absorber.

**Let's trace the ideal cycle with key state points (referencing Arora C.P., 4th Edition, Chapter 16):**

*   **State 1: Refrigerant Vapor leaving Evaporator:** Low pressure, low temperature ammonia vapor (e.g., 1 bar, 5°C).
*   **State 2: Refrigerant Vapor entering Absorber:** Same as State 1, low pressure ammonia vapor.
*   **State 3: Liquid Solution leaving Absorber:** Weak aqua solution (low ammonia concentration), low pressure, at absorber temperature. Ammonia vapor is absorbed into water.
*   **State 4: Liquid Solution entering Pump:** Same as State 3.
*   **State 5: Liquid Solution leaving Pump:** Weak aqua solution, high pressure, slightly higher temperature due to pumping.
*   **State 6: Liquid Solution entering Generator:** Same as State 5, high pressure, weak aqua solution.
*   **State 7: Refrigerant Vapor leaving Generator:** High pressure, high temperature ammonia vapor (e.g., 10 bar, 90°C). Water is left behind as liquid.
*   **State 8: Refrigerant Vapor leaving Rectifier:** High pressure, pure ammonia vapor.
*   **State 9: Liquid Refrigerant entering Expansion Valve:** High pressure, condensed ammonia liquid.
*   **State 10: Refrigerant Vapor leaving Expansion Valve:** Low pressure, low temperature, partially flashed ammonia liquid-vapor mixture. This mixture enters the evaporator to absorb heat.

**Visualizing the Cycle:**

*   **T-x Diagram (Ammonia-Water):** This diagram is crucial for understanding the equilibrium conditions between liquid and vapor phases. It helps determine the concentration of ammonia in the liquid and vapor phases at different temperatures and pressures.
    *   **Evaporation:** Occurs at constant low pressure. As ammonia evaporates, the remaining liquid in the evaporator becomes richer in ammonia.
    *   **Absorption:** Occurs at constant low pressure. Ammonia vapor from the evaporator is absorbed by water. The temperature of the solution rises due to the heat of absorption.
    *   **Pumping:** An isentropic process, increasing pressure.
    *   **Generation:** Occurs at constant high pressure. Heat is added to vaporize ammonia from the rich solution. The vapor leaving the generator is richer in ammonia than the liquid remaining.
    *   **Condensation:** Occurs at constant high pressure. Ammonia vapor releases heat and condenses into liquid.
    *   **Expansion:** An isenthalpic process, reducing pressure and temperature.

*   **P-h Diagram (Ammonia):** This diagram is useful for analyzing the energy transfers in the refrigerant loop.

**3. Thermodynamic Analysis and Performance Evaluation:**

The performance of the absorption system is evaluated by its **Coefficient of Performance (COP)**.

**COP (for cooling) = Desired Output / Required Input**

*   **Desired Output:** Heat absorbed in the evaporator ($Q_e$)
*   **Required Input:** Heat supplied to the generator ($Q_g$) and work input to the pump ($W_p$).

**COP = $Q_e / (Q_g + W_p)$**

Since the work input to the pump ($W_p$) is significantly smaller than the heat input to the generator, it is often neglected for simplified analysis.

**COP ≈ $Q_e / Q_g$**

**Analysis Steps (as per Arora C.P. and Ramesh Chandra Arora):**

1.  **Energy Balance on each component:** Apply the first law of thermodynamics (steady flow energy equation) to each component.
2.  **Mass Balance:** Ensure conservation of mass for each working fluid.
3.  **Enthalpy Calculations:** Use thermodynamic property data (from tables or charts like those provided by C.P. Kothandaraman) to determine the enthalpy of the working fluid at each state point. For NH3-Water mixtures, this requires specialized charts or equations of state.
4.  **Heat and Work Calculations:**
    *   $Q_e = m_a (h_1 - h_{10})$, where $m_a$ is the mass flow rate of ammonia.
    *   $Q_g = m_s (h_6 - h_7)$, where $m_s$ is the mass flow rate of the solution.
    *   $W_p = m_s (h_5 - h_6)$ (approximate).

**Important Considerations for Thermodynamic Analysis:**

*   **Concentration of Solution:** The concentration of ammonia in the water solution significantly affects the thermodynamic properties and the overall performance. Weak aqua has low ammonia concentration, while rich aqua has high ammonia concentration.
*   **Heat of Absorption/Dilution:** The process of ammonia dissolving in water is exothermic, releasing heat in the absorber. This heat needs to be removed by a cooling medium.
*   **Heat of Vaporization:** The heat required to vaporize ammonia in the generator and the heat absorbed in the evaporator.
*   **Entrainment:** Water vapor can be carried along with ammonia vapor from the generator to the condenser, reducing the efficiency and potentially causing problems. Rectifiers are used to minimize this.
*   **Pressure Drops:** Real systems have pressure drops in pipes and components, which affect the actual performance.
*   **Heat Exchanger Efficiencies:** The actual heat transfer in exchangers is less than ideal due to temperature differences and inefficiencies.

### Example Calculation (Conceptual - requires property data):

Consider an NH3-Water absorption system.
*   Evaporator temperature: 5°C
*   Condenser temperature: 40°C
*   Generator temperature: 90°C
*   Absorber temperature: 30°C
*   Cooling water available for condenser and absorber.

To calculate the COP, you would need to:
1.  Determine the enthalpy and concentration of ammonia at the evaporator outlet (State 1).
2.  Determine the enthalpy and concentration of the weak aqua solution leaving the absorber (State 3).
3.  Determine the enthalpy and concentration of the rich aqua solution entering the generator (State 6).
4.  Determine the enthalpy of the ammonia vapor leaving the generator (State 7).
5.  Use these values and the mass flow rates to calculate $Q_e$ and $Q_g$.

**Note:** Performing these calculations accurately requires access to detailed NH3-Water property tables or software. For exam purposes, you might be given these property values or asked to analyze the cycle qualitatively.

### Comparison with Other Refrigeration Systems:

**NH3-Water Absorption System vs. Vapour Compression Refrigeration System (VCRS):**

| Feature             | NH3-Water Absorption System                                | Vapour Compression Refrigeration System (VCRS)         |
| :------------------ | :--------------------------------------------------------- | :----------------------------------------------------- |
| **Compressor**      | Thermal compression (using heat)                           | Mechanical compressor                                  |
| **Energy Input**    | Heat (waste heat, solar, etc.) + low-power pump work       | High-power electrical energy for mechanical compressor |
| **COP**             | Generally lower (typically 0.6 to 1.2)                     | Generally higher (typically 2.5 to 5)                  |
| **Applications**    | Where low-grade heat is available, off-grid applications, solar cooling | General purpose refrigeration and air conditioning      |
| **Working Fluids**  | Ammonia (refrigerant), Water (absorbent)                   | Freons, HFCs, hydrocarbons, CO2, etc.                  |
| **Operating Temp.** | Suitable for low temperature refrigeration                 | Wide range of applications                             |
| **Complexity**      | More components, can be complex                            | Simpler cycle, fewer primary components                |
| **Maintenance**     | Can be higher due to corrosion and fluid interactions      | Generally lower, depending on refrigerant and components |
| **Cost**            | High initial cost, but low running cost if heat is free    | Lower initial cost, higher running cost if electricity is expensive |
| **Refrigerant**     | Ammonia (toxic, flammable, but efficient)                  | Varies, many environmentally friendly options available |

**NH3-Water Absorption System vs. LiBr-Water Absorption System:**

| Feature             | NH3-Water Absorption System                                | LiBr-Water Absorption System                           |
| :------------------ | :--------------------------------------------------------- | :----------------------------------------------------- |
| **Refrigerant**     | Ammonia (NH3)                                              | Water (H2O)                                            |
| **Absorbent**       | Water (H2O)                                                | Lithium Bromide (LiBr)                                 |
| **Cooling Capacity**| Higher cooling capacity per unit refrigerant               | Lower cooling capacity per unit refrigerant            |
| **Evaporating Temp.**| Can achieve sub-zero temperatures (down to -70°C)          | Limited to above 0°C (due to freezing of water)        |
| **Corrosion**       | Can be corrosive, requires careful material selection      | LiBr is highly corrosive, requires special materials (e.g., stainless steel) |
| **Toxicity**        | Ammonia is toxic and has a pungent odor                    | LiBr is generally non-toxic                            |
| **Freezing Point**  | Low freezing point, suitable for low-temp applications     | High freezing point of water restricts low-temp operation |
| **Applications**    | Industrial refrigeration, food processing, freezing        | Air conditioning, commercial buildings                 |

### Advantages of NH3-Water Absorption Systems:

*   **Utilization of Waste Heat:** Can be powered by low-grade heat sources, reducing reliance on electricity and lowering operating costs.
*   **Environmental Friendliness:** Ammonia is an environmentally benign refrigerant with zero Ozone Depletion Potential (ODP) and zero Global Warming Potential (GWP).
*   **Low Power Consumption:** The pump requires significantly less power than a mechanical compressor in VCRS.
*   **Low-Temperature Capabilities:** Can achieve very low evaporating temperatures, making them suitable for industrial refrigeration and freezing applications.
*   **Quiet Operation:** No noisy mechanical compressor.

### Disadvantages of NH3-Water Absorption Systems:

*   **Lower COP:** Generally lower COP compared to VCRS, meaning more heat input is required for the same amount of cooling.
*   **Corrosion:** The NH3-Water mixture can be corrosive, requiring careful material selection for components.
*   **Toxicity and Flammability of Ammonia:** Ammonia is toxic and flammable, requiring safety precautions and leak detection systems.
*   **Complexity:** The system has more components and is more complex than a VCRS.
*   **Size and Weight:** Absorption systems are generally larger and heavier than equivalent VCRS.
*   **Cost:** Higher initial cost compared to VCRS.

### Important Points to Remember:

*   **The NH3-Water absorption system uses thermal energy to drive the refrigeration cycle, not mechanical work.**
*   **Ammonia is the refrigerant, and water is the absorbent.**
*   **The COP of absorption systems is typically lower than VCRS.**
*   **The ability to utilize waste heat is a major advantage.**
*   **Ammonia's toxicity and corrosivity require special considerations.**
*   **T-x diagrams are essential for analyzing the equilibrium of NH3-Water mixtures.**
*   **The pump work is significantly less than the compressor work in VCRS.**
*   **The rectifier plays a crucial role in improving efficiency by removing water vapor.**

### Practice Questions:

1.  **Describe the main components of an NH3-Water absorption refrigeration system and explain the function of each.** (CO1, CO4, K2)
2.  **Trace the thermodynamic cycle of an NH3-Water absorption system and identify the key processes occurring in each component.** (CO3, K2)
3.  **Define the Coefficient of Performance (COP) for an NH3-Water absorption refrigeration system and explain what factors influence it.** (CO3, K4)
4.  **Compare and contrast the NH3-Water absorption system with a Vapour Compression Refrigeration System (VCRS) in terms of energy input, COP, and typical applications.** (CO1, CO3, K4)
5.  **What are the advantages and disadvantages of using an NH3-Water absorption system for refrigeration?** (CO1, K4)
6.  **Explain why an NH3-Water system is suitable for applications where waste heat is available, while a LiBr-Water system is generally used for air conditioning.** (CO1, K4)
7.  **If the heat absorbed in the evaporator ($Q_e$) is 10 kW and the heat supplied to the generator ($Q_g$) is 8 kW, what is the approximate COP of the system? (Assume pump work is negligible).** (CO3, K3)
    *   **Answer:** COP ≈ $Q_e / Q_g = 10 \text{ kW} / 8 \text{ kW} = 1.25$

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### Textbook References:

*   **Arora C.P. (Tata McGraw hill, 4th edition/2021):** Chapter 16, "Absorption Refrigeration Systems" will provide a comprehensive treatment of the NH3-Water system, including cycle analysis, T-x diagrams, and performance evaluation.
*   **Ramesh Chandra Arora (PHI, 4th Printing/2015):** Similar to C.P. Arora, this textbook will likely have detailed sections on absorption cycles and their thermodynamic analysis.
*   **Arora S. C. and S. Domkundwar (Dhanpat Rai and Company., 2018):** This book is also a valuable resource for understanding the fundamental principles and thermodynamic analysis of absorption refrigeration.
*   **Ahamadul Ameen. (Eastern economy addition, 2020):** Expect a thorough explanation of the NH3-Water system, its working, and thermodynamic aspects.
*   **C.P. Kothandaraman (New Age International., 2023) - Data book:** This will be essential for obtaining property data (enthalpy, concentration, etc.) for NH3-Water mixtures if you need to perform detailed calculations.

This concludes our study of the NH3-Water absorption refrigeration system. The principles discussed are fundamental to understanding how heat-driven refrigeration cycles work and their applicability in various scenarios.