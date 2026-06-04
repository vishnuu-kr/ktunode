---
title: "Steam engineering-temperature entropy diagram- mollier diagram- Rankine cycle-steam power plant, internally irreversible and externally irreversible Rankine cycle-Mean temperature of heat addition-Effect of superheat and inlet pressure-Reheating of steam"
subject: "POWER PLANT ENGINEERING"
module: "Module 1: Analysis of Steam Cycle"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1951d0cf480446439a"
status: "completed"
scrapedAt: "2026-05-20T18:16:09.355Z"
---
# Power Plant Engineering: Module 1: Analysis of Steam Cycle

## Topic: Steam Engineering, Thermodynamic Diagrams, Rankine Cycle, and its Variations

This module introduces the fundamental concepts of steam power plants, focusing on the thermodynamic analysis of the ideal and modified Rankine cycles, and the tools used for this analysis.

### 1. Steam Engineering Fundamentals

*   **Steam:** Water in its gaseous state. It's the working fluid in most thermal power plants due to its abundance, availability, and thermodynamic properties.
*   **Key Thermodynamic Properties of Steam:**
    *   **Specific Volume (v):** Volume per unit mass (m³/kg).
    *   **Temperature (T):** Measure of thermal energy.
    *   **Pressure (P):** Force per unit area.
    *   **Enthalpy (h):** Total heat content of the steam (kJ/kg). It's a measure of the energy required to produce steam at a given pressure and temperature.
    *   **Entropy (s):** A measure of the disorder or randomness of the steam (kJ/kg·K). It's crucial for analyzing the efficiency of thermodynamic processes.

### 2. Thermodynamic Diagrams for Steam

These diagrams are graphical representations of the thermodynamic states of a substance, allowing for visualization and analysis of cycles.

#### 2.1. Temperature-Entropy (T-s) Diagram

*   **Description:** Plots temperature (T) on the y-axis and entropy (s) on the x-axis.
*   **Key Features:**
    *   **Constant Temperature Lines:** Horizontal lines.
    *   **Constant Pressure Lines:** Generally curve upwards, becoming steeper at higher temperatures.
    *   **Constant Enthalpy Lines (Isenthalpic):** Generally curve upwards and to the right.
    *   **Constant Volume Lines (Isochoric):** Generally curve upwards and to the left.
    *   **Saturation Dome:** A bell-shaped curve representing the region where water and steam coexist.
        *   **Saturated Liquid Line (Left boundary):** All water.
        *   **Saturated Vapor Line (Right boundary):** All steam.
        *   **Wet Region (Inside dome):** Mixture of saturated liquid and saturated vapor.
        *   **Superheated Region (Right of dome):** Steam at a temperature higher than its saturation temperature at that pressure.
        *   **Compressed Liquid Region (Left of dome):** Subcooled liquid.
    *   **Area under a process on a T-s diagram represents the heat transferred during that process.**

*   **Relevance to Rankine Cycle:** Illustrates the heat addition and rejection processes clearly.
    *   **Heat Addition (Boiler):** Area between two entropy lines at constant temperature (or varying temperature in superheating/reheating).
    *   **Heat Rejection (Condenser):** Area between two entropy lines at constant temperature.

#### 2.2. Mollier Diagram (Enthalpy-Entropy or h-s Diagram)

*   **Description:** Plots enthalpy (h) on the y-axis and entropy (s) on the x-axis.
*   **Key Features:**
    *   **Constant Pressure Lines:** Curve downwards and to the right.
    *   **Constant Temperature Lines:** Curve upwards and to the right.
    *   **Constant Volume Lines:** Curve upwards and to the left.
    *   **Constant Quality Lines (Wet Region):** Straight lines inclined to the entropy axis.
*   **Advantage:** **Isentropic processes (like expansion through a turbine) are represented by vertical lines.** This makes it extremely useful for turbine performance analysis.
*   **Relevance to Rankine Cycle:**
    *   **Turbine Expansion:** A vertical drop on the Mollier diagram, representing isentropic expansion.
    *   **Pump Work:** A small vertical rise.
    *   **Heat Addition (Boiler):** Changes in enthalpy due to heat absorption.

*   **Reference:** Both El Wakil and Nag's books extensively use and explain these diagrams with detailed examples and charts.

### 3. The Rankine Cycle

The Rankine cycle is the theoretical thermodynamic cycle for steam power plants. It's an idealized cycle consisting of four processes:

1.  **Isentropic Compression (Pump):** Liquid is compressed in a pump from the condenser pressure ($P_2$) to the boiler pressure ($P_1$). This is an isentropic process ($s_2 = s_3$).
2.  **Isobaric Heat Addition (Boiler):** Heat is added to the compressed liquid at constant pressure ($P_1$) until it becomes saturated steam (or superheated steam).
3.  **Isentropic Expansion (Turbine):** Steam expands through a turbine, doing work, from the boiler pressure ($P_1$) to the condenser pressure ($P_2$). This is an isentropic process ($s_1 = s_4$).
4.  **Isobaric Heat Rejection (Condenser):** Heat is rejected from the steam at constant pressure ($P_2$) in the condenser, turning it back into saturated liquid.

**Diagrammatic Representation (T-s and h-s diagrams):**

**(Imagine T-s diagram with states 1, 2, 3, 4 representing boiler inlet, turbine outlet, condenser inlet, pump outlet respectively. Assume ideal cycle for simplicity in this description.)**

*   **T-s Diagram:**
    *   1-2: Isentropic expansion in the turbine (vertical line).
    *   2-3: Isobaric heat rejection in the condenser (horizontal line).
    *   3-4: Isentropic compression in the pump (vertical line).
    *   4-1: Isobaric heat addition in the boiler (horizontal line).

*   **h-s Diagram (Mollier Diagram):**
    *   1-2: Isentropic expansion in the turbine (vertical line).
    *   2-3: Heat rejection in the condenser (represented by a drop in enthalpy at constant pressure and entropy decrease).
    *   3-4: Isentropic compression in the pump (vertical line, very small enthalpy change).
    *   4-1: Heat addition in the boiler (represented by a rise in enthalpy at constant pressure).

**Work and Heat Transfer in the Ideal Rankine Cycle:**

*   **Pump Work Input ($W_p$):** $W_p = h_4 - h_3 = v_f (P_1 - P_2)$ (approximately, where $v_f$ is the specific volume of saturated liquid).
*   **Turbine Work Output ($W_t$):** $W_t = h_1 - h_2$.
*   **Net Work Output ($W_{net}$):** $W_{net} = W_t - W_p$.
*   **Heat Added ($Q_{in}$):** $Q_{in} = h_1 - h_3$.
*   **Heat Rejected ($Q_{out}$):** $Q_{out} = h_2 - h_3$.
*   **Thermal Efficiency ($\eta_{th}$):** $\eta_{th} = \frac{W_{net}}{Q_{in}} = \frac{W_t - W_p}{h_1 - h_3} = 1 - \frac{Q_{out}}{Q_{in}}$.

*   **CO2 Alignment:** This section directly supports CO2 by explaining the Rankine cycle, the basis of steam power plants. Calculating performance parameters is a key aspect.

### 4. Steam Power Plant Layout and Components

*   **Boiler (Steam Generator):** Heats water to produce high-pressure, high-temperature steam.
*   **Turbine:** Extracts thermal energy from the steam and converts it into mechanical rotational energy.
*   **Condenser:** Cools the exhaust steam from the turbine, converting it back into water.
*   **Pump:** Pumps the condensed water back to the boiler.
*   **Feedwater Heater:** Preheats the feedwater before it enters the boiler, improving efficiency.
*   **Economizer:** Recovers heat from flue gases to preheat feedwater.
*   **Superheater:** Heats the steam above its saturation temperature.
*   **Reheater:** Reheats steam after partial expansion in a high-pressure turbine.

*   **CO1 Alignment:** Explains the components and working of a steam power plant.

### 5. Internally Irreversible and Externally Irreversible Rankine Cycles

In reality, the Rankine cycle processes are not perfectly reversible.

#### 5.1. Internally Irreversible Rankine Cycle

*   **Cause:** Irreversibilities within the working fluid during processes. The most significant internal irreversibility occurs during **isentropic expansion in the turbine and isentropic compression in the pump**. Real turbines and pumps have inefficiencies.
*   **Effect on T-s Diagram:**
    *   **Turbine:** Instead of a vertical line (isentropic expansion), the expansion line on a T-s diagram will slope slightly to the right, indicating an increase in entropy.
    *   **Pump:** Similarly, pump compression will also lead to a slight increase in entropy.
*   **Effect on Performance:**
    *   **Turbine Work Output ($W_t$):** Reduced compared to the ideal case. $W_t = h_1 - h_{2,actual}$, where $h_{2,actual} > h_2$ (ideal).
    *   **Pump Work Input ($W_p$):** Increased compared to the ideal case. $W_p = h_{4,actual} - h_3$, where $h_{4,actual} > h_4$ (ideal).
    *   **Thermal Efficiency:** Decreases due to lower turbine work and higher pump work.

*   **Isentropic Efficiency of Turbine ($\eta_t$):** $\eta_t = \frac{Actual\;Turbine\;Work}{Isentropic\;Turbine\;Work} = \frac{h_1 - h_{2,actual}}{h_1 - h_2}$
*   **Isentropic Efficiency of Pump ($\eta_p$):** $\eta_p = \frac{Isentropic\;Pump\;Work}{Actual\;Pump\;Work} = \frac{h_{4,ideal} - h_3}{h_{4,actual} - h_3}$

#### 5.2. Externally Irreversible Rankine Cycle

*   **Cause:** Irreversibilities due to heat transfer across a finite temperature difference. This happens in the boiler, condenser, and any feedwater heaters.
*   **Effect on T-s Diagram:**
    *   **Boiler:** Heat addition occurs over a temperature range, and the line connecting the states of heat addition will not be a pure horizontal line (isobaric). The actual heat addition process will result in a lower final enthalpy or require more heat input for the same final state compared to an ideal isobaric process.
    *   **Condenser:** Similarly, heat rejection occurs across a temperature difference.
*   **Effect on Performance:**
    *   **Heat Added ($Q_{in}$):** May need to be higher to achieve the same final steam state if the heat addition is not at a constant temperature.
    *   **Heat Rejected ($Q_{out}$):** May occur at a higher temperature, impacting the efficiency.
    *   **Thermal Efficiency:** Reduced due to less effective heat transfer.

*   **Important Distinction:** While both reduce efficiency, internal irreversibilities primarily affect work output/input, and external irreversibilities primarily affect heat transfer effectiveness. In practice, both types of irreversibilities are present.

*   **CO2 Alignment:** This section is crucial for CO2 as it addresses deviations from the ideal cycle and allows for calculations of performance parameters in realistic scenarios.

### 6. Mean Temperature of Heat Addition

*   **Definition:** The equivalent constant temperature at which heat is added to the working fluid to produce the same net work output as in the actual cycle.
*   **Significance:** A higher mean temperature of heat addition leads to a higher thermal efficiency, according to Carnot's theorem.
*   **Formula:** $T_{mean, heat\,addition} = \frac{Q_{in}}{s_1 - s_3}$ (for the Rankine cycle, where $s_1$ and $s_3$ are the entropies at boiler outlet and pump outlet respectively, and $Q_{in}$ is the total heat input). On a T-s diagram, it's the average temperature weighted by entropy change.
*   **Impact on Efficiency:** $\eta_{th, Carnot} = 1 - \frac{T_{low}}{T_{mean, heat\,addition}}$. While the Rankine cycle isn't a Carnot cycle, this principle highlights the importance of maximizing the temperature at which heat is supplied.

*   **Reference:** El Wakil's book discusses this in the context of cycle improvements.

### 7. Effect of Superheat and Inlet Pressure on Rankine Cycle

#### 7.1. Effect of Superheat

*   **Superheating:** Heating steam beyond its saturation temperature at a given pressure.
*   **Process:** In the boiler, after steam is generated at saturation, it passes through a superheater where its temperature is increased at constant pressure.
*   **Impact on T-s Diagram:** The heat addition process (4-1) extends further to the right and upwards into the superheated region.
*   **Advantages:**
    *   **Increases thermal efficiency:** The mean temperature of heat addition is increased.
    *   **Reduces moisture content at turbine exhaust:** This prevents erosion of turbine blades by water droplets, improving turbine life and efficiency.
    *   **Increases specific work output:** Higher enthalpy at the turbine inlet.

*   **Example:** Comparing a cycle with saturated steam at the turbine inlet versus one with superheated steam. The superheated steam cycle will generally have higher efficiency and less wetness at the exhaust.
*   **CO2 Alignment:** Directly relates to calculating performance parameters by considering superheating.

#### 7.2. Effect of Inlet Pressure (Boiler Pressure)

*   **Process:** Increasing the boiler pressure ($P_1$) while keeping the condenser pressure ($P_2$) constant.
*   **Impact on T-s Diagram:**
    *   The saturated steam line moves to the left, meaning you need to superheat more to avoid wetness.
    *   The compression process (3-4) becomes longer (higher pressure).
    *   The expansion process (1-2) becomes steeper.
    *   The area representing heat addition ($Q_{in}$) increases.
    *   The area representing turbine work ($W_t$) generally increases more than the area representing pump work ($W_p$).
*   **Advantages:**
    *   **Increases thermal efficiency:** Higher boiler pressure generally leads to a higher mean temperature of heat addition.
    *   **Increases specific work output:** Higher initial enthalpy.
*   **Disadvantages:**
    *   **Increased moisture content at turbine exhaust:** If not accompanied by sufficient superheating, the increased pressure can lead to higher moisture content.
    *   **Higher material strength requirements:** Boilers and turbines need to withstand higher pressures, increasing capital costs.

*   **CO2 Alignment:** Essential for calculating performance parameters as pressure is a key input.

### 8. Reheating of Steam

*   **Process:** Steam is partially expanded in a high-pressure (HP) turbine, then sent back to the boiler for reheating at a constant pressure to a certain temperature. It is then expanded in a low-pressure (LP) turbine.
*   **Necessity:** To reduce moisture content in the exhaust of the LP turbine, especially at high pressure ratios (high P1, low P2), and to improve efficiency.
*   **Impact on T-s Diagram:**
    *   The expansion process (1-2) occurs in the HP turbine.
    *   Reheating adds heat at constant pressure, extending the heat addition process on the T-s diagram (2-2').
    *   The expansion continues in the LP turbine (2'-3).
    *   Condensation (3-4) and pumping (4-1) follow.
*   **Advantages:**
    *   **Reduces moisture content in the turbine exhaust:** Significantly improves turbine blade life and reduces losses.
    *   **Increases the overall thermal efficiency:** Increases the mean temperature of heat addition and the work done by the turbine.
    *   **Increases the net work output per unit mass of steam.**

*   **Disadvantages:**
    *   **Increased cost:** Requires additional equipment (reheater, extra turbine stages).
    *   **Increased pressure drop in the reheater.**

*   **CO2 Alignment:** Crucial for CO2 as it's a modification of the Rankine cycle that directly impacts performance parameter calculations.

### 9. Practice Questions and Exercises

**Question 1:**
The following data are given for an ideal Rankine cycle operating with water:
*   Boiler pressure = 3 MPa
*   Condenser pressure = 10 kPa
*   Turbine inlet temperature = 350 °C

Determine:
a) The enthalpy at each state point.
b) The pump work.
c) The turbine work.
d) The net work output.
e) The heat added.
f) The thermal efficiency.

**Solution Steps:**

1.  **State 1 (Turbine Inlet):** From steam tables, find the enthalpy ($h_1$) and entropy ($s_1$) of superheated steam at 3 MPa and 350 °C.
2.  **State 2 (Turbine Outlet):** Assume isentropic expansion, so $s_2 = s_1$. At 10 kPa, determine the quality (x) using the entropy value and the entropy of saturated liquid and vapor at 10 kPa. Then calculate $h_2 = h_f + x(h_g - h_f)$ at 10 kPa.
3.  **State 3 (Condenser Inlet / Pump Inlet):** At 10 kPa, the steam is condensed to saturated liquid. So, $h_3 = h_f$ at 10 kPa.
4.  **State 4 (Pump Outlet / Boiler Inlet):** Assume isentropic compression. The pump work is $W_p = v_f (P_1 - P_2)$, where $v_f$ is the specific volume of saturated liquid at 10 kPa. Then $h_4 = h_3 + W_p$.

**Calculations (approximate values from steam tables):**

*   State 1: $P_1 = 3$ MPa, $T_1 = 350$ °C $\implies h_1 \approx 3116.1$ kJ/kg, $s_1 \approx 6.745$ kJ/kg·K
*   State 2: $P_2 = 10$ kPa. $s_2 = s_1 = 6.745$ kJ/kg·K.
    At 10 kPa: $s_f \approx 0.6492$ kJ/kg·K, $s_g \approx 8.1487$ kJ/kg·K.
    $s_2 = s_f + x(s_g - s_f)$
    $6.745 = 0.6492 + x(8.1487 - 0.6492)$
    $x \approx 0.803$
    $h_f \approx 191.83$ kJ/kg, $h_g \approx 2583.9$ kJ/kg.
    $h_2 = h_f + x(h_g - h_f) = 191.83 + 0.803(2583.9 - 191.83) \approx 2173.8$ kJ/kg.
*   State 3: $h_3 = h_f$ at 10 kPa $\approx 191.83$ kJ/kg.
*   State 4: $v_f$ at 10 kPa $\approx 0.00101$ m³/kg.
    $W_p = v_f (P_1 - P_2) = 0.00101 \times (3 \times 10^6 - 10 \times 10^3) \approx 3020$ J/kg = 3.02 kJ/kg.
    $h_4 = h_3 + W_p = 191.83 + 3.02 = 194.85$ kJ/kg.

a) Enthalpies: $h_1 = 3116.1$ kJ/kg, $h_2 = 2173.8$ kJ/kg, $h_3 = 191.83$ kJ/kg, $h_4 = 194.85$ kJ/kg.
b) Pump work: $W_p = 3.02$ kJ/kg.
c) Turbine work: $W_t = h_1 - h_2 = 3116.1 - 2173.8 = 942.3$ kJ/kg.
d) Net work output: $W_{net} = W_t - W_p = 942.3 - 3.02 = 939.28$ kJ/kg.
e) Heat added: $Q_{in} = h_1 - h_4 = 3116.1 - 194.85 = 2921.25$ kJ/kg.
f) Thermal efficiency: $\eta_{th} = \frac{W_{net}}{Q_{in}} = \frac{939.28}{2921.25} \approx 0.3215$ or 32.15%.

**Question 2:**
How does reheating affect the thermal efficiency of the Rankine cycle? Explain with reference to the T-s diagram.

**Answer:**
Reheating generally increases the thermal efficiency of the Rankine cycle.
*   **T-s Diagram Explanation:** In a reheat cycle, steam is expanded in the HP turbine, then reheated at constant pressure before entering the LP turbine. This reheat process involves adding heat at a higher average temperature compared to the original cycle without reheat. According to thermodynamic principles (similar to Carnot efficiency), heat addition at a higher temperature leads to higher efficiency. Furthermore, reheating reduces the moisture content at the turbine exhaust, which lowers irreversibilities in the LP turbine and increases the overall work output.

**Question 3:**
What is the primary advantage of using superheated steam in a Rankine cycle?

**Answer:**
The primary advantage of using superheated steam is to **reduce the moisture content in the turbine exhaust**. This prevents erosion of turbine blades, improves turbine efficiency and longevity, and also contributes to an increase in thermal efficiency by raising the mean temperature of heat addition.

### 10. Important Points to Remember

*   **T-s and h-s diagrams are essential tools** for visualizing and analyzing steam cycles.
*   **Ideal Rankine cycle consists of four reversible processes.** Real cycles have irreversibilities in turbines, pumps, and heat exchangers.
*   **Turbine efficiency** is crucial as it produces the main work output.
*   **Pump work is generally small** compared to turbine work but still significant for overall efficiency.
*   **Superheating and reheating improve efficiency and reduce exhaust moisture.**
*   **Increasing boiler pressure and steam temperature generally increases efficiency,** but material limitations and exhaust moisture need to be considered.
*   **The mean temperature of heat addition is a key factor** influencing cycle efficiency.

This comprehensive set of notes covers the essential aspects of the Rankine cycle and its analysis, aligning with the learning outcomes and course objectives. Remember to refer to your textbooks (El Wakil, Nag) for detailed property tables, charts, and further examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
