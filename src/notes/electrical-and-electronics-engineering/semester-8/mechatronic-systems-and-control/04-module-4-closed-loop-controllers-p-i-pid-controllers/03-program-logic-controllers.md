---
title: "Program Logic Controllers"
subject: "MECHATRONIC SYSTEMS AND CONTROL"
module: "Module 4: Closed loop controllers:  P, I, PID Controllers"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200882b85456187f36cd2"
status: "completed"
scrapedAt: "2026-05-23T16:43:55.370Z"
---
# MECHATRONIC SYSTEMS AND CONTROL

## Module 4: Closed Loop Controllers: P, I, PID Controllers

### Topic: Programmable Logic Controllers (PLCs)

---

### 1. Introduction to Programmable Logic Controllers (PLCs)

**1.1 What is a PLC?**

A Programmable Logic Controller (PLC) is a ruggedized industrial digital computer adapted for the control of manufacturing processes, such as assembly lines, robotic devices, or any activity that requires high reliability, ease of programming, and process fault diagnosis. They are a key component in automation, bridging the gap between sensors, actuators, and the decision-making logic.

*   **Key Concept:** PLCs replace traditional hardwired relay logic systems with a programmable, software-based solution, offering greater flexibility and efficiency.
*   **Origin:** Developed to overcome the limitations of relay-based control systems, which were complex to reconfigure and prone to wear and tear. (Refer to Bolton, Chapter 8: Programmable logic controllers)

**1.2 PLC Architecture**

A typical PLC system consists of three main components:

*   **Central Processing Unit (CPU):** The "brain" of the PLC. It executes the control program, processes input signals, and sends output signals. It contains a microprocessor, memory (for program and data), and input/output (I/O) interfaces.
*   **Input Modules:** Interface between the PLC and field devices (sensors, switches). They convert incoming electrical signals (e.g., 24V DC, 120V AC) into logic levels that the CPU can understand.
    *   **Examples:** Digital inputs for switches, pushbuttons; Analog inputs for temperature sensors, pressure sensors.
    *   **CO1 Alignment:** Comprehend the importance of sensors with application to mechatronic systems (e.g., how sensors provide input to PLCs).
*   **Output Modules:** Interface between the PLC and actuators (motors, solenoids, lights). They convert logic signals from the CPU into electrical signals that can power the actuators.
    *   **Examples:** Digital outputs for relays, contactors; Analog outputs for variable speed drives.
    *   **CO2 Alignment:** Identify actuator mechanisms and signal conditioning processes (e.g., how PLC outputs control actuators).
*   **Power Supply:** Provides the necessary voltage and current to the PLC modules and the CPU.
*   **Programming Device/Software:** A personal computer or specialized programming terminal used to create, edit, download, and monitor PLC programs.

**1.3 Types of PLCs**

PLCs can be categorized based on their structure and capabilities:

*   **Compact/Monolithic PLCs:** All components (CPU, I/O, power supply) are integrated into a single unit. Suitable for smaller applications.
*   **Modular PLCs:** Components are separate modules that can be assembled into a rack. Offers flexibility for expansion and customization.
*   **Rack-mounted PLCs:** Similar to modular PLCs but with a more robust rack system designed for harsher environments.

**1.4 PLC Programming Languages**

PLCs are programmed using specific languages designed for industrial control:

*   **Ladder Logic (LD):** The most common PLC programming language, resembling electrical relay schematics. It uses "rungs" of logic, similar to how relays are wired.
    *   **Key Concept:** Relates to the familiar world of electrical engineering for maintenance personnel and electricians.
    *   **Example:** A simple ladder logic rung to turn on a light when a pushbutton is pressed and a stop button is released.
        ```ladder
        ---[ ]----+---[\]----+
        Input 1  |  Input 2  |-- (Output 1)
        (Start)  |  (Stop)   |  (Light)
        ```
*   **Function Block Diagram (FBD):** Uses graphical blocks representing functions (e.g., timers, counters, arithmetic operations) connected by lines representing data flow.
*   **Structured Text (ST):** A high-level programming language similar to Pascal or C. Suitable for complex algorithms and data manipulation.
*   **Instruction List (IL):** A low-level assembly-like language.
*   **Sequential Function Chart (SFC):** A graphical programming language for organizing programs into steps and transitions, ideal for sequential control tasks.

**1.5 PLC Scan Cycle**

The PLC continuously executes a scan cycle, which involves:

1.  **Read Inputs:** The PLC reads the status of all input devices and stores them in the input image table.
2.  **Execute Program:** The PLC executes the user program logic, using the input status and internal memory to determine the output status.
3.  **Update Outputs:** The PLC updates the status of all output devices based on the results of the program execution.
4.  **Housekeeping:** Performs internal diagnostics and communication tasks.

**1.6 PLC Advantages over Relay Logic**

*   **Flexibility and Re-programmability:** Easy to change control logic by modifying the software, unlike rewiring relay logic.
*   **Reduced Wiring:** Significantly less wiring compared to hardwired relay systems.
*   **Increased Reliability:** Solid-state components are less prone to mechanical failure than relays.
*   **Enhanced Diagnostics:** PLCs offer built-in diagnostic capabilities to identify faults.
*   **Networking Capabilities:** Can communicate with other PLCs, HMIs, and computers for data acquisition and remote control.
*   **Cost-Effectiveness:** For complex systems, PLCs are often more cost-effective due to reduced wiring, installation, and maintenance.

**1.7 PLC Applications in Mechatronics**

PLCs are widely used in mechatronic systems for:

*   **Process Control:** Regulating temperature, pressure, flow rates in manufacturing.
*   **Motion Control:** Controlling the speed and position of motors, robots.
*   **Automated Assembly Lines:** Coordinating the operation of various machines and robots.
*   **Material Handling:** Controlling conveyors, cranes, and automated guided vehicles (AGVs).
*   **Packaging Machines:** Controlling filling, sealing, and labeling operations.
*   **Robotics:** As the central controller for robot tasks.

---

### 2. PLC as a Closed-Loop Controller

While PLCs are inherently programmable controllers, they are frequently used to implement closed-loop control strategies, including PID control.

**2.1 PLC Implementation of PID Control**

Many modern PLCs have built-in PID function blocks that simplify the implementation of PID control loops.

*   **Key Concept:** The PLC's CPU reads the sensor input (Process Variable - PV), compares it to the setpoint (SP), calculates the error, and then computes an output signal to an actuator (e.g., a valve position or motor speed) to reduce the error.
*   **Inputs to PID Block:**
    *   Setpoint (SP): The desired value for the process variable.
    *   Process Variable (PV): The current value measured by the sensor.
    *   Proportional Gain ($K_p$): Controls the strength of the proportional response.
    *   Integral Gain ($K_i$) or Integral Time ($T_i$): Controls the strength of the integral response, eliminating steady-state error.
    *   Derivative Gain ($K_d$) or Derivative Time ($T_d$): Controls the strength of the derivative response, anticipating future error.
*   **Output of PID Block:**
    *   Control Output (CO): The signal sent to the actuator.
*   **CO4 Alignment:** Analyze the models and responses of different systems (by implementing PID control logic within a PLC and observing system response).

**2.1.1 PID Function Block in PLC Programming**

Consider a simple example of controlling the temperature of a tank using a PLC.

*   **Sensors:** Temperature sensor (e.g., RTD) connected to an analog input module.
*   **Actuator:** Electric heater or control valve for steam, connected to an analog output module.
*   **PLC Program:** A PID instruction block will be configured with appropriate gains.

**Example (Ladder Logic-like representation of PID block usage):**

```ladder
// Data Registers for PID
SETPOINT: REAL := 50.0;  // Desired temperature (e.g., 50 deg C)
PROCESS_VARIABLE: REAL; // From analog input card
CONTROL_OUTPUT: REAL;   // To analog output card

// PID Parameters
KP: REAL := 2.5;
KI: REAL := 0.8;
KD: REAL := 0.1;

// PID Function Block Instance
PID_CONTROL: PID (
    Setpoint := SETPOINT,
    Input := PROCESS_VARIABLE,
    Kp := KP,
    Ki := KI,
    Kd := KD,
    Output => CONTROL_OUTPUT
);

// Analog Input Read
PROCESS_VARIABLE := AnalogInput_Module[1].Channel[0];

// Analog Output Write
AnalogOutput_Module[1].Channel[0] := CONTROL_OUTPUT;
```

**2.2 PLC Communication and Networking**

PLCs can communicate with other devices, enabling distributed control systems and SCADA (Supervisory Control and Data Acquisition) systems.

*   **Key Concept:** Protocols like Modbus, Ethernet/IP, Profibus allow PLCs to exchange data with HMIs, drives, other PLCs, and databases.
*   **Benefits:** Centralized monitoring, remote control, data logging, and system integration.

---

### 3. PLC for Implementing P, PI, and PID Control

As highlighted in Module 4, PLCs are the workhorses for implementing these fundamental control strategies.

*   **Proportional (P) Control:** The PLC calculates an output proportional to the current error ($E = SP - PV$).
    *   `Output = Kp * E`
*   **Proportional-Integral (PI) Control:** The PLC adds an integral term to the proportional term, which is proportional to the accumulation of past errors. This eliminates steady-state error.
    *   `Output = Kp * E + Ki * integral(E) dt`
*   **Proportional-Integral-Derivative (PID) Control:** The PLC adds a derivative term, which is proportional to the rate of change of the error. This improves transient response and reduces overshoot.
    *   `Output = Kp * E + Ki * integral(E) dt + Kd * dE/dt`

**3.1 Tuning PID Controllers in PLCs**

Tuning is crucial for achieving optimal performance. PLCs often offer features for online tuning or parameter adjustment.

*   **Methods:** Ziegler-Nichols, Auto-tuning features in PLC software.
*   **Importance:** Proper tuning ensures stability, fast response, and minimal error.
*   **Textbook Reference:** Histand & Alciatore (Chapter 10: Control Systems) and Shetty & Kolk (Chapter 12: Control Systems) discuss tuning methods which can be applied in a PLC context.

---

### 4. Key Concepts and Definitions

*   **PLC:** Programmable Logic Controller.
*   **CPU:** Central Processing Unit.
*   **I/O Modules:** Input/Output Modules.
*   **Ladder Logic (LD):** A graphical PLC programming language.
*   **Scan Cycle:** The sequential operation of a PLC (Read Inputs, Execute Program, Update Outputs).
*   **Setpoint (SP):** The desired value of a process variable.
*   **Process Variable (PV):** The actual measured value of the process variable.
*   **Error (E):** The difference between the Setpoint and the Process Variable ($E = SP - PV$).
*   **Control Output (CO):** The signal generated by the controller to influence the actuator.
*   **Proportional Gain ($K_p$):** Factor by which the error is multiplied in proportional control.
*   **Integral Gain ($K_i$):** Factor by which the integral of the error is multiplied.
*   **Derivative Gain ($K_d$):** Factor by which the derivative of the error is multiplied.
*   **SCADA:** Supervisory Control and Data Acquisition.
*   **HMI:** Human-Machine Interface.

---

### 5. Practice Questions & Exercises

**Question 1:**
Describe the main components of a PLC and explain the function of each. (CO1, CO2, CO3)

**Question 2:**
Compare and contrast Ladder Logic with Structured Text as PLC programming languages. (Knowledge Level: K2 - Implicit in understanding different programming paradigms for control)

**Question 3:**
A PLC is used to control the filling of a tank with water. A level sensor provides the current water level (PV) to an analog input. A control valve regulates the inflow of water to an analog output. If the desired level (SP) is 1 meter and the current level is 0.5 meters, explain how a PLC implementing PID control would adjust the control valve. (CO1, CO4)

**Question 4:**
Explain the concept of the PLC scan cycle and why it is important for real-time control.

**Question 5:**
What are the advantages of using a PLC over a traditional relay-based control system for a complex mechatronic application like an automated assembly line? (CO1, CO2, CO3)

**Question 6:**
Consider a PLC program implementing a simple "start/stop" logic for a motor using Ladder Logic.
*   What input devices would be required?
*   What output device would be controlled?
*   Draw a basic ladder logic rung to represent this functionality. (CO1, CO2)

---

### 6. Answers to Practice Questions

**Answer 1:**
The main components of a PLC are:
*   **CPU:** The central processing unit that executes the control program, processes inputs, and generates outputs. It contains the microprocessor, memory, and communication interfaces.
*   **Input Modules:** Convert external signals from sensors and switches into digital signals that the CPU can understand. For mechatronic systems, this involves receiving signals from temperature sensors, proximity sensors, limit switches, etc. (CO1, CO2)
*   **Output Modules:** Convert digital signals from the CPU into electrical signals that can activate actuators like motors, solenoids, and indicator lights. (CO2)
*   **Power Supply:** Provides regulated power to the CPU and I/O modules.
*   **Programming Device/Software:** Used to write, edit, download, and monitor the PLC program.

**Answer 2:**
*   **Ladder Logic (LD):**
    *   **Nature:** Graphical, resembling electrical relay schematics.
    *   **Ease of Understanding:** Intuitive for electricians and technicians familiar with relay logic.
    *   **Application:** Best suited for discrete control, sequencing, and basic logic.
    *   **Complexity:** Can become cumbersome for complex mathematical operations or algorithms.
*   **Structured Text (ST):**
    *   **Nature:** Textual, high-level programming language (similar to Pascal or C).
    *   **Ease of Understanding:** Requires programming knowledge.
    *   **Application:** Ideal for complex calculations, data manipulation, algorithms, and conditional logic.
    *   **Complexity:** More powerful for intricate control strategies and data processing.

**Answer 3:**
If the desired level (SP) is 1 meter and the current level (PV) is 0.5 meters, the error ($E = SP - PV$) is 0.5 meters.
*   **Proportional Action:** The PLC's PID controller will output a signal proportional to this positive error (0.5m). A larger positive error would result in a larger output.
*   **Integral Action:** The PLC will also integrate the error over time. As long as the PV is below the SP, the error remains positive, and the integral term will continuously increase the control output, helping to drive the PV up to the SP and eliminate any steady-state error.
*   **Derivative Action:** If the level is rising quickly, the derivative of the error will be negative, which will slightly reduce the control output to help prevent overshoot. If the level is rising slowly, the derivative will be near zero.
*   **Overall:** The combined effect of these actions will cause the PLC to send a signal to the control valve to open further, increasing the water inflow until the tank level reaches the setpoint of 1 meter. (CO4)

**Answer 4:**
The PLC scan cycle is the sequential process the CPU follows to operate:
1.  **Read Inputs:** The PLC scans all input modules and updates the internal input image table with the current status of the field devices.
2.  **Execute Program:** The PLC executes the user-written control program from top to bottom (or according to its logic), using the data in the input image table and internal memory.
3.  **Update Outputs:** Based on the program's execution, the PLC updates its internal output image table and then writes these values to the output modules, energizing or de-energizing the connected actuators.
4.  **Housekeeping:** Performs internal diagnostics, checks for errors, and handles communication tasks.

This cycle repeats continuously (typically in milliseconds). It's important for real-time control because it ensures that the PLC's decisions are based on the most up-to-date input information and that outputs are updated promptly, maintaining the desired system behavior.

**Answer 5:**
Advantages of PLCs over traditional relay-based control for an automated assembly line:
*   **Flexibility:** Control logic can be easily modified by changing the PLC program, allowing for quick adjustments to the assembly process or the introduction of new product variants without extensive rewiring.
*   **Reduced Wiring Complexity:** Significantly less wiring is required compared to complex relay panels, leading to lower installation costs and easier troubleshooting.
*   **Enhanced Diagnostics:** PLCs provide diagnostic features that can pinpoint faults in the control system, speeding up troubleshooting and reducing downtime.
*   **Advanced Control Capabilities:** PLCs can easily implement complex control algorithms (like PID), handle data acquisition, perform calculations, and communicate with other systems (e.g., robots, vision systems, SCADA).
*   **Reliability:** Solid-state components in PLCs are generally more reliable than electromechanical relays, leading to higher uptime.
*   **Expandability:** Modular PLCs can be expanded by adding more I/O modules as the assembly line requirements change. (CO1, CO2, CO3)

**Answer 6:**
*   **Input Devices:**
    *   A **Start Pushbutton** (normally open contact) connected to a digital input.
    *   A **Stop Pushbutton** (normally closed contact) connected to a digital input.
*   **Output Device:**
    *   A **Motor Contactor Coil** connected to a digital output.
*   **Ladder Logic:**

    ```ladder
    // Rung 1: Motor Start/Stop Control
    // Input 1: Start Button (Normally Open)
    // Input 2: Stop Button (Normally Closed)
    // Output 1: Motor Contactor Coil

    ---[ ]----+---[\]----+
    Input 1  |  Input 2  |-- (Output 1)
    (Start)  |  (Stop)   |  (Motor)
             |           |
             +---[ ]-----+  // Seal-in contact of Output 1
               (Output 1)
    ```
    **Explanation:**
    *   When the Start button (Input 1) is pressed, Input 1 becomes true.
    *   Assuming the Stop button (Input 2) is pressed (its normally closed contact is closed, so Input 2 is true), the rung logic is satisfied.
    *   Output 1 (Motor Contactor Coil) energizes.
    *   The seal-in contact of Output 1 (also connected to Input 1 in the logic) then bypasses the Start button, keeping the motor running even after the Start button is released.
    *   When the Stop button is pressed, Input 2 becomes false, breaking the continuity of the rung, de-energizing Output 1 and stopping the motor. (CO1, CO2)

---

### 7. Important Points to Remember

*   PLCs are the backbone of modern industrial automation, offering a flexible and reliable alternative to hardwired relay logic.
*   Understanding the PLC scan cycle is crucial for predicting the system's response.
*   PLCs are capable of implementing complex control algorithms, including PID, by utilizing specialized function blocks or programming the logic manually.
*   The choice of PLC programming language depends on the complexity of the task and the expertise of the programmer.
*   PLCs are essential for integrating sensors and actuators in mechatronic systems, enabling sophisticated closed-loop control. (CO1, CO2, CO3, CO4)

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 8. Textbook References Used and Concepts Incorporated

*   **Bolton, W. (4th Edition, 2010) - Mechatronics: Electronic Control Systems in Mechanical and Electrical Engineering:** Chapter 8 provides a good overview of PLC hardware, programming languages (especially ladder logic), and applications. This forms the foundational understanding of PLCs.
*   **Histand, M. B., & Alciatore, D. G. (2003) - Introduction to Mechatronics and Measurement Systems:** Chapters on control systems and microcontrollers are relevant. The principles of PID control discussed here are directly implemented in PLCs. The book's focus on microcontrollers also implicitly links to the CPU function within a PLC.
*   **Shetty, D., & Kolk, R. A. (2010) - Mechatronics System Design:** Similar to Histand & Alciatore, this text offers insights into system design and control aspects that are realized through PLC implementation. Control system tuning concepts are particularly relevant.
*   **Bishop, R. H. (2017) - Mechatronics: An Introduction:** Provides a broad introduction to mechatronics, placing PLCs within the context of integrating mechanical, electrical, and computer engineering.
*   **Merzouki, R., et al. (2003) - Intelligent Mechatronic Systems: Modeling, Control and Diagnosis:** While focusing on more advanced intelligent systems, the underlying principles of control and system modeling are applicable to PLC-based control. Diagnosis aspects are also a key feature of PLCs.

These notes integrate the core concepts of PLCs, their architecture, programming, and their role in implementing closed-loop control strategies like PID, aligning with the learning outcomes and course outcomes provided.