---
title: "Trees and Graphs"
subject: "DATA STRUCTURES"
module: "Module 3: Trees and Graphs"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8be9e"
status: "completed"
scrapedAt: "2026-05-20T16:51:58.359Z"
---
# Data Structures: Module 3 - Trees and Graphs

This module introduces two fundamental and powerful data structures: Trees and Graphs. They are essential for representing hierarchical and network-like relationships, respectively, and are widely used in various computer science applications.

## Learning Outcomes:

By the end of this module, you will be able to:

*   **Understand the basic concepts and definitions of trees and graphs.**
*   **Explain the properties and characteristics of different types of trees (e.g., binary trees, binary search trees, AVL trees, B-trees).**
*   **Describe the common applications of trees and graphs.**
*   **Implement tree and graph data structures and their operations using various approaches.**
*   **Analyze the time and space complexity of tree and graph algorithms.**
*   **Understand and apply tree traversal algorithms (in-order, pre-order, post-order).**
*   **Understand and apply graph traversal algorithms (Breadth-First Search (BFS) and Depth-First Search (DFS)).**
*   **Understand and apply fundamental graph algorithms like finding the shortest path (Dijkstra's, Bellman-Ford) and minimum spanning tree (Prim's, Kruskal's).**

---

## 1. Introduction to Trees

**Definition:** A **tree** is a non-linear, hierarchical data structure that consists of nodes connected by edges. It has a specific structure:

*   **Root Node:** The topmost node in the tree.
*   **Parent Node:** A node that has one or more child nodes.
*   **Child Node:** A node that is directly connected to a parent node.
*   **Leaf Node (Terminal Node):** A node that has no child nodes.
*   **Edge:** A connection between two nodes.
*   **Path:** A sequence of nodes connected by edges.
*   **Subtree:** A tree formed by a node and all of its descendants.
*   **Height of a Node:** The number of edges on the longest downward path from the node to a leaf.
*   **Height of a Tree:** The height of its root node.
*   **Depth of a Node:** The number of edges from the root to the node.
*   **Level of a Node:** The depth of the node plus one. The root is at level 1.
*   **Degree of a Node:** The number of edges connected to a node.
*   **Degree of a Tree:** The maximum degree of any node in the tree.

**Key Properties of Trees:**

*   A tree with *n* nodes has exactly *n-1* edges.
*   There is exactly one unique path between any two nodes in a tree.
*   A tree is connected and acyclic.
*   Removing any edge from a tree disconnects it.
*   Adding any edge to a tree creates a cycle.

---

### 1.1 Types of Trees

#### 1.1.1 Binary Tree

**Definition:** A binary tree is a tree where each node has at most two children, referred to as the **left child** and the **right child**.

**Types of Binary Trees:**

*   **Full Binary Tree:** A tree where every node has either 0 or 2 children.
*   **Complete Binary Tree:** A binary tree in which all levels are completely filled except possibly the last level, and the last level has all nodes as far left as possible.
*   **Perfect Binary Tree:** A binary tree where all interior nodes have two children and all leaves are at the same level.
*   **Skewed Binary Tree:** A binary tree in which each node has only one child, forming a structure similar to a linked list. Can be left-skewed or right-skewed.

**Representation of Binary Trees:**

*   **Array Representation:** Suitable for complete binary trees.
    *   If a node is at index `i`, its left child is at `2*i + 1` and its right child is at `2*i + 2`.
    *   The parent of a node at index `i` (where `i > 0`) is at `floor((i-1)/2)`.
*   **Linked Representation:** Each node contains data and pointers to its left and right children. This is more flexible for non-complete trees.

**Example (Linked Representation):**

```
      10
     /  \
    5    15
   / \    \
  2   7    18
```

Node 10 has left child 5 and right child 15. Node 5 has left child 2 and right child 7. Node 15 has right child 18. Nodes 2, 7, and 18 are leaf nodes.

#### 1.1.2 Binary Search Tree (BST)

**Definition:** A binary tree with the following properties:

*   The value of the left child is less than the value of the parent node.
*   The value of the right child is greater than the value of the parent node.
*   Both the left and right subtrees are also binary search trees.

**Operations on BST:**

*   **Search:** To find a value, start from the root. If the value matches the current node, it's found. If the value is less than the current node, move to the left child. If it's greater, move to the right child. Repeat until found or a null pointer is encountered.
*   **Insertion:** Similar to search, but when a null pointer is found, insert the new node there.
*   **Deletion:** More complex, involving cases for deleting a leaf node, a node with one child, and a node with two children (requires finding the in-order predecessor or successor).

**Example (BST):**

```
      10
     /  \
    5    15
   / \    \
  2   7    18
```

This is also a valid BST. If we insert 12:

```
      10
     /  \
    5    15
   / \   / \
  2   7 12  18
```

**Applications of BST:**

*   Efficient searching, insertion, and deletion of ordered data.
*   Implementing dictionaries or symbol tables.

#### 1.1.3 AVL Tree

**Definition:** A self-balancing binary search tree. It maintains a **balance factor** for each node (height of left subtree - height of right subtree). The balance factor must be -1, 0, or 1 for all nodes. If an insertion or deletion causes an imbalance, **rotations** (left, right, left-right, right-left) are performed to restore the balance.

**Importance:** Ensures that the height of the tree remains logarithmic ($O(\log n)$), leading to efficient search, insertion, and deletion operations ($O(\log n)$).

**Example (Imbalance and Rotation):**

Imagine a BST where inserting 30 after 10 and 20 creates an imbalance at node 10 (height difference > 1).

```
  10 (BF=2)
   \
    20 (BF=1)
     \
      30 (BF=0)
```

A **left rotation** around node 10 would fix this:

```
    20 (BF=0)
   /  \
  10   30
```

#### 1.1.4 B-Tree

**Definition:** A self-balancing tree data structure that maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time. B-trees are optimized for systems that read and write large blocks of data, such as disk drives.

**Key Characteristics:**

*   Nodes can have many children (more than two).
*   All leaf nodes are at the same depth.
*   Each node (except the root) has a minimum number of keys and children.
*   The number of children is related to the number of keys (usually `num_children = num_keys + 1`).

**Applications of B-Trees:**

*   Database indexing (e.g., B+-trees are commonly used).
*   File systems.

---

### 1.2 Tree Traversal Algorithms

**Definition:** Tree traversal refers to the process of visiting (e.g., printing, processing) each node in a tree exactly once.

#### 1.2.1 In-order Traversal

**Process:**
1.  Recursively traverse the left subtree.
2.  Visit the current node.
3.  Recursively traverse the right subtree.

**For a BST, in-order traversal visits nodes in ascending order.**

**Example:**

For the BST:

```
      10
     /  \
    5    15
   / \    \
  2   7    18
```

In-order traversal: **2, 5, 7, 10, 15, 18**

#### 1.2.2 Pre-order Traversal

**Process:**
1.  Visit the current node.
2.  Recursively traverse the left subtree.
3.  Recursively traverse the right subtree.

**Useful for creating a copy of the tree or for expression trees (prefix notation).**

**Example:**

For the BST above:

Pre-order traversal: **10, 5, 2, 7, 15, 18**

#### 1.2.3 Post-order Traversal

**Process:**
1.  Recursively traverse the left subtree.
2.  Recursively traverse the right subtree.
3.  Visit the current node.

**Useful for deleting a tree (destroying it) or for expression trees (postfix notation).**

**Example:**

For the BST above:

Post-order traversal: **2, 7, 5, 18, 15, 10**

---

### 1.3 Applications of Trees

*   **File Systems:** Representing hierarchical directory structures.
*   **Databases:** Indexing data (e.g., B-trees, B+-trees).
*   **Decision Making:** Decision trees in machine learning.
*   **Expression Evaluation:** Representing arithmetic expressions (expression trees).
*   **Syntax Analysis:** Parse trees in compilers.
*   **Search Algorithms:** Binary Search Trees for efficient searching.
*   **Data Compression:** Huffman Coding uses binary trees.
*   **Hierarchical Data Representation:** Organizational charts, DOM (Document Object Model) in web browsers.

---

## 2. Introduction to Graphs

**Definition:** A **graph** is a non-linear data structure consisting of a set of **vertices** (or nodes) and a set of **edges** that connect pairs of vertices.

*   **Vertex (Node):** Represents an entity or object.
*   **Edge:** Represents a connection or relationship between two vertices.

**Types of Graphs:**

*   **Undirected Graph:** Edges have no direction. An edge {u, v} connects u and v, meaning you can travel from u to v and from v to u.
*   **Directed Graph (Digraph):** Edges have a direction. An edge (u, v) indicates a connection from u to v, but not necessarily from v to u.
*   **Weighted Graph:** Edges have an associated weight or cost.
*   **Connected Graph:** An undirected graph where there is a path between every pair of vertices.
*   **Strongly Connected Graph (Directed):** A directed graph where there is a path from every vertex to every other vertex.
*   **Cyclic Graph:** A graph containing at least one cycle.
*   **Acyclic Graph:** A graph that does not contain any cycles.
*   **Tree:** A connected, acyclic undirected graph.

**Representation of Graphs:**

*   **Adjacency Matrix:** A square matrix where `matrix[i][j] = 1` (or weight) if there is an edge between vertex `i` and vertex `j`, and `0` otherwise.
    *   **Pros:** Fast edge checking ($O(1)$).
    *   **Cons:** High space complexity ($O(V^2)$), inefficient for sparse graphs.
*   **Adjacency List:** An array of lists. Each index `i` in the array corresponds to vertex `i`, and the list at that index contains all vertices adjacent to vertex `i`.
    *   **Pros:** Space efficient for sparse graphs ($O(V+E)$).
    *   **Cons:** Edge checking can be slower ($O(degree)$ or $O(V)$ in worst case).

**Example (Adjacency List for an Undirected Graph):**

Graph:
A -- B
| \  |
C -- D

Vertices: {A, B, C, D}
Edges: {(A,B), (A,C), (A,D), (B,D), (C,D)}

Adjacency List:
A: [B, C, D]
B: [A, D]
C: [A, D]
D: [A, B, C]

---

### 2.1 Graph Traversal Algorithms

**Definition:** Graph traversal involves visiting each vertex in a graph exactly once.

#### 2.1.1 Breadth-First Search (BFS)

**Algorithm:**
1.  Start at a source vertex `s`.
2.  Mark `s` as visited and enqueue it.
3.  While the queue is not empty:
    a.  Dequeue a vertex `u`.
    b.  For each unvisited neighbor `v` of `u`:
        i.  Mark `v` as visited.
        ii. Enqueue `v`.

**Characteristics:**
*   Explores neighbors level by level.
*   Uses a **queue** data structure.
*   Finds the shortest path in terms of the number of edges in an unweighted graph.

**Example (BFS from vertex A):**

Graph:
```
    A --- B
    |     |
    C --- D
```

1.  Queue: [A], Visited: {A}
2.  Dequeue A. Neighbors of A: B, C.
    Queue: [B, C], Visited: {A, B, C}
3.  Dequeue B. Neighbors of B: A, D. A is visited.
    Queue: [C, D], Visited: {A, B, C, D}
4.  Dequeue C. Neighbors of C: A, D. A and D are visited.
    Queue: [D], Visited: {A, B, C, D}
5.  Dequeue D. Neighbors of D: B, C. B and C are visited.
    Queue: [], Visited: {A, B, C, D}

Traversal Order: **A, B, C, D**

#### 2.1.2 Depth-First Search (DFS)

**Algorithm:**
1.  Start at a source vertex `s`.
2.  Mark `s` as visited.
3.  For each unvisited neighbor `v` of `s`:
    a.  Recursively call DFS on `v`.

**(Iterative version uses a stack)**

**Characteristics:**
*   Explores as far as possible along each branch before backtracking.
*   Uses a **stack** (implicitly via recursion or explicitly).
*   Can detect cycles.

**Example (DFS from vertex A):**

Graph:
```
    A --- B
    |     |
    C --- D
```

1.  Visit A. Stack: [A], Visited: {A}
2.  Explore neighbor B of A. Visit B. Stack: [B, A], Visited: {A, B}
3.  Explore neighbor D of B. Visit D. Stack: [D, B, A], Visited: {A, B, D}
4.  Explore neighbor C of D. Visit C. Stack: [C, D, B, A], Visited: {A, B, D, C}
5.  Explore neighbors of C: A, D. Both visited. Backtrack from C.
6.  Explore neighbors of D: B. Visited. Backtrack from D.
7.  Explore neighbors of B: A. Visited. Backtrack from B.
8.  Explore neighbor C of A. Visited. Backtrack from A.

Traversal Order (one possible): **A, B, D, C**

---

### 2.2 Fundamental Graph Algorithms

#### 2.2.1 Shortest Path Algorithms

**Problem:** Find the shortest path between two vertices in a weighted graph.

*   **Dijkstra's Algorithm:**
    *   Finds the shortest path from a single source vertex to all other vertices in a graph with **non-negative edge weights**.
    *   Uses a priority queue to efficiently select the next vertex to visit.
    *   **Time Complexity:** $O(E \log V)$ or $O(E + V \log V)$ with a Fibonacci heap.

*   **Bellman-Ford Algorithm:**
    *   Finds the shortest path from a single source vertex to all other vertices, even in graphs with **negative edge weights**, and can detect negative cycles.
    *   Relaxes all edges $|V|-1$ times.
    *   **Time Complexity:** $O(V \cdot E)$.

#### 2.2.2 Minimum Spanning Tree (MST) Algorithms

**Problem:** Find a subset of edges in a connected, edge-weighted undirected graph that connects all vertices together, without any cycles and with the minimum possible total edge weight.

*   **Prim's Algorithm:**
    *   Starts with an arbitrary vertex and grows the MST by iteratively adding the cheapest edge that connects a vertex in the MST to a vertex outside the MST.
    *   Similar to Dijkstra's, often uses a priority queue.
    *   **Time Complexity:** $O(E \log V)$ or $O(E + V \log V)$.

*   **Kruskal's Algorithm:**
    *   Sorts all edges by weight in ascending order.
    *   Iterates through the sorted edges, adding an edge to the MST if it does not form a cycle with already added edges.
    *   Uses a **Disjoint Set Union (DSU)** data structure to efficiently check for cycles.
    *   **Time Complexity:** $O(E \log E)$ or $O(E \log V)$ if sorting dominates.

---

### 2.3 Applications of Graphs

*   **Social Networks:** Representing users and their connections.
*   **Maps and Navigation:** Finding shortest routes (e.g., Google Maps).
*   **World Wide Web:** Representing web pages and hyperlinks.
*   **Computer Networks:** Routing data packets.
*   **Recommendation Systems:** Suggesting products or content.
*   **Circuit Design:** Representing electronic components and their connections.
*   **Transportation Systems:** Modeling routes and schedules.
*   **Project Management:** Representing tasks and their dependencies (PERT/CPM charts).

---

## Practice Questions

1.  **Trees:**
    *   What is the primary difference between a binary tree and a general tree?
    *   Explain the properties of a Binary Search Tree (BST). Why are they useful?
    *   What is the output of an in-order traversal of the following BST:
        ```
              20
             /  \
            10   30
           / \   / \
          5  15 25  35
        ```
    *   Describe a scenario where an AVL tree would be preferred over a standard Binary Search Tree.
    *   How many edges does a tree with 15 nodes have?

2.  **Graphs:**
    *   Differentiate between a directed graph and an undirected graph.
    *   What are the two main ways to represent a graph, and what are their trade-offs?
    *   Explain the core idea behind Breadth-First Search (BFS).
    *   Explain the core idea behind Depth-First Search (DFS).
    *   What is the purpose of a Minimum Spanning Tree?

3.  **Algorithms:**
    *   Which algorithm would you use to find the shortest path in a graph with negative edge weights? What is its primary limitation?
    *   If you need to find the shortest path in an unweighted graph, which traversal algorithm is most suitable and why?

---

## Answers to Practice Questions

1.  **Trees:**
    *   **Difference:** A binary tree restricts each node to having at most two children (left and right), while a general tree allows a node to have any number of children.
    *   **BST Properties:** Left subtree nodes < Parent node < Right subtree nodes. This ordering allows for efficient searching, insertion, and deletion.
    *   **In-order traversal output:** 5, 10, 15, 20, 25, 30, 35
    *   **AVL preference:** AVL trees are preferred when the order of operations might lead to skewed BSTs, which degrade performance to $O(n)$. AVL trees guarantee $O(\log n)$ performance by self-balancing, making them better for dynamic datasets where frequent insertions/deletions occur, and guaranteed logarithmic time complexity is critical.
    *   **Edges in a tree:** A tree with `n` nodes always has `n-1` edges. So, for 15 nodes, there are 14 edges.

2.  **Graphs:**
    *   **Directed vs. Undirected:** In an undirected graph, edges are bidirectional (connection from A to B implies connection from B to A). In a directed graph, edges have a direction (an edge from A to B does not imply an edge from B to A).
    *   **Graph Representations:**
        *   **Adjacency Matrix:** A $V \times V$ matrix. Pros: $O(1)$ edge check. Cons: $O(V^2)$ space, inefficient for sparse graphs.
        *   **Adjacency List:** An array where each index points to a list of adjacent vertices. Pros: $O(V+E)$ space, efficient for sparse graphs. Cons: Edge check can be $O(degree)$ or $O(V)$.
    *   **BFS core idea:** Explores the graph layer by layer. It visits all neighbors of a vertex before moving to the next level of neighbors.
    *   **DFS core idea:** Explores as far as possible along each branch before backtracking. It dives deep into one path before exploring alternatives.
    *   **MST purpose:** To find a subset of edges that connects all vertices with the minimum possible total weight, forming a tree structure without cycles.

3.  **Algorithms:**
    *   **Negative edge weights:** The **Bellman-Ford algorithm** is used for graphs with negative edge weights. Its primary limitation is its higher time complexity ($O(V \cdot E)$) compared to Dijkstra's. It can also detect negative cycles, which Dijkstra's cannot.
    *   **Unweighted shortest path:** **Breadth-First Search (BFS)** is the most suitable traversal algorithm for finding the shortest path in an unweighted graph because it explores the graph level by level. The first time BFS reaches a target vertex, it guarantees it has found the shortest path in terms of the number of edges.

---

## Important Points to Remember:

*   **Trees:** Hierarchical, acyclic, connected (if referring to a single tree structure). Key property: $n$ nodes have $n-1$ edges. BST property for efficient searching. Self-balancing trees (AVL, Red-Black) guarantee logarithmic time complexity.
*   **Graphs:** Network-like, can be cyclic. Representations: Adjacency Matrix (dense graphs) vs. Adjacency List (sparse graphs).
*   **Traversals:** In-order, Pre-order, Post-order for Trees (order matters for BSTs). BFS (queue, level-order) and DFS (stack, depth-first) for Graphs. BFS finds shortest paths in unweighted graphs.
*   **Algorithms:** Dijkstra's (non-negative weights), Bellman-Ford (negative weights, cycle detection) for shortest paths. Prim's and Kruskal's for Minimum Spanning Trees.
*   **Complexity:** Always consider the time and space complexity of operations and algorithms. $O(\log n)$ is generally preferred over $O(n)$ or $O(n^2)$.

This module lays the foundation for many advanced algorithms and data structures. Understanding these concepts is crucial for efficient problem-solving in computer science.
