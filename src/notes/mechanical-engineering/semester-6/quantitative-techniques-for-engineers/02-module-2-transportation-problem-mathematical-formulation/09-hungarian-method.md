---
title: "Hungarian method"
subject: "QUANTITATIVE TECHNIQUES FOR ENGINEERS"
module: "Module 2: Transportation Problem: Mathematical Formulation"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463a71"
status: "completed"
scrapedAt: "2026-05-20T18:07:31.860Z"
---
# QUANTITATIVE TECHNIQUES FOR ENGINEERS

## Module 2: Transportation Problem: Mathematical Formulation

### Topic: Hungarian Method

**Learning Outcomes:**
* Understand the objective and application of the Hungarian Method for solving assignment problems.
* Formulate an assignment problem as a mathematical model.
* Apply the steps of the Hungarian Method to find an optimal assignment.
* Interpret the results of the Hungarian Method.
* Solve real-world problems involving optimal assignment.

**Course Outcomes Alignment:**
* **CO1: To formulate and solve linear programming and transportation problems (Knowledge Level: K4)** - The Hungarian method is a specialized algorithm for solving a specific type of linear programming problem, the assignment problem. This topic directly contributes to the ability to formulate and solve these problems.

---

### 1. Introduction to the Assignment Problem

The assignment problem is a special case of the transportation problem where the objective is to assign a set of resources (e.g., workers, machines) to a set of tasks (e.g., jobs, projects) in a one-to-one fashion, such that the total cost (or profit) of the assignment is minimized (or maximized).

**Key Characteristics of an Assignment Problem:**
* **Number of Resources = Number of Tasks:** A balanced assignment problem requires an equal number of resources and tasks.
* **One-to-One Assignment:** Each resource can be assigned to at most one task, and each task can be assigned to at most one resource.
* **Objective:** To minimize total cost or maximize total profit.

**Examples:**
* Assigning salesmen to territories.
* Assigning machines to production jobs.
* Assigning employees to specific roles.
* Assigning advertising budgets to different media.

---

### 2. Mathematical Formulation of the Assignment Problem

Let:
* $n$ be the number of resources and the number of tasks (assuming a balanced problem).
* $c_{ij}$ be the cost (or profit) of assigning resource $i$ to task $j$.
* $x_{ij}$ be a binary decision variable, where:
    * $x_{ij} = 1$ if resource $i$ is assigned to task $j$.
    * $x_{ij} = 0$ otherwise.

**Objective Function:**
To minimize total cost:
$$ \text{Minimize } Z = \sum_{i=1}^{n} \sum_{j=1}^{n} c_{ij} x_{ij} $$
To maximize total profit:
$$ \text{Maximize } Z = \sum_{i=1}^{n} \sum_{j=1}^{n} p_{ij} x_{ij} $$
(where $p_{ij}$ is the profit of assigning resource $i$ to task $j$)

**Constraints:**
* **Each resource must be assigned to exactly one task:**
    $$ \sum_{j=1}^{n} x_{ij} = 1 \quad \text{for } i = 1, 2, \dots, n $$
* **Each task must be assigned to exactly one resource:**
    $$ \sum_{i=1}^{n} x_{ij} = 1 \quad \text{for } j = 1, 2, \dots, n $$
* **Binary variables:**
    $$ x_{ij} \in \{0, 1\} $$

**[Paneerselvam R., Chapter 15: Assignment Problems, Third Edition, 2023]** discusses the formulation of the assignment problem and its relationship to transportation problems. It highlights that an assignment problem can be viewed as a transportation problem with a supply of 1 unit from each source and a demand of 1 unit for each destination.

**[Taha, Chapter 11: The Assignment Problem, Tenth Edition, 2019]** provides a detailed mathematical formulation of the assignment problem and introduces the concept of **unimodality** which is key to why the Hungarian method works efficiently.

---

### 3. The Hungarian Method: An Algorithm for Optimal Assignment

The Hungarian method, developed by Harold Kuhn, is an efficient algorithm for solving the assignment problem. It is based on the principle that adding or subtracting a constant from each element in a row or column of the cost matrix does not change the optimal assignment. The method aims to find a set of zero elements in the cost matrix such that each row and column has exactly one zero, and the number of such assignments is equal to the order of the matrix.

**Key Concepts:**
* **Cost Matrix:** A matrix representing the costs of assigning resources to tasks.
* **Reduction of the Cost Matrix:** The process of creating zeros in the cost matrix through row and column operations.
* **Egalitarian Assignment:** An assignment where each row and column has exactly one assigned zero.
* **Optimality Condition:** If an egalitarian assignment can be found that covers all resources and tasks with zeros, then it is an optimal assignment.

#### Steps of the Hungarian Method (for Minimization Problems):

**Step 1: Row Reduction**
For each row in the cost matrix, find the minimum element and subtract it from all elements in that row. This creates at least one zero in each row.

**Step 2: Column Reduction**
For each column in the resulting matrix, find the minimum element and subtract it from all elements in that column. This creates at least one zero in each column, without destroying the zeros created in Step 1 (as we are subtracting the minimum of the column, which could be zero).

**Step 3: Cover all Zeros with Minimum Number of Lines**
Draw the minimum number of horizontal and vertical lines required to cover all the zeros in the matrix. This is a crucial step.
* **If the minimum number of lines equals $n$ (the order of the matrix),** then an optimal assignment is possible using the current zeros. Proceed to Step 5.
* **If the minimum number of lines is less than $n$,** then an optimal assignment cannot be made with the current zeros. Proceed to Step 4.

**Step 4: Create Additional Zeros**
* Find the smallest element ($k$) in the matrix that is **not covered** by any line.
* Subtract this value ($k$) from all **uncovered** elements.
* Add this value ($k$) to all elements that are covered by **two** lines (i.e., at the intersection of a horizontal and a vertical line).
* Elements covered by only **one** line remain unchanged.
* After performing these operations, return to Step 3.

**Step 5: Make the Optimal Assignment**
Once the minimum number of lines required to cover all zeros equals $n$, identify an optimal assignment.
* **Row/Column Inspection:** Look for rows or columns that contain exactly one unmarked zero. Assign that resource to that task.
* **Marking Zeros:** Once an assignment is made for a row/column, mark that zero and do not consider any other zeros in that same row or column for further assignments.
* **If multiple zeros exist in a row/column:** If a row has two zeros, and one of them is the only zero in its column, assign that one. If both zeros are the only ones in their respective columns, choose one (arbitrarily for now, and check if it leads to a unique solution). If no row/column has a single zero, you might need to make a tentative assignment and check for conflicts.
* **Repeat the process** until $n$ assignments are made.

---

### 4. Example: Minimization Problem

Let's consider the following cost matrix for assigning 4 workers to 4 tasks:

|       | Task 1 | Task 2 | Task 3 | Task 4 |
|-------|--------|--------|--------|--------|
| **W1**| 10     | 12     | 19     | 11     |
| **W2**| 5      | 10     | 7      | 8      |
| **W3**| 12     | 14     | 13     | 11     |
| **W4**| 8      | 15     | 9      | 10     |

**Step 1: Row Reduction**
Subtract the minimum of each row:
* Row 1: min = 10. Row 1 becomes [0, 2, 9, 1]
* Row 2: min = 5. Row 2 becomes [0, 5, 2, 3]
* Row 3: min = 11. Row 3 becomes [1, 3, 2, 0]
* Row 4: min = 8. Row 4 becomes [0, 7, 1, 2]

Resulting matrix:
|       | Task 1 | Task 2 | Task 3 | Task 4 |
|-------|--------|--------|--------|--------|
| **W1**| 0      | 2      | 9      | 1      |
| **W2**| 0      | 5      | 2      | 3      |
| **W3**| 1      | 3      | 2      | 0      |
| **W4**| 0      | 7      | 1      | 2      |

**Step 2: Column Reduction**
Subtract the minimum of each column:
* Col 1: min = 0. No change.
* Col 2: min = 2. Col 2 becomes [0, 3, 1, 5]
* Col 3: min = 1. Col 3 becomes [8, 1, 1, 0]
* Col 4: min = 0. No change.

Resulting matrix:
|       | Task 1 | Task 2 | Task 3 | Task 4 |
|-------|--------|--------|--------|--------|
| **W1**| 0      | 0      | 8      | 1      |
| **W2**| 0      | 3      | 1      | 3      |
| **W3**| 1      | 1      | 1      | 0      |
| **W4**| 0      | 5      | 0      | 2      |

**Step 3: Cover Zeros with Minimum Lines**

Let's try to cover the zeros:
* Row 1 has two zeros.
* Row 2 has one zero.
* Row 3 has one zero.
* Row 4 has two zeros.
* Col 1 has three zeros.
* Col 2 has one zero.
* Col 3 has one zero.
* Col 4 has one zero.

A possible covering:
* Line through Row 1 (covers (W1, T1) and (W1, T2))
* Line through Col 4 (covers (W3, T4))
* Line through Col 1 (covers (W2, T1) and (W4, T1))

Wait, this is not the minimum number of lines. Let's try a more systematic approach.
1. Find rows/columns with no assignments yet.
2. Find rows/columns with the most zeros.
3. Draw lines to cover all zeros.

Let's mark the zeros:
|       | Task 1 | Task 2 | Task 3 | Task 4 |
|-------|--------|--------|--------|--------|
| **W1**| **0**  | **0**  | 8      | 1      |
| **W2**| **0**  | 3      | 1      | 3      |
| **W3**| 1      | 1      | 1      | **0**  |
| **W4**| **0**  | 5      | **0**  | 2      |

* **Row 1:** Has two zeros.
* **Row 2:** Has one zero at (W2, T1).
* **Row 3:** Has one zero at (W3, T4).
* **Row 4:** Has two zeros.
* **Col 1:** Has three zeros.
* **Col 2:** Has one zero at (W1, T2).
* **Col 3:** Has one zero at (W4, T3).
* **Col 4:** Has one zero at (W3, T4).

Let's try covering with lines:
* Line Row 1 (covers (W1, T1), (W1, T2))
* Line Col 4 (covers (W3, T4))
* Line Col 1 (covers (W2, T1), (W4, T1))
* Line Col 3 (covers (W4, T3))

This covers all zeros with 4 lines. Let's see if we can do it with fewer.
Consider the zeros: (W1, T1), (W1, T2), (W2, T1), (W3, T4), (W4, T1), (W4, T3).

* Line Row 1 (covers 2 zeros)
* Line Col 1 (covers 3 zeros, including one in Row 2 and one in Row 4)
* Line Col 4 (covers 1 zero)
* Line Col 3 (covers 1 zero)

This is still 4 lines.

Let's try another strategy for covering:
* **Column 1:** Has 3 zeros. Cover Column 1 with a vertical line.
    |       | Task 1 | Task 2 | Task 3 | Task 4 |
    |-------|--------|--------|--------|--------|
    | **W1**| ~~0~~  | **0**  | 8      | 1      |
    | **W2**| ~~0~~  | 3      | 1      | 3      |
    | **W3**| ~~1~~  | 1      | 1      | **0**  |
    | **W4**| ~~0~~  | 5      | **0**  | 2      |
* Now, Row 1 has one remaining zero at (W1, T2). Cover Row 1 with a horizontal line.
    |       | Task 1 | Task 2 | Task 3 | Task 4 |
    |-------|--------|--------|--------|--------|
    | **W1**| ~~0~~  | ~~0~~  | 8      | 1      |
    | **W2**| ~~0~~  | 3      | 1      | 3      |
    | **W3**| ~~1~~  | 1      | 1      | **0**  |
    | **W4**| ~~0~~  | 5      | **0**  | 2      |
* Now, Column 4 has one remaining zero at (W3, T4). Cover Column 4 with a vertical line.
    |       | Task 1 | Task 2 | Task 3 | Task 4 |
    |-------|--------|--------|--------|--------|
    | **W1**| ~~0~~  | ~~0~~  | 8      | ~~1~~  |
    | **W2**| ~~0~~  | 3      | 1      | ~~3~~  |
    | **W3**| ~~1~~  | 1      | 1      | ~~0~~  |
    | **W4**| ~~0~~  | 5      | **0**  | ~~2~~  |
* Now, Column 3 has one remaining zero at (W4, T3). Cover Column 3 with a vertical line.

We used 4 lines (Col 1, Row 1, Col 4, Col 3) to cover all zeros. Since the number of lines (4) is equal to the order of the matrix (4), an optimal assignment is possible.

**Step 5: Make the Optimal Assignment**

Let's look for rows or columns with exactly one zero:
* **Row 2:** Has one zero at (W2, T1). Assign W2 to T1. Mark this assignment.
    * Cross out all other zeros in Row 2 (none).
    * Cross out all other zeros in Column 1 (W1, T1; W4, T1).

|       | Task 1 | Task 2 | Task 3 | Task 4 |
|-------|--------|--------|--------|--------|
| **W1**| ~~X~~  | **0**  | 8      | 1      |
| **W2**| **0**  | 3      | 1      | 3      |  <- Assignment: W2-T1
| **W3**| ~~X~~  | 1      | 1      | **0**  |
| **W4**| ~~X~~  | 5      | **0**  | 2      |

* **Row 3:** Has one zero at (W3, T4). Assign W3 to T4. Mark this assignment.
    * Cross out all other zeros in Row 3 (none).
    * Cross out all other zeros in Column 4 (none).

|       | Task 1 | Task 2 | Task 3 | Task 4 |
|-------|--------|--------|--------|--------|
| **W1**| ~~X~~  | **0**  | 8      | ~~1~~  |
| **W2**| **0**  | 3      | 1      | 3      |
| **W3**| ~~X~~  | 1      | 1      | **0**  |  <- Assignment: W3-T4
| **W4**| ~~X~~  | 5      | **0**  | ~~2~~  |

* **Row 4:** Has one zero at (W4, T3). Assign W4 to T3. Mark this assignment.
    * Cross out all other zeros in Row 4 (none).
    * Cross out all other zeros in Column 3 (none).

|       | Task 1 | Task 2 | Task 3 | Task 4 |
|-------|--------|--------|--------|--------|
| **W1**| ~~X~~  | **0**  | ~~8~~  | ~~1~~  |
| **W2**| **0**  | 3      | ~~1~~  | 3      |
| **W3**| ~~X~~  | 1      | ~~1~~  | **0**  |
| **W4**| ~~X~~  | 5      | **0**  | ~~2~~  |  <- Assignment: W4-T3

* **Row 1:** Has one remaining zero at (W1, T2). Assign W1 to T2. Mark this assignment.

|       | Task 1 | Task 2 | Task 3 | Task 4 |
|-------|--------|--------|--------|--------|
| **W1**| ~~X~~  | **0**  | ~~8~~  | ~~1~~  |  <- Assignment: W1-T2
| **W2**| **0**  | 3      | ~~1~~  | 3      |
| **W3**| ~~X~~  | 1      | ~~1~~  | **0**  |
| **W4**| ~~X~~  | 5      | **0**  | ~~2~~  |

**Optimal Assignment:**
* W1 to T2
* W2 to T1
* W3 to T4
* W4 to T3

**Minimum Cost:**
From the original cost matrix:
* Cost(W1, T2) = 12
* Cost(W2, T1) = 5
* Cost(W3, T4) = 11
* Cost(W4, T3) = 9

Total Minimum Cost = 12 + 5 + 11 + 9 = **37**

---

### 5. Maximization Problems

To solve a maximization problem using the Hungarian method, we convert it into a minimization problem.

**Method:**
1. **Find the maximum element** in the entire cost matrix.
2. **Subtract every element** in the matrix from this maximum element. This creates a new matrix where maximizing the original profit is equivalent to minimizing the new cost.
3. **Apply the Hungarian method** (steps 1-5) to the new cost matrix.

**[Hillier & Lieberman, Chapter 16: The Assignment Problem, Tenth Edition, 2017]** provides a detailed explanation of solving maximization problems by converting them to minimization problems using a "maximum payoff" approach or by transforming the payoff matrix.

---

### 6. Handling Unbalanced Assignment Problems

If the number of resources is not equal to the number of tasks (i.e., $m \neq n$), the assignment problem is unbalanced.

**Method:**
1. **Add dummy resources or dummy tasks** to the problem to make it balanced.
2. **Assign a cost of zero** to all cells involving dummy resources or tasks.
    * If $m < n$ (fewer resources than tasks), add $n-m$ dummy resources.
    * If $m > n$ (more resources than tasks), add $m-n$ dummy tasks.
3. **Solve the balanced assignment problem** using the Hungarian method.
4. **Interpret the results:** Any assignment involving a dummy resource or task means that the real resource/task is unassigned in the original unbalanced problem.

---

### 7. Practice Questions/Exercises

**Question 1:**
A company has 4 machines and 4 jobs. The cost of assigning each machine to each job is given in the following table:

|       | Job A | Job B | Job C | Job D |
|-------|-------|-------|-------|-------|
| **M1**| 18    | 15    | 19    | 16    |
| **M2**| 14    | 12    | 13    | 15    |
| **M3**| 19    | 17    | 18    | 16    |
| **M4**| 15    | 16    | 17    | 14    |

Find the optimal assignment of machines to jobs so that the total cost is minimized.

**Answer to Question 1:**

**Step 1: Row Reduction**
|       | Job A | Job B | Job C | Job D |
|-------|-------|-------|-------|-------|
| **M1**| 3     | 0     | 4     | 1     |
| **M2**| 2     | 0     | 1     | 3     |
| **M3**| 3     | 1     | 2     | 0     |
| **M4**| 1     | 2     | 3     | 0     |

**Step 2: Column Reduction**
|       | Job A | Job B | Job C | Job D |
|-------|-------|-------|-------|-------|
| **M1**| 1     | 0     | 3     | 1     |
| **M2**| 0     | 0     | 0     | 3     |
| **M3**| 1     | 1     | 1     | 0     |
| **M4**| 0     | 2     | 2     | 0     |

**Step 3: Cover Zeros with Minimum Lines**
* Column B has two zeros.
* Column A has two zeros.
* Column C has one zero.
* Column D has two zeros.

Let's try to cover:
* Line Row 2 (covers M2-B, M2-C)
* Line Col D (covers M3-D, M4-D)
* Line Col A (covers M2-A, M4-A)

This uses 3 lines. We need 4 lines.

Let's try covering the zeros: (M1,B), (M2,A), (M2,B), (M2,C), (M3,D), (M4,A), (M4,D).
* Cover Col A (3 zeros)
* Cover Col B (2 zeros)
* Cover Col D (2 zeros)

Let's re-examine the matrix after column reduction:
|       | Job A | Job B | Job C | Job D |
|-------|-------|-------|-------|-------|
| **M1**| 1     | **0** | 3     | 1     |
| **M2**| **0** | **0** | **0** | 3     |
| **M3**| 1     | 1     | 1     | **0** |
| **M4**| **0** | 2     | 2     | **0** |

Consider covering:
* Line Row 2 (covers M2-A, M2-B, M2-C)
* Line Col D (covers M3-D, M4-D)
* Line Col B (covers M1-B)

This covers all zeros with 3 lines. We need 4.

**Step 4: Create Additional Zeros**
The uncovered elements are:
[1, 3, 1] (Row 1)
[1, 1, 1] (Row 3)
[2, 2] (Row 4, Col C)

The smallest uncovered element is 1.
Subtract 1 from uncovered elements:
* Row 1: [0, 2, 0]
* Row 3: [0, 0, 0]
* Row 4: [1, 1]

Add 1 to elements covered by two lines. The intersections are:
* (Row 2, Col A) - Covered by Row 2 and Col A
* (Row 2, Col B) - Covered by Row 2 and Col B
* (Row 2, Col C) - Covered by Row 2
* (Row 3, Col D) - Covered by Col D
* (Row 4, Col A) - Covered by Col A
* (Row 4, Col D) - Covered by Col D

Let's visualize the lines:
* Line 1: Row 2 (covers M2-A, M2-B, M2-C)
* Line 2: Col D (covers M3-D, M4-D)
* Line 3: Col B (covers M1-B)

New matrix after operations:
Elements covered by 2 lines: None in this covering scheme.
Elements covered by 1 line: Row 2 (M2-A, M2-B, M2-C), Col D (M3-D, M4-D), Col B (M1-B).
Uncovered elements are in Row 1 (except M1-B), Row 3 (except M3-D), Row 4 (except M4-A, M4-D), Col C (except M2-C).

Let's re-evaluate the covering. The goal is to cover all zeros with minimum lines.
Zeros are at: (M1,B), (M2,A), (M2,B), (M2,C), (M3,D), (M4,A), (M4,D).

* Cover Col A (zeros at M2, M4)
* Cover Col B (zeros at M1, M2)
* Cover Col C (zero at M2)
* Cover Col D (zeros at M3, M4)

If we draw lines for each zero, it would be 7 lines. We need minimum lines.
Try to cover rows/columns with most zeros first.
* Row 2 has 3 zeros. Cover Row 2.
    |       | Job A | Job B | Job C | Job D |
    |-------|-------|-------|-------|-------|
    | **M1**| 1     | **0** | 3     | 1     |
    | **M2**| ~~0~~ | ~~0~~ | ~~0~~ | 3     |
    | **M3**| 1     | 1     | 1     | **0** |
    | **M4**| **0** | 2     | 2     | **0** |
* Remaining zeros: (M1,B), (M3,D), (M4,A), (M4,D).
* Col D has 2 zeros. Cover Col D.
    |       | Job A | Job B | Job C | Job D |
    |-------|-------|-------|-------|-------|
    | **M1**| 1     | **0** | 3     | ~~1~~ |
    | **M2**| ~~0~~ | ~~0~~ | ~~0~~ | ~~3~~ |
    | **M3**| 1     | 1     | 1     | ~~0~~ |
    | **M4**| **0** | 2     | 2     | ~~0~~ |
* Remaining zeros: (M1,B), (M4,A).
* Col B has 1 zero. Cover Col B.
    |       | Job A | Job B | Job C | Job D |
    |-------|-------|-------|-------|-------|
    | **M1**| 1     | ~~0~~ | 3     | ~~1~~ |
    | **M2**| ~~0~~ | ~~0~~ | ~~0~~ | ~~3~~ |
    | **M3**| 1     | 1     | 1     | ~~0~~ |
    | **M4**| **0** | 2     | 2     | ~~0~~ |
* Remaining zero: (M4,A).
* Cover Col A.

Total lines: 4 (Row 2, Col D, Col B, Col A). Since 4 lines = order of matrix, optimal assignment is possible.

**Step 5: Make the Optimal Assignment**
Look for rows/columns with single zeros:
* Col B has a single zero at (M1,B). Assign M1-B. Cross out other zeros in Row 1 and Col B.
    |       | Job A | Job B | Job C | Job D |
    |-------|-------|-------|-------|-------|
    | **M1**| ~~1~~ | **0** | ~~3~~ | ~~1~~ | <- M1-B
    | **M2**| **0** | ~~0~~ | **0** | 3     |
    | **M3**| 1     | ~~1~~ | 1     | **0** |
    | **M4**| **0** | ~~2~~ | 2     | **0** |
* Row 2 has zeros at (M2,A), (M2,C).
* Col D has zeros at (M3,D), (M4,D).
* Row 3 has one zero at (M3,D). Assign M3-D. Cross out other zeros in Row 3 and Col D.
    |       | Job A | Job B | Job C | Job D |
    |-------|-------|-------|-------|-------|
    | **M1**| ~~1~~ | **0** | ~~3~~ | ~~1~~ |
    | **M2**| **0** | ~~0~~ | **0** | ~~3~~ |
    | **M3**| ~~1~~ | ~~1~~ | 1     | **0** | <- M3-D
    | **M4**| **0** | ~~2~~ | 2     | ~~0~~ |
* Now, Col A has zeros at (M2,A) and (M4,A). Row 2 has zeros at (M2,A) and (M2,C). Row 4 has zero at (M4,A).
* Row 4 has a single zero at (M4,A). Assign M4-A. Cross out other zeros in Row 4 and Col A.
    |       | Job A | Job B | Job C | Job D |
    |-------|-------|-------|-------|-------|
    | **M1**| ~~1~~ | **0** | ~~3~~ | ~~1~~ |
    | **M2**| **0** | ~~0~~ | **0** | ~~3~~ |
    | **M3**| ~~1~~ | ~~1~~ | 1     | **0** |
    | **M4**| **0** | ~~2~~ | ~~2~~ | ~~0~~ | <- M4-A
* Row 2 has a single zero at (M2,C). Assign M2-C.
    |       | Job A | Job B | Job C | Job D |
    |-------|-------|-------|-------|-------|
    | **M1**| ~~1~~ | **0** | ~~3~~ | ~~1~~ |
    | **M2**| ~~0~~ | ~~0~~ | **0** | ~~3~~ | <- M2-C
    | **M3**| ~~1~~ | ~~1~~ | 1     | **0** |
    | **M4**| **0** | ~~2~~ | ~~2~~ | ~~0~~ |

**Optimal Assignment:**
* M1 to Job B
* M2 to Job C
* M3 to Job D
* M4 to Job A

**Minimum Cost:**
* Cost(M1,B) = 15
* Cost(M2,C) = 13
* Cost(M3,D) = 16
* Cost(M4,A) = 15

Total Minimum Cost = 15 + 13 + 16 + 15 = **59**

---

**Question 2:**
Solve the following maximization problem using the Hungarian method:

|       | P1 | P2 | P3 |
|-------|----|----|----|
| **A1**| 3  | 5  | 7  |
| **A2**| 2  | 8  | 4  |
| **A3**| 6  | 3  | 9  |

**Answer to Question 2:**

**Step 1: Convert to Minimization**
Maximum element in the matrix is 9.
Subtract each element from 9:
|       | P1 | P2 | P3 |
|-------|----|----|----|
| **A1**| 6  | 4  | 2  |
| **A2**| 7  | 1  | 5  |
| **A3**| 3  | 6  | 0  |

**Step 2: Row Reduction**
|       | P1 | P2 | P3 |
|-------|----|----|----|
| **A1**| 4  | 2  | 0  |
| **A2**| 6  | 0  | 4  |
| **A3**| 3  | 6  | 0  |

**Step 3: Column Reduction**
|       | P1 | P2 | P3 |
|-------|----|----|----|
| **A1**| 4  | 2  | 0  |
| **A2**| 6  | 0  | 4  |
| **A3**| 3  | 6  | 0  |
(No change as minimums are already 0)

**Step 4: Cover Zeros with Minimum Lines**
Zeros are at (A1,P3), (A2,P2), (A3,P3).
* Row 1 has one zero. Cover Row 1.
* Row 2 has one zero. Cover Row 2.
* Row 3 has one zero. Cover Row 3.
This covers all zeros with 3 lines. Since 3 lines = order of matrix, optimal assignment is possible.

**Step 5: Make the Optimal Assignment**
* Row 1 has a single zero at (A1,P3). Assign A1-P3.
* Row 2 has a single zero at (A2,P2). Assign A2-P2.
* Row 3 has a single zero at (A3,P1). Assign A3-P1.

**Optimal Assignment (for minimization matrix):**
* A1 to P3
* A2 to P2
* A3 to P1

**Original Maximization Problem Assignment:**
* A1 to P3
* A2 to P2
* A3 to P1

**Maximum Profit:**
From the original profit matrix:
* Profit(A1,P3) = 7
* Profit(A2,P2) = 8
* Profit(A3,P1) = 6

Total Maximum Profit = 7 + 8 + 6 = **21**

---

### 8. Important Points to Remember

*   The Hungarian method is an efficient algorithm for solving the assignment problem, which is a special case of the transportation problem.
*   It guarantees an optimal solution.
*   For minimization problems, the core idea is to create as many zeros as possible in the cost matrix and then find an assignment using these zeros.
*   For maximization problems, convert them to minimization problems by subtracting all elements from the maximum element.
*   Unbalanced problems must be balanced by adding dummy rows or columns with zero costs.
*   The step of covering zeros with the minimum number of lines is crucial and can be tricky. Visualizing the lines and ensuring minimum coverage is key.
*   **[Banks, Carson, Nelson & Nicol, Chapter 7: Network Flow and Routing Problems, Fifth Edition, 2013]** discusses optimization techniques, and while not specifically on the Hungarian method, it provides context for the types of problems encountered in quantitative methods for engineers. The Hungarian method falls under combinatorial optimization.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |


### 9. Further Reading and References

*   **Operations Research by Paneerselvam R. (PHI, Third edition, 2023):** Chapter 15 provides a comprehensive treatment of the Assignment Problem and the Hungarian method.
*   **Operations Research by Taha (Pearson, Tenth edition, 2019):** Chapter 11 offers a detailed mathematical foundation and algorithmic steps for the Assignment Problem and the Hungarian method.
*   **Introduction to Operations Research by F. S. Hillier and G. J. Lieberman (McGraw Hill, Tenth edition, 2017):** Chapter 16 provides excellent explanations and examples of the Assignment Problem and its solution using the Hungarian method.

---
**End of Module Notes**
---