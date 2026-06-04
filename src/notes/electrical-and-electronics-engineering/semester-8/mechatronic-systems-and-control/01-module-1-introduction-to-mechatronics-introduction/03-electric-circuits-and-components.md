---
title: "Electric circuits and components"
subject: "MECHATRONIC SYSTEMS AND CONTROL"
module: "Module 1: Introduction to Mechatronics: Introduction"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200882b85456187f36cad"
status: "completed"
scrapedAt: "2026-05-23T16:43:03.679Z"
---
# MECHATRONIC SYSTEMS AND CONTROL - Module 1: Introduction to Mechatronics: Introduction

## Topic: Electric Circuits and Components

**Knowledge Level:** K2 (Comprehend, Identify)

### 1. Introduction to Electric Circuits

An electric circuit is a closed loop or path through which electric current can flow. It consists of electrical components connected in a specific arrangement. Mechatronic systems heavily rely on electric circuits to process information, control actuators, and interface with sensors.

**Key Concepts:**

*   **Electric Current (I):** The flow of electric charge. Measured in Amperes (A).
    *   *Analogy:* Flow of water in a pipe.
*   **Voltage (V):** The electrical potential difference between two points. It drives the current. Measured in Volts (V).
    *   *Analogy:* Pressure difference in a water system.
*   **Resistance (R):** The opposition to the flow of electric current. Measured in Ohms (Ω).
    *   *Analogy:* Narrowness or obstructions in a pipe.
*   **Power (P):** The rate at which electrical energy is transferred or consumed. Measured in Watts (W).
    *   P = V * I = I² * R = V² / R

**Ohm's Law:** A fundamental law describing the relationship between voltage, current, and resistance in a circuit.

*   **V = I * R**

**Example:**
Consider a simple circuit with a 5V battery and a 10Ω resistor.
*   Current (I) = V / R = 5V / 10Ω = 0.5A
*   Power (P) = V * I = 5V * 0.5A = 2.5W

**Textbook Reference:**
*   **Bolton, W. (2010). *Mechatronics: Electronic Control Systems in Mechanical and Electrical Engineering***. (Chapter 2: Basic Electrical Principles) - This chapter provides a foundational understanding of voltage, current, resistance, and Ohm's Law, which are crucial for understanding any mechatronic system.

### 2. Basic Electrical Components

Understanding the function of common electrical components is essential for designing and analyzing mechatronic circuits.

#### 2.1 Resistors

*   **Function:** Limit current flow, divide voltage, and dissipate energy as heat.
*   **Symbol:** Zigzag line or rectangle.
*   **Types:** Fixed resistors, variable resistors (potentiometers, rheostats).
*   **Application in Mechatronics:** Current limiting for LEDs, voltage dividers for sensor interfacing, setting time constants in RC circuits.

**Example:**
A resistor is used in series with an LED to prevent excessive current from damaging it.

**Textbook Reference:**
*   **Histand, Al-ciatore (2003). *Introduction to Mechatronics and Measurement Systems***. (Chapter 2: Electrical Measurements and Instrumentation) - This book details the role of resistors in various measurement circuits, including their use in voltage dividers for sensor signal conditioning.

#### 2.2 Capacitors

*   **Function:** Store electrical energy in an electric field. They oppose changes in voltage.
*   **Symbol:** Two parallel lines (or one curved line for polarized capacitors).
*   **Unit:** Farad (F).
*   **Types:** Electrolytic, ceramic, film capacitors.
*   **Application in Mechatronics:** Filtering out noise (smoothing DC voltage), energy storage, timing circuits (in conjunction with resistors).

**Example:**
In a power supply, capacitors are used to smooth out the pulsating DC output from a rectifier, providing a more stable DC voltage for electronic components.

**Textbook Reference:**
*   **Bolton, W. (2010). *Mechatronics: Electronic Control Systems in Mechanical and Electrical Engi neering***. (Chapter 3: Electronic Components) - Discusses capacitors and their behaviour in circuits, particularly their role in AC circuits and filtering.

#### 2.3 Inductors

*   **Function:** Store energy in a magnetic field. They oppose changes in current.
*   **Symbol:** A coil.
*   **Unit:** Henry (H).
*   **Application in Mechatronics:** Filtering (especially in switching power supplies), energy storage in DC-DC converters, creating magnetic fields in motors and solenoids.

**Example:**
Inductors are used in switching power supplies to store energy and release it efficiently to regulate voltage.

**Textbook Reference:**
*   **Shetty, Kolk (2010). *Mechatronics system design***. (Chapter 4: Electronic Components and Circuits) - This text explores the use of inductors in various mechatronic applications, including their integration into power electronics for controlling motors.

#### 2.4 Diodes

*   **Function:** Allow current to flow in one direction only (forward bias) and block it in the other direction (reverse bias).
*   **Symbol:** A triangle pointing towards a line.
*   **Types:** Rectifier diodes, Zener diodes, Light Emitting Diodes (LEDs), photodiodes.
*   **Application in Mechatronics:** Rectification (converting AC to DC), voltage regulation (Zener diodes), indication (LEDs), light sensing (photodiodes).

**Example:**
Rectifier diodes are used in power supplies to convert AC mains voltage into DC voltage. LEDs are commonly used as status indicators on mechatronic devices.

**Textbook Reference:**
*   **Bishop, R. H. (2017). *Mechatronics: an introduction***. (Chapter 5: Electronic Devices and Circuits) - This book provides a good overview of semiconductor devices, including diodes and their applications in signal processing and control within mechatronic systems.

#### 2.5 Transistors

*   **Function:** Act as electronic switches or amplifiers. They control a larger current or voltage with a smaller input signal.
*   **Types:** Bipolar Junction Transistors (BJTs), Metal-Oxide-Semiconductor Field-Effect Transistors (MOSFETs).
*   **Application in Mechatronics:** Switching (turning actuators on/off), amplifying sensor signals, creating logic gates for digital circuits.

**Example:**
A transistor can be used to switch a DC motor on or off based on a low-voltage signal from a microcontroller. MOSFETs are often preferred for higher current switching applications.

**Textbook Reference:**
*   **Merzouki, Samantaray, Pathak, Bouamama (2003). *Intelligent Mechatronic Systems: Modeling, Control and Diagnosis***. (Chapter 3: Modeling of Mechatronic Components) - This advanced text discusses transistors as key switching and amplifying elements in control systems and their impact on system dynamics.
*   **Bolton, W. (2010). *Mechatronics: Electronic Control Systems in Mechanical and Electrical Engi neering***. (Chapter 4: Transistors and Amplifiers) - Provides detailed explanations of transistor operation and their use in amplification and switching circuits.

#### 2.6 Integrated Circuits (ICs) / Microcontrollers

*   **Function:** Contain a large number of electronic components (transistors, resistors, capacitors) fabricated on a single silicon chip. Microcontrollers are specialized ICs with a CPU, memory, and input/output peripherals.
*   **Application in Mechatronics:** The "brain" of most mechatronic systems. They execute control algorithms, process sensor data, and control actuators.

**Example:**
An Arduino microcontroller (based on an ATmega microcontroller) is used to read data from temperature sensors, process it, and control a heating element to maintain a set temperature.

**Textbook Reference:**
*   **Histand, Al-ciatore (2003). *Introduction to Mechatronics and Measurement Systems***. (Chapter 7: Microcontrollers and Microprocessors) - This chapter is highly relevant as it introduces the architecture and functionality of microcontrollers, which are central to mechatronic control.
*   **Shetty, Kolk (2010). *Mechatronics system design***. (Chapter 9: Microcontrollers and Embedded Systems) - Discusses the selection and application of microcontrollers in designing complete mechatronic systems.

### 3. Types of Electric Circuits

Mechatronic systems utilize various types of electric circuits.

#### 3.1 Series Circuits

*   **Definition:** Components are connected end-to-end, forming a single path for current.
*   **Characteristics:**
    *   Current is the same through all components (I_total = I1 = I2 = ...).
    *   Total voltage is the sum of individual voltage drops (V_total = V1 + V2 + ...).
    *   Total resistance is the sum of individual resistances (R_total = R1 + R2 + ...).
*   **Application:** Voltage dividers, simple current limiting.

**Example:**
Three resistors R1, R2, and R3 connected in series. If R1 = 10Ω, R2 = 20Ω, R3 = 30Ω, and the voltage source is 12V:
*   R_total = 10 + 20 + 30 = 60Ω
*   I_total = 12V / 60Ω = 0.2A
*   V1 = 0.2A * 10Ω = 2V, V2 = 0.2A * 20Ω = 4V, V3 = 0.2A * 30Ω = 6V. (2V + 4V + 6V = 12V)

#### 3.2 Parallel Circuits

*   **Definition:** Components are connected across the same two points, providing multiple paths for current.
*   **Characteristics:**
    *   Voltage is the same across all components (V_total = V1 = V2 = ...).
    *   Total current is the sum of individual currents (I_total = I1 + I2 + ...).
    *   Reciprocal of total resistance is the sum of reciprocals of individual resistances (1/R_total = 1/R1 + 1/R2 + ...).
*   **Application:** Distributing power, providing multiple loads that operate independently.

**Example:**
Three resistors R1, R2, and R3 connected in parallel to a 12V source. If R1 = 10Ω, R2 = 20Ω, R3 = 30Ω:
*   1/R_total = 1/10 + 1/20 + 1/30 = (6 + 3 + 2) / 60 = 11/60
*   R_total = 60/11 Ω ≈ 5.45Ω
*   I1 = 12V / 10Ω = 1.2A
*   I2 = 12V / 20Ω = 0.6A
*   I3 = 12V / 30Ω = 0.4A
*   I_total = 1.2A + 0.6A + 0.4A = 2.2A.
*   Check: V_total / R_total = 12V / (60/11)Ω = 12V * (11/60)Ω = 132/60 A = 2.2A.

#### 3.3 AC vs. DC Circuits

*   **DC (Direct Current):** Current flows in one direction only. Typically from batteries or regulated power supplies.
*   **AC (Alternating Current):** Current periodically reverses direction. Typically from the mains supply.
*   **Application in Mechatronics:** AC is used for power distribution, while DC is used for powering electronic components and driving most actuators. Rectification circuits (using diodes) convert AC to DC.

**Textbook Reference:**
*   **Bolton, W. (2010). *Mechatronics: Electronic Control Systems in Mechanical and Electrical Engi neering***. (Chapter 1: Introduction to Mechatronics) - Briefly introduces the distinction between AC and DC in the context of mechatronic system power sources.

### 4. Signal Conditioning Circuits

Signal conditioning is the process of modifying sensor signals to make them suitable for processing by microcontrollers or other control systems. This often involves basic electrical components.

*   **Voltage Division:** Using resistors to scale down a voltage signal.
*   **Filtering:** Using capacitors and resistors (RC filters) to remove unwanted noise from a signal.
*   **Amplification:** Using transistors or operational amplifiers (op-amps) to increase the amplitude of a weak sensor signal.
*   **Buffering:** Using components like op-amps to isolate a sensor from the load of the subsequent circuit, preventing signal degradation.

**Learning Outcome Alignment:**
*   **CO1 (Sensors/Actuators):** Understanding basic components is foundational to understanding how sensors produce electrical signals and how actuators respond to them.
*   **CO2 (Actuator Mechanisms/Signal Conditioning):** This topic directly covers signal conditioning circuits which prepare sensor signals for processing and indirectly supports understanding actuator control signals.

**Example:**
A thermistor (a temperature-dependent resistor) might produce a small change in resistance with temperature. A voltage divider circuit can convert this resistance change into a voltage change. An amplifier might then be used to increase the voltage signal to a level that the microcontroller can accurately read.

**Textbook Reference:**
*   **Histand, Al-ciatore (2003). *Introduction to Mechatronics and Measurement Systems***. (Chapter 2: Electrical Measurements and Instrumentation) - This book dedicates significant sections to signal conditioning techniques, explaining how basic components are used to improve sensor signal quality.

### 5. Important Points to Remember

*   **Ohm's Law (V=IR)** is the cornerstone of understanding DC circuits.
*   **Series circuits** share current, **parallel circuits** share voltage.
*   **Resistors** limit current, **capacitors** store charge and oppose voltage change, **inductors** store energy in a magnetic field and oppose current change, **diodes** allow unidirectional current, and **transistors** act as switches or amplifiers.
*   **Signal conditioning** is crucial for reliable mechatronic system operation, often employing basic components like resistors and capacitors.
*   The choice of components significantly impacts the performance and functionality of a mechatronic system.

---

### Practice Questions

1.  A resistor of 100Ω is connected in series with a 200Ω resistor across a 12V DC supply.
    a) Calculate the total resistance of the circuit.
    b) Calculate the total current flowing in the circuit.
    c) Calculate the voltage drop across each resistor.

2.  Two resistors, 50Ω and 150Ω, are connected in parallel across a 5V DC supply.
    a) Calculate the total resistance of the circuit.
    b) Calculate the current flowing through each resistor.
    c) Calculate the total current drawn from the supply.

3.  What is the primary function of a capacitor in a DC power supply circuit?
    a) To limit current
    b) To store electrical energy and smooth out voltage fluctuations
    c) To amplify signals
    d) To allow current to flow in only one direction

4.  Explain the difference between a series circuit and a parallel circuit in terms of current and voltage.

5.  Describe how a simple voltage divider circuit using two resistors could be used to interface a sensor with an output voltage range of 0-10V with a microcontroller that accepts an input voltage range of 0-5V.

---

### Answers to Practice Questions

1.  a) Total resistance (R_total) = R1 + R2 = 100Ω + 200Ω = **300Ω**
    b) Total current (I_total) = V_total / R_total = 12V / 300Ω = **0.04A** (or 40mA)
    c) Voltage drop across R1 (V1) = I_total * R1 = 0.04A * 100Ω = **4V**
    Voltage drop across R2 (V2) = I_total * R2 = 0.04A * 200Ω = **8V**
    (Check: 4V + 8V = 12V)

2.  a) 1/R_total = 1/50Ω + 1/150Ω = (3 + 1) / 150Ω = 4 / 150Ω
    R_total = 150Ω / 4 = **37.5Ω**
    b) Current through 50Ω resistor (I1) = V_supply / R1 = 5V / 50Ω = **0.1A**
    Current through 150Ω resistor (I2) = V_supply / R2 = 5V / 150Ω ≈ **0.033A** (or 33.3mA)
    c) Total current (I_total) = I1 + I2 = 0.1A + 0.033A = **0.133A** (or 133.3mA)
    (Check: V_supply / R_total = 5V / 37.5Ω = 0.133A)

3.  b) To store electrical energy and smooth out voltage fluctuations

4.  **Series Circuit:**
    *   Current is the same through all components.
    *   Voltage is divided among the components.
    **Parallel Circuit:**
    *   Voltage is the same across all components.
    *   Current is divided among the components.

5.  To interface a 0-10V sensor to a 0-5V microcontroller input, you would need to scale down the voltage by a factor of 2. This can be achieved using a voltage divider circuit.
    Let the sensor output voltage be $V_{out}$ (ranging from 0 to 10V) and the microcontroller input voltage be $V_{in}$ (ranging from 0 to 5V).
    A voltage divider consists of two resistors, $R1$ and $R2$, in series. The output voltage $V_{in}$ is taken across $R2$.
    The formula for a voltage divider is $V_{in} = V_{out} * (R2 / (R1 + R2))$.
    We want $V_{in} = V_{out} / 2$. Therefore, $R2 / (R1 + R2)$ must equal 1/2.
    This implies $2 * R2 = R1 + R2$, which simplifies to $R2 = R1$.
    So, you could use two equal resistors, for example, $R1 = 10kΩ$ and $R2 = 10kΩ$.
    When $V_{out} = 10V$, $V_{in} = 10V * (10kΩ / (10kΩ + 10kΩ)) = 10V * (10kΩ / 20kΩ) = 10V * 0.5 = 5V$.
    When $V_{out} = 0V$, $V_{in} = 0V * 0.5 = 0V$.
    This circuit effectively scales the sensor's output to match the microcontroller's input range.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
