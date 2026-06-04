---
title: "We want to know if there is a sequence of pourings that leaves exactly 2 litres in the 7 or 4-litre container."
subject: "DATA STRUCTURES LAB"
module: "Module 10: We have three containers whose sizes are 10 litres, 7 litres, and 4 litres, respectively."
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ae7b"
status: "completed"
scrapedAt: "2026-05-20T16:23:25.709Z"
---
# DATA STRUCTURES LAB - Module 10: Water Jug Problem

**Topic:** Finding a sequence of pourings that leaves exactly 2 litres in the 7 or 4-litre container, given containers of 10, 7, and 4-litre capacities.

**Learning Outcomes:**

*   Understand the Water Jug Problem and its applications.
*   Model the Water Jug Problem as a graph search problem.
*   Implement a solution using Breadth-First Search (BFS).
*   Represent states in the search space efficiently.
*   Identify and avoid redundant states.
*   Trace the sequence of actions leading to the goal state.
*   Analyze the complexity of the solution.

## 1. Introduction to the Water Jug Problem

*   **Definition:** The Water Jug Problem is a classic problem in computer science and artificial intelligence that involves finding a sequence of pourings between containers of fixed capacities to reach a specific goal state.
*   **Scenario:** You are given *n* jugs with different capacities and no measuring marks. You need to find a series of pourings that will result in a specific amount of water in one or more of the jugs.
*   **Relevance:** This problem demonstrates concepts like state-space search, problem representation, and algorithm design. It is a simplified model of many real-world problems.

## 2. Problem Formulation: The 10, 7, and 4-Litre Jugs

*   **Containers:**
    *   Jug A: 10 Litres Capacity
    *   Jug B: 7 Litres Capacity
    *   Jug C: 4 Litres Capacity
*   **Initial State:** All jugs are initially empty. We can represent this as (0, 0, 0), where the values represent the amount of water in jugs A, B, and C, respectively.
*   **Goal State:**  Any state where Jug B (7-litre jug) or Jug C (4-litre jug) contains exactly 2 litres.  Examples: (x, 2, y), (x, y, 2), where x and y can be any valid amount within the jugs' capacity.
*   **Operations (Pouring Rules):**
    *   **Fill Jug:** Fill a jug completely from a source (usually assumed to be unlimited water).
    *   **Empty Jug:** Empty a jug completely.
    *   **Pour Jug X into Jug Y:** Pour water from jug X to jug Y until either jug X is empty or jug Y is full.
*   **Objective:** Find a sequence of pouring operations that transforms the initial state (0, 0, 0) into a goal state, such as (x, 2, y) or (x, y, 2).

## 3. Modeling as a Graph Search Problem

*   **State Space:**  The set of all possible states (combination of water levels in the jugs). Each state is represented as a tuple (a, b, c), where:
    *   0 <= a <= 10 (water in Jug A)
    *   0 <= b <= 7 (water in Jug B)
    *   0 <= c <= 4 (water in Jug C)
*   **Nodes:** Each state in the state space is represented as a node in a graph.
*   **Edges:**  Each pouring operation represents a directed edge between two states. For example:
    *   Pouring from Jug A to Jug B creates an edge from state (a, b, c) to a new state (a', b', c') where a', b', and c' reflect the amounts of water in each jug after the pouring.
*   **Goal Test:** A function that checks if a state is a goal state (e.g., Jug B has 2 litres).
*   **Search Algorithm:** Breadth-First Search (BFS) is commonly used because it guarantees finding the shortest sequence of moves to the goal state if one exists.  Other search algorithms like Depth-First Search (DFS) could be used, but they don't guarantee the shortest solution.

## 4. Breadth-First Search (BFS) Implementation

*   **Data Structures:**
    *   **Queue:** Used to store the states to be explored (FIFO - First-In, First-Out).
    *   **Set (or Dictionary):** Used to keep track of visited states to avoid cycles and redundant exploration.
    *   **State Representation:** Tuples (a, b, c) are a good choice for representing states due to their immutability.
*   **Algorithm:**
    1.  **Initialization:**
        *   Enqueue the initial state (0, 0, 0) into the queue.
        *   Add the initial state to the visited set.
    2.  **Loop:** While the queue is not empty:
        *   Dequeue a state (a, b, c) from the queue.
        *   **Goal Test:** Check if (a, b, c) is a goal state. If it is, reconstruct the path and return the solution.
        *   **Generate Successors:** Generate all possible successor states by applying the pouring rules.  For each possible pouring operation (fill A, empty B, pour A to C, etc.):
            *   Calculate the resulting state (a', b', c') after the pouring.
            *   **Check if visited:** If (a', b', c') is not in the visited set:
                *   Enqueue (a', b', c') into the queue.
                *   Add (a', b', c') to the visited set.
                *   Store the "parent" state (a, b, c) and the action taken to reach (a', b', c'). This will be used later to reconstruct the path.
    3.  **No Solution:** If the queue becomes empty and no goal state is found, then no solution exists.

## 5. Pouring Operations and State Transitions

Here's a breakdown of how to generate successor states from a current state (a, b, c):

*   **Fill Jug A:** (10, b, c) - Fill A completely if a < 10.
*   **Fill Jug B:** (a, 7, c) - Fill B completely if b < 7.
*   **Fill Jug C:** (a, b, 4) - Fill C completely if c < 4.
*   **Empty Jug A:** (0, b, c) - Empty A.
*   **Empty Jug B:** (a, 0, c) - Empty B.
*   **Empty Jug C:** (a, b, 0) - Empty C.
*   **Pour A to B:**
    *   If a + b <= 7: (0, a + b, c)  (A completely empties into B)
    *   If a + b > 7: (a + b - 7, 7, c) (B becomes full, A has remaining amount)
*   **Pour A to C:**
    *   If a + c <= 4: (0, b, a + c) (A completely empties into C)
    *   If a + c > 4: (a + c - 4, b, 4) (C becomes full, A has remaining amount)
*   **Pour B to A:**
    *   If a + b <= 10: (a + b, 0, c) (B completely empties into A)
    *   If a + b > 10: (10, a + b - 10, c) (A becomes full, B has remaining amount)
*   **Pour B to C:**
    *   If b + c <= 4: (a, 0, b + c) (B completely empties into C)
    *   If b + c > 4: (a, b + c - 4, 4) (C becomes full, B has remaining amount)
*   **Pour C to A:**
    *   If a + c <= 10: (a + c, b, 0) (C completely empties into A)
    *   If a + c > 10: (10, b, a + c - 10) (A becomes full, C has remaining amount)
*   **Pour C to B:**
    *   If b + c <= 7: (a, b + c, 0) (C completely empties into B)
    *   If b + c > 7: (a, 7, b + c - 7) (B becomes full, C has remaining amount)

**Important:** Always check that the resulting water levels are within the jug capacities.

## 6. Reconstructing the Path

Once a goal state is found, you need to reconstruct the sequence of actions (pourings) that led to it. This can be done by:

1.  Storing the "parent" state along with each newly enqueued state during the BFS. The parent state is the state from which the current state was reached.
2.  Starting from the goal state, trace back to the initial state using the stored parent information. The path from the initial state to the goal state represents the solution.

## 7. Example Walkthrough

Let's trace a possible sequence of states using BFS, aiming to get 2 litres in the 4-litre jug:

1.  **(0, 0, 0) - Initial State**
2.  **Fill A:** (10, 0, 0)
3.  **Pour A to B:** (3, 7, 0)
4.  **Empty B:** (3, 0, 0)
5.  **Pour A to B:** (0, 3, 0)
6.  **Fill A:** (10, 3, 0)
7.  **Pour A to C:** (6, 3, 4)
8.  **Empty C:** (6, 3, 0)
9.  **Pour A to C:** (2, 3, 4)
10. **Empty C:** (2, 3, 0)
11. **Pour A to C:** (0, 3, 2)  **GOAL STATE!  2 litres in Jug C.**

The path would then be reconstructed as:

Initial State -> Fill A -> Pour A to B -> Empty B -> Pour A to B -> Fill A -> Pour A to C -> Empty C -> Pour A to C -> Empty C -> Pour A to C -> Goal State.

## 8. Avoiding Redundant States

*   **Importance:** Redundant state exploration can significantly increase the execution time of the algorithm.
*   **Visited Set:** The primary mechanism to avoid redundant exploration is the `visited` set (or dictionary).  Before adding a new state to the queue, always check if it's already in the `visited` set. If it is, skip it.

## 9. Complexity Analysis

*   **Time Complexity:** In the worst-case scenario, BFS might explore all possible states. The number of possible states is limited by the capacities of the jugs: 11 (for Jug A) * 8 (for Jug B) * 5 (for Jug C) = 440. Therefore, the time complexity is approximately O(N), where N is the number of possible states. In practice, the algorithm often finds a solution much faster.
*   **Space Complexity:**  The space complexity is also O(N) because the queue and the visited set can potentially store all possible states.

## 10. Important Points to Remember

*   **State Representation:**  Choose a suitable and efficient data structure to represent states. Tuples are a good choice for immutability.
*   **Visited Set:**  Crucial for preventing infinite loops and redundant exploration.
*   **Pouring Rules:**  Carefully define all possible pouring operations and their resulting state transitions.
*   **Goal Test:**  Clearly define the conditions for a goal state.
*   **BFS vs. DFS:**  BFS guarantees finding the shortest path (minimum number of pourings) if a solution exists. DFS does not.
*   **Optimization:** Consider heuristics to guide the search and further reduce the search space.

## 11. Practice Questions/Exercises

1.  **Code Implementation:** Implement the BFS algorithm to solve the 10, 7, and 4-litre Water Jug Problem in your preferred programming language.

    *Example Python Code:*

    ```python
    from collections import deque

    def water_jug_bfs(capacity_a, capacity_b, capacity_c, target, target_jug):
        """
        Solves the water jug problem using Breadth-First Search.

        Args:
            capacity_a: Capacity of jug A (e.g., 10).
            capacity_b: Capacity of jug B (e.g., 7).
            capacity_c: Capacity of jug C (e.g., 4).
            target: The target amount of water to have.
            target_jug: The jug that should contain the target amount ('a', 'b', or 'c').

        Returns:
            A list of state transitions (tuples of (a, b, c)) leading to the goal state,
            or None if no solution is found.
        """

        initial_state = (0, 0, 0)
        queue = deque([(initial_state, [])])  # (state, path)
        visited = set()
        visited.add(initial_state)

        while queue:
            state, path = queue.popleft()
            a, b, c = state

            # Goal Test
            if (target_jug == 'a' and a == target) or \
               (target_jug == 'b' and b == target) or \
               (target_jug == 'c' and c == target):
                return path + [state]

            # Generate Successor States
            possible_moves = [
                ("Fill A", (capacity_a, b, c)),
                ("Fill B", (a, capacity_b, c)),
                ("Fill C", (a, b, capacity_c)),
                ("Empty A", (0, b, c)),
                ("Empty B", (a, 0, c)),
                ("Empty C", (a, b, 0)),
                ("Pour A to B", (max(0, a + b - capacity_b), min(capacity_b, a + b), c)),
                ("Pour A to C", (max(0, a + c - capacity_c), b, min(capacity_c, a + c))),
                ("Pour B to A", (min(capacity_a, a + b), max(0, a + b - capacity_a), c)),
                ("Pour B to C", (a, max(0, b + c - capacity_c), min(capacity_c, b + c))),
                ("Pour C to A", (min(capacity_a, a + c), b, max(0, a + c - capacity_a))),
                ("Pour C to B", (a, min(capacity_b, b + c), max(0, b + c - capacity_b))),
            ]

            for move_name, next_state in possible_moves:
                if next_state not in visited:
                    visited.add(next_state)
                    queue.append((next_state, path + [state]))  # Append the current state to the path

        return None  # No solution found

    # Example Usage
    solution = water_jug_bfs(10, 7, 4, 2, 'b') # Find 2 litres in jug B
    #solution = water_jug_bfs(10, 7, 4, 2, 'c') # Find 2 litres in jug C


    if solution:
        print("Solution found:")
        for i, state in enumerate(solution):
            print(f"Step {i+1}: {state}")
    else:
        print("No solution found.")
    ```

2.  **Varying Capacities:** Modify the program to work with different jug capacities and target values. Test it with:
    *   Jug A: 8 Litres, Jug B: 5 Litres, Target: 4 Litres in Jug A.
    *   Jug A: 5 Litres, Jug B: 3 Litres, Target: 2 Litres in Jug A.

3.  **Analyze Time and Space Complexity:** Experimentally measure the execution time and memory usage of your solution for different problem instances.  How does the complexity scale with the jug capacities?

4.  **Heuristic Search (Advanced):** Explore how a heuristic function could be used with A* search to potentially improve the performance of the solution.

**Answers to Practice Questions:**

1.  Refer to the Python code example above.
2.  You will need to modify the `water_jug_bfs` function's input parameters and update the `capacity_a`, `capacity_b` and `capacity_c`  variables within the function accordingly.
3.  The time and space complexity will increase as the product of the jug capacities increases. Experimentally, you'll observe a near-linear relationship with the number of possible states.
4.  A heuristic function can estimate the distance (number of pourings) from a given state to the goal state. An example heuristic could be the absolute difference between the current amount in the target jug and the target value. However, finding a *good* heuristic that is both admissible (never overestimates) and consistent (satisfies the triangle inequality) can be challenging for this problem.  A simple heuristic like the difference to the target is likely inadmissible and will not guarantee optimal solutions.  Because of the complexity in defining a suitable heuristic, BFS often remains the simplest and most reliable approach for this problem, even if it sometimes explores more states than a more sophisticated heuristic search could.
