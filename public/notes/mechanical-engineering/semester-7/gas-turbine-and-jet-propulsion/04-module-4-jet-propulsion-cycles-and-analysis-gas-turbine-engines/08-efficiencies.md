---
title: "efficiencies"
subject: "GAS TURBINE AND JET PROPULSION"
module: "Module 4: Jet propulsion – Cycles and analysis – Gas turbine engines"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463cc7"
status: "completed"
scrapedAt: "2026-05-20T18:14:14.973Z"
---
## GAS TURBINE AND JET PROPULSION - Module 4: Jet Propulsion – Cycles and Analysis – Gas Turbine Engines

### Topic: Efficiencies

---

**Introduction:**

This module delves into the fundamental principles governing gas turbine engines and their application in jet propulsion. A crucial aspect of understanding engine performance is the concept of **efficiency**. Efficiencies quantify how effectively a gas turbine engine converts fuel energy into useful work or thrust. This topic will explore various types of efficiencies relevant to gas turbine engines, drawing upon the principles of thermodynamics and fluid dynamics.

---

### 1. Overall Efficiency of a Gas Turbine Engine

The **overall efficiency** of a gas turbine engine, also known as the **propulsive efficiency** when applied to jet engines, represents the ratio of the useful power output to the energy supplied to the system. It's a comprehensive measure of how well the engine converts fuel energy into useful output.

**Key Concepts & Definitions:**

*   **Thermal Efficiency ($\eta_{th}$):** The ratio of the net work output of the engine to the heat supplied. This relates to the thermodynamic cycle of the engine.
    *   $\eta_{th} = \frac{\text{Net Work Output}}{\text{Heat Supplied}}$
*   **Propulsive Efficiency ($\eta_p$):** The ratio of the useful propulsive power (thrust multiplied by velocity) to the kinetic energy imparted to the working fluid. This is specific to jet propulsion.
    *   $\eta_p = \frac{\text{Useful Propulsive Power}}{\text{Kinetic Energy of Jet}} = \frac{P_{useful}}{KE_{jet}}$
    *   $P_{useful} = F_t \times V_a$, where $F_t$ is the net thrust and $V_a$ is the aircraft velocity.
    *   $KE_{jet} = \frac{1}{2} \dot{m} (V_j - V_a)^2$, where $\dot{m}$ is the mass flow rate of the jet and $V_j$ is the jet velocity.
*   **Overall Efficiency ($\eta_o$) or Propulsive Efficiency:** The product of thermal efficiency and propulsive efficiency. It represents the overall effectiveness of the engine in generating thrust from the fuel consumed.
    *   $\eta_o = \eta_{th} \times \eta_p$

**Learning Outcomes Alignment:**

*   **CO1:** Apply principles of thermodynamics and fluid dynamics to understand performance and efficiency. This section directly addresses this by defining thermal and propulsive efficiencies, which are rooted in these principles. (Knowledge Level: K3)
*   **CO4:** Understand principles and characteristics of jet propulsion systems. This section focuses on propulsive efficiency, a key characteristic of jet engines. (Knowledge Level: K2)

**Textbook References:**

*   **Ganesan (2017):** Likely discusses overall efficiency as a combination of thermal and propulsive aspects.
*   **Yahya (2011):** Will elaborate on the derivations of propulsive efficiency and its dependence on jet velocity and flight velocity.
*   **Mathur & Mathur (2010):** Will provide a foundational understanding of how these efficiencies contribute to the overall performance of jet propulsion.

**Important Points to Remember:**

*   For jet engines, maximizing propulsive efficiency is as crucial as maximizing thermal efficiency.
*   Propulsive efficiency is highest when the jet velocity is only slightly greater than the flight velocity.
*   The definition of "net work output" for a jet engine can be considered as the rate at which kinetic energy is imparted to the air and exhaust gases to produce thrust.

---

### 2. Component Efficiencies

Gas turbine engines consist of several key components: compressor, combustor, and turbine. Each of these components has its own efficiency, which collectively impacts the overall engine performance.

#### 2.1. Compressor Efficiency

The compressor is responsible for increasing the pressure of the incoming air. Its efficiency reflects how effectively this pressure rise is achieved with minimal energy input and losses.

**Key Concepts & Definitions:**

*   **Isentropic Efficiency of Compressor ($\eta_c$):** The ratio of the ideal (isentropic) work required to compress the air to the actual work consumed by the compressor.
    *   $\eta_c = \frac{\text{Isentropic work input}}{\text{Actual work input}}$
    *   $\eta_c = \frac{h_{t2s} - h_{t1}}{h_{t2} - h_{t1}}$ (where 't' denotes total conditions)
    *   For an ideal gas with constant specific heats: $\eta_c = \frac{T_{t2s} - T_{t1}}{T_{t2} - T_{t1}}$
*   **Pressure Ratio ($r_p$):** The ratio of the total pressure at the compressor outlet to the total pressure at the compressor inlet.
*   **Work Input Factor:** Represents the actual work done by the compressor.

**Learning Outcomes Alignment:**

*   **CO2:** Analyze performance characteristics and efficiencies of axial flow compressors. This section directly addresses compressor efficiency. (Knowledge Level: K4)
*   **CO3:** Analyze performance of gas turbine systems by understanding component characteristics. Compressor efficiency is a key characteristic. (Knowledge Level: K4)

**Textbook References:**

*   **Ganesan (2017):** Will provide detailed equations and explanations for compressor efficiency, likely discussing its dependence on pressure ratio and speed.
*   **Yahya (2011):** A primary resource for compressor theory, covering various types of compressors and their efficiency characteristics.
*   **Cohen, Rogers, & Saravanamuttoo (2019):** This reference is highly likely to have in-depth coverage of compressor efficiencies, including factors affecting them.

**Important Points to Remember:**

*   Real compressors deviate from the ideal isentropic process due to irreversibilities like friction and turbulence, leading to lower efficiencies.
*   Compressor efficiency is crucial as it impacts the work required from the turbine.

---

#### 2.2. Turbine Efficiency

The turbine extracts energy from the high-temperature, high-pressure gas coming from the combustor to drive the compressor and any accessories.

**Key Concepts & Definitions:**

*   **Isentropic Efficiency of Turbine ($\eta_t$):** The ratio of the actual work output of the turbine to the ideal (isentropic) work that could be extracted.
    *   $\eta_t = \frac{\text{Actual work output}}{\text{Isentropic work output}}$
    *   $\eta_t = \frac{h_{t1} - h_{t2}}{h_{t1} - h_{t2s}}$ (where 't' denotes total conditions)
    *   For an ideal gas with constant specific heats: $\eta_t = \frac{T_{t1} - T_{t2}}{T_{t1} - T_{t2s}}$
*   **Work Output:** The mechanical work delivered by the turbine.

**Learning Outcomes Alignment:**

*   **CO2:** Analyze performance characteristics and efficiencies of reaction turbines. This section focuses on turbine efficiency, which is applicable to reaction turbines. (Knowledge Level: K4)
*   **CO3:** Analyze performance of gas turbine systems by understanding component characteristics. Turbine efficiency is a critical component characteristic. (Knowledge Level: K4)

**Textbook References:**

*   **Ganesan (2017):** Will likely provide formulas and factors influencing turbine efficiency.
*   **Yahya (2011):** Offers detailed analysis of turbine aerodynamics and efficiency calculations.
*   **Cohen, Rogers, & Saravanamuttoo (2019):** A comprehensive source for turbine design and performance, including efficiency metrics.

**Important Points to Remember:**

*   Turbine efficiency directly affects the net work output of the engine.
*   Losses in the turbine (e.g., friction, leakage, aerodynamic losses) reduce its efficiency.

---

#### 2.3. Combustor Efficiency (Combustion Efficiency)

The combustor is where fuel is burned, adding heat to the compressed air. Its efficiency measures how completely the fuel is burned.

**Key Concepts & Definitions:**

*   **Combustion Efficiency ($\eta_b$):** The ratio of the actual heat released by the fuel to the theoretical heat that could be released by complete combustion of the fuel supplied.
    *   $\eta_b = \frac{\text{Actual heat released}}{\text{Theoretical heat released}}$
    *   $\eta_b = \frac{\dot{m}_f \times CV_{fuel} \times \text{fraction of fuel burnt}}{\dot{m}_f \times CV_{fuel}}$ (simplified)
    *   More practically, it can be related to the temperature rise achieved in the combustor compared to the ideal temperature rise.
*   **Calorific Value (CV) of Fuel:** The amount of heat released per unit mass of fuel upon complete combustion.
*   **Incomplete Combustion:** Leads to unburnt fuel and carbon monoxide, reducing efficiency.

**Learning Outcomes Alignment:**

*   **CO3:** Analyze performance of gas turbine systems by understanding component characteristics. Combustor efficiency is a key characteristic. (Knowledge Level: K4)

**Textbook References:**

*   **Ganesan (2017):** Will discuss the process of combustion and factors affecting its efficiency.
*   **Yahya (2011):** Might touch upon combustor design and efficiency considerations.
*   **Mathur & Mathur (2010):** Likely covers the fundamental principles of combustion within the gas turbine context.

**Important Points to Remember:**

*   Achieving high combustion efficiency is vital for maximizing the thermal energy available for expansion in the turbine.
*   Factors like fuel-air ratio, residence time, and turbulence affect combustion efficiency.

---

### 3. Other Relevant Efficiencies

Beyond the primary efficiencies, other factors and terms are used to analyze gas turbine performance.

**Key Concepts & Definitions:**

*   **Mechanical Efficiency ($\eta_m$):** The ratio of the power delivered to the output shaft (e.g., to drive a generator or propeller) to the power developed by the turbine. This accounts for frictional losses in bearings, gears, and seals.
    *   $\eta_m = \frac{\text{Shaft Power Output}}{\text{Turbine Power Developed}}$
*   **Volumetric Efficiency ($\eta_v$):** Primarily relevant for reciprocating engines, but in a broader sense, it relates to how effectively the working fluid fills the engine components. For gas turbines, it's less commonly used as a primary metric compared to the others.
*   **Nozzle Efficiency ($\eta_{noz}$):** For jet engines, the nozzle converts the thermal energy of the exhaust gases into kinetic energy to produce thrust. Nozzle efficiency accounts for losses in the nozzle due to friction and flow separation.
    *   $\eta_{noz} = \frac{\text{Actual kinetic energy increase}}{\text{Isentropic kinetic energy increase}}$
*   **Isentropic Efficiency of the Engine ($\eta_{isentropic}$):** This is the overall efficiency of the engine if all processes were isentropic. It serves as a benchmark for comparing real engine performance.

**Learning Outcomes Alignment:**

*   **CO1:** Apply principles of thermodynamics and fluid dynamics to understand performance and efficiency. Mechanical and nozzle efficiencies are directly related to these principles. (Knowledge Level: K3)
*   **CO4:** Understand principles and characteristics of jet propulsion systems. Nozzle efficiency is a crucial characteristic of jet engines. (Knowledge Level: K2)

**Textbook References:**

*   **Ganesan (2017):** Likely discusses mechanical efficiency and its impact on power output.
*   **Yahya (2011):** May cover nozzle efficiencies and their role in thrust generation.
*   **Mathur & Mathur (2010):** Will provide a broader understanding of efficiency definitions in propulsion systems.
*   **Rolls Royce (2015):** As a reference on jet engines, this book will certainly detail nozzle efficiencies and their impact on thrust.

**Important Points to Remember:**

*   Mechanical losses reduce the net power available for useful work.
*   Nozzle efficiency is critical for maximizing the exhaust jet velocity and thus thrust.

---

### 4. Factors Affecting Efficiencies

Several factors influence the various efficiencies of a gas turbine engine. Understanding these factors is crucial for optimizing performance.

**Key Factors:**

*   **Operating Conditions:** Ambient temperature, pressure, and altitude significantly impact compressor performance and engine output.
*   **Component Design:** The aerodynamic design of compressor and turbine blades, combustor geometry, and nozzle shape play a major role in their respective efficiencies.
*   **Material Properties:** High-temperature materials are essential for turbine performance, and their limitations can affect operating temperatures and efficiencies.
*   **Aerodynamic Losses:** Friction, turbulence, flow separation, and leakage are inherent irreversibilities that reduce component efficiencies.
*   **Combustion Imperfections:** Incomplete combustion, pressure drops in the combustor, and heat losses reduce the thermal energy available.
*   **Maintenance and Wear:** Degradation of components due to wear, fouling, and damage can lead to a decline in engine efficiency over time.
*   **Operating Point:** The engine's efficiency is highly dependent on its operating point relative to its design point (e.g., engine speed, throttle setting).

**Learning Outcomes Alignment:**

*   **CO1, CO2, CO3:** Understanding these factors allows for a deeper analysis of performance and efficiency as required by these outcomes. (Knowledge Level: K3, K4)

**Textbook References:**

*   **All textbooks:** Each of the listed textbooks will discuss factors affecting efficiencies in their respective chapters on components and engine performance.

**Important Points to Remember:**

*   Optimizing gas turbine performance involves a complex interplay of design, operating conditions, and maintenance.

---

### 5. Practice Questions and Exercises

**Question 1:**

A turbojet engine has the following parameters: Aircraft velocity ($V_a$) = 250 m/s, Jet velocity ($V_j$) = 700 m/s, Net thrust ($F_t$) = 8000 N.
Calculate:
a) The propulsive efficiency ($\eta_p$).
b) The useful propulsive power.

**Answer 1:**

a) Propulsive efficiency ($\eta_p$) is given by:
$\eta_p = \frac{2 V_a}{V_a + V_j}$
$\eta_p = \frac{2 \times 250}{250 + 700} = \frac{500}{950} \approx 0.526$ or 52.6%

b) Useful propulsive power ($P_{useful}$):
$P_{useful} = F_t \times V_a$
$P_{useful} = 8000 \, \text{N} \times 250 \, \text{m/s} = 2,000,000 \, \text{W} = 2 \, \text{MW}$

---

**Question 2:**

In a gas turbine engine, the compressor requires 500 kJ/kg of work input, and its isentropic efficiency is 85%. The turbine produces 800 kJ/kg of work output, and its isentropic efficiency is 90%. The specific heat of air is 1.005 kJ/kg.K and the specific heat of gas is 1.148 kJ/kg.K.
Calculate:
a) The actual work input to the compressor.
b) The actual work output from the turbine.
c) The net work output of the engine per kg of air.

**Answer 2:**

a) Actual work input to the compressor:
$\eta_c = \frac{\text{Isentropic work input}}{\text{Actual work input}}$
Actual work input = $\frac{\text{Isentropic work input}}{\eta_c}$
Assuming the isentropic work input is what would be required for the actual pressure ratio, if it's given as 500 kJ/kg, then:
Actual work input = $\frac{500 \, \text{kJ/kg}}{0.85} \approx 588.24 \, \text{kJ/kg}$

b) Actual work output from the turbine:
$\eta_t = \frac{\text{Actual work output}}{\text{Isentropic work output}}$
Actual work output = $\eta_t \times \text{Isentropic work output}$
Assuming the isentropic work output is given as 800 kJ/kg, then:
Actual work output = $0.90 \times 800 \, \text{kJ/kg} = 720 \, \text{kJ/kg}$

c) Net work output of the engine per kg of air:
Net work output = Actual work output from turbine - Actual work input to compressor
Net work output = $720 \, \text{kJ/kg} - 588.24 \, \text{kJ/kg} \approx 131.76 \, \text{kJ/kg}$

*(Note: In a real analysis, isentropic work input/output would be calculated from temperature changes based on the pressure ratio and specific heats.)*

---

**Question 3:**

A turbojet engine operates with a mass flow rate of air of 50 kg/s. The exhaust jet velocity is 800 m/s, and the aircraft is flying at 200 m/s. The fuel-air ratio is 0.02. The lower heating value of the fuel is 43 MJ/kg. The thermal efficiency of the engine is 25%.
Calculate:
a) The net thrust.
b) The thermal efficiency.
c) The overall efficiency.

**Answer 3:**

a) Net thrust ($F_t$):
$F_t = \dot{m} (V_j - V_a)$
$F_t = 50 \, \text{kg/s} (800 \, \text{m/s} - 200 \, \text{m/s})$
$F_t = 50 \times 600 = 30,000 \, \text{N} = 30 \, \text{kN}$

b) Thermal efficiency ($\eta_{th}$):
$\eta_{th} = \frac{\text{Net work output}}{\text{Heat supplied}}$
The net work output can be related to the propulsive power and the kinetic energy of the jet.
Heat supplied per second = $\dot{m}_f \times CV_{fuel} = (\dot{m} \times \text{fuel-air ratio}) \times CV_{fuel}$
Heat supplied per second = $(50 \, \text{kg/s} \times 0.02) \times 43 \times 10^6 \, \text{J/kg}$
Heat supplied per second = $1 \, \text{kg/s} \times 43 \times 10^6 \, \text{J/kg} = 43 \times 10^6 \, \text{J/s} = 43 \, \text{MW}$

The net work output of the engine per second is the propulsive power.
Propulsive power ($P_{propulsive}$) = $F_t \times V_a = 30,000 \, \text{N} \times 200 \, \text{m/s} = 6 \times 10^6 \, \text{W} = 6 \, \text{MW}$.
So, $\eta_{th} = \frac{6 \times 10^6 \, \text{W}}{43 \times 10^6 \, \text{J/s}} \approx 0.1395$ or 13.95%.
*(Note: The provided thermal efficiency of 25% in the question might be for a different operating condition or a simplified assumption. Using the derived values, the thermal efficiency is 13.95%.)*

c) Overall efficiency ($\eta_o$):
$\eta_o = \eta_{th} \times \eta_p$
First, calculate propulsive efficiency ($\eta_p$):
$\eta_p = \frac{2 V_a}{V_a + V_j} = \frac{2 \times 200}{200 + 800} = \frac{400}{1000} = 0.4$ or 40%

Now, calculate overall efficiency using the derived thermal efficiency:
$\eta_o = 0.1395 \times 0.4 \approx 0.0558$ or 5.58%

If we assume the given 25% thermal efficiency is correct:
$\eta_o = 0.25 \times 0.4 = 0.10$ or 10%

---

### 6. Summary of Key Efficiencies

| Efficiency Type           | Symbol         | Definition                                                                               | Relevance                                                                      |
| :------------------------ | :------------- | :--------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------- |
| **Thermal Efficiency**    | $\eta_{th}$    | Net Work Output / Heat Supplied                                                          | Thermodynamic cycle effectiveness.                                             |
| **Propulsive Efficiency** | $\eta_p$       | Useful Propulsive Power / Kinetic Energy of Jet                                          | Effectiveness of converting jet kinetic energy to thrust.                      |
| **Overall Efficiency**    | $\eta_o$       | $\eta_{th} \times \eta_p$ (or Useful Power Output / Fuel Energy Input)                   | Overall engine effectiveness from fuel to useful output.                     |
| **Compressor Efficiency** | $\eta_c$       | Isentropic Work Input / Actual Work Input                                                | How effectively the compressor increases air pressure.                         |
| **Turbine Efficiency**    | $\eta_t$       | Actual Work Output / Isentropic Work Output                                              | How effectively the turbine extracts energy from the gas.                      |
| **Combustor Efficiency**  | $\eta_b$       | Actual Heat Released / Theoretical Heat Released                                         | Completeness of fuel combustion.                                               |
| **Mechanical Efficiency** | $\eta_m$       | Shaft Power Output / Turbine Power Developed                                             | Accounts for frictional losses in rotating parts.                              |
| **Nozzle Efficiency**     | $\eta_{noz}$   | Actual Kinetic Energy Increase / Isentropic Kinetic Energy Increase                      | Effectiveness of nozzle in converting thermal energy to kinetic energy.        |

---

This comprehensive study guide provides a foundation for understanding the various efficiencies relevant to gas turbine engines and jet propulsion, as covered in Module 4. Remember to consult the recommended textbooks for more detailed derivations and specific examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
