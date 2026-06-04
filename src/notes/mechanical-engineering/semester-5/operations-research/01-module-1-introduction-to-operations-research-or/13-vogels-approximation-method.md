---
title: "Vogel’s Approximation Method"
subject: "OPERATIONS RESEARCH"
module: "Module 1: Introduction to Operations Research (OR)"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf480446361b"
status: "completed"
scrapedAt: "2026-05-20T18:01:50.251Z"
---
# Operations Research: Module 1 - Introduction to Operations Research (OR)

## Topic: Vogel's Approximation Method (VAM)

**Knowledge Level Alignment:** This topic primarily contributes to **CO1: To formulate and solve linear programming problems and transportation problems (Knowledge Level: K2, K3)**, as VAM is a heuristic method for finding an initial basic feasible solution to a transportation problem.

---

### 1. Introduction to Transportation Problems

*   **Definition:** A transportation problem is a special type of linear programming problem that deals with the transportation of goods from various origins (sources or plants) to various destinations (warehouses or markets) at minimum cost.
*   **Objective:** To minimize the total cost of transportation.
*   **Key Components:**
    *   **Origins/Sources:** Places where the goods are available.
    *   **Destinations/Markets:** Places where the goods are demanded.
    *   **Supply:** The quantity of goods available at each origin.
    *   **Demand:** The quantity of goods required at each destination.
    *   **Transportation Cost:** The cost of transporting one unit of a good from an origin to a destination.
*   **Balanced vs. Unbalanced Transportation Problem:**
    *   **Balanced:** Total supply equals total demand ($\sum \text{Supply}_i = \sum \text{Demand}_j$).
    *   **Unbalanced:** Total supply does not equal total demand. To balance an unbalanced problem, a dummy origin or destination is introduced with zero supply or demand and zero transportation costs.

---

### 2. The Need for Initial Basic Feasible Solutions

*   Transportation problems are typically solved using algorithms like the **Stepping Stone Method** or the **MODI (Modified Distribution) Method**.
*   These methods require an **initial basic feasible solution (IBFS)** to start the optimization process.
*   Finding a good IBFS can significantly reduce the number of iterations required to reach the optimal solution, thereby saving computational effort.
*   Methods for finding IBFS include:
    *   **North-West Corner Rule:** Simplest but often results in a poor IBFS.
    *   **Least Cost Entry Method:** Better than NWCR, but still doesn't guarantee a good IBFS.
    *   **Vogel's Approximation Method (VAM):** Generally yields the best IBFS among the heuristic methods, leading to fewer iterations.

---

### 3. Vogel's Approximation Method (VAM)

*   **Concept:** VAM is a heuristic method designed to provide a near-optimal initial basic feasible solution for transportation problems. It works by minimizing penalties incurred by not allocating to the lowest cost cells.
*   **Core Idea:** VAM focuses on the **"opportunity cost"** or **"penalty"** associated with not using the cheapest route from each row and column. It tries to avoid high penalties by making allocations in cells that are relatively cheap but have significant "opportunity costs" if left unutilized.

#### 3.1 Steps of Vogel's Approximation Method

1.  **Calculate Row and Column Penalties:**
    *   For each row, identify the two smallest transportation costs. The penalty for that row is the difference between these two costs.
    *   For each column, identify the two smallest transportation costs. The penalty for that column is the difference between these two costs.

2.  **Identify the Maximum Penalty:**
    *   Compare all the calculated row and column penalties.
    *   Identify the row or column with the highest penalty.

3.  **Make the Allocation:**
    *   In the row or column identified in Step 2, find the cell with the *smallest* transportation cost.
    *   Allocate as much as possible to this cell. The allocation is limited by the minimum of the supply of the origin and the demand of the destination for that cell.

4.  **Update Supply and Demand:**
    *   After making an allocation to a cell $(i, j)$:
        *   If the supply of origin $i$ is exhausted (i.e., allocated quantity = supply), eliminate row $i$ from further consideration by crossing it out.
        *   If the demand of destination $j$ is met (i.e., allocated quantity = demand), eliminate column $j$ from further consideration by crossing it out.
        *   If both supply and demand are exhausted simultaneously, *either* the row or the column can be eliminated.

5.  **Recalculate Penalties (if necessary):**
    *   If a row or column was eliminated, recalculate the penalties for the *remaining* rows and columns. If only one row or column remains, repeat step 3.

6.  **Repeat until all Demands are Met:**
    *   Continue steps 2 to 5 until all supplies and demands are satisfied (i.e., all rows and columns are crossed out).

#### 3.2 Example of VAM

Consider the following transportation problem:

| Origin \ Destination | D1  | D2  | D3  | Supply |
| :------------------- | :-- | :-- | :-- | :----- |
| O1                   | 10  | 2   | 20  | 15     |
| O2                   | 16  | 8   | 12  | 25     |
| O3                   | 2   | 4   | 18  | 10     |
| Demand               | 5   | 15  | 30  | 50     |

**Step 1 & 2: Calculate Penalties and Identify Maximum Penalty**

| Origin \ Destination | D1  | D2  | D3  | Supply | Row Penalty |
| :------------------- | :-- | :-- | :-- | :----- | :---------- |
| O1                   | 10  | **2** | 20  | 15     | 2 (10-2)    |
| O2                   | 16  | 8   | **12** | 25     | 4 (16-12)   |
| O3                   | **2** | 4   | 18  | 10     | 2 (4-2)     |
| Demand               | 5   | 15  | 30  | 50     |             |
| **Column Penalty**   | **6** (6-2) | **4** (8-4) | **6** (20-12) |        |             |

*   Row Penalties: O1=2, O2=4, O3=2
*   Column Penalties: D1=6, D2=4, D3=6
*   Maximum Penalty: 6 (from D1 and D3)

**Step 3: Make Allocation (Choosing D1 as it has a lower cost)**

*   Let's pick D1 (column penalty 6). The costs are 10, 16, 2. The smallest is 2 (at O3, D1).
*   Supply at O3 = 10, Demand at D1 = 5.
*   Allocate $\min(10, 5) = 5$ units to (O3, D1).

**Step 4: Update Supply and Demand**

*   O3 is crossed out (supply is 10, demand at D1 met with 5, remaining supply at O3 is 5, but D1 is now satisfied). *Correction: D1 demand is met, so D1 is eliminated.*
*   D1 demand is met. Eliminate D1.

The problem becomes:

| Origin \ Destination | D2  | D3  | Supply |
| :------------------- | :-- | :-- | :----- |
| O1                   | **2** | 20  | 15     |
| O2                   | 8   | 12  | 25     |
| O3                   | 4   | 18  | **5**  |
| Demand               | 15  | **25** | 40     |

**Step 1 & 2 (Recalculated): Calculate Penalties and Identify Maximum Penalty**

| Origin \ Destination | D2  | D3  | Supply | Row Penalty |
| :------------------- | :-- | :-- | :----- | :---------- |
| O1                   | **2** | 20  | 15     | 18 (20-2)   |
| O2                   | 8   | 12  | 25     | 4 (12-8)    |
| O3                   | 4   | 18  | 5      | 14 (18-4)   |
| Demand               | 15  | 25  | 40     |             |
| **Column Penalty**   | **2** (4-2) | **6** (20-12) |        |             |

*   Row Penalties: O1=18, O2=4, O3=14
*   Column Penalties: D2=2, D3=6
*   Maximum Penalty: 18 (from O1)

**Step 3: Make Allocation (Row O1)**

*   In row O1, the costs are 2 and 20. The smallest is 2 (at O1, D2).
*   Supply at O1 = 15, Demand at D2 = 15.
*   Allocate $\min(15, 15) = 15$ units to (O1, D2).

**Step 4: Update Supply and Demand**

*   O1 supply is exhausted. Eliminate O1.
*   D2 demand is met. Eliminate D2.

The problem becomes:

| Origin \ Destination | D3  | Supply |
| :------------------- | :-- | :----- |
| O2                   | 12  | 25     |
| O3                   | **18** | **5**  |
| Demand               | **20** | 20     |

**Step 1 & 2 (Recalculated): Calculate Penalties and Identify Maximum Penalty**

| Origin \ Destination | D3  | Supply | Row Penalty |
| :------------------- | :-- | :----- | :---------- |
| O2                   | 12  | 25     | N/A (only one column) |
| O3                   | 18  | 5      | N/A (only one column) |
| Demand               | 20  | 20     |             |
| **Column Penalty**   | 6 (18-12) |        |             |

*   Row Penalties: O2=N/A, O3=N/A
*   Column Penalties: D3=6
*   Maximum Penalty: 6 (from D3)

**Step 3: Make Allocation (Column D3)**

*   In column D3, the costs are 12 (O2) and 18 (O3). The smallest is 12 (at O2, D3).
*   Supply at O2 = 25, Demand at D3 = 20.
*   Allocate $\min(25, 20) = 20$ units to (O2, D3).

**Step 4: Update Supply and Demand**

*   D3 demand is met. Eliminate D3.
*   O2 supply remaining: 25 - 20 = 5.

The problem becomes:

| Origin \ Destination | Supply |
| :------------------- | :----- |
| O2                   | **5**  |
| Demand               | **5**  |

**Step 3: Make Allocation (Remaining Cell)**

*   Only one cell remains: (O2, D3) with a cost of 12.
*   Supply at O2 = 5, Demand at D3 = 5.
*   Allocate $\min(5, 5) = 5$ units to (O2, D3).

**Final Initial Basic Feasible Solution:**

*   (O3, D1): 5 units
*   (O1, D2): 15 units
*   (O2, D3): 20 + 5 = 25 units

Wait, there was an error in the trace. Let's retrace carefully.

---

**Revised Example Trace for VAM:**

| Origin \ Destination | D1  | D2  | D3  | Supply |
| :------------------- | :-- | :-- | :-- | :----- |
| O1                   | 10  | 2   | 20  | 15     |
| O2                   | 16  | 8   | 12  | 25     |
| O3                   | 2   | 4   | 18  | 10     |
| Demand               | 5   | 15  | 30  | 50     |

**Iteration 1:**

*   **Row Penalties:** O1: (10-2)=8, O2: (16-12)=4, O3: (4-2)=2
*   **Column Penalties:** D1: (2-2)=0 (Mistake in previous calculation: it should be the difference between the two smallest costs. The smallest is 2, the next smallest is 10. So D1 penalty is 10-2 = 8), D2: (4-2)=2, D3: (12-12)=0 (Mistake: D3 smallest costs are 12 and 18. Penalty = 18-12=6)

Let's recalculate penalties correctly:
*   Row Penalties:
    *   O1: Smallest = 2, Next smallest = 10. Penalty = 10 - 2 = **8**
    *   O2: Smallest = 8, Next smallest = 12. Penalty = 12 - 8 = **4**
    *   O3: Smallest = 2, Next smallest = 4. Penalty = 4 - 2 = **2**
*   Column Penalties:
    *   D1: Smallest = 2, Next smallest = 10. Penalty = 10 - 2 = **8**
    *   D2: Smallest = 2, Next smallest = 4. Penalty = 4 - 2 = **2**
    *   D3: Smallest = 12, Next smallest = 18. Penalty = 18 - 12 = **6**

*   **Maximum Penalty:** 8 (from O1 and D1). Let's choose O1.
*   **Smallest cost in O1:** 2 (at O1, D2).
*   **Supply at O1:** 15, **Demand at D2:** 15.
*   **Allocate:** $\min(15, 15) = 15$ to (O1, D2).
*   **Update:** O1 supply exhausted, D2 demand met. Eliminate O1 and D2.

Remaining problem:

| Origin \ Destination | D1  | D3  | Supply |
| :------------------- | :-- | :-- | :----- |
| O2                   | 16  | 12  | 25     |
| O3                   | **2** | 18  | 10     |
| Demand               | 5   | **15** | 20     |

**Iteration 2:**

*   **Row Penalties:**
    *   O2: Smallest = 12, Next smallest = 16. Penalty = 16 - 12 = **4**
    *   O3: Smallest = 2, Next smallest = 18. Penalty = 18 - 2 = **16**
*   **Column Penalties:**
    *   D1: Smallest = 2, Next smallest = 16. Penalty = 16 - 2 = **14**
    *   D3: Smallest = 12, Next smallest = 18. Penalty = 18 - 12 = **6**

*   **Maximum Penalty:** 16 (from O3).
*   **Smallest cost in O3:** 2 (at O3, D1).
*   **Supply at O3:** 10, **Demand at D1:** 5.
*   **Allocate:** $\min(10, 5) = 5$ to (O3, D1).
*   **Update:** D1 demand met. Eliminate D1. O3 supply remaining = 10 - 5 = 5.

Remaining problem:

| Origin \ Destination | D3  | Supply |
| :------------------- | :-- | :----- |
| O2                   | **12** | 25     |
| O3                   | **18** | **5**  |
| Demand               | **15** | 15     |

**Iteration 3:**

*   Only one column remains (D3). We need to satisfy the demand of 15.
*   **Check remaining supplies:** O2 has 25, O3 has 5. Total remaining supply = 30. Total remaining demand = 15.
*   This implies the problem was not balanced initially (Total supply 50, Total demand 50, but remaining demand is 15 and remaining supply is 30). Let me recheck the original problem statement or my understanding.

Ah, the total supply is 15 + 25 + 10 = 50.
The total demand is 5 + 15 + 30 = 50.
So, the problem *is* balanced.

Let's review the second update:
After allocating 15 to (O1, D2):
O1 (Supply 15) is exhausted.
D2 (Demand 15) is met.

Remaining problem:
| Origin \ Destination | D1  | D3  | Supply |
| :------------------- | :-- | :-- | :----- |
| O2                   | 16  | 12  | 25     |
| O3                   | 2   | 18  | 10     |
| Demand               | 5   | 30  | 35     |

**Iteration 2 (Corrected):**

*   **Row Penalties:**
    *   O2: Smallest = 12, Next smallest = 16. Penalty = 16 - 12 = **4**
    *   O3: Smallest = 2, Next smallest = 18. Penalty = 18 - 2 = **16**
*   **Column Penalties:**
    *   D1: Smallest = 2, Next smallest = 16. Penalty = 16 - 2 = **14**
    *   D3: Smallest = 12, Next smallest = 18. Penalty = 18 - 12 = **6**

*   **Maximum Penalty:** 16 (from O3).
*   **Smallest cost in O3:** 2 (at O3, D1).
*   **Supply at O3:** 10, **Demand at D1:** 5.
*   **Allocate:** $\min(10, 5) = 5$ to (O3, D1).
*   **Update:** D1 demand is met. Eliminate D1. O3 supply remaining = 10 - 5 = 5.

Remaining problem:

| Origin \ Destination | D3  | Supply |
| :------------------- | :-- | :----- |
| O2                   | 12  | 25     |
| O3                   | **18** | **5**  |
| Demand               | **25** | 25     |

**Iteration 3:**

*   Only one column remains (D3). We need to satisfy the demand of 25.
*   **Row Penalties:** No two smallest costs to calculate a penalty, so we proceed to allocate.
*   **Column Penalties:** Only one column, D3.

*   We need to allocate 25 units to column D3.
*   **Consider O2:** Has supply of 25. Cost is 12.
*   **Consider O3:** Has supply of 5. Cost is 18.
*   We must fulfill the demand of 25.
*   **Priority to lower cost:** Allocate to (O2, D3) first.
*   **Allocate:** $\min(25 \text{ supply at O2}, 25 \text{ demand at D3}) = 25$ to (O2, D3).
*   **Update:** D3 demand met. O2 supply is exhausted.

But O3 still has 5 units of supply. This is incorrect. The algorithm must continue until all origins and destinations are accounted for.

Let's reconsider the allocation in Iteration 3. When only one column (or row) remains, we allocate greedily from the available supplies to meet the remaining demand in that column (or row), prioritizing the lowest cost cells if there are multiple options.

In Iteration 3, we have:
| Origin \ Destination | D3  | Supply |
| :------------------- | :-- | :----- |
| O2                   | 12  | 25     |
| O3                   | 18  | 5      |
| Demand               | 25  | 25     |

*   **Allocate to (O2, D3):** Supply at O2 = 25. Demand at D3 = 25. Allocate $\min(25, 25) = 25$.
    *   O2 supply remaining: 25 - 25 = 0. O2 is exhausted.
    *   D3 demand remaining: 25 - 25 = 0. D3 is met.

This allocation satisfies the demand for D3. However, O3 has 5 units of supply that are not allocated. This implies an error in my approach or understanding of how VAM handles the last step.

**VAM Rule Check:** "Repeat steps 2 to 5 until all supplies and demands are satisfied (i.e., all rows and columns are crossed out)."

Let's go back to Iteration 3 and the remaining problem:

| Origin \ Destination | D3  | Supply |
| :------------------- | :-- | :----- |
| O2                   | 12  | 25     |
| O3                   | 18  | 5      |
| Demand               | 25  | 25     |

Here, O2 has 25 supply, O3 has 5 supply. Demand for D3 is 25.

*   **Allocate to (O2, D3):** Allocate $\min(25, 25) = 25$.
    *   O2 supply becomes 0.
    *   D3 demand becomes 0.

This allocation seems to leave O3 with unallocated supply. This indicates a common pitfall: the heuristic might not perfectly balance allocations if not carefully managed.

Let's re-think Iteration 3. We have two rows (O2, O3) and one column (D3). We need to allocate 25 units.

*   **Option 1:** Allocate as much as possible to (O2, D3) first, since it has a lower cost.
    *   Allocate 25 to (O2, D3). O2 is exhausted. D3 demand is met. O3 supply (5) is unallocated. This is problematic.

*   **Option 2:** Consider the remaining supplies and demands and make allocations.
    *   From O2 (supply 25), we can give 25 to D3 (cost 12).
    *   From O3 (supply 5), we can give 5 to D3 (cost 18).
    *   Total supply = 25 + 5 = 30. Total demand = 25.

We need to assign 25 units to D3.
*   Assign 25 units to (O2, D3). O2 is exhausted. D3 is satisfied. O3 has 5 units left.

This still leaves the O3 supply unallocated.
The rule is "allocate as much as possible".

Let's try allocating to the cell with the highest cost in the remaining column first if it's the only way to balance. No, VAM prioritizes the *lowest* cost in the highest penalty row/column.

**Let's follow a systematic allocation approach for the final stage:**
We have demand of 25 for D3.
Available supply for D3 is 25 (from O2) + 5 (from O3) = 30.

*   Allocate to the cell with the lowest cost: (O2, D3) cost 12.
    *   Supply at O2 = 25, Demand at D3 = 25.
    *   Allocate $\min(25, 25) = 25$ to (O2, D3).
    *   O2 supply = 0. D3 demand = 0.

Now, O3 has 5 supply, and all demands are met. This means O3 has a surplus of 5. This is fine; the total supply is 50 and total demand is 50.

The allocations are:
*   (O1, D2): 15
*   (O3, D1): 5
*   (O2, D3): 25

Let's verify if all supplies and demands are met:
*   O1 Supply: 15 (allocated 15) - OK
*   O2 Supply: 25 (allocated 25) - OK
*   O3 Supply: 10 (allocated 5) - **Remaining supply of 5**. This is the issue.

**There must be a step missed or a rule interpretation:**

When a row/column is eliminated, any remaining values in that row/column for *other* assignments are still valid.

Let's retry the whole example meticulously.

| Origin \ Destination | D1  | D2  | D3  | Supply |
| :------------------- | :-- | :-- | :-- | :----- |
| O1                   | 10  | 2   | 20  | 15     |
| O2                   | 16  | 8   | 12  | 25     |
| O3                   | 2   | 4   | 18  | 10     |
| Demand               | 5   | 15  | 30  | 50     |

**Iteration 1:**
*   Row Penalties: O1=8, O2=4, O3=2
*   Column Penalties: D1=8, D2=2, D3=6
*   Max Penalty: 8 (O1 or D1). Let's pick O1.
*   Smallest cost in O1: 2 (at O1, D2).
*   Supply O1=15, Demand D2=15.
*   Allocate 15 to (O1, D2).
*   Eliminate O1 and D2.

Remaining Table:
| Origin \ Destination | D1  | D3  | Supply |
| :------------------- | :-- | :-- | :----- |
| O2                   | 16  | 12  | 25     |
| O3                   | 2   | 18  | 10     |
| Demand               | 5   | 30  | 35     |

**Iteration 2:**
*   Row Penalties: O2=(16-12)=4, O3=(18-2)=16
*   Column Penalties: D1=(16-2)=14, D3=(18-12)=6
*   Max Penalty: 16 (O3).
*   Smallest cost in O3: 2 (at O3, D1).
*   Supply O3=10, Demand D1=5.
*   Allocate 5 to (O3, D1).
*   Eliminate D1. O3 supply remaining = 10-5 = 5.

Remaining Table:
| Origin \ Destination | D3  | Supply |
| :------------------- | :-- | :----- |
| O2                   | 12  | 25     |
| O3                   | 18  | 5      |
| Demand               | 30  | 30     |

**Iteration 3:**
*   Only one column (D3) and two rows (O2, O3) remain.
*   We need to allocate 30 units to D3.
*   From O2 (supply 25), cost is 12.
*   From O3 (supply 5), cost is 18.

*   **VAM rule:** In this final stage where a single row or column remains, we allocate to the cell with the minimum cost until the demand of that row/column is met.
*   Allocate to the cell with the lowest cost in the remaining column: (O2, D3) with cost 12.
    *   Supply at O2 = 25. Demand at D3 = 30.
    *   Allocate $\min(25, 30) = 25$ to (O2, D3).
    *   O2 supply becomes 0. O2 is eliminated.
    *   D3 demand becomes 30 - 25 = 5.

Remaining Table:
| Origin \ Destination | D3  | Supply |
| :------------------- | :-- | :----- |
| O3                   | 18  | 5      |
| Demand               | 5   | 5      |

**Iteration 4:**
*   Only one cell remains: (O3, D3) with cost 18.
*   Supply at O3 = 5. Demand at D3 = 5.
*   Allocate $\min(5, 5) = 5$ to (O3, D3).
*   O3 supply becomes 0. D3 demand becomes 0.

**Final Allocations:**
*   (O1, D2): 15 units
*   (O3, D1): 5 units
*   (O2, D3): 25 units
*   (O3, D3): 5 units

Let's verify this solution:
*   O1: 15 (Supply=15, Demand=0) - OK
*   O2: 25 (Supply=25, Demand=0) - OK
*   O3: 5 + 5 = 10 (Supply=10, Demand=0) - OK
*   D1: 5 (Demand=5, Supply=0) - OK
*   D2: 15 (Demand=15, Supply=0) - OK
*   D3: 25 + 5 = 30 (Demand=30, Supply=0) - OK

This is a valid IBFS. Let's calculate the total cost.
Total Cost = (15 * 2) + (5 * 2) + (25 * 12) + (5 * 18)
Total Cost = 30 + 10 + 300 + 90 = **430**

This looks like a correct VAM application.

#### 3.3 Advantage of VAM

*   **Near-Optimal Solution:** VAM generally provides a better initial feasible solution than the North-West Corner Rule or the Least Cost Entry Method.
*   **Fewer Iterations:** A better starting solution usually leads to fewer iterations in the subsequent optimization phase (e.g., Stepping Stone or MODI method), saving computational time.
*   **Intuitive Approach:** The penalty calculation reflects the cost of not using the best routes, making it an intuitive method.

#### 3.4 Disadvantages of VAM

*   **Heuristic:** It is a heuristic method, meaning it does not guarantee the absolute optimal solution.
*   **More Computations:** Calculating penalties at each step requires more computation than simpler methods.
*   **Ambiguity:** Ties in penalties or minimum costs can lead to different initial solutions, but VAM is generally robust.

---

### 4. Comparison with Other Initial Solution Methods

*   **North-West Corner Rule (NWCR):**
    *   Starts at the top-left cell of the transportation tableau.
    *   Allocates the maximum possible to that cell, then moves right or down, covering all cells until supply and demand are met.
    *   Simple to apply but often results in a very poor initial solution.

*   **Least Cost Entry Method (LCEM):**
    *   Identifies the cell with the lowest transportation cost in the entire tableau.
    *   Allocates the maximum possible to this cell and then eliminates the satisfied row or column.
    *   Repeats until all allocations are made.
    *   Generally yields a better solution than NWCR, but VAM is usually superior.

*   **Vogel's Approximation Method (VAM):**
    *   As described above, focuses on minimizing penalties.
    *   Typically provides the best IBFS among these three methods.

---

### 5. Practice Questions

1.  Find an initial basic feasible solution using Vogel's Approximation Method for the following transportation problem:

    | Origin \ Destination | D1 | D2 | D3 | D4 | Supply |
    | :------------------- | :- | :- | :- | :- | :----- |
    | O1                   | 1  | 2  | 3  | 4  | 50     |
    | O2                   | 3  | 1  | 4  | 5  | 60     |
    | O3                   | 2  | 3  | 2  | 1  | 40     |
    | Demand               | 30 | 40 | 30 | 50 | 150    |

2.  Determine the initial basic feasible solution using VAM and calculate its total cost for the given transportation problem:

    | Factory \ Warehouse | W1 | W2 | W3 | W4 | Supply |
    | :------------------ | :- | :- | :- | :- | :----- |
    | F1                  | 15 | 10 | 12 | 18 | 25     |
    | F2                  | 10 | 11 | 15 | 9  | 35     |
    | F3                  | 20 | 14 | 10 | 12 | 40     |
    | Demand              | 30 | 20 | 30 | 20 | 100    |

---

### 6. Answers to Practice Questions

**Question 1:**

| Origin \ Destination | D1 | D2 | D3 | D4 | Supply | Row Penalty |
| :------------------- | :- | :- | :- | :- | :----- | :---------- |
| O1                   | 1  | 2  | 3  | 4  | 50     | 1 (2-1)     |
| O2                   | 3  | 1  | 4  | 5  | 60     | 3 (4-1)     |
| O3                   | 2  | 3  | 2  | 1  | 40     | 1 (2-1)     |
| Demand               | 30 | 40 | 30 | 50 | 150    |             |
| Col Penalty          | 1 (2-1) | 1 (3-2) | 2 (4-2) | 3 (5-2) |        |             |

*   **Iteration 1:** Max Penalty = 3 (O2 or D4). Let's choose O2. Smallest cost in O2 is 1 (at O2, D2). Supply O2=60, Demand D2=40. Allocate 40 to (O2, D2). Eliminate D2. O2 supply remaining = 20.

    Remaining Table:
    | Origin \ Destination | D1 | D3 | D4 | Supply | Row Penalty |
    | :------------------- | :- | :- | :- | :----- | :---------- |
    | O1                   | 1  | 2  | 3  | 50     | 1 (2-1)     |
    | O2                   | 3  | 4  | 5  | 20     | 1 (4-3)     |
    | O3                   | 2  | 2  | 1  | 40     | 1 (2-1)     |
    | Demand               | 30 | 30 | 50 | 110    |             |
    | Col Penalty          | 1 (2-1) | 2 (4-2) | 2 (3-1) |        |             |

*   **Iteration 2:** Max Penalty = 2 (D3 or D4). Let's choose D4. Smallest cost in D4 is 1 (at O3, D4). Supply O3=40, Demand D4=50. Allocate 40 to (O3, D4). Eliminate O3. D4 demand remaining = 10.

    Remaining Table:
    | Origin \ Destination | D1 | D3 | D4 | Supply | Row Penalty |
    | :------------------- | :- | :- | :- | :----- | :---------- |
    | O1                   | 1  | 2  | 3  | 50     | 1 (2-1)     |
    | O2                   | 3  | 4  | 5  | 20     | 1 (4-3)     |
    | Demand               | 30 | 30 | 10 | 70     |             |
    | Col Penalty          | 2 (3-1) | 2 (4-2) | 2 (5-3) |        |             |

*   **Iteration 3:** Max Penalty = 2 (D1, D3, D4). Let's choose D1. Smallest cost in D1 is 1 (at O1, D1). Supply O1=50, Demand D1=30. Allocate 30 to (O1, D1). Eliminate D1. O1 supply remaining = 20.

    Remaining Table:
    | Origin \ Destination | D3 | D4 | Supply | Row Penalty |
    | :------------------- | :- | :- | :----- | :---------- |
    | O1                   | 2  | 3  | 20     | 1 (3-2)     |
    | O2                   | 4  | 5  | 20     | 1 (5-4)     |
    | Demand               | 30 | 10 | 40     |             |
    | Col Penalty          | 2 (4-2) | 2 (5-3) |        |             |

*   **Iteration 4:** Max Penalty = 2 (D3 or D4). Let's choose D3. Smallest cost in D3 is 2 (at O1, D3). Supply O1=20, Demand D3=30. Allocate 20 to (O1, D3). Eliminate O1. D3 demand remaining = 10.

    Remaining Table:
    | Origin \ Destination | D4 | Supply |
    | :------------------- | :- | :----- |
    | O2                   | 5  | 20     |
    | Demand               | 10 | 10     |

*   **Iteration 5:** Only one cell remains: (O2, D4). Supply O2=20, Demand D4=10. Allocate 10 to (O2, D4). O2 supply remaining = 10. D4 demand met.

This is not correct. Revisit Iteration 4.

**Corrected Iteration 3:**
After allocating 30 to (O1, D1), O1 supply remaining is 20.
Table:
| Origin \ Destination | D3 | D4 | Supply | Row Penalty |
| :------------------- | :- | :- | :----- | :---------- |
| O1                   | 2  | 3  | 20     | 1 (3-2)     |
| O2                   | 4  | 5  | 20     | 1 (5-4)     |
| Demand               | 30 | 10 | 40     |             |
| Col Penalty          | 2 (4-2) | 2 (5-3) |        |             |

*   **Iteration 4:** Max Penalty = 2 (D3 or D4). Let's choose D3. Smallest cost in D3 is 2 (at O1, D3). Supply O1=20, Demand D3=30. Allocate $\min(20, 30) = 20$ to (O1, D3). Eliminate O1. D3 demand remaining = 30 - 20 = 10.

    Remaining Table:
    | Origin \ Destination | D4 | Supply |
    | :------------------- | :- | :----- |
    | O2                   | 5  | 20     |
    | Demand               | 10 | 10     |

*   **Iteration 5:** Only one cell remains: (O2, D4). Supply O2=20, Demand D4=10. Allocate $\min(20, 10) = 10$ to (O2, D4). O2 supply remaining = 20 - 10 = 10. D4 demand met.

This still leaves O2 with 10 units of unallocated supply. This is an issue with the manual trace.

Let's re-evaluate the penalties after Iteration 2.
| Origin \ Destination | D1 | D3 | D4 | Supply | Row Penalty |
| :------------------- | :- | :- | :- | :----- | :---------- |
| O1                   | 1  | 2  | 3  | 50     | 1 (2-1)     |
| O2                   | 3  | 4  | 5  | 20     | 1 (4-3)     |
| Demand               | 30 | 30 | 10 | 70     |             |
| Col Penalty          | 2 (3-1) | 2 (4-2) | 2 (5-3) |        |             |

All penalties are 2. This is a tie. Let's pick column D4. Smallest cost in D4 is 3 (at O1, D4). Supply O1=50, Demand D4=10. Allocate 10 to (O1, D4). Eliminate D4. O1 supply remaining = 40.

Remaining Table:
| Origin \ Destination | D1 | D3 | Supply | Row Penalty |
| :------------------- | :- | :- | :----- | :---------- |
| O1                   | 1  | 2  | 40     | 1 (2-1)     |
| O2                   | 3  | 4  | 20     | 1 (4-3)     |
| Demand               | 30 | 30 | 60     |             |
| Col Penalty          | 2 (3-1) | 2 (4-2) |        |             |

Max Penalty is 2 for both D1 and D3. Let's pick D1. Smallest cost in D1 is 1 (at O1, D1). Supply O1=40, Demand D1=30. Allocate 30 to (O1, D1). Eliminate D1. O1 supply remaining = 10.

Remaining Table:
| Origin \ Destination | D3 | Supply |
| :------------------- | :- | :----- |
| O1                   | 2  | 10     |
| O2                   | 4  | 20     |
| Demand               | 30 | 30     |

Last column D3. Need to allocate 30.
From O1 (supply 10), cost 2.
From O2 (supply 20), cost 4.

Allocate to (O1, D3): $\min(10, 30) = 10$. O1 exhausted. D3 demand remaining = 20.
Allocate to (O2, D3): $\min(20, 20) = 20$. O2 exhausted. D3 demand met.

**Final Allocations (Question 1):**
*   (O2, D2): 40
*   (O3, D4): 40
*   (O1, D1): 30
*   (O1, D4): 10
*   (O1, D3): 10
*   (O2, D3): 20

Let's check supplies and demands:
O1: 30 + 10 + 10 = 50 (Supply 50) - OK
O2: 40 + 20 = 60 (Supply 60) - OK
O3: 40 (Supply 40) - OK
D1: 30 (Demand 30) - OK
D2: 40 (Demand 40) - OK
D3: 10 + 20 = 30 (Demand 30) - OK
D4: 10 + 40 = 50 (Demand 50) - OK

This is a valid IBFS.
Total Cost = (40*1) + (40*1) + (30*1) + (10*3) + (10*2) + (20*4)
Total Cost = 40 + 40 + 30 + 30 + 20 + 80 = **240**

---

**Question 2:**

| Factory \ Warehouse | W1 | W2 | W3 | W4 | Supply | Row Penalty |
| :------------------ | :- | :- | :- | :- | :----- | :---------- |
| F1                  | 15 | 10 | 12 | 18 | 25     | 2 (12-10)   |
| F2                  | 10 | 11 | 15 | 9  | 35     | 2 (11-9)    |
| F3                  | 20 | 14 | 10 | 12 | 40     | 4 (14-10)   |
| Demand              | 30 | 20 | 30 | 20 | 100    |             |
| Col Penalty         | 5 (15-10) | 3 (14-11) | 2 (12-10) | 3 (12-9) |        |             |

*   **Iteration 1:** Max Penalty = 5 (W1). Smallest cost in W1 is 10 (at F2, W1). Supply F2=35, Demand W1=30. Allocate 30 to (F2, W1). Eliminate W1. F2 supply remaining = 5.

    Remaining Table:
    | Factory \ Warehouse | W2 | W3 | W4 | Supply | Row Penalty |
    | :------------------ | :- | :- | :- | :----- | :---------- |
    | F1                  | 10 | 12 | 18 | 25     | 2 (12-10)   |
    | F2                  | 11 | 15 | 9  | 5      | 2 (11-9)    |
    | F3                  | 14 | 10 | 12 | 40     | 4 (14-10)   |
    | Demand              | 20 | 30 | 20 | 70     |             |
    | Col Penalty         | 3 (14-11) | 2 (12-10) | 3 (12-9) |        |             |

*   **Iteration 2:** Max Penalty = 4 (F3). Smallest cost in F3 is 10 (at F3, W3). Supply F3=40, Demand W3=30. Allocate 30 to (F3, W3). Eliminate W3. F3 supply remaining = 10.

    Remaining Table:
    | Factory \ Warehouse | W2 | W4 | Supply | Row Penalty |
    | :------------------ | :- | :- | :----- | :---------- |
    | F1                  | 10 | 18 | 25     | 8 (18-10)   |
    | F2                  | 11 | 9  | 5      | 2 (11-9)    |
    | F3                  | 14 | 12 | 10     | 2 (14-12)   |
    | Demand              | 20 | 20 | 40     |             |
    | Col Penalty         | 3 (14-11) | 3 (18-12) |        |             |

*   **Iteration 3:** Max Penalty = 3 (W2 or W4). Let's choose W4. Smallest cost in W4 is 9 (at F2, W4). Supply F2=5, Demand W4=20. Allocate 5 to (F2, W4). Eliminate F2. W4 demand remaining = 15.

    Remaining Table:
    | Factory \ Warehouse | W2 | W4 | Supply | Row Penalty |
    | :------------------ | :- | :- | :----- | :---------- |
    | F1                  | 10 | 18 | 25     | 8 (18-10)   |
    | F3                  | 14 | 12 | 10     | 2 (14-12)   |
    | Demand              | 20 | 15 | 35     |             |
    | Col Penalty         | 4 (14-10) | 6 (18-12) |        |             |

*   **Iteration 4:** Max Penalty = 6 (W4). Smallest cost in W4 is 12 (at F3, W4). Supply F3=10, Demand W4=15. Allocate 10 to (F3, W4). Eliminate F3. W4 demand remaining = 5.

    Remaining Table:
    | Factory \ Warehouse | W2 | Supply |
    | :------------------ | :- | :----- |
    | F1                  | 10 | 25     |
    | Demand              | 20 | 20     |

*   **Iteration 5:** Only one column W2 remains. Need to allocate 20.
    From F1 (supply 25), cost 10.
    Allocate 20 to (F1, W2). F1 supply remaining = 5. W2 demand met.

    This implies F1 has 5 units unallocated. This is again an issue of trace.

Let's go back to Iteration 3 and re-evaluate penalties.
| Factory \ Warehouse | W2 | W4 | Supply | Row Penalty |
| :------------------ | :- | :- | :----- | :---------- |
| F1                  | 10 | 18 | 25     | 8 (18-10)   |
| F2                  | 11 | 9  | 5      | 2 (11-9)    |
| F3                  | 14 | 12 | 10     | 2 (14-12)   |
| Demand              | 20 | 20 | 40     |             |
| Col Penalty         | 3 (14-11) | 3 (18-12) |        |             |

Max Penalty = 3 (W2 or W4). Let's choose W2. Smallest cost in W2 is 10 (at F1, W2). Supply F1=25, Demand W2=20. Allocate 20 to (F1, W2). Eliminate W2. F1 supply remaining = 5.

Remaining Table:
| Factory \ Warehouse | W4 | Supply | Row Penalty |
| :------------------ | :- | :----- | :---------- |
| F1                  | 18 | 5      | N/A         |
| F2                  | 9  | 5      | N/A         |
| F3                  | 12 | 10     | N/A         |
| Demand              | 20 | 20     |             |
| Col Penalty         | 3 (18-9) |        |             |

*   **Iteration 4:** Only column W4 remains. Need to allocate 20.
    From F1 (supply 5), cost 18.
    From F2 (supply 5), cost 9.
    From F3 (supply 10), cost 12.

    Allocate to (F2, W4): $\min(5, 20) = 5$. F2 exhausted. W4 demand remaining = 15.
    Allocate to (F3, W4): $\min(10, 15) = 10$. F3 exhausted. W4 demand remaining = 5.
    Allocate to (F1, W4): $\min(5, 5) = 5$. F1 exhausted. W4 demand met.

**Final Allocations (Question 2):**
*   (F2, W1): 30
*   (F3, W3): 30
*   (F1, W2): 20
*   (F2, W4): 5
*   (F3, W4): 10
*   (F1, W4): 5

Let's check supplies and demands:
F1: 20 + 5 = 25 (Supply 25) - OK
F2: 30 + 5 = 35 (Supply 35) - OK
F3: 30 + 10 = 40 (Supply 40) - OK
W1: 30 (Demand 30) - OK
W2: 20 (Demand 20) - OK
W3: 30 (Demand 30) - OK
W4: 5 + 10 + 5 = 20 (Demand 20) - OK

This is a valid IBFS.
Total Cost = (30*10) + (30*10) + (20*10) + (5*9) + (10*12) + (5*18)
Total Cost = 300 + 300 + 200 + 45 + 120 + 90 = **1055**

---

### 7. Key Points to Remember

*   VAM is a heuristic method for finding an initial basic feasible solution to transportation problems.
*   It focuses on minimizing the "penalties" (differences between the two lowest costs in rows/columns).
*   Always recalculate penalties after eliminating a row or column.
*   In the case of ties in penalties or minimum costs, any choice can be made, but consistency is good.
*   The method requires careful tracking of remaining supplies and demands.
*   VAM generally provides a better starting point than NWCR or LCEM, potentially reducing the number of iterations in optimization methods.
*   Ensure the transportation problem is balanced before applying VAM (or balance it by adding dummy rows/columns).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 8. References from Textbooks

*   **Operations Research-Principles and Applications by Srinivasan, G. (PHI Pvt. Ltd., Third Edition, 2017):** Chapter 3, Transportation Problems, section on "Initial Basic Feasible Solution - VAM".
*   **Operations Research by Prem Kumar Gupta & D. S. Hira (S Chand publication, Third Edition, 2008):** Chapter 5, Transportation Problems, section on "Vogel's Approximation Method".
*   **Quantitative Techniques in Management by N. D Vohra. Hitesh Arora (McGraw Hill., Sixth Edition, 2021):** Chapter 9, Transportation Problems, section on "Vogel's Approximation Method".

---
This concludes the notes on Vogel's Approximation Method. Remember to practice these steps with various examples to gain proficiency.