---
title: "Study of PLC programming, Controlling variable speed drive through PLC"
subject: "MECHANICAL ENGINEERING LAB"
module: "Module 2: Experiment on Whirling of shaft"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf4804463716"
status: "completed"
scrapedAt: "2026-05-20T18:01:39.107Z"
---
# Mechanical Engineering Lab - Module 2: Experiment on Whirling of Shaft

## Topic: Study of PLC Programming, Controlling Variable Speed Drive through PLC

This module introduces the fundamental concepts of Programmable Logic Controllers (PLCs) and their application in controlling Variable Speed Drives (VSDs). This knowledge is crucial for modern industrial automation and aligns with Course Outcome 4 (CO4: Demonstrate the functions and control of various devices used for industrial automation).

---

### 1. Introduction to Programmable Logic Controllers (PLCs)

**1.1 What is a PLC?**

A PLC is a ruggedized digital computer used for the automation of typically industrial electromechanical processes, such as control of machinery on factory assembly lines, amusement rides, or lighting fixtures. Unlike open-system computers, PLCs are designed for industrial environments and incorporate extended ranges of temperature, humidity, and electrical noise.

*   **Key Features:**
    *   **Rugged Construction:** Designed to withstand harsh industrial conditions (vibration, dust, temperature extremes).
    *   **Modular Design:** Allows for easy expansion and customization of I/O (Input/Output) modules.
    *   **Real-time Operation:** Processes inputs and updates outputs very quickly, essential for continuous control.
    *   **Programming:** Uses specialized programming languages, often ladder logic.
    *   **Reliability:** Built for long-term, continuous operation.

*   **Core Components:**
    *   **CPU (Central Processing Unit):** The "brain" of the PLC, executes the program.
    *   **Memory:** Stores the operating system, user program, and data.
    *   **Input Modules:** Interface with sensors and switches (e.g., proximity sensors, limit switches, push buttons).
    *   **Output Modules:** Control actuators and devices (e.g., motors, relays, solenoids, indicator lights).
    *   **Power Supply:** Provides the necessary power for the PLC and its modules.
    *   **Communication Interface:** For programming, networking, and communication with other devices.

**1.2 Why Use PLCs for Industrial Automation?**

PLCs have largely replaced hard-wired relay logic systems due to their flexibility, scalability, and ease of troubleshooting.

*   **Advantages over Relay Logic:**
    *   **Flexibility:** Programs can be easily modified without rewiring.
    *   **Cost-Effectiveness:** For complex control systems, PLCs are often cheaper than extensive relay panels.
    *   **Troubleshooting:** Diagnostic features and online monitoring simplify fault finding.
    *   **Scalability:** Easily add or remove I/O as needs change.
    *   **Connectivity:** Can communicate with other PLCs, HMIs (Human-Machine Interfaces), and SCADA (Supervisory Control and Data Acquisition) systems.
    *   **Data Logging and Reporting:** Can collect and store operational data.

**1.3 PLC Programming Languages**

Several programming languages are standardized by the IEC 61131-3. The most common are:

*   **Ladder Logic (LD):** Mimics the schematic diagram of relay circuits, making it intuitive for electricians and maintenance personnel. This is often the primary language used in introductory PLC training.
    *   **Rungs:** Horizontal lines of logic.
    *   **Contacts:** Represent inputs (e.g., normally open (NO), normally closed (NC)).
    *   **Coils:** Represent outputs or internal bits.
    *   **Timers and Counters:** Essential control elements.

    **Example (Ladder Logic - Simple Motor Control):**
    ```
    --[ ]--[ ]----( )--  (Start Button NC, Stop Button NO, Motor Output)
     |     |
     |     --|/|--      (Stop Button NO)
     |_______|
    ```
    *   *Explanation:* When the Stop button (NC) is not pressed and the Start button (NO) is pressed, the Motor Output (represented by a Coil) turns ON.

*   **Function Block Diagram (FBD):** Graphical language using function blocks to represent operations.

*   **Structured Text (ST):** High-level, text-based language similar to Pascal or C.

*   **Instruction List (IL):** Low-level, assembly-like language.

*   **Sequential Function Chart (SFC):** Graphical language for structuring complex sequential operations.

**1.4 PLC Scan Cycle**

The PLC operates in a continuous loop known as the scan cycle:

1.  **Read Inputs:** The PLC reads the status of all physical inputs and stores them in its input image table.
2.  **Execute Program:** The PLC executes the user program from top to bottom, rung by rung (or block by block), using the data from the input image table.
3.  **Update Outputs:** Based on the program execution, the PLC updates the status of its physical outputs.
4.  **Housekeeping/Communications:** Performs internal diagnostics and handles communication tasks.

**Important Point:** The PLC's output state is updated only *after* the entire program has been executed for that scan. This can be important for understanding timing and logic.

---

### 2. Variable Speed Drives (VSDs)

**2.1 What is a VSD?**

A Variable Speed Drive (VSD), also known as a Variable Frequency Drive (VFD) or Adjustable Speed Drive (ASD), is a type of motor controller that drives an electric motor by varying the frequency and voltage supplied to the motor. This allows for precise control over the motor's speed and torque.

*   **Purpose:** To optimize energy consumption, improve process control, and reduce mechanical stress on equipment by matching motor speed to the actual load requirement.

**2.2 How VSDs Work (Basic Principle)**

VSDs typically convert the fixed AC voltage and frequency from the power grid into a variable AC voltage and frequency. A common method involves:

1.  **Rectification:** AC power is converted to DC power using a rectifier.
2.  **DC Bus:** The DC power is smoothed and stored in a DC link capacitor.
3.  **Inversion:** The DC power is then converted back to AC power using an inverter, with the frequency and voltage controlled by the switching of power electronic devices (like IGBTs or MOSFETs).

**2.3 Key Parameters Controlled by VSDs**

*   **Motor Speed:** The primary function, directly controlled by the output frequency.
*   **Torque:** Can be controlled to ensure smooth starting and prevent overload.
*   **Acceleration/Deceleration Ramps:** Define how quickly the motor speed changes, reducing mechanical shock.
*   **Motor Starting Method:** Soft start functionality reduces inrush current.

**2.4 VSD Control Methods**

VSDs can be controlled in various ways:

*   **Local Control:** Using the VSD's built-in keypad and display.
*   **Analog Control:** Using analog signals (e.g., 0-10V or 4-20mA) to set speed references.
*   **Digital Control (Discrete I/O):** Using digital inputs to control start/stop, direction, and preset speeds.
*   **Serial Communication:** Using communication protocols (e.g., Modbus RTU, Profibus, Ethernet/IP) for advanced parameter control and monitoring.

---

### 3. Controlling VSD through PLC

This is where the synergy between PLCs and VSDs becomes powerful for industrial automation. The PLC acts as the "brain," receiving input from sensors and human interfaces, processing the logic, and then sending commands to the VSD to control the motor.

**3.1 Control Architectures**

*   **Discrete I/O Control:**
    *   **Logic:** The PLC uses its digital output modules to provide signals to the VSD's digital input terminals.
    *   **Signals:**
        *   **Start/Stop:** A digital output from the PLC turns ON/OFF a dedicated start input terminal on the VSD.
        *   **Forward/Reverse:** A digital output controls a forward/reverse input on the VSD.
        *   **Preset Speeds:** Multiple digital inputs on the VSD can be wired to PLC outputs to select pre-programmed speeds (e.g., Speed 1, Speed 2).
        *   **Fault Reset:** A PLC output can be used to reset a fault condition on the VSD.
    *   **Speed Reference:**
        *   **Analog Output:** The PLC uses an analog output module to generate a variable voltage (e.g., 0-10V) or current (e.g., 4-20mA) signal, which is connected to the VSD's analog input for speed referencing.
        *   **Digital Speed Reference:** In some VSDs, specific digital input combinations can select different speed reference values defined within the VSD's parameters.

*   **Serial Communication Control:**
    *   **Logic:** The PLC communicates with the VSD using a serial communication protocol. This requires the PLC to have a communication module (e.g., RS485, Ethernet) and the VSD to support the same protocol.
    *   **Advantages:**
        *   **Bidirectional Communication:** The PLC can not only send commands (start, stop, speed reference) but also read VSD status (speed, current, voltage, faults, motor temperature).
        *   **Parameterization:** The PLC can read and write VSD parameters remotely, allowing for dynamic adjustments to acceleration times, motor data, control modes, etc.
        *   **Fewer Wires:** Reduces wiring complexity compared to extensive discrete I/O wiring.
        *   **Advanced Diagnostics:** More detailed fault information can be transmitted to the PLC for reporting or logging.

**3.2 Typical PLC Program Structure for VSD Control**

A PLC program to control a VSD will typically include:

*   **Initialization Section:** Setting up communication parameters if using serial communication.
*   **Input Handling:** Reading push buttons for start/stop, speed selection switches, or sensor feedback.
*   **Logic Control:**
    *   Implementing interlocks and safety logic.
    *   Determining the desired motor speed based on process requirements.
    *   Selecting preset speeds or generating an analog speed reference.
*   **Output Control:**
    *   Driving digital output coils to control VSD discrete inputs (start, stop, direction).
    *   Writing values to the PLC's analog output module to set the speed reference.
    *   If using serial communication, sending specific commands or data values to the VSD's registers.
*   **Status Monitoring (Optional but Recommended):**
    *   Reading feedback from VSD (e.g., running status, fault status) via discrete inputs or serial communication.
    *   Displaying VSD information on an HMI.

**Example Scenario: Controlling a Conveyor Belt**

Let's consider controlling a conveyor belt motor using a PLC and VSD.

*   **PLC Inputs:**
    *   Start Pushbutton (Normally Open)
    *   Stop Pushbutton (Normally Closed)
    *   Speed Selection Switch (e.g., 3-position for Slow, Medium, Fast)
*   **PLC Outputs:**
    *   VSD Start/Run input
    *   VSD Fault Reset input (optional)
*   **VSD Analog Input:** Connected to PLC Analog Output for speed reference.

**Ladder Logic Snippet (Conceptual):**

```
// --- Motor Start/Stop Logic ---
// Latch for motor running status
--[ ]--+--|/|--+--( )--  (Start PB, Stop PB, MotorRun_Bit)
       |       |
       +--[ ]--+       (MotorRun_Bit)

// --- Speed Reference Logic ---
// Based on speed selection switch
IF SpeedSwitch = Slow THEN
    AnalogSpeed_Value = 5.0; // e.g., 5V representing 50% speed
ELSIF SpeedSwitch = Medium THEN
    AnalogSpeed_Value = 7.5;
ELSIF SpeedSwitch = Fast THEN
    AnalogSpeed_Value = 10.0;
END_IF;

// --- Output to VSD ---
// Connect PLC Analog Output to VSD Analog Input for speed reference
// Connect PLC Digital Output for Start/Run to VSD Run terminal
// Connect PLC Digital Output for Stop to VSD Stop terminal (if applicable, often handled by stop PB)
// Control MotorRun_Bit to drive VSD Run input based on Start/Stop logic.
```

**Important Point:** Always refer to the specific VSD manufacturer's manual for terminal functions, communication protocols, and parameter mapping.

---

### 4. Whirling of Shafts and its Relevance (Connecting to the Experiment)

While this topic focuses on PLC and VSD control, it's important to understand its context within the "Whirling of Shafts" experiment.

*   **Experiment Goal:** The whirling of shafts experiment typically aims to determine the critical or whirling speed of a shaft under various conditions (e.g., different lengths, different masses at different locations, different bearing supports).
*   **How VSDs and PLCs are Used:**
    *   **Speed Control:** A VSD controlled by a PLC allows for precise and smooth adjustment of the shaft's rotational speed. This is crucial for gradually increasing the speed to observe the onset of whirling.
    *   **Data Acquisition:** The PLC can be programmed to read speed from an encoder attached to the shaft and potentially log this data. It can also be used to trigger data acquisition from vibration sensors at specific speeds.
    *   **Automated Sweeping:** The PLC can automate the process of increasing the speed (e.g., by incrementally changing the analog output to the VSD) and detecting when the whirling amplitude exceeds a threshold, automatically stopping the motor or recording the speed.
    *   **Safety:** The PLC can implement safety interlocks, ensuring the shaft is not accelerated beyond a safe limit or that the system is shut down if excessive vibration is detected.

**Learning Outcome Alignment:**

*   **CO1 (Choose instruments):** Understanding VSDs and PLCs helps in choosing appropriate control and feedback instrumentation.
*   **CO2 (Determine dimensional/form accuracies):** While not directly measured by PLC/VSD, accurate speed control provided by them is vital for accurate whirling speed measurement.
*   **CO3 (Design/analyze mechanisms):** Understanding how to control dynamic systems (like a rotating shaft) with VSDs and PLCs is part of mechatronic system design.
*   **CO4 (Functions/control of industrial automation devices):** This topic directly addresses the functions and control of PLCs and VSDs, key devices in industrial automation.
*   **CO5 (3D printing):** Not directly applicable to this specific topic but covered in other modules.

---

### 5. Key Concepts and Definitions to Remember

*   **PLC:** Programmable Logic Controller - a digital computer for industrial automation.
*   **VSD:** Variable Speed Drive - controls motor speed by varying frequency and voltage.
*   **Ladder Logic:** A programming language for PLCs mimicking relay circuits.
*   **Rung:** A horizontal line of logic in ladder logic.
*   **Contact:** Represents an input or internal status (NO/NC).
*   **Coil:** Represents an output or internal bit.
*   **Scan Cycle:** The continuous loop of input reading, program execution, and output updating in a PLC.
*   **Discrete I/O:** Digital inputs/outputs (ON/OFF signals).
*   **Analog I/O:** Variable signals (e.g., voltage or current) representing a range of values.
*   **Serial Communication:** Data exchange between devices using protocols like Modbus or Profibus.
*   **Critical Speed / Whirling Speed:** The rotational speed at which a shaft develops large amplitude vibrations.

---

### 6. Practice Questions and Exercises

**Question 1:**
Describe the primary function of a PLC in an industrial control system. What are the main advantages of using a PLC over traditional relay logic for complex automation tasks?

**Answer:**
The primary function of a PLC is to automate industrial processes by receiving inputs from sensors, executing a user-defined program, and controlling outputs to actuators. Advantages over relay logic include:
*   **Flexibility:** Easy program modification without rewiring.
*   **Cost-Effectiveness:** For complex systems, PLCs can be more economical.
*   **Troubleshooting:** Built-in diagnostics and online monitoring simplify fault finding.
*   **Scalability:** Easier to expand I/O capabilities.
*   **Connectivity:** Ability to communicate with other systems.

**Question 2:**
Explain the basic working principle of a Variable Speed Drive (VSD). What are the typical parameters it controls?

**Answer:**
A VSD converts fixed AC power to variable AC power. It typically rectifies AC to DC, then uses an inverter to create variable frequency and voltage AC output. Key parameters controlled are motor speed, torque, and acceleration/deceleration rates.

**Question 3:**
Compare and contrast controlling a VSD using discrete I/O versus serial communication from a PLC. List at least two advantages for each method.

**Answer:**
*   **Discrete I/O:**
    *   **Advantages:** Simple to implement for basic functions (start/stop), widely understood wiring, often lower initial cost for basic setups.
    *   **Disadvantages:** Requires extensive wiring for multiple functions, limited feedback capabilities.
*   **Serial Communication:**
    *   **Advantages:** Reduced wiring complexity, extensive feedback and diagnostic capabilities, remote parameterization.
    *   **Disadvantages:** Requires specific communication modules on both PLC and VSD, more complex initial setup and programming.

**Question 4:**
Imagine you need to control a motor to run at three different preset speeds (Low, Medium, High) using a PLC and VSD. Describe how you would achieve this using both discrete I/O and analog output methods from the PLC.

**Answer:**
*   **Discrete I/O Method:** You would use three digital outputs from the PLC connected to three digital inputs on the VSD. Each digital input combination would be configured in the VSD to select a specific preset speed. For example, Input 1 ON = Low, Input 2 ON = Medium, Input 1 & 2 ON = High. The PLC would activate the appropriate digital outputs based on the desired speed selection.
*   **Analog Output Method:** You would use one analog output from the PLC. The PLC program would determine the desired speed and output a corresponding analog signal (e.g., 0-10V). This analog signal would be connected to the VSD's analog input terminal, which is configured to accept speed reference signals. The PLC program would scale the desired speed to the correct analog output range.

**Question 5:**
In the context of the whirling of shafts experiment, how does the PLC-VSD control system contribute to the safety and efficiency of the experiment?

**Answer:**
The PLC-VSD system contributes to safety by allowing for smooth, controlled acceleration of the shaft, preventing sudden shocks. It can also implement automatic shutdown if excessive vibration is detected (via feedback to the PLC). It enhances efficiency by automating the speed sweeping process, allowing researchers to focus on data observation and analysis rather than manual speed adjustments. The PLC can also log the speed at which whirling occurs automatically.

---

### 7. Important Points to Remember

*   **Manufacturer Specifics:** Always consult the documentation for the specific PLC and VSD you are using. Terminal assignments, communication protocols, and parameter settings vary significantly between manufacturers.
*   **Safety First:** Implement proper safety interlocks and emergency stop procedures in your PLC program. Ensure correct wiring and grounding.
*   **Understanding Scan Time:** Be aware of the PLC's scan time and how it might affect the responsiveness of your control loop, especially when dealing with fast-changing analog signals or communication protocols.
*   **VSD Parameterization:** Properly configuring the VSD parameters (motor data, acceleration/deceleration times, control modes) is as crucial as the PLC programming itself.
*   **Communication Setup:** If using serial communication, ensure baud rates, parity, stop bits, and addresses are correctly configured on both the PLC and the VSD.
*   **Testing:** Thoroughly test your PLC program and VSD integration under controlled conditions before full deployment.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 8. References

*   **Mechatronics: Electronic Control Systems in Mechanical and Electrical Engineering by W. Bolton (Pearson Education Limited, New Delhi, 2007):** This textbook is highly relevant for understanding the electronic control aspects of VSDs and their integration with control systems like PLCs. Chapters on motor control and electronic interfaces would be particularly useful.
*   **Kinematics and Dynamics of Machinery by C.E.Wilson, P. Sadler (Pearson Education, 2005) / Machines and Mechanisms Applied Kinematic Analysis by D.H.Myskza (Pearson Education, 2013):** These books provide the foundational understanding of mechanical dynamics, which is essential for appreciating the need for controlled speed in experiments like whirling of shafts.
*   **Mechatronics: Integrated Mechanical Electronic Systems by K.P.Ramachandran, G.K.Vijayaraghavan, M.S.Balasundaram (Wiley India Pvt. Ltd., New Delhi, 2008):** This reference book offers a comprehensive view of mechatronic systems, including the role of PLCs and drives in integrated solutions.

---