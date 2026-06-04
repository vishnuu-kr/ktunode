---
title: "Formulation of LP models"
subject: "OPERATIONS RESEARCH"
module: "Module 1: Introduction to Operations Research (OR)"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf4804463613"
status: "completed"
scrapedAt: "2026-05-20T18:01:44.564Z"
---
## Operations Research: Module 1 - Introduction to Operations Research (OR)
### Topic: Formulation of Linear Programming (LP) Models

This module introduces the fundamental concept of Operations Research (OR) and focuses on the crucial first step: formulating problems as Linear Programming (LP) models. LP is a powerful mathematical technique used to optimize a linear objective function subject to linear constraints. Understanding how to translate real-world scenarios into this mathematical framework is essential for applying OR techniques.

---

### 1. Introduction to Operations Research (OR)

**1.1 What is Operations Research?**

*   **Definition:** Operations Research (OR) is a discipline that deals with the application of scientific methods and techniques to complex decision-making problems. It aims to find optimal or near-optimal solutions for problems involving the allocation of scarce resources. (Gupta & Hira, 2008)
*   **Core Idea:** To use analytical and quantitative methods to improve decision-making and efficiency in various operational contexts.
*   **Key Characteristics:**
    *   **Interdisciplinary:** Draws upon mathematics, statistics, computer science, economics, engineering, and management.
    *   **Scientific Approach:** Employs a systematic and logical approach to problem-solving.
    *   **Model-Based:** Uses mathematical models to represent real-world situations.
    *   **Objective-Oriented:** Focuses on achieving specific objectives, usually optimization (maximization or minimization).
    *   **Decision-Making:** Provides a rational basis for making decisions.

**1.2 Scope and Applications of OR**

OR has a vast range of applications across various sectors:

*   **Manufacturing:** Production planning, inventory control, scheduling, resource allocation.
*   **Finance:** Portfolio optimization, investment analysis, financial planning.
*   **Marketing:** Advertising budget allocation, sales forecasting, pricing strategies.
*   **Healthcare:** Hospital management, patient scheduling, resource allocation.
*   **Transportation & Logistics:** Vehicle routing, network design, supply chain management.
*   **Government & Public Sector:** Urban planning, defense strategy, resource management.
*   **Service Industries:** Staffing, customer service optimization, facility location.

*(Refer to Srinivasan, G. (2017) and Vohra & Arora (2021) for detailed discussions on OR scope and applications.)*

**1.3 Need for Mathematical Modeling in OR**

*   **Simplification:** Real-world problems are complex; models simplify them by capturing essential elements.
*   **Analysis:** Models allow for systematic analysis of relationships between variables.
*   **Prediction:** Models can be used to predict outcomes of different decisions.
*   **Optimization:** Models are crucial for finding the best possible solutions.
*   **Communication:** Models provide a standardized way to represent and communicate problems.

---

### 2. Formulation of Linear Programming (LP) Models

**2.1 What is Linear Programming?**

*   **Definition:** Linear Programming (LP) is a mathematical technique for finding the best possible outcome (e.g., maximum profit, minimum cost) in a linear relationship between decision variables, subject to a set of linear constraints. (Hillier & Leiberman, 2020)
*   **Key Components:**
    *   **Objective Function:** A linear expression representing the quantity to be optimized (maximized or minimized).
    *   **Decision Variables:** The variables whose values need to be determined to achieve the optimal solution.
    *   **Constraints:** Linear inequalities or equalities that limit the values of the decision variables, reflecting resource limitations or other restrictions.
    *   **Non-negativity Constraints:** Decision variables are typically assumed to be non-negative.

**2.2 Characteristics of an LP Model**

For a problem to be solvable using LP, it must exhibit the following characteristics:

*   **Decision Problem:** There must be a clear decision to be made.
*   **Objective:** The objective must be clearly definable and expressible as a linear function.
*   **Resources/Constraints:** There must be limitations or restrictions on the decisions, expressible as linear relationships.
*   **Linearlity:** The objective function and all constraints must be linear. This means variables are not raised to powers other than one, and there are no products of variables.
*   **Divisibility:** The decision variables are assumed to be divisible or continuous (i.e., they can take any non-negative real value). This is often relaxed in integer programming.
*   **Certainty:** All coefficients in the objective function and constraints are known and constant.
*   **Non-negativity:** The decision variables must be non-negative.

*(Gupta & Hira (2008) and Srinivasan (2017) provide excellent foundational explanations of these characteristics.)*

**2.3 Steps for Formulating an LP Model**

1.  **Understand the Problem:** Carefully read and understand the problem statement. Identify the goal and the limitations.
2.  **Identify Decision Variables:** Determine the key decisions that need to be made. These will be represented by variables.
3.  **Formulate the Objective Function:** Express the goal (e.g., profit, cost, time) as a linear mathematical function of the decision variables. Decide whether to maximize or minimize.
4.  **Formulate the Constraints:** Translate all limitations, restrictions, and requirements into linear inequalities or equalities involving the decision variables.
5.  **Add Non-negativity Constraints:** Ensure that all decision variables are non-negative.

**2.4 Examples of LP Model Formulation**

**Example 1: Production Planning (Maximizing Profit)**

**Problem Statement:** A company manufactures two products, A and B. Product A requires 2 hours of labor and 1 kg of raw material. Product B requires 3 hours of labor and 2 kg of raw material. The company has 100 labor hours and 50 kg of raw material available per week. The profit from selling one unit of Product A is $5, and from Product B is $7. The company wants to maximize its weekly profit.

**Formulation:**

1.  **Decision Variables:**
    *   Let $x_1$ be the number of units of Product A to produce per week.
    *   Let $x_2$ be the number of units of Product B to produce per week.

2.  **Objective Function:**
    *   Maximize Profit ($Z$) = $5x_1 + 7x_2$

3.  **Constraints:**
    *   **Labor Constraint:** The total labor hours used cannot exceed the available labor hours.
        $2x_1 + 3x_2 \le 100$ (hours)
    *   **Raw Material Constraint:** The total raw material used cannot exceed the available raw material.
        $1x_1 + 2x_2 \le 50$ (kg)

4.  **Non-negativity Constraints:**
    *   $x_1 \ge 0$
    *   $x_2 \ge 0$

**Complete LP Model:**

Maximize $Z = 5x_1 + 7x_2$

Subject to:
$2x_1 + 3x_2 \le 100$
$x_1 + 2x_2 \le 50$
$x_1 \ge 0, x_2 \ge 0$

*(This example is a classic production problem found in most OR textbooks, including Gupta & Hira (2008) and Srinivasan (2017).)*

**Example 2: Resource Allocation (Minimizing Cost)**

**Problem Statement:** A dietitian needs to formulate a meal plan for a patient using two types of food, X and Y. Each unit of food X contains 200 calories, 10 grams of protein, and 5 grams of fat. Each unit of food Y contains 300 calories, 15 grams of protein, and 7 grams of fat. The patient requires at least 1000 calories, 50 grams of protein, and 30 grams of fat per day. The cost of food X is $0.50 per unit, and the cost of food Y is $0.75 per unit. The dietitian wants to minimize the daily cost of the meal plan.

**Formulation:**

1.  **Decision Variables:**
    *   Let $y_1$ be the number of units of food X to be used per day.
    *   Let $y_2$ be the number of units of food Y to be used per day.

2.  **Objective Function:**
    *   Minimize Cost ($C$) = $0.50y_1 + 0.75y_2$

3.  **Constraints:**
    *   **Calories Constraint:**
        $200y_1 + 300y_2 \ge 1000$ (calories)
    *   **Protein Constraint:**
        $10y_1 + 15y_2 \ge 50$ (grams)
    *   **Fat Constraint:**
        $5y_1 + 7y_2 \ge 30$ (grams)

4.  **Non-negativity Constraints:**
    *   $y_1 \ge 0$
    *   $y_2 \ge 0$

**Complete LP Model:**

Minimize $C = 0.50y_1 + 0.75y_2$

Subject to:
$200y_1 + 300y_2 \ge 1000$
$10y_1 + 15y_2 \ge 50$
$5y_1 + 7y_2 \ge 30$
$y_1 \ge 0, y_2 \ge 0$

*(This type of problem, diet problem, is also a standard in OR literature, found in Vohra & Arora (2021) and Srinivasan (2017).)*

**2.5 Key Concepts and Definitions in LP Formulation**

*   **Decision Variables:** The unknowns that the decision-maker controls and wants to determine (e.g., production quantities, resource allocation amounts).
*   **Objective Function:** A mathematical expression that quantifies the goal of the decision-maker. It's a linear combination of decision variables.
*   **Constraint:** A limitation or restriction imposed on the decision variables due to scarcity of resources, technological limitations, or policy requirements. They are expressed as linear inequalities or equalities.
*   **Feasible Region:** The set of all possible combinations of decision variables that satisfy all the constraints of the LP problem.
*   **Feasible Solution:** Any point within the feasible region.
*   **Optimal Solution:** A feasible solution that yields the best possible value for the objective function.
*   **Model Formulation:** The process of translating a real-world problem into a mathematical LP model.

*(Refer to Hillier & Leiberman (2020) for rigorous definitions and mathematical notation.)*

---

### 3. Practice Questions and Exercises

**Question 1:**
A company manufactures two products, P1 and P2. Each unit of P1 requires 1 hour on machine A and 2 hours on machine B. Each unit of P2 requires 3 hours on machine A and 1 hour on machine B. The available time on machine A is 7 hours per day, and on machine B is 8 hours per day. The profit per unit of P1 is $10, and the profit per unit of P2 is $15. Formulate an LP model to maximize the company's daily profit.

**Answer 1:**

*   **Decision Variables:**
    *   Let $x_1$ be the number of units of product P1 produced per day.
    *   Let $x_2$ be the number of units of product P2 produced per day.

*   **Objective Function:**
    *   Maximize Profit ($Z$) = $10x_1 + 15x_2$

*   **Constraints:**
    *   Machine A constraint: $1x_1 + 3x_2 \le 7$
    *   Machine B constraint: $2x_1 + 1x_2 \le 8$
    *   Non-negativity constraints: $x_1 \ge 0, x_2 \ge 0$

*   **Complete LP Model:**
    Maximize $Z = 10x_1 + 15x_2$
    Subject to:
    $x_1 + 3x_2 \le 7$
    $2x_1 + x_2 \le 8$
    $x_1 \ge 0, x_2 \ge 0$

---

**Question 2:**
A farmer has 100 acres of land to plant wheat and corn. The cost to plant wheat is $20 per acre, and the cost to plant corn is $30 per acre. The farmer has a budget of $2400. The expected profit from wheat is $100 per acre, and from corn is $120 per acre. The farmer wants to maximize profit. Formulate the LP model.

**Answer 2:**

*   **Decision Variables:**
    *   Let $w$ be the number of acres of wheat to plant.
    *   Let $c$ be the number of acres of corn to plant.

*   **Objective Function:**
    *   Maximize Profit ($P$) = $100w + 120c$

*   **Constraints:**
    *   Land availability constraint: $w + c \le 100$
    *   Budget constraint: $20w + 30c \le 2400$
    *   Non-negativity constraints: $w \ge 0, c \ge 0$

*   **Complete LP Model:**
    Maximize $P = 100w + 120c$
    Subject to:
    $w + c \le 100$
    $20w + 30c \le 2400$
    $w \ge 0, c \ge 0$

---

**Question 3:**
A furniture company manufactures tables and chairs. Each table requires 5 hours of carpentry and 2 hours of finishing. Each chair requires 2 hours of carpentry and 3 hours of finishing. The carpentry department has 100 hours available per week, and the finishing department has 80 hours available per week. The profit for a table is $150, and for a chair is $75. Formulate an LP model to maximize profit.

**Answer 3:**

*   **Decision Variables:**
    *   Let $t$ be the number of tables produced per week.
    *   Let $h$ be the number of chairs produced per week.

*   **Objective Function:**
    *   Maximize Profit ($P$) = $150t + 75h$

*   **Constraints:**
    *   Carpentry constraint: $5t + 2h \le 100$
    *   Finishing constraint: $2t + 3h \le 80$
    *   Non-negativity constraints: $t \ge 0, h \ge 0$

*   **Complete LP Model:**
    Maximize $P = 150t + 75h$
    Subject to:
    $5t + 2h \le 100$
    $2t + 3h \le 80$
    $t \ge 0, h \ge 0$

---

### 4. Important Points to Remember

*   **Clarity of Variables:** Ensure your decision variables accurately represent the quantities you need to decide upon.
*   **Linearity is Key:** If the objective function or constraints are non-linear, LP techniques may not be directly applicable.
*   **All Constraints Must Be Linear:** Pay close attention to how you translate real-world limitations into linear equations or inequalities.
*   **Non-negativity is Standard:** Unless specified otherwise, always include non-negativity constraints.
*   **Practice Formulation:** The ability to formulate LP models effectively comes with practice. Work through various examples from textbooks.
*   **Units Consistency:** Ensure that units are consistent across all parts of the model (e.g., hours for labor, kg for raw material).
*   **Real-world Interpretation:** Always interpret your formulated model back into the context of the original problem to ensure it makes sense.

*(Srinivasan (2017) emphasizes the importance of careful, step-by-step formulation to avoid errors.)*

---

### 5. Alignment with Course Outcomes (COs)

*   **CO1: To formulate and solve linear programming problems and transportation problems (Knowledge Level: K2, K3)**
    *   This module directly addresses the "formulate" part of CO1. Understanding formulation is the prerequisite for solving LP problems. The examples and practice questions are designed to build this formulation skill.

---

This concludes Module 1's topic on the Formulation of LP Models. The next steps in OR involve learning methods to solve these formulated models (e.g., Graphical Method, Simplex Method).

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
