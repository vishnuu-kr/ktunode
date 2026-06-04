---
title: "Elastic Transducers"
subject: "ENGINEERING INSTRUMENTS AND MEASUREMENTS"
module: "Module 3: Force measuring devices: Torque and shaft power measurement"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464321"
status: "completed"
scrapedAt: "2026-05-20T18:11:48.884Z"
---
# ENGINEERING INSTRUMENTS AND MEASUREMENTS - Module 3: Force Measuring Devices: Torque and Shaft Power Measurement

## Topic: Elastic Transducers

---

### 1. Introduction to Elastic Transducers

Elastic transducers are force measuring devices that utilize the elastic properties of materials to convert mechanical force into a measurable output, typically an electrical signal. When a force is applied to an elastic element, it undergoes deformation. This deformation can be measured directly or indirectly using a secondary transducer to produce an electrical output proportional to the applied force.

**Key Concepts:**

*   **Elasticity:** The ability of a material to deform under stress and return to its original shape when the stress is removed.
*   **Stress:** Force per unit area applied to a material ($\sigma = F/A$).
*   **Strain:** The relative deformation of a material under stress ($\epsilon = \Delta L / L_0$).
*   **Hooke's Law:** Within the elastic limit, stress is directly proportional to strain ($\sigma = E\epsilon$, where $E$ is the Young's Modulus of the material).

**Importance:**

Elastic transducers are widely used due to their:

*   Simplicity in construction
*   Good linearity over a wide range
*   High natural frequency (allowing for dynamic measurements)
*   Relatively low cost

**Textbook References:**

*   **Dobelin (1990):** Discusses the fundamental principles of elasticity and strain, forming the basis for elastic transducers.
*   **Sawhney & Sawhney (2009):** Provides an overview of various mechanical measurement devices, including those based on elastic deformation.
*   **Nakra & Chaudhry (2009):** Elaborates on the application of elastic principles in the design of measurement instruments.

---

### 2. Types of Elastic Transducers and Their Working Principles

Elastic transducers typically consist of two main components:

1.  **Elastic Element (Spring Element):** This is the primary sensing element that deforms under the applied force. Common elastic elements include springs, diaphragms, bellows, and beams.
2.  **Secondary Transducer:** This device converts the mechanical deformation of the elastic element into an electrical signal. Common secondary transducers are:
    *   **Strain Gauges:** Resistive elements whose resistance changes with strain.
    *   **Variable Reluctance/Inductance Transducers:** Devices where the change in inductance or reluctance is proportional to displacement.
    *   **Capacitive Transducers:** Devices where the capacitance changes with a change in the distance between plates.
    *   **Piezoelectric Transducers:** Materials that generate an electric charge when subjected to mechanical stress.

Let's explore some common elastic transducer configurations:

#### 2.1. Strain Gauge Force Transducers

Strain gauges are perhaps the most common type of elastic transducer. They exploit the piezoresistive effect, where the electrical resistance of a conductor or semiconductor changes when it is subjected to mechanical strain.

**Working Principle:**

*   A strain gauge is bonded to the surface of an elastic element (e.g., a metal bar, diaphragm, or cantilever beam).
*   When a force is applied to the elastic element, it deforms, causing the strain gauge to stretch or compress.
*   This deformation changes the length and cross-sectional area of the strain gauge's resistive element, altering its resistance according to the formula:
    $R = \rho \frac{L}{A}$
    where:
    *   $R$ is the resistance
    *   $\rho$ is the resistivity
    *   $L$ is the length
    *   $A$ is the cross-sectional area
*   The change in resistance ($\Delta R$) is related to the strain ($\epsilon$) by the **gauge factor (GF)**:
    $GF = \frac{\Delta R / R}{\epsilon}$
*   The change in resistance is typically measured using a **Wheatstone bridge circuit**. When the bridge is balanced, any change in resistance of the strain gauge unbalances the bridge, producing an output voltage proportional to the applied force.

**Advantages:**

*   High sensitivity
*   Wide dynamic range
*   Can be designed for various force ranges
*   Compact size

**Disadvantages:**

*   Requires amplification and conditioning circuitry
*   Sensitive to temperature variations (requires compensation)
*   Proper bonding is crucial for accurate readings

**Examples:**

*   **Load Cells:** Widely used in weighing scales and material testing machines. They typically use multiple strain gauges arranged in a Wheatstone bridge configuration to measure compression or tension. Common load cell designs include:
    *   **S-Type Load Cell:** Elastic element is shaped like an 'S'.
    *   **Beam Type Load Cell:** Elastic element is a beam.
    *   **Canister Type Load Cell:** Elastic element is a cylindrical body.
*   **Pressure Transducers:** Employ diaphragms or capsules as the elastic element, with strain gauges bonded to their surface.

**Textbook References:**

*   **Dobelin (1990):** Provides a detailed explanation of strain gauge theory, gauge factor, and Wheatstone bridge applications.
*   **Sawhney & Sawhney (2009):** Illustrates various strain gauge configurations and their use in force and pressure measurement.
*   **Nakra & Chaudhry (2009):** Covers the application of strain gauges in different transducer designs and discusses temperature compensation techniques.
*   **Raghavendra (2013):** Discusses strain gauges as extensometers and their role in structural analysis and force measurement.
*   **Jain (2022):** Explains the construction and working of strain gauges and their use in load cells.
*   **Singh (2009):** Details industrial applications of strain gauge based sensors for force and pressure.

#### 2.2. Variable Inductance/Reluctance Force Transducers

These transducers operate on the principle of changing inductance or reluctance due to the movement of a magnetic core or armature.

**Working Principle:**

*   An iron core is placed within a coil. The magnetic flux linking the coil determines its inductance.
*   The elastic element (e.g., a spring) is connected to an armature or the core, such that an applied force causes a displacement.
*   This displacement alters the air gap in the magnetic circuit, thereby changing the reluctance of the circuit.
*   According to the relationship between inductance, reluctance, and magnetic flux, a change in reluctance leads to a change in inductance.
*   The change in inductance can be measured using AC bridge circuits or by incorporating the coil into an oscillator circuit, where the frequency changes with inductance.

**Types:**

*   **Variable Air Gap Transducers:** The displacement changes the air gap between the core and the armature.
*   **Variable Reluctance Transducers:** Often use multiple coils and a movable ferrous element.

**Advantages:**

*   No physical contact between sensing elements (reducing wear)
*   Good linearity
*   Robust construction

**Disadvantages:**

*   Requires AC excitation
*   Can be sensitive to stray magnetic fields
*   Lower sensitivity compared to strain gauges in some applications

**Examples:**

*   **LVDT (Linear Variable Differential Transformer) based force transducers:** While primarily displacement sensors, LVDTs can be coupled with elastic elements to measure force. The displacement of the elastic element moves the core of the LVDT, producing a linear voltage output proportional to the force.

**Textbook References:**

*   **Dobelin (1990):** Explains the principles of electromagnetic induction and inductance relevant to these transducers.
*   **Sawhney & Sawhney (2009):** Covers inductive and capacitive transducers in detail, including their working principles and applications.
*   **Nakra & Chaudhry (2009):** Discusses the design considerations for variable reluctance and inductance transducers.

#### 2.3. Capacitive Force Transducers

These transducers utilize the change in capacitance due to a variation in the distance between capacitor plates.

**Working Principle:**

*   A capacitor is formed by two conductive plates separated by a dielectric medium. The capacitance is given by:
    $C = \frac{\epsilon_0 \epsilon_r A}{d}$
    where:
    *   $C$ is the capacitance
    *   $\epsilon_0$ is the permittivity of free space
    *   $\epsilon_r$ is the relative permittivity of the dielectric
    *   $A$ is the area of overlap of the plates
    *   $d$ is the distance between the plates
*   In a capacitive force transducer, the applied force deforms an elastic element, which in turn changes the distance between the capacitor plates or the area of overlap.
*   This change in capacitance is then measured by an electronic circuit.

**Advantages:**

*   High sensitivity
*   Low power consumption
*   Good frequency response
*   Can operate at high temperatures

**Disadvantages:**

*   Susceptible to humidity and dirt
*   Requires high frequency excitation
*   Can be affected by external electric fields

**Examples:**

*   **Diaphragm-based capacitive pressure sensors:** A diaphragm acts as one plate of the capacitor. Pressure causes the diaphragm to deflect, changing the distance to a fixed plate.
*   **Force-sensitive capacitors:** Where the elastic element's deformation directly alters the capacitor geometry.

**Textbook References:**

*   **Dobelin (1990):** Details the principles of capacitance and electrostatic effects.
*   **Sawhney & Sawhney (2009):** Explains the working of capacitive transducers and their applications.
*   **Nakra & Chaudhry (2009):** Discusses the practical aspects of designing capacitive sensors.

#### 2.4. Piezoelectric Force Transducers

These transducers utilize the piezoelectric effect, where certain crystalline materials generate an electric charge when subjected to mechanical stress.

**Working Principle:**

*   When a force is applied to a piezoelectric crystal (e.g., quartz, Rochelle salt, PZT), it deforms, causing a displacement of positive and negative charge centers within the crystal lattice.
*   This charge separation creates a voltage across the crystal, proportional to the applied force.
*   The generated charge ($Q$) is related to the applied force ($F$) by the piezoelectric constant ($d_33$ or $d_{31}$):
    $Q = d_{33} \times F$
    where $d_{33}$ is the charge constant in the direction of force and charge collection.
*   The output voltage is typically measured using a high-impedance voltmeter or charge amplifier.

**Advantages:**

*   High natural frequency (excellent for dynamic force measurements)
*   Self-generating (no external power source required for the sensing element itself)
*   High sensitivity
*   Compact and robust

**Disadvantages:**

*   Not suitable for static or quasi-static measurements (charge leaks away over time)
*   Output is charge or voltage, requiring specialized conditioning
*   Sensitive to temperature variations

**Examples:**

*   **Accelerometers:** Often use piezoelectric elements to measure acceleration, which is directly related to force via Newton's second law ($F=ma$).
*   **Impact force sensors:** Used in crash testing and impact studies.
*   **Dynamometers for measuring transient forces.**

**Textbook References:**

*   **Dobelin (1990):** Explains the piezoelectric effect and its applications in measurement.
*   **Sawhney & Sawhney (2009):** Details piezoelectric transducers and their use in dynamic measurements.
*   **Nakra & Chaudhry (2009):** Discusses piezoelectric materials, their properties, and the design of piezoelectric sensors.
*   **Jain (2022):** Covers piezoelectric sensors and their applications in force and vibration measurement.
*   **Kumar (2012):** Explains the fundamentals of piezoelectricity for measurement applications.
*   **Singh (2009):** Focuses on industrial applications of piezoelectric sensors.

---

### 3. Elastic Transducers for Torque and Shaft Power Measurement

While this module is broadly about force measuring devices, the topic specifically mentions torque and shaft power. Elastic elements are fundamental in these measurements.

#### 3.1. Torque Measurement

Torque is a twisting force that tends to cause rotation. It is measured by applying a known load to a rotating shaft and measuring the resultant twist or strain.

**Working Principle:**

*   A shaft is subjected to a torque. This torque causes torsional shear stress and shear strain in the shaft.
*   **Elastic Twist:** The angular displacement (twist) of the shaft is proportional to the applied torque, provided it is within the elastic limit.
    $\tau = \frac{Tr}{J}$
    where:
    *   $\tau$ is the shear stress
    *   $T$ is the applied torque
    *   $r$ is the radial distance from the center
    *   $J$ is the polar moment of inertia
*   And the shear strain ($\gamma$) is related to the angle of twist ($\theta$) by:
    $\theta = \frac{TL}{GJ}$
    where:
    *   $\theta$ is the angle of twist
    *   $L$ is the length of the shaft
    *   $G$ is the shear modulus of the material

**Elastic Transducer Configurations for Torque:**

1.  **Strain Gauge Torquemeters:**
    *   Strain gauges are applied to the surface of the shaft, typically at a 45-degree angle to the shaft axis, to measure the shear strain caused by torsion.
    *   Two or four strain gauges are usually arranged in a **full bridge configuration** to maximize sensitivity and compensate for bending stresses.
    *   The Wheatstone bridge output is proportional to the shear strain, and thus to the applied torque.
    *   For rotating shafts, **slip rings and brushes** or **telemetry systems** are used to transmit the electrical signal from the rotating shaft to a stationary receiver.

2.  **Torsional-Type Transducers (using elastic elements):**
    *   An elastic element (e.g., a calibrated torsion bar) is placed in the drive train.
    *   The torque causes the torsion bar to twist.
    *   The angular twist is then converted into an electrical signal using any of the secondary transducers discussed earlier (e.g., LVDT measuring the relative angular displacement, or optical encoders detecting angular changes).

**Textbook References:**

*   **Dobelin (1990):** Covers the theory of torsion and the application of strain gauges for torque measurement.
*   **Sawhney & Sawhney (2009):** Details torque measurement techniques, including strain gauge torquemeters and their applications.
*   **Nakra & Chaudhry (2009):** Discusses the design of torque sensors and the importance of bridge configurations for strain gauges.
*   **Jain (2022):** Provides practical examples of torque measurement using strain gauges on rotating shafts.
*   **Singh (2009):** Focuses on industrial torque measurement systems used in various manufacturing processes.

#### 3.2. Shaft Power Measurement

Shaft power is the mechanical power transmitted by a rotating shaft. It is calculated from torque and rotational speed.

**Formula:**

*   Shaft Power ($P$) in Watts = Torque ($T$) in Newton-meters × Angular Velocity ($\omega$) in radians/second.
    $P = T \omega$
*   Alternatively, if Torque is in Nm and Speed (N) is in RPM:
    $P_{kW} = \frac{T_{Nm} \times N_{RPM}}{9550}$

**Measurement:**

Shaft power measurement requires simultaneous measurement of torque and rotational speed.

1.  **Torque Measurement:** As described above, using strain gauge torquemeters or other torque sensors.
2.  **Rotational Speed Measurement:**
    *   **Tachometers:** Devices that generate a voltage or pulse proportional to rotational speed.
    *   **Optical Encoders:** Provide digital pulses for each revolution or a fraction of a revolution, which can be counted to determine speed.
    *   **Stroboscopes:** Used for visual speed measurement.

**Elastic Transducer's Role:**

Elastic transducers are crucial for the *torque* component of shaft power measurement. The accuracy of shaft power measurement directly depends on the accuracy of the torque measurement provided by the elastic transducer.

**Textbook References:**

*   **Dobelin (1990):** Integrates torque and speed measurement for power calculation.
*   **Sawhney & Sawhney (2009):** Discusses methods for measuring rotational speed and their combination with torque for power calculation.
*   **Nakra & Chaudhry (2009):** Addresses the integration of various sensors for comprehensive power measurement systems.
*   **Jain (2022):** Covers the measurement of rotational speed and its use in power calculations.
*   **Singh (2009):** Details industrial applications of shaft power measurement in machinery monitoring.

---

### 4. Key Concepts and Definitions Summary

*   **Elasticity:** Property of a material to return to its original shape after deformation.
*   **Stress:** Force per unit area.
*   **Strain:** Measure of deformation ($\Delta L / L_0$).
*   **Hooke's Law:** $\sigma = E\epsilon$ (within elastic limit).
*   **Gauge Factor (GF):** Sensitivity of a strain gauge ($GF = (\Delta R/R)/\epsilon$).
*   **Wheatstone Bridge:** Circuit used to measure small changes in resistance.
*   **Piezoelectric Effect:** Generation of electric charge by certain materials under stress.
*   **Torque:** Twisting force ($T$).
*   **Angular Velocity ($\omega$):** Rate of change of angular displacement.
*   **Shaft Power:** Mechanical power transmitted by a rotating shaft ($P = T\omega$).
*   **Polar Moment of Inertia (J):** Resistance of a cross-section to torsion.
*   **Shear Modulus (G):** Ratio of shear stress to shear strain.

---

### 5. Learning Outcomes Alignment

*   **CO1: To identify and classify different measuring instruments and their static and dynamic characteristics, ensuring proper selection and usage for various engineering applications (Knowledge Level: K2)**
    *   This topic covers the classification of elastic transducers (strain gauge, inductive, capacitive, piezoelectric) and implicitly touches upon their characteristics (sensitivity, linearity, frequency response) by discussing their working principles and advantages/disadvantages. The choice of transducer depends on the application.

*   **CO2: To measure and analyse displacement, strain and surface characteristics using appropriate techniques and devices, ensuring quality control and performance optimization in manufacturing and engineering processes (Knowledge Level: K3)**
    *   Elastic transducers fundamentally measure deformation (displacement/strain) which is then converted to force. Strain gauges directly measure strain. The analysis of this strain is key to determining force, torque, or pressure.

*   **CO3: To examine various devices to measure force, pressure accurately using a variety of devices and techniques (Knowledge Level: K5)**
    *   This topic directly addresses the examination of elastic transducers for force measurement (load cells) and indirectly for pressure measurement (using diaphragms). The detailed explanation of working principles and types allows for examination of these devices.

*   **CO4: To acquire the ability to measure flow and temperature and enabling them to address complex engineering challenges in these areas effectively. (Knowledge Level: K4)**
    *   While not directly about flow or temperature, understanding force measurement is foundational for many related systems (e.g., force-based flow meters like Venturi meters measure pressure drop, which can be converted to flow; force sensors are used in some temperature control systems). The knowledge of measurement principles is transferable.

*   **CO5: To select measurement system for engineering applications (Knowledge Level: K3)**
    *   By understanding the principles, advantages, and disadvantages of different elastic transducers, students can make informed decisions about which type of transducer is most suitable for a given application (e.g., dynamic vs. static, required accuracy, environmental conditions).

---

### 6. Important Points to Remember

*   Elastic transducers work by converting mechanical deformation into an electrical signal.
*   Strain gauges are the most common secondary transducer used with elastic elements.
*   The gauge factor (GF) is a critical parameter for strain gauge sensitivity.
*   Wheatstone bridges are essential for signal conditioning in strain gauge applications.
*   Piezoelectric transducers are excellent for dynamic force measurements but unsuitable for static loads.
*   Torque measurement relies on measuring the twist or strain in a shaft.
*   Shaft power is calculated from torque and rotational speed.
*   For rotating shafts, slip rings or telemetry are needed to transmit signals.
*   Temperature compensation is often necessary for accurate strain gauge measurements.

---

### 7. Practice Questions and Exercises

**Question 1:**

Explain the working principle of a strain gauge. Define gauge factor and state its typical values for metallic and semiconductor strain gauges.

**Answer:**

A strain gauge works on the piezoresistive effect, where the electrical resistance of a conductor or semiconductor changes in proportion to the mechanical strain applied to it. When a force is applied to an elastic element bonded with a strain gauge, the strain gauge stretches or compresses, changing its length and cross-sectional area. This change in dimensions alters its resistance.

The **gauge factor (GF)** is defined as the ratio of the fractional change in resistance to the fractional change in length (strain):
$GF = \frac{\Delta R / R}{\epsilon}$

*   **Metallic strain gauges** (e.g., made of constantan or karma alloy) have GF values typically around **2**.
*   **Semiconductor strain gauges** (e.g., made of silicon) have much higher GF values, typically ranging from **50 to 200**, due to the strain-dependent modulation of carrier mobility.

**Question 2:**

A strain gauge with a resistance of 120 $\Omega$ and a gauge factor of 2 is bonded to an elastic element. If the strain gauge experiences a strain of 500 $\mu\epsilon$ (micro-strain), calculate the change in resistance. If this strain gauge is used in a Wheatstone bridge with a supply voltage of 5V, what would be the approximate output voltage (assume a simple half-bridge configuration with one active gauge and three fixed resistors of 120 $\Omega$)?

**Answer:**

Given:
$R = 120 \ \Omega$
$GF = 2$
$\epsilon = 500 \ \mu\epsilon = 500 \times 10^{-6}$
$V_{supply} = 5V$

1.  **Calculate the change in resistance ($\Delta R$):**
    $\Delta R = GF \times \epsilon \times R$
    $\Delta R = 2 \times (500 \times 10^{-6}) \times 120 \ \Omega$
    $\Delta R = 2 \times 0.0005 \times 120 \ \Omega$
    $\Delta R = 0.12 \ \Omega$

2.  **Calculate the output voltage (half-bridge configuration):**
    In a half-bridge with one active gauge ($R_1 = R + \Delta R$) and three fixed resistors ($R_2 = R_3 = R_4 = R$), the output voltage ($V_{out}$) is approximately:
    $V_{out} \approx \frac{V_{supply}}{4} \times \frac{\Delta R}{R}$
    $V_{out} \approx \frac{5V}{4} \times \frac{0.12 \ \Omega}{120 \ \Omega}$
    $V_{out} \approx 1.25V \times 0.001$
    $V_{out} \approx 0.00125V = 1.25 mV$

    *(Note: A full-bridge configuration would provide a significantly higher output, approximately 4 times that of a half-bridge for the same strain, by using four active gauges.)*

**Question 3:**

What are the primary applications of piezoelectric transducers in force measurement? Why are they not suitable for static force measurements?

**Answer:**

Primary applications of piezoelectric transducers in force measurement include:
*   **Dynamic force measurement:** Capturing rapid changes in force.
*   **Impact force measurement:** In applications like crash testing, hammer testing, or drop tests.
*   **Vibration analysis:** Where vibrations are related to forces.
*   **Short-duration force pulses.**

Piezoelectric transducers are not suitable for static force measurements because the electric charge generated by the piezoelectric effect tends to leak away over time through the internal resistance of the material and the input impedance of the measuring instrument. This leakage means that a constant force will not produce a sustained output signal, making it impossible to measure steady-state forces accurately.

**Question 4:**

How is torque measured on a rotating shaft using strain gauges? What is the role of slip rings or telemetry systems?

**Answer:**

Torque on a rotating shaft is measured using strain gauges by bonding them to the shaft's surface. The gauges are typically placed at $\pm 45^\circ$ to the shaft's axis to measure shear strain caused by torsional stress. A full-bridge configuration is commonly used with four strain gauges to maximize sensitivity and cancel out any bending stresses that might be present.

The strain gauge bridge is connected to a power supply and the output signal, which is proportional to the torque, is measured. For rotating shafts:
*   **Slip Rings and Brushes:** These are used to provide an electrical connection between the rotating strain gauges and the stationary measurement equipment. The output signal from the bridge is transmitted through the rotating slip rings to fixed brushes, which then pass the signal to the measuring instruments. However, slip rings can introduce noise and wear over time.
*   **Telemetry Systems:** These systems use radio frequency (RF) transmitters mounted on the rotating shaft to wirelessly transmit the strain gauge signal to a stationary receiver. This method avoids the physical contact issues of slip rings and is generally preferred for high-accuracy and high-speed applications.

---

This comprehensive set of notes covers the fundamental principles, types, applications, and key concepts of elastic transducers in the context of force, torque, and shaft power measurement, aligning with the provided learning and course outcomes and referencing the specified textbooks.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
