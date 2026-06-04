---
title: "Vertex connectivity"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4"
module: "Module 2: Euler graphs"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8af2d"
status: "completed"
scrapedAt: "2026-05-20T16:13:31.554Z"
---
# MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4
## Module 2: Euler Graphs
### Topic: Vertex Connectivity

**Description:** This section focuses on understanding vertex connectivity, a crucial concept in graph theory for assessing the robustness and resilience of networks represented as graphs.  Vertex connectivity measures the minimum number of vertices that need to be removed to disconnect a graph or reduce it to a trivial graph (a single vertex).

**Learning Outcomes:**
*   Define vertex connectivity (κ(G)) of a graph G.
*   Determine the vertex connectivity of simple graphs.
*   Understand the relationship between vertex connectivity, edge connectivity, and minimum degree.
*   Apply vertex connectivity concepts to analyze network robustness.
*   Solve problems involving vertex connectivity.

---

**1. Key Concepts and Definitions**

*   **Vertex Connectivity (κ(G))**: The minimum number of vertices whose removal results in either a disconnected graph or a trivial graph (a graph with only one vertex).  In simpler terms, it's the smallest number of vertices you need to delete to break the graph apart or shrink it to a single point.

*   **Cut-Vertex (Articulation Point)**: A vertex whose removal increases the number of connected components in a graph.  If removing a vertex breaks the graph into more pieces, that vertex is a cut-vertex.

*   **Connected Graph:** A graph where there is a path between every pair of vertices.

*   **Disconnected Graph:** A graph that is not connected, meaning there exist at least two vertices between which there is no path.

*   **Complete Graph (Kn):** A graph where every pair of distinct vertices is connected by an edge.  Each vertex is adjacent to every other vertex.

*   **Trivial Graph:** A graph consisting of a single vertex and no edges.

*   **k-connected Graph:** A graph G is k-connected if removing any k-1 vertices leaves the graph connected.  Alternatively, G is k-connected if κ(G) ≥ k.

---

**2. Determining Vertex Connectivity of Simple Graphs**

*   **General Approach:**  To find κ(G), you need to find the *smallest* set of vertices whose removal disconnects the graph or reduces it to a trivial graph.  This often involves examining different sets of vertices and testing their removal.

*   **Complete Graphs (Kn):** The vertex connectivity of a complete graph Kn is n-1.  This is because removing any n-1 vertices will leave a trivial graph (a single vertex).

*   **Disconnected Graphs:** The vertex connectivity of a disconnected graph is 0.  No vertices need to be removed to disconnect it; it's already disconnected.

*   **Trees:** The vertex connectivity of a tree (with more than one vertex) is 1.  Removing any internal vertex disconnects the tree.  Leaf nodes do *not* disconnect the tree when removed.

*   **Cycles (Cn):** The vertex connectivity of a cycle graph Cn (where n ≥ 3) is 2. Removing any two adjacent vertices disconnects the cycle.

*   **Bipartite Graphs:** The vertex connectivity varies greatly depending on the specific bipartite graph's structure.  You need to analyze the graph to determine the minimum set of vertices to disconnect it.

**Example 1: Complete Graph (K5)**

K5 has 5 vertices, each connected to every other vertex.  Removing any 4 vertices leaves a single isolated vertex.  Therefore, κ(K5) = 5 - 1 = 4.

**Example 2: Cycle Graph (C4)**

C4 has 4 vertices arranged in a cycle.  Removing any two adjacent vertices disconnects the cycle into two isolated vertices.  Therefore, κ(C4) = 2.

**Example 3: A simple graph**

Consider a graph with vertices {A, B, C, D, E} and edges {(A,B), (B,C), (C,D), (D,E), (E,A), (A,C)}.  Removing vertex A and vertex D disconnects the graph into vertices B and E isolated from C. Therefore the connectivity is 2.

---

**3. Relationship Between Vertex Connectivity, Edge Connectivity, and Minimum Degree**

A fundamental relationship exists between vertex connectivity (κ(G)), edge connectivity (λ(G)), and the minimum degree (δ(G)) of a graph G:

**κ(G) ≤ λ(G) ≤ δ(G)**

*   **κ(G) ≤ λ(G):** The vertex connectivity is always less than or equal to the edge connectivity.  It's harder to disconnect a graph by removing edges than by removing vertices.  A set of vertices whose removal disconnects the graph can always be "translated" into a set of edges whose removal disconnects the graph, but the reverse is not always true.

*   **λ(G) ≤ δ(G):** The edge connectivity is always less than or equal to the minimum degree.  The minimum degree represents the smallest number of edges connected to any single vertex. Removing all the edges connected to a vertex with the minimum degree will disconnect that vertex from the rest of the graph. Therefore, you can certainly disconnect the graph by removing edges equal to the minimum degree.

**Important Note:**  This inequality does *not* imply that κ(G) = λ(G) = δ(G). They are often different values.

**Example:** Consider the Petersen graph.  It has a minimum degree of 3 (δ(G) = 3), an edge connectivity of 3 (λ(G) = 3), and a vertex connectivity of 3 (κ(G) = 3). In this case, all three are equal.

However, consider the complete bipartite graph K2,3. The minimum degree is 2.  The edge connectivity is 2.  However, the vertex connectivity is only 2.

---

**4. Applying Vertex Connectivity to Analyze Network Robustness**

Vertex connectivity is a crucial measure of a network's robustness, representing how resilient it is to node failures.  Networks with higher vertex connectivity are more fault-tolerant.

*   **Network Design:** When designing a network (e.g., computer network, social network, transportation network), maximizing vertex connectivity is often a key goal.  This ensures that the network remains connected even if some nodes fail.

*   **Critical Infrastructure:** For critical infrastructure networks (e.g., power grids, water distribution systems), high vertex connectivity is essential to prevent cascading failures.

*   **Cybersecurity:** Understanding vertex connectivity helps in identifying critical nodes in a network that, if compromised, could severely disrupt the network's functionality.

**Example:**  Imagine a computer network represented as a graph.  If the vertex connectivity is 1, there is a single point of failure (a cut-vertex). If that critical server fails, the network becomes disconnected.  A network with a higher vertex connectivity (e.g., 3 or 4) would be more resilient because multiple servers would need to fail simultaneously to disconnect the network.

---

**5. Practice Questions / Exercises with Answers**

**Question 1:** Determine the vertex connectivity of the following graph: A graph with vertices {A, B, C, D} and edges {(A, B), (B, C), (C, D), (A, D)}.

**Answer:** The graph is a cycle graph C4.  The vertex connectivity κ(G) = 2.  Removing vertices A and C (or B and D) disconnects the graph.

**Question 2:** Determine the vertex connectivity of a complete graph K7.

**Answer:** The vertex connectivity κ(K7) = 7 - 1 = 6.

**Question 3:** A graph G has 10 vertices. The minimum degree of G is 4. What can you say about the vertex connectivity of G?

**Answer:**  We know that κ(G) ≤ λ(G) ≤ δ(G). Therefore, κ(G) ≤ 4.  The vertex connectivity is at most 4, but it could be less.

**Question 4:**  Determine the vertex connectivity of a tree that is not a single vertex.

**Answer:** The vertex connectivity is 1, as any internal vertex will disconnect the graph when removed.

**Question 5:** A network of computers is represented by a graph with vertex connectivity 3.  What does this tell you about the network's resilience to server failures?

**Answer:** This means that the network will remain connected even if up to 2 servers fail simultaneously. It requires at least 3 server failures to disconnect the network. Therefore, it's relatively resilient to individual server failures.

---

**6. Important Points to Remember**

*   Vertex connectivity measures the *minimum* number of vertices needed to disconnect a graph or reduce it to a trivial graph.
*   The relationship κ(G) ≤ λ(G) ≤ δ(G) is fundamental.
*   Complete graphs have a high vertex connectivity (n-1 for Kn).
*   Disconnected graphs have a vertex connectivity of 0.
*   Trees (with more than one vertex) have a vertex connectivity of 1.
*   Vertex connectivity is a critical metric for assessing network robustness and fault tolerance.
*   Finding vertex connectivity often requires careful analysis and consideration of different possible vertex removal scenarios.
* Cut vertices are the vertices whose removal increases the number of connected components. They may or may not be included in the set of vertices to be removed to find the connectivity.

This comprehensive study guide should provide a solid foundation for understanding vertex connectivity within the context of Euler graphs and its importance in graph theory and network analysis. Remember to practice with different graph examples to solidify your understanding.
