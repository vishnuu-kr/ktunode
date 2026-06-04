---
title: "Strain gauge-based load cells and torque sensors"
subject: "ENGINEERING INSTRUMENTS AND MEASUREMENTS"
module: "Module 2: Displacement measurement: Transducers for displacement measurement – Potentiometers"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464313"
status: "completed"
scrapedAt: "2026-05-20T18:11:39.611Z"
---
# Engineering Instruments and Measurements

## Module 2: Displacement Measurement: Transducers for Displacement Measurement – Potentiometers

---

### Topic: Strain Gauge-Based Load Cells and Torque Sensors

This topic delves into the application of strain gauges to measure force and torque, which are fundamentally related to displacement and deformation. While the module's primary focus is displacement, understanding how strain gauges are used in load cells and torque sensors is crucial as these devices measure physical quantities that *cause* strain (and thus indirectly, deformation or displacement). This bridges the understanding of direct displacement measurement with indirect measurement of other physical parameters.

---

### Learning Outcomes Covered:

*   **LO for this Topic:** To understand the principle of operation, construction, and application of strain gauge-based load cells and torque sensors.
*   **CO1:** To identify and classify different measuring instruments and their static and dynamic characteristics, ensuring proper selection and usage for various engineering applications (Knowledge Level: K2).
    *   *This topic contributes by introducing load cells and torque sensors as a class of force/torque measuring instruments and discussing their characteristics.*
*   **CO2:** To measure and analyse displacement, strain and surface characteristics using appropriate techniques and devices, ensuring quality control and performance optimization in manufacturing and engineering processes (Knowledge Level: K3).
    *   *This topic directly relates to measuring strain, which is a consequence of applied force/torque, and indirectly relates to displacement due to deformation.*
*   **CO3:** To examine various devices to measure force, pressure accurately using a variety of devices and techniques (Knowledge Level: K5).
    *   *This topic directly addresses devices used to measure force (load cells) and torque (torque sensors), fulfilling this CO at a higher cognitive level.*
*   **CO5:** To select measurement system for engineering applications (Knowledge Level: K3).
    *   *Understanding the principles and characteristics of these sensors helps in selecting the appropriate one for a given force or torque measurement application.*

---

### Key Concepts and Definitions:

*   **Strain Gauge:** A transducer whose electrical resistance changes proportionally to the amount of strain on the object to which it is attached.
    *   *Princ:* Based on the piezoresistive effect, where the resistance of a conductor changes with applied strain.
    *   *Formula:* $R = \rho \frac{L}{A}$, where $R$ is resistance, $\rho$ is resistivity, $L$ is length, and $A$ is cross-sectional area. When strained, both $L$ and $A$ change, leading to a change in $R$.
    *   *Gauge Factor (GF):* A measure of the sensitivity of a strain gauge. It is defined as the ratio of relative change in resistance to the mechanical strain.
        *   $GF = \frac{\Delta R / R}{\Delta L / L} = \frac{\Delta R / R}{\epsilon}$
        *   Typical GF for metallic strain gauges is around 2.
*   **Load Cell:** A force transducer that converts a force into a measurable electrical signal. It typically uses strain gauges bonded to a deformable structural element (like a metal beam or column).
    *   *Purpose:* To measure weight or force applied to the cell.
*   **Torque Sensor (Torque Transducer):** A transducer that measures the twisting force (torque) applied to an object. Like load cells, they often utilize strain gauges bonded to a shaft or element that deforms under torsional stress.
    *   *Purpose:* To measure rotational force.
*   **Wheatstone Bridge:** A circuit used to measure an unknown resistance by balancing two legs of a bridge circuit, one leg of which includes the unknown component.
    *   *Application:* Strain gauges are almost always used in a Wheatstone bridge configuration to maximize sensitivity and compensate for temperature variations.
*   **Piezoresistive Effect:** The property of certain materials to change their electrical resistance when subjected to mechanical strain.
*   **Deformation:** The change in the shape of a body under the action of applied forces. Strain gauges measure the resulting strain, which is a measure of this deformation.
*   **Strain ($\epsilon$):** The deformation per unit length of an object. It is a dimensionless quantity, often expressed as microstrain ($\mu\epsilon$) or in percentage. $\epsilon = \Delta L / L$.

---

### Strain Gauge-Based Load Cells:

#### 1. Principle of Operation:

*   A load cell typically consists of a precisely machined metallic structure (often called a **strain element** or **spring element**) designed to deform predictably under load.
*   Strain gauges are bonded to specific locations on this strain element where the strain is maximized and ideally uniaxial.
*   When a force is applied to the load cell, the strain element deforms, inducing strain in the bonded strain gauges.
*   This change in strain alters the electrical resistance of the strain gauges.
*   These strain gauges are usually arranged in a **Wheatstone bridge** configuration. The change in resistance unbalances the bridge, producing a small voltage output proportional to the applied force.

#### 2. Construction of Load Cells:

*   **Strain Element:** This is the core mechanical component that deforms. Common shapes include:
    *   **S-type:** Load cells shaped like an 'S' to allow forces to be applied in tension or compression. They are versatile.
    *   **Bending Beam:** A simple beam structure where bending occurs.
    *   **Shear Beam:** A beam that experiences shear stress.
    *   **Canister/Column:** A cylindrical or block-like element designed for compression loads.
    *   **Diaphragm:** A flexible membrane used for lower force ranges.
*   **Strain Gauges:**
    *   **Foil Gauges:** Most common, made from a thin foil (e.g., Constantan) etched into a grid pattern. They are bonded to the strain element using an adhesive.
    *   **Wire Gauges:** Less common now, made from thin wires.
    *   **Semiconductor Gauges:** Exhibit higher GF but are more sensitive to temperature and strain.
*   **Wheatstone Bridge Configuration:**
    *   **Quarter Bridge:** One active strain gauge. Least sensitive and prone to temperature errors.
    *   **Half Bridge:** Two active strain gauges. Improves sensitivity and temperature compensation.
    *   **Full Bridge:** Four active strain gauges. Offers maximum sensitivity and best temperature compensation. In a full bridge load cell, strain gauges are placed in locations of both tensile and compressive strain to maximize the bridge output.

#### 3. Wheatstone Bridge Excitation and Output:

*   The Wheatstone bridge is excited by a stable DC or AC voltage source.
*   When the bridge is balanced, the output voltage is zero.
*   When a force is applied, the resistances change, creating an output voltage ($V_{out}$) given by:
    *   For a half bridge (with $R_1$ and $R_3$ as active, $R_2$ and $R_4$ as dummy): $\frac{\Delta V_{out}}{V_{in}} \approx \frac{GF \cdot \epsilon}{4}$
    *   For a full bridge (with $R_1, R_2$ active tensile, $R_3, R_4$ active compressive, or pairs with opposite strain): $\frac{\Delta V_{out}}{V_{in}} \approx \frac{GF \cdot \epsilon}{2}$
*   The output signal is typically in the millivolt range and requires amplification.

#### 4. Types of Load Cells (based on application/construction):

*   **Compression Load Cells:** Designed to measure forces applied in compression.
*   **Tension Load Cells:** Designed to measure forces applied in tension.
*   **Universal Load Cells:** Can measure both tension and compression (e.g., S-type).
*   **Bending Beam Load Cells:** Often used in platform scales.
*   **Shear Beam Load Cells:** Common in industrial weighing applications.

#### 5. Important Considerations for Load Cells:

*   **Sensitivity:** The ratio of output voltage to applied force.
*   **Accuracy:** How close the measured value is to the true value.
*   **Non-linearity:** Deviation of the output signal from a straight line with respect to the input force.
*   **Hysteresis:** The difference in output signal when the same force is applied in increasing and decreasing directions.
*   **Repeatability:** The ability of the load cell to produce the same output for the same applied force.
*   **Creep:** A gradual change in output signal over time for a constant applied load.
*   **Temperature Effects:** Changes in resistance due to ambient temperature variations can cause errors. This is mitigated by using temperature-compensating resistors or by placing strain gauges in a full bridge configuration.
*   **Eccentric Loading:** Non-central application of force can induce unintended stresses and errors.

---

### Strain Gauge-Based Torque Sensors:

#### 1. Principle of Operation:

*   Torque causes torsional stress (shear stress) in a shaft or a specially designed element.
*   When strain gauges are bonded to the surface of a rotating or stationary shaft at specific angles (typically 45 degrees to the axis of rotation), they experience strain due to this torsional shear stress.
*   The resistance of these gauges changes with the applied torque.
*   These changes are detected using a Wheatstone bridge.

#### 2. Torque Measurement in Rotating Shafts:

*   **Challenges:** Transmitting the signal from a rotating shaft to a stationary measurement system.
    *   **Slip Rings and Brushes:** Traditional method where strain gauges are wired to slip rings, and brushes make electrical contact to transfer the signal. Prone to wear, noise, and require maintenance.
    *   **Rotary Transformers (Eddy Current Couplers):** Used for contactless signal transmission. The excitation voltage and output signal are transferred via magnetic coupling. More reliable but can be more complex.
    *   **Integrated Electronics (Telemetery):** Modern torque sensors often have on-board electronics (amplifiers, A/D converters) and transmit signals wirelessly (e.g., Bluetooth) or via IR.

#### 3. Construction of Torque Sensors:

*   **Strain Element:**
    *   A shaft or a specially designed rotor (e.g., a hollow cylinder) that undergoes torsional deformation.
    *   The shape is optimized to produce maximum shear strain at the locations where strain gauges are applied.
*   **Strain Gauges Arrangement:**
    *   Typically, **full bridge configuration** is used.
    *   Two gauges are placed at +45 degrees to the shaft axis, experiencing tensile strain.
    *   Two gauges are placed at -45 degrees to the shaft axis, experiencing compressive strain.
    *   This arrangement maximizes the signal output and provides excellent compensation for bending stresses that might occur.
    *   The relationship between shear strain ($\gamma$) and torque ($\tau$) is: $\tau = G \gamma$, where G is the shear modulus. The strain gauge measures $\gamma$.

#### 4. Signal Conditioning for Torque Sensors:

*   Due to the challenges of rotating measurements, signal conditioning circuits (amplifiers, filters) are often integrated into the sensor.
*   For contactless systems, the excitation and output signals need careful consideration to ensure signal integrity.

#### 5. Important Considerations for Torque Sensors:

*   **Sensitivity:** Output signal per unit torque.
*   **Accuracy:** Closeness of measured torque to the actual torque.
*   **Non-linearity and Hysteresis:** Similar to load cells.
*   **Repeatability:** Consistency of readings.
*   **Temperature Compensation:** Crucial for accurate measurements over a range of temperatures.
*   **Dynamic Response:** Ability to respond to rapid changes in torque.
*   **Mounting:** Proper alignment and installation are vital to avoid erroneous readings.
*   **Overload Capacity:** The maximum torque the sensor can withstand without damage.

---

### Applications:

*   **Load Cells:**
    *   **Weighing Systems:** Industrial scales, retail scales, truck scales, batching systems.
    *   **Material Testing:** Measuring tensile and compressive strength of materials.
    *   **Force Measurement:** Monitoring forces in industrial processes, robotics, and machinery.
    *   **Aerospace and Automotive:** Measuring loads on aircraft components, vehicle suspensions.
*   **Torque Sensors:**
    *   **Automotive Industry:** Testing engines, transmissions, steering systems.
    *   **Manufacturing and Assembly:** Torque wrenches, assembly line monitoring, automated screwing.
    *   **Industrial Machinery:** Measuring torque in motors, pumps, and gearboxes.
    *   **Sports Equipment:** Testing bicycle components, golf clubs.
    *   **Research and Development:** Dynamic torque measurements in various experimental setups.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### Textual References and Content Incorporation:

*   **Dobelin, E.O. (1990) - Measurement Systems (Applications and Design):** Likely discusses strain gauges as transducers for stress and strain measurement, covering their principles and use in bridges. It would also contextualize load cells as force-measuring systems derived from strain measurement principles. (Refer to chapters on Force and Strain Measurement).
*   **Sawhney, A.K. & Sawhney, P. (2009) - Mechanical Measurements and Instrumentation & Control:** This textbook is a strong reference for mechanical measurement devices. Expect detailed sections on strain gauges, their application in Wheatstone bridges, and specific chapters dedicated to load cells and torque transducers, including their construction, operation, and circuitry. (Refer to chapters on Strain Measurement, Force Measurement, and Torque Measurement).
*   **Nakra, B.C. & Chaudhry, K.K. (2009) - Instrumentation Measurement and Analysis:** This book would likely provide in-depth coverage of strain gauge theory, rosette analysis (if applicable, though not the primary focus here), and detailed descriptions of load cell and torque sensor designs and signal conditioning. (Refer to chapters on Strain Measurement and Force/Torque Measurement).
*   **Raghavendra, N.V. (2013) - Engineering Metrology and Measurements:** This reference would cover metrological aspects, including calibration and accuracy of force and torque measuring instruments, likely detailing the principles behind strain gauge applications.
*   **Jain, R.K. (2022) - A Text Book of Engineering Metrology:** Similar to Raghavendra, it would focus on the measurement standards and practices, including the practical aspects of using strain gauge-based sensors.
*   **Kumar, D.S. (2012) - Mechanical Measurement and Control:** This book would likely explain the integration of these sensors into control systems, discussing signal processing and feedback mechanisms.
*   **Singh, S.K. (2009) - Industrial Instrumentation and Control:** This reference would focus on industrial applications, detailing specific types of load cells and torque sensors used in process industries and manufacturing, along with control aspects.
*   **Rajput, R.K. (2006) - Mechanical Measurements and Instrumentation:** Expect fundamental explanations of strain gauge principles and their conversion into force and torque measurements, with illustrative examples.

---

### Important Points to Remember:

*   **Strain Gauge Sensitivity:** The Gauge Factor (GF) is key. Higher GF means greater resistance change for a given strain.
*   **Wheatstone Bridge:** Essential for maximizing sensitivity, linearizing output, and compensating for temperature effects. Full bridge is preferred for load cells and torque sensors.
*   **Deformation is Key:** Load cells and torque sensors are designed to deform predictably under load/torque, and strain gauges measure this deformation.
*   **Signal Amplification:** The output from strain gauges is very small and requires significant amplification.
*   **Temperature Compensation:** Absolutely critical for accurate measurements. Dummy gauges or full bridge arrangements help.
*   **Rotary Measurements:** Torque sensors on rotating shafts require special techniques (slip rings, rotary transformers, telemetry) for signal transmission.
*   **Calibration:** Load cells and torque sensors must be regularly calibrated against known standards.

---

### Practice Questions and Exercises:

**Q1. Define Gauge Factor (GF) for a strain gauge and state its typical value for metallic strain gauges.**
    *   **Answer:** Gauge Factor (GF) is defined as the ratio of relative change in resistance to the mechanical strain. $GF = (\Delta R / R) / \epsilon$. Typical value for metallic strain gauges is around 2.

**Q2. Explain why strain gauges are typically used in a Wheatstone bridge configuration for force measurement.**
    *   **Answer:** Strain gauges are used in a Wheatstone bridge to:
        1.  **Amplify the small resistance change:** The bridge configuration amplifies the output signal.
        2.  **Temperature Compensation:** By placing gauges in different arms of the bridge (e.g., dummy gauges or gauges experiencing opposite strains), errors due to temperature-induced resistance changes can be cancelled out.
        3.  **Increase Sensitivity:** A well-designed bridge configuration can double the sensitivity compared to a single active gauge.

**Q3. What is the primary challenge in measuring torque on a rotating shaft using strain gauges, and what are two common solutions?**
    *   **Answer:** The primary challenge is transmitting the electrical signal from the rotating shaft to a stationary measurement system. Two common solutions are:
        1.  **Slip Rings and Brushes:** Mechanical contact for signal transfer.
        2.  **Rotary Transformers (or Telemetry):** Contactless signal transfer via magnetic coupling or wireless communication.

**Q4. A strain gauge with a Gauge Factor of 2.0 is bonded to a component that experiences a strain of 500 $\mu\epsilon$. If the nominal resistance of the gauge is 120 $\Omega$, calculate the change in resistance.**
    *   **Given:**
        *   $GF = 2.0$
        *   $\epsilon = 500 \mu\epsilon = 500 \times 10^{-6}$
        *   $R = 120 \Omega$
    *   **Formula:** $GF = (\Delta R / R) / \epsilon$
    *   **Rearranging for $\Delta R$:** $\Delta R = GF \cdot R \cdot \epsilon$
    *   **Calculation:** $\Delta R = 2.0 \cdot 120 \Omega \cdot (500 \times 10^{-6})$
        *   $\Delta R = 2.0 \cdot 120 \cdot 0.0005 \Omega$
        *   $\Delta R = 0.12 \Omega$
    *   **Answer:** The change in resistance is 0.12 $\Omega$.

**Q5. Briefly describe the arrangement of strain gauges in a full-bridge load cell designed for compression.**
    *   **Answer:** In a full-bridge load cell for compression, typically two strain gauges are placed on the compression side of the strain element (experiencing compressive strain) and two are placed on the tension side (experiencing tensile strain). This arrangement maximizes the bridge output and provides excellent temperature compensation. The gauges experiencing tensile strain will increase in resistance, while those experiencing compressive strain will decrease in resistance, leading to a larger differential voltage output across the bridge.

---

### Answers to Practice Questions:

*   **A1:** Gauge Factor (GF) is the ratio of relative change in resistance to mechanical strain. Typical value for metallic gauges is around 2.
*   **A2:** Wheatstone bridge amplifies the small resistance change and provides temperature compensation and increased sensitivity.
*   **A3:** The challenge is signal transmission from rotating parts. Solutions: Slip rings/brushes or rotary transformers/telemetry.
*   **A4:** The change in resistance is 0.12 $\Omega$.
*   **A5:** Two gauges are on the compression surfaces and two on the tension surfaces of the strain element to maximize output and compensation.

---