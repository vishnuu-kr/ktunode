---
title: "Transformer and Generator & Motor : Types of faults"
subject: "DIGITAL PROTECTION OF POWER SYSTEMS"
module: "Module 2: Protection of Transmission Lines:  Schemes of distance protection"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36582"
status: "completed"
scrapedAt: "2026-05-23T16:25:55.538Z"
---
# Digital Protection of Power Systems - Module 2: Protection of Transmission Lines: Schemes of Distance Protection

## Topic: Transformer and Generator & Motor: Types of Faults

This topic, while located within the module on Transmission Line Protection Schemes, focuses on understanding the types of faults that can occur in transformers, generators, and motors. This knowledge is crucial for selecting appropriate protection schemes for these critical power system components, even though the primary focus of this module is distance protection for transmission lines.

### Learning Outcomes Addressed:

*   **CO1:** Identify the relay protection scheme suitable for overcurrent, differential and distance protection. (Knowledge Level: K3) - Understanding fault types is foundational to selecting appropriate schemes.
*   **CO2:** Develop the protection scheme for bus bars, transformers, generators, motors and distribution systems using appropriate protective relays (Knowledge Level: K3) - This directly relates to understanding fault behavior in these equipment.
*   **CO3:** Illustrate the operation of a numerical relay. (Knowledge Level: K2) - While not directly about numerical relay operation, fault identification is a primary input to numerical relay algorithms.
*   **CO4:** Explain signal processing methods and algorithms in digital protection (Knowledge Level: K2) - Understanding fault characteristics helps in designing and interpreting signal processing algorithms.
*   **CO5:** Infer emerging protection schemes in power systems (Knowledge Level: K3) - Knowledge of traditional fault types informs the development of advanced protection.

---

### 1. Introduction to Faults in Power Systems

Faults are abnormal conditions in a power system that result in a deviation from the normal flow of current. They are typically caused by insulation breakdown due to overvoltage, mechanical damage, environmental factors, or equipment failure. Understanding the nature and characteristics of different fault types is essential for designing effective protection schemes.

**Key Concept:** Faults are the primary drivers for protective relay operation. The speed and accuracy of fault detection and isolation are critical for maintaining system stability and preventing damage to equipment.

---

### 2. Types of Faults in Power Systems

Faults can be broadly categorized into **unsymmetrical (or unbalanced)** and **symmetrical (or balanced)** faults.

#### 2.1 Unsymmetrical Faults

These are the most common types of faults in power systems. They occur when the electrical symmetry of the system is disrupted, leading to unequal current and voltage magnitudes in the phases.

*   **Single Line-to-Ground (SLG) Fault:**
    *   **Description:** One phase conductor comes into contact with the ground or a grounded metallic object.
    *   **Occurrence:** Accounts for approximately 70-80% of all faults in overhead transmission lines.
    *   **Characteristics:**
        *   Causes unbalance in phase currents and voltages.
        *   Low fault current in comparison to three-phase faults, but can be significant depending on system grounding.
        *   Often results in overvoltages in the unfaulted phases.
    *   **Example:** A tree falling on a single phase conductor of a transmission line, causing it to touch the earth.

*   **Line-to-Line (LL) Fault:**
    *   **Description:** Two phase conductors come into contact with each other, without involving the ground.
    *   **Occurrence:** Accounts for about 10-15% of all faults.
    *   **Characteristics:**
        *   Causes unbalance in phase currents and voltages.
        *   Fault current is typically higher than SLG faults but lower than three-phase faults.
        *   The unfaulted phase experiences an overvoltage.
    *   **Example:** A bird bridging the gap between two conductors of a transmission line.

*   **Double Line-to-Ground (DLG) Fault:**
    *   **Description:** Two phase conductors come into contact with each other and also with the ground.
    *   **Occurrence:** Accounts for about 5-10% of all faults.
    *   **Characteristics:**
        *   Causes significant unbalance in phase currents and voltages.
        *   Fault current is generally higher than LL faults and can be comparable to three-phase faults in effectively grounded systems.
        *   Can lead to significant voltage unbalance.
    *   **Example:** Two conductors of a transmission line breaking and falling to the ground, or a faulted conductor touching another conductor and the ground simultaneously.

#### 2.2 Symmetrical Faults

These are less common but generally result in the highest fault currents. They occur when all three phases are simultaneously affected, maintaining the electrical symmetry of the system.

*   **Three-Phase Fault (or Symmetrical Three-Phase Fault):**
    *   **Description:** All three phase conductors come into contact with each other or with the ground simultaneously.
    *   **Occurrence:** Accounts for less than 5% of all faults.
    *   **Characteristics:**
        *   The system remains electrically balanced, but with very high fault currents.
        *   Voltages in all phases drop significantly, ideally to zero at the fault location.
        *   Results in the highest fault current levels due to the direct connection of all three phases.
    *   **Example:** A tower collapse where all three conductors touch each other and the ground.

#### **Important Point:**

*   The relative severity of faults (in terms of fault current magnitude) is generally: **Three-Phase Fault > Double Line-to-Ground Fault > Line-to-Line Fault > Single Line-to-Ground Fault.** However, this can vary depending on system grounding and impedance.

---

### 3. Faults in Transformers

Transformers are critical components and are subject to various types of faults, both internal and external.

#### 3.1 Internal Faults (within the transformer windings or core)

These are the most severe and damaging faults for a transformer and require rapid detection and isolation.

*   **Winding Faults:**
    *   **Turn-to-Turn Fault:** Short circuit between adjacent turns of the same winding.
        *   **Characteristics:** Leads to localized heating, increased current in the shorted turns, and abnormal current flow in the unfaulted turns. Can escalate to phase-to-phase or phase-to-ground faults.
    *   **Phase-to-Phase Winding Fault:** Short circuit between two points on the same winding or between windings of different phases.
        *   **Characteristics:** High circulating current, localized overheating, and potential for significant damage.
    *   **Phase-to-Ground Winding Fault:** Short circuit between a point in the winding and the transformer tank or core (which is grounded).
        *   **Characteristics:** Similar to SLG faults on transmission lines but occurring within the transformer. Current path is through the winding, the fault, and the ground connection.

*   **Core Faults:**
    *   **Core-to-Ground Fault:** Short circuit between a part of the magnetic core and the transformer tank.
        *   **Characteristics:** Causes eddy currents to flow in the core, leading to localized overheating and potential insulation damage.

*   **Inter-winding Faults:**
    *   **Short circuit between windings of different voltage levels or between primary and secondary windings.**
        *   **Characteristics:** High fault currents and significant power transfer to the fault.

#### 3.2 External Faults (occurring on the connected power system)

These are faults on the transmission lines or busbars connected to the transformer terminals.

*   **Line-to-Ground, Line-to-Line, Double Line-to-Ground, and Three-Phase faults on the connected high-voltage or low-voltage lines.**
    *   **Characteristics:** The transformer will carry the fault current from the system. The magnitude of this current depends on the transformer's impedance and the fault type and location.

#### 3.3 Other Transformer Faults

*   **Open Circuit Faults:** Failure of a connection within the transformer or on the external circuit (e.g., a blown fuse or open breaker pole).
    *   **Characteristics:** Leads to an unbalanced flow of current, often causing a single-phase operation if not properly protected.
*   **Overheating:** Due to overloaded conditions or cooling system failures.
    *   **Characteristics:** Not a direct electrical fault, but leads to insulation degradation and eventual electrical faults.

**Reference:**
*   **Badri Ram and D. N. Viswakarma, "Power System Protection and Switchgear":** Chapter 9 "Transformer Protection" provides a detailed discussion on transformer faults and their protection schemes.
*   **A. T. Johns and S. K. Salman, "Digital Protection of Power System":** Chapter 7 "Protection of Transformers" and Chapter 8 "Protection of Generators and Motors" cover fault analysis relevant to these equipment.

---

### 4. Faults in Generators

Generators are the source of power, and faults within them can lead to severe damage and system instability.

#### 4.1 Internal Faults (within the generator)

*   **Stator Winding Faults:**
    *   **Phase-to-Phase Winding Fault:** Short circuit between two phases of the stator winding.
        *   **Characteristics:** Large circulating currents, significant unbalance, and rapid overheating.
    *   **Phase-to-Ground Winding Fault:** Short circuit between a stator winding and the generator frame (ground).
        *   **Characteristics:** The most common type of internal generator fault. Current flows from the unfaulted phases through the winding to the fault. Magnitude depends on the generator's neutral grounding.
    *   **Turn-to-Turn Fault:** Short circuit between turns of the same stator winding.
        *   **Characteristics:** Similar to transformer turn-to-turn faults, leading to localized heating.

*   **Rotor Winding Faults:**
    *   **Field Winding Ground Fault:** Short circuit between a part of the field winding and the rotor core.
        *   **Characteristics:** Introduces unbalance in the magnetic field, leading to oscillating torques, voltage unbalance, and potential vibration.
    *   **Rotor Winding Short Circuit (turn-to-turn):** Short circuit between turns of the field winding.
        *   **Characteristics:** Reduces the main field strength, leading to lower voltage output and potential instability.

#### 4.2 External Faults (on the connected power system)

*   **All types of faults (SLG, LL, DLG, 3-phase) on the connected transmission lines or busbars.**
    *   **Characteristics:** The generator will supply fault current to the external fault. The magnitude is determined by the generator's sub-transient reactance and voltage.

#### 4.3 Other Generator Faults

*   **Overexcitation:** Excessive field current leading to high voltage and potentially saturation of the magnetic circuit.
    *   **Characteristics:** Not an electrical fault but can lead to insulation stress and overheating.
*   **Overloading:** Carrying current beyond its rated capacity.
    *   **Characteristics:** Leads to overheating and potential insulation damage.
*   **Loss of Excitation:** Failure of the excitation system, causing the generator to operate asynchronously or lose synchronism.
    *   **Characteristics:** Leads to voltage and reactive power drop, and potential reverse power flow.
*   **Unbalanced Loading:** Unequal loading of the three phases.
    *   **Characteristics:** Causes negative sequence currents, which can lead to overheating and vibration.

**Reference:**
*   **A. G. Phadke and James S. Thorpe, "Computer Relaying for Power Systems":** Chapter 9 "Generator Protection" discusses the specific fault conditions generators are subjected to and the corresponding protection strategies.
*   **A. T. Johns and S. K. Salman, "Digital Protection of Power System":** Chapter 8 "Protection of Generators and Motors" provides insights into generator fault analysis.

---

### 5. Faults in Motors

Motors are essential for industrial applications, and faults can disrupt operations and cause damage.

#### 5.1 Internal Faults (within the motor)

*   **Stator Winding Faults:**
    *   **Phase-to-Phase Winding Fault:** Short circuit between two phases of the stator winding.
        *   **Characteristics:** High current, unbalanced magnetic pull, vibration, and rapid overheating.
    *   **Phase-to-Ground Winding Fault:** Short circuit between a stator winding and the motor frame (ground).
        *   **Characteristics:** Common type of motor fault, leading to current flow through the ground path.
    *   **Turn-to-Turn Fault:** Short circuit between turns of the same stator winding.
        *   **Characteristics:** Localized heating, reduced efficiency, and can develop into phase-to-phase faults.

*   **Rotor Faults:**
    *   **Broken Rotor Bars (Squirrel Cage Motors):** The cage conductors can break due to thermal stress or vibration.
        *   **Characteristics:** Leads to unbalanced currents, increased vibration, reduced torque, and audible noise.
    *   **Short-Circuited Rotor Cage:** Short circuits between rotor bars or end rings.
        *   **Characteristics:** Causes unbalanced magnetic pull and vibration.

#### 5.2 External Faults (on the connected power system)

*   **All types of faults (SLG, LL, DLG, 3-phase) on the connected feeder or busbar.**
    *   **Characteristics:** The motor will draw fault current from the system.

#### 5.3 Other Motor Faults

*   **Overloading:** Motor operating at a load exceeding its rated capacity.
    *   **Characteristics:** Causes overheating of windings, reduced insulation life, and eventual insulation breakdown.
*   **Under/Overvoltage:** Significant deviations from the rated voltage.
    *   **Characteristics:** Under-voltage reduces torque and can lead to stalling, while overvoltage can cause core saturation and overheating.
*   **Phase Imbalance:** Unequal voltages in the three phases.
    *   **Characteristics:** Leads to negative sequence currents, which cause overheating and vibration due to double-frequency magnetic field.
*   **Loss of Supply Phase:** One phase of the three-phase supply is interrupted.
    *   **Characteristics:** Motor operates on two phases, leading to unbalanced currents and severe overheating.
*   **Stalling/Locked Rotor:** Motor shaft is prevented from rotating.
    *   **Characteristics:** Motor draws very high current (starting current), leading to rapid overheating if not limited.

**Reference:**
*   **Badri Ram and D. N. Viswakarma, "Power System Protection and Switchgear":** Chapter 10 "Motor Protection" covers motor-specific fault types and protection strategies.
*   **A. T. Johns and S. K. Salman, "Digital Protection of Power System":** Chapter 8 "Protection of Generators and Motors" provides a good overview.

---

### 6. Relevance to Distance Protection Schemes (Module Focus)

While this topic is about fault types in transformers, generators, and motors, it's important to understand how these faults relate to the primary focus of this module: distance protection of transmission lines.

*   **External Faults:** Faults occurring on transmission lines connected to transformers, generators, or motors are the primary targets for distance relays. The characteristics of these faults (current magnitude, voltage levels, phase angles) are what distance relays measure to determine fault location.
*   **Fault Current Contribution:** Transformers, generators, and motors all contribute to fault currents on the transmission system. Understanding their impedances and their contribution to fault current is crucial for setting distance relays accurately, especially for faults near these connected equipment.
*   **System Grounding:** The grounding method of transformers (e.g., solidly grounded, resistance grounded, ungrounded) significantly impacts the magnitude of SLG fault currents and the performance of distance relays for such faults.
*   **Load Characteristics:** Motors, especially during starting, can present significant reactive power and current draw, which needs to be distinguished from fault conditions by distance relays.
*   **Internal vs. External Faults:** Distance relays are primarily designed for faults on the transmission line itself. They are generally *not* suitable for detecting internal faults within transformers, generators, or motors. Dedicated differential or other specific protection schemes are used for these internal faults.

---

### 7. Key Concepts and Definitions

*   **Fault:** An abnormal condition that involves a deviation from normal operation.
*   **Unsymmetrical Faults:** Faults that cause imbalance in phase currents and voltages (SLG, LL, DLG).
*   **Symmetrical Faults:** Faults that maintain system balance but result in high currents (3-phase fault).
*   **Sequence Components:** A mathematical tool (positive, negative, and zero sequence) used to analyze unbalanced conditions in power systems.
*   **Fault Impedance:** The impedance encountered by the fault current, including the impedance of the faulted conductors and any intervening resistance (like a tree in an SLG fault).
*   **Short Circuit Current:** The high current that flows during a fault condition.
*   **Internal Faults:** Faults occurring within the windings, core, or other internal components of a piece of equipment.
*   **External Faults:** Faults occurring on the power system external to the equipment.

---

### 8. Practice Questions and Exercises

**Question 1:**
Which type of fault is most common in overhead transmission lines?
a) Three-Phase Fault
b) Line-to-Line Fault
c) Single Line-to-Ground Fault
d) Double Line-to-Ground Fault

**Answer:** c) Single Line-to-Ground Fault

**Question 2:**
A fault where two phase conductors short circuit with each other, but not with the ground, is known as a:
a) Single Line-to-Ground Fault
b) Line-to-Line Fault
c) Double Line-to-Ground Fault
d) Three-Phase Fault

**Answer:** b) Line-to-Line Fault

**Question 3:**
Which of the following faults typically results in the highest fault current magnitude?
a) Single Line-to-Ground Fault
b) Line-to-Line Fault
c) Double Line-to-Ground Fault
d) Three-Phase Fault

**Answer:** d) Three-Phase Fault

**Question 4:**
Describe the primary difference between internal and external faults in a transformer. Why are specific protection schemes required for internal faults?

**Answer:**
An **internal fault** occurs within the transformer's windings, core, or other internal components. An **external fault** occurs on the transmission lines or busbars connected to the transformer. Internal faults are often more damaging and localized, requiring fast-acting protection like differential relays that compare currents entering and leaving the transformer. External faults are managed by system-wide protection like distance relays.

**Question 5:**
For a generator, what is a "loss of excitation" fault, and what are its primary consequences?

**Answer:**
A loss of excitation fault occurs when the field winding of the generator loses its DC current supply (due to failure in the excitation system). The primary consequences are a significant drop in terminal voltage and reactive power output. The generator may also lose synchronism with the rest of the power system, leading to instability and potentially reverse power flow, which can damage the generator.

**Question 6:**
Explain why a "turn-to-turn" fault in a motor stator winding is particularly problematic and how it can escalate.

**Answer:**
A turn-to-turn fault involves a short circuit between adjacent turns of the same winding. This creates a localized high current loop, leading to intense heating at the fault location. It reduces the effective number of turns in the winding, altering the magnetic field distribution and reducing motor efficiency. If not quickly cleared, the localized heating can degrade the insulation between turns, potentially escalating into a phase-to-phase or phase-to-ground fault, which is much more severe and damaging.

---

### 9. Important Points to Remember

*   Fault types dictate the required protection strategy.
*   Unsymmetrical faults are far more common than symmetrical faults.
*   Internal faults in transformers, generators, and motors are often more severe and require specialized protection schemes (e.g., differential, Buchholz, loss-of-field relays).
*   Distance relays primarily protect transmission lines and are set based on fault current contributions from connected equipment like transformers, generators, and motors.
*   System grounding significantly affects the magnitude and characteristics of faults, especially single line-to-ground faults, and impacts the performance of protection relays.
*   Understanding the behavior of generators and motors during faults (e.g., current contribution, voltage dips) is crucial for setting and coordinating distance relays on transmission lines.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 10. Further Reading and References

*   **Digital Protection of Power System by A. T. Johns and S. K. Salman:** Chapters on Transformer and Generator/Motor protection.
*   **Computer Relaying for Power Systems by A. G. Phadke and James S. Thorpe:** Chapters related to specific equipment protection.
*   **Power System Protection and Switchgear by Badri Ram and D. N. Viswakarma:** Comprehensive coverage of protection for all power system equipment.
*   **Digital Signal Processing in Power System Protection and Control by Waldemar Rebizant:** While focused on DSP, understanding fault characteristics is key to implementing these algorithms.

This section provides a foundational understanding of fault types in transformers, generators, and motors. This knowledge is directly applicable to developing and understanding the protection schemes discussed in subsequent sections of this module on distance protection for transmission lines.