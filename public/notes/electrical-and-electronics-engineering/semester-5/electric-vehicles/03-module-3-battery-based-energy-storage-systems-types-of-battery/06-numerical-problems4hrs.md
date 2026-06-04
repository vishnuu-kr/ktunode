---
title: "Numerical problems.(4hrs)"
subject: "ELECTRIC VEHICLES"
module: "Module 3: Battery based energy storage systems : Types of battery"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f362b2"
status: "completed"
scrapedAt: "2026-05-23T16:21:42.254Z"
---
# Electric Vehicles: Module 3 - Battery Based Energy Storage Systems: Types of Battery - Numerical Problems (4 Hours)

This module delves into the numerical aspects of battery-based energy storage systems in electric vehicles (EVs), focusing on understanding and calculating key battery parameters. We will explore various battery chemistries and their performance characteristics through practical numerical examples, aligning with the course outcomes related to energy storage systems and their analysis.

---

## 1. Introduction to Battery-Based Energy Storage Systems in EVs (K2 - Knowledge Level)

Before diving into numerical problems, it's crucial to grasp the fundamental role of batteries in EVs and their general characteristics.

### 1.1 Function of Batteries in EVs

*   **Primary Energy Source:** Batteries are the sole or primary energy source for Battery Electric Vehicles (BEVs).
*   **Energy Buffer:** In Hybrid Electric Vehicles (HEVs) and Plug-in Hybrid Electric Vehicles (PHEVs), batteries act as an energy buffer, storing energy from regenerative braking or the internal combustion engine (ICE) and supplying it to the electric motor.
*   **Power Delivery:** Batteries provide the high power required for acceleration and the continuous power for cruising.

### 1.2 Key Battery Parameters for Numerical Analysis

*   **Nominal Voltage (V_nom):** The average voltage of a battery cell or pack under typical operating conditions.
*   **Capacity (C):** The amount of electrical charge a battery can store, typically measured in Ampere-hours (Ah) or milliAmpere-hours (mAh). It represents the quantity of electricity that can be delivered by the battery at a specific rate.
*   **Energy (E):** The total amount of electrical energy stored in a battery, calculated as the product of voltage and capacity. Usually measured in Watt-hours (Wh) or kilowatt-hours (kWh).
*   **Internal Resistance (R_int):** The resistance within the battery cell itself, which causes voltage drop and power loss during charging and discharging.
*   **State of Charge (SoC):** The current charge level of a battery, expressed as a percentage of its total capacity.
*   **Depth of Discharge (DoD):** The percentage of the battery's capacity that has been discharged.
*   **Cycle Life:** The number of charge-discharge cycles a battery can endure before its capacity degrades to a specified level (e.g., 80% of its initial capacity).
*   **Power Density (W/kg or kW/kg):** The power output per unit mass.
*   **Energy Density (Wh/kg):** The energy stored per unit mass.
*   **Peukert's Law:** An empirical relationship that describes the effect of discharge rate on the effective capacity of a lead-acid battery.

---

## 2. Numerical Problems Related to Battery Capacity and Energy (K3 - Knowledge Level)

This section focuses on calculations involving battery capacity and energy, essential for understanding the range and power delivery capabilities of EVs.

### 2.1 Calculating Total Energy Stored

**Concept:** The total energy stored in a battery pack is the product of its nominal voltage and its capacity.

**Formula:**
$$E = V_{nom} \times C$$
where:
*   $E$ is the energy in Watt-hours (Wh)
*   $V_{nom}$ is the nominal voltage in Volts (V)
*   $C$ is the capacity in Ampere-hours (Ah)

**Example 1:**
An EV uses a battery pack with a nominal voltage of 400 V and a capacity of 150 Ah. Calculate the total energy stored in the battery pack in kWh.

**Solution:**
$$E = 400 \text{ V} \times 150 \text{ Ah} = 60,000 \text{ Wh}$$
To convert to kWh:
$$E = \frac{60,000 \text{ Wh}}{1000} = 60 \text{ kWh}$$

**Reference:** This concept is fundamental and discussed in Chapter 3 of "Electric Vehicles Machines and Drives- Design, Analysis and Application" by K. T. Chau.

### 2.2 Calculating Required Battery Capacity for a Given Range

**Concept:** The battery capacity needed depends on the vehicle's energy consumption and the desired driving range.

**Formula:**
$$C = \frac{\text{Energy Consumption} \times \text{Range}}{V_{nom}}$$
where:
*   $C$ is the capacity in Ah
*   Energy Consumption is typically in Wh/km or kWh/100km
*   Range is in km
*   $V_{nom}$ is the nominal voltage in V

**Example 2:**
An electric car has an average energy consumption of 150 Wh/km. If the desired driving range is 400 km and the battery pack voltage is 350 V, what is the required battery capacity in Ah?

**Solution:**
First, calculate the total energy required for the range:
$$E_{required} = 150 \text{ Wh/km} \times 400 \text{ km} = 60,000 \text{ Wh}$$
Now, calculate the capacity:
$$C = \frac{60,000 \text{ Wh}}{350 \text{ V}} \approx 171.43 \text{ Ah}$$

**Practice Question 1:**
A commercial EV bus requires a range of 300 km and has an energy consumption of 1.2 kWh/km. If the bus utilizes a 600 V battery system, what is the minimum battery capacity required in Ah?

**Answer:**
Total energy required = 1.2 kWh/km * 300 km = 360 kWh
Capacity (Ah) = (360 kWh * 1000 Wh/kWh) / 600 V = 600 Ah

### 2.3 State of Charge (SoC) Calculation

**Concept:** SoC represents the current charge level as a percentage of the total capacity. It can be calculated based on the current flowing into or out of the battery.

**Formula:**
$$SoC(t) = SoC(0) + \frac{1}{C_{total}} \int_{0}^{t} I(t') dt' \times 100\%$$
where:
*   $SoC(t)$ is the State of Charge at time $t$ (in %)
*   $SoC(0)$ is the initial State of Charge (in %)
*   $C_{total}$ is the total battery capacity (in Ah)
*   $I(t')$ is the charging current (positive for charging, negative for discharging) at time $t'$ (in Amperes)
*   $dt'$ is the time interval (in hours)

**Example 3:**
A 100 Ah battery pack is initially at 70% SoC. If it is discharged at a constant current of 20 A for 3 hours, what will be its final SoC?

**Solution:**
Initial charge = 0.70 * 100 Ah = 70 Ah
Charge discharged = 20 A * 3 h = 60 Ah
Final charge = 70 Ah - 60 Ah = 10 Ah
Final SoC = (10 Ah / 100 Ah) * 100% = 10%

**Practice Question 2:**
A 200 Ah battery pack is at 40% SoC. It is then charged at a constant current of 30 A for 2.5 hours. What is the final SoC of the battery pack?

**Answer:**
Initial charge = 0.40 * 200 Ah = 80 Ah
Charge added = 30 A * 2.5 h = 75 Ah
Final charge = 80 Ah + 75 Ah = 155 Ah
Final SoC = (155 Ah / 200 Ah) * 100% = 77.5%

---

## 3. Numerical Problems Related to Battery Internal Resistance and Power Loss (K3 - Knowledge Level)

Internal resistance is a critical factor affecting battery performance, especially under high current loads.

### 3.1 Voltage Drop due to Internal Resistance

**Concept:** When a battery discharges or charges, a voltage drop (or rise) occurs across its internal resistance, reducing the terminal voltage.

**Formula:**
*   **During Discharge:** $V_{terminal} = V_{nom} - I_{discharge} \times R_{int}$
*   **During Charge:** $V_{terminal} = V_{nom} + I_{charge} \times R_{int}$
where:
*   $V_{terminal}$ is the terminal voltage (V)
*   $V_{nom}$ is the nominal voltage (V)
*   $I_{discharge}$ is the discharge current (A)
*   $I_{charge}$ is the charge current (A)
*   $R_{int}$ is the internal resistance ($\Omega$)

**Example 4:**
A 400 V, 150 Ah battery pack has an internal resistance of 0.05 $\Omega$. During a high-power acceleration, the current drawn from the battery is 300 A. Calculate the terminal voltage of the battery pack during this acceleration.

**Solution:**
Voltage drop = $I_{discharge} \times R_{int} = 300 \text{ A} \times 0.05 \Omega = 15 \text{ V}$
Terminal voltage = $V_{nom} - \text{Voltage drop} = 400 \text{ V} - 15 \text{ V} = 385 \text{ V}$

**Reference:** This concept is well-explained in Chapter 4 of "Hybrid Electric Vehicles – Principles and applications with practical perspectives" by Chris Mi, M A Masrur, D W Gao.

### 3.2 Power Loss due to Internal Resistance

**Concept:** Power is dissipated as heat due to the internal resistance of the battery.

**Formula:**
$$P_{loss} = I^2 \times R_{int}$$
where:
*   $P_{loss}$ is the power loss in Watts (W)
*   $I$ is the current (A)
*   $R_{int}$ is the internal resistance ($\Omega$)

**Example 5:**
Using the same battery pack from Example 4 (400 V, 150 Ah, $R_{int} = 0.05 \Omega$), calculate the power loss when the current drawn is 300 A.

**Solution:**
$$P_{loss} = (300 \text{ A})^2 \times 0.05 \Omega = 90,000 \text{ A}^2 \times 0.05 \Omega = 4,500 \text{ W} = 4.5 \text{ kW}$$

**Practice Question 3:**
A battery pack with a nominal voltage of 300 V and an internal resistance of 0.08 $\Omega$ is discharging at 150 A.
a) Calculate the terminal voltage of the battery.
b) Calculate the power loss within the battery.

**Answer:**
a) Voltage drop = 150 A * 0.08 $\Omega$ = 12 V
   Terminal voltage = 300 V - 12 V = 288 V
b) Power loss = (150 A)$^2$ * 0.08 $\Omega$ = 22500 * 0.08 = 1800 W = 1.8 kW

### 3.3 Efficiency of Battery Pack

**Concept:** The efficiency of a battery pack is determined by the ratio of the power delivered or absorbed to the power required to maintain that process, considering losses.

**Formula:**
*   **Discharge Efficiency:** $\eta_{discharge} = \frac{P_{out}}{P_{in}} = \frac{V_{terminal} \times I_{discharge}}{V_{nom} \times I_{discharge}} = \frac{V_{nom} - I_{discharge} \times R_{int}}{V_{nom}}$
*   **Charge Efficiency:** $\eta_{charge} = \frac{P_{in}}{P_{out}} = \frac{V_{nom} \times I_{charge}}{V_{terminal} \times I_{charge}} = \frac{V_{nom}}{V_{nom} + I_{charge} \times R_{int}}$

**Example 6:**
Consider the battery pack from Example 4 (400 V, 150 Ah, $R_{int} = 0.05 \Omega$) discharging at 300 A. Calculate its discharge efficiency.

**Solution:**
Using the terminal voltage calculated in Example 4 ($V_{terminal} = 385$ V):
$$\eta_{discharge} = \frac{385 \text{ V} \times 300 \text{ A}}{400 \text{ V} \times 300 \text{ A}} = \frac{385}{400} = 0.9625 \text{ or } 96.25\%$$
Alternatively, using the formula:
$$\eta_{discharge} = \frac{400 \text{ V} - 300 \text{ A} \times 0.05 \Omega}{400 \text{ V}} = \frac{400 - 15}{400} = \frac{385}{400} = 0.9625 \text{ or } 96.25\%$$

**Practice Question 4:**
A 450 V battery pack with an internal resistance of 0.03 $\Omega$ is being charged at 100 A. Calculate the charging efficiency of the battery pack.

**Answer:**
Terminal voltage during charge = 450 V + (100 A * 0.03 $\Omega$) = 450 V + 3 V = 453 V
Charging efficiency = (450 V * 100 A) / (453 V * 100 A) = 450 / 453 $\approx$ 0.9934 or 99.34%

---

## 4. Peukert's Law and its Application (K3 - Knowledge Level)

Peukert's law is particularly relevant for lead-acid batteries, which were historically used in EVs and are still found in some applications. It describes how the *effective* capacity of a battery decreases as the discharge rate increases.

### 4.1 Peukert's Law Formula

**Concept:** Peukert's law quantifies the reduction in battery capacity at higher discharge rates.

**Formula:**
$$C_p = C_r \left( \frac{I_r}{I} \right)^k$$
where:
*   $C_p$ is the effective capacity at discharge rate $I$ (in Ah)
*   $C_r$ is the rated capacity at a specific reference discharge rate $I_r$ (in Ah)
*   $I$ is the actual discharge current (in A)
*   $I_r$ is the reference discharge current (usually a current that discharges the battery in 20 hours, so $I_r = C_r / 20$)
*   $k$ is the Peukert's constant (dimensionless), which varies with battery chemistry and temperature. For lead-acid batteries, $k$ typically ranges from 1.05 to 1.35. A value of $k=1$ implies the capacity is independent of the discharge rate.

**Example 7:**
A 12 V, 100 Ah lead-acid battery has a Peukert's constant of 1.2. The rated capacity ($C_r$) of 100 Ah is for a 20-hour discharge rate ($I_r = 100 \text{ Ah} / 20 \text{ h} = 5 \text{ A}$). Calculate the effective capacity of the battery when discharged at a constant current of 20 A.

**Solution:**
Actual discharge current $I = 20$ A.
$$C_p = 100 \text{ Ah} \left( \frac{5 \text{ A}}{20 \text{ A}} \right)^{1.2}$$
$$C_p = 100 \text{ Ah} \left( 0.25 \right)^{1.2}$$
$$C_p = 100 \text{ Ah} \times 0.2105 \approx 21.05 \text{ Ah}$$

This shows that at a higher discharge rate (20A vs 5A), the effective capacity drops significantly from 100 Ah to about 21.05 Ah.

### 4.2 Calculating Effective Energy and Range using Peukert's Law

**Concept:** By calculating the effective capacity at a given discharge rate, we can determine the actual energy available and estimate the vehicle's range more accurately.

**Example 8:**
Consider a lead-acid battery pack of 400 V with a nominal capacity of 200 Ah (rated at a 20-hour discharge rate). The Peukert's constant is 1.15. The EV has an average power consumption of 40 kW. If the battery is discharged at a constant current that draws 40 kW from the pack (assuming nominal voltage of 400V for current calculation), what is the effective capacity and the duration the battery can sustain this power?

**Solution:**
1.  **Reference discharge rate ($I_r$):** Assuming the 200 Ah is rated at 20 hours, $I_r = 200 \text{ Ah} / 20 \text{ h} = 10 \text{ A}$.
2.  **Actual discharge current ($I$):** The power consumption is 40 kW. Assuming nominal voltage of 400 V, the current is:
    $$I = \frac{P}{V_{nom}} = \frac{40,000 \text{ W}}{400 \text{ V}} = 100 \text{ A}$$
3.  **Effective Capacity ($C_p$):**
    $$C_p = 200 \text{ Ah} \left( \frac{10 \text{ A}}{100 \text{ A}} \right)^{1.15}$$
    $$C_p = 200 \text{ Ah} (0.1)^{1.15}$$
    $$C_p = 200 \text{ Ah} \times 0.0708 \approx 14.16 \text{ Ah}$$
4.  **Duration of Power Delivery:** This effective capacity must be used with the actual discharge current to find the duration.
    $$Time = \frac{C_p}{I} = \frac{14.16 \text{ Ah}}{100 \text{ A}} = 0.1416 \text{ hours}$$
    This seems very short, which highlights the limitations of lead-acid batteries at high discharge rates.

**Important Note:** Lithium-ion batteries, commonly used in modern EVs, do not exhibit significant capacity reduction with increasing discharge rates like lead-acid batteries. Peukert's law is generally not applied to Li-ion chemistries.

**Practice Question 5:**
A lead-acid battery with a rated capacity of 150 Ah at a 20-hour rate ($I_r = 7.5$ A) has a Peukert's constant of 1.1. If the battery is discharged at a continuous current of 30 A, calculate its effective capacity.

**Answer:**
$C_p = 150 \text{ Ah} \left( \frac{7.5 \text{ A}}{30 \text{ A}} \right)^{1.1} = 150 \text{ Ah} (0.25)^{1.1} = 150 \text{ Ah} \times 0.2315 \approx 34.73 \text{ Ah}$

---

## 5. Numerical Problems Related to Battery Types and their Characteristics (K3 - Knowledge Level)

This section will touch upon comparing different battery chemistries using their key specifications, which can involve simple calculations and comparisons.

### 5.1 Comparing Energy and Power Density

**Concept:** Energy density (Wh/kg) and power density (W/kg) are crucial metrics for selecting batteries for EVs. Higher values generally lead to lighter and more performant vehicles.

**Formula:**
*   **Energy Density:** $E_{density} = \frac{\text{Total Energy (Wh)}}{\text{Total Mass (kg)}}$
*   **Power Density:** $P_{density} = \frac{\text{Max Power (W)}}{\text{Total Mass (kg)}}$

**Example 9:**
An EV needs a 60 kWh battery pack.
*   **Option A: Lithium-ion (Li-ion)**
    *   Average energy density: 200 Wh/kg
    *   Average power density: 500 W/kg
*   **Option B: Lead-acid**
    *   Average energy density: 30 Wh/kg
    *   Average power density: 100 W/kg

Calculate the total mass and required power density for both options to meet the 60 kWh requirement.

**Solution:**

**For Li-ion:**
*   **Mass:**
    $$Mass = \frac{\text{Total Energy}}{\text{Energy Density}} = \frac{60,000 \text{ Wh}}{200 \text{ Wh/kg}} = 300 \text{ kg}$$
*   **Power Density (if the EV motor needs peak power of 150 kW):**
    $$Required Power Density = \frac{150,000 \text{ W}}{300 \text{ kg}} = 500 \text{ W/kg}$$
    (This matches the typical power density of Li-ion)

**For Lead-acid:**
*   **Mass:**
    $$Mass = \frac{\text{Total Energy}}{\text{Energy Density}} = \frac{60,000 \text{ Wh}}{30 \text{ Wh/kg}} = 2000 \text{ kg}$$
*   **Power Density (if the EV motor needs peak power of 150 kW):**
    $$Required Power Density = \frac{150,000 \text{ W}}{2000 \text{ kg}} = 75 \text{ W/kg}$$
    (This is lower than the typical power density of lead-acid, indicating it might struggle to deliver high power demands efficiently, or a larger battery might be needed for sufficient power.)

**Reference:** Chapter 5 of "Electric and Hybrid Vehicles: Design Fundamentals" by Iqbal Hussein provides a good overview of different battery chemistries and their parameters. Chapter 2 of "Propulsion Systems for Hybrid Vehicles" by John M. Miller also covers battery types and their characteristics.

**Practice Question 6:**
An electric scooter needs an energy storage system of 2 kWh.
*   **Option A: Lithium Polymer (LiPo)** - Energy Density: 150 Wh/kg, Power Density: 400 W/kg
*   **Option B: Nickel Metal Hydride (NiMH)** - Energy Density: 60 Wh/kg, Power Density: 200 W/kg

If the scooter's motor requires a peak power of 2 kW, calculate the total mass required for each battery type.

**Answer:**
**For LiPo:**
Mass = 2000 Wh / 150 Wh/kg = 13.33 kg
Required Power Density = 2000 W / 13.33 kg = 150 W/kg. (This is well within the capability of LiPo).

**For NiMH:**
Mass = 2000 Wh / 60 Wh/kg = 33.33 kg
Required Power Density = 2000 W / 33.33 kg = 60 W/kg. (This is also within the capability of NiMH).
In this case, LiPo offers a significant mass advantage.

---

## 6. Linking Numerical Concepts to Course Outcomes

*   **CO1 (Familiarise performance of conventional vehicles and electric vehicles):** Understanding battery capacity and energy directly relates to EV range, a key performance metric that can be compared to conventional vehicles. Power density affects acceleration capabilities.
*   **CO2 (Analyse drive train topologies):** While this module focuses on batteries, the battery's voltage, current, and power capabilities directly influence the design and selection of drive train components (motor, inverter).
*   **CO3 (Discuss propulsion unit and selection of drive systems):** Battery voltage and power output are critical inputs for selecting appropriate motors and inverters. Internal resistance affects overall system efficiency.
*   **CO4 (Analyse energy storage systems and energy management strategies):** All numerical problems in this module directly address the analysis of battery energy storage systems. Concepts like SoC are fundamental to energy management strategies. Peukert's law highlights how operating conditions affect usable energy.
*   **CO5 (Study of chargers, charging stations and communication protocols):** Battery voltage and capacity are essential parameters that chargers need to consider for safe and efficient charging. Charging current calculations are directly related to charging times.

---

## 7. Important Points to Remember

*   **Units are crucial:** Always pay close attention to units (V, Ah, Wh, kWh, W, kW, kg, $\Omega$). Incorrect units will lead to incorrect answers.
*   **Battery Chemistry Matters:** Peukert's law is primarily for lead-acid batteries. Modern Li-ion batteries have different discharge rate characteristics. Energy and power densities vary significantly between chemistries.
*   **Nominal vs. Terminal Voltage:** The nominal voltage is an average; the terminal voltage changes with load and state of charge due to internal resistance and electrochemical processes.
*   **Efficiency:** Battery efficiency (charge and discharge) impacts overall EV energy consumption and thermal management.
*   **Continuous vs. Peak Power:** Batteries must be able to deliver both continuous power for cruising and peak power for acceleration. Power density is key for peak power.
*   **Battery Pack Design:** EV batteries are made of many cells connected in series and parallel to achieve the desired voltage and capacity. Calculations often refer to the entire pack.

---

## 8. Practice Questions with Solutions (Comprehensive Review)

**Question 7:**
An electric vehicle uses a battery pack with a nominal voltage of 380 V and a capacity of 180 Ah. The battery's internal resistance is 0.04 $\Omega$. The vehicle has an average energy consumption of 180 Wh/km.

a) What is the total energy stored in the battery pack in kWh?
b) If the vehicle is driven at a constant speed requiring a continuous current draw of 120 A, what is the terminal voltage of the battery pack?
c) Calculate the power loss within the battery pack at this current.
d) What is the discharge efficiency of the battery pack under these conditions?
e) If the vehicle needs to travel 450 km, how many full charge cycles would be required if each charge adds 90% of the battery's capacity?

**Solutions:**

a) **Total Energy:**
   $E = V_{nom} \times C = 380 \text{ V} \times 180 \text{ Ah} = 68,400 \text{ Wh} = 68.4 \text{ kWh}$

b) **Terminal Voltage:**
   Voltage drop $= I \times R_{int} = 120 \text{ A} \times 0.04 \Omega = 4.8 \text{ V}$
   $V_{terminal} = V_{nom} - \text{Voltage drop} = 380 \text{ V} - 4.8 \text{ V} = 375.2 \text{ V}$

c) **Power Loss:**
   $P_{loss} = I^2 \times R_{int} = (120 \text{ A})^2 \times 0.04 \Omega = 14,400 \text{ A}^2 \times 0.04 \Omega = 576 \text{ W}$

d) **Discharge Efficiency:**
   $\eta_{discharge} = \frac{V_{terminal}}{V_{nom}} = \frac{375.2 \text{ V}}{380 \text{ V}} \approx 0.9874$ or $98.74\%$

e) **Number of Charge Cycles:**
   Energy required for 450 km = $180 \text{ Wh/km} \times 450 \text{ km} = 81,000 \text{ Wh} = 81 \text{ kWh}$
   Each charge adds 90% of capacity: $0.90 \times 68.4 \text{ kWh} = 61.56 \text{ kWh}$ per charge.
   Number of charges = $\frac{\text{Total Energy Required}}{\text{Energy per Charge}} = \frac{81 \text{ kWh}}{61.56 \text{ kWh/charge}} \approx 1.316$ charges.
   Since a full charge cycle is considered complete after the battery reaches its maximum (or is returned to its initial state), and we can only have whole cycles, this implies 2 charge cycles would be needed, with the second charge being partial to reach the total energy requirement. However, if the question implies reaching the *total distance*, we need to consider that one full charge (100%) would be used before needing a partial second charge.

   Let's re-evaluate the wording: "how many full charge cycles would be required if each charge adds 90% of the battery's capacity". This phrasing is a bit tricky. If we assume a discharge to a very low SoC and then a recharge, that's one cycle.
   If the vehicle starts at 100% SoC and travels until the battery is depleted, it uses 68.4 kWh. The next charge will add 90% of capacity (61.56 kWh), bringing the total energy available to 61.56 kWh (assuming it can't exceed 100% capacity).
   To cover 81 kWh, we need more than one full charge (100% state of charge).
   Let's assume the vehicle can be discharged down to a minimum SoC (e.g., 10%) and recharged from there.
   If it discharges to 10%, usable capacity is 90% of 180Ah = 162 Ah. Energy = 375.2 V * 162 Ah = 60,782 Wh.
   Then it recharges to 100% (180 Ah). The charge added is 18 Ah.
   The phrasing "each charge adds 90% of the battery's capacity" is likely meant as a typical charging scenario where you don't always charge to 100%.
   A more straightforward interpretation: If the vehicle needs 81 kWh of energy to cover the distance, and each charging event replenishes 61.56 kWh, then the number of times you need to connect to a charger to deliver energy is $81 / 61.56 \approx 1.32$. This means you'd need to perform a charging operation twice. The first full charging operation (delivering 61.56 kWh) and a partial second charging operation (delivering the remaining $81 - 61.56 = 19.44$ kWh). So, effectively, it requires 2 charging sessions. If "full charge cycles" implies returning the battery to its initial state of charge, and the vehicle starts at 100%, then one full discharge-recharge cycle would be needed, followed by a partial recharge. This would require **two** charging sessions.

Let's assume the question implies how many times the charging plug needs to be used to cover the total energy needed.
If the vehicle starts at 100% SoC and uses its full 68.4 kWh, it has 0 kWh left. To get another 11.6 kWh (81 - 68.4), it needs a charge. If a charge adds 61.56 kWh, that's more than enough. So, 1 full discharge and then one charge (which provides more than needed) means 2 charging events.

**Final Answer Interpretation:** If "full charge cycles" means the number of times the battery goes from a depleted state to a full state, then it's likely **2**. One full cycle (discharging to near empty and charging back to full), then a partial charge.

---

This comprehensive set of notes covers the numerical aspects of battery energy storage systems in EVs, from basic capacity and energy calculations to the effects of internal resistance and Peukert's Law. It provides a strong foundation for understanding battery performance and selection, directly supporting the specified learning and course outcomes.
