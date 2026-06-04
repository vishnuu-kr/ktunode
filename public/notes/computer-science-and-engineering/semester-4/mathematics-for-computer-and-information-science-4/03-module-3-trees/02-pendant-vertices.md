---
title: "Pendant vertices"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4"
module: "Module 3: Trees"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8af32"
status: "completed"
scrapedAt: "2026-05-20T16:13:34.325Z"
---
## MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4
## Module 3: Trees
## Topic: Pendant Vertices

**Introduction:** This topic delves into a specific type of vertex found in trees, known as pendant vertices (also called leaf nodes). Understanding pendant vertices is crucial for analyzing the structure and properties of trees, which are fundamental data structures in computer science.

**1. Learning Outcomes:**

By the end of this section, you should be able to:

*   **Define** a pendant vertex and identify it in a given tree.
*   **Explain** the properties of pendant vertices in trees.
*   **Apply** the concept of pendant vertices to solve problems related to tree structure.
*   **Understand** the relationship between pendant vertices and the number of vertices in a tree.

**2. Key Concepts and Definitions:**

*   **Tree:** A connected acyclic graph (i.e., a graph with no cycles and where there is a path between any two vertices).
*   **Vertex (Node):** A fundamental unit in a graph, representing a point.
*   **Edge:** A connection between two vertices in a graph.
*   **Degree of a Vertex:** The number of edges incident to a vertex.
*   **Pendant Vertex (Leaf Node):** A vertex with a degree of 1.  This means it is connected to only one other vertex in the tree.

**3. Properties of Pendant Vertices:**

*   **Existence in Non-Trivial Trees:**  Every non-trivial tree (a tree with more than one vertex) must have at least two pendant vertices.  A trivial tree (single vertex) has no pendant vertices.
*   **Removal and Connectedness:**  Removing a pendant vertex and its incident edge from a tree will result in another tree. The resulting tree will still be connected and acyclic.
*   **Role in Tree Traversal:**  Pendant vertices often serve as termination points or boundaries when traversing a tree using algorithms like Depth-First Search (DFS) or Breadth-First Search (BFS).
*   **Relationship to Paths:**  Pendant vertices are endpoints of the longest paths within a tree. They represent vertices "furthest" from other vertices.

**4. Examples:**

**Example 1: Identifying Pendant Vertices**

Consider the following tree represented by its edges:

```
Edges: {(A,B), (B,C), (B,D), (C,E), (C,F)}
```

Diagrammatically (visualize this):

```
      A
      |
      B
     / \
    C   D
   / \
  E   F
```

*   Vertex A has degree 1 (connected only to B) - **Pendant Vertex**
*   Vertex D has degree 1 (connected only to B) - **Pendant Vertex**
*   Vertex E has degree 1 (connected only to C) - **Pendant Vertex**
*   Vertex F has degree 1 (connected only to C) - **Pendant Vertex**
*   Vertex B has degree 3 (connected to A, C, and D) - Not a Pendant Vertex
*   Vertex C has degree 3 (connected to B, E, and F) - Not a Pendant Vertex

**Example 2: Application - Tree Structure Simplification**

Suppose you have a tree representing a file system. Pendant vertices could represent files, while non-pendant vertices could represent directories. If you want to identify and process only the files (pendant vertices), you can use algorithms that specifically target vertices with a degree of 1.

**Example 3: Relationship to Vertex Count**

In a tree with *n* vertices, the number of edges is always *n-1*.  There's no direct formula to calculate the number of pendant vertices solely based on 'n'. The number of pendant vertices depends on the tree's structure.  However, a tree can't have zero pendant vertices (excluding trivial trees), and it is generally accepted that trees often have a high proportion of pendant vertices, especially in specific tree structures like binary trees.

**5. Practice Questions/Exercises:**

**Question 1:** Given the following edge list, identify all pendant vertices in the tree:
`{(1,2), (2,3), (2,4), (4,5), (4,6), (3,7)}`

**Answer:**
*   Draw the tree diagram to visualize the connections.
*   Vertex 1 has degree 1.
*   Vertex 5 has degree 1.
*   Vertex 6 has degree 1.
*   Vertex 7 has degree 1.
    Therefore, the pendant vertices are: 1, 5, 6, and 7.

**Question 2:**  Is it possible to have a tree with 5 vertices and only one pendant vertex? Explain.

**Answer:** No. Every non-trivial tree must have at least two pendant vertices. If there were only one pendant vertex, the other vertices would have to form a cycle (to maintain connectivity), which violates the definition of a tree (acyclic).

**Question 3:** Explain why removing a pendant vertex and its incident edge from a tree always results in another tree.

**Answer:** Removing a pendant vertex doesn't create a cycle because a pendant vertex only has one connection.  It also doesn't disconnect the graph because the remaining vertices were connected before, and removing a single endpoint will not sever their existing paths. Since the graph remains connected and acyclic, it's still a tree.

**Question 4:**  In a full binary tree of height *h*, how many pendant vertices (leaves) are there?

**Answer:**  In a full binary tree of height *h*, the number of leaves (pendant vertices) is 2<sup>*h*</sup>.

**6. Important Points to Remember:**

*   **Definition:** A pendant vertex (leaf node) has a degree of 1.
*   **Every non-trivial tree has at least two pendant vertices.**
*   Removing a pendant vertex and its connecting edge maintains the tree structure (connected and acyclic).
*   Pendant vertices are crucial for understanding tree traversal and represent endpoints in paths within the tree.
*   The number of pendant vertices provides insights into the shape and structure of the tree, although there's no single formula for determining it from the total number of vertices alone.

These notes provide a comprehensive understanding of pendant vertices in trees, covering their definition, properties, examples, and applications. Reviewing these notes and working through the practice questions will solidify your understanding of this important concept in tree data structures.
