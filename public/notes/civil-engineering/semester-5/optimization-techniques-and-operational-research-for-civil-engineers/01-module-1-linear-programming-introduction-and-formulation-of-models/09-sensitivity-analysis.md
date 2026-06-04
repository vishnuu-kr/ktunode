---
title: "Sensitivity analysis"
subject: "OPTIMIZATION TECHNIQUES AND OPERATIONAL RESEARCH FOR CIVIL ENGINEERS"
module: "Module 1: Linear Programming: Introduction and formulation of models"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810f9d"
status: "completed"
scrapedAt: "2026-05-20T18:50:06.250Z"
---
# Module 1: Linear Programming - Sensitivity Analysis

## 1. Introduction to Sensitivity Analysis

Sensitivity analysis, also known as post-optimality analysis, is a crucial technique in linear programming (LP). It examines how changes in the parameters of an LP model (objective function coefficients, constraint right-hand sides, or even the coefficients within the constraints) affect the optimal solution. In essence, it answers the question: "What happens to the optimal solution if the problem's data changes?"

For civil engineers, understanding sensitivity analysis is vital because real-world project parameters are rarely fixed. Material costs fluctuate, labor availability changes, and resource constraints can be dynamic. Sensitivity analysis helps in making robust decisions and understanding the flexibility of a plan.

## 2. Key Concepts and Definitions

*   **Optimal Solution:** The set of decision variable values that maximizes or minimizes the objective function while satisfying all constraints.
*   **Basic Feasible Solution (BFS):** A feasible solution to an LP problem where the number of non-zero variables is equal to the number of constraints.
*   **Non-Basic Variables:** Variables set to zero in a BFS.
*   **Basic Variables:** Variables that are non-zero in a BFS.
*   **Objective Function Coefficients:** The coefficients of the decision variables in the objective function (e.g., profit per unit, cost per unit).
*   **Constraint Right-Hand Sides (RHS):** The constants on the right-hand side of the inequality or equality constraints, often representing available resources or demand.
*   **Shadow Price (Dual Value):** The change in the optimal value of the objective function per unit increase in the RHS of a constraint, assuming all other parameters remain unchanged.
*   **Allowable Increase/Decrease:** The range within which a parameter (objective function coefficient or RHS) can change without changing the current optimal basis.
*   **Range of Optimality:** The range of values for an objective function coefficient for which the current optimal basis remains unchanged.
*   **Range of Feasibility:** The range of values for the RHS of a constraint for which the current optimal basis remains feasible and the shadow price is valid.

## 3. Types of Sensitivity Analysis

Sensitivity analysis in LP can be broadly categorized into:

### 3.1. Sensitivity Analysis of Objective Function Coefficients

This type of analysis investigates how changes in the coefficients of the decision variables in the objective function impact the optimal solution.

#### 3.1.1. What it tells us:
*   How sensitive is the optimal objective function value to changes in the "value" or "cost" of each decision variable?
*   At what point does a change in a coefficient make a previously non-optimal solution become optimal?

#### 3.1.2. Key Concepts:
*   **Reduced Cost:** For a non-basic variable, the reduced cost is the amount by which the objective function coefficient would have to improve (increase for maximization, decrease for minimization) to make that variable a basic variable in the optimal solution.
    *   If a non-basic variable has a positive reduced cost in a maximization problem, it means that to bring this variable into the basis, the objective function would have to decrease.
    *   If a non-basic variable has a negative reduced cost in a minimization problem, it means that to bring this variable into the basis, the objective function would have to increase.
    *   Basic variables in the optimal solution have a reduced cost of zero.

*   **Allowable Increase/Decrease for Objective Function Coefficients:**
    *   For a **basic variable**, the allowable increase/decrease defines the range of its objective function coefficient for which it remains a basic variable at its current optimal level.
    *   For a **non-basic variable**, the reduced cost (or its negative for minimization) is the minimum change required in its objective function coefficient to make it enter the optimal basis.

#### 3.1.3. Example:
Consider a civil engineering project optimizing the production of two types of concrete blocks (X1 and X2) for maximum profit.
Objective Function: Maximize $Z = 5X_1 + 4X_2$ (Profit per block)

Suppose after solving, $X_1 = 100$ and $X_2 = 50$ is the optimal solution.
If the profit per block of X1 changes from $5 to $6, does the optimal solution remain the same?
Sensitivity analysis tools (like those in Excel Solver or LP software) will tell us the "allowable increase" for the coefficient of $X_1$. If the allowable increase is $1.5$, then increasing the profit from $5 to $6 (an increase of $1$) is within this range, and the optimal solution likely remains $X_1 = 100, X_2 = 50$. However, if the profit increases to $7.0$, this is outside the allowable range, and a new optimal basis (and thus a new set of optimal variable values) will emerge.

### 3.2. Sensitivity Analysis of Constraint Right-Hand Sides (RHS)

This type of analysis examines how changes in the available resources or requirements (RHS values of constraints) affect the optimal solution.

#### 3.2.1. What it tells us:
*   How much can a resource be increased or decreased before the optimal allocation of resources changes?
*   What is the value of an additional unit of a scarce resource?

#### 3.2.2. Key Concepts:
*   **Shadow Price (Dual Value):** The shadow price of a constraint indicates the change in the optimal objective function value for a one-unit increase in the RHS of that constraint, provided that the basis remains optimal.
    *   **For a "less than or equal to" ($\le$) constraint (resource constraint):** A positive shadow price means that increasing the resource by one unit will increase the objective function value. A zero shadow price means the resource is not a binding constraint.
    *   **For a "greater than or equal to" ($\ge$) constraint (demand constraint):** A negative shadow price means that increasing the RHS (demand) by one unit will decrease the objective function value (as more resources are needed).
    *   **For an "equality" (=) constraint:** The shadow price represents the change in the objective function for a unit change in the RHS.

*   **Allowable Increase/Decrease for RHS:** For a given constraint, this defines the range of its RHS value for which the current optimal basis remains unchanged and the shadow price is valid.
    *   If the RHS of a constraint changes by an amount within its allowable increase/decrease range, the current basic variables remain the same, and the shadow price can be used to estimate the change in the objective function value.
    *   If the RHS changes outside this range, the optimal basis will change, and a new solution needs to be computed.

#### 3.2.3. Example:
Continuing the concrete block example. Suppose one of the constraints is:
$2X_1 + 3X_2 \le 600$ (Availability of Aggregate Material in tons)

If the optimal solution is $X_1 = 100, X_2 = 50$, and the shadow price for this aggregate constraint is $0.5$, it means that if we increase the available aggregate from 600 tons to 601 tons, the total profit will increase by $0.5$ (to $500.5$, if $Z=500$ initially).

If the "allowable increase" for the RHS of this constraint is 100 tons, we can increase the aggregate from 600 to 700 tons, and the shadow price of $0.5$ will still be valid for each incremental ton within this range. However, if we need 800 tons, the optimal basis will change, and the shadow price of $0.5$ will no longer apply directly.

### 3.3. Sensitivity Analysis of Constraint Coefficients

This type of analysis investigates how changes in the coefficients within the constraints (e.g., the amount of a resource consumed per unit of activity) affect the optimal solution. This is generally more complex and often requires re-solving the LP problem or using specialized software.

#### 3.3.1. What it tells us:
*   How does the efficiency of a resource usage affect the optimal plan?
*   If a particular activity becomes more or less resource-intensive, how does the solution change?

#### 3.3.2. Key Concepts:
*   **Impact on the Basis:** Changes in constraint coefficients can alter the relationships between variables, potentially changing which variables are basic and non-basic in the optimal solution.
*   **Re-solving Required:** Unlike objective function coefficients or RHS values, changes in constraint coefficients often require a re-computation of the entire LP problem to find the new optimal solution.

#### 3.3.3. Example:
In the concrete block example, suppose the aggregate consumption for $X_1$ changes from 2 tons/block to 2.5 tons/block:
$2.5X_1 + 3X_2 \le 600$

This change in the coefficient of $X_1$ in the aggregate constraint would likely require re-solving the LP problem to find the new optimal production quantities of $X_1$ and $X_2$ and the new maximum profit.

## 4. Practical Tools for Sensitivity Analysis

Most LP solvers provide sensitivity analysis reports automatically after finding an optimal solution. These reports typically include:

*   **Variable Information:**
    *   Final Value (optimal value of the decision variable)
    *   Reduced Cost
    *   Allowable Increase/Decrease (for objective function coefficients)
*   **Constraint Information:**
    *   Final Value (slack/surplus value)
    *   Shadow Price
    *   Allowable Increase/Decrease (for RHS values)

**In Excel:** The "Sensitivity Report" generated by the "Solver" add-in is a prime example.

## 5. Importance for Civil Engineers

*   **Resource Allocation:** Understanding how changes in resource availability (e.g., steel, cement, labor hours) impact project cost and timelines.
*   **Cost-Benefit Analysis:** Evaluating the impact of changes in material costs or labor wages on the overall profitability of a project.
*   **Project Planning and Scheduling:** Identifying critical activities or resources whose performance significantly affects the project outcome.
*   **Contingency Planning:** Assessing the robustness of a plan against potential variations in key parameters.
*   **Decision Making under Uncertainty:** Providing insights into the flexibility and resilience of a chosen strategy when faced with evolving conditions.
*   **Evaluating New Technologies/Methods:** Understanding how changes in process efficiency (constraint coefficients) might alter optimal production or construction methods.

## 6. Practice Questions and Exercises

---

**Question 1:**
A construction company is planning the production of two types of precast concrete beams, Type A and Type B, for a bridge project. The objective is to maximize profit.
Let $X_A$ be the number of Type A beams and $X_B$ be the number of Type B beams.

The profit per beam is:
*   Type A: $150
*   Type B: $120

The constraints are based on available raw materials:
*   Cement: $4X_A + 3X_B \le 1200$ kg
*   Aggregate: $2X_A + 5X_B \le 1000$ kg
*   Labor: $1X_A + 2X_B \le 400$ labor hours

The optimal solution obtained from an LP solver is:
$X_A = 225$, $X_B = 75$
Maximum Profit (Z) = $42,750

The sensitivity report provides the following (partial) information:

| Variable | Reduced Cost | Allowable Increase | Allowable Decrease |
| :------- | :----------- | :----------------- | :----------------- |
| $X_A$    | 0            | 75                 | 50                 |
| $X_B$    | 0            | 25                 | 75                 |

| Constraint | Shadow Price | Allowable Increase | Allowable Decrease |
| :--------- | :----------- | :----------------- | :----------------- |
| Cement     | 25           | 200                | 150                |
| Aggregate  | 10           | 100                | 50                 |
| Labor      | 50           | 50                 | 100                |

**a) Interpret the shadow price of the Cement constraint.**
**b) If the profit per Type A beam increases to $180, will the optimal production quantities of $X_A$ and $X_B$ change? Explain your reasoning.**
**c) If the available cement increases by 100 kg, what is the expected change in the maximum profit?**
**d) If the available aggregate decreases by 60 kg, what is the expected change in the maximum profit?**
**e) Suppose the company finds a new, more efficient curing process for Type B beams, reducing the labor required from 2 hours/beam to 1.5 hours/beam. How would this change likely affect the optimal solution?**

---

**Answer 1:**

**a) Interpretation of the shadow price of the Cement constraint:**
The shadow price of the Cement constraint is $25. This means that for every 1 kg increase in the available cement, the maximum profit is expected to increase by $25, assuming all other parameters remain unchanged and the optimal basis does not change.

**b) Impact of increased profit for Type A beams:**
The current profit for Type A is $150. The allowable increase for the objective function coefficient of $X_A$ is 75.
The new profit is $180, which is an increase of $180 - 150 = $30$.
Since $30 is greater than the allowable increase of $75, the current optimal basis will **not** change. This means that the optimal production quantities ($X_A = 225, X_B = 75$) are likely to remain the same, but the maximum profit will increase.

**c) Expected change in profit with increased cement:**
The increase in cement is 100 kg. The allowable increase for the Cement constraint is 200 kg. Since 100 kg is within the allowable increase range (0 to 200 kg), the shadow price of $25 is valid.
Expected change in profit = Shadow Price of Cement $\times$ Increase in Cement
Expected change in profit = $25/kg \times 100 kg = $2,500$.
The new maximum profit would be $42,750 + $2,500 = $45,250$.

**d) Expected change in profit with decreased aggregate:**
The decrease in aggregate is 60 kg. The allowable decrease for the Aggregate constraint is 50 kg.
Since the decrease of 60 kg is outside the allowable decrease range of 50 kg, the current shadow price of $10 is **not** directly applicable for this magnitude of change. The optimal basis is likely to change, and a new optimal solution needs to be calculated. Therefore, we cannot accurately predict the change in profit using the current shadow price.

**e) Impact of reduced labor for Type B beams:**
The labor constraint coefficient for $X_B$ is changing from 2 hours/beam to 1.5 hours/beam. This is a change in a constraint coefficient. Such changes often alter the LP formulation and typically require re-solving the entire problem to determine the new optimal solution and objective function value. We cannot predict the exact impact without re-solving. However, a reduction in resource usage per unit generally makes the activity more favorable, potentially leading to an increase in the optimal production of Type B beams and a higher overall profit, assuming it remains feasible.

---

## 7. Important Points to Remember

*   **Sensitivity analysis is performed *after* an optimal solution has been found.**
*   **Allowable Increase/Decrease is key:** It tells you the range for which the current basis (and thus the current set of basic and non-basic variables) remains optimal (for objective coefficients) or feasible (for RHS).
*   **Shadow prices are valid only within the allowable range of the RHS.**
*   **Reduced Cost for non-basic variables:** It indicates how much the objective function coefficient must change to make that variable enter the optimal basis.
*   **Changes in constraint coefficients often require re-solving the LP problem.**
*   **In civil engineering, sensitivity analysis is not just an academic exercise; it's a practical tool for robust decision-making.**

---
