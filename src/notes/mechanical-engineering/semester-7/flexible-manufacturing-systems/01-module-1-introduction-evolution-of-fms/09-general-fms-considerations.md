---
title: "general FMS considerations"
subject: "FLEXIBLE MANUFACTURING SYSTEMS"
module: "Module 1: Introduction : Evolution of FMS"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464116"
status: "completed"
scrapedAt: "2026-05-20T18:13:16.666Z"
---
# FLEXIBLE MANUFACTURING SYSTEMS (FMS)

## Module 1: Introduction - Evolution of FMS

### Topic: General FMS Considerations

This module introduces the fundamental concepts of Flexible Manufacturing Systems (FMS), tracing their evolution and highlighting the key considerations involved in their design, implementation, and operation.

---

### Learning Outcomes Covered:

*   **Understand the basic components, layout configurations, and functions of Flexible Manufacturing Systems (FMS).** (CO1)
*   **Remember the classification of manufacturing cells, features and requirements of unattended machining, and principles of the Toyota Production System (TPS).** (CO2)
*   **Apply the knowledge of CAD and CAM considerations in planning and implementing FMS.** (CO3)
*   **Understand the automated material movement, storage systems, and tool management in FMS operations.** (CO4)

---

### 1. What is a Flexible Manufacturing System (FMS)?

An FMS is a highly automated production facility that can efficiently produce a variety of parts in small to medium batch sizes with minimal human intervention. It integrates various manufacturing resources such as CNC machines, robots, automated material handling systems, and control software into a cohesive and adaptable system.

**Key Characteristics of FMS:**

*   **Flexibility:** Ability to process a range of part types and to adapt to changes in production requirements (e.g., new part designs, varying demand).
*   **Automation:** High degree of automation in machining, material handling, and control.
*   **Integration:** Seamless integration of machines, material handling, and information systems.
*   **Efficiency:** Optimized resource utilization and reduced lead times.
*   **Responsiveness:** Quick adaptation to market changes and customer demands.

**Reference:** *Shivanand H.K., Benal MM, Koti V (2006)* emphasizes the integrated nature of FMS, combining machining, material handling, and control. *Luggen (1991)* highlights flexibility as the core advantage.

---

### 2. Evolution of FMS

The development of FMS is a direct response to changing manufacturing paradigms and technological advancements.

*   **Early Stages (1960s-1970s):** Focus on automating single machine operations (e.g., NC machines). Emergence of Computer Numerical Control (CNC).
*   **Cellular Manufacturing (1970s):** Grouping of machines to produce families of parts, leading to improved efficiency and reduced WIP.
*   **First FMS (1970s):** Introduction of automated material handling systems (e.g., AGVs) to link machines, enabling the production of multiple part types.
*   **Advancements (1980s-1990s):** Integration of CAD/CAM, sophisticated control systems, and expert systems. Increased focus on software integration and data management.
*   **Modern FMS (2000s onwards):** Further integration with enterprise resource planning (ERP) and manufacturing execution systems (MES). Emphasis on real-time data analysis, predictive maintenance, and Industry 4.0 concepts.

**Reference:** *Maleki (1991)* discusses the historical progression and motivations behind FMS development. *Groover (2008)* provides a comprehensive overview of automation technologies that have fueled FMS evolution.

---

### 3. General FMS Considerations

Implementing an FMS requires careful planning and consideration of several critical factors.

#### 3.1. Production Requirements & Part Families

*   **Product Mix:** The range and variety of parts to be manufactured.
*   **Production Volume:** Batch sizes and annual production quantities.
*   **Part Families:** Grouping of parts with similar processing requirements. This is a fundamental concept for FMS design. Parts within a family often share similar shapes, materials, or operations.
    *   **Example:** A family of prismatic parts requiring milling, drilling, and tapping operations.
*   **Design & Material:** Understanding the geometric complexity, material properties, and tolerances of the parts.

**Reference:** *Luggen (1991)* stresses the importance of analyzing part characteristics and production volumes. *Lenz & Eppinger (1989)* provide insights into product design for manufacturing systems.

#### 3.2. Machining Operations & Technologies

*   **Types of Operations:** Turning, milling, drilling, grinding, etc.
*   **Machining Centers:** CNC machining centers are the core of most FMS.
    *   **Horizontal vs. Vertical Machining Centers:** Choice depends on part geometry and accessibility.
    *   **5-Axis Machining:** Enables complex geometries and reduced setups.
*   **Other Technologies:** Grinding machines, EDM machines, etc., depending on product requirements.

**Reference:** *Kalpakjin (1995)* offers a broad overview of manufacturing processes and technologies relevant to FMS.

#### 3.3. Tool Management

*   **Tool Magazines/Carousels:** On-machine storage of multiple tools.
*   **Automatic Tool Changers (ATCs):** Rapid and automatic exchange of tools.
*   **Tool Presetters:** Off-line preparation and measurement of tools.
*   **Tool Life Monitoring:** Tracking tool wear and scheduling replacements to prevent downtime.
*   **Tool Coding:** Assigning unique identifiers to tools for accurate identification and management.

**CO4 Alignment:** Understanding tool management is crucial for automated operations.

**Reference:** *Luggen (1991)* discusses the logistical aspects of tool management in FMS. *Groover (2008)* covers automated tool handling systems.

#### 3.4. Material Handling and Storage Systems

*   **Automated Guided Vehicles (AGVs):** Mobile robots for transporting parts and materials between workstations.
    *   **Types:** Tugger AGVs, Unit Load AGVs, Fork AGVs.
    *   **Navigation:** Wire guidance, magnetic tape guidance, laser guidance, natural feature guidance.
*   **Conveyor Systems:** Fixed or overhead systems for continuous material flow.
*   **Robotic Palletizers/Depalletizers:** For loading and unloading parts.
*   **Automated Storage and Retrieval Systems (AS/RS):** For storing raw materials, work-in-progress, and finished goods.
    *   **Types:** Unit-load AS/RS, Mini-load AS/RS.
    *   **Benefits:** Space efficiency, reduced handling time, inventory control.

**CO1 & CO4 Alignment:** These are fundamental components and functions of FMS.

**Reference:** *Shivanand H.K., Benal MM, Koti V (2006)* detail various automated material handling options. *Luggen (1991)* covers automated transport and storage.

#### 3.5. System Control and Information Management

*   **Computer Control:** The backbone of FMS, coordinating all activities.
*   **Manufacturing Execution System (MES):** Real-time monitoring and control of shop floor operations.
*   **Enterprise Resource Planning (ERP):** Integration with higher-level business systems for planning and scheduling.
*   **Shop Floor Control Software:** Directing machines, material handling, and managing production flow.
*   **Data Acquisition and Analysis:** Real-time data collection for performance monitoring and optimization.

**CO1 Alignment:** Control systems are integral to FMS functions.

**Reference:** *Maleki (1991)* discusses the hierarchical control structures in FMS. *Groover (2008)* provides an overview of CIM and its role in FMS control.

#### 3.6. Layout Configurations

The physical arrangement of workstations within an FMS significantly impacts its efficiency and flexibility.

*   **In-line Layout:** Machines arranged sequentially, suitable for high-volume production of a limited part range.
    *   *Pros:* Simple material flow.
    *   *Cons:* Less flexible.
*   **U-shaped Layout:** Machines arranged in a U-shape, allowing for better supervision and material flow.
    *   *Pros:* Efficient operator utilization, reduced travel distances.
    *   *Cons:* Can be less flexible than other configurations for complex routing.
*   **L-shaped Layout:** Machines arranged in an L-shape.
*   **Cellular Layout:** Machines grouped into cells, each dedicated to a specific part family.
    *   *Pros:* Highly flexible, efficient for diverse part families.
    *   *Cons:* Requires more complex material handling.
*   **Loop Layout:** Machines arranged in a loop, with material handlers circulating.
    *   *Pros:* Good for balanced workloads.
    *   *Cons:* Can have traffic congestion.
*   **Dispersed Layout:** Machines are scattered, with material handling system connecting them.
    *   *Pros:* Maximum flexibility.
    *   *Cons:* Higher material handling costs, potential for WIP.

**CO1 Alignment:** Understanding layout configurations is a core aspect of FMS.

**Example:** An FMS producing automotive components might use a U-shaped layout for machining engine blocks and an in-line layout for sub-assembly operations.

**Reference:** *Shivanand H.K., Benal MM, Koti V (2006)* and *Luggen (1991)* provide detailed discussions on various FMS layouts.

#### 3.7. CAD/CAM Integration

*   **Computer-Aided Design (CAD):** For creating and modifying part designs.
*   **Computer-Aided Manufacturing (CAM):** For generating toolpaths and NC programs from CAD models.
*   **Direct Numerical Control (DNC):** Downloading NC programs directly to machines.
*   **Benefits of Integration:**
    *   Reduced programming time.
    *   Improved accuracy and consistency.
    *   Facilitates design for manufacturability (DFM).
    *   Enables automated setup and process planning.

**CO3 Alignment:** This outcome directly addresses the application of CAD/CAM in FMS.

**Example:** A new part designed in CAD can be directly translated into CAM to generate machining instructions for the FMS, streamlining the entire production process.

**Reference:** *Lenz & Eppinger (1989)* delve into product design and process planning, including CAD/CAM.

#### 3.8. Unattended Machining & Lights-Out Manufacturing

*   **Definition:** Production running without direct human supervision, often overnight or during weekends.
*   **Features:**
    *   Automated part loading/unloading.
    *   Automated tool changing.
    *   On-line inspection and quality control.
    *   Robust error detection and recovery systems.
    *   Predictive maintenance for machinery.
*   **Requirements:** High reliability of all system components, efficient error handling, pre-planned operations.
*   **Benefits:** Increased machine utilization, reduced labor costs, flexibility in production scheduling.

**CO2 Alignment:** This covers the features and requirements of unattended machining.

**Example:** An FMS producing a family of aerospace components might operate in "lights-out" mode for 16 hours a day, maximizing machine throughput.

**Reference:** *Luggen (1991)* discusses the principles of unattended operation.

#### 3.9. Principles of Toyota Production System (TPS) and their Relevance to FMS

While TPS is primarily associated with lean manufacturing and just-in-time (JIT), its core principles are highly relevant to FMS.

*   **Jidoka (Autonomation):** Building quality into the process. Machines stop automatically when a defect or abnormality occurs. This aligns with the error detection and stopping mechanisms in FMS.
*   **Just-in-Time (JIT):** Producing only what is needed, when it is needed, and in the amount needed. FMS facilitates JIT by enabling rapid changeovers and efficient small-batch production.
*   **Kaizen (Continuous Improvement):** A philosophy of ongoing improvement. FMS data can be used to identify bottlenecks and opportunities for optimization.
*   **Heijunka (Production Leveling):** Smoothing the production schedule to avoid peaks and valleys. FMS flexibility supports Heijunka by allowing for the efficient production of a mixed product schedule.
*   **Muda (Waste Elimination):** Identifying and eliminating various forms of waste (e.g., overproduction, waiting, transportation, inventory, motion, defects). FMS aims to minimize these wastes through automation and efficient flow.

**CO2 Alignment:** This covers the principles of TPS and their application.

**Reference:** *Groover (2008)* often discusses the impact of lean principles on advanced manufacturing systems like FMS.

---

### 4. Key Concepts and Definitions to Remember

*   **Flexibility:** The ability to adapt to changes in production.
*   **Automation:** The use of technology to perform tasks with minimal human intervention.
*   **Part Family:** A group of parts with similar processing requirements.
*   **AGV (Automated Guided Vehicle):** Mobile robot for material transport.
*   **AS/RS (Automated Storage and Retrieval System):** Automated system for storing and retrieving items.
*   **DNC (Direct Numerical Control):** Direct computer control of machine tools.
*   **JIT (Just-in-Time):** Producing parts only when needed.
*   **Jidoka:** "Autonomation" – building quality into the process.
*   **Lights-Out Manufacturing:** Production running without direct human supervision.

---

### 5. Practice Questions & Exercises

**Question 1:**
Define Flexible Manufacturing System (FMS) and list its key characteristics. (CO1)

**Answer:**
A Flexible Manufacturing System (FMS) is a highly automated production facility designed to efficiently produce a variety of parts in small to medium batch sizes with minimal human intervention. Its key characteristics include flexibility (adaptability to part changes and volumes), high degree of automation, integration of machines and material handling, efficiency, and responsiveness to market demands.

**Question 2:**
What are the primary considerations when designing an FMS? Discuss the importance of part families in FMS planning. (CO1)

**Answer:**
Primary considerations include production requirements (product mix, volume), machining operations and technologies needed, tool management strategies, material handling and storage systems, system control and information management, layout configurations, and CAD/CAM integration. Part families are crucial as they allow for the grouping of similar parts, which can share common tooling, setups, and processing sequences, thus enabling efficient production of a mix of parts on a single system.

**Question 3:**
Explain the concept of "lights-out manufacturing" and the essential requirements for achieving it within an FMS. (CO2)

**Answer:**
Lights-out manufacturing refers to production running without direct human supervision, often during off-hours. Essential requirements include highly reliable machinery, robust automated material loading/unloading, effective automated tool management, integrated on-line inspection and quality control, advanced error detection and recovery systems, and predictive maintenance capabilities to ensure uninterrupted operation.

**Question 4:**
How can CAD/CAM integration benefit an FMS? Provide an example. (CO3)

**Answer:**
CAD/CAM integration streamlines the production process by:
*   Reducing programming time and errors.
*   Ensuring accurate toolpath generation from CAD models.
*   Facilitating design for manufacturability (DFM).
*   Enabling automated setup and process planning.

*Example:* A designer creates a new part in CAD software. This CAD model is then directly imported into CAM software, which automatically generates the necessary machining instructions (toolpaths, speeds, feeds) for the FMS, significantly reducing the time and effort required for programming.

**Question 5:**
Describe two types of automated material handling systems commonly found in FMS and explain their roles. (CO4)

**Answer:**
1.  **Automated Guided Vehicles (AGVs):** These are mobile robots that transport parts, tools, or materials between workstations without direct human operation. They navigate predefined paths (e.g., magnetic tape, laser guidance) and are crucial for flexible material flow in FMS.
2.  **Automated Storage and Retrieval Systems (AS/RS):** These systems automatically store and retrieve items (raw materials, WIP, finished goods) from storage locations. They are vital for efficient inventory management, space utilization, and providing a continuous supply of parts to the FMS workstations.

**Question 6:**
Discuss the relevance of Jidoka and JIT principles from the Toyota Production System (TPS) to the operation of an FMS. (CO2)

**Answer:**
*   **Jidoka (Autonomation):** In an FMS, Jidoka principles are applied through automated error detection systems that stop the machine or the entire line when a problem occurs (e.g., tool breakage, part misalignment). This builds quality into the process and prevents the propagation of defects.
*   **JIT (Just-in-Time):** FMS's ability to handle a mix of parts and perform rapid changeovers makes it an ideal enabler of JIT manufacturing. It allows for producing parts in smaller batches, only when they are needed by the next stage in the production process or by the customer, thereby minimizing inventory and lead times.

---

### 6. Important Points to Remember

*   FMS is a paradigm shift from traditional mass production, focusing on **flexibility and efficiency**.
*   **Part families** are fundamental to efficient FMS operation.
*   **Integration** of machines, material handling, and control systems is key.
*   **Tool management** and **material handling** are critical logistical challenges.
*   **CAD/CAM integration** is essential for rapid part introduction and process planning.
*   **Unattended machining** is a major goal to maximize utilization.
*   Lean manufacturing principles like **JIT and Jidoka** are highly compatible with FMS.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
