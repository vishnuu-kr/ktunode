---
title: "Gas turbine power plants"
subject: "POWER PLANT ENGINEERING"
module: "Module 3: Thermal power plants"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1951d0cf48044643a8"
status: "completed"
scrapedAt: "2026-05-20T18:16:17.938Z"
---
# POWER PLANT ENGINEERING - Module 3: Thermal Power Plants

## Topic: Gas Turbine Power Plants

**Course Outcomes Addressed:** CO1 (Explain the layout, components and working of steam, gas, hydro, and nuclear power plants)

**Knowledge Level:** K2 (Explaining)

---

### 1. Introduction to Gas Turbine Power Plants

Gas turbine power plants, also known as **internal combustion engine power plants** or **jet propulsion power plants**, utilize the kinetic energy of hot expanding gases to drive a turbine. Unlike steam power plants, they do not rely on a water-steam cycle. The working fluid is air and combustion products.

**Key Concepts:**

*   **Brayton Cycle:** The theoretical thermodynamic cycle on which gas turbines operate. It consists of isentropic compression, constant pressure heat addition, isentropic expansion, and constant pressure heat rejection.
*   **Working Fluid:** Air and combustion products.
*   **Advantages:** Higher power-to-weight ratio, quicker starting, compact size, suitability for peak load operation and combined cycle applications.
*   **Disadvantages:** Lower thermal efficiency compared to steam power plants (especially simple cycle), high operating temperatures requiring advanced materials, sensitivity to fuel quality.

**Textbook References:**

*   El Wakil, M. M. (2017). *Power Plant Technology*. McGraw Hill Education. (Chapter on Gas Turbines)
*   Nag, P. K. (2017). *Power Plant Engineering*. McGraw Hill Education. (Chapter on Gas Turbines)

---

### 2. Components of a Gas Turbine Power Plant

A typical gas turbine power plant consists of the following main components:

#### 2.1. Air Compressor

*   **Function:** To compress ambient air to a high pressure, increasing its temperature and density.
*   **Types:**
    *   **Axial Flow Compressor:** Most common in large power plants due to high efficiency and high pressure ratios per stage. Consists of multiple stages of rotating blades (rotors) and stationary blades (stators).
    *   **Centrifugal Compressor:** Simpler design, less efficient, used in smaller gas turbines.
*   **Working Principle:** Air is drawn in, accelerated by rotating blades, and then slowed down in stationary passages, converting kinetic energy into pressure energy.
*   **Key Parameters:** Pressure ratio, isentropic efficiency, power required.

#### 2.2. Combustion Chamber (Combustor)

*   **Function:** To burn the fuel with the compressed air, generating high-temperature combustion gases.
*   **Types:**
    *   **Can Combustor:** Individual cylindrical combustion chambers.
    *   **Annular Combustor:** A single annular chamber surrounding the turbine shaft.
    *   **Can-Annular Combustor:** A compromise between can and annular.
*   **Working Principle:** Fuel is injected and mixed with a portion of the compressed air, ignited, and then mixed with the remaining air to complete combustion and control the temperature.
*   **Key Parameters:** Combustion efficiency, pressure drop, flame temperature, emissions.

#### 2.3. Gas Turbine (Expander)

*   **Function:** To extract energy from the high-temperature, high-pressure combustion gases, driving the compressor and the generator.
*   **Working Principle:** Hot gases expand through a series of turbine stages (nozzles and rotating blades), causing the turbine rotor to spin. Similar in principle to a steam turbine but operates on gas.
*   **Key Parameters:** Turbine inlet temperature (TIT), isentropic efficiency, power developed.

#### 2.4. Generator

*   **Function:** To convert the mechanical energy from the turbine shaft into electrical energy.
*   **Type:** Typically an AC synchronous generator.
*   **Coupling:** Connected directly to the gas turbine shaft.

#### 2.5. Auxiliary Systems

*   **Fuel System:** Stores and delivers fuel (natural gas, diesel, etc.) to the combustor.
*   **Lubrication System:** Provides oil for lubricating bearings.
*   **Starting System:** To bring the turbine to operating speed (e.g., electric motor).
*   **Control System:** Regulates fuel flow, airflow, and turbine speed for optimal operation and safety.
*   **Exhaust System:** Discharges the spent combustion gases.

**Textbook References:**

*   Nagpal, G. R., Sharma, S. C. (2012). *Power Plant Engineering*. KHANNA Publishers. (Chapters covering gas turbine components)
*   Gupta, M. K. (2012). *Power Plant Engineering*. PHI Learning Pvt. Ltd. (Sections on gas turbine design and operation)

---

### 3. Working Principle of a Gas Turbine Power Plant

The operation of a gas turbine power plant follows the **Brayton Cycle**.

**Steps:**

1.  **Compression (1-2):** Ambient air is drawn into the compressor and compressed to a higher pressure and temperature.
2.  **Heat Addition (2-3):** The compressed air enters the combustion chamber, where fuel is injected and burned. This adds heat at a constant pressure, increasing the temperature of the gas significantly.
3.  **Expansion (3-4):** The high-temperature, high-pressure gases expand through the gas turbine, doing work and driving both the compressor and the generator. The pressure and temperature of the gases decrease.
4.  **Heat Rejection (4-1):** The expanded gases are exhausted to the atmosphere (in a simple open cycle). In a closed cycle, the heat is rejected to a cooling medium.

**Diagram:**

*   **Pressure-Volume (P-V) Diagram:** Shows compression as an upward sloping curve, constant pressure heat addition as a horizontal line, expansion as a downward sloping curve, and constant pressure heat rejection as a horizontal line.
*   **Temperature-Entropy (T-S) Diagram:** Shows isentropic compression as a vertical line, constant pressure heat addition as an upward sloping curve, isentropic expansion as a vertical line, and constant pressure heat rejection as a downward sloping curve.

**Important Points to Remember (Brayton Cycle):**

*   Ideal Brayton cycle assumes isentropic compression and expansion, and constant pressure heat addition and rejection.
*   Real cycles have irreversibilities in the compressor and turbine, leading to lower efficiency.

**Textbook References:**

*   El Wakil, M. M. (2017). *Power Plant Technology*. McGraw Hill Education. (Detailed thermodynamic analysis of Brayton cycle)
*   Nag, P. K. (2017). *Power Plant Engineering*. McGraw Hill Education. (Thermodynamic cycles and their applications)

---

### 4. Performance Parameters of Gas Turbine Power Plants

#### 4.1. Thermal Efficiency ($\eta_{th}$)

*   **Definition:** The ratio of the net work output to the heat input.
*   **Formula:**
    $\eta_{th} = \frac{\text{Net Work Output}}{\text{Heat Input}} = \frac{W_{net}}{Q_{in}}$
    Where $W_{net} = W_{turbine} - W_{compressor}$ and $Q_{in}$ is the heat added in the combustor.

#### 4.2. Specific Output ($W_{net,sp}$ or $w_{net}$)

*   **Definition:** Net work output per unit mass of air.
*   **Formula:**
    $w_{net} = w_{turbine} - w_{compressor}$

#### 4.3. Work Ratio ($WR$)

*   **Definition:** The ratio of net work output to the total work developed by the turbine.
*   **Formula:**
    $WR = \frac{W_{net}}{W_{turbine}}$
*   **Significance:** Indicates how much of the turbine's work is available as useful output after driving the compressor. A higher work ratio is desirable.

#### 4.4. Heat Rate

*   **Definition:** The amount of heat input required to produce one unit of electrical energy.
*   **Formula:**
    Heat Rate = $\frac{\text{Heat Input}}{\text{Work Output}} = \frac{1}{\eta_{th}}$ (often expressed in kJ/kWh or BTU/kWh)

#### 4.5. Isentropic Efficiency of Compressor ($\eta_{c}$)

*   **Definition:** Ratio of the isentropic work required to compress air to the actual work required.
*   **Formula:**
    $\eta_{c} = \frac{\text{Isentropic work of compression}}{\text{Actual work of compression}} = \frac{w_{c,isen}}{w_{c,actual}}$

#### 4.6. Isentropic Efficiency of Turbine ($\eta_{t}$)

*   **Definition:** Ratio of the actual work developed by the turbine to the isentropic work it could develop.
*   **Formula:**
    $\eta_{t} = \frac{\text{Actual work of turbine}}{\text{Isentropic work of turbine}} = \frac{w_{t,actual}}{w_{t,isen}}$

#### 4.7. Overall Efficiency ($\eta_{overall}$ or $\eta_{plant}$)

*   **Definition:** Ratio of electrical power output to the heat input from the fuel.
*   **Formula:**
    $\eta_{overall} = \eta_{th} \times \eta_{mechanical} \times \eta_{generator}$
    Where $\eta_{mechanical}$ accounts for mechanical losses in the gearbox (if any) and bearings, and $\eta_{generator}$ is the generator efficiency.

**Example Calculation (Simple Cycle):**

Consider a simple gas turbine with the following data:
*   Compressor pressure ratio ($r_p$) = 8
*   Turbine inlet temperature ($T_3$) = 1200 K
*   Ambient temperature ($T_1$) = 300 K
*   Isentropic efficiencies: $\eta_c = 85\%$, $\eta_t = 88\%$
*   Specific heat ratio ($\gamma$) = 1.4
*   Specific heat at constant pressure ($c_p$) = 1.005 kJ/kg·K

**Calculations:**

1.  **Isentropic Compression:**
    $T_2 = T_1 \times r_p^{(\gamma-1)/\gamma} = 300 \times 8^{(1.4-1)/1.4} = 300 \times 8^{0.4/1.4} = 300 \times 8^{0.2857} \approx 540.8$ K
    $w_{c,isen} = c_p (T_2 - T_1) = 1.005 (540.8 - 300) = 1.005 \times 240.8 \approx 242.0$ kJ/kg

2.  **Actual Compressor Work:**
    $w_{c,actual} = \frac{w_{c,isen}}{\eta_c} = \frac{242.0}{0.85} \approx 284.7$ kJ/kg

3.  **Isentropic Expansion:**
    $T_4' = T_3 / r_p^{(\gamma-1)/\gamma} = 1200 / 8^{0.2857} \approx 1200 / 1.997 \approx 600.9$ K
    $w_{t,isen} = c_p (T_3 - T_4') = 1.005 (1200 - 600.9) = 1.005 \times 599.1 \approx 602.1$ kJ/kg

4.  **Actual Turbine Work:**
    $w_{t,actual} = \eta_t \times w_{t,isen} = 0.88 \times 602.1 \approx 529.8$ kJ/kg

5.  **Net Specific Work:**
    $w_{net} = w_{t,actual} - w_{c,actual} = 529.8 - 284.7 = 245.1$ kJ/kg

6.  **Heat Input:**
    $q_{in} = c_p (T_3 - T_2) = 1.005 (1200 - 540.8) = 1.005 \times 659.2 \approx 662.5$ kJ/kg

7.  **Thermal Efficiency:**
    $\eta_{th} = \frac{w_{net}}{q_{in}} = \frac{245.1}{662.5} \approx 0.3699$ or 37.0%

**Important Points to Remember:**

*   Higher pressure ratios and higher turbine inlet temperatures generally lead to higher thermal efficiency.
*   Isentropic efficiencies significantly impact the performance.

**Textbook References:**

*   Nag, P. K. (2017). *Power Plant Engineering*. McGraw Hill Education. (Detailed performance analysis and calculations)
*   El Wakil, M. M. (2017). *Power Plant Technology*. McGraw Hill Education. (Thermodynamic analysis of gas turbine cycles)

---

### 5. Types of Gas Turbine Cycles

#### 5.1. Simple Open Cycle Gas Turbine

*   **Description:** The most basic configuration. Air is compressed, fuel is burned, and the hot gases drive the turbine and are then exhausted.
*   **Layout:** Compressor -> Combustor -> Turbine -> Exhaust
*   **Efficiency:** Relatively low (20-30% for simple cycle).

#### 5.2. Closed Cycle Gas Turbine

*   **Description:** The working fluid (e.g., air, helium, CO2) is recirculated. Heat is added in a heat exchanger (heater) using an external combustion source, and rejected in another heat exchanger (cooler).
*   **Advantages:** Can use any fuel source (including nuclear, solar thermal), lower operating temperatures possible for turbine blades, higher efficiency can be achieved with intercooling and reheating.
*   **Disadvantages:** Requires large heat exchangers, more complex, higher initial cost.

#### 5.3. Reheating

*   **Description:** The gas is expanded in two or more turbine stages, with combustion (or heat addition) occurring between stages.
*   **Benefit:** Increases net work output and can improve efficiency, especially at lower pressure ratios. Reduces turbine exhaust temperature.
*   **Layout:** Compressor -> Combustor 1 -> Turbine 1 -> Combustor 2 -> Turbine 2 -> Exhaust

#### 5.4. Intercooling

*   **Description:** The compressed air is cooled in a heat exchanger between two compressor stages.
*   **Benefit:** Reduces the work required by the compressor, thus increasing the net work output and thermal efficiency.
*   **Layout:** Compressor 1 -> Intercooler -> Compressor 2 -> Combustor -> Turbine -> Exhaust

#### 5.5. Regenerative Cycle (Recuperative Cycle)

*   **Description:** The hot exhaust gases from the turbine are used to preheat the compressed air entering the combustion chamber in a heat exchanger (regenerator).
*   **Benefit:** Reduces the amount of fuel required for heat addition, thereby increasing thermal efficiency.
*   **Layout:** Compressor -> Regenerator (hot gas side) -> Combustor -> Turbine -> Regenerator (cold air side) -> Exhaust

#### 5.6. Combined Cycle Gas Turbine (CCGT)

*   **Description:** A gas turbine is coupled with a steam turbine. The hot exhaust gases from the gas turbine are used to generate steam in a heat recovery steam generator (HRSG), which then drives a steam turbine.
*   **Advantages:** Achieves very high thermal efficiencies (up to 60% or more).
*   **Layout:** Gas Turbine (Cycle) -> HRSG -> Steam Turbine -> Generator (often shared)
*   **Significance:** Dominant technology for new large-scale thermal power plants due to its high efficiency and flexibility.

**Textbook References:**

*   El Wakil, M. M. (2017). *Power Plant Technology*. McGraw Hill Education. (Detailed analysis of various cycle modifications)
*   Nag, P. K. (2017). *Power Plant Engineering*. McGraw Hill Education. (Comparison of different cycles and their efficiencies)

---

### 6. Applications of Gas Turbine Power Plants

*   **Base Load and Peak Load Power Generation:** Especially in simpler cycles, they are good for quick start-up and can be used for meeting peak demand.
*   **Cogeneration (CHP):** The waste heat from the exhaust can be used for industrial processes, district heating, or driving a steam turbine in a combined cycle.
*   **Aircraft Propulsion:** The fundamental principle of a gas turbine is used in jet engines.
*   **Industrial Drives:** Used to power pumps, compressors, and other machinery in industries like oil and gas.
*   **Marine Propulsion:** Used in naval vessels and some commercial ships.

**Textbook References:**

*   Nagpal, G. R., Sharma, S. C. (2012). *Power Plant Engineering*. KHANNA Publishers. (Applications and case studies)

---

### 7. Practice Questions with Answers

**Question 1:** What is the fundamental thermodynamic cycle on which gas turbines operate?
    a) Rankine Cycle
    b) Otto Cycle
    c) Brayton Cycle
    d) Carnot Cycle

**Answer:** c) Brayton Cycle

**Question 2:** Briefly explain the role of the compressor in a gas turbine power plant.
    **Answer:** The compressor draws in ambient air and compresses it to a high pressure and temperature. This is crucial for efficient combustion and energy extraction in the turbine.

**Question 3:** A simple gas turbine operates with a pressure ratio of 6, ambient temperature of 300 K, and turbine inlet temperature of 1400 K. Assuming ideal conditions (isentropic compression and expansion, no losses), calculate the thermal efficiency. (Assume $\gamma = 1.4$)

    **Solution:**
    For ideal Brayton cycle:
    $T_2 = T_1 \times r_p^{(\gamma-1)/\gamma} = 300 \times 6^{(1.4-1)/1.4} = 300 \times 6^{0.2857} \approx 510.5$ K
    $T_4 = T_3 / r_p^{(\gamma-1)/\gamma} = 1400 / 6^{0.2857} \approx 1400 / 1.80 \approx 777.8$ K

    Heat input per unit mass ($q_{in}$) = $c_p (T_3 - T_2)$
    Work output per unit mass ($w_{net}$) = $c_p (T_3 - T_4) - c_p (T_2 - T_1)$
    $w_{net} = c_p (T_3 - T_4 - T_2 + T_1)$

    Thermal efficiency ($\eta_{th}$) = $\frac{w_{net}}{q_{in}} = \frac{T_3 - T_4 - T_2 + T_1}{T_3 - T_2}$
    $\eta_{th} = \frac{1400 - 777.8 - 510.5 + 300}{1400 - 510.5} = \frac{411.7}{889.5} \approx 0.4627$ or 46.3%

**Question 4:** What is the primary advantage of a combined cycle gas turbine (CCGT) power plant?
    a) Lower capital cost
    b) Higher thermal efficiency
    c) Simpler operation
    d) Lower emissions per unit of power

**Answer:** b) Higher thermal efficiency

---

### 8. Important Points to Remember

*   Gas turbines operate on the **Brayton cycle**.
*   Key components are **compressor**, **combustion chamber**, and **turbine**.
*   The **turbine inlet temperature (TIT)** is a critical parameter for performance. Higher TIT generally leads to higher efficiency and power output.
*   **Pressure ratio** also significantly affects efficiency. There's an optimal pressure ratio for a given TIT.
*   **Intercooling, reheating, and regeneration** are methods to improve the efficiency and output of gas turbine cycles.
*   **Combined Cycle Gas Turbine (CCGT)** plants offer the highest thermal efficiencies among thermal power plants.
*   Gas turbines are well-suited for **peak load** operation due to their fast start-up capabilities.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
