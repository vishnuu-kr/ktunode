---
title: "PLC- Hardware and Internal Architecture-Input –output devices"
subject: "PLC AND AUTOMATION"
module: "Module 2: PLC"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36c8b"
status: "completed"
scrapedAt: "2026-05-23T16:44:15.138Z"
---
# PLC AND AUTOMATION

## Module 2: PLC

### Topic: PLC - Hardware and Internal Architecture - Input/Output Devices

This module delves into the fundamental hardware components and internal workings of a Programmable Logic Controller (PLC), with a specific focus on its crucial Input/Output (I/O) devices. Understanding these elements is essential for comprehending how PLCs interact with the physical world to automate processes.

---

### 1. PLC Hardware Overview

#### 1.1. Key Components of a PLC System

A typical PLC system comprises several interconnected hardware modules, each with a specific function.

*   **Central Processing Unit (CPU) or Processor Module:**
    *   **Definition:** The "brain" of the PLC, responsible for executing the user program, processing input signals, and generating output signals.
    *   **Functions:**
        *   Executes the ladder logic or other programming languages.
        *   Manages memory.
        *   Performs arithmetic and logical operations.
        *   Communicates with other modules.
    *   **Reference:** Liptak, "Instrument Engineer’s Handbook – Process Control," often discusses the CPU as the core of control systems. Webb & Reiss, "Programmable Logic Controllers – Principles and Applications," provides detailed insights into PLC processor architectures.
    *   **Important Point:** The CPU's speed and processing power determine the PLC's capacity to handle complex logic and scan times.

*   **Memory Module:**
    *   **Definition:** Stores the PLC's operating system, user program, and data.
    *   **Types:**
        *   **ROM (Read-Only Memory):** Stores the operating system and firmware, which is non-volatile (retains data when power is off).
        *   **RAM (Random-Access Memory):** Stores the user program, I/O status, timer/counter values, and other temporary data. It is volatile (loses data when power is off) but allows for fast read/write operations. Battery backup is often used to maintain RAM contents.
        *   **EEPROM/Flash Memory:** Increasingly used for storing user programs, offering non-volatility and reprogrammability.
    *   **Reference:** Chidambaram, "Computer Control of Processes," explains memory management in control systems, applicable to PLC memory.

*   **Input Modules (I/O Modules):**
    *   **Definition:** Interface between the field devices (sensors, switches) and the PLC's CPU. They convert incoming electrical signals from sensors into digital signals that the CPU can understand.
    *   **Functions:**
        *   Receive signals from sensors (e.g., temperature, pressure, proximity).
        *   Provide electrical isolation between field devices and the PLC.
        *   Condition and convert analog signals to digital for the CPU (Analog Input Modules).
        *   Accept digital signals directly from discrete devices (Digital Input Modules).
    *   **Reference:** Webb & Reiss extensively cover the types and functionalities of input modules.

*   **Output Modules (I/O Modules):**
    *   **Definition:** Interface between the PLC's CPU and the field devices (actuators, motors, lights). They convert digital output signals from the CPU into electrical signals that control actuators.
    *   **Functions:**
        *   Send control signals to actuators (e.g., solenoids, motor starters, indicator lights).
        *   Provide electrical isolation.
        *   Convert digital output signals to analog signals for controlling variable devices (Analog Output Modules).
        *   Switch on/off discrete devices (Digital Output Modules).
    *   **Reference:** Liptak's handbook offers insights into interfacing control signals with actuators in process control.

*   **Power Supply Module:**
    *   **Definition:** Converts AC mains voltage to the DC voltages required by the PLC modules.
    *   **Functions:**
        *   Provides regulated DC power to the CPU, memory, and I/O modules.
        *   Often includes filtering and surge protection.
    *   **Important Point:** A stable and reliable power supply is critical for the consistent operation of the PLC.

*   **Communication Module/Interface:**
    *   **Definition:** Enables the PLC to communicate with other devices, such as HMIs, other PLCs, computers, or supervisory control systems.
    *   **Types:** Serial (RS-232, RS-485), Ethernet, DeviceNet, Profibus, etc.
    *   **Reference:** Herb, "Understanding Distributed Processor Systems for Control," discusses communication protocols in distributed systems, which are relevant to PLC networking. Hackworth & Hackworth Jr., "Programmable Logic Controllers – Programming Methods and Applications," likely covers various communication options.

#### 1.2. PLC Form Factors

PLCs are available in various physical configurations to suit different installation needs and environmental conditions.

*   **Rack-Mounted (Modular) PLCs:**
    *   **Description:** Consist of a chassis or rack that holds individual modules (CPU, I/O, power supply, communication).
    *   **Advantages:** Flexible, scalable, easy to replace or add modules. Suitable for larger and more complex applications.
    *   **Example:** Allen-Bradley ControlLogix, Siemens S7-300/400.
    *   **Reference:** Webb & Reiss often illustrate rack-mounted systems.

*   **Compact (All-in-One) PLCs:**
    *   **Description:** Integrate the CPU, power supply, and a fixed number of I/O points into a single unit.
    *   **Advantages:** Cost-effective, space-saving, easy to install. Suitable for smaller applications.
    *   **Example:** Allen-Bradley MicroLogix, Siemens LOGO!, Omron CP1 Series.
    *   **Reference:** Many introductory texts, including Webb & Reiss, cover compact PLC designs.

*   **Ruggedized/Hazardous Location PLCs:**
    *   **Description:** Designed to withstand harsh environmental conditions such as extreme temperatures, humidity, dust, vibration, or potentially explosive atmospheres.
    *   **Features:** Enclosures with high IP ratings, intrinsic safety features.
    *   **Reference:** Liptak's handbook might touch upon environmental considerations for instrumentation.

---

### 2. PLC Internal Architecture

The internal architecture describes how the CPU processes information and interacts with memory and I/O.

#### 2.1. The Scan Cycle

The PLC operates in a continuous loop known as the scan cycle.

*   **Definition:** The time it takes for the PLC to complete one full cycle of reading inputs, executing the user program, updating outputs, and performing internal diagnostics.
*   **Steps in a typical Scan Cycle:**
    1.  **Read Inputs:** The PLC reads the status of all input devices and stores them in the input image table (a section of RAM).
    2.  **Execute Program:** The CPU scans the user program from top to bottom, left to right, executing logic instructions based on the current input status and internal memory.
    3.  **Update Outputs:** Based on the program execution, the PLC updates the output image table, which then controls the output devices.
    4.  **Housekeeping/Diagnostics:** The PLC performs internal checks, communicates with other modules, and handles communication requests.
*   **Factors Affecting Scan Time:**
    *   Program complexity (number of instructions, types of instructions).
    *   Number of I/O points.
    *   Communication activity.
    *   CPU processing speed.
    *   Memory usage.
*   **Important Point:** A faster scan time means the PLC reacts more quickly to changes in the process. Excessive scan time can lead to delays in control actions.
*   **Reference:** Webb & Reiss provide detailed explanations and diagrams of the PLC scan cycle.

#### 2.2. Memory Organization

Understanding how memory is organized is crucial for effective PLC programming.

*   **Input Image Table:**
    *   **Definition:** A block of memory that stores the current status of all input modules. Each bit in this table corresponds to a specific input point.
    *   **Function:** The CPU reads this table during program execution. Changes in physical inputs are updated in this table during the "Read Inputs" phase of the scan.

*   **Output Image Table:**
    *   **Definition:** A block of memory that stores the desired status of all output modules. Each bit corresponds to a specific output point.
    *   **Function:** The CPU writes to this table during program execution. The PLC hardware then uses the data in this table to energize or de-energize output devices during the "Update Outputs" phase of the scan.

*   **Data Table/Register File:**
    *   **Definition:** Stores various types of data, including:
        *   **Timers:** Store time delays and current timer values.
        *   **Counters:** Store counts and current counter values.
        *   **Integer/Real Numbers:** For process variables, calculations, and setpoints.
        *   **Internal Relays/Bits:** Used for internal logic operations, sequencing, and flags.
    *   **Reference:** Chidambaram's book on computer control would cover data handling and storage.

*   **Program Memory:**
    *   **Definition:** Stores the user-written ladder logic or other control programs.

#### 2.3. CPU Operations

*   **Instruction Set:**
    *   **Definition:** The set of basic operations that the PLC's CPU can perform. This includes logical operations (AND, OR, NOT), comparison operations, arithmetic operations (ADD, SUB), timer and counter instructions, move instructions, etc.
    *   **Reference:** Webb & Reiss detail common PLC instruction sets.

*   **Addressability:**
    *   **Definition:** How input, output, and data memory locations are referenced. This typically involves a slot number, module type, and point number (e.g., `I:0/0` for Input module 0, point 0; `B3:0/1` for Bit in Data File 3, word 0, bit 1).
    *   **Important Point:** Correct addressing is vital for the PLC to interact with the correct field devices.

---

### 3. Input/Output (I/O) Devices

I/O devices are the transducers that connect the PLC to the physical world. They are categorized into input and output devices.

#### 3.1. Input Devices

These devices detect physical conditions and convert them into electrical signals.

*   **Digital Inputs (Discrete Inputs):**
    *   **Definition:** Devices that provide an ON/OFF or TRUE/FALSE signal.
    *   **Common Examples:**
        *   **Pushbuttons:** Momentary or maintained switches that signal user commands.
        *   **Selector Switches:** Switches that can be set to different positions (e.g., ON/OFF, AUTO/MANUAL).
        *   **Limit Switches:** Actuated by mechanical movement of machinery, indicating position or presence.
        *   **Proximity Sensors:** Detect the presence of objects without physical contact (inductive, capacitive, photoelectric).
        *   **Float Switches:** Detect liquid levels.
    *   **How they connect to PLC:** Typically wired to digital input modules. The module interprets the voltage level (e.g., 0-5V for OFF, 10-30V for ON) and converts it to a digital signal for the CPU.
    *   **Reference:** Liptak's handbook and Webb & Reiss provide comprehensive coverage of common industrial sensors.

*   **Analog Inputs (AI):**
    *   **Definition:** Devices that provide a continuously variable signal proportional to a physical quantity.
    *   **Common Examples:**
        *   **Temperature Sensors:** Thermocouples, RTDs (Resistance Temperature Detectors), thermistors.
        *   **Pressure Transmitters:** Convert pressure into an electrical signal (e.g., 4-20mA, 0-10V).
        *   **Flow Meters:** Measure flow rate.
        *   **Level Transmitters:** Measure the level of liquids or solids.
        *   **Position Sensors:** Potentiometers, LVDTs (Linear Variable Differential Transformers).
    *   **Signal Standards:**
        *   **Voltage Signals:** 0-5V, 0-10V, ±10V.
        *   **Current Signals:** 4-20mA, 0-20mA. The 4-20mA standard is preferred in industrial environments because the 4mA signal can be used to indicate a fault condition (e.g., sensor failure) whereas 0mA would indicate a complete loss of signal.
    *   **How they connect to PLC:** Wired to analog input modules. These modules contain Analog-to-Digital Converters (ADCs) to convert the analog signal into a digital value (e.g., a 12-bit ADC converts a signal into 4096 discrete levels).
    *   **Reference:** Liptak's handbook is a definitive source for understanding process sensors and their signal standards. Herb's book might discuss analog signal processing in control systems.

#### 3.2. Output Devices

These devices receive electrical signals from the PLC and perform an action in the physical world.

*   **Digital Outputs (Discrete Outputs):**
    *   **Definition:** Devices that are switched ON or OFF by the PLC.
    *   **Types of Output Modules:**
        *   **Relay Outputs:** Provide isolated contacts (NO/NC) that can switch AC or DC loads up to a certain current/voltage rating. They are versatile but have a slower response time and limited lifespan compared to solid-state outputs.
        *   **Transistor Outputs (NPN/PNP):** Provide fast switching speeds and long life, suitable for DC loads. However, they have lower current/voltage ratings and are not isolated from the PLC's internal circuitry unless a separate optocoupler is used.
        *   **Triac Outputs:** Solid-state devices used for switching AC loads. They offer faster switching than relays but have limited current/voltage capabilities and can generate electrical noise.
    *   **Common Examples:**
        *   **Solenoid Valves:** Control the flow of air or liquid.
        *   **Motor Starters/Contactors:** Turn motors on/off.
        *   **Indicator Lights:** Signal system status.
        *   **Buzzers/Alarms:** Alert operators.
    *   **How they connect to PLC:** Connected to digital output modules. The PLC's output image table determines the state (ON/OFF) of these connections.
    *   **Reference:** Webb & Reiss provide excellent detail on the different types of output devices and their interfacing.

*   **Analog Outputs (AO):**
    *   **Definition:** Devices that receive a variable analog signal from the PLC to control a physical process parameter.
    *   **Common Examples:**
        *   **Control Valves:** Modulate the flow of fluids based on a control signal.
        *   **Variable Speed Drives (VSDs)/Variable Frequency Drives (VFDs):** Control the speed of motors.
        *   **Indicating Meters:** Display process values.
    *   **Signal Standards:** 4-20mA, 0-10V.
    *   **How they connect to PLC:** Connected to analog output modules. These modules contain Digital-to-Analog Converters (DACs) that convert the digital value from the output image table into an analog signal for the actuator.
    *   **Reference:** Liptak's handbook is essential for understanding analog control elements.

#### 3.3. Input/Output Isolation

*   **Definition:** Electrical isolation is a critical safety and reliability feature in PLC I/O. It prevents high voltages or electrical noise from the field devices from reaching the sensitive internal circuitry of the PLC and vice-versa.
*   **Methods of Isolation:**
    *   **Optocouplers (Opto-isolators):** Use light to transfer signals between two electrically isolated circuits. Common in transistor and some digital input modules.
    *   **Transformers:** Used in some older or specific analog I/O modules.
    *   **Relays:** Provide inherent electrical isolation between the coil and the contacts.
*   **Importance:**
    *   **Safety:** Protects personnel and equipment from electrical hazards.
    *   **Noise Immunity:** Prevents electrical noise from field wiring from corrupting PLC signals.
    *   **Ground Loop Prevention:** Avoids issues arising from different ground potentials in the system.
*   **Reference:** Herb's book on distributed systems might touch upon signal integrity and isolation in networked environments.

---

### Learning Outcomes Alignment:

*   **CO1: Understand the basic architecture and components of computer-based measurement and control systems.**
    *   This entire module directly addresses this outcome by detailing the PLC's CPU, memory, power supply, and the function of I/O modules within the broader context of computer-based control.
*   **CO2: Understand the human-machine interfaces (HMI) and learn the hardware and interfacing techniques needed to integrate computer systems with process controls.**
    *   While HMIs are not the primary focus here, the discussion of communication modules is a precursor to understanding HMI integration. The input/output devices described are the very elements that HMIs monitor and control.
*   **CO3: Create and troubleshoot PLC programs using ladder logic for various applications.**
    *   Understanding the PLC's scan cycle, memory organization (input/output image tables), and how I/O devices are addressed is fundamental to creating and troubleshooting PLC programs.
*   **CO4: Understand and apply the architecture and interfaces of Distributed Control Systems in various process control settings.**
    *   The concepts of modularity, communication modules, and the I/O interfacing discussed here are building blocks for understanding more complex DCS architectures where PLCs might act as nodes.

---

### Practice Questions:

1.  **Describe the main components of a PLC and briefly state the function of each.**
    *   **Answer:** CPU (executes program), Memory (stores program and data), Input Modules (interface with sensors), Output Modules (interface with actuators), Power Supply (provides power), Communication Module (networking).
2.  **What is the PLC scan cycle, and what are its key stages?**
    *   **Answer:** The scan cycle is the continuous process of reading inputs, executing the program, updating outputs, and diagnostics. Stages: Read Inputs, Execute Program, Update Outputs, Housekeeping.
3.  **Explain the difference between digital (discrete) input devices and analog input devices. Provide two examples of each.**
    *   **Answer:** Digital inputs provide ON/OFF signals, while analog inputs provide continuously variable signals. Examples: Digital - Pushbutton, Limit Switch. Analog - Temperature Transmitter, Pressure Sensor.
4.  **What is the purpose of the input image table and the output image table in a PLC?**
    *   **Answer:** The input image table holds the current status of physical inputs for the CPU to read. The output image table holds the desired state of physical outputs, which the PLC hardware then uses to control actuators.
5.  **Why is electrical isolation important in PLC I/O modules?**
    *   **Answer:** For safety (protecting personnel and equipment), noise immunity (preventing electrical interference), and preventing ground loops.
6.  **A temperature sensor outputs a 4-20mA signal. What type of PLC I/O module would be used to interface this sensor, and what is the primary advantage of the 4-20mA standard?**
    *   **Answer:** An Analog Input (AI) module. The advantage is that 4mA can represent a fault condition (e.g., sensor failure), unlike 0mA which might be ambiguous.

---

### Important Points to Remember:

*   **PLC is a ruggedized computer:** Designed for industrial environments.
*   **Scan cycle is fundamental:** Affects system response time.
*   **I/O modules are the interface:** Connect PLC to the real world.
*   **Digital vs. Analog:** Different signal types require different I/O modules.
*   **4-20mA is a common industrial standard:** For analog signals, offering fault indication.
*   **Isolation is crucial:** For safety and reliability.
*   **Memory tables (Input/Output Image):** Key for understanding program execution.

---

This concludes the study notes for PLC Hardware, Internal Architecture, and Input/Output Devices. Refer to the provided textbooks for more in-depth explanations and specific examples relevant to different PLC manufacturers.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
