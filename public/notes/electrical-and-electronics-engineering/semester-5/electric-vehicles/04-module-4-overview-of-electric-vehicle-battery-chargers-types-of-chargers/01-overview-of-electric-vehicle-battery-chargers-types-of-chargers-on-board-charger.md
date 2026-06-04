---
title: "Overview of Electric Vehicle Battery Chargers –Types of chargers-On-board chargers"
subject: "ELECTRIC VEHICLES"
module: "Module 4: Overview of Electric Vehicle Battery Chargers –Types of chargers"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f362b4"
status: "completed"
scrapedAt: "2026-05-23T16:21:42.908Z"
---
# Module 4: Overview of Electric Vehicle Battery Chargers – Types of Chargers

## Topic: On-board Chargers (OBC)

**Course Outcomes Alignment:**
*   **CO5: Study of chargers, charging stations and various communication protocols for EV (Knowledge Level: K2)** - This topic directly addresses the study of EV chargers.

---

### 1. Introduction to On-board Chargers (OBC)

*   **Definition:** An On-board Charger (OBC) is an essential component of an electric vehicle (EV) that converts alternating current (AC) electricity from the power grid into direct current (DC) electricity required to charge the EV's battery pack. It is integrated *within* the vehicle itself.
*   **Function:** The primary function of an OBC is to perform the AC-to-DC conversion and regulate the charging process, ensuring the battery is charged safely and efficiently.
*   **Necessity:** Since most public and home charging infrastructure provides AC power (e.g., Level 1 and Level 2 charging), an OBC is crucial for the EV to utilize these common charging sources.

**Reference:**
*   Chau, K. T. (2015). *Electric Vehicles Machines and Drives- Design, Analysis and Application*. This book provides a fundamental understanding of EV components, including charging systems.
*   Ehsani, M., Gao, Y., & Gay, S. E. (n.d.). *Modern Electric, Hybrid and Fuel Cell Vehicles: Fundamentals, Theory and Design*. Offers insights into the overall design considerations of EVs, including their charging systems.

---

### 2. Key Components of an On-board Charger

An OBC is a complex power electronic system typically comprising the following key functional blocks:

*   **Input Filter:**
    *   **Purpose:** To suppress electromagnetic interference (EMI) generated during the charging process and prevent it from propagating onto the AC grid. It also filters out harmonics from the AC supply.
    *   **Components:** Typically includes inductors and capacitors.
*   **Power Factor Correction (PFC) Stage:**
    *   **Purpose:** To ensure that the current drawn from the AC grid is in phase with the voltage, thereby improving the power factor. A high power factor leads to more efficient utilization of the grid supply and reduces harmonic distortion.
    *   **Types:** Can be active or passive. Active PFC is more common in modern OBCs due to its superior performance and efficiency.
    *   **Example:** Boost converters are commonly used for active PFC.
*   **DC-DC Converter (Isolation and Voltage Conversion):**
    *   **Purpose:** To convert the variable DC voltage from the PFC stage to the appropriate DC voltage level required for charging the EV battery. It also provides galvanic isolation between the high-voltage AC grid and the low-voltage vehicle systems, enhancing safety.
    *   **Topologies:** Common topologies include:
        *   **Two-stage converter:** A PFC stage followed by an isolation stage (e.g., flyback, forward, half-bridge, full-bridge).
        *   **Single-stage converter:** Combines PFC and isolation functions in a single power stage. This can offer cost and size advantages but may have efficiency or performance trade-offs.
    *   **Reference:** Miller, J. M. (2010). *Propulsion Systems for Hybrid Vehicles*. While focused on hybrid vehicles, the power electronics principles for DC-DC conversion are applicable to EV OBCs.
*   **Battery Management System (BMS) Interface:**
    *   **Purpose:** The OBC communicates with the EV's BMS to monitor battery status (e.g., voltage, temperature, state of charge) and adjust charging parameters accordingly. This ensures safe and optimal charging.
    *   **Communication Protocols:** CAN bus is a prevalent communication protocol.
*   **Control Unit:**
    *   **Purpose:** To manage the operation of the entire OBC, including controlling the PFC, DC-DC converter, and communicating with the BMS and external charging station (if applicable).
    *   **Functions:** Implements charging algorithms, safety checks, and power regulation.

**Important Point to Remember:** The primary challenge in OBC design is to achieve high efficiency, compact size, lightweight, and cost-effectiveness while meeting safety standards and charging requirements.

---

### 3. Types of On-board Chargers based on Charging Level

OBCs are often categorized by the charging level they support:

*   **Level 1 Charging (Slow Charging):**
    *   **Description:** Uses a standard household AC outlet (e.g., 120V in North America, 230V in Europe).
    *   **OBC Power:** Typically low power, ranging from 1.4 kW to 2 kW.
    *   **Charging Speed:** Very slow, adding only a few miles of range per hour of charging.
    *   **OBC Requirements:** Simpler OBC design with lower power handling capability.
*   **Level 2 Charging (Medium Charging):**
    *   **Description:** Uses a dedicated charging station connected to a higher voltage AC supply (e.g., 240V in North America, 400V in Europe).
    *   **OBC Power:** Significantly higher power, ranging from 3.3 kW to 19.2 kW (and sometimes higher).
    *   **Charging Speed:** Much faster than Level 1, capable of fully charging a typical EV overnight.
    *   **OBC Requirements:** More sophisticated and higher-power OBCs are required, often with advanced PFC and efficient DC-DC conversion.

**Example:** A Nissan Leaf might come with a 6.6 kW OBC, allowing for Level 2 charging at that rate. A Tesla Model 3 can have OBC options up to 11 kW or even 19.2 kW.

**Reference:** Mi, C., Masrur, M. A., & Gao, D. W. (2011). *Hybrid Electric Vehicles – Principles and applications with practical perspectives*. This book discusses various charging scenarios and their implications for vehicle design, including OBC sizing.

---

### 4. Factors Affecting OBC Performance and Design

Several factors influence the design and performance of an OBC:

*   **Charging Power/Rate:** Higher charging power requires larger, more efficient, and robust power electronic components.
*   **Efficiency:** Crucial for minimizing energy loss during charging, reducing heat generation, and improving the overall energy economy of the EV. Modern OBCs aim for efficiencies above 90%.
*   **Size and Weight:** Integrated within the vehicle, OBCs need to be compact and lightweight to avoid impacting vehicle dynamics and interior space.
*   **Cost:** A significant factor in the overall cost of the EV.
*   **Thermal Management:** High power OBCs generate significant heat. Effective thermal management (e.g., liquid cooling) is essential to maintain performance and reliability.
*   **Electromagnetic Compatibility (EMC):** Ensuring the OBC does not interfere with other vehicle electronics and meets regulatory standards for emissions.
*   **Grid Connection Standards:** Adherence to regional and international standards for AC power input and charging protocols.
*   **Battery Voltage and Capacity:** The OBC must be compatible with the specific voltage range and charging characteristics of the EV's battery pack.

**Reference:** Hussein, I. (2003). *Electric and Hybrid Vehicles: Design Fundamentals*. This foundational text provides insights into the underlying electrical engineering principles relevant to EV component design, including power electronics.

---

### 5. Advantages and Disadvantages of On-board Chargers

**Advantages:**

*   **Convenience:** Enables charging from ubiquitous AC power sources (home, public charging stations).
*   **Flexibility:** Allows users to charge their EV wherever AC power is available.
*   **Vehicle Integration:** Simplifies the charging infrastructure by moving the AC-DC conversion into the vehicle.
*   **Safety:** Incorporates safety features and communicates with the BMS for controlled charging.

**Disadvantages:**

*   **Size and Weight:** Adds bulk and weight to the vehicle.
*   **Cost:** Contributes to the overall vehicle cost.
*   **Thermal Management Challenges:** High-power OBCs can be challenging to cool effectively within the confined space of a vehicle.
*   **Limited by Vehicle Power Limits:** The charging rate is dictated by the OBC's capacity, which is typically lower than DC fast charging.

---

### 6. Future Trends in OBCs

*   **Higher Power Density:** Miniaturization of components and improved thermal management to achieve higher power in smaller packages.
*   **Bidirectional Charging (V2G/V2H):** Enabling the OBC to not only charge the vehicle battery but also to discharge it, feeding power back to the grid (Vehicle-to-Grid) or to a home (Vehicle-to-Home). This requires a DC-AC inverter function within the OBC.
*   **Increased Efficiency:** Continued efforts to improve the efficiency of power conversion stages.
*   **Integration with Other Vehicle Systems:** Potential integration with other power electronics systems within the vehicle.
*   **Wireless Charging Compatibility:** Designing OBCs to work seamlessly with wireless charging systems.

**Reference:** Chau, K. T. (2015). *Electric Vehicles Machines and Drives- Design, Analysis and Application*. This book often discusses emerging trends and future research directions in EV technology, including advancements in charging.

---

### Practice Questions and Answers

**Question 1:** What is the primary function of an On-board Charger (OBC) in an Electric Vehicle?
*   **Answer:** The primary function of an OBC is to convert alternating current (AC) electricity from the power grid into direct current (DC) electricity required to charge the EV's battery pack.

**Question 2:** Name two key functional blocks found within a typical On-board Charger.
*   **Answer:** Two key functional blocks are the Power Factor Correction (PFC) stage and the DC-DC converter. Other valid answers include Input Filter and Control Unit.

**Question 3:** Explain the purpose of the Power Factor Correction (PFC) stage in an OBC.
*   **Answer:** The PFC stage ensures that the current drawn from the AC grid is in phase with the voltage, improving the power factor. This leads to more efficient utilization of the grid supply and reduces harmonic distortion.

**Question 4:** Differentiate between Level 1 and Level 2 charging in terms of power and typical OBC requirements.
*   **Answer:**
    *   **Level 1 Charging:** Uses standard household AC outlets (low voltage, low current), typically supported by lower-power OBCs (1.4-2 kW).
    *   **Level 2 Charging:** Uses dedicated charging stations connected to higher voltage AC supply, requiring higher-power OBCs (3.3 kW to 19.2 kW or more) for faster charging.

**Question 5 (Application Level):** If an EV manufacturer wants to offer a faster charging option for their new model and the current model has a 7.2 kW OBC, what would be the likely upgrade needed for the OBC?
*   **Answer:** The OBC would need to be upgraded to handle a higher power rating, such as 11 kW or 19.2 kW, to enable faster Level 2 charging. This would likely involve using higher-rated power electronic components, improved thermal management, and a more robust control system.

---

### Important Points to Remember

*   **OBC is *inside* the vehicle.** This distinguishes it from off-board chargers or DC fast chargers where the conversion happens externally.
*   **AC to DC conversion is its core job.**
*   **PFC is vital for grid compatibility and efficiency.**
*   **The BMS is the OBC's "brain" for safe charging.**
*   **OBC power rating directly dictates Level 1/Level 2 charging speed.**
*   **Future OBCs are moving towards bidirectionality (V2G/V2H).**

---
