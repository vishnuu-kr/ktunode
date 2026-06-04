---
title: "FMS Software Structure- General Structure and Requirements"
subject: "FLEXIBLE MANUFACTURING SYSTEMS"
module: "Module 4: FMS Planning: CAD Considerations FMS planning"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf480446412d"
status: "completed"
scrapedAt: "2026-05-20T18:13:30.699Z"
---
# Flexible Manufacturing Systems (FMS) - Module 4: FMS Planning: CAD Considerations & FMS Software Structure

This module delves into the crucial aspects of planning a Flexible Manufacturing System (FMS), with a specific focus on how Computer-Aided Design (CAD) plays a role and the underlying structure and requirements of FMS software.

---

## Module 4: FMS Planning: CAD Considerations & FMS Software Structure

### Topic: FMS Software Structure - General Structure and Requirements

This topic explores the fundamental architecture and necessary components of software designed to manage and control a Flexible Manufacturing System. Understanding this structure is paramount for effective FMS implementation and operation.

---

### **1. Learning Outcomes Covered:**

This set of notes aims to address the following learning outcomes:

*   **Understand the basic components, layout configurations, and functions of Flexible Manufacturing Systems (FMS).** (CO1, K2) - While the focus is on software, understanding how software interacts with physical components is essential.
*   **Remember the classification of manufacturing cells, features and requirements of unattended machining, and principles of the Toyota Production System (TPS).** (CO2, K1) - Unattended machining is a key driver for sophisticated FMS software, and TPS principles influence efficiency goals.
*   **Apply the knowledge of CAD and CAM considerations in planning and implementing FMS.** (CO3, K3) - Software is the bridge between CAD/CAM data and FMS execution.
*   **Understand the automated material movement, storage systems, and tool management in FMS operations.** (CO4, K2) - FMS software is responsible for orchestrating these automated functions.

---

### **2. Key Concepts and Definitions:**

**Flexible Manufacturing System (FMS):** An integrated manufacturing system comprised of workstations, material handling systems, and a computer control system that can adapt to changes in product design, production volume, and product mix. (Shivanand et al., 2006)

**FMS Software:** The integrated suite of computer programs that manages, controls, and monitors all aspects of an FMS operation, from production scheduling to individual machine control. It acts as the "brain" of the FMS.

**Computer-Aided Design (CAD):** The use of computer systems to assist in the creation, modification, analysis, or optimization of a design. In FMS planning, CAD is used for facility layout, workstation design, and product modeling. (Luggen, 1991)

**Computer-Aided Manufacturing (CAM):** The use of computer systems to plan, manage, and control manufacturing operations. In FMS, CAM generates toolpaths and machine instructions.

**Hierarchical Control Structure:** A common approach in FMS software where control functions are organized into different levels, from high-level strategic planning to low-level machine control.

**Modules of FMS Software:** Distinct functional units within the FMS software that handle specific tasks.

**Real-time Control:** The ability of the software to respond to events and make decisions within a very short, specified time frame, crucial for dynamic FMS operations.

**Database Management System (DBMS):** A software system that allows users to create, update, and manage databases, essential for storing product information, machine status, tool data, etc.

**Shop Floor Control:** The execution of production plans and schedules on the shop floor, managed by FMS software.

---

### **3. General Structure of FMS Software:**

The software for an FMS is typically structured in a hierarchical or layered manner to manage the complexity of operations. This structure ensures efficient communication and control across different levels.

**A. Hierarchical Structure:**

This is the most common approach, organizing software functions into distinct levels:

*   **Level 3: Production Planning and Control (PPC) / Higher Level:**
    *   **Functionality:** Strategic decision-making, production scheduling, order processing, capacity planning, resource allocation.
    *   **Inputs:** Customer orders, product designs, market demand.
    *   **Outputs:** Work orders, production schedules, material requirements.
    *   **Key Components:**
        *   **Master Production Schedule (MPS):** Defines what products to produce and when.
        *   **Material Requirements Planning (MRP):** Determines the quantity and timing of raw materials and components.
        *   **Capacity Requirements Planning (CRP):** Ensures that the available resources can meet the planned production.
        *   **Shop Floor Scheduling:** Detailed sequencing of operations at individual workstations.
    *   **Textbook Reference:** Maleki (1991) emphasizes the role of high-level planning in setting the stage for FMS operations.

*   **Level 2: Supervisory Control / Cell Control:**
    *   **Functionality:** Manages the flow of workpieces and materials within the FMS, dispatches jobs to workstations, monitors workstation status, and controls AGVs/robots.
    *   **Inputs:** Work orders from Level 3, real-time status of workstations and AGVs.
    *   **Outputs:** Commands to individual machines and material handling systems.
    *   **Key Components:**
        *   **Workpiece Dispatching:** Deciding which workpiece goes to which available machine.
        *   **Workstation Monitoring:** Tracking machine status (idle, busy, down, setup).
        *   **Material Handling System Control:** Directing AGVs, conveyors, or cranes.
        *   **Tool Management Interface:** Communicating tool requirements to tool cribs or individual machines.
    *   **Textbook Reference:** Luggen (1991) highlights the critical role of cell control in coordinating diverse FMS elements.

*   **Level 1: Machine Control / Direct Numerical Control (DNC):**
    *   **Functionality:** Controls individual machines (e.g., CNC machines, robots, inspection stations), executes NC programs, and provides real-time feedback to the supervisory level.
    *   **Inputs:** NC programs, operational commands from Level 2.
    *   **Outputs:** Machine tool movements, spindle speeds, feed rates, sensor readings.
    *   **Key Components:**
        *   **Numerical Control (NC) Program Execution:** Running the specific instructions for a machining operation.
        *   **Machine Status Feedback:** Reporting tool breakage, cycle completion, errors.
        *   **Sensor Data Acquisition:** Gathering data from sensors on the machine.
    *   **Textbook Reference:** Shivanand et al. (2006) detail the necessity of precise machine-level control for FMS success.

**B. Other Structural Considerations:**

*   **Database:** A central repository for all FMS data, including product definitions, process plans, tool information, machine parameters, and production history.
*   **Communication Network:** High-speed communication links (e.g., Ethernet) to connect all FMS components and enable real-time data exchange.
*   **User Interface (UI):** A graphical interface for operators and managers to monitor the system, input commands, and troubleshoot problems.

---

### **4. Requirements of FMS Software:**

To effectively manage a dynamic and automated manufacturing environment, FMS software must possess several key capabilities:

*   **Flexibility and Adaptability:**
    *   **Requirement:** The software must be able to easily incorporate new products, processes, and equipment with minimal reprogramming.
    *   **Alignment:** Directly supports the "flexible" aspect of FMS, allowing for rapid response to market changes.
    *   **Example:** Easily loading a new CAD model and associated CAM toolpaths for a different product.

*   **Real-time Data Acquisition and Processing:**
    *   **Requirement:** Ability to collect and analyze data from machines and sensors instantaneously to make timely decisions.
    *   **Alignment:** Crucial for dynamic scheduling, error detection, and condition monitoring.
    *   **Example:** Detecting a tool breakage and rerouting the workpiece to another machine with a good tool. (CO4)

*   **Robust Scheduling and Dispatching:**
    *   **Requirement:** Sophisticated algorithms to optimize production schedules, balance workloads, and dispatch parts efficiently.
    *   **Alignment:** Directly impacts throughput, machine utilization, and on-time delivery.
    *   **Example:** Dynamically re-sequencing jobs based on machine availability or urgent orders.

*   **Integrated CAD/CAM Data Management:**
    *   **Requirement:** Seamless integration with CAD and CAM systems to import product geometry, process plans, and NC code.
    *   **Alignment:** Essential for applying CAD/CAM knowledge in FMS implementation (CO3).
    *   **Example:** Automatically translating a CAD model into a format that defines workpiece orientation for a robotic loader.

*   **Tool Management Capabilities:**
    *   **Requirement:** Tracking tool life, managing tool inventories, predicting tool wear, and ensuring the correct tools are available at workstations.
    *   **Alignment:** Supports unattended machining and efficient tool replacement (CO2).
    *   **Example:** Alerting the system when a tool reaches 80% of its expected life and pre-emptively scheduling its replacement. (CO4)

*   **Material Handling System Integration:**
    *   **Requirement:** Direct control and coordination of automated guided vehicles (AGVs), conveyors, robots, and automated storage and retrieval systems (AS/RS).
    *   **Alignment:** Manages automated material movement (CO4).
    *   **Example:** Instructing an AGV to pick up a finished part from a machine and deliver it to an inspection station.

*   **System Monitoring and Diagnostics:**
    *   **Requirement:** Providing real-time visibility into the status of all FMS components, identifying and diagnosing faults, and supporting maintenance activities.
    *   **Alignment:** Contributes to overall system uptime and efficiency.
    *   **Example:** Displaying the operational status of each CNC machine, including any error codes.

*   **Data Logging and Reporting:**
    *   **Requirement:** Recording production data, performance metrics, and system events for analysis, improvement, and auditing.
    *   **Alignment:** Supports continuous improvement and understanding of FMS performance.
    *   **Example:** Generating reports on machine utilization, part throughput, and downtime reasons.

*   **User-Friendliness and Interactivity:**
    *   **Requirement:** An intuitive user interface that allows operators and supervisors to effectively interact with the system.
    *   **Alignment:** Crucial for efficient operation and quick response to unexpected events.

*   **Connectivity and Interoperability:**
    *   **Requirement:** The ability to communicate with other enterprise systems (e.g., ERP) and potentially other manufacturing systems.
    *   **Alignment:** Supports the broader concept of Computer-Integrated Manufacturing (CIM).

---

### **5. Examples:**

*   **Scheduling:** An FMS software might decide to send a workpiece to Machine A because it has a shorter queue than Machine B, even though Machine B is theoretically faster, to optimize overall system flow.
*   **Tool Management:** If a CNC machine reports an excessive spindle current, the FMS software might identify that the tool is likely dull and preemptively schedule a tool change before a breakdown occurs.
*   **Material Handling:** When a robotic arm finishes loading a part onto a CNC machine, the FMS software immediately dispatches an AGV to pick up the next part waiting at the staging area.
*   **CAD Integration:** When a new product design is finalized in CAD, the FMS software can import the updated geometric data and automatically suggest or load new machining strategies from the CAM system.

---

### **6. Important Points to Remember:**

*   **Hierarchical structure is key:** Understanding the different levels of control (PPC, Supervisory, Machine) is fundamental to FMS software design and operation.
*   **Software is the integrator:** FMS software is the glue that binds together all the physical components (machines, robots, AGVs) and enables their coordinated operation.
*   **Data is paramount:** The effectiveness of FMS software heavily relies on accurate, real-time data collection and processing.
*   **Flexibility is a core requirement:** The software must be adaptable to changing production demands and product variations.
*   **CAD/CAM integration is a necessity:** For efficient planning and execution, FMS software must seamlessly work with CAD and CAM data. (CO3)

---

### **7. Practice Questions and Exercises:**

**Question 1:**
Describe the typical hierarchical structure of FMS software and the primary functions of each level. (CO1, K2)

**Answer:**
The typical hierarchical structure consists of three main levels:
1.  **Level 3 (Production Planning and Control - PPC):** Handles high-level decisions like production scheduling, capacity planning, and order management.
2.  **Level 2 (Supervisory Control / Cell Control):** Manages the flow of workpieces, dispatches jobs to workstations, monitors machine status, and controls material handling systems.
3.  **Level 1 (Machine Control / Direct Numerical Control - DNC):** Directly controls individual machines, executes NC programs, and provides real-time feedback.

**Question 2:**
What are the key software requirements that enable an FMS to achieve flexibility? Provide at least two examples. (CO3, K3)

**Answer:**
Key software requirements for FMS flexibility include:
*   **Integrated CAD/CAM Data Management:** The ability to import and interpret new product designs and manufacturing processes easily. Example: Automatically loading a new NC program generated from a modified CAD model.
*   **Dynamic Scheduling and Dispatching:** The software must be able to re-optimize production sequences in real-time based on available resources and changing priorities. Example: Rerouting a part to an alternative machine if the primary machine experiences an unexpected breakdown.

**Question 3:**
Explain the role of FMS software in managing automated material movement and tool management. (CO4, K2)

**Answer:**
*   **Automated Material Movement:** FMS software directs AGVs or other material handling systems to transport parts between workstations, to inspection stations, or to storage. It ensures that parts are available at the right time and place for processing.
*   **Tool Management:** The software tracks tool life, monitors tool wear, schedules tool replacements, and ensures that the correct tools are loaded onto machines. This is critical for unattended machining and maintaining part quality.

**Question 4:**
(True/False) FMS software primarily focuses on the physical design and layout of the manufacturing facility.

**Answer:**
False. FMS software focuses on the *control and management* of operations, not the physical design, which is typically handled by CAD.

**Question 5:**
Imagine you are planning an FMS for producing a family of car engine blocks. List three critical software requirements that would be essential for this FMS. Briefly explain why each is important. (CO3, CO4, K3)

**Answer:**
1.  **Integrated CAD/CAM Data Management:** Essential to handle variations in engine block designs and their corresponding machining processes. It ensures that the correct toolpaths and machining parameters are loaded for each block type. (CO3)
2.  **Tool Management:** Engine blocks often require a large variety of tools for different operations (milling, drilling, tapping). Robust tool management is needed to track tool life, prevent tool breakage, and ensure the availability of the correct tooling for each machine. (CO4)
3.  **Robust Scheduling and Dispatching:** To maximize throughput and machine utilization, the software must efficiently schedule the sequence of engine blocks to be processed at different workstations, considering machine availability and setup times. (CO1)

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### **8. Textbook and Reference Book Integration:**

*   **Shivanand et al. (2006):** Their work provides a foundational understanding of FMS components and the necessity of integrated control systems, which directly informs the discussion of FMS software structure and requirements.
*   **Luggen (1991):** Luggen's insights into manufacturing cells and systems highlight the coordination challenges that FMS software must address, particularly in managing material flow and workstation interactions.
*   **Maleki (1991):** Maleki's discussions on planning and implementation of FMS underscore the importance of software in bridging the gap between design (CAD/CAM) and shop floor execution.
*   **Lenz & Eppinger (1989):** Their focus on manufacturing systems likely touches upon the planning and control aspects, including the role of software in achieving flexibility.
*   **Kalpakjin (1995):** As a broader text on manufacturing engineering, Kalpakjin's work provides context on how FMS software fits into the overall automation landscape.
*   **Groover (2008):** Groover's comprehensive treatment of automation, production systems, and CIM reinforces the multi-faceted nature of FMS software, emphasizing its role in integrating various automated functions.

---

This comprehensive study guide aims to equip you with a strong understanding of FMS software structure and requirements, paving the way for successful FMS planning and implementation.