---
title: "Linear Programming (LP)"
subject: "OPERATIONS RESEARCH"
module: "Module 1: Introduction to Operations Research (OR)"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf4804463612"
status: "completed"
scrapedAt: "2026-05-20T18:01:43.864Z"
---
## Operations Research: Module 1 - Introduction to OR & Linear Programming (LP)

This module introduces the fundamental concepts of Operations Research and delves into the foundational technique of Linear Programming. Understanding Linear Programming is crucial for developing skills in formulating and solving optimization problems, a core competency addressed by Course Outcome 1 (CO1).

### 1. Introduction to Operations Research (OR)

**What is Operations Research?**

Operations Research (OR) is a scientific approach to decision-making that seeks to determine the best possible course of action under a given set of limitations or constraints. It uses mathematical modeling, statistical analysis, and algorithms to solve complex problems faced by organizations, aiming to optimize the allocation of scarce resources.

**Key Concepts & Definitions:**

*   **Decision Making:** The process of identifying and choosing a course of action to resolve a problem.
*   **Problem:** A situation where actual performance deviates from desired performance.
*   **Objective Function:** A mathematical expression that represents the quantity to be maximized or minimized (e.g., profit, cost, time).
*   **Decision Variables:** The variables that represent the quantities to be determined in a problem.
*   **Constraints:** Limitations or restrictions on the decision variables, often expressed as inequalities or equalities.
*   **Model:** A mathematical representation of a real-world problem.
*   **Optimization:** The process of finding the best possible solution for a given objective function, subject to constraints.
*   **Scarcity of Resources:** The fundamental premise in most OR problems, where available resources (time, money, materials, labor) are limited compared to the demand.

**Phases of Operations Research Study:**

As highlighted in **Gupta & Hira (2008)** and **Srinivasan (2017)**, the study of an OR problem typically involves the following phases:

1.  **Problem Definition:** Clearly understanding and defining the problem, including the objectives and constraints.
2.  **Model Construction:** Developing a mathematical model to represent the problem. This is where Linear Programming often comes into play.
3.  **Solution Generation:** Using appropriate mathematical techniques (like simplex method for LP) to find a solution to the model.
4.  **Model Validation:** Testing the model to ensure it accurately reflects the real-world situation.
5.  **Implementation:** Putting the solution into practice and monitoring its effectiveness.

**Applications of Operations Research:**

OR has a wide range of applications across various industries:

*   **Manufacturing:** Production planning, inventory control, scheduling.
*   **Finance:** Portfolio optimization, financial forecasting.
*   **Marketing:** Advertising budget allocation, market research.
*   **Healthcare:** Hospital resource management, patient scheduling.
*   **Transportation:** Vehicle routing, network design.
*   **Logistics:** Supply chain management, warehousing.

**Textbook References:**

*   **Gupta & Hira (2008):** Provides a comprehensive overview of OR, its history, phases, and various quantitative techniques.
*   **Srinivasan (2017):** Focuses on practical applications of OR principles, with a good introduction to modeling.
*   **Vohra & Arora (2021):** Offers a contemporary perspective on quantitative techniques in management, including OR.

---

### 2. Linear Programming (LP)

Linear Programming (LP) is a mathematical technique used for optimizing a linear objective function subject to a set of linear constraints. It's a cornerstone of Operations Research and directly addresses **CO1: To formulate and solve linear programming problems... (Knowledge Level: K2, K3)**.

**What is a Linear Programming Problem?**

An LP problem involves finding the best possible outcome (maximum profit or minimum cost) in a mathematical model whose requirements are represented by linear relationships.

**Key Components of an LP Problem:**

1.  **Decision Variables:** These are the variables that we need to determine to achieve the optimal solution. They are usually represented by symbols like $x_1, x_2, ..., x_n$.
    *   *Example:* In a furniture manufacturing company, decision variables could be the number of tables ($x_1$) and the number of chairs ($x_2$) to produce.

2.  **Objective Function:** This is a linear function of the decision variables that we want to maximize or minimize.
    *   *Example:* If the profit per table is \$50 and per chair is \$30, the objective function to maximize profit would be: $Z = 50x_1 + 30x_2$.

3.  **Constraints:** These are linear inequalities or equalities that restrict the values of the decision variables. They represent limitations on resources, demand, production capacity, etc.
    *   *Example:*
        *   **Resource Constraint (Wood):** If each table requires 10 units of wood and each chair requires 5 units, and 500 units of wood are available: $10x_1 + 5x_2 \le 500$.
        *   **Resource Constraint (Labor):** If each table requires 2 hours of labor and each chair requires 1 hour, and 100 hours of labor are available: $2x_1 + x_2 \le 100$.

4.  **Non-negativity Constraints:** Decision variables in most practical LP problems cannot take negative values.
    *   *Example:* $x_1 \ge 0$, $x_2 \ge 0$.

**Standard Form of a Linear Programming Problem:**

A LP problem is said to be in standard form if it satisfies the following conditions:

*   **Objective Function:** All objective functions are of the maximization type. (Minimization can be converted by maximizing the negative of the objective function).
*   **Constraints:** All constraints are of the $\le$ type (for maximization problems). (Other types of constraints can be converted using slack, surplus, and artificial variables).
*   **Decision Variables:** All decision variables are non-negative.

**Formulating an LP Problem (CO1 - K2/K3):**

The ability to translate a real-world problem into a mathematical LP model is a critical skill.

**Steps for Formulation:**

1.  **Identify Decision Variables:** Determine what needs to be decided.
2.  **Define the Objective Function:** Express the goal (maximize profit, minimize cost) mathematically.
3.  **Identify and Formulate Constraints:** List all limitations and express them as linear inequalities or equalities involving the decision variables.
4.  **Add Non-negativity Constraints:** Ensure all decision variables are non-negative.

**Example of LP Formulation:**

**Problem:** A company manufactures two products, Product A and Product B. Product A requires 1 hour of Machine 1 and 2 hours of Machine 2. Product B requires 3 hours of Machine 1 and 1 hour of Machine 2. Machine 1 is available for a maximum of 10 hours per day, and Machine 2 is available for a maximum of 8 hours per day. The profit per unit of Product A is \$5, and the profit per unit of Product B is \$7. The company wants to maximize its total profit.

**Formulation:**

1.  **Decision Variables:**
    *   Let $x_1$ be the number of units of Product A to produce.
    *   Let $x_2$ be the number of units of Product B to produce.

2.  **Objective Function:**
    *   Maximize Profit $Z = 5x_1 + 7x_2$

3.  **Constraints:**
    *   **Machine 1 Availability:** $1x_1 + 3x_2 \le 10$
    *   **Machine 2 Availability:** $2x_1 + 1x_2 \le 8$

4.  **Non-negativity Constraints:**
    *   $x_1 \ge 0$
    *   $x_2 \ge 0$

**LP Model:**
Maximize $Z = 5x_1 + 7x_2$
Subject to:
$x_1 + 3x_2 \le 10$
$2x_1 + x_2 \le 8$
$x_1, x_2 \ge 0$

**Textbook References:**

*   **Gupta & Hira (2008):** Chapter on Linear Programming, covering formulation and graphical methods.
*   **Srinivasan (2017):** Applications of LP, with examples in production and resource allocation.
*   **Vohra & Arora (2021):** Introduces LP modeling and solution techniques with management applications.
*   **Hillier & Lieberman (Eleventh Edition):** Offers a thorough theoretical treatment of LP, including formulation.
*   **Rao (Second Edition):** Provides a strong foundation in optimization techniques, including LP.

---

### 3. Solving Linear Programming Problems

Once an LP problem is formulated, the next step is to find its optimal solution. Common methods include the graphical method and the simplex method.

**3.1 Graphical Method (For 2 Decision Variables)**

The graphical method is a visual technique used to solve LP problems with two decision variables. It involves plotting the constraints on a graph and identifying the feasible region and the optimal solution.

**Steps:**

1.  **Graph the Constraints:** For each constraint, treat it as an equality and plot the line on a 2D graph (with decision variables on the axes).
2.  **Identify the Feasible Region:** For each constraint, determine which side of the line satisfies the inequality. The feasible region is the area where all constraints are satisfied simultaneously. It's usually a convex polygon.
3.  **Determine the Corner Points (Vertices):** Find the coordinates of the vertices of the feasible region. These are the points where constraint lines intersect.
4.  **Evaluate the Objective Function:** Substitute the coordinates of each corner point into the objective function.
5.  **Identify the Optimal Solution:** The corner point that yields the maximum (or minimum) value for the objective function is the optimal solution.

**Example (Continuing from previous formulation):**

Maximize $Z = 5x_1 + 7x_2$
Subject to:
1.  $x_1 + 3x_2 \le 10$
2.  $2x_1 + x_2 \le 8$
3.  $x_1, x_2 \ge 0$

**Steps:**

1.  **Graphing Constraints:**
    *   For $x_1 + 3x_2 = 10$: If $x_1=0$, $x_2=10/3$. If $x_2=0$, $x_1=10$. Plot points (0, 10/3) and (10, 0).
    *   For $2x_1 + x_2 = 8$: If $x_1=0$, $x_2=8$. If $x_2=0$, $x_1=4$. Plot points (0, 8) and (4, 0).
    *   $x_1 \ge 0$ implies the region to the right of the y-axis.
    *   $x_2 \ge 0$ implies the region above the x-axis.

2.  **Feasible Region:** The area bounded by the axes and the lines plotted, satisfying all $\le$ conditions.

3.  **Corner Points:**
    *   Point O: (0, 0)
    *   Point A: Intersection of $x_1$-axis and $2x_1 + x_2 = 8$ => (4, 0)
    *   Point B: Intersection of $x_1 + 3x_2 = 10$ and $2x_1 + x_2 = 8$.
        *   From $2x_1 + x_2 = 8$, we get $x_2 = 8 - 2x_1$.
        *   Substitute into $x_1 + 3x_2 = 10$: $x_1 + 3(8 - 2x_1) = 10$
        *   $x_1 + 24 - 6x_1 = 10$
        *   $-5x_1 = -14 \implies x_1 = 14/5 = 2.8$
        *   $x_2 = 8 - 2(2.8) = 8 - 5.6 = 2.4$
        *   Point B: (2.8, 2.4)
    *   Point C: Intersection of $x_2$-axis and $x_1 + 3x_2 = 10$ => (0, 10/3)

4.  **Evaluate Objective Function:**
    *   At O (0, 0): $Z = 5(0) + 7(0) = 0$
    *   At A (4, 0): $Z = 5(4) + 7(0) = 20$
    *   At B (2.8, 2.4): $Z = 5(2.8) + 7(2.4) = 14 + 16.8 = 30.8$
    *   At C (0, 10/3): $Z = 5(0) + 7(10/3) = 70/3 \approx 23.33$

5.  **Optimal Solution:** The maximum profit is \$30.8, occurring at $x_1 = 2.8$ and $x_2 = 2.4$.

**Important Point:** If the objective function line is parallel to one of the binding constraints, there might be multiple optimal solutions along that edge of the feasible region.

**Textbook References:**

*   **Gupta & Hira (2008):** Detailed explanation and graphical examples.
*   **Srinivasan (2017):** Visual approach to understanding LP solutions.
*   **Vohra & Arora (2021):** Practical examples of graphical solutions.
*   **Hillier & Lieberman (Eleventh Edition):** Rigorous treatment of the graphical method.

**3.2 Simplex Method (For more than 2 Decision Variables or Complex Constraints)**

The simplex method is an algebraic iterative procedure to find the optimal solution to an LP problem. It's more powerful than the graphical method as it can handle problems with any number of variables.

**Key Concepts of Simplex Method:**

*   **Slack Variables:** Added to $\le$ constraints to convert them into equalities. They represent unused resources.
*   **Surplus Variables:** Subtracted from $\ge$ constraints to convert them into equalities. They represent exceeding a minimum requirement.
*   **Artificial Variables:** Introduced in equality constraints or $\ge$ constraints (after adding surplus variables) when the origin is not a feasible solution.
*   **Basic Feasible Solution (BFS):** A solution where the number of non-zero variables equals the number of constraints.
*   **Simplex Tableau:** A table used to systematically perform the simplex algorithm.

**The Simplex Algorithm (General Idea):**

1.  **Convert to Standard Form:** Ensure the problem is in standard form (maximization, all $\le$ constraints, non-negative variables). Introduce slack variables.
2.  **Initial Simplex Tableau:** Set up the initial tableau with the objective function (in maximization form) and the constraints.
3.  **Identify Entering Variable:** Choose the variable with the most negative coefficient in the objective function row (for maximization) to enter the basis. This is the pivot column.
4.  **Identify Leaving Variable:** Calculate ratios of the right-hand side (RHS) values to the corresponding coefficients in the pivot column. The row with the smallest non-negative ratio is the pivot row, and its basic variable is the leaving variable.
5.  **Perform Pivot Operations:** Use row operations to make the pivot element (intersection of pivot row and column) equal to 1 and all other elements in the pivot column equal to 0.
6.  **Check for Optimality:** If all coefficients in the objective function row are non-negative, the current BFS is optimal.
7.  **Repeat:** If not optimal, repeat steps 3-6 until optimality is reached.

**Handling Different Constraint Types and Objective Functions:**

*   **Minimization:** Convert to maximization by multiplying the objective function by -1.
*   **$\ge$ Constraints:** Subtract a surplus variable and add an artificial variable.
*   **= Constraints:** Add an artificial variable.

**Methods for Handling Artificial Variables:**

*   **Big M Method:** Assign a large negative penalty (M) to artificial variables in the objective function (for maximization).
*   **Two-Phase Method:** Phase 1: Minimize the sum of artificial variables. If the minimum value is 0, proceed to Phase 2 with the original objective function. If the minimum value is greater than 0, the original problem has no feasible solution.

**Textbook References:**

*   **Gupta & Hira (2008):** Comprehensive coverage of the simplex method, including Big M and Two-Phase methods.
*   **Srinivasan (2017):** Focuses on the computational aspects and implementation of the simplex method.
*   **Vohra & Arora (2021):** Practical step-by-step guide to the simplex method.
*   **Hillier & Lieberman (Eleventh Edition):** Detailed theoretical exposition of the simplex method.
*   **Ravindran, Phillips, and Solberg (1987):** Offers a clear and structured approach to the simplex method.

---

### 4. Special Cases in Linear Programming

**4.1 Unbounded Solution**

An LP problem has an unbounded solution if the objective function can be increased (for maximization) or decreased (for minimization) indefinitely without violating any constraints.

**Graphical Indication:** The feasible region extends infinitely in the direction of optimization, and the objective function line can move further without hitting a boundary.
**Simplex Indication:** In the simplex method, if the pivot column (entering variable) has all non-positive entries (or zero) in the constraint rows, the solution is unbounded.

**4.2 No Feasible Solution (Infeasible Problem)**

An LP problem has no feasible solution if there is no point that satisfies all the constraints simultaneously.

**Graphical Indication:** The feasible regions for different constraints do not overlap.
**Simplex Indication:** If, after reaching the end of the simplex method, any artificial variable remains in the basis with a positive value in the final tableau, the original problem is infeasible.

**4.3 Multiple Optimal Solutions**

This occurs when the optimal value of the objective function is achieved at more than one corner point of the feasible region.

**Graphical Indication:** The objective function line is parallel to one of the binding constraint lines that forms an edge of the feasible region.
**Simplex Indication:** If, in the final optimal tableau, there is a non-basic variable with a zero coefficient in the objective function row, it indicates the possibility of alternative optimal solutions. By making this variable enter the basis, a new, equally optimal BFS can be obtained.

**Textbook References:**

*   **Gupta & Hira (2008):** Dedicated sections on special cases.
*   **Srinivasan (2017):** Discusses how to identify and interpret these cases.
*   **Hillier & Lieberman (Eleventh Edition):** Provides theoretical explanations for these special cases.

---

### 5. Duality in Linear Programming

Duality is a powerful concept in LP where every LP problem (called the primal problem) has an associated LP problem (called the dual problem). The optimal solution of the dual problem provides valuable insights into the optimal solution of the primal problem.

**Key Concepts:**

*   **Primal Problem:** The original LP problem.
*   **Dual Problem:** The associated LP problem derived from the primal.
*   **Symmetric Duality:** When the primal is a maximization problem with all $\le$ constraints, and the dual is a minimization problem with all $\ge$ constraints.
*   **Asymmetric Duality:** When the primal and dual problems do not conform to the symmetric structure.

**Rules for Constructing the Dual:**

| Primal (Maximization)       | Dual (Minimization)           |
| :-------------------------- | :---------------------------- |
| Maximize $Z = c^T x$        | Minimize $W = b^T y$          |
| Subject to $Ax \le b$       | Subject to $A^T y \ge c$      |
| $x \ge 0$                   | $y \ge 0$                     |

Where:
*   $x$ is the vector of decision variables for the primal.
*   $y$ is the vector of decision variables for the dual.
*   $c$ is the vector of coefficients of the objective function of the primal.
*   $b$ is the vector of RHS values of the constraints of the primal.
*   $A$ is the constraint matrix of the primal.
*   $A^T$ is the transpose of $A$.

**Important Theorems of Duality:**

1.  **Weak Duality Theorem:** For any feasible solution of the primal and any feasible solution of the dual, the objective function value of the primal is less than or equal to the objective function value of the dual. ($Z_{primal} \le W_{dual}$)
2.  **Strong Duality Theorem:** If both the primal and dual problems have feasible solutions, then their optimal objective function values are equal. ($Z_{primal}^* = W_{dual}^*$)
3.  **Complementary Slackness:** If $(x^*, y^*)$ is an optimal solution for the primal-dual pair, then for each $i$ and $j$:
    *   $y_i^* (b_i - a_i^T x^*) = 0$ (If dual variable $y_i$ is positive, primal constraint $i$ must be binding).
    *   $x_j^* (c_j - a_j^T y^*) = 0$ (If primal variable $x_j$ is positive, dual constraint $j$ must be binding).

**Interpreting Dual Variables:**

The optimal values of the dual variables ($y_i^*$) are often referred to as the **shadow prices** or **dual prices**. They represent the marginal change in the optimal objective function value of the primal problem for a unit increase in the RHS of the corresponding primal constraint.

*   If $y_i^* > 0$, then a unit increase in $b_i$ will increase the optimal objective value of the primal by $y_i^*$.
*   If $y_i^* = 0$, then a unit increase in $b_i$ will not change the optimal objective value of the primal.

**Textbook References:**

*   **Gupta & Hira (2008):** Thorough explanation of duality theory and its applications.
*   **Srinivasan (2017):** Focuses on the economic interpretation of dual variables.
*   **Rao (Second Edition):** Provides a strong theoretical foundation for duality.
*   **Hillier & Lieberman (Eleventh Edition):** Excellent theoretical treatment of duality.

---

### 6. Practice Questions and Exercises

**Question 1 (Formulation - CO1 K2):**
A company produces two types of fertilizers, Type A and Type B. Type A requires 20 kg of chemical X and 10 kg of chemical Y. Type B requires 15 kg of chemical X and 25 kg of chemical Y. The company has 500 kg of chemical X and 400 kg of chemical Y available. The profit from Type A fertilizer is \$8 per kg, and from Type B is \$10 per kg. Formulate this problem as a linear programming problem to maximize the total profit.

**Answer 1:**
*   **Decision Variables:**
    *   Let $x_1$ be the quantity (in kg) of Type A fertilizer to produce.
    *   Let $x_2$ be the quantity (in kg) of Type B fertilizer to produce.
*   **Objective Function:**
    *   Maximize Profit $Z = 8x_1 + 10x_2$
*   **Constraints:**
    *   Chemical X: $20x_1 + 15x_2 \le 500$
    *   Chemical Y: $10x_1 + 25x_2 \le 400$
*   **Non-negativity Constraints:**
    *   $x_1 \ge 0, x_2 \ge 0$

**Question 2 (Graphical Solution - CO1 K3):**
Solve the following LP problem graphically:
Maximize $Z = 3x_1 + 5x_2$
Subject to:
$x_1 + 2x_2 \le 20$
$3x_1 + 2x_2 \le 30$
$x_1, x_2 \ge 0$

**Answer 2:**
*(Steps involve plotting the lines, identifying the feasible region, finding corner points, and evaluating Z at each corner point. The optimal solution will be found at one of the vertices.)*

*   Corner points and their Z values:
    *   (0,0): Z = 0
    *   (10,0): Z = 30 (Intersection of $3x_1 + 2x_2 = 30$ and $x_2=0$)
    *   (0,10): Z = 50 (Intersection of $x_1 + 2x_2 = 20$ and $x_1=0$)
    *   Intersection of $x_1 + 2x_2 = 20$ and $3x_1 + 2x_2 = 30$:
        Subtracting the first from the second: $2x_1 = 10 \implies x_1 = 5$.
        Substitute $x_1=5$ into $x_1 + 2x_2 = 20$: $5 + 2x_2 = 20 \implies 2x_2 = 15 \implies x_2 = 7.5$.
        Point (5, 7.5): Z = 3(5) + 5(7.5) = 15 + 37.5 = 52.5

*   **Optimal Solution:** Maximum Profit $Z = 52.5$ at $x_1 = 5$ and $x_2 = 7.5$.

**Question 3 (Duality - CO1 K2):**
Write down the dual of the following LP problem:
Minimize $W = 4y_1 + 5y_2$
Subject to:
$3y_1 + 2y_2 \ge 1$
$y_1 + 4y_2 \ge 2$
$y_1, y_2 \ge 0$

**Answer 3:**
*   **Dual (Maximization):**
    *   Maximize $Z = 1x_1 + 2x_2$
    *   Subject to:
        *   $3x_1 + x_2 \le 4$
        *   $2x_1 + 4x_2 \le 5$
    *   $x_1, x_2 \ge 0$

---

### 7. Important Points to Remember

*   **LP Assumption:** LP models assume **linearity** (objective function and constraints are linear) and **certainty** (all parameters are known and constant).
*   **Feasible Region:** The set of all points satisfying all constraints.
*   **Corner Point Theorem:** The optimal solution to an LP problem, if it exists, must occur at one of the corner points of the feasible region.
*   **Simplex Method:** A systematic algebraic procedure for solving LP problems.
*   **Duality:** Provides a different perspective on an LP problem and useful economic interpretations (shadow prices).
*   **Shadow Prices:** Indicate the marginal value of relaxing a constraint.

---

### 8. Alignment with Course Outcomes

This topic directly contributes to:

*   **CO1: To formulate and solve linear programming problems and transportation problems (Knowledge Level: K2, K3)**
    *   **Formulation:** Covered in Section 2 (LP Formulation) and Question 1.
    *   **Solving:** Covered in Section 3 (Graphical and Simplex Methods) and Question 2.
    *   **Duality:** Also a crucial aspect of understanding LP solutions (Section 5, Question 3).

While this module focuses on LP, the foundational understanding of modeling and optimization gained here is essential for other course outcomes in subsequent modules (e.g., understanding optimization principles for evolutionary algorithms in CO4).

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
