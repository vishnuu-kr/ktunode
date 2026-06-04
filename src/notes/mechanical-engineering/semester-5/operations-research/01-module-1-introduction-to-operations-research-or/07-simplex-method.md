---
title: "Simplex method"
subject: "OPERATIONS RESEARCH"
module: "Module 1: Introduction to Operations Research (OR)"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf4804463615"
status: "completed"
scrapedAt: "2026-05-20T18:01:45.965Z"
---
# Module 1: Introduction to Operations Research (OR) - Simplex Method

This module introduces the fundamental concepts of Operations Research (OR) and delves into the Simplex Method, a cornerstone algorithm for solving Linear Programming Problems (LPPs).

**Course Outcomes Addressed:**
*   **CO1:** To formulate and solve linear programming problems and transportation problems (Knowledge Level: K2, K3) - *The Simplex Method is the primary tool for solving LPPs.*

---

## 1. Introduction to Operations Research (OR)

Operations Research (OR) is a discipline that deals with the application of **advanced analytical methods** to help make better decisions. It is a scientific approach to decision-making that seeks to **optimize** the performance of complex systems.

**Key Concepts:**

*   **Decision Making:** Identifying alternatives and choosing the best course of action.
*   **Optimization:** Finding the best possible solution (maximum profit, minimum cost, etc.) under given constraints.
*   **Systems:** A collection of interrelated components working together to achieve a common objective.
*   **Models:** Abstract representations of real-world systems used for analysis and prediction.
*   **Constraints:** Limitations or restrictions that must be satisfied by the decision variables.

**Historical Development:**
OR emerged during World War II to solve military problems. After the war, its application expanded to various industries like manufacturing, finance, healthcare, and logistics.

**Phases of OR Study:**
1.  **Problem Formulation:** Defining the objective, decision variables, and constraints.
2.  **Model Construction:** Developing a mathematical model to represent the problem.
3.  **Solution:** Using analytical or algorithmic techniques to find the optimal solution.
4.  **Model Validation:** Testing the model against real-world data.
5.  **Implementation:** Putting the solution into practice.

**Applications of OR:**
*   Production planning and scheduling
*   Inventory management
*   Resource allocation
*   Network analysis
*   Queueing theory
*   Game theory

**Important Points to Remember:**
*   OR is a scientific and systematic approach.
*   It aims to optimize objectives subject to constraints.
*   Models are crucial for representing real-world problems.

---

## 2. Linear Programming Problems (LPPs)

A Linear Programming Problem (LPP) is a mathematical technique for determining a way to achieve the best outcome (such as maximum profit, minimum cost, or minimum waste) in a mathematical model whose desires and its limitations are represented by linear relationships.

**Key Components of an LPP:**

*   **Objective Function:** A linear function representing the quantity to be maximized or minimized.
    *   *Example:* Maximize $Z = 5x_1 + 3x_2$ (where $Z$ is profit, $x_1$ and $x_2$ are production quantities)
*   **Decision Variables:** The variables that represent the quantities to be determined.
    *   *Example:* $x_1, x_2$
*   **Constraints:** Linear inequalities or equalities that limit the values of the decision variables.
    *   *Example:* $2x_1 + x_2 \le 10$ (resource constraint)
    *   *Example:* $x_1 \ge 0, x_2 \ge 0$ (non-negativity constraints)

**Standard Form of an LPP:**
An LPP is in standard form if:
1.  The objective function is a maximization.
2.  All constraints are of the "less than or equal to" ($\le$) type.
3.  All decision variables are non-negative.

**Canonical Form of an LPP:**
An LPP is in canonical form if:
1.  The objective function is a maximization.
2.  All constraints are of the "less than or equal to" ($\le$) type.
3.  All decision variables are non-negative.
4.  The right-hand side (RHS) of each constraint is non-negative.

**Formulating an LPP (CO1 - K2, K3):**

**Example:** A company manufactures two products, A and B. Product A requires 2 hours of machine time and 1 hour of labor. Product B requires 1 hour of machine time and 2 hours of labor. The company has 100 hours of machine time and 80 hours of labor available per week. The profit for product A is $5 per unit, and for product B is $3 per unit. Formulate an LPP to maximize the total profit.

**Solution:**

*   **Decision Variables:**
    *   Let $x_1$ be the number of units of product A to be manufactured.
    *   Let $x_2$ be the number of units of product B to be manufactured.

*   **Objective Function (Maximize Profit):**
    *   Maximize $Z = 5x_1 + 3x_2$

*   **Constraints:**
    *   **Machine Time:** $2x_1 + x_2 \le 100$ (hours)
    *   **Labor:** $x_1 + 2x_2 \le 80$ (hours)
    *   **Non-negativity:** $x_1 \ge 0, x_2 \ge 0$

**Incorporating Content from Textbooks:**
*   **Srinivasan, G. (2017):** Provides a thorough introduction to LPP formulation with practical examples across various industries. Emphasizes the importance of translating verbal descriptions into mathematical statements.
*   **Gupta & Hira (2008):** Offers clear guidelines and a structured approach to problem formulation, breaking down complex scenarios into manageable components.
*   **Vohra & Arora (2021):** Focuses on the managerial aspects of LPP formulation, connecting business objectives with mathematical models.

---

## 3. The Simplex Method

The Simplex Method is an algebraic procedure for solving linear programming problems. It starts with a feasible solution and systematically moves from one basic feasible solution to an adjacent one, improving the objective function value at each step, until the optimal solution is reached.

**Key Concepts:**

*   **Basic Solution:** A solution to a system of linear equations where the number of non-zero variables is equal to the number of equations.
*   **Basic Feasible Solution (BFS):** A basic solution that also satisfies all constraints of the LPP.
*   **Basic Variables:** Variables that are non-zero in a BFS.
*   **Non-Basic Variables:** Variables that are zero in a BFS.
*   **Pivot Operation:** A series of algebraic manipulations to move from one BFS to another.
*   **Entering Variable:** The non-basic variable that is chosen to become a basic variable in the next iteration, leading to an improvement in the objective function.
*   **Leaving Variable:** The basic variable that becomes non-basic (zero) in the next iteration.
*   **Pivot Element:** The element in the Simplex tableau at the intersection of the entering variable's column and the leaving variable's row.

**Steps of the Simplex Method (for Maximization Problems):**

1.  **Convert to Standard/Canonical Form:**
    *   Maximize $Z$.
    *   Convert $\ge$ constraints to $\le$ by multiplying by -1.
    *   Introduce **slack variables** for $\le$ constraints to convert them into equalities. Slack variables are non-negative.
        *   $ax \le b \implies ax + s = b$, where $s \ge 0$ is a slack variable.
    *   Convert $\ge$ constraints to equalities by introducing **surplus variables** and then subtracting them.
        *   $ax \ge b \implies ax - s = b$, where $s \ge 0$ is a surplus variable.
    *   Convert $=$ constraints by introducing **artificial variables**.
    *   If there are artificial variables, use the **Big M method** or **Two-Phase method** to handle them.

2.  **Initial Simplex Tableau:**
    *   Set up the tableau with the objective function and constraints.
    *   The initial BFS typically consists of the slack variables (and potentially artificial variables).
    *   The coefficients of the objective function in the tableau should be adjusted so that the value of $Z$ is 0 for the initial BFS.

3.  **Optimality Test:**
    *   Examine the coefficients (also called indicators or $\text{C}_j - \text{Z}_j$ row) in the objective function row of the tableau.
    *   If all coefficients are non-negative ($\ge 0$), the current BFS is optimal.
    *   If there is at least one negative coefficient, the current BFS is not optimal, and an improved solution can be found.

4.  **Entering Variable Selection:**
    *   Identify the column with the **most negative** coefficient in the objective function row. This column corresponds to the entering variable.

5.  **Leaving Variable Selection:**
    *   Calculate the **ratio** of the RHS values to the corresponding positive coefficients in the entering variable's column.
    *   The row with the **smallest non-negative ratio** corresponds to the leaving variable. The basic variable in this row will become non-basic.

6.  **Pivot Operation:**
    *   The element at the intersection of the entering variable's column and the leaving variable's row is the **pivot element**.
    *   Make the pivot element '1' by dividing the entire pivot row by the pivot element.
    *   Make all other elements in the pivot column '0' by performing row operations: $New Row = Old Row - (Coefficient \times Pivot Row)$.

7.  **Repeat:** Go back to step 3 (Optimality Test) with the updated tableau.

**Example Walkthrough (CO1 - K3):**

Maximize $Z = 3x_1 + 2x_2$
Subject to:
$x_1 + x_2 \le 4$
$x_1 - x_2 \le 2$
$x_1, x_2 \ge 0$

**Step 1: Convert to Standard Form**
Introduce slack variables $s_1$ and $s_2$:
Maximize $Z = 3x_1 + 2x_2 + 0s_1 + 0s_2$
Subject to:
$x_1 + x_2 + s_1 = 4$
$x_1 - x_2 + s_2 = 2$
$x_1, x_2, s_1, s_2 \ge 0$

**Step 2: Initial Simplex Tableau**

| Basis | $Z$ | $x_1$ | $x_2$ | $s_1$ | $s_2$ | RHS | Ratio |
| :---- | :-- | :---- | :---- | :---- | :---- | :-- | :---- |
| $s_1$ | 0   | 1     | 1     | 1     | 0     | 4   |       |
| $s_2$ | 0   | 1     | -1    | 0     | 1     | 2   |       |
| $Z$   | 1   | -3    | -2    | 0     | 0     | 0   |       |

*   Initial BFS: $x_1=0, x_2=0, s_1=4, s_2=2$. $Z=0$.

**Step 3: Optimality Test**
The coefficient of $x_1$ (-3) is negative. The solution is not optimal.

**Step 4: Entering Variable**
The most negative coefficient is -3, so $x_1$ is the entering variable (column $x_1$).

**Step 5: Leaving Variable**
Calculate ratios:
*   Row $s_1$: $4 / 1 = 4$
*   Row $s_2$: $2 / 1 = 2$
The smallest non-negative ratio is 2, so $s_2$ is the leaving variable (row $s_2$).

**Step 6: Pivot Operation**
*   Pivot element is 1 (at intersection of $x_1$ column and $s_2$ row).
*   Make the pivot element 1 (it already is).
*   Make other elements in the $x_1$ column 0.
    *   Row $s_1$: New $s_1$ Row = Old $s_1$ Row - 1 * (Pivot Row $s_2$)
    *   Row $Z$: New $Z$ Row = Old $Z$ Row - (-3) * (Pivot Row $s_2$)

**Iteration 1 Tableau:**

| Basis | $Z$ | $x_1$ | $x_2$ | $s_1$ | $s_2$ | RHS | Ratio |
| :---- | :-- | :---- | :---- | :---- | :---- | :-- | :---- |
| $s_1$ | 0   | 0     | 2     | 1     | -1    | 2   | $2/2 = 1$ |
| $x_1$ | 0   | 1     | -1    | 0     | 1     | 2   | $2/(-1)$ (ignore negative) |
| $Z$   | 1   | 0     | -5    | 0     | 3     | 6   |       |

*   Current BFS: $x_1=2, s_1=2, x_2=0, s_2=0$. $Z=6$.

**Step 3: Optimality Test**
The coefficient of $x_2$ (-5) is negative. The solution is not optimal.

**Step 4: Entering Variable**
The most negative coefficient is -5, so $x_2$ is the entering variable (column $x_2$).

**Step 5: Leaving Variable**
Calculate ratios:
*   Row $s_1$: $2 / 2 = 1$
*   Row $x_1$: $2 / (-1)$ (ignore negative)
The smallest non-negative ratio is 1, so $s_1$ is the leaving variable (row $s_1$).

**Step 6: Pivot Operation**
*   Pivot element is 2 (at intersection of $x_2$ column and $s_1$ row).
*   Make the pivot element 1: New $s_1$ Row = Old $s_1$ Row / 2
*   Make other elements in the $x_2$ column 0.
    *   Row $x_1$: New $x_1$ Row = Old $x_1$ Row - (-1) * (Pivot Row $s_1$)
    *   Row $Z$: New $Z$ Row = Old $Z$ Row - (-5) * (Pivot Row $s_1$)

**Iteration 2 Tableau (Optimal):**

| Basis | $Z$ | $x_1$ | $x_2$ | $s_1$ | $s_2$ | RHS |
| :---- | :-- | :---- | :---- | :---- | :---- | :-- |
| $x_2$ | 0   | 0     | 1     | 1/2   | -1/2  | 1   |
| $x_1$ | 0   | 1     | 0     | 1/2   | 1/2   | 3   |
| $Z$   | 1   | 0     | 0     | 5/2   | 1/2   | 11  |

**Step 3: Optimality Test**
All coefficients in the $Z$ row are non-negative ($\ge 0$). The solution is optimal.

**Optimal Solution:**
$x_1 = 3$, $x_2 = 1$
Maximum $Z = 11$

**Incorporating Content from Textbooks:**
*   **Srinivasan, G. (2017):** Provides detailed explanations of the Simplex algorithm, including the mechanics of tableau manipulation and the rationale behind selecting entering and leaving variables. Covers handling of different constraint types.
*   **Gupta & Hira (2008):** Offers a step-by-step approach with numerous solved examples, making the process of constructing and interpreting Simplex tableaus very clear.
*   **Vohra & Arora (2021):** Links the Simplex method to practical decision-making in management, highlighting how it helps in resource allocation and profit maximization.
*   **Rao, S.S. (2nd Ed.):** Offers a more theoretical perspective on the Simplex algorithm, proving its convergence and optimality.
*   **Hillier & Lieberman (11th Ed.):** Provides a comprehensive treatment of the Simplex method, including discussions on degeneracy, cycling, and sensitivity analysis.

---

## 4. Handling Different Types of Constraints and Objectives

The basic Simplex method is designed for maximization problems with $\le$ constraints. Modifications are needed for other scenarios.

### 4.1 Minimization Problems

To solve a minimization problem, convert it to a maximization problem by minimizing $Z$ is equivalent to maximizing $-Z$.

**Example:** Minimize $Z = 2x_1 + 3x_2$ is equivalent to Maximize $Z' = -2x_1 - 3x_2$.

**Alternatively, for minimization:**
*   **Optimality Test:** The current solution is optimal if all coefficients in the $Z$ row are non-positive ($\le 0$).
*   **Entering Variable:** Select the column with the **most positive** coefficient in the objective function row.
*   **Leaving Variable:** Same as maximization (smallest non-negative ratio).

**Incorporating Content from Textbooks:**
*   **Gupta & Hira (2008):** Dedicates sections to solving minimization LPPs using the Simplex method, presenting both the negation approach and the direct minimization approach.
*   **Hillier & Lieberman (11th Ed.):** Discusses the duality theory of LP, which offers another perspective on solving minimization problems and provides insights into the structure of solutions.

### 4.2 $\ge$ Constraints

Convert $\ge$ constraints to equalities by subtracting a **surplus variable**. Then, introduce an **artificial variable** to get an initial BFS.

Example: $x_1 + x_2 \ge 5 \implies x_1 + x_2 - s_1 = 5$. To get an initial BFS, add an artificial variable $A_1$: $x_1 + x_2 - s_1 + A_1 = 5$.

### 4.3 $=$ Constraints

Introduce an **artificial variable** directly to create an initial BFS.

Example: $x_1 + 2x_2 = 10 \implies x_1 + 2x_2 + A_1 = 10$.

### 4.4 Artificial Variables and the Big M Method / Two-Phase Method

When artificial variables are introduced for $\ge$ or $=$ constraints, they must be penalized in the objective function to ensure they are zero in the optimal solution.

*   **Big M Method:**
    *   For maximization, subtract $M \times A_i$ from the objective function for each artificial variable $A_i$ (where $M$ is a very large positive number).
    *   For minimization, add $M \times A_i$ to the objective function.
    *   The coefficients in the $Z$ row for artificial variables are adjusted initially to reflect this penalty.

*   **Two-Phase Method:**
    *   **Phase 1:** Minimize the sum of artificial variables. If the minimum sum is 0, then an initial BFS exists. If the minimum sum is greater than 0, the original LPP has no feasible solution.
    *   **Phase 2:** Use the BFS from Phase 1 and the original objective function to find the optimal solution.

**Incorporating Content from Textbooks:**
*   **Srinivasan, G. (2017):** Provides a clear distinction and step-by-step procedures for both Big M and Two-Phase methods.
*   **Vohra & Arora (2021):** Focuses on the practical application of these methods in solving real-world business problems involving mixed constraints.
*   **Hillier & Lieberman (11th Ed.):** Offers a detailed theoretical explanation of why these methods work and their connection to the concept of feasibility.

---

## 5. Special Cases in the Simplex Method

*   **Degeneracy:** Occurs when one or more basic variables in a BFS have a value of zero. This can lead to ties in selecting the leaving variable.
    *   **Consequence:** May lead to cycling (repeatedly visiting the same set of tableaus without improving the objective function) or slow convergence.
    *   **Resolution:** Perturbation techniques (e.g., adding a small $\epsilon$) can be used to break ties and ensure progress.
*   **Unbounded Solution:** Occurs when the objective function can be increased (for maximization) or decreased (for minimization) indefinitely without violating any constraints.
    *   **Identification:** In the Simplex method, this happens when all coefficients in the entering variable's column are non-positive (negative or zero), meaning an infinite amount of the entering variable can be introduced.
*   **Infeasible Solution:** Occurs when there is no combination of decision variables that satisfies all constraints.
    *   **Identification:** In the Big M method, if artificial variables remain in the final optimal tableau with non-zero values, the original problem is infeasible. In the Two-Phase method, if the sum of artificial variables in Phase 1 is greater than zero, the problem is infeasible.
*   **Multiple Optimal Solutions:** Occurs when there are multiple combinations of decision variables that yield the same optimal objective function value.
    *   **Identification:** If, in the final optimal tableau, a non-basic variable has a zero coefficient in the objective function row, it indicates the existence of an alternative optimal solution. Swapping this non-basic variable into the basis can lead to another optimal BFS.

**Incorporating Content from Textbooks:**
*   **Srinivasan, G. (2017):** Provides specific examples and techniques for identifying and handling degeneracy and unboundedness.
*   **Rao, S.S. (2nd Ed.):** Discusses the mathematical conditions leading to these special cases and presents theoretical proofs for their detection.
*   **Hillier & Lieberman (11th Ed.):** Offers a comprehensive analysis of degeneracy and cycling, including the lexicographical rule for breaking ties. It also provides thorough explanations of unboundedness and infeasibility.
*   **Ravindran, Phillips, Solberg (1987):** Offers practical insights into recognizing these special cases in real-world applications and their implications.

---

## 6. Simplex Method and Course Outcomes (CO1)

The Simplex method directly supports **CO1: To formulate and solve linear programming problems and transportation problems (Knowledge Level: K2, K3)**.

*   **K2 (Understanding):** Students will understand the underlying principles of the Simplex method, including the concepts of basic feasible solutions, iterations, and optimality tests. They will understand why the method moves from one feasible solution to another and how it seeks the optimal value.
*   **K3 (Applying):** Students will be able to apply the Simplex method to solve formulated LPPs. This involves setting up the initial tableau, performing pivot operations correctly, identifying entering and leaving variables, and interpreting the final tableau to find the optimal solution. They will also be able to handle different types of constraints and objectives using the appropriate variations of the Simplex method (Big M, Two-Phase).

---

## Practice Questions & Exercises

**Question 1:**
Formulate the following problem as a linear programming problem:
A company produces two products, X and Y. Product X requires 3 kg of raw material A and 2 hours of machine time. Product Y requires 5 kg of raw material A and 4 hours of machine time. The company has 150 kg of raw material A and 120 hours of machine time available. The profit for product X is $10 per unit, and for product Y is $15 per unit. The company wants to maximize its total profit.

**Answer 1:**
*   **Decision Variables:**
    *   Let $x_1$ be the number of units of product X.
    *   Let $x_2$ be the number of units of product Y.
*   **Objective Function:**
    *   Maximize $Z = 10x_1 + 15x_2$
*   **Constraints:**
    *   **Raw Material A:** $3x_1 + 5x_2 \le 150$
    *   **Machine Time:** $2x_1 + 4x_2 \le 120$
    *   **Non-negativity:** $x_1 \ge 0, x_2 \ge 0$

---

**Question 2:**
Solve the following LPP using the Simplex Method:
Maximize $Z = 4x_1 + 3x_2$
Subject to:
$x_1 + x_2 \le 5$
$2x_1 + x_2 \le 8$
$x_1, x_2 \ge 0$

**Answer 2:**
**Step 1: Standard Form**
Maximize $Z = 4x_1 + 3x_2 + 0s_1 + 0s_2$
Subject to:
$x_1 + x_2 + s_1 = 5$
$2x_1 + x_2 + s_2 = 8$
$x_1, x_2, s_1, s_2 \ge 0$

**Initial Tableau:**

| Basis | $Z$ | $x_1$ | $x_2$ | $s_1$ | $s_2$ | RHS | Ratio |
| :---- | :-- | :---- | :---- | :---- | :---- | :-- | :---- |
| $s_1$ | 0   | 1     | 1     | 1     | 0     | 5   | 5/1 = 5 |
| $s_2$ | 0   | 2     | 1     | 0     | 1     | 8   | 8/2 = 4 |
| $Z$   | 1   | -4    | -3    | 0     | 0     | 0   |       |

*   Entering Variable: $x_1$ (most negative in Z row: -4)
*   Leaving Variable: $s_2$ (smallest ratio: 4)
*   Pivot Element: 2

**Iteration 1 Tableau:**

| Basis | $Z$ | $x_1$ | $x_2$ | $s_1$ | $s_2$ | RHS | Ratio |
| :---- | :-- | :---- | :---- | :---- | :---- | :-- | :---- |
| $s_1$ | 0   | 0     | 1/2   | 1     | -1/2  | 1   | 1/(1/2) = 2 |
| $x_1$ | 0   | 1     | 1/2   | 0     | 1/2   | 4   | 4/(1/2) = 8 |
| $Z$   | 1   | 0     | -1    | 0     | 2     | 16  |       |

*   Entering Variable: $x_2$ (most negative in Z row: -1)
*   Leaving Variable: $s_1$ (smallest ratio: 2)
*   Pivot Element: 1/2

**Iteration 2 Tableau (Optimal):**

| Basis | $Z$ | $x_1$ | $x_2$ | $s_1$ | $s_2$ | RHS |
| :---- | :-- | :---- | :---- | :---- | :---- | :-- |
| $x_2$ | 0   | 0     | 1     | 2     | -1    | 2   |
| $x_1$ | 0   | 1     | 0     | -1    | 1     | 3   |
| $Z$   | 1   | 0     | 0     | 1     | 1     | 19  |

**Optimal Solution:**
$x_1 = 3$, $x_2 = 2$
Maximum $Z = 19$

---

**Question 3:**
Explain what degeneracy is in the context of the Simplex Method and how it can potentially cause problems.

**Answer 3:**
Degeneracy occurs when, in a basic feasible solution, one or more basic variables have a value of zero. This often happens when there is a tie for the minimum non-negative ratio when selecting the leaving variable.

**Potential Problems:**
*   **Cycling:** If degeneracy is not handled properly, the Simplex method might enter a cycle, repeatedly visiting the same set of tableaus without improving the objective function value. This means the algorithm might never terminate or reach the optimal solution.
*   **Slow Convergence:** Even if cycling doesn't occur, degeneracy can slow down the convergence of the algorithm, requiring more iterations to reach optimality.

---

## Important Points to Remember

*   The Simplex method is an iterative algorithm that moves from one basic feasible solution to another to improve the objective function.
*   Slack variables are added for $\le$ constraints, surplus variables are subtracted for $\ge$ constraints, and artificial variables are used for $\ge$ and $=$ constraints to find an initial basic feasible solution.
*   The optimality test involves checking the coefficients in the objective function row (usually $C_j - Z_j$ row). For maximization, all should be $\ge 0$; for minimization, all should be $\le 0$.
*   The entering variable corresponds to the most negative (maximization) or most positive (minimization) coefficient in the objective function row.
*   The leaving variable is determined by the minimum non-negative ratio test.
*   Degeneracy, unboundedness, and infeasibility are special cases that require careful identification and handling.
*   The Big M method and Two-Phase method are techniques for dealing with artificial variables.

---

This concludes the study notes for the Simplex method, a fundamental algorithm in Operations Research for solving Linear Programming Problems. Refer to the provided textbooks for more detailed explanations and diverse examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
