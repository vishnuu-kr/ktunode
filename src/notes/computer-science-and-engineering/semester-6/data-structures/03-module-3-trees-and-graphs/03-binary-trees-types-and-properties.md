---
title: "Binary Trees - Types and Properties"
subject: "DATA STRUCTURES"
module: "Module 3: Trees and Graphs"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bea0"
status: "completed"
scrapedAt: "2026-05-20T16:51:59.794Z"
---
# Data Structures: Module 3 - Trees and Graphs

## Topic: Binary Trees - Types and Properties

---

### 1. Introduction to Binary Trees

*   **Definition:** A binary tree is a hierarchical data structure where each node has at most two children, referred to as the **left child** and the **right child**.

*   **Key Components:**
    *   **Root:** The topmost node in the tree. It has no parent.
    *   **Node:** A fundamental unit of a tree, containing data and pointers to its children.
    *   **Edge:** A connection between two nodes.
    *   **Parent:** A node that has a child.
    *   **Child:** A node that is directly connected to a parent node.
    *   **Leaf Node (External Node):** A node with no children.
    *   **Internal Node:** A node with at least one child.
    *   **Siblings:** Nodes that share the same parent.
    *   **Depth of a Node:** The number of edges from the root to the node. The root has a depth of 0.
    *   **Height of a Node:** The number of edges on the longest path from the node to a leaf node. A leaf node has a height of 0.
    *   **Height of a Tree:** The height of the root node. An empty tree has a height of -1.
    *   **Subtree:** A node and all of its descendants.

*   **Representation:** Binary trees can be represented using:
    *   **Node-based (linked) representation:** Each node is an object/struct containing its data, a pointer to its left child, and a pointer to its right child.
    *   **Array-based representation:** Suitable for complete or nearly complete binary trees. The root is at index 0. For a node at index `i`:
        *   Left child: `2*i + 1`
        *   Right child: `2*i + 2`
        *   Parent: `floor((i-1)/2)`

---

### 2. Types of Binary Trees

#### 2.1. Full Binary Tree

*   **Definition:** A binary tree in which every node has either 0 or 2 children.
*   **Properties:**
    *   The number of leaf nodes is always one more than the number of internal nodes (`L = I + 1`).
    *   The total number of nodes `N` is always odd (`N = 2I + 1`).
*   **Example:**
    ```
          A
         / \
        B   C
       / \
      D   E
    ```
    (Nodes B and C have 2 children, Node A has 2 children, Nodes D and E are leaves.)

#### 2.2. Complete Binary Tree

*   **Definition:** A binary tree where all levels are completely filled except possibly the last level, which is filled from left to right.
*   **Properties:**
    *   If a node exists at level `d`, all nodes at levels `0` to `d-1` must exist.
    *   Efficiently represented using arrays.
*   **Example:**
    ```
          A
         / \
        B   C
       / \ /
      D   E F
    ```
    (All levels except the last are full. The last level is filled from left to right.)

#### 2.3. Perfect Binary Tree

*   **Definition:** A binary tree in which all interior nodes have two children and all leaves are at the same level.
*   **Properties:**
    *   A perfect binary tree of height `h` has `2^(h+1) - 1` nodes.
    *   It is both a full and a complete binary tree.
*   **Example:**
    ```
          A
         / \
        B   C
       / \ / \
      D   E F G
    ```
    (All leaves are at depth 2, and all internal nodes have 2 children.)

#### 2.4. Balanced Binary Tree (AVL Tree / Height-Balanced Binary Tree)

*   **Definition:** A binary tree where the height difference between the left and right subtrees of any node is at most 1.
*   **Properties:**
    *   Ensures efficient search, insertion, and deletion operations (typically O(log n)).
    *   Maintained through rotations during insertion/deletion.
*   **Example:**
    ```
          B
         / \
        A   C
    ```
    (Height of left subtree of B is 0, height of right subtree of B is 0. Difference is 0. Node A and C are leaves.)

#### 2.5. Skewed Binary Tree (or Degenerate Binary Tree)

*   **Definition:** A binary tree where each node has at most one child. This is essentially a linked list.
*   **Types:**
    *   **Left Skewed:** Every node has only a left child.
    *   **Right Skewed:** Every node has only a right child.
*   **Properties:**
    *   Operations can degrade to O(n) time complexity.
*   **Example (Left Skewed):**
    ```
      A
     /
    B
   /
  C
 /
D
    ```

---

### 3. Properties of Binary Trees

*   **Maximum Number of Nodes:**
    *   A binary tree of height `h` has at most `2^(h+1) - 1` nodes.
    *   A binary tree with `n` nodes has a minimum height of `floor(log₂n)`.

*   **Relationship between Nodes and Leaves (for Full Binary Trees):**
    *   Let `N` be the total number of nodes.
    *   Let `I` be the number of internal nodes.
    *   Let `L` be the number of leaf nodes.
    *   `N = I + L`
    *   In a full binary tree, `L = I + 1`.
    *   Therefore, `N = I + (I + 1) = 2I + 1`.
    *   This implies that a full binary tree always has an odd number of nodes.

*   **Number of Nodes in a Complete Binary Tree:**
    *   A complete binary tree with `h` levels (root at level 0) can have between `2^h` and `2^(h+1) - 1` nodes.

*   **Number of nodes in a Binary Tree:**
    *   A binary tree with `n` nodes can have at most `n` leaf nodes (if it's skewed) and at least 1 leaf node (if it's a single node or skewed).

---

### 4. Binary Tree Traversal

(While not explicitly part of "Types and Properties", traversal is fundamental to working with binary trees and often covered in conjunction.)

*   **Definition:** The process of visiting each node in the tree exactly once.
*   **Common Traversal Orders:**
    *   **In-order Traversal:** Visit Left Subtree -> Visit Root -> Visit Right Subtree.
        *   For a Binary Search Tree (BST), this yields nodes in sorted order.
    *   **Pre-order Traversal:** Visit Root -> Visit Left Subtree -> Visit Right Subtree.
        *   Useful for creating a copy of the tree or for expression trees.
    *   **Post-order Traversal:** Visit Left Subtree -> Visit Right Subtree -> Visit Root.
        *   Useful for deleting nodes in a tree or for evaluating expression trees.
    *   **Level-order Traversal (Breadth-First Traversal):** Visit nodes level by level, from left to right. Uses a queue.

---

### 5. Practice Questions

1.  **What is the maximum number of nodes in a binary tree of height 3?**
2.  **What is the minimum height of a binary tree with 10 nodes?**
3.  **Which type of binary tree is always also a full binary tree?**
4.  **Can a complete binary tree be a full binary tree? Explain.**
5.  **Consider the following binary tree. Is it a full, complete, perfect, or balanced binary tree? Justify your answer.**
    ```
          10
         /  \
        5    15
       / \     \
      2   7     20
    ```
6.  **If a binary tree is represented using an array, and a node is at index `i=5`, what are the indices of its left child, right child, and parent?**

---

### 6. Practice Questions - Answers

1.  **Maximum number of nodes in a binary tree of height 3:**
    *   Height `h` means the maximum depth is `h`.
    *   Number of nodes = `2^(h+1) - 1`
    *   For `h=3`, nodes = `2^(3+1) - 1 = 2^4 - 1 = 16 - 1 = 15`.
    *   **Answer: 15**

2.  **Minimum height of a binary tree with 10 nodes:**
    *   The minimum height occurs in a complete binary tree.
    *   We need to find `h` such that `2^h <= n < 2^(h+1)`.
    *   For `n=10`:
        *   `2^0 = 1`
        *   `2^1 = 2`
        *   `2^2 = 4`
        *   `2^3 = 8`
        *   `2^4 = 16`
    *   We have `2^3 <= 10 < 2^4`. So, the minimum height is 3.
    *   **Answer: 3** (Remember height is often defined as the number of edges on the longest path, so a tree with nodes at depths 0, 1, 2, 3 has height 3).

3.  **Which type of binary tree is always also a full binary tree?**
    *   A **perfect binary tree**. By definition, all internal nodes in a perfect binary tree have two children, and all leaves are at the same level. This fulfills the definition of a full binary tree.
    *   **Answer: Perfect Binary Tree**

4.  **Can a complete binary tree be a full binary tree? Explain.**
    *   Yes, a complete binary tree *can* also be a full binary tree. This occurs when the last level is completely filled. If the last level is not completely filled, it cannot be a full binary tree because some nodes in the last level would have only one child (if filled from left to right).
    *   **Answer: Yes. It happens when the last level is completely filled.**

5.  **Consider the following binary tree. Is it a full, complete, perfect, or balanced binary tree? Justify your answer.**
    ```
          10
         /  \
        5    15
       / \     \
      2   7     20
    ```
    *   **Full Binary Tree?** No. Node 15 has only one child (20).
    *   **Complete Binary Tree?** Yes. All levels are filled except possibly the last. The last level (depth 2) is filled from left to right (nodes 2, 7, 20).
    *   **Perfect Binary Tree?** No. Node 15 has only one child, and the leaves are not all at the same level (2 and 7 are at depth 2, 20 is at depth 2, but 15 is at depth 1).
    *   **Balanced Binary Tree (AVL)?** Let's check the height differences:
        *   Node 10: Left subtree (root 5) has height 1. Right subtree (root 15) has height 1. Difference = 0. (Balanced)
        *   Node 5: Left subtree (root 2) has height 0. Right subtree (root 7) has height 0. Difference = 0. (Balanced)
        *   Node 15: Left subtree (null) has height -1. Right subtree (root 20) has height 0. Difference = 1. (Balanced)
        *   Nodes 2, 7, 20 are leaves and are balanced.
    *   **Answer: It is a Complete Binary Tree and a Balanced Binary Tree.**

6.  **If a binary tree is represented using an array, and a node is at index `i=5`, what are the indices of its left child, right child, and parent?**
    *   Left child index: `2*i + 1 = 2*5 + 1 = 10 + 1 = 11`
    *   Right child index: `2*i + 2 = 2*5 + 2 = 10 + 2 = 12`
    *   Parent index: `floor((i-1)/2) = floor((5-1)/2) = floor(4/2) = floor(2) = 2`
    *   **Answer: Left child: 11, Right child: 12, Parent: 2**

---

### 7. Important Points to Remember

*   **Binary Tree vs. General Tree:** A binary tree is a specific type of tree where each node has a maximum of two children. General trees can have any number of children.
*   **Height vs. Depth:** Height is measured from the node to the furthest leaf; depth is measured from the root to the node.
*   **Array Representation Efficiency:** The array representation is most efficient for **complete** or **perfect** binary trees, as it avoids wasted space and simplifies child/parent index calculations.
*   **Balanced Trees = Performance:** The primary reason to focus on balanced trees like AVL trees is to guarantee logarithmic time complexity for key operations (search, insert, delete), preventing worst-case O(n) performance seen in skewed trees.
*   **Full vs. Complete:** Don't confuse these. A full binary tree requires *every* node to have 0 or 2 children. A complete binary tree allows the last level to be partially filled, but only from left to right. A perfect binary tree satisfies both properties.

---
