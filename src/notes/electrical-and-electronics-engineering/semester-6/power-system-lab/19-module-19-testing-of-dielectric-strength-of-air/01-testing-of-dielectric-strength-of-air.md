---
title: "Testing of dielectric strength of air"
subject: "POWER SYSTEM LAB"
module: "Module 19: Testing of dielectric strength of air"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36812"
status: "completed"
scrapedAt: "2026-05-23T16:31:34.765Z"
---
# Power System Lab: Module 19 - Testing of Dielectric Strength of Air

## 1. Introduction to Dielectric Strength

Dielectric strength is a fundamental property of insulating materials that defines their ability to withstand an electric field without undergoing electrical breakdown. In simpler terms, it's the maximum electric field strength a material can endure before becoming conductive.

**Definition:** Dielectric strength is typically expressed in kilovolts per millimeter (kV/mm) or megavolts per meter (MV/m). It represents the voltage gradient at which a dielectric material fails.

**Importance in Power Systems:**
*   **Insulation Design:** Crucial for designing insulators, bushings, cables, and transformers to prevent electrical breakdown and ensure reliable operation.
*   **Safety:** Ensures safe clearances between live conductors and grounded parts, preventing arcing and short circuits.
*   **Equipment Performance:** Directly impacts the voltage rating and performance of electrical equipment.

## 2. Dielectric Strength of Air

Air, at standard atmospheric conditions, is a primary dielectric medium used in many high-voltage applications, such as:
*   Air-blast circuit breakers
*   Switchgear
*   High-voltage transmission line clearances
*   Spark gaps

However, the dielectric strength of air is not constant. It's significantly influenced by various factors.

### 2.1. Factors Affecting Dielectric Strength of Air

*   **Electrode Configuration:** The shape and spacing of electrodes (e.g., parallel planes, spheres, rods) play a critical role in the electric field distribution and breakdown voltage.
    *   **Uniform Field:** Occurs when electrodes are shaped to produce a constant electric field gradient (e.g., parallel plates with rounded edges).
    *   **Non-uniform Field:** Occurs when electrodes have sharp edges or points, leading to a high concentration of electric field at those points. This can cause localized ionization and breakdown at lower overall voltages.
*   **Gap Distance (d):** Generally, a larger gap distance requires a higher voltage to cause breakdown. However, the relationship is not linear and depends on the electrode configuration.
*   **Pressure (p):** The dielectric strength of air is directly proportional to its pressure. At higher pressures, air molecules are packed more densely, requiring more energy to ionize and initiate a discharge.
*   **Temperature (T):** Higher temperatures reduce the dielectric strength of air. Increased thermal agitation of molecules makes ionization easier.
*   **Humidity:** The presence of water vapor (humidity) generally reduces the dielectric strength of air. Water molecules can act as points of ionization.
*   **Presence of Contaminants:** Dust, smoke, and other impurities can affect the dielectric strength by providing surfaces for ionization or by altering the electric field.

## 3. Breakdown Mechanisms in Air

Electrical breakdown in air is a complex phenomenon that involves the ionization of air molecules. The primary mechanisms are:

### 3.1. Townsend Discharge (Streamer Mechanism)

This is the dominant mechanism for breakdown in gases at moderate pressures and gap distances. It involves a chain reaction of ionization:

1.  **Initial Ionization:** A few free electrons are always present in air due to cosmic rays or natural background radiation.
2.  **Electron Acceleration:** When an electric field is applied, these electrons are accelerated.
3.  **Collision Ionization:** If an accelerated electron gains sufficient energy, it can collide with neutral air molecules, knocking out another electron. This creates a positive ion and a new free electron.
4.  **Avalanche Formation:** This process repeats, leading to an exponential increase in the number of charged particles – an electron avalanche.
5.  **Positive Ion Bombardment:** Positive ions are also accelerated towards the cathode. If they gain enough energy, they can liberate secondary electrons from the cathode surface, further sustaining the discharge.
6.  **Streamer Formation:** In non-uniform fields or at higher voltages, the electron avalanche can develop into a streamer – a visible luminous channel of ionized gas that propagates towards the opposite electrode.
7.  **Breakdown:** When a streamer bridges the gap between the electrodes, it establishes a conductive path, leading to a complete breakdown.

### 3.2. Paschen's Law

Paschen's Law describes the relationship between the breakdown voltage of a gas and the product of the gas pressure ($p$) and the electrode gap distance ($d$). It states that the breakdown voltage depends on the quantity "$pd$".

**Empirical Relationship:** $V_b = f(pd)$

*   **Paschen's Curve:** When the breakdown voltage ($V_b$) is plotted against the "$pd$" product for a specific gas and electrode configuration, a curve known as Paschen's curve is obtained.
*   **Minimum Breakdown Voltage:** Paschen's curve typically shows a minimum breakdown voltage at a specific "$pd$" value.
    *   **For small "$pd$":** The mean free path of electrons is larger than the gap distance. Electrons can gain significant energy before colliding with molecules, leading to a lower breakdown voltage.
    *   **For large "$pd$":** The mean free path is smaller than the gap distance. Many collisions occur, but the energy gained between collisions is lower. However, the probability of encountering enough molecules to cause breakdown increases with "$pd$".
    *   **The minimum:** Represents an optimum balance between mean free path and the number of molecules encountered.

**Implications:**
*   **Pressure and Gap Distance:** This law highlights that the breakdown strength of air is not solely dependent on pressure or gap distance individually, but their product.
*   **Vacuum and High Pressure:** It explains that breakdown can occur in a vacuum (very small "$pd$") or at very high pressures.

## 4. Testing of Dielectric Strength of Air

The primary objective of testing the dielectric strength of air in a power system lab is to determine the breakdown voltage for specific electrode configurations and under controlled atmospheric conditions.

### 4.1. Experimental Setup

A typical experimental setup for testing the dielectric strength of air involves:

*   **High-Voltage Source:** A high-voltage AC or DC generator, typically a transformer (e.g., Van de Graaff generator, cascade transformer, impulse generator), capable of producing voltages up to several hundred kilovolts.
*   **Electrode System:** Various electrode configurations mounted in a testing chamber or open air, such as:
    *   **Sphere Gap:** Two precisely machined spheres of known diameter, used for accurate voltage measurement.
    *   **Parallel Plane Electrodes:** Flat circular plates with rounded edges for uniform field approximation.
    *   **Rod-Plane Electrodes:** A rod electrode and a plane electrode for non-uniform field studies.
*   **Measuring Instruments:**
    *   **Voltmeter:** A high-voltage voltmeter (e.g., electrostatic voltmeter, peak voltmeter for impulse testing) to measure the applied voltage.
    *   **Current Measurement:** Ammeters (with appropriate high-voltage probes) to monitor discharge currents.
*   **Atmospheric Control/Measurement:**
    *   **Pressure Gauge:** To measure ambient air pressure.
    *   **Thermometer:** To measure ambient air temperature.
    *   **Hygrometer:** To measure relative humidity.
*   **Safety Precautions:** High-voltage insulation, grounding systems, safety barriers, and interlocks.

### 4.2. Test Procedure (General)

The procedure for determining the breakdown voltage of air usually involves the following steps:

1.  **Electrode Setup:** Assemble the desired electrode configuration and set the gap distance ($d$) accurately.
2.  **Atmospheric Conditions:** Record the ambient temperature, pressure, and humidity.
3.  **Apply Voltage:** Slowly increase the applied voltage from the high-voltage source.
4.  **Observe Breakdown:** Monitor for the first sign of electrical breakdown (sparkover) across the gap. This is usually indicated by a sudden discharge or flashover.
5.  **Record Voltage:** Immediately record the applied voltage at which breakdown occurred using the voltmeter.
6.  **Repeat Measurements:** Repeat the measurement several times (e.g., 5-10 times) to obtain a reliable average breakdown voltage. This helps to account for random variations in atmospheric conditions and discharge initiation.
7.  **Adjust Gap/Conditions:** Change the gap distance, pressure, or other parameters and repeat the measurements as required by the experiment.

### 4.3. Calibration of Sphere Gaps

Sphere gaps are often used as calibration standards for high-voltage measurements because they provide a relatively predictable breakdown voltage under specific conditions, approaching a uniform field.

**Standardization:** The breakdown voltage of a sphere gap is often standardized by organizations like the International Electrotechnical Commission (IEC). These standards provide tables or formulas for the breakdown voltage as a function of sphere diameter and gap distance, corrected for atmospheric conditions.

**Correction Factors:** When using a sphere gap for voltage measurement, the recorded breakdown voltage ($V_m$) needs to be corrected for atmospheric conditions to obtain the standard breakdown voltage ($V_s$).

$V_s = k \times V_m$

Where $k$ is the correction factor, typically calculated as:

$k = \frac{3.92 \times p}{273.15 + \theta} \times (1 - \frac{1.52}{D_{sphere}})$  (for AC or DC, approximate)

*   $p$: Ambient pressure in bars (e.g., if measured in Pascal, $p_{bar} = p_{Pa} / 10^5$)
*   $\theta$: Ambient temperature in degrees Celsius.
*   $D_{sphere}$: Diameter of the spheres in meters.

**Important Note:** The actual correction factor formula can be more complex and depend on specific standards and electrode shapes. It's crucial to refer to the relevant IEC or IEEE standards for precise calculations.

### 4.4. Practical Considerations and Sources of Error

*   **Electrode Condition:** Surface roughness, cleanliness, and oxidation of electrodes can affect breakdown voltage.
*   **Rate of Voltage Application:** For AC and DC, the rate of voltage increase should be slow and steady. For impulse tests, the shape of the impulse wave is critical.
*   **Pre-breakdown Currents:** Small leakage currents or partial discharges can occur before complete breakdown, which might not be easily detected.
*   **Humidity Effects:** Accurate measurement and correction for humidity are important, as it can significantly influence results.
*   **Edge Effects:** Even with rounded electrodes, some degree of non-uniformity can exist, affecting breakdown voltage.
*   **Ambient Conditions:** Fluctuations in temperature, pressure, or humidity during the test can lead to variations.

## 5. Learning Outcome Alignment

This module directly addresses the following course outcomes:

*   **CO1: Develop mathematical models and conduct steady state and transient analysis of power system networks using standard / dedicated software.**
    *   **Relevance:** While this module focuses on experimental testing, understanding the factors affecting dielectric strength of air (pressure, temperature, humidity, electrode configuration) is crucial for developing accurate mathematical models for insulation performance and arc modeling in circuit breakers or transmission line flashovers. The empirical relationships (like Paschen's Law) and correction factors are mathematical models derived from experimental data.
    *   **Knowledge Level (K3):** Applying knowledge to solve practical problems. Students apply their understanding of physics and electrical engineering principles to design and interpret experiments, and to use the results for modeling purposes.

*   **CO2: Conduct appropriate tests for any power system component as per standards to analyse their performance.**
    *   **Relevance:** This is the primary focus of the module. Students learn the practical procedures, equipment, and considerations for testing the dielectric strength of air, which is a fundamental insulation medium in many power system components. The ability to conduct these tests allows for the analysis of component performance under various voltage stress conditions and to verify insulation design.
    *   **Knowledge Level (K3):** Applying knowledge to conduct tests. Students gain practical skills and knowledge of laboratory procedures to perform tests, collect data, and analyze results according to established standards.

## 6. Key Concepts and Definitions to Remember

*   **Dielectric Strength:** Maximum electric field strength a material can withstand before breakdown.
*   **Electrical Breakdown:** The process by which an insulating material becomes conductive due to excessive electric field.
*   **Ionization:** The process of creating charged particles (ions and electrons) from neutral gas molecules.
*   **Electron Avalanche:** A rapid multiplication of electrons due to sequential collision ionization.
*   **Streamer:** A luminous channel of ionized gas that propagates in a non-uniform electric field.
*   **Paschen's Law:** Relationship between breakdown voltage and the "$pd$" product.
*   **Uniform Field:** Constant electric field gradient between electrodes.
*   **Non-uniform Field:** Variable electric field gradient, with points of high concentration.
*   **Sphere Gap:** A standardized electrode configuration used for high-voltage measurement and calibration.
*   **Correction Factor:** A multiplier used to adjust measured breakdown voltage for variations in atmospheric conditions.

## 7. Practice Questions and Exercises

**Question 1:** Explain why the dielectric strength of air is dependent on pressure. How does an increase in pressure affect the breakdown voltage of air?

**Answer:** The dielectric strength of air is dependent on pressure because the mean free path of electrons between collisions with air molecules decreases as pressure increases. At higher pressures, air molecules are more densely packed, meaning electrons need to travel shorter distances to collide with other molecules. This increases the probability of ionization events occurring over a given distance. Consequently, a higher voltage is required to accelerate electrons sufficiently to cause a self-sustaining discharge (breakdown). An increase in pressure generally *increases* the dielectric strength of air, up to a certain point beyond which other effects might become significant.

**Question 2:** A sphere gap with spheres of 25 cm diameter is used to measure a voltage. It is observed that breakdown occurs at a reading of 250 kV. The ambient conditions are: temperature = 20°C and pressure = 0.98 bar. Calculate the standard breakdown voltage if the correction factor for the sphere gap at these conditions is 0.95.

**Answer:**
Given:
Measured breakdown voltage ($V_m$) = 250 kV
Correction factor ($k$) = 0.95

Standard breakdown voltage ($V_s$) = $k \times V_m$
$V_s = 0.95 \times 250 \text{ kV}$
$V_s = 237.5 \text{ kV}$

**Question 3:** What are the main mechanisms responsible for electrical breakdown in air at atmospheric pressure? Briefly describe the streamer mechanism.

**Answer:** The main mechanisms for electrical breakdown in air at atmospheric pressure are the Townsend discharge (leading to avalanche formation) and the streamer mechanism.

**Streamer Mechanism Description:**
The streamer mechanism begins with initial free electrons in the air. When a sufficiently high electric field is applied, these electrons are accelerated. They collide with neutral air molecules, causing ionization and creating more electrons and positive ions. This initial avalanche of electrons and ions propagates. In the streamer mechanism, the positive ions in the avalanche drift back towards the cathode. If they gain enough energy, they can impact the cathode and release secondary electrons. These secondary electrons are accelerated into the gap. The electric field ahead of the propagating avalanche is intensified by the space charge of the positive ions. This intensification allows the avalanche to propagate as a luminous channel, called a streamer, which extends towards the opposite electrode. When a streamer successfully bridges the gap between the electrodes, it establishes a conductive path, leading to a complete breakdown (spark).

**Question 4:** How would you design a simple experiment to test the effect of humidity on the dielectric strength of air? What parameters would you need to control and measure?

**Answer:**
**Experimental Design:**
To test the effect of humidity, we would need a controlled environment or a way to vary and measure humidity.

**Setup:**
1.  Use a testing chamber that can be sealed.
2.  Mount electrode configurations (e.g., parallel plates or a sphere gap) inside the chamber.
3.  Connect a high-voltage source to the electrodes.
4.  Install instruments to measure applied voltage, temperature, pressure, and humidity inside the chamber.

**Procedure:**
1.  **Control:** Set the temperature and pressure inside the chamber to constant values (e.g., standard room temperature and atmospheric pressure).
2.  **Vary Humidity:** Introduce controlled amounts of water vapor into the chamber to achieve different relative humidity levels (e.g., 20%, 40%, 60%, 80%). A humidifier or a controlled introduction of water can be used.
3.  **Measure Humidity:** Use a hygrometer to accurately measure the relative humidity at each step.
4.  **Apply Voltage:** Slowly increase the voltage until breakdown occurs.
5.  **Record Data:** Record the breakdown voltage and the corresponding humidity level.
6.  **Repeat:** Repeat the measurement for each humidity level multiple times to ensure accuracy.

**Parameters to Control:**
*   Electrode configuration and gap distance.
*   Temperature.
*   Pressure.

**Parameters to Measure:**
*   Applied voltage at breakdown.
*   Relative humidity.
*   Temperature and pressure (to ensure they remained constant).

By plotting the breakdown voltage against humidity, one can analyze the effect of humidity on the dielectric strength of air.

## 8. Important Points to Remember

*   **Air is an insulator, but its dielectric strength is variable.**
*   **Paschen's Law is a fundamental concept governing gas breakdown.**
*   **Electrode geometry significantly influences the electric field distribution and breakdown voltage.**
*   **Atmospheric conditions (pressure, temperature, humidity) MUST be considered and ideally corrected for accurate dielectric strength determination.**
*   **Sphere gaps are crucial for calibration and accurate voltage measurement.**
*   **Safety is paramount when working with high voltages.**
*   **Repeatability of measurements is essential for reliable results.**
*   **Understanding these principles is vital for designing safe and reliable high-voltage equipment.**

This comprehensive set of notes should provide a solid foundation for understanding and performing tests on the dielectric strength of air in your Power System Lab. Remember to always consult your lab manual and instructor for specific experimental procedures and safety guidelines.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
