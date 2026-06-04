---
title: "Energy and power balance in a storage unit"
subject: "ENERGY STORAGE SYSTEMS"
module: "Module 1: Need and role of energy storage systems in power system"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f36254"
status: "completed"
scrapedAt: "2026-05-23T16:21:57.673Z"
---
# ENERGY STORAGE SYSTEMS: Module 1 - Need and Role of Energy Storage Systems in Power System

## Topic: Energy and Power Balance in a Storage Unit

---

### Introduction

The fundamental principle behind any energy storage system is the ability to absorb energy when it is in surplus and release it when it is in demand. This core functionality is governed by the concepts of **energy balance** and **power balance** within the storage unit. Understanding these balances is crucial for the efficient and effective integration of energy storage into the broader power system. This topic delves into these balances, their implications, and how they are managed.

---

### 1. Defining Energy and Power Balance

#### 1.1. Power Balance

**Definition:** Power balance within a storage unit refers to the instantaneous equilibrium between the power flowing into the unit (charging power), the power flowing out of the unit (discharging power), and any internal power losses.

*   **Charging Power ($P_{charge}$):** The rate at which energy is being transferred into the storage unit. This is typically a positive value.
*   **Discharging Power ($P_{discharge}$):** The rate at which energy is being extracted from the storage unit. This is typically a negative value in a net system balance, or considered as a positive output from the storage unit itself.
*   **Internal Losses ($P_{loss}$):** The power dissipated within the storage unit due to inefficiencies in the conversion, storage, and release mechanisms (e.g., heat, resistance). These losses are present during both charging and discharging.

**Mathematical Representation:**

A simplified power balance equation for a storage unit can be expressed as:

$P_{in} = P_{out} + P_{loss}$

Where:
*   $P_{in}$ is the power entering the storage unit (charging power).
*   $P_{out}$ is the power leaving the storage unit (discharging power).
*   $P_{loss}$ represents the power lost within the unit.

**Key Considerations:**

*   **Directionality:** The direction of power flow is critical. During charging, $P_{in}$ is positive and $P_{out}$ is zero (or represents internal consumption). During discharging, $P_{out}$ is positive and $P_{in}$ is zero.
*   **Efficiency:** The ratio of useful power output to power input is the efficiency ($\eta$).
    *   Charging Efficiency ($\eta_{charge}$): $P_{stored} / P_{charge} = 1 - (P_{loss,charge} / P_{charge})$
    *   Discharging Efficiency ($\eta_{discharge}$): $P_{discharge} / P_{released} = 1 - (P_{loss,discharge} / P_{released})$
    *   Round-trip efficiency ($\eta_{rt}$): $\eta_{charge} \times \eta_{discharge}$ (This represents the overall efficiency of storing and then retrieving energy).
*   **Power Limits:** Storage units have maximum and minimum power ratings for charging and discharging. Exceeding these limits can lead to damage or reduced lifespan.

#### 1.2. Energy Balance

**Definition:** Energy balance within a storage unit describes the conservation of energy over a period of time, accounting for the energy stored, energy supplied/consumed, and energy losses.

*   **Energy Stored ($E_{stored}$):** The amount of energy held within the storage unit at a given time. This is directly related to the state of charge (SoC).
*   **Energy Supplied ($E_{in}$):** The total energy transferred into the storage unit over a period.
*   **Energy Released ($E_{out}$):** The total energy transferred out of the storage unit over a period.
*   **Energy Losses ($E_{loss}$):** The total energy dissipated as losses over a period.

**Mathematical Representation:**

The change in stored energy over a time interval $\Delta t$ is given by:

$\Delta E_{stored} = E_{in} - E_{out} - E_{loss}$

Alternatively, considering power:

$E_{stored}(t_2) = E_{stored}(t_1) + \int_{t_1}^{t_2} (P_{in}(\tau) - P_{out}(\tau) - P_{loss}(\tau)) d\tau$

Where:
*   $E_{stored}(t_1)$ is the stored energy at time $t_1$.
*   $E_{stored}(t_2)$ is the stored energy at time $t_2$.
*   $P_{in}(\tau)$, $P_{out}(\tau)$, and $P_{loss}(\tau)$ are the instantaneous powers at time $\tau$.

**Key Considerations:**

*   **State of Charge (SoC):** The SoC is a crucial parameter representing the current energy level relative to the maximum capacity.
    *   $SoC(t) = E_{stored}(t) / E_{capacity}$
    *   SoC is typically bounded between 0% (empty) and 100% (full).
*   **Capacity Limits:** Storage units have a finite energy capacity ($E_{capacity}$). Overcharging or over-discharging can be detrimental.
*   **Self-Discharge:** Many storage technologies experience self-discharge, where stored energy is lost over time even without external load. This contributes to $E_{loss}$ even when the unit is idle.
*   **Energy Throughput:** The total amount of energy that has passed through the storage unit over its lifetime. This is a key factor in determining its lifespan.

---

### 2. Role of Energy Storage in Power Systems (Connecting to Module 1 Overview)

Understanding energy and power balance is fundamental to appreciating the *role* of energy storage in power systems, which aligns with the broader objectives of Module 1.

*   **Meeting Peak Demand (Load Leveling):** Stored energy can be discharged during peak demand periods to reduce the need for expensive and less efficient "peaker" plants. This directly relates to managing the power balance by supplying power when demand exceeds generation.
*   **Integrating Renewable Energy Sources (RES):** RES like solar and wind are intermittent. Energy storage can absorb surplus energy when generation is high and release it when generation is low, thus smoothing out the variability and improving the power quality and reliability of the grid. This involves managing both power and energy balances to match the fluctuating supply with demand. (Relates to CO1, CO4)
*   **Grid Stabilization and Ancillary Services:** Storage units can rapidly respond to grid disturbances (e.g., frequency fluctuations) by injecting or absorbing power, thereby maintaining grid stability. This requires precise and fast power balance control. Examples include:
    *   **Frequency Regulation:** Injecting/absorbing power to keep the grid frequency within acceptable limits.
    *   **Voltage Support:** Providing reactive power to maintain voltage levels.
    *   **Spinning Reserve:** Being ready to supply power within seconds of a disruption.
*   **Improving Power Quality:** Storage can mitigate voltage sags, swells, and harmonics by absorbing or injecting power as needed.
*   **Black Start Capability:** Certain storage systems can initiate power generation to restart a grid after a blackout.

---

### 3. Energy and Power Balance in Specific Storage Technologies (Referencing Textbooks)

The specific details of energy and power balance vary significantly depending on the storage technology.

#### 3.1. Electrochemical Storage (e.g., Batteries)

*   **Textbook Reference:** *Energy Storage for Power Systems* by A.G. Ter-Gazarian (Chapter on Batteries) and *Energy Storage in Power Systems* by Díaz-González et al. (Chapters on Batteries).
*   **Power Balance:** Involves the flow of DC power to/from battery cells, which is then converted to/from AC power by an inverter. Losses occur in internal resistance of cells, interconnections, and the inverter.
    *   $P_{charge} = P_{DC,in}$
    *   $P_{discharge} = P_{DC,out}$
    *   $P_{loss,charge} \approx I_{charge}^2 R_{internal} + P_{inverter,loss}$
    *   $P_{loss,discharge} \approx I_{discharge}^2 R_{internal} + P_{inverter,loss}$
*   **Energy Balance:** The stored energy is directly proportional to the SoC. The capacity is rated in Ampere-hours (Ah) or kilowatt-hours (kWh).
    *   $E_{stored}(t) = SoC(t) \times E_{capacity}$
    *   Charging efficiency ($\eta_{charge}$) and discharging efficiency ($\eta_{discharge}$) are typically in the range of 85-95% for lithium-ion batteries.
    *   Self-discharge rates are generally low for modern battery chemistries.
*   **Example:** A battery energy storage system (BESS) charging from solar PV. When solar output exceeds household demand, the excess power ($P_{charge}$) charges the battery. When solar output is insufficient, the battery discharges ($P_{discharge}$) to meet the deficit. Power losses occur in the DC-DC converter and the inverter.

#### 3.2. Mechanical Storage (e.g., Pumped Hydro, Flywheels)

*   **Textbook Reference:** *Energy Storage for Power Systems* by A.G. Ter-Gazarian (Chapters on Pumped Hydro and Flywheels).
*   **Pumped Hydro Storage (PHS):**
    *   **Power Balance:** Power consumed by pumps during charging (lifting water) and power generated by turbines during discharging (water flowing down). Losses are significant in pumps, turbines, pipes, and motor-generator sets.
    *   **Energy Balance:** Energy stored is the potential energy of water lifted to the upper reservoir. $E_{stored} = mgh$, where $m$ is mass, $g$ is gravity, and $h$ is head. Round-trip efficiencies are typically 70-80%.
    *   **Example:** During off-peak hours with low electricity prices and high generation, water is pumped to an upper reservoir. During peak hours, water is released through turbines to generate electricity.
*   **Flywheel Energy Storage (FES):**
    *   **Power Balance:** Electrical power is converted to rotational kinetic energy (charging) and vice-versa (discharging). Losses are primarily due to friction in bearings and air resistance (windage).
    *   **Energy Balance:** Energy stored is kinetic energy ($E = 0.5 I \omega^2$), where $I$ is the moment of inertia and $\omega$ is angular velocity. Flywheels are characterized by very high power density but lower energy density. They are good for short-duration, high-power applications.
    *   **Example:** Used for frequency regulation and uninterruptible power supplies (UPS) where rapid energy bursts are needed.

#### 3.3. Thermal Storage

*   **Textbook Reference:** *Energy Storage for Power Systems* by A.G. Ter-Gazarian (Chapter on Thermal Energy Storage).
*   **Power Balance:** Power is the rate of heat transfer for charging (heating a medium) and discharging (extracting heat). Losses are due to heat transfer to the surroundings.
*   **Energy Balance:** Energy stored is the thermal energy held in a medium (e.g., water, molten salt, phase change materials). $E_{stored} = m c \Delta T$ (sensible heat) or $E_{stored} = m L$ (latent heat), where $c$ is specific heat and $L$ is latent heat.
*   **Example:** Concentrated Solar Power (CSP) plants often use molten salt to store thermal energy. When solar radiation is high, energy heats the salt. When radiation is low or absent, the hot salt is used to generate steam for turbines.

#### 3.4. Electrical Storage (e.g., Supercapacitors, SMES)

*   **Textbook Reference:** *Energy Storage for Power Systems* by A.G. Ter-Gazarian (Chapters on Supercapacitors and Superconducting Magnetic Energy Storage).
*   **Supercapacitors:**
    *   **Power Balance:** Electrical power is stored electrostatically across an electrolyte-electrode interface. Losses are primarily due to equivalent series resistance (ESR).
    *   **Energy Balance:** Energy is stored as electric charge. They offer very high power density and very fast charge/discharge cycles but have lower energy density and higher self-discharge compared to batteries.
    *   **Example:** Used for regenerative braking in vehicles or providing short bursts of power in power quality applications.
*   **Superconducting Magnetic Energy Storage (SMES):**
    *   **Power Balance:** Energy is stored in a magnetic field generated by current flowing through a superconducting coil. Power transfer is very rapid with very low losses.
    *   **Energy Balance:** Energy stored is magnetic energy ($E = 0.5 L I^2$), where $L$ is inductance and $I$ is current. SMES units are very efficient but complex and costly, typically used for very fast response grid stabilization.

---

### 4. Key Concepts and Definitions Summary

*   **Power:** Rate of energy transfer (kW, MW).
*   **Energy:** Capacity to do work (kWh, MWh).
*   **State of Charge (SoC):** Percentage of stored energy relative to maximum capacity.
*   **Energy Capacity ($E_{capacity}$):** Total energy a storage unit can hold (kWh, MWh).
*   **Power Rating ($P_{rating}$):** Maximum rate at which a unit can charge or discharge (kW, MW).
*   **Round-trip Efficiency ($\eta_{rt}$):** Overall efficiency of storing and retrieving energy.
*   **Self-Discharge:** Gradual loss of stored energy over time when idle.
*   **Cycle Life:** Number of charge-discharge cycles a unit can undergo before significant degradation.
*   **Response Time:** Time taken for a storage unit to respond to a command (charge/discharge).

---

### 5. Practice Questions and Exercises

**Question 1:**
A battery energy storage system (BESS) has a capacity of 100 kWh and a rated power of 50 kW. If it is fully charged and then discharges at its rated power for 2 hours, what is the final state of charge, assuming 90% discharging efficiency and no losses during charging or idle time?

**Answer 1:**
*   Initial Energy = 100 kWh
*   Discharging Power = 50 kW
*   Discharging Time = 2 hours
*   Energy Discharged (useful output) = Power × Time = 50 kW × 2 h = 100 kWh
*   However, the question asks for the energy *delivered* at 50kW for 2 hours. If the efficiency is 90%, it means that to deliver 100 kWh, the battery must have supplied $100 \text{ kWh} / 0.90 = 111.11 \text{ kWh}$ of its stored energy.
*   Let's re-read: "discharges at its rated power for 2 hours". This implies the *output* power is 50kW for 2 hours.
*   Energy delivered by the battery (before efficiency loss) = 50 kW * 2 h = 100 kWh.
*   Energy *drawn from storage* to deliver this = $100 \text{ kWh} / 0.90 = 111.11 \text{ kWh}$.
*   This implies the initial energy must have been greater than 100 kWh, or the discharge cannot be sustained for the full 2 hours at 50kW if it started at 100 kWh.
*   Let's assume the question implies the *maximum possible continuous discharge at rated power*.
*   Energy that can be discharged at 50kW from a 100kWh capacity, with 90% efficiency:
    *   Maximum discharge time = Energy Capacity / (Discharge Power / Efficiency) = 100 kWh / (50 kW / 0.90) = 100 kWh / 55.56 kW = 1.8 hours.
    *   If it discharges at 50 kW for 2 hours, it exceeds its capacity or rating.
*   Let's reinterpret the question: Assume it starts fully charged (100 kWh) and discharges. What is the *remaining energy* after delivering 50 kW for 2 hours, considering efficiency?
*   Energy *drawn from storage* to deliver 50 kW for 2 hours = (50 kW * 2 h) / 0.90 = 100 kWh / 0.90 = 111.11 kWh.
*   This is still problematic if starting at 100 kWh.

    **Revised Interpretation for a solvable problem:**
    Assume the BESS starts at 100% SoC (100 kWh). It is set to discharge at a *constant rate that lasts for 2 hours*. What is the average discharge power if it depletes the battery in 2 hours with 90% efficiency?
    *   Total energy *drawn from storage* = 100 kWh
    *   Total energy *delivered* = 100 kWh * 0.90 = 90 kWh
    *   Average discharge power = 90 kWh / 2 h = 45 kW.

    **Let's assume the original question meant:** A BESS (100 kWh capacity, 50 kW rated power) discharges at its rated power (50 kW) for **1 hour**. What is the final SoC?
    *   Energy delivered = 50 kW × 1 h = 50 kWh
    *   Energy drawn from storage = 50 kWh / 0.90 = 55.56 kWh
    *   Initial SoC = 100% (100 kWh)
    *   Final Energy = 100 kWh - 55.56 kWh = 44.44 kWh
    *   Final SoC = (44.44 kWh / 100 kWh) * 100% = 44.44%

    **Let's go with the most straightforward interpretation, assuming the BESS *can* deliver 50kW for 2 hours if it started with enough charge.**
    If the BESS starts fully charged (100 kWh) and discharges at 50 kW for 2 hours, it would *attempt* to deliver 100 kWh.
    *   Energy required from storage (accounting for 90% efficiency) = 100 kWh / 0.90 = 111.11 kWh.
    *   Since the BESS only has 100 kWh of stored energy, it cannot sustain a 50 kW discharge for 2 hours. It can sustain it for $100 \text{ kWh} / (50 \text{ kW} / 0.90) = 1.8$ hours.
    *   If it discharges at 50 kW for 1.8 hours:
        *   Energy delivered = 50 kW * 1.8 h = 90 kWh.
        *   Energy drawn from storage = 90 kWh / 0.90 = 100 kWh.
        *   Final SoC = 0%

    **Let's assume the question implies the discharge happens *as much as possible* within the constraints.**
    *   Maximum discharge duration at 50 kW: 1.8 hours.
    *   If it discharges for 1.8 hours at 50 kW, it will be at 0% SoC.
    *   If it discharges for *exactly* 2 hours, it must have drawn 111.11 kWh from storage.
    *   If it starts at 100 kWh, it cannot do this. The discharge would stop after 1.8 hours, and the SoC would be 0%.

    **Final attempt at a reasonable answer for the original wording:**
    If a BESS (100 kWh capacity, 50 kW rated power) discharges at its rated power (50 kW) for 2 hours, this implies the system *attempts* to deliver 100 kWh.
    *   Energy required from storage to deliver 100 kWh (with 90% efficiency) = 111.11 kWh.
    *   Since the BESS starts at 100 kWh, it can only sustain this discharge for: $100 \text{ kWh} / (50 \text{ kW} / 0.90) = 1.8$ hours.
    *   Therefore, after 1.8 hours, the BESS will be depleted (0% SoC). If the system tries to continue for another 0.2 hours, it will fail to meet the 50 kW demand.
    *   The question asks for the final SoC *after 2 hours*. Assuming the system stops discharging when depleted, the final SoC is **0%**.

**Question 2:**
Explain the difference between power balance and energy balance in a storage unit and how they relate to the State of Charge (SoC).

**Answer 2:**
*   **Power Balance:** Deals with the *rate* of energy flow into or out of the storage unit at any given moment. It's about the instantaneous power (kW or MW). A positive power balance (net inflow) increases SoC, while a negative power balance (net outflow) decreases SoC. Power balance must respect the unit's power rating limits.
*   **Energy Balance:** Deals with the *total amount* of energy stored over a period. It accounts for energy input, output, and losses. It determines how the total stored energy changes over time and is governed by the unit's capacity limits.
*   **Relationship to SoC:** SoC is a direct measure of the energy balance. The change in SoC over time is directly proportional to the net energy flow (energy in minus energy out and losses). Power balance dictates the *rate* at which SoC changes. If the net power input is positive (charging), SoC increases; if the net power output is positive (discharging), SoC decreases. The system must ensure that the energy balance does not violate SoC limits (0% to 100%) and that the power balance respects power ratings.

**Question 3:**
A pumped hydro storage system has a round-trip efficiency of 75%. If it stores 100 MWh of energy, how much energy must be supplied to the pumps to achieve this stored energy level?

**Answer 3:**
*   Round-trip efficiency ($\eta_{rt}$) = Energy Out / Energy In = 0.75
*   We are interested in the energy required to *store* energy, which is related to the input side of the round trip.
*   The energy output from storage (e.g., electricity generated) is the stored energy. So, let Energy Out = 100 MWh (this is the potential energy of water).
*   The energy input to the system to achieve this is what we need to find.
*   If 100 MWh is the *useful energy delivered* (e.g., from the turbine), then:
    *   Energy Input (to pumps) = Energy Output (from turbine) / $\eta_{rt}$
    *   Energy Input = 100 MWh / 0.75 = 133.33 MWh
*   **Therefore, 133.33 MWh of electrical energy must be supplied to the pumps to store 100 MWh of potential energy in the upper reservoir.**

---

### 6. Important Points to Remember

*   **Power vs. Energy:** Always distinguish between the rate of energy transfer (power) and the total amount of energy (energy).
*   **Efficiency Matters:** Losses are inherent in all storage systems and significantly impact their economic viability and overall performance. Round-trip efficiency is a key metric.
*   **SoC is Critical:** Managing the State of Charge is paramount to prevent overcharging/over-discharging and ensure optimal lifespan and performance.
*   **Bidirectional Flow:** Many storage systems are bidirectional, capable of both charging and discharging, requiring careful control of power flow.
*   **Matching Supply and Demand:** The core role of storage is to bridge the gap between variable supply (especially renewables) and fluctuating demand by managing energy and power balances.
*   **System Integration:** The power and energy balance of a storage unit must be considered within the context of the entire power system's operation.

---

### 7. Alignment with Course Outcomes

*   **CO1: Identify the role of energy storage in power systems. (Knowledge Level: K3)**
    *   This topic directly addresses the role by explaining how energy and power balance management enables load leveling, RES integration, and grid stabilization.
*   **CO2: Classify thermal, kinetic and potential energy storage systems and their applications. (Knowledge Level: K3)**
    *   Examples of these classifications (e.g., PHS for potential, flywheels for kinetic, molten salt for thermal) are used to illustrate power and energy balance principles.
*   **CO3: Compare electrochemical, electrostatic and electromagnetic storage technologies. (Knowledge Level: K3)**
    *   Discussions on batteries (electrochemical), supercapacitors (electrostatic), and SMES (electromagnetic) highlight their unique power and energy balance characteristics and losses.
*   **CO4: Illustrate energy storage technology in renewable energy integration. (Knowledge Level: K2)**
    *   The explanation of how storage smooths intermittent RES relies heavily on managing energy and power balances to absorb surplus and supply deficits.
*   **CO5: Summarise energy storage technology applications for smart grids. (Knowledge Level: K2)**
    *   The ability of storage to provide ancillary services (frequency regulation, voltage support), which are crucial for smart grid operation, is explained through its power balance control capabilities.

---
This concludes the study notes for "Energy and Power Balance in a Storage Unit." Remember to consult the provided textbooks for more in-depth information and specific technical details.
