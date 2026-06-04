---
title: "Data Presentation Element: Recorders-Strip Chart Recorder,"
subject: "ELECTRONIC INSTRUMENTATION"
module: "Module 3: Display methods and devices: Different types of display –display system building blocks."
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35e81"
status: "completed"
scrapedAt: "2026-05-23T16:16:19.040Z"
---
# Electronic Instrumentation: Module 3 - Display Methods and Devices

## Topic: Data Presentation Element: Recorders - Strip Chart Recorder

---

### 1. Introduction to Recorders and Data Presentation

*   **Importance of Data Presentation:** In electronic instrumentation, raw data from sensors and transducers needs to be presented in a comprehensible format for monitoring, analysis, and decision-making. This involves various display and recording methods.
*   **Recorders:** Devices that store or permanently record measured variables over time. They are crucial for historical data logging, trend analysis, and identifying intermittent faults.
*   **Types of Recorders:**
    *   **Event Recorders:** Record the occurrence of events (e.g., switch closures) with timestamps.
    *   **Demand Recorders:** Record the demand for power or other resources.
    *   **Multi-function Recorders:** Combine multiple recording and display capabilities.
    *   **Data Loggers:** Digital devices that collect and store data from various sources over time.
    *   **Strip Chart Recorders:** Analog or digital devices that record a measured variable as a trace on a moving strip of paper. (Focus of this module)

---

### 2. Strip Chart Recorders

#### 2.1. Definition and Purpose

*   A strip chart recorder is an electromechanical instrument that **continuously records the value of one or more measured variables as a function of time on a moving paper chart**.
*   **Purpose:**
    *   **Visualizing Trends:** Provides a visual representation of how a variable changes over an extended period.
    *   **Monitoring Processes:** Allows for real-time monitoring of critical parameters in industrial processes, scientific experiments, and environmental studies.
    *   **Data Archiving:** Creates a permanent record for historical analysis, troubleshooting, and compliance.
    *   **Detecting Intermittent Faults:** Useful for identifying short-duration anomalies that might be missed by purely digital displays.

#### 2.2. Key Components and Working Principle

Strip chart recorders, in general, consist of the following main building blocks:

*   **Input Signal Conditioning:**
    *   **Purpose:** To accept the raw signal from the sensor/transducer and process it into a form suitable for the recording mechanism.
    *   **Functions:** Amplification, filtering, linearization, and conversion (e.g., voltage to current, current to voltage).
    *   **Reference:** Often involves concepts discussed in signal conditioning circuits (CO2).

*   **Recording Mechanism:** This is the core component responsible for creating the trace on the chart. There are various types:

    *   **Analog Strip Chart Recorders:**
        *   **Principle:** Typically uses a galvanometer-based pen system. The input signal drives the pen motor, which moves a pen across the moving chart paper.
        *   **Types of Pens:**
            *   **Ink Pens:** Ink is fed from a reservoir to the pen tip. Offers good visibility but can clog.
            *   **Friction Pens:** Similar to ink pens but use capillary action.
            *   **Ballpoint Pens:** Use a rolling ball mechanism.
            *   **Heat Pens (Thermal Pens):** Use a heated stylus that marks a heat-sensitive paper. No ink, less maintenance.
            *   **Pressure Pens:** Use a stylus that presses onto the paper.
        *   **Chart Drive:** A motor drives a mechanism to move the paper at a constant, selectable speed. Common speeds include inches per hour, millimeters per minute, etc.
        *   **Example:** An older industrial temperature recorder where the pen traces the temperature variation on a paper roll.

    *   **Digital Strip Chart Recorders:**
        *   **Principle:** The analog input signal is digitized by an Analog-to-Digital Converter (ADC). The digital data is then processed and used to control a digital recording mechanism.
        *   **Recording Mechanisms in Digital Recorders:**
            *   **Dotting Pens/Plotters:** A digital signal controls the position of a stylus or pen tip, which makes discrete dots on the paper. The density of dots creates the illusion of a continuous line.
            *   **Thermal Printers:** Use a thermal print head with multiple heating elements that selectively heat a thermal paper to create dots or lines. This is a very common and reliable method.
            *   **Inkjet/Pen Plotters:** More advanced digital recorders might use inkjet technology to create precise traces.
        *   **Data Storage:** Digital recorders may also store data digitally on internal memory or external media (e.g., USB drive, SD card) in addition to or instead of printing a physical chart.
        *   **Example:** A modern environmental monitor recording multiple parameters (temperature, humidity, pressure) and printing them with timestamps on a thermal paper.

*   **Chart Paper:**
    *   **Characteristics:** Rolls of paper with pre-printed grid lines representing the measured variable's scale and time.
    *   **Types:** Plain paper, heat-sensitive paper, pressure-sensitive paper.
    *   **Time Base:** The paper is divided into time segments, allowing for reading the duration of events or trends.

*   **Power Supply:** Provides the necessary power for all the components.

#### 2.3. Types of Strip Chart Recorders based on Construction/Functionality

*   **Single-Pen Recorder:** Records only one variable.
*   **Multi-Pen Recorder:** Records multiple variables simultaneously, each with a different colored pen or tracing style.
    *   **Challenge:** Ensuring proper spacing and clear differentiation between traces.
*   **Servo-Driven Recorders:** Utilize a servo system to drive the pen. The pen's position is fed back to a servo amplifier, which corrects any deviation, ensuring high accuracy and fast response. This was common in older analog recorders.
*   **Tele-Transmitting Recorders:** Can transmit the recorded variable's value as an electrical signal (e.g., 4-20 mA current loop) to a remote location, while also recording it locally.

#### 2.4. Display System Building Blocks (Contextualizing Strip Chart Recorders)

While strip chart recorders are a type of display/recording device, they fit into a broader display system. The building blocks of such a system often include:

*   **Sensor/Transducer:** Converts physical phenomena into an electrical signal. (CO1)
*   **Signal Conditioning Circuit:** Amplifies, filters, linearizes the signal. (CO2)
*   **Data Acquisition System (DAS):** In digital systems, this includes ADCs and multiplexers.
*   **Display/Recording Element:** The strip chart recorder itself, which presents the data.
*   **Control System:** May be linked to a PLC or DCS for automated control based on the recorded data. (CO4, CO6)
*   **Data Storage and Transmission:** Digital recorders often include capabilities for data logging and transmission. (CO3)

#### 2.5. Advantages and Disadvantages of Strip Chart Recorders

*   **Advantages:**
    *   **Continuous Visual Record:** Excellent for understanding trends and patterns over time.
    *   **Simplicity (Analog):** Older analog types are often robust and relatively simple to operate and maintain.
    *   **No Power Required for Reading (Printed Chart):** The recorded information can be read even after the device is powered off.
    *   **Historical Data:** Provides a permanent physical record.
    *   **Detecting Intermittent Events:** Good for spotting short-lived anomalies.

*   **Disadvantages:**
    *   **Limited Data Capacity:** Paper rolls have a finite length.
    *   **Wear and Tear:** Pens, motors, and paper mechanisms can wear out.
    *   **Maintenance:** Ink pens can clog, thermal heads can degrade.
    *   **Limited Resolution:** The accuracy is limited by the pen width, paper grid, and chart speed.
    *   **Difficult for High-Frequency Data:** Not suitable for recording very fast signal changes.
    *   **Bulkiness:** Can be physically larger than digital displays or data loggers.
    *   **Environmental Sensitivity:** Paper can be affected by humidity or damage.

#### 2.6. Applications

*   **Industrial Process Monitoring:** Temperature, pressure, flow rate, level, pH in chemical plants, power generation, manufacturing.
*   **Environmental Monitoring:** Recording meteorological data, pollution levels, water quality.
*   **Scientific Research:** Logging experimental data in laboratories.
*   **Medical Equipment:** Patient monitoring (though largely replaced by digital systems now).
*   **Automotive Testing:** Recording engine parameters during performance tests.

---

### 3. Connecting with Course Outcomes (COs)

*   **CO1 (Identify sensors/transducers):** Strip chart recorders are downstream of sensors. Understanding how they record implies knowledge of what kind of signals (from various sensors) they receive. For example, a pressure sensor outputs a voltage proportional to pressure, which is then recorded.
*   **CO2 (Design signal conditioning circuits):** The input stage of a strip chart recorder often incorporates signal conditioning to ensure the signal is compatible with the recording mechanism. This relates directly to designing appropriate amplification and filtering circuits.
*   **CO3 (Understand data transmission):** Some modern strip chart recorders can transmit data. Understanding how recorded data can be sent to other systems is relevant.
*   **CO4 (Develop logic for PLC programming):** While not directly programming PLCs, the data from strip chart recorders might be used as input for PLC-based control strategies. For example, a trend recorded on a chart might indicate a need to adjust a control loop parameter in a PLC.
*   **CO5 (Analyze performance of measurement systems):** The accuracy, response time, and drift of a strip chart recorder are all performance metrics that can be analyzed. For instance, analyzing the consistency of a recorded temperature trace over time can reveal instrument drift.
*   **CO6 (Describe fundamental concepts of DCS and SCADA):** Strip chart recorders can be a component within larger DCS or SCADA systems, either as local displays or as part of the data logging infrastructure.

---

### 4. Important Points to Remember

*   **Time-Based Recording:** The defining characteristic of strip chart recorders is recording a variable *against time*.
*   **Analog vs. Digital:** Understand the fundamental differences in their recording mechanisms and capabilities.
*   **Chart Speed:** Crucial for interpreting the time-scale of the recorded data.
*   **Chart Scale:** Determines the range and resolution of the recorded variable.
*   **Pen Type:** Affects maintenance, visibility, and environmental considerations.
*   **Maintenance:** Analog recorders, especially those with ink pens, require regular maintenance.

---

### 5. Practice Questions and Exercises

**Question 1:**
What is the primary function of a strip chart recorder in an electronic instrumentation system?
a) To display the instantaneous value of a variable.
b) To store historical data of a variable over time.
c) To control a process based on real-time feedback.
d) To convert analog signals to digital signals.

**Answer:** b) To store historical data of a variable over time.

**Question 2:**
List at least three different types of pens used in analog strip chart recorders and briefly mention one advantage or disadvantage of each.

**Answer:**
*   **Ink Pens:** Advantage: Good visibility. Disadvantage: Can clog, require ink refilling.
*   **Friction Pens:** Advantage: Simpler than ink pens. Disadvantage: May require specific paper types.
*   **Heat Pens (Thermal Pens):** Advantage: No ink, less maintenance. Disadvantage: Requires heat-sensitive paper.

**Question 3:**
A strip chart recorder is used to monitor the temperature of a chemical reactor. The paper moves at 10 mm/minute. If a temperature anomaly occurs and lasts for 5 minutes, how much paper will be used to record this event?

**Answer:**
Chart speed = 10 mm/minute
Duration of event = 5 minutes
Paper used = Chart speed × Duration = 10 mm/minute × 5 minutes = 50 mm

**Question 4:**
Compare and contrast analog and digital strip chart recorders, highlighting at least two key differences.

**Answer:**
| Feature              | Analog Strip Chart Recorder                               | Digital Strip Chart Recorder                                     |
| :------------------- | :-------------------------------------------------------- | :--------------------------------------------------------------- |
| **Recording Method** | Mechanical pen moves across paper, driven by analog signal. | Signal is digitized, then used by thermal head, plotter, etc.    |
| **Data Representation** | Continuous trace by pen.                                  | Often dots creating an illusion of a line, or printed characters. |
| **Accuracy & Resolution** | Limited by pen width, motor precision, paper grid.      | Generally higher, depends on ADC resolution and print resolution. |
| **Data Storage**     | Primarily on paper only.                                  | Paper and often internal digital memory or external media.       |
| **Flexibility**      | Limited; primarily displays one or few variables.         | Can display multiple variables, add alarms, transmit data.     |

**Question 5:**
Explain how a strip chart recorder contributes to the "analysis of performance of measurement systems" (CO5).

**Answer:**
Strip chart recorders provide a historical record of a measured variable. By examining this record, one can:
1.  **Identify Drift:** If the recorded baseline of a parameter slowly shifts over time, it indicates instrument drift.
2.  **Assess Stability:** The steadiness of the trace reveals how stable the measurement is. Jittery traces suggest noise or instability.
3.  **Evaluate Response Time:** Observing how quickly the recorder's pen/trace responds to a known change in the input signal helps determine the system's response time.
4.  **Detect Outliers:** Deviations from expected trends can highlight potential sensor failures or unusual process conditions that need further investigation.
5.  **Check Chart Speed Accuracy:** Comparing recorded event durations against known durations can reveal inaccuracies in the chart drive mechanism.

---
