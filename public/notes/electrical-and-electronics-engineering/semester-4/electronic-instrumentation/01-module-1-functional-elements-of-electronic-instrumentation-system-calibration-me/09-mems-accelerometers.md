---
title: "MEMS accelerometers"
subject: "ELECTRONIC INSTRUMENTATION"
module: "Module 1: Functional elements of electronic instrumentation system – Calibration methods: Static, Dynamic, Field, Traceable, Master."
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35e76"
status: "completed"
scrapedAt: "2026-05-23T16:16:12.341Z"
---
## Electronic Instrumentation: Module 1 - Functional Elements and Calibration Methods (with a focus on MEMS Accelerometers)

This module introduces the fundamental building blocks of electronic instrumentation systems and the crucial process of calibration. We will explore various calibration methods and then delve into the specifics of MEMS accelerometers, a vital sensor in modern instrumentation.

---

### 1. Functional Elements of an Electronic Instrumentation System

An electronic instrumentation system is designed to measure physical quantities and convert them into electrical signals for processing, display, or control. It typically comprises several functional blocks:

*   **Sensor/Transducer:** This is the primary element that interacts with the physical phenomenon being measured. It converts the physical quantity (e.g., temperature, pressure, acceleration) into an electrical signal (e.g., voltage, current, resistance change).
    *   **Key Concept:** The **transducer** is a device that converts energy from one form to another. In instrumentation, it converts a non-electrical physical quantity into an electrical signal.
    *   **Example:** A thermocouple converts temperature into a voltage.
    *   **Reference:** Kalsi (2019) discusses various types of transducers in detail.

*   **Signal Conditioning:** The raw electrical signal from the sensor is often weak, noisy, or in a form unsuitable for further processing. Signal conditioning circuits modify this signal to make it more usable. Common signal conditioning techniques include:
    *   **Amplification:** Increasing the amplitude of the signal (e.g., using operational amplifiers).
    *   **Filtering:** Removing unwanted frequencies (noise) from the signal (e.g., low-pass, high-pass, band-pass filters).
    *   **Linearization:** Correcting non-linear relationships between the input physical quantity and the output electrical signal.
    *   **Impedance Matching:** Ensuring efficient transfer of power between different stages of the system.
    *   **Reference:** Gupta (2014) provides comprehensive coverage of signal conditioning circuits.

*   **Data Acquisition/Conversion:** In many modern systems, the analog signal needs to be converted into a digital format for processing by microprocessors or computers.
    *   **Analog-to-Digital Converter (ADC):** Converts an analog signal into a digital representation. Common types include successive approximation, delta-sigma, and flash ADCs.
    *   **Digital-to-Analog Converter (DAC):** Converts a digital signal back into an analog signal, if necessary for control or output.
    *   **Reference:** Sawhney (2011) explains the principles of ADC and DAC operation.

*   **Data Processing/Analysis:** This stage involves manipulating the acquired data. This can include:
    *   **Arithmetic operations:** Calculations based on the measurements.
    *   **Statistical analysis:** Determining mean, standard deviation, etc. (relates to CO5).
    *   **Algorithm implementation:** Executing control logic or data interpretation routines.
    *   **Reference:** Doebelin & Manik (6th Ed.) discusses data processing in measurement systems.

*   **Data Display/Output:** The processed information is presented to the user or used to control another system.
    *   **Indicators:** Analog meters, digital displays (LEDs, LCDs).
    *   **Recorders:** Chart recorders, data loggers.
    *   **Actuators:** Devices that perform an action based on the measurement (e.g., valves, motors).
    *   **Reference:** Golding & Widdis (Wheeler Pub.) covers various display and output devices.

*   **Power Supply:** Provides the necessary electrical energy for the operation of all components in the system. This can include regulated DC voltages, AC voltages, etc.

---

### 2. Calibration Methods

Calibration is the process of comparing the output of a measuring instrument with a known standard to determine and correct any inaccuracies. It ensures the instrument provides reliable and accurate measurements.

**2.1 Static Calibration**

*   **Definition:** Static calibration involves applying constant, unchanging input values (static conditions) to the instrument and comparing the instrument's readings to the known standard values.
*   **Purpose:** To determine the instrument's static performance characteristics such as linearity, hysteresis, zero offset, and sensitivity.
*   **Procedure:**
    1.  Apply a series of known, stable input values across the instrument's range.
    2.  Record the corresponding output readings from the instrument.
    3.  Compare these readings with the true values of the input.
    4.  Generate a calibration curve or report the deviations.
*   **Example:** Calibrating a digital voltmeter by applying known DC voltages (e.g., 1V, 5V, 10V) from a precision voltage source and checking if the voltmeter reads the correct values.
*   **Reference:** Kalsi (2019) provides a good overview of static calibration procedures.

**2.2 Dynamic Calibration**

*   **Definition:** Dynamic calibration involves applying time-varying input signals to the instrument and comparing its output to a known standard that is also subjected to the same time-varying input.
*   **Purpose:** To assess the instrument's response to changing inputs, including its frequency response, transient response, and phase shift.
*   **Procedure:**
    1.  Apply a known dynamic input signal (e.g., sine wave, step input, ramp input) to the instrument.
    2.  Simultaneously apply the same signal to a traceable reference instrument.
    3.  Compare the output of the instrument under test with the output of the reference instrument.
    4.  Analyze parameters like bandwidth, rise time, settling time, and phase lag.
*   **Example:** Calibrating an oscilloscope by applying a known frequency sine wave and checking if the displayed amplitude and frequency match the input.
*   **Reference:** Doebelin & Manik (6th Ed.) discusses the importance of dynamic calibration for systems responding to changing conditions.

**2.3 Field Calibration**

*   **Definition:** Field calibration is performed on-site, in the actual operating environment of the instrument, without removing it from its system.
*   **Purpose:** To ensure the instrument maintains accuracy in its operational setting, accounting for environmental factors (temperature, humidity, vibration) and system interactions.
*   **Procedure:**
    1.  Utilize portable calibration equipment that can simulate the expected input signals.
    2.  Compare the instrument's readings with the results obtained from the portable calibration equipment.
    3.  Adjustments are made as necessary to bring the instrument within specified tolerances.
*   **Example:** Calibrating a pressure transmitter installed on a pipeline using a portable pressure calibrator.
*   **Important Point:** Field calibration is often less precise than laboratory calibration but is essential for practical applications.

**2.4 Traceable Calibration**

*   **Definition:** Traceable calibration is a calibration process where the measurement results can be related to national or international standards through an unbroken chain of comparisons, each having a stated uncertainty.
*   **Purpose:** To provide confidence in the accuracy of measurements and to meet regulatory or quality assurance requirements.
*   **Procedure:**
    1.  The calibration is performed using standards that are themselves calibrated by a higher-level accredited laboratory or national metrology institute.
    2.  A calibration certificate is issued, documenting the traceability of the measurements.
*   **Example:** A company calibrates its torque wrench using a certified torque standard that was calibrated by a national metrology institute.
*   **Reference:** Tumanski (Taylor & Francis) emphasizes the significance of traceability in ensuring reliable measurements.

**2.5 Master Calibration**

*   **Definition:** Master calibration refers to the calibration of a reference standard instrument against a higher-level standard (often a primary standard or a national standard).
*   **Purpose:** To establish the accuracy of the reference standard used for calibrating other instruments (working instruments).
*   **Procedure:**
    1.  A highly accurate instrument (the master) is calibrated by an accredited laboratory or national metrology institute.
    2.  This master instrument is then used as the standard for calibrating other instruments in the organization.
*   **Example:** A laboratory's precision mass standard being calibrated by the National Institute of Standards and Technology (NIST) in the USA.
*   **Important Point:** Master calibration ensures that the calibration chain starts from the most accurate possible references.

---

### 3. MEMS Accelerometers

MEMS (Micro-Electro-Mechanical Systems) accelerometers are miniature devices that measure acceleration. They are fabricated using microfabrication techniques similar to those used for integrated circuits.

**3.1 Working Principle**

*   **Core Concept:** MEMS accelerometers typically operate on the principle of **capacitive sensing** or **piezoresistive sensing**, utilizing a proof mass that moves in response to acceleration.
*   **Capacitive MEMS Accelerometers:**
    *   Consist of a seismic mass (proof mass) suspended by springs.
    *   The proof mass has fixed plates (stator) and moving plates (rotor) attached to it.
    *   As acceleration is applied, the proof mass moves, changing the capacitance between the fixed and moving plates.
    *   This change in capacitance is measured electronically and is proportional to the applied acceleration.
    *   **Key Features:** High sensitivity, low power consumption, good linearity.
    *   **Reference:** Kalsi (2019) provides a good overview of capacitive sensing principles in accelerometers.

*   **Piezoresistive MEMS Accelerometers:**
    *   The proof mass is attached to beams with piezoresistors embedded in them.
    *   When acceleration is applied, the proof mass exerts a force on the beams, causing them to deform.
    *   This deformation changes the resistance of the piezoresistors due to the piezoresistive effect.
    *   The change in resistance is measured, typically in a Wheatstone bridge configuration, and is proportional to the acceleration.
    *   **Key Features:** Robust, can withstand higher shock levels.

**3.2 Functional Elements in a MEMS Accelerometer System**

*   **Sensing Element:** The micro-machined structure with proof mass and sensing mechanism (capacitive plates or piezoresistors).
*   **Signal Conditioning Circuitry:** Amplifiers, filters, and linearization circuits to process the raw signal from the sensing element.
*   **Analog-to-Digital Converter (ADC):** If a digital output is required.
*   **On-board Processing (Optional):** Microcontrollers for self-test, compensation, or data filtering.

**3.3 Applications of MEMS Accelerometers**

MEMS accelerometers are ubiquitous in modern technology due to their small size, low cost, and versatility. They are used in:

*   **Automotive:** Airbag deployment systems, electronic stability control, navigation systems.
*   **Consumer Electronics:** Smartphones (screen orientation, motion sensing), gaming controllers, digital cameras (image stabilization).
*   **Industrial:** Vibration monitoring, structural health monitoring, tilt sensing, robotics.
*   **Aerospace & Defense:** Inertial navigation systems, guidance and control.
*   **Medical:** Patient monitoring, prosthetics.

**3.4 Calibration of MEMS Accelerometers**

MEMS accelerometers, like any other sensor, require calibration to ensure accuracy.

*   **Static Calibration:**
    *   **Method:** Inclining the accelerometer at known angles with respect to gravity. Gravity provides a constant acceleration of 9.81 m/s² (or 1g) acting vertically downwards. By tilting the accelerometer, the component of gravity along its sensitive axis can be controlled and varied (e.g., tilting by 90 degrees yields 0g, tilting by 0 degrees yields 1g).
    *   **Purpose:** To determine the accelerometer's sensitivity, zero offset, and linearity.
    *   **Reference:** Kalsi (2019) explains static calibration using gravity.

*   **Dynamic Calibration:**
    *   **Method:** Using a **shaker table** or **centrifuge** to apply known dynamic accelerations. The shaker table can provide sinusoidal or random vibrations, while a centrifuge can provide constant centripetal acceleration.
    *   **Purpose:** To assess the accelerometer's frequency response and accuracy under dynamic conditions.
    *   **Example:** Calibrating a smartphone's accelerometer by placing it on a shaker table and comparing its reported acceleration to the known input acceleration from the shaker.
    *   **Reference:** Doebelin & Manik (6th Ed.) discusses dynamic calibration techniques using shakers.

*   **Traceable Calibration:**
    *   **Method:** Calibrating the MEMS accelerometer against a **primary accelerometer standard** or a **calibration system** that is itself traceable to national standards. This often involves using a specialized shake table with an integrated, highly accurate reference accelerometer.
    *   **Purpose:** To ensure the calibration results are scientifically valid and can be related to fundamental physical quantities.

**3.5 Important Points to Remember about MEMS Accelerometers**

*   **Sensitivity:** The output signal change per unit of acceleration (e.g., mV/g or count/g).
*   **Range:** The maximum acceleration the accelerometer can measure without damage or significant loss of accuracy.
*   **Bandwidth:** The frequency range over which the accelerometer maintains a specified accuracy.
*   **Zero-g Offset:** The output signal when no acceleration is applied.
*   **Bias Stability:** The tendency of the zero-g offset to drift over time or with temperature changes.
*   **Shock Survival:** The ability of the accelerometer to withstand high-impact forces without permanent damage.
*   **Cross-axis Sensitivity:** The sensitivity of the accelerometer to acceleration applied perpendicular to its intended sensitive axis.

---

### 4. Practice Questions and Answers

**Question 1:**
Which functional element in an electronic instrumentation system is responsible for converting a physical quantity into an electrical signal?
(a) Signal Conditioning
(b) Data Processing
(c) Sensor/Transducer
(d) Data Display

**Answer:** (c) Sensor/Transducer

**Question 2:**
State the primary purpose of static calibration.

**Answer:** To determine the instrument's static performance characteristics such as linearity, hysteresis, zero offset, and sensitivity by applying constant input values.

**Question 3:**
A MEMS accelerometer measures acceleration by converting the displacement of a proof mass into a change in capacitance. What type of MEMS accelerometer is this?
(a) Piezoresistive
(b) Piezoelectric
(c) Capacitive
(d) Thermoelectric

**Answer:** (c) Capacitive

**Question 4:**
Explain the concept of "traceable calibration" and why it is important.

**Answer:** Traceable calibration means that the calibration results can be related to national or international standards through an unbroken chain of comparisons, each with a stated uncertainty. It is important because it provides confidence in the accuracy of measurements and is often a requirement for quality assurance and regulatory compliance.

**Question 5:**
Describe how gravity can be used for the static calibration of a MEMS accelerometer.

**Answer:** Gravity provides a constant acceleration of 1g acting downwards. By orienting the accelerometer at different angles relative to the vertical, the component of gravity along its sensitive axis can be controlled. For example, orienting it horizontally gives 0g along the axis, while orienting it vertically gives 1g. By measuring the accelerometer's output at these known gravitational accelerations, its sensitivity and zero-g offset can be determined.

**Question 6:**
Match the following calibration methods with their typical application:
    A. Dynamic Calibration      i. On-site verification
    B. Field Calibration       ii. Comparison against high-level standards
    C. Traceable Calibration   iii. Response to changing inputs

**Answer:**
A - iii
B - i
C - ii

**Question 7:**
What are the two main sensing principles commonly used in MEMS accelerometers? Briefly explain one of them.

**Answer:** The two main sensing principles are capacitive and piezoresistive.
**Explanation of Capacitive Sensing:** In a capacitive MEMS accelerometer, a proof mass is suspended by springs. This proof mass has movable plates, and fixed plates are placed nearby. As acceleration is applied, the proof mass moves, altering the distance between the fixed and movable plates, thus changing the capacitance. This change in capacitance is then measured and correlated to the acceleration.

---

### 5. Important Points to Remember

*   **Instrumentation System Structure:** Sensor $\rightarrow$ Signal Conditioning $\rightarrow$ Data Acquisition $\rightarrow$ Data Processing $\rightarrow$ Display/Output.
*   **Calibration Goal:** Ensure accuracy and reliability of measurements.
*   **Static vs. Dynamic Calibration:** Static deals with constant inputs, dynamic with changing inputs.
*   **Traceability:** The unbroken chain of comparisons to recognized standards.
*   **MEMS Accelerometers:** Tiny sensors that measure acceleration, often using capacitive or piezoresistive principles.
*   **Gravity Calibration:** A common method for static calibration of accelerometers.
*   **Shaker Tables/Centrifuges:** Used for dynamic calibration of accelerometers.

---

This comprehensive set of notes covers the functional elements of electronic instrumentation systems and the various calibration methods, with a specific focus on MEMS accelerometers, aligning with the provided learning and course outcomes. Remember to refer to the suggested textbooks for further in-depth understanding.
