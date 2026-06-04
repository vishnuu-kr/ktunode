---
title: "Transportation Problem: Mathematical Formulation"
subject: "QUANTITATIVE TECHNIQUES FOR ENGINEERS"
module: "Module 2: Transportation Problem: Mathematical Formulation"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463a69"
status: "completed"
scrapedAt: "2026-05-20T18:07:25.898Z"
---
# QUANTITATIVE TECHNIQUES FOR ENGINEERS

## Module 2: Transportation Problem: Mathematical Formulation

### Topic: Transportation Problem: Mathematical Formulation

---

### 1. Introduction to the Transportation Problem

The transportation problem is a classic optimization problem in Operations Research. It deals with the efficient allocation of resources from a set of supply points (sources) to a set of demand points (destinations) at the minimum possible cost. This problem arises in various real-world scenarios, such as logistics, production planning, and resource distribution.

**Learning Outcome Alignment:** This topic directly contributes to **CO1: To formulate and solve linear programming and transportation problems (Knowledge Level: K4)** by focusing on the formulation aspect.

**Key Concepts:**

*   **Sources/Origins:** Locations where the supply originates (e.g., factories, warehouses).
*   **Destinations/Sinks:** Locations where the demand needs to be met (e.g., retail stores, customers).
*   **Supply:** The quantity of goods available at each source.
*   **Demand:** The quantity of goods required at each destination.
*   **Transportation Cost:** The cost of transporting one unit of goods from a source to a destination.
*   **Decision Variables:** The quantities of goods to be transported from each source to each destination.

**Textbook References:**

*   **Paneerselvam R., Operations Research (Third edition, 2023):** Chapter on Transportation Problems, specifically sections on formulation.
*   **Taha, Operations Research (Tenth edition, 2019):** Chapter on Transportation Problems, with detailed explanations of the problem setup.

---

### 2. Mathematical Formulation of the Transportation Problem

The transportation problem can be formulated as a Linear Programming (LP) problem. The objective is to minimize the total transportation cost, subject to constraints on supply and demand.

**Key Concepts:**

*   **Decision Variables:** Let $x_{ij}$ be the quantity of goods transported from source $i$ to destination $j$.
    *   $i = 1, 2, \dots, m$ (where $m$ is the number of sources)
    *   $j = 1, 2, \dots, n$ (where $n$ is the number of destinations)

*   **Objective Function:** Minimize the total transportation cost.
    $Z = \sum_{i=1}^{m} \sum_{j=1}^{n} c_{ij} x_{ij}$
    where $c_{ij}$ is the cost of transporting one unit from source $i$ to destination $j$.

*   **Constraints:**

    *   **Supply Constraints:** The total quantity shipped *from* each source cannot exceed its available supply.
        $\sum_{j=1}^{n} x_{ij} \le S_i$ for each source $i = 1, 2, \dots, m$
        where $S_i$ is the supply at source $i$.

    *   **Demand Constraints:** The total quantity shipped *to* each destination must meet its demand.
        $\sum_{i=1}^{m} x_{ij} \ge D_j$ for each destination $j = 1, 2, \dots, n$
        where $D_j$ is the demand at destination $j$.

    *   **Non-negativity Constraints:** The quantity shipped cannot be negative.
        $x_{ij} \ge 0$ for all $i$ and $j$.

**Textbook References:**

*   **Paneerselvam R., Operations Research (Third edition, 2023):** Provides standard LP formulation for balanced and unbalanced transportation problems.
*   **Taha, Operations Research (Tenth edition, 2019):** Details the formulation with clear mathematical notation.

---

### 3. Balanced vs. Unbalanced Transportation Problems

A transportation problem is considered **balanced** if the total supply equals the total demand. If they are not equal, the problem is **unbalanced**.

**Key Concepts:**

*   **Balanced Problem:** $\sum_{i=1}^{m} S_i = \sum_{j=1}^{n} D_j$
*   **Unbalanced Problem:** $\sum_{i=1}^{m} S_i \ne \sum_{j=1}^{n} D_j$

**Handling Unbalanced Problems:**

*   **Excess Supply:** If total supply $>$ total demand ($\sum S_i > \sum D_j$), a **dummy destination** is introduced with a demand equal to the excess supply. The transportation costs to the dummy destination are usually zero, representing unused supply.
    *   The supply constraint for the dummy destination will be $\sum_{i=1}^{m} x_{i, dummy} = \sum S_i - \sum D_j$.
    *   The demand constraint for the dummy destination will be $\sum_{i=1}^{m} x_{i, dummy} \le \sum S_i - \sum D_j$ (or set to equality if we assume all supply must be allocated).

*   **Excess Demand:** If total demand $>$ total supply ($\sum D_j > \sum S_i$), a **dummy source** is introduced with a supply equal to the excess demand. The transportation costs from the dummy source are usually zero (or a very high penalty cost if unmet demand is penalized), representing unmet demand.
    *   The supply constraint for the dummy source will be $\sum_{j=1}^{n} x_{dummy, j} = \sum D_j - \sum S_i$.
    *   The demand constraint for the dummy source will be $\sum_{j=1}^{n} x_{dummy, j} \le \sum D_j - \sum S_i$ (or set to equality if we assume all demand must be satisfied as much as possible).

**Textbook References:**

*   **Paneerselvam R., Operations Research (Third edition, 2023):** Dedicates a section to converting unbalanced problems into balanced ones.
*   **Taha, Operations Research (Tenth edition, 2019):** Explains the concept of dummy sources/destinations with illustrative examples.
*   **Hillier & Lieberman, Introduction to Operations Research (Tenth edition, 2017):** Discusses the modeling of unbalanced problems thoroughly.

---

### 4. Example of Mathematical Formulation

Let's consider a transportation problem with two sources (S1, S2) and three destinations (D1, D2, D3).

**Data:**

| From \ To | D1 | D2 | D3 | Supply |
| :-------- | :- | :- | :- | :----- |
| S1        | 10 | 4  | 20 | 50     |
| S2        | 8  | 15 | 9  | 70     |
| Demand    | 40 | 30 | 50 |        |

**Step 1: Check for Balance**

Total Supply = $50 + 70 = 120$
Total Demand = $40 + 30 + 50 = 120$

The problem is **balanced**.

**Step 2: Define Decision Variables**

Let $x_{ij}$ be the quantity shipped from source $i$ to destination $j$.
*   $x_{11}$: Shipment from S1 to D1
*   $x_{12}$: Shipment from S1 to D2
*   $x_{13}$: Shipment from S1 to D3
*   $x_{21}$: Shipment from S2 to D1
*   $x_{22}$: Shipment from S2 to D2
*   $x_{23}$: Shipment from S2 to D3

**Step 3: Formulate the Objective Function**

Minimize $Z = 10x_{11} + 4x_{12} + 20x_{13} + 8x_{21} + 15x_{22} + 9x_{23}$

**Step 4: Formulate the Constraints**

*   **Supply Constraints:**
    *   S1: $x_{11} + x_{12} + x_{13} \le 50$
    *   S2: $x_{21} + x_{22} + x_{23} \le 70$
    *(Since it's balanced, we can also use equality: $x_{11} + x_{12} + x_{13} = 50$ and $x_{21} + x_{22} + x_{23} = 70$)*

*   **Demand Constraints:**
    *   D1: $x_{11} + x_{21} \ge 40$
    *   D2: $x_{12} + x_{22} \ge 30$
    *   D3: $x_{13} + x_{23} \ge 50$
    *(Since it's balanced, we can also use equality: $x_{11} + x_{21} = 40$, $x_{12} + x_{22} = 30$, $x_{13} + x_{23} = 50$)*

*   **Non-negativity Constraints:**
    $x_{11}, x_{12}, x_{13}, x_{21}, x_{22}, x_{23} \ge 0$

**Complete LP Formulation:**

Minimize $Z = 10x_{11} + 4x_{12} + 20x_{13} + 8x_{21} + 15x_{22} + 9x_{23}$

Subject to:
$x_{11} + x_{12} + x_{13} = 50$
$x_{21} + x_{22} + x_{23} = 70$
$x_{11} + x_{21} = 40$
$x_{12} + x_{22} = 30$
$x_{13} + x_{23} = 50$
$x_{ij} \ge 0$ for all $i, j$.

---

### 5. Example of an Unbalanced Transportation Problem (Excess Supply)

Let's consider a scenario where total supply exceeds total demand.

**Data:**

| From \ To | D1 | D2 | D3 | Supply |
| :-------- | :- | :- | :- | :----- |
| S1        | 5  | 7  | 9  | 30     |
| S2        | 6  | 8  | 7  | 40     |
| S3        | 10 | 5  | 8  | 50     |
| Demand    | 20 | 30 | 40 |        |

**Step 1: Check for Balance**

Total Supply = $30 + 40 + 50 = 120$
Total Demand = $20 + 30 + 40 = 90$

Total Supply $>$ Total Demand. The problem is **unbalanced**.
Excess Supply = $120 - 90 = 30$.

**Step 2: Introduce a Dummy Destination**

We add a dummy destination (D_dummy) with a demand of 30. The transportation costs to D_dummy are 0.

| From \ To | D1 | D2 | D3 | D_dummy | Supply |
| :-------- | :- | :- | :- | :------ | :----- |
| S1        | 5  | 7  | 9  | 0       | 30     |
| S2        | 6  | 8  | 7  | 0       | 40     |
| S3        | 10 | 5  | 8  | 0       | 50     |
| Demand    | 20 | 30 | 40 | 30      |        |

Now, Total Supply = $30 + 40 + 50 = 120$
Total Demand = $20 + 30 + 40 + 30 = 120$
The problem is now **balanced**.

**Step 3: Define Decision Variables**

Let $x_{ij}$ be the quantity shipped from source $i$ to destination $j$, and $x_{i,dummy}$ be the quantity shipped from source $i$ to the dummy destination.

**Step 4: Formulate the Objective Function**

Minimize $Z = 5x_{11} + 7x_{12} + 9x_{13} + 6x_{21} + 8x_{22} + 7x_{23} + 10x_{31} + 5x_{32} + 8x_{33} + 0x_{1,dummy} + 0x_{2,dummy} + 0x_{3,dummy}$

**Step 5: Formulate the Constraints**

*   **Supply Constraints:**
    $x_{11} + x_{12} + x_{13} + x_{1,dummy} = 30$
    $x_{21} + x_{22} + x_{23} + x_{2,dummy} = 40$
    $x_{31} + x_{32} + x_{33} + x_{3,dummy} = 50$

*   **Demand Constraints:**
    $x_{11} + x_{21} + x_{31} = 20$
    $x_{12} + x_{22} + x_{32} = 30$
    $x_{13} + x_{23} + x_{33} = 40$
    $x_{1,dummy} + x_{2,dummy} + x_{3,dummy} = 30$

*   **Non-negativity Constraints:**
    $x_{ij} \ge 0$ for all $i, j$, and $x_{i,dummy} \ge 0$ for all $i$.

---

### 6. Example of an Unbalanced Transportation Problem (Excess Demand)

Let's consider a scenario where total demand exceeds total supply.

**Data:**

| From \ To | D1 | D2 | D3 | Supply |
| :-------- | :- | :- | :- | :----- |
| S1        | 3  | 1  | 4  | 25     |
| S2        | 2  | 6  | 5  | 35     |
| Demand    | 30 | 20 | 25 |        |

**Step 1: Check for Balance**

Total Supply = $25 + 35 = 60$
Total Demand = $30 + 20 + 25 = 75$

Total Demand $>$ Total Supply. The problem is **unbalanced**.
Excess Demand = $75 - 60 = 15$.

**Step 2: Introduce a Dummy Source**

We add a dummy source (S_dummy) with a supply of 15. The transportation costs from S_dummy are often set to 0 or a high penalty cost if unmet demand incurs costs. For simple formulation, we use 0.

| From \ To | D1 | D2 | D3 | Supply |
| :-------- | :- | :- | :- | :----- |
| S1        | 3  | 1  | 4  | 25     |
| S2        | 2  | 6  | 5  | 35     |
| S_dummy   | 0  | 0  | 0  | 15     |
| Demand    | 30 | 20 | 25 |        |

Now, Total Supply = $25 + 35 + 15 = 75$
Total Demand = $30 + 20 + 25 = 75$
The problem is now **balanced**.

**Step 3: Define Decision Variables**

Let $x_{ij}$ be the quantity shipped from source $i$ to destination $j$, and $x_{dummy, j}$ be the quantity shipped from the dummy source to destination $j$.

**Step 4: Formulate the Objective Function**

Minimize $Z = 3x_{11} + 1x_{12} + 4x_{13} + 2x_{21} + 6x_{22} + 5x_{23} + 0x_{dummy, 1} + 0x_{dummy, 2} + 0x_{dummy, 3}$

**Step 5: Formulate the Constraints**

*   **Supply Constraints:**
    $x_{11} + x_{12} + x_{13} = 25$
    $x_{21} + x_{22} + x_{23} = 35$
    $x_{dummy, 1} + x_{dummy, 2} + x_{dummy, 3} = 15$

*   **Demand Constraints:**
    $x_{11} + x_{21} + x_{dummy, 1} = 30$
    $x_{12} + x_{22} + x_{dummy, 2} = 20$
    $x_{13} + x_{23} + x_{dummy, 3} = 25$

*   **Non-negativity Constraints:**
    $x_{ij} \ge 0$ for all $i, j$, and $x_{dummy, j} \ge 0$ for all $j$.

**Important Note on Dummy Source Costs:** If the problem statement implies a penalty for unmet demand, the cost from the dummy source to a destination $j$ would be set to this penalty cost $p_j$. This would influence the allocation decisions. For basic formulation, zero cost is common.

---

### 7. Modeling Considerations and Generalizations

*   **Fixed Costs:** If there are fixed costs associated with opening a route or using a facility, the problem becomes a mixed-integer programming problem, which is more complex to solve. Standard transportation problem formulations assume linear costs.
*   **Capacitated Transportation Problems:** If there are upper limits on the capacity of routes or destinations, these are added as additional constraints: $x_{ij} \le u_{ij}$, where $u_{ij}$ is the capacity of the route from source $i$ to destination $j$.
*   **Multi-Commodity Transportation Problems:** If multiple types of goods are being transported, each commodity will have its own set of variables and potentially its own cost structure and constraints.

**Textbook References:**

*   **Hillier & Lieberman, Introduction to Operations Research (Tenth edition, 2017):** Discusses extensions like capacitated and multi-commodity transportation problems.
*   **Taha, Operations Research (Tenth edition, 2019):** Covers generalizations and variations of the transportation problem.

---

### 8. Practice Questions

**Question 1:**
A company manufactures products at three plants (P1, P2, P3) and supplies them to four warehouses (W1, W2, W3, W4). The production capacities and the demand at warehouses are given below, along with the per-unit transportation costs. Formulate the transportation problem as a linear programming problem.

| From \ To | W1 | W2 | W3 | W4 | Supply |
| :-------- | :- | :- | :- | :- | :----- |
| P1        | 4  | 3  | 5  | 2  | 80     |
| P2        | 2  | 5  | 4  | 3  | 60     |
| P3        | 3  | 3  | 2  | 5  | 40     |
| Demand    | 50 | 30 | 40 | 60 |        |

**Answer 1:**
*   **Balance Check:** Total Supply = $80 + 60 + 40 = 180$. Total Demand = $50 + 30 + 40 + 60 = 180$. The problem is **balanced**.
*   **Decision Variables:** Let $x_{ij}$ be the quantity shipped from plant $i$ to warehouse $j$. There are $3 \times 4 = 12$ variables ($x_{11}$ to $x_{34}$).
*   **Objective Function:**
    Minimize $Z = 4x_{11} + 3x_{12} + 5x_{13} + 2x_{14} + 2x_{21} + 5x_{22} + 4x_{23} + 3x_{24} + 3x_{31} + 3x_{32} + 2x_{33} + 5x_{34}$
*   **Constraints:**
    *   **Supply:**
        $x_{11} + x_{12} + x_{13} + x_{14} = 80$
        $x_{21} + x_{22} + x_{23} + x_{24} = 60$
        $x_{31} + x_{32} + x_{33} + x_{34} = 40$
    *   **Demand:**
        $x_{11} + x_{21} + x_{31} = 50$
        $x_{12} + x_{22} + x_{32} = 30$
        $x_{13} + x_{23} + x_{33} = 40$
        $x_{14} + x_{24} + x_{34} = 60$
    *   **Non-negativity:**
        $x_{ij} \ge 0$ for all $i \in \{1, 2, 3\}$ and $j \in \{1, 2, 3, 4\}$.

**Question 2:**
A company has two factories (F1, F2) and three distribution centers (DC1, DC2, DC3). The factory capacities and distribution center demands are given below, along with the per-unit transportation costs. Formulate the transportation problem as a linear programming problem.

| From \ To | DC1 | DC2 | DC3 | Supply |
| :-------- | :- | :- | :- | :----- |
| F1        | 10 | 5  | 8  | 50     |
| F2        | 6  | 7  | 9  | 30     |
| Demand    | 35 | 25 | 20 |        |

**Answer 2:**
*   **Balance Check:** Total Supply = $50 + 30 = 80$. Total Demand = $35 + 25 + 20 = 80$. The problem is **balanced**.
*   **Decision Variables:** Let $x_{ij}$ be the quantity shipped from factory $i$ to distribution center $j$. There are $2 \times 3 = 6$ variables ($x_{11}$ to $x_{23}$).
*   **Objective Function:**
    Minimize $Z = 10x_{11} + 5x_{12} + 8x_{13} + 6x_{21} + 7x_{22} + 9x_{23}$
*   **Constraints:**
    *   **Supply:**
        $x_{11} + x_{12} + x_{13} = 50$
        $x_{21} + x_{22} + x_{23} = 30$
    *   **Demand:**
        $x_{11} + x_{21} = 35$
        $x_{12} + x_{22} = 25$
        $x_{13} + x_{23} = 20$
    *   **Non-negativity:**
        $x_{ij} \ge 0$ for all $i \in \{1, 2\}$ and $j \in \{1, 2, 3\}$.

**Question 3:**
A firm has three production facilities and five retail outlets. The capacities and demands are provided below, along with the per-unit transportation costs. Formulate the problem as a linear programming problem.

| From \ To | R1 | R2 | R3 | R4 | R5 | Supply |
| :-------- | :- | :- | :- | :- | :- | :----- |
| P1        | 7  | 3  | 12 | 14 | 8  | 100    |
| P2        | 5  | 11 | 6  | 9  | 10 | 80     |
| P3        | 10 | 4  | 7  | 5  | 12 | 60     |
| Demand    | 50 | 40 | 30 | 70 | 50 |        |

**Answer 3:**
*   **Balance Check:** Total Supply = $100 + 80 + 60 = 240$. Total Demand = $50 + 40 + 30 + 70 + 50 = 240$. The problem is **balanced**.
*   **Decision Variables:** Let $x_{ij}$ be the quantity shipped from facility $i$ to retail outlet $j$. There are $3 \times 5 = 15$ variables ($x_{11}$ to $x_{35}$).
*   **Objective Function:**
    Minimize $Z = 7x_{11} + 3x_{12} + 12x_{13} + 14x_{14} + 8x_{15} + 5x_{21} + 11x_{22} + 6x_{23} + 9x_{24} + 10x_{25} + 10x_{31} + 4x_{32} + 7x_{33} + 5x_{34} + 12x_{35}$
*   **Constraints:**
    *   **Supply:**
        $x_{11} + x_{12} + x_{13} + x_{14} + x_{15} = 100$
        $x_{21} + x_{22} + x_{23} + x_{24} + x_{25} = 80$
        $x_{31} + x_{32} + x_{33} + x_{34} + x_{35} = 60$
    *   **Demand:**
        $x_{11} + x_{21} + x_{31} = 50$
        $x_{12} + x_{22} + x_{32} = 40$
        $x_{13} + x_{23} + x_{33} = 30$
        $x_{14} + x_{24} + x_{34} = 70$
        $x_{15} + x_{25} + x_{35} = 50$
    *   **Non-negativity:**
        $x_{ij} \ge 0$ for all $i \in \{1, 2, 3\}$ and $j \in \{1, 2, 3, 4, 5\}$.

**Question 4:**
Consider a transportation problem with 2 sources and 3 destinations. The supplies and demands are given below, along with the per-unit transportation costs. Formulate the problem.

| From \ To | D1 | D2 | D3 | Supply |
| :-------- | :- | :- | :- | :----- |
| S1        | 5  | 6  | 4  | 40     |
| S2        | 8  | 10 | 7  | 30     |
| Demand    | 25 | 20 | 35 |        |

**Answer 4:**
*   **Balance Check:** Total Supply = $40 + 30 = 70$. Total Demand = $25 + 20 + 35 = 80$. Total Demand $>$ Total Supply. The problem is **unbalanced**.
*   **Excess Demand:** $80 - 70 = 10$. Introduce a dummy source (S_dummy) with supply 10 and zero transportation costs.

    | From \ To | D1 | D2 | D3 | S_dummy | Supply |
    | :-------- | :- | :- | :- | :------ | :----- |
    | S1        | 5  | 6  | 4  | 0       | 40     |
    | S2        | 8  | 10 | 7  | 0       | 30     |
    | S_dummy   | 0  | 0  | 0  | 0       | 10     |
    | Demand    | 25 | 20 | 35 |         |        |

    Now, Total Supply = $40 + 30 + 10 = 80$. Total Demand = $25 + 20 + 35 = 80$. The problem is balanced.
*   **Decision Variables:** $x_{11}, x_{12}, x_{13}, x_{21}, x_{22}, x_{23}, x_{dummy,1}, x_{dummy,2}, x_{dummy,3}$.
*   **Objective Function:**
    Minimize $Z = 5x_{11} + 6x_{12} + 4x_{13} + 8x_{21} + 10x_{22} + 7x_{23} + 0x_{dummy,1} + 0x_{dummy,2} + 0x_{dummy,3}$
*   **Constraints:**
    *   **Supply:**
        $x_{11} + x_{12} + x_{13} = 40$
        $x_{21} + x_{22} + x_{23} = 30$
        $x_{dummy,1} + x_{dummy,2} + x_{dummy,3} = 10$
    *   **Demand:**
        $x_{11} + x_{21} + x_{dummy,1} = 25$
        $x_{12} + x_{22} + x_{dummy,2} = 20$
        $x_{13} + x_{23} + x_{dummy,3} = 35$
    *   **Non-negativity:** All variables $\ge 0$.

---

### 9. Important Points to Remember

*   **Balanced vs. Unbalanced:** Always check if the total supply equals the total demand. If not, introduce dummy sources or destinations accordingly.
*   **Dummy Source/Destination Costs:** Costs from/to dummy entities are typically zero unless there's a penalty for unmet demand or unused supply.
*   **Equality vs. Inequality:** For balanced problems, supply and demand constraints can be formulated as equalities. For unbalanced problems, once balanced, they are also typically equalities.
*   **Non-negativity:** All transportation quantities must be non-negative.
*   **Objective:** The primary objective is usually to minimize total transportation costs.
*   **Scope:** This topic focuses on the *formulation* of the problem. Solving methods (like the Northwest Corner Method, Least Cost Method, Vogel's Approximation Method, MODI method, etc.) are covered in subsequent topics.
*   **LP Structure:** The transportation problem is a special type of Linear Programming problem. It is a special case of a Minimum Cost Network Flow problem.

---

### 10. Alignment with Course Outcomes

*   **CO1: To formulate and solve linear programming and transportation problems (Knowledge Level: K4):** This topic directly addresses the *formulation* part of CO1, enabling engineers to translate real-world transportation scenarios into mathematical models (LP form). The understanding of the structure is crucial before moving to solution methods.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
