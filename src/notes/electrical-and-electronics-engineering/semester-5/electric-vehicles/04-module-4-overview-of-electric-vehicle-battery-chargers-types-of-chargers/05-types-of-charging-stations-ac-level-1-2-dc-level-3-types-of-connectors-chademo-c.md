---
title: "Types of charging stations - AC Level 1 & 2, DC - Level 3 -Types of Connectors - CHAdeMO, CCS Type1 and 2, GB/T - PIN diagrams and differences (2hrs)"
subject: "ELECTRIC VEHICLES"
module: "Module 4: Overview of Electric Vehicle Battery Chargers –Types of chargers"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f362b8"
status: "completed"
scrapedAt: "2026-05-23T16:21:45.733Z"
---
# ELECTRIC VEHICLES - Module 4: Overview of Electric Vehicle Battery Chargers – Types of Chargers

## Topic: Types of Charging Stations - AC Level 1 & 2, DC - Level 3 - Types of Connectors - CHAdeMO, CCS Type 1 and 2, GB/T - PIN Diagrams and Differences

**Time Allotment:** 2 Hours

### Course Outcomes Addressed:
*   **CO5:** Study of chargers, charging stations and various communication protocols for EV (Knowledge Level: K2)

### Learning Outcomes:
Upon successful completion of this topic, you will be able to:
*   Differentiate between AC Level 1, AC Level 2, and DC Level 3 charging stations.
*   Explain the power transfer mechanisms and typical charging times for each charging level.
*   Identify and describe the different types of EV charging connectors: CHAdeMO, CCS Type 1, CCS Type 2, and GB/T.
*   Understand the pin configurations and functionality of each connector type.
*   Analyze the advantages and disadvantages of each charging standard and connector.
*   Recognize the geographical prevalence of different charging standards.

---

## 1. Introduction to Electric Vehicle Charging

Electric vehicles (EVs) require charging to replenish their battery energy. The process of charging involves a charging station (also known as an EVSE - Electric Vehicle Supply Equipment) that delivers electrical power to the EV's onboard charger or directly to the battery. The type of charging station and connector used significantly impacts the charging speed and compatibility.

**Key Concept:** The charging process involves converting AC power from the grid to DC power required by the EV battery. This conversion can happen either *inside* the vehicle (onboard charger) or *outside* the vehicle (in the charging station).

---

## 2. Types of EV Charging Stations (Charging Levels)

EV charging stations are categorized into three levels based on their power output and charging speed. This categorization is crucial for understanding the trade-offs between convenience, speed, and infrastructure requirements.

### 2.1. AC Level 1 Charging

*   **Description:** This is the most basic and slowest form of EV charging. It utilizes a standard household electrical outlet (typically 120V AC in North America, 230V AC in Europe and other regions).
*   **Power Output:**
    *   North America: 1.4 kW (120V AC @ 12A)
    *   Europe/Other Regions: ~2.3 kW (230V AC @ 10A)
*   **Charging Speed:** Very slow. Adds approximately 3-5 miles of range per hour of charging.
*   **Onboard Charger Role:** The EV's onboard charger handles the AC to DC conversion.
*   **Infrastructure:** Requires no special infrastructure beyond a standard wall outlet.
*   **Typical Use Cases:** Overnight charging at home, charging in parking garages where standard outlets are available.
*   **Advantages:**
    *   Ubiquitous access to standard outlets.
    *   No installation costs for dedicated charging equipment.
    *   Simple and safe.
*   **Disadvantages:**
    *   Extremely slow, may not be sufficient for high-mileage drivers.
    *   Can be inefficient for large battery packs.
*   **Textbook Reference:** While specific levels might not be explicitly detailed as "Level 1, 2, 3" in older texts like Miller (2010) or Hussein (2003), the principles of charging using household power are discussed. Chau (2015) in "Electric Vehicles Machines and Drives" likely elaborates on power electronics and charging topologies that support these levels.

**Example:** Charging a Chevrolet Bolt EV overnight at home using a standard 120V outlet. It might take 30-40 hours to fully charge the battery from empty.

---

### 2.2. AC Level 2 Charging

*   **Description:** This is the most common type of home and public charging for EVs. It uses higher voltage and current than Level 1, typically requiring a dedicated charging station installed by an electrician.
*   **Power Output:** Varies, but commonly ranges from 3.3 kW to 19.2 kW.
    *   Commonly uses 240V AC (North America) or 230V/400V AC (Europe/Other Regions).
    *   Amperage can range from 16A to 80A.
*   **Charging Speed:** Significantly faster than Level 1. Adds approximately 20-30 miles of range per hour of charging, depending on the EV's onboard charger capacity and the charger's output.
*   **Onboard Charger Role:** The EV's onboard charger handles the AC to DC conversion.
*   **Infrastructure:** Requires installation of a dedicated 240V (or higher) circuit and charging station.
*   **Typical Use Cases:** Home charging, workplace charging, public parking lots, shopping centers.
*   **Advantages:**
    *   Much faster charging than Level 1.
    *   Can fully charge most EVs overnight.
    *   Widely available in public charging networks.
*   **Disadvantages:**
    *   Requires professional installation for home charging.
    *   Still slower than DC fast charging.
    *   The charging speed is limited by the EV's onboard charger capacity.
*   **Textbook Reference:** Chau (2015) would discuss power electronics for EV charging, including AC-DC converters used in onboard chargers for Level 2. Ehsani et al. likely covers charging systems in detail, comparing different AC charging options.

**Example:** Installing a 7kW wall charger at home for a Tesla Model 3. It can typically add around 30 miles of range per hour.

---

### 2.3. DC Fast Charging (DCFC) / Level 3 Charging

*   **Description:** This is the fastest method of charging EVs. It bypasses the vehicle's onboard AC-to-DC converter and delivers DC power directly to the battery.
*   **Power Output:** Varies significantly, typically ranging from 25 kW to 350 kW and beyond.
    *   Commonly uses high-voltage DC output.
*   **Charging Speed:** Very fast. Can add 100-200+ miles of range in as little as 20-30 minutes.
*   **Onboard Charger Role:** The onboard charger is bypassed. The charging station performs the AC to DC conversion.
*   **Infrastructure:** Requires specialized, high-power charging stations and often robust grid connections. Installation is complex and expensive.
*   **Typical Use Cases:** Public charging stations along highways, for travelers needing quick top-ups.
*   **Advantages:**
    *   Extremely fast charging, enabling longer journeys.
    *   Convenient for quick charges.
*   **Disadvantages:**
    *   Most expensive charging method.
    *   Requires significant infrastructure investment.
    *   Can potentially stress the battery if used exclusively for very high-power charges without proper battery management.
    *   Limited availability compared to AC charging.
*   **Textbook Reference:** This is a core topic in modern EV literature. Chau (2015) would detail high-power DC-DC converters and power factor correction necessary for DCFC. Mi et al. (2011) might discuss the challenges and advancements in high-power charging systems.

**Example:** Using a 150 kW DC fast charger to charge a Nissan Leaf. It can add a significant amount of range in a short period, making it suitable for road trips.

---

## 3. Types of EV Charging Connectors

Connectors are the physical interface between the charging station and the EV. Different regions and manufacturers have adopted various standards to ensure compatibility and safety.

**Key Concept:** Connectors carry power (DC or AC) and communication signals between the charging station and the vehicle. The communication ensures safe charging parameters are established.

### 3.1. CHAdeMO (Charge de Move)

*   **Origin:** Developed in Japan.
*   **Primary Use:** DC Fast Charging (Level 3).
*   **Connector Type:** Bulky connector with a protective shroud.
*   **Functionality:** Carries both DC power and CAN bus communication signals.
*   **Compatibility:** Widely adopted by Japanese automakers (Nissan, Mitsubishi, Toyota, Mazda) and some European manufacturers. Less common in North America for new EVs.
*   **Power Capabilities:** Supports charging up to 400 kW in its latest iterations, though typical public chargers are around 50 kW or 100 kW.
*   **Advantages:**
    *   Mature DC fast charging standard.
    *   Supports bidirectional charging (Vehicle-to-Grid - V2G) in some implementations, allowing EVs to supply power back to the grid or home.
*   **Disadvantages:**
    *   Less common in North America and Europe for new vehicle models.
    *   Connector is physically larger.
    *   Slower to establish communication compared to CCS.
*   **Textbook Reference:** Ehsani et al. would likely discuss different charging standards and their evolution, including CHAdeMO.

---

### 3.2. CCS (Combined Charging System)

*   **Description:** CCS is a global standard designed to combine AC and DC charging into a single port. It's an evolution of the Type 1 (SAE J1772) and Type 2 (IEC 62196) AC connectors.
*   **Two Variants:**
    *   **CCS Type 1 (CCS Combo 1):** Primarily used in North America and South Korea.
    *   **CCS Type 2 (CCS Combo 2):** Primarily used in Europe, Australia, and many other parts of the world.

#### 3.2.1. CCS Type 1 (CCS Combo 1)

*   **Based On:** SAE J1772 (Type 1) AC connector.
*   **Connector Type:** Features the standard Type 1 connector with two large DC pins added below the AC pins.
*   **Functionality:**
    *   **AC Charging:** Utilizes the top pins (similar to Type 1) for AC charging. The vehicle's onboard charger handles AC to DC conversion.
    *   **DC Charging:** Utilizes the lower two large DC pins for DC fast charging, bypassing the onboard charger. It uses PLC (Power Line Communication) or CAN bus for communication.
*   **Compatibility:** Common in North America for EVs from GM, Ford, BMW, VW, etc.
*   **Advantages:**
    *   Single port for both AC and DC charging.
    *   Industry standard in North America.
    *   Faster communication establishment for DC charging.
*   **Disadvantages:**
    *   Not compatible with Type 2 ports without an adapter (and only for AC charging if the adapter is for AC only).
*   **Textbook Reference:** Modern texts like Chau (2015) will cover the evolution of charging standards and the development of CCS.

#### 3.2.2. CCS Type 2 (CCS Combo 2)

*   **Based On:** IEC 62196 Type 2 connector.
*   **Connector Type:** Features the standard Type 2 connector with two large DC pins added below the AC pins.
*   **Functionality:**
    *   **AC Charging:** Utilizes the top pins (similar to Type 2) for AC charging. The vehicle's onboard charger handles AC to DC conversion.
    *   **DC Charging:** Utilizes the lower two large DC pins for DC fast charging, bypassing the onboard charger. It typically uses PLC communication.
*   **Compatibility:** The de facto standard in Europe and widely adopted globally. Common for EVs from European manufacturers (Audi, Mercedes-Benz, Porsche, etc.) and increasingly adopted by others.
*   **Advantages:**
    *   Single port for both AC and DC charging.
    *   Dominant standard in Europe and many other regions.
    *   More flexible AC charging options (single-phase and three-phase).
*   **Disadvantages:**
    *   Not directly compatible with Type 1 ports.
*   **Textbook Reference:** Similar to CCS Type 1, Chau (2015) and Mi et al. (2011) would be valuable references for understanding the technical aspects and market adoption of CCS Type 2.

---

### 3.3. GB/T (Guobiao Standard)

*   **Origin:** Chinese national standard.
*   **Primary Use:** Used for both AC and DC charging in China.
*   **Connector Type:** Different connectors for AC and DC.
    *   **AC GB/T:** Similar in appearance to IEC Type 2 but with slight pin layout differences.
    *   **DC GB/T:** Distinct DC connector with a larger central DC power section.
*   **Functionality:**
    *   **AC Charging:** Uses AC pins.
    *   **DC Charging:** Uses dedicated DC pins and communication protocols.
*   **Compatibility:** Primarily used in mainland China. Some manufacturers might offer GB/T ports as an option in other regions, or adaptors might be available.
*   **Advantages:**
    *   Standardized for a massive EV market (China).
    *   Supports high DC charging power.
*   **Disadvantages:**
    *   Limited international interoperability outside China.
    *   Different connector designs for AC and DC charging.
*   **Textbook Reference:** While international textbooks might not focus heavily on GB/T, up-to-date research papers and industry reports would cover this standard due to China's significant market share.

---

## 4. PIN Diagrams and Differences

Understanding the pin configurations is crucial for appreciating the functionality and differences between the charging standards.

### 4.1. J1772 (Type 1) - AC Charging Only

*   **AC Level 1 & 2:** Uses the J1772 connector for AC charging.
*   **Pins (7 Pins):**
    1.  **Pilot (P):** Communicates charging status and control signals (PWM signal for vehicle to request current).
    2.  **Proximity (CP):** Detects if the connector is plugged into the vehicle and informs the vehicle about the charger's current capability.
    3.  **AC Neutral:** Provides the neutral connection for AC power.
    4.  **AC Line 1:** Provides the live AC power (e.g., 120V or 240V).
    5.  **Ground:** Safety ground connection.
    6.  **(Unused/Reserved):**
    7.  **(Unused/Reserved):**
*   **Functionality:** The EV's onboard charger converts AC to DC. The Pilot and Proximity pins manage the charging process.

### 4.2. IEC 62196 Type 2 - AC Charging Only

*   **AC Level 1 & 2:** Uses the Type 2 connector for AC charging.
*   **Pins (7 Pins):**
    1.  **Pilot (P):** Similar to J1772, carries PWM signal for charging control.
    2.  **Proximity (CP):** Similar to J1772, detects plug insertion and charger capability.
    3.  **AC Line 1:** Live AC power conductor.
    4.  **AC Line 2:** Second live AC power conductor (for three-phase systems).
    5.  **AC Neutral:** Neutral connection.
    6.  **Ground:** Safety ground.
    7.  **State and Proximity (S&CP):** Used for more advanced signaling (like high-frequency communication for power delivery) and proximity detection, offering more flexibility than J1772's separate CP.
*   **Functionality:** Supports single-phase and three-phase AC charging. The EV's onboard charger converts AC to DC.
*   **Key Difference from J1772:** Support for three-phase AC charging, generally higher AC current ratings, and a more integrated signaling pin.

### 4.3. CHAdeMO - DC Fast Charging

*   **Connector:** Distinct connector, physically larger than AC connectors.
*   **Pins (10 Pins):**
    *   **DC+ & DC-:** High voltage DC power delivery.
    *   **CAN High & CAN Low:** Communication signals via Controller Area Network (CAN bus) for negotiating charging parameters.
    *   **Other pins:** Reserved, diagnostic, or for auxiliary functions like interlock and control.
*   **Functionality:** Direct DC charging to the battery. CAN bus handles all communication. Often supports V2G.

### 4.4. CCS Type 1 (Combo 1) - AC & DC Charging

*   **Connector:** J1772 connector with two additional large DC pins below.
*   **Pins (9 Pins):**
    *   **J1772 AC Pins (5):** Pilot, Proximity, AC Line 1, AC Neutral, Ground. Used for AC Level 1 & 2.
    *   **DC+ & DC-:** High voltage DC power delivery for DCFC.
    *   **CAN High & CAN Low:** Communication via CAN bus for DC charging. (Note: Some implementations might use PLC).
*   **Functionality:** Can perform both AC and DC charging using a single port. DC charging bypasses the onboard charger.

### 4.5. CCS Type 2 (Combo 2) - AC & DC Charging

*   **Connector:** IEC Type 2 connector with two additional large DC pins below.
*   **Pins (9 Pins):**
    *   **Type 2 AC Pins (7):** Pilot, Proximity/State, AC Line 1, AC Line 2, AC Neutral, Ground, plus one reserved/additional signaling pin. Used for AC Level 1 & 2.
    *   **DC+ & DC-:** High voltage DC power delivery for DCFC.
    *   **CAN High & CAN Low:** Communication via CAN bus for DC charging. (Note: Some implementations might use PLC).
*   **Functionality:** Can perform both AC and DC charging using a single port. Supports single-phase and three-phase AC. DC charging bypasses the onboard charger.

### 4.6. GB/T - AC & DC Charging (Separate Connectors)

*   **AC GB/T Connector:**
    *   Similar to Type 2 but with a different pin arrangement for AC lines and neutral.
    *   Carries AC power and communication signals.
*   **DC GB/T Connector:**
    *   Features dedicated DC power pins and communication pins.
    *   Designed for DC fast charging.
*   **Key Difference:** Requires separate AC and DC connectors for the vehicle and charging station.

---

## 5. Key Differences and Considerations

| Feature          | AC Level 1                               | AC Level 2                                | DC Fast Charging (Level 3)               | CHAdeMO                                 | CCS Type 1 (Combo 1)                    | CCS Type 2 (Combo 2)                    | GB/T                                      |
| :--------------- | :--------------------------------------- | :---------------------------------------- | :--------------------------------------- | :-------------------------------------- | :-------------------------------------- | :-------------------------------------- | :--------------------------------------- |
| **Voltage**      | 120V AC (US), 230V AC (EU)               | 240V AC (US), 230/400V AC (EU)            | High Voltage DC (200V - 1000V DC)        | High Voltage DC (50V - 500V DC typically) | High Voltage DC (200V - 1000V DC)       | High Voltage DC (200V - 1000V DC)       | AC: 230V/400V AC; DC: High Voltage DC     |
| **Power Output** | 1.4 kW - 2.3 kW                          | 3.3 kW - 19.2 kW                          | 25 kW - 350+ kW                          | 50 kW - 400 kW                          | 50 kW - 350+ kW                         | 50 kW - 350+ kW                         | AC: up to ~22 kW; DC: up to 350+ kW       |
| **Charging Speed** | Very Slow (3-5 miles/hr)                 | Moderate (20-30 miles/hr)                 | Very Fast (100-200+ miles/20-30min)      | Fast                                    | Fast                                    | Fast                                    | AC: Moderate; DC: Fast                    |
| **Conversion**   | Onboard AC-DC Converter                  | Onboard AC-DC Converter                   | External AC-DC Converter (in station)    | External AC-DC Converter (in station)   | AC Level: Onboard; DC Level: External | AC Level: Onboard; DC Level: External | AC Level: Onboard; DC Level: External     |
| **Connector**    | J1772 (Type 1)                           | J1772 (Type 1)                            | Dedicated DC Connector (CHAdeMO, CCS, GB/T) | CHAdeMO Connector                       | CCS Type 1 Connector                    | CCS Type 2 Connector                    | GB/T AC Connector; GB/T DC Connector      |
| **Region**       | Global                                   | Global                                    | Global                                   | Japan, some global                      | North America, South Korea            | Europe, Global                          | China                                     |
| **Communication**| PWM (Pilot & Proximity)                  | PWM (Pilot & Proximity)                   | CAN bus, PLC                             | CAN bus                                 | CAN bus                                 | CAN bus, PLC                            | Various standards                         |
| **V2G Support**  | No                                       | No                                        | Possible (CHAdeMO, some CCS)             | Yes                                     | Becoming more common                    | Becoming more common                    | Limited                                   |
| **Port Type**    | AC Only                                  | AC Only                                   | DC (or combo)                            | DC (or combo)                           | Combo AC/DC                             | Combo AC/DC                             | Separate AC/DC                            |

---

## 6. Important Points to Remember

*   **AC vs. DC Charging:** AC charging relies on the vehicle's onboard charger, limiting the charging speed by the charger's capacity. DC charging bypasses the onboard charger, allowing for much higher charging rates directly from the station.
*   **Connector Compatibility:** Ensure your EV's charging port is compatible with the charging station's connector. Adapters can be used, but they have limitations (e.g., an AC-only adapter for a CCS port won't enable DC charging).
*   **Regional Standards:** Be aware of the dominant charging standards in your region (e.g., CCS Type 1 in North America, CCS Type 2 in Europe).
*   **Charging Speed Limitations:** The actual charging speed is a combination of the charging station's output, the EV's onboard charger capacity (for AC), the battery's state of charge, and the battery's temperature.
*   **Communication is Key:** The charging station and vehicle communicate to ensure safe and optimal charging. This communication is handled differently by each standard.

---

## 7. Practice Questions

**Question 1:**
Which charging level typically uses a standard household electrical outlet and offers the slowest charging speed?
a) AC Level 2
b) DC Fast Charging
c) AC Level 1
d) CHAdeMO

**Answer:** c) AC Level 1

**Question 2:**
The CCS (Combined Charging System) connector allows for:
a) AC charging only
b) DC charging only
c) Both AC and DC charging through a single port
d) Bidirectional charging only

**Answer:** c) Both AC and DC charging through a single port

**Question 3:**
Which charging connector is primarily used in Japan and is known for its support of Vehicle-to-Grid (V2G) capabilities?
a) CCS Type 2
b) GB/T
c) J1772
d) CHAdeMO

**Answer:** d) CHAdeMO

**Question 4:**
Explain the main difference between AC Level 2 charging and DC Fast Charging in terms of where the AC-to-DC conversion takes place.
**Answer:** AC Level 2 charging utilizes the vehicle's onboard charger to convert AC power from the grid to DC power for the battery. DC Fast Charging bypasses the onboard charger, and the AC-to-DC conversion is performed by the charging station itself, allowing for much higher power delivery.

**Question 5:**
If you are in Europe, which charging connector type would you most commonly expect to find on public charging stations for DC fast charging?
a) CHAdeMO
b) CCS Type 1
c) GB/T
d) CCS Type 2

**Answer:** d) CCS Type 2

---
