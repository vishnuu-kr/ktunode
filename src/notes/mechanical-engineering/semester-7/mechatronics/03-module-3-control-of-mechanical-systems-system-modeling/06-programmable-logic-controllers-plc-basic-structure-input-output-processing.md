---
title: "Programmable Logic Controllers (PLC) –Basic structure, input/ output processing."
subject: "MECHATRONICS"
module: "Module 3: Control of mechanical systems : System modeling "
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463f1b"
status: "completed"
scrapedAt: "2026-05-20T18:14:50.462Z"
---
# MECHATRONICS: Module 3: Control of Mechanical Systems - System Modeling

## Topic: Programmable Logic Controllers (PLC) – Basic Structure, Input/Output Processing

---

### 1. Introduction to Programmable Logic Controllers (PLCs)

**Definition:** A Programmable Logic Controller (PLC) is a ruggedized digital computer used for the automation of electromechanical processes, such as control of machinery on factory assembly lines, amusement rides, or lighting fixtures. PLCs are designed for industrial environments and are used to replace hard-wired relay logic systems.

**Importance in Mechatronics:** PLCs are the backbone of industrial automation in mechatronic systems. They provide a flexible and reliable way to control sequences of operations, manage complex machinery, and integrate various sensors and actuators. Understanding PLCs is crucial for implementing automated control strategies in real-world mechatronic applications.

**Alignment with Course Outcomes:**
*   **CO4 (K3):** Understand the use of PLC for industrial and product automation and to create ladder programs for applications. This topic directly addresses the foundational understanding required to achieve CO4.

**Textbook References:**
*   **Bolton (7th):** Likely covers PLCs as a fundamental component of industrial control systems.
*   **Onwubolu:** May delve into PLC architecture and programming in the context of industrial automation.
*   **Shetty & Kolk:** Could present PLCs as a control element within broader mechatronic system design.
*   **Rajput:** Likely provides a good overview of PLC basics and their role in mechatronics.

---

### 2. Basic Structure of a PLC

The basic structure of a PLC consists of several key components that work together to monitor inputs, execute a control program, and control outputs.

#### 2.1 Central Processing Unit (CPU) / Processor

*   **Function:** The CPU is the "brain" of the PLC. It executes the control program stored in its memory, processes input signals, and sends output signals based on the program logic.
*   **Components:**
    *   **Microprocessor:** Performs arithmetic and logical operations.
    *   **Memory:** Stores the operating system, user program, and data (e.g., status of inputs/outputs, timers, counters).
    *   **Communication Interface:** For programming, monitoring, and communication with other devices.
*   **How it works:** The CPU continuously scans the input modules, executes the user program logic, and then updates the output modules. This cycle is known as the **scan cycle**.

#### 2.2 Memory

*   **Types of Memory:**
    *   **ROM (Read-Only Memory):** Stores the PLC's operating system and firmware, which cannot be changed by the user.
    *   **RAM (Random Access Memory):** Stores the user program, data table (input/output status, timers, counters), and temporary variables. RAM is volatile, meaning its contents are lost when power is removed, unless a battery backup is present.
    *   **EEPROM/Flash Memory:** Used for non-volatile storage of the user program, allowing it to be retained even when power is off. This is often where the program is stored for permanent use.

#### 2.3 Input Modules

*   **Function:** Input modules receive signals from external devices (sensors, switches, pushbuttons) and convert them into logic signals that the CPU can understand. They provide electrical isolation between the field devices and the PLC's internal circuitry.
*   **Types of Inputs:**
    *   **Digital Inputs:** Receive on/off signals (e.g., from pushbuttons, limit switches).
    *   **Analog Inputs:** Receive variable signals (e.g., from temperature sensors, pressure transducers), typically converted into an analog-to-digital (ADC) value.
*   **Example:** A limit switch on a conveyor belt closing when a product reaches a certain point sends a digital "ON" signal to the input module.

#### 2.4 Output Modules

*   **Function:** Output modules receive logic signals from the CPU and convert them into electrical signals that control external devices (actuators, motor starters, indicator lights, solenoids). They also provide electrical isolation.
*   **Types of Outputs:**
    *   **Digital Outputs:** Actuate devices that require an on/off signal (e.g., turning on a motor, activating a solenoid valve).
    *   **Analog Outputs:** Provide a variable voltage or current signal to control devices like variable speed drives or proportional valves.
*   **Example:** The CPU sends an "ON" signal to an output module, which then energizes a relay to start a motor.

#### 2.5 Power Supply

*   **Function:** Converts the incoming AC mains voltage to the DC voltages required by the PLC's internal components (CPU, memory, I/O modules).
*   **Requirements:** Must be stable and capable of supplying sufficient power to all modules.

#### 2.6 Programming Device

*   **Function:** A device (like a laptop or a dedicated programming console) used to create, download, upload, and monitor the PLC's control program.
*   **Interface:** Typically connects to the PLC via a serial port, USB, or Ethernet.

**Diagram:** (Imagine a block diagram here showing CPU, Memory, Input Modules, Output Modules, Power Supply, and Programming Device interconnected)

---

### 3. Input/Output (I/O) Processing

The way a PLC handles input and output signals is fundamental to its operation. This processing happens during the PLC's scan cycle.

#### 3.1 The PLC Scan Cycle

The PLC operates in a continuous loop called the scan cycle. This cycle typically involves three main steps:

1.  **Read Inputs:** The PLC scans all the input modules, reads the status of each input point, and stores this information in the **input image table** (also known as the input memory buffer).
2.  **Execute Program:** The PLC executes the user program (written in ladder logic, function block diagrams, etc.) instruction by instruction. The program logic uses the data from the input image table and internal memory (timers, counters, variables) to determine the state of the output logic.
3.  **Update Outputs:** Based on the results of the program execution, the PLC updates the **output image table** (also known as the output memory buffer) and then sends the corresponding signals to the output modules, which energize or de-energize the connected field devices.

**Important Point:** The entire scan cycle is completed very rapidly, typically in milliseconds. This ensures that the PLC can respond quickly to changes in the system.

#### 3.2 Input Image Table (Input Memory Buffer)

*   **Purpose:** A section of memory within the PLC that holds the current status of all physical input points.
*   **Process:** When the PLC scans the input modules, the state of each physical input (ON or OFF, or an analog value) is copied into its corresponding location in the input image table.
*   **Program Access:** The user program then reads from this input image table to make decisions. The program does not directly read the physical inputs during execution; it reads the values stored in the input image table. This ensures that the program logic uses a consistent "snapshot" of the inputs for a given scan.

#### 3.3 Output Image Table (Output Memory Buffer)

*   **Purpose:** A section of memory within the PLC that holds the desired status of all physical output points.
*   **Process:** When the PLC executes the program, the logic instructions can write desired states (ON or OFF, or analog values) to specific locations in the output image table.
*   **Update:** After the program execution is complete, the PLC copies the contents of the output image table to the physical output modules, thereby controlling the connected actuators.

**Example:**
Imagine a simple circuit: a pushbutton (Input I:0/0) connected to a light (Output O:0/0).

*   **Scan 1:**
    *   PLC reads input I:0/0. If the pushbutton is pressed, the input image table entry for I:0/0 becomes ON.
    *   PLC executes the program. A simple rung might be: `I:0/0 -> O:0/0`. Since I:0/0 is ON, the program sets the output logic for O:0/0 to ON.
    *   PLC updates the output image table for O:0/0 to ON. The output module then energizes the light.

*   **Scan 2:**
    *   PLC reads input I:0/0. If the pushbutton is still pressed, I:0/0 is ON.
    *   PLC executes the program. The rung `I:0/0 -> O:0/0` is still true, so the output logic for O:0/0 remains ON.
    *   PLC updates the output image table for O:0/0 to ON. The light remains on.

*   **Scan 3:**
    *   PLC reads input I:0/0. If the pushbutton is released, the input image table entry for I:0/0 becomes OFF.
    *   PLC executes the program. The rung `I:0/0 -> O:0/0` is now false, so the program sets the output logic for O:0/0 to OFF.
    *   PLC updates the output image table for O:0/0 to OFF. The output module de-energizes the light.

**Important Point:** The separation of input reading and output updating within the scan cycle prevents race conditions and ensures stable control. An output state change within the program will not affect the inputs in the same scan.

#### 3.4 Addressing of I/O

*   **Purpose:** Each input and output point on a PLC has a unique address so that the programming software can refer to it.
*   **Format:** Addressing schemes vary between PLC manufacturers (e.g., Allen-Bradley, Siemens, Omron).
    *   **Example (Allen-Bradley style):**
        *   `I:0/0` or `%I0.0`: Input, Slot 0, Point 0 (e.g., first input terminal)
        *   `O:1/0` or `%Q0.0`: Output, Slot 1, Point 0 (e.g., first output terminal)
        *   `B3:0/0`: Bit in the data table (often for internal relays or flags)
        *   `T4:0`: Timer in Timer File 4, Timer 0
        *   `C5:0`: Counter in Counter File 5, Counter 0
*   **Importance:** Correctly addressing inputs and outputs is crucial for writing functional ladder logic programs.

#### 3.5 Internal Relays (Bits/Flags)

*   **Function:** PLCs have internal memory locations that can be used like relays. They have no physical connection to the outside world but are essential for storing intermediate results, creating interlocks, and implementing complex logic.
*   **Addressing:** Often addressed as bits within a data file (e.g., `B3:0/0`, `R0.0`).
*   **Usage:** Can be turned ON or OFF by program logic and can be used as inputs to other rungs.

#### 3.6 Timers and Counters

*   **Timers:** Used to introduce delays or time-based sequencing in control programs. Common types include:
    *   **TON (Timer On Delay):** Starts timing when its input is energized. When the preset time is reached, the timer's output bit turns ON.
    *   **TOF (Timer Off Delay):** Starts timing when its input de-energizes. When the preset time is reached, the timer's output bit turns OFF.
    *   **RTO (Retentive Timer On):** Similar to TON, but it retains its accumulated time if the input is de-energized.
*   **Counters:** Used to count events (e.g., number of items on a conveyor, number of cycles). Common types include:
    *   **CTU (Count Up):** Increments its accumulated value each time its input transitions from OFF to ON.
    *   **CTD (Count Down):** Decrements its accumulated value each time its input transitions from OFF to ON.
*   **Usage:** These are essential building blocks for implementing most industrial control sequences and are programmed as specific instructions within the PLC.

**Alignment with Course Outcomes:**
*   **CO4 (K3):** This section provides the fundamental knowledge of PLC structure and I/O processing required to understand how PLCs operate and how ladder programs interact with the physical world.

---

### 4. Practical Considerations and Examples

#### 4.1 PLC Hardware Families

*   **Compact PLCs:** Integrate CPU, power supply, and I/O into a single unit. Suitable for smaller applications.
*   **Modular PLCs:** Consist of separate racks and modules (CPU, I/O, power supply, communication) that can be configured as needed. Offer greater flexibility and scalability.

#### 4.2 PLC Programming Languages

While this module focuses on structure and I/O, it's worth noting that PLCs are programmed using specific languages defined by IEC 61131-3:
*   **Ladder Logic (LD):** The most common language, resembling electrical relay schematics.
*   **Function Block Diagram (FBD):** Graphical language using blocks representing functions.
*   **Structured Text (ST):** High-level, text-based language similar to Pascal.
*   **Instruction List (IL):** Low-level, assembly-like language.
*   **Sequential Function Chart (SFC):** Graphical language for designing sequential control.

#### 4.3 Interfacing with Sensors and Actuators

*   **Sensors (Inputs):**
    *   **Digital Sensors:** Pushbuttons, limit switches, proximity sensors (inductive, capacitive, photoelectric), float switches. These typically output a voltage signal (e.g., 24VDC, 120VAC) when activated.
    *   **Analog Sensors:** Potentiometers, temperature sensors (thermocouples, RTDs), pressure transducers, flow meters. These output a variable voltage (e.g., 0-10V) or current (e.g., 4-20mA) proportional to the measured physical quantity. PLCs require analog input modules with Analog-to-Digital Converters (ADCs) to process these signals.
*   **Actuators (Outputs):**
    *   **Digital Actuators:** Solenoid valves, motor starters (contactors), indicator lights, relays. These are controlled by simple ON/OFF signals.
    *   **Analog Actuators:** Variable frequency drives (VFDs) for motor speed control, proportional valves, servo drives. These require analog output signals (voltage or current) from the PLC to control their operation.

**Alignment with Course Outcomes:**
*   **CO1 (K2) & CO2 (K2):** Understanding how PLCs interface with sensors and actuators is crucial for selecting the appropriate I/O modules and field devices based on their characteristics and the application requirements.

#### 4.4 Example Scenario: Simple Conveyor Belt Control

*   **System:** A conveyor belt starts when a "Start" pushbutton is pressed and stops when a "Stop" pushbutton is pressed. An overload sensor on the motor should also stop the conveyor.

*   **PLC Setup:**
    *   **Input Module:**
        *   Input 1 (I:0/0): Start Pushbutton (Normally Open)
        *   Input 2 (I:0/1): Stop Pushbutton (Normally Closed)
        *   Input 3 (I:0/2): Motor Overload Sensor (Normally Closed contact opens on overload)
    *   **Output Module:**
        *   Output 1 (O:0/0): Motor Starter Contactor

*   **Conceptual Ladder Logic (Simplified):**

    ```
    +-------+       +-------+       +-------+       +-------+
    | I:0/0 |-------| |-----|       | O:0/0 |-------| |-----|
    |       |       |       |       |       |       |       |
    +-------+       +-------+       +-------+       +-------+
       Start PB        Latch (Internal Relay)          Motor
                      +-------+       +-------+
                      | B3:0/0|-------| |-----| (Latch)
                      |       |       |       |
                      +-------+       +-------+

                      +-------+       +-------+
                      | I:0/1 |-------|\|-----| (Stop PB - NC)
                      |       |       |       |
                      +-------+       +-------+

                      +-------+       +-------+
                      | I:0/2 |-------|\|-----| (Overload - NC)
                      |       |       |       |
                      +-------+       +-------+
    ```

    *   **Explanation:**
        *   The Start pushbutton (I:0/0) energizes the internal relay (B3:0/0).
        *   The internal relay (B3:0/0) is latched ON by its own contact, so it stays ON even after the Start pushbutton is released.
        *   The Stop pushbutton (I:0/1), which is normally closed, needs to be open to break the latch.
        *   The Overload sensor (I:0/2), also normally closed, needs to be open to break the latch.
        *   The Motor Starter Contactor (O:0/0) is energized whenever the internal relay (B3:0/0) is ON and neither the Stop pushbutton nor the Overload sensor has interrupted the circuit.

**Alignment with Course Outcomes:**
*   **CO4 (K3):** This example illustrates the fundamental concept of using inputs to control outputs via program logic, setting the stage for ladder programming.

---

### 5. Key Concepts to Remember

*   **PLC Scan Cycle:** Read Inputs -> Execute Program -> Update Outputs.
*   **Input Image Table:** Stores the status of physical inputs for the program.
*   **Output Image Table:** Stores the desired states for physical outputs, which are then sent to the output modules.
*   **CPU:** The central processing unit that runs the control program.
*   **Memory:** Stores the operating system, user program, and data.
*   **Input Modules:** Interface sensors and switches to the PLC.
*   **Output Modules:** Interface actuators and control devices to the PLC.
*   **Addressing:** Unique identifiers for each I/O point and internal element.
*   **Internal Relays (Bits):** Memory locations used for logic manipulation.
*   **Timers & Counters:** Crucial for implementing sequential control and event counting.
*   **Electrical Isolation:** Provided by I/O modules to protect PLC circuitry.

---

### 6. Practice Questions

1.  Describe the three main steps of a typical PLC scan cycle.
2.  What is the purpose of the input image table, and why is it important for PLC operation?
3.  Explain the role of the CPU in a PLC.
4.  Differentiate between digital and analog inputs and outputs. Give one example of each.
5.  A PLC is programmed to control a motor. If the motor starter is connected to output O:0/1 and the "Start" button is connected to input I:0/0, how would you describe the typical flow of information within a single PLC scan cycle when the "Start" button is pressed?
6.  What is the function of a power supply module in a PLC system?
7.  Why is electrical isolation important in PLC input and output modules?
8.  What is an internal relay (or bit) in a PLC, and how is it used?

---

### 7. Answers to Practice Questions

1.  **PLC Scan Cycle:**
    *   **Read Inputs:** The PLC scans all input modules and stores the status of each input point in the input image table.
    *   **Execute Program:** The PLC executes the user program logic, using the data from the input image table and internal memory.
    *   **Update Outputs:** The PLC updates the output image table based on the program execution and then sends the signals to the physical output modules.

2.  **Input Image Table:** The input image table is a dedicated section of memory that holds a snapshot of the current state of all physical input points. It is important because it provides the user program with a consistent set of input values for each scan, preventing issues that could arise from reading physical inputs directly during program execution, especially in complex or fast-paced operations.

3.  **Role of the CPU:** The CPU (Central Processing Unit) is the brain of the PLC. It contains the microprocessor, memory, and control logic. It reads the input status, executes the user-written control program, performs calculations, and determines the required output states.

4.  **Digital vs. Analog I/O:**
    *   **Digital Inputs:** Receive discrete ON/OFF signals from devices like pushbuttons or limit switches. Example: A limit switch detecting the presence of an object.
    *   **Digital Outputs:** Send discrete ON/OFF signals to control devices like motor starters or indicator lights. Example: Turning on a solenoid valve.
    *   **Analog Inputs:** Receive continuous, variable signals from sensors like temperature or pressure sensors, typically in the form of voltage (0-10V) or current (4-20mA). Example: A temperature sensor sending a voltage proportional to the temperature.
    *   **Analog Outputs:** Send continuous, variable signals to control devices like variable speed drives or proportional valves. Example: A PLC outputting a 0-10V signal to control the speed of a motor.

5.  **Information Flow for Start Button:** When the "Start" button (I:0/0) is pressed:
    *   During the "Read Inputs" phase, the status of I:0/0 is read and stored as ON in the input image table.
    *   During the "Execute Program" phase, the ladder logic rung that uses I:0/0 as an input will evaluate as true, and the logic will turn ON the internal relay or condition that controls output O:0/1.
    *   During the "Update Outputs" phase, the output image table entry for O:0/1 is set to ON, and the output module then energizes the motor starter contactor, starting the motor.

6.  **Power Supply Module Function:** The power supply module converts the incoming AC mains voltage into the stable DC voltages required by the PLC's CPU, memory, and I/O modules. It also provides any necessary voltage regulation.

7.  **Importance of Electrical Isolation:** Electrical isolation is crucial to protect the sensitive internal circuitry of the PLC from voltage spikes, electrical noise, and potential ground loops originating from the field devices. It also enhances safety by preventing direct electrical connection between the high-voltage industrial environment and the low-voltage PLC electronics. Optocouplers or transformers are commonly used for isolation.

8.  **Internal Relay (Bit):** An internal relay (or bit, flag) is a memory location within the PLC that functions like a relay contact but has no physical connection to the outside world. It is used to store intermediate logic states, act as interlocks, create latches, and facilitate complex logic operations within the program. Its state can be controlled by the program and can then be used as an input to other program instructions.

---

This comprehensive set of notes covers the basic structure and I/O processing of Programmable Logic Controllers (PLCs), aligning with the learning outcomes and course objectives for Module 3 of your Mechatronics course. Remember to refer to your textbooks for more detailed explanations and specific examples relevant to your curriculum.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
