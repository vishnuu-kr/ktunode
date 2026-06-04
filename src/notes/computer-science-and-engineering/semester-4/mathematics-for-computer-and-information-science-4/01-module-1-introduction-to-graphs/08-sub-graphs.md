---
title: "Sub graphs"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4"
module: "Module 1: Introduction to Graphs "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8af21"
status: "completed"
scrapedAt: "2026-05-20T16:13:23.800Z"
---
# MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4
## Module 1: Introduction to Graphs
### Topic: Subgraphs

**Learning Outcomes:**
*   Define what a subgraph is.
*   Identify subgraphs within a given graph.
*   Distinguish between different types of subgraphs (e.g., spanning subgraph, induced subgraph).
*   Understand the properties of subgraphs.
*   Determine if a graph is a subgraph of another graph.

---

**1. Introduction to Subgraphs**

*   **Definition:** A graph *H* is a **subgraph** of a graph *G* if:
    *   The vertices of *H* are a subset of the vertices of *G*  (V(H) ⊆ V(G)).
    *   The edges of *H* are a subset of the edges of *G* (E(H) ⊆ E(G)).
    *   The endpoints of each edge in *H* are vertices in *H*.  (This implicitly means that the endpoints of edges in H must be vertices that are also present in G.)

*   **Notation:** We often denote a subgraph *H* of a graph *G* as *H ⊆ G*.

*   **Key Concept:** A subgraph is essentially a "smaller" graph that is contained within a larger graph. It can be formed by selecting some (or all) of the vertices and edges of the original graph, as long as the endpoints of the selected edges are also selected as vertices.

**2. Identifying Subgraphs**

*   **Procedure:** To determine if a graph *H* is a subgraph of a graph *G*:
    1.  Check if all vertices in *H* are also in *G*.  If not, *H* is not a subgraph.
    2.  Check if all edges in *H* are also in *G*.  If not, *H* is not a subgraph.
    3.  Verify that the endpoints of each edge in *H* are vertices that are in *H*. If not, *H* is not a subgraph.

*   **Example:**

    *   Let *G* be a graph with vertices V(G) = {A, B, C, D} and edges E(G) = {(A, B), (B, C), (C, D), (D, A), (A, C)}.
    *   Let *H* be a graph with vertices V(H) = {A, B, C} and edges E(H) = {(A, B), (B, C), (A, C)}.

    Is *H* a subgraph of *G*?

    1.  V(H) ⊆ V(G): {A, B, C} ⊆ {A, B, C, D} is true.
    2.  E(H) ⊆ E(G): {(A, B), (B, C), (A, C)} ⊆ {(A, B), (B, C), (C, D), (D, A), (A, C)} is true.
    3.  The endpoints of each edge in H are vertices in H. This is true.

    Therefore, *H* is a subgraph of *G*.

**3. Types of Subgraphs**

*   **Spanning Subgraph:** A subgraph *H* of *G* is a **spanning subgraph** if V(H) = V(G).  That is, it includes all the vertices of the original graph, but possibly only some of its edges.

    *   **Example:**  Consider the graph *G* from the previous example. A spanning subgraph *H'* could have V(H') = {A, B, C, D} and E(H') = {(A, B), (B, C), (C, D)}.

*   **Induced Subgraph:** An **induced subgraph** *H* of *G* is a subgraph whose edge set E(H) consists of *all* the edges in *G* whose endpoints are in V(H). In simpler terms, if two vertices in V(H) are connected by an edge in G, then that edge *must* also be present in H.  An induced subgraph is completely determined by its vertex set.

    *   **Notation:** The induced subgraph of *G* on the vertex set *S* is denoted *G[S]*.

    *   **Example:** Consider the graph *G* from before (V(G) = {A, B, C, D}, E(G) = {(A, B), (B, C), (C, D), (D, A), (A, C)}).  Let's find the induced subgraph *G[{A, B, C}]*.
        *   V(H) = {A, B, C}.
        *   The edges in *G* whose endpoints are in {A, B, C} are (A, B), (B, C), and (A, C).
        *   Therefore, E(H) = {(A, B), (B, C), (A, C)}.
        *   *H* is an induced subgraph of *G*.

*   **Trivial Subgraph:** A subgraph consisting of a single vertex and no edges.  Every graph *G* contains |V(G)| trivial subgraphs.

*   **Complete Subgraph:**  A subgraph which is a complete graph (a graph where every pair of distinct vertices is connected by an edge). Finding complete subgraphs (often called cliques) is an important problem in graph theory.

**4. Properties of Subgraphs**

*   **Transitivity:** If *H* is a subgraph of *G*, and *K* is a subgraph of *H*, then *K* is also a subgraph of *G*.
*   **Empty Graph:** The empty graph (no vertices, no edges) is a subgraph of every graph.
*   **The Graph Itself:** A graph is a subgraph of itself.  (G ⊆ G)

**5. Practice Questions/Exercises**

1.  **Given Graph G:** V(G) = {1, 2, 3, 4, 5}, E(G) = {(1, 2), (2, 3), (3, 4), (4, 5), (5, 1), (1, 3)}

    a)  Is the graph H with V(H) = {1, 2, 3} and E(H) = {(1, 2), (2, 3)} a subgraph of G?
    b)  Is the graph H' with V(H') = {1, 2, 6} and E(H') = {(1, 2)} a subgraph of G?
    c)  Find the induced subgraph G[{1, 3, 5}].
    d) Is the graph H'' with V(H'') = {1, 2, 3, 4, 5} and E(H'') = {(1, 2), (2, 3), (3, 4), (4, 5)} a spanning subgraph of G?

2.  Draw a graph *G* with at least 5 vertices and 6 edges.  Then:

    a)  Draw a subgraph *H* of *G*.
    b)  Draw a spanning subgraph *H'* of *G*.
    c)  Draw an induced subgraph *H''* of *G*.

**Answers to Practice Questions:**

1.  a) Yes, H is a subgraph of G.
    b) No, H' is not a subgraph of G because the vertex '6' is not in G.
    c) G[{1, 3, 5}] has V(H) = {1, 3, 5} and E(H) = {(1, 3), (5, 1)}.
    d) Yes, H'' is a spanning subgraph of G.  It has all vertices of G, but only some of the edges.

2.  Answers will vary based on the graph *G* chosen.  Ensure your answers meet the criteria defined above for each type of subgraph.

**6. Important Points to Remember**

*   A subgraph *H* cannot contain vertices or edges that are not present in the original graph *G*.
*   A spanning subgraph retains all the vertices of the original graph.
*   An induced subgraph is determined solely by its vertex set – it includes *all* edges from the original graph between those vertices.
*   Understanding subgraphs is fundamental to more advanced graph theory concepts and algorithms. Finding certain types of subgraphs (like cliques or isomorphic subgraphs) forms the basis of many problems in computer science.
