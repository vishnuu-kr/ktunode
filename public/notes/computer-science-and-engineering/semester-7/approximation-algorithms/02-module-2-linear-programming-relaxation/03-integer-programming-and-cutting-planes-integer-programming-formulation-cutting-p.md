---
title: "Integer Programming and Cutting Planes - Integer programming formulation, Cutting plane methods, Applications in network design. (Chapter 6)"
subject: "APPROXIMATION ALGORITHMS"
module: "Module 2: Linear Programming Relaxation "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c37c"
status: "completed"
scrapedAt: "2026-05-20T17:00:45.100Z"
---
# APPROXIMATION ALGORITHMS: Module 2 - Linear Programming Relaxation

## Topic: Integer Programming and Cutting Planes (Chapter 6)

This module delves into the realm of **Integer Programming (IP)**, a powerful mathematical modeling technique, and the **Cutting Plane Methods**, a class of algorithms used to solve IP problems. We will explore how IP differs from Linear Programming (LP) and how we can leverage LP relaxation and the introduction of cutting planes to find optimal integer solutions. Finally, we'll examine the practical applications of these concepts in **network design**.

---

### 1. Integer Programming Formulation

#### 1.1. What is Integer Programming?

*   **Definition:** Integer Programming (IP) is a type of mathematical optimization problem where the decision variables are restricted to be integers. This is in contrast to Linear Programming (LP), where variables can take any real value.

*   **Key Distinction from LP:**
    *   **LP Variables:** Can be any real number ($x_i \in \mathbb{R}$).
    *   **IP Variables:** Must be integers ($x_i \in \mathbb{Z}$).

*   **Types of Integer Programs:**
    *   **Pure Integer Program:** All decision variables must be integers.
        *   Example: `Minimize c^T x` subject to `Ax >= b` and `x >= 0`, where `x_i` are integers.
    *   **Mixed Integer Program (MIP):** Some variables must be integers, while others can be continuous.
        *   Example: `Minimize c^T x + d^T y` subject to `Ax + By >= b`, `x >= 0` (integers), `y >= 0` (continuous).
    *   **Binary Integer Program (BIP):** All decision variables must be either 0 or 1. These are commonly used for representing yes/no decisions.
        *   Example: `Minimize c^T x` subject to `Ax >= b` and `x_i \in \{0, 1\}` for all `i`.

#### 1.2. Why Use Integer Programming?

*   **Modeling Real-World Constraints:** Many real-world problems inherently involve discrete decisions or indivisible quantities.
    *   **Examples:**
        *   Assigning workers to tasks (a worker is either assigned or not).
        *   Locating facilities (a facility is either built or not).
        *   Producing items (you can't produce half a car).
        *   Making investment decisions (invest or don't invest).

#### 1.3. Formulating IP Problems: Common Patterns

*   **Binary Variables for Logical Conditions:**
    *   **"Either/Or" Constraints:** If we have two constraints, and at least one must be satisfied, we can use binary variables.
        *   Let $x_1$ and $x_2$ be binary variables.
        *   Constraint: $f_1(x) \ge 0$ OR $f_2(x) \ge 0$.
        *   Formulation: Introduce a binary variable $y$.
            *   $f_1(x) \ge M y$
            *   $f_2(x) \ge M (1-y)$
        *   Here, $M$ is a sufficiently large number (a "big-M") that ensures the constraint is not binding when the binary variable is set appropriately. If $y=1$, the first constraint must hold, and the second can be relaxed. If $y=0$, the second constraint must hold, and the first can be relaxed.

    *   **"If/Then" Constraints:** If a condition $A$ is met, then condition $B$ must also be met.
        *   Let $y$ be a binary variable such that $y=1$ if condition $A$ is met, and $y=0$ otherwise.
        *   Formulation: $B \ge \text{lower bound} \times y$. Or, if condition A implies constraint C must be satisfied: If $x_i > 0$, then $\sum a_j x_j \ge b$.
        *   This can be formulated using binary variables to represent the activated constraints.

*   **Representing Fixed Costs:**
    *   If there's a fixed cost associated with an activity, we can use a binary variable.
    *   Example: If we decide to open a facility (represented by binary variable $y=1$), we incur a fixed cost $F$.
        *   Cost component: $F \times y$.
        *   Constraint: If the facility is used (e.g., for production $x > 0$), then $y$ must be 1. This can be modeled as $x \le M y$, where $M$ is the maximum possible production.

*   **Examples of IP Formulations:**

    *   **Knapsack Problem:**
        *   Items with weights $w_i$ and values $v_i$.
        *   Knapsack capacity $W$.
        *   Decision: Select items to maximize total value without exceeding capacity.
        *   Formulation:
            *   Let $x_i \in \{0, 1\}$ be a binary variable, where $x_i = 1$ if item $i$ is selected, and $0$ otherwise.
            *   Maximize $\sum_{i} v_i x_i$
            *   Subject to: $\sum_{i} w_i x_i \le W$
            *   $x_i \in \{0, 1\}$ for all $i$.

    *   **Facility Location Problem:**
        *   Potential facility locations $j$, with fixed opening cost $f_j$.
        *   Demand points $i$, with demand $d_i$.
        *   Cost of supplying demand $i$ from facility $j$ is $c_{ij}$.
        *   Decision: Which facilities to open, and how to satisfy demand.
        *   Formulation:
            *   Let $y_j \in \{0, 1\}$ be a binary variable, where $y_j = 1$ if facility $j$ is opened, and $0$ otherwise.
            *   Let $x_{ij} \ge 0$ be the amount of demand from point $i$ satisfied by facility $j$.
            *   Minimize $\sum_{j} f_j y_j + \sum_{i} \sum_{j} c_{ij} x_{ij}$
            *   Subject to:
                *   $\sum_{j} x_{ij} = d_i$ for all demand points $i$ (all demand must be met).
                *   $x_{ij} \le d_i y_j$ for all $i, j$ (demand can only be supplied from open facilities). Note: $d_i$ here is a big-M for this constraint.
                *   $y_j \in \{0, 1\}$ for all facilities $j$.
                *   $x_{ij} \ge 0$ for all $i, j$.

---

### 2. Cutting Plane Methods

#### 2.1. The Challenge of Integer Programming

*   **NP-Hardness:** Most integer programming problems are NP-hard. This means that finding an exact optimal solution generally requires a computational effort that grows exponentially with the size of the problem.
*   **LP Relaxation is Not Enough:** Solving the LP relaxation of an IP (i.e., ignoring the integer constraints) can provide a lower bound (for minimization) or upper bound (for maximization) on the optimal IP solution. However, the optimal solution to the LP relaxation is not guaranteed to be integer.

#### 2.2. The Core Idea of Cutting Planes

*   **Definition:** Cutting plane methods are algorithms for solving IPs by iteratively adding new constraints (called **cutting planes** or **cuts**) to the LP relaxation. These cuts are designed to:
    1.  **Not cut off any feasible integer solutions:** They must be satisfied by all feasible integer points.
    2.  **Cut off fractional vertices of the current LP relaxation:** They eliminate parts of the feasible region of the LP relaxation that do not contain any feasible integer solutions.

*   **Process:**
    1.  **Solve the LP Relaxation:** Start by solving the LP relaxation of the IP.
    2.  **Check for Integer Feasibility:** If the LP solution is integer-feasible, it's also optimal for the IP. Terminate.
    3.  **Generate a Cutting Plane:** If the LP solution is fractional, find a valid cutting plane that separates the current fractional solution from the feasible integer solutions.
    4.  **Add the Cut:** Add the cutting plane to the LP relaxation.
    5.  **Repeat:** Go back to step 1 with the augmented LP.

#### 2.3. Gomory Cuts

*   **The First Class of Cuts:** Gomory cuts are a foundational type of cutting plane, developed by Ralph Gomory. They are derived directly from the simplex tableau of an LP solution.

*   **Derivation (for a minimization problem):**
    1.  Suppose we have an optimal tableau for the LP relaxation, and a basic variable $x_B$ has a fractional value $x_B^*$.
    2.  Let the row corresponding to $x_B$ in the tableau be:
        $x_B + \sum_{j \in N} a_{Bj} x_j = x_B^*$
        where $N$ is the set of non-basic variables, and $x_B^*$ is fractional.
    3.  Rewrite the equation: $x_B = x_B^* - \sum_{j \in N} a_{Bj} x_j$.
    4.  For a variable $x_j$ to be an integer, it must be $\ge 0$. We can write any coefficient $a_{Bj}$ as $a_{Bj} = \lfloor a_{Bj} \rfloor + f_{Bj}$, where $\lfloor a_{Bj} \rfloor$ is its integer part and $f_{Bj}$ is its fractional part ($0 \le f_{Bj} < 1$).
    5.  Similarly, $x_B^* = \lfloor x_B^* \rfloor + f_{x_B^*}$, where $0 < f_{x_B^*} < 1$ (since $x_B^*$ is fractional).
    6.  Substitute these into the equation:
        $x_B + \sum_{j \in N} (\lfloor a_{Bj} \rfloor + f_{Bj}) x_j = \lfloor x_B^* \rfloor + f_{x_B^*}$
    7.  Rearrange:
        $x_B + \sum_{j \in N} \lfloor a_{Bj} \rfloor x_j - \lfloor x_B^* \rfloor = f_{x_B^*} - \sum_{j \in N} f_{Bj} x_j$
    8.  The left side of this equation must be an integer because $x_B$ and all $x_j$ must be integers in a feasible integer solution.
    9.  Therefore, the right side must also be an integer. Since $x_j \ge 0$ and $0 \le f_{Bj} < 1$, the term $-\sum_{j \in N} f_{Bj} x_j$ is always less than or equal to 0.
    10. The term $f_{x_B^*}$ is strictly between 0 and 1. So, $f_{x_B^*} - \sum_{j \in N} f_{Bj} x_j$ can be at most $f_{x_B^*}$ (when all $x_j=0$).
    11. For this expression to be an integer, it must be less than or equal to 0. The largest integer it can be is 0.
    12. This leads to the Gomory cut:
        $\sum_{j \in N} f_{Bj} x_j \ge f_{x_B^*}$

*   **Properties of Gomory Cuts:**
    *   **Fractional Cutting:** They are guaranteed to cut off the current fractional solution.
    *   **All-Integer:** If applied to an all-integer IP (where the original LP basis was all-integer), Gomory cuts maintain the property that feasible integer solutions remain integer-feasible.
    *   **Convergence:** For rational IPs, Gomory cuts are guaranteed to eventually yield an integer optimal solution.
    *   **Efficiency:** Can be slow to converge in practice due to the number of cuts needed.

#### 2.4. Other Cutting Plane Approaches

*   **Mixed Integer Programming (MIP) Cuts:** Specialized cuts exist for MIPs, such as:
    *   **Gomory Mixed Integer (GMI) Cuts:** Extensions of Gomory cuts for problems with both integer and continuous variables.
    *   **Knapsack Cuts:** Derived from the structure of knapsack-like subproblems within the LP.
    *   **Cover Inequalities:** Based on set covering constraints, e.g., if you need to cover a set of demands, you might need a certain combination of resources.

*   **Branch and Bound (BnB):** While not strictly a cutting plane method, BnB is a related technique that can be used in conjunction with or as an alternative to cutting planes. BnB explores the solution space by recursively partitioning it (branching) and using LP relaxations to prune branches that cannot lead to an optimal integer solution (bounding).

---

### 3. Applications in Network Design

Integer Programming and cutting planes are fundamental tools for solving complex network design problems, where decisions about building infrastructure, assigning capacities, and routing traffic often involve discrete choices.

#### 3.1. Network Design Problems and their IP Formulations

*   **Capacitated Network Design:**
    *   **Problem:** Decide which links to build in a network and what capacity to assign to them to satisfy demands at minimum cost, subject to capacity constraints.
    *   **IP Formulation:**
        *   Binary variables for link existence/building.
        *   Integer or continuous variables for link capacities.
        *   Flow variables to represent traffic.
        *   Constraints: capacity limits, demand satisfaction, connectivity.

*   **Multicommodity Flow Problems:**
    *   **Problem:** Routing multiple types of "commodities" (e.g., different data streams, goods) through a network simultaneously, minimizing costs or maximizing throughput.
    *   **IP Formulation:**
        *   Flow variables for each commodity on each link.
        *   Capacity constraints that sum up flows of all commodities on a link.
        *   Demand satisfaction for each commodity.

*   **Steiner Tree Problem (in networks):**
    *   **Problem:** Find a minimum-cost subtree that connects a given set of "terminal" nodes in a graph, possibly using intermediate "Steiner" nodes.
    *   **IP Formulation:**
        *   Binary variables for edge inclusion in the tree.
        *   Constraints to ensure connectivity of terminals and prevent cycles.
        *   Commonly formulated using cut constraints (e.g., if a set of nodes is not connected, there must be a cut).

*   **Facility Location and Network Design:**
    *   **Problem:** Combine decisions on where to build facilities (e.g., routers, base stations, warehouses) with decisions on how to connect them and serve demand.
    *   **IP Formulation:** Integrates facility location variables (binary) with network flow and capacity variables.

#### 3.2. How Cutting Planes Help in Network Design

*   **Bridging the LP Relaxation Gap:** Network design problems often have LP relaxations whose optimal solutions are far from integer-feasible. Cutting planes are crucial for tightening these relaxations and bringing the solution closer to an integer optimum.
*   **Handling Discrete Choices:** The core of network design involves discrete choices like:
    *   Building a fiber optic cable (yes/no).
    *   Installing a router at a specific location (yes/no).
    *   Choosing a transmission technology (discrete options).
    *   These directly translate to binary variables in IP formulations.
*   **Example: Network Link Selection:**
    *   Consider a problem where you need to select a subset of possible links to build a communication network.
    *   LP relaxation might suggest fractional link usage.
    *   Cutting planes can be generated based on connectivity requirements. For instance, if a set of nodes must be connected, a cut can be added that prevents a fractional solution where these nodes are disconnected.

---

### 4. Important Points to Remember

*   **IP vs. LP:** The integer constraint is the critical difference. IP is generally much harder to solve than LP.
*   **NP-Hardness:** Most IPs are NP-hard, requiring specialized algorithms like cutting planes or branch and bound.
*   **LP Relaxation:** A valuable starting point, providing bounds but not necessarily integer solutions.
*   **Cutting Planes:** Add constraints to the LP relaxation to eliminate fractional solutions without removing integer solutions.
*   **Gomory Cuts:** A fundamental type of cut derived from the simplex tableau.
*   **Network Design:** A prime application area for IP and cutting planes due to the inherent discrete decisions involved in building and operating networks.
*   **Big-M Method:** Useful for formulating "if/then" and "either/or" constraints using binary variables, but requires careful selection of the "big-M" value.

---

### Practice Questions and Exercises

**Question 1:**
Formulate the following problem as an Integer Program.
A company needs to decide which of its 5 factories to open and how to assign 3 customers to these open factories.
Each factory $j$ (where $j=1, \dots, 5$) has a fixed cost $f_j$ to open.
Each customer $i$ (where $i=1, \dots, 3$) has a demand $d_i$.
The cost of serving customer $i$ from factory $j$ is $c_{ij}$.
At most 3 factories can be opened.
Each factory has a capacity $C_j$, meaning the total demand from customers assigned to factory $j$ cannot exceed $C_j$.

**Answer 1:**
Let $y_j \in \{0, 1\}$ be a binary variable such that $y_j = 1$ if factory $j$ is opened, and $y_j = 0$ otherwise.
Let $x_{ij} \in \{0, 1\}$ be a binary variable such that $x_{ij} = 1$ if customer $i$ is assigned to factory $j$, and $x_{ij} = 0$ otherwise.

**Objective Function:** Minimize the total cost (fixed opening costs + assignment costs).
Minimize $\sum_{j=1}^{5} f_j y_j + \sum_{i=1}^{3} \sum_{j=1}^{5} c_{ij} x_{ij}$

**Constraints:**

1.  **Demand Satisfaction:** Each customer must be assigned to exactly one factory.
    $\sum_{j=1}^{5} x_{ij} = 1 \quad \forall i \in \{1, 2, 3\}$

2.  **Factory Opening:** A customer can only be assigned to an open factory.
    $x_{ij} \le y_j \quad \forall i \in \{1, 2, 3\}, \forall j \in \{1, 2, 3, 4, 5\}$
    *(Alternatively, and more precisely for capacity: the total demand served by factory j is bounded by its capacity and whether it is open)*

3.  **Factory Capacity:** The total demand assigned to an open factory cannot exceed its capacity.
    $\sum_{i=1}^{3} d_i x_{ij} \le C_j y_j \quad \forall j \in \{1, 2, 3, 4, 5\}$
    *(Note: $C_j$ acts as a "big-M" here, ensuring the constraint is inactive if $y_j=0$.)*

4.  **Maximum Number of Open Factories:** At most 3 factories can be opened.
    $\sum_{j=1}^{5} y_j \le 3$

5.  **Variable Types:**
    $y_j \in \{0, 1\} \quad \forall j \in \{1, 2, 3, 4, 5\}$
    $x_{ij} \in \{0, 1\} \quad \forall i \in \{1, 2, 3\}, \forall j \in \{1, 2, 3, 4, 5\}$

---

**Question 2:**
Explain the core idea behind cutting plane methods for solving Integer Programs. What is the purpose of a cutting plane?

**Answer 2:**
The core idea of cutting plane methods is to iteratively solve the Linear Programming (LP) relaxation of an Integer Program (IP). If the LP solution is integer-feasible, it is also the optimal IP solution. However, if the LP solution is fractional, a **cutting plane** is generated.

A cutting plane is an inequality that satisfies two key properties:
1.  **Feasibility Preservation:** It must be satisfied by all feasible integer solutions of the original IP. In other words, it does not remove any valid integer solutions from the feasible region.
2.  **Fractional Solution Exclusion:** It must be violated by the current fractional solution obtained from the LP relaxation. This means the cutting plane "cuts off" the fractional vertex of the LP feasible region.

By adding such cuts sequentially, the feasible region of the LP relaxation is progressively shrunk, while still containing all feasible integer solutions. Eventually, the LP relaxation will yield an integer-feasible solution, which is then guaranteed to be an optimal solution to the original IP.

---

**Question 3:**
Consider the following simple IP:
Minimize $2x_1 + 3x_2$
Subject to:
$x_1 + x_2 \ge 1.5$
$x_1, x_2 \ge 0$, integers.

Solve this IP using the concept of LP relaxation and one Gomory cut (conceptually).

**Answer 3:**
1.  **LP Relaxation:**
    Minimize $2x_1 + 3x_2$
    Subject to:
    $x_1 + x_2 \ge 1.5$
    $x_1, x_2 \ge 0$

    The feasible region is a half-plane above the line $x_1 + x_2 = 1.5$. The objective function has a slope of $-2/3$. As we move the objective line parallel to itself in the direction of minimization, the first point it hits in the feasible region will be on the boundary $x_1+x_2 = 1.5$.

    The optimal solution to the LP relaxation occurs at a point on the line $x_1 + x_2 = 1.5$. The vertex that minimizes $2x_1 + 3x_2$ would be achieved by making $x_2$ as small as possible, i.e., $x_1 = 1.5, x_2 = 0$.
    At this point, the objective value is $2(1.5) + 3(0) = 3$.

2.  **Check for Integer Feasibility:** The solution $(1.5, 0)$ is not integer-feasible.

3.  **Generate a Gomory Cut:**
    From the row corresponding to $x_1$ in a hypothetical simplex tableau, we might get:
    $x_1 + \frac{1}{2}x_2' = 1.5$ (where $x_2'$ is a surplus variable $x_1+x_2 - s_1 = 1.5$, so $x_1 = 1.5 - x_2 + s_1$; here $x_2$ is non-basic, $s_1$ is basic). Let's assume the tableau is structured such that $x_1$ is basic.
    The critical row is $x_1 = 1.5 - (\text{terms involving non-basic variables})$. Let's simplify this to the constraint directly.
    We have $x_1 = 1.5 - x_2$. (Assuming $x_2$ is a non-basic variable, and we are using it to derive the cut. This simplification is for illustrative purposes of a cut derivation.)
    $x_1 = (1) + 0.5 - x_2$
    The fractional part of $x_1$ is $f_{x_1} = 0.5$.
    The fractional part of the coefficient of $x_2$ (which is -1) doesn't directly apply here in the standard Gomory cut derivation if $x_2$ is continuous.

    Let's consider a slightly different scenario where the constraint leads to a direct fractional value for a basic variable.
    If we use the constraint $x_1 + x_2 \ge 1.5$, and its LP solution is $(1.5, 0)$.
    Let's rewrite this as:
    $x_1 = 1.5 - x_2$
    If $x_2$ is a non-basic variable, its value is 0.
    $x_1 = 1.5$.
    The fractional part of $x_1$ is $0.5$.
    The fractional part of the constant term is $0.5$.
    The fractional parts of the coefficients of non-basic variables must be considered. If $x_2$ were the only non-basic variable, the Gomory cut would be:
    $f_{x_1} x_1 + \sum_{j \in N} f_{a_{1j}} x_j \ge f_{b_1}$
    However, the standard derivation is from a full tableau row. Let's assume the row is:
    $x_1 + \frac{1}{2}x_2 = 1.5$
    $x_1 = 1.5 - \frac{1}{2}x_2$
    $x_1 = 1 + 0.5 - \frac{1}{2}x_2$
    The cut is $0.5 \ge \frac{1}{2}x_2$. This isn't very restrictive.

    A more appropriate cut would come from transforming the inequality.
    Let's use the fractional value $x_1 = 1.5$.
    We need integer solutions. The closest integer points to $(1.5, 0)$ that satisfy $x_1+x_2 \ge 1.5$ are $(2,0), (1,1), (0,2)$ etc.
    Consider the constraint $x_1+x_2 \ge 1.5$.
    Since $x_1, x_2$ must be integers, $x_1+x_2$ must be an integer.
    The smallest integer greater than or equal to $1.5$ is $2$.
    So, a valid cutting plane is $x_1 + x_2 \ge 2$.

    **New LP Relaxation:**
    Minimize $2x_1 + 3x_2$
    Subject to:
    $x_1 + x_2 \ge 1.5$
    $x_1 + x_2 \ge 2$
    $x_1, x_2 \ge 0$

    The constraint $x_1 + x_2 \ge 2$ is a stronger constraint than $x_1 + x_2 \ge 1.5$ for integer solutions.
    Now, consider the LP relaxation of this new problem. The optimal solution will satisfy $x_1 + x_2 = 2$.
    To minimize $2x_1 + 3x_2$, we set $x_1=2, x_2=0$. Objective value = $2(2) + 3(0) = 4$. This is integer feasible.
    Or we could have $x_1=1, x_2=1$. Objective value = $2(1) + 3(1) = 5$.
    The LP solution to $x_1+x_2=2$ minimizing $2x_1+3x_2$ is $(2,0)$.

    Let's check the original integer constraints: $x_1, x_2 \ge 0$, integers.
    The LP relaxation now yields $(2,0)$, which is integer feasible.
    The optimal integer solution is $(2,0)$ with value 4.

    This example highlights how a simple transformation to an integer-valued constraint can act as a cut. Standard Gomory cuts are derived systematically from the simplex tableau.

---

This concludes Module 2 on Linear Programming Relaxation and Integer Programming with Cutting Planes.
