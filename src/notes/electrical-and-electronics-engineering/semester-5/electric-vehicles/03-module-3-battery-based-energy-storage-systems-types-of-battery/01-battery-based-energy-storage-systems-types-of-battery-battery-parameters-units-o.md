---
title: "Battery based energy storage systems : Types of battery-battery parameters-units of battery energy storage - capacity rate"
subject: "ELECTRIC VEHICLES"
module: "Module 3: Battery based energy storage systems : Types of battery"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f362ad"
status: "completed"
scrapedAt: "2026-05-23T16:21:38.690Z"
---
# Electric Vehicles: Module 3 - Battery Based Energy Storage Systems

## Topic: Types of Batteries, Battery Parameters, Units of Battery Energy Storage, and Capacity Rate

**Course Outcomes Addressed:** CO4 (Analyse the various energy storage systems and energy management strategies)

**Knowledge Level:** K3 (Analysis)

---

### 1. Introduction to Battery Based Energy Storage Systems in Electric Vehicles

Battery electric vehicles (BEVs) and hybrid electric vehicles (HEVs) rely heavily on battery technology for energy storage. The choice of battery significantly impacts the vehicle's performance, range, cost, and charging characteristics. This module delves into the fundamental aspects of batteries used in electric vehicles.

**Key Concept:** Energy storage systems are crucial for EVs to store electrical energy and supply it to the powertrain, enabling propulsion.

---

### 2. Types of Batteries Used in Electric Vehicles

A variety of battery chemistries have been explored and utilized in EVs. Each has its advantages and disadvantages.

#### 2.1. Lead-Acid Batteries
*   **Description:** One of the oldest and most mature battery technologies. Consists of lead dioxide as the positive electrode, sponge lead as the negative electrode, and sulfuric acid as the electrolyte.
*   **Advantages:** Low cost, high reliability, good power capability.
*   **Disadvantages:** Low energy density, heavy weight, limited cycle life, temperature sensitivity, environmental concerns (lead).
*   **Application in EVs:** Historically used in early EVs and some low-speed electric vehicles. Rarely used in modern passenger EVs due to performance limitations.
*   **Reference:** While not the primary focus for modern EVs, understanding their historical context can be useful. (Mentioned in general discussions of energy storage in some broader EV texts).

#### 2.2. Nickel-Cadmium (NiCd) Batteries
*   **Description:** Uses nickel oxyhydroxide as the positive electrode, cadmium as the negative electrode, and an alkaline electrolyte (potassium hydroxide).
*   **Advantages:** Good cycle life, good power capability, operates well at low temperatures.
*   **Disadvantages:** Lower energy density compared to newer technologies, memory effect, toxicity of cadmium.
*   **Application in EVs:** Limited use in EVs due to energy density and toxicity concerns.
*   **Reference:** Less emphasis in modern texts focused on current EV technology.

#### 2.3. Nickel-Metal Hydride (NiMH) Batteries
*   **Description:** Uses a positive electrode of nickel oxyhydroxide and a negative electrode made of a hydrogen-absorbing alloy.
*   **Advantages:** Higher energy density than NiCd, no memory effect, environmentally friendlier than NiCd.
*   **Disadvantages:** Lower voltage per cell compared to other chemistries, higher self-discharge rate, more expensive than lead-acid.
*   **Application in EVs:** Widely used in HEVs (e.g., Toyota Prius) and some early BEVs.
*   **Reference:**
    *   Miller, J. M. (2010). *Propulsion Systems for Hybrid Vehicles* discusses NiMH as a primary choice for HEVs in its era.
    *   Mi, C., Masrur, M. A., & Gao, D. W. (2011). *Hybrid Electric Vehicles – Principles and applications with practical perspectives* also covers NiMH batteries extensively in the context of HEVs.

#### 2.4. Lithium-ion (Li-ion) Batteries
*   **Description:** Employs lithium ions moving between electrodes through an electrolyte. Different cathode and anode materials lead to various Li-ion sub-types.
*   **Advantages:** High energy density, high power density, long cycle life, low self-discharge rate, no memory effect.
*   **Disadvantages:** Higher cost, potential safety concerns (thermal runaway if not managed), sensitive to overcharging/discharging.
*   **Application in EVs:** The dominant battery technology for modern BEVs and high-performance HEVs.
*   **Key Li-ion Subtypes:**
    *   **Lithium Cobalt Oxide (LCO):** High energy density, but safety and cost issues. Used in some early EVs.
    *   **Lithium Manganese Oxide (LMO):** Better thermal stability and lower cost than LCO. Lower specific energy.
    *   **Lithium Nickel Manganese Cobalt Oxide (NMC):** Excellent balance of energy density, power density, cycle life, and safety. Currently one of the most popular choices for EVs.
    *   **Lithium Nickel Cobalt Aluminum Oxide (NCA):** High energy density and good power, but more expensive and potentially less stable than NMC. Used by Tesla.
    *   **Lithium Iron Phosphate (LFP):** Excellent safety, long cycle life, and lower cost. Lower energy density compared to NMC/NCA. Increasingly popular for EVs.
    *   **Lithium Titanate Oxide (LTO):** Very fast charging and long cycle life, but lower voltage and energy density. Used in niche applications requiring rapid charging.
*   **Reference:**
    *   Chau, K. T. (2015). *Electric Vehicles Machines and Drives* extensively covers Li-ion battery technologies and their role in EVs, including detailed discussions on various chemistries and their performance characteristics.
    *   Ehsani, M., Gao, Y., & Gay, S. E. (Year Not Specified). *Modern Electric, Hybrid and Fuel Cell Vehicles* provides a good overview of Li-ion battery technology and its application in modern EVs.
    *   Hussein, I. (2003). *Electric and Hybrid Vehicles: Design Fundamentals* also discusses the evolution towards Li-ion technologies.

#### 2.5. Solid-State Batteries (Emerging Technology)
*   **Description:** Replaces the liquid electrolyte in Li-ion batteries with a solid electrolyte.
*   **Advantages:** Potentially higher energy density, improved safety (non-flammable), longer cycle life, faster charging.
*   **Disadvantages:** Currently expensive to manufacture, challenges with manufacturing processes, interface issues between electrodes and solid electrolyte.
*   **Application in EVs:** Future technology, not yet widely commercialized in EVs.
*   **Reference:** While not a primary focus in older texts, contemporary research and industry publications discuss solid-state batteries as the next frontier.

---

### 3. Battery Parameters

Understanding key battery parameters is essential for characterizing performance, selecting appropriate batteries, and managing their operation.

#### 3.1. Nominal Voltage (V)
*   **Definition:** The average voltage of a battery cell during discharge. It's a characteristic of the electrochemical system.
*   **Unit:** Volts (V).
*   **Example:** A typical Li-ion cell has a nominal voltage of 3.6V or 3.7V.

#### 3.2. Capacity (Ah)
*   **Definition:** The amount of electrical charge a battery can deliver. It represents how much current the battery can supply for a given time.
*   **Unit:** Ampere-hours (Ah).
*   **Calculation:** Capacity = Current (A) × Time (h)
*   **Example:** A battery with a capacity of 10Ah can theoretically deliver 1A for 10 hours, or 10A for 1 hour.
*   **Important Note:** Capacity is usually specified at a particular discharge rate and temperature.

#### 3.3. Energy Capacity (Wh)
*   **Definition:** The total amount of energy a battery can store and deliver.
*   **Unit:** Watt-hours (Wh).
*   **Calculation:** Energy Capacity (Wh) = Nominal Voltage (V) × Capacity (Ah)
*   **Example:** A battery pack with a nominal voltage of 400V and a capacity of 50Ah has an energy capacity of 400V * 50Ah = 20,000 Wh or 20 kWh.
*   **Reference:** This is a fundamental concept discussed in all EV literature, particularly when comparing vehicle range and battery size. (Chau, Miller, Mi et al., Ehsani et al.).

#### 3.4. Internal Resistance (Ω)
*   **Definition:** The resistance within the battery that impedes the flow of ions and electrons. It leads to voltage drop and heat generation during charge/discharge.
*   **Unit:** Ohms (Ω).
*   **Types:**
    *   **DC Internal Resistance:** Measured when the battery is at rest.
    *   **AC Internal Resistance:** Measured at specific frequencies, often used to assess battery health.
*   **Impact:** Higher internal resistance leads to lower efficiency, reduced power output, and faster degradation.
*   **Reference:** Crucial for power delivery calculations and thermal management discussions. (Chau, Miller).

#### 3.5. Cycle Life
*   **Definition:** The number of charge-discharge cycles a battery can undergo before its capacity degrades to a specified percentage of its initial value (typically 80%).
*   **Unit:** Number of cycles.
*   **Factors affecting Cycle Life:** Depth of discharge (DoD), charge/discharge rates, temperature, state of charge (SoC) management.
*   **Example:** A battery might be rated for 2000 cycles to 80% of its initial capacity.

#### 3.6. Depth of Discharge (DoD)
*   **Definition:** The percentage of the battery's capacity that has been discharged.
*   **Unit:** Percentage (%).
*   **Impact:** Frequent deep discharges (high DoD) generally reduce the cycle life of most battery chemistries, especially Li-ion.
*   **Example:** Discharging a 100Ah battery to 20Ah remaining means a DoD of 80%.

#### 3.7. State of Charge (SoC)
*   **Definition:** The current charge level of the battery relative to its full capacity.
*   **Unit:** Percentage (%).
*   **Example:** A battery with 80% SoC has 80% of its capacity available.
*   **Importance:** Battery Management Systems (BMS) constantly monitor and manage SoC for optimal performance and safety.

#### 3.8. State of Health (SoH)
*   **Definition:** An indicator of the battery's current condition and its ability to deliver its rated capacity and power. It's a measure of degradation.
*   **Unit:** Percentage (%).
*   **Factors Affecting SoH:** Age, cycle history, operating conditions.
*   **Importance:** BMS uses SoH to predict remaining useful life and adjust charging/discharging strategies.

#### 3.9. Power Density (W/kg or W/L)
*   **Definition:** The amount of power a battery can deliver per unit of weight or volume.
*   **Unit:** Watts per kilogram (W/kg) or Watts per liter (W/L).
*   **Importance:** Crucial for accelerating EVs and for packaging the battery within the vehicle.

#### 3.10. Energy Density (Wh/kg or Wh/L)
*   **Definition:** The amount of energy a battery can store per unit of weight or volume.
*   **Unit:** Watt-hours per kilogram (Wh/kg) or Watt-hours per liter (Wh/L).
*   **Importance:** Directly impacts the EV's range. Higher energy density means longer range for a given battery weight or volume.

---

### 4. Units of Battery Energy Storage

Understanding the units is crucial for quantifying battery capacity and energy.

*   **Ampere-hour (Ah):** Unit of electric charge. It represents the quantity of electricity.
    *   **Formula:** Charge (Coulombs) = Current (Amperes) × Time (seconds)
    *   **Conversion:** 1 Ah = 3600 Coulombs (since 1 hour = 3600 seconds).
*   **Watt-hour (Wh):** Unit of electrical energy. It represents the amount of energy stored or delivered.
    *   **Formula:** Energy (Joules) = Power (Watts) × Time (seconds)
    *   **Formula:** Energy (Watt-hours) = Voltage (Volts) × Ampere-hours (Ah)
    *   **Conversion:** 1 Wh = 3600 Joules.
*   **Kilowatt-hour (kWh):** A larger unit of energy commonly used for EV battery packs. 1 kWh = 1000 Wh.
    *   **Example:** A typical EV battery pack might have a capacity of 50 kWh to 100 kWh.

---

### 5. Capacity Rate (C-rate)

The C-rate is a measure of the rate at which a battery is discharged or charged relative to its capacity. It's a convenient way to express charge/discharge currents independently of the battery's actual capacity.

*   **Definition:** The C-rate expresses the current as a multiple of the battery's nominal capacity.
*   **Formula:** C-rate = Discharge/Charge Current (A) / Battery Capacity (Ah)
*   **Interpretation:**
    *   **1C:** The current that would discharge/charge the battery in 1 hour.
        *   For a 100Ah battery, 1C = 100A.
    *   **0.5C (or C/2):** The current that would discharge/charge the battery in 2 hours.
        *   For a 100Ah battery, 0.5C = 50A.
    *   **2C:** The current that would discharge/charge the battery in 0.5 hours (30 minutes).
        *   For a 100Ah battery, 2C = 200A.
    *   **C/10 (or 0.1C):** The current that would discharge/charge the battery in 10 hours.
        *   For a 100Ah battery, C/10 = 10A.
*   **Importance:**
    *   **Battery Life:** Higher C-rates (faster discharge/charge) can reduce battery lifespan and efficiency due to increased internal resistance losses and heat generation.
    *   **Performance:** Different battery chemistries have different optimal C-rate ranges for performance and longevity.
    *   **Comparison:** Allows for fair comparison of charge/discharge rates between batteries of different capacities.
*   **Reference:** Crucial for understanding charging times, power capabilities, and battery health management. (Chau, Miller, Mi et al.).

**Example:**
If an EV battery has a capacity of 60Ah and its driver wants to charge it at a rate that would fully charge it in 2 hours, what is the C-rate?
*   Charge current required = 60Ah / 2h = 30A.
*   C-rate = 30A / 60Ah = 0.5C or C/2.

If the same 60Ah battery needs to deliver a peak power requiring 180A, what is the C-rate?
*   C-rate = 180A / 60Ah = 3C. This is a very high discharge rate and would likely only be sustainable for a short period.

---

### 6. Important Points to Remember

*   **Li-ion is Dominant:** Lithium-ion batteries are the current standard for most modern EVs due to their high energy and power densities.
*   **Energy Density = Range:** Higher Wh/kg directly translates to longer EV range.
*   **Power Density = Acceleration:** Higher W/kg enables quicker acceleration.
*   **Wh vs. Ah:** Wh is the measure of energy, which directly relates to how far an EV can travel. Ah is a measure of charge.
*   **C-rate for Speed:** The C-rate dictates the speed of charging and discharging. Higher C-rates mean faster charging but can stress the battery.
*   **BMS is Key:** Battery Management Systems (BMS) are essential for monitoring SoC, SoH, temperature, and managing charge/discharge to ensure safety, longevity, and optimal performance.
*   **Trade-offs Exist:** No single battery chemistry is perfect. There are always trade-offs between cost, energy density, power density, safety, and cycle life.

---

### 7. Practice Questions and Answers

**Question 1:**
An electric vehicle is equipped with a battery pack that has a nominal voltage of 400V and a capacity of 75Ah.
a) What is the total energy storage capacity of this battery pack in kWh?
b) If the battery is discharged at a constant current of 50A, what is the C-rate of discharge?
c) If the battery is discharged at 50A for 1.5 hours, how much energy (in Wh) has been delivered? What is the remaining capacity in Ah?

**Answer 1:**
a) Energy Capacity (Wh) = Nominal Voltage × Capacity
   Energy Capacity (Wh) = 400V × 75Ah = 30,000 Wh
   Energy Capacity (kWh) = 30,000 Wh / 1000 = 30 kWh

b) C-rate = Discharge Current / Battery Capacity
   C-rate = 50A / 75Ah = 0.667C (or 2/3 C)

c) Energy Delivered (Wh) = Discharge Current (A) × Voltage (V) × Time (h)
   Energy Delivered (Wh) = 50A × 400V × 1.5h = 30,000 Wh
   Alternatively, Energy Delivered (Wh) = Discharge Current (A) × Voltage (V) × Time (h) = Power (W) × Time (h)
   Power = 50A * 400V = 20,000W = 20kW
   Energy = 20kW * 1.5h = 30kWh = 30,000 Wh
   Capacity Discharged (Ah) = Discharge Current (A) × Time (h)
   Capacity Discharged (Ah) = 50A × 1.5h = 75Ah
   Remaining Capacity (Ah) = Initial Capacity (Ah) - Capacity Discharged (Ah)
   Remaining Capacity (Ah) = 75Ah - 75Ah = 0Ah
   *Note: This implies the battery was fully discharged, which is unusual in practice. If the question implied the 50A discharge continued for 1.5 hours, and the battery *started* with 75Ah capacity, then it means the entire capacity was used.*

**Question 2:**
Why is energy density (Wh/kg) more critical for determining an EV's range than capacity rate (C-rate)?

**Answer 2:**
Energy density (Wh/kg) dictates how much total energy can be stored in a given weight of the battery. A higher energy density means the battery can store more energy for the same weight, allowing the vehicle to travel further on a single charge. The capacity rate (C-rate), on the other hand, determines how quickly that energy can be accessed (discharged) or replenished (charged). While important for acceleration and charging speed, it doesn't directly determine the total distance the vehicle can cover, which is limited by the total amount of stored energy.

**Question 3:**
List three advantages and three disadvantages of Nickel-Metal Hydride (NiMH) batteries compared to Lithium-ion batteries for EV applications.

**Answer 3:**
**Advantages of NiMH over Li-ion:**
1.  **Lower Cost:** Generally less expensive to manufacture than Li-ion batteries.
2.  **Robustness/Safety:** Less prone to thermal runaway and generally considered safer than early Li-ion chemistries.
3.  **Performance at Low Temperatures:** Can perform better than some Li-ion chemistries in very cold environments.

**Disadvantages of NiMH compared to Li-ion:**
1.  **Lower Energy Density:** Stores less energy per unit of weight and volume, leading to shorter EV range or larger/heavier battery packs.
2.  **Higher Self-Discharge Rate:** Loses charge more quickly when not in use.
3.  **Lower Voltage per Cell:** Requires more cells in series to achieve the same pack voltage, increasing complexity.

---

### 8. Alignment with Course Outcomes

*   **CO4: Analyse the various energy storage systems and energy management strategies (Knowledge Level: K3)**
    *   This entire module directly addresses CO4 by detailing different types of batteries (energy storage systems) and their fundamental parameters, which are essential for analyzing and managing their performance within an EV. The discussion of parameters like capacity, voltage, internal resistance, and C-rate lays the groundwork for understanding how energy storage systems are managed in EVs.

---
