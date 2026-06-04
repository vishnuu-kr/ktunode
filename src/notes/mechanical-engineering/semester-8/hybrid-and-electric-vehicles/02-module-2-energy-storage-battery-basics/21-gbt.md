---
title: "GB/T"
subject: "HYBRID AND ELECTRIC VEHICLES"
module: "Module 2: Energy storage – Battery basics"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf4804464447"
status: "completed"
scrapedAt: "2026-05-20T18:20:56.020Z"
---
# HYBRID AND ELECTRIC VEHICLES - Module 2: Energy Storage – Battery Basics

## Topic: GB/T - Chinese Standard for Electric Vehicle Charging

This topic delves into the GB/T standard, which is a crucial aspect of electric vehicle (EV) charging infrastructure, particularly in China. Understanding this standard is essential for anyone involved in the design, manufacturing, or deployment of EVs and charging solutions.

---

### 1. Introduction to GB/T Standards for Electric Vehicles

*   **What is GB/T?**
    *   GB/T stands for Guobiao (GB) and Tuijian (T). Guobiao are Chinese national standards, and Tuijian are industry standards.
    *   The GB/T standards in the context of EVs are a series of technical specifications and regulations that govern various aspects of electric vehicle charging and communication.
    *   They are developed and maintained by the Standardization Administration of China (SAC).

*   **Importance of GB/T Standards:**
    *   **Interoperability:** Ensures that EVs and charging equipment from different manufacturers can communicate and charge together seamlessly.
    *   **Safety:** Establishes safety requirements for charging processes, equipment, and vehicles to prevent hazards like electric shock, fire, and damage.
    *   **Performance:** Defines performance benchmarks and charging protocols to ensure efficient and reliable charging.
    *   **Market Access:** Compliance with GB/T standards is mandatory for selling EVs and charging equipment in the Chinese market.
    *   **Global Influence:** As China is a leading market for EVs, GB/T standards have a significant impact on global EV charging trends and standardization efforts.

*   **Key Areas Covered by GB/T Standards:**
    *   Charging connectors and interfaces.
    *   Charging communication protocols.
    *   Battery specifications and management.
    *   Safety requirements.
    *   Vehicle-to-grid (V2G) capabilities.

*   **Alignment with Course Outcomes:**
    *   **CO2: Describe various battery, charging types and battery management of Electric vehicles.** The GB/T standard directly addresses charging types, communication protocols crucial for battery management during charging, and indirectly influences battery specifications for compatibility.

---

### 2. GB/T Charging Connectors and Interfaces

The GB/T standard defines specific physical connectors for both AC and DC charging. These are distinct from other international standards like Type 1 (J1772) and Type 2 (Mennekes) used in North America and Europe, and CHAdeMO used in Japan.

*   **AC Charging Connectors (GB/T 20234.2):**
    *   **Type:** Typically a **Type 1** connector equivalent in function to the IEC 62196 Type 2 connector but with a different physical design.
    *   **Design:** Features a circular connector with multiple pins for power and communication.
    *   **Configuration:**
        *   **L1, L2, L3 (for 3-phase):** Live conductors.
        *   **N:** Neutral conductor.
        *   **PE:** Protective Earth conductor.
        *   **PP (Proximity Pilot):** Used to signal the maximum current the charging station can supply and to detect cable presence/connection.
        *   **CP (Control Pilot):** Used for communication between the vehicle and the charging station to manage the charging process (e.g., readiness to charge, charging status).
    *   **Advantages:** Robust design, suitable for everyday charging.
    *   **Limitations:** Lower charging speeds compared to DC fast charging.

*   **DC Charging Connectors (GB/T 20234.3):**
    *   **Type:** A distinct GB/T DC connector, often referred to as **GB/T DC**.
    *   **Design:** A larger, robust connector designed to handle high DC currents and voltages.
    *   **Configuration:**
        *   **L1, L2, L3 (for 3-phase AC input to the charger):** AC power supply lines.
        *   **N:** Neutral conductor.
        *   **PE:** Protective Earth conductor.
        *   **DC+:** Positive DC output from the charging station to the vehicle battery.
        *   **DC-:** Negative DC output from the charging station to the vehicle battery.
        *   **CP (Control Pilot):** Carries communication signals for negotiation and control between the vehicle and the charging station.
        *   **S2+ and S2- (or other communication pins):** Used for high-level communication protocols.
    *   **Advantages:** Enables high-power DC fast charging, significantly reducing charging times.
    *   **Limitations:** More complex and expensive than AC charging systems.

*   **Connector Interoperability and Adapter Cables:**
    *   Due to the distinct nature of GB/T connectors, adapter cables are often used to connect vehicles with GB/T ports to charging stations with different connector types (e.g., CCS Combo 2, CHAdeMO) or vice-versa. This is crucial for international travel or when using shared charging infrastructure.

---

### 3. GB/T Communication Protocols

Effective communication between the Electric Vehicle (EV) and the Charging Station (EVSE - Electric Vehicle Supply Equipment) is vital for safe and efficient charging. GB/T standards define these communication protocols.

*   **Importance of Communication:**
    *   **Safety:** Ensures that charging only occurs when both the vehicle and the EVSE are ready and conditions are safe.
    *   **Negotiation:** Allows the EVSE to inform the vehicle about available charging power (voltage, current) and for the vehicle to communicate its battery status and charging requirements.
    *   **State Monitoring:** Enables the EVSE to monitor the charging process and the vehicle to manage battery charging.
    *   **Fault Detection:** Facilitates the detection and reporting of any errors or faults during charging.

*   **Key GB/T Communication Protocols:**
    *   **PLC (Power Line Communication):**
        *   **Principle:** Uses the power lines themselves to transmit communication signals. This is a common method in many charging standards.
        *   **GB/T Implementation:** The GB/T standard specifies using PLC for communication between the vehicle and the EVSE, particularly for DC charging.
        *   **Advantages:** Reduces the need for additional communication wires, simplifying the connector design.
        *   **Reference:** Husain (2010) discusses PLC as a communication method in EV charging.

    *   **Digital Communication:**
        *   **Protocol:** The communication protocol is typically based on **ISO 15118** (for advanced features like Plug and Charge) and **DIN 70080** or similar standards that define the message structure and content.
        *   **Information Exchanged:**
            *   **EVSE to EV:** Available voltage, current limits, charging power, charging station ID, charging rate.
            *   **EV to EVSE:** Vehicle readiness to charge, battery state of charge (SoC), battery voltage, battery temperature, maximum charging current the vehicle can accept, vehicle identification number (VIN).
        *   **Signaling on CP Pin (for AC charging):** Basic signaling for ready, charging, ventilation required, etc., as defined in IEC 61851-1, which GB/T AC charging largely aligns with in terms of basic pilot signals.

*   **Digital Communication for DC Charging (GB/T 20234.1 & GB/T 27930):**
    *   **GB/T 27930:** This standard specifically defines the communication protocol for DC charging. It details the message sets and handshake procedures between the EV and the DC charging station.
    *   **Key Messages:**
        *   **Initialization:** Establishing communication.
        *   **Vehicle Request:** Vehicle requesting to charge.
        *   **Station Response:** Station confirming readiness and providing charging parameters.
        *   **Charge Control:** Commands to start, stop, or pause charging.
        *   **Parameter Negotiation:** Dynamically adjusting voltage and current based on vehicle and battery status.
        *   **Status Updates:** Periodic reporting of SoC, voltage, current, temperature.
        *   **Termination:** Signaling the end of the charging session.

*   **Important Point:** The GB/T standard for DC charging communication is highly detailed to ensure precise control over the high-power charging process, which is crucial for battery health and safety.

---

### 4. GB/T Standards for Battery Management during Charging

While GB/T standards primarily focus on the charging interface and communication, they inherently influence how batteries are managed during the charging process.

*   **Information Exchange for Battery Management:**
    *   The communication protocols (as discussed above) allow the EV to provide critical battery information to the charging station. This includes:
        *   **State of Charge (SoC):** Essential for determining how much longer charging is needed.
        *   **Battery Temperature:** Crucial for preventing overheating or charging in extremely cold conditions, which can damage the battery.
        *   **Battery Voltage:** Used to monitor the charging voltage and ensure it stays within safe limits.
        *   **Maximum Acceptable Charging Current/Power:** The vehicle's Battery Management System (BMS) determines this limit based on the battery's health and thermal state.

*   **Charging Profile Control:**
    *   Based on the information received from the vehicle, the charging station adjusts the charging current and voltage.
    *   This is particularly important for **Constant Current (CC)** and **Constant Voltage (CV)** charging phases. The GB/T protocols facilitate the dynamic transition between these phases based on real-time battery data.

*   **Safety Interlocks:**
    *   The communication signals are used to implement safety interlocks. For example:
        *   Charging will not start if the vehicle is not properly connected or if the communication link is faulty.
        *   Charging will be interrupted if the battery temperature exceeds a safe threshold reported by the vehicle.

*   **Reference:** Ehsani et al. (2018) likely discusses the interplay between battery management systems and charging infrastructure, where standards like GB/T play a role in enabling this interaction.

---

### 5. GB/T Standards and Vehicle-to-Grid (V2G) Capabilities

*   **V2G Concept:**
    *   V2G technology allows electric vehicles to not only draw power from the grid but also to feed power back into the grid.
    *   This can be used for grid stabilization, demand response, and even as distributed energy storage.

*   **GB/T's Role in V2G:**
    *   The GB/T standards are evolving to incorporate V2G capabilities. This includes defining the communication protocols and power control mechanisms required for bidirectional power flow.
    *   **Communication for V2G:** Enhanced communication protocols are needed to signal the vehicle's intent to provide power back to the grid and to negotiate the power flow parameters with the grid operator or EVSE.
    *   **Safety during Bidirectional Flow:** Standards must ensure that bidirectional power flow is managed safely to protect both the vehicle and the grid.

*   **Current Status:** While V2G is still developing, the GB/T framework is being developed to support future V2G implementations in China.

---

### 6. GB/T vs. Other International Standards (Brief Comparison)

It's important to recognize how GB/T differs from other major charging standards to understand global interoperability challenges.

| Feature          | GB/T (China)                                     | CCS (Combined Charging System - EU/NA)               | CHAdeMO (Japan)                                  |
| :--------------- | :----------------------------------------------- | :--------------------------------------------------- | :----------------------------------------------- |
| **AC Connector** | Type 1 (GB/T 20234.2) - Circular design          | Type 2 (Mennekes) - Circular design                  | Type 2 (Mennekes)                                |
| **DC Connector** | GB/T DC - Distinct physical connector            | CCS Type 1 (Combo 1) / CCS Type 2 (Combo 2) - DC pins below AC connector | CHAdeMO - Separate DC connector                  |
| **AC Comms**     | CP signal (IEC 61851-1 based)                    | CP signal (IEC 61851-1 based)                        | CP signal (IEC 61851-1 based)                    |
| **DC Comms**     | PLC (Power Line Communication) - GB/T 27930     | PLC or CAN (Controller Area Network)                 | CAN                                              |
| **Bidirectional**| Evolving standards for V2G                       | Supports V2G (ISO 15118)                             | Supports V2G                                     |

*   **Impact:** Vehicles designed for the Chinese market will have GB/T connectors, requiring adapters for charging in regions using other standards. Conversely, imported vehicles may need adapters to use Chinese charging stations.

---

### 7. Key Points to Remember

*   **GB/T standards are China's national standards for EV charging.**
*   **They cover connectors, communication protocols, and safety.**
*   **GB/T connectors are physically different from CCS and CHAdeMO.**
*   **PLC is a key communication method for GB/T DC charging.**
*   **Effective communication enables safe and optimized battery charging.**
*   **GB/T standards are adapting to include future technologies like V2G.**
*   **Understanding GB/T is crucial for market access and interoperability in China.**

---

### 8. Practice Questions and Answers

**Question 1:** What does "GB/T" stand for in the context of Chinese national standards?
    *   **Answer:** GB/T stands for Guobiao (national standard) and Tuijian (recommended standard).

**Question 2:** Describe the primary function of the "CP" (Control Pilot) pin in GB/T AC charging.
    *   **Answer:** The CP pin is used for basic communication and signaling between the EV and the EVSE to indicate readiness to charge, the state of the charging process, and to manage safety interlocks.

**Question 3:** Which communication technology is commonly used by GB/T standards for DC charging between the vehicle and the charging station?
    *   **Answer:** Power Line Communication (PLC).

**Question 4:** Explain why interoperability between different charging standards (like GB/T and CCS) is a challenge.
    *   **Answer:** Interoperability is a challenge primarily due to the different physical connector designs and distinct communication protocols used by each standard, requiring the use of adapter cables or specialized charging equipment.

**Question 5:** How do GB/T standards facilitate battery management during charging?
    *   **Answer:** GB/T standards facilitate battery management by defining communication protocols that allow the EV to transmit critical battery data (SoC, temperature, voltage, max current acceptance) to the charging station. This information is used by the charging station to control the charging current and voltage, ensuring safe and efficient charging.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### 9. References and Further Reading

*   **Husain, I. (2010).** *Electric and Hybrid Vehicles: Design Fundamentals* (2nd ed.). CRC Press. (Chapter on Battery Technology and Charging Systems)
*   **Ehsani, M., Gao, Y., Gay, S. E., & Emadi, A. (2018).** *Modern Electric, Hybrid Electric and Fuel Cell Vehicles: Fundamentals, Theory and Design* (3rd ed.). CRC Press. (Chapters on Energy Storage and Charging Systems)
*   **Larminie, J., & Lowry, J. (2012).** *Electric Vehicle Technology Explained* (2nd ed.). Wiley-Blackwell. (Chapters on Battery Technology and Charging)
*   **Denton, T. (2020).** *Electric and Hybrid Vehicles* (2nd ed.). CBS Publishers & Distributors Pvt. Ltd. (Sections on Charging Standards)
*   **Dhameja, S. (2001).** *Electric Vehicle Battery Systems*. Newnes. (Provides foundational knowledge on battery systems relevant to charging)
*   **Relevant GB/T Standards:** For detailed technical specifications, refer to the official Chinese GB/T standards documents (e.g., GB/T 20234 series, GB/T 27930).

---

This concludes the study notes for the GB/T topic. Remember to consult the specified textbooks for in-depth explanations and to grasp the underlying principles of EV charging standards.