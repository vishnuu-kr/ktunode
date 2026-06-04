---
title: "Initial Basic Feasible Solution"
subject: "QUANTITATIVE TECHNIQUES FOR ENGINEERS"
module: "Module 2: Transportation Problem: Mathematical Formulation"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463a6b"
status: "completed"
scrapedAt: "2026-05-20T18:07:27.338Z"
---
# QUANTITATIVE TECHNIQUES FOR ENGINEERS

## Module 2: Transportation Problem: Mathematical Formulation

### Topic: Initial Basic Feasible Solution

---

### **1. Introduction to the Transportation Problem**

The transportation problem is a special type of linear programming problem dealing with the transportation of goods from a set of sources to a set of destinations. The objective is to minimize the total transportation cost while satisfying supply at sources and demand at destinations.

**Key Concepts:**

*   **Sources (Origins):** Locations from which goods are shipped.
*   **Destinations (Terminals):** Locations to which goods are shipped.
*   **Supply:** The quantity of goods available at each source.
*   **Demand:** The quantity of goods required at each destination.
*   **Transportation Cost:** The cost of shipping one unit of goods from a source to a destination.

**Mathematical Formulation (Brief Overview - Detailed in other topics):**

Let:
*   $m$ be the number of sources.
*   $n$ be the number of destinations.
*   $S_i$ be the supply at source $i$ ($i = 1, 2, \dots, m$).
*   $D_j$ be the demand at destination $j$ ($j = 1, 2, \dots, n$).
*   $C_{ij}$ be the cost of transporting one unit from source $i$ to destination $j$.
*   $X_{ij}$ be the number of units transported from source $i$ to destination $j$.

**Objective Function:** Minimize $\sum_{i=1}^{m} \sum_{j=1}^{n} C_{ij}X_{ij}$

**Constraints:**
*   **Supply Constraints:** $\sum_{j=1}^{n} X_{ij} \le S_i$ for each source $i$.
*   **Demand Constraints:** $\sum_{i=1}^{m} X_{ij} \ge D_j$ for each destination $j$.
*   **Non-negativity:** $X_{ij} \ge 0$ for all $i, j$.

**Balanced vs. Unbalanced Transportation Problem:**

*   **Balanced:** Total supply equals total demand ($\sum S_i = \sum D_j$).
*   **Unbalanced:** Total supply does not equal total demand. If supply > demand, a dummy destination is added. If demand > supply, a dummy source is added. The costs associated with dummy origins/destinations are usually zero.

---

### **2. Initial Basic Feasible Solution (IBFS)**

An IBFS is a starting point for solving the transportation problem. It's a feasible solution that satisfies the constraints, and it is "basic" in the sense that it involves a specific number of non-zero allocations.

**Definition:** A feasible solution to a transportation problem is called a **basic feasible solution** if it has exactly $m+n-1$ allocated cells (non-zero $X_{ij}$) and these allocated cells do not form a closed loop.

*   **Why $m+n-1$ allocations?** This is a general property of transportation problems and is related to the number of basic variables in a linear programming problem. In a balanced transportation problem with $m$ sources and $n$ destinations, there are $m+n$ constraints. If all constraints are active (binding), we expect $m+n$ basic variables. However, one constraint is linearly dependent on the others (e.g., if all supplies are met and all demands are met, the sum of supply constraints equals the sum of demand constraints). Thus, we need $m+n-1$ basic variables.

*   **What is a "closed loop"?** A closed loop (or cycle) is formed by four or more allocated cells arranged in a rectangular pattern. For example, if cells $(i_1, j_1)$, $(i_1, j_2)$, $(i_2, j_1)$, and $(i_2, j_2)$ are allocated, they form a closed loop. The presence of a closed loop implies that the allocations are not independent, and we can shift units around the loop without changing the total supply and demand met, potentially reducing cost.

**Importance of IBFS:**

*   Provides an initial feasible solution to start the optimization process.
*   Forms the basis for iterative improvement methods like the Stepping Stone Method or the MODI (Modified Distribution) Method.

---

### **3. Methods for Finding an Initial Basic Feasible Solution**

Several methods exist to find an IBFS. The goal is to make allocations such that supply and demand constraints are met, and we obtain exactly $m+n-1$ allocations without forming a closed loop.

#### **3.1. The Northwest Corner Rule**

This is the simplest method to obtain an IBFS. It does not consider the transportation costs.

**Steps:**

1.  Start with the cell in the **northwest corner** of the transportation tableau (cell (1,1)).
2.  Allocate as much as possible to this cell, subject to the supply at the source and the demand at the destination.
    *   Allocate $\min(S_1, D_1)$ to $X_{11}$.
3.  If the supply at source 1 is exhausted ($S_1 = X_{11}$), move down to the next row (source 2). The remaining demand at destination 1 is $D_1 - X_{11}$.
4.  If the demand at destination 1 is satisfied ($D_1 = X_{11}$), move to the next column (destination 2). The remaining supply at source 1 is $S_1 - X_{11}$.
5.  If both supply and demand are met simultaneously ($S_1 = D_1 = X_{11}$), move diagonally to the next cell (e.g., from (1,1) to (2,2)) and satisfy the remaining supply/demand for the next row/column.
6.  Continue this process until all supplies are exhausted and all demands are met.

**Important Note:** The Northwest Corner Rule can result in a large number of zero allocations in the optimal solution and may not be cost-effective.

**Example (Northwest Corner Rule):**

Consider a transportation problem with 3 sources and 3 destinations.

|        | D1 (8) | D2 (10) | D3 (12) | Supply |
| :----- | :----- | :------ | :------ | :----- |
| S1 (15) | 2      | 3       | 1       | 15     |
| S2 (10) | 4      | 1       | 3       | 10     |
| S3 (5)  | 5      | 2       | 4       | 5      |
| Demand | 8      | 10      | 12      | 30     |

**Tableau:**

|        | D1 (8) | D2 (10) | D3 (12) | Supply |
| :----- | :----- | :------ | :------ | :----- |
| S1 (15) |        |         |         | 15     |
| S2 (10) |        |         |         | 10     |
| S3 (5)  |        |         |         | 5      |
| Demand | 8      | 10      | 12      | 30     |

**Applying Northwest Corner Rule:**

1.  **Cell (S1, D1):** Supply = 15, Demand = 8. Allocate $\min(15, 8) = 8$.
    *   $X_{11} = 8$.
    *   Remaining Supply for S1 = 15 - 8 = 7.
    *   Remaining Demand for D1 = 8 - 8 = 0.
    *   D1 is satisfied. Move to the next column (D2).

|        | D1 (8) | D2 (10) | D3 (12) | Supply |
| :----- | :----- | :------ | :------ | :----- |
| S1 (15) | **8**  |         |         | 15     |
| S2 (10) |        |         |         | 10     |
| S3 (5)  |        |         |         | 5      |
| Demand | 8      | 10      | 12      | 30     |

2.  **Cell (S1, D2):** Current Supply for S1 = 7, Demand for D2 = 10. Allocate $\min(7, 10) = 7$.
    *   $X_{12} = 7$.
    *   Remaining Supply for S1 = 7 - 7 = 0.
    *   Remaining Demand for D2 = 10 - 7 = 3.
    *   S1 is exhausted. Move to the next row (S2).

|        | D1 (8) | D2 (10) | D3 (12) | Supply |
| :----- | :----- | :------ | :------ | :----- |
| S1 (15) | **8**  | **7**   |         | 15     |
| S2 (10) |        |         |         | 10     |
| S3 (5)  |        |         |         | 5      |
| Demand | 8      | 10      | 12      | 30     |

3.  **Cell (S2, D2):** Current Supply for S2 = 10, Remaining Demand for D2 = 3. Allocate $\min(10, 3) = 3$.
    *   $X_{22} = 3$.
    *   Remaining Supply for S2 = 10 - 3 = 7.
    *   Remaining Demand for D2 = 3 - 3 = 0.
    *   D2 is satisfied. Move to the next column (D3).

|        | D1 (8) | D2 (10) | D3 (12) | Supply |
| :----- | :----- | :------ | :------ | :----- |
| S1 (15) | **8**  | **7**   |         | 15     |
| S2 (10) |        | **3**   |         | 10     |
| S3 (5)  |        |         |         | 5      |
| Demand | 8      | 10      | 12      | 30     |

4.  **Cell (S2, D3):** Current Supply for S2 = 7, Demand for D3 = 12. Allocate $\min(7, 12) = 7$.
    *   $X_{23} = 7$.
    *   Remaining Supply for S2 = 7 - 7 = 0.
    *   Remaining Demand for D3 = 12 - 7 = 5.
    *   S2 is exhausted. Move to the next row (S3).

|        | D1 (8) | D2 (10) | D3 (12) | Supply |
| :----- | :----- | :------ | :------ | :----- |
| S1 (15) | **8**  | **7**   |         | 15     |
| S2 (10) |        | **3**   | **7**   | 10     |
| S3 (5)  |        |         |         | 5      |
| Demand | 8      | 10      | 12      | 30     |

5.  **Cell (S3, D3):** Current Supply for S3 = 5, Remaining Demand for D3 = 5. Allocate $\min(5, 5) = 5$.
    *   $X_{33} = 5$.
    *   Remaining Supply for S3 = 5 - 5 = 0.
    *   Remaining Demand for D3 = 5 - 5 = 0.
    *   S3 is exhausted and D3 is satisfied.

**Final IBFS (Northwest Corner Rule):**

|        | D1 (8) | D2 (10) | D3 (12) | Supply |
| :----- | :----- | :------ | :------ | :----- |
| S1 (15) | **8**  | **7**   | 0       | 15     |
| S2 (10) | 0      | **3**   | **7**   | 10     |
| S3 (5)  | 0      | 0       | **5**   | 5      |
| Demand | 8      | 10      | 12      | 30     |

**Allocations:** $X_{11}=8$, $X_{12}=7$, $X_{22}=3$, $X_{23}=7$, $X_{33}=5$.
Number of allocations = 5.
$m+n-1 = 3+3-1 = 5$.
The allocations do not form a closed loop. This is a valid IBFS.

**Total Cost:**
Cost = $(8 \times 2) + (7 \times 3) + (3 \times 1) + (7 \times 3) + (5 \times 4)$
Cost = $16 + 21 + 3 + 21 + 20 = 81$.

---

#### **3.2. The Least Cost Method (LCM)**

This method attempts to make allocations to the cheapest routes first, aiming for a lower initial cost.

**Steps:**

1.  Identify the cell with the **minimum transportation cost** in the entire tableau.
2.  Allocate as much as possible to this cell, subject to the supply and demand constraints.
3.  After allocation, if the supply of the source is exhausted, delete that row. If the demand of the destination is satisfied, delete that column.
4.  If both supply and demand are met simultaneously, delete either the row or the column (but not both, to avoid losing $m+n-1$ cells).
5.  Repeat steps 1-4 with the remaining rows and columns until all supply and demand are met.

**Important Note:** LCM is generally better than the Northwest Corner Rule in terms of initial cost but doesn't guarantee optimality or an IBFS if not carefully implemented (especially regarding the $m+n-1$ rule and no loops).

**Example (Least Cost Method):**

Using the same problem:

|        | D1 (8) | D2 (10) | D3 (12) | Supply |
| :----- | :----- | :------ | :------ | :----- |
| S1 (15) | 2      | 3       | 1       | 15     |
| S2 (10) | 4      | 1       | 3       | 10     |
| S3 (5)  | 5      | 2       | 4       | 5      |
| Demand | 8      | 10      | 12      | 30     |

**Tableau:**

|        | D1 (8) | D2 (10) | D3 (12) | Supply |
| :----- | :----- | :------ | :------ | :----- |
| S1 (15) | 2      | 3       | 1       | 15     |
| S2 (10) | 4      | 1       | 3       | 10     |
| S3 (5)  | 5      | 2       | 4       | 5      |
| Demand | 8      | 10      | 12      | 30     |

**Applying Least Cost Method:**

1.  **Minimum Cost:** The minimum cost is 1 at cell (S2, D2).
    *   Allocate $\min(S_2=10, D_2=10) = 10$ to $X_{22}$.
    *   $X_{22} = 10$.
    *   Supply of S2 is exhausted (10-10=0).
    *   Demand of D2 is satisfied (10-10=0).
    *   Delete row S2 and column D2.

|        | D1 (8) | D3 (12) | Supply |
| :----- | :----- | :------ | :----- |
| S1 (15) | 2      | 1       | 15     |
| S3 (5)  | 5      | 4       | 5      |
| Demand | 8      | 12      | 20     |

2.  **Minimum Cost:** The minimum cost among the remaining cells is 1 at cell (S1, D3).
    *   Allocate $\min(S_1=15, D_3=12) = 12$ to $X_{13}$.
    *   $X_{13} = 12$.
    *   Demand of D3 is satisfied (12-12=0).
    *   Delete column D3.

|        | D1 (8) | Supply |
| :----- | :----- | :----- |
| S1 (15) | 2      | 3      |
| S3 (5)  | 5      | 5      |
| Demand | 8      | 5      |

3.  **Minimum Cost:** The minimum cost among the remaining cells is 2 at cell (S1, D1).
    *   Allocate $\min(S_1=3, D_1=8) = 3$ to $X_{11}$.
    *   $X_{11} = 3$.
    *   Supply of S1 is exhausted (3-3=0).
    *   Delete row S1.

|        | D1 (8) | Supply |
| :----- | :----- | :----- |
| S3 (5)  | 5      | 5      |
| Demand | 5      | 5      |

4.  **Minimum Cost:** The only remaining cell is (S3, D1) with cost 5.
    *   Allocate $\min(S_3=5, D_1=5) = 5$ to $X_{31}$.
    *   $X_{31} = 5$.
    *   Supply of S3 is exhausted (5-5=0).
    *   Demand of D1 is satisfied (5-5=0).

**Final IBFS (Least Cost Method):**

The allocations are: $X_{22}=10$, $X_{13}=12$, $X_{11}=3$, $X_{31}=5$.
We need to reconstruct the full tableau with these allocations:

|        | D1 (8) | D2 (10) | D3 (12) | Supply |
| :----- | :----- | :------ | :------ | :----- |
| S1 (15) | **3**  | 0       | **12**  | 15     |
| S2 (10) | 0      | **10**  | 0       | 10     |
| S3 (5)  | **5**  | 0       | 0       | 5      |
| Demand | 8      | 10      | 12      | 30     |

**Allocations:** $X_{11}=3$, $X_{13}=12$, $X_{22}=10$, $X_{31}=5$.
Number of allocations = 4.
$m+n-1 = 3+3-1 = 5$.
We are short one allocation. This can happen with LCM. We need to make a dummy allocation of 0 to one of the remaining cells to get $m+n-1$ allocations.
Let's choose cell (S2, D3) to make a zero allocation.

|        | D1 (8) | D2 (10) | D3 (12) | Supply |
| :----- | :----- | :------ | :------ | :----- |
| S1 (15) | **3**  | 0       | **12**  | 15     |
| S2 (10) | 0      | **10**  | **0**   | 10     |
| S3 (5)  | **5**  | 0       | 0       | 5      |
| Demand | 8      | 10      | 12      | 30     |

**Final IBFS (LCM with dummy allocation):**
$X_{11}=3$, $X_{13}=12$, $X_{22}=10$, $X_{23}=0$ (dummy), $X_{31}=5$.
Number of allocations = 5.
Check for loops: The allocations are at (1,1), (1,3), (2,2), (2,3), (3,1). No closed loop is formed. This is a valid IBFS.

**Total Cost:**
Cost = $(3 \times 2) + (12 \times 1) + (10 \times 1) + (0 \times 3) + (5 \times 5)$
Cost = $6 + 12 + 10 + 0 + 25 = 53$.

**Observation:** LCM resulted in a significantly lower initial cost (53) compared to the Northwest Corner Rule (81).

---

#### **3.3. The Vogel's Approximation Method (VAM)**

VAM is generally considered the best method for finding a good IBFS, as it aims to minimize the initial cost by considering the costs in each row and column.

**Steps:**

1.  For each row and column, calculate the **penalty (or difference)**. The penalty is the difference between the two smallest costs in that row or column.
2.  Identify the row or column with the **largest penalty**.
3.  In the selected row or column, make an allocation to the cell with the **smallest cost**. Allocate the maximum possible quantity to this cell (limited by supply and demand).
4.  If the supply of the source is exhausted, delete that row. If the demand of the destination is satisfied, delete that column.
5.  If both are met simultaneously, delete either the row or the column.
6.  Recalculate the penalties for the remaining rows and columns.
7.  Repeat steps 2-6 until all supplies are exhausted and all demands are met.

**Important Note:** VAM tends to produce an IBFS with a lower cost, often close to the optimal solution, and is less likely to have degenerate solutions (too many zero allocations).

**Example (Vogel's Approximation Method):**

Using the same problem:

|        | D1 (8) | D2 (10) | D3 (12) | Supply |
| :----- | :----- | :------ | :------ | :----- |
| S1 (15) | 2      | 3       | 1       | 15     |
| S2 (10) | 4      | 1       | 3       | 10     |
| S3 (5)  | 5      | 2       | 4       | 5      |
| Demand | 8      | 10      | 12      | 30     |

**Tableau:**

|        | D1 (8) | D2 (10) | D3 (12) | Supply |
| :----- | :----- | :------ | :------ | :----- |
| S1 (15) | 2      | 3       | 1       | 15     |
| S2 (10) | 4      | 1       | 3       | 10     |
| S3 (5)  | 5      | 2       | 4       | 5      |
| Demand | 8      | 10      | 12      | 30     |

**Iteration 1:**

*   **Row Penalties:**
    *   S1: Smallest costs are 1 and 2. Penalty = 2 - 1 = 1.
    *   S2: Smallest costs are 1 and 3. Penalty = 3 - 1 = 2.
    *   S3: Smallest costs are 2 and 4. Penalty = 4 - 2 = 2.
*   **Column Penalties:**
    *   D1: Smallest costs are 2 and 4. Penalty = 4 - 2 = 2.
    *   D2: Smallest costs are 1 and 2. Penalty = 2 - 1 = 1.
    *   D3: Smallest costs are 1 and 3. Penalty = 3 - 1 = 2.

*   **Largest Penalty:** 2. This occurs in rows S2, S3, and columns D1, D3. Let's choose the first occurrence, **Row S2**.
*   **Smallest Cost in Row S2:** The smallest cost is 1 at cell (S2, D2).
*   **Allocate to (S2, D2):** Allocate $\min(S_2=10, D_2=10) = 10$.
    *   $X_{22} = 10$.
    *   S2 is exhausted (10-10=0).
    *   D2 is satisfied (10-10=0).
    *   Delete Row S2 and Column D2.

|        | D1 (8) | D3 (12) | Supply |
| :----- | :----- | :------ | :----- |
| S1 (15) | 2      | 1       | 15     |
| S3 (5)  | 5      | 4       | 5      |
| Demand | 8      | 12      | 20     |

**Iteration 2:**

*   **Row Penalties:**
    *   S1: Smallest costs are 1 and 2. Penalty = 2 - 1 = 1.
    *   S3: Smallest costs are 5 and 4. Penalty = 5 - 4 = 1.
*   **Column Penalties:**
    *   D1: Smallest costs are 2 and 5. Penalty = 5 - 2 = 3.
    *   D3: Smallest costs are 1 and 4. Penalty = 4 - 1 = 3.

*   **Largest Penalty:** 3. This occurs in columns D1 and D3. Let's choose **Column D1**.
*   **Smallest Cost in Column D1:** The smallest cost is 2 at cell (S1, D1).
*   **Allocate to (S1, D1):** Allocate $\min(S_1=15, D_1=8) = 8$.
    *   $X_{11} = 8$.
    *   D1 is satisfied (8-8=0).
    *   Delete Column D1.

|        | D3 (12) | Supply |
| :----- | :------ | :----- |
| S1 (15) | 1       | 7      |
| S3 (5)  | 4       | 5      |
| Demand | 12      | 5      |

**Iteration 3:**

*   **Row Penalties:**
    *   S1: Only one cost = 1. Penalty = 0 (or consider next smallest cost if available). Let's consider the difference between the two smallest.
    *   S3: Only one cost = 4. Penalty = 0.
*   **Column Penalties:**
    *   D3: Smallest costs are 1 and 4. Penalty = 4 - 1 = 3.

*   **Largest Penalty:** 3. This occurs in **Column D3**.
*   **Smallest Cost in Column D3:** The smallest cost is 1 at cell (S1, D3).
*   **Allocate to (S1, D3):** Allocate $\min(S_1=7, D_3=12) = 7$.
    *   $X_{13} = 7$.
    *   S1 is exhausted (7-7=0).
    *   Remaining Demand for D3 = 12 - 7 = 5.
    *   Delete Row S1.

|        | D3 (12) | Supply |
| :----- | :------ | :----- |
| S3 (5)  | 4       | 5      |
| Demand | 5       | 5      |

**Iteration 4:**

*   The only remaining cell is (S3, D3).
*   **Allocate to (S3, D3):** Allocate $\min(S_3=5, D_3=5) = 5$.
    *   $X_{33} = 5$.
    *   S3 is exhausted (5-5=0).
    *   D3 is satisfied (5-5=0).

**Final IBFS (Vogel's Approximation Method):**

The allocations are: $X_{22}=10$, $X_{11}=8$, $X_{13}=7$, $X_{33}=5$.
Reconstructing the full tableau:

|        | D1 (8) | D2 (10) | D3 (12) | Supply |
| :----- | :----- | :------ | :------ | :----- |
| S1 (15) | **8**  | 0       | **7**   | 15     |
| S2 (10) | 0      | **10**  | 0       | 10     |
| S3 (5)  | 0      | 0       | **5**   | 5      |
| Demand | 8      | 10      | 12      | 30     |

**Allocations:** $X_{11}=8$, $X_{13}=7$, $X_{22}=10$, $X_{33}=5$.
Number of allocations = 4.
$m+n-1 = 3+3-1 = 5$.
We need one more allocation. The remaining cells are (1,2), (2,1), (2,3), (3,1), (3,2). Let's pick any of these and make a zero allocation. For example, (S2, D1).

|        | D1 (8) | D2 (10) | D3 (12) | Supply |
| :----- | :----- | :------ | :------ | :----- |
| S1 (15) | **8**  | 0       | **7**   | 15     |
| S2 (10) | **0**  | **10**  | 0       | 10     |
| S3 (5)  | 0      | 0       | **5**   | 5      |
| Demand | 8      | 10      | 12      | 30     |

**Final IBFS (VAM with dummy allocation):**
$X_{11}=8$, $X_{13}=7$, $X_{21}=0$ (dummy), $X_{22}=10$, $X_{33}=5$.
Number of allocations = 5.
Check for loops: Allocations are at (1,1), (1,3), (2,1), (2,2), (3,3). No closed loop is formed. This is a valid IBFS.

**Total Cost:**
Cost = $(8 \times 2) + (7 \times 1) + (0 \times 4) + (10 \times 1) + (5 \times 4)$
Cost = $16 + 7 + 0 + 10 + 20 = 53$.

**Observation:** In this case, VAM yielded the same initial cost as LCM, which is quite good.

---

### **4. Degeneracy in Transportation Problems**

**Definition:** A basic feasible solution is said to be **degenerate** if the number of non-zero allocations is less than $m+n-1$.

**Consequences of Degeneracy:**

*   If a solution is degenerate, the standard optimization methods (like Stepping Stone or MODI) may not work correctly. They rely on having exactly $m+n-1$ independent basic variables.
*   The process of finding the next BFS might get stuck or fail to improve the solution because there aren't enough non-zero allocations to form the required basis.

**How to Handle Degeneracy:**

To overcome degeneracy, we introduce **artificial allocations of zero** to some of the unoccupied cells. These zero allocations are treated as basic variables and are made in such a way that they do not form a closed loop and the total number of allocations becomes exactly $m+n-1$.

*   **Rule for adding zero allocations:** Add a minimum number of zero allocations to any unoccupied cell(s) such that the total number of allocations becomes $m+n-1$. Ensure that these zero allocations do not create a closed loop with existing allocations.

**Example of Degeneracy:**

Suppose after applying a method, we get the following allocations:

|        | D1 | D2 | D3 | Supply |
| :----- | :-- | :-- | :-- | :----- |
| S1     | **10** | 0  |     | 10     |
| S2     | 0  | **5** | **5** | 10     |
| S3     |     |     |     | 0      |
| Demand | 10 | 5  | 5  | 20     |

Here, $m=2$, $n=3$. So $m+n-1 = 2+3-1 = 4$.
We have only 3 non-zero allocations: $X_{11}=10$, $X_{22}=5$, $X_{23}=5$.
This solution is degenerate. We need one more allocation of zero.
The unoccupied cells are (1,2), (1,3), (2,1), (3,1), (3,2), (3,3).

We can add a zero allocation to cell (S1, D2).
$X_{12} = 0$.

|        | D1 | D2 | D3 | Supply |
| :----- | :-- | :-- | :-- | :----- |
| S1     | **10** | **0** |     | 10     |
| S2     | 0  | **5** | **5** | 10     |
| S3     |     |     |     | 0      |
| Demand | 10 | 5  | 5  | 20     |

Now we have 4 allocations: (1,1), (1,2), (2,2), (2,3). Check for loops: No loops.
This is now a non-degenerate basic feasible solution.

---

### **5. Importance and Relation to Course Outcomes**

*   **CO1: To formulate and solve linear programming and transportation problems (Knowledge Level: K4)**
    *   Understanding how to find an Initial Basic Feasible Solution is the **first step** in solving transportation problems, which are a class of linear programming problems. Methods like LCM and VAM provide a starting point for applying optimization algorithms to find the minimum cost. VAM, in particular, aligns with the "solving" aspect by providing a near-optimal starting point.

*   **Implicitly, this topic supports CO2, CO3, CO4, CO5 by establishing foundational skills.** While this specific topic doesn't directly address decision theory, sequencing, game theory, or queuing, it builds the analytical and problem-solving skills necessary to tackle those areas. The ability to systematically approach and find initial solutions to complex problems is a transferable skill.

**Knowledge Level (K4 - Analyzing):** Students need to analyze the structure of the transportation problem (supply, demand, costs) and apply different analytical methods (Northwest Corner, LCM, VAM) to generate a feasible solution. They also need to analyze the concept of degeneracy and how to handle it.

---

### **6. Practice Questions and Exercises**

**Question 1:**

Find an Initial Basic Feasible Solution to the following transportation problem using:
a) The Northwest Corner Rule
b) The Least Cost Method
c) Vogel's Approximation Method

The costs, supplies, and demands are given in the table below:

|        | D1 (7) | D2 (12) | D3 (9) | Supply |
| :----- | :----- | :------ | :----- | :----- |
| S1 (10) | 5      | 1       | 7      | 10     |
| S2 (15) | 6      | 3       | 4      | 15     |
| S3 (12) | 2      | 5       | 8      | 12     |
| Demand | 7      | 12      | 9      | 30     |

Calculate the total transportation cost for each method.

**Answer 1 (Detailed Breakdown):**

Total Supply = 10 + 15 + 12 = 37
Total Demand = 7 + 12 + 9 = 28
The problem is unbalanced. Supply > Demand. Add a dummy destination D4 with demand = 37 - 28 = 9 and zero transportation costs.

**Balanced Tableau:**

|        | D1 (7) | D2 (12) | D3 (9) | D4 (9) | Supply |
| :----- | :----- | :------ | :----- | :----- | :----- |
| S1 (10) | 5      | 1       | 7      | 0      | 10     |
| S2 (15) | 6      | 3       | 4      | 0      | 15     |
| S3 (12) | 2      | 5       | 8      | 0      | 12     |
| Demand | 7      | 12      | 9      | 9      | 37     |

$m=3$, $n=4$. $m+n-1 = 3+4-1 = 6$ allocations needed.

**a) Northwest Corner Rule:**

1.  (S1, D1): Allocate $\min(10, 7) = 7$. $X_{11}=7$. S1 rem=3, D1 satisfied. Move to D2.
2.  (S1, D2): Allocate $\min(3, 12) = 3$. $X_{12}=3$. S1 exhausted. Move to S2.
3.  (S2, D2): Allocate $\min(15, 9) = 9$. $X_{22}=9$. D2 rem=3. Move to D3.
4.  (S2, D3): Allocate $\min(6, 9) = 6$. $X_{23}=6$. S2 rem=9. Move to D4.
5.  (S2, D4): Allocate $\min(9, 9) = 9$. $X_{24}=9$. S2 exhausted, D4 satisfied. Move to S3, D4 (but D4 is done).
6.  (S3, D3): Allocate $\min(12, 3) = 3$. $X_{33}=3$. D3 rem=6. Move to D4.
7.  Wait, I missed something. When S2 is exhausted at (S2, D4), and D4 is also satisfied, we should have moved to the next *available* row/column combination. Let's retrace step 5.

**Corrected Northwest Corner Rule:**

1.  (S1, D1): Allocate $\min(10, 7) = 7$. $X_{11}=7$. S1 rem=3, D1 satisfied. Move to D2.
2.  (S1, D2): Allocate $\min(3, 12) = 3$. $X_{12}=3$. S1 exhausted. Move to S2.
3.  (S2, D2): Allocate $\min(15, 12-3=9) = 9$. $X_{22}=9$. D2 rem=3. Move to D3.
4.  (S2, D3): Allocate $\min(15-9=6, 9) = 6$. $X_{23}=6$. S2 rem=0. Move to S3.
5.  (S3, D3): Allocate $\min(12, 9-6=3) = 3$. $X_{33}=3$. D3 rem=0. D3 satisfied. Move to D4.
6.  (S3, D4): Allocate $\min(12-3=9, 9) = 9$. $X_{34}=9$. S3 exhausted, D4 satisfied.

**Allocations:** $X_{11}=7$, $X_{12}=3$, $X_{22}=9$, $X_{23}=6$, $X_{33}=3$, $X_{34}=9$.
Number of allocations = 6. $m+n-1 = 3+4-1=6$. No loops.
**Cost:** $(7 \times 5) + (3 \times 1) + (9 \times 3) + (6 \times 4) + (3 \times 8) + (9 \times 0) = 35 + 3 + 27 + 24 + 24 + 0 = 113$.

**b) Least Cost Method:**

1.  Min cost = 0 at (S1, D4) and (S2, D4), (S3, D4). Let's pick (S1, D4). Allocate $\min(10, 9)=9$. $X_{14}=9$. S1 rem=1. D4 rem=0. Delete D4.
2.  Remaining Tableau:
    |        | D1 (7) | D2 (12) | D3 (9) | Supply |
    | :----- | :----- | :------ | :----- | :----- |
    | S1 (1) | 5      | 1       | 7      | 1      |
    | S2 (15) | 6      | 3       | 4      | 15     |
    | S3 (12) | 2      | 5       | 8      | 12     |
    | Demand | 7      | 12      | 9      | 28     |
3.  Min cost = 1 at (S1, D2). Allocate $\min(1, 12)=1$. $X_{12}=1$. S1 exhausted. Delete S1.
4.  Remaining Tableau:
    |        | D1 (7) | D2 (11) | D3 (9) | Supply |
    | :----- | :----- | :------ | :----- | :----- |
    | S2 (15) | 6      | 3       | 4      | 15     |
    | S3 (12) | 2      | 5       | 8      | 12     |
    | Demand | 7      | 11      | 9      | 28     |
5.  Min cost = 2 at (S3, D1). Allocate $\min(12, 7)=7$. $X_{31}=7$. D1 rem=0. Delete D1.
6.  Remaining Tableau:
    |        | D2 (11) | D3 (9) | Supply |
    | :----- | :------ | :----- | :----- |
    | S2 (15) | 3       | 4      | 15     |
    | S3 (5)  | 5       | 8      | 5      |
    | Demand | 11      | 9      | 14     |
7.  Min cost = 3 at (S2, D2). Allocate $\min(15, 11)=11$. $X_{22}=11$. D2 rem=0. Delete D2.
8.  Remaining Tableau:
    |        | D3 (9) | Supply |
    | :----- | :----- | :----- |
    | S2 (4) | 4      | 4      |
    | S3 (5) | 8      | 5      |
    | Demand | 9      | 5      |
9.  Min cost = 4 at (S2, D3). Allocate $\min(4, 9)=4$. $X_{23}=4$. S2 exhausted. D3 rem=5.
10. Remaining: (S3, D3). Allocate $\min(5, 5)=5$. $X_{33}=5$. S3 exhausted, D3 satisfied.

**Allocations:** $X_{14}=9$, $X_{12}=1$, $X_{31}=7$, $X_{22}=11$, $X_{23}=4$, $X_{33}=5$.
Number of allocations = 6. $m+n-1 = 6$. No loops.
**Cost:** $(9 \times 0) + (1 \times 1) + (7 \times 2) + (11 \times 3) + (4 \times 4) + (5 \times 8) = 0 + 1 + 14 + 33 + 16 + 40 = 104$.

**c) Vogel's Approximation Method:**

**Iteration 1:**
|        | D1 (7) | D2 (12) | D3 (9) | D4 (9) | Supply | Row P |
| :----- | :----- | :------ | :----- | :----- | :----- | :---- |
| S1 (10) | 5      | 1       | 7      | 0      | 10     | 1 (1-0) |
| S2 (15) | 6      | 3       | 4      | 0      | 15     | 3 (3-0) |
| S3 (12) | 2      | 5       | 8      | 0      | 12     | 2 (2-0) |
| Col P  | 3 (5-2)| 2 (3-1) | 4 (8-4)| 0      |        |       |

Largest penalty = 4 for D3. Smallest cost in D3 is 4 at (S2, D3).
Allocate $\min(15, 9)=9$. $X_{23}=9$. S2 rem=6. D3 rem=0. Delete D3.

**Iteration 2:**
|        | D1 (7) | D2 (12) | D4 (9) | Supply | Row P |
| :----- | :----- | :------ | :----- | :----- | :---- |
| S1 (10) | 5      | 1       | 0      | 10     | 1 (1-0) |
| S2 (6)  | 6      | 3       | 0      | 6      | 3 (3-0) |
| S3 (12) | 2      | 5       | 0      | 12     | 2 (2-0) |
| Col P  | 3 (5-2)| 2 (3-1) | 0      |        |       |

Largest penalty = 3 for D1. Smallest cost in D1 is 2 at (S3, D1).
Allocate $\min(12, 7)=7$. $X_{31}=7$. S3 rem=5. D1 rem=0. Delete D1.

**Iteration 3:**
|        | D2 (12) | D4 (9) | Supply | Row P |
| :----- | :------ | :----- | :----- | :---- |
| S1 (10) | 1       | 0      | 10     | 1 (1-0) |
| S2 (6)  | 3       | 0      | 6      | 3 (3-0) |
| S3 (5)  | 5       | 0      | 5      | 5 (5-0) |
| Col P  | 2 (3-1) | 0      |        |       |

Largest penalty = 5 for S3. Smallest cost in S3 is 0 at (S3, D4).
Allocate $\min(5, 9)=5$. $X_{34}=5$. S3 rem=0. D4 rem=4. Delete S3.

**Iteration 4:**
|        | D2 (12) | D4 (4) | Supply | Row P |
| :----- | :------ | :----- | :----- | :---- |
| S1 (10) | 1       | 0      | 10     | 1 (1-0) |
| S2 (6)  | 3       | 0      | 6      | 3 (3-0) |
| Col P  | 2 (3-1) | 0      |        |       |

Largest penalty = 3 for S2. Smallest cost in S2 is 0 at (S2, D4).
Allocate $\min(6, 4)=4$. $X_{24}=4$. S2 rem=2. D4 rem=0. Delete D4.

**Iteration 5:**
|        | D2 (12) | Supply |
| :----- | :------ | :----- |
| S1 (10) | 1       | 10     |
| S2 (2)  | 3       | 2      |
| Demand | 12      | 2      |

Only remaining cells are (S1, D2) and (S2, D2).
Allocate to (S1, D2): $\min(10, 12)=10$. $X_{12}=10$. S1 rem=0. D2 rem=2.
Allocate to (S2, D2): $\min(2, 2)=2$. $X_{22}=2$. S2 rem=0. D2 rem=0.

**Allocations:** $X_{23}=9$, $X_{31}=7$, $X_{34}=5$, $X_{24}=4$, $X_{12}=10$, $X_{22}=2$.
Number of allocations = 6. $m+n-1 = 6$. No loops.
**Cost:** $(9 \times 4) + (7 \times 2) + (5 \times 0) + (4 \times 0) + (10 \times 1) + (2 \times 3) = 36 + 14 + 0 + 0 + 10 + 6 = 66$.

---

### **7. Important Points to Remember**

*   **Balancing:** Always ensure the transportation problem is balanced by adding dummy sources or destinations if needed.
*   **$m+n-1$ Allocations:** A valid IBFS must have exactly $m+n-1$ allocations.
*   **No Closed Loops:** Allocations in an IBFS must not form a closed loop to ensure independence of variables and prevent degeneracy issues in optimization.
*   **Degeneracy:** If an IBFS has fewer than $m+n-1$ allocations, it is degenerate and requires the addition of zero allocations.
*   **Method Choice:** While Northwest Corner Rule is easy, LCM and especially VAM tend to provide better initial solutions (lower costs).
*   **Dummy Variables:** Costs associated with dummy origins or destinations are typically zero.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=XZo4xyJXC2k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |


### **8. References**

*   **Operations Research by Paneerselvam R. (PHI, Third edition, 2023)**: Chapters dedicated to Transportation Problems provide detailed explanations and examples for finding IBFS and solving the problems.
*   **Operations Research by Taha (Pearson, Tenth edition, 2019)**: Offers comprehensive coverage of the transportation problem, including various methods for initial solutions and handling degeneracy.
*   **Introduction to Operations Research by F. S. Hillier and G. J. Lieberman (McGraw Hill, Tenth edition, 2017)**: Provides a strong theoretical foundation for linear programming and its special cases like the transportation problem.

---