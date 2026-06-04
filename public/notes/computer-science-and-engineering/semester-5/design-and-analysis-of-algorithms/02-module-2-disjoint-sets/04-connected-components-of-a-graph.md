---
title: "Connected components of a Graph"
subject: "DESIGN AND ANALYSIS OF ALGORITHMS"
module: "Module 2: Disjoint Sets "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b54f"
status: "completed"
scrapedAt: "2026-05-20T16:45:36.007Z"
---
# Module 2: Disjoint Sets - Connected Components of a Graph

## Introduction

This module explores the concept of Disjoint Sets (also known as Union-Find data structure) and its application in finding connected components within a graph. Understanding connected components is crucial in various graph algorithms and applications, such as network analysis, image processing, and social network analysis.

## Learning Outcomes

By the end of this module, you will be able to:

*   Define connected components in a graph.
*   Explain the relationship between disjoint sets and connected components.
*   Apply the Disjoint Set data structure to find connected components in a graph.
*   Analyze the time complexity of finding connected components using Disjoint Sets.
*   Identify real-world applications of connected component analysis.

## 1. Key Concepts and Definitions

### 1.1. Graph

*   **Definition:** A graph `G = (V, E)` consists of a set of vertices (nodes) `V` and a set of edges `E`, where each edge connects two vertices.
*   **Types:** Graphs can be directed or undirected.  In an undirected graph, the order of vertices in an edge does not matter (e.g., `{u, v}` is the same as `{v, u}`). In a directed graph, the order matters (e.g., `(u, v)` is different from `(v, u)`).
*   **Representation:** Graphs can be represented using adjacency matrices or adjacency lists.

### 1.2. Connected Graph

*   **Definition:** An undirected graph is *connected* if there exists a path between every pair of vertices.

### 1.3. Connected Component

*   **Definition:** A *connected component* of an undirected graph is a maximal connected subgraph.  "Maximal" means that you cannot add any more vertices or edges without breaking the connectivity.  In other words, a connected component is a set of vertices that are all reachable from each other, and no other vertex in the graph is reachable from any vertex in the component.
*   **Intuition:** Imagine drawing a graph on paper.  The connected components are the separate "islands" of the graph. You can't get from one island to another without lifting your pen.

### 1.4. Disjoint Sets (Union-Find)

*   **Definition:** A Disjoint Set data structure maintains a collection of disjoint (non-overlapping) sets.  It provides two main operations:
    *   **Find(x):**  Determines which set a particular element `x` belongs to.  It returns a representative element of the set.  If `Find(x) == Find(y)`, then `x` and `y` are in the same set.
    *   **Union(x, y):** Merges the sets containing elements `x` and `y` into a single set.
*   **Representation:**  Typically implemented using a tree structure, where each node points to its parent.  The root of each tree represents the set.
*   **Optimization Techniques:**
    *   **Union by Rank (or Size):** Attaches the shorter tree to the taller tree (or the smaller set to the larger set) during the Union operation to minimize tree height.
    *   **Path Compression:** During the Find operation, flattens the tree structure by making each visited node point directly to the root.  This significantly improves performance.

## 2. Disjoint Sets and Connected Components

The connection between disjoint sets and connected components is that each connected component can be represented as a disjoint set. The Disjoint Set data structure provides an efficient way to maintain and manipulate these connected components.

**Algorithm for Finding Connected Components:**

1.  **Initialization:**
    *   Create a Disjoint Set data structure with each vertex in the graph initially in its own set (i.e., each vertex is its own root).

2.  **Iterate through Edges:**
    *   For each edge `(u, v)` in the graph:
        *   `Union(u, v)`:  Merge the sets containing vertices `u` and `v`.  This indicates that `u` and `v` are now part of the same connected component.

3.  **Identify Components:**
    *   After processing all edges, the Disjoint Set data structure represents the connected components.  To get the actual components, you can iterate through the vertices and for each vertex, perform `Find(v)` to get the representative of its component.  All vertices with the same representative belong to the same connected component.

## 3. Example

Consider the following undirected graph represented by its edges:

`Edges = {(0, 1), (1, 2), (3, 4), (4, 5), (6, 7), (7, 8)}`

Vertices: {0, 1, 2, 3, 4, 5, 6, 7, 8}

Let's use the Disjoint Set data structure with Union by Rank and Path Compression to find the connected components.

1.  **Initialization:**

    *   `parent[i] = i` for all `i` from 0 to 8 (each vertex is its own parent)
    *   `rank[i] = 0` for all `i` from 0 to 8 (initially, all trees have rank 0)

2.  **Union Operations:**

    *   `Union(0, 1)`:  Connect vertices 0 and 1.
        *   `Find(0)` returns 0.
        *   `Find(1)` returns 1.
        *   Since `0 != 1`, merge the sets.  Let's make 0 the parent of 1 (or vice versa, it doesn't matter initially since ranks are 0). `parent[1] = 0`. `rank[0] = 1`.

    *   `Union(1, 2)`:  Connect vertices 1 and 2.
        *   `Find(1)` returns 0 (after path compression if it wasn't already the case).
        *   `Find(2)` returns 2.
        *   Since `0 != 2`, merge the sets. Make 0 the parent of 2. `parent[2] = 0`.  `rank[0]` remains 1.

    *   `Union(3, 4)`:  Connect vertices 3 and 4.
        *   `Find(3)` returns 3.
        *   `Find(4)` returns 4.
        *   Since `3 != 4`, merge the sets. Let's make 3 the parent of 4. `parent[4] = 3`. `rank[3] = 1`.

    *   `Union(4, 5)`:  Connect vertices 4 and 5.
        *   `Find(4)` returns 3 (after path compression).
        *   `Find(5)` returns 5.
        *   Since `3 != 5`, merge the sets. Make 3 the parent of 5. `parent[5] = 3`. `rank[3]` remains 1.

    *   `Union(6, 7)`:  Connect vertices 6 and 7.
        *   `Find(6)` returns 6.
        *   `Find(7)` returns 7.
        *   Since `6 != 7`, merge the sets. Let's make 6 the parent of 7. `parent[7] = 6`. `rank[6] = 1`.

    *   `Union(7, 8)`:  Connect vertices 7 and 8.
        *   `Find(7)` returns 6 (after path compression).
        *   `Find(8)` returns 8.
        *   Since `6 != 8`, merge the sets. Make 6 the parent of 8. `parent[8] = 6`. `rank[6]` remains 1.

3.  **Identify Components:**

    *   `Find(0)` returns 0.
    *   `Find(1)` returns 0.
    *   `Find(2)` returns 0.
    *   `Find(3)` returns 3.
    *   `Find(4)` returns 3.
    *   `Find(5)` returns 3.
    *   `Find(6)` returns 6.
    *   `Find(7)` returns 6.
    *   `Find(8)` returns 6.

    Therefore, the connected components are:

    *   `{0, 1, 2}`
    *   `{3, 4, 5}`
    *   `{6, 7, 8}`

## 4. Time Complexity

*   **Disjoint Set Operations (with Union by Rank and Path Compression):** The amortized time complexity for both `Find` and `Union` operations is almost constant, typically denoted as *O(α(n))*, where α(n) is the inverse Ackermann function.  For all practical values of *n*, α(n) is less than 5.  Therefore, we can consider the time complexity to be almost constant.
*   **Finding Connected Components:**  The algorithm involves iterating through all edges (E) and performing Union operations. Therefore, the overall time complexity is *O(E α(n))*, which is effectively *O(E)* for practical purposes.

## 5. Real-World Applications

*   **Network Analysis:**  Identifying clusters of interconnected nodes in a network (e.g., social networks, communication networks).
*   **Image Processing:**  Finding connected regions of pixels with similar properties (e.g., identifying objects in an image).
*   **Maze Generation:**  Disjoint sets can be used to create mazes by randomly adding walls between cells and ensuring that all cells are connected.
*   **Percolation Theory:**  Analyzing the connectivity of porous materials.
*   **Social Network Analysis:** Finding communities of users with strong connections.

## 6. Practice Questions & Exercises

1.  **Question:** Given the graph with edges `{(a, b), (c, d), (e, f), (b, c), (g, h)}`, find the connected components using Disjoint Sets. Show the steps.

    **Answer:**

    *   Vertices: {a, b, c, d, e, f, g, h}
    *   Initialize:  `parent[i] = i` for each vertex. `rank[i] = 0` for each vertex.
    *   Union(a, b): `parent[b] = a`, `rank[a] = 1`
    *   Union(c, d): `parent[d] = c`, `rank[c] = 1`
    *   Union(e, f): `parent[f] = e`, `rank[e] = 1`
    *   Union(b, c): `parent[c] = a` , `rank[a] = 2` (since both a and c had rank 1, a's rank increases)
    *   Union(g, h): `parent[h] = g`, `rank[g] = 1`
    *   Connected Components:  {a, b, c, d}, {e, f}, {g, h}

2.  **Question:** Explain how Union by Rank and Path Compression improve the performance of the Disjoint Set data structure.

    **Answer:**

    *   **Union by Rank:** By attaching the shorter tree to the taller tree, we minimize the height of the trees.  A shallower tree leads to faster `Find` operations, as we need to traverse fewer levels.
    *   **Path Compression:** During the `Find` operation, making each visited node point directly to the root flattens the tree. This drastically reduces the time required for subsequent `Find` operations on those nodes and their descendants.

3.  **Question:** Implement the Disjoint Set data structure (including Union by Rank and Path Compression) in your favorite programming language.  Test it by finding the connected components of a graph represented by an adjacency list.

    (This question requires coding and is not included in the notes. This is left as an exercise for the user to practice.)

## 7. Important Points to Remember

*   Disjoint Sets provide an efficient way to track connected components in a graph.
*   Union by Rank and Path Compression are crucial optimizations that significantly improve the performance of Disjoint Set operations.
*   The amortized time complexity of Disjoint Set operations with these optimizations is nearly constant.
*   Connected component analysis has various applications in diverse fields like network analysis, image processing, and social network analysis.
