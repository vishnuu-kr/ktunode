---
title: "Greedy Algorithms - Introduction to greedy algorithms, Set cover problem, Vertex cover problem. (Chapter 2)"
subject: "APPROXIMATION ALGORITHMS"
module: "Module 1: Basics of Approximation Algorithms "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c377"
status: "completed"
scrapedAt: "2026-05-20T17:00:42.188Z"
---
# APPROXIMATION ALGORITHMS - Module 1: Basics of Approximation Algorithms

## Topic: Greedy Algorithms - Introduction, Set Cover, Vertex Cover

This module introduces the fundamental concepts of approximation algorithms, focusing on greedy strategies and their application to well-known NP-hard problems like Set Cover and Vertex Cover.

---

### 1. Introduction to Greedy Algorithms

**What are Approximation Algorithms?**

*   **Definition:** Approximation algorithms are algorithms designed to find approximate solutions to optimization problems that are known to be computationally intractable (NP-hard). Instead of finding the absolute optimal solution (which might take exponential time), they aim to find a "good enough" solution within a polynomial time bound.
*   **Why do we need them?** Many real-world problems are NP-hard. For instance, finding the shortest route for a delivery truck visiting many cities (Traveling Salesperson Problem) or scheduling tasks to minimize completion time. Exact solutions for these problems are often impossible to find in a practical amount of time for large instances.
*   **Performance Measure:** We measure the quality of an approximation algorithm by its **approximation ratio** (also known as the performance ratio).
    *   **For minimization problems:** $\text{Approximation Ratio} = \frac{\text{Cost of approximate solution}}{\text{Cost of optimal solution}} \geq 1$. A ratio closer to 1 is better.
    *   **For maximization problems:** $\text{Approximation Ratio} = \frac{\text{Value of approximate solution}}{\text{Value of optimal solution}} \leq 1$. A ratio closer to 1 is better.
*   **Polynomial Time:** Approximation algorithms must run in **polynomial time** with respect to the input size.

**What are Greedy Algorithms?**

*   **Definition:** A greedy algorithm makes the locally optimal choice at each stage with the hope of finding a global optimum. It builds up a solution piece by piece, always choosing the next element that offers the most obvious and immediate benefit.
*   **Characteristics:**
    *   **Local Optimality:** At each step, the algorithm makes a choice that seems best at that moment, without considering future consequences.
    *   **Irrevocable Choices:** Once a choice is made, it cannot be undone.
*   **Pros:**
    *   Often simple to design and understand.
    *   Usually run very fast (polynomial time).
*   **Cons:**
    *   Do not always produce the optimal solution for all problems.
    *   Can sometimes perform poorly on certain instances.
*   **When do they work well?** Greedy algorithms are guaranteed to find the optimal solution for problems that exhibit the **greedy-choice property** and **optimal substructure**. However, for many NP-hard problems, they serve as effective approximation algorithms.

**The Greedy Choice Property:**

*   A globally optimal solution can be arrived at by making a sequence of locally optimal (greedy) choices.

**Optimal Substructure:**

*   An optimal solution to the problem contains within it optimal solutions to subproblems.

---

### 2. Set Cover Problem

**Problem Definition:**

Given:
1.  A universe of elements $U$.
2.  A collection of subsets $S = \{S_1, S_2, \dots, S_m\}$ of $U$.

Goal:
Find a minimum-size subcollection of $S$, say $C \subseteq S$, such that the union of the sets in $C$ covers all elements in $U$. That is, $\bigcup_{S_i \in C} S_i = U$.

**Example:**

*   $U = \{1, 2, 3, 4, 5\}$
*   $S = \{\{1, 2, 3\}, \{2, 4\}, \{3, 4\}, \{4, 5\}, \{1, 5\}\}$

**Goal:** Find the smallest number of sets from $S$ that cover all elements $\{1, 2, 3, 4, 5\}$.

**Set Cover is NP-hard.** This means finding the absolute minimum number of sets is computationally difficult for large instances.

**The Greedy Approach for Set Cover:**

The greedy strategy for Set Cover is to repeatedly pick the set that covers the most *uncovered* elements.

**Algorithm:**

1.  Initialize the set of covered elements $C = \emptyset$.
2.  Initialize the chosen subcollection of sets $\mathcal{C} = \emptyset$.
3.  While $C \neq U$:
    a.  Select a set $S_i \in S$ that maximizes $|S_i \setminus C|$ (i.e., the set that covers the most currently uncovered elements).
    b.  Add $S_i$ to $\mathcal{C}$.
    c.  Update $C = C \cup S_i$.
4.  Return $\mathcal{C}$.

**Example Walkthrough (using the example above):**

*   $U = \{1, 2, 3, 4, 5\}$
*   $S = \{S_1: \{1, 2, 3\}, S_2: \{2, 4\}, S_3: \{3, 4\}, S_4: \{4, 5\}, S_5: \{1, 5\}\}$
*   Initially, $C = \emptyset$, $\mathcal{C} = \emptyset$.

**Step 1:**
*   $|S_1 \setminus C| = |\{1, 2, 3\}| = 3$
*   $|S_2 \setminus C| = |\{2, 4\}| = 2$
*   $|S_3 \setminus C| = |\{3, 4\}| = 2$
*   $|S_4 \setminus C| = |\{4, 5\}| = 2$
*   $|S_5 \setminus C| = |\{1, 5\}| = 2$
*   Greedy choice: $S_1$.
*   $\mathcal{C} = \{S_1\}$, $C = \{1, 2, 3\}$.

**Step 2:**
*   Uncovered elements: $U \setminus C = \{4, 5\}$.
*   $|S_1 \setminus C| = |\{1, 2, 3\} \setminus \{1, 2, 3\}| = |\emptyset| = 0$
*   $|S_2 \setminus C| = |\{2, 4\} \setminus \{1, 2, 3\}| = |\{4\}| = 1$
*   $|S_3 \setminus C| = |\{3, 4\} \setminus \{1, 2, 3\}| = |\{4\}| = 1$
*   $|S_4 \setminus C| = |\{4, 5\} \setminus \{1, 2, 3\}| = |\{4, 5\}| = 2$
*   $|S_5 \setminus C| = |\{1, 5\} \setminus \{1, 2, 3\}| = |\{5\}| = 1$
*   Greedy choice: $S_4$.
*   $\mathcal{C} = \{S_1, S_4\}$, $C = \{1, 2, 3\} \cup \{4, 5\} = \{1, 2, 3, 4, 5\}$.

**Step 3:**
*   $C = U$. The algorithm terminates.

**Result:** The greedy algorithm returns $\mathcal{C} = \{S_1, S_4\}$. This is a valid cover.

**Is this optimal?**
Let's check:
*   $S_1 \cup S_4 = \{1, 2, 3\} \cup \{4, 5\} = \{1, 2, 3, 4, 5\}$ (Covers $U$, size 2)

Consider other combinations:
*   $S_1 \cup S_2 \cup S_5 = \{1, 2, 3\} \cup \{2, 4\} \cup \{1, 5\} = \{1, 2, 3, 4, 5\}$ (Covers $U$, size 3)
*   $S_1 \cup S_4$ is indeed the optimal solution in this case.

**Approximation Guarantee for Greedy Set Cover:**

The greedy algorithm for Set Cover is known to be an $O(\log |U|)$-approximation algorithm. This means the size of the cover found by the greedy algorithm is at most $O(\log |U|)$ times the size of the optimal cover. This is a "logarithmic factor" approximation.

---

### 3. Vertex Cover Problem

**Problem Definition:**

Given:
1.  An undirected graph $G = (V, E)$, where $V$ is the set of vertices and $E$ is the set of edges.

Goal:
Find a minimum-size subset of vertices $VC \subseteq V$ such that for every edge $(u, v) \in E$, at least one of its endpoints ($u$ or $v$) is in $VC$.

**Example:**

Consider a graph with vertices $V = \{A, B, C, D, E\}$ and edges $E = \{(A, B), (A, C), (B, C), (B, D), (C, D), (D, E)\}$.

```
    A -- B -- D -- E
    |  / |  /
    | /  | /
    C ----
```

**Goal:** Find the smallest set of vertices that touches (is an endpoint of) every edge.

*   Possible Vertex Covers:
    *   $\{A, B, C, D, E\}$ (size 5) - Trivial, but a valid cover.
    *   $\{A, B, D\}$ (size 3):
        *   (A,B) covered by A, B
        *   (A,C) covered by A
        *   (B,C) covered by B
        *   (B,D) covered by B, D
        *   (C,D) covered by D
        *   (D,E) covered by D
        This is a valid cover.
    *   $\{B, C, D\}$ (size 3):
        *   (A,B) covered by B
        *   (A,C) covered by C
        *   (B,C) covered by B, C
        *   (B,D) covered by B, D
        *   (C,D) covered by C, D
        *   (D,E) covered by D
        This is also a valid cover.
    *   $\{B, D\}$ (size 2):
        *   (A,B) covered by B
        *   (A,C) - NOT COVERED!
        *   (B,C) covered by B
        *   (B,D) covered by B, D
        *   (C,D) covered by D
        *   (D,E) covered by D
        This is NOT a valid cover.

The optimal vertex cover for this graph is size 3 (e.g., $\{A, B, D\}$ or $\{B, C, D\}$).

**Vertex Cover is NP-hard.**

**The Greedy Approach for Vertex Cover (Simple Version):**

One common greedy approach is to repeatedly pick a vertex that covers the most *uncovered* edges. However, this doesn't yield a good approximation ratio.

**A Better Greedy Algorithm for Vertex Cover (and its Approximation Guarantee):**

A simple and effective approximation algorithm for Vertex Cover works by picking edges and adding *both* their endpoints to the vertex cover.

**Algorithm (Edge-Based Greedy):**

1.  Initialize the vertex cover $VC = \emptyset$.
2.  Initialize the set of remaining edges $E' = E$.
3.  While $E'$ is not empty:
    a.  Pick an arbitrary edge $(u, v) \in E'$.
    b.  Add both $u$ and $v$ to $VC$.
    c.  Remove from $E'$ all edges that are incident to either $u$ or $v$. (This means any edge connected to $u$ or $v$).
4.  Return $VC$.

**Example Walkthrough (using the example graph):**

*   $V = \{A, B, C, D, E\}$
*   $E = \{(A, B), (A, C), (B, C), (B, D), (C, D), (D, E)\}$
*   Initially, $VC = \emptyset$, $E' = \{(A, B), (A, C), (B, C), (B, D), (C, D), (D, E)\}$.

**Step 1:**
*   Pick an arbitrary edge, say $(A, B) \in E'$.
*   Add $A$ and $B$ to $VC$. So, $VC = \{A, B\}$.
*   Remove edges incident to $A$ or $B$:
    *   (A, B) - removed
    *   (A, C) - removed (incident to A)
    *   (B, C) - removed (incident to B)
    *   (B, D) - removed (incident to B)
*   $E'$ is now $\{(C, D), (D, E)\}$.

**Step 2:**
*   Pick an arbitrary edge from $E'$, say $(C, D)$.
*   Add $C$ and $D$ to $VC$. So, $VC = \{A, B, C, D\}$.
*   Remove edges incident to $C$ or $D$:
    *   (C, D) - removed
    *   (D, E) - removed (incident to D)
*   $E'$ is now $\emptyset$.

**Step 3:**
*   $E'$ is empty. The algorithm terminates.

**Result:** The greedy algorithm returns $VC = \{A, B, C, D\}$. The size is 4.

**Is this optimal?**
We saw earlier that $\{A, B, D\}$ is a vertex cover of size 3. So, the greedy algorithm did not find the optimal solution here.

**Approximation Guarantee for this Greedy Vertex Cover:**

This specific greedy algorithm (picking an edge and adding both endpoints) is a **2-approximation algorithm**.

**Proof sketch of the 2-approximation guarantee:**

Let $OPT$ be the set of vertices in an optimal vertex cover.
Let $C_{greedy}$ be the set of vertices returned by the greedy algorithm.
Let $M$ be the set of edges chosen by the greedy algorithm in Step 3a.

1.  **$M$ is a matching:** By construction, once an edge $(u, v)$ is chosen, all edges incident to $u$ or $v$ are removed. This means no two edges in $M$ share a vertex. Therefore, $M$ is a **maximal matching**.
2.  **$|C_{greedy}| = 2 \times |M|$:** For each edge $(u, v) \in M$, both $u$ and $v$ are added to $C_{greedy}$. Since edges in $M$ are disjoint (no shared vertices), the total number of vertices added is exactly $2 \times |M|$.
3.  **$|OPT| \geq |M|$:** For every edge $(u, v) \in M$, the optimal vertex cover $OPT$ must contain at least one of its endpoints ($u$ or $v$) to cover that edge. Since no two edges in $M$ share an endpoint, $OPT$ must contain at least one distinct vertex for each edge in $M$. Therefore, $|OPT| \geq |M|$.
4.  **Combining:**
    $|C_{greedy}| = 2 \times |M|$
    $|OPT| \geq |M|$
    So, $|C_{greedy}| = 2 \times |M| \leq 2 \times |OPT|$.
    This shows that the greedy algorithm finds a vertex cover whose size is at most twice the size of the optimal vertex cover. The approximation ratio is 2.

---

### Important Points to Remember

*   **NP-hard problems:** Many practical problems fall into this category, making exact solutions computationally infeasible for large instances.
*   **Approximation Algorithms:** Aim for "good enough" solutions in polynomial time.
*   **Approximation Ratio:** Quantifies the quality of an approximation algorithm.
*   **Greedy Algorithms:** Make locally optimal choices. They are simple and fast but don't always guarantee optimality.
*   **Set Cover:** Greedy strategy is to pick the set covering the most *uncovered* elements. This yields an $O(\log n)$ approximation.
*   **Vertex Cover:** A simple greedy strategy is to pick an edge and add *both* its endpoints. This yields a 2-approximation.

---

### Practice Questions

**Question 1:**
Consider the Set Cover problem with $U = \{1, 2, 3, 4, 5, 6\}$ and the following sets:
$S_1 = \{1, 2\}$
$S_2 = \{1, 3, 5\}$
$S_3 = \{2, 4\}$
$S_4 = \{3, 4, 6\}$
$S_5 = \{5, 6\}$

Apply the greedy algorithm. Show the steps and the resulting cover. What is its size? Is it optimal?

**Answer 1:**

*   $U = \{1, 2, 3, 4, 5, 6\}$
*   $S = \{S_1: \{1, 2\}, S_2: \{1, 3, 5\}, S_3: \{2, 4\}, S_4: \{3, 4, 6\}, S_5: \{5, 6\}\}$

**Step 1:**
*   Uncovered: $\{1, 2, 3, 4, 5, 6\}$
*   $|S_1|=2$, $|S_2|=3$, $|S_3|=2$, $|S_4|=3$, $|S_5|=2$.
*   Greedy choices: $S_2$ or $S_4$. Let's pick $S_2$.
*   $\mathcal{C} = \{S_2\}$, Covered $C = \{1, 3, 5\}$.

**Step 2:**
*   Uncovered: $\{2, 4, 6\}$.
*   $|S_1 \setminus C| = |\{1, 2\} \setminus \{1, 3, 5\}| = |\{2\}| = 1$
*   $|S_3 \setminus C| = |\{2, 4\} \setminus \{1, 3, 5\}| = |\{2, 4\}| = 2$
*   $|S_4 \setminus C| = |\{3, 4, 6\} \setminus \{1, 3, 5\}| = |\{4, 6\}| = 2$
*   $|S_5 \setminus C| = |\{5, 6\} \setminus \{1, 3, 5\}| = |\{6\}| = 1$
*   Greedy choices: $S_3$ or $S_4$. Let's pick $S_3$.
*   $\mathcal{C} = \{S_2, S_3\}$, Covered $C = \{1, 3, 5\} \cup \{2, 4\} = \{1, 2, 3, 4, 5\}$.

**Step 3:**
*   Uncovered: $\{6\}$.
*   $|S_1 \setminus C| = |\{1, 2\} \setminus \{1, 2, 3, 4, 5\}| = |\emptyset| = 0$
*   $|S_4 \setminus C| = |\{3, 4, 6\} \setminus \{1, 2, 3, 4, 5\}| = |\{6\}| = 1$
*   $|S_5 \setminus C| = |\{5, 6\} \setminus \{1, 2, 3, 4, 5\}| = |\{6\}| = 1$
*   Greedy choices: $S_4$ or $S_5$. Let's pick $S_4$.
*   $\mathcal{C} = \{S_2, S_3, S_4\}$, Covered $C = \{1, 2, 3, 4, 5\} \cup \{3, 4, 6\} = \{1, 2, 3, 4, 5, 6\}$.

**Step 4:**
*   $C = U$. Algorithm terminates.

**Result:** Greedy cover is $\{S_2, S_3, S_4\}$. Size is 3.

**Optimality Check:**
Consider the cover $\{S_1, S_4, S_5\}$:
$S_1 \cup S_4 \cup S_5 = \{1, 2\} \cup \{3, 4, 6\} \cup \{5, 6\} = \{1, 2, 3, 4, 5, 6\}$. This is also a valid cover of size 3.
So, in this case, the greedy algorithm found an optimal solution.

**Question 2:**
Consider a graph with $V=\{a, b, c, d, e, f\}$ and $E=\{(a,b), (b,c), (c,d), (d,e), (e,f), (f,a), (a,c), (c,e)\}$. (A hexagon with two diagonals).

```
    a -- b
    | \  |
    f -- c -- e
    | /  |
    e -- d
```
*(Note: The diagram is a bit simplified. f-c is a diagonal, a-c is a diagonal, c-e is a diagonal)*. Let's re-draw for clarity:
```
      a ---- b
     / \    /
    /   \  /
   f-----c----e
         |
         |
         d
```
Edges: $(a,b), (b,c), (c,d), (d,e), (e,f), (f,a), (a,c), (c,e)$.

Apply the edge-based greedy algorithm for Vertex Cover. Show the steps and the resulting cover. What is its size? What is the size of an optimal vertex cover for this graph?

**Answer 2:**

Let's trace the greedy algorithm:

*   $V=\{a, b, c, d, e, f\}$
*   $E=\{(a,b), (b,c), (c,d), (d,e), (e,f), (f,a), (a,c), (c,e)\}$
*   $VC = \emptyset$, $E' = E$.

**Step 1:**
*   Pick edge $(a,b) \in E'$.
*   $VC = \{a, b\}$.
*   Remove edges incident to $a$ or $b$: $(a,b), (f,a), (a,c), (b,c)$.
*   $E' = \{(c,d), (d,e), (e,f), (c,e)\}$.

**Step 2:**
*   Pick edge $(c,d) \in E'$.
*   $VC = \{a, b, c, d\}$.
*   Remove edges incident to $c$ or $d$: $(c,d), (b,c), (c,e), (d,e)$. (Note: $(b,c)$ was already removed)
*   $E' = \{(e,f)\}$.

**Step 3:**
*   Pick edge $(e,f) \in E'$.
*   $VC = \{a, b, c, d, e, f\}$.
*   Remove edges incident to $e$ or $f$: $(e,f), (d,e), (e,c), (f,a)$. (Note: $(d,e)$ and $(e,c)$ were already removed, $(f,a)$ was removed in step 1)
*   $E' = \emptyset$.

**Result:** Greedy cover $VC = \{a, b, c, d, e, f\}$. Size = 6.

**Optimality Check:**
Let's try to find a smaller vertex cover.
Consider the set $\{a, c, e\}$.
*   $(a,b)$ covered by $a$.
*   $(b,c)$ covered by $c$.
*   $(c,d)$ covered by $c$.
*   $(d,e)$ covered by $e$.
*   $(e,f)$ covered by $e$.
*   $(f,a)$ covered by $a$.
*   $(a,c)$ covered by $a, c$.
*   $(c,e)$ covered by $c, e$.
Yes, $\{a, c, e\}$ is a vertex cover. Its size is 3. This is an optimal solution.

The greedy algorithm gave a cover of size 6, while the optimal is size 3. The approximation ratio is $6/3 = 2$, which aligns with the theoretical guarantee. The choice of edges in step 1 and step 2 significantly impacted the outcome. If we had picked $(a,c)$ first, followed by $(c,e)$, then $(f,a)$... the result might differ. The algorithm guarantees *at most* twice the optimal.
