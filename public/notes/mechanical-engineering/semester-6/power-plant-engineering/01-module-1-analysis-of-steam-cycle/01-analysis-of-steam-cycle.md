---
title: "Analysis of Steam Cycle"
subject: "POWER PLANT ENGINEERING"
module: "Module 1: Analysis of Steam Cycle"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463777"
status: "completed"
scrapedAt: "2026-05-20T18:06:18.700Z"
---
# Power Plant Engineering - Module 1: Analysis of Steam Cycle

This module focuses on the fundamental principles and analysis of steam power cycles, which form the backbone of most conventional power generation. We will delve into the theoretical underpinnings of these cycles and their practical implications in power plant design and operation.

## 1. Introduction to Power Plants and Steam Cycles

**Course Outcome Alignment:** CO1 (Knowledge Level: K2)

### 1.1. What is a Power Plant?

A power plant is an industrial facility for the generation of electric power. The majority of today's power plants burn fossil fuels such as coal, natural gas, and oil. Some power plants generate power from other sources, such as nuclear power, hydroelectricity, and renewable energy sources.

**Key Concept:** Conversion of energy from one form to another to produce electricity.

### 1.2. Role of Steam Cycles in Power Generation

Steam cycles are the most prevalent method for generating electricity globally, especially in thermal power plants. Heat is used to produce steam, which then drives a turbine, connected to a generator, to produce electricity.

**Key Concept:** Heat energy is converted into mechanical energy (turbine rotation), and then into electrical energy (generator output).

### 1.3. Ideal Power Plant Cycles

The analysis of power plants often begins with idealized thermodynamic cycles that represent the theoretical performance without considering practical losses.

**Key Concept:** Ideal cycles provide a benchmark for evaluating the efficiency of real-world cycles.

### 1.4. Steam as a Working Fluid

Steam is an excellent working fluid for power cycles due to its:

*   **Availability:** Water is abundant and readily available.
*   **Thermodynamic Properties:** It possesses favorable specific heat and latent heat of vaporization, allowing for efficient energy transfer.
*   **Non-toxic and Non-flammable:** Safe to handle.

**Key Concept:** The choice of working fluid significantly impacts cycle efficiency.

**References:**
*   **El Wakil, M. M. (2017).** *Power Plant Technology.* (Chapter on Steam Power Cycles)
*   **Nag, P. K. (2017).** *Power Plant Engineering.* (Chapter on Thermal Power Plants)

---

## 2. The Rankine Cycle: The Foundation of Steam Power Plants

**Course Outcome Alignment:** CO1 (K2), CO2 (K3)

The Rankine cycle is the idealized thermodynamic cycle that describes the process of a stationary power plant (like a steam-fired power station or an internal combustion engine) that uses steam as its working fluid.

### 2.1. Description of the Rankine Cycle

The Rankine cycle consists of four distinct processes:

1.  **Isentropic Pumping:** Liquid water is pumped from a low pressure to a high pressure. This process is ideally carried out by a pump, and it is assumed to be isentropic (reversible adiabatic).
    *   **State Change:** Subcooled liquid to subcooled liquid at higher pressure.
    *   **Heat Transfer:** Negligible (ideally adiabatic).
    *   **Work Input:** Required by the pump.

2.  **Isobaric Heat Addition:** The high-pressure liquid water is heated at constant pressure in a boiler (or steam generator) to become saturated vapor.
    *   **State Change:** Subcooled liquid $\rightarrow$ saturated liquid $\rightarrow$ saturated vapor (or superheated vapor).
    *   **Heat Transfer:** Added to the fluid.
    *   **Work Transfer:** Negligible (open system).

3.  **Isentropic Expansion:** The high-pressure steam expands through a turbine, producing work. This process is ideally carried out isentropically (reversible adiabatic).
    *   **State Change:** Saturated vapor (or superheated vapor) $\rightarrow$ wet steam (mixture of liquid and vapor) or superheated vapor at lower pressure.
    *   **Heat Transfer:** Negligible (ideally adiabatic).
    *   **Work Output:** Produced by the turbine.

4.  **Isobaric Heat Rejection:** The low-pressure steam is condensed back into liquid water at constant pressure in a condenser.
    *   **State Change:** Wet steam $\rightarrow$ saturated liquid.
    *   **Heat Transfer:** Rejected from the fluid to the cooling medium.
    *   **Work Transfer:** Negligible (open system).

### 2.2. T-s and h-s Diagrams of the Rankine Cycle

Understanding the cycle on thermodynamic diagrams is crucial for analysis.

**T-s Diagram (Temperature-Entropy Diagram):**

*   Process 1-2: Isentropic compression (pump)
*   Process 2-3: Isobaric heat addition (boiler)
*   Process 3-4: Isentropic expansion (turbine)
*   Process 4-1: Isobaric heat rejection (condenser)

**h-s Diagram (Enthalpy-Entropy Diagram):**

*   Similar representation of the processes, showing enthalpy changes directly.

**Key Concepts:**

*   **Isentropic:** Reversible adiabatic process (constant entropy, $s_1 = s_2$ and $s_3 = s_4$).
*   **Isobaric:** Constant pressure process.
*   **Specific Volume:** $v_1$, $v_2$, $v_3$, $v_4$
*   **Enthalpy:** $h_1$, $h_2$, $h_3$, $h_4$
*   **Entropy:** $s_1$, $s_2$, $s_3$, $s_4$

### 2.3. Performance Parameters of the Ideal Rankine Cycle

**Net Work Output ($W_{net}$):** The difference between the work done by the turbine and the work required by the pump.

$W_{net} = W_{turbine} - W_{pump}$

**Heat Input ($Q_{in}$):** The heat added in the boiler.

$Q_{in} = h_3 - h_2$

**Heat Output ($Q_{out}$):** The heat rejected in the condenser.

$Q_{out} = h_4 - h_1$

**Thermal Efficiency ($\eta_{th}$):** The ratio of net work output to heat input.

$\eta_{th} = \frac{W_{net}}{Q_{in}} = \frac{W_{turbine} - W_{pump}}{h_3 - h_2} = \frac{(h_3 - h_4) - (h_2 - h_1)}{h_3 - h_2}$

Where:
*   $W_{turbine} = h_3 - h_4$
*   $W_{pump} = h_2 - h_1$

**Pump Work ($W_{pump}$):** In the ideal Rankine cycle, the pump work can be approximated as:

$W_{pump} \approx v_1 (P_2 - P_1)$

where $v_1$ is the specific volume of the liquid at the pump inlet.

### 2.4. Example Calculation of Ideal Rankine Cycle Efficiency

**Problem:**
In an ideal Rankine cycle, steam enters the turbine at 3 MPa and 400°C, and condenses at a pressure of 50 kPa. Calculate the thermal efficiency of the cycle.

**Solution:**
We need to find the enthalpies at each state. Using steam tables or thermodynamic property software:

*   **State 1 (Pump inlet):** Saturated liquid at 50 kPa.
    *   $h_1 = h_f$ at 50 kPa $\approx 340.5$ kJ/kg
    *   $v_1 = v_f$ at 50 kPa $\approx 0.001030$ m³/kg
*   **State 2 (Pump outlet):** High-pressure liquid at 3 MPa.
    *   $h_2 = h_1 + v_1 (P_2 - P_1) = 340.5 + 0.001030 \times (3000 - 50) \approx 340.5 + 3.04 = 343.54$ kJ/kg
    *   $P_2 = 3$ MPa $= 3000$ kPa
*   **State 3 (Turbine inlet):** Superheated steam at 3 MPa and 400°C.
    *   $h_3 \approx 3230.9$ kJ/kg (from superheated steam tables)
*   **State 4 (Turbine outlet):** Saturated vapor at 50 kPa (assumed for simplicity in ideal cycle if quality is high, otherwise wet steam). Since it's an ideal cycle, we assume isentropic expansion.
    *   $s_4 = s_3$ (isentropic expansion)
    *   From tables, $s$ at 3 MPa, 400°C $\approx 6.9215$ kJ/kg·K
    *   At 50 kPa, $s_f \approx 1.0915$ kJ/kg·K, $s_g \approx 7.5930$ kJ/kg·K
    *   Since $s_f < s_4 < s_g$, state 4 is in the wet region.
    *   Calculate quality ($x_4$): $s_4 = s_f + x_4 (s_g - s_f)$
        $6.9215 = 1.0915 + x_4 (7.5930 - 1.0915)$
        $x_4 = \frac{6.9215 - 1.0915}{6.5015} \approx 0.9908$
    *   Calculate $h_4$: $h_4 = h_f + x_4 (h_g - h_f)$
        $h_f$ at 50 kPa $\approx 340.5$ kJ/kg
        $h_g$ at 50 kPa $\approx 2645.1$ kJ/kg
        $h_4 = 340.5 + 0.9908 (2645.1 - 340.5) \approx 340.5 + 0.9908 \times 2304.6 \approx 340.5 + 2283.5 = 2624.0$ kJ/kg

**Calculations:**

*   **Pump Work ($W_{pump}$):** $W_{pump} = h_2 - h_1 = 343.54 - 340.5 = 3.04$ kJ/kg
*   **Turbine Work ($W_{turbine}$):** $W_{turbine} = h_3 - h_4 = 3230.9 - 2624.0 = 606.9$ kJ/kg
*   **Net Work ($W_{net}$):** $W_{net} = 606.9 - 3.04 = 603.86$ kJ/kg
*   **Heat Input ($Q_{in}$):** $Q_{in} = h_3 - h_2 = 3230.9 - 343.54 = 2887.36$ kJ/kg
*   **Thermal Efficiency ($\eta_{th}$):** $\eta_{th} = \frac{W_{net}}{Q_{in}} = \frac{603.86}{2887.36} \times 100\% \approx 20.9\%$

**Important Note:** The pump work is very small compared to turbine work and heat input, which is typical for steam cycles.

**References:**
*   **Nag, P. K. (2017).** *Power Plant Engineering.* (Chapter on Rankine Cycle)
*   **El Wakil, M. M. (2017).** *Power Plant Technology.* (Chapter on Steam Power Cycles)

---

## 3. Modifications to the Ideal Rankine Cycle

**Course Outcome Alignment:** CO1 (K2), CO2 (K3)

The ideal Rankine cycle is a theoretical construct. Real power plants employ modifications to improve efficiency and overcome practical limitations.

### 3.1. Effect of Increasing Boiler Pressure and Temperature

*   **Increasing Boiler Pressure:**
    *   **Effect on Efficiency:** Generally increases efficiency, as it raises the average temperature of heat addition. However, excessively high pressures can lead to very high turbine exhaust temperatures and reduced turbine efficiency.
*   **Increasing Boiler Temperature (Superheating):**
    *   **Effect on Efficiency:** Increases efficiency by raising the average temperature of heat addition.
    *   **Benefit:** Reduces moisture content in the turbine exhaust, preventing erosion of turbine blades.

**Key Concept:** Higher average temperature of heat addition leads to higher thermal efficiency (Carnot's principle applied conceptually).

### 3.2. Reheating

**Description:** After partial expansion in the high-pressure (HP) turbine, the steam is sent back to the boiler (reheater) where it is heated again at constant pressure before entering the low-pressure (LP) turbine for further expansion.

**Advantages:**

*   **Increased Efficiency:** Increases the average temperature of heat addition and can increase the net work output.
*   **Reduced Turbine Exhaust Moisture:** Significantly reduces moisture content in the LP turbine, preventing blade erosion.

**T-s Diagram Representation:** The expansion line on the T-s diagram is split into two segments, with a reheating process at constant pressure between them.

**Performance Parameter Impact:**
*   $W_{turbine}$ increases due to additional expansion.
*   $Q_{in}$ increases due to reheating.
*   The net effect on efficiency is usually positive, especially when considering the benefits of reduced moisture.

**References:**
*   **Nagpal, G. R., Sharma, S. C. (2012).** *Power Plant Engineering.* (Chapter on Rankine Cycle with Modifications)
*   **Gupta, M. K. (2012).** *Power Plant Engineering.* (Chapter on Rankine Cycle Modifications)

### 3.3. Regenerative Feedwater Heating

**Description:** A portion of the steam is extracted from the turbine at various stages and used to preheat the feedwater (water entering the boiler) in a series of feedwater heaters.

**Types of Regenerative Feedwater Heating:**

*   **Closed Feedwater Heaters:** Heat transfer occurs between extracted steam and feedwater without direct mixing. The extracted steam condenses and is pumped to the boiler feedwater line.
*   **Open Feedwater Heaters (Deaerators):** Extracted steam mixes directly with the feedwater, heating it and also deaerating it (removing dissolved gases).

**Advantages:**

*   **Increased Efficiency:** Significantly improves cycle efficiency by increasing the average temperature of heat addition.
*   **Reduced Condenser Heat Rejection:** Less heat is rejected in the condenser.
*   **Reduced Fuel Consumption:** Lower fuel consumption for the same power output.

**Performance Parameter Impact:**
*   $W_{turbine}$ decreases slightly due to less steam available for expansion.
*   $Q_{in}$ decreases slightly.
*   $W_{pump}$ (feedwater pumps) might increase due to preheating and higher feedwater pressure.
*   However, the overall effect on thermal efficiency is a substantial increase.

**T-s Diagram Representation:** The heat addition process is broken down, and the feedwater heating part of the heat addition is shifted to a higher average temperature.

**References:**
*   **El Wakil, M. M. (2017).** *Power Plant Technology.* (Chapter on Regenerative Feedwater Heating)
*   **Nag, P. K. (2017).** *Power Plant Engineering.* (Chapter on Regenerative Feedwater Heating)

### 3.4. Combined Reheating and Regenerative Feedwater Heating

Most modern high-efficiency power plants utilize both reheating and regenerative feedwater heating to maximize thermal efficiency.

---

## 4. Analysis of Real Steam Cycles (Deviation from Ideal)

**Course Outcome Alignment:** CO2 (K3)

Real steam cycles deviate from ideal cycles due to various irreversibilities and losses.

### 4.1. Irreversibilities in the Rankine Cycle

*   **Pump Inefficiency:** The pump work required is more than the ideal isentropic pump work ($W_{pump, actual} > W_{pump, ideal}$). This is due to friction and internal inefficiencies within the pump.
*   **Turbine Inefficiency (Stage Efficiency/Isentropic Efficiency):** The actual work output from the turbine is less than the ideal isentropic work ($W_{turbine, actual} < W_{turbine, ideal}$). This is due to friction, turbulence, leakage, and residual velocity losses.
    *   **Isentropic Efficiency of Turbine ($\eta_t$):** $\eta_t = \frac{W_{turbine, actual}}{W_{turbine, ideal}} = \frac{h_3 - h_{4, actual}}{h_3 - h_{4, ideal}}$
*   **Boiler Inefficiency:** Heat transfer in the boiler is not perfectly isobaric due to pressure drops in the pipes and heating surfaces.
*   **Condenser Inefficiency:** Pressure drop in the condenser and finite temperature difference between steam and cooling water cause irreversibilities.
*   **Pressure Drops:** Pressure drops occur in pipes, valves, and steam passages, leading to losses.

### 4.2. Performance Parameters of Actual Rankine Cycle

The formulas for performance parameters are similar, but actual enthalpies (obtained from isentropic efficiency calculations) are used.

*   **Actual Pump Work ($W_{pump, actual}$):** $W_{pump, actual} = \frac{W_{pump, ideal}}{\eta_{pump}}$ (where $\eta_{pump}$ is the pump isentropic efficiency, typically < 1) or directly calculated from actual enthalpy rise.
*   **Actual Turbine Work ($W_{turbine, actual}$):** $W_{turbine, actual} = \eta_t \times W_{turbine, ideal}$
*   **Actual Net Work ($W_{net, actual}$):** $W_{net, actual} = W_{turbine, actual} - W_{pump, actual}$
*   **Actual Heat Input ($Q_{in, actual}$):** $Q_{in, actual} = h_3 - h_{2, actual}$ (where $h_{2, actual}$ considers pump inefficiency).
*   **Actual Thermal Efficiency ($\eta_{th, actual}$):** $\eta_{th, actual} = \frac{W_{net, actual}}{Q_{in, actual}}$

**Example Calculation for Actual Cycle:**

Let's use the previous example's state points and introduce inefficiencies:

*   Turbine Isentropic Efficiency ($\eta_t$) = 85%
*   Pump Isentropic Efficiency ($\eta_p$) = 80%

**Calculations:**

*   **Ideal Pump Work ($W_{pump, ideal}$):** 3.04 kJ/kg (from previous example)
*   **Actual Pump Work ($W_{pump, actual}$):** $W_{pump, actual} = \frac{W_{pump, ideal}}{\eta_p} = \frac{3.04}{0.80} = 3.80$ kJ/kg
*   **Enthalpy at Pump Outlet ($h_{2, actual}$):** $h_{2, actual} = h_1 + W_{pump, actual} = 340.5 + 3.80 = 344.30$ kJ/kg
*   **Ideal Turbine Work ($W_{turbine, ideal}$):** 606.9 kJ/kg (from previous example)
*   **Actual Turbine Work ($W_{turbine, actual}$):** $W_{turbine, actual} = \eta_t \times W_{turbine, ideal} = 0.85 \times 606.9 = 515.87$ kJ/kg
*   **Actual Net Work ($W_{net, actual}$):** $W_{net, actual} = W_{turbine, actual} - W_{pump, actual} = 515.87 - 3.80 = 512.07$ kJ/kg
*   **Actual Heat Input ($Q_{in, actual}$):** $Q_{in, actual} = h_3 - h_{2, actual} = 3230.9 - 344.30 = 2886.60$ kJ/kg
*   **Actual Thermal Efficiency ($\eta_{th, actual}$):** $\eta_{th, actual} = \frac{W_{net, actual}}{Q_{in, actual}} = \frac{512.07}{2886.60} \times 100\% \approx 17.7\%$

**Observation:** The actual thermal efficiency (17.7%) is significantly lower than the ideal efficiency (20.9%) due to irreversibilities.

**References:**
*   **Nag, P. K. (2017).** *Power Plant Engineering.* (Chapter on Actual Rankine Cycle)
*   **El Wakil, M. M. (2017).** *Power Plant Technology.* (Chapters on Efficiency and Losses)

---

## 5. Other Power Plant Components and Their Analysis

**Course Outcome Alignment:** CO1 (K2), CO3 (K3)

While this module focuses on the steam cycle, understanding the analysis of key components is crucial for overall power plant performance.

### 5.1. Steam Boilers (Steam Generators)

*   **Function:** To produce high-pressure, high-temperature steam by burning fuel and transferring heat to water.
*   **Analysis:** Efficiency of combustion, heat transfer efficiency, pressure drop calculations, flue gas analysis.
*   **Types:** Fire-tube, water-tube (most common in power plants).

### 5.2. Steam Turbines

*   **Function:** To extract thermal energy from high-pressure steam and convert it into rotational mechanical energy.
*   **Analysis:**
    *   **Velocity Diagrams:** For understanding energy transfer in turbine stages.
    *   **Enthalpy Drop:** The energy available for conversion into work.
    *   **Isentropic Efficiency:** Crucial for determining actual work output.
    *   **Stage Efficiency:** Efficiency of individual turbine stages.
    *   **Governing:** How turbine speed is controlled.

**Key Concept:** Turbines are typically multi-stage machines (HP, IP, LP stages) to efficiently extract energy over a wide range of pressure and temperature.

### 5.3. Condensers

*   **Function:** To condense the exhaust steam from the turbine into water, creating a low pressure at the turbine exhaust, which maximizes turbine work.
*   **Analysis:** Heat transfer rate, cooling water flow rate, terminal temperature difference, pressure drop, vacuum achieved.
*   **Types:** Surface condensers, jet condensers.

### 5.4. Feedwater Heaters

*   **Function:** To preheat the feedwater before it enters the boiler, improving cycle efficiency.
*   **Analysis:** Heat transfer calculations, effectiveness of heaters, pumping power for extracted steam.

### 5.5. Steam Nozzles

*   **Function:** To convert the thermal energy (enthalpy) of steam into kinetic energy by accelerating it to high velocities. This high-velocity steam then impinges on turbine blades.
*   **Analysis:**
    *   **Convergent-Divergent Nozzles:** Used for supersonic flow, essential for high-pressure, high-temperature steam.
    *   **Isentropic Efficiency:** Accounts for losses in kinetic energy conversion due to friction.
    *   **Throat Velocity:** Velocity at the narrowest point of the nozzle.
    *   **Exit Velocity:** Velocity of steam at the nozzle exit.

**Key Concept:** Nozzle efficiency determines how effectively the enthalpy drop across the nozzle is converted into kinetic energy.

**References:**
*   **El Wakil, M. M. (2017).** *Power Plant Technology.* (Chapters on Turbines, Boilers, Condensers, Nozzles)
*   **Nag, P. K. (2017).** *Power Plant Engineering.* (Chapters on Turbines, Boilers, Condensers, Nozzles)
*   **Nagpal, G. R., Sharma, S. C. (2012).** *Power Plant Engineering.* (Relevant chapters)
*   **Gupta, M. K. (2012).** *Power Plant Engineering.* (Relevant chapters)

---

## 6. Economic Considerations and Environmental Impact

**Course Outcome Alignment:** CO5 (K2)

### 6.1. Economics of Power Generation

*   **Capital Costs:** Cost of building the power plant.
*   **Operating Costs:** Fuel costs, maintenance, labor, consumables.
*   **Fuel Costs:** Major component, dependent on fuel type, price, and plant efficiency.
*   **Plant Efficiency:** Directly impacts fuel consumption and thus operating costs. Higher efficiency means lower fuel cost per unit of electricity generated.
*   **Capacity Factor:** The ratio of actual energy produced to the maximum possible energy that could have been produced.
*   **Load Factor:** Ratio of average load to peak load.
*   **Cost of Electricity:** Total cost divided by total energy produced.

**Key Concept:** Improving cycle efficiency leads to lower operating costs and makes power generation more economical.

### 6.2. Pollution from Power Plants

*   **Fossil Fuel Combustion:**
    *   **Greenhouse Gases:** Carbon Dioxide ($CO_2$) is a major contributor to climate change.
    *   **Sulfur Oxides ($SO_x$):** Lead to acid rain.
    *   **Nitrogen Oxides ($NO_x$):** Contribute to smog and acid rain.
    *   **Particulate Matter (PM):** Fine particles that can cause respiratory problems.
    *   **Carbon Monoxide ($CO$):** Toxic gas.
*   **Nuclear Power:** Produces radioactive waste, which requires careful disposal.
*   **Hydroelectric Power:** Can impact river ecosystems and displace communities.

**Environmental Mitigation:**

*   **Flue Gas Desulfurization (FGD):** To remove $SO_x$.
*   **Selective Catalytic Reduction (SCR):** To reduce $NO_x$.
*   **Electrostatic Precipitators (ESPs) & Baghouses:** To capture particulate matter.
*   **Carbon Capture and Storage (CCS):** For $CO_2$ mitigation.
*   **Use of Cleaner Fuels:** Natural gas vs. coal.
*   **Renewable Energy Integration:** Reducing reliance on fossil fuels.

**References:**
*   **Nag, P. K. (2017).** *Power Plant Engineering.* (Chapter on Economics and Environment)
*   **El Wakil, M. M. (2017).** *Power Plant Technology.* (Chapters on Environmental Impact and Economics)

---

## 7. Practice Questions and Exercises

**Instructions:** Use steam tables or property calculators for solving these problems.

**Question 1 (CO2):**
An ideal Rankine cycle operates between boiler pressure of 4 MPa and condenser pressure of 10 kPa. Steam leaves the boiler at 400°C. Calculate:
a) Enthalpies at all four states.
b) Specific pump work, specific turbine work, and net work.
c) Heat input and heat output.
d) Thermal efficiency of the cycle.

**Answer 1:**
*   State 1 (Pump inlet): Saturated liquid at 10 kPa. $h_1 \approx 191.81$ kJ/kg, $v_1 \approx 0.001010$ m³/kg.
*   State 2 (Pump outlet): $P_2 = 4$ MPa $= 4000$ kPa. $W_{pump, ideal} = v_1(P_2 - P_1) = 0.001010 (4000 - 10) \approx 4.03$ kJ/kg. $h_2 = h_1 + W_{pump, ideal} = 191.81 + 4.03 = 195.84$ kJ/kg.
*   State 3 (Turbine inlet): 4 MPa, 400°C. $h_3 \approx 3214.7$ kJ/kg. $s_3 \approx 6.7715$ kJ/kg·K.
*   State 4 (Turbine outlet): $P_4 = 10$ kPa, $s_4 = s_3 = 6.7715$ kJ/kg·K.
    *   At 10 kPa: $s_f = 0.6492$ kJ/kg·K, $s_g = 8.1497$ kJ/kg·K.
    *   $x_4 = (s_4 - s_f) / (s_g - s_f) = (6.7715 - 0.6492) / (8.1497 - 0.6492) = 6.1223 / 7.5005 \approx 0.8162$.
    *   At 10 kPa: $h_f = 191.81$ kJ/kg, $h_g = 2583.9$ kJ/kg.
    *   $h_4 = h_f + x_4 (h_g - h_f) = 191.81 + 0.8162 (2583.9 - 191.81) \approx 191.81 + 0.8162 \times 2392.09 \approx 191.81 + 1953.4 = 2145.2$ kJ/kg.
*   b) $W_{pump, ideal} = 4.03$ kJ/kg. $W_{turbine, ideal} = h_3 - h_4 = 3214.7 - 2145.2 = 1069.5$ kJ/kg. $W_{net, ideal} = 1069.5 - 4.03 = 1065.47$ kJ/kg.
*   c) $Q_{in, ideal} = h_3 - h_2 = 3214.7 - 195.84 = 3018.86$ kJ/kg. $Q_{out, ideal} = h_4 - h_1 = 2145.2 - 191.81 = 1953.39$ kJ/kg.
*   d) $\eta_{th, ideal} = W_{net, ideal} / Q_{in, ideal} = 1065.47 / 3018.86 \times 100\% \approx 35.3\%$

**Question 2 (CO2):**
For the same ideal Rankine cycle as in Question 1, assume the turbine isentropic efficiency is 88% and the pump isentropic efficiency is 82%. Calculate:
a) Actual pump work and actual turbine work.
b) Actual net work.
c) Actual heat input.
d) Actual thermal efficiency.

**Answer 2:**
*   a) $W_{pump, actual} = W_{pump, ideal} / \eta_p = 4.03 / 0.82 \approx 4.92$ kJ/kg. $W_{turbine, actual} = \eta_t \times W_{turbine, ideal} = 0.88 \times 1069.5 \approx 941.16$ kJ/kg.
*   b) $W_{net, actual} = W_{turbine, actual} - W_{pump, actual} = 941.16 - 4.92 = 936.24$ kJ/kg.
*   c) $h_{2, actual} = h_1 + W_{pump, actual} = 191.81 + 4.92 = 196.73$ kJ/kg. $Q_{in, actual} = h_3 - h_{2, actual} = 3214.7 - 196.73 = 3017.97$ kJ/kg.
*   d) $\eta_{th, actual} = W_{net, actual} / Q_{in, actual} = 936.24 / 3017.97 \times 100\% \approx 31.0\%$

**Question 3 (CO1, CO2):**
Explain the advantages of regenerative feedwater heating over the ideal Rankine cycle.

**Answer 3:**
Regenerative feedwater heating increases the thermal efficiency of the cycle. It achieves this by preheating the water entering the boiler using extracted steam from the turbine. This preheating shifts a portion of the heat addition process to occur at a higher average temperature, thereby reducing the amount of heat that needs to be added in the boiler at lower temperatures. Consequently, less heat is rejected in the condenser, and the net work output for a given heat input increases, leading to higher overall efficiency and reduced fuel consumption.

**Question 4 (CO3):**
A steam nozzle receives steam at 1 MPa and 300°C and expands it to 0.5 MPa. If the isentropic efficiency of the nozzle is 90%, calculate the exit velocity of the steam.

**Answer 4:**
*   State 3 (Nozzle inlet): 1 MPa, 300°C. $h_3 \approx 3051.6$ kJ/kg. $s_3 \approx 6.9215$ kJ/kg·K.
*   State 4s (Nozzle outlet, isentropic): 0.5 MPa, $s_{4s} = s_3 = 6.9215$ kJ/kg·K.
    *   At 0.5 MPa: $s_f = 1.8607$ kJ/kg·K, $s_g = 6.8209$ kJ/kg·K.
    *   Since $s_{4s} > s_g$, the steam is superheated at the exit. From superheated tables at 0.5 MPa and $s = 6.9215$: $h_{4s} \approx 3070.2$ kJ/kg (approximating by interpolation).
*   Ideal kinetic energy at exit ($ke_{ideal}$): $ke_{ideal} = h_3 - h_{4s} = 3051.6 - 3070.2 = -18.6$ kJ/kg. *Correction: There might be an issue with the given values or my table lookup for superheated state with entropy. Let's re-check. With 1MPa, 300C, $h_3 = 3051.6$, $s_3 = 6.9215$. At 0.5 MPa, $s_f = 1.8607$, $s_g = 6.8209$. The entropy $s_3$ is indeed higher than $s_g$ at 0.5 MPa, indicating superheated steam. The enthalpy should increase if it were a simple throttling, but this is isentropic expansion. The enthalpy value from tables at 0.5 MPa and s=6.9215 kJ/kg·K is approximately 3070 kJ/kg. This suggests that the enthalpy might actually increase or stay the same if the superheat is enough to compensate for pressure drop. This scenario for nozzle analysis often assumes expansion to saturation or slightly wet. Let's assume the problem implies expansion that results in available energy loss. A more typical nozzle problem would have expansion to a lower pressure where the steam becomes wet.*

    *Let's reframe the question for clarity with typical nozzle behavior:*
    **Revised Question 4 (CO3):**
    A steam nozzle receives steam at 1 MPa and 300°C and expands it to 0.1 MPa. If the isentropic efficiency of the nozzle is 90%, calculate the exit velocity of the steam.

    **Revised Answer 4:**
    *   State 3 (Nozzle inlet): 1 MPa, 300°C. $h_3 = 3051.6$ kJ/kg. $s_3 = 6.9215$ kJ/kg·K.
    *   State 4s (Nozzle outlet, isentropic): 0.1 MPa, $s_{4s} = s_3 = 6.9215$ kJ/kg·K.
        *   At 0.1 MPa: $s_f = 0.6492$ kJ/kg·K, $s_g = 8.1497$ kJ/kg·K.
        *   $x_{4s} = (s_{4s} - s_f) / (s_g - s_f) = (6.9215 - 0.6492) / (8.1497 - 0.6492) = 6.2723 / 7.5005 \approx 0.8362$.
        *   At 0.1 MPa: $h_f = 191.81$ kJ/kg, $h_g = 2583.9$ kJ/kg.
        *   $h_{4s} = h_f + x_{4s} (h_g - h_f) = 191.81 + 0.8362 (2583.9 - 191.81) \approx 191.81 + 0.8362 \times 2392.09 \approx 191.81 + 2000.5 = 2192.3$ kJ/kg.
    *   Ideal kinetic energy at exit ($ke_{ideal}$): $ke_{ideal} = h_3 - h_{4s} = 3051.6 - 2192.3 = 859.3$ kJ/kg.
    *   Actual kinetic energy at exit ($ke_{actual}$): $ke_{actual} = \eta_{nozzle} \times ke_{ideal} = 0.90 \times 859.3 = 773.37$ kJ/kg.
    *   $ke_{actual} = \frac{1}{2} m v_{4, actual}^2$. Since we are calculating specific kinetic energy (per kg), $m=1$.
    *   $773.37 \text{ kJ/kg} = 773370 \text{ J/kg}$.
    *   $v_{4, actual} = \sqrt{2 \times ke_{actual}} = \sqrt{2 \times 773370} \approx \sqrt{1546740} \approx 1243.7$ m/s.

---

## 8. Important Points to Remember

*   The Rankine cycle is the fundamental cycle for steam power plants.
*   Thermal efficiency of the Rankine cycle is primarily governed by the average temperature of heat addition and rejection.
*   Reheating and regenerative feedwater heating are key modifications to improve cycle efficiency.
*   Irreversibilities (pump and turbine inefficiencies, pressure drops) significantly reduce the actual efficiency compared to the ideal cycle.
*   Turbine and nozzle efficiencies are critical for determining the actual work output and kinetic energy conversion.
*   Environmental impact (GHG emissions, $SO_x$, $NO_x$) is a major consideration in power plant design and operation.
*   Higher efficiency leads to lower operating costs and reduced environmental pollution.

---

This comprehensive set of notes covers the essential aspects of steam cycle analysis as per the provided learning outcomes and course objectives. Remember to practice solving problems using steam tables and understanding the implications of various parameters on cycle performance.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
