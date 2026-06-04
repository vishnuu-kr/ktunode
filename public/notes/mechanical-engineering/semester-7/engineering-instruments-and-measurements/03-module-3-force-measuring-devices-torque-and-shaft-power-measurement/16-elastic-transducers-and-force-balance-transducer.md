---
title: "elastic transducers and force balance transducer"
subject: "ENGINEERING INSTRUMENTS AND MEASUREMENTS"
module: "Module 3: Force measuring devices: Torque and shaft power measurement"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464324"
status: "completed"
scrapedAt: "2026-05-20T18:11:50.986Z"
---
# Engineering Instruments and Measurements - Module 3: Force Measuring Devices: Torque and Shaft Power Measurement

## Topic: Elastic Transducers and Force Balance Transducers

---

### Learning Outcomes:

*   **LO1:** Understand the principles of operation for various force measuring devices.
*   **LO2:** Analyze the characteristics and applications of elastic transducers.
*   **LO3:** Explain the concept and working of force balance transducers.
*   **LO4:** Compare and contrast different types of force measuring devices.
*   **LO5:** Identify suitable force measuring devices for specific engineering applications.

---

### Course Outcomes Alignment:

*   **CO3 (K5):** Examine various devices to measure force, pressure accurately using a variety of devices and techniques. (This topic directly addresses the measurement of force using specific devices.)
*   **CO1 (K2):** To identify and classify different measuring instruments and their static and dynamic characteristics, ensuring proper selection and usage for various engineering applications. (Understanding the principles of elastic and force balance transducers contributes to classifying and selecting force measuring devices.)
*   **CO5 (K3):** To select measurement system for engineering applications. (Knowledge of these transducers aids in selecting appropriate systems for force measurement.)

---

### Key Concepts and Definitions:

*   **Force:** A push or pull on an object that can cause it to accelerate or deform.
*   **Torque:** A twisting force that tends to cause rotation. It is the product of force and the perpendicular distance from the axis of rotation.
*   **Shaft Power:** The mechanical power transmitted by a rotating shaft. It is the product of torque and angular velocity.
*   **Transducer:** A device that converts one form of energy into another. In measurement systems, it converts the physical quantity being measured into an electrical signal.
*   **Elastic Transducer:** A transducer that utilizes the elastic deformation of a material (like a spring, diaphragm, or beam) to measure force. The deformation is directly proportional to the applied force.
*   **Force Balance Transducer:** A transducer that operates on the principle of balancing an unknown force with a known force. It typically uses a feedback mechanism to maintain equilibrium.

---

## 3.1 Elastic Transducers

Elastic transducers are based on the principle that when an elastic material is subjected to a force, it undergoes a deformation. This deformation is generally proportional to the applied force within the elastic limit of the material. The change in dimension or strain can be measured using various sensing elements to produce an electrical output.

### 3.1.1 Principles of Operation

The core principle is Hooke's Law: **Stress is directly proportional to Strain** (within the elastic limit).

*   **Stress ($\sigma$)**: Force per unit area ($\sigma = F/A$).
*   **Strain ($\epsilon$)**: Change in length per original length ($\epsilon = \Delta L / L$).

The elastic element is designed to deform predictably under load. The deformation (change in displacement or strain) is then converted into an electrical signal.

### 3.1.2 Types of Elastic Elements and Associated Transducers:

1.  **Springs/Coils:**
    *   **Description:** Helical springs, cantilever springs, and spiral springs are commonly used. The deflection of the spring is proportional to the applied force.
    *   **Measurement Principle:** Measuring the change in length or position of the spring.
    *   **Associated Transducers:**
        *   **LVDT (Linear Variable Differential Transformer):** A displacement transducer that can be mechanically coupled to the deflection of a spring to measure the force.
        *   **Potentiometer:** A variable resistor whose slider position is linked to the spring's deflection.
        *   **Capacitive/Inductive Sensors:** Measure changes in capacitance or inductance due to the movement of the elastic element.
    *   **Example:** Spring scales, load cells based on spring deflection.

2.  **Diaphragms:**
    *   **Description:** A thin, flexible membrane that deforms when a pressure difference is applied across it. If the force is applied directly to the diaphragm, it deflects.
    *   **Measurement Principle:** Measuring the deflection of the diaphragm.
    *   **Associated Transducers:**
        *   **Strain Gauges:** Bonded to the surface of the diaphragm to measure the strain caused by its deflection.
        *   **Capacitive Sensors:** Measure the change in capacitance between the diaphragm and a fixed plate due to deflection.
    *   **Example:** Pressure sensors (where force is derived from pressure), some types of force sensors.

3.  **Bellows:**
    *   **Description:** A series of concentric folds that expand or contract axially under pressure or axial force.
    *   **Measurement Principle:** Measuring the axial displacement of the bellows.
    *   **Associated Transducers:** LVDT, Potentiometer.
    *   **Example:** Hydraulic actuators, pneumatic cylinders that can be used for force measurement.

4.  **Beams (Cantilever, Simply Supported, Propped Cantilever):**
    *   **Description:** Structural elements that bend under load. The amount of bending (deflection) or strain is related to the applied force.
    *   **Measurement Principle:** Measuring deflection or strain.
    *   **Associated Transducers:**
        *   **Strain Gauges:** Applied to the surface of the beam to measure strain, which is directly related to force. This is the basis of most **Strain Gauge Load Cells**.
        *   **Displacement Sensors (LVDT, etc.):** Placed to measure the deflection at a specific point on the beam.
    *   **Example:** Load cells, weighbridges.

### 3.1.3 Strain Gauge Load Cells

This is a very common type of elastic transducer.

*   **Princ:** Based on the piezoresistive effect, where the electrical resistance of a material changes when it is mechanically deformed (strained).
*   **Construction:**
    *   **Elastic Element:** A precisely machined metal block (often steel, aluminum, or titanium) designed to deform predictably under load. Common shapes include S-type, beam, shear beam, button, etc.
    *   **Strain Gauges:** Thin, flexible strips of metallic foil (like constantan) patterned into a grid. They are bonded to the surface of the elastic element at locations where maximum strain occurs due to the applied force.
    *   **Wheatstone Bridge:** The strain gauges are typically connected in a Wheatstone bridge circuit. This configuration amplifies the small resistance change and provides a linear output voltage proportional to the applied force. Usually, four strain gauges are used: two in tension and two in compression, to maximize sensitivity and cancel out temperature effects.
*   **Working:**
    1.  When a force is applied to the elastic element, it deforms, causing strain in the material.
    2.  The strain gauges bonded to the element also get strained.
    3.  The resistance of the strain gauges changes according to the piezoresistive effect ($\Delta R/R = GF \times \epsilon$, where GF is the gauge factor).
    4.  This change in resistance unbalances the Wheatstone bridge.
    5.  The resulting voltage output from the bridge is proportional to the applied force.
*   **Advantages:** High accuracy, good linearity, relatively compact, wide range of capacities, durable.
*   **Disadvantages:** Sensitive to temperature changes (though bridge configuration mitigates this), requires excitation voltage, potential for zero drift.
*   **Textbook References:**
    *   Dobelin (4th Ed.): Discusses strain gauges and their application in load cells. (Likely in chapters on pressure or force measurement).
    *   Sawhney & Sawhney (12th Ed.): Detailed explanation of Wheatstone bridges and strain gauge principles. (Chapter on strain measurement).
    *   Nakra & Chaudhry (3rd Ed.): Comprehensive coverage of load cells, including types and design considerations. (Chapter on force measurement).

### 3.1.4 Other Elastic Transducers (Brief Mention)

*   **Variable Reluctance/Inductance Transducers:** The deformation of the elastic element changes the air gap in an inductor or the relative position of magnetic cores, altering the inductance or reluctance, which can be measured electrically.
*   **Capacitive Transducers:** The elastic element's deformation alters the distance between capacitor plates or the dielectric material between them, changing the capacitance.

### 3.1.5 Advantages of Elastic Transducers

*   Direct measurement of force.
*   Good linearity and accuracy over their operating range.
*   Relatively simple construction for basic types.
*   Can be designed for a wide range of force capacities.
*   Can respond quickly to changes in force (good dynamic response).

### 3.1.6 Disadvantages of Elastic Transducers

*   Subject to creep and hysteresis, especially at higher temperatures or loads.
*   Limited by the elastic limit of the material.
*   Can be sensitive to environmental factors like temperature and vibration.
*   Calibration is crucial.

---

## 3.2 Force Balance Transducers (or Force-Restoring Transducers)

Force balance transducers are designed to provide a high degree of accuracy and stability, often used in precision measurements. They work on the principle of establishing an equilibrium condition where the unknown force being measured is exactly counteracted by a known, generated force.

### 3.2.1 Principles of Operation

The fundamental principle is to maintain a system in a null or equilibrium state. An unknown input force is applied to a system. The system's response is to generate a counteracting force, usually through a feedback mechanism. The magnitude of this generated force is then measured or used to control a secondary parameter, which is then interpreted as the measure of the original force.

**Block Diagram:**

```
+-----------------+      +-----------------+      +-----------------+      +-----------------+
|   Input Force   |----->|  Sensitive      |----->|  Force Rebalancing|----->|  Output Signal  |
|     (Unknown)   |      |  Element        |      |  Mechanism      |      |  (Proportional  |
+-----------------+      | (e.g., Beam)    |      |                 |      |  to Input Force)|
                         +--------+--------+      +--------+--------+      +-----------------+
                                  |                       ^
                                  |                       | Feedback Signal
                                  +-----------------------+
```

1.  **Sensitive Element:** The unknown force acts upon a sensitive element (e.g., a beam or lever arm).
2.  **Detection of Deviation:** This element is typically designed to move slightly if the unknown force is not balanced. This movement is detected by a sensing device.
3.  **Force Rebalancing Mechanism:** The detected deviation triggers a feedback loop. This loop activates a mechanism that generates a force to counteract the input force. Examples of rebalancing forces include:
    *   **Electromagnetic Force:** Using a voice coil or solenoid.
    *   **Hydraulic/Pneumatic Pressure:** Using a servo valve controlling fluid pressure.
    *   **Mechanical Weights:** Used in older, less common systems.
4.  **Feedback Control:** The rebalancing force is adjusted continuously by the feedback mechanism until the sensitive element returns to its equilibrium (null) position.
5.  **Output Measurement:** The magnitude of the force generated by the rebalancing mechanism is measured. This measured force is directly proportional to the original unknown input force. This measurement is often derived from the electrical signal that drives the rebalancing actuator (e.g., the current to a voice coil).

### 3.2.2 Types and Examples of Force Balance Transducers

1.  **Electromagnetic Force Balance Transducer (Self-Balancing Force Meter):**
    *   **Princ:** Uses a voice coil actuator to generate a counteracting force.
    *   **Construction:**
        *   A beam or lever pivots around a central point.
        *   The unknown force is applied to one end of the beam.
        *   A voice coil is attached to the other end, positioned within a magnetic field.
        *   A displacement sensor (e.g., LVDT) detects any deflection of the beam from its null position.
        *   The sensor's output is fed to an amplifier and then to the voice coil.
    *   **Working:**
        1.  Input force causes beam deflection.
        2.  LVDT detects deflection.
        3.  LVDT signal drives an amplifier.
        4.  Amplifier sends current to the voice coil.
        5.  Voice coil generates a magnetic force proportional to the current.
        6.  This force opposes the input force, moving the beam back to null.
        7.  The current required to maintain the null position is measured, and it's proportional to the input force.
    *   **Advantages:** High accuracy, excellent linearity, fast response, can handle dynamic forces.
    *   **Disadvantages:** Requires electrical power, more complex than simple elastic transducers.
    *   **Application:** Precision weighing, force measurement in control systems.

2.  **Hydraulic/Pneumatic Force Balance:**
    *   **Princ:** Uses hydraulic or pneumatic pressure, controlled by a servo valve, to generate the balancing force.
    *   **Construction:** Similar to the electromagnetic type, but the rebalancing mechanism involves a hydraulic/pneumatic actuator. A nozzle-flapper or similar mechanism often detects the deviation.
    *   **Working:** Deviation from null position controls a servo valve, which regulates hydraulic/pneumatic pressure to an actuator, producing the balancing force. The system pressure is then the output.
    *   **Application:** High-force applications, industrial control systems.

3.  **Gravity Balance (Deadweight Testers):**
    *   **Princ:** While not always called a "transducer" in the modern sense, deadweight testers use a well-defined mechanism to balance force with precisely known weights.
    *   **Working:** A piston of known area is subjected to an unknown pressure (which exerts a force). Known weights are placed on top of the piston. The piston and weights are rotated to reduce friction. When the force from the pressure equals the total force from the weights, the system is in equilibrium. The pressure can be calculated ($P = F/A$, where $F$ is the total weight force).
    *   **Application:** Calibration of pressure gauges and force sensors.

### 3.2.3 Advantages of Force Balance Transducers

*   **High Accuracy and Precision:** By maintaining a null condition, they minimize errors associated with the deformation of the sensitive element itself.
*   **Excellent Linearity:** The output is typically very linear with respect to the input force.
*   **Stability:** Less prone to drift caused by material properties or environmental factors compared to direct elastic deformation measurements.
*   **Wide Dynamic Range:** Can be designed to measure very small to very large forces.
*   **Fast Response:** The feedback loop can be designed for rapid response to force changes.

### 3.2.4 Disadvantages of Force Balance Transducers

*   **Complexity:** They involve more components and a feedback system, making them more complex to design and manufacture.
*   **Power Consumption:** Require a continuous power supply for the rebalancing mechanism.
*   **Cost:** Generally more expensive than simple elastic transducers.
*   **Size and Weight:** Can be bulkier due to the feedback and rebalancing components.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### 3.2.5 Textbook References

*   Dobelin (4th Ed.): Likely discusses feedback systems and their application in measurement, potentially including force balance principles.
*   Sawhney & Sawhney (12th Ed.): May cover servo mechanisms and their use in measurement.
*   Nakra & Chaudhry (3rd Ed.): Might detail specific types of force balance transducers or force restoration principles in measurement.

---

## 3.3 Torque and Shaft Power Measurement

While the topic specifically focuses on force measuring devices, it's important to connect these to torque and shaft power measurement as indicated in the module title.

*   **Torque Measurement:**
    *   **Method:** Torque is often measured by applying a force at a known radius. Elastic transducers like strain gauge torque sensors are commonly used. These sensors are typically mounted directly onto the rotating shaft.
    *   **Princ:** Strain gauges are bonded to the shaft in a way that they measure the torsional strain (shear strain) induced by the torque. This strain is proportional to the torque.
    *   **Key Device:** **Torque Meter/Torque Sensor**.

*   **Shaft Power Measurement:**
    *   **Formula:** Shaft Power ($P$) = Torque ($\tau$) $\times$ Angular Velocity ($\omega$)
    *   **Measurement:** To measure shaft power, both torque and angular velocity must be measured simultaneously.
        *   Torque is measured using a torque sensor (as described above).
        *   Angular velocity is measured using devices like:
            *   **Tachometers:** (Optical, magnetic, or contact types) that generate pulses proportional to the rotation speed.
            *   **Encoders:** Provide digital signals representing angular position, from which velocity can be derived.
    *   **Calculation:** The measured torque and angular velocity are then processed (often by an electronic unit) to calculate the shaft power.

### 3.3.1 Strain Gauge Torque Meters

*   **Description:** A device that directly measures the torque transmitted through a rotating shaft.
*   **Princ:** Similar to strain gauge load cells, but designed to measure torsional shear stress.
*   **Construction:** A sleeve or shaft section with strain gauges bonded to its surface at 45 degrees to the shaft axis. These gauges measure the tensile and compressive strains produced by shear stress.
*   **Working:** Torque on the shaft causes shear strain. The strain gauges, arranged in a Wheatstone bridge, detect this strain and produce an output voltage proportional to the torque. Slip rings or rotary transformers are used to transmit the electrical signal from the rotating shaft to stationary instrumentation.
*   **Textbook References:**
    *   Sawhney & Sawhney (12th Ed.): Chapter on torque measurement.
    *   Nakra & Chaudhry (3rd Ed.): Section on torque measurement devices.
    *   Rajput (2006): Might include a chapter on torque measurement.

---

### Important Points to Remember:

*   **Elastic Limit:** Elastic transducers rely on the material remaining within its elastic limit to ensure a proportional and repeatable response. Exceeding this limit leads to permanent deformation and inaccurate readings.
*   **Sensitivity:** The ratio of output to input quantity (e.g., voltage change per Newton). Higher sensitivity is generally desirable.
*   **Linearity:** The degree to which the output signal varies linearly with the input force. Ideal for straightforward interpretation.
*   **Hysteresis:** The difference in output for the same input value when approached from increasing and decreasing input values.
*   **Creep:** A slow change in output over time for a constant input load, due to viscous effects in the elastic material.
*   **Gauge Factor (GF):** A characteristic of strain gauges, defined as the ratio of relative change in resistance to mechanical strain ($\Delta R/R / \epsilon$).
*   **Wheatstone Bridge:** Essential for amplifying small resistance changes from strain gauges and providing a measurable voltage output.
*   **Force Balance Principle:** Maintaining a system in null equilibrium by counteracting an unknown force with a measured known force. This leads to high accuracy and stability.
*   **Torque vs. Force:** Torque is a rotational force, measured in Newton-meters (Nm). Force is a linear push or pull, measured in Newtons (N).
*   **Shaft Power:** The rate at which work is done by a rotating shaft, calculated as Torque $\times$ Angular Velocity.

---

### Practice Questions with Answers:

**Question 1:**
Which principle is fundamental to the operation of elastic transducers?
a) Piezoelectric effect
b) Piezoresistive effect
c) Hooke's Law
d) Bernoulli's Principle

**Answer:**
c) Hooke's Law

---

**Question 2:**
In a strain gauge load cell, what is the primary role of the Wheatstone bridge?
a) To amplify the applied force.
b) To convert the resistance change of strain gauges into a voltage output.
c) To measure the temperature of the elastic element.
d) To provide the excitation voltage.

**Answer:**
b) To convert the resistance change of strain gauges into a voltage output.

---

**Question 3:**
Describe the basic principle of a force balance transducer.

**Answer:**
A force balance transducer operates by maintaining a system in a null or equilibrium position. An unknown input force is detected, and a feedback mechanism generates a counteracting force (e.g., electromagnetic or hydraulic) until the unknown force is perfectly balanced. The magnitude of this generated balancing force, which is measured, is directly proportional to the original input force.

---

**Question 4:**
What are the two key parameters that need to be measured to calculate shaft power?

**Answer:**
Torque and Angular Velocity.

---

**Question 5:**
A cantilever beam used as an elastic element in a force sensor deflects by 2 mm under an applied load. If a LVDT is used to measure this deflection, what is the role of the LVDT in this setup?

**Answer:**
The LVDT acts as a displacement transducer. It converts the mechanical deflection (2 mm) of the cantilever beam into a proportional electrical signal (usually voltage), which can then be correlated to the applied force.

---

**Question 6:**
What is the advantage of using a force balance transducer over a simple elastic transducer for high-precision applications?

**Answer:**
Force balance transducers offer higher accuracy and stability because they operate by maintaining a system in a null (equilibrium) state. This minimizes errors associated with the non-linearities and hysteresis of the elastic element's deformation itself. The output is directly tied to the balancing force required to achieve equilibrium, leading to a more precise measurement.

---

**Question 7:**
Explain the concept of the piezoresistive effect and its relevance in force measurement.

**Answer:**
The piezoresistive effect is the property of certain materials (like semiconductors and metals) to change their electrical resistance when subjected to mechanical strain. In force measurement, strain gauges exploit this effect. When a force deforms an elastic element, the strain gauges bonded to it also deform, changing their resistance. This change in resistance is then measured and correlated to the applied force.

---

### Exercises:

1.  **Design Scenario:** You need to design a system to continuously monitor the force exerted by a press machine on a component during manufacturing. The force can vary from 100 N to 5000 N. Suggest a suitable type of elastic transducer and explain why.
2.  **Comparison:** Compare and contrast the advantages and disadvantages of using a strain gauge load cell versus an electromagnetic force balance transducer for measuring static forces.
3.  **Torque Calculation:** A shaft rotates at 1500 RPM and transmits a torque of 50 Nm. Calculate the shaft power in kilowatts (kW). (Hint: Convert RPM to rad/s).

---

**Exercise Solutions:**

1.  **Design Scenario Solution:**
    For continuous monitoring of varying forces in a manufacturing press, a **strain gauge load cell** would be a suitable choice.
    *   **Reasoning:**
        *   **Wide Range:** Strain gauge load cells are available in a vast range of capacities, easily covering the 100 N to 5000 N requirement.
        *   **Accuracy & Linearity:** They offer good accuracy and linearity, crucial for process control in manufacturing.
        *   **Durability:** They are robust and can withstand the repetitive nature of press operations.
        *   **Dynamic Response:** They can respond quickly to changes in force, allowing for real-time monitoring.
        *   **Cost-Effectiveness:** Compared to high-precision force balance systems, they are generally more cost-effective for this application.

2.  **Comparison Solution:**

    | Feature             | Strain Gauge Load Cell                                  | Electromagnetic Force Balance Transducer              |
    | :------------------ | :------------------------------------------------------ | :---------------------------------------------------- |
    | **Principle**       | Piezoresistive effect (resistance change due to strain) | Force balance (null-seeking feedback system)          |
    | **Accuracy**        | Good to very good                                       | Excellent (higher precision)                          |
    | **Linearity**       | Good                                                    | Excellent                                             |
    | **Stability**       | Moderate (can be affected by temperature, creep)        | Excellent (minimal drift due to null operation)       |
    | **Complexity**      | Relatively simple                                       | More complex (feedback loop, actuator)                |
    | **Cost**            | Generally lower                                         | Generally higher                                      |
    | **Power Req.**      | Needs excitation voltage                                | Needs power for feedback and actuator                 |
    | **Sensitivity**     | Moderate to high                                        | Very high                                             |
    | **Applications**    | General weighing, industrial force measurement          | High-precision weighing, calibration, lab measurements |

3.  **Torque Calculation Solution:**
    *   Given:
        *   Angular Velocity ($\omega_{RPM}$) = 1500 RPM
        *   Torque ($\tau$) = 50 Nm
    *   Convert RPM to radians per second (rad/s):
        $\omega = \omega_{RPM} \times \frac{2\pi \text{ radians}}{1 \text{ revolution}} \times \frac{1 \text{ minute}}{60 \text{ seconds}}$
        $\omega = 1500 \times \frac{2\pi}{60} = 50\pi \text{ rad/s} \approx 157.08 \text{ rad/s}$
    *   Calculate Shaft Power ($P$):
        $P = \tau \times \omega$
        $P = 50 \text{ Nm} \times 157.08 \text{ rad/s}$
        $P = 7854 \text{ Nm/s}$
    *   Since 1 Nm/s = 1 Watt (W):
        $P = 7854 \text{ W}$
    *   Convert to kilowatts (kW):
        $P = \frac{7854}{1000} \text{ kW} = 7.854 \text{ kW}$

    **Answer:** The shaft power is approximately **7.854 kW**.