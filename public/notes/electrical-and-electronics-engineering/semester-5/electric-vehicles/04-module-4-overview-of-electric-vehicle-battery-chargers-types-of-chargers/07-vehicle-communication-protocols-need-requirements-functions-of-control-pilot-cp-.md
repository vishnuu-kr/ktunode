---
title: "Vehicle Communication protocols  : Need & requirements - Functions of Control Pilot (CP) and Proximity Pilot (PP) pins"
subject: "ELECTRIC VEHICLES"
module: "Module 4: Overview of Electric Vehicle Battery Chargers –Types of chargers"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f362ba"
status: "completed"
scrapedAt: "2026-05-23T16:21:47.143Z"
---
# Electric Vehicles: Module 4 - Overview of Electric Vehicle Battery Chargers

## Topic: Vehicle Communication Protocols: Need & Requirements - Functions of Control Pilot (CP) and Proximity Pilot (PP) Pins

---

### 1. Introduction to Electric Vehicle Charging and Communication (CO5: K2)

Electric vehicle (EV) charging involves the transfer of electrical energy from the grid to the EV's battery. This process requires a sophisticated interaction between the charging station (EVSE - Electric Vehicle Supply Equipment) and the EV itself to ensure safety, efficiency, and optimal charging. Communication protocols are crucial for this interaction.

**Key Concept:** **EVSE (Electric Vehicle Supply Equipment)** - The equipment that provides electrical power to charge plug-in electric vehicles. This can range from a simple cord and plug to a sophisticated charging station.

---

### 2. Need and Requirements for Vehicle Communication Protocols (CO5: K2)

Effective communication between the EV and the EVSE is paramount for several reasons:

*   **Safety:** To prevent electrical hazards, ensure proper grounding, and avoid charging when conditions are unsafe.
*   **Charge Control:** To determine the maximum charging current, voltage, and charging mode based on the EV's capabilities and the EVSE's capacity.
*   **Charging Status:** To inform the user about the charging progress and status.
*   **Authentication and Billing:** In public charging scenarios, to identify the user and manage payment.
*   **Grid Integration:** To enable smart charging, vehicle-to-grid (V2G) communication, and load balancing.
*   **Fault Detection and Reporting:** To identify and communicate any issues during the charging process.

**Requirements:**

*   **Robustness:** Must withstand varying environmental conditions (temperature, moisture, vibration).
*   **Reliability:** Consistent and accurate data transfer.
*   **Interoperability:** Ability to work with different EV models and EVSEs from various manufacturers.
*   **Scalability:** Support for future functionalities like V2G and advanced grid services.
*   **Cost-effectiveness:** Relatively inexpensive implementation for widespread adoption.

**Reference:** Chau, K. T. (2015) "Electric Vehicles Machines and Drives- Design, Analysis and Application" discusses the importance of control systems and communication in managing the charging process for EVs.

---

### 3. Types of EV Charging and Communication

EV charging is typically categorized into three levels:

*   **Level 1:** Slow charging using standard household outlets (AC).
*   **Level 2:** Faster charging using dedicated 240V circuits (AC).
*   **Level 3 (DC Fast Charging):** High-power direct current charging that bypasses the EV's onboard charger.

The communication protocols vary depending on the charging level. For AC charging (Level 1 and Level 2), the most common communication method utilizes **dedicated pilot signals** conveyed via the charging cable's conductors. For DC fast charging, more complex communication protocols like **ISO 15118** are used, often over separate communication lines.

---

### 4. Functions of Control Pilot (CP) and Proximity Pilot (PP) Pins

In AC charging (Level 1 and Level 2), the charging cable typically has a standard connector with several pins. Among the most critical for communication are the **Control Pilot (CP)** and **Proximity Pilot (PP)** pins. These pins are part of the **IEC 61851-1 standard** for EV conductive charging systems.

#### 4.1. Control Pilot (CP) Pin

The Control Pilot (CP) is the primary communication line between the EV and the EVSE in AC charging. It uses a **Pulse Width Modulation (PWM)** signal.

**Key Concept:** **Pulse Width Modulation (PWM)** - A technique used to control the average value of voltage supplied to a load by switching the voltage on and off rapidly. The ratio of "on" time to the total cycle time (period) is called the duty cycle.

**Functions of the CP Pin:**

1.  **EVSE Ready Signal:**
    *   The EVSE applies a voltage (typically around 12V, but can vary) to the CP pin when it is ready to supply power.
    *   This voltage is "advertised" as a continuous DC voltage.

2.  **EV Detection and Connection Confirmation:**
    *   When the EV connects to the EVSE, it detects this voltage on the CP pin.
    *   The EV then draws a small current from the CP pin. The amount of current drawn indicates the EV's presence and its readiness to charge.

3.  **Charge State Indication:**
    *   The EVSE signals the maximum current it can supply by modulating the resistance connected to the CP pin. This modulation is achieved by varying the duty cycle of a PWM signal.
    *   **Duty Cycle (CP Signal):** The CP signal is a 1 kHz square wave. The duty cycle of this signal indicates the maximum AC current the EVSE can provide:
        *   **6% Duty Cycle:** EV is connected, but not ready to charge (e.g., EV is already fully charged or has a fault).
        *   **15% Duty Cycle:** EV is connected and ready to charge. Maximum current limited by the EVSE (e.g., 16A, 32A).
        *   **50% Duty Cycle:** EV is connected, ready to charge, and EVSE is supplying power. Maximum current limited by the EVSE.
        *   **90% Duty Cycle:** Used for **ventilation required** indication in certain charging modes (e.g., for specific charging infrastructure requiring ventilation).

4.  **EVSE Capability and Status:**
    *   The EVSE can also use specific duty cycles or voltage levels to signal its capabilities or specific states (e.g., error conditions).

5.  **Error Detection:**
    *   If the EVSE detects a fault (e.g., ground fault), it can change the CP signal (e.g., interrupt the voltage) to signal the EV to stop charging.

**Example:**
If an EVSE can supply a maximum of 32A, it will output a PWM signal on the CP pin with a specific duty cycle corresponding to 32A. The EV will then adjust its charging current accordingly. If the EV requests more current than the EVSE can provide, the EVSE will not raise its advertised CP signal duty cycle beyond its maximum capability.

**Reference:** Mi, C., Masrur, M. A., & Gao, D. W. (2011) "Hybrid Electric Vehicles – Principles and applications with practical perspectives" likely discusses basic charging principles, which would include the role of pilot signals for communication.

---

#### 4.2. Proximity Pilot (PP) Pin

The Proximity Pilot (PP) pin is also a crucial component in the charging communication, primarily used to indicate the **presence of the charging cable** and the **maximum current rating of the cable and connectors**.

**Functions of the PP Pin:**

1.  **Cable Presence Detection:**
    *   The PP pin is typically connected to ground through a resistor within the charging connector.
    *   The EVSE detects the resistance on the PP pin to confirm that the charging cable is properly plugged into the vehicle.

2.  **Current Limit Indication:**
    *   The PP pin is used by the EVSE to communicate the maximum current rating of the charging cable and connectors to the EV. This is achieved by connecting resistors of different values between the PP pin and the protective earth (PE) conductor.
    *   **Resistance Values and Current Ratings:** The IEC 61851-1 standard defines specific resistance values connected to the PP pin, which the EV interprets as the maximum current capacity:
        *   **No resistance (short to PE):** Indicates the presence of the charging cable, but the current rating is not specified by the EVSE. The EV will then rely on its internal limits or the CP signal.
        *   **150 kΩ resistor:** EVSE indicates a maximum current of 16A for single-phase charging.
        *   **470 kΩ resistor:** EVSE indicates a maximum current of 32A for single-phase charging.
        *   **1 kΩ resistor:** EVSE indicates a maximum current of 32A for three-phase charging.
        *   **2.2 kΩ resistor:** EVSE indicates a maximum current of 63A for three-phase charging.
        *   **Other values:** Can be used for higher current ratings or specific configurations.

3.  **Ground Fault Detection:**
    *   The PP pin is intrinsically linked to the protective earth (PE) conductor. If there's a discrepancy in resistance (e.g., if the PP connection is lost unexpectedly), it can indicate a potential ground fault.

**Example:**
If a charging cable is rated for 32A, the EVSE will connect a specific resistor (e.g., 470 kΩ for single-phase) between the PP pin and PE. When the EV detects this resistance, it knows not to attempt drawing more than 32A through that cable. If the EVSE used a cable rated for only 16A, it would use a different resistor value (e.g., 150 kΩ).

**Reference:** Ehsani, M., Gao, Y., & Gay, S. E. (n.d.) "Modern Electric, Hybrid and Fuel Cell Vehicles: Fundamentals, Theory and Design" is likely to cover the basic electrical connections and safety features of EVs, which would include the role of these pilot signals.

---

### 5. Interaction between CP and PP Pins

The CP and PP signals work in conjunction to ensure safe and efficient charging:

1.  **Connection Sequence:**
    *   The EVSE applies voltage to CP.
    *   The EV detects voltage on CP and confirms connection by drawing current.
    *   The EVSE detects the current draw on CP and confirms EV presence.
    *   The EVSE then uses the PP pin to signal the maximum current capacity of the cable and EVSE.
    *   The EV then uses the CP pin (PWM signal) to indicate its charging status and acknowledge the available current.

2.  **Safety Interlocks:**
    *   Both pins contribute to safety interlocks. For instance, if the EVSE doesn't detect the proper resistance on PP, it won't activate the CP signal. If the EV detects a fault on CP or PP, it will prevent charging.

---

### 6. Advanced Communication (Beyond Basic AC Charging)

While CP and PP are fundamental for AC charging, advanced communication is required for DC fast charging and smart grid functionalities.

*   **ISO 15118:** This international standard enables bidirectional communication between the EV and the EVSE over a dedicated communication channel (often Ethernet or PLC - Power Line Communication). It supports:
    *   High-level communication for authentication, billing, and Plug and Charge.
    *   Smart charging and V2G capabilities.
    *   Information about charging power, battery state of charge (SoC), etc.

*   **PLC (Power Line Communication):** Used to transmit digital data over the existing power lines, including the charging cable, for protocols like ISO 15118.

**Reference:** Hussein, I. (2003) "Electric and Hybrid Vehicles: Design Fundamentals" might provide foundational knowledge that leads into the evolution of charging communication standards.

---

### 7. Important Points to Remember

*   **CP (Control Pilot):** The primary communication pin for AC charging, using PWM signals to indicate EVSE readiness, maximum current, and charging status.
*   **PP (Proximity Pilot):** Indicates cable presence and its current rating by varying resistance to ground.
*   **IEC 61851-1:** The standard that defines the signaling for CP and PP pins in AC charging.
*   **Safety First:** CP and PP signals are critical for ensuring that charging only occurs when all safety conditions are met.
*   **Interoperability:** Standardized signals ensure that different EVs and EVSEs can communicate effectively.
*   **Advancements:** While CP/PP are basic, standards like ISO 15118 are crucial for modern smart charging and V2G.

---

### 8. Practice Questions and Answers

**Question 1:** What is the primary function of the Control Pilot (CP) pin in EV AC charging?
    a) To detect the presence of the charging cable.
    b) To indicate the maximum current rating of the charging cable.
    c) To communicate charging status and control parameters between the EV and EVSE using PWM signals.
    d) To provide a ground connection for safety.

**Answer 1:** (c) To communicate charging status and control parameters between the EV and EVSE using PWM signals.

**Question 2:** The Proximity Pilot (PP) pin is used to inform the EV about:
    a) The battery's state of charge.
    b) The maximum current the *EVSE* can supply.
    c) The maximum current the *charging cable and connectors* are rated for.
    d) The required charging voltage.

**Answer 2:** (c) The maximum current the *charging cable and connectors* are rated for.

**Question 3:** A 15% duty cycle on the Control Pilot (CP) signal typically indicates:
    a) EVSE is ready, but EV is not ready to charge.
    b) EV is connected and ready to charge, with the EVSE limiting the current.
    c) EVSE is ready to supply power at its maximum capability.
    d) EV is connected and ready to charge, and EVSE is ready to supply power.

**Answer 3:** (d) EV is connected and ready to charge, and EVSE is ready to supply power. (Note: The question describes the common scenario where EVSE is supplying power *at its advertised limit*. A 15% duty cycle signifies readiness, while a 50% duty cycle signifies power delivery. However, in many practical contexts, 15% is interpreted as ready to charge, and the EV then negotiates based on the EVSE's capabilities signaled by the overall CP waveform and resistance on PP). *Correction for clarity*: A 15% duty cycle indicates EV connection and readiness. The EVSE may then transition to a 50% duty cycle to indicate power delivery. The wording in option (d) is the most accurate description of the state that enables charging.

**Question 4:** How does the EVSE signal the maximum current rating of the charging cable using the PP pin?
    a) By varying the frequency of a signal.
    b) By connecting resistors of different values between the PP pin and protective earth (PE).
    c) By applying different DC voltage levels.
    d) Through a digital data stream.

**Answer 4:** (b) By connecting resistors of different values between the PP pin and protective earth (PE).

**Question 5:** Briefly explain the role of PWM in the Control Pilot (CP) signal.

**Answer 5:** PWM is used on the CP pin to communicate the maximum current the EVSE can provide. The duty cycle of the 1kHz square wave signal on the CP pin determines this current limit. A higher duty cycle generally signifies a higher available current.

---

### 9. Alignment with Course Outcomes

*   **CO5: Study of chargers, charging stations and various communication protocols for EV (Knowledge Level: K2)**
    *   This topic directly addresses the study of communication protocols for EV chargers and charging stations. The explanation of CP and PP pins, their functions, and the underlying standards aligns with the K2 knowledge level requirement.

---
This study material provides a foundational understanding of vehicle communication protocols in EV charging, focusing on the essential roles of the Control Pilot (CP) and Proximity Pilot (PP) pins within AC charging systems. It also touches upon the evolution towards more advanced communication standards for future EV functionalities.
