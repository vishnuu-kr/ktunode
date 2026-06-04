---
title: "Linear Programming - Problem Formulation"
subject: "QUANTITATIVE TECHNIQUES FOR ENGINEERS"
module: "Module 1: Introduction to Quantitative Techniques: Basics of Operations Research – Applications"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463a5e"
status: "completed"
scrapedAt: "2026-05-20T18:07:18.733Z"
---
# QUANTITATIVE TECHNIQUES FOR ENGINEERS

## Module 1: Introduction to Quantitative Techniques: Basics of Operations Research – Applications

### Topic: Linear Programming - Problem Formulation

---

**Course Outcomes Addressed:**

*   **CO1:** To formulate and solve linear programming and transportation problems (Knowledge Level: K4)

---

### 1. Introduction to Quantitative Techniques and Operations Research (OR)

Quantitative Techniques (QT) are a set of tools and methods used for decision-making and problem-solving in various fields, including engineering. Operations Research (OR) is a discipline that employs these quantitative techniques to find optimal solutions to complex problems, often involving resource allocation, planning, and optimization.

**Key Concepts:**

*   **Operations Research (OR):** The application of scientific methods, mathematical modeling, and analytical techniques to improve the efficiency and effectiveness of complex systems and operations. OR aims to find the "best" possible solution (optimal solution) or a very good solution (near-optimal solution) to a problem.
*   **Model:** A simplified representation of a real-world system or problem. In OR, models are often mathematical in nature.
*   **Optimization:** The process of finding the best possible solution (maximum or minimum value) for a given objective function, subject to certain constraints.
*   **Decision Variables:** The variables whose values are to be determined to achieve the objective.
*   **Objective Function:** A mathematical expression that quantifies the goal to be achieved (e.g., maximize profit, minimize cost).
*   **Constraints:** Limitations or restrictions that must be satisfied by the decision variables, representing limitations in resources, demand, capacity, etc.

**Applications of OR (as per Taha, Tenth edition, 2019 and Paneerselvam, Third edition, 2023):**

Operations Research has a wide range of applications in engineering and beyond:

*   **Manufacturing:** Production planning, scheduling, inventory control, facility location.
*   **Finance:** Portfolio optimization, financial planning, risk management.
*   **Marketing:** Advertising budget allocation, sales forecasting, pricing strategies.
*   **Transportation and Logistics:** Routing, scheduling, network design, fleet management.
*   **Healthcare:** Resource allocation, patient scheduling, hospital management.
*   **Project Management:** Project scheduling (PERT/CPM), resource leveling.
*   **Environmental Engineering:** Pollution control, resource management.

---

### 2. Linear Programming (LP)

Linear Programming is a powerful mathematical technique used for optimizing a linear objective function subject to a set of linear constraints. It is a core topic in Operations Research and is fundamental to many engineering decision-making processes.

**Key Concepts:**

*   **Linearity:** The relationships between the decision variables in the objective function and the constraints must be linear. This means that variables are not squared, multiplied together, or involved in non-linear functions.
*   **Objective Function:** A linear function of the decision variables that we want to maximize or minimize.
    *   *Example:* Maximize $Z = c_1x_1 + c_2x_2$ (where $c_i$ are constants and $x_i$ are decision variables).
*   **Decision Variables:** Variables representing the quantities of activities or choices that need to be determined.
    *   *Example:* $x_1$ = number of units of product A to produce, $x_2$ = number of units of product B to produce.
*   **Constraints:** Linear inequalities or equalities that limit the values of the decision variables. These represent resource limitations, demand requirements, etc.
    *   *Example:* $a_{11}x_1 + a_{12}x_2 \le b_1$ (resource 1 constraint)
*   **Non-negativity Constraints:** Decision variables are typically assumed to be non-negative, as it's usually not possible to produce or use a negative quantity of something.
    *   *Example:* $x_1 \ge 0, x_2 \ge 0$.

**Formulation of an LP Problem:**

The process of formulating an LP problem involves translating a real-world problem into a mathematical model. This typically involves the following steps:

1.  **Identify the Decision Variables:** Clearly define what decisions need to be made and represent them with variables.
2.  **Formulate the Objective Function:** Express the goal (maximization or minimization) as a linear function of the decision variables.
3.  **Formulate the Constraints:** Translate all limitations, restrictions, and requirements into linear inequalities or equalities involving the decision variables.
4.  **Add Non-negativity Constraints:** Ensure that all decision variables are non-negative.

**Important Considerations for Formulation (as highlighted in Hillier & Lieberman, Tenth edition, 2017):**

*   **Clarity and Precision:** Ensure that the problem statement is unambiguous.
*   **Consistency:** Units and measures used in the objective function and constraints must be consistent.
*   **Realism:** The model should accurately reflect the essential characteristics of the real-world problem.
*   **Scope:** Focus on the key factors that influence the decision.

---

### 3. Examples of Linear Programming Problem Formulation

Let's work through a few examples to illustrate the formulation process.

#### Example 1: A Production Planning Problem (Maximizing Profit)

**Problem Statement:** A company manufactures two products, Product A and Product B. Each unit of Product A requires 2 hours of labor and 1 kg of raw material. Each unit of Product B requires 3 hours of labor and 2 kg of raw material. The company has a total of 100 labor hours and 50 kg of raw material available per week. The profit contribution from Product A is $5 per unit, and from Product B is $7 per unit. The company wants to determine the production quantities of Product A and Product B that will maximize its total profit.

**Formulation Steps:**

1.  **Identify Decision Variables:**
    *   Let $x_1$ = number of units of Product A to produce per week.
    *   Let $x_2$ = number of units of Product B to produce per week.

2.  **Formulate the Objective Function:**
    *   The company wants to maximize total profit.
    *   Profit from Product A = $5x_1$
    *   Profit from Product B = $7x_2$
    *   **Maximize $Z = 5x_1 + 7x_2$**

3.  **Formulate the Constraints:**
    *   **Labor Constraint:**
        *   Labor required for Product A = $2x_1$ hours
        *   Labor required for Product B = $3x_2$ hours
        *   Total labor available = 100 hours
        *   **$2x_1 + 3x_2 \le 100$**
    *   **Raw Material Constraint:**
        *   Raw material required for Product A = $1x_1$ kg
        *   Raw material required for Product B = $2x_2$ kg
        *   Total raw material available = 50 kg
        *   **$x_1 + 2x_2 \le 50$**

4.  **Add Non-negativity Constraints:**
    *   The number of units produced cannot be negative.
    *   **$x_1 \ge 0$**
    *   **$x_2 \ge 0$**

**Complete LP Formulation:**

Maximize $Z = 5x_1 + 7x_2$

Subject to:
$2x_1 + 3x_2 \le 100$ (Labor Constraint)
$x_1 + 2x_2 \le 50$ (Raw Material Constraint)
$x_1 \ge 0, x_2 \ge 0$

---

#### Example 2: A Blending Problem (Minimizing Cost)

**Problem Statement:** A feed company needs to produce a special animal feed by blending two raw materials, Material 1 and Material 2. The feed must contain at least 8% protein and at most 5% fiber. Material 1 contains 10% protein and 4% fiber. Material 2 contains 6% protein and 6% fiber. The cost of Material 1 is $2 per kg, and the cost of Material 2 is $1.5 per kg. The company wants to determine the proportions of Material 1 and Material 2 to use in the blend to minimize the total cost, while meeting the protein and fiber requirements.

**Formulation Steps:**

1.  **Identify Decision Variables:**
    *   Let $x_1$ = proportion (or percentage) of Material 1 in the blend.
    *   Let $x_2$ = proportion (or percentage) of Material 2 in the blend.

2.  **Formulate the Objective Function:**
    *   The company wants to minimize the total cost per kg of blend.
    *   Cost of Material 1 = $2x_1$
    *   Cost of Material 2 = $1.5x_2$
    *   **Minimize $Z = 2x_1 + 1.5x_2$**

3.  **Formulate the Constraints:**
    *   **Total Proportion Constraint:** The proportions must add up to 1 (or 100%).
        *   **$x_1 + x_2 = 1$**
    *   **Protein Constraint (at least 8%):**
        *   Protein from Material 1 = $0.10x_1$
        *   Protein from Material 2 = $0.06x_2$
        *   Total protein in the blend = $0.10x_1 + 0.06x_2$
        *   This total protein must be at least 8% of the blend.
        *   **$0.10x_1 + 0.06x_2 \ge 0.08$**
    *   **Fiber Constraint (at most 5%):**
        *   Fiber from Material 1 = $0.04x_1$
        *   Fiber from Material 2 = $0.06x_2$
        *   Total fiber in the blend = $0.04x_1 + 0.06x_2$
        *   This total fiber must be at most 5% of the blend.
        *   **$0.04x_1 + 0.06x_2 \le 0.05$**

4.  **Add Non-negativity Constraints:**
    *   Proportions cannot be negative.
    *   **$x_1 \ge 0$**
    *   **$x_2 \ge 0$**

**Complete LP Formulation:**

Minimize $Z = 2x_1 + 1.5x_2$

Subject to:
$x_1 + x_2 = 1$ (Total Proportion)
$0.10x_1 + 0.06x_2 \ge 0.08$ (Protein Requirement)
$0.04x_1 + 0.06x_2 \le 0.05$ (Fiber Limitation)
$x_1 \ge 0, x_2 \ge 0$

---

#### Example 3: A Diet Problem (Minimizing Cost)

**Problem Statement:** A person wants to plan a daily diet to meet certain nutritional requirements at minimum cost. The diet consists of two foods, Food X and Food Y. Food X costs $0.20 per unit and provides 2 units of vitamin A and 1 unit of vitamin C. Food Y costs $0.30 per unit and provides 1 unit of vitamin A and 3 units of vitamin C. The daily requirement is at least 10 units of vitamin A and at least 12 units of vitamin C.

**Formulation Steps:**

1.  **Identify Decision Variables:**
    *   Let $x_1$ = number of units of Food X to consume daily.
    *   Let $x_2$ = number of units of Food Y to consume daily.

2.  **Formulate the Objective Function:**
    *   The goal is to minimize the total daily cost.
    *   Cost of Food X = $0.20x_1$
    *   Cost of Food Y = $0.30x_2$
    *   **Minimize $Z = 0.20x_1 + 0.30x_2$**

3.  **Formulate the Constraints:**
    *   **Vitamin A Requirement:**
        *   Vitamin A from Food X = $2x_1$ units
        *   Vitamin A from Food Y = $1x_2$ units
        *   Total Vitamin A = $2x_1 + x_2$
        *   Daily requirement $\ge$ 10 units
        *   **$2x_1 + x_2 \ge 10$**
    *   **Vitamin C Requirement:**
        *   Vitamin C from Food X = $1x_1$ units
        *   Vitamin C from Food Y = $3x_2$ units
        *   Total Vitamin C = $x_1 + 3x_2$
        *   Daily requirement $\ge$ 12 units
        *   **$x_1 + 3x_2 \ge 12$**

4.  **Add Non-negativity Constraints:**
    *   The number of units of food cannot be negative.
    *   **$x_1 \ge 0$**
    *   **$x_2 \ge 0$**

**Complete LP Formulation:**

Minimize $Z = 0.20x_1 + 0.30x_2$

Subject to:
$2x_1 + x_2 \ge 10$ (Vitamin A Requirement)
$x_1 + 3x_2 \ge 12$ (Vitamin C Requirement)
$x_1 \ge 0, x_2 \ge 0$

---

### 4. Types of Constraints in LP

Linear programming problems can involve various types of constraints:

*   **"Less than or equal to" ($\le$):** Represents limitations on resources, maximum capacities, or upper bounds.
    *   *Example:* Available labor hours, maximum production capacity.
*   **"Greater than or equal to" ($\ge$):** Represents minimum requirements, demand targets, or lower bounds.
    *   *Example:* Minimum protein intake, minimum production output.
*   **"Equal to" (=):** Represents fixed requirements, exact quantities, or balance equations.
    *   *Example:* Total proportion of ingredients in a blend, exact demand to be met.

**Converting Constraints:**

*   **Equality to Inequalities:** An equality constraint $a_1x_1 + a_2x_2 = b$ can be represented by two inequality constraints:
    *   $a_1x_1 + a_2x_2 \le b$
    *   $a_1x_1 + a_2x_2 \ge b$ (which can be rewritten as $-a_1x_1 - a_2x_2 \le -b$)
*   **Changing Inequality Direction:** Multiplying an inequality by -1 reverses the direction of the inequality sign.
    *   $2x_1 + 3x_2 \le 100 \implies -2x_1 - 3x_2 \ge -100$

---

### 5. Practice Questions/Exercises

**Question 1:**
A chemical company produces two products, Product P and Product Q, using two different processes. Process 1 can be used for P or Q and requires 1 hour of machine time and 2 kg of raw material. Process 2 can be used for P or Q and requires 2 hours of machine time and 1 kg of raw material.
The company has 100 hours of machine time and 80 kg of raw material available per day.
Product P yields a profit of $4 per unit, and Product Q yields a profit of $5 per unit.
Formulate an LP problem to determine the number of units of Product P and Product Q to produce daily to maximize profit.

**Answer to Question 1:**

1.  **Decision Variables:**
    *   Let $x_1$ = number of units of Product P to produce daily.
    *   Let $x_2$ = number of units of Product Q to produce daily.

2.  **Objective Function:**
    *   Maximize $Z = 4x_1 + 5x_2$

3.  **Constraints:**
    *   **Machine Time Constraint:** $1x_1 + 2x_2 \le 100$
    *   **Raw Material Constraint:** $2x_1 + 1x_2 \le 80$

4.  **Non-negativity Constraints:**
    *   $x_1 \ge 0, x_2 \ge 0$

**Complete LP Formulation:**

Maximize $Z = 4x_1 + 5x_2$

Subject to:
$x_1 + 2x_2 \le 100$
$2x_1 + x_2 \le 80$
$x_1 \ge 0, x_2 \ge 0$

---

**Question 2:**
A furniture manufacturer produces two types of tables: dining tables and coffee tables. The production of a dining table requires 2 hours of carpentry and 1 hour of finishing. The production of a coffee table requires 1 hour of carpentry and 2 hours of finishing. The carpenter is available for 100 hours per week, and the finisher is available for 80 hours per week.
The profit from a dining table is $60, and the profit from a coffee table is $70.
Formulate an LP problem to determine the number of dining tables and coffee tables to produce weekly to maximize profit.

**Answer to Question 2:**

1.  **Decision Variables:**
    *   Let $x_1$ = number of dining tables to produce weekly.
    *   Let $x_2$ = number of coffee tables to produce weekly.

2.  **Objective Function:**
    *   Maximize $Z = 60x_1 + 70x_2$

3.  **Constraints:**
    *   **Carpentry Constraint:** $2x_1 + 1x_2 \le 100$
    *   **Finishing Constraint:** $1x_1 + 2x_2 \le 80$

4.  **Non-negativity Constraints:**
    *   $x_1 \ge 0, x_2 \ge 0$

**Complete LP Formulation:**

Maximize $Z = 60x_1 + 70x_2$

Subject to:
$2x_1 + x_2 \le 100$
$x_1 + 2x_2 \le 80$
$x_1 \ge 0, x_2 \ge 0$

---

**Question 3:**
A farmer has 200 acres of land to plant with corn and soybeans. The cost of planting corn is $40 per acre, and the cost of planting soybeans is $60 per acre. The farmer has a budget of $10,000 for planting. The farmer expects to get a yield of 50 bushels of corn per acre and 40 bushels of soybeans per acre. The selling price of corn is $3 per bushel, and the selling price of soybeans is $4 per bushel. The farmer wants to maximize the total revenue.
Formulate an LP problem to determine the number of acres to plant with corn and soybeans.

**Answer to Question 3:**

1.  **Decision Variables:**
    *   Let $x_1$ = number of acres to plant with corn.
    *   Let $x_2$ = number of acres to plant with soybeans.

2.  **Objective Function:**
    *   Revenue from corn = (50 bushels/acre) * ($3/bushel) * $x_1$ acres = $150x_1$
    *   Revenue from soybeans = (40 bushels/acre) * ($4/bushel) * $x_2$ acres = $160x_2$
    *   Maximize $Z = 150x_1 + 160x_2$

3.  **Constraints:**
    *   **Land Constraint:** $x_1 + x_2 \le 200$
    *   **Budget Constraint:** $40x_1 + 60x_2 \le 10000$ (or simplify by dividing by 20: $2x_1 + 3x_2 \le 500$)

4.  **Non-negativity Constraints:**
    *   $x_1 \ge 0, x_2 \ge 0$

**Complete LP Formulation:**

Maximize $Z = 150x_1 + 160x_2$

Subject to:
$x_1 + x_2 \le 200$
$2x_1 + 3x_2 \le 500$
$x_1 \ge 0, x_2 \ge 0$

---

### 6. Important Points to Remember

*   **Identify the "What" to Decide:** This gives you the decision variables.
*   **Identify the Goal:** This is your objective function (maximize profit/revenue, minimize cost/time).
*   **Identify the "Limits" and "Requirements":** These translate into your constraints.
*   **Check for Linearity:** Ensure all relationships are linear. If not, LP is not directly applicable (though approximations might be possible).
*   **Non-negativity is Crucial:** Unless otherwise specified, decision variables in practical problems cannot be negative.
*   **Units Matter:** Ensure consistency in units across the objective function and constraints.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### References:

*   Paneerselvam, R. (2023). *Operations Research*. PHI Learning. (Third edition)
*   Taha, H. A. (2019). *Operations Research: An Introduction*. Pearson. (Tenth edition)
*   Hillier, F. S., & Lieberman, G. J. (2017). *Introduction to Operations Research*. McGraw Hill. (Tenth edition)

---