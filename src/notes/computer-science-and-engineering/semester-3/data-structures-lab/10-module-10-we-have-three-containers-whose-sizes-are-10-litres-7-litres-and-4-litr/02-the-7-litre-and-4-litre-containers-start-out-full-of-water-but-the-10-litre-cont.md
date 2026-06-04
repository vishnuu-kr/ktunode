---
title: "The 7-litre and 4-litre containers start out full of water, but the 10-litre container is initially empty."
subject: "DATA STRUCTURES LAB"
module: "Module 10: We have three containers whose sizes are 10 litres, 7 litres, and 4 litres, respectively."
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ae79"
status: "completed"
scrapedAt: "2026-05-20T16:23:24.237Z"
---
## DATA STRUCTURES LAB - Module 10: Water Jug Problem

**Topic:** The 7-litre and 4-litre containers start out full of water, but the 10-litre container is initially empty.

**Description:** We have three containers whose sizes are 10 litres, 7 litres, and 4 litres, respectively.  The 7-litre and 4-litre containers start out full of water, but the 10-litre container is initially empty.  This classic problem aims to find a sequence of pouring actions between the jugs to achieve a specific volume of water in one or more jugs.  While often solved without complex data structures, understanding its solution space and efficient search strategies is crucial for applying similar concepts to other more complex problems involving state-space exploration.

**Learning Outcomes:**

*   Understand the Water Jug Problem as a state-space search problem.
*   Represent the problem state using appropriate data structures (e.g., tuples, lists).
*   Identify valid actions (pouring rules) based on container capacities and current volumes.
*   Implement a search algorithm (e.g., Breadth-First Search (BFS), Depth-First Search (DFS)) to find a solution.
*   Analyze the solution space and potential optimizations.
*   Appreciate the limitations and scalability of different search strategies.

---

### 1. Key Concepts and Definitions

*   **State:** A specific configuration of water in the three jugs.  Represented as a tuple (x, y, z), where:
    *   x = amount of water in the 10-litre jug
    *   y = amount of water in the 7-litre jug
    *   z = amount of water in the 4-litre jug
*   **Initial State:** The starting state of the problem. In this case, (0, 7, 4).
*   **Goal State:** The desired state of the problem. This will depend on the problem instance. Example:  (2, 7, 2)  or (5, x, y) where 'x' and 'y' can be any value and our target is 5 liters in the 10-liter jug.
*   **Action:** A pouring operation from one jug to another.  Examples:
    *   Pour from the 7-litre jug into the 10-litre jug.
    *   Pour from the 10-litre jug into the 4-litre jug.
*   **Valid Action:** An action that adheres to the jug capacities.  A pouring action is valid only if:
    *   The source jug has water to pour.
    *   The destination jug has space to receive water.
*   **State Space:** The set of all possible states reachable from the initial state by applying valid actions.
*   **Search Algorithm:** An algorithm used to explore the state space and find a path from the initial state to a goal state.  BFS and DFS are common choices.
*   **Breadth-First Search (BFS):** Explores the state space level by level.  Guarantees finding the shortest path (in terms of the number of pouring actions) to the goal state if a solution exists.  Uses a queue.
*   **Depth-First Search (DFS):** Explores the state space by going deep down each branch before backtracking.  Does not guarantee finding the shortest path, but can be more memory-efficient in some cases.  Uses a stack (implicitly through recursion or explicitly).

### 2. Problem Representation

*   **Tuple Representation:**  Representing the state as a tuple (x, y, z) is efficient and concise.
    *   Example: `state = (0, 7, 4)`
*   **Data Structure for Exploration:** Use a queue for BFS and a stack (or recursion) for DFS.
    *   Python's `collections.deque` is a good choice for a queue in BFS.
    *   DFS can be implemented recursively or using an explicit stack.
*   **Visited Set:** Maintain a set of visited states to avoid cycles and redundant exploration.  This significantly improves performance.

### 3. Valid Actions (Pouring Rules)

The core of the problem lies in defining the possible actions.  For each pair of jugs (source, destination), we need to determine how much water can be transferred.

Let `source_jug` be the current volume of water in the source jug, `dest_jug` be the current volume of water in the destination jug, and `dest_capacity` be the capacity of the destination jug.

The amount of water to transfer is the minimum of:

1.  The amount of water in the source jug (`source_jug`).
2.  The remaining space in the destination jug (`dest_capacity - dest_jug`).

Here's a list of all possible actions:

1.  **Pour 10-litre jug into 7-litre jug:** (x, y, z) -> (x - amount, y + amount, z)
2.  **Pour 10-litre jug into 4-litre jug:** (x, y, z) -> (x - amount, y, z + amount)
3.  **Pour 7-litre jug into 10-litre jug:** (x, y, z) -> (x + amount, y - amount, z)
4.  **Pour 7-litre jug into 4-litre jug:** (x, y, z) -> (x, y - amount, z + amount)
5.  **Pour 4-litre jug into 10-litre jug:** (x, y, z) -> (x + amount, y, z - amount)
6.  **Pour 4-litre jug into 7-litre jug:** (x, y, z) -> (x, y + amount, z - amount)

Where `amount = min(source_jug, dest_capacity - dest_jug)`

### 4. Implementing a Search Algorithm (BFS Example)

```python
from collections import deque

def water_jug_bfs(capacity_10, capacity_7, capacity_4, initial_state, goal_state):
    """
    Solves the Water Jug Problem using Breadth-First Search.

    Args:
        capacity_10: Capacity of the 10-litre jug.
        capacity_7: Capacity of the 7-litre jug.
        capacity_4: Capacity of the 4-litre jug.
        initial_state: Initial state of the jugs (tuple: (10L, 7L, 4L)).
        goal_state: Goal state of the jugs (tuple: (10L, 7L, 4L)).

    Returns:
        A list of states representing the solution path, or None if no solution is found.
    """

    queue = deque([(initial_state, [])])  # Queue of (state, path)
    visited = {initial_state}

    while queue:
        (x, y, z), path = queue.popleft()

        if (x,y,z) == goal_state:
            return path + [(x,y,z)]  # Return the path including the goal state

        # Define valid actions (pouring rules)
        actions = [
            ("10L to 7L", min(x, capacity_7 - y)),
            ("10L to 4L", min(x, capacity_4 - z)),
            ("7L to 10L", min(y, capacity_10 - x)),
            ("7L to 4L", min(y, capacity_4 - z)),
            ("4L to 10L", min(z, capacity_10 - x)),
            ("4L to 7L", min(z, capacity_7 - y)),
        ]

        for action, amount in actions:
            action_description, _ = action.split(" to ")

            new_x, new_y, new_z = x, y, z

            # Apply the action based on the descriptions
            if action == "10L to 7L":
                new_x -= amount
                new_y += amount
            elif action == "10L to 4L":
                new_x -= amount
                new_z += amount
            elif action == "7L to 10L":
                new_x += amount
                new_y -= amount
            elif action == "7L to 4L":
                new_y -= amount
                new_z += amount
            elif action == "4L to 10L":
                new_x += amount
                new_z -= amount
            elif action == "4L to 7L":
                new_y += amount
                new_z -= amount

            new_state = (new_x, new_y, new_z)

            if new_state not in visited:
                visited.add(new_state)
                queue.append((new_state, path + [(x, y, z)]))

    return None  # No solution found


# Example usage:
capacity_10 = 10
capacity_7 = 7
capacity_4 = 4
initial_state = (0, 7, 4)
goal_state = (2, 5, 4) # Example goal: 2 litres in the 10L jug, 5 in the 7L, 4 in the 4L.

solution = water_jug_bfs(capacity_10, capacity_7, capacity_4, initial_state, goal_state)

if solution:
    print("Solution found:")
    for i, state in enumerate(solution):
        print(f"Step {i+1}: {state}")
else:
    print("No solution found.")


initial_state = (0, 7, 4)
goal_state = (0, 0, 11) #Intentionally impossible goal state

solution = water_jug_bfs(capacity_10, capacity_7, capacity_4, initial_state, goal_state)

if solution:
    print("Solution found:")
    for i, state in enumerate(solution):
        print(f"Step {i+1}: {state}")
else:
    print("No solution found - As intended.")
```

**Explanation of the Code:**

1.  **`water_jug_bfs(capacity_10, capacity_7, capacity_4, initial_state, goal_state)`:**
    *   Takes the capacities of the jugs, the initial state, and the goal state as input.
    *   Returns a list of states representing the solution path, or `None` if no solution is found.

2.  **`queue = deque([(initial_state, [])])`:**
    *   Initializes a queue with the initial state and an empty path (list).  The queue stores tuples of (state, path).  The path represents the sequence of states visited to reach the current state.

3.  **`visited = {initial_state}`:**
    *   Initializes a set to keep track of visited states, starting with the initial state.

4.  **`while queue:`:**
    *   The main loop of the BFS algorithm.  It continues as long as there are states to explore in the queue.

5.  **`(x, y, z), path = queue.popleft()`:**
    *   Removes the next state and its corresponding path from the front of the queue.

6.  **`if (x, y, z) == goal_state:`:**
    *   Checks if the current state is the goal state.  If it is, the solution path is returned.

7.  **`actions = [...]`:**
    *   Defines a list of all possible actions (pouring operations). Each action is represented as a tuple of (action_description, amount)

8. **Action Implementation**:
    * For each action, the code checks if the new state has already been visited. If not, the new state and its path are added to the queue, and the new state is added to the visited set.

9.  **`return None`:**
    *   If the queue becomes empty and the goal state has not been found, it means there is no solution.

### 5. Analyzing the Solution Space and Optimizations

*   **Solution Existence:** Not all goal states are reachable. The greatest common divisor (GCD) of the jug capacities determines the possible amounts of water that can be measured. For example, you can only achieve amounts that are multiples of GCD(10,7,4) = 1.
*   **BFS vs. DFS:**  BFS guarantees the shortest path.  DFS might find a solution faster, but it's not guaranteed to be optimal.
*   **Memory Usage:** BFS can consume significant memory, especially for large state spaces, as it explores all states at each level.  DFS generally uses less memory.
*   **Heuristics:**  For larger problems, heuristics can be used to guide the search and improve performance.  Heuristics are estimates of the distance to the goal state.

### 6. Important Points to Remember

*   The Water Jug Problem is a classic example of a state-space search problem.
*   Choose appropriate data structures to represent the state and for the search algorithm (queue for BFS, stack/recursion for DFS).
*   Carefully define the valid actions (pouring rules).
*   Use a visited set to avoid cycles and redundant exploration.
*   Consider the trade-offs between BFS and DFS in terms of optimality and memory usage.
*   Understanding the GCD and its impact on solution existence.

### 7. Practice Questions/Exercises

1.  **Different Goal State:**  Find a solution to reach the state (5, 2, 4).
    * **Answer:** This *might* be solvable. Try the BFS code with this goal state. Consider that you want 5 liters in the 10-liter jug.

2.  **DFS Implementation:** Implement the Water Jug Problem using Depth-First Search.  Compare its performance (number of steps, execution time) to BFS for the same goal state.

    * **Answer (Outline):**  Adapt the BFS code. Replace the `deque` with a recursive function.  The core logic for applying actions and checking for the goal state remains the same. Remember to keep track of the visited states to avoid infinite recursion. Note that you may not get the shortest possible path with DFS.

3.  **Impossible Goal State:**  Explain why the goal state (1, 1, 1) may or may not be achievable.  What conditions must be met to have an achievable goal state?

    * **Answer:** The greatest common divisor of the jug sizes is GCD(10, 7, 4) = 1. Because the GCD is 1, we can, in theory, achieve any integer value between 0 and the total amount of water (11 litres). However, we can't have (1,1,1) *directly* since the jugs start with 7 and 4 liters.  You can test your code and see if the search terminates without a result. To achieve a specific state, the *sum* of the water in the jugs must equal 11, but that alone doesn't guarantee it is reachable via pouring.

4. **Optimization:** How can you optimize the BFS algorithm to avoid revisiting already explored state combinations?

    * **Answer:** By maintaining a `visited` set (as shown in the code), we can efficiently check if a state has already been explored. Before adding a new state to the queue, we check if it is present in the `visited` set. If it is, we skip that state and move on to the next one. This prevents redundant exploration of the state space and significantly improves the algorithm's performance.

By working through these examples and exercises, you'll gain a deeper understanding of the Water Jug Problem and its application of data structures and search algorithms. Remember to experiment with different goal states and search strategies to explore the problem's intricacies.
