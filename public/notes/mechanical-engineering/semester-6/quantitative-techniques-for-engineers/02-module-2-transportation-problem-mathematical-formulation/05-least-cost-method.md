---
title: "Least Cost method"
subject: "QUANTITATIVE TECHNIQUES FOR ENGINEERS"
module: "Module 2: Transportation Problem: Mathematical Formulation"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463a6d"
status: "completed"
scrapedAt: "2026-05-20T18:07:28.811Z"
---
# QUANTITATIVE TECHNIQUES FOR ENGINEERS

## Module 2: Transportation Problem: Mathematical Formulation

### Topic: Least Cost Method

---

### 1. Introduction to Transportation Problems

**Definition:** A transportation problem is a special type of linear programming problem that deals with finding the most economic way of shipping goods from one or more sources (e.g., factories, warehouses) to one or more destinations (e.g., stores, customers). The objective is to minimize the total transportation cost while satisfying supply at each source and demand at each destination.

**Key Concepts:**

*   **Sources:** Locations where goods are produced or stored (e.g., plants, farms).
*   **Destinations:** Locations where goods are required or consumed (e.g., markets, retail outlets).
*   **Supply:** The total quantity of goods available at each source.
*   **Demand:** The total quantity of goods required at each destination.
*   **Unit Transportation Cost:** The cost of transporting one unit of a commodity from a specific source to a specific destination.
*   **Allocation:** The quantity of goods transported from a source to a destination.
*   **Balanced Transportation Problem:** A problem where the total supply equals the total demand. If unbalanced, it needs to be balanced by introducing a dummy source or destination.

**Mathematical Formulation of a Transportation Problem (General):**

Let:
*   $m$ be the number of sources.
*   $n$ be the number of destinations.
*   $x_{ij}$ be the quantity of goods shipped from source $i$ to destination $j$.
*   $c_{ij}$ be the unit transportation cost from source $i$ to destination $j$.
*   $a_i$ be the supply at source $i$ ($\sum_{i=1}^{m} a_i$).
*   $b_j$ be the demand at destination $j$ ($\sum_{j=1}^{n} b_j$).

**Objective Function:** Minimize total transportation cost:
$$ Z = \sum_{i=1}^{m} \sum_{j=1}^{n} c_{ij} x_{ij} $$

**Constraints:**

*   **Supply Constraints:** The total quantity shipped from each source cannot exceed its supply.
    $$ \sum_{j=1}^{n} x_{ij} \le a_i \quad \text{for } i = 1, 2, \ldots, m $$
*   **Demand Constraints:** The total quantity shipped to each destination must meet its demand.
    $$ \sum_{i=1}^{m} x_{ij} \ge b_j \quad \text{for } j = 1, 2, \ldots, n $$
*   **Non-negativity Constraints:** The quantity shipped must be non-negative.
    $$ x_{ij} \ge 0 \quad \text{for all } i, j $$

**Balanced Problem:** If $\sum_{i=1}^{m} a_i = \sum_{j=1}^{n} b_j$, the problem is balanced. The supply constraints become equalities: $\sum_{j=1}^{n} x_{ij} = a_i$.

---

### 2. Initial Basic Feasible Solution Methods

To solve a transportation problem, we first need to find an **initial basic feasible solution (IBFS)**. This is a set of allocations that satisfy the supply and demand constraints without violating the non-negativity condition. The IBFS must have $m+n-1$ non-zero allocations for a balanced problem with $m$ sources and $n$ destinations to be non-degenerate.

Common methods for finding an IBFS include:

*   North-West Corner Method
*   Least Cost Method
*   Vogel's Approximation Method (VAM)

This topic focuses on the **Least Cost Method**.

---

### 3. Least Cost Method

**Objective:** To obtain a feasible solution with a lower total cost compared to the North-West Corner Method by prioritizing the cheapest routes.

**Procedure:**

1.  **Set up the Transportation Table:** Represent the problem in a tabular form with sources, destinations, supplies, demands, and unit transportation costs.

2.  **Identify the Cheapest Route:** Find the cell with the minimum unit transportation cost ($c_{ij}$) in the entire table.

3.  **Allocate:** Allocate as much as possible to this cheapest route. The allocation is the minimum of the supply at the corresponding source ($a_i$) and the demand at the corresponding destination ($b_j$). Let this allocation be $x_{ij} = \min(a_i, b_j)$.

4.  **Update Supply and Demand:**
    *   If $a_i \le b_j$: The supply at source $i$ is exhausted. Cross out row $i$ (or mark it as satisfied). Reduce the demand at destination $j$ by the allocated amount: $b_j' = b_j - x_{ij}$.
    *   If $a_i > b_j$: The demand at destination $j$ is met. Cross out column $j$ (or mark it as satisfied). Reduce the supply at source $i$ by the allocated amount: $a_i' = a_i - x_{ij}$.
    *   If $a_i = b_j$: Both the supply at source $i$ and the demand at destination $j$ are met simultaneously. Cross out both row $i$ and column $j$.

5.  **Repeat:** Select the next cheapest available route from the remaining cells (in rows and columns that have not been crossed out) and repeat steps 3 and 4 until all supplies and demands are satisfied.

6.  **Handling Ties:** If there are multiple cells with the same minimum cost, choose any one of them to make the allocation. The choice might affect the IBFS, but the optimality check later will handle it.

7.  **Degeneracy:** If, at the end of the allocation process, the number of non-zero allocations is less than $m+n-1$, the solution is degenerate. To resolve degeneracy, introduce allocations of zero to independent cells until the number of allocations becomes $m+n-1$. An independent cell is one that can be selected without making a row or column demand/supply zero if it wasn't already.

**Important Note on Least Cost Method:** It's important to re-evaluate the *entire* table for the next cheapest cost after each allocation and update, not just within the remaining rows/columns.

**Alignment with Course Outcomes:**

*   **CO1 (K4):** This method is a direct application of formulating and solving transportation problems, a key aspect of linear programming. It helps in finding an initial feasible solution, which is a prerequisite for optimization methods like the Stepping Stone Method or MODI method.

---

### 4. Example: Least Cost Method

**Problem Statement:** A company has three factories (Sources S1, S2, S3) and four warehouses (Destinations D1, D2, D3, D4). The monthly production capacities and the monthly warehouse demands are given below, along with the unit transportation costs. Find an initial basic feasible solution using the Least Cost Method.

| From \ To | D1 | D2 | D3 | D4 | Supply |
| :-------- | :- | :- | :- | :- | :----- |
| **S1**    | 10 | 4  | 7  | 12 | 20     |
| **S2**    | 6  | 8  | 3  | 10 | 30     |
| **S3**    | 7  | 11 | 5  | 9  | 25     |
| **Demand**| 15 | 12 | 18 | 30 | **75** |

**Solution:**

**Step 1: Check for Balance:**
Total Supply = 20 + 30 + 25 = 75
Total Demand = 15 + 12 + 18 + 30 = 75
The problem is balanced. We need $3+4-1 = 6$ allocations.

**Step 2: Find the Cheapest Route and Allocate:**

*   The minimum cost is 3 (between S2 and D3).
    *   Supply at S2 = 30, Demand at D3 = 18.
    *   Allocate $x_{23} = \min(30, 18) = 18$.
    *   D3 demand is met. Cross out D3.
    *   Update S2 supply: $30 - 18 = 12$.

| From \ To | D1 | D2 | D3 (Met) | D4 | Supply |
| :-------- | :- | :- | :------- | :- | :----- |
| **S1**    | 10 | 4  | 7        | 12 | 20     |
| **S2**    | 6  | 8  | **18**   | 10 | **12** |
| **S3**    | 7  | 11 | 5        | 9  | 25     |
| **Demand**| 15 | 12 | 0        | 30 | **57** |

**Step 3: Find the Next Cheapest Route and Allocate:**

*   The remaining minimum costs are 4 (S1-D2), 5 (S3-D3), 6 (S2-D1), 7 (S1-D3, S3-D1), 8 (S2-D2), etc.
*   The next cheapest is 4 (S1-D2).
    *   Supply at S1 = 20, Demand at D2 = 12.
    *   Allocate $x_{12} = \min(20, 12) = 12$.
    *   D2 demand is met. Cross out D2.
    *   Update S1 supply: $20 - 12 = 8$.

| From \ To | D1 | D2 (Met) | D3 (Met) | D4 | Supply |
| :-------- | :- | :------- | :------- | :- | :----- |
| **S1**    | 10 | **12**   | 7        | 12 | **8**  |
| **S2**    | 6  | 8        | **18**   | 10 | 12     |
| **S3**    | 7  | 11       | 5        | 9  | 25     |
| **Demand**| 15 | 0        | 0        | 30 | **30** |

**Step 4: Find the Next Cheapest Route and Allocate:**

*   The remaining minimum costs are 5 (S3-D3), 6 (S2-D1), 7 (S1-D3, S3-D1), 8 (S2-D2), 9 (S3-D4), 10 (S1-D1, S2-D4), etc.
*   The next cheapest is 5 (S3-D3).
    *   Supply at S3 = 25, Demand at D3 = 0 (already met). This cell is unavailable.
*   The next cheapest available is 6 (S2-D1).
    *   Supply at S2 = 12, Demand at D1 = 15.
    *   Allocate $x_{21} = \min(12, 15) = 12$.
    *   S2 supply is exhausted. Cross out S2.
    *   Update D1 demand: $15 - 12 = 3$.

| From \ To | D1 | D2 (Met) | D3 (Met) | D4 | Supply |
| :-------- | :- | :------- | :------- | :- | :----- |
| **S1**    | 10 | **12**   | 7        | 12 | 8      |
| **S2 (Exh)**| **12** | 8        | **18**   | 10 | 0      |
| **S3**    | 7  | 11       | 5        | 9  | 25     |
| **Demand**| **3**  | 0        | 0        | 30 | **30** |

**Step 5: Find the Next Cheapest Route and Allocate:**

*   The remaining minimum costs are 7 (S1-D3), 7 (S3-D1), 9 (S3-D4), 10 (S1-D1, S1-D4), 11 (S3-D2), etc.
*   The next cheapest is 7 (S1-D3).
    *   Supply at S1 = 8, Demand at D3 = 0 (already met). This cell is unavailable.
*   The next cheapest is 7 (S3-D1).
    *   Supply at S3 = 25, Demand at D1 = 3.
    *   Allocate $x_{31} = \min(25, 3) = 3$.
    *   D1 demand is met. Cross out D1.
    *   Update S3 supply: $25 - 3 = 22$.

| From \ To | D1 (Met) | D2 (Met) | D3 (Met) | D4 | Supply |
| :-------- | :------- | :------- | :------- | :- | :----- |
| **S1**    | 10       | **12**   | 7        | 12 | 8      |
| **S2 (Exh)**| **12**   | 8        | **18**   | 10 | 0      |
| **S3**    | **3**    | 11       | 5        | 9  | **22** |
| **Demand**| 0        | 0        | 0        | 30 | **30** |

**Step 6: Find the Next Cheapest Route and Allocate:**

*   The remaining minimum costs are 9 (S3-D4), 10 (S1-D1, S1-D4), 11 (S3-D2).
*   The next cheapest is 9 (S3-D4).
    *   Supply at S3 = 22, Demand at D4 = 30.
    *   Allocate $x_{34} = \min(22, 30) = 22$.
    *   S3 supply is exhausted. Cross out S3.
    *   Update D4 demand: $30 - 22 = 8$.

| From \ To | D1 (Met) | D2 (Met) | D3 (Met) | D4 | Supply |
| :-------- | :------- | :------- | :------- | :- | :----- |
| **S1**    | 10       | **12**   | 7        | 12 | **8**  |
| **S2 (Exh)**| **12**   | 8        | **18**   | 10 | 0      |
| **S3 (Exh)**| **3**    | 11       | 5        | **22** | 0      |
| **Demand**| 0        | 0        | 0        | **8**  | **8**  |

**Step 7: Find the Next Cheapest Route and Allocate:**

*   Only one route remains: S1-D4.
    *   Supply at S1 = 8, Demand at D4 = 8.
    *   Allocate $x_{14} = \min(8, 8) = 8$.
    *   S1 supply is exhausted. Cross out S1.
    *   D4 demand is met. Cross out D4.

| From \ To | D1 (Met) | D2 (Met) | D3 (Met) | D4 (Met) | Supply |
| :-------- | :------- | :------- | :------- | :------- | :----- |
| **S1 (Exh)**| 10       | **12**   | 7        | **8**    | 0      |
| **S2 (Exh)**| **12**   | 8        | **18**   | 10       | 0      |
| **S3 (Exh)**| **3**    | 11       | 5        | **22**   | 0      |
| **Demand**| 0        | 0        | 0        | 0        | **0**  |

**Initial Basic Feasible Solution (IBFS) using Least Cost Method:**

*   $x_{12} = 12$
*   $x_{14} = 8$
*   $x_{21} = 12$
*   $x_{23} = 18$
*   $x_{31} = 3$
*   $x_{34} = 22$

**Number of allocations:** 6.
This matches $m+n-1 = 3+4-1 = 6$. The solution is non-degenerate.

**Calculate the Total Cost:**
Total Cost = $(12 \times 4) + (8 \times 12) + (12 \times 6) + (18 \times 3) + (3 \times 7) + (22 \times 9)$
Total Cost = $48 + 96 + 72 + 54 + 21 + 198$
Total Cost = **$489**

**References:**
*   Paneerselvam R., Operations Research (PHI, Third edition, 2023) - Chapter on Transportation Problems.
*   Taha, Operations Research (Pearson, Tenth edition, 2019) - Chapter on Transportation Problems.
*   Hillier & Lieberman, Introduction to Operations Research (McGraw Hill, Tenth edition, 2017) - Chapter on Transportation Problems.

---

### 5. Important Points to Remember

*   **Balance the Problem:** Always ensure total supply equals total demand before applying any method.
*   **Least Cost Method Prioritization:** At each step, look for the absolute minimum cost in the *entire* available cell set, not just within remaining rows or columns.
*   **Satisfying Constraints:** Ensure allocations do not exceed the supply of a source or the demand of a destination.
*   **Crossing Out:** When a supply or demand is met, cross out the corresponding row or column to indicate it's no longer available.
*   **Degeneracy:** Be aware of degeneracy and how to resolve it by adding zero allocations to independent cells. A degenerate solution can hinder the optimality check.
*   **IBFS is not necessarily optimal:** The Least Cost Method, like the North-West Corner Method, provides an initial feasible solution. This solution may not be the most optimal one. Further steps (like the Stepping Stone Method or MODI Method) are needed to check for optimality and improve the solution if necessary.

---

### 6. Practice Questions

**Question 1:**
A company has three plants (P1, P2, P3) and five warehouses (W1, W2, W3, W4, W5). The production capacities and warehouse demands, along with unit shipping costs, are given below. Find an initial basic feasible solution using the Least Cost Method.

| From \ To | W1 | W2 | W3 | W4 | W5 | Supply |
| :-------- | :- | :- | :- | :- | :- | :----- |
| **P1**    | 15 | 10 | 12 | 20 | 18 | 100    |
| **P2**    | 18 | 14 | 16 | 12 | 13 | 150    |
| **P3**    | 12 | 19 | 10 | 17 | 14 | 80     |
| **Demand**| 70 | 50 | 60 | 40 | 30 | **250**|

**Question 2:**
Solve the following transportation problem using the Least Cost Method. Calculate the total transportation cost.

| From \ To | D1 | D2 | D3 | D4 | Supply |
| :-------- | :- | :- | :- | :- | :----- |
| **S1**    | 2  | 3  | 1  | 3  | 10     |
| **S2**    | 3  | 2  | 2  | 4  | 20     |
| **S3**    | 4  | 3  | 4  | 2  | 15     |
| **Demand**| 15 | 10 | 12 | 8  | **45** |

---

### 7. Answers to Practice Questions

**Answer to Question 1:**

First, check for balance: Total Supply = 100 + 150 + 80 = 330. Total Demand = 70 + 50 + 60 + 40 + 30 = 250.
The problem is unbalanced. Total supply (330) > Total demand (250). We need to introduce a dummy warehouse (D6) with a demand of $330 - 250 = 80$. The transportation costs to the dummy warehouse are zero.

**Balanced Problem:**

| From \ To | W1 | W2 | W3 | W4 | W5 | D6 (Dummy) | Supply |
| :-------- | :- | :- | :- | :- | :- | :--------- | :----- |
| **P1**    | 15 | 10 | 12 | 20 | 18 | 0          | 100    |
| **P2**    | 18 | 14 | 16 | 12 | 13 | 0          | 150    |
| **P3**    | 12 | 19 | 10 | 17 | 14 | 0          | 80     |
| **Demand**| 70 | 50 | 60 | 40 | 30 | 80         | **330**|

We need $5+1+3-1 = 7$ allocations. (Note: The question implied 5 warehouses, but to balance with 3 sources, we need 7 cells for $3+6-1$ allocations if considering the dummy. If we consider the original 5 destinations, we need $3+5-1=7$ allocations. However, the unbalanced nature might mean a different number of allocations are needed.) Let's stick to the 3 sources and 6 destinations now.

**Least Cost Allocation Steps:**

1.  **Cheapest:** 0 (multiple dummy cells). Let's pick P1-D6.
    *   $x_{16} = \min(100, 80) = 80$. P1 supply left: $100-80=20$. D6 demand met.

2.  **Next Cheapest (excluding 0s or fulfilled):** 10 (P1-W2).
    *   $x_{12} = \min(20, 50) = 20$. P1 supply exhausted.

3.  **Next Cheapest:** 10 (P3-W3).
    *   $x_{33} = \min(80, 60) = 60$. W3 demand left: $60-60=0$. W3 met.

4.  **Next Cheapest:** 12 (P2-W4) or 12 (P3-W1). Let's pick P2-W4.
    *   $x_{24} = \min(150, 40) = 40$. W4 demand met. P2 supply left: $150-40=110$.

5.  **Next Cheapest:** 12 (P3-W1).
    *   $x_{31} = \min(80, 70) = 70$. W1 demand met. P3 supply left: $80-70=10$.

6.  **Next Cheapest:** 13 (P2-W5).
    *   $x_{25} = \min(110, 30) = 30$. W5 demand met. P2 supply left: $110-30=80$.

7.  **Remaining:** We have P2 with 80 supply and W2 with 30 demand (50-20).
    *   $x_{22} = \min(80, 30) = 30$. W2 demand met. P2 supply left: $80-30=50$.

This does not seem to complete the balance. Let's restart with a clear tabular representation of available costs.

**Corrected Least Cost Allocation Steps:**

The available costs are:
0s (P1-D6, P2-D6, P3-D6)
10 (P1-W2)
10 (P3-W3)
12 (P1-W3)
12 (P2-W4)
12 (P3-W1)
...and so on.

Let's use the cheapest available *non-zero* cost first, and then consider zeros if needed. The lowest non-zero cost is 10. We have a tie.

**Scenario 1: Prioritize P1-W2 (Cost 10)**
*   $x_{12} = \min(100, 50) = 50$. P1 supply left: 50. W2 demand met.
*   Next cheapest non-zero: 10 (P3-W3).
    *   $x_{33} = \min(80, 60) = 60$. W3 demand met. P3 supply left: 20.
*   Next cheapest non-zero: 12 (P1-W3 - W3 met, so this cell is out). Next is 12 (P2-W4).
    *   $x_{24} = \min(150, 40) = 40$. W4 demand met. P2 supply left: 110.
*   Next cheapest non-zero: 12 (P3-W1).
    *   $x_{31} = \min(20, 70) = 20$. P3 supply exhausted. W1 demand left: 50.
*   Next cheapest non-zero: 13 (P2-W5).
    *   $x_{25} = \min(110, 30) = 30$. W5 demand met. P2 supply left: 80.
*   Remaining supply at P1 = 50. Remaining demand at W1 = 50.
    *   $x_{11} = \min(50, 50) = 50$. P1 supply exhausted. W1 demand met.
*   Now, P2 has 80 supply left. All destinations W1-W5 are met. Dummy demand D6 = 80.
    *   $x_{26} = \min(80, 80) = 80$. P2 supply exhausted. D6 demand met.

**IBFS (Scenario 1):**
$x_{12}=50$, $x_{11}=50$ (Total P1=100)
$x_{24}=40$, $x_{25}=30$, $x_{26}=80$ (Total P2=150)
$x_{33}=60$, $x_{31}=20$ (Total P3=80)
W1=70 (50+20), W2=50, W3=60, W4=40, W5=30, D6=80.
Number of allocations: 7. This is $3+6-1=8$ if we consider dummy. Wait, the problem is asking for an IBFS for the original problem, *after* balancing it. We now have 3 sources and 6 destinations. So we need $3+6-1=8$ allocations.

Let's reconsider the allocation. We have 7 allocations so far: $x_{12}, x_{33}, x_{24}, x_{31}, x_{25}, x_{11}, x_{26}$. We are missing one.
There might be a degeneracy issue, or the initial choice of 0s matters.

Let's try the lowest available costs systematically, including zeros.
Costs in increasing order: 0, 0, 0, 10, 10, 12, 12, 12, 12, 14, 14, 14, 15, 16, 17, 17, 18, 18, 19, 20.

1.  Allocate to cheapest available cells:
    *   $x_{16} = \min(100, 80) = 80$. (P1 supply: 20. D6 met).
    *   $x_{26} = \min(150, 0)$ - cannot allocate here as D6 is met.
    *   $x_{36} = \min(80, 0)$ - cannot allocate here as D6 is met.
    *   Next cheapest 0: None.

2.  Next cheapest: 10 (P1-W2)
    *   $x_{12} = \min(20, 50) = 20$. (P1 supply: 0. W2 demand: 30).

3.  Next cheapest: 10 (P3-W3)
    *   $x_{33} = \min(80, 60) = 60$. (P3 supply: 20. W3 demand: 0).

4.  Next cheapest: 12 (P1-W3 - W3 met, unavailable). Next is 12 (P2-W4).
    *   $x_{24} = \min(150, 40) = 40$. (P2 supply: 110. W4 demand: 0).

5.  Next cheapest: 12 (P3-W1).
    *   $x_{31} = \min(20, 70) = 20$. (P3 supply: 0. W1 demand: 50).

6.  Next cheapest: 13 (P2-W5).
    *   $x_{25} = \min(110, 30) = 30$. (P2 supply: 80. W5 demand: 0).

7.  Remaining: P1 is exhausted, W2 has 30 demand, P2 has 80 supply, W1 has 50 demand.
    *   Lowest cost for remaining is P1-W1 (cost 15), but P1 is exhausted.
    *   Lowest cost for remaining is P2-W1 (cost 18).
        *   $x_{21} = \min(80, 50) = 50$. (P2 supply: 30. W1 demand: 0).
    *   Lowest cost for remaining is P2-W2 (cost 14).
        *   $x_{22} = \min(30, 30) = 30$. (P2 supply: 0. W2 demand: 0).

**IBFS (Scenario 2):**
$x_{16}=80$, $x_{12}=20$ (Total P1=100)
$x_{24}=40$, $x_{25}=30$, $x_{21}=50$, $x_{22}=30$ (Total P2=150)
$x_{33}=60$, $x_{31}=20$ (Total P3=80)
W1=70 (20+50), W2=50 (20+30), W3=60, W4=40, W5=30, D6=80.
Number of allocations: 8. This is $3+6-1=8$. This is a valid IBFS.

Total Cost = $(80 \times 0) + (20 \times 10) + (40 \times 12) + (30 \times 13) + (50 \times 18) + (30 \times 14) + (60 \times 10) + (20 \times 12)$
Total Cost = $0 + 200 + 480 + 390 + 900 + 420 + 600 + 240$
Total Cost = **$3430**

*Note: The choice of cells with equal minimum costs can lead to different IBFSs and initial total costs. The method itself is designed to find a "good" starting point.*

---

**Answer to Question 2:**

| From \ To | D1 | D2 | D3 | D4 | Supply |
| :-------- | :- | :- | :- | :- | :----- |
| **S1**    | 2  | 3  | 1  | 3  | 10     |
| **S2**    | 3  | 2  | 2  | 4  | 20     |
| **S3**    | 4  | 3  | 4  | 2  | 15     |
| **Demand**| 15 | 10 | 12 | 8  | **45** |

Balanced problem: Total Supply = 10 + 20 + 15 = 45. Total Demand = 15 + 10 + 12 + 8 = 45.
Need $3+4-1 = 6$ allocations.

**Least Cost Allocation Steps:**

1.  **Cheapest:** 1 (S1-D3).
    *   $x_{13} = \min(10, 12) = 10$. S1 supply exhausted. D3 demand left: 2.

| From \ To | D1 | D2 | D3 | D4 | Supply |
| :-------- | :- | :- | :- | :- | :----- |
| **S1 (Exh)**| 2  | 3  | **10**| 3  | 0      |
| **S2**    | 3  | 2  | 2  | 4  | 20     |
| **S3**    | 4  | 3  | 4  | 2  | 15     |
| **Demand**| 15 | 10 | **2** | 8  | **35** |

2.  **Next Cheapest:** 2 (S1-D1 - S1 exhausted, unavailable). Next is 2 (S2-D2) or 2 (S2-D3 - D3 demand is only 2).
    *   Allocate to S2-D3: $x_{23} = \min(20, 2) = 2$. D3 demand met. S2 supply left: 18.

| From \ To | D1 | D2 | D3 (Met) | D4 | Supply |
| :-------- | :- | :- | :------- | :- | :----- |
| **S1 (Exh)**| 2  | 3  | **10**   | 3  | 0      |
| **S2**    | 3  | 2  | **2**    | 4  | **18** |
| **S3**    | 4  | 3  | 4        | 2  | 15     |
| **Demand**| 15 | 10 | 0        | 8  | **33** |

3.  **Next Cheapest:** 2 (S2-D2).
    *   $x_{22} = \min(18, 10) = 10$. D2 demand met. S2 supply left: 8.

| From \ To | D1 | D2 (Met) | D3 (Met) | D4 | Supply |
| :-------- | :- | :------- | :------- | :- | :----- |
| **S1 (Exh)**| 2  | 3        | **10**   | 3  | 0      |
| **S2**    | 3  | **10**   | **2**    | 4  | **8**  |
| **S3**    | 4  | 3        | 4        | 2  | 15     |
| **Demand**| 15 | 0        | 0        | 8  | **23** |

4.  **Next Cheapest:** 2 (S3-D4).
    *   $x_{34} = \min(15, 8) = 8$. D4 demand met. S3 supply left: 7.

| From \ To | D1 | D2 (Met) | D3 (Met) | D4 (Met) | Supply |
| :-------- | :- | :------- | :------- | :------- | :----- |
| **S1 (Exh)**| 2  | 3        | **10**   | 3        | 0      |
| **S2**    | 3  | **10**   | **2**    | 4        | 8      |
| **S3**    | 4  | 3        | 4        | **8**    | **7**  |
| **Demand**| 15 | 0        | 0        | 0        | **15** |

5.  **Next Cheapest:** 3 (S1-D2 - S1 exhausted, unavailable). Next is 3 (S2-D1) or 3 (S3-D2).
    *   Allocate to S2-D1: $x_{21} = \min(8, 15) = 8$. S2 supply exhausted. D1 demand left: 7.

| From \ To | D1 | D2 (Met) | D3 (Met) | D4 (Met) | Supply |
| :-------- | :- | :------- | :------- | :------- | :----- |
| **S1 (Exh)**| 2  | 3        | **10**   | 3        | 0      |
| **S2 (Exh)**| **8**  | **10**   | **2**    | 4        | 0      |
| **S3**    | 4  | 3        | 4        | **8**    | **7**  |
| **Demand**| **7**  | 0        | 0        | 0        | **7**  |

6.  **Next Cheapest:** 3 (S3-D2).
    *   $x_{32} = \min(7, 3) = 3$. D2 demand met (already met, conceptually). S3 supply left: 4.
    *   Wait, D2 demand is 0. This means we should have already exhausted it. Let's go back to step 3 where we allocated to S2-D2. D2 demand was 10, we allocated 10. So D2 is met.

Let's retrace carefully.

**Revised Allocation Steps:**

1.  **$x_{13} = 10$** (S1-D3). S1 exhausted. D3 demand left: 2.
2.  **$x_{23} = 2$** (S2-D3). D3 demand met. S2 supply left: 18.
3.  **$x_{22} = 10$** (S2-D2). D2 demand met. S2 supply left: 8.
4.  **$x_{34} = 8$** (S3-D4). D4 demand met. S3 supply left: 7.
5.  **$x_{21} = 8$** (S2-D1). S2 exhausted. D1 demand left: 7.
6.  **$x_{31} = 7$** (S3-D1). D1 demand met. S3 supply left: 0.

**IBFS:**
*   $x_{13} = 10$
*   $x_{21} = 8$
*   $x_{22} = 10$
*   $x_{23} = 2$
*   $x_{31} = 7$
*   $x_{34} = 8$

Number of allocations: 6. This is $3+4-1=6$. Non-degenerate.

**Check allocations against demands/supplies:**
S1: 10 (met)
S2: 8 + 10 + 2 = 20 (met)
S3: 7 + 8 = 15 (met)

D1: 8 + 7 = 15 (met)
D2: 10 (met)
D3: 10 + 2 = 12 (met)
D4: 8 (met)

**Total Cost:**
Total Cost = $(10 \times 1) + (8 \times 3) + (10 \times 2) + (2 \times 2) + (7 \times 4) + (8 \times 2)$
Total Cost = $10 + 24 + 20 + 4 + 28 + 16$
Total Cost = **$102**

---

This concludes the study notes for the Least Cost Method. Remember that this is only the first step in solving a transportation problem; the resulting solution needs to be checked for optimality using methods like the Stepping Stone Method or the MODI method.

---

**End of Notes**

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=fNk_zzaMoEs) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |
