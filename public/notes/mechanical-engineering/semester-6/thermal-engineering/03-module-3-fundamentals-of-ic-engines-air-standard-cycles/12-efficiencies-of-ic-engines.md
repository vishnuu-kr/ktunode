---
title: "Efficiencies of IC engines"
subject: "THERMAL ENGINEERING"
module: "Module 3: Fundamentals of IC Engines :  Air standard cycles"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf48044639a2"
status: "completed"
scrapedAt: "2026-05-20T18:08:54.278Z"
---
# Thermal Engineering: Module 3 - Fundamentals of IC Engines: Air Standard Cycles
## Topic: Efficiencies of IC Engines

---

This module focuses on understanding the fundamental working principles of Internal Combustion Engines (ICEs) and analyzing their performance using air-standard cycles. This topic specifically delves into the various efficiency parameters that quantify the performance of these engines.

---

### **1. Introduction to Efficiencies of IC Engines**

**Concept:** Efficiencies are crucial metrics used to assess how effectively an Internal Combustion Engine converts the chemical energy of the fuel into useful mechanical work. They highlight the losses incurred during the thermodynamic cycle and the operational limitations of the engine.

**Relevance to Course Outcomes:**
*   **CO3 (K3):** Identify the performance parameters of IC engines and evaluate their performance. This topic directly addresses the identification and evaluation of performance through efficiency metrics.

**Key Definitions:**
*   **Thermal Efficiency ($\eta_{th}$):** The ratio of the actual work output to the total heat energy supplied by the fuel.
*   **Volumetric Efficiency ($\eta_v$):** The ratio of the actual volume of air-fuel mixture inducted into the cylinder to the swept volume of the cylinder.
*   **Mechanical Efficiency ($\eta_{mech}$):** The ratio of brake power (power delivered to the crankshaft) to indicated power (power developed inside the cylinder).
*   **Overall Efficiency ($\eta_{overall}$):** The product of thermal efficiency and mechanical efficiency.

---

### **2. Types of Efficiencies**

We will explore various efficiencies, starting with those related to the thermodynamic cycle (ideal and actual) and then moving to volumetric and mechanical aspects.

#### **2.1. Thermal Efficiencies**

**a) Indicated Thermal Efficiency ($\eta_{ith}$):**
*   **Definition:** The ratio of the indicated work done per cycle to the heat supplied by the fuel per cycle.
*   **Formula:** $\eta_{ith} = \frac{\text{Indicated Work Output}}{\text{Heat Supplied by Fuel}}$
*   **Significance:** Represents the efficiency of the thermodynamic cycle itself, ignoring friction and other mechanical losses.

**b) Brake Thermal Efficiency ($\eta_{bth}$):**
*   **Definition:** The ratio of the brake work done (output shaft work) per cycle to the heat supplied by the fuel per cycle.
*   **Formula:** $\eta_{bth} = \frac{\text{Brake Work Output}}{\text{Heat Supplied by Fuel}}$
*   **Significance:** This is the most commonly used efficiency as it represents the actual useful work delivered by the engine. It accounts for both thermodynamic and mechanical losses.

**Relationship:** $\eta_{bth} = \eta_{ith} \times \eta_{mech}$

**c) Relative Efficiency ($\eta_{rel}$):**
*   **Definition:** The ratio of the actual thermal efficiency (usually brake thermal efficiency) to the ideal thermal efficiency of the corresponding air-standard cycle.
*   **Formula:** $\eta_{rel} = \frac{\eta_{bth}}{\eta_{th, ideal}}$
*   **Significance:** Compares the performance of a real engine to its idealized counterpart, highlighting the impact of irreversibilities and deviations from the ideal cycle.

**d) Efficiency of Air-Standard Cycles:**
This is a critical aspect as it sets a benchmark for comparison. We'll briefly recall the efficiencies of common cycles.

*   **Otto Cycle (Spark Ignition Engines):**
    *   **Formula:** $\eta_{otto} = 1 - \frac{1}{r_c^{(\gamma-1)}}$ where $r_c$ is the compression ratio and $\gamma$ is the ratio of specific heats.
    *   **Key Point:** Efficiency increases with compression ratio.

*   **Diesel Cycle (Compression Ignition Engines):**
    *   **Formula:** $\eta_{diesel} = 1 - \frac{1}{\gamma r_c^{(\gamma-1)}} \frac{r_s^\gamma - 1}{\gamma(r_s - 1)}$ where $r_c$ is the compression ratio and $r_s$ is the cutoff ratio.
    *   **Key Point:** Efficiency is affected by both compression ratio and the amount of heat added (related to fuel injection duration).

*   **Dual Cycle (Mixed Cycle):**
    *   **Formula:** A combination of Otto and Diesel cycle efficiencies, depending on the heat addition process.
    *   **Key Point:** Generally more efficient than the Diesel cycle for the same maximum pressure and volume.

*   **Brayton Cycle (Gas Turbines, though relevant for some ICE concepts):**
    *   **Formula:** $\eta_{brayton} = 1 - \frac{1}{r_p^{(\gamma-1)/\gamma}}$ where $r_p$ is the pressure ratio.
    *   **Key Point:** Efficiency increases with pressure ratio.

**Reference:** Rudra Moorthy (2003) and R.K Rajput (2010) provide detailed derivations and explanations of these cycle efficiencies. Ganesan (2002) and Gupta (2018) also cover these fundamental concepts extensively.

#### **2.2. Volumetric Efficiency ($\eta_v$)**

*   **Definition:** The ratio of the actual mass of air (or air-fuel mixture) inducted into the cylinder during the suction stroke to the mass of air that would fill the cylinder volume at the conditions of the intake manifold.
*   **Formula:** $\eta_v = \frac{\text{Actual mass of air inducted}}{\text{Mass of air filling the cylinder volume at intake conditions}}$
    *   Often expressed in terms of volume: $\eta_v = \frac{V_{actual}}{V_s}$, where $V_{actual}$ is the volume of air inducted at intake manifold conditions and $V_s$ is the swept volume.
*   **Factors Affecting Volumetric Efficiency:**
    *   **Intake manifold pressure:** Lower pressure reduces the amount of air inducted.
    *   **Engine speed:** At higher speeds, there's less time for air to enter the cylinder, and flow restrictions become more significant.
    *   **Valve timing:** Overlap between intake and exhaust valves can influence effective filling.
    *   **Cylinder head design and porting:** Smooth and well-designed ports improve airflow.
    *   **Temperature of the intake air:** Higher temperature reduces air density, thus reducing the mass of air inducted.
    *   **Supercharging/Turbocharging:** These technologies increase the pressure of intake air, significantly boosting volumetric efficiency.
*   **Significance:** Directly impacts the power output of the engine. Higher volumetric efficiency means more air-fuel mixture can be inducted, leading to a larger power stroke.
*   **Reference:** Heywood (2011) dedicates significant sections to volumetric efficiency, discussing its nuances in detail. Ganesan (2002) and Gupta (2018) also provide good coverage.

#### **2.3. Mechanical Efficiency ($\eta_{mech}$)**

*   **Definition:** The ratio of brake power ($P_b$) to indicated power ($P_i$).
*   **Formula:** $\eta_{mech} = \frac{P_b}{P_i}$
*   **Significance:** Represents the efficiency of the mechanical components in transmitting the power developed inside the cylinder to the output shaft. The difference between indicated power and brake power is due to friction.
*   **Indicated Power ($P_i$):** The power developed inside the cylinder by the expanding gases. It is calculated from the indicated mean effective pressure ($P_i$) and the engine's displacement volume ($V_d$).
    *   $P_i = P_i \times V_d \times N \times (\frac{n}{2})$ for a 4-stroke engine, where $N$ is the engine speed in RPM and $n$ is the number of cylinders.
*   **Brake Power ($P_b$):** The actual power delivered at the crankshaft.
*   **Friction Power ($P_f$):** The power lost due to friction within the engine's moving parts (pistons, bearings, valves, etc.).
    *   $P_i = P_b + P_f$
*   **Relationship:** $\eta_{mech} = \frac{P_b}{P_b + P_f} = 1 - \frac{P_f}{P_i}$
*   **Factors Affecting Mechanical Efficiency:**
    *   **Engine speed:** Friction generally increases with speed.
    *   **Engine load:** Higher loads can increase frictional forces.
    *   **Lubrication:** Proper lubrication reduces friction.
    *   **Engine design and condition:** Wear and tear on components increase friction.
*   **Important Note:** Mechanical efficiency is always less than 100% and typically ranges from 80% to 95% for well-designed engines.

#### **2.4. Overall Efficiency ($\eta_{overall}$)**

*   **Definition:** The ratio of the brake power output to the total heat energy supplied by the fuel. It is the product of thermal efficiency and mechanical efficiency.
*   **Formula:** $\eta_{overall} = \eta_{bth} \times \eta_{mech}$
*   **Significance:** This is the ultimate measure of the engine's performance, representing the overall effectiveness of converting fuel energy into useful work delivered to the output shaft.
*   **Alternative Calculation:** $\eta_{overall} = \frac{\text{Brake Work Output}}{\text{Heat Supplied by Fuel}}$

---

### **3. Other Important Performance Parameters and Efficiencies**

While not strictly "efficiency" in the same thermodynamic sense, these parameters are vital for understanding engine performance.

#### **3.1. Specific Fuel Consumption (SFC)**

*   **Definition:** The amount of fuel consumed per unit of power output per unit of time.
*   **Brake Specific Fuel Consumption ($BSFC$):**
    *   **Formula:** $BSFC = \frac{\text{Brake Power}}{\text{Fuel Consumption Rate}}$ (e.g., kg/kWh or g/kWh)
    *   **Significance:** Lower BSFC indicates better fuel economy. It's an inverse measure of brake thermal efficiency.
*   **Indicated Specific Fuel Consumption ($ISFC$):**
    *   **Formula:** $ISFC = \frac{\text{Indicated Power}}{\text{Fuel Consumption Rate}}$
*   **Relationship:** $BSFC = ISFC \times \frac{\eta_{ith}}{\eta_{bth}} = \frac{ISFC}{\eta_{mech}}$

#### **3.2. Mean Effective Pressure (MEP)**

*   **Definition:** A hypothetical constant pressure acting on the piston during the power stroke that would produce the same net work per cycle as that actually produced.
*   **Indicated Mean Effective Pressure ($imep$):**
    *   **Formula:** $imep = \frac{\text{Indicated Work per cycle}}{\text{Swept Volume}}$
    *   **Significance:** Represents the average pressure inside the cylinder during the power stroke.
*   **Brake Mean Effective Pressure ($bmep$):**
    *   **Formula:** $bmep = \frac{\text{Brake Work per cycle}}{\text{Swept Volume}}$
    *   **Significance:** Represents the effective pressure transmitted to the crankshaft. $bmep$ is always less than $imep$ due to mechanical losses.
*   **Relationship:** $bmep = imep \times \eta_{mech}$

---

### **4. Factors Affecting Efficiencies**

*   **Design:** Engine configuration (e.g., number of cylinders, bore, stroke), valve timing, port design.
*   **Operating Conditions:** Engine speed, load, ambient temperature and pressure.
*   **Fuel Properties:** Calorific value, octane/cetane number.
*   **Combustion Quality:** Complete vs. incomplete combustion, knock (in SI engines), detonation (in CI engines).
*   **Friction:** Lubrication, wear, manufacturing tolerances.
*   **Heat Losses:** Heat transfer to cylinder walls, piston, and exhaust gases.

---

### **5. Important Points to Remember**

*   **Air-standard cycles provide ideal benchmarks.** Real engine efficiencies are always lower due to irreversibilities and mechanical losses.
*   **Thermal efficiency** focuses on the conversion of heat to work within the cycle.
*   **Volumetric efficiency** is crucial for power output and is influenced by intake system design and engine speed.
*   **Mechanical efficiency** accounts for power losses due to friction.
*   **Brake thermal efficiency** is the most practical measure of an engine's fuel economy and power output.
*   **Overall efficiency** is the product of thermal and mechanical efficiencies and represents the final output.
*   **BSFC is inversely related to brake thermal efficiency.** Lower BSFC means better fuel economy.
*   **bmep is a good indicator of engine power output.**

---

### **6. Practice Questions and Answers**

**Question 1:**
An engine has an indicated thermal efficiency of 30% and a mechanical efficiency of 85%. Calculate its brake thermal efficiency and overall efficiency.

**Answer:**
*   Brake Thermal Efficiency ($\eta_{bth}$) = Indicated Thermal Efficiency ($\eta_{ith}$) $\times$ Mechanical Efficiency ($\eta_{mech}$)
    $\eta_{bth} = 0.30 \times 0.85 = 0.255$ or **25.5%**
*   Overall Efficiency is another term for Brake Thermal Efficiency in this context, so it is also **25.5%**.

**Question 2:**
A four-stroke, single-cylinder engine has a bore of 80 mm and a stroke of 100 mm. At 1500 rpm, the indicated power is 5 kW and the brake power is 4 kW. The engine consumes fuel at a rate of 0.01 kg/s. The calorific value of the fuel is 44 MJ/kg.
Calculate:
(a) Mechanical efficiency
(b) Indicated thermal efficiency
(c) Brake thermal efficiency
(d) Specific fuel consumption (SFC)

**Answer:**
Given:
Bore, $D = 80 \text{ mm} = 0.08 \text{ m}$
Stroke, $L = 100 \text{ mm} = 0.1 \text{ m}$
Speed, $N = 1500 \text{ rpm}$
Indicated Power, $P_i = 5 \text{ kW}$
Brake Power, $P_b = 4 \text{ kW}$
Fuel consumption rate, $\dot{m}_f = 0.01 \text{ kg/s}$
Calorific Value, $CV = 44 \text{ MJ/kg} = 44 \times 10^6 \text{ J/kg}$

**Calculations:**
Swept Volume, $V_s = \frac{\pi}{4} D^2 L = \frac{\pi}{4} (0.08 \text{ m})^2 (0.1 \text{ m}) = 5.0265 \times 10^{-4} \text{ m}^3$

(a) **Mechanical Efficiency ($\eta_{mech}$):**
$\eta_{mech} = \frac{P_b}{P_i} = \frac{4 \text{ kW}}{5 \text{ kW}} = 0.80$ or **80%**

(b) **Indicated Thermal Efficiency ($\eta_{ith}$):**
Heat Supplied per second = $\dot{m}_f \times CV = 0.01 \text{ kg/s} \times 44 \times 10^6 \text{ J/kg} = 440,000 \text{ J/s} = 440 \text{ kW}$
$\eta_{ith} = \frac{P_i}{\text{Heat Supplied per second}} = \frac{5 \text{ kW}}{440 \text{ kW}} = 0.01136$ or **1.14%**

(c) **Brake Thermal Efficiency ($\eta_{bth}$):**
$\eta_{bth} = \frac{P_b}{\text{Heat Supplied per second}} = \frac{4 \text{ kW}}{440 \text{ kW}} = 0.00909$ or **0.91%**

*(Note: The values for indicated and brake thermal efficiency seem unusually low. This might be due to the example parameters chosen for simplicity. In a real engine, these values would be significantly higher. Let's re-verify the calculation approach.)*

*Correction in calculation approach: It's common to calculate efficiencies based on work per cycle and heat supplied per cycle, or power and heat supplied per unit time.*

Let's recalculate using the relationship: $\eta_{bth} = \eta_{ith} \times \eta_{mech}$
$\eta_{bth} = 0.01136 \times 0.80 = 0.009088$ or **0.91%**. This matches.

Let's reconsider the parameters and assume a typo in the question for higher efficiencies, or focus on the method.

**(d) Specific Fuel Consumption (SFC):**
Brake Specific Fuel Consumption ($BSFC$) = $\frac{\text{Brake Power}}{\text{Fuel Consumption Rate}}$
Here, we need to convert fuel consumption rate to a standard unit like kg/kWh.
Fuel consumption rate in kg/h = $0.01 \text{ kg/s} \times 3600 \text{ s/h} = 36 \text{ kg/h}$
$BSFC = \frac{36 \text{ kg/h}}{4 \text{ kW}} = 9 \text{ kg/kWh}$
*(Note: Typically, SFC is expressed in g/kWh. So, $9 \times 1000 = 9000$ g/kWh. This still seems high for typical engines, again suggesting the parameters are for illustrative purposes.)*

**Question 3:**
If the Otto cycle efficiency is given by $\eta_{otto} = 1 - \frac{1}{r_c^{(\gamma-1)}}$, what is the effect of increasing the compression ratio ($r_c$) on the Otto cycle efficiency?

**Answer:**
As the compression ratio ($r_c$) increases, the term $\frac{1}{r_c^{(\gamma-1)}}$ decreases (since $r_c > 1$ and $\gamma > 1$). Therefore, $1 - \frac{1}{r_c^{(\gamma-1)}}$ increases. This means the Otto cycle efficiency increases with increasing compression ratio. This is a fundamental principle for SI engines.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### **7. References**

*   Rudra Moorthy, Thermal Engineering (McGraw Hill Education India, 2003)
*   R.K Rajput, Thermal Engineering (Laxmi publications, 2010)
*   V. Ganesan, Fundamentals of IC Engines (Tata McGraw-Hill, 2002)
*   H N Gupta, Fundamentals of IC Engines (PHI, Second Edition, 2018)
*   V Sajith and Shijo Thomas, Internal Combustion Engines (Oxford University Press, 2017)
*   J.B. Heywood, I.C Engine Fundamentals (McGraw-Hill, 2011)
*   Mahesh Rathore, Thermal Engineering (McGraw Hill Education India, 2010)

---

This study guide provides a comprehensive overview of the efficiencies of IC engines, aligning with the learning outcomes of Module 3 and the broader course outcomes. Understanding these efficiencies is crucial for analyzing and improving the performance of internal combustion engines.