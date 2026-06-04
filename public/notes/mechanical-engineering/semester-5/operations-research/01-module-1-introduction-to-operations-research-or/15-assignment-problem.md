---
title: "Assignment problem"
subject: "OPERATIONS RESEARCH"
module: "Module 1: Introduction to Operations Research (OR)"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf480446361d"
status: "completed"
scrapedAt: "2026-05-20T18:01:51.705Z"
---
# Operations Research: Module 1 - Introduction to Operations Research (OR)

## Topic: The Assignment Problem

### 1. Introduction

The assignment problem is a special case of the **transportation problem** in Operations Research. It deals with the problem of assigning a set of jobs to a set of **persons** (or resources) in such a way that the total **cost** (or time, or profit) is **minimized** (or maximized). Each person can be assigned to at most one job, and each job can be assigned to at most one person.

**Key Concept:** The core of the assignment problem is to find an optimal one-to-one matching between two sets of equal size, optimizing a given objective function.

This topic directly supports **CO1: To formulate and solve linear programming problems and transportation problems (Knowledge Level: K2, K3)**, as the assignment problem can be formulated as a linear programming problem and is a specific instance of a transportation problem.

### 2. Problem Formulation

Let there be `n` persons and `n` jobs.
Let $c_{ij}$ be the cost of assigning person `i` to job `j`.

The objective is to assign each person to exactly one job and each job to exactly one person, such that the total cost is minimized.

**Mathematical Formulation (Integer Programming):**

Minimize $Z = \sum_{i=1}^{n} \sum_{j=1}^{n} c_{ij} x_{ij}$

Subject to:
*   $\sum_{j=1}^{n} x_{ij} = 1$ for each person $i = 1, 2, \ldots, n$ (Each person is assigned to exactly one job)
*   $\sum_{i=1}^{n} x_{ij} = 1$ for each job $j = 1, 2, \ldots, n$ (Each job is assigned to exactly one person)
*   $x_{ij} \in \{0, 1\}$ for all $i, j$ (Decision variable: $x_{ij} = 1$ if person $i$ is assigned to job $j$, and $0$ otherwise)

**Types of Assignment Problems:**

*   **Minimization Assignment Problem:** The objective is to minimize the total cost.
*   **Maximization Assignment Problem:** The objective is to maximize the total profit (or efficiency). This can be converted to a minimization problem by multiplying all the profit values by -1 or by subtracting all profit values from the highest profit value.

### 3. Solving the Assignment Problem: The Hungarian Method

The Hungarian Method is an efficient algorithm for solving the assignment problem. It is based on the principle of reducing the cost matrix without changing the optimal assignment.

**Steps of the Hungarian Method (for Minimization):**

1.  **Reduce the Cost Matrix:**
    *   **Row Reduction:** Subtract the smallest element in each row from all elements of that row.
    *   **Column Reduction:** Subtract the smallest element in each column from all elements of that column.

2.  **Cover All Zeros with Minimum Number of Lines:**
    *   Draw the minimum number of horizontal and/or vertical lines required to cover all the zeros in the reduced cost matrix.
    *   **If the number of lines equals `n` (the order of the matrix), an optimal assignment is possible.** Proceed to step 3.
    *   **If the number of lines is less than `n`, the matrix is not optimal yet.** Proceed to step 4.

3.  **Make the Assignment:**
    *   If the number of lines equals `n`, find a set of `n` independent zeros (no two zeros in the same row or column).
    *   To do this systematically:
        *   Look for a row with only one zero. Assign that person to that job. Cross out the row and the column containing this zero.
        *   Look for a column with only one zero. Assign that person to that job. Cross out the row and the column containing this zero.
        *   Repeat until all assignments are made or until no more single zeros can be found.
        *   If multiple zeros are available in a row/column, choose one arbitrarily and proceed. If a conflict arises, backtrack and try a different zero.

4.  **Adjust the Matrix (If Optimal Assignment Not Found):**
    *   Find the smallest element in the matrix that is **not covered** by any line.
    *   Subtract this smallest uncovered element from all uncovered elements.
    *   Add this smallest uncovered element to all elements that are covered by **two** lines (i.e., at the intersection of two lines).
    *   Elements covered by only one line remain unchanged.
    *   Go back to Step 2 and repeat the process of covering zeros with minimum lines.

**Handling Maximization Problems:**

To solve a maximization problem, convert it into a minimization problem:

*   **Method 1: Subtraction from the Maximum Value:**
    *   Find the largest value in the entire profit matrix.
    *   Subtract each element from this largest value.
    *   Solve the resulting minimization problem using the Hungarian Method.

*   **Method 2: Negation:**
    *   Multiply each element in the profit matrix by -1.
    *   Solve the resulting minimization problem using the Hungarian Method. The optimal values of the original problem will be the negative of the optimal values obtained.

### 4. Special Cases and Considerations

*   **Unbalanced Assignment Problem (Unequal number of persons and jobs):**
    *   If the number of persons is greater than the number of jobs, add **dummy jobs** with zero cost for all persons.
    *   If the number of jobs is greater than the number of persons, add **dummy persons** with zero cost for all jobs.
    *   The problem then becomes a balanced assignment problem.

*   **Degeneracy:** In some cases, when making assignments, you might not be able to find `n` independent zeros even when the minimum number of lines equals `n`. This is called degeneracy, and it might require further adjustments or a systematic approach to finding independent zeros.

### 5. Examples

**Example 1: Minimization Problem**

Assign four workers (W1, W2, W3, W4) to four jobs (J1, J2, J3, J4) with the following costs:

|       | J1 | J2 | J3 | J4 |
| :---- | :- | :- | :- | :- |
| **W1**| 10 | 5  | 13 | 11 |
| **W2**| 12 | 9  | 10 | 10 |
| **W3**| 15 | 11 | 12 | 9  |
| **W4**| 10 | 14 | 11 | 7  |

**Solution:**

**Step 1: Row Reduction**
Subtract row minimums:
Row 1: 10 - 5 = 5
Row 2: 9 - 9 = 0
Row 3: 9 - 9 = 0
Row 4: 7 - 7 = 0

|       | J1 | J2 | J3 | J4 |
| :---- | :- | :- | :- | :- |
| **W1**| 5  | 0  | 8  | 6  |
| **W2**| 3  | 0  | 1  | 1  |
| **W3**| 6  | 2  | 3  | 0  |
| **W4**| 3  | 7  | 4  | 0  |

**Step 2: Column Reduction**
Subtract column minimums:
Column 1: 3 - 3 = 0
Column 2: 0 - 0 = 0
Column 3: 1 - 1 = 0
Column 4: 0 - 0 = 0

|       | J1 | J2 | J3 | J4 |
| :---- | :- | :- | :- | :- |
| **W1**| 5  | 0  | 7  | 6  |
| **W2**| 0  | 0  | 0  | 1  |
| **W3**| 3  | 2  | 2  | 0  |
| **W4**| 0  | 4  | 3  | 0  |

**Step 3: Cover Zeros with Minimum Lines**
*   Row 1 has one zero at (W1, J2).
*   Row 2 has three zeros at (W2, J1), (W2, J2), (W2, J3).
*   Row 3 has one zero at (W3, J4).
*   Row 4 has two zeros at (W4, J1), (W4, J4).

Let's try to cover:
*   Cover column J2 (covers zero at W1, J2)
*   Cover column J1 (covers zeros at W2, J1 and W4, J1)
*   Cover column J4 (covers zeros at W3, J4 and W4, J4)

|       | J1 | J2 | J3 | J4 |
| :---- | :- | :- | :- | :- |
| **W1**| 5  | **0**| 7  | 6  |
| **W2**| **0**| 0  | 0  | 1  |
| **W3**| 0  | 2  | 2  | **0**|
| **W4**| **0**| 4  | 3  | 0  |
Lines: 3 (Columns J1, J2, J4). Number of lines (3) < 4. Not optimal.

**Step 4: Adjust the Matrix**
Smallest uncovered element is 2 (at W2, J3).

Subtract 2 from uncovered elements:
(W1, J1): 5-2=3
(W1, J3): 7-2=5
(W1, J4): 6-2=4
(W2, J2): 0-2=-2 (Wait, we should not get negative values. This indicates an error in covering. Let's re-cover.)

**Revised Step 3: Cover Zeros with Minimum Lines**
A systematic way to cover zeros:
*   Assign Row 1: (W1, J2) - only one zero in row. Cross out Row 1 and Col 2.
*   In remaining matrix:
    |       | J1 | J3 | J4 |
    | :---- | :- | :- | :- |
    | **W2**| 0  | 0  | 1  |
    | **W3**| 3  | 2  | 0  |
    | **W4**| 0  | 3  | 0  |
*   Row 3 has one zero at (W3, J4). Assign (W3, J4). Cross out Row 3 and Col 4.
*   In remaining matrix:
    |       | J1 | J3 |
    | :---- | :- | :- |
    | **W2**| 0  | 0  |
    | **W4**| 0  | 3  |
*   Row 4 has two zeros at (W4, J1), (W4, J4 - already crossed out).
*   Column J1 has zeros at (W2, J1) and (W4, J1).
*   Column J3 has zeros at (W2, J3).

Let's cover the zeros.
*   Cover Col 2 (covers W1, J2)
*   Cover Col 4 (covers W3, J4)
*   Cover Col 1 (covers W2, J1 and W4, J1)
*   Cover Row 2 (covers W2, J3)

This covers all zeros with 4 lines. So, an optimal assignment is possible.

|       | J1 | J2 | J3 | J4 |
| :---- | :- | :- | :- | :- |
| **W1**| 5  | **0**| 7  | 6  |
| **W2**| **0**| 0  | 0  | 1  |
| **W3**| 3  | 2  | 2  | **0**|
| **W4**| **0**| 4  | 3  | 0  |
Lines: C1, C2, C4, R2. Total 4 lines.

**Step 3 (Assignment):**
*   Row 1 has one zero at (W1, J2). Assign W1-J2. (Cost: 5)
*   Row 3 has one zero at (W3, J4). Assign W3-J4. (Cost: 9)
*   Now consider the remaining matrix:
    |       | J1 | J3 |
    | :---- | :- | :- |
    | **W2**| 0  | 0  |
    | **W4**| 0  | 3  |
*   In this submatrix, we have a zero at (W2, J1). Assign W2-J1. (Cost: 12)
*   This leaves W4 to be assigned to J3. Assign W4-J3. (Cost: 11)

**Optimal Assignment:**
*   W1 - J2 (Cost: 5)
*   W2 - J1 (Cost: 12)
*   W3 - J4 (Cost: 9)
*   W4 - J3 (Cost: 11)

**Total Minimum Cost = 5 + 12 + 9 + 11 = 37**

**Example 2: Maximization Problem**

A company wants to assign 4 engineers (E1, E2, E3, E4) to 4 projects (P1, P2, P3, P4). The profit (in thousands of dollars) is given below:

|       | P1 | P2 | P3 | P4 |
| :---- | :- | :- | :- | :- |
| **E1**| 10 | 15 | 12 | 14 |
| **E2**| 11 | 10 | 13 | 12 |
| **E3**| 14 | 13 | 10 | 11 |
| **E4**| 15 | 12 | 11 | 10 |

**Solution:**

Convert to minimization problem by subtracting from the maximum value (15).

|       | P1 | P2 | P3 | P4 |
| :---- | :- | :- | :- | :- |
| **E1**| 5  | 0  | 3  | 1  |
| **E2**| 4  | 5  | 2  | 3  |
| **E3**| 1  | 2  | 5  | 4  |
| **E4**| 0  | 3  | 4  | 5  |

**Step 1: Row Reduction** (Already done by converting to minimization)

**Step 2: Column Reduction**
Smallest in Col 1 is 0.
Smallest in Col 2 is 0.
Smallest in Col 3 is 2.
Smallest in Col 4 is 1.

Subtract column minimums:
Col 1: 0
Col 2: 0
Col 3: subtract 2 (3-2=1, 2-2=0, 5-2=3, 4-2=2)
Col 4: subtract 1 (1-1=0, 3-1=2, 4-1=3, 5-1=4)

|       | P1 | P2 | P3 | P4 |
| :---- | :- | :- | :- | :- |
| **E1**| 5  | 0  | 1  | 0  |
| **E2**| 4  | 5  | 0  | 2  |
| **E3**| 1  | 2  | 3  | 3  |
| **E4**| 0  | 3  | 2  | 4  |

**Step 3: Cover Zeros with Minimum Lines**
*   Row 1 has two zeros (P2, P4).
*   Row 2 has one zero (P3).
*   Row 3 has one zero (P1).
*   Row 4 has one zero (P1).

Let's assign:
*   Row 2: Assign E2-P3. Cross out R2, C3.
*   Row 3: Assign E3-P1. Cross out R3, C1.
*   Row 4 has one zero at (E4, P1 - already crossed out). This means we need adjustment.

Let's try covering zeros systematically:
*   Cover Col 3 (covers E2, P3)
*   Cover Col 4 (covers E1, P4)
*   Cover Row 4 (covers E4, P1)
*   Cover Col 1 (covers E3, P1 and E4, P1 - need to be careful, E4, P1 is covered by R4)

Let's retry covering:
*   Assign Row 2: (E2, P3). Cross out R2, C3.
*   Assign Row 3: (E3, P1). Cross out R3, C1.
*   Assign Row 1: (E1, P2) or (E1, P4). Let's try (E1, P2). Cross out R1, C2.
*   This leaves E4 for P4. Assign E4-P4. (Cost: 10)

Let's check the original matrix after these assignments:
E1-P2 (15)
E2-P3 (13)
E3-P1 (14)
E4-P4 (10)
Total Profit = 15 + 13 + 14 + 10 = 52.

Let's verify with the reduced matrix using lines:
|       | P1 | P2 | P3 | P4 |
| :---- | :- | :- | :- | :- |
| **E1**| 5  | **0**| 1  | **0**|
| **E2**| 4  | 5  | **0**| 2  |
| **E3**| **0**| 2  | 3  | 3  |
| **E4**| 0  | 3  | 2  | 4  |

*   Cover C2 (zeros at E1, P2)
*   Cover C3 (zeros at E2, P3)
*   Cover C1 (zeros at E3, P1 and E4, P1)
*   Cover Row 1 (zeros at E1, P2 and E1, P4)
*   Cover Row 2 (zeros at E2, P3)
*   Cover Row 3 (zeros at E3, P1)
*   Cover Row 4 (zeros at E4, P1)

Let's use the marking strategy:
*   Mark zeros: E1-P2, E1-P4, E2-P3, E3-P1, E4-P1.
*   Check rows for single zeros: Row 2 (E2-P3), Row 3 (E3-P1), Row 4 (E4-P1).
*   Assign E2-P3. Mark row 2 and column 3.
*   Assign E3-P1. Mark row 3 and column 1.
*   Assign E1-P4 (as E1-P2 is now blocked by C3). Mark row 1 and column 4.
*   Assign E4-P2 (as E4-P1 is blocked by C1). Mark row 4 and column 2.

Let's restart covering:
|       | P1 | P2 | P3 | P4 |
| :---- | :- | :- | :- | :- |
| **E1**| 5  | **0**| 1  | **0**|
| **E2**| 4  | 5  | **0**| 2  |
| **E3**| **0**| 2  | 3  | 3  |
| **E4**| 0  | 3  | 2  | 4  |

*   Cover Col 3 (covers E2, P3)
*   Cover Col 4 (covers E1, P4)
*   Cover Row 3 (covers E3, P1)
*   Cover Row 4 (covers E4, P1)

Current lines: C3, C4, R3, R4. Number of lines = 4. Optimal assignment possible.

**Assignments:**
*   Row 1: Has zeros at (E1, P2) and (E1, P4).
*   Row 2: Has zero at (E2, P3). Assign E2-P3. Cross out R2, C3.
*   Row 3: Has zero at (E3, P1). Assign E3-P1. Cross out R3, C1.
*   Row 4: Has zero at (E4, P1 - blocked by C1).

Let's reconsider the covering and assignment from the matrix:
|       | P1 | P2 | P3 | P4 |
| :---- | :- | :- | :- | :- |
| **E1**| 5  | **0**| 1  | **0**|
| **E2**| 4  | 5  | **0**| 2  |
| **E3**| **0**| 2  | 3  | 3  |
| **E4**| 0  | 3  | 2  | 4  |

1.  Row 2 has one zero: Assign E2-P3. (Cost 13)
2.  Row 3 has one zero: Assign E3-P1. (Cost 14)
3.  Remaining matrix:
    |       | P2 | P4 |
    | :---- | :- | :- |
    | **E1**| 0  | 0  |
    | **E4**| 3  | 4  |
4.  Row 1 has two zeros. Column 2 has a zero at E1-P2. Column 4 has a zero at E1-P4.
5.  Look for single zeros in remaining columns: None.
6.  Assign E1-P2 (arbitrary choice). (Cost 15)
7.  This leaves E4 for P4. Assign E4-P4. (Cost 10)

**Optimal Assignment:**
*   E1 - P2 (Profit: 15)
*   E2 - P3 (Profit: 13)
*   E3 - P1 (Profit: 14)
*   E4 - P4 (Profit: 10)

**Maximum Profit = 15 + 13 + 14 + 10 = 52.**

*(Self-correction: The Hungarian method requires a systematic approach. If there are multiple zeros, we need to ensure we find independent zeros. If we can't find n independent zeros, we adjust the matrix. In Example 1, the re-covering was crucial. In Example 2, once the matrix was reduced, a careful assignment process leads to the solution.)*

### 6. Key Concepts and Definitions

*   **Assignment Problem:** A special case of the transportation problem where the supply at each source and the demand at each destination is 1.
*   **Objective Function:** To minimize total cost or maximize total profit.
*   **Decision Variables:** $x_{ij}$ representing whether person $i$ is assigned to job $j$.
*   **Constraints:** Each person assigned to one job, each job assigned to one person.
*   **Hungarian Method:** An algorithm for solving the assignment problem.
*   **Cost Matrix:** A matrix where $c_{ij}$ represents the cost (or profit) of assigning element $i$ to element $j$.
*   **Reduced Cost Matrix:** The matrix obtained after row and column reductions.
*   **Minimum Number of Lines:** The minimum number of horizontal and vertical lines required to cover all zeros in the reduced cost matrix.
*   **Optimal Assignment:** An assignment where the objective function is minimized (or maximized) and is found when the number of lines equals the order of the matrix.
*   **Dummy Rows/Columns:** Added to balance an unbalanced assignment problem.

### 7. Important Points to Remember

*   The assignment problem is a special case of the transportation problem where supply = demand = 1 for all sources/destinations.
*   Always ensure the cost matrix is square. If not, balance it with dummy rows or columns.
*   For maximization problems, convert them to minimization problems by subtracting from the maximum element or by negating the profit values.
*   The Hungarian method involves reducing the cost matrix and then covering zeros with the minimum number of lines.
*   If the number of lines equals `n` in the reduced matrix, an optimal assignment is possible. Otherwise, the matrix needs to be adjusted.
*   Systematically identifying independent zeros is crucial for making the assignment.

### 8. Practice Questions

**Question 1:**
A manager has four tasks, and four different workers. The time (in hours) each worker would take to complete each task is given in the table below. Determine the assignment of workers to tasks that minimizes the total time.

|       | Task 1 | Task 2 | Task 3 | Task 4 |
| :---- | :- | :- | :- | :- |
| **Worker A**| 8  | 7  | 6  | 7  |
| **Worker B**| 9  | 5  | 7  | 6  |
| **Worker C**| 6  | 8  | 7  | 9  |
| **Worker D**| 7  | 6  | 9  | 8  |

**Question 2:**
A company wants to assign three marketing executives to three different cities. The profit (in thousands of dollars) each executive can generate in each city is given below. Find the optimal assignment that maximizes the total profit.

|       | City 1 | City 2 | City 3 |
| :---- | :- | :- | :- |
| **Exec 1**| 20 | 25 | 15 |
| **Exec 2**| 22 | 18 | 23 |
| **Exec 3**| 19 | 21 | 20 |

**Question 3 (Unbalanced):**
A firm has 3 engineers and 5 projects. The estimated profit for each engineer-project combination is given below. Assign engineers to projects to maximize total profit. Each engineer can be assigned to at most one project, and each project can be assigned to at most one engineer.

|       | Project 1 | Project 2 | Project 3 | Project 4 | Project 5 |
| :---- | :- | :- | :- | :- | :- |
| **Eng 1**| 10 | 12 | 8  | 15 | 9  |
| **Eng 2**| 9  | 10 | 11 | 10 | 12 |
| **Eng 3**| 12 | 11 | 10 | 9  | 13 |

### 9. Answers to Practice Questions

**Answer 1:**

**Step 1: Row Reduction**
|       | Task 1 | Task 2 | Task 3 | Task 4 |
| :---- | :- | :- | :- | :- |
| **Worker A**| 1  | 0  | 0  | 1  |
| **Worker B**| 4  | 0  | 2  | 1  |
| **Worker C**| 0  | 3  | 1  | 4  |
| **Worker D**| 1  | 0  | 3  | 2  |

**Step 2: Column Reduction**
|       | Task 1 | Task 2 | Task 3 | Task 4 |
| :---- | :- | :- | :- | :- |
| **Worker A**| 1  | 0  | 0  | 1  |
| **Worker B**| 4  | 0  | 2  | 1  |
| **Worker C**| 0  | 3  | 1  | 4  |
| **Worker D**| 1  | 0  | 3  | 2  |
(No change as column minimums are already 0 except for Task 1)
Col 1: Min is 0. No change.

**Step 3: Cover Zeros**
*   Row 1: 0 at T2, T3.
*   Row 2: 0 at T2.
*   Row 3: 0 at T1.
*   Row 4: 0 at T2.

Let's cover:
*   Cover Row 1 (zeros at T2, T3)
*   Cover Col 1 (zero at C)
*   Cover Col 2 (zeros at A, B, D)
*   Cover Col 3 (zeros at A)
*   Cover Col 4 (no zero)

A better strategy:
*   Assign Row 3: Worker C to Task 1 (only zero in row 3). Cross out R3, C1.
*   Remaining matrix:
    |       | T2 | T3 | T4 |
    | :---- | :- | :- | :- |
    | **A** | 0  | 0  | 1  |
    | **B** | 0  | 2  | 1  |
    | **D** | 0  | 3  | 2  |
*   Column 2 has three zeros (A, B, D). Column 3 has zeros (A, B). Column 4 has one zero (A).
*   Assign Worker A to Task 4 (only zero in Col 4). Cross out R1, C4.
*   Remaining matrix:
    |       | T2 | T3 |
    | :---- | :- | :- |
    | **B** | 0  | 2  |
    | **D** | 0  | 3  |
*   Column 2 has zeros at B, D. Column 3 has zero at B.
*   Assign Worker B to Task 3 (only zero in Col 3). Cross out R2, C3.
*   This leaves Worker D for Task 2. Assign Worker D to Task 2. Cross out R4, C2.

Assignments:
*   Worker C - Task 1 (6 hours)
*   Worker A - Task 4 (7 hours)
*   Worker B - Task 3 (7 hours)
*   Worker D - Task 2 (6 hours)

**Total Minimum Time = 6 + 7 + 7 + 6 = 26 hours.**

**Answer 2:**

Convert to minimization: Max profit is 25.

|       | City 1 | City 2 | City 3 |
| :---- | :- | :- | :- |
| **Exec 1**| 5  | 0  | 10 |
| **Exec 2**| 3  | 7  | 2  |
| **Exec 3**| 6  | 4  | 5  |

**Step 1: Row Reduction** (Already done)

**Step 2: Column Reduction**
Col 1: Min 3
Col 2: Min 0
Col 3: Min 2

Subtract:
Col 1: 5-3=2, 3-3=0, 6-3=3
Col 2: 0, 7, 4
Col 3: 10-2=8, 2-2=0, 5-2=3

|       | City 1 | City 2 | City 3 |
| :---- | :- | :- | :- |
| **Exec 1**| 2  | 0  | 8  |
| **Exec 2**| 0  | 7  | 0  |
| **Exec 3**| 3  | 4  | 3  |

**Step 3: Cover Zeros**
*   Row 1: Zero at City 2.
*   Row 2: Zeros at City 1, City 3.
*   Row 3: No zeros.

Cover:
*   Cover Row 1 (zeros at C2)
*   Cover Col 1 (zero at E2, C1)
*   Cover Col 3 (zeros at E2, C3)

Lines: R1, C1, C3. Number of lines = 3. Optimal assignment possible.

**Assignments:**
*   Row 2 has zeros at C1 and C3.
*   Row 1 has a zero at C2. Assign Exec 1 - City 2. (Cost 0 in reduced matrix, Profit 25)
*   Row 2 has zeros at C1 and C3. Col 1 has zero at E2. Col 3 has zero at E2.
*   Let's take Exec 2 - City 1. (Cost 0 in reduced matrix, Profit 22).
*   This leaves Exec 3 for City 3. (Cost 3 in reduced matrix, Profit 20).

Assignments:
*   Exec 1 - City 2 (Profit: 25)
*   Exec 2 - City 1 (Profit: 22)
*   Exec 3 - City 3 (Profit: 20)

**Maximum Profit = 25 + 22 + 20 = 67 (thousand dollars).**

**Answer 3:**

Unbalanced problem: 3 engineers, 5 projects. Add 2 dummy projects (DP1, DP2) with 0 profit.

|       | P1 | P2 | P3 | P4 | P5 | DP1 | DP2 |
| :---- | :- | :- | :- | :- | :- | :- | :- |
| **Eng 1**| 10 | 12 | 8  | 15 | 9  | 0   | 0   |
| **Eng 2**| 9  | 10 | 11 | 10 | 12 | 0   | 0   |
| **Eng 3**| 12 | 11 | 10 | 9  | 13 | 0   | 0   |

Convert to minimization (subtract from max = 15):

|       | P1 | P2 | P3 | P4 | P5 | DP1 | DP2 |
| :---- | :- | :- | :- | :- | :- | :- | :- |
| **Eng 1**| 5  | 3  | 7  | 0  | 6  | 15  | 15  |
| **Eng 2**| 6  | 5  | 4  | 5  | 3  | 15  | 15  |
| **Eng 3**| 3  | 4  | 5  | 6  | 2  | 15  | 15  |

**Step 1: Row Reduction** (Already done by conversion)

**Step 2: Column Reduction**
Col 1: Min 3
Col 2: Min 3
Col 3: Min 4
Col 4: Min 0
Col 5: Min 2
Col DP1: Min 15
Col DP2: Min 15

Subtract:
Col 1: 2, 3, 0
Col 2: 0, 2, 1
Col 3: 3, 0, 1
Col 4: 0, 5, 6
Col 5: 4, 1, 0
Col DP1: 0, 0, 0
Col DP2: 0, 0, 0

|       | P1 | P2 | P3 | P4 | P5 | DP1 | DP2 |
| :---- | :- | :- | :- | :- | :- | :- | :- |
| **Eng 1**| 2  | 0  | 3  | 0  | 4  | 0   | 0   |
| **Eng 2**| 3  | 2  | 0  | 5  | 1  | 0   | 0   |
| **Eng 3**| 0  | 1  | 1  | 6  | 0  | 0   | 0   |

**Step 3: Cover Zeros**
*   Row 1: Zeros at P2, P4, DP1, DP2.
*   Row 2: Zeros at P3, DP1, DP2.
*   Row 3: Zeros at P1, P2, P5, DP1, DP2.

Let's try to cover:
*   Cover P1 (zero at E3)
*   Cover P2 (zeros at E1, E3)
*   Cover P3 (zero at E2)
*   Cover P4 (zero at E1)
*   Cover P5 (zero at E3)
*   Cover DP1 (zeros at E1, E2, E3)
*   Cover DP2 (zeros at E1, E2, E3)

This approach is not systematic. Let's assign based on single zeros first.
*   No single zeros in rows.
*   No single zeros in columns (except DP1, DP2 but they are all zeros).

Let's try covering:
*   Cover Row 1 (P2, P4)
*   Cover Row 2 (P3)
*   Cover Row 3 (P1, P2, P5)

This covers all zeros but is 3 lines. Not optimal. We need 7 lines.

Let's try again:
*   Cover P1 (E3)
*   Cover P2 (E1, E3)
*   Cover P3 (E2)
*   Cover P4 (E1)
*   Cover P5 (E3)
*   Cover DP1 (E1, E2, E3)
*   Cover DP2 (E1, E2, E3)

Let's find independent zeros:
*   E1-P4 (zero).
*   E2-P3 (zero).
*   E3-P1 (zero).

This assignment uses P1, P3, P4. The remaining columns are P2, P5, DP1, DP2.
The remaining rows are E1, E2, E3.

Let's re-examine the reduced matrix.
|       | P1 | P2 | P3 | P4 | P5 | DP1 | DP2 |
| :---- | :- | :- | :- | :- | :- | :- | :- |
| **E1**| 2  | **0**| 3  | **0**| 4  | **0**| **0**|
| **E2**| 3  | 2  | **0**| 5  | 1  | **0**| **0**|
| **E3**| **0**| 1  | 1  | 6  | **0**| **0**| **0**|

*   Assign E1-P4. Cross R1, C4.
*   Assign E2-P3. Cross R2, C3.
*   Assign E3-P1. Cross R3, C1.

Remaining matrix:
|       | P2 | P5 | DP1 | DP2 |
| :---- | :- | :- | :- | :- |
| **E1**| 0  | 4  | 0   | 0   |
| **E2**| 2  | 1  | 0   | 0   |
| **E3**| 1  | 0  | 0   | 0   |

*   Now, in the remaining matrix, we have zeros at:
    *   E1-P2, E1-DP1, E1-DP2
    *   E2-DP1, E2-DP2
    *   E3-P5, E3-DP1, E3-DP2

*   Assign E3-P5. Cross R3, C5.
*   Remaining matrix:
    |       | P2 | DP1 | DP2 |
    | :---- | :- | :- | :- |
    | **E1**| 0  | 0   | 0   |
    | **E2**| 2  | 0   | 0   |

*   Assign E1-P2. Cross R1, C2.
*   Assign E2-DP1. Cross R2, DP1.
*   This leaves E3 for DP2 (but E3 is already assigned to P5).

Let's retry the assignment from the start with the reduced matrix:
|       | P1 | P2 | P3 | P4 | P5 | DP1 | DP2 |
| :---- | :- | :- | :- | :- | :- | :- | :- |
| **E1**| 2  | **0**| 3  | **0**| 4  | **0**| **0**|
| **E2**| 3  | 2  | **0**| 5  | 1  | **0**| **0**|
| **E3**| **0**| 1  | 1  | 6  | **0**| **0**| **0**|

1.  Assign E1-P4. (Original Profit: 15)
2.  Assign E2-P3. (Original Profit: 11)
3.  Assign E3-P1. (Original Profit: 12)
4.  Remaining unassigned: E1, E2, E3 and P2, P5, DP1, DP2.
    The unassigned rows/columns with zeros:
    *   E1: P2, DP1, DP2
    *   E2: DP1, DP2
    *   E3: P2, P5, DP1, DP2

    From the matrix after first assignments (virtual crossing out):
    |       | P2 | P5 | DP1 | DP2 |
    | :---- | :- | :- | :- | :- |
    | **E1**| 0  | 4  | 0   | 0   |
    | **E2**| 2  | 1  | 0   | 0   |
    | **E3**| 1  | 0  | 0   | 0   |

5.  Assign E3-P5. (Original Profit: 13)
6.  Remaining unassigned: E1, E2 and P2, DP1, DP2.
    Matrix:
    |       | P2 | DP1 | DP2 |
    | :---- | :- | :- | :- |
    | **E1**| 0  | 0   | 0   |
    | **E2**| 2  | 0   | 0   |

7.  Assign E1-P2. (Original Profit: 12)
8.  This leaves E2 for DP1 (or DP2). Assign E2-DP1. (Original Profit: 0)

**Optimal Assignments:**
*   Eng 1 - Project 4 (Profit: 15)
*   Eng 2 - Project 3 (Profit: 11)
*   Eng 3 - Project 1 (Profit: 12)
*   Eng 1 is assigned to P2 (Profit: 12) - This is incorrect. An engineer can only be assigned to one project.

Let's correct the assignment logic:

1.  **E1-P4** (15)
2.  **E2-P3** (11)
3.  **E3-P1** (12)
4.  Now we need to assign the remaining engineer(s) to remaining project(s).
    Engagements made: (E1,P4), (E2,P3), (E3,P1).
    Remaining engineers: None, if we could assign all.

    The problem statement is "assign engineers to projects". This means we can assign engineers to projects or dummy projects.
    Eng 1 is assigned to P4.
    Eng 2 is assigned to P3.
    Eng 3 is assigned to P1.

    What about remaining projects P2, P5, DP1, DP2? These remain unassigned.
    This means the assignments are:
    *   Eng 1 - P4 (15)
    *   Eng 2 - P3 (11)
    *   Eng 3 - P1 (12)

    Total Profit = 15 + 11 + 12 = 38.

    This seems low. Let's re-evaluate the zero assignments.
    The method should yield 3 assignments from 3 engineers.

    Let's restart assignment with reduced matrix:
    |       | P1 | P2 | P3 | P4 | P5 | DP1 | DP2 |
    | :---- | :- | :- | :- | :- | :- | :- | :- |
    | **E1**| 2  | **0**| 3  | **0**| 4  | **0**| **0**|
    | **E2**| 3  | 2  | **0**| 5  | 1  | **0**| **0**|
    | **E3**| **0**| 1  | 1  | 6  | **0**| **0**| **0**|

    Assignments must be one zero per row/column.
    *   From Row 1, we can choose P2, P4, DP1, DP2.
    *   From Row 2, we can choose P3, DP1, DP2.
    *   From Row 3, we can choose P1, P2, P5, DP1, DP2.

    Let's try to assign greedily based on fewer options:
    *   Row 2 has fewer choices not involving dummies. Assign E2-P3. (Cost 0 in reduced, Profit 11). Cross out R2, C3.
    *   Row 3 has a single zero at P5. Assign E3-P5. (Cost 0 in reduced, Profit 13). Cross out R3, C5.
    *   Remaining matrix for E1:
        |       | P1 | P2 | P4 | DP1 | DP2 |
        | :---- | :- | :- | :- | :- | :- |
        | **E1**| 2  | 0  | 0  | 0   | 0   |
    *   E1 has zeros at P2, P4, DP1, DP2.
    *   Assign E1-P2. (Cost 0 in reduced, Profit 12).

    **Assignments:**
    *   Eng 1 - Project 2 (Profit: 12)
    *   Eng 2 - Project 3 (Profit: 11)
    *   Eng 3 - Project 5 (Profit: 13)

    **Total Profit = 12 + 11 + 13 = 36.**

    This assignment uses all engineers and 3 projects. The remaining projects (P1, P4) and dummy projects are unassigned, which is correct.

    Let's check another valid assignment:
    *   E1-P4 (15)
    *   E2-P3 (11)
    *   E3-P5 (13)
    Total Profit = 15 + 11 + 13 = 39.

    This seems better. Let's see if we can get it from the matrix.
    |       | P1 | P2 | P3 | P4 | P5 | DP1 | DP2 |
    | :---- | :- | :- | :- | :- | :- | :- | :- |
    | **E1**| 2  | **0**| 3  | **0**| 4  | **0**| **0**|
    | **E2**| 3  | 2  | **0**| 5  | 1  | **0**| **0**|
    | **E3**| **0**| 1  | 1  | 6  | **0**| **0**| **0**|

    Assign E1-P4 (Profit 15).
    Assign E2-P3 (Profit 11).
    Assign E3-P5 (Profit 13).
    Total = 39.

    This assignment works.
    *   Eng 1 - Project 4 (Profit 15)
    *   Eng 2 - Project 3 (Profit 11)
    *   Eng 3 - Project 5 (Profit 13)
    Maximum Profit = 39.

**(Referenced Textbooks: Operations Research-Principles and Applications by Srinivasan, G.; Operations Research by Prem Kumar Gupta & D. S. Hira; Quantitative Techniques in Management by N. D Vohra. Hitesh Arora)**

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
