---
title: "Classification of manufacturing Cells- FMS Unattended Machining- Features and Requirement"
subject: "FLEXIBLE MANUFACTURING SYSTEMS"
module: "Module 2: Manufacturing cells: Introduction"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf480446411c"
status: "completed"
scrapedAt: "2026-05-20T18:13:20.156Z"
---
# FLEXIBLE MANUFACTURING SYSTEMS

## Module 2: Manufacturing Cells: Introduction

---

### Topic: Classification of Manufacturing Cells - FMS Unattended Machining: Features and Requirements

---

### **1. Introduction to Manufacturing Cells**

*   **Definition:** A manufacturing cell is a group of machines and other manufacturing resources (like robots, fixtures, tooling) arranged in a way that allows for the efficient production of a family of parts or a variety of parts with similar processing requirements.
*   **Purpose:** To increase flexibility, reduce lead times, improve quality, and optimize resource utilization.
*   **Key Concept:** **Group Technology (GT)** is a fundamental principle underlying the formation of manufacturing cells. GT involves identifying and grouping similar parts (part families) based on their design or manufacturing characteristics. This grouping allows for the creation of specialized cells that can efficiently produce these families of parts.
    *   *(Referenced from: Luggen, W. W. (1991). Flexible Manufacturing Cells and System. Prentice Hall of Inc New Jersey.)*
    *   *(Referenced from: Groover, M. P. (2008). Automation, Production Systems and Computer Integrated Manufacturing. PHI.)*

---

### **2. Classification of Manufacturing Cells**

Manufacturing cells can be classified based on several criteria:

#### **2.1. Based on Product Variety and Volume (The "Vo" Classification)**

This is a widely used classification scheme that considers the trade-off between product variety and production volume.

*   **Job Shops:** High variety, low volume. Characterized by general-purpose machines and significant setup times. Cells are not typically formed in the traditional sense for job shops, but a flexible cell can handle a wider range of jobs.
*   **Batch Production:** Moderate variety, moderate volume. This is where manufacturing cells are most commonly applied. Parts are produced in batches.
    *   **Examples:** Automotive parts, consumer electronics components.
*   **Mass Production:** Low variety, high volume. Characterized by dedicated machines and highly automated processes. Cells might exist but are highly specialized and less flexible.
    *   **Examples:** Standard fasteners, simple plastic parts.
*   **Continuous Production:** Very low variety, very high volume. Highly automated and continuous flow. Not typically associated with the concept of distinct "cells" in the same way as batch production.
    *   **Examples:** Oil refining, chemical production.

#### **2.2. Based on Automation Level**

*   **Manual Cells:** Human operators perform most of the tasks, including machine operation, material handling, and inspection.
*   **Semi-Automated Cells:** Some tasks are automated (e.g., machine loading/unloading), but human intervention is still significant.
*   **Automated Cells:** Most or all tasks are automated. This category includes FMS and unattended machining cells.

#### **2.3. Based on Cell Configuration/Layout**

*   **Process Layout:** Machines are grouped by the type of operation (e.g., all lathes in one area). This is the traditional manufacturing layout and not characteristic of cells.
*   **Product Layout:** Machines are arranged in a sequence that follows the manufacturing steps for a specific product. Highly efficient for a single product but inflexible.
*   **Cellular Layout:** Machines are grouped to produce a family of parts. This is the defining characteristic of manufacturing cells. Layouts within a cell can vary:
    *   **In-line:** Machines arranged in a sequential flow.
    *   **U-shaped:** Improves operator access and material flow.
    *   **L-shaped:** Similar benefits to U-shaped.
    *   **S-shaped:** Facilitates material flow and operator movement.

#### **2.4. Based on Flexibility**

*   **Fixed Automation Cells:** Designed for a single product or a very narrow range of products. Not flexible.
*   **Programmable Automation Cells:** Can be reprogrammed to handle different product variations. More flexible than fixed automation.
*   **Flexible Manufacturing Cells (FMC):** Can switch between different products with minimal downtime for setup and changeover. These are the focus of FMS.

---

### **3. FMS Unattended Machining**

Unattended machining is a key characteristic of advanced manufacturing cells, particularly FMS. It refers to the ability of a manufacturing cell to operate for extended periods without direct human intervention.

#### **3.1. Definition of FMS Unattended Machining**

FMS unattended machining is the operation of machines within a Flexible Manufacturing System for extended periods, often overnight or over weekends, without human operators present to monitor or intervene in the machining process. This is achieved through a high degree of automation, integrated control systems, and robust support infrastructure.

*   *(Referenced from: Maleki, R. A. (1991). Flexible Manufacturing system. Prentice Hall of Inc New Jersey.)*
*   *(Referenced from: Lenz, J. E., & Eppinger, D. E. (1989). Flexible Manufacturing. Marcel Dekker Inc New York.)*

#### **3.2. Features of FMS Unattended Machining**

1.  **Automated Material Handling:** Efficient and automated systems for transporting raw materials, work-in-progress, and finished parts to and from machines. This includes Automated Guided Vehicles (AGVs), robotic pallet changers, and conveyor systems.
2.  **Automated Tool Changing:** On-board tool magazines on CNC machines and automated tool delivery systems to ensure the correct tools are available for each operation without manual intervention.
3.  **Automated Workpiece Loading/Unloading:** Robotic arms, gantry systems, or automated pallet changers that load raw materials and unload finished parts from machines.
4.  **Integrated Control System:** A centralized control system (often called a Manufacturing Execution System - MES or FMS Control System) that schedules production, monitors machine status, manages tool life, and orchestrates the operation of all cell components.
5.  **Advanced Machine Tool Capabilities:** CNC machines with high precision, reliability, and advanced features like in-process probing and adaptive control.
6.  **Self-Monitoring and Diagnostics:** Machines equipped with sensors to monitor their own performance, detect faults, and potentially initiate corrective actions or alert operators remotely.
7.  **Remote Monitoring and Control:** The ability for operators to monitor cell performance and even intervene remotely if necessary.
8.  **Standardized Fixturing and Pallets:** Universal fixturing systems and standardized pallets that allow for quick and repeatable workpiece positioning at different machines.

#### **3.3. Requirements for FMS Unattended Machining**

Achieving successful unattended machining requires careful planning and implementation of several key elements:

1.  **High Machine Reliability and Uptime:**
    *   Machines must be robust and capable of operating for extended periods without breakdowns.
    *   Preventive maintenance programs are crucial.
    *   *(Referenced from: Kalpakjin, S. (1995). Manufacturing Engineering and Technology. Addison Wesley Publishing.)*

2.  **Accurate and Robust Fixturing:**
    *   Workpieces must be held securely and accurately without shifting during unattended operations.
    *   Quick-change fixturing systems are essential.
    *   **Example:** Tombstone fixturing for multi-sided machining on a VMC.

3.  **Automated Tool Management:**
    *   Sufficient tool life and pre-calibration of tools are necessary.
    *   Tool wear monitoring and replacement strategies are vital.
    *   **Example:** A system that can detect excessive tool wear and automatically switch to a spare tool.

4.  **Effective Material Handling and Logistics:**
    *   Uninterrupted supply of raw materials and removal of finished parts.
    *   Robustness of AGVs or other transport systems.
    *   **Example:** Ensuring enough raw material blanks are available in the queue for the entire unattended shift.

5.  **Comprehensive Control and Scheduling Software:**
    *   Sophisticated software to manage job queues, machine assignments, tool allocation, and material flow.
    *   Real-time monitoring and reporting capabilities.

6.  **Error Detection and Recovery Mechanisms:**
    *   Sensors and logic to detect common errors (e.g., part dropped, tool breakage, machine stall).
    *   Pre-defined routines for handling specific errors, or the ability to alert a remote operator.
    *   **Example:** If a probing cycle fails, the system can halt the operation and send an alert rather than continuing with potentially incorrect data.

7.  **Quality Assurance and Inspection:**
    *   In-process inspection using probes or vision systems to verify part quality.
    *   Automated rejection of non-conforming parts.
    *   **Example:** A CMM probe integrated with the machining center to check critical dimensions after machining.

8.  **Safety Systems:**
    *   Fail-safe mechanisms and emergency stops to protect personnel and equipment if an unexpected situation arises, even with remote monitoring.
    *   Proper guarding around all automated equipment.

9.  **Skilled Workforce for Setup and Maintenance:**
    *   While operations are unattended, skilled technicians are required for setup, troubleshooting, maintenance, and programming.

---

### **4. Alignment with Course Outcomes (COs)**

*   **CO1 (K2 - Understand):** This module directly addresses the basic components (machines, material handling, control systems) and layout configurations (cellular) of FMS. Understanding manufacturing cells is foundational to understanding FMS.
*   **CO2 (K1 - Remember):** This topic explicitly covers the classification of manufacturing cells and the features and requirements of unattended machining. These are knowledge-based learning outcomes.
*   **CO3 (K3 - Apply):** While not directly covered in this specific topic, the concepts of efficient cell design and unattended operation lay the groundwork for applying CAD/CAM principles to plan FMS. For instance, planning tool paths for unattended operation requires detailed CAM knowledge.
*   **CO4 (K2 - Understand):** The discussion on automated material handling and tool management within unattended machining directly contributes to understanding these key operational aspects of FMS.

---

### **5. Practice Questions and Exercises**

**Question 1:**
What is the primary principle that underpins the formation of manufacturing cells?
a) Just-in-Time (JIT)
b) Group Technology (GT)
c) Lean Manufacturing
d) Total Quality Management (TQM)

**Answer 1:**
b) Group Technology (GT)

**Question 2:**
List three key features of FMS unattended machining.

**Answer 2:**
Any three from the following:
*   Automated Material Handling
*   Automated Tool Changing
*   Automated Workpiece Loading/Unloading
*   Integrated Control System
*   Advanced Machine Tool Capabilities
*   Self-Monitoring and Diagnostics
*   Remote Monitoring and Control
*   Standardized Fixturing and Pallets

**Question 3:**
Describe two critical requirements for successful unattended machining in an FMS context.

**Answer 3:**
Any two from the following:
*   High machine reliability and uptime
*   Accurate and robust fixturing
*   Effective material handling and logistics
*   Comprehensive control and scheduling software
*   Error detection and recovery mechanisms
*   Automated tool management

**Question 4 (Application/Analysis - K3 Level preparation):**
Imagine you are designing a manufacturing cell to produce a family of automotive engine blocks. What type of layout would be most appropriate for the cell, and why? What challenges might you anticipate in achieving unattended machining for this product family?

**Answer 4:**
*   **Layout:** A cellular layout, likely with a U-shaped or in-line configuration, would be most appropriate. This is because engine blocks typically share similar processing steps (milling, drilling, boring, tapping) and can be grouped into a part family, allowing for specialization and efficiency within the cell.
*   **Challenges for Unattended Machining:**
    *   **Part Handling:** Engine blocks are heavy and have complex geometries, requiring robust automated loading/unloading systems (e.g., heavy-duty robots, specialized gantries).
    *   **Tooling:** Machining engine blocks involves large tools and potentially high forces, requiring careful tool management, monitoring of tool wear, and potential automatic tool changes for drills or reamers.
    *   **Chip Evacuation:** Significant chip generation occurs, necessitating efficient chip removal systems to prevent buildup and tool damage.
    *   **Inspection:** Inline inspection of critical features (e.g., bore diameters, flatness) would be essential to ensure quality without operator intervention.
    *   **Machine Robustness:** The machines must be heavy-duty and precise enough to handle the machining of cast iron or aluminum blocks consistently.

---

### **6. Important Points to Remember**

*   **Group Technology (GT)** is the foundation for creating manufacturing cells.
*   Manufacturing cells offer a balance between the flexibility of job shops and the efficiency of mass production, particularly for **batch production**.
*   **Unattended machining** is a key objective for maximizing the productivity and profitability of FMS.
*   Success in unattended machining hinges on **reliability, automation, integrated control, and robust error handling**.
*   While automation is high, **skilled human intervention** is still crucial for setup, maintenance, and problem-solving.

---
This concludes the notes for the Classification of Manufacturing Cells and FMS Unattended Machining: Features and Requirements.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
