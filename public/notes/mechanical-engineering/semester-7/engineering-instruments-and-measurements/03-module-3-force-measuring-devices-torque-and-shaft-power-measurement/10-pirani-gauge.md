---
title: "Pirani gauge"
subject: "ENGINEERING INSTRUMENTS AND MEASUREMENTS"
module: "Module 3: Force measuring devices: Torque and shaft power measurement"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf480446431e"
status: "completed"
scrapedAt: "2026-05-20T18:11:46.776Z"
---
# Engineering Instruments and Measurements - Module 3: Force Measuring Devices: Torque and Shaft Power Measurement

## Topic: Pirani Gauge

### Learning Outcomes:

*   Understand the working principle of a Pirani gauge.
*   Explain the components of a Pirani gauge.
*   Analyze the factors affecting the accuracy and response of a Pirani gauge.
*   Discuss the applications and limitations of a Pirani gauge.
*   Compare Pirani gauges with other vacuum measuring devices.

### Introduction to Pirani Gauge

The Pirani gauge is a **thermal conductivity vacuum gauge** used to measure pressures in the **low to medium vacuum range** (typically from $10^{-1}$ mbar to $10^{-4}$ mbar, though advanced versions can extend this range). It operates on the principle that the thermal conductivity of a gas changes with pressure. As the gas pressure decreases, its ability to conduct heat away from a heated element also decreases.

**Relevance to Module 3 (Force Measuring Devices):**
While the Pirani gauge directly measures pressure, its underlying principle relates to heat transfer, which can be influenced by forces (molecular collisions). More broadly, understanding vacuum measurement is crucial in many engineering applications where forces are significant, such as in vacuum-assisted manufacturing processes, material deposition, and in the operation of certain mechanical systems. This topic aligns with **CO3 (To examine various devices to measure force, pressure accurately)**, as pressure is an integral component of force measurement and is often a critical parameter in systems where forces are applied.

### Working Principle

The Pirani gauge relies on the relationship between the **thermal conductivity of a gas and its pressure**.

1.  **Heated Filament:** The core of the gauge is a filament (typically made of tungsten or platinum) that is heated electrically to a constant temperature.
2.  **Heat Loss to Gas:** In a vacuum environment, the filament loses heat primarily through **radiation** and **convection**. As gas molecules are present, they collide with the filament, absorbing heat and carrying it away. This process is called **conduction**.
3.  **Pressure Dependence:**
    *   At **higher pressures**, there are more gas molecules. These molecules effectively conduct heat away from the filament, causing its temperature (and thus its resistance) to decrease.
    *   At **lower pressures**, there are fewer gas molecules. The heat loss due to conduction is reduced, allowing the filament to reach a higher temperature (and resistance).
4.  **Measurement:** The change in the filament's temperature is detected by measuring its **electrical resistance**. Since the resistance of most metals increases with temperature, the measured resistance is directly related to the gas pressure.

### Components of a Pirani Gauge

A typical Pirani gauge consists of the following key components:

1.  **Vacuum Tube (Gauge Head):**
    *   **Filament (Hot Wire):** A thin wire (e.g., tungsten, platinum, or a coated filament) that is heated by a constant current or voltage.
    *   **Sensor Element:** The filament itself acts as the sensing element.
    *   **Protective Cage (Optional but common):** A metal mesh or shroud that protects the filament from direct mechanical impact.
    *   **Connection to Vacuum System:** A port that connects the gauge to the system whose pressure is to be measured.

2.  **Electronic Control Unit:**
    *   **Power Supply:** Provides a stable current or voltage to heat the filament.
    *   **Bridge Circuit (e.g., Wheatstone bridge):** Used to measure the resistance of the filament. One arm of the bridge typically contains the sensing filament, while other arms are stable resistors.
    *   **Indicator:** Displays the measured pressure, often as a digital readout or analog meter.
    *   **Calibration Controls:** Potentiometers to adjust the gauge for specific gases and pressure ranges.

### Measurement of Pressure

The pressure is typically measured using a **Wheatstone bridge**.

*   The sensing filament is placed in one arm of the bridge.
*   A fixed resistor (reference resistor) is placed in another arm.
*   The bridge is initially balanced at a known pressure (e.g., atmospheric pressure or a specific vacuum level).
*   As the pressure in the vacuum system changes, the resistance of the sensing filament changes, causing the bridge to become unbalanced.
*   The output voltage from the unbalanced bridge is proportional to the change in filament resistance, and therefore to the gas pressure.

**Mathematical Relation (Simplified):**
The power dissipated by the filament is a function of its temperature and the heat loss to the gas. The heat loss due to conduction ($Q_{cond}$) is proportional to the pressure ($P$) and the temperature difference between the filament and the surrounding gas.

$P_{elec} = P_{rad} + Q_{conv} + Q_{cond}$

Where:
*   $P_{elec}$ is the electrical power supplied to the filament.
*   $P_{rad}$ is heat loss due to radiation.
*   $Q_{conv}$ is heat loss due to convection.
*   $Q_{cond}$ is heat loss due to conduction.

In the low-pressure regime, $Q_{cond}$ is the dominant factor dependent on pressure. For a given filament temperature and gas, $Q_{cond} \propto P$.

The resistance ($R$) of the filament is related to its temperature ($T$) by:
$R = R_0 (1 + \alpha T)$
where $R_0$ is the resistance at a reference temperature and $\alpha$ is the temperature coefficient of resistance.

The electronic unit measures the change in $R$ and translates it into a pressure reading.

### Factors Affecting Accuracy and Response

Several factors can influence the performance of a Pirani gauge:

*   **Gas Composition:** The thermal conductivity of different gases varies significantly. A Pirani gauge calibrated for one gas (e.g., nitrogen) will show incorrect readings for another gas (e.g., helium). This is because the number of collisions and the heat absorbed per collision differ. **Example:** A gauge calibrated for nitrogen will read a lower pressure than the actual pressure when measuring helium, as helium has higher thermal conductivity.
    *   **Correction:** Different calibration curves or correction factors are needed for different gases.
*   **Filament Temperature:** The gauge's response and range are dependent on the operating temperature of the filament. Higher filament temperatures can extend the lower pressure limit but may also lead to increased filament degradation and non-linearities.
*   **Filament Material and Geometry:** The material's temperature coefficient of resistance and the filament's surface area and length affect its thermal mass and heat dissipation characteristics.
*   **Ambient Temperature:** Changes in ambient temperature can affect the resistance of the fixed resistors in the bridge circuit and the initial temperature of the filament, leading to drift.
    *   **Correction:** Temperature compensation using a reference gauge or a compensating resistor in the bridge circuit is often employed.
*   **Gas Mean Free Path:** At very low pressures, the mean free path of gas molecules becomes comparable to or larger than the filament diameter. In this regime, heat loss becomes less dependent on pressure and more dependent on the geometry of the gauge and the mean free path, leading to deviations from the linear relationship.
*   **Filament Contamination:** Adsorption of gases or deposition of material onto the filament surface can alter its thermal emissivity and conductivity, affecting calibration.
*   **Outgassing of Gauge Components:** The gauge itself can outgas, especially at higher temperatures, contributing to the measured pressure.

### Calibration

*   **Standard Calibration:** Typically calibrated against a known pressure source or a more accurate reference gauge (e.g., a McLeod gauge) for a specific gas, usually nitrogen.
*   **Gas-Specific Calibration:** For accurate measurements of other gases, the gauge must be recalibrated or a correction factor applied.
*   **Zero Point Calibration:** Ensuring the bridge is correctly balanced at atmospheric pressure or a designated high-pressure reference.

### Applications of Pirani Gauge

Pirani gauges are widely used in various industrial and scientific applications:

*   **Vacuum System Monitoring:** Essential for monitoring the vacuum level during pump-down operations in systems like vacuum furnaces, coating systems, and mass spectrometers.
*   **Semiconductor Manufacturing:** Used in processes like vacuum deposition, etching, and sputtering.
*   **Scientific Research:** In laboratories for experiments requiring controlled vacuum conditions.
*   **Industrial Processes:** In food packaging, freeze-drying, and material handling under vacuum.
*   **General Vacuum Measurement:** For routine monitoring of vacuum systems.

### Advantages of Pirani Gauge

*   **Robust and Simple Construction:** Relatively straightforward design, making them durable.
*   **Fast Response Time:** Compared to some other vacuum gauges, they can provide quick readings.
*   **Relatively Inexpensive:** Generally more cost-effective than other high-vacuum gauges.
*   **Wide Measurement Range:** Covers a useful range of low to medium vacuum pressures.
*   **Can be used with various gases:** Though calibration is needed.

### Disadvantages of Pirani Gauge

*   **Gas Type Dependency:** Requires calibration for each specific gas for accurate readings.
*   **Sensitivity to Ambient Temperature Variations:** Can drift if not properly compensated.
*   **Filament Degradation:** The filament can burn out or get contaminated over time, affecting accuracy and lifespan.
*   **Not suitable for Ultra-High Vacuum (UHV):** Becomes less sensitive at very low pressures (below $10^{-4}$ mbar).
*   **Vulnerable to mechanical shock:** The filament can be fragile.

### Comparison with Other Vacuum Measuring Devices

| Gauge Type      | Measurement Range (mbar) | Working Principle                                      | Advantages                                                                  | Disadvantages                                                                   |
| :-------------- | :----------------------- | :----------------------------------------------------- | :-------------------------------------------------------------------------- | :------------------------------------------------------------------------------ |
| **Pirani Gauge** | $10^{-1}$ to $10^{-4}$   | Thermal conductivity                                   | Robust, inexpensive, fast response                                          | Gas dependent, sensitive to ambient temp, filament degradation                |
| **Thermocouple Gauge** | $10^{-1}$ to $10^{-3}$   | Thermoelectric effect (temperature of heated filament) | Simple, inexpensive, less sensitive to gas type than Pirani                   | Limited range, filament degradation, gas dependent                              |
| **Capacitance Manometer** | $10^3$ to $10^{-5}$  | Change in capacitance due to diaphragm deflection      | Highly accurate, excellent linearity, gas independent, wide range         | Expensive, susceptible to contamination, mechanical vibration sensitivity       |
| **Ionization Gauge (Hot Cathode)** | $10^{-3}$ to $10^{-10}$ | Ionization of gas molecules by electron bombardment | Wide range, sensitive to very low pressures                                 | Filament burnout, requires ion pump, sensitive to filament condition, gas-dependent |
| **Diaphragm Gauge** | $10^3$ to $10^{-3}$ | Mechanical deflection of a diaphragm                     | Simple, robust, relatively inexpensive                                      | Limited accuracy, limited range, affected by temperature                        |

**Relationship to Course Outcomes:**

*   **CO1 (K2):** Understanding the Pirani gauge's principle (thermal conductivity) and components helps in classifying it as a thermal type vacuum gauge.
*   **CO3 (K5):** The Pirani gauge is a device to measure pressure, a fundamental parameter in force calculations (Pressure = Force/Area). Examining its accuracy, calibration, and limitations directly addresses this outcome.
*   **CO5 (K3):** Comparing the Pirani gauge with other vacuum measurement devices aids in selecting the appropriate instrument for specific engineering applications based on pressure range, accuracy, and cost.

### Important Points to Remember

*   **Thermal Conductivity:** The fundamental principle of the Pirani gauge is the variation of gas thermal conductivity with pressure.
*   **Gas Dependence:** Always calibrate or correct for the specific gas being measured.
*   **Pressure Range:** Best suited for medium vacuum.
*   **Filament Health:** The filament's condition is crucial for accurate readings.
*   **Temperature Compensation:** Important for stable operation.

### Practice Questions and Exercises

**Question 1:**
Explain the working principle of a Pirani gauge. How does the change in gas pressure affect the filament's temperature?

**Answer:**
The Pirani gauge works on the principle of thermal conductivity of gases. A heated filament loses heat to the surrounding gas through conduction. At higher pressures, more gas molecules are present, leading to greater heat loss and a lower filament temperature (and resistance). At lower pressures, fewer molecules mean less heat loss, resulting in a higher filament temperature (and resistance). The gauge measures this change in filament resistance, which is correlated to the gas pressure.

**Question 2:**
Why is the Pirani gauge considered "gas dependent"? Provide an example of how measuring a different gas without recalibration would lead to an error.

**Answer:**
The Pirani gauge is gas-dependent because the thermal conductivity of gases varies significantly. The rate at which the filament loses heat depends on the molecular properties of the gas, such as its specific heat and molecular weight. For instance, helium has a much higher thermal conductivity than nitrogen. If a Pirani gauge calibrated for nitrogen is used to measure helium at a specific pressure, it will indicate a significantly lower pressure than the actual value because helium conducts heat away from the filament more efficiently, causing the filament temperature to be lower.

**Question 3:**
List two advantages and two disadvantages of using a Pirani gauge compared to an ionization gauge.

**Answer:**
**Advantages of Pirani Gauge:**
1.  Simpler and more robust construction.
2.  Generally less expensive.
3.  Can operate in a slightly higher pressure range (medium vacuum).

**Disadvantages of Pirani Gauge:**
1.  Limited to medium vacuum range; not suitable for ultra-high vacuum.
2.  More susceptible to contamination of the filament, which can affect readings.
3.  Requires more careful calibration for different gases.

**Question 4 (Calculation/Conceptual):**
A Pirani gauge is calibrated for nitrogen and reads 1 mbar. If the same reading is observed while measuring pure hydrogen, what can you infer about the actual pressure of hydrogen? (Assume thermal conductivity of hydrogen is significantly higher than nitrogen).

**Answer:**
Since hydrogen has a significantly higher thermal conductivity than nitrogen, it will cause the filament to lose heat more effectively. To achieve the same filament temperature (and thus the same resistance and reading of 1 mbar), the actual pressure of hydrogen must be higher than the indicated pressure. Therefore, the actual pressure of hydrogen is likely greater than 1 mbar.

**Question 5:**
How can ambient temperature variations affect the accuracy of a Pirani gauge, and what is a common method to mitigate this issue?

**Answer:**
Ambient temperature variations can affect the accuracy by changing the resistance of the fixed resistors in the Wheatstone bridge and by altering the initial temperature of the filament. A common method to mitigate this is to use a **temperature-compensated bridge circuit**, where a second, unheated filament or a resistor with a similar temperature coefficient is placed in the bridge to balance out the effects of ambient temperature changes.

---
**References Used:**

*   **Measurement Systems (Applications and Design) by E.O.Dobelin:** Provides fundamental principles of measurement systems and likely discusses thermal conductivity principles as applied to instrumentation.
*   **Mechanical Measurements and Instrumentation & Control by A.K. Sawhney & Puneet Sawhney:** A comprehensive text that would detail the construction, working, and applications of various gauges, including thermal conductivity types.
*   **Instrumentation Measurement and Analysis by B.C. Nakra and K.K. Chaudhry:** Offers detailed explanations of instrument principles and their calibration, applicable to understanding Pirani gauge operation and accuracy.
*   **A Text Book of Engineering Metrology by R.K.Jain:** Likely covers vacuum measurement techniques as part of broader metrology principles.
*   **Industrial Instrumentation and Control by S. K. Singh:** Provides practical insights into industrial applications and the selection of instruments like Pirani gauges.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
