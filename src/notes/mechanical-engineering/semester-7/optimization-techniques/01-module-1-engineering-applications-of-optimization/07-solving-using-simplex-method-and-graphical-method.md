---
title: "Solving using Simplex method and Graphical method"
subject: "OPTIMIZATION TECHNIQUES"
module: "Module 1: Engineering applications of optimization"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf48044641c8"
status: "completed"
scrapedAt: "2026-05-20T18:15:54.537Z"
---
# OPTIMIZATION TECHNIQUES - Module 1: Engineering Applications of Optimization

## Topic: Solving using Simplex Method and Graphical Method

**Course Outcomes Addressed:**
*   **CO1: Formulate the real-world problem as a Linear Programming Problem (Knowledge Level: K4)**
*   **CO4: Apply modern methods of optimization for solving optimization problems. (Knowledge Level: K3)**

---

### 1. Introduction to Optimization and Linear Programming (LP)

Optimization is the process of finding the best solution for a problem, given a set of constraints. Linear Programming (LP) is a mathematical technique used for optimizing a linear objective function subject to a set of linear constraints. It's widely used in various engineering fields for resource allocation, production planning, scheduling, and more.

**Key Concepts:**

*   **Objective Function:** A mathematical expression representing the quantity to be maximized or minimized (e.g., profit, cost, time). In LP, it's a linear function.
*   **Decision Variables:** Variables that represent the choices or quantities to be determined (e.g., production quantities, resource allocation levels).
*   **Constraints:** Limitations or restrictions that must be satisfied. These can be due to resource availability, demand, technical limitations, etc. In LP, constraints are linear inequalities or equalities.
*   **Feasible Region:** The set of all possible solutions that satisfy all the constraints.
*   **Feasible Solution:** Any point within the feasible region.
*   **Optimal Solution:** A feasible solution that yields the best value (maximum or minimum) for the objective function.
*   **Corner Point (Extreme Point):** A vertex of the feasible region.

**Textbook References:**
*   S.S. Rao, "Engineering Optimization: Theory and Practice," Chapter 1 (Introduction), Chapter 2 (Linear Programming).
*   H.A. Taha, "Operations Research," Chapter 1 (Introduction to Operations Research), Chapter 2 (Linear Programming: The Simplex Method).

---

### 2. Graphical Method for Solving LP Problems

The graphical method is a visual technique used to solve LP problems with **two decision variables**. It involves plotting the constraints, identifying the feasible region, and then finding the optimal solution at one of the corner points.

**Steps:**

1.  **Formulate the LP Problem:**
    *   Define decision variables (e.g., $x_1, x_2$).
    *   Write the objective function (Maximize or Minimize).
    *   Write all the constraints as linear inequalities or equalities.
    *   Ensure non-negativity constraints (decision variables $\ge 0$).

2.  **Convert Inequalities to Equalities:** For each constraint inequality, convert it to an equality to define the boundary line of the feasible region.
    *   $a_1x_1 + a_2x_2 \le b \implies a_1x_1 + a_2x_2 = b$
    *   $a_1x_1 + a_2x_2 \ge b \implies a_1x_1 + a_2x_2 = b$

3.  **Plot the Constraint Lines:** For each equality, find two points and draw the line on a 2D graph (x1-axis and x2-axis).
    *   To find points for $a_1x_1 + a_2x_2 = b$:
        *   Set $x_1 = 0$, solve for $x_2$. Point: $(0, b/a_2)$.
        *   Set $x_2 = 0$, solve for $x_1$. Point: $(b/a_1, 0)$.

4.  **Identify the Feasible Region:** For each constraint, determine which side of the line satisfies the inequality.
    *   For $\le$ constraints, the feasible region is usually towards the origin (0,0), provided the origin satisfies the inequality.
    *   For $\ge$ constraints, the feasible region is away from the origin.
    *   The feasible region is the area that satisfies ALL constraints simultaneously. It will be a polygon (convex polygon).

5.  **Determine the Corner Points (Vertices) of the Feasible Region:** These are the points where the boundary lines of the constraints intersect.
    *   Solve pairs of constraint equations simultaneously to find intersection points.
    *   Include the intersection points with the axes if they fall within the feasible region.

6.  **Evaluate the Objective Function at Each Corner Point:** Substitute the coordinates of each corner point into the objective function.

7.  **Determine the Optimal Solution:**
    *   If maximizing, select the corner point that yields the highest objective function value.
    *   If minimizing, select the corner point that yields the lowest objective function value.

**Important Points to Remember (Graphical Method):**

*   Applicable only for problems with **two decision variables**.
*   The feasible region is always a **convex set**.
*   The optimal solution, if it exists, will always occur at one of the **corner points** of the feasible region.
*   If the objective function line is parallel to one of the binding constraints, there might be **multiple optimal solutions** (all points on that line segment).

**Example (Graphical Method):**

Maximize $Z = 3x_1 + 5x_2$
Subject to:
$x_1 \le 4$
$2x_2 \le 12$ (or $x_2 \le 6$)
$3x_1 + 2x_2 \le 18$
$x_1 \ge 0, x_2 \ge 0$

**Solution:**

1.  **Constraints:**
    *   $x_1 = 4$ (Vertical line)
    *   $x_2 = 6$ (Horizontal line)
    *   $3x_1 + 2x_2 = 18$
        *   If $x_1 = 0$, $2x_2 = 18 \implies x_2 = 9$. Point: (0, 9)
        *   If $x_2 = 0$, $3x_1 = 18 \implies x_1 = 6$. Point: (6, 0)

2.  **Plotting and Feasible Region:**
    *   Plot the lines $x_1=4$, $x_2=6$, and $3x_1+2x_2=18$.
    *   The region satisfying $x_1 \ge 0, x_2 \ge 0$ is the first quadrant.
    *   $x_1 \le 4$: Region to the left of $x_1=4$.
    *   $x_2 \le 6$: Region below $x_2=6$.
    *   $3x_1 + 2x_2 \le 18$: Region below the line $3x_1+2x_2=18$.
    *   The feasible region is a polygon bounded by the axes and the lines $x_1=4$, $x_2=6$, and $3x_1+2x_2=18$.

3.  **Corner Points:**
    *   **A:** (0,0)
    *   **B:** Intersection of $x_1=0$ and $x_2=6$. Point: (0,6)
    *   **C:** Intersection of $x_1=4$ and $x_2=6$. Point: (4,6). (Check if this point satisfies $3x_1 + 2x_2 \le 18$: $3(4) + 2(6) = 12 + 12 = 24 > 18$. So (4,6) is NOT feasible).
    *   **C (Corrected):** Intersection of $x_1=4$ and $3x_1+2x_2=18$.
        *   $3(4) + 2x_2 = 18 \implies 12 + 2x_2 = 18 \implies 2x_2 = 6 \implies x_2 = 3$. Point: (4,3)
    *   **D:** Intersection of $x_2=6$ and $3x_1+2x_2=18$.
        *   $3x_1 + 2(6) = 18 \implies 3x_1 + 12 = 18 \implies 3x_1 = 6 \implies x_1 = 2$. Point: (2,6). (Check if this point satisfies $x_1 \le 4$: $2 \le 4$. Yes.)
    *   **E:** Intersection of $x_2=0$ and $x_1=4$. Point: (4,0)
    *   **F:** Intersection of $x_2=0$ and $3x_1+2x_2=18$. Point: (6,0). (Check if this point satisfies $x_1 \le 4$: $6 \not\le 4$. So (6,0) is NOT feasible).
    *   **Feasible Corner Points:** A(0,0), B(0,6), C(4,3), D(2,6), E(4,0).

4.  **Evaluate Objective Function Z = 3x1 + 5x2:**
    *   At A(0,0): $Z = 3(0) + 5(0) = 0$
    *   At B(0,6): $Z = 3(0) + 5(6) = 30$
    *   At C(4,3): $Z = 3(4) + 5(3) = 12 + 15 = 27$
    *   At D(2,6): $Z = 3(2) + 5(6) = 6 + 30 = 36$
    *   At E(4,0): $Z = 3(4) + 5(0) = 12$

5.  **Optimal Solution:** The maximum value of Z is 36, which occurs at point D(2,6).
    *   **Optimal solution:** $x_1 = 2, x_2 = 6$, Maximum $Z = 36$.

---

### 3. The Simplex Method for Solving LP Problems

The Simplex method is an algebraic procedure for solving LP problems. It can handle any number of decision variables and constraints. It systematically moves from one feasible corner point to an adjacent one, improving the objective function value at each step, until the optimal solution is found.

**Key Concepts for Simplex:**

*   **Standard Form:** An LP problem is in standard form if:
    *   All constraints are equalities.
    *   All variables are non-negative.
    *   The right-hand side (RHS) of each constraint is non-negative.
*   **Slack Variables:** Introduced to convert $\le$ inequalities into equalities. For a constraint $a_1x_1 + a_2x_2 \le b$, we add a slack variable $s_1 \ge 0$: $a_1x_1 + a_2x_2 + s_1 = b$. The slack variable represents the unused amount of the resource.
*   **Surplus Variables:** Introduced to convert $\ge$ inequalities into equalities. For a constraint $a_1x_1 + a_2x_2 \ge b$, we subtract a surplus variable $s_1 \ge 0$: $a_1x_1 + a_2x_2 - s_1 = b$. Surplus variables represent the amount by which the left-hand side exceeds the RHS.
*   **Artificial Variables:** Introduced when an equality constraint or a $\ge$ constraint does not have an obvious basic feasible solution (i.e., no identity matrix in the constraint coefficients). They are typically used with the **Big M method** or the **Two-Phase method**.
*   **Basic Variables:** Variables that form an identity matrix in the tableau. They are set to zero to find a feasible solution.
*   **Non-Basic Variables:** Variables that are set to zero.
*   **Basic Feasible Solution (BFS):** A solution obtained by setting non-basic variables to zero and solving for the basic variables. In the Simplex tableau, a BFS corresponds to a corner point of the feasible region.
*   **Entering Variable:** The non-basic variable that will become basic in the next iteration. It's chosen to improve the objective function.
*   **Leaving Variable:** The basic variable that will become non-basic in the next iteration. It's determined by the minimum ratio test.
*   **Pivot Element:** The element in the tableau at the intersection of the entering variable's column and the leaving variable's row.

**Steps for Simplex Method (Maximization Problem):**

1.  **Convert to Standard Form:**
    *   Convert all inequalities to equalities by adding slack variables for $\le$ constraints.
    *   Convert $\ge$ constraints by subtracting surplus variables.
    *   Convert $=$ constraints by introducing artificial variables.
    *   Ensure all RHS values are non-negative. If any RHS is negative, multiply that constraint by -1 (reversing the inequality sign if it was $\le$).

2.  **Formulate the Initial Simplex Tableau:**
    *   The objective function should be rewritten so that all variables have non-positive coefficients (e.g., for maximization, $Z - c_1x_1 - c_2x_2 = 0$).
    *   The tableau will have columns for each decision variable, slack variables, surplus variables, and artificial variables, plus a 'RHS' column.
    *   Rows will include one for the objective function and one for each constraint.
    *   The initial basic variables are typically the slack variables. If artificial variables are used, they become the initial basic variables for their respective constraints.

3.  **Check for Optimality:**
    *   If all coefficients in the objective function row (often called the $C_j - Z_j$ row or Row 0) are non-negative (for maximization), the current solution is optimal.

4.  **Select the Entering Variable:**
    *   Choose the variable with the most **negative** coefficient in the objective function row. This variable is the most promising for improving the objective function. This column is the **pivot column**.

5.  **Select the Leaving Variable (Minimum Ratio Test):**
    *   For each constraint row, calculate the ratio of the RHS value to the corresponding coefficient in the pivot column.
    *   **Important:** Only consider rows where the coefficient in the pivot column is **positive**. Division by zero or negative numbers is not allowed.
    *   The row that yields the **smallest non-negative ratio** determines the leaving variable. This row is the **pivot row**.
    *   The element at the intersection of the pivot row and pivot column is the **pivot element**.

6.  **Perform Pivot Operations (Row Operations):**
    *   Make the pivot element equal to 1 by dividing the pivot row by the pivot element.
    *   Make all other elements in the pivot column equal to zero by performing row operations:
        *   New Row $i$ = Old Row $i$ - (Coefficient in pivot column of Old Row $i$) * (New Pivot Row)

7.  **Repeat Steps 3-6:** Continue iterating until the optimality condition (all coefficients in the objective function row are non-negative) is met.

**Handling $\ge$ and $=$ Constraints (Artificial Variables):**

*   **Big M Method:**
    *   For $\ge$ constraints: $a_1x_1 + a_2x_2 - s_1 = b \implies a_1x_1 + a_2x_2 - s_1 + A_1 = b$. Add a large positive penalty (M) to the objective function for each artificial variable ($+MA_1$ for minimization, $-MA_1$ for maximization).
    *   For $=$ constraints: $a_1x_1 + a_2x_2 = b \implies a_1x_1 + a_2x_2 + A_2 = b$. Add a penalty (M) for each artificial variable.
    *   The goal is to drive the artificial variables to zero.

*   **Two-Phase Method:**
    *   **Phase 1:** Solve an auxiliary LP problem where the objective is to minimize the sum of artificial variables. If the minimum sum is zero, an initial BFS for the original problem is found. If not, the original problem has no feasible solution.
    *   **Phase 2:** If Phase 1 is successful, use the final tableau from Phase 1 (removing artificial variables) and reintroduce the original objective function to solve for the optimal solution.

**Textbook References:**
*   S.S. Rao, "Engineering Optimization: Theory and Practice," Chapter 2 (Linear Programming).
*   H.A. Taha, "Operations Research," Chapter 2 (Linear Programming: The Simplex Method).
*   Kanti Swarup, P.K. Gupta and Man Mohan, "Operations Research," Chapter 3 (Linear Programming Problem - Analytical Methods).

**Example (Simplex Method - Maximization):**

Maximize $Z = 3x_1 + 2x_2$
Subject to:
$x_1 + x_2 \le 4$
$x_1 - x_2 \le 2$
$x_1, x_2 \ge 0$

**Solution:**

1.  **Standard Form:**
    *   Add slack variables $s_1, s_2$:
        *   $x_1 + x_2 + s_1 = 4$
        *   $x_1 - x_2 + s_2 = 2$
    *   Objective function: $Z - 3x_1 - 2x_2 = 0$
    *   Variables: $x_1, x_2, s_1, s_2 \ge 0$

2.  **Initial Simplex Tableau:**
    | Basis | $Z$ | $x_1$ | $x_2$ | $s_1$ | $s_2$ | RHS | Ratio |
    | :---- | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
    | $Z$   | 1   | -3  | -2  | 0   | 0   | 0   |     |
    | $s_1$ | 0   | 1   | 1   | 1   | 0   | 4   |     |
    | $s_2$ | 0   | 1   | -1  | 0   | 1   | 2   |     |

3.  **Iteration 1:**
    *   **Optimality Check:** Coefficients in Z-row (-3, -2) are negative. Not optimal.
    *   **Entering Variable:** Most negative is -3 (column $x_1$). $x_1$ enters.
    *   **Leaving Variable (Minimum Ratio Test):**
        *   Row $s_1$: $4 / 1 = 4$
        *   Row $s_2$: $2 / 1 = 2$
        *   Minimum ratio is 2 (Row $s_2$). $s_2$ leaves.
    *   **Pivot Element:** 1 (at intersection of $x_1$ column and $s_2$ row).

4.  **Pivot Operations:**
    *   Pivot element is already 1. Row $s_2$ becomes the new Row $x_1$.
    *   Make other elements in $x_1$ column zero:
        *   New Z-row = Old Z-row - (-3) * (New $x_1$ row) = Old Z-row + 3 * (Old $s_2$ row)
        *   New $s_1$ row = Old $s_1$ row - (1) * (New $x_1$ row) = Old $s_1$ row - (Old $s_2$ row)

    | Basis | $Z$ | $x_1$ | $x_2$ | $s_1$ | $s_2$ | RHS | Ratio |
    | :---- | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
    | $Z$   | 1   | 0   | -5  | 0   | 3   | 6   |     |
    | $s_1$ | 0   | 0   | 2   | 1   | -1  | 2   |     |
    | $x_1$ | 0   | 1   | -1  | 0   | 1   | 2   |     |

5.  **Iteration 2:**
    *   **Optimality Check:** Coefficient in Z-row (-5) is negative. Not optimal.
    *   **Entering Variable:** Most negative is -5 (column $x_2$). $x_2$ enters.
    *   **Leaving Variable (Minimum Ratio Test):**
        *   Row $s_1$: $2 / 2 = 1$
        *   Row $x_1$: $2 / (-1)$ - ignore negative denominator.
        *   Minimum ratio is 1 (Row $s_1$). $s_1$ leaves.
    *   **Pivot Element:** 2 (at intersection of $x_2$ column and $s_1$ row).

6.  **Pivot Operations:**
    *   Make pivot element 1: Divide Row $s_1$ by 2. This becomes the new Row $x_2$.
    *   Make other elements in $x_2$ column zero:
        *   New Z-row = Old Z-row - (-5) * (New $x_2$ row) = Old Z-row + 5 * (Old $s_1$ row / 2)
        *   New $x_1$ row = Old $x_1$ row - (-1) * (New $x_2$ row) = Old $x_1$ row + (Old $s_1$ row / 2)

    | Basis | $Z$ | $x_1$ | $x_2$ | $s_1$ | $s_2$ | RHS |
    | :---- | :-: | :-: | :-: | :-: | :-: | :-: |
    | $Z$   | 1   | 0   | 0   | 2.5 | 0.5 | 11  |
    | $x_2$ | 0   | 0   | 1   | 0.5 | -0.5| 1   |
    | $x_1$ | 0   | 1   | 0   | 0.5 | 0.5 | 3   |

7.  **Optimality Check:** All coefficients in the Z-row are non-negative (0, 0, 2.5, 0.5). The solution is optimal.

8.  **Optimal Solution:**
    *   From the tableau:
        *   $x_1 = 3$
        *   $x_2 = 1$
        *   $s_1 = 0$ (non-basic)
        *   $s_2 = 0$ (non-basic)
    *   Maximum $Z = 11$.

---

### 4. Engineering Applications of Optimization (Brief Mention for Context)

While this module focuses on the methods, it's important to remember *why* we learn them in engineering.

*   **Resource Allocation:** Determining how to allocate limited resources (manpower, materials, budget) to maximize output or minimize cost.
*   **Production Planning:** Deciding production quantities for various products to meet demand and maximize profit.
*   **Design Optimization:** Finding the best design parameters for a system to minimize weight, cost, or maximize performance (e.g., structural design, circuit design).
*   **Scheduling:** Optimizing project schedules to minimize completion time or resource utilization.
*   **Inventory Management:** Determining optimal order quantities and reorder points.

**Textbook References:**
*   S.S. Rao, "Engineering Optimization: Theory and Practice," Chapter 1 (Introduction to Optimization in Engineering Design).
*   Kalynamoy Deb, "Optimization for Engineering Design," Chapter 1 (Introduction).

---

### 5. Practice Questions and Exercises

**Question 1 (Graphical Method):**

A company manufactures two products, A and B. The manufacturing process requires two types of resources: labor and raw materials.
*   Product A requires 1 hour of labor and 2 kg of raw materials.
*   Product B requires 3 hours of labor and 1 kg of raw materials.
The company has 100 hours of labor and 80 kg of raw materials available per week.
The profit for Product A is $5 per unit, and for Product B is $7 per unit.
Formulate this problem as a Linear Programming Problem and solve it graphically to determine the optimal production quantities to maximize profit.

**Answer 1:**

**LP Formulation:**
Let $x_1$ be the number of units of Product A and $x_2$ be the number of units of Product B.
Maximize $Z = 5x_1 + 7x_2$ (Objective Function)

Subject to constraints:
1.  Labor constraint: $x_1 + 3x_2 \le 100$
2.  Raw materials constraint: $2x_1 + x_2 \le 80$
3.  Non-negativity constraints: $x_1 \ge 0, x_2 \ge 0$

**Graphical Solution:**

1.  **Plot Constraint Lines:**
    *   $x_1 + 3x_2 = 100$:
        *   If $x_1 = 0$, $3x_2 = 100 \implies x_2 \approx 33.33$. Point: (0, 33.33)
        *   If $x_2 = 0$, $x_1 = 100$. Point: (100, 0)
    *   $2x_1 + x_2 = 80$:
        *   If $x_1 = 0$, $x_2 = 80$. Point: (0, 80)
        *   If $x_2 = 0$, $2x_1 = 80 \implies x_1 = 40$. Point: (40, 0)

2.  **Feasible Region and Corner Points:**
    *   The feasible region is bounded by the axes and the two constraint lines.
    *   **Corner Points:**
        *   O: (0,0)
        *   A: (0, 33.33) - Intersection of $x_1=0$ and $x_1 + 3x_2 = 100$.
        *   B: Intersection of $x_1 + 3x_2 = 100$ and $2x_1 + x_2 = 80$.
            *   From $2x_1 + x_2 = 80$, $x_2 = 80 - 2x_1$.
            *   Substitute into the first equation: $x_1 + 3(80 - 2x_1) = 100$
            *   $x_1 + 240 - 6x_1 = 100$
            *   $-5x_1 = 100 - 240$
            *   $-5x_1 = -140 \implies x_1 = 28$.
            *   $x_2 = 80 - 2(28) = 80 - 56 = 24$. Point: (28, 24).
        *   C: (40, 0) - Intersection of $x_2=0$ and $2x_1 + x_2 = 80$.

3.  **Evaluate Objective Function Z = 5x1 + 7x2:**
    *   At O(0,0): $Z = 5(0) + 7(0) = 0$
    *   At A(0, 33.33): $Z = 5(0) + 7(33.33) \approx 233.31$
    *   At B(28, 24): $Z = 5(28) + 7(24) = 140 + 168 = 308$
    *   At C(40, 0): $Z = 5(40) + 7(0) = 200$

**Optimal Solution:**
The maximum profit is $308, achieved when the company produces 28 units of Product A and 24 units of Product B.

---

**Question 2 (Simplex Method):**

Solve the following LP problem using the Simplex method:
Maximize $Z = 4x_1 + 3x_2$
Subject to:
$2x_1 + x_2 \le 10$
$x_1 + 2x_2 \le 8$
$x_1, x_2 \ge 0$

**Answer 2:**

**LP Formulation (Standard Form):**
Maximize $Z = 4x_1 + 3x_2$
Subject to:
$2x_1 + x_2 + s_1 = 10$
$x_1 + 2x_2 + s_2 = 8$
$x_1, x_2, s_1, s_2 \ge 0$
Objective function for tableau: $Z - 4x_1 - 3x_2 = 0$

**Initial Simplex Tableau:**
| Basis | $Z$ | $x_1$ | $x_2$ | $s_1$ | $s_2$ | RHS | Ratio |
| :---- | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| $Z$   | 1   | -4  | -3  | 0   | 0   | 0   |     |
| $s_1$ | 0   | 2   | 1   | 1   | 0   | 10  |     |
| $s_2$ | 0   | 1   | 2   | 0   | 1   | 8   |     |

**Iteration 1:**
*   Entering: $x_1$ (most negative in Z-row: -4)
*   Leaving: $s_2$ (minimum ratio: $10/2=5$, $8/1=8$. Min ratio is 5, row $s_1$). *Correction: Minimum ratio is 10/2 = 5 for $s_1$, and 8/1 = 8 for $s_2$. So $s_1$ leaves.* **Minimum ratio is 5 (row $s_1$). $s_1$ leaves.**
*   Pivot element: 2 (in $s_1$ row, $x_1$ column)

**Pivot Operations:**
1.  New $x_1$ row = (Old $s_1$ row) / 2
    | Basis | $Z$ | $x_1$ | $x_2$ | $s_1$ | $s_2$ | RHS |
    | :---- | :-: | :-: | :-: | :-: | :-: | :-: |
    | $Z$   | 1   | -4  | -3  | 0   | 0   | 0   |
    | $x_1$ | 0   | 1   | 0.5 | 0.5 | 0   | 5   |
    | $s_2$ | 0   | 1   | 2   | 0   | 1   | 8   |

2.  New Z-row = Old Z-row - (-4) * (New $x_1$ row) = Old Z-row + 4 * (New $x_1$ row)
3.  New $s_2$ row = Old $s_2$ row - (1) * (New $x_1$ row)

**Simplex Tableau after Iteration 1:**
| Basis | $Z$ | $x_1$ | $x_2$ | $s_1$ | $s_2$ | RHS | Ratio |
| :---- | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| $Z$   | 1   | 0   | -1  | 2   | 0   | 20  |     |
| $x_1$ | 0   | 1   | 0.5 | 0.5 | 0   | 5   |     |
| $s_2$ | 0   | 0   | 1.5 | -0.5| 1   | 3   |     |

**Iteration 2:**
*   Entering: $x_2$ (most negative in Z-row: -1)
*   Leaving: $s_2$ (minimum ratio: $5/0.5 = 10$, $3/1.5 = 2$. Min ratio is 2, row $s_2$)
*   Pivot element: 1.5 (in $s_2$ row, $x_2$ column)

**Pivot Operations:**
1.  New $x_2$ row = (Old $s_2$ row) / 1.5
    | Basis | $Z$ | $x_1$ | $x_2$ | $s_1$ | $s_2$ | RHS |
    | :---- | :-: | :-: | :-: | :-: | :-: | :-: |
    | $Z$   | 1   | 0   | -1  | 2   | 0   | 20  |
    | $x_1$ | 0   | 1   | 0.5 | 0.5 | 0   | 5   |
    | $x_2$ | 0   | 0   | 1   | -1/3| 2/3 | 2   |

2.  New Z-row = Old Z-row - (-1) * (New $x_2$ row) = Old Z-row + (New $x_2$ row)
3.  New $x_1$ row = Old $x_1$ row - (0.5) * (New $x_2$ row)

**Simplex Tableau after Iteration 2 (Final):**
| Basis | $Z$ | $x_1$ | $x_2$ | $s_1$ | $s_2$ | RHS |
| :---- | :-: | :-: | :-: | :-: | :-: | :-: |
| $Z$   | 1   | 0   | 0   | 5/3 | 2/3 | 22  |
| $x_1$ | 0   | 1   | 0   | 2/3 | -1/3| 4   |
| $x_2$ | 0   | 0   | 1   | -1/3| 2/3 | 2   |

**Optimal Solution:**
All coefficients in the Z-row are non-negative.
$x_1 = 4$
$x_2 = 2$
Maximum $Z = 22$

---

### 6. Important Points to Remember

*   **Graphical Method:** Limited to two variables. Provides a visual understanding of the feasible region and the impact of constraints.
*   **Simplex Method:** Applicable to any number of variables. A systematic algebraic approach. Requires understanding of standard form, slack/surplus/artificial variables, and tableau manipulation.
*   **Optimality Condition:** For maximization, all coefficients in the objective function row should be non-negative. For minimization, they should be non-positive.
*   **Degeneracy:** Can occur if a minimum ratio test results in a tie, leading to a zero in the basis. This might cause cycling (though rare in practice).
*   **Unbounded Solutions:** If the entering variable column has no positive coefficients, the LP problem is unbounded (if maximizing).
*   **Infeasible Solutions:** If artificial variables remain in the basis with positive values at the end of the Simplex method, the original LP problem is infeasible.
*   **Multiple Optimal Solutions:** Occur when a non-basic variable has a zero coefficient in the final objective function row.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
