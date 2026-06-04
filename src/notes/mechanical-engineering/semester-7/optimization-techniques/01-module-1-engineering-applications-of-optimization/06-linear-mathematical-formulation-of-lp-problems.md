---
title: "Linear, Mathematical formulation of LP Problems"
subject: "OPTIMIZATION TECHNIQUES"
module: "Module 1: Engineering applications of optimization"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf48044641c7"
status: "completed"
scrapedAt: "2026-05-20T18:15:53.837Z"
---
# Optimization Techniques: Module 1 - Engineering Applications of Optimization

## Topic: Linear Programming (LP) - Mathematical Formulation of LP Problems

---

### **1. Introduction to Optimization and Linear Programming**

**What is Optimization?**
Optimization is the process of finding the best solution from a set of feasible solutions, usually by minimizing or maximizing an objective function. In engineering, optimization is crucial for designing efficient, cost-effective, and high-performing systems.

**Engineering Applications of Optimization:**
Optimization techniques are widely used in various engineering disciplines, including:

*   **Mechanical Engineering:** Design of structures for minimum weight, optimal material selection, control system design.
*   **Civil Engineering:** Planning construction projects, resource allocation, traffic flow optimization.
*   **Electrical Engineering:** Circuit design, power system optimization, signal processing.
*   **Chemical Engineering:** Process design and control, reaction optimization, material balance.
*   **Industrial Engineering:** Production planning, inventory management, scheduling, logistics.

**What is Linear Programming (LP)?**
Linear Programming is a mathematical technique used for optimizing a linear objective function subject to a set of linear constraints. It assumes that all relationships in the problem are linear and that decisions involve allocating limited resources to competing activities.

**Core Components of an LP Problem:**

*   **Decision Variables:** Quantities that need to be determined to optimize the objective.
*   **Objective Function:** A linear expression representing the quantity to be maximized or minimized (e.g., profit, cost, resource utilization).
*   **Constraints:** Linear inequalities or equalities that limit the values of the decision variables, representing resource limitations, demands, or other restrictions.
*   **Non-negativity Constraints:** Decision variables typically cannot be negative.

---

### **2. Mathematical Formulation of Linear Programming Problems (Learning Outcome 1: CO1)**

The process of formulating an LP problem involves translating a real-world scenario into a mathematical model consisting of an objective function and constraints. This requires careful identification of decision variables, the objective, and the limitations.

**General Form of an LP Problem:**

**Maximize (or Minimize) $Z = c_1x_1 + c_2x_2 + \dots + c_nx_n$** (Objective Function)

**Subject to:**
$a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n \le b_1$
$a_{21}x_1 + a_{22}x_2 + \dots + a_{2n}x_n \le b_2$
...
$a_{m1}x_1 + a_{m2}x_2 + \dots + a_{mn}x_n \le b_m$
(Constraints)

And
$x_1 \ge 0, x_2 \ge 0, \dots, x_n \ge 0$
(Non-negativity Constraints)

**Where:**
*   $Z$ is the objective function value.
*   $x_j$ ($j=1, \dots, n$) are the decision variables.
*   $c_j$ are the coefficients of the decision variables in the objective function.
*   $a_{ij}$ are the coefficients of the decision variables in the constraints.
*   $b_i$ ($i=1, \dots, m$) are the right-hand side values of the constraints, representing the availability of resources or requirements.

**Key Concepts & Definitions (Rao, Chapter 2; Taha, Chapter 2):**

*   **Feasible Solution:** A set of values for the decision variables that satisfies all the constraints of the LP problem.
*   **Feasible Region:** The set of all feasible solutions. Geometrically, it's the region defined by the intersection of the half-planes representing the constraints.
*   **Optimal Solution:** A feasible solution that yields the best possible value (maximum or minimum) for the objective function.
*   **Corner Point (Extreme Point):** A vertex of the feasible region. In LP, if an optimal solution exists, it will occur at a corner point.
*   **Standard Form:** An LP problem is in standard form if:
    *   The objective function is to be maximized.
    *   All constraints are of the "less than or equal to" type ($\le$).
    *   All decision variables are non-negative ($x_j \ge 0$).
    *   *Note: Most LP problems can be converted to standard form by introducing slack, surplus, and artificial variables.*
*   **Slack Variable:** A non-negative variable added to a "less than or equal to" ($\le$) constraint to convert it into an equality. It represents the unused amount of a resource.
*   **Surplus Variable:** A non-negative variable subtracted from a "greater than or equal to" ($\ge$) constraint to convert it into an equality. It represents the excess amount beyond a requirement.

**Steps for Mathematical Formulation:**

1.  **Identify the Decision Variables:** What quantities do you need to decide on?
2.  **Formulate the Objective Function:** Express the goal (maximize profit, minimize cost, etc.) as a linear function of the decision variables.
3.  **Identify and Formulate the Constraints:** List all the limitations, restrictions, or requirements and express them as linear inequalities or equalities involving the decision variables.
4.  **Define Non-negativity Constraints:** Ensure that the decision variables are non-negative.

---

### **3. Examples of Mathematical Formulation**

**Example 1: Production Planning (Maximizing Profit)**

A company manufactures two products, Product A and Product B.
*   **Product A:** Requires 2 hours of Machine 1 time and 1 hour of Machine 2 time. Profit is $5 per unit.
*   **Product B:** Requires 1 hour of Machine 1 time and 3 hours of Machine 2 time. Profit is $4 per unit.

Available resources:
*   Machine 1: 100 hours available.
*   Machine 2: 150 hours available.

**Formulation:**

1.  **Decision Variables:**
    *   Let $x_1$ = number of units of Product A to manufacture.
    *   Let $x_2$ = number of units of Product B to manufacture.

2.  **Objective Function:** Maximize total profit.
    *   Maximize $Z = 5x_1 + 4x_2$

3.  **Constraints:**
    *   **Machine 1 Constraint:** Total time used on Machine 1 cannot exceed available hours.
        $2x_1 + 1x_2 \le 100$
    *   **Machine 2 Constraint:** Total time used on Machine 2 cannot exceed available hours.
        $1x_1 + 3x_2 \le 150$

4.  **Non-negativity Constraints:**
    *   $x_1 \ge 0$
    *   $x_2 \ge 0$

**Complete LP Model:**
Maximize $Z = 5x_1 + 4x_2$
Subject to:
$2x_1 + x_2 \le 100$
$x_1 + 3x_2 \le 150$
$x_1 \ge 0, x_2 \ge 0$

---

**Example 2: Resource Allocation (Minimizing Cost)**

A company needs to produce at least 100 units of a chemical. Two types of raw materials, Material P and Material Q, can be used.
*   **Material P:** Contains 2 units of chemical per kg and costs $10 per kg.
*   **Material Q:** Contains 5 units of chemical per kg and costs $8 per kg.

**Formulation:**

1.  **Decision Variables:**
    *   Let $y_1$ = amount (in kg) of Material P to use.
    *   Let $y_2$ = amount (in kg) of Material Q to use.

2.  **Objective Function:** Minimize total cost.
    *   Minimize $C = 10y_1 + 8y_2$

3.  **Constraints:**
    *   **Production Requirement:** Total chemical produced must be at least 100 units.
        $2y_1 + 5y_2 \ge 100$

4.  **Non-negativity Constraints:**
    *   $y_1 \ge 0$
    *   $y_2 \ge 0$

**Complete LP Model:**
Minimize $C = 10y_1 + 8y_2$
Subject to:
$2y_1 + 5y_2 \ge 100$
$y_1 \ge 0, y_2 \ge 0$

---

**Example 3: Diet Problem (Minimizing Cost)**

A person wants to meet minimum nutritional requirements from a diet of two foods, Food X and Food Y.
*   **Food X:** Contains 10 units of vitamin A and 2 units of vitamin C per serving. Costs $2 per serving.
*   **Food Y:** Contains 5 units of vitamin A and 6 units of vitamin C per serving. Costs $3 per serving.

Nutritional requirements:
*   At least 30 units of vitamin A.
*   At least 24 units of vitamin C.

**Formulation:**

1.  **Decision Variables:**
    *   Let $s_1$ = number of servings of Food X.
    *   Let $s_2$ = number of servings of Food Y.

2.  **Objective Function:** Minimize total cost.
    *   Minimize $Z = 2s_1 + 3s_2$

3.  **Constraints:**
    *   **Vitamin A Requirement:**
        $10s_1 + 5s_2 \ge 30$
    *   **Vitamin C Requirement:**
        $2s_1 + 6s_2 \ge 24$

4.  **Non-negativity Constraints:**
    *   $s_1 \ge 0$
    *   $s_2 \ge 0$

**Complete LP Model:**
Minimize $Z = 2s_1 + 3s_2$
Subject to:
$10s_1 + 5s_2 \ge 30$
$2s_1 + 6s_2 \ge 24$
$s_1 \ge 0, s_2 \ge 0$

---

### **4. Converting to Standard Form**

To solve LP problems using algorithms like the Simplex method, it's often necessary to convert them into a standard form.

**Rules for Conversion:**

*   **Objective Function:** If the objective is to minimize, convert it to maximization by multiplying the objective function by -1.
    *   Minimize $Z \iff$ Maximize $(-Z)$
*   **Constraints:**
    *   **$\le$ Constraints:** Add a **slack variable** to convert to an equality.
        $a_1x_1 + \dots + a_nx_n \le b_i \implies a_1x_1 + \dots + a_nx_n + s_i = b_i$, where $s_i \ge 0$.
    *   **$\ge$ Constraints:** Subtract a **surplus variable** to convert to an equality.
        $a_1x_1 + \dots + a_nx_n \ge b_i \implies a_1x_1 + \dots + a_nx_n - e_i = b_i$, where $e_i \ge 0$.
    *   **= Constraints:** Introduce an **artificial variable** to convert to an equality.
        $a_1x_1 + \dots + a_nx_n = b_i \implies a_1x_1 + \dots + a_nx_n + k_i = b_i$, where $k_i \ge 0$.
*   **Non-negativity:** All decision variables (including slack, surplus, and artificial variables) must be non-negative.
*   **Right-Hand Side (RHS):** All RHS values ($b_i$) must be non-negative. If any $b_i$ is negative, multiply the entire constraint by -1 and reverse the inequality sign.

**Handling Equality and $\ge$ Constraints (Artificial Variables):**
When converting $\ge$ or $=$ constraints to equalities using surplus or artificial variables, these variables do not typically have a physical meaning in the original problem. To ensure the solution of the modified problem corresponds to the original problem, we use techniques like the **Big M method** or the **Two-Phase Simplex method**.

*   **Big M Method:** Add a large penalty (M) to the objective function for each artificial variable introduced. For maximization, subtract $M \times (\text{artificial variable})$. For minimization, add $M \times (\text{artificial variable})$.
*   **Two-Phase Method:** In Phase 1, minimize the sum of artificial variables. If the minimum sum is 0, an optimal solution to the original problem exists. In Phase 2, use the basis from Phase 1 to solve the original LP problem.

**Example: Converting Production Planning Problem to Standard Form**

Maximize $Z = 5x_1 + 4x_2$
Subject to:
$2x_1 + x_2 \le 100$
$x_1 + 3x_2 \le 150$
$x_1 \ge 0, x_2 \ge 0$

**Steps:**
1.  **Objective:** Already maximization.
2.  **Constraints:**
    *   Constraint 1: $\le$, add slack $s_1 \ge 0$.
        $2x_1 + x_2 + s_1 = 100$
    *   Constraint 2: $\le$, add slack $s_2 \ge 0$.
        $x_1 + 3x_2 + s_2 = 150$
3.  **Non-negativity:** $x_1, x_2, s_1, s_2 \ge 0$.

**Standard Form:**
Maximize $Z = 5x_1 + 4x_2 + 0s_1 + 0s_2$
Subject to:
$2x_1 + x_2 + s_1 = 100$
$x_1 + 3x_2 + s_2 = 150$
$x_1, x_2, s_1, s_2 \ge 0$

---

**Example: Converting Diet Problem to Standard Form (using Big M for Minimization)**

Minimize $Z = 2s_1 + 3s_2$
Subject to:
$10s_1 + 5s_2 \ge 30$
$2s_1 + 6s_2 \ge 24$
$s_1 \ge 0, s_2 \ge 0$

**Steps:**
1.  **Objective:** Convert to maximization.
    Maximize $Z' = -2s_1 - 3s_2$
2.  **Constraints:**
    *   Constraint 1: $\ge$, subtract surplus $e_1 \ge 0$ and add artificial variable $k_1 \ge 0$.
        $10s_1 + 5s_2 - e_1 + k_1 = 30$
    *   Constraint 2: $\ge$, subtract surplus $e_2 \ge 0$ and add artificial variable $k_2 \ge 0$.
        $2s_1 + 6s_2 - e_2 + k_2 = 24$
3.  **Non-negativity:** $s_1, s_2, e_1, e_2, k_1, k_2 \ge 0$.
4.  **Big M:** For minimization, we are adding $M$ to the objective for artificial variables. Since we converted to maximization, we subtract $M$ for artificial variables.
    Maximize $Z' = -2s_1 - 3s_2 - M k_1 - M k_2$

**Standard Form (Big M):**
Maximize $Z' = -2s_1 - 3s_2 - M k_1 - M k_2$
Subject to:
$10s_1 + 5s_2 - e_1 + k_1 = 30$
$2s_1 + 6s_2 - e_2 + k_2 = 24$
$s_1, s_2, e_1, e_2, k_1, k_2 \ge 0$

---

### **5. Importance and Applications (Relating to Course Outcomes)**

*   **CO1: Formulate the real world problem as Linear Programming Problem (Knowledge Level: K4)**
    This topic directly addresses CO1 by providing the methodology and examples for translating diverse engineering and business problems into the structured format of an LP problem. Understanding this formulation is the foundational step for any further LP analysis or solution method.

*   **General Importance:**
    *   **Resource Allocation:** Optimizing the use of limited resources (time, money, materials, labor) in manufacturing, project management, and logistics.
    *   **Production Planning:** Determining optimal production quantities to meet demand while minimizing costs or maximizing profits.
    *   **Transportation and Logistics:** Finding the cheapest way to transport goods from origins to destinations.
    *   **Financial Planning:** Portfolio optimization, investment strategies.
    *   **Scheduling:** Staff scheduling, machine scheduling.
    *   **Blended Products:** Determining the optimal mix of raw materials to produce a desired product.

---

### **6. Important Points to Remember**

*   **Linearity is Key:** LP assumes all relationships (objective and constraints) are linear. If non-linear relationships exist, LP cannot be directly applied.
*   **Divisibility:** Decision variables are assumed to be divisible (can take fractional values). If variables must be integers, it becomes an Integer Programming problem.
*   **Certainty:** All coefficients and RHS values are assumed to be known and constant.
*   **Non-negativity:** Decision variables typically represent physical quantities that cannot be negative.
*   **Formulation is an Art:** Carefully defining variables and translating words into mathematical expressions is crucial. Misformulation leads to incorrect solutions.
*   **Standard Form Conversion:** Familiarize yourself with adding slack, surplus, and artificial variables to convert various constraint types into equalities.
*   **Big M/Two-Phase:** Understand the purpose of these methods in handling artificial variables introduced for $\ge$ and $=$ constraints.

---

### **7. Practice Questions & Exercises**

**Question 1:**
A company produces two types of chairs, standard and deluxe.
*   A standard chair requires 2 hours of carpentry and 1 hour of finishing.
*   A deluxe chair requires 3 hours of carpentry and 2 hours of finishing.
The available carpentry hours are 100 per week, and finishing hours are 50 per week.
The profit for a standard chair is $20, and for a deluxe chair is $30.
Formulate this problem as a Linear Programming Problem to maximize the company's profit.

**Solution 1:**
Let $x_1$ = number of standard chairs produced per week.
Let $x_2$ = number of deluxe chairs produced per week.

Objective Function (Maximize Profit):
Maximize $Z = 20x_1 + 30x_2$

Constraints:
*   Carpentry hours: $2x_1 + 3x_2 \le 100$
*   Finishing hours: $1x_1 + 2x_2 \le 50$
*   Non-negativity: $x_1 \ge 0, x_2 \ge 0$

**Complete LP Model:**
Maximize $Z = 20x_1 + 30x_2$
Subject to:
$2x_1 + 3x_2 \le 100$
$x_1 + 2x_2 \le 50$
$x_1 \ge 0, x_2 \ge 0$

---

**Question 2:**
A farmer has 100 acres of land to plant with corn and wheat.
*   Corn requires $100 of fertilizer per acre and yields a profit of $300 per acre.
*   Wheat requires $50 of fertilizer per acre and yields a profit of $250 per acre.
The farmer has a budget of $8000 for fertilizer.
Formulate this problem as a Linear Programming Problem to maximize the farmer's profit.

**Solution 2:**
Let $x_c$ = number of acres planted with corn.
Let $x_w$ = number of acres planted with wheat.

Objective Function (Maximize Profit):
Maximize $Z = 300x_c + 250x_w$

Constraints:
*   Land availability: $x_c + x_w \le 100$
*   Fertilizer budget: $100x_c + 50x_w \le 8000$
*   Non-negativity: $x_c \ge 0, x_w \ge 0$

**Complete LP Model:**
Maximize $Z = 300x_c + 250x_w$
Subject to:
$x_c + x_w \le 100$
$100x_c + 50x_w \le 8000$
$x_c \ge 0, x_w \ge 0$

---

**Question 3:**
Convert the following LP problem into its standard form for maximization:

Minimize $Z = 3x_1 - 2x_2 + 5x_3$
Subject to:
$x_1 + x_2 + x_3 \ge 10$
$2x_1 - x_3 = 15$
$x_1 + 3x_2 - x_3 \le 20$
$x_1 \ge 0, x_2 \ge 0, x_3 \ge 0$

**Solution 3:**
1.  **Objective:** Convert to maximization.
    Maximize $Z' = -3x_1 + 2x_2 - 5x_3$
2.  **Constraints:**
    *   Constraint 1 ($\ge$): Subtract surplus $e_1 \ge 0$, add artificial $k_1 \ge 0$.
        $x_1 + x_2 + x_3 - e_1 + k_1 = 10$
    *   Constraint 2 (=): Add artificial $k_2 \ge 0$.
        $2x_1 - x_3 + k_2 = 15$
    *   Constraint 3 ($\le$): Add slack $s_1 \ge 0$.
        $x_1 + 3x_2 - x_3 + s_1 = 20$
3.  **Non-negativity:** $x_1, x_2, x_3, e_1, s_1, k_1, k_2 \ge 0$.
4.  **Big M (for maximization):** Subtract $M$ for artificial variables.
    Maximize $Z' = -3x_1 + 2x_2 - 5x_3 - M k_1 - M k_2$

**Standard Form (Big M):**
Maximize $Z' = -3x_1 + 2x_2 - 5x_3 - M k_1 - M k_2$
Subject to:
$x_1 + x_2 + x_3 - e_1 + k_1 = 10$
$2x_1 - x_3 + k_2 = 15$
$x_1 + 3x_2 - x_3 + s_1 = 20$
$x_1, x_2, x_3, e_1, s_1, k_1, k_2 \ge 0$

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=fNk_zzaMoEs) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |


### **8. Further Reading & References**

*   **Engineering Optimization: Theory and Practice by S.S. Rao:** Chapter 2 provides a comprehensive overview of LP formulation and its applications.
*   **Operations Research by H.A. Taha:** Chapter 2 details the mathematical formulation of LP problems and their graphical solution.
*   **Operations Research by Kanti Swarup, P.K. Gupta and Man Mohan:** Offers detailed explanations and numerous examples on LP formulation.
*   **Optimization for Engineering Design‐ Algorithms and Examples by Kalynamoy Deb:** Discusses LP in the context of engineering design problems.
*   **Operations Research – Principles and Practice by A. Ravindran, D. T. Phillips, J. J. Solberg:** Provides a strong foundation in LP formulation and solution methods.

---