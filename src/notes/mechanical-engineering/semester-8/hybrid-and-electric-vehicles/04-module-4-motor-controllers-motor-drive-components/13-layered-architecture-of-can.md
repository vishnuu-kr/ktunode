---
title: "layered architecture of CAN."
subject: "HYBRID AND ELECTRIC VEHICLES"
module: "Module 4: Motor controllers – motor drive components"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf480446446a"
status: "completed"
scrapedAt: "2026-05-20T18:21:19.347Z"
---
# HYBRID AND ELECTRIC VEHICLES: Module 4 - Motor Controllers – Motor Drive Components

## Topic: Layered Architecture of CAN

### Introduction

The Controller Area Network (CAN) is a robust vehicle bus standard designed to allow microcontrollers and devices to communicate with each other's applications without a host computer. In the context of Hybrid and Electric Vehicles (HEVs and EVs), CAN is a fundamental communication protocol for inter-component data exchange, ensuring synchronized operation and fault detection. This topic delves into the layered architecture of CAN, explaining how it facilitates reliable communication within the complex automotive environment.

**Relevant Course Outcomes:**

*   **CO3: Describe various motors and drives of Electric vehicles. (Knowledge Level: K2)** - Understanding CAN's role in motor control is crucial for describing EV motor drives.
*   **CO4: Explain details of power transmission of Electric vehicles and select the appropriate components based on requirement. (Knowledge Level: K3)** - CAN facilitates the coordination of various power transmission components, from the battery to the motor.

### 1. What is CAN?

*   **Definition:** CAN is a serial communication protocol designed for real-time applications, widely used in automotive systems. It is a message-based protocol, meaning that data is transmitted in messages (frames) rather than by addresses.
*   **Key Features:**
    *   **Robustness:** Designed to withstand harsh automotive environments (electrical noise, temperature variations).
    *   **Message Broadcasting:** All nodes on the network receive all messages.
    *   **Prioritization:** Messages are prioritized based on their identifier (ID), allowing critical messages to get through first.
    *   **Error Detection and Handling:** Built-in mechanisms to detect and report errors, ensuring data integrity.
    *   **Multi-master Capability:** Any node can initiate a message transmission.
    *   **Cost-Effective:** Relatively simple hardware requirements contribute to its widespread adoption.

**Referenced from:**

*   **Husain, Iqbal. *Electric and Hybrid Vehicles*: Design Fundamentals. 2nd ed., CRC Press, 2010.** - Likely discusses CAN as a key communication protocol for HEV/EV control systems.
*   **Ehsani, Mehrdad, et al. *Modern Electric, Hybrid Electric and Fuel Cell Vehicles*: Fundamentals, Theory and Design. 3rd ed., CRC Press, 2018.** - Would extensively cover CAN's role in managing the complex interactions of EV powertrain components.
*   **Larminie, James, and John Lowry. *Electric Vehicle Technology Explained*. 2nd ed., Wiley-Blackwell, 2012.** - Likely provides a foundational understanding of CAN for EV systems.

### 2. The Need for a Layered Architecture

Similar to other communication protocols like TCP/IP, CAN utilizes a layered approach to manage the complexity of data transmission. This layering breaks down the communication process into distinct, manageable functions, allowing for modularity, standardization, and easier development and troubleshooting.

**Importance of Layering in CAN:**

*   **Abstraction:** Hides the complexities of the physical layer from higher layers, allowing developers to focus on application-specific logic.
*   **Modularity:** Allows for easier modification or replacement of individual layers without affecting others.
*   **Standardization:** Enables interoperability between devices from different manufacturers.
*   **Scalability:** Facilitates the addition of new functionalities by introducing new layers or services.

### 3. CAN's Layered Architecture (Simplified Model)

The CAN protocol specification, as defined by ISO 11898, is typically viewed as having a simplified layered architecture, often deviating from the full seven-layer OSI model. The two most commonly discussed layers are the **Physical Layer** and the **Data Link Layer**.

#### 3.1. Physical Layer

This layer defines the electrical and mechanical aspects of the CAN network, ensuring that signals can be reliably transmitted and received over the physical medium.

*   **Key Functions:**
    *   **Signaling:** Defines how bits are represented as electrical signals on the bus (e.g., voltage levels).
    *   **Transmission Medium:** Specifies the type of cabling and connectors used (e.g., twisted-pair copper wires).
    *   **Bus Topology:** Describes how nodes are connected (typically a linear bus).
    *   **Transceiver:** The electronic component that converts logic-level signals from the microcontroller into the electrical signals suitable for the bus, and vice-versa. It also provides protection against electrical disturbances.
    *   **Termination:** Resistors at each end of the bus to prevent signal reflections.

*   **Key Concepts:**
    *   **Dominant and Recessive Bits:** CAN uses a two-wire differential signaling scheme.
        *   **Dominant:** Represents a logic '0'. On the bus, it's typically when the voltage difference between the two wires is zero.
        *   **Recessive:** Represents a logic '1'. On the bus, it's typically when there's a specific voltage difference between the wires.
    *   **Bit Stuffing:** To ensure the proper synchronization of receivers and to prevent long strings of identical bits that could lead to loss of synchronization, the CAN protocol inserts an extra "stuffed" bit of opposite polarity after five consecutive bits of the same polarity. This stuffed bit is removed by the receiver.
    *   **CAN Transceiver IC:** Essential component (e.g., MCP2551, SN65HVD230) that interfaces the CAN controller with the physical CAN bus.

*   **Example:** In a typical CAN implementation, the two wires are CAN High (CAN_H) and CAN Low (CAN_L). When transmitting a dominant bit (0), CAN_H is driven to a higher voltage (e.g., 3.5V) and CAN_L to a lower voltage (e.g., 1.5V), resulting in a voltage difference. For a recessive bit (1), both CAN_H and CAN_L are held at intermediate voltages (e.g., 2.5V), resulting in a zero voltage difference.

**Referenced from:**

*   **Larminie, James, and John Lowry. *Electric Vehicle Technology Explained*. 2nd ed., Wiley-Blackwell, 2012.** - Likely provides detailed explanations of the physical layer signaling and transceiver functionality.
*   **Denton, T. *Electric and Hybrid Vehicles*. 2nd ed., CBS Publishers & Distributors Pvt. Ltd., 2020.** - May cover the practical aspects of CAN wiring and termination in vehicle applications.

#### 3.2. Data Link Layer

This layer is responsible for the reliable transfer of data frames between nodes on the network. It handles the framing of messages, error detection, and arbitration.

*   **Key Functions:**
    *   **Framing:** Structures the data into specific message formats (frames).
    *   **Arbitration:** Manages bus access when multiple nodes attempt to transmit simultaneously.
    *   **Error Detection:** Implements mechanisms to detect corrupted messages.
    *   **Error Signaling:** Notifies other nodes when an error is detected.
    *   **Acknowledgement:** Confirms successful reception of a message.

*   **Key Concepts:**
    *   **CAN Frame Formats:** There are two primary frame formats:
        *   **Standard Frame (11-bit Identifier):** Used for older CAN versions.
        *   **Extended Frame (29-bit Identifier):** Allows for a larger number of unique message IDs.
    *   **CAN Frame Structure:** A typical CAN frame includes:
        *   **Start of Frame (SOF):** A single dominant bit that signals the beginning of a frame.
        *   **Arbitration Field:** Contains the message identifier (ID) and the Remote Transmission Request (RTR) bit. The ID determines the message priority.
        *   **Control Field:** Contains the IDE (Identifier Extension) bit, r0 (reserved bit), and the DLC (Data Length Code), which specifies the number of bytes in the data field.
        *   **Data Field:** Contains the actual payload of the message (0-8 bytes).
        *   **CRC Field:** Cyclic Redundancy Check provides error detection for the frame.
        *   **ACK Field:** Acknowledgement slot where receivers mark a successful reception.
        *   **End of Frame (EOF):** A sequence of seven recessive bits marking the end of the frame.
        *   **Interframe Space (IFS):** A period of idle bus time between frames.
    *   **Arbitration Process:**
        *   When multiple nodes transmit simultaneously, they start sending their identifier bits.
        *   The arbitration bus is non-destructive: if a node transmits a dominant bit (0) while another transmits a recessive bit (1), the dominant bit "wins."
        *   The node that transmits a dominant bit when it intended to send a recessive bit loses arbitration and stops transmitting until the bus is idle again.
        *   The message with the lowest numerical ID (and thus the most dominant bits at the beginning) wins arbitration. This ensures that higher-priority messages always get through first.
    *   **Error Detection Mechanisms:**
        *   **CRC (Cyclic Redundancy Check):** Calculated over the message content and checked by the receiver.
        *   **Bit Monitoring:** Each transmitter continuously monitors the bus while transmitting. If it detects a mismatch between the transmitted bit and the bus state, it signals an error.
        *   **Stuffing Error:** Detection of an illegal sequence of bits (more than five consecutive identical bits).
        *   **Frame Error:** Detection of an invalid bit pattern in certain parts of the frame (e.g., ACK slot, EOF).
        *   **Acknowledgement Error:** If a transmitter doesn't receive an ACK from any receiver.
    *   **Error Frames:** When an error is detected, a node transmits an Error Frame, which consists of a sequence of bits that violates the bit stuffing rules, thereby causing all other nodes to detect the error. Error Frames also have an ACK field, where the receiver that detected the error marks a recessive bit, and subsequent nodes also mark recessive bits.

**Referenced from:**

*   **Ehsani, Mehrdad, et al. *Modern Electric, Hybrid Electric and Fuel Cell Vehicles*: Fundamentals, Theory and Design. 3rd ed., CRC Press, 2018.** - This textbook is highly likely to detail the CAN frame structure, arbitration, and error handling mechanisms, especially as they relate to EV powertrain control.
*   **Husain, Iqbal. *Electric and Hybrid Vehicles*: Design Fundamentals. 2nd ed., CRC Press, 2010.** - Will likely cover the data link layer's role in ensuring reliable communication between control units.
*   **Dhameja, S. *Electric Vehicle Battery Systems*. Newnes, 2001.** - While focused on batteries, it might touch upon how CAN is used to communicate battery status and commands.

### 4. Higher Layers (Implicitly or via Gateway)

While the CAN specification itself primarily defines the Physical and Data Link layers, real-world CAN implementations in vehicles often involve higher-level protocols or gateways to manage application data.

*   **CAN Application Layer:** In a broader sense, this layer defines how data is structured and interpreted by the ECUs. It involves defining message databases (e.g., DBC files) that map message IDs to specific signals (e.g., motor torque, battery voltage, accelerator pedal position).
*   **Gateway Functionality:** In complex vehicle architectures, a gateway ECU might be used to translate between different CAN buses (e.g., a high-speed powertrain CAN and a lower-speed comfort CAN) or even between CAN and other network protocols (e.g., Ethernet). This gateway effectively bridges different "application layers."

**Example in HEVs/EVs:**

*   **Powertrain CAN Bus:** Connects critical components like the Battery Management System (BMS), Motor Controller (Inverter), Electric Motor, DC-DC Converter, and Transmission Control Unit (TCU). Messages exchanged might include:
    *   `BMS to Motor Controller`: Battery State of Charge (SoC), Voltage, Current Limits, Temperature.
    *   `Motor Controller to BMS`: Requested Current, Motor Speed, Motor Temperature.
    *   `Accelerator Pedal Sensor to Motor Controller`: Throttle position.
    *   `Motor Controller to Transmission`: Torque command.
*   **Body Control CAN Bus:** Connects ECUs for infotainment, climate control, lighting, etc.
*   **Gateway ECU:** Receives critical powertrain data from the powertrain CAN and makes it available to other ECUs on different buses (e.g., displaying battery charge level on the dashboard).

**Referenced from:**

*   **Ehsani, Mehrdad, et al. *Modern Electric, Hybrid Electric and Fuel Cell Vehicles*: Fundamentals, Theory and Design. 3rd ed., CRC Press, 2018.** - This textbook will be the most comprehensive source for understanding how CAN is used to integrate various EV subsystems, effectively detailing the "application layer" through system integration examples.

### 5. Important Points to Remember

*   **CAN is a Message-Based Protocol:** Priority is determined by the message ID, not the sender's address.
*   **Physical Layer:** Focuses on electrical signaling, termination, and the transceiver.
*   **Data Link Layer:** Handles framing, arbitration (prioritization), error detection, and acknowledgment.
*   **Dominant vs. Recessive Bits:** Crucial for arbitration and data transmission.
*   **Bit Stuffing:** Ensures synchronization and prevents illegal bit sequences.
*   **Arbitration:** Ensures that higher-priority messages (lower IDs) win bus access.
*   **Error Detection:** Robust mechanisms protect data integrity in a noisy environment.
*   **ECUs (Electronic Control Units):** The "brains" of various vehicle systems that communicate via CAN.
*   **Gateway ECUs:** Essential for interconnecting multiple CAN buses or networks.

### 6. Practice Questions and Answers

**Question 1:** In the CAN protocol, how is message priority determined?
    a) By the sender's address
    b) By the message content
    c) By the message identifier (ID)
    d) By the order in which messages are sent

**Answer:** c) By the message identifier (ID)
    **Explanation:** The CAN protocol uses a non-destructive, bitwise arbitration process where the message with the lowest numerical identifier (which corresponds to the most dominant bits at the start of the arbitration field) wins the bus.

**Question 2:** What is the primary function of the CAN transceiver?
    a) To encrypt the data
    b) To convert logic-level signals to bus-level electrical signals and vice-versa
    c) To manage the application software on the ECU
    d) To store CAN message data

**Answer:** b) To convert logic-level signals to bus-level electrical signals and vice-versa
    **Explanation:** The transceiver is a critical component of the physical layer, enabling the CAN controller to interface with the physical CAN bus by handling the electrical signaling.

**Question 3:** Which CAN frame structure uses an 11-bit identifier, and which uses a 29-bit identifier?
    a) Standard Frame: 11-bit, Extended Frame: 29-bit
    b) Standard Frame: 29-bit, Extended Frame: 11-bit
    c) Both frames use 11-bit identifiers
    d) Both frames use 29-bit identifiers

**Answer:** a) Standard Frame: 11-bit, Extended Frame: 29-bit
    **Explanation:** CAN defines two frame formats: the original Standard Frame with an 11-bit ID and the Extended Frame with a 29-bit ID, allowing for more unique message IDs.

**Question 4:** Explain the concept of "bit stuffing" in CAN and why it's important.
    **Answer:** Bit stuffing is a mechanism used in the CAN Data Link Layer to ensure synchronization between the sender and receiver. After five consecutive bits of the same polarity (either dominant or recessive) are sent, the transmitter inserts a bit of the opposite polarity. This extra bit is called a "stuffed bit." It's important because it prevents long strings of identical bits that could cause the receivers to lose synchronization with the transmitter. Receivers automatically remove these stuffed bits.

**Question 5:** Imagine you are designing a basic CAN network for an EV's powertrain. List three key ECUs that would likely be connected and two types of critical information they might exchange.
    **Answer:**
    **ECUs:**
    1.  Battery Management System (BMS)
    2.  Motor Controller (Inverter)
    3.  Electric Motor Control Unit (or integrated with Motor Controller)

    **Information Exchange:**
    *   **BMS to Motor Controller:** Battery State of Charge (SoC), battery voltage, maximum allowable discharge current.
    *   **Motor Controller to BMS:** Motor speed, motor torque command, motor temperature.

**Question 6:** What is the role of the CRC field in a CAN frame?
    a) To prioritize the message
    b) To identify the sender of the message
    c) To detect errors in the transmitted data
    d) To acknowledge successful reception

**Answer:** c) To detect errors in the transmitted data
    **Explanation:** The Cyclic Redundancy Check (CRC) is a mathematical calculation performed on the data within the frame. The receiver performs the same calculation and compares the result. If they don't match, an error is detected.

### Conclusion

The layered architecture of CAN, particularly its robust Physical and Data Link layers, makes it an ideal communication protocol for the demanding environment of hybrid and electric vehicles. By ensuring reliable, prioritized, and error-free data exchange, CAN enables the seamless operation and efficient control of critical powertrain components, contributing directly to vehicle performance, safety, and diagnostics. Understanding these layers is fundamental to comprehending how modern EVs function and how their various electronic systems interact.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
