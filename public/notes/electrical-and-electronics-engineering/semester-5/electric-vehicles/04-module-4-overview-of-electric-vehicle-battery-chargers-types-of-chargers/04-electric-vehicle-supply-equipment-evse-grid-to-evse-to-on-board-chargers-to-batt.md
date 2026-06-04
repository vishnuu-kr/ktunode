---
title: "Electric Vehicle Supply Equipment (EVSE) - Grid to EVSE to On-board chargers to battery pack power flow block schematic diagrams –  V2G concept(3hrs)  "
subject: "ELECTRIC VEHICLES"
module: "Module 4: Overview of Electric Vehicle Battery Chargers –Types of chargers"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f362b7"
status: "completed"
scrapedAt: "2026-05-23T16:21:45.019Z"
---
# Module 4: Overview of Electric Vehicle Battery Chargers – Types of Chargers

## Topic: Electric Vehicle Supply Equipment (EVSE) - Grid to EVSE to On-board Chargers to Battery Pack Power Flow Block Schematic Diagrams – V2G Concept

This module delves into the crucial aspect of electric vehicle (EV) charging, focusing on the equipment involved and the flow of power from the grid to the vehicle's battery. We will explore the concept of Vehicle-to-Grid (V2G) technology, which revolutionizes the traditional charging paradigm.

---

### 1. Understanding Electric Vehicle Supply Equipment (EVSE)

**Definition:**
**Electric Vehicle Supply Equipment (EVSE)**, commonly known as an EV charger, is a piece of equipment that connects an electric vehicle to a source of electricity to recharge its battery pack. It's more than just a plug; it's a sophisticated interface that ensures safe and efficient charging.

**Key Functions of EVSE:**

*   **Safety:** EVSE provides crucial safety features, including ground fault detection, over-current protection, and isolation of the vehicle from the mains supply. This protects both the user and the vehicle from electrical hazards.
*   **Communication:** EVSE communicates with the EV to determine the charging status, battery capacity, and charging requirements. This enables optimized charging.
*   **Power Delivery:** It controls the flow of electricity from the grid to the vehicle, ensuring it's delivered at the correct voltage and current levels.

**Importance of EVSE (Aligns with CO5 - Knowledge Level K2):**
EVSE is a fundamental component for the widespread adoption of EVs. Without safe, reliable, and accessible charging infrastructure, the practical usability of EVs would be severely limited. Understanding EVSE is key to grasping the charging ecosystem.

---

### 2. Power Flow Block Schematic Diagrams

This section illustrates the journey of electrical energy from the grid to the EV's battery. We'll examine the key components involved and their roles.

#### 2.1 Grid to EVSE to On-board Charger to Battery Pack Power Flow

This represents the **conventional charging process**.

**Block Schematic Diagram:**

```mermaid
graph TD
    A[Grid AC Power] --> B{EVSE};
    B -- Controlled AC --> C{On-board Charger};
    C -- DC Power --> D[Battery Pack];

    subgraph EVSE
        B1[Circuit Breaker/Contactor]
        B2[Ground Fault Protection]
        B3[Communication Module]
    end

    subgraph On-board Charger
        C1[Rectifier]
        C2[Power Factor Correction (PFC)]
        C3[DC-DC Converter]
    end

    A --> B1;
    A --> B2;
    B --> B3;
    B3 -- Control Signals --> C;
    B --> C1;
    C1 --> C2;
    C2 --> C3;
    C3 --> D;
```

**Explanation of Components and Power Flow:**

1.  **Grid AC Power:**
    *   This is the alternating current (AC) electricity supplied by the utility grid (e.g., 120V, 240V, or higher voltages for fast charging).
    *   **Source:** Typically, the household electrical system or a dedicated charging station.

2.  **EVSE (Electric Vehicle Supply Equipment):**
    *   **Function:** Acts as an intelligent intermediary between the grid and the vehicle.
    *   **Key Components within EVSE:**
        *   **Circuit Breaker/Contactor:** Protects the circuit from overcurrents and safely connects/disconnects the power.
        *   **Ground Fault Protection (GFCI/RCD):** Detects imbalances in current and immediately shuts off power to prevent electric shock.
        *   **Communication Module (e.g., Pilot Signal):** This is crucial. EVSE communicates with the EV to signal the availability of power and the maximum current it can supply. This is often done via a "pilot signal" using the J1772 standard (North America) or IEC 61851 (Europe).
    *   **Power Transformation:** EVSE typically receives AC power and delivers controlled AC power to the vehicle.

3.  **On-board Charger (OBC):**
    *   **Location:** This is an integral part of the electric vehicle itself.
    *   **Function:** Converts the AC power received from the EVSE into direct current (DC) power that the battery pack can store.
    *   **Key Components within OBC:**
        *   **Rectifier:** Converts AC to pulsating DC.
        *   **Power Factor Correction (PFC):** Improves the power factor of the charging system, making it more efficient and reducing harmonic distortion on the grid.
        *   **DC-DC Converter:** Regulates the voltage and current to precisely match the battery pack's charging requirements. This is a critical component for managing charging speed and battery health.
    *   **Power Transformation:** Converts AC power from EVSE to DC power for the battery.

4.  **Battery Pack:**
    *   **Function:** Stores the electrical energy in DC form.
    *   **Characteristics:** Composed of multiple cells connected in series and parallel to achieve the required voltage and capacity.

**Power Flow Summary:**
Grid AC -> EVSE (controls and protects) -> On-board Charger (converts AC to DC) -> Battery Pack (stores DC)

**Types of Charging (Related to EVSE and OBC):**

*   **Level 1 Charging:** Uses a standard household outlet (120V AC in North America). Slow charging. EVSE is often a simple plug and cord with basic safety features. OBC handles the AC-DC conversion.
*   **Level 2 Charging:** Uses a higher voltage outlet (240V AC in North America). Faster charging. EVSE is typically a dedicated charging station, providing more robust control and communication. OBC is still essential for AC-DC conversion.
*   **Level 3 Charging (DC Fast Charging):** Involves external DC chargers (DCFC) located at charging stations. The EVSE here is the charging station itself, and it bypasses the vehicle's OBC. The charging station performs the AC-DC conversion externally.
    *   **Power Flow for DC Fast Charging:**
        Grid AC -> External DCFC (AC-DC conversion happens here) -> DC Power -> EV Battery Pack.
        *   This eliminates the limitation of the OBC's power rating, allowing for much faster charging.

---

### 3. Vehicle-to-Grid (V2G) Concept

**Definition:**
**Vehicle-to-Grid (V2G)** is a concept where electric vehicles can not only draw power from the grid to charge their batteries but can also **supply power back to the grid** when needed. This essentially turns EVs into mobile energy storage units.

**How it Works:**

*   **Bi-directional Power Flow:** V2G requires a bidirectional charging infrastructure. This means the EVSE and the vehicle's charging system must be capable of both AC-to-DC (charging) and DC-to-AC (discharging) power conversion.
*   **Communication and Control:** Sophisticated communication protocols are necessary for the EV, EVSE, and grid operator to coordinate power flow, demand response, and grid stabilization services.
*   **Battery Management System (BMS):** The vehicle's BMS plays a crucial role in managing the charging and discharging cycles to ensure battery health and longevity.

**Block Schematic Diagram for V2G Power Flow:**

```mermaid
graph TD
    A[Grid AC Power] <--> B{Bidirectional EVSE};
    B -- Controlled AC <--> C{Bi-directional On-board Charger};
    C -- DC Power <--> D[Battery Pack];

    subgraph Bidirectional EVSE
        B1[Circuit Breaker/Contactor]
        B2[Ground Fault Protection]
        B3[Communication Module]
        B4[DC-AC Inverter (for discharging)]
    end

    subgraph Bi-directional On-board Charger
        C1[AC-DC Rectifier]
        C2[Power Factor Correction (PFC)]
        C3[DC-DC Converter]
        C4[DC-AC Inverter (for discharging)]
    end

    A <--> B1;
    A <--> B2;
    B <--> B3;
    B -- Controlled AC --> C1;
    C1 --> C2;
    C2 --> C3;
    C3 <--> C4; % Bidirectional DC conversion
    C4 --> B4; % Bidirectional AC conversion
    B4 <--> A; % Flow back to grid
    C -- DC Power --> D;
    D -- DC Power --> C; % Discharging from battery

```

**Explanation of V2G Additions:**

*   **Bidirectional EVSE:**
    *   **DC-AC Inverter:** This is the key component that allows the EVSE to convert DC power from the EV's battery back into AC power suitable for the grid.
*   **Bi-directional On-board Charger (OBC):**
    *   **DC-AC Inverter:** The OBC itself must be capable of inverting DC to AC. This is a more complex OBC design compared to a unidirectional charger.

**Power Flow in V2G Scenarios:**

*   **Charging:** Grid AC -> Bidirectional EVSE (AC-DC) -> Bi-directional OBC (AC-DC) -> Battery Pack (DC)
*   **Discharging (V2G):** Battery Pack (DC) -> Bi-directional OBC (DC-AC) -> Bidirectional EVSE (DC-AC) -> Grid AC

**Benefits of V2G:**

*   **Grid Stabilization:** EVs can provide ancillary services to the grid, such as frequency regulation and voltage support, by injecting or absorbing power.
*   **Peak Shaving:** EVs can discharge power during peak demand hours, reducing stress on the grid and potentially lowering electricity costs for consumers.
*   **Renewable Energy Integration:** EVs can store excess renewable energy (e.g., from solar or wind) and feed it back to the grid when it's not being generated.
*   **Revenue Generation for EV Owners:** EV owners could be compensated for providing grid services.
*   **Reduced Reliance on Fossil Fuels:** By enabling better integration of renewables, V2G contributes to a cleaner energy system.

**Challenges of V2G:**

*   **Battery Degradation:** Frequent charging and discharging cycles can impact battery lifespan. Careful management by the BMS is crucial.
*   **Infrastructure Costs:** Bidirectional charging equipment (EVSE and OBC) is currently more expensive than unidirectional equipment.
*   **Standardization and Interoperability:** Ensuring seamless communication and power exchange between various EVs, charging stations, and grid operators requires robust standards.
*   **Grid Impact Analysis:** Understanding the cumulative effect of many EVs participating in V2G on the grid is essential.
*   **Regulatory Frameworks:** Policies and market mechanisms are needed to incentivize V2G participation.

**Aligns with CO4 (Knowledge Level K3) & CO5 (Knowledge Level K2):**
V2G directly relates to energy storage systems (CO4) by treating EV batteries as a distributed storage resource. It also builds upon the understanding of chargers and charging stations (CO5) by introducing the bidirectional capability.

---

### 4. Key Concepts and Definitions Recap

*   **EVSE (Electric Vehicle Supply Equipment):** The charging interface between the grid and the EV.
*   **On-board Charger (OBC):** Converts AC to DC within the EV for battery charging.
*   **J1772 / IEC 61851:** Standards for EV charging communication.
*   **V2G (Vehicle-to-Grid):** EV's ability to supply power back to the grid.
*   **Bidirectional Charging:** The capability to charge and discharge a battery.
*   **Ancillary Services:** Grid support functions like frequency regulation and voltage support.
*   **Peak Shaving:** Reducing electricity consumption during periods of high demand.

---

### 5. Important Points to Remember

*   The OBC is the bottleneck for AC charging speed, as it dictates how fast AC power can be converted to DC for the battery.
*   DC fast charging bypasses the OBC by performing AC-DC conversion externally, allowing for much higher power delivery.
*   V2G transforms EVs from passive energy consumers into active participants in the energy grid, offering significant benefits for grid stability and renewable energy integration.
*   Successful V2G implementation hinges on advancements in bidirectional charging technology, robust communication protocols, intelligent battery management, and supportive policy frameworks.

---

### 6. Practice Questions

1.  **Describe the primary role of the On-board Charger (OBC) in the power flow from the grid to an EV battery during AC charging.** (Relates to CO5, K2)
2.  **Explain the key difference in power flow between standard AC charging (Level 1/2) and DC Fast Charging (Level 3).** (Relates to CO5, K2)
3.  **What is Vehicle-to-Grid (V2G) technology? Briefly explain its core principle and one potential benefit.** (Relates to CO4, K3 & CO5, K2)
4.  **Identify two essential safety features that are typically incorporated into EVSE.** (Relates to CO5, K2)
5.  **Why is a bidirectional charger (both EVSE and OBC) necessary for a V2G system?** (Relates to CO4, K3 & CO5, K2)

---

### 7. Answers to Practice Questions

1.  The primary role of the On-board Charger (OBC) is to convert the alternating current (AC) power received from the EVSE into direct current (DC) power. This DC power is then used to charge the EV's battery pack, as batteries store energy in DC form. The OBC also regulates the voltage and current to ensure safe and efficient charging according to the battery's requirements.
2.  In standard AC charging (Level 1/2), the AC power from the grid is delivered to the EVSE, which then supplies AC power to the vehicle's On-board Charger (OBC). The OBC performs the AC-to-DC conversion internally. In DC Fast Charging (Level 3), the charging station itself acts as a powerful external charger. It performs the AC-to-DC conversion externally and delivers high-power DC directly to the EV's battery, bypassing the vehicle's OBC.
3.  Vehicle-to-Grid (V2G) technology allows electric vehicles to not only draw power from the grid to charge their batteries but also to send power back to the grid. Its core principle is bi-directional power flow between the EV and the grid. One potential benefit is grid stabilization, where EVs can inject power to support grid frequency and voltage during peak demand or when renewable energy sources are intermittent.
4.  Two essential safety features typically incorporated into EVSE are:
    *   **Ground Fault Detection/Protection (GFCI/RCD):** This detects leakage current to ground and quickly disconnects the power to prevent electric shock.
    *   **Over-current Protection (Circuit Breaker/Fuse):** This protects the charging circuit and the vehicle from excessive current, preventing overheating and potential damage.
5.  A bidirectional charger is necessary for V2G because the system requires the ability to flow power in both directions. For V2G, the EV needs to discharge its battery. This means the OBC must be able to convert the DC power stored in the battery into AC power suitable for the grid. Similarly, the EVSE must be capable of receiving this AC power from the vehicle and feeding it back into the grid. Without this bidirectional capability, power flow would be restricted to charging only.

---
