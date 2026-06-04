---
title: "Basic components of computer based measurement and control systems"
subject: "PLC AND AUTOMATION"
module: "Module 1: Introduction to computer based control system"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36c84"
status: "completed"
scrapedAt: "2026-05-23T16:44:06.211Z"
---
# PLC AND AUTOMATION: Module 1 - Introduction to Computer-Based Control Systems

## Topic: Basic Components of Computer-Based Measurement and Control Systems

### 1. Introduction to Computer-Based Control Systems

**Definition:** A computer-based control system is a system that uses a computer as the central element to monitor, control, and optimize a process or operation. It bridges the gap between the physical world of sensors and actuators and the digital world of computation and decision-making.

**Evolution of Control Systems:**
*   **Manual Control:** Operators directly manipulate equipment.
*   **Analog Control:** Uses pneumatic or electronic analog controllers (e.g., PID controllers).
*   **Digital Control:** Introduces microprocessors and computers for more sophisticated control.
*   **Computer-Based Control:** Utilizes computers (microprocessors, PLCs, DCS) for complex control strategies, data acquisition, and communication.

**Why Computer-Based Control?**
*   **Increased Precision and Accuracy:** Digital processing allows for finer control.
*   **Flexibility and Reconfigurability:** Programs can be easily modified.
*   **Data Acquisition and Logging:** Enables performance monitoring and analysis.
*   **Advanced Control Strategies:** Implementation of complex algorithms (e.g., fuzzy logic, neural networks).
*   **Remote Monitoring and Control:** Facilitates distributed operations.
*   **Integration with other systems:** Seamless connection to plant-wide information systems.

**Learning Outcomes Addressed:**
*   **CO1 (K2): Understand the basic architecture and components of computer-based measurement and control systems.** This section lays the foundation for understanding these systems.

**Key Concepts:**
*   **Process:** The physical system or operation being controlled (e.g., a chemical reactor, a manufacturing line, a power plant).
*   **Measurement:** Acquiring data about the process variables (e.g., temperature, pressure, flow, position).
*   **Control:** Manipulating process variables to achieve desired outcomes.
*   **Computer:** The central processing unit that executes control logic and algorithms.

**Reference:**
*   **Webb & Reiss (5th ed.):** Provides a foundational understanding of how computers are integrated into industrial control.
*   **Chidambaram (1st ed.):** Offers insights into the fundamental principles of computer control of processes.

---

### 2. Essential Components of a Computer-Based Measurement and Control System

A typical computer-based measurement and control system comprises several interconnected components that work together to achieve the desired automation.

#### 2.1. Sensors (Transducers)

**Definition:** Sensors are devices that detect a physical phenomenon (e.g., temperature, pressure, flow) and convert it into an electrical signal (usually analog, but sometimes digital). They are the "eyes and ears" of the control system, providing information about the state of the process.

**Key Functions:**
*   Measure physical quantities.
*   Convert physical quantities into electrical signals.

**Types of Sensors:**
*   **Temperature Sensors:** Thermocouples, RTDs (Resistance Temperature Detectors), thermistors.
*   **Pressure Sensors:** Strain gauge pressure transducers, capacitive pressure sensors.
*   **Flow Sensors:** Orifice plates with differential pressure transmitters, vortex flowmeters, magnetic flowmeters.
*   **Level Sensors:** Float switches, ultrasonic sensors, radar sensors.
*   **Position Sensors:** Potentiometers, encoders (absolute and incremental).
*   **Proximity Sensors:** Inductive, capacitive, photoelectric.

**Important Points:**
*   **Accuracy and Precision:** Critical for reliable control.
*   **Range:** The span of values the sensor can measure.
*   **Response Time:** How quickly the sensor reacts to changes.
*   **Environmental Compatibility:** Must withstand process conditions (temperature, pressure, chemical exposure).

**Example:** A thermocouple in a furnace measures the temperature and outputs a small voltage (mV) proportional to the temperature.

**Reference:**
*   **Liptak (4th ed.):** Covers a wide range of sensors and their applications in process control.

**Learning Outcomes Addressed:**
*   **CO1 (K2): Understand the basic architecture and components of computer-based measurement and control systems.** Sensors are the primary input component.

---

#### 2.2. Signal Conditioning and Processing Units

**Definition:** These units take the raw electrical signals from sensors, which are often weak, noisy, or in an inappropriate format, and transform them into signals that are suitable for the computer input.

**Key Functions:**
*   **Amplification:** Increasing the magnitude of weak sensor signals.
*   **Filtering:** Removing unwanted noise or interference from the signal.
*   **Linearization:** Correcting non-linear sensor outputs to create a linear relationship with the measured variable.
*   **Isolation:** Protecting the computer from high voltages or ground loops.
*   **Compensation:** Correcting for factors like ambient temperature effects on the sensor.

**Example:** A strain gauge pressure transducer outputs a very small voltage. A signal conditioning unit will amplify this voltage and filter out any electrical noise before it is sent to the analog-to-digital converter.

**Reference:**
*   **Liptak (4th ed.):** Discusses the importance of signal conditioning for accurate measurement.

**Learning Outcomes Addressed:**
*   **CO1 (K2): Understand the basic architecture and components of computer-based measurement and control systems.** Signal conditioning is a crucial intermediate step.

---

#### 2.3. Analog-to-Digital Converter (ADC)

**Definition:** The ADC is a vital component that converts the continuous analog electrical signals from sensors (after signal conditioning) into discrete digital values that a computer can understand and process.

**Key Functions:**
*   Convert analog voltage or current to digital binary code.

**Key Specifications:**
*   **Resolution:** The smallest analog change that the ADC can detect, usually expressed in bits (e.g., 12-bit, 16-bit ADC). Higher resolution means finer digitization.
*   **Sampling Rate:** How frequently the ADC takes measurements of the analog signal.
*   **Accuracy:** How close the digital output is to the true analog input value.

**Example:** A 12-bit ADC can represent an analog signal over 2^12 = 4096 discrete levels. If the analog input range is 0-10V, each step would represent approximately 10V / 4096 = 2.44mV.

**Reference:**
*   **Chidambaram (1st ed.):** Explains the role of ADCs in interfacing the physical world to digital computers.
*   **Webb & Reiss (5th ed.):** Covers basic digital data acquisition principles.

**Learning Outcomes Addressed:**
*   **CO1 (K2): Understand the basic architecture and components of computer-based measurement and control systems.** ADC is the gateway for analog sensor data to enter the digital domain.

---

#### 2.4. Digital-to-Analog Converter (DAC)

**Definition:** The DAC is the counterpart to the ADC. It converts the digital output signals from the computer (control commands) into analog signals that can be understood and acted upon by analog actuators.

**Key Functions:**
*   Convert digital binary code to analog voltage or current.

**Key Specifications:**
*   **Resolution:** Similar to ADC, determines the number of discrete analog output levels.
*   **Conversion Speed:** How quickly the DAC can produce an analog output from a digital input.

**Example:** The computer decides to set the temperature to 150°C. It sends a digital value representing 150°C to the DAC. The DAC converts this digital value into an analog voltage (e.g., 0-10V) that controls an electric heater or a control valve for a steam supply.

**Reference:**
*   **Chidambaram (1st ed.):** Details the function of DACs in controlling physical devices.

**Learning Outcomes Addressed:**
*   **CO1 (K2): Understand the basic architecture and components of computer-based measurement and control systems.** DAC is the output stage for control signals.

---

#### 2.5. Actuators

**Definition:** Actuators are devices that receive control signals from the computer (via DACs) and use them to physically manipulate or change the process. They are the "muscles" of the control system, implementing the control actions.

**Key Functions:**
*   Execute control commands.
*   Translate electrical control signals into physical actions.

**Types of Actuators:**
*   **Electric Motors:** For driving pumps, conveyors, fans. Can be controlled via variable speed drives (VSDs) or simple on/off signals.
*   **Control Valves:** Regulate the flow of liquids or gases (e.g., pneumatic, electric, hydraulic valves). Position of the valve is controlled.
*   **Solenoid Valves:** Electrically operated on/off valves.
*   **Relays and Contactors:** Electrically operated switches for controlling higher power devices.
*   **Heaters:** Electric heaters controlled by variable power output.

**Important Points:**
*   **On/Off (Two-Position) Control:** Actuator is either fully on or fully off.
*   **Proportional Control:** Actuator position varies proportionally to the control signal.
*   **Fail-Safe:** The state the actuator moves to in case of power failure or system malfunction (e.g., a safety valve closes).

**Example:** A control valve on a steam line adjusts its opening based on the analog signal from the DAC, thereby controlling the steam flow rate to regulate the temperature of a reactor.

**Reference:**
*   **Liptak (4th ed.):** Provides extensive coverage of various actuators and their operational principles.
*   **Webb & Reiss (5th ed.):** Discusses how actuators are interfaced with control systems.

**Learning Outcomes Addressed:**
*   **CO1 (K2): Understand the basic architecture and components of computer-based measurement and control systems.** Actuators are the output devices that affect the process.

---

#### 2.6. The Computer (Controller)

**Definition:** This is the "brain" of the system. It executes the control algorithms, processes data from sensors, and generates output signals to the actuators. In modern industrial automation, the role of the "computer" is often filled by Programmable Logic Controllers (PLCs), Distributed Control Systems (DCS), or industrial PCs.

**Key Functions:**
*   Execute control logic (e.g., ladder logic, function block diagrams).
*   Perform calculations and data processing.
*   Implement control algorithms (e.g., PID, on/off).
*   Communicate with other devices and systems.
*   Manage data acquisition and logging.

**Types of Controllers in Industrial Automation:**
*   **Programmable Logic Controllers (PLCs):** Ruggedized computers designed for industrial environments, primarily used for discrete control (on/off, sequencing) but capable of analog and complex control.
*   **Distributed Control Systems (DCS):** Integrated systems designed for complex, large-scale process control with a focus on plant-wide integration, redundancy, and advanced regulatory control.
*   **Industrial PCs (IPCs):** Standard PCs hardened for industrial environments, often used for advanced HMI, data historians, or supervisory control.

**Reference:**
*   **Webb & Reiss (5th ed.):** The core text for understanding PLCs, a primary type of computer controller.
*   **Samel M. Herb (1st ed. 1999):** Focuses on distributed processor systems, relevant to DCS.
*   **Chidambaram (1st ed.):** Covers computer control aspects in general.

**Learning Outcomes Addressed:**
*   **CO1 (K2): Understand the basic architecture and components of computer-based measurement and control systems.** This is the central processing unit.
*   **CO4 (K2): Understand and apply the architecture and interfaces of Distributed Control Systems in various process control settings.** Introduces the concept of distributed control.

---

#### 2.7. Communication Network (Bus)

**Definition:** The communication network provides the pathways for data exchange between the various components of the control system. This allows sensors, controllers, actuators, and operator interfaces to interact efficiently and reliably.

**Key Functions:**
*   Transmit sensor data to the controller.
*   Transmit control commands from the controller to actuators.
*   Facilitate communication between different controllers or modules.
*   Enable communication with human-machine interfaces (HMIs) and supervisory systems.

**Types of Industrial Networks:**
*   **Fieldbus:** Digital serial communication protocols designed for connecting sensors and actuators directly to controllers in the field (e.g., PROFIBUS, FOUNDATION Fieldbus, DeviceNet). They replace point-to-point wiring and offer diagnostics.
*   **Industrial Ethernet:** Standard Ethernet adapted for industrial environments, offering higher speeds and bandwidth (e.g., EtherNet/IP, PROFINET).
*   **Proprietary Networks:** Networks specific to a particular vendor's equipment.

**Important Points:**
*   **Determinism:** The ability of a network to guarantee message delivery within a specified time, crucial for real-time control.
*   **Bandwidth:** The amount of data that can be transmitted per unit of time.
*   **Robustness:** Ability to withstand industrial environments (noise, vibration).
*   **Open vs. Closed Standards:** Open standards promote interoperability.

**Example:** In a modern plant, temperature and pressure sensors in the field might communicate their readings digitally to a PLC using a Fieldbus protocol like PROFIBUS, rather than sending analog signals over miles of copper wire.

**Reference:**
*   **Liptak (3rd ed. - Process Software and Digital Networks):** Offers in-depth coverage of industrial networks and communication protocols.
*   **Samel M. Herb (1st ed. 1999):** Discusses distributed processor systems and their reliance on communication networks.

**Learning Outcomes Addressed:**
*   **CO1 (K2): Understand the basic architecture and components of computer-based measurement and control systems.** Networking is essential for integration.
*   **CO4 (K2): Understand and apply the architecture and interfaces of Distributed Control Systems in various process control settings.** DCS relies heavily on robust communication networks.

---

#### 2.8. Human-Machine Interface (HMI)

**Definition:** The HMI provides a means for human operators to interact with the control system. This includes monitoring process status, viewing alarms, adjusting setpoints, and issuing manual commands.

**Key Functions:**
*   **Process Visualization:** Displaying real-time data, trends, and system status through graphical interfaces.
*   **Operator Input:** Allowing operators to change setpoints, start/stop equipment, and acknowledge alarms.
*   **Alarm Management:** Notifying operators of abnormal conditions and providing context.
*   **Data Logging and Reporting:** Providing access to historical data.

**Types of HMIs:**
*   **Operator Panels/Touchscreens:** Dedicated hardware devices with displays and touch capabilities.
*   **Supervisory Control and Data Acquisition (SCADA) Systems:** Software-based systems that provide a centralized view and control of a larger system, often across multiple locations.
*   **Human-Computer Interfaces (HCIs):** Often refers to the software interface on a PC.

**Example:** An operator views a graphical representation of a chemical plant on a touchscreen HMI. They can see the current temperature of a reactor, the flow rate of a feed, and alarm indicators. They can touch the temperature display to change the setpoint for the cooling system.

**Reference:**
*   **Webb & Reiss (5th ed.):** Discusses the role of HMIs in PLC-based systems.
*   **Chidambaram (1st ed.):** Touches upon operator interaction with computer-controlled processes.

**Learning Outcomes Addressed:**
*   **CO2 (K2): Understand the human-machine interfaces (HMI) and learn the hardware and interfacing techniques needed to integrate computer systems with process controls.** This component is central to this outcome.

---

### 3. System Architecture Overview

A computer-based measurement and control system can be viewed in a layered architecture:

*   **Field Level:** Sensors and actuators are directly connected to the process.
*   **Control Level:** The primary controller (PLC, DCS controller) processes data and makes control decisions.
*   **Supervisory Level:** PCs, SCADA systems, or DCS operator stations for monitoring, high-level control, and data management.
*   **Enterprise Level:** Integration with business systems like ERP (Enterprise Resource Planning).

**Example of a Simple System Architecture:**
```
+-----------------+     +-----------------+     +-----------------+
|   Sensor (Temp) | --> | Signal Cond. &  | --> |       ADC       |
+-----------------+     |     Filter      |     +-----------------+
                           +-----------------+             |
                                                           | (Digital Data)
+-----------------+     +-----------------+     +-----------------+
|   Actuator (   | <-- |       DAC       | <-- |     Computer    |
|    Control Valve)|     +-----------------+     |   (PLC/DCS)     |
+-----------------+                               +-----------------+
                                                          /|\
                                                           | (Control Logic)
                                                           |
                                                  +-----------------+
                                                  |       HMI       |
                                                  +-----------------+
```

**Example of a More Complex System Architecture (DCS):**

```
+-----------+   +-----------+   +-----------+
| Sensor 1  |---|           |---| Actuator 1|
+-----------+   |           |   +-----------+
                |           |
+-----------+   | Fieldbus  |   +-----------+
| Sensor 2  |---|  Network  |---| Actuator 2|
+-----------+   |           |   +-----------+
                |           |
+-----------+   |           |   +-----------+
| Sensor 3  |---|           |---| Actuator 3|
+-----------+   +-----------+   +-----------+
      |               |               |
      v               v               v
+-------------------------------------------+
|             DCS Controller(s)             |
| (Regulatory Control, Logic, Sequencing)   |
+-------------------------------------------+
      |                               |
      +------------------------------+
      | (Ethernet/Proprietary Network) |
      v                               v
+-----------------+             +-----------------+
| Operator Station|             | Historian/      |
| (HMI/SCADA)     |             |   Database      |
+-----------------+             +-----------------+
```

**Learning Outcomes Addressed:**
*   **CO1 (K2): Understand the basic architecture and components of computer-based measurement and control systems.** This section consolidates the component understanding into system architectures.
*   **CO4 (K2): Understand and apply the architecture and interfaces of Distributed Control Systems in various process control settings.** This provides a visual representation of DCS architecture.

**Important Points to Remember:**
*   The system is a loop: Sensor -> Signal Conditioning -> ADC -> Computer -> DAC -> Actuator -> Process -> Sensor.
*   Reliability, redundancy, and diagnostics are critical in industrial applications.
*   Networking is crucial for integrating distributed components.
*   The choice of components depends on the application's requirements (speed, accuracy, complexity, environment).

---

### 4. Practice Questions and Exercises

**Question 1:**
List the essential components of a basic computer-based measurement and control system in the order a signal would typically travel from the process to an actuator.
*(Knowledge Level: K2)*

**Answer 1:**
Sensor -> Signal Conditioning Unit -> Analog-to-Digital Converter (ADC) -> Computer (Controller) -> Digital-to-Analog Converter (DAC) -> Actuator.

**Question 2:**
What is the primary function of an Analog-to-Digital Converter (ADC) in a control system?
*(Knowledge Level: K2)*

**Answer 2:**
The primary function of an ADC is to convert analog signals (continuous electrical signals from sensors) into digital values that a computer can process.

**Question 3:**
Describe the role of a control valve as an actuator in a temperature control system.
*(Knowledge Level: K2)*

**Answer 3:**
A control valve acts as an actuator by physically adjusting the flow of a fluid (like steam or cooling water) into or out of a process. In a temperature control system, the computer sends a signal (via DAC) to the control valve, telling it how much to open or close. This adjustment directly affects the process temperature.

**Question 4:**
Explain why signal conditioning is necessary before an analog signal from a sensor is fed into a computer.
*(Knowledge Level: K2)*

**Answer 4:**
Signal conditioning is necessary because raw sensor signals are often:
*   **Weak:** Requiring amplification.
*   **Noisy:** Requiring filtering to remove interference.
*   **Non-linear:** Requiring linearization for accurate interpretation.
*   **Inappropriate format:** Needing conversion or isolation for compatibility with the computer's input.

**Question 5:**
Imagine a simple tank filling system where the goal is to maintain a certain liquid level.
a) What type of sensor would you use to measure the liquid level?
b) What type of actuator would you use to control the inflow of liquid?
c) What would the computer controller do with the information from the sensor?
*(Knowledge Level: K2)*

**Answer 5:**
a) A level sensor, such as an ultrasonic level sensor, a float switch, or a hydrostatic pressure sensor, could be used.
b) A control valve on the inlet pipe would be suitable to regulate the flow.
c) The computer controller would read the liquid level from the sensor (via ADC). It would then compare this reading to the desired setpoint level. Based on this comparison and its programmed logic (e.g., PID control), it would send a signal (via DAC) to the control valve to open or close, thereby adjusting the inflow of liquid to reach and maintain the setpoint.

**Exercise 1:**
Sketch a block diagram of a computer-based control system for regulating the speed of a conveyor belt. Identify at least one sensor, one actuator, and the central controller.
*(Knowledge Level: K2)*

**Exercise 2:**
Research one industrial communication protocol (e.g., PROFIBUS, DeviceNet, EtherNet/IP) and briefly describe its purpose and a key advantage in industrial automation.
*(Knowledge Level: K2)*

---

### 5. Important Points to Remember

*   **The Control Loop:** The fundamental concept is the feedback loop: **Process -> Sensor -> Controller -> Actuator -> Process**.
*   **Digital vs. Analog:** Computers operate on digital data, while many physical processes involve analog quantities. ADCs and DACs are crucial bridges.
*   **System Integration:** All components must work together seamlessly, requiring compatible interfaces and reliable communication.
*   **Real-time Operation:** Control systems often need to respond to process changes within specific timeframes.
*   **Hierarchy:** Control systems can range from simple single-loop controllers to complex, plant-wide distributed systems.
*   **Human Element:** The HMI is vital for operator interaction, monitoring, and intervention.

---

This concludes the study notes for "Basic components of computer based measurement and control systems." Ensure you understand the function of each component and how they integrate to form a complete control system. The ability to identify these components and their roles is foundational for understanding PLC and automation principles.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
