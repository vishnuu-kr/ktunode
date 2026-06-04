---
title: "Mathematical model of storage system: modelling of power transformation system (PTS)-Central store (CS) and charge–discharge control system (CDCS)"
subject: "ENERGY STORAGE SYSTEMS"
module: "Module 1: Need and role of energy storage systems in power system"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f36255"
status: "completed"
scrapedAt: "2026-05-23T16:21:58.387Z"
---
# ENERGY STORAGE SYSTEMS

## Module 1: Need and Role of Energy Storage Systems in Power Systems

### Topic: Mathematical Model of Storage Systems: Modelling of Power Transformation System (PTS), Central Store (CS), and Charge-Discharge Control System (CDCS)

---

### 1. Introduction to Energy Storage Systems (ESS) in Power Systems

Energy storage systems are crucial components in modern power grids, enabling various functionalities that enhance reliability, efficiency, and the integration of renewable energy sources. This module focuses on understanding the fundamental mathematical models that represent these systems, allowing for their analysis, design, and control.

**Key Concept:** A mathematical model is a simplified representation of a real-world system using mathematical concepts and language. It allows us to predict system behavior, optimize performance, and design control strategies.

**Relevance to CO1 (Identify the role of energy storage in power systems):** Understanding these models is essential for comprehending how ESS fulfill their roles, such as grid stabilization, peak shaving, and renewable energy integration.

---

### 2. Components of a Generalized Energy Storage System Model

A typical energy storage system can be broken down into several key functional blocks for modeling purposes. These blocks represent the physical processes and control mechanisms involved in storing and releasing energy.

*   **Power Transformation System (PTS):**
    *   **Definition:** The PTS is responsible for converting the electrical energy from the grid or renewable source into a form suitable for storage and vice versa. It typically involves power electronics converters (e.g., AC-DC converters, DC-DC converters).
    *   **Function:**
        *   **Charging:** Converts grid AC power to DC power for battery storage or other DC-coupled storage technologies. It also regulates the current and voltage to ensure safe and efficient charging.
        *   **Discharging:** Converts stored energy (often DC) back into grid-compatible AC power. It controls the power output to meet grid demands or supply specific loads.
    *   **Mathematical Representation:** The PTS can be modeled as a power electronic converter with efficiency losses.
        *   **Power Input ($P_{in}$):** Power drawn from the grid or renewable source.
        *   **Power Output ($P_{out}$):** Power delivered to the storage medium or the grid.
        *   **Efficiency ($\eta_{PTS}$):** Represents the energy lost during the conversion process.
            *   Charging: $P_{store} = \eta_{PTS,charge} \times P_{in\_grid}$ (where $P_{store}$ is the power delivered to the storage medium)
            *   Discharging: $P_{out\_grid} = \eta_{PTS,discharge} \times P_{store}$ (where $P_{out\_grid}$ is the power supplied to the grid)
        *   **Example:** For a simple DC-DC converter, the power relationship might be $P_{out} = \eta \cdot P_{in}$, where $\eta$ is the converter efficiency. More complex models can include voltage and current limitations, switching losses, and harmonic distortions.
    *   **Textbook Reference:** Ter-Gazarian (2011) likely discusses power electronics in the context of ESS interfacing with the grid, detailing converter topologies and their efficiency characteristics. Díaz-González, Sumper, and Gomis-Bellmunt (2016) would also cover power converters as a critical interface for various storage technologies.

*   **Central Store (CS):**
    *   **Definition:** The CS represents the physical medium where energy is stored. This can be electrochemical (batteries), mechanical (flywheels, pumped hydro), thermal (molten salt), or electromagnetic (supercapacitors).
    *   **Function:** To accumulate and release energy based on the control signals.
    *   **Mathematical Representation:** The CS model focuses on its state of charge (SoC) and energy capacity.
        *   **State of Charge (SoC):** A measure of the amount of energy currently stored in the system relative to its maximum capacity. It's often expressed as a percentage or a fraction (0 to 1).
            *   $SoC(t) = SoC(t-\Delta t) + \frac{\Delta E_{stored}(t)}{E_{max}}$ (for charging)
            *   $SoC(t) = SoC(t-\Delta t) - \frac{\Delta E_{discharged}(t)}{E_{max}}$ (for discharging)
            Where $\Delta E_{stored}(t)$ and $\Delta E_{discharged}(t)$ are the energy stored or discharged during a time interval $\Delta t$.
        *   **Energy Capacity ($E_{max}$):** The maximum amount of energy the storage system can hold.
        *   **Power Rating ($P_{rated}$):** The maximum power the storage system can deliver or absorb.
        *   **Self-Discharge:** Real storage systems lose energy over time even when not in use. This can be modeled as a leakage current or a rate of energy depletion.
            *   $E_{self-discharge} = E(t) \times \lambda_{sd} \times \Delta t$, where $\lambda_{sd}$ is the self-discharge rate.
        *   **Capacity Fade/Degradation:** Over time and cycles, the storage capacity degrades. More advanced models incorporate this phenomenon.
    *   **Examples:**
        *   **Battery:** Modeled by its voltage-current-SoC characteristics, internal resistance, and degradation curves.
        *   **Pumped Hydro Storage:** Modeled by the volume of water in the upper reservoir, the head difference, and pump/turbine efficiencies.
    *   **Textbook Reference:** Ter-Gazarian (2011) will dedicate sections to various storage technologies (batteries, flywheels, etc.), outlining their fundamental physical principles and associated mathematical models. Díaz-González et al. (2016) will also provide detailed models for different storage types. Rastler (2010) provides a good overview of different storage technologies and their characteristics, informing the modeling parameters.

*   **Charge-Discharge Control System (CDCS):**
    *   **Definition:** The CDCS is the brain of the ESS, responsible for managing the charging and discharging operations based on predefined rules, control signals, and the current state of the storage system.
    *   **Function:**
        *   **Receives commands:** From grid operators, renewable energy forecasting systems, or local controllers.
        *   **Monitors ESS state:** SoC, voltage, current, temperature.
        *   **Calculates optimal operation:** Determines when to charge, discharge, and at what power level.
        *   **Issues control signals:** To the PTS to execute charging/discharging commands.
    *   **Mathematical Representation:** This is typically represented by control algorithms, often involving:
        *   **Rule-based control:** Simple "if-then" logic.
            *   *Example:* If grid frequency is low, discharge energy. If SoC is high and renewable generation is abundant, charge energy.
        *   **Optimization-based control:** Algorithms that aim to minimize costs, maximize revenue, or achieve specific grid objectives.
            *   This can involve linear programming, dynamic programming, or model predictive control (MPC).
        *   **State-space models:** Representing the dynamics of the system, often used in advanced control design.
            *   $\dot{x} = Ax + Bu$ (state equation)
            *   $y = Cx + Du$ (output equation)
            Where $x$ is the state vector (e.g., SoC, voltage), $u$ is the control input (e.g., charging current), and $y$ is the output (e.g., power delivered).
        *   **SoC management algorithms:** Ensuring the SoC stays within safe operating limits to prolong battery life and prevent damage.
    *   **Examples:**
        *   **Peak Shaving Controller:** Charges during off-peak hours (low electricity prices) and discharges during peak hours (high electricity prices).
        *   **Frequency Regulation Controller:** Rapidly charges or discharges to help stabilize grid frequency deviations.
    *   **Textbook Reference:** Díaz-González et al. (2016) will likely delve into control strategies for ESS in grid applications. Ter-Gazarian (2011) might touch upon control aspects within the context of specific ESS applications. Nezamabadi and Gharehpetian (2011) specifically addresses control of ESS in distribution networks, offering insights into practical control schemes.

---

### 3. Integrated Mathematical Model of an ESS

The overall mathematical model of an ESS combines the models of its sub-components. The interaction between these components is critical.

*   **Flow of Energy:**
    *   Grid/Renewable Source  $\rightarrow$  **PTS (Charge)**  $\rightarrow$  **CS (Store)**
    *   **CS (Discharge)**  $\rightarrow$  **PTS (Discharge)**  $\rightarrow$  Grid/Load

*   **Control Loop:**
    *   Grid/Load Signals $\rightarrow$ **CDCS** $\rightarrow$ **PTS Control** $\rightarrow$ **CS State Change** $\rightarrow$ (monitored back to CDCS)

*   **Simplified Block Diagram:**

    ```
    +-------------------+       +-------------------+       +-------------------+
    | Grid/Renewable    | ----> | Power             | ----> | Central Store     |
    | Energy Source     |       | Transformation    |       | (e.g., Battery)   |
    +-------------------+       | System (PTS)      |       +-------------------+
                                +---------+---------+               ^
                                          |                           |
                                          | Control Signals           | Energy Transfer
                                          v                           |
    +-------------------+       +---------+---------+       +-------------------+
    | Grid Load/Demand  | <---- | Power             | <---- | Central Store     |
    | Signals           |       | Transformation    |       | (e.g., Battery)   |
    +-------------------+       | System (PTS)      |       +-------------------+
                                +---------+---------+
                                          ^
                                          |
                                +---------+---------+
                                | Charge-Discharge  |
                                | Control System    |
                                | (CDCS)            |
                                +-------------------+
    ```

*   **Key Relationships:**
    *   The CDCS dictates the power setpoint ($P_{set}$) for the PTS.
    *   The PTS converts $P_{set}$ to actual power flow ($P_{PTS}$) into or out of the CS, considering its efficiency.
    *   The change in stored energy in the CS affects its SoC.
    *   SoC limits and degradation are constraints managed by the CDCS.

---

### 4. Modeling Specific Storage Technologies (Briefly)

While the core model structure remains similar, the specific parameters and complexities of each block vary greatly by technology.

*   **Electrochemical (Batteries):**
    *   **PTS:** AC/DC and DC/DC converters (e.g., bidirectional DC-DC converters).
    *   **CS:** Voltage-current-SoC models (e.g., equivalent circuit models, electrochemical models), Coulomb counting for SoC, capacity fade models.
    *   **CDCS:** SoC-based control, voltage limits, current limits, temperature management, cycle life management.
    *   **CO2, CO3:** Understanding these models is crucial for comparing battery technologies.

*   **Mechanical (Pumped Hydro Storage - PHS):**
    *   **PTS:** Pumps and turbines (including motor/generator sets), pipe friction losses.
    *   **CS:** Volume of water in upper reservoir, head difference, water flow rate.
    *   **CDCS:** Water level management, turbine/pump operational points, start-up/shut-down sequences.
    *   **CO2:** PHS is a prime example of potential energy storage.

*   **Thermal (Thermal Energy Storage - TES):**
    *   **PTS:** Heat exchangers, pumps for heat transfer fluid.
    *   **CS:** Temperature of the storage medium (e.g., molten salt, water), heat transfer coefficients, storage volume.
    *   **CDCS:** Temperature setpoints, heat flow control.
    *   **CO2:** TES systems are important for concentrating solar power and industrial applications.

*   **Electromagnetic (Supercapacitors):**
    *   **PTS:** High-power DC/DC converters.
    *   **CS:** Capacitance, Equivalent Series Resistance (ESR), voltage-SoC relationship (often linear voltage-charge relationship, but SoC in terms of energy).
    *   **CDCS:** High power charge/discharge management, voltage limits, cycle management.
    *   **CO3:** Supercapacitors are distinct from batteries due to their electrostatic storage mechanism.

---

### 5. Role of Modeling in ESS Applications

Mathematical models are fundamental to:

*   **System Design and Sizing:** Determining the appropriate capacity ($E_{max}$) and power rating ($P_{rated}$) for a given application.
*   **Performance Evaluation:** Simulating how an ESS will perform under various grid conditions.
*   **Control Strategy Development:** Designing algorithms for optimal operation.
*   **Economic Analysis:** Estimating operational costs and revenues.
*   **Grid Integration Studies:** Assessing the impact of ESS on grid stability and power quality.
*   **Renewable Energy Integration:** Modeling how ESS can mitigate the variability of renewables.
    *   **CO4 (Illustrate energy storage technology in renewable energy integration):** Models help show how ESS smooth out the intermittency of solar and wind power. For example, a model could simulate a PV system with a battery, showing how the battery charges when PV output exceeds demand and discharges when PV output is low.
*   **Smart Grid Applications:** Implementing advanced control for grid services.
    *   **CO5 (Summarise energy storage technology applications for smart grids):** Models are used to simulate ESS for frequency regulation, voltage support, demand response, and microgrid management.

---

### 6. Important Points to Remember

*   **Abstraction Levels:** Models can range from simple energy balance equations to complex electrochemical or physical simulations. The choice depends on the analysis objective.
*   **Efficiency:** Energy losses in the PTS and self-discharge in the CS are critical factors that must be included in accurate models.
*   **SoC Management:** The CDCS must prioritize maintaining the SoC within a safe and operational range.
*   **Interdependence:** The PTS, CS, and CDCS are interconnected; changes in one affect the others.
*   **Validation:** Models need to be validated against real-world data for accuracy.

---

### 7. Practice Questions and Exercises

**Question 1:**
A battery energy storage system has a nominal capacity of 10 kWh and a rated power of 5 kW. During charging, the power electronic converter has an efficiency of 95%. If the system is charged at its rated power for 1.5 hours, what is the actual energy stored in the battery and its final State of Charge (assuming it started from 0% SoC)?

**Answer 1:**
*   Actual charging power absorbed by the battery = $P_{rated} \times \eta_{PTS,charge}$
*   Actual charging power = 5 kW * 0.95 = 4.75 kW
*   Actual energy stored = Actual charging power * time = 4.75 kW * 1.5 h = 7.125 kWh
*   Final State of Charge = (Actual energy stored / Nominal capacity) * 100%
*   Final State of Charge = (7.125 kWh / 10 kWh) * 100% = 71.25%

**Question 2:**
Describe the primary functions of the Power Transformation System (PTS) and the Charge-Discharge Control System (CDCS) in an energy storage system.

**Answer 2:**
*   **PTS:** Converts electrical energy between the grid/source and the storage medium. During charging, it converts grid AC to a form (e.g., DC) suitable for storage. During discharging, it converts the stored energy back into grid-compatible AC power. It also manages voltage and current for safe and efficient operation.
*   **CDCS:** Acts as the intelligent controller. It monitors the storage system's state (e.g., SoC), receives external commands (e.g., grid signals, renewable availability), and decides when and how much to charge or discharge. It then sends control signals to the PTS to execute these operations, ensuring the system operates within its limits and meets its objectives.

**Question 3:**
Consider a grid with a high penetration of solar PV. How could an ESS, modeled using the concepts discussed, help improve the grid's stability and reduce curtailment of solar energy? (Relates to CO1, CO4, CO5)

**Answer 3:**
*   **Stability:** When solar output is high and grid demand is low, the ESS can absorb excess solar power (charging), preventing over-voltage and frequency rise. When solar output drops suddenly (e.g., due to cloud cover), the ESS can quickly discharge stored energy, supplying power to the grid and preventing voltage dips and frequency drops, thus improving grid stability.
*   **Curtailment Reduction:** Instead of curtailing solar power when generation exceeds demand, the ESS can store this excess energy (charging). Later, when solar generation is insufficient, the ESS can discharge this stored energy, meeting demand and avoiding the need to curtail otherwise available solar power. The mathematical models of the CS (capacity) and CDCS (control logic) are essential to manage this efficient energy capture and release.

**Question 4:**
If a battery ESS has an internal resistance ($R_{int}$) and its voltage ($V_{batt}$) is directly proportional to its SoC ($V_{batt} = V_{min} + (V_{max} - V_{min}) \times SoC$), how would you model the power delivered to the grid ($P_{out\_grid}$) during discharge, considering the PTS efficiency ($\eta_{PTS,discharge}$) and an output current ($I_{discharge}$)?

**Answer 4:**
*   The terminal voltage of the battery during discharge ($V_{terminal}$) is given by:
    $V_{terminal} = V_{batt} - I_{discharge} \times R_{int}$
*   The power delivered by the battery itself is:
    $P_{battery} = V_{terminal} \times I_{discharge} = (V_{batt} - I_{discharge} \times R_{int}) \times I_{discharge}$
*   The power delivered to the grid after passing through the PTS is:
    $P_{out\_grid} = \eta_{PTS,discharge} \times P_{battery}$
    $P_{out\_grid} = \eta_{PTS,discharge} \times (V_{batt} - I_{discharge} \times R_{int}) \times I_{discharge}$
*   Also, the SoC changes based on the discharged energy:
    $SoC(t) = SoC(t-\Delta t) - \frac{V_{batt} \times I_{discharge} \times \Delta t}{E_{max}}$ (Note: This is a simplified Coulomb counting model. More accurate models use effective current.)

---
