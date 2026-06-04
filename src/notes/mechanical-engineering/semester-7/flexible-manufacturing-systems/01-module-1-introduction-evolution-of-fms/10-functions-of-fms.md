---
title: "functions of FMS"
subject: "FLEXIBLE MANUFACTURING SYSTEMS"
module: "Module 1: Introduction : Evolution of FMS"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464117"
status: "completed"
scrapedAt: "2026-05-20T18:13:17.312Z"
---
# FLEXIBLE MANUFACTURING SYSTEMS

## Module 1: Introduction: Evolution of FMS

### Topic: Functions of FMS

---

### Learning Outcomes Covered:

*   **CO1 (K2):** Understand the basic components, layout configurations, and functions of Flexible Manufacturing Systems (FMS).
*   **CO2 (K1):** Remember the classification of manufacturing cells, features and requirements of unattended machining, and principles of the Toyota Production System (TPS). (While this topic focuses on FMS functions, understanding unattended machining and TPS principles from earlier in the module provides context for *why* FMS functions are designed the way they are.)
*   **CO4 (K2):** Understand the automated material movement, storage systems, and tool management in FMS operations. (These are integral to the realization of FMS functions.)

---

### 1. Introduction to FMS Functions

A Flexible Manufacturing System (FMS) is an integrated manufacturing system that can efficiently and effectively produce a variety of parts with different processing requirements. Its core strength lies in its flexibility, allowing it to adapt to changing product demands and mix without significant retooling or downtime. The functions of an FMS are designed to achieve this flexibility and automation.

**Key Concept:** The primary goal of an FMS is to achieve high levels of **flexibility** and **automation** in production.

**Definition (from Luggen, 1991):** "An FMS is a group of interconnected machines, automated material handling equipment, and computer control systems designed to produce a family of parts."

**Definition (from Maleki, 1991):** "FMS is a manufacturing system designed to efficiently and economically produce a variety of parts in small to medium batch sizes."

---

### 2. Core Functions of a Flexible Manufacturing System

The functions of an FMS can be broadly categorized, encompassing the entire manufacturing process from receiving raw materials to shipping finished goods. These functions are highly interdependent and orchestrated by a sophisticated control system.

#### 2.1. Part Processing

This is the fundamental function where raw materials or semi-finished parts are transformed into finished components.

*   **Machining Operations:** FMS typically employs various machining operations like milling, turning, drilling, boring, grinding, etc.
    *   **Example:** A single FMS could perform milling and drilling on a batch of aluminum workpieces, then automatically transfer them to another station for turning operations.
*   **Assembly:** Some FMS configurations can also incorporate automated assembly operations.
    *   **Example:** An FMS might assemble small electronic components onto a circuit board after machining.
*   **Inspection and Quality Control:** In-line inspection systems integrated within the FMS ensure quality throughout the process.
    *   **Example:** Coordinate Measuring Machines (CMMs) can automatically inspect critical dimensions of a machined part before it moves to the next stage. This aligns with **CO1** (understanding functions).

**Important Point:** The ability to perform a *variety* of operations on different parts within the same system is a hallmark of FMS.

#### 2.2. Material Handling and Transportation

Efficient and automated movement of raw materials, workpieces, tools, and finished parts is crucial for FMS operation.

*   **Automated Guided Vehicles (AGVs):** These self-propelled vehicles transport materials between workstations and storage areas.
    *   **Example:** An AGV picks up a palletized raw material from the staging area and delivers it to a CNC machining center. This relates to **CO4** (automated material movement).
*   **Overhead Conveyors and Robotic Arms:** Used for lighter components or specific transfer needs.
*   **Pallet Systems:** Workpieces are often mounted on standardized pallets for easy handling and precise positioning at workstations.
*   **Storage and Retrieval Systems (AS/RS):** Automated systems for storing raw materials, work-in-progress, and finished goods.
    *   **Example:** An AS/RS crane can retrieve a specific pallet of parts from a rack and deliver it to the FMS entry point. This also aligns with **CO4**.

**Key Concept:** Seamless material flow is essential to avoid bottlenecks and maintain high utilization rates.

#### 2.3. Tool Management

Effective management of cutting tools is critical for maintaining processing efficiency and quality.

*   **Tool Magazines and Tool Changers:** CNC machines within an FMS are equipped with tool magazines that hold a variety of tools. Automated tool changers (ATCs) rapidly swap worn or incorrect tools.
*   **Tool Pre-setting and Monitoring:** Tools are pre-set to accurate dimensions before being loaded into the system. Tool life monitoring systems predict when a tool needs replacement or can detect breakages.
    *   **Example:** A sensor on the machining center detects that a drill bit has broken and signals the FMS control to retrieve a replacement tool from the tool storage. This directly addresses **CO4** (tool management).
*   **Tool Inventory and Replenishment:** The FMS control system manages tool inventory, requesting new tools when necessary.

**Important Point:** Tool management systems prevent production interruptions due to tool wear or breakage.

#### 2.4. System Control and Monitoring

This is the "brain" of the FMS, coordinating all activities and ensuring optimal performance.

*   **Host Computer System:** Manages overall production planning, scheduling, and resource allocation.
*   **Workstation Controllers:** Local controllers for individual machines, receiving instructions from the host and managing machine-specific operations.
*   **Supervisory Control:** Oversees the entire system, routing parts, dispatching AGVs, and managing tool flow.
*   **Real-time Monitoring:** Collects data on machine status, production progress, and potential issues.
*   **Diagnostics and Troubleshooting:** Identifies and often diagnoses problems within the system.
    *   **Example:** If a CNC machine reports an error, the supervisory control system can flag the issue, stop production on that machine if necessary, and alert an operator. This demonstrates the integrated nature of FMS functions.

**Key Concept:** The FMS control system provides **flexibility** by dynamically re-routing parts and operations based on real-time conditions.

#### 2.5. Part Diversification and Batch Production

The ability to handle a variety of parts and switch between them efficiently.

*   **Family of Parts:** FMS are typically designed to produce a group of similar parts that share common processing requirements.
*   **Job Shop Scheduling:** FMS can handle dynamic scheduling, allowing for the efficient production of mixed batches of different parts.
    *   **Example:** An FMS can be programmed to produce 50 units of Part A, then immediately switch to producing 30 units of Part B, without manual intervention for setup changes. This showcases the core **flexibility** function.
*   **Reduced Setup Times:** Fixturing and tooling are designed for quick changeovers, minimizing non-productive time between different part types.

**Connection to CO2:** The principles of unattended machining and the efficiency goals of systems like Toyota Production System (TPS) highlight the need for the robust and automated functions provided by FMS. Unattended machining, a key feature of modern manufacturing, is enabled by the comprehensive functions of an FMS (e.g., automated tool management, robust material handling, and intelligent control).

---

### 3. How Functions Enable Flexibility (Connecting to CO1)

The interconnectedness of these functions is what truly defines an FMS:

*   **Automated Material Handling + Machine Processing:** Allows parts to move between different machines (e.g., milling, turning, drilling) as needed, without manual intervention.
*   **Tool Management + Machine Processing:** Enables a single machine to perform multiple operations by automatically changing tools.
*   **System Control + All Functions:** Orchestrates the entire process, allowing for dynamic scheduling and efficient routing of parts based on demand and system availability.

**Example:** Imagine an FMS tasked with producing two different types of engine blocks. The system control receives orders for both. It directs an AGV to pick up a raw casting for Block A and deliver it to a milling station. After milling, the block is automatically transferred to a drilling station. Simultaneously, another AGV might be delivering a Block B casting to a turning station. The system's ability to manage multiple part types and their distinct processing sequences is a direct result of the coordinated execution of its functions.

---

### 4. Important Points to Remember:

*   **Integration:** The key to FMS is the integration of processing, material handling, tooling, and control systems.
*   **Flexibility:** The primary goal is to adapt to product variety and volume changes with minimal disruption.
*   **Automation:** FMS relies heavily on automation to achieve efficiency and reduce human intervention.
*   **Data-Driven:** Control systems collect and analyze data to optimize operations.
*   **Modularity:** FMS can often be expanded or reconfigured by adding or removing modules.

---

### 5. Practice Questions and Answers

**Question 1:** Which of the following is a primary function of an FMS that enables it to produce a variety of parts?
    a) Manual tool changing
    b) Part diversification and batch production
    c) Fixed automation
    d) Single-part processing

**Answer:** b) Part diversification and batch production. This function directly addresses the system's ability to handle different part types and varying batch sizes.

**Question 2:** What automated system is commonly used for transporting materials between workstations in an FMS?
    a) Forklifts
    b) Conveyor belts
    c) Automated Guided Vehicles (AGVs)
    d) Manual carts

**Answer:** c) Automated Guided Vehicles (AGVs). AGVs are the standard for automated material movement in FMS, as highlighted in **CO4**.

**Question 3:** Explain how automated tool management contributes to the overall flexibility of an FMS. (Relates to CO4 and CO1)

**Answer:** Automated tool management, through features like tool magazines, automatic tool changers (ATCs), and tool monitoring systems, allows a single machine to perform a sequence of operations that require different cutting tools. This eliminates the need for manual tool changes between operations or for different part types, significantly reducing setup times and enabling the system to switch between producing different parts efficiently. This directly contributes to the FMS's ability to adapt to product variety and batch size changes.

**Question 4:** Briefly describe the role of the host computer system in an FMS. (Relates to CO1)

**Answer:** The host computer system acts as the central control unit for the FMS. Its primary roles include overall production planning, scheduling of parts and operations, resource allocation (assigning parts to machines), monitoring system performance, and coordinating the activities of all other subsystems (workstations, material handling, etc.). It ensures that the FMS operates efficiently and adaptively.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 6. References and Further Reading

*   **Shivanand H.K., Benal MM, Koti V (2006):** Likely covers the fundamental components and operational aspects of FMS, including its functions.
*   **William W Luggen (1991):** Provides a good overview of FMS architecture and the role of integrated systems, which is crucial for understanding FMS functions.
*   **Reza A Maleki (1991):** May delve into the strategic aspects of FMS and how its functions support manufacturing objectives like flexibility and cost-effectiveness.
*   **John E Lenz D. Eppinger (1989):** Could offer insights into the design considerations and operational characteristics that define FMS functions.
*   **Mikell P. Groover (2008):** A comprehensive reference for automation and CIM, which will naturally encompass the functions and integration aspects of FMS.

---
---