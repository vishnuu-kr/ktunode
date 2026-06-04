---
title: "Performance test on Diesel engines / Turbocharged engine"
subject: "THERMAL ENGINEERING LAB-2"
module: "Module 3: Performance test on Diesel engines / Turbocharged engine"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463c51"
status: "completed"
scrapedAt: "2026-05-20T18:09:12.968Z"
---
# THERMAL ENGINEERING LAB-2: Module 3 - Performance Test on Diesel Engines / Turbocharged Engines

## Topic: Performance Test on Diesel Engines / Turbocharged Engine

---

### **Introduction and Relevance**

This module focuses on conducting performance tests on Diesel engines, with a specific emphasis on turbocharged engines. Understanding the performance characteristics of these engines is crucial for optimizing their efficiency, power output, and emission control. This knowledge directly contributes to **CO2: Analyse the performance characteristics of internal combustion engines**. While the module doesn't directly cover emissions (CO3) or other systems (CO1, CO4, CO5), the performance data obtained can be foundational for subsequent emission analysis or for comparing with other engine types.

The reference books provided are excellent resources for understanding the underlying principles of internal combustion engines, combustion processes, and their performance metrics. We will draw upon their fundamental concepts to explain the experimental procedures and data analysis.

---

### **1. Learning Outcomes Coverage**

This study material aims to cover the following learning outcomes by detailing the theoretical background, experimental procedures, data analysis, and interpretation of results for performance tests on Diesel and Turbocharged engines.

*   **Understanding Engine Systems (CO1):** While not the primary focus, understanding the components involved in a performance test implicitly covers parts of CO1 (e.g., fuel injection system, exhaust system, cooling system).
*   **Performance Analysis (CO2):** This is the core outcome addressed. We will delve into the methods for measuring and calculating key performance parameters.
*   **Emission Interpretation (CO3):** Although emission measurement is not detailed in this module's scope, understanding performance is a prerequisite for interpreting emission data. For instance, higher BSFC can sometimes correlate with higher emissions.
*   **Comparison with Other Systems (CO4, CO5):** The performance metrics discussed (efficiency, specific fuel consumption) can be used for comparative analysis with air compressors, blowers, and HVAC systems, albeit indirectly.

---

### **2. Key Concepts and Definitions**

Before delving into the test, it's essential to understand the fundamental parameters and terminology:

*   **Diesel Engine:** An internal combustion engine that ignites fuel by the heat of compression.
*   **Turbocharged Engine:** An engine where a turbocharger (a type of supercharger) uses exhaust gases to spin a turbine, which in turn drives a compressor to force more air into the engine's cylinders. This increases power output and efficiency. (Refer to **Ganesan, Ch. 11: Supercharging** for detailed explanation).
*   **Brake Power (BP):** The actual power delivered at the engine's crankshaft. It's measured by a dynamometer.
    *   Formula: $BP = \frac{2 \pi N T}{60 \times 1000}$ kW, where N is the engine speed in RPM and T is the brake torque in Nm.
*   **Indicated Power (IP):** The power developed inside the cylinders by the expanding gases.
    *   Formula: $IP = \frac{P_m \times L \times A \times n \times Z}{60 \times 1000}$ kW, where $P_m$ is the mean effective pressure, L is the stroke length, A is the piston area, n is the engine speed in rps, and Z is the number of cylinders.
*   **Friction Power (FP):** The difference between indicated power and brake power, representing the power lost due to friction in various engine components.
    *   Formula: $FP = IP - BP$.
*   **Brake Thermal Efficiency ($\eta_{bth}$):** The ratio of brake power output to the rate of heat energy supplied by the fuel.
    *   Formula: $\eta_{bth} = \frac{BP}{\text{Fuel Energy Input}} = \frac{BP}{\text{m}_f \times CV_{fuel}}$
    *   Where $m_f$ is the mass flow rate of fuel (kg/s) and $CV_{fuel}$ is the calorific value of the fuel (kJ/kg).
*   **Indicated Thermal Efficiency ($\eta_{ith}$):** The ratio of indicated power output to the rate of heat energy supplied by the fuel.
    *   Formula: $\eta_{ith} = \frac{IP}{\text{Fuel Energy Input}} = \frac{IP}{\text{m}_f \times CV_{fuel}}$
*   **Mechanical Efficiency ($\eta_{mech}$):** The ratio of brake power to indicated power. It indicates how efficiently the power developed in the cylinder is delivered to the crankshaft.
    *   Formula: $\eta_{mech} = \frac{BP}{IP}$.
*   **Brake Specific Fuel Consumption (BSFC):** The mass of fuel consumed per unit of brake power per unit time. A lower BSFC indicates better fuel efficiency.
    *   Formula: $BSFC = \frac{\text{Mass flow rate of fuel (kg/hr)}}{\text{Brake Power (kW)}}$
*   **Indicated Specific Fuel Consumption (ISFC):** The mass of fuel consumed per unit of indicated power per unit time.
    *   Formula: $ISFC = \frac{\text{Mass flow rate of fuel (kg/hr)}}{\text{Indicated Power (kW)}}$
*   **Volumetric Efficiency ($\eta_{vol}$):** The ratio of the actual volume of air drawn into the cylinder during the suction stroke to the swept volume of the cylinder. Turbocharging significantly improves volumetric efficiency.
*   **Calorific Value (CV):** The amount of heat energy released by the complete combustion of a unit mass or volume of fuel.
*   **Mean Effective Pressure (MEP):** A hypothetical constant pressure that, if applied to the piston throughout the power stroke, would produce the same amount of net work as is actually produced per cycle.
    *   Brake Mean Effective Pressure ($P_{me,b}$) = $\frac{BP \times 1000 \times 60}{L \times A \times n \times Z}$ (where N is in RPM)
    *   Indicated Mean Effective Pressure ($P_{me,i}$) = $\frac{IP \times 1000 \times 60}{L \times A \times n \times Z}$

---

### **3. Performance Test Procedure**

The objective of a performance test is to measure various engine parameters at different operating conditions (loads and speeds) to evaluate its performance.

**3.1. Equipment Required:**

*   **Diesel Engine:** The engine under test.
*   **Dynamometer:** To apply a variable load to the engine and measure the torque. Common types include:
    *   **Absorption Dynamometers:** Eddy-current, hydraulic, prony brake.
    *   **Torque-Reaction Dynamometers:** Essential for measuring torque.
*   **Fuel Measurement System:**
    *   Fuel tank with a calibrated level indicator or a flow meter.
    *   Stopwatch for measuring fuel consumption over a period.
*   **Air Measurement System:**
    *   Orifice plate/Venturi meter with a differential manometer to measure airflow rate.
    *   Manometer for intake manifold pressure (especially for turbocharged engines).
*   **Speed Measurement Device:** Tachometer or RPM indicator.
*   **Temperature Measurement:** Thermocouples or resistance temperature detectors (RTDs) for:
    *   Inlet air temperature ($T_{a}$)
    *   Engine coolant inlet/outlet temperature ($T_{cw,in}$, $T_{cw,out}$)
    *   Lubricating oil inlet/outlet temperature ($T_{oil,in}$, $T_{oil,out}$)
    *   Exhaust gas temperature ($T_{exh}$)
*   **Pressure Measurement:** Pressure gauges for:
    *   Fuel line pressure
    *   Lubricating oil pressure
    *   Coolant pressure
    *   Intake manifold pressure ($P_{intake}$)
    *   Exhaust manifold pressure ($P_{exh}$)
*   **Load Cell/Strain Gauge:** To measure the force exerted by the dynamometer arm.

**3.2. Test Steps:**

1.  **Engine Preparation:**
    *   Ensure the engine is properly lubricated and cooled.
    *   Check fuel and coolant levels.
    *   Connect all necessary sensors and measurement devices.
    *   Familiarize yourself with the dynamometer controls.
2.  **Engine Start-up:**
    *   Start the engine and let it warm up to stable operating conditions (e.g., coolant temperature reaches a steady state).
3.  **Baseline Readings:**
    *   Take initial readings at no load (or minimum load) to establish a baseline.
4.  **Loading the Engine:**
    *   Gradually increase the load on the engine using the dynamometer.
    *   For performance testing, typically, the engine is operated at a constant speed and varying loads, or at a constant load and varying speeds. A common approach is to run at maximum rated speed and vary the load from no-load to full-load.
5.  **Data Acquisition at Each Load Point:**
    *   Allow the engine to stabilize at each load point.
    *   Record the following parameters:
        *   Engine Speed (N, RPM)
        *   Dynamometer Reading (Torque, T, Nm)
        *   Fuel Consumption Rate ($m_f$, kg/s or kg/hr). This is done by timing how long it takes for a specific volume or mass of fuel to be consumed.
        *   Inlet Air Temperature ($T_{a}$)
        *   Coolant Inlet/Outlet Temperatures ($T_{cw,in}$, $T_{cw,out}$)
        *   Oil Inlet/Outlet Temperatures ($T_{oil,in}$, $T_{oil,out}$)
        *   Exhaust Gas Temperature ($T_{exh}$)
        *   Intake Manifold Pressure ($P_{intake}$)
        *   Exhaust Manifold Pressure ($P_{exh}$)
        *   Any other relevant parameters specified by the lab manual.
6.  **Repeat for Different Speeds (Optional but Recommended):**
    *   If time permits, repeat the process for different constant engine speeds.
7.  **Engine Shutdown:**
    *   Gradually reduce the load to no-load and then stop the engine.

---

### **4. Calculations and Data Analysis**

Once the readings are taken, the following calculations are performed to determine the performance parameters:

**4.1. Brake Power (BP):**

*   $BP = \frac{2 \pi N T}{60 \times 1000}$ kW

**4.2. Fuel Energy Input:**

*   Fuel Energy Input = $m_f \times CV_{fuel}$ (kW, if $m_f$ is in kg/s)
    *   Ensure $m_f$ is converted to kg/s if measured in kg/hr: $m_f (\text{kg/s}) = m_f (\text{kg/hr}) / 3600$.
    *   The calorific value ($CV_{fuel}$) of diesel is typically around 42,000 - 45,000 kJ/kg. Use the value specified for the fuel used in the experiment.

**4.3. Brake Thermal Efficiency ($\eta_{bth}$):**

*   $\eta_{bth} = \frac{BP}{m_f \times CV_{fuel}} \times 100\%$

**4.4. Brake Specific Fuel Consumption (BSFC):**

*   $BSFC = \frac{m_f (\text{kg/hr})}{BP (\text{kW})}$ (Units: kg/kW-hr)

**4.5. Indicated Power (IP):**

*   To calculate IP, we need to estimate the friction power (FP). FP can be estimated using Morse code or by determining the FP at different speeds and extrapolating to zero load, or by using empirical formulas.
    *   **Method 1: Mechanical Efficiency Correlation:** If the engine has a known mechanical efficiency vs. BP curve or a way to estimate it, use $\eta_{mech} = \frac{BP}{IP}$.
    *   **Method 2: Friction Power Estimation:** A common approach is to run the engine at varying speeds with the dynamometer disengaged (or at minimum load) and measure the power absorbed by friction. This absorbed power is primarily a function of speed.
        *   Plot FP vs. N.
        *   Fit a curve (e.g., $FP = aN + bN^2$, where a and b are constants) to these points.
        *   Then, $IP = BP + FP$, where FP is calculated using the fitted curve at the operating speed.
    *   **Method 3: Mean Effective Pressure:** If cylinder dimensions (bore D, stroke L), number of cylinders (Z), and engine speed (N) are known, you can calculate brake MEP ($P_{me,b}$).
        *   $P_{me,b} = \frac{BP \times 1000 \times 60}{\frac{\pi D^2}{4} \times L \times N \times Z}$ (if L is in meters)
        *   Indicated MEP ($P_{me,i}$) can be approximated by $P_{me,i} = P_{me,b} + P_{me,f}$, where $P_{me,f}$ is the frictional mean effective pressure, which can be estimated from FP.
        *   $P_{me,f} = \frac{FP \times 1000 \times 60}{\frac{\pi D^2}{4} \times L \times N \times Z}$
        *   Then $IP = \frac{P_{me,i} \times L \times A \times n \times Z}{60 \times 1000}$

**4.6. Indicated Thermal Efficiency ($\eta_{ith}$):**

*   $\eta_{ith} = \frac{IP}{m_f \times CV_{fuel}} \times 100\%$

**4.7. Mechanical Efficiency ($\eta_{mech}$):**

*   $\eta_{mech} = \frac{BP}{IP} \times 100\%$

**4.8. Specific Fuel Consumption (SFC) Interpretation:**

*   **BSFC:** Lower BSFC is better. It indicates less fuel is required to produce a unit of power.
*   **ISFC:** Similarly, lower ISFC is better.

**4.9. Other Parameters:**

*   **Thermal Efficiency Comparison:** $\eta_{ith} > \eta_{bth}$ due to friction losses. The difference increases with load.
*   **Volumetric Efficiency ($\eta_{vol}$):** For turbocharged engines, this can be calculated if airflow rate and cylinder volume are known.
    *   Actual Airflow Rate ($m_{a,actual}$) can be measured.
    *   Actual Airflow Volume ($V_{a,actual}$) = $m_{a,actual} / \rho_{a}$, where $\rho_{a}$ is the density of air at inlet conditions.
    *   Swept Volume ($V_s$) = $\frac{\pi D^2}{4} \times L$ per cylinder. Total Swept Volume = $Z \times V_s$.
    *   $\eta_{vol} = \frac{V_{a,actual}}{\text{Engine Speed (in volume/sec) } \times V_s \times Z}$ (more precisely, relates to intake stroke).
    *   For turbocharged engines, the increased density of intake air due to supercharging significantly improves $\eta_{vol}$.

---

### **5. Performance Curves and Interpretation**

The data collected and calculated can be plotted to visualize the engine's performance characteristics. Common plots include:

*   **Brake Power vs. Engine Speed:** Shows how power output changes with speed.
*   **Brake Torque vs. Engine Speed:** Shows torque characteristics.
*   **Brake Thermal Efficiency vs. Brake Power:** Shows the load at which the engine is most efficient. Typically peaks at moderate to high loads.
*   **Brake Specific Fuel Consumption vs. Brake Power:** Inverse of thermal efficiency. Shows the load at which fuel consumption is minimized per unit power.
*   **Exhaust Gas Temperature vs. Brake Power:** Increases with load as more fuel is burnt.
*   **Mechanical Efficiency vs. Brake Power:** Starts from zero at no load and increases with load, then tends to level off or slightly decrease at very high loads.

**Key Observations for Turbocharged Engines:**

*   **Higher Power Output:** For a given displacement, a turbocharged engine generally produces more power than a naturally aspirated engine due to increased air density.
*   **Improved Thermal Efficiency:** Turbocharging can lead to higher thermal efficiency, especially at part-load conditions, by recovering energy from exhaust gases and improving combustion.
*   **Reduced BSFC:** Generally lower BSFC values are observed, indicating better fuel economy.
*   **Turbo Lag:** At low engine speeds, there might be a delay in the turbocharger spooling up, leading to a temporary reduction in power delivery (turbo lag).
*   **Exhaust Gas Temperature:** Exhaust gas temperatures might be higher at peak loads compared to naturally aspirated engines, requiring robust exhaust and turbocharger materials.

**Example Plot Interpretation:**

*   A peak in brake thermal efficiency typically occurs at a load that is about 70-80% of the maximum rated power.
*   BSFC will be at its minimum (best) at this same optimal load point.
*   As the engine is loaded further, $\eta_{bth}$ might decrease slightly, and BSFC will increase, as friction and heat losses become more significant.

---

### **6. Important Points to Remember**

*   **Accuracy of Measurements:** The accuracy of the performance test results heavily depends on the accuracy of the instruments used.
*   **Stabilization:** Always allow the engine to reach a stable operating temperature and condition before taking readings at each load point.
*   **Fuel Properties:** The calorific value of the fuel is a critical input. Use the correct value for the fuel being tested.
*   **Friction Power:** Accurate estimation of friction power is essential for calculating indicated power and efficiencies. If not directly measured, use reliable methods.
*   **Turbocharger Impact:** When comparing a turbocharged engine to a naturally aspirated one, pay close attention to the differences in BSFC, thermal efficiency, and power output at various speeds and loads. The turbocharger's effectiveness varies significantly with engine speed.
*   **Safety:** Always adhere to safety protocols when operating engines and dynamometers.

---

### **7. Practice Questions and Exercises**

**Question 1:** A diesel engine has the following specifications:
*   Brake Power (BP) = 20 kW
*   Engine Speed (N) = 1500 RPM
*   Fuel Consumption Rate ($m_f$) = 7 kg/hr
*   Calorific Value of Fuel ($CV_{fuel}$) = 43,000 kJ/kg

Calculate:
a) Brake Torque (T)
b) Brake Specific Fuel Consumption (BSFC)
c) Brake Thermal Efficiency ($\eta_{bth}$)

**Answer 1:**
*   First, convert $m_f$ to kg/s: $m_f = 7 \text{ kg/hr} / 3600 \text{ s/hr} = 0.001944 \text{ kg/s}$
*   a) Brake Torque (T):
    $BP = \frac{2 \pi N T}{60 \times 1000}$
    $20 \text{ kW} = \frac{2 \pi \times 1500 \times T}{60000}$
    $T = \frac{20 \times 60000}{2 \pi \times 1500} = \frac{1200000}{3000 \pi} = \frac{400}{\pi} \approx 127.32 \text{ Nm}$
*   b) Brake Specific Fuel Consumption (BSFC):
    $BSFC = \frac{m_f (\text{kg/hr})}{BP (\text{kW})} = \frac{7 \text{ kg/hr}}{20 \text{ kW}} = 0.35 \text{ kg/kW-hr}$
*   c) Brake Thermal Efficiency ($\eta_{bth}$):
    Fuel Energy Input = $m_f \times CV_{fuel} = 0.001944 \text{ kg/s} \times 43000 \text{ kJ/kg} = 83.592 \text{ kW}$
    $\eta_{bth} = \frac{BP}{\text{Fuel Energy Input}} \times 100\% = \frac{20 \text{ kW}}{83.592 \text{ kW}} \times 100\% \approx 23.93\%$

**Question 2:** What is the primary advantage of using a turbocharger in a diesel engine, and how does it affect the engine's performance parameters compared to a naturally aspirated engine? (Relates to CO2 and understanding turbocharged engines).

**Answer 2:** The primary advantage of a turbocharger is to increase the amount of air that can be delivered to the engine cylinders. This is achieved by using exhaust gas energy to drive a turbine, which in turn drives a compressor to force more air into the intake manifold. This leads to:
*   **Increased Power Output:** More air means more fuel can be injected and burned effectively, resulting in higher power output for a given engine displacement.
*   **Improved Fuel Efficiency:** Turbocharging can recover energy from the exhaust that would otherwise be wasted. It also allows for better combustion, often leading to lower BSFC and higher thermal efficiency, especially at part-load conditions.
*   **Better Volumetric Efficiency:** The compressed intake air increases the air density in the cylinder, effectively increasing the mass of air per charge, thus improving volumetric efficiency.
*   **Potential for Downsizing:** Turbocharging enables smaller engines to produce the same power as larger naturally aspirated engines, leading to weight and fuel consumption benefits.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### **8. References**

*   **Fundamentals of IC engines, by V. Ganesan:** Provides comprehensive coverage of engine cycles, components, and performance parameters. Chapter 11 on Supercharging is particularly relevant.
*   **I.C engine fundamentals, by J.B.Heywood:** Offers in-depth analysis of engine processes, combustion, and performance. Its detailed treatment of turbocharging and its impact on performance is valuable.
*   **An Introduction to Combustion: Concepts and Applications, by Stephen R Turns:** Useful for understanding the combustion process itself, which is the basis of all performance calculations.

---

### **9. Alignment with Course Outcomes (K-Levels)**

*   **CO1 (K1):** The identification of engine components used in the performance test implicitly addresses knowledge of engine systems.
*   **CO2 (K4):** This module directly supports the analysis of performance characteristics by detailing the tests, calculations (BP, BSFC, efficiencies), and interpretation of performance curves. Understanding the factors influencing these parameters is key to K4.
*   **CO3 (K4):** While not directly measuring emissions, the understanding of performance parameters like thermal efficiency and BSFC provides the foundation for analyzing how engine operation affects emissions. For example, rich operation (high BSFC) can lead to increased CO and HC emissions.
*   **CO4, CO5 (K4):** The performance metrics (efficiency, power output, fuel consumption) can be used as a basis for comparison with other systems like compressors or HVAC, enabling an understanding of their operational efficiency relative to power conversion systems.

---

This study material provides a comprehensive overview of performance testing on Diesel engines, with a focus on the role and impact of turbocharging. By understanding these concepts, you will be well-equipped to conduct experiments and analyze the results effectively in your Thermal Engineering Lab-2.