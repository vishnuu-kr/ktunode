---
title: "Specific fuel
consumption"
subject: "THERMAL ENGINEERING"
module: "Module 3: Fundamentals of IC Engines :  Air standard cycles"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf48044639a3"
status: "completed"
scrapedAt: "2026-05-20T18:08:54.972Z"
---
# Thermal Engineering: Module 3 - Fundamentals of IC Engines: Air Standard Cycles - Specific Fuel Consumption

## 1. Introduction to Specific Fuel Consumption (SFC)

**Course Outcome Alignment:** CO3 (Identify the performance parameters of IC engines and evaluate their performance. Knowledge Level: K3)

Specific Fuel Consumption (SFC) is a crucial performance parameter for Internal Combustion (IC) engines. It quantifies how efficiently an engine converts fuel energy into useful work output. Understanding SFC is essential for evaluating engine performance and comparing different engine designs.

**Key Concept:** SFC relates the fuel consumed by an engine to the power it produces.

**Definition:**
Specific Fuel Consumption (SFC) is defined as the rate of fuel consumption per unit of power output.

Mathematically, it can be expressed as:

$SFC = \frac{\text{Fuel Consumption Rate}}{\text{Power Output}}$

**Units:**
*   **Gravimetric SFC:** Typically expressed in **kg/kWh** (kilograms of fuel per kilowatt-hour of work). This is the most common unit.
*   **Volumetric SFC:** Less common, expressed in **liters/kWh** (liters of fuel per kilowatt-hour of work). This requires knowledge of fuel density.

**Important to Remember:**
*   A **lower** SFC value indicates a **more fuel-efficient** engine.

## 2. Types of Specific Fuel Consumption

While the fundamental definition remains the same, SFC can be specified for different conditions:

*   **Brake Specific Fuel Consumption (BSFC):** This is the most commonly used SFC. It relates fuel consumption to the power delivered at the engine's crankshaft (brake power).
    *   **Formula:** $BSFC = \frac{\text{Fuel Consumption Rate (kg/h)}}{\text{Brake Power (kW)}}$

*   **Indicated Specific Fuel Consumption (ISFC):** This relates fuel consumption to the indicated power (power developed inside the cylinder before frictional losses).
    *   **Formula:** $ISFC = \frac{\text{Fuel Consumption Rate (kg/h)}}{\text{Indicated Power (kW)}}$

*   **Thermal Specific Fuel Consumption (TSFC):** This relates fuel consumption to the heat energy supplied. It's less common for practical performance analysis but useful for theoretical comparisons.

**Relationship between BSFC and ISFC:**

Since Brake Power (BP) = Indicated Power (IP) - Frictional Power (FP), and fuel consumption is primarily related to the indicated work, we can relate BSFC and ISFC:

$BSFC = ISFC \times \frac{IP}{BP}$

The term $\frac{IP}{BP}$ is the inverse of the mechanical efficiency ($\eta_m$), which is $\frac{BP}{IP}$.

Therefore, $BSFC = \frac{ISFC}{\eta_m}$

This shows that BSFC is always greater than ISFC due to frictional losses.

**Textbook Reference:**
*   **Rudra Moorthy:** Likely discusses BSFC extensively as a key performance indicator.
*   **R.K Rajput:** Provides a comprehensive overview of engine performance parameters, including BSFC.
*   **V. Ganesan:** Introduces BSFC as a measure of fuel economy.
*   **H N Gupta:** Explains the distinction between indicated and brake power and their impact on SFC.
*   **V Sajith and Shijo Thomas:** Detail the practical measurement and significance of BSFC in modern engines.

## 3. Calculating Specific Fuel Consumption

To calculate SFC, we need to measure or estimate two primary quantities:

1.  **Fuel Consumption Rate:** This can be measured using a fuel flow meter or by weighing the fuel consumed over a specific time period.
2.  **Power Output:** This is the power delivered by the engine, typically measured at the crankshaft (Brake Power) using a dynamometer.

**Example Calculation (BSFC):**

An engine consumes 5 kg of fuel per hour and produces a brake power of 15 kW. Calculate its Brake Specific Fuel Consumption (BSFC).

**Given:**
*   Fuel Consumption Rate = 5 kg/h
*   Brake Power = 15 kW

**Formula:**
$BSFC = \frac{\text{Fuel Consumption Rate (kg/h)}}{\text{Brake Power (kW)}}$

**Calculation:**
$BSFC = \frac{5 \text{ kg/h}}{15 \text{ kW}} = 0.333 \text{ kg/kWh}$

**Interpretation:** The engine consumes 0.333 kg of fuel for every kilowatt-hour of work delivered at the crankshaft.

## 4. Specific Fuel Consumption and Air-Standard Cycles

While air-standard cycles (like Otto, Diesel, Dual) are simplified models that assume air as the working fluid and don't account for real-world complexities like fuel properties and combustion, they provide a fundamental understanding of how engine design parameters influence thermal efficiency.

**How SFC relates to Air-Standard Cycle Efficiency:**

The efficiency of an air-standard cycle is defined as:

$\eta_{th} = \frac{\text{Net Work Output}}{\text{Heat Input}} = 1 - \frac{Q_{out}}{Q_{in}}$

This efficiency tells us how much of the heat input is converted into useful work. However, it doesn't directly tell us how much fuel is consumed.

**Bridging the Gap:**

To relate SFC to air-standard cycles, we need to consider the energy content of the fuel.

*   **Heat Input (from fuel):** $Q_{in} = \dot{m}_f \times CV$
    Where:
    *   $\dot{m}_f$ = mass flow rate of fuel (e.g., kg/s)
    *   $CV$ = Calorific Value of the fuel (e.g., kJ/kg)

*   **Net Work Output:** $W_{net} = \text{Power Output} \times \text{time}$

**Connecting SFC and Thermal Efficiency:**

Consider a specific time 't'.
Brake Power ($P_{BP}$) is the brake work per unit time.
Fuel Consumption Rate ($\dot{m}_f$) is the fuel mass per unit time.

$BSFC = \frac{\dot{m}_f \text{ (kg/h)}}{P_{BP} \text{ (kW)}}$

Thermal efficiency ($\eta_{th}$) can be related to the brake thermal efficiency ($\eta_{bth}$) in a real engine:

$\eta_{bth} = \frac{\text{Brake Power Output}}{\text{Rate of Heat Input from Fuel}}$

Rate of Heat Input from Fuel = $\dot{m}_f \times CV$ (assuming $\dot{m}_f$ is in kg/s, CV in kJ/kg, then Power is in kW)

So, $\eta_{bth} = \frac{P_{BP}}{\dot{m}_f \times CV}$

Rearranging this:
$\frac{\dot{m}_f}{P_{BP}} = \frac{1}{\eta_{bth} \times CV}$

Since $BSFC = \frac{\dot{m}_f (\text{kg/h})}{P_{BP} \text{ (kW)}}$, we need to ensure units are consistent.
If $\dot{m}_f$ is in kg/s and CV in kJ/kg:
$P_{BP} (\text{kW}) = \eta_{bth} \times \dot{m}_f (\text{kg/s}) \times CV (\text{kJ/kg})$

To get BSFC in kg/kWh:
$\dot{m}_f (\text{kg/h}) = \dot{m}_f (\text{kg/s}) \times 3600 \text{ (s/h)}$
$BSFC = \frac{\dot{m}_f (\text{kg/s}) \times 3600}{P_{BP} (\text{kW})}$

Substitute $P_{BP}$:
$BSFC = \frac{\dot{m}_f (\text{kg/s}) \times 3600}{\eta_{bth} \times \dot{m}_f (\text{kg/s}) \times CV (\text{kJ/kg})}$
$BSFC = \frac{3600}{\eta_{bth} \times CV}$

This equation highlights the inverse relationship between BSFC and brake thermal efficiency. **Higher thermal efficiency and higher calorific value of fuel lead to lower BSFC.**

**Textbook Reference:**
*   **V. Ganesan:** Discusses the relationship between thermal efficiency and fuel consumption.
*   **H N Gupta:** Explains how brake thermal efficiency is a measure of how well the engine utilizes fuel energy.
*   **J.B.Heywood:** Provides detailed analysis of engine efficiency and fuel consumption, linking them to combustion processes and engine design.

**Important to Remember:**
*   Air-standard cycles predict **thermal efficiency**, not SFC directly.
*   SFC is a **real-engine parameter** that is influenced by thermal efficiency, mechanical efficiency, and fuel properties.
*   Higher thermal efficiency means less fuel is wasted as heat, leading to lower SFC.

## 5. Factors Affecting Specific Fuel Consumption

Several factors influence the SFC of an IC engine:

*   **Engine Design and Type:**
    *   **Otto vs. Diesel:** Diesel engines generally have higher compression ratios, leading to higher thermal efficiencies and thus lower SFC compared to comparable spark-ignition engines, especially at part load.
    *   **Cycle Type:** Cycles with higher theoretical efficiencies (e.g., higher compression ratios in Otto/Diesel cycles) tend to result in lower SFC.
    *   **Number of Cylinders, Engine Size:** Larger engines may have different SFC characteristics than smaller ones due to varying friction losses.

*   **Operating Conditions:**
    *   **Load:** SFC typically varies with engine load. BSFC is often lowest at moderate loads and increases at very low loads (due to fixed frictional losses) and very high loads (due to incomplete combustion or throttling losses).
    *   **Engine Speed (RPM):** Similar to load, SFC has an optimal speed range. High speeds can increase friction, while very low speeds may lead to inefficient combustion.
    *   **Ambient Conditions:** Temperature, pressure, and humidity of intake air affect volumetric efficiency and combustion.

*   **Engine Condition and Maintenance:**
    *   **Friction:** Worn bearings, piston rings, etc., increase frictional losses, increasing BSFC.
    *   **Combustion Quality:** Poor spark timing, fuel-air mixture, or injector issues can lead to incomplete combustion, increasing SFC.
    *   **Sealing:** Leaks in the intake or exhaust system can reduce efficiency.

*   **Fuel Properties:**
    *   **Calorific Value (CV):** Higher CV fuels provide more energy per unit mass, leading to lower SFC for the same power output (as seen in the formula $BSFC = \frac{3600}{\eta_{bth} \times CV}$).
    *   **Stoichiometric Air-Fuel Ratio:** Different fuels require different amounts of air for complete combustion, affecting the required fuel injection quantities.

*   **Air-Fuel Ratio:**
    *   **Stoichiometric:** Generally results in good efficiency.
    *   **Lean Mixture:** Can improve efficiency at part load but may lead to misfires at higher loads.
    *   **Rich Mixture:** Increases SFC due to unburnt fuel and often lower peak temperatures.

**Textbook Reference:**
*   **Rudra Moorthy:** Discusses the impact of load and speed on engine performance curves, including SFC.
*   **R.K Rajput:** Covers the influence of various operating parameters on engine efficiency and SFC.
*   **V. Ganesan:** Analyzes the effect of compression ratio and other design factors on SFC.
*   **V Sajith and Shijo Thomas:** Detail the practical considerations of engine tuning and maintenance on SFC.
*   **I.C engine fundamentals by J.B.Heywood:** Provides in-depth analysis of the factors affecting fuel consumption and emissions.

**Important to Remember:**
*   The "best" SFC is achieved under specific optimal operating conditions.
*   Engine manufacturers provide SFC maps or curves showing SFC variation with load and speed.

## 6. Specific Fuel Consumption Maps and Curves

Engine performance is often presented graphically in the form of **performance maps** or **specific fuel consumption curves**.

*   **BSFC vs. Load (at constant speed):** A typical curve shows BSFC decreasing as load increases from idle, reaching a minimum at moderate load, and then increasing again at higher loads.

*   **BSFC vs. Speed (at constant load):** This curve shows how BSFC changes with engine speed for a fixed output power.

*   **BSFC Contour Maps (Most Comprehensive):** These are 2D plots with engine speed on one axis and engine load (e.g., brake torque, percentage of maximum torque, or brake mean effective pressure - BMEP) on the other. Lines of constant BSFC are drawn on this map, creating contours. These maps clearly show the "sweet spot" for best fuel economy.

**Example Scenario:**
Imagine a car driver aiming for the best fuel economy. They would try to keep the engine operating within the low BSFC regions of the engine's performance map, which typically corresponds to moderate speeds and moderate loads, avoiding excessive acceleration or high-speed cruising if possible.

**Textbook Reference:**
*   **Rudra Moorthy:** Likely illustrates engine performance characteristics with graphs.
*   **R.K Rajput:** Presents typical BSFC curves for different engine types.
*   **V. Ganesan:** Includes graphical representations of engine performance.
*   **I.C engine fundamentals by J.B.Heywood:** Provides detailed analysis of performance maps and their interpretation.

**Important to Remember:**
*   BSFC maps are essential tools for understanding and optimizing engine operation for fuel efficiency.
*   The lowest BSFC value on the map represents the engine's best fuel economy point.

## 7. Specific Fuel Consumption in Air-Standard Cycles (Theoretical Perspective)

While air-standard cycles don't use fuel directly, we can conceptually relate their efficiency to a hypothetical "fuel" and its calorific value to get a theoretical SFC.

Let's consider the **Otto cycle** and **Diesel cycle** as examples.

**General Relationship:**
We found $BSFC = \frac{3600}{\eta_{bth} \times CV}$.
For a theoretical SFC, we would use the **air-standard cycle efficiency** ($\eta_{th}$), assuming 100% brake thermal efficiency ($\eta_{bth} = \eta_{th}$) and a hypothetical calorific value for "air". This is not practical but helps illustrate the concept.

**More practically, we can consider the work output and heat input of the cycle:**

*   **Work Output per cycle (W):** This depends on the cycle's parameters (compression ratio, heat addition, etc.).
*   **Heat Input per cycle (Q_in):** This represents the energy supplied.

If we consider the fuel consumed per cycle ($\dot{m}_{f,cycle}$) and its calorific value ($CV$), then $Q_{in} = \dot{m}_{f,cycle} \times CV$.

$\eta_{th} = \frac{W}{\dot{m}_{f,cycle} \times CV}$

Rearranging for a hypothetical SFC per cycle:
$\frac{\dot{m}_{f,cycle}}{W} = \frac{1}{\eta_{th} \times CV}$

This shows that for a given heat input ($CV$), higher thermal efficiency directly leads to more work output per unit of fuel, hence lower SFC.

**Example for Otto Cycle:**
The thermal efficiency of an ideal Otto cycle is $\eta_{th, Otto} = 1 - \frac{1}{r^{k-1}}$, where $r$ is the compression ratio and $k$ is the ratio of specific heats.
A higher compression ratio $r$ leads to a higher $\eta_{th, Otto}$.
Therefore, if we were to fuel this cycle, a higher compression ratio would conceptually lead to a lower SFC.

**Example for Diesel Cycle:**
The thermal efficiency of an ideal Diesel cycle is $\eta_{th, Diesel} = 1 - \frac{1}{r^{k-1}} \left( \frac{r_c^k - 1}{k(r_c - 1)} \right)$, where $r$ is the compression ratio and $r_c$ is the cut-off ratio.
Diesel cycles generally have higher compression ratios than Otto cycles, and their efficiency is also influenced by the cut-off ratio.

**Course Outcome Alignment:**
*   **CO1 (K4):** While the direct calculation of SFC isn't from air-standard cycles, understanding how cycle efficiency impacts fuel consumption links to applying thermodynamic principles.
*   **CO3 (K3):** Understanding how theoretical cycle parameters influence SFC provides a foundational understanding for evaluating real-world engine performance.

**Textbook Reference:**
*   **V. Ganesan:** Likely discusses the theoretical efficiencies of Otto and Diesel cycles.
*   **H N Gupta:** Provides formulas for theoretical efficiencies.
*   **Fundamentals of IC engines by V Sajith and Shijo Thomas:** May touch upon the conceptual link between theoretical efficiency and fuel usage.

**Important to Remember:**
*   Air-standard cycle efficiency is a **theoretical maximum efficiency**. Real-world engines have lower efficiencies due to heat losses, friction, incomplete combustion, etc.
*   However, the trends predicted by air-standard cycles (e.g., higher compression ratio leads to higher efficiency) generally hold true for real engines and translate to lower SFC.

## 8. Practice Questions and Exercises

**Question 1:**
An engine consumes 20 liters of fuel per hour and produces a brake power of 50 kW. If the density of the fuel is 0.75 kg/liter, calculate the Brake Specific Fuel Consumption (BSFC) in kg/kWh.
(CO3 - K3)

**Answer:**
*   Fuel consumption rate = 20 liters/h
*   Fuel density = 0.75 kg/liter
*   Mass flow rate of fuel = 20 liters/h * 0.75 kg/liter = 15 kg/h
*   Brake Power = 50 kW
*   $BSFC = \frac{\text{Mass flow rate of fuel (kg/h)}}{\text{Brake Power (kW)}} = \frac{15 \text{ kg/h}}{50 \text{ kW}} = 0.3 \text{ kg/kWh}$

**Question 2:**
Two engines, Engine A and Engine B, have the same brake power output. Engine A has a brake thermal efficiency ($\eta_{bth,A}$) of 30% and Engine B has ($\eta_{bth,B}$) of 35%. If both engines use fuel with a Calorific Value (CV) of 42,000 kJ/kg, which engine has a lower SFC and why?
(CO3 - K3)

**Answer:**
*   The relationship between BSFC and brake thermal efficiency is $BSFC = \frac{3600}{\eta_{bth} \times CV}$.
*   For a constant CV, BSFC is inversely proportional to brake thermal efficiency.
*   Engine B has a higher brake thermal efficiency (35%) compared to Engine A (30%).
*   Therefore, **Engine B** will have a lower SFC because it converts a larger fraction of the fuel's energy into useful work, meaning less fuel is needed for the same power output.

**Question 3:**
What are the typical operating conditions (load and speed) where an IC engine usually achieves its lowest SFC?
(CO3 - K3)

**Answer:**
An IC engine typically achieves its lowest SFC at **moderate loads and moderate engine speeds**.
*   **Low loads:** SFC is high due to fixed frictional losses.
*   **High loads:** SFC increases due to factors like throttling losses, less efficient combustion at high power demands, or richer fuel mixtures.
*   **High speeds:** SFC increases due to rising frictional losses.
*   **Very low speeds:** May also lead to inefficient combustion.

**Question 4:**
A theoretical Otto cycle has a compression ratio of 8:1. Calculate its thermal efficiency. If this were a real engine using a fuel with CV of 45,000 kJ/kg, and assuming 100% brake thermal efficiency for simplicity, what would be its theoretical SFC in kg/kWh?
(CO1 - K4, CO3 - K3)

**Answer:**
*   **Thermal Efficiency of Otto Cycle:**
    *   Compression ratio, $r = 8$
    *   Ratio of specific heats, $k = 1.4$ (for air)
    *   $\eta_{th, Otto} = 1 - \frac{1}{r^{k-1}} = 1 - \frac{1}{8^{1.4-1}} = 1 - \frac{1}{8^{0.4}}$
    *   $8^{0.4} \approx 2.297$
    *   $\eta_{th, Otto} = 1 - \frac{1}{2.297} \approx 1 - 0.435 = 0.565$ or 56.5%

*   **Theoretical SFC:**
    *   Assuming $\eta_{bth} = \eta_{th, Otto} = 0.565$
    *   $CV = 45,000 \text{ kJ/kg}$
    *   $BSFC = \frac{3600}{\eta_{bth} \times CV} = \frac{3600}{0.565 \times 45000}$
    *   $BSFC = \frac{3600}{25425} \approx 0.1416 \text{ kg/kWh}$

**Question 5:**
Explain the difference between Indicated Specific Fuel Consumption (ISFC) and Brake Specific Fuel Consumption (BSFC). Which one is always higher and why?
(CO3 - K3)

**Answer:**
*   **ISFC:** Relates fuel consumption to the indicated power (power developed inside the cylinder).
*   **BSFC:** Relates fuel consumption to the brake power (power delivered at the crankshaft).
*   **BSFC is always higher than ISFC.** This is because Brake Power = Indicated Power - Frictional Power. Fuel consumption is primarily related to the indicated work. To achieve the same brake power, the engine needs to produce more indicated power to overcome frictional losses. Thus, the fuel consumed per unit of brake power output is greater than the fuel consumed per unit of indicated power output.
    *   $BSFC = \frac{\text{Fuel Consumption Rate}}{\text{Brake Power}} = \frac{\text{Fuel Consumption Rate}}{\text{Indicated Power} - \text{Frictional Power}}$
    *   $ISFC = \frac{\text{Fuel Consumption Rate}}{\text{Indicated Power}}$
    *   Since $BP < IP$, $BSFC > ISFC$.

## 9. Summary and Key Takeaways

*   **Specific Fuel Consumption (SFC)** is a measure of an IC engine's fuel efficiency, typically expressed as mass of fuel consumed per unit of power output (e.g., kg/kWh).
*   **Brake Specific Fuel Consumption (BSFC)** is the most common type, relating fuel consumption to brake power.
*   **Lower SFC values indicate better fuel economy.**
*   **BSFC is directly related to brake thermal efficiency ($\eta_{bth}$) and inversely related to the fuel's Calorific Value (CV)** by the formula: $BSFC = \frac{3600}{\eta_{bth} \times CV}$.
*   **Factors** affecting SFC include engine design, operating conditions (load, speed), engine condition, and fuel properties.
*   **Performance maps and SFC curves** are graphical tools used to understand and optimize engine operation for fuel efficiency, showing SFC to be lowest at moderate loads and speeds.
*   While **air-standard cycles** don't directly calculate SFC, their theoretical efficiencies provide a foundation for understanding how design parameters (like compression ratio) influence potential fuel consumption. Higher theoretical cycle efficiency generally leads to lower SFC in real engines.
*   **BSFC is always greater than ISFC** due to frictional power losses within the engine.

This comprehensive set of notes covers the fundamental aspects of Specific Fuel Consumption in the context of IC engines and air-standard cycles, aligning with the specified learning outcomes and course objectives.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
