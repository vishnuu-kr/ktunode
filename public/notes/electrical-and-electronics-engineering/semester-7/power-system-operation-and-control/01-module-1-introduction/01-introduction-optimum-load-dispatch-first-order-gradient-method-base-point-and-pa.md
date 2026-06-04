---
title: "Introduction- Optimum load dispatch - First order gradient method base point and participation factors."
subject: "POWER SYSTEM OPERATION AND CONTROL"
module: "Module 1: Introduction"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200862b85456187f36854"
status: "completed"
scrapedAt: "2026-05-23T16:39:06.573Z"
---
# Power System Operation and Control

## Module 1: Introduction

### Topic: Introduction to Optimum Load Dispatch - First Order Gradient Method, Base Point, and Participation Factors

---

### 1. Introduction to Optimum Load Dispatch (OLD)

**Key Concepts:**

*   **Objective:** The primary goal of Optimum Load Dispatch is to determine the optimal generation output of each generating unit in a power system to meet the total system load at the minimum possible cost while satisfying various operational constraints.
*   **Cost of Generation:** The cost of generating electricity from a particular unit is typically a function of its power output. This cost includes fuel costs, maintenance, and operational expenses. It is usually represented by a cost function.
*   **Economic Dispatch Problem:** A simplified version of OLD where the objective is to minimize the total fuel cost for a given system load, considering only the cost characteristics of the generators.
*   **System Load:** The total demand for electricity from all consumers in the power system at a given time. This load varies dynamically.
*   **Generating Units:** Power plants that produce electricity. Each unit has its own unique characteristics, including its minimum and maximum generation limits, ramp rates, and cost of production.

**Importance of OLD:**

*   **Cost Minimization:** Reduces operational expenses, leading to significant savings in the overall cost of electricity generation.
*   **Efficiency:** Ensures that generators are operated at their most efficient points, maximizing the utilization of available resources.
*   **Environmental Considerations:** By minimizing fuel consumption, OLD indirectly contributes to reducing emissions.
*   **Reliability and Security:** While not the primary focus of basic OLD, optimal dispatch is a prerequisite for maintaining system stability and security by ensuring adequate reserve capacity.

**Reference:**

*   **Wood & Wollenberg (Chapter 2):** This textbook provides a foundational understanding of economic dispatch and its role in power system operation, detailing the cost functions and basic principles.

**Alignment with Course Outcomes:**

*   **CO1 (Analyze various methods of generation scheduling):** This topic is the bedrock of generation scheduling. Understanding OLD is crucial for any subsequent scheduling techniques. (K4)

---

### 2. First-Order Gradient Method (Incremental Cost Method)

**Key Concepts:**

*   **Incremental Cost (IC):** The additional cost incurred to produce one additional megawatt (MW) of power. It is the derivative of the cost function with respect to the power output: $IC = \frac{dF}{dP}$, where $F$ is the cost function and $P$ is the power output.
*   **Marginal Cost:** Another term for incremental cost.
*   **Equimarginal Principle:** The core principle of economic dispatch. To minimize total cost, the incremental cost of generation from all online units should be equal. That is, $IC_1 = IC_2 = ... = IC_n = \lambda$, where $\lambda$ is the **system lambda** or **marginal cost of the system**.
*   **Lagrangian Multiplier:** In the context of optimization, $\lambda$ is the Lagrange multiplier associated with the system load constraint. It represents the cost of generating the last MW of power for the entire system.

**How it Works:**

1.  **Define Cost Functions:** For each generating unit, define its cost function $F_i(P_i)$, where $P_i$ is the power output of unit $i$. Common cost functions are quadratic: $F_i(P_i) = a_i P_i^2 + b_i P_i + c_i$.
2.  **Calculate Incremental Costs:** Compute the incremental cost for each unit: $IC_i(P_i) = \frac{dF_i}{dP_i} = 2a_i P_i + b_i$.
3.  **Set Incremental Costs Equal:** The condition for optimal dispatch is $IC_1(P_1) = IC_2(P_2) = ... = IC_n(P_n) = \lambda$.
4.  **Satisfy System Load Constraint:** The sum of the power outputs from all online units must equal the total system load: $\sum_{i=1}^{n} P_i = P_{Load}$.
5.  **Iterative Solution:**
    *   Assume an initial value for $\lambda$.
    *   For each unit $i$, calculate its power output $P_i$ by solving $IC_i(P_i) = \lambda$. This might require finding the root of the equation, considering unit constraints.
    *   Sum the calculated $P_i$ values: $\sum P_i$.
    *   If $\sum P_i > P_{Load}$, increase $\lambda$ (to reduce generation).
    *   If $\sum P_i < P_{Load}$, decrease $\lambda$ (to increase generation).
    *   Repeat until $\sum P_i \approx P_{Load}$.

**Handling Unit Constraints:**

*   **Minimum and Maximum Generation Limits:** If solving $IC_i(P_i) = \lambda$ yields a $P_i$ outside the unit's operating limits ($P_{i,min} \le P_i \le P_{i,max}$), then the unit is operated at its limit.
    *   If $P_i < P_{i,min}$, set $P_i = P_{i,min}$. The $IC_i(P_{i,min})$ then becomes a lower bound for $\lambda$.
    *   If $P_i > P_{i,max}$, set $P_i = P_{i,max}$. The $IC_i(P_{i,max})$ then becomes an upper bound for $\lambda$.
*   **Feasible $\lambda$ Range:** The system lambda must be within the range of incremental costs of the online units.

**Example:**

Consider two units with cost functions:
*   Unit 1: $F_1(P_1) = 0.01 P_1^2 + 10 P_1 + 100$
*   Unit 2: $F_2(P_2) = 0.015 P_2^2 + 12 P_2 + 80$
Total Load $P_{Load} = 300$ MW.
Operating limits: Unit 1: [50 MW, 200 MW], Unit 2: [80 MW, 180 MW]

**Solution:**

1.  **Incremental Costs:**
    *   $IC_1(P_1) = 0.02 P_1 + 10$
    *   $IC_2(P_2) = 0.03 P_2 + 12$

2.  **Equimarginal Principle:** $IC_1(P_1) = IC_2(P_2) = \lambda$
    *   $0.02 P_1 + 10 = \lambda \implies P_1 = \frac{\lambda - 10}{0.02}$
    *   $0.03 P_2 + 12 = \lambda \implies P_2 = \frac{\lambda - 12}{0.03}$

3.  **System Load Constraint:** $P_1 + P_2 = 300$
    *   $\frac{\lambda - 10}{0.02} + \frac{\lambda - 12}{0.03} = 300$
    *   $0.03(\lambda - 10) + 0.02(\lambda - 12) = 300 \times 0.02 \times 0.03$
    *   $0.03\lambda - 0.3 + 0.02\lambda - 0.24 = 0.18$
    *   $0.05\lambda - 0.54 = 0.18$
    *   $0.05\lambda = 0.72$
    *   $\lambda = \frac{0.72}{0.05} = 14.4$

4.  **Calculate Power Outputs:**
    *   $P_1 = \frac{14.4 - 10}{0.02} = \frac{4.4}{0.02} = 220$ MW
    *   $P_2 = \frac{14.4 - 12}{0.03} = \frac{2.4}{0.03} = 80$ MW

5.  **Check Constraints:**
    *   Unit 1: $P_1 = 220$ MW. This exceeds its limit of 200 MW. So, Unit 1 will operate at its maximum, $P_1 = 200$ MW.
    *   Unit 2: $P_2 = 80$ MW. This is within its limits.

6.  **Re-dispatch with Unit 1 at Limit:** Since Unit 1 is at its maximum, $P_1 = 200$ MW.
    *   The new system load is $P_{Load} - P_1 = 300 - 200 = 100$ MW for Unit 2.
    *   Now, Unit 2 must supply 100 MW.
    *   Check if Unit 2 can supply this and if the incremental cost is feasible.
    *   $IC_1(200) = 0.02 \times 200 + 10 = 4 + 10 = 14$.
    *   For Unit 2 to supply 100 MW: $IC_2(100) = 0.03 \times 100 + 12 = 3 + 12 = 15$.
    *   Since $IC_2(100) > IC_1(200)$, this indicates that Unit 1 should have been generating more if possible, or Unit 2 is being asked to generate at a higher incremental cost than Unit 1's marginal cost at its limit.

7.  **Iterative Re-evaluation:**
    *   We found $\lambda = 14.4$.
    *   Unit 1 limit is 200 MW, $IC_1(200) = 14$. Since $14.4 > 14$, Unit 1 would ideally want to generate more. Because it's capped at 200 MW, its marginal contribution effectively stops at $\lambda = 14$.
    *   Unit 2 limit is 180 MW, $IC_2(180) = 0.03 \times 180 + 12 = 5.4 + 12 = 17.4$.
    *   The achievable $\lambda$ must be between $IC_{min}$ and $IC_{max}$ of available units.
    *   Since Unit 1 is at its max (200 MW) with $IC_1(200) = 14$, the system $\lambda$ cannot be lower than 14.
    *   The system load remaining for Unit 2 is $300 - 200 = 100$ MW.
    *   At $P_2 = 100$ MW, $IC_2(100) = 15$.
    *   Since $IC_2(100) > IC_1(200)$, Unit 2 is operating at a higher incremental cost than Unit 1's marginal cost at its limit. This is incorrect.

    Let's re-evaluate the logic. When a unit hits its limit, we must consider it at that limit and re-calculate for the remaining units.
    *   Assume Unit 1 at $P_1 = 200$ MW. $IC_1(200) = 14$.
    *   Remaining load for Unit 2 = $300 - 200 = 100$ MW.
    *   Now, for Unit 2 to supply 100 MW, its $IC_2(100) = 0.03 \times 100 + 12 = 15$.
    *   The system must operate at a single $\lambda$. Since $IC_1(200) = 14$ and $IC_2(100) = 15$, this is not optimal.
    *   This implies we should re-evaluate the system lambda.

    **Corrected Iterative Process:**
    *   Start with an estimated $\lambda$. Let's try $\lambda = 14.5$.
        *   $P_1 = (\lambda - 10) / 0.02 = (14.5 - 10) / 0.02 = 4.5 / 0.02 = 225$ MW. This exceeds $P_{1,max} = 200$ MW. So, set $P_1 = 200$ MW. $IC_1(200) = 14$.
        *   $P_2 = (\lambda - 12) / 0.03 = (14.5 - 12) / 0.03 = 2.5 / 0.03 = 83.33$ MW. This is within $P_{2,min} = 80$ MW and $P_{2,max} = 180$ MW. $IC_2(83.33) = 0.03 \times 83.33 + 12 = 2.5 + 12 = 14.5$.
        *   Current total generation = $P_1 + P_2 = 200 + 83.33 = 283.33$ MW.
        *   This is less than $P_{Load} = 300$ MW. We need to increase generation, which means increasing $\lambda$.

    *   Try $\lambda = 15$.
        *   $P_1 = (\lambda - 10) / 0.02 = (15 - 10) / 0.02 = 5 / 0.02 = 250$ MW. Exceeds limit. Set $P_1 = 200$ MW. $IC_1(200) = 14$.
        *   $P_2 = (\lambda - 12) / 0.03 = (15 - 12) / 0.03 = 3 / 0.03 = 100$ MW. This is within limits. $IC_2(100) = 0.03 \times 100 + 12 = 3 + 12 = 15$.
        *   Current total generation = $P_1 + P_2 = 200 + 100 = 300$ MW.
        *   This matches the $P_{Load} = 300$ MW.

    **Final Dispatch:**
    *   Unit 1: $P_1 = 200$ MW
    *   Unit 2: $P_2 = 100$ MW
    *   System Lambda: $\lambda = 15$
    *   Check $IC_1(200) = 14$. $IC_2(100) = 15$. This implies that the system lambda should be 15, and Unit 1 is operating below its "ideal" marginal cost dictated by $\lambda$. This is because Unit 1 is constrained by its maximum output. The cost of the 200 MW from Unit 1 is $F_1(200) = 0.01(200)^2 + 10(200) + 100 = 4000 + 2000 + 100 = 6100$. The cost of 100 MW from Unit 2 is $F_2(100) = 0.015(100)^2 + 12(100) + 80 = 1500 + 1200 + 80 = 2780$. Total cost = $6100 + 2780 = 8880$.

    **Important Note:** The system $\lambda$ is determined by the unit that is operating at the highest incremental cost or at its upper limit which has a lower incremental cost than other units that are not at their limits. In this case, Unit 2 dictates $\lambda=15$. Unit 1 is at its maximum output of 200 MW. Its incremental cost at this point is $IC_1(200)=14$, which is less than $\lambda=15$. This is acceptable as Unit 1 is operating at its physical limit. If Unit 1 was not at its limit, it would produce more at $\lambda=15$ until its IC matched 15.

**Reference:**

*   **Wood & Wollenberg (Chapter 2):** Detailed explanation of the incremental cost method, including handling of unit constraints and the concept of system lambda.
*   **Grainger & Stevenson (Chapter 9):** Discusses the economic dispatch problem and the application of marginal cost principles.

**Alignment with Course Outcomes:**

*   **CO1 (Analyze various methods of generation scheduling):** This is the fundamental method for economic dispatch, a key part of generation scheduling. (K4)

---

### 3. Base Point and Participation Factors

**Key Concepts:**

*   **Base Point:** The scheduled or nominal output of a generating unit. It's a reference point around which deviations are made to respond to system load changes.
*   **Participation Factor ($P_i$):** A factor that determines how much of the system load change a particular unit will pick up. It's usually a normalized value indicating the proportion of the total system load change that a unit is assigned. The sum of participation factors for all online units usually equals 1.
*   **System Load Change ($\Delta P_{Load}$):** The change in total system load from the previous operating point.
*   **Unit Load Change ($\Delta P_i$):** The change in output of unit $i$ from its base point.

**Relationship:**

The change in output of unit $i$ is related to the system load change by:
$\Delta P_i = PF_i \times \Delta P_{Load}$
where $PF_i$ is the participation factor of unit $i$.

The new output of unit $i$ is:
$P_i = BasePoint_i + \Delta P_i = BasePoint_i + PF_i \times \Delta P_{Load}$

**How it Works in Practice (for Automatic Generation Control - AGC):**

OLD determines the *optimal* dispatch, but AGC implements these changes dynamically in response to real-time load variations.

1.  **Economic Dispatch Calculation:** First, the economic dispatch is performed to determine the optimal real power output ($P_{i,ED}$) for each unit to meet the *current* total system load. These $P_{i,ED}$ values become the *target* outputs.
2.  **Base Point Assignment:** The $P_{i,ED}$ values are used as the base points for the units. These base points are scheduled outputs.
3.  **Participation Factor Calculation:** To ensure that units respond to load changes in an economically optimal way, participation factors are calculated based on the economic dispatch solution. A common method for calculating participation factors is based on the incremental cost characteristics.
    *   **Method 1: Proportional to Incremental Cost Sensitivity:**
        $PF_i = \frac{1/IC_i(P_{i,ED})}{\sum_{j=1}^{n} 1/IC_j(P_{j,ED})}$
        This means units with lower incremental costs at their economic dispatch point will pick up a larger share of the load changes.
    *   **Method 2: Based on Average Incremental Cost:**
        If the system lambda ($\lambda_{ED}$) at the economic dispatch point is known, then $IC_i(P_{i,ED}) \approx \lambda_{ED}$ for all units (ideally).
        If units have similar cost characteristics, participation factors might be set proportional to their capacity. However, for economic dispatch, it's about cost sensitivity.

4.  **AGC Control:** When the system load changes by $\Delta P_{Load}$, the AGC system calculates the required change in output for each unit: $\Delta P_i = PF_i \times \Delta P_{Load}$.
5.  **New Output Calculation:** The new target output for unit $i$ is $P_{i,target} = BasePoint_i + \Delta P_i$.
6.  **Constraint Check:** The AGC system must ensure that $P_{i,target}$ stays within the unit's operational limits ($P_{i,min}, P_{i,max}$). If a unit is at its limit, its participation factor for increases becomes zero (or it's excluded from picking up load changes). If it's at its minimum, its participation factor for decreases becomes zero.

**Example:**

Continuing from the previous example, where the economic dispatch for $P_{Load} = 300$ MW yielded:
*   $P_1 = 200$ MW (at its limit)
*   $P_2 = 100$ MW
*   System Lambda $\lambda = 15$

Let's assume the operating point was previously $P_{Load}=280$ MW, and the ED for that load was $P_1=190$ MW, $P_2=90$ MW, with a system $\lambda=14.6$.

Now, the load increases to $P_{Load}=300$ MW. The $\Delta P_{Load} = 300 - 280 = 20$ MW.

Let's calculate participation factors based on the ED for 300 MW load:
*   $P_1 = 200$ MW, $IC_1(200) = 14$
*   $P_2 = 100$ MW, $IC_2(100) = 15$

Using Method 1 (Inverse Incremental Cost):
*   $1/IC_1(200) = 1/14 \approx 0.0714$
*   $1/IC_2(100) = 1/15 \approx 0.0667$
*   Sum of $1/IC = 0.0714 + 0.0667 = 0.1381$

*   $PF_1 = \frac{0.0714}{0.1381} \approx 0.517$
*   $PF_2 = \frac{0.0667}{0.1381} \approx 0.483$
*   Check: $PF_1 + PF_2 = 0.517 + 0.483 = 1.000$

Now, the load increases by $\Delta P_{Load} = 20$ MW.
*   $\Delta P_1 = PF_1 \times \Delta P_{Load} = 0.517 \times 20 = 10.34$ MW
*   $\Delta P_2 = PF_2 \times \Delta P_{Load} = 0.483 \times 20 = 9.66$ MW

New target outputs:
*   $P_{1,target} = BasePoint_1 + \Delta P_1 = 200 + 10.34 = 210.34$ MW. This exceeds $P_{1,max} = 200$ MW.
*   $P_{2,target} = BasePoint_2 + \Delta P_2 = 100 + 9.66 = 109.66$ MW. This is within limits.

**Constraint Handling in AGC:**

When $P_{1,target}$ exceeds the limit, Unit 1 cannot pick up its assigned share. The AGC system must re-allocate the load. Since Unit 1 is at its maximum, it cannot contribute more. Therefore, the entire load increase of 20 MW must be picked up by Unit 2.

*   $\Delta P_1 = 0$ (as Unit 1 is at its max)
*   $\Delta P_2 = 20$ MW (the entire load change)

New actual outputs:
*   $P_1 = 200$ MW (remains at its max)
*   $P_2 = 100 + 20 = 120$ MW (picks up the entire change)

Total generation = $200 + 120 = 320$ MW. This is incorrect. The total load is 300 MW.

**Correction for Constraint Handling:**

When a unit is at a limit, its participation factor for *increasing* load is effectively zero (if at max) or its participation factor for *decreasing* load is zero (if at min).

Let's re-evaluate the participation factors and their application. The base points are the ED points. The participation factors are based on the ED for *that specific load*.

For $\Delta P_{Load} = 20$ MW, and the new ED being $P_1=200, P_2=100$:

*   Unit 1 is at its maximum output (200 MW). Therefore, it cannot pick up any additional load. Its participation factor for load increases should be 0.
*   Unit 2 is below its maximum output (100 MW vs 180 MW). It must pick up the entire load change. Its participation factor for load increases should be 1.

So, the AGC system should:
*   $\Delta P_1 = PF_1 \times \Delta P_{Load} = 0 \times 20 = 0$ MW
*   $\Delta P_2 = PF_2 \times \Delta P_{Load} = 1 \times 20 = 20$ MW

New actual outputs:
*   $P_1 = BasePoint_1 + \Delta P_1 = 200 + 0 = 200$ MW
*   $P_2 = BasePoint_2 + \Delta P_2 = 100 + 20 = 120$ MW

Total generation = $200 + 120 = 320$ MW. This is still not right.

**The core issue is how base points and participation factors are used dynamically.**

The base points are the economically optimal dispatch points for a given load. When the load changes, the AGC system recalculates the economic dispatch to find *new* base points and participation factors.

Let's consider the system load changing from 280 MW to 300 MW.
*   **Previous State (Load = 280 MW):** Assume ED resulted in $P_1=190$ MW, $P_2=90$ MW. The system $\lambda$ was, say, 14.6.
    *   $IC_1(190) = 0.02 \times 190 + 10 = 3.8 + 10 = 13.8$
    *   $IC_2(90) = 0.03 \times 90 + 12 = 2.7 + 12 = 14.7$
    *   This ED implies a $\lambda$ of about 14.6, which is closer to $IC_2$. This suggests the units might not have been perfectly dispatched if the ICs were equal. Let's assume for this example, they were dispatched optimally for 280 MW as $P_1=190$ MW, $P_2=90$ MW.

*   **New State (Load = 300 MW):**
    *   We found the ED for 300 MW is $P_1=200$ MW, $P_2=100$ MW, with $\lambda=15$.
    *   The **new base points** are $BP_1 = 200$ MW, $BP_2 = 100$ MW.
    *   The **new participation factors** are calculated based on the ICs at these new base points:
        *   $IC_1(200) = 14$
        *   $IC_2(100) = 15$
        *   $PF_1 = \frac{1/14}{1/14 + 1/15} = \frac{0.0714}{0.0714 + 0.0667} = \frac{0.0714}{0.1381} \approx 0.517$
        *   $PF_2 = \frac{1/15}{1/14 + 1/15} = \frac{0.0667}{0.1381} \approx 0.483$

*   **AGC Action:** The total system load changed by $\Delta P_{Load} = 20$ MW.
    *   The AGC system aims to adjust the outputs so that $P_i = BP_i + PF_i \times \Delta P_{Load}$.
    *   Unit 1: $P_{1,target} = 200 + 0.517 \times 20 = 200 + 10.34 = 210.34$ MW. This is > 200 MW.
    *   Unit 2: $P_{2,target} = 100 + 0.483 \times 20 = 100 + 9.66 = 109.66$ MW. This is within limits.

*   **Re-allocation due to Constraint:** Since Unit 1 cannot reach 210.34 MW, it will stay at its maximum, 200 MW. This means it picks up $\Delta P_1 = 200 - 200 = 0$ MW from its base point.
    *   The shortfall of $10.34$ MW that Unit 1 was supposed to pick up must now be picked up by Unit 2.
    *   So, $\Delta P_2$ should be $9.66$ MW (its calculated share) + $10.34$ MW (Unit 1's shortfall) = $20$ MW.

*   **Final Dispatch:**
    *   $P_1 = 200$ MW
    *   $P_2 = 100 + 20 = 120$ MW

*   Total generation = $200 + 120 = 320$ MW. This is still incorrect.

**Let's re-evaluate the purpose and application of base points and participation factors.**

Base Point: The scheduled output of a unit.
Participation Factor: The fraction of the *total system load change* a unit is expected to pick up.

The AGC control signal for unit $i$ is $U_i = BP_i + PF_i \times (\Delta P_{Load} - \sum PF_j \Delta P_j)$, where $\Delta P_j$ are the actual changes. This is getting complex.

**Simpler View of AGC with Base Points and Participation Factors:**

1.  **Economic Dispatch (ED):** Determines optimal outputs $P_{i,ED}$ and system lambda $\lambda_{ED}$ for the current total system load $P_{Load}$.
2.  **Base Points (BP):** Set $BP_i = P_{i,ED}$.
3.  **Participation Factors (PF):** Calculate $PF_i$ based on the ICs at $P_{i,ED}$. For example, $PF_i \propto 1/IC_i(P_{i,ED})$. Ensure $\sum PF_i = 1$.
4.  **Load Change:** System load changes by $\Delta P_{Load}$.
5.  **Target Output Calculation:** AGC calculates a target output for each unit: $P_{i,target} = BP_i + PF_i \times \Delta P_{Load}$.
6.  **Constraint Enforcement:**
    *   If $P_{i,target} > P_{i,max}$, then the unit's output is capped at $P_{i,max}$. This means $\Delta P_i = P_{i,max} - BP_i$.
    *   If $P_{i,target} < P_{i,min}$, then the unit's output is floored at $P_{i,min}$. This means $\Delta P_i = P_{i,min} - BP_i$.
7.  **Re-allocation:** The difference between the target and the actual capped/floored output for any unit that hit its limit is redistributed among the other units that are still within their limits. This redistribution is done using their participation factors.

**Revised Example:**

*   Load changes from 280 MW to 300 MW ($\Delta P_{Load} = 20$ MW).
*   New ED: $BP_1 = 200$ MW, $BP_2 = 100$ MW.
*   New PFs: $PF_1 \approx 0.517$, $PF_2 \approx 0.483$.

*   **Unit 1:** $P_{1,target} = 200 + 0.517 \times 20 = 210.34$ MW.
    *   Since $210.34 > P_{1,max} = 200$, Unit 1 will operate at $P_1 = 200$ MW.
    *   Actual $\Delta P_1 = 200 - 200 = 0$ MW.
    *   Shortfall from Unit 1 = $210.34 - 200 = 10.34$ MW.

*   **Unit 2:** $P_{2,target} = 100 + 0.483 \times 20 = 109.66$ MW.
    *   This is within limits.
    *   Unit 2 needs to pick up its share (9.66 MW) plus Unit 1's shortfall (10.34 MW).
    *   Actual $\Delta P_2 = 9.66 + 10.34 = 20$ MW.
    *   $P_2 = 100 + 20 = 120$ MW.

*   **Final Dispatch:**
    *   $P_1 = 200$ MW
    *   $P_2 = 120$ MW
    *   Total generation = $200 + 120 = 320$ MW. Still not right.

**The problem is in the assumption of the base load point and how the change is applied.**

Let's use the simpler approach where participation factors are *static* between ED calculations.

Assume the system operates at $P_{Load}=280$ MW, with $P_1=190$ MW, $P_2=90$ MW.
The AGC calculates PFs based on this point.
$IC_1(190) = 13.8$
$IC_2(90) = 14.7$
$PF_1 = \frac{1/13.8}{1/13.8 + 1/14.7} = \frac{0.07246}{0.07246 + 0.06803} = \frac{0.07246}{0.14049} \approx 0.5158$
$PF_2 = \frac{1/14.7}{1/13.8 + 1/14.7} = \frac{0.06803}{0.14049} \approx 0.4842$

Now, the load increases to 300 MW ($\Delta P_{Load} = 20$ MW).
*   Unit 1 target: $P_{1,target} = 190 + 0.5158 \times 20 = 190 + 10.316 = 200.316$ MW.
    *   Caps at $P_1 = 200$ MW. $\Delta P_1 = 200 - 190 = 10$ MW.
    *   Shortfall = $200.316 - 200 = 0.316$ MW.

*   Unit 2 target: $P_{2,target} = 90 + 0.4842 \times 20 = 90 + 9.684 = 99.684$ MW.
    *   Within limits.
    *   Unit 2 picks up its share (9.684 MW) + Unit 1's shortfall (0.316 MW) = $9.684 + 0.316 = 10$ MW.
    *   $P_2 = 90 + 10 = 100$ MW.

*   **Final Dispatch:** $P_1 = 200$ MW, $P_2 = 100$ MW.
*   Total Generation = $200 + 100 = 300$ MW. This matches the load.

This demonstrates how AGC uses base points (from prior ED) and participation factors (also from prior ED) to make quick adjustments. The system is then re-dispatched economically at regular intervals.

**Reference:**

*   **Wood & Wollenberg (Chapter 11):** Discusses Automatic Generation Control (AGC) and the role of base points and participation factors in achieving economic dispatch dynamically.
*   **Abur & Gomez (Chapter 1, Chapter 4):** While focused on state estimation, the context of real-time operation and system control ties into the need for dispatching and AGC.

**Alignment with Course Outcomes:**

*   **CO1 (Analyze various methods of generation scheduling):** Base points and participation factors are integral to the operational aspect of generation scheduling, especially in real-time via AGC. (K4)

---

### 4. Practice Questions and Exercises

**Question 1:**
A power system has two generating units with the following cost functions:
Unit 1: $F_1(P_1) = 0.008 P_1^2 + 15 P_1 + 120$ ($/hr$)
Unit 2: $F_2(P_2) = 0.012 P_2^2 + 13 P_2 + 90$ ($/hr$)
The total system load is 400 MW. Unit 1 has operating limits of [80 MW, 250 MW] and Unit 2 has limits of [100 MW, 300 MW].
Determine the economic dispatch of the two units using the first-order gradient method. What is the system lambda ($\lambda$)?

**Answer 1:**
1.  **Incremental Costs:**
    *   $IC_1(P_1) = \frac{dF_1}{dP_1} = 0.016 P_1 + 15$
    *   $IC_2(P_2) = \frac{dF_2}{dP_2} = 0.024 P_2 + 13$

2.  **Equimarginal Principle:** $IC_1(P_1) = IC_2(P_2) = \lambda$
    *   $0.016 P_1 + 15 = \lambda \implies P_1 = \frac{\lambda - 15}{0.016}$
    *   $0.024 P_2 + 13 = \lambda \implies P_2 = \frac{\lambda - 13}{0.024}$

3.  **System Load Constraint:** $P_1 + P_2 = 400$
    *   $\frac{\lambda - 15}{0.016} + \frac{\lambda - 13}{0.024} = 400$
    *   Multiply by 0.048 (LCM of 0.016 and 0.024):
    *   $3(\lambda - 15) + 2(\lambda - 13) = 400 \times 0.048$
    *   $3\lambda - 45 + 2\lambda - 26 = 19.2$
    *   $5\lambda - 71 = 19.2$
    *   $5\lambda = 90.2$
    *   $\lambda = \frac{90.2}{5} = 18.04$ $/MW$

4.  **Calculate Power Outputs:**
    *   $P_1 = \frac{18.04 - 15}{0.016} = \frac{3.04}{0.016} = 190$ MW
    *   $P_2 = \frac{18.04 - 13}{0.024} = \frac{5.04}{0.024} = 210$ MW

5.  **Check Constraints:**
    *   Unit 1: $P_1 = 190$ MW. Limits are [80 MW, 250 MW]. 190 MW is within limits.
    *   Unit 2: $P_2 = 210$ MW. Limits are [100 MW, 300 MW]. 210 MW is within limits.
    *   Total generation = $190 + 210 = 400$ MW, which matches the load.

**Answer:**
*   Unit 1 Dispatch: $P_1 = 190$ MW
*   Unit 2 Dispatch: $P_2 = 210$ MW
*   System Lambda ($\lambda$): $18.04$ $/MW$

---

**Question 2:**
Consider the system from Question 1. Suppose the system load increases from 400 MW to 430 MW. If the base points are $P_1 = 190$ MW and $P_2 = 210$ MW, calculate the participation factors for each unit. Then, determine the new dispatch assuming Unit 1's maximum output is 220 MW and Unit 2's is 300 MW.

**Answer 2:**
1.  **Base Points and ICs at Base Points:**
    *   $BP_1 = 190$ MW, $IC_1(190) = 0.016 \times 190 + 15 = 3.04 + 15 = 18.04$
    *   $BP_2 = 210$ MW, $IC_2(210) = 0.024 \times 210 + 13 = 5.04 + 13 = 18.04$
    *   (Note: The ICs are equal because the units were perfectly dispatched for 400 MW. In a real scenario, they might not be exactly equal if there were constraints involved in the initial dispatch). Let's assume $\lambda=18.04$.

2.  **Calculate Participation Factors (proportional to inverse IC):**
    *   $1/IC_1(190) = 1/18.04 \approx 0.05543$
    *   $1/IC_2(210) = 1/18.04 \approx 0.05543$
    *   Sum of $1/IC = 0.05543 + 0.05543 = 0.11086$

    *   $PF_1 = \frac{0.05543}{0.11086} \approx 0.500$
    *   $PF_2 = \frac{0.05543}{0.11086} \approx 0.500$
    *   So, $PF_1 = 0.5$, $PF_2 = 0.5$.

3.  **Load Change:** $\Delta P_{Load} = 430 - 400 = 30$ MW.

4.  **Target Output Calculation:**
    *   $P_{1,target} = BP_1 + PF_1 \times \Delta P_{Load} = 190 + 0.5 \times 30 = 190 + 15 = 205$ MW
    *   $P_{2,target} = BP_2 + PF_2 \times \Delta P_{Load} = 210 + 0.5 \times 30 = 210 + 15 = 225$ MW

5.  **Constraint Enforcement:**
    *   Unit 1: $P_{1,target} = 205$ MW. Unit 1 has a new limit of 220 MW. 205 MW is within limits [80 MW, 220 MW]. So, $P_1 = 205$ MW.
    *   Unit 2: $P_{2,target} = 225$ MW. Unit 2 has a limit of 300 MW. 225 MW is within limits [100 MW, 300 MW]. So, $P_2 = 225$ MW.

6.  **Final Dispatch:**
    *   $P_1 = 205$ MW
    *   $P_2 = 225$ MW
    *   Total generation = $205 + 225 = 450$ MW. This is greater than the required load of 430 MW. This indicates that the initial participation factors or base points are no longer appropriate for the new load level, and a full ED is needed.

    **Let's re-do the target calculation if the new load is 430MW and we recalculate PFs and BPs.**
    *   New Load = 430 MW.
    *   We need to find $P_1, P_2$ such that $P_1+P_2=430$, $IC_1(P_1)=IC_2(P_2)=\lambda$, and limits are respected.
    *   $P_1 = \frac{\lambda - 15}{0.016}$
    *   $P_2 = \frac{\lambda - 13}{0.024}$
    *   $\frac{\lambda - 15}{0.016} + \frac{\lambda - 13}{0.024} = 430$
    *   $3(\lambda - 15) + 2(\lambda - 13) = 430 \times 0.048$
    *   $5\lambda - 45 - 26 = 20.64$
    *   $5\lambda - 71 = 20.64$
    *   $5\lambda = 91.64$
    *   $\lambda = 18.328$ $/MW$

    *   $P_1 = \frac{18.328 - 15}{0.016} = \frac{3.328}{0.016} = 208$ MW
    *   $P_2 = \frac{18.328 - 13}{0.024} = \frac{5.328}{0.024} = 222$ MW

    *   **Check Constraints for 430 MW load:**
        *   Unit 1: $P_1 = 208$ MW. New limit is 220 MW. 208 MW is within [80 MW, 220 MW].
        *   Unit 2: $P_2 = 222$ MW. Limit is 300 MW. 222 MW is within [100 MW, 300 MW].
        *   Total generation = $208 + 222 = 430$ MW. Matches load.

    **Answer:**
    *   Participation Factors: $PF_1 = 0.500$, $PF_2 = 0.500$.
    *   The problem asks to determine the *new dispatch* assuming the initial base points and PFs are used. The previous calculation showed that using these static PFs leads to over-generation. This highlights the need for recalculating PFs and base points for every ED interval. If the question implicitly asks for the actual ED for 430 MW:
    *   New Dispatch for 430 MW load: $P_1 = 208$ MW, $P_2 = 222$ MW.

---

### 5. Important Points to Remember

*   **Economic Dispatch Goal:** Minimize total generation cost.
*   **Equimarginal Principle:** $IC_1 = IC_2 = ... = IC_n = \lambda$ for optimal dispatch.
*   **System Lambda ($\lambda$):** Represents the marginal cost of supplying the system load. It's the cost of the last MW supplied.
*   **Unit Constraints:** Minimum and maximum generation limits must be respected. If a unit hits a limit, it operates at that limit, and the $\lambda$ may be determined by other units.
*   **First-Order Gradient Method:** A technique to find the ED by iteratively adjusting $\lambda$ until the sum of generation equals the load.
*   **Base Point:** The scheduled optimal output of a generator.
*   **Participation Factor:** A factor indicating a unit's share in responding to system load changes, typically derived from the economic dispatch solution based on incremental costs.
*   **AGC:** Uses base points and participation factors to automatically adjust generation in response to real-time load variations, aiming to maintain system frequency and economic dispatch.
*   **Constraint Handling in AGC:** When a unit hits its limits, its response is capped/floored, and the remaining load change is redistributed among other units. This often necessitates re-calculation of the ED and thus new base points and participation factors.

---

### 6. Alignment with Course Outcomes

*   **CO1 (Analyze various methods of generation scheduling):** This module directly addresses the economic dispatch aspect of generation scheduling, which is a fundamental component of overall scheduling. (K4)

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
