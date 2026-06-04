---
title: "Connectivity"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4"
module: "Module 2: Euler graphs"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8af2b"
status: "completed"
scrapedAt: "2026-05-20T16:13:30.135Z"
---
# MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4

## Module 2: Euler Graphs - Topic: Connectivity

### Learning Outcomes:

*   Understand the concept of connectivity in graphs.
*   Define and identify connected graphs, disconnected graphs, and components.
*   Calculate and interpret the connectivity and edge connectivity of a graph.
*   Apply Menger's theorem to determine connectivity and edge connectivity.
*   Distinguish between different types of connectivity (e.g., vertex connectivity, edge connectivity).
*   Apply the concepts of connectivity to solve problems related to network reliability.

---

## 1. Introduction to Connectivity

*   **Definition:** Connectivity refers to the property of a graph being "all in one piece." In other words, it describes how well-connected the vertices in a graph are. A graph is *connected* if there is a path between every pair of vertices.

*   **Importance:** Connectivity is a fundamental concept in graph theory and has many applications in computer science, particularly in network design, data structures, and algorithm analysis. For instance, in network design, connectivity is crucial to ensuring that all nodes can communicate with each other, even if some links fail.

---

## 2. Connected and Disconnected Graphs

*   **Connected Graph:** A graph G is *connected* if for any two vertices *u* and *v* in G, there exists a path from *u* to *v*.

    *   **Example:**  A complete graph *K<sub>n</sub>* (where every vertex is connected to every other vertex) is always connected.  A path graph *P<sub>n</sub>* (a sequence of vertices connected by edges) is also connected.

*   **Disconnected Graph:** A graph G is *disconnected* if there exists at least one pair of vertices *u* and *v* in G such that there is no path from *u* to *v*.

    *   **Example:** A graph with two separate complete graphs *K<sub>3</sub>* and *K<sub>2</sub>*, with no edges between them, is disconnected.

*   **Components:**  A *component* of a graph G is a maximal connected subgraph.  This means that it is a connected subgraph that is not a proper subgraph of any other connected subgraph of G.  A disconnected graph has multiple components. A connected graph has only one component.

    *   **Example:**  Consider a graph with vertices {A, B, C, D, E, F} and edges {(A, B), (B, C), (D, E), (E, F)}. This graph has two components: the first component consists of vertices {A, B, C} and edges {(A, B), (B, C)}, and the second component consists of vertices {D, E, F} and edges {(D, E), (E, F)}.

---

## 3. Vertex Connectivity (κ(G))

*   **Definition:** The *vertex connectivity* (or simply *connectivity*) of a graph G, denoted by κ(G), is the minimum number of vertices that must be removed from G to disconnect it or reduce it to a trivial graph (a single vertex).

*   **Cut-vertex:** A *cut-vertex* (or articulation point) is a vertex whose removal increases the number of connected components.  A connected graph with a cut-vertex has vertex connectivity of 1. A complete graph K<sub>n</sub> has vertex connectivity of n-1.

*   **Determining κ(G):** Finding κ(G) can be computationally challenging for large graphs. One approach is to try removing different sets of vertices and checking if the graph becomes disconnected.  Menger's theorem provides a useful alternative (see section 5).

*   **Special Cases:**
    *   κ(K<sub>n</sub>) = n - 1  (Complete graph)
    *   κ(G) = 0 if G is disconnected or a single vertex
    *   If G has a cut-vertex, κ(G) = 1.

*   **Example:** Consider a graph with vertices {A, B, C, D} and edges {(A, B), (B, C), (C, D), (D, A)}.  Removing any single vertex does *not* disconnect the graph. However, removing vertices A and C (or B and D) *does* disconnect the graph.  Therefore, κ(G) = 2.

---

## 4. Edge Connectivity (λ(G))

*   **Definition:** The *edge connectivity* of a graph G, denoted by λ(G), is the minimum number of edges that must be removed from G to disconnect it.

*   **Cut-edge (Bridge):** A *cut-edge* (or bridge) is an edge whose removal increases the number of connected components.  A connected graph with a cut-edge has edge connectivity of 1.

*   **Determining λ(G):**  Similar to vertex connectivity, finding λ(G) can be computationally intensive for larger graphs. We can try removing different sets of edges and see when the graph disconnects. Menger's theorem offers a method to avoid this process.

*   **Relationship to Minimum Degree:** λ(G) ≤ δ(G), where δ(G) is the minimum degree of any vertex in G.  This is because removing all edges incident to a vertex of minimum degree will disconnect the graph.

*   **Special Cases:**
    *   λ(K<sub>n</sub>) = n - 1  (Complete graph)
    *   λ(G) = 0 if G is disconnected.
    *   If G has a cut-edge, λ(G) = 1.

*   **Example:** Consider a graph with vertices {A, B, C, D} and edges {(A, B), (B, C), (C, D), (D, A), (B, D)}.  Removing any single edge does *not* disconnect the graph.  However, removing edges (A, B) and (A, D) disconnects the graph, as does removing edges (B,C) and (C,D). Therefore, λ(G) = 2.  The minimum degree is δ(G) = 2.

---

## 5. Menger's Theorem

*   **Statement (Vertex Disjoint Paths):** For any two vertices *u* and *v* in a graph G, the minimum number of vertices needed to separate *u* and *v* (i.e., remove them to eliminate all paths between *u* and *v*) is equal to the maximum number of vertex-disjoint paths between *u* and *v*.  A set of vertex disjoint paths are paths that do not share any vertices (except for the starting and ending vertices).

*   **Implication for Connectivity:** Menger's theorem can be used to determine the vertex connectivity κ(G) by finding the minimum number of vertices that need to be removed to disconnect *any* two vertices in the graph.

*   **Statement (Edge Disjoint Paths):** For any two vertices *u* and *v* in a graph G, the minimum number of edges needed to separate *u* and *v* (i.e., remove them to eliminate all paths between *u* and *v*) is equal to the maximum number of edge-disjoint paths between *u* and *v*. A set of edge disjoint paths are paths that do not share any edges.

*   **Implication for Edge Connectivity:** Menger's theorem can be used to determine the edge connectivity λ(G) by finding the minimum number of edges that need to be removed to disconnect *any* two vertices in the graph.

*   **Benefits:** Menger's theorem provides a powerful tool to determine connectivity and edge connectivity without having to exhaustively search for minimal cut sets. Finding the maximum number of disjoint paths can be more efficient than trying all possible combinations of vertex or edge removals.

*   **Example (Vertex Connectivity using Menger's Theorem):** Consider the same graph from the Vertex Connectivity example: vertices {A, B, C, D} and edges {(A, B), (B, C), (C, D), (D, A)}.  Let's consider vertices A and C. There are two vertex-disjoint paths between A and C:  A-B-C and A-D-C. Therefore, the minimum number of vertices to remove to separate A and C is 2 (removing B and D would achieve this).  Analyzing all pairs of vertices will yield a vertex connectivity of 2.

*   **Example (Edge Connectivity using Menger's Theorem):** Consider the same graph from the Edge Connectivity example: vertices {A, B, C, D} and edges {(A, B), (B, C), (C, D), (D, A), (B, D)}.  Let's consider vertices A and C. There are two edge-disjoint paths between A and C: A-B-C and A-D-C. Therefore, the minimum number of edges to remove to separate A and C is 2 (removing A-B and A-D or removing C-B and C-D would achieve this). Analyzing all pairs of vertices will yield an edge connectivity of 2.

---

## 6. k-Connected and k-Edge-Connected Graphs

*   **k-Connected Graph:** A graph G is *k-connected* (or *k-vertex-connected*) if κ(G) ≥ k. This means that removing fewer than *k* vertices will not disconnect the graph.

    *   **Example:** A graph with κ(G) = 3 is 3-connected.

*   **k-Edge-Connected Graph:** A graph G is *k-edge-connected* if λ(G) ≥ k. This means that removing fewer than *k* edges will not disconnect the graph.

    *   **Example:** A graph with λ(G) = 2 is 2-edge-connected.

*   **Relationship between Connectivity and Edge Connectivity:**  For any graph G,  κ(G) ≤ λ(G) ≤ δ(G), where δ(G) is the minimum degree of any vertex in G.

---

## 7. Applications of Connectivity

*   **Network Reliability:**  Connectivity is a key metric for evaluating the reliability of networks (e.g., computer networks, transportation networks). Higher connectivity implies greater resilience to failures. A k-connected network can withstand the failure of up to k-1 nodes without becoming disconnected.  Edge connectivity is equally useful for dealing with edge failures (e.g., cable cuts).

*   **Data Structures:** Connectivity is used in the design and analysis of data structures like graphs and trees. For example, in a social network represented as a graph, connectivity analysis can help identify influential users or communities.

*   **Algorithm Design:**  Connectivity algorithms are used in many graph algorithms, such as finding minimum spanning trees, shortest paths, and maximum flows.

*   **Cluster Analysis:** Identifying connected components in a graph is used in cluster analysis to group related data points.

---

## 8. Practice Questions/Exercises

1.  **Question:** Determine if the following graph is connected: Vertices: {A, B, C, D}; Edges: {(A, B), (B, C), (C, D)}.

    **Answer:** Yes, the graph is connected. There is a path between every pair of vertices.

2.  **Question:** Find the number of components in the following graph: Vertices: {A, B, C, D, E, F}; Edges: {(A, B), (C, D), (E, F)}.

    **Answer:**  Three components. {A, B}, {C, D}, {E, F}.

3.  **Question:** Calculate the vertex connectivity (κ(G)) of the following graph: Vertices: {A, B, C, D}; Edges: {(A, B), (B, C), (C, A), (A, D)}.

    **Answer:** κ(G) = 1. Removing vertex A disconnects the graph.

4.  **Question:** Calculate the edge connectivity (λ(G)) of the following graph: Vertices: {A, B, C, D}; Edges: {(A, B), (B, C), (C, A), (A, D)}.

    **Answer:** λ(G) = 1. Removing edge (A, D) disconnects vertex D from the rest of the graph.

5.  **Question:**  Apply Menger's theorem to find the vertex connectivity between vertices A and C in the following graph: Vertices: {A, B, C, D}; Edges: {(A, B), (B, C), (C, A), (A, D), (C, D)}.

    **Answer:** There are two vertex-disjoint paths between A and C: A-C and A-D-C. Therefore, the minimum number of vertices to remove to disconnect A and C is 2 (remove D and B to disconnect). If A and C are not adjacent, you would need to remove 1 (B).

6.  **Question:** True or False: For any graph G, κ(G) ≤ λ(G) ≤ δ(G)

    **Answer:** True

---

## 9. Important Points to Remember

*   **Connectivity measures how well a graph is connected.**
*   **A connected graph has a path between any two vertices; a disconnected graph does not.**
*   **A component is a maximal connected subgraph.**
*   **Vertex connectivity (κ(G)) is the minimum number of vertices to remove to disconnect the graph.**
*   **Edge connectivity (λ(G)) is the minimum number of edges to remove to disconnect the graph.**
*   **Menger's theorem provides a powerful tool to determine connectivity and edge connectivity using disjoint paths.**
*   **k-connected and k-edge-connected graphs remain connected even after removing k-1 vertices or edges, respectively.**
*   **Connectivity has important applications in network reliability, data structures, and algorithm design.**
