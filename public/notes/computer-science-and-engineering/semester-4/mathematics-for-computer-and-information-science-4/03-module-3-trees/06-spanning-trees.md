---
title: "Spanning trees"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4"
module: "Module 3: Trees"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8af36"
status: "completed"
scrapedAt: "2026-05-20T16:13:37.164Z"
---
## MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4
### Module 3: Trees
#### Topic: Spanning Trees

**Learning Outcomes:**

Upon completion of this topic, you should be able to:

1.  Define a spanning tree and understand its properties.
2.  Determine whether a given subgraph is a spanning tree.
3.  Apply algorithms (e.g., Breadth-First Search (BFS), Depth-First Search (DFS), Kruskal's, Prim's) to find spanning trees.
4.  Find the minimum spanning tree (MST) for a weighted graph.
5.  Describe applications of spanning trees in computer science.

---

**1. Defining Spanning Trees and Understanding Properties**

*   **Definition:** A spanning tree of a connected, undirected graph G is a subgraph of G that is a tree and contains all the vertices of G.

*   **Key Concepts:**

    *   **Graph (G):** A collection of vertices (nodes) and edges (connections between vertices). G = (V, E)
    *   **Connected Graph:** A graph where there is a path between every pair of vertices.
    *   **Subgraph:** A graph whose vertices and edges are subsets of the vertices and edges of the original graph.
    *   **Tree:** A connected graph with no cycles.
    *   **Cycle:** A path that starts and ends at the same vertex, visiting other vertices in between.
    *   **Spanning:** Covering all vertices of the original graph.

*   **Properties of Spanning Trees:**

    *   **Contains all vertices:** Every vertex in the original graph is also in the spanning tree.
    *   **Is a tree:** It is connected and acyclic (no cycles).
    *   **Minimum edges:** It has the minimum number of edges required to connect all vertices.  If the original graph has *n* vertices, the spanning tree has *n - 1* edges.
    *   **Not unique:** A graph can have multiple spanning trees.
    *   **Removing an edge disconnects:** Removing any edge from a spanning tree disconnects the tree into two connected components.
    *   **Adding an edge creates a cycle:** Adding any edge from the original graph to the spanning tree will create a cycle.

*   **Example:**

    Consider the graph G:

    ```
        A -- B
        |    |
        C -- D -- E
    ```

    Possible Spanning Tree:

    ```
        A -- B
        |
        C -- D -- E
    ```

    Another Possible Spanning Tree:

    ```
        A -- B
            |
        C -- D -- E
    ```

**2. Determining if a Subgraph is a Spanning Tree**

*   **Procedure:**

    1.  **Check if it's a subgraph:** Verify that all vertices and edges of the given subgraph are present in the original graph.
    2.  **Check if it's connected:** Ensure that there's a path between every pair of vertices in the subgraph.
    3.  **Check if it's acyclic:** Make sure there are no cycles in the subgraph.  You can use cycle detection algorithms (like DFS-based cycle detection) if needed.
    4.  **Check for all vertices:** Verify that the subgraph contains all the vertices of the original graph.
    5.  **Count the edges:**  If the graph has *n* vertices, the spanning tree should have *n-1* edges.

*   **Example:**

    Original Graph G:

    ```
        A -- B
        |    |
        C -- D -- E
        |    |
        F -- G
    ```

    Subgraph H:

    ```
        A -- B
        |    |
        C -- D -- E
        |
        F
    ```

    Is H a spanning tree of G?

    *   It's a subgraph.
    *   It's connected.
    *   It's acyclic.
    *   It *doesn't* contain all vertices (G is missing).  Therefore, H is NOT a spanning tree.

    Subgraph I:

    ```
        A -- B
        |    |
        C -- D -- E
        |    |
        F -- G
    ```

    Is I a spanning tree of G?

    * It's a subgraph.
    * It's connected.
    * It's acyclic.
    * It contains all vertices.
    * It has 7 vertices and 6 edges.

    Therefore, I is a spanning tree.

**3. Algorithms for Finding Spanning Trees**

*   **Breadth-First Search (BFS):**

    *   **Algorithm:**
        1.  Start at an arbitrary vertex *s*.
        2.  Explore the neighbor vertices.
        3.  Mark all neighbors as visited.
        4.  Repeat for each of the nearest neighbor vertices.
    *   **Application to Spanning Trees:**  Perform a BFS traversal of the graph. The edges used to discover new vertices during the traversal form the spanning tree.
    *   **Advantage:** Simple to implement.
    *   **Disadvantage:** Not guaranteed to find the minimum spanning tree (MST).

*   **Depth-First Search (DFS):**

    *   **Algorithm:**
        1.  Start at an arbitrary vertex *s*.
        2.  Explore as far as possible along each branch before backtracking.
    *   **Application to Spanning Trees:**  Perform a DFS traversal. The edges used to discover new vertices form the spanning tree.
    *   **Advantage:** Simple to implement.
    *   **Disadvantage:** Not guaranteed to find the minimum spanning tree (MST).

*   **Kruskal's Algorithm:**

    *   **Algorithm:**
        1.  Sort all edges of the graph in non-decreasing order of their weights.
        2.  Pick the smallest edge. Check if it forms a cycle with the spanning tree formed so far. If cycle is not formed, include this edge. Else, discard it.
        3.  Repeat step#2 until there are (V-1) edges in the spanning tree, where V is the number of vertices in the graph.
    *   **Advantage:** Guaranteed to find the MST.
    *   **Disadvantage:** Requires sorting edges (O(E log E) complexity).

*   **Prim's Algorithm:**

    *   **Algorithm:**
        1.  Start with a single vertex *s*.
        2.  Repeatedly add the smallest edge that connects a vertex in the current tree to a vertex not yet in the tree.
        3.  Continue until all vertices are included.
    *   **Advantage:** Guaranteed to find the MST. Can be more efficient than Kruskal's for dense graphs.
    *   **Disadvantage:** Can be less efficient than Kruskal's for sparse graphs.  Requires data structures like priority queues (heaps) for efficient implementation.

**4. Minimum Spanning Trees (MSTs)**

*   **Definition:** A minimum spanning tree (MST) of a weighted graph is a spanning tree with the minimum possible total edge weight.

*   **Weighted Graph:** A graph where each edge has a numerical value (weight) associated with it.

*   **Algorithms for Finding MSTs:** Kruskal's and Prim's algorithms are specifically designed to find MSTs.  BFS and DFS do *not* guarantee finding MSTs.

*   **Example:**

    Graph with weighted edges:

    ```
        A --5-- B
        |  \    |
      10|   3  |8
        C --4-- D
    ```

    Using Kruskal's Algorithm:

    1.  Sort edges: (C,D)-4, (A,B)-5, (B,D)-8, (A,C)-10, (A,D)-3
    2.  (A,D) - 3: Add edge (A,D).
    3.  (C,D) - 4: Add edge (C,D).
    4.  (A,B) - 5: Add edge (A,B).
    5.  (B,D) - 8: Adding this edge would create a cycle (A-B-D-A) so it is discarded.
    6.  (A,C) - 10: Discarded because it creates a cycle.

    MST:

    ```
        A --5-- B
        |
        D --4-- C
    ```

    Total weight: 3 + 4 + 5 = 12.

**5. Applications of Spanning Trees in Computer Science**

*   **Network Design:** Connecting computers in a network with minimal cabling.  The MST represents the most cost-effective way to connect all computers.
*   **Clustering:** Building hierarchical clusters of data points.
*   **Image Segmentation:** Grouping pixels in an image based on color similarity.
*   **Pathfinding:**  Approximating shortest paths. While not *the* shortest path, spanning trees can provide a reasonable solution quickly.
*   **Circuit Design:** Connecting electronic components with minimal wiring.
*   **Social Network Analysis:** Finding the most influential connections in a social network.
*   **Data Compression:**  Huffman coding relies on trees.

**Practice Questions and Exercises:**

1.  **Given the following graph, find a spanning tree using BFS (starting at vertex A).**

    ```
        A -- B -- C
        |    |    |
        D -- E -- F
    ```
    *Answer:* A possible BFS spanning tree: A-B, A-D, B-C, B-E, C-F.

2.  **Given the same graph above, find a spanning tree using DFS (starting at vertex A).**
    *Answer:* A possible DFS spanning tree: A-B, B-C, C-F, B-E, A-D.

3.  **Given the following weighted graph, find the minimum spanning tree using Kruskal's algorithm.  Show each step.**

    ```
        A --4-- B
        |  \    |
       1  3    2
        C --5-- D
    ```
    *Answer:*
        1. Sorted Edges: (A,C)-1, (B,D)-2, (A,D)-3, (A,B)-4, (C,D)-5
        2. Add (A,C) - 1
        3. Add (B,D) - 2
        4. Add (A,D) - 3
        5. (A,B)-4: would create a cycle so is discarded.
       
        MST:
           ```
               A --3-- D
               |       |
               1       2
               C       B
           ```
        Total Weight: 1 + 2 + 3 = 6

4.  **Explain the difference between a spanning tree and a minimum spanning tree.**
    *Answer:* A spanning tree is a subgraph that is a tree and includes all vertices of the original graph. A minimum spanning tree is a spanning tree with the *minimum* possible total edge weight in a weighted graph.  A spanning tree can exist for unweighted graphs; an MST requires weights on the edges.

5.  **Give an example of a real-world application of spanning trees in computer science.**
    *Answer:* Network design: connecting computers in a network using the least amount of cable (cost).

**Important Points to Remember:**

*   A spanning tree *must* be a tree (connected and acyclic).
*   A spanning tree *must* include all vertices of the original graph.
*   A graph can have multiple spanning trees.
*   Kruskal's and Prim's algorithms are specifically designed to find the *minimum* spanning tree in a weighted graph.
*   BFS and DFS can be used to find spanning trees but are not guaranteed to find the minimum spanning tree in weighted graphs.
*   The number of edges in a spanning tree of a graph with *n* vertices is *n - 1*. Adding an edge to the spanning tree will create a cycle.
