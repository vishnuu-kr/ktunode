---
title: "Unit Commitment Solution Methods - Priority-List Methods – Security Constrained Unit Commitment."
subject: "POWER SYSTEM OPERATION AND CONTROL"
module: "Module 1: Introduction"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200862b85456187f36856"
status: "completed"
scrapedAt: "2026-05-23T16:39:09.344Z"
---
# POWER SYSTEM OPERATION AND CONTROL

## Module 1: Introduction

### Unit Commitment Solution Methods – Priority-List Methods – Security Constrained Unit Commitment

---

### 1. Introduction to Unit Commitment (UC)

**Definition:** Unit Commitment (UC) is the process of selecting which generating units to turn ON and OFF to meet the forecasted load demand and ancillary service requirements at the minimum possible operating cost, while satisfying all operational constraints. It is a crucial step in the economic operation of a power system.

**Importance:**

*   **Economic Dispatch:** UC provides the basis for economic dispatch, ensuring the most cost-effective combination of online units is used.
*   **Reliability:** Proper UC contributes to system reliability by ensuring sufficient spinning reserve and minimizing the risk of blackouts.
*   **Efficiency:** Optimizing unit scheduling leads to reduced fuel consumption and emissions.
*   **Ancillary Services:** UC must also consider the provision of ancillary services like frequency regulation and voltage support.

**Key Objectives of UC:**

*   Minimize total operating cost (fuel cost, startup/shutdown costs).
*   Meet forecasted load demand for each hour.
*   Satisfy spinning reserve requirements.
*   Respect unit operational constraints (minimum up/down times, ramp rates, etc.).
*   Consider network constraints (security considerations).

---

### 2. Unit Commitment Solution Methods

Unit commitment problems are typically large-scale, mixed-integer programming problems. Various solution methods have been developed to address these complexities.

#### 2.1. Priority-List Methods (Heuristic Methods)

Priority-list methods are heuristic approaches that attempt to find a near-optimal solution to the UC problem by prioritizing units based on certain economic criteria. They are generally simpler and faster than optimization-based methods but may not guarantee the absolute optimal solution.

**Key Concept: Priority List**

A priority list ranks generating units based on their incremental cost or efficiency. The most efficient or lowest cost units are given higher priority to be started up.

**Types of Priority-List Methods:**

1.  **Minimum Incremental Cost (MIC) Method:**
    *   **Description:** Units are ranked in ascending order of their incremental cost (marginal cost) at a given operating point. The lowest cost units are dispatched first.
    *   **Process:**
        *   Forecast the load for each hour.
        *   For each hour, rank all available units by their incremental cost.
        *   Start up the lowest cost units until the load is met.
        *   Ensure spinning reserve is also met by keeping some higher cost units online or starting them up.
    *   **Limitations:** This method is a simplified version of economic dispatch and does not directly address the startup/shutdown costs or temporal constraints (minimum up/down times) effectively in the UC context. It's more suited for steady-state dispatch.

2.  **Minimum Fuel Cost Method:**
    *   **Description:** This is a more refined heuristic approach that considers the full cost of operation, including fuel cost and potentially startup costs. Units are prioritized based on their cost to bring online and operate.
    *   **Process:**
        *   **Priority Index:** A common priority index is the **"Equivalent Full Load Hours" (EFLH)** or **"Equivalent Operating Hours" (EOH)**. This metric attempts to quantify the total cost savings a unit provides over its expected operating life by considering its efficiency and operating hours. Units with lower EFLH (meaning they are more efficient or operate for fewer hours) are given higher priority.
        *   Alternatively, a simple priority can be based on **hot start cost + (incremental cost * operating hours)**.
        *   **Startup/Shutdown:** The method usually involves a "look-ahead" or "look-back" mechanism to handle minimum up/down times. If a unit is scheduled to be OFF for a duration less than its minimum down time, it's kept ON. Similarly, if a unit is scheduled to be ON for a duration less than its minimum up time, it's kept ON.
        *   **Priority Ordering:** Units are ordered based on their economic priority, and then the commitment decisions are made sequentially, hour by hour, while respecting the temporal constraints.

3.  **Priority Order Based on Start-up Cost and Efficiency:**
    *   **Description:** This method combines the economic merit of a unit with its startup cost. A unit with a low incremental cost but a high startup cost might not be committed for a short duration if another unit with a slightly higher incremental cost but a very low startup cost can meet the demand.
    *   **Priority Metric:** A common metric is to consider a weighted sum of startup cost and incremental fuel cost. Units with the lowest combined cost are given higher priority.
    *   **Example:** Imagine two units:
        *   Unit A: Incremental Cost = $50/MWh, Startup Cost = $500
        *   Unit B: Incremental Cost = $60/MWh, Startup Cost = $100
        If the load is small and only needs to be served for a few hours, Unit B might be more economical overall due to its lower startup cost, even though its incremental cost is higher.

**Textbook Reference:**

*   **Wood & Wollenberg (3rd ed., 2023):** Chapter 3, "Economic Dispatch and Unit Commitment," discusses various heuristic methods including priority-list approaches. They emphasize the trade-off between computational speed and optimality.

**Advantages of Priority-List Methods:**

*   **Simplicity:** Relatively easy to understand and implement.
*   **Speed:** Faster than complex optimization algorithms.
*   **Good for smaller systems:** Can provide reasonable solutions for systems with a limited number of units.

**Disadvantages of Priority-List Methods:**

*   **Suboptimal Solutions:** Do not guarantee optimality due to their greedy nature and inability to fully explore the state space.
*   **Difficult to Handle Complex Constraints:** Struggle with intricate network constraints and interdependencies between units.
*   **Sensitivity to Priority Ranking:** The quality of the solution heavily depends on the chosen priority metric.

---

#### 2.2. Security Constrained Unit Commitment (SCUC)

**Definition:** Security Constrained Unit Commitment (SCUC) extends the basic unit commitment problem by explicitly incorporating power system security constraints. This means that the UC solution must ensure that the system remains operational and stable even under credible contingency scenarios (e.g., the outage of a transmission line or a generator).

**Importance of Security in UC:**

*   **Preventing Cascading Failures:** Without considering security, a UC schedule might lead to overloaded transmission lines or voltage instability after a single component failure, potentially triggering cascading outages.
*   **Maintaining System Stability:** SCUC ensures that sufficient generation and transmission capacity is available to handle disturbances.
*   **Reliability:** Directly enhances the overall reliability of the power system.

**Key Security Constraints:**

1.  **Thermal Limit Constraints:** Transmission lines and transformers have a maximum power carrying capacity. After a contingency, the power flow on these components must not exceed their limits.
2.  **Voltage Limit Constraints:** Bus voltages must remain within acceptable ranges.
3.  **Stability Constraints:** Dynamic stability might need to be considered for critical events, although this is more complex and often handled by other operational tools.

**Formulating SCUC:**

SCUC involves solving a UC problem that considers both the **base case** (normal operation) and **contingency cases**.

*   **Two-Stage Approach:** A common way to formulate SCUC is a two-stage approach:
    *   **Stage 1 (Commitment Stage):** Decide which units to commit or decommit. This stage aims to minimize operating costs.
    *   **Stage 2 (Dispatch Stage):** Once the commitment decisions are made, the economic dispatch problem is solved for the base case and all considered contingency cases, ensuring all security constraints are met.

*   **Mathematical Formulation (Conceptual):**

    Let:
    *   $x_i$ = binary variable, 1 if unit $i$ is committed, 0 otherwise.
    *   $y_{it}$ = binary variable, 1 if unit $i$ is ON at time $t$, 0 otherwise.
    *   $P_{it}$ = power output of unit $i$ at time $t$.
    *   $L_t$ = load demand at time $t$.
    *   $S_{i,on}$ = startup cost of unit $i$.
    *   $C_i(P_{it})$ = fuel cost of unit $i$ at power $P_{it}$.
    *   $N$ = number of units.
    *   $T$ = number of hours.
    *   $\Omega$ = set of credible contingency events.
    *   $P_{fk}$ = power flow on line $f$ in contingency $k$.
    *   $P_{f,max}$ = thermal limit of line $f$.

    **Objective Function:** Minimize total operating cost over the scheduling horizon.
    $$ \text{Minimize} \sum_{t=1}^{T} \sum_{i=1}^{N} [C_i(P_{it}) \cdot y_{it} + S_{i,on} \cdot \text{startup_logic}(y_{i,t-1}, y_{it})] $$
    *   (Startup logic is a representation of when a unit is started, involving state transitions).

    **Constraints:**

    1.  **Load Balance:**
        $$ \sum_{i=1}^{N} P_{it} = L_t \quad \forall t $$

    2.  **Unit Capacity:**
        $$ P_{i,min} \cdot y_{it} \le P_{it} \le P_{i,max} \cdot y_{it} \quad \forall i, t $$
        *   $P_{i,min}$ and $P_{i,max}$ are the minimum and maximum power outputs of unit $i$.

    3.  **Minimum Up/Down Times:** These are typically modeled using state variables and logical constraints.

    4.  **Spinning Reserve:**
        $$ \sum_{i=1}^{N} (P_{i,max} - P_{it}) \cdot y_{it} \ge R_t \quad \forall t $$
        *   $R_t$ is the required spinning reserve at time $t$.

    5.  **Security Constraints (for each contingency $k \in \Omega$):**
        *   **Thermal Limits:** After a contingency (e.g., outage of line $f_c$), the power flow on any line $f$ must not exceed its limit:
            $$ P_{fk}(P_{i,t}' \text{ for all } i) \le P_{f,max} \quad \forall f, k, t $$
            *   Here, $P_{i,t}'$ represents the dispatch of unit $i$ under contingency $k$, which might need to be adjusted from $P_{it}$ to alleviate overloads. This implies that the dispatch for the contingency case must be feasible and secure.

**Methods for Solving SCUC:**

*   **Lagrangian Relaxation:** A widely used technique for solving large-scale UC problems, including SCUC. It relaxes coupling constraints (like transmission limits) by introducing Lagrange multipliers and solves a series of smaller, independent subproblems. The multipliers are updated iteratively.
*   **Integer Programming (IP) / Mixed-Integer Linear Programming (MILP):** SCUC can be formulated as a MILP problem and solved using commercial solvers like Gurobi or CPLEX. This approach can guarantee optimality but can be computationally intensive for large systems.
*   **Heuristics with Security Checks:** Priority-list methods can be adapted by performing security checks after each commitment decision. If a decision violates security constraints under a contingency, the decision is reversed or modified. This is often combined with techniques like "remedial action" (e.g., shedding load, adjusting generation dispatch).

**Textbook References:**

*   **Wood & Wollenberg (3rd ed., 2023):** Chapter 3 discusses SCUC extensively, covering the formulation and solution methods like Lagrangian relaxation and their limitations in handling detailed network constraints. They highlight the increasing importance of SCUC with deregulation and the need for more sophisticated tools.
*   **Grainger & Stevenson (1994):** While older, this text provides foundational concepts in power system analysis that underpin the understanding of security constraints (e.g., power flow analysis in Chapter 10 for contingency evaluation).

**Important Points to Remember about SCUC:**

*   **Computational Complexity:** SCUC is significantly more complex than unconstrained UC. The number of constraints grows rapidly with the number of contingencies considered.
*   **Contingency Screening:** Due to computational limits, not all possible contingencies can be explicitly included. A "credible contingency screening" process is essential to identify the most critical events that need to be managed.
*   **Balancing Cost and Security:** SCUC aims to find the lowest cost schedule that *also* maintains security. This often leads to higher operating costs compared to unconstrained UC, as less economical units may need to be kept online to provide flexibility for contingencies.
*   **Dynamic SCUC:** More advanced forms consider dynamic security aspects, which are even more computationally demanding.

---

### 3. Aligning with Course Outcomes

This unit directly contributes to several course outcomes:

*   **CO1: Analyse various methods of generation scheduling. (K4)**
    *   Priority-list methods are analyzed for their approach to scheduling.
    *   SCUC is analyzed as a security-aware scheduling method.
    *   This unit provides the foundation for comparing different scheduling approaches.

*   **CO2: Formulate hydro-thermal scheduling problems. (K5)**
    *   While this unit focuses on thermal unit commitment, the principles of optimizing generation to meet demand while respecting constraints are fundamental to hydro-thermal scheduling. The concept of minimizing operating costs and managing operational limits is transferable.

*   **CO3: Evaluate power exchange in interconnected power systems. (K5)**
    *   SCUC inherently considers the impact of unit commitment on the network, which is crucial for understanding power flow and potential bottlenecks in interconnected systems. Ensuring security under contingencies is vital for reliable power exchange.

*   **CO4: Analyse security issues in power system networks. (K3)**
    *   SCUC is the direct application of analyzing and mitigating security issues within the unit commitment framework. Understanding thermal limits, contingency analysis, and remedial actions are core to this outcome.

*   **CO5: Analyse various state estimation methods. (K4)**
    *   Although not directly covered in this introductory unit, understanding the need for accurate system state (loads, flows, voltages) is paramount for SCUC. State estimation provides this crucial input, and its analysis informs the robustness of SCUC solutions. (This connection will be made clearer in later modules).

---

### 4. Practice Questions and Exercises

**Question 1:**
Explain the core concept of a "priority list" in unit commitment. What are the common criteria used to create such a list?

**Answer:**
A priority list ranks generating units based on their economic merit or efficiency. The core concept is to prioritize starting up the most cost-effective units first and keeping the least cost-effective units online for the shortest possible duration. Common criteria include:
*   **Incremental Cost:** Units with lower incremental (marginal) fuel costs are prioritized.
*   **Efficiency:** More efficient units (those with lower heat rates) are prioritized.
*   **Equivalent Full Load Hours (EFLH) / Equivalent Operating Hours (EOH):** Metrics that attempt to capture the overall economic benefit of a unit considering its operating schedule and efficiency. Lower EFLH indicates higher priority.
*   **Startup Cost:** Combined with incremental cost, to decide when it's economical to start a unit for short durations.

**Question 2:**
What is the primary difference between standard Unit Commitment and Security Constrained Unit Commitment (SCUC)? Why is SCUC important in modern power systems?

**Answer:**
The primary difference is that SCUC explicitly incorporates power system security constraints, such as thermal limits of transmission lines and voltage limits, into the unit commitment decision-making process. Standard Unit Commitment typically only considers load balance, reserve requirements, and unit operational constraints (minimum up/down times, ramp rates).

SCUC is important in modern power systems for the following reasons:
*   **Reliability:** It ensures the system remains stable and operational even after credible component outages (contingencies), preventing cascading failures.
*   **Network Congestion Management:** It helps avoid transmission overloads that can arise from commitment decisions.
*   **Economic Dispatch Support:** It provides a secure foundation for economic dispatch, ensuring that the dispatchable units can operate without violating system limits under normal and contingency conditions.
*   **Regulatory Compliance:** Many grid operators mandate security-constrained scheduling.

**Question 3:**
Consider a small system with two thermal units and the following data:

| Unit | Min Capacity (MW) | Max Capacity (MW) | Incremental Cost ($/MWh) | Startup Cost ($) | Min Up Time (h) | Min Down Time (h) |
| :--- | :---------------- | :---------------- | :----------------------- | :--------------- | :-------------- | :---------------- |
| 1    | 50                | 200               | 20                       | 200              | 2               | 4                 |
| 2    | 100               | 300               | 25                       | 300              | 3               | 6                 |

Assume the system needs to supply 250 MW for 3 hours, and then 350 MW for the next 3 hours. No initial conditions are given (assume all units are initially OFF and cold).

**(a)** Using a simple priority-list approach (based on incremental cost only), determine the unit commitment schedule for the first 6 hours. Assume startup costs and temporal constraints are ignored for this simplified part.
**(b)** Discuss how startup costs and minimum up/down times would affect the schedule determined in (a).

**Answer:**

**(a) Simplified Priority-List (Incremental Cost Only):**

*   **Priority:** Unit 1 ( $20/MWh) < Unit 2 ( $25/MWh). Unit 1 has higher priority.

*   **Hours 1-3 (Load = 250 MW):**
    *   **Hour 1:** Need 250 MW.
        *   Unit 1 ON: Max 200 MW.
        *   Remaining load: 250 MW - 200 MW = 50 MW.
        *   Unit 2 ON: Need 50 MW. Unit 2's min capacity is 100 MW. This is a problem for a purely greedy approach. If we strictly follow min capacity, we would need both units. However, in simple UC, we often assume units can operate at their minimum capacity if needed. Let's assume for this simple case, we can dispatch at minimum.
        *   **Decision for Hour 1:** Unit 1 ON (200 MW), Unit 2 ON (50 MW). Total = 250 MW. Cost = (200 * 20) + (50 * 25) = 4000 + 1250 = $5250.
    *   **Hour 2:** Need 250 MW. Both units are already ON.
        *   **Decision for Hour 2:** Unit 1 ON (200 MW), Unit 2 ON (50 MW). Total = 250 MW. Cost = $5250.
    *   **Hour 3:** Need 250 MW. Both units are already ON.
        *   **Decision for Hour 3:** Unit 1 ON (200 MW), Unit 2 ON (50 MW). Total = 250 MW. Cost = $5250.

*   **Hours 4-6 (Load = 350 MW):**
    *   **Hour 4:** Need 350 MW. Both units are already ON.
        *   Unit 1 Max = 200 MW.
        *   Unit 2 Max = 300 MW.
        *   To meet 350 MW, we need to increase Unit 2's output.
        *   **Decision for Hour 4:** Unit 1 ON (200 MW), Unit 2 ON (150 MW). Total = 350 MW. Cost = (200 * 20) + (150 * 25) = 4000 + 3750 = $7750.
    *   **Hour 5:** Need 350 MW. Both units are ON.
        *   **Decision for Hour 5:** Unit 1 ON (200 MW), Unit 2 ON (150 MW). Total = 350 MW. Cost = $7750.
    *   **Hour 6:** Need 350 MW. Both units are ON.
        *   **Decision for Hour 6:** Unit 1 ON (200 MW), Unit 2 ON (150 MW). Total = 350 MW. Cost = $7750.

**Simplified Schedule:**
*   Hour 1-3: Unit 1 ON, Unit 2 ON.
*   Hour 4-6: Unit 1 ON, Unit 2 ON.

**(b) Impact of Startup Costs and Temporal Constraints:**

*   **Startup Costs:** For the first 3 hours, Unit 1 would incur a $200 startup cost, and Unit 2 would incur a $300 startup cost (assuming cold start). These costs would be added to the operating costs.
*   **Minimum Up/Down Times:**
    *   Unit 1 has a minimum up time of 2 hours and minimum down time of 4 hours.
    *   Unit 2 has a minimum up time of 3 hours and minimum down time of 6 hours.
    *   **Impact on Hours 1-3:** If we committed Unit 1 in Hour 1, it must remain ON for at least 2 hours (Hours 1 and 2). If we committed Unit 2 in Hour 1, it must remain ON for at least 3 hours (Hours 1, 2, and 3).
    *   **Impact on Hours 4-6:** If we need to shut down a unit after Hour 3, we need to consider its minimum down time. For example, if Unit 2 was committed for the first 3 hours and we tried to shut it down for Hour 4, it would violate its minimum up time constraint. If it was shut down in Hour 4, it would need to remain off for at least 6 hours (Hours 4, 5, 6, 7, 8, 9) before it could be restarted.
    *   **Example Scenario:** If the load dropped significantly after hour 3, and Unit 1 was only needed for 1 hour, it could not be shut down due to its minimum up time. Similarly, if a unit was ON for hour 1 and then OFF for hour 2, it would violate its minimum down time if we tried to turn it ON again in hour 3. This often forces less economical units to remain online to satisfy these constraints.

**Question 4:**
Describe the concept of "credible contingencies" in the context of SCUC. Why is it not feasible to include all possible contingencies?

**Answer:**
Credible contingencies are a set of specific component outage scenarios that are considered to be the most likely and most severe events that could impact the power system's security. These are typically single-component failures (e.g., outage of a single transmission line, a single transformer, or a single generator).

It is not feasible to include all possible contingencies in SCUC for several reasons:
*   **Computational Burden:** The number of possible contingencies in a large power system is enormous (e.g., combinations of outages). Explicitly analyzing every single contingency would make the SCUC problem computationally intractable, requiring an unmanageable amount of time and resources.
*   **Diminishing Returns:** Many potential contingencies have very low probability or very little impact on system security. Including them would add unnecessary complexity without significantly improving security or economic outcomes.
*   **Focus on Critical Events:** System operators and planners focus on contingencies that are likely to cause significant operational problems (e.g., transmission overloads, voltage collapse, instability).

Therefore, **contingency screening** is performed to identify a representative set of "credible" contingencies that must be safeguarded against. This often involves ranking contingencies based on their likelihood and potential impact.

---

### 5. Important Points to Remember

*   **UC is a prerequisite for ED:** Unit Commitment determines *which* units are online, and Economic Dispatch determines *how much* each online unit produces to meet the load at minimum cost.
*   **Startup/Shutdown costs and temporal constraints are crucial:** Ignoring these can lead to significant economic inefficiencies and operational violations.
*   **Priority lists are heuristics:** They offer speed but sacrifice optimality.
*   **SCUC is essential for reliability:** It ensures that the generation schedule can withstand plausible disturbances.
*   **Trade-off in SCUC:** There's a trade-off between minimizing operating cost and ensuring system security. SCUC often results in higher costs than unconstrained UC.
*   **Contingency screening is vital for SCUC:** It makes the problem manageable by focusing on the most impactful events.
*   **Modern UC solvers:** Often employ advanced optimization techniques like Mixed-Integer Programming (MIP) or sophisticated Lagrangian Relaxation methods, especially for SCUC.

---
This concludes Module 1's introduction to Unit Commitment Solution Methods. The subsequent modules will build upon these foundational concepts, exploring more advanced methods and their applications in real-world power system operation.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
