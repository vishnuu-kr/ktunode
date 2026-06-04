---
title: "Cascade refrigeration system and Trans-critical refrigeration system (Numerical Problems to be limited to Refrigerants R134a, R32, R1234yf, R410A, R744, R718, R744)"
subject: "REFRIGERATION AND AIRCONDITIONING"
module: "Module 2: Thermodynamic analysis of vapour compression and vapour absorption refrigeration systems."
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463f68"
status: "completed"
scrapedAt: "2026-05-20T18:17:16.404Z"
---
Here are comprehensive study notes for the topic "Cascade Refrigeration System and Trans-critical Refrigeration System" within Module 2 of Refrigeration and Air Conditioning.

---

# Module 2: Thermodynamic Analysis of Vapour Compression and Vapour Absorption Refrigeration Systems

## Topic: Cascade Refrigeration System and Trans-critical Refrigeration System

### 1. Introduction to Cascade Refrigeration Systems

#### 1.1. Concept and Necessity

*   **Definition:** A cascade refrigeration system is a multi-stage refrigeration system where the evaporator of one refrigeration cycle acts as the condenser for a lower-temperature refrigeration cycle. This is achieved by connecting multiple vapour-compression refrigeration cycles in series.
*   **Necessity:** Standard single-stage vapour-compression systems become inefficient when large temperature differences need to be achieved. This is primarily due to:
    *   **High Compression Ratios:** Large pressure differences lead to high compression ratios, resulting in increased work of compression and reduced volumetric efficiency.
    *   **Low Suction Pressures:** For very low evaporating temperatures, the suction pressure becomes very low, leading to low refrigerant density and consequently a large compressor displacement volume required for a given cooling capacity.
    *   **Oil Dilution:** At very low temperatures, refrigerants can absorb significant amounts of lubricating oil, reducing the efficiency of the refrigeration cycle and potentially causing oil failure in the compressor.
    *   **Discharge Temperature:** High compression ratios can lead to excessively high discharge temperatures, potentially damaging the compressor.
*   **Purpose of Cascade Systems:** To achieve very low temperatures efficiently by breaking down the large temperature lift into smaller lifts handled by individual stages. Each stage operates within its optimal pressure and temperature ranges.

#### 1.2. Working Principle

*   A cascade system typically consists of two or more vapour-compression refrigeration cycles.
*   The **high-temperature (HT) stage** operates at higher evaporating and condensing pressures. Its evaporator absorbs heat from the environment or the medium to be cooled.
*   The **low-temperature (LT) stage** operates at lower evaporating and condensing pressures. Its evaporator absorbs heat at a much lower temperature.
*   The **condenser of the LT stage is coupled with the evaporator of the HT stage.** This means the heat rejected by the LT cycle is absorbed by the HT cycle.
*   The HT cycle rejects the combined heat (from its own cooling load and the LT cycle) to the ambient environment through its condenser.

#### 1.3. Common Configurations and Refrigerant Selection

*   **Two-Stage Cascade:** Most common, involving an HT and an LT system.
*   **Multi-Stage Cascade:** Three or more stages can be used for extremely low temperatures.
*   **Refrigerant Selection:**
    *   **Key Principle:** Refrigerants are chosen such that their operating temperature ranges are compatible with the cascade connection.
    *   **HT Stage:** Uses refrigerants with higher evaporating and condensing temperatures (e.g., R410A, R32, R134a).
    *   **LT Stage:** Uses refrigerants with lower evaporating and condensing temperatures (e.g., R410A, R32 for moderately low temps; R134a, R1234yf for lower temps; R717 (Ammonia), R744 (CO2) for very low temps).
    *   **Example (Commonly used):**
        *   HT Stage: R410A or R134a
        *   LT Stage: R410A, R134a, R1234yf, or R744 (CO2) for ultra-low temperatures.
    *   **R744 (CO2) Cascade:** A particularly important configuration for very low-temperature applications. It often uses a cascade with a more conventional refrigerant in the HT loop. CO2 operates in a trans-critical cycle in the HT loop when the ambient temperature is high, or a sub-critical cycle when ambient temperatures are low.

#### 1.4. Thermodynamic Analysis (Simplified)

*   Each stage can be analyzed as an independent vapour-compression cycle.
*   The **heat absorbed by the LT evaporator** ($Q_{evap, LT}$) is the cooling load of the system.
*   The **heat rejected by the LT condenser** ($Q_{cond, LT}$) is equal to the heat absorbed by the HT evaporator ($Q_{evap, HT}$).
*   The **heat rejected by the HT condenser** ($Q_{cond, HT}$) is the total heat rejected to the ambient, which is $Q_{cond, HT} = Q_{evap, HT} + Q_{comp, HT}$.
*   **COP:** The Coefficient of Performance (COP) of the entire cascade system is calculated as:
    $$COP_{cascade} = \frac{\text{Cooling Load}}{\text{Total Work of Compression}} = \frac{Q_{evap, LT}}{W_{comp, LT} + W_{comp, HT}}$$
*   The work of compression for each stage is determined using refrigerant property data (enthalpy values from tables or charts).

#### 1.5. Advantages and Disadvantages

*   **Advantages:**
    *   Achieves much lower temperatures efficiently compared to single-stage systems.
    *   Reduces compression ratios in each stage, leading to better compressor efficiency and lower discharge temperatures.
    *   Minimizes oil circulation issues at low temperatures.
    *   Increased COP for very low-temperature applications.
*   **Disadvantages:**
    *   More complex system with more components (two compressors, two condensers, two evaporators, additional piping, and controls).
    *   Higher initial cost.
    *   Requires careful refrigerant selection and matching between stages.

#### 1.6. Numerical Example (Conceptual - to be solved using property data)

**Problem:** A two-stage cascade refrigeration system uses R134a in the high-temperature (HT) loop and R744 (CO2) in the low-temperature (LT) loop.
*   **LT Loop:**
    *   Evaporating temperature ($T_{evap, LT}$) = -40°C
    *   Condensing temperature ($T_{cond, LT}$) = -10°C
    *   Isentropic compression from saturated vapor to saturated vapor.
*   **HT Loop:**
    *   Evaporating temperature ($T_{evap, HT}$) = -10°C (same as $T_{cond, LT}$)
    *   Condensing temperature ($T_{cond, HT}$) = 30°C
    *   Isentropic compression from saturated vapor to saturated vapor.

**Task:**
1.  Determine the COP of the LT loop.
2.  Determine the COP of the HT loop.
3.  Determine the overall COP of the cascade system, assuming a cooling load of 1 kW in the LT evaporator.

**Solution Approach (Requires Refrigerant Property Data):**

*   **LT Loop:**
    *   From R744 tables/charts at $T_{evap, LT}$ = -40°C: Determine $h_1$ (saturated vapor enthalpy), $s_1$ (saturated vapor entropy), and $P_{evap, LT}$.
    *   Calculate $h_2$ at $T_{cond, LT}$ = -10°C and $s_2 = s_1$ (isentropic compression).
    *   Calculate work of compression ($W_{comp, LT}$) = $h_2 - h_1$.
    *   Calculate heat absorbed ($Q_{evap, LT}$) = $h_1 - h_4$ (where $h_4$ is liquid enthalpy at $T_{evap, LT}$ and $P_{cond, LT}$).
    *   Calculate COP LT = $Q_{evap, LT} / W_{comp, LT}$.
*   **HT Loop:**
    *   Evaporator inlet condition: Saturated liquid at $T_{evap, HT}$ = -10°C. Determine $h_3$ (liquid enthalpy) from $P_{cond, LT}$.
    *   From R134a tables/charts at $T_{evap, HT}$ = -10°C: Determine $h_3$ (saturated liquid enthalpy) and $P_{evap, HT}$.
    *   From R134a tables/charts at $T_{cond, HT}$ = 30°C: Determine $h_4$ (saturated vapor enthalpy) and $s_4$ (saturated vapor entropy).
    *   Isentropic compression from saturated vapor at -10°C to $T_{cond, HT}$ = 30°C. This will involve finding $h_2'$ at 30°C with $s_2' = s_1'$.
    *   Calculate work of compression ($W_{comp, HT}$) = $h_2' - h_1'$.
    *   Calculate heat absorbed ($Q_{evap, HT}$) = $h_4 - h_3$. Note that $Q_{evap, HT}$ will be equal to $Q_{cond, LT}$ (calculated as $h_2 - h_1$).
    *   Calculate COP HT = $Q_{evap, HT} / W_{comp, HT}$.
*   **Overall COP:**
    *   Assume $Q_{evap, LT}$ = 1 kW.
    *   Calculate actual mass flow rate in LT loop: $\dot{m}_{LT} = Q_{evap, LT} / (h_1 - h_4)_{LT}$.
    *   Calculate actual work of compression in LT loop: $W_{comp, LT, actual} = \dot{m}_{LT} \times (h_2 - h_1)_{LT}$.
    *   The heat absorbed by the HT evaporator is $Q_{evap, HT} = \dot{m}_{LT} \times (h_2 - h_1)_{LT}$.
    *   Calculate actual mass flow rate in HT loop: $\dot{m}_{HT} = Q_{evap, HT} / (h_4 - h_3)_{HT}$.
    *   Calculate actual work of compression in HT loop: $W_{comp, HT, actual} = \dot{m}_{HT} \times (h_2' - h_1')_{HT}$.
    *   Total Work = $W_{comp, LT, actual} + W_{comp, HT, actual}$.
    *   Overall COP = $Q_{evap, LT} / (\text{Total Work})$.

---

### 2. Trans-critical Refrigeration Systems

#### 2.1. Concept and Necessity

*   **Definition:** A trans-critical refrigeration cycle is a thermodynamic cycle where the refrigerant operates above its critical temperature in the gas cooler (equivalent to the condenser in sub-critical cycles) and its pressure is above the critical pressure. There is no distinct phase change (boiling or condensation) in the trans-critical region; instead, it involves a continuous change of phase from a supercritical fluid to a liquid-like fluid.
*   **Necessity:**
    *   **Refrigerants with High Critical Temperatures:** For refrigerants with critical temperatures close to or below ambient temperatures, a conventional sub-critical vapour-compression cycle is not feasible or becomes very inefficient. R744 (CO2) is a prime example, with a critical temperature of 31.0°C.
    *   **Environmental Concerns:** Many natural refrigerants like CO2 are being favored due to their zero Ozone Depletion Potential (ODP) and very low Global Warming Potential (GWP). Trans-critical cycles are often necessary to utilize these environmentally friendly refrigerants.
    *   **Efficiency at High Ambient Temperatures:** Trans-critical cycles can offer good efficiency even at high ambient temperatures where conventional refrigerants would require very high condensing pressures.

#### 2.2. Working Principle (R744 - CO2 as an example)

The trans-critical cycle for CO2 (or any refrigerant above its critical temperature) typically involves the following states:

1.  **State 1 (Compressor Inlet):** Refrigerant enters the compressor as a low-pressure, low-temperature vapor.
2.  **State 2 (Compressor Outlet):** Refrigerant exits the compressor as a high-pressure, high-temperature vapor, well above the critical temperature.
3.  **State 3 (Gas Cooler Inlet):** Refrigerant enters the gas cooler (supercritical fluid) at high pressure and high temperature.
4.  **State 4 (Gas Cooler Outlet):** Refrigerant exits the gas cooler as a high-pressure, high-temperature fluid, cooled to a temperature above the critical temperature but below the compressor discharge temperature. There is no condensation, only cooling of the supercritical fluid.
5.  **State 5 (Expansion Valve Inlet):** Refrigerant passes through an expansion device (e.g., throttling valve, capillary tube, or more efficiently, an automatic expansion valve or electronic throttling valve). This causes a significant drop in pressure and temperature.
6.  **State 6 (Evaporator Inlet):** Refrigerant enters the evaporator as a low-pressure, low-temperature mixture of liquid and vapor.
7.  **State 7 (Evaporator Outlet):** Refrigerant exits the evaporator as a low-pressure, low-temperature saturated vapor. This is the refrigerant entering the compressor.

**Key Differences from Sub-critical Cycles:**

*   **Gas Cooler vs. Condenser:** In the trans-critical cycle, the heat rejection process occurs in the gas cooler. Since the refrigerant is above its critical temperature, it remains in a supercritical state and does not condense. Heat is rejected to a single phase fluid.
*   **Pressure-Temperature Relationship:** The relationship between pressure and temperature in the gas cooler is not constant, as it would be during condensation. The optimal gas cooler pressure depends on the ambient temperature to maximize COP.

#### 2.3. Thermodynamic Analysis

*   The cycle is analyzed using refrigerant property data, similar to sub-critical cycles, but using data for the trans-critical region.
*   **Work of Compression:** $W_{comp} = h_2 - h_1$ (enthalpy difference from compressor inlet to outlet).
*   **Heat Absorbed in Evaporator:** $Q_{evap} = h_7 - h_5$ (enthalpy difference from evaporator inlet to outlet). Note that $h_5$ is often taken as the liquid enthalpy at the evaporator pressure after throttling.
*   **Heat Rejected in Gas Cooler:** $Q_{gas cooler} = h_2 - h_4$ (enthalpy difference from gas cooler inlet to outlet).
*   **COP:** $COP = Q_{evap} / W_{comp}$

#### 2.4. Optimization of Trans-critical Cycles (R744)

*   **Gas Cooler Pressure Optimization:** Unlike sub-critical cycles where the condensing pressure is dictated by the condensing temperature, in a trans-critical cycle, the **pressure in the gas cooler can be varied.**
    *   **High Gas Cooler Pressure:** Leads to lower compressor work (due to lower pressure ratio) but requires a lower refrigerant temperature leaving the gas cooler, potentially reducing evaporator performance if it over-cools the refrigerant too much before expansion.
    *   **Low Gas Cooler Pressure:** Leads to higher compressor work (due to higher pressure ratio) but allows for higher refrigerant temperature leaving the gas cooler, potentially improving evaporator performance.
    *   **Optimization Goal:** To find the gas cooler pressure that maximizes the overall COP for a given ambient temperature and evaporating temperature. This usually involves finding the pressure that results in the refrigerant exiting the gas cooler at a temperature just above the desired evaporating temperature after expansion.
*   **Two-Stage Compression with Intercooling/Aftercooling:** For high cooling capacities or high ambient temperatures, two-stage compression with intercooling can significantly improve efficiency.
*   **Ejector-Enhanced Trans-critical Cycles:** Ejectors can be used to re-compress some of the flashed refrigerant from the expansion device, reducing the work of the main compressor and improving efficiency.

#### 2.5. Numerical Example (R744 Trans-critical Cycle)

**Problem:** A trans-critical refrigeration system using R744 (CO2) is operating with the following conditions:
*   Evaporator Temperature ($T_{evap}$) = -10°C
*   Gas Cooler Outlet Temperature ($T_{gc, out}$) = 35°C
*   Compressor Inlet: Saturated vapor at $T_{evap}$
*   Compressor: Isentropic compression
*   Expansion Device: Throttling

**Given Data (Approximations from R744 charts/tables):**

| State | Fluid State         | $T$ (°C) | $P$ (bar) | $h$ (kJ/kg) | $s$ (kJ/kg·K) |
| :---- | :------------------ | :------- | :-------- | :---------- | :------------ |
| 1     | Sat. Vapor          | -10      | 16.6      | 375         | 1.74          |
| 2     | Superheated Vapor   | 120      | 100       | 530         | 1.74          |
| 3     | Supercritical Fluid | 120      | 100       | 530         | 1.74          |
| 4     | Supercritical Fluid | 35       | 100       | 430         | 1.30          |
| 5     | Two-phase mixture   | 35       | 40        | 220         | 1.30          |
| 6     | Two-phase mixture   | -10      | 16.6      | 220         | 1.30          |

**Calculations:**

1.  **Work of Compression ($W_{comp}$):**
    $W_{comp} = h_2 - h_1 = 530 - 375 = 155 \text{ kJ/kg}$

2.  **Heat Rejected in Gas Cooler ($Q_{gc}$):**
    $Q_{gc} = h_2 - h_4 = 530 - 430 = 100 \text{ kJ/kg}$

3.  **Heat Absorbed in Evaporator ($Q_{evap}$):**
    Assuming the refrigerant entering the evaporator is the liquid phase enthalpy after throttling from state 4 (100 bar, 35°C) to the evaporator pressure (16.6 bar). From property data, the liquid enthalpy at 16.6 bar and -10°C is approximately $h_5 \approx 220 \text{ kJ/kg}$.
    $Q_{evap} = h_1 - h_5 = 375 - 220 = 155 \text{ kJ/kg}$ (Note: This is the change across the evaporator, $h_{sat.vap} - h_{liquid}$)

4.  **COP:**
    $COP = Q_{evap} / W_{comp} = 155 / 155 = 1.0$

**Analysis of the result:** A COP of 1.0 is generally low, indicating that the chosen gas cooler pressure (100 bar) might not be optimal for these conditions. To improve COP, one would typically try to find a gas cooler pressure that allows the refrigerant to exit the gas cooler at a lower temperature (while remaining supercritical) before expansion.

**Practice Question:**

In the above problem, if the gas cooler pressure is reduced to 70 bar, and assuming the refrigerant exits the gas cooler at 30°C with an enthalpy of 410 kJ/kg and entropy of 1.32 kJ/kg·K:

1.  Recalculate the work of compression ($W_{comp}$).
2.  Recalculate the heat rejected in the gas cooler ($Q_{gc}$).
3.  Recalculate the heat absorbed in the evaporator ($Q_{evap}$), assuming the throttling process leads to a liquid enthalpy of 220 kJ/kg at -10°C.
4.  Calculate the new COP.
5.  Comment on the effect of changing the gas cooler pressure on the COP.

**Answer:**

**Recalculating values with Gas Cooler Pressure = 70 bar:**

*   **State 1 (Compressor Inlet):** Remains the same. $h_1 = 375 \text{ kJ/kg}$, $s_1 = 1.74 \text{ kJ/kg·K}$, $P_1 = 16.6 \text{ bar}$, $T_1 = -10^\circ \text{C}$.
*   **State 2 (Compressor Outlet):** Isentropic compression from (1) to 70 bar. From R744 property data, at $s_2 = 1.74 \text{ kJ/kg·K}$ and $P_2 = 70 \text{ bar}$, $h_2 \approx 470 \text{ kJ/kg}$ and $T_2 \approx 65^\circ \text{C}$.
*   **State 4 (Gas Cooler Outlet):** Given $T_4 = 30^\circ \text{C}$, $P_4 = 70 \text{ bar}$, $h_4 = 410 \text{ kJ/kg}$.
*   **State 5 (Expansion Valve Inlet):** Throttling from state 4. $h_5 = h_4$ (if expansion device is perfect), but we are considering the liquid enthalpy after throttling to evaporator pressure (16.6 bar). As before, $h_5 \approx 220 \text{ kJ/kg}$ (liquid enthalpy at -10°C and 16.6 bar).

1.  **Work of Compression ($W_{comp}$):**
    $W_{comp} = h_2 - h_1 = 470 - 375 = 95 \text{ kJ/kg}$

2.  **Heat Rejected in Gas Cooler ($Q_{gc}$):**
    $Q_{gc} = h_2 - h_4 = 470 - 410 = 60 \text{ kJ/kg}$

3.  **Heat Absorbed in Evaporator ($Q_{evap}$):**
    $Q_{evap} = h_1 - h_5 = 375 - 220 = 155 \text{ kJ/kg}$

4.  **COP:**
    $COP = Q_{evap} / W_{comp} = 155 / 95 \approx 1.63$

5.  **Comment on the effect of changing the gas cooler pressure:**
    By reducing the gas cooler pressure from 100 bar to 70 bar, the COP of the system increased from 1.0 to approximately 1.63. This is because the work of compression significantly decreased (from 155 kJ/kg to 95 kJ/kg) due to a lower pressure ratio, while the cooling effect remained the same. This demonstrates that optimizing the gas cooler pressure is crucial for the efficient operation of trans-critical refrigeration systems, especially those using R744 (CO2). The lower gas cooler pressure allowed the refrigerant to exit at a higher temperature (30°C vs. 35°C), which after throttling, still resulted in the desired evaporation temperature and cooling capacity.

#### 2.6. Applications of Trans-critical Systems

*   **Automotive Air Conditioning:** R744 (CO2) is widely adopted for its environmental benefits and performance at high ambient temperatures.
*   **Commercial Refrigeration:** Supermarkets and retail stores are increasingly using CO2 for medium and low-temperature display cases.
*   **Industrial Refrigeration:** For applications requiring precise temperature control or operating at high ambient conditions.
*   **Heat Pumps:** Trans-critical CO2 systems are also employed in high-efficiency heat pumps for space heating.

#### 2.7. Advantages and Disadvantages

*   **Advantages:**
    *   Environmentally friendly refrigerants (zero ODP, low GWP).
    *   Good efficiency at high ambient temperatures.
    *   Lower operating pressures for compressors compared to some high-GWP refrigerants, potentially leading to smaller compressor sizes.
    *   Non-flammable and non-toxic (for CO2).
    *   Efficient heat transfer properties.
*   **Disadvantages:**
    *   Operates above critical point, requiring specialized components (gas cooler instead of condenser).
    *   Requires precise control of gas cooler pressure for optimal performance.
    *   Higher operating pressures at the compressor discharge than conventional systems (for CO2, this can reach 70-100 bar or more).
    *   Specialized knowledge and safety measures are needed for handling high pressures.
    *   Can be less efficient than conventional systems at very low ambient temperatures unless designed carefully or with a cascade system.

---

### 3. Relevant Refrigerants and Their Properties

The following refrigerants are relevant to this topic and are mentioned in the problem context. It is crucial to have access to their thermodynamic property tables or charts for numerical analysis.

*   **R134a (Tetrafluoroethane):** A common HFC refrigerant, used in automotive AC and medium-temperature refrigeration. Critical Temperature = 101.1°C, Critical Pressure = 40.7 bar.
*   **R32 (Difluoromethane):** An HFC refrigerant, used in air conditioning systems due to its good efficiency and lower GWP compared to R410A. Slightly flammable. Critical Temperature = 78.1°C, Critical Pressure = 57.7 bar.
*   **R1234yf (2,3,3,3-Tetrafluoropropene):** A HFO refrigerant, adopted as a lower-GWP replacement for R134a in automotive AC. Very low GWP, slightly flammable. Critical Temperature = 94.9°C, Critical Pressure = 33.7 bar.
*   **R410A (a blend of R32 and R125):** A widely used HFC refrigerant for residential and commercial AC. Higher operating pressures than R22. Critical Temperature = 71.3°C, Critical Pressure = 49.3 bar.
*   **R744 (CO2 - Carbon Dioxide):** A natural refrigerant. Zero ODP, very low GWP (1). Operates trans-critically at typical ambient temperatures due to its low critical temperature. Critical Temperature = 31.0°C, Critical Pressure = 73.8 bar.
*   **R718 (Water - H2O):** Used in absorption refrigeration cycles or large centrifugal chillers for high-temperature applications (evaporating temperatures > 0°C). Critical Temperature = 374°C, Critical Pressure = 221.2 bar. (Less relevant for cascade or trans-critical *compression* systems in the context of typical low-temperature applications but listed).

---

### 4. Important Points to Remember

*   **Cascade Systems:** Used to achieve very low temperatures efficiently by splitting the temperature lift into multiple stages, each handling a smaller lift. Rejection heat from the LT stage is absorbed by the HT stage.
*   **Trans-critical Systems:** Necessary for refrigerants with critical temperatures close to or below ambient temperatures (e.g., R744/CO2). The heat rejection occurs in a gas cooler where the refrigerant remains in a supercritical state.
*   **Refrigerant Selection:** Crucial for both systems. For cascade, match temperature ranges. For trans-critical, consider critical properties relative to ambient.
*   **COP Calculation:** Always calculate based on the actual cooling load and total work input.
*   **R744 (CO2) Trans-critical Optimization:** The gas cooler pressure is a critical parameter to optimize for COP. Lowering it often reduces compressor work but needs careful consideration of exiting gas cooler temperature.
*   **Property Data:** Accurate thermodynamic property data (enthalpy, entropy) from tables or charts is essential for all calculations.
*   **Knowledge Level Alignment:**
    *   CO1: Understanding the need for these systems to achieve low temperatures and improve performance.
    *   CO3: Performing thermodynamic analysis (calculating work, heat transfer, COP) for both systems.
    *   CO4: Understanding the refrigerant selection rationale for these advanced systems.

---

### 5. Practice Questions

**Question 1 (Cascade System):**
A two-stage cascade refrigeration system uses R134a in the high-temperature loop and R1234yf in the low-temperature loop to achieve an evaporating temperature of -30°C.
*   **LT Loop (R1234yf):** Evaporates at -30°C, Condenses at -5°C.
*   **HT Loop (R134a):** Evaporates at -5°C, Condenses at 40°C.
Assume isentropic compression and saturated vapor at evaporator inlets.
(a) Calculate the COP of the LT loop.
(b) Calculate the COP of the HT loop.
(c) If the cooling load in the LT evaporator is 5 kW, calculate the total power required for the cascade system and the overall COP.
*(Note: You will need R1234yf and R134a property data for this question. Approximate values can be found from charts.)*

**Question 2 (Trans-critical System - R744):**
A trans-critical refrigeration system using R744 (CO2) is designed for automotive air conditioning.
*   Evaporator Temperature ($T_{evap}$) = 5°C
*   Ambient Temperature = 40°C
*   The system operates with a gas cooler pressure of 90 bar.
Assume:
*   Compressor inlet is saturated vapor at 5°C (P_evap = 33.5 bar, h1=376 kJ/kg, s1=1.72 kJ/kg.K)
*   Compressor discharge is isentropic. At 90 bar and s=1.72 kJ/kg.K, h2=510 kJ/kg, T2=90°C.
*   Gas cooler outlet is at 90 bar, 55°C (h4=445 kJ/kg).
*   Expansion valve reduces pressure to evaporator pressure, and liquid enthalpy at evaporator inlet is 230 kJ/kg (h5=230 kJ/kg).

Calculate:
(a) The work of compression per kg of refrigerant.
(b) The heat rejected in the gas cooler per kg of refrigerant.
(c) The cooling capacity per kg of refrigerant.
(d) The COP of the system.

**Question 3 (Comparison):**
Discuss the typical operating temperature ranges where cascade refrigeration systems are preferred over single-stage systems, and where trans-critical systems are necessary.

---

**Answers to Practice Questions:**

**Answer 1:**
*(Note: These answers are calculated using approximate values from typical R1234yf and R134a charts. Actual values may vary slightly based on the specific data source.)*

**LT Loop (R1234yf):**
*   $T_{evap, LT}$ = -30°C, $P_{evap, LT}$ = 1.04 bar
*   $T_{cond, LT}$ = -5°C, $P_{cond, LT}$ = 2.66 bar
*   State 1 (Sat. Vapor at -30°C): $h_1 = 390 \text{ kJ/kg}$, $s_1 = 1.84 \text{ kJ/kg·K}$
*   State 2 (Isentropic to -5°C): $s_2 = 1.84 \text{ kJ/kg·K}$, $P_2 = 2.66 \text{ bar} \implies h_2 = 422 \text{ kJ/kg}$
*   State 4 (Liquid at -30°C, 2.66 bar): $h_4 = 110 \text{ kJ/kg}$
*   $W_{comp, LT} = h_2 - h_1 = 422 - 390 = 32 \text{ kJ/kg}$
*   $Q_{evap, LT} = h_1 - h_4 = 390 - 110 = 280 \text{ kJ/kg}$
*   **(a) COP_LT = $Q_{evap, LT} / W_{comp, LT} = 280 / 32 \approx 8.75$**

**HT Loop (R134a):**
*   $T_{evap, HT}$ = -5°C, $P_{evap, HT}$ = 2.66 bar (from LT condenser pressure)
*   $T_{cond, HT}$ = 40°C, $P_{cond, HT}$ = 10.17 bar
*   State 3 (Liquid at -5°C, 2.66 bar): $h_3 = 250 \text{ kJ/kg}$
*   State 4' (Sat. Vapor at -5°C): $h_{4'} = 404 \text{ kJ/kg}$, $s_{4'} = 1.77 \text{ kJ/kg·K}$
*   State 5' (Isentropic to 40°C): $s_5' = 1.77 \text{ kJ/kg·K}$, $P_5' = 10.17 \text{ bar} \implies h_5' = 440 \text{ kJ/kg}$
*   State 6' (Liquid at 40°C, 10.17 bar): $h_6' = 275 \text{ kJ/kg}$
*   $W_{comp, HT} = h_5' - h_{4'} = 440 - 404 = 36 \text{ kJ/kg}$
*   $Q_{evap, HT} = h_{4'} - h_3 = 404 - 250 = 154 \text{ kJ/kg}$
*   **(b) COP_HT = $Q_{evap, HT} / W_{comp, HT} = 154 / 36 \approx 4.28$**

**(c) Overall System:**
*   Cooling Load = 5 kW (in LT evaporator)
*   Mass flow rate in LT loop ($\dot{m}_{LT}$) = Cooling Load / $Q_{evap, LT}$ = 5 kW / 280 kJ/kg = 0.01786 kg/s
*   Work of LT compressor = $\dot{m}_{LT} \times W_{comp, LT}$ = 0.01786 kg/s $\times$ 32 kJ/kg = 0.5715 kW
*   Heat absorbed by HT evaporator = Heat rejected by LT condenser = $\dot{m}_{LT} \times W_{comp, LT} = 0.5715$ kW (This is the heat rejected by LT stage).
*   Mass flow rate in HT loop ($\dot{m}_{HT}$) = $Q_{evap, HT} / (h_{4'} - h_3)_{HT}$? No, mass flow rate in HT loop is related to the heat it absorbs, which is the heat rejected by the LT loop.
    *   Heat rejected by LT condenser = $Q_{evap, LT} + W_{comp, LT} = 280 + 32 = 312 \text{ kJ/kg}_{LT}$
    *   This heat is absorbed by the HT evaporator.
    *   $\dot{m}_{HT}$ absorbs $Q_{evap, HT} = \dot{m}_{LT} \times (\text{Heat rejected by LT condenser})$. This logic is incorrect.
    *   **Correct logic:** Heat absorbed by HT evaporator is the heat rejected by LT condenser. Heat rejected by LT condenser = $Q_{evap, LT} + W_{comp, LT}$. The mass flow rate $\dot{m}_{LT}$ flows through the LT cycle. The HT cycle must absorb the heat rejected by the LT condenser.
    *   Heat rejected by LT condenser = $\dot{m}_{LT} \times (h_2 - h_4)_{LT} = 0.01786 \times (422-110) = 0.01786 \times 312 = 5.572$ kW.
    *   So, $Q_{evap, HT}$ for the HT loop is 5.572 kW.
    *   Mass flow rate in HT loop ($\dot{m}_{HT}$) = $Q_{evap, HT} / (h_{4'} - h_3)_{HT} = 5.572 \text{ kW} / 154 \text{ kJ/kg} = 0.03618 \text{ kg/s}$.
    *   Work of HT compressor = $\dot{m}_{HT} \times W_{comp, HT} = 0.03618 \text{ kg/s} \times 36 \text{ kJ/kg} = 1.302 \text{ kW}$.
*   **Total Power Required** = Work of LT compressor + Work of HT compressor = 0.5715 kW + 1.302 kW = **1.8735 kW**.
*   **(c) Overall COP** = Cooling Load / Total Power = 5 kW / 1.8735 kW $\approx$ **2.67**.

**Answer 2:**
**(a) Work of compression per kg ($W_{comp}$):**
$W_{comp} = h_2 - h_1 = 510 - 376 = 134 \text{ kJ/kg}$

**(b) Heat rejected in gas cooler per kg ($Q_{gc}$):**
$Q_{gc} = h_2 - h_4 = 510 - 445 = 65 \text{ kJ/kg}$

**(c) Cooling capacity per kg ($Q_{evap}$):**
$Q_{evap} = h_1 - h_5 = 376 - 230 = 146 \text{ kJ/kg}$

**(d) COP of the system:**
$COP = Q_{evap} / W_{comp} = 146 / 134 \approx 1.09$

**Answer 3:**
*   **Cascade Refrigeration Systems:** Are preferred when the required evaporating temperature is very low, typically below -40°C to -50°C. Single-stage systems become inefficient due to very low suction pressures, high compression ratios, and potential oil-return issues. Cascade systems break down the large temperature lift into smaller, more manageable lifts for each stage, improving overall efficiency and reliability at extremely low temperatures. Examples include deep freezing, scientific research, and specialty industrial processes.
*   **Trans-critical Refrigeration Systems (e.g., R744/CO2):** Are necessary when the refrigerant's critical temperature is at or below the ambient temperature. For R744, this is true for most ambient conditions (critical temperature = 31.0°C). In such cases, a conventional condenser cannot function as there is no phase change (condensation) above the critical temperature. Trans-critical cycles are essential for using environmentally friendly refrigerants like CO2 in applications such as automotive air conditioning, commercial refrigeration, and heat pumps, especially in warmer climates. They offer advantages in terms of GWP and ODP, and can be efficient at high ambient temperatures with proper design and optimization of the gas cooler pressure.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
