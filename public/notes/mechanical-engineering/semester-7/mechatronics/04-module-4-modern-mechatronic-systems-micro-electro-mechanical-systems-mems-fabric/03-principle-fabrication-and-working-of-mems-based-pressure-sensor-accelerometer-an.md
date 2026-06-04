---
title: "Principle, fabrication and working of MEMS based pressure sensor, accelerometer and gyroscope."
subject: "MECHATRONICS"
module: "Module 4: Modern mechatronic systems: Micro Electro Mechanical Systems (MEMS): Fabrication: Deposition, Lithography,"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463f21"
status: "completed"
scrapedAt: "2026-05-20T18:14:53.967Z"
---
# MECHATRONICS: Module 4 - Modern Mechatronic Systems: MEMS

## Topic: Principle, Fabrication and Working of MEMS-Based Pressure Sensor, Accelerometer and Gyroscope

This module delves into the fascinating world of Micro Electro Mechanical Systems (MEMS), focusing on their fabrication and the working principles of key sensors: pressure sensors, accelerometers, and gyroscopes. These devices are fundamental to modern mechatronic systems, enabling sophisticated sensing and control in a vast array of applications.

---

### 1. Introduction to MEMS (Micro Electro Mechanical Systems)

*   **Definition:** MEMS are integrated devices or systems that combine mechanical and electrical components on a silicon substrate, fabricated using micro-fabrication techniques. They are characterized by their small size (micrometers to millimeters), low power consumption, and ability to be manufactured in large quantities at low cost.

*   **Key Characteristics:**
    *   Miniaturization
    *   Low power consumption
    *   High performance and sensitivity
    *   Batch fabrication (high volume, low cost)
    *   Integration of sensing, actuation, and signal processing

*   **Relevance to Mechatronics:** MEMS are crucial for the "sensing" aspect of mechatronics, providing the input data that drives control systems. They allow for the integration of sophisticated sensing capabilities into compact and intelligent systems. (CO6, CO7)

*   **Reference:** Bolton, W. (7th ed.) "Mechatronics: Electronic Control Systems in Mechanical and Electrical Engineering" provides a strong foundation on sensors and their role in mechatronic systems, which can be extended to the principles of MEMS sensors.

---

### 2. MEMS Fabrication Techniques

Understanding MEMS fabrication is crucial for appreciating how these devices are created. The primary processes involved are deposition, lithography, etching, and dicing.

#### 2.1. Deposition

*   **Definition:** The process of adding a thin layer of material onto a substrate. This material can be conductive, semiconductive, or insulating.

*   **Key Techniques:**
    *   **Physical Vapor Deposition (PVD):**
        *   **Evaporation:** Heating a source material in a vacuum until it vaporizes and condenses on the substrate. (e.g., depositing a thin metal film for electrodes).
        *   **Sputtering:** Bombarding a target material with energetic ions, causing atoms to be ejected and deposited onto the substrate. Offers better adhesion and film properties.
    *   **Chemical Vapor Deposition (CVD):**
        *   **Low-Pressure CVD (LPCVD):** Reactants in gaseous form are introduced into a furnace, where they decompose and deposit a solid film on the substrate. Commonly used for depositing polysilicon (structural material) and silicon nitride (insulator).
        *   **Plasma-Enhanced CVD (PECVD):** Uses a plasma to enhance the chemical reaction, allowing deposition at lower temperatures, which is suitable for temperature-sensitive substrates. Used for depositing silicon dioxide and silicon nitride.

*   **Relevance:** Deposition is used to create layers for electrodes, passivation, insulation, and structural components in MEMS devices.

#### 2.2. Lithography (Photolithography)

*   **Definition:** A process used to transfer a geometric pattern from a mask to a light-sensitive chemical photoresist on the substrate. It's the cornerstone of microfabrication, defining the features and patterns of the MEMS device.

*   **Key Steps:**
    1.  **Coating:** A thin, uniform layer of photoresist is applied to the substrate (e.g., silicon wafer).
    2.  **Exposure:** The photoresist is exposed to UV light through a mask containing the desired pattern.
        *   **Positive Photoresist:** Exposed areas become soluble and are removed during development.
        *   **Negative Photoresist:** Exposed areas become insoluble and remain after development, while unexposed areas are removed.
    3.  **Development:** The exposed or unexposed photoresist is dissolved by a developer solution, leaving the patterned resist on the substrate.

*   **Relevance:** Lithography defines the shapes of the structures that will be etched or deposited, creating the intricate patterns necessary for MEMS sensors.

*   **Reference:** Onwubolu, G. C. "Mechatronics: Principles and Applications" likely discusses the role of micro-fabrication in creating integrated systems, including the importance of lithography.

#### 2.3. Etching

*   **Definition:** The process of selectively removing material from the substrate or deposited layers, following the pattern defined by lithography.

*   **Key Techniques:**
    *   **Wet Etching:** Uses liquid chemicals (acids or bases) to remove material.
        *   **Isotropic Etching:** Etches uniformly in all directions, leading to undercutting.
        *   **Anisotropic Etching:** Etches preferentially along specific crystallographic planes of the substrate. For silicon, anisotropic etchants (like KOH) can create precise V-grooves or cavities.
    *   **Dry Etching (Plasma Etching):** Uses reactive gases in a plasma to chemically remove material.
        *   **Reactive Ion Etching (RIE):** Combines chemical etching with physical bombardment by ions, allowing for more directional (anisotropic) etching and finer feature control. Essential for creating vertical sidewalls.

*   **Relevance:** Etching is used to sculpt the mechanical structures of MEMS devices, such as membranes, beams, and proof masses.

#### 2.4. Other Fabrication Steps (Briefly Mentioned)

*   **Dicing:** Cutting the wafer into individual dies (chips).
*   **Packaging:** Encasing the MEMS chip for protection and electrical connection.

---

### 3. MEMS-Based Pressure Sensor

*   **Principle:**
    *   **Piezoresistive Effect:** The resistance of a material changes when subjected to mechanical stress.
    *   **Capacitive Effect:** The capacitance between two conductive plates changes when the distance between them varies.
    *   **Piezoelectric Effect:** Certain materials generate an electric charge when subjected to mechanical stress.

*   **MEMS Piezoresistive Pressure Sensor:**
    *   **Structure:** A thin diaphragm (membrane) made of silicon is fabricated. Piezoresistors (typically heavily doped polysilicon or diffusion resistors) are strategically placed on the diaphragm where stress is maximum (e.g., at the edges).
    *   **Working:**
        1.  When pressure is applied to one side of the diaphragm, it deflects.
        2.  This deflection induces mechanical stress in the diaphragm.
        3.  The piezoresistors change their resistance due to the stress.
        4.  These resistors are typically arranged in a Wheatstone bridge configuration. The differential change in resistance across the bridge produces a voltage output proportional to the applied pressure.
    *   **Fabrication (Simplified):**
        1.  Start with a silicon wafer.
        2.  Deposit a diaphragm material (e.g., silicon nitride or silicon dioxide) or use the silicon substrate itself.
        3.  Lithographically define and etch the diaphragm area, creating a suspended membrane.
        4.  Deposit and pattern piezoresistors on the diaphragm using deposition and lithography.
        5.  An electrical connection (metal traces) is made to the piezoresistors.
        6.  Etch from the backside of the wafer to create a pressure cavity beneath the diaphragm (for absolute or differential pressure sensors).
    *   **Advantages:** High sensitivity, relatively simple fabrication, good linearity.
    *   **Disadvantages:** Temperature sensitivity (requires compensation), can be affected by strain.
    *   **Applications:** Automotive (engine control, tire pressure monitoring), medical devices (blood pressure monitoring), industrial automation.
    *   **Learning Outcome Alignment:** CO1 (choosing optimal sensor), CO6 (incorporating MEMS), CO7 (modern applications).

*   **MEMS Capacitive Pressure Sensor:**
    *   **Structure:** Consists of two conductive plates separated by a gap. One plate is a fixed electrode, and the other is a movable diaphragm. The gap between them acts as the dielectric.
    *   **Working:**
        1.  Pressure applied to the diaphragm causes it to deflect, changing the distance between the plates.
        2.  This change in distance alters the capacitance ($C = \epsilon_0 \epsilon_r \frac{A}{d}$, where $d$ is the distance).
        3.  The change in capacitance is measured electronically.
    *   **Fabrication:** Involves creating a suspended diaphragm and a fixed electrode, often using silicon micromachining.
    *   **Advantages:** Low power consumption, good linearity, less temperature sensitive than piezoresistive.
    *   **Disadvantages:** Requires more complex circuitry for capacitance measurement.
    *   **Applications:** High-accuracy pressure measurements, aerospace.

*   **Reference:** Rajput, R. K. "A Text Book of Mechatronics" likely covers various sensor types, including pressure sensors and their working principles.

---

### 4. MEMS-Based Accelerometer

*   **Principle:** Based on **Newton's Second Law of Motion** ($F = ma$). When an accelerometer experiences acceleration, a proof mass (seismic mass) within the device moves relative to its housing. This displacement is then converted into an electrical signal.

*   **MEMS Accelerometer (Capacitive Type - most common):**
    *   **Structure:**
        *   **Proof Mass (Seismic Mass):** A suspended mass that is free to move along one or more axes.
        *   **Suspension Springs:** Flexible beams that suspend the proof mass, allowing it to displace when acceleration is applied.
        *   **Sense Fingers (Combs):** Interdigitated fingers attached to the proof mass and fixed to the substrate. These form capacitors.
    *   **Working:**
        1.  When the accelerometer experiences linear acceleration along an axis, the proof mass lags behind due to inertia.
        2.  This causes the proof mass to displace relative to the housing.
        3.  The displacement of the proof mass leads to a change in the gap between the sense fingers of the proof mass and the fixed sense fingers.
        4.  This change in gap alters the capacitance of the differential capacitor pairs.
        5.  Electronic circuitry measures the change in capacitance, which is proportional to the acceleration.
        6.  For 3-axis acceleration, multiple such structures are integrated on a single chip, oriented along different axes.
    *   **Fabrication (Simplified):**
        1.  Start with a silicon wafer.
        2.  Deposit a structural layer (e.g., polysilicon) and an insulating sacrificial layer.
        3.  Lithographically define and etch the structures (proof mass, springs, sense fingers) in the structural layer.
        4.  Use a release etch (often wet etching) to remove the sacrificial layer, freeing the proof mass and enabling its movement.
        5.  Deposit and pattern electrodes for the fixed fingers.
        6.  Cover with a cap wafer for protection.
    *   **Advantages:** High sensitivity, low power consumption, good dynamic range, can measure static acceleration (gravity).
    *   **Disadvantages:** Sensitive to vibration, temperature dependent.
    *   **Applications:** Smartphones (screen rotation, motion sensing), automotive (airbag deployment, stability control), gaming controllers, inertial navigation systems.
    *   **Learning Outcome Alignment:** CO1, CO6, CO7.

*   **MEMS Accelerometer (Piezoresistive Type):**
    *   **Structure:** Similar to capacitive, but with piezoresistors placed on the suspension springs or the proof mass where stress is induced by acceleration.
    *   **Working:** Acceleration causes displacement of the proof mass, stressing the piezoresistors, leading to a change in their resistance, which is detected.
    *   **Advantages:** High bandwidth, can handle larger shocks.
    *   **Disadvantages:** Lower sensitivity and higher power consumption compared to capacitive.

*   **Reference:** Shetty, D., & Kolk, R. "Mechatronics System Design" would provide insights into the mechanical design and sensing principles of accelerometers within mechatronic systems.

---

### 5. MEMS-Based Gyroscope

*   **Principle:** Based on the **Coriolis Force**. When a mass is oscillating or rotating and is subjected to a linear acceleration, it experiences a force perpendicular to both its velocity and the acceleration. In a MEMS gyroscope, a proof mass is vibrated (driven in one direction), and when the device is rotated, the Coriolis force acts perpendicular to the vibration, causing a displacement in a secondary direction.

*   **MEMS Gyroscope (Vibratory, Coriolis Effect Type):**
    *   **Structure:**
        *   **Proof Mass:** A suspended mass designed to oscillate along a primary "drive" axis.
        *   **Drive Actuator:** Typically electrostatic comb drives that oscillate the proof mass.
        *   **Sense Transducers:** Capacitive comb structures or piezoelectric elements that detect the displacement of the proof mass along the "sense" axis, perpendicular to the drive motion.
    *   **Working:**
        1.  The proof mass is driven to oscillate at its resonant frequency along the drive axis using electrostatic forces.
        2.  When the gyroscope is rotated around an axis perpendicular to the drive motion, the Coriolis force acts on the oscillating proof mass.
        3.  The Coriolis force causes the proof mass to displace in a direction perpendicular to both the drive motion and the axis of rotation (the sense axis).
        4.  The sense transducers (e.g., capacitive combs) detect this displacement. The change in capacitance (or voltage generated by piezoelectric effect) is proportional to the angular rate.
        5.  For 3-axis rotation, multiple such structures are integrated, or a single complex structure designed to sense rotation about multiple axes.
    *   **Fabrication (Simplified):**
        1.  Similar to accelerometers, involving suspended proof masses, suspension springs, and electrostatic comb structures for driving and sensing.
        2.  Often uses specialized silicon micromachining techniques to create complex 3D structures for 3-axis sensing.
        3.  Requires precise fabrication to achieve high Q-factor for the oscillating mass and high sensitivity in the sensing element.
    *   **Advantages:** Can measure angular velocity, enabling advanced motion tracking.
    *   **Disadvantages:** Complex fabrication, sensitive to shock and vibration, prone to drift and bias errors.
    *   **Applications:** Smartphones (image stabilization, augmented reality), automotive (electronic stability control, navigation), drones, robotics.
    *   **Learning Outcome Alignment:** CO1, CO6, CO7.

*   **Reference:** Bolton, W. (7th ed.) and Rajput, R. K. "A Text Book of Mechatronics" will likely discuss inertial sensors and their principles, including gyroscopes.

---

### 6. Practice Questions and Answers

**Question 1:**
Explain the principle behind a MEMS piezoresistive pressure sensor. How is the applied pressure converted into an electrical signal?

**Answer 1:**
A MEMS piezoresistive pressure sensor works on the principle of the piezoresistive effect. A thin silicon diaphragm deflects when subjected to pressure. Piezoresistors placed on this diaphragm experience mechanical stress due to the deflection. This stress causes a change in the electrical resistance of the piezoresistors. These resistors are typically configured in a Wheatstone bridge. The imbalance in the bridge due to the resistance change produces a voltage output that is proportional to the applied pressure.

**Question 2:**
Describe the basic working principle of a MEMS accelerometer. What physical phenomenon is utilized?

**Answer 2:**
A MEMS accelerometer utilizes Newton's Second Law of Motion ($F=ma$). It typically consists of a suspended proof mass. When the device is accelerated, the proof mass experiences an inertial force and moves relative to its housing. This displacement is then converted into an electrical signal, most commonly by measuring changes in capacitance between interdigitated fingers attached to the proof mass and fixed electrodes.

**Question 3:**
What is the fundamental principle that governs the operation of a MEMS gyroscope?

**Answer 3:**
The fundamental principle governing MEMS gyroscopes is the **Coriolis Force**. A proof mass is made to oscillate. When the gyroscope is subjected to angular rotation, the Coriolis force acts on this oscillating mass, causing a secondary displacement perpendicular to both the oscillation direction and the axis of rotation. This secondary displacement is then measured to determine the angular rate.

**Question 4:**
List and briefly explain two key MEMS fabrication techniques used in creating sensors like pressure sensors and accelerometers.

**Answer 4:**
Two key MEMS fabrication techniques are:
1.  **Lithography (Photolithography):** This process transfers a desired pattern from a mask onto a light-sensitive photoresist layer on the substrate. It is used to define the geometric shapes of the MEMS structures, such as diaphragms, proof masses, and comb fingers.
2.  **Etching:** This is the process of removing material to sculpt the MEMS structures. It can be **wet etching** (using liquid chemicals) or **dry etching** (using plasmas, like RIE for directional etching). Etching is used to create the suspended mechanical components and cavities.

**Question 5:**
Compare and contrast MEMS capacitive and piezoresistive pressure sensors. What are their respective advantages and disadvantages?

**Answer 5:**
*   **MEMS Capacitive Pressure Sensor:**
    *   **Principle:** Measures change in capacitance due to diaphragm deflection altering the distance between two plates.
    *   **Advantages:** Low power consumption, less sensitive to temperature variations, good linearity.
    *   **Disadvantages:** Requires more complex circuitry for capacitance measurement.
*   **MEMS Piezoresistive Pressure Sensor:**
    *   **Principle:** Measures change in resistance of piezoresistors on a stressed diaphragm.
    *   **Advantages:** High sensitivity, relatively simpler circuitry.
    *   **Disadvantages:** Higher temperature sensitivity (requiring compensation), can be affected by strain.

---

### 7. Important Points to Remember

*   **MEMS are the building blocks of sensing in mechatronic systems.**
*   **Fabrication is key:** Deposition, lithography, and etching are fundamental processes.
*   **Pressure Sensors:** Utilize piezoresistive or capacitive effects to measure pressure-induced deflection.
*   **Accelerometers:** Detect linear acceleration by measuring the inertial displacement of a proof mass, commonly using capacitive sensing.
*   **Gyroscopes:** Measure angular velocity by detecting the Coriolis force acting on an oscillating proof mass.
*   **Understanding these principles is crucial for selecting and integrating MEMS devices into mechatronic designs.** (CO1, CO6)

---

### 8. Alignment with Course Outcomes

*   **CO1 (Sensors):** This entire topic directly addresses the characteristics and working of MEMS pressure sensors, accelerometers, and gyroscopes, enabling students to choose optimal sensors based on application needs. (Knowledge Level: K2)
*   **CO6 (MEMS Devices):** The module focuses entirely on understanding the characteristics of MEMS devices and how they are fabricated and work, preparing students to incorporate them into mechatronic applications. (Knowledge Level: K2)
*   **CO7 (Modern Applications):** Examples of applications for each sensor type highlight the use of mechatronic concepts in modern technologies. (Knowledge Level: K2)
*   **CO3 (Mathematical Modelling):** While not explicitly detailed here, the working principles (e.g., $F=ma$, $C \propto 1/d$) lay the groundwork for mathematical modeling of these sensors' behavior, which would be covered in subsequent learning. (Knowledge Level: K2 - foundation provided)

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
