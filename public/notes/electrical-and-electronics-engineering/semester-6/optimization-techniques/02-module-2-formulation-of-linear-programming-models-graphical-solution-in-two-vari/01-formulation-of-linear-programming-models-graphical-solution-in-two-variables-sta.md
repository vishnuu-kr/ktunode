---
title: "Formulation of linear programming models, Graphical solution in two variables, Standard form"
subject: "OPTIMIZATION TECHNIQUES"
module: "Module 2: Formulation of linear programming models, Graphical solution in two variables, Standard form"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36693"
status: "completed"
scrapedAt: "2026-05-23T16:30:25.125Z"
---
# OPTIMIZATION TECHNIQUES - Module 2: Formulation, Graphical Solution, and Standard Form

## Module Overview

This module introduces the fundamental concepts of Linear Programming (LP), a powerful mathematical technique for optimizing resource allocation under constraints. We will cover how to formulate LP problems, solve them graphically for two-variable cases, and understand the standard form of LP problems. These skills are crucial for applying optimization techniques to real-world problems, aligning with Course Outcomes CO3, CO4, and CO5.

**Textbooks:**
*   **Engineering Optimization, Methods and Applications** by A Ravindran, K M Ragsdell, G V Reklaitis (John Wiley and Sons, 2006) - **(RRS)**
*   **Introduction to Linear Optimization** by Dimitris Bertsimas, John N Tsitsiklis (Athena Scientific, 1997) - **(BT)**
*   **Stories about Maxima and Minima** by V M Tikhomirov (American Mathematical Society, 1990) - **(T)**

**Course Outcomes Addressed:**
*   **CO3:** To understand and apply linear programming techniques for optimization (Knowledge Level: K3)
*   **CO4:** To explore optimization techniques for constrained problems (Knowledge Level: K3)
*   **CO5:** To explore search techniques and applications in optimization (Knowledge Level: K3)

---

## 1. Formulation of Linear Programming Models

**Learning Outcome:** Understand how to translate real-world optimization problems into mathematical linear programming models.

**Key Concepts:**

*   **Decision Variables:** These are the unknown quantities that we need to determine to achieve the objective. They represent the choices or actions to be taken.
    *   *Example:* Number of units of product A to manufacture, amount of money to invest in different stocks.
*   **Objective Function:** This is a mathematical expression that quantifies the goal we want to achieve (maximize or minimize). It is always a linear function of the decision variables.
    *   *Linearity:* Means the objective function is a sum of terms where each term is a constant multiplied by a single decision variable (no products of variables, no powers, no transcendental functions).
*   **Constraints:** These are limitations or restrictions imposed on the decision variables. They represent resource limitations, policy requirements, or other conditions that must be satisfied. Constraints are also expressed as linear inequalities or equalities.
    *   *Types of Constraints:*
        *   **Resource Constraints:** Limits on available resources (labor, materials, time, budget).
        *   **Demand Constraints:** Minimum requirements for certain products.
        *   **Policy Constraints:** Specific rules or regulations that must be followed.
*   **Non-negativity Constraints:** Decision variables in most real-world LP problems cannot be negative.

**Steps for Formulation:**

1.  **Identify the Decision Variables:** Clearly define what you need to decide.
2.  **Define the Objective Function:** Determine what you want to maximize (e.g., profit, revenue) or minimize (e.g., cost, time) and express it as a linear function of the decision variables.
3.  **Identify and Formulate the Constraints:** List all the limitations and express them as linear inequalities or equalities involving the decision variables.
4.  **Add Non-negativity Constraints:** Ensure all decision variables are non-negative.

**(RRS, Chapter 3):** Emphasizes that a good formulation requires careful problem understanding, clear identification of variables, and accurate representation of the objective and constraints.

**(BT, Chapter 2.1):** Discusses the modeling process, highlighting the importance of linearity and the distinction between objectives and constraints.

---

### Example 1: Product Mix Problem (Manufacturing)

A company manufactures two products, Product X and Product Y. Each unit of Product X requires 2 hours of labor and 3 kg of raw material. Each unit of Product Y requires 3 hours of labor and 2 kg of raw material. The company has a maximum of 120 hours of labor available and 150 kg of raw material available per week. The profit contribution for Product X is $5 per unit, and for Product Y is $4 per unit. The company wants to maximize its total profit.

**Formulation:**

1.  **Decision Variables:**
    *   Let $x_1$ = number of units of Product X to produce per week.
    *   Let $x_2$ = number of units of Product Y to produce per week.

2.  **Objective Function:** Maximize total profit.
    *   Maximize $Z = 5x_1 + 4x_2$

3.  **Constraints:**
    *   **Labor Constraint:** The total labor hours used cannot exceed 120 hours.
        *   $2x_1 + 3x_2 \le 120$
    *   **Raw Material Constraint:** The total raw material used cannot exceed 150 kg.
        *   $3x_1 + 2x_2 \le 150$

4.  **Non-negativity Constraints:**
    *   $x_1 \ge 0$
    *   $x_2 \ge 0$

**Complete LP Model:**

Maximize $Z = 5x_1 + 4x_2$
Subject to:
$2x_1 + 3x_2 \le 120$
$3x_1 + 2x_2 \le 150$
$x_1 \ge 0, x_2 \ge 0$

---

### Example 2: Diet Problem

A nutritionist wants to formulate a diet for a patient that meets certain nutritional requirements at minimum cost. The diet consists of two foods, Food A and Food B.

*   Food A costs $0.20 per unit and contains 2 units of Vitamin 1 and 3 units of Vitamin 2.
*   Food B costs $0.30 per unit and contains 4 units of Vitamin 1 and 2 units of Vitamin 2.

The patient requires at least 10 units of Vitamin 1 and at least 12 units of Vitamin 2.

**Formulation:**

1.  **Decision Variables:**
    *   Let $y_1$ = number of units of Food A to be consumed.
    *   Let $y_2$ = number of units of Food B to be consumed.

2.  **Objective Function:** Minimize total cost.
    *   Minimize $C = 0.20y_1 + 0.30y_2$

3.  **Constraints:**
    *   **Vitamin 1 Requirement:**
        *   $2y_1 + 4y_2 \ge 10$
    *   **Vitamin 2 Requirement:**
        *   $3y_1 + 2y_2 \ge 12$

4.  **Non-negativity Constraints:**
    *   $y_1 \ge 0$
    *   $y_2 \ge 0$

**Complete LP Model:**

Minimize $C = 0.20y_1 + 0.30y_2$
Subject to:
$2y_1 + 4y_2 \ge 10$
$3y_1 + 2y_2 \ge 12$
$y_1 \ge 0, y_2 \ge 0$

---

## 2. Graphical Solution in Two Variables

**Learning Outcome:** Solve linear programming problems with two decision variables using the graphical method.

**Key Concepts:**

*   **Feasible Region:** The set of all points (combinations of decision variables) that satisfy all the constraints of an LP problem simultaneously. Graphically, this is the intersection of all constraint regions.
*   **Feasible Solution:** Any point within the feasible region.
*   **Infeasible Solution:** Any point outside the feasible region.
*   **Corner Point (or Extreme Point):** A point in the feasible region that is the intersection of two or more boundary lines of the constraints.
*   **Fundamental Theorem of Linear Programming:** If an LP problem has an optimal solution, then it occurs at one of the corner points of the feasible region.
*   **Graphical Method Steps:**

1.  **Plot the Constraints:** For each constraint, treat it as an equality ($=$) and plot the corresponding line on a graph where the axes represent the decision variables.
    *   For inequalities ($\le$), shade the region below or to the left of the line (towards the origin if the inequality holds for (0,0)).
    *   For inequalities ($\ge$), shade the region above or to the right of the line (away from the origin if the inequality does not hold for (0,0)).
2.  **Identify the Feasible Region:** The feasible region is the area where all the shaded regions overlap. This region will be a convex polygon.
3.  **Determine the Corner Points:** Find the coordinates of the vertices (corner points) of the feasible region. These are typically found by solving systems of two linear equations corresponding to the boundary lines that intersect at that vertex.
4.  **Evaluate the Objective Function at Each Corner Point:** Substitute the coordinates of each corner point into the objective function.
5.  **Determine the Optimal Solution:**
    *   If maximizing, the corner point yielding the highest objective function value is the optimal solution.
    *   If minimizing, the corner point yielding the lowest objective function value is the optimal solution.

**(RRS, Chapter 4):** Provides a detailed explanation of the graphical method, including plotting constraints, identifying the feasible region, and evaluating the objective function at corner points. It also discusses cases of unbounded solutions and no feasible solutions.

**(BT, Chapter 2.2):** Explains the geometric interpretation of LP problems, the concept of the feasible region, and why optimal solutions occur at corner points.

---

### Example 1 (Continued): Product Mix Problem

Maximize $Z = 5x_1 + 4x_2$
Subject to:
1.  $2x_1 + 3x_2 \le 120$
2.  $3x_1 + 2x_2 \le 150$
3.  $x_1 \ge 0$
4.  $x_2 \ge 0$

**Graphical Solution:**

*   **Plotting Constraints:**
    *   **Constraint 1 ($2x_1 + 3x_2 \le 120$):**
        *   Line: $2x_1 + 3x_2 = 120$
        *   If $x_1 = 0$, $3x_2 = 120 \Rightarrow x_2 = 40$. Point (0, 40).
        *   If $x_2 = 0$, $2x_1 = 120 \Rightarrow x_1 = 60$. Point (60, 0).
        *   Shade below the line (test point (0,0): $2(0) + 3(0) = 0 \le 120$, true).
    *   **Constraint 2 ($3x_1 + 2x_2 \le 150$):**
        *   Line: $3x_1 + 2x_2 = 150$
        *   If $x_1 = 0$, $2x_2 = 150 \Rightarrow x_2 = 75$. Point (0, 75).
        *   If $x_2 = 0$, $3x_1 = 150 \Rightarrow x_1 = 50$. Point (50, 0).
        *   Shade below the line (test point (0,0): $3(0) + 2(0) = 0 \le 150$, true).
    *   **Non-negativity Constraints ($x_1 \ge 0, x_2 \ge 0$):** This restricts us to the first quadrant.

*   **Feasible Region:** The intersection of the shaded regions in the first quadrant. This will be a polygon.

*   **Corner Points:**
    *   **A:** Intersection of $x_1=0$ and $x_2=0$ (Origin) $\Rightarrow (0, 0)$
    *   **B:** Intersection of $x_1=0$ and $2x_1 + 3x_2 = 120$ $\Rightarrow x_1=0, 3x_2 = 120 \Rightarrow x_2 = 40$. Point $(0, 40)$.
    *   **C:** Intersection of $3x_1 + 2x_2 = 150$ and $x_1=50$ (when $x_2=0$) $\Rightarrow (50, 0)$.
    *   **D:** Intersection of $2x_1 + 3x_2 = 120$ and $3x_1 + 2x_2 = 150$.
        *   Multiply first equation by 3: $6x_1 + 9x_2 = 360$
        *   Multiply second equation by 2: $6x_1 + 4x_2 = 300$
        *   Subtract the second from the first: $5x_2 = 60 \Rightarrow x_2 = 12$.
        *   Substitute $x_2=12$ into $2x_1 + 3x_2 = 120$: $2x_1 + 3(12) = 120 \Rightarrow 2x_1 + 36 = 120 \Rightarrow 2x_1 = 84 \Rightarrow x_1 = 42$.
        *   Point D is $(42, 12)$.

*   **Evaluate Objective Function at Corner Points:**
    *   **A (0, 0):** $Z = 5(0) + 4(0) = 0$
    *   **B (0, 40):** $Z = 5(0) + 4(40) = 160$
    *   **C (50, 0):** $Z = 5(50) + 4(0) = 250$
    *   **D (42, 12):** $Z = 5(42) + 4(12) = 210 + 48 = 258$

*   **Optimal Solution:** The maximum profit is $258$, occurring at $x_1 = 42$ and $x_2 = 12$.

**Graphical Representation:**
(Imagine a graph here with $x_1$ on the x-axis and $x_2$ on the y-axis. Plot the lines $2x_1 + 3x_2 = 120$ and $3x_1 + 2x_2 = 150$. The feasible region is a quadrilateral with vertices at (0,0), (0,40), (50,0), and (42,12). You would visually confirm the feasible region and identify the corner points.)

---

### Special Cases in Graphical Solution:

*   **No Feasible Region:** If the constraint regions do not overlap, the problem has no feasible solution. This can happen with contradictory constraints (e.g., $x_1 \ge 10$ and $x_1 \le 5$).
*   **Unbounded Feasible Region:** The feasible region might extend infinitely in one or more directions.
    *   If the objective function can be increased indefinitely within the feasible region (for maximization), the solution is unbounded.
    *   If the objective function can be decreased indefinitely (for minimization), the solution is unbounded.
    *   *Important:* An unbounded feasible region does not necessarily mean an unbounded solution. The objective function might still have a finite optimal value at a corner point.
*   **Multiple Optimal Solutions:** If the objective function line is parallel to one of the binding constraints forming an edge of the feasible region, then all points along that edge (including the two corner points it connects) are optimal solutions.

**(RRS, Section 4.4):** Discusses these special cases with illustrations.

---

## 3. Standard Form of Linear Programming Problems

**Learning Outcome:** Understand and convert LP problems into their standard form.

**Key Concepts:**

*   **Standard Form:** An LP problem is in standard form if it meets the following criteria:
    1.  **Objective Function:** It is a minimization or maximization of a linear objective function.
    2.  **Constraints:** All constraints are equalities ($=$).
    3.  **Right-Hand Sides (RHS):** All RHS of the equality constraints are non-negative.
    4.  **Decision Variables:** All decision variables are non-negative.

*   **Why Standard Form?** Many algorithms for solving LP problems (like the Simplex method) require the problem to be in standard form.

*   **Conversions:**

    1.  **Maximization to Minimization (and vice-versa):**
        *   Maximize $Z = c_1x_1 + c_2x_2 + ... + c_nx_n$ is equivalent to Minimize $Z' = -Z = -c_1x_1 - c_2x_2 - ... - c_nx_n$.
        *   Minimizing $Z$ is equivalent to Maximizing $Z' = -Z$.

    2.  **Inequality Constraints ($\le$ or $\ge$):**
        *   **Less than or equal to ($\le$):** Introduce a **slack variable** (non-negative) to convert the inequality into an equality.
            *   $a_1x_1 + a_2x_2 + ... + a_nx_n \le b$ becomes $a_1x_1 + a_2x_2 + ... + a_nx_n + s = b$, where $s \ge 0$.
            *   The slack variable represents the unused amount of the resource.
        *   **Greater than or equal to ($\ge$):** Introduce a **surplus variable** (non-negative) to convert the inequality into an equality.
            *   $a_1x_1 + a_2x_2 + ... + a_nx_n \ge b$ becomes $a_1x_1 + a_2x_2 + ... + a_nx_n - e = b$, where $e \ge 0$.
            *   The surplus variable represents the excess amount over the requirement.
            *   *Issue:* Surplus variables don't directly contribute to the objective function and might require an initial feasible solution, often handled by introducing **artificial variables** in more advanced methods (like the Big M or Two-Phase Simplex). For basic understanding, we focus on the conversion to equalities.

    3.  **Unrestricted Variables:** If a variable can take any real value (positive, negative, or zero), replace it with the difference of two non-negative variables.
        *   If $x$ is unrestricted, let $x = x^+ - x^-$, where $x^+ \ge 0$ and $x^- \ge 0$.

    4.  **Negative RHS:** If any constraint has a negative RHS, multiply the entire constraint equation by -1, reversing the inequality sign. If it's an equality constraint with a negative RHS, multiply by -1 to make the RHS non-negative.
        *   $a_1x_1 + ... + a_nx_n = -b$ becomes $-a_1x_1 - ... - a_nx_n = b$.

**(RRS, Chapter 3.4):** Explains the conversion process to standard form using slack and surplus variables, and the handling of unrestricted variables.

**(BT, Chapter 2.3):** Discusses the standard form and canonical form of LP problems and the algebraic manipulations required for conversion.

---

### Example: Converting to Standard Form

Consider the following LP problem:

Maximize $Z = 3x_1 + 2x_2$
Subject to:
1.  $x_1 + 2x_2 \le 5$
2.  $2x_1 + x_2 \ge 4$
3.  $x_1 + x_2 = 3$
4.  $x_1 \ge 0$
5.  $x_2$ is unrestricted.

**Conversion Steps:**

1.  **Objective Function:** Convert maximization to minimization.
    *   Minimize $Z' = -Z = -3x_1 - 2x_2$

2.  **Inequalities to Equalities:**
    *   **Constraint 1 ($\le$):** Add a slack variable $s_1 \ge 0$.
        *   $x_1 + 2x_2 + s_1 = 5$
    *   **Constraint 2 ($\ge$):** Subtract a surplus variable $e_2 \ge 0$.
        *   $2x_1 + x_2 - e_2 = 4$

3.  **Unrestricted Variable:** Replace $x_2$ with $x_2^+ - x_2^-$, where $x_2^+, x_2^- \ge 0$.

4.  **Non-negativity:** Ensure all variables are non-negative.

**Putting it all together:**

*   **New Decision Variables:** $x_1, x_2^+, x_2^-, s_1, e_2$ (all $\ge 0$).

*   **Objective Function:** Minimize $Z' = -3x_1 - 2(x_2^+ - x_2^-) = -3x_1 - 2x_2^+ + 2x_2^-$

*   **Constraints:**
    *   $x_1 + 2(x_2^+ - x_2^-) + s_1 = 5 \Rightarrow x_1 + 2x_2^+ - 2x_2^- + s_1 = 5$
    *   $2x_1 + (x_2^+ - x_2^-) - e_2 = 4 \Rightarrow 2x_1 + x_2^+ - x_2^- - e_2 = 4$
    *   $x_1 + (x_2^+ - x_2^-) = 3 \Rightarrow x_1 + x_2^+ - x_2^- = 3$

**Standard Form LP:**

Minimize $Z' = -3x_1 - 2x_2^+ + 2x_2^-$
Subject to:
$x_1 + 2x_2^+ - 2x_2^- + s_1 = 5$
$2x_1 + x_2^+ - x_2^- - e_2 = 4$
$x_1 + x_2^+ - x_2^- = 3$
$x_1 \ge 0, x_2^+ \ge 0, x_2^- \ge 0, s_1 \ge 0, e_2 \ge 0$

---

## 4. Linking to Course Outcomes

This module directly addresses:

*   **CO3: To understand and apply linear programming techniques for optimization (Knowledge Level: K3)**
    *   **Formulation:** We learned to translate real-world problems into LP models.
    *   **Graphical Solution:** We learned a method to find optimal solutions for simple LP problems.
    *   **Standard Form:** We understand the foundational structure required for more advanced LP algorithms.

*   **CO4: To explore optimization techniques for constrained problems (Knowledge Level: K3)**
    *   Linear programming is a primary technique for constrained optimization. The graphical method explicitly visualizes how constraints define the feasible region where optimal solutions exist.

*   **CO5: To explore search techniques and applications in optimization (Knowledge Level: K3)**
    *   The graphical method involves searching for the optimal solution among the corner points of the feasible region. This is a form of discrete search. Understanding LP lays the groundwork for understanding other search techniques used in optimization.

---

## Practice Questions

**Question 1 (Formulation):**
A company manufactures tables and chairs. Each table requires 4 hours of carpentry and 2 hours of finishing. Each chair requires 3 hours of carpentry and 3 hours of finishing. The company has 240 hours of carpentry and 180 hours of finishing available per week. The profit from each table is $120, and from each chair is $90. The company wants to maximize its total profit. Formulate this problem as a linear programming model.

**Answer 1:**
Let $x_1$ = number of tables to produce.
Let $x_2$ = number of chairs to produce.

Maximize $Z = 120x_1 + 90x_2$
Subject to:
$4x_1 + 3x_2 \le 240$ (Carpentry constraint)
$2x_1 + 3x_2 \le 180$ (Finishing constraint)
$x_1 \ge 0, x_2 \ge 0$

---

**Question 2 (Graphical Solution):**
Solve the following LP problem graphically:
Minimize $C = 2x_1 + 3x_2$
Subject to:
$x_1 + x_2 \ge 10$
$3x_1 + x_2 \ge 20$
$x_1 \ge 0, x_2 \ge 0$

**Answer 2:**
*   **Constraints:**
    *   $x_1 + x_2 = 10$: Points (0, 10), (10, 0). Shade above.
    *   $3x_1 + x_2 = 20$: Points (0, 20), (20/3, 0) approx (6.67, 0). Shade above.
    *   $x_1 \ge 0, x_2 \ge 0$: First quadrant.
*   **Feasible Region:** Unbounded region in the first quadrant above both lines.
*   **Corner Points:**
    *   A: Intersection of $x_1=0$ and $x_1 + x_2 = 10 \Rightarrow (0, 10)$.
    *   B: Intersection of $x_1=0$ and $3x_1 + x_2 = 20 \Rightarrow (0, 20)$.
    *   C: Intersection of $x_1 + x_2 = 10$ and $3x_1 + x_2 = 20$.
        *   Subtracting the first from the second: $2x_1 = 10 \Rightarrow x_1 = 5$.
        *   Substituting $x_1=5$ into $x_1 + x_2 = 10 \Rightarrow 5 + x_2 = 10 \Rightarrow x_2 = 5$.
        *   Point C is $(5, 5)$.
*   **Evaluate Objective Function:**
    *   A (0, 10): $C = 2(0) + 3(10) = 30$
    *   B (0, 20): $C = 2(0) + 3(20) = 60$
    *   C (5, 5): $C = 2(5) + 3(5) = 10 + 15 = 25$
*   **Optimal Solution:** The minimum cost is $25$, occurring at $x_1 = 5$ and $x_2 = 5$.

---

**Question 3 (Standard Form):**
Convert the following LP problem into standard form:
Maximize $Z = 5x_1 - 2x_2 + 3x_3$
Subject to:
$2x_1 + x_2 - x_3 \le 10$
$-x_1 + 3x_2 + 2x_3 = 7$
$x_1 \ge 0$, $x_2$ unrestricted, $x_3 \ge 0$

**Answer 3:**
1.  **Objective:** Maximize $Z$ to Minimize $-Z$.
    *   Minimize $Z' = -5x_1 + 2x_2 - 3x_3$
2.  **Unrestricted Variable:** Replace $x_2$ with $x_2^+ - x_2^-$ ($x_2^+, x_2^- \ge 0$).
3.  **Constraints:**
    *   Constraint 1 ($\le$): Add slack $s_1 \ge 0$.
        *   $2x_1 + (x_2^+ - x_2^-) - x_3 + s_1 = 10$
    *   Constraint 2 ($=$): Already an equality.
        *   $-x_1 + 3(x_2^+ - x_2^-) + 2x_3 = 7$
4.  **Non-negativity:** Ensure all variables are non-negative.

**Standard Form LP:**

Minimize $Z' = -5x_1 + 2x_2^+ - 2x_2^- - 3x_3$
Subject to:
$2x_1 + x_2^+ - x_2^- - x_3 + s_1 = 10$
$-x_1 + 3x_2^+ - 3x_2^- + 2x_3 = 7$
$x_1 \ge 0, x_2^+ \ge 0, x_2^- \ge 0, x_3 \ge 0, s_1 \ge 0$

---

## Important Points to Remember

*   **Linearity is Key:** All relationships in an LP model (objective function and constraints) must be linear.
*   **Feasible Region is Convex:** The feasible region defined by linear constraints is always a convex set.
*   **Optimal Solution at Corner Points:** For any LP problem with an optimal solution, at least one optimal solution exists at a corner point of the feasible region.
*   **Standard Form Requirements:** Ensure all constraints are equalities, RHS are non-negative, and all variables are non-negative.
*   **Slack and Surplus Variables:** Used to convert inequalities into equalities. Slack variables are added for '$\le$' constraints, and surplus variables are subtracted for '$\ge$' constraints.

---

This module provides the foundational understanding of how to represent optimization problems as Linear Programs and how to solve them graphically. This knowledge is essential for understanding more complex optimization techniques in subsequent modules.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
