---
title: "Industrial measurement systems – different types of industrial variables and measurement systems elements."
subject: "INSTRUMENTATION AND CONTROL SYSTEMS"
module: "Module 1: Industrial measurement systems – different types of industrial variables and measurement systems elements."
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf4804463666"
status: "completed"
scrapedAt: "2026-05-20T18:00:31.400Z"
---
# INSTRUMENTATION AND CONTROL SYSTEMS - MODULE 1: INDUSTRIAL MEASUREMENT SYSTEMS

## Topic: Industrial Measurement Systems – Different Types of Industrial Variables and Measurement Systems Elements

This module introduces the fundamental concepts of industrial measurement systems, focusing on the types of variables measured in industrial processes and the essential elements that constitute a measurement system.

### Course Outcomes Addressed:
*   **CO1:** To get basic knowledge about industrial measurement system and different elements involved in it. (Knowledge Level: K2)
*   **CO2:** Acquire knowledge about sensors and transducers for different industrial variables (Knowledge Level: K4)

---

### 1. Introduction to Industrial Measurement Systems

**1.1 Definition of Measurement:**
Measurement is the process of assigning a numerical value to a physical quantity according to a predefined set of rules. It involves comparing an unknown quantity with a known standard.

**1.2 Importance of Measurement in Industrial Processes:**
*   **Process Monitoring:** To observe and understand the current state of a process.
*   **Process Control:** To make informed decisions and take actions to maintain the process within desired operating parameters.
*   **Quality Assurance:** To ensure products meet specified standards.
*   **Safety:** To detect hazardous conditions and prevent accidents.
*   **Efficiency Optimization:** To identify areas for improvement and reduce waste.

**1.3 Key Concepts in Measurement Systems:**
*   **Measurand:** The physical quantity or property being measured.
*   **Standard:** A physical quantity or system whose value is known with high accuracy and is used as a reference.
*   **Measuring Instrument:** A device used to measure a physical quantity.
*   **Calibration:** The process of comparing a measuring instrument with a known standard to determine its accuracy and adjust it if necessary.
*   **Accuracy:** The degree of closeness of a measured value to the true value.
*   **Precision:** The degree of reproducibility of a measurement under unchanged conditions.
*   **Sensitivity:** The ratio of the change in the output signal to the change in the input quantity.
*   **Resolution:** The smallest detectable change in the measurand.
*   **Range:** The upper and lower limits of the values that can be measured by an instrument.
*   **Linearity:** The degree to which the output of an instrument is directly proportional to the input.
*   **Hysteresis:** The phenomenon where the output depends on the past history of the input, causing different readings for the same input value when approached from different directions.
*   **Repeatability:** The ability of an instrument to produce the same reading for repeated measurements of the same quantity under the same conditions.
*   **Reproducibility:** The ability of an instrument to produce the same reading for repeated measurements of the same quantity under different conditions (e.g., different operators, time, environment).

**1.4 Types of Industrial Variables:**
Industrial processes involve a wide array of physical variables that need to be measured and controlled. These can be broadly categorized as follows:

*   **Mechanical Variables:**
    *   **Displacement:** Linear or angular change in position. (e.g., position of a valve, rotation of a shaft)
    *   **Velocity:** Rate of change of displacement. (e.g., speed of a conveyor belt, flow rate of a fluid)
    *   **Acceleration:** Rate of change of velocity. (e.g., vibration analysis in rotating machinery)
    *   **Force:** A push or pull on an object. (e.g., load on a weighing scale, tension in a wire)
    *   **Pressure:** Force per unit area. (e.g., steam pressure in a boiler, hydraulic pressure in a system)
    *   **Stress:** Internal resistance to deformation within a material.
    *   **Strain:** Deformation of a material relative to its original size.
    *   **Torque:** Rotational force. (e.g., motor output, tightening a bolt)
    *   **Flow Rate:** Volume or mass of a fluid passing through a point per unit time. (e.g., water flow in a pipe, gas flow in a duct)
    *   **Level:** The height of a liquid or solid in a container. (e.g., liquid level in a tank, solid material in a silo)
    *   **Vibration:** Oscillatory motion about a point.

*   **Thermal Variables:**
    *   **Temperature:** Degree of hotness or coldness of a substance. (e.g., furnace temperature, ambient temperature)
    *   **Heat Flow:** Rate of transfer of thermal energy.
    *   **Thermal Conductivity:** Ability of a material to conduct heat.

*   **Electrical Variables:**
    *   **Voltage:** Electric potential difference. (e.g., power supply voltage)
    *   **Current:** Flow of electric charge. (e.g., motor current)
    *   **Resistance:** Opposition to current flow.
    *   **Capacitance:** Ability to store electric charge.
    *   **Inductance:** Opposition to change in current.
    *   **Power:** Rate of energy consumption or generation.
    *   **Frequency:** Number of cycles per second.

*   **Chemical Variables:**
    *   **pH:** Measure of acidity or alkalinity. (e.g., chemical reaction control)
    *   **Concentration:** Amount of a substance in a mixture. (e.g., chemical concentration in a solution)
    *   **Humidity:** Amount of water vapor in the air. (e.g., environmental control)
    *   **Gas Composition:** Proportions of different gases in a mixture. (e.g., exhaust gas analysis)
    *   **Viscosity:** Resistance to flow of a fluid.

*   **Optical Variables:**
    *   **Light Intensity:** Brightness of light. (e.g., process illumination)
    *   **Color:** Visual perception of light wavelengths.
    *   **Turbidity:** Cloudiness of a fluid.

**Example:** In a chemical plant manufacturing sulfuric acid, the important industrial variables to measure and control might include:
*   **Temperature:** of reactors, distillation columns, storage tanks.
*   **Pressure:** of process lines, vessels.
*   **Flow Rate:** of reactants (sulfur dioxide, air, water), product (sulfuric acid).
*   **Level:** of acid in storage tanks.
*   **Concentration:** of sulfuric acid in the product.
*   **pH:** of effluent streams.

---

### 2. Elements of a Measurement System

A typical industrial measurement system can be broken down into several functional elements. These elements work together to convert a physical phenomenon into a usable output signal.

**(Refer to: Doebelin, E. O. (1990). *Measurement Systems: Application and Design*. McGraw-Hill Publishing Company. Chapter 1)**

**2.1 Primary Sensing Element (Sensor):**
*   **Function:** The first element that comes into direct contact with the measurand. It undergoes a physical change in response to the measurand.
*   **Characteristics:** It must be sensitive to the measurand and ideally insensitive to other environmental factors.
*   **Examples:**
    *   A bimetallic strip in a thermometer (bends due to temperature change).
    *   A diaphragm in a pressure gauge (deforms under pressure).
    *   A thermocouple junction in a temperature measurement system (generates voltage due to temperature difference).
    *   A strain gauge attached to a load cell.

**2.2 Intermediate Modifying/Translating Element:**
*   **Function:** This element modifies the output of the primary sensing element to make it suitable for further processing or for direct indication. It often translates one form of energy into another or amplifies/attenuates the signal.
*   **Characteristics:** It often involves mechanical, electrical, or fluidic linkages.
*   **Examples:**
    *   A lever mechanism in a mechanical pressure gauge that amplifies the diaphragm's movement.
    *   A Bourdon tube that converts pressure into mechanical displacement.
    *   The thermocouple itself is also considered an intermediate element as it converts thermal energy into electrical voltage.
    *   A Wheatstone bridge circuit to convert resistance change (from a strain gauge) into a voltage change.

**2.3 Output Transducer/Signal Conditioning Element:**
*   **Function:** This element converts the modified signal from the intermediate element into a standardized output signal, typically electrical (voltage or current), that can be easily processed, displayed, or transmitted. This stage often involves signal conditioning.
*   **Signal Conditioning:**
    *   **Amplification:** Increasing the magnitude of the signal. (e.g., using operational amplifiers)
    *   **Attenuation:** Decreasing the magnitude of the signal.
    *   **Filtering:** Removing unwanted frequency components (noise) from the signal.
    *   **Linearization:** Correcting non-linear relationships between the input and output.
    *   **Analog-to-Digital Conversion (ADC):** Converting an analog signal into a digital format for processing by microprocessors or computers.
    *   **Digital-to-Analog Conversion (DAC):** Converting a digital signal back into an analog signal for display or actuation.
    *   **Isolation:** Preventing electrical interference or grounding loops.
*   **Examples:**
    *   An amplifier circuit connected to the thermocouple's output.
    *   An ADC integrated circuit.
    *   A transmitter unit that converts a sensor's raw output into a standard 4-20mA current loop signal.

**2.4 Data Presentation Element (Indicator/Recorder):**
*   **Function:** This element displays the measured value in a human-readable format or records it for later analysis.
*   **Types:**
    *   **Indicators:** Analog (meters with pointers), Digital (numerical displays like LCD, LED).
    *   **Recorders:** Chart recorders, data loggers, computer-based data acquisition systems.
*   **Examples:**
    *   A digital voltmeter display.
    *   A pressure gauge with a needle.
    *   A data logger recording temperature over time.

**2.5 Auxiliary Energy Source:**
*   **Function:** Most measurement systems require an external energy source to operate. This could be electrical power, pneumatic pressure, or hydraulic power.
*   **Examples:**
    *   Batteries or mains power supply for electronic instruments.
    *   Compressed air for pneumatic controllers or actuators.
    *   Hydraulic fluid for hydraulic systems.

---

### 3. Functional Diagram of a Measurement System

A generalized block diagram of a measurement system can be represented as:

```
Measurand --> [Primary Sensing Element] --> [Intermediate Modifying Element] --> [Output Transducer/Signal Conditioning] --> [Data Presentation Element]
                       |                                       ^
                       |                                       |
                       ----------------- [Auxiliary Energy Source] -----------------
```

**Example Scenario: Measuring Temperature with a Thermocouple**

*   **Measurand:** Temperature of a process fluid.
*   **Primary Sensing Element:** Thermocouple junction (e.g., Type K) immersed in the fluid. It generates a thermoelectric voltage proportional to the temperature difference.
*   **Intermediate Modifying Element:** The thermocouple itself acts as a transducer converting thermal energy to electrical energy. The physical connection wires also conduct the generated voltage.
*   **Output Transducer/Signal Conditioning:**
    *   **Amplifier:** To boost the small millivolt signal from the thermocouple.
    *   **Cold Junction Compensation:** To account for the temperature at the reference junction.
    *   **ADC:** To convert the analog voltage into a digital value.
    *   **Linearization Circuitry:** To compensate for the non-linear response of the thermocouple.
*   **Data Presentation Element:** A digital display showing the temperature in degrees Celsius or Fahrenheit. Alternatively, a data logger might record the temperature values.
*   **Auxiliary Energy Source:** Power supply for the amplifier and display.

---

### 4. Sensors and Transducers for Different Industrial Variables (CO2 focus)

While this module's topic focuses on basic elements, CO2 implies acquiring knowledge about specific sensors. Here are brief examples for common variables:

*   **Temperature Sensors:**
    *   **Thermocouples:** (e.g., Type K, J, T, E) - See above. Convert temperature difference to voltage.
    *   **Resistance Temperature Detectors (RTDs):** (e.g., Pt100) - Resistance changes with temperature.
    *   **Thermistors:** Semiconductor devices with high negative temperature coefficient (resistance decreases sharply with temperature increase).
    *   **Infrared Pyrometers:** Measure thermal radiation without contact.

*   **Pressure Sensors:**
    *   **Bourdon Tubes:** Mechanical deformation under pressure.
    *   **Diaphragm Seals:** Flexible membrane that deforms.
    *   **Strain Gauges:** Applied to a diaphragm or bellows, their resistance changes with strain caused by pressure.
    *   **Capacitive Pressure Sensors:** Pressure changes the distance between capacitor plates, altering capacitance.
    *   **Piezoelectric Pressure Sensors:** Generate voltage when subjected to pressure.

*   **Flow Sensors:**
    *   **Orifice Plates, Venturi Meters, Flow Nozzles:** Create a pressure drop proportional to the square of flow rate (based on Bernoulli's principle).
    *   **Turbine Flowmeters:** Rotating turbine blades are driven by fluid flow, generating electrical pulses.
    *   **Electromagnetic Flowmeters:** Measure flow of conductive fluids based on Faraday's law of electromagnetic induction.
    *   **Ultrasonic Flowmeters:** Measure flow by transmitting ultrasonic waves through the fluid.
    *   **Coriolis Mass Flowmeters:** Measure mass flow directly by detecting the inertial forces on a vibrating tube.

*   **Level Sensors:**
    *   **Float Type:** Mechanical float connected to an indicator or switch.
    *   **Capacitive Type:** Detects change in capacitance as liquid level changes.
    *   **Ultrasonic Type:** Emits sound waves and measures the time for reflection from the surface.
    *   **Radar Type:** Emits microwave pulses and measures time of flight of reflection.
    *   **Hydrostatic Level:** Measures the pressure at the bottom of a tank, which is proportional to liquid level.

*   **Force/Weight Sensors:**
    *   **Load Cells:** Typically use strain gauges to measure deformation due to applied force.
    *   **Spring Scales:** Measure force by the extension of a spring.

---

### 5. Important Points to Remember

*   A measurement system's primary goal is to quantify a physical variable accurately and reliably.
*   Understanding the types of industrial variables is crucial for selecting appropriate measurement techniques.
*   Each element in a measurement system plays a specific functional role.
*   Sensors are the interface between the physical world and the measurement system.
*   Signal conditioning is vital for making raw sensor signals usable and robust.
*   Accuracy, precision, resolution, and sensitivity are key performance metrics for any measurement system.

---

### 6. Practice Questions and Answers

**Question 1:**
Identify the primary sensing element in a system designed to measure the level of water in a tank using a float.

**Answer:**
The float is the primary sensing element. It directly interacts with the water level and moves accordingly.

**Question 2:**
A thermocouple is used to measure temperature. What is its primary function in a measurement system?

**Answer:**
The primary function of a thermocouple is to convert thermal energy (temperature difference) into a corresponding electrical voltage (thermoelectric voltage).

**Question 3:**
List any three common types of industrial variables and provide one example of their measurement in an industrial setting.

**Answer:**
1.  **Temperature:** Measuring the temperature of a furnace using a thermocouple.
2.  **Pressure:** Measuring the steam pressure in a boiler using a Bourdon tube gauge.
3.  **Flow Rate:** Measuring the flow of oil in a pipeline using an orifice plate and differential pressure transmitter.

**Question 4:**
Describe the role of the "intermediate modifying/translating element" in a measurement system.

**Answer:**
The intermediate modifying/translating element takes the output from the primary sensing element and modifies it to make it more suitable for further processing or for direct indication. This often involves amplification, conversion of energy form, or mechanical linkage to improve the signal's strength or form.

**Question 5:**
What is the purpose of signal conditioning in a measurement system?

**Answer:**
Signal conditioning aims to process the raw output signal from a sensor to improve its quality and make it suitable for processing, display, or transmission. This involves operations like amplification, filtering, linearization, and conversion (e.g., ADC).

---

This concludes Module 1, focusing on the foundational aspects of industrial measurement systems, the variables they measure, and the fundamental elements that comprise them. The next modules will delve deeper into specific sensors, signal conditioning techniques, and how these systems integrate into control loops.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
