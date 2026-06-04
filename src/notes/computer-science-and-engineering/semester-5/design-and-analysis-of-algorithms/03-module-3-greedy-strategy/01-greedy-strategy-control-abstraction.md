---
title: "Greedy Strategy - Control Abstraction"
subject: "DESIGN AND ANALYSIS OF ALGORITHMS"
module: "Module 3: Greedy Strategy "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b55a"
status: "completed"
scrapedAt: "2026-05-20T16:45:43.072Z"
---
## DESIGN AND ANALYSIS OF ALGORITHMS - Module 3: Greedy Strategy - Topic: Greedy Strategy - Control Abstraction

**Learning Outcomes:**

*   Understand the general structure and concept of a greedy algorithm control abstraction.
*   Identify the components of a greedy algorithm control abstraction.
*   Apply the greedy method control abstraction to solve simple optimization problems.
*   Recognize the limitations of the greedy strategy.

---

### 1. Introduction to Greedy Strategy

*   **Definition:** A greedy algorithm is an algorithmic paradigm that follows the problem-solving heuristic of making the locally optimal choice at each stage with the hope of finding a global optimum. In many problems, a greedy strategy *does not* produce an optimal solution, but a greedy heuristic may yield locally optimal solutions that approximate a global optimal solution in a reasonable amount of time.

*   **Optimization Problems:** Greedy algorithms are often used to solve optimization problems, where the goal is to find the best possible solution from a set of feasible solutions.

*   **Key Idea:**  Make the best choice *right now* without worrying about future consequences.

### 2. Greedy Strategy - Control Abstraction

A control abstraction provides a generalized structure for implementing algorithms of a particular type. In the case of the greedy strategy, the control abstraction outlines the steps a greedy algorithm typically takes.

*   **General Structure (Control Abstraction):**

    ```
    algorithm Greedy(A):
        // A is the set of candidate solutions
        solution = {}  // Initialize solution set
        while (A is not empty AND solution is not a feasible solution):
            x = select(A)  // Select a candidate from A based on a greedy criterion
            if (feasible(solution, x)):
                solution = union(solution, x) // Add x to the solution set
            A = A - {x} // Remove x from the candidate set

        if (solution is a feasible solution):
            return solution
        else:
            return "No solution found"
    ```

*   **Components of the Greedy Algorithm Control Abstraction:**

    *   **Candidate Set (A):** A set of potential solution components from which the algorithm makes choices.
    *   **Selection Function (select(A)):** A function that chooses the "best" candidate from the remaining candidates in the candidate set. This is the heart of the greedy approach.  "Best" is defined according to the greedy criterion.
    *   **Feasibility Function (feasible(solution, x)):** A function that checks if adding a candidate to the solution set would result in a feasible solution (i.e., a solution that satisfies the problem constraints).
    *   **Union Function (union(solution, x)):** A function that adds the selected candidate to the current solution.
    *   **Objective Function (Implied):**  While not explicitly a function in the control abstraction, the underlying problem defines an objective function that the algorithm aims to optimize (e.g., minimize cost, maximize profit). The `select()` function should consider this objective function when making its choices.

### 3. Explanation of the Components

*   **Candidate Set (A):**  This is the starting point.  It contains all the potential "building blocks" of the solution.  The greedy algorithm iteratively picks elements from this set.

*   **Selection Function (select(A)):** This is the most crucial part of a greedy algorithm. The `select()` function is responsible for picking the "best" candidate from the remaining candidates in `A`. The definition of "best" is determined by the *greedy criterion*, which is tailored to the specific problem.  Examples include:
    *   Largest value
    *   Smallest cost
    *   Nearest neighbor

*   **Feasibility Function (feasible(solution, x)):** This function determines whether adding a particular candidate `x` to the current `solution` will still result in a *feasible* solution.  A feasible solution meets all the constraints of the problem.  For example, in the knapsack problem, adding an item might exceed the weight limit.

*   **Union Function (union(solution, x)):** If `feasible()` returns `true`, then the `union()` function adds the candidate `x` to the current `solution` set.  This builds the solution step-by-step.

### 4. Example: Fractional Knapsack Problem

*   **Problem:** Given a set of items, each with a weight and a value, and a knapsack with a maximum weight capacity, determine the fraction of each item to include in the knapsack to maximize the total value while not exceeding the knapsack's weight capacity.

*   **Greedy Approach:** Choose items with the highest value-to-weight ratio first.

*   **Applying the Control Abstraction:**

    *   **A (Candidate Set):** Set of items, each represented by (weight, value) pairs.
    *   **select(A):** Select the item with the highest value-to-weight ratio (value/weight).
    *   **feasible(solution, x):** Check if adding (a fraction of) item `x` to the knapsack will exceed the knapsack's weight capacity.
    *   **union(solution, x):** Add the selected fraction of item `x` to the knapsack (along with its value and weight).

*   **Python Code (Illustrative):**

    ```python
    def fractional_knapsack(capacity, items):
        """
        Solves the fractional knapsack problem using a greedy approach.

        Args:
            capacity: The maximum weight capacity of the knapsack.
            items: A list of tuples, where each tuple represents an item
                   in the format (weight, value).

        Returns:
            A tuple containing:
                - The total value of the items in the knapsack.
                - A dictionary representing the fractions of each item taken.
        """

        # Calculate value-to-weight ratios
        value_to_weight = [(item[1] / item[0], item) for item in items]
        value_to_weight.sort(reverse=True)  # Sort by ratio in descending order

        total_value = 0
        knapsack_contents = {}
        remaining_capacity = capacity

        for ratio, item in value_to_weight:
            weight, value = item

            if weight <= remaining_capacity:
                # Take the whole item
                total_value += value
                knapsack_contents[item] = 1.0  # 1.0 represents taking the whole item
                remaining_capacity -= weight
            else:
                # Take a fraction of the item
                fraction = remaining_capacity / weight
                total_value += value * fraction
                knapsack_contents[item] = fraction
                remaining_capacity = 0
                break  # Knapsack is full

        return total_value, knapsack_contents

    # Example usage:
    capacity = 50
    items = [(10, 60), (20, 100), (30, 120)]  # (weight, value)
    total_value, knapsack_contents = fractional_knapsack(capacity, items)

    print("Total value:", total_value)
    print("Knapsack contents:", knapsack_contents)
    ```

### 5. Example: Activity Selection Problem

*   **Problem:** Given a set of activities, each with a start time and finish time, select the maximum number of activities that can be performed by a single person, assuming that a person can only work on one activity at a time.

*   **Greedy Approach:**  Select activities in increasing order of their finish times.

*   **Applying the Control Abstraction:**

    *   **A (Candidate Set):** Set of activities, each represented by (start time, finish time) pairs.
    *   **select(A):** Select the activity with the earliest finish time.
    *   **feasible(solution, x):** Check if the selected activity `x` is compatible with the current activities in the solution (i.e., it doesn't overlap with any other selected activity).  An activity is compatible if its start time is greater than or equal to the finish time of the last activity added to the solution.
    *   **union(solution, x):** Add the selected activity `x` to the solution.

*   **Python Code (Illustrative):**

    ```python
    def activity_selection(activities):
        """
        Solves the activity selection problem using a greedy approach.

        Args:
            activities: A list of tuples, where each tuple represents an activity
                        in the format (start_time, finish_time).

        Returns:
            A list of activities selected.
        """

        # Sort activities by finish time
        activities.sort(key=lambda x: x[1])

        selected_activities = []
        last_finish_time = float('-inf')  # Initialize to negative infinity

        for activity in activities:
            start_time, finish_time = activity
            if start_time >= last_finish_time:
                selected_activities.append(activity)
                last_finish_time = finish_time

        return selected_activities

    # Example usage:
    activities = [(1, 4), (3, 5), (0, 6), (5, 7), (3, 9), (5, 9), (6, 10), (8, 11), (8, 12), (2, 14), (12, 16)]
    selected = activity_selection(activities)
    print("Selected activities:", selected)
    ```

### 6. Limitations of the Greedy Strategy

*   **Not Always Optimal:** Greedy algorithms don't always guarantee the optimal solution. They make locally optimal choices, which might lead to a suboptimal global solution.

*   **Problem-Specific:**  A greedy approach that works for one problem might not work for another. Finding the correct greedy criterion can be difficult.

*   **Examples where Greedy Fails:**

    *   **0/1 Knapsack Problem:** Unlike the fractional knapsack, the 0/1 knapsack problem (where you can only take the entire item or leave it behind) cannot always be solved optimally with a greedy approach.
    *   **Traveling Salesperson Problem (TSP):**  While some greedy heuristics exist for TSP (e.g., nearest neighbor), they don't guarantee the shortest route.

### 7. Practice Questions/Exercises

1.  **Minimum Spanning Tree (MST):**  Research and describe how Kruskal's algorithm and Prim's algorithm (both greedy algorithms) work for finding the minimum spanning tree of a graph.  Explain the greedy criterion used in each algorithm.

    *   **Answer:**
        *   **Kruskal's Algorithm:**
            *   **Greedy Criterion:** Choose the edge with the smallest weight that does not create a cycle.
            *   **Process:** Sort all edges by weight. Iteratively add the smallest weight edge to the MST, provided that adding it doesn't create a cycle. Use a data structure like the Union-Find algorithm to efficiently detect cycles.
        *   **Prim's Algorithm:**
            *   **Greedy Criterion:** Choose the edge with the smallest weight that connects a vertex in the MST to a vertex outside the MST.
            *   **Process:** Start with an arbitrary vertex. Iteratively add the smallest weight edge that connects a vertex already in the MST to a vertex not yet in the MST.  Maintain a priority queue to efficiently find the minimum weight edge.

2.  **Coin Change Problem (Greedy Approach):**  Given a set of coin denominations and an amount, find the minimum number of coins needed to make up that amount, assuming an infinite supply of each coin denomination.  Does a greedy approach always work?  Give an example where it fails.

    *   **Answer:**
        *   **Greedy Approach:**  Start with the largest denomination coin that is less than or equal to the remaining amount. Add that coin to the solution and subtract its value from the remaining amount. Repeat until the remaining amount is 0.
        *   **Does it always work?** No.
        *   **Example where it fails:**  Suppose the coin denominations are {1, 3, 4} and the amount is 6.
            *   Greedy Solution:  4 + 1 + 1 = 3 coins
            *   Optimal Solution: 3 + 3 = 2 coins

3.  **Applying Control Abstraction to a Simplified Problem:**  Imagine you have a list of tasks, each with a 'priority' value. You want to select the maximum number of tasks such that the total priority of selected tasks does not exceed a 'maximum_priority'. Write a python function that uses the greedy approach to implement this.

    *   **Answer:**

    ```python
    def select_tasks(tasks, maximum_priority):
        """
        Selects tasks greedily based on priority, subject to a maximum total priority.

        Args:
            tasks: A list of tuples, where each tuple is (task_name, priority).
            maximum_priority: The maximum allowed total priority.

        Returns:
            A list of selected task names.
        """

        # Sort tasks by priority in ascending order (greedy criterion: least priority first)
        tasks.sort(key=lambda x: x[1])

        selected_tasks = []
        current_priority = 0

        for task_name, priority in tasks:
            if current_priority + priority <= maximum_priority:
                selected_tasks.append(task_name)
                current_priority += priority

        return selected_tasks

    # Example usage
    tasks = [("Task A", 5), ("Task B", 2), ("Task C", 8), ("Task D", 1)]
    max_priority = 10
    selected = select_tasks(tasks, max_priority)
    print("Selected tasks:", selected)  # Output will vary depending on sorting and max_priority
    ```

### 8. Important Points to Remember

*   Greedy algorithms are often simple to implement and efficient (low time complexity).
*   The choice of the greedy criterion is crucial for the algorithm's success.
*   Always consider whether a greedy approach will lead to an optimal solution for a given problem. If optimality is required, other techniques like dynamic programming might be necessary.
*   Understand the control abstraction framework for greedy algorithms to effectively design and analyze greedy solutions.
