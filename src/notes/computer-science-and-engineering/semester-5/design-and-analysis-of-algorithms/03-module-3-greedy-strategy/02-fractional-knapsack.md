---
title: "Fractional Knapsack"
subject: "DESIGN AND ANALYSIS OF ALGORITHMS"
module: "Module 3: Greedy Strategy "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b55b"
status: "completed"
scrapedAt: "2026-05-20T16:45:43.779Z"
---
# DESIGN AND ANALYSIS OF ALGORITHMS - Module 3: Greedy Strategy - Fractional Knapsack

## Learning Outcomes:

*   Understand the Greedy Algorithm paradigm.
*   Explain the fractional knapsack problem.
*   Implement the greedy approach for solving the fractional knapsack problem.
*   Analyze the time complexity of the greedy algorithm for the fractional knapsack problem.
*   Prove the optimality of the greedy solution for the fractional knapsack problem.

## 1. Introduction to Greedy Algorithms

*   **Definition:** A greedy algorithm is an algorithmic paradigm that follows the problem-solving heuristic of making the *locally optimal choice* at each stage with the hope of finding the *global optimum*.

*   **Key Characteristics:**
    *   **Optimal Substructure:**  An optimal solution to the problem contains optimal solutions to the subproblems.
    *   **Greedy Choice Property:** A globally optimal solution can be arrived at by making a locally optimal (greedy) choice.  This means the best choice at each step leads to the best overall solution.
    *   **No Backtracking:** Once a choice is made, it's considered final.  Greedy algorithms generally don't revise previous decisions.

*   **When to Use:** Greedy algorithms are suitable for optimization problems where a series of choices leads to an overall solution.  They are generally efficient (low time complexity) but *do not always guarantee the optimal solution for all problems.*

*   **Examples of Problems Solved with Greedy Algorithms:**
    *   Fractional Knapsack
    *   Activity Selection
    *   Huffman Coding
    *   Dijkstra's Algorithm (for shortest paths in graphs with non-negative edge weights)
    *   Prim's Algorithm and Kruskal's Algorithm (for Minimum Spanning Trees)

## 2. The Fractional Knapsack Problem

*   **Problem Statement:** Given a set of *n* items, each with a *weight* *w<sub>i</sub>* and a *value* *v<sub>i</sub>*, and a knapsack with a maximum *capacity* *W*, determine the maximum *total value* of items that can be placed in the knapsack.  *Unlike the 0/1 knapsack problem, you are allowed to take fractions of items.*

*   **Input:**
    *   `n`: Number of items
    *   `W`: Knapsack capacity
    *   `items`: A list of tuples (weight, value) representing each item

*   **Output:**
    *   `maxValue`: The maximum total value of items that can be placed in the knapsack.

*   **Example:**

    *   `n = 3`
    *   `W = 50`
    *   `items = [(10, 60), (20, 100), (30, 120)]`  (weight, value)

    *   **Optimal Solution:**
        *   Take all of item 1 (weight 10, value 60)
        *   Take all of item 2 (weight 20, value 100)
        *   Take 2/3 of item 3 (weight 20, value 80)  (since 20/30 = 2/3 and value is (2/3) * 120 = 80)
        *   Total weight: 10 + 20 + 20 = 50
        *   Total value: 60 + 100 + 80 = 240

## 3. Greedy Approach for the Fractional Knapsack Problem

The greedy approach for the fractional knapsack problem involves the following steps:

1.  **Calculate the value-to-weight ratio for each item:** `ratio[i] = value[i] / weight[i]`
2.  **Sort the items in descending order based on their value-to-weight ratio.**
3.  **Iterate through the sorted items:**
    *   If the current item's weight is less than or equal to the remaining capacity of the knapsack, take the entire item. Update the knapsack's remaining capacity and the total value.
    *   If the current item's weight is greater than the remaining capacity of the knapsack, take a fraction of the item such that the knapsack is full.  Update the total value by adding the value of the fraction taken. Stop iterating (since the knapsack is now full).

## 4. Implementation (Python)

```python
def fractional_knapsack(capacity, items):
  """
  Solves the fractional knapsack problem using a greedy approach.

  Args:
    capacity: The capacity of the knapsack.
    items: A list of tuples (weight, value) representing each item.

  Returns:
    The maximum total value of items that can be placed in the knapsack.
  """

  # 1. Calculate value-to-weight ratios
  item_ratios = []
  for weight, value in items:
    item_ratios.append((value / weight, weight, value))

  # 2. Sort items by value-to-weight ratio in descending order
  item_ratios.sort(reverse=True)

  max_value = 0.0
  remaining_capacity = capacity

  # 3. Iterate through sorted items
  for ratio, weight, value in item_ratios:
    if weight <= remaining_capacity:
      # Take the entire item
      max_value += value
      remaining_capacity -= weight
    else:
      # Take a fraction of the item
      fraction = remaining_capacity / weight
      max_value += fraction * value
      remaining_capacity = 0
      break  # Knapsack is full

  return max_value

# Example Usage
capacity = 50
items = [(10, 60), (20, 100), (30, 120)]
max_value = fractional_knapsack(capacity, items)
print(f"Maximum value: {max_value}")  # Output: Maximum value: 240.0
```

## 5. Time Complexity Analysis

*   Calculating the value-to-weight ratio for each item takes O(n) time, where n is the number of items.
*   Sorting the items based on the value-to-weight ratio takes O(n log n) time (using an efficient sorting algorithm like merge sort or quicksort).
*   Iterating through the sorted items and filling the knapsack takes O(n) time in the worst case.

*   **Therefore, the overall time complexity of the greedy algorithm for the fractional knapsack problem is O(n log n), dominated by the sorting step.**

## 6. Proof of Optimality

The greedy algorithm provides an optimal solution for the fractional knapsack problem.  Here's a simplified argument for its optimality:

*   **The Intuition:** We prioritize items with the highest value per unit weight. This ensures that we get the most "bang for our buck" with each unit of weight we add to the knapsack.

*   **Proof by Contradiction (Outline):**
    1.  Assume that there exists another solution that yields a higher total value than the greedy solution.
    2.  Compare the greedy solution to this assumed-better solution.
    3.  There must be a point where the greedy solution includes a fraction of an item with a higher value-to-weight ratio than any item (or fraction of an item) in the assumed-better solution that occupies the same weight.
    4.  We can then improve the assumed-better solution by replacing some of its items with a fraction of the higher value-to-weight ratio item from the greedy solution.  This contradicts the assumption that the assumed-better solution was optimal.
    5.  Therefore, the greedy solution must be optimal.

*   **Key Idea:** The greedy algorithm always selects the densest (highest value/weight ratio) items first.  If a better solution existed, it would have to sacrifice some dense items for less dense ones, leading to a lower overall value.  The fractional nature of the problem allows us to perfectly optimize the use of each unit of knapsack capacity.

## 7. Practice Questions/Exercises

1.  **Question:** Given a knapsack capacity of 10 and items with weights and values as follows: `[(5, 10), (4, 40), (6, 30), (3, 50)]`, what is the maximum value that can be obtained using the fractional knapsack algorithm?

    **Answer:**

    1.  Calculate ratios: `[(10/5, 5, 10), (40/4, 4, 40), (30/6, 6, 30), (50/3, 3, 50)]` which simplifies to `[(2, 5, 10), (10, 4, 40), (5, 6, 30), (16.67, 3, 50)]`
    2.  Sort by ratio (descending): `[(16.67, 3, 50), (10, 4, 40), (5, 6, 30), (2, 5, 10)]`
    3.  Apply the greedy algorithm:
        *   Take item 4 (weight 3, value 50). Remaining capacity: 10 - 3 = 7.  Total value: 50
        *   Take item 2 (weight 4, value 40). Remaining capacity: 7 - 4 = 3. Total value: 50 + 40 = 90
        *   Take item 3 (weight 6, value 30). Since remaining capacity is 3, take 3/6 = 1/2 of this item. Value gained: (1/2) * 30 = 15. Total value: 90 + 15 = 105.

    Therefore, the maximum value is **105**.

2.  **Question:** What are the key differences between the fractional knapsack and the 0/1 knapsack problem?  Which one can be solved optimally with a greedy algorithm?

    **Answer:**

    *   **Fractional Knapsack:**  Allows taking fractions of items.  Can be solved optimally using a greedy algorithm (sorting by value-to-weight ratio).
    *   **0/1 Knapsack:** Only allows taking whole items (either 0 or 1 of each item).  Cannot be solved optimally using a greedy algorithm. Requires dynamic programming or other techniques for optimal solutions.

3.  **Question:** Why does the greedy approach *not* guarantee an optimal solution for the 0/1 Knapsack problem?  Provide a simple example.

    **Answer:**

    The greedy approach fails for the 0/1 Knapsack because taking the item with the highest value-to-weight ratio may not leave enough space for other valuable items.  Unlike the fractional version, we can't take a portion of an item to "fit" it into the remaining space.

    **Example:**

    *   Knapsack Capacity: 10
    *   Items:
        *   Item 1: Weight = 6, Value = 10  (Ratio: 1.67)
        *   Item 2: Weight = 5, Value = 8   (Ratio: 1.60)
        *   Item 3: Weight = 4, Value = 7   (Ratio: 1.75)

    Greedy Approach (sorting by ratio *descending*):  Select Item 3 first (ratio 1.75). Remaining capacity: 6. Then select Item 1 (ratio 1.67) and the capacity is full. Total value: 7 + 10 = 17.

    Optimal Solution: Select Item 1 and Item 2. Total weight 6 + 5 = 11 (too much). Try Item 2 and Item 3 which gives 5 + 4 = 9 (less than the capacity). The value here is 8 + 7 = 15.
    *Another* Optimal Solution: Select Item 1 and Item 3. Total weight: 6 + 4 = 10. Value: 10 + 7 = 17.

    In our example, taking Item 1 and then Item 3 is *also* optimal, but if the items had different values (e.g. Item 3 has a value of 15 rather than 7), this simple approach would not have resulted in the globally optimal solution. This shows that selecting the item with the highest ratio alone doesn't work.

## 8. Important Points to Remember

*   The greedy algorithm for the fractional knapsack problem is relatively simple to implement and has a time complexity of O(n log n).
*   It provides an *optimal* solution to the fractional knapsack problem.
*   The key to the greedy approach is sorting the items by their value-to-weight ratio.
*   Greedy algorithms are not always guaranteed to produce optimal solutions for all optimization problems. Always analyze whether the greedy choice property holds for the specific problem.
*   Understand the differences between the fractional and 0/1 knapsack problems. The greedy strategy *only* works optimally for the fractional version.
