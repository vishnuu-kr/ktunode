---
title: "Transportation Problem: Mathematical Formulation"
subject: "OPERATIONS RESEARCH"
module: "Module 1: Introduction to Operations Research (OR)"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf4804463617"
status: "completed"
scrapedAt: "2026-05-20T18:01:47.360Z"
---
# Operations Research: Module 1 - Introduction to OR: Transportation Problem: Mathematical Formulation

---

## 1. Introduction to Operations Research (OR)

Operations Research (OR) is a scientific approach to decision-making that seeks to determine the best possible course of action under a set of constraints. It uses mathematical modeling, statistical analysis, and algorithms to solve complex problems faced by organizations. The goal of OR is to optimize the allocation of scarce resources to achieve specific objectives.

**Key Concepts:**

*   **Decision Variables:** Variables representing the quantities to be determined in the problem.
*   **Objective Function:** A mathematical expression that quantifies the goal to be optimized (minimized or maximized).
*   **Constraints:** Limitations or restrictions that the decision variables must satisfy.
*   **Feasible Solution:** A set of values for decision variables that satisfies all constraints.
*   **Optimal Solution:** A feasible solution that yields the best possible value for the objective function.

**OR Applications:**

*   Resource Allocation
*   Production Planning
*   Inventory Management
*   Scheduling
*   Logistics and Transportation
*   Financial Planning

---

## 2. Transportation Problem: Mathematical Formulation

The Transportation Problem is a classic linear programming problem that deals with the transportation of goods from various sources (e.g., factories, warehouses) to various destinations (e.g., retail stores, customers) at the minimum possible cost. It assumes that the cost of transporting one unit of a commodity is constant, regardless of the quantity transported.

**2.1. Problem Description**

A company has $m$ sources (e.g., plants) and $n$ destinations (e.g., warehouses).
Each source $i$ ($i = 1, 2, \dots, m$) has a certain supply, denoted by $a_i$.
Each destination $j$ ($j = 1, 2, \dots, n$) has a certain demand, denoted by $b_j$.
The cost of transporting one unit of the commodity from source $i$ to destination $j$ is $c_{ij}$.

The objective is to determine the quantity of the commodity to be transported from each source $i$ to each destination $j$ so that the total transportation cost is minimized, while satisfying the supply at each source and the demand at each destination.

**2.2. Key Components of a Transportation Problem**

*   **Sources:** Origins of the goods.
*   **Destinations:** Destinations where the goods are needed.
*   **Supply:** The amount of goods available at each source.
*   **Demand:** The amount of goods required at each destination.
*   **Transportation Cost:** The cost per unit to transport goods from a source to a destination.

**2.3. Assumptions of the Transportation Problem**

*   The quantity of goods to be shipped from a source is finite.
*   The quantity of goods required at a destination is finite.
*   The cost of shipping one unit from any source to any destination is constant and known.
*   The transportation cost is directly proportional to the quantity shipped.
*   The goods shipped from any source to any destination are homogeneous.
*   The objective is to minimize the total transportation cost.

**2.4. Mathematical Model of the Transportation Problem**

**Decision Variables:**

Let $x_{ij}$ be the quantity of the commodity to be transported from source $i$ to destination $j$.

**Objective Function:**

The goal is to minimize the total transportation cost.
$$
\text{Minimize } Z = \sum_{i=1}^{m} \sum_{j=1}^{n} c_{ij} x_{ij}
$$

**Constraints:**

1.  **Supply Constraints:** The total quantity shipped from each source $i$ cannot exceed its supply $a_i$.
    $$
    \sum_{j=1}^{n} x_{ij} \le a_i \quad \text{for } i = 1, 2, \dots, m
    $$
2.  **Demand Constraints:** The total quantity shipped to each destination $j$ must meet its demand $b_j$.
    $$
    \sum_{i=1}^{m} x_{ij} \ge b_j \quad \text{for } j = 1, 2, \dots, n
    $$
3.  **Non-negativity Constraints:** The quantity shipped cannot be negative.
    $$
    x_{ij} \ge 0 \quad \text{for all } i \text{ and } j
    $$

**2.5. Balanced vs. Unbalanced Transportation Problem**

A transportation problem is considered **balanced** if the total supply equals the total demand:
$$
\sum_{i=1}^{m} a_i = \sum_{j=1}^{n} b_j
$$

If the total supply does not equal the total demand, the problem is **unbalanced**.

*   **If Total Supply > Total Demand:** The problem is unbalanced. To balance it, a **dummy destination** is added. This dummy destination will absorb the excess supply. The supply at the dummy destination will be $(\sum a_i - \sum b_j)$, and the transportation costs to this dummy destination are usually set to zero. This ensures that the total supply equals the total demand.

*   **If Total Demand > Total Supply:** The problem is unbalanced. To balance it, a **dummy source** is added. This dummy source will fulfill the unmet demand. The demand at the dummy source will be $(\sum b_j - \sum a_i)$, and the transportation costs from this dummy source are usually set to zero. This ensures that the total supply equals the total demand.

**2.6. Conversion to Equality Constraints (for Balanced Problems)**

For a balanced transportation problem, the supply and demand constraints can be written as equality constraints:

*   **Supply Constraints:**
    $$
    \sum_{j=1}^{n} x_{ij} = a_i \quad \text{for } i = 1, 2, \dots, m
    $$
*   **Demand Constraints:**
    $$
    \sum_{i=1}^{m} x_{ij} = b_j \quad \text{for } j = 1, 2, \dots, n
    $$

**2.7. Example: Mathematical Formulation**

A company has two factories (Sources S1, S2) and three warehouses (Destinations D1, D2, D3). The supply at each factory and the demand at each warehouse are given below, along with the per-unit transportation costs.

| From \ To | D1 | D2 | D3 | Supply |
| :-------- | :- | :- | :- | :----- |
| **S1**    | 10 | 4  | 20 | 50     |
| **S2**    | 12 | 15 | 8  | 70     |
| **Demand**| 30 | 40 | 50 | 120    |

**Formulation:**

*   **Sources (m=2):** S1, S2
*   **Destinations (n=3):** D1, D2, D3
*   **Supply:** $a_1 = 50$ (S1), $a_2 = 70$ (S2)
*   **Demand:** $b_1 = 30$ (D1), $b_2 = 40$ (D2), $b_3 = 50$ (D3)
*   **Costs:** $c_{11}=10, c_{12}=4, c_{13}=20, c_{21}=12, c_{22}=15, c_{23}=8$

**Decision Variables:**
$x_{11}, x_{12}, x_{13}$ (quantity from S1 to D1, D2, D3 respectively)
$x_{21}, x_{22}, x_{23}$ (quantity from S2 to D1, D2, D3 respectively)

**Check for Balanced Problem:**
Total Supply = $a_1 + a_2 = 50 + 70 = 120$
Total Demand = $b_1 + b_2 + b_3 = 30 + 40 + 50 = 120$
Since Total Supply = Total Demand, the problem is **balanced**.

**Mathematical Model:**

**Objective Function:**
$$
\text{Minimize } Z = 10x_{11} + 4x_{12} + 20x_{13} + 12x_{21} + 15x_{22} + 8x_{23}
$$

**Constraints:**

1.  **Supply Constraints:**
    *   For S1: $x_{11} + x_{12} + x_{13} = 50$
    *   For S2: $x_{21} + x_{22} + x_{23} = 70$

2.  **Demand Constraints:**
    *   For D1: $x_{11} + x_{21} = 30$
    *   For D2: $x_{12} + x_{22} = 40$
    *   For D3: $x_{13} + x_{23} = 50$

3.  **Non-negativity Constraints:**
    $x_{11}, x_{12}, x_{13}, x_{21}, x_{22}, x_{23} \ge 0$

**2.8. Example: Unbalanced Problem (Supply > Demand)**

Consider the following problem:

| From \ To | D1 | D2 | D3 | Supply |
| :-------- | :- | :- | :- | :----- |
| **S1**    | 10 | 4  | 20 | 50     |
| **S2**    | 12 | 15 | 8  | 70     |
| **Demand**| 30 | 40 | 30 | 100    |

**Check for Balanced Problem:**
Total Supply = $50 + 70 = 120$
Total Demand = $30 + 40 + 30 = 100$
Total Supply > Total Demand. The excess supply is $120 - 100 = 20$.

To balance the problem, we add a **dummy destination (D_dummy)** with a demand of 20. The transportation costs to this dummy destination are usually set to zero.

| From \ To   | D1 | D2 | D3 | D_dummy | Supply |
| :---------- | :- | :- | :- | :------ | :----- |
| **S1**      | 10 | 4  | 20 | 0       | 50     |
| **S2**      | 12 | 15 | 8  | 0       | 70     |
| **Demand**  | 30 | 40 | 30 | 20      | 120    |

**Mathematical Model:**

**Decision Variables:**
$x_{11}, x_{12}, x_{13}, x_{1,dummy}$
$x_{21}, x_{22}, x_{23}, x_{2,dummy}$

**Objective Function:**
$$
\text{Minimize } Z = 10x_{11} + 4x_{12} + 20x_{13} + 0x_{1,dummy} + 12x_{21} + 15x_{22} + 8x_{23} + 0x_{2,dummy}
$$

**Constraints:**

1.  **Supply Constraints:**
    *   For S1: $x_{11} + x_{12} + x_{13} + x_{1,dummy} = 50$
    *   For S2: $x_{21} + x_{22} + x_{23} + x_{2,dummy} = 70$

2.  **Demand Constraints:**
    *   For D1: $x_{11} + x_{21} = 30$
    *   For D2: $x_{12} + x_{22} = 40$
    *   For D3: $x_{13} + x_{23} = 30$
    *   For D_dummy: $x_{1,dummy} + x_{2,dummy} = 20$

3.  **Non-negativity Constraints:**
    All $x_{ij}$ and $x_{i,dummy} \ge 0$

**2.9. Example: Unbalanced Problem (Demand > Supply)**

Consider the following problem:

| From \ To | D1 | D2 | D3 | Supply |
| :-------- | :- | :- | :- | :----- |
| **S1**    | 10 | 4  | 20 | 40     |
| **S2**    | 12 | 15 | 8  | 50     |
| **Demand**| 30 | 40 | 50 | 120    |

**Check for Balanced Problem:**
Total Supply = $40 + 50 = 90$
Total Demand = $30 + 40 + 50 = 120$
Total Demand > Total Supply. The unmet demand is $120 - 90 = 30$.

To balance the problem, we add a **dummy source (S_dummy)** with a supply of 30. The transportation costs from this dummy source are usually set to zero.

| From \ To   | D1 | D2 | D3 | Supply |
| :---------- | :- | :- | :- | :----- |
| **S1**      | 10 | 4  | 20 | 40     |
| **S2**      | 12 | 15 | 8  | 50     |
| **S_dummy** | 0  | 0  | 0  | 30     |
| **Demand**  | 30 | 40 | 50 | 120    |

**Mathematical Model:**

**Decision Variables:**
$x_{11}, x_{12}, x_{13}$
$x_{21}, x_{22}, x_{23}$
$x_{dummy,1}, x_{dummy,2}, x_{dummy,3}$

**Objective Function:**
$$
\text{Minimize } Z = 10x_{11} + 4x_{12} + 20x_{13} + 12x_{21} + 15x_{22} + 8x_{23} + 0x_{dummy,1} + 0x_{dummy,2} + 0x_{dummy,3}
$$

**Constraints:**

1.  **Supply Constraints:**
    *   For S1: $x_{11} + x_{12} + x_{13} = 40$
    *   For S2: $x_{21} + x_{22} + x_{23} = 50$
    *   For S_dummy: $x_{dummy,1} + x_{dummy,2} + x_{dummy,3} = 30$

2.  **Demand Constraints:**
    *   For D1: $x_{11} + x_{21} + x_{dummy,1} = 30$
    *   For D2: $x_{12} + x_{22} + x_{dummy,2} = 40$
    *   For D3: $x_{13} + x_{23} + x_{dummy,3} = 50$

3.  **Non-negativity Constraints:**
    All $x_{ij}$ and $x_{dummy,j} \ge 0$

**2.10. Connection to Course Outcomes**

*   **CO1: To formulate and solve linear programming problems and transportation problems (Knowledge Level: K2, K3)**
    This topic directly addresses the formulation aspect of transportation problems, which are a specific type of linear programming problem. Understanding the mathematical formulation (objective function and constraints) is the foundational step (K2) for then moving on to solving them (K3), which will be covered in subsequent sections/modules.

**2.11. Important Points to Remember**

*   The transportation problem aims to minimize cost.
*   It involves sources with supplies and destinations with demands.
*   The core of the formulation is the objective function (total cost) and the constraints (supply and demand limits).
*   Always check if the problem is balanced (Total Supply = Total Demand).
*   Unbalanced problems can be converted to balanced ones by adding dummy sources or destinations with zero transportation costs.
*   The formulation is a linear programming problem.

---

## 3. Practice Questions

**Question 1:**

Formulate the following transportation problem as a linear programming problem.

A company has three plants (P1, P2, P3) and four distribution centers (D1, D2, D3, D4). The supply at each plant and the demand at each distribution center are given below. The cost of transporting one unit from each plant to each distribution center is also provided.

| From \ To | D1 | D2 | D3 | D4 | Supply |
| :-------- | :- | :- | :- | :- | :----- |
| **P1**    | 5  | 7  | 6  | 8  | 100    |
| **P2**    | 6  | 4  | 9  | 7  | 120    |
| **P3**    | 10 | 8  | 5  | 6  | 130    |
| **Demand**| 80 | 70 | 90 | 90 | 330    |

**Answer 1:**

Let $x_{ij}$ be the quantity transported from plant $i$ to distribution center $j$.

*   **Sources (m=3):** P1, P2, P3
*   **Destinations (n=4):** D1, D2, D3, D4
*   **Supply:** $a_1=100, a_2=120, a_3=130$
*   **Demand:** $b_1=80, b_2=70, b_3=90, b_4=90$
*   **Costs:** $c_{11}=5, c_{12}=7, c_{13}=6, c_{14}=8$, $c_{21}=6, c_{22}=4, c_{23}=9, c_{24}=7$, $c_{31}=10, c_{32}=8, c_{33}=5, c_{34}=6$

**Check for Balanced Problem:**
Total Supply = $100 + 120 + 130 = 350$
Total Demand = $80 + 70 + 90 + 90 = 330$
Total Supply > Total Demand. The excess supply is $350 - 330 = 20$.

Add a dummy distribution center (D_dummy) with demand 20 and zero transportation costs.

**Mathematical Model:**

**Objective Function:**
$$
\text{Minimize } Z = 5x_{11} + 7x_{12} + 6x_{13} + 8x_{14} + 6x_{21} + 4x_{22} + 9x_{23} + 7x_{24} + 10x_{31} + 8x_{32} + 5x_{33} + 6x_{34} + 0x_{1,dummy} + 0x_{2,dummy} + 0x_{3,dummy}
$$

**Constraints:**

1.  **Supply Constraints:**
    *   $x_{11} + x_{12} + x_{13} + x_{14} + x_{1,dummy} = 100$
    *   $x_{21} + x_{22} + x_{23} + x_{24} + x_{2,dummy} = 120$
    *   $x_{31} + x_{32} + x_{33} + x_{34} + x_{3,dummy} = 130$

2.  **Demand Constraints:**
    *   $x_{11} + x_{21} + x_{31} = 80$
    *   $x_{12} + x_{22} + x_{32} = 70$
    *   $x_{13} + x_{23} + x_{33} = 90$
    *   $x_{14} + x_{24} + x_{34} = 90$
    *   $x_{1,dummy} + x_{2,dummy} + x_{3,dummy} = 20$

3.  **Non-negativity Constraints:**
    All $x_{ij} \ge 0$, and $x_{i,dummy} \ge 0$.

**Question 2:**

A company wishes to ship goods from two sources (S1, S2) to three destinations (D1, D2, D3). The supplies, demands, and unit transportation costs are as follows:

| From \ To | D1 | D2 | D3 | Supply |
| :-------- | :- | :- | :- | :----- |
| **S1**    | 2  | 3  | 1  | 50     |
| **S2**    | 3  | 4  | 2  | 70     |
| **Demand**| 40 | 30 | 40 | 110    |

Formulate the mathematical model for this transportation problem and then balance it by introducing a dummy source or destination, if necessary.

**Answer 2:**

*   **Sources (m=2):** S1, S2
*   **Destinations (n=3):** D1, D2, D3
*   **Supply:** $a_1=50, a_2=70$
*   **Demand:** $b_1=40, b_2=30, b_3=40$
*   **Costs:** $c_{11}=2, c_{12}=3, c_{13}=1$, $c_{21}=3, c_{22}=4, c_{23}=2$

**Check for Balanced Problem:**
Total Supply = $50 + 70 = 120$
Total Demand = $40 + 30 + 40 = 110$
Total Supply > Total Demand. The excess supply is $120 - 110 = 10$.

Add a dummy destination (D_dummy) with demand 10 and zero transportation costs.

**Mathematical Model:**

**Decision Variables:**
$x_{11}, x_{12}, x_{13}, x_{1,dummy}$
$x_{21}, x_{22}, x_{23}, x_{2,dummy}$

**Objective Function:**
$$
\text{Minimize } Z = 2x_{11} + 3x_{12} + 1x_{13} + 0x_{1,dummy} + 3x_{21} + 4x_{22} + 2x_{23} + 0x_{2,dummy}
$$

**Constraints:**

1.  **Supply Constraints:**
    *   $x_{11} + x_{12} + x_{13} + x_{1,dummy} = 50$
    *   $x_{21} + x_{22} + x_{23} + x_{2,dummy} = 70$

2.  **Demand Constraints:**
    *   $x_{11} + x_{21} = 40$
    *   $x_{12} + x_{22} = 30$
    *   $x_{13} + x_{23} = 40$
    *   $x_{1,dummy} + x_{2,dummy} = 10$

3.  **Non-negativity Constraints:**
    All $x_{ij} \ge 0$, and $x_{i,dummy} \ge 0$.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=fNk_zzaMoEs) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |


## 4. References

*   **Operations Research-Principles and Applications by Srinivasan, G. (PHI Pvt. Ltd., Third Edition, 2017)**: Provides a solid foundation in OR principles and their applications, including detailed coverage of transportation problems.
*   **Operations Research by Prem Kumar Gupta & D. S. Hira (S Chand publication, Third Edition, 2008)**: Offers comprehensive explanations and numerous examples for various OR techniques, including the mathematical formulation of transportation problems.
*   **Quantitative Techniques in Management by N. D Vohra. Hitesh Arora (McGraw Hill., Sixth Edition, 2021)**: Focuses on the application of quantitative techniques in management, with clear explanations of how to formulate and model problems like the transportation problem.
*   **Optimization: Theory and Applications by Rao, S.S. (Wiley eastern., Second edition,)**: A more advanced text that delves into the theoretical aspects of optimization, providing a deep understanding of the mathematical underpinnings of problems like transportation.
*   **Introduction to Operations Research, by F. S. Hillier& G. J. Leiberman: (McGraw Hill, Eleventh Edition)**: A widely recognized textbook that covers OR topics thoroughly, including the formulation and solution of transportation problems with various methods.