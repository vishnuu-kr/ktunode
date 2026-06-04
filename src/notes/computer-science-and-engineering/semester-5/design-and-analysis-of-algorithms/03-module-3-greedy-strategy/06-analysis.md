---
title: "Analysis"
subject: "DESIGN AND ANALYSIS OF ALGORITHMS"
module: "Module 3: Greedy Strategy "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b55f"
status: "completed"
scrapedAt: "2026-05-20T16:45:46.601Z"
---
## DESIGN AND ANALYSIS OF ALGORITHMS: Module 3 - Greedy Strategy: Analysis

**Module Goal:** To understand and apply the Greedy strategy for solving optimization problems.

**Topic:** Analysis of Greedy Algorithms

**Learning Outcomes:**

*   Understand the general characteristics of problems suitable for greedy algorithms.
*   Analyze the correctness of a greedy algorithm.
*   Understand and apply concepts like optimal substructure and greedy choice property in the context of greedy algorithms.
*   Analyze the time complexity of greedy algorithms.
*   Recognize limitations of greedy algorithms and when they might fail to produce optimal solutions.

---

### 1.  Characteristics of Problems Suitable for Greedy Algorithms

Greedy algorithms make locally optimal choices at each step with the hope of finding a global optimum.  Not all optimization problems are suitable for this approach.  Problems amenable to a greedy solution typically exhibit the following characteristics:

*   **Optimal Substructure:**  An optimal solution to the problem contains optimal solutions to subproblems.  In other words, the optimal solution for the entire problem can be constructed from the optimal solutions of its subproblems.  This is similar to Dynamic Programming, but the way we *use* the optimal substructure differs.
*   **Greedy Choice Property:** A globally optimal solution can be arrived at by making a locally optimal (greedy) choice.  This means the choice made at each step shouldn't preclude the possibility of achieving an optimal solution later. The locally optimal choice doesn't need to be the *only* way to achieve the global optimum, but *a* global optimum can be reached using that greedy choice. This is the core property of problems suitable for greedy algorithms.
*   **Simple Problem Structure:** Greedy algorithms are often applied to problems with a relatively straightforward structure that allows for easy identification of locally optimal choices.

**Example:**

*   **Fractional Knapsack Problem:**  Optimal Substructure: If we fill a knapsack optimally with some items, the remaining space must also be filled optimally with the remaining items.  Greedy Choice Property: Always choose the item with the highest value-to-weight ratio.
*   **Activity Selection Problem:** Optimal Substructure:  If an activity *a* is part of an optimal solution, then an optimal solution to the remaining activities after *a* is also optimal. Greedy Choice Property:  Choose the activity with the earliest finish time.

**Contrast with Dynamic Programming:**

While both Greedy and Dynamic Programming leverage optimal substructure, they differ significantly:

*   **Greedy:** Makes a single, locally optimal choice at each step.  Never reconsiders previous choices.
*   **Dynamic Programming:** Explores multiple options for each subproblem and stores the optimal solutions in a table to avoid recomputation.  DP examines overlapping subproblems which greedy algorithms often ignore.

### 2.  Analyzing the Correctness of a Greedy Algorithm

Proving the correctness of a greedy algorithm is crucial.  A greedy algorithm may seem intuitive, but intuition can be misleading. Common techniques for proving correctness include:

*   **Proof by Induction:**
    *   **Base Case:**  Show that the greedy algorithm finds the optimal solution for a small input.
    *   **Inductive Hypothesis:** Assume that the greedy algorithm finds the optimal solution for an input of size *k*.
    *   **Inductive Step:** Prove that the greedy algorithm finds the optimal solution for an input of size *k+1*.  This usually involves showing that the greedy choice at step *k+1* does not preclude achieving the optimal solution (i.e., the greedy choice leads to a problem of size *k* that we *know* by our inductive hypothesis is solved optimally).
*   **Exchange Argument:**
    *   Assume that the greedy algorithm produces a solution *S*.
    *   Assume that there exists an alternative optimal solution *S'*.
    *   Show that by "exchanging" elements between *S* and *S'*, we can transform *S'* into *S* without decreasing the optimality of *S'*.  This demonstrates that *S* must also be an optimal solution.
    *   Example: In activity selection, you can exchange an activity in a supposedly "better" schedule with the one chosen by the greedy algorithm to show the greedy schedule is as good.
*   **Staying Ahead:**
    *   Show that at each step, the greedy algorithm's solution is "ahead" of any other possible solution.  This usually involves comparing the partial solutions produced by the greedy algorithm with those produced by any other algorithm.
    *   Example: In scheduling problems, the greedy algorithm always finishes more tasks earlier than any other algorithm.

**Example: Correctness Proof using Exchange Argument (Activity Selection)**

*   **Greedy Algorithm:** Select activities in order of earliest finish time.
*   **Proof:**
    *   Let *S = {a<sub>1</sub>, a<sub>2</sub>, ..., a<sub>k</sub>}* be the activities selected by the greedy algorithm. Assume *a<sub>i</sub>* are sorted by finish time.
    *   Let *O = {b<sub>1</sub>, b<sub>2</sub>, ..., b<sub>m</sub>}* be an optimal solution. Assume *b<sub>i</sub>* are sorted by finish time.
    *   We will show that *S* is also optimal.
    *   If *a<sub>1</sub> = b<sub>1</sub>*, continue to the next step.
    *   If *a<sub>1</sub> != b<sub>1</sub>*, then since the greedy algorithm chooses the activity with the earliest finish time, finish_time(a<sub>1</sub>) <= finish_time(b<sub>1</sub>).
    *   Create a new solution *O' = {a<sub>1</sub>, b<sub>2</sub>, ..., b<sub>m</sub>}*.  Since *a<sub>1</sub>* finishes no later than *b<sub>1</sub>*, *a<sub>1</sub>* does not conflict with *b<sub>2</sub>, ..., b<sub>m</sub>*. Thus, *O'* is a valid solution.
    *   The number of activities in *O'* is the same as in *O*, so *O'* is also optimal.
    *   Now *O'* and *S* both start with the same activity. We can repeat this argument to replace *b<sub>2</sub>* with *a<sub>2</sub>*, *b<sub>3</sub>* with *a<sub>3</sub>*, and so on.
    *   Eventually, either we run out of activities in *O* before *S*, or we have *S = O*.  Since replacing activities did not decrease optimality, *S* must also be optimal.

### 3. Optimal Substructure and Greedy Choice Property

These two properties are foundational for greedy algorithms.

*   **Optimal Substructure:** A problem exhibits optimal substructure if an optimal solution to the problem can be constructed from optimal solutions to its subproblems.  It's important to remember that the greedy algorithm doesn't necessarily *find* all optimal solutions to the subproblems. It simply *assumes* that there exists an optimal solution to the subproblems and proceeds with its greedy choice.
*   **Greedy Choice Property:**  A globally optimal solution can be obtained by making a locally optimal (greedy) choice. This means that the choice made at each step doesn't preclude the possibility of achieving an optimal solution later.

**Examples:**

*   **Minimum Spanning Tree (MST):**
    *   **Optimal Substructure:** If *T* is an MST of graph *G*, then for any edge *(u, v)* in *T*, removing *(u, v)* divides *T* into two subtrees. These subtrees are MSTs of the corresponding subgraphs induced by the vertices in each subtree.
    *   **Greedy Choice Property (Kruskal's Algorithm):** Adding the shortest edge that does not create a cycle will always lead to a global MST.
*   **Huffman Coding:**
    *   **Optimal Substructure:**  Merging the two least frequent characters and solving the smaller problem recursively leads to an optimal code.
    *   **Greedy Choice Property:** The two least frequent characters will always be siblings at the lowest level of the Huffman tree in an optimal code.

**Counter-Example (Where Greedy Fails):**

*   **0-1 Knapsack Problem:** Items cannot be broken. While the fractional knapsack works with a greedy approach, the 0-1 knapsack problem does not guarantee optimal solutions when using a greedy strategy of selecting items based on value-to-weight ratio.  The choice might fill the knapsack preventing higher value solutions down the road.

### 4.  Time Complexity Analysis of Greedy Algorithms

The time complexity of a greedy algorithm depends on the specific problem and the implementation details.  Key factors influencing complexity include:

*   **Sorting:** Many greedy algorithms require sorting the input data (e.g., by finish time in activity selection, by weight in fractional knapsack). Sorting usually contributes *O(n log n)* time complexity.
*   **Iteration:** The main loop in the greedy algorithm often iterates through the sorted data, contributing *O(n)* time complexity.
*   **Data Structures:** The choice of data structures can impact the time complexity. For example, using a priority queue (heap) for selecting the minimum element (e.g., in Dijkstra's algorithm or Prim's algorithm) can lead to *O(log n)* cost for each selection.

**Examples:**

*   **Activity Selection:** Sorting activities by finish time takes *O(n log n)*.  Iterating through the sorted activities takes *O(n)*.  Therefore, the overall time complexity is *O(n log n)*.
*   **Fractional Knapsack:** Sorting items by value-to-weight ratio takes *O(n log n)*.  Iterating through the sorted items to fill the knapsack takes *O(n)*.  Therefore, the overall time complexity is *O(n log n)*.
*   **Kruskal's Algorithm (MST):** Sorting edges takes *O(E log E)*.  The disjoint set data structure (for cycle detection) operations take almost constant time (amortized *O(α(V))*, where α is the inverse Ackermann function, which grows extremely slowly).  The overall time complexity is dominated by sorting, so it's *O(E log E)*, where E is the number of edges.
*   **Prim's Algorithm (MST):** Using a priority queue (heap) for selecting the minimum-weight edge connected to the current tree, each edge removal and potential vertex addition takes O(log V) time.  The overall time complexity becomes O(E log V), where V is the number of vertices.  Can be optimized to O(E + V log V) using Fibonacci heaps.

### 5. Limitations of Greedy Algorithms

Greedy algorithms are not a universal solution. Their main limitation is that they don't always guarantee an optimal solution.

*   **Lack of Foresight:**  Greedy algorithms make decisions based only on the current state, without considering the potential consequences of their choices in the long run. This can lead to suboptimal solutions.
*   **Myopic View:** They often have a myopic view, focusing only on local optimization, which may prevent them from finding the global optimum.

**Example: The 0-1 Knapsack Problem**

Consider a knapsack with a capacity of 10 and the following items:

| Item | Value | Weight | Value/Weight |
|---|---|---|---|
| 1 | 60 | 5 | 12 |
| 2 | 100 | 4 | 25 |
| 3 | 120 | 6 | 20 |

A greedy algorithm, selecting items based on the value-to-weight ratio, would choose item 2 first (weight 4, value 100). Then, it would choose item 1 (weight 5, value 60). The knapsack is now full (4 + 5 = 9 <= 10). The total value is 160.

However, the optimal solution is to choose items 1 and 3 (weight 5 + 6 = 11 > 10... whoops, typo in original question!  If the knapsack has capacity 11) this total value is 180 (60 + 120). The greedy algorithm failed to find the optimal solution.  If the original knapsack capacity was 10, then choosing items 2 and 3 for a total value of 220 is optimal - completely missed by the greedy approach.  The inability to break items is why greedy fails here.

**When Greedy Algorithms are Likely to Fail:**

*   When the problem requires considering a combination of factors, and a simple "best at the moment" approach is insufficient.
*   When decisions have long-term consequences that are not immediately apparent.
*   When the objective function is not easily expressed as a sum of independent contributions.
*   When the problem requires exploring multiple options or backtracking.

### 6. Important Points to Remember

*   **Greedy algorithms are efficient:** Often provide solutions with relatively low time complexity (e.g., *O(n log n)* or *O(n)*).
*   **Correctness is paramount:** Always prove the correctness of a greedy algorithm before using it.  Just because it "seems right" doesn't mean it is.
*   **Optimal substructure and greedy choice property are key:** Ensure that the problem exhibits these properties before attempting a greedy solution.
*   **Greedy algorithms are not a panacea:**  Recognize their limitations and understand when they are not applicable. Consider dynamic programming or other techniques when a greedy approach is not guaranteed to work.
*   **Examples:**  Familiarize yourself with classic greedy algorithms like activity selection, fractional knapsack, Huffman coding, Dijkstra's algorithm, Kruskal's algorithm, and Prim's algorithm.

---

### Practice Questions / Exercises

1.  **Prove the correctness of the fractional knapsack algorithm using an exchange argument.**

    *   **Answer:**
        *   Assume the greedy algorithm sorts items by value-to-weight ratio and fills the knapsack optimally, resulting in a set of items S.
        *   Assume there exists a different optimal solution S' with a higher total value.
        *   Iterate through the items in S and S' simultaneously. Let i be the first index where S[i] and S'[i] differ.
        *   Since S and S' differ at index i, either S'[i] has a lower value-to-weight ratio than S[i] (or S'[i] may not even exist).
        *   If S'[i] has a lower value-to-weight ratio, replace a portion of S'[i] with a portion of S[i] until either S[i] is exhausted or S'[i] has the same value-to-weight ratio as S[i].
        *   Since S[i] has a higher value-to-weight ratio, replacing a portion of S'[i] with S[i] will increase the total value of S' (or at least maintain it). This contradicts the assumption that S' was an optimal solution with a higher total value. Therefore, the greedy algorithm's solution S must also be optimal.

2.  **Design a greedy algorithm for the "Coin Change" problem (given a set of coin denominations and an amount, find the minimum number of coins to make that amount) and analyze its correctness.**

    *   **Algorithm:** Repeatedly choose the largest denomination coin that is less than or equal to the remaining amount until the amount becomes zero.

    *   **Correctness:** The greedy algorithm is optimal for *canonical coin systems* such as US currency (1, 5, 10, 25 cents). However, it's **not** optimal for all coin systems.

        *   **Example where greedy fails:** Denominations {1, 3, 4} and amount 6.
            *   Greedy: 4 + 1 + 1 = 3 coins
            *   Optimal: 3 + 3 = 2 coins

    *   **Analysis:** Sorting the coins by denomination takes O(n log n). Iterating through the sorted coins to make change takes O(n). Therefore, the time complexity is O(n log n).

3.  **Explain why Dijkstra's algorithm is a greedy algorithm.**

    *   **Answer:** Dijkstra's algorithm is a greedy algorithm because at each step, it chooses the unvisited vertex with the smallest distance from the source vertex. It greedily expands the set of visited vertices by adding the closest unvisited vertex. This locally optimal choice (choosing the closest vertex) eventually leads to the globally optimal solution (the shortest paths to all vertices). The greedy choice property is satisfied because once a vertex is marked as visited, its shortest distance from the source is known and will not change.

4.  **Consider the problem of scheduling jobs with deadlines and profits.  Each job *i* has a deadline *d<sub>i</sub>* and a profit *p<sub>i</sub>*.  You can only perform one job at a time. Your goal is to maximize the total profit.  Discuss whether a greedy algorithm can solve this problem optimally. If so, describe the algorithm and prove its correctness. If not, provide a counterexample.**

    *   **Greedy Approaches & Limitations:**

        *   **Greedy by Profit:** Sort jobs in decreasing order of profit. While intuitive, this doesn't consider deadlines. You might pick a high-profit job that is impossible to schedule.
        *   **Greedy by Deadline:** Sort jobs in increasing order of deadline. This might miss out on high-profit jobs with slightly later deadlines.
        *   **Greedy by Profit Density (Profit / Deadline):** This seems promising, but is also not guaranteed to be optimal.

    *   **Counterexample:**  Consider the following jobs:
        *   Job 1: Deadline = 2, Profit = 100
        *   Job 2: Deadline = 1, Profit = 10
        *   Job 3: Deadline = 2, Profit = 15

        *   Greedy by Profit: Job 1 (100), then Job 3 (15). Total profit: 115. Job 2 is skipped because it has a lower profit.
        *   Optimal: Job 2 (10), then Job 1 (100).  Total Profit: 110.  However, if we swap jobs 1 and 3 so the deadlines are 1 and 2 respectively, we will make 115 if we pick job 1 first.
        *   Optimal:  Job 3 (15) then job 1(100) Total Profit = 115 - same as greedy.
        *   However - Job 1 Deadline = 1 , Profit = 100 Job 2 Deadline = 1 Profit = 10 Job 3 Deadline = 2 Profit = 15 The greedy algorithmn would pick Job 1 and be unable to pick Job 3. But the optimal would be to pick job 2, then job 3.

    *   **Conclusion:** A simple greedy algorithm (by profit, deadline, or profit density) does not guarantee an optimal solution for this scheduling problem. This problem is generally solved using Dynamic Programming or Branch and Bound techniques.  It can be a difficult problem.
