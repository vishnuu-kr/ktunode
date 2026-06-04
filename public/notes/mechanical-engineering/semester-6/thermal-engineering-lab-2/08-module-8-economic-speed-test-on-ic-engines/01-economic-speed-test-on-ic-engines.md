---
title: "Economic speed test on IC engines"
subject: "THERMAL ENGINEERING LAB-2"
module: "Module 8: Economic speed test on IC engines"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463c5b"
status: "completed"
scrapedAt: "2026-05-20T18:09:16.419Z"
---
## THERMAL ENGINEERING LAB-2: Module 8 - Economic Speed Test on IC Engines

This module focuses on understanding the economic operation of Internal Combustion (IC) engines by conducting an economic speed test. This involves identifying the engine speed at which it operates most efficiently in terms of fuel consumption.

---

### 1. Introduction to Economic Speed

**Definition:** The economic speed of an IC engine is the engine speed at which it achieves its **maximum thermal efficiency** or, more practically in a lab setting, its **minimum specific fuel consumption (SFC)** for a given load condition.

**Importance:**
*   **Fuel Economy:** Operating an engine at its economic speed leads to significant fuel savings, which is crucial for both economic and environmental reasons.
*   **Reduced Emissions:** Engines operating at their peak efficiency generally produce fewer harmful emissions per unit of work done.
*   **Engine Longevity:** Operating within the optimal performance range can reduce stress on engine components, potentially extending engine life.

**Relevance to CO1 (Identify systems and subsystems):** Understanding the economic speed requires knowledge of how engine systems (fuel injection, ignition, exhaust) and subsystems (combustion chamber, piston, crankshaft) contribute to overall performance.

**Relevance to CO2 (Analyze performance characteristics):** The economic speed test is a direct method for analyzing the performance characteristics of an IC engine, specifically its fuel consumption efficiency.

---

### 2. Key Concepts and Definitions

*   **Brake Power (BP):** The power delivered at the crankshaft of the engine. It is usually measured in kW or bhp.
    *   $BP = \frac{2 \pi N T}{60 \times 1000}$ (where $N$ is engine speed in rpm and $T$ is brake torque in Nm)
*   **Brake Specific Fuel Consumption (BSFC):** The mass of fuel consumed per unit of brake power per unit of time. It is a measure of engine fuel efficiency.
    *   $BSFC = \frac{\text{Fuel consumption rate (kg/h)}}{\text{Brake Power (kW)}}$ (Units typically kg/kWh)
    *   **Lower BSFC = Higher Fuel Efficiency.**
*   **Thermal Efficiency ($ \eta_{th} $):** The ratio of the useful work output to the heat energy supplied by the fuel.
    *   $ \eta_{th} = \frac{\text{Brake Power (kW)}}{\text{Mass flow rate of fuel (kg/s)} \times \text{Calorific Value of Fuel (kJ/kg)}} $
    *   **Higher $ \eta_{th} $ = Higher Fuel Efficiency.**
*   **Fuel Consumption Rate:** The amount of fuel consumed by the engine per unit of time (e.g., kg/h, liters/h).
*   **Engine Speed (RPM):** The rotational speed of the crankshaft.
*   **Load:** The resistance offered to the engine's output, often controlled by a dynamometer.

**Reference (Ganesan, Chapter 9: Performance and Testing):** Ganesan provides detailed explanations of these performance parameters and their measurement methods in the context of IC engine testing.

---

### 3. Factors Affecting Economic Speed

Several factors influence the economic speed of an IC engine:

*   **Engine Design:**
    *   **Combustion Chamber Design:** Efficient combustion leads to better fuel utilization.
    *   **Valve Timing:** Proper valve opening and closing at different speeds ensure optimal gas exchange.
    *   **Compression Ratio:** Higher compression ratios generally lead to higher efficiencies, but have limits.
*   **Fuel Injection/Carburetion:**
    *   **Fuel-Air Mixture:** Maintaining the correct fuel-air ratio across a range of speeds is critical. Over-rich or over-lean mixtures reduce efficiency.
*   **Engine Load:** The engine's efficiency is also dependent on the load it is operating under. The economic speed might differ for light, medium, and heavy loads.
*   **Engine Condition:** Wear and tear, carbon deposits, and improper maintenance can affect efficiency.
*   **Ambient Conditions:** Temperature and atmospheric pressure can have a minor impact.

**Reference (Heywood, Chapter 15: Engine Operating Characteristics):** Heywood elaborates on how design parameters like bore, stroke, valve timing, and turbocharging significantly impact engine performance and efficiency across the operating speed range.

---

### 4. Conducting an Economic Speed Test

The economic speed test is typically performed using an engine coupled to a dynamometer.

**Objective:** To determine the engine speed at which the Brake Specific Fuel Consumption (BSFC) is minimized for a specific load.

**Apparatus Required:**
1.  **IC Engine:** The engine under test (e.g., a single-cylinder petrol or diesel engine).
2.  **Dynamometer:** Used to apply a load to the engine and measure the torque (e.g., electrical dynamometer, hydraulic dynamometer).
3.  **Fuel Measuring System:** To accurately measure fuel consumption rate (e.g., gravimetric fuel weigher, volumetric flow meter).
4.  **Speed Measuring Device:** Tachometer or sensor to measure engine RPM.
5.  **Load Cell/Torque Sensor:** To measure the torque applied by the dynamometer.
6.  **Temperature and Pressure Sensors:** To measure engine operating parameters (e.g., inlet air temperature, exhaust gas temperature).
7.  **Data Acquisition System:** To record all measured parameters.

**Procedure:**

1.  **Warm-up:** Start the engine and allow it to reach its normal operating temperature.
2.  **Set Load:** Apply a specific constant load to the engine using the dynamometer. This load can be fixed at a certain percentage of the engine's maximum power.
3.  **Vary Speed:** Start from a low engine speed and gradually increase the speed in increments.
4.  **Record Data:** At each speed increment, allow the engine to stabilize and record the following parameters:
    *   Engine Speed (N) in rpm.
    *   Brake Torque (T) in Nm.
    *   Fuel Consumption Rate (e.g., kg/h or liters/h).
    *   Other relevant parameters like oil pressure, coolant temperature (optional but good practice).
5.  **Repeat for Different Loads (Optional):** The test can be repeated for different load conditions to understand how the economic speed varies with load.
6.  **Cool Down:** After data collection, gradually reduce the load and speed, then shut down the engine.

**Calculations:**

*   Calculate Brake Power (BP) for each speed: $ BP = \frac{2 \pi N T}{60 \times 1000} $ (in kW)
*   Calculate Fuel Consumption Rate in kg/s: If measured in kg/h, divide by 3600. If measured in liters/h, multiply by the density of the fuel (e.g., approx. 0.74 kg/L for petrol, 0.84 kg/L for diesel) and divide by 3600.
*   Calculate Brake Specific Fuel Consumption (BSFC): $ BSFC = \frac{\text{Fuel consumption rate (kg/h)}}{\text{Brake Power (kW)}} $ (in kg/kWh)

---

### 5. Analyzing the Results and Identifying Economic Speed

**Graphical Representation:**

The most effective way to interpret the results is to plot the following graphs:

*   **BSFC vs. Engine Speed:** This is the primary graph for identifying the economic speed. The lowest point on the BSFC curve indicates the most fuel-efficient speed for the given load.
*   **Brake Power vs. Engine Speed:** Shows the power output characteristics of the engine.
*   **Brake Thermal Efficiency vs. Engine Speed:** While BSFC is a direct measure, thermal efficiency can also be plotted. Maximum thermal efficiency usually corresponds to minimum BSFC.

**Interpretation:**

*   Observe the BSFC vs. Engine Speed graph. The engine speed at which the BSFC value is the lowest is the **economic speed for that specific load**.
*   Typically, the economic speed is found in the mid-range of the engine's operating speed, not at very low or very high RPMs. At low speeds, volumetric efficiency might be poor, and at high speeds, friction losses increase significantly.

**Example:**
Imagine you have the following data for a specific load:

| Speed (rpm) | Torque (Nm) | Fuel Consumption (kg/h) | BP (kW) | BSFC (kg/kWh) |
| :---------- | :---------- | :---------------------- | :------ | :------------ |
| 1000        | 50          | 3.0                     | 5.24    | 0.573         |
| 1500        | 75          | 4.2                     | 11.78   | 0.357         |
| 2000        | 100         | 5.5                     | 20.94   | 0.263         |
| 2500        | 115         | 6.8                     | 30.09   | 0.226         |
| **3000**    | **120**     | **7.5**                 | **37.70** | **0.199**     |
| 3500        | 118         | 8.5                     | 43.23   | 0.197         |
| 4000        | 110         | 10.0                    | 46.08   | 0.217         |

In this example, plotting BSFC vs. Speed would show a U-shaped curve. The minimum BSFC of **0.197 kg/kWh** occurs at approximately **3500 rpm**. Therefore, the economic speed for this particular load is around 3500 rpm.

---

### 6. Important Points to Remember

*   **BSFC is the key indicator** for economic speed. Lower BSFC means better fuel economy.
*   The economic speed is **load-dependent**. An engine will have different economic speeds for different load conditions.
*   **Accurate measurement** of speed, torque, and fuel consumption is crucial for reliable results.
*   The test should be conducted after the engine has reached **stable operating temperatures**.
*   **Friction losses** and **volumetric efficiency** play significant roles in determining the economic speed.
*   **Reference (Turns, Chapter 8: Engine Performance and Efficiency):** Turns discusses how fundamental thermodynamic principles govern engine efficiency, highlighting the trade-offs between power, speed, and fuel consumption that lead to an economic operating point.

---

### 7. Practice Questions & Exercises

**Question 1:**
Define Brake Specific Fuel Consumption (BSFC) and explain why minimizing it is important for an IC engine.
**Answer:** BSFC is the mass of fuel consumed per unit of brake power per unit of time (kg/kWh). Minimizing BSFC is important because it directly translates to better fuel economy, leading to cost savings and reduced environmental impact.

**Question 2:**
What are the primary parameters that need to be measured during an economic speed test on an IC engine?
**Answer:** Engine Speed (RPM), Brake Torque, and Fuel Consumption Rate are the primary parameters.

**Question 3:**
If an engine consumes 5 liters of diesel per hour and produces 10 kW of brake power, what is its BSFC? (Assume diesel density = 0.84 kg/L)
**Answer:**
*   Fuel mass flow rate = 5 L/h * 0.84 kg/L = 4.2 kg/h
*   BSFC = Fuel Consumption Rate / Brake Power = 4.2 kg/h / 10 kW = **0.42 kg/kWh**

**Question 4:**
Describe how you would identify the economic speed from the experimental data of an economic speed test.
**Answer:** You would plot BSFC against Engine Speed. The engine speed corresponding to the lowest point on this curve is the economic speed for the tested load condition.

**Question 5 (Scenario-based):**
An engine manufacturer claims their new engine has excellent fuel economy. You are asked to verify this by conducting an economic speed test. What specific output graph would you use to prove their claim and at what point on that graph would you look?
**Answer:** You would use a graph of BSFC vs. Engine Speed. You would look for the lowest point on this curve, indicating the minimum BSFC, which signifies the most fuel-efficient operating speed. A lower minimum BSFC value compared to competitors would support their claim.

---

### 8. Alignment with Course Outcomes

*   **CO1 (Identify systems and subsystems):** Understanding the factors affecting economic speed (e.g., combustion chamber design, fuel injection) requires recognizing the roles of various engine systems and subsystems.
*   **CO2 (Analyze performance characteristics):** The economic speed test is a core practical exercise for analyzing engine performance in terms of fuel efficiency. Identifying the economic speed is a direct analysis of this characteristic.
*   **CO3 (Investigate emission characteristics):** While not directly measured in this test, operating an engine at its economic speed generally leads to lower specific emissions (emissions per unit of work done) due to more complete combustion.
*   **CO4 & CO5 (Interpret performance of air compressors/ACR):** While this module specifically deals with IC engines, the principles of efficiency analysis and identifying optimal operating points are transferable to understanding the performance of other systems like air compressors and refrigeration/AC systems. The methodology of plotting performance parameters against operating variables is a common theme.

---

This concludes the study notes for Module 8: Economic speed test on IC engines. By understanding and applying these concepts, you will be able to effectively analyze the fuel efficiency of IC engines in a laboratory setting.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
