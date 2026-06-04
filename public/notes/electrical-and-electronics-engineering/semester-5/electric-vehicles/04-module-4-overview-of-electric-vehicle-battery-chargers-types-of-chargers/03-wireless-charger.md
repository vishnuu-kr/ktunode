---
title: "Wireless charger"
subject: "ELECTRIC VEHICLES"
module: "Module 4: Overview of Electric Vehicle Battery Chargers –Types of chargers"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f362b6"
status: "completed"
scrapedAt: "2026-05-23T16:21:44.310Z"
---
# ELECTRIC VEHICLES

## Module 4: Overview of Electric Vehicle Battery Chargers – Types of Chargers

### Topic: Wireless Charger

---

This topic focuses on a specific and evolving method of charging electric vehicles (EVs): **Wireless Charging**. It forms a crucial part of understanding EV charging infrastructure as outlined in Course Outcome CO5.

---

### 1. Introduction to Wireless EV Charging

Wireless power transfer (WPT) for EVs, also known as **Inductive Charging** or **Contactless Charging**, eliminates the need for physical cables to connect the EV to the charging station. This offers greater convenience and aesthetic appeal.

**Key Concepts:**

*   **Inductive Coupling:** The fundamental principle behind most wireless charging systems. It relies on the generation of a magnetic field by a transmitter coil, which then induces a current in a receiver coil.
*   **Electromagnetic Induction:** The process by which a voltage (and thus current) is induced in a conductor when it is exposed to a changing magnetic field (Faraday's Law of Induction).
*   **Resonant Inductive Coupling:** An enhancement of basic inductive coupling that significantly increases the power transfer efficiency and charging distance by tuning both the transmitter and receiver coils to resonate at the same frequency. This is crucial for practical EV charging.

**Learning Outcomes Covered:**

*   **CO5: Study of chargers, charging stations and various communication protocols for EV (Knowledge Level: K2)** - This topic directly addresses the study of a specific type of charger.

---

### 2. Principles of Wireless Power Transfer

Wireless power transfer systems typically consist of a primary (transmitter) and a secondary (receiver) side.

**2.1. Basic Inductive Coupling:**

*   **Transmitter (Ground Side):**
    *   An AC voltage source drives a high-frequency current through a **primary coil (transmitter coil)**.
    *   This alternating current creates a time-varying magnetic field around the coil.
*   **Receiver (Vehicle Side):**
    *   A **secondary coil (receiver coil)** is placed in close proximity to the primary coil.
    *   The changing magnetic field from the primary coil passes through the secondary coil.
    *   According to Faraday's Law, this induces an AC voltage in the secondary coil.
*   **Power Conditioning:** The induced AC voltage in the secondary coil is then rectified, filtered, and regulated to charge the EV's battery.

**2.2. Resonant Inductive Coupling (Enhanced WPT):**

*   **Problem with Basic Inductive Coupling:** Efficiency drops significantly with increasing distance and misalignment between coils. Power transfer capability is also limited.
*   **Solution: Resonance:** By adding capacitors to both the primary and secondary coils, they can be made to resonate at the same operating frequency. This significantly enhances the magnetic coupling and allows for:
    *   **Higher Power Transfer:** More power can be transferred efficiently.
    *   **Increased Efficiency:** Efficiency is less sensitive to coil misalignment and distance.
    *   **Longer Transfer Distances:** Although still relatively short compared to wired charging.

**2.3. System Components:**

*   **Ground Unit (Transmitter):**
    *   **High-Frequency Inverter:** Converts DC power from the grid to high-frequency AC power.
    *   **Primary Coil (Transmitter Coil):** Generates the magnetic field. Often designed as a flat spiral or a more complex shape for optimized coupling.
    *   **Tuning Circuit:** Typically includes capacitors to form a resonant circuit with the primary coil.
    *   **Power Electronics:** For control and regulation.
*   **Vehicle Unit (Receiver):**
    *   **Secondary Coil (Receiver Coil):** Captures the magnetic field.
    *   **Tuning Circuit:** Capacitors to resonate with the secondary coil.
    *   **Rectifier:** Converts the induced AC voltage to DC.
    *   **DC-DC Converter:** Regulates the DC voltage to the level required for battery charging.
    *   **Battery Management System (BMS) Interface:** For communication and control.

**Diagrammatic Representation (Conceptual):**

```
    Grid Power -> DC Link -> High-Frequency Inverter -> Primary Coil --> (Magnetic Field) --> Secondary Coil --> Rectifier -> DC-DC Converter -> EV Battery
                     ^                                                                                                    |
                     |----------------------------------------- (Resonant Capacitors) -----------------------------------|
```

---

### 3. Types of Wireless Charging Systems

Wireless charging systems are often categorized by their power levels and deployment scenarios.

**3.1. By Power Level:**

*   **Low Power (e.g., < 3 kW):** Similar to Qi wireless charging for mobile phones. Not suitable for EVs.
*   **Medium Power (e.g., 3 kW - 22 kW):** Commonly referred to as **Level 2 Wireless Charging**. Suitable for home charging and fleet applications. This is the most prevalent type for current EV wireless charging systems.
*   **High Power (e.g., > 50 kW):** Targeted for faster charging, potentially even dynamic wireless charging (charging while the vehicle is moving). This is still largely in the research and development phase.

**3.2. By Deployment Scenario:**

*   **Static Wireless Charging:** The EV is parked over the charging pad. This is the most common implementation today.
    *   **Residential:** Charging at home, integrated into garage floors or driveways.
    *   **Commercial/Public:** Charging in parking lots, taxi stands, or bus depots.
*   **Dynamic Wireless Charging (Opportunity Charging):** The EV charges while in motion, typically at stop signs, traffic lights, or specific charging lanes. This can significantly reduce battery size requirements by "topping up" the battery frequently.
    *   **Requires highly efficient and robust WPT systems.**
    *   **Complex infrastructure integration.**

---

### 4. Advantages of Wireless EV Charging

*   **Convenience:** No need to handle cables, especially beneficial in adverse weather conditions. Simply park the car over the charging pad.
*   **Aesthetics:** Cleaner appearance without visible charging cables.
*   **Reduced Wear and Tear:** No physical connectors to wear out or break.
*   **Safety:** Reduced risk of electrical shock as there are no exposed connectors. Ideal for public charging points where user interaction is higher.
*   **Automation:** Simplifies the charging process, making it more accessible for users with mobility issues.
*   **Potential for Dynamic Charging:** Enables charging while the vehicle is in motion, revolutionizing EV range and battery management.

---

### 5. Disadvantages of Wireless EV Charging

*   **Lower Efficiency:** Generally less efficient than wired charging (though improving with resonant systems). Efficiency losses can increase energy consumption.
*   **Higher Cost:** The technology is currently more expensive to implement compared to wired charging.
*   **Lower Power Transfer Rates (Typically):** While high-power wireless charging is being developed, current systems often offer slower charging speeds compared to high-power wired DC fast chargers.
*   **Sensitivity to Misalignment and Distance:** Performance (efficiency and power) can degrade significantly if the vehicle is not precisely positioned over the charging pad.
*   **Heat Dissipation:** Inductive coils can generate heat, requiring careful thermal management.
*   **Electromagnetic Compatibility (EMC) and Interference:** Potential for electromagnetic interference with other electronic devices.
*   **Foreign Object Detection (FOD):** Essential safety feature to detect objects (like coins, debris) between the coils that could overheat or cause damage.

---

### 6. Standards and Interoperability

*   **SAE J2954:** A key standard for wireless power transfer for EVs. It defines interoperability, safety, and performance requirements for static wireless charging systems.
*   **Other Standards:** Various international bodies are developing standards, aiming for a common platform for wireless EV charging.

**Important Point to Remember:** Adherence to standards is crucial for ensuring that wireless chargers from different manufacturers can interoperate with EVs from different makers.

---

### 7. Practical Considerations and Future Trends

*   **Alignment Mechanisms:** Research into active or passive alignment systems to guide the vehicle to the optimal charging position.
*   **Efficiency Improvement:** Ongoing research in coil design, magnetic materials, and resonant circuits to boost efficiency.
*   **Higher Power Wireless Charging:** Development of systems capable of delivering DC fast charging levels wirelessly.
*   **Dynamic Wireless Charging Deployment:** Investigating the feasibility and infrastructure requirements for charging EVs while driving on highways or in urban areas.
*   **Cost Reduction:** As the technology matures and production scales, costs are expected to decrease.

---
