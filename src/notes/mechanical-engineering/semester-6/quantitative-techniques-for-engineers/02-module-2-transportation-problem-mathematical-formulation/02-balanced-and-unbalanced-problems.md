---
title: "Balanced and unbalanced problems"
subject: "QUANTITATIVE TECHNIQUES FOR ENGINEERS"
module: "Module 2: Transportation Problem: Mathematical Formulation"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463a6a"
status: "completed"
scrapedAt: "2026-05-20T18:07:26.617Z"
---
# QUANTITATIVE TECHNIQUES FOR ENGINEERS - Module 2: Transportation Problem: Mathematical Formulation

## Topic: Balanced and Unbalanced Transportation Problems

### 1. Introduction to the Transportation Problem

The Transportation Problem is a special type of linear programming problem that deals with the transportation of goods from a set of sources (e.g., factories, warehouses) to a set of destinations (e.g., retail stores, customers). The objective is typically to minimize the total transportation cost while satisfying the supply at each source and the demand at each destination.

**Key Concepts:**

*   **Sources:** Locations where goods are available (e.g., factories).
*   **Destinations:** Locations where goods are required (e.g., customers).
*   **Supply (a_i):** The quantity of goods available at source *i*.
*   **Demand (b_j):** The quantity of goods required at destination *j*.
*   **Cost (c_ij):** The cost of transporting one unit of goods from source *i* to destination *j*.
*   **Decision Variables (x_ij):** The quantity of goods to be transported from source *i* to destination *j*.

**Mathematical Formulation (General):**

Minimize: $Z = \sum_{i=1}^{m} \sum_{j=1}^{n} c_{ij} x_{ij}$

Subject to:

*   **Supply Constraints:** $\sum_{j=1}^{n} x_{ij} \le a_i$ for each source $i = 1, 2, ..., m$ (The total quantity shipped from source *i* cannot exceed its supply).
*   **Demand Constraints:** $\sum_{i=1}^{m} x_{ij} \ge b_j$ for each destination $j = 1, 2, ..., n$ (The total quantity shipped to destination *j* must meet its demand).
*   **Non-negativity:** $x_{ij} \ge 0$ for all $i, j$.

**Reference:** This general formulation is consistent with principles discussed in **Paneerselvam R., Operations Research, Third edition, 2023**, and **Taha, Operations Research, Tenth edition, 2019**, particularly in chapters covering linear programming and its special cases.

### 2. Balanced Transportation Problem

A transportation problem is considered **balanced** if the total supply from all sources is exactly equal to the total demand at all destinations.

**Condition for a Balanced Problem:**
$\sum_{i=1}^{m} a_i = \sum_{j=1}^{n} b_j$

In a balanced problem, the inequality constraints in the general formulation can be converted to equality constraints:

Minimize: $Z = \sum_{i=1}^{m} \sum_{j=1}^{n} c_{ij} x_{ij}$

Subject to:

*   **Supply Constraints:** $\sum_{j=1}^{n} x_{ij} = a_i$ for each source $i = 1, 2, ..., m$
*   **Demand Constraints:** $\sum_{i=1}^{m} x_{ij} = b_j$ for each destination $j = 1, 2, ..., n$
*   **Non-negativity:** $x_{ij} \ge 0$ for all $i, j$.

**Why is balancing important?**
Balanced problems simplify the mathematical formulation and are the standard form for applying many solution methods (e.g., North-West Corner Method, Least Cost Method, Vogel's Approximation Method) that require the total outflow to equal the total inflow.

**Example:**

Consider a transportation problem with 2 sources (S1, S2) and 3 destinations (D1, D2, D3).

| From \ To | D1 | D2 | D3 | Supply |
| :-------- | :- | :- | :- | :----- |
| S1        | 10 | 2  | 20 | 50     |
| S2        | 12 | 15 | 8  | 60     |
| **Demand**| 30 | 40 | 40 |        |

**Check for Balance:**
Total Supply = 50 + 60 = 110
Total Demand = 30 + 40 + 40 = 110

Since Total Supply = Total Demand, this is a **balanced** transportation problem.

**Alignment with Course Outcomes:**
*   **CO1: To formulate and solve linear programming and transportation problems (Knowledge Level: K4)** - Understanding the conditions for a balanced problem is the first step in formulating and preparing it for solution, which is a K4 activity.

### 3. Unbalanced Transportation Problem

An unbalanced transportation problem is one where the total supply does not equal the total demand. This can occur in real-world scenarios where production might exceed sales capacity or demand might outstrip available supply.

There are two types of unbalanced problems:

#### 3.1. Supply is less than Demand ($\sum a_i < \sum b_j$)

In this case, the total demand cannot be fully met by the available supply. To transform this into a balanced problem, we introduce a **dummy source**.

*   **Dummy Source:** A fictitious source is created to absorb the unmet demand.
*   **Dummy Supply:** The supply of the dummy source is equal to the difference between total demand and total supply: $a_{dummy} = \sum b_j - \sum a_i$.
*   **Dummy Costs:** The transportation costs from the dummy source to all destinations are set to **zero**. This is because the dummy source represents unmet demand, and there's no actual transportation cost associated with this "shortfall."

**How it works:** By adding a dummy source with sufficient supply, we ensure that the total supply now equals the total demand. The units shipped from the dummy source represent the unsatisfied demand at the respective destinations.

**Example:**

Consider a transportation problem with 2 sources (S1, S2) and 3 destinations (D1, D2, D3).

| From \ To | D1 | D2 | D3 | Supply |
| :-------- | :- | :- | :- | :----- |
| S1        | 10 | 2  | 20 | 30     |
| S2        | 12 | 15 | 8  | 40     |
| **Demand**| 30 | 40 | 40 |        |

**Check for Balance:**
Total Supply = 30 + 40 = 70
Total Demand = 30 + 40 + 40 = 110

Here, Total Supply (70) < Total Demand (110). The difference is 110 - 70 = 40.

**Transformation into a Balanced Problem:**
Introduce a dummy source (SD) with a supply of 40. The costs from SD to D1, D2, and D3 are 0.

| From \ To | D1 | D2 | D3 | Supply |
| :-------- | :- | :- | :- | :----- |
| S1        | 10 | 2  | 20 | 30     |
| S2        | 12 | 15 | 8  | 40     |
| **SD**    | 0  | 0  | 0  | 40     |
| **Demand**| 30 | 40 | 40 |        |

Now, Total Supply = 30 + 40 + 40 = 110, and Total Demand = 30 + 40 + 40 = 110. The problem is balanced.

**Interpretation:** If the optimal solution allocates $x_{SD, j}$ units from the dummy source to destination $j$, it signifies that destination $j$ has an unsatisfied demand of $x_{SD, j}$ units.

#### 3.2. Supply is greater than Demand ($\sum a_i > \sum b_j$)

In this case, the total supply exceeds the total demand. To transform this into a balanced problem, we introduce a **dummy destination**.

*   **Dummy Destination:** A fictitious destination is created to absorb the excess supply.
*   **Dummy Demand:** The demand of the dummy destination is equal to the difference between total supply and total demand: $b_{dummy} = \sum a_i - \sum b_j$.
*   **Dummy Costs:** The transportation costs from all sources to the dummy destination are set to **zero**. This is because the dummy destination represents unused supply, and there's no actual transportation cost associated with this "leftover" stock.

**How it works:** By adding a dummy destination with sufficient demand, we ensure that all available supply is utilized (either shipped to real destinations or absorbed by the dummy destination). The total demand now equals the total supply.

**Example:**

Consider a transportation problem with 2 sources (S1, S2) and 3 destinations (D1, D2, D3).

| From \ To | D1 | D2 | D3 | Supply |
| :-------- | :- | :- | :- | :----- |
| S1        | 10 | 2  | 20 | 50     |
| S2        | 12 | 15 | 8  | 60     |
| **Demand**| 30 | 40 | 40 |        |

**Check for Balance:**
Total Supply = 50 + 60 = 110
Total Demand = 30 + 40 + 40 = 110

Wait, this example is balanced. Let's adjust the supply for illustration.

**Revised Example:**

Consider a transportation problem with 2 sources (S1, S2) and 3 destinations (D1, D2, D3).

| From \ To | D1 | D2 | D3 | Supply |
| :-------- | :- | :- | :- | :----- |
| S1        | 10 | 2  | 20 | 60     |
| S2        | 12 | 15 | 8  | 70     |
| **Demand**| 30 | 40 | 40 |        |

**Check for Balance:**
Total Supply = 60 + 70 = 130
Total Demand = 30 + 40 + 40 = 110

Here, Total Supply (130) > Total Demand (110). The difference is 130 - 110 = 20.

**Transformation into a Balanced Problem:**
Introduce a dummy destination (DD) with a demand of 20. The costs from S1, S2 to DD are 0.

| From \ To | D1 | D2 | D3 | DD | Supply |
| :-------- | :- | :- | :- | :- | :----- |
| S1        | 10 | 2  | 20 | 0  | 60     |
| S2        | 12 | 15 | 8  | 0  | 70     |
| **Demand**| 30 | 40 | 40 | 20 |        |

Now, Total Supply = 60 + 70 = 130, and Total Demand = 30 + 40 + 40 + 20 = 130. The problem is balanced.

**Interpretation:** If the optimal solution allocates $x_{i, DD}$ units from source $i$ to the dummy destination, it signifies that source $i$ has $x_{i, DD}$ units of unused (excess) supply.

**Reference:** Both unbalanced cases and their handling are thoroughly covered in **Paneerselvam R., Operations Research, Third edition, 2023**, and **Taha, Operations Research, Tenth edition, 2019**, as essential pre-processing steps before applying solution algorithms. **Hillier & Lieberman, Introduction to Operations Research, Tenth edition, 2017**, also provides a detailed account of these transformations.

**Alignment with Course Outcomes:**
*   **CO1: To formulate and solve linear programming and transportation problems (Knowledge Level: K4)** - Recognizing and converting unbalanced problems to balanced ones is a crucial formulation step, demonstrating K4 understanding.

### 4. Important Points to Remember

*   **Balance is Key:** Most standard algorithms for solving transportation problems (like MODI, Stepping Stone) require a balanced problem.
*   **Dummy Variables:** Dummy sources or destinations are artificial constructs used solely to balance the problem. They have zero costs.
*   **Interpretation of Dummy Allocation:**
    *   Allocation to a dummy destination signifies **unused supply** at the originating source.
    *   Allocation from a dummy source signifies **unmet demand** at the destination.
*   **No Penalty for Unused Supply:** The zero cost to the dummy destination implies that there is no penalty or cost incurred for not utilizing the entire supply.
*   **No Premium for Unmet Demand:** The zero cost from the dummy source implies that there is no penalty or cost incurred for not meeting the full demand at a destination. If there were such costs, they would be incorporated into the dummy source's costs.
*   **Problem Formulation Consistency:** The mathematical formulation's ability to handle imbalances (or lack thereof) is fundamental to its practical applicability.

### 5. Practice Questions and Exercises

**Question 1:**
A company has two factories (F1, F2) and three warehouses (W1, W2, W3). The monthly production capacities of the factories are: F1 = 100 units, F2 = 120 units. The monthly demand of the warehouses is: W1 = 80 units, W2 = 70 units, W3 = 60 units. The per-unit transportation costs are given in the table below:

| From \ To | W1 | W2 | W3 |
| :-------- | :- | :- | :- |
| F1        | 5  | 4  | 3  |
| F2        | 6  | 3  | 2  |

Is this a balanced transportation problem? If not, how would you balance it?

**Answer 1:**
Total Supply = 100 (F1) + 120 (F2) = 220 units
Total Demand = 80 (W1) + 70 (W2) + 60 (W3) = 210 units

Since Total Supply (220) > Total Demand (210), the problem is **unbalanced**.

To balance it, we need to introduce a **dummy destination (WD)** with a demand equal to the excess supply:
Demand of WD = Total Supply - Total Demand = 220 - 210 = 10 units.
The transportation costs from F1 and F2 to WD will be 0.

The balanced problem table would look like:

| From \ To | W1 | W2 | W3 | WD | Supply |
| :-------- | :- | :- | :- | :- | :----- |
| F1        | 5  | 4  | 3  | 0  | 100    |
| F2        | 6  | 3  | 2  | 0  | 120    |
| **Demand**| 80 | 70 | 60 | 10 |        |

**Question 2:**
A manufacturer has three production plants (P1, P2, P3) and four distribution centers (D1, D2, D3, D4). The weekly production of the plants are: P1 = 50 units, P2 = 60 units, P3 = 40 units. The weekly demand of the distribution centers are: D1 = 40 units, D2 = 50 units, D3 = 30 units, D4 = 20 units. The per-unit transportation costs are given below:

| From \ To | D1 | D2 | D3 | D4 |
| :-------- | :- | :- | :- | :- |
| P1        | 10 | 12 | 15 | 8  |
| P2        | 11 | 9  | 6  | 13 |
| P3        | 14 | 10 | 12 | 11 |

Is this a balanced transportation problem? If not, how would you balance it?

**Answer 2:**
Total Supply = 50 (P1) + 60 (P2) + 40 (P3) = 150 units
Total Demand = 40 (D1) + 50 (D2) + 30 (D3) + 20 (D4) = 140 units

Since Total Supply (150) > Total Demand (140), the problem is **unbalanced**.

To balance it, we need to introduce a **dummy destination (DD)** with a demand equal to the excess supply:
Demand of DD = Total Supply - Total Demand = 150 - 140 = 10 units.
The transportation costs from P1, P2, and P3 to DD will be 0.

The balanced problem table would look like:

| From \ To | D1 | D2 | D3 | D4 | DD | Supply |
| :-------- | :- | :- | :- | :- | :- | :----- |
| P1        | 10 | 12 | 15 | 8  | 0  | 50     |
| P2        | 11 | 9  | 6  | 13 | 0  | 60     |
| P3        | 14 | 10 | 12 | 11 | 0  | 40     |
| **Demand**| 40 | 50 | 30 | 20 | 10 |        |

**Question 3:**
A fertilizer company has three plants (A, B, C) and two warehouses (X, Y). The weekly production capacity of the plants are: A = 300 tons, B = 350 tons, C = 250 tons. The weekly demand of the warehouses is: X = 500 tons, Y = 400 tons. The per-unit transportation costs are given below:

| From \ To | X  | Y  |
| :-------- | :- | :- |
| A         | 2  | 3  |
| B         | 4  | 1  |
| C         | 5  | 2  |

Is this a balanced transportation problem? If not, how would you balance it?

**Answer 3:**
Total Supply = 300 (A) + 350 (B) + 250 (C) = 900 tons
Total Demand = 500 (X) + 400 (Y) = 900 tons

Since Total Supply (900) = Total Demand (900), this is a **balanced** transportation problem. No dummy source or destination is needed.

**Question 4:**
A textile firm has two dyeing units (D1, D2) and three finishing units (F1, F2, F3). The daily capacity of the dyeing units is: D1 = 1000 meters, D2 = 1500 meters. The daily demand of the finishing units is: F1 = 800 meters, F2 = 700 meters, F3 = 600 meters. The per-unit transportation costs are given below:

| From \ To | F1 | F2 | F3 |
| :-------- | :- | :- | :- |
| D1        | 10 | 8  | 12 |
| D2        | 9  | 11 | 7  |

Is this a balanced transportation problem? If not, how would you balance it?

**Answer 4:**
Total Supply = 1000 (D1) + 1500 (D2) = 2500 meters
Total Demand = 800 (F1) + 700 (F2) + 600 (F3) = 2100 meters

Since Total Supply (2500) > Total Demand (2100), the problem is **unbalanced**.

To balance it, we need to introduce a **dummy destination (DF)** with a demand equal to the excess supply:
Demand of DF = Total Supply - Total Demand = 2500 - 2100 = 400 meters.
The transportation costs from D1 and D2 to DF will be 0.

The balanced problem table would look like:

| From \ To | F1 | F2 | F3 | DF | Supply |
| :-------- | :- | :- | :- | :- | :----- |
| D1        | 10 | 8  | 12 | 0  | 1000   |
| D2        | 9  | 11 | 7  | 0  | 1500   |
| **Demand**| 800| 700| 600| 400|        |

**Question 5:**
Consider a scenario where total demand exceeds total supply by 100 units. How would you balance this problem?

**Answer 5:**
If Total Demand > Total Supply, you need to introduce a **dummy source**. The supply of the dummy source will be equal to the difference: 100 units. The costs from this dummy source to all destinations will be zero.

**Alignment with Course Outcomes:**
*   **CO1: To formulate and solve linear programming and transportation problems (Knowledge Level: K4)** - These questions require students to apply the learned concepts of balance and unbalance to practical scenarios, involving formulation and preparation for solution, thus engaging K4.

This topic lays the groundwork for solving transportation problems. Once a problem is balanced, students can proceed to finding initial feasible solutions using methods like the North-West Corner Rule, Least Cost Method, and Vogel's Approximation Method, and then optimize these solutions using algorithms like the Modified Distribution (MODI) method or the Stepping Stone Method. These subsequent steps are crucial for achieving CO1.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=fNk_zzaMoEs) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
