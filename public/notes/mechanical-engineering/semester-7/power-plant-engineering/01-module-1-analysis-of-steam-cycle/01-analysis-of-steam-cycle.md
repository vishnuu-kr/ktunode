---
title: "Analysis of Steam Cycle"
subject: "POWER PLANT ENGINEERING"
module: "Module 1: Analysis of Steam Cycle"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1951d0cf4804464399"
status: "completed"
scrapedAt: "2026-05-20T18:16:08.650Z"
---
# Power Plant Engineering: Module 1 - Analysis of Steam Cycle

## Introduction to Power Plants and Steam Cycles

This module provides a foundational understanding of power plants, with a primary focus on the analysis of steam cycles. Steam cycles are the backbone of most thermal power plants, converting thermal energy into mechanical work, which is then transformed into electrical energy.

### **Learning Outcomes Addressed:**

*   **CO1 (K2):** Explain the layout, components and working of steam, gas, hydro, and nuclear power plants. (This module will primarily focus on steam power plants, laying the groundwork for understanding other types in subsequent modules.)
*   **CO2 (K3):** Calculate the performance parameters of simple and modified Rankine cycles.
*   **CO3 (K3):** Calculate the performance parameters of steam turbines and steam nozzles. (While this module focuses on the cycle, understanding the turbine and nozzle performance is crucial for overall cycle analysis and efficiency.)

### **Key Concepts and Definitions:**

*   **Power Plant:** A facility designed to generate electrical energy from various primary energy sources.
*   **Steam Power Plant:** A power plant that utilizes the Rankine cycle to produce electricity by heating water to produce steam, which drives a turbine.
*   **Thermal Power Plant:** A broader category that includes steam, gas turbine, and combined cycle power plants, all of which convert thermal energy into electricity.
*   **Thermodynamic Cycle:** A series of thermodynamic processes that return a working fluid to its initial state.
*   **Working Fluid:** The substance that circulates through a thermodynamic cycle and undergoes phase changes or temperature/pressure variations to produce work. In steam cycles, this is typically water/steam.
*   **Efficiency:** A measure of how effectively a system converts input energy into useful output energy. For thermodynamic cycles, this is often expressed as thermal efficiency.

---

## The Ideal Rankine Cycle (Simple Steam Cycle)

The Rankine cycle is the theoretical thermodynamic cycle upon which steam power plants operate. It represents the most efficient cycle for converting heat into work using a vapor. Understanding the ideal Rankine cycle is crucial before delving into real-world modifications and complexities.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### **Textbook Reference:**

*   **El Wakil, M. M. (2017). *Power Plant Technology*. (pp. 100-110)**: Provides a detailed theoretical treatment of the Rankine cycle, including thermodynamic analysis and ideal process descriptions.
*   **Nag, P. K. (2017). *Power Plant Engineering*. (pp. 40-55)**: Offers a clear explanation of the Rankine cycle, its T-s and h-s diagrams, and the individual processes.

### **Processes of the Ideal Rankine Cycle:**

The ideal Rankine cycle consists of four reversible processes:

1.  **Isentropic Pumping (Process 1-2):**
    *   **Description:** Liquid water is pumped from a low pressure ($P_1$) to a high pressure ($P_2$). This process is assumed to be isentropic (reversible adiabatic), meaning no heat is added or rejected, and entropy remains constant.
    *   **Component:** Feedwater Pump
    *   **Work Input:** $W_{pump,in} = \int_{P_1}^{P_2} v dP \approx v_f (P_2 - P_1)$
    *   **T-s Diagram:** Vertical line.
    *   **h-s Diagram:** Vertical line.

2.  **Isobaric Heat Addition (Process 2-3):**
    *   **Description:** Water at high pressure is heated in a boiler to become saturated vapor, and then further superheated to a high temperature ($T_3$) at constant pressure ($P_2$). This is where heat is absorbed from the combustion of fuel.
    *   **Component:** Boiler (including economizer, evaporator, superheater)
    *   **Heat Input:** $Q_{in} = h_3 - h_2$
    *   **T-s Diagram:** Horizontal line at $P_2$.
    *   **h-s Diagram:** Curve representing heat addition.

3.  **Isentropic Expansion (Process 3-4):**
    *   **Description:** High-pressure, high-temperature steam expands through a turbine, producing work. This process is assumed to be isentropic.
    *   **Component:** Steam Turbine
    *   **Work Output:** $W_{turbine,out} = h_3 - h_4$
    *   **T-s Diagram:** Vertical line.
    *   **h-s Diagram:** Vertical line.

4.  **Isobaric Heat Rejection (Process 4-1):**
    *   **Description:** Low-pressure steam from the turbine is condensed into saturated liquid at constant pressure ($P_1$) by rejecting heat to a cooling medium (e.g., river, lake, or cooling tower).
    *   **Component:** Condenser
    *   **Heat Output:** $Q_{out} = h_4 - h_1$
    *   **T-s Diagram:** Horizontal line at $P_1$.
    *   **h-s Diagram:** Curve representing heat rejection.

### **Performance Parameters of the Ideal Rankine Cycle:**

*   **Thermal Efficiency ($\eta_{th}$):** The ratio of the net work output to the heat input.
    $\eta_{th} = \frac{W_{net}}{Q_{in}} = \frac{W_{turbine,out} - W_{pump,in}}{Q_{in}}$
    $\eta_{th} = \frac{(h_3 - h_4) - (h_2 - h_1)}{h_3 - h_2}$

*   **Net Work Output ($W_{net}$):** The difference between the work produced by the turbine and the work consumed by the pump.
    $W_{net} = W_{turbine,out} - W_{pump,in} = (h_3 - h_4) - (h_2 - h_1)$

*   **Specific Steam Consumption (SSC):** The amount of steam required per unit of net work output.
    $SSC = \frac{1}{W_{net}} = \frac{1}{h_3 - h_4 - (h_2 - h_1)}$ (kJ/kJ or kg/kWh)
    *Note: For kg/kWh, the numerator should be in kJ/kg and the denominator in kJ/kg. Convert W_net to kJ/s, then multiply by 3600 s/h to get kJ/h.*

*   **Heat Rate:** The amount of heat input required to produce a unit of electrical energy. It's the reciprocal of thermal efficiency, expressed in energy units per unit of electrical energy.
    Heat Rate $= \frac{Q_{in}}{W_{net}} = \frac{1}{\eta_{th}}$ (kJ/kJ or BTU/kWh)

### **Important Points to Remember:**

*   The ideal Rankine cycle assumes reversible processes, which are not achievable in reality.
*   The pump work is generally much smaller than the turbine work.
*   Efficiency increases with higher boiler pressure and temperature, and lower condenser pressure.

### **Example Calculation (Ideal Rankine Cycle):**

Consider a simple ideal Rankine cycle with the following conditions:

*   Boiler pressure: $P_2 = 3$ MPa
*   Boiler temperature: $T_3 = 350^\circ$C
*   Condenser pressure: $P_1 = 10$ kPa

**Steps:**

1.  **Determine properties at each state:**
    *   **State 1 (Saturated Liquid at 10 kPa):** From steam tables, $h_1 = h_f @ 10 \text{ kPa} = 191.81 \text{ kJ/kg}$ and $v_1 = v_f @ 10 \text{ kPa} = 0.001010 \text{ m}^3/\text{kg}$.
    *   **State 2 (Pump Outlet):**
        *   Pump work: $W_{pump,in} \approx v_1 (P_2 - P_1) = 0.001010 \text{ m}^3/\text{kg} \times (3000 \text{ kPa} - 10 \text{ kPa}) = 0.001010 \times 2990 = 3.02 \text{ kJ/kg}$.
        *   $h_2 = h_1 + W_{pump,in} = 191.81 + 3.02 = 194.83 \text{ kJ/kg}$.
    *   **State 3 (Turbine Inlet):** From superheated steam tables at $P = 3$ MPa and $T = 350^\circ$C, $h_3 = 3115.3 \text{ kJ/kg}$.
    *   **State 4 (Turbine Outlet):** This state is on the saturated vapor line at $P_1 = 10$ kPa. We use isentropic expansion, so $s_4 = s_3$.
        *   From superheated steam tables at $P = 3$ MPa and $T = 350^\circ$C, $s_3 = 6.7445 \text{ kJ/kg} \cdot \text{K}$.
        *   At $P_1 = 10$ kPa, $s_f = 0.6492 \text{ kJ/kg} \cdot \text{K}$ and $s_g = 8.1488 \text{ kJ/kg} \cdot \text{K}$.
        *   Calculate quality ($x_4$): $s_4 = s_f + x_4 (s_g - s_f)$
            $6.7445 = 0.6492 + x_4 (8.1488 - 0.6492)$
            $x_4 = \frac{6.7445 - 0.6492}{7.4996} = 0.813 \approx 81.3\%$
        *   Calculate enthalpy ($h_4$): $h_4 = h_f + x_4 (h_g - h_f)$
            At 10 kPa, $h_f = 191.81 \text{ kJ/kg}$ and $h_g = 2392.8 \text{ kJ/kg}$.
            $h_4 = 191.81 + 0.813 (2392.8 - 191.81) = 191.81 + 0.813 \times 2190.99 = 191.81 + 1781.28 = 1973.09 \text{ kJ/kg}$.

2.  **Calculate Performance Parameters:**
    *   **Turbine Work:** $W_{turbine,out} = h_3 - h_4 = 3115.3 - 1973.09 = 1142.21 \text{ kJ/kg}$.
    *   **Net Work:** $W_{net} = W_{turbine,out} - W_{pump,in} = 1142.21 - 3.02 = 1139.19 \text{ kJ/kg}$.
    *   **Heat Input:** $Q_{in} = h_3 - h_2 = 3115.3 - 194.83 = 2920.47 \text{ kJ/kg}$.
    *   **Thermal Efficiency:** $\eta_{th} = \frac{W_{net}}{Q_{in}} = \frac{1139.19}{2920.47} \approx 0.389$ or $38.9\%$.
    *   **Specific Steam Consumption (kg/kWh):**
        $W_{net} \text{ in kJ/s} = 1139.19 \text{ kJ/kg}$
        $W_{net} \text{ in kJ/kWh} = 1139.19 \text{ kJ/kg} \times 3600 \text{ s/h} = 4101084 \text{ kJ/kWh}$
        $SSC = \frac{1}{W_{net} \text{ in kJ/kWh}} = \frac{3600}{1139.19} \approx 3.16 \text{ kg/kWh}$.

---

## Modifications to the Simple Rankine Cycle

The ideal Rankine cycle, while a good starting point, has limitations that reduce its actual efficiency. Several modifications are employed in real power plants to improve performance.

### **Textbook Reference:**

*   **El Wakil, M. M. (2017). *Power Plant Technology*. (pp. 110-135)**: Discusses various improvements to the Rankine cycle, including reheating, regenerative feedwater heating, and supercritical cycles.
*   **Nag, P. K. (2017). *Power Plant Engineering*. (pp. 55-85)**: Provides detailed explanations and analyses of reheat, regeneration, and their effects on cycle efficiency.

### **1. Reheating**

*   **Purpose:** To improve the efficiency and reduce the moisture content in the turbine at the exhaust, preventing damage to turbine blades.
*   **Description:** After partial expansion in the high-pressure (HP) turbine, the steam is reheated in a separate section of the boiler to a higher temperature before it enters the low-pressure (LP) turbine for further expansion.
*   **T-s Diagram:** The heat addition process is split into two parts (2-3 and 4-5), with an isentropic expansion from 3 to 4, followed by heat addition at constant pressure (reheating) from 4 to 5, and then isentropic expansion from 5 to 6.
*   **Performance Impact:**
    *   Increases the average temperature at which heat is supplied, thereby increasing thermal efficiency.
    *   Reduces the moisture content at the turbine exhaust, which is beneficial for turbine blading.
    *   Increases the work output if the reheat temperature is sufficiently high.

*   **Formulae (Reheat Cycle):**
    *   $Q_{in} = (h_3 - h_2) + (h_5 - h_4)$
    *   $W_{turbine,out} = (h_3 - h_4) + (h_5 - h_6)$
    *   $W_{pump,in} = h_2 - h_1$ (assuming a single stage pump)
    *   $\eta_{th} = \frac{W_{net}}{Q_{in}} = \frac{(h_3 - h_4) + (h_5 - h_6) - (h_2 - h_1)}{(h_3 - h_2) + (h_5 - h_4)}$

### **2. Regenerative Feedwater Heating**

*   **Purpose:** To improve cycle efficiency by preheating the feedwater entering the boiler using steam extracted from the turbine.
*   **Description:** A portion of the steam is extracted from the turbine at various stages and used to heat the feedwater in feedwater heaters. This reduces the amount of fuel required to heat the water in the boiler.
*   **Types of Feedwater Heaters:**
    *   **Open Feedwater Heaters:** The extracted steam mixes directly with the feedwater, and the heat is transferred. They operate at constant pressure and are usually less expensive.
    *   **Closed Feedwater Heaters:** The extracted steam and feedwater flow through separate passages, separated by a heat transfer surface. They operate at different pressures.
*   **T-s Diagram:** The heat input ($Q_{in}$) is reduced because some of the steam (which would normally condense and be pumped) is used for heating. The feedwater heating process is shown as a series of steps where entropy increases.
*   **Performance Impact:**
    *   Increases thermal efficiency by raising the average temperature of heat addition and reducing heat rejection in the condenser.
    *   Reduces the work required from the boiler, as the feedwater is partially heated before entering it.
    *   The optimal number of feedwater heaters depends on economic considerations and the desired efficiency improvement.

*   **Formulae (Regenerative Cycle with one open feedwater heater):**
    *   Let extraction point be at state 'e'.
    *   $W_{turbine,out} = (h_3 - h_e) + (h_e - h_4)$ (This is the total turbine work, assuming expansion to state 4 before condensation)
    *   $W_{pump,in} = y(h_{e'} - h_1) + (1-y)(h_2 - h_{e'})$
        *   Where 'y' is the fraction of steam extracted at state 'e'.
        *   $h_{e'}$ is the enthalpy of the feedwater leaving the heater at the extraction pressure.
        *   $h_2$ is the enthalpy after pumping to boiler pressure.
    *   $Q_{in} = (h_3 - h_2)$ (Assuming the entire feedwater enters the boiler as state 2, which is actually $h_{e'}$ for the remaining flow)
    *   Correct $Q_{in}$ is the heat added in the boiler to the feedwater from state $h_{e'}$ to $h_3$: $Q_{in} = (1-y)(h_3 - h_{e'}) + y(h_3 - h_{e'})$ which simplifies to $Q_{in} = h_3 - h_{e'}$.  This is incorrect.
    *   **Correct $Q_{in}$:** The heat added in the boiler is to the portion of the working fluid that goes through the boiler. This portion is $(1-y)$ of the total mass flow. The feedwater enters the boiler at state $h_{e'}$.
        $Q_{in} = (1-y)(h_3 - h_{e'})$
    *   **Correct $Q_{out}$:** The heat rejected in the condenser is by the remaining steam $(1-y)$ from state 4.
        $Q_{out} = (1-y)(h_4 - h_1)$
    *   **Turbine Work:** The total steam passing through the turbine is 1 unit. Work from HP turbine is $(h_3 - h_e)$. Work from LP turbine is $(1-y)(h_e - h_4)$.
        $W_{turbine,out} = (h_3 - h_e) + (1-y)(h_e - h_4)$
    *   **Pump Work:** For the entire flow (1 unit), it's pumped from state 1 to $h_{e'}$. For the extracted portion $(y)$ it is pumped from $h_1$ to $h_{e'}$.
        *   This becomes complicated with multiple heaters and phase changes within heaters.
        *   **Simplified Approach:** Consider the flow. For the segment from 1 to $e'$, the flow is 1 unit. For the segment from $e'$ to 2, the flow is $(1-y)$ units.
        *   $W_{pump,in} = 1 \times (h_{e'} - h_1) + y \times (\text{pump work for extracted steam})$  <- This is not how it works.
        *   **Correct Approach for Pump Work:** The entire flow of $(1)$ unit starts at state 1 and is pumped to state $e'$. Then, the $(1-y)$ portion is pumped from $h_{e'}$ to state 2 (boiler pressure). The $(y)$ portion is mixed at $h_{e'}$.
        *   $W_{pump,in} = (h_{e'} - h_1) + (1-y)(h_2 - h_{e'})$
    *   **Net Work:** $W_{net} = W_{turbine,out} - W_{pump,in}$
    *   **Thermal Efficiency:** $\eta_{th} = \frac{W_{net}}{Q_{in}}$

    *   **Energy Balance in Open Feedwater Heater:**
        $y(h_e) + (1-y)(h_{e'}) = h_{e'}$ (This assumes the extracted steam is saturated)
        If extracted steam is superheated, $h_e$ is its enthalpy.
        $y(h_e) + (1-y)(h_{e'}) = h_{e'}$

    *   **Mass Balance in Open Feedwater Heater:**
        Mass of steam from turbine at extraction point = Mass of extracted steam = $y$
        Mass of feedwater entering heater = $(1-y)$
        Mass of feedwater leaving heater = $1$

### **3. Combined Reheat and Regenerative Cycles**

*   **Description:** Real power plants often combine both reheating and regenerative feedwater heating to achieve higher efficiencies.
*   **Performance Impact:** Offers the advantages of both methods, leading to significant improvements in thermal efficiency compared to the simple Rankine cycle.

### **4. Supercritical and Ultra-Supercritical Rankine Cycles**

*   **Description:** These cycles operate at pressures and temperatures above the critical point of water (22.1 MPa, 374.15$^\circ$C). In these cycles, water no longer undergoes a distinct phase change during heating; it transitions directly from a subcritical liquid to a supercritical fluid.
*   **Performance Impact:**
    *   Higher operating temperatures and pressures lead to significantly higher thermal efficiencies (often exceeding 45-50% for ultra-supercritical plants).
    *   Eliminates the need for a condenser in the strict sense as there is no distinct saturated vapor.
    *   Requires advanced materials and engineering due to high pressures and temperatures.

---

## Steam Turbines and Nozzles

While the focus of this module is the cycle, the performance of the turbine and nozzles within the cycle is critical for overall power generation efficiency.

### **Textbook Reference:**

*   **El Wakil, M. M. (2017). *Power Plant Technology*. (pp. 240-270)**: Covers the fundamentals of steam turbines, including impulse and reaction principles, stages, and efficiency.
*   **Nag, P. K. (2017). *Power Plant Engineering*. (pp. 120-150)**: Details the types of steam turbines, nozzle theory, and efficiency calculations.
*   **Nagpal, G. R., Sharma, S. C. (2012). *Power Plant Engineering*. (pp. 105-130)**: Provides a good overview of turbine design considerations and nozzle behavior.

### **Key Concepts and Definitions:**

*   **Steam Turbine:** A rotary mechanical device that extracts thermal energy from pressurized steam and uses it to do mechanical work on a rotating output shaft.
*   **Nozzle:** A duct of varying cross-sectional area designed to accelerate a fluid, converting its thermal energy (pressure and temperature) into kinetic energy.
*   **Isentropic Efficiency of Turbine ($\eta_{turbine}$):** The ratio of the actual work output to the isentropic work output.
    $\eta_{turbine} = \frac{W_{actual}}{W_{isentropic}} = \frac{h_3 - h_{4,actual}}{h_3 - h_4}$
*   **Isentropic Efficiency of Nozzle ($\eta_{nozzle}$):** The ratio of the kinetic energy of the steam at the nozzle exit under actual conditions to the kinetic energy under isentropic conditions.
    $\eta_{nozzle} = \frac{V_{actual}^2 / 2}{V_{isentropic}^2 / 2} = \frac{h_3 - h_{4,actual}}{h_3 - h_4}$
    *Note: For nozzles, the pump work is negligible, so $h_2 \approx h_1$.*

### **Types of Steam Turbines:**

1.  **Impulse Turbines:**
    *   The pressure drop occurs entirely in stationary nozzles.
    *   The steam jet impinges on the moving blades, causing them to rotate.
    *   No pressure drop across the moving blades.
    *   Example: Curtis Turbine, Rateau Turbine.

2.  **Reaction Turbines:**
    *   Pressure drop occurs in both stationary and moving blades.
    *   The moving blades act as nozzles, accelerating the steam.
    *   Example: Parsons Turbine.

### **Nozzle Theory:**

*   **Convergent Nozzle:** Used for subsonic flow. The area increases in the direction of flow.
*   **Convergent-Divergent (De Laval) Nozzle:** Used for supersonic flow. It first converges to a throat and then diverges.
    *   **Throat:** The point of minimum area where the flow velocity reaches Mach 1 (sonic velocity).
    *   **Subsonic Flow (Convergent Section):** Velocity increases, pressure and temperature decrease.
    *   **Supersonic Flow (Divergent Section):** Velocity increases, pressure and temperature decrease further.

*   **Mach Number (M):** The ratio of the fluid velocity to the speed of sound in the fluid. $M = V/c$, where $c = \sqrt{\gamma R T}$.
*   **Velocity of Sound (c):** $c = \sqrt{\gamma R T}$ where $\gamma$ is the specific heat ratio, $R$ is the gas constant for steam, and $T$ is the temperature in Kelvin.

### **Performance Parameters:**

*   **Blade Velocity ($u$):** The tangential speed of the turbine blades.
*   **Steam Velocity ($V$):** The absolute velocity of the steam entering or leaving the blades.
*   **Blade Angles:** Angles at which the steam enters and leaves the blades.
*   **Force on Blades:** Depends on the change in momentum of the steam.
*   **Work Done per Unit Mass Flow Rate:** Related to the change in tangential component of velocity of steam as it passes through the blades.

### **Practice Questions/Exercises (CO2):**

1.  A steam power plant operates on an ideal Rankine cycle with the following parameters:
    *   Boiler pressure: 5 MPa
    *   Boiler temperature: 450$^\circ$C
    *   Condenser pressure: 8 kPa
    Calculate:
    a) The thermal efficiency of the cycle.
    b) The specific steam consumption in kg/kWh.
    c) The heat supplied in the boiler.

    **Answer:**
    *   *Requires looking up steam table values for the given pressures and temperatures.*
    *   *Assuming appropriate steam table data:*
        *   State 1 (Saturated liquid at 8 kPa): $h_1 \approx 170.21$ kJ/kg, $v_1 \approx 0.001008$ m³/kg.
        *   $W_{pump,in} \approx v_1(P_2 - P_1) = 0.001008(5000 - 8) \approx 5.03$ kJ/kg. $h_2 \approx 170.21 + 5.03 = 175.24$ kJ/kg.
        *   State 3 (Superheated at 5 MPa, 450$^\circ$C): $h_3 \approx 3316.4$ kJ/kg, $s_3 \approx 6.5671$ kJ/kg$\cdot$K.
        *   State 4 (Isentropic expansion to 8 kPa): $s_4 = s_3 = 6.5671$ kJ/kg$\cdot$K.
            At 8 kPa: $s_f = 0.5742$, $s_g = 8.2258$; $h_f = 170.21$, $h_g = 2347.8$.
            $x_4 = (6.5671 - 0.5742) / (8.2258 - 0.5742) \approx 0.818$.
            $h_4 = 170.21 + 0.818(2347.8 - 170.21) \approx 170.21 + 0.818 \times 2177.59 \approx 170.21 + 1781.07 \approx 1951.28$ kJ/kg.
        *   a) $\eta_{th} = \frac{(3316.4 - 1951.28) - 5.03}{3316.4 - 175.24} = \frac{1365.12 - 5.03}{3141.16} = \frac{1360.09}{3141.16} \approx 0.433$ or $43.3\%$.
        *   b) SSC $= \frac{3600}{1360.09} \approx 2.65$ kg/kWh.
        *   c) $Q_{in} = 3141.16$ kJ/kg.

2.  In a reheat cycle, steam is expanded in the HP turbine from 10 MPa, 500$^\circ$C to 2 MPa. It is then reheated to 400$^\circ$C and expanded to 5 kPa in the LP turbine. Calculate the thermal efficiency and net work output, assuming ideal processes and a single feedwater pump operating isentropically.

    **Answer:**
    *   *This question requires analyzing the reheat cycle components and using steam tables.*
    *   *State 1 (Saturated Liquid at 5 kPa): $h_1 \approx 170.21$ kJ/kg, $v_1 \approx 0.001008$ m³/kg.*
    *   *State 2 (Pump Outlet): $W_{pump,in} \approx v_1(P_{HP} - P_{LP}) = 0.001008(10000 - 5) \approx 10.07$ kJ/kg. $h_2 \approx 170.21 + 10.07 = 180.28$ kJ/kg.*
    *   *State 3 (HP Turbine Inlet): At 10 MPa, 500$^\circ$C. $h_3 \approx 3375.3$ kJ/kg, $s_3 \approx 6.6356$ kJ/kg$\cdot$K.*
    *   *State 4 (HP Turbine Outlet/Reheater Inlet): Isentropic expansion to 2 MPa. $s_4 = s_3 = 6.6356$ kJ/kg$\cdot$K.*
        *   At 2 MPa: $s_f = 5.3383$, $s_g = 6.5719$. Since $s_4 > s_g$, steam is superheated.
        *   Using interpolation or steam tables for superheated steam at 2 MPa with $s=6.6356$: $h_4 \approx 2898.2$ kJ/kg.
    *   *State 5 (LP Turbine Inlet/Reheater Outlet): At 2 MPa, 400$^\circ$C. $h_5 \approx 3247.6$ kJ/kg, $s_5 \approx 7.1081$ kJ/kg$\cdot$K.*
    *   *State 6 (LP Turbine Outlet): Isentropic expansion to 5 kPa. $s_6 = s_5 = 7.1081$ kJ/kg$\cdot$K.*
        *   At 5 kPa: $s_f = 0.5742$, $s_g = 8.2258$; $h_f = 170.21$, $h_g = 2347.8$.
        *   $x_6 = (7.1081 - 0.5742) / (8.2258 - 0.5742) \approx 0.871$.
        *   $h_6 = 170.21 + 0.871(2347.8 - 170.21) \approx 170.21 + 0.871 \times 2177.59 \approx 170.21 + 1896.49 \approx 2066.7$ kJ/kg.
    *   *Turbine Work:* $W_{turbine,out} = (h_3 - h_4) + (h_5 - h_6) = (3375.3 - 2898.2) + (3247.6 - 2066.7) = 477.1 + 1180.9 = 1658$ kJ/kg.
    *   *Net Work:* $W_{net} = W_{turbine,out} - W_{pump,in} = 1658 - 10.07 \approx 1647.93$ kJ/kg.
    *   *Heat Input:* $Q_{in} = (h_3 - h_2) + (h_5 - h_4) = (3375.3 - 180.28) + (3247.6 - 2898.2) = 3195.02 + 349.4 = 3544.42$ kJ/kg.
    *   *Thermal Efficiency:* $\eta_{th} = \frac{1647.93}{3544.42} \approx 0.465$ or $46.5\%$.

---

## Practice Questions/Exercises (CO1 - General Layout)

1.  Describe the main components of a steam power plant and their function in the Rankine cycle. (K2)
    **Answer:**
    *   **Boiler:** Heats water to produce high-pressure, high-temperature steam. Consists of economizer (preheats feedwater), evaporator (generates steam), and superheater (superheats steam).
    *   **Turbine:** Converts the thermal energy of steam into mechanical energy by rotating a shaft.
    *   **Condenser:** Condenses the exhaust steam from the turbine into liquid water by rejecting heat to a cooling medium.
    *   **Feedwater Pump:** Pumps the condensed water (feedwater) back to the boiler at high pressure.
    *   **Coal Handling System:** For coal-fired plants, this includes unloading, crushing, and conveying coal to the boiler.
    *   **Ash Handling System:** For coal-fired plants, removes ash from the boiler.
    *   **Cooling Tower/Water Source:** Provides cooling medium for the condenser.
    *   **Generator:** Connected to the turbine shaft to convert mechanical energy into electrical energy.

---

## Summary of Key Concepts and Points to Remember:

*   The **Rankine cycle** is the ideal thermodynamic cycle for steam power plants.
*   The four processes are **isentropic compression** (pump), **isobaric heat addition** (boiler), **isentropic expansion** (turbine), and **isobaric heat rejection** (condenser).
*   **Thermal efficiency** is a key performance metric, calculated as Net Work / Heat Input.
*   **Modifications** like reheating and regenerative feedwater heating improve cycle efficiency.
*   **Reheating** reduces turbine exhaust moisture and increases efficiency.
*   **Regenerative heating** preheats feedwater using extracted steam, improving efficiency.
*   **Supercritical and ultra-supercritical cycles** operate above the critical point of water for very high efficiencies.
*   **Turbine and nozzle efficiencies** are crucial for the overall performance of the power plant.
*   **Steam tables** are essential for obtaining thermodynamic properties of water and steam at various states.
*   **CO2 emissions** are a significant concern for fossil fuel-based steam power plants, making efficiency improvements critical. (Relates to CO5 in future modules).

This comprehensive study guide covers the fundamental analysis of the steam cycle, aligning with the learning outcomes and course objectives for Module 1. Remember to practice calculations and refer to your textbooks for deeper understanding of specific steam table data and advanced concepts.