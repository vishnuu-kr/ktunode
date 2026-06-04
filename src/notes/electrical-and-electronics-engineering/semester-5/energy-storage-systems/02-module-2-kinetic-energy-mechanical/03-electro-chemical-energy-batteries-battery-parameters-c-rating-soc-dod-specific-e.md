---
title: "Electro chemical energy: Batteries-Battery parameters: C-rating– SoC – DoD -Specific Energy- Specific power (numerical examples)"
subject: "ENERGY STORAGE SYSTEMS"
module: "Module 2: Kinetic energy: Mechanical"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f3625c"
status: "completed"
scrapedAt: "2026-05-23T16:22:02.697Z"
---
# ENERGY STORAGE SYSTEMS

## Module 2: Kinetic Energy: Mechanical

### Topic: Electrochemical Energy: Batteries - Battery Parameters: C-rating, SoC, DoD, Specific Energy, Specific Power (with Numerical Examples)

---

### 1. Introduction to Electrochemical Energy Storage (Batteries)

*   **Definition:** Batteries are electrochemical devices that convert chemical energy into electrical energy through controlled chemical reactions. They are a primary form of energy storage in many applications due to their portability, versatility, and increasingly competitive cost.
*   **Role in Power Systems (CO1):** Batteries play a crucial role in modern power systems, including:
    *   **Grid Stabilization:** Providing frequency regulation and voltage support.
    *   **Renewable Energy Integration (CO4):** Smoothing out intermittent generation from solar and wind power.
    *   **Peak Shaving:** Storing energy during off-peak hours and discharging it during peak demand to reduce strain on the grid and lower electricity costs.
    *   **Uninterruptible Power Supply (UPS):** Providing backup power during grid outages.
    *   **Electric Vehicles (EVs):** Storing energy for propulsion.
*   **Comparison with Other Technologies (CO3):**
    *   **vs. Electrostatic (Capacitors):** Batteries offer higher energy density (more energy stored per unit volume/mass) but lower power density (slower charge/discharge rates) and longer charging times compared to capacitors. Capacitors excel at rapid energy delivery and absorption.
    *   **vs. Electromagnetic (Inductors):** Similar to capacitors, inductors provide high power density but low energy density. They are less common for bulk energy storage compared to batteries.

---

### 2. Key Battery Parameters

Understanding these parameters is crucial for selecting and operating batteries effectively in various applications.

#### 2.1 C-rating (or C-rate)

*   **Definition:** C-rating is a measure of the rate at which a battery is discharged or charged relative to its total capacity. It indicates how quickly the battery can be charged or discharged.
*   **Concept:** A 1C rate means the battery will be fully discharged in 1 hour. A 0.5C rate means it will be discharged in 2 hours, and a 2C rate means it will be discharged in 30 minutes.
*   **Formula:**
    *   `Charge/Discharge Current (A) = C-rating * Battery Capacity (Ah)`
    *   `C-rating = Charge/Discharge Current (A) / Battery Capacity (Ah)`
*   **Significance:**
    *   **Battery Life:** Higher C-rates generally lead to shorter battery life and reduced capacity due to increased internal heat generation and stress on the active materials.
    *   **Power Delivery:** A higher C-rating indicates a higher power capability.
*   **Example:**
    *   A battery with a capacity of 100 Ah.
    *   A 1C discharge rate would be 100 A (100 Ah * 1C). The battery would theoretically last 1 hour.
    *   A 0.5C discharge rate would be 50 A (100 Ah * 0.5C). The battery would theoretically last 2 hours.
    *   A 2C charge rate would be 200 A (100 Ah * 2C). The battery could theoretically be charged in 30 minutes (assuming ideal conditions).
*   **Important Note:** The actual capacity and performance can vary significantly with temperature and the C-rate. Manufacturers usually provide performance curves.

#### 2.2 State of Charge (SoC)

*   **Definition:** SoC represents the current charge level of a battery as a percentage of its total capacity. It's analogous to the fuel gauge in a car.
*   **Concept:**
    *   SoC = 100% means the battery is fully charged.
    *   SoC = 0% means the battery is fully discharged.
*   **Formula:**
    *   `SoC (%) = (Current Charge (Ah) / Total Capacity (Ah)) * 100`
    *   Alternatively, using voltage: `SoC (%) ≈ (Current Voltage - Minimum Voltage) / (Maximum Voltage - Minimum Voltage) * 100` (This is an approximation, as voltage doesn't always change linearly with SoC).
*   **Significance:**
    *   **Operation Management:** Essential for managing battery usage, preventing overcharging and deep discharge, and optimizing performance.
    *   **Lifespan:** Operating a battery at extreme SoC levels (very high or very low) for extended periods can degrade its lifespan.
*   **Example:**
    *   A 100 Ah battery currently holds 60 Ah of charge.
    *   `SoC (%) = (60 Ah / 100 Ah) * 100 = 60%`
*   **Reference:** Ter-Gazarian (2011) likely discusses battery management systems (BMS) where SoC estimation is a critical function.

#### 2.3 Depth of Discharge (DoD)

*   **Definition:** DoD is the percentage of the battery's total capacity that has been discharged since the last full charge. It's the inverse of SoC.
*   **Concept:**
    *   DoD = 0% means the battery has not been discharged since its last full charge.
    *   DoD = 100% means the battery has been fully discharged.
*   **Formula:**
    *   `DoD (%) = (Amount of Energy Discharged (Ah) / Total Capacity (Ah)) * 100`
    *   `DoD (%) = 100% - SoC (%)` (assuming a fully charged battery at 100% SoC)
*   **Significance:**
    *   **Battery Lifespan:** This is a crucial parameter for battery longevity. Repeated deep discharges (high DoD) significantly reduce the number of charge/discharge cycles a battery can endure. Shallow discharges generally lead to longer cycle life.
    *   **Application Suitability:** For applications requiring many cycles (e.g., grid storage for daily cycling), shallower DoD is preferred. For applications where only occasional deep discharge is needed (e.g., emergency backup), higher DoD might be acceptable.
*   **Example:**
    *   A 100 Ah battery starts at 100% SoC. It is discharged until it holds 30 Ah.
    *   Amount discharged = 100 Ah - 30 Ah = 70 Ah.
    *   `DoD (%) = (70 Ah / 100 Ah) * 100 = 70%`
    *   The current SoC would be 30%. `DoD (%) = 100% - 30% = 70%`.
*   **Reference:** Díaz-González et al. (2016) likely covers battery degradation mechanisms, where DoD is a primary factor.

#### 2.4 Specific Energy

*   **Definition:** Specific energy is the amount of energy stored per unit of mass. It's a measure of how much energy a battery can hold relative to its weight.
*   **Units:** Watt-hours per kilogram (Wh/kg).
*   **Formula:**
    *   `Specific Energy (Wh/kg) = Total Energy Stored (Wh) / Battery Mass (kg)`
    *   `Total Energy Stored (Wh) = Battery Capacity (Ah) * Nominal Voltage (V)`
*   **Significance:**
    *   **Portability:** Crucial for applications where weight is a significant constraint, such as electric vehicles, portable electronics, and aerospace. Higher specific energy means more range for EVs or longer operation time for portable devices.
*   **Example:**
    *   A battery pack has a total capacity of 50 Ah and a nominal voltage of 3.7 V. Its total mass is 15 kg.
    *   Total Energy Stored = 50 Ah * 3.7 V = 185 Wh.
    *   `Specific Energy (Wh/kg) = 185 Wh / 15 kg = 12.33 Wh/kg`
*   **Reference:** Rastler (2010) likely provides comparisons of different energy storage technologies based on their specific energy and cost.

#### 2.5 Specific Power

*   **Definition:** Specific power is the rate at which a battery can deliver or absorb energy per unit of mass. It's a measure of a battery's power capability relative to its weight.
*   **Units:** Watts per kilogram (W/kg).
*   **Formula:**
    *   `Specific Power (W/kg) = Maximum Power Output (W) / Battery Mass (kg)`
    *   `Maximum Power Output (W) = Maximum Discharge Current (A) * Nominal Voltage (V)`
*   **Significance:**
    *   **Performance:** Important for applications requiring high power bursts, such as acceleration in electric vehicles, power tools, or high-power grid services. Higher specific power allows for faster acceleration or quicker response times.
*   **Example:**
    *   A battery pack weighs 15 kg and can deliver a maximum current of 200 A at a nominal voltage of 3.7 V.
    *   Maximum Power Output = 200 A * 3.7 V = 740 W.
    *   `Specific Power (W/kg) = 740 W / 15 kg = 49.33 W/kg`
*   **Reference:** Denholm et al. (2010) might discuss the role of specific power in enabling certain grid applications or renewable energy integration scenarios.

---

### 3. Relationship between Parameters and Applications

*   **Electric Vehicles (EVs):**
    *   **High Specific Energy:** Crucial for achieving a good driving range.
    *   **High Specific Power:** Important for acceleration and performance.
    *   **Moderate C-rating:** To balance charging times with battery health.
    *   **Controlled SoC and DoD:** To maximize battery lifespan.
*   **Grid Storage:**
    *   **High Energy Density (Wh/kg or Wh/L):** Less critical than for EVs, but still important for footprint.
    *   **Long Cycle Life (low DoD cycles):** Very important as grid storage systems often undergo daily cycling.
    *   **Moderate Specific Power:** Sufficient for most grid services like peak shaving or frequency regulation.
    *   **Efficient charging/discharging:** Low internal resistance is key.
*   **Portable Electronics:**
    *   **Very High Specific Energy:** To allow for extended operating times without frequent recharging.
    *   **Low C-rating:** Generally acceptable as high power bursts are not usually required.
    *   **Compact size (Volumetric Energy Density):** Equally important as mass.

---

### 4. Practice Questions and Answers

**Question 1:**
A lithium-ion battery has a rated capacity of 5 Ah. What is the current if it is discharged at a 0.8C rate? How long would it take to fully discharge the battery at this rate?

**Answer 1:**
*   **Current:**
    *   Current = C-rating * Capacity
    *   Current = 0.8C * 5 Ah = 4 A
*   **Time to Discharge:**
    *   Time = Capacity / Current
    *   Time = 5 Ah / 4 A = 1.25 hours (or 1 hour and 15 minutes)

**Question 2:**
You have a 12V, 100Ah lead-acid battery. It is discharged from a full state (100% SoC) until it has delivered 70Ah. What is the final SoC and the DoD?

**Answer 2:**
*   **Final SoC:**
    *   Initial charge = 100 Ah
    *   Charge delivered = 70 Ah
    *   Remaining charge = 100 Ah - 70 Ah = 30 Ah
    *   SoC (%) = (Remaining charge / Total capacity) * 100
    *   SoC (%) = (30 Ah / 100 Ah) * 100 = 30%
*   **DoD:**
    *   DoD (%) = (Charge delivered / Total capacity) * 100
    *   DoD (%) = (70 Ah / 100 Ah) * 100 = 70%
    *   Alternatively, DoD (%) = 100% - SoC (%) = 100% - 30% = 70%

**Question 3:**
A battery pack weighs 20 kg and stores a total energy of 1.5 kWh. It can deliver a peak power of 10 kW. Calculate its specific energy and specific power.

**Answer 3:**
*   **Specific Energy:**
    *   Total Energy Stored = 1.5 kWh = 1.5 * 1000 Wh = 1500 Wh
    *   Battery Mass = 20 kg
    *   Specific Energy (Wh/kg) = Total Energy Stored / Battery Mass
    *   Specific Energy = 1500 Wh / 20 kg = 75 Wh/kg
*   **Specific Power:**
    *   Maximum Power Output = 10 kW = 10,000 W
    *   Battery Mass = 20 kg
    *   Specific Power (W/kg) = Maximum Power Output / Battery Mass
    *   Specific Power = 10,000 W / 20 kg = 500 W/kg

---

### 5. Important Points to Remember

*   **C-rating** is about the *rate* of charge/discharge, affecting speed and battery health.
*   **SoC** is the *current level* of charge (0-100%).
*   **DoD** is the *percentage discharged* since the last full charge and is a key indicator of battery *lifespan*.
*   **Specific Energy (Wh/kg)** relates to how much energy is stored *per unit of mass*.
*   **Specific Power (W/kg)** relates to how quickly energy can be delivered or absorbed *per unit of mass*.
*   These parameters are interconnected and influence the suitability of a battery for a particular application.
*   Real-world performance (capacity, lifespan) is affected by temperature, cycling patterns, and age.

---

### 6. Alignment with Course Outcomes

*   **CO1 (Identify the role of energy storage in power systems):** Covered in the introduction, highlighting batteries' importance in grid stabilization, renewables integration, etc. (K3).
*   **CO2 (Classify thermal, kinetic and potential energy storage systems and their applications):** While this module focuses on electrochemical, the broader context of batteries as a storage technology is established, which is one category of energy storage (K3).
*   **CO3 (Compare electrochemical, electrostatic and electromagnetic storage technologies):** A brief comparison is made in the introduction (K3).
*   **CO4 (Illustrate energy storage technology in renewable energy integration):** Batteries' role in smoothing intermittent renewable sources is mentioned (K2).
*   **CO5 (Summarise energy storage technology applications for smart grids):** Batteries' application in grid stabilization, peak shaving, and supporting grid stability are discussed (K2).

---
