---
title: "We have three containers whose sizes are 10 litres, 7 litres, and 4 litres, respectively."
subject: "DATA STRUCTURES LAB"
module: "Module 10: We have three containers whose sizes are 10 litres, 7 litres, and 4 litres, respectively."
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ae78"
status: "completed"
scrapedAt: "2026-05-20T16:23:23.519Z"
---
# DATA STRUCTURES LAB - Module 10: Water Jug Problem

## Topic: Three Water Jug Problem (10L, 7L, 4L Containers)

**Description:** This module focuses on solving the classic "Water Jug Problem" using data structures and algorithms. We specifically examine the case where we have three jugs with capacities of 10 litres, 7 litres, and 4 litres respectively. The goal is to determine a sequence of steps to measure out a specific amount of water using only these jugs and pouring between them.

**Learning Outcomes:**

*   Understand the Water Jug Problem and its applicability to search algorithms.
*   Represent the problem state space using appropriate data structures (e.g., tuples).
*   Implement a Breadth-First Search (BFS) algorithm to find a solution to the Water Jug Problem.
*   Identify possible operations/moves between the jugs.
*   Analyze the efficiency of different search strategies for this problem.

### 1. Introduction to the Water Jug Problem

*   **Definition:** The Water Jug Problem is a classic puzzle where you are given a set of jugs (containers) with specific capacities and a way to fill and empty them. The objective is to measure a specific amount of water using only these jugs.
*   **Problem Instance:** In our case, we have three jugs:
    *   Jug A: 10 litres capacity
    *   Jug B: 7 litres capacity
    *   Jug C: 4 litres capacity
*   **Initial State:** Typically, we start with all jugs empty. (0, 0, 0) - (A, B, C)
*   **Goal State:** The goal is to reach a state where at least one of the jugs contains a specific amount of water.  For example, we might want to achieve a state where Jug A contains 2 litres (2, x, y) where 'x' and 'y' can be any value.
*   **Possible Operations:** The allowed operations involve filling, emptying, and pouring water between jugs.

### 2. Representing the Problem State

*   **State Representation:** We can represent the state of the jugs using a tuple (a, b, c), where:
    *   `a` represents the amount of water in Jug A (10L capacity).
    *   `b` represents the amount of water in Jug B (7L capacity).
    *   `c` represents the amount of water in Jug C (4L capacity).
*   **Example States:**
    *   (0, 0, 0): All jugs are empty.
    *   (10, 0, 0): Jug A is full, Jugs B and C are empty.
    *   (3, 7, 4): Jug A has 3 litres, Jug B is full, Jug C is full.

### 3. Possible Operations/Moves

*   We need to define all possible actions we can perform on the jugs. These actions involve filling, emptying, and pouring.
*   **Fill:**
    *   Fill A: `(10, b, c)` if `a < 10`
    *   Fill B: `(a, 7, c)` if `b < 7`
    *   Fill C: `(a, b, 4)` if `c < 4`
*   **Empty:**
    *   Empty A: `(0, b, c)` if `a > 0`
    *   Empty B: `(a, 0, c)` if `b > 0`
    *   Empty C: `(a, b, 0)` if `c > 0`
*   **Pour (A to B, A to C, B to A, B to C, C to A, C to B):** This is the most complex operation. We need to consider the current amount in both jugs involved and their capacities.

    *   **A to B:** `(max(0, a + b - 7), min(7, a + b), c)`
        *   If `a + b <= 7`, all of A is poured into B. Result: (0, a+b, c)
        *   If `a + b > 7`, B is filled to its capacity and the remaining water remains in A. Result: (a+b-7, 7, c)
    *   **A to C:** `(max(0, a + c - 4), b, min(4, a + c))`
        *   If `a + c <= 4`, all of A is poured into C. Result: (0, b, a+c)
        *   If `a + c > 4`, C is filled to its capacity and the remaining water remains in A. Result: (a+c-4, b, 4)
    *   **B to A:** `(min(10, a + b), max(0, a + b - 10), c)`
        *   If `a + b <= 10`, all of B is poured into A. Result: (a+b, 0, c)
        *   If `a + b > 10`, A is filled to its capacity and the remaining water remains in B. Result: (10, a+b-10, c)
    *   **B to C:** `(a, max(0, b + c - 4), min(4, b + c))`
        *   If `b + c <= 4`, all of B is poured into C. Result: (a, 0, b+c)
        *   If `b + c > 4`, C is filled to its capacity and the remaining water remains in B. Result: (a, b+c-4, 4)
    *   **C to A:** `(min(10, a + c), b, max(0, a + c - 10))`
        *   If `a + c <= 10`, all of C is poured into A. Result: (a+c, b, 0)
        *   If `a + c > 10`, A is filled to its capacity and the remaining water remains in C. Result: (10, b, a+c-10)
    *   **C to B:** `(a, min(7, b + c), max(0, b + c - 7))`
        *   If `b + c <= 7`, all of C is poured into B. Result: (a, b+c, 0)
        *   If `b + c > 7`, B is filled to its capacity and the remaining water remains in C. Result: (a, 7, b+c-7)

### 4. Implementing Breadth-First Search (BFS)

*   **BFS Algorithm:** BFS is a graph traversal algorithm that explores all the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level.  It's suitable for finding the shortest path (in terms of moves) to the solution.
*   **Data Structures for BFS:**
    *   **Queue:** Used to store the nodes (states) to be explored.
    *   **Set (or List) of Visited States:** To avoid revisiting states and creating infinite loops.

*   **Steps:**
    1.  **Initialize:**
        *   Start with the initial state (0, 0, 0).
        *   Create a queue and add the initial state to it.
        *   Create an empty set (or list) to store visited states.
    2.  **Loop:**
        *   While the queue is not empty:
            *   Dequeue a state from the queue.
            *   If the state is the goal state, return the solution path (reconstructed by storing the parent of each node).
            *   If the state has already been visited, continue to the next iteration.
            *   Mark the current state as visited.
            *   Generate all possible next states (neighbors) by applying the operations (fill, empty, pour).
            *   For each next state:
                *   If the next state is valid (within capacities) and not visited:
                    *   Enqueue the next state.
                    *   Store the parent state of the next state (for path reconstruction).
    3.  **No Solution:** If the queue becomes empty and the goal state has not been reached, then no solution exists.

*   **Example Code (Python):**

```python
from collections import deque

def solve_water_jug(capacity_a, capacity_b, capacity_c, target_amount):
    """
    Solves the Water Jug Problem using Breadth-First Search.

    Args:
        capacity_a: Capacity of Jug A (10).
        capacity_b: Capacity of Jug B (7).
        capacity_c: Capacity of Jug C (4).
        target_amount: The target amount to measure in any of the jugs.

    Returns:
        A list of tuples representing the path from initial to goal state,
        or None if no solution exists.
    """

    initial_state = (0, 0, 0)
    goal_state = lambda state: any(val == target_amount for val in state) #checks if any jug contains target amount
    queue = deque([(initial_state, [])])  # (state, path)
    visited = set()

    while queue:
        current_state, path = queue.popleft()

        if goal_state(current_state):
            return path + [current_state]

        if current_state in visited:
            continue

        visited.add(current_state)

        a, b, c = current_state

        # Define possible moves
        next_states = []

        # Fill
        next_states.append((capacity_a, b, c)) # Fill A
        next_states.append((a, capacity_b, c)) # Fill B
        next_states.append((a, b, capacity_c)) # Fill C

        # Empty
        next_states.append((0, b, c)) # Empty A
        next_states.append((a, 0, c)) # Empty B
        next_states.append((a, b, 0)) # Empty C

        # Pour
        next_states.append((max(0, a + b - capacity_b), min(capacity_b, a + b), c)) # A to B
        next_states.append((max(0, a + c - capacity_c), b, min(capacity_c, a + c))) # A to C
        next_states.append((min(capacity_a, a + b), max(0, a + b - capacity_a), c)) # B to A
        next_states.append((a, max(0, b + c - capacity_c), min(capacity_c, b + c))) # B to C
        next_states.append((min(capacity_a, a + c), b, max(0, a + c - capacity_a))) # C to A
        next_states.append((a, min(capacity_b, b + c), max(0, b + c - capacity_b))) # C to B

        for next_state in next_states:
            if next_state not in visited:
                queue.append((next_state, path + [current_state]))

    return None  # No solution found

# Example usage
capacity_a = 10
capacity_b = 7
capacity_c = 4
target_amount = 2  # Change this to find different solutions

solution = solve_water_jug(capacity_a, capacity_b, capacity_c, target_amount)

if solution:
    print("Solution found:")
    for state in solution:
        print(state)
else:
    print("No solution found.")
```

### 5. Analyzing Efficiency

*   **BFS Time Complexity:** In the worst case, BFS might explore all possible states. The number of states is bounded by (capacity_a + 1) * (capacity_b + 1) * (capacity_c + 1).  Therefore, the time complexity can be O(A\*B\*C), where A, B, and C are the capacities of the jugs.
*   **BFS Space Complexity:** BFS stores all nodes at a given level in the queue.  In the worst case, the space complexity is proportional to the number of nodes visited, hence O(A\*B\*C).
*   **Optimizations:**
    *   Using a `set` for `visited` significantly speeds up the search (O(1) lookup vs. O(n) in list).
    *   Heuristic search algorithms (like A*) can be more efficient for larger problems but are not covered in this module.
    *   Careful ordering of the moves might lead to faster discovery of solutions.

### 6. Practice Questions/Exercises

1.  **Problem:** Using the 10L, 7L, and 4L jugs, how would you measure exactly 2 litres of water?
    *   **Answer:** The example code above demonstrates finding the solution to this problem. The output from running the provided Python code shows one possible solution path.

2.  **Problem:**  Using the 10L, 7L, and 4L jugs, can you measure exactly 6 litres of water? If so, what are the steps?
    *   **Answer:** Modify the `target_amount` in the example code to `6` and run it. Observe the output to see if a solution is found. If found, the output represents the solution path.

3.  **Problem:**  Describe how the state (3, 0, 4) is derived from (0, 0, 4) using one of the defined moves.
    *   **Answer:** From (0, 0, 4), we can fill the 10-litre jug (Jug A) to get the state (10, 0, 4). Then we pour from Jug A into Jug B until Jug B is full(7). Now we have (3, 7, 4). Pouring from B to A gives us the target state: (3,0,4) is not directly reachable from (0,0,4). The more direct path involved filling A to capacity, which gives you (10,0,4).  Then Pouring some of jug A to B to capacity gives you (3, 7, 4). From this point, pouring from B to empty position in jug C would not get you to state (3,0,4) as pouring to empty jug C would simply make it zero.  One possible solution would be emptying B into Jug A instead. That way it will give you (3,0,4).

4.  **Problem:** Why is a `set` used for `visited` instead of a `list`? Explain the time complexity difference.
    *   **Answer:** A `set` provides significantly faster lookups (checking if an element exists). The `in` operator for a `set` has an average time complexity of O(1), while for a `list`, it's O(n), where n is the number of elements in the list.  Since we need to check if a state has been visited frequently, using a `set` drastically improves performance, especially as the number of visited states grows.

### 7. Important Points to Remember

*   **State Space:** The Water Jug Problem is essentially a search problem within a state space. Each state represents a specific configuration of water levels in the jugs.
*   **Operations:** The operations (fill, empty, pour) define the possible transitions between states.
*   **BFS guarantees the shortest path** (in terms of the number of moves) to the solution.
*   **Visited Set/List is crucial** to avoid infinite loops and improve efficiency. Without it, the algorithm would keep revisiting previously explored states.
*   **Adaptability:** This approach can be adapted to different jug sizes and target amounts.  Simply change the input parameters to the `solve_water_jug` function.
*   **Limitations:** For very large jug sizes, BFS can become computationally expensive due to the large state space. In such cases, consider heuristic search algorithms like A*.
