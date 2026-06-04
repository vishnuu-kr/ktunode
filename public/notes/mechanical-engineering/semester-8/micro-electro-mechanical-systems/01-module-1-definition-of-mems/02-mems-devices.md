---
title: "MEMS devices."
subject: "MICRO ELECTRO MECHANICAL SYSTEMS"
module: "Module 1: Definition of MEMS."
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1a51d0cf480446477e"
status: "completed"
scrapedAt: "2026-05-20T18:22:21.275Z"
---
# MICRO ELECTRO MECHANICAL SYSTEMS (MEMS)

## Module 1: Definition of MEMS

---

### Topic: MEMS Devices

**Learning Outcomes:**

*   Understand the fundamental definition of MEMS and its constituent components.
*   Identify and describe various types of MEMS devices.
*   Explain the working principles of common MEMS devices.
*   Recognize the interdisciplinary nature of MEMS technology.

**Course Outcomes Alignment:**

*   **CO1:** Understand micro electromechanical systems, MEMS components, MEMS design concepts and working principles. (Knowledge Level: K2) - *This topic directly addresses understanding MEMS devices and their working principles.*

---

### 1. Introduction to MEMS Devices

**Key Concept:** MEMS devices are miniaturized mechanical and electro-mechanical systems that integrate mechanical elements, sensors, actuators, and electronics on a common silicon substrate through microfabrication technology.

*   **Definition:**
    *   **M**icro **E**lectro **M**echanical **S**ystems (MEMS) are devices that have dimensions in the micrometer range (typically from 1 to 1000 micrometers).
    *   They combine electrical and mechanical functionalities.
    *   They are fabricated using semiconductor manufacturing processes.
    *   Often referred to as "micromachines" or "microdevices."

*   **Interdisciplinary Nature:** MEMS bridge the gap between mechanical engineering, electrical engineering, materials science, and physics.

*   **Core Components:**
    *   **Micro-sensors:** Devices that convert physical phenomena (e.g., pressure, temperature, acceleration, light) into electrical signals.
    *   **Micro-actuators:** Devices that convert electrical signals into mechanical motion or force (e.g., micro-motors, micro-valves, micro-relays).
    *   **Micro-structures:** Mechanical components fabricated in the micro-scale, such as beams, diaphragms, gears, springs.
    *   **Integrated Electronics:** On-chip or off-chip electronics for signal processing, control, and communication.

**Reference:**
*   Hsu, T.-R. (2008). *Mems & Microsystems Design and Manufacturing* (2nd ed.). John Wiley & Sons. (Chapter 1: Introduction to MEMS)
*   Madou, M. J. (2002). *Fundamentals of Microfabrication* (2nd ed.). CRC Press. (Chapter 1: Introduction to Micromachining)

---

### 2. Classification of MEMS Devices

MEMS devices can be classified based on their primary function, operating principle, or application.

#### 2.1. Classification by Function:

*   **Sensors:** Devices that detect and measure physical quantities.
    *   **Pressure Sensors:** Measure pressure by sensing the deflection of a diaphragm.
    *   **Accelerometers:** Measure acceleration by detecting the displacement of a proof mass.
    *   **Gyroscopes:** Measure angular velocity.
    *   **Microphones:** Convert sound waves into electrical signals.
    *   **Optical Sensors:** Detect light intensity or wavelengths.
    *   **Chemical Sensors:** Detect specific chemical species.
    *   **Temperature Sensors:** Measure temperature.

*   **Actuators:** Devices that produce motion or force in response to an electrical stimulus.
    *   **Micro-motors:** Rotating or linear micro-motors.
    *   **Micro-valves:** Control fluid flow in microfluidic systems.
    *   **Micro-pumps:** Transport fluids in microfluidic applications.
    *   **Micro-relays/Switches:** Electrically controlled mechanical switches.
    *   **Inkjet Print Heads:** Precise ejection of ink droplets.
    *   **Optical Mirrors:** Beam steering in optical systems.

*   **Micro-systems/Integrated Devices:** Devices that combine sensing and actuation, or perform complex functions.
    *   **Microphones:** Actuator (diaphragm) and sensor (piezoelectric or capacitive element).
    *   **Inkjet Heads:** Actuators for droplet ejection, often with integrated heaters or piezoelectric elements.
    *   **Micro-optical Systems:** Devices that manipulate light, such as MEMS mirrors, gratings, and modulators.
    *   **Microfluidic Systems:** Devices that manipulate fluids on a micro-scale, often incorporating pumps, valves, and mixers.

#### 2.2. Classification by Operating Principle:

*   **Electrostatic:** Utilizes forces between charged plates.
*   **Piezoelectric:** Uses materials that generate an electric charge when mechanically stressed.
*   **Piezoresistive:** Relies on the change in electrical resistance of a material when subjected to mechanical strain.
*   **Magnetostrictive:** Uses materials that change shape in the presence of a magnetic field.
*   **Thermal:** Exploits thermal expansion or phase changes.
*   **Capacitive:** Measures changes in capacitance due to mechanical displacement.

**Important Point to Remember:** The choice of operating principle significantly influences the design, fabrication, and performance of a MEMS device.

**Reference:**
*   Gad-el-Hak, M. (2002). *The MEMS Handbook*. CRC Press. (Chapters relevant to specific device types)

---

### 3. Key MEMS Devices and Their Working Principles

This section provides detailed examples of common MEMS devices.

#### 3.1. MEMS Accelerometers

*   **Function:** Measure acceleration, velocity, and displacement.
*   **Working Principle:**
    *   Typically consists of a proof mass suspended by micro-springs.
    *   Sensing is usually achieved by measuring the displacement of the proof mass relative to a fixed frame when subjected to acceleration.
    *   **Capacitive Sensing:** The proof mass acts as one plate of a parallel-plate capacitor, and fixed electrodes form the other plates. Acceleration causes the proof mass to move, changing the capacitance.
        *   *Formula for Capacitance:* $C = \frac{\epsilon_0 \epsilon_r A}{d}$
        *   Where $\epsilon_0$ is the permittivity of free space, $\epsilon_r$ is the relative permittivity of the dielectric, $A$ is the overlap area between the plates, and $d$ is the gap distance. A change in 'd' or 'A' (due to proof mass displacement) alters the capacitance.
    *   **Piezoresistive Sensing:** Piezoresistors are integrated onto the springs. Acceleration causes strain in the springs, changing the resistance of the piezoresistors.
*   **Applications:** Airbag deployment systems, mobile phone orientation sensing, gaming controllers, camera image stabilization.

**Example (Capacitive Accelerometer):**
Imagine a proof mass with comb-like fingers moving between stationary comb fingers. As the device accelerates, the proof mass shifts, altering the overlap area between the moving and stationary fingers, thus changing the capacitance.

**Reference:**
*   Hsu, T.-R. (2008). *Mems & Microsystems Design and Manufacturing* (2nd ed.). John Wiley & Sons. (Chapter 4: Microactuators and Micromachines - Accelerometers)
*   Madou, M. J. (2002). *Fundamentals of Microfabrication* (2nd ed.). CRC Press. (Chapter 7: Sensors)

#### 3.2. MEMS Gyroscopes

*   **Function:** Measure angular velocity (rate of rotation).
*   **Working Principle:** Based on the **vibratory mechanical gyroscope (VMG)** principle and the **Coriolis effect**.
    *   A mass is made to vibrate in a specific direction (drive mode) using electrostatic or piezoelectric actuation.
    *   When the device is rotated around an axis perpendicular to the vibration, the Coriolis force acts on the vibrating mass, causing it to vibrate in a second direction (sense mode).
    *   The amplitude or phase of this sense mode vibration is proportional to the angular velocity.
*   **Applications:** Navigation systems, image stabilization, virtual reality, robotics.

**Key Concept: Coriolis Force:** $F_C = -2m (\vec{\omega} \times \vec{v})$
Where:
*   $m$ is the mass of the object.
*   $\vec{\omega}$ is the angular velocity of the rotating frame.
*   $\vec{v}$ is the velocity of the object relative to the rotating frame.

**Reference:**
*   Gad-el-Hak, M. (2002). *The MEMS Handbook*. CRC Press. (Chapter 4: Gyroscopes)

#### 3.3. MEMS Pressure Sensors

*   **Function:** Measure pressure.
*   **Working Principle:**
    *   A thin diaphragm made of silicon or other suitable material is integrated into the device.
    *   When pressure is applied to one side of the diaphragm, it deflects.
    *   This deflection is converted into an electrical signal using various sensing mechanisms:
        *   **Piezoresistive:** Piezoresistors are diffused or bonded onto the diaphragm at locations of maximum stress. Deflection causes strain, changing their resistance.
        *   **Capacitive:** The diaphragm acts as one plate of a capacitor, with a fixed electrode on the other side. Deflection changes the gap distance, altering the capacitance.
        *   **Piezoelectric:** Piezoelectric materials are integrated onto the diaphragm. Deflection generates a charge.
*   **Applications:** Automotive systems (manifold absolute pressure, tire pressure), medical devices (blood pressure monitoring), industrial automation, HVAC systems.

**Example (Piezoresistive Pressure Sensor):**
A silicon diaphragm with piezoresistors in a Wheatstone bridge configuration. Higher pressure leads to greater diaphragm deflection, increasing strain on the piezoresistors, which changes their resistance and produces a voltage output.

**Reference:**
*   Hsu, T.-R. (2008). *Mems & Microsystems Design and Manufacturing* (2nd ed.). John Wiley & Sons. (Chapter 3: Micromachined Sensors - Pressure Sensors)
*   Madou, M. J. (2002). *Fundamentals of Microfabrication* (2nd ed.). CRC Press. (Chapter 7: Sensors)

#### 3.4. MEMS Microphones

*   **Function:** Convert sound waves into electrical signals.
*   **Working Principle:**
    *   A thin diaphragm, often made of silicon nitride or polysilicon, is suspended above a backplate.
    *   **Capacitive Microphones:** The diaphragm acts as one electrode, and the backplate acts as the other. Sound waves cause the diaphragm to vibrate, changing the distance between the plates and thus the capacitance. This capacitance change is detected and converted to an audio signal.
    *   **Piezoelectric Microphones:** A piezoelectric material is attached to the diaphragm. Sound waves cause the diaphragm to vibrate, inducing a voltage across the piezoelectric material.
*   **Applications:** Mobile phones, laptops, hearing aids, voice recorders.

**Reference:**
*   Gad-el-Hak, M. (2002). *The MEMS Handbook*. CRC Press. (Chapter 5: Microphones)

#### 3.5. MEMS Relays and Switches

*   **Function:** Electrically controlled mechanical switches for high-frequency or low-power applications.
*   **Working Principle:**
    *   A movable micro-beam (often made of metal or polysilicon) is suspended over a fixed contact.
    *   An electrostatic force is used to pull the micro-beam down to make contact with the fixed electrode, closing the switch.
    *   Release springs or mechanisms disengage the contact when the electrostatic force is removed.
*   **Applications:** RF switches in mobile phones and wireless communication devices, test and measurement equipment.

**Key Concept:** Electrostatic actuation voltage needs to overcome spring forces and stiction forces.

**Reference:**
*   Hsu, T.-R. (2008). *Mems & Microsystems Design and Manufacturing* (2nd ed.). John Wiley & Sons. (Chapter 4: Microactuators and Micromachines - Microswitches)

#### 3.6. MEMS Optical Devices (MOEMS)

*   **Function:** Manipulate light.
*   **Examples:**
    *   **MEMS Mirrors (Digital Micromirror Devices - DMDs):** Array of tiny mirrors that can be individually tilted to reflect light. Used in projectors.
    *   **MEMS Optical Switches:** Redirect optical signals in fiber optic networks.
    *   **MEMS Variable Optical Attenuators:** Control the intensity of light.
    *   **MEMS Tunable Filters:** Select specific wavelengths of light.
*   **Working Principle:** Varies depending on the device. Electrostatic, piezoelectric, and thermal actuation are commonly used to move mirrors, shutters, or gratings.

**Reference:**
*   Gad-el-Hak, M. (2002). *The MEMS Handbook*. CRC Press. (Chapter 8: MOEMS - Micro-Opto-Electro-Mechanical Systems)

#### 3.7. Microfluidic Devices

*   **Function:** Manipulate and control fluids on a micro-scale.
*   **Components:** Micro-channels, micro-pumps, micro-valves, mixers, reactors.
*   **Applications:** Lab-on-a-chip (LOC) systems, drug delivery, DNA analysis, chemical synthesis.
*   **Working Principle:** Often driven by electrostatic, piezoelectric, or thermal actuators for pumping and valve control.

**Reference:**
*   Madou, M. J. (2002). *Fundamentals of Microfabrication* (2nd ed.). CRC Press. (Chapter 9: Microfluidics)

---

### 4. Important Points to Remember

*   **Scale Matters:** The micro-scale introduces unique physical phenomena (e.g., surface forces become dominant over body forces) that need to be considered in MEMS design.
*   **Actuation Mechanisms:** Understanding the principles of electrostatic, piezoelectric, piezoresistive, and thermal actuation is crucial for designing MEMS devices.
*   **Sensing Mechanisms:** Similarly, knowledge of capacitive, piezoresistive, and piezoelectric sensing is vital.
*   **Interdisciplinary Knowledge:** Successful MEMS development requires collaboration and understanding across multiple engineering disciplines.
*   **Fabrication Techniques:** The types of MEMS devices that can be fabricated are heavily influenced by the available microfabrication processes (covered in subsequent modules).
*   **Stiction:** A common problem in MEMS where surfaces stick together due to capillary forces or Van der Waals forces.

---

### 5. Practice Questions and Exercises

**Question 1:**
Define MEMS and list at least three core components typically found in a MEMS device.

**Answer 1:**
MEMS (Micro Electro Mechanical Systems) are miniaturized mechanical and electro-mechanical systems that integrate mechanical elements, sensors, actuators, and electronics on a common substrate through microfabrication technology. Three core components are:
1.  **Micro-sensors:** Convert physical phenomena into electrical signals.
2.  **Micro-actuators:** Convert electrical signals into mechanical motion.
3.  **Micro-structures:** Mechanical components like beams, diaphragms, etc.

---

**Question 2:**
Explain the fundamental working principle of a MEMS accelerometer that uses capacitive sensing.

**Answer 2:**
A MEMS accelerometer with capacitive sensing typically consists of a proof mass suspended by springs. When the device accelerates, the proof mass is displaced. This displacement changes the gap distance or overlap area between the proof mass (acting as one capacitor plate) and fixed electrodes (acting as the other plates). Since capacitance is inversely proportional to the gap distance ($C \propto 1/d$) and directly proportional to the overlap area ($C \propto A$), this change in capacitance is measured and correlated to the applied acceleration.

---

**Question 3:**
Which operating principle is fundamental to the operation of MEMS gyroscopes? Name two other common operating principles used in MEMS devices.

**Answer 3:**
The Coriolis effect is fundamental to the operation of MEMS gyroscopes.
Two other common operating principles used in MEMS devices are:
1.  Electrostatic actuation.
2.  Piezoresistive sensing.
(Other valid answers include piezoelectric, thermal, capacitive sensing, etc.)

---

**Question 4:**
Provide one example of a MEMS device and its primary application.

**Answer 4:**
**MEMS Device:** MEMS Accelerometer
**Primary Application:** Airbag deployment system in automobiles.

---

**Question 5:**
The formula for capacitance of a parallel-plate capacitor is $C = \frac{\epsilon_0 \epsilon_r A}{d}$. If a MEMS capacitive accelerometer's proof mass moves by $\Delta d$ from its equilibrium position ($d_0$), how does the capacitance change if the movement is away from the fixed electrode?

**Answer 5:**
The initial capacitance is $C_0 = \frac{\epsilon_0 \epsilon_r A}{d_0}$.
When the proof mass moves away by $\Delta d$, the new gap distance is $d_0 + \Delta d$.
The new capacitance is $C_1 = \frac{\epsilon_0 \epsilon_r A}{d_0 + \Delta d}$.
Since $d_0 + \Delta d > d_0$, the capacitance $C_1$ will be *less* than $C_0$. The change in capacitance is $\Delta C = C_1 - C_0 = \frac{\epsilon_0 \epsilon_r A}{d_0 + \Delta d} - \frac{\epsilon_0 \epsilon_r A}{d_0}$.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
