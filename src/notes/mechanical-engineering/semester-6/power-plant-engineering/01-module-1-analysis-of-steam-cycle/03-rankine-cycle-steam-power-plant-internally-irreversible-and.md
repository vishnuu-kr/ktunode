---
title: "Rankine cycle-steam power plant, internally irreversible and"
subject: "POWER PLANT ENGINEERING"
module: "Module 1: Analysis of Steam Cycle"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463779"
status: "completed"
scrapedAt: "2026-05-20T18:06:20.103Z"
---
# POWER PLANT ENGINEERING: Module 1 - Analysis of Steam Cycle

## Topic: Rankine Cycle - Steam Power Plant, Internally Irreversible

### 1. Introduction to Steam Power Plants and the Rankine Cycle

This section introduces the fundamental concepts of steam power plants and the ideal Rankine cycle as a basis for analysis, aligning with **CO1 (K2)**.

*   **Definition:** A steam power plant is a thermal power plant that generates electricity by burning a fuel (coal, oil, gas) to heat water and produce steam. The steam then drives a turbine connected to a generator.
*   **Purpose of the Rankine Cycle:** The Rankine cycle is the thermodynamic cycle that describes the working fluid (water/steam) in a steam power plant. It represents the ideal, reversible process for converting thermal energy into mechanical work.
*   **Ideal Rankine Cycle (Reversible):**
    *   **Process 1-2: Isentropic Pumping:** Liquid water is pumped reversibly and adiabatically from the condenser pressure ($P_2$) to the boiler pressure ($P_1$).
    *   **Process 2-3: Isobaric Heat Addition:** Heat is added reversibly and at constant pressure in the boiler, converting water into superheated steam.
    *   **Process 3-4: Isentropic Expansion:** Superheated steam expands reversibly and adiabatically in the turbine, producing work.
    *   **Process 4-1: Isobaric Heat Rejection:** Heat is rejected reversibly and at constant pressure in the condenser, condensing the steam back into saturated liquid.

**Important Point:** The ideal Rankine cycle serves as a benchmark. Real-world cycles deviate due to irreversibilities.

### 2. Internally Irreversible Processes in the Rankine Cycle

This section focuses on the deviations from the ideal Rankine cycle due to internal irreversibilities, crucial for **CO2 (K3)**. We will draw from El Wakil and Nag for these explanations.

**Definition of Irreversibility:** An irreversible process is one that cannot be reversed to restore the system and its surroundings to their initial states without leaving a trace. In thermodynamic cycles, irreversibilities lead to a reduction in efficiency.

**Internal Irreversibilities:** These occur within the components of the power plant itself, affecting the state of the working fluid as it passes through.

#### 2.1. Irreversible Pumping (Deviation from 1-2s)

*   **Cause:** Friction in the pump, turbulent flow.
*   **Effect:** The pump work required is *more* than the isentropic pump work. The exit pressure is achieved, but the exit enthalpy will be slightly higher than the isentropic case due to the work input to overcome friction.
*   **T-s Diagram:** The process from the saturated liquid state to the boiler pressure will be a curve that deviates from the vertical isentropic line, leaning slightly to the right. The temperature at the end of pumping will be higher than in the isentropic case.
*   **Work Input ($W_p$):** $W_p > W_{p,s}$
*   **El Wakil (Chapter on Rankine Cycle):** Likely discusses pump inefficiencies and how they impact the specific work input.
*   **Nag (Chapter on Rankine Cycle):** Also provides detailed explanations of pump inefficiencies and their effect on the cycle.

#### 2.2. Irreversible Heat Addition in the Boiler (Deviation from 2-3)

*   **Cause:** Finite temperature difference between the combustion gases and the water/steam. Heat transfer across a finite temperature difference is irreversible.
*   **Effect:** While the boiler process aims for isobaric heat addition, the irreversibility means some of the heat added might be "lost" in terms of useful work potential. The steam quality at the boiler exit might be lower than theoretically achievable with perfect isobaric heat addition.
*   **T-s Diagram:** The heat addition line (2-3) will deviate from a perfectly horizontal isobaric line due to the irreversibility. The temperature at the end of heat addition will be higher than the ideal case for the same amount of heat added, or conversely, the final steam condition will be less superheated for the same final temperature.
*   **Nag (Chapter on Boilers):** May discuss boiler design and how heat transfer effectiveness influences steam conditions.

#### 2.3. Irreversible Expansion in the Turbine (Deviation from 3-4s)

*   **Cause:** Friction between steam and turbine blades, leakage across blades, turbulence, throttling effects.
*   **Effect:** The turbine work produced is *less* than the isentropic turbine work. The steam expands to the condenser pressure, but the exit quality (or final temperature in superheated region) will be lower than in the isentropic case.
*   **T-s Diagram:** The expansion line from the turbine inlet to the condenser pressure will deviate from the vertical isentropic line, leaning to the right. The exit enthalpy ($h_4$) will be higher than the isentropic exit enthalpy ($h_{4s}$).
*   **Turbine Efficiency ($\eta_T$):** This is a crucial parameter to quantify turbine irreversibility.
    *   $\eta_T = \frac{\text{Actual Turbine Work}}{\text{Isentropic Turbine Work}} = \frac{h_3 - h_4}{h_3 - h_{4s}}$
    *   Where $h_3$ is the enthalpy at turbine inlet, $h_4$ is the actual enthalpy at turbine outlet, and $h_{4s}$ is the enthalpy at turbine outlet if expansion were isentropic.
*   **El Wakil & Nag (Chapters on Turbines):** Provide extensive details on turbine design, losses, and efficiency.

#### 2.4. Irreversible Heat Rejection in the Condenser (Deviation from 4-1)

*   **Cause:** Finite temperature difference between the steam and the cooling water.
*   **Effect:** Similar to the boiler, heat transfer across a finite temperature difference is irreversible. The condensation process may not be perfectly isobaric, and the exit condition might be slightly subcooled rather than saturated liquid.
*   **T-s Diagram:** The heat rejection line (4-1) will deviate from a perfectly horizontal isobaric line.
*   **Nag (Chapter on Condensers):** Discusses condenser design and heat transfer performance.

### 3. Performance Analysis of Internally Irreversible Rankine Cycle

This section delves into calculating the performance parameters with internal irreversibilities, directly addressing **CO2 (K3)**.

*   **Net Work Output ($W_{net}$):**
    $W_{net} = W_{turbine} - W_{pump}$
    $W_{turbine} = h_3 - h_4$ (Actual turbine work)
    $W_{pump} = h_2 - h_1$ (Actual pump work)
*   **Heat Added ($Q_{in}$):**
    $Q_{in} = h_3 - h_2$ (Heat added in the boiler)
*   **Heat Rejected ($Q_{out}$):**
    $Q_{out} = h_4 - h_1$ (Heat rejected in the condenser)
*   **Thermal Efficiency ($\eta_{th}$):**
    $\eta_{th} = \frac{W_{net}}{Q_{in}} = \frac{W_{turbine} - W_{pump}}{h_3 - h_2}$
*   **Specific Steam Consumption (SSC):**
    $SSC = \frac{m_{steam}}{W_{net}} = \frac{1}{W_{net}}$ (for unit mass flow rate)
    It represents the mass of steam consumed per unit net work output. Lower SSC is better.
*   **Enthalpy Calculations:**
    *   $h_1$: Enthalpy of saturated liquid at condenser pressure ($P_2$). Found from steam tables.
    *   $h_2$: $h_2 = h_1 + W_{pump}$. If pump efficiency ($\eta_p$) is given: $W_{pump} = \frac{W_{p,s}}{\eta_p}$, where $W_{p,s} = v_1(P_1 - P_2)$. So, $h_2 = h_1 + \frac{v_1(P_1 - P_2)}{\eta_p}$.
    *   $h_3$: Enthalpy of superheated steam at boiler pressure ($P_1$) and inlet temperature ($T_3$). Found from steam tables.
    *   $h_{4s}$: Enthalpy at the end of isentropic expansion from state 3 to condenser pressure ($P_2$). Found using $s_4 = s_3$ and interpolation in steam tables for the condenser pressure.
    *   $h_4$: Actual enthalpy at the end of turbine expansion. $h_4 = h_3 - \eta_T (h_3 - h_{4s})$.

**Important Point:** Turbine and pump efficiencies are crucial in calculating the actual performance of an internally irreversible Rankine cycle.

### 4. Examples and Calculations

Let's work through an example to solidify understanding, aligning with **CO2 (K3)**.

**Example:**
Consider a steam power plant operating with the following conditions:
*   Boiler pressure ($P_1$): 30 bar
*   Condenser pressure ($P_2$): 0.1 bar
*   Turbine inlet temperature ($T_3$): 350°C
*   Turbine isentropic efficiency ($\eta_T$): 85% (0.85)
*   Pump isentropic efficiency ($\eta_p$): 90% (0.90)

**Find:**
a) Net work output per kg of steam
b) Heat input per kg of steam
c) Thermal efficiency

**Solution:**

**Step 1: Determine state properties using steam tables.**

*   **State 1 (Saturated liquid at $P_2 = 0.1$ bar):**
    *   From steam tables for saturated water at 0.1 bar:
        *   $h_1 = h_f = 191.8$ kJ/kg
        *   $v_1 = v_f = 0.001043$ m³/kg
        *   $s_1 = s_f = 0.6492$ kJ/kg·K

*   **State 3 (Superheated steam at $P_1 = 30$ bar, $T_3 = 350$°C):**
    *   From superheated steam tables at 30 bar and 350°C:
        *   $h_3 = 3115.3$ kJ/kg
        *   $s_3 = 7.1207$ kJ/kg·K

**Step 2: Calculate Isentropic Pump Work ($W_{p,s}$):**

*   $W_{p,s} = v_1 (P_1 - P_2)$
*   $P_1 = 30 \text{ bar} = 30 \times 10^5 \text{ Pa}$
*   $P_2 = 0.1 \text{ bar} = 0.1 \times 10^5 \text{ Pa}$
*   $W_{p,s} = 0.001043 \text{ m³/kg} \times (30 \times 10^5 \text{ Pa} - 0.1 \times 10^5 \text{ Pa})$
*   $W_{p,s} = 0.001043 \times 2.99 \times 10^6 \text{ J/kg}$
*   $W_{p,s} \approx 3.12$ kJ/kg

**Step 3: Calculate Actual Pump Work ($W_p$):**

*   $W_p = \frac{W_{p,s}}{\eta_p} = \frac{3.12 \text{ kJ/kg}}{0.90} \approx 3.47$ kJ/kg

**Step 4: Determine State 2 Properties:**

*   $h_2 = h_1 + W_p = 191.8 \text{ kJ/kg} + 3.47 \text{ kJ/kg} \approx 195.27$ kJ/kg

**Step 5: Calculate Isentropic Turbine Work ($W_{t,s}$):**

*   **Determine State 4s (Isentropic expansion):**
    *   At state 3, $s_3 = 7.1207$ kJ/kg·K. For isentropic expansion, $s_{4s} = s_3 = 7.1207$ kJ/kg·K.
    *   At condenser pressure $P_2 = 0.1$ bar:
        *   $s_f = 0.6492$ kJ/kg·K, $h_f = 191.8$ kJ/kg
        *   $s_g = 8.1488$ kJ/kg·K, $h_g = 2583.9$ kJ/kg
    *   Since $s_f < s_{4s} < s_g$, state 4s is in the two-phase region. Calculate quality ($x_{4s}$):
        *   $s_{4s} = s_f + x_{4s}(s_g - s_f)$
        *   $7.1207 = 0.6492 + x_{4s}(8.1488 - 0.6492)$
        *   $7.1207 = 0.6492 + x_{4s}(7.4996)$
        *   $x_{4s} = \frac{7.1207 - 0.6492}{7.4996} \approx 0.863$
    *   Calculate $h_{4s}$:
        *   $h_{4s} = h_f + x_{4s}(h_g - h_f)$
        *   $h_{4s} = 191.8 + 0.863(2583.9 - 191.8)$
        *   $h_{4s} = 191.8 + 0.863(2392.1)$
        *   $h_{4s} \approx 191.8 + 2065.5 \approx 2257.3$ kJ/kg
*   $W_{t,s} = h_3 - h_{4s} = 3115.3 \text{ kJ/kg} - 2257.3 \text{ kJ/kg} = 858.0$ kJ/kg

**Step 6: Calculate Actual Turbine Work ($W_t$):**

*   $W_t = \eta_T \times W_{t,s} = 0.85 \times 858.0 \text{ kJ/kg} \approx 729.3$ kJ/kg

**Step 7: Calculate Net Work Output ($W_{net}$):**

*   $W_{net} = W_t - W_p = 729.3 \text{ kJ/kg} - 3.47 \text{ kJ/kg} \approx 725.83$ kJ/kg

**Step 8: Calculate Heat Input ($Q_{in}$):**

*   $Q_{in} = h_3 - h_2 = 3115.3 \text{ kJ/kg} - 195.27 \text{ kJ/kg} \approx 2920.03$ kJ/kg

**Step 9: Calculate Thermal Efficiency ($\eta_{th}$):**

*   $\eta_{th} = \frac{W_{net}}{Q_{in}} = \frac{725.83 \text{ kJ/kg}}{2920.03 \text{ kJ/kg}} \approx 0.2486$ or 24.86%

**Answers:**
a) Net work output per kg of steam = 725.83 kJ/kg
b) Heat input per kg of steam = 2920.03 kJ/kg
c) Thermal efficiency = 24.86%

### 5. Practice Questions and Exercises

These questions help reinforce the understanding of **CO2 (K3)**.

**Question 1:**
A steam power plant operates on a Rankine cycle. Steam enters the turbine at 300°C and 100 bar. The condenser pressure is 0.05 bar. The turbine and pump efficiencies are 88% and 95% respectively. Calculate:
(i) The net work output.
(ii) The thermal efficiency of the cycle.
(iii) The specific steam consumption.
*(Assume you have access to steam tables.)*

**Answer 1:**
*(Steps involved are similar to the example. You would look up properties at state 3, calculate isentropic pump work, actual pump work, state 2 enthalpy. Then calculate isentropic turbine work, actual turbine work using turbine efficiency, and finally net work and efficiency.)*

*   **State 1 (Saturated liquid at 0.05 bar):** $h_1 \approx 137.8$ kJ/kg, $v_1 \approx 0.001006$ m³/kg
*   **State 3 (Superheated steam at 100 bar, 300°C):** $h_3 \approx 2959.6$ kJ/kg, $s_3 \approx 6.5698$ kJ/kg·K
*   **Isentropic Pump Work ($W_{p,s}$):** $W_{p,s} = v_1 (P_1 - P_2) \approx 0.001006 \times (100 \times 10^5 - 0.05 \times 10^5) \approx 10.01$ kJ/kg
*   **Actual Pump Work ($W_p$):** $W_p = W_{p,s} / \eta_p = 10.01 / 0.95 \approx 10.54$ kJ/kg
*   **State 2 Enthalpy ($h_2$):** $h_2 = h_1 + W_p = 137.8 + 10.54 = 148.34$ kJ/kg
*   **Isentropic Turbine Work ($W_{t,s}$):**
    *   At 0.05 bar: $s_f = 0.5707$, $h_f = 137.8$; $s_g = 8.4503$, $h_g = 2561.3$.
    *   $s_{4s} = s_3 = 6.5698$. Calculate $x_{4s} = (6.5698 - 0.5707) / (8.4503 - 0.5707) \approx 0.804$.
    *   $h_{4s} = h_f + x_{4s}(h_g - h_f) \approx 137.8 + 0.804(2561.3 - 137.8) \approx 137.8 + 1939.1 \approx 2076.9$ kJ/kg.
    *   $W_{t,s} = h_3 - h_{4s} = 2959.6 - 2076.9 = 882.7$ kJ/kg
*   **Actual Turbine Work ($W_t$):** $W_t = \eta_T \times W_{t,s} = 0.88 \times 882.7 \approx 776.8$ kJ/kg
*   **Net Work Output ($W_{net}$):** $W_{net} = W_t - W_p = 776.8 - 10.54 \approx 766.26$ kJ/kg
*   **Heat Input ($Q_{in}$):** $Q_{in} = h_3 - h_2 = 2959.6 - 148.34 \approx 2811.26$ kJ/kg
*   **Thermal Efficiency ($\eta_{th}$):** $\eta_{th} = W_{net} / Q_{in} = 766.26 / 2811.26 \approx 0.2726$ or 27.26%
*   **Specific Steam Consumption (SSC):** $SSC = 1 / W_{net} \approx 1 / 766.26 \approx 0.001305$ kg/kJ = 1.305 g/kJ. (Or in kg/kWh: $3600 / 766.26 \approx 4.70$ kg/kWh)

**Question 2:**
How do pump and turbine efficiencies affect the thermal efficiency of the Rankine cycle? Explain with reasoning.

**Answer 2:**
*   **Pump Efficiency:** A lower pump efficiency means more work is required to pump the water. This increases the pump work ($W_p$), which reduces the net work output ($W_{net} = W_t - W_p$). Since heat input ($Q_{in}$) remains largely unchanged, a lower net work output leads to a lower thermal efficiency ($\eta_{th} = W_{net} / Q_{in}$).
*   **Turbine Efficiency:** A lower turbine efficiency means less actual work is produced by the turbine for the same inlet and outlet pressure conditions. This reduces the turbine work ($W_t$). Consequently, the net work output ($W_{net} = W_t - W_p$) decreases. Again, with $Q_{in}$ largely unchanged, a lower net work output results in a lower thermal efficiency.

### 6. Important Points to Remember

*   **Irreversibilities reduce efficiency:** Internal irreversibilities in the pump and turbine lead to lower actual work output compared to the ideal (isentropic) case.
*   **Turbine efficiency ($\eta_T$) is critical:** It directly impacts the net work output, as turbines handle a significant portion of the cycle's work. Typical $\eta_T$ values are 80-90%.
*   **Pump efficiency ($\eta_p$) is also important:** While pump work is much smaller than turbine work, pump inefficiency still contributes to a reduction in net work. Typical $\eta_p$ values are 85-95%.
*   **T-s Diagram interpretation:** Deviations from isentropic lines (leaning to the right) indicate irreversibility and higher enthalpy at the end of the process (for expansion) or higher temperature (for pumping), meaning more energy is needed or less energy is produced.
*   **Steam tables are essential:** Accurate property data is required for all calculations.
*   **Specific Steam Consumption (SSC):** A key performance indicator, representing the steam required per unit of work. Lower SSC means better performance.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 7. Textbooks and Reference Book Content Integration

The notes above have been structured to reflect the typical content found in:

*   **M. M. El Wakil, "Power Plant Technology":** This book is comprehensive and would detail the fundamental thermodynamic principles of the Rankine cycle, including the impact of various irreversibilities like friction and finite temperature differences. Specific chapters on steam power plant cycles, turbines, and boilers would provide the theoretical basis.
*   **P. K. Nag, "Power Plant Engineering":** Nag's book is known for its practical approach. It would cover the Rankine cycle with detailed explanations of irreversibilities, turbine and pump efficiencies, and numerous solved examples and practice problems, similar to the example and questions provided. The discussion of components like boilers, turbines, and condensers would naturally incorporate how irreversibilities manifest within them.
*   **G. R. Nagpal, S. C. Sharma, "Power Plant Engineering":** These authors would also likely cover the Rankine cycle in detail, emphasizing the practical aspects and the calculation of performance parameters under non-ideal conditions.
*   **Manoj Kumar Gupta, "Power Plant Engineering":** This reference would further support the understanding of the Rankine cycle, its modifications, and the impact of irreversibilities on efficiency and other performance metrics, possibly with a focus on design considerations that influence these factors.

### 8. Alignment with Course Outcomes

*   **CO1 (K2):** The introduction to steam power plants and the Rankine cycle (Section 1) addresses the layout, components (implicitly through cycle description), and working of steam power plants at a knowledge level.
*   **CO2 (K3):** The entire focus of sections 2, 3, and 5 is on calculating performance parameters of the Rankine cycle, specifically addressing the impact of internal irreversibilities. The detailed calculations and examples directly align with this outcome at a synthesis/application level (K3).
*   **CO3 (K3):** While the primary focus is the cycle, the turbine efficiency calculation (Section 3 and Example) directly relates to the performance of steam turbines. A deeper dive into turbine stage efficiencies and losses would be in subsequent modules but is initiated here.
*   **CO4 (K2) & CO5 (K2):** These outcomes are not directly addressed in this specific topic, which is focused solely on the thermodynamic analysis of the Rankine cycle itself. They would be covered in other modules related to energy storage, economics, and environmental aspects of power generation.

This comprehensive study note covers the Rankine cycle in steam power plants with a focus on internal irreversibilities, providing theoretical background, practical calculations, and reinforcing learning through examples and practice questions, all grounded in the specified literature.