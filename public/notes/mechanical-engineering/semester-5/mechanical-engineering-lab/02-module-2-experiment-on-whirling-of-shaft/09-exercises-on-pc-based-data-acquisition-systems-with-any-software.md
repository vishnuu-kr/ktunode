---
title: "Exercises on PC-based data acquisition systems with any software."
subject: "MECHANICAL ENGINEERING LAB"
module: "Module 2: Experiment on Whirling of shaft"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf4804463715"
status: "completed"
scrapedAt: "2026-05-20T18:01:38.406Z"
---
# Mechanical Engineering Lab - Module 2: Experiment on Whirling of Shaft

## Topic: Exercises on PC-Based Data Acquisition Systems with Any Software

This module focuses on understanding and utilizing PC-based data acquisition (DAQ) systems, which are crucial for modern experimental setups in mechanical engineering. We will explore their principles, components, and practical application in experiments like the whirling of a shaft.

---

### 1. Introduction to Data Acquisition Systems (DAQ)

**Key Concept:** A DAQ system is a device that converts real-world analog signals (e.g., from sensors) into digital data that a computer can process, analyze, and store.

**Learning Outcome Alignment:** This section directly addresses the ability to choose appropriate instruments (CO1) by introducing the fundamental tool for experimental data collection.

**1.1 What is a DAQ System?**

*   A DAQ system bridges the gap between the physical world and the digital computing world.
*   It typically involves sensors, signal conditioning, an analog-to-digital converter (ADC), and a computer interface.

**1.2 Why Use PC-Based DAQ?**

*   **Increased Accuracy & Precision:** Digital data allows for precise measurements and calculations.
*   **Real-time Monitoring:** Enables observation of experimental parameters as they change.
*   **Automated Data Logging:** Eliminates manual recording, reducing errors and saving time.
*   **Advanced Data Analysis:** Facilitates complex analysis using software tools (graphing, statistical analysis, Fourier transforms, etc.).
*   **Remote Monitoring & Control:** In some advanced setups, DAQ systems can be used for remote operation.
*   **Integration with other Systems:** Can be integrated with control systems, simulations, and other software.

**1.3 Components of a Typical DAQ System:**

*   **Sensors/Transducers:** Convert physical phenomena (e.g., displacement, velocity, acceleration, strain, temperature) into electrical signals.
    *   *Example:* For whirling of a shaft, we might use proximity sensors to measure shaft displacement from its equilibrium position, or accelerometers to measure vibrations.
*   **Signal Conditioning:** Processes the raw sensor signal to make it suitable for the ADC. This can include:
    *   **Amplification:** Increasing the signal amplitude if it's too small.
    *   **Filtering:** Removing unwanted noise or frequencies.
    *   **Isolation:** Protecting the DAQ system and computer from electrical interference or high voltages.
    *   **Excitation:** Providing a power source for certain sensors (e.g., strain gauges).
*   **Analog-to-Digital Converter (ADC):** The core component that converts the continuous analog voltage from the sensor into discrete digital values.
    *   **Key Parameters:**
        *   **Resolution:** The smallest change in analog input that the ADC can detect (e.g., 12-bit, 16-bit). Higher resolution means finer digital representation.
        *   **Sampling Rate:** The number of analog samples taken per second (e.g., 10 kS/s, 1 MS/s). A higher sampling rate captures faster changing signals accurately (Nyquist theorem is crucial here – sampling rate must be at least twice the highest frequency component of the signal).
*   **Computer Interface:** Connects the DAQ hardware to the computer (e.g., USB, PCI, Ethernet).
*   **Software:** The application that controls the DAQ hardware, acquires data, displays it, and performs analysis.

**Textbook Reference:**
*   **Metrology for Engineers by Shotbolt & Gayler:** This textbook often covers measurement principles and instrumentation, which can provide context for sensor selection and signal characteristics.
*   **Engineering Measurements by Collett & Hope:** Likely discusses sensor types, signal conditioning, and the fundamentals of data acquisition in measurement systems.

---

### 2. Data Acquisition for Whirling of Shaft Experiment

**Key Concept:** The whirling of a shaft experiment involves measuring the shaft's displacement or vibration characteristics at various speeds to identify the critical speed(s) at which resonance occurs. DAQ systems are essential for accurately capturing these dynamic behaviors.

**Learning Outcome Alignment:** This section directly applies DAQ principles to a specific mechanical engineering experiment, aligning with CO1, CO3 (understanding dynamic behavior of machinery), and CO4 (functions of devices for automation).

**2.1 Specific Measurements in Whirling of Shaft:**

*   **Shaft Displacement:** Typically measured radially from the shaft's axis of rotation. Proximity sensors (capacitive or eddy current) are commonly used.
*   **Shaft Speed (RPM):** Measured using tachometers or optical sensors. This is crucial for correlating displacement with rotational speed.
*   **Vibration Amplitude & Frequency:** Accelerometers can be mounted on the shaft or bearing housings to capture vibration data.

**2.2 Choosing Appropriate Sensors (CO1):**

*   **Proximity Sensors:**
    *   **Principle:** Measure the distance to a conductive target (the shaft).
    *   **Advantages:** Non-contact, high frequency response, suitable for dynamic displacement.
    *   **Considerations:** Target material, gap distance, environmental conditions.
*   **Accelerometers:**
    *   **Principle:** Piezoelectric or piezoresistive devices that generate an electrical signal proportional to acceleration.
    *   **Advantages:** Measures vibration directly, can detect high-frequency vibrations.
    *   **Considerations:** Sensitivity, frequency range, mounting.
*   **Tachometers:**
    *   **Principle:** Optical sensors detect a reflective marker on the shaft, or magnetic sensors detect passing teeth on a gear.
    *   **Advantages:** Accurate speed measurement.

**2.3 Signal Conditioning for Whirling:**

*   **Proximity Sensors:** May require an external power supply and signal conditioning module that outputs a voltage proportional to the gap. This voltage needs to be digitized.
*   **Accelerometers:** Often require a charge amplifier or IEPE (Integrated Electronics Piezo-Electric) conditioner to convert the high-impedance piezoelectric signal into a low-impedance voltage signal.
*   **Tachometers:** Signal conditioning might involve pulse shaping or frequency-to-voltage conversion.

**2.4 DAQ Hardware for Whirling Experiment:**

*   **Multi-channel DAQ Card:** To simultaneously acquire data from multiple sensors (e.g., displacement from two perpendicular directions and RPM).
*   **Appropriate Sampling Rate:** Crucial for capturing the shaft's dynamic motion and vibrations. If the critical speed is expected around, say, 1000 RPM (approx. 16.7 Hz), but vibrations can be much higher harmonics, a sampling rate of at least 1 kHz or higher might be needed to capture transient phenomena and harmonics. A minimum of 10-20 kS/s per channel is generally recommended for such dynamic measurements.
*   **Resolution:** Sufficient resolution (e.g., 12-bit or 16-bit) is needed to accurately represent small displacements and vibration amplitudes.

**Example Scenario:**
Imagine a whirling shaft experiment. You use two proximity sensors placed 90 degrees apart to measure radial displacement in the X and Y directions. You also use an optical tachometer to measure RPM.
*   **Sensors:** Proximity sensors (analog output), Optical Tachometer (digital pulse output).
*   **DAQ:** A USB DAQ module with at least 3 input channels (2 analog, 1 digital). The analog channels need sufficient input voltage range to accommodate the proximity sensor outputs. The digital channel should be capable of counting pulses for RPM calculation.
*   **Software:** A DAQ software package (e.g., LabVIEW, MATLAB DAQ Toolbox, or dedicated vendor software) is used to configure the DAQ card, acquire data, display real-time plots of displacement vs. time and RPM vs. time, and log the data.

**Important Point to Remember:** The sampling rate must be significantly higher than the maximum frequency of interest in the whirling phenomenon. If the shaft is expected to vibrate at frequencies much higher than the rotational frequency due to imbalances or internal damping, you need to choose your sampling rate accordingly.

---

### 3. PC-Based Data Acquisition Software

**Key Concept:** Software is the interface that allows users to control the DAQ hardware, acquire data, and perform analysis. Various software packages cater to different needs and levels of expertise.

**Learning Outcome Alignment:** This section directly addresses the ability to demonstrate functions and control of devices used for industrial automation (CO4) by focusing on the software aspect of DAQ, and also CO1 by highlighting software choices.

**3.1 Types of DAQ Software:**

*   **Vendor-Specific Software:** Supplied by the DAQ hardware manufacturer. Often user-friendly and optimized for their hardware (e.g., NI-DAQmx for National Instruments, Data Acquisition Toolbox for MathWorks).
*   **General-Purpose DAQ Software:** Can interface with various hardware platforms.
*   **Programming Environments with DAQ Toolboxes:**
    *   **LabVIEW (National Instruments):** A graphical programming environment widely used in engineering for its ease of visualising data flow and control. It's excellent for creating custom DAQ applications.
    *   **MATLAB (MathWorks) with DAQ Toolbox:** A powerful numerical computation and visualization environment. Allows for complex data analysis and algorithm development.
    *   **Python with Libraries (e.g., NumPy, SciPy, PyDAQmx):** Open-source and flexible, offering a programmatic approach to DAQ.

**3.2 Key Software Functionalities:**

*   **Hardware Configuration:** Setting up channels, sampling rates, trigger modes, input ranges.
*   **Data Acquisition Control:** Starting, stopping, and pausing data acquisition.
*   **Real-time Data Display:** Plotting acquired data in various formats (time-domain waveforms, XY plots, spectral plots).
*   **Data Logging:** Saving acquired data to files (e.g., .csv, .txt, .mat).
*   **Signal Processing & Analysis:**
    *   **Filtering:** Low-pass, high-pass, band-pass filters.
    *   **FFT (Fast Fourier Transform):** For spectral analysis to identify dominant frequencies (crucial for finding critical speeds).
    *   **Statistical Analysis:** Mean, RMS, standard deviation.
    *   **Calculations:** Deriving RPM from tachometer signals, calculating displacement magnitudes.
*   **User Interface Development:** Creating custom front panels for easier interaction.

**Textbook Reference:**
*   **Mechatronics: Electronic Control Systems in Mechanical and Electrical Engineering by W. Bolton:** Bolton's book, especially in later editions or related texts on mechatronics, will discuss the integration of sensors, microcontrollers, and computers, often implying the use of software for control and data acquisition.
*   **Mechatronics: Integrated Mechanical Electronic Systems by Ramachandran, Vijayaraghavan, Balasundaram:** This text is highly relevant as it specifically covers mechatronics, which heavily relies on DAQ systems and their software control for integrated systems.

**Example Software Use (Conceptual - using LabVIEW as an example):**

In LabVIEW, you would:
1.  **Create a Virtual Instrument (VI):** A graphical program.
2.  **Front Panel:** Design controls (start/stop buttons) and indicators (graphs of displacement vs. time, RPM display).
3.  **Block Diagram:**
    *   Place DAQ Assistant or DAQmx VIs to configure channels, sampling rate, and acquisition mode.
    *   Use "While Loop" for continuous acquisition.
    *   Use "Array" functions to collect data points.
    *   Use "Chart" or "Graph" indicators to display data in real-time.
    *   Use "Express" VIs for FFT analysis to plot frequency spectrum.
    *   Use "Write to Measurement File" VI to save data.
    *   Use "Formula Node" or MathScript nodes for custom calculations.

**Important Point to Remember:** The choice of software significantly impacts the ease of use, analysis capabilities, and customizability of your DAQ system. For complex analysis like identifying critical speeds from vibration data, spectral analysis tools within the software are indispensable.

---

### 4. Practical Exercises and Questions

**Learning Outcome Alignment:** These exercises test understanding across all learning outcomes, particularly CO1, CO3, and CO4.

**Exercise 1: Sensor Selection and DAQ Configuration**

**Scenario:** You are setting up a whirling shaft experiment. You have access to a USB DAQ device with 4 analog input channels (±10V range, 100 kS/s max sampling rate) and 1 digital input channel. You have the following sensors:
    *   **Sensor A:** Proximity sensor (0-5V output, corresponds to 0-10mm gap, bandwidth 5 kHz).
    *   **Sensor B:** Accelerometer (±5V output, corresponds to ±50 m/s², bandwidth 10 kHz).
    *   **Sensor C:** Optical Tachometer (produces a pulse for every shaft revolution).

**Questions:**

a)  Which sensors would you choose to measure shaft displacement and speed for this experiment? Justify your choice. (CO1)
b)  If you need to measure displacement in two perpendicular directions and the shaft speed, how would you connect the sensors to the DAQ device? Which channels would you use? (CO1, CO4)
c)  What is the maximum sampling rate you can realistically set for each analog channel if you are acquiring data from two displacement sensors simultaneously? Explain your reasoning. (CO1)
d)  What is the minimum sampling rate recommended for the accelerometer if you expect to analyze vibrations up to 1 kHz? (CO1)
e)  Describe the signal conditioning that might be required for each chosen sensor.

**Answers:**

a)  **Displacement:** Sensor A (Proximity sensor). It provides an analog output proportional to displacement, is non-contact, and has a sufficient bandwidth for typical whirling phenomena.
    **Speed:** Sensor C (Optical Tachometer). It directly provides a pulse per revolution, ideal for accurate speed measurement.

b)  *   **Displacement 1 (X-direction):** Connect to Analog Input Channel 0.
    *   **Displacement 2 (Y-direction):** Connect to Analog Input Channel 1.
    *   **Optical Tachometer:** Connect to Digital Input Channel 0.
    This configuration utilizes two analog channels for displacement and one digital channel for speed.

c)  The DAQ device has a total maximum sampling rate of 100 kS/s. If you are using two analog channels simultaneously, the total sampling rate across all analog channels is limited. Assuming a fair distribution or the device's capability to multiplex at high speeds, you could potentially sample each analog channel at up to 50 kS/s. However, for reliable dynamic measurements and to avoid aliasing, it's safer to consider the *total* throughput. If the device truly supports simultaneous sampling on multiple channels, you might be able to sample each at 50 kS/s. If it's time-multiplexed, the rate per channel would be lower. **For a realistic setting aiming for good dynamic response, sampling each at 10 kS/s or 20 kS/s would be a good starting point (total 20-40 kS/s).** The proximity sensor's bandwidth of 5 kHz suggests that sampling at 10-20 kS/s is more than sufficient.

d)  According to the Nyquist-Shannon sampling theorem, the sampling rate must be at least twice the maximum frequency component of the signal. Therefore, for vibrations up to 1 kHz, the minimum sampling rate should be **2 kHz**. A higher rate (e.g., 5-10 kHz) is often preferred for better resolution and to capture potential transient events.

e)  *   **Sensor A (Proximity Sensor):** May require a dedicated power supply from the DAQ card or an external power supply, and its analog output voltage needs to be within the DAQ's input range (0-5V is within ±10V). No complex signal conditioning is usually needed beyond appropriate wiring and voltage scaling in software.
    *   **Sensor C (Optical Tachometer):** The output pulse from the tachometer might need conditioning (e.g., a pull-up resistor if it's an open-collector output) to ensure a clean digital signal for the DAQ's digital input channel.

---

**Exercise 2: Data Analysis for Critical Speed Identification**

**Scenario:** You have acquired data from a whirling shaft experiment. The data files contain two columns: Time (s) and Displacement_X (mm). You also have a separate file with Shaft_Speed (RPM) vs. Time (s).

**Questions:**

a)  How would you process the displacement data to identify the amplitude of vibration at different shaft speeds? (CO3, CO4)
b)  Describe how you would use the data to find the critical speed(s). (CO3)
c)  What type of software feature would be most useful for identifying dominant frequencies in the displacement signal at a specific operating speed? (CO4)
d)  If the shaft exhibits a critical speed around 1500 RPM, and you sampled your data at 1000 Hz, would this sampling rate be adequate to analyze the vibrations? Explain. (CO1)

**Answers:**

a)  You would likely need to process the displacement data in segments corresponding to different stable shaft speeds. For each segment, you could calculate:
    *   **RMS (Root Mean Square) value:** A measure of the overall vibration intensity.
    *   **Peak-to-peak amplitude:** The difference between the maximum and minimum displacement in the segment.
    *   **Spectral analysis (FFT):** To find the amplitude of vibration at different frequencies. The dominant frequency at the critical speed will likely be related to the rotational speed (e.g., 1x RPM for imbalance, or higher multiples for other effects).

b)  To find the critical speed(s):
    1.  Plot the vibration amplitude (e.g., RMS or peak-to-peak displacement) against the shaft speed.
    2.  The critical speed is the RPM at which the vibration amplitude sharply increases or exhibits a peak.
    3.  Alternatively, analyze the frequency spectrum of the displacement signal at various speeds. At critical speeds, you might see a significant increase in the amplitude of vibrations at frequencies related to the shaft's natural frequencies.

c)  A **Fast Fourier Transform (FFT)** function or **spectral analysis tool** would be most useful. This allows you to decompose the time-domain displacement signal into its constituent frequencies and their amplitudes, clearly showing which frequencies are dominant at a given operating speed.

d)  Yes, a sampling rate of 1000 Hz is adequate.
    *   **Nyquist Theorem:** The maximum frequency you can accurately capture is half the sampling rate, which is 500 Hz.
    *   **Analysis:** If the critical speed is around 1500 RPM, this corresponds to 1500 / 60 = 25 Hz fundamental rotational frequency. However, whirling phenomena and vibrations can have higher-order harmonic components. If the expected natural frequency of the shaft is, for example, 10 times the rotational speed (which is unlikely for fundamental whirling but possible for resonance with external forces), it would be 250 Hz. A sampling rate of 1000 Hz allows you to analyze frequencies up to 500 Hz, which should be sufficient for most fundamental whirling behavior. If very high-frequency vibration modes are expected, a higher sampling rate would be necessary.

---

### 5. Important Points to Remember

*   **Nyquist-Shannon Sampling Theorem:** Always ensure your sampling rate is at least twice the highest frequency component you wish to measure to avoid aliasing.
*   **Sensor Bandwidth:** Match the sensor's bandwidth to the expected frequencies of the phenomenon being measured.
*   **Signal Conditioning:** Never underestimate the importance of proper signal conditioning for accurate data acquisition.
*   **DAQ Device Specifications:** Understand the resolution, sampling rate, and input voltage ranges of your DAQ hardware.
*   **Software Capabilities:** Leverage the analysis tools within your DAQ software (especially FFT) to interpret dynamic data effectively.
*   **Calibration:** Ensure all sensors and DAQ equipment are properly calibrated for accurate measurements.
*   **Noise Reduction:** Implement techniques like proper grounding, shielding, and filtering to minimize noise in the acquired signals.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 6. Textbooks and Reference Books Summary

*   **Metrology for Engineers (Shotbolt & Gayler):** Essential for understanding measurement principles, transducer types, and the underlying physics of measurement.
*   **Practical Engineering Metrology (Sharp & Hume):** Offers practical insights into metrological techniques and instrumentation.
*   **Kinematics and Dynamics of Machinery (Wilson & Sadler):** Provides theoretical background on the dynamics of rotating machinery, including whirling and critical speeds. Crucial for understanding *why* we measure what we do.
*   **Mechatronics: Electronic Control Systems in Mechanical and Electrical Engineering (Bolton):** Discusses the integration of electronic and mechanical systems, which directly relates to the DAQ systems used in mechatronic experiments.
*   **Engineering Measurements (Collett & Hope):** A valuable resource for detailed understanding of measurement systems, including signal acquisition and processing.
*   **Machines and Mechanisms Applied Kinematic Analysis (Myszka):** Useful for understanding the mechanical behavior of systems, complementing the dynamic analysis often performed with DAQ systems.
*   **Mechatronics: Integrated Mechanical Electronic Systems (Ramachandran, Vijayaraghavan, Balasundaram):** A core reference for understanding mechatronic systems, where DAQ is a fundamental component.

This comprehensive set of notes provides a foundation for understanding and utilizing PC-based DAQ systems in the context of the whirling of a shaft experiment, aligning with the learning outcomes and course objectives.