---
title: "Graph Matching - Edmonds' Algorithm for finding maximum matchings"
subject: "ADVANCED GRAPH ALGORITHMS"
module: "Module 3: Graph Matching "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b908"
status: "completed"
scrapedAt: "2026-05-20T16:42:56.570Z"
---
# ADVANCED GRAPH ALGORITHMS: Module 3 - Graph Matching: Edmonds' Algorithm

## Topic: Graph Matching - Edmonds' Algorithm for Finding Maximum Matchings

**Learning Outcomes:**

*   Understand the concept of graph matching and its applications.
*   Define key terms related to graph matching: matching, maximum matching, perfect matching, alternating path, augmenting path.
*   Describe the structure of an augmenting path and its role in finding maximum matchings.
*   Explain the challenges of finding augmenting paths in non-bipartite graphs due to the presence of blossoms.
*   Understand the concept of a blossom in a graph and how to identify them.
*   Describe Edmonds' algorithm for finding maximum matchings in general graphs, including the blossom contraction and expansion steps.
*   Apply Edmonds' algorithm to find a maximum matching in a given graph.
*   Analyze the time complexity of Edmonds' algorithm.

---

### 1. Introduction to Graph Matching

*   **Definition:** A *matching* in a graph *G = (V, E)* is a subset *M* of *E* such that no two edges in *M* share a common vertex. In other words, each vertex is incident to at most one edge in *M*.

*   **Maximum Matching:** A matching *M* is a *maximum matching* if no other matching contains more edges than *M*.  There can be multiple maximum matchings in a graph.  The *size* of a matching is the number of edges in it. A maximum matching has the maximum possible size.

*   **Perfect Matching:** A matching *M* is a *perfect matching* if every vertex in *G* is incident to exactly one edge in *M*.  A perfect matching is a maximum matching, but the converse is not always true. A graph can only have a perfect matching if it has an even number of vertices.

*   **Applications of Graph Matching:**
    *   Assignment problems: Assigning tasks to workers, doctors to shifts, etc.
    *   Stable marriage problem: Matching individuals in a way that minimizes instability.
    *   Network routing: Finding optimal paths for data transmission.
    *   Bioinformatics: Identifying protein-protein interactions.

### 2. Key Concepts: Alternating and Augmenting Paths

*   **Alternating Path:** Given a matching *M*, an *alternating path* is a path in *G* that alternates between edges in *M* and edges not in *M*.  Formally,  a path `v1, v2, v3, ..., vk` is an alternating path if for all `i`:
    *   `{vi, vi+1}` is in *M* if `i` is odd, OR
    *   `{vi, vi+1}` is not in *M* if `i` is odd, OR
    *   `{vi, vi+1}` is not in *M* if `i` is even, OR
    *   `{vi, vi+1}` is in *M* if `i` is even.

*   **Augmenting Path:** An *augmenting path* is an alternating path whose endpoints are *unmatched* (i.e., not incident to any edge in *M*).  Crucially, an augmenting path can be used to *increase* the size of the current matching.

*   **Theorem (Berge's Theorem):** A matching *M* is a maximum matching if and only if there are no augmenting paths with respect to *M*.

*   **Augmenting a Matching:** Given an augmenting path *P*, we can *augment* the matching *M* by taking the symmetric difference of *M* and *P*:  *M' = M XOR P = (M \ P) ∪ (P \ M)*.  This results in a new matching *M'* with |M'| = |M| + 1.

**Example:**

Consider a graph with vertices A, B, C, D and edges {A, B}, {B, C}, {C, D}.

1.  Let *M = {{A, B}}* be a matching.
2.  Path *P = A-B-C-D* is an alternating path (A-B in M, B-C not in M, C-D not in M).
3.  Since A and D are unmatched, *P* is an augmenting path.
4.  Augmenting *M* with *P* results in *M' = {{B, C}, {A, D}}*.  The size of the matching has increased from 1 to 2.

### 3. The Challenge of Blossoms in Non-Bipartite Graphs

*   Finding augmenting paths is relatively straightforward in bipartite graphs (e.g., using breadth-first search or depth-first search).  However, non-bipartite graphs introduce a significant complication: **blossoms**.

*   **Definition: Blossom:** A *blossom* is an odd-length cycle *C* in which exactly one vertex *v* is unmatched, and all other vertices are matched within the cycle.  The unmatched vertex *v* is called the *base* of the blossom.  From *v*, there exists alternating paths to all other vertices in *C*.

*   **Why Blossoms are Problematic:** Blossoms can "hide" the existence of an augmenting path. If we encounter a blossom during a search for an augmenting path, we might prematurely conclude that no such path exists.

**Example:**

Consider vertices A, B, C, D, E and edges {A, B}, {B, C}, {C, D}, {D, E}, {E, B}.

1.  Let *M = {{A, B}, {C, D}}* be a matching.
2.  The cycle B-C-D-E-B is a blossom.
3.  The base of the blossom is E (it's unmatched).
4.  Ignoring the blossom, it might seem like we cannot augment the matching any further.
5.  However, there might be an augmenting path starting from E, using the blossom.

### 4. Edmonds' Algorithm: Handling Blossoms

Edmonds' algorithm (also known as the "blossom algorithm") provides a systematic way to find maximum matchings in general graphs, including those with blossoms. The core idea is to:

1.  **Identify Blossoms:**  During the search for an augmenting path (typically using a breadth-first search), detect blossoms when they are encountered.
2.  **Contract Blossoms:**  Once a blossom *B* is found, *contract* it into a single *supervertex* *b*.  This creates a smaller graph *G'*. The matching M is updated to M' by deleting any edges inside B except for one which connects B to the rest of the graph. The *base* of the blossom becomes the *label* of the supervertex.
3.  **Recursively Search:** Continue searching for an augmenting path in the contracted graph *G'*.  If an augmenting path *P'* is found in *G'*, then we need to *expand* the blossom to obtain an augmenting path *P* in the original graph *G*.
4.  **Expand Blossoms:** If an augmenting path contains the supervertex *b*, expand the blossom *B* back to its original structure, modifying the augmenting path appropriately.
5.  **Augment the Matching:** Augment the matching using the found augmenting path.
6.  **Repeat:** Repeat steps 1-5 until no more augmenting paths can be found.

**Detailed Algorithm Steps:**

1.  **Initialization:** Start with an empty matching *M* = {}.

2.  **Repeat until no more augmenting paths can be found:**
    *   (a) **Build an alternating tree:**  Perform a breadth-first search (BFS) from each unmatched vertex as a root. The search alternates between edges *not* in *M* (tree edges) and edges *in* *M* (matching edges).  We label vertices as:
        *   *Even* if the path from the root to the vertex has an even number of edges. These vertices are reachable via alternating paths of even length.
        *   *Odd* if the path from the root to the vertex has an odd number of edges. These vertices are reachable via alternating paths of odd length.

    *   (b) **Blossom Detection:** During the BFS, if we encounter an edge {u, v} such that:
        *   `u` and `v` are both *even* vertices in the same tree (i.e., they are reachable from the same root via alternating paths of even length), then a blossom has been found.
        *   The blossom consists of the cycle formed by the paths from the root to `u`, the edge {u, v}, and the path from the root to `v`.
        *  The base of the blossom is the lowest common ancestor of u and v in the BFS tree.
    *   (c) **Blossom Contraction:**
        *   Create a new supervertex `b` to represent the blossom.
        *   Replace all vertices in the blossom with `b`.
        *   Update the graph and matching accordingly.  Edges incident to vertices in the blossom now become incident to `b`. If an edge {x, y} with y in the blossom was a matched edge (i.e. in M), the edge {x, b} will be the new matched edge from outside the blossom into the contracted blossom.
    *   (d) **Augmenting Path Found:**  If the BFS encounters an edge {u, v} such that `u` and `v` are both unmatched and in *different* trees, then an augmenting path has been found.
        *   Trace back the paths from the roots of the trees to `u` and `v`, respectively.  This gives you the augmenting path *P* in the contracted graph.  In the base case, if there were no blossom contractions, then P is the augmenting path.
    *   (e) **Blossom Expansion:** If the augmenting path contains a supervertex `b`, expand the blossom.  This involves finding the appropriate path through the blossom to connect the augmenting path segments outside the blossom.  This is achieved by:
        * Knowing the matched edge that connects `b` to the rest of the graph.
        * Knowing the entry and exit points in/out of the blossom along the augmenting path.
        * Traverses the alternating path within the blossom between those entry/exit points.

    *   (f) **Augment the Matching:** Update *M* by augmenting along the augmenting path *P*.

3.  **Return M:** When no more augmenting paths are found, *M* is a maximum matching.

**Example (Illustrative - Requires Drawing):**

Consider a graph with vertices A, B, C, D, E, F, G, H and edges {A, B}, {B, C}, {C, D}, {D, E}, {E, F}, {F, B}, {G, H}.

1.  **Initialization:** *M* = {}

2.  **Iteration 1:**
    *   Start BFS from A and G.
    *   *M* = {{A, B}, {G, H}} will form (after finding augmenting paths)
    *   Now unmatched vertices are C,D,E,F

3.  **Iteration 2:**
    *   Start BFS from C.
    *   Discover blossom B-C-D-E-F-B.  Base is some vertex within, say, B.
    *   Contract the blossom into a supervertex 'b'.  The new graph has vertices 'b', A, G, H.
    *   No augmenting paths within the contracted graph so far, search for another unmatched vertex, but there are none besides 'b', but 'b' represents many vertices.

4.  **Iteration 3:**
    *   We must explore paths starting within the blossom 'b'.
    *   An augmenting path C-B-A will be found from within the blossom to A
    *   Augment: M = {{A,B}, {C,B}} (but this isn't valid so something must have augmented badly. This highlights how difficult it is to keep track of the expansion and contraction)

**Important Notes:**

*   The blossom expansion step is the most complex part of the algorithm and requires careful attention to detail.
*   Edmonds' algorithm guarantees finding a maximum matching in any graph, regardless of whether it is bipartite or not.

### 5. Time Complexity

*   The time complexity of Edmonds' algorithm is O(V<sup>2</sup>E) in its simplest implementation.
*   More sophisticated implementations can achieve a time complexity of O(V<sup>3</sup>)
*   Finding a single augmenting path using BFS (with blossom contraction and expansion) can take O(VE) time.  Since we need to find at most V/2 augmenting paths, the overall complexity is O(V<sup>2</sup>E).

### 6. Practice Questions/Exercises

1.  **Given the graph with vertices {1, 2, 3, 4, 5, 6} and edges {(1, 2), (2, 3), (3, 4), (4, 5), (5, 6), (6, 2)}:**

    *   (a) Identify a blossom in the graph.
    *   (b) What is the base of the blossom you identified?
    *   (c) Find a maximum matching in the graph using Edmonds' algorithm (show each step, including blossom contraction and expansion if needed).

    **Answer:**

    *   (a) The cycle 2-3-4-5-6-2 is a blossom.
    *   (b) Any of the vertices 2,3,4,5,6 *could* be the base depending on the initial matching.
    *   (c)
        1.  Start with M = {}.
        2.  Find an augmenting path 1-2 in G. M = {(1, 2)}. Vertices {3,4,5,6} are unmatched.
        3.  Search for an augmenting path starting from 3. Find the blossom 2-3-4-5-6-2.
        4.  Contract the blossom into a supervertex 'b'. Now we have a simplified graph consisting of 'b' and '1' with only edge '(1,2)' from (1,2,3,4,5,6) remaining from the original graph.
        5. Augment.

2.  **Explain the difference between an alternating path and an augmenting path. Provide an example of each.** (See definitions and examples above)

3.  **Why is Edmonds' algorithm necessary for finding maximum matchings in general graphs but not in bipartite graphs?** (Because of the presence of blossoms in non-bipartite graphs, which bipartite graphs cannot contain)

4.  **Describe the blossom contraction and expansion steps in Edmonds' algorithm. Why are these steps important?** (See descriptions above.  These steps are important because they allow us to handle blossoms and find augmenting paths that might otherwise be hidden).

### 7. Important Points to Remember

*   Edmonds' algorithm is a fundamental algorithm for finding maximum matchings in general graphs.
*   The key idea behind the algorithm is to handle blossoms effectively by contracting and expanding them.
*   The blossom expansion step is the most complex and requires careful attention.
*   Edmonds' algorithm has a polynomial time complexity, making it practical for many applications.
*   Understanding alternating and augmenting paths is crucial for understanding graph matching algorithms.
