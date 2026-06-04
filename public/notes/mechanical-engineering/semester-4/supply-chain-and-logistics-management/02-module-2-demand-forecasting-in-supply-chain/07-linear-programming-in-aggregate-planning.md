---
title: "linear programming in aggregate planning."
subject: "SUPPLY CHAIN AND LOGISTICS MANAGEMENT"
module: "Module 2: Demand forecasting in supply chain"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804463224"
status: "completed"
scrapedAt: "2026-05-20T17:56:21.976Z"
---
# SUPPLY CHAIN AND LOGISTICS MANAGEMENT

## Module 2: Demand Forecasting in Supply Chain

### Topic: Linear Programming in Aggregate Planning

---

### 1. Introduction to Aggregate Planning

Aggregate planning is a process of developing a plan to meet the medium-term demand forecast. It involves making decisions about the overall level of production, inventory, workforce, and other resources to best satisfy demand at the lowest cost. The goal is to balance supply and demand over a planning horizon, typically 3 to 12 months, without significant changes to the fundamental structure of the supply chain.

**Key Concepts:**

*   **Aggregate:** Instead of planning for individual products, aggregate planning deals with product families or groups of products. This simplifies the planning process.
*   **Time Horizon:** Medium-term (3-12 months). This bridges the gap between strategic (long-term) and tactical (short-term) planning.
*   **Objectives:** Minimize costs (production, inventory, hiring, firing, overtime, subcontracting, etc.) while meeting demand.
*   **Decision Variables:** Production rate, workforce level, inventory level, overtime hours, subcontracting levels.
*   **Constraints:** Capacity limitations, demand requirements, resource availability.

**Relation to Demand Forecasting:** Aggregate planning relies heavily on demand forecasts for product families over the planning horizon. Accurate forecasts are crucial for effective aggregate planning.

**Textbook Reference:** Chopra & Kalra (7th ed.) discusses aggregate planning as a critical component of supply chain planning, bridging sales and operations planning. They emphasize the need to balance demand and supply to meet customer needs while managing costs. (Chapter 10: Sales and Operations Planning).

---

### 2. Why Linear Programming for Aggregate Planning?

Linear Programming (LP) is a mathematical optimization technique used to find the best outcome in a mathematical model, whose best outcome is a value of a linear function, subject to the function's variables satisfying a set of linear constraints. LP is well-suited for aggregate planning because:

*   **Objective Function is Linear:** The costs associated with aggregate planning (production, inventory holding, hiring, firing, etc.) can often be expressed as linear functions of the decision variables. For example, the cost of holding inventory is the inventory level multiplied by the holding cost per unit.
*   **Constraints are Linear:** The limitations on production capacity, workforce availability, inventory balance, and demand fulfillment are typically linear inequalities or equalities.
*   **Decision Variables:** The choices made in aggregate planning (e.g., number of units to produce, number of workers to hire) are quantifiable and can be represented as decision variables.

**Textbook Reference:** While Chopra & Kalra (7th ed.) may not delve into the mathematical intricacies of LP for aggregate planning in great detail, they certainly lay the groundwork by presenting the problem structure and the need for optimization techniques. Simchi-Levi et al. (4th ed.) often discuss quantitative methods for supply chain planning, where LP is a foundational tool for resource allocation and scheduling.

---

### 3. Setting up a Linear Programming Model for Aggregate Planning

A typical LP model for aggregate planning involves defining:

*   **Decision Variables:**
    *   $P_t$: Number of units produced in period $t$.
    *   $H_t$: Number of workers employed at the beginning of period $t$.
    *   $I_t$: Inventory at the end of period $t$.
    *   $O_t$: Number of overtime hours in period $t$.
    *   $S_t$: Number of units subcontracted in period $t$.
    *   $HI_t$: Number of workers hired at the beginning of period $t$.
    *   $FI_t$: Number of workers fired at the beginning of period $t$.

*   **Parameters (Data):**
    *   $D_t$: Demand in period $t$.
    *   $C_{prod}$: Cost of regular production per unit.
    *   $C_{overtime}$: Cost of overtime production per unit.
    *   $C_{subcontract}$: Cost of subcontracting per unit.
    *   $C_{hold}$: Cost of holding one unit in inventory for one period.
    *   $C_{hire}$: Cost of hiring one worker.
    *   $C_{fire}$: Cost of firing one worker.
    *   $W_{reg}$: Regular production capacity per worker per period.
    *   $W_{overtime}$: Maximum overtime production capacity per worker per period.
    *   $W_{max}$: Maximum workforce size.
    *   $W_{min}$: Minimum workforce size.
    *   $I_0$: Initial inventory.
    *   $H_0$: Initial workforce.

*   **Objective Function:** Minimize total cost.

    $$ \text{Minimize } Z = \sum_{t=1}^{N} (C_{prod} \cdot P_t + C_{overtime} \cdot O_t + C_{subcontract} \cdot S_t + C_{hold} \cdot I_t + C_{hire} \cdot HI_t + C_{fire} \cdot FI_t) $$

    Where $N$ is the number of periods in the planning horizon.

*   **Constraints:**

    1.  **Demand Fulfillment (Inventory Balance):**
        For each period $t$:
        $$ I_{t-1} + P_t + S_t - I_t = D_t $$
        *This constraint ensures that the demand in each period is met using inventory from the previous period, current production, and subcontracting. Inventory from the current period becomes the beginning inventory for the next period.*

    2.  **Production Capacity (Regular Time):**
        For each period $t$:
        $$ P_t \le W_{reg} \cdot H_t $$
        *Regular production is limited by the number of workers and their regular production capacity.*

    3.  **Production Capacity (Overtime):**
        For each period $t$:
        $$ P_t - W_{reg} \cdot H_t \le W_{overtime} \cdot H_t $$
        *This can be rewritten as: $P_t \le W_{reg} \cdot H_t + W_{overtime} \cdot H_t$. However, it's often more practical to model overtime production as a separate decision variable $O_t$. If $O_t$ represents overtime *units*, then:*
        $$ P_t + O_t \le W_{reg} \cdot H_t $$
        *And $O_t$ is subject to a maximum overtime limit, often a percentage of regular capacity or a fixed amount per worker.*

        A more common and clearer formulation for overtime is to define $P_t$ as regular time production and introduce $O_t$ as overtime production.

        **Revised Decision Variables and Constraints:**
        *   $P_t$: Regular time production in period $t$.
        *   $O_t$: Overtime production in period $t$.

        **Revised Production Capacity Constraints:**
        For each period $t$:
        $$ P_t \le W_{reg} \cdot H_t $$
        $$ O_t \le W_{overtime} \cdot H_t \quad \text{(or a specified limit for overtime units)} $$
        *And the total production for demand fulfillment becomes $P_t + O_t$.*

        **Revised Demand Fulfillment:**
        For each period $t$:
        $$ I_{t-1} + P_t + O_t + S_t - I_t = D_t $$

    4.  **Workforce Level:**
        For each period $t$:
        $$ H_t = H_{t-1} + HI_t - FI_t $$
        *This links the workforce level in the current period to the previous period's workforce and changes due to hiring and firing.*

    5.  **Workforce Constraints (Optional but common):**
        For each period $t$:
        $$ H_t \le W_{max} $$
        $$ H_t \ge W_{min} $$
        *These represent maximum and minimum workforce limits.*

    6.  **Non-negativity:**
        All decision variables must be non-negative:
        $$ P_t, O_t, S_t, I_t, HI_t, FI_t, H_t \ge 0 $$

**Course Outcome Alignment:**

*   **CO2 (Demand Forecasting):** Understanding demand forecasts ($D_t$) is the input for this model.
*   **CO3 (Inventory Planning):** The model explicitly includes inventory levels ($I_t$) and holding costs ($C_{hold}$), directly addressing inventory management.
*   **CO1 (Supply Chain Design):** While not directly designing a network, aggregate planning optimizes operations within an existing structure. Decisions on production, workforce, and inventory impact the efficiency of the supply chain.

**Example Scenario:**

A company needs to plan production for the next three months to meet forecasted demand for a product family.

*   **Product Family Demand:**
    *   Month 1: 500 units
    *   Month 2: 600 units
    *   Month 3: 700 units
*   **Initial Inventory:** 100 units
*   **Initial Workforce:** 20 workers
*   **Regular Production per worker/month:** 30 units
*   **Overtime Production per worker/month:** 10 units (max)
*   **Costs:**
    *   Regular Production: $10/unit
    *   Overtime Production: $15/unit
    *   Inventory Holding: $2/unit/month
    *   Hiring: $100/worker
    *   Firing: $150/worker
    *   Subcontracting: $20/unit (Assume no subcontracting for simplicity in this example)

Let's set up the LP for the first month:

**Decision Variables for Month 1:**
*   $P_1$: Regular production in month 1
*   $O_1$: Overtime production in month 1
*   $I_1$: Inventory at end of month 1
*   $HI_1$: Workers hired at start of month 1
*   $FI_1$: Workers fired at start of month 1
*   $H_1$: Workforce at start of month 1

**Objective Function (for month 1):**
Minimize $Z_1 = 10 \cdot P_1 + 15 \cdot O_1 + 2 \cdot I_1 + 100 \cdot HI_1 + 150 \cdot FI_1$

**Constraints for Month 1:**
1.  **Demand Fulfillment:** $I_0 + P_1 + O_1 - I_1 = D_1$
    $100 + P_1 + O_1 - I_1 = 500$

2.  **Regular Production Capacity:** $P_1 \le 30 \cdot H_1$

3.  **Overtime Production Capacity:** $O_1 \le 10 \cdot H_1$

4.  **Workforce Level:** $H_1 = H_0 + HI_1 - FI_1$
    $H_1 = 20 + HI_1 - FI_1$

5.  **Non-negativity:** $P_1, O_1, I_1, HI_1, FI_1, H_1 \ge 0$

This is just for one month. The full LP would involve these variables and constraints for months 2 and 3, linked by the inventory and workforce levels from the previous period.

---

### 4. Solving the LP Model

LP models can be solved using various software tools and algorithms:

*   **Spreadsheet Solvers:** Microsoft Excel Solver, Google Sheets Solver.
*   **Specialized LP Solvers:** CPLEX, Gurobi, LINGO, MATLAB Optimization Toolbox.
*   **Online LP Solvers.**

The output of an LP solver will provide the optimal values for all decision variables, allowing the company to determine the optimal production levels, workforce, and inventory for each period to minimize total cost.

---

### 5. Variations and Extensions

*   **Backlogging:** Allowing demand to be met in future periods if current demand cannot be met (with associated backlogging costs).
*   **Chase Strategy:** Adjusting production and workforce levels to match demand exactly in each period (often leads to high hiring/firing costs).
*   **Level Strategy:** Maintaining a stable production rate and workforce, with inventory absorbing demand fluctuations.
*   **Mixed Strategy:** A combination of chase and level strategies.
*   **Piecewise Linear Costs:** When costs are not strictly linear (e.g., volume discounts), piecewise linear approximations can be used.
*   **Time-Varying Parameters:** Costs, capacities, and demands can change over time, which is naturally handled by the time-phased LP model.

**Textbook Reference:** Chopra & Kalra (7th ed.) discuss these strategies (chase, level) in the context of aggregate planning before introducing optimization, highlighting how LP can be used to find optimal solutions for these strategies.

---

### 6. Key Takeaways and Important Points to Remember

*   **Aggregate planning** bridges the gap between long-term strategic decisions and short-term operational execution.
*   **Demand forecasts** are the primary input for aggregate planning.
*   **Linear Programming** is a powerful tool for optimizing aggregate plans due to the linear nature of costs and constraints.
*   A well-formulated LP model includes: **decision variables, objective function, and constraints** (demand fulfillment, capacity, workforce).
*   The **inventory balance constraint** is crucial for linking periods.
*   The choice of strategy (chase, level, mixed) influences the cost structure and the resulting LP solution.
*   Accurate data on costs, capacities, and demand forecasts is essential for effective LP-based aggregate planning.

---

### 7. Practice Questions and Exercises

**Question 1 (Conceptual):**

Explain why linear programming is a suitable technique for aggregate planning. What are the typical components of an LP model for this purpose?

**Answer 1:**
Linear programming is suitable for aggregate planning because the objective (minimizing costs) and the constraints (demand, capacity, workforce) in aggregate planning can typically be expressed as linear functions of the decision variables. The components of an LP model for aggregate planning are:
*   **Decision Variables:** Production rates, workforce levels, inventory levels, hiring/firing, subcontracting.
*   **Objective Function:** A linear function representing total costs (production, inventory, labor, etc.).
*   **Constraints:** Linear inequalities or equalities that represent limitations such as meeting demand, production capacity, workforce size, and inventory balance between periods.

**Question 2 (Application - Setting up constraints):**

A company plans for 3 months. The demand forecast for month $t$ is $D_t$. Let $I_{t-1}$ be the inventory at the beginning of month $t$, $P_t$ be the regular production, $O_t$ be overtime production, and $S_t$ be subcontracted units in month $t$. Let $I_t$ be the inventory at the end of month $t$. Formulate the inventory balance constraint for month $t$.

**Answer 2:**
The inventory balance constraint for month $t$ ensures that the demand is met. The available supply comes from the inventory at the start of the period ($I_{t-1}$), regular production ($P_t$), overtime production ($O_t$), and subcontracted units ($S_t$). This total supply must equal the demand ($D_t$) plus the inventory at the end of the period ($I_t$).

$$ I_{t-1} + P_t + O_t + S_t = D_t + I_t $$

Rearranging to the standard form:

$$ I_{t-1} + P_t + O_t + S_t - I_t = D_t $$

**Question 3 (Scenario-based - Formulating parts of an LP):**

Consider the following data for the first two months of an aggregate plan:

| Month | Demand ($D_t$) |
| :---- | :------------- |
| 1     | 1000           |
| 2     | 1200           |

*   Initial Inventory ($I_0$): 200 units
*   Regular Production per worker per month: 50 units
*   Overtime Production per worker per month: 20 units
*   Cost of regular production: $20/unit
*   Cost of overtime production: $30/unit
*   Cost of holding inventory: $5/unit/month
*   Cost of hiring a worker: $500
*   Cost of firing a worker: $700

Let $H_t$ be the workforce in month $t$. Formulate the objective function for the first two months and the production capacity constraints for month 1.

**Answer 3:**

**Decision Variables:**
*   $P_1, P_2$: Regular production in month 1 and 2
*   $O_1, O_2$: Overtime production in month 1 and 2
*   $I_1, I_2$: Inventory at end of month 1 and 2
*   $H_1, H_2$: Workforce in month 1 and 2
*   $HI_1, FI_1$: Hired/Fired workers at start of month 1
*   $HI_2, FI_2$: Hired/Fired workers at start of month 2

**Objective Function (Months 1 & 2):**
Minimize $Z = (20 \cdot P_1 + 30 \cdot O_1 + 5 \cdot I_1 + 500 \cdot HI_1 + 700 \cdot FI_1) + (20 \cdot P_2 + 30 \cdot O_2 + 5 \cdot I_2 + 500 \cdot HI_2 + 700 \cdot FI_2)$

**Production Capacity Constraints (Month 1):**
*   Regular Production: $P_1 \le 50 \cdot H_1$
*   Overtime Production: $O_1 \le 20 \cdot H_1$

*(Note: The full LP would also include inventory balance constraints for both months and workforce level constraints linking $H_1$ to $H_2$).*

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 8. Further Reading and Textual Integration

**From Chopra & Kalra (7th Edition):**
Chapter 10, "Sales and Operations Planning," provides a strong foundation for aggregate planning. It discusses the importance of balancing demand and supply over a medium-term horizon and outlines various strategies like the chase strategy, level strategy, and mixed strategies. The chapter emphasizes that aggregate planning decisions impact inventory, production, workforce, and outsourcing, all of which can be modeled using quantitative techniques. While the book may not present the full LP formulation for every example, it sets the stage by defining the problem and the trade-offs involved. For instance, it might show how to calculate the number of workers needed for a specific production level or how inventory costs accumulate. The concept of "capacity in terms of labor hours" directly translates to the $W_{reg}$ and $W_{overtime}$ parameters used in the LP model.

**From Simchi-Levi, Simchi-Levi (4th Edition):**
This book often focuses on more quantitative and modeling aspects of supply chain design and management. While specific chapters might vary in focus, you can expect discussions on capacity planning, production planning, and inventory management that often utilize optimization techniques. LP is a fundamental tool in operations research and is frequently applied to problems like production scheduling, resource allocation, and network design, which are all related to aggregate planning. The book might highlight the mathematical rigor behind such planning processes and the benefits of using optimization models to achieve cost efficiency and customer service level targets. For example, in chapters discussing production and inventory control, LP might be introduced as a method to determine optimal production quantities and safety stocks.

---

This comprehensive study note covers the essential aspects of linear programming in aggregate planning within the context of Supply Chain and Logistics Management. It integrates concepts from the specified textbooks, aligns with course outcomes, and provides practical examples and questions for reinforcement.