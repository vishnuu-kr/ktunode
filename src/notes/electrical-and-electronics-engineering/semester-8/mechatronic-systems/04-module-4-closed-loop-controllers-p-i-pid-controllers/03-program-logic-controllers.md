---
title: "Program Logic Controllers"
subject: "MECHATRONIC SYSTEMS"
module: "Module 4: Closed loop controllers:  P, I, PID Controllers"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36bb3"
status: "completed"
scrapedAt: "2026-05-23T16:42:51.905Z"
---
# MECHATRONIC SYSTEMS: Module 4 - Closed Loop Controllers: P, I, PID Controllers

## Topic: Programmable Logic Controllers (PLCs)

This topic delves into Programmable Logic Controllers (PLCs) as a crucial component in implementing closed-loop control strategies, particularly PID control, within mechatronic systems. We will explore their architecture, programming, and how they integrate with sensors and actuators to achieve automated control.

---

### **1. Introduction to Programmable Logic Controllers (PLCs)**

**Definition:** A Programmable Logic Controller (PLC) is an industrial digital computer that has been ruggedized and adapted for the control of manufacturing processes, such as assembly lines, robotic devices, or any activity that requires high reliability, ease of programming, and process fault diagnosis.

**Key Concepts:**

*   **Industrial Computers:** Designed to withstand harsh industrial environments (vibration, temperature extremes, electrical noise).
*   **Real-time Control:** Capable of responding to inputs and controlling outputs within very short timeframes.
*   **Programmable:** Control logic is not hardwired but is implemented through software, allowing for flexibility and modification.
*   **Modular:** Typically composed of interconnected modules for CPU, power supply, input, and output.

**Historical Context & Evolution (Referencing Bolton - Chapter 13):**

*   Early automation relied on hardwired relay logic, which was inflexible and difficult to modify.
*   PLCs emerged in the late 1960s as a more flexible and cost-effective alternative to relay systems.
*   Evolution has seen PLCs become more powerful, incorporating advanced features like PID control, communication capabilities, and integration with Human-Machine Interfaces (HMIs).

**Why PLCs in Mechatronics?**

*   **Integration:** PLCs are ideal for integrating various mechatronic components (sensors, actuators, motors, etc.).
*   **Flexibility:** Control logic can be easily changed or updated without re-wiring.
*   **Reliability:** Designed for continuous operation in demanding industrial settings.
*   **Cost-effectiveness:** For complex systems, they are often more economical than custom-built controllers.
*   **Standardization:** Widely adopted in industry, making them familiar to engineers and technicians.

---

### **2. PLC Architecture and Components**

**General PLC Structure:**

A typical PLC system consists of the following main components:

*   **Central Processing Unit (CPU):**
    *   The "brain" of the PLC.
    *   Executes the control program stored in memory.
    *   Performs logic operations, arithmetic, timing, and counting.
    *   **Responsible for:** Reading inputs, executing the control program, and updating outputs. (Relates to CO3: Selecting microprocessors/microcontrollers).
*   **Memory:**
    *   Stores the operating system, user program, and data.
    *   Types: ROM (for OS), RAM (for user program and data, often battery-backed or non-volatile).
*   **Input Module:**
    *   Interface between external field devices (sensors, switches) and the PLC.
    *   Converts input signals (e.g., 24V DC, 120V AC) into logic levels that the CPU can understand.
    *   Provides isolation to protect the CPU.
    *   **Types of Inputs:** Digital (On/Off), Analog (voltage, current).
    *   **Relates to CO1:** Comprehending the importance of sensors.
*   **Output Module:**
    *   Interface between the PLC and external control devices (actuators, motors, indicator lights).
    *   Converts logic signals from the CPU into electrical signals suitable for controlling field devices.
    *   Provides isolation.
    *   **Types of Outputs:** Digital (On/Off relays, transistors), Analog (voltage, current for controlling variable speed drives, proportional valves).
    *   **Relates to CO2:** Identifying actuator mechanisms and signal conditioning.
*   **Power Supply:**
    *   Provides the necessary voltage and current to the PLC components and, often, to field devices.
    *   Needs to be robust and capable of handling industrial power fluctuations.
*   **Communication Interface:**
    *   Allows the PLC to communicate with other devices (e.g., HMIs, other PLCs, SCADA systems) using various industrial communication protocols (e.g., Ethernet/IP, Profibus, Modbus).

**(Referencing Histand & Alciatore - Chapter 14):** The PLC architecture is fundamentally based on the von Neumann architecture but adapted for industrial control. Input/output modules act as sophisticated signal conditioners and converters, a key aspect of mechatronic system design.

---

### **3. PLC Programming**

**Programming Languages:**

PLCs are programmed using specific languages defined by the IEC 61131-3 standard. The most common ones are:

*   **Ladder Logic (LD):**
    *   Graphical language resembling electrical relay schematics.
    *   Uses "rungs" that represent logic conditions and actions.
    *   **Components:** Contacts (normally open/closed), Coils (outputs), Timers, Counters, Arithmetic operations.
    *   **Key Concept:** Mimics the flow of electricity in a relay circuit.
    *   **Example:** A motor starts when a start button is pressed and stops when a stop button is pressed. This is easily translated into a ladder logic rung.

    ```
    // Example Ladder Logic for Motor Control
    +-----[ ]-----+----( )----+
    | Start Button| Motor Coil|
    +-----[/]-----+           |
    | Stop Button |-----------+
    +-------------+
    ```
    *   **Relates to CO4:** Analyzing models and responses (ladder logic represents the control logic model).

*   **Function Block Diagram (FBD):**
    *   Graphical language using pre-defined functional blocks to represent operations.
    *   Blocks have inputs and outputs that are interconnected.
    *   **Example:** Using a "PID Controller" block with inputs for setpoint, process variable, and outputs for control signal.
    *   **Key Concept:** Modular and hierarchical programming, good for complex algorithms like PID.

*   **Structured Text (ST):**
    *   High-level, text-based programming language similar to Pascal or C.
    *   Suitable for complex mathematical calculations, loops, and conditional statements.
    *   **Example:** Implementing PID calculations directly in ST.

*   **Instruction List (IL):**
    *   Low-level, assembly-like language.
    *   Less common for typical mechatronic applications.

*   **Sequential Function Chart (SFC):**
    *   Graphical language used for defining the sequence of operations in a control system.
    *   Consists of steps, transitions, and actions.
    *   Useful for managing complex automation sequences.

**PLC Scan Cycle:**

*   **Read Inputs:** The PLC reads the status of all input modules.
*   **Execute Program:** The PLC executes the user program logic, rung by rung or block by block, using the input data and internal memory.
*   **Update Outputs:** Based on the program execution, the PLC updates the status of all output modules.
*   **Housekeeping/Communications:** Performs internal diagnostics and communication tasks.

This cycle repeats continuously, typically in milliseconds, ensuring real-time control.

---

### **4. PLCs for Closed-Loop Control (PID Implementation)**

PLCs are widely used to implement PID controllers, bridging the gap between theoretical control concepts and practical automation.

**Implementing PID in PLCs:**

*   **Dedicated PID Blocks:** Many PLC manufacturers provide built-in PID function blocks in their software. These blocks abstract the complexity of PID tuning and calculation, offering inputs for:
    *   **Setpoint (SP):** The desired value for the process variable.
    *   **Process Variable (PV):** The measured value from a sensor.
    *   **Control Output:** The signal sent to the actuator.
    *   **Tuning Parameters:** Proportional gain (Kp), Integral time (Ti), Derivative time (Td).
*   **Custom PID Algorithms:** PID control can also be programmed from scratch using Structured Text or Function Block Diagrams, allowing for greater customization.

**Integration with Mechatronic Systems:**

*   **Sensor Input:** Analog input modules receive signals from sensors (e.g., temperature sensors, pressure transducers, position encoders) that measure the process variable (PV). (CO1, CO2).
*   **Actuator Output:** Analog output modules send control signals (e.g., 0-10V, 4-20mA) to actuators such as:
    *   Variable Frequency Drives (VFDs) for motor speed control.
    *   Proportional valves for hydraulic or pneumatic systems.
    *   Servo drives for precise positioning.
    *   (CO2: Identify actuator mechanisms and signal conditioning).
*   **Data Acquisition and Monitoring:** PLCs can log data, display process information on HMIs, and communicate data to higher-level systems for analysis and supervision.

**(Referencing Shetty & Kolk - Chapter 5 & 7):** PLCs excel at integrating diverse mechatronic components. Their ability to handle analog I/O and execute complex algorithms makes them ideal for advanced control loops like PID.

**(Referencing Bishop - Chapter 6):** Bishop emphasizes the role of PLCs in implementing sophisticated control strategies, often acting as the central nervous system of a mechatronic system.

**Example: PLC-based Temperature Control**

1.  **Sensor:** A thermocouple or RTD measures the temperature (PV).
2.  **PLC Input:** The analog input module converts the sensor's voltage/current signal into a digital value.
3.  **PLC Program:**
    *   A PID function block is configured with a desired temperature setpoint (SP).
    *   The PLC continuously reads the PV, calculates the error (SP - PV), and computes the control output using PID algorithm.
4.  **PLC Output:** The analog output module sends a control signal (e.g., 0-10V) to a heater's control input or a cooling valve.
5.  **Actuator:** The heater or cooling valve adjusts the heat input to maintain the desired temperature.

**(Relates to CO1, CO2, CO4):** This example demonstrates the PLC integrating a sensor (thermocouple), acting as a controller (PID block), and commanding an actuator (heater control). The analysis of how well the temperature is maintained relates to CO4.

---

### **5. PLC Selection Criteria for Mechatronic Systems**

When choosing a PLC for a mechatronic application, consider:

*   **I/O Requirements:** Number and type of digital and analog inputs/outputs needed.
*   **Processing Power:** Required scan time for the control loop, complexity of algorithms.
*   **Memory Capacity:** For program size, data logging, and future expansion.
*   **Communication Capabilities:** Protocols required for integration with other devices.
*   **Ruggedness and Environmental Ratings:** To withstand industrial conditions.
*   **Programming Software:** Ease of use, availability of libraries (especially for PID).
*   **Cost:** Budget constraints.
*   **Manufacturer Support and Availability:** Documentation, technical assistance.

**(Relates to CO3):** This section directly addresses the selection of microprocessors and microcontrollers (the CPU within the PLC) for mechatronic systems.

---

### **6. Practice Questions and Exercises**

**Question 1:**
Describe the primary function of the CPU in a PLC and explain its role in a closed-loop control system.
**Answer:**
The CPU (Central Processing Unit) is the brain of the PLC. It reads input signals from sensors, executes the user's control program (which might include a PID algorithm), and then sends output signals to actuators. In a closed-loop system, it continuously monitors the process variable, calculates the error between the setpoint and the process variable, and adjusts the actuator's output to minimize this error, thereby maintaining the desired state.

**Question 2:**
A PLC is used to control the speed of a motor using a Variable Frequency Drive (VFD). Identify the type of PLC modules that would be required for:
a) Reading the desired speed from an operator's potentiometer.
b) Sending the speed command signal to the VFD.
c) Reading the actual motor speed from an encoder.
**Answer:**
a) **Analog Input Module:** To read the variable voltage signal from the potentiometer.
b) **Analog Output Module:** To send a variable voltage or current signal (e.g., 0-10V or 4-20mA) to the VFD.
c) **Digital Input Module:** To receive pulse signals from the encoder (though for high-resolution or high-speed encoders, specific high-speed counter modules or even analog input modules for certain encoder types might be used).

**Question 3:**
Explain the advantage of using Ladder Logic for PLC programming in simple automation tasks compared to Structured Text.
**Answer:**
Ladder Logic's advantage lies in its graphical representation, which closely resembles electrical relay schematics. This makes it intuitive and easier to learn for electricians and technicians familiar with traditional control systems. For simple on/off control, sequential operations, or basic interlocking, ladder logic is often more straightforward and quicker to implement than writing complex lines of code in Structured Text.

**Question 4:**
How does a PLC's scan cycle relate to its ability to perform real-time closed-loop control, such as PID?
**Answer:**
The PLC's scan cycle is the fundamental mechanism for real-time control. It's a continuous loop where the PLC reads all inputs, executes the program (including PID calculations based on those inputs), and updates all outputs. The speed of this scan cycle (typically milliseconds) determines how quickly the PLC can react to changes in the process variable. A fast scan cycle is crucial for PID control to effectively calculate and apply corrective actions, especially for systems with fast dynamics. Any delay or significant variation in the scan time can degrade the performance of the PID loop.

---

### **8. Key Points to Remember**

*   **PLCs are robust, programmable industrial computers.**
*   **They integrate sensors and actuators to automate processes.**
*   **Modular design allows for flexibility in system configuration.**
*   **Ladder Logic is the most common PLC programming language for basic control.**
*   **Function Blocks and Structured Text are powerful for implementing complex algorithms like PID.**
*   **The PLC scan cycle is critical for real-time closed-loop control.**
*   **Analog I/O modules are essential for interfacing with sensors and actuators that provide or require variable signals.**
*   **PLCs provide a flexible and reliable platform for implementing PID control in mechatronic systems.**

---

### **9. Course Outcome Alignment**

*   **CO1: Comprehend the importance of sensors and actuators with application to mechatronic systems (Knowledge Level: K2)**
    *   **Alignment:** The notes explain how PLC input modules interface with sensors and output modules interface with actuators, demonstrating their crucial role in closed-loop systems. Examples of sensors (thermocouples, encoders) and actuators (VFDs, valves) are provided.
*   **CO2: Identify actuator mechanisms and signal conditioning processes (Knowledge Level: K2)**
    *   **Alignment:** The notes describe how PLC output modules condition signals to drive various actuators (VFDs, proportional valves) and how input modules handle signals from sensors, which is a form of signal conditioning.
*   **CO3: Select microprocessors and microcontrollers for the implementation in mechatronic system (Knowledge Level: K2)**
    *   **Alignment:** The "PLC Selection Criteria" section directly addresses this by discussing the CPU's role, processing power, and memory needs, which are characteristics of microprocessors and microcontrollers used within PLCs.
*   **CO4: Analyse the models and responses of different systems (Knowledge Level: K3)**
    *   **Alignment:** By explaining the PLC's scan cycle and how it executes control logic (like PID), the notes provide the foundation for analyzing how a mechatronic system will respond to control actions. The PID implementation details allow for a theoretical understanding of expected system responses under PLC control. The practice questions also encourage analytical thinking about PLC behavior.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
