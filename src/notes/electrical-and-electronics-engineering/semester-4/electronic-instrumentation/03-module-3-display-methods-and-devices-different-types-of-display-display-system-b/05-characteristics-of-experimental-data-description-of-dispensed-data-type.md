---
title: "characteristics of experimental data- description of dispensed data- type"
subject: "ELECTRONIC INSTRUMENTATION"
module: "Module 3: Display methods and devices: Different types of display –display system building blocks."
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35e84"
status: "completed"
scrapedAt: "2026-05-23T16:16:21.271Z"
---
# Electronic Instrumentation: Module 3 - Display Methods and Devices

## Topic: Characteristics of Experimental Data - Description of Dispensed Data - Types

This module focuses on how we visualize and present the data collected from experiments and measurements. Understanding the characteristics of this data and how it is displayed is crucial for interpreting results accurately.

---

### 1. Characteristics of Experimental Data

Experimental data is the raw information obtained from measurements or tests. Its characteristics determine how it should be processed, analyzed, and presented.

*   **Accuracy:** The degree of closeness of measurements to the true value.
    *   **Key Concept:** Accuracy is often expressed as a percentage of the full scale or reading.
    *   **Example:** A thermometer reading 25.1°C when the actual temperature is 25.0°C has a high accuracy.
    *   **Textbook Reference:** Sawhney, Chapter 3 discusses errors and their impact on accuracy. Gupta, Chapter 2 also covers the concept of accuracy.
*   **Precision:** The degree of closeness of agreement between a series of measurements of the same quantity, under the same conditions.
    *   **Key Concept:** Precision refers to the reproducibility of measurements. A precise instrument will yield similar results even if they are not close to the true value.
    *   **Example:** If a scale consistently reads 10.2 kg for an object that is actually 10.0 kg, it is precise but not accurate.
    *   **Textbook Reference:** Gupta, Chapter 2 elaborates on precision and its distinction from accuracy.
*   **Resolution:** The smallest change in a measured quantity that can be detected by a measurement system.
    *   **Key Concept:** It's the smallest increment displayed or discernible.
    *   **Example:** A digital voltmeter displaying to two decimal places (e.g., 1.23V) has a resolution of 0.01V.
    *   **Textbook Reference:** Kalsi, Chapter 1 explains the resolution of different display devices.
*   **Sensitivity:** The ratio of the change in the output of a measuring instrument to the corresponding change in the input quantity.
    *   **Key Concept:** How much the output changes for a given change in input. Higher sensitivity means a smaller input change produces a noticeable output change.
    *   **Formula:** Sensitivity (S) = Change in Output / Change in Input
    *   **Example:** A pressure gauge that shows a deflection of 1 cm for every 10 Pa of pressure change is more sensitive than one showing 0.5 cm for the same pressure change.
    *   **Textbook Reference:** Sawhney, Chapter 3 discusses sensitivity in the context of instrument characteristics.
*   **Linearity:** The degree to which the output of a device is directly proportional to the input over its operating range.
    *   **Key Concept:** A linear device has a constant sensitivity across its entire range.
    *   **Example:** An ideal ammeter where the deflection is directly proportional to the current.
    *   **Textbook Reference:** Gupta, Chapter 4 on measuring instruments covers linearity.
*   **Range:** The difference between the maximum and minimum values that a measuring instrument can measure.
    *   **Key Concept:** The span of values an instrument is designed to handle.
    *   **Example:** A thermometer with a range of 0°C to 100°C.
    *   **Textbook Reference:** Kalsi, Chapter 1 lists the ranges of various electronic instruments.
*   **Drift:** Slow, undesired change in the output of an instrument over time, even when the input is constant.
    *   **Key Concept:** Can be due to environmental factors (temperature, humidity) or aging of components.
    *   **Types:** Zero drift, sensitivity drift.
    *   **Textbook Reference:** Doebelin's Measurement Systems discusses drift as a source of error.
*   **Hysteresis:** The phenomenon where the output of a system depends not only on the present input but also on its past inputs.
    *   **Key Concept:** Different output values are obtained for the same input value depending on whether the input is increasing or decreasing.
    *   **Example:** Magnetic materials exhibiting hysteresis in their magnetization curve.
    *   **Textbook Reference:** Tumanski, Principles of Electrical Measurement covers hysteresis in magnetic circuits.
*   **Random Errors:** Errors that fluctuate in magnitude and sign, and cannot be corrected by calibration.
    *   **Key Concept:** Usually due to uncontrollable environmental variations or limitations of the observer.
    *   **Effect:** Tend to average out over many measurements.
    *   **Textbook Reference:** Sawhney, Chapter 3 on errors.
*   **Systematic Errors:** Errors that are consistent in magnitude and sign, and can often be traced to a specific cause.
    *   **Key Concept:** Can be due to instrument calibration errors, environmental conditions, or incorrect measurement techniques.
    *   **Effect:** Can be corrected or compensated for.
    *   **Textbook Reference:** Gupta, Chapter 2 discusses different types of errors including systematic errors.

---

### 2. Description of Dispensed Data

Dispensed data is the information presented by a display device after it has processed the raw experimental data. The way it's presented significantly impacts its interpretation.

*   **Format:** How the data is organized and presented.
    *   **Analog Display:** Uses a continuous scale and a pointer (e.g., meter needle).
        *   **Pros:** Intuitive for showing trends and rates of change, can be read at a glance.
        *   **Cons:** Can be subject to parallax error, interpolation may be required, lower precision.
        *   **Example:** Analog voltmeter, pressure gauge.
    *   **Digital Display:** Uses numerical digits to represent the measured value (e.g., LEDs, LCDs).
        *   **Pros:** High precision, eliminates reading errors, easy to record.
        *   **Cons:** Can be difficult to quickly gauge trends, potential for missing transient values if sampling rate is low.
        *   **Example:** Digital multimeter, frequency counter.
    *   **Graphical Display:** Presents data in a visual format like charts, graphs, or waveforms.
        *   **Pros:** Excellent for showing trends, relationships between variables, and patterns.
        *   **Cons:** Requires more complex hardware (e.g., oscilloscope, computer screen).
        *   **Example:** Oscilloscope waveform, trend chart from SCADA.
*   **Units:** The standard measures used to quantify the data (e.g., Volts, Amperes, Pascals, °C).
    *   **Key Concept:** Clear and consistent labeling of units is essential for correct interpretation.
    *   **Example:** Displaying voltage as "12.5 V" rather than just "12.5".
*   **Scale:** The range of values represented on an analog display or the increments on a digital/graphical display.
    *   **Key Concept:** The scale must be appropriate for the measured quantity and its expected range.
    *   **Example:** A voltmeter with a scale from 0-10V for measuring a 5V signal.
*   **Significant Figures:** The digits in a number that are known with some degree of certainty.
    *   **Key Concept:** Proper use of significant figures reflects the precision of the measurement and prevents conveying false accuracy.
    *   **Example:** If a measurement has an accuracy of ±0.1V, it should be displayed as 12.3V, not 12.345V.
*   **Readability:** How easily and quickly the displayed information can be understood.
    *   **Key Concept:** Depends on factors like font size, contrast, glare, and clutter.
    *   **Example:** Large, clear digits on a digital display improve readability.

---

### 3. Types of Display

This section delves into the various technologies used to present measured data to the user.

#### 3.1 Analog Displays

*   **Moving Iron Instruments:** Based on the principle of magnetic attraction or repulsion between stationary and moving iron vanes.
    *   **Types:** Attraction type, Repulsion type.
    *   **Applications:** AC and DC measurements (voltmeters, ammeters).
    *   **Characteristics:** Robust, relatively inexpensive, scale is not uniform.
    *   **Textbook Reference:** Golding & Widdis, Chapter 4 covers moving iron instruments.
*   **Moving Coil Instruments (D'Arsonval Galvanometer):** Operates on the principle of the force exerted on a current-carrying conductor placed in a magnetic field.
    *   **Applications:** Primarily for DC measurements. Can be adapted for AC using rectifiers.
    *   **Characteristics:** High sensitivity, uniform scale, requires a permanent magnet.
    *   **Textbook Reference:** Sawhney, Chapter 4 details moving coil instruments.
*   **Electrodynamometer Instruments:** Involve the interaction between magnetic fields produced by stationary and moving coils.
    *   **Applications:** Used as standard instruments for AC and DC measurements (wattmeters, power factor meters, frequency meters).
    *   **Characteristics:** Can measure power directly, scale is non-uniform.
    *   **Textbook Reference:** Gupta, Chapter 5 explains electrodynamometer principles.

#### 3.2 Digital Displays

*   **Seven-Segment Displays:** A common display device for numeric characters. Each digit is formed by seven individual segments.
    *   **Types:** Light Emitting Diode (LED), Liquid Crystal Display (LCD).
    *   **LED Displays:** Emit light when current flows through them. Bright, consume more power.
    *   **LCD Displays:** Modulate ambient light. Low power consumption, require a backlight for visibility in dark.
    *   **Display Controllers:** Integrated circuits (ICs) like the 7447 or 74LS47 are used to decode BCD (Binary Coded Decimal) input into the segment patterns for the display.
    *   **Example:** Digital panel meters (DPMs), calculators, digital clocks.
    *   **Textbook Reference:** Kalsi, Chapter 1 discusses the principles of LED and LCD displays and their driving circuits.
*   **Dot Matrix Displays:** Characters are formed by a grid of dots.
    *   **Types:** Monochromatic, color.
    *   **Applications:** More complex characters, alphanumeric displays, graphical information.
    *   **Example:** Programmable Logic Controllers (PLCs) often use dot matrix displays for status messages.
*   **Dot-Graphic Displays:** Allow for displaying not just characters but also graphs, icons, and custom graphics.
    *   **Applications:** Advanced industrial displays, diagnostic equipment.

#### 3.3 Graphical Displays

*   **Cathode Ray Oscilloscope (CRO):** Uses a focused beam of electrons to illuminate a fluorescent screen, creating a visible trace representing the input signal's variation over time.
    *   **Key Components:** Electron gun, deflection system, screen.
    *   **Applications:** Visualizing waveforms, measuring voltage, time, frequency.
    *   **Textbook Reference:** Sawhney, Chapter 15 provides a comprehensive overview of CROs.
*   **Digital Storage Oscilloscope (DSO):** Captures and stores waveform data digitally, allowing for detailed analysis and recall of transient events.
    *   **Key Features:** Pre-triggering, averaging, mathematical functions.
    *   **Applications:** Troubleshooting complex electronic circuits, analyzing fast transients.
    *   **Textbook Reference:** Kalsi, Chapter 7 discusses modern oscilloscopes, including DSOs.
*   **Dot-Matrix Graphical Displays (e.g., LCD/LED based):** Can be programmed to display graphs, bar charts, etc.
    *   **Applications:** Trend displays in SCADA systems, status indicators in PLCs.
    *   **Textbook Reference:** Bolton's PLC textbook (e.g., Chapter 7 on HMI) might discuss graphical displays on control panels.
*   **Chart Recorders:** Create a permanent record of measurements over time on a paper chart.
    *   **Types:** Analog, digital.
    *   **Applications:** Monitoring process variables like temperature, pressure, flow over extended periods.
    *   **Textbook Reference:** Gupta, Chapter 16 covers chart recorders.

---

### 4. Display System Building Blocks

A display system is a collection of interconnected components that acquire, process, and present data.

*   **Sensor/Transducer:** Converts the physical quantity being measured into an electrical signal.
    *   **Example:** Thermocouple, strain gauge, pressure sensor.
    *   **Course Outcome Alignment:** CO1 (Identify sensors/transducers).
*   **Signal Conditioning Circuit:** Processes the raw electrical signal from the sensor to make it suitable for display.
    *   **Functions:** Amplification, filtering, linearization, impedance matching, conversion (e.g., analog to digital).
    *   **Example:** An operational amplifier circuit to amplify a small sensor output.
    *   **Course Outcome Alignment:** CO2 (Design signal conditioning circuits).
*   **Analog-to-Digital Converter (ADC):** Converts the analog signal from the signal conditioning circuit into a digital format that can be processed by digital display systems.
    *   **Types:** Successive Approximation ADC, Sigma-Delta ADC, Flash ADC.
    *   **Key Parameter:** Resolution, conversion speed.
    *   **Example:** A microcontroller with an built-in ADC to read a sensor.
    *   **Textbook Reference:** Kalsi, Chapter 2 covers ADCs.
*   **Digital Processing Unit (Microprocessor/Microcontroller):** Processes the digital data from the ADC, performs calculations, formatting, and controls the display.
    *   **Functions:** Data manipulation, error checking, control logic.
    *   **Example:** A microcontroller in a digital multimeter.
    *   **Course Outcome Alignment:** CO4 (Develop logic for process control applications using PLC programming) – while not directly display, the processing logic is foundational.
*   **Digital-to-Analog Converter (DAC):** (Used in some analog displays or for generating analog control signals) Converts digital data back to an analog signal.
    *   **Example:** For driving analog meters in a hybrid system.
*   **Display Driver/Controller:** Interface circuitry that translates the processed data into signals that can activate the display elements (e.g., segments of a seven-segment display, pixels on a dot-matrix screen).
    *   **Example:** A seven-segment decoder IC.
*   **Display Element:** The physical device that presents the information visually (LED, LCD, CRT, etc.).

---

### 5. Connecting Display Systems to Larger Systems (CO3, CO6)

Display systems are often part of larger instrumentation and control architectures.

*   **Data Transmission:** How data from sensors and processed data from controllers are sent to display units.
    *   **Wired:** Analog signals (4-20mA), digital signals (serial communication like RS-232, RS-485, USB, Ethernet).
    *   **Wireless:** RF, Wi-Fi, Bluetooth.
    *   **SCADA (Supervisory Control and Data Acquisition):** Systems that collect data from remote locations, process it, and present it on a central operator interface (Human-Machine Interface - HMI). Displays in SCADA are crucial for monitoring and control.
        *   **Example:** A SCADA system displaying real-time temperature readings from multiple sensors across a factory.
        *   **Textbook Reference:** Boyer's SCADA book is directly relevant.
    *   **PLC (Programmable Logic Controller):** Used for automation of industrial processes. PLCs often have integrated displays or connect to HMIs for data visualization.
        *   **Example:** A PLC controlling a conveyor belt might display the belt speed or number of items counted.
        *   **Textbook Reference:** Bolton's PLC book is directly relevant.
    *   **Course Outcome Alignment:** CO3 (Understand data transmission), CO6 (Describe fundamental concepts of DCS and SCADA systems).

---

### 6. Practice Questions and Answers

**Question 1:** Differentiate between accuracy and precision in the context of a measurement system. (K4)

**Answer:**
*   **Accuracy:** Refers to how close a measurement is to the true or accepted value. It addresses the correctness of the measurement.
*   **Precision:** Refers to the repeatability or reproducibility of measurements made under the same conditions. It addresses the closeness of agreement among a series of measurements.
    *   *Analogy:* An archer hitting the same spot repeatedly but far from the bullseye is precise but not accurate. An archer consistently hitting near the bullseye, even if not perfectly clustered, is accurate and may also be precise.

**Question 2:** A digital thermometer displays temperature to one decimal place (e.g., 25.3°C). What is its resolution? (K3)

**Answer:** The resolution of the digital thermometer is 0.1°C, as this is the smallest change it can display.

**Question 3:** Name two common types of digital display elements and list one advantage and one disadvantage of each. (K2)

**Answer:**
1.  **LED (Light Emitting Diode) Displays:**
    *   **Advantage:** High brightness, good visibility in various lighting conditions.
    *   **Disadvantage:** Higher power consumption compared to LCDs.
2.  **LCD (Liquid Crystal Display) Displays:**
    *   **Advantage:** Very low power consumption, suitable for battery-powered devices.
    *   **Disadvantage:** Requires a backlight or ambient light for visibility, can have slower response times.

**Question 4:** Briefly describe the function of a signal conditioning circuit in a measurement system. (K2)

**Answer:** A signal conditioning circuit processes the raw electrical signal from a sensor or transducer to make it suitable for further processing or display. This typically involves operations like amplification, filtering, linearization, or conversion (e.g., analog to digital). Its goal is to improve signal quality and compatibility with subsequent stages.

**Question 5:** A process controller needs to display the level of a liquid in a tank, which can range from 0 to 5 meters. The controller uses a 0-10V analog output signal that is proportional to the level. A voltmeter with a scale of 0-10V is used as the display.
    a) If the liquid level is 2.5 meters, what is the expected voltmeter reading? (K3)
    b) If the voltmeter displays 6V, what is the corresponding liquid level? (K3)

**Answer:**
    The relationship between liquid level (L) and voltmeter reading (V) is linear:
    V = (10V / 5m) * L = 2V/m * L

    a) For L = 2.5 meters:
       V = (2 V/m) * 2.5 m = 5V

    b) For V = 6V:
       6V = (2 V/m) * L
       L = 6V / (2 V/m) = 3 meters

---

### 7. Important Points to Remember

*   Understanding the characteristics of experimental data (accuracy, precision, resolution, sensitivity) is fundamental to interpreting measurements correctly.
*   The choice of display method (analog, digital, graphical) depends on the application and the need to convey information effectively.
*   Digital displays offer higher precision and reduce reading errors but can make trend analysis more challenging than analog displays.
*   Display system building blocks include sensors, signal conditioning, processing units, and the display element itself.
*   Data transmission methods are crucial for integrating display systems into larger SCADA or PLC-based industrial control systems.
*   Always ensure units are clearly displayed to avoid misinterpretation.
*   Resolution defines the smallest detectable change, while accuracy relates to closeness to the true value.

---
This comprehensive study note covers the requested topic from Module 3, aligning with the learning outcomes and referencing concepts from the provided textbooks.
