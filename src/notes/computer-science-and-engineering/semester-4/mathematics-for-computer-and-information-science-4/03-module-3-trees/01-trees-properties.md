---
title: "Trees- properties"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4"
module: "Module 3: Trees"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8af31"
status: "completed"
scrapedAt: "2026-05-20T16:13:33.687Z"
---
## MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4
## Module 3: Trees
## Topic: Trees - Properties

**Learning Outcomes:**

*   Understand the definition of a tree and related terminology (root, leaf, parent, child, siblings, ancestor, descendant, level, height, depth).
*   Learn and apply fundamental properties of trees (relationship between edges and vertices, path properties).
*   Distinguish between different types of trees (binary trees, m-ary trees, balanced trees).
*   Understand and apply tree traversal algorithms (preorder, inorder, postorder).
*   Understand and apply tree search algorithms.
*   Be able to model real-world problems using trees and apply relevant properties to solve them.

---

### 1. Definitions and Terminology

*   **Definition of a Tree:** A tree is a connected, acyclic (no cycles) graph.  It is a hierarchical data structure consisting of nodes connected by edges.

*   **Key Concepts:**

    *   **Node (Vertex):** A basic unit of a tree, which can hold data.
    *   **Edge:** A connection between two nodes.
    *   **Root:**  The topmost node in a tree.  It has no parent.  Every tree has exactly one root.
    *   **Leaf:** A node with no children.  Also known as a terminal node.
    *   **Parent:**  The node directly above another node in the hierarchy.  A node can have at most one parent.
    *   **Child:**  A node directly below another node in the hierarchy. A node can have multiple children.
    *   **Siblings:** Nodes that share the same parent.
    *   **Ancestor:**  Any node on the path from the root to a given node (excluding the node itself).
    *   **Descendant:**  Any node reachable from a given node by following edges away from the root.
    *   **Path:** A sequence of distinct nodes such that there is an edge between consecutive nodes in the sequence.
    *   **Level:** The level of a node is the number of edges on the path from the root to the node. The root is at level 0.
    *   **Height:** The height of a tree is the length of the longest path from the root to a leaf.  It is also the maximum level of any node in the tree.
    *   **Depth:** The depth of a node is the number of edges from the root to that node (same as the level).
    *   **Subtree:** A tree formed by a node and all of its descendants.
    *   **Forest:** A collection of one or more disjoint trees.

*   **Example:**

    Consider a tree with nodes A, B, C, D, E, F, G, H, I, J, K where A is the root.

    ```
          A
         / \
        B   C
       / \   \
      D   E   F
     /   / \
    G   H   I
       /
      J
     /
    K
    ```

    *   Root: A
    *   Leaves: G, J, K, F
    *   Parent of D: B
    *   Children of B: D, E
    *   Siblings of D: E
    *   Ancestor of K: J, H, E, B, A
    *   Descendants of B: D, E, G, H, I, J, K
    *   Level of E: 1
    *   Height of the tree: 5
    *   Depth of J: 4

### 2. Fundamental Properties of Trees

*   **Property 1: Relationship between Edges and Vertices:**  In a tree with *n* nodes (vertices), there are always *n-1* edges.
    *   **Formula:**  Edges = Vertices - 1  ( E = V - 1 )
    *   **Why?**  Each node (except the root) has exactly one parent.  Each edge connects a node to its parent.

*   **Property 2: Path Properties:**
    *   There is exactly one path between any two nodes in a tree.
    *   If a cycle exists in a graph, it is not a tree.

*   **Property 3:**  Any connected graph with *n* vertices and *n-1* edges is a tree.

*   **Property 4:** A graph is a tree if and only if every two vertices are connected by a unique path.

*   **Example:**

    *   A tree has 10 nodes. How many edges does it have?
        *   Edges = Vertices - 1 = 10 - 1 = 9 edges

### 3. Types of Trees

*   **Binary Tree:** A tree in which each node has at most two children, typically referred to as the left child and the right child.

    *   **Full Binary Tree:** Every node has either 0 or 2 children.
    *   **Complete Binary Tree:** All levels are completely filled except possibly the last level, which is filled from left to right.
    *   **Perfect Binary Tree:** All internal nodes have two children, and all leaves are at the same level.

*   **m-ary Tree (n-ary Tree):** A tree in which each node has at most *m* children. A binary tree is a special case of an m-ary tree where *m* = 2.

*   **Balanced Tree:** A tree where the heights of the subtrees of any node differ by at most a certain constant (typically 1 or 0).  Examples include AVL trees and red-black trees. Balanced trees help maintain good search performance.  Unbalanced trees can degrade to O(n) complexity for search operations.

    *   **Importance:** Balanced trees are important for efficient searching and insertion operations, maintaining a logarithmic time complexity (O(log n)).

*   **Example:**

    *   **Binary Tree:** A node in a binary tree might have a left child with value 5 and a right child with value 10.
    *   **3-ary Tree:**  A node in a 3-ary tree can have up to three children.

### 4. Tree Traversal Algorithms

Tree traversal algorithms provide systematic ways to visit each node in a tree exactly once.  They are fundamental for many tree-related operations.

*   **Preorder Traversal:** Visit the root node, then recursively traverse the left subtree, then recursively traverse the right subtree.  (Root-Left-Right)

*   **Inorder Traversal:** Recursively traverse the left subtree, then visit the root node, then recursively traverse the right subtree. (Left-Root-Right)  (Commonly used for Binary Search Trees to visit nodes in sorted order).

*   **Postorder Traversal:** Recursively traverse the left subtree, then recursively traverse the right subtree, then visit the root node. (Left-Right-Root)  (Commonly used for deleting a tree).

*   **Example (Binary Tree):**

    ```
          1
         / \
        2   3
       / \
      4   5
    ```

    *   **Preorder:** 1, 2, 4, 5, 3
    *   **Inorder:** 4, 2, 5, 1, 3
    *   **Postorder:** 4, 5, 2, 3, 1

*   **Level-Order Traversal (Breadth-First Search):**  Visit nodes level by level, starting from the root.  Requires a queue data structure.

    *   For the above tree, Level-Order traversal is: 1, 2, 3, 4, 5

### 5. Tree Search Algorithms

Tree search algorithms are used to find a specific node in a tree that satisfies a given condition (e.g., contains a specific value).

*   **Depth-First Search (DFS):**  Explore as far as possible along each branch before backtracking. Preorder, Inorder, and Postorder traversals can be used as DFS algorithms.
*   **Breadth-First Search (BFS):**  Explore all the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level.  Uses Level-Order traversal.

*   **Binary Search Tree (BST) Search:** If the tree is a BST, we can leverage the sorted property to efficiently search for a node:
    *   If the target value is equal to the node's value, we've found it.
    *   If the target value is less than the node's value, search in the left subtree.
    *   If the target value is greater than the node's value, search in the right subtree.

*   **Example (BST Search):**  Suppose you're searching for the value 7 in a BST with root value 5.  You would go to the right subtree because 7 > 5.

### 6. Modeling Real-World Problems with Trees

Trees are versatile data structures that can be used to model various real-world scenarios.

*   **Hierarchical Organization:** Representing organizational structures (e.g., company hierarchy, file system directories).
*   **Decision Making:**  Decision trees in machine learning for classification and regression.
*   **Syntax Analysis:**  Parse trees in compilers to represent the structure of a program.
*   **Game Playing:** Game trees to represent possible moves in a game (e.g., chess).
*   **Genealogical Trees:** Representing family relationships (ancestry).
*   **Routing Algorithms:**  Representing network topologies for routing data packets.

*   **Example:**

    *   **File System:** A file system can be modeled as a tree where directories are internal nodes and files are leaf nodes.

### 7. Practice Questions and Exercises

1.  **Question:** A tree has 15 nodes. How many edges does it have?

    *   **Answer:** 14 edges (Edges = Vertices - 1)

2.  **Question:**  Given the following tree, what is the height of the tree, and what is the level of node 'E'?

    ```
          A
         / \
        B   C
       / \   \
      D   E   F
    ```

    *   **Answer:** Height = 2, Level of E = 1

3.  **Question:** Write the Preorder, Inorder, and Postorder traversals for the following binary tree:

    ```
          5
         / \
        3   8
       / \   \
      2   4   9
    ```

    *   **Answer:**
        *   Preorder: 5, 3, 2, 4, 8, 9
        *   Inorder: 2, 3, 4, 5, 8, 9
        *   Postorder: 2, 4, 3, 9, 8, 5

4.  **Question:** Explain the difference between a full binary tree and a complete binary tree.

    *   **Answer:**  A full binary tree has every node with either 0 or 2 children. A complete binary tree has all levels completely filled except possibly the last level, which is filled from left to right.

5.  **Question:**  Explain why balanced trees are important.

    *   **Answer:**  Balanced trees are important because they maintain a logarithmic time complexity (O(log n)) for search, insertion, and deletion operations.  Unbalanced trees can degenerate to O(n) complexity in the worst-case scenario.

### 8. Important Points to Remember

*   A tree is a connected, acyclic graph.
*   The number of edges in a tree is always one less than the number of vertices (E = V - 1).
*   There is exactly one path between any two nodes in a tree.
*   Understanding tree traversal algorithms (preorder, inorder, postorder, level-order) is crucial.
*   Balanced trees are important for maintaining efficient search performance.
*   Trees can be used to model many real-world problems involving hierarchical structures.

---
