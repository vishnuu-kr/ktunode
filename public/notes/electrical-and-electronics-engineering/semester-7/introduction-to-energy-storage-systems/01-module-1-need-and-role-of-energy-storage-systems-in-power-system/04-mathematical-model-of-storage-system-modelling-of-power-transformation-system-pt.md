---
title: "Mathematical model of storage system: modelling of power transformation system (PTS)-Central store (CS) and charge–discharge control system (CDCS)"
subject: "INTRODUCTION TO ENERGY STORAGE SYSTEMS"
module: "Module 1: Need and role of energy storage systems in power system"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f36aab"
status: "completed"
scrapedAt: "2026-05-23T16:37:15.749Z"
---
# Introduction to Energy Storage Systems - Module 1: Need and Role of Energy Storage Systems in Power Systems

## Topic: Mathematical Model of Storage System: Modelling of Power Transformation System (PTS) - Central Store (CS) and Charge-Discharge Control System (CDCS)

This module focuses on understanding the fundamental need and role of energy storage systems (ESS) within the broader power system context. This specific topic delves into the essential building blocks of ESS modeling: the Power Transformation System (PTS), the Central Store (CS), and the Charge-Discharge Control System (CDCS).

---

### **1. Need and Role of Energy Storage Systems in Power Systems (CO1 - K3)**

Energy storage systems are becoming increasingly crucial for the reliable, efficient, and sustainable operation of modern power grids. Their integration addresses several key challenges:

*   **Renewable Energy Integration:**
    *   **Intermittency and Variability:** Solar and wind power are inherently intermittent and variable, meaning their output fluctuates based on weather conditions. ESS can store excess energy generated during peak production and discharge it when generation is low or demand is high, smoothing out supply. (Referenced by Denholm et al., 2010)
    *   **Grid Stability:** ESS can provide rapid response to grid disturbances, such as frequency deviations or voltage sags, helping to maintain grid stability and prevent blackouts.
*   **Grid Modernization and Smart Grids (CO5 - K2):**
    *   **Peak Shaving and Load Leveling:** ESS can absorb excess energy during off-peak hours (low demand) and discharge it during peak hours (high demand), reducing the need for expensive and less efficient "peaker" plants. This flattens the load curve.
    *   **Ancillary Services:** ESS can provide critical grid support functions like frequency regulation, voltage support, and spinning reserves, which are essential for maintaining grid reliability.
    *   **Congestion Management:** ESS can be strategically placed to absorb or inject power at specific points in the grid, alleviating congestion on transmission lines.
    *   **Grid Deferral:** By providing capacity, ESS can defer or avoid costly upgrades to transmission and distribution infrastructure.
*   **Economic Benefits:**
    *   **Reduced Energy Costs:** Storing energy when prices are low and discharging when prices are high allows for arbitrage opportunities.
    *   **Improved Efficiency:** By optimizing the operation of power plants and reducing losses associated with rapid start-ups/shutdowns, ESS can improve overall system efficiency.
*   **Electrification and Electric Vehicles (EVs):**
    *   ESS are fundamental to EVs, enabling them to store energy and provide mobility. The integration of EVs into the grid also presents opportunities for vehicle-to-grid (V2G) services, where EV batteries can act as distributed storage.

**Key Concept:** **Grid Parity** - The point at which renewable energy sources paired with energy storage become cost-competitive with traditional fossil fuel sources.

---

### **2. Mathematical Model of a Storage System: Components**

A simplified mathematical model of an energy storage system is essential for analyzing its behavior, optimizing its operation, and integrating it into power system planning and control. The core components typically modeled are:

*   **Power Transformation System (PTS)**
*   **Central Store (CS)**
*   **Charge-Discharge Control System (CDCS)**

---

### **3. Power Transformation System (PTS) Modelling**

The Power Transformation System (PTS) is responsible for converting the electrical energy from the grid into a form suitable for storage and vice-versa. This involves power electronics converters.

**Key Concepts:**

*   **Efficiency:** The PTS is not 100% efficient. There are losses during energy conversion, charging, and discharging. These losses are typically modeled as a function of the power flow.
*   **Power Flow:** The PTS handles the flow of active (P) and reactive (Q) power between the storage system and the power grid.
*   **Voltage and Current Control:** The converters in the PTS control the voltage and current to ensure safe and efficient operation.

**Mathematical Representation:**

The PTS can be modeled by considering its input and output power. For simplicity, we often consider the active power flow.

Let:
*   $P_{grid}$ be the active power exchanged with the grid.
*   $P_{store}$ be the active power delivered to or absorbed from the central store.
*   $\eta_{charge}$ be the charging efficiency (when power flows into the store).
*   $\eta_{discharge}$ be the discharging efficiency (when power flows out of the store).

**Charging:**
When the ESS is charging, power flows from the grid to the store.
$P_{store} = P_{grid} \times \eta_{charge}$
The power absorbed by the grid is $P_{grid} = P_{store} / \eta_{charge}$. Since $\eta_{charge} < 1$, $P_{grid} > P_{store}$.

**Discharging:**
When the ESS is discharging, power flows from the store to the grid.
$P_{grid} = P_{store} \times \eta_{discharge}$
The power delivered by the store is $P_{store}$. Since $\eta_{discharge} < 1$, $P_{grid} < P_{store}$.

**Further Considerations for PTS Modeling (Advanced):**

*   **Reactive Power Control:** Many modern ESS can control reactive power ($Q$) to support grid voltage. This can be modeled as:
    $S_{grid} = P_{grid} + jQ_{grid}$
    $S_{store} = P_{store} + jQ_{store}$
    The PTS links these, considering converter limitations and control strategies.
*   **Switching Losses:** For certain converter topologies, switching losses can be modeled as a function of switching frequency and power.
*   **Harmonics:** Real-world converters can introduce harmonics, which might be relevant for detailed system studies.

**Example:** A battery energy storage system (BESS) might have a DC/AC converter to interface with the AC grid. The efficiency of this converter during charging might be 95% and during discharging 97%.

If the BESS needs to absorb 100 kW from the grid to charge, the grid must supply:
$P_{grid} = 100 \text{ kW} / 0.95 = 105.26 \text{ kW}$

If the BESS is to deliver 100 kW to the grid, the store must provide:
$P_{store} = 100 \text{ kW} / 0.97 = 103.09 \text{ kW}$

---

### **4. Central Store (CS) Modelling**

The Central Store (CS) represents the physical medium where energy is stored. The modeling of the CS depends heavily on the specific storage technology.

**Key Concepts:**

*   **Energy Capacity:** The total amount of energy the store can hold (e.g., in kWh or MWh).
*   **State of Charge (SoC):** The current level of energy stored, usually expressed as a percentage of its maximum capacity.
*   **Power Rating:** The maximum rate at which energy can be charged or discharged (e.g., in kW or MW).
*   **Efficiency:** Losses within the storage medium itself during charging and discharging (e.g., self-discharge in batteries, heat losses in thermal storage).
*   **Degradation:** The gradual loss of capacity and performance over time due to cycling and other factors.

**Mathematical Representation:**

The SoC is a fundamental state variable for the CS.

Let:
*   $E_{max}$ be the maximum energy capacity of the store.
*   $E(t)$ be the energy stored at time $t$.
*   $SoC(t) = E(t) / E_{max}$ be the State of Charge at time $t$.

The change in stored energy over a time interval $\Delta t$ is driven by the net power flowing into the store.
$E(t + \Delta t) = E(t) + P_{store\_net}(t) \times \Delta t$

where $P_{store\_net}(t)$ is the net power flowing into the store from the PTS.

*   If charging: $P_{store\_net}(t) = P_{store\_charge}(t) = P_{grid\_charge}(t) \times \eta_{charge}$
*   If discharging: $P_{store\_net}(t) = -P_{store\_discharge}(t) = -P_{grid\_discharge}(t) \times \eta_{discharge}$ (Note the negative sign as it's power leaving the store).

**SoC Update Equation:**

The SoC can be updated as:
$SoC(t + \Delta t) = SoC(t) + \frac{P_{store\_net}(t) \times \Delta t}{E_{max}}$

**Constraints on SoC:**
The SoC is bounded between a minimum and maximum limit, typically 0% and 100% (or specific operational limits to prolong lifespan).
$SoC_{min} \le SoC(t) \le SoC_{max}$

**Modeling Specific Storage Technologies (CO2 - K3, CO3 - K3):**

*   **Electrochemical (Batteries):**
    *   **SoC Model:** As described above, often with Coulomb counting methods or voltage-based estimation.
    *   **Degradation:** Modeled as a decrease in $E_{max}$ or an increase in internal resistance based on cycling, depth of discharge, temperature, etc. (Ter-Gazarian, 2011).
    *   **Self-discharge:** A slow loss of energy even when idle, often modeled as a small negative current.
    *   **Example:** Lithium-ion batteries, lead-acid batteries.

*   **Electromechanical (Flywheels, Pumped Hydro):**
    *   **Flywheels:** Store kinetic energy. $E = 0.5 \times I \times \omega^2$, where $I$ is moment of inertia and $\omega$ is angular velocity. Losses due to friction and windage.
    *   **Pumped Hydro:** Store gravitational potential energy. $E = m \times g \times h$, where $m$ is mass of water, $g$ is gravity, and $h$ is head. Losses in pumps and turbines.

*   **Electrostatic (Capacitors, Supercapacitors):**
    *   **Capacitors:** Store energy in an electric field. $E = 0.5 \times C \times V^2$, where $C$ is capacitance and $V$ is voltage. Very fast charge/discharge, low energy density.
    *   **Supercapacitors:** Higher energy density than conventional capacitors, also known as ultracapacitors.

*   **Thermal Storage:**
    *   Store energy as heat or cold.
    *   **Sensible Heat:** Temperature change without phase change (e.g., water, rocks). $E = m \times c_p \times \Delta T$.
    *   **Latent Heat:** Phase change at constant temperature (e.g., phase change materials - PCMs). $E = m \times L$, where $L$ is latent heat.
    *   **Thermochemical:** Chemical reactions to store and release heat.
    *   **Modeling:** Often involves heat transfer equations, specific heat capacities, phase transition temperatures, and heat losses to the surroundings.

**Example:** A 1 MWh battery bank with a maximum charge/discharge rate of 500 kW.
*   $E_{max} = 1$ MWh.
*   $P_{max} = 500$ kW.
*   If it charges at its maximum rate (500 kW) for 1 hour with 95% efficiency:
    *   Energy delivered to the store: $500 \text{ kW} \times 1 \text{ h} = 500 \text{ kWh} = 0.5 \text{ MWh}$.
    *   Energy taken from grid: $0.5 \text{ MWh} / 0.95 = 0.526 \text{ MWh}$.
    *   SoC change: $0.5 \text{ MWh} / 1 \text{ MWh} = 50\%$.

---

### **5. Charge-Discharge Control System (CDCS) Modelling**

The CDCS is the "brain" of the ESS. It dictates when and how the storage system should charge or discharge based on predefined objectives, grid signals, and the current state of the ESS.

**Key Concepts:**

*   **Control Strategy/Algorithm:** The logic that governs the ESS operation. This can range from simple rule-based controls to complex optimization algorithms.
*   **Objective Function:** What the control system aims to achieve (e.g., maximize profit, minimize cost, support grid frequency, maximize renewable energy utilization).
*   **Inputs:** Grid signals (frequency, voltage, price), renewable generation forecasts, load forecasts, SoC.
*   **Outputs:** Power setpoints for the PTS (e.g., $P_{grid\_charge}$, $P_{grid\_discharge}$).
*   **Constraints:** SoC limits, power rating limits, ramp rate limits, cycle life considerations.

**Mathematical Representation (Abstract):**

The CDCS can be viewed as a function that maps current system states and external signals to power setpoints for the PTS.

$P_{setpoint}(t) = f(\text{Grid Signals}(t), \text{Renewable Output}(t), \text{Load}(t), SoC(t), \text{Forecasts}(t), \text{Control Objectives})$

**Examples of Control Strategies:**

*   **Arbitrage:** Charge when electricity prices are low, discharge when prices are high.
    *   **Model:** $P_{setpoint}$ is determined by comparing current price to historical low/high prices.
*   **Renewable Firming:** Smooth out the output of a renewable source.
    *   **Model:** If renewable output exceeds a target level, charge. If it falls below, discharge.
    *   **Example (CO4 - K2):** A solar farm paired with an ESS. If solar output is 10 MW but the contracted output to the grid is 8 MW, the CDCS directs the ESS to absorb 2 MW. If solar output drops to 6 MW, the ESS discharges 2 MW to maintain the 8 MW output.
*   **Frequency Regulation:** Respond to deviations in grid frequency.
    *   **Model:** If frequency drops below nominal (e.g., 50 Hz), the ESS discharges to supply power. If frequency rises, it absorbs power (or stops discharging). This is often a proportional or PID control loop based on frequency deviation.
    *   $P_{setpoint} = K_p \times (f_{nominal} - f_{grid})$
*   **Peak Shaving:** Reduce peak demand by discharging during high-demand periods.
    *   **Model:** A threshold is set for peak demand. If demand exceeds the threshold, the ESS discharges to reduce the load on the grid.
*   **Optimized Control:** Using mathematical optimization to find the best charging/discharging schedule over a period (e.g., a day) to meet multiple objectives. This might involve linear programming or dynamic programming.

**Important Point to Remember:** The CDCS is crucial for ensuring the ESS operates efficiently, reliably, and in alignment with system needs, while also respecting the physical limitations and degradation characteristics of the storage medium.

---

### **6. Practice Questions and Answers**

**Question 1 (CO1 - K3):** List three primary reasons for the increasing importance of energy storage systems in modern power grids.

**Answer 1:**
1.  **Integration of Variable Renewable Energy Sources:** ESS smooth out the intermittency and variability of solar and wind power.
2.  **Grid Stability and Reliability:** ESS can provide ancillary services like frequency and voltage support, and rapid response to disturbances.
3.  **Grid Modernization and Smart Grids:** ESS enable peak shaving, load leveling, congestion management, and deferral of infrastructure upgrades.

**Question 2 (CO1, CO5 - K2/K3):** Explain how an energy storage system can perform the function of "peak shaving" in a power system.

**Answer 2:** Peak shaving involves reducing the amount of electricity drawn from the grid during periods of highest demand (peak hours). An ESS achieves this by:
1.  **Charging during off-peak hours:** When electricity demand is low and prices are typically lower, the ESS stores energy.
2.  **Discharging during peak hours:** When electricity demand is high, the ESS releases its stored energy to supplement the grid supply, thereby reducing the overall demand that the grid infrastructure needs to meet. This flattens the load curve and reduces the need for expensive peaking power plants.

**Question 3 (Modeling - PTS, CS):** A battery energy storage system (BESS) has a Central Store (CS) with a capacity of 500 kWh. The Power Transformation System (PTS) has a charging efficiency of 92% and a discharging efficiency of 96%.
    a) If the BESS needs to deliver 200 kW to the grid for 1 hour, how much energy must the CS supply, and what is the power drawn from the grid?
    b) If the CS has an initial SoC of 60% and the BESS charges at its maximum power rating of 250 kW (accounting for charging efficiency) for 1.5 hours, what will be the final SoC?

**Answer 3:**
    a)
    *   Energy delivered to the grid = Power $\times$ Time = 200 kW $\times$ 1 h = 200 kWh.
    *   Since discharging efficiency is 96%, the CS must supply:
        Energy from CS = Energy to grid / $\eta_{discharge}$ = 200 kWh / 0.96 = 208.33 kWh.
    *   The power drawn from the grid is the power delivered to the CS to enable this discharge, considering PTS losses. However, the question asks for power *drawn from the grid* to facilitate this discharge. This phrasing can be tricky. Usually, we consider power *into* the storage for charging and *out of* storage for discharging. If the BESS is *delivering* power, it's drawing that power *from the CS*. The grid *receives* this power. If there's a misunderstanding and the question meant "how much power does the grid need to supply *to the BESS components* to facilitate discharge," that would involve internal efficiencies not given. Assuming the question means what the grid *sees* as power being delivered by the BESS: 200 kW. If it means what the CS *provides*, it's 208.33 kWh. Let's assume the question implies what the grid ultimately receives from the BESS.
        Power drawn *from the CS* is $P_{store} = 200 \text{ kW} / 0.96 = 208.33 \text{ kW}$.
        The power that the grid *receives* from the BESS is 200 kW. Let's assume this is what's asked.
        *Correction:* The question is "how much energy must the CS supply" (which is 208.33 kWh) and "what is the power drawn from the grid?". In a discharge scenario, the grid is *receiving* power from the ESS. The power *drawn from the grid* context is usually for charging. Let's re-interpret. If the ESS is to output 200kW to the grid, and it's discharging, the grid is *receiving* 200kW. The CS is outputting 208.33 kW of energy *to the PTS* to achieve this 200kW output. The power *drawn from the grid* context for discharge is usually 0, unless it's auxiliary power for internal components.

        Let's rephrase for clarity if the question were: "If the BESS is to discharge at 200 kW for 1 hour, what power is the CS providing to the PTS, and what power does the grid *receive* from the BESS?"
        *   CS provides to PTS: $200 \text{ kW} / 0.96 = 208.33 \text{ kW}$.
        *   Grid receives from BESS: 200 kW.

        Let's assume the question meant "what power does the CS *supply to the PTS* when discharging at 200kW to the grid":
        Power supplied by CS to PTS = $200 \text{ kW} / 0.96 = 208.33 \text{ kW}$.
        The power "drawn from the grid" in this context isn't directly occurring as power is being *supplied* to the grid.

        **Let's go with the most standard interpretation:**
        *   Energy CS supplies to PTS: 200 kWh / 0.96 = 208.33 kWh.
        *   Power the grid *receives* from the BESS: 200 kW.

    b)
    *   Initial SoC = 60%
    *   Initial Energy $E(0) = 0.60 \times 500 \text{ kWh} = 300 \text{ kWh}$.
    *   Charging power *into the CS* = 250 kW.
    *   Charging efficiency $\eta_{charge} = 0.92$.
    *   Power drawn from the grid to charge the CS = 250 kW / 0.92 = 271.74 kW.
    *   Energy stored in CS over 1.5 hours = 250 kW $\times$ 1.5 h = 375 kWh.
    *   Final Energy $E(1.5) = E(0) + \text{Energy stored} = 300 \text{ kWh} + 375 \text{ kWh} = 675 \text{ kWh}$.
    *   However, the CS capacity is 500 kWh. So, the charging must be limited by the capacity.
    *   Maximum energy that can be added without exceeding capacity = $E_{max} - E(0) = 500 \text{ kWh} - 300 \text{ kWh} = 200 \text{ kWh}$.
    *   Therefore, even if the control system requests 250 kW for 1.5 hours (total 375 kWh to be added to the CS), the CS will only store 200 kWh, reaching its maximum capacity.
    *   Final Energy $E(1.5) = 300 \text{ kWh} + 200 \text{ kWh} = 500 \text{ kWh}$.
    *   Final SoC = $500 \text{ kWh} / 500 \text{ kWh} = 100\%$.

**Question 4 (CO4 - K2):** How can an energy storage system help in integrating a fluctuating wind power generation into the grid?

**Answer 4:** A wind turbine's output varies with wind speed.
*   **When wind speed is high:** The turbine generates more power than needed or is stable. The ESS can absorb this excess energy, preventing curtailment (wasted energy) and stabilizing the grid.
*   **When wind speed is low:** The turbine generates less power than the demand. The ESS can discharge its stored energy to compensate for this shortfall, providing a more consistent and reliable power supply to the grid.
This effectively "firms up" the wind power output, making it more predictable and dispatchable.

**Question 5 (Modeling - CDCS):** Describe a simple rule-based control strategy for a solar-paired ESS aimed at maximizing self-consumption of solar energy.

**Answer 5:**
**Objective:** Maximize the amount of solar energy generated that is consumed by the local load, with the ESS helping to bridge the gap between solar generation and load demand.

**Control Logic:**
1.  **Monitor:** Continuously monitor solar power generation ($P_{solar}$), local load power demand ($P_{load}$), and the ESS State of Charge (SoC).
2.  **Compare $P_{solar}$ and $P_{load}$:**
    *   **If $P_{solar} \ge P_{load}$ (Solar generation exceeds load):**
        *   The excess solar power ($P_{excess} = P_{solar} - P_{load}$) is available.
        *   If the ESS SoC is not at maximum ($SoC < SoC_{max}$), direct the ESS to charge with $P_{excess}$ (limited by ESS charging power rating and efficiency).
        *   If the ESS SoC is at maximum, the excess solar power is exported to the grid.
    *   **If $P_{solar} < P_{load}$ (Load exceeds solar generation):**
        *   The local load is met by $P_{solar}$.
        *   The remaining demand ($P_{shortfall} = P_{load} - P_{solar}$) must be met.
        *   If the ESS SoC is not at minimum ($SoC > SoC_{min}$), direct the ESS to discharge $P_{shortfall}$ (limited by ESS discharging power rating and efficiency).
        *   If the ESS SoC is at minimum, or if the ESS discharge cannot meet the full shortfall, the remaining deficit is imported from the grid.
3.  **Grid Interaction:** The ESS only imports power from the grid for charging when solar generation is insufficient, and only exports power to the grid when solar generation exceeds both load and ESS charging capacity. The primary goal is to use solar first, then the ESS, and only then import from the grid.

---

### **7. Important Points to Remember**

*   **ESS are not monolithic:** Their models vary significantly based on the underlying technology (battery, flywheel, etc.).
*   **Efficiency is critical:** Losses in the PTS and CS directly impact the overall energy utilization and cost-effectiveness.
*   **SoC is the primary state variable:** Managing the SoC within its operational limits is crucial for performance and longevity.
*   **The CDCS determines the value:** The effectiveness of an ESS is largely determined by the intelligence and optimality of its control system.
*   **Integration with the grid is complex:** Modeling must account for interactions with grid voltage, frequency, and market signals.
*   **Degradation is a key consideration for long-term modeling:** While initial models might focus on ideal operation, real-world application requires accounting for aging and wear.

---

This study note provides a foundation for understanding the mathematical modeling of energy storage systems, covering the essential components and their roles in the power system. Deeper dives into specific technologies and control strategies would be explored in subsequent modules.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
