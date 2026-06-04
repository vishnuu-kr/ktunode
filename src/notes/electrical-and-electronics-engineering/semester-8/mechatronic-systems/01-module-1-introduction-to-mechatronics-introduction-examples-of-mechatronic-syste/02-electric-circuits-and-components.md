---
title: "Electric circuits and components"
subject: "MECHATRONIC SYSTEMS"
module: "Module 1: Introduction to Mechatronics: Introduction, Examples of Mechatronic systems"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36b90"
status: "completed"
scrapedAt: "2026-05-23T16:42:00.525Z"
---
# MECHATRONIC SYSTEMS: MODULE 1 - INTRODUCTION TO MECHATRONICS

## TOPIC: ELECTRIC CIRCUITS AND COMPONENTS

This topic introduces the fundamental building blocks of mechatronic systems: electric circuits and their components. Understanding these elements is crucial for comprehending how mechatronic systems function and interact with the physical world.

---

### 1. INTRODUCTION TO ELECTRIC CIRCUITS

An electric circuit is a closed loop or path that allows electric current to flow. It comprises a source of electrical energy and one or more electrical components. Mechatronic systems rely heavily on the controlled flow of electricity to operate sensors, actuators, and processing units.

**Key Concepts:**

*   **Electric Current (I):** The flow of electric charge. Measured in Amperes (A).
    *   *Analogy:* Like the flow of water in a pipe.
*   **Voltage (V):** The electrical potential difference between two points. It's the "push" that drives current. Measured in Volts (V).
    *   *Analogy:* Like the pressure in a water system.
*   **Resistance (R):** The opposition to the flow of electric current. Measured in Ohms (Ω).
    *   *Analogy:* Like a constriction in a water pipe.
*   **Power (P):** The rate at which electrical energy is transferred or converted. Measured in Watts (W).
    *   *Formula:* P = V * I = I² * R = V² / R

**Fundamental Laws:**

*   **Ohm's Law:** States that the current through a conductor between two points is directly proportional to the voltage across the two points and inversely proportional to the resistance between them.
    *   *Formula:* **V = I * R**
    *   *Importance:* This is a cornerstone of circuit analysis.
*   **Kirchhoff's Current Law (KCL):** The sum of currents entering a node (junction) is equal to the sum of currents leaving the node.
    *   *Concept:* Conservation of charge.
*   **Kirchhoff's Voltage Law (KVL):** The sum of all voltages around a closed loop in a circuit is zero.
    *   *Concept:* Conservation of energy.

**Types of Circuits:**

*   **Series Circuit:** Components are connected end-to-end, so the same current flows through all of them.
    *   *Total Resistance (Rs):* Rs = R1 + R2 + R3 + ...
*   **Parallel Circuit:** Components are connected across the same two points, so the voltage across each component is the same.
    *   *Total Resistance (Rp):* 1/Rp = 1/R1 + 1/R2 + 1/R3 + ...
*   **Combination Circuits:** Circuits that contain both series and parallel connections.

---

### 2. BASIC ELECTRIC COMPONENTS

These are the fundamental building blocks that constitute electric circuits in mechatronic systems.

**2.1. Resistors:**

*   **Function:** To impede the flow of current and control voltage levels.
*   **Types:**
    *   **Fixed Resistors:** Have a predetermined resistance value (e.g., carbon film, metal film).
    *   **Variable Resistors (Potentiometers, Rheostats):** Resistance can be adjusted by a mechanical control.
        *   *Potentiometer:* A three-terminal resistor with a sliding or rotating contact. Can be used as a voltage divider.
        *   *Rheostat:* A two-terminal variable resistor used to control current.
*   **Representation:** Typically a zigzag line or a rectangle.
*   **Use in Mechatronics:** Voltage division, current limiting, setting bias points for active components.

**2.2. Capacitors:**

*   **Function:** To store electrical energy in an electric field. They oppose changes in voltage.
*   **Construction:** Two conductive plates separated by a dielectric (insulating) material.
*   **Capacitance (C):** The ability to store charge. Measured in Farads (F).
    *   *Formula:* C = Q / V (where Q is charge and V is voltage)
*   **Types:** Electrolytic, ceramic, film, tantalum. Polarity is important for some types (electrolytic).
*   **Representation:** Two parallel lines (one might be curved to indicate polarity).
*   **Use in Mechatronics:**
    *   **Filtering:** Smoothing out voltage fluctuations (e.g., in power supplies).
    *   **Energy Storage:** Providing quick bursts of energy.
    *   **Timing Circuits:** In conjunction with resistors.
    *   **Decoupling:** Preventing noise propagation between circuit sections.
    *   *(Textbook Reference: Bolton, Chapter 3)*

**2.3. Inductors:**

*   **Function:** To store energy in a magnetic field when electric current flows through them. They oppose changes in current.
*   **Construction:** A coil of wire, often wound around a magnetic core.
*   **Inductance (L):** The property of an inductor to oppose changes in current. Measured in Henries (H).
*   **Types:** Air-cored, iron-cored, ferrite-cored.
*   **Representation:** A coil symbol.
*   **Use in Mechatronics:**
    *   **Filtering:** Blocking high-frequency signals (chokes).
    *   **Energy Storage:** In switching power supplies.
    *   **Transformers:** Used to change voltage levels.
    *   **Solenoids and Motors:** Essentially inductors whose magnetic field does mechanical work.
    *   *(Textbook Reference: Bolton, Chapter 3)*

**2.4. Diodes:**

*   **Function:** To allow current to flow in only one direction (forward bias). They act as one-way valves for electricity.
*   **Types:**
    *   **Rectifier Diodes:** Used to convert AC to DC.
    *   **Light Emitting Diodes (LEDs):** Emit light when forward biased. Crucial for visual feedback in mechatronic systems.
    *   **Zener Diodes:** Designed to operate in reverse breakdown, providing voltage regulation.
    *   **Photodiodes:** Convert light into electrical current. Used as sensors.
*   **Representation:** A triangle pointing towards a line. The triangle indicates the direction of forward current flow.
*   **Use in Mechatronics:**
    *   **Rectification:** In AC-to-DC power conversion.
    *   **Signal Protection:** Preventing reverse voltage.
    *   **Indicators:** LEDs for status display.
    *   **Sensors:** Photodiodes for light detection.
    *   *(Textbook Reference: Histand & Alciatore, Chapter 2)*

**2.5. Transistors:**

*   **Function:** To amplify electrical signals or to act as an electronic switch. They are the building blocks of modern electronics, including microcontrollers.
*   **Types:**
    *   **Bipolar Junction Transistors (BJTs):** Current-controlled devices. Have three terminals: Base, Collector, Emitter.
        *   *NPN and PNP types.*
    *   **Field-Effect Transistors (FETs):** Voltage-controlled devices. Have three terminals: Gate, Drain, Source.
        *   *MOSFETs (Metal-Oxide-Semiconductor Field-Effect Transistors) are very common.*
*   **Representation:** Various symbols depending on the type.
*   **Use in Mechatronics:**
    *   **Switching:** Turning actuators (motors, relays) on/off based on control signals.
    *   **Amplification:** Amplifying weak sensor signals.
    *   **Logic Gates:** As fundamental components within integrated circuits (microcontrollers, microprocessors).
    *   *(Textbook Reference: Bolton, Chapter 3; Histand & Alciatore, Chapter 2)*

**2.6. Integrated Circuits (ICs) / Microcontrollers / Microprocessors:**

*   **Function:** Perform complex logic operations, processing, and control functions.
    *   **Microprocessors:** The "brain" of a computer, executing instructions. They require external memory and peripherals.
    *   **Microcontrollers:** A complete computer system on a single chip, containing a CPU, memory, and I/O peripherals. Ideal for embedded control applications.
*   **Representation:** A rectangular block with pins.
*   **Use in Mechatronics:** The core of most mechatronic systems, responsible for reading sensor data, processing it, and controlling actuators.
    *   *(Course Outcome CO3 Alignment)*
    *   *(Textbook Reference: Shetty & Kolk, Chapter 3; Bishop, Chapter 4)*

---

### 3. ANALOG VS. DIGITAL CIRCUITS

Mechatronic systems often interface with both the analog and digital worlds.

**3.1. Analog Circuits:**

*   **Characteristics:** Deal with continuous signals that can vary smoothly over a range of values.
*   **Components:** Resistors, capacitors, inductors, transistors (for amplification).
*   **Examples:** Amplifiers, filters, voltage regulators, basic sensor interfaces.
*   **Use in Mechatronics:**
    *   Processing raw sensor signals (which are often analog).
    *   Generating analog control signals for some actuators.
    *   *(Course Outcome CO1 & CO2 Alignment - signal conditioning often involves analog circuits)*

**3.2. Digital Circuits:**

*   **Characteristics:** Deal with discrete signals that represent information as binary values (0 or 1, low or high voltage).
*   **Components:** Logic gates (AND, OR, NOT, XOR), flip-flops, microprocessors, microcontrollers.
*   **Examples:** Digital logic, microcontrollers, memory.
*   **Use in Mechatronics:**
    *   Decision-making based on sensor inputs.
    *   Implementing control algorithms.
    *   Communicating with other digital systems.
    *   *(Course Outcome CO3 Alignment)*

**3.3. Analog-to-Digital Converters (ADCs) and Digital-to-Analog Converters (DACs):**

*   **Function:**
    *   **ADC:** Converts an analog signal into a digital representation. Essential for microcontrollers to read analog sensor data.
    *   **DAC:** Converts a digital signal into an analog signal. Used to control analog actuators or generate analog waveforms.
*   **Importance:** Bridge the gap between the analog and digital domains in mechatronic systems.
*   *(Course Outcome CO1 & CO2 Alignment - ADCs are key for sensor signal conditioning)*

---

### 4. CIRCUITS IN MECHATRONIC EXAMPLES

Understanding how these components are used in real-world applications is crucial.

*   **Example: Simple Motor Control Circuit:**
    *   **Components:** Microcontroller (digital control), transistor (as a switch to drive the motor), motor (actuator), resistor (current limiting for transistor base), diode (flyback diode to protect the transistor from inductive voltage spikes from the motor).
    *   **Operation:** The microcontroller sends a digital signal (high or low) to the transistor's base. When high, the transistor turns on, allowing current to flow from the power supply through the motor, making it spin. The flyback diode provides a path for the motor's inductive current when the transistor turns off, preventing damaging voltage spikes.
    *   *(CO1, CO2 Alignment - Actuator control and signal conditioning aspects)*

*   **Example: Temperature Sensing Circuit (Thermistor):**
    *   **Components:** Thermistor (a resistor whose resistance changes with temperature), fixed resistor, voltage source, microcontroller (with ADC).
    *   **Operation:** The thermistor is placed in a voltage divider circuit with a fixed resistor. As temperature changes, the thermistor's resistance changes, altering the voltage at the junction between the two resistors. This varying analog voltage is then read by the microcontroller's ADC, which converts it into a digital value that can be processed to determine the temperature.
    *   *(CO1 Alignment - Sensor input and signal conditioning)*

---

### 5. IMPORTANT POINTS TO REMEMBER

*   **Ohm's Law (V=IR) is fundamental.** Always keep it in mind when analyzing circuits.
*   **Series vs. Parallel:** Understand how resistances, voltages, and currents behave differently in these configurations.
*   **Capacitors store energy and oppose voltage changes.** They are vital for filtering and smoothing.
*   **Inductors store energy and oppose current changes.** They are used in filtering and energy transfer.
*   **Diodes are one-way current valves.** LEDs and photodiodes are critical mechatronic components.
*   **Transistors are the building blocks for switching and amplification.** They enable microcontrollers to control higher power devices.
*   **Microcontrollers/Microprocessors are the brains** of mechatronic systems.
*   **ADCs and DACs are essential interfaces** between the analog and digital worlds.
*   **Polarity matters** for certain components like electrolytic capacitors and diodes.
*   **Safety:** Always be aware of voltage and current ratings to avoid damaging components or causing harm.

---

### 6. PRACTICE QUESTIONS AND EXERCISES

**Question 1:**

A resistor of 100 Ω is connected across a 5V DC power supply. Calculate the current flowing through the resistor and the power dissipated.

**Question 2:**

Two resistors, R1 = 220 Ω and R2 = 330 Ω, are connected in series to a 12V supply.
a) What is the total resistance of the circuit?
b) What is the current flowing through the circuit?
c) What is the voltage drop across each resistor?

**Question 3:**

Two resistors, R1 = 1 kΩ and R2 = 2 kΩ, are connected in parallel to a 9V supply.
a) What is the total resistance of the circuit?
b) What is the current flowing through each resistor?
c) What is the total current drawn from the supply?

**Question 4:**

Describe the primary function of a capacitor and an inductor in an electronic circuit. Give one example of their application in a mechatronic system.

**Question 5:**

Explain the role of a transistor in a mechatronic system, considering both its switching and amplifying capabilities.

**Question 6:**

What is the purpose of an Analog-to-Digital Converter (ADC) in a mechatronic system? How does it relate to sensor input?

---

### 7. ANSWERS TO PRACTICE QUESTIONS

**Answer 1:**
*   Using Ohm's Law (I = V/R):
    *   Current (I) = 5V / 100 Ω = 0.05 A = 50 mA
*   Using Power Formula (P = V * I):
    *   Power (P) = 5V * 0.05 A = 0.25 W = 250 mW

**Answer 2:**
a) Total Resistance (Rs) = R1 + R2 = 220 Ω + 330 Ω = **550 Ω**
b) Current (I) = V / Rs = 12V / 550 Ω ≈ **0.0218 A ≈ 21.8 mA**
c) Voltage drop across R1 (V1) = I * R1 = 0.0218 A * 220 Ω ≈ **4.80 V**
   Voltage drop across R2 (V2) = I * R2 = 0.0218 A * 330 Ω ≈ **7.20 V**
   (Check: V1 + V2 = 4.80V + 7.20V = 12V, which matches the supply voltage)

**Answer 3:**
a) Total Resistance (Rp):
   1/Rp = 1/R1 + 1/R2 = 1/1000 Ω + 1/2000 Ω = 0.001 + 0.0005 = 0.0015
   Rp = 1 / 0.0015 Ω ≈ **666.67 Ω**
b) Current through R1 (I1) = V / R1 = 9V / 1000 Ω = **0.009 A = 9 mA**
   Current through R2 (I2) = V / R2 = 9V / 2000 Ω = **0.0045 A = 4.5 mA**
c) Total Current (Itotal) = I1 + I2 = 9 mA + 4.5 mA = **13.5 mA**
   (Check using total resistance: Itotal = V / Rp = 9V / 666.67 Ω ≈ 0.0135 A = 13.5 mA)

**Answer 4:**
*   **Capacitor:** Stores electrical energy in an electric field and opposes changes in voltage.
    *   *Mechatronic Application:* Filtering out electrical noise from sensor signals or smoothing the output of a power supply.
*   **Inductor:** Stores electrical energy in a magnetic field and opposes changes in current.
    *   *Mechatronic Application:* In DC-DC converters (switching power supplies) or as part of solenoid actuators.

**Answer 5:**
*   **Switching:** A transistor can act as an electronic switch. A small input signal (voltage or current) at its control terminal (base or gate) can control a much larger current flow between its other two terminals (collector-emitter or drain-source). In mechatronics, this is crucial for using low-power microcontrollers to switch on/off higher-power devices like motors, relays, or solenoids.
*   **Amplification:** Transistors can amplify weak signals. This is useful for boosting the signal from sensitive sensors (like a microphone or a small photodiode) to a level that can be processed by a microcontroller.

**Answer 6:**
The purpose of an Analog-to-Digital Converter (ADC) in a mechatronic system is to convert a continuous analog voltage signal into a discrete digital number. Most sensors (e.g., temperature sensors, pressure sensors, potentiometers) produce analog output signals that vary in proportion to the physical quantity being measured. Microcontrollers and microprocessors work with digital data. Therefore, an ADC acts as an essential interface, allowing the digital "brain" of the mechatronic system to "understand" and process the analog information coming from the sensors. This is a key part of **signal conditioning** (CO2) and **comprehending sensors** (CO1).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 8. TEXTBOOK REFERENCES AND FURTHER READING

*   **Bolton, W. (2010).** *Mechatronics: Electronic Control Systems in Mechanical and Electrical Engineering* (4th ed.). Pearson Education. (Chapters on basic electronic components, analog and digital circuits, sensors, and actuators).
*   **Histand, M. B., & Alciatore, D. G. (2003).** *Introduction to Mechatronics and Measurement Systems*. McGraw-Hill Series in Mechanical Engineering. (Chapters covering basic circuit theory, discrete electronic components, and analog circuits).
*   **Shetty, D., & Kolk, R. A. (2010).** *Mechatronics System Design*. CL-Engineering. (Sections on electrical and electronic systems).
*   **Bishop, R. H. (2017).** *Mechatronics: An Introduction*. CRC Press. (Provides a good overview of the electrical and electronic aspects within mechatronics).
*   **Merzouki, R., Samantaray, A. K., Pathak, P. M., & Ould Bouamama, B. (2003).** *Intelligent Mechatronic Systems: Modeling, Control and Diagnosis*. Springer, London. (While more advanced, it provides context on how these components are integrated into intelligent systems).

---