---
title: "Gas turbine power plants"
subject: "POWER PLANT ENGINEERING"
module: "Module 3: Thermal power plants"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463792"
status: "completed"
scrapedAt: "2026-05-20T18:06:36.383Z"
---
# POWER PLANT ENGINEERING: Module 3: Thermal Power Plants - Gas Turbine Power Plants

This module focuses on understanding the principles, components, and performance of gas turbine power plants.

## Learning Outcomes:

By the end of this topic, you should be able to:

*   Explain the basic principles of operation of a gas turbine.
*   Describe the main components of a gas turbine power plant.
*   Analyze the working cycle of a gas turbine (Brayton Cycle).
*   Understand different types of gas turbine cycles (open, closed, semi-closed).
*   Discuss the methods for improving gas turbine performance.
*   Explain the applications and advantages/disadvantages of gas turbine power plants.
*   Calculate performance parameters like specific work, heat rate, and thermal efficiency.

## Course Outcomes Alignment:

This topic directly contributes to:

*   **CO1: Explain the layout, components and working of steam, gas, hydro, and nuclear power plants.** (K2 - Knowledge Level) - We will cover the layout, components, and working of gas turbine power plants in detail.

## 1. Introduction to Gas Turbine Power Plants

Gas turbine power plants utilize the kinetic energy of a high-velocity gas stream, produced by the expansion of hot gases, to drive a turbine. This turbine, in turn, drives a generator to produce electricity. They are also known as **Internal Combustion Engines (ICE)** of the continuous combustion type.

*   **Key Concept:** Combustion occurs continuously within the engine, unlike reciprocating engines where it's intermittent.
*   **Basic Principle:** Based on the **Brayton Cycle** (or Joule Cycle), which involves isentropic compression, constant pressure heat addition, isentropic expansion, and constant pressure heat rejection.

---

## 2. The Brayton Cycle: The Working Principle

The ideal Brayton cycle for a gas turbine consists of four thermodynamic processes:

*   **Process 1-2: Isentropic Compression:** Air is compressed in a compressor, increasing its pressure and temperature.
*   **Process 2-3: Constant Pressure Heat Addition:** Fuel is injected and burned with the compressed air in the combustion chamber, adding heat at constant pressure. This results in a significant increase in temperature and volume.
*   **Process 3-4: Isentropic Expansion:** The hot, high-pressure gases expand through a turbine, producing work. The temperature and pressure decrease.
*   **Process 4-1: Constant Pressure Heat Rejection:** The expanded gases are rejected to the atmosphere (in an open cycle) or heat is rejected to a cooling medium (in a closed cycle), returning the working fluid to its initial state.

### T-s Diagram of the Ideal Brayton Cycle:

![Ideal Brayton Cycle T-s Diagram](https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Brayton_cycle_Ts.svg/300px-Brayton_cycle_Ts.svg.png)

### p-v Diagram of the Ideal Brayton Cycle:

![Ideal Brayton Cycle p-v Diagram](https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Brayton_cycle_Pv.svg/300px-Brayton_cycle_Pv.svg.png)

### Performance Parameters of the Ideal Brayton Cycle:

*   **Net Work Output ($W_{net}$):** $W_{net} = W_{turbine} - W_{compressor}$
    *   $W_{compressor} = h_2 - h_1 = c_p(T_2 - T_1)$
    *   $W_{turbine} = h_3 - h_4 = c_p(T_3 - T_4)$
*   **Net Work Output per unit mass ($w_{net}$):** $w_{net} = c_p(T_3 - T_4) - c_p(T_2 - T_1)$
*   **Heat Input ($Q_{in}$):** $Q_{in} = h_3 - h_2 = c_p(T_3 - T_2)$
*   **Thermal Efficiency ($\eta_{th}$):** $\eta_{th} = \frac{W_{net}}{Q_{in}} = \frac{c_p(T_3 - T_4) - c_p(T_2 - T_1)}{c_p(T_3 - T_2)} = 1 - \frac{T_1}{T_2} = 1 - \frac{1}{(r_p)^{\frac{\gamma-1}{\gamma}}}$
    *   Where $r_p = \frac{P_2}{P_1} = \frac{P_3}{P_4}$ (Pressure ratio)
    *   $\gamma$ is the ratio of specific heats ($c_p/c_v$).
*   **Specific Work Output ($w_{net}$):** For a given mass flow rate, the total work output is $W_{net} = \dot{m} \times w_{net}$.
*   **Specific Work of Compressor ($w_c$):** $w_c = c_p(T_2 - T_1)$
*   **Specific Work of Turbine ($w_t$):** $w_t = c_p(T_3 - T_4)$
*   **Net Specific Work ($w_{net}$):** $w_{net} = w_t - w_c$
*   **Heat Rate:** This is the reciprocal of thermal efficiency, often expressed in kJ/kWh or Btu/kWh. A lower heat rate indicates higher efficiency.

**Important Point to Remember:** The thermal efficiency of the ideal Brayton cycle increases with increasing pressure ratio.

---

## 3. Components of a Gas Turbine Power Plant

A typical gas turbine power plant consists of the following main components:

### 3.1. Air Intake

*   **Function:** To draw ambient air into the compressor.
*   **Design:** Equipped with filters to remove dust and foreign particles to protect the compressor blades. Often includes silencers to reduce noise.
*   **El Wakil (2017):** Discusses the importance of clean air intake for compressor longevity and performance.

### 3.2. Compressor

*   **Function:** To compress the incoming air to a high pressure. This requires significant work input.
*   **Types:**
    *   **Axial Flow Compressor:** Most common in large power turbines. Air flows parallel to the axis of rotation. Consists of multiple stages of rotating and stationary blades. Offers high efficiency and large mass flow rates.
    *   **Centrifugal Flow Compressor:** Used in smaller gas turbines. Air is drawn in axially and accelerated radially outwards. Less efficient than axial flow but simpler and more robust.
*   **Key Concept:** The compression process is nearly adiabatic (isentropic in ideal case).
*   **El Wakil (2017) & Nag (2017):** Detail the aerodynamic principles and construction of axial and centrifugal compressors.

### 3.3. Combustion Chamber (Combustor)

*   **Function:** To add heat to the compressed air by burning fuel.
*   **Process:** Fuel (natural gas, diesel, etc.) is injected and mixed with a portion of the compressed air, and combustion occurs at nearly constant pressure.
*   **Types:**
    *   **Can Type:** Separate combustion chambers arranged around the shaft.
    *   **Annular Type:** A single, ring-shaped combustion chamber. More compact and efficient.
    *   **Can-Annular Type:** A compromise between the two.
*   **Key Concept:** The addition of heat is at approximately constant pressure. The temperature of the working fluid increases significantly.
*   **Nagpal & Sharma (2012):** Describe the design considerations for combustion chambers, including flame stability and uniform temperature distribution.

### 3.4. Turbine

*   **Function:** To extract energy from the hot, high-pressure combustion gases and convert it into mechanical work. This work drives both the compressor and the generator.
*   **Types:**
    *   **Axial Flow Turbine:** Similar in principle to axial flow compressors, but the blades are designed to expand the gas and extract energy.
    *   **Radial Flow Turbine:** Less common for power generation.
*   **Key Concept:** The expansion process is nearly adiabatic (isentropic in ideal case).
*   **El Wakil (2017) & Gupta (2012):** Explain the principles of turbine blade design and energy extraction.

### 3.5. Exhaust

*   **Function:** To discharge the hot gases after they have passed through the turbine.
*   **In Open Cycle:** Gases are directly released into the atmosphere.
*   **In Combined Cycle:** Exhaust gases are used to produce steam in a Heat Recovery Steam Generator (HRSG) to drive a steam turbine.
*   **In Closed Cycle:** Exhaust gases are cooled in a heat exchanger.

### 3.6. Generator

*   **Function:** To convert the mechanical energy from the turbine shaft into electrical energy.
*   **Connection:** Directly coupled to the turbine shaft.

---

## 4. Types of Gas Turbine Cycles

### 4.1. Open Cycle Gas Turbine

*   **Description:** The most common type. Air is drawn from the atmosphere, compressed, mixed with fuel, burned, expanded through the turbine, and then exhausted to the atmosphere. The working fluid (air) is continuously replenished.
*   **Layout:** Intake → Compressor → Combustion Chamber → Turbine → Exhaust
*   **Advantages:**
    *   Simple design.
    *   Compact.
    *   High power-to-weight ratio.
    *   Quick starting.
    *   Lower initial cost compared to steam plants.
*   **Disadvantages:**
    *   Lower thermal efficiency compared to closed cycles or combined cycles.
    *   Dependent on ambient air conditions.
    *   Pollution from exhaust gases.
*   **Applications:** Peak load power generation, jet engines, industrial power generation, mechanical drives.
*   **Nag (2017):** Provides a detailed analysis of the open cycle gas turbine, including its limitations.

### 4.2. Closed Cycle Gas Turbine

*   **Description:** The working fluid (typically air, helium, or CO2) is continuously recirculated. Heat is added to the working fluid from an external source (like combustion of fuel or nuclear heat) in a heat exchanger, and rejected to a cooling medium in another heat exchanger.
*   **Layout:**
    *   **Combustion Turbine:** Heat source → Heat Exchanger (Heater) → Compressor → Combustion Chamber → Turbine → Cooler → Heat Exchanger (Heater) → Air Intake (Recirculated)
    *   **Non-Combustion Turbine:** Heat source → Heat Exchanger (Heater) → Compressor → Turbine → Cooler → Heat Exchanger (Heater) → Working Fluid Intake (Recirculated)
*   **Advantages:**
    *   Higher thermal efficiency is possible due to better control over the working fluid and ability to use higher temperatures if the working fluid can withstand it.
    *   Can use any heat source (including solar or nuclear).
    *   Cleaner exhaust as the working fluid is recirculated and combustion products are not directly released.
    *   Less sensitive to variations in ambient conditions.
*   **Disadvantages:**
    *   More complex and larger plant size due to the need for heat exchangers.
    *   Higher initial cost.
    *   Slower response to load changes.
*   **El Wakil (2017):** Discusses the thermodynamic advantages and design challenges of closed-cycle gas turbines.

### 4.3. Semi-Closed Cycle Gas Turbine

*   **Description:** A hybrid approach where a portion of the exhaust gas is recycled back to the compressor inlet, and fresh air is added. This improves efficiency and reduces NOx emissions compared to open cycles.
*   **Advantages:**
    *   Improved efficiency over simple open cycle.
    *   Reduced NOx emissions.
*   **Disadvantages:**
    *   More complex than open cycle.

---

## 5. Methods for Improving Gas Turbine Performance

The thermal efficiency of a simple open cycle gas turbine is relatively low (typically 25-40%). Several methods are employed to enhance its performance:

### 5.1. Increasing Turbine Inlet Temperature ($T_3$)

*   **Effect:** Higher turbine inlet temperature leads to higher thermal efficiency and increased power output, as per the Brayton cycle equation.
*   **Methods:**
    *   **Advanced Blade Materials:** Use of superalloys, ceramics, and advanced coatings that can withstand higher temperatures.
    *   **Cooling Techniques:** Internal cooling of turbine blades using compressed air (film cooling, impingement cooling).
*   **El Wakil (2017) & Nag (2017):** Elaborate on the material science and thermal management techniques for high-temperature operation.

### 5.2. Increasing Pressure Ratio ($r_p$)

*   **Effect:** As seen in the ideal Brayton cycle efficiency formula, increasing the pressure ratio generally increases efficiency.
*   **Limitation:** Very high pressure ratios can lead to excessively high compressor discharge temperatures, requiring intercooling.

### 5.3. Intercooling

*   **Description:** Cooling the air between stages of compression. This reduces the work required by the compressor.
*   **Process:**
    *   Air is compressed in the first compressor stage.
    *   Cooled in an intercooler (heat exchanger).
    *   Compressed further in a second compressor stage.
*   **Effect:** Reduces compressor work, allowing for a higher overall pressure ratio for a given compressor exit temperature. Improves net work output and efficiency.
*   **El Wakil (2017):** Explains the thermodynamic benefits of intercooling.

### 5.4. Reheating

*   **Description:** Introducing fuel and combustion in between stages of turbine expansion.
*   **Process:**
    *   Hot gases expand through the first turbine stage.
    *   Gases are reheated in a second combustion chamber.
    *   Gases expand further through a second turbine stage.
*   **Effect:** Increases the work output of the turbine, leading to higher net work and power output. However, it typically reduces thermal efficiency slightly due to additional heat input and pressure drops.
*   **Nag (2017):** Discusses the application of reheating in gas turbines.

### 5.5. Regeneration (or Recuperation)

*   **Description:** Using a heat exchanger (regenerator or recuperator) to transfer heat from the exhaust gases to the compressed air before it enters the combustion chamber.
*   **Process:**
    *   Compressed air is preheated by exhaust gases in a regenerator.
    *   Preheated air enters the combustion chamber for further heating.
*   **Effect:** Reduces the amount of fuel required, significantly improving thermal efficiency, especially at lower pressure ratios.
*   **El Wakil (2017) & Nag (2017):** Provide detailed analysis of regenerators and their impact on efficiency.

### 5.6. Combined Cycle Power Plants (CCGT)

*   **Description:** This is the most effective way to improve the efficiency of gas turbines. The hot exhaust gases from the gas turbine are used to produce steam in a Heat Recovery Steam Generator (HRSG). This steam then drives a conventional steam turbine, which is coupled to a generator.
*   **Layout:** Gas Turbine → HRSG → Steam Turbine → Generator
*   **Advantages:**
    *   Very high thermal efficiencies (up to 60% or more).
    *   Combines the advantages of both gas and steam turbines.
*   **Disadvantages:**
    *   Higher initial cost and complexity.
*   **Applications:** Base load power generation where high efficiency is paramount.
*   **Nagpal & Sharma (2012) & Gupta (2012):** Dedicate significant sections to the operation and advantages of combined cycle power plants. This directly relates to CO1.

---

## 6. Advantages and Disadvantages of Gas Turbine Power Plants

### Advantages:

*   **High Power-to-Weight Ratio:** Makes them suitable for mobile applications and where space is limited.
*   **Quick Starting and Load Response:** Can be started and brought to full load within minutes, making them ideal for peaking power generation.
*   **Lower Initial Cost:** Compared to steam power plants of equivalent capacity (though CCGTs are more expensive).
*   **Clean Exhaust (Relatively):** Compared to older fossil fuel technologies, especially when using natural gas, NOx and SOx emissions can be managed.
*   **Can Use Various Fuels:** Natural gas, diesel, kerosene, and even coal-derived fuels (with appropriate modifications).
*   **Suitable for Combined Cycles:** Leading to very high efficiencies.

### Disadvantages:

*   **Lower Thermal Efficiency (Simple Cycle):** Simple open cycle gas turbines are less efficient than steam plants or CCGTs.
*   **High Fuel Consumption:** For base load power, their lower efficiency means higher fuel costs.
*   **High Turbine Inlet Temperatures:** Require advanced materials and cooling, increasing maintenance costs and complexity.
*   **Susceptible to Atmospheric Conditions:** Performance can be affected by ambient temperature, pressure, and humidity.
*   **Noise Pollution:** Gas turbines can be noisy, requiring significant soundproofing.
*   **NOx Emissions:** High combustion temperatures can lead to significant NOx formation, requiring emission control technologies.

---

## 7. Applications of Gas Turbine Power Plants

*   **Peak Load Power Generation:** Due to their fast start-up capabilities.
*   **Base Load Power Generation (Combined Cycle):** Where high efficiency is required.
*   **Mechanical Drives:** For pumps and compressors in oil and gas industries.
*   **Aviation:** Jet engines are a form of gas turbine.
*   **Marine Propulsion:** Used in ships and naval vessels.
*   **Cogeneration:** Producing both electricity and useful heat (e.g., for industrial processes or district heating).

---

## 8. Practice Questions and Exercises

**Question 1:** A gas turbine operates on an ideal Brayton cycle with a pressure ratio of 6. The turbine inlet temperature is 1200 K and the compressor inlet temperature is 288 K. Assuming $c_p = 1.005$ kJ/kg.K and $\gamma = 1.4$, determine:
    a) The temperature at the compressor outlet.
    b) The temperature at the turbine outlet.
    c) The net work output per unit mass.
    d) The thermal efficiency.

**Answer 1:**

Given:
$r_p = 6$
$T_1 = 288$ K
$T_3 = 1200$ K
$c_p = 1.005$ kJ/kg.K
$\gamma = 1.4$

Relationship between temperatures in isentropic processes:
$\frac{T_2}{T_1} = (\frac{P_2}{P_1})^{\frac{\gamma-1}{\gamma}} = (r_p)^{\frac{\gamma-1}{\gamma}}$
$\frac{T_3}{T_4} = (\frac{P_3}{P_4})^{\frac{\gamma-1}{\gamma}} = (r_p)^{\frac{\gamma-1}{\gamma}}$

$\frac{\gamma-1}{\gamma} = \frac{1.4-1}{1.4} = \frac{0.4}{1.4} = \frac{2}{7} \approx 0.2857$

a) **Temperature at the compressor outlet ($T_2$):**
$T_2 = T_1 \times (r_p)^{\frac{\gamma-1}{\gamma}} = 288 \times (6)^{0.2857}$
$T_2 = 288 \times 1.6687 \approx 480.6$ K

b) **Temperature at the turbine outlet ($T_4$):**
$\frac{T_3}{T_4} = (r_p)^{\frac{\gamma-1}{\gamma}} = 1.6687$
$T_4 = \frac{T_3}{1.6687} = \frac{1200}{1.6687} \approx 719.1$ K

c) **Net work output per unit mass ($w_{net}$):**
$w_{net} = c_p(T_3 - T_4) - c_p(T_2 - T_1)$
$w_{net} = 1.005 \times (1200 - 719.1) - 1.005 \times (480.6 - 288)$
$w_{net} = 1.005 \times 480.9 - 1.005 \times 192.6$
$w_{net} = 1.005 \times (480.9 - 192.6) = 1.005 \times 288.3 \approx 289.7$ kJ/kg

d) **Thermal efficiency ($\eta_{th}$):**
$\eta_{th} = 1 - \frac{1}{(r_p)^{\frac{\gamma-1}{\gamma}}} = 1 - \frac{1}{1.6687} = 1 - 0.5992 \approx 0.4008$ or 40.08%

**Question 2:** Explain the thermodynamic principle behind regeneration and how it improves the efficiency of a gas turbine. (CO1 - K2)

**Answer 2:**
Regeneration, also known as recuperation, is a process where heat from the hot exhaust gases of the turbine is transferred to the compressed air before it enters the combustion chamber. This is achieved using a heat exchanger called a regenerator or recuperator.

**Thermodynamic Principle:**
In a simple Brayton cycle, the compressed air at state 2 is heated to state 3 by burning fuel. The exhaust gases at state 4 are then rejected to the atmosphere. In regeneration, the exhaust gases (at a temperature typically higher than the compressor discharge temperature) are used to preheat the compressed air. This preheating reduces the amount of fuel that needs to be burned in the combustion chamber to reach the desired turbine inlet temperature ($T_3$).

**Improvement in Efficiency:**
By preheating the compressed air, the heat input required ($Q_{in}$) from fuel is reduced. Since the net work output ($W_{net}$) is largely unchanged (assuming the same turbine inlet temperature and pressure ratio), a reduction in heat input directly leads to an increase in thermal efficiency ($\eta_{th} = W_{net} / Q_{in}$). The extent of improvement depends on the effectiveness of the regenerator. In an ideal regenerative cycle, the compressed air would be heated to the temperature of the exhaust gases.

**Question 3:** What is a Heat Recovery Steam Generator (HRSG) and its role in a combined cycle power plant? (CO1 - K2)

**Answer 3:**
A Heat Recovery Steam Generator (HRSG) is a heat exchanger used in combined cycle power plants. Its primary function is to recover the thermal energy from the hot exhaust gases of a gas turbine and use it to generate steam.

**Role in Combined Cycle Power Plant:**
1.  **Heat Recovery:** The hot exhaust gases from the gas turbine, which would otherwise be released to the atmosphere, are directed through the HRSG.
2.  **Steam Generation:** Within the HRSG, water flows through a series of tubes, absorbing heat from the exhaust gases. This water is converted into high-pressure, high-temperature steam.
3.  **Steam Turbine Operation:** The generated steam is then fed to a steam turbine. The expansion of steam through the steam turbine produces mechanical work, which drives a separate generator to produce additional electricity.

By integrating a gas turbine with a steam turbine via an HRSG, combined cycle power plants achieve significantly higher overall thermal efficiencies compared to simple cycle gas turbines or conventional steam power plants alone. This makes them very economical for base load power generation.

---

## 9. Important Points to Remember:

*   **Brayton Cycle:** The fundamental thermodynamic cycle for gas turbines.
*   **Components:** Air Intake, Compressor, Combustion Chamber, Turbine, Exhaust, Generator.
*   **Open Cycle vs. Closed Cycle:** Understand the working fluid handling and efficiency differences.
*   **Efficiency Improvement:** Regeneration, intercooling, reheating, and especially combined cycles are crucial for improving performance.
*   **Materials:** High turbine inlet temperatures necessitate advanced materials and cooling techniques.
*   **Applications:** Gas turbines are versatile, used for peaking, base load (CCGT), and mechanical drives.
*   **CO1 Alignment:** This entire topic directly addresses CO1 by explaining the layout, components, and working of gas turbine power plants.

---
This concludes the study notes for Gas Turbine Power Plants. Ensure you review the textbooks and reference books for a more in-depth understanding of the concepts and calculations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
