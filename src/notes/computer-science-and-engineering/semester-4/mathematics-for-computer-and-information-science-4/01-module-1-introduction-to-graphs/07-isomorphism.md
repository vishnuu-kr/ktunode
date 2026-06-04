---
title: "Isomorphism"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4"
module: "Module 1: Introduction to Graphs "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8af20"
status: "completed"
scrapedAt: "2026-05-20T16:13:23.151Z"
---
# MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4
## Module 1: Introduction to Graphs
### Topic: Isomorphism

**Learning Outcomes:** Upon completion of this topic, you will be able to:

*   Understand the concept of graph isomorphism.
*   Determine if two given graphs are isomorphic.
*   Apply necessary conditions for graph isomorphism.
*   Identify invariants preserved under isomorphism.
*   Explain the significance of graph isomorphism in computer science.

---

**1. Introduction to Isomorphism**

*   **Definition:** Two graphs, G = (V, E) and G' = (V', E'), are *isomorphic* if there exists a bijective function (one-to-one and onto mapping)  f: V → V' such that for any two vertices u and v in V, the edge (u, v) exists in E if and only if the edge (f(u), f(v)) exists in E'.  In simpler terms, two graphs are isomorphic if they are structurally the same, even if their vertex names are different.

*   **Isomorphism Mapping (f):**  The function 'f' is called an *isomorphism* or *adjacency-preserving bijection*. It renames the vertices of G to correspond to the vertices of G' while preserving the edge relationships.

*   **Notation:** We denote that graph G is isomorphic to graph G' as G ≅ G'.

*   **Why Isomorphism Matters:**  Isomorphism is a fundamental concept in graph theory. It allows us to determine whether two graphs represent the same underlying structure, even if they are presented differently.  This is crucial in various applications, including:

    *   **Database Design:** Determining if different schema representations are equivalent.
    *   **Network Analysis:** Identifying structurally identical networks despite different labeling.
    *   **Algorithm Design:** Recognizing equivalent graph structures to apply optimized algorithms.
    *   **Chemistry:** Representing molecules as graphs; isomorphic graphs represent the same molecule.
    *   **Compiler Optimization:** Representing program flow as graphs and identifying isomorphic subgraphs for optimization.

**2. Key Concepts and Definitions**

*   **Bijective Function:** A function that is both injective (one-to-one) and surjective (onto).

    *   **Injective (One-to-One):** Each element in the domain maps to a unique element in the codomain.
    *   **Surjective (Onto):** Every element in the codomain has at least one element in the domain that maps to it.

*   **Adjacency:** Two vertices, u and v, are *adjacent* if there is an edge connecting them (i.e., (u, v) ∈ E).

*   **Incidence:** An edge is *incident* to a vertex if the vertex is one of the edge's endpoints.

*   **Degree of a Vertex:** The number of edges incident to a vertex.  Denoted as deg(v).

*   **Adjacency Matrix:** A matrix representing the edges of a graph.  If graph G has n vertices, its adjacency matrix A is an n x n matrix where A[i, j] = 1 if there's an edge between vertex i and vertex j, and 0 otherwise.

*   **Incidence Matrix:** A matrix representing the incidence relations between vertices and edges.

*   **Complete Graph (K<sub>n</sub>):** A graph where every vertex is connected to every other vertex.

*   **Cycle Graph (C<sub>n</sub>):** A graph consisting of a single cycle with n vertices.

*   **Path Graph (P<sub>n</sub>):** A graph consisting of a path with n vertices.

*   **Bipartite Graph:** A graph whose vertices can be divided into two disjoint sets, U and V, such that every edge connects a vertex in U to a vertex in V.
**3. Determining Graph Isomorphism**

Determining whether two graphs are isomorphic can be challenging, especially for larger graphs.  There's no single efficient algorithm that works for all cases. However, we can use the following approaches:

*   **Exhaustive Search:**

    *   Generate all possible bijective mappings between the vertex sets of the two graphs.
    *   For each mapping, check if it preserves adjacency (i.e., if an edge exists in one graph, the corresponding edge exists in the other graph under the mapping).
    *   This approach is computationally expensive (O(n!)) and impractical for graphs with more than a few vertices.

*   **Using Invariants:**  Invariants are properties of a graph that *must* be preserved under isomorphism. If two graphs have different values for any invariant, they cannot be isomorphic. Common invariants include:

    *   **Number of Vertices:** If |V| ≠ |V'|, then G <binary data, 1 bytes><binary data, 1 bytes><binary data, 1 bytes> G'.
    *   **Number of Edges:** If |E| ≠ |E'|, then G <binary data, 1 bytes><binary data, 1 bytes><binary data, 1 bytes> G'.
    *   **Degree Sequence:** The sequence of vertex degrees.  The degree sequences of isomorphic graphs must be the same (or reorderable to be the same). *Note: Same degree sequence does NOT guarantee isomorphism, but different degree sequences guarantee non-isomorphism.*
    *   **Connectivity:**  If one graph is connected and the other is not, they are not isomorphic.
    *   **Presence of Cycles of a Specific Length:** The number of cycles of length k must be the same in both graphs.
    *   **Distance Between Vertices:**  The distance (number of edges in the shortest path) between corresponding vertices must be preserved.
    *   **Adjacency Matrix Eigenvalues:** If the adjacency matrices have different eigenvalues, they are not isomorphic.

*   **Backtracking Algorithms:**  More efficient than exhaustive search, backtracking algorithms explore possible mappings and prune branches that cannot lead to a valid isomorphism.

**4. Examples of Isomorphism**

*   **Example 1: Simple Isomorphism**

    *   **Graph G:** V = {a, b, c}, E = {(a, b), (b, c)}
    *   **Graph G':** V' = {1, 2, 3}, E' = {(1, 2), (2, 3)}

    These graphs are isomorphic. A possible isomorphism is:

    *   f(a) = 1
    *   f(b) = 2
    *   f(c) = 3

    Under this mapping, the edge (a, b) in G corresponds to the edge (1, 2) in G', and the edge (b, c) in G corresponds to the edge (2, 3) in G'. All vertices are mapped and adjacencies are preserved.

*   **Example 2: Non-Isomorphic Graphs**

    *   **Graph G:** V = {a, b, c, d}, E = {(a, b), (b, c), (c, d)} (Path Graph P<sub>4</sub>)
    *   **Graph G':** V' = {1, 2, 3, 4}, E' = {(1, 2), (2, 3), (3, 4), (4, 1)} (Cycle Graph C<sub>4</sub>)

    These graphs are *not* isomorphic. G is a path, while G' is a cycle.  While both have 4 vertices and 3 edges, the degree sequences differ.  G has degree sequence {1, 2, 2, 1} and G' would have to have edges removed to match the node counts, or edge count would vary.

*   **Example 3:  Graphs with Same Degree Sequence (but Not Isomorphic)**

    This is a classic example showcasing that having the same degree sequence is a necessary but not sufficient condition for isomorphism.

    *   **Graph G:** V = {a, b, c, d, e, f}, E = {(a,b), (a,c), (a,d), (b,c), (b,e), (c,f), (d,e), (d,f), (e,f)} (Two triangles joined by 3 additional lines)
    *   **Graph G':** V' = {1, 2, 3, 4, 5, 6}, E' = {(1,2), (1,3), (1,4), (2,3), (2,5), (3,6), (4,5), (4,6), (5,6)} (Complete bipartite graph K<sub>3,3</sub>)

    Both graphs have 6 vertices and 9 edges.  Both have a degree sequence of {3, 3, 3, 3, 3, 3}.  However, they are not isomorphic. G has triangles (cycles of length 3), while G' does not. Specifically G has 4 triangles: {a,b,c}, {a,b,d}, {a,c,d}, {e,f,d}. G' has no triangles, so G and G' are not isomorphic

**5. Algorithm for Checking Degree Sequence Isomorphism**

```python
def degree_sequence_isomorphic(graph1, graph2):
    """
    Checks if two graphs have the same degree sequence.

    Args:
        graph1: A dictionary representing the first graph where keys are vertices
                and values are a list of adjacent vertices.
        graph2: A dictionary representing the second graph.

    Returns:
        True if the graphs have the same degree sequence, False otherwise.
    """

    degree_seq1 = sorted([len(graph1[v]) for v in graph1.keys()])
    degree_seq2 = sorted([len(graph2[v]) for v in graph2.keys()])

    return degree_seq1 == degree_seq2

# Example Usage:
graph_g = {'a': ['b', 'c', 'd'], 'b': ['a', 'c', 'e'], 'c': ['a', 'b', 'f'],
           'd': ['a', 'e', 'f'], 'e': ['b', 'd', 'f'], 'f': ['c', 'd', 'e']}

graph_g_prime = {1: [2, 3, 4], 2: [1, 3, 5], 3: [1, 2, 6],
                  4: [1, 5, 6], 5: [2, 4, 6], 6: [3, 4, 5]}


if degree_sequence_isomorphic(graph_g, graph_g_prime):
    print("Graphs G and G' have the same degree sequence.")
else:
    print("Graphs G and G' do not have the same degree sequence.")
```

**6. Practice Questions and Exercises**

1.  **Are the following graphs isomorphic? Justify your answer.**

    *   **Graph G:** V = {1, 2, 3, 4}, E = {(1, 2), (2, 3), (3, 4), (4, 1)} (C<sub>4</sub>)
    *   **Graph G':** V' = {a, b, c, d}, E' = {(a, c), (c, b), (b, d), (d, a)}

    *Solution:* Yes, they are isomorphic. A possible isomorphism is f(1)=a, f(2)=c, f(3)=b, f(4)=d. Both are cycle graphs with 4 vertices.

2.  **Are the following graphs isomorphic? Justify your answer.**

    *   **Graph G:** V = {a, b, c}, E = {(a, b), (a, c)}
    *   **Graph G':** V' = {x, y, z}, E' = {(x, z), (y, z)}

    *Solution:* Yes, they are isomorphic. A possible isomorphism is f(a) = z, f(b) = x, f(c) = y.

3.  **Graphs G and G' have 6 vertices each. G has 7 edges and G' has 8 edges. Are they isomorphic? Why or why not?**

    *Solution:* No, they are not isomorphic. Isomorphic graphs must have the same number of edges.

4.  **Let G and G' be isomorphic graphs. If the maximum degree of a vertex in G is 5, what is the maximum degree of a vertex in G'?**

    *Solution:* The maximum degree of a vertex in G' is also 5. The degree sequence is an invariant of isomorphism.

5.  **Write a Python function to check if two graphs represented as dictionaries (vertices as keys, list of neighbors as values) have the same number of vertices and edges.**

    ```python
    def same_vertex_edge_count(graph1, graph2):
        """
        Checks if two graphs have the same number of vertices and edges.

        Args:
            graph1: A dictionary representing the first graph.
            graph2: A dictionary representing the second graph.

        Returns:
            True if the graphs have the same number of vertices and edges, False otherwise.
        """
        num_vertices1 = len(graph1)
        num_vertices2 = len(graph2)

        num_edges1 = sum(len(graph1[v]) for v in graph1) // 2  # Divide by 2 since each edge is counted twice
        num_edges2 = sum(len(graph2[v]) for v in graph2) // 2

        return (num_vertices1 == num_vertices2) and (num_edges1 == num_edges2)
    ```

6.  **Consider two graphs, G and G'. G is a complete graph K<sub>5</sub> (5 vertices, all pairwise connected).  What must be true of G' if G and G' are isomorphic?**

    *Solution:* If G and G' are isomorphic, G' must also be a complete graph K<sub>5</sub>. It must have 5 vertices and every pair of vertices must be connected by an edge.

**7. Important Points to Remember**

*   Isomorphism means structural equivalence, not identical labeling.
*   Invariants can quickly rule out non-isomorphism but do *not* guarantee isomorphism.
*   Finding an isomorphism mapping *proves* isomorphism.
*   The graph isomorphism problem is a classic problem in computer science. It is known to be in NP, but it is not known to be in P or NP-complete.
*   Degree sequence equality is *necessary* but *not sufficient* for isomorphism.
*   Consider the presence of cycles, connectivity, and other structural properties to further differentiate graphs.
---
