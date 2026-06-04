---
title: "Edge connectivity"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4"
module: "Module 2: Euler graphs"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8af2c"
status: "completed"
scrapedAt: "2026-05-20T16:13:30.846Z"
---
## MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4
## Module 2: Euler Graphs
## Topic: Edge Connectivity

### Learning Outcomes:

*   Define edge connectivity and determine the edge connectivity of a graph.
*   Understand the relationship between edge connectivity and other graph properties (e.g., vertex connectivity, minimum degree).
*   Apply Menger's Theorem for edge connectivity.
*   Solve problems involving edge connectivity in various graph applications.

### 1. Introduction to Edge Connectivity

*   **Definition:** The **edge connectivity** of a graph G, denoted by λ(G), is the minimum number of edges that need to be removed from G to disconnect it.  If G is a complete graph K_n, we define λ(G) = n-1, since every vertex is adjacent to every other, and removing any n-1 edges makes one vertex isolated.

*   **Disconnected Graph:** If λ(G) = 0, then G is disconnected.  This means it already consists of at least two disconnected components.

*   **Connected Graph:** If λ(G) > 0, then G is connected.

*   **Edge-Cut:** A set of edges whose removal disconnects the graph is called an **edge-cut**. An edge-cut with the minimum possible number of edges is called a **minimum edge-cut**.  The edge connectivity, λ(G), is the size of a minimum edge-cut.

*   **Example 1:**
    *   Consider a graph G with vertices {A, B, C, D} and edges {AB, BC, CD, DA, AC}.
    *   Removing the edges AB and BC disconnects the graph into two components: {A} and {C,D}. However removing AC, CD, and DA will also disconnect the graph into component B and the rest of the graph.
    *   Removing only one edge, such as AB, does not disconnect the graph.
    *   Removing AB and CD also disconnects the graph. The same is true for BC and DA.
    *   Therefore, the edge connectivity λ(G) = 2.
    *   One minimum edge-cut is {AB, CD}, and another is {BC, DA}.

*   **Example 2:**
    *   A path graph P_n (a simple chain of n vertices) has edge connectivity λ(P_n) = 1.  Removing any edge disconnects the path.

*   **Example 3:**
    *   A cycle graph C_n (a closed loop of n vertices) has edge connectivity λ(C_n) = 2.  Removing any single edge does not disconnect the cycle; removing two adjacent edges disconnects the cycle into a path.

### 2. Relationship to Other Graph Properties

*   **Minimum Degree:** The edge connectivity λ(G) is at most the minimum degree δ(G) of the graph.  That is, λ(G) ≤ δ(G).  This is because removing all edges incident to a vertex of minimum degree disconnects that vertex from the rest of the graph.

    *   **Proof:**  Let *v* be a vertex of minimum degree, δ(G).  The set of edges incident to *v* forms an edge-cut of size δ(G).  Therefore, there exists an edge-cut of size δ(G), and the minimum size of an edge-cut (λ(G)) cannot be greater than this.  Thus, λ(G) ≤ δ(G).

*   **Vertex Connectivity:** The vertex connectivity κ(G) of a graph G is the minimum number of vertices that need to be removed to disconnect the graph.  In general, there is no fixed relationship between vertex connectivity and edge connectivity.  However, for any graph G, κ(G) ≤ λ(G) ≤ δ(G).  This is a fundamental inequality in graph connectivity.

*   **Implications of the inequality κ(G) ≤ λ(G) ≤ δ(G):**
    *   If a graph has a high minimum degree, it is likely to have high edge connectivity and vertex connectivity.
    *   If a graph has low vertex connectivity, it also has low edge connectivity.
    *   Knowing the minimum degree provides an upper bound on the edge connectivity.

*   **Example:**
    *   Consider a complete graph K_n. Its minimum degree is δ(K_n) = n-1, and its vertex connectivity is κ(K_n) = n-1, and its edge connectivity is λ(K_n) = n-1. Thus κ(G) = λ(G) = δ(G) for complete graphs.
    *   Consider a star graph S_n (a single vertex connected to n-1 other vertices).  Its minimum degree is δ(S_n) = 1, its vertex connectivity is κ(S_n) = 1, and its edge connectivity is λ(S_n) = 1.  Thus κ(G) = λ(G) = δ(G) for star graphs.
    *   Consider a cycle graph C_n where n > 3. δ(C_n) = 2, λ(C_n) = 2, and κ(C_n) = 2.  Thus κ(G) = λ(G) = δ(G) for cycle graphs.

### 3. Menger's Theorem for Edge Connectivity

*   **Statement:** For any two vertices *u* and *v* in a graph G, the maximum number of edge-disjoint paths between *u* and *v* is equal to the minimum number of edges that need to be removed to disconnect *u* and *v*.

*   **Edge-Disjoint Paths:** Two paths are edge-disjoint if they do not share any edges.

*   **Local Edge Connectivity:**  Let λ(u, v) denote the maximum number of edge-disjoint paths between vertices u and v.  Then, the global edge connectivity λ(G) is the minimum of λ(u, v) over all pairs of vertices u and v in G. That is: λ(G) = min{λ(u, v) | u, v ∈ V(G)}.

*   **Application:** Menger's Theorem provides a powerful tool to determine edge connectivity.  Instead of considering all possible edge-cuts, we only need to find the minimum number of edges required to separate any two vertices in the graph.

*   **Example:**
    *   Consider the graph G with vertices {A, B, C, D} and edges {AB, BC, CD, DA, AC}.
    *   To disconnect A and D, we need to remove at least 2 edges: DA and AC, or DA and AB, or AC and CD, or AB and CD and BC
    *   There are at most two edge-disjoint paths between A and D (A-B-C-D and A-C-D).
    *   Menger's Theorem states that the minimum number of edges to remove to disconnect A and D equals the maximum number of edge-disjoint paths between A and D, which is 2.
    *   Now, to disconnect B and D we must remove two edges.
    *   There are at most two edge-disjoint paths between B and D (B-A-D, and B-C-D).
    *   Since the edge connectivity is equal to the minimum edges to remove, λ(G) = 2.

### 4. Algorithms for Determining Edge Connectivity

While Menger's Theorem provides a theoretical foundation, algorithms are needed for practical computation of edge connectivity.

*   **Ford-Fulkerson Algorithm (Modified for Edge Disjoint Paths):**  This algorithm can be adapted to find the maximum number of edge-disjoint paths between every pair of vertices in the graph. The minimum of these values is the edge connectivity of the graph.  This involves solving maximum flow problems on the graph. Replace each edge with two arcs (one in each direction). Give each arc a capacity of 1. Then, run the Ford-Fulkerson (or Edmonds-Karp) algorithm between all pairs of vertices. The minimum max flow between all pairs is the edge connectivity.

*   **Minimum Cut Algorithms:** Algorithms like the Stoer-Wagner algorithm directly find the minimum cut in a graph, which directly corresponds to the edge connectivity.

*   **Complexity:**  Finding the edge connectivity of a graph can be done in polynomial time. The complexity depends on the specific algorithm used and the density of the graph.

### 5. Applications of Edge Connectivity

*   **Network Reliability:** In network design, edge connectivity represents the resilience of the network. A higher edge connectivity means the network can tolerate more link failures before becoming disconnected.

*   **Data Communication:** Edge connectivity can be used to analyze the robustness of communication networks.  It helps determine the minimum number of communication links that need to fail before communication between two critical points is disrupted.

*   **Circuit Design:**  In circuit design, edge connectivity can be used to assess the fault tolerance of the circuit.  It can identify critical connections whose failure would significantly impact the circuit's functionality.

*   **Social Networks:** Edge connectivity can reveal the robustness of connections in a social network. It can show how many relationships need to be severed to isolate a group of individuals.

### 6. Practice Questions and Exercises

1.  **Question:** Determine the edge connectivity of the following graph:  Vertices = {A, B, C, D, E}, Edges = {AB, BC, CD, DE, EA, AC, BD, CE}.

    **Answer:**
    *   Visualize the graph. It is a complete graph K5 minus one edge AD.
    *   The minimum degree δ(G) = 3 (vertex A and E are adjacent to 3 other vertices).
    *   Consider an edge cut disconnecting A and B. Edges AC, AB, BC must be removed. This gives a cut of size 3.
    *   Also, edge CD, BD, and AB.
    *   There are 3 edge-disjoint paths between A and B: (A-B), (A-C-B), (A-E-D-B). This means we must remove at least 3 edges.
    *   λ(G) = 3.

2.  **Question:** Prove that if a graph G has minimum degree δ(G) ≥ n/2, then λ(G) ≥ n/2, where n is the number of vertices in G.

    **Answer:**
    *   We know that λ(G) ≤ δ(G).  If δ(G) ≥ n/2, it is not immediately clear that λ(G) ≥ n/2.  Consider the case where G is a complete bipartite graph where each vertex is adjacent to approximately n/2 other vertices.
    *   Consider a minimum edge-cut (S, T) of G, where S and T are two disjoint subsets of vertices that partition the set of vertices in G. Let |S| be the number of vertices in S, and |T| be the number of vertices in T. We have |S| + |T| = n.
    *   Let the number of edges in the edge-cut be 'k'.
    *   Each vertex in S must have degree >= n/2. So the vertex in S has at least n/2 edges connected to it.  If it is connected to every other vertex in S and T, that is to say that every vertex in S has >= n/2 edges.
    *   In the case where |S| <= n/2, then since δ(G) >= n/2, every vertex in S has at least n/2 edges connected to it and at least n/2 - 1 edges connected to vertexes in S itself, because it is not allowed to connect to itself. However, vertexes in S only have |S|-1 edges connected to vertexes in S.
    *   Then, the number of edges between S and T must be |S| * (n/2). However, |S| <= n/2, that n/2 <=n-|S|
    *   In that case, |S| > n/2, otherwise, |T| >= n/2 and it is a symmetric argument. In that case, λ(G) >= δ(G) >= n/2.

3.  **Question:** A network has 6 nodes and the following connections:  1-2, 1-3, 1-4, 2-3, 2-5, 3-6, 4-5, 4-6, 5-6. What is the edge connectivity of this network?

    **Answer:**
    *   Visualize the graph or draw it.
    *   The minimum degree is δ(G) = 2 (vertex 5 and vertex 6). Therefore, λ(G) ≤ 2.
    *   Consider separating vertex 5 from vertex 6. Edges 2-5, 4-5, 3-6, 4-6, and 5-6 are all required to connect vertex 5 and 6, and we need to remove at least two vertices to break the connection.
    *   There is no single edge whose removal will disconnect the graph.
    *   Removing any two edges adjacent to vertex 5, or vertex 6, will disconnect the graph.
    *   Therefore, the edge connectivity is λ(G) = 2.

4.  **Question:** Explain how edge connectivity could be used to assess the resilience of a communication network.

    **Answer:**
    *   Edge connectivity directly relates to the network's ability to withstand link failures.
    *   A network with high edge connectivity requires a large number of link failures before it becomes disconnected.
    *   If a network has edge connectivity of 'k', then communication between any two nodes is guaranteed to be maintained even if up to k-1 links fail.
    *   This allows network designers to assess the "worst-case" scenario in terms of link failures and design networks that maintain connectivity even under adverse conditions.

### 7. Important Points to Remember

*   λ(G) ≤ δ(G)
*   κ(G) ≤ λ(G) ≤ δ(G)
*   Menger's Theorem provides a powerful tool for relating edge-disjoint paths to edge connectivity.
*   Edge connectivity measures the resilience of a graph to edge removals (link failures).
*   Use minimum cut algorithms or adaptations of max-flow algorithms to find edge connectivity efficiently.
*   Edge connectivity is a crucial concept in network design, reliability analysis, and various applications across computer and information science.
