---
title: "N – Queens Problem"
subject: "DESIGN AND ANALYSIS OF ALGORITHMS"
module: "Module 3: Greedy Strategy "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b567"
status: "completed"
scrapedAt: "2026-05-20T16:45:52.263Z"
---
## Module 3: Greedy Strategy - N-Queens Problem

**Subject:** DESIGN AND ANALYSIS OF ALGORITHMS
**Topic:** N-Queens Problem
**Strategy:** Greedy Strategy

**Learning Outcomes:**

*   Understand the N-Queens problem and its constraints.
*   Analyze the limitations of a pure greedy approach for solving the N-Queens problem.
*   Implement a backtracking algorithm (often combined with greedy heuristics) to find solutions to the N-Queens problem.
*   Evaluate the efficiency of different approaches to solving the N-Queens problem.
*   Recognize and apply backtracking strategies to similar constraint satisfaction problems.

---

### 1. Introduction to the N-Queens Problem

*   **Definition:** The N-Queens problem is a classic combinatorial problem that asks you to place N chess queens on an N×N chessboard so that no two queens threaten each other.  This means no two queens can share the same row, column, or diagonal.

*   **Constraints:**

    *   **Row Constraint:** Each row can have only one queen.
    *   **Column Constraint:** Each column can have only one queen.
    *   **Diagonal Constraint:** No two queens can be on the same diagonal (both main and secondary diagonals).

*   **Objective:** Find all possible arrangements of N queens on the board that satisfy all the constraints.  Sometimes, the goal is to find just one solution.

*   **Example (N=4):** A possible solution for the 4-Queens problem is:

    ```
    _ Q _ _
    _ _ _ Q
    Q _ _ _
    _ _ Q _
    ```

    (Q represents a queen, _ represents an empty square).  In terms of row and column placements, this could be represented as `[2, 4, 1, 3]` meaning: Queen 1 is placed in column 2, Queen 2 is placed in column 4, Queen 3 is placed in column 1, Queen 4 is placed in column 3.

### 2. Greedy Approach and its Limitations

*   **Pure Greedy Attempt:** A naive greedy approach might involve placing queens one by one, selecting the first available position (e.g., from left to right in each row) that doesn't violate any constraints.

*   **Why a Pure Greedy Approach Fails:**

    *   **Local Optimization vs. Global Optimum:** The greedy approach focuses on making the "best" choice at each step *locally* without considering the overall impact on the final solution.  This can lead to a dead end where you can't place any more queens without violating the constraints, even though a solution might exist.

    *   **No Backtracking:**  A pure greedy approach doesn't backtrack. Once a decision is made, it's final. If the initial choices lead to a dead end, the algorithm doesn't go back and try different placements for previously placed queens.

*   **Example of Greedy Failure (N=4):**
    1.  Place the first queen in the first row, first column (1,1).
    2.  Place the second queen in the second row. The first available spot is (2,3).
    3.  Place the third queen in the third row. There is no available spot. The Greedy approach will stop here and report failure even though a solution exists.

*   **Conclusion:** A pure greedy approach is generally **not suitable** for solving the N-Queens problem because it's prone to getting stuck in local optima and doesn't provide a mechanism for backtracking.

### 3. Backtracking Algorithm

*   **Concept:** Backtracking is an algorithmic technique for solving problems recursively by incrementally building a solution, one component at a time. When a partial solution is found to be infeasible (violates constraints), the algorithm "backtracks" to a previous decision point and tries a different option.

*   **Steps:**

    1.  **Start:** Start with an empty board (no queens placed).
    2.  **Placement:** Try placing a queen in the next available row.
    3.  **Column Iteration:**  Iterate through each column in the current row.
    4.  **Constraint Check:** Check if placing a queen in the current column violates any constraints (row, column, diagonal).
    5.  **Success:** If the placement is valid, place the queen.
    6.  **Recursive Call:** Recursively call the function to place the next queen in the next row.
    7.  **Base Case:** If all N queens have been successfully placed (reached the Nth row), a solution has been found.  Store or print the solution.
    8.  **Backtracking:** If a placement in a row leads to a dead end (no valid column), remove the queen that was just placed (backtrack), and try the next available column in the previous row.
    9.  **No Solution:** If all columns have been tried in the first row and no solution has been found, then the problem has no solution.

*   **Pseudocode:**

    ```
    function solveNQueens(board, row):
        if row == N:
            # All queens are placed successfully
            printSolution(board)
            return True  # or return False if you want all solutions

        for col in range(N):
            if isSafe(board, row, col):
                # Place queen in board[row][col]
                board[row][col] = 1

                # Recursive call to place the next queen
                if solveNQueens(board, row + 1):
                    return True  # or continue to find all solutions

                # If placing queen doesn't lead to a solution, then
                # remove queen (backtrack)
                board[row][col] = 0

        # If queen can not be placed in any column in this row,
        # then return False
        return False

    function isSafe(board, row, col):
        # Check the column
        for i in range(row):
            if board[i][col] == 1:
                return False

        # Check upper left diagonal
        for i, j in zip(range(row, -1, -1), range(col, -1, -1)):
            if board[i][j] == 1:
                return False

        # Check upper right diagonal
        for i, j in zip(range(row, -1, -1), range(col, N, 1)):
            if board[i][j] == 1:
                return False

        return True

    # Main function
    N = 4 # Example:  N=4
    board = [[0 for _ in range(N)] for _ in range(N)]
    solveNQueens(board, 0)
    ```

*   **Explanation of `isSafe` function:**
    *   Checks if placing a queen at `(row, col)` is safe.
    *   It checks:
        *   **Vertical collision:** Checks all rows above the current row in the same column.
        *   **Diagonal collisions:** Checks upper-left and upper-right diagonals.

### 4. Efficiency and Optimization

*   **Time Complexity:** The time complexity of the backtracking algorithm for the N-Queens problem is O(N!), in the worst case. This is because, in the worst-case scenario, it might have to explore all possible placements of queens. The actual time taken depends on the value of N.
*   **Space Complexity:** The space complexity is O(N) due to the recursive call stack and the `board` array.

*   **Optimization Techniques:**

    *   **Constraint Propagation:** As you place queens, you can immediately mark the corresponding row, column, and diagonals as unavailable, effectively pruning the search space.
    *   **Heuristics (Combined with Backtracking):** While a pure greedy strategy isn't sufficient, using heuristics to guide the placement order within the backtracking framework can improve performance.  For example:
        *   **Minimum Remaining Values (MRV):**  Choose the row or column with the fewest remaining legal values (possible placements). This prioritizes the most constrained options, potentially leading to faster dead-end detection.
        *   **Least Constraining Value (LCV):** When choosing a value (column) to place a queen, pick the value that eliminates the fewest choices for neighboring unassigned variables (future queen placements).
    *   **Symmetry:** The N-Queens problem exhibits symmetry.  Solutions can be mirrored or rotated to generate other solutions.  By detecting and exploiting symmetry, you can reduce the search space.

### 5. Applying Backtracking to Similar Problems

*   **Constraint Satisfaction Problems (CSPs):** The N-Queens problem is a specific example of a broader class of problems called Constraint Satisfaction Problems.

*   **Other CSP Examples:**

    *   **Sudoku:**  Assigning numbers to cells in a grid such that each row, column, and block contains all numbers from 1 to 9 without repetition.
    *   **Map Coloring:** Assigning colors to regions on a map such that no two adjacent regions have the same color.
    *   **Scheduling Problems:**  Assigning tasks to resources (e.g., employees, machines) while respecting constraints on resource availability, task dependencies, and deadlines.
    *   **Cryptarithmetic:** Solving mathematical puzzles where letters represent digits (e.g., SEND + MORE = MONEY).

*   **General Backtracking Approach for CSPs:**

    1.  **Represent Variables:** Identify the variables that need to be assigned values.
    2.  **Define Domains:** Determine the possible values (domain) for each variable.
    3.  **Specify Constraints:**  Formulate the constraints that restrict the values that can be assigned to the variables.
    4.  **Backtracking Search:**
        *   Select an unassigned variable.
        *   Iterate through the possible values in the variable's domain.
        *   Check if assigning the current value violates any constraints.
        *   If the assignment is valid, update the current state and recursively try to assign values to other variables.
        *   If a dead end is reached, backtrack by undoing the current assignment and trying a different value.

### 6. Practice Questions and Exercises

1.  **Explain why a pure greedy algorithm is not suitable for solving the N-Queens problem.**
    *   **Answer:**  A pure greedy algorithm makes local optimal choices without considering the global constraints of the problem.  It lacks backtracking, so if an initial choice leads to a dead end, the algorithm fails to find a solution even if one exists.  It gets stuck in local optima.

2.  **Describe the steps involved in a backtracking algorithm to solve the N-Queens problem.**
    *   **Answer:**
        1. Start with an empty board.
        2.  Try placing a queen in the next available row.
        3.  Iterate through each column in the current row.
        4.  Check if placing a queen in the current column violates any constraints.
        5.  If the placement is valid, place the queen.
        6.  Recursively call the function to place the next queen in the next row.
        7.  If all N queens have been successfully placed, a solution has been found.
        8.  If a placement in a row leads to a dead end, remove the queen and try the next available column in the previous row (backtrack).

3.  **Write a Python function `is_safe(board, row, col, N)` that checks if placing a queen at position (row, col) on the N x N `board` is safe (doesn't violate any constraints).  Assume the board is represented as a 2D list of 0s and 1s (1 represents a queen).**

    ```python
    def is_safe(board, row, col, N):
        # Check the column
        for i in range(row):
            if board[i][col] == 1:
                return False

        # Check upper left diagonal
        for i, j in zip(range(row, -1, -1), range(col, -1, -1)):
            if board[i][j] == 1:
                return False

        # Check upper right diagonal
        for i, j in zip(range(row, -1, -1), range(col, N, 1)):
            if board[i][j] == 1:
                return False

        return True
    ```

4.  **What is the time complexity of a backtracking algorithm for solving the N-Queens problem in the worst case?**
    *   **Answer:** O(N!)

5.  **Name three Constraint Satisfaction Problems (CSPs) besides the N-Queens problem.**
    *   **Answer:** Sudoku, Map Coloring, Scheduling Problems

6.  **Explain the Minimum Remaining Values (MRV) heuristic and how it can be used to improve the efficiency of a backtracking algorithm for the N-Queens problem.**
    *   **Answer:** MRV (Minimum Remaining Values) is a heuristic that prioritizes selecting the variable (row or column) with the fewest remaining legal values (possible queen placements). By choosing the most constrained option first, the algorithm is more likely to quickly detect dead ends and prune the search space, improving efficiency.

### 7. Important Points to Remember

*   The N-Queens problem demonstrates the limitations of a pure greedy approach for constraint satisfaction problems.
*   Backtracking is a powerful technique for solving the N-Queens problem and other CSPs.
*   Optimization techniques like constraint propagation and heuristics (e.g., MRV, LCV) can significantly improve the efficiency of backtracking algorithms.
*   Backtracking involves exploring possible solutions incrementally and undoing decisions when a dead end is reached.
*   The time complexity of a backtracking algorithm for the N-Queens problem is exponential in the worst case.
