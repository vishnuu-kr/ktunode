---
title: "North West Corner method"
subject: "QUANTITATIVE TECHNIQUES FOR ENGINEERS"
module: "Module 2: Transportation Problem: Mathematical Formulation"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463a6c"
status: "completed"
scrapedAt: "2026-05-20T18:07:28.081Z"
---
# Quantitative Techniques for Engineers: Module 2 - Transportation Problem: Mathematical Formulation

## Topic: North-West Corner Method

### 1. Introduction to the Transportation Problem

The transportation problem is a special type of linear programming problem that deals with the transportation of goods from a set of sources (e.g., factories, warehouses) to a set of destinations (e.g., retail stores, customers). The objective is to minimize the total transportation cost while satisfying the supply at each source and the demand at each destination.

**Key Concepts:**

*   **Sources:** Locations where goods are produced or stored.
*   **Destinations:** Locations where goods are required.
*   **Supply:** The quantity of goods available at each source.
*   **Demand:** The quantity of goods required at each destination.
*   **Cost:** The cost of transporting one unit of goods from a source to a destination.

**Mathematical Formulation (General):**

Let:
*   $m$ be the number of sources.
*   $n$ be the number of destinations.
*   $x_{ij}$ be the quantity of goods transported from source $i$ to destination $j$.
*   $c_{ij}$ be the cost of transporting one unit of goods from source $i$ to destination $j$.
*   $a_i$ be the supply at source $i$.
*   $b_j$ be the demand at destination $j$.

The objective is to minimize the total transportation cost:
$$ \text{Minimize } Z = \sum_{i=1}^{m} \sum_{j=1}^{n} c_{ij} x_{ij} $$

Subject to the constraints:

**Supply Constraints:**
$$ \sum_{j=1}^{n} x_{ij} \le a_i \quad \text{for } i = 1, 2, \ldots, m $$
(The total quantity shipped from source $i$ cannot exceed its supply.)

**Demand Constraints:**
$$ \sum_{i=1}^{m} x_{ij} \ge b_j \quad \text{for } j = 1, 2, \ldots, n $$
(The total quantity received at destination $j$ must meet its demand.)

**Non-negativity Constraint:**
$$ x_{ij} \ge 0 \quad \text{for all } i, j $$
(The quantity shipped cannot be negative.)

**Balanced vs. Unbalanced Transportation Problem:**

*   **Balanced:** If the total supply equals the total demand ($\sum a_i = \sum b_j$).
*   **Unbalanced:** If the total supply does not equal the total demand.
    *   If $\sum a_i < \sum b_j$, a **dummy source** is introduced with a supply equal to the difference ($\sum b_j - \sum a_i$). The transportation costs from the dummy source to all destinations are usually zero.
    *   If $\sum a_i > \sum b_j$, a **dummy destination** is introduced with a demand equal to the difference ($\sum a_i - \sum b_j$). The transportation costs from all sources to the dummy destination are usually zero.

*Alignment with Course Outcomes:* This section directly supports **CO1: To formulate and solve linear programming and transportation problems (Knowledge Level: K4)** by introducing the fundamental concepts and mathematical structure of transportation problems, which are a specific type of LP.

*Textbook References:*
*   Paneerselvam R., *Operations Research*, Third edition, 2023 (Chapters on Transportation Problems).
*   Taha, *Operations Research*, Tenth edition, 2019 (Chapters on Transportation Problems).
*   Hillier & Lieberman, *Introduction to Operations Research*, Tenth edition, 2017 (Chapters on Transportation Problems).

### 2. Initial Basic Feasible Solutions

To solve a transportation problem, we first need to find an initial basic feasible solution (IBFS). There are several methods for finding an IBFS, and the North-West Corner method is one of the simplest. These methods aim to allocate units of goods from sources to destinations until all supplies and demands are met.

**Important Point:** The North-West Corner method is a systematic way to find an IBFS but does not consider the transportation costs. Therefore, the solution obtained is feasible but not necessarily optimal.

### 3. The North-West Corner Method

The North-West Corner method is a straightforward algorithm for finding an initial basic feasible solution to a transportation problem. It is called the "North-West Corner" method because it starts by allocating units to the cell in the upper-left corner (the "north-west" corner) of the transportation tableau and proceeds row by row or column by column.

**Algorithm Steps:**

1.  **Start with the North-West Corner:** Begin with the cell in the first row and the first column ($x_{11}$).
2.  **Allocate Minimum:** Allocate the maximum possible quantity to this cell. This quantity is the minimum of the available supply at the first source ($a_1$) and the demand at the first destination ($b_1$).
    *   $x_{11} = \min(a_1, b_1)$
3.  **Update Supply and Demand:**
    *   If $a_1 < b_1$, then the entire supply of the first source is exhausted. Set $a_1 = 0$. The remaining demand at the first destination is $b_1' = b_1 - a_1$. Move to the next row (source 2) in the same column (destination 1).
    *   If $a_1 > b_1$, then the entire demand of the first destination is met. Set $b_1 = 0$. The remaining supply at the first source is $a_1' = a_1 - b_1$. Move to the next column (destination 2) in the same row (source 1).
    *   If $a_1 = b_1$, then both the supply of the first source and the demand of the first destination are met. Set $a_1 = 0$ and $b_1 = 0$. Move diagonally to the next cell in the next row and next column ($x_{22}$), or if you've reached the end of a row or column, move to the beginning of the next row/column.
4.  **Continue the Process:** Repeat steps 2 and 3 for the next available cell in the tableau (moving right if a column is satisfied, or down if a row is satisfied) until all supplies and demands are met.
5.  **Check for Degeneracy:** A basic feasible solution is called **degenerate** if the number of non-zero allocations (basic variables) is less than $m + n - 1$, where $m$ is the number of sources and $n$ is the number of destinations. If degeneracy occurs, it needs to be resolved for optimality testing methods (like MODI or Stepping Stone). However, the North-West Corner method itself simply produces the allocations.

**Number of Allocations:** The North-West Corner method will always result in $m + n - 1$ allocations if the problem is balanced, and $m+n$ if there's a dummy row/column. Degeneracy can occur when an allocation makes both the row supply and column demand zero simultaneously.

*Alignment with Course Outcomes:* This method directly contributes to **CO1: To formulate and solve linear programming and transportation problems (Knowledge Level: K4)** by providing a concrete algorithm to find an initial solution.

*Textbook References:*
*   Paneerselvam R., *Operations Research*, Third edition, 2023 (Section on North-West Corner Method).
*   Taha, *Operations Research*, Tenth edition, 2019 (Section on North-West Corner Method).
*   Hillier & Lieberman, *Introduction to Operations Research*, Tenth edition, 2017 (Section on North-West Corner Method).

### 4. Example: North-West Corner Method

Let's consider a transportation problem with 3 sources and 4 destinations.

| From \ To | D1  | D2  | D3  | D4  | Supply |
| :-------- | :-- | :-- | :-- | :-- | :----- |
| **S1**    | 2   | 3   | 4   | 1   | 30     |
| **S2**    | 4   | 1   | 3   | 2   | 50     |
| **S3**    | 3   | 5   | 2   | 4   | 20     |
| **Demand**| 20  | 40  | 30  | 10  | 100    |

**Step 1: Check for Balance**
Total Supply = 30 + 50 + 20 = 100
Total Demand = 20 + 40 + 30 + 10 = 100
The problem is balanced.

**Step 2: Apply North-West Corner Method**

*   **Cell (S1, D1):**
    *   Supply at S1 = 30
    *   Demand at D1 = 20
    *   Allocate $x_{11} = \min(30, 20) = 20$.
    *   S1 supply remaining = 30 - 20 = 10.
    *   D1 demand met = 20. D1 is satisfied.

    | From \ To | D1 (0) | D2  | D3  | D4  | Supply |
    | :-------- | :----- | :-- | :-- | :-- | :----- |
    | **S1** (10)| **20** |     |     |     | 30     |
    | **S2**    |        |     |     |     | 50     |
    | **S3**    |        |     |     |     | 20     |
    | **Demand**| 0      | 40  | 30  | 10  | 100    |

*   **Cell (S2, D1) - D1 is satisfied, move to the next column (D2).**
    *   **Cell (S2, D2):**
        *   Supply at S2 = 50
        *   Demand at D2 = 40
        *   Allocate $x_{22} = \min(50, 40) = 40$.
        *   S2 supply remaining = 50 - 40 = 10.
        *   D2 demand met = 40. D2 is satisfied.

    | From \ To | D1 (0) | D2 (0) | D3  | D4  | Supply |
    | :-------- | :----- | :----- | :-- | :-- | :----- |
    | **S1** (10)| 20     |        |     |     | 30     |
    | **S2** (10)|        | **40** |     |     | 50     |
    | **S3**    |        |        |     |     | 20     |
    | **Demand**| 0      | 0      | 30  | 10  | 100    |

*   **Cell (S3, D2) - D2 is satisfied, move to the next column (D3).**
    *   **Cell (S3, D3):**
        *   Supply at S3 = 20
        *   Demand at D3 = 30
        *   Allocate $x_{33} = \min(20, 30) = 20$.
        *   S3 supply remaining = 20 - 20 = 0. S3 is satisfied.
        *   D3 demand remaining = 30 - 20 = 10.

    | From \ To | D1 (0) | D2 (0) | D3 (10) | D4  | Supply |
    | :-------- | :----- | :----- | :------ | :-- | :----- |
    | **S1** (10)| 20     |        |         |     | 30     |
    | **S2** (10)|        | 40     |         |     | 50     |
    | **S3** (0) |        |        | **20**  |     | 20     |
    | **Demand**| 0      | 0      | 10      | 10  | 100    |

*   **Cell (S3, D3) - S3 is satisfied, move to the next row (S4 - none, so next available cell in current row is D4).**
    *   **Cell (S1, D3) - S3 is satisfied, move to next row S2.**
    *   **Cell (S2, D3):**
        *   Supply at S2 = 10 (remaining from previous allocation)
        *   Demand at D3 = 10 (remaining from previous allocation)
        *   Allocate $x_{23} = \min(10, 10) = 10$.
        *   S2 supply remaining = 10 - 10 = 0. S2 is satisfied.
        *   D3 demand met = 10. D3 is satisfied.

    | From \ To | D1 (0) | D2 (0) | D3 (0) | D4  | Supply |
    | :-------- | :----- | :----- | :----- | :-- | :----- |
    | **S1** (10)| 20     |        |        |     | 30     |
    | **S2** (0) |        | 40     | **10** |     | 50     |
    | **S3** (0) |        |        | 20     |     | 20     |
    | **Demand**| 0      | 0      | 0      | 10  | 100    |

*   **Cell (S2, D3) - S2 is satisfied, move to the next row (none). Move to next column (D4).**
    *   **Cell (S1, D4):**
        *   Supply at S1 = 10 (remaining from first allocation)
        *   Demand at D4 = 10
        *   Allocate $x_{14} = \min(10, 10) = 10$.
        *   S1 supply remaining = 10 - 10 = 0. S1 is satisfied.
        *   D4 demand met = 10. D4 is satisfied.

    | From \ To | D1 (0) | D2 (0) | D3 (0) | D4 (0) | Supply |
    | :-------- | :----- | :----- | :----- | :----- | :----- |
    | **S1** (0) | 20     |        |        | **10** | 30     |
    | **S2** (0) |        | 40     | 10     |        | 50     |
    | **S3** (0) |        |        | 20     |        | 20     |
    | **Demand**| 0      | 0      | 0      | 0      | 100    |

All supplies and demands are met.

**Initial Basic Feasible Solution (IBFS):**
*   $x_{11} = 20$
*   $x_{14} = 10$
*   $x_{22} = 40$
*   $x_{23} = 10$
*   $x_{33} = 20$

Number of non-zero allocations = 5.
Number of sources ($m$) = 3, Number of destinations ($n$) = 4.
$m + n - 1 = 3 + 4 - 1 = 6$.
Since the number of allocations (5) is less than $m+n-1$ (6), this solution is **degenerate**.

**Calculating the Total Cost:**
$Z = (20 \times 2) + (10 \times 1) + (40 \times 1) + (10 \times 3) + (20 \times 2)$
$Z = 40 + 10 + 40 + 30 + 40$
$Z = \$160$

*Alignment with Course Outcomes:* This example demonstrates the application of the North-West Corner method to find an IBFS for a transportation problem, reinforcing **CO1 (K4)**. It also implicitly shows the importance of feasibility.

### 5. Advantages and Disadvantages of North-West Corner Method

**Advantages:**

*   **Simplicity:** It is the easiest method to understand and apply.
*   **Systematic:** It provides a consistent approach to finding an IBFS.
*   **Guaranteed Feasibility:** It always yields a feasible solution if the problem is balanced.

**Disadvantages:**

*   **Ignores Costs:** It does not consider the transportation costs while making allocations. This means the resulting solution is often far from optimal.
*   **Degeneracy Prone:** It can easily lead to degenerate solutions, which can complicate the process of finding an optimal solution using subsequent methods.
*   **Inefficiency:** The initial solution may require a large number of iterations in subsequent optimality testing methods (like MODI or Stepping Stone) due to poor initial allocations.

**Important Point to Remember:** The North-West Corner method is primarily used to obtain an *initial* basic feasible solution. It is rarely used to find the optimal solution itself.

### 6. Practice Questions and Exercises

**Question 1:**

Find an initial basic feasible solution to the following transportation problem using the North-West Corner method. Calculate the total transportation cost.

| From \ To | D1  | D2  | D3  | Supply |
| :-------- | :-- | :-- | :-- | :----- |
| **S1**    | 10  | 4   | 20  | 50     |
| **S2**    | 6   | 8   | 12  | 70     |
| **Demand**| 30  | 50  | 40  | 120    |

**Solution:**

1.  **Balance Check:** Total Supply = 50 + 70 = 120. Total Demand = 30 + 50 + 40 = 120. The problem is balanced.

2.  **North-West Corner Method:**
    *   Cell (S1, D1): $\min(50, 30) = 30$. $x_{11} = 30$.
        *   S1 supply remaining: 50 - 30 = 20.
        *   D1 demand met: 30. D1 is satisfied.

    | From \ To | D1 (0) | D2  | D3  | Supply |
    | :-------- | :----- | :-- | :-- | :----- |
    | **S1** (20)| **30** |     |     | 50     |
    | **S2**    |        |     |     | 70     |
    | **Demand**| 0      | 50  | 40  | 120    |

    *   Cell (S2, D1) - D1 satisfied. Move to next column (D2).
    *   Cell (S1, D2): $\min(20, 50) = 20$. $x_{12} = 20$.
        *   S1 supply remaining: 20 - 20 = 0. S1 is satisfied.
        *   D2 demand remaining: 50 - 20 = 30.

    | From \ To | D1 (0) | D2 (30) | D3  | Supply |
    | :-------- | :----- | :------ | :-- | :----- |
    | **S1** (0) | 30     | **20**  |     | 50     |
    | **S2**    |        |         |     | 70     |
    | **Demand**| 0      | 30      | 40  | 120    |

    *   Cell (S2, D2) - S1 satisfied. Move to next row (S2).
    *   Cell (S2, D2): $\min(70, 30) = 30$. $x_{22} = 30$.
        *   S2 supply remaining: 70 - 30 = 40.
        *   D2 demand met: 30. D2 is satisfied.

    | From \ To | D1 (0) | D2 (0) | D3  | Supply |
    | :-------- | :----- | :----- | :-- | :----- |
    | **S1** (0) | 30     | 20     |     | 50     |
    | **S2** (40)|        | **30** |     | 70     |
    | **Demand**| 0      | 0      | 40  | 120    |

    *   Cell (S2, D3) - D2 satisfied. Move to next column (D3).
    *   Cell (S2, D3): $\min(40, 40) = 40$. $x_{23} = 40$.
        *   S2 supply remaining: 40 - 40 = 0. S2 is satisfied.
        *   D3 demand met: 40. D3 is satisfied.

    | From \ To | D1 (0) | D2 (0) | D3 (0) | Supply |
    | :-------- | :----- | :----- | :----- | :----- |
    | **S1** (0) | 30     | 20     |        | 50     |
    | **S2** (0) |        | 30     | **40** | 70     |
    | **Demand**| 0      | 0      | 0      | 120    |

3.  **IBFS:**
    *   $x_{11} = 30$
    *   $x_{12} = 20$
    *   $x_{22} = 30$
    *   $x_{23} = 40$

4.  **Total Cost:**
    $Z = (30 \times 10) + (20 \times 4) + (30 \times 8) + (40 \times 12)$
    $Z = 300 + 80 + 240 + 480$
    $Z = \$1100$

    *Number of allocations = 4. $m+n-1 = 2+3-1 = 4$. This solution is not degenerate.*

**Question 2:**

Consider an unbalanced transportation problem where total supply is less than total demand. How would you handle this using the North-West Corner method?

**Answer:**

If total supply is less than total demand ($\sum a_i < \sum b_j$), you would introduce a **dummy source** to balance the problem.
*   The supply of the dummy source would be equal to the difference between total demand and total supply: $\text{Dummy Supply} = \sum b_j - \sum a_i$.
*   The transportation costs from the dummy source to all destinations are typically set to zero, as this dummy supply does not represent an actual physical source.
*   Once the problem is balanced by adding the dummy source, you can then apply the North-West Corner method as usual to the augmented tableau.

### 7. Conclusion

The North-West Corner method is a foundational technique for initiating the solution process for transportation problems. While simple and easy to implement, its primary limitation is its disregard for transportation costs, often resulting in a non-optimal initial feasible solution. It serves as a crucial stepping stone before employing more sophisticated methods to find the minimum cost allocation.

*Alignment with Course Outcomes:* This section summarizes the role of the North-West Corner method in the broader context of solving transportation problems, reinforcing **CO1 (K4)** by highlighting its position in the overall problem-solving framework.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
