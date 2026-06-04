---
title: "Architecture – computer based process control system –Centralised, Distributed and Hierarchical."
subject: "PLC AND AUTOMATION"
module: "Module 1: Introduction to computer based control system"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36c85"
status: "completed"
scrapedAt: "2026-05-23T16:44:07.583Z"
---
# PLC AND AUTOMATION: Module 1 - Introduction to Computer-Based Control Systems

## Topic: Architecture – Computer-Based Process Control Systems – Centralized, Distributed, and Hierarchical

---

### Learning Outcomes Covered:

*   **CO1 (K2):** Understand the basic architecture and components of computer-based measurement and control systems.
*   **CO4 (K2):** Understand and apply the architecture and interfaces of Distributed Control Systems in various process control settings.

---

### 1. Introduction to Computer-Based Control Systems

Computer-based control systems have revolutionized process control by replacing older analog and electromechanical systems with sophisticated digital technologies. These systems offer greater precision, flexibility, programmability, and data handling capabilities.

**Key Concepts:**

*   **Process Control:** The regulation of variables (e.g., temperature, pressure, flow, level) in a physical process to achieve a desired outcome.
*   **Computer-Based Control System:** A system that utilizes computers (microprocessors, microcontrollers, PLCs, DCS, PCs) to monitor, process, and manipulate process variables.
*   **Measurement:** The act of quantifying a process variable using sensors.
*   **Control:** The act of manipulating actuators (e.g., valves, pumps, motors) to adjust process variables based on control algorithms.

**Reference:**

*   *Instrument Engineer’s Handbook – Process Control* by B.G. Liptak provides a foundational understanding of process control principles and the evolution of control systems.

---

### 2. Architecture of Computer-Based Process Control Systems

The architecture of a computer-based process control system defines how the various components are organized and interact to achieve the control objective. The primary architectures are Centralized, Distributed, and Hierarchical.

#### 2.1. Centralized Control System Architecture

In a centralized control system, a single, powerful computer (often a mainframe or a powerful minicomputer in older systems, or a single server in modern implementations) is responsible for all aspects of process monitoring and control.

**Key Concepts:**

*   **Single Point of Control:** All processing and decision-making occur at one central location.
*   **Direct I/O Connection:** Sensors and actuators are directly wired to the central computer or through remote I/O modules that report to the central unit.
*   **Simplicity (in concept):** Easier to understand the overall flow of information.
*   **Potential Bottleneck:** The central computer can become overloaded, leading to performance degradation.
*   **Single Point of Failure:** If the central computer fails, the entire process control is lost.
*   **Cost:** Can be cost-effective for smaller, less complex processes.

**Components:**

*   **Central Computer/Server:** Executes control algorithms, data acquisition, and user interface.
*   **Input/Output (I/O) Modules:** Interface with sensors (inputs) and actuators (outputs). Can be local or remote.
*   **Human-Machine Interface (HMI):** Provides operators with a way to monitor the process and interact with the system.
*   **Communication Network:** For remote I/O or HMI communication.

**Example:**

An older batch processing plant where a single mini-computer managed all the recipe execution, temperature control, and valve operations for a series of reactors. If this computer went down, the entire batch operation would halt.

**Diagrammatic Representation (Conceptual):**

```
                               +-----------------+
                               | Central Computer|
                               | (Controller)    |
                               +--------+--------+
                                        |
             +--------------------------+--------------------------+
             |                          |                          |
      +------+------+            +------+------+            +------+------+
      | Input Modules|            | Output Modules|            | HMI Terminal|
      | (Sensors)   |            | (Actuators) |            |            |
      +-------------+            +-------------+            +-------------+
```

**Important Points to Remember:**

*   Centralized systems are susceptible to single points of failure and performance bottlenecks.
*   They are generally simpler to implement for small-scale applications.

**Reference:**

*   *Programmable Logic Controllers – Principles and Applications* by John W. Webb & Ronald A. Reiss discusses basic control system architectures, including centralized approaches, often seen in early PLC applications.

---

#### 2.2. Distributed Control System (DCS) Architecture

A Distributed Control System (DCS) is characterized by decentralizing control functions and intelligence across multiple, interconnected processing units. Control tasks are distributed to specialized controllers located closer to the process equipment they manage.

**Key Concepts:**

*   **Decentralized Control:** Control logic is distributed among multiple controllers, reducing reliance on a single central unit.
*   **Redundancy:** Often incorporates redundancy in hardware and communication pathways to enhance reliability.
*   **Modularity:** Allows for easier expansion and modification of the system.
*   **Improved Performance:** Distributing tasks reduces the load on individual controllers, improving response times.
*   **Fault Tolerance:** Failure of one controller typically affects only a small part of the process.
*   **Integrated Database:** A central database often stores configuration, historical data, and alarms for the entire system.

**Components:**

*   **Process Controllers (or Stations):** Microprocessor-based units responsible for specific process control loops or sections. These are often specialized hardware units.
*   **Operator Stations (HMI):** Workstations used by operators to monitor and control the process. These are typically networked to the controllers.
*   **Engineering Stations:** Used for configuring, programming, and maintaining the DCS.
*   **Communication Network (e.g., Fieldbus, Ethernet):** High-speed, reliable network connecting controllers, operator stations, and engineering stations.
*   **Field Devices:** Sensors and actuators, often connected to controllers via fieldbus or direct wiring.

**Example:**

A large chemical plant where different sections (e.g., distillation column control, reactor temperature control, utility systems control) are managed by dedicated controllers within a DCS. If the controller for the distillation column fails, the reactor control system continues to operate.

**Diagrammatic Representation (Conceptual):**

```
+-----------------+   +-----------------+   +-----------------+
| Operator Station|---| Controller 1    |---| Controller 2    |
+-----------------+   | (Process Area A)|   | (Process Area B)|
                      +--------+--------+   +--------+--------+
                               |                    |
                               | Network Backbone   |
                               |                    |
                      +--------+--------+   +--------+--------+
                      | I/O Modules (A) |---| I/O Modules (B) |
                      | (Sensors/Act.)  |   | (Sensors/Act.)  |
                      +-----------------+   +-----------------+
```

**Important Points to Remember:**

*   DCS architectures are favored for large, complex, and critical processes due to their reliability and modularity.
*   They offer better fault tolerance and performance compared to centralized systems.
*   The initial cost can be higher, but operational benefits often outweigh this.

**Reference:**

*   *Understanding Distributed Processor Systems for Control* by Samel M. Herb is an excellent resource for the principles and implementation of distributed control.
*   *Process Software and Digital Networks* by B.G. Liptak discusses the networking aspects crucial for DCS implementation.
*   *Computer Control of Processes* by M. Chidambaram also covers different control system architectures.

---

#### 2.3. Hierarchical Control System Architecture

A Hierarchical Control System is a multi-layered architecture that organizes control functions into different levels of abstraction and responsibility, from basic field control to high-level supervisory and business management.

**Key Concepts:**

*   **Layered Structure:** Control tasks are divided into distinct levels, each with specific functions and responsibilities.
*   **Information Flow:** Information flows both vertically (up and down the hierarchy) and horizontally (within a level).
*   **Levels of Automation:**
    *   **Level 0 (Field Level):** Sensors and actuators directly interacting with the physical process.
    *   **Level 1 (Basic Control/Supervisory Control):** Controllers (PLCs, DCS controllers) that execute control loops, logic, and sequencing. This level is often referred to as the "control layer."
    *   **Level 2 (Supervisory/Manufacturing Operations Management - MOM):** Systems that monitor and supervise the operations of Level 1 controllers, manage batch execution, optimize performance, and provide advanced alarming. Often includes HMIs and SCADA systems.
    *   **Level 3 (Manufacturing Execution Systems - MES):** Manages plant-wide production scheduling, resource management, quality control, and maintenance.
    *   **Level 4 (Business Planning and Logistics):** Enterprise Resource Planning (ERP) systems that handle business-level planning, finance, sales, and customer relationship management.
*   **Scalability:** Allows for the integration of systems at different levels as needed.
*   **Data Integration:** Facilitates the flow of data from the plant floor to business management systems.

**Components:**

*   **Field Devices (Level 0):** Sensors, actuators.
*   **Controllers (PLCs, DCS Controllers) (Level 1):** Perform real-time control.
*   **SCADA Systems/HMI Servers (Level 2):** Data acquisition, supervisory control, alarming, historical trending.
*   **MES Servers (Level 3):** Production scheduling, tracking, quality.
*   **ERP Servers (Level 4):** Business planning, finance.
*   **Communication Networks:** Connecting different levels, often using various protocols (e.g., fieldbuses, industrial Ethernet, corporate LAN).

**Example:**

In a food processing plant:

*   **Level 0:** Temperature sensors in a pasteurizer, control valves for steam.
*   **Level 1:** PLCs controlling the pasteurizer's heating and cooling cycles based on temperature feedback.
*   **Level 2:** A SCADA system monitoring multiple pasteurizers, displaying trends, and allowing operators to adjust setpoints or initiate cleaning cycles.
*   **Level 3:** MES software tracking batch recipes, production yields, and quality parameters for each batch.
*   **Level 4:** ERP system managing inventory of ingredients and finished products, sales orders, and production planning for the entire plant.

**Diagrammatic Representation (Conceptual - ISA-95 Model Inspired):**

```
+------------------------------------+
| Level 4: Business Planning (ERP) |
+------------------------------------+
               ^
               | (Integration Layer)
+------------------------------------+
| Level 3: Manufacturing Execution |
|             (MES)                  |
+------------------------------------+
               ^
               | (Supervisory Control)
+------------------------------------+
| Level 2: Manufacturing Operations  |
|        (SCADA / HMI)             |
+------------------------------------+
               ^
               | (Basic Control)
+------------------------------------+
| Level 1: Basic Control / Process |
|      (PLCs / DCS Controllers)    |
+------------------------------------+
               ^
               | (Direct Interaction)
+------------------------------------+
| Level 0: Field Devices             |
|    (Sensors / Actuators)         |
+------------------------------------+
```

**Important Points to Remember:**

*   Hierarchical architectures provide a structured approach to managing complex industrial operations.
*   They enable seamless integration of plant floor data with business systems.
*   Each level adds value through different forms of intelligence and control.

**Reference:**

*   *Computer Control of Processes* by M. Chidambaram implicitly discusses hierarchical structures when explaining the integration of different control layers.
*   The concept is also implicitly covered in discussions of SCADA and MES systems in broader automation literature.

---

### 3. Comparison of Architectures

| Feature         | Centralized Control                               | Distributed Control (DCS)                                   | Hierarchical Control                                       |
| :-------------- | :------------------------------------------------ | :---------------------------------------------------------- | :--------------------------------------------------------- |
| **Control**     | Single computer manages all tasks.                | Control tasks distributed among multiple controllers.       | Control and management functions organized in layers.      |
| **Reliability** | Low (single point of failure).                    | High (fault tolerance through redundancy and modularity).   | High (faults often isolated to specific layers/modules).   |
| **Scalability** | Limited.                                          | High (easy to add new controllers/modules).                 | High (can integrate systems at various levels).            |
| **Performance** | Can be a bottleneck if overloaded.                | Improved performance due to task distribution.              | Optimized performance at each level.                       |
| **Complexity**  | Conceptually simple, but can become complex with scale. | Moderate to high complexity in design and implementation. | High complexity due to multiple layers and integrations.   |
| **Cost**        | Lower for small systems, higher for large/complex. | Higher initial cost, but often lower total cost of ownership. | Varies significantly based on the number of layers integrated. |
| **Application** | Small, simple processes.                          | Large, complex, critical processes (chemical, power).     | Integrated plant-wide and enterprise-wide automation.      |

---

### 4. Connecting to Learning Outcomes & Course Outcomes

*   **CO1 (K2): Understand the basic architecture and components of computer-based measurement and control systems.**
    *   This entire topic directly addresses CO1 by explaining the fundamental ways computer-based control systems are structured (centralized, distributed, hierarchical) and the components associated with each.
*   **CO4 (K2): Understand and apply the architecture and interfaces of Distributed Control Systems in various process control settings.**
    *   The detailed explanation of DCS architecture, its components, and advantages directly supports this outcome. Understanding how DCS distributes control is key to its application.

---

### 5. Practice Questions and Exercises

**Question 1:**

Describe the main characteristics and a significant disadvantage of a centralized control system architecture.

**Answer 1:**

*   **Characteristics:** A single computer handles all process monitoring and control functions. Input/output signals are typically routed to this central unit.
*   **Disadvantage:** It suffers from a single point of failure. If the central computer fails, the entire process is halted. It can also become a performance bottleneck if the process demands are high.

**Question 2:**

In which type of process control architecture are control functions distributed across multiple processing units located closer to the process equipment they manage, and what is a key advantage of this approach?

**Answer 2:**

This describes a **Distributed Control System (DCS)** architecture. A key advantage is **improved reliability and fault tolerance**. If one controller fails, it typically only affects a specific part of the process, not the entire plant, due to the distributed nature and often incorporated redundancy.

**Question 3:**

Explain the concept of a hierarchical control system and give an example of at least three distinct levels.

**Answer 3:**

A hierarchical control system organizes control and management functions into a layered structure, with each layer having specific responsibilities. Information and control signals flow vertically between layers.

*   **Level 0 (Field Level):** Sensors (e.g., temperature, pressure) and actuators (e.g., valves, motors) directly interact with the physical process.
*   **Level 1 (Basic Control):** Controllers (PLCs or DCS controllers) execute real-time control loops, logic, and sequencing for individual equipment or small process units.
*   **Level 2 (Supervisory Control):** Systems like SCADA or HMIs monitor and manage the Level 1 controllers, providing process visualization, alarming, and operator interaction.
*   **(Optional additional levels):** Level 3 (MES - Manufacturing Execution Systems) for production scheduling, Level 4 (ERP - Enterprise Resource Planning) for business management.

**Question 4:**

Compare and contrast Centralized and Distributed control systems in terms of reliability and scalability.

**Answer 4:**

*   **Reliability:**
    *   **Centralized:** Generally less reliable due to a single point of failure. A failure in the central computer can shut down the entire process.
    *   **Distributed:** More reliable. Control functions are spread out, and often redundancy is built-in. A failure in one controller usually only impacts a small section of the process.
*   **Scalability:**
    *   **Centralized:** Limited scalability. Adding more control loops or functions can quickly overload the central computer.
    *   **Distributed:** Highly scalable. New controllers and modules can be added to the network as needed, allowing the system to grow with the process.

---

### 6. Important Points to Remember

*   The choice of control system architecture (Centralized, Distributed, Hierarchical) depends heavily on the complexity, criticality, and scale of the process.
*   **Centralized:** Simple, but vulnerable to single points of failure and bottlenecks.
*   **Distributed:** Robust, reliable, and scalable, ideal for complex and critical applications.
*   **Hierarchical:** Provides a structured framework for integrating plant operations with business systems, enabling data flow from the shop floor to enterprise management.
*   Understanding these architectures is fundamental to designing, implementing, and troubleshooting modern automation systems.

---

This concludes the study notes for the architecture of computer-based process control systems. Ensure you can articulate the differences, advantages, and disadvantages of each to answer exam questions effectively.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
