---
title: "actual vapour compression refrigeration system."
subject: "REFRIGERATION AND AIRCONDITIONING"
module: "Module 2: Thermodynamic analysis of vapour compression and vapour absorption refrigeration systems."
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463f66"
status: "completed"
scrapedAt: "2026-05-20T18:17:14.953Z"
---
# Module 2: Thermodynamic Analysis of Vapour Compression and Vapour Absorption Refrigeration Systems

## Topic: Actual Vapour Compression Refrigeration System

This module delves into the thermodynamic analysis of refrigeration systems. Specifically, this topic focuses on the **actual vapour compression refrigeration (VCR) system**, contrasting it with the ideal cycle and analyzing the deviations and their impact on performance.

---

### **1. Learning Outcomes Covered:**

*   **CO1: Define and describe the basic concepts and applications of refrigeration and air conditioning and analyse performance of ideal refrigeration cycles.** (K2, K4) - While this topic focuses on the *actual* system, understanding the ideal cycle is foundational for appreciating the deviations in the actual system. We will implicitly refer to the ideal cycle to highlight these differences.
*   **CO3: Perform Thermodynamic Analysis of Vapour Compression and Absorption Systems.** (K3, K4) - This is the core learning outcome addressed. We will analyze the energy transfers and efficiencies of the actual VCR system.
*   **CO4: Explain and Select Appropriate Refrigerants and System Components.** (K2, K3) - Understanding the actual system allows for better selection of components and consideration of refrigerant properties in real-world scenarios.

---

### **2. Introduction to the Actual Vapour Compression Refrigeration System**

The actual VCR system is the practical implementation of the theoretical vapour compression cycle. While the ideal cycle provides a theoretical baseline for analysis and comparison, real-world components and processes introduce inefficiencies and deviations. These deviations lead to a reduced Coefficient of Performance (COP) compared to the ideal cycle.

---

### **3. Components of a VCR System**

The fundamental components remain the same as the ideal cycle, but their operation in practice is less than perfect:

*   **Compressor:** Compresses the low-pressure, low-temperature refrigerant vapour to a high-pressure, high-temperature vapour.
*   **Condenser:** Rejects heat from the high-pressure, high-temperature refrigerant vapour, causing it to condense into a high-pressure liquid.
*   **Expansion Valve (or Throttling Device):** Reduces the pressure and temperature of the high-pressure liquid refrigerant.
*   **Evaporator:** Absorbs heat from the refrigerated space, causing the low-pressure liquid refrigerant to vaporize into a low-pressure, low-temperature vapour.

---

### **4. Deviations from the Ideal Vapour Compression Cycle**

The actual VCR cycle deviates from the ideal cycle due to several factors, leading to increased work input and/or reduced cooling effect. These deviations are analyzed by examining the state points on a **T-s (Temperature-Entropy) diagram**.

**Key Deviations:**

*   **Incomplete Compression (or Adiabatic Compression in Practice):**
    *   **Ideal:** Isentropic compression (s = constant).
    *   **Actual:** Compression is not perfectly isentropic due to irreversibilities (friction, heat transfer to surroundings). The specific entropy ($s$) increases during compression. This means the outlet vapour from the compressor is at a higher temperature and potentially a slightly higher pressure than in the ideal case for the same work input, or requires more work input to reach the same discharge pressure.
    *   **Analysis:** The compressor work input is higher.

*   **Incomplete Condensation:**
    *   **Ideal:** Isothermal condensation (T = constant) and terminates at saturated liquid.
    *   **Actual:** Condensation may not be complete. The refrigerant may leave the condenser as a **wet vapour** (mixture of liquid and vapour) or **superheated vapour** if the heat rejection is insufficient.
    *   **Analysis:** If the refrigerant leaves as wet vapour, the mass flow rate through the system is reduced (as only the liquid portion contributes to refrigeration), leading to a lower cooling capacity. If it leaves as superheated vapour, the refrigeration effect is reduced because some of the vapour will not condense in the evaporator.

*   **Throttling (Irreversible Process):**
    *   **Ideal:** Isenthalpic expansion (h = constant). This is an irreversible process in reality as well, but in ideal analysis, it's assumed to be an isenthalpic process across the expansion valve.
    *   **Actual:** The expansion valve is a throttling device, which is an irreversible process. The enthalpy remains constant ($h$ = constant) during throttling. However, the outlet is often a **wet mixture**.
    *   **Analysis:** The throttling process itself does not consume work but leads to a lower average temperature in the evaporator for a given pressure drop, and a significant portion of the refrigerant remains as liquid, which does not contribute to cooling.

*   **Incomplete Evaporation (or Superheating in Evaporator):**
    *   **Ideal:** Isothermal evaporation (T = constant) and terminates at saturated vapour.
    *   **Actual:** Evaporation may not be complete, leaving the evaporator as **wet vapour**. Alternatively, the refrigerant may absorb heat beyond the saturation point, becoming **superheated vapour**.
    *   **Analysis:**
        *   **Wet Vapour at Evaporator Outlet:** This is a significant deviation. Only the liquid portion of the refrigerant will vaporize and absorb heat. The mass flow rate through the compressor is effectively reduced, leading to a lower cooling capacity. This is undesirable as it reduces the system's efficiency.
        *   **Superheated Vapour at Evaporator Outlet:** This is generally beneficial in actual systems. It ensures that no liquid refrigerant enters the compressor, preventing **liquid slugging**, which can damage the compressor. The superheating adds a small amount of heat to the refrigerant, slightly reducing the refrigeration effect per unit mass, but this is a necessary precaution.

*   **Pressure Drops:**
    *   **Actual:** There are pressure drops in the suction and discharge lines of the compressor, and in the condenser and evaporator due to friction and flow resistances.
    *   **Analysis:** Pressure drops in the suction line lead to reduced suction pressure at the compressor inlet, increasing the compression ratio and work input. Pressure drops in the discharge line increase the discharge pressure required, also increasing work input. Pressure drops in the condenser and evaporator reduce the heat transfer effectiveness.

*   **Heat Transfer to Surroundings:**
    *   **Actual:** Refrigerant lines and the compressor itself are exposed to the surroundings and can lose or gain heat.
    *   **Analysis:** Heat loss from the suction line reduces the cooling capacity. Heat gain by the compressor increases the discharge temperature and work input.

---

### **5. Thermodynamic Analysis of Actual Cycle States**

Let's consider the state points on a T-s diagram for a typical actual VCR system:

*   **State 1: Suction (Compressor Inlet)**
    *   **Actual:** Low-pressure, low-temperature **superheated vapour**. Due to pressure drop in the suction line, the pressure is lower than the evaporator pressure. Due to heat gain from surroundings, the temperature might be slightly higher than the evaporator outlet temperature.
    *   **Ideal:** Saturated vapour at evaporator pressure and temperature.

*   **State 2: Discharge (Compressor Outlet)**
    *   **Actual:** High-pressure, high-temperature **superheated vapour**. The compression is not isentropic ($s_2 > s_1$). The discharge pressure is higher than the ideal due to discharge line pressure drop.
    *   **Ideal:** Superheated vapour, but with isentropic compression ($s_2 = s_1$).

*   **State 3: Condenser Outlet**
    *   **Actual:** High-pressure liquid, possibly with some vapour content if condensation is incomplete. Usually close to saturated liquid if properly designed.
    *   **Ideal:** Saturated liquid at condenser pressure.

*   **State 4: Expansion Valve Outlet (Evaporator Inlet)**
    *   **Actual:** Low-pressure **wet mixture**. The enthalpy is the same as state 3.
    *   **Ideal:** Low-pressure **wet mixture**, with the same enthalpy as state 3 (isenthalpic expansion).

*   **State 5: Evaporator Outlet (Compressor Inlet)**
    *   **Actual:** Low-pressure **superheated vapour** (desirable) or **wet mixture** (undesirable). Due to pressure drop in the suction line, the pressure is lower than the evaporator pressure.
    *   **Ideal:** Saturated vapour at evaporator pressure.

**[Visual Representation: A T-s diagram would be crucial here, showing the deviation of actual states from the ideal cycle states. The actual compression curve will be steeper and move to the right of the isentropic line. The actual condensation and evaporation lines will not be perfectly horizontal.]**

---

### **6. Performance Analysis of the Actual VCR System**

The performance of the actual VCR system is evaluated using the following parameters:

*   **Cooling Capacity (Actual):**
    *   $Q_{evap, actual} = \dot{m}_{actual} \times (h_5 - h_4)$
    *   Where $\dot{m}_{actual}$ is the actual mass flow rate of the refrigerant.
    *   If the evaporator outlet (State 5) is superheated, $h_5$ will be higher than that of saturated vapor.
    *   If the evaporator outlet is wet, the refrigeration effect is reduced, and the analysis becomes more complex.

*   **Compressor Work Input (Actual):**
    *   $W_{compressor, actual} = \dot{m}_{actual} \times (h_2 - h_1)$
    *   The specific enthalpy values ($h_1$, $h_2$) are obtained from refrigerant property tables or charts for the actual state points.

*   **Actual Coefficient of Performance (COP):**
    *   $COP_{actual} = \frac{Q_{evap, actual}}{W_{compressor, actual}} = \frac{\dot{m}_{actual} \times (h_5 - h_4)}{\dot{m}_{actual} \times (h_2 - h_1)} = \frac{h_5 - h_4}{h_2 - h_1}$
    *   Note that $\dot{m}_{actual}$ cancels out in the COP calculation if we consider specific enthalpies.

*   **Volumetric Efficiency of the Compressor:**
    *   This is a crucial parameter for compressors. It is the ratio of the actual volume of refrigerant drawn into the compressor per unit time to the swept volume of the compressor per unit time.
    *   $\eta_v = \frac{\text{Actual volume of refrigerant drawn in}}{\text{Swept volume of compressor}} = \frac{\dot{m}_{actual} v_1}{V_s}$
    *   Where $v_1$ is the specific volume of the refrigerant at the compressor inlet (State 1) and $V_s$ is the swept volume of the compressor.
    *   Volumetric efficiency is affected by clearance volume in the cylinder, pressure drop in the suction line, and superheating of the refrigerant.

*   **Isentropic Efficiency of the Compressor:**
    *   This measures how close the actual compression process is to an ideal isentropic compression.
    *   $\eta_{isentropic, compressor} = \frac{\text{Isentropic work input}}{\text{Actual work input}} = \frac{h_{2s} - h_1}{h_2 - h_1}$
    *   Where $h_{2s}$ is the specific enthalpy at the end of isentropic compression from State 1 to the discharge pressure.

---

### **7. Impact of Deviations on COP**

*   **Increased Compressor Work:** Incomplete compression (non-isentropic) and pressure drops lead to higher work input for the same cooling capacity, reducing COP.
*   **Reduced Refrigeration Effect:** Incomplete condensation or evaporation, and pressure drops in the evaporator, reduce the net heat absorbed, lowering COP.
*   **Liquid Refrigerant in Compressor (Undesirable):** If the evaporator outlet is not sufficiently superheated, liquid refrigerant can enter the compressor, leading to valve damage and potential catastrophic failure (liquid slugging).

---

### **8. Refrigerants and Component Selection in Actual Systems**

*   **Refrigerant Properties:** The choice of refrigerant is critical. Properties like operating pressures, critical temperature, latent heat, specific heat, and environmental impact (ODP, GWP) are considered. For example, refrigerants with lower latent heat require higher mass flow rates for the same cooling capacity.
*   **Compressor Design:** Compressors are designed to handle specific pressure ratios and refrigerant types. The isentropic efficiency of the compressor is a key factor in system performance.
*   **Condenser and Evaporator Sizing:** These are sized to achieve near-complete condensation and evaporation, while minimizing pressure drops. The heat transfer surface area and the flow rates of refrigerant and coolant (air or water) are crucial.
*   **Expansion Device:** Thermostatic expansion valves (TEVs) are commonly used to control the flow of refrigerant into the evaporator, ensuring proper superheating at the evaporator outlet.
*   **Heat Exchanger Effectiveness:** The effectiveness of heat exchangers (condenser and evaporator) directly impacts the system's COP.

---

### **9. Example Calculation**

**Problem:** A VCR system uses R134a. Refrigerant enters the compressor at 1.5 bar and 15°C. It leaves the compressor at 8 bar and 60°C. The refrigerant leaves the condenser as a saturated liquid at 8 bar and enters the evaporator as a wet mixture at 1.5 bar. At the evaporator outlet, the refrigerant is superheated vapour at 1.5 bar and 20°C. Calculate the actual COP of the system.

**Solution Steps:**

1.  **Determine State Points:**
    *   **State 1 (Compressor Inlet):** P1 = 1.5 bar, T1 = 15°C (Superheated Vapour).
    *   **State 2 (Compressor Outlet):** P2 = 8 bar, T2 = 60°C (Superheated Vapour).
    *   **State 3 (Condenser Outlet):** P3 = 8 bar (Saturated Liquid).
    *   **State 4 (Evaporator Inlet):** P4 = 1.5 bar (Wet Mixture, h4 = h3).
    *   **State 5 (Evaporator Outlet):** P5 = 1.5 bar, T5 = 20°C (Superheated Vapour).

2.  **Obtain Enthalpy Values from R134a Tables/Charts (C P Kothandaraman Data Book):**
    *   From tables for R134a at P1 = 1.5 bar and T1 = 15°C, find $h_1$. (Approx. $h_1 \approx 415$ kJ/kg)
    *   From tables for R134a at P2 = 8 bar and T2 = 60°C, find $h_2$. (Approx. $h_2 \approx 465$ kJ/kg)
    *   From tables for R134a at P3 = 8 bar (Saturated Liquid), find $h_3$. (Approx. $h_3 \approx 260$ kJ/kg)
    *   Since throttling is isenthalpic, $h_4 = h_3 \approx 260$ kJ/kg.
    *   From tables for R134a at P5 = 1.5 bar and T5 = 20°C, find $h_5$. (Approx. $h_5 \approx 430$ kJ/kg)

3.  **Calculate Actual Refrigeration Effect per kg of refrigerant:**
    *   $q_{evap, actual} = h_5 - h_4 = 430 - 260 = 170$ kJ/kg

4.  **Calculate Actual Compressor Work per kg of refrigerant:**
    *   $w_{compressor, actual} = h_2 - h_1 = 465 - 415 = 50$ kJ/kg

5.  **Calculate Actual COP:**
    *   $COP_{actual} = \frac{q_{evap, actual}}{w_{compressor, actual}} = \frac{170}{50} = 3.4$

**Important Note:** The actual enthalpy values can vary slightly depending on the specific data source used. The above are illustrative values.

---

### **10. Practice Questions and Exercises**

**Question 1:**
List and briefly explain the major deviations of an actual vapour compression refrigeration system from its ideal counterpart. How do these deviations affect the system's performance?
*(Answers: Incomplete compression, incomplete condensation, pressure drops, heat transfer to surroundings, incomplete evaporation. These generally increase work input and/or reduce cooling effect, leading to lower COP.)*

**Question 2:**
Define volumetric efficiency and isentropic efficiency of a compressor. Why are these parameters important in analyzing an actual VCR system?
*(Answers: Volumetric efficiency relates actual gas intake to swept volume. Isentropic efficiency measures compressor efficiency against ideal isentropic compression. Both are crucial for calculating actual work input and system COP.)*

**Question 3:**
A VCR system using Freon-12 operates with the following conditions:
Evaporator pressure = 1.5 bar
Condenser pressure = 8 bar
Refrigerant leaves the evaporator as saturated vapour.
Refrigerant leaves the compressor as superheated vapour at 40°C above saturation temperature at 8 bar.
Refrigerant leaves the condenser as saturated liquid.
Refrigerant enters the expansion valve as saturated liquid and leaves as a mixture of liquid and vapour.
Calculate the actual COP of the system. (Assume saturation temperatures from tables for Freon-12).

*(Hint: You will need to look up Freon-12 (R-12) property tables.
Evaporator pressure = 1.5 bar => Saturation Temperature $T_{evap} \approx -12.7^\circ C$.
Condenser pressure = 8 bar => Saturation Temperature $T_{cond} \approx 30.2^\circ C$.
State 1: Saturated vapour at 1.5 bar (P1=1.5 bar, T1=-12.7°C). Find h1.
State 2: Superheated vapour at 8 bar, T2 = 30.2 + 40 = 70.2°C. Find h2.
State 3: Saturated liquid at 8 bar. Find h3.
State 4: h4 = h3.
COP = (h1 - h4) / (h2 - h1) )*

**Answer for Question 3:**
*(Assuming Freon-12 data from a typical table):*
*   At 1.5 bar, T_sat ≈ -12.7°C.
    *   State 1: Saturated vapour at 1.5 bar, $h_1 \approx 182.3$ kJ/kg.
*   At 8 bar, T_sat ≈ 30.2°C.
    *   State 3: Saturated liquid at 8 bar, $h_3 \approx 68.4$ kJ/kg.
*   State 2: Superheated vapour at 8 bar, $T_2 = 30.2^\circ C + 40^\circ C = 70.2^\circ C$.
    *   From tables, at 8 bar and 70.2°C, $h_2 \approx 218.6$ kJ/kg.
*   State 4: $h_4 = h_3 = 68.4$ kJ/kg.

*   Actual Refrigeration Effect per kg: $q_{evap, actual} = h_1 - h_4 = 182.3 - 68.4 = 113.9$ kJ/kg.
*   Actual Compressor Work per kg: $w_{compressor, actual} = h_2 - h_1 = 218.6 - 182.3 = 36.3$ kJ/kg.
*   Actual COP = $q_{evap, actual} / w_{compressor, actual} = 113.9 / 36.3 \approx 3.14$

---

### **11. Important Points to Remember**

*   The actual VCR system always has a lower COP than the ideal cycle due to irreversibilities and non-ideal processes.
*   Superheating at the evaporator outlet is generally desirable to protect the compressor from liquid slugging.
*   Wet vapour at the evaporator outlet significantly reduces cooling capacity.
*   Pressure drops in the refrigerant lines are a significant source of inefficiency.
*   Compressor efficiencies (volumetric and isentropic) are critical for accurate performance analysis.
*   Refrigerant property tables and charts are essential for performing thermodynamic analysis of actual systems.
*   Understanding these deviations is crucial for proper system design, component selection, and performance optimization.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### **12. Textbook References Incorporated:**

*   **Arora C.P. (2021):** Provides detailed analysis of actual cycles, including T-s diagrams and discussion of various irreversibilities. Chapter on Vapour Compression Refrigeration would be highly relevant.
*   **Ramesh Cahndra Arora (2015):** Similar to C.P. Arora, this book offers comprehensive thermodynamic analysis of practical refrigeration systems.
*   **Arora S. C. and S. Domkundwar (2018):** Likely contains worked examples and explanations of deviations in actual VCR systems.
*   **Ahamadul Ameen (2020):** Focuses on the engineering aspects of VCR systems, including how actual conditions influence design and performance.
*   **W P Jones (2001):** Offers insights into the practical engineering considerations of air conditioning systems, which heavily rely on VCR principles and actual system performance.
*   **C P Kothandaraman (2023):** The data book is indispensable for obtaining accurate thermodynamic properties of refrigerants at various states, which are essential for calculating actual cycle performance.
*   **P NAnanthanarayanan (2013):** Provides fundamental understanding and practical applications of refrigeration systems, likely covering actual cycle analysis.
*   **Stoecker & Jons (2nd ed):** A classic reference that details the thermodynamic analysis of refrigeration cycles, including the impact of real-world conditions.

---

This concludes the study notes for the actual vapour compression refrigeration system. Remember to consult the referenced textbooks for further details and specific property data.