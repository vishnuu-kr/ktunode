---
title: "Example problems- vacuum world, 8-puzzle, 8-queens."
subject: "ARTIFICIAL INTELLIGENCE"
module: "Module 1: Introduction to Artificial Intelligence:"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b6de"
status: "completed"
scrapedAt: "2026-05-20T16:43:07.194Z"
---
# ARTIFICIAL INTELLIGENCE - Module 1: Introduction to AI - Example Problems

## Topic: Vacuum World, 8-Puzzle, 8-Queens

### Learning Outcomes:

*   Understand the concept of state space representation for problem-solving in AI.
*   Describe the vacuum world problem and its different variations.
*   Explain the 8-puzzle problem and identify its key characteristics.
*   Describe the 8-queens problem and its constraints.
*   Recognize these problems as examples of search problems in AI.
*   Distinguish between deterministic and stochastic environments in the context of these problems.
*   Explain the concept of optimality in problem-solving.

---

## 1. Introduction to Problem Solving and Search in AI

*   **AI and Problem Solving:** Many AI tasks can be framed as search problems, where the AI agent aims to find a sequence of actions that leads from an initial state to a goal state.

*   **State Space Representation:** A problem is defined by:
    *   **Initial State:**  The starting point of the problem.
    *   **Actions:**  The possible operations that can be performed in each state.
    *   **Transition Model:**  Describes what happens when an action is applied to a state.  It's often represented as a function: `Transition(state, action) -> new_state`.
    *   **Goal Test:**  Determines whether a given state is a goal state.
    *   **Path Cost Function:** Assigns a numeric cost to a path (sequence of actions).  The optimal solution is usually the path with the lowest cost.

*   **Search Algorithms:**  Algorithms used to explore the state space and find a path to a goal state.  Examples include Breadth-First Search, Depth-First Search, A\* Search, etc.

*   **Deterministic vs. Stochastic Environments:**
    *   **Deterministic:** The outcome of an action is completely predictable given the current state. Vacuum World, 8-Puzzle, and 8-Queens are typically modeled as deterministic.
    *   **Stochastic:** The outcome of an action is uncertain and may have different possible results.

*   **Optimality:** Finding the best solution (e.g., shortest path, lowest cost) out of all possible solutions.

---

## 2. Vacuum World

*   **Description:**  A simple problem involving a vacuum cleaner agent in a grid of squares.  Each square can be either clean or dirty. The agent's goal is to clean all dirty squares.

*   **Key Concepts:**
    *   **State:** Represents the current location of the vacuum cleaner and the dirtiness of each square. For example, in a 2x2 grid, a state could be:  `(Location: A,  Dirt: [A=Dirty, B=Clean, C=Dirty, D=Clean])`, where A, B, C, D are the squares in the grid.
    *   **Actions:** The vacuum cleaner can typically perform the following actions:
        *   `Left`: Move to the square on the left (if possible).
        *   `Right`: Move to the square on the right (if possible).
        *   `Up`: Move to the square above (if possible).
        *   `Down`: Move to the square below (if possible).
        *   `Suck`:  Clean the current square.
    *   **Transition Model:** Defines the result of each action. For example, `Transition(Location: A, Dirt: [A=Dirty], Suck) -> Location: A, Dirt: [A=Clean]`.
    *   **Goal Test:**  Checks if all squares are clean.
    *   **Path Cost:** Usually the number of actions taken.  Each action has a cost of 1.

*   **Variations:**
    *   **Deterministic:** The outcome of `Suck` is always cleaning the square.
    *   **Stochastic:** `Suck` might sometimes fail to clean the square.
    *   **Observable vs. Partially Observable:** The agent might have full knowledge of the world (location and dirtiness of each square), or only limited knowledge (e.g., only the dirtiness of its current square).

*   **Example State Space:**
    Consider a 2-location vacuum world.
        *   **States:** [A=Clean, B=Clean], [A=Dirty, B=Clean], [A=Clean, B=Dirty], [A=Dirty, B=Dirty].  The agent can be in either location A or B in each of these states. This gives 2 * 4 = 8 possible states.
        *   **Initial State:**  Could be any of the above states.
        *   **Goal State:** [A=Clean, B=Clean].
        *   **Actions:** Left, Right, Suck.

---

## 3. 8-Puzzle

*   **Description:**  A sliding puzzle consisting of a 3x3 grid containing 8 numbered tiles and a blank space. The goal is to rearrange the tiles to match a specified goal configuration by sliding tiles into the blank space.

*   **Key Concepts:**
    *   **State:** A specific arrangement of the tiles on the grid. Represented as a list or matrix, e.g., `[1, 2, 3, 8, 0, 4, 7, 6, 5]` where 0 represents the blank space.
    *   **Actions:**  Moving the blank space up, down, left, or right (if possible).
    *   **Transition Model:**  Specifies how the state changes when the blank space is moved. For example, moving the blank space "up" would swap the tile above the blank space with the blank space.
    *   **Goal Test:**  Checks if the current state matches the desired goal state (e.g., `[1, 2, 3, 8, 0, 4, 7, 6, 5]` -> `[1, 2, 3, 4, 5, 6, 7, 8, 0]`).
    *   **Path Cost:**  Usually the number of moves (each move has a cost of 1).

*   **Solvability:**  Not all initial states are solvable.  The solvability depends on the number of inversions (pairs of tiles out of order) in the initial state.  If the number of inversions is even, the puzzle is solvable; otherwise, it is not.

*   **Example:**
    *   **Initial State:**
        ```
        1 2 3
        8 0 4
        7 6 5
        ```
    *   **Goal State:**
        ```
        1 2 3
        4 5 6
        7 8 0
        ```
    *   **Possible Actions from Initial State:** Move 0 up, Move 0 right, Move 0 down, Move 0 left (invalid).

---

## 4. 8-Queens

*   **Description:** The problem of placing eight chess queens on an 8x8 chessboard so that no two queens threaten each other. This means no two queens can be in the same row, column, or diagonal.

*   **Key Concepts:**
    *   **State:** Represents the positions of the queens on the board.  Can be represented as a list of column positions for each row.  For example, `[1, 5, 8, 6, 3, 7, 2, 4]` means the queen in the first row is in column 1, the queen in the second row is in column 5, and so on.
    *   **Actions:**  Placing a queen in a row, one row at a time. Common strategies include placing a queen in each row sequentially.
    *   **Transition Model:** Placing a queen in a specific position in the next row.
    *   **Goal Test:**  Checks if all queens are placed on the board and no two queens threaten each other.
    *   **Path Cost:**  Typically, path cost isn't directly used. The goal is to find *any* solution that satisfies the constraints.

*   **Constraints:**
    *   **Row Constraint:**  Only one queen per row. This is often inherently enforced by the problem formulation where you add a queen to each row sequentially.
    *   **Column Constraint:** No two queens can be in the same column.
    *   **Diagonal Constraints:** No two queens can be on the same diagonal. This requires checking both the main and anti-diagonals.

*   **Example:**
    *   **Valid Configuration (Partial):** `[1, 5]`  (The first queen is in column 1, row 1; the second queen is in column 5, row 2). This is a valid partial solution since the two queens do not attack each other.
    *   **Invalid Configuration (Partial):** `[1, 1]` (The first queen is in column 1, row 1; the second queen is also in column 1, row 2). This violates the column constraint.

---

## 5. Summary of Problem Characteristics

| Feature         | Vacuum World                               | 8-Puzzle                                  | 8-Queens                                   |
|-----------------|---------------------------------------------|--------------------------------------------|---------------------------------------------|
| State           | Location, Dirt Status                     | Tile Arrangement                          | Queen Positions                             |
| Actions         | Left, Right, Suck                           | Move Blank Space                            | Place Queen in Next Row                     |
| Goal Test       | All squares clean                         | Tiles in desired order                      | No two queens threaten each other           |
| Path Cost       | Number of actions                         | Number of moves                             | Not usually applicable - find *any* solution|
| Deterministic?   | Typically yes                             | Yes                                         | Yes                                         |
| Optimal Solution| Yes, usually (fewest actions)              | Yes, but computationally expensive for large instances | No, only a solution is sought.             |
| Notes           | Simulates cleaning behavior.              | Tests search algorithms' efficiency.       | Illustrates constraint satisfaction problems.|

---

## 6. Practice Questions/Exercises

1.  **Vacuum World:** Describe the state space for a vacuum world with 1 row and 3 columns.
    *   **Answer:**  There are 3 locations, and each location can be either clean or dirty, so there are 2^3 = 8 possible dirt configurations. The agent can be in any of the 3 locations.  Therefore, there are 3 * 8 = 24 possible states.

2.  **8-Puzzle:** Explain why some initial states of the 8-puzzle are unsolvable.
    *   **Answer:** The unsolvability is related to the number of inversions (pairs of tiles out of order).  The solvable states have an even number of inversions, while unsolvable states have an odd number of inversions. This is because each valid move changes the number of inversions by an even number, so you can never change an odd number of inversions to an even number or vice versa through legal moves.

3.  **8-Queens:**  Why can't we solve the 8-Queens problem using a simple "generate and test" approach (randomly placing queens until a solution is found)?
    *   **Answer:** The search space is too large. There are 64C8 (64 choose 8) possible arrangements of 8 queens on the board.  Most of these are invalid, meaning generating and testing would be extremely inefficient and unlikely to find a solution in a reasonable time. Constraint satisfaction techniques and intelligent search algorithms are needed.

4.  **8-Puzzle:**  Given the initial state `[2, 8, 3, 1, 6, 4, 7, 0, 5]`, what are the possible next states after applying the available actions? (0 represents the blank space)
    *   **Answer:** The blank space is at position 7 (index 7). Possible actions are:
        *   Move blank space "Up": Swap 0 and 6 -> `[2, 8, 3, 1, 0, 4, 7, 6, 5]`
        *   Move blank space "Right": Swap 0 and 5 -> `[2, 8, 3, 1, 6, 4, 7, 5, 0]`

5.  **Vacuum World:** In a 2x1 Vacuum World (2 cells, one row), what is the *maximum* number of actions an agent could take if it doesn't optimize its movements and cleans everything eventually? Assume the agent starts at Cell A (left), both cells are dirty, and the agent always moves even if it's not necessary.
    *   **Answer:**
        1. Suck (A): [A=Clean, B=Dirty]. Action count: 1
        2. Right: Agent moves to B. [A=Clean, B=Dirty]. Action count: 2
        3. Suck (B): [A=Clean, B=Clean]. Action count: 3
        4. Left: Agent moves to A. [A=Clean, B=Clean]. Action count: 4
        5. Right: Agent moves to B. [A=Clean, B=Clean]. Action count: 5

        So, the agent can take up to 5 actions if it does not optimize its movements.

---

## 7. Important Points to Remember

*   State space representation is a crucial concept for framing AI problems.
*   Vacuum World, 8-Puzzle, and 8-Queens are classical examples for demonstrating search and problem-solving techniques.
*   Understanding the characteristics of the environment (deterministic vs. stochastic, observable vs. partially observable) is important for choosing appropriate algorithms.
*   Solvability of a problem depends on the initial state and the constraints.
*   The choice of a path cost function influences the solution obtained. Often, a goal is simply reached instead of optimizing the path.
