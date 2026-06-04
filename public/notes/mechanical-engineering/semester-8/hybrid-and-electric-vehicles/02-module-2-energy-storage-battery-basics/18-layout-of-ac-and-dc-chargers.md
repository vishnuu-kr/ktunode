---
title: "layout of AC and DC chargers"
subject: "HYBRID AND ELECTRIC VEHICLES"
module: "Module 2: Energy storage – Battery basics"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf4804464444"
status: "completed"
scrapedAt: "2026-05-20T18:20:54.023Z"
---
# Module 2: Energy Storage – Battery Basics

## Topic: Layout of AC and DC Chargers

**Learning Outcomes:**

*   Understand the fundamental differences between AC and DC charging.
*   Identify the key components and their functions in AC charging systems.
*   Identify the key components and their functions in DC charging systems.
*   Analyze the role of the onboard charger (OBC) in AC charging.
*   Analyze the role of the off-board charger (DC fast charger) in DC charging.
*   Compare the charging speeds and infrastructure requirements for AC and DC charging.

---

### 1. Introduction to EV Charging

Electric Vehicles (EVs) require a power source to replenish their battery energy. This is achieved through charging. Charging can be categorized into two main types based on the type of electrical current supplied to the vehicle:

*   **AC Charging:** Uses the AC power grid and requires an onboard converter to change AC to DC for battery charging.
*   **DC Charging (Fast Charging):** Uses the DC power grid (or a DC-to-DC converter) and bypasses the onboard converter, directly supplying DC power to the battery.

**Key Concept:** The EV battery itself stores Direct Current (DC) energy. Therefore, any charging process involving Alternating Current (AC) from the grid must incorporate a conversion step from AC to DC.

---

### 2. AC Charging Systems

AC charging is the most common and typically slower form of EV charging. It's suitable for overnight charging at home or during workday parking.

**2.1. How AC Charging Works:**

The AC power from the grid (e.g., household outlet or dedicated charging station) is supplied to the EV. The crucial component in this process is the **Onboard Charger (OBC)**.

**2.2. Key Components of an AC Charging System:**

*   **Power Source (AC Grid):**
    *   **Level 1 Charging:** Uses a standard household 120V AC outlet. Low power, very slow charging (e.g., 1-2 kW).
    *   **Level 2 Charging:** Uses a 240V AC circuit (common in homes, garages, and public charging stations). Higher power, faster charging (e.g., 3-19 kW).
    *   **Reference:** Husain, "Electric and Hybrid Vehicles”: Design Fundamentals," Chapter 5 (Charging Systems) discusses different levels of AC charging.

*   **Charging Cable:** Connects the charging station to the vehicle's charging port. It carries AC power.

*   **EVSE (Electric Vehicle Supply Equipment):** Commonly referred to as the charging station or charging cable with an integrated unit.
    *   **Function:** Manages the flow of AC power from the grid to the vehicle. It includes safety features, communication protocols with the vehicle, and overload protection.
    *   **Key Role:** The EVSE is not the "charger" in the sense of AC-to-DC conversion. It's a sophisticated safety and control device.
    *   **Reference:** Ehsani et al., "Modern Electric, Hybrid Electric and Fuel Cell Vehicles," Chapter 12 (Charging of Electric Vehicles) elaborates on the EVSE's role in safety and communication.

*   **Onboard Charger (OBC):** This is the primary "charger" within the EV for AC charging.
    *   **Location:** Integrated within the electric vehicle.
    *   **Function:**
        *   **AC-to-DC Conversion:** Converts the incoming AC power from the EVSE into DC power suitable for charging the EV's high-voltage battery. This is achieved using **rectifiers** (typically power electronic circuits like bridge rectifiers).
        *   **Power Factor Correction (PFC):** Ensures that the charging system draws power efficiently from the grid, improving the power factor.
        *   **Battery Management System (BMS) Communication:** Interacts with the vehicle's BMS to control the charging process (e.g., charging current, voltage, and termination conditions) based on the battery's state of charge (SoC), temperature, and health.
        *   **Safety Interlocks:** Ensures safe connection and disconnection of power.
    *   **Power Rating:** The OBC's power rating dictates the maximum AC charging speed (e.g., a 7.2 kW OBC will charge at a maximum of 7.2 kW from a Level 2 source).
    *   **Reference:** Larminie & Lowry, "Electric Vehicle Technology Explained," Chapter 6 (Charging and Battery Management) provides detailed insights into the OBC's functionality and its AC-to-DC conversion process.

*   **Vehicle Battery Pack:** Stores the DC energy.

**2.3. Layout of AC Charging:**

```
[AC Grid] --> [EVSE] --> [Charging Cable] --> [EV Charging Port] --> [Onboard Charger (OBC)] --> [Battery Management System (BMS)] --> [Battery Pack]
```

**2.4. Examples:**

*   **Level 1:** Plugging your EV into a standard wall socket using the charging cable that came with the car. Charging takes a very long time (e.g., 40+ hours for a full charge).
*   **Level 2:** Installing a dedicated 240V charging station at home or using public charging stations at shopping malls or workplaces. Charging is significantly faster (e.g., 6-10 hours for a full charge depending on battery size and OBC rating).

---

### 3. DC Charging Systems (Fast Charging)

DC charging, often referred to as DC Fast Charging (DCFC) or Level 3 charging, bypasses the EV's onboard charger, delivering high-power DC directly to the battery. This allows for much faster charging times.

**3.1. How DC Charging Works:**

The DC charging station (also known as an off-board charger) contains the high-power AC-to-DC conversion equipment. This DC power is then directly supplied to the EV's battery pack, bypassing the OBC.

**3.2. Key Components of a DC Charging System:**

*   **Power Source (AC Grid):** Typically uses higher voltage AC power (e.g., 480V or higher) to supply the charging station with the necessary power for fast charging.

*   **DC Fast Charger (Off-Board Charger):**
    *   **Location:** External charging infrastructure, usually found at public charging stations.
    *   **Function:**
        *   **AC-to-DC Conversion:** Contains powerful AC-to-DC converters (rectifiers) that convert the high-power AC input into high-voltage DC output. These are significantly larger and more powerful than OBCs.
        *   **Power Control:** Regulates the DC output voltage and current to meet the charging requirements of the EV battery.
        *   **Communication:** Communicates with the EV's BMS using standards like CCS (Combined Charging System) or CHAdeMO to negotiate charging parameters and monitor the battery's state.
        *   **Cooling Systems:** Requires robust cooling systems due to the high power levels and heat generated.
    *   **Power Rating:** DC chargers are rated in much higher power levels (e.g., 50 kW, 150 kW, 350 kW, and even higher).
    *   **Reference:** Husain, "Electric and Hybrid Vehicles”: Design Fundamentals," Chapter 5 (Charging Systems) covers DC charging infrastructure and its power capabilities. Ehsani et al. also provide extensive details on DC charging architectures.

*   **Charging Cable and Connector:**
    *   **Heavy-Duty Cables:** Capable of handling high currents and voltages.
    *   **Connectors:** Specialized connectors designed for DC fast charging, often with integrated pins for communication and power. Examples include:
        *   **CCS (Combined Charging System):** Combines AC Type 2 charging with DC Type 1 or Type 2 pins for DC charging. (Common in North America and Europe).
        *   **CHAdeMO:** A DC-only charging standard. (Common in Japan and some other regions).
        *   **Tesla Supercharger Connector:** Proprietary connector for Tesla vehicles.
    *   **Reference:** Larminie & Lowry, "Electric Vehicle Technology Explained," Chapter 6 discusses the different connector standards and their suitability for AC and DC charging.

*   **Vehicle's Battery Management System (BMS):**
    *   **Role:** Crucial for DC charging. The BMS monitors battery temperature, voltage, state of charge, and other parameters. It communicates this information to the DC fast charger to ensure the charging process is safe and optimal for the battery's health.
    *   **Control:** The BMS dictates the charging profile (e.g., constant current, constant voltage) to the DC fast charger.

*   **Vehicle Battery Pack:** Receives the DC power directly.

**3.3. Layout of DC Charging:**

```
[AC Grid] --> [DC Fast Charger (Off-Board)] --> [Heavy-Duty Charging Cable & Connector] --> [EV Charging Port] --> [Battery Management System (BMS)] --> [Battery Pack]
```
**(Note: The OBC in the vehicle is bypassed)**

**3.4. Examples:**

*   Using a public DC fast charging station at a highway rest stop or a dedicated charging hub to quickly add a significant amount of range in minutes rather than hours. For instance, a 50 kW charger can add around 60-100 miles of range in 30 minutes, while higher-power chargers can do it even faster.

---

### 4. Comparison of AC and DC Charging

| Feature          | AC Charging (Level 1 & 2)                                   | DC Charging (Level 3 / DCFC)                                |
| :--------------- | :---------------------------------------------------------- | :---------------------------------------------------------- |
| **AC/DC Conversion** | Performed by the **Onboard Charger (OBC)** within the EV. | Performed by the **Off-Board Charger (DC Fast Charger)**.    |
| **Charging Speed** | Slower (hours for full charge).                             | Much faster (minutes for significant charge).               |
| **Power Levels** | 1-2 kW (Level 1), 3-19 kW (Level 2).                       | 50 kW to 350+ kW.                                           |
| **Infrastructure** | Simpler, can use existing household circuits (Level 1), dedicated circuits (Level 2). | Requires high-power AC grid connections and specialized, larger charging stations. |
| **Cost**         | Lower initial cost for charging equipment.                  | Higher initial cost for charging stations and installation. |
| **Vehicle Impact** | Less stress on the battery due to slower charging.        | Can generate more heat; BMS plays a critical role in managing charging to prevent battery degradation. |
| **Location**     | Ideal for home, workplace, or destination charging.         | Ideal for en-route charging on long trips, quick top-ups.   |
| **Reference Text** | Husain, Ehsani et al., Larminie & Lowry.                    | Husain, Ehsani et al., Larminie & Lowry.                    |

**Important Point to Remember:** The OBC is a critical component for AC charging, while the *off-board* DC fast charger is crucial for DC charging. The EV's BMS is vital for *both* types of charging to ensure battery health and safety.

---

### 5. Key Concepts and Definitions Summary

*   **AC Charging:** Utilizes the AC grid and an onboard converter.
*   **DC Charging:** Utilizes the AC grid (converted to DC externally) and directly supplies DC to the battery.
*   **Onboard Charger (OBC):** AC-to-DC converter located inside the EV for AC charging.
*   **EVSE (Electric Vehicle Supply Equipment):** The charging station hardware that manages AC power flow and communication.
*   **DC Fast Charger (Off-Board Charger):** High-power AC-to-DC converter located in the charging infrastructure for DC charging.
*   **Battery Management System (BMS):** Monitors and controls battery charging and discharging for safety and longevity.
*   **CCS (Combined Charging System):** A widely adopted charging standard combining AC and DC capabilities.
*   **CHAdeMO:** A DC fast charging standard.

---

### 6. Practice Questions and Answers

**Question 1:** What is the primary function of the Onboard Charger (OBC) in an electric vehicle during AC charging?
    a) To supply AC power from the grid.
    b) To convert AC power from the grid to DC power for the battery.
    c) To regulate DC power supplied directly from a DC source.
    d) To cool the battery pack.

**Answer 1:** b) To convert AC power from the grid to DC power for the battery.

---

**Question 2:** In a DC fast charging scenario, which component performs the AC-to-DC conversion?
    a) The vehicle's Onboard Charger (OBC).
    b) The Battery Management System (BMS).
    c) The external DC Fast Charger unit.
    d) The charging cable.

**Answer 2:** c) The external DC Fast Charger unit.

---

**Question 3:** List the key components involved in a typical Level 2 AC charging system.
    a) AC Grid, DC Fast Charger, Battery Pack.
    b) AC Grid, EVSE, Charging Cable, OBC, BMS, Battery Pack.
    c) AC Grid, EVSE, DC Fast Charger, BMS, Battery Pack.
    d) AC Grid, Charging Cable, OBC, Battery Pack.

**Answer 3:** b) AC Grid, EVSE, Charging Cable, OBC, BMS, Battery Pack.

---

**Question 4:** Briefly explain the advantage of DC charging over AC charging.
    a) Lower cost of charging infrastructure.
    b) Slower charging speeds, reducing battery stress.
    c) Faster charging speeds, enabling longer journeys.
    d) Simpler installation requirements for public charging.

**Answer 4:** c) Faster charging speeds, enabling longer journeys.

---

**Question 5:** Why is the Battery Management System (BMS) crucial for both AC and DC charging?
    a) The BMS only manages battery cooling.
    b) The BMS is responsible for converting AC to DC.
    c) The BMS monitors battery health, temperature, and state of charge to ensure safe and optimal charging.
    d) The BMS provides power from the grid.

**Answer 5:** c) The BMS monitors battery health, temperature, and state of charge to ensure safe and optimal charging.

---

### 7. Important Points to Remember

*   **Battery is DC:** All EV batteries store DC power.
*   **AC Charging:** Grid AC -> EVSE -> Cable -> **OBC (AC to DC)** -> Battery.
*   **DC Charging:** Grid AC -> **DC Fast Charger (AC to DC)** -> Cable -> Battery (OBC is bypassed).
*   **OBC Rating:** Limits the AC charging speed.
*   **DCFC Rating:** Determines the DC charging speed.
*   **BMS:** Essential for safety and battery health in *all* charging scenarios.
*   **EVSE:** Primarily a safety and communication device for AC charging, not the AC-to-DC converter.

---

### 8. Alignment with Course Outcomes

*   **CO1: Explain the general architecture of Electric vehicles.** (Covered by understanding the placement of charging components within the vehicle architecture.)
*   **CO2: Describe various battery, charging types and battery management of Electric vehicles.** (This topic directly addresses charging types and highlights the role of BMS, which is crucial for battery management during charging.)
*   **CO3: Describe various motors and drives of Electric vehicles.** (Not directly covered in this specific topic, but provides context for why efficient battery charging is necessary.)
*   **CO4: Explain details of power transmission of Electric vehicles and select the appropriate components based on requirement.** (This topic explains the power transmission from the grid to the battery and the components involved, enabling informed selection of charging solutions based on needs.)

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 9. References

*   Husain, I. (2010). *Electric and Hybrid Vehicles”: Design Fundamentals* (2nd ed.). CRC Press. (Chapter 5)
*   Ehsani, M., Gao, Y., Gay, S. E., & Emadi, A. (2018). *Modern Electric, Hybrid Electric and Fuel Cell Vehicles: Fundamentals, Theory and Design* (3rd ed.). CRC Press. (Chapter 12)
*   Larminie, J., & Lowry, J. (2012). *Electric Vehicle Technology Explained* (2nd ed.). Wiley-Blackwell. (Chapter 6)
*   Denton, T. (2020). *Electric and hybrid vehicles* (2nd ed.). CBS Publishers & Distributors Pvt. Ltd.
*   Dhameja, S. (2001). *Electric Vehicle Battery Systems*. Newnes (an imprint of Butterworth-Heinemann Ltd).

---