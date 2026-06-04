---
title: "Steam Power Cycle : Simple Rankine cycle"
subject: "THERMAL ENGINEERING"
module: "Module 1: Steam Power Cycle : Simple Rankine cycle"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf480446397f"
status: "completed"
scrapedAt: "2026-05-20T18:08:30.737Z"
---
# Thermal Engineering: Module 1 - Steam Power Cycle: Simple Rankine Cycle

## 1. Introduction to Steam Power Cycles

Steam power cycles are the backbone of thermal power generation, converting heat energy into mechanical work. The primary goal is to efficiently transfer heat to a working fluid (water/steam) and then extract work from its expansion.

**Key Concepts:**
*   **Working Fluid:** The substance that circulates through the cycle and undergoes phase changes (e.g., water and steam).
*   **Heat Source:** A device that supplies heat to the working fluid (e.g., boiler furnace).
*   **Heat Sink:** A device that rejects waste heat from the working fluid (e.g., condenser cooled by water or air).
*   **Work Output:** The mechanical energy produced by the expansion of the working fluid (e.g., in a turbine).
*   **Work Input:** The energy required to pump the working fluid back to its initial state (e.g., in a pump).

**Relationship to Course Outcomes:**
*   **CO1 (K4):** Understanding the fundamental thermodynamic principles is crucial for analyzing the operation of steam power cycles.

**Textbook References:**
*   Rudra Moorthy, Thermal Engineering (2003) - Chapter 5: Steam Boilers and Steam Turbines
*   R.K. Rajput, Thermal Engineering (2010) - Chapter 10: Steam Power Plants

---

## 2. The Simple Rankine Cycle

The Simple Rankine Cycle is the idealized thermodynamic cycle upon which most steam power plants operate. It represents the fundamental process of converting heat into work using steam as the working fluid.

**Key Components of the Simple Rankine Cycle:**

1.  **Boiler (Heat Addition):** Water is heated and converted into high-pressure, high-temperature steam. This is where heat is added to the working fluid from an external source.
2.  **Turbine (Work Output):** The high-pressure steam expands through a turbine, producing mechanical work. As the steam expands, its pressure and temperature decrease, and it does work on the turbine blades.
3.  **Condenser (Heat Rejection):** The low-pressure steam exiting the turbine is condensed back into liquid water. This is where waste heat is rejected to a cooling medium.
4.  **Pump (Work Input):** The liquid water is pumped from the condenser pressure back to the boiler pressure. This requires a small amount of work input.

**Idealized Processes of the Simple Rankine Cycle:**

*   **1-2: Isentropic Expansion in Turbine:** Reversible adiabatic expansion of steam in the turbine. (Assumes no heat loss and no internal irreversibilities).
*   **2-3: Isobaric Heat Rejection in Condenser:** Reversible isobaric heat removal from the steam to condense it into saturated liquid. (Assumes perfect heat transfer at constant pressure).
*   **3-4: Isentropic Compression in Pump:** Reversible adiabatic compression of liquid water from condenser pressure to boiler pressure. (Assumes no heat loss and no internal irreversibilities).
*   **4-1: Isobaric Heat Addition in Boiler:** Reversible isobaric heat addition to the liquid water to convert it into superheated steam. (Assumes perfect heat transfer at constant pressure).

**Visual Representation:**

*   **T-s Diagram (Temperature-Entropy Diagram):** Shows the cycle as a closed loop with distinct regions.
    *   1-2: Vertical line (isentropic expansion)
    *   2-3: Horizontal line (isobaric condensation)
    *   3-4: Vertical line (isentropic compression)
    *   4-1: Horizontal line (isobaric heat addition)
*   **h-s Diagram (Enthalpy-Entropy Diagram):** Also useful for visualizing the enthalpy changes in each process.

**Textbook References:**
*   Rudra Moorthy, Thermal Engineering (2003) - Chapter 6: Rankine Cycle
*   R.K. Rajput, Thermal Engineering (2010) - Chapter 10: Steam Power Plants
*   Mahesh Rathore, Thermal Engineering (2010) - Chapter 4: Steam Power Cycles

**Important Points to Remember:**
*   The Rankine cycle is the **idealized model**. Real cycles have irreversibilities.
*   The cycle involves **phase change** of the working fluid.

---

## 3. Thermodynamic Analysis of the Simple Rankine Cycle

The performance of the Rankine cycle is evaluated based on its thermal efficiency and work output.

**Key Performance Parameters:**

*   **Net Work Output ($W_{net}$):** The difference between the work done by the turbine and the work done by the pump.
    $W_{net} = W_T - W_P$
    Where:
    *   $W_T$ = Work done by the turbine per unit mass of working fluid.
    *   $W_P$ = Work done by the pump per unit mass of working fluid.

*   **Heat Supplied ($Q_{in}$):** The heat added in the boiler per unit mass of working fluid.

*   **Heat Rejected ($Q_{out}$):** The heat rejected in the condenser per unit mass of working fluid.

*   **Thermal Efficiency ($\eta_{th}$):** The ratio of net work output to the heat supplied.
    $\eta_{th} = \frac{W_{net}}{Q_{in}} = \frac{Q_{in} - Q_{out}}{Q_{in}} = 1 - \frac{Q_{out}}{Q_{in}}$

**Calculations (per unit mass of working fluid):**

*   **Turbine Work ($W_T$):**
    $W_T = h_1 - h_2$
    Where:
    *   $h_1$ = Enthalpy of steam entering the turbine (state 1).
    *   $h_2$ = Enthalpy of steam leaving the turbine (state 2).
    *(This corresponds to isentropic expansion from state 1 to state 2).*

*   **Pump Work ($W_P$):**
    $W_P = h_4 - h_3$
    Where:
    *   $h_4$ = Enthalpy of water entering the pump (state 4).
    *   $h_3$ = Enthalpy of water leaving the pump (state 3).
    *(For liquid, enthalpy change is approximately equal to the volume change times pressure change).*
    $W_P \approx v_3 (P_4 - P_3)$
    Where:
    *   $v_3$ = Specific volume of liquid water at state 3.
    *   $P_4$ = Boiler pressure.
    *   $P_3$ = Condenser pressure.
    *(This corresponds to isentropic compression from state 3 to state 4).*

*   **Heat Supplied ($Q_{in}$):**
    $Q_{in} = h_1 - h_4$
    Where:
    *   $h_1$ = Enthalpy of steam entering the turbine (state 1).
    *   $h_4$ = Enthalpy of water leaving the pump (state 4).

*   **Heat Rejected ($Q_{out}$):**
    $Q_{out} = h_2 - h_3$
    Where:
    *   $h_2$ = Enthalpy of steam leaving the turbine (state 2).
    *   $h_3$ = Enthalpy of water entering the condenser (state 3).

**Relationship to Course Outcomes:**
*   **CO1 (K4):** Applying these calculations directly addresses the knowledge level for analyzing steam power cycles.

**Textbook References:**
*   Rudra Moorthy, Thermal Engineering (2003) - Chapter 6: Rankine Cycle
*   R.K. Rajput, Thermal Engineering (2010) - Chapter 10: Steam Power Plants
*   Mahesh Rathore, Thermal Engineering (2010) - Chapter 4: Steam Power Cycles

**Example:**
Consider a simple steam power plant operating on the Rankine cycle. Steam leaves the boiler at 40 bar and 400°C ($h_1 = 3214$ kJ/kg, $s_1 = 6.471$ kJ/kg-K). It expands isentropically to 0.1 bar ($P_2 = 0.1$ bar). At 0.1 bar, the steam is exhausted as saturated vapor ($h_g = 2583.9$ kJ/kg, $s_g = 8.150$ kJ/kg-K). The water leaving the condenser is saturated liquid at 0.1 bar ($h_3 = h_f$ at 0.1 bar = 191.8 kJ/kg, $v_3 = v_f$ at 0.1 bar = 0.00104 m³/kg).

**Find:**
*   Turbine work ($W_T$)
*   Pump work ($W_P$)
*   Heat supplied ($Q_{in}$)
*   Heat rejected ($Q_{out}$)
*   Thermal efficiency ($\eta_{th}$)

**Solution Steps:**

1.  **State 1:** Given, $P_1 = 40$ bar, $T_1 = 400^\circ$C. From steam tables, $h_1 = 3214$ kJ/kg, $s_1 = 6.471$ kJ/kg-K.
2.  **State 2:** Isentropic expansion from state 1 to $P_2 = 0.1$ bar. $s_2 = s_1 = 6.471$ kJ/kg-K. At $P_2 = 0.1$ bar, saturated vapor entropy $s_g = 8.150$ kJ/kg-K. Since $s_2 < s_g$, state 2 is in the superheated region (mistake in problem statement if it implies saturated vapor, but let's assume it exhausts as a mixture and we need to find $h_2$ from $s_2$).
    *   At 0.1 bar: $s_f = 0.6493$ kJ/kg-K, $h_f = 191.8$ kJ/kg, $h_{fg} = 2392.1$ kJ/kg, $s_g = 8.150$ kJ/kg-K.
    *   Quality $x_2$: $s_2 = s_f + x_2(s_g - s_f)$
        $6.471 = 0.6493 + x_2(8.150 - 0.6493)$
        $6.471 = 0.6493 + x_2(7.5007)$
        $x_2 = \frac{6.471 - 0.6493}{7.5007} = \frac{5.8217}{7.5007} \approx 0.776$
    *   Enthalpy at state 2: $h_2 = h_f + x_2 h_{fg}$
        $h_2 = 191.8 + 0.776 \times 2392.1 \approx 191.8 + 1857.9 \approx 2049.7$ kJ/kg
3.  **State 3:** Saturated liquid at $P_3 = 0.1$ bar. From steam tables, $h_3 = h_f$ at 0.1 bar = 191.8 kJ/kg, $v_3 = v_f$ at 0.1 bar = 0.00104 m³/kg.
4.  **State 4:** Isentropic compression from state 3 to $P_4 = 40$ bar.
    *   Pump work $W_P = v_3 (P_4 - P_3)$
        $W_P = 0.00104 \text{ m³/kg} \times (40 - 0.1) \times 10^5 \text{ N/m²} = 0.00104 \times 39.9 \times 10^5 \text{ J/kg} \approx 4149.6$ J/kg $= 4.15$ kJ/kg.
    *   Enthalpy at state 4: $h_4 = h_3 + W_P = 191.8 + 4.15 = 195.95$ kJ/kg.

**Calculations:**
*   **Turbine Work ($W_T$):** $W_T = h_1 - h_2 = 3214 - 2049.7 = 1164.3$ kJ/kg.
*   **Pump Work ($W_P$):** $W_P = 4.15$ kJ/kg.
*   **Net Work Output ($W_{net}$):** $W_{net} = W_T - W_P = 1164.3 - 4.15 = 1160.15$ kJ/kg.
*   **Heat Supplied ($Q_{in}$):** $Q_{in} = h_1 - h_4 = 3214 - 195.95 = 3018.05$ kJ/kg.
*   **Heat Rejected ($Q_{out}$):** $Q_{out} = h_2 - h_3 = 2049.7 - 191.8 = 1857.9$ kJ/kg.
*   **Thermal Efficiency ($\eta_{th}$):** $\eta_{th} = \frac{W_{net}}{Q_{in}} = \frac{1160.15}{3018.05} \approx 0.3844$ or 38.44%.

**Check:** $Q_{in} - Q_{out} = 3018.05 - 1857.9 = 1160.15$ kJ/kg $= W_{net}$. This confirms the first law of thermodynamics.

---

## 4. Factors Affecting the Performance of the Simple Rankine Cycle

The ideal Rankine cycle provides a benchmark, but real-world factors and variations can significantly impact its performance.

**Key Factors and their Impact:**

*   **Boiler Pressure (Higher Pressure):**
    *   **Impact:** Increases the average temperature at which heat is supplied ($T_{avg, in}$).
    *   **Effect on Efficiency:** Generally **increases** thermal efficiency.
    *   **Limit:** High pressures require robust and expensive boiler designs. Also, the quality of steam exiting the turbine decreases at very high pressures.

*   **Boiler Temperature (Higher Temperature - Superheating):**
    *   **Impact:** Increases the enthalpy of steam entering the turbine ($h_1$).
    *   **Effect on Efficiency:** **Increases** thermal efficiency.
    *   **Benefit:** Reduces moisture content in the turbine, preventing erosion and improving turbine efficiency.
    *   **Rudra Moorthy (2003) & R.K. Rajput (2010):** Emphasize superheating as a crucial practical enhancement.

*   **Condenser Pressure (Lower Pressure):**
    *   **Impact:** Decreases the enthalpy of steam leaving the turbine ($h_2$) and also the enthalpy of the water entering the pump ($h_3$).
    *   **Effect on Efficiency:** **Increases** thermal efficiency.
    *   **Limit:** Extremely low condenser pressures can lead to very large turbine exhaust volumes, requiring larger and more expensive turbines. Air leakage into the condenser becomes a significant issue.

*   **Pump Work:**
    *   **Impact:** While small compared to turbine work, it reduces the net work output.
    *   **Effect on Efficiency:** Minimizing pump work is desirable. This is achieved by having the lowest possible condenser pressure (as $v_3$ is smallest at low pressures).

**Visualizing Improvements on T-s Diagram:**

*   **Superheating:** Extends the heat addition process (4-1') to a higher temperature, increasing $Q_{in}$ and $\eta_{th}$.
*   **Reheating:** (Not part of simple Rankine, but a common modification) Improves efficiency and reduces moisture.
*   **Regenerative Feedwater Heating:** (Not part of simple Rankine, but a common modification) Improves efficiency by preheating feedwater.

**Relationship to Course Outcomes:**
*   **CO1 (K4):** Analyzing how these factors affect the cycle's performance.
*   **CO2 (K3):** Understanding how these factors relate to turbine efficiency (e.g., moisture content).

**Textbook References:**
*   Rudra Moorthy, Thermal Engineering (2003) - Chapter 6: Rankine Cycle
*   R.K. Rajput, Thermal Engineering (2010) - Chapter 10: Steam Power Plants
*   Mahesh Rathore, Thermal Engineering (2010) - Chapter 4: Steam Power Cycles

---

## 5. Practical Considerations and Deviations from the Ideal Cycle

The ideal Rankine cycle assumes reversible processes, but real-world power plants involve irreversibilities that reduce efficiency.

**Key Deviations and Practical Considerations:**

*   **Friction in Piping:** Causes pressure drops in the boiler, turbine, and condenser, deviating from isobaric processes.
*   **Heat Loss:** Heat transfer from the turbine, boiler, and piping to the surroundings reduces the net work output and heat supplied.
*   **Turbine Inefficiency (Isentropic Efficiency):** The actual expansion in the turbine is not isentropic. This means the turbine exit pressure and temperature are higher than ideal, resulting in lower work output.
    *   Actual Turbine Work ($W_{T,actual}$) < Isentropic Turbine Work ($W_{T,ideal}$)
    *   Isentropic Efficiency of Turbine ($\eta_T$) = $\frac{W_{T,actual}}{W_{T,ideal}} = \frac{h_1 - h_{2s}}{h_1 - h_2}$ (where $h_{2s}$ is the enthalpy for isentropic expansion and $h_2$ is the actual enthalpy).
*   **Pump Inefficiency (Isentropic Efficiency):** The actual compression in the pump is not isentropic. This requires more work input than ideal.
    *   Actual Pump Work ($W_{P,actual}$) > Isentropic Pump Work ($W_{P,ideal}$)
    *   Isentropic Efficiency of Pump ($\eta_P$) = $\frac{W_{P,ideal}}{W_{P,actual}} = \frac{h_{4s} - h_3}{h_4 - h_3}$ (where $h_{4s}$ is the enthalpy for isentropic compression and $h_4$ is the actual enthalpy).
*   **Condenser Pressure:** The condenser pressure is usually slightly above the saturation pressure corresponding to the cooling water temperature to ensure adequate heat transfer.
*   **Boiler Pressure:** The boiler pressure is maintained slightly above the turbine inlet pressure to account for pressure drops in steam pipes and valves.

**Impact on Thermal Efficiency:**
All these irreversibilities lead to a **lower thermal efficiency** compared to the ideal Rankine cycle.

**Relationship to Course Outcomes:**
*   **CO1 (K4):** Understanding these deviations is part of analyzing the operation of steam power cycles.
*   **CO2 (K3):** Turbine inefficiency directly relates to analyzing turbine performance and identifying methods for improvement (e.g., using higher efficiency designs, reducing blade friction).

**Textbook References:**
*   Rudra Moorthy, Thermal Engineering (2003) - Chapter 6: Rankine Cycle
*   R.K. Rajput, Thermal Engineering (2010) - Chapter 10: Steam Power Plants
*   Mahesh Rathore, Thermal Engineering (2010) - Chapter 4: Steam Power Cycles

---

## 6. Practice Questions and Exercises

**Question 1 (CO1, K4):**
A steam power plant operates on the ideal Rankine cycle. Steam leaves the boiler at 30 bar and 350°C. The condenser pressure is 0.08 bar. Calculate:
a) The enthalpy and entropy of steam at the turbine inlet.
b) The quality of steam and enthalpy at the turbine outlet.
c) The pump work and turbine work per kg of steam.
d) The heat supplied and rejected per kg of steam.
e) The thermal efficiency of the cycle.

**Given (from steam tables):**
At 30 bar, 350°C: $h_1 = 3115.3$ kJ/kg, $s_1 = 6.745$ kJ/kg-K
At 0.08 bar: $h_f = 173.9$ kJ/kg, $s_f = 0.5775$ kJ/kg-K, $h_{fg} = 2394.5$ kJ/kg, $s_g = 8.227$ kJ/kg-K, $v_f = 0.001037$ m³/kg

**Answer 1:**
a) $h_1 = 3115.3$ kJ/kg, $s_1 = 6.745$ kJ/kg-K
b) $s_2 = s_1 = 6.745$ kJ/kg-K.
   Quality $x_2 = \frac{s_2 - s_f}{s_g - s_f} = \frac{6.745 - 0.5775}{8.227 - 0.5775} = \frac{6.1675}{7.6495} \approx 0.806$
   $h_2 = h_f + x_2 h_{fg} = 173.9 + 0.806 \times 2394.5 = 173.9 + 1929.9 \approx 2103.8$ kJ/kg
c) Pump work $W_P = v_f (P_{boiler} - P_{condenser}) = 0.001037 \text{ m³/kg} \times (30 - 0.08) \times 10^5 \text{ Pa} = 0.001037 \times 29.92 \times 10^5 \approx 3103$ J/kg $= 3.103$ kJ/kg
   Turbine work $W_T = h_1 - h_2 = 3115.3 - 2103.8 = 1011.5$ kJ/kg
d) Heat supplied $Q_{in} = h_1 - h_4 = h_1 - (h_3 + W_P) = 3115.3 - (173.9 + 3.103) = 3115.3 - 177.003 \approx 2938.3$ kJ/kg
   Heat rejected $Q_{out} = h_2 - h_3 = 2103.8 - 173.9 = 1929.9$ kJ/kg
e) Thermal efficiency $\eta_{th} = \frac{W_T - W_P}{Q_{in}} = \frac{1011.5 - 3.103}{2938.3} = \frac{1008.397}{2938.3} \approx 0.3432$ or 34.32%

**Question 2 (CO1, K4):**
How does increasing the condenser pressure affect the thermal efficiency of the Rankine cycle? Explain with reference to the T-s diagram and the efficiency formula.

**Answer 2:**
Increasing the condenser pressure (e.g., from 0.08 bar to 0.1 bar) has the following effects:
*   **On the T-s Diagram:** The isobaric heat rejection process (2-3) shifts to the right (higher temperature and entropy for saturated liquid). The pump work process (3-4) also increases.
*   **On Efficiency Formula:**
    *   $W_P = v_f (P_{boiler} - P_{condenser})$. As $P_{condenser}$ increases, $W_P$ increases.
    *   $h_3$ (enthalpy of saturated liquid) increases with increasing pressure.
    *   $h_2$ (enthalpy at turbine outlet) will also increase slightly because the turbine exhaust pressure is higher.
    *   $Q_{out} = h_2 - h_3$. The increase in $h_3$ generally dominates over the increase in $h_2$, leading to a slight increase in $Q_{out}$ or a decrease depending on the exact states.
    *   $Q_{in} = h_1 - h_4 = h_1 - (h_3 + W_P)$. Both $h_3$ and $W_P$ increase, so $Q_{in}$ decreases.
    *   $\eta_{th} = \frac{W_T - W_P}{Q_{in}} = \frac{(h_1 - h_2) - W_P}{h_1 - (h_3 + W_P)}$.
    The net effect is that increasing condenser pressure **decreases** the thermal efficiency because it increases pump work and reduces the temperature difference over which heat is supplied and rejected, while also slightly increasing the turbine exhaust enthalpy.

**Question 3 (CO2, K3):**
If the isentropic efficiency of the turbine in Question 1 is 85%, calculate the actual turbine work and the actual thermal efficiency of the cycle. Assume the pump is ideal.

**Answer 3:**
Ideal turbine work ($W_{T,ideal}$) = 1011.5 kJ/kg (from Question 1).
Actual turbine work ($W_{T,actual}$) = $\eta_T \times W_{T,ideal} = 0.85 \times 1011.5 \approx 859.8$ kJ/kg.
Ideal pump work ($W_P$) = 3.103 kJ/kg (from Question 1). Since the pump is ideal, actual pump work is also 3.103 kJ/kg.
Net work ($W_{net,actual}$) = $W_{T,actual} - W_P = 859.8 - 3.103 = 856.7$ kJ/kg.
Heat supplied ($Q_{in}$) remains the same if the boiler operation is unaffected: $Q_{in} \approx 2938.3$ kJ/kg.
Actual thermal efficiency ($\eta_{th,actual}$) = $\frac{W_{net,actual}}{Q_{in}} = \frac{856.7}{2938.3} \approx 0.2916$ or 29.16%.

---

## 7. Summary and Key Takeaways

*   The Simple Rankine Cycle is the foundational thermodynamic cycle for steam power plants.
*   It consists of four ideal processes: isentropic expansion, isobaric heat rejection, isentropic compression, and isobaric heat addition.
*   Key performance indicators are net work output and thermal efficiency.
*   Thermal efficiency can be improved by increasing boiler pressure and temperature (superheating) and decreasing condenser pressure.
*   Real cycles deviate from the ideal due to irreversibilities like friction and heat losses, leading to lower efficiencies. Turbine and pump inefficiencies are significant practical considerations.
*   Understanding these principles is crucial for analyzing and optimizing power plant performance.

---

This concludes the study notes for the Simple Rankine Cycle. Ensure to consult your textbooks (Rudra Moorthy, R.K. Rajput, Mahesh Rathore) for detailed steam table data and further examples. The concepts learned here form the basis for understanding more advanced steam power cycles.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
