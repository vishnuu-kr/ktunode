---
title: "Automated Material Movement and Storage System- Automated Storage and Retrieval Systems (AS/RS)"
subject: "FLEXIBLE MANUFACTURING SYSTEMS"
module: "Module 3: Computer aided programme generation & Product Manufacturing"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464126"
status: "completed"
scrapedAt: "2026-05-20T18:13:26.424Z"
---
# Flexible Manufacturing Systems (FMS) - Module 3: Computer Aided Programme Generation & Product Manufacturing

## Topic: Automated Material Movement and Storage System - Automated Storage and Retrieval Systems (AS/RS)

This module focuses on how computer-aided generation of programs and product manufacturing aspects integrate with the automated movement and storage of materials within a Flexible Manufacturing System (FMS). A crucial component of this is the **Automated Storage and Retrieval System (AS/RS)**.

---

### 1. Introduction to Automated Material Movement and Storage Systems in FMS

**Objective:** To understand the importance of efficient material handling and storage in FMS operations.

*   **Why Automated Material Movement?**
    *   **Reduces manual labor:** Minimizes human intervention, leading to increased safety and reduced costs.
    *   **Increases throughput:** Faster and more reliable movement of materials compared to manual methods.
    *   **Improves accuracy:** Reduces errors in transporting and placing materials.
    *   **Enhances flexibility:** Can adapt to different material types and delivery routes.
    *   **Optimizes space utilization:** Enables efficient use of factory floor space.
    *   **Integrates with production:** Seamless flow of materials to and from production machines.

*   **Types of Automated Material Movement Systems in FMS:**
    *   **Conveyor Systems:** Fixed or flexible routes for transporting parts and products.
    *   **Automated Guided Vehicles (AGVs):** Unmanned vehicles that follow defined paths (wire-guided, laser-guided, vision-guided) for flexible transport. (Refer to Luggen, 1991 for detailed discussion on AGVs in FMS).
    *   **Robotic Transfer Systems:** Industrial robots used for picking and placing materials.
    *   **Overhead Cranes and Monorails:** For heavy loads and specific layout configurations.
    *   **Automated Storage and Retrieval Systems (AS/RS):** The focus of this topic, designed for efficient storage and retrieval of raw materials, work-in-progress, and finished goods.

*   **Why Automated Storage and Retrieval Systems (AS/RS)?**
    *   **Maximize space utilization:** Vertical storage allows for higher densities than traditional shelving.
    *   **Minimize inventory handling time:** Rapid retrieval and put-away of items.
    *   **Improve inventory accuracy:** Computerized tracking reduces errors.
    *   **Enhance production control:** Provides immediate access to necessary materials.
    *   **Reduce damage to materials:** Controlled handling minimizes risks.
    *   **Integrate with other FMS components:** Links storage to production machines and logistics.

**(Corresponds to CO4: Understand the automated material movement, storage systems, and tool management in FMS operations.)**

---

### 2. Understanding Automated Storage and Retrieval Systems (AS/RS)

**Objective:** To define AS/RS and understand its fundamental components and operation.

*   **Definition:**
    An AS/RS is a computer-controlled system that automatically places and retrieves items from designated storage areas. It typically consists of a range of automated equipment, including storage structures, aisles, and material handling devices. (Shivanand, Benal, Koti, 2006).

*   **Key Components of an AS/RS:**
    *   **Storage Structure:**
        *   **Racking/Shelving:** The physical framework holding the storage locations. Can be single-aisle or multiple-aisle.
        *   **Storage Aisles:** Passageways between racking where handling equipment operates.
    *   **Handling Equipment (Storage/Retrieval Machines - SRMs):**
        *   **Stacker Cranes (or Stackers):** The most common type. These are automated machines that travel vertically and horizontally within the aisles to access storage locations.
            *   *Types of SRMs:*
                *   **Conventional:** Operate in single aisles.
                *   **Transporters:** Can move between aisles, increasing flexibility.
                *   **Carrier-based:** Use a carrier to move horizontally and then a lifting mechanism to move vertically.
        *   **Other Handling Devices:** Forklifts, Automated Guided Vehicles (AGVs) can also be integrated into AS/RS for specific applications.
    *   **Input/Output (I/O) Stations:**
        *   Where incoming materials are deposited into the AS/RS and where retrieved items are placed for further processing or outbound movement.
        *   Often include automated identification systems (e.g., barcode scanners, RFID readers).
    *   **Control System:**
        *   The "brain" of the AS/RS.
        *   **Hardware:** Computers, Programmable Logic Controllers (PLCs), sensors, motors, actuators.
        *   **Software:** Warehouse Management System (WMS) or Storage and Retrieval Management System (SRMS). This software manages inventory, assigns storage locations, directs the SRMs, and interfaces with other FMS control systems.

**(Corresponds to CO4: Understand the automated material movement, storage systems, and tool management in FMS operations.)**

---

### 3. Types of AS/RS Configurations

**Objective:** To understand the various physical layouts and operational principles of different AS/RS types.

AS/RS can be categorized based on their physical structure and operational characteristics.

*   **Unit Load AS/RS:**
    *   Designed to handle standard-sized loads, such as pallets, totes, or containers.
    *   **Single Deep Storage:** Each storage opening holds one unit load.
    *   **Double Deep Storage:** Two unit loads are stored one behind the other in a single opening, requiring a special extending fork on the SRM.
    *   **Multi-Deep Storage:** Multiple unit loads are stored in depth.

*   **Small Load AS/RS:**
    *   Handles smaller items, often in bins or trays.
    *   **Man-on-Board AS/RS:** The operator rides on the SRM to pick and place items (less common now, but was an early form).
    *   **Carrier AS/RS:** Items are placed in carriers that are moved by the SRM.
    *   **Carousel AS/RS:**
        *   **Horizontal Carousel:** Rotating horizontal loops of shelves. Items are brought to the operator.
        *   **Vertical Carousel:** Rotating vertical columns of shelves. Items are brought to the operator at a fixed pick station.
        *   *Advantages:* Good for order picking and high-density storage of smaller items. (Luggen, 1991).

*   **Automated Storage and Retrieval for Manufacturing (AS/RS in FMS context):**
    *   **Tool AS/RS:** Specifically designed to store and manage manufacturing tools (e.g., cutters, fixtures, molds). They ensure that the correct tool is delivered to the correct machine at the correct time, a critical aspect of FMS operation. (Maleki, 1991; Shivanand, Benal, Koti, 2006).
    *   **Work-in-Progress (WIP) Buffers:** Used to temporarily store partially completed products between manufacturing operations, allowing for better flow control and decoupling of workstations.
    *   **Raw Material Storage:** Storing incoming raw materials (e.g., metal coils, sheets, blanks) in an organized and accessible manner.

**(Corresponds to CO1: Understand the basic components, layout configurations, and functions of Flexible Manufacturing Systems (FMS). CO4: Understand the automated material movement, storage systems, and tool management in FMS operations.)**

---

### 4. Operation and Control of AS/RS

**Objective:** To understand how AS/RS is controlled and how it interacts with other FMS elements.

*   **Core Functions:**
    *   **Put-away:** Receiving an item, assigning it a storage location, and transporting it to that location.
    *   **Retrieval:** Locating an item, transporting it from its storage location to an output station.
    *   **Inventory Management:** Maintaining a real-time record of what is stored, where it is stored, and its quantity.

*   **Control System Architecture:**
    *   **Warehouse Management System (WMS) / Storage and Retrieval Management System (SRMS):** The high-level software that manages all AS/RS operations.
        *   Receives orders from the FMS host computer or other systems.
        *   Determines optimal storage locations based on various criteria (e.g., frequency of access, product compatibility, space availability).
        *   Generates commands for the SRMs.
        *   Tracks the status of the AS/RS and its inventory.
    *   **Machine Control System (MCS):** Typically PLC-based systems that directly control the movement of the SRMs, sensors, and I/O stations.
    *   **Interface:** Communication protocols link the WMS/SRMS to the MCS and the overall FMS control system. This is crucial for seamless integration. (Groover, 2008).

*   **Decision Making in AS/RS Control:**
    *   **Storage Assignment Policies:**
        *   **Random Storage:** Items are stored in any available location. Simple but can lead to longer retrieval times.
        *   **Dedicated Storage:** Specific locations are assigned to specific items. Good for high-volume, frequently accessed items.
        *   **Class-Based Storage:** Items are grouped into classes (e.g., fast-moving, medium-moving, slow-moving). Storage locations are assigned based on class to minimize travel distances for fast-moving items.
    *   **Retrieval Algorithms:**
        *   **First-In, First-Out (FIFO):** Items are retrieved in the order they were stored.
        *   **Last-In, First-Out (LIFO):** Items are retrieved in the reverse order of storage.
        *   **Best Fit:** Selects the closest available location for storage.
        *   **Nearest Available:** Retrieves from the closest storage location.

**(Corresponds to CO1: Understand the basic components, layout configurations, and functions of Flexible Manufacturing Systems (FMS). CO3: Apply the knowledge of CAD and CAM considerations in planning and implementing FMS. CO4: Understand the automated material movement, storage systems, and tool management in FMS operations.)**

---

### 5. AS/RS in the Context of FMS and Computer-Aided Programming

**Objective:** To understand how AS/RS integrates with other FMS elements and how CAD/CAM influences its design and operation.

*   **Integration with Production Machines:**
    *   AS/RS acts as a buffer, supplying raw materials, semi-finished parts, and tools to CNC machines, robots, and assembly stations.
    *   It receives finished products or partially completed items for storage.
    *   This automated material flow is essential for achieving the "flexible" aspect of FMS, allowing for quick changeovers and efficient production of diverse product mixes.

*   **Role in Tool Management:**
    *   **Tool AS/RS:** Stores, tracks, and dispenses cutting tools, fixtures, and other tooling.
    *   **Automated Tool Changers:** AS/RS can be directly linked to automatic tool changers on CNC machines, ensuring that the correct tool is delivered.
    *   **Tool Life Monitoring:** The FMS control system, in conjunction with AS/RS data, can track tool usage and proactively request new tools from the AS/RS before existing ones fail. (Maleki, 1991). This is a key aspect of unattended machining and supports CO2.

*   **Impact of CAD/CAM on AS/RS:**
    *   **CAD (Computer-Aided Design):**
        *   **Product Design:** The design of the product dictates the size and type of containers or pallets needed for storage.
        *   **Facility Layout:** CAD is used to design the factory layout, including the placement of AS/RS within the FMS cell or system. This involves simulating material flow to optimize space and reduce travel distances.
        *   **AS/RS Design:** AS/RS components themselves (racking, SRMs) are often designed using CAD software.
    *   **CAM (Computer-Aided Manufacturing):**
        *   **Production Planning:** CAM systems generate the machining programs for CNC machines.
        *   **Material Requirements:** CAM output can inform the FMS control system about the types and quantities of materials and tools needed, which are then requested from the AS/RS.
        *   **Scheduling:** AS/RS integration with production scheduling ensures timely availability of parts and tools, optimizing machine utilization.

**(Corresponds to CO1: Understand the basic components, layout configurations, and functions of Flexible Manufacturing Systems (FMS). CO3: Apply the knowledge of CAD and CAM considerations in planning and implementing FMS. CO4: Understand the automated material movement, storage systems, and tool management in FMS operations.)**

---

### 6. Benefits and Challenges of AS/RS in FMS

**Objective:** To evaluate the advantages and disadvantages of implementing AS/RS.

*   **Benefits:**
    *   **Increased Space Utilization:** Vertical storage significantly increases storage capacity compared to traditional methods.
    *   **Improved Inventory Accuracy:** Computerized tracking reduces errors.
    *   **Reduced Labor Costs:** Minimizes the need for manual material handlers.
    *   **Faster Material Handling:** Quick retrieval and put-away times.
    *   **Enhanced Throughput:** Seamless flow of materials to production machines.
    *   **Improved Working Environment:** Reduced congestion and improved safety.
    *   **Better Control and Visibility:** Real-time inventory data.
    *   **Support for Unattended Operation:** Crucial for lights-out manufacturing. (Supports CO2).

*   **Challenges:**
    *   **High Initial Investment Cost:** AS/RS systems can be expensive to design, purchase, and install.
    *   **Complexity of Integration:** Requires careful integration with existing FMS controls and enterprise resource planning (ERP) systems.
    *   **Maintenance Requirements:** Sophisticated machinery requires regular and specialized maintenance.
    *   ** inflexibility to Product Mix Changes:** While AS/RS is designed for flexibility, significant changes in product size or handling requirements might necessitate modifications.
    *   **Single Point of Failure:** If the AS/RS control system fails, it can halt the entire production process. Redundancy is often built in to mitigate this.
    *   **Need for Standardized Loads:** Requires consistent packaging and unitization of materials.

**(Corresponds to CO1: Understand the basic components, layout configurations, and functions of Flexible Manufacturing Systems (FMS).)**

---

### 7. Practice Questions and Exercises

**Objective:** To test understanding of AS/RS concepts.

**Question 1:**
What are the primary components of a typical Automated Storage and Retrieval System (AS/RS)? Briefly describe the function of each.
*(Level: K2, Aligns with CO1, CO4)*

**Answer:**
The primary components of an AS/RS are:
1.  **Storage Structure:** The physical framework (racking/shelving) that holds the storage locations.
2.  **Handling Equipment (SRM):** Automated machines (e.g., stacker cranes) that move horizontally and vertically to access storage locations.
3.  **Input/Output (I/O) Stations:** Points where materials enter and exit the AS/RS.
4.  **Control System:** The computer hardware and software (WMS/SRMS) that manage inventory and direct the handling equipment.

**Question 2:**
Explain the role of an AS/RS in a Flexible Manufacturing System (FMS) with respect to tool management.
*(Level: K2, Aligns with CO4)*

**Answer:**
In an FMS, a Tool AS/RS stores, tracks, and dispenses cutting tools, fixtures, and other tooling. It ensures that the correct tool is delivered to the correct machine at the correct time, often interacting with automated tool changers. This facilitates unattended machining operations and reduces downtime associated with manual tool changes.

**Question 3:**
A company is designing a new FMS cell. How would CAD and CAM considerations influence the selection and implementation of an AS/RS?
*(Level: K3, Aligns with CO3)*

**Answer:**
*   **CAD:** Influences AS/RS by defining the physical layout of the FMS cell, determining the size and shape of storage locations based on product designs and containerization, and enabling simulation of material flow to optimize AS/RS placement.
*   **CAM:** Influences AS/RS by generating production schedules and material requirements. The CAM system's output can inform the AS/RS control system about which parts and tools are needed for upcoming operations, allowing for pre-emptive retrieval and staging.

**Question 4:**
What are the main advantages of using an AS/RS compared to a manual storage system in a manufacturing environment?
*(Level: K2, Aligns with CO1)*

**Answer:**
The main advantages include:
*   Increased space utilization (vertical storage).
*   Improved inventory accuracy.
*   Reduced labor costs.
*   Faster material handling.
*   Enhanced throughput.
*   Improved safety and working environment.

**Question 5 (Scenario-based):**
Consider an FMS producing automotive components. The FMS includes CNC machining centers, robotic assembly, and automated material handling. If the goal is to reduce the time spent waiting for materials and tools at the machining centers and to enable longer periods of unattended operation, what type of AS/RS would be most beneficial and why?
*(Level: K3, Aligns with CO1, CO4)*

**Answer:**
A **Unit Load AS/RS** handling pallets of raw materials and a dedicated **Tool AS/RS** would be most beneficial.
*   The Unit Load AS/RS can store and deliver raw material pallets to machining stations, ensuring a continuous supply and reducing waiting times.
*   The Tool AS/RS is critical for delivering the correct tools to the machining centers, supporting unattended operation by providing a ready supply of tools, managing tool replacements, and reducing the need for human intervention. This combination directly addresses the goals of reducing waiting time and enabling unattended operation.

---

### 8. Important Points to Remember

*   **AS/RS is a key enabler of automation and efficiency in FMS.** It bridges the gap between storage and production.
*   **Storage density and speed are primary advantages of AS/RS.**
*   **The Control System (WMS/SRMS) is the intelligence behind AS/RS.**
*   **Tool AS/RS plays a vital role in supporting unattended manufacturing within an FMS.**
*   **Integration with other FMS components (CNC machines, AGVs, host systems) is crucial for optimal performance.**
*   **CAD/CAM plays a significant role in the design, planning, and operational control of AS/RS within an FMS context.**
*   **While AS/RS offers substantial benefits, the high initial cost and complexity of integration are important considerations.**

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### References

*   **Shivanand H.K., Benal MM, Koti V (2006).** *Flexible Manufacturing System*. New Age International (P) Limited, New Delhi.
*   **Luggen, William W (1991).** *Flexible Manufacturing Cells and System*. Prentice Hall of Inc, New Jersey.
*   **Maleki, Reza A (1991).** *Flexible Manufacturing System*. Prentice Hall of Inc, New Jersey.
*   **Lenz, John E, Eppinger, D (1989).** *Flexible Manufacturing*. Marcel Dekker Inc, New York.
*   **Kalpakjin (1995).** *Manufacturing Engineering and Technology*. Addison Wesley Publishing.
*   **Groover, Mikell P (2008).** *Automation, Production Systems and Computer Integrated Manufacturing*. PHI.

---