---
title: "Cutting Tools and Tool Management- Tool Preset"
subject: "FLEXIBLE MANUFACTURING SYSTEMS"
module: "Module 3: Computer aided programme generation & Product Manufacturing"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464128"
status: "completed"
scrapedAt: "2026-05-20T18:13:27.782Z"
---
# Flexible Manufacturing Systems (FMS) - Module 3: Computer Aided Programme Generation & Product Manufacturing

## Topic: Cutting Tools and Tool Management - Tool Preset

---

### **1. Introduction to Tool Management in FMS**

*   **Importance of Tool Management:**
    *   In an FMS, where flexibility and automation are paramount, efficient tool management is critical for maximizing throughput, minimizing downtime, and ensuring product quality.
    *   Tools are the primary interface between the machine and the workpiece. Their proper selection, maintenance, and timely availability directly impact the system's performance.
    *   (Referenced from Luggen, 1991; Maleki, 1991)

*   **Key Aspects of Tool Management:**
    *   **Tool Selection:** Choosing the right tool for a specific operation and material.
    *   **Tool Storage:** Organized and accessible storage of a wide variety of tools.
    *   **Tool Transfer:** Automated or semi-automated movement of tools between storage and machines.
    *   **Tool Monitoring:** Tracking tool life, wear, and condition.
    *   **Tool Replacement:** Timely replacement of worn or broken tools.
    *   **Tool Presetting:** The process of defining and verifying tool parameters before they are loaded into the FMS.

### **2. Tool Presetting: The Foundation of Automated Machining**

*   **Definition:** Tool presetting is the process of accurately measuring and recording the dimensions and geometry of cutting tools *before* they are installed in the FMS work area (e.g., tool magazines of CNC machines or robotic tool changers). This ensures that the machine control system has the correct information to position the tool accurately for machining.

*   **Why is Tool Presetting Crucial in FMS?**
    *   **Accuracy:** Eliminates the need for "in-process" tool setting at the machine, which is time-consuming and interrupts production.
    *   **Flexibility:** Allows for rapid changeover between different parts and operations by having pre-measured tools ready.
    *   **Automation:** Essential for unattended or lights-out manufacturing, where manual intervention at the machine is not possible.
    *   **Reduced Setup Time:** Significant reduction in machine downtime for tool loading and setup.
    *   **Improved Part Quality:** Consistent and accurate tool dimensions lead to predictable machining results and better part quality.
    *   **Collision Prevention:** Accurate tool data helps the FMS control system avoid collisions between the tool, workpiece, and machine components.
    *   (Referenced from Shivanand et al., 2006; Luggen, 1991)

*   **Learning Outcome Alignment:**
    *   **CO4:** Understand the automated material movement, storage systems, and **tool management** in FMS operations. (Knowledge Level: K2) - Tool presetting is a fundamental aspect of tool management in FMS.
    *   **CO3:** Apply the knowledge of CAD and CAM considerations in planning and implementing FMS. (Knowledge Level: K3) - Tool data generated during presetting is directly linked to CAM programming.

### **3. Key Concepts and Parameters in Tool Presetting**

*   **Tool Geometry:**
    *   **Overall Length:** The total length of the tool from the mounting surface to the cutting edge. This is often the most critical parameter for Z-axis positioning.
    *   **Diameter:** The effective diameter of the cutting tool (e.g., milling cutter diameter, drill diameter).
    *   **Flute Length:** The length of the cutting portion of the tool.
    *   **Reach/Overhang:** The distance from the tool holder mounting surface to the tip of the cutting tool.
    *   **Cutting Edge Radius/Chamfer:** The geometry of the cutting tip, which influences surface finish and chip formation.
    *   **Tool Nose Radius Compensation (TNRC):** A critical parameter for contouring operations, allowing the system to automatically compensate for the radius of the tool nose.

*   **Tool Offset Data:**
    *   **Length Offset (e.g., G43/G44 in G-code):** The difference between the actual tool length and a reference length. This tells the machine control how far the cutting edge is from the spindle face.
    *   **Diameter Offset (e.g., G41/G42 in G-code):** The difference between the tool's actual radius and a nominal radius. Used for maintaining a programmed part profile.
    *   **Wear Offset:** Allows for adjustments to the length and diameter offsets to compensate for tool wear.
    *   **Lookahead Offset:** Used in some advanced systems to predict tool path and optimize machining.

*   **Tool Holder Parameters:**
    *   **Holder Type:** e.g., CAT, BT, HSK, SK.
    *   **Holder Length:** The length of the tool holder itself.
    *   **Holder Diameter:** The diameter of the holder in contact with the spindle.

*   **Important Point to Remember:** The **combination** of the tool and its holder defines the complete "tool assembly" whose dimensions are measured and stored.

### **4. Tool Presetters: Equipment and Functionality**

*   **Types of Presetters:**
    *   **Manual Presetters:** Operator visually aligns the tool with a reference point and reads dimensions from scales or displays. Less accurate and slower.
    *   **Optical Presetters:** Use magnifying lenses and graticules for more precise alignment.
    *   **Electronic/Digital Presetters:** Employ electronic sensors, digital readouts (DROs), or even optical encoders for highly accurate measurements.
    *   **CNC Presetters:** Fully automated systems that use vision systems or laser probes to measure tool parameters automatically. These are ideal for FMS integration.

*   **Key Components of a Presetter:**
    *   **Base/Stand:** A stable platform for mounting the components.
    *   **Tool Holder Spindle/Mount:** A mechanism to securely hold the tool holder.
    *   **Measuring Head/Probe:**
        *   **Optical Magnifier:** For visual alignment.
        *   **Electronic Probe:** Touches the cutting edge to detect its position.
        *   **Laser/Vision System:** Uses light or cameras to detect edges and contours.
    *   **Measuring System:** Scales, encoders, or cameras to record the position of the measuring head.
    *   **Display/Control Unit:** To show measured values and allow for data input/output.
    *   **Data Output Interface:** To transfer preset data to the FMS controller or network (e.g., RS232, Ethernet).

*   **How a Presetter Works (Generalized Process):**
    1.  **Mount the Tool Holder:** The tool holder containing the cutting tool is securely mounted in the presetter spindle.
    2.  **Align with Reference:** The tool is brought into position against a reference element (e.g., a gauge pin, a calibrated surface).
    3.  **Measure Length:** The measuring head (probe, camera, etc.) is moved axially to contact the cutting edge's tip. The axial position is recorded as the tool length offset.
    4.  **Measure Diameter:** The measuring head is moved radially to contact the outer diameter of the cutting tool. The radial position is recorded as the tool diameter offset.
    5.  **Record Other Parameters:** Depending on the presetter's capability, other parameters like cutting edge radius or flute count can be measured or entered manually.
    6.  **Data Transfer:** The measured data (offsets, tool ID) is transmitted to the FMS database or directly to the machine tool controller.

*   **Example:**
    *   An FMS is about to machine a part using a 10mm end mill. The end mill is loaded into a tool holder.
    *   This tool holder assembly is placed in a CNC presetter.
    *   The presetter's laser system identifies the cutting edge of the end mill and measures its overall length from the face of the tool holder.
    *   It also measures the diameter of the end mill.
    *   This data (e.g., Length Offset: 250.00mm, Diameter Offset: 10.00mm, Tool ID: EM10-2) is sent to the CNC machine's tool management system.
    *   When the FMS calls for EM10-2, the machine knows exactly how long and wide the tool is without needing to touch off at the machine.

### **5. Tool Management Systems (TMS) and Tool Preset Data Integration**

*   **Tool Management System (TMS):** A software-based system used in FMS to track, control, and manage all aspects of tool life, availability, and data.
*   **Integration with Presetting:**
    *   **Centralized Database:** Preset tool data is stored in a central TMS database accessible by all FMS components (CNC machines, AGVs, tool setters).
    *   **Automated Data Transfer:** Presetters are directly linked to the TMS, automatically uploading new or updated tool data.
    *   **Tool Assignment:** The TMS assigns specific tools (with their preset data) to particular jobs or operations based on requirements.
    *   **Tool Life Monitoring:** The TMS tracks the usage of each tool and flags it for replacement when its predicted life is reached.
    *   **Tool Inventory Management:** Helps maintain optimal inventory levels of tools and consumables.
    *   (Referenced from Groover, 2008)

### **6. Practice Questions and Exercises**

**Question 1:** Define tool presetting in the context of Flexible Manufacturing Systems.
**Answer:** Tool presetting is the process of accurately measuring and recording the dimensions and geometry of cutting tools *before* they are installed in the FMS work area. This ensures that the machine control system has the correct information for precise tool positioning, thereby reducing setup time and improving accuracy.

**Question 2:** List at least three key parameters that are typically measured during tool presetting.
**Answer:**
1.  Overall Tool Length
2.  Tool Diameter
3.  Tool Nose Radius (for contouring)
4.  (Other valid answers include: Cutting edge angle, Flute length, Reach/Overhang)

**Question 3:** Explain why tool presetting is essential for unattended machining in an FMS.
**Answer:** Unattended machining requires the FMS to operate without human intervention at the machine. Tool presetting eliminates the need for manual "touch-off" procedures at the machine to determine tool dimensions. By having pre-measured and verified tool data, the FMS controller can accurately command tool movements and machining operations, ensuring consistent quality and preventing collisions, even when no operator is present.

**Question 4:** What is the role of a Tool Management System (TMS) in conjunction with tool presetting?
**Answer:** The TMS acts as a central repository and controller for all tool-related information. It receives the preset tool data from presetters, stores it in a database, and then makes this data available to the FMS controllers. The TMS uses this data for tool assignment to specific operations, monitors tool life based on usage, and manages tool inventory, ensuring the right tools are available at the right time with the correct parameters.

**Question 5 (Scenario-based):** An FMS is configured with a pallet shuttle system, CNC machining centers, and an Automated Storage and Retrieval System (ASRS) for tools. A new product requires a series of operations including milling, drilling, and tapping. Describe the role of tool presetting in preparing the tools for this new product.
**Answer:**
1.  **Tool Identification:** The required tools (end mills, drills, taps, and their respective holders) for the new product are identified based on the CAM program.
2.  **Tool Loading:** Each tool is securely loaded into its designated tool holder.
3.  **Presetting:** The assembled tool holders are then taken to the tool presetter.
4.  **Measurement:** The presetter measures critical parameters such as length, diameter, and possibly other geometry for each tool.
5.  **Data Recording:** This measured data, along with a unique tool identifier (e.g., Tool ID), is recorded.
6.  **Data Transfer:** The preset tool data is transferred to the FMS's central Tool Management System (TMS).
7.  **Storage and Retrieval:** The ASRS receives information about the tools and their preset data from the TMS.
8.  **Tool Loading onto AGV/Magazine:** When a specific operation is scheduled, the TMS instructs the ASRS to deliver the correct tool (with its associated preset data) to a waiting AGV or directly to a machine tool magazine.
9.  **Machine Execution:** The CNC machine receives the tool and its preset data, allowing it to execute the programmed machining operations accurately without manual setup.

### **7. Highlight Important Points to Remember**

*   **Accuracy is King:** Tool presetting is about achieving high accuracy *before* the tool reaches the machine.
*   **Data is Critical:** The quality of the preset data directly impacts machining accuracy and part quality.
*   **Automation Enabler:** Tool presetting is a fundamental requirement for achieving true automation and unattended operation in FMS.
*   **Time Saver:** It significantly reduces machine setup and changeover times.
*   **Integrates with TMS:** Preset data must be seamlessly integrated with the FMS's Tool Management System for full benefit.
*   **Tool Holder Matters:** The presetting process measures the *tool assembly* (tool + holder).

---
This concludes the study notes for **Cutting Tools and Tool Management - Tool Preset** within Module 3 of Flexible Manufacturing Systems. Remember to connect these concepts to the overall goals of flexibility, efficiency, and automation that define FMS.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
