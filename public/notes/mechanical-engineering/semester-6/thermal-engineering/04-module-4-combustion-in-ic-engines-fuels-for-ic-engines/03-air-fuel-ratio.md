---
title: "air-fuel
ratio"
subject: "THERMAL ENGINEERING"
module: "Module 4: Combustion in IC Engines : Fuels for IC engines"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf48044639aa"
status: "completed"
scrapedAt: "2026-05-20T18:08:59.102Z"
---
# Thermal Engineering: Module 4 - Combustion in IC Engines: Fuels for IC Engines

## Topic: Air-Fuel Ratio

---

### **1. Introduction to Air-Fuel Ratio (AFR)**

The Air-Fuel Ratio (AFR) is a fundamental concept in internal combustion engines (ICEs) that defines the ratio of the mass of air to the mass of fuel supplied to the combustion chamber. It is a critical parameter that significantly influences engine performance, efficiency, emissions, and combustion characteristics.

**Key Concepts:**

*   **Stoichiometric AFR:** The theoretically ideal ratio of air to fuel required for complete combustion, where all fuel molecules react completely with all oxygen molecules, producing only carbon dioxide ($\text{CO}_2$) and water ($\text{H}_2\text{O}$).
*   **Lean Mixture:** An AFR where there is more air than is stoichiometrically required for complete combustion.
*   **Rich Mixture:** An AFR where there is less air than is stoichiometrically required for complete combustion, meaning there is excess fuel.

**Importance of AFR:**

*   **Combustion Completeness:** Affects how thoroughly the fuel is burned.
*   **Engine Performance:** Influences power output, torque, and fuel consumption.
*   **Emissions:** Directly impacts the generation of pollutants like $\text{CO}$, unburnt hydrocarbons (HC), and oxides of nitrogen ($\text{NO}_x$).
*   **Engine Operation:** Crucial for starting, idling, acceleration, and high-load conditions.

**Textbook References:**

*   **Rudra Moorthy:** Often discusses AFR in the context of combustion stoichiometry and its impact on engine efficiency and emissions.
*   **R.K Rajput:** Explains the concept of stoichiometric, lean, and rich mixtures and their effect on engine performance parameters.
*   **V. Ganesan:** Provides detailed explanations of the chemical reactions involved in combustion and the role of AFR.
*   **H N Gupta:** Covers the practical implications of AFR control in modern engines.
*   **V Sajith and Shijo Thomas:** Integrates AFR into the broader context of engine operating cycles and performance analysis.
*   **J.B.Heywood:** Offers in-depth analysis of AFR's influence on combustion phenomena and emissions.

**Course Outcome Alignment:**

*   **CO3 (K3):** Evaluating engine performance relies heavily on understanding how AFR affects power and efficiency.
*   **CO4 (K2):** Explaining combustion phenomena and pollution is incomplete without discussing the role of AFR in producing various emissions.

---

### **2. Stoichiometric Air-Fuel Ratio**

The stoichiometric AFR is calculated based on the chemical composition of the fuel and the oxygen required for complete combustion.

**Calculation:**

The general combustion equation for a hydrocarbon fuel with the formula $\text{C}_x\text{H}_y\text{O}_z\text{N}_w$ is:

$\text{C}_x\text{H}_y\text{O}_z\text{N}_w + a(\text{O}_2 + 3.76\text{N}_2) \rightarrow x\text{CO}_2 + \frac{y}{2}\text{H}_2\text{O} + b\text{N}_2 + \text{excess products}$

For complete combustion, where no excess oxygen or fuel is present, the equation is balanced.

**Example: Gasoline (approximated as Octane, $\text{C}_8\text{H}_{18}$)**

1.  **Balanced Combustion Equation:**
    $\text{C}_8\text{H}_{18} + (8 + \frac{18}{4})\text{O}_2 \rightarrow 8\text{CO}_2 + \frac{18}{2}\text{H}_2\text{O}$
    $\text{C}_8\text{H}_{18} + (8 + 4.5)\text{O}_2 \rightarrow 8\text{CO}_2 + 9\text{H}_2\text{O}$
    $\text{C}_8\text{H}_{18} + 12.5\text{O}_2 \rightarrow 8\text{CO}_2 + 9\text{H}_2\text{O}$

2.  **Moles of Air Required:**
    Since air contains approximately 21% oxygen and 79% nitrogen by volume (or 23.3% oxygen and 76.7% nitrogen by mass), the moles of air required per mole of fuel is:
    Moles of Air = Moles of $\text{O}_2$ + Moles of $\text{N}_2$
    Moles of Air = $12.5\text{ O}_2 + (12.5 \times 3.76)\text{ N}_2$ (using the ratio of $\text{N}_2$ to $\text{O}_2$ in air)
    Moles of Air = $12.5 + 46.875 = 59.375$ moles

3.  **Mass of Fuel and Air:**
    Molar mass of $\text{C}_8\text{H}_{18}$ = $(8 \times 12.011) + (18 \times 1.008) \approx 114.26 \text{ g/mol}$
    Molar mass of Air $\approx 28.97 \text{ g/mol}$

    Mass of Fuel (per mole) = $1 \text{ mol} \times 114.26 \text{ g/mol} = 114.26 \text{ g}$
    Mass of Air (per mole of fuel) = $59.375 \text{ mol} \times 28.97 \text{ g/mol} \approx 1719.7 \text{ g}$

4.  **Stoichiometric AFR:**
    AFR$_{\text{stoichiometric}}$ = $\frac{\text{Mass of Air}}{\text{Mass of Fuel}} = \frac{1719.7 \text{ g}}{114.26 \text{ g}} \approx 15.05$

    Therefore, the stoichiometric AFR for gasoline (octane) is approximately **15:1**.

**Common Stoichiometric AFRs:**

*   **Gasoline (Petrol):** ~15:1
*   **Diesel:** ~14.5:1 (can vary with composition)
*   **LPG:** ~15.7:1
*   **Ethanol:** ~9:1
*   **Methanol:** ~6.5:1

**Important Points:**

*   The stoichiometric AFR is a theoretical value. Actual operating AFRs are often varied to optimize specific engine parameters.
*   The exact stoichiometric AFR depends on the precise chemical composition of the fuel.

**Textbook References:**

*   **Rudra Moorthy:** Provides methods for calculating stoichiometric AFR for various fuels.
*   **R.K Rajput:** Offers examples of AFR calculations for common fuels like petrol and diesel.
*   **V. Ganesan:** Detailed breakdown of stoichiometry and combustion balancing.

---

### **3. Equivalence Ratio ($\phi$)**

The equivalence ratio is a dimensionless parameter that compares the actual AFR to the stoichiometric AFR. It provides a normalized way to describe whether a mixture is lean or rich.

**Definition:**

$\phi = \frac{\text{Actual AFR}_{\text{fuel/air}}}{\text{Stoichiometric AFR}_{\text{fuel/air}}} = \frac{\text{Actual (Fuel/Air)}}{\text{Stoichiometric (Fuel/Air)}}$

Alternatively, and often more conveniently:

$\phi = \frac{\text{Stoichiometric AFR}_{\text{air/fuel}}}{\text{Actual AFR}_{\text{air/fuel}}}$

**Interpretation of $\phi$:**

*   **$\phi = 1$:** Stoichiometric mixture (ideal combustion).
*   **$\phi < 1$:** Lean mixture (excess air).  The air-fuel ratio is higher than stoichiometric.
*   **$\phi > 1$:** Rich mixture (excess fuel). The air-fuel ratio is lower than stoichiometric.

**Example:**

If gasoline has a stoichiometric AFR of 15:1, and an engine is supplied with an AFR of 13.5:1:

$\phi = \frac{15}{13.5} \approx 1.11$

This indicates a rich mixture.

If the engine is supplied with an AFR of 16:1:

$\phi = \frac{15}{16} \approx 0.9375$

This indicates a lean mixture.

**Textbook References:**

*   **J.B.Heywood:** Extensive use of equivalence ratio for analyzing combustion in different engine types.
*   **V Sajith and Shijo Thomas:** Introduces $\phi$ as a key parameter for characterizing mixture strength.

---

### **4. Air-Fuel Ratios in Practice and their Effects**

Engines are rarely operated at the exact stoichiometric AFR. The operating AFR is adjusted to optimize different performance aspects.

**4.1. Rich Mixtures ($\phi > 1$)**

*   **AFR < Stoichiometric AFR** (e.g., 12:1 to 14:1 for gasoline)
*   **Effects:**
    *   **Increased Power Output:** A slightly rich mixture can lead to maximum power. This is because the excess fuel can help cool the combustion chamber and piston crown, allowing for higher compression ratios or ignition timing for better volumetric efficiency. It also ensures that all available oxygen is consumed, even if there are slight variations in air intake.
    *   **Reduced $\text{NO}_x$ Emissions:** Lower combustion temperatures due to excess fuel lead to reduced formation of oxides of nitrogen.
    *   **Increased $\text{CO}$ and HC Emissions:** Incomplete combustion due to insufficient oxygen results in higher levels of carbon monoxide and unburnt hydrocarbons.
    *   **Poor Fuel Economy:** More fuel is consumed for a given amount of air, leading to lower efficiency.
    *   **Engine Cooling:** The vaporization of excess fuel absorbs heat, providing a cooling effect that can be beneficial under high load conditions.

**4.2. Stoichiometric Mixture ($\phi = 1$)**

*   **AFR $\approx$ Stoichiometric AFR** (e.g., 15:1 for gasoline)
*   **Effects:**
    *   **Optimal for Catalytic Converters:** Modern gasoline engines are typically designed to operate very close to the stoichiometric AFR to enable efficient operation of three-way catalytic converters, which simultaneously reduce $\text{CO}$, HC, and $\text{NO}_x$ emissions.
    *   **Balance of Performance and Emissions:** Represents a compromise between maximum power and minimum emissions.
    *   **Good Fuel Economy:** Generally offers good fuel economy.

**4.3. Lean Mixtures ($\phi < 1$)**

*   **AFR > Stoichiometric AFR** (e.g., 16:1 to 18:1 for gasoline)
*   **Effects:**
    *   **Improved Fuel Economy:** Better utilization of oxygen leads to more complete combustion and lower fuel consumption.
    *   **Reduced $\text{CO}$ and HC Emissions:** More oxygen is available for complete combustion.
    *   **Increased $\text{NO}_x$ Emissions:** Higher combustion temperatures due to excess air lead to increased formation of oxides of nitrogen.
    *   **Reduced Power Output:** Insufficient fuel limits the maximum power that can be produced.
    *   **Potential for Misfire:** Very lean mixtures can be difficult to ignite and sustain combustion, leading to misfires and rough running.
    *   **Thermal Efficiency:** Can lead to higher thermal efficiency, especially at part load conditions.

**Specific Engine Types:**

*   **Spark Ignition (SI) Engines (Gasoline):**
    *   **Idling and Light Load:** Often operate slightly lean ($\phi \approx 0.95$ to 1.0) for fuel economy and emissions control.
    *   **Cruising:** Operate very close to stoichiometric ($\phi \approx 1$) for catalytic converter efficiency.
    *   **Maximum Power:** Operate slightly rich ($\phi \approx 1.1$ to 1.15) to maximize power and provide cooling.

*   **Compression Ignition (CI) Engines (Diesel):**
    *   Diesel engines inherently operate with excess air (always lean) because they do not rely on a spark plug for ignition; ignition occurs when the fuel is injected into the hot compressed air.
    *   **Overall AFR:** Can range from 18:1 to as high as 50:1 or more, depending on the operating conditions.
    *   **Air-Fuel Ratio Variation within Cylinder:** Even though the overall AFR is lean, localized regions of rich mixture can form during injection and mixing, leading to $\text{CO}$ and soot formation.

**Textbook References:**

*   **Rudra Moorthy:** Discusses the trade-offs between power, efficiency, and emissions for different AFRs.
*   **R.K Rajput:** Explains the effect of lean and rich mixtures on engine performance parameters like brake specific fuel consumption (BSFC).
*   **V. Ganesan:** Analyzes the impact of AFR on combustion characteristics and thermal efficiency.
*   **H N Gupta:** Details the control strategies for AFR in modern gasoline engines.
*   **V Sajith and Shijo Thomas:** Integrates AFR into performance calculations and emission analysis.
*   **J.B.Heywood:** Provides detailed charts and graphs showing the relationship between AFR, power, efficiency, and emissions.

---

### **5. Control of Air-Fuel Ratio**

Accurate control of AFR is essential for modern ICEs to meet stringent emission standards and optimize performance.

**Methods of AFR Control:**

*   **Carburetors (Older Systems):** Mechanical devices that mix air and fuel based on the Venturi effect and needle valves. Less precise control.
*   **Fuel Injection Systems (Modern Systems):**
    *   **Port Fuel Injection (PFI):** Injectors are located in the intake manifold, upstream of the intake valves.
    *   **Direct Injection (DI):** Injectors are located directly in the combustion chamber. This allows for more precise control over the amount and timing of fuel delivery, and enables stratified charge operation.

**Sensors and Control Units:**

*   **Oxygen Sensor (Lambda Sensor):** Measures the oxygen content in the exhaust gas. This is a crucial feedback sensor for the Engine Control Unit (ECU).
*   **Mass Air Flow (MAF) Sensor:** Measures the mass of air entering the engine.
*   **Manifold Absolute Pressure (MAP) Sensor:** Measures the pressure in the intake manifold.
*   **Throttle Position Sensor (TPS):** Indicates the driver's demand.
*   **Engine Coolant Temperature (ECT) Sensor:** Provides information about engine temperature.
*   **Crankshaft Position Sensor:** Provides engine speed and position information.

**Engine Control Unit (ECU):**

The ECU uses input from these sensors to calculate the required fuel injection pulse width to achieve the desired AFR. For gasoline engines, the ECU aims to maintain a stoichiometric AFR for most operating conditions, adjusting it slightly for specific demands (e.g., richer for maximum power).

**Textbook References:**

*   **H N Gupta:** Provides detailed information on fuel injection systems and sensor technologies.
*   **V Sajith and Shijo Thomas:** Discusses the role of ECUs and feedback control in AFR management.
*   **J.B.Heywood:** Offers insights into advanced fuel injection strategies and their impact on AFR control.

---

### **6. Key Concepts and Definitions Summary**

*   **Air-Fuel Ratio (AFR):** Ratio of mass of air to mass of fuel supplied.
*   **Stoichiometric AFR:** Ideal ratio for complete combustion.
*   **Lean Mixture:** More air than stoichiometric.
*   **Rich Mixture:** Less air than stoichiometric.
*   **Equivalence Ratio ($\phi$):** Ratio of actual AFR to stoichiometric AFR.
    *   $\phi < 1$: Lean
    *   $\phi = 1$: Stoichiometric
    *   $\phi > 1$: Rich
*   **Oxygen Sensor (Lambda Sensor):** Measures oxygen in exhaust for AFR feedback control.
*   **Three-Way Catalytic Converter:** Emits $\text{CO}_2$, $\text{H}_2\text{O}$, and $\text{N}_2$ by oxidizing $\text{CO}$ and HC and reducing $\text{NO}_x$ at stoichiometric conditions.

---

### **7. Practice Questions and Exercises**

**Question 1:**

A gasoline engine operates with an air-fuel ratio of 14:1. If the stoichiometric air-fuel ratio for gasoline is 15:1, what is the equivalence ratio ($\phi$)? Is the mixture rich or lean?

**Answer 1:**

$\phi = \frac{\text{Stoichiometric AFR}_{\text{air/fuel}}}{\text{Actual AFR}_{\text{air/fuel}}} = \frac{15}{14} \approx 1.07$

Since $\phi > 1$, the mixture is **rich**.

**Question 2:**

Calculate the stoichiometric air-fuel ratio for a fuel with the chemical formula $\text{C}_2\text{H}_6$ (Ethane).

**Answer 2:**

1.  **Balanced Combustion Equation:**
    $\text{C}_2\text{H}_6 + a(\text{O}_2 + 3.76\text{N}_2) \rightarrow 2\text{CO}_2 + 3\text{H}_2\text{O} + b\text{N}_2$

2.  **Balancing Oxygen:**
    On the left side: $2a \times 2$ (from $\text{O}_2$) = 4a
    On the right side: $2 \times 2$ (from $\text{CO}_2$) + $3 \times 1$ (from $\text{H}_2\text{O}$) = $4 + 3 = 7$
    So, $4a = 7 \Rightarrow a = 7/4 = 1.75$

    The equation is: $\text{C}_2\text{H}_6 + 1.75\text{O}_2 \rightarrow 2\text{CO}_2 + 3\text{H}_2\text{O}$

3.  **Moles of Air:**
    Moles of Air = Moles of $\text{O}_2 \times (1 + 3.76)$ = $1.75 \times 4.76 = 8.33$ moles

4.  **Mass of Fuel and Air:**
    Molar mass of $\text{C}_2\text{H}_6$ = $(2 \times 12.011) + (6 \times 1.008) \approx 30.07 \text{ g/mol}$
    Mass of Fuel (per mole) = $30.07 \text{ g}$
    Mass of Air (per mole of fuel) = $8.33 \text{ mol} \times 28.97 \text{ g/mol} \approx 241.2 \text{ g}$

5.  **Stoichiometric AFR:**
    AFR$_{\text{stoichiometric}}$ = $\frac{241.2 \text{ g}}{30.07 \text{ g}} \approx 8.02$

    The stoichiometric AFR for Ethane is approximately **8:1**.

**Question 3:**

What are the primary advantages of operating a gasoline engine with a slightly rich mixture during maximum power conditions?

**Answer 3:**

*   **Maximizes Power Output:** Ensures all oxygen is consumed and allows for more aggressive ignition timing and potentially higher boost pressures due to improved cooling.
*   **Engine Cooling:** The excess fuel vaporizes and absorbs heat from the combustion chamber, piston, and valves, preventing overheating and detonation (knocking).

**Question 4:**

Explain why diesel engines always operate with an excess of air.

**Answer 4:**

Diesel engines use compression ignition. Ignition of the fuel occurs when it is injected into the hot compressed air. To ensure ignition and stable combustion under various load conditions, there must always be sufficient oxygen available. Furthermore, injecting fuel into air that is already at or below the autoignition temperature would prevent ignition. Operating with excess air ensures that the temperature of the air-fuel mixture remains above the autoignition temperature of the diesel fuel and provides sufficient oxygen for the entire combustion process.

---

### **8. Important Points to Remember**

*   **AFR is critical for engine operation, efficiency, and emissions.**
*   **Stoichiometric AFR is the ideal ratio for complete combustion.**
*   **Equivalence ratio ($\phi$) is a normalized measure of mixture strength.**
*   **Gasoline engines operate at different AFRs depending on load and operating conditions (lean for economy, rich for power, stoichiometric for emissions control).**
*   **Diesel engines always operate lean.**
*   **Modern engines use sophisticated electronic control systems with sensors (like the O2 sensor) to maintain precise AFR.**
*   **The interaction between AFR and combustion characteristics directly impacts the type and quantity of emissions produced.**

---

This concludes the study notes for the Air-Fuel Ratio topic. Ensure to refer to the specified textbooks for further details and to reinforce your understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
