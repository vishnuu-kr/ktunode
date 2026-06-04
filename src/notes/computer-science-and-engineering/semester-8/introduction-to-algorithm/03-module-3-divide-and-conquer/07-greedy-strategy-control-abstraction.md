---
title: "Greedy Strategy - Control Abstraction"
subject: "INTRODUCTION TO ALGORITHM"
module: "Module 3: Divide and Conquer "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cbd3"
status: "completed"
scrapedAt: "2026-05-20T17:25:16.811Z"
---
# Introduction to Algorithms: Module 3 - Divide and Conquer

## Topic: Greedy Strategy - Control Abstraction

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Understand the fundamental concept of a greedy approach to problem-solving.
*   Identify the characteristics of problems that can be solved using a greedy strategy.
*   Define the control abstraction for a greedy algorithm.
*   Analyze the correctness of a greedy algorithm using proof techniques.
*   Recognize common greedy algorithms and their applications.
*   Apply the greedy strategy to solve specific problems.

---

### 1. What is a Greedy Strategy?

The greedy strategy is a general algorithmic paradigm that builds up a solution piece by piece, always making the choice that seems best at the moment. It makes locally optimal choices with the hope that these choices will lead to a globally optimal solution.

*   **Key Idea:** Make the "best" choice available at each step without reconsidering previous choices.
*   **Analogy:** Imagine you're packing a suitcase for a trip and you want to fit as many items as possible. A greedy approach would be to pick the most valuable or most essential item first, then the next most valuable, and so on, until the suitcase is full. You don't try to rearrange items later if a different initial choice might have allowed more to fit.

---

### 2. Characteristics of Problems Solvable by Greedy Algorithms

Not all problems can be solved optimally using a greedy strategy. Problems that lend themselves to greedy solutions typically exhibit two key properties:

*   **Greedy Choice Property:** A globally optimal solution can be arrived at by making a sequence of locally optimal choices. This means that an optimal solution to the problem contains an optimal solution to a subproblem formed by the greedy choice.
*   **Optimal Substructure Property:** An optimal solution to the problem contains within it optimal solutions to subproblems. This is a property shared with dynamic programming.

**Important Note:** While both greedy and dynamic programming rely on optimal substructure, the key difference lies in the **greedy choice property**. Greedy algorithms make a choice and never look back, whereas dynamic programming explores multiple choices and stores intermediate results to ensure optimality.

---

### 3. The Control Abstraction for a Greedy Algorithm

The control abstraction for a greedy algorithm can be represented by the following pseudocode:

```
GREEDILY-CHOOSE(P)
  S = {} // Initialize the solution set

  WHILE P is not empty DO
    x = SELECT-ELEMENT(P) // Make the greedy choice
    IF x is a valid choice THEN
      Add x to S
      P = MAKE-CHOICE(x, P) // Update the problem instance
  RETURN S
```

**Explanation of Components:**

*   **`GREEDILY-CHOOSE(P)`:** This is the main function that takes the problem instance `P` as input and returns the solution `S`.
*   **`S = {}`:** Initializes an empty set to store the selected elements that will form the solution.
*   **`WHILE P is not empty DO`:** The loop continues as long as there are elements to consider or the problem is not fully solved.
*   **`x = SELECT-ELEMENT(P)`:** This is the core of the greedy strategy. It involves a function that selects the "best" or "most promising" element from the current problem instance `P` based on some criterion.
*   **`IF x is a valid choice THEN`:** This condition checks if the selected element `x` can be added to the solution without violating any constraints.
*   **`Add x to S`:** If `x` is valid, it's added to the solution set `S`.
*   **`P = MAKE-CHOICE(x, P)`:** After adding `x`, the problem instance `P` is updated to reflect the choice made. This might involve removing `x` or other elements, or modifying constraints.

---

### 4. Proof Techniques for Greedy Algorithms

Proving the correctness of a greedy algorithm often involves demonstrating that the greedy choices indeed lead to a globally optimal solution. Two common proof techniques are:

#### a) Proof by Induction

This is the most common method. It involves showing that:

1.  **Base Case:** The greedy algorithm produces an optimal solution for a small, simple instance of the problem.
2.  **Inductive Hypothesis:** Assume that the greedy algorithm produces an optimal solution for any problem instance of size up to *k*.
3.  **Inductive Step:** Show that if the greedy algorithm makes a choice `x` for an instance of size *k+1*, then there exists an optimal solution that includes `x`. This often involves showing that the remaining subproblem (after making the greedy choice) has an optimal solution that, when combined with `x`, forms an optimal solution to the original problem.

#### b) Proof of Exchange Argument

This technique demonstrates that any optimal solution can be transformed into the greedy solution without decreasing its value.

1.  Assume there exists an optimal solution `O` that is different from the greedy solution `G`.
2.  Find the first point where `O` and `G` differ. Let `g_i` be the greedy choice at this step, and `o_i` be the choice in the optimal solution `O`.
3.  Argue that because `g_i` is the greedy choice (i.e., it's "better" according to the greedy criterion), we can replace `o_i` with `g_i` in `O` to obtain a new solution `O'` that is still optimal, but closer to `G`.
4.  By repeatedly applying this exchange, we can transform `O` into `G` without losing optimality, thus proving that `G` is also optimal.

---

### 5. Examples of Greedy Algorithms

Here are some classic examples that illustrate the greedy strategy:

#### a) Activity Selection Problem

**Problem:** Given a set of *n* activities, each with a start time `s_i` and finish time `f_i`, select the maximum number of non-overlapping activities.

**Greedy Strategy:** Sort the activities by their finish times in ascending order. Then, iterate through the sorted activities, selecting an activity if it does not overlap with the previously selected activity.

**Control Abstraction Applied:**

1.  **`P`:** The set of activities.
2.  **`SELECT-ELEMENT(P)`:** Choose the activity with the earliest finish time among the remaining activities.
3.  **`Is x valid?`:** Check if the chosen activity's start time is greater than or equal to the finish time of the previously selected activity.
4.  **`MAKE-CHOICE(x, P)`:** Remove the chosen activity and all activities that overlap with it from `P`.

**Example:**

Activities:
A1: [1, 4]
A2: [3, 5]
A3: [0, 6]
A4: [5, 7]
A5: [3, 8]
A6: [5, 9]
A7: [6, 10]
A8: [8, 11]
A9: [8, 12]
A10: [2, 13]
A11: [12, 14]

Sorted by finish time:
A1: [1, 4]
A2: [3, 5]
A3: [0, 6]
A4: [5, 7]
A5: [3, 8]
A6: [5, 9]
A7: [6, 10]
A8: [8, 11]
A9: [8, 12]
A10: [2, 13]
A11: [12, 14]

**Steps:**

1.  Select A1 ([1, 4]). `S = {A1}`.
2.  A2 ([3, 5]) overlaps with A1. A3 ([0, 6]) overlaps with A1.
3.  Select A4 ([5, 7]). It starts after A1 finishes. `S = {A1, A4}`.
4.  A5 ([3, 8]) overlaps with A4. A6 ([5, 9]) overlaps with A4. A7 ([6, 10]) overlaps with A4.
5.  Select A8 ([8, 11]). It starts after A4 finishes. `S = {A1, A4, A8}`.
6.  A9 ([8, 12]) overlaps with A8. A10 ([2, 13]) overlaps with A8.
7.  Select A11 ([12, 14]). It starts after A8 finishes. `S = {A1, A4, A8, A11}`.

Maximum number of non-overlapping activities is 4.

#### b) Huffman Coding

**Problem:** Construct a prefix code for a set of characters such that the total weighted path length of the code is minimized. This is used for data compression.

**Greedy Strategy:** Build a binary tree where each leaf node represents a character with its frequency. Repeatedly merge the two nodes with the smallest frequencies into a new parent node whose frequency is the sum of its children's frequencies.

**Control Abstraction Applied:**

1.  **`P`:** The set of nodes (initially leaf nodes for each character).
2.  **`SELECT-ELEMENT(P)`:** Choose the two nodes with the minimum frequencies from `P`.
3.  **`Is x valid?`:** Always valid, as we are building a tree.
4.  **`MAKE-CHOICE(x, P)`:** Create a new parent node for the two chosen nodes, set its frequency, and add it back to `P`. Remove the two chosen nodes from `P`.

**Example:**

Characters and frequencies:
a: 45
b: 13
c: 12
d: 16
e: 9
f: 5

**Steps:**

1.  Nodes: (f:5), (e:9), (c:12), (b:13), (d:16), (a:45)
2.  Merge (f:5) and (e:9) -> (fe:14). Nodes: (c:12), (b:13), (fe:14), (d:16), (a:45)
3.  Merge (c:12) and (b:13) -> (cb:25). Nodes: (fe:14), (d:16), (cb:25), (a:45)
4.  Merge (fe:14) and (d:16) -> (fed:30). Nodes: (cb:25), (fed:30), (a:45)
5.  Merge (cb:25) and (fed:30) -> (cbfed:55). Nodes: (a:45), (cbfed:55)
6.  Merge (a:45) and (cbfed:55) -> (root:100).

This process builds the Huffman tree, and the codes are assigned based on the paths from the root (0 for left child, 1 for right child).

#### c) Kruskal's Algorithm (Minimum Spanning Tree)

**Problem:** Given a connected, undirected graph with edge weights, find a Minimum Spanning Tree (MST) – a subgraph that connects all the vertices together, without any cycles, and with the minimum possible total edge weight.

**Greedy Strategy:** Sort all edges in non-decreasing order of weight. Iterate through the sorted edges and add an edge to the MST if it does not form a cycle with the already chosen edges.

**Control Abstraction Applied:**

1.  **`P`:** The set of all edges in the graph.
2.  **`SELECT-ELEMENT(P)`:** Choose the edge with the minimum weight from the remaining edges.
3.  **`Is x valid?`:** Check if adding the edge `x` creates a cycle. This is typically done using a Disjoint Set Union (DSU) data structure.
4.  **`MAKE-CHOICE(x, P)`:** Add the edge `x` to the MST and merge the sets of the two vertices connected by `x` in the DSU structure.

#### d) Prim's Algorithm (Minimum Spanning Tree)

**Problem:** Same as Kruskal's algorithm.

**Greedy Strategy:** Start with an arbitrary vertex. Repeatedly add the minimum weight edge that connects a vertex in the current MST to a vertex outside the MST.

**Control Abstraction Applied:**

1.  **`P`:** The set of vertices not yet in the MST.
2.  **`SELECT-ELEMENT(P)`:** Choose the vertex `v` not in the MST that is connected to the MST by the minimum weight edge.
3.  **`Is x valid?`:** Always valid, as we are adding a vertex to grow the MST.
4.  **`MAKE-CHOICE(x, P)`:** Add the chosen vertex `v` and the corresponding minimum weight edge to the MST. Update the minimum edge weights for vertices adjacent to `v`.

---

### 6. Advantages and Disadvantages of the Greedy Strategy

**Advantages:**

*   **Simplicity:** Greedy algorithms are often conceptually simple and easy to implement.
*   **Efficiency:** They are typically faster than algorithms that explore all possibilities (like brute-force or sometimes dynamic programming).
*   **Good for certain problems:** For problems exhibiting the greedy choice property, they provide optimal solutions.

**Disadvantages:**

*   **Not always optimal:** The biggest drawback is that greedy algorithms do not always produce optimal solutions. The locally optimal choice might not lead to a globally optimal solution.
*   **Proof of correctness can be tricky:** Demonstrating that a greedy algorithm is indeed optimal often requires careful mathematical proof.
*   **Sensitivity to input:** Small changes in the input can sometimes lead to significantly different (and potentially worse) solutions.

---

### 7. Practice Questions

1.  **Concept Check:**
    *   What are the two essential properties for a problem to be solvable by a greedy algorithm?
    *   Explain the difference between a greedy choice property and optimal substructure.
    *   In the activity selection problem, why is sorting by finish time a crucial greedy choice?

2.  **Application:**
    *   Consider the problem of making change using the fewest number of coins. If you have coin denominations of 1, 5, 10, and 25 cents, would a greedy approach (always picking the largest denomination less than or equal to the remaining amount) work optimally? Explain why or why not. (Hint: Consider a scenario with denominations 1, 3, and 4 cents and an amount of 6 cents.)

3.  **Algorithm Design:**
    *   Describe how you would use a greedy strategy to solve the "Fractional Knapsack Problem." You have a knapsack with a capacity `W` and a set of items, each with a value `v_i` and weight `w_i`. You can take fractions of items.

---

### 8. Answers to Practice Questions

1.  **Concept Check:**
    *   The two essential properties are the **Greedy Choice Property** and the **Optimal Substructure Property**.
    *   **Greedy Choice Property:** A globally optimal solution can be reached by making locally optimal choices. This means that an optimal solution to the problem contains an optimal solution to a subproblem formed by the greedy choice.
        **Optimal Substructure Property:** An optimal solution to the problem contains within it optimal solutions to subproblems.
        The key difference is that greedy algorithms commit to a choice immediately and don't revisit it, whereas dynamic programming might explore multiple choices for subproblems.
    *   Sorting by finish time is crucial because it ensures that by picking the activity that finishes earliest, we leave the maximum amount of time remaining for subsequent activities, thus maximizing the opportunity to select more activities.

2.  **Application:**
    *   **Yes, for standard US currency (1, 5, 10, 25 cents), the greedy approach works optimally.** This is because the denominations have a property that ensures this.
    *   **However, the greedy approach does not *always* work for making change.** Consider denominations of 1, 3, and 4 cents, and an amount of 6 cents.
        *   **Greedy:**
            1.  Pick 4 cents. Remaining: 2 cents.
            2.  Pick 1 cent. Remaining: 1 cent.
            3.  Pick 1 cent. Remaining: 0 cents.
            Total coins: 3 (4, 1, 1).
        *   **Optimal:**
            1.  Pick 3 cents. Remaining: 3 cents.
            2.  Pick 3 cents. Remaining: 0 cents.
            Total coins: 2 (3, 3).
        In this case, the greedy choice of 4 cents led to a suboptimal solution. This demonstrates that the specific properties of the coin system are critical for the greedy strategy to work.

3.  **Algorithm Design (Fractional Knapsack):**
    *   **Problem:** Maximize the total value of items in a knapsack with capacity `W`, where fractions of items can be taken.
    *   **Greedy Strategy:**
        1.  Calculate the **value-to-weight ratio** (`v_i / w_i`) for each item.
        2.  Sort the items in **descending order** based on their value-to-weight ratio.
        3.  Iterate through the sorted items:
            *   If the current item's weight (`w_i`) is less than or equal to the remaining capacity of the knapsack, take the entire item and add its value to the total. Update the remaining capacity.
            *   If the current item's weight (`w_i`) is greater than the remaining capacity, take a fraction of the item equal to `remaining_capacity / w_i`. Add the value of this fraction (`(remaining_capacity / w_i) * v_i`) to the total. Set the remaining capacity to 0 and stop.

    *   **Control Abstraction Applied:**
        *   **`P`:** The set of items.
        *   **`SELECT-ELEMENT(P)`:** Choose the item with the highest value-to-weight ratio among the remaining items.
        *   **`Is x valid?`:** Check if the selected item (or a fraction of it) can fit within the remaining knapsack capacity.
        *   **`MAKE-CHOICE(x, P)`:** Add the item (or its fraction) to the knapsack, update the total value and remaining capacity, and remove the item from consideration.

---

### Important Points to Remember:

*   **Greedy = Local Optimum for Global Optimum (Hopeful Guess):** The core idea is to make the best choice *now*.
*   **Not Always Optimal:** Always be cautious and, if possible, prove the correctness of your greedy approach.
*   **Greedy Choice Property is Key:** This is what distinguishes greedy from dynamic programming.
*   **Common Applications:** Activity Selection, Huffman Coding, Kruskal's/Prim's MST algorithms, Fractional Knapsack.
*   **Efficiency:** Greedy algorithms are often very efficient, making them a good first choice when applicable.
