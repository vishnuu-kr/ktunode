---
title: "Current/Resistance/reactance to voltage circuits, bridge circuits applications."
subject: "MECHATRONICS"
module: "Module 1: Sensors and signal conditioning : Introduction to Mechatronics: Structure of Mechatronics system."
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463f07"
status: "completed"
scrapedAt: "2026-05-20T18:14:37.539Z"
---
# MECHATRONICS: Module 1 - Sensors and Signal Conditioning

## Topic: Current/Resistance/Reactance to Voltage Circuits and Bridge Circuits Applications

This module introduces the fundamental building blocks of mechatronic systems, focusing on sensors and how their outputs are processed. This specific topic delves into how physical quantities like current, resistance, and reactance are converted into usable voltage signals, and explores the critical role of bridge circuits in various sensing applications.

### 1. Introduction to Mechatronics and System Structure

Before diving into specific circuits, it's essential to understand the context.

*   **Definition of Mechatronics:** A synergistic integration of mechanical engineering, electronics, control engineering, and computer science to design and manufacture products and processes.
    *   **Key Idea:** Blending disciplines for enhanced functionality and intelligence in systems. (Bolton, Ch 1)
    *   **Examples:** Robotic arms, automatic transmissions, autofocus cameras, inkjet printers.
*   **Structure of a Mechatronic System:** A typical mechatronic system comprises several interconnected subsystems:
    *   **Sensors:** Detect and measure physical quantities (e.g., temperature, pressure, position, light). They are the "eyes and ears" of the system.
    *   **Signal Conditioning:** Processes raw sensor signals to make them suitable for further processing (e.g., amplification, filtering, conversion).
    *   **Microcontrollers/Processors:** The "brain" of the system, processing sensor data, making decisions, and controlling actuators. (Relates to CO5)
    *   **Actuators:** Convert electrical signals into physical actions (e.g., motors, solenoids, hydraulic cylinders). They are the "muscles" of the system. (Relates to CO2)
    *   **Power Electronics:** Interface between the low-power control signals and the high-power actuators.
    *   **User Interface:** Allows for human interaction and control.
    *   **Mechanical Components:** The physical structure and moving parts of the system.

**Important Point:** Sensors are the crucial first step in acquiring information about the environment or the system itself. Their output must be processed effectively.

---

### 2. Current/Resistance/Reactance to Voltage Circuits

Many sensors produce outputs that are not directly a voltage. These circuits are vital for converting these varying physical parameters into a voltage signal that can be read by microcontrollers or other processing units.

#### 2.1. Converting Current to Voltage (Current-to-Voltage Converters)

*   **Concept:** A current-to-voltage (I/V) converter transforms an input current into a proportional output voltage.
*   **Circuitry:** The simplest and most common I/V converter uses a resistor.
    *   **Ohm's Law:** $V = I \times R$. If a known, constant resistance ($R$) is used, the voltage ($V$) across it will be directly proportional to the current ($I$) flowing through it.
    *   **Implementation:** A resistor connected in series with the current source. The voltage across the resistor is measured.
*   **Applications:**
    *   **Photodiodes:** Often used as current sources when illuminated. An I/V converter converts this current into a voltage for measurement. (Relates to CO1)
    *   **Current Shunt Resistors:** Measuring large currents by measuring the small voltage drop across a very low resistance shunt.
*   **Considerations:**
    *   **Resistor Tolerance:** The accuracy of the voltage output depends on the accuracy of the resistor.
    *   **Op-Amps:** For more precise conversion and to provide buffering or gain, operational amplifiers (op-amps) are often used in I/V converter configurations.
        *   **Transimpedance Amplifier:** A common op-amp configuration that converts current to voltage, offering high input impedance and controlled output. (Bolton, Ch 4)

#### 2.2. Converting Resistance to Voltage (Resistance-to-Voltage Converters)

*   **Concept:** Many sensors exhibit a change in resistance in response to a physical parameter (e.g., temperature, strain, light). These circuits convert this resistance change into a voltage change.
*   **Methods:**
    *   **Voltage Divider:**
        *   **Circuit:** A fixed resistor ($R_1$) is connected in series with the sensor resistor ($R_{sensor}$). A voltage source ($V_{in}$) is applied across the series combination. The output voltage ($V_{out}$) is taken across one of the resistors.
        *   **Formula:** If $V_{out}$ is taken across $R_{sensor}$: $V_{out} = V_{in} \times \frac{R_{sensor}}{R_1 + R_{sensor}}$.
        *   **How it works:** As $R_{sensor}$ changes, the ratio of $R_{sensor}$ to the total resistance changes, thus altering $V_{out}$.
        *   **Applications:**
            *   **Thermistors (NTC/PTC):** Temperature-dependent resistors. Using a thermistor in a voltage divider allows temperature to be measured as a voltage. (Relates to CO1)
            *   **Photoresistors (LDRs):** Light-dependent resistors. The voltage output changes with ambient light levels. (Relates to CO1)
            *   **Potentiometers:** Variable resistors used for position sensing. (Relates to CO1)
    *   **Wheatstone Bridge (Covered in detail in Section 3):** A more sensitive and often preferred method for resistance-based sensing.
*   **Considerations:**
    *   **Linearity:** Voltage dividers might not provide a perfectly linear output with respect to the resistance change, depending on the sensor's characteristics.
    *   **Loading Effects:** The impedance of the subsequent circuitry can affect the voltage divider's accuracy.

#### 2.3. Converting Reactance to Voltage (Reactance-to-Voltage Converters)

*   **Concept:** Some sensors, particularly those based on capacitive or inductive principles, change their reactance (opposition to AC current flow) in response to a physical parameter. These circuits convert this reactance change into a voltage.
*   **Methods:**
    *   **Capacitive Sensors:**
        *   **Principle:** Change in capacitance due to changes in distance between plates, dielectric material, or overlapping area.
        *   **Circuit:** Often use an oscillator circuit where the sensor capacitance forms part of the timing or feedback network. The change in capacitance alters the oscillation frequency or amplitude, which can then be converted to a voltage.
        *   **Examples:** Proximity sensors, touch sensors, humidity sensors.
    *   **Inductive Sensors:**
        *   **Principle:** Change in inductance due to changes in magnetic field or the presence of ferromagnetic materials.
        *   **Circuit:** Similar to capacitive sensors, inductance can be incorporated into oscillator circuits or resonant circuits (e.g., LC circuits). Changes in inductance affect the resonant frequency or impedance.
        *   **Examples:** Proximity sensors (detecting metal), LVDTs (Linear Variable Differential Transformers) for displacement sensing.
*   **Considerations:**
    *   **AC Signal:** Requires an AC excitation signal, unlike most resistive sensors which use DC.
    *   **Frequency Domain Analysis:** Understanding the behavior of circuits in the frequency domain is crucial for designing these converters. (Could relate to CO3 if mathematical modeling is involved).
    *   **Shielding:** Capacitive and inductive sensors can be susceptible to electromagnetic interference (EMI), requiring careful shielding.

---

### 3. Bridge Circuits and Applications

Bridge circuits are highly versatile configurations used to measure small changes in resistance, capacitance, or inductance with high sensitivity and accuracy.

#### 3.1. The Wheatstone Bridge

*   **Concept:** A fundamental circuit for precise measurement of resistance. It consists of four resistors arranged in a diamond shape.
*   **Circuit Diagram:**
    ```
          V_in
           |
          R1 --+-- R2
           |    |
          R3 --+-- R4
           |
          GND
    ```
    The output voltage ($V_{out}$) is measured across the junction of R1/R3 and R2/R4.

*   **Balancing Condition:** The bridge is "balanced" when the ratio of resistances in the two legs are equal: $\frac{R_1}{R_3} = \frac{R_2}{R_4}$. In a balanced condition, $V_{out} = 0$.
*   **Operation with Sensors:** In sensing applications, at least one of the resistors is replaced by a sensor (e.g., a strain gauge, thermistor).
    *   **If $R_1$ is replaced by a sensor ($R_S$):** The bridge is balanced initially. When the sensor's resistance changes due to the physical phenomenon, the bridge becomes unbalanced, producing a non-zero output voltage ($V_{out}$).
    *   **Formula for Output Voltage (Unbalanced Condition):**
        $V_{out} = V_{in} \left( \frac{R_S}{R_1 + R_S} - \frac{R_2}{R_2 + R_4} \right)$
        (Assuming $R_1$ is the sensor, $R_2$ and $R_4$ are fixed, and $R_3$ is a reference resistor with the same nominal value as $R_S$.)
    *   **Sensitivity:** The sensitivity of the bridge (change in $V_{out}$ per unit change in sensor resistance) is maximized when the bridge is initially balanced.
*   **Applications:**
    *   **Strain Gauges:** Strain gauges change resistance when stretched or compressed. Placing them in a Wheatstone bridge configuration allows for precise measurement of strain, which is crucial in structural health monitoring, load cells (for weighing), and pressure sensors. (Relates to CO1)
    *   **Thermistors:** As mentioned, thermistors can be used in bridges for more sensitive temperature measurements compared to a simple voltage divider, especially for detecting small temperature changes. (Relates to CO1)
    *   **Load Cells:** Typically use multiple strain gauges arranged in a bridge to measure force by detecting the deformation of a spring element. (Relates to CO1, CO7)
    *   **Pressure Sensors:** Many pressure sensors use diaphragm deflection that causes strain on embedded strain gauges, forming a bridge. (Relates to CO1, CO7)

#### 3.2. Other Bridge Configurations (Brief Mention)

*   **Capacitance Bridge:** Used for measuring changes in capacitance, often employing AC excitation.
*   **Inductance Bridge:** Used for measuring changes in inductance.
*   **Maxwell Bridge:** Used for measuring inductance by comparing it with known capacitance and resistance.

**Important Point:** Bridge circuits are essential for amplifying small changes from resistive sensors, providing a more sensitive and often more accurate measurement than simple voltage dividers. They can also help compensate for temperature drift if properly designed with matched components. (Bolton, Ch 4; Rajput, Ch 3)

---

### 4. Relating to Course Outcomes (COs) and Knowledge Levels (K)

*   **CO1 (K2 - Understand characteristics and working of sensors):** This entire topic directly supports CO1. Understanding I/V converters, R/V converters, and bridge circuits is fundamental to understanding how various sensors (resistive, capacitive, inductive) operate and how their outputs are made usable.
    *   **Example:** Explaining how a thermistor in a voltage divider or bridge circuit works to measure temperature demonstrates understanding of the sensor's characteristics (resistance change with temperature) and its working principle when interfaced.
*   **CO2 (K2 - Understand characteristics and working of actuators):** While not directly about actuators, the voltage signals generated by these circuits are the inputs for actuators. A well-conditioned sensor signal ensures the actuator receives the correct command.
*   **CO3 (K2 - Understand mathematical modeling):** Understanding the formulas for voltage dividers and bridge circuits (e.g., $V_{out} = V_{in} \frac{R_{sensor}}{R_1 + R_{sensor}}$ or the more complex bridge equation) involves basic mathematical modeling of these electrical circuits.
*   **CO4 (K3 - Use of PLC for automation):** The voltage signals produced are what a PLC would typically read through its analog input modules. Understanding these signals is a prerequisite for programming PLCs to react to sensor data.
*   **CO5 (K3 - Use and characteristics of microcontrollers):** Microcontrollers' Analog-to-Digital Converters (ADCs) read these voltage signals. Understanding the voltage range, resolution, and noise characteristics of these signals is crucial for selecting and programming microcontrollers.
*   **CO6 (K2 - MEMs devices):** Many MEMs sensors (e.g., MEMs accelerometers, pressure sensors) rely on capacitive or piezoresistive principles, making the understanding of reactance-to-voltage and resistance-to-voltage circuits directly applicable.
*   **CO7 (K2 - Mechatronic concepts in modern applications):** Applications like anti-lock braking systems (ABS), automotive airbags, and industrial automation heavily rely on sensors that produce resistance, current, or reactance changes, which are then converted to voltage signals using the principles discussed.

---

### 5. Practice Questions and Answers

**Question 1:**
A thermistor with a resistance of 10 kΩ at 25°C, which increases with temperature, is used in a voltage divider circuit with a fixed resistor $R_1 = 5$ kΩ. The input voltage $V_{in}$ is 5V.
(a) Calculate the output voltage $V_{out}$ across the thermistor at 25°C.
(b) If the thermistor's resistance increases to 20 kΩ at a higher temperature, calculate the new output voltage $V_{out}$.
(c) Is this a suitable method for detecting temperature increases? Explain why or why not.

**Answer 1:**
(a) At 25°C, $R_{sensor} = 10$ kΩ, $R_1 = 5$ kΩ, $V_{in} = 5$V.
$V_{out} = V_{in} \times \frac{R_{sensor}}{R_1 + R_{sensor}} = 5V \times \frac{10 \text{ k}\Omega}{5 \text{ k}\Omega + 10 \text{ k}\Omega} = 5V \times \frac{10}{15} = 5V \times \frac{2}{3} = 3.33V$.

(b) At the higher temperature, $R_{sensor} = 20$ kΩ.
$V_{out} = V_{in} \times \frac{R_{sensor}}{R_1 + R_{sensor}} = 5V \times \frac{20 \text{ k}\Omega}{5 \text{ k}\Omega + 20 \text{ k}\Omega} = 5V \times \frac{20}{25} = 5V \times \frac{4}{5} = 4V$.

(c) Yes, it is a suitable method for detecting temperature increases because the output voltage increases as the temperature increases (due to the thermistor's resistance increasing). This makes the voltage output directly correlate with the temperature change, allowing for measurement.

**Question 2:**
In a Wheatstone bridge, $V_{in} = 12V$. Resistors $R_1 = R_2 = R_3 = 1$ kΩ. $R_4$ is a sensor whose resistance changes.
(a) If the bridge is initially balanced, what is the resistance of $R_4$?
(b) If $R_4$ increases to 1.2 kΩ, calculate the output voltage $V_{out}$.

**Answer 2:**
(a) For a balanced bridge, $\frac{R_1}{R_3} = \frac{R_2}{R_4}$.
$\frac{1 \text{ k}\Omega}{1 \text{ k}\Omega} = \frac{1 \text{ k}\Omega}{R_4} \implies 1 = \frac{1 \text{ k}\Omega}{R_4} \implies R_4 = 1 \text{ k}\Omega$.

(b) $V_{in} = 12V$, $R_1 = 1$ kΩ, $R_2 = 1$ kΩ, $R_3 = 1$ kΩ, $R_4 = 1.2$ kΩ.
$V_{out} = V_{in} \left( \frac{R_1}{R_1 + R_3} - \frac{R_2}{R_2 + R_4} \right)$
$V_{out} = 12V \left( \frac{1 \text{ k}\Omega}{1 \text{ k}\Omega + 1 \text{ k}\Omega} - \frac{1 \text{ k}\Omega}{1 \text{ k}\Omega + 1.2 \text{ k}\Omega} \right)$
$V_{out} = 12V \left( \frac{1}{2} - \frac{1}{2.2} \right)$
$V_{out} = 12V \left( 0.5 - 0.4545 \right)$
$V_{out} = 12V \times 0.0455 = 0.546V$.

**Question 3:**
Explain why a Wheatstone bridge is often preferred over a simple voltage divider for sensing applications involving small resistance changes.

**Answer 3:**
A Wheatstone bridge offers higher sensitivity and accuracy for small resistance changes because:
1.  **Differential Measurement:** It measures the difference between two voltage ratios, effectively amplifying small deviations from balance.
2.  **Zero Output at Balance:** When the bridge is balanced, the output is zero. Any deviation from this zero point is a direct indication of a change in the sensor, and the magnitude of this deviation is often more significant for a given resistance change compared to a simple voltage divider.
3.  **Temperature Compensation:** By using matched components and placing sensors in pairs (e.g., two strain gauges on opposite sides of a beam), common-mode variations like temperature drift can be cancelled out, leading to more robust measurements. (Bolton, Ch 4).

---

### 6. Important Points to Remember

*   **Sensor Output Conversion:** The primary goal of these circuits is to convert non-voltage sensor outputs (current, resistance, reactance) into a measurable voltage signal.
*   **Ohm's Law:** Fundamental to current-to-voltage conversion using resistors ($V=IR$).
*   **Voltage Divider:** A simple method for converting resistance to voltage, but linearity can be an issue.
*   **Wheatstone Bridge:** A more sensitive and accurate method for measuring small changes in resistance, especially when the bridge is kept near balance.
*   **Applications:** These circuits are ubiquitous in mechatronics for temperature, pressure, strain, light, and proximity sensing.
*   **Signal Conditioning:** These circuits are the first stage of signal conditioning, preparing the raw sensor data for further processing by microcontrollers or PLCs.
*   **AC vs. DC:** Resistance-based sensors typically use DC, while reactance-based sensors (capacitive, inductive) require AC excitation.

---

This concludes the notes for the topic "Current/Resistance/Reactance to Voltage Circuits and Bridge Circuits Applications." Understanding these fundamental conversion techniques is crucial for selecting, interfacing, and interpreting data from a wide range of sensors in any mechatronic system.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
