---
title: "Trees and Graphs"
subject: "DATA STRUCTURES"
module: "Module 3: Trees and Graphs"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fea11"
status: "completed"
scrapedAt: "2026-05-23T17:55:08.283Z"
---
# DATA STRUCTURES: Module 3: Trees and Graphs

## Introduction to Trees and Graphs

This module delves into two fundamental non-linear data structures: Trees and Graphs. These structures are crucial for representing hierarchical relationships and complex interconnections, respectively, and are widely used in various computational problems.

### Learning Outcomes:

*   Understand the basic concepts and definitions of trees and graphs.
*   Explore different types of trees, including binary trees, binary search trees, AVL trees, and B-trees.
*   Learn about graph representations, traversals, and common algorithms like Dijkstra's and Prim's.
*   Apply tree and graph structures to solve real-world problems.

### Course Outcomes Alignment:

This module directly contributes to:

*   **CO3: Make use of nonlinear data structures like trees and graphs to design algorithms for various applications. (Knowledge Level: K3)**

---

## 1. Trees

A tree is a hierarchical data structure consisting of nodes connected by edges. It is a special case of a graph.

### 1.1 Key Concepts and Definitions

*   **Root:** The topmost node in a tree.
*   **Node/Vertex:** An element in the tree.
*   **Edge:** A connection between two nodes.
*   **Parent:** A node directly above another node.
*   **Child:** A node directly below another node.
*   **Siblings:** Nodes that share the same parent.
*   **Leaf Node/External Node:** A node with no children.
*   **Internal Node/Non-leaf Node:** A node with at least one child.
*   **Height of a Node:** The number of edges on the longest path from the node to a leaf.
*   **Height of a Tree:** The height of its root node.
*   **Depth of a Node:** The number of edges from the root to the node.
*   **Degree of a Node:** The number of children a node has.
*   **Subtree:** A node and all its descendants.
*   **Traversal:** Visiting each node in a tree in a specific order.

### 1.2 Types of Trees

#### 1.2.1 Binary Tree

A binary tree is a tree data structure in which each node has at most two children, referred to as the **left child** and the **right child**.

*   **Definitions:**
    *   **Empty Tree:** A tree with no nodes.
    *   **Full Binary Tree:** A binary tree in which every node has either 0 or 2 children.
    *   **Complete Binary Tree:** A binary tree in which all levels are completely filled except possibly the last level, which is filled from left to right.
    *   **Perfect Binary Tree:** A binary tree in which all interior nodes have two children and all leaves are at the same level.
    *   **Skewed Tree:** A binary tree where each node has only one child (either left or right). This resembles a linked list.

*   **Representation:**
    *   **Node Structure:** Typically involves a data field and pointers to the left and right children.
        ```c
        struct TreeNode {
            int data;
            struct TreeNode *left;
            struct TreeNode *right;
        };
        ```
        *(Referenced from Horowitz, Sahni, & Anderson-Freed, Ch. 4)*

*   **Example:**
    ```
          10
         /  \
        5    15
       / \     \
      2   7     18
    ```
    In this example, 10 is the root, 5 and 15 are its children, and 2, 7, and 18 are leaf nodes.

#### 1.2.2 Binary Search Tree (BST)

A binary search tree is a binary tree with the following properties:
*   The left subtree of a node contains only nodes with keys greater than the node's key.
*   The right subtree of a node contains only nodes with keys less than the node's key.
*   The left and right subtrees each must also be a binary search tree.
*   There must be no duplicate nodes.

*   **Operations:**
    *   **Insertion:** Traverse the tree to find the correct position based on the key's value.
    *   **Search:** Similar to insertion, traverse based on key comparison.
    *   **Deletion:** Can be complex, requiring careful handling of node replacements to maintain BST properties.

*   **Example:**
    ```
          50
         /  \
        30   70
       / \   / \
      20 40 60 80
    ```
    If we search for 40, we go left from 50, then right from 30.

*   **Performance:**
    *   **Best/Average Case:** O(log n) for search, insert, and delete if the tree is balanced.
    *   **Worst Case:** O(n) if the tree degenerates into a skewed tree (e.g., inserting elements in sorted order).

#### 1.2.3 AVL Trees

An AVL tree is a self-balancing binary search tree where the difference between the heights of the left and right subtrees of any node (called the **balance factor**) is at most 1.

*   **Balance Factor:** `height(left_subtree) - height(right_subtree)`
*   **Rotations:** AVL trees use rotations (single and double) to restore balance after insertions or deletions that violate the balance factor condition.
    *   **Left Rotation:** Used when a node's right subtree is too tall.
    *   **Right Rotation:** Used when a node's left subtree is too tall.
    *   **Left-Right Rotation:** Left rotation followed by right rotation.
    *   **Right-Left Rotation:** Right rotation followed by left rotation.

*   **Performance:** Guarantees O(log n) for search, insert, and delete operations, as it keeps the tree height minimal.

#### 1.2.4 B-Trees

A B-tree is a self-balancing tree data structure that maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time. It is optimized for systems that read and write large blocks of data, making it suitable for disk-based databases and file systems.

*   **Properties:**
    *   All leaves are at the same level.
    *   Nodes can have multiple children (degree `m`).
    *   Each non-root node must have at least `ceil(m/2) - 1` keys.
    *   Each node contains `k` keys and `k+1` children.
    *   Keys in a node are sorted.
    *   Keys in a child subtree are between the keys of its parent node.

*   **Example:** A B-tree of order 5 (maximum 4 keys and 5 children per node).

*   **Usage:** Widely used in database indexing (e.g., MySQL's InnoDB) and file systems.

*(Referenced from Horowitz, Sahni, & Anderson-Freed, Ch. 6 on "Trees")*

### 1.3 Tree Traversal

Traversals are systematic ways to visit all nodes in a tree. For binary trees, the common traversals are:

*   **In-order Traversal:** Visit Left Subtree, Visit Root, Visit Right Subtree.
    *   For a BST, this yields nodes in sorted order.
    *   **Pseudocode:**
        ```
        inorder(node):
            if node is not null:
                inorder(node.left)
                visit(node.data)
                inorder(node.right)
        ```

*   **Pre-order Traversal:** Visit Root, Visit Left Subtree, Visit Right Subtree.
    *   Useful for creating a copy of the tree or for expression trees (prefix notation).
    *   **Pseudocode:**
        ```
        preorder(node):
            if node is not null:
                visit(node.data)
                preorder(node.left)
                preorder(node.right)
        ```

*   **Post-order Traversal:** Visit Left Subtree, Visit Right Subtree, Visit Root.
    *   Useful for deleting nodes in a tree or for expression trees (postfix notation).
    *   **Pseudocode:**
        ```
        postorder(node):
            if node is not null:
                postorder(node.left)
                postorder(node.right)
                visit(node.data)
        ```

*   **Level-order Traversal (Breadth-First Traversal):** Visit nodes level by level, from left to right. Requires a queue.

    *   **Pseudocode:**
        ```
        levelorder(root):
            if root is null: return
            queue = new Queue()
            enqueue(queue, root)
            while queue is not empty:
                current_node = dequeue(queue)
                visit(current_node.data)
                if current_node.left is not null:
                    enqueue(queue, current_node.left)
                if current_node.right is not null:
                    enqueue(queue, current_node.right)
        ```

*(Referenced from Samanta D., Ch. 4 on "Trees")*

---

## 2. Graphs

A graph is a non-linear data structure that consists of a set of vertices (nodes) and a set of edges that connect pairs of vertices.

### 2.1 Key Concepts and Definitions

*   **Vertex (Node):** An element in the graph.
*   **Edge:** A connection between two vertices.
*   **Directed Graph (Digraph):** Edges have a direction (e.g., A -> B is different from B -> A).
*   **Undirected Graph:** Edges have no direction (e.g., A - B means connection between A and B).
*   **Weighted Graph:** Edges have associated weights or costs.
*   **Degree of a Vertex:**
    *   **Undirected Graph:** Number of edges incident to the vertex.
    *   **Directed Graph:**
        *   **In-degree:** Number of edges pointing *to* the vertex.
        *   **Out-degree:** Number of edges pointing *from* the vertex.
*   **Path:** A sequence of vertices connected by edges.
*   **Cycle:** A path that starts and ends at the same vertex.
*   **Connected Graph:** An undirected graph where there is a path between every pair of vertices.
*   **Strongly Connected Graph:** A directed graph where there is a path from every vertex to every other vertex.
*   **Subgraph:** A graph formed by a subset of vertices and edges of the original graph.
*   **Adjacency:** Two vertices are adjacent if there is an edge between them.

### 2.2 Graph Representation

#### 2.2.1 Adjacency Matrix

An `n x n` matrix where `n` is the number of vertices. `matrix[i][j]` is 1 (or weight) if there's an edge from vertex `i` to vertex `j`, and 0 otherwise.

*   **Pros:** Fast edge lookup (O(1)).
*   **Cons:** Requires O(V^2) space, which can be inefficient for sparse graphs (graphs with few edges).

*   **Example (Undirected Graph):**
    Vertices: A, B, C
    Edges: (A,B), (B,C)

    Adjacency Matrix:
    ```
      A B C
    A 0 1 0
    B 1 0 1
    C 0 1 0
    ```

#### 2.2.2 Adjacency List

An array of linked lists, where each index `i` of the array corresponds to vertex `i`. The linked list at index `i` contains all vertices adjacent to vertex `i`.

*   **Pros:** Space efficient for sparse graphs (O(V + E) space).
*   **Cons:** Edge lookup can take O(degree(v)) time.

*   **Example (Undirected Graph):**
    Vertices: A, B, C
    Edges: (A,B), (B,C)

    Adjacency List:
    *   A: -> B
    *   B: -> A -> C
    *   C: -> B

*(Referenced from Horowitz, Sahni, & Anderson-Freed, Ch. 7 on "Graphs")*
*(Referenced from Gilberg & Forouzan, Ch. 8 on "Graphs")*

### 2.3 Graph Traversal Algorithms

These algorithms systematically visit all vertices in a graph.

#### 2.3.1 Breadth-First Search (BFS)

Visits vertices level by level, starting from a source vertex. It explores all neighbors of a vertex before moving to the next level.

*   **Data Structure Used:** Queue.
*   **Application:** Finding the shortest path in an unweighted graph, network broadcasting, web crawlers.

*   **Algorithm:**
    1.  Mark all vertices as unvisited.
    2.  Choose a source vertex, mark it as visited, and enqueue it.
    3.  While the queue is not empty:
        a.  Dequeue a vertex `u`.
        b.  For each unvisited neighbor `v` of `u`:
            i.  Mark `v` as visited.
            ii. Enqueue `v`.

*   **Time Complexity:** O(V + E) using adjacency list, O(V^2) using adjacency matrix.

*   **Example:**
    Graph: A -> B, A -> C, B -> D, C -> E
    Starting BFS from A:
    1.  Queue: [A], Visited: {A}
    2.  Dequeue A. Visit A. Enqueue B, C. Queue: [B, C], Visited: {A, B, C}
    3.  Dequeue B. Visit B. Enqueue D. Queue: [C, D], Visited: {A, B, C, D}
    4.  Dequeue C. Visit C. Enqueue E. Queue: [D, E], Visited: {A, B, C, D, E}
    5.  Dequeue D. Visit D. Queue: [E], Visited: {A, B, C, D, E}
    6.  Dequeue E. Visit E. Queue: [], Visited: {A, B, C, D, E}

#### 2.3.2 Depth-First Search (DFS)

Explores as far as possible along each branch before backtracking.

*   **Data Structure Used:** Stack (implicitly through recursion or explicitly).
*   **Application:** Finding cycles, topological sorting, solving mazes, connected components.

*   **Algorithm (Recursive):**
    1.  Mark all vertices as unvisited.
    2.  For each vertex `v` in the graph:
        a.  If `v` is unvisited, call DFS_visit(`v`).
    3.  DFS_visit(`u`):
        a.  Mark `u` as visited.
        b.  Visit `u`.
        c.  For each unvisited neighbor `v` of `u`:
            i.  Call DFS_visit(`v`).

*   **Time Complexity:** O(V + E) using adjacency list, O(V^2) using adjacency matrix.

*   **Example:**
    Graph: A -> B, A -> C, B -> D, C -> E
    Starting DFS from A:
    1.  DFS_visit(A): Visit A. Mark A visited.
    2.  Neighbor B: DFS_visit(B). Visit B. Mark B visited.
    3.  Neighbor D of B: DFS_visit(D). Visit D. Mark D visited. D has no unvisited neighbors. Return from DFS_visit(D).
    4.  B has no other unvisited neighbors. Return from DFS_visit(B).
    5.  Neighbor C of A: DFS_visit(C). Visit C. Mark C visited.
    6.  Neighbor E of C: DFS_visit(E). Visit E. Mark E visited. E has no unvisited neighbors. Return from DFS_visit(E).
    7.  C has no other unvisited neighbors. Return from DFS_visit(C).
    8.  A has no other unvisited neighbors.
    Traversal order: A, B, D, C, E

*(Referenced from Horowitz, Sahni, & Anderson-Freed, Ch. 7 on "Graphs")*
*(Referenced from Gilberg & Forouzan, Ch. 8 on "Graphs")*

### 2.4 Shortest Path Algorithms (Weighted Graphs)

#### 2.4.1 Dijkstra's Algorithm

Finds the shortest paths from a single source vertex to all other vertices in a graph with **non-negative edge weights**.

*   **Data Structure Used:** Priority Queue.
*   **Algorithm:**
    1.  Initialize distances: `dist[source] = 0`, `dist[v] = infinity` for all other vertices `v`.
    2.  Initialize a priority queue `PQ` with all vertices, prioritized by their current distance.
    3.  While `PQ` is not empty:
        a.  Extract vertex `u` with the smallest distance from `PQ`.
        b.  If `u` has already been processed, continue.
        c.  Mark `u` as processed.
        d.  For each neighbor `v` of `u`:
            i.  If `dist[u] + weight(u, v) < dist[v]`:
                *   `dist[v] = dist[u] + weight(u, v)`
                *   Update `v` in `PQ` with the new distance.

*   **Time Complexity:** O(E log V) or O(E + V log V) using a binary heap or Fibonacci heap for the priority queue.

*   **Example:**
    Graph: A --(1)--> B, A --(4)--> C, B --(2)--> C, B --(5)--> D, C --(1)--> D
    Source: A
    1.  Dist: A=0, B=inf, C=inf, D=inf. PQ: {(A,0), (B,inf), (C,inf), (D,inf)}
    2.  Extract A. Neighbors: B, C.
        *   dist[B] = dist[A] + 1 = 1. Update PQ.
        *   dist[C] = dist[A] + 4 = 4. Update PQ.
        PQ: {(B,1), (C,4), (D,inf)}
    3.  Extract B. Neighbors: C, D.
        *   dist[C] = min(4, dist[B] + 2) = min(4, 1+2) = 3. Update PQ.
        *   dist[D] = min(inf, dist[B] + 5) = min(inf, 1+5) = 6. Update PQ.
        PQ: {(C,3), (D,6)}
    4.  Extract C. Neighbor: D.
        *   dist[D] = min(6, dist[C] + 1) = min(6, 3+1) = 4. Update PQ.
        PQ: {(D,4)}
    5.  Extract D. No unvisited neighbors.
    Shortest distances from A: A=0, B=1, C=3, D=4.

*(Referenced from Horowitz, Sahni, & Anderson-Freed, Ch. 7 on "Graphs")*
*(Referenced from Aho, Hopcroft, & Ullman, Ch. 6 on "Graph Algorithms")*

#### 2.4.2 Prim's Algorithm

Finds a Minimum Spanning Tree (MST) for a weighted undirected graph. An MST is a subgraph that connects all vertices together, without any cycles and with the minimum possible total edge weight.

*   **Data Structure Used:** Priority Queue.
*   **Algorithm:**
    1.  Initialize a set `MST_Set` to keep track of vertices included in MST.
    2.  Initialize `key[v] = infinity` for all vertices `v`, except `key[source] = 0`.
    3.  Initialize `parent[v] = null` for all `v`.
    4.  Initialize a priority queue `PQ` with all vertices, prioritized by their `key` values.
    5.  While `PQ` is not empty:
        a.  Extract vertex `u` with the minimum `key` value from `PQ`.
        b.  Add `u` to `MST_Set`.
        c.  For each adjacent vertex `v` of `u`:
            i.  If `v` is not in `MST_Set` and `weight(u, v) < key[v]`:
                *   `parent[v] = u`
                *   `key[v] = weight(u, v)`
                *   Update `v` in `PQ` with the new `key` value.

*   **Time Complexity:** O(E log V) or O(E + V log V) using a binary heap or Fibonacci heap.

*   **Example:**
    Graph (edges with weights): (A,B,2), (A,C,3), (B,C,1), (B,D,4), (C,D,5)
    Starting Prim's from A:
    1.  key: A=0, B=inf, C=inf, D=inf. MST_Set: {}. PQ: {(A,0), (B,inf), (C,inf), (D,inf)}
    2.  Extract A. Add A to MST_Set. Neighbors: B, C.
        *   key[B] = 2. parent[B] = A. Update PQ.
        *   key[C] = 3. parent[C] = A. Update PQ.
        MST_Set: {A}. PQ: {(B,2), (C,3), (D,inf)}
    3.  Extract B. Add B to MST_Set. Neighbors: C, D.
        *   C is in MST_Set: skip.
        *   key[C] = min(3, weight(B,C)=1) = 1. parent[C] = B. Update PQ.
        *   key[D] = weight(B,D)=4. parent[D] = B. Update PQ.
        MST_Set: {A, B}. PQ: {(C,1), (D,4)}
    4.  Extract C. Add C to MST_Set. Neighbor: D.
        *   key[D] = min(4, weight(C,D)=5) = 4. parent[D] = B. (No change as B is parent).
        MST_Set: {A, B, C}. PQ: {(D,4)}
    5.  Extract D. Add D to MST_Set.
        MST_Set: {A, B, C, D}. PQ: {}
    MST edges: (A,B,2), (B,C,1), (B,D,4)

*(Referenced from Horowitz, Sahni, & Anderson-Freed, Ch. 7 on "Graphs")*
*(Referenced from Aho, Hopcroft, & Ullman, Ch. 6 on "Graph Algorithms")*

---

## Practice Questions and Exercises

### Trees

**Question 1:** Given the following pre-order and in-order traversals of a binary tree, construct the tree.
Pre-order: `ABCDEFGHI`
In-order: `BCAEDGHFI`

**Answer 1:**
The first element of the pre-order traversal is always the root. So, 'A' is the root.
Find 'A' in the in-order traversal. Elements to its left form the left subtree, and elements to its right form the right subtree.
In-order: `(B C) A (E D G H F I)`
Pre-order: `A (B C) (E D G H F I)`
Now, recursively construct the left subtree from pre-order `BC` and in-order `BC`. The root is 'B'.
In-order: `( ) B (C)`
Pre-order: `B ( ) (C)`
Left child of B is null. Right child of B is C.
Now, construct the right subtree from pre-order `EDGHFI` and in-order `EDGHFI`. The root is 'E'.
In-order: `(D) E (G H F I)`
Pre-order: `E (D) (G H F I)`
Left child of E is D.
Now, construct the right subtree from pre-order `GHFI` and in-order `GHFI`. The root is 'G'.
In-order: `( ) G (H F I)`
Pre-order: `G ( ) (H F I)`
Left child of G is null. Right child of G is H.
In-order: `( ) H (F I)`
Pre-order: `H ( ) (F I)`
Left child of H is null. Right child of H is F.
In-order: `( ) F (I)`
Pre-order: `F ( ) (I)`
Left child of F is null. Right child of F is I.

The constructed tree looks like:
```
      A
     / \
    B   E
     \ / \
      C D   G
             \
              H
               \
                F
                 \
                  I
```

**Question 2:** What is the balance factor of a node if its left subtree has height 3 and its right subtree has height 5? Is the tree balanced at this node according to AVL tree properties?

**Answer 2:**
Balance Factor = `height(left_subtree) - height(right_subtree)`
Balance Factor = `3 - 5 = -2`
An AVL tree requires the balance factor to be -1, 0, or 1. Since the balance factor is -2, the tree is **not balanced** at this node according to AVL tree properties. Rotations would be needed.

### Graphs

**Question 3:** Given a graph represented by the following adjacency list, perform BFS starting from vertex 'A'.
Adjacency List:
A: [B, C]
B: [A, D, E]
C: [A, F]
D: [B]
E: [B, F]
F: [C, E]

**Answer 3:**
1.  Initialize: Queue = [], Visited = {}
2.  Start with 'A': Enqueue 'A'. Queue = [A], Visited = {A}
3.  Dequeue 'A'. Visit 'A'. Neighbors of 'A' are 'B' and 'C'.
    *   Enqueue 'B'. Queue = [B], Visited = {A, B}
    *   Enqueue 'C'. Queue = [B, C], Visited = {A, B, C}
4.  Dequeue 'B'. Visit 'B'. Neighbors of 'B' are 'A', 'D', 'E'.
    *   'A' is visited, skip.
    *   Enqueue 'D'. Queue = [C, D], Visited = {A, B, C, D}
    *   Enqueue 'E'. Queue = [C, D, E], Visited = {A, B, C, D, E}
5.  Dequeue 'C'. Visit 'C'. Neighbors of 'C' are 'A', 'F'.
    *   'A' is visited, skip.
    *   Enqueue 'F'. Queue = [D, E, F], Visited = {A, B, C, D, E, F}
6.  Dequeue 'D'. Visit 'D'. Neighbor of 'D' is 'B'.
    *   'B' is visited, skip. Queue = [E, F]
7.  Dequeue 'E'. Visit 'E'. Neighbors of 'E' are 'B', 'F'.
    *   'B' is visited, skip.
    *   'F' is visited, skip. Queue = [F]
8.  Dequeue 'F'. Visit 'F'. Neighbors of 'F' are 'C', 'E'.
    *   'C' is visited, skip.
    *   'E' is visited, skip. Queue = []

Traversal Order: A, B, C, D, E, F.

**Question 4:** Consider a weighted undirected graph with vertices {0, 1, 2, 3} and edges: (0,1,10), (0,2,6), (0,3,5), (1,3,15), (2,3,4). Apply Dijkstra's algorithm starting from vertex 0 to find the shortest paths to all other vertices.

**Answer 4:**
Initial:
*   Distances: `dist[0]=0`, `dist[1]=inf`, `dist[2]=inf`, `dist[3]=inf`
*   Priority Queue (PQ): {(0,0), (1,inf), (2,inf), (3,inf)}
*   Visited: {}

1.  **Extract (0,0):**
    *   Visit 0.
    *   Neighbors of 0:
        *   Edge (0,1,10): `dist[1] = min(inf, 0+10) = 10`. Update PQ.
        *   Edge (0,2,6): `dist[2] = min(inf, 0+6) = 6`. Update PQ.
        *   Edge (0,3,5): `dist[3] = min(inf, 0+5) = 5`. Update PQ.
    *   PQ: {(3,5), (2,6), (1,10)}
    *   Visited: {0}

2.  **Extract (3,5):**
    *   Visit 3.
    *   Neighbors of 3:
        *   Edge (3,0,5): 0 is visited.
        *   Edge (3,1,15): `dist[1] = min(10, 5+15) = 10`. No change.
        *   Edge (3,2,4): `dist[2] = min(6, 5+4) = 6`. No change.
    *   PQ: {(2,6), (1,10)}
    *   Visited: {0, 3}

3.  **Extract (2,6):**
    *   Visit 2.
    *   Neighbors of 2:
        *   Edge (2,0,6): 0 is visited.
        *   Edge (2,3,4): 3 is visited.
    *   PQ: {(1,10)}
    *   Visited: {0, 3, 2}

4.  **Extract (1,10):**
    *   Visit 1.
    *   Neighbors of 1:
        *   Edge (1,0,10): 0 is visited.
        *   Edge (1,3,15): 3 is visited.
    *   PQ: {}
    *   Visited: {0, 3, 2, 1}

Shortest paths from vertex 0:
*   To 0: 0
*   To 1: 10
*   To 2: 6
*   To 3: 5

---

## Important Points to Remember

*   **Trees vs. Graphs:** Trees are acyclic, connected graphs where there is a unique path between any two nodes. Graphs can have cycles and be disconnected.
*   **Binary Search Tree Property:** Crucial for efficient searching and ordered traversal. Balancing is key to avoid worst-case O(n) performance.
*   **Self-Balancing Trees (AVL, Red-Black):** Maintain logarithmic time complexity for operations by performing rotations.
*   **B-Trees:** Optimized for disk I/O, common in databases.
*   **Graph Traversal:** BFS for shortest paths in unweighted graphs, DFS for cycle detection and topological sort.
*   **Dijkstra's Algorithm:** For shortest paths in graphs with non-negative edge weights.
*   **Prim's Algorithm:** For finding the Minimum Spanning Tree.
*   **Adjacency Matrix vs. List:** Choice depends on graph density. List is better for sparse graphs, matrix for dense ones.
*   **CO3 Alignment:** This module is foundational for applying non-linear data structures to solve problems, directly addressing CO3.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


## References

*   **Horowitz, S., & Sahni, S. (2008). *Fundamentals of Data Structures in C* (2nd ed.). Universities Press.** (Provides detailed explanations of trees, binary trees, BSTs, and graph algorithms with C implementations.)
*   **Samanta, D. (2009). *Classic Data Structures* (2nd ed.). Prentice Hall India.** (Offers a solid foundation on trees and their traversals.)
*   **Gilberg, R. F., & Forouzan, B. A. (2005). *Data Structures: A Pseudocode Approach with C* (2nd ed.). Cengage Learning.** (Useful for pseudocode algorithms for graph traversals.)
*   **Aho, A. V., Hopcroft, J. E., & Ullman, J. D. (1983). *Data Structures and Algorithms*. Pearson Publication.** (A classic reference, particularly strong on graph algorithms and their analysis.)

---
This comprehensive set of notes covers the core concepts of trees and graphs, aligning with the learning outcomes and course outcomes for Module 3. The inclusion of definitions, examples, algorithms, time complexities, practice questions with answers, and key takeaways aims to provide a thorough understanding of the topic.