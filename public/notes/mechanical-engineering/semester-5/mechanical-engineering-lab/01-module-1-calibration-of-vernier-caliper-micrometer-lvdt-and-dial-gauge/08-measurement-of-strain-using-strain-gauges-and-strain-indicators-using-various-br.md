---
title: "Measurement of strain using strain gauges and strain indicators using various bridge arrangements"
subject: "MECHANICAL ENGINEERING LAB"
module: "Module 1: Calibration of vernier caliper, micrometer, LVDT and dial gauge."
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf4804463705"
status: "completed"
scrapedAt: "2026-05-20T18:01:28.028Z"
---
## Mechanical Engineering Lab: Module 1 - Calibration & Measurement of Strain

### Topic: Measurement of Strain Using Strain Gauges and Strain Indicators Using Various Bridge Arrangements

**Objective:** To understand the principles of strain measurement using strain gauges and to analyze different bridge arrangements for amplifying and measuring strain-induced resistance changes.

**Learning Outcomes (LO):**

*   **LO1:** Understand the working principle of a strain gauge and its application in strain measurement.
*   **LO2:** Identify and explain different types of strain gauges.
*   **LO3:** Comprehend the concept of electrical resistance strain gauges and their dependence on deformation.
*   **LO4:** Analyze the necessity and function of different electrical bridge arrangements (e.g., Wheatstone bridge) for strain measurement.
*   **LO5:** Relate the measured electrical signals to the applied strain using strain indicators and calibration.
*   **LO6:** Choose appropriate bridge configurations based on the application and desired accuracy.

**Course Outcomes (CO) Alignment:**

*   **CO1: Choose the appropriate instruments for different measurements (K3).** Understanding different bridge arrangements and strain gauge types allows for selecting the most suitable setup for a given strain measurement task.
*   **CO2: Determine dimensional and form accuracies of various components (K3).** Strain measurement is crucial for assessing the stress and deformation in components, indirectly relating to their dimensional and form accuracies under load.
*   **CO3: Develop knowledge of designing and analyzing mechanisms in machinery (K3).** Understanding strain and stress analysis is fundamental for designing robust and reliable mechanical machinery.
*   **CO4: Demonstrate the functions and control of various devices used for industrial automation (K3).** Strain gauges and associated instrumentation are common in industrial automation for monitoring structural health and performance.
*   **CO5: Demonstrate 3D printing technique (K3).** While not directly related, understanding material properties and stress analysis (using strain gauges) can inform the design and testing of 3D printed components.

---

### 1. Introduction to Strain and Strain Measurement

*   **Strain:** A measure of deformation representing the displacement between particles in a body divided by the distance between those particles. It is a dimensionless quantity, often expressed as a ratio (e.g., mm/mm) or in microstrain ($\mu\epsilon$), where $1\mu\epsilon = 10^{-6}$.
    *   **Tensile Strain:** Elongation of the material in the direction of applied force.
    *   **Compressive Strain:** Contraction of the material in the direction of applied force.
    *   **Shear Strain:** Deformation due to forces acting parallel to the surface.

*   **Why Measure Strain?**
    *   To determine the stress experienced by a material under load (using Hooke's Law: $\sigma = E \times \epsilon$, where $\sigma$ is stress, $E$ is Young's Modulus, and $\epsilon$ is strain).
    *   To assess the structural integrity and performance of mechanical components.
    *   To monitor load, pressure, acceleration, and other physical quantities indirectly.
    *   Crucial in **stress analysis** and **experimental mechanics**. (Refer to *Metrology for Engineers* by Shotbolt & Gayler for general metrology principles).

---

### 2. Electrical Resistance Strain Gauges

#### 2.1 Principle of Operation

*   **Piezoresistive Effect:** The fundamental principle behind electrical resistance strain gauges. It states that the electrical resistance of a conductor or semiconductor changes when it is subjected to mechanical strain.
*   **Gauge Factor (GF):** A key parameter defining the sensitivity of a strain gauge. It is the ratio of the relative change in electrical resistance ($\Delta R / R$) to the mechanical strain ($\epsilon$).
    $$GF = \frac{\Delta R / R}{\epsilon}$$
    *   For metallic strain gauges, GF is typically around 2. For semiconductor strain gauges, it can be significantly higher (up to 100 or more).
    *   *Example:* If a strain gauge with $R = 120 \Omega$ and $GF = 2$ experiences a strain of $1000\mu\epsilon$, the change in resistance will be:
        $\Delta R = GF \times \epsilon \times R = 2 \times (1000 \times 10^{-6}) \times 120 \Omega = 0.24 \Omega$.

#### 2.2 Construction and Types

*   **Metallic Strain Gauges:**
    *   **Foil Gauges:** The most common type. Made from a thin foil of resistive alloy (e.g., Constantan or Karma) etched into a pattern of fine wires. The foil is bonded to a thin backing material (e.g., polyimide).
    *   **Wire Gauges:** Older type, made from fine resistance wire wound into a serpentine pattern and bonded to a backing. Less common now due to lower accuracy and sensitivity compared to foil gauges.
    *   **Advantages:** High accuracy, good stability, relatively inexpensive.
    *   **Disadvantages:** Low gauge factor.
*   **Semiconductor Strain Gauges:**
    *   Made from semiconductor materials (e.g., silicon) whose piezoresistive effect is much more pronounced.
    *   **Advantages:** Very high gauge factor, compact size.
    *   **Disadvantages:** Sensitive to temperature variations, brittle, more expensive.
*   **Other Types (Less Common):**
    *   **Vibrating Wire Strain Gauges:** Measure strain by detecting the change in resonant frequency of a vibrating wire.
    *   **Fiber Optic Strain Gauges:** Utilize changes in optical properties of optical fibers under strain.

#### 2.3 Strain Gauge Bonding and Installation

*   **Adhesives:** Special adhesives are used to firmly bond the strain gauge to the surface of the component being tested, ensuring good strain transfer.
*   **Surface Preparation:** The surface must be clean, smooth, and free from contaminants for proper bonding.
*   **Lead Wires:** Electrical connections are made to the strain gauge terminals via lead wires. These connections must be made carefully to minimize any spurious resistance changes.

---

### 3. Strain Indicators

*   **Purpose:** To measure the small changes in resistance of the strain gauge and convert them into a readable strain value.
*   **Basic Principle:** Strain indicators often utilize electrical bridge circuits to amplify the resistance changes and provide a direct strain reading or a voltage proportional to strain.
*   **Types:**
    *   **Analog Strain Indicators:** Display strain on a meter, often with a pointer.
    *   **Digital Strain Indicators:** Display strain on a digital readout.
    *   **Data Acquisition Systems:** More sophisticated systems that can record and process strain data over time.

---

### 4. Electrical Bridge Arrangements for Strain Measurement

The change in resistance of a strain gauge is typically very small. Bridge circuits are used to amplify these small changes and provide a more measurable output. The **Wheatstone bridge** is the most fundamental and widely used configuration.

#### 4.1 Wheatstone Bridge (Basic Configuration)

*   **Structure:** Consists of four resistive arms. If used for strain measurement, one or more arms are replaced by strain gauges.
*   **Principle:** The bridge is balanced when the ratio of resistances in adjacent arms is equal. When unbalanced, a voltage is produced across the output terminals.
*   **Configuration for Strain Measurement:**
    *   **Single-Arm (Quarter Bridge):** One strain gauge (R1) is used in one arm of the bridge. The other three arms are fixed resistors.
        *   **Pros:** Simple, inexpensive.
        *   **Cons:** Highly sensitive to temperature changes (as all resistors are affected), less sensitive to strain.
    *   **Two-Arm (Half Bridge):** Two active strain gauges are used.
        *   **Configuration 1 (Active-Active):** Two gauges mounted on the specimen in a way that one experiences tensile strain and the other compressive strain (e.g., on opposite sides of a bending beam). Both gauges are placed in adjacent arms of the bridge.
            *   **Pros:** Doubles the output signal compared to a quarter bridge, compensates for temperature effects to a degree.
            *   **Cons:** Requires careful placement of gauges.
        *   **Configuration 2 (Active-Passive):** One active gauge and one dummy gauge (not subjected to strain but experiencing similar temperature changes) are used. The dummy gauge is placed in an adjacent arm.
            *   **Pros:** Excellent temperature compensation.
            *   **Cons:** Only measures strain in one gauge.
    *   **Four-Arm (Full Bridge):** Four active strain gauges are used.
        *   **Configuration 1 (Active-Active):** Gauges are arranged such that two experience tensile strain and two experience compressive strain (e.g., four gauges on a beam in bending). They are placed in all four arms of the bridge.
            *   **Pros:** Maximizes output signal (4 times that of a quarter bridge), provides excellent temperature compensation and cancels out bending effects if arranged symmetrically.
            *   **Cons:** Most complex arrangement, requires four gauges.
        *   **Configuration 2 (Shear Bridge):** Used to measure shear strain, where all four gauges are placed at 45 degrees to the principal stress axes.
            *   **Pros:** Sensitive to shear strain, good temperature compensation.

#### 4.2 Advantages of Bridge Arrangements

*   **Amplification of Small Resistance Changes:** The bridge circuit amplifies the voltage output, making it easier to measure the strain.
*   **Temperature Compensation:** By using multiple gauges and specific arrangements (half and full bridge), the effects of temperature-induced resistance changes can be minimized or eliminated.
*   **Cancellation of Spurious Effects:** Proper bridge configurations can cancel out unwanted signals from bending or torsion if they are not the primary measurement.

#### 4.3 Bridge Excitation

*   **Constant Voltage or Constant Current:** The bridge is excited by a stable DC or AC voltage source.
*   **Sensitivity:** The output voltage is proportional to the excitation voltage. Higher excitation voltage leads to a larger output signal for the same strain. However, excessive excitation can lead to self-heating of the strain gauge, which can cause errors.

---

### 5. Strain Indicators and Reading Strain

*   **Zeroing the Bridge:** Before applying any load, the bridge is typically balanced (zeroed) to ensure the output is zero when there is no strain.
*   **Applying Load:** The component with the strain gauge(s) is subjected to the load or stress.
*   **Reading the Strain Indicator:** The strain indicator measures the output voltage from the bridge and displays the corresponding strain value, often after applying the gauge factor.
*   **Calibration:**
    *   Strain gauges and indicators must be calibrated. This involves applying known strains (e.g., by loading a calibration specimen with known material properties) and correlating the measured electrical output with the applied strain.
    *   *Calibration Procedure Example:*
        1.  Bond a strain gauge to a specimen (e.g., a steel calibration bar).
        2.  Connect the strain gauge to a strain indicator using a Wheatstone bridge configuration.
        3.  Zero the strain indicator with no load.
        4.  Apply a known load to the specimen, causing a known strain (calculate using $\epsilon = \sigma / E$, where $\sigma = Load / Area$).
        5.  Record the strain indicated by the instrument.
        6.  Repeat for several known loads.
        7.  Plot the indicated strain versus the calculated strain. The slope of this line is the calibration factor.

---

### 6. Practical Considerations and Errors

*   **Temperature Effects:**
    *   **Gauge Resistance Change:** Temperature changes affect the resistance of the strain gauge material itself.
    *   **Base Material Resistance Change:** Temperature also affects the electrical resistance of the component surface where the gauge is bonded.
    *   **Compensation:** Dummy gauges and full bridge configurations are crucial for mitigating temperature effects.
*   **Transverse Sensitivity:** The strain gauge may respond to strain perpendicular to its primary sensing direction. This is quantified by the transverse sensitivity coefficient.
*   **Bonding Errors:** Poor bonding can lead to inaccurate strain transfer.
*   **Lead Wire Resistance:** The resistance of the lead wires connecting the gauge to the indicator can introduce errors, especially in quarter-bridge configurations. Three-wire or four-wire connections can help mitigate this.
*   **Non-linearity:** The relationship between resistance change and strain may not be perfectly linear over large strain ranges.
*   **Self-Heating:** Current flowing through the gauge can cause it to heat up, leading to resistance changes and errors. Using lower excitation voltages or pulsed excitation can help.
*   **Drift:** Changes in electronic components of the indicator or bridge over time can cause zero drift.

---

### 7. Applications

*   **Stress Analysis:** Determining stress distribution in components under various loads.
*   **Load Measurement:** Strain gauges are the core of load cells used to measure forces.
*   **Pressure Measurement:** Pressure transducers often use strain gauges to measure diaphragm deformation.
*   **Vibration Analysis:** Measuring dynamic strains to understand vibration characteristics.
*   **Material Testing:** Measuring strain-gage factor and Young's Modulus of materials.
*   **Structural Health Monitoring:** Continuously monitoring strain in bridges, aircraft, and other structures.

---

### Practice Questions and Exercises

**Question 1:**
A metallic strain gauge with a resistance of $120 \Omega$ and a gauge factor of 2 is bonded to a steel specimen. If the gauge experiences a strain of $500 \mu\epsilon$, what is the change in resistance of the strain gauge?

**Answer 1:**
Using the formula $\Delta R = GF \times \epsilon \times R$:
$\Delta R = 2 \times (500 \times 10^{-6}) \times 120 \Omega$
$\Delta R = 1000 \times 10^{-6} \times 120 \Omega$
$\Delta R = 0.001 \times 120 \Omega$
$\Delta R = 0.12 \Omega$

**Question 2:**
Explain the advantage of using a half-bridge configuration with an active-active arrangement over a quarter-bridge configuration for strain measurement.

**Answer 2:**
A half-bridge with an active-active arrangement uses two strain gauges positioned to experience opposite strains (e.g., tension and compression). This configuration:
1.  **Doubles the output signal:** The output voltage is twice that of a quarter-bridge for the same strain, increasing sensitivity.
2.  **Provides partial temperature compensation:** Since both gauges are affected by temperature, their resistance changes tend to cancel out in the bridge output, reducing temperature-induced errors compared to a single gauge in a quarter-bridge.

**Question 3:**
In a Wheatstone bridge arrangement for strain measurement, what is the primary function of the bridge?

**Answer 3:**
The primary function of the Wheatstone bridge in strain measurement is to amplify the very small changes in electrical resistance of the strain gauge due to applied strain into a measurable voltage signal. It also helps in temperature compensation when multiple active gauges are used.

**Question 4 (Lab Exercise):**
You are given a steel bar and a strain gauge. Describe the steps you would follow to measure the strain in the bar when a tensile load is applied. Include the instrumentation and bridge configuration you would likely use.

**Answer 4 (Lab Exercise Outline):**
1.  **Surface Preparation:** Clean and prepare a specific area on the steel bar's surface for bonding.
2.  **Strain Gauge Bonding:** Carefully bond the strain gauge to the prepared surface using appropriate adhesive. Ensure proper alignment with the expected direction of tensile strain.
3.  **Lead Wire Connection:** Solder or connect lead wires to the terminals of the strain gauge.
4.  **Bridge Configuration:** Choose an appropriate bridge configuration. For a single measurement on a tensile bar, a **quarter-bridge** might be used initially for simplicity, but a **half-bridge** (with a dummy gauge or another active gauge on the opposite side) would offer better temperature compensation.
5.  **Instrumentation Setup:** Connect the strain gauge leads to a **strain indicator** (a device that typically contains a Wheatstone bridge circuit and signal conditioning).
6.  **Zeroing:** Before applying load, balance the Wheatstone bridge using the strain indicator's controls to set the reading to zero.
7.  **Applying Load:** Apply a known tensile load to the steel bar using a testing machine.
8.  **Reading Strain:** Read the strain value displayed on the strain indicator.
9.  **Data Recording:** Record the applied load and the corresponding indicated strain. Repeat for several load increments.
10. **Calibration (if necessary):** If the strain indicator doesn't directly display strain, you might need to calibrate it using a known strain value derived from the applied load and the material properties ($\epsilon = \sigma / E$).

---

### Important Points to Remember

*   **Gauge Factor (GF):** The fundamental sensitivity parameter of a strain gauge.
*   **Wheatstone Bridge:** The primary circuit for amplifying and measuring resistance changes from strain gauges.
*   **Bridge Configurations:** Quarter, Half, and Full bridges offer different levels of sensitivity and temperature compensation.
*   **Temperature Compensation:** Crucial for accurate strain measurement; often achieved using dummy gauges or full bridge configurations.
*   **Bonding:** Proper bonding of the strain gauge to the specimen is critical for accurate strain transfer.
*   **Calibration:** Essential to ensure the accuracy of the strain measurement system.
*   **Microstrain ($\mu\epsilon$):** The common unit for expressing strain.
*   **Stress-Strain Relationship:** Strain measurement is directly related to stress via Hooke's Law ($\sigma = E \times \epsilon$).

---

**References:**

*   **Metrology for Engineers, 5th edition by Shotbolt C.R. and Gayler J.F.W:** Provides foundational principles of metrology and measurement techniques.
*   **Practical Engineering Metrology by Sharp K.W.B. and Hume Sir Isaac:** Offers practical insights into metrological practices relevant to laboratory work.
*   **Mechatronics: Electronic Control Systems in Mechanical and Electrical Engineering by W.Bolton:** Explains the integration of electronic sensing and measurement systems, including strain gauges and their associated electronics.

This detailed study note covers the essential aspects of strain measurement using strain gauges and strain indicators with various bridge arrangements, aligning with the learning outcomes and course objectives.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
