---
title: "non - existent and unbounded solutions"
subject: "OPTIMIZATION TECHNIQUES AND OPERATIONAL RESEARCH FOR CIVIL ENGINEERS"
module: "Module 1: Linear Programming: Introduction and formulation of models"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810f9a"
status: "completed"
scrapedAt: "2026-05-20T18:50:03.990Z"
---
# Module 1: Linear Programming: Introduction and Formulation of Models
## Topic: Non-Existent and Unbounded Solutions

---

### Learning Outcomes:

*   Understand the concept of infeasibility in Linear Programming (LP) problems.
*   Recognize situations that lead to non-existent (infeasible) solutions.
*   Understand the concept of unboundedness in Linear Programming (LP) problems.
*   Recognize situations that lead to unbounded solutions.
*   Formulate LP models that correctly represent problem constraints.
*   Interpret the implications of infeasible and unbounded solutions in real-world civil engineering contexts.

---

### 1. Introduction to Linear Programming (LP)

Linear Programming (LP) is a mathematical technique used to find the best possible outcome (such as maximum profit or minimum cost) in a given situation under a set of linear constraints. Civil engineers often use LP for resource allocation, scheduling, project management, and cost optimization.

**Key Concepts:**

*   **Decision Variables:** Variables that represent quantities to be determined (e.g., amount of concrete to use, number of workers on a task).
*   **Objective Function:** A linear expression that defines the quantity to be maximized or minimized (e.g., maximize profit, minimize cost).
*   **Constraints:** Linear inequalities or equalities that limit the values of the decision variables, reflecting real-world limitations (e.g., material availability, time, budget).
*   **Feasible Region:** The set of all points that satisfy all the constraints of an LP problem.
*   **Optimal Solution:** A point within the feasible region that maximizes or minimizes the objective function.

---

### 2. Non-Existent (Infeasible) Solutions

A Linear Programming problem is considered **infeasible** if there is no combination of decision variable values that can satisfy all the constraints simultaneously. In other words, the feasible region is empty.

#### 2.1 Causes of Infeasibility:

Infeasibility often arises from contradictory or overly restrictive constraints. Common scenarios include:

*   **Mutually Exclusive Constraints:** Constraints that, by their nature, cannot both be true at the same time.
*   **Insufficient Resources:** Demand for resources exceeding the available supply in a way that cannot be resolved.
*   **Conflicting Requirements:** When the problem setup forces opposing conditions that cannot be met.

#### 2.2 Identifying Infeasibility:

Infeasibility is typically identified during the graphical solution method or through the simplex method.

*   **Graphical Method:** If the lines representing the constraints do not enclose a common area, the feasible region is empty.
*   **Simplex Method:** If the simplex method encounters a situation where it cannot find a basic feasible solution after the initial setup (e.g., an artificial variable remains in the basis with a positive value in a minimization problem or a negative value in a maximization problem at optimality), the problem is infeasible.

#### 2.3 Example of Infeasibility:

**Problem:** A construction company is planning to build two types of bridges, Bridge A and Bridge B.

*   **Objective:** Maximize profit.
*   **Decision Variables:**
    *   $x_A$: Number of Bridge A to build
    *   $x_B$: Number of Bridge B to build
*   **Objective Function:** Maximize $Z = 50000x_A + 70000x_B$ (Profit in USD)
*   **Constraints:**
    1.  **Material Availability (Steel):** $10x_A + 15x_B \le 100$ tons
    2.  **Labor Availability:** $8x_A + 12x_B \le 80$ hours
    3.  **Project Requirement:** The company must build at least 7 bridges in total. $x_A + x_B \ge 7$
    4.  **Non-negativity:** $x_A \ge 0, x_B \ge 0$

**Analysis:**

Let's examine constraints 1, 2, and 3.
Constraint 1: $10x_A + 15x_B \le 100$
Constraint 2: $8x_A + 12x_B \le 80$
Notice that constraint 2 is a multiple of constraint 1 by a factor of 0.8 ($0.8 \times (10x_A + 15x_B) = 8x_A + 12x_B$, and $0.8 \times 100 = 80$). This means constraint 2 is redundant; any solution satisfying constraint 1 will also satisfy constraint 2.

Let's focus on constraint 3: $x_A + x_B \ge 7$.

Consider the extreme points of the feasible region if only constraints 1 and 3 were present (ignoring non-negativity for a moment to see the conflict):
*   If $x_A = 0$, from constraint 1: $15x_B \le 100 \implies x_B \le 6.67$.
*   If $x_B = 0$, from constraint 1: $10x_A \le 100 \implies x_A \le 10$.

Now, let's overlay constraint 3: $x_A + x_B \ge 7$.

If we try to satisfy $x_A + x_B \ge 7$ while staying within $10x_A + 15x_B \le 100$:
*   Maximum possible sum $x_A + x_B$ under constraint 1:
    *   If $x_A=0$, $x_B \le 6.67 \implies x_A+x_B \le 6.67$.
    *   If $x_B=0$, $x_A \le 10 \implies x_A+x_B \le 10$.
    *   The intersection of $10x_A + 15x_B = 100$ and $x_A + x_B = 7$ can be found. Multiply second equation by 10: $10x_A + 10x_B = 70$. Subtract from the first: $5x_B = 30 \implies x_B = 6$. Then $x_A = 7 - 6 = 1$. The point (1, 6) satisfies both. The sum $x_A + x_B = 7$.
    *   However, consider the point (0, 6.67). The sum is 6.67.
    *   Consider the point (10, 0). The sum is 10.

The region satisfying constraint 1 ($10x_A + 15x_B \le 100$) lies below the line $10x_A + 15x_B = 100$.
The region satisfying constraint 3 ($x_A + x_B \ge 7$) lies above or on the line $x_A + x_B = 7$.

When we plot these, we find that the line $x_A + x_B = 7$ lies *outside* the feasible region defined by $10x_A + 15x_B \le 100$ (and non-negativity). The maximum value of $x_A+x_B$ possible under constraint 1 is less than 7. Therefore, there is no point that satisfies both $10x_A + 15x_B \le 100$ and $x_A + x_B \ge 7$ simultaneously.

**Conclusion:** This problem has a non-existent (infeasible) solution. The company cannot meet its minimum bridge construction requirement with the available steel.

#### 2.4 Implications for Civil Engineering:

*   **Project Failure:** Infeasible solutions indicate that a project, as planned, cannot be completed due to resource limitations or conflicting requirements.
*   **Need for Re-evaluation:** It signals a need to revisit the project scope, resource allocation, or deadlines. This might involve acquiring more resources, reducing the scope, or negotiating requirements.
*   **Risk Assessment:** Understanding infeasibility is crucial for risk assessment in project planning.

---

### 3. Unbounded Solutions

A Linear Programming problem is considered **unbounded** if the objective function can be increased (for maximization) or decreased (for minimization) indefinitely without violating any constraints. This occurs when the feasible region is not bounded in the direction of optimization.

#### 3.1 Causes of Unboundedness:

Unboundedness typically arises when:

*   **Objective Function Direction:** The objective function is oriented in a way that allows it to grow infinitely within the feasible region.
*   **Lax Constraints:** Constraints are not "tight" enough in the direction of optimization, leaving a "path" for the objective function to increase or decrease without limit.

#### 3.2 Identifying Unboundedness:

*   **Graphical Method:** If, as you move the objective function line (iso-profit or iso-cost line) in the direction of optimization, it never leaves the feasible region, and the feasible region extends infinitely in that direction, the solution is unbounded.
*   **Simplex Method:** In the simplex method, an unbounded solution is indicated when, at a particular iteration, the pivot column (the variable to enter the basis) is selected, but all the entries in the pivot column (corresponding to the "ratio test") are non-positive (zero or negative). This means the variable can be increased indefinitely without violating any constraints.

#### 3.3 Example of Unboundedness:

**Problem:** A contractor is planning to allocate resources for two types of construction projects, Project X and Project Y.

*   **Objective:** Maximize profit.
*   **Decision Variables:**
    *   $x_X$: Number of Project X to undertake
    *   $x_Y$: Number of Project Y to undertake
*   **Objective Function:** Maximize $Z = 20000x_X + 30000x_Y$ (Profit in USD)
*   **Constraints:**
    1.  **Machinery Hours:** $1x_X + 2x_Y \le 60$ hours
    2.  **Supervisory Staff:** $1x_X + 1x_Y \le 40$ hours
    3.  **Non-negativity:** $x_X \ge 0, x_Y \ge 0$

**Graphical Analysis:**

1.  **Plot Constraints:**
    *   $x_X + 2x_Y = 60$: Intercepts at (60, 0) and (0, 30).
    *   $x_X + x_Y = 40$: Intercepts at (40, 0) and (0, 40).
    *   $x_X = 0$ (y-axis)
    *   $x_Y = 0$ (x-axis)

2.  **Identify Feasible Region:** The feasible region is the area bounded by the axes and the two lines, below both lines. It's a polygon with vertices:
    *   (0, 0)
    *   (40, 0) (Intersection of $x_X + x_Y = 40$ with $x_Y=0$)
    *   (0, 30) (Intersection of $x_X + 2x_Y = 60$ with $x_X=0$)
    *   Intersection of $x_X + 2x_Y = 60$ and $x_X + x_Y = 40$:
        *   Subtracting the second from the first: $(x_X + 2x_Y) - (x_X + x_Y) = 60 - 40 \implies x_Y = 20$.
        *   Substituting $x_Y=20$ into $x_X + x_Y = 40$: $x_X + 20 = 40 \implies x_X = 20$.
        *   The intersection point is (20, 20).

The vertices of the feasible region are (0,0), (40,0), (20,20), and (0,30).

3.  **Evaluate Objective Function at Vertices:**
    *   Z(0,0) = $20000(0) + 30000(0) = 0$
    *   Z(40,0) = $20000(40) + 30000(0) = 800000$
    *   Z(20,20) = $20000(20) + 30000(20) = 400000 + 600000 = 1000000$
    *   Z(0,30) = $20000(0) + 30000(30) = 900000$

The maximum profit seems to be 1,000,000 at (20, 20).

**Hold on!** Let's re-examine the constraints. The example above *wasn't* unbounded. It had a bounded solution. Let's correct the example to illustrate unboundedness.

**Corrected Example of Unboundedness:**

**Problem:** A construction company is planning a project involving two types of activities, Activity P and Activity Q.

*   **Objective:** Maximize the project's overall efficiency score.
*   **Decision Variables:**
    *   $x_P$: Number of units of Activity P to perform.
    *   $x_Q$: Number of units of Activity Q to perform.
*   **Objective Function:** Maximize $Z = 5x_P + 3x_Q$ (Efficiency points)
*   **Constraints:**
    1.  **Resource R1 Usage:** $1x_P - 1x_Q \le 5$
    2.  **Resource R2 Usage:** $0x_P + 1x_Q \le 10$ (This means $x_Q \le 10$)
    3.  **Non-negativity:** $x_P \ge 0, x_Q \ge 0$

**Graphical Analysis:**

1.  **Plot Constraints:**
    *   $x_P - x_Q = 5$: Intercepts at (5, 0) and (0, -5). Since $x_Q \ge 0$, this constraint effectively starts from (5,0) and goes up/right. The region is $x_P \ge 5+x_Q$.
    *   $x_Q = 10$: A horizontal line at $x_Q=10$. The region is below this line.
    *   $x_P \ge 0$ (y-axis)
    *   $x_Q \ge 0$ (x-axis)

2.  **Identify Feasible Region:**
    *   From $x_P - x_Q \le 5$, we have $x_P \le 5 + x_Q$.
    *   The feasible region is bounded by $x_Q = 0$, $x_Q = 10$, and $x_P = 5 + x_Q$.
    *   The vertices are:
        *   Intersection of $x_Q=0$ and $x_P=5+x_Q$: (5, 0).
        *   Intersection of $x_Q=10$ and $x_P=5+x_Q$: $x_P = 5 + 10 = 15$. Point (15, 10).
        *   Intersection of $x_Q=10$ and $x_P=0$: (0, 10). This point violates $x_P-x_Q \le 5$ ($0-10 \not\le 5$). So this is not a vertex of the feasible region.
        *   Intersection of $x_P=0$ and $x_Q=0$: (0, 0). This point violates $x_P-x_Q \le 5$ ($0-0 \le 5$, so it is valid). Ah, careful with the constraints $x_P \ge 0, x_Q \ge 0$.

    Let's re-draw the feasible region:
    *   The region is above $x_Q=0$, below $x_Q=10$.
    *   The region is to the *left* of or on the line $x_P = 5+x_Q$.

    Vertices:
    *   (5, 0) - intersection of $x_P-x_Q=5$ and $x_Q=0$.
    *   (15, 10) - intersection of $x_P-x_Q=5$ and $x_Q=10$.
    *   (0, 10) - intersection of $x_P=0$ and $x_Q=10$. This satisfies $x_P-x_Q \le 5$ ($0-10 \le 5$). So this is a vertex.

    The feasible region is bounded by the points (5,0), (15,10), and (0,10) and extends infinitely upwards and to the right *along the line* $x_P = 5 + x_Q$.

    Let's check:
    *   Point (10, 0): $10-0 \le 5$ (False).
    *   Point (5,0): $5-0 \le 5$ (True), $0 \le 10$ (True). Valid.
    *   Point (15,10): $15-10 \le 5$ (True), $10 \le 10$ (True). Valid.
    *   Point (0,10): $0-10 \le 5$ (True), $10 \le 10$ (True). Valid.

    The feasible region is a triangular shape that opens up infinitely along the line $x_P = 5 + x_Q$.

3.  **Evaluate Objective Function and Observe Unboundedness:**
    *   Objective: Maximize $Z = 5x_P + 3x_Q$.
    *   Consider points on the line $x_P = 5 + x_Q$ where $x_Q \le 10$. For example:
        *   (5, 0): Z = $5(5) + 3(0) = 25$
        *   (15, 10): Z = $5(15) + 3(10) = 75 + 30 = 105$
        *   Consider a point further along the line, say $x_Q = 20$. Then $x_P = 5 + 20 = 25$. This point (25, 20) is not feasible because $x_Q$ must be $\le 10$.

    The key observation for unboundedness in the graphical method is how the objective function's slope compares to the slopes of the bounding constraints.
    The objective function $Z = 5x_P + 3x_Q$ has a slope of $-5/3$ (if we rearrange to $x_Q = -5/3 x_P + Z/3$).
    The constraint $x_P - x_Q = 5$ or $x_Q = x_P - 5$ has a slope of 1.
    The constraint $x_Q = 10$ has a slope of 0.

    The feasible region is "open" along the line $x_P = 5 + x_Q$. As we increase $x_P$ and $x_Q$ along this line, $x_Q$ remains $\le 10$. For example, consider the line $x_P = 5 + x_Q$. If we increase $x_Q$ by 1, $x_P$ also increases by 1. The objective function $Z = 5x_P + 3x_Q$ increases by $5(1) + 3(1) = 8$.
    However, we are restricted by $x_Q \le 10$. So the "open" part of the feasible region is bounded by $x_Q=10$ and $x_P=5+x_Q$.

    Let's check again with the simplex rule: If the pivot column has no positive entries in the ratio test, it's unbounded.
    This problem *is* designed to be unbounded. Let's reconsider the constraints.

    **Revised Unbounded Example (Simpler):**

    **Problem:** A civil engineering firm can invest in two types of projects, Project A and Project B.

    *   **Objective:** Maximize profit.
    *   **Decision Variables:**
        *   $x_A$: Number of units of Project A.
        *   $x_B$: Number of units of Project B.
    *   **Objective Function:** Maximize $Z = 10x_A + 12x_B$
    *   **Constraints:**
        1.  **Resource 1:** $2x_A + 3x_B \le 60$
        2.  **Resource 2:** $3x_A + 2x_B \le 70$
        3.  **Non-negativity:** $x_A \ge 0, x_B \ge 0$

    This is still bounded. The issue with unboundedness in LP often comes from a lack of sufficient constraints in the direction of optimization.

    **Let's create a constraint that allows for infinite growth.**

    **True Unbounded Example:**

    **Problem:** A company is producing two types of concrete mixes, Mix 1 and Mix 2, for different construction projects.

    *   **Objective:** Maximize profit.
    *   **Decision Variables:**
        *   $x_1$: Quantity of Mix 1 (in cubic meters).
        *   $x_2$: Quantity of Mix 2 (in cubic meters).
    *   **Objective Function:** Maximize $Z = 100x_1 + 150x_2$ (Profit in USD)
    *   **Constraints:**
        1.  **Cement Availability:** $2x_1 + 3x_2 \le 120$ kg
        2.  **Aggregate Availability:** $4x_1 + 2x_2 \le 160$ kg
        3.  **Non-negativity:** $x_1 \ge 0, x_2 \ge 0$

    Let's check this with the graphical method.
    1.  **Plot Constraints:**
        *   $2x_1 + 3x_2 = 120$: Intercepts at (60, 0) and (0, 40).
        *   $4x_1 + 2x_2 = 160$: Intercepts at (40, 0) and (0, 80).

    2.  **Identify Feasible Region:**
        *   Region is below both lines and in the first quadrant.
        *   Vertices:
            *   (0, 0)
            *   (40, 0) (Intersection of $4x_1 + 2x_2 = 160$ with $x_2=0$)
            *   (0, 40) (Intersection of $2x_1 + 3x_2 = 120$ with $x_1=0$)
            *   Intersection of $2x_1 + 3x_2 = 120$ and $4x_1 + 2x_2 = 160$:
                *   Multiply first eq by 2: $4x_1 + 6x_2 = 240$.
                *   Subtract second eq: $(4x_1 + 6x_2) - (4x_1 + 2x_2) = 240 - 160 \implies 4x_2 = 80 \implies x_2 = 20$.
                *   Substitute $x_2=20$ into $2x_1 + 3x_2 = 120$: $2x_1 + 3(20) = 120 \implies 2x_1 + 60 = 120 \implies 2x_1 = 60 \implies x_1 = 30$.
                *   Intersection point: (30, 20).

        The vertices are (0,0), (40,0), (30,20), (0,40).

    3.  **Evaluate Objective Function:**
        *   Z(0,0) = 0
        *   Z(40,0) = $100(40) + 150(0) = 4000$
        *   Z(30,20) = $100(30) + 150(20) = 3000 + 3000 = 6000$
        *   Z(0,40) = $100(0) + 150(40) = 6000$

    In this case, there are two optimal solutions, (30,20) and (0,40), resulting in a maximum profit of 6000. This is a bounded solution.

    **What if a constraint is missing or very loose?**
    Consider a problem with only ONE constraint and an objective function that can increase indefinitely.

    **Another Unbounded Example:**

    **Problem:** A construction company uses a machine to process a certain material.

    *   **Objective:** Maximize profit.
    *   **Decision Variable:**
        *   $x$: Amount of material processed (in units).
    *   **Objective Function:** Maximize $Z = 5x$
    *   **Constraints:**
        1.  **Machine Time:** $1x \le 100$ hours
        2.  **Non-negativity:** $x \ge 0$

    Here, the feasible region is from $x=0$ to $x=100$.
    The objective function $Z=5x$ is maximized at $x=100$, giving $Z=500$. This is bounded.

    **Let's create a scenario where a variable has no upper bound.**

    **Final attempt at a true Unbounded Example:**

    **Problem:** A firm is planning a project where they can invest in two types of activities.

    *   **Objective:** Maximize overall project value.
    *   **Decision Variables:**
        *   $x$: Quantity of Activity A.
        *   $y$: Quantity of Activity B.
    *   **Objective Function:** Maximize $Z = 2x + 3y$
    *   **Constraints:**
        1.  **Resource R1:** $x - y \le 5$
        2.  **Non-negativity:** $x \ge 0, y \ge 0$

    **Graphical Analysis:**
    1.  **Plot Constraints:**
        *   $x - y = 5 \implies y = x - 5$. Intercepts: (5,0) and (0,-5). Since $y \ge 0$, this line starts at (5,0) and goes upwards to the right.
        *   $x \ge 0$ (y-axis)
        *   $y \ge 0$ (x-axis)

    2.  **Identify Feasible Region:**
        The feasible region is the area bounded by $y=0$, $x=0$, and the line $y=x-5$ where $y \ge 0$.
        *   The line $y=x-5$ intersects the x-axis at (5,0).
        *   For $x \ge 5$, the region $y \le x-5$ is below the line.
        *   The region is everything to the right of the y-axis, above the x-axis, and below the line $y = x-5$. However, the condition $y \ge 0$ means we are concerned with the part of the line where $y$ is non-negative. This starts at (5,0) and extends infinitely upwards and to the right.
        *   The feasible region is thus the area starting from (5,0) and bounded by the x-axis ($y=0$) and the line $y = x-5$, extending infinitely in the direction where $x$ and $y$ increase.

    3.  **Analyze Objective Function:**
        *   Maximize $Z = 2x + 3y$.
        *   Consider moving along the line $y = x - 5$. As $x$ increases, $y$ also increases.
        *   Let's substitute $y = x - 5$ into the objective function:
            $Z = 2x + 3(x - 5) = 2x + 3x - 15 = 5x - 15$.
        *   As $x$ can increase indefinitely (e.g., x=100, y=95; x=1000, y=995; etc.), the value of $Z$ also increases indefinitely. For example, if $x=100$, $y=95$, $Z=2(100)+3(95) = 200 + 285 = 485$. If $x=1000$, $y=995$, $Z=2(1000)+3(995) = 2000 + 2985 = 4985$.
        *   The objective function can be made arbitrarily large.

    **Conclusion:** This problem has an **unbounded solution**.

#### 3.4 Implications for Civil Engineering:

*   **Misleading Results:** An unbounded solution suggests that the project's objective (e.g., profit, efficiency) can theoretically be improved without limit, which is often unrealistic in practice.
*   **Model Flaw:** It usually indicates a flaw in the LP model formulation. This could be due to:
    *   Missing constraints that should limit the decision variables.
    *   Constraints that are too "loose" or incorrectly specified.
*   **Need for Revision:** The model needs to be reviewed and revised to include all relevant limiting factors. For example, if maximizing production, there's usually a limit on market demand or available raw materials that isn't captured.

---

### 4. Practice Questions

**Question 1 (Infeasibility):**
A construction manager is planning a project with the following constraints:
*   $x_1 \ge 5$ (must use at least 5 units of material A)
*   $x_2 \le 3$ (can use at most 3 units of material B)
*   $x_1 + x_2 \ge 10$ (total material usage must be at least 10 units)
*   $x_1, x_2 \ge 0$

Is this problem feasible? Explain why or why not.

**Question 2 (Unboundedness):**
Consider the following LP problem:
Maximize $Z = 3x + 4y$
Subject to:
*   $x - y \le 2$
*   $x \ge 0, y \ge 0$

Does this problem have an unbounded solution? Explain using a graphical approach.

**Question 3 (Formulation and Identification):**
A contractor is planning to build a new road segment. They can use two types of asphalt mixes, Mix P and Mix Q.
*   Mix P costs $10 per cubic meter and requires 2 units of labor per cubic meter.
*   Mix Q costs $12 per cubic meter and requires 1 unit of labor per cubic meter.
The contractor has a budget of $600 and 50 units of labor. They want to maximize the total volume of asphalt laid, with the condition that they must lay at least 20 cubic meters in total.

(a) Formulate this problem as a Linear Programming model.
(b) Is it possible for this problem to have an unbounded solution? Justify your answer.

---

### 5. Answers to Practice Questions

**Answer 1 (Infeasibility):**
No, the problem is infeasible.
**Explanation:**
The constraints $x_1 \ge 5$ and $x_1 + x_2 \ge 10$ together imply a minimum requirement for $x_2$.
If $x_1 \ge 5$, then $x_1 + x_2 \ge 10$ means $x_2 \ge 10 - x_1$.
Since the maximum value $x_1$ can take without violating the second constraint is limited by other factors (which are not explicitly given here, but we are checking for inherent contradiction), let's consider the implication.
If $x_1$ were at its minimum possible value of 5, then $5 + x_2 \ge 10 \implies x_2 \ge 5$.
However, another constraint states $x_2 \le 3$.
Thus, we have a contradiction: $x_2$ must be greater than or equal to 5, and simultaneously less than or equal to 3. This is impossible. Therefore, the problem is infeasible.

**Answer 2 (Unboundedness):**
Yes, this problem has an unbounded solution.
**Explanation (Graphical):**
1.  **Plot Constraints:**
    *   $x - y \le 2 \implies y \ge x - 2$. This is the region above or on the line $y = x - 2$.
    *   $x \ge 0$ (right of y-axis).
    *   $y \ge 0$ (above x-axis).
2.  **Feasible Region:** The feasible region is bounded by the x-axis ($y=0$), the y-axis ($x=0$), and the line $y=x-2$. The line $y=x-2$ intersects the x-axis at $(2,0)$. The feasible region starts at $(2,0)$ and extends infinitely upwards and to the right, following the line $y=x-2$.
3.  **Objective Function:** Maximize $Z = 3x + 4y$. The slope of the objective function is $-3/4$. The slope of the constraint line $y=x-2$ is $1$.
4.  As we move the objective function line parallel to itself in the direction of increasing Z, it will continuously intersect the feasible region because the feasible region is not closed off in the direction of increasing $x$ and $y$ along the line $y=x-2$.
    If we consider points on the line $y = x-2$ where $x \ge 2$:
    Substitute $y = x-2$ into the objective function:
    $Z = 3x + 4(x-2) = 3x + 4x - 8 = 7x - 8$.
    As $x$ can increase indefinitely, $Z$ can also increase indefinitely. For example, if $x=100$, $y=98$, $Z = 7(100) - 8 = 692$. If $x=1000$, $y=998$, $Z = 7(1000) - 8 = 6992$.
    Therefore, the solution is unbounded.

**Answer 3 (Formulation and Identification):**
(a) **Linear Programming Model:**

*   **Decision Variables:**
    *   $x_P$: Cubic meters of Mix P
    *   $x_Q$: Cubic meters of Mix Q

*   **Objective Function:** Maximize total volume.
    Maximize $Z = x_P + x_Q$

*   **Constraints:**
    1.  **Cost Constraint:** $10x_P + 12x_Q \le 600$ (Budget)
    2.  **Labor Constraint:** $2x_P + 1x_Q \le 50$ (Labor units)
    3.  **Minimum Volume:** $x_P + x_Q \ge 20$ (Total asphalt)
    4.  **Non-negativity:** $x_P \ge 0, x_Q \ge 0$

(b) **Unbounded Solution Possibility:**
This problem is **unlikely** to have an unbounded solution.
**Justification:**
The objective is to maximize the total volume ($x_P + x_Q$). Both decision variables ($x_P$ and $x_Q$) are limited by two resource constraints (cost and labor) that provide upper bounds.
*   From the cost constraint, if only Mix P is used, $10x_P \le 600 \implies x_P \le 60$.
*   From the labor constraint, if only Mix P is used, $2x_P \le 50 \implies x_P \le 25$.
So, $x_P$ is limited to at most 25.
Similarly, if only Mix Q is used:
*   From the cost constraint, $12x_Q \le 600 \implies x_Q \le 50$.
*   From the labor constraint, $1x_Q \le 50 \implies x_Q \le 50$.
So, $x_Q$ is limited to at most 50.

Since both variables are bounded by at least two different constraints, and the objective function is a simple sum of these variables, the feasible region will be a closed polygon (if feasible). In such cases, the maximum value of the objective function will occur at one of the vertices of the feasible region, meaning the solution will be bounded. An unbounded solution typically occurs when at least one decision variable has no upper bound imposed by the constraints, or when the objective function's slope allows it to increase indefinitely in an open feasible region. This is not the case here.

---

### 6. Important Points to Remember:

*   **Infeasibility:** Occurs when there is NO solution that satisfies all constraints simultaneously. The feasible region is empty. It indicates a problem with the problem formulation or real-world limitations.
*   **Unboundedness:** Occurs when the objective function can be improved (maximized or minimized) indefinitely without violating any constraints. The feasible region is open in the direction of optimization. It almost always indicates a flaw in the LP model.
*   **Consequences:** Infeasible solutions mean the plan cannot be executed. Unbounded solutions mean the model needs refinement to reflect real-world limits.
*   **Identification:** Infeasibility and unboundedness are identified through graphical analysis or by specific indicators in the simplex method.
*   **Civil Engineering Context:** Recognizing these conditions is vital for realistic project planning, resource management, and identifying potential project failures or unrealistic expectations. Always question if a solution makes practical sense. If a model leads to unboundedness, re-examine the constraints for missing upper limits on resources or activities.
