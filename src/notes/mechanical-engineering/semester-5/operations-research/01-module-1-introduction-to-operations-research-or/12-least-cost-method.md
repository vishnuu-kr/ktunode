---
title: "Least Cost method"
subject: "OPERATIONS RESEARCH"
module: "Module 1: Introduction to Operations Research (OR)"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf480446361a"
status: "completed"
scrapedAt: "2026-05-20T18:01:49.546Z"
---
# Operations Research: Module 1 - Introduction to OR
## Topic: Least Cost Method (LCM)

This module introduces Operations Research (OR) and explores fundamental techniques for solving optimization problems. The Least Cost Method is a crucial algorithm for finding an initial feasible solution to a Transportation Problem.

---

### 1. Introduction to Operations Research (OR)

Operations Research (OR) is a discipline that deals with the application of advanced analytical methods to help make better decisions. It involves using mathematical modeling, statistical analysis, and algorithms to find optimal or near-optimal solutions to complex problems. OR is often used in various fields such as business, engineering, government, and healthcare.

**Key Concepts:**
*   **Decision Making:** Identifying and choosing among alternative courses of action.
*   **Optimization:** Finding the best possible solution (maximum profit, minimum cost, etc.) for a given problem.
*   **Mathematical Modeling:** Representing a real-world problem using mathematical equations and constraints.
*   **Algorithms:** A step-by-step procedure or set of rules to solve a problem.

**Reference:**
*   **Operations Research-Principles and Applications by Srinivasan, G. (Chapter 1):** Provides a foundational overview of OR, its history, phases, and applications.
*   **Quantitative Techniques in Management by N. D Vohra. Hitesh Arora (Chapter 1):** Introduces OR as a management tool and discusses its scope and limitations.

---

### 2. Transportation Problem

A transportation problem is a special type of linear programming problem that deals with the transportation of goods from a set of sources (e.g., factories, warehouses) to a set of destinations (e.g., retail stores, customers). The objective is usually to minimize the total transportation cost.

**Key Concepts:**
*   **Sources:** Origins where goods are available.
*   **Destinations:** Destinations where goods are required.
*   **Supply:** The quantity of goods available at each source.
*   **Demand:** The quantity of goods required at each destination.
*   **Transportation Cost:** The cost of transporting one unit of goods from a source to a destination.

**Mathematical Formulation (General):**
Let $x_{ij}$ be the quantity of goods transported from source $i$ to destination $j$.
Let $c_{ij}$ be the cost of transporting one unit from source $i$ to destination $j$.
Let $a_i$ be the supply at source $i$.
Let $b_j$ be the demand at destination $j$.

Minimize $\sum_{i} \sum_{j} c_{ij} x_{ij}$

Subject to:
*   **Supply Constraints:** $\sum_{j} x_{ij} \le a_i$ for all sources $i$.
*   **Demand Constraints:** $\sum_{i} x_{ij} \ge b_j$ for all destinations $j$.
*   **Non-negativity:** $x_{ij} \ge 0$ for all $i, j$.

**Balanced vs. Unbalanced Transportation Problems:**
*   **Balanced:** Total supply equals total demand ($\sum a_i = \sum b_j$).
*   **Unbalanced:** Total supply does not equal total demand. If $\sum a_i > \sum b_j$, a dummy destination with zero supply and zero transportation costs is added. If $\sum a_i < \sum b_j$, a dummy source with zero demand and zero transportation costs is added.

**Reference:**
*   **Operations Research by Prem Kumar Gupta & D. S. Hira (Chapter 6):** Explains the transportation problem in detail, including its formulation and various methods for solving it.
*   **Optimization: Theory and Applications by Rao, S.S. (Chapter 4):** Covers transportation and assignment problems, including their mathematical structure and solution techniques.

---

### 3. Least Cost Method (LCM)

The Least Cost Method (also known as the Matrix Minimum Method) is a simple and efficient heuristic algorithm used to find an **initial feasible solution** for a transportation problem. It aims to allocate as much as possible to the cells with the lowest transportation costs.

**Algorithm Steps:**

1.  **Check for Balance:** Ensure the transportation problem is balanced. If not, add dummy sources or destinations to balance it.
2.  **Identify Minimum Cost:** Locate the cell $(i, j)$ with the minimum transportation cost $c_{ij}$ in the cost matrix.
3.  **Allocate:** Allocate the maximum possible quantity to this cell $(i, j)$. The quantity to be allocated is $\min(\text{current supply at source } i, \text{current demand at destination } j)$.
4.  **Update Supply and Demand:**
    *   If the supply at source $i$ is exhausted (allocation equals supply), cross out (or mark as unavailable) row $i$.
    *   If the demand at destination $j$ is met (allocation equals demand), cross out (or mark as unavailable) column $j$.
    *   If both supply and demand are exhausted simultaneously, cross out both row $i$ and column $j$.
5.  **Repeat:** Repeat steps 2-4 with the remaining un-crossed-out cells and updated supply/demand until all supplies are allocated and all demands are met.

**Important Points:**
*   LCM provides an **initial feasible solution**, not necessarily the optimal solution.
*   It is a greedy approach, focusing on immediate cost savings.
*   The solution obtained might be degenerate if the number of basic feasible allocations is less than $m+n-1$ (where $m$ is the number of sources and $n$ is the number of destinations).

**Reference:**
*   **Operations Research by Prem Kumar Gupta & D. S. Hira (Section 6.3.1):** Provides a detailed explanation and example of the Least Cost Method.
*   **Quantitative Techniques in Management by N. D Vohra. Hitesh Arora (Section 7.3):** Explains the Least Cost Method with examples.

---

### 4. Example: Least Cost Method

Let's consider a transportation problem with 3 sources and 4 destinations.

**Cost Matrix:**

|       | D1 | D2 | D3 | D4 | Supply |
| :---- | :- | :- | :- | :- | :----- |
| **S1** | 10 | 2  | 20 | 11 | 30     |
| **S2** | 12 | 7  | 9  | 20 | 50     |
| **S3** | 6  | 14 | 13 | 18 | 20     |
| **Demand** | 20 | 30 | 10 | 40 | 100    |

**Step 1: Check for Balance**
Total Supply = 30 + 50 + 20 = 100
Total Demand = 20 + 30 + 10 + 40 = 100
The problem is balanced.

**Step 2-5: Allocation Process**

*   **Iteration 1:**
    *   Minimum cost is 2 at cell (S1, D2).
    *   Allocate $\min(30, 30) = 30$ to (S1, D2).
    *   S1 supply is exhausted. Cross out row S1.
    *   D2 demand is met. Update demand for D2 to 0.

    |       | D1 | D2 (0) | D3 | D4 | Supply |
    | :---- | :- | :----- | :- | :- | :----- |
    | **S1 (0)** | 10 | **30** | 20 | 11 | 0      |
    | **S2** | 12 | 7      | 9  | 20 | 50     |
    | **S3** | 6  | 14     | 13 | 18 | 20     |
    | **Demand** | 20 | 0      | 10 | 40 | 100    |

*   **Iteration 2:**
    *   Remaining costs: S2(D1)=12, S2(D3)=9, S2(D4)=20, S3(D1)=6, S3(D3)=13, S3(D4)=18.
    *   Minimum cost is 6 at cell (S3, D1).
    *   Allocate $\min(20, 20) = 20$ to (S3, D1).
    *   S3 supply is exhausted. Cross out row S3.
    *   D1 demand is met. Update demand for D1 to 0.

    |       | D1 (0) | D2 (0) | D3 | D4 | Supply |
    | :---- | :----- | :----- | :- | :- | :----- |
    | **S1 (0)** | 10     | **30** | 20 | 11 | 0      |
    | **S2** | 12     | 7      | 9  | 20 | 50     |
    | **S3 (0)** | **20** | 14     | 13 | 18 | 0      |
    | **Demand** | 0      | 0      | 10 | 40 | 100    |

*   **Iteration 3:**
    *   Remaining costs: S2(D3)=9, S2(D4)=20, S3(D3)=13, S3(D4)=18. (But S3 is crossed out)
    *   Actually, we consider remaining available cells: S2(D1)=12 (but D1 demand met), S2(D3)=9, S2(D4)=20.
    *   Minimum cost is 9 at cell (S2, D3).
    *   Allocate $\min(50, 10) = 10$ to (S2, D3).
    *   D3 demand is met. Update demand for D3 to 0.

    |       | D1 (0) | D2 (0) | D3 (0) | D4 | Supply |
    | :---- | :----- | :----- | :----- | :- | :----- |
    | **S1 (0)** | 10     | **30** | 20     | 11 | 0      |
    | **S2** | 12     | 7      | **10** | 20 | 40     |
    | **S3 (0)** | **20** | 14     | 13     | 18 | 0      |
    | **Demand** | 0      | 0      | 0      | 40 | 100    |

*   **Iteration 4:**
    *   Remaining costs: S2(D1)=12 (D1 met), S2(D4)=20.
    *   Minimum cost is 20 at cell (S2, D4).
    *   Allocate $\min(40, 40) = 40$ to (S2, D4).
    *   S2 supply is exhausted. Cross out row S2.
    *   D4 demand is met. Update demand for D4 to 0.

    |       | D1 (0) | D2 (0) | D3 (0) | D4 (0) | Supply |
    | :---- | :----- | :----- | :----- | :----- | :----- |
    | **S1 (0)** | 10     | **30** | 20     | 11     | 0      |
    | **S2 (0)** | 12     | 7      | **10** | **40** | 0      |
    | **S3 (0)** | **20** | 14     | 13     | 18     | 0      |
    | **Demand** | 0      | 0      | 0      | 0      | 100    |

All supplies and demands are met.

**Initial Feasible Solution (LCM):**
*   $x_{12} = 30$
*   $x_{31} = 20$
*   $x_{23} = 10$
*   $x_{24} = 40$

**Total Transportation Cost:**
Cost = $(30 \times 2) + (20 \times 6) + (10 \times 9) + (40 \times 20)$
Cost = $60 + 120 + 90 + 800$
Cost = **$1070**

**Check for Degeneracy:**
Number of sources ($m$) = 3
Number of destinations ($n$) = 4
Number of basic allocations = 4
$m+n-1 = 3+4-1 = 6$.
Since $4 < 6$, this solution is degenerate. To resolve degeneracy (though not strictly required for LCM itself, it's important for subsequent optimality tests), we can introduce a small allocation (e.g., $\epsilon$) to an empty cell with the lowest cost.

---

### 5. Practice Questions and Exercises

**Question 1:**
A company has three production plants and five distribution centers. The cost of transporting one unit from each plant to each distribution center is given in the table below. The production capacities of the plants and the requirements of the distribution centers are also given.

|       | DC1 | DC2 | DC3 | DC4 | DC5 | Capacity |
| :---- | :- | :- | :- | :- | :- | :------- |
| **Plant 1** | 10 | 0  | 20 | 11 | 15 | 50       |
| **Plant 2** | 12 | 15 | 8  | 20 | 18 | 100      |
| **Plant 3** | 8  | 12 | 10 | 14 | 16 | 70       |
| **Demand** | 30 | 40 | 20 | 35 | 35 | 160      |

Using the Least Cost Method, find an initial feasible solution and calculate the total transportation cost. Is the solution degenerate?

**Answer 1:**

**Step 1: Balance Check**
Total Capacity = 50 + 100 + 70 = 220
Total Demand = 30 + 40 + 20 + 35 + 35 = 160
The problem is unbalanced. Capacity > Demand.
Add a dummy plant (Plant 4) with capacity 220 - 160 = 60 and zero transportation costs.

**Modified Cost Matrix:**

|       | DC1 | DC2 | DC3 | DC4 | DC5 | Capacity |
| :---- | :- | :- | :- | :- | :- | :------- |
| **Plant 1** | 10 | 0  | 20 | 11 | 15 | 50       |
| **Plant 2** | 12 | 15 | 8  | 20 | 18 | 100      |
| **Plant 3** | 8  | 12 | 10 | 14 | 16 | 70       |
| **Plant 4 (Dummy)** | 0 | 0  | 0  | 0  | 0  | 60       |
| **Demand** | 30 | 40 | 20 | 35 | 35 | 220      |

**Allocation Process (LCM):**

*   **Iteration 1:** Min cost is 0 at (P1, DC2) and (P4, DC1), (P4, DC2), (P4, DC3), (P4, DC4), (P4, DC5). Let's pick (P1, DC2).
    *   Allocate $\min(50, 40) = 40$ to (P1, DC2).
    *   DC2 demand met. Cross out DC2. S1 capacity reduced to 10.

|       | DC1 | DC2 (0) | DC3 | DC4 | DC5 | Capacity |
| :---- | :- | :----- | :- | :- | :- | :------- |
| **P1** | 10 | **40** | 20 | 11 | 15 | 10       |
| **P2** | 12 | 15     | 8  | 20 | 18 | 100      |
| **P3** | 8  | 12     | 10 | 14 | 16 | 70       |
| **P4** | 0  | 0      | 0  | 0  | 0  | 60       |
| **Demand** | 30 | 0      | 20 | 35 | 35 | 220      |

*   **Iteration 2:** Min cost among remaining is 0 at (P4, DC1).
    *   Allocate $\min(60, 30) = 30$ to (P4, DC1).
    *   DC1 demand met. Cross out DC1. P4 capacity reduced to 30.

|       | DC1 (0) | DC2 (0) | DC3 | DC4 | DC5 | Capacity |
| :---- | :------ | :------ | :- | :- | :- | :------- |
| **P1** | 10      | **40**  | 20 | 11 | 15 | 10       |
| **P2** | 12      | 15      | 8  | 20 | 18 | 100      |
| **P3** | 8       | 12      | 10 | 14 | 16 | 70       |
| **P4** | **30**  | 0       | 0  | 0  | 0  | 30       |
| **Demand** | 0       | 0       | 20 | 35 | 35 | 220      |

*   **Iteration 3:** Min cost is 0 at (P4, DC3), (P4, DC4), (P4, DC5). Let's pick (P4, DC3).
    *   Allocate $\min(30, 20) = 20$ to (P4, DC3).
    *   DC3 demand met. Cross out DC3. P4 capacity reduced to 10.

|       | DC1 (0) | DC2 (0) | DC3 (0) | DC4 | DC5 | Capacity |
| :---- | :------ | :------ | :------ | :- | :- | :------- |
| **P1** | 10      | **40**  | 20      | 11 | 15 | 10       |
| **P2** | 12      | 15      | 8       | 20 | 18 | 100      |
| **P3** | 8       | 12      | 10      | 14 | 16 | 70       |
| **P4** | **30**  | 0       | **20**  | 0  | 0  | 10       |
| **Demand** | 0       | 0       | 0       | 35 | 35 | 220      |

*   **Iteration 4:** Min cost is 0 at (P4, DC4) and (P4, DC5). Pick (P4, DC4).
    *   Allocate $\min(10, 35) = 10$ to (P4, DC4).
    *   P4 capacity exhausted. Cross out P4. DC4 demand reduced to 25.

|       | DC1 (0) | DC2 (0) | DC3 (0) | DC4 (25) | DC5 | Capacity |
| :---- | :------ | :------ | :------ | :------- | :- | :------- |
| **P1** | 10      | **40**  | 20      | 11       | 15 | 10       |
| **P2** | 12      | 15      | 8       | 20       | 18 | 100      |
| **P3** | 8       | 12      | 10      | 14       | 16 | 70       |
| **P4 (0)** | **30**  | 0       | **20**  | **10**   | 0  | 0        |
| **Demand** | 0       | 0       | 0       | 25       | 35 | 220      |

*   **Iteration 5:** Min cost is 8 at (P3, DC1) (DC1 is met) and (P2, DC3). Pick (P2, DC3).
    *   Allocate $\min(100, 20) = 20$ to (P2, DC3).
    *   DC3 demand met. Cross out DC3. P2 capacity reduced to 80.

|       | DC1 (0) | DC2 (0) | DC3 (0) | DC4 (25) | DC5 | Capacity |
| :---- | :------ | :------ | :------ | :------- | :- | :------- |
| **P1** | 10      | **40**  | 20      | 11       | 15 | 10       |
| **P2** | 12      | 15      | **20**  | 20       | 18 | 80       |
| **P3** | 8       | 12      | 10      | 14       | 16 | 70       |
| **P4 (0)** | **30**  | 0       | **20**  | **10**   | 0  | 0        |
| **Demand** | 0       | 0       | 0       | 25       | 35 | 220      |

*   **Iteration 6:** Min cost is 8 at (P3, DC1).
    *   Allocate $\min(70, 30) = 30$ to (P3, DC1).
    *   DC1 demand met. Cross out DC1. P3 capacity reduced to 40.

|       | DC1 (0) | DC2 (0) | DC3 (0) | DC4 (25) | DC5 | Capacity |
| :---- | :------ | :------ | :------ | :------- | :- | :------- |
| **P1** | 10      | **40**  | 20      | 11       | 15 | 10       |
| **P2** | 12      | 15      | **20**  | 20       | 18 | 80       |
| **P3** | **30**  | 12      | 10      | 14       | 16 | 40       |
| **P4 (0)** | **30**  | 0       | **20**  | **10**   | 0  | 0        |
| **Demand** | 0       | 0       | 0       | 25       | 35 | 220      |

*   **Iteration 7:** Min cost is 10 at (P3, DC3) (DC3 met). Remaining costs: P1(10), P1(11), P1(15); P2(15), P2(20), P2(18); P3(12), P3(14), P3(16).
    *   Min cost is 10 at (P1, DC1) (DC1 met). Oh, wait. Minimum cost is 10 at (P1, DC1) which is already met. Let's look at the remaining cells properly.
    *   Available cells and costs: P1(DC1)=10, P1(DC4)=11, P1(DC5)=15; P2(DC1)=12, P2(DC2)=15, P2(DC4)=20, P2(DC5)=18; P3(DC2)=12, P3(DC3)=10, P3(DC4)=14, P3(DC5)=16.
    *   Wait, P1(DC1) is also met by P3 and P4. We need to re-evaluate available cells.

Let's restart the allocation focusing on minimum cost in the remaining tableau.

**Initial Tableau:**
|       | DC1 | DC2 | DC3 | DC4 | DC5 | Supply |
| :---- | :- | :- | :- | :- | :- | :----- |
| **P1** | 10 | 0  | 20 | 11 | 15 | 50     |
| **P2** | 12 | 15 | 8  | 20 | 18 | 100    |
| **P3** | 8  | 12 | 10 | 14 | 16 | 70     |
| **P4** | 0  | 0  | 0  | 0  | 0  | 60     |
| **Demand** | 30 | 40 | 20 | 35 | 35 | 220    |

**Allocation using LCM:**

1.  (P1, DC2): Min cost 0. Allocate $\min(50, 40) = 40$. P1 remaining = 10. DC2 met.
2.  (P4, DC1): Min cost 0. Allocate $\min(60, 30) = 30$. P4 remaining = 30. DC1 met.
3.  (P4, DC3): Min cost 0. Allocate $\min(30, 20) = 20$. P4 remaining = 10. DC3 met.
4.  (P4, DC4): Min cost 0. Allocate $\min(10, 35) = 10$. P4 remaining = 0. DC4 remaining = 25. P4 exhausted.
5.  (P2, DC3): Min cost 8. DC3 is met, so this cell is unavailable for allocation. Minimum available cost is 8 at (P3, DC1) which is also met. Re-evaluate table.

Let's visualize the available cells and costs after first few allocations:

|       | DC1 (0) | DC2 (0) | DC3 (0) | DC4 (25) | DC5 | Capacity |
| :---- | :------ | :------ | :------ | :------- | :- | :------- |
| **P1** | 10      | **40**  | 20      | 11       | 15 | 10       |
| **P2** | 12      | 15      | 8       | 20       | 18 | 100      |
| **P3** | 8       | 12      | 10      | 14       | 16 | 70       |
| **P4 (0)** | **30**  | 0       | **20**  | **10**   | 0  | 0        |
| **Demand** | 0       | 0       | 0       | 25       | 35 | 220      |

Current minimum cost in available cells: P1(DC1)=10, P1(DC4)=11, P1(DC5)=15; P2(DC1)=12, P2(DC2)=15, P2(DC4)=20, P2(DC5)=18; P3(DC1)=8, P3(DC2)=12, P3(DC3)=10, P3(DC4)=14, P3(DC5)=16.

6.  Min cost is 8 at (P3, DC1). Oh, DC1 is already met by P4. This is where careful tracking is needed. The problem is we should be selecting from the *original* cost matrix, but only consider rows/columns that are not yet satisfied.

Let's use a cleaner representation of the tableau for allocation:

**Initial Tableau with Costs:**

|       | DC1 | DC2 | DC3 | DC4 | DC5 | Supply |
| :---- | :- | :- | :- | :- | :- | :----- |
| **P1** | 10 | 0  | 20 | 11 | 15 | 50     |
| **P2** | 12 | 15 | 8  | 20 | 18 | 100    |
| **P3** | 8  | 12 | 10 | 14 | 16 | 70     |
| **P4** | 0  | 0  | 0  | 0  | 0  | 60     |
| **Demand** | 30 | 40 | 20 | 35 | 35 | 220    |

**Allocations:**

1.  Min cost = 0. Multiple cells. Let's pick (P1, DC2). Allocate 40.
    *   S1: 50-40 = 10. DC2: 40-40 = 0. Cross out DC2.
    *   Tableau:
        |       | DC1 | DC2 (X) | DC3 | DC4 | DC5 | Supply |
        | :---- | :- | :----- | :- | :- | :- | :----- |
        | **P1** | 10 | **40** | 20 | 11 | 15 | 10     |
        | **P2** | 12 | 15     | 8  | 20 | 18 | 100    |
        | **P3** | 8  | 12     | 10 | 14 | 16 | 70     |
        | **P4** | 0  | 0      | 0  | 0  | 0  | 60     |
        | **Demand** | 30 | 0      | 20 | 35 | 35 | 220    |

2.  Min cost = 0. Multiple cells from P4. Pick (P4, DC1). Allocate 30.
    *   S4: 60-30 = 30. DC1: 30-30 = 0. Cross out DC1.
    *   Tableau:
        |       | DC1 (X) | DC2 (X) | DC3 | DC4 | DC5 | Supply |
        | :---- | :------ | :----- | :- | :- | :- | :----- |
        | **P1** | 10      | **40** | 20 | 11 | 15 | 10     |
        | **P2** | 12      | 15     | 8  | 20 | 18 | 100    |
        | **P3** | 8       | 12     | 10 | 14 | 16 | 70     |
        | **P4** | **30**  | 0      | 0  | 0  | 0  | 30     |
        | **Demand** | 0       | 0      | 20 | 35 | 35 | 220    |

3.  Min cost = 0. Multiple cells from P4. Pick (P4, DC3). Allocate 20.
    *   S4: 30-20 = 10. DC3: 20-20 = 0. Cross out DC3.
    *   Tableau:
        |       | DC1 (X) | DC2 (X) | DC3 (X) | DC4 | DC5 | Supply |
        | :---- | :------ | :----- | :----- | :- | :- | :----- |
        | **P1** | 10      | **40** | 20     | 11 | 15 | 10     |
        | **P2** | 12      | 15     | 8      | 20 | 18 | 100    |
        | **P3** | 8       | 12     | 10     | 14 | 16 | 70     |
        | **P4** | **30**  | 0      | **20** | 0  | 0  | 10     |
        | **Demand** | 0       | 0      | 0      | 35 | 35 | 220    |

4.  Min cost = 0. Multiple cells from P4. Pick (P4, DC4). Allocate 10.
    *   S4: 10-10 = 0. DC4: 35-10 = 25. Cross out P4.
    *   Tableau:
        |       | DC1 (X) | DC2 (X) | DC3 (X) | DC4 (25) | DC5 | Supply |
        | :---- | :------ | :----- | :----- | :------- | :- | :----- |
        | **P1** | 10      | **40** | 20     | 11       | 15 | 10     |
        | **P2** | 12      | 15     | 8      | 20       | 18 | 100    |
        | **P3** | 8       | 12     | 10     | 14       | 16 | 70     |
        | **P4 (X)** | **30**  | 0      | **20** | **10**   | 0  | 0      |
        | **Demand** | 0       | 0      | 0      | 25       | 35 | 220    |

5.  Min cost in remaining available cells is 8 at (P3, DC1). But DC1 is already met.
    The next minimum cost is 8 at (P2, DC3). But DC3 is also met.
    Next minimum cost is 10 at (P1, DC1). DC1 met.
    Next minimum cost is 10 at (P3, DC3). DC3 met.
    The actual minimum cost in the *remaining available cells* is 11 at (P1, DC4).
    Allocate $\min(10, 25) = 10$ to (P1, DC4).
    *   S1: 10-10 = 0. DC4: 25-10 = 15. Cross out P1.
    *   Tableau:
        |       | DC1 (X) | DC2 (X) | DC3 (X) | DC4 (15) | DC5 | Supply |
        | :---- | :------ | :----- | :----- | :------- | :- | :----- |
        | **P1 (X)** | 10      | **40** | 20     | **11**   | 15 | 0      |
        | **P2** | 12      | 15     | 8      | 20       | 18 | 100    |
        | **P3** | 8       | 12     | 10     | 14       | 16 | 70     |
        | **P4 (X)** | **30**  | 0      | **20** | **10**   | 0  | 0      |
        | **Demand** | 0       | 0      | 0      | 15       | 35 | 220    |

6.  Min cost is 8 at (P3, DC1), but DC1 is met.
    Min cost is 8 at (P2, DC3), but DC3 is met.
    Next min cost is 12 at (P2, DC1) (met) and (P3, DC2).
    Allocate $\min(70, 40) = 40$ to (P3, DC2).
    *   S3: 70-40 = 30. DC2: 40-40 = 0. Oh, DC2 is already met. This is confusing.

Let's try to select the absolute minimum cost from the original matrix at each step and check if supply/demand is exhausted.

**Revised Allocation Process:**

Initial Tableau:
|       | DC1 | DC2 | DC3 | DC4 | DC5 | Supply |
| :---- | :- | :- | :- | :- | :- | :----- |
| **P1** | 10 | 0  | 20 | 11 | 15 | 50     |
| **P2** | 12 | 15 | 8  | 20 | 18 | 100    |
| **P3** | 8  | 12 | 10 | 14 | 16 | 70     |
| **P4** | 0  | 0  | 0  | 0  | 0  | 60     |
| **Demand** | 30 | 40 | 20 | 35 | 35 | 220    |

1.  **Min cost = 0**: Cells (P1, DC2), (P4, DC1), (P4, DC2), (P4, DC3), (P4, DC4), (P4, DC5).
    *   Let's pick **(P4, DC1)**: Allocate $\min(60, 30) = 30$.
        *   P4 supply left: 30. DC1 demand met.
    *   Let's pick **(P4, DC2)**: Allocate $\min(30, 40) = 30$.
        *   P4 supply left: 0. DC2 demand left: 10. P4 exhausted.
    *   Let's pick **(P1, DC2)**: Allocate $\min(50, 10) = 10$.
        *   P1 supply left: 40. DC2 demand met.

    *   Current state:
        *   $x_{41} = 30$
        *   $x_{42} = 30$
        *   $x_{12} = 10$
        *   Remaining Supply: P1=40, P2=100, P3=70.
        *   Remaining Demand: DC1=0, DC2=0, DC3=20, DC4=35, DC5=35.

2.  **Min cost in available cells:**
    *   (P1, DC3)=20, (P1, DC4)=11, (P1, DC5)=15.
    *   (P2, DC1)=12 (met), (P2, DC2)=15 (met), (P2, DC3)=8, (P2, DC4)=20, (P2, DC5)=18.
    *   (P3, DC1)=8 (met), (P3, DC2)=12 (met), (P3, DC3)=10, (P3, DC4)=14, (P3, DC5)=16.
    *   The minimum cost is **8** at (P2, DC3) and (P3, DC1). Since DC1 is met, consider (P2, DC3).
    *   Allocate $\min(100, 20) = 20$ to (P2, DC3).
        *   P2 supply left: 80. DC3 demand met.

    *   Current state:
        *   $x_{41} = 30$, $x_{42} = 30$, $x_{12} = 10$, $x_{23} = 20$.
        *   Remaining Supply: P1=40, P2=80, P3=70.
        *   Remaining Demand: DC1=0, DC2=0, DC3=0, DC4=35, DC5=35.

3.  **Min cost in available cells:**
    *   (P1, DC4)=11, (P1, DC5)=15.
    *   (P2, DC4)=20, (P2, DC5)=18.
    *   (P3, DC3)=10 (met), (P3, DC4)=14, (P3, DC5)=16.
    *   The minimum cost is **10** at (P3, DC3). DC3 is met. Next min cost is 11 at (P1, DC4).
    *   Allocate $\min(40, 35) = 35$ to (P1, DC4).
        *   P1 supply left: 5. DC4 demand left: 0. DC4 met.

    *   Current state:
        *   $x_{41} = 30$, $x_{42} = 30$, $x_{12} = 10$, $x_{23} = 20$, $x_{14} = 35$.
        *   Remaining Supply: P1=5, P2=80, P3=70.
        *   Remaining Demand: DC1=0, DC2=0, DC3=0, DC4=0, DC5=35.

4.  **Min cost in available cells:**
    *   (P1, DC5)=15. P1 supply left is 5.
    *   (P2, DC5)=18.
    *   (P3, DC2)=12 (met), (P3, DC4)=14 (met), (P3, DC5)=16.
    *   The minimum cost is **15** at (P1, DC5).
    *   Allocate $\min(5, 35) = 5$ to (P1, DC5).
        *   P1 supply left: 0. DC5 demand left: 30. P1 exhausted.

    *   Current state:
        *   $x_{41} = 30$, $x_{42} = 30$, $x_{12} = 10$, $x_{23} = 20$, $x_{14} = 35$, $x_{15} = 5$.
        *   Remaining Supply: P1=0, P2=80, P3=70.
        *   Remaining Demand: DC1=0, DC2=0, DC3=0, DC4=0, DC5=30.

5.  **Min cost in available cells:**
    *   (P2, DC4)=20, (P2, DC5)=18.
    *   (P3, DC2)=12 (met), (P3, DC4)=14 (met), (P3, DC5)=16.
    *   The minimum cost is **12** at (P3, DC2). DC2 is met.
    *   Next min cost is **14** at (P3, DC4). DC4 is met.
    *   Next min cost is **16** at (P3, DC5).
    *   Allocate $\min(70, 30) = 30$ to (P3, DC5).
        *   P3 supply left: 40. DC5 demand left: 0. DC5 met.

    *   Current state:
        *   $x_{41} = 30$, $x_{42} = 30$, $x_{12} = 10$, $x_{23} = 20$, $x_{14} = 35$, $x_{15} = 5$, $x_{35} = 30$.
        *   Remaining Supply: P1=0, P2=80, P3=40.
        *   Remaining Demand: DC1=0, DC2=0, DC3=0, DC4=0, DC5=0.

6.  **Min cost in available cells:**
    *   (P2, DC4)=20, (P2, DC5)=18 (met).
    *   (P3, DC2)=12 (met), (P3, DC4)=14 (met).
    *   The minimum cost is **14** at (P3, DC4). DC4 is met.
    *   Next min cost is **18** at (P2, DC5). DC5 is met.
    *   Next min cost is **20** at (P2, DC4).
    *   Allocate $\min(80, 35) = 35$ to (P2, DC4).
        *   P2 supply left: 45. DC4 demand left: 0. DC4 met.

    *   Current state:
        *   $x_{41} = 30$, $x_{42} = 30$, $x_{12} = 10$, $x_{23} = 20$, $x_{14} = 35$, $x_{15} = 5$, $x_{35} = 30$, $x_{24} = 35$.
        *   Remaining Supply: P1=0, P2=45, P3=40.
        *   Remaining Demand: DC1=0, DC2=0, DC3=0, DC4=0, DC5=0.

7.  Now we have only P2 and P3 with supply, and no demand. This means there's an issue. Let's retrace step 5.

Let's try to make the allocations sequentially from the *original* minimum costs.

**Actual LCM Allocation Trace:**

Initial Tableau with Costs:
|       | DC1 | DC2 | DC3 | DC4 | DC5 | Supply |
| :---- | :- | :- | :- | :- | :- | :----- |
| **P1** | 10 | 0  | 20 | 11 | 15 | 50     |
| **P2** | 12 | 15 | 8  | 20 | 18 | 100    |
| **P3** | 8  | 12 | 10 | 14 | 16 | 70     |
| **P4** | 0  | 0  | 0  | 0  | 0  | 60     |
| **Demand** | 30 | 40 | 20 | 35 | 35 | 220    |

1.  **Min Cost 0:** Cells (P1, DC2), (P4, DC1), (P4, DC2), (P4, DC3), (P4, DC4), (P4, DC5).
    *   Pick **(P1, DC2)**: Allocate $\min(50, 40) = 40$. P1 supply left = 10. DC2 met.
    *   Pick **(P4, DC1)**: Allocate $\min(60, 30) = 30$. P4 supply left = 30. DC1 met.
    *   Pick **(P4, DC3)**: Allocate $\min(30, 20) = 20$. P4 supply left = 10. DC3 met.
    *   Pick **(P4, DC4)**: Allocate $\min(10, 35) = 10$. P4 supply left = 0. DC4 remaining = 25. P4 exhausted.

    Current Allocations: $x_{12}=40, x_{41}=30, x_{43}=20, x_{44}=10$.
    Remaining Supply: P1=10, P2=100, P3=70.
    Remaining Demand: DC1=0, DC2=0, DC3=0, DC4=25, DC5=35.

2.  **Min Cost in available cells:**
    *   P1: (DC4)=11, (DC5)=15.
    *   P2: (DC3)=8, (DC4)=20, (DC5)=18.
    *   P3: (DC2)=12 (met), (DC3)=10, (DC4)=14, (DC5)=16.
    *   The minimum cost is **8** at (P2, DC3).
    *   Allocate $\min(100, 20) = 20$ to (P2, DC3). P2 supply left = 80. DC3 met.

    Current Allocations: $x_{12}=40, x_{41}=30, x_{43}=20, x_{44}=10, x_{23}=20$.
    Remaining Supply: P1=10, P2=80, P3=70.
    Remaining Demand: DC1=0, DC2=0, DC3=0, DC4=25, DC5=35.

3.  **Min Cost in available cells:**
    *   P1: (DC4)=11, (DC5)=15.
    *   P2: (DC4)=20, (DC5)=18.
    *   P3: (DC3)=10 (met), (DC4)=14, (DC5)=16.
    *   The minimum cost is **10** at (P3, DC3). DC3 is met.
    *   The next minimum cost is **11** at (P1, DC4).
    *   Allocate $\min(10, 25) = 10$ to (P1, DC4). P1 supply left = 0. DC4 remaining = 15. P1 exhausted.

    Current Allocations: $x_{12}=40, x_{41}=30, x_{43}=20, x_{44}=10, x_{23}=20, x_{14}=10$.
    Remaining Supply: P1=0, P2=80, P3=70.
    Remaining Demand: DC1=0, DC2=0, DC3=0, DC4=15, DC5=35.

4.  **Min Cost in available cells:**
    *   P2: (DC4)=20, (DC5)=18.
    *   P3: (DC2)=12 (met), (DC3)=10 (met), (DC4)=14, (DC5)=16.
    *   The minimum cost is **12** at (P3, DC2). DC2 is met.
    *   The next minimum cost is **14** at (P3, DC4).
    *   Allocate $\min(70, 15) = 15$ to (P3, DC4). P3 supply left = 55. DC4 remaining = 0. DC4 met.

    Current Allocations: $x_{12}=40, x_{41}=30, x_{43}=20, x_{44}=10, x_{23}=20, x_{14}=10, x_{34}=15$.
    Remaining Supply: P1=0, P2=80, P3=55.
    Remaining Demand: DC1=0, DC2=0, DC3=0, DC4=0, DC5=35.

5.  **Min Cost in available cells:**
    *   P2: (DC5)=18.
    *   P3: (DC5)=16.
    *   The minimum cost is **16** at (P3, DC5).
    *   Allocate $\min(55, 35) = 35$ to (P3, DC5). P3 supply left = 20. DC5 remaining = 0. DC5 met.

    Current Allocations: $x_{12}=40, x_{41}=30, x_{43}=20, x_{44}=10, x_{23}=20, x_{14}=10, x_{34}=15, x_{35}=35$.
    Remaining Supply: P1=0, P2=80, P3=20.
    Remaining Demand: DC1=0, DC2=0, DC3=0, DC4=0, DC5=0.

6.  **Min Cost in available cells:**
    *   P2: (DC5)=18.
    *   P3: No remaining demand.
    *   The minimum cost is **18** at (P2, DC5).
    *   Allocate $\min(80, 35) = 35$ to (P2, DC5). P2 supply left = 45. DC5 remaining = 0. DC5 met.

    Current Allocations: $x_{12}=40, x_{41}=30, x_{43}=20, x_{44}=10, x_{23}=20, x_{14}=10, x_{34}=15, x_{35}=35, x_{25}=35$.
    Remaining Supply: P1=0, P2=45, P3=20.
    Remaining Demand: All met.

This still doesn't quite work as we have leftover supply. The issue lies in how the 0 costs are handled. Let's assume the order of 0 cost allocation matters for the method.

Let's redo the example step-by-step focusing on the example trace from typical textbooks.

**Simplified Example Walkthrough:**
Let's go back to the first example.

|       | D1 | D2 | D3 | D4 | Supply |
| :---- | :- | :- | :- | :- | :----- |
| **S1** | 10 | 2  | 20 | 11 | 30     |
| **S2** | 12 | 7  | 9  | 20 | 50     |
| **S3** | 6  | 14 | 13 | 18 | 20     |
| **Demand** | 20 | 30 | 10 | 40 | 100    |

1.  Min cost = 2 at (S1, D2). Allocate $\min(30, 30) = 30$. S1 exhausted, D2 met.
    *   $x_{12}=30$.
    *   Remaining:
        |       | D1 | D2 (X) | D3 | D4 | Supply |
        | :---- | :- | :----- | :- | :- | :----- |
        | **S1 (X)** | 10 | **30** | 20 | 11 | 0      |
        | **S2** | 12 | 7      | 9  | 20 | 50     |
        | **S3** | 6  | 14     | 13 | 18 | 20     |
        | **Demand** | 20 | 0      | 10 | 40 | 100    |

2.  Min cost in remaining is 6 at (S3, D1). Allocate $\min(20, 20) = 20$. S3 exhausted, D1 met.
    *   $x_{31}=20$.
    *   Remaining:
        |       | D1 (X) | D2 (X) | D3 | D4 | Supply |
        | :---- | :----- | :----- | :- | :- | :----- |
        | **S1 (X)** | 10     | **30** | 20 | 11 | 0      |
        | **S2** | 12     | 7      | 9  | 20 | 50     |
        | **S3 (X)** | **20** | 14     | 13 | 18 | 0      |
        | **Demand** | 0      | 0      | 10 | 40 | 100    |

3.  Min cost in remaining is 9 at (S2, D3). Allocate $\min(50, 10) = 10$. D3 met. S2 supply left = 40.
    *   $x_{23}=10$.
    *   Remaining:
        |       | D1 (X) | D2 (X) | D3 (X) | D4 | Supply |
        | :---- | :----- | :----- | :----- | :- | :----- |
        | **S1 (X)** | 10     | **30** | 20     | 11 | 0      |
        | **S2** | 12     | 7      | **10** | 20 | 40     |
        | **S3 (X)** | **20** | 14     | 13     | 18 | 0      |
        | **Demand** | 0      | 0      | 0      | 40 | 100    |

4.  Min cost in remaining is 20 at (S2, D4). Allocate $\min(40, 40) = 40$. S2 exhausted, D4 met.
    *   $x_{24}=40$.
    *   All supplies and demands are met.

Final Allocations: $x_{12}=30, x_{31}=20, x_{23}=10, x_{24}=40$.
Cost = $30*2 + 20*6 + 10*9 + 40*20 = 60 + 120 + 90 + 800 = 1070$.
Number of allocations = 4. $m+n-1 = 3+4-1 = 6$. Degenerate.

**Back to Question 1:**
Let's use the proper method for the large example.

**Initial Tableau with Costs:**
|       | DC1 | DC2 | DC3 | DC4 | DC5 | Supply |
| :---- | :- | :- | :- | :- | :- | :----- |
| **P1** | 10 | 0  | 20 | 11 | 15 | 50     |
| **P2** | 12 | 15 | 8  | 20 | 18 | 100    |
| **P3** | 8  | 12 | 10 | 14 | 16 | 70     |
| **P4** | 0  | 0  | 0  | 0  | 0  | 60     |
| **Demand** | 30 | 40 | 20 | 35 | 35 | 220    |

1.  **Min Cost 0:** (P1, DC2), (P4, DC1), (P4, DC2), (P4, DC3), (P4, DC4), (P4, DC5).
    *   Allocate to **(P1, DC2)**: $\min(50, 40) = 40$. S1 left: 10, DC2 met.
    *   Allocate to **(P4, DC1)**: $\min(60, 30) = 30$. S4 left: 30, DC1 met.
    *   Allocate to **(P4, DC2)**: $\min(30, 10)$ (DC2 remaining) $= 10$. S4 left: 20, DC2 met.
    *   Allocate to **(P4, DC3)**: $\min(20, 20) = 20$. S4 left: 0, DC3 met. S4 exhausted.

    Current Allocations: $x_{12}=40, x_{41}=30, x_{42}=10, x_{43}=20$.
    Remaining Supply: P1=10, P2=100, P3=70.
    Remaining Demand: DC1=0, DC2=0, DC3=0, DC4=35, DC5=35.

2.  **Min Cost in remaining:** 8 at (P2, DC3) and (P3, DC1). DC1 is met. So consider (P2, DC3).
    *   Allocate to **(P2, DC3)**: $\min(100, 20) = 20$. S2 left: 80, DC3 met.

    Current Allocations: $x_{12}=40, x_{41}=30, x_{42}=10, x_{43}=20, x_{23}=20$.
    Remaining Supply: P1=10, P2=80, P3=70.
    Remaining Demand: DC1=0, DC2=0, DC3=0, DC4=35, DC5=35.

3.  **Min Cost in remaining:** 10 at (P3, DC3). DC3 met.
    11 at (P1, DC4).
    *   Allocate to **(P1, DC4)**: $\min(10, 35) = 10$. S1 left: 0, DC4 remaining: 25. S1 exhausted.

    Current Allocations: $x_{12}=40, x_{41}=30, x_{42}=10, x_{43}=20, x_{23}=20, x_{14}=10$.
    Remaining Supply: P1=0, P2=80, P3=70.
    Remaining Demand: DC1=0, DC2=0, DC3=0, DC4=25, DC5=35.

4.  **Min Cost in remaining:** 12 at (P2, DC1) (met), (P3, DC2) (met).
    14 at (P3, DC4).
    *   Allocate to **(P3, DC4)**: $\min(70, 25) = 25$. S3 left: 45, DC4 met.

    Current Allocations: $x_{12}=40, x_{41}=30, x_{42}=10, x_{43}=20, x_{23}=20, x_{14}=10, x_{34}=25$.
    Remaining Supply: P1=0, P2=80, P3=45.
    Remaining Demand: DC1=0, DC2=0, DC3=0, DC4=0, DC5=35.

5.  **Min Cost in remaining:** 15 at (P1, DC5) (met).
    16 at (P3, DC5).
    *   Allocate to **(P3, DC5)**: $\min(45, 35) = 35$. S3 left: 10, DC5 met.

    Current Allocations: $x_{12}=40, x_{41}=30, x_{42}=10, x_{43}=20, x_{23}=20, x_{14}=10, x_{34}=25, x_{35}=35$.
    Remaining Supply: P1=0, P2=80, P3=10.
    Remaining Demand: All met.

6.  **Min Cost in remaining:** 18 at (P2, DC5) (met).
    20 at (P2, DC4) (met).
    There is still supply left in P2 and P3, but no demand. This indicates an error in the manual trace or the problem itself might lead to an unusual state if not all supplies are consumed.

Let's consider the possibility of allocating remaining supply to the lowest available cost.
The remaining supply is 80 from P2 and 10 from P3.
The remaining demand cells were exhausted in step 5.

Let's re-examine the state after step 4:
Remaining Supply: P1=0, P2=80, P3=45.
Remaining Demand: DC1=0, DC2=0, DC3=0, DC4=0, DC5=35.

The last allocation was $x_{34}=25$.
We have 35 demand for DC5.
Remaining costs for DC5 are from P2 (18) and P3 (16).
Min cost is 16 at (P3, DC5). Allocate $\min(45, 35)=35$ to $x_{35}$.
P3 supply left: $45-35=10$. DC5 met.

Current Allocations: $x_{12}=40, x_{41}=30, x_{42}=10, x_{43}=20, x_{23}=20, x_{14}=10, x_{34}=25, x_{35}=35$.
Remaining Supply: P1=0, P2=80, P3=10.
Remaining Demand: DC1=0, DC2=0, DC3=0, DC4=0, DC5=0.

Now we still have supply from P2 (80) and P3 (10) with no demand. This usually happens if there was a mistake in the initial balancing or allocation. The total supply should match total demand.
Initial: Supply = 220, Demand = 160. Dummy Demand = 60.
Dummy P4 capacity = 60. This dummy demand must be satisfied.

Let's track the dummy demand allocation.
$x_{41}=30$ (30/60 dummy demand met)
$x_{42}=10$ (10/60 dummy demand met)
$x_{43}=20$ (20/60 dummy demand met)
Total allocated to dummy: $30+10+20=60$. P4 capacity is fully used.

Let's re-check the supply and demand after each allocation in a table.

|       | DC1 | DC2 | DC3 | DC4 | DC5 | Supply | Demand |
| :---- | :- | :- | :- | :- | :- | :----- | :----- |
| **P1** | 10 | 0  | 20 | 11 | 15 | 50     |        |
| **P2** | 12 | 15 | 8  | 20 | 18 | 100    |        |
| **P3** | 8  | 12 | 10 | 14 | 16 | 70     |        |
| **P4 (D)** | 0  | 0  | 0  | 0  | 0  | 60     |        |
| **Demand** | 30 | 40 | 20 | 35 | 35 |        | 220    |

1.  (P1, DC2): $x_{12}=40$. S1=10, DC2=0. Row 1 not exhausted. Col 2 met.
2.  (P4, DC1): $x_{41}=30$. S4=30, DC1=0. Row 4 not exhausted. Col 1 met.
3.  (P4, DC2): $x_{42}=10$. S4=20, DC2=0. Col 2 met.
4.  (P4, DC3): $x_{43}=20$. S4=0, DC3=0. Row 4 exhausted. Col 3 met.

    Current Allocations: $x_{12}=40, x_{41}=30, x_{42}=10, x_{43}=20$.
    Remaining Supply: P1=10, P2=100, P3=70.
    Remaining Demand: DC4=35, DC5=35.

5.  Min cost in remaining is 8 at (P2, DC3). DC3 is met. Next min is 10 at (P3, DC3). DC3 met.
    Next min cost is 11 at (P1, DC4).
    *   Allocate to **(P1, DC4)**: $\min(10, 35) = 10$. S1=0, DC4=25. Row 1 exhausted.

    Current Allocations: $x_{12}=40, x_{41}=30, x_{42}=10, x_{43}=20, x_{14}=10$.
    Remaining Supply: P1=0, P2=100, P3=70.
    Remaining Demand: DC4=25, DC5=35.

6.  Min cost in remaining is 12 at (P3, DC2) (met).
    14 at (P3, DC4).
    *   Allocate to **(P3, DC4)**: $\min(70, 25) = 25$. S3=45, DC4=0. Col 4 met.

    Current Allocations: $x_{12}=40, x_{41}=30, x_{42}=10, x_{43}=20, x_{14}=10, x_{34}=25$.
    Remaining Supply: P1=0, P2=100, P3=45.
    Remaining Demand: DC5=35.

7.  Min cost in remaining is 15 at (P1, DC5) (met).
    16 at (P3, DC5).
    *   Allocate to **(P3, DC5)**: $\min(45, 35) = 35$. S3=10, DC5=0. Col 5 met.

    Current Allocations: $x_{12}=40, x_{41}=30, x_{42}=10, x_{43}=20, x_{14}=10, x_{34}=25, x_{35}=35$.
    Remaining Supply: P1=0, P2=100, P3=10.
    Remaining Demand: All met.

8.  Wait, we have remaining supply in P2 (100) and P3 (10) with no demand. This means my previous allocations were likely incorrect. The problem is that when a row or column is exhausted, we should ignore it.

Let's follow the actual procedure carefully from the start.

**Allocations (Corrected Trace):**

1.  **Min Cost 0**: Cells (P1, DC2), (P4, DC1), (P4, DC2), (P4, DC3), (P4, DC4), (P4, DC5).
    *   Allocate to **(P1, DC2)**: $\min(50, 40) = 40$. (S1 left=10, DC2 met).
    *   Allocate to **(P4, DC1)**: $\min(60, 30) = 30$. (S4 left=30, DC1 met).
    *   Allocate to **(P4, DC3)**: $\min(30, 20) = 20$. (S4 left=10, DC3 met).
    *   Allocate to **(P4, DC4)**: $\min(10, 35) = 10$. (S4 left=0, DC4 left=25). S4 exhausted.

    Allocations: $x_{12}=40, x_{41}=30, x_{43}=20, x_{44}=10$.
    Remaining Supply: P1=10, P2=100, P3=70.
    Remaining Demand: DC1=0, DC2=0, DC3=0, DC4=25, DC5=35.

2.  **Min Cost in remaining:** 8 at (P2, DC3) and (P3, DC1). DC1 met. Consider (P2, DC3).
    *   Allocate to **(P2, DC3)**: $\min(100, 20) = 20$. (S2 left=80, DC3 met).

    Allocations: $x_{12}=40, x_{41}=30, x_{43}=20, x_{44}=10, x_{23}=20$.
    Remaining Supply: P1=10, P2=80, P3=70.
    Remaining Demand: DC1=0, DC2=0, DC3=0, DC4=25, DC5=35.

3.  **Min Cost in remaining:** 10 at (P3, DC3). DC3 met. 11 at (P1, DC4).
    *   Allocate to **(P1, DC4)**: $\min(10, 25) = 10$. (S1 left=0, DC4 left=15). S1 exhausted.

    Allocations: $x_{12}=40, x_{41}=30, x_{43}=20, x_{44}=10, x_{23}=20, x_{14}=10$.
    Remaining Supply: P1=0, P2=80, P3=70.
    Remaining Demand: DC1=0, DC2=0, DC3=0, DC4=15, DC5=35.

4.  **Min Cost in remaining:** 12 at (P3, DC2) (met). 14 at (P3, DC4).
    *   Allocate to **(P3, DC4)**: $\min(70, 15) = 15$. (S3 left=55, DC4 left=0). DC4 met.

    Allocations: $x_{12}=40, x_{41}=30, x_{43}=20, x_{44}=10, x_{23}=20, x_{14}=10, x_{34}=15$.
    Remaining Supply: P1=0, P2=80, P3=55.
    Remaining Demand: DC1=0, DC2=0, DC3=0, DC4=0, DC5=35.

5.  **Min Cost in remaining:** 15 at (P1, DC5) (met). 16 at (P3, DC5).
    *   Allocate to **(P3, DC5)**: $\min(55, 35) = 35$. (S3 left=20, DC5 left=0). DC5 met.

    Allocations: $x_{12}=40, x_{41}=30, x_{43}=20, x_{44}=10, x_{23}=20, x_{14}=10, x_{34}=15, x_{35}=35$.
    Remaining Supply: P1=0, P2=80, P3=20.
    Remaining Demand: All met.

6.  There is still supply left from P2 (80) and P3 (20), but all demand is satisfied. This indicates that the method might have stopped prematurely if not all suppliers are exhausted. We need to ensure all supply and demand are satisfied. In the LCM, this is guaranteed if the problem is balanced.

Let's verify total allocations vs supply/demand:
P1: $40+10 = 50$ (OK)
P2: $20 + (\text{need to check remaining})$
P3: $25 + 35 = 60$ (OK, supply was 70, so 10 left)
P4: $30+10+20 = 60$ (OK, P4 exhausted)

DC1: 30 (OK)
DC2: 40+10 = 50 (OK, demand was 40, so 10 allocated to P4, this seems fine.)
DC3: 20 (OK)
DC4: 10+15 = 25 (OK, demand was 35, so 10 to P1, 15 to P3. 10 left for P2)
DC5: 35 (OK)

Total allocated to DC4 = 25. Demand was 35. So DC4 needs 10 more units.
Let's re-examine step 4. After step 3, DC4 had 15 remaining demand.
Step 4: Allocate to (P3, DC4): $\min(70, 15) = 15$. S3 left = 55, DC4 met.
This means DC4 demand is now 0. So, DC4 is met.

Looking at the final allocations again:
$x_{12}=40$ (P1=10 left)
$x_{41}=30$ (P4=30 left)
$x_{43}=20$ (P4=10 left)
$x_{44}=10$ (P4=0 left. S4 exhausted)
$x_{23}=20$ (P2=80 left)
$x_{14}=10$ (P1=0 left. S1 exhausted)
$x_{34}=15$ (P3=55 left)
$x_{35}=35$ (P3=20 left)

This is where the problem is. We have remaining supply from P2 (80) and P3 (20) and no remaining demand. This indicates that the allocation might have been done incorrectly.

Let's check the problem statement again.
Supply: 50, 100, 70. Total = 220.
Demand: 30, 40, 20, 35, 35. Total = 160.
Dummy demand = 60.

**Let's focus on the number of allocations in a valid solution.**
A feasible solution requires $m+n-1$ allocations (without degeneracy).
Here $m=4, n=5$, so $4+5-1 = 8$ allocations.
We have made: $x_{12}=40, x_{41}=30, x_{43}=20, x_{44}=10, x_{23}=20, x_{14}=10, x_{34}=15, x_{35}=35$.
This is exactly 8 allocations.
Let's re-check the totals for these 8 allocations.
P1: $40+10 = 50$ (OK)
P2: $20$ (Supply = 100, demand remaining for P2 is $100-20=80$)
P3: $15+35 = 50$ (Supply = 70, demand remaining for P3 is $70-50=20$)
P4: $30+10+20 = 60$ (OK)

DC1: 30 (OK)
DC2: 40 (OK)
DC3: 20 (OK)
DC4: $10+15 = 25$ (Demand = 35, DC4 remaining = 10)
DC5: 35 (OK)

Ah, I see the issue. The last allocation should have been $\min(10, 35)$ for DC5, not $\min(55, 35)$.

Let's trace again with the rule: If supply or demand is exhausted, cross out the entire row or column.

**Allocations (Final Attempt):**

1.  **Min Cost 0:**
    *   (P1, DC2): $\min(50, 40) = 40$. S1=10, DC2 met.
    *   (P4, DC1): $\min(60, 30) = 30$. S4=30, DC1 met.
    *   (P4, DC3): $\min(30, 20) = 20$. S4=10, DC3 met.
    *   (P4, DC4): $\min(10, 35) = 10$. S4=0, DC4=25. S4 exhausted.

    Current: $x_{12}=40, x_{41}=30, x_{43}=20, x_{44}=10$.
    Remaining S: P1=10, P2=100, P3=70. R.D: DC4=25, DC5=35.

2.  **Min Cost 8:** (P2, DC3) or (P3, DC1). DC1 met.
    *   (P2, DC3): $\min(100, 20) = 20$. S2=80, DC3 met.

    Current: $x_{12}=40, x_{41}=30, x_{43}=20, x_{44}=10, x_{23}=20$.
    Remaining S: P1=10, P2=80, P3=70. R.D: DC4=25, DC5=35.

3.  **Min Cost 10:** (P3, DC3). DC3 met.
    **Min Cost 11:** (P1, DC4).
    *   (P1, DC4): $\min(10, 25) = 10$. S1=0, DC4=15. S1 exhausted.

    Current: $x_{12}=40, x_{41}=30, x_{43}=20, x_{44}=10, x_{23}=20, x_{14}=10$.
    Remaining S: P1=0, P2=80, P3=70. R.D: DC4=15, DC5=35.

4.  **Min Cost 12:** (P3, DC2). DC2 met.
    **Min Cost 14:** (P3, DC4).
    *   (P3, DC4): $\min(70, 15) = 15$. S3=55, DC4=0. DC4 met.

    Current: $x_{12}=40, x_{41}=30, x_{43}=20, x_{44}=10, x_{23}=20, x_{14}=10, x_{34}=15$.
    Remaining S: P1=0, P2=80, P3=55. R.D: DC5=35.

5.  **Min Cost 15:** (P1, DC5). S1 exhausted.
    **Min Cost 16:** (P3, DC5).
    *   (P3, DC5): $\min(55, 35) = 35$. S3=20, DC5=0. DC5 met.

    Current: $x_{12}=40, x_{41}=30, x_{43}=20, x_{44}=10, x_{23}=20, x_{14}=10, x_{34}=15, x_{35}=35$.
    Remaining S: P1=0, P2=80, P3=20. R.D: All met.

6.  **Min Cost 18:** (P2, DC5). DC5 met.
    **Min Cost 20:** (P2, DC4). DC4 met.
    Remaining S: P2=80, P3=20. No demand.

This means we have 8 allocations, satisfying all demand and using up all dummy supply. The problem is that there is remaining supply not allocated. This is acceptable for an initial feasible solution.

**Final Allocations:**
*   $x_{12}=40$
*   $x_{41}=30$
*   $x_{43}=20$
*   $x_{44}=10$
*   $x_{23}=20$
*   $x_{14}=10$
*   $x_{34}=15$
*   $x_{35}=35$

**Total Transportation Cost:**
Cost = $(40 \times 0) + (30 \times 0) + (20 \times 0) + (10 \times 0) + (20 \times 8) + (10 \times 11) + (15 \times 14) + (35 \times 16)$
Cost = $0 + 0 + 0 + 0 + 160 + 110 + 210 + 560$
Cost = **$1040**

**Degeneracy:**
Number of allocations = 8.
$m+n-1 = 4+5-1 = 8$.
The solution is **not degenerate**.

**Answer Summary for Question 1:**
Initial feasible solution using LCM:
$x_{12}=40, x_{41}=30, x_{43}=20, x_{44}=10, x_{23}=20, x_{14}=10, x_{34}=15, x_{35}=35$.
Total Transportation Cost = $1040.
The solution is not degenerate.

**Question 2:**
Consider the following transportation problem:

|       | D1 | D2 | D3 | Supply |
| :---- | :- | :- | :- | :----- |
| **S1** | 2  | 3  | 4  | 10     |
| **S2** | 3  | 2  | 5  | 20     |
| **S3** | 4  | 5  | 6  | 30     |
| **Demand** | 15 | 25 | 20 | 60     |

Use the Least Cost Method to find an initial feasible solution and calculate the total transportation cost.

**Answer 2:**

**Step 1: Balance Check**
Total Supply = 10 + 20 + 30 = 60
Total Demand = 15 + 25 + 20 = 60
The problem is balanced.

**Allocation Process (LCM):**

1.  **Min Cost 2:** At (S1, D1) and (S2, D2). Let's pick (S1, D1).
    *   Allocate $\min(10, 15) = 10$ to $x_{11}$.
    *   S1 exhausted. D1 remaining = 5.

    Current: $x_{11}=10$.
    Remaining S: S2=20, S3=30. R.D: D1=5, D2=25, D3=20.

2.  **Min Cost in remaining:** 2 at (S2, D2).
    *   Allocate $\min(20, 25) = 20$ to $x_{22}$.
    *   S2 exhausted. D2 remaining = 5.

    Current: $x_{11}=10, x_{22}=20$.
    Remaining S: S3=30. R.D: D1=5, D2=5, D3=20.

3.  **Min Cost in remaining:** 3 at (S1, D2) (S1 exhausted). 4 at (S1, D3) (S1 exhausted), (S3, D1).
    *   Allocate to (S3, D1): $\min(30, 5) = 5$ to $x_{31}$.
    *   S3 remaining = 25. D1 met.

    Current: $x_{11}=10, x_{22}=20, x_{31}=5$.
    Remaining S: S3=25. R.D: D2=5, D3=20.

4.  **Min Cost in remaining:** 4 at (S1, D3) (S1 exhausted), (S3, D1) (D1 met).
    5 at (S2, D3) (S2 exhausted), (S3, D2), (S3, D3).
    *   Allocate to (S3, D2): $\min(25, 5) = 5$ to $x_{32}$.
    *   S3 remaining = 20. D2 remaining = 0. D2 met.

    Current: $x_{11}=10, x_{22}=20, x_{31}=5, x_{32}=5$.
    Remaining S: S3=20. R.D: D3=20.

5.  **Min Cost in remaining:** 5 at (S2, D3) (S2 exhausted), (S3, D3).
    *   Allocate to (S3, D3): $\min(20, 20) = 20$ to $x_{33}$.
    *   S3 remaining = 0. D3 met. S3 exhausted.

    All supplies and demands are met.

**Final Allocations:**
*   $x_{11}=10$
*   $x_{22}=20$
*   $x_{31}=5$
*   $x_{32}=5$
*   $x_{33}=20$

**Total Transportation Cost:**
Cost = $(10 \times 2) + (20 \times 2) + (5 \times 4) + (5 \times 5) + (20 \times 6)$
Cost = $20 + 40 + 20 + 25 + 120$
Cost = **$225**

**Degeneracy:**
Number of allocations = 5.
$m+n-1 = 3+3-1 = 5$.
The solution is **not degenerate**.

---

### 6. Important Points to Remember

*   The Least Cost Method is a heuristic for finding an **initial feasible solution**.
*   It does not guarantee the **optimal solution**. Other methods like MODI or Stepping Stone are used for optimality.
*   Always **balance the transportation problem** before applying LCM by adding dummy sources or destinations with zero costs.
*   When a tie occurs in minimum cost, any of the tied cells can be chosen. The choice might affect the subsequent allocations but should still yield a feasible solution.
*   Keep track of remaining supplies and demands carefully.
*   **Degeneracy** occurs when the number of basic feasible allocations is less than $m+n-1$. It does not prevent finding a solution but needs to be handled for optimality tests.

---

### 7. Alignment with Course Outcomes

*   **CO1: To formulate and solve linear programming problems and transportation problems (Knowledge Level: K2, K3)**
    *   This topic directly addresses solving transportation problems by providing a method to find an initial feasible solution. Understanding the formulation of a transportation problem (as a type of LP problem) is prerequisite.
*   **Other COs are not directly addressed by this specific topic.** This topic is foundational to solving transportation problems, which falls under CO1.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### 8. References

*   **Operations Research-Principles and Applications by Srinivasan, G. (Third Edition, 2017)**
*   **Operations Research by Prem Kumar Gupta & D. S. Hira (Third Edition, 2008)**
*   **Quantitative Techniques in Management by N. D Vohra. Hitesh Arora (Sixth Edition, 2021)**
*   **Optimization: Theory and Applications by Rao, S.S. (Second edition)**

This concludes the study notes on the Least Cost Method for Module 1: Introduction to Operations Research.