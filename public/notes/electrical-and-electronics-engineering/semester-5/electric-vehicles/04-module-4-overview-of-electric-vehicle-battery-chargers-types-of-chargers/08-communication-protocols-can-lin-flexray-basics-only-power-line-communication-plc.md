---
title: "Communication Protocols - CAN, LIN, FLEXRAY (Basics only)- Power line communication (PLC) in EV (2 hrs)"
subject: "ELECTRIC VEHICLES"
module: "Module 4: Overview of Electric Vehicle Battery Chargers –Types of chargers"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f362bb"
status: "completed"
scrapedAt: "2026-05-23T16:21:47.846Z"
---
# ELECTRIC VEHICLES

## Module 4: Overview of Electric Vehicle Battery Chargers – Types of Chargers

### Topic: Communication Protocols - CAN, LIN, FLEXRAY (Basics Only) - Power Line Communication (PLC) in EV (2 hrs)

**Learning Outcomes:**

*   Understand the need for communication protocols in EV charging.
*   Describe the basic principles of CAN, LIN, and FlexRay protocols.
*   Explain the role of each protocol in the EV charging ecosystem.
*   Understand the fundamentals of Power Line Communication (PLC) in EV charging.
*   Identify the advantages and disadvantages of using PLC in EV charging.

---

### 1. Introduction: The Need for Communication in EV Charging

Electric Vehicles (EVs) are complex systems that require seamless interaction between various components, especially during the charging process. Charging involves more than just transferring electrical energy; it necessitates intelligent communication between the EV, the charging station (Electric Vehicle Supply Equipment - EVSE), and sometimes even the grid.

**Key Concepts:**

*   **Interoperability:** The ability of different systems and components to work together. In EV charging, this means an EV from one manufacturer can charge at a station from another.
*   **Safety:** Communication ensures that charging parameters are established correctly, preventing overcharging, overheating, and other hazards.
*   **Efficiency:** Communication allows for optimized charging based on battery status, grid conditions, and user preferences (e.g., charging during off-peak hours).
*   **User Experience:** Enabling features like authentication, payment, and status updates through communication.

**Why are dedicated communication protocols essential?**

*   **Standardization:** Ensures that different EV models and charging stations can communicate effectively, regardless of the manufacturer.
*   **Data Exchange:** Facilitates the transfer of critical information like battery state of charge (SoC), voltage, current, temperature, and charging requests.
*   **Control and Monitoring:** Enables the charging station to control the charging process and the EV to monitor its battery health.

**Alignment with Course Outcomes:**

*   **CO5: Study of chargers, charging stations and various communication protocols for EV (Knowledge Level: K2)**: This topic directly addresses the understanding of communication protocols used in EV charging.

---

### 2. Automotive Communication Protocols: CAN, LIN, and FlexRay

These protocols are widely used in the automotive industry and have been adapted for EV charging communication. Understanding their basic principles is crucial.

#### 2.1. Controller Area Network (CAN)

CAN is a robust and widely adopted serial communication protocol for automotive applications. It's known for its reliability, error detection capabilities, and multi-master functionality.

**Key Concepts:**

*   **Bus Topology:** Devices are connected in a linear fashion to a shared communication line (bus).
*   **Message-Based:** Data is transmitted in frames (messages) that are broadcast to all nodes on the bus.
*   **Arbitration:** When multiple nodes want to transmit simultaneously, CAN uses a non-destructive bitwise arbitration to determine which message gets priority, based on its identifier. Lower identifiers have higher priority.
*   **Error Detection and Fault Confinement:** CAN has sophisticated mechanisms to detect errors and isolate faulty nodes, ensuring network integrity.
*   **Differential Signaling:** Uses two wires (CAN_High and CAN_Low) to transmit signals, which improves noise immunity.

**How CAN is used in EV Charging:**

*   **Internal Vehicle Communication:** CAN is extensively used within the EV to communicate between the battery management system (BMS), motor controller, charger controller, and other ECUs (Electronic Control Units).
*   **EVSE Communication (less common for high-level charging negotiation):** While not the primary protocol for high-level communication between EV and EVSE (like ISO 15118), CAN might be used for lower-level control signals or diagnostics in some EVSE implementations.

**Textbook Reference:**

*   **Electric Vehicles Machines and Drives- Design, Analysis and Application by K. T. Chau (John Wiley, 2015):** Likely discusses internal vehicle communication systems, which heavily rely on CAN.
*   **Hybrid Electric Vehicles – Principles and applications with practical perspectives by Chris Mi, M A Masrur, D W Gao (Wiley, 2011):** Also a strong candidate for details on internal vehicle communication architectures.

**Important Point to Remember:** CAN is the backbone of internal vehicle communication, ensuring that different EV components can exchange data reliably.

---

#### 2.2. Local Interconnect Network (LIN)

LIN is a lower-cost, serial communication protocol designed for less critical automotive applications. It's simpler and slower than CAN.

**Key Concepts:**

*   **Master-Slave Architecture:** A single master node controls the communication for multiple slave nodes.
*   **Single Wire:** Uses a single wire for communication, reducing cost and complexity.
*   **Cost-Effective:** Ideal for applications where high bandwidth and fault tolerance are not paramount, such as controlling windows, mirrors, or simple sensors.
*   **Slower Speed:** Compared to CAN, LIN operates at significantly lower speeds.

**How LIN is used in EV Charging:**

*   **Within the EVSE:** LIN can be used for communication between simpler components within the charging station itself, such as control buttons, status LEDs, or internal sensors, where high-speed communication is not required.
*   **Not typically for EV-EVSE high-level negotiation.**

**Important Point to Remember:** LIN is a cost-effective solution for low-speed, non-critical communication within the EVSE or for less critical subsystems within the EV.

---

#### 2.3. FlexRay

FlexRay is a high-speed, fault-tolerant communication protocol designed for real-time control applications in vehicles, such as steering, braking, and powertrain control.

**Key Concepts:**

*   **Time-Triggered Communication:** Messages are sent at predictable, fixed intervals, ensuring deterministic timing.
*   **Byte-Traveling BERT (Bit Error Rate Test):** A robust error detection mechanism.
*   **Dual Channel Communication:** Uses two differential signal channels for redundancy and increased data throughput.
*   **Higher Bandwidth and Determinism:** Offers significantly higher speed and more predictable timing than CAN or LIN, making it suitable for safety-critical systems.
*   **More Complex and Expensive:** Due to its advanced features, FlexRay is more complex and costly to implement.

**How FlexRay is used in EV Charging:**

*   **Not typically used for standard EV charging communication protocols.** While FlexRay is crucial for critical vehicle functions, it's generally overkill and too expensive for the communication needs between an EV and an EVSE.
*   **Could potentially be used for advanced diagnostic systems or vehicle-to-vehicle (V2V) charging scenarios where ultra-reliable, high-speed communication is paramount.**

**Important Point to Remember:** FlexRay is designed for safety-critical, real-time control applications in vehicles and is not commonly used for EV charging communication protocols.

---

### 3. Power Line Communication (PLC) in EV Charging

PLC enables data communication over the same electrical power lines that deliver electricity to the EV. This eliminates the need for separate communication wires.

**Key Concepts:**

*   **Data Over Power:** Transmitting data signals superimposed on the AC or DC power lines.
*   **Modulation and Demodulation:** Data is modulated onto a carrier signal, which is then superimposed on the power line. At the receiving end, the signal is demodulated to extract the data.
*   **Broadband over Power Lines (BPL):** The general term for high-speed data transmission over power lines.
*   **HomePlug Green PHY (HPGP):** A specific standard for PLC in EV charging, designed to be robust and interoperable. It's part of the **ISO 15118** standard.

**How PLC is used in EV Charging:**

*   **ISO 15118 Compliance:** PLC, specifically HomePlug Green PHY, is the communication backbone for the **ISO 15118** standard, which defines the communication between the EV and the EVSE for plug-and-charge capabilities, smart charging, and bidirectional power flow (V2G - Vehicle-to-Grid).
*   **Plug and Charge:** Enables automatic authentication and authorization of the EV when plugged into the charging station, without requiring RFID cards or mobile apps.
*   **Smart Charging:** Allows for dynamic adjustment of charging speed and schedule based on grid conditions, electricity prices, and user preferences.
*   **V2G (Vehicle-to-Grid):** Facilitates the bidirectional flow of energy and information between the EV and the grid, allowing EVs to act as distributed energy storage.

**Technical Aspects of PLC in EV Charging:**

*   **Frequency Bands:** PLC systems operate within specific frequency bands that are separate from the power frequencies (50/60 Hz) to avoid interference. Common bands are in the kHz to MHz range.
*   **Modulation Techniques:** Techniques like OFDM (Orthogonal Frequency-Division Multiplexing) are used to transmit data efficiently over noisy power lines.
*   **Coupling/Decoupling:** Special circuitry is used to inject the data signal onto the power line and to extract it at the other end. This circuitry also needs to filter out power line noise.
*   **Noise and Interference:** Power lines can be noisy environments with significant interference from other electrical devices. PLC systems are designed with robust error correction and modulation schemes to overcome this.
*   **Impedance Matching:** The impedance of the power line can vary, affecting signal strength. PLC transceivers need to adapt to these variations.

**Advantages of PLC in EV Charging:**

*   **Reduced Cabling Cost:** Eliminates the need for separate communication cables (e.g., Ethernet, CAN), reducing installation costs and complexity.
*   **Simplified Installation:** Fewer wires mean easier and quicker installation of charging infrastructure.
*   **Enhanced User Experience:** Enables seamless "Plug and Charge" functionality.
*   **Advanced Features:** Supports sophisticated smart charging and V2G capabilities.
*   **Interoperability:** Standardized through ISO 15118, ensuring compatibility across different manufacturers.

**Disadvantages of PLC in EV Charging:**

*   **Cost of PLC Modems:** The specialized modems can add to the cost of the EVSE and the EV's onboard charger.
*   **Signal Attenuation and Noise:** Signal quality can be degraded by the length of the power line, the quality of the wiring, and interference from other electrical loads. This can limit communication speed or reliability.
*   **Network Segmentation:** It can be challenging to achieve reliable PLC communication across different electrical circuits or phases, or through circuit breakers and transformers.
*   **Security Concerns:** As with any networked communication, security measures are crucial to prevent unauthorized access or manipulation.
*   **Limited Bandwidth (compared to Ethernet):** While improving, the bandwidth of PLC might be a limiting factor for certain advanced applications.

**Textbook and Reference Book Content:**

*   **ISO 15118 Standard:** While not a textbook, understanding ISO 15118 is crucial. Textbooks might reference this standard when discussing charging communication.
*   **Modern Electric, Hybrid and Fuel Cell Vehicles: Fundamentals, Theory and Design by Mehrdad Ehsani, Yimi Gao, Sebastian E. Gay:** This reference book is highly likely to cover advanced charging technologies and communication protocols, including PLC and ISO 15118.
*   **Electric and Hybrid Vehicles: Design Fundamentals by Iqbal Hussein (CRC Press, 2003):** While older, it might provide foundational principles of vehicle communication systems that could be extended to charging.

**Alignment with Course Outcomes:**

*   **CO5: Study of chargers, charging stations and various communication protocols for EV (Knowledge Level: K2)**: This topic directly addresses the understanding of PLC in EV charging, its principles, and applications.

**Important Point to Remember:** PLC, particularly HomePlug Green PHY as defined in ISO 15118, is the key technology enabling advanced communication features like "Plug and Charge" and smart grid integration in EV charging.

---

### 4. Practice Questions and Answers

**Question 1:**
Which of the following automotive communication protocols is primarily designed for cost-effective, low-speed communication in applications like controlling mirrors or windows?
a) CAN
b) LIN
c) FlexRay
d) Ethernet

**Answer 1:**
b) LIN
**Explanation:** LIN (Local Interconnect Network) is a master-slave protocol that uses a single wire and is designed for less critical, lower-cost applications where high bandwidth and fault tolerance are not essential.

**Question 2:**
What is the main advantage of using Power Line Communication (PLC) in EV charging as defined by the ISO 15118 standard?
a) Higher communication speeds than Ethernet.
b) Elimination of separate communication cables.
c) Improved noise immunity compared to CAN.
d) Guaranteed deterministic message delivery.

**Answer 2:**
b) Elimination of separate communication cables.
**Explanation:** The primary advantage of PLC is that it leverages the existing power lines for data communication, thus reducing the need for additional communication wiring.

**Question 3:**
Describe the role of CAN in an electric vehicle's charging system.
**Answer 3:**
CAN (Controller Area Network) is primarily used for internal communication within the electric vehicle. It facilitates the exchange of data between various Electronic Control Units (ECUs) such as the Battery Management System (BMS), motor controller, and onboard charger controller. This allows for real-time monitoring of battery status, control of charging parameters from within the vehicle, and overall system coordination. While it can be used for some low-level communication in an EVSE, its main domain is internal vehicle networking.

**Question 4:**
What functionality does PLC, in conjunction with ISO 15118, enable for EV charging that is not typically available with simpler communication methods?
**Answer 4:**
PLC, as part of the ISO 15118 standard, enables advanced features like "Plug and Charge" (automatic authentication and billing), smart charging (dynamic charging control based on grid conditions and user preferences), and Vehicle-to-Grid (V2G) communication, which allows for bidirectional power flow.

**Question 5:**
Compare and contrast CAN and LIN protocols in terms of their architecture and typical use cases.
**Answer 5:**
*   **CAN (Controller Area Network):**
    *   **Architecture:** Multi-master, broadcast communication with message arbitration based on identifiers. Uses differential signaling (two wires).
    *   **Use Cases:** Robust, higher-speed communication for critical systems like powertrain control, braking, steering, and internal EV communication (including battery management).
*   **LIN (Local Interconnect Network):**
    *   **Architecture:** Master-slave architecture with a single master controlling multiple slaves. Uses single-wire communication.
    *   **Use Cases:** Cost-effective, lower-speed communication for less critical applications such as controlling power windows, mirrors, interior lighting, or simple sensors.

---

### 5. Key Points to Remember

*   **Communication is vital for safe, efficient, and interoperable EV charging.**
*   **CAN** is the backbone of internal EV communication, ensuring reliable data exchange between ECUs.
*   **LIN** is a cost-effective, low-speed protocol for less critical automotive applications.
*   **FlexRay** is a high-speed, deterministic protocol for safety-critical real-time control, not typically used in standard EV charging.
*   **Power Line Communication (PLC)**, particularly **HomePlug Green PHY** as per **ISO 15118**, enables data transfer over power lines, facilitating advanced features like "Plug and Charge" and V2G.
*   **PLC advantages:** reduced cabling, simplified installation, enhanced user experience.
*   **PLC disadvantages:** potential for noise/attenuation, cost of modems, network segmentation challenges.

---
This concludes the study notes for Communication Protocols in EV Charging. It covers the basic principles of CAN, LIN, FlexRay, and delves into the fundamentals of PLC in the context of EV charging, aligning with the specified learning outcomes and course objectives.
