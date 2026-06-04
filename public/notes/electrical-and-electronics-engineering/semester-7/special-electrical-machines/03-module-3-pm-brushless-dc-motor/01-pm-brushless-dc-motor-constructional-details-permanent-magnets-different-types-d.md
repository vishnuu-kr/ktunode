---
title: "PM Brushless DC motor- constructional details - permanent magnets – different types - demagnetization characteristics – arrangement of permanent magnets – magnetization of permanent magnets – axial and parallel magnetizations- principle of operation – Control of BLDC motor - applications."
subject: "SPECIAL ELECTRICAL MACHINES"
module: "Module 3: PM Brushless DC motor"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f368a6"
status: "completed"
scrapedAt: "2026-05-23T16:39:38.803Z"
---
# Module 3: Permanent Magnet Brushless DC (BLDC) Motors

## Introduction

Permanent Magnet Brushless DC (BLDC) motors are a type of DC motor that uses permanent magnets for its rotor and an electronically controlled commutation system instead of brushes. This leads to several advantages like higher efficiency, longer lifespan, and reduced maintenance. This module will cover the construction, operation, control, and applications of BLDC motors, aligning with Course Outcome CO3.

**Key Concept:** Electronic commutation is the core principle that distinguishes BLDC motors from conventional brushed DC motors.

## 1. BLDC Motor - Constructional Details

A BLDC motor typically consists of two main parts:

*   **Stator:** This is the stationary part and houses the windings.
    *   **Windings:** Typically made of copper wire, these are wound around stator teeth. The number of windings and their configuration (e.g., star or delta) affect the motor's performance.
    *   **Stator Core:** Usually made of laminated steel to reduce eddy current losses.
    *   **Housing:** Provides mechanical support and protection.

*   **Rotor:** This is the rotating part and carries permanent magnets.
    *   **Permanent Magnets:** High-energy permanent magnets (like Neodymium-Iron-Boron (NdFeB) or Samarium Cobalt (SmCo)) are mounted on the rotor.
    *   **Rotor Core:** Can be a solid steel shaft or laminated steel to reduce eddy currents.

**Distinction from Brushed DC Motors:**
*   **Brushed DC Motor:** Commutator and brushes are on the rotor; windings are on the stator.
*   **BLDC Motor:** Permanent magnets are on the rotor; windings are on the stator. Commutation is electronic.

## 2. Permanent Magnets in BLDC Motors

The performance of a BLDC motor is significantly influenced by the type and arrangement of permanent magnets used.

### 2.1. Different Types of Permanent Magnets

The most common types of permanent magnets used in BLDC motors are:

*   **Neodymium-Iron-Boron (NdFeB) Magnets:**
    *   **Characteristics:** Highest magnetic energy product among commercially available magnets. Excellent magnetic strength, but susceptible to corrosion and temperature degradation.
    *   **Applications:** High-performance motors requiring maximum torque and efficiency.

*   **Samarium Cobalt (SmCo) Magnets:**
    *   **Characteristics:** Good magnetic strength, excellent resistance to high temperatures and corrosion. More brittle than NdFeB.
    *   **Applications:** High-temperature applications or where extreme reliability is needed.

*   **Ferrite (Ceramic) Magnets:**
    *   **Characteristics:** Lower magnetic strength and energy product compared to rare-earth magnets. Inexpensive and resistant to demagnetization and corrosion.
    *   **Applications:** Lower-cost and lower-performance applications where extreme torque is not critical.

**Reference:** Krishnan (2016) provides a detailed overview of different permanent magnet materials and their properties.

### 2.2. Demagnetization Characteristics

Permanent magnets can lose their magnetism if subjected to excessive opposing magnetic fields (demagnetization) or high temperatures.

*   **Demagnetization Curve (B-H Curve):** The demagnetization curve in the second quadrant of the hysteresis loop shows the relationship between the magnetic flux density (B) and the magnetic field intensity (H).
*   **Coercivity ($H_c$):** The magnetic field intensity required to reduce the flux density to zero. A higher coercivity means the magnet is more resistant to demagnetization.
*   **Remanence ($B_r$):** The residual magnetic flux density when the magnetizing field is removed. A higher remanence means a stronger magnet.
*   **Maximum Energy Product ($(BH)_{max}$):** Represents the maximum magnetic energy a magnet can store. It's a product of the remanence and coercivity.

**Factors Leading to Demagnetization:**
*   **High armature reaction:** Strong magnetic fields produced by stator currents opposing the rotor magnets.
*   **High operating temperatures:** Exceeding the Curie temperature.
*   **External magnetic fields:** Strong opposing magnetic fields.

**Important Point:** For BLDC motor applications, magnets with high coercivity and remanence are preferred to ensure robustness and performance.

### 2.3. Arrangement of Permanent Magnets on the Rotor

The arrangement of permanent magnets on the rotor influences the back EMF waveform and the motor's torque characteristics.

*   **Surface-Mounted Magnets (SPM):** Magnets are mounted on the outer surface of the rotor.
    *   **Advantages:** Simpler construction, lower rotor inertia, can achieve higher speeds.
    *   **Disadvantages:** Magnets are exposed to mechanical damage and have less protection against demagnetization due to armature reaction.

*   **Internally Mounted Magnets (IPM):** Magnets are embedded within the rotor core.
    *   **Advantages:** Better mechanical protection for magnets, enhanced resistance to demagnetization, can utilize reluctance torque (especially in IPM synchronous motors which are often confused with BLDC but are distinct).
    *   **Disadvantages:** More complex rotor construction, higher rotor inertia, potential for flux weakening.

**Common Configurations:**
*   **Two-pole rotor:** Two magnets with opposite poles facing outwards.
*   **Multi-pole rotor:** More than two magnets, creating alternating N-S poles on the rotor surface. This increases the number of magnetic poles and allows for higher torque at lower speeds or higher speeds for a given frequency.

**Example:** A 4-pole rotor would have four magnets arranged alternately N-S-N-S.

### 2.4. Magnetization of Permanent Magnets

Magnets are magnetized during their manufacturing process. The magnetization orientation determines the magnetic field produced by the rotor.

#### 2.4.1. Axial Magnetization

*   **Description:** The magnetic poles are aligned along the axis of magnetization, which is typically the diameter of the magnet. This results in the North and South poles being on opposite faces of the magnet (e.g., top and bottom).
*   **Application in BLDC:** Typically used for magnets that are segmented and arranged around the rotor circumference. Each segment is axially magnetized to create alternating poles.

#### 2.4.2. Radial Magnetization

*   **Description:** The magnetic poles are aligned along the radial direction, from the center outwards or vice-versa. This results in the North and South poles being on the inner and outer circumference of a ring-shaped magnet.
*   **Application in BLDC:** Often used for ring magnets or segment magnets where the magnetic field needs to be directed radially outward or inward.

#### 2.4.3. Parallel Magnetization (Referring to the direction of pole faces relative to the magnet's geometry)

*   **Description:** In the context of BLDC rotors, "parallel magnetization" can refer to the orientation of magnetic poles along the circumference of the rotor.
    *   **Radial Pole Faces:** The magnetic flux emerges and enters tangentially to the rotor surface, effectively creating poles along the circumference. This is the most common type of magnetization for BLDC rotors where magnets are arranged in segments around the rotor.
    *   **Axial Pole Faces:** Less common for standard cylindrical BLDC rotors, but could be seen in specialized linear or disc-type BLDC motors.

**Important Note:** The term "parallel magnetization" can sometimes be ambiguous. In BLDC motor construction, it usually refers to the magnetization pattern that creates alternating poles around the rotor circumference, often achieved with axially magnetized segments arranged radially.

## 3. Principle of Operation of BLDC Motor

The operation of a BLDC motor relies on electronically switching the stator windings in a sequence that interacts with the rotor's permanent magnets to produce continuous torque.

**Key Components for Operation:**
1.  **Permanent Magnet Rotor:** Provides a rotating magnetic field.
2.  **Stator Windings:** Energized sequentially by an electronic controller.
3.  **Position Sensor (e.g., Hall effect sensors, optical encoder, or sensorless detection):** Provides information about the rotor's angular position. This is crucial for the controller to know which stator coils to energize.
4.  **Electronic Commutator (Controller/Driver):** Typically an inverter circuit (using MOSFETs or IGBTs) that switches the current to the stator windings based on the rotor position.

**Working Steps (Simplified 3-phase, 6-step commutation):**

Consider a 3-phase BLDC motor with three windings (A, B, C) on the stator and a 2-pole rotor (one North, one South pole).

1.  **Rotor Position Detection:** A sensor indicates the rotor's position.
2.  **Commutation Sequence:** Based on the rotor position, the electronic commutator energizes two stator windings at a time, creating a magnetic field that attracts the rotor magnets, causing rotation.
3.  **Torque Production:** The interaction between the stator magnetic field and the rotor permanent magnet field generates Lorentz force, resulting in torque.
4.  **Continuous Rotation:** As the rotor moves, the sensors detect its new position, and the controller switches the current to the next pair of stator windings, ensuring that the stator magnetic field always "chases" the rotor magnets, maintaining continuous torque.

**Back EMF (Electromotive Force):**
*   As the rotor magnets rotate, they induce a voltage in the stator windings. This is called Back EMF.
*   The waveform of the Back EMF is ideally trapezoidal in BLDC motors (due to the nature of the magnetic field and winding distribution), which is why they are often called trapezoidal BLDC motors.
*   The magnitude of Back EMF is proportional to the rotor speed and the magnetic flux.

**Commutation Strategy:**
*   The commutation process ensures that the stator magnetic field is always in a position to produce maximum torque.
*   There are 6 distinct switching states in a 2-pole motor for 360 degrees of electrical rotation. Each state lasts for 60 electrical degrees.
*   During each state, two windings are energized (e.g., phase A and phase B), and one winding is de-energized (e.g., phase C).

**Example (6-step commutation for a 3-phase motor):**

| Rotor Position (electrical degrees) | Phase A | Phase B | Phase C |
| :---------------------------------- | :------ | :------ | :------ |
| 0 - 60                              | Forward | Off     | Reverse |
| 60 - 120                            | Forward | Reverse | Off     |
| 120 - 180                           | Off     | Reverse | Forward |
| 180 - 240                           | Reverse | Off     | Forward |
| 240 - 300                           | Reverse | Forward | Off     |
| 300 - 360                           | Off     | Forward | Reverse |

**Important Point:** The timing of the stator winding energization with respect to the rotor position is critical for efficient operation.

## 4. Control of BLDC Motor

Controlling a BLDC motor involves managing the electronic commutation and adjusting the motor's speed and torque.

### 4.1. Electronic Commutation

As discussed in the principle of operation, electronic commutation is achieved using a power electronic converter (inverter) controlled by a microcontroller or dedicated logic.

*   **Position Sensing:**
    *   **Hall Effect Sensors:** Commonly used. Three sensors are placed at 60 electrical degrees apart, detecting the magnetic poles of the rotor.
    *   **Optical Encoders:** Provide high-resolution position information but are more complex and expensive.
    *   **Sensorless Control:** Techniques that estimate rotor position by analyzing the Back EMF or current ripple, eliminating the need for physical sensors. This is crucial for cost-sensitive or harsh environment applications.

*   **Commutation Logic:** A microcontroller or dedicated ASIC receives position information and generates switching signals for the power transistors (MOSFETs/IGBTs) of the inverter.

### 4.2. Speed and Torque Control

*   **Voltage Control (Duty Cycle Modulation - PWM):**
    *   The speed and torque of a BLDC motor are controlled by varying the voltage supplied to the stator windings.
    *   Pulse Width Modulation (PWM) is the most common method. The DC bus voltage is switched on and off at a high frequency. The duty cycle (the ratio of ON time to the total switching period) determines the average voltage applied to the windings.
    *   Increasing the duty cycle increases the average voltage, resulting in higher speed and torque.

*   **Field Weakening (for high-speed operation):**
    *   In some applications, it's necessary to operate the motor above its base speed. This is achieved by reducing the effective magnetic flux from the permanent magnets.
    *   In BLDC motors, field weakening can be achieved by adjusting the commutation timing (advancing or retarding the phase switching relative to the rotor position) or by modulating the current in a specific way that opposes the rotor's magnetic field. This can lead to reduced torque capability.

**Reference:** Miller (1989) and Krishnan (2016) provide in-depth analyses of various control strategies, including PWM techniques and field-weakening methods.

## 5. Applications of BLDC Motors

BLDC motors are widely used due to their high efficiency, reliability, and controllability.

*   **Consumer Electronics:**
    *   Computer cooling fans
    *   Hard disk drives
    *   Washing machines
    *   Refrigerators
    *   Vacuum cleaners
    *   Power tools (drills, saws)

*   **Automotive Industry:**
    *   Electric power steering (EPS)
    *   HVAC blowers
    *   Wiper motors
    *   Fuel pumps
    *   Electric vehicles (EVs) and hybrid EVs (often use PMSM, which are similar but with sinusoidal back EMF)

*   **Aerospace:**
    *   Actuators
    *   Fans

*   **Medical Devices:**
    *   Surgical tools
    *   Pumps

*   **Industrial Automation:**
    *   Robotics
    *   Conveyor systems
    *   Pumps and fans

**Why BLDC are preferred in these applications:**
*   **High Efficiency:** Reduced friction and electrical losses compared to brushed DC motors.
*   **Long Lifespan:** No brushes to wear out.
*   **Low Noise:** Electronic commutation is quieter than mechanical commutation.
*   **High Power Density:** More power for a given size and weight.
*   **Precise Speed Control:** Easy to achieve variable speed operation.

**Course Outcome Alignment:**
*   **CO3:** This module directly addresses the constructional details, working, and drive circuits (through control aspects) of brushless DC motors.

## Important Points to Remember

*   **Electronic Commutation:** The defining feature of BLDC motors, replacing mechanical brushes.
*   **Rotor Position Sensing:** Crucial for accurate electronic commutation. Hall sensors are common, but sensorless methods are gaining popularity.
*   **Permanent Magnets:** NdFeB and SmCo are preferred for their high energy product and coercivity.
*   **Back EMF:** Trapezoidal in nature for BLDC motors, indicating the motor's speed and polarity.
*   **PWM Control:** Used to vary voltage, thereby controlling speed and torque.
*   **Applications:** Driven by their efficiency, reliability, and precise control.

## Practice Questions and Answers

**Question 1:** What is the main advantage of using permanent magnets in the rotor of a BLDC motor compared to the windings in a conventional DC motor?

**Answer:** The main advantage is the elimination of brushes and a mechanical commutator. This leads to reduced friction, wear, electrical sparking, and consequently, higher efficiency, longer lifespan, and lower maintenance.

**Question 2:** Name two common types of permanent magnets used in BLDC motors and state one characteristic for each.

**Answer:**
1.  **Neodymium-Iron-Boron (NdFeB):** Highest magnetic energy product, excellent magnetic strength.
2.  **Samarium Cobalt (SmCo):** Good magnetic strength, excellent resistance to high temperatures and corrosion.

**Question 3:** Briefly explain the role of Hall effect sensors in a BLDC motor.

**Answer:** Hall effect sensors detect the angular position of the rotor by sensing the magnetic field of the permanent magnets. This position information is fed to the electronic controller, which then energizes the appropriate stator windings to produce continuous torque.

**Question 4:** What is PWM control and how is it used in BLDC motor drives?

**Answer:** PWM (Pulse Width Modulation) is a technique where the voltage supplied to the motor is switched on and off rapidly. The duty cycle (ratio of ON time to the total period) of this switching determines the average voltage applied. In BLDC motors, PWM is used to control the average voltage applied to the stator windings, thereby regulating the motor's speed and torque.

**Question 5:** Differentiate between surface-mounted magnets (SPM) and internally mounted magnets (IPM) on a BLDC rotor.

**Answer:**
*   **SPM:** Magnets are mounted on the outer surface of the rotor. They offer simpler construction, lower inertia, and higher potential speeds, but are more exposed to damage and demagnetization.
*   **IPM:** Magnets are embedded within the rotor core. They offer better mechanical protection and improved resistance to demagnetization but involve more complex rotor construction and can lead to higher inertia.

## Conclusion

BLDC motors represent a significant advancement in motor technology, offering superior performance characteristics. Understanding their construction, the properties of permanent magnets, the principle of electronic commutation, and control strategies is essential for their effective application across various industries. This module has provided a foundation for understanding these key aspects.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
