---
title: "Formulation of design problems as mathematical programming problems"
subject: "OPTIMIZATION TECHNIQUES"
module: "Module 1: Engineering applications of optimization"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf48044641c3"
status: "completed"
scrapedAt: "2026-05-20T18:15:50.884Z"
---
# OPTIMIZATION TECHNIQUES

## Module 1: Engineering Applications of Optimization

### Topic: Formulation of Design Problems as Mathematical Programming Problems

---

**Course Outcomes Addressed:**

*   **CO1:** Formulate the real-world problem as a Linear Programming Problem (Knowledge Level: K4)
*   **CO4:** Apply modern methods of optimization for solving optimization problems. (Knowledge Level: K3) - *This topic lays the foundation for applying modern optimization methods.*

---

### 1. Introduction to Optimization in Engineering Design

Optimization is the process of finding the best possible solution to a problem, given a set of constraints. In engineering design, optimization is crucial for achieving desirable outcomes such as minimizing cost, maximizing performance, reducing weight, or improving efficiency.

**Key Concept:** An **optimization problem** involves finding the values of certain variables (called **decision variables**) that optimize (maximize or minimize) an **objective function**, subject to a set of **constraints**.

**Sources:**
*   **Rao, S.S. (2011):** Emphasizes that optimization is the process of finding the minimum or maximum value of a function. Chapter 1 provides an excellent overview of the need for optimization in engineering.
*   **Deb, K. (2012):** Highlights that optimization is about making informed decisions to achieve the best possible design under given conditions.

---

### 2. Components of a Mathematical Programming Problem

A mathematical programming problem is a formal way to represent an optimization problem using mathematical expressions. It typically consists of:

#### 2.1. Decision Variables

*   **Definition:** These are the unknown quantities or parameters that we need to determine to solve the problem. They represent the design choices or control variables.
*   **Notation:** Often denoted by $x_1, x_2, ..., x_n$ or $\mathbf{x} = [x_1, x_2, ..., x_n]^T$.
*   **Example:** In designing a beam, decision variables could be the cross-sectional dimensions (width, height).

#### 2.2. Objective Function

*   **Definition:** A mathematical function that quantifies the goal of the optimization. It is the quantity that we want to minimize or maximize.
*   **Notation:** Typically denoted by $f(\mathbf{x})$ or $F(\mathbf{x})$.
*   **Types:**
    *   **Minimization:** Finding the smallest value of the objective function (e.g., minimizing cost, weight, or error).
    *   **Maximization:** Finding the largest value of the objective function (e.g., maximizing profit, strength, or efficiency).
*   **Example:** For a cost minimization problem, the objective function could be the total cost of materials and manufacturing, expressed as a function of the design variables.
    *   *Minimize:* $Z = c_1x_1 + c_2x_2$ (linear objective)
    *   *Maximize:* $Z = p_1x_1 - p_2x_1^2 + p_3x_2$ (nonlinear objective)

#### 2.3. Constraints

*   **Definition:** Restrictions or limitations that the decision variables must satisfy. These represent the physical laws, material properties, manufacturing capabilities, market demands, or other design requirements.
*   **Types:**
    *   **Equality Constraints:** Require the objective function or a combination of decision variables to be exactly equal to a specific value.
        *   **Notation:** $g_i(\mathbf{x}) = 0$, for $i = 1, 2, ..., m$.
        *   **Example:** The total length of a component must be exactly 10 units: $x_1 + x_2 = 10$.
    *   **Inequality Constraints:** Require the objective function or a combination of decision variables to be less than or equal to, or greater than or equal to, a specific value.
        *   **Notation:** $h_j(\mathbf{x}) \le 0$ or $h_j(\mathbf{x}) \ge 0$, for $j = 1, 2, ..., p$.
        *   **Example:** The maximum stress in a material must not exceed its yield strength: $\sigma_{max}(\mathbf{x}) \le \sigma_{yield}$.
    *   **Bounds on Variables:** Specific constraints on the range of individual decision variables.
        *   **Notation:** $l_k \le x_k \le u_k$, for $k = 1, 2, ..., n$. (Lower bound $l_k$, Upper bound $u_k$)
        *   **Example:** The thickness of a plate must be between 1 mm and 10 mm: $1 \le t \le 10$.

**Sources:**
*   **Taha, H.A. (2006):** Chapter 1 introduces the fundamental components of optimization problems, focusing on objective functions and constraints.
*   **Swarup, Kanti, Gupta, P.K., & Man Mohan (2022):** Provide a clear distinction between different types of constraints, particularly in the context of linear programming.

---

### 3. Classification of Mathematical Programming Problems

Based on the nature of the objective function and constraints, optimization problems can be classified into several categories. This classification helps in choosing appropriate solution methods.

#### 3.1. Based on Nature of Variables

*   **Continuous Programming:** Decision variables can take any real value within a given range. This is the most common type in engineering.
*   **Discrete Programming:** Decision variables can only take values from a discrete set (e.g., integers).
    *   **Integer Programming (IP):** All variables are integers.
    *   **Mixed-Integer Programming (MIP):** Some variables are integers, and others are continuous.
    *   **Binary Programming:** Variables can only take values 0 or 1 (often used for yes/no decisions).

#### 3.2. Based on Nature of Objective Function and Constraints

*   **Linear Programming (LP):**
    *   **Objective Function:** Linear.
    *   **Constraints:** Linear equalities and/or inequalities.
    *   **Example:** Resource allocation, production planning. (CO1 is directly related to this)
*   **Nonlinear Programming (NLP):**
    *   **Objective Function:** Nonlinear.
    *   **Constraints:** Can be linear or nonlinear.
    *   **Example:** Finding optimal parameters in a chemical reaction, structural design with nonlinear material behavior.
*   **Quadratic Programming (QP):**
    *   **Objective Function:** Quadratic.
    *   **Constraints:** Linear.
    *   **Example:** Portfolio optimization, support vector machines.
*   **Convex Programming:**
    *   **Objective Function:** Convex (for minimization) or concave (for maximization).
    *   **Constraints:** Define a convex feasible region.
    *   **Significance:** Any local optimum is also a global optimum. LP is a special case of convex programming.
*   **Non-convex Programming:** Objective function or feasible region is not convex. These problems are generally harder to solve as they may have multiple local optima.

#### 3.3. Based on Presence of Constraints

*   **Unconstrained Optimization:** No constraints on the decision variables. The problem is simply to find the minimum or maximum of the objective function.
    *   **Example:** Finding the minimum of $f(x) = x^2 - 4x + 5$. (Related to CO3)
*   **Constrained Optimization:** The problem involves one or more constraints.

**Sources:**
*   **Rao, S.S. (2011):** Chapter 1 and subsequent chapters detail the various classifications and their implications for solution methodologies.
*   **Taha, H.A. (2006):** Primarily focuses on LP and some NLPs, but the classification is fundamental.
*   **Deb, K. (2012):** Discusses the challenges and approaches for different problem classes, especially in the context of engineering design.

---

### 4. Formulation of Design Problems as Mathematical Programming Problems

This is the core of the topic, involving translating a real-world engineering design problem into a formal mathematical model. The process requires careful understanding of the problem's objectives, variables, and limitations.

**Steps for Formulation:**

1.  **Understand the Problem:** Thoroughly read and comprehend the engineering design problem statement. Identify what needs to be achieved and what limitations exist.
2.  **Identify Decision Variables:** Determine the quantities that can be controlled or adjusted to achieve the design goal. Assign symbols to these variables.
3.  **Define the Objective Function:** Express the primary goal (e.g., minimize cost, maximize performance) as a mathematical function of the decision variables. Clearly state whether it's a minimization or maximization problem.
4.  **Identify and Formulate Constraints:** List all the restrictions, limitations, and requirements that the design must satisfy. Convert these into mathematical equalities or inequalities involving the decision variables.
    *   **Physical Laws:** Equations governing material behavior, motion, energy, etc.
    *   **Material Properties:** Limits on strength, stiffness, thermal conductivity, etc.
    *   **Manufacturing Limitations:** Tolerances, available equipment, production capacity.
    *   **Safety Factors:** Requirements for structural integrity or reliability.
    *   **Budgetary Constraints:** Financial limitations.
    *   **Performance Requirements:** Minimum efficiency, maximum noise levels, etc.
5.  **Specify Variable Types and Bounds:** Determine if variables must be integers, continuous, or binary. Define any explicit lower or upper bounds for individual variables.
6.  **Review and Refine:** Check the formulated model for completeness, correctness, and consistency. Ensure all aspects of the problem are captured.

**Sources:**
*   **Rao, S.S. (2011):** Chapter 1 and 2 are dedicated to the process of formulating optimization problems, providing numerous examples.
*   **Deb, K. (2012):** Chapter 2 focuses on modeling engineering design problems, including practical considerations for formulation.

---

### 5. Examples of Formulating Design Problems

Let's illustrate the formulation process with examples.

#### Example 1: Simple Production Planning (Linear Programming - CO1)

**Problem:** A company manufactures two products, A and B. Product A requires 2 hours of labor and 1 kg of raw material. Product B requires 3 hours of labor and 2 kg of raw material. The company has 100 hours of labor and 50 kg of raw material available per week. The profit for product A is $3 per unit, and for product B is $4 per unit. The company wants to maximize its total profit.

**Formulation:**

1.  **Decision Variables:**
    *   Let $x_1$ be the number of units of product A to be manufactured per week.
    *   Let $x_2$ be the number of units of product B to be manufactured per week.

2.  **Objective Function:** Maximize total profit.
    *   Maximize $Z = 3x_1 + 4x_2$

3.  **Constraints:**
    *   **Labor Constraint:** The total labor hours used cannot exceed the available labor hours.
        *   $2x_1 + 3x_2 \le 100$
    *   **Raw Material Constraint:** The total raw material used cannot exceed the available raw material.
        *   $1x_1 + 2x_2 \le 50$
    *   **Non-negativity Constraints:** The number of units produced cannot be negative.
        *   $x_1 \ge 0$
        *   $x_2 \ge 0$

4.  **Review:** This is a Linear Programming Problem (LPP) as the objective function and all constraints are linear.

**Mathematical Model:**
Maximize $Z = 3x_1 + 4x_2$
Subject to:
$2x_1 + 3x_2 \le 100$
$x_1 + 2x_2 \le 50$
$x_1 \ge 0, x_2 \ge 0$

This formulation directly addresses **CO1**.

#### Example 2: Minimizing Material Cost for a Cylindrical Tank

**Problem:** Design a cylindrical tank with a volume of $1000 \text{ m}^3$. The cost of the material for the top and bottom circular bases is $50 per \text{ m}^2$, and the cost of the material for the cylindrical side wall is $30 per \text{ m}^2$. Find the dimensions (radius and height) that minimize the total material cost.

**Formulation:**

1.  **Decision Variables:**
    *   Let $r$ be the radius of the base of the cylinder (in meters).
    *   Let $h$ be the height of the cylinder (in meters).

2.  **Objective Function:** Minimize the total material cost.
    *   Area of top and bottom bases = $2 \times (\pi r^2)$
    *   Area of the side wall = $2\pi r h$
    *   Cost of top and bottom = $50 \times (2\pi r^2) = 100\pi r^2$
    *   Cost of side wall = $30 \times (2\pi r h) = 60\pi r h$
    *   Minimize $C(r, h) = 100\pi r^2 + 60\pi r h$

3.  **Constraints:**
    *   **Volume Constraint:** The volume of the cylinder must be $1000 \text{ m}^3$.
        *   Volume $V = \pi r^2 h$
        *   $\pi r^2 h = 1000$
    *   **Bounds on Variables:** Radius and height must be positive.
        *   $r > 0$
        *   $h > 0$

4.  **Review:** This is a Nonlinear Programming (NLP) problem because the objective function contains a term $r^2$ and $rh$, making it nonlinear. The constraint is also nonlinear.

**Mathematical Model:**
Minimize $C(r, h) = 100\pi r^2 + 60\pi r h$
Subject to:
$\pi r^2 h = 1000$
$r > 0, h > 0$

This example demonstrates the formulation of an NLP problem, which is a precursor to understanding CO3 and CO4.

#### Example 3: Unconstrained Minimization of a Function (Related to CO3)

**Problem:** Find the minimum value of the function $f(x) = x^4 - 14x^3 + 60x^2 - 70x$.

**Formulation:**

1.  **Decision Variable:**
    *   Let $x$ be the variable.

2.  **Objective Function:** Minimize $f(x)$.
    *   Minimize $f(x) = x^4 - 14x^3 + 60x^2 - 70x$

3.  **Constraints:** None (Unconstrained optimization).

4.  **Review:** This is an unconstrained nonlinear optimization problem. To solve it (which is beyond the scope of formulation but relevant to CO3), we would find the derivative, set it to zero, and solve for $x$.

**Mathematical Model:**
Minimize $f(x) = x^4 - 14x^3 + 60x^2 - 70x$

---

### 6. Important Points to Remember

*   **Clear Objective:** Always define whether you are minimizing or maximizing and what that quantity represents.
*   **Well-Defined Variables:** Ensure your decision variables are precisely what you intend to control.
*   **Complete Constraints:** Don't miss any crucial restrictions or requirements. Consider all aspects of the design.
*   **Model Type:** Recognizing whether your problem is LP, NLP, or something else is critical for choosing the right solution technique.
*   **Real-world vs. Model:** The mathematical model is an abstraction of reality. The goal is to create a sufficiently accurate representation.
*   **Iterative Process:** Formulation can sometimes be an iterative process. You might need to refine your model as you gain more understanding.

---

### 7. Practice Questions and Exercises

**Question 1 (CO1):**
A company produces two types of chemicals, X and Y. Chemical X requires 1 unit of chemical A and 2 units of chemical B. Chemical Y requires 3 units of chemical A and 1 unit of chemical B. The company has 100 units of chemical A and 120 units of chemical B. The profit for chemical X is $5 per unit, and for chemical Y is $7 per unit. Formulate this problem as a Linear Programming Problem to maximize the company's profit.

**Answer 1:**
Let $x$ be the number of units of chemical X produced.
Let $y$ be the number of units of chemical Y produced.

**Objective Function:** Maximize Profit $Z = 5x + 7y$

**Constraints:**
*   Chemical A constraint: $1x + 3y \le 100$
*   Chemical B constraint: $2x + 1y \le 120$
*   Non-negativity constraints: $x \ge 0, y \ge 0$

**Question 2 (Related to Formulation Principles):**
A manufacturer wants to minimize the cost of producing a product. The cost is determined by the amount of labor ($L$) and raw material ($M$) used. The cost function is given by $C(L, M) = 2L^2 + 3M^2 - LM$. The product must have a minimum tensile strength $S$, which is a function of labor and material: $S(L, M) = 5L + 2M \ge 100$. The available labor is at most 50 units ($L \le 50$), and the available raw material is at most 70 units ($M \le 70$). Formulate this as a mathematical programming problem.

**Answer 2:**
**Decision Variables:**
*   $L$: amount of labor
*   $M$: amount of raw material

**Objective Function:** Minimize Cost $C(L, M) = 2L^2 + 3M^2 - LM$

**Constraints:**
*   Tensile strength constraint: $5L + 2M \ge 100$
*   Labor constraint: $L \le 50$
*   Raw material constraint: $M \le 70$
*   Non-negativity constraints: $L \ge 0, M \ge 0$

**Mathematical Model:**
Minimize $C(L, M) = 2L^2 + 3M^2 - LM$
Subject to:
$5L + 2M \ge 100$
$L \le 50$
$M \le 70$
$L \ge 0, M \ge 0$

This is a Nonlinear Programming (NLP) problem.

**Question 3 (Conceptual - related to formulation):**
For a beam deflection problem, what might be some typical decision variables and constraints?

**Answer 3:**
*   **Decision Variables:**
    *   Cross-sectional dimensions of the beam (e.g., height, width, flange thickness, web thickness).
    *   Material type.
    *   Beam length (if adjustable).
    *   Support conditions (though often fixed in a given problem).
*   **Constraints:**
    *   Maximum allowable deflection (e.g., $L/360$, where $L$ is the span).
    *   Maximum allowable stress (bending stress, shear stress).
    *   Buckling load requirements.
    *   Geometric constraints (e.g., minimum or maximum dimensions due to space limitations).
    *   Material property limits (e.g., Young's Modulus, yield strength).
    *   Manufacturing constraints.

---

### 8. Alignment with Course Outcomes

*   **CO1: Formulate the real-world problem as a Linear Programming Problem (Knowledge Level: K4)**
    This topic directly covers the principles and practice of formulating LPPs, as demonstrated in Example 1 and Question 1. Understanding the components (variables, objective, constraints) and translating them into mathematical form is the essence of K4 for this CO.

*   **CO4: Apply modern methods of optimization for solving optimization problems (Knowledge Level: K3)**
    The formulation of optimization problems is the *essential first step* before any modern optimization method can be applied. Understanding the structure and type of problem (LP, NLP, etc.) dictates which methods are suitable. Therefore, this topic directly supports CO4 by providing the necessary foundation. Without proper formulation, applying any optimization technique would be meaningless.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |


### 9. References

*   **Rao, S.S. (2011):** Engineering Optimization: Theory and Practice (New Age International Publishers)
*   **Taha, H.A. (2006):** Operations Research (Pearson)
*   **Swarup, K., Gupta, P.K., & Man Mohan (2022):** Operations Research (Sultan Chand and Sons)
*   **Deb, K. (2012):** Optimization for Engineering Design – Algorithms and Examples (Prentice-Hall of India Pvt. Ltd.)
*   **Ravindran, A., Phillips, D. T., & Solberg, J. J. (2007):** Operations Research – Principles and Practice (John Wiley and Sons)

---