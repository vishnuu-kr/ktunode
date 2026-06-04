---
title: "Introduction to measuring instruments"
subject: "INSTRUMENTATION"
module: "Module 1: Introduction to measuring instruments"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe5b5"
status: "completed"
scrapedAt: "2026-05-23T17:49:16.672Z"
---
# Instrumentation Study Notes

## Module 1: Introduction to Measuring Instruments

---

### Topic: Introduction to Measuring Instruments

**Learning Outcomes:**

*   Understand the fundamental principles and necessity of measurement in instrumentation.
*   Identify and classify different types of measuring instruments.
*   Explain the basic characteristics and performance metrics of measuring instruments.
*   Recognize the importance of selecting the appropriate measuring instrument for a given application.

**Course Outcomes Addressed:**

*   **CO1:** Interpret the basic concepts of measuring instruments, its classification, and selection criteria. (Knowledge Level: K2)

---

### 1. What is Measurement?

**Definition:** Measurement is the process of assigning a numerical value to a physical quantity by comparing it with a standard unit of the same quantity. It involves a systematic procedure to determine the magnitude of a physical property.

**Why is Measurement Important in Instrumentation?**

*   **Understanding and Controlling Physical Phenomena:** To comprehend how systems and processes work, we need to quantify their behavior. This allows for effective control and optimization.
    *   *Example:* Measuring temperature to control an industrial furnace, measuring pressure to manage fluid flow in a pipeline.
*   **Ensuring Quality and Standards:** Measurements are crucial for verifying that products meet specified requirements and adhere to industry standards.
    *   *Example:* Measuring the dimensions of a manufactured part to ensure it fits within tolerances.
*   **Monitoring and Diagnostics:** Regular measurements help in monitoring the health and performance of equipment, enabling early detection of faults.
    *   *Example:* Monitoring vibration levels in a rotating machine to predict potential bearing failure.
*   **Decision Making:** Accurate measurements provide the data necessary for informed decisions in various fields, from scientific research to industrial production.
    *   *Example:* Measuring the voltage and current in an electrical circuit to determine power consumption.
*   **Process Control:** In automated systems, measurements are the input to control algorithms that adjust process parameters to maintain desired operating conditions.

**Key Concepts:**

*   **Quantity:** A property of a phenomenon, body, or substance that can be identified by reference to its description relative to a specified reference. (e.g., length, mass, temperature, pressure).
*   **Standard:** A physical representation of a unit of measurement, established by convention or law. Standards are used for calibration and comparison.
    *   *Example:* The meter is the SI unit of length, defined based on the speed of light.
*   **Measuring Instrument:** A device used to measure a physical quantity. It typically involves a transducer to convert the physical quantity into a signal that can be indicated or recorded.

---

### 2. Classification of Measuring Instruments

Measuring instruments can be classified based on various criteria:

#### 2.1. Based on the Output of the Instrument

*   **Analog Instruments:** These instruments display the measured quantity using a continuously varying pointer on a calibrated scale. The output signal is analog.
    *   *Examples:* Moving coil galvanometer, moving iron voltmeter, liquid-in-glass thermometer.
    *   **Referenced in:** Kalsi, H. S. (2019). *Electronic Instrumentation*. (Chapter 3: Analog Measuring Instruments)
*   **Digital Instruments:** These instruments display the measured quantity as discrete numerical values, typically using a digital display (e.g., LEDs, LCDs). The output signal is converted into a digital format.
    *   *Examples:* Digital multimeter, digital thermometer, digital oscilloscope.
    *   **Referenced in:** Kalsi, H. S. (2019). *Electronic Instrumentation*. (Chapter 5: Digital Measuring Instruments)

#### 2.2. Based on the Principle of Operation

This classification is vast and depends on the physical phenomenon used for measurement. Some common principles include:

*   **Electromechanical:** Utilizes the interaction between electrical and mechanical elements.
    *   *Examples:* Moving coil instruments (PMMC), moving iron instruments, electrodynamometer instruments.
    *   **Referenced in:** Sawhney, A. K. (2023). *Electrical and Electronics Measurements and Instrumentation*. (Chapters 3-5: Moving Coil Instruments, Moving Iron Instruments, Electrodynamometer Instruments)
*   **Electronic:** Employ electronic circuits and components to process and display the measurement.
    *   *Examples:* Cathode Ray Oscilloscope (CRO), digital voltmeters, spectrum analyzers.
    *   **Referenced in:** Kalsi, H. S. (2019). *Electronic Instrumentation*. (Various Chapters)
*   **Thermal:** Based on thermal effects like expansion, change in resistance, or radiation.
    *   *Examples:* Thermocouples, resistance thermometers, infrared thermometers.
    *   **Referenced in:** Doebelin, E. (2011). *Measurement Systems*. (Chapter 10: Measurement of Temperature)
*   **Optical:** Utilizes light phenomena like intensity, wavelength, or polarization.
    *   *Examples:* Photoelectric sensors, optical comparators, spectrophotometers.
    *   **Referenced in:** Doebelin, E. (2011). *Measurement Systems*. (Chapter 11: Measurement of Light)
*   **Mechanical:** Relies on purely mechanical principles.
    *   *Examples:* Vernier caliper, micrometer, Bourdon tube pressure gauge.
    *   **Referenced in:** Doebelin, E. (2011). *Measurement Systems*. (Chapter 7: Measurement of Displacement and Position)

#### 2.3. Based on Energy Consumption

*   **Active Instruments:** These instruments require an external power source to operate. They typically amplify or process the input signal.
    *   *Example:* Electronic voltmeter, oscilloscope.
*   **Passive Instruments:** These instruments do not require an external power source. They operate by deriving energy from the measured quantity itself.
    *   *Example:* Moving iron voltmeter, mercury thermometer.

#### 2.4. Based on the Measurement Process

*   **Deflection Instruments:** The measured quantity causes a deflection of a pointer on a calibrated scale.
    *   *Example:* Ammeter, voltmeter.
*   **Null Instruments:** These instruments work on the principle of balancing an unknown quantity with a known standard. The measurement is taken when the deflection is zero (null).
    *   *Example:* Wheatstone bridge, potentiometer.
    *   **Referenced in:** Sawhney, A. K. (2023). *Electrical and Electronics Measurements and Instrumentation*. (Chapter 6: DC Bridges)

#### 2.5. Based on the Signal Type

*   **AC Instruments:** Designed to measure alternating current or voltage.
*   **DC Instruments:** Designed to measure direct current or voltage.
*   **AC/DC Instruments:** Can measure both alternating and direct currents/voltages.

---

### 3. Characteristics and Performance Metrics of Measuring Instruments

Understanding the performance of a measuring instrument is crucial for accurate and reliable measurements.

#### 3.1. Static Characteristics (Characteristics under steady-state conditions)

*   **Accuracy:** The closeness of a measured value to the true value of the quantity being measured. It is often expressed as a percentage of the true value, full-scale deflection, or reading.
    *   *Formula (example):* Accuracy = | (Measured Value - True Value) / True Value | * 100%
    *   **Referenced in:** Doebelin, E. (2011). *Measurement Systems*. (Chapter 2: Measuring System Performance)
*   **Precision:** The degree of agreement among several measurements of the same quantity when repeated under the same conditions. It indicates the reproducibility of the instrument.
    *   *High Precision, Low Accuracy:* Measurements are clustered closely together but are far from the true value.
    *   *Low Precision, High Accuracy:* Measurements are spread out but their average is close to the true value.
    *   **Referenced in:** Doebelin, E. (2011). *Measurement Systems*. (Chapter 2: Measuring System Performance)
*   **Resolution:** The smallest change in the measured quantity that can be detected by the instrument. For digital instruments, it's the smallest digit change.
    *   *Example:* A voltmeter with a display of 3 digits (e.g., 0.00V to 9.99V) has a resolution of 0.01V.
    *   **Referenced in:** Kalsi, H. S. (2019). *Electronic Instrumentation*. (Chapter 5: Digital Measuring Instruments)
*   **Sensitivity:** The ratio of the change in the output quantity to the change in the input quantity. It indicates how much the output changes for a given input change.
    *   *Formula:* Sensitivity = Change in Output / Change in Input
    *   *Example:* For a galvanometer, sensitivity can be expressed in divisions per microampere.
    *   **Referenced in:** Sawhney, A. K. (2023). *Electrical and Electronics Measurements and Instrumentation*. (Chapter 3: Moving Coil Instruments)
*   **Linearity:** The degree to which the actual output of an instrument deviates from a straight line over its operating range. Perfect linearity means the output is directly proportional to the input.
    *   **Referenced in:** Doebelin, E. (2011). *Measurement Systems*. (Chapter 2: Measuring System Performance)
*   **Range:** The region between the lower and upper limits of the measured quantity that the instrument can measure.
    *   *Example:* A thermometer with a range of 0°C to 100°C.
*   **Span:** The difference between the upper and lower limits of the range (Span = Upper Limit - Lower Limit).
    *   *Example:* For a 0°C to 100°C thermometer, the span is 100°C.
*   **Zero Drift:** The change in the output reading when the input quantity is zero.
*   **Scale Interval:** The difference between two consecutive markings on the instrument scale.

#### 3.2. Dynamic Characteristics (Characteristics when the measured quantity is changing)

These are important when the input quantity is not constant.

*   **Speed of Response:** How quickly the instrument responds to a change in the input quantity. It's often characterized by time constants.
    *   **Referenced in:** Doebelin, E. (2011). *Measurement Systems*. (Chapter 2: Measuring System Performance)
*   **Dynamic Error:** The error introduced due to the instrument's inability to respond instantaneously to changes in the measured variable.
*   **Time Constant (τ):** A measure of the time it takes for an instrument to respond to a step input. For a first-order system, the output reaches 63.2% of its final value after one time constant.
    *   **Referenced in:** Doebelin, E. (2011). *Measurement Systems*. (Chapter 2: Measuring System Performance)
*   **Damping:** The process of reducing or preventing oscillations in the instrument's response. Types include aperiodic (no oscillations), critically damped (fastest response without oscillation), and underdamped (oscillations).
    *   **Referenced in:** Sawhney, A. K. (2023). *Electrical and Electronics Measurements and Instrumentation*. (Chapter 2: PMMC Instruments - Damping)

---

### 4. Selection of Measuring Instruments

Choosing the right instrument is critical for achieving accurate and reliable results. Key factors to consider include:

*   **Accuracy Requirements:** The required level of accuracy for the specific application.
*   **Range of Measurement:** The instrument must be able to measure the expected values of the quantity.
*   **Nature of the Quantity:** Is it AC or DC? Is it varying rapidly or slowly?
*   **Environmental Conditions:** Temperature, humidity, vibration, and electromagnetic interference can affect instrument performance.
*   **Output Requirements:** Is an analog display sufficient, or is a digital readout necessary? Is data logging or integration required?
*   **Cost:** The budget available for the instrument.
*   **Power Requirements:** If the instrument is active, does it have a suitable power source?
*   **Loading Effects:** The extent to which the instrument's presence affects the quantity being measured. An ideal instrument should have infinite input impedance (for voltage measurements) or zero output impedance (for current measurements) to minimize loading.
    *   *Example:* Connecting a low-resistance voltmeter to a high-resistance circuit can significantly alter the circuit's behavior and the voltage being measured.
    *   **Referenced in:** Kalsi, H. S. (2019). *Electronic Instrumentation*. (Chapter 1: Introduction to Electronic Instrumentation)

---

### Important Points to Remember:

*   Measurement is fundamental to understanding and controlling physical processes.
*   Instruments can be classified in numerous ways, each highlighting different aspects of their design and function.
*   Static characteristics (accuracy, precision, resolution) describe instrument performance under steady-state conditions.
*   Dynamic characteristics (speed of response, time constant) are crucial for measuring changing quantities.
*   Selecting the appropriate instrument involves considering accuracy, range, environmental factors, and potential loading effects.
*   Always refer to the instrument's specifications and calibration for reliable measurements.

---

### Practice Questions and Exercises

**Question 1:** Define measurement and explain its significance in the field of instrumentation. (CO1, K2)

**Answer:** Measurement is the process of assigning a numerical value to a physical quantity by comparing it with a standard unit. It is significant in instrumentation for understanding and controlling physical phenomena, ensuring quality, monitoring system performance, and making informed decisions.

**Question 2:** Differentiate between accuracy and precision with an example. (CO1, K2)

**Answer:** Accuracy is the closeness of a measured value to the true value, while precision is the degree of agreement among repeated measurements.
*   *Example:* If the true weight of an object is 10 kg, and measurements are: 9.9 kg, 10.1 kg, 9.95 kg, these are accurate and precise. If measurements are: 10.5 kg, 10.55 kg, 10.6 kg, they are precise but not accurate.

**Question 3:** List three different classifications of measuring instruments and provide one example for each. (CO1, K2)

**Answer:**
1.  **Based on Output:**
    *   Analog Instrument: Moving Coil Galvanometer
    *   Digital Instrument: Digital Multimeter
2.  **Based on Principle of Operation:**
    *   Electromechanical: Moving Iron Voltmeter
    *   Electronic: Cathode Ray Oscilloscope (CRO)
    *   Thermal: Thermocouple
3.  **Based on Energy Consumption:**
    *   Active Instrument: Electronic Weighing Scale
    *   Passive Instrument: Mercury Thermometer

**Question 4:** An ammeter has a range of 0-10 A and a full-scale reading of 100 divisions. If the true current is 5 A and the ammeter reads 5.2 A, calculate the absolute error and percentage error with respect to the true value. (CO1, K2)

**Answer:**
*   Measured Value = 5.2 A
*   True Value = 5 A
*   Absolute Error = Measured Value - True Value = 5.2 A - 5 A = 0.2 A
*   Percentage Error (with respect to true value) = (|Absolute Error| / True Value) * 100% = (0.2 A / 5 A) * 100% = 4%

**Question 5:** What is the significance of the "resolution" of a digital measuring instrument? (CO1, K2)

**Answer:** The resolution of a digital measuring instrument indicates the smallest change in the measured quantity that can be displayed. It determines the finest detail that the instrument can detect and display, influencing the precision of the measurement.

---

This concludes the notes for the "Introduction to Measuring Instruments" topic. Ensure you review the referenced textbook chapters for deeper understanding and further examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
