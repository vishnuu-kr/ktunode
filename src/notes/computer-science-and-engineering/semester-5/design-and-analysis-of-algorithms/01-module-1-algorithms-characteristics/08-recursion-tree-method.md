---
title: "Recursion Tree Method"
subject: "DESIGN AND ANALYSIS OF ALGORITHMS"
module: "Module 1: Algorithms – Characteristics"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b548"
status: "completed"
scrapedAt: "2026-05-20T16:45:31.774Z"
---
## DESIGN AND ANALYSIS OF ALGORITHMS - Module 1: Algorithms – Characteristics - Recursion Tree Method

**Subject:** DESIGN AND ANALYSIS OF ALGORITHMS
**Module:** Module 1: Algorithms – Characteristics
**Topic:** Recursion Tree Method
**Description:** Topic Recursion Tree Method from Module 1: Algorithms – Characteristics

**Learning Outcomes:**

*   Understand the concept of recursion and its representation as a tree.
*   Learn how to construct a recursion tree for a given recursive algorithm.
*   Analyze the cost of each level of the recursion tree.
*   Use the recursion tree to determine an asymptotic bound on the running time of the recursive algorithm.
*   Identify when the recursion tree method is most useful.
*   Recognize the limitations of the recursion tree method.

---

### 1. Introduction to Recursion and Recursion Trees

*   **Definition of Recursion:** Recursion is a programming technique where a function calls itself directly or indirectly. It involves breaking down a problem into smaller, self-similar subproblems until a base case is reached.

*   **Base Case:** The condition that stops the recursive calls and returns a value.  Without a base case, recursion will continue indefinitely, leading to a stack overflow error.

*   **Recursive Step:** The part of the function that calls itself with a modified input, moving closer to the base case.

*   **Recursion Tree:** A graphical representation of the execution of a recursive algorithm.  Each node in the tree represents the cost of a single subproblem or a single call to the recursive function.
    *   The root represents the initial call to the function.
    *   Each child of a node represents a recursive call made by that node.
    *   The leaves represent the base cases.

### 2. Constructing a Recursion Tree

*   **Steps to Construct a Recursion Tree:**
    1.  **Start with the initial call:** Represent the initial call to the recursive function as the root node of the tree. Write down the cost of this initial call, *excluding* the recursive calls. This cost usually represents the work done outside the recursive calls, such as splitting the input or combining results.
    2.  **Expand each node:** For each node, determine the recursive calls it makes. Create child nodes for each recursive call, labeling them with the cost of that recursive call (excluding its own recursive calls).  This process is also often called expansion or unfolding the recursion.
    3.  **Continue expanding:** Repeat step 2 for each child node until you reach the base case (leaves).  The base case nodes will have a cost, usually represented by a constant.
    4.  **Label the input size for each node:** Track how the input size `n` changes at each level of the tree. This is crucial for calculating the cost at each level.

*   **Example:** Consider the recursive function for the Fibonacci sequence:

    ```python
    def fibonacci(n):
        if n <= 1:
            return n
        else:
            return fibonacci(n-1) + fibonacci(n-2)
    ```

    *   The cost of the root node `fibonacci(n)` (excluding recursive calls) is constant, say `c`.  It involves just adding the results of the recursive calls.
    *   The root has two children: `fibonacci(n-1)` and `fibonacci(n-2)`, each also with a cost of `c` (excluding their children).
    *   The expansion continues until we reach the base cases `fibonacci(1)` and `fibonacci(0)`, which have constant costs.

    **Partial Recursion Tree (Fibonacci):**

    ```
           fibonacci(n)  (Cost: c)
           /           \
       fibonacci(n-1)  fibonacci(n-2) (Cost: c each)
       /       \        /       \
   fib(n-2)  fib(n-3) fib(n-3) fib(n-4)  (Cost: c each)
   ...       ...       ...        ...
    ```

### 3. Analyzing the Cost of Each Level

*   **Level Cost:** The sum of the costs of all the nodes at a particular level of the recursion tree.

*   **Total Cost:** The sum of the costs of all the levels in the recursion tree. This represents the total running time of the recursive algorithm.

*   **Calculating Level Cost:**
    1.  Determine the cost of each node at the level.
    2.  Count the number of nodes at that level.
    3.  Multiply the cost per node by the number of nodes to get the level cost.

*   **Example (Continued Fibonacci):**

    *   Level 0: Cost = `c` (1 node)
    *   Level 1: Cost = `2c` (2 nodes)
    *   Level 2: Cost = `4c` (4 nodes, approximately - it's not perfectly balanced)

    In this case, it's harder to derive an exact cost per level and total cost, which highlights a limitation (discussed later). However, it visually reinforces the exponential nature of the function.

### 4. Determining Asymptotic Bounds

*   **Using the Recursion Tree for Asymptotic Analysis:**

    1.  **Best Case:** Determine the shortest possible path from the root to a leaf.  This often provides a lower bound on the running time.
    2.  **Worst Case:** Determine the longest possible path from the root to a leaf.  This often provides an upper bound on the running time.
    3.  **Summing the Costs:**  Estimate the total cost by summing the level costs. If the tree is balanced (or reasonably balanced), this can be simplified.
    4.  **Identify Dominant Term:** Identify the term that dominates the growth of the total cost as the input size `n` increases. This term determines the asymptotic bound (Big O, Big Theta, Big Omega).

*   **Master Theorem (Relevance):** The recursion tree method helps to *visualize* why the Master Theorem works.  The Master Theorem provides a direct formula to determine the asymptotic complexity of divide-and-conquer algorithms with a specific recurrence relation form, which the recursion tree method helps understand.

*   **Example: Merge Sort**

    *   Recurrence Relation: `T(n) = 2T(n/2) + O(n)`
    *   Cost at each level: `O(n)`
    *   Number of levels: `log₂n`
    *   Total Cost: `O(n log n)` (visualized by recursion tree)

    **Recursion Tree (Merge Sort):**

    ```
            O(n)
           /    \
      O(n/2)   O(n/2)
     /   \     /   \
  O(n/4) O(n/4) O(n/4) O(n/4)
   ...   ...    ...   ...
    ```

    Each level performs `O(n)` work, and there are `log₂n` levels.

### 5. When the Recursion Tree Method is Most Useful

*   **Divide-and-Conquer Algorithms:**  Most effective for analyzing algorithms that divide the problem into subproblems of roughly equal size, like Merge Sort, Quick Sort (average case), and Binary Search.
*   **Visualizing Recurrence Relations:** Helps understand how the work is distributed across different levels of recursion.
*   **Developing Intuition:** Provides a visual understanding of the running time before applying more formal methods like the Master Theorem or substitution method.

### 6. Limitations of the Recursion Tree Method

*   **Inaccurate for Unbalanced Trees:**  If the subproblems are of drastically different sizes (e.g., one subproblem is size `n-1` and the other is size 1), the recursion tree can be difficult to analyze accurately.  The Fibonacci example illustrates this.
*   **Requires Careful Bookkeeping:**  It's crucial to keep track of the cost at each level and the input size at each node. Mistakes can lead to incorrect conclusions.
*   **Not Always Formal Proof:**  The recursion tree method often provides an *educated guess* or *hypothesis* about the running time.  It's often necessary to confirm the guess with a more rigorous method like induction (substitution method).
*   **Complex Recurrences:** For very complex recurrence relations, the recursion tree can become unwieldy and less helpful.

### 7. Practice Questions and Exercises

1.  **Consider the following recurrence relation:  `T(n) = T(n/3) + T(2n/3) + O(n)` .  Draw the recursion tree and determine the asymptotic time complexity.**

    *   **Answer:**
        *   Recursion Tree:  This tree will be unbalanced because the subproblems have different sizes (`n/3` and `2n/3`).
        *   Cost per level: `O(n)`
        *   Longest path: The path corresponding to `2n/3` calls takes longer to reach a base case. The height of this path is roughly `log₃/₂n`.
        *   Shortest Path: The path corresponding to `n/3` calls is shorter and takes `log₃ n`.
        *   Asymptotic Time Complexity:  The total cost is still `O(n log n)`. While the tree is unbalanced, each level costs `O(n)`, and the height of the tree is proportional to `log n`. Since most nodes are near the top, the unbalanced nature does not dramatically alter the final estimate.  More rigorous proof (e.g., with substitution) would be needed for full certainty.

2.  **Draw the recursion tree for `T(n) = 4T(n/2) + n`.  What is the total work done at the leaf level?  What is the height of the tree? What is the total time complexity?**

    *   **Answer:**
        *   Recursion Tree: Each node spawns 4 children, each with input size n/2.
        *   Cost at root: `n`
        *   Cost at level 1: `4 * (n/2) = 2n`
        *   Cost at level 2: `16 * (n/4) = 4n`
        *   Cost at level `k`:  `4^k * (n / 2^k) = n * 2^k`
        *   Height of the tree:  We stop when `n / 2^k = 1`, which means `n = 2^k`, so `k = log₂n`.
        *   Total Work at Leaf Level: There are `4^(log₂n) = n^(log₂4) = n^2` leaves.  Each leaf contributes constant work (O(1)). Therefore the total work is O(n^2).
        *   Total Time Complexity: Summing costs, T(n) = n + 2n + 4n + ... + n2  =  n(1 + 2 + 4 + ... + n) ≈ O(n^2). This can be formally proven with induction. Note: This example fits case 3 of the Master Theorem, confirming the O(n^2) result.

3.  **For the recurrence relation `T(n) = 2T(n-1) + 1`, construct the recursion tree and analyze its complexity.**

    *   **Answer:**
        *   Each node spawns 2 children with input size `n-1`.
        *   Tree becomes increasingly wide exponentially quickly.
        *   Height of the tree: `n`
        *   Total cost is `2^n + 2^(n-1) + ... + 1 = O(2^n)`. This represents an exponential time complexity.

### 8. Important Points to Remember

*   The recursion tree method is a visualization tool, not always a formal proof.
*   Carefully track the cost at each level and the input size.
*   The method is most useful for divide-and-conquer algorithms with balanced subproblems.
*   Be aware of the limitations and consider more formal methods for complex recurrences or unbalanced trees.
*   Recursion trees can provide valuable intuition about the running time of recursive algorithms.
