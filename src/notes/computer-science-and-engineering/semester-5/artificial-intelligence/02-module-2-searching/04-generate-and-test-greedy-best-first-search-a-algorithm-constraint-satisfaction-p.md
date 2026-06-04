---
title: "Generate and test, Greedy best first search, A* algorithm, Constraint satisfaction problems, Adversarial search - Games, Optimal Decision in games, The minimax algorithm, Alpha–beta pruning."
subject: "ARTIFICIAL INTELLIGENCE"
module: "Module 2: Searching:"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b6e3"
status: "completed"
scrapedAt: "2026-05-20T16:43:09.992Z"
---
# ARTIFICIAL INTELLIGENCE - Module 2: Searching

## Topic: Search Algorithms and Adversarial Search

**Learning Outcomes:**

*   Understand and explain the Generate and Test algorithm.
*   Understand and explain the Greedy Best-First Search algorithm.
*   Understand and apply the A* algorithm for pathfinding.
*   Model and solve Constraint Satisfaction Problems (CSPs).
*   Understand the concept of adversarial search in games.
*   Explain optimal decision making in games.
*   Implement the Minimax algorithm.
*   Apply Alpha-Beta Pruning to optimize Minimax.

---

### 1. Generate and Test

*   **Definition:**  A very basic search algorithm that generates potential solutions and then tests them to see if they meet the problem's constraints.

*   **Key Concepts:**
    *   **Generation:**  Creating a possible solution (e.g., a configuration, a path).
    *   **Testing:** Evaluating the generated solution against the problem's constraints or goal conditions.

*   **Algorithm:**
    1.  Generate a possible solution.
    2.  Test the solution.
    3.  If the solution satisfies the goal condition, return the solution.
    4.  Otherwise, go back to step 1.

*   **Advantages:**
    *   Simple to implement.
    *   Useful when the solution space is relatively small and well-defined.

*   **Disadvantages:**
    *   Highly inefficient for large or complex search spaces.
    *   Can get stuck generating many invalid solutions.
    *   Blind search - no guidance toward the goal.

*   **Example:**
    *   **Problem:** Find a 3-digit number where each digit is different and the sum of the digits is 10.
    *   **Generate:** Try 123.
    *   **Test:** Digits are different (True), Sum is 6 (False).
    *   **Generate:** Try 145.
    *   **Test:** Digits are different (True), Sum is 10 (True).  Solution found!

*   **Important Points:**
    *   Effective only for simple problems with a well-understood search space.
    *   It is an uninformed search method (blind search).

*   **Practice Question:**
    *   Describe a scenario where Generate and Test would be a suitable search algorithm.  Explain why it's suitable in that specific situation.
    *   **Answer:** Generate and Test is suitable for problems where the set of possible solutions is small and easily enumerable.  For example, cracking a short, simple password where you know the character set and length. The code would generate each possible password (e.g. "aaa", "aab", "aac", etc.) and compare it to the actual password until it finds a match.

---

### 2. Greedy Best-First Search

*   **Definition:** A search algorithm that expands the node that is estimated to be closest to the goal based on a heuristic function.

*   **Key Concepts:**
    *   **Heuristic Function (h(n)):** Estimates the cost from a node *n* to the goal node.
    *   **Evaluation Function:** In Greedy Best-First Search, the evaluation function *f(n) = h(n)*.

*   **Algorithm:**
    1.  Start with the initial node.
    2.  Expand the node with the lowest heuristic value.
    3.  Repeat step 2 until a goal node is reached.

*   **Advantages:**
    *   Can find solutions quickly if the heuristic is accurate.
    *   Simple to implement.

*   **Disadvantages:**
    *   Not optimal (may not find the shortest path).
    *   Can get stuck in local optima (nodes that appear good locally but lead to a suboptimal overall path).
    *   Completeness is not guaranteed, meaning it might not find a solution even if one exists.

*   **Example:**
    *   **Problem:** Find a route from city A to city B on a map.
    *   **Heuristic:** Straight-line distance (Euclidean distance) from each city to city B.
    *   The algorithm always expands the city closest to city B based on the straight-line distance.

*   **Important Points:**
    *   The performance heavily relies on the quality of the heuristic function.
    *   A poorly chosen heuristic can lead to very inefficient search.

*   **Practice Question:**
    *   Explain why Greedy Best-First Search might not find the optimal solution to a problem. Give a specific example of a scenario where this would happen.
    *   **Answer:**  Greedy Best-First Search only considers the heuristic value (estimated cost to the goal) and ignores the actual cost of the path taken to reach the current node.  Imagine a road network: To get from City A to City C, one can either take a direct route that is long or take a route to City B which is closer to City C. Because the Greedy Best-First Search chooses City B, it might not find the optimal solution to reach City C if the road between City B and City C is longer than the road between City A and City C.

---

### 3. A* Algorithm

*   **Definition:**  An informed search algorithm that finds the least-cost path from a start node to a goal node.  It combines the cost to reach the node (g(n)) and the estimated cost to reach the goal (h(n)).

*   **Key Concepts:**
    *   **g(n):** The cost of the path from the start node to node *n*.
    *   **h(n):** The heuristic function estimating the cost from node *n* to the goal node.
    *   **f(n):** The evaluation function: *f(n) = g(n) + h(n)*.
    *   **Admissible Heuristic:** A heuristic function *h(n)* is admissible if it never overestimates the cost to reach the goal.  *h(n) ≤ h\*(n)*, where h\*(n) is the true cost.
    *   **Consistent Heuristic:**  A heuristic is consistent (or monotonic) if *h(n) ≤ c(n, n') + h(n')*, where *c(n, n')* is the cost of moving from node *n* to node *n'*.  All consistent heuristics are admissible.

*   **Algorithm:**
    1.  Start with the initial node, set g(n) = 0 and f(n) = h(n).
    2.  Add the initial node to the open list.
    3.  While the open list is not empty:
        *   Remove the node with the lowest *f(n)* from the open list (current node).
        *   If the current node is the goal node, return the path.
        *   Generate the successors of the current node.
        *   For each successor:
            *   Calculate *g(successor) = g(current) + cost(current, successor)*
            *   Calculate *f(successor) = g(successor) + h(successor)*
            *   If the successor is in the open list and has a lower *f* value, skip this successor.
            *   If the successor is in the closed list and has a lower *f* value, skip this successor.
            *   Otherwise, add the successor to the open list.
    4.  If the open list is empty and the goal hasn't been reached, no solution exists.

*   **Advantages:**
    *   Optimal (guarantees finding the least-cost path if the heuristic is admissible).
    *   Complete (guarantees finding a solution if one exists).
    *   Efficient (more efficient than uninformed search algorithms).

*   **Disadvantages:**
    *   Can be memory-intensive (keeps track of explored nodes).
    *   Performance depends on the quality of the heuristic function.

*   **Example:**
    *   **Problem:**  Find the shortest route between two cities, considering distance and estimated time.
    *   **g(n):** Actual distance traveled so far.
    *   **h(n):** Estimated distance remaining (e.g., straight-line distance).
    *   The algorithm explores paths based on the sum of the distance traveled and the estimated distance remaining.

*   **Important Points:**
    *   Admissibility of the heuristic is crucial for optimality.
    *   A consistent heuristic guarantees that the first time a node is visited, it's along the optimal path.
    *   A* is widely used in pathfinding, game AI, and robotics.

*   **Practice Question:**
    *   Explain the difference between an admissible and a consistent heuristic. Why is admissibility important for A* to find the optimal solution?
    *   **Answer:** An admissible heuristic never overestimates the cost to reach the goal, while a consistent heuristic satisfies the triangle inequality (the estimated cost from node A to the goal is less than or equal to the cost from node A to node B plus the estimated cost from node B to the goal). Admissibility is crucial because it ensures that A* never dismisses a potentially optimal path based on an overestimate of the remaining cost. If the heuristic overestimates, A* might choose a suboptimal path that *appears* cheaper.

---

### 4. Constraint Satisfaction Problems (CSPs)

*   **Definition:** A problem where the goal is to assign values to a set of variables subject to certain constraints.

*   **Key Concepts:**
    *   **Variables:** A set of variables {X1, X2, ..., Xn}.
    *   **Domains:** For each variable Xi, a set of possible values Di.
    *   **Constraints:** Rules that specify allowable combinations of values for subsets of variables.

*   **Example:**
    *   **Problem:** Map coloring - Assign colors to regions on a map such that no two adjacent regions have the same color.
    *   **Variables:** Regions on the map (e.g., states/provinces).
    *   **Domains:** Available colors (e.g., {red, green, blue}).
    *   **Constraints:** Adjacent regions must have different colors (e.g., X_state1 ≠ X_state2 if state1 and state2 are neighbors).

*   **Solving CSPs:**
    *   **Backtracking Search:**  A depth-first search that explores assignments to variables.
        *   Assign a value to a variable.
        *   Check if the assignment violates any constraints.
        *   If it does, backtrack and try a different value.
        *   If all values have been tried for a variable and no solution is found, backtrack to the previous variable.
    *   **Constraint Propagation:** Reducing the domains of variables by eliminating values that violate constraints.
        *   **Forward Checking:** When a variable is assigned a value, eliminate values from the domains of unassigned variables that are inconsistent with the assignment.
        *   **Arc Consistency:** Enforces consistency between pairs of variables. For every pair of variables X and Y, ensure that for every value in X's domain, there is a value in Y's domain that satisfies the constraint between X and Y.

*   **Advantages:**
    *   A general problem-solving framework.
    *   Many real-world problems can be modeled as CSPs.

*   **Disadvantages:**
    *   Solving CSPs can be computationally expensive (NP-complete in general).
    *   Requires careful modeling of the problem.

*   **Important Points:**
    *   CSP solvers often use a combination of backtracking search and constraint propagation techniques.
    *   Variable and value ordering heuristics can significantly improve performance.  Examples include Minimum Remaining Values (MRV) and Least Constraining Value.

*   **Practice Question:**
    *   Model the N-Queens problem (placing N queens on an N x N chessboard such that no two queens attack each other) as a CSP. Define the variables, domains, and constraints.
    *   **Answer:**
        *   **Variables:** Q1, Q2, ..., QN (representing the column position of the queen in row 1, row 2, ..., row N respectively).
        *   **Domains:** Di = {1, 2, ..., N} for each Qi (representing the possible column positions for a queen in a given row).
        *   **Constraints:**
            *   Qi ≠ Qj for all i ≠ j (No two queens can be in the same column).
            *   |Qi - Qj| ≠ |i - j| for all i ≠ j (No two queens can be on the same diagonal).

---

### 5. Adversarial Search - Games

*   **Definition:** A search technique for game playing, where multiple agents (players) with conflicting goals try to maximize their own chances of winning.

*   **Key Concepts:**
    *   **Game Tree:** A tree representation of all possible game states and moves.
        *   Nodes represent game states.
        *   Edges represent moves by the players.
    *   **Players:** Typically two players: MAX (the agent) and MIN (the opponent).
    *   **Utility Function:** A function that assigns a numerical value to each terminal state, representing the outcome of the game for the MAX player. A positive value indicates a win for MAX, a negative value a loss, and zero a draw.
    *   **Zero-Sum Game:**  A game where one player's gain is exactly equal to the other player's loss.

*   **Examples:**
    *   Chess
    *   Checkers
    *   Tic-Tac-Toe
    *   Go

*   **Important Points:**
    *   Adversarial search considers the opponent's moves.
    *   Assumes the opponent will play optimally.

---

### 6. Optimal Decision in Games

*   **Goal:** To choose the best move for the agent (MAX) assuming the opponent (MIN) also plays optimally.
*   **Optimal Strategy:** The strategy that leads to the best possible outcome for the agent, regardless of what the opponent does.
*   **Perfect Information Games:** Games where all information about the game state is available to both players (e.g., chess, checkers, Tic-Tac-Toe).
*   **Imperfect Information Games:** Games where players have incomplete information about the game state (e.g., poker, bridge).  Strategies become more complex.

---

### 7. The Minimax Algorithm

*   **Definition:** A recursive algorithm for determining the optimal move for a player in a two-player, zero-sum game. It assumes both players play optimally.

*   **Algorithm:**
    1.  Generate the complete game tree up to a certain depth (search horizon).
    2.  Apply the utility function to the terminal nodes (leaf nodes) to determine their values.
    3.  Back up the values from the terminal nodes to the root node by alternating between:
        *   **MAX nodes:** Choose the move with the maximum value.
        *   **MIN nodes:** Choose the move with the minimum value.
    4.  The value at the root node represents the minimax value of the game, and the move that leads to that value is the optimal move for MAX.

*   **Example:**
    ```
             MAX
           /       \
       MIN           MIN
      /  \          /  \
    3      5       2    4  (Terminal Nodes - Utility Values)

    MIN chooses the minimum values:  min(3, 5) = 3, min(2, 4) = 2
    MAX chooses the maximum value: max(3, 2) = 3

    Therefore, the Minimax value at the root is 3.
    ```

*   **Advantages:**
    *   Guarantees finding the optimal move, assuming both players play optimally and the entire game tree can be explored.

*   **Disadvantages:**
    *   Computationally expensive: Time complexity is O(b^m), where b is the branching factor (number of possible moves) and m is the maximum depth of the tree. This makes it impractical for complex games with large branching factors and deep trees.

*   **Important Points:**
    *   Assumes perfect information.
    *   In practice, a search horizon is used to limit the depth of the search.
    *   Evaluation functions are used to estimate the value of non-terminal nodes.

*   **Practice Question:**
    *   Draw a game tree to a depth of 2 for a simplified version of Tic-Tac-Toe where each player only gets 2 moves and the board is only 2x2. Assume X is MAX and goes first. Assign arbitrary utility values (-1, 0, 1) to the terminal nodes based on whether X wins, it's a draw, or O wins, respectively. Then, use the Minimax algorithm to determine the best first move for X.
    *   **(Answer will vary depending on utility values chosen)**

---

### 8. Alpha-Beta Pruning

*   **Definition:** An optimization technique for the Minimax algorithm that reduces the number of nodes that need to be evaluated in the game tree. It eliminates branches that cannot possibly influence the final decision.

*   **Key Concepts:**
    *   **Alpha (α):** The best (maximum) value that MAX has found so far along the path.
    *   **Beta (β):** The best (minimum) value that MIN has found so far along the path.
    *   **Pruning:** Eliminating branches of the game tree that cannot affect the final result.

*   **Algorithm:**
    1.  Perform a depth-first traversal of the game tree.
    2.  Maintain alpha and beta values for each node.
    3.  **MAX node:**
        *   Update alpha with the maximum value found so far.
        *   If alpha ≥ beta, prune the remaining branches of the node.
    4.  **MIN node:**
        *   Update beta with the minimum value found so far.
        *   If beta ≤ alpha, prune the remaining branches of the node.

*   **Example:**

    (Imagine a minimax tree - difficult to draw in markdown but conceptually similar to the above example.)

    *   During the traversal, if a MIN node encounters a value less than or equal to the alpha value of one of its ancestor MAX nodes, it can prune the remaining branches because MAX will never choose this path.
    *   Similarly, if a MAX node encounters a value greater than or equal to the beta value of one of its ancestor MIN nodes, it can prune the remaining branches because MIN will never choose this path.

*   **Advantages:**
    *   Significant reduction in the number of nodes evaluated.
    *   Can effectively double the search depth compared to Minimax without pruning.
    *   Does not affect the optimality of the solution.

*   **Disadvantages:**
    *   Efficiency depends on the order in which nodes are visited.  Best case: moves that lead to good outcomes are evaluated first. Worst Case: little to no pruning.
    *   More complex to implement than Minimax.

*   **Important Points:**
    *   Alpha-Beta Pruning is a crucial optimization for game AI.
    *   Node ordering can significantly impact its effectiveness.
    *   The algorithm maintains the same optimality as Minimax.

*   **Practice Question:**
    *   Explain how Alpha-Beta Pruning can reduce the search space in the Minimax algorithm.  Give an example of a scenario where Alpha-Beta Pruning would be highly effective in reducing the number of nodes explored.
    *   **Answer:** Alpha-Beta Pruning eliminates branches of the game tree that cannot possibly influence the final decision. It does this by keeping track of the best (minimum) value that MIN has found so far (beta) and the best (maximum) value that MAX has found so far (alpha). If at any point a node's value would lead to a worse outcome for the opposing player than what they already have guaranteed, then the algorithm can stop exploring that branch. Alpha-Beta Pruning is highly effective if the branches that lead to favorable outcomes are explored first, because this will quickly narrow down the alpha and beta values, leading to more pruning.  Consider a case where a good initial move leads MAX to a value of 5 early in the tree.  If MIN then explores a branch where its first move yields a value of 3, there's no need to explore that branch further because MAX will never choose that branch since it already has a path to a value of 5. This reduces the search space significantly.
