---
title: "Introduction to computer based control system"
subject: "PLC AND AUTOMATION"
module: "Module 1: Introduction to computer based control system"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36c82"
status: "completed"
scrapedAt: "2026-05-23T16:44:02.821Z"
---
# PLC AND AUTOMATION

## Module 1: Introduction to Computer-Based Control Systems

### Topic: Introduction to Computer-Based Control Systems

---

### 1. Overview of Computer-Based Control Systems

This section introduces the fundamental concept of using computers to control industrial processes. It emphasizes the shift from traditional analog control to modern digital and computer-integrated systems.

**Key Concepts:**

*   **Control System:** A system that manages, commands, directs, or regulates the behavior of other systems or devices.
*   **Process:** A series of actions or operations deliberately carried out in order to achieve a particular result. In automation, this typically refers to physical or chemical transformations.
*   **Automation:** The use of technology to perform tasks with minimal human intervention.
*   **Computer-Based Control System:** A control system that utilizes computers (microprocessors, microcontrollers, PCs, etc.) as the primary logic or processing elements.

**Evolution of Control Systems:**

*   **Manual Control:** Human operator directly manipulates actuators based on observations.
*   **Pneumatic/Analog Control:** Uses pneumatic or analog electronic signals to represent process variables. Relies on physical principles and analog circuits.
    *   *Reference:* Instrument Engineer's Handbook – Process Control, by B G Liptak (CRC Press) – Chapter on Pneumatic Control and Analog Electronic Control.
*   **Digital Control:** Utilizes digital signals and algorithms for control. Offers greater flexibility, precision, and advanced control strategies.
*   **Computer-Based Control:** The pinnacle of automation, integrating digital control with the processing power and memory of computers.

**Why Computer-Based Control?**

*   **Increased Precision and Accuracy:** Digital computations are inherently more precise than analog implementations.
*   **Flexibility and Reconfigurability:** Control logic can be easily modified through software changes rather than rewiring or replacing hardware.
*   **Advanced Control Strategies:** Enables complex algorithms like PID control, fuzzy logic, neural networks, and model predictive control.
*   **Data Acquisition and Logging:** Facilitates recording process data for analysis, optimization, and troubleshooting.
*   **Remote Monitoring and Control:** Allows operators to oversee and manage processes from a distance.
*   **Integration with Other Systems:** Can communicate with higher-level business systems (MES, ERP).

---

### 2. Architecture of Computer-Based Control Systems

This section delves into the typical components and how they are interconnected in a computer-based control system.

**Key Components:**

*   **Sensors:** Devices that measure physical process variables (temperature, pressure, flow, level, position, etc.) and convert them into electrical signals.
    *   *Examples:* Thermocouples, RTDs, pressure transmitters, flow meters, proximity sensors.
    *   *Learning Outcome Alignment:* CO1 (Understand the basic architecture and components)
    *   *Textbook Reference:* Instrument Engineer’s Handbook – Process Control, by B G Liptak (CRC Press) – Section on various sensor types.
*   **Transmitters:** Convert the raw sensor signal into a standardized electrical signal (e.g., 4-20 mA, 0-10 V) suitable for transmission over long distances and for input to control systems.
*   **Signal Conditioning:** Amplification, filtering, linearization, and isolation of sensor signals to prepare them for analog-to-digital conversion.
*   **Analog-to-Digital Converter (ADC):** Converts the analog sensor signal into a digital format that the computer can understand.
    *   *Key Concept:* Quantization (approximating a continuous analog signal to a discrete digital value) and Resolution (the number of bits used in the digital representation).
    *   *Learning Outcome Alignment:* CO1 (Understand the basic architecture and components)
*   **Digital Controller (Computer):** The "brain" of the system. Executes control algorithms, processes data, and makes decisions. This could be a PLC, DCS controller, industrial PC, or embedded system.
    *   *Key Components within the Controller:*
        *   **Central Processing Unit (CPU):** Executes instructions.
        *   **Memory (RAM, ROM, Flash):** Stores program instructions and data.
        *   **Input/Output (I/O) Modules:** Interfaces with sensors, actuators, and other devices.
*   **Digital-to-Analog Converter (DAC):** Converts the digital output from the controller into an analog signal to control analog actuators.
*   **Actuators:** Devices that translate control signals into physical actions to manipulate the process.
    *   *Examples:* Control valves, electric motors, solenoids, heaters, pumps.
    *   *Learning Outcome Alignment:* CO1 (Understand the basic architecture and components)
    *   *Textbook Reference:* Instrument Engineer’s Handbook – Process Control, by B G Liptak (CRC Press) – Chapter on Actuators.
*   **Human-Machine Interface (HMI):** Provides a way for operators to interact with the control system, monitor process status, set parameters, and issue commands.
    *   *Examples:* Touchscreens, operator panels, SCADA systems, graphical user interfaces (GUIs).
    *   *Learning Outcome Alignment:* CO1, CO2 (Understand HMI and interfacing)
    *   *Textbook Reference:* Computer Control of Processes, by M. Chidambaram (Alpha Science International Ltd) – Chapters on Man-Machine Interface.
    *   *Reference Book:* Process Software and Digital Networks, CRC Press. by B G Liptak (CRC) – Section on operator interfaces.
*   **Communication Networks:** Facilitate data exchange between different components of the control system (e.g., sensors to controller, controller to actuators, controller to HMI).
    *   *Examples:* Ethernet/IP, Modbus TCP, Profibus, DeviceNet.
    *   *Learning Outcome Alignment:* CO1, CO4 (Understand architecture and interfaces of DCS)
    *   *Textbook Reference:* Understanding Distributed Processor Systems for Control, by Samel M. Herb (ISA Publication) – Chapters on communication protocols.

**Block Diagram of a Basic Computer-Based Control System:**

```
+---------+     +---------+     +-----------+     +-------+     +---------+     +----------+
| Sensor  | --> | Transmitter | --> |   ADC     | --> | CPU   | --> |   DAC   | --> | Actuator |
+---------+     +---------+     +-----------+     |     |     +-------+     +----------+
                                                  |     |
                                                  | HMI |
                                                  |     |
                                                  +-----+
                                                    ^
                                                    |
                                            +--------------+
                                            | Communication|
                                            |   Network    |
                                            +--------------+
```

---

### 3. Types of Computer-Based Control Systems

This section categorizes computer-based control systems based on their architecture and complexity.

**3.1. Single-Loop Controllers (Digital Controllers):**

*   Perform control for a single process loop.
*   Often panel-mounted.
*   Examples: Digital PID controllers.
*   *Learning Outcome Alignment:* CO1 (Basic architecture)

**3.2. Programmable Logic Controllers (PLCs):**

*   Ruggedized industrial computers designed for automating electromechanical processes.
*   Primarily used for discrete manufacturing (on/off control, sequencing).
*   Programmed using ladder logic, function block diagrams, structured text, etc.
*   *Learning Outcome Alignment:* CO1, CO3 (Create and troubleshoot PLC programs)
*   *Textbook Reference:* Programmable Logic Controllers – Principles and Applications. by John W.Webb & Ronald A. Reiss (PHI) – Entire book covers PLC principles, programming, and applications.
*   *Reference Book:* Programmable Logic Controllers – Programming Methods and Applications, Pearson Education. by John R. Hackworth & Frederick D. Hackworth Jr (Pearson) – Focuses on programming methods.

**3.3. Distributed Control Systems (DCS):**

*   Hierarchical and distributed architecture where control functions are spread across multiple controllers.
*   Centralized monitoring and supervision, but control logic is decentralized.
*   Ideal for large, complex, continuous processes in industries like petrochemicals, power generation.
*   Features integrated HMI, historical data, alarming, and advanced control capabilities.
*   *Learning Outcome Alignment:* CO1, CO4 (Understand and apply DCS architecture and interfaces)
*   *Textbook Reference:* Understanding Distributed Processor Systems for Control, by Samel M. Herb (ISA Publication) – Essential for understanding DCS concepts.
*   *Textbook Reference:* Computer Control of Processes, by M. Chidambaram (Alpha Science International Ltd) – May have sections on distributed control.
*   *Reference Book:* Process Software and Digital Networks, CRC Press. by B G Liptak (CRC) – Covers networks and software aspects relevant to DCS.

**3.4. Supervisory Control and Data Acquisition (SCADA) Systems:**

*   Primarily focused on supervisory control and data acquisition.
*   Monitors and controls processes over wide geographical areas.
*   Often used in utilities (water, electricity), oil and gas pipelines.
*   May integrate with PLCs or RTUs (Remote Terminal Units) for local control.
*   *Learning Outcome Alignment:* CO1 (Basic architecture)

**3.5. Industrial PCs (IPCs) and Embedded Systems:**

*   General-purpose computers adapted for industrial environments or specialized microcontrollers.
*   Can run complex software and algorithms.
*   Used in various automation applications, including advanced control and data processing.
*   *Learning Outcome Alignment:* CO1 (Basic architecture)

---

### 4. Human-Machine Interface (HMI) and Interfacing

This section focuses on how humans interact with computer-based control systems and how these systems connect to the physical world.

**4.1. Human-Machine Interface (HMI):**

*   **Purpose:** To provide a user-friendly interface for operators to monitor process status, view alarms, adjust setpoints, and initiate control actions.
*   **Types of HMIs:**
    *   **Operator Panels (Keypad/Button Based):** Older, simpler interfaces.
    *   **Touchscreen HMIs:** Modern, intuitive graphical interfaces.
    *   **Supervisory Control Systems (SCADA/HMI Software):** Comprehensive software running on PCs, providing detailed visualization, historical data trending, alarming, and reporting.
*   **Key Features:**
    *   **Visualization:** Graphical representation of the process (e.g., P&IDs, schematics).
    *   **Data Display:** Real-time values of process variables, alarm status, equipment status.
    *   **Control Input:** Setpoint adjustments, start/stop commands, mode selection.
    *   **Alarm Management:** Display, acknowledge, and log alarms.
    *   **Trending:** Plotting historical process data.
    *   **Reporting:** Generating production or performance reports.
*   **Learning Outcome Alignment:** CO2 (Understand the human-machine interfaces)
*   **Textbook Reference:** Computer Control of Processes, by M. Chidambaram (Alpha Science International Ltd) – Chapters on Man-Machine Interface.
*   **Reference Book:** Process Software and Digital Networks, CRC Press. by B G Liptak (CRC) – Sections on operator interfaces and visualization.

**4.2. Interfacing Techniques:**

*   **Analog Interfacing:**
    *   **Analog Input Modules:** Convert analog sensor signals (e.g., 4-20 mA, 0-10V) to digital values.
    *   **Analog Output Modules:** Convert digital values from the controller to analog signals for actuators.
    *   **ADC/DAC:** Crucial components for analog interfacing.
    *   *Learning Outcome Alignment:* CO1, CO2 (hardware and interfacing techniques)
    *   *Textbook Reference:* Instrument Engineer’s Handbook – Process Control, by B G Liptak (CRC Press) – Detailed coverage of I/O signals and conditioning.
*   **Digital Interfacing:**
    *   **Digital Input Modules:** Sense discrete on/off states (e.g., limit switches, pushbuttons).
    *   **Digital Output Modules:** Control discrete devices (e.g., relays, solenoids).
    *   *Learning Outcome Alignment:* CO1, CO2 (hardware and interfacing techniques)
*   **Fieldbus and Industrial Networks:**
    *   Standardized communication protocols that allow intelligent devices (sensors, actuators, controllers) to communicate directly with each other, often eliminating the need for extensive point-to-point wiring.
    *   Examples: Foundation Fieldbus, Profibus, DeviceNet, EtherNet/IP.
    *   *Learning Outcome Alignment:* CO1, CO4 (architecture and interfaces of DCS)
    *   *Textbook Reference:* Understanding Distributed Processor Systems for Control, by Samel M. Herb (ISA Publication) – Covers fieldbus technologies.
    *   *Reference Book:* Process Software and Digital Networks, CRC Press. by B G Liptak (CRC) – Detailed on network protocols.

---

### 5. Key Concepts and Definitions Summary

*   **Control Loop:** A sequence of operations where the output of a system is measured and compared to a desired setpoint, and the difference (error) is used to adjust the system's input to achieve the desired output.
*   **Feedback Control:** A control system where the controller's output depends on the system's output (measured variable).
*   **Feedforward Control:** A control system where the controller's output is based on a measurement of the process disturbance, rather than the process output itself.
*   **PID Control:** A widely used feedback control loop mechanism comprising a Proportional, Integral, and Derivative component.
    *   **Proportional (P):** Output is proportional to the error.
    *   **Integral (I):** Output is proportional to the accumulation of past errors (eliminates steady-state error).
    *   **Derivative (D):** Output is proportional to the rate of change of the error (predicts future behavior, reduces overshoot).
    *   *Textbook Reference:* Instrument Engineer’s Handbook – Process Control, by B G Liptak (CRC Press) – Chapter on PID control.
    *   *Learning Outcome Alignment:* Implied understanding for PLC/DCS control, CO3 indirectly.
*   **Discrete Control:** Control of systems that operate in distinct states (on/off, open/closed). Common in manufacturing.
*   **Continuous Control:** Control of systems where variables change smoothly and continuously over time. Common in chemical processes.
*   **SCADA:** Supervisory Control And Data Acquisition.
*   **DCS:** Distributed Control System.
*   **PLC:** Programmable Logic Controller.
*   **HMI:** Human-Machine Interface.
*   **Bus:** A set of electrical conductors for transferring data between components.
*   **Protocol:** A set of rules governing data communication.

---

### 6. Important Points to Remember

*   Computer-based control offers significant advantages over traditional analog systems in terms of flexibility, accuracy, and advanced capabilities.
*   The core components of a computer-based control system include sensors, transmitters, ADCs, controllers, DACs, actuators, and HMIs.
*   PLCs are ideal for discrete control and sequencing, while DCS are suited for complex continuous processes and offer distributed control.
*   HMI is crucial for effective operator interaction and monitoring.
*   Understanding analog and digital interfacing, as well as industrial networks, is fundamental to integrating control systems.
*   The choice of control system (PLC, DCS, etc.) depends heavily on the application requirements, complexity, and scale of the process.

---

### 7. Practice Questions and Exercises

**Multiple Choice Questions (MCQs):**

1.  Which component converts an analog sensor signal into a digital format for processing by a computer?
    a) DAC
    b) ADC
    c) PLC
    d) Actuator

2.  Which type of control system is typically used for large, complex continuous processes like those in a refinery?
    a) PLC
    b) Single-Loop Controller
    c) SCADA
    d) DCS

3.  The "brain" of a computer-based control system that executes control algorithms is the:
    a) Sensor
    b) Actuator
    c) Controller (CPU)
    d) HMI

4.  Which of the following is primarily responsible for visualizing process data and allowing operator interaction?
    a) Transmitter
    b) ADC
    c) HMI
    d) Network Switch

5.  A control system that uses a measurement of the process disturbance to adjust the controller output is known as:
    a) Feedback Control
    b) Feedforward Control
    c) PID Control
    d) On/Off Control

**Short Answer Questions:**

6.  List three advantages of using computer-based control systems over traditional analog control systems.
7.  Describe the role of a transmitter in a control loop.
8.  What is the main difference in application focus between a PLC and a DCS?
9.  Explain the function of an Analog-to-Digital Converter (ADC) in a computer-based control system.
10. What are the key functions of a Human-Machine Interface (HMI)?

**Practical/Conceptual Exercise:**

11. Draw a simplified block diagram of a computer-based control system for a temperature control application (e.g., controlling the temperature of a heated tank). Label all the major components and indicate the direction of signal flow.

---

### 8. Answers to Practice Questions

**MCQs:**

1.  **b) ADC** (Analog-to-Digital Converter)
2.  **d) DCS** (Distributed Control System)
3.  **c) Controller (CPU)**
4.  **c) HMI** (Human-Machine Interface)
5.  **b) Feedforward Control**

**Short Answer Questions:**

6.  **Advantages of Computer-Based Control:**
    *   Increased Precision and Accuracy
    *   Flexibility and Reconfigurability (software changes)
    *   Ability to implement advanced control strategies (PID, fuzzy logic, etc.)
    *   Data Acquisition, Logging, and Analysis capabilities
    *   Remote Monitoring and Control
    *   Easier integration with other systems

7.  **Role of a Transmitter:** A transmitter receives the raw signal from a sensor, conditions it (amplifies, filters, linearizes), and converts it into a standardized electrical signal (e.g., 4-20 mA or 0-10 V) that can be reliably transmitted to the controller over distances.

8.  **PLC vs. DCS Focus:**
    *   **PLC:** Primarily designed for discrete manufacturing, sequencing, and controlling individual machines or processes with on/off operations. Often programmed with ladder logic.
    *   **DCS:** Designed for large, complex continuous processes requiring integrated control, monitoring, and management of multiple loops and plant-wide operations. Offers a more distributed and integrated architecture.

9.  **Function of ADC:** An ADC converts the continuous analog electrical signal generated by a sensor (or conditioned by a transmitter) into discrete digital values (binary numbers) that the digital controller (CPU) can process and use in its control algorithms.

10. **Key Functions of HMI:**
    *   **Visualization:** Displaying process variables, equipment status, and system graphics.
    *   **Monitoring:** Providing real-time data and alarm status.
    *   **Control:** Allowing operators to adjust setpoints, issue commands, and change operating modes.
    *   **Alarm Management:** Presenting, acknowledging, and logging alarms.
    *   **Data Logging & Trending:** Recording historical data for analysis and troubleshooting.

**Practical/Conceptual Exercise:**

11. **Simplified Block Diagram for Temperature Control:**

    ```
    +-------------------+     +-------------------+     +-------+     +-------+     +------------+     +---------+
    | Temperature       | --> | Temperature       | --> | ADC   | --> | PLC   | --> | DAC / Output | --> | Heating |
    | Sensor (e.g., RTD)|     | Transmitter (e.g.,|     |       |     |       |     | Module       |     | Element |
    |                   |     | 4-20mA)           |     |       |     |       |     |              |     | (Actuator)|
    +-------------------+     +-------------------+     +-------+     +-------+     +------------+     +---------+
                                                                             ^
                                                                             |
                                                                   +---------+
                                                                   | HMI (Setpoint Input, Display) |
                                                                   +---------+
    ```

    **Explanation:**
    *   The **Temperature Sensor** (e.g., RTD) measures the tank temperature.
    *   The **Temperature Transmitter** converts the sensor's raw signal into a standard 4-20 mA signal.
    *   The **ADC** converts the 4-20 mA signal into a digital value.
    *   The **PLC (Controller)** reads the digital temperature value, compares it to the setpoint (provided by the HMI), and executes a control algorithm (e.g., PID).
    *   The PLC then sends a digital control signal to the **DAC / Output Module**, which converts it into a variable analog signal (e.g., 0-10V or another 4-20mA signal) to control the power supplied to the **Heating Element (Actuator)**.
    *   The **HMI** allows the operator to view the current temperature, set the desired temperature, and potentially view other system status information.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
