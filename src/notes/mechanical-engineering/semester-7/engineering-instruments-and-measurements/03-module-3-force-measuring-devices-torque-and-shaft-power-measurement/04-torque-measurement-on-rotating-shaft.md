---
title: "torque measurement on rotating shaft"
subject: "ENGINEERING INSTRUMENTS AND MEASUREMENTS"
module: "Module 3: Force measuring devices: Torque and shaft power measurement"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464318"
status: "completed"
scrapedAt: "2026-05-20T18:11:42.388Z"
---
# Engineering Instruments and Measurements: Module 3 - Force Measuring Devices: Torque and Shaft Power Measurement

## Topic: Torque Measurement on Rotating Shaft

---

### 1. Introduction to Torque and its Measurement

**Definition:** Torque is a twisting or turning force that tends to cause rotation. It is produced when a force is applied at a distance from an axis of rotation.

*   **Formula:** Torque ($T$) = Force ($F$) × Perpendicular distance from the axis of rotation ($r$)
    *   $T = F \times r$
*   **Units:**
    *   SI Unit: Newton-meter (Nm)
    *   Other units: Kilogram-force meter (kgfm), pound-force foot (lb-ft), pound-force inch (lb-in)

**Importance of Torque Measurement on Rotating Shafts:**

*   **Engine Performance:** Measuring engine torque is crucial for understanding its power output, efficiency, and responsiveness.
*   **Machine Design & Operation:** Ensuring machinery operates within its designed torque limits prevents damage and optimizes performance.
*   **Material Testing:** Determining the torsional strength and stiffness of materials.
*   **Power Transmission:** Monitoring torque in drive shafts, gears, and couplings.
*   **Quality Control:** Verifying the torque applied in fastening operations (e.g., in automotive assembly).

**CO1:** This topic helps in understanding the fundamental principles of torque measurement, which is a type of force measurement. It guides in selecting appropriate devices based on their characteristics and application. (K2)

**CO3:** This topic directly addresses the measurement of force (in the form of torque) using various devices and techniques. (K5)

**CO5:** Understanding torque measurement enables the selection of suitable measurement systems for applications involving rotating machinery. (K3)

---

### 2. Challenges in Measuring Torque on Rotating Shafts

Measuring torque on a rotating shaft presents unique challenges compared to static torque measurement:

*   **Dynamic Conditions:** The shaft is in motion, requiring sensors and transmission methods that can handle rotation.
*   **Centrifugal Forces:** Rotating components can generate centrifugal forces that might interfere with measurements.
*   **Vibrations and Noise:** Rotating machinery often generates vibrations and acoustic noise that can affect sensor readings.
*   **Contact vs. Non-contact:** Deciding between methods that require contact with the shaft and those that don't.
*   **Power and Signal Transmission:** Transmitting power to the sensor (if active) and signals from the sensor to the recording/displaying device without interference.

---

### 3. Methods for Torque Measurement on Rotating Shafts

Torque measuring devices for rotating shafts are broadly categorized into two types:

*   **Shaft-Mounted Transducers:** These are attached directly to the rotating shaft.
*   **Reaction Torque Measurement:** These devices measure the torque reaction force on a stationary component.

#### 3.1 Shaft-Mounted Transducers

These devices convert the mechanical deformation of the shaft due to torque into an electrical signal.

**3.1.1 Strain Gauge Torque Transducers (Torquemeters)**

*   **Princ:** When a shaft is subjected to torque, it experiences shear stress, which causes the shaft to twist. This twist induces tensile and compressive strains on the surface of the shaft at 45 degrees to the shaft axis. Strain gauges are bonded to the shaft at these angles to measure this strain.
*   **Construction:**
    *   **Strain Gauges:** Typically, four strain gauges are used in a Wheatstone bridge configuration. Two gauges are placed in tension and two in compression at 45 degrees to the shaft axis.
    *   **Wheatstone Bridge:** This configuration provides a more sensitive and stable output, as it cancels out strains due to bending, axial load, and temperature changes.
    *   **Power Supply & Signal Conditioning:** The bridge is excited by a DC or AC voltage. The resulting imbalance voltage is amplified and processed.
    *   **Signal Transmission:** This is the most critical part for rotating shafts.
        *   **Slip Rings and Brushes:** The most common method. A multi-conductor cable is routed from the rotating shaft (via brushes) to stationary slip rings. This method can suffer from noise, wear, and maintenance issues.
        *   **Telemetry (Wireless Transmission):** The amplified signal is transmitted wirelessly using a radio frequency (RF) transmitter mounted on the shaft to a receiver. This eliminates slip ring problems but requires a power source for the transmitter (batteries or inductive coupling).
*   **Advantages:**
    *   High accuracy and sensitivity.
    *   Can measure both torque and speed simultaneously.
    *   Can be calibrated directly.
*   **Disadvantages:**
    *   Requires attachment to the shaft, which can affect its properties.
    *   Slip rings can be a source of error and require maintenance.
    *   Telemetry systems require careful design and can be expensive.
*   **Textbook Reference:**
    *   Dobelin (1990) discusses strain gauge applications extensively and would cover the principles behind their use in torquemeters.
    *   Sawhney & Sawhney (2009) likely detail the construction and working of strain gauge-based transducers.
    *   Nakra & Chaudhry (2009) would also cover strain gauge applications in detail.

**3.1.2 Variable Reluctance Torque Transducers**

*   **Princ:** Based on the change in reluctance of a magnetic circuit when the shaft twists under torque. Two toothed wheels (one fixed to the shaft, the other rotating with it) are placed near each other. The twist of the shaft changes the air gap between the teeth, altering the magnetic flux and hence the reluctance. This change is detected by inductive pick-ups.
*   **Construction:**
    *   A sensing element with teeth is fitted to the shaft.
    *   Two pick-up coils are placed in close proximity to the teeth.
    *   A sinusoidal AC voltage is applied to one coil, and the resulting voltage induced in the other coil is monitored. The phase and amplitude of the induced voltage change with the shaft twist.
*   **Advantages:**
    *   Contactless measurement.
    *   No slip rings required if designed appropriately.
    *   Robust.
*   **Disadvantages:**
    *   Less sensitive than strain gauge types.
    *   Requires a magnetic shaft or attachment.
    *   Susceptible to external magnetic fields.
*   **Reference Book:**
    *   Singh (2009) on Industrial Instrumentation might cover this contactless approach.

**3.1.3 Optical Torque Transducers**

*   **Princ:** Utilizes optical principles to detect the angular twist of the shaft. A light source and optical sensors are used. Patterns or gratings on the shaft or attached discs change their relative orientation due to the twist, modulating the light signal.
*   **Construction:**
    *   Two discs with etched patterns or slots are attached to the shaft at a known distance.
    *   Light emitters (LEDs) and detectors (photodiodes) are positioned on either side of the discs.
    *   As the shaft twists, the relative position of the patterns changes, causing variations in the light received by the detectors. This variation is proportional to the torque.
*   **Advantages:**
    *   Contactless and immune to electromagnetic interference.
    *   High resolution.
    *   Can be used for high-speed applications.
*   **Disadvantages:**
    *   Requires a clear optical path.
    *   Susceptible to dirt and contaminants.
    *   Can be sensitive to shaft vibration.
*   **Textbook Reference:**
    *   Nakra & Chaudhry (2009) often cover optical sensing techniques.

#### 3.2 Reaction Torque Measurement

These methods measure the torque by sensing the opposing force exerted by the shaft or machinery on a stationary mounting.

**3.2.1 Torque Measurement using Force Transducers (Load Cells)**

*   **Princ:** Torque is often transmitted through shafts, gears, or couplings. By mounting these components in a way that they can exert a reaction force on a stationary frame or bearing, this force can be measured using a load cell. This reaction force, when multiplied by the lever arm, gives the torque.
*   **Example:** Measuring the torque output of an electric motor. The motor housing is prevented from rotating by a link connected to a load cell. The force measured by the load cell is proportional to the motor's torque.
*   **Construction:**
    *   A load cell (often a strain gauge-based force sensor) is used to measure the reaction force.
    *   The driven equipment (e.g., a dynamometer brake) is also mounted to provide a controlled load.
    *   The torque is calculated as the product of the measured reaction force and the lever arm.
*   **Advantages:**
    *   Simpler for stationary measurements or measuring torque of rotating machines rather than the shaft itself.
    *   Load cells are widely available and well-understood.
*   **Disadvantages:**
    *   Measures reaction torque, not directly the torque on the shaft unless the lever arm is precisely known and constant.
    *   Requires careful mounting and alignment.
*   **Textbook Reference:**
    *   Dobelin (1990) discusses load cells as force transducers and their applications.
    *   Sawhney & Sawhney (2009) would likely provide examples of reaction torque measurement using load cells.

**3.2.2 Dynamometers**

Dynamometers are devices used to measure the torque and power output of an engine or motor. They work by applying a controlled load (braking torque) to the rotating shaft and measuring the resulting torque.

*   **Types of Dynamometers:**
    *   **Prony Brake Dynamometer:**
        *   **Princ:** A friction brake (often a band or shoes) is applied to the rotating shaft. The friction generates heat and a braking torque. A lever arm is attached to the brake assembly, and a force is measured at the end of this lever arm using a scale or load cell.
        *   **Torque Calculation:** $T = F \times L$, where $F$ is the measured force and $L$ is the length of the lever arm.
        *   **Advantages:** Simple, robust, and inexpensive.
        *   **Disadvantages:** Inefficient heat dissipation, limited to lower power applications, can be noisy.
    *   **Eddy Current Dynamometer:**
        *   **Princ:** A conductive rotor (e.g., made of aluminum or copper) rotates within a magnetic field created by electromagnets. The rotation induces eddy currents in the rotor. These eddy currents interact with the magnetic field, producing a braking torque that opposes the motion. The strength of the braking torque is controlled by adjusting the current in the electromagnets. The reaction torque on the stator is measured by load cells.
        *   **Advantages:** Good control of load, efficient heat dissipation, can handle higher power, relatively smooth operation.
        *   **Disadvantages:** Requires a DC excitation source, can be more complex and expensive than Prony brakes.
    *   **Hydraulic Dynamometer:**
        *   **Princ:** Uses fluid friction to provide braking torque. A rotor spins within a housing filled with fluid. The fluid's viscosity and the design of the rotor/housing create a braking force. The power dissipation is managed by circulating and cooling the fluid. The reaction torque on the housing is measured.
        *   **Advantages:** High power absorption capacity, smooth torque control, good heat dissipation.
        *   **Disadvantages:** Can be bulky and expensive, requires fluid circulation system.
    *   **Electric Dynamometer (Motor-Generator Set or Regenerative Dynamometer):**
        *   **Princ:** The output of the tested machine is coupled to a calibrated electric motor/generator. This acts as a load. The torque is measured either by sensing the reaction torque of the motor/generator or by measuring the input electrical power to the motor. In regenerative mode, it can also act as a generator and supply power back to the grid.
        *   **Advantages:** Very precise control of speed and load, can simulate various operating conditions, can be used for both motoring and generating modes.
        *   **Disadvantages:** High cost, requires sophisticated control systems.
*   **Power Calculation:** Once torque ($T$) is measured, shaft power ($P$) can be calculated:
    *   $P = T \times \omega$
    *   Where $\omega$ is the angular velocity in radians per second.
    *   If $\omega$ is in RPM, $\omega_{rad/s} = \frac{2\pi N_{rpm}}{60}$.
    *   **Units:** Power in Watts (W) if $T$ is in Nm and $\omega$ is in rad/s.
    *   **Commonly expressed in:** Horsepower (HP) or Kilowatts (kW).
*   **Textbook Reference:**
    *   Dobelin (1990) has a dedicated chapter on torque and power measurement, including various dynamometer types.
    *   Sawhney & Sawhney (2009) and Nakra & Chaudhry (2009) would provide detailed explanations of dynamometer principles and construction.
    *   Rajput (2006) is also a good source for mechanical measurements and controls, likely covering dynamometers.

---

### 4. Measurement System Characteristics for Torque Measurement

The learning outcomes require understanding the characteristics of measurement systems. For torque measurement on rotating shafts:

*   **Accuracy:** How close the measured value is to the true value. Critical for precise engine tuning or material characterization.
*   **Precision (Repeatability):** How close successive measurements are to each other.
*   **Sensitivity:** The ratio of the change in output signal to the change in torque. Higher sensitivity means smaller torques can be detected.
*   **Resolution:** The smallest change in torque that can be detected by the system.
*   **Range:** The minimum and maximum torque values the instrument can measure.
*   **Linearity:** How closely the output signal follows a straight line with respect to the input torque. Non-linearity can lead to systematic errors.
*   **Hysteresis:** The difference in output reading for the same input torque when approached from increasing or decreasing values.
*   **Response Time (Dynamic Characteristics):** How quickly the instrument can respond to changes in torque. Important for measuring transient torque changes.
*   **Zero Drift:** The change in output reading when the input torque is zero.
*   **Temperature Effects:** Changes in temperature can affect the properties of strain gauges, magnetic materials, or fluids, leading to errors. Compensation techniques are often used.

**CO1:** All these characteristics are fundamental to selecting and using torque measurement devices effectively. For instance, a high-speed application might require a device with a fast response time and good resolution, while a general engine test might prioritize accuracy and linearity. (K2)

**CO5:** Understanding these characteristics directly aids in selecting the appropriate measurement system based on the specific application requirements (e.g., choosing a telemetry strain gauge torquemeter for high-speed data acquisition vs. a Prony brake for basic engine testing). (K3)

---

### 5. Practice Questions and Answers

**Question 1:**
A shaft rotating at 1200 RPM is subjected to a torque of 50 Nm. Calculate the power transmitted in Watts and Horsepower (1 HP = 745.7 W).

**Answer:**
*   Angular velocity in rad/s: $\omega = \frac{2\pi N_{rpm}}{60} = \frac{2\pi \times 1200}{60} = 40\pi$ rad/s
*   Power ($P$) in Watts: $P = T \times \omega = 50 \text{ Nm} \times 40\pi \text{ rad/s} = 2000\pi \text{ W} \approx 6283.18 \text{ W}$
*   Power in Horsepower: $P_{HP} = \frac{6283.18}{745.7} \approx 8.425 \text{ HP}$

**Question 2:**
Explain the primary challenge in measuring torque on a rotating shaft compared to a stationary shaft.

**Answer:**
The primary challenge is the need to transmit the measurement signal from the rotating component to a stationary observation point without interference or significant error. This often involves complex systems like slip rings or telemetry, which are not required for stationary torque measurements. Also, dynamic effects like vibrations need to be considered.

**Question 3:**
What is the basic principle behind a strain gauge torquemeter used on a rotating shaft? How is the signal typically transmitted?

**Answer:**
The basic principle is to measure the shear strain induced in the shaft when it is subjected to torque. This strain is typically measured by strain gauges bonded to the shaft surface at 45 degrees to the axis. These gauges are wired in a Wheatstone bridge. The signal is typically transmitted either via slip rings and brushes or by telemetry (wireless transmission).

**Question 4:**
List three types of dynamometers and briefly describe their working principle.

**Answer:**
1.  **Prony Brake Dynamometer:** Uses a friction brake (band or shoes) applied to the shaft. The reaction force on the brake assembly is measured.
2.  **Eddy Current Dynamometer:** Utilizes eddy currents induced in a conductive rotor within a magnetic field to create a braking torque. The reaction torque on the stator is measured.
3.  **Hydraulic Dynamometer:** Employs fluid friction between a rotor and a housing to create a braking torque. The reaction torque on the housing is measured.

**Question 5:**
Why is a Wheatstone bridge often preferred for strain gauge torque measurement?

**Answer:**
A Wheatstone bridge configuration using four strain gauges (two in tension and two in compression) enhances sensitivity and provides excellent compensation for strains caused by bending, axial loads, and temperature variations. This improves the accuracy and stability of the torque measurement.

---

### 6. Important Points to Remember

*   **Torque:** A twisting force causing rotation. Units: Nm.
*   **Measurement of rotating torque:** Requires addressing signal transmission from moving parts.
*   **Strain Gauge Torquemeters:** Most common for direct shaft measurement, use shear strain, require signal transmission (slip rings/telemetry).
*   **Dynamometers:** Measure torque and power of machines, apply a load, and measure reaction torque.
*   **Power Calculation:** $P = T \times \omega$ (where $\omega$ is angular velocity in rad/s).
*   **Key Considerations:** Accuracy, precision, response time, signal transmission reliability, and environmental factors.

---

This comprehensive set of notes covers the essential aspects of torque measurement on rotating shafts as per the provided learning outcomes and course objectives, drawing upon the principles discussed in standard textbooks for Engineering Instruments and Measurements.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
