---
title: "Identification and Data Transfer."
subject: "FLEXIBLE MANUFACTURING SYSTEMS"
module: "Module 3: Computer aided programme generation & Product Manufacturing"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464129"
status: "completed"
scrapedAt: "2026-05-20T18:13:28.478Z"
---
# Flexible Manufacturing Systems: Module 3 - Computer-Aided Programme Generation & Product Manufacturing

## Topic: Identification and Data Transfer

This module delves into the crucial aspects of how products are identified and how the necessary manufacturing data is transferred within a Flexible Manufacturing System (FMS). This is fundamental for enabling the automated and flexible nature of FMS operations.

**Course Outcomes Addressed:**

*   **CO1:** Understand the basic components, layout configurations, and functions of Flexible Manufacturing Systems (FMS). (Knowledge Level: K2)
*   **CO3:** Apply the knowledge of CAD and CAM considerations in planning and implementing FMS. (Knowledge Level: K3)

**Learning Outcomes Covered:**

*   Identification of products in an FMS environment.
*   Methods and technologies for data transfer within an FMS.

---

### 1. Product Identification in FMS

Effective product identification is paramount in an FMS to ensure that the correct parts are routed to the appropriate workstations, processed with the correct programs, and handled by the right tooling. This identification allows the FMS to dynamically reconfigure itself for different product types.

#### 1.1 Why is Product Identification Crucial in FMS?

*   **Automated Routing:** Directs parts to the correct CNC machines, assembly stations, or inspection points.
*   **Program Selection:** Ensures that the correct CNC program (e.g., G-code) is loaded for the specific part being machined.
*   **Tool Management:** Facilitates the selection and loading of the correct tools for each operation.
*   **Process Control:** Enables real-time monitoring and adjustment of manufacturing parameters based on the identified product.
*   **Inventory Management:** Tracks the movement and status of parts throughout the system.
*   **Flexibility:** Allows the FMS to switch between different product types seamlessly without manual intervention.

#### 1.2 Methods of Product Identification

Several methods are employed for identifying products in an FMS, ranging from simple manual inputs to highly automated sensing techniques.

*   **Barcodes and QR Codes:**
    *   **Description:** Linear (1D) barcodes or 2D Quick Response (QR) codes are printed or affixed to parts, fixtures, or pallets. Scanners read these codes to identify the product.
    *   **Advantages:** Relatively inexpensive, widely adopted technology, can store a moderate amount of information (especially QR codes).
    *   **Disadvantages:** Requires line-of-sight, can be damaged by dirt, oil, or physical impact.
    *   **Textbook Reference:** Luggen (1991) discusses barcode technology for material handling and tracking in automated systems.

*   **Radio-Frequency Identification (RFID):**
    *   **Description:** RFID tags are embedded with a microchip and an antenna, allowing them to transmit identification data wirelessly to a reader. Tags can be passive (powered by the reader's radio waves) or active (powered by a battery).
    *   **Advantages:** No line-of-sight required, can read multiple tags simultaneously, more robust against environmental factors, can store more data than barcodes, can be read at a greater distance.
    *   **Disadvantages:** Higher initial cost compared to barcodes, potential interference from metal or other radio frequencies.
    *   **Textbook Reference:** Shivanand, Benal, and Koti (2006) likely cover advancements in identification technologies, including RFID, for modern FMS.

*   **Machine Vision Systems:**
    *   **Description:** Cameras capture images of parts, and sophisticated software analyzes these images to identify features, patterns, or even embedded markers.
    *   **Advantages:** Highly versatile, can identify parts based on shape, color, or even unique surface characteristics. Can be used for quality inspection simultaneously.
    *   **Disadvantages:** Can be complex to set up and calibrate, sensitive to lighting conditions and variations in appearance, higher cost.
    *   **Textbook Reference:** Groover (2008) provides extensive coverage of machine vision in automated manufacturing and its role in identification and inspection.

*   **Proximity Sensors and Reed Switches:**
    *   **Description:** These sensors can detect the presence or absence of specific features (e.g., a specific pin or notch on a fixture) or can be triggered by magnetic signals.
    *   **Advantages:** Simple, reliable, and cost-effective for basic identification.
    *   **Disadvantages:** Limited information capacity, typically only confirms presence or absence, not specific product type.

*   **Manual Data Entry:**
    *   **Description:** Operators manually input product information at workstations or control stations.
    *   **Advantages:** Simple and requires no special hardware for identification.
    *   **Disadvantages:** Prone to human error, slow, and defeats the purpose of automation. Generally used as a fallback or for initial setup.

#### 1.3 Pallet/Fixture Identification

In many FMS, parts are mounted on standardized pallets or fixtures. Identifying these pallets/fixtures is crucial for the system to know what is on them and where they need to go.
*   **Methods:** Barcodes, RFID tags, or even specific physical configurations of the pallet can be used.
*   **Example:** A pallet might have a barcode indicating it holds "Part A, Operation 3," which tells the FMS to route it to Machine X for milling.

#### 1.4 Key Considerations for Product Identification:

*   **Robustness:** The identification method must be resilient to the manufacturing environment (coolants, chips, vibrations, etc.).
*   **Accuracy:** High accuracy is essential to prevent routing errors and incorrect program execution.
*   **Speed:** Identification should be fast enough not to be a bottleneck in the system.
*   **Integration:** The identification system must seamlessly integrate with the FMS control system.
*   **Cost-Effectiveness:** The chosen method should offer the best balance of functionality and cost.

---

### 2. Data Transfer in FMS

Once a product is identified, the FMS needs to transfer a significant amount of data to various components to execute the manufacturing process. This data can include manufacturing instructions, tool data, quality parameters, and material handling commands.

#### 2.1 Types of Data Transferred:

*   **Manufacturing Process Data:**
    *   **CNC Programs (G-code/M-code):** Instructions for the machine tools (e.g., cutting paths, spindle speeds, feed rates, tool changes).
    *   **CAD/CAM Data:** Geometric models, toolpath information, fixture locations.
    *   **Assembly Instructions:** Sequence of operations, component placement.
*   **Tooling Data:**
    *   **Tool Identifiers:** Which tool to use.
    *   **Tool Geometry:** Length, diameter, and other dimensions for tool length compensation.
    *   **Tool Wear Information:** Real-time or predicted wear for tool life management.
*   **Material Handling Data:**
    *   **Routing Instructions:** Which AGV or conveyor to use, destination of the part.
    *   **Pallet/Fixture Information:** Location, status.
*   **Quality Control Data:**
    *   **Inspection Parameters:** Tolerances, measurement points.
    *   **Measurement Results:** Feedback from inspection stations.
*   **System Status and Diagnostics:**
    *   **Machine Status:** Idle, running, fault.
    *   **Sensor Readings:** Temperature, pressure, vibration.

#### 2.2 Data Transfer Mechanisms and Technologies:

The FMS relies on a robust network infrastructure and communication protocols to transfer data efficiently and reliably.

*   **Local Area Networks (LANs):**
    *   **Description:** Wired (e.g., Ethernet) or wireless networks connecting various FMS components like CNC machines, robots, AGVs, and control computers.
    *   **Protocols:** Ethernet/IP, Modbus TCP/IP, Profinet are common industrial Ethernet protocols.
    *   **Reference:** Maleki (1991) likely discusses the importance of integrated communication networks for FMS operations.

*   **Direct Numerical Control (DNC):**
    *   **Description:** A system for transmitting CNC programs from a central computer to multiple CNC machines. Modern DNC systems can also receive data back from the machines.
    *   **Functionality:** Program storage, distribution, and management.
    *   **Textbook Reference:** Groover (2008) extensively covers DNC and its evolution within CIM systems.

*   **Manufacturing Message Specification (MMS) / Manufacturing Automation Protocol (MAP):**
    *   **Description:** Historically significant standards for factory floor communication, aiming to provide interoperability between different vendors' equipment. While less prevalent in their original forms, their principles inform modern protocols.
    *   **Purpose:** Standardized communication between machines and higher-level control systems.

*   **Wireless Communication:**
    *   **Description:** Wi-Fi, Bluetooth, or cellular technologies for mobile equipment like AGVs or for flexibility in factory layouts.
    *   **Considerations:** Reliability, security, and interference are critical for industrial wireless applications.
    *   **Reference:** Lenz and Eppinger (1989) might discuss early concepts of distributed control and data sharing in flexible manufacturing.

*   **Fieldbus Systems:**
    *   **Description:** Serial communication protocols (e.g., PROFIBUS, DeviceNet) used for connecting sensors, actuators, and basic controllers to higher-level controllers.
    *   **Benefit:** Real-time data acquisition and control.

*   **Cloud Computing and IoT:**
    *   **Description:** Increasingly, FMS data is being sent to cloud platforms for advanced analytics, remote monitoring, predictive maintenance, and integration with enterprise resource planning (ERP) systems.
    *   **Implication:** Requires robust cybersecurity and data management strategies.

#### 2.3 The Role of CAD/CAM in Data Transfer:

CAD (Computer-Aided Design) and CAM (Computer-Aided Manufacturing) are the primary sources of manufacturing data.

*   **CAD:** Creates the geometric model of the part.
*   **CAM:**
    *   Generates toolpaths based on the CAD model and machining strategies.
    *   Simulates the machining process to detect collisions and optimize tool movements.
    *   Generates NC (Numerical Control) code (G-code) that machines understand.
    *   Can also define fixture locations and clamping strategies.

    The output of CAM software (e.g., NC files, tool definitions) is the primary data that needs to be transferred to the FMS.

#### 2.4 Data Transfer for Tool Management:

*   **Tool Identifiers:** Sent to the CNC machine to select the correct tool from the Automatic Tool Changer (ATC).
*   **Tool Length and Radius Compensation:** Data for the CNC controller to adjust cutting paths based on actual tool dimensions, which might be measured by an automatic tool presetter.
*   **Tool Life Management:** Real-time data on tool usage is transferred to the control system to predict tool wear and trigger replacement before failure.

#### 2.5 Key Considerations for Data Transfer:

*   **Reliability:** Data must be transferred without errors or corruption.
*   **Speed:** Real-time or near-real-time transfer is often required for efficient operation.
*   **Security:** Protecting sensitive manufacturing data from unauthorized access or modification is crucial.
*   **Interoperability:** Ensuring that data can be exchanged between different hardware and software systems within the FMS.
*   **Standardization:** Using industry standards for data formats and communication protocols simplifies integration.

---

### Practice Questions and Exercises

**Question 1 (CO1, CO3):**
Explain why accurate product identification is critical for the successful operation of a Flexible Manufacturing System. List and briefly describe three common methods used for product identification in an FMS.

**Question 2 (CO3):**
How does the output of CAM software contribute to the data transfer process within an FMS? What types of data are typically generated by CAM that are essential for manufacturing?

**Question 3 (CO1, CO4):**
Imagine an FMS that manufactures automotive components. You are implementing a new product.
a) What identification method would you recommend for the raw material blanks entering the system, and why?
b) Once a part is machined, what data needs to be transferred to ensure it is correctly routed to an automated inspection station?

**Question 4 (CO3):**
Discuss the importance of DNC systems in the context of data transfer for CNC machines within an FMS. What are the advantages of using DNC over manual loading of programs?

---

### Answers to Practice Questions

**Answer 1:**
Accurate product identification is critical in an FMS because it allows the system to:
*   **Automate decision-making:** The FMS control system uses identification to determine which machine, program, and tooling should be used for each part.
*   **Ensure correct processing:** Prevents parts from being machined with the wrong parameters or sent to the wrong station, thus avoiding scrap and rework.
*   **Enable flexibility:** Allows the FMS to switch between different product types seamlessly without manual intervention, adapting to changing production demands.

Three common identification methods:
*   **Barcodes/QR Codes:** Printed or affixed codes read by scanners. Relatively inexpensive, but require line-of-sight and can be affected by environmental conditions.
*   **RFID:** Tags embedded with chips that transmit data wirelessly. No line-of-sight needed, more robust, and can store more data, but are more expensive.
*   **Machine Vision:** Cameras and software analyze images for identification. Highly versatile, can identify by shape or features, but are complex and sensitive to lighting.

**Answer 2:**
The output of CAM software is the primary source of manufacturing data for an FMS. It translates the design (CAD) into actionable instructions for the machines. Key data types generated by CAM include:
*   **NC Code (G-code/M-code):** The core instructions for CNC machines, dictating tool movements, speeds, feeds, and auxiliary functions.
*   **Toolpath Geometry:** The specific paths the cutting tools will follow.
*   **Tool Definitions:** Information about the tools required (type, size).
*   **Fixture and Workpiece Setup Information:** Locations for clamping, orientation of the part.
*   **Simulation Data:** Sometimes, CAM systems can output simulation data to verify the machining process before execution on the shop floor.

This data is then transferred to the FMS control system and distributed to the relevant machines.

**Answer 3:**
a) For raw material blanks, an **RFID tag** would be a strong recommendation.
    *   **Reasoning:** Raw materials are often handled in bulk, and RFID's ability to read multiple tags without line-of-sight is advantageous for efficiency. Furthermore, RFID tags are more robust against the typical shop floor environment (dirt, oil) compared to barcodes. It can also store batch information or origin details if needed.

b) Once a part is machined, data needs to be transferred to ensure correct routing to an automated inspection station. This data would likely include:
*   **Part Identifier:** To retrieve the correct inspection plan.
*   **Machining Status:** Confirmation that the part has completed its machining operations.
*   **Inspection Program/Parameters:** Which measurements to take, tolerances, and how to interpret results.
*   **Tooling Information (Optional but useful):** Which tools were used during machining can sometimes be relevant for correlating potential surface finish issues with tool wear.
*   **Routing Command:** To direct the AGV or conveyor to the inspection station.

**Answer 4:**
DNC (Direct Numerical Control) systems are vital for data transfer in FMS because they:
*   **Centralize Program Management:** Stores all CNC programs in a central location, ensuring version control and easy access.
*   **Automate Program Distribution:** Transmits the correct CNC program to the designated machine tool as required, eliminating manual loading.
*   **Reduce Errors:** Minimizes the risk of using outdated or incorrect programs, which can lead to scrap.
*   **Improve Machine Utilization:** Reduces downtime spent on manual program loading.
*   **Enable Real-time Communication:** Modern DNC systems can also receive data back from machines (e.g., program edits, machine status), facilitating feedback loops and system monitoring.

Using DNC moves away from manual methods like floppy disks or paper tapes, which are slow, error-prone, and incompatible with modern automated systems.

---

### Important Points to Remember:

*   **Product identification is the enabler of FMS flexibility.** Without it, the system cannot automatically adapt to different parts.
*   **No single identification method is universally best.** The choice depends on the application, cost, environment, and required data capacity.
*   **Data transfer is the backbone of FMS operation.** It ensures that every component receives the correct instructions at the right time.
*   **CAD/CAM are the primary generators of manufacturing data.** Their output must be compatible with the FMS data transfer infrastructure.
*   **Reliability and accuracy are paramount** for both identification and data transfer to prevent costly errors.
*   **Industrial communication protocols and robust networking** are essential for seamless data exchange.

---

This module provides a foundational understanding of how FMS identifies what it needs to build and how it communicates the necessary instructions. The efficiency and flexibility of an FMS are heavily reliant on the robust implementation of these identification and data transfer capabilities.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
