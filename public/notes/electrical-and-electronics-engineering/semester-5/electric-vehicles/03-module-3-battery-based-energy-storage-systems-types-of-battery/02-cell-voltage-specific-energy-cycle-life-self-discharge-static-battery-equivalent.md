---
title: "- cell voltage - specific energy - cycle life - self-discharge- static battery equivalent circuit model - series-parallel battery pack equivalent circuits.(3hrs)"
subject: "ELECTRIC VEHICLES"
module: "Module 3: Battery based energy storage systems : Types of battery"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f362ae"
status: "completed"
scrapedAt: "2026-05-23T16:21:39.394Z"
---
## ELECTRIC VEHICLES - Module 3: Battery-based Energy Storage Systems - Types of Battery

**Topic:** Cell Voltage, Specific Energy, Cycle Life, Self-Discharge, Static Battery Equivalent Circuit Model, Series-Parallel Battery Pack Equivalent Circuits.

**Time Allotment:** 3 Hours

**Course Outcomes Addressed:**
* **CO4:** Analyse the various energy storage systems and energy management strategies (Knowledge Level: K3)

---

### 1. Introduction to Battery Parameters for Electric Vehicles

This module delves into the critical parameters that define the performance and suitability of batteries for Electric Vehicle (EV) applications. Understanding these parameters is crucial for selecting the right battery technology and for designing efficient energy management systems, directly impacting EV range, longevity, and overall performance.

---

### 2. Key Battery Parameters

Understanding the following parameters is essential for evaluating and comparing different battery technologies for EVs:

#### 2.1. Cell Voltage

*   **Definition:** The voltage of a single electrochemical cell within a battery. It represents the electrical potential difference between the positive and negative electrodes.
*   **Importance in EVs:**
    *   **System Voltage:** EV battery packs are typically formed by connecting many individual cells in series to achieve a high system voltage (e.g., 300-400V or even higher). This high voltage is necessary to:
        *   Reduce current for a given power output, thus minimizing resistive losses ($P_{loss} = I^2R$).
        *   Enable efficient operation of the EV's electric motor and power electronics.
    *   **Cell Chemistry Dependence:** The nominal cell voltage is primarily determined by the specific electrochemistry of the battery (e.g., Lithium-ion chemistries have different nominal voltages than lead-acid).
*   **Examples:**
    *   **Lithium-ion (Li-ion) Cobaltate (LiCoO$_2$):** Nominal voltage of ~3.7V.
    *   **Lithium-ion (Li-ion) Nickel Manganese Cobalt (NMC):** Nominal voltage of ~3.6-3.7V.
    *   **Lithium-ion (Li-ion) Iron Phosphate (LFP):** Nominal voltage of ~3.2V.
    *   **Lead-Acid:** Nominal voltage of ~2V.
*   **Reference:**
    *   *Electric Vehicles Machines and Drives* by K. T. Chau (2015) provides detailed discussions on the voltage requirements and typical operating voltages of EV powertrains.
    *   *Propulsion Systems for Hybrid Vehicles* by John M. Miller (2010) also covers battery voltage considerations in the context of hybrid powertrains.
*   **Important Point to Remember:** Higher system voltage in EVs (achieved by series connection of cells) leads to lower current, reducing power losses and enabling lighter wiring harnesses.

#### 2.2. Specific Energy (Energy Density)

*   **Definition:** The amount of energy stored per unit mass of the battery. It is typically measured in Watt-hours per kilogram (Wh/kg) or Watt-hours per liter (Wh/L) for volumetric energy density.
*   **Importance in EVs:**
    *   **Range:** Higher specific energy directly translates to a longer driving range for a given battery pack weight. This is a critical factor for EV adoption, as consumers expect comparable or better range than internal combustion engine (ICE) vehicles.
    *   **Vehicle Weight:** A higher specific energy allows for a lighter battery pack, which in turn reduces the overall vehicle weight. Lighter vehicles are more efficient, improve handling, and reduce tire wear.
*   **Types of Specific Energy:**
    *   **Gravimetric Specific Energy (Wh/kg):** Energy per unit mass. Crucial for weight-sensitive applications like EVs.
    *   **Volumetric Specific Energy (Wh/L):** Energy per unit volume. Important for packaging within the vehicle's limited space.
*   **Examples (Typical Values):**
    *   **Lead-Acid:** 30-50 Wh/kg
    *   **Nickel-Metal Hydride (NiMH):** 60-120 Wh/kg
    *   **Lithium-ion (e.g., NMC, NCA):** 150-250 Wh/kg (and increasing with advancements)
*   **Reference:**
    *   *Hybrid Electric Vehicles – Principles and applications with practical perspectives* by Chris Mi, M A Masrur, D W Gao (2011) extensively discusses energy density as a key performance metric for hybrid and electric vehicles.
    *   *Modern Electric, Hybrid and Fuel Cell Vehicles* by Ehsani, Gao, Gay (CRC Press) provides comparative data on specific energy for various battery chemistries.
*   **Important Point to Remember:** Specific energy is a primary driver for EV range. Manufacturers continuously aim to improve this parameter through advancements in battery chemistry and cell design.

#### 2.3. Cycle Life

*   **Definition:** The number of charge-discharge cycles a battery can undergo before its capacity degrades to a specified level (often 80% of its initial capacity).
*   **Importance in EVs:**
    *   **Battery Pack Longevity:** A longer cycle life means the battery pack will last longer, reducing the need for frequent and costly replacements, which is a significant concern for EV owners.
    *   **Total Cost of Ownership (TCO):** Batteries are a major cost component of EVs. A longer cycle life contributes to a lower TCO.
    *   **Second-Life Applications:** Batteries that reach their end-of-life for automotive use might still have sufficient capacity for less demanding stationary energy storage applications, extending their overall useful life.
*   **Factors Affecting Cycle Life:**
    *   Depth of Discharge (DoD): Deeper discharges generally reduce cycle life.
    *   Charging/Discharging Rate (C-rate): High rates can accelerate degradation.
    *   Temperature: Extreme temperatures (both high and low) can negatively impact cycle life.
    *   Battery Management System (BMS): Effective BMS can optimize charging and discharging to prolong life.
*   **Examples:**
    *   **Lead-Acid:** 300-700 cycles (depending on type and usage).
    *   **NiMH:** 500-1000 cycles.
    *   **Li-ion (e.g., LFP):** 2000-5000+ cycles (often higher for LFP).
*   **Reference:**
    *   *Electric and Hybrid Vehicles: Design Fundamentals* by Iqbal Hussein (CRC Press, 2003) offers insights into battery degradation mechanisms and cycle life considerations.
    *   *Electric Vehicles Machines and Drives* by K. T. Chau (2015) discusses the impact of usage patterns on battery lifespan.
*   **Important Point to Remember:** While higher specific energy is desirable for range, a good cycle life is crucial for the economic viability and long-term sustainability of EVs.

#### 2.4. Self-Discharge

*   **Definition:** The natural tendency of a battery to lose its stored charge over time, even when not connected to any external circuit. This is due to internal chemical reactions within the battery.
*   **Importance in EVs:**
    *   **Standby Loss:** When an EV is parked, the battery will slowly lose charge. This can be a concern if the vehicle is left unused for extended periods, potentially leading to insufficient charge for starting.
    *   **Parasitic Drain:** Modern EVs have various systems (alarms, ECUs, infotainment) that draw a small amount of power even when the vehicle is "off." This is distinct from self-discharge but contributes to overall standby loss.
    *   **Preconditioning:** A battery with low self-discharge will require less energy for preconditioning (heating/cooling) after long periods of inactivity.
*   **Factors Affecting Self-Discharge:**
    *   **Battery Chemistry:** Different chemistries have inherent differences in self-discharge rates.
    *   **Temperature:** Higher temperatures generally increase self-discharge rates.
    *   **State of Charge (SoC):** Batteries at higher SoC tend to self-discharge faster.
    *   **Internal Resistance:** Higher internal resistance can sometimes be associated with higher self-discharge.
*   **Examples (Typical Monthly Self-Discharge Rate at Room Temperature):**
    *   **Lead-Acid:** 5-20%
    *   **NiMH:** 10-30% (can be higher for older types)
    *   **Li-ion (e.g., LFP, NMC):** 1-5%
*   **Reference:**
    *   *Propulsion Systems for Hybrid Vehicles* by John M. Miller (2010) touches upon the effects of standby losses on vehicle readiness.
    *   *Hybrid Electric Vehicles – Principles and applications with practical perspectives* by Chris Mi, M A Masrur, D W Gao (2011) also discusses self-discharge characteristics of different battery types.
*   **Important Point to Remember:** Li-ion batteries generally exhibit significantly lower self-discharge rates compared to older battery technologies, making them more suitable for EVs that might sit unused for periods.

---

### 3. Battery Equivalent Circuit Models

Equivalent circuit models are simplified representations of a battery's electrochemical behavior. They are crucial for simulating battery performance, estimating State of Charge (SoC) and State of Health (SoH), and developing effective Battery Management Systems (BMS).

#### 3.1. Static Battery Equivalent Circuit Model

*   **Concept:** A static model represents the battery's behavior at a *specific instant* or under *quasi-static* conditions, often neglecting dynamic electrochemical effects like diffusion. It's a simplified representation that captures the dominant electrical characteristics.
*   **Common Components:**
    *   **Open-Circuit Voltage (OCV) Source ($V_{oc}$):** Represents the theoretical voltage of the battery when no current is flowing. It's a function of the battery's State of Charge (SoC).
    *   **Internal Resistance ($R_{int}$):** Represents the sum of resistances within the cell (ionic resistance of electrolyte, electronic resistance of electrodes and current collectors). It causes voltage drop during current flow and power loss.
    *   **Polarization Voltage/Resistance ($R_p$, $C_p$):** These elements model the non-linear voltage changes that occur immediately after a current is applied or removed. They represent various electrochemical phenomena like charge transfer resistance and diffusion.
        *   **Simple Model (Thevenin Equivalent):** Often uses a resistor ($R_p$) to model this immediate polarization.
        *   **More Complex Models (e.g., Second-Order RC):** Use a resistor ($R_p$) and a capacitor ($C_p$) in series to capture a more dynamic response, representing the charging and discharging of the double-layer capacitance at the electrode-electrolyte interface.
*   **Basic Static Model (Ohmic Model):**
    $$V_{terminal} = V_{oc} - I \cdot R_{int}$$
    This is the simplest model, only considering the open-circuit voltage and the internal resistance. It's useful for understanding basic voltage drop.
*   **Slightly More Complex Static Model (Thevenin Equivalent):**
    $$V_{terminal} = V_{oc} - I \cdot R_{int} - V_{polarization}$$
    Where $V_{polarization}$ is modeled by a parallel combination of a resistor ($R_p$) and a capacitor ($C_p$) in series with $R_{int}$. A common static approximation for polarization is to simply add another resistance $R_p$.
    $$V_{terminal} = V_{oc} - I \cdot (R_{int} + R_p)$$
*   **Application:** Useful for quick estimations of voltage drop under steady-state conditions or for very basic real-time SoC estimation.
*   **Reference:**
    *   *Electric Vehicles Machines and Drives* by K. T. Chau (2015) discusses battery modeling techniques, including equivalent circuit approaches.
    *   *Hybrid Electric Vehicles – Principles and applications with practical perspectives* by Chris Mi, M A Masrur, D W Gao (2011) also covers equivalent circuit models for battery simulation.
*   **Important Point to Remember:** Static models simplify complex electrochemical processes into electrical components, making them computationally less intensive but also less accurate for dynamic behavior.

#### 3.2. Series-Parallel Battery Pack Equivalent Circuits

EV battery packs are constructed by connecting individual cells in series and parallel to achieve the required voltage, capacity, and power. Modeling these packs requires considering the arrangement of cells and their individual characteristics.

*   **Series Connection:**
    *   **Purpose:** To increase the total voltage of the pack.
    *   **Model:** If $N_s$ cells are connected in series, the total pack voltage is approximately $N_s$ times the cell voltage, and the pack capacity remains the same as a single cell (assuming identical cells).
    *   **Equivalent Circuit:** A series of individual cell equivalent circuits connected end-to-end.
    *   **Challenges:**
        *   **Cell Mismatch:** Slight variations in cell voltage, capacity, or internal resistance can lead to uneven charging and discharging. The cell with the lowest capacity will limit the pack's overall capacity. The cell with the highest resistance will experience more heat.
        *   **Voltage Imbalance:** During charging, cells with lower internal resistance or higher capacity may reach their maximum voltage limit sooner, while cells with higher resistance or lower capacity lag behind.
*   **Parallel Connection:**
    *   **Purpose:** To increase the total capacity and current capability of the pack.
    *   **Model:** If $N_p$ cells are connected in parallel, the total pack capacity is approximately $N_p$ times the cell capacity, and the pack voltage remains the same as a single cell.
    *   **Equivalent Circuit:** Individual cell equivalent circuits connected at their terminals.
    *   **Challenges:**
        *   **Current Imbalance:** If cells have different open-circuit voltages or internal resistances, current will flow between them, leading to unequal current sharing during discharge and potentially overcharging some cells.
        *   **Capacity Mismatch:** Cells with lower capacity will be depleted faster, potentially leading to over-discharge if not managed.
*   **Series-Parallel Combination (e.g., $N_s \times N_p$ Configuration):**
    *   **Structure:** Groups of $N_p$ cells connected in parallel form a "string," and $N_s$ such strings are connected in series to form the pack.
    *   **Total Pack Voltage:** $V_{pack} \approx N_s \times V_{cell}$
    *   **Total Pack Capacity:** $C_{pack} \approx N_p \times C_{cell}$
    *   **Modeling:** The equivalent circuit of the pack consists of $N_s$ series blocks, where each block is the equivalent circuit of $N_p$ parallel cells.
*   **Example Pack Model:**
    Consider a pack made of $N_s$ strings in series, where each string has $N_p$ cells in parallel.
    *   For each parallel string of $N_p$ cells:
        *   The overall string voltage is the cell voltage.
        *   The overall string capacity is $N_p \times C_{cell}$.
        *   The equivalent internal resistance of the string is approximately $R_{int, string} = R_{int, cell} / N_p$. (This assumes $R_{int, cell}$ is the internal resistance of a single cell).
    *   For the entire pack of $N_s$ strings in series:
        *   The total pack voltage is $V_{pack} = N_s \times V_{cell, string} = N_s \times V_{cell}$.
        *   The total pack capacity is $C_{pack} = N_s \times C_{cell, string} = N_s \times N_p \times C_{cell}$.
        *   The total pack internal resistance is $R_{pack} = N_s \times R_{int, string} = N_s \times (R_{int, cell} / N_p)$.
*   **Importance of Cell Balancing:** Due to cell mismatches, a Battery Management System (BMS) is crucial to monitor and balance the cells. This can be achieved through:
    *   **Passive Balancing:** Dissipating excess energy from higher-charged cells via resistors.
    *   **Active Balancing:** Transferring energy from higher-charged cells to lower-charged cells using DC-DC converters or other active circuits.
*   **Reference:**
    *   *Modern Electric, Hybrid and Fuel Cell Vehicles: Fundamentals, Theory and Design* by Ehsani, Gao, Gay (CRC Press) provides detailed explanations of battery pack configurations and balancing techniques.
    *   *Electric Vehicles Machines and Drives* by K. T. Chau (2015) includes sections on battery pack design and management.
*   **Important Point to Remember:** Modeling battery packs requires accounting for cell mismatches and implementing cell balancing strategies within the BMS to ensure optimal performance, safety, and longevity.

---

### 4. Practice Questions and Answers

**Question 1:**
A Lithium-ion battery cell has a nominal voltage of 3.6V and a gravimetric specific energy of 180 Wh/kg. If an EV requires a battery pack with a total energy capacity of 60 kWh, what is the minimum mass of the battery pack?

**Answer 1:**
Given:
*   Specific Energy = 180 Wh/kg
*   Total Energy Required = 60 kWh = 60,000 Wh

Minimum Battery Pack Mass = Total Energy Required / Specific Energy
Minimum Battery Pack Mass = 60,000 Wh / 180 Wh/kg
Minimum Battery Pack Mass = **333.33 kg**

**Question 2:**
What is the primary advantage of using Li-ion batteries in EVs compared to lead-acid batteries in terms of self-discharge?

**Answer 2:**
Li-ion batteries generally have a **significantly lower self-discharge rate** (typically 1-5% per month) compared to lead-acid batteries (5-20% per month). This means Li-ion batteries retain their charge better over time when not in use, which is beneficial for EVs that might be parked for extended periods.

**Question 3:**
Explain why connecting cells in series increases the overall voltage of a battery pack, while connecting them in parallel increases the overall capacity.

**Answer 3:**
*   **Series Connection:** In a series connection, the positive terminal of one cell is connected to the negative terminal of the next cell. This means the voltage potentials add up. If you have $N_s$ cells in series, each with voltage $V_{cell}$, the total pack voltage is $V_{pack} = N_s \times V_{cell}$. The current has to flow through each cell sequentially, so the current capacity is limited by the individual cell's capacity.
*   **Parallel Connection:** In a parallel connection, the positive terminals of all cells are connected together, and the negative terminals are connected together. This allows current to flow through each cell independently. The voltage across each cell is the same, equal to the pack voltage ($V_{pack} = V_{cell}$). However, the total current that can be supplied is the sum of the currents from each cell. Thus, the total capacity of the pack is $C_{pack} = N_p \times C_{cell}$, where $N_p$ is the number of cells in parallel.

**Question 4:**
Briefly describe the purpose of the 'polarization resistance' ($R_p$) in a battery equivalent circuit model.

**Answer 4:**
The polarization resistance ($R_p$) in a battery equivalent circuit model represents the **transient voltage drop** that occurs due to electrochemical processes at the electrode-electrolyte interfaces when current is applied or removed. It accounts for phenomena like charge transfer resistance and the charging of the electrical double layer, which cause the terminal voltage to deviate from the simple $V_{oc} - I \cdot R_{int}$ relationship during dynamic operation.

---

### 5. Summary and Key Takeaways

*   **Cell Voltage:** Fundamental to achieving the high system voltages required for EV powertrains.
*   **Specific Energy (Wh/kg):** Directly impacts EV range and vehicle weight. Higher is always better for EVs.
*   **Cycle Life:** Crucial for battery pack longevity and the overall cost of ownership. Affects the lifespan of the EV.
*   **Self-Discharge:** A measure of how quickly a battery loses charge when idle. Lower rates are preferred for EVs.
*   **Equivalent Circuit Models:** Essential tools for simulating battery behavior, estimating SoC/SoH, and designing BMS.
    *   **Static Models:** Simplify electrochemical behavior into electrical components (voltage sources, resistors, capacitors).
    *   **Pack Models:** Extend cell models to account for series-parallel configurations, highlighting the importance of cell balancing due to mismatches.

---
This concludes Module 3, focusing on the critical parameters of battery types for electric vehicles. Understanding these concepts is vital for analyzing EV performance and energy storage system design, directly contributing to **CO4**.
