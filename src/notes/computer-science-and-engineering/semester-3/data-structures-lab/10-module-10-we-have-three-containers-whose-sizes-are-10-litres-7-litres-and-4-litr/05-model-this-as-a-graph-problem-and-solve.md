---
title: "Model this as a graph problem and solve."
subject: "DATA STRUCTURES LAB"
module: "Module 10: We have three containers whose sizes are 10 litres, 7 litres, and 4 litres, respectively."
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ae7c"
status: "completed"
scrapedAt: "2026-05-20T16:23:26.425Z"
---
## DATA STRUCTURES LAB - Module 10: Container Problem as a Graph

**Topic:** Modeling and Solving the 10L, 7L, and 4L Container Problem as a Graph

**Learning Outcomes:**

*   Understand how to model a problem involving states and transitions as a graph.
*   Learn to represent the state space of the container problem.
*   Apply graph traversal algorithms (e.g., Breadth-First Search) to find a solution to the container problem.
*   Implement the graph representation and traversal algorithm in code.
*   Analyze the efficiency and limitations of the graph-based approach.

---

### 1. Key Concepts and Definitions

*   **State:** A specific configuration of the containers. In this problem, a state is defined by the amount of water in each container (10L, 7L, 4L). We can represent a state as a tuple (x, y, z), where x is the amount of water in the 10L container, y is the amount in the 7L container, and z is the amount in the 4L container.
*   **State Space:** The set of all possible states the system can be in.  In this container problem, the state space is limited by the capacities of the containers and the fact that the amount of water in each container must be a non-negative integer.
*   **Transition:** An action that changes the state of the system. In this problem, transitions are actions like filling a container, emptying a container, or pouring water from one container to another.
*   **Graph:** A data structure consisting of nodes (vertices) and edges.  In this context:
    *   **Nodes/Vertices:** Represent the states of the containers (e.g., (0, 0, 0), (10, 0, 0)).
    *   **Edges:** Represent the possible transitions between states (e.g., pouring from the 10L container to the 7L container).  Edges can be directed (representing a one-way transition).
*   **Graph Traversal:** A systematic way to visit all nodes of a graph.  Breadth-First Search (BFS) is a common algorithm for finding the shortest path in an unweighted graph.
*   **Breadth-First Search (BFS):**  A graph traversal algorithm that explores the graph layer by layer. It starts at a given node (the initial state), visits all its neighbors, then visits the neighbors of those neighbors, and so on.  BFS uses a queue to keep track of the nodes to visit.
*   **Goal State:** The desired state that we are trying to reach (e.g., (5, x, y) - 5 litres in the 10 litre container).

### 2. Modeling the Container Problem as a Graph

*   **States:** Each possible combination of water levels in the three containers forms a state.
    *   The 10L container can have 0 to 10 litres.
    *   The 7L container can have 0 to 7 litres.
    *   The 4L container can have 0 to 4 litres.
    *   A state is represented as (x, y, z), where:
        *   x = amount in the 10L container (0 <= x <= 10)
        *   y = amount in the 7L container (0 <= y <= 7)
        *   z = amount in the 4L container (0 <= z <= 4)
*   **Transitions (Edges):** The possible actions that can be performed on the containers define the transitions between states. These actions include:
    *   **Fill:** Fill a container completely.
        *   (x, y, z) -> (10, y, z)  (Fill 10L)
        *   (x, y, z) -> (x, 7, z)  (Fill 7L)
        *   (x, y, z) -> (x, y, 4)  (Fill 4L)
    *   **Empty:** Empty a container completely.
        *   (x, y, z) -> (0, y, z)  (Empty 10L)
        *   (x, y, z) -> (x, 0, z)  (Empty 7L)
        *   (x, y, z) -> (x, y, 0)  (Empty 4L)
    *   **Pour:** Pour water from one container to another until the receiving container is full or the pouring container is empty.  This leads to several pour transitions:
        *   Pour 10L to 7L: (x, y, z) -> (max(0, x + y - 7), min(7, x + y), z)
        *   Pour 10L to 4L: (x, y, z) -> (max(0, x + z - 4), y, min(4, x + z))
        *   Pour 7L to 10L: (x, y, z) -> (min(10, x + y), max(0, x + y - 10), z)
        *   Pour 7L to 4L: (x, y, z) -> (x, max(0, y + z - 4), min(4, y + z))
        *   Pour 4L to 10L: (x, y, z) -> (min(10, x + z), y, max(0, x + z - 10))
        *   Pour 4L to 7L: (x, y, z) -> (x, min(7, y + z), max(0, y + z - 7))
*   **Initial State:** Usually (0, 0, 0), representing all containers being empty.
*   **Goal State:** The desired configuration, for example, (5, y, z), representing 5 litres in the 10L container. 'y' and 'z' can be any valid amount.

### 3. Solving the Problem Using Breadth-First Search (BFS)

1.  **Initialize:**
    *   Create a queue to store the states to visit.
    *   Add the initial state to the queue.
    *   Create a set (or similar data structure) to keep track of visited states to avoid cycles.
2.  **Iterate:**
    *   While the queue is not empty:
        *   Dequeue a state from the queue (current state).
        *   If the current state is the goal state, we have found a solution. Reconstruct the path from the initial state to the current state (this can be done by storing the parent of each state during the BFS).
        *   If the current state has already been visited, skip it.
        *   Mark the current state as visited.
        *   Generate all possible next states by applying all possible transitions to the current state.
        *   For each next state that is valid (i.e., the amounts of water are within the container capacities):
            *   Enqueue the next state.
            *   Store the current state as the parent of the next state (for path reconstruction).
3.  **No Solution:** If the queue becomes empty and the goal state has not been found, then there is no solution.

**Example:**

Let's say we want to get (2, x, y) as the goal state.
1. Start at (0,0,0)
2. Fill 10L -> (10,0,0)
3. Pour 10L to 7L -> (3,7,0)
4. Pour 7L to 10L -> (10,0,0) -> already visited.
5. From (3,7,0)
   Fill 4L -> (3,7,4)
   Pour 7L to 4L -> (3,3,4)
6. So on... until we reach (2,x,y)

### 4. Implementation (Python Example)

```python
from collections import deque

def get_next_states(state):
    """Generates all possible next states from a given state."""
    x, y, z = state
    next_states = []

    # Fill
    next_states.append((10, y, z))  # Fill 10L
    next_states.append((x, 7, z))  # Fill 7L
    next_states.append((x, y, 4))  # Fill 4L

    # Empty
    next_states.append((0, y, z))  # Empty 10L
    next_states.append((x, 0, z))  # Empty 7L
    next_states.append((x, y, 0))  # Empty 4L

    # Pour
    next_states.append((max(0, x + y - 7), min(7, x + y), z))  # 10L -> 7L
    next_states.append((max(0, x + z - 4), y, min(4, x + z)))  # 10L -> 4L
    next_states.append((min(10, x + y), max(0, x + y - 10), z)) # 7L -> 10L
    next_states.append((x, max(0, y + z - 4), min(4, y + z)))  # 7L -> 4L
    next_states.append((min(10, x + z), y, max(0, x + z - 10))) # 4L -> 10L
    next_states.append((x, min(7, y + z), max(0, y + z - 7)))  # 4L -> 7L

    return next_states

def solve_container_problem(goal_amount):
    """Solves the container problem using BFS to find goal_amount in the 10L container."""
    initial_state = (0, 0, 0)
    queue = deque([(initial_state, [])])  # (state, path)
    visited = set()

    while queue:
        state, path = queue.popleft()
        x, y, z = state

        if x == goal_amount:
            print("Solution found:")
            for step in path:
                print(step)
            print(f"Final State: {state}")
            return

        if state in visited:
            continue

        visited.add(state)

        next_states = get_next_states(state)
        for next_state in next_states:
            if 0 <= next_state[0] <= 10 and 0 <= next_state[1] <= 7 and 0 <= next_state[2] <= 4:
                queue.append((next_state, path + [f"From {state} to {next_state}"]))

    print("No solution found.")

# Example Usage: Find 2 liters in the 10L container
solve_container_problem(2)
```

**Explanation:**

*   `get_next_states(state)`: This function takes a state as input and returns a list of all possible next states by applying all possible transitions.
*   `solve_container_problem(goal_amount)`: This function implements the BFS algorithm. It starts from the initial state (0, 0, 0), explores the state space, and searches for a goal state where the 10L container has the desired `goal_amount`.  It prints the steps taken to reach the goal state. The `path` variable stores the sequence of actions taken to reach a particular state.

### 5. Analysis of Efficiency and Limitations

*   **Efficiency:** BFS guarantees finding the shortest sequence of steps to reach the goal state (in terms of the number of transitions), assuming all transitions have equal cost.
*   **Space Complexity:**  The space complexity of BFS can be high, as it needs to store all visited states and the queue of states to explore. In the worst-case scenario, it might need to store the entire state space in memory.
*   **Time Complexity:** The time complexity of BFS is O(V + E), where V is the number of vertices (states) and E is the number of edges (transitions). In this problem, the number of states is limited (11 * 8 * 5 = 440), so the time complexity is manageable.
*   **Limitations:** The graph-based approach works well for this type of problem because the state space is discrete and relatively small. For problems with continuous state spaces or very large discrete state spaces, this approach might become impractical.

### 6. Important Points to Remember

*   The choice of initial state and goal state significantly affects the solution.
*   Ensure that all possible transitions are considered when generating the next states. Missing a transition can lead to the algorithm failing to find a solution, even if one exists.
*   The use of a `visited` set (or similar data structure) is crucial for preventing cycles and ensuring that the algorithm terminates.
*   BFS is suitable for finding the *shortest* path in terms of the number of transitions. If transitions have different costs, a different algorithm like Dijkstra's algorithm might be more appropriate.
*   Consider how to optimize the implementation for larger state spaces (e.g., using more efficient data structures or pruning the search space).

### 7. Practice Questions/Exercises

1.  **Question:** Modify the code to find a solution where the 7L container has 6 litres of water.
    *   **Answer:**  Change the `if` condition in `solve_container_problem` to `if y == goal_amount` and call the function with `solve_container_problem(6)` after renaming goal_amount to target and x to y.

2.  **Question:**  How would you modify the code to print *all* possible solutions to the container problem, instead of just the first one found?
    *   **Answer:** Remove the `return` statement from the `if x == goal_amount` block in the `solve_container_problem` function. This will cause the search to continue until the queue is empty, finding all possible solutions.

3.  **Question:** Suppose you have a fourth container of 3 litres.  How would you modify the `get_next_states` function to account for this additional container?
    *   **Answer:** You would need to:
        *   Modify the state representation to include the amount in the 3L container: (x, y, z, w), where w is the amount in the 3L container.
        *   Add the fill and empty operations for the 3L container:
            *   `next_states.append((x, y, z, 3))` # Fill 3L
            *   `next_states.append((x, y, z, 0))` # Empty 3L
        *   Add the pour operations between the 3L container and the other containers (similar to the existing pour operations). Be sure to consider all possible pour directions (e.g., 3L -> 10L, 3L -> 7L, 3L -> 4L, 10L -> 3L, 7L -> 3L, 4L -> 3L).
        *   Update the capacity checks to ensure `0 <= w <= 3`.
        *   Update the `solve_container_problem` function for the new state definition.

4.  **Question:** What is the maximum number of states possible in the given problem? What factors limit the number of reachable states?
    *   **Answer:**
        *   Maximum possible states: (10 + 1) * (7 + 1) * (4 + 1) = 11 * 8 * 5 = 440.
        *   Factors limiting the number of reachable states:
            *   The initial state. Not all states are reachable from a given initial state (e.g., you can't reach a state where the total amount of water exceeds 10 liters if you start with empty containers).
            *   The pouring rules. You can only transfer water between containers; you can't create or destroy water.  This conserves the total amount of water available.

These notes provide a comprehensive overview of how to model and solve the container problem using graph traversal.  The provided example, explanations, and practice questions will allow you to understand and apply these concepts effectively. Remember to focus on understanding the core principles of state space representation, transitions, and graph traversal algorithms.
