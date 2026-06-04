---
title: "EV charging – types"
subject: "HYBRID AND ELECTRIC VEHICLES"
module: "Module 2: Energy storage – Battery basics"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf4804464443"
status: "completed"
scrapedAt: "2026-05-20T18:20:53.323Z"
---
# HYBRID AND ELECTRIC VEHICLES

## Module 2: Energy Storage – Battery Basics

### Topic: EV Charging – Types

**Learning Outcomes:**

*   Understand the different levels and types of EV charging.
*   Differentiate between AC and DC charging.
*   Explain the role of charging infrastructure and connectors.
*   Discuss factors influencing charging time and efficiency.

---

### Introduction to EV Charging

*   **Definition:** EV charging refers to the process of replenishing the energy stored in the battery of an electric vehicle (EV). This energy is typically drawn from the electrical grid or other energy sources.
*   **Importance:** Efficient and accessible charging infrastructure is crucial for the widespread adoption of EVs, enabling convenient and practical usage.
*   **Key Components:**
    *   **EVSE (Electric Vehicle Supply Equipment):** Also known as the charging station or charger, it's the device that delivers electricity to the EV.
    *   **On-board Charger:** This AC-to-DC converter is housed within the EV and manages the charging process.
    *   **EV Battery:** The energy storage system that receives the charge.
    *   **Charging Cable:** Connects the EVSE to the EV.
*   **Charging Process:** Involves power transfer from the grid to the EV battery. The speed and method of this transfer define the charging type.

---

### AC vs. DC Charging

This is a fundamental distinction in EV charging, impacting the location of power conversion and charging speed.

#### 2.1. AC Charging (Alternating Current)

*   **Concept:** In AC charging, the AC electricity from the grid is supplied to the EV. The conversion of AC to DC, which is required for battery charging, is performed by the **on-board charger** within the EV.
*   **Characteristics:**
    *   **Slower Charging Speeds:** Limited by the capacity of the EV's on-board charger.
    *   **More Common for Home and Public Charging:** Often utilizes existing electrical infrastructure.
    *   **Requires AC-to-DC Conversion in the Vehicle:** This adds weight and complexity to the EV.
    *   **Flexibility:** Can be installed at homes, workplaces, and public locations with standard electrical outlets or dedicated charging points.
*   **Types of AC Charging (Levels):**

    ##### 2.1.1. Level 1 Charging

    *   **Description:** Uses a standard household 120V AC outlet. The charging cable typically comes with the EV.
    *   **Power Output:** Approximately 1.4 kW to 2.4 kW.
    *   **Charging Speed:** Very slow. Adds about 2-5 miles of range per hour of charging.
    *   **Typical Use:** Overnight charging at home for plug-in hybrid electric vehicles (PHEVs) or EVs with smaller batteries, or for topping up.
    *   **Example:** Plugging your EV into a regular wall socket in your garage overnight.
    *   **Reference:** Husain (2010) mentions Level 1 charging as the most basic form, utilizing standard household outlets. Ehsani et al. (2018) also describe this as a common starting point for home charging.

    ##### 2.1.2. Level 2 Charging

    *   **Description:** Utilizes a 240V AC circuit, similar to what is used for large appliances like clothes dryers or electric ovens. Requires a dedicated charging station (EVSE).
    *   **Power Output:** Typically ranges from 3.3 kW to 19.2 kW. Common rates are 7 kW or 11 kW.
    *   **Charging Speed:** Significantly faster than Level 1. Adds about 15-60 miles of range per hour of charging, depending on the charger's power output and the EV's charging capability.
    *   **Typical Use:** Home charging, workplace charging, and public charging stations.
    *   **Example:** Installing a 240V charging station in your garage for faster overnight charging or using a public Level 2 charger at a shopping mall.
    *   **Reference:** Larminie & Lowry (2012) emphasize Level 2 as the most common and practical for everyday charging, highlighting the increased charging rates compared to Level 1.

#### 2.2. DC Charging (Direct Current)

*   **Concept:** In DC charging, the AC electricity from the grid is converted to DC **outside** the vehicle, within the charging station itself. The DC power is then directly supplied to the EV battery.
*   **Characteristics:**
    *   **Fast Charging Speeds:** Bypasses the EV's on-board charger, allowing for much higher power delivery.
    *   **Larger and More Complex Charging Stations:** Require significant power infrastructure.
    *   **Less Common for Home Use:** Primarily found at public charging locations.
    *   **Reduces Charging Time Significantly:** Can add hundreds of miles of range in a short period.
*   **Types of DC Charging (Levels):**

    ##### 2.2.1. DC Fast Charging (DCFC) / Level 3 Charging

    *   **Description:** Utilizes high-power DC chargers that bypass the EV's on-board charger and deliver DC power directly to the battery. These are typically found at public charging locations.
    *   **Power Output:** Ranges from 50 kW up to 350 kW and beyond (depending on the standard and infrastructure).
    *   **Charging Speed:** Very rapid. Can add 100-200 miles of range in 15-30 minutes, depending on the charger's power and the EV's charging rate capability.
    *   **Typical Use:** Long-distance travel, quick top-ups when away from home.
    *   **Example:** Using a DC fast charger at a highway rest stop to quickly recharge your EV for your journey.
    *   **Reference:** Ehsani et al. (2018) extensively cover DC fast charging, detailing its importance for reducing charging times and enabling longer trips. Dhameja (2001) might discuss early forms of high-power charging for electric propulsion systems.

---

### Charging Connectors and Standards

The physical connection between the EV and the charging station, as well as the communication protocols used, are critical.

*   **Importance:** Standardized connectors ensure interoperability between different EVs and charging stations.
*   **Key Standards:**

    #### 3.1. J1772 (SAE J1772)

    *   **Type:** AC Charging Connector.
    *   **Description:** The standard connector for Level 1 and Level 2 AC charging in North America.
    *   **Power:** Supports AC charging up to approximately 19.2 kW.
    *   **Pin Configuration:** Includes pins for power (L1, L2), ground, and pilot signal for communication between the EVSE and the EV.
    *   **Reference:** Husain (2010) and Ehsani et al. (2018) will likely discuss J1772 as the prevalent AC charging standard in North America.

    #### 3.2. CHAdeMO (CHArge de MOve)

    *   **Type:** DC Fast Charging Connector.
    *   **Description:** A DC fast charging standard that originated in Japan. It uses DC power and has a separate connector from AC charging.
    *   **Power:** Supports DC charging, typically up to 400 kW in its latest iterations, but commonly found at 50 kW to 100 kW.
    *   **Communication:** Uses CAN bus for communication.
    *   **Usage:** Popular in Japanese vehicles (e.g., Nissan Leaf) and some earlier EVs from other manufacturers.
    *   **Reference:** Ehsani et al. (2018) provide detailed information on CHAdeMO, including its operational principles and market penetration.

    #### 3.3. CCS (Combined Charging System)

    *   **Type:** Combined AC and DC Charging Connector.
    *   **Description:** A global standard designed to combine both AC and DC charging into a single connector. It essentially adds DC pins to the J1772 connector.
    *   **Power:** Supports both AC (Level 1 & 2) and DC fast charging (up to 350 kW and beyond).
    *   **Versions:**
        *   **CCS Type 1 (CCS Combo 1):** Used in North America, combining J1772 with two additional DC pins.
        *   **CCS Type 2 (CCS Combo 2):** Used in Europe and other regions, based on the European Type 2 AC connector with additional DC pins.
    *   **Communication:** Uses Power Line Communication (PLC) over the pilot line for higher-speed data exchange.
    *   **Usage:** Becoming the dominant standard globally, adopted by most major automotive manufacturers.
    *   **Reference:** Larminie & Lowry (2012) and Ehsani et al. (2018) extensively discuss the evolution towards CCS as a unified standard, highlighting its advantages in simplifying charging infrastructure.

    #### 3.4. Tesla Supercharger Connector

    *   **Type:** Proprietary DC Fast Charging Connector.
    *   **Description:** Tesla's proprietary fast charging connector used for their vehicles.
    *   **Power:** High-power DC charging, capable of very fast charge rates.
    *   **Usage:** Exclusive to Tesla vehicles, although Tesla is increasingly opening its network and providing adapters for other EVs.
    *   **Note:** While proprietary, its performance and network availability have been significant.

---

### Charging Infrastructure and Grid Integration

The expansion of charging infrastructure and its impact on the electrical grid are crucial considerations.

*   **Charging Infrastructure:**
    *   **Public Charging Stations:** Found in public parking lots, shopping centers, highway rest stops, and dedicated charging hubs.
    *   **Home Charging:** Installed at residences, offering convenience and often lower electricity rates.
    *   **Workplace Charging:** Increasingly offered by employers as an employee benefit.
*   **Smart Charging:**
    *   **Concept:** A system that manages EV charging to optimize grid load, reduce costs, and integrate with renewable energy sources.
    *   **Features:**
        *   **Load Balancing:** Distributes charging power among multiple EVs to prevent overloading.
        *   **Demand Response:** Adjusts charging times based on grid conditions and electricity prices (e.g., charging during off-peak hours).
        *   **Vehicle-to-Grid (V2G):** Allows EVs to not only draw power from the grid but also to send power back to the grid when needed, acting as mobile energy storage.
    *   **Reference:** Ehsani et al. (2018) likely discusses smart charging and V2G technologies as future integration strategies for EVs. Denton (2020) may also cover the economic and grid-management aspects of EV charging.

---

### Factors Affecting Charging Time and Efficiency

Several factors influence how quickly and efficiently an EV can be charged.

*   **EV Battery Capacity:** Larger batteries generally take longer to charge.
*   **EV's On-board Charger Capacity (for AC charging):** The maximum AC power the EV can accept internally dictates AC charging speed.
*   **Charging Station Power Output:** The wattage of the EVSE or DC charger.
*   **State of Charge (SoC):** Batteries typically charge faster when they are at a lower SoC and slow down as they approach full charge to protect the battery.
*   **Battery Temperature:** Charging is most efficient within a specific temperature range. Extreme cold or heat can slow down charging.
*   **Charging Cable and Connector Capabilities:** The power rating of the cable and connector must match or exceed the charging power.
*   **Grid Connection Capacity:** The capacity of the electrical connection to the charging station.
*   **Efficiency Losses:**
    *   **Conversion Losses:** AC-to-DC conversion (both in the EV and in DC chargers) generates heat, leading to energy loss.
    *   **Cable Resistance:** Longer or thinner cables can have higher resistance, causing minor power loss.
    *   **Thermal Management:** Cooling systems for batteries and charging electronics consume energy.
*   **Reference:** Dhameja (2001) and Husain (2010) would likely discuss the electrical and thermal aspects of battery charging, including efficiency considerations and factors influencing charge rates.

---

### Important Points to Remember

*   **AC Charging:** Power conversion happens **inside** the EV. Slower, uses on-board charger. Level 1 (120V, slow), Level 2 (240V, moderate).
*   **DC Charging:** Power conversion happens **outside** the EV (in the charger). Faster, bypasses on-board charger. DC Fast Charging (high power, very fast).
*   **Connectors:** J1772 (AC North America), CHAdeMO (DC Japan), CCS (Combined AC/DC Global), Tesla (Proprietary DC).
*   **Charging Speed:** Determined by the *lesser* of the EV's charging capability and the charging station's output.
*   **Smart Charging:** Essential for grid stability and cost-effective charging, enabling features like V2G.

---

### Practice Questions

**Question 1:**
Which charging level is typically used for overnight charging at home and utilizes a standard household 120V outlet?
A) Level 1
B) Level 2
C) DC Fast Charging
D) Level 3

**Answer:** A) Level 1
**Explanation:** Level 1 charging uses a standard 120V outlet, which is common for overnight charging at home due to its slower rate.

**Question 2:**
In AC charging, where does the conversion of AC power from the grid to DC power for the battery take place?
A) In the charging station (EVSE)
B) In the vehicle's on-board charger
C) Directly in the EV battery
D) In the electrical utility's substation

**Answer:** B) In the vehicle's on-board charger
**Explanation:** AC charging requires the EV's internal on-board charger to convert AC to DC before it can be stored in the battery.

**Question 3:**
What is the main advantage of DC Fast Charging (DCFC) compared to AC charging?
A) Lower installation cost of the charging equipment
B) Slower charging speeds, which are better for battery longevity
C) Faster charging speeds, enabling longer travel distances
D) It does not require any connection to the electrical grid

**Answer:** C) Faster charging speeds, enabling longer travel distances
**Explanation:** DCFC bypasses the on-board charger, allowing for significantly higher power delivery and thus much faster charging times, crucial for reducing range anxiety on longer trips.

**Question 4:**
Which charging connector standard is common in North America for both AC Level 1 and Level 2 charging?
A) CHAdeMO
B) CCS Type 2
C) Tesla Supercharger
D) J1772

**Answer:** D) J1772
**Explanation:** The SAE J1772 connector is the standard for AC charging in North America.

**Question 5:**
Explain the difference between AC charging and DC charging, including the location of power conversion and typical use cases for each.

**Answer:**
The key difference lies in where the AC-to-DC conversion happens:
*   **AC Charging:** The conversion happens **inside the EV** using its on-board charger. This is generally slower and is common for home (Level 1 & 2) and workplace charging. Level 1 uses 120V and is very slow, while Level 2 uses 240V and is moderately fast.
*   **DC Charging:** The conversion happens **outside the EV** within the charging station itself. The charger directly supplies DC power to the battery. This is much faster (DC Fast Charging) and is typically found at public charging locations for rapid top-ups, enabling longer journeys.

---

This concludes Module 2, Topic: EV Charging – Types. Please refer to the textbooks for further in-depth understanding and specific technical details.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
