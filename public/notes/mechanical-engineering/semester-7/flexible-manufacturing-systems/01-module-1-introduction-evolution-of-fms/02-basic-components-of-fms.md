---
title: "Basic Components of FMS"
subject: "FLEXIBLE MANUFACTURING SYSTEMS"
module: "Module 1: Introduction : Evolution of FMS"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf480446410f"
status: "completed"
scrapedAt: "2026-05-20T18:13:11.907Z"
---
# Flexible Manufacturing Systems (FMS)

## Module 1: Introduction: Evolution of FMS

### Topic: Basic Components of FMS

---

### Learning Outcomes:

*   Understand the basic components, layout configurations, and functions of Flexible Manufacturing Systems (FMS). (CO1, K2)
*   Remember the classification of manufacturing cells, features and requirements of unattended machining, and principles of the Toyota Production System (TPS). (CO2, K1) - *While CO2 is mentioned, the focus of this topic is basic components. We will touch upon its relevance where applicable.*
*   Apply the knowledge of CAD and CAM considerations in planning and implementing FMS. (CO3, K3) - *This is a broader outcome and will be covered more in later modules, but we can briefly acknowledge its connection.*
*   Understand the automated material movement, storage systems, and tool management in FMS operations. (CO4, K2) - *These are integral parts of the basic components and will be covered in detail.*

---

### Introduction to FMS and its Components

A Flexible Manufacturing System (FMS) is a highly automated production facility that can adapt to changes in product mix and/or product volume without significant loss of time or efficiency. It represents a significant step towards computer-integrated manufacturing (CIM). Unlike traditional transfer lines or dedicated automated systems, FMS are designed to produce a variety of parts on the same system.

**(Shivanand, Benal, Koti, 2006; Luggen, 1991; Maleki, 1991; Lenz & Eppinger, 1989)**

The core idea behind FMS is to achieve the economies of scale of mass production with the flexibility of job-shop manufacturing. This is achieved by integrating a group of automated manufacturing and material handling technologies with a central computer control system.

---

### Key Components of a Flexible Manufacturing System (FMS):

An FMS can be broken down into several key, interconnected components. The efficient integration and operation of these components are crucial for the overall success of the system.

#### 1. Workstations / Manufacturing Machines:

These are the core processing units of the FMS. They are typically automated and capable of performing various manufacturing operations such as:

*   **CNC Machining Centers:** The most common type, capable of milling, drilling, boring, tapping, and turning operations. They are equipped with Automatic Tool Changers (ATCs) to switch between different tools.
    *   *Example:* A 5-axis CNC machining center that can perform complex contouring and drilling on aerospace components.
*   **Turning Centers:** Primarily used for cylindrical parts, capable of turning, facing, grooving, and threading.
*   **Grinding Machines:** For precision finishing operations.
*   **Inspection Machines:** Automated Coordinate Measuring Machines (CMMs) or vision systems for in-process quality control.
*   **Assembly Stations:** Robotic assembly cells can be integrated for final assembly.

**(Shivanand, Benal, Koti, 2006; Luggen, 1991)**

**Important Point:** The flexibility of workstations is enhanced by their ability to perform multiple operations and to be reprogrammed for different part geometries.

#### 2. Material Handling and Storage System:

This system is responsible for moving raw materials, work-in-progress (WIP), and finished parts between workstations, storage areas, and loading/unloading stations. This component is vital for achieving unattended operation and smooth flow.

*   **Automated Guided Vehicles (AGVs):** Self-propelled, driverless vehicles that follow predefined paths (often magnetic strips or optical guides) to transport parts and materials.
    *   *Types:* Pallet trucks, unit load carriers, tow vehicles.
    *   *Example:* An AGV transporting a fixture loaded with a workpiece from the staging area to a CNC machining center.
*   **Overhead Conveyors / Cranes:** Used for heavier loads or when floor space is limited.
*   **Robotic Arms:** Can be used for transferring parts within a cell or between adjacent machines.
*   **Automated Storage and Retrieval Systems (AS/RS):**
    *   **Storage Racks/Modules:** Designed to hold raw materials, fixtures, tools, and finished parts.
    *   **Stacker Cranes/Retrieval Machines:** Automated machines that move horizontally and vertically to pick and place items from storage.
    *   *Example:* An AS/RS storing pallets of raw material, ready to be delivered to the FMS by an AGV.
*   **Transfer Lines/Conveyors:** In some simpler FMS configurations, fixed conveyors might be used for part movement.

**(Luggen, 1991; Maleki, 1991; Groover, 2008; CO4, K2)**

**Important Point:** The material handling system must be flexible enough to accommodate different part sizes, weights, and routing requirements.

#### 3. Central Computer Control System:

This is the "brain" of the FMS, orchestrating the activities of all other components. It plays a critical role in planning, scheduling, controlling, and monitoring the entire production process.

*   **Host Computer:** Manages overall production planning, scheduling, and data management. It often interfaces with higher-level Manufacturing Execution Systems (MES) or Enterprise Resource Planning (ERP) systems.
*   **System Controller:** Manages the real-time operations of the FMS, including dispatching AGVs, scheduling workstations, and tracking parts.
*   **Machine Controllers:** Dedicated controllers for individual workstations (e.g., CNC controllers) that execute machining instructions and report status.
*   **Traffic Control System:** Manages the movement of AGVs and other material handling devices to prevent collisions and optimize flow.
*   **Work-in-Progress (WIP) Tracking:** Monitors the location and status of each part within the system.
*   **Tool Management System:** Tracks tool usage, predicts wear, and schedules tool changes.

**(Shivanand, Benal, Koti, 2006; Maleki, 1991; Lenz & Eppinger, 1989; CO1, K2)**

**Important Point:** The effectiveness of the FMS heavily relies on the sophistication and reliability of its control system.

#### 4. Tool Management System:

This system ensures that the correct tools are available at the right workstation at the right time. It's crucial for maintaining the flexibility and efficiency of automated machining centers.

*   **Automatic Tool Changers (ATCs):** On CNC machines, these systems automatically load and unload tools from the spindle.
*   **Tool Magazines/Carousels:** Storage units that hold a variety of tools for an ATC.
*   **Tool Presetters:** Machines used to measure and set tool lengths and diameters before they are loaded into the FMS.
*   **Tool Monitoring:** Systems that track tool life, usage, and wear to predict failure and schedule replacements.
*   **Tool Storage and Handling:** Dedicated areas or systems for storing, managing, and delivering tools to the FMS.

**(Luggen, 1991; Maleki, 1991; CO4, K2)**

**Example:** A tool management system might detect that a drill bit has reached 80% of its expected life and schedule its replacement during the next planned maintenance downtime, or even automatically trigger a tool change if a spare is available.

#### 5. Fixturing and Workholding:

Proper fixturing is essential for accurately locating and holding workpieces at workstations. FMS often utilize standardized or modular fixturing systems.

*   **Standardized Pallets:** Workpieces are typically mounted on standardized pallets, which are then loaded onto machines. These pallets have built-in locating features for consistent positioning.
*   **Modular Fixturing:** Systems using interchangeable components (blocks, clamps, risers) to quickly create custom fixtures.
*   **Automatic Pallet Changers:** Machines can automatically swap pallets to reduce setup time.

**(Shivanand, Benal, Koti, 2006; Luggen, 1991)**

**Important Point:** The design of fixtures and pallets significantly impacts the setup time and the range of parts that can be processed by the FMS.

#### 6. Software and Communication Networks:

The integration of all hardware components is enabled by sophisticated software and reliable communication infrastructure.

*   **Manufacturing Process Planning Software:** Determines the sequence of operations for each part.
*   **System Scheduling Software:** Optimizes the allocation of parts and resources to workstations.
*   **Machine Control Software:** Executes NC programs and manages machine operations.
*   **Material Handling Control Software:** Directs the movement of AGVs and AS/RS.
*   **Local Area Networks (LANs):** High-speed communication networks connecting all components of the FMS.

**(Maleki, 1991; Lenz & Eppinger, 1989; CO1, K2)**

---

### Relationship with Other Concepts (CO2 & CO3):

*   **CO2 - Classification of Manufacturing Cells:** While this topic focuses on FMS as a whole, FMS are often composed of multiple flexible manufacturing cells. Understanding the classification of cells (e.g., part-family cells, product-oriented cells) helps in designing effective FMS. The features and requirements of unattended machining are directly addressed by the automation and control systems within an FMS. Principles of the Toyota Production System (TPS), such as Just-In-Time (JIT) and Jidoka, are often underlying philosophies influencing FMS design for efficiency and quality.
*   **CO3 - CAD/CAM Considerations:** The design and manufacturing of parts to be processed by an FMS are heavily influenced by CAD/CAM. CAD data is used to generate machining instructions (CAM). For FMS to be truly flexible, parts should be designed with DFM (Design for Manufacturing) principles in mind, considering standardized features, ease of fixturing, and minimal setup changes. This directly relates to the planning and implementation of FMS.

---

### Examples of FMS Configurations:

*   **FMS for Shaft-type Parts:** Typically involves several CNC lathes and machining centers, an AGV system for part transfer, and an AS/RS for raw material and finished parts storage.
*   **FMS for Gear-type Parts:** Might include CNC milling machines, gear hobbing machines, grinding machines, and inspection stations, all integrated with automated material handling.

---

### Practice Questions:

1.  **Identify and briefly describe the five main components of a Flexible Manufacturing System (FMS).**
    *   *Answer:* The five main components are: Workstations (manufacturing machines), Material Handling and Storage System, Central Computer Control System, Tool Management System, and Fixturing/Workholding.
        *   **Workstations:** Automated machines (e.g., CNC lathes, machining centers) capable of performing various operations.
        *   **Material Handling & Storage:** AGVs, AS/RS, conveyors for moving parts and materials.
        *   **Central Computer Control:** The "brain" managing planning, scheduling, and real-time operations.
        *   **Tool Management:** Systems for tool selection, loading, and monitoring (ATCs, magazines, presetters).
        *   **Fixturing/Workholding:** Pallets and fixtures for accurate part positioning.

2.  **What is the primary role of the Central Computer Control System in an FMS?**
    *   *Answer:* The primary role is to manage, coordinate, and control all operations within the FMS, including production planning, scheduling of workstations, dispatching of material handling equipment, and monitoring overall system performance.

3.  **Why is an effective Tool Management System crucial for the flexibility of an FMS?**
    *   *Answer:* It ensures that the correct tools are available at the right workstation when needed for various parts. This minimizes machine downtime for tool changes and allows for efficient processing of different part types without manual intervention, thus maintaining flexibility.

4.  **Give an example of how an AGV might be used in an FMS.**
    *   *Answer:* An AGV can transport a pallet loaded with a raw workpiece from an automated storage and retrieval system (AS/RS) to a CNC machining center for processing. After machining, it can take the finished part to an inspection station or to another workstation for further operations.

5.  **How do CAD/CAM considerations influence the design and operation of an FMS? (Relate to CO3)**
    *   *Answer:* CAD data is used to generate the NC programs for machining. CAM software is essential for translating the part design into executable machine instructions. For an FMS to be effective, parts should be designed with features that facilitate automated machining and fixturing, often guided by Design for Manufacturability (DFM) principles derived from CAD/CAM analysis. This ensures that the intended flexibility of the FMS can be realized.

---

### Important Points to Remember:

*   **Integration is Key:** The success of an FMS depends on the seamless integration of all its components.
*   **Flexibility:** The ability to produce a variety of parts with minimal setup changes is the defining characteristic.
*   **Automation:** FMS relies heavily on automated machines, material handling, and control systems.
*   **Data-Driven:** The central control system relies on accurate data for planning, scheduling, and execution.
*   **Costly but Efficient:** FMS represent a significant capital investment but offer high efficiency, reduced lead times, and improved quality when implemented correctly.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### References Used:

*   Shivanand H.K., Benal MM, Koti V (New age international (P) Limited, New Delhi, 2006) - *Flexible Manufacturing System*
*   William W Luggen (Prentice Hall of Inc New Jersey, 1991) - *Flexible Manufacturing Cells and System*
*   Reza A Maleki (Prentice Hall of Inc New Jersey, 1991) - *Flexible Manufacturing System*
*   John E Lenz D. Eppinger (marcel Dekker Inc New York, 1989) - *Flexible Manufacturing*
*   Mikell P. Groover (PHI, 2008) - *Automation, Production Systems and Computer Integrated Manufacturing*

---