---
title: "Electro chemical energy: Batteries-Battery parameters: C-rating– SoC – DoD -Specific Energy- Specific power (numerical examples)"
subject: "INTRODUCTION TO ENERGY STORAGE SYSTEMS"
module: "Module 2: Kinetic energy: Mechanical"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f36ab3"
status: "completed"
scrapedAt: "2026-05-23T16:37:27.657Z"
---
# Introduction to Energy Storage Systems

## Module 2: Kinetic Energy: Mechanical

### Topic: Electrochemical Energy: Batteries - Battery Parameters

---

### **1. Introduction to Electrochemical Energy Storage (Batteries)**

*   **Definition:** Electrochemical energy storage systems, commonly known as batteries, convert chemical energy into electrical energy through reversible electrochemical reactions. They are a cornerstone of modern energy storage solutions due to their versatility and energy density.
*   **Role in Power Systems (CO1):** Batteries play a crucial role in power systems by:
    *   **Grid Stability:** Providing ancillary services like frequency regulation and voltage support.
    *   **Renewable Energy Integration (CO4):** Smoothing out the intermittent nature of renewable sources like solar and wind.
    *   **Peak Shaving:** Storing excess energy during low demand periods and discharging it during peak demand, reducing strain on the grid.
    *   **Uninterruptible Power Supply (UPS):** Ensuring continuous power to critical loads during grid outages.
    *   **Electric Vehicles (EVs):** Enabling mobility and reducing reliance on fossil fuels.
*   **Comparison to Other Technologies (CO3):**
    *   **Compared to Electrostatic (Capacitors):** Batteries offer higher energy density (store more energy per unit mass/volume) but generally have lower power density (discharge slower) and lower cycle life.
    *   **Compared to Electromagnetic (Inductors):** Batteries are vastly superior in energy density. Inductors are primarily used for power electronics and very short-duration energy storage.

---

### **2. Key Battery Parameters**

Understanding these parameters is crucial for selecting and operating batteries effectively in various applications.

#### **2.1. C-Rating (Charge/Discharge Rate)**

*   **Definition:** C-rating is a measure of the charge or discharge rate of a battery relative to its capacity. It indicates how quickly a battery can be charged or discharged.
*   **Calculation:**
    *   $C$-rating = Discharge Current / Battery Capacity
    *   For example, if a battery has a capacity of 10 Ah:
        *   1C means a discharge current of 10 A.
        *   0.5C means a discharge current of 5 A.
        *   2C means a discharge current of 20 A.
*   **Significance:**
    *   **Higher C-rating:** Indicates a battery capable of delivering or accepting current at a faster rate. This is important for applications requiring high power output (e.g., power tools, EVs).
    *   **Lower C-rating:** Implies slower charging and discharging, which can sometimes lead to longer battery life and less stress on the battery.
*   **Impact on Capacity:** Battery capacity often decreases at higher C-ratings (Peukert's Law).
*   **Reference:** Ter-Gazarian's "Energy Storage for Power Systems" discusses C-rating in the context of battery performance and limitations.

*   **Numerical Example:**
    *   A 10 Ah battery is discharged at 20 A. What is its C-rating?
        *   C-rating = 20 A / 10 Ah = 2C
    *   A 5 Ah battery is charged at 2.5 A. What is its C-rating?
        *   C-rating = 2.5 A / 5 Ah = 0.5C

#### **2.2. State of Charge (SoC)**

*   **Definition:** SoC is the percentage of the battery's total capacity that is currently available for discharge. It's analogous to the fuel gauge in a car.
*   **Calculation:**
    *   $SoC (\%) = (Current Charge / Total Capacity) \times 100\%$
    *   Current Charge can be measured through coulombic counting (integrating current over time) or voltage-based estimation.
*   **Significance:**
    *   **Operation Management:** Essential for managing battery usage, preventing over-discharge, and determining how much energy is remaining.
    *   **Grid Services:** Used to determine the battery's availability for providing services like frequency regulation.
*   **Reference:** Díaz-González, Sumper, and Gomis-Bellmunt's "Energy Storage in Power Systems" covers SoC estimation and its role in system operation.

*   **Numerical Example:**
    *   A 100 Ah battery has 30 Ah of charge remaining. What is its SoC?
        *   $SoC (\%) = (30 Ah / 100 Ah) \times 100\% = 30\%$
    *   A battery starts at 100% SoC. It discharges 15 Ah from a 50 Ah battery. What is its new SoC?
        *   Remaining Capacity = 50 Ah - 15 Ah = 35 Ah
        *   $SoC (\%) = (35 Ah / 50 Ah) \times 100\% = 70\%$

#### **2.3. Depth of Discharge (DoD)**

*   **Definition:** DoD is the percentage of the battery's capacity that has been discharged since the last full charge. It's the opposite of SoC.
*   **Calculation:**
    *   $DoD (\%) = (Discharged Capacity / Total Capacity) \times 100\%$
    *   Alternatively, $DoD (\%) = 100\% - SoC (\%)$
*   **Significance:**
    *   **Battery Lifespan:** Higher DoD levels generally lead to a shorter battery lifespan due to increased stress on the electrode materials and electrolyte.
    *   **Application Design:** For applications requiring long cycle life (e.g., grid-scale storage), operating at lower DoD is preferred.
*   **Reference:** Rastler's "Electricity Energy Storage Technology Options" discusses the impact of DoD on battery longevity across different technologies.

*   **Numerical Example:**
    *   A 200 Ah battery has been discharged by 80 Ah from a full charge. What is its DoD?
        *   $DoD (\%) = (80 Ah / 200 Ah) \times 100\% = 40\%$
    *   If a battery's SoC is 60%, what is its DoD?
        *   $DoD (\%) = 100\% - 60\% = 40\%$

#### **2.4. Specific Energy**

*   **Definition:** Specific energy is the amount of energy a battery can store per unit of mass. It's typically measured in watt-hours per kilogram (Wh/kg).
*   **Calculation:**
    *   Specific Energy (Wh/kg) = Total Energy Stored (Wh) / Battery Mass (kg)
    *   Total Energy Stored (Wh) = Battery Voltage (V) $\times$ Battery Capacity (Ah)
*   **Significance:**
    *   **Portability and Mobility:** Crucial for applications where weight is a concern, such as electric vehicles, portable electronics, and aerospace. Higher specific energy means lighter batteries for the same amount of stored energy.
*   **Reference:** Denholm, Ela, Kirby, and Milligan's "The Role of Energy Storage with Renewable Electricity Generation" often refers to specific energy when comparing battery types for grid-scale applications and EVs.

*   **Numerical Example:**
    *   A battery pack weighs 25 kg and has a total energy capacity of 300 Wh. What is its specific energy?
        *   Specific Energy = 300 Wh / 25 kg = 12 Wh/kg
    *   A battery has a voltage of 12 V, a capacity of 50 Ah, and weighs 5 kg. Calculate its specific energy.
        *   Total Energy = 12 V $\times$ 50 Ah = 600 Wh
        *   Specific Energy = 600 Wh / 5 kg = 120 Wh/kg

#### **2.5. Specific Power**

*   **Definition:** Specific power is the rate at which a battery can deliver energy per unit of mass. It's typically measured in watts per kilogram (W/kg).
*   **Calculation:**
    *   Specific Power (W/kg) = Maximum Power Output (W) / Battery Mass (kg)
    *   Maximum Power Output (W) = Maximum Discharge Current (A) $\times$ Battery Voltage (V)
*   **Significance:**
    *   **Performance:** Indicates how quickly a battery can deliver its stored energy. High specific power is required for applications needing rapid acceleration (e.g., EVs) or high burst power (e.g., power tools).
*   **Reference:** Ter-Gazarian's "Energy Storage for Power Systems" provides insights into power capabilities and their relation to application requirements.

*   **Numerical Example:**
    *   A battery pack weighs 30 kg and can deliver a maximum power of 15 kW (15000 W). What is its specific power?
        *   Specific Power = 15000 W / 30 kg = 500 W/kg
    *   A battery has a voltage of 24 V, a capacity of 100 Ah, and a maximum discharge current of 300 A. It weighs 15 kg. Calculate its specific power.
        *   Maximum Power Output = 300 A $\times$ 24 V = 7200 W
        *   Specific Power = 7200 W / 15 kg = 480 W/kg

---

### **3. Battery Applications and Parameters (CO2, CO4, CO5)**

The importance of each parameter varies significantly with the application:

*   **Electric Vehicles (EVs):**
    *   **Specific Energy:** High importance (longer range for a given battery weight).
    *   **Specific Power:** High importance (acceleration performance).
    *   **SoC:** Moderate importance (range estimation for drivers).
    *   **DoD:** Important for lifespan, but often managed by EV manufacturers.
    *   **C-Rating:** Important for charging speed.

*   **Grid-Scale Energy Storage (Renewable Integration - CO4, Smart Grids - CO5):**
    *   **DoD:** High importance (long cycle life is critical for economic viability).
    *   **SoC:** High importance (managing charge/discharge cycles).
    *   **C-Rating:** Moderate importance (balancing power delivery and cycle life).
    *   **Specific Energy/Power:** Less critical compared to EVs, as weight is less of a constraint. Focus is more on cost per kWh and cycle life.

*   **Portable Electronics:**
    *   **Specific Energy:** Very high importance (long battery life for devices).
    *   **SoC:** High importance (user interface).
    *   **Specific Power:** Moderate importance (depends on device usage).

---

### **4. Important Points to Remember**

*   **Interdependence:** Battery parameters are often interdependent. For example, charging/discharging at high C-rates can reduce usable capacity and accelerate degradation (affecting SoC, DoD, and lifespan).
*   **Battery Chemistry Matters:** Different battery chemistries (e.g., Lithium-ion, Lead-acid, Nickel-metal hydride) have vastly different characteristics for these parameters.
*   **System Integration:** The performance of a battery is also influenced by its integration into a larger system (e.g., Battery Management System - BMS, thermal management).
*   **Degradation:** Over time and with repeated cycling, battery capacity and power capability degrade, affecting all these parameters.

---

### **5. Practice Questions and Exercises**

**Question 1:**
A 12V, 60Ah lead-acid battery has a mass of 20 kg.
a) If it is discharged at a constant current of 15 A, what is its C-rating?
b) How much energy can it store in Wh?
c) If it is discharged by 30 Ah, what is its DoD?
d) Calculate its specific energy in Wh/kg.

**Answer 1:**
a) C-rating = 15 A / 60 Ah = **0.25C**
b) Energy = 12 V $\times$ 60 Ah = **720 Wh**
c) DoD = (30 Ah / 60 Ah) $\times$ 100% = **50%**
d) Specific Energy = 720 Wh / 20 kg = **36 Wh/kg**

---

**Question 2:**
An electric vehicle battery pack has a capacity of 75 kWh and weighs 400 kg. The battery can deliver a peak power of 150 kW.
a) What is the specific energy of the battery pack in Wh/kg?
b) What is the specific power of the battery pack in W/kg?
c) If the battery pack is currently at 70% SoC, how much energy is available?
d) If the battery is discharged by 20 kWh, what is its new SoC and DoD?

**Answer 2:**
a) Specific Energy = 75,000 Wh / 400 kg = **187.5 Wh/kg**
b) Specific Power = 150,000 W / 400 kg = **375 W/kg**
c) Available Energy = 70% of 75 kWh = 0.70 $\times$ 75 kWh = **52.5 kWh**
d) New SoC = 70% - (20 kWh / 75 kWh $\times$ 100%) = 70% - 26.67% = **43.33%**
   DoD = 100% - 43.33% = **56.67%** (or DoD = (Current Discharge / Total Capacity) = 20 kWh / 75 kWh = 26.67% of the *remaining* charge, but DoD is typically calculated from full charge, so the previous calculation is more appropriate. A more precise way to state DoD after partial discharge is $DoD_{new} = DoD_{old} + \Delta DoD$).
   *Correction for part d*: If the battery started at a certain DoD and is discharged by 20 kWh:
   Let's assume it started at 70% SoC, meaning 30% DoD.
   Discharged capacity = 20 kWh. Total capacity = 75 kWh.
   DoD added = (20 kWh / 75 kWh) * 100% = 26.67%
   New DoD = 30% (initial) + 26.67% = **56.67%**
   New SoC = 100% - 56.67% = **43.33%**

---

**Question 3:**
A battery is rated at 50 Ah, 3.7V, and has a lifespan that is significantly reduced when operating with DoD greater than 80%. For a grid energy storage application where the battery is expected to cycle daily for 15 years, would you prioritize a battery with higher specific energy or a battery with a lower maximum DoD tolerance? Explain your reasoning.

**Answer 3:**
For a grid energy storage application with a daily cycling requirement for 15 years, **prioritizing a battery with a lower maximum DoD tolerance (e.g., designed to operate optimally at DoD < 80%) is more important than higher specific energy.**

*   **Reasoning:**
    *   **Lifespan:** Batteries degrade with each charge/discharge cycle, and higher DoD accelerates this degradation. Operating with DoD > 80% implies a higher stress on the battery materials, leading to a shorter overall lifespan. For a 15-year project with daily cycles, achieving the required cycle life is paramount for economic viability.
    *   **Economic Viability:** A battery that degrades too quickly will require premature replacement, significantly increasing the overall cost of the energy storage system. While higher specific energy is desirable for weight or volume constraints (less relevant for grid-scale), it does not guarantee longevity.
    *   **Grid Application Focus:** Grid storage prioritizes reliability, longevity, and cost-effectiveness over portability. Specific energy is a secondary consideration unless space is extremely limited.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
