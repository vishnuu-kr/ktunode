---
title: "We are allowed one type of operation: pouring the contents of one container into another, stopping only when the source container is empty or the destination container is full."
subject: "DATA STRUCTURES LAB"
module: "Module 10: We have three containers whose sizes are 10 litres, 7 litres, and 4 litres, respectively."
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ae7a"
status: "completed"
scrapedAt: "2026-05-20T16:23:24.987Z"
---
# DATA STRUCTURES LAB - Module 10: Three Jugs Problem

## Topic: Pouring Water Between Three Jugs

**Description:** We have three containers (jugs) with fixed capacities: 10 litres, 7 litres, and 4 litres. We can perform only one operation: pouring the contents of one jug into another. Pouring stops when the source jug is empty *or* the destination jug is full. The goal is to explore and solve problems related to reaching specific water quantities in one or more of the jugs.

**Learning Outcomes:**

*   Understand the state-space representation of the three-jugs problem.
*   Model the problem as a graph.
*   Apply search algorithms (e.g., Breadth-First Search (BFS), Depth-First Search (DFS)) to find a solution sequence of pouring operations.
*   Identify the limitations and considerations of the problem and its solutions.
*   Implement and test a solution algorithm using a programming language.

## 1. Key Concepts and Definitions

*   **State:** A state represents the amount of water present in each of the three jugs at any given point in time.  It can be represented as a tuple: `(x, y, z)`, where `x` is the water in the 10-litre jug, `y` is the water in the 7-litre jug, and `z` is the water in the 4-litre jug.  Each value must be within the jug's capacity (e.g., `0 <= x <= 10`, `0 <= y <= 7`, `0 <= z <= 4`).
*   **Initial State:** The starting configuration of the jugs (e.g., `(10, 0, 0)`: 10 litres in the first jug, and the others empty).  This is crucial for starting the search.
*   **Goal State:** The desired configuration of the jugs. This can be a specific quantity in one jug (e.g., `(5, _, _)`: 5 litres in the 10-litre jug, where `_` means we don't care about the other jugs), or a specific distribution across jugs (e.g., `(5, 5, 0)`: 5 litres in the 10-litre and 7-litre jugs).  There can be multiple valid goal states.
*   **Operator/Action:** An action is pouring water from one jug to another.  There are six possible operators:
    1.  Pour 10-litre jug into 7-litre jug.
    2.  Pour 10-litre jug into 4-litre jug.
    3.  Pour 7-litre jug into 10-litre jug.
    4.  Pour 7-litre jug into 4-litre jug.
    5.  Pour 4-litre jug into 10-litre jug.
    6.  Pour 4-litre jug into 7-litre jug.
*   **State Space:** The set of all possible states reachable from the initial state through a sequence of operators. This is often conceptualized as a graph.
*   **State Space Graph:**  A graph where:
    *   Nodes represent states.
    *   Edges represent valid operations (pouring). An edge connects two states if one state can be reached from the other by performing a single pouring operation.
*   **Path:** A sequence of operators (and corresponding states) leading from the initial state to the goal state.
*   **Solution:** A path in the state space graph that starts at the initial state and ends at a goal state.
*   **Valid Move:** A pouring operation that adheres to the rules (pouring until the source is empty or the destination is full) and results in a valid state.  An invalid move could lead to a negative quantity of water or exceeding a jug's capacity.

## 2. Modeling the Problem as a Graph

The three-jugs problem can be effectively modeled as a graph. This helps visualize the solution space and apply graph search algorithms.

*   **Nodes:** Each possible state (e.g., (10, 0, 0), (6, 4, 0), (6, 0, 4), etc.) becomes a node in the graph.
*   **Edges:**  An edge connects two nodes (states) if a single valid pouring operation can transform one state into the other. The edges are directed, representing the direction of the pouring operation.

**Example:**

If the current state is `(10, 0, 0)`, possible next states are:

*   `(3, 7, 0)` (Pouring from 10-litre to 7-litre jug)
*   `(6, 0, 4)` (Pouring from 10-litre to 4-litre jug)

Therefore, there would be directed edges from node `(10, 0, 0)` to node `(3, 7, 0)` and node `(6, 0, 4)`.

## 3. Applying Search Algorithms

Once the problem is represented as a graph, search algorithms can be used to find a path from the initial state to a goal state. Two common search algorithms are:

*   **Breadth-First Search (BFS):** Explores the graph layer by layer. It guarantees finding the shortest path (in terms of the number of pouring operations) if a solution exists.

    *   **Algorithm:**
        1.  Start at the initial state (root node).
        2.  Enqueue the initial state into a queue.
        3.  While the queue is not empty:
            *   Dequeue a state from the queue.
            *   If the state is a goal state, return the path to that state.
            *   Generate all possible next states by applying the pouring operations.
            *   For each next state:
                *   If the state has not been visited before, enqueue it into the queue and mark it as visited.
        4.  If the queue becomes empty and no goal state is found, there is no solution.

    *   **Advantages:** Guarantees finding the shortest path.
    *   **Disadvantages:** Can require significant memory as it explores the entire graph layer by layer.

*   **Depth-First Search (DFS):** Explores the graph by going as deep as possible along each branch before backtracking.

    *   **Algorithm:**
        1.  Start at the initial state (root node).
        2.  Mark the current state as visited.
        3.  If the state is a goal state, return the path to that state.
        4.  For each possible next state by applying the pouring operations:
            *   If the next state has not been visited before:
                *   Recursively call DFS on the next state.
                *   If the recursive call finds a solution, return the path.
        5.  If no solution is found along any branch, return failure (backtrack).

    *   **Advantages:** Requires less memory than BFS.
    *   **Disadvantages:** May not find the shortest path. Can get stuck in infinite loops if the graph has cycles and no cycle detection is implemented (visiting previously visited states).

**Pseudocode for applying pouring operations:**

```python
def pour(state, source_jug, dest_jug, capacity_source, capacity_dest):
  """
  Simulates pouring water from source_jug to dest_jug.

  Args:
    state: A tuple representing the current state (x, y, z).
    source_jug: Index of the source jug (0 for 10L, 1 for 7L, 2 for 4L).
    dest_jug: Index of the destination jug.
    capacity_source: Capacity of the source jug
    capacity_dest: Capacity of the destination jug

  Returns:
    A new state tuple after the pour, or None if the pour is invalid.
  """
  x, y, z = state
  jugs = [x,y,z]

  amount_to_pour = min(jugs[source_jug], capacity_dest - jugs[dest_jug])

  if amount_to_pour > 0: #Ensure that the pour operation is valid
    new_jugs = list(state)
    new_jugs[source_jug] -= amount_to_pour
    new_jugs[dest_jug] += amount_to_pour
    return tuple(new_jugs)
  else:
    return None
```

**Example using BFS (Conceptual):**

Let's say we want to find a state where the 7-litre jug has 2 litres of water.  Initial State: (10, 0, 0).  Goal State: (\_, 2, \_).

1.  **Start:**  Queue = [(10, 0, 0)]
2.  **(10, 0, 0):**  Dequeue.  Possible next states: (3, 7, 0), (6, 0, 4).
    Queue = [(3, 7, 0), (6, 0, 4)]
3.  **(3, 7, 0):** Dequeue.  Possible next states: (10, 0, 0), (3, 3, 4), (10, 7, 0). Since (10,0,0) is already explored only add the rest.
    Queue = [(6, 0, 4), (3, 3, 4), (10, 7, 0)]
4.  **(6, 0, 4):** Dequeue.  Possible next states: (10, 0, 0), (6, 4, 0), (2, 4, 4), (6,7,4). Since (10,0,0) is already explored only add the rest.
    Queue = [(3, 3, 4), (10, 7, 0), (6, 4, 0), (2, 4, 4), (6,7,4)]
5. and so on...

This process continues until a state like (8, 2, 0) is found (or we determine there's no solution).

## 4. Limitations and Considerations

*   **Solvability:** Not all goal states are reachable from a given initial state. The capacities of the jugs influence which states are reachable.  For example, if you had jugs of 10L and 6L, you would not be able to measure exactly 1L.
*   **Efficiency:** The size of the state space can grow exponentially with the number of jugs and their capacities.  This can make searching for a solution computationally expensive.
*   **Cycle Detection:**  Without cycle detection, DFS can get trapped in infinite loops. BFS avoids this naturally because it explores all nodes at a given depth before moving to the next.
*   **Representation:** The choice of data structures to represent the states and the graph can significantly impact the performance of the search algorithms.  Using a set to store visited states is much faster than searching a list.

## 5. Implementation and Testing

A Python implementation of the three-jugs problem solver would involve:

1.  **Representing the state:** Using tuples (x, y, z).
2.  **Implementing the pouring operation:** A function that takes a state and the source/destination jugs as input and returns the new state after the pour (or None if invalid).  See the example pseudocode above.
3.  **Implementing the BFS or DFS algorithm:**  Functions that traverse the state space graph and find a path to the goal state.
4.  **Implementing a function to get the next possible states from the current state** : This will determine the actions to be taken and return the new states after these actions are performed

5.  **Testing:** Writing test cases with different initial states, goal states, and jug capacities to verify the correctness of the implementation.  This includes edge cases (e.g., empty jugs, full jugs, unsolvable scenarios).

**Example Python Implementation (BFS):**

```python
from collections import deque

def three_jugs_bfs(initial_state, goal_state, jug_capacities):
    """
    Solves the three jugs problem using Breadth-First Search.

    Args:
      initial_state: Tuple representing the starting state (x, y, z).
      goal_state: Tuple representing the desired state. A value of None
                   means that the amount of water in that container is irrelevant.
      jug_capacities: Tuple containing the capacities of the jugs (x, y, z).

    Returns:
      A list of states representing the solution path, or None if no solution is found.
    """
    x_capacity, y_capacity, z_capacity = jug_capacities
    visited = set()
    queue = deque([(initial_state, [])])  # Store state and path

    while queue:
        (current_state, path) = queue.popleft()
        x, y, z = current_state

        # Check if goal is reached (Handle Nones in goal_state)
        goal_met = True
        goal_x, goal_y, goal_z = goal_state
        if goal_x is not None and x != goal_x:
            goal_met = False
        if goal_y is not None and y != goal_y:
            goal_met = False
        if goal_z is not None and z != goal_z:
            goal_met = False

        if goal_met:
            return path + [current_state]  # Add current state to the path

        if current_state in visited:
            continue
        visited.add(current_state)

        # Generate next states
        next_states = []
        # Pour x to y
        new_state = pour(current_state, 0, 1, x_capacity, y_capacity)
        if new_state:
            next_states.append(new_state)
        # Pour x to z
        new_state = pour(current_state, 0, 2, x_capacity, z_capacity)
        if new_state:
            next_states.append(new_state)
        # Pour y to x
        new_state = pour(current_state, 1, 0, y_capacity, x_capacity)
        if new_state:
            next_states.append(new_state)
        # Pour y to z
        new_state = pour(current_state, 1, 2, y_capacity, z_capacity)
        if new_state:
            next_states.append(new_state)
        # Pour z to x
        new_state = pour(current_state, 2, 0, z_capacity, x_capacity)
        if new_state:
            next_states.append(new_state)
        # Pour z to y
        new_state = pour(current_state, 2, 1, z_capacity, y_capacity)
        if new_state:
            next_states.append(new_state)


        for next_state in next_states:
            queue.append((next_state, path + [current_state]))

    return None  # No solution found

# Example Usage:
initial_state = (10, 0, 0)
goal_state = (5, None, None)  # Goal: 5 liters in the 10-liter jug
jug_capacities = (10, 7, 4)

solution = three_jugs_bfs(initial_state, goal_state, jug_capacities)

if solution:
    print("Solution found:")
    for state in solution:
        print(state)
else:
    print("No solution found.")

```

## 6. Practice Questions/Exercises

1.  **Question:** Given the initial state (10, 0, 0) and the goal to have 2 litres in the 7-litre jug, trace the execution of the BFS algorithm for the first 3 steps (as demonstrated in section 3).
    *   **Answer:**
        1.  Start: Queue = [(10, 0, 0)]
        2.  (10, 0, 0): Dequeue. Possible next states: (3, 7, 0), (6, 0, 4). Queue = [(3, 7, 0), (6, 0, 4)]
        3.  (3, 7, 0): Dequeue. Possible next states: (10, 0, 0), (3, 3, 4), (10, 7, 0). Since (10,0,0) is already explored only add the rest. Queue = [(6, 0, 4), (3, 3, 4), (10, 7, 0)]

2.  **Question:** Why is cycle detection important for DFS in the three-jugs problem?
    *   **Answer:** Without cycle detection, DFS can repeatedly revisit the same states, leading to an infinite loop and preventing it from finding a solution. The pouring operations often create cycles in the state space graph.

3.  **Question:** Modify the provided Python code to implement DFS instead of BFS.
    *   **Answer:**

```python
def three_jugs_dfs(initial_state, goal_state, jug_capacities, visited=None, path=None):
    """
    Solves the three jugs problem using Depth-First Search.

    Args:
        initial_state: Tuple representing the starting state (x, y, z).
        goal_state: Tuple representing the desired state. A value of None
                       means that the amount of water in that container is irrelevant.
        jug_capacities: Tuple containing the capacities of the jugs (x, y, z).
        visited: A set to store visited states (for cycle detection).
        path: The path taken to reach the current state.

    Returns:
        A list of states representing the solution path, or None if no solution is found.
    """

    x_capacity, y_capacity, z_capacity = jug_capacities

    if visited is None:
        visited = set()
    if path is None:
        path = []

    # Check if goal is reached (Handle Nones in goal_state)
    x, y, z = initial_state
    goal_met = True
    goal_x, goal_y, goal_z = goal_state
    if goal_x is not None and x != goal_x:
        goal_met = False
    if goal_y is not None and y != goal_y:
        goal_met = False
    if goal_z is not None and z != goal_z:
        goal_met = False

    if goal_met:
        return path + [initial_state]

    if initial_state in visited:
        return None  # Avoid cycles

    visited.add(initial_state)

    # Generate next states
    next_states = []
    # Pour x to y
    new_state = pour(initial_state, 0, 1, x_capacity, y_capacity)
    if new_state:
        next_states.append(new_state)
    # Pour x to z
    new_state = pour(initial_state, 0, 2, x_capacity, z_capacity)
    if new_state:
        next_states.append(new_state)
    # Pour y to x
    new_state = pour(initial_state, 1, 0, y_capacity, x_capacity)
    if new_state:
        next_states.append(new_state)
    # Pour y to z
    new_state = pour(initial_state, 1, 2, y_capacity, z_capacity)
    if new_state:
        next_states.append(new_state)
    # Pour z to x
    new_state = pour(initial_state, 2, 0, z_capacity, x_capacity)
    if new_state:
        next_states.append(new_state)
    # Pour z to y
    new_state = pour(initial_state, 2, 1, z_capacity, y_capacity)
    if new_state:
        next_states.append(new_state)


    for next_state in next_states:
        result = three_jugs_dfs(next_state, goal_state, jug_capacities, visited, path + [initial_state])
        if result:
            return result

    return None  # No solution found in this branch
```

4.  **Question:** Explain how the `pour` function works and why it's important for simulating the water pouring operation.
    *   **Answer:** The `pour` function simulates pouring water from a source jug to a destination jug.  It calculates the amount of water to pour, which is the *minimum* of the water available in the source and the remaining space in the destination. It then updates the water levels in both jugs accordingly. It's crucial because it encapsulates the rules of the pouring operation, ensuring that we never pour more water than available or exceed the jug's capacity.  It ensures the validity of each state transition.

5. **Question:** How does the initial state and the goal state affects the type of solution found?
    *   **Answer:** The initial and goal states play a pivotal role in determining the solvability and the specific solution found. If the goal state cannot be reached through any sequence of pouring actions from the initial state, the problem is unsolvable. The choice of algorithm (BFS vs. DFS) and even small changes to either state can significantly alter the path and potentially the length of the solution.
## 7. Important Points to Remember

*   The three-jugs problem is a classic example of a state-space search problem.
*   Representing the problem as a graph is crucial for applying search algorithms.
*   BFS guarantees finding the shortest path but can be memory-intensive.
*   DFS is less memory-intensive but might not find the shortest path and requires cycle detection.
*   Not all goal states are reachable. The solvability depends on the capacities of the jugs and the initial state.
*   Careful implementation of the `pour` function and state management are essential for accurate results.
*   Understanding the limitations of the problem and the chosen algorithm is important for interpreting the results.
