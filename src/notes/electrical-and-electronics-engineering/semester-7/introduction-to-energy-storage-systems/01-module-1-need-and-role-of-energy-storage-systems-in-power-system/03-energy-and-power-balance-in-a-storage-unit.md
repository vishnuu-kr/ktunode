---
title: "Energy and power balance in a storage unit"
subject: "INTRODUCTION TO ENERGY STORAGE SYSTEMS"
module: "Module 1: Need and role of energy storage systems in power system"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f36aaa"
status: "completed"
scrapedAt: "2026-05-23T16:37:14.134Z"
---
# Introduction to Energy Storage Systems

## Module 1: Need and Role of Energy Storage Systems in Power Systems

### Topic: Energy and Power Balance in a Storage Unit

---

### **1. Introduction to Energy and Power Balance**

**Definition:**
*   **Energy Storage Unit:** A device or system capable of storing energy in one form and releasing it in another form when required.
*   **Power Balance:** The instantaneous equality or inequality between the power input to and power output from a storage unit.
*   **Energy Balance:** The cumulative equality or inequality between the energy input to and energy output from a storage unit over a period of time.

**Key Concept:**
A storage unit acts as an intermediary between energy sources and energy loads. To operate effectively and efficiently, the energy and power flowing into and out of the storage unit must be carefully managed. This management relies on understanding and maintaining an energy and power balance.

**Relevance to Power Systems:**
Maintaining power and energy balance within a storage unit is fundamental to its function in a power system. It directly impacts:
*   **System Stability:** Properly managed storage can smooth out fluctuations in generation and demand.
*   **Reliability:** Storage can provide backup power during outages.
*   **Efficiency:** Minimizing losses during charging and discharging improves overall system efficiency.
*   **Economic Operation:** Optimizing charging and discharging based on energy prices.

---

### **2. Energy Balance in a Storage Unit**

**2.1 Fundamental Principle:**
The total energy input into a storage unit over a specific period must equal the total energy output plus any energy losses incurred during storage and retrieval.

**Mathematical Representation:**

$$ E_{in}(t) = E_{out}(t) + E_{loss}(t) $$

Where:
*   $E_{in}(t)$: Total energy input to the storage unit from time 0 to time $t$.
*   $E_{out}(t)$: Total energy output from the storage unit from time 0 to time $t$.
*   $E_{loss}(t)$: Total energy losses within the storage unit from time 0 to time $t$.

**2.2 Components of Energy Balance:**

*   **Energy Input ($E_{in}$):** The energy supplied to the storage unit to be stored. This could be electrical energy from the grid, mechanical energy, thermal energy, etc., depending on the storage technology.
*   **Energy Output ($E_{out}$):** The energy retrieved from the storage unit and delivered to the load or grid.
*   **Energy Losses ($E_{loss}$):** These are inherent in any energy conversion and storage process. They can include:
    *   **Storage Losses:** Self-discharge (e.g., chemical reactions in batteries, leakage in capacitors, heat loss in thermal storage).
    *   **Conversion Losses:** Inefficiencies in converting energy from one form to another (e.g., AC-DC conversion for batteries, motor-generator losses in pumped hydro, heat losses in thermal systems).
    *   **Standby Losses:** Energy consumed by the storage system even when not actively charging or discharging to maintain its operational readiness.

**2.3 State of Charge (SoC) and Energy Content:**

*   **State of Charge (SoC):** A measure of the amount of energy currently stored in a storage unit relative to its maximum capacity. Typically expressed as a percentage (0% to 100%).
*   **Energy Content:** The actual amount of energy stored, often measured in kilowatt-hours (kWh) or megawatt-hours (MWh).

$$ E_{stored}(t) = E_{in\_cumulative}(t) - E_{out\_cumulative}(t) - E_{loss\_cumulative}(t) $$

Or, in terms of SoC:

$$ SoC(t) = SoC(0) + \frac{E_{in\_cumulative}(t) - E_{out\_cumulative}(t) - E_{loss\_cumulative}(t)}{E_{capacity}} $$

**Example (Battery Storage):**
A 1 MWh battery system is charged with 0.5 MWh of energy. During charging, there are 10% conversion losses. The battery is then discharged, providing 0.4 MWh of energy to the grid, with 5% conversion losses during discharge.

*   **Energy Input:** 0.5 MWh
*   **Charging Losses:** $0.5 \text{ MWh} \times 0.10 = 0.05 \text{ MWh}$
*   **Energy Stored (after charging):** $0.5 \text{ MWh} - 0.05 \text{ MWh} = 0.45 \text{ MWh}$ (This is the SoC relative to the 1 MWh capacity).

*   **Energy Output:** 0.4 MWh
*   **Discharging Losses:** $0.4 \text{ MWh} \times 0.05 = 0.02 \text{ MWh}$
*   **Total Energy Delivered:** 0.4 MWh

*   **Net Energy Balance:** $0.5 \text{ MWh (in)} - 0.4 \text{ MWh (out)} - 0.05 \text{ MWh (charging loss)} - 0.02 \text{ MWh (discharging loss)} = 0.03 \text{ MWh}$ remaining as stored energy (or lost due to self-discharge if not actively used).

---

### **3. Power Balance in a Storage Unit**

**3.1 Fundamental Principle:**
The power balance describes the instantaneous flow of power into and out of the storage unit. At any given moment, the net power into the storage unit determines whether it is charging, discharging, or idle.

**Mathematical Representation:**

$$ P_{in}(t) = P_{out}(t) + P_{loss}(t) $$

Where:
*   $P_{in}(t)$: Instantaneous power input to the storage unit at time $t$.
*   $P_{out}(t)$: Instantaneous power output from the storage unit at time $t$.
*   $P_{loss}(t)$: Instantaneous power losses within the storage unit at time $t$.

**3.2 Operational States:**

*   **Charging:** $P_{in}(t) > P_{out}(t)$ (or $P_{in}(t) > 0$ and $P_{out}(t) = 0$ if losses are not considered here). The storage unit is absorbing power to store energy.
*   **Discharging:** $P_{out}(t) > P_{in}(t)$ (or $P_{out}(t) > 0$ and $P_{in}(t) = 0$ if losses are not considered here). The storage unit is releasing stored energy and supplying power.
*   **Idle/Standby:** $P_{in}(t) = P_{out}(t) = 0$ (ideally). In reality, there may be small standby power consumption ($P_{loss}$).

**3.3 Power Limits and Constraints:**

*   **Charging Power Limit ($P_{charge\_max}$):** The maximum rate at which the storage unit can accept power. Exceeding this can damage the unit or lead to inefficient operation.
*   **Discharging Power Limit ($P_{discharge\_max}$):** The maximum rate at which the storage unit can deliver power.
*   **Round-trip Efficiency ($\eta_{rt}$):** The ratio of energy output to energy input over a complete charge-discharge cycle. This accounts for combined conversion and storage losses.
    $$ \eta_{rt} = \frac{E_{out}}{E_{in}} $$
    Or, more practically considering losses:
    $$ \eta_{rt} = \frac{P_{out\_avg}}{P_{in\_avg}} $$
    where average powers are taken over a cycle.

**Example (Pumped Hydro Storage):**
A pumped hydro storage unit can pump water uphill at a rate of 100 MW ($P_{charge\_max}$). When releasing water to generate electricity, it can produce 80 MW ($P_{discharge\_max}$).

*   **Charging State:** If the grid supplies 100 MW to pump water.
    *   $P_{in} = 100$ MW
    *   $P_{out} = 0$ MW
    *   Power balance: $100 \text{ MW} = 0 \text{ MW} + P_{loss\_charging}$. The $P_{loss\_charging}$ would be the power consumed by pumps and friction in pipes.
*   **Discharging State:** If the storage unit releases water to generate electricity at 80 MW.
    *   $P_{in} = 0$ MW
    *   $P_{out} = 80$ MW
    *   Power balance: $0 \text{ MW} = 80 \text{ MW} + P_{loss\_discharging}$. The $P_{loss\_discharging}$ would be the power lost in the turbine and generator.

**Round-trip efficiency for this example:**
If it takes 100 MWh to pump water to store a certain amount of potential energy, and releasing that potential energy yields 80 MWh of electrical energy:
$$ \eta_{rt} = \frac{80 \text{ MWh}}{100 \text{ MWh}} = 0.8 \text{ or } 80\% $$

---

### **4. Role of Energy Storage in Power Systems (Relating to CO1)**

Energy storage systems are becoming increasingly vital for the modern power grid due to several factors:

*   **Integration of Renewable Energy Sources (RES):**
    *   RES like solar and wind are intermittent and variable. Storage helps to **smooth out fluctuations** in their output, making them more predictable and reliable for grid operators.
    *   Storage enables **dispatchability** of RES, allowing energy generated when the sun shines or wind blows to be stored and used when demand is high or RES output is low. (CO1, CO4)
    *   **Example:** A solar farm paired with batteries can store excess solar energy during the day and discharge it during the evening peak demand, increasing the utilization of solar power.

*   **Grid Stability and Reliability:**
    *   **Frequency Regulation:** Storage can quickly inject or absorb power to maintain grid frequency within acceptable limits during disturbances. (CO1)
    *   **Voltage Support:** Storage can provide reactive power to help stabilize grid voltage. (CO1)
    *   **Black Start Capability:** Some storage systems can initiate power generation in the absence of grid power, helping to restore the grid after a blackout. (CO1)
    *   **Peak Shaving:** Storage can absorb energy during off-peak hours (when electricity is cheaper) and discharge it during peak hours (when electricity is more expensive), reducing the need for expensive peaker plants and lowering overall costs. (CO1)

*   **Ancillary Services:**
    *   Storage can provide services like operating reserves, spinning reserves, and load following, which are essential for grid operation but often expensive to provide with conventional generation. (CO1)

*   **Transmission and Distribution Deferral:**
    *   By managing local demand and supply, storage can reduce the need for costly upgrades to transmission and distribution infrastructure. (CO1, CO5)
    *   **Example:** Installing batteries in a neighborhood prone to voltage issues can defer the need for a more expensive substation upgrade.

*   **Enhancing Power Quality:**
    *   Storage can help mitigate voltage sags, swells, and harmonics, improving the quality of power delivered to consumers. (CO1)

---

### **5. Types of Storage and their Energy/Power Balance Considerations (Relating to CO2, CO3)**

The principles of energy and power balance apply to all storage technologies, but the specific forms of energy, conversion mechanisms, and loss characteristics differ significantly.

**5.1 Potential Energy Storage (CO2):**
*   **Pumped Hydro Storage (PHS):** Stores energy by pumping water to a higher reservoir. Potential energy is converted to kinetic energy (falling water), then mechanical energy (turbine), and finally electrical energy (generator).
    *   **Energy Balance:** $E_{electrical\_in} \leftrightarrow E_{potential} \leftrightarrow E_{electrical\_out}$. Losses occur in pumps, turbines, generators, pipes, and reservoir leakage.
    *   **Power Balance:** $P_{electrical\_in}$ (pumping) and $P_{electrical\_out}$ (generating). Pumping and generation power levels are constrained by pump/turbine capacity and reservoir levels.
    *   **Example:** The Bath County Pumped Storage Power Station in the US is one of the largest.
    *   **Textbook Reference:** Ter-Gazarian (2011) discusses PHS extensively.

**5.2 Kinetic Energy Storage (CO2):**
*   **Flywheels:** Store energy in rotational kinetic energy. A rotor spins at high speeds.
    *   **Energy Balance:** $E_{electrical} \rightarrow E_{kinetic} \rightarrow E_{electrical}$. Losses are primarily due to friction (air resistance and bearings) and conversion efficiency.
    *   **Power Balance:** $P_{electrical\_in}$ (acceleration) and $P_{electrical\_out}$ (deceleration). Power transfer is very fast.
    *   **Example:** Used for uninterruptible power supplies (UPS) and grid frequency regulation.

**5.3 Thermal Energy Storage (TES) (CO2):**
*   Stores energy as heat or cold. Can be sensible heat (temperature change), latent heat (phase change), or thermochemical.
    *   **Energy Balance:** $E_{source} \rightarrow E_{thermal} \rightarrow E_{use}$. Losses include heat loss to the environment and inefficiencies in heat exchangers.
    *   **Power Balance:** Rate of heat transfer into or out of the storage medium.
    *   **Example:** Concentrated Solar Power (CSP) plants using molten salt to store heat for nighttime generation. Ice storage for cooling.
    *   **Textbook Reference:** Díaz-González et al. (2016) covers various TES applications.

**5.4 Electrochemical Storage (CO3):**
*   **Batteries:** Store energy through reversible chemical reactions.
    *   **Energy Balance:** $E_{electrical} \leftrightarrow E_{chemical} \leftrightarrow E_{electrical}$. Losses occur during charging (resistive losses, side reactions), discharging (resistive losses), and self-discharge.
    *   **Power Balance:** $P_{electrical\_in}$ (charging) and $P_{electrical\_out}$ (discharging). Limited by internal resistance and electrode kinetics.
    *   **Examples:** Lithium-ion (Li-ion), Lead-acid, Flow batteries. Li-ion batteries are widely used for grid storage.
    *   **Textbook Reference:** Ter-Gazarian (2011) and Díaz-González et al. (2016) provide detailed analyses of battery technologies.

**5.5 Electrostatic Storage (CO3):**
*   **Capacitors:** Store energy in an electric field between two conductive plates separated by an insulator (dielectric).
    *   **Energy Balance:** $E_{electrical} \leftrightarrow E_{electric\_field} \leftrightarrow E_{electrical}$. Losses are typically due to dielectric leakage and equivalent series resistance (ESR). Lower energy density than batteries.
    *   **Power Balance:** Very high power capability due to fast charge/discharge rates. $P_{electrical\_in}$ and $P_{electrical\_out}$ are typically very high and short-duration.
    *   **Example:** Supercapacitors (also called ultracapacitors) for rapid energy bursts.

**5.6 Electromagnetic Storage (CO3):**
*   **Superconducting Magnetic Energy Storage (SMES):** Stores energy in a magnetic field created by a superconducting coil.
    *   **Energy Balance:** $E_{electrical} \leftrightarrow E_{magnetic} \leftrightarrow E_{electrical}$. Theoretically very low losses once the field is established, but requires continuous energy for cryogenics.
    *   **Power Balance:** Extremely high power capability and very fast response.
    *   **Example:** Used for grid stabilization and power quality improvement.

---

### **6. Smart Grid Applications and Energy Storage (Relating to CO5)**

Energy storage is a key enabler for smart grids, facilitating many of their core functions:

*   **Demand-Side Management:** Storage systems can absorb excess renewable energy and discharge it during peak demand, flattening the load curve and reducing the need for peak generation. (CO5)
*   **Grid Modernization:** Storage can provide grid services like voltage support, frequency regulation, and black start capabilities, enhancing the reliability and resilience of a grid with increasing RES penetration. (CO5)
*   **Integration of Distributed Energy Resources (DERs):** Storage can act as a buffer for DERs like rooftop solar, optimizing their output and mitigating their impact on local grids. (CO5)
*   **Electric Vehicle (EV) Integration:** EVs equipped with bidirectional charging (V2G - Vehicle-to-Grid) can act as distributed storage units, providing grid services when parked. (CO5)
*   **Microgrids:** Storage is crucial for microgrids to operate independently and reliably during grid outages, ensuring continuous power supply to critical loads. (CO5)
*   **Energy Arbitrage:** Storage systems can buy electricity when prices are low (e.g., at night or during high RES generation) and sell it back when prices are high, improving economic efficiency. (CO5)

**Reference:** Rastler (2010) White Paper highlights various applications and benefits of energy storage, many of which are now integral to smart grid concepts.

---

### **7. Important Points to Remember**

*   **Energy vs. Power:** Energy is the capacity to do work (measured in Joules, kWh), while power is the rate at which energy is transferred (measured in Watts, kW). Storage units have both energy capacity (how much they can store) and power rating (how fast they can charge/discharge).
*   **Losses are Inevitable:** All storage technologies suffer from losses during charging, discharging, and storage itself. Understanding and minimizing these losses is critical for efficiency and economic viability.
*   **Round-trip efficiency** is a key metric for comparing the performance of different storage technologies.
*   **State of Charge (SoC)** is essential for managing the operation of many storage systems, particularly batteries, to prevent overcharging or deep discharge.
*   Energy storage plays a crucial role in enabling the widespread integration of renewable energy sources and supporting the development of smart grids.

---

### **8. Practice Questions and Answers**

**Question 1:**
A 500 kWh battery energy storage system (BESS) is charged with 300 kWh of energy from the grid. During charging, the round-trip efficiency of the BESS is 90%. What is the net energy stored in the BESS at the end of the charging process?

**Answer 1:**
*   Energy input = 300 kWh
*   Charging efficiency = 90% = 0.9
*   Energy actually stored = Energy input × Charging efficiency
*   Energy stored = 300 kWh × 0.9 = 270 kWh

**Question 2:**
Explain the difference between energy balance and power balance in a storage unit. Provide an example of when power balance is more critical than energy balance.

**Answer 2:**
*   **Energy Balance:** Deals with the total amount of energy stored and retrieved over a period, accounting for all inputs, outputs, and losses. It determines how much energy remains in the storage unit.
*   **Power Balance:** Deals with the instantaneous rates of energy transfer (power) into and out of the storage unit. It determines whether the unit is currently charging, discharging, or idle, and is crucial for grid stability and operational limits.

*   **Example where power balance is more critical:** Frequency regulation. A storage system needs to inject or absorb power *instantaneously* to counteract frequency deviations. If the response is too slow (poor power balance management), it cannot effectively stabilize the grid frequency, even if the total energy stored is sufficient. Another example is meeting a sudden high demand, where the power output capability is the primary requirement.

**Question 3:**
Which of the following storage technologies primarily relies on storing energy in an electric field?
a) Pumped Hydro Storage
b) Lithium-ion Battery
c) Supercapacitor
d) Flywheel

**Answer 3:**
c) Supercapacitor (Stores energy in an electric field between conductive plates.)

**Question 4:**
Discuss how energy storage contributes to the integration of intermittent renewable energy sources like wind and solar, focusing on the concept of smoothing out fluctuations. (Relates to CO1, CO4)

**Answer 4:**
Intermittent renewables like wind and solar have variable output that doesn't always match demand. Energy storage systems act as buffers:
*   **Absorption of Excess Energy:** When wind speed is high or solar irradiance is strong, and demand is low, the storage unit can absorb the excess electricity, preventing curtailment and stabilizing the grid. This is managing the *energy* input to the storage.
*   **Discharge During Low Output/High Demand:** When wind speed drops, solar output is low (e.g., at night), or demand peaks, the storage unit can discharge its stored energy. This *discharges* energy at a controlled rate to meet the demand, effectively smoothing out the intermittency of the renewable source.
This process ensures that renewable energy can be utilized more reliably and consistently, contributing to grid stability and reducing reliance on fossil fuel backups.

---
This concludes the study notes for Topic: Energy and Power Balance in a Storage Unit.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
