---
title: "Generation with limited supply-Take or pay fuel supply contract- Introduction to Hydrothermal coordination-Long range and short range scheduling"
subject: "POWER SYSTEM OPERATION AND CONTROL"
module: "Module 2: Generation with limited supply"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200862b85456187f36858"
status: "completed"
scrapedAt: "2026-05-23T16:39:10.521Z"
---
# Power System Operation and Control: Module 2 - Generation with Limited Supply

## Topic: Generation with Limited Supply - Take or Pay Fuel Supply Contract, Introduction to Hydrothermal Coordination, Long Range and Short Range Scheduling

---

### 1. Introduction to Generation with Limited Supply

In power system operation, the dispatch of generating units is crucial for meeting the system demand reliably and economically. While in an ideal scenario, all generating units would have unlimited fuel supply, in reality, many sources of generation are subject to limitations. This module delves into the complexities arising from such limitations, particularly focusing on fuel supply contracts and the coordination of different generation types.

---

### 2. Take or Pay Fuel Supply Contract

#### 2.1. Concept and Importance

*   **Definition:** A "Take or Pay" (TOP) contract is a contractual agreement between a fuel supplier (e.g., gas supplier) and a power producer where the power producer agrees to either:
    *   **Take** a minimum quantity of fuel from the supplier over a specified period.
    *   **Pay** for that minimum quantity even if they do not take it.
*   **Rationale:** These contracts are common in situations where the fuel supplier makes significant investments in infrastructure (e.g., pipelines, liquefaction facilities) to ensure a reliable supply. The TOP clause guarantees a minimum revenue for the supplier, mitigating their investment risk.
*   **Impact on Power Generation:** This contract type introduces a significant constraint on the operation of power plants, particularly those relying on such fuel supplies (e.g., natural gas-fired power plants). The power producer must manage their generation to either utilize the contracted fuel or incur a penalty (the "pay" portion).

#### 2.2. Contractual Clauses and Implications

*   **Minimum Take Quantity (MTQ):** The specified minimum amount of fuel the power producer must take or pay for.
*   **Contract Period:** The duration over which the MTQ applies.
*   **Price:** The price per unit of fuel.
*   **Overage/Underage:**
    *   **Overage:** If the power producer takes *more* than the MTQ, they typically pay the agreed-upon price.
    *   **Underage:** If the power producer takes *less* than the MTQ, they pay for the difference at the contracted price.
*   **Operational Decisions:** The TOP clause directly influences dispatch decisions. Power plants with TOP contracts might be dispatched more frequently, even if they are not the most economical in terms of marginal operating cost, to avoid penalties.

#### 2.3. Modeling TOP Contracts in Dispatch

*   **Fuel Cost Component:** The cost associated with fulfilling the TOP obligation needs to be factored into the economic dispatch. This can be viewed as a fixed cost or a minimum fuel cost for the period.
*   **Opportunity Cost:** The decision to dispatch a unit with a TOP contract or a unit with a more economical fuel source needs to consider the "opportunity cost" of not utilizing the contracted fuel, which would lead to paying the penalty.
*   **Stochastic Nature:** Fuel demand and availability can be variable. The TOP contract adds a layer of complexity in managing this variability to minimize costs.

**Example:**

Consider a power plant with a TOP contract for 100,000 MMBtu of natural gas per month at $5/MMBtu.

*   **Scenario 1: Actual Consumption = 120,000 MMBtu:** The plant takes 120,000 MMBtu. The fuel cost is $120,000 \times \$5 = \$600,000$.
*   **Scenario 2: Actual Consumption = 90,000 MMBtu:** The plant takes 90,000 MMBtu. However, they are obligated to take at least 100,000 MMBtu. They must pay for the remaining 10,000 MMBtu. The total fuel cost is $100,000 \times \$5 = \$500,000$. This $500,000 includes the cost of 90,000 MMBtu consumed and the penalty for the remaining 10,000 MMBtu.
*   **Scenario 3: Actual Consumption = 0 MMBtu:** The plant takes 0 MMBtu. They must pay for the full 100,000 MMBtu. The total fuel cost is $100,000 \times \$5 = \$500,000$.

**Reference:** While specific "Take or Pay" contract details might not be extensively covered in general power system textbooks, the principles of incorporating fixed costs, minimum operating constraints, and economic dispatch are fundamental. Discussions on fuel cost modeling and availability constraints can be found in Wood & Wollenberg.

---

### 3. Introduction to Hydrothermal Coordination

#### 3.1. Concept and Importance

*   **Definition:** Hydrothermal coordination is the process of optimally scheduling the operation of **hydroelectric power plants** and **thermal power plants** (like coal, gas, nuclear) in an interconnected power system to meet the total demand at the minimum cost, while respecting operational constraints.
*   **Why Coordinate?**
    *   **Economic Dispatch:** Hydro units often have very low or zero variable fuel costs (water is free). Thermal units have variable fuel costs that vary depending on the fuel type and efficiency. Coordinating them allows for leveraging the low-cost hydro generation to displace higher-cost thermal generation.
    *   **System Reliability:** Hydro reservoirs can provide fast response and reserve capabilities, enhancing system stability and reliability.
    *   **Environmental Considerations:** Hydro generation is generally considered cleaner than many thermal sources. Coordination can help optimize the use of cleaner resources.
    *   **Water Management:** For hydropower, coordination also involves managing water resources (reservoirs) for irrigation, flood control, and other purposes, in addition to power generation.

#### 3.2. Characteristics of Hydro and Thermal Units

| Feature             | Hydroelectric Units                                  | Thermal Units                                         |
| :------------------ | :--------------------------------------------------- | :---------------------------------------------------- |
| **Fuel Cost**       | Negligible (water is free)                           | Significant (coal, gas, nuclear fuel)                 |
| **Variable Cost**   | Very low, primarily maintenance and operation        | High and variable, dependent on fuel price & efficiency |
| **Start-up Cost**   | Low                                                  | High (especially for large thermal units)             |
| **Ramp Rate**       | High (can change output quickly)                     | Moderate to low, depending on unit size and type      |
| **Response Time**   | Fast                                                 | Slower than hydro                                     |
| **Capacity**        | Can be limited by water availability/reservoir size | Typically large                                       |
| **Environmental**   | Generally lower emissions, but can impact ecology    | Higher emissions (SOx, NOx, CO2), thermal pollution   |
| **Operational Mode**| Can operate as peaking or base load, but often used for peaking due to flexibility | Base load or intermediate load, can be used for peaking but less efficiently than hydro |

#### 3.3. Coordination Problem Formulation

The core of hydrothermal coordination is to determine the optimal power output for each hydro and thermal unit over a given period (e.g., a day, a week) to minimize the total system operating cost.

*   **Objective Function:** Minimize the sum of fuel costs for thermal units and any operational costs for hydro units over the scheduling horizon.
    *   Minimize $\sum_{t=1}^{T} \sum_{i \in \text{thermal}} F_{i}(P_{gi,t})$
    where $F_i(P_{gi,t})$ is the fuel cost function of thermal unit $i$ at time $t$, $P_{gi,t}$ is the power output of thermal unit $i$ at time $t$, and $T$ is the total number of time intervals.

*   **Constraints:**
    1.  **Power Balance:** Total generation must meet the total demand plus losses at each time interval.
        *   $\sum_{i \in \text{thermal}} P_{gi,t} + \sum_{j \in \text{hydro}} P_{gj,t} = D_t + L_t$
        where $D_t$ is the system demand at time $t$, and $L_t$ represents system losses at time $t$.
    2.  **Generator Capacity Limits:** The output of each unit must be within its minimum and maximum capacity.
        *   $P_{gi,min} \le P_{gi,t} \le P_{gi,max}$ (for thermal units)
        *   $P_{gj,min} \le P_{gj,t} \le P_{gj,max}$ (for hydro units)
    3.  **Hydro Water Constraints:**
        *   **Reservoir Storage:** The change in reservoir storage is equal to water inflow minus water outflow (used for generation, spillage, evaporation).
            *   $S_{j,t+1} = S_{j,t} + I_{j,t} - \sum_{k=1}^{N_t} P_{gj,t,k} - Sp_{j,t} - Evap_{j,t}$
            where $S_{j,t}$ is the storage in reservoir $j$ at the beginning of time interval $t$, $I_{j,t}$ is the inflow into reservoir $j$ during interval $t$, $P_{gj,t,k}$ is the power generated by hydro unit $k$ at time $t$ (if multiple units at a reservoir), $Sp_{j,t}$ is the spillage from reservoir $j$ during interval $t$, and $Evap_{j,t}$ is evaporation from reservoir $j$ during interval $t$.
        *   **Hydraulic Constraints:** The power generated by a hydro unit is related to the water flow rate and head.
            *   $P_{gj,t} = \eta_j \cdot H_j \cdot Q_{gj,t}$ (simplified linear relationship)
            where $\eta_j$ is the overall efficiency of the hydro plant, $H_j$ is the head, and $Q_{gj,t}$ is the water flow for generation. The water flow $Q_{gj,t}$ is constrained by the plant's capacity.
        *   **Initial and Final Storage:** Reservoir storage levels at the beginning and end of the scheduling period might be fixed or bounded.
            *   $S_{j,0} = S_{j,initial}$
            *   $S_{j,T} = S_{j,final}$ (or $S_{j,min} \le S_{j,T} \le S_{j,max}$)
    4.  **Spinning Reserve Requirements:** A certain amount of generation capacity must be available to respond to contingencies.
    5.  **Minimum Up/Down Times:** Thermal units may have minimum periods they must remain online or offline once started or stopped.
    6.  **Ramp Rate Limits:** The rate at which unit output can be increased or decreased is limited.

**Reference:** Wood & Wollenberg (Chapter 7: Hydrothermal Coordination) provides a detailed mathematical formulation and solution techniques for hydrothermal scheduling. Grainger & Stevenson also cover basic economic dispatch principles that form the foundation.

**Knowledge Level Alignment:** This section directly addresses **CO2: Formulate hydro-thermal scheduling problems**, aligning with a Knowledge Level of K5 (Formulate).

---

### 4. Long Range and Short Range Scheduling

Hydrothermal coordination problems are typically solved at different time horizons, with distinct objectives and levels of detail.

#### 4.1. Long-Range Scheduling (e.g., Seasonal, Annual)

*   **Objective:** To determine the optimal *distribution* of total energy that should be generated by hydro versus thermal sources over a longer period (e.g., months or a year). This focuses on managing water resources effectively.
*   **Time Horizon:** Months to a year.
*   **Time Intervals:** Typically coarse (e.g., weekly or monthly blocks).
*   **Key Decisions:**
    *   **Water Allocation:** How much water from reservoirs should be released for power generation versus other uses (irrigation, flood control).
    *   **Hydro Energy Planning:** Determining the total energy to be generated by hydro in each period.
    *   **Thermal Energy Planning:** Determining the total energy to be generated by thermal plants.
    *   **Fuel Procurement:** Informing decisions about fuel purchasing strategies.
    *   **Maintenance Scheduling:** Planning for major overhauls of large units.
*   **Methodology:** Often uses stochastic optimization to account for hydrological uncertainties (rainfall, inflow). Dynamic programming or linear programming are common. The focus is on maximizing the value of water resources.
*   **Output:** A general plan for energy dispatch, water release schedules, and optimal reservoir operating policies.

**Example:** A utility might decide in the spring that due to low snowpack, they will prioritize using their hydro resources for peak demand in the summer months, and rely more on their coal plants for base load during the shoulder seasons.

#### 4.2. Short-Range Scheduling (e.g., Daily, Weekly)

*   **Objective:** To determine the *minute-by-minute* or *hour-by-hour* dispatch of available generating units to meet the forecasted load and reserve requirements at the minimum operating cost for a short period.
*   **Time Horizon:** Hours to a week.
*   **Time Intervals:** Typically hourly, but can be even finer (e.g., 15-minute intervals for real-time dispatch).
*   **Key Decisions:**
    *   **Unit Commitment:** Deciding which units to start up, shut down, or keep online in each time interval.
    *   **Economic Dispatch:** Determining the precise power output of each committed unit for each time interval.
    *   **Hydro Unit Scheduling:** Specifying the power output of individual hydro units and their water usage.
    *   **Thermal Unit Scheduling:** Specifying the power output of individual thermal units and managing their start-up/shut-down costs.
    *   **Reserve Allocation:** Assigning spinning and non-spinning reserves to specific units.
*   **Methodology:** Unit Commitment (UC) and Economic Dispatch (ED) problems. These are typically solved using mixed-integer programming (for UC) and linear programming or quadratic programming (for ED).
*   **Output:** A detailed schedule of which units are operating, their output levels, and their on/off status for each time interval.

**Example:** For a specific Tuesday, the short-range schedule will dictate that the nuclear plant runs at full capacity from 8 AM to 10 PM, the coal plant provides base load, the natural gas plant is dispatched to meet the midday peak, and specific hydro units are used to cover the afternoon peak demand and provide operating reserves.

**Important Point:** Long-range and short-range scheduling are interdependent. The decisions made in long-range planning provide the framework and constraints for short-range scheduling. For example, the total hydro energy allocated for a week in the long-range plan constrains the hourly dispatch of hydro units in the short-range plan.

**Reference:** Wood & Wollenberg (Chapter 6: Unit Commitment, Chapter 7: Hydrothermal Coordination) covers both long and short-range scheduling aspects. Long-range planning often involves more aggregated models of the system, while short-range scheduling requires detailed modeling of individual units.

**Knowledge Level Alignment:** This section supports **CO1: Analyse various methods of generation scheduling** (K4) by explaining different approaches based on time horizons and objectives. It also contributes to **CO2: Formulate hydro-thermal scheduling problems** (K5) by highlighting the different objectives and constraints at various timescales.

---

### 5. Key Concepts and Definitions Recap

*   **Take or Pay (TOP) Contract:** Contractual obligation to take or pay for a minimum quantity of fuel.
*   **Hydrothermal Coordination:** Optimal scheduling of hydro and thermal generation.
*   **Fuel Cost:** Variable cost of operating thermal units. Hydro units have negligible fuel costs.
*   **Reservoir Storage:** Water level in a hydroelectric dam, a key constraint for hydro generation.
*   **Inflow:** Natural water entering a reservoir.
*   **Spillage:** Releasing water from a reservoir without generating power.
*   **Unit Commitment (UC):** Decision of which generating units to start up or shut down.
*   **Economic Dispatch (ED):** Determination of the optimal output of committed units to meet demand at minimum cost.
*   **Long-Range Scheduling:** Focuses on optimal water resource allocation and aggregate energy planning.
*   **Short-Range Scheduling:** Focuses on detailed hourly/sub-hourly unit commitment and economic dispatch.
*   **Hydrological Uncertainty:** Variability in rainfall and water inflow affecting hydro generation.

---

### 6. Practice Questions and Exercises

**Question 1 (TOP Contract):**
A power plant has a Take or Pay contract for 50,000 MMBtu of natural gas per month at $4/MMBtu. In a particular month, it consumes 45,000 MMBtu. What is the total fuel cost for the month?

**Answer 1:**
Since the consumption (45,000 MMBtu) is less than the Minimum Take Quantity (50,000 MMBtu), the plant must pay for the contracted amount.
Total Fuel Cost = Minimum Take Quantity $\times$ Price per MMBtu
Total Fuel Cost = $50,000 \text{ MMBtu} \times \$4/\text{MMBtu} = \$200,000$.

**Question 2 (Hydrothermal Coordination Formulation):**
Consider a simplified system with one hydro unit and one thermal unit. The system demand is 100 MW. The hydro unit has a maximum capacity of 80 MW and a minimum of 10 MW. Its water flow for generation is $Q_{hydro} = 0.5 \times P_{hydro}$. The thermal unit has a maximum capacity of 60 MW and a minimum of 20 MW. The thermal unit's fuel cost is $F_{thermal}(P_{thermal}) = 0.02 P_{thermal}^2 + 10 P_{thermal}$ ($/hr). The hydro unit has negligible fuel cost but a water usage constraint of $Q_{hydro} \le 30 \text{ m}^3/\text{s}$. Assume the relationship $P_{hydro}$ (MW) = $0.8 \times Q_{hydro}$ (m$^3$/s).

Formulate the economic dispatch problem to minimize total fuel cost.

**Answer 2:**
**Objective Function:**
Minimize Total Cost = Fuel Cost of Thermal Unit
Minimize $Z = 0.02 P_{thermal}^2 + 10 P_{thermal}$

**Constraints:**
1.  **Power Balance:**
    $P_{hydro} + P_{thermal} = D = 100$ MW

2.  **Generator Capacity Limits:**
    *   Hydro: $10 \text{ MW} \le P_{hydro} \le 80 \text{ MW}$
    *   Thermal: $20 \text{ MW} \le P_{thermal} \le 60 \text{ MW}$

3.  **Hydro Water Constraint (in terms of power):**
    From $P_{hydro} = 0.8 \times Q_{hydro}$, we get $Q_{hydro} = P_{hydro} / 0.8$.
    The water flow constraint is $Q_{hydro} \le 30 \text{ m}^3/\text{s}$.
    So, $P_{hydro} / 0.8 \le 30 \implies P_{hydro} \le 24$ MW.

    Therefore, the hydro unit's effective capacity constraint is $10 \text{ MW} \le P_{hydro} \le 24 \text{ MW}$.

**Problem Formulation:**
Minimize $Z = 0.02 P_{thermal}^2 + 10 P_{thermal}$
Subject to:
$P_{hydro} + P_{thermal} = 100$
$10 \le P_{hydro} \le 24$
$20 \le P_{thermal} \le 60$

**(To solve this, one would typically use Lagrangian Multipliers or substitution. For example, $P_{thermal} = 100 - P_{hydro}$. Substituting this into the objective function and solving for $P_{hydro}$ within its bounds would yield the optimal dispatch.)**

**Question 3 (Long vs. Short Range):**
Briefly explain the primary difference in objectives between long-range and short-range hydrothermal scheduling.

**Answer 3:**
The primary difference lies in their **time horizon** and **level of detail/focus**:

*   **Long-Range Scheduling:** Focuses on **managing water resources and allocating total energy generation** between hydro and thermal sources over periods of months to a year. Its objective is to maximize the value of water resources while ensuring overall energy availability, often considering hydrological uncertainties and major maintenance.
*   **Short-Range Scheduling:** Focuses on **detailed hourly or sub-hourly operational decisions** for a period of hours to a week. Its objective is to determine the precise unit commitment and economic dispatch of individual units to meet forecasted demand and reserves at the minimum operating cost, considering start-up/shut-down costs, ramp rates, and minimum up/down times.

---

### 7. Important Points to Remember

*   **TOP contracts introduce a "take or pay" penalty**, influencing dispatch decisions to minimize overall costs.
*   **Hydrothermal coordination is crucial for economic and reliable power system operation**, leveraging the low-cost nature of hydro and the flexibility of hydro units.
*   **Hydro units have unique constraints related to water availability and reservoir management**, which must be incorporated into scheduling models.
*   **Long-range scheduling provides the strategic energy allocation framework**, while **short-range scheduling provides the tactical operational plan**.
*   **The interaction between long-range and short-range planning is iterative and vital** for effective power system operation.
*   **Understanding the cost structures (fuel, start-up) and operational characteristics (capacity, ramp rates) of all generating units is fundamental** for any scheduling problem.

---

### 8. Alignment with Course Outcomes

*   **CO1: Analyse various methods of generation scheduling.** (K4)
    *   This module covers different scheduling approaches: economic dispatch, unit commitment, and the distinction between long-range (water/energy planning) and short-range (hourly dispatch) scheduling.
*   **CO2: Formulate hydro-thermal scheduling problems.** (K5)
    *   The section on Hydrothermal Coordination explicitly details the objective function and constraints required to formulate these problems.
*   **CO3: Evaluate power exchange in interconnected power systems.** (K5)
    *   While not explicitly covered in detail here, the principles of economic dispatch and coordinated operation are foundational to evaluating power exchange. The optimal scheduling of local resources impacts the need for and cost of power imports/exports.
*   **CO4: Analyse security issues in power system networks.** (K3)
    *   The flexibility of hydro units and the need for operating reserves (addressed implicitly in scheduling) are critical for system security. Coordinating generation to meet demand and provide reserves is a key aspect of ensuring security.
*   **CO5: Analyse various state estimation methods.** (K4)
    *   State estimation is related to knowing the system's operating point, which is determined by the generation schedule. Accurate load forecasting and generation output are inputs to state estimation.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
