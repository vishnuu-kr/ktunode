---
title: "Pendant vertex and Null graph"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4"
module: "Module 1: Introduction to Graphs "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8af1f"
status: "completed"
scrapedAt: "2026-05-20T16:13:22.442Z"
---
# MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4
## Module 1: Introduction to Graphs
### Topic: Pendant Vertex and Null Graph

**Learning Outcomes:**

*   Define and identify a pendant vertex in a graph.
*   Define and identify a null graph.
*   Distinguish between a pendant vertex and other types of vertices.
*   Understand the properties of a null graph.
*   Apply the concepts of pendant vertices and null graphs to analyze simple graph structures.

---

**1. Pendant Vertex (Leaf Vertex)**

*   **Definition:** A pendant vertex (also called a leaf vertex) is a vertex in a graph that is connected to exactly one other vertex.  In other words, it has a degree of 1.

*   **Key Concepts:**

    *   **Degree:** The degree of a vertex is the number of edges incident to that vertex.  For a pendant vertex, the degree is always 1.
    *   **Incident Edge:** An edge is incident to a vertex if the vertex is an endpoint of that edge.

*   **Identifying Pendant Vertices:**

    *   Look for vertices that have only one connecting edge.
    *   Determine the degree of each vertex in the graph. Vertices with degree 1 are pendant vertices.

*   **Examples:**

    *   **Example 1:** Consider a graph with vertices {A, B, C} and edges {(A, B), (B, C)}.  Vertex A and vertex C are pendant vertices because they each have a degree of 1. Vertex B has a degree of 2.

    *   **Example 2:** In a star graph (like a hub-and-spoke network), all the "spoke" vertices are pendant vertices. The central "hub" vertex is not a pendant vertex.

*   **Distinguishing from other types of vertices:**

    *   **Isolated Vertex:** An isolated vertex has a degree of 0 (no edges connected to it).  A pendant vertex *does* have an edge connected to it.
    *   **Intermediate Vertex:** These are vertices with a degree greater than 1, connecting to multiple other vertices.

*   **Importance:** Pendant vertices are important in several applications, including:

    *   **Tree Structures:** Trees often have many pendant vertices.  Identifying them can help understand the tree's structure.
    *   **Network Analysis:**  Pendant vertices in a network may represent end-users or devices that only connect to a single server.
    *   **Data Structures:**  In data structures such as linked lists and binary trees, pendant vertices (leaves) are important for traversal and storage.

**2. Null Graph (Empty Graph)**

*   **Definition:** A null graph is a graph that consists only of vertices and has no edges.

*   **Key Concepts:**

    *   **Vertices:** A null graph must have at least one vertex.
    *   **Edges:** A null graph has *no* edges.
    *   **Degree:**  All vertices in a null graph have a degree of 0 (isolated vertices).

*   **Identifying Null Graphs:**

    *   Verify that there are vertices present.
    *   Confirm that there are no edges connecting any of the vertices.

*   **Examples:**

    *   A graph with vertices {A, B, C} and an empty set of edges {} is a null graph.

    *   A graph with a single vertex {A} and no edges is also a null graph.

*   **Properties of Null Graphs:**

    *   All vertices are isolated.
    *   The degree of each vertex is zero.
    *   A null graph is a special case of a complete graph (K<sub>n</sub>) where n=0. However, some definitions require the null graph to have at least one vertex.
    *   A null graph is not very useful in most practical applications of graph theory on its own but serves as a base case or starting point for building more complex graphs.

*   **Importance:**  While not directly useful for modeling complex systems, null graphs are important for:

    *   **Theoretical Foundations:**  They represent the simplest possible graph structure and are important for understanding the mathematical properties of graphs.
    *   **Algorithmic Base Cases:**  They can serve as base cases in graph algorithms or as initial states in simulations.

**Important Points to Remember:**

*   A **pendant vertex** *must* have one connecting edge.
*   An **isolated vertex** has *no* connecting edges (degree 0).
*   A **null graph** contains only vertices and *no* edges.

---

**Practice Questions & Exercises:**

1.  **Identify the pendant vertices in the following graph:** Vertices: {A, B, C, D, E}; Edges: {(A, B), (B, C), (B, D), (D, E)}.

    *   **Answer:** A, C, and E are pendant vertices.
2.  **Is a graph with vertices {X, Y, Z} and edges {(X, Y), (Y, Z), (X, Z)} a null graph?**

    *   **Answer:** No, it is not a null graph because it has edges. It is actually a complete graph (K<sub>3</sub>).
3.  **What is the degree of a pendant vertex?**

    *   **Answer:** 1
4.  **Can a graph with no vertices be considered a null graph?**

    *   **Answer:** Some definitions say 'yes'. Other definitions require at least one vertex, meaning 'no' in that case. Check your textbook or lecturer's definition for clarification.
5.  **Draw a null graph with 5 vertices.**

    *   **Answer:** Draw 5 dots on a page, labeled A, B, C, D, and E.  Do *not* draw any lines connecting them.
6.  **Describe the difference between a pendant vertex and an isolated vertex.**

    *   **Answer:** A pendant vertex has exactly one edge connected to it, giving it a degree of 1. An isolated vertex has no edges connected to it, giving it a degree of 0.

---

These notes provide a comprehensive introduction to pendant vertices and null graphs, covering definitions, identification, examples, and practice exercises.  Make sure to review the material and work through additional examples to solidify your understanding. Good luck!
