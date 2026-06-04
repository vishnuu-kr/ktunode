---
title: "transportation and assignment problems"
subject: "OPTIMIZATION TECHNIQUES AND OPERATIONAL RESEARCH FOR CIVIL ENGINEERS"
module: "Module 1: Linear Programming: Introduction and formulation of models"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810f9f"
status: "completed"
scrapedAt: "2026-05-20T18:50:07.766Z"
---
# OPTIMIZATION TECHNIQUES AND OPERATIONAL RESEARCH FOR CIVIL ENGINEERS

## Module 1: Linear Programming: Introduction and Formulation of Models

### Topic: Transportation and Assignment Problems

---

### 1. Introduction to Transportation and Assignment Problems

Transportation and Assignment problems are special cases of Linear Programming Problems (LPPs) that arise in various civil engineering applications. They deal with the efficient allocation of resources to meet demands, minimizing costs or maximizing profits.

#### 1.1 Key Concepts and Definitions

*   **Transportation Problem:** Aims to find the minimum cost of transporting goods from a set of supply points (sources) to a set of demand points (destinations), subject to supply and demand constraints.
*   **Assignment Problem:** A specific type of transportation problem where the number of sources equals the number of destinations, and each source can be assigned to exactly one destination, and vice-versa. The goal is to minimize the total cost of assignments.
*   **Source/Origin:** A location where goods or resources are available.
*   **Destination/Terminal:** A location where goods or resources are required.
*   **Supply:** The quantity of goods or resources available at a source.
*   **Demand:** The quantity of goods or resources required at a destination.
*   **Transportation Cost/Assignment Cost:** The cost incurred to transport one unit of goods from a source to a destination, or the cost of assigning a specific resource to a task.
*   **Balanced Problem:** A transportation or assignment problem where total supply equals total demand.
*   **Unbalanced Problem:** A transportation or assignment problem where total supply does not equal total demand. These can be balanced by introducing dummy sources or destinations.
*   **Decision Variables:** Variables representing the quantity of goods to be transported from a source to a destination ($x_{ij}$), or the assignment of a source to a destination (usually a binary variable).

#### 1.2 Relevance in Civil Engineering

These problems are crucial for optimizing resource allocation in civil engineering projects, including:

*   **Material Transportation:** Transporting aggregates, cement, steel, etc., from quarries/factories to construction sites.
*   **Equipment Allocation:** Assigning construction equipment (e.g., excavators, cranes) to different project tasks or sites.
*   **Labor Assignment:** Allocating skilled and unskilled labor to various construction activities.
*   **Subcontractor Selection:** Assigning specific tasks to subcontractors based on cost and capability.
*   **Facility Location:** Determining the optimal location of warehouses or depots to serve multiple demand points.
*   **Waste Disposal:** Transporting construction and demolition waste to designated disposal sites.

---

### 2. Transportation Problems

#### 2.1 Formulation of Transportation Problems

A typical transportation problem can be formulated as an LPP.

**General Setup:**

*   Let there be $m$ sources and $n$ destinations.
*   Let $a_i$ be the supply at source $i$ ($i = 1, 2, \dots, m$).
*   Let $b_j$ be the demand at destination $j$ ($j = 1, 2, \dots, n$).
*   Let $c_{ij}$ be the cost of transporting one unit of goods from source $i$ to destination $j$.
*   Let $x_{ij}$ be the quantity of goods to be transported from source $i$ to destination $j$.

**Objective Function:** Minimize the total transportation cost.
$$ \text{Minimize } Z = \sum_{i=1}^{m} \sum_{j=1}^{n} c_{ij} x_{ij} $$

**Constraints:**

1.  **Supply Constraints:** The total quantity shipped from each source cannot exceed its supply.
    $$ \sum_{j=1}^{n} x_{ij} \le a_i \quad \text{for } i = 1, 2, \dots, m $$
2.  **Demand Constraints:** The total quantity received at each destination must meet its demand.
    $$ \sum_{i=1}^{m} x_{ij} \ge b_j \quad \text{for } j = 1, 2, \dots, n $$
3.  **Non-negativity Constraints:** The quantity shipped cannot be negative.
    $$ x_{ij} \ge 0 \quad \text{for all } i, j $$

**Balanced Transportation Problem:** If $\sum_{i=1}^{m} a_i = \sum_{j=1}^{n} b_j$, the problem is balanced. In this case, the supply and demand constraints can be written as equalities:
$$ \sum_{j=1}^{n} x_{ij} = a_i \quad \text{for } i = 1, 2, \dots, m $$
$$ \sum_{i=1}^{m} x_{ij} = b_j \quad \text{for } j = 1, 2, \dots, n $$

**Unbalanced Transportation Problem:**

*   **If Total Supply < Total Demand ($\sum a_i < \sum b_j$):** Introduce a dummy source with a supply equal to the deficit ($\sum b_j - \sum a_i$). The transportation costs from the dummy source to all destinations are usually zero.
*   **If Total Supply > Total Demand ($\sum a_i > \sum b_j$):** Introduce a dummy destination with a demand equal to the surplus ($\sum a_i - \sum b_j$). The transportation costs from all sources to the dummy destination are usually zero.

#### 2.2 Example: Civil Engineering Material Transportation

**Problem:** A civil engineering company needs to transport cement from three factories (Source 1, 2, 3) to four construction sites (Destination 1, 2, 3, 4). The production capacities (supply) of the factories and the cement requirements (demand) at the sites, along with the per-unit transportation costs, are given below. Formulate the LPP for minimizing the total transportation cost.

| Factory | Site 1 ($c_{1j}$) | Site 2 ($c_{2j}$) | Site 3 ($c_{3j}$) | Site 4 ($c_{4j}$) | Supply ($a_i$) |
| :------ | :---------------- | :---------------- | :---------------- | :---------------- | :------------ |
| Factory 1 | 10                | 20                | 15                | 18                | 100           |
| Factory 2 | 12                | 15                | 11                | 17                | 150           |
| Factory 3 | 14                | 13                | 16                | 10                | 200           |
| Demand ($b_j$) | 80                | 120               | 100               | 150               |               |

**Formulation:**

Let $x_{ij}$ be the quantity of cement transported from Factory $i$ to Site $j$.

**Objective Function:**
$$ \text{Minimize } Z = 10x_{11} + 20x_{12} + 15x_{13} + 18x_{14} + 12x_{21} + 15x_{22} + 11x_{23} + 17x_{24} + 14x_{31} + 13x_{32} + 16x_{33} + 10x_{34} $$

**Constraints:**

*   **Supply Constraints:**
    *   Factory 1: $x_{11} + x_{12} + x_{13} + x_{14} \le 100$
    *   Factory 2: $x_{21} + x_{22} + x_{23} + x_{24} \le 150$
    *   Factory 3: $x_{31} + x_{32} + x_{33} + x_{34} \le 200$

*   **Demand Constraints:**
    *   Site 1: $x_{11} + x_{21} + x_{31} \ge 80$
    *   Site 2: $x_{12} + x_{22} + x_{32} \ge 120$
    *   Site 3: $x_{13} + x_{23} + x_{33} \ge 100$
    *   Site 4: $x_{14} + x_{24} + x_{34} \ge 150$

*   **Non-negativity Constraints:**
    $x_{ij} \ge 0$ for all $i \in \{1, 2, 3\}$ and $j \in \{1, 2, 3, 4\}$.

**Check for Balance:**
Total Supply = $100 + 150 + 200 = 450$
Total Demand = $80 + 120 + 100 + 150 = 450$
The problem is balanced.

---

### 3. Assignment Problems

#### 3.1 Formulation of Assignment Problems

An assignment problem is a special case of a transportation problem where the number of sources equals the number of destinations ($m=n$), and each source is assigned to exactly one destination, and each destination is assigned to exactly one source. This means the supply and demand at each point are 1.

**General Setup:**

*   Let there be $n$ workers (or machines, or tasks) and $n$ jobs (or projects, or locations).
*   Let $c_{ij}$ be the cost of assigning worker $i$ to job $j$.
*   Let $x_{ij}$ be a binary decision variable:
    *   $x_{ij} = 1$ if worker $i$ is assigned to job $j$.
    *   $x_{ij} = 0$ otherwise.

**Objective Function:** Minimize the total assignment cost.
$$ \text{Minimize } Z = \sum_{i=1}^{n} \sum_{j=1}^{n} c_{ij} x_{ij} $$

**Constraints:**

1.  **Each worker is assigned to exactly one job:**
    $$ \sum_{j=1}^{n} x_{ij} = 1 \quad \text{for } i = 1, 2, \dots, n $$
2.  **Each job is assigned to exactly one worker:**
    $$ \sum_{i=1}^{n} x_{ij} = 1 \quad \text{for } j = 1, 2, \dots, n $$
3.  **Binary Constraints:**
    $$ x_{ij} \in \{0, 1\} \quad \text{for all } i, j $$

#### 3.2 Example: Civil Engineering Equipment Assignment

**Problem:** A construction manager needs to assign four excavators (E1, E2, E3, E4) to four different digging tasks (T1, T2, T3, T4) at a site. The cost of assigning each excavator to each task is given in the table below. Formulate the LPP to minimize the total cost of assignments.

| Excavator | Task 1 ($c_{1j}$) | Task 2 ($c_{2j}$) | Task 3 ($c_{3j}$) | Task 4 ($c_{4j}$) |
| :-------- | :---------------- | :---------------- | :---------------- | :---------------- |
| E1        | 50                | 40                | 60                | 30                |
| E2        | 35                | 45                | 50                | 40                |
| E3        | 60                | 55                | 50                | 70                |
| E4        | 45                | 35                | 65                | 55                |

**Formulation:**

Let $x_{ij} = 1$ if Excavator $i$ is assigned to Task $j$, and 0 otherwise.

**Objective Function:**
$$ \text{Minimize } Z = 50x_{11} + 40x_{12} + 60x_{13} + 30x_{14} + 35x_{21} + 45x_{22} + 50x_{23} + 40x_{24} + 60x_{31} + 55x_{32} + 50x_{33} + 70x_{34} + 45x_{41} + 35x_{42} + 65x_{43} + 55x_{44} $$

**Constraints:**

*   **Each excavator is assigned to exactly one task:**
    *   E1: $x_{11} + x_{12} + x_{13} + x_{14} = 1$
    *   E2: $x_{21} + x_{22} + x_{23} + x_{24} = 1$
    *   E3: $x_{31} + x_{32} + x_{33} + x_{34} = 1$
    *   E4: $x_{41} + x_{42} + x_{43} + x_{44} = 1$

*   **Each task is assigned to exactly one excavator:**
    *   T1: $x_{11} + x_{21} + x_{31} + x_{41} = 1$
    *   T2: $x_{12} + x_{22} + x_{32} + x_{42} = 1$
    *   T3: $x_{13} + x_{23} + x_{33} + x_{43} = 1$
    *   T4: $x_{14} + x_{24} + x_{34} + x_{44} = 1$

*   **Binary Constraints:**
    $x_{ij} \in \{0, 1\}$ for all $i \in \{1, 2, 3, 4\}$ and $j \in \{1, 2, 3, 4\}$.

#### 3.3 Handling Unbalanced Assignment Problems

If the number of sources (e.g., workers) is not equal to the number of destinations (e.g., jobs), the problem needs to be balanced first.

*   **More jobs than workers:** Add dummy workers with zero cost for all jobs.
*   **More workers than jobs:** Add dummy jobs with zero cost for all workers.

---

### 4. Practice Questions and Exercises

**Question 1 (Transportation Problem Formulation):**
A contractor has two batching plants (P1, P2) and needs to supply concrete to three construction sites (S1, S2, S3). The supply capacities of the plants and the demand at the sites, along with the transportation costs per cubic meter, are given below. Formulate the Linear Programming Problem to minimize the total transportation cost.

| Plant | Site 1 ($c_{1j}$) | Site 2 ($c_{2j}$) | Site 3 ($c_{3j}$) | Supply ($a_i$) |
| :---- | :---------------- | :---------------- | :---------------- | :------------ |
| P1    | 12                | 10                | 15                | 80            |
| P2    | 15                | 14                | 13                | 100           |
| Demand ($b_j$) | 50                | 60                | 70                |               |

**Answer 1:**

Let $x_{ij}$ be the quantity of concrete transported from Plant $i$ to Site $j$.

**Objective Function:**
$$ \text{Minimize } Z = 12x_{11} + 10x_{12} + 15x_{13} + 15x_{21} + 14x_{22} + 13x_{23} $$

**Constraints:**

*   **Supply Constraints:**
    *   $x_{11} + x_{12} + x_{13} \le 80$
    *   $x_{21} + x_{22} + x_{23} \le 100$
*   **Demand Constraints:**
    *   $x_{11} + x_{21} \ge 50$
    *   $x_{12} + x_{22} \ge 60$
    *   $x_{13} + x_{23} \ge 70$
*   **Non-negativity Constraints:**
    $x_{ij} \ge 0$ for all $i \in \{1, 2\}$ and $j \in \{1, 2, 3\}$.

**Check for Balance:**
Total Supply = $80 + 100 = 180$
Total Demand = $50 + 60 + 70 = 180$
The problem is balanced.

---

**Question 2 (Assignment Problem Formulation):**
A civil engineering firm has four project managers (M1, M2, M3, M4) to be assigned to four new construction projects (P1, P2, P3, P4). The suitability score (lower is better, representing cost/efficiency) of assigning each manager to each project is given. Formulate the LPP to assign managers to projects to minimize the total suitability score.

| Manager | Project 1 ($c_{1j}$) | Project 2 ($c_{2j}$) | Project 3 ($c_{3j}$) | Project 4 ($c_{4j}$) |
| :------ | :------------------- | :------------------- | :------------------- | :------------------- |
| M1      | 25                   | 30                   | 35                   | 28                   |
| M2      | 32                   | 28                   | 30                   | 35                   |
| M3      | 20                   | 25                   | 22                   | 28                   |
| M4      | 35                   | 32                   | 38                   | 30                   |

**Answer 2:**

Let $x_{ij} = 1$ if Manager $i$ is assigned to Project $j$, and 0 otherwise.

**Objective Function:**
$$ \text{Minimize } Z = 25x_{11} + 30x_{12} + 35x_{13} + 28x_{14} + 32x_{21} + 28x_{22} + 30x_{23} + 35x_{24} + 20x_{31} + 25x_{32} + 22x_{33} + 28x_{34} + 35x_{41} + 32x_{42} + 38x_{43} + 30x_{44} $$

**Constraints:**

*   **Each manager is assigned to exactly one project:**
    *   M1: $x_{11} + x_{12} + x_{13} + x_{14} = 1$
    *   M2: $x_{21} + x_{22} + x_{23} + x_{24} = 1$
    *   M3: $x_{31} + x_{32} + x_{33} + x_{34} = 1$
    *   M4: $x_{41} + x_{42} + x_{43} + x_{44} = 1$
*   **Each project is assigned to exactly one manager:**
    *   P1: $x_{11} + x_{21} + x_{31} + x_{41} = 1$
    *   P2: $x_{12} + x_{22} + x_{32} + x_{42} = 1$
    *   P3: $x_{13} + x_{23} + x_{33} + x_{43} = 1$
    *   P4: $x_{14} + x_{24} + x_{34} + x_{44} = 1$
*   **Binary Constraints:**
    $x_{ij} \in \{0, 1\}$ for all $i \in \{1, 2, 3, 4\}$ and $j \in \{1, 2, 3, 4\}$.

---

### 5. Important Points to Remember

*   **Transportation problems** deal with shipping quantities from sources to destinations, aiming to minimize cost.
*   **Assignment problems** are a specific case of transportation problems with one-to-one assignments, aiming to minimize cost.
*   Always check if the transportation problem is **balanced** (total supply = total demand). If not, introduce **dummy sources or destinations** with zero costs.
*   Assignment problems are inherently balanced when the number of sources equals the number of destinations. If unbalanced, use **dummy sources/destinations** with zero costs.
*   The decision variables in a transportation problem ($x_{ij}$) represent quantities and are non-negative.
*   The decision variables in an assignment problem ($x_{ij}$) are binary (0 or 1), indicating whether an assignment is made or not.
*   Properly formulating these problems as LPPs is the first crucial step towards solving them using optimization techniques.

---
