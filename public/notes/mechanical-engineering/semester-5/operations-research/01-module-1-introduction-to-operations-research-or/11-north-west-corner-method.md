---
title: "North West Corner method"
subject: "OPERATIONS RESEARCH"
module: "Module 1: Introduction to Operations Research (OR)"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf4804463619"
status: "completed"
scrapedAt: "2026-05-20T18:01:48.788Z"
---
# Operations Research: Module 1 - Introduction to Operations Research (OR)

## Topic: North West Corner Method

This topic introduces a fundamental method for finding an initial feasible solution to a Transportation Problem. It's a simple, albeit often suboptimal, approach that lays the groundwork for more sophisticated techniques in solving transportation and related linear programming problems.

### 1. Introduction to Operations Research (OR) (Brief Context)

Before diving into the North West Corner Method, it's crucial to understand its place within Operations Research.

*   **Operations Research (OR):** A scientific approach to decision-making that seeks to convert raw data into useful information for effective decision-making. It uses mathematical, statistical, and computational methods to analyze complex problems and find optimal or near-optimal solutions.
    *   **Key Applications:** Resource allocation, scheduling, inventory control, logistics, queuing systems, etc.
    *   **Relevance to CO1:** OR encompasses techniques like Linear Programming and Transportation Problems, which the North West Corner Method helps solve.

### 2. Transportation Problem

The North West Corner Method is specifically used to solve a particular type of Linear Programming Problem known as the Transportation Problem.

*   **Definition:** A transportation problem deals with the distribution of a commodity from a set of **sources** (or origins) to a set of **destinations** (or markets). The objective is usually to minimize the total transportation cost, subject to the supply constraints at each source and the demand requirements at each destination.

*   **Key Components:**
    *   **Sources ($m$):** Locations where the goods originate (e.g., factories, warehouses).
    *   **Destinations ($n$):** Locations where the goods are needed (e.g., retail stores, customers).
    *   **Supply ($a_i$):** The quantity of goods available at each source $i$.
    *   **Demand ($b_j$):** The quantity of goods required at each destination $j$.
    *   **Cost ($c_{ij}$):** The cost of transporting one unit of the commodity from source $i$ to destination $j$.

*   **Tabular Representation:** Transportation problems are typically represented in a tableau format:

    | Source \ Destination | $D_1$ ($b_1$) | $D_2$ ($b_2$) | ... | $D_n$ ($b_n$) | **Supply** |
    | :------------------- | :------------ | :------------ | :-- | :------------ | :--------- |
    | $S_1$ ($a_1$)        | $c_{11}$      | $c_{12}$      | ... | $c_{1n}$      | $a_1$      |
    | $S_2$ ($a_2$)        | $c_{21}$      | $c_{22}$      | ... | $c_{2n}$      | $a_2$      |
    | ...                  | ...           | ...           | ... | ...           | ...        |
    | $S_m$ ($a_m$)        | $c_{m1}$      | $c_{m2}$      | ... | $c_{mn}$      | $a_m$      |
    | **Demand**           | $b_1$         | $b_2$         | ... | $b_n$         | **Total**  |

*   **Feasible Solution:** An assignment of goods from sources to destinations such that the total supply is not exceeded and the total demand is met.
*   **Initial Feasible Solution:** A starting point for solving the transportation problem. The North West Corner Method provides one such solution.
*   **Balanced vs. Unbalanced Transportation Problem:**
    *   **Balanced:** Total Supply = Total Demand ($\sum a_i = \sum b_j$).
    *   **Unbalanced:** Total Supply $\neq$ Total Demand. If unbalanced, it needs to be converted to a balanced problem by introducing a dummy source or destination with zero supply or demand and zero transportation costs.

    *(Refer to: Srinivasan, G. (2017), Chapter on Transportation Problems; Gupta & Hira (2008), Chapter on Transportation Problems)*

### 3. The North West Corner Method

This method is the simplest way to find an initial feasible solution. It starts by allocating units to the **north-west corner cell** (the cell in the first row and first column) of the transportation tableau and proceeds systematically.

*   **Algorithm Steps:**

    1.  **Start at the North-West Corner:** Begin with the cell in the first row and first column ($x_{11}$).
    2.  **Allocate Minimum:** Allocate as much as possible to this cell, which is the minimum of the supply at the first source ($a_1$) and the demand at the first destination ($b_1$).
        *   Let $x_{11} = \min(a_1, b_1)$.
    3.  **Update Supply and Demand:**
        *   If $a_1 < b_1$: The supply at source 1 is exhausted. Move to the next row (source 2) in the same column. The remaining demand at destination 1 is $b_1' = b_1 - a_1$.
        *   If $a_1 > b_1$: The demand at destination 1 is fully satisfied. Move to the next column (destination 2) in the same row. The remaining supply at source 1 is $a_1' = a_1 - b_1$.
        *   If $a_1 = b_1$: The supply at source 1 and the demand at destination 1 are both satisfied simultaneously. Move diagonally to the cell in the next row and next column ($x_{22}$). Both remaining supply and demand are zero.
    4.  **Repeat:** Continue this process, allocating to the current north-west available cell, and updating supply and demand, until all supplies are exhausted and all demands are met.
    5.  **Number of Allocations:** For a balanced transportation problem with $m$ sources and $n$ destinations, an initial feasible solution will have exactly $m + n - 1$ allocations. If this condition is not met, it indicates degeneracy.

*   **Key Concept: Degeneracy**
    *   Degeneracy occurs when the number of independent basic allocations is less than $m + n - 1$. This can happen when a supply and demand are satisfied simultaneously, leading to a zero allocation in a cell or skipping a row/column.
    *   While the North West Corner Method is simple, it can often lead to degenerate solutions.

*(Refer to: Srinivasan, G. (2017), Chapter on Transportation Problems; Gupta & Hira (2008), Chapter on Transportation Problems; Vohra & Arora (2021), Chapter on Transportation Problems)*

### 4. Example: North West Corner Method

Let's illustrate with an example.

**Problem:** A company has three factories ($F_1, F_2, F_3$) and four warehouses ($W_1, W_2, W_3, W_4$). The supply capacities, demand requirements, and per-unit transportation costs are given in the table below. Find an initial feasible solution using the North West Corner Method.

| Factory \ Warehouse | $W_1$ (Demand) | $W_2$ (Demand) | $W_3$ (Demand) | $W_4$ (Demand) | **Supply** |
| :------------------ | :------------- | :------------- | :------------- | :------------- | :--------- |
| $F_1$ (Supply)      | 2              | 3              | 4              | 1              | **30**     |
| $F_2$ (Supply)      | 3              | 2              | 5              | 4              | **40**     |
| $F_3$ (Supply)      | 4              | 1              | 3              | 2              | **50**     |
| **Demand**          | **25**         | **35**         | **20**         | **40**         | **120**    |

**Solution:**

1.  **Check for Balance:** Total Supply = 30 + 40 + 50 = 120. Total Demand = 25 + 35 + 20 + 40 = 120. The problem is balanced. We expect $3 + 4 - 1 = 6$ allocations.

2.  **Allocation 1 (North-West Corner: $F_1$ to $W_1$):**
    *   Supply ($F_1$) = 30, Demand ($W_1$) = 25.
    *   Allocate $x_{11} = \min(30, 25) = 25$.
    *   $W_1$ demand is met. Move to the next column ($W_2$).
    *   Remaining Supply ($F_1$) = 30 - 25 = 5.
    *   Remaining Demand ($W_1$) = 0.

    | Factory \ Warehouse | $W_1$ (Demand) | $W_2$ (Demand) | $W_3$ (Demand) | $W_4$ (Demand) | **Supply** |
    | :------------------ | :------------- | :------------- | :------------- | :------------- | :--------- |
    | $F_1$ (Supply)      | **25**         | 3              | 4              | 1              | **30**     |
    | $F_2$ (Supply)      | 3              | 2              | 5              | 4              | **40**     |
    | $F_3$ (Supply)      | 4              | 1              | 3              | 2              | **50**     |
    | **Demand**          | **25**         | **35**         | **20**         | **40**         | **120**    |

3.  **Allocation 2 ($F_1$ to $W_2$):**
    *   Remaining Supply ($F_1$) = 5, Demand ($W_2$) = 35.
    *   Allocate $x_{12} = \min(5, 35) = 5$.
    *   $F_1$ supply is exhausted. Move to the next row ($F_2$) in the same column ($W_2$).
    *   Remaining Supply ($F_1$) = 0.
    *   Remaining Demand ($W_2$) = 35 - 5 = 30.

    | Factory \ Warehouse | $W_1$ (Demand) | $W_2$ (Demand) | $W_3$ (Demand) | $W_4$ (Demand) | **Supply** |
    | :------------------ | :------------- | :------------- | :------------- | :------------- | :--------- |
    | $F_1$ (Supply)      | 25             | **5**          | 4              | 1              | **30**     |
    | $F_2$ (Supply)      | 3              | 2              | 5              | 4              | **40**     |
    | $F_3$ (Supply)      | 4              | 1              | 3              | 2              | **50**     |
    | **Demand**          | 0              | **35**         | **20**         | **40**         | **120**    |

4.  **Allocation 3 ($F_2$ to $W_2$):**
    *   Remaining Supply ($F_2$) = 40, Remaining Demand ($W_2$) = 30.
    *   Allocate $x_{22} = \min(40, 30) = 30$.
    *   $W_2$ demand is met. Move to the next column ($W_3$).
    *   Remaining Supply ($F_2$) = 40 - 30 = 10.
    *   Remaining Demand ($W_2$) = 0.

    | Factory \ Warehouse | $W_1$ (Demand) | $W_2$ (Demand) | $W_3$ (Demand) | $W_4$ (Demand) | **Supply** |
    | :------------------ | :------------- | :------------- | :------------- | :------------- | :--------- |
    | $F_1$ (Supply)      | 25             | 5              | 4              | 1              | **30**     |
    | $F_2$ (Supply)      | 3              | **30**         | 5              | 4              | **40**     |
    | $F_3$ (Supply)      | 4              | 1              | 3              | 2              | **50**     |
    | **Demand**          | 0              | 0              | **20**         | **40**         | **120**    |

5.  **Allocation 4 ($F_2$ to $W_3$):**
    *   Remaining Supply ($F_2$) = 10, Demand ($W_3$) = 20.
    *   Allocate $x_{23} = \min(10, 20) = 10$.
    *   $F_2$ supply is exhausted. Move to the next row ($F_3$) in the same column ($W_3$).
    *   Remaining Supply ($F_2$) = 0.
    *   Remaining Demand ($W_3$) = 20 - 10 = 10.

    | Factory \ Warehouse | $W_1$ (Demand) | $W_2$ (Demand) | $W_3$ (Demand) | $W_4$ (Demand) | **Supply** |
    | :------------------ | :------------- | :------------- | :------------- | :------------- | :--------- |
    | $F_1$ (Supply)      | 25             | 5              | 4              | 1              | **30**     |
    | $F_2$ (Supply)      | 3              | 30             | **10**         | 4              | **40**     |
    | $F_3$ (Supply)      | 4              | 1              | 3              | 2              | **50**     |
    | **Demand**          | 0              | 0              | **20**         | **40**         | **120**    |

6.  **Allocation 5 ($F_3$ to $W_3$):**
    *   Remaining Supply ($F_3$) = 50, Remaining Demand ($W_3$) = 10.
    *   Allocate $x_{33} = \min(50, 10) = 10$.
    *   $W_3$ demand is met. Move to the next column ($W_4$).
    *   Remaining Supply ($F_3$) = 50 - 10 = 40.
    *   Remaining Demand ($W_3$) = 0.

    | Factory \ Warehouse | $W_1$ (Demand) | $W_2$ (Demand) | $W_3$ (Demand) | $W_4$ (Demand) | **Supply** |
    | :------------------ | :------------- | :------------- | :------------- | :------------- | :--------- |
    | $F_1$ (Supply)      | 25             | 5              | 4              | 1              | **30**     |
    | $F_2$ (Supply)      | 3              | 30             | 10             | 4              | **40**     |
    | $F_3$ (Supply)      | 4              | 1              | **10**         | 2              | **50**     |
    | **Demand**          | 0              | 0              | 0              | **40**         | **120**    |

7.  **Allocation 6 ($F_3$ to $W_4$):**
    *   Remaining Supply ($F_3$) = 40, Demand ($W_4$) = 40.
    *   Allocate $x_{34} = \min(40, 40) = 40$.
    *   Both $F_3$ supply and $W_4$ demand are met. Move diagonally to $F_4$ to $W_5$ (which doesn't exist). The process is complete.
    *   Remaining Supply ($F_3$) = 0.
    *   Remaining Demand ($W_4$) = 0.

    | Factory \ Warehouse | $W_1$ (Demand) | $W_2$ (Demand) | $W_3$ (Demand) | $W_4$ (Demand) | **Supply** |
    | :------------------ | :------------- | :------------- | :------------- | :------------- | :--------- |
    | $F_1$ (Supply)      | 25             | 5              | 4              | 1              | **30**     |
    | $F_2$ (Supply)      | 3              | 30             | 10             | 4              | **40**     |
    | $F_3$ (Supply)      | 4              | 1              | 10             | **40**         | **50**     |
    | **Demand**          | 0              | 0              | 0              | **40**         | **120**    |

**Initial Feasible Solution (North West Corner Method):**

The allocations are:
*   $x_{11} = 25$
*   $x_{12} = 5$
*   $x_{22} = 30$
*   $x_{23} = 10$
*   $x_{33} = 10$
*   $x_{34} = 40$

Total number of allocations = 6, which equals $m+n-1$ (3+4-1=6). This is a non-degenerate initial feasible solution.

**Calculate Total Transportation Cost:**
Total Cost = $(25 \times 2) + (5 \times 3) + (30 \times 2) + (10 \times 5) + (10 \times 3) + (40 \times 2)$
Total Cost = $50 + 15 + 60 + 50 + 30 + 80 = \mathbf{285}$

*(Refer to: Srinivasan, G. (2017), Chapter on Transportation Problems; Gupta & Hira (2008), Chapter on Transportation Problems; Hillier & Lieberman (Eleventh Edition), Chapter on Transportation Problems)*

### 5. Advantages and Disadvantages of the North West Corner Method

*   **Advantages:**
    *   **Simplicity:** It is the easiest method to understand and apply, requiring no complex calculations.
    *   **Guaranteed Feasible Solution:** It always provides a feasible solution (provided the problem is balanced or has been balanced).
    *   **Speed:** It's quick to implement, making it useful for quickly getting a starting point.

*   **Disadvantages:**
    *   **Suboptimal Solutions:** The solution obtained is often not optimal (i.e., it doesn't necessarily result in the minimum total transportation cost). It ignores the cost data until the very end.
    *   **Degeneracy:** It has a higher tendency to produce degenerate solutions compared to other methods like the Least Cost Method or Vogel's Approximation Method (VAM).

*(Refer to: Vohra & Arora (2021), Chapter on Transportation Problems; Ravindran, Phillips and Solberg (1987), Chapter on Transportation Problems)*

### 6. Relation to Course Outcomes

*   **CO1: To formulate and solve linear programming problems and transportation problems (Knowledge Level: K2, K3)**
    *   The North West Corner Method directly addresses the "solve transportation problems" part of CO1. It provides a method for finding an initial feasible solution, which is the first step in solving many transportation problems. The understanding of how to allocate units based on supply and demand also contributes to formulating the problem correctly.

### 7. Important Points to Remember

*   Always check if the transportation problem is balanced (Total Supply = Total Demand). If not, convert it to a balanced problem first.
*   The method starts allocation from the top-left cell of the tableau.
*   Allocate the minimum of available supply and demand in the current cell.
*   When supply is exhausted, move down to the next row.
*   When demand is satisfied, move right to the next column.
*   If supply and demand are equal, move diagonally to the next available cell (next row, next column).
*   A balanced problem with $m$ sources and $n$ destinations should have $m+n-1$ allocations. Fewer allocations indicate degeneracy.
*   The North West Corner Method is primarily for finding an *initial* feasible solution, not necessarily the *optimal* solution.

### 8. Practice Questions and Exercises

**Question 1:**
Given the following transportation problem:

| Source \ Destination | $D_1$ (Demand) | $D_2$ (Demand) | $D_3$ (Demand) | **Supply** |
| :------------------- | :------------- | :------------- | :------------- | :--------- |
| $S_1$ (Supply)       | 3              | 1              | 4              | **20**     |
| $S_2$ (Supply)       | 2              | 5              | 6              | **30**     |
| **Demand**           | **15**         | **25**         | **10**         | **50**     |

Using the North West Corner Method, determine the initial feasible solution and calculate the total transportation cost.

**Answer 1:**

*   **Balance Check:** Supply = 20 + 30 = 50. Demand = 15 + 25 + 10 = 50. Balanced. Expect 2 + 3 - 1 = 4 allocations.

*   **Allocations:**
    1.  $S_1$ to $D_1$: $\min(20, 15) = 15$. $x_{11} = 15$. $S_1$ remaining: 5. $D_1$ demand met. Move right.
    2.  $S_1$ to $D_2$: $\min(5, 25) = 5$. $x_{12} = 5$. $S_1$ supply exhausted. Move down.
    3.  $S_2$ to $D_2$: $\min(30, 20) = 20$. $x_{22} = 20$. $D_2$ demand met. Move right.
    4.  $S_2$ to $D_3$: $\min(10, 10) = 10$. $x_{23} = 10$. $S_2$ supply and $D_3$ demand met. Move diagonally.

*   **Initial Feasible Solution:**
    *   $x_{11} = 15$
    *   $x_{12} = 5$
    *   $x_{22} = 20$
    *   $x_{23} = 10$

*   **Total Transportation Cost:**
    Cost = $(15 \times 3) + (5 \times 1) + (20 \times 5) + (10 \times 6)$
    Cost = $45 + 5 + 100 + 60 = \mathbf{210}$

**Question 2:**
Consider an unbalanced transportation problem where the total supply is 150 units and the total demand is 170 units. How would you balance this problem before applying the North West Corner Method?

**Answer 2:**
Since the total demand (170) is greater than the total supply (150), the problem is unbalanced. To balance it, we need to introduce a **dummy source** with a supply equal to the difference between total demand and total supply.

*   Dummy Source Supply = Total Demand - Total Supply = 170 - 150 = 20 units.
*   The transportation costs from the dummy source to all destinations are considered to be zero.
*   The new tableau will have $m+1$ sources and $n$ destinations, with the total supply now equaling the total demand (170).

This completed study material covers the North West Corner Method, its application in transportation problems, and its relevance to Course Outcome 1, aligning with the specified learning outcomes and textbook references.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
