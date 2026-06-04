---
title: "Economic dispatch versus unit commitment."
subject: "POWER SYSTEM OPERATION AND CONTROL"
module: "Module 1: Introduction"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200862b85456187f36855"
status: "completed"
scrapedAt: "2026-05-23T16:39:07.952Z"
---
# Power System Operation and Control: Module 1: Introduction

## Topic: Economic Dispatch Versus Unit Commitment

---

### 1. Introduction to Power System Operation and Control

Power systems are complex networks responsible for generating, transmitting, and distributing electrical energy reliably and economically. The efficient and secure operation of these systems is paramount. This module introduces fundamental concepts that underpin how power systems are managed on a minute-to-minute basis, focusing on two core problems: Economic Dispatch (ED) and Unit Commitment (UC).

---

### 2. Key Concepts and Definitions

#### 2.1. Load Forecasting

*   **Definition:** The process of predicting the future electrical demand on the power system over various time horizons (short-term, medium-term, long-term).
*   **Importance:** Accurate load forecasting is crucial for planning generation, dispatching units, and ensuring system reliability. Errors can lead to either over-generation (wasting fuel and resources) or under-generation (leading to blackouts).
*   **Time Horizons:**
    *   **Very Short-Term (minutes to hours):** Used for real-time dispatch and load following.
    *   **Short-Term (hours to days/weeks):** Used for unit commitment and scheduling.
    *   **Medium-Term (weeks to months):** Used for maintenance scheduling and fuel procurement.
    *   **Long-Term (months to years):** Used for generation and transmission expansion planning.
*   **Factors Influencing Load:** Time of day, day of the week, season, weather conditions (temperature, humidity, cloud cover), economic activity, special events.
*   **Methods:** Statistical methods (ARIMA, exponential smoothing), artificial intelligence (neural networks, fuzzy logic), regression analysis.
*   **Reference:** *Power Generation Operation and Control* by Wood & Wollenberg (Chapter 3: Load Forecasting) provides detailed discussions on various forecasting techniques.

#### 2.2. Generation Scheduling

*   **Definition:** The process of deciding which generating units to bring online, in what order, and at what output level to meet the predicted system load while minimizing operating costs and adhering to system constraints.
*   **Core Objective:** To reliably and economically supply the required power.
*   **Relationship to Load Forecasting:** Generation scheduling is directly dependent on accurate load forecasts.

---

### 3. Economic Dispatch (ED)

#### 3.1. Definition

*   **Economic Dispatch:** The process of determining the optimal real power output of online generating units to meet the current system load at the minimum fuel cost, assuming that all committed units are available and operational.
*   **Objective:** Minimize total fuel cost.
*   **Constraint:** The sum of the real power outputs of all online units must equal the total system load plus transmission losses.

#### 3.2. Cost Function

*   **Cost of Generation:** Typically represented by a quadratic or cubic function of the real power output ($P_i$) for each generator $i$.
    *   $C_i(P_i) = a_i P_i^2 + b_i P_i + c_i$
    *   Where $a_i, b_i, c_i$ are cost coefficients specific to each generator.
*   **Total System Cost:** The sum of the costs of all online generators.
    *   $C_{total} = \sum_{i \in Online} C_i(P_i)$

#### 3.3. Key Principles and Methodology

*   **Equal Incremental Cost Criterion:** To achieve minimum cost, the incremental cost of generating power from each online unit must be equal.
    *   **Incremental Cost ($IC_i$):** The rate of change of the cost function with respect to real power output.
        *   $IC_i(P_i) = \frac{dC_i(P_i)}{dP_i} = 2a_i P_i + b_i$
    *   **Equality Condition:** $IC_1(P_1) = IC_2(P_2) = \dots = IC_n(P_n) = \lambda$
    *   **$\lambda$ (Lagrange Multiplier):** Represents the marginal cost of supplying an additional unit of power to the system. It is the cost of generating the last megawatt.

*   **Ignoring Losses (Simplified ED):** In a simplified scenario without considering transmission losses, the ED problem is to find $P_i$ for all online units such that:
    *   $\sum_{i} P_i = P_{load}$
    *   $IC_i(P_i) = \lambda$ for all online $i$.
    *   $P_{min,i} \le P_i \le P_{max,i}$ (Generator capacity limits)

*   **Considering Losses (Loss-Aware ED):** When transmission losses are included, the equality constraint becomes:
    *   $\sum_{i} P_i = P_{load} + P_{loss}$
    *   Where $P_{loss}$ is a function of the power outputs of all generators, often represented using a B-matrix (B-coefficients) for simplified calculation (B-matrix method).
        *   $P_{loss} = \sum_{i} \sum_{j} P_i B_{ij} P_j + \sum_{i} P_i B_{i0} + B_{00}$
    *   The equality condition for loss-aware ED is:
        *   $IC_i(P_i) = \lambda (1 - \frac{\partial P_{loss}}{\partial P_i})$
    *   The term $\frac{\partial P_{loss}}{\partial P_i}$ is the penalty factor for generator $i$. It indicates how much the total system losses increase for a unit increase in the output of generator $i$.

#### 3.4. Examples

**Example 1 (Simplified ED):**
Two generators are available with the following cost functions:
*   Generator 1: $C_1(P_1) = 50 + 2P_1 + 0.05P_1^2$
*   Generator 2: $C_2(P_2) = 70 + 3P_2 + 0.04P_2^2$
Generator capacities: $20 \le P_1 \le 100$ MW, $30 \le P_2 \le 120$ MW.
Total system load = 200 MW.

**Solution:**
1.  **Calculate Incremental Costs:**
    *   $IC_1(P_1) = 2 + 0.10P_1$
    *   $IC_2(P_2) = 3 + 0.08P_2$
2.  **Set Incremental Costs Equal:** $IC_1 = IC_2 = \lambda$
    *   $2 + 0.10P_1 = 3 + 0.08P_2$
    *   $0.10P_1 - 0.08P_2 = 1$
3.  **Use Load Constraint:** $P_1 + P_2 = 200$
4.  **Solve the System of Equations:**
    *   From $P_1 + P_2 = 200$, we get $P_1 = 200 - P_2$.
    *   Substitute into the incremental cost equality:
        *   $0.10(200 - P_2) - 0.08P_2 = 1$
        *   $20 - 0.10P_2 - 0.08P_2 = 1$
        *   $20 - 0.18P_2 = 1$
        *   $0.18P_2 = 19$
        *   $P_2 = \frac{19}{0.18} \approx 105.56$ MW
    *   Calculate $P_1$: $P_1 = 200 - 105.56 \approx 94.44$ MW
5.  **Check Capacity Limits:**
    *   $20 \le 94.44 \le 100$ (OK for $P_1$)
    *   $30 \le 105.56 \le 120$ (OK for $P_2$)
6.  **Economic Dispatch Solution:** $P_1 = 94.44$ MW, $P_2 = 105.56$ MW.
7.  **Calculate $\lambda$:**
    *   $IC_1(94.44) = 2 + 0.10(94.44) = 2 + 9.444 = 11.444$
    *   $IC_2(105.56) = 3 + 0.08(105.56) = 3 + 8.445 = 11.445$
    *   $\lambda \approx 11.44$ $/MWh.

**Important Note:** The iterative method is often used in practice for more complex systems or when considering losses, where the solution is refined until convergence.

#### 3.5. ED and Course Outcomes

*   **CO1 (Generation Scheduling):** ED is a crucial part of generation scheduling, determining how to operate already committed units efficiently for a given load.
*   **Reference:** *Power Generation Operation and Control* by Wood & Wollenberg (Chapter 5: Economic Dispatch) covers these principles thoroughly.

---

### 4. Unit Commitment (UC)

#### 4.1. Definition

*   **Unit Commitment:** The problem of deciding which generating units should be started up or shut down over a given time horizon (e.g., 24 hours) to meet the forecasted load and reserve requirements at the minimum total cost.
*   **Objective:** Minimize the total cost over the scheduling horizon, which includes:
    *   Fuel costs (for online units).
    *   Start-up costs (when a unit is switched from off to on).
    *   Shut-down costs (less common, usually assumed negligible).
    *   No-load costs (fixed costs incurred when a unit is online but not generating).
*   **Key Challenge:** UC is a mixed-integer programming problem because the decision to commit a unit (on/off) is a discrete variable, while the output of online units is a continuous variable.

#### 4.2. Key Considerations and Constraints

*   **Load Demand:** Must meet the forecasted load at each time step.
*   **Minimum Up/Down Times:** Once a unit is started, it must remain online for a minimum period (minimum up-time). Similarly, after being shut down, it must remain offline for a minimum period (minimum down-time). These are due to thermal stresses and operational limitations of turbines.
*   **Ramping Limits:** Generators cannot change their output instantaneously. They have limits on how quickly they can increase or decrease their power output (ramp-up and ramp-down rates).
*   **Start-up and Shut-down Costs:** These costs depend on the prior state of the unit and how long it has been offline.
*   **Reserve Requirements:** A certain amount of spinning reserve (generating capacity that can be ramped up quickly) must be maintained to cope with unexpected increases in load or loss of a generator.
*   **Transmission Constraints (AC Load Flow or DC approximations):** In more advanced UC, transmission line limits and voltage stability might also be considered.

#### 4.3. Methodology

UC problems are typically solved using optimization techniques. Common methods include:

*   **Priority List Method:** A heuristic approach where units are ranked based on their incremental cost. Units are committed sequentially until the load and reserve requirements are met. While simple, it may not yield the true minimum cost.
*   **Dynamic Programming (DP):** A powerful technique that breaks down the problem into smaller, overlapping subproblems. However, DP can suffer from the "curse of dimensionality" as the state space grows exponentially with the number of units and time steps.
*   **Mixed-Integer Programming (MIP):** Formulating the UC problem as a mathematical optimization problem with both integer and continuous variables. Solvers like Gurobi, CPLEX, or commercial software packages are used. This is the most common and effective method for large-scale UC.
*   **Lagrangian Relaxation:** An iterative technique that relaxes some of the constraints (like system constraints) by introducing Lagrange multipliers. The relaxed problem is easier to solve, and the multipliers are updated iteratively to find a near-optimal solution.

#### 4.4. Example (Conceptual)

Consider a 24-hour scheduling horizon.
*   **Load Forecast:** A list of expected MW demand for each hour.
*   **Generating Units:** Available units with their capacities, minimum up/down times, start-up costs, no-load costs, and fuel cost curves.
*   **Problem:** For each hour, decide which units to turn on/off. If a unit is on, use ED to determine its output. Minimize the sum of fuel costs, start-up costs, and no-load costs over 24 hours.

**Example Scenario:**
Suppose for hour $t$, the load is 500 MW.
*   Unit A (100 MW capacity) is on from hour $t-1$.
*   Unit B (200 MW capacity) is off from hour $t-1$.
*   Unit C (300 MW capacity) is off from hour $t-1$.

**UC Decision for Hour $t$:**
1.  **Meet Load:** Need 500 MW.
2.  **Unit A:** Already on. Can output up to 100 MW.
3.  **Unit B:** Minimum down-time elapsed. Can be started. Has a start-up cost.
4.  **Unit C:** Minimum down-time elapsed. Can be started. Has a start-up cost.

The UC algorithm would evaluate combinations:
*   **Option 1:** Start Unit B, use Unit A and Unit B to meet load. (e.g., A=100, B=400 if possible, or B=200, A=100 and another unit)
*   **Option 2:** Start Unit C, use Unit A and Unit C.
*   **Option 3:** Start both Unit B and Unit C.
*   **Option 4:** Start Unit B, use Unit A and Unit B, and also start Unit C (if needed for reserves).

The UC algorithm would then calculate the total cost for each viable option, considering start-up costs and fuel costs (determined by ED for the online units), and select the option with the minimum cost, while satisfying minimum up/down times and reserve requirements.

#### 4.5. UC and Course Outcomes

*   **CO1 (Generation Scheduling):** Unit Commitment is the overarching process of generation scheduling. It determines the commitment status of units for the entire period, and then ED is applied hourly or sub-hourly to determine their outputs.
*   **Reference:** *Power Generation Operation and Control* by Wood & Wollenberg (Chapter 6: Unit Commitment) provides in-depth coverage of UC problems, methods, and constraints.

---

### 5. Economic Dispatch Versus Unit Commitment: The Relationship

*   **Hierarchical Relationship:** UC and ED are sequential processes in power system operation.
    1.  **Load Forecasting:** Predicts future demand.
    2.  **Unit Commitment:** Decides which generators to turn on/off for a planning horizon (e.g., 24 hours) to meet forecasted load and reserve requirements at minimum cost, respecting operational constraints (min up/down times, etc.).
    3.  **Economic Dispatch:** For each hour (or sub-interval) determined by UC, ED finds the optimal real power output of the *online* units to meet that hour's load (plus losses) at minimum cost, using the equal incremental cost criterion.

*   **Interdependence:** The output of the UC problem (which units are online) becomes the input for the ED problem. The cost of operating a particular set of units for an hour, calculated using ED, is a component of the total cost that the UC problem aims to minimize.

*   **Time Horizon:**
    *   **UC:** Deals with decisions over a longer time horizon (hours, days).
    *   **ED:** Deals with decisions for a specific point in time or a very short interval.

*   **Complexity:**
    *   **UC:** A mixed-integer optimization problem, generally more complex to solve due to the discrete on/off decisions and numerous constraints.
    *   **ED:** Typically a continuous optimization problem (unless losses are explicitly handled via non-convex formulations, but often linearized or solved iteratively), simpler to solve than UC.

---

### 6. Practice Questions and Answers

**Question 1:**
Which of the following describes the primary objective of Economic Dispatch?
A) Minimizing start-up costs of generating units.
B) Determining the optimal commitment status of generating units over a 24-hour period.
C) Ensuring sufficient spinning reserve to meet unexpected load changes.
D) Minimizing the fuel cost of operating already committed generating units to meet the current load.

**Answer:** D
*   **Explanation:** Economic Dispatch focuses on optimizing the output of units that are already online to meet the instantaneous demand at the lowest fuel cost. Option B describes Unit Commitment. Options A and C are considerations within Unit Commitment, not the primary objective of ED itself.

**Question 2:**
A generator has a cost function $C(P) = 100 + 2P + 0.02P^2$. What is its incremental cost at an output of 50 MW?

**Answer:**
*   **Solution:**
    1.  The incremental cost function is the derivative of the cost function with respect to power output:
        $IC(P) = \frac{dC(P)}{dP} = 2 + 0.04P$
    2.  Substitute $P = 50$ MW:
        $IC(50) = 2 + 0.04(50) = 2 + 2 = 4$ $/MWh.

**Question 3:**
Which of the following constraints is typically *not* considered in a basic Economic Dispatch problem but is critical for Unit Commitment?
A) Generator capacity limits ($P_{min}, P_{max}$).
B) Equality of incremental costs of all online units.
C) Minimum up-time and minimum down-time of generating units.
D) System load must be met.

**Answer:** C
*   **Explanation:** Minimum up-time and down-time are operational constraints that dictate how long a unit must remain online or offline after a change in status. These are core considerations for Unit Commitment, which schedules unit start-ups and shut-downs over time. Basic ED assumes units are already committed and operational, and its primary focus is on their output levels based on economic criteria and capacity limits.

**Question 4 (Conceptual):**
Imagine a system with two generators. Generator A is cheaper to run but has a longer minimum up-time. Generator B is more expensive but can be started and stopped more frequently. If the load is expected to drop significantly in the next hour, which problem (ED or UC) would be primarily responsible for deciding whether to shut down Generator A or keep it online despite the reduced load, considering its minimum up-time constraint? Explain why.

**Answer:**
*   **Explanation:** This decision falls primarily under **Unit Commitment (UC)**.
    *   **Reasoning:** The decision to shut down Generator A involves its operational status (on/off) and its minimum up-time constraint. UC is responsible for scheduling these state changes over a period to minimize overall costs. While Economic Dispatch (ED) would determine how much power Generator A produces if it remains online, the decision *whether* it should be online or offline, given its start-up/shut-down history and constraints, is a UC problem. The cost of keeping A online (no-load cost + fuel cost for its output) versus the cost of shutting it down (potential future start-up cost if load rises again) and the savings from not using B (if A is cheaper) are all factors evaluated by UC.

---

### 7. Important Points to Remember

*   **ED:** Optimizes output of *online* units to meet *current* load at minimum fuel cost. Key principle: equal incremental costs ($\lambda$).
*   **UC:** Decides *which* units to commit (on/off) over a *time horizon* to meet *forecasted* load and reserves at minimum total cost (fuel + start-up + no-load).
*   **Relationship:** UC is a higher-level scheduling problem that determines the set of available units for the ED problem in each time interval.
*   **Constraints:** Both problems have capacity limits. UC adds minimum up/down times, start-up costs, and reserve requirements, making it a mixed-integer problem.
*   **Losses:** Basic ED often ignores losses. Loss-aware ED is more accurate but requires calculating penalty factors or using B-coefficients.
*   **Complexity:** UC is generally more complex than ED due to its combinatorial nature.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 8. Textual References and Alignment with Course Outcomes

*   **CO1: Analyse various methods of generation scheduling.**
    *   This entire topic directly addresses CO1. Unit Commitment is the primary method of generation scheduling. Economic Dispatch is the method for optimizing the operation of scheduled units.
    *   **References:**
        *   Wood & Wollenberg (Ch 5: ED, Ch 6: UC) provide the foundational methods and analysis.
        *   Grainger & Stevenson (Ch 10: Economic Dispatch of Generators) offer related concepts in power system analysis.

*   **Textbook Integration:**
    *   **Wood & Wollenberg (3rd ed, 2023):** This is the primary resource. Its chapters on Economic Dispatch and Unit Commitment will provide detailed mathematical formulations, solution algorithms (Lagrangian Relaxation, Dynamic Programming for UC, iterative methods for ED), and practical examples. The 3rd edition will likely include updated information on handling modern power systems, including renewables and market mechanisms which influence these decisions.
    *   **Grainger & Stevenson (1994):** While older, it offers classic explanations of ED principles and the equal incremental cost criterion. It might provide a good foundation for understanding the basic physics and economics.
    *   **Abur & Gomez (2004):** While focused on State Estimation, understanding system states (like generator outputs) accurately is a prerequisite for both ED and UC. State estimation ensures the data fed into these optimization problems is reliable.

---