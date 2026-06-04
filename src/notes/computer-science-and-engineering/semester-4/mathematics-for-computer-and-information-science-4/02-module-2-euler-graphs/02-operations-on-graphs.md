---
title: "Operations on Graphs"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4"
module: "Module 2: Euler graphs"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8af28"
status: "completed"
scrapedAt: "2026-05-20T16:13:27.988Z"
---
# MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4
## Module 2: Euler Graphs
### Topic: Operations on Graphs

**Learning Outcomes:**

*   Understand and apply the fundamental operations on graphs.
*   Perform union, intersection, difference, and ring sum operations on graphs.
*   Identify and create subgraphs and quotient graphs.
*   Understand and apply the concepts of vertex deletion and edge deletion.
*   Analyze the effects of these operations on graph properties (e.g., connectivity, degree sequence).

---

**1. Key Concepts and Definitions**

*   **Graph:** A graph *G* is an ordered pair (V, E), where *V* is a set of vertices (or nodes) and *E* is a set of edges. Each edge connects two vertices.
*   **Vertex:** A node in a graph.
*   **Edge:** A connection between two vertices in a graph.
*   **Adjacent Vertices:** Two vertices are adjacent if they are connected by an edge.
*   **Incident Edge:** An edge is incident to a vertex if the vertex is one of the endpoints of the edge.
*   **Subgraph:** A graph *H* = (V', E') is a subgraph of *G* = (V, E) if V' ⊆ V and E' ⊆ E. That is, the vertices of H are a subset of the vertices of G and the edges of H are a subset of the edges of G.  Also, if an edge e ∈ E' then its endpoints must be in V'.
*   **Spanning Subgraph:** A subgraph *H* = (V', E') of *G* = (V, E) is a spanning subgraph if V' = V.  In other words, a spanning subgraph contains all the vertices of the original graph but may not contain all the edges.
*   **Induced Subgraph:**  Given a graph *G* = (V, E) and a subset of vertices V' ⊆ V, the subgraph of *G* induced by V' is the graph H = (V', E'), where E' consists of all edges in E whose endpoints are both in V'.
*   **Quotient Graph (Contraction):** A graph obtained by identifying (merging) two or more vertices in a graph into a single vertex. All edges that were incident to the original vertices are now incident to the new, combined vertex. Loops may arise.

---

**2. Fundamental Graph Operations**

These operations create new graphs from existing ones.

**2.1 Union (G ∪ H)**

*   **Definition:** Given two graphs *G* = (VG, EG) and *H* = (VH, EH), the union of *G* and *H* is a graph *G ∪ H* = (VG ∪ VH, EG ∪ EH).  Edges and vertices are combined, removing any duplicates.
*   **Explanation:** The vertex set of the union is the union of the vertex sets of the two graphs. The edge set of the union is the union of the edge sets of the two graphs.
*   **Example:**

    *   G = ({v1, v2, v3}, {e1, e2}), where e1 = (v1, v2), e2 = (v2, v3)
    *   H = ({v3, v4, v5}, {e3, e4}), where e3 = (v3, v4), e4 = (v4, v5)
    *   G ∪ H = ({v1, v2, v3, v4, v5}, {e1, e2, e3, e4})

**2.2 Intersection (G ∩ H)**

*   **Definition:** Given two graphs *G* = (VG, EG) and *H* = (VH, EH), the intersection of *G* and *H* is a graph *G ∩ H* = (VG ∩ VH, EG ∩ EH).
*   **Explanation:** The vertex set of the intersection is the intersection of the vertex sets of the two graphs. The edge set of the intersection is the intersection of the edge sets of the two graphs.  Only vertices and edges present in both graphs are included in the intersection.
*   **Example:**

    *   G = ({v1, v2, v3}, {e1, e2}), where e1 = (v1, v2), e2 = (v2, v3)
    *   H = ({v2, v3, v4}, {e2, e3}), where e2 = (v2, v3), e3 = (v3, v4)
    *   G ∩ H = ({v2, v3}, {e2})

**2.3 Difference (G - H)**

*   **Definition:** Given two graphs *G* = (VG, EG) and *H* = (VH, EH), the difference of *G* and *H* is a graph *G - H* = (VG, EG - EH).
*   **Explanation:** The vertex set of the difference is the vertex set of G. The edge set of the difference is the edge set of G excluding any edges that are also in H.  This operation removes edges from *G* that are present in *H*.  Vertices are only removed if they become isolated as a result of the edge removal.
*   **Example:**

    *   G = ({v1, v2, v3}, {e1, e2}), where e1 = (v1, v2), e2 = (v2, v3)
    *   H = ({v2, v3, v4}, {e2, e3}), where e2 = (v2, v3), e3 = (v3, v4)
    *   G - H = ({v1, v2, v3}, {e1})

**2.4 Ring Sum (G ⊕ H)**

*   **Definition:** Given two graphs *G* = (VG, EG) and *H* = (VH, EH), the ring sum of *G* and *H* is a graph *G ⊕ H* = (VG ∪ VH, (EG ∪ EH) - (EG ∩ EH)).  This is also sometimes called the symmetric difference.
*   **Explanation:**  The vertex set is the union of the vertices of *G* and *H*. The edge set consists of edges that are in *G* or *H*, but *not* in both (i.e., the union of the edge sets minus the intersection of the edge sets).
*   **Example:**

    *   G = ({v1, v2, v3}, {e1, e2}), where e1 = (v1, v2), e2 = (v2, v3)
    *   H = ({v2, v3, v4}, {e2, e3}), where e2 = (v2, v3), e3 = (v3, v4)
    *   G ⊕ H = ({v1, v2, v3, v4}, {e1, e3})

**3. Subgraphs and Quotient Graphs**

**3.1 Subgraphs**

*   As defined above.
*   **Example:** Let *G* = ({v1, v2, v3, v4}, {e1, e2, e3, e4, e5}), where e1 = (v1, v2), e2 = (v2, v3), e3 = (v3, v4), e4 = (v4, v1), e5 = (v1, v3).
    *   *H1* = ({v1, v2, v3}, {e1, e2}) is a subgraph of *G*.
    *   *H2* = ({v1, v2, v3, v4}, {e1, e2, e3, e4}) is a spanning subgraph of *G*.
    *   *H3* = ({v1, v2, v3}, {e1, e5}) is an induced subgraph of *G* (induced by the vertices v1, v2, v3).

**3.2 Quotient Graphs (Contraction)**

*   **Definition:** A graph obtained by identifying (merging) two or more vertices in a graph into a single vertex. All edges that were incident to the original vertices are now incident to the new, combined vertex. Loops may arise.
*   **Example:** Consider a graph *G* = ({v1, v2, v3, v4}, {e1, e2, e3}), where e1 = (v1, v2), e2 = (v2, v3), e3 = (v3, v4).  If we contract vertices v2 and v3 into a new vertex v2', the resulting quotient graph *G'* = ({v1, v2', v4}, {e1', e2'}), where e1' = (v1, v2'), e2' = (v2', v4). Notice how e1 and e2 became e1' and e2', respectively, and are now incident to the new combined vertex.

**4. Vertex and Edge Deletion**

**4.1 Vertex Deletion**

*   **Definition:** Given a graph *G* = (V, E) and a vertex *v* ∈ *V*, deleting *v* from *G* results in a new graph *G - v* = (V - {v}, E'), where E' is the set of edges in E that are not incident to *v*.
*   **Explanation:** Removing a vertex also removes all edges incident to that vertex.
*   **Example:**
    *   *G* = ({v1, v2, v3}, {e1, e2}), where e1 = (v1, v2), e2 = (v2, v3)
    *   Deleting v2 from G yields *G - v2* = ({v1, v3}, {}).  Notice how e1 and e2 are also removed, and v1 and v3 are now isolated.

**4.2 Edge Deletion**

*   **Definition:** Given a graph *G* = (V, E) and an edge *e* ∈ *E*, deleting *e* from *G* results in a new graph *G - e* = (V, E - {e}).
*   **Explanation:** Removing an edge does *not* remove any vertices. It only removes the specified edge.
*   **Example:**
    *   *G* = ({v1, v2, v3}, {e1, e2}), where e1 = (v1, v2), e2 = (v2, v3)
    *   Deleting e2 from G yields *G - e2* = ({v1, v2, v3}, {e1}). Notice v2 and v3 are still present, but the edge connecting them is not.

**5. Effects on Graph Properties**

These operations can significantly alter the properties of a graph.

*   **Connectivity:** Union can connect previously disconnected components. Intersection can disconnect a graph. Deletion (vertex or edge) can disconnect a connected graph.
*   **Degree Sequence:** Vertex deletion always changes the degree sequence, as the deleted vertex and its adjacent vertices have their degrees affected. Edge deletion reduces the degree of the incident vertices by one.
*   **Eulerian/Hamiltonian Properties:** These properties can be affected by any of the graph operations.  Adding or removing edges or vertices may break the necessary conditions for a graph to be Eulerian or Hamiltonian.

---

**Practice Questions and Exercises**

**Question 1:** Given G = ({v1, v2, v3, v4}, {(v1, v2), (v2, v3)}) and H = ({v3, v4, v5}, {(v3, v4), (v4, v5)}), find G ∪ H, G ∩ H, G - H, and G ⊕ H.

**Answer:**

*   G ∪ H = ({v1, v2, v3, v4, v5}, {(v1, v2), (v2, v3), (v3, v4), (v4, v5)})
*   G ∩ H = ({v3, v4}, {(v3, v4)}) *Note: because vertices v3 and v4 are in the intersection, the edge (v3, v4) is as well.*
*   G - H = ({v1, v2, v3, v4}, {(v1, v2), (v2, v3)}) *Note: G and H have no edges in common. Thus no edges are removed from G.*
*   G ⊕ H = ({v1, v2, v3, v4, v5}, {(v1, v2), (v2, v3), (v3, v4), (v4, v5)}) *Note: G and H have no edges in common. The ring sum is just the union of the edges.*

**Question 2:** Let G be a complete graph K5 (5 vertices, every vertex connected to every other vertex).
    * How many edges does K5 have?
    * How many edges will remain if we delete one vertex?
    * How many edges will remain if we delete one edge from the original K5?

**Answer:**

*   K5 has 5*(5-1)/2 = 10 edges.
*   If we delete one vertex, we are left with K4, which has 4*(4-1)/2 = 6 edges.
*   If we delete one edge from K5, we will have 10 - 1 = 9 edges.

**Question 3:** Given a graph *G*, describe the effects of deleting a cut vertex.

**Answer:** Deleting a cut vertex will increase the number of connected components of the graph. A cut vertex is a vertex whose removal disconnects the graph or increases the number of connected components.

**Question 4:** Explain the difference between a subgraph and a spanning subgraph.

**Answer:** A subgraph is a graph whose vertices and edges are subsets of the original graph. A spanning subgraph is a subgraph that contains all the vertices of the original graph but might not include all the edges.

**Question 5:** Draw a simple graph with 5 vertices and 7 edges.  Then create a quotient graph by contracting two non-adjacent vertices.

**Answer:** (Example)

1.  *G* = ({v1, v2, v3, v4, v5}, {(v1, v2), (v2, v3), (v3, v4), (v4, v5), (v5, v1), (v1,v3), (v2,v4)})

2.  Contract v1 and v4 into v1'.  The edges become: {(v1', v2), (v2, v3), (v3, v1'), (v1', v5), (v5, v1'), (v2, v1')}. This results in: *G'* = ({v1', v2, v3, v5}, {(v1', v2), (v2, v3), (v3, v1'), (v1', v5), (v5, v1'), (v2, v1')}) Notice the edges between the contracted vertices are now loops on v1'. Also, there are multiple edges between v1' and v2.

---

**Important Points to Remember**

*   Understand the definitions of each operation.  Make sure you can clearly state the effect of the operation on the vertex set and the edge set.
*   Pay attention to the order of operations in some cases. G - H is not the same as H - G.
*   Be aware of how graph operations can affect various graph properties, especially connectivity and degrees.
*   When deleting a vertex, remember to also remove all incident edges.
*   When creating quotient graphs, remember to account for loops and multiple edges.
*   Practice drawing examples of the operations on different graphs to solidify your understanding.
