---
title: "Heat Balance test on petrol/Diesel engines"
subject: "THERMAL ENGINEERING LAB-2"
module: "Module 4: Heat Balance test on petrol/Diesel engines"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463c53"
status: "completed"
scrapedAt: "2026-05-20T18:09:13.673Z"
---
# Thermal Engineering Lab-2: Heat Balance Test on Petrol/Diesel Engines

## Module 4: Heat Balance Test on Petrol/Diesel Engines

### Introduction

The Heat Balance Test on petrol/diesel engines is a fundamental experiment conducted in Thermal Engineering labs. Its primary purpose is to account for the distribution of energy input from the fuel into various forms of useful work and losses within the engine. This analysis helps understand engine efficiency and identify areas for improvement. This module aligns with **CO2: Analyse the performance characteristics of internal combustion engines** by providing practical insights into how energy is utilized and lost, contributing to the overall performance assessment of an engine.

### 1. Learning Outcomes Covered

This study guide will help you achieve the following learning outcomes:

*   **Understand the principle of energy conservation as applied to internal combustion engines.** (Relates to CO2)
*   **Identify and quantify different energy components in a heat balance.** (Relates to CO2)
*   **Calculate the thermal efficiency of the engine.** (Relates to CO2)
*   **Interpret the results of a heat balance test to assess engine performance and identify major losses.** (Relates to CO2)
*   **Relate the heat balance components to the various systems and subsystems of petrol and diesel engines.** (Relates to CO1 and CO2)

### 2. Key Concepts and Definitions

**Heat Balance Test:** An experimental procedure to determine the distribution of the total heat supplied by the fuel into useful work output and various heat losses.

**Energy Conservation Principle:** The total energy input to the system equals the sum of useful work output and all energy losses.

**Indicated Power (IP):** The theoretical power developed within the cylinder due to combustion.
*   **Formula:** $IP = \frac{P_i \times L \times A \times n \times N}{60 \times 1000} \text{ kW}$ (for a 4-stroke engine)
    *   $P_i$: Indicated mean effective pressure (bar or Pa)
    *   $L$: Stroke length (m)
    *   $A$: Piston area ($\text{m}^2$)
    *   $n$: Number of power strokes per minute (N/2 for 4-stroke)
    *   $N$: Engine speed (rpm)

**Brake Power (BP):** The actual power delivered by the crankshaft, measured at the flywheel. This is the useful output power.
*   **Formula:** $BP = \frac{2 \pi N T}{60 \times 1000} \text{ kW}$
    *   $N$: Engine speed (rpm)
    *   $T$: Brake torque (Nm)

**Friction Power (FP):** The power lost due to friction between moving parts in the engine.
*   **Formula:** $FP = IP - BP$

**Heat Supplied by Fuel ($Q_s$):** The total energy released by the combustion of the fuel.
*   **Formula:** $Q_s = m_f \times CV_f \text{ kJ/min}$ or $\text{kW}$
    *   $m_f$: Mass flow rate of fuel (kg/min or kg/s)
    *   $CV_f$: Calorific value of fuel (kJ/kg)

**Heat Equivalent of Brake Power ($Q_{bp}$):** The energy converted into useful work.
*   **Formula:** $Q_{bp} = BP \times 3.6 \text{ kJ/min}$ or $\text{kW}$ (since 1 kW = 3.6 kJ/min)

**Heat Carried away by Cooling Water ($Q_w$):** The heat absorbed by the cooling medium (usually water) circulating through the engine jacket.
*   **Formula:** $Q_w = m_w \times C_p \times (T_{wo} - T_{wi}) \text{ kJ/min}$ or $\text{kW}$
    *   $m_w$: Mass flow rate of cooling water (kg/min or kg/s)
    *   $C_p$: Specific heat of water (approx. 4.18 kJ/kg°C)
    *   $T_{wo}$: Outlet temperature of cooling water (°C)
    *   $T_{wi}$: Inlet temperature of cooling water (°C)

**Heat Carried away by Exhaust Gases ($Q_g$):** The energy lost in the hot exhaust gases.
*   **Formula:** $Q_g = m_g \times C_{pg} \times (T_g - T_a) \text{ kJ/min}$ or $\text{kW}$
    *   $m_g$: Mass flow rate of exhaust gases (kg/min or kg/s)
    *   $C_{pg}$: Specific heat of exhaust gases (kJ/kg°C)
    *   $T_g$: Temperature of exhaust gases (°C)
    *   $T_a$: Ambient temperature (°C)

**Heat Lost to Surroundings (Radiation and other losses) ($Q_r$):** This is the residual heat loss, typically unaccounted for directly and calculated by difference.
*   **Formula:** $Q_r = Q_s - (Q_{bp} + Q_w + Q_g)$

**Thermal Efficiency ($\eta_{th}$):** The ratio of useful work output to the heat supplied by the fuel.
*   **Formula:** $\eta_{th} = \frac{BP}{Q_s} \times 100\%$

**Volumetric Efficiency ($\eta_{vol}$):** For naturally aspirated engines, this is the ratio of the actual mass of air inducted into the cylinder to the theoretical mass of air that would fill the cylinder volume at intake conditions.

**Mechanical Efficiency ($\eta_{mech}$):** The ratio of brake power to indicated power.
*   **Formula:** $\eta_{mech} = \frac{BP}{IP} \times 100\%$

---

### 3. Procedure for Heat Balance Test (General)

The experiment is typically conducted on a variable-speed, variable-load engine test bed. The engine is run at a specific speed and load, and the following parameters are measured:

**Engine Operating Parameters:**

*   **Engine Speed (N):** Measured using a tachometer (rpm).
*   **Brake Torque (T):** Measured using a dynamometer (e.g., electrical dynamometer, hydraulic dynamometer) in Nm. This allows calculation of Brake Power (BP).

**Fuel Parameters:**

*   **Mass flow rate of fuel ($m_f$):** Measured using a calibrated fuel flow meter or by timing the consumption of a known volume of fuel from a graduated flask.
*   **Calorific Value of Fuel ($CV_f$):** Obtained from fuel supplier data or by bomb calorimeter.

**Cooling Water Parameters:**

*   **Mass flow rate of cooling water ($m_w$):** Measured using a calibrated flow meter or by timing the collection of a specific volume of water.
*   **Inlet Temperature of Cooling Water ($T_{wi}$):** Measured using a thermometer or temperature sensor.
*   **Outlet Temperature of Cooling Water ($T_{wo}$):** Measured using a thermometer or temperature sensor.

**Exhaust Gas Parameters:**

*   **Temperature of Exhaust Gases ($T_g$):** Measured using a thermocouple or pyrometer placed in the exhaust manifold.
*   **Temperature of Ambient Air ($T_a$):** Measured using a thermometer or temperature sensor.
*   **Mass flow rate of exhaust gases ($m_g$):** This is often estimated. For petrol engines, it's commonly assumed to be the sum of the mass flow rate of air and fuel ($m_g \approx m_a + m_f$). For diesel engines, it's also approximated as $m_g \approx m_a + m_f$, though the air-fuel ratio will be different. The mass flow rate of air ($m_a$) can be measured directly using an air flow meter or calculated from engine displacement and volumetric efficiency.

**Other Measured Parameters (as needed for more detailed analysis):**

*   **Indicated Mean Effective Pressure ($P_i$):** Measured using an indicator diagram (obtained from an oscilloscope or piezoelectric sensor) or estimated.
*   **Specific Heat of Cooling Water ($C_p$):** Approximately $4.18 \text{ kJ/kg}^\circ\text{C}$.
*   **Specific Heat of Exhaust Gases ($C_{pg}$):** This varies with composition and temperature. For estimation, values around $1.04 \text{ kJ/kg}^\circ\text{C}$ can be used for general purposes, but more accurate values based on gas analysis might be needed for precise calculations.

---

### 4. Heat Balance Calculations and Analysis

The fundamental equation for the heat balance is:

**Heat Supplied = Useful Heat Output + Heat Losses**

$Q_s = Q_{bp} + Q_w + Q_g + Q_r$

**Steps for Calculation:**

1.  **Calculate Heat Supplied ($Q_s$):**
    *   $Q_s = m_f \times CV_f$
    *   Ensure units are consistent (e.g., if $m_f$ is in kg/min and $CV_f$ in kJ/kg, then $Q_s$ will be in kJ/min). Convert to kW if needed ($1 \text{ kW} = 60 \text{ kJ/min}$).

2.  **Calculate Brake Power ($BP$):**
    *   $BP = \frac{2 \pi N T}{60000} \text{ kW}$ (if T is in Nm and N is in rpm)

3.  **Calculate Heat Equivalent of Brake Power ($Q_{bp}$):**
    *   $Q_{bp} = BP \times 3.6 \text{ kJ/min}$

4.  **Calculate Heat Carried away by Cooling Water ($Q_w$):**
    *   $Q_w = m_w \times C_p \times (T_{wo} - T_{wi})$
    *   Ensure units are consistent (e.g., if $m_w$ is in kg/min, $C_p$ in kJ/kg°C, and temperature difference in °C, then $Q_w$ will be in kJ/min).

5.  **Calculate Heat Carried away by Exhaust Gases ($Q_g$):**
    *   $Q_g = m_g \times C_{pg} \times (T_g - T_a)$
    *   **Estimating $m_g$**:
        *   For petrol engines: $m_g \approx (1 + \text{AFR}) \times m_a$, where AFR is the Air-Fuel Ratio.
        *   If air flow is measured ($m_a$), you can use the measured fuel flow ($m_f$) and calculate AFR: $AFR = m_a / m_f$.
        *   Alternatively, if air flow is not measured, an estimate for $m_g$ can be made based on engine displacement and speed, assuming typical volumetric efficiency. A common approximation is that the mass of exhaust gas per unit time is slightly more than the mass of air per unit time.
        *   A more direct method, if available, is to measure air intake flow rate.

6.  **Calculate Heat Lost to Surroundings ($Q_r$):**
    *   $Q_r = Q_s - (Q_{bp} + Q_w + Q_g)$

7.  **Calculate Percentages:**
    *   Percentage of Heat Supplied as Brake Power: $\frac{Q_{bp}}{Q_s} \times 100\%$
    *   Percentage of Heat Carried away by Cooling Water: $\frac{Q_w}{Q_s} \times 100\%$
    *   Percentage of Heat Carried away by Exhaust Gases: $\frac{Q_g}{Q_s} \times 100\%$
    *   Percentage of Heat Lost to Surroundings: $\frac{Q_r}{Q_s} \times 100\%$

8.  **Verify the Heat Balance:**
    *   Sum of all percentages should ideally be 100%. Any deviation is due to measurement errors or inaccuracies in assumed values.

---

### 5. Example Calculation (Hypothetical Data for a Petrol Engine)

**Given Data:**

*   Engine Speed ($N$) = 1500 rpm
*   Brake Torque ($T$) = 50 Nm
*   Fuel Consumption Rate ($m_f$) = 0.3 kg/min
*   Calorific Value of Fuel ($CV_f$) = 44000 kJ/kg
*   Cooling Water Flow Rate ($m_w$) = 10 kg/min
*   Cooling Water Inlet Temp ($T_{wi}$) = 20 °C
*   Cooling Water Outlet Temp ($T_{wo}$) = 60 °C
*   Exhaust Gas Temp ($T_g$) = 450 °C
*   Ambient Air Temp ($T_a$) = 25 °C
*   Specific Heat of Water ($C_p$) = 4.18 kJ/kg°C
*   Specific Heat of Exhaust Gases ($C_{pg}$) = 1.04 kJ/kg°C
*   Air flow rate ($m_a$) = 4.5 kg/min (measured)

**Calculations:**

1.  **Heat Supplied ($Q_s$):**
    *   $Q_s = m_f \times CV_f = 0.3 \text{ kg/min} \times 44000 \text{ kJ/kg} = 13200 \text{ kJ/min}$
    *   $Q_s = \frac{13200}{60} \text{ kW} = 220 \text{ kW}$

2.  **Brake Power ($BP$):**
    *   $BP = \frac{2 \pi N T}{60000} = \frac{2 \pi \times 1500 \times 50}{60000} = 7.854 \text{ kW}$

3.  **Heat Equivalent of Brake Power ($Q_{bp}$):**
    *   $Q_{bp} = BP \times 3.6 = 7.854 \text{ kW} \times 3.6 \text{ kJ/kWs} \times 60 \text{ s/min} = 1685.8 \text{ kJ/min}$
    *   Alternatively, $Q_{bp} = 7.854 \text{ kW}$ (If expressing in kW directly)

4.  **Heat Carried away by Cooling Water ($Q_w$):**
    *   $Q_w = m_w \times C_p \times (T_{wo} - T_{wi}) = 10 \text{ kg/min} \times 4.18 \text{ kJ/kg}^\circ\text{C} \times (60 - 20)^\circ\text{C}$
    *   $Q_w = 10 \times 4.18 \times 40 = 1672 \text{ kJ/min}$

5.  **Mass flow rate of exhaust gases ($m_g$):**
    *   Calculate Air-Fuel Ratio (AFR): $AFR = \frac{m_a}{m_f} = \frac{4.5 \text{ kg/min}}{0.3 \text{ kg/min}} = 15$
    *   Assuming exhaust gas mass is approximately air mass plus fuel mass:
    *   $m_g \approx m_a + m_f = 4.5 + 0.3 = 4.8 \text{ kg/min}$

6.  **Heat Carried away by Exhaust Gases ($Q_g$):**
    *   $Q_g = m_g \times C_{pg} \times (T_g - T_a) = 4.8 \text{ kg/min} \times 1.04 \text{ kJ/kg}^\circ\text{C} \times (450 - 25)^\circ\text{C}$
    *   $Q_g = 4.8 \times 1.04 \times 425 = 2121.6 \text{ kJ/min}$

7.  **Heat Lost to Surroundings ($Q_r$):**
    *   $Q_r = Q_s - (Q_{bp} + Q_w + Q_g)$
    *   $Q_r = 13200 - (1685.8 + 1672 + 2121.6) \text{ kJ/min}$
    *   $Q_r = 13200 - 5479.4 = 7720.6 \text{ kJ/min}$

8.  **Percentages:**
    *   **Percentage Heat as BP:** $\frac{1685.8}{13200} \times 100\% = 12.77\%$
    *   **Percentage Heat in Cooling Water:** $\frac{1672}{13200} \times 100\% = 12.67\%$
    *   **Percentage Heat in Exhaust Gases:** $\frac{2121.6}{13200} \times 100\% = 16.07\%$
    *   **Percentage Heat Lost to Surroundings:** $\frac{7720.6}{13200} \times 100\% = 58.49\%$

9.  **Total:** $12.77\% + 12.67\% + 16.07\% + 58.49\% = 100.00\%$

**Interpretation of Results:**

*   The thermal efficiency of the engine (represented by the percentage of heat converted to BP) is relatively low in this hypothetical example (12.77%). This is expected for a petrol engine at potentially a lower load or speed.
*   A significant portion of heat is lost to the exhaust gases and cooling water, which is typical.
*   The largest loss is to surroundings, which includes friction and unburnt fuel. This might indicate a need for better insulation or engine tuning.

---

### 6. Important Points to Remember

*   **Units Consistency:** Always ensure that all measured and calculated values have consistent units (e.g., kJ/min or kW).
*   **Accurate Measurements:** The accuracy of the heat balance depends heavily on the accuracy of the instruments used to measure flow rates, temperatures, speed, and torque.
*   **Assumptions:** Be aware of any assumptions made, especially regarding the specific heat of exhaust gases and the mass flow rate of exhaust gases. For precise analysis, these values can be obtained from charts or more detailed calculations based on air-fuel ratios and combustion products.
*   **Engine Type:** The distribution of heat losses can vary significantly between petrol and diesel engines. Diesel engines generally have higher thermal efficiencies due to higher compression ratios and leaner combustion.
*   **Operating Conditions:** The heat balance will change with engine speed and load. It's often performed at various conditions to get a complete picture of engine performance.
*   **Reference Books:**
    *   **V. Ganesan:** Provides a good overview of IC engine thermodynamics and performance testing, including heat balance.
    *   **J.B. Heywood:** Offers a more in-depth analysis of engine design, combustion, and performance, which can help in understanding the sources of heat losses.
    *   **Stephen R. Turns:** Focuses on combustion, which is crucial for understanding the energy input and the composition of exhaust gases affecting heat losses.

---

### 7. Practice Questions and Exercises

**Question 1:**
A petrol engine on test consumes 5 kg of fuel per hour. The calorific value of the fuel is 42000 kJ/kg. The engine develops a brake power of 20 kW. The cooling water flow rate is 150 kg/h and its temperature rises by 40°C. The mechanical efficiency of the engine is 80%. Assuming $1 \text{ kJ/kg}^\circ\text{C}$ as specific heat of exhaust gases and the air-fuel ratio as 15:1. Calculate the heat balance sheet for the engine in kW.

**Answer:**

*   **Heat Supplied ($Q_s$):**
    *   $m_f = 5 \text{ kg/h}$
    *   $CV_f = 42000 \text{ kJ/kg}$
    *   $Q_s = 5 \times 42000 = 210000 \text{ kJ/h} = \frac{210000}{3600} \text{ kW} = 58.33 \text{ kW}$

*   **Brake Power ($BP$):**
    *   $BP = 20 \text{ kW}$

*   **Heat Equivalent of Brake Power ($Q_{bp}$):**
    *   $Q_{bp} = BP = 20 \text{ kW}$ (Since BP is already in kW)

*   **Heat Carried away by Cooling Water ($Q_w$):**
    *   $m_w = 150 \text{ kg/h}$
    *   $\Delta T_w = 40^\circ\text{C}$
    *   $C_p = 4.18 \text{ kJ/kg}^\circ\text{C}$ (Using a more standard value)
    *   $Q_w = 150 \times 4.18 \times 40 = 25080 \text{ kJ/h} = \frac{25080}{3600} \text{ kW} = 6.97 \text{ kW}$

*   **Indicated Power ($IP$):**
    *   $\eta_{mech} = \frac{BP}{IP} \implies IP = \frac{BP}{\eta_{mech}} = \frac{20}{0.80} = 25 \text{ kW}$

*   **Friction Power ($FP$):**
    *   $FP = IP - BP = 25 - 20 = 5 \text{ kW}$

*   **Heat Equivalent of Friction Power ($Q_f$):**
    *   $Q_f = FP = 5 \text{ kW}$ (This is the energy lost due to friction, often grouped with radiation loss)

*   **Mass flow rate of fuel ($m_f$) in kg/s:**
    *   $m_f = \frac{5}{3600} \text{ kg/s} = 0.001389 \text{ kg/s}$

*   **Mass flow rate of air ($m_a$):**
    *   AFR = 15, so $m_a = 15 \times m_f = 15 \times 0.001389 \text{ kg/s} = 0.020835 \text{ kg/s}$

*   **Mass flow rate of exhaust gases ($m_g$):**
    *   $m_g \approx m_a + m_f = 0.020835 + 0.001389 = 0.022224 \text{ kg/s}$
    *   $m_g$ in kg/h = $0.022224 \times 3600 = 80 \text{ kg/h}$

*   **Heat Carried away by Exhaust Gases ($Q_g$):**
    *   $m_g = 80 \text{ kg/h}$
    *   $C_{pg} = 1 \text{ kJ/kg}^\circ\text{C}$ (Given assumption)
    *   Need Exhaust Gas Temperature ($T_g$). This is missing in the question. Let's assume $T_g = 400^\circ\text{C}$ and $T_a = 30^\circ\text{C}$ for demonstration.
    *   $\Delta T_g = 400 - 30 = 370^\circ\text{C}$
    *   $Q_g = 80 \times 1 \times 370 = 29600 \text{ kJ/h} = \frac{29600}{3600} \text{ kW} = 8.22 \text{ kW}$

*   **Heat Lost to Radiation and Other Losses ($Q_r$):**
    *   $Q_s = Q_{bp} + Q_w + Q_g + Q_r$
    *   $58.33 = 20 + 6.97 + 8.22 + Q_r$
    *   $Q_r = 58.33 - (20 + 6.97 + 8.22) = 58.33 - 35.19 = 23.14 \text{ kW}$

**Heat Balance Sheet (in kW):**

| Component                      | Energy (kW) | Percentage of Total Heat Input (%) |
| :----------------------------- | :---------- | :--------------------------------- |
| Heat Supplied by Fuel ($Q_s$)  | 58.33       | 100.00%                            |
| **Useful Output:**             |             |                                    |
| Brake Power ($Q_{bp}$)         | 20.00       | 34.29%                             |
| **Losses:**                    |             |                                    |
| Heat in Cooling Water ($Q_w$)  | 6.97        | 11.95%                             |
| Heat in Exhaust Gases ($Q_g$)  | 8.22        | 14.09%                             |
| Radiation & Other Losses ($Q_r$) | 23.14       | 39.67%                             |
| **Total Losses**               | **38.33**   | **65.71%**                         |
| **Total Output + Losses**      | **58.33**   | **100.00%**                        |

*(Note: The percentage of radiation and other losses is high in this hypothetical calculation due to the assumed value of exhaust gas temperature and specific heat. In actual experiments, these values would be measured or calculated more precisely.)*

**Question 2:**
What are the primary components of heat loss in an internal combustion engine, and how might their distribution differ between a petrol and a diesel engine? (Relates to CO1 and CO2)

**Answer:**
The primary components of heat loss in an IC engine are:
1.  **Heat carried away by cooling water:** Absorbed by the engine's cooling system (water jacket).
2.  **Heat carried away by exhaust gases:** Energy contained in the hot exhaust products leaving the cylinder.
3.  **Heat lost to surroundings:** This includes heat dissipated through radiation and convection from the engine's external surfaces, and also represents losses due to incomplete combustion (unburnt fuel/hydrocarbons) and burning of lubricating oil.

**Differences between Petrol and Diesel Engines:**
*   **Diesel Engines:** Generally have higher thermal efficiencies. This means a larger proportion of the heat input is converted into useful work (BP). Consequently, the percentage of heat lost to cooling water and exhaust gases might be proportionally lower than in a petrol engine for the same operating conditions, although absolute values can vary. Diesel engines operate with leaner air-fuel ratios, which can affect exhaust gas temperatures and composition.
*   **Petrol Engines:** Typically have lower thermal efficiencies due to lower compression ratios (limited by knocking) and richer air-fuel mixtures at certain operating points. This results in a higher percentage of heat being lost to cooling water and exhaust gases. Radiation and convection losses can also be significant, especially at higher operating temperatures.

---

### 8. Alignment with Course Outcomes

*   **CO1: Identify various systems and subsystems of Diesel and petrol engines:** The heat balance test indirectly involves understanding the cooling system (for $Q_w$) and the exhaust system (for $Q_g$). The BP measurement involves the drivetrain. This helps in recognizing these subsystems and their role in engine operation and energy transfer.
*   **CO2: Analyse the performance characteristics of internal combustion engines:** This entire module is dedicated to this outcome. By calculating the heat balance, students can determine the thermal efficiency, identify major loss areas, and understand how the engine converts fuel energy into useful work. This analysis is crucial for evaluating engine performance.

---

This comprehensive guide should provide a solid foundation for understanding and conducting the Heat Balance Test on petrol/diesel engines in your Thermal Engineering Lab-2. Remember to refer to your specific lab manual for detailed experimental procedures and safety guidelines.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
