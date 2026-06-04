---
title: "Linear Programming: Basics of OR"
subject: "OPERATIONS RESEARCH"
module: "Module 1: Introduction to Operations Research (OR)"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf4804463610"
status: "completed"
scrapedAt: "2026-05-20T18:01:42.469Z"
---
# Operations Research: Module 1 - Introduction to OR & Linear Programming Basics

This module introduces the fundamental concepts of Operations Research (OR) and delves into the core principles of Linear Programming (LP), a cornerstone technique within OR. We will explore what OR is, its evolution, applications, and the foundational elements required to formulate and solve LP problems.

## 1.1 Introduction to Operations Research (OR)

### 1.1.1 What is Operations Research?

**Definition:** Operations Research (OR) is a scientific approach to decision-making that seeks to determine the best possible course of action in complex situations, involving the allocation of scarce resources, to achieve a specific objective. It utilizes analytical methods and mathematical modeling to optimize decisions.

*   **Key Characteristics:**
    *   **Scientific Approach:** Relies on observation, hypothesis formulation, experimentation, and validation.
    *   **Quantitative Analysis:** Uses mathematical models, statistical methods, and computational techniques.
    *   **Decision-Making:** Aims to provide a rational basis for making decisions.
    *   **Optimization:** Seeks to find the best possible solution (e.g., maximize profit, minimize cost).
    *   **Systematic Approach:** Considers the problem as a whole and its interactions with its environment.
    *   **Use of Models:** Employs abstract representations of real-world systems.

### 1.1.2 Evolution of Operations Research

*   **World War II Era:** OR emerged during World War II as military strategists sought to optimize the deployment of limited resources (e.g., radar, convoys, bombing raids). Teams of scientists from various disciplines collaborated on these problems.
*   **Post-War Period:** After the war, OR techniques were adopted by civilian industries, including manufacturing, logistics, finance, and healthcare.
*   **Advancements in Computing:** The development of computers significantly enhanced the ability to solve complex OR models.
*   **Modern OR:** Continues to evolve with new methodologies, including stochastic processes, simulation, artificial intelligence, and soft computing techniques.

**Reference:** Gupta & Hira (2008) provides a detailed historical perspective on the development of OR.

### 1.1.3 Scope and Applications of Operations Research

OR has a wide range of applications across various sectors:

*   **Manufacturing & Production:** Production planning, inventory control, scheduling, facility location.
*   **Marketing:** Advertising budget allocation, pricing strategies, market research.
*   **Finance:** Portfolio optimization, investment analysis, risk management.
*   **Logistics & Transportation:** Route optimization, fleet management, supply chain management.
*   **Healthcare:** Hospital management, patient scheduling, resource allocation.
*   **Public Sector:** Urban planning, traffic management, environmental protection.

**Example:** A company might use OR to determine the optimal production schedule for its manufacturing plant to maximize profit while considering raw material availability and machine capacity.

### 1.1.4 Phases of an Operations Research Study

1.  **Problem Definition:** Clearly define the problem, objectives, and constraints.
2.  **Model Construction:** Develop a mathematical model that represents the real-world problem.
3.  **Solution Generation:** Solve the model using appropriate OR techniques.
4.  **Model Validation:** Test the model's accuracy and validity against real-world data.
5.  **Implementation:** Put the solution into practice and monitor its effectiveness.

**Reference:** Srinivasan (2017) outlines these phases with practical insights.

### 1.1.5 Characteristics of Operations Research Models

*   **Objective Function:** A mathematical expression representing the goal to be optimized (maximized or minimized).
*   **Decision Variables:** Variables whose values are to be determined to achieve the objective.
*   **Constraints:** Limitations or restrictions imposed on the decision variables.
*   **Parameters:** Constants or coefficients in the model that represent fixed values.

## 1.2 Linear Programming (LP): Basics of OR

Linear Programming (LP) is a powerful mathematical technique used to optimize a linear objective function subject to a set of linear constraints. It's a cornerstone of OR for decision-making under resource scarcity.

**Course Outcome Alignment:** CO1 (To formulate and solve linear programming problems...)

### 1.2.1 Definition and Key Concepts of Linear Programming

**Definition:** A mathematical technique for determining a way to achieve the best outcome (such as maximum profit or minimum cost) in a mathematical model whose requirements are represented by linear relationships.

*   **Objective Function:**
    *   **Definition:** A linear function of decision variables that needs to be maximized or minimized.
    *   **Format:** $Z = c_1x_1 + c_2x_2 + ... + c_nx_n$, where $Z$ is the objective value, $c_i$ are coefficients (costs or profits), and $x_i$ are decision variables.
    *   **Example:** To maximize profit, $Z = 5x_1 + 7x_2$, where $x_1$ is the number of units of product A and $x_2$ is the number of units of product B.

*   **Decision Variables:**
    *   **Definition:** The controllable inputs or choices that a decision-maker can influence. They represent the quantities of goods to be produced, resources to be allocated, etc.
    *   **Example:** $x_1$ (number of tables to produce), $x_2$ (number of chairs to produce).

*   **Constraints:**
    *   **Definition:** Linear inequalities or equalities that restrict the values of the decision variables. These represent limitations on resources, demand, production capacity, etc.
    *   **Types:**
        *   **Resource Constraints:** Limiting availability of raw materials, labor hours, machine time.
        *   **Demand Constraints:** Minimum or maximum demand for products.
        *   **Policy Constraints:** Management policies or regulations.
    *   **Format:**
        *   $a_{11}x_1 + a_{12}x_2 + ... + a_{1n}x_n \le b_1$ (less than or equal to)
        *   $a_{21}x_1 + a_{22}x_2 + ... + a_{2n}x_n \ge b_2$ (greater than or equal to)
        *   $a_{31}x_1 + a_{32}x_2 + ... + a_{3n}x_n = b_3$ (equal to)
    *   **Example:** $2x_1 + 3x_2 \le 100$ (e.g., total labor hours used cannot exceed 100).

*   **Non-negativity Constraints:**
    *   **Definition:** Decision variables are typically non-negative, meaning they cannot be negative. You can't produce a negative number of items.
    *   **Format:** $x_i \ge 0$ for all $i = 1, 2, ..., n$.

*   **Feasible Solution:**
    *   **Definition:** A set of values for the decision variables that satisfies all the constraints of the LP problem, including non-negativity.

*   **Feasible Region:**
    *   **Definition:** The set of all feasible solutions. Graphically, it's the region in the decision variable space that satisfies all constraints.

*   **Optimal Solution:**
    *   **Definition:** A feasible solution that yields the best possible value (maximum or minimum) for the objective function.

**Textbook Reference:** Gupta & Hira (2008) and Srinivasan (2017) provide comprehensive explanations of these terms.

### 1.2.2 Formulation of Linear Programming Problems

Formulating an LP problem involves translating a real-world decision problem into a mathematical model consisting of an objective function and constraints.

**Steps for Formulation:**

1.  **Identify Decision Variables:** Determine what decisions need to be made and assign symbols to them.
2.  **Define the Objective Function:** Express the goal (maximize profit, minimize cost) as a linear function of the decision variables.
3.  **Identify and Formulate Constraints:** List all the limitations and express them as linear inequalities or equalities involving the decision variables.
4.  **Add Non-negativity Constraints:** Ensure that decision variables are non-negative.

**Example 1: Product Mix Problem**

A company produces two products, Product A and Product B.
*   Each unit of Product A requires 2 hours of Machine 1 and 1 hour of Machine 2.
*   Each unit of Product B requires 1 hour of Machine 1 and 3 hours of Machine 2.
*   Machine 1 is available for at most 100 hours per week.
*   Machine 2 is available for at most 90 hours per week.
*   The profit per unit of Product A is $5, and the profit per unit of Product B is $7.
*   The company wants to maximize its total profit.

**Formulation:**

1.  **Decision Variables:**
    *   Let $x_1$ = number of units of Product A to produce per week.
    *   Let $x_2$ = number of units of Product B to produce per week.

2.  **Objective Function:** Maximize profit.
    *   Maximize $Z = 5x_1 + 7x_2$

3.  **Constraints:**
    *   Machine 1 availability: $2x_1 + 1x_2 \le 100$
    *   Machine 2 availability: $1x_1 + 3x_2 \le 90$

4.  **Non-negativity Constraints:**
    *   $x_1 \ge 0$, $x_2 \ge 0$

**Complete LP Model:**
Maximize $Z = 5x_1 + 7x_2$
Subject to:
$2x_1 + x_2 \le 100$
$x_1 + 3x_2 \le 90$
$x_1 \ge 0, x_2 \ge 0$

**Example 2: Diet Problem**

A person wants to plan their diet to meet certain nutritional requirements at minimum cost.
*   Two food items, Food X and Food Y, are available.
*   Food X contains 2 units of nutrient 1 and 4 units of nutrient 2 per kg.
*   Food Y contains 3 units of nutrient 1 and 2 units of nutrient 2 per kg.
*   The daily requirement is at least 10 units of nutrient 1 and at least 12 units of nutrient 2.
*   The cost of Food X is $4 per kg, and the cost of Food Y is $3 per kg.
*   The person wants to minimize the total cost of the diet.

**Formulation:**

1.  **Decision Variables:**
    *   Let $x_1$ = quantity (in kg) of Food X to consume daily.
    *   Let $x_2$ = quantity (in kg) of Food Y to consume daily.

2.  **Objective Function:** Minimize cost.
    *   Minimize $Z = 4x_1 + 3x_2$

3.  **Constraints:**
    *   Nutrient 1 requirement: $2x_1 + 3x_2 \ge 10$
    *   Nutrient 2 requirement: $4x_1 + 2x_2 \ge 12$

4.  **Non-negativity Constraints:**
    *   $x_1 \ge 0$, $x_2 \ge 0$

**Complete LP Model:**
Minimize $Z = 4x_1 + 3x_2$
Subject to:
$2x_1 + 3x_2 \ge 10$
$4x_1 + 2x_2 \ge 12$
$x_1 \ge 0, x_2 \ge 0$

**Practice Formulation Exercise:**

A manufacturer makes two products, P1 and P2. Product P1 requires 3 hours of processing on Machine A and 2 hours on Machine B. Product P2 requires 2 hours on Machine A and 3 hours on Machine B. Machine A has 150 hours of capacity per week, and Machine B has 120 hours of capacity per week. The profit for P1 is $10 per unit, and for P2 is $12 per unit. Formulate an LP model to maximize the total profit.

**Answer:**

1.  **Decision Variables:**
    *   $x_1$ = number of units of P1 to produce.
    *   $x_2$ = number of units of P2 to produce.

2.  **Objective Function:**
    *   Maximize $Z = 10x_1 + 12x_2$

3.  **Constraints:**
    *   Machine A: $3x_1 + 2x_2 \le 150$
    *   Machine B: $2x_1 + 3x_2 \le 120$

4.  **Non-negativity Constraints:**
    *   $x_1 \ge 0, x_2 \ge 0$

### 1.2.3 Graphical Method for Solving LP Problems (for two variables)

The graphical method is used to solve LP problems with two decision variables. It involves plotting the constraints, identifying the feasible region, and then finding the corner point of the feasible region that optimizes the objective function.

**Steps:**

1.  **Plot the Constraints:** For each constraint, treat it as an equality to find the boundary line. Plot these lines on a graph with the decision variables on the axes.
2.  **Identify the Feasible Region:** For each inequality, determine which side of the line satisfies the inequality (usually by testing a point like the origin (0,0)). The feasible region is the area where all shaded regions from all constraints overlap.
3.  **Identify the Corner Points (Vertices) of the Feasible Region:** These are the points where the boundary lines intersect.
4.  **Evaluate the Objective Function at Each Corner Point:** Substitute the coordinates of each corner point into the objective function.
5.  **Determine the Optimal Solution:**
    *   If maximizing, the corner point yielding the highest value is the optimal solution.
    *   If minimizing, the corner point yielding the lowest value is the optimal solution.

**Example (Product Mix Problem from 1.2.2):**

Maximize $Z = 5x_1 + 7x_2$
Subject to:
1.  $2x_1 + x_2 \le 100$
2.  $x_1 + 3x_2 \le 90$
3.  $x_1 \ge 0$
4.  $x_2 \ge 0$

**Solution Steps:**

1.  **Plot Constraints:**
    *   **Constraint 1:** $2x_1 + x_2 = 100$
        *   If $x_1=0$, $x_2=100$ (Point A: (0, 100))
        *   If $x_2=0$, $2x_1=100 \Rightarrow x_1=50$ (Point B: (50, 0))
        *   Test (0,0): $2(0) + 0 \le 100 \Rightarrow 0 \le 100$ (True, shade towards origin)

    *   **Constraint 2:** $x_1 + 3x_2 = 90$
        *   If $x_1=0$, $3x_2=90 \Rightarrow x_2=30$ (Point C: (0, 30))
        *   If $x_2=0$, $x_1=90$ (Point D: (90, 0))
        *   Test (0,0): $0 + 3(0) \le 90 \Rightarrow 0 \le 90$ (True, shade towards origin)

    *   **Constraints 3 & 4:** $x_1 \ge 0, x_2 \ge 0$ (This means we are in the first quadrant).

2.  **Feasible Region:** The region bounded by the lines and the axes where all shaded areas overlap.

3.  **Corner Points:**
    *   **Origin:** (0, 0)
    *   **Intersection of $x_2$-axis and Constraint 2:** (0, 30) (Point C)
    *   **Intersection of $x_1$-axis and Constraint 1:** (50, 0) (Point B)
    *   **Intersection of Constraint 1 and Constraint 2:**
        *   $2x_1 + x_2 = 100 \Rightarrow x_2 = 100 - 2x_1$
        *   Substitute into $x_1 + 3x_2 = 90$:
        *   $x_1 + 3(100 - 2x_1) = 90$
        *   $x_1 + 300 - 6x_1 = 90$
        *   $-5x_1 = 90 - 300$
        *   $-5x_1 = -210$
        *   $x_1 = 42$
        *   Now find $x_2$: $x_2 = 100 - 2(42) = 100 - 84 = 16$
        *   Intersection Point E: (42, 16)

4.  **Evaluate Objective Function:**
    *   At (0, 0): $Z = 5(0) + 7(0) = 0$
    *   At (0, 30): $Z = 5(0) + 7(30) = 210$
    *   At (50, 0): $Z = 5(50) + 7(0) = 250$
    *   At (42, 16): $Z = 5(42) + 7(16) = 210 + 112 = 322$

5.  **Optimal Solution:**
    *   The maximum profit is $322, achieved when $x_1 = 42$ units of Product A and $x_2 = 16$ units of Product B are produced.

**Important Note:** The graphical method is only suitable for problems with two decision variables. For problems with more than two variables, simplex method or other computational tools are required.

**Textbook Reference:** Hillier & Lieberman (Eleventh Edition) and Srinivasan (2017) offer detailed graphical solutions.

### 1.2.4 Important Points to Remember about LP

*   **Linearity:** All relationships (objective function and constraints) must be linear. This means no exponents, no products of variables, etc.
*   **Divisibility:** Decision variables are assumed to be divisible (e.g., you can produce 2.5 units of a product). If variables must be integers, it becomes an Integer Programming problem.
*   **Certainty:** All coefficients and constants are known and fixed.
*   **Non-negativity:** Decision variables are typically non-negative.
*   **Single Objective:** LP usually deals with a single objective function. Multi-objective problems may require special techniques.

**Key Concepts Recap:**
*   Objective Function
*   Decision Variables
*   Constraints (Resource, Demand, Policy)
*   Non-negativity Constraints
*   Feasible Solution/Region
*   Optimal Solution
*   Graphical Method (for 2 variables)

---

## 1.3 Connecting to Course Outcomes

*   **CO1: To formulate and solve linear programming problems and transportation problems (Knowledge Level: K2, K3)**
    *   This module directly addresses the formulation of LP problems and introduces the graphical method for solving them when there are two variables. Understanding these basics is crucial for comprehending more complex OR techniques.

## 1.4 Practice Questions/Exercises

1.  **Formulation:** A company produces two products, X and Y. Each unit of product X requires 1 kg of raw material A and 2 hours of labor. Each unit of product Y requires 2 kg of raw material A and 1 hour of labor. The company has 100 kg of raw material A and 80 hours of labor available per week. The profit per unit of X is $5, and per unit of Y is $4. Formulate an LP problem to maximize the company's profit.

2.  **Graphical Solution:** Solve the following LP problem graphically:
    Maximize $Z = 3x_1 + 2x_2$
    Subject to:
    $x_1 + x_2 \le 5$
    $2x_1 + x_2 \le 8$
    $x_1 \ge 0, x_2 \ge 0$

3.  **Concept Identification:** In an LP problem, what is the term for a solution that satisfies all constraints?
    a) Optimal Solution
    b) Objective Function
    c) Feasible Solution
    d) Decision Variable

---

## 1.5 Answers to Practice Questions

1.  **Formulation Answer:**
    *   **Decision Variables:**
        *   $x_1$ = number of units of Product X to produce.
        *   $x_2$ = number of units of Product Y to produce.
    *   **Objective Function:**
        *   Maximize $Z = 5x_1 + 4x_2$
    *   **Constraints:**
        *   Raw Material A: $1x_1 + 2x_2 \le 100$
        *   Labor: $2x_1 + 1x_2 \le 80$
    *   **Non-negativity Constraints:**
        *   $x_1 \ge 0, x_2 \ge 0$

2.  **Graphical Solution Answer:**
    *   **Plotting Constraints:**
        *   $x_1 + x_2 = 5$: Points (0,5) and (5,0)
        *   $2x_1 + x_2 = 8$: Points (0,8) and (4,0)
    *   **Feasible Region:** The region bounded by the axes and the two lines, satisfying $x_1 \ge 0, x_2 \ge 0, x_1+x_2 \le 5, 2x_1+x_2 \le 8$.
    *   **Corner Points:**
        *   (0,0)
        *   (0,5)
        *   (4,0)
        *   Intersection of $x_1 + x_2 = 5$ and $2x_1 + x_2 = 8$:
            *   Subtracting the first from the second: $(2x_1+x_2) - (x_1+x_2) = 8-5 \Rightarrow x_1 = 3$.
            *   Substituting $x_1=3$ into $x_1+x_2=5 \Rightarrow 3+x_2=5 \Rightarrow x_2=2$.
            *   Intersection point: (3,2).
    *   **Evaluate Objective Function:**
        *   At (0,0): $Z = 3(0) + 2(0) = 0$
        *   At (0,5): $Z = 3(0) + 2(5) = 10$
        *   At (4,0): $Z = 3(4) + 2(0) = 12$
        *   At (3,2): $Z = 3(3) + 2(2) = 9 + 4 = 13$
    *   **Optimal Solution:** The maximum profit is 13, achieved when $x_1 = 3$ and $x_2 = 2$.

3.  **Concept Identification Answer:** c) Feasible Solution

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


## 1.6 Further Reading and References

*   **Srinivasan, G. (2017).** *Operations Research-Principles and Applications*. PHI Pvt. Ltd. (Third Edition) - Focus on introductory chapters for OR basics and LP formulation.
*   **Gupta, Prem Kumar & Hira, D. S. (2008).** *Operations Research*. S Chand publication. (Third Edition) - Excellent for historical context and clear definitions of LP components.
*   **Vohra, N. D. & Arora, Hitesh. (2021).** *Quantitative Techniques in Management*. McGraw Hill. (Sixth Edition) - Provides a managerial perspective on OR and LP.
*   **Hillier, F. S. & Lieberman, G. J. (Eleventh Edition).** *Introduction to Operations Research*. McGraw Hill - A widely cited textbook with comprehensive coverage of LP methods.

This module provides the foundational understanding of Operations Research and Linear Programming, setting the stage for exploring more advanced techniques in subsequent modules.