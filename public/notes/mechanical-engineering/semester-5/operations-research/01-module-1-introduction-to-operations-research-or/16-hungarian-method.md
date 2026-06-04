---
title: "Hungarian method."
subject: "OPERATIONS RESEARCH"
module: "Module 1: Introduction to Operations Research (OR)"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf480446361e"
status: "completed"
scrapedAt: "2026-05-20T18:01:52.412Z"
---
# Operations Research: Module 1 - Introduction to OR

## Topic: The Hungarian Method

### 1. Introduction to the Hungarian Method

The Hungarian method is a combinatorial optimization algorithm that solves the **assignment problem** in polynomial time. It is a special case of linear programming. The assignment problem deals with allocating a set of resources (e.g., workers, machines) to a set of tasks (e.g., jobs, projects) in a way that minimizes or maximizes a certain objective function, typically the total cost or profit.

**Key Concepts:**

*   **Assignment Problem:** A problem where $n$ resources are to be assigned to $n$ tasks, with each resource assigned to exactly one task and each task assigned to exactly one resource.
*   **Cost Matrix:** A square matrix where the entry $c_{ij}$ represents the cost (or profit, or time) of assigning resource $i$ to task $j$.
*   **Optimal Assignment:** An assignment that minimizes (or maximizes) the total cost (or profit).

**Textbook References:**

*   **Srinivasan, G. (2017). *Operations Research-Principles and Applications*. PHI Pvt. Ltd.** - Discusses the assignment problem and its solution using the Hungarian method in its chapters on Linear Programming or Special Types of Linear Programming Problems.
*   **Gupta, P. K., & Hira, D. S. (2008). *Operations Research*. S Chand publication.** - Provides a detailed explanation of the Hungarian method as a technique for solving the assignment problem.
*   **Vohra, N. D., & Arora, H. (2021). *Quantitative Techniques in Management*. McGraw Hill.** - Covers the assignment problem and its solution through the Hungarian algorithm, often presented as a specific application of linear programming.

### 2. The Assignment Problem Formulation

Given an $n \times n$ cost matrix $C = [c_{ij}]$, where $c_{ij}$ is the cost of assigning resource $i$ to task $j$, we want to find an assignment (a set of $n$ entries in the matrix, one from each row and one from each column) such that the total cost is minimized.

Let $x_{ij}$ be a binary decision variable such that:
$x_{ij} = 1$ if resource $i$ is assigned to task $j$
$x_{ij} = 0$ otherwise

**Objective Function (Minimization):**
Minimize $Z = \sum_{i=1}^{n} \sum_{j=1}^{n} c_{ij} x_{ij}$

**Constraints:**

*   **Each resource is assigned to exactly one task:**
    $\sum_{j=1}^{n} x_{ij} = 1$ for each $i = 1, 2, \dots, n$
*   **Each task is assigned to exactly one resource:**
    $\sum_{i=1}^{n} x_{ij} = 1$ for each $j = 1, 2, \dots, n$
*   **Binary variables:**
    $x_{ij} \in \{0, 1\}$

**Maximization Problem:** If the problem is to maximize profit, we can convert it to a minimization problem by:
1.  Finding the maximum value ($M$) in the entire profit matrix.
2.  Subtracting each profit element from $M$ to get a cost matrix.
3.  Solving the minimization problem using the Hungarian method.

**Alignment with Course Outcomes:**

*   **CO1:** Formulating and solving linear programming problems (the assignment problem is a type of LP problem). Understanding the constraints and objective function directly relates to formulation. Solving it via Hungarian method addresses the solution aspect. (Knowledge Level: K2, K3)

### 3. Steps of the Hungarian Method

The Hungarian method aims to find an optimal assignment by transforming the cost matrix and identifying zero-cost assignments.

**Step 1: Row Reduction**

*   For each row, find the smallest element.
*   Subtract this smallest element from every element in that row.
*   This process ensures that each row has at least one zero. The relative costs within each row remain unchanged, and the total cost is reduced by the sum of the minimums subtracted from each row.

**Step 2: Column Reduction**

*   For each column, find the smallest element.
*   Subtract this smallest element from every element in that column.
*   This process ensures that each column also has at least one zero.

**Step 3: Cover all Zeros with Minimum Number of Lines**

*   The goal is to determine if an optimal assignment (with total cost zero in the reduced matrix) is possible. This is achieved by covering all the zeros in the matrix with the minimum possible number of straight lines (either horizontal or vertical).
*   **Procedure to find minimum lines:**
    1.  For each row or column, if it contains exactly one uncovered zero, draw a line through that zero and cross out all other zeros in the same row and column.
    2.  If any row or column contains more than one uncovered zero, do not draw a line yet.
    3.  If all zeros are covered by lines, check if the number of lines equals the order of the matrix ($n$).
        *   If yes, an optimal assignment is possible using the current zeros. Proceed to Step 4.
        *   If no, proceed to Step 5.

**Step 4: Optimal Assignment**

*   If the minimum number of lines equals $n$, an optimal assignment can be made.
*   Identify an assignment of zeros such that there is exactly one zero in each row and each column. This can be done by:
    *   Look for rows/columns with only one available zero. Make that assignment.
    *   If multiple zeros are available in a row/column, postpone the decision for that row/column until a row/column with a unique zero is found.
    *   If a row/column has multiple zeros, and no other row/column has a unique zero, arbitrarily select one zero for assignment and cross out other zeros in the same row/column. Repeat until all rows/columns are assigned.
*   The total cost of the optimal assignment is the sum of the original costs corresponding to the assigned zeros.

**Step 5: Adjusting the Matrix (If Optimal Assignment Not Found)**

*   If the minimum number of lines is less than $n$, the current matrix does not contain an optimal assignment. We need to modify the matrix to create more zeros or shift existing zeros.
*   **Procedure:**
    1.  Find the smallest element ($k$) in the entire matrix that is *not* covered by any line.
    2.  Subtract $k$ from all uncovered elements.
    3.  Add $k$ to all elements that are covered by *two* lines (i.e., intersections of horizontal and vertical lines).
    4.  Elements covered by only one line remain unchanged.
*   After this adjustment, return to Step 3 to cover all zeros with a minimum number of lines in the new matrix. Repeat the process until an optimal assignment is found.

**Textbook References:**

*   **Gupta, P. K., & Hira, D. S. (2008). *Operations Research*. S Chand publication.** - This book typically provides a step-by-step approach with clear illustrations for each step of the Hungarian method.
*   **Srinivasan, G. (2017). *Operations Research-Principles and Applications*. PHI Pvt. Ltd.** - Explains the logic behind each step, particularly the matrix transformation in Step 5, linking it to primal-dual concepts in linear programming.
*   **Vohra, N. D., & Arora, H. (2021). *Quantitative Techniques in Management*. McGraw Hill.** - Offers practical examples and visual aids to understand the zero-covering and matrix adjustment procedures.

### 4. Example: Minimization Problem

Let's consider assigning 4 workers to 4 tasks with the following cost matrix:

|       | Task 1 | Task 2 | Task 3 | Task 4 |
| :---- | :----- | :----- | :----- | :----- |
| **W1** | 8      | 6      | 5      | 7      |
| **W2** | 4      | 5      | 3      | 6      |
| **W3** | 7      | 8      | 4      | 3      |
| **W4** | 5      | 4      | 6      | 5      |

**Objective:** Minimize the total cost of assignment.

**Solution:**

**Step 1: Row Reduction**

*   Row 1 min = 5. Subtract 5 from Row 1: [3, 1, 0, 2]
*   Row 2 min = 3. Subtract 3 from Row 2: [1, 2, 0, 3]
*   Row 3 min = 3. Subtract 3 from Row 3: [4, 5, 1, 0]
*   Row 4 min = 4. Subtract 4 from Row 4: [1, 0, 2, 1]

Reduced Matrix (after Row Reduction):

|       | Task 1 | Task 2 | Task 3 | Task 4 |
| :---- | :----- | :----- | :----- | :----- |
| **W1** | 3      | 1      | 0      | 2      |
| **W2** | 1      | 2      | 0      | 3      |
| **W3** | 4      | 5      | 1      | 0      |
| **W4** | 1      | 0      | 2      | 1      |

**Step 2: Column Reduction**

*   Column 1 min = 1. Subtract 1 from Col 1: [2, 0, 3, 0]
*   Column 2 min = 0. No change.
*   Column 3 min = 0. No change.
*   Column 4 min = 0. No change.

Reduced Matrix (after Column Reduction):

|       | Task 1 | Task 2 | Task 3 | Task 4 |
| :---- | :----- | :----- | :----- | :----- |
| **W1** | 2      | 1      | 0      | 2      |
| **W2** | 0      | 2      | 0      | 3      |
| **W3** | 3      | 5      | 1      | 0      |
| **W4** | 0      | 0      | 2      | 1      |

**Step 3: Cover all Zeros with Minimum Lines**

Let's try to find an assignment.
*   Row 1: One zero at (W1, T3). Assign W1 to T3. Cross out other zeros in row 1 and col 3.
*   Row 2: Two zeros at (W2, T1), (W2, T3). T3 is already assigned. One zero at (W2, T1). Assign W2 to T1. Cross out other zeros in row 2 and col 1.
*   Row 3: One zero at (W3, T4). Assign W3 to T4. Cross out other zeros in row 3 and col 4.
*   Row 4: One zero at (W4, T2). Assign W4 to T2. Cross out other zeros in row 4 and col 2.

We made assignments for all workers. Let's check the number of lines needed to cover all zeros.

*   **Attempt 1:**
    *   Zero at (W1, T3). Cover Row 1.
    *   Zero at (W2, T1). Cover Row 2.
    *   Zero at (W3, T4). Cover Row 3.
    *   Zero at (W4, T2). Cover Row 4.
    *   This uses 4 lines (all rows). An assignment is possible.

*   **Alternative Attempt to find minimum lines:**
    *   Column 2 has one zero at (W4, T2). Line through Col 2. Cross out other zeros in Col 2 (W2, T2 - already covered by row zero logic).
    *   Row 1 has one zero at (W1, T3). Line through Row 1. Cross out other zeros in Row 1 (W2, T3).
    *   Row 3 has one zero at (W3, T4). Line through Row 3. Cross out other zeros in Row 3 (W2, T4 - not a zero).
    *   Row 2 has one zero at (W2, T1). Line through Row 2. Cross out other zeros in Row 2 (W4, T1).
    *   We have covered all zeros using 4 lines (Col 2, Row 1, Row 3, Row 2).

Since we can cover all zeros with 4 lines (which equals the order of the matrix, $n=4$), an optimal assignment exists using the current zeros.

**Step 4: Optimal Assignment**

Let's make the assignments from the identified zeros:

*   From the first attempt:
    *   W1 -> T3 (cost 5)
    *   W2 -> T1 (cost 4)
    *   W3 -> T4 (cost 3)
    *   W4 -> T2 (cost 4)

Let's verify this from the reduced matrix:
*   (W1, T3) is a zero.
*   (W2, T1) is a zero.
*   (W3, T4) is a zero.
*   (W4, T2) is a zero.

This set of assignments satisfies one zero per row and column.

**Total Minimum Cost:** Sum of original costs for these assignments:
$5 + 4 + 3 + 4 = 16$

**Alignment with Course Outcomes:**

*   **CO1:** Demonstrates solving a problem (assignment) that can be formulated as a linear program, applying a specific algorithm (Hungarian method). (Knowledge Level: K2, K3)

### 5. Example: Maximization Problem

Assign 3 engineers to 3 projects to maximize profit.

|       | Project A | Project B | Project C |
| :---- | :-------- | :-------- | :-------- |
| **E1** | 10        | 12        | 8         |
| **E2** | 15        | 11        | 9         |
| **E3** | 12        | 13        | 10        |

**Objective:** Maximize total profit.

**Solution:**

**Step 1: Convert to Minimization Problem**

Find the maximum value in the profit matrix: $M = 15$.
Subtract each element from $M$ to create a cost matrix:

|       | Project A | Project B | Project C |
| :---- | :-------- | :-------- | :-------- |
| **E1** | 15-10=5   | 15-12=3   | 15-8=7    |
| **E2** | 15-15=0   | 15-11=4   | 15-9=6    |
| **E3** | 15-12=3   | 15-13=2   | 15-10=5   |

**Step 2: Apply Hungarian Method to the Cost Matrix**

**Row Reduction:**
*   Row 1 min = 3. Subtract 3: [2, 0, 4]
*   Row 2 min = 0. No change: [0, 4, 6]
*   Row 3 min = 2. Subtract 2: [1, 0, 3]

|       | Project A | Project B | Project C |
| :---- | :-------- | :-------- | :-------- |
| **E1** | 2         | 0         | 4         |
| **E2** | 0         | 4         | 6         |
| **E3** | 1         | 0         | 3         |

**Column Reduction:**
*   Column 1 min = 0. No change.
*   Column 2 min = 0. No change.
*   Column 3 min = 3. Subtract 3: [1, 3, 0]

|       | Project A | Project B | Project C |
| :---- | :-------- | :-------- | :-------- |
| **E1** | 2         | 0         | 1         |
| **E2** | 0         | 4         | 3         |
| **E3** | 1         | 0         | 0         |

**Cover Zeros with Minimum Lines:**
*   Row 1 has one zero at (E1, PB). Assign E1 to PB. Line through Row 1.
*   Row 2 has one zero at (E2, PA). Assign E2 to PA. Line through Row 2.
*   Row 3 has two zeros at (E3, PB) and (E3, PC). PB is assigned. So, zero at (E3, PC) is available. Assign E3 to PC. Line through Row 3.

We have made 3 assignments:
*   E1 -> Project B
*   E2 -> Project A
*   E3 -> Project C

The number of lines used is 3 (all rows). Since $n=3$, an optimal assignment is found.

**Total Maximum Profit:** Sum of original profits for these assignments:
Profit(E1, PB) + Profit(E2, PA) + Profit(E3, PC) = 12 + 15 + 10 = **37**

**Alignment with Course Outcomes:**

*   **CO1:** Demonstrates formulation of a maximization problem into a minimization LP problem and then solving it using the Hungarian method. (Knowledge Level: K2, K3)

### 6. Handling Unbalanced Assignment Problems

An assignment problem is unbalanced if the number of resources is not equal to the number of tasks (i.e., the cost matrix is not square).

**To balance the matrix:**

*   **If more rows than columns ($m > n$):** Add $(m-n)$ dummy columns with zero cost for all assignments.
*   **If more columns than rows ($n > m$):** Add $(n-m)$ dummy rows with zero cost for all assignments.

After balancing, the matrix becomes square, and the Hungarian method can be applied.

**Interpretation of Dummy Assignments:**
*   If a resource is assigned to a dummy task, it means that resource is not assigned to any real task.
*   If a task is assigned to a dummy resource, it means that task is not assigned to any real resource.

**Textbook References:**

*   **Rao, S.S. (2007). *Optimization: Theory and Applications*. Wiley eastern.** - Provides methods for handling unbalanced problems, often by introducing dummy activities or resources.
*   **Hillier, F. S., & Leiberman, G. J. (2015). *Introduction to Operations Research*. McGraw Hill.** - Explains the concept of dummy rows/columns for balancing and their interpretation in the context of the assignment problem.

### 7. Advanced Considerations and Other Techniques

*   **Degeneracy:** While the Hungarian method is guaranteed to find an optimal solution, sometimes the covering of zeros or the assignment process can lead to multiple zeros in a row/column, requiring careful selection. This is related to degeneracy in linear programming.
*   **Large Matrices:** For very large matrices, specialized software or algorithms are used.
*   **Sensitivity Analysis:** Investigating how changes in the cost matrix affect the optimal assignment.

**Reference Books:**

*   **Ravindran, Phillips, and Solberg (1987). *Operations Research Principles and Practice*. Wiley & Sons.** - Might offer insights into the theoretical underpinnings and robustness of the Hungarian method.
*   **Goel, B. S., and Mittal, S. K. (1999). *Operations Research*. Pragati Prakashan, Meerut.** - Could provide alternative explanations or examples of the Hungarian method and its applications.
*   **Dilip K. Pratikar (2015). *Soft Computing Fundamentals and Applications*. Alpha Science.** - While this book focuses on soft computing, it might indirectly touch upon optimization techniques that complement OR methods, or discuss applications where OR techniques are used.

### 8. Practice Questions

**Question 1 (Minimization):**
Solve the following assignment problem to minimize cost:

|       | Job 1 | Job 2 | Job 3 | Job 4 |
| :---- | :---- | :---- | :---- | :---- |
| **A** | 12    | 7     | 9     | 10    |
| **B** | 9     | 11    | 7     | 8     |
| **C** | 10    | 8     | 6     | 9     |
| **D** | 7     | 9     | 8     | 11    |

**Answer 1:**
*   **Row Reduction:**
    [5, 0, 2, 3], [2, 4, 0, 1], [4, 2, 0, 3], [0, 2, 1, 4]
*   **Column Reduction:**
    [5, 0, 2, 3], [2, 4, 0, 1], [4, 2, 0, 3], [0, 2, 1, 4] (No change as min in each col is 0)
*   **Cover Zeros:**
    *   Zero at (D, J1). Assign D-J1. Line through Row D.
    *   Zero at (A, J2). Assign A-J2. Line through Row A.
    *   Zero at (C, J3). Assign C-J3. Line through Row C.
    *   Zero at (B, J4). Assign B-J4. Line through Row B.
    *   All zeros covered with 4 lines. Optimal assignment found.
*   **Optimal Assignment:** A-J2, B-J4, C-J3, D-J1
*   **Minimum Cost:** 7 + 8 + 6 + 7 = **28**

**Question 2 (Maximization):**
A company has 4 machines and 4 products. The profit (in $1000s) of producing each product on each machine is given below. Assign machines to products to maximize total profit.

|       | P1 | P2 | P3 | P4 |
| :---- | :- | :- | :- | :- |
| **M1** | 3  | 1  | 4  | 2  |
| **M2** | 2  | 4  | 3  | 1  |
| **M3** | 4  | 3  | 2  | 5  |
| **M4** | 1  | 2  | 5  | 3  |

**Answer 2:**
*   **Convert to Minimization:** Max profit M = 5.
    Cost Matrix:
    [2, 4, 1, 3], [3, 1, 2, 4], [1, 2, 3, 0], [4, 3, 0, 2]
*   **Row Reduction:**
    [1, 3, 0, 2], [2, 0, 1, 3], [1, 2, 3, 0], [4, 3, 0, 2]
*   **Column Reduction:**
    [0, 3, 0, 2], [1, 0, 1, 3], [0, 2, 3, 0], [3, 3, 0, 2]
*   **Cover Zeros:**
    *   Row 3: Zeros at (M3, P1), (M3, P4).
    *   Row 4: Zeros at (M4, P3). Assign M4-P3. Line through Row 4.
    *   Row 1: Zeros at (M1, P1), (M1, P3). P3 is assigned. Zero at (M1, P1). Assign M1-P1. Line through Row 1.
    *   Row 2: Zero at (M2, P2). Assign M2-P2. Line through Row 2.
    *   Remaining zero at (M3, P4). Assign M3-P4. Line through Row 3.
    *   Lines: Row 4, Row 1, Row 2, Row 3 (4 lines). Optimal assignment found.
*   **Optimal Assignment:** M1-P1, M2-P2, M3-P4, M4-P3
*   **Maximum Profit:** 3 + 4 + 5 + 5 = **17** ($17,000)

**Question 3 (Unbalanced):**
Assign 3 workers to 4 jobs to minimize cost.

|       | Job 1 | Job 2 | Job 3 | Job 4 |
| :---- | :---- | :---- | :---- | :---- |
| **W1** | 5     | 3     | 7     | 9     |
| **W2** | 6     | 4     | 3     | 7     |
| **W3** | 7     | 5     | 8     | 6     |

**Answer 3:**
*   **Balance the Matrix:** Add a dummy worker (W4) with zero cost for all jobs.

    |       | Job 1 | Job 2 | Job 3 | Job 4 |
    | :---- | :---- | :---- | :---- | :---- |
    | **W1** | 5     | 3     | 7     | 9     |
    | **W2** | 6     | 4     | 3     | 7     |
    | **W3** | 7     | 5     | 8     | 6     |
    | **W4** | 0     | 0     | 0     | 0     |

*   **Row Reduction:**
    [2, 0, 4, 6], [3, 1, 0, 4], [1, 0, 2, 0], [0, 0, 0, 0]
*   **Column Reduction:**
    [2, 0, 4, 6], [3, 1, 0, 4], [1, 0, 2, 0], [0, 0, 0, 0] (No change)
*   **Cover Zeros:**
    *   Row 4 has all zeros. Line through Row 4.
    *   Col 2 has zeros at (W1, J2), (W3, J2).
    *   Col 3 has zero at (W2, J3). Assign W2-J3. Line through Col 3.
    *   Col 4 has zero at (W3, J4). Assign W3-J4. Line through Col 4.
    *   Remaining zero at (W1, J2). Assign W1-J2. Line through Row 1.
    *   Lines: Row 4, Col 3, Col 4, Row 1 (4 lines). Optimal assignment found.
*   **Optimal Assignment:** W1-J2, W2-J3, W3-J4, W4-J1 (Dummy Worker to Job 1).
*   **Minimum Cost:** 3 + 3 + 6 = **12**

### 9. Important Points to Remember

*   The Hungarian method is specifically designed for the **assignment problem**.
*   It guarantees an **optimal solution**.
*   Always ensure the matrix is **square** before applying the method. Balance unbalanced problems by adding dummy rows or columns with zero costs.
*   For maximization problems, convert the profit matrix to a cost matrix by **subtracting elements from the maximum value**.
*   The process of covering zeros with minimum lines is crucial. If the number of lines is less than $n$, the matrix needs to be adjusted.
*   The cost of the optimal assignment is calculated from the **original cost matrix**.

This concludes the notes on the Hungarian method. Ensure you practice solving various assignment problems (minimization, maximization, and unbalanced) to solidify your understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
