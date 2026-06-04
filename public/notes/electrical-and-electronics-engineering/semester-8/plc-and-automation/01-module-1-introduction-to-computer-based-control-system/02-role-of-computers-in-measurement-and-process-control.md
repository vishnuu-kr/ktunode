---
title: "-Role of computers in measurement and (process) control"
subject: "PLC AND AUTOMATION"
module: "Module 1: Introduction to computer based control system"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36c83"
status: "completed"
scrapedAt: "2026-05-23T16:44:04.736Z"
---
# PLC AND AUTOMATION - Module 1: Introduction to Computer-Based Control Systems

## Topic: Role of Computers in Measurement and (Process) Control

---

### **Introduction to Computer-Based Control Systems**

This module introduces the fundamental concepts of computer-based control systems, a cornerstone of modern automation. We will explore how computers have revolutionized measurement and control across various industries, moving beyond traditional analog and pneumatic systems.

---

### **Learning Outcomes Covered:**

*   Understanding the fundamental role of computers in measurement and control.
*   Identifying the benefits and limitations of using computers in control systems.
*   Recognizing the evolution from traditional control to computer-based control.
*   Appreciating the impact of computers on process efficiency, accuracy, and safety.

---

### **Course Outcomes Alignment:**

*   **CO1: Understand the basic architecture and components of computer-based measurement and control systems. (Knowledge Level: K2)**
    *   This topic lays the groundwork for CO1 by explaining *why* computers are used, thus setting the stage for understanding their architecture.
*   **CO2: Understand the human-machine interfaces (HMI) and learn the hardware and interfacing techniques needed to integrate computer systems with process controls. (Knowledge Level: K2)**
    *   While HMI and interfacing are detailed later, this topic highlights the need for computers to interact with the real world, implying the need for these elements.
*   **CO3: Create and troubleshoot PLC programs using ladder logic for various applications. (Knowledge Level: K5)**
    *   This topic provides the foundational understanding of *why* PLCs are programmed and used, which is essential before diving into programming details.
*   **CO4: Understand and apply the architecture and interfaces of Distributed Control Systems in various process control settings. (Knowledge Level: K2)**
    *   Similar to CO1, this topic establishes the need for more sophisticated control systems, including DCS, which are inherently computer-based.

---

### **Key Concepts and Definitions**

#### **1. What is a Control System?**

*   A system designed to manage, command, direct, or regulate the behavior of other devices or systems.
*   Its primary goal is to achieve and maintain a desired output or state.

#### **2. Traditional Control Systems (Pre-Computer Era)**

*   **Pneumatic Control:** Utilized air pressure to transmit signals and actuate devices.
    *   **Characteristics:** Reliable, robust, intrinsically safe in hazardous environments.
    *   **Limitations:** Slow response times, limited flexibility, extensive piping, manual calibration, difficulty in complex control strategies.
    *   *(Referenced in: Webb & Reiss, Ch 1 - "Introduction to PLC Technology")*
*   **Analog Electronic Control:** Employed analog electronic signals (e.g., voltage, current) for measurement and control.
    *   **Characteristics:** Faster response than pneumatic, more flexible.
    *   **Limitations:** Signal drift, susceptibility to noise, difficulty in implementing advanced algorithms, limited data logging and archiving.

#### **3. The Advent of Computers in Control**

*   Computers brought digital processing capabilities, dramatically enhancing control system performance and functionality.

#### **4. Role of Computers in Measurement**

*   **Data Acquisition:** Computers are used to collect data from sensors and measuring instruments.
    *   **Sensors:** Devices that convert physical quantities (temperature, pressure, flow, level, etc.) into electrical signals.
    *   **Transducers:** Convert one form of energy into another (e.g., pressure to voltage).
    *   *(Referenced in: Liptak, Vol 1 - "Process Measurement")*
*   **Signal Conditioning:** Analog signals from sensors are often amplified, filtered, or converted to digital format (Analog-to-Digital Conversion - ADC) for computer processing.
*   **Data Processing and Analysis:** Computers perform calculations, statistical analysis, and trend identification on the acquired data.
*   **Data Storage and Archiving:** Digital data can be easily stored, retrieved, and analyzed over long periods.
*   **Calibration and Verification:** Computers can automate and facilitate the calibration of measurement instruments.

#### **5. Role of Computers in Process Control**

*   **Direct Digital Control (DDC):** Computers directly execute control algorithms (e.g., PID loops) to manipulate process variables.
    *   **PID (Proportional-Integral-Derivative) Control:** A common feedback control loop mechanism widely implemented by computers.
    *   *(Referenced in: Liptak, Vol 1 - "Process Control Algorithms")*
*   **Advanced Control Strategies:** Computers enable implementation of complex control algorithms like:
    *   Model Predictive Control (MPC)
    *   Fuzzy Logic Control
    *   Neural Network Control
    *   *(Referenced in: Chidambaram - "Computer Control of Processes")*
*   **Sequential Control:** Computers (especially PLCs) are used for controlling operations in a specific order or sequence.
    *   **Example:** Batch processing, startup/shutdown procedures.
*   **Batch Control:** Managing processes that run in discrete batches, with precise control over recipe parameters and execution steps.
*   **Supervisory Control:** Computers provide an overarching layer of control and coordination for a process.
    *   **Supervisory Control and Data Acquisition (SCADA):** A system architecture for gathering data and controlling industrial processes, often across large geographical areas.
    *   *(Referenced in: Webb & Reiss, Ch 1 - "Introduction to PLC Technology")*
*   **Optimization:** Computers can analyze process data to identify opportunities for improving efficiency, yield, and product quality.
*   **Alarm Management:** Computers monitor process variables and trigger alarms when deviations occur, alerting operators to potential issues.
*   **Safety Interlocks:** Computers implement safety functions to shut down processes or prevent hazardous conditions.

---

### **Evolution from Traditional to Computer-Based Control**

| Feature          | Traditional Control (Pneumatic/Analog)                                  | Computer-Based Control (Digital)                                                              |
| :--------------- | :---------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| **Signal Type**  | Pneumatic pressure or Analog voltage/current                            | Digital (binary) signals                                                                      |
| **Processing**   | Mechanical/Analog circuits                                              | Microprocessors, digital logic                                                                |
| **Flexibility**  | Limited, requires physical re-wiring or component replacement           | High, control logic can be easily reprogrammed                                                |
| **Complexity**   | Difficult to implement complex algorithms                               | Easily handles complex algorithms, advanced control, and optimization                         |
| **Data Handling**| Limited or no data logging; manual recording                            | Extensive data acquisition, storage, analysis, and reporting                                  |
| **Response Time**| Slower, especially pneumatic systems                                    | Much faster and more precise                                                                  |
| **Reliability**  | Generally robust, but prone to drift and wear                           | Highly reliable; susceptible to software bugs and hardware failures, but redundancy is possible |
| **Integration**  | Difficult to integrate different systems                                | Easy integration with other computer systems, networks, and enterprise resource planning (ERP) |
| **Cost**         | High installation cost for extensive piping/wiring; high maintenance    | Higher initial hardware cost, but lower long-term maintenance and increased efficiency        |

---

### **Benefits of Computers in Measurement and Control**

*   **Increased Accuracy and Precision:** Digital processing minimizes signal drift and allows for finer control.
*   **Enhanced Flexibility and Adaptability:** Control strategies can be easily modified through software, without physical changes.
*   **Improved Efficiency and Throughput:** Optimized control leads to better resource utilization and higher production rates.
*   **Greater Process Understanding:** Extensive data logging and analysis provide insights into process behavior.
*   **Enhanced Safety:** Sophisticated alarm systems and interlocks improve operational safety.
*   **Reduced Operational Costs:** Automation reduces the need for manual intervention, leading to lower labor costs.
*   **Remote Monitoring and Control:** Computers and networks enable operators to monitor and control processes from distant locations.
*   **Advanced Diagnostics and Troubleshooting:** Computers can self-diagnose issues and assist in troubleshooting.
*   **Integration Capabilities:** Seamless integration with other plant systems (MES, ERP).
*   *(Referenced in: Herb - "Understanding Distributed Processor Systems for Control")*

---

### **Limitations and Challenges of Computers in Control**

*   **Cost:** Initial investment in hardware, software, and training can be significant.
*   **Complexity:** Designing, implementing, and maintaining computer-based systems requires specialized skills.
*   **Vulnerability to Software Errors:** Bugs in control software can lead to incorrect operations or system failures.
*   **Cybersecurity Threats:** Networked control systems are vulnerable to cyberattacks.
*   **Hardware Failures:** Like any electronic device, computer hardware can fail.
*   **Electromagnetic Interference (EMI):** Digital systems can be susceptible to noise, requiring proper shielding and grounding.
*   **Real-time Constraints:** Ensuring that computations and control actions are performed within strict time limits is crucial.
*   **Dependence on Power Supply:** Uninterrupted power is essential for computer-based systems.

---

### **Examples of Computer-Based Control**

1.  **Temperature Control in an Oven:**
    *   **Measurement:** A thermocouple (sensor) measures oven temperature, providing an analog voltage signal.
    *   **Computer Role:** An Analog-to-Digital Converter (ADC) converts the analog signal to a digital value. A computer (or PLC) compares this value to a setpoint. If the temperature is too low, the computer signals a heating element to turn on (via a relay or solid-state switch). If too high, it signals the element to turn off. PID algorithms can be used for precise temperature regulation.
    *   *(Referenced in: Webb & Reiss, Ch 3 - "Number Systems and Data Representation" and Ch 4 - "Data Acquisition and Signal Conditioning")*

2.  **Flow Control in a Chemical Plant:**
    *   **Measurement:** A flow meter (e.g., magnetic flow meter) measures the rate of liquid flow, producing a pulse train or an analog current signal.
    *   **Computer Role:** The computer counts pulses or reads the analog current. It compares the flow rate to a desired setpoint. A control valve (actuator) is then adjusted by the computer (typically via a positioner) to increase or decrease flow as needed.
    *   *(Referenced in: Liptak, Vol 1 - "Flow Measurement and Control")*

3.  **Automated Assembly Line:**
    *   **Measurement:** Sensors (e.g., proximity sensors, optical sensors) detect the presence or absence of components.
    *   **Computer Role:** A PLC (a specialized industrial computer) receives signals from these sensors. Based on programmed logic (e.g., ladder logic), the PLC controls actuators like robotic arms, conveyor belts, and pneumatic cylinders to move parts, perform assembly steps, and sort finished products. This is an example of sequential and discrete control.
    *   *(Referenced in: Webb & Reiss, Ch 2 - "The Programmable Logic Controller - Hardware")*

4.  **Distributed Control System (DCS) in a Power Plant:**
    *   **Measurement:** Thousands of sensors throughout the plant measure temperature, pressure, flow, speed, etc.
    *   **Computer Role:** Multiple interconnected computers (controllers, operator stations, engineering stations) manage the entire plant. They acquire data, execute complex control loops, manage alarms, and provide operators with a unified view of the process via HMIs. This allows for coordinated control of various units (boilers, turbines, cooling systems).
    *   *(Referenced in: Herb - "Understanding Distributed Processor Systems for Control" and Chidambaram - "Computer Control of Processes")*

---

### **Important Points to Remember**

*   Computers have transitioned control systems from analog, mechanical, and discrete logic to sophisticated, flexible, and data-driven systems.
*   The core advantage of computers lies in their digital processing power, enabling complex algorithms, data handling, and integration.
*   While powerful, computer-based systems introduce new challenges related to software reliability, cybersecurity, and the need for skilled personnel.
*   PLCs (Programmable Logic Controllers) are a specific type of industrial computer designed for robust control applications, often in discrete and sequential manufacturing processes.
*   DCS (Distributed Control Systems) are more comprehensive computer-based systems used to control entire plants or large processes, with distributed intelligence and integrated supervision.
*   Understanding the "why" behind computerization (benefits) is crucial for appreciating the "how" (architecture, programming) discussed in later modules.

---

### **Practice Questions and Exercises**

**Question 1:**
What were the primary limitations of traditional pneumatic control systems that computers helped to overcome?

**Answer:**
The primary limitations of pneumatic control systems overcome by computers include their slow response times, limited flexibility (requiring physical re-wiring for changes), difficulty in implementing complex control strategies, extensive piping requirements, and limited data logging capabilities. Computers offer faster processing, software-based flexibility, complex algorithm implementation, and extensive data handling.

**Question 2:**
Explain the role of a computer in a simple temperature control loop for an industrial oven.

**Answer:**
In a temperature control loop, a computer receives an analog signal from a temperature sensor (e.g., thermocouple). This analog signal is converted to a digital value by an ADC. The computer then compares this digital temperature reading to a desired setpoint. Based on the difference, and potentially using a PID control algorithm, the computer decides whether to activate a heating element (to increase temperature) or a cooling system (to decrease temperature) via output signals to actuators (like relays or control valves). It also logs the temperature data for monitoring and analysis.

**Question 3:**
List three key benefits that computerization brought to industrial process control.

**Answer:**
Three key benefits are:
1.  **Increased Accuracy and Precision:** Due to digital processing and advanced algorithms.
2.  **Enhanced Flexibility and Adaptability:** Control logic can be reprogrammed easily.
3.  **Improved Efficiency and Throughput:** Through optimization and better process management.
*(Other valid answers include greater process understanding, enhanced safety, reduced operational costs, remote monitoring, etc.)*

**Question 4:**
Differentiate between DDC and Supervisory Control in the context of computer-based control systems.

**Answer:**
*   **Direct Digital Control (DDC):** The computer directly implements the control algorithms (e.g., PID) and makes decisions for individual control loops based on sensor inputs and setpoints. It directly manipulates final control elements (e.g., valves).
*   **Supervisory Control:** This is a higher level of control where computers oversee and coordinate multiple DDC loops or entire processes. SCADA systems are a prime example. They provide centralized monitoring, data acquisition, alarm management, and may adjust setpoints for lower-level controllers to optimize overall plant performance.

**Question 5 (Scenario-based):**
A manufacturing plant has an old system using mechanical timers and relays to control a sequence of operations. They are considering upgrading to a PLC. Based on what you've learned about the role of computers in control, what advantages would a PLC offer over the existing system for this sequential control application?

**Answer:**
A PLC would offer significant advantages:
*   **Reprogrammability:** Sequence logic can be easily changed via software without physically rewiring.
*   **Flexibility:** Easily accommodate changes in sequence, add new steps, or modify timing parameters.
*   **Reliability:** Solid-state electronics are generally more reliable and less prone to wear and tear than mechanical components.
*   **Diagnostics:** PLCs often have built-in diagnostic capabilities to help troubleshoot problems.
*   **Data Logging:** Can log events, cycle times, and potential errors for analysis.
*   **Scalability:** Easier to expand the system by adding more I/O modules if the process grows.
*   **Integration:** Can later be integrated with HMIs or other plant systems for better monitoring and control.

---

This concludes the introduction to the role of computers in measurement and process control. This foundational understanding will be critical as we delve deeper into specific computer-based control technologies like PLCs and DCS in subsequent modules.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
