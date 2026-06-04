---
title: "Rooted and binary trees"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4"
module: "Module 3: Trees"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8af34"
status: "completed"
scrapedAt: "2026-05-20T16:13:35.746Z"
---
# MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4
## Module 3: Trees
### Topic: Rooted and Binary Trees

**Description:** This topic introduces rooted and binary trees, fundamental data structures in computer science. We will explore their definitions, properties, and essential operations.

**Learning Outcomes:**

By the end of this topic, you should be able to:

*   Define and differentiate between rooted and binary trees.
*   Explain the terminology associated with trees (root, parent, child, leaf, internal node, subtree, depth, height, etc.).
*   Understand the properties of binary trees, including complete and balanced binary trees.
*   Perform basic operations on binary trees, such as traversing (pre-order, in-order, post-order).
*   Represent binary trees using different methods.
*   Apply the concept of binary search trees for efficient data storage and retrieval.

---

### 1. Introduction to Trees

*   **Definition:** A **tree** is a connected, acyclic (no cycles) graph. It's a hierarchical data structure consisting of nodes and edges.

*   **Key Concepts:**
    *   **Node:** A basic unit in a tree, containing data.
    *   **Edge:** A connection between two nodes.
    *   **Path:** A sequence of distinct nodes where each consecutive pair is connected by an edge.
    *   **Acyclic:**  A tree has no cycles, meaning there's no path starting and ending at the same node (excluding the starting node itself).
    *   **Connected:** There exists a path between any two nodes in the tree.

### 2. Rooted Trees

*   **Definition:** A **rooted tree** is a tree in which one node has been designated as the **root**.

*   **Terminology:**
    *   **Root:** The topmost node in the tree.  There is only one root.
    *   **Parent:** The node directly above a given node (closer to the root).
    *   **Child:** A node directly below a given node (further from the root).
    *   **Siblings:** Nodes that share the same parent.
    *   **Leaf (Terminal Node):** A node with no children.
    *   **Internal Node (Non-Terminal Node):** A node that has at least one child.
    *   **Ancestor:** A node on the path from the root to a given node (including the root).
    *   **Descendant:** A node reachable from a given node by following edges away from the root.
    *   **Subtree:** A tree consisting of a node in the tree and all its descendants.
    *   **Depth:** The length of the path from the root to a node. The root has depth 0.
    *   **Height:** The length of the longest path from a node to a leaf.  The height of a leaf is 0. The height of the tree is the height of the root.
    *   **Level:** Often used synonymously with depth.

*   **Example:**

    ```
           A (Root)
          /  \
         B    C
        / \   \
       D   E   F
    ```

    *   Root: A
    *   Parent of B: A
    *   Children of A: B, C
    *   Siblings of B: C
    *   Leaf Nodes: D, E, F
    *   Internal Nodes: A, B, C
    *   Depth of D: 2
    *   Height of A (the tree): 2
    *   Subtree rooted at B:

        ```
               B
              / \
             D   E
        ```

*   **Important Note:**  Trees are directed from parent to child, even though we often don't draw arrows.

### 3. Binary Trees

*   **Definition:** A **binary tree** is a rooted tree where each node has at most two children.  These children are typically referred to as the **left child** and the **right child**.

*   **Key Characteristics:**
    *   Each node can have 0, 1, or 2 children.
    *   The order of the children matters (left child is different from right child).

*   **Types of Binary Trees:**
    *   **Full Binary Tree:** A binary tree where every node (except possibly the leaves) has exactly two children, and all leaves are at the same level.

    *   **Complete Binary Tree:** A binary tree where all levels are completely filled except possibly the last level, which is filled from left to right.

    *   **Perfect Binary Tree:** A binary tree where all internal nodes have two children and all leaves are at the same level. (A perfect binary tree is also a full binary tree)

    *   **Balanced Binary Tree:**  A binary tree where the heights of the left and right subtrees of every node differ by at most 1. This ensures a relatively even distribution of nodes and prevents worst-case scenarios in search operations. AVL trees and Red-Black trees are examples of self-balancing binary trees.

    *   **Degenerate (Skewed) Binary Tree:**  A binary tree where each internal node has only one child.  It resembles a linked list.

*   **Properties of Binary Trees:**

    *   The maximum number of nodes at level *i* is 2<sup>*i*</sup>, where the root is at level 0.
    *   The maximum number of nodes in a binary tree of height *h* is 2<sup>*h+1*</sup> - 1.
    *   The minimum height of a binary tree with *n* nodes is ⌊log<sub>2</sub>(*n*+1)⌋ -1  or  ⌈log<sub>2</sub>(*n*+1)⌉ -1
    *   The maximum height of a binary tree with *n* nodes is *n* - 1 (for a degenerate tree).
    *   In a full binary tree, the number of leaves is *l* = (*i* + 1), where *i* is the number of internal nodes.

*   **Example:**

    ```
           A
          / \
         B   C
        /   / \
       D   E   F
          /
         G
    ```

    *   A is the root.
    *   B is the left child of A.
    *   C is the right child of A.
    *   D, G, E, and F are leaf nodes.
    *   A, B, and C are internal nodes.

### 4. Binary Tree Traversal

*   **Definition:** Visiting each node in the tree in a specific order.

*   **Types of Traversal:**
    *   **Pre-order Traversal (Root-Left-Right):** Visit the root, then recursively traverse the left subtree, then recursively traverse the right subtree.
    *   **In-order Traversal (Left-Root-Right):** Recursively traverse the left subtree, then visit the root, then recursively traverse the right subtree.
    *   **Post-order Traversal (Left-Right-Root):** Recursively traverse the left subtree, then recursively traverse the right subtree, then visit the root.

*   **Traversal Example (using the binary tree from the previous example):**

    ```
           A
          / \
         B   C
        /   / \
       D   E   F
          /
         G
    ```

    *   **Pre-order:** A B D C E G F
    *   **In-order:** D B A G E C F
    *   **Post-order:** D B G E F C A

### 5. Representing Binary Trees

*   **Array Representation:** (Less common for general binary trees, more efficient for complete binary trees).

    *   The root is at index 1 (or 0, depending on the convention).
    *   The left child of the node at index *i* is at index 2*i*.
    *   The right child of the node at index *i* is at index 2*i* + 1.
    *   The parent of the node at index *i* is at index ⌊*i*/2⌋.

    *   **Example (for a complete binary tree):**

        ```
              A
             / \
            B   C
           / \
          D   E
        ```

        Array Representation: `[_, A, B, C, D, E]`  (Underscore often indicates an unused or empty index.)

*   **Linked List Representation:** (Most common).

    *   Each node contains:
        *   Data.
        *   A pointer to the left child.
        *   A pointer to the right child.

    *   **Example (Conceptual):**

        ```python
        class Node:
            def __init__(self, data):
                self.data = data
                self.left = None
                self.right = None
        ```

### 6. Binary Search Trees (BSTs)

*   **Definition:** A binary tree with the following properties:
    *   The left subtree of a node contains only nodes with keys *less than* the node's key.
    *   The right subtree of a node contains only nodes with keys *greater than* the node's key.
    *   The left and right subtrees must also be binary search trees.

*   **Advantages:** Efficient searching, insertion, and deletion operations.  (Ideally O(log n) on average for a balanced BST).

*   **Example:**

    ```
           5
          / \
         3   8
        / \ / \
       1   4 7   9
    ```

*   **In-order Traversal of a BST:** Produces a sorted sequence of the keys.

### 7. Practice Questions/Exercises

1.  **Draw a complete binary tree of height 3. How many nodes does it have?**

    *   **Answer:**  A complete binary tree of height 3 has 2<sup>3+1</sup> - 1 = 2<sup>4</sup> - 1 = 16 - 1 = 15 nodes.

2.  **Given the following binary tree, perform pre-order, in-order, and post-order traversals:**

    ```
           1
          / \
         2   3
        / \
       4   5
    ```

    *   **Answer:**
        *   Pre-order: 1 2 4 5 3
        *   In-order: 4 2 5 1 3
        *   Post-order: 4 5 2 3 1

3.  **Is the following tree a binary search tree? Explain why or why not.**

    ```
           4
          / \
         2   5
        / \
       1   3
    ```

    *   **Answer:** Yes, it is a binary search tree because for each node, the values in its left subtree are less than its value, and the values in its right subtree are greater than its value. This property holds true recursively for all subtrees.

4.  **What is the maximum number of leaves in a binary tree of height *h*?**

    *   **Answer:** The maximum number of leaves is 2<sup>*h*</sup>.

5.  **Given the pre-order and in-order traversal sequences, can you reconstruct the binary tree? If so, describe the process.**

    *   **Answer:** Yes, you can reconstruct the binary tree. The pre-order traversal provides the root of each (sub)tree. The in-order traversal allows you to determine the left and right subtrees of that root. Recursively apply this process. The first element in pre-order is the root. Find that element in the in-order traversal. Everything to the left is the left subtree, and everything to the right is the right subtree. Repeat for each subtree.

### 8. Important Points to Remember

*   Trees are acyclic connected graphs.
*   Rooted trees have a designated root node.
*   Binary trees have at most two children per node.
*   Understand the different types of binary trees (full, complete, perfect, balanced, degenerate).
*   Be able to perform tree traversals (pre-order, in-order, post-order).
*   Binary search trees enable efficient data storage and retrieval when balanced.
*   Tree height is the length of the longest path to a leaf. Tree depth is the distance from the root.
*   Understand the array and linked list representations of trees.
