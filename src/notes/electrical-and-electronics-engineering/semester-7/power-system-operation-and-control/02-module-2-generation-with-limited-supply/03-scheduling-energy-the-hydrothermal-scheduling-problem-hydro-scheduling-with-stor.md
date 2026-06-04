---
title: "Scheduling energy - The Hydrothermal Scheduling Problem - Hydro scheduling with storage limitation - Introduction to Pumped storage hydro plants."
subject: "POWER SYSTEM OPERATION AND CONTROL"
module: "Module 2: Generation with limited supply"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200862b85456187f3685a"
status: "completed"
scrapedAt: "2026-05-23T16:39:13.154Z"
---
# Power System Operation and Control - Module 2: Generation with Limited Supply

## Topic: Scheduling Energy - The Hydrothermal Scheduling Problem

This module focuses on the critical task of efficiently allocating generation resources to meet the system's demand, especially when certain generation sources have limitations. We will delve into the hydrothermal scheduling problem, a cornerstone of optimal power system operation.

### 1. Introduction to Scheduling Energy

**Definition:** Energy scheduling refers to the process of determining the optimal dispatch of available generation resources to meet the forecasted load demand at the minimum operating cost, while respecting all system constraints.

**Importance:**
*   **Economic Dispatch:** Minimizing the cost of electricity generation is a primary objective.
*   **Reliability:** Ensuring that demand is met at all times and maintaining adequate spinning reserves.
*   **Efficiency:** Utilizing resources optimally to avoid wastage.
*   **Environmental Concerns:** Meeting regulatory requirements and minimizing emissions.

**Key Concepts:**
*   **Load Forecasting:** Accurate prediction of future power demand is crucial for effective scheduling.
*   **Generation Cost Curves:** Functions that describe the incremental cost of producing power from each generating unit.
*   **Incremental Cost:** The cost of producing one additional unit of power (MW).
*   **Economic Dispatch:** The process of allocating generation among available units to minimize total cost for a given load, assuming all units are available.

**Textbook Reference:**
*   **Wood & Wollenberg (3rd ed., 2023):** Chapter 1 (Introduction to Power System Operation), Chapter 2 (Load Forecasting), Chapter 3 (Economic Dispatch). This textbook provides a foundational understanding of the principles behind energy scheduling and economic dispatch.

### 2. The Hydrothermal Scheduling Problem

**Definition:** Hydrothermal scheduling is the problem of optimally scheduling the operation of both hydro and thermal generating units over a period (e.g., a day, a week, a month) to meet the system load at the minimum cost, while considering the distinct characteristics and constraints of each type of generation.

**Why it's a Problem:** Hydro units have storage limitations (water availability) and variable efficiency based on head and flow, while thermal units have fuel costs and ramp rate limitations. The optimal mix of these two types of generation requires careful consideration over time.

**Key Components:**
*   **Hydro Units:**
    *   **Storage Hydro:** Units with reservoirs that can store water. The decision is not only about how much power to generate *now* but also how much water to *save for later*.
    *   **Run-of-River Hydro:** Units that generate power directly from the natural flow of a river, with limited or no storage.
*   **Thermal Units:**
    *   Conventional thermal plants (coal, gas, oil) that burn fuel to produce power.
    *   Nuclear power plants.

**Objective Function:** Minimize the total operating cost over the scheduling period. This cost typically includes fuel costs for thermal units and potentially other costs associated with hydro operation (e.g., water management, environmental impact).

**Constraints:**
*   **Load-Generation Balance:** Total generation must equal total demand plus losses at each time interval.
*   **Hydro Reservoir Storage Limits:** Minimum and maximum water levels in reservoirs.
*   **Hydro Water Availability:** The amount of water available for generation over the period.
*   **Hydro Generation Limits:** Minimum and maximum power output of hydro units.
*   **Thermal Unit Limits:** Minimum and maximum power output of thermal units.
*   **Ramp Rate Limits:** The rate at which thermal units can increase or decrease their output.
*   **Minimum Up/Down Times:** For thermal units, there are often minimum periods they must remain online or offline once started or stopped.
*   **Spinning Reserve Requirements:** Sufficient online generation capacity available to respond to sudden changes in load or generation outages.

**Modeling Approaches:**
*   **Dynamic Programming:** Traditionally used for hydrothermal scheduling due to its ability to handle multi-period optimization and state variables like reservoir levels.
*   **Linear Programming (LP) / Mixed-Integer Linear Programming (MILP):** Can be used if cost functions and constraints are linearized.
*   **Gradient Methods:** For optimizing continuous variables.

**Example:**
Consider a system with one thermal unit and one hydro unit with a reservoir.
*   **Thermal Unit:** Cost function C_T(P_T) = a + b*P_T + c*P_T^2
*   **Hydro Unit:** Generation P_H is related to water flow Q_H and reservoir head H: P_H = k * Q_H * H. The head H changes with the reservoir level. The water available over a day is limited.

The scheduling problem involves deciding the power output of the thermal unit (P_T) and the water to be released from the reservoir (and thus the power generated by the hydro unit, P_H) for each hour of the day, such that the total energy demand is met, reservoir levels remain within limits, and total cost is minimized.

**Textbook Reference:**
*   **Wood & Wollenberg (3rd ed., 2023):** Chapter 9 (Hydrothermal Coordination). This chapter is dedicated to the hydrothermal scheduling problem and its various formulations.
*   **Grainger & Stevenson (1994):** Chapter 10 (Economic Dispatch) and Chapter 11 (Unit Commitment) discuss concepts that extend to hydrothermal scheduling, particularly regarding unit characteristics and operational decisions.

**Course Outcome Alignment:**
*   **CO1 (K4):** Analyzing various methods of generation scheduling – Hydrothermal scheduling is a prime example of a complex scheduling method.
*   **CO2 (K5):** Formulating hydro-thermal scheduling problems – This involves understanding and expressing the objective function and constraints mathematically.

---

### 3. Hydro Scheduling with Storage Limitation

This section focuses on the challenges and techniques specific to scheduling hydro units, particularly those with limited storage capacity.

**Key Considerations:**
*   **Water as a Resource:** Water in a reservoir is a storable form of energy. The decision to use it now or save it for later is critical.
*   **Reservoir Level Dynamics:**
    *   `Storage(t+1) = Storage(t) + Inflow(t) - Outflow(t)`
    *   `Outflow(t) = Spill(t) + Generation_Outflow(t)`
    *   `Generation_Outflow(t)` is the water released for power generation.
*   **Head Dependency:** The power output of a hydro unit is proportional to the reservoir head (water level) and the flow rate: `P_H = C * H * Q`. As water is released, the head typically decreases, affecting efficiency and power output for the same flow.
*   **Marginal Cost of Water:** This is a key concept in optimal hydrothermal scheduling. It represents the value of releasing an additional unit of water for generation, considering its future potential. If water is scarce, the marginal cost will be high.

**Formulation Aspects:**
*   **State Variables:** The primary state variable for a hydro unit is its reservoir level at the beginning of each time period.
*   **Decision Variables:**
    *   Water outflow from the reservoir for generation.
    *   Spillage (if outflow exceeds generation requirements or is constrained).
    *   Power output of the hydro unit.
*   **Objective Function (Hydro Component):** While hydro generation itself might have zero or low direct fuel cost, the cost is implicit in the loss of potential future generation (opportunity cost). This is often captured by the marginal cost of water. In some formulations, there might be operation and maintenance costs.

**Dynamic Programming Approach:**
Dynamic programming is well-suited for this problem. It breaks down the multi-period problem into smaller, manageable stages.
1.  **Stages:** Each time period (e.g., hour, day) is a stage.
2.  **States:** The state at the beginning of a stage is the reservoir level.
3.  **Decisions:** The decision at each stage is the amount of water to release.
4.  **Recurrence Relation:** The optimal cost-to-go from a given state is related to the cost of making a decision in the current stage plus the optimal cost-to-go from the resulting state in the next stage.

Let $J_N(S_N)$ be the minimum cost from stage N to the end, given reservoir level $S_N$.
For stage $k$ (from 1 to N):
$J_k(S_k) = \min_{Q_{g,k}} \{ C_{H}(Q_{g,k}, S_k) + J_{k+1}(S_{k+1}) \}$

Where:
*   $J_k(S_k)$ is the minimum cost from stage $k$ to the end, given reservoir level $S_k$ at the start of stage $k$.
*   $Q_{g,k}$ is the quantity of water released for generation in stage $k$.
*   $C_{H}(Q_{g,k}, S_k)$ is the cost (or negative benefit) of releasing $Q_{g,k}$ water from a reservoir with head corresponding to $S_k$. This often implicitly represents the opportunity cost.
*   $S_{k+1}$ is the reservoir level at the start of stage $k+1$, determined by $S_k$, inflow, and outflow.

**Example of Storage Limitation Impact:**
If a reservoir has a limited total water capacity, and a significant portion of the water must be reserved for a peak demand period later in the week, the hydro unit's generation in earlier periods will be constrained. This might force the use of more expensive thermal generation, increasing the overall cost.

**Textbook Reference:**
*   **Wood & Wollenberg (3rd ed., 2023):** Chapter 9 discusses the hydrothermal coordination and specifically mentions the role of reservoir levels and water availability in scheduling. The dynamic programming approach is a core technique described.

**Course Outcome Alignment:**
*   **CO1 (K4):** Analyzing various methods of generation scheduling – This delves into the specific complexities of hydro scheduling.
*   **CO2 (K5):** Formulating hydro-thermal scheduling problems – Understanding the water balance equation and reservoir constraints is key.

---

### 4. Introduction to Pumped Storage Hydro Plants

Pumped storage hydro (PSH) plants are a crucial technology for managing variability in power systems, especially with the increasing penetration of intermittent renewable sources like solar and wind.

**Definition:** A pumped storage hydro plant is a type of hydroelectric energy storage system that uses two water reservoirs at different elevations. During periods of low electricity demand (and often low electricity prices), it pumps water from the lower reservoir to the upper reservoir. During periods of high electricity demand (and high prices), it releases water from the upper reservoir to the lower reservoir through turbines to generate electricity.

**How it Works (Two Modes of Operation):**
1.  **Pumping Mode (Energy Storage):**
    *   **Input:** Electricity from the grid.
    *   **Action:** Pumps water from the lower reservoir to the upper reservoir.
    *   **Purpose:** To store energy when electricity is cheap and abundant.
2.  **Generating Mode (Energy Release):**
    *   **Input:** Water stored in the upper reservoir.
    *   **Action:** Water flows down through turbines, generating electricity.
    *   **Purpose:** To supply electricity when demand is high and prices are high.

**Key Components:**
*   **Upper Reservoir:** Stores water at a higher elevation.
*   **Lower Reservoir:** Stores water at a lower elevation.
*   **Penstocks:** Pipes or tunnels that carry water between reservoirs and the powerhouse.
*   **Powerhouse:** Contains reversible pump-turbines and generators/motors.
*   **Reversible Pump-Turbines:** These machines can operate as pumps to lift water and as turbines to generate power.

**Characteristics and Advantages:**
*   **Energy Storage:** The primary function is to store electrical energy in the form of potential energy of water.
*   **Grid Stability:** Can provide rapid response to grid disturbances, offering frequency regulation and voltage support.
*   **Peak Shaving:** Generates power during peak demand hours, reducing reliance on more expensive thermal units.
*   **Load Levelling:** Absorbs excess generation during off-peak hours.
*   **Integration of Renewables:** Excellent for buffering the intermittency of solar and wind power. When renewables produce more than needed, the excess can be used for pumping. When renewables are low, PSH can provide power.
*   **High Efficiency:** Round-trip efficiency (electricity converted to stored energy and back) is typically in the range of 70-85%.

**Disadvantages:**
*   **Site Dependency:** Requires specific geographical features (suitable terrain for two reservoirs, elevation difference).
*   **Environmental Impact:** Construction can impact local ecosystems, water flow, and land use.
*   **Capital Cost:** High initial investment for construction.

**Scheduling Implications:**
PSH plants introduce a new dimension to scheduling. They can be considered as a flexible generation/storage resource.
*   **Cost of Pumping:** The cost of electricity used to pump water.
*   **Cost of Generation:** The revenue generated when discharging.
*   **Efficiency Losses:** The energy lost during the pumping and generation cycle.

The scheduling decision for a PSH plant involves determining:
*   When to pump and how much energy to use for pumping.
*   When to generate and how much power to supply.

This decision is typically made based on the price of electricity in the market, the expected future demand, and the efficiency of the PSH plant.

**Example:**
Imagine a day with low demand and cheap electricity (e.g., overnight) due to high wind generation. A PSH plant might pump 1000 MWh of energy into its upper reservoir, using 1500 MWh from the grid (assuming 66.7% efficiency for simplicity). Later in the day, during peak demand when electricity is expensive, the PSH plant can release this stored energy. If it generates 950 MWh from the stored water (85% efficiency of the turbines), it has effectively stored and then dispatched energy.

**Textbook Reference:**
*   **Wood & Wollenberg (3rd ed., 2023):** Chapter 9 (Hydrothermal Coordination) might briefly mention or allude to pumped storage as an extension or variation of hydro scheduling. While PSH is not traditional hydro generation, its scheduling principles share similarities with managing a hydro reservoir's stored potential. Further details might be found in specialized literature on energy storage.
*   **Grainger & Stevenson (1994):** Does not extensively cover pumped storage as its primary focus is on conventional power system analysis and operation from that era.

**Course Outcome Alignment:**
*   **CO1 (K4):** Analyzing various methods of generation scheduling – PSH adds a complex but vital element to modern scheduling.
*   **CO2 (K5):** Formulating hydro-thermal scheduling problems – The formulation would need to incorporate the pumping and generation costs/benefits of PSH units.

---

### Summary of Key Points to Remember

*   **Hydrothermal Scheduling:** Optimally combining hydro and thermal generation to meet demand at minimum cost over time.
*   **Water as a Storable Resource:** Hydro units with reservoirs involve decisions about current generation versus future availability of water.
*   **Marginal Cost of Water:** Crucial for valuing water in storage and making optimal release decisions.
*   **Dynamic Programming:** A common mathematical technique for solving multi-period hydrothermal scheduling problems, especially those involving reservoir dynamics.
*   **Pumped Storage Hydro (PSH):** A flexible energy storage technology that uses electricity to pump water uphill and releases it to generate power when needed. PSH is critical for grid stability and integrating renewables.
*   **PSH Efficiency:** PSH plants have round-trip efficiencies (typically 70-85%) which must be factored into scheduling.

---

### Practice Questions and Exercises

**Question 1 (Conceptual):**
Explain the fundamental difference in scheduling decisions for a run-of-river hydro plant versus a storage hydro plant. What key constraint differentiates them?

**Answer:**
The fundamental difference lies in the ability to store energy. A run-of-river hydro plant's generation is directly dependent on the natural flow of the river at that moment, with minimal storage. Its scheduling is dictated by immediate water availability and demand. A storage hydro plant, however, has a reservoir, allowing it to store water (and thus potential energy) for later use. The key constraint differentiating them is the **reservoir capacity and the volume of water available for release over time**. This allows storage hydro to decouple generation from immediate river flow, enabling it to meet peak demand or provide reserve even when natural inflow is low, at the expense of depleting its stored resource.

---

**Question 2 (Formulation Aspect):**
Consider a simplified hydrothermal scheduling problem over two days.
*   **Thermal Unit:** Cost $C_T(P_T) = 50 + 2P_T$ $/hr, where $P_T$ is in MW. Max $P_T = 100$ MW.
*   **Hydro Unit:** Cost $C_H = 0$ $/hr, but requires water. Max $P_H = 50$ MW.
*   **Reservoir:** Initial level $S_0 = 100$ acre-feet. Max level $S_{max} = 200$ acre-feet. Min level $S_{min} = 50$ acre-feet.
*   **Water-to-Power Conversion:** 1 acre-foot of water can generate 1 MWh of energy at this specific hydro plant.
*   **Demand:**
    *   Day 1: 120 MW for 24 hours.
    *   Day 2: 100 MW for 24 hours.
*   **Inflow:** 40 acre-feet per day for both days.

Formulate the optimization problem for scheduling over these two days to minimize total cost.
*(Note: You do not need to solve it, just set up the objective function and constraints.)*

**Answer:**

**Objective Function:** Minimize total cost over 2 days.
Total Cost = $\sum_{t=1}^{48} C_T(P_{T,t})$
Where $P_{T,t}$ is the thermal generation at hour $t$.

**Decision Variables:**
*   $P_{T,t}$: Thermal generation at hour $t$ (MW) for $t = 1, \ldots, 48$.
*   $P_{H,t}$: Hydro generation at hour $t$ (MW) for $t = 1, \ldots, 48$.
*   $W_{t}$: Water released for generation at hour $t$ (acre-feet) for $t = 1, \ldots, 48$.
*   $S_t$: Reservoir level at the beginning of hour $t$ (acre-feet) for $t = 1, \ldots, 49$.

**Constraints:**

1.  **Load-Generation Balance (for each hour t):**
    $P_{T,t} + P_{H,t} = \text{Demand}_t$

2.  **Hydro Generation-Water Release Relationship:**
    $P_{H,t} = W_t$ (since 1 acre-foot produces 1 MWh, and we're assuming a 1-hour time step)

3.  **Reservoir Level Dynamics (for each hour t):**
    $S_{t+1} = S_t + \text{Inflow}_t - W_t$

4.  **Hydro Generation Limits:**
    $0 \le P_{H,t} \le 50$ MW for $t = 1, \ldots, 48$.
    This also implies $0 \le W_t \le 50$ acre-feet.

5.  **Thermal Generation Limits:**
    $0 \le P_{T,t} \le 100$ MW for $t = 1, \ldots, 48$.

6.  **Reservoir Storage Limits:**
    $S_{min} \le S_t \le S_{max}$
    $50 \le S_t \le 200$ acre-feet for $t = 1, \ldots, 49$.
    (Specifically, $S_1 = 100$ acre-feet, and $S_{49}$ is the level at the end of day 2).

7.  **Demand Specification:**
    *   For $t = 1, \ldots, 24$ (Day 1), Demand$_t = 120$ MW.
    *   For $t = 25, \ldots, 48$ (Day 2), Demand$_t = 100$ MW.

8.  **Inflow Specification:**
    *   For $t = 1, \ldots, 24$, Inflow$_t = 40/24$ acre-feet per hour (assuming constant inflow during the day).
    *   For $t = 25, \ldots, 48$, Inflow$_t = 40/24$ acre-feet per hour.
    *(Alternatively, if inflow is given daily, the reservoir equation can be written per day. Assuming hourly for consistency with demand.)*

**Overall Problem:**
Minimize $\sum_{t=1}^{48} (50 + 2P_{T,t})$
Subject to:
$P_{T,t} + P_{H,t} = \text{Demand}_t$, for $t=1,\ldots,48$
$P_{H,t} = W_t$, for $t=1,\ldots,48$
$S_{t+1} = S_t + \text{Inflow}_t - W_t$, for $t=1,\ldots,48$
$0 \le P_{H,t} \le 50$, for $t=1,\ldots,48$
$0 \le P_{T,t} \le 100$, for $t=1,\ldots,48$
$50 \le S_t \le 200$, for $t=1,\ldots,49$
$S_1 = 100$

---

**Question 3 (Pumped Storage Concept):**
A pumped storage hydro plant has a pumping efficiency of 80% and a generating efficiency of 90%. If it pumps 1000 MWh of energy into its reservoir, how much energy must be generated to break even (i.e., recover the energy used for pumping)?

**Answer:**
Let $E_{pump\_in}$ be the energy pumped into the reservoir (from the grid).
Let $E_{pump\_out}$ be the energy consumed from the grid for pumping.
Let $E_{gen\_out}$ be the energy generated by the plant.
Let $E_{gen\_in}$ be the energy stored in the reservoir for generation.

Given:
*   $E_{gen\_in} = 1000$ MWh (energy stored in the reservoir)
*   Generating efficiency $= 90\% = 0.9$
*   Pumping efficiency $= 80\% = 0.8$

To generate $E_{gen\_out}$ from the reservoir, the energy required from the reservoir is $E_{gen\_in} = E_{gen\_out} / 0.9$.
For the plant to "break even" in terms of energy, the energy generated ($E_{gen\_out}$) must at least equal the energy consumed for pumping ($E_{pump\_out}$).

Let's consider the round-trip:
To store $E_{gen\_in}$ in the reservoir, the energy consumed from the grid is $E_{pump\_out} = E_{gen\_in} / 0.8$.
$E_{pump\_out} = 1000 \text{ MWh} / 0.8 = 1250 \text{ MWh}$.

Now, to recover this 1250 MWh of input energy, the plant must generate $E_{gen\_out}$ such that the energy *used* from the reservoir is 1250 MWh.
The energy stored in the reservoir for generation is $E_{gen\_in} = E_{gen\_out} / 0.9$.
So, $1250 \text{ MWh} = E_{gen\_out} / 0.9$.
$E_{gen\_out} = 1250 \text{ MWh} * 0.9 = 1125 \text{ MWh}$.

Therefore, the plant must generate **1125 MWh** to recover the energy equivalent to what it consumed for pumping (1250 MWh), considering the inefficiencies in both processes. The net energy loss is $1250 - 1125 = 125$ MWh, which is the system inefficiency for this cycle.

*(The question is slightly ambiguous about "break even." If it means generating as much as was *pumped into the reservoir*, then it would be 1000 MWh. However, "break even" in an energy context usually implies recovering the initial energy expenditure from the grid.)*

**Important Note:** The "break-even" concept in PSH operation is often tied to economic considerations (revenue from generation vs. cost of pumping). In purely energy terms, you will always have a net loss due to inefficiencies. The typical goal is to generate more energy value (at peak times) than the energy cost (at off-peak times).

---

### Course Outcome Alignment Check:

*   **CO1 (K4):** Analyzed scheduling methods (hydrothermal, PSH integration).
*   **CO2 (K5):** Formulated a simplified hydrothermal scheduling problem.
*   **CO3 (K5):** (Implied) Understanding the cost implications of scheduling different sources relates to power exchange.
*   **CO4 (K3):** (Not directly addressed in this topic, but security is a broader consideration in scheduling.)
*   **CO5 (K4):** (Not directly addressed in this topic.)

This module primarily supports CO1 and CO2, laying the groundwork for more complex system-wide scheduling problems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
