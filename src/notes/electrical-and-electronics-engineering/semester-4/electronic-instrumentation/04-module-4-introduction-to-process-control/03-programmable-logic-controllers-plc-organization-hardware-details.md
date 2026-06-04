---
title: "Programmable logic controllers (PLC), Organization- Hardware details-"
subject: "ELECTRONIC INSTRUMENTATION"
module: "Module 4: Introduction to Process Control "
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35e89"
status: "completed"
scrapedAt: "2026-05-23T16:16:24.247Z"
---
# Electronic Instrumentation: Module 4 - Introduction to Process Control

## Topic: Programmable Logic Controllers (PLCs) - Organization and Hardware Details

### 1. Introduction to Process Control

Process control is the field of industrial automation that aims to regulate and manage various industrial processes to achieve desired operational goals, such as maintaining product quality, maximizing efficiency, and ensuring safety. PLCs are fundamental building blocks in modern process control systems.

### 2. Programmable Logic Controllers (PLCs)

#### 2.1 Definition and Purpose

A **Programmable Logic Controller (PLC)** is a ruggedized industrial digital computer that has been adapted for the control of manufacturing processes, such as assembly lines, robotic devices, or any activity that requires high reliability, ease of programming, and process fault diagnosis. PLCs are designed to replace hard-wired relay logic systems, offering greater flexibility, scalability, and diagnostic capabilities.

**Key Concepts:**
*   **Automation:** The use of technology to perform tasks with minimal human intervention.
*   **Industrial Processes:** Manufacturing, chemical production, power generation, etc.
*   **Relay Logic:** Traditional control systems using physical relays and wiring to implement logic.

#### 2.2 Evolution of PLCs

PLCs emerged in the late 1960s as a replacement for complex relay logic systems. Early PLCs were designed to be more flexible and easier to reprogram than hard-wired systems. Over time, they have evolved to incorporate advanced features like networking, diagnostics, and integration with other automation systems.

**Referenced in:**
*   *A course in Electrical and Electronic Measurements & Instrumentation* by A. K. Sawhney (Dhanpat Rai & Co., 2011) - Likely discusses the historical context of automation and control systems.
*   *Programmable Logic Controllers* by William Bolton (Elsevier India Pvt. Ltd, 5th edition) - A primary source for understanding PLC evolution and fundamental concepts.

#### 2.3 Why PLCs? Advantages over Relay Logic

*   **Flexibility:** Logic can be easily changed or modified through software programming without rewiring.
*   **Scalability:** PLC systems can be expanded to handle more inputs and outputs as needed.
*   **Cost-Effectiveness:** For complex control systems, PLCs are generally more cost-effective than extensive relay wiring.
*   **Ease of Troubleshooting:** PLCs offer built-in diagnostics that aid in identifying and resolving issues quickly.
*   **Reliability:** Designed for harsh industrial environments.
*   **Space Saving:** A single PLC can replace a large panel of relays.
*   **Advanced Capabilities:** Can perform mathematical calculations, data logging, communication, and integration with other systems (SCADA, DCS).

**Aligned with:**
*   **CO1 (Identify sensors/transducers suitable for industrial applications):** PLCs are the brains that interpret signals from these sensors.
*   **CO4 (Develop the logic for process control applications using PLC programming):** This is the core function of PLCs.

### 3. PLC Organization

A PLC system can be conceptually divided into several key components that work together to achieve control.

#### 3.1 Basic Structure

The fundamental structure of a PLC consists of:

*   **Central Processing Unit (CPU) / Processor:** The "brain" of the PLC. It executes the user program, manages memory, and communicates with other components.
*   **Input Module(s):** Interfaces with field devices (sensors, switches) and converts their signals into a format the CPU can understand (digital or analog).
*   **Output Module(s):** Interfaces with actuators (motors, lights, valves) and converts the CPU's commands into signals that can control these devices.
*   **Power Supply:** Provides the necessary voltages to operate the PLC components.
*   **Programming Device/Terminal:** A computer or dedicated terminal used to load, edit, and monitor the PLC program.

**Referenced in:**
*   *Electronic Instrumentation* by H. S. Kalsi (McGraw Hill, New Delhi, 4th Ed., 2019) - Likely covers the architecture of control systems, including PLCs.
*   *Programmable Logic Controllers* by William Bolton (Elsevier India Pvt. Ltd, 5th edition) - Provides detailed breakdowns of PLC architecture.

#### 3.2 The Scan Cycle

The PLC operates in a continuous loop known as the **scan cycle**. This cycle ensures that the PLC continuously monitors inputs, executes the control logic, and updates outputs.

**Steps in a typical scan cycle:**

1.  **Read Inputs:** The PLC reads the status of all input devices connected to the input modules and stores this information in the input image table.
2.  **Execute Program:** The CPU executes the user-written control program, using the data from the input image table to make decisions.
3.  **Perform Diagnostics:** The PLC performs internal checks to ensure all components are functioning correctly.
4.  **Update Outputs:** Based on the program execution, the CPU updates the output image table, and these changes are then sent to the output modules, which control the field devices.
5.  **Housekeeping/Communication:** Performs other internal tasks and communication with programming devices or other controllers.

**Diagrammatic Representation (Conceptual):**

```
+-----------------+      +-------------------+      +-----------------+
|   Input Modules |----->|      CPU          |----->|  Output Modules |
| (Read Inputs)   |      | (Program Logic)   |      | (Update Outputs)|
+-----------------+      +-------------------+      +-----------------+
        ^                        |                          |
        |                        |                          |
        |                +-----------------+          +-----------------+
        |                |  Input Image    |          | Output Image    |
        |                |      Table      |          |      Table      |
        |                +-----------------+          +-----------------+
        |                        ^
        |                        |
        +------------------------+
         (Programming Device / Diagnostics)
```

**Important Point to Remember:** The scan cycle time is critical for real-time control. Faster scan times are required for applications with high-speed operations.

**Aligned with:**
*   **CO4 (Develop the logic for process control applications using PLC programming):** Understanding the scan cycle is crucial for writing effective PLC programs.

#### 3.3 PLC Software

PLCs are programmed using specialized software. The most common programming language is **Ladder Logic (LD)**, which resembles electrical relay schematics. Other IEC 61131-3 standard languages include:

*   **Function Block Diagram (FBD):** Graphical representation using blocks.
*   **Structured Text (ST):** High-level, text-based language.
*   **Instruction List (IL):** Low-level, assembly-like language.
*   **Sequential Function Chart (SFC):** For managing sequential operations.

**Referenced in:**
*   *Programmable Logic Controllers* by William Bolton (Elsevier India Pvt. Ltd, 5th edition) - Dedicated sections on PLC programming languages.

### 4. PLC Hardware Details

Understanding the physical components of a PLC is essential for installation, maintenance, and troubleshooting.

#### 4.1 Central Processing Unit (CPU) / Processor

*   **Function:** Executes the user program, manages memory, handles communication, and performs diagnostics.
*   **Components:** Microprocessor, memory (RAM, ROM, EEPROM), I/O interface, communication interfaces.
*   **Memory Types:**
    *   **ROM (Read-Only Memory):** Stores the operating system and firmware.
    *   **RAM (Random Access Memory):** Used for temporary data storage, including the user program, input/output image tables, and data registers.
    *   **EEPROM/Flash Memory:** Stores the user program and configuration data, allowing for non-volatile storage.
*   **Processors:** Vary in speed and processing power depending on the PLC model and application complexity.

**Referenced in:**
*   *Electronic Instrumentation* by H. S. Kalsi (McGraw Hill, New Delhi, 4th Ed., 2019) - May discuss the digital circuitry and processing elements within control systems.
*   *Programmable Logic Controllers* by William Bolton (Elsevier India Pvt. Ltd, 5th edition) - Detailed explanation of CPU architecture and memory management.

#### 4.2 Input Modules

*   **Function:** Connect sensors and switches to the PLC and convert their signals into logic levels that the CPU can process.
*   **Types:**
    *   **Digital Input Modules:** Accept on/off signals (e.g., pushbuttons, limit switches, proximity sensors). These are typically optically isolated to protect the CPU from voltage spikes.
    *   **Analog Input Modules:** Accept continuously varying signals (e.g., temperature sensors like RTDs or thermocouples, pressure transducers, flow meters). These modules typically contain signal conditioning circuitry (amplification, filtering) and an Analog-to-Digital Converter (ADC).
*   **Key Features:**
    *   **Isolation:** Electrical isolation (often optical) between the field devices and the PLC's internal circuitry to prevent damage.
    *   **Voltage/Current Ratings:** Must match the voltage/current levels of the field devices.
    *   **Input Filtering:** To remove electrical noise from field signals.
    *   **Number of Channels:** Modules are available with different numbers of input points.

**Referenced in:**
*   *A course in Electrical and Electronic Measurements & Instrumentation* by J. B. Gupta (S K Kataria & Sons, 14th Ed., 2014) - Discusses signal conditioning and interfacing for various sensors.
*   *Electronic Instrumentation* by H. S. Kalsi (McGraw Hill, New Delhi, 4th Ed., 2019) - Covers signal conditioning and data acquisition.
*   **CO1 (Identify sensors/transducers suitable for industrial applications):** Input modules interface with these sensors.
*   **CO2 (Design the signal conditioning circuits for industrial instrumentation and automation):** Analog input modules inherently involve signal conditioning.

#### 4.3 Output Modules

*   **Function:** Translate control signals from the CPU into electrical signals that can activate actuators.
*   **Types:**
    *   **Digital Output Modules:** Control devices that require an on/off signal (e.g., relays, solenoids, indicator lights, motor starters).
        *   **Relay Outputs:** Use a relay contact to switch higher voltage/current loads.
        *   **Transistor Outputs:** Use a transistor (NPN or PNP) to switch DC loads.
        *   **Triac Outputs:** Use a triac to switch AC loads.
    *   **Analog Output Modules:** Provide a variable analog signal (e.g., 0-10V, 4-20mA) to control devices like variable speed drives or proportional valves. These modules contain a Digital-to-Analog Converter (DAC).
*   **Key Features:**
    *   **Isolation:** Similar to input modules, outputs are typically isolated.
    *   **Load Capacity:** Must be able to handle the voltage and current requirements of the connected actuator.
    *   **Response Time:** How quickly the output signal can change.

**Referenced in:**
*   *Electrical Measurements & Measuring Instruments* by Golding E.W and Widdis (Wheeler Pub.) - While not PLC-specific, it covers fundamental electrical switching and control principles.
*   *Programmable Logic Controllers* by William Bolton (Elsevier India Pvt. Ltd, 5th edition) - Detailed information on output types and specifications.
*   **CO2 (Design the signal conditioning circuits for industrial instrumentation and automation):** Analog output modules are part of the output signal conditioning.

#### 4.4 Power Supply Module

*   **Function:** Converts the incoming AC power (e.g., 120/240 VAC) to the low-voltage DC required by the PLC's internal circuitry (e.g., +5V, +24V).
*   **Key Features:**
    *   **Input Voltage Range:** Specifies the AC input voltage it can accept.
    *   **Output Voltage(s):** Provides the necessary DC voltages for the CPU, I/O modules, and sometimes for powering field devices.
    *   **Current Capacity:** Must be sufficient to power all connected modules.
    *   **Redundancy:** For critical applications, redundant power supplies may be used.

**Referenced in:**
*   *Programmable Logic Controllers* by William Bolton (Elsevier India Pvt. Ltd, 5th edition) - Essential for understanding the power requirements of PLC systems.

#### 4.5 Chassis / Rack

*   **Function:** Provides a physical structure to mount and interconnect the PLC modules (CPU, I/O modules, communication modules, etc.).
*   **Types:**
    *   **Fixed I/O PLCs:** All components are integrated into a single unit.
    *   **Modular PLCs:** Modules are plugged into a chassis or rack, allowing for greater flexibility and customization.
*   **Backplane:** The internal circuitry of the chassis that provides power and communication pathways between modules.

**Referenced in:**
*   *Programmable Logic Controllers* by William Bolton (Elsevier India Pvt. Ltd, 5th edition) - Explains the physical construction and modularity.

#### 4.6 Communication Modules

*   **Function:** Enable the PLC to communicate with other PLCs, PCs, HMIs (Human-Machine Interfaces), SCADA systems, and other devices on a network.
*   **Common Protocols:**
    *   **Ethernet/IP:** Widely used industrial Ethernet protocol.
    *   **Modbus:** Common serial or TCP/IP protocol.
    *   **Profibus/Profinet:** Popular fieldbus technologies.
    *   **DeviceNet:** A CAN-based network for industrial control.
*   **Types:** Serial ports (RS-232, RS-485), Ethernet ports, proprietary network ports.

**Referenced in:**
*   *SCADA: Supervisory Control and Data Acquisition* by Stuart A. Boyer (International Society of Automation, 4th edition, 2010) - Discusses communication protocols essential for SCADA integration.
*   *Electronic Instrumentation and Measurements* by David A Bel (Oxford) - Might cover data communication standards in measurement systems.
*   **CO3 (Understand the concepts of data transmission methods applicable to electronic instrumentation systems):** Communication modules are the hardware implementation of these methods.
*   **CO6 (Describe the fundamental concepts of DCS and SCADA systems):** PLCs often communicate with DCS and SCADA systems.

### 5. Examples and Applications

*   **Manufacturing Assembly Line:** A PLC can control the sequence of operations, activate robots, control conveyors, and monitor sensor feedback to ensure products are assembled correctly.
    *   *Input:* Limit switches to detect part presence, proximity sensors, pushbuttons.
    *   *Output:* Motor starters for conveyors, solenoids for pneumatic actuators, indicator lights.
*   **Water Treatment Plant:** A PLC can monitor water levels, flow rates, pH levels, and chemical concentrations, controlling pumps, valves, and chemical feeders to maintain water quality.
    *   *Input:* Level sensors, flow meters, pH probes, pressure transmitters.
    *   *Output:* Solenoid valves, pump motor starters, chemical dosing pumps.
*   **Automated Packaging Machine:** A PLC controls the movement of the packaging material, filling mechanisms, sealing operations, and product handling.
    *   *Input:* Photoelectric sensors for product detection, limit switches for position feedback.
    *   *Output:* Solenoid valves for pneumatic grippers, heating elements for sealing, motor controls.

**Aligned with:**
*   **CO1, CO2, CO4, CO6:** These examples illustrate how PLCs, sensors, signal conditioning, programming, and communication with higher-level systems are integrated.

### 6. Practice Questions and Exercises

**Question 1:**
Which component of a PLC is responsible for executing the control program and managing memory?
(a) Input Module
(b) Output Module
(c) CPU
(d) Power Supply

**Answer:** (c) CPU

**Question 2:**
Describe the difference between digital and analog input modules in a PLC. Provide an example of a sensor that would be connected to each.

**Answer:**
*   **Digital Input Modules:** Accept discrete on/off signals. They are used for devices like pushbuttons (on), limit switches (activated/not activated), or proximity sensors (object detected/not detected).
*   **Analog Input Modules:** Accept continuously varying signals representing physical quantities. They are used for sensors like thermocouples or RTDs (temperature), pressure transducers (pressure), or flow meters (flow rate). These modules typically perform signal conditioning and analog-to-digital conversion.

**Question 3:**
Explain the concept of a PLC scan cycle. What are the main steps involved?

**Answer:**
The PLC scan cycle is the continuous, repetitive operation where the PLC reads inputs, executes the user program, performs diagnostics, and updates outputs. The main steps are:
1.  Read Inputs
2.  Execute Program
3.  Perform Diagnostics
4.  Update Outputs
5.  Housekeeping/Communication

**Question 4:**
A PLC system for controlling a bottling plant requires monitoring the fill level of bottles. What type of sensor would be most suitable, and what type of PLC module would it connect to?

**Answer:**
*   **Sensor:** A **capacitive proximity sensor** or an **optical sensor** could be used to detect the presence or level of the liquid in the bottle. If a continuous level is needed, an **ultrasonic sensor** or a **capacitive level sensor** might be used.
*   **PLC Module:** If the sensor provides a simple "full/not full" or "present/not present" signal, a **digital input module** would be used. If the sensor provides a continuous level reading (e.g., voltage or current proportional to the level), an **analog input module** would be required.

**Question 5:**
Why is electrical isolation important for PLC input and output modules?

**Answer:**
Electrical isolation is crucial to protect the PLC's sensitive internal circuitry (CPU, memory) from potentially high voltages, voltage spikes, or noise present in the industrial environment and on the field devices. It also prevents ground loops and ensures operator safety.

### 7. Important Points to Remember

*   PLCs are designed for industrial environments and offer flexibility over hard-wired relay logic.
*   The PLC scan cycle is fundamental to its operation.
*   Input modules convert field signals to logic levels; output modules convert logic levels to control signals.
*   Digital I/O handles on/off signals, while analog I/O handles variable signals.
*   Electrical isolation is a critical safety and reliability feature for I/O modules.
*   Communication modules enable PLCs to integrate into larger automation networks.

This comprehensive study guide provides a foundation for understanding the organization and hardware details of Programmable Logic Controllers (PLCs) within the context of Electronic Instrumentation and Process Control.
