---
title: "Sizing considerations of battery -Time and charge/discharge cycles - Lifetime – Beginning of life (BOL) - End of life (EOL) - DOD - Efficiency of Battery Pack - Determination of pack Voltage, range for EV - Determination of Cell/Pack Voltage for a Given Output\Input Power"
subject: "ELECTRIC VEHICLES"
module: "Module 3: Battery based energy storage systems : Types of battery"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f362b0"
status: "completed"
scrapedAt: "2026-05-23T16:21:40.820Z"
---
# Module 3: Battery-Based Energy Storage Systems - Sizing Considerations

## Topic: Sizing Considerations of Battery

This module delves into the critical aspect of battery sizing for Electric Vehicles (EVs). Proper sizing ensures optimal performance, range, and longevity, directly impacting the overall usability and economic viability of EVs.

**Learning Outcomes Covered:**
* Understanding the fundamental factors influencing battery sizing in EVs.
* Analyzing the trade-offs between battery capacity, cost, weight, and performance.
* Calculating battery parameters based on vehicle requirements and operational demands.

**Course Outcomes Addressed:**
* **CO4 (K3):** Analyze the various energy storage systems and energy management strategies. (This topic is a core component of energy storage system analysis).

### 1. Time and Charge/Discharge Cycles

**Key Concepts:**
* **Battery Capacity:** The total amount of electrical energy a battery can store, typically measured in Ampere-hours (Ah) or Watt-hours (Wh).
* **Charge/Discharge Cycles:** Each time a battery is charged and then discharged, it completes one cycle. The number of cycles a battery can endure before its capacity significantly degrades is a critical factor in its lifespan.
* **Depth of Discharge (DOD):** The percentage of the battery's capacity that has been discharged. Higher DOD generally leads to fewer cycles before degradation.
* **C-rate:** A measure of the rate at which a battery is discharged or charged. A 1C rate means the battery is discharged in one hour, a 2C rate in 30 minutes, and a 0.5C rate in two hours. Higher C-rates generally lead to reduced cycle life and efficiency.

**How it Impacts Sizing:**
* **Cycle Life Requirement:** The intended lifespan of the EV (e.g., 10 years, 150,000 miles) directly translates to a required cycle life for the battery. This dictates the type of battery chemistry and management strategies needed.
* **Daily Usage Pattern:** Understanding the typical daily driving distance and charging behavior (e.g., overnight charging vs. frequent opportunity charging) helps estimate the number of charge/discharge cycles per day and thus the total lifetime cycles.

**Example:**
An EV is expected to last 10 years and drive 15,000 miles per year. If the average mileage per charge is 200 miles, the battery will undergo approximately 75 cycles per year (15,000 miles / 200 miles/charge). Over 10 years, this amounts to 750 cycles. If the chosen battery chemistry has a cycle life of 1000 cycles at a certain DOD, it would be a suitable choice.

### 2. Lifetime

**Key Concepts:**
* **Calendar Life:** The lifespan of a battery in terms of time, regardless of usage. Factors like temperature and storage conditions significantly impact calendar life.
* **Cycle Life:** The number of charge/discharge cycles a battery can undergo before its capacity drops to a specified percentage (often 80%) of its initial capacity.
* **Degradation Mechanisms:** Chemical and physical changes within the battery that lead to capacity fade and increased internal resistance. Common mechanisms include lithium plating, SEI layer growth, and active material loss.

**How it Impacts Sizing:**
* **Total Cost of Ownership (TCO):** A longer battery lifetime reduces the need for premature replacement, lowering the TCO of the EV.
* **Battery Warranty:** Manufacturers typically offer warranties based on either time or mileage, whichever comes first. Battery sizing must consider these warranty limitations.
* **Residual Value:** A battery with a longer expected lifetime will contribute to a higher residual value of the EV.

**Important Point to Remember:**
Battery lifetime is a complex interplay of usage (cycles, DOD, C-rate) and environmental factors (temperature). Optimizing these factors is crucial for maximizing battery life.

### 3. Beginning of Life (BOL) and End of Life (EOL)

**Key Concepts:**
* **Beginning of Life (BOL):** Refers to the state of the battery when it is new and has not undergone any significant charge/discharge cycles. At BOL, the battery exhibits its maximum capacity and lowest internal resistance.
* **End of Life (EOL):** Refers to the point at which the battery's performance has degraded to a point where it is no longer considered acceptable for its intended application. For EVs, EOL is typically defined as when the battery's capacity falls below 70-80% of its BOL capacity, or when its internal resistance becomes too high to deliver the required power.

**How it Impacts Sizing:**
* **Range Degradation:** As a battery ages, its usable capacity decreases, leading to a reduction in the EV's range. Battery sizing must account for this degradation to ensure the EV meets its minimum range requirement throughout its operational life.
* **Power Delivery:** Increased internal resistance at EOL can limit the battery's ability to deliver the peak power required for acceleration.

**Example:**
An EV is designed with a 60 kWh battery pack that provides a BOL range of 300 miles. If the EOL is defined as 80% of BOL capacity, the usable capacity at EOL is 48 kWh (60 kWh * 0.80). This would result in an EOL range of approximately 240 miles (300 miles * 0.80), assuming power demands remain consistent.

### 4. Depth of Discharge (DOD)

**Key Concepts:**
* **Depth of Discharge (DOD):** The percentage of the battery's total capacity that has been discharged.
* **Impact on Cycle Life:** Operating a battery at shallower DODs significantly increases its cycle life. This is because deep discharges can lead to more severe degradation mechanisms.

**How it Impacts Sizing:**
* **Usable Capacity vs. Total Capacity:** To achieve a longer cycle life, manufacturers often "reserve" a portion of the battery's total capacity, meaning it's not fully discharged or charged. This "buffer" allows for shallower DODs.
* **Trade-off between Range and Lifespan:** A larger battery pack with a larger buffer will have a longer lifespan but also a higher upfront cost and weight.

**Example:**
A 70 kWh battery pack might be operated between 10% and 90% DOD. This means its usable capacity is effectively 80% of the total capacity (70 kWh * 0.80 = 56 kWh). This strategy prolongs the battery's life compared to discharging it from 100% to 0%.

**Reference (Chau, 2015):** Chapter 4 discusses battery energy storage systems and highlights the importance of DOD management for battery longevity.

### 5. Efficiency of Battery Pack

**Key Concepts:**
* **Round-trip Efficiency:** The ratio of the energy discharged from the battery to the energy input during charging. It's typically expressed as a percentage.
* **Parasitic Losses:** Energy consumed by the battery management system (BMS), thermal management systems, and internal resistance during charge and discharge.
* **Factors Affecting Efficiency:**
    * **State of Charge (SOC):** Efficiency can vary with SOC.
    * **Temperature:** Higher temperatures can improve efficiency up to a point, but extreme temperatures degrade it.
    * **C-rate:** Higher C-rates generally lead to lower efficiency due to increased internal resistance.
    * **Battery Chemistry:** Different battery chemistries have varying intrinsic efficiencies.

**How it Impacts Sizing:**
* **Actual Range:** Lower efficiency means more energy is lost during charging and discharging, reducing the actual usable range for a given battery capacity.
* **Energy Consumption:** A less efficient battery pack will require more energy from the grid to achieve the same driving distance.

**Example:**
A battery pack with a round-trip efficiency of 90% means that for every 10 kWh of energy put into the battery, only 9 kWh can be delivered for propulsion. This 10% loss needs to be factored into the total energy required to cover a certain distance.

**Reference (Miller, 2010):** Discusses the energy balance in hybrid and electric vehicles, including battery pack efficiency as a key parameter.

### 6. Determination of Pack Voltage and Range for EV

**Key Concepts:**
* **Vehicle Power Requirements:** The power needed for acceleration, cruising, and auxiliary systems.
* **Motor Efficiency:** The efficiency of the electric motor in converting electrical energy to mechanical energy.
* **Power Electronics Efficiency:** The efficiency of the inverter and DC-DC converters in the drivetrain.
* **Desired Range:** The target distance the EV should be able to travel on a single charge.

**Steps for Determining Pack Voltage and Range:**

1.  **Determine Vehicle Power Requirements:**
    *   **Traction Force:** Calculate the force needed to overcome rolling resistance, aerodynamic drag, and grade resistance.
    *   **Maximum Acceleration Power:** Based on desired acceleration times and vehicle mass.
    *   **Cruising Power:** Power required to maintain a constant speed.
    *   **Auxiliary Power:** Power for HVAC, lighting, infotainment, etc.

2.  **Determine Motor and Power Electronics Efficiency:** Obtain typical efficiency values for the selected motor and power electronics.

3.  **Calculate Electrical Power Demand at the Battery Terminals:**
    *   `P_elec = P_mech / (η_motor * η_power_electronics)`
        *   `P_elec`: Electrical power required from the battery (Watts)
        *   `P_mech`: Mechanical power required at the wheels (Watts)
        *   `η_motor`: Motor efficiency (decimal)
        *   `η_power_electronics`: Power electronics efficiency (decimal)

4.  **Determine Battery Pack Voltage:**
    *   **Relationship between Voltage, Current, and Power:** `P = V * I`
    *   **Motor Speed and Torque Requirements:** The motor's operating characteristics (e.g., max speed, max torque) often dictate the required bus voltage. Higher voltage systems generally allow for lower current for the same power, which can reduce conductor losses and allow for lighter wiring.
    *   **Component Voltage Ratings:** Availability and voltage ratings of other components like the inverter and onboard charger.
    *   **Safety Considerations:** Higher voltages require more stringent safety measures.

5.  **Determine Required Battery Capacity (Wh) for Desired Range:**
    *   **Energy Consumption per Unit Distance (Wh/km or Wh/mile):** This is a crucial parameter that is often estimated through simulations or by analyzing similar vehicles. It accounts for all power losses in the drivetrain and vehicle systems.
    *   `Energy_Required = Range * Energy_Consumption_per_Unit_Distance`
    *   `Battery_Capacity (Wh) = Energy_Required / Battery_Efficiency`

**Example:**
*   **Vehicle:** A sedan requiring a peak mechanical power of 80 kW for acceleration.
*   **Motor Efficiency:** 92%
*   **Power Electronics Efficiency:** 95%
*   **Electrical Power Demand:** 80 kW / (0.92 * 0.95) ≈ 91.5 kW
*   **Desired Range:** 300 miles
*   **Energy Consumption:** 250 Wh/mile
*   **Battery Efficiency (Round-trip):** 90%

    *   **Total Energy Required:** 300 miles * 250 Wh/mile = 75,000 Wh = 75 kWh
    *   **Battery Capacity needed:** 75 kWh / 0.90 = 83.3 kWh

**Reference (Mi, Masrur, & Gao, 2011):** Chapter 3 provides insights into vehicle performance and energy consumption, which are fundamental to battery sizing.

### 7. Determination of Cell/Pack Voltage for a Given Output/Input Power

**Key Concepts:**
*   **Cell Voltage:** The nominal voltage of a single battery cell (e.g., Li-ion cells are typically around 3.6V to 4.2V).
*   **Pack Voltage:** The total voltage of the battery pack, achieved by connecting cells in series.
*   **Cell Current:** The current flowing through each cell.
*   **Pack Current:** The total current drawn from or supplied to the battery pack.

**Steps for Determining Cell/Pack Voltage:**

1.  **Identify Required Output/Input Power ($P_{out/in}$):** This is the power the battery needs to deliver or accept.

2.  **Determine the System Voltage ($V_{sys}$):** This is often dictated by the motor controller, inverter, or charging system. For instance, many EVs operate on a 400V or 800V architecture.

3.  **Calculate the Required Pack Current ($I_{pack}$):**
    *   `I_{pack} = P_{out/in} / V_{sys}`

4.  **Determine the Number of Cells in Series ($N_s$):**
    *   The pack voltage is achieved by connecting cells in series.
    *   `V_{pack} = N_s * V_{cell\_nominal}`
    *   Therefore, `N_s = V_{pack} / V_{cell\_nominal}`
    *   The required pack voltage ($V_{pack}$) should be slightly higher than the system voltage ($V_{sys}$) to account for voltage drops and ensure sufficient operating range.

5.  **Determine the Number of Cells in Parallel ($N_p$):**
    *   The total pack capacity and current handling capability are determined by connecting cells in parallel.
    *   The current for each cell is `I_{cell} = I_{pack} / N_p`.
    *   To handle the required pack current, the sum of currents from parallel strings must meet or exceed the `I_{pack}`.
    *   This also relates to the C-rate the individual cells will experience. `C_{rate\_cell} = I_{cell} / C_{cell\_nominal}`.

**Example:**
*   **System Requirement:** An EV requires a maximum output power of 150 kW and operates on a 400V system.
*   **Cell Nominal Voltage:** 3.7V
*   **Cell Capacity:** 5 Ah
*   **Battery Pack Efficiency:** 90%

1.  **Required Pack Power at Battery Terminals:** `P_{pack\_out} = P_{output} / η_{pack}` = 150 kW / 0.90 = 166.7 kW

2.  **Required Pack Voltage:** To ensure sufficient voltage, let's target a pack voltage slightly higher, say 450V.

3.  **Number of Cells in Series ($N_s$):** `N_s = V_{pack} / V_{cell\_nominal}` = 450V / 3.7V ≈ 121.6. So, 122 cells in series.

4.  **Required Pack Current ($I_{pack}$):** `I_{pack} = P_{pack\_out} / V_{pack}` = 166.7 kW / 450V ≈ 370.4 A

5.  **Number of Cells in Parallel ($N_p$):**
    *   If we use 5 Ah cells, a single cell can theoretically deliver 5A (at 1C).
    *   The current per cell would be `I_{cell} = I_{pack} / N_p`.
    *   To avoid excessive C-rates on individual cells (e.g., aiming for a max C-rate of 2C), we can calculate the required `N_p`.
    *   Maximum current per cell for 2C rate = 2 * 5 Ah = 10A.
    *   `N_p = I_{pack} / I_{cell\_max}}` = 370.4 A / 10 A ≈ 37.04. So, 38 cells in parallel.

    Therefore, the battery pack would consist of approximately 122 cells in series and 38 cells in parallel (122s38p configuration).

**Reference (Hussein, 2003):** Provides fundamental principles of electric vehicle design, including battery pack configurations.

**Reference (Ehsani, Gao, & Gay):** Discusses battery pack design considerations, voltage and current calculations in detail.

---

### Practice Questions and Answers

**Question 1:**
An EV battery pack has a nominal capacity of 75 kWh and operates with a round-trip efficiency of 92%. If the vehicle consumes 200 Wh per mile, what is the effective range of the vehicle?

**Answer:**
*   Energy available from the battery: 75 kWh * 0.92 = 69 kWh
*   Convert kWh to Wh: 69 kWh * 1000 Wh/kWh = 69,000 Wh
*   Effective Range: 69,000 Wh / 200 Wh/mile = 345 miles

**Question 2:**
A battery cell has a cycle life of 1500 cycles at 80% DOD. If the EV is driven such that it undergoes an average of 1.2 cycles per day with an average DOD of 60%, approximately how long will the battery last in years?

**Answer:**
*   Equivalent cycles at 60% DOD: The relationship between DOD and cycle life is often complex, but a common approximation is that cycle life is inversely proportional to the square of DOD. However, for simplicity in this example, we will assume a more linear relationship or that the 1500 cycles are at a specific (unspecified) DOD that's manageable. If we assume that 80% DOD gives 1500 cycles, then 60% DOD will give more cycles. A simpler approach for this problem is to just count the daily cycles.
*   Total cycles the battery can sustain: 1500 cycles
*   Number of cycles per year: 1.2 cycles/day * 365 days/year = 438 cycles/year
*   Battery life in years: 1500 cycles / 438 cycles/year ≈ 3.42 years

    *Important Note:* This is a simplified calculation. Real-world battery life is significantly influenced by many factors, including the exact relationship between DOD and cycle life for a specific chemistry, temperature, C-rates, etc.

**Question 3:**
An EV inverter operates at a nominal bus voltage of 400V. The motor requires 120 kW of mechanical power. If the motor efficiency is 94% and the inverter efficiency is 97%, what is the current drawn from the battery pack?

**Answer:**
*   Mechanical power required at the motor: 120 kW
*   Electrical power required by the motor: $P_{motor\_elec} = P_{mech} / η_{motor} = 120 \text{ kW} / 0.94 \approx 127.66 \text{ kW}$
*   Electrical power drawn from the battery (considering inverter losses): $P_{battery} = P_{motor\_elec} / η_{inverter} = 127.66 \text{ kW} / 0.97 \approx 131.61 \text{ kW}$
*   Current drawn from the battery: $I_{battery} = P_{battery} / V_{bus} = 131.61 \text{ kW} / 400 \text{ V} = 131610 \text{ W} / 400 \text{ V} \approx 329.03 \text{ A}$

---

### Important Points to Remember

*   **Battery Sizing is a Multi-faceted Optimization Problem:** There's no single "best" size. It involves balancing range, performance, cost, weight, and lifetime.
*   **DOD and Cycle Life are Intertwined:** Managing DOD is crucial for extending battery cycle life.
*   **Efficiency Matters:** Battery pack efficiency directly impacts the usable energy and hence the vehicle's range and overall energy consumption.
*   **BOL vs. EOL:** Always consider the degradation of battery performance over its lifetime when sizing.
*   **Voltage Selection Influences Current and Losses:** Higher voltage systems can lead to lower currents, reducing resistive losses and allowing for lighter wiring.
*   **Consult Manufacturer Data:** Specific battery chemistries have unique performance characteristics and lifespan data that must be consulted.

---
This comprehensive study note covers the essential aspects of battery sizing considerations for electric vehicles, aligning with the provided learning outcomes and course objectives.
