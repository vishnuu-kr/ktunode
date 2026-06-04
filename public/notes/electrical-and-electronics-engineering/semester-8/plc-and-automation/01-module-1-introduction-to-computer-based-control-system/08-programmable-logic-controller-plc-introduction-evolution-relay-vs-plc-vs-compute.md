---
title: "Programmable logic Controller (PLC ): Introduction, Evolution, Relay VS PLC VS Computer"
subject: "PLC AND AUTOMATION"
module: "Module 1: Introduction to computer based control system"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36c89"
status: "completed"
scrapedAt: "2026-05-23T16:44:13.615Z"
---
# PLC AND AUTOMATION - Module 1: Introduction to Computer-Based Control Systems

## Topic: Programmable Logic Controller (PLC): Introduction, Evolution, Relay vs. PLC vs. Computer

---

### 1. Introduction to Programmable Logic Controllers (PLC)

**Definition:**
A **Programmable Logic Controller (PLC)** is a ruggedized industrial digital computer adapted for the control of manufacturing processes, such as assembly lines, robotic devices, or any activity that requires high reliability, process control, and ease of programming and process fault diagnosis.

**Key Concepts:**
*   **Industrial Automation:** The use of technology to control and monitor industrial processes, reducing human intervention and improving efficiency, quality, and safety.
*   **Control System:** A system that manages, commands, directs, or regulates the behavior of other systems or devices.
*   **Real-time Operation:** PLCs are designed to respond to inputs and produce outputs within a very short and deterministic time frame, crucial for controlling dynamic industrial processes.
*   **Ruggedized:** Designed to withstand harsh industrial environments (vibration, temperature extremes, electrical noise, dust, moisture).
*   **Modularity:** PLCs are often designed with modular components, allowing for easy expansion and customization to suit specific application needs.

**Purpose of PLCs:**
*   To automate repetitive tasks in manufacturing and industrial processes.
*   To replace hard-wired relay logic systems, offering greater flexibility and programmability.
*   To provide a robust and reliable solution for controlling machinery and processes in demanding environments.
*   To facilitate data acquisition and communication for monitoring and analysis.

**Basic PLC Architecture (Conceptual):**
While detailed architecture is covered in later modules, a foundational understanding includes:
*   **Central Processing Unit (CPU):** The "brain" of the PLC, executing the control program and processing inputs/outputs.
*   **Memory:** Stores the operating system, user program, and data.
*   **Input Modules:** Interface with sensors and field devices (e.g., switches, temperature sensors) to convert real-world signals into digital data the PLC can understand.
*   **Output Modules:** Interface with actuators and devices (e.g., motors, valves, lights) to convert digital control signals from the PLC into physical actions.
*   **Power Supply:** Provides the necessary power to the PLC components.
*   **Programming Device:** A computer or dedicated device used to write, load, and monitor the PLC program.

**References:**
*   *Programmable Logic Controllers – Principles and Applications* by Webb & Reiss (5th ed.) provides a thorough introduction to the fundamental concepts of PLCs.
*   *Instrument Engineer’s Handbook – Process Control* by Liptak covers the broader context of control systems in which PLCs operate.

---

### 2. Evolution of Control Systems Leading to PLCs

**From Hard-wired Relay Logic to PLCs:**

*   **Early Control Systems (Mechanical & Pneumatic Relays):**
    *   **Description:** Used mechanical linkages and pneumatic signals for logic operations. Limited in complexity and prone to wear and tear.
    *   **Limitations:** Cumbersome wiring, difficult to modify logic, large physical footprint, sensitive to dust and vibration, limited diagnostic capabilities.
*   **Electromechanical Relay Logic:**
    *   **Description:** The predominant method for industrial control for several decades. Relays are electrically operated switches. Logic functions (AND, OR, NOT) are implemented by wiring relays in specific configurations.
    *   **Advantages:** Relatively simple to understand and troubleshoot for basic circuits.
    *   **Limitations:**
        *   **Extensive Wiring:** Complex logic required a vast amount of wiring, increasing installation time and cost, and introducing potential points of failure.
        *   **Contact Wear:** Mechanical contacts in relays wear out over time, leading to unreliable operation and requiring frequent maintenance.
        *   **Space Requirements:** Relay panels could be very large and bulky.
        *   **Flexibility:** Modifications to the control logic involved rewiring, a time-consuming and error-prone process.
        *   **Speed:** Limited by the mechanical switching speed of relays.
        *   **Diagnostics:** Troubleshooting was often done by physically tracing wires.

    *   **Example:** To implement a simple "AND" logic for two inputs (e.g., two safety gates must be closed to start a machine), two relays would be wired in series.

*   **Transistor-Based Logic (Early Solid-State):**
    *   **Description:** Used transistors to perform logic functions. Offered faster switching speeds and no moving parts compared to relays.
    *   **Limitations:** Still often hard-wired logic, less flexible than later programmable systems, and required specialized knowledge for design and maintenance.

*   **Rise of the PLC (Mid-1960s onwards):**
    *   **Motivation:** The automotive industry (specifically General Motors in 1968) sought a more flexible and easier-to-maintain replacement for hard-wired relay systems. This led to the development of the first PLCs.
    *   **Key Innovation:** Introduction of a programmable memory that stored the control logic, allowing for changes without rewiring.
    *   **Early PLCs:** Had limited I/O, basic programming languages (often ladder logic), and a focus on replacing relay logic.

**References:**
*   Webb & Reiss (5th ed.) extensively details the transition from relay logic to PLCs.
*   *Computer Control of Processes* by Chidambaram provides context on the evolution of control systems with digital technology.

---

### 3. Relay vs. PLC vs. Computer

This section compares the characteristics of these three control system approaches.

#### 3.1 Relay Logic vs. PLC

| Feature         | Relay Logic                                   | Programmable Logic Controller (PLC)                        |
| :-------------- | :-------------------------------------------- | :--------------------------------------------------------- |
| **Logic Implementation** | Hard-wired by physical connections between relays. | Stored in memory as software program (e.g., Ladder Logic). |
| **Flexibility** | Low; requires rewiring for logic changes.     | High; logic changes made via software, no rewiring.         |
| **Wiring**      | Extensive, complex, and labor-intensive.      | Minimal; primarily for I/O connections and power.         |
| **Space**       | Requires large control panels.                | Compact; can be mounted in smaller enclosures.             |
| **Troubleshooting** | Manual tracing of physical wires; time-consuming. | Software diagnostics, status indicators, scan lists.        |
| **Speed**       | Limited by mechanical switching speed.        | Faster; electronic switching.                              |
| **Cost**        | High for complex logic (wiring, labor).        | Higher initial hardware cost, lower for complex logic.     |
| **Reliability** | Prone to contact wear, arcing, and loose connections. | High; no moving parts in logic processing, solid-state.     |
| **Expandability** | Difficult; requires adding more hardware and wiring. | Easy; add I/O modules as needed, within PLC capacity.      |
| **Diagnostics** | Limited to checking physical connections and relay states. | Built-in diagnostics, error reporting, monitoring tools.   |
| **Data Handling**| Very limited or none.                         | Can perform arithmetic, data manipulation, logging.        |
| **Communication**| None.                                         | Can communicate with other devices, HMIs, SCADA systems. |

**Example Scenario:** Imagine a machine with 20 inputs and 10 outputs, requiring sequential operations.

*   **Relay Logic:** This would require a panel with potentially hundreds of relays, a very large amount of wiring, and significant design and installation effort. Any change to the sequence would necessitate a complete rewiring.
*   **PLC:** The same control can be achieved with a PLC having 20 input points and 10 output points. The sequence is programmed into the PLC's memory. Changing the sequence is as simple as reprogramming the PLC.

#### 3.2 PLC vs. Computer (General Purpose Computer)

While PLCs are a type of computer, they are specialized for industrial control. General-purpose computers (like desktop PCs) are not inherently designed for direct industrial control without significant modifications or additions.

| Feature         | Programmable Logic Controller (PLC)            | General Purpose Computer (PC)                          |
| :-------------- | :--------------------------------------------- | :----------------------------------------------------- |
| **Purpose**     | Industrial automation and process control.     | Wide range of tasks: office work, multimedia, general computing. |
| **Environment** | Ruggedized for harsh industrial conditions (vibration, temperature, electrical noise). | Typically designed for office environments; requires protection for industrial use. |
| **Reliability** | High MTBF (Mean Time Between Failures) due to robust design and specialized components. | Varies; components are less inherently ruggedized for industrial demands. |
| **Real-time**   | Designed for deterministic, real-time operation. | Can run real-time operating systems (RTOS), but standard OS may have non-deterministic behavior. |
| **Programming** | Primarily Ladder Logic, Structured Text, Function Block Diagram (IEC 61131-3 standards). | C++, Java, Python, etc. with specialized industrial libraries. |
| **I/O Handling**| Dedicated, robust input/output modules for interfacing with industrial sensors and actuators. | Requires specialized interface cards or industrial I/O systems. |
| **Scan Cycle**  | Executed in a predictable scan cycle (read inputs, execute logic, update outputs). | Task scheduling is managed by the OS, potentially less predictable for critical control. |
| **Cost**        | Initial cost can be higher for comparable processing power, but total system cost is often lower for automation. | Lower initial cost for raw computing power, but high cost for industrial I/O and ruggedization. |
| **Maintenance** | Designed for low maintenance, modular replacement. | May require more frequent maintenance or replacement of non-industrial grade components. |
| **Safety**      | Often incorporate safety-rated features for critical applications. | Safety features would need to be explicitly designed and implemented. |

**When to choose PLC over PC:**
*   Applications requiring high reliability in harsh environments.
*   Tasks demanding deterministic real-time control.
*   When ease of programming for industrial tasks (like ladder logic) is paramount.
*   For simple to moderately complex discrete control tasks.

**When a PC might be considered (often in conjunction with PLCs or specialized industrial PCs):**
*   Complex data acquisition, advanced analytics, and visualization.
*   Integration with enterprise resource planning (ERP) systems.
*   Sophisticated human-machine interface (HMI) applications.
*   Machine vision or complex motion control requiring significant processing power.
*   Running SCADA (Supervisory Control and Data Acquisition) systems.

**References:**
*   *Understanding Distributed Processor Systems for Control* by Herb discusses the evolution and role of different computing architectures in control systems.
*   Webb & Reiss (5th ed.) also provides comparisons and decision-making criteria between PLCs and other control methods.

---

### Learning Outcomes Addressed:

*   **CO1 (Knowledge Level: K2):** Understand the basic architecture and components of computer-based measurement and control systems.
    *   This section introduces PLCs as computer-based control systems and touches upon their basic components (CPU, memory, I/O) and their function in industrial automation. The comparison with relay logic and general computers further clarifies the nature of computer-based control.
*   **CO2 (Knowledge Level: K2):** Understand the human-machine interfaces (HMI) and learn the hardware and interfacing techniques needed to integrate computer systems with process controls.
    *   While HMI and interfacing are detailed in later modules, this section implicitly acknowledges the need for programming devices (which are a form of HMI) and communication capabilities for PLCs, setting the stage for CO2.
*   **CO3 (Knowledge Level: K5):** Create and troubleshoot PLC programs using ladder logic for various applications.
    *   This section's historical context of replacing relay logic with programmable logic (like ladder logic) directly supports the understanding required to eventually create and troubleshoot PLC programs. Understanding the *why* behind PLCs is foundational for learning the *how*.
*   **CO4 (Knowledge Level: K2):** Understand and apply the architecture and interfaces of Distributed Control Systems in various process control settings.
    *   While not directly about DCS, understanding the evolution to PLCs highlights the shift from centralized, complex systems to more modular and distributed intelligence, which is a precursor to understanding DCS.

---

### Important Points to Remember:

*   **PLC = Industrial Computer:** PLCs are specialized computers for control, designed for ruggedness and real-time operation.
*   **Flexibility is Key:** The primary advantage of PLCs over relay logic is their programmability, allowing for easy modification of control logic without rewiring.
*   **Scan Cycle:** PLCs operate on a deterministic scan cycle (Read Inputs -> Execute Program -> Update Outputs).
*   **I/O Modules are Crucial:** PLCs interface with the real world through dedicated input and output modules.
*   **Environment Matters:** PLCs are built to withstand industrial environments that would damage standard computers.

---

### Practice Questions:

**Question 1:**
What was the primary motivation for the development of the Programmable Logic Controller (PLC)?
**(a)** To reduce the cost of electrical components.
**(b)** To replace complex and difficult-to-maintain hard-wired relay control systems.
**(c)** To provide faster processing for office applications.
**(d)** To enable advanced graphical user interfaces for industrial processes.

**Answer:** (b) To replace complex and difficult-to-maintain hard-wired relay control systems.

**Question 2:**
List three key advantages of using a PLC compared to traditional relay logic for industrial control.

**Answer:**
1.  **Flexibility/Programmability:** Logic can be changed via software without rewiring.
2.  **Reduced Wiring:** Significantly less wiring is required for complex logic.
3.  **Troubleshooting & Diagnostics:** Easier to troubleshoot using software and built-in diagnostics.
4.  **Space Saving:** PLCs are more compact than large relay panels.
5.  **Reliability:** No moving parts in the logic processing, fewer points of failure.

**Question 3:**
Explain one major difference in terms of environmental design and reliability between a typical PLC and a standard desktop computer used for office work.

**Answer:**
A PLC is **ruggedized** to operate reliably in harsh industrial environments (e.g., extreme temperatures, vibration, electrical noise, dust). Standard desktop computers are designed for controlled office environments and would likely fail or perform unreliably under such industrial conditions. PLCs are built with higher-quality, more robust components and often have features like conformal coating and specialized power supplies to ensure high Mean Time Between Failures (MTBF).

**Question 4:**
Which type of control system is characterized by extensive physical wiring to implement logic functions, leading to large panels and difficulty in modifying sequences?
**(a)** PLC
**(b)** General Purpose Computer
**(c)** Relay Logic
**(d)** Distributed Control System (DCS)

**Answer:** (c) Relay Logic

**Question 5:**
A PLC is essentially a specialized type of __________ designed for industrial applications.
**(a)** Router
**(b)** Personal Computer
**(c)** Microcontroller
**(d)** Digital Computer

**Answer:** (d) Digital Computer (While it contains a microcontroller, "Digital Computer" is a broader and more accurate description in this context of comparison).

---

This concludes the introduction to PLCs, their evolution, and a comparison with relay logic and general computers. This forms the foundational understanding for further topics in PLC and Automation.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
