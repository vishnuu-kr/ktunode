---
title: "Digital storage oscilloscope"
subject: "INSTRUMENTATION"
module: "Module 3: Electronic Measuring Instruments"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe5c3"
status: "completed"
scrapedAt: "2026-05-23T17:49:25.226Z"
---
# INSTRUMENTATION: Module 3: Electronic Measuring Instruments

## Topic: Digital Storage Oscilloscope (DSO)

### 1. Introduction and Evolution

The oscilloscope is a fundamental electronic test instrument used to display and analyze the waveforms of electrical signals. The Digital Storage Oscilloscope (DSO) represents a significant advancement over its analog predecessor, offering enhanced capabilities for capturing, storing, analyzing, and displaying transient and repetitive signals.

**Evolution:**

*   **Analog Oscilloscopes:** Displayed waveforms by directly deflecting an electron beam on a phosphor screen. Limited in capturing fast or single-shot events.
*   **Digital Storage Oscilloscopes (DSOs):** Sample the input signal, convert it to digital data, store it in memory, and then display it on a screen. This allows for the capture and analysis of events that are difficult or impossible to observe on analog scopes.

**Key Concepts & Definitions:**

*   **Waveform:** A visual representation of how a signal's amplitude changes over time.
*   **Transient Event:** A signal that occurs only once or for a very short duration.
*   **Repetitive Event:** A signal that occurs multiple times with a consistent pattern.
*   **Sampling:** The process of taking discrete measurements of the analog input signal at regular intervals.
*   **Analog-to-Digital Converter (ADC):** Converts the sampled analog voltage into a digital value.

### 2. Principles of Operation

DSOs acquire signals by sampling them at a high rate. These samples are then converted into digital values and stored in memory. The oscilloscope can then display this stored digital data as a waveform.

**Block Diagram and Working:**

(Refer to Kalsi H.S., 4/e, Chapter 13: Cathode Ray Oscilloscope - Analog to Digital Conversion and Digital Storage Oscilloscope, for a detailed block diagram and explanation of components.)

1.  **Vertical Amplifier:** Amplifies the input signal to a level suitable for digitization.
2.  **Attenuator:** Reduces the amplitude of strong input signals to prevent damage to the ADC and to allow observation of smaller signals.
3.  **Sample-and-Hold (S/H) Circuit:** Captures an instantaneous sample of the amplified analog signal at the time dictated by the trigger circuit.
4.  **Analog-to-Digital Converter (ADC):** Converts the sampled analog voltage into a binary number. The resolution of the ADC (e.g., 8-bit, 10-bit) determines the number of discrete voltage levels that can be represented.
5.  **Memory:** Stores the digital data points representing the captured waveform. Modern DSOs have significant memory depth to capture longer time spans or higher resolution data.
6.  **Trigger System:** Controls when the oscilloscope starts acquiring data. This is crucial for capturing specific events or stabilizing repetitive waveforms. Triggers can be set on various signal conditions (e.g., edge, pulse width, video).
7.  **Clock Generator:** Provides the sampling clock signal for the ADC and controls the sweep speed.
8.  **Horizontal System:** Controls the sweep speed (time per division) and positions the waveform horizontally on the display.
9.  **Display Unit:** Typically an LCD or LED screen that displays the digitized waveform, along with graticules, control settings, and measurement readouts.
10. **Microprocessor/Controller:** Manages the overall operation of the DSO, including data acquisition, processing, storage, display, and user interface.

**Important Points to Remember:**

*   **Sampling Rate:** The number of samples taken per second. A higher sampling rate is essential for accurately capturing fast-changing signals and to avoid aliasing.
*   **Nyquist Theorem:** To accurately reconstruct a signal, the sampling rate must be at least twice the highest frequency component of the signal ($f_s \ge 2f_{max}$).
*   **Memory Depth:** The amount of digital data the oscilloscope can store. A deeper memory allows for longer time-base settings and more detailed captures.
*   **Bandwidth:** The range of frequencies that the oscilloscope can accurately measure.

### 3. Key Features and Capabilities

DSOs offer a wide range of features that enhance their utility for electronic measurement and analysis.

**Learning Outcome Alignment:** CO3 (Comprehend the principle, construction and working of various electronic measuring instruments)

**Key Features:**

*   **Waveform Capture and Storage:** Ability to capture and store transient or complex waveforms for later analysis.
*   **Pre-trigger and Post-triggering:**
    *   **Pre-triggering:** Allows the DSO to acquire data *before* the trigger event occurs, crucial for analyzing the cause of a fault.
    *   **Post-triggering:** Captures data *after* the trigger event.
*   **High Bandwidth and Sampling Rates:** Essential for observing high-frequency signals and fast transients accurately.
*   **Vertical Resolution:** Determined by the ADC's bit depth (e.g., 8-bit, 10-bit, 12-bit). Higher resolution provides finer detail in the voltage measurement.
*   **Advanced Triggering Modes:** Edge, pulse width, logic, rise/fall time, video, and pattern triggers allow for precise capture of specific signal events.
*   **Automatic Measurements:** Many DSOs can automatically measure parameters like voltage (peak-to-peak, RMS, average), frequency, period, rise time, fall time, and pulse width.
*   **Math Functions:** Allow for operations on captured waveforms, such as addition, subtraction, multiplication, division, and FFT (Fast Fourier Transform) for frequency domain analysis.
*   **User Interface:** Typically features a color display, intuitive button controls, and on-screen menus for ease of operation.
*   **Connectivity:** USB, Ethernet, GPIB ports for data transfer, remote control, and printing.
*   **Digital Persistence:** Allows multiple waveforms to be displayed simultaneously with varying intensity based on their occurrence frequency, helpful for observing jitter or noise.
*   **Zoom and Pan:** Functionality to magnify specific portions of a captured waveform for detailed examination.

**Examples:**

*   Observing the behavior of a microcontroller's output signal before a system failure.
*   Analyzing the settling time of a power supply output.
*   Debugging intermittent signal glitches in digital circuits.
*   Measuring the distortion in an audio amplifier's output signal.

### 4. Types of Digital Storage Oscilloscopes

DSOs can be broadly categorized based on their architecture and capabilities.

**Learning Outcome Alignment:** CO3 (Comprehend the principle, construction and working of various electronic measuring instruments)

*   **General-Purpose DSOs:** The most common type, offering a good balance of performance and features for a wide range of applications.
*   **Mixed-Signal Oscilloscopes (MSOs):** Combine the capabilities of a DSO with a logic analyzer. They have both analog channels and digital channels, allowing for simultaneous acquisition and analysis of analog signals and multiple digital signals. This is extremely useful for debugging digital systems where the timing relationship between analog and digital components is critical.
    *   **Example:** Debugging an embedded system where an analog sensor reading needs to be correlated with the digital control signals from a microcontroller.
*   **Bandwidth-Limited DSOs:** Designed for specific applications where very high bandwidth is not required, often offering lower cost.
*   **High-Performance/Real-Time DSOs:** Feature very high bandwidth and sampling rates, often with advanced processing capabilities, used for demanding applications like signal integrity analysis and RF design.

### 5. Applications of DSOs

DSOs are indispensable tools in various fields of electronics and engineering.

**Learning Outcome Alignment:** CO1, CO3, CO4 (with context to signal analysis for PLC systems)

*   **Troubleshooting and Debugging:** Identifying faults in electronic circuits, such as signal integrity issues, timing problems, and power supply anomalies.
*   **Design Verification:** Ensuring that a designed circuit performs as expected by analyzing its signal outputs.
*   **Performance Analysis:** Measuring and analyzing signal characteristics like rise time, fall time, settling time, and jitter.
*   **Education and Training:** Demonstrating signal behavior and troubleshooting techniques in educational settings.
*   **Research and Development:** Characterizing new electronic components and systems.
*   **Industrial Automation (PLC Context):**
    *   **Analyzing Sensor Outputs:** Observing the analog output signals from sensors (e.g., temperature, pressure) connected to PLC input modules. DSOs can reveal noise or unexpected variations not apparent from simple digital readings.
    *   **Debugging PLC Control Signals:** Visualizing the timing of digital output signals from a PLC to actuators or other devices, ensuring correct pulse widths and delays.
    *   **Interpreting Communication Protocols:** While dedicated protocol analyzers are better, a DSO can sometimes be used to observe the basic electrical characteristics of communication signals (e.g., RS-485, CAN bus) to identify physical layer issues.
    *   **Power Supply Analysis:** Checking the stability and noise levels of power supplies used in PLC systems.

**Example (PLC Context):**

Imagine a scenario where a temperature sensor connected to a PLC is reporting inconsistent readings. A DSO can be used to capture the analog voltage output from the sensor. By observing the waveform on the DSO, an engineer might detect noise superimposed on the signal, or a slow rise/fall time that is affecting the PLC's interpretation, even if the average reading appears within range.

### 6. Comparison with Analog Oscilloscopes

Understanding the advantages of DSOs over their analog counterparts highlights their importance.

**Learning Outcome Alignment:** CO1, CO3

| Feature                | Analog Oscilloscope                                | Digital Storage Oscilloscope (DSO)                                  |
| :--------------------- | :------------------------------------------------- | :------------------------------------------------------------------ |
| **Signal Display**     | Direct deflection of electron beam                 | Digitized samples displayed on a screen                             |
| **Waveform Capture**   | Limited to real-time display; cannot store         | Captures and stores waveforms in memory                             |
| **Transient Events**   | Difficult to observe                               | Excellent for capturing and analyzing                              |
| **Measurement Accuracy** | Subject to parallax error, analog scale accuracy   | High precision due to digital processing and on-screen cursors    |
| **Analysis Tools**     | Limited (e.g., sweep speed, amplitude controls)    | Extensive (automatic measurements, math functions, FFT, cursors)    |
| **Triggering**         | Basic edge triggering                              | Advanced triggering modes (pulse width, logic, pattern, etc.)       |
| **Data Transfer**      | No direct digital output                           | Data can be transferred via USB, Ethernet, etc.                     |
| **User Interface**     | Analog knobs and switches                          | Digital menus, soft keys, touchscreens                              |
| **Bandwidth/Sample Rate** | Generally lower                                    | Can achieve very high bandwidth and sampling rates                  |
| **Cost**               | Generally lower for basic models                   | Can be higher, especially for high-performance models               |

**(Reference: Doebelin's Measurement Systems, 6/e, Chapter on Oscilloscopes, provides a good comparison of measurement techniques.)**

### 7. Practice Questions and Exercises

**Learning Outcome Alignment:** All COs, with emphasis on K2 (Knowledge) and K3 (Application)

**Question 1 (CO1, CO3 - K2):**
What is the primary advantage of a Digital Storage Oscilloscope (DSO) over an analog oscilloscope when measuring transient events? Explain why.

**Answer:** The primary advantage of a DSO is its ability to **capture and store** transient events in its memory. Analog oscilloscopes can only display signals in real-time. If a transient event is too fast or occurs only once, it will simply pass by on an analog scope without being effectively displayed or analyzed. A DSO, with its pre-triggering capability, can "look back in time" before the trigger event, allowing the user to analyze the signal that led to the transient.

**Question 2 (CO3 - K2):**
Explain the role of the Analog-to-Digital Converter (ADC) in a DSO. What two key parameters of the ADC significantly affect the DSO's performance?

**Answer:** The ADC's role is to convert the instantaneous analog voltage sample of the input signal into a digital value that the DSO's memory and processing unit can store and manipulate. The two key parameters are:
1.  **Sampling Rate:** Determines how many samples are taken per second, directly impacting the maximum frequency that can be accurately captured (Nyquist theorem).
2.  **Resolution (Bit Depth):** Determines the number of discrete voltage levels the ADC can represent, affecting the vertical accuracy and detail of the displayed waveform.

**Question 3 (CO3, CO4 - K3):**
You are troubleshooting a PLC control system where a motor is supposed to start after a delay. You suspect the delay signal from the PLC output module might be inconsistent. Describe how you would use a DSO to verify the PLC's output signal timing. What DSO settings would be important?

**Answer:**
1.  **Connection:** Connect the DSO's analog input channel to the PLC's digital output terminal controlling the motor. Ensure proper grounding.
2.  **Trigger Setup:** Set the DSO's trigger to an **edge trigger** on the rising edge of the PLC's output signal. Set the trigger level slightly above the "off" state voltage.
3.  **Pre-triggering:** Enable **pre-triggering** to capture the signal *before* the motor is commanded to start. A pre-trigger setting of 10-20% of the expected delay would be a good starting point.
4.  **Timebase:** Set the timebase (seconds per division) to cover the expected delay period plus a bit more before and after. For example, if the delay is expected to be 500ms, a timebase of 100ms/div (showing 5 divisions total, 500ms) or 200ms/div would be suitable.
5.  **Voltage Scale:** Adjust the vertical voltage scale to comfortably display the digital signal's high and low states.
6.  **Acquisition Mode:** Use a repetitive acquisition mode if the PLC is repeatedly trying to start the motor, or a single-shot mode if you want to capture just one instance.
7.  **Observation:** Trigger the system and observe the waveform. Look for consistency in the duration of the "off" state, the rise time of the signal, and the total duration of the "on" state (if applicable to the control logic). Any variations in these parameters compared to the desired timing indicate an issue with the PLC's output or internal timing.

**Question 4 (CO3 - K2):**
What is an MSO (Mixed-Signal Oscilloscope), and in what scenario would it be particularly useful compared to a standard DSO?

**Answer:** An MSO is an oscilloscope that combines the functionality of a digital storage oscilloscope (DSO) with a logic analyzer. This means it can display and analyze **both analog signals and multiple digital signals simultaneously**.
It is particularly useful in scenarios involving embedded systems, microcontrollers, and digital communication protocols where the timing relationship between analog inputs/outputs and numerous digital signals is critical for debugging. For example, when analyzing how a microcontroller responds to an analog sensor reading by controlling multiple digital outputs.

### 8. Important Points to Remember

*   **Sampling Rate is Crucial:** Always ensure your DSO's sampling rate is at least twice the highest frequency component of the signal you are measuring (Nyquist theorem) to avoid aliasing. Ideally, aim for 5-10 times the signal bandwidth for more accurate representation.
*   **Memory Depth Matters:** For capturing long time-base records or complex sequences, a deeper memory is essential.
*   **Triggering is Your Friend:** Master the various trigger modes to isolate and analyze specific events reliably. Pre-triggering is invaluable for troubleshooting.
*   **Bandwidth Limitation:** Understand the DSO's bandwidth and do not expect accurate measurements of signals significantly above it.
*   **Vertical Resolution:** Higher resolution (more bits in the ADC) provides finer detail in voltage measurements, useful for small signal variations or noise analysis.
*   **Automatic Measurements:** Use them for quick checks, but always understand what they are measuring and verify with cursors if necessary.
*   **FFT Analysis:** Utilize the FFT function to analyze the frequency content of your signals, which can reveal harmonic distortion or noise components not easily seen in the time domain.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 9. Textbooks and Reference Books Consulted

This study material draws upon the principles and explanations found in the following authoritative texts:

*   **Doebelin's Measurement Systems** by Ernest Doebelin, Dhanesh N. Manik (Tata McGraw Hill, 6/e, 2011)
*   **Electronic Instrumentation** by Kalsi H S (Tata McGraw Hill, 4/e, 2019)
*   **“Electrical and Electronics Measurements and Instrumentation,”** by Sawhney AK (Dhanpat Rai and Sons, 2023)

The content related to PLC programming applications (CO4) is contextualized, but specific PLC programming details would be found in:

*   **Programmable Logic controllers Programming Methods and Applications** by John R Hackworth, Frederick D Hackworth (Pearson Education, 3/e, 2022)
*   **Programmable Logic Controllers- Principles and applications** by John W Webb, Ronald A. Reis, (Pearson, 5/e, 2015)

This concludes the study notes for Digital Storage Oscilloscopes.