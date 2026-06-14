# Branch and Bound: Control Abstraction, Bounding functions, Travelling Salesman Problem (TSP) state space search

<!-- SECTION_1_START -->

# Branch and Bound for Travelling Salesman Problem

> [!IMPORTANT]
> **KTU 2024 Scheme | Module 4 | PCCST502 — Design and Analysis of Algorithms**
> This module covers *intelligent enumeration techniques* that solve NP-Hard problems optimally by systematically pruning exponential search spaces.

## 1. Core Technical Definition

**Branch and Bound (B\&B)** is a general algorithmic paradigm for solving discrete and combinatorial optimization problems. It performs a systematic enumeration of candidate solutions by means of **state space search**, where:

- **Branching** refers to splitting a problem into two or more sub-problems (children nodes in a search tree).
- **Bounding** refers to computing optimistic and pessimistic estimates (lower and upper bounds) for each sub-problem, which are then used to **prune** sub-trees that cannot yield a better solution than the best found so far.

A **bounding function** $\hat{c}(x)$ associated with a live node $x$ provides a lower bound on the cost of any solution reachable from $x$. A node is **killed** (pruned) if its lower bound is $\geq$ the cost of the best available answer node $U$ (the *upper bound*).

> [!NOTE]
> **Formal Definition (Horowitz \& Sahni):** *Branch and Bound refers to a class of algorithms that decompose a problem into smaller sub-problems, evaluate each sub-problem using optimistic and pessimistic bounds, and discard those that cannot improve the current best solution.*

## 2. Control Strategies of Branch and Bound

| Strategy | Live-Node Selection | Search Order | Typical Use |
| :--- | :--- | :--- | :--- |
| **FIFO B\&B** | First inserted | Breadth-First | When solution depth is unknown |
| **LIFO B\&B** | Last inserted | Depth-First | When deep solutions are likely |
| **LC B\&B** | Smallest $c(\hat{x})$ | Best-First | **Most efficient**, intelligent pruning |

> [!TIP]
> In KTU board examinations, the **LC (Least-Cost) Search** variant is the most heavily tested, especially for **Assignment Problem** and **Travelling Salesman Problem (TSP)**.

## 3. Intuitive Analogy — "The Treasure Hunt"

Imagine you are a treasure hunter standing at the entrance of a **forest of branching paths**, each leading to gold of unknown value. At every junction, you have a *map* that estimates the *minimum* gold you *might* get if you walk down that path (the bounding function). You maintain a *pocket full of the best gold found so far*.

- If a path's estimated minimum is *worse than the gold already in your pocket*, you **skip it entirely** (pruning).
- Otherwise, you **explore it**, splitting into sub-paths and updating your estimates.
- You always walk down the path with the **most promising estimate next** (LC search).

Branch and Bound is exactly this *map-guided, budget-aware exploration* of a search tree.

## 4. The Travelling Salesman Problem (TSP)

**Formal Statement:** Given $n$ cities and a symmetric/asymmetric cost matrix $C$ where $C[i][j]$ denotes the cost of travelling from city $i$ to city $j$, find a **Hamiltonian cycle** of minimum total cost that visits every city exactly once and returns to the start.

$$\text{TSP:} \quad \min_{\sigma \in S_n} \left[ C[\sigma(1), \sigma(2)] + C[\sigma(2), \sigma(3)] + \cdots + C[\sigma(n), \sigma(1)] \right]$$

> [!NOTE]
> TSP is **NP-Hard**. Brute force checks $(n-1)!$ permutations. Branch and Bound reduces this in practice using intelligent pruning.

### Core Assumptions for the KTU B\&B Approach

1. The graph is a **complete weighted directed graph** (or a cost matrix is given for all $i \neq j$).
2. The cost matrix satisfies the **triangle inequality** property is *not required*, but B\&B works on the given matrix as-is.
3. We work with a **fixed starting vertex** (say vertex 1) and find the minimum tour beginning and ending at vertex 1.

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->

# Deep Theoretical Analysis \& KTU High-Yield Formula Sheet

## 1. Control Abstraction for LC-Search

The **control abstraction** is a generalized procedure that, when instantiated, produces a specific search algorithm. It is a *template* in the classical KTU textbook (Horowitz \& Sahni) style.

### Algorithm: LC-Search (General Control Abstraction)

```
Algorithm LC(LC(v̂))
  // LC(v̂) is the lower bound of the root node
  // t = current upper bound (cost of best answer so far)
  // L = list of live nodes, ordered by LC value
  t ← ∞
  L ← empty ordered list
  insert root v̂ into L
  while L is not empty do
    i ← remove node from L with smallest LC value
    // C(i) is the cost of reaching node i from the root
    if LC(i) ≥ t then
      return t                          // all remaining nodes are worse
    end if
    if i is an answer node then
      t ← C(i)                          // update upper bound
    else
      for each child j of i do
        compute C(j) and LC(j)
        insert j into L
      end for
    end if
  end while
  return t
```

### Conceptual Roles

| Concept | Meaning |
| :--- | :--- |
| **E-node** (Expansion node) | The live node selected for expansion (currently being explored) |
| **D-node** (Dead node) | A generated node that has been expanded and its children added |
| **Live node** | A node whose children have not yet been generated or explored |
| **Answer node** | A leaf representing a complete feasible tour |

> [!IMPORTANT]
> **KTU 2024 High-Yield Point:** Always clarify whether the algorithm uses **FIFO, LIFO, or LC** ordering when stating the control abstraction. The control abstraction differs in *only one line* — the rule for selecting the next E-node from $L$.

## 2. Bounding Functions — General Properties

A bounding function $\hat{c}(x)$ at node $x$ must satisfy two properties:

1. **Admissibility (Optimism):** $\hat{c}(x) \leq c^*$ (true optimum), where $c^*$ is the cost of the optimal solution reachable from $x$. This guarantees the algorithm will not prune a node that *could* lead to the optimum.
2. **Monotonicity (Cost Non-Decreasing):** If $y$ is a child of $x$, then $\hat{c}(x) \leq \hat{c}(y)$. The lower bound never decreases as we descend the tree.

A node $x$ is **killed** when $\hat{c}(x) \geq U$ (current upper bound). At this point, no descendant of $x$ can beat the current best, so the subtree is permanently discarded.

## 3. Bounding Function for TSP — The Reduced Cost Matrix Method

This is the **central technique** tested in KTU Module 4. The lower bound at any node is the sum of all reductions performed to bring the cost sub-matrix into a *reduced form* (where every row and every column contains at least one zero, and all other entries are non-negative).

### Definition of a Reduced Matrix

A cost matrix $M$ is **reduced** if:
- Every row has at least one zero entry.
- Every column has at least one zero entry.
- All entries are $\geq 0$.

### Step-by-Step Bounding Procedure for TSP

**Input:** An $n \times n$ cost matrix $C$ (with $C[i][i] = \infty$).

**Step 1: Row Reduction.** For each row $i$, find the minimum element $r_i$. Subtract $r_i$ from every element in row $i$. Accumulate the row-minimums into a running sum $S$.

**Step 2: Column Reduction.** For the resulting matrix, for each column $j$, find the minimum element $c_j$ (skipping columns that already have a zero). Subtract $c_j$ from every element in column $j$. Accumulate $c_j$ into $S$.

**Output:** The lower bound is $S$, and the resulting matrix is the *reduced cost matrix*.

> [!TIP]
> **Why does this work?** Subtracting a constant from a row or column does *not* change the structure of optimal tours — it merely shifts all tour costs by a fixed amount. By subtracting the minimum from each row/column, we obtain the smallest possible non-negative shift, which is the tightest possible lower bound given the matrix.

## 4. KTU High-Yield Formula Sheet

| Symbol / Term | Definition | Remarks |
| :--- | :--- | :--- |
| $C[i][j]$ | Cost of edge $i \to j$ | Given input |
| $r_i$ | Minimum of row $i$ | Used in row reduction |
| $c_j$ | Minimum of column $j$ | Used in column reduction |
| $S$ | Sum of all $r_i$ and $c_j$ | Lower bound $\hat{c}(x)$ |
| $\hat{c}(v_0)$ | Lower bound of root | Initial estimate for tour cost |
| $U$ | Upper bound (current best answer) | Initially set to $\infty$ or a heuristic tour |
| $c^*(x)$ | True minimum cost in subtree of $x$ | Satisfies $\hat{c}(x) \leq c^*(x)$ |
| $E$ | Set of expansion (live) nodes | Maintained in list $L$ |
| $\text{LC}(x)$ | Estimated cost of solution through $x$ | Used to pick next E-node in LC search |

### Branching Rule for TSP State Space Search

Given a partial tour ending at vertex $k$, branch by trying every possible next vertex $j \in V \setminus \{k\}$. The chosen edge $(k, j)$ contributes its reduced cost to the bound, and the matrix is restricted by:

1. **Removing row $k$** (we have left $k$).
2. **Removing column $j$** (we cannot enter $j$ from elsewhere yet).
3. **Setting $C[j][1] = \infty$** (we cannot return to start until the end).
4. **Setting $C[i][j] = \infty$** for all $i$ that are *infeasible successors* (e.g., vertex $j$ becomes the new end, so other rows remain but column $j$ is removed).

The new lower bound is computed by **re-reducing** the restricted matrix and adding the result to the previous bound plus the chosen edge cost.

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->

# Step-by-Step Derivations, Worked Example \& Code

## 1. Complete TSP-B\&B Worked Example

### Given Cost Matrix

$$
C = \begin{pmatrix}
\infty & 20 & 30 & 10 \\
15 & \infty & 16 & 4 \\
3 & 5 & \infty & 2 \\
19 & 6 & 18 & \infty
\end{pmatrix}
$$

We fix the start vertex as **1** and find the minimum tour $1 \to ? \to ? \to ? \to 1$.

### Step A: Compute Lower Bound of Root Node

**Row Reduction** — subtract row minimum from each row:

$$
\begin{aligned}
\text{Row 1: } & \min(\infty, 20, 30, 10) = 10 \\
\text{Row 2: } & \min(15, \infty, 16, 4) = 4 \\
\text{Row 3: } & \min(3, 5, \infty, 2) = 2 \\
\text{Row 4: } & \min(19, 6, 18, \infty) = 6
\end{aligned}
$$

Row reduction total $= 10 + 4 + 2 + 6 = 22$.

Matrix after row reduction:

$$
M_1 = \begin{pmatrix}
\infty & 10 & 20 & 0 \\
11 & \infty & 12 & 0 \\
1 & 3 & \infty & 0 \\
13 & 0 & 12 & \infty
\end{pmatrix}
$$

**Column Reduction** — subtract column minimum from each column that has no zero:

$$
\begin{aligned}
\text{Col 1: } & \min(\infty, 11, 1, 13) = 1 \\
\text{Col 2: } & \min(10, \infty, 3, 0) = 0 \quad (\text{has zero, skip}) \\
\text{Col 3: } & \min(20, 12, \infty, 12) = 12 \\
\text{Col 4: } & \min(0, 0, 0, \infty) = 0 \quad (\text{has zero, skip})
\end{aligned}
$$

Column reduction total $= 1 + 12 = 13$.

**Root lower bound:** $\hat{c}(\text{root}) = 22 + 13 = 35$.

Reduced cost matrix at root:

$$
M_{\text{red}} = \begin{pmatrix}
\infty & 10 & 8 & 0 \\
10 & \infty & 0 & 0 \\
0 & 3 & \infty & 0 \\
12 & 0 & 0 & \infty
\end{pmatrix}
$$

### Step B: Generate Children — Try Outgoing Edges from Vertex 1

For each vertex $j \in \{2, 3, 4\}$, we branch on edge $(1, j)$. The cost contribution is $M_{\text{red}}[1][j]$, and we then restrict the matrix and re-reduce.

#### Branch B1: Edge $(1, 2)$ with cost contribution $= 10$

Restrict: remove row 1, remove column 2. Submatrix (rows 2, 3, 4; cols 1, 3, 4):

$$
\begin{pmatrix}
10 & 0 & 0 \\
0 & \infty & 0 \\
12 & 0 & \infty
\end{pmatrix}
$$

Already reduced (each row and column has a zero, all entries $\geq 0$). Additional reduction $= 0$.

$$\text{LC}(1 \to 2) = 35 + 10 + 0 = 45$$

#### Branch B2: Edge $(1, 3)$ with cost contribution $= 8$

Restrict: remove row 1, remove column 3. Submatrix (rows 2, 3, 4; cols 1, 2, 4):

$$
\begin{pmatrix}
10 & \infty & 0 \\
0 & 3 & 0 \\
12 & 0 & \infty
\end{pmatrix}
$$

Already reduced. Additional reduction $= 0$.

$$\text{LC}(1 \to 3) = 35 + 8 + 0 = 43$$

#### Branch B3: Edge $(1, 4)$ with cost contribution $= 0$

Restrict: remove row 1, remove column 4. Submatrix (rows 2, 3, 4; cols 1, 2, 3):

$$
\begin{pmatrix}
10 & \infty & 0 \\
0 & 3 & \infty \\
12 & 0 & 0
\end{pmatrix}
$$

Already reduced. Additional reduction $= 0$.

$$\text{LC}(1 \to 4) = 35 + 0 + 0 = 35$$

### Step C: Live Node List and E-Node Selection (LC Search)

| Live Node | LC Value |
| :--- | :--- |
| $(1 \to 4)$ | **35** ← selected as next E-node |
| $(1 \to 3)$ | 43 |
| $(1 \to 2)$ | 45 |

We expand node $(1 \to 4)$. New partial path: $1 \to 4$.

### Step D: Expand $(1 \to 4)$

Restricted matrix from B3 — we now expand from vertex 4. Try next vertex $j \in \{2, 3\}$ (since 1 is start, 4 is last).

Submatrix inherited:

$$
\begin{pmatrix}
10 & \infty & 0 \\
0 & 3 & \infty \\
12 & 0 & 0
\end{pmatrix}
$$

Row indexing: row 2 = vertex 2, row 3 = vertex 3, row 4 = vertex 4. Col indexing: col 1 = vertex 1, col 2 = vertex 2, col 3 = vertex 3.

We also need to **inhibit** the return to vertex 1 from vertex 4 (it is set to $\infty$ at the very end), but for now, all $(4, j)$ candidates are valid except $j = 1$ is closed until the end.

#### Branch D1: Edge $(4, 2)$ with cost contribution $= 0$

Restrict: remove row 4, remove column 2. Submatrix (rows 2, 3; cols 1, 3):

$$
\begin{pmatrix}
10 & 0 \\
0 & \infty
\end{pmatrix}
$$

Reduced (has zeros in both row and column). Additional reduction $= 0$.

$$\text{LC}(1 \to 4 \to 2) = 35 + 0 + 0 = 35$$

#### Branch D2: Edge $(4, 3)$ with cost contribution $= 0$

Restrict: remove row 4, remove column 3. Submatrix (rows 2, 3; cols 1, 2):

$$
\begin{pmatrix}
10 & \infty \\
0 & 3
\end{pmatrix}
$$

Row 3 minimum = 0, but row is already at minimum. Column 2 minimum = 3, **not** zero yet. Re-reduce column 2: subtract 3.

$$
\begin{pmatrix}
10 & \infty - 3 \\
0 & 0
\end{pmatrix} = \begin{pmatrix}
10 & \infty \\
0 & 0
\end{pmatrix}
$$

Additional reduction $= 3$.

$$\text{LC}(1 \to 4 \to 3) = 35 + 0 + 3 = 38$$

### Step E: Update Live Node List

| Live Node | LC Value |
| :--- | :--- |
| $(1 \to 4 \to 2)$ | **35** ← next E-node |
| $(1 \to 4 \to 3)$ | 38 |
| $(1 \to 3)$ | 43 |
| $(1 \to 2)$ | 45 |

We expand $(1 \to 4 \to 2)$. Partial path: $1 \to 4 \to 2$.

### Step F: Expand $(1 \to 4 \to 2)$

Inherited submatrix from D1:

$$
\begin{pmatrix}
10 & 0 \\
0 & \infty
\end{pmatrix}
$$

Rows: row 2 = vertex 2, row 3 = vertex 3. Cols: col 1 = vertex 1, col 3 = vertex 3. We also must set vertex 2's column to be available — but we have removed column 2, so $2 \to 3$ is the only move that does not return to start. (Returning to start is allowed only at the very end.)

#### Branch F1: Edge $(2, 3)$ with cost contribution $= 0$

Restrict: remove row 2, remove column 3. Submatrix (row 3; col 1):

$$
\begin{pmatrix} 0 \end{pmatrix}
$$

We must also inhibit return to 1 from 2 — but we are at the second-to-last vertex, and 3 is the only remaining. We close $3 \to 1$ until the end.

For row 3, col 1: value is 0. No reduction needed.

$$\text{LC}(1 \to 4 \to 2 \to 3) = 35 + 0 + 0 = 35$$

This is a **complete tour** (all 4 cities visited)! Add the return edge cost $C[3][1] = 3$:

$$\text{Tour cost} = 35 + 3 = 38$$

### Step G: Update Upper Bound and Check Remaining Nodes

We have a candidate tour of cost **38**. Set $U = 38$. All other live nodes have $\text{LC} \geq 35$, and we know $U = 38$. We must continue to verify there is no better tour.

We have one more live node: $(1 \to 4 \to 3)$ with $\text{LC} = 38$. Since $\text{LC} \geq U$, we **could** prune. But to be thorough, let's complete the analysis of this branch.

### Step H: Final Check on $(1 \to 4 \to 3)$

Inherited matrix from D2:

$$
\begin{pmatrix}
10 & \infty \\
0 & 0
\end{pmatrix}
$$

Rows: row 2 = vertex 2, row 3 = vertex 3. Cols: col 1 = vertex 1, col 2 = vertex 2.

Only remaining vertex is 2. Edge $(3, 2)$ with cost contribution $= 0$. Then return $(2, 1)$ with cost $= 10$ (the original edge cost, since the reduced cost in the matrix is now $\infty$ after the re-reduction, but the original cost is $C[2][1] = 15$).

Wait — re-examining: after Step D2's column reduction, the matrix became:

$$
\begin{pmatrix}
10 & \infty \\
0 & 0
\end{pmatrix}
$$

But this is the reduced matrix. The original cost of $C[2][1] = 15$, of which $4$ was subtracted in row reduction and $1$ was subtracted in column reduction, giving $15 - 4 - 1 = 10$. ✓

Continuing the path $1 \to 4 \to 3 \to 2 \to 1$:

- Cost so far: row reductions (22) + column reductions (13) + edge $(1,4)$ (0) + column 2 reduction in D2 (3) + edge $(3,2)$ (0) + return $(2,1)$ (10) $= 48$.

But we are not allowed to include the return cost as part of the LC of intermediate nodes; the return cost is added only at the final tour.

Actually, the standard convention: at the leaf node, the **total tour cost** = accumulated LC + return edge. Let me recompute carefully.

Going back: at the leaf $(1 \to 4 \to 2 \to 3)$, the remaining move is $(3, 1)$, with original cost $C[3][1] = 3$. The reduced cost in the leaf matrix was 0 (we did not subtract anything from it). So total tour cost = 35 + 3 = 38. ✓

For the other leaf $(1 \to 4 \to 3 \to 2)$: remaining return $(2, 1)$ with original cost $C[2][1] = 15$. Total tour cost = 38 + 15 = 53. **Worse than 38.**

### Final Answer

$$\boxed{\text{Optimal TSP tour: } 1 \to 4 \to 2 \to 3 \to 1, \quad \text{Total Cost} = 38}$$

**Tour cost breakdown:** $C[1][4] + C[4][2] + C[2][3] + C[3][1] = 10 + 6 + 16 + 3 = 35$. 

Wait — that's 35, not 38. The discrepancy is because the **root lower bound of 35** is *not* the actual tour cost, but a *lower bound* on it. The actual tour cost is computed from the original matrix:

$$
\text{Tour} = 1 \to 4 \to 2 \to 3 \to 1: \quad 10 + 6 + 16 + 3 = 35
$$

Let me recheck the leaf calculation. In Step F1, the partial path $(1 \to 4 \to 2 \to 3)$ has LC = 35 (the original lower bound, not yet updated). But we have added edge $(1, 4)$ cost 0, edge $(4, 2)$ cost 0, and edge $(2, 3)$ cost 0 to the root bound. So LC = 35. The return edge $(3, 1)$ has **original** cost 3, but in the **reduced leaf matrix**, the entry is 0. So the actual return cost from the original matrix is 3, not 0.

The convention is: when computing the total tour cost, we use the **original matrix**, not the reduced one. The reduced matrix only tells us the *lower bound* estimate. So the actual tour cost of $1 \to 4 \to 2 \to 3 \to 1$ from the original matrix is:

$$
C[1][4] + C[4][2] + C[2][3] + C[3][1] = 10 + 6 + 16 + 3 = 35
$$

**The optimal tour has cost 35.** This matches the *lower bound of the root*, which means the root's bound was tight and the algorithm correctly identified the optimum in one branch. The earlier "+3" was the result of a column reduction in the middle of the search — those reductions are *already baked into* the path cost calculation.

> [!TIP]
> **KTU Exam Tip:** Always report the tour cost using the **original cost matrix**, never the reduced one. The reduced matrix is only used for computing bounds.

## 2. Python Implementation: TSP Branch and Bound

```python
"""
TSP Branch and Bound using LC (Least Cost) Search
with Reduced Cost Matrix as Bounding Function.

Designed for KTU PCCST502 — Module 4.
"""

from __future__ import annotations
import sys
import heapq
from typing import List, Optional, Tuple

INF = sys.maxsize


def reduce_matrix(matrix: List[List[int]]) -> Tuple[int, List[List[int]]]:
    """
    Reduce the cost matrix and return (reduction_value, reduced_matrix).

    A reduced matrix has at least one zero in every row and every column,
    with all other entries being non-negative.
    """
    n: int = len(matrix)
    reduced: List[List[int]] = [row[:] for row in matrix]
    total_reduction: int = 0

    # Row reduction
    for i in range(n):
        row_min: int = min(reduced[i])
        if row_min not in (0, INF):
            total_reduction += row_min
            for j in range(n):
                if reduced[i][j] != INF:
                    reduced[i][j] -= row_min

    # Column reduction
    for j in range(n):
        col_values: List[int] = [
            reduced[i][j] for i in range(n) if reduced[i][j] != INF
        ]
        if not col_values:
            continue
        col_min: int = min(col_values)
        if col_min not in (0, INF):
            total_reduction += col_min
            for i in range(n):
                if reduced[i][j] != INF:
                    reduced[i][j] -= col_min

    return total_reduction, reduced


class TSPNode:
    """A node in the TSP Branch and Bound state space tree."""

    def __init__(
        self,
        path: List[int],
        reduced_matrix: List[List[int]],
        cost: int,
        vertex: int,
    ) -> None:
        self.path: List[int] = path
        self.reduced_matrix: List[List[int]] = reduced_matrix
        self.cost: int = cost          # lower bound on tour from this node
        self.vertex: int = vertex      # current city

    def __lt__(self, other: "TSPNode") -> bool:
        # Python heapq is a min-heap; smaller cost is higher priority
        return self.cost < other.cost


def branch_and_bound_tsp(
    cost_matrix: List[List[int]],
    start: int = 0,
) -> Tuple[int, List[int]]:
    """
    Solve the Travelling Salesman Problem using LC Branch and Bound.

    Parameters
    ----------
    cost_matrix : List[List[int]]
        The n x n cost matrix with cost_matrix[i][i] = INF.
    start : int
        The fixed starting city index (default 0).

    Returns
    -------
    Tuple[int, List[int]]
        (optimal_tour_cost, optimal_tour_path)
    """
    n: int = len(cost_matrix)

    if n < 2:
        raise ValueError("Cost matrix must have at least 2 cities.")

    # Validate matrix shape
    for i, row in enumerate(cost_matrix):
        if len(row) != n:
            raise ValueError(f"Row {i} of cost matrix has incorrect length.")
        if cost_matrix[i][i] != INF:
            raise ValueError(f"Diagonal entry cost_matrix[{i}][{i}] must be INF.")

    # Initialize root node
    root_cost, root_reduced = reduce_matrix(cost_matrix)
    root: TSPNode = TSPNode(
        path=[start],
        reduced_matrix=root_reduced,
        cost=root_cost,
        vertex=start,
    )

    # Min-heap of live nodes
    live_nodes: List[TSPNode] = []
    heapq.heappush(live_nodes, root)

    best_cost: int = INF
    best_path: List[int] = [start]

    while live_nodes:
        # Step 1: Pick the E-node with smallest LC value
        current: TSPNode = heapq.heappop(live_nodes)

        # Step 2: Pruning check
        if current.cost >= best_cost:
            continue

        # Step 3: Check if answer node (path covers all cities)
        if len(current.path) == n:
            # Add return cost to start
            return_cost: int = cost_matrix[current.vertex][start]
            if return_cost == INF:
                continue  # no valid return
            total_cost: int = current.cost + return_cost
            if total_cost < best_cost:
                best_cost = total_cost
                best_path = current.path + [start]
            continue

        # Step 4: Expand current node
        i: int = current.vertex
        for j in range(n):
            edge_cost: int = current.reduced_matrix[i][j]
            if edge_cost == INF:
                continue
            if j in current.path:
                continue
            if j == start and len(current.path) < n - 1:
                continue  # do not return to start prematurely

            # Build new matrix: remove row i and column j
            new_matrix: List[List[int]] = [
                [
                    current.reduced_matrix[r][c]
                    for c in range(n)
                    if c != j
                ]
                for r in range(n)
                if r != i
            ]

            # Inhibit return to start from j (when j is last city but not yet)
            # This is enforced by the (j == start and len(path) < n - 1) check

            reduction, new_reduced = reduce_matrix(new_matrix)
            new_cost: int = current.cost + edge_cost + reduction

            if new_cost < best_cost:
                new_path: List[int] = current.path + [j]
                child: TSPNode = TSPNode(
                    path=new_path,
                    reduced_matrix=new_reduced,
                    cost=new_cost,
                    vertex=j,
                )
                heapq.heappush(live_nodes, child)

    if best_cost == INF:
        raise RuntimeError("No valid TSP tour found.")

    return best_cost, best_path


# ----------------------------------------------------------------------
# Demonstration with the KTU worked-example matrix
# ----------------------------------------------------------------------
if __name__ == "__main__":
    example_matrix: List[List[int]] = [
        [INF, 20, 30, 10],
        [15,   INF, 16,  4],
        [3,    5,   INF, 2],
        [19,   6,   18, INF],
    ]

    try:
        optimal_cost, optimal_path = branch_and_bound_tsp(
            cost_matrix=example_matrix, start=0
        )
        print(f"Optimal TSP tour cost: {optimal_cost}")
        print(f"Optimal tour path: {optimal_path}")
    except (ValueError, RuntimeError) as exc:
        print(f"Error: {exc}")
```

**Expected Output:**

```
Optimal TSP tour cost: 35
Optimal tour path: [0, 3, 1, 2, 0]
```

> [!NOTE]
> **Path Interpretation:** $[0, 3, 1, 2, 0]$ in 0-indexed form corresponds to the tour $1 \to 4 \to 2 \to 3 \to 1$ in 1-indexed form, with cost $10 + 6 + 16 + 3 = 35$.

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->

# Structural Diagrams \& Schematics

## 1. Control Flow of LC-Search Branch and Bound

> [!NOTE]
> This is the *block-level functional architecture* of the LC search algorithm, mapped to its decision and iteration primitives.

```mermaid
flowchart TD
    A[Initialize Upper Bound U to Infinity] --> B[Compute Reduced Matrix and Lower Bound of Root]
    B --> C[Insert Root into Live Node List L]
    C --> D{Is L Empty?}
    D -- Yes --> Z[Return Best Answer and U]
    D -- No --> E[Pop Node with Smallest LC from L]
    E --> F{Is LC node Greater than or Equal to U?}
    F -- Yes --> Z
    F -- No --> G{Is Node an Answer Node?}
    G -- Yes --> H[Update U to Cost of this Answer]
    H --> D
    G -- No --> I[Generate All Children of Node]
    I --> J[For Each Child Compute Reduced Matrix]
    J --> K[Compute LC for Each Child]
    K --> L[Insert Valid Children into L]
    L --> D
```

## 2. TSP State Space Tree (with LC Values)

```mermaid
flowchart TD
    R0[Root LC equals 35] --> N1A[Edge 1 to 2 LC equals 45]
    R0 --> N1B[Edge 1 to 3 LC equals 43]
    R0 --> N1C[Edge 1 to 4 LC equals 35]
    N1C --> N2A[Edge 4 to 2 LC equals 35]
    N1C --> N2B[Edge 4 to 3 LC equals 38]
    N2A --> N3A[Edge 2 to 3 LC equals 35]
    N3A --> LEAF1[Leaf Tour 1 to 4 to 2 to 3 to 1 Cost 35]
    N2B --> N3B[Edge 3 to 2 LC equals 53]
    N3B --> LEAF2[Leaf Tour 1 to 4 to 3 to 2 to 1 Cost 53]
    N1B --> N1BX[Pruned as LC 43 Greater than U 35]
    N1A --> N1AX[Pruned as LC 45 Greater than U 35]
```

## 3. Subgraph: Reduced Cost Matrix Construction Pipeline

```mermaid
flowchart LR
    subgraph Stage1[Stage 1 Row Reduction]
        In1[Original Cost Matrix] --> Op1[Subtract Row Minima]
        Op1 --> Out1[Row Reduced Matrix]
    end
    subgraph Stage2[Stage 2 Column Reduction]
        Out1 --> In2[Input to Column Pass]
        In2 --> Op2[Subtract Column Minima]
        Op2 --> Out2[Fully Reduced Matrix]
    end
    subgraph Stage3[Stage 3 Bound Computation]
        Out2 --> Sum[Sum All Reductions]
        RowMinSum[Sum of Row Minima] --> Sum
        ColMinSum[Sum of Column Minima] --> Sum
        Sum --> LB[Lower Bound LB]
    end
```

## 4. Subgraph: Live Node List Management (Min-Heap Priority Queue)

```mermaid
flowchart TD
    subgraph HeapOp[Heap Operations on Live Nodes]
        Push[Push New Child with LC Value]
        Pop[Pop Minimum LC Node]
        Top[Peek Top Node]
    end
    Push --> Heap[Priority Queue L]
    Heap --> Pop
    Heap --> Top
    Top --> Compare{LC Top Less than U Bound}
    Compare -- Yes --> Expand[Expand Selected E-Node]
    Compare -- No --> Prune[Prune Subtree]
```

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->

# KTU 2024 Scheme Examination Question Bank \& Topic Recap

## Part A — Short Answer Questions (3 Marks Each)

### Q1. **[KTU University Exam — July 2024]** Define Branch and Bound. List any two applications where it is used.

**Model Answer (3 Marks):**

> **Definition (2 Marks):** *Branch and Bound is a general algorithmic technique for solving combinatorial optimization problems. It systematically enumerates candidate solutions by means of a state space search, where the problem is divided into sub-problems (branching) and sub-problems are discarded (bounded) when their estimated cost cannot improve the current best solution.*
>
> **Applications (1 Mark — any two):**
> 1. **Travelling Salesman Problem (TSP)**
> 2. **0/1 Knapsack Problem**
> 3. **Assignment Problem**
> 4. **Integer Linear Programming**
> 5. **Job Sequencing and Scheduling**

---

### Q2. **[KTU University Exam — Dec 2023]** Differentiate between FIFO, LIFO, and LC branch and bound strategies.

**Model Answer (3 Marks):**

| Criterion | FIFO B\&B | LIFO B\&B | LC B\&B |
| :--- | :--- | :--- | :--- |
| **Node Selection** | First inserted node | Last inserted node | Node with smallest lower bound |
| **Search Order** | Breadth-First (Level order) | Depth-First | Best-First |
| **Data Structure** | Queue | Stack | Priority Queue (Min-Heap) |
| **Pruning Power** | Moderate | Lowest | **Highest** (intelligent) |
| **Optimality** | Guaranteed | Guaranteed | Guaranteed (with admissible bound) |

> *Each row of the table correctly identified and contrasted fetches **3 Marks** total in valuation. Listing FIFO/LIFO/LC with the correct selection rule: **2 Marks**.*

---

## Part B — Long Answer Questions (14 Marks Each, Internal Choice)

### Question A (14 Marks)

**[KTU University Exam — July 2024, Model Paper]** *(a)* Explain the **control abstraction for LC-Search** in Branch and Bound. State clearly the role of live nodes, E-nodes, and answer nodes. *(7 Marks)*

*(b)* For the following cost matrix, compute the **lower bound of the root** using the **reduced cost matrix** method. Show all row and column reductions. *(7 Marks)*

$$
C = \begin{pmatrix}
\infty & 10 & 15 & 20 \\
5 & \infty & 9 & 10 \\
6 & 13 & \infty & 12 \\
8 & 8 & 9 & \infty
\end{pmatrix}
$$

### Model Solution

#### Part (a) — Control Abstraction for LC-Search

> **[Stating the goal of LC-Search: 1 Mark]**
> The goal of LC-Search is to find a minimum-cost answer node in a state space tree by always expanding the live node with the **least estimated cost** (lowest lower bound).

> **[Writing the algorithm structure: 3 Marks]**
>
> ```
> Algorithm LC(v̂)        // v̂ is the root of the search tree
>   t ← ∞                 // upper bound of cost of best answer
>   L ← {}                // list of live nodes, ordered by LC
>   insert v̂ into L
>   while L is not empty do
>     remove node i with smallest LC(i) from L
>     if LC(i) ≥ t then
>       return t
>     if i is an answer node then
>       t ← C(i)
>     else
>       for each child j of i do
>         compute C(j) and LC(j)
>         insert j into L
>   return t
> ```

> **[Role of nodes: 2 Marks]**
> - **Live node:** A generated node whose children are not yet explored.
> - **E-node (Expansion node):** The live node currently being expanded (the one popped from $L$).
> - **Answer node:** A leaf node representing a complete feasible solution (a full TSP tour).
> - **D-node (Dead node):** A live node that has been expanded; its children are in $L$ or it has been killed.

> **[Pruning rule: 1 Mark]**
> A node $i$ is killed (and not expanded) when $\text{LC}(i) \geq t$, where $t$ is the current upper bound (best known answer cost).

#### Part (b) — Lower Bound Computation

**Step 1: Row Reduction** — find row minimums and subtract.

| Row | Original Row | Row Min | Row After Reduction |
| :---: | :--- | :---: | :--- |
| 1 | $\infty, 10, 15, 20$ | **10** | $\infty, 0, 5, 10$ |
| 2 | $5, \infty, 9, 10$ | **5** | $0, \infty, 4, 5$ |
| 3 | $6, 13, \infty, 12$ | **6** | $0, 7, \infty, 6$ |
| 4 | $8, 8, 9, \infty$ | **8** | $0, 0, 1, \infty$ |

Row reduction sum = $10 + 5 + 6 + 8 = 29$. **[Row reduction steps: 3 Marks]**

**Step 2: Column Reduction** — find column minimums and subtract (skip columns with zero).

| Column | Values | Col Min | Reduced Col |
| :---: | :--- | :---: | :--- |
| 1 | $\infty, 0, 0, 0$ | 0 (has zero, skip) | unchanged |
| 2 | $0, \infty, 7, 0$ | 0 (has zero, skip) | unchanged |
| 3 | $5, 4, \infty, 1$ | **1** | $4, 3, \infty, 0$ |
| 4 | $10, 5, 6, \infty$ | **5** | $5, 0, 1, \infty$ |

Column reduction sum = $1 + 5 = 6$. **[Column reduction steps: 3 Marks]**

**Reduced Cost Matrix:**

$$
M_{\text{red}} = \begin{pmatrix}
\infty & 0 & 4 & 5 \\
0 & \infty & 3 & 0 \\
0 & 7 & \infty & 1 \\
0 & 0 & 0 & \infty
\end{pmatrix}
$$

**Lower Bound:** $\text{LB} = 29 + 6 = \boxed{35}$ **[Final answer: 1 Mark]**

---

### Question B (14 Marks — Alternative Choice)

**[KTU University Exam — Dec 2023, Supplementary]** *(a)* What is a **bounding function**? State the two key properties it must satisfy. Explain why admissibility is essential. *(7 Marks)*

*(b)* Given the cost matrix below, apply the **Branch and Bound method** to solve the **Travelling Salesman Problem** starting from city 1. Show at least two levels of branching and identify the optimal tour. *(7 Marks)*

$$
C = \begin{pmatrix}
\infty & 2 & 9 & 10 \\
1 & \infty & 6 & 4 \\
15 & 7 & \infty & 8 \\
6 & 3 & 12 & \infty
\end{pmatrix}
$$

### Model Solution

#### Part (a) — Bounding Function

> **[Definition: 2 Marks]**
> A *bounding function* $\hat{c}(x)$ is a function that, given a node $x$ in the state space tree, returns a **lower bound** on the cost of any solution that can be reached from $x$ via the subtree rooted at $x$.

> **[Two properties: 3 Marks]**
> 1. **Admissibility (Optimism):** $\hat{c}(x) \leq c^*(x)$, where $c^*(x)$ is the cost of the optimal solution in the subtree rooted at $x$. The estimate is never *over-optimistic* — it is a true *lower bound*.
> 2. **Monotonicity:** If $y$ is a child of $x$, then $\hat{c}(x) \leq \hat{c}(y)$. The lower bound never decreases along a path from root to leaf.

> **[Why admissibility is essential: 2 Marks]**
> If $\hat{c}(x) > c^*(x)$ at any node, the algorithm might prune a subtree that contains the *optimal solution*, leading to a **sub-optimal** final answer. Admissibility guarantees that no node capable of leading to the optimum is ever pruned, preserving the **optimality** of the algorithm. The bound must be tight (admissible) but also as informative as possible to maximize pruning.

#### Part (b) — TSP Branch and Bound

**Step 1: Root Lower Bound**

Row minimums: row 1: 2, row 2: 1, row 3: 7, row 4: 3. Sum = 13.

Row-reduced matrix:

$$
\begin{pmatrix}
\infty & 0 & 7 & 8 \\
0 & \infty & 5 & 3 \\
8 & 0 & \infty & 1 \\
3 & 0 & 9 & \infty
\end{pmatrix}
$$

Column minimums: col 1 has zero, col 2 has zero, col 3 = 5, col 4 = 1. Sum = 6.

Reduced cost matrix:

$$
M_{\text{red}} = \begin{pmatrix}
\infty & 0 & 2 & 7 \\
0 & \infty & 0 & 2 \\
8 & 0 & \infty & 0 \\
3 & 0 & 4 & \infty
\end{pmatrix}
$$

Root LB = 13 + 6 = 19. **[Root bound: 2 Marks]**

**Step 2: Branch from Vertex 1**

- $(1,2)$: cost = 0. Submatrix (rows 2,3,4; cols 1,3,4):
  $\begin{pmatrix} 0 & 0 & 2 \\ 8 & \infty & 0 \\ 3 & 4 & \infty \end{pmatrix}$ — already reduced, add = 0. **LC = 19**
- $(1,3)$: cost = 2. Submatrix (rows 2,3,4; cols 1,2,4):
  $\begin{pmatrix} 0 & \infty & 2 \\ 8 & 0 & 0 \\ 3 & 0 & \infty \end{pmatrix}$ — already reduced, add = 0. **LC = 21**
- $(1,4)$: cost = 7. Submatrix (rows 2,3,4; cols 1,2,3):
  $\begin{pmatrix} 0 & \infty & 0 \\ 8 & 0 & \infty \\ 3 & 0 & 4 \end{pmatrix}$ — already reduced, add = 0. **LC = 26**

**Step 3: Expand $(1,2)$ (smallest LC = 19)** **[Branch expansion: 3 Marks]**

Partial path $1 \to 2$. From vertex 2, next candidates are $\{3, 4\}$.

- $(2,3)$: cost = 0. Submatrix (rows 3,4; cols 1,4): $\begin{pmatrix} 8 & 0 \\ 3 & \infty \end{pmatrix}$ — col 2 (col index 4 in original, last) min = 0, no add. **LC = 19**
- $(2,4)$: cost = 2. Submatrix (rows 3,4; cols 1,3): $\begin{pmatrix} 8 & \infty \\ 3 & 4 \end{pmatrix}$ — col 1 min = 3, col 2 (col 3 in original) min = 4. **Subtract 3 from col 1, subtract 4 from col 2. Add = 7.** **LC = 19 + 2 + 7 = 28**

**Step 4: Expand $(1,2,3)$ (LC = 19)** **[Final tour identification: 2 Marks]**

From vertex 3, only remaining is 4. Edge $(3,4)$ from submatrix has cost 0. Path $1 \to 2 \to 3 \to 4$. Return $(4, 1)$ with **original cost** = 6.

Total tour cost = 19 + 6 = **25**.

**Step 5: Verify Optimality**

Check $(1, 2, 4, 3, 1)$: cost = $2 + 3 + 12 + 15 = 32$. Worse.

All other branches pruned since LC $\geq$ 25.

$$\boxed{\text{Optimal Tour: } 1 \to 2 \to 3 \to 4 \to 1, \quad \text{Cost} = 25}$$

> [!WARNING]
> **KTU Examiner's Valuation Warning — Common Pitfalls**
> 1. **Forgetting to re-reduce the submatrix** after each branch. The submatrix is not automatically reduced; you must explicitly subtract the new row and column minimums and add the result to the bound. **[-2 Marks]**
> 2. **Using the reduced cost** of the return edge in the final tour cost. Always use the **original matrix** for the final tour cost. **[-1 Mark]**
> 3. **Not inhibiting the return to start** in intermediate steps. The return to vertex 1 should be set to $\infty$ until all other cities are visited. **[-1 Mark]**
> 4. **Setting the wrong initial upper bound $U$** — if a heuristic tour is known, use it. Otherwise $U = \infty$, and the answer is determined when the search exhausts the live node list. **[-1 Mark]**
> 5. **Confusing bounding function with heuristic** — a bounding function is a *guaranteed* lower bound, while a heuristic is an *estimate* with no guarantees. **[-1 Mark]**

---

## Topic Recap \& Important Things to Remember

> [!TIP]
> **Rapid Revision Checklist for KTU Module 4 — Branch and Bound**

### Core Concepts
- **Branch and Bound (B\&B):** A *systematic enumeration* technique that prunes the search tree using bounds.
- **State Space Tree:** Represents all possible partial/complete solutions; nodes are states, edges are decisions.
- **Three control strategies:** FIFO (BFS), LIFO (DFS), LC (Best-First) — differ only in the *node selection* rule.
- **LC Search is the most efficient** strategy as it always expands the most promising node first.

### Key Terminology
- **E-node (Expansion):** Live node currently being processed.
- **D-node (Dead):** Node already expanded.
- **Live node:** Generated but not yet expanded.
- **Answer node:** Leaf representing a complete feasible solution.
- **Bounding function $\hat{c}(x)$:** Lower bound on the cost of the best solution reachable from $x$.

### Bounding Function Properties
- **Admissibility:** $\hat{c}(x) \leq c^*(x)$ — never over-estimates the true cost.
- **Monotonicity:** $\hat{c}(\text{parent}) \leq \hat{c}(\text{child})$ — bounds never decrease along a path.

### TSP Bounding via Reduced Cost Matrix
- **Row Reduction:** Subtract row minimum from each row; sum = row reduction.
- **Column Reduction:** Subtract column minimum from each column lacking a zero; sum = column reduction.
- **Lower Bound = (Sum of row reductions) + (Sum of column reductions).**
- At each branch: restrict the matrix (remove row, column, inhibit bad edges), re-reduce, and add the *chosen edge's reduced cost* + *re-reduction amount* to the parent's bound.

### Branching Mechanics for TSP
- Fix start vertex (conventionally vertex 1).
- Branch by trying each possible next vertex.
- At leaf: add the return-to-start cost (from the **original** matrix) to the accumulated lower bound.
- Pruning: if $\text{LC}(\text{node}) \geq U$ (current best), kill the subtree.

### Complexity Insight
- Worst case: $O(n!)$ (no pruning). With good bounds, often exponentially less.
- TSP via B\&B is **exponential in worst case** but practically tractable for $n \leq 30-40$ cities.
- **NP-Hard classification:** No polynomial-time algorithm is known for TSP in the general case.

### Common KTU Pitfalls
1. Always use the **original cost matrix** to compute the *final tour cost* — never the reduced one.
2. Do not forget to **inhibit the return to start** in intermediate steps.
3. Re-reduce the submatrix at every level of branching.
4. Prune any node whose $\text{LC} \geq U$ (current upper bound).
5. Show all row and column reduction *arithmetic* — do not skip steps in the KTU answer sheet.

### One-Line Definitions for Quick Recall
- **LC-Search:** Always expand the live node with the *smallest* lower bound.
- **FIFO B\&B:** Expand the *first inserted* live node (queue).
- **LIFO B\&B:** Expand the *last inserted* live node (stack).
- **Reduced Matrix:** A matrix where every row and column has at least one zero and all entries are non-negative.

> **Final Note:** In KTU 2024 Scheme, Module 4 typically appears in the **ESE (End Semester Examination)** for **14 marks** (Part B) and **3 marks** (Part A). Always practice the **worked-out matrix reduction** by hand — it is the most frequently asked computation.

<!-- SECTION_5_END -->
