---
title: "Graphical method"
subject: "QUANTITATIVE TECHNIQUES FOR ENGINEERS"
module: "Module 1: Introduction to Quantitative Techniques: Basics of Operations Research – Applications"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463a5f"
status: "completed"
scrapedAt: "2026-05-20T18:07:19.450Z"
---
# QUANTITATIVE TECHNIQUES FOR ENGINEERS

## Module 1: Introduction to Quantitative Techniques: Basics of Operations Research – Applications

### Topic: Graphical Method

---

### 1. Introduction to Operations Research (OR) and its Scope

**Operations Research (OR)** is a discipline that deals with the application of advanced analytical methods to help make better decisions. It is an aid to management in making decisions, and therefore it is sometimes called "management science" or "decision science." OR uses scientific methods and mathematical modeling to solve complex problems faced by organizations.

**Key Concepts:**

*   **Decision Making:** The core of OR is to assist in making optimal or near-optimal decisions in complex situations.
*   **Problem Solving:** OR tackles problems that are often too complex to solve using intuition or simple trial-and-error.
*   **Modeling:** OR involves creating mathematical representations (models) of real-world systems to analyze and predict behavior.
*   **Optimization:** A primary goal of OR is to find the best possible solution (maximum profit, minimum cost, etc.) within given constraints.

**Applications of OR (as per Course Outcomes):**

*   **Linear Programming (CO1):** Resource allocation, production planning, scheduling.
*   **Decision Theory (CO2):** Investment decisions, marketing strategies, project selection under uncertainty.
*   **Sequencing and Scheduling (CO3):** Job shop scheduling, project management (PERT/CPM).
*   **Game Theory (CO4):** Competitive strategy, bidding, negotiation.
*   **Queuing Theory (CO5):** Service system design (e.g., call centers, waiting lines in banks), inventory management.

**Textbook References:**

*   **Paneerselvam R. (Third edition, 2023):** Chapters on Introduction to Operations Research, Linear Programming.
*   **Taha (Tenth edition, 2019):** Chapters on Introduction to Operations Research, Linear Programming.
*   **Hillier & Lieberman (Tenth edition, 2017):** Chapters on Introduction to Operations Research, Linear Programming.

---

### 2. Linear Programming (LP)

**Definition:** Linear Programming is a mathematical technique used for optimizing a linear objective function subject to a set of linear constraints. It is widely used in various fields for resource allocation, planning, and decision-making.

**Key Components of an LP Problem:**

1.  **Decision Variables:** These are the variables we need to determine the optimal values for (e.g., the quantity of product A to produce).
2.  **Objective Function:** A linear function that represents the goal to be optimized (maximized or minimized) (e.g., maximize profit, minimize cost).
3.  **Constraints:** Linear inequalities or equalities that represent the limitations or restrictions on the decision variables (e.g., limited raw materials, production capacity).

**Standard Form of an LP Problem:**

*   Objective function is to be maximized or minimized.
*   All decision variables are non-negative ($\ge 0$).
*   All constraints are expressed as linear equations or inequalities.

---

### 3. The Graphical Method for Solving Linear Programming Problems

The graphical method is a visual technique used to solve Linear Programming problems that have **only two decision variables**. It's a foundational method for understanding LP concepts before moving to more complex algebraic methods.

**Learning Outcome Addressed:** CO1 (To formulate and solve linear programming and transportation problems) - specifically, solving LP problems with two variables.
**Knowledge Level:** K4 (Formulate and solve)

**Steps Involved:**

1.  **Formulate the Linear Programming Problem:**
    *   Identify the decision variables.
    *   Define the objective function (to be maximized or minimized).
    *   Express all constraints as linear inequalities.
    *   Ensure non-negativity constraints for all decision variables.

2.  **Plot the Constraints on a Graph:**
    *   Treat each constraint inequality as an equation to find the boundary line.
    *   For each constraint:
        *   Find at least two points on the line (e.g., by setting one variable to 0 and solving for the other, or by finding the x and y intercepts).
        *   Plot these points on a 2D graph with one decision variable on the x-axis and the other on the y-axis.
        *   Draw a straight line connecting these points.
    *   **Determine the Feasible Region:**
        *   For each constraint inequality, choose a test point (usually the origin (0,0) if it's not on the boundary line) and substitute its coordinates into the inequality.
        *   If the inequality holds true, shade the region that includes the test point. If it's false, shade the region away from the test point.
        *   The **feasible region** is the area on the graph where all shaded regions of the constraints overlap. It represents all possible combinations of decision variables that satisfy all constraints.
        *   **Important:** Ensure the feasible region is bounded by the constraints and the non-negativity constraints (usually the first quadrant if variables are non-negative).

3.  **Identify the Corner Points (Vertices) of the Feasible Region:**
    *   The feasible region is a convex polygon.
    *   The optimal solution (if it exists) will occur at one of the corner points of this polygon.
    *   Corner points are formed by the intersection of two or more constraint lines (including the axes if they form boundaries).
    *   Solve the systems of linear equations corresponding to the intersecting lines to find the coordinates of these corner points.

4.  **Evaluate the Objective Function at Each Corner Point:**
    *   Substitute the coordinates of each corner point into the objective function.
    *   Calculate the value of the objective function at each point.

5.  **Determine the Optimal Solution:**
    *   **For Maximization:** The corner point that yields the highest value for the objective function is the optimal solution.
    *   **For Minimization:** The corner point that yields the lowest value for the objective function is the optimal solution.
    *   If the objective function line is parallel to one of the constraint lines that forms an edge of the feasible region, then there might be multiple optimal solutions (all points on that edge segment).

**Important Points to Remember (Graphical Method):**

*   **Only for two decision variables:** The graphical method is impractical for more than two variables due to the inability to visualize higher dimensions.
*   **Feasible Region:** Must be correctly identified by shading the correct side of each constraint line.
*   **Corner Points:** All vertices of the feasible region must be found.
*   **Objective Function Line:** Can be moved parallel to itself to find the extreme point that optimizes the objective function.

---

### 4. Example: Maximization Problem

**Problem Statement:** A company manufactures two products, X and Y. Product X requires 1 hour of machine time and 2 kg of raw material. Product Y requires 2 hours of machine time and 1 kg of raw material. The company has 100 hours of machine time and 80 kg of raw material available per week. The profit for product X is $3 per unit, and the profit for product Y is $2 per unit. Formulate the LP problem and solve it graphically to maximize profit.

**Solution:**

**Step 1: Formulate the LP Problem**

*   **Decision Variables:**
    *   Let $x$ = number of units of product X to produce.
    *   Let $y$ = number of units of product Y to produce.

*   **Objective Function:**
    *   Maximize Profit, $Z = 3x + 2y$

*   **Constraints:**
    *   Machine Time: $1x + 2y \le 100$
    *   Raw Material: $2x + 1y \le 80$
    *   Non-negativity: $x \ge 0, y \ge 0$

**Step 2: Plot the Constraints on a Graph**

We'll plot the boundary lines for each constraint:

*   **Constraint 1: $x + 2y = 100$**
    *   If $x = 0$, $2y = 100 \Rightarrow y = 50$. Point: (0, 50)
    *   If $y = 0$, $x = 100$. Point: (100, 0)

*   **Constraint 2: $2x + y = 80$**
    *   If $x = 0$, $y = 80$. Point: (0, 80)
    *   If $y = 0$, $2x = 80 \Rightarrow x = 40$. Point: (40, 0)

*   **Non-negativity Constraints: $x \ge 0, y \ge 0$**
    *   This restricts us to the first quadrant of the graph.

Now, determine the feasible region by shading:

*   For $x + 2y \le 100$: Test (0,0). $0 + 0 \le 100$ (True). Shade towards the origin.
*   For $2x + y \le 80$: Test (0,0). $0 + 0 \le 80$ (True). Shade towards the origin.

The feasible region is the area bounded by the x-axis, y-axis, and the segments of the lines $x + 2y = 100$ and $2x + y = 80$ that are closest to the origin.

**Step 3: Identify the Corner Points**

The corner points of the feasible region are:

1.  **Origin:** (0, 0)
2.  **Intersection of y-axis ($x=0$) and $x + 2y = 100$:**
    *   $0 + 2y = 100 \Rightarrow y = 50$. Point: (0, 50)
3.  **Intersection of x-axis ($y=0$) and $2x + y = 80$:**
    *   $2x + 0 = 80 \Rightarrow x = 40$. Point: (40, 0)
4.  **Intersection of $x + 2y = 100$ and $2x + y = 80$:**
    *   From $2x + y = 80$, we get $y = 80 - 2x$.
    *   Substitute this into the first equation: $x + 2(80 - 2x) = 100$
    *   $x + 160 - 4x = 100$
    *   $-3x = 100 - 160$
    *   $-3x = -60$
    *   $x = 20$
    *   Now find $y$: $y = 80 - 2(20) = 80 - 40 = 40$. Point: (20, 40)

So, the corner points are (0,0), (0,50), (40,0), and (20,40).

**Step 4: Evaluate the Objective Function at Each Corner Point**

Objective Function: $Z = 3x + 2y$

*   **At (0,0):** $Z = 3(0) + 2(0) = 0$
*   **At (0,50):** $Z = 3(0) + 2(50) = 100$
*   **At (40,0):** $Z = 3(40) + 2(0) = 120$
*   **At (20,40):** $Z = 3(20) + 2(40) = 60 + 80 = 140$

**Step 5: Determine the Optimal Solution**

The maximum value of $Z$ is 140, which occurs at the corner point (20, 40).

**Answer:** The company should produce 20 units of product X and 40 units of product Y to achieve a maximum profit of $140.

---

### 5. Example: Minimization Problem

**Problem Statement:** A company produces two products, A and B. Product A requires 2 liters of chemical 1 and 3 liters of chemical 2. Product B requires 4 liters of chemical 1 and 1 liter of chemical 2. The company needs to produce at least 8 liters of chemical 1 and at least 6 liters of chemical 2. The cost of producing product A is $5 per unit, and the cost of producing product B is $7 per unit. Formulate the LP problem and solve it graphically to minimize cost.

**Solution:**

**Step 1: Formulate the LP Problem**

*   **Decision Variables:**
    *   Let $x$ = number of units of product A to produce.
    *   Let $y$ = number of units of product B to produce.

*   **Objective Function:**
    *   Minimize Cost, $Z = 5x + 7y$

*   **Constraints:**
    *   Chemical 1: $2x + 4y \ge 8$ (Simplifies to $x + 2y \ge 4$)
    *   Chemical 2: $3x + 1y \ge 6$
    *   Non-negativity: $x \ge 0, y \ge 0$

**Step 2: Plot the Constraints on a Graph**

Boundary lines:

*   **Constraint 1: $x + 2y = 4$**
    *   If $x = 0$, $2y = 4 \Rightarrow y = 2$. Point: (0, 2)
    *   If $y = 0$, $x = 4$. Point: (4, 0)

*   **Constraint 2: $3x + y = 6$**
    *   If $x = 0$, $y = 6$. Point: (0, 6)
    *   If $y = 0$, $3x = 6 \Rightarrow x = 2$. Point: (2, 0)

*   **Non-negativity Constraints: $x \ge 0, y \ge 0$**
    *   First quadrant.

Feasible Region Shading:

*   For $x + 2y \ge 4$: Test (0,0). $0 + 0 \ge 4$ (False). Shade away from the origin.
*   For $3x + y \ge 6$: Test (0,0). $0 + 0 \ge 6$ (False). Shade away from the origin.

The feasible region is the area in the first quadrant that is above both lines.

**Step 3: Identify the Corner Points**

The corner points are:

1.  **Intersection of y-axis ($x=0$) and $3x + y = 6$:**
    *   $3(0) + y = 6 \Rightarrow y = 6$. Point: (0, 6)
2.  **Intersection of x-axis ($y=0$) and $x + 2y = 4$:**
    *   $x + 2(0) = 4 \Rightarrow x = 4$. Point: (4, 0)
3.  **Intersection of $x + 2y = 4$ and $3x + y = 6$:**
    *   From $3x + y = 6$, we get $y = 6 - 3x$.
    *   Substitute into the first equation: $x + 2(6 - 3x) = 4$
    *   $x + 12 - 6x = 4$
    *   $-5x = 4 - 12$
    *   $-5x = -8$
    *   $x = 8/5 = 1.6$
    *   Now find $y$: $y = 6 - 3(1.6) = 6 - 4.8 = 1.2$. Point: (1.6, 1.2)

So, the corner points are (0,6), (4,0), and (1.6, 1.2).

**Step 4: Evaluate the Objective Function at Each Corner Point**

Objective Function: $Z = 5x + 7y$

*   **At (0,6):** $Z = 5(0) + 7(6) = 42$
*   **At (4,0):** $Z = 5(4) + 7(0) = 20$
*   **At (1.6, 1.2):** $Z = 5(1.6) + 7(1.2) = 8 + 8.4 = 16.4$

**Step 5: Determine the Optimal Solution**

The minimum value of $Z$ is 16.4, which occurs at the corner point (1.6, 1.2).

**Answer:** The company should produce 1.6 units of product A and 1.2 units of product B to achieve a minimum cost of $16.4. (In a real-world scenario, you might need to consider if fractional units are permissible or if rounding is necessary, which would then lead to exploring nearby integer points if integer programming is required).

---

### 6. Handling Special Cases in Graphical Method

*   **No Feasible Region:** If the shaded regions of the constraints do not overlap, the problem has no feasible solution. This occurs when constraints are contradictory.
*   **Unbounded Feasible Region:** If the feasible region extends infinitely in one or more directions, it is unbounded.
    *   **For Maximization:** If an unbounded region allows the objective function to increase infinitely, there is no optimal solution.
    *   **For Minimization:** If an unbounded region allows the objective function to decrease infinitely, there is no optimal solution.
    *   However, if the feasible region is unbounded and the objective function is to be minimized, an optimal solution may still exist if the "lowest" point of the objective function line intersects the unbounded region.
*   **Multiple Optimal Solutions:** If the objective function line is parallel to one of the constraint lines that forms an edge of the feasible region, then any point on that edge segment will yield the same optimal value.

**Example: Multiple Optimal Solutions**

Consider the objective function $Z = 2x + 4y$ and a feasible region where one of the boundary lines is $x + 2y = 50$. If the optimal value of $Z$ occurs along this line segment within the feasible region, then all points on that segment are optimal solutions.

**Example: No Feasible Region**

Maximize $Z = 3x + 2y$ subject to:
*   $x + y \le 5$
*   $x + y \ge 10$
*   $x \ge 0, y \ge 0$

Plotting these, you'll see the region $x+y \le 5$ and $x+y \ge 10$ do not overlap, resulting in no feasible region.

---

### 7. Practice Questions and Exercises

**Question 1:**
A firm manufactures two products, P1 and P2. Each unit of P1 requires 2 hours of machining and 3 hours of assembly. Each unit of P2 requires 3 hours of machining and 2 hours of assembly. The firm has 100 hours of machining time and 120 hours of assembly time available per week. The profit per unit of P1 is $4 and per unit of P2 is $5.
Formulate the linear programming problem and solve it graphically to maximize the firm's profit.
*(Hint: You will need to identify decision variables, objective function, and constraints.)*

**Question 2:**
Solve the following LP problem graphically:
Minimize $Z = 10x_1 + 12x_2$
Subject to:
$x_1 + x_2 \ge 8$
$2x_1 + 3x_2 \ge 18$
$x_1 \ge 0, x_2 \ge 0$

**Question 3:**
Consider the following LP problem:
Maximize $Z = 5x + 3y$
Subject to:
$x + y \le 6$
$2x + y \le 10$
$x \ge 0, y \ge 0$

Solve this problem graphically. What are the corner points of the feasible region? What is the optimal solution?

---

### 8. Answers to Practice Questions

**Answer to Question 1:**

*   **Decision Variables:**
    *   $x_1$ = number of units of product P1
    *   $x_2$ = number of units of product P2

*   **Objective Function:**
    *   Maximize $Z = 4x_1 + 5x_2$

*   **Constraints:**
    *   Machining time: $2x_1 + 3x_2 \le 100$
    *   Assembly time: $3x_1 + 2x_2 \le 120$
    *   Non-negativity: $x_1 \ge 0, x_2 \ge 0$

**Graphical Solution:**

1.  **Plot Constraints:**
    *   $2x_1 + 3x_2 = 100$: Points (0, 33.33), (50, 0)
    *   $3x_1 + 2x_2 = 120$: Points (0, 60), (40, 0)

2.  **Feasible Region:** Shaded area in the first quadrant bounded by the axes and the two constraint lines.

3.  **Corner Points:**
    *   (0, 0)
    *   (0, 33.33) (Intersection of $x_1=0$ and $2x_1 + 3x_2 = 100$)
    *   (40, 0) (Intersection of $x_2=0$ and $3x_1 + 2x_2 = 120$)
    *   Intersection of $2x_1 + 3x_2 = 100$ and $3x_1 + 2x_2 = 120$:
        *   Multiply first eq by 3: $6x_1 + 9x_2 = 300$
        *   Multiply second eq by 2: $6x_1 + 4x_2 = 240$
        *   Subtract the second from the first: $5x_2 = 60 \Rightarrow x_2 = 12$
        *   Substitute $x_2=12$ into $3x_1 + 2x_2 = 120$: $3x_1 + 2(12) = 120 \Rightarrow 3x_1 + 24 = 120 \Rightarrow 3x_1 = 96 \Rightarrow x_1 = 32$.
        *   Intersection point: (32, 12)

4.  **Evaluate Objective Function ($Z = 4x_1 + 5x_2$):**
    *   (0, 0): $Z = 0$
    *   (0, 33.33): $Z = 4(0) + 5(33.33) = 166.65$
    *   (40, 0): $Z = 4(40) + 5(0) = 160$
    *   (32, 12): $Z = 4(32) + 5(12) = 128 + 60 = 188$

5.  **Optimal Solution:** Maximum profit is $188 at (32, 12). The firm should produce 32 units of P1 and 12 units of P2.

---

**Answer to Question 2:**

*   **Objective Function:** Minimize $Z = 10x_1 + 12x_2$
*   **Constraints:**
    *   $x_1 + x_2 \ge 8$
    *   $2x_1 + 3x_2 \ge 18$
    *   $x_1 \ge 0, x_2 \ge 0$

**Graphical Solution:**

1.  **Plot Constraints:**
    *   $x_1 + x_2 = 8$: Points (0, 8), (8, 0)
    *   $2x_1 + 3x_2 = 18$: Points (0, 6), (9, 0)

2.  **Feasible Region:** Shaded area in the first quadrant that is *above* both lines. This region is unbounded.

3.  **Corner Points:**
    *   Intersection of $x_1=0$ and $x_1 + x_2 = 8$: (0, 8)
    *   Intersection of $x_2=0$ and $2x_1 + 3x_2 = 18$: (9, 0)
    *   Intersection of $x_1 + x_2 = 8$ and $2x_1 + 3x_2 = 18$:
        *   From $x_1 + x_2 = 8$, $x_1 = 8 - x_2$.
        *   Substitute into the second equation: $2(8 - x_2) + 3x_2 = 18$
        *   $16 - 2x_2 + 3x_2 = 18$
        *   $x_2 = 18 - 16 \Rightarrow x_2 = 2$
        *   $x_1 = 8 - 2 = 6$.
        *   Intersection point: (6, 2)

4.  **Evaluate Objective Function ($Z = 10x_1 + 12x_2$):**
    *   (0, 8): $Z = 10(0) + 12(8) = 96$
    *   (9, 0): $Z = 10(9) + 12(0) = 90$
    *   (6, 2): $Z = 10(6) + 12(2) = 60 + 24 = 84$

5.  **Optimal Solution:** The minimum value of $Z$ is 84 at (6, 2). The minimum cost is $84 by producing 6 units of $x_1$ and 2 units of $x_2$.

---

**Answer to Question 3:**

*   **Objective Function:** Maximize $Z = 5x + 3y$
*   **Constraints:**
    *   $x + y \le 6$
    *   $2x + y \le 10$
    *   $x \ge 0, y \ge 0$

**Graphical Solution:**

1.  **Plot Constraints:**
    *   $x + y = 6$: Points (0, 6), (6, 0)
    *   $2x + y = 10$: Points (0, 10), (5, 0)

2.  **Feasible Region:** Shaded area in the first quadrant bounded by the axes and the two constraint lines.

3.  **Corner Points:**
    *   (0, 0)
    *   (0, 6) (Intersection of $x=0$ and $x+y=6$)
    *   (5, 0) (Intersection of $y=0$ and $2x+y=10$)
    *   Intersection of $x + y = 6$ and $2x + y = 10$:
        *   Subtract the first from the second: $(2x+y) - (x+y) = 10 - 6 \Rightarrow x = 4$.
        *   Substitute $x=4$ into $x+y=6$: $4+y=6 \Rightarrow y=2$.
        *   Intersection point: (4, 2)

4.  **Evaluate Objective Function ($Z = 5x + 3y$):**
    *   (0, 0): $Z = 5(0) + 3(0) = 0$
    *   (0, 6): $Z = 5(0) + 3(6) = 18$
    *   (5, 0): $Z = 5(5) + 3(0) = 25$
    *   (4, 2): $Z = 5(4) + 3(2) = 20 + 6 = 26$

5.  **Optimal Solution:** The maximum value of $Z$ is 26 at (4, 2). The maximum profit is $26 by producing 4 units of $x$ and 2 units of $y$.

---

This concludes the notes on the Graphical Method for solving Linear Programming problems. This method is crucial for understanding the fundamental concepts of LP, the nature of feasible regions, and how to find optimal solutions at corner points. While limited to two variables, it lays the groundwork for more advanced techniques like the Simplex method.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
