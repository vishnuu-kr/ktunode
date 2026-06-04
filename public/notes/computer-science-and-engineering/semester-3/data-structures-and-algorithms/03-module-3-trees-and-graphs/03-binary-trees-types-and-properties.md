---
title: "Binary Trees - Types and Properties"
subject: "DATA STRUCTURES AND ALGORITHMS"
module: "Module 3: Trees and Graphs"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ac3c"
status: "completed"
scrapedAt: "2026-05-20T16:22:59.669Z"
---
# DATA STRUCTURES AND ALGORITHMS - Module 3: Trees and Graphs - Binary Trees: Types and Properties

## Introduction

This module covers Binary Trees, a fundamental data structure within the broader context of Trees and Graphs. We will explore different types of binary trees and their associated properties.

## Learning Outcomes

By the end of this module, you should be able to:

1.  Define a binary tree and its key components.
2.  Distinguish between different types of binary trees: complete, full, perfect, balanced, and degenerate.
3.  Understand and apply the properties of binary trees, including the relationship between nodes, height, and levels.
4.  Solve problems related to calculating the number of nodes and height in different types of binary trees.

## 1. Definition and Key Components of a Binary Tree

### 1.1 Definition:

A **binary tree** is a tree data structure in which each node has at most two children, which are referred to as the **left child** and the **right child**.

### 1.2 Key Components:

*   **Node:** A basic unit of a tree that stores data and has links (pointers) to its child nodes.
*   **Root:** The topmost node in the tree.  A tree has only one root.
*   **Left Child:** The node that is directly connected to the left of a node.
*   **Right Child:** The node that is directly connected to the right of a node.
*   **Parent:** The node directly above another node in the tree.
*   **Sibling:** Nodes that share the same parent.
*   **Leaf Node:** A node with no children (both left and right children are null).  Also known as a terminal node.
*   **Internal Node:** A node that has at least one child.  The root is always considered an internal node (unless the tree consists of only the root).
*   **Edge:** The connection between a parent node and its child node.
*   **Path:** A sequence of nodes and edges connecting a node to a descendant.
*   **Level:** The level of a node is the number of edges between the root and the node.  The root is at level 0.
*   **Height:**  The height of a node is the number of edges on the longest path from that node to a leaf node. The height of the tree is the height of the root node. The height of an empty tree is -1, and the height of a leaf node is 0.
*   **Depth:** The depth of a node is the number of edges from the root to the node.  The depth of the root is 0.

### 1.3 Example:

Consider the following binary tree:

```
      A
     / \
    B   C
   / \   \
  D   E   F
```

In this tree:

*   A is the root.
*   B and C are children of A.
*   D and E are children of B.
*   F is the child of C.
*   D, E, and F are leaf nodes.
*   A, B, and C are internal nodes.
*   The height of the tree is 2.
*   The level of B and C is 1.
*   The depth of D, E, and F is 2.

## 2. Types of Binary Trees

### 2.1 Complete Binary Tree:

A complete binary tree is a binary tree in which every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible.

*   All levels are completely filled except possibly the last level.
*   The last level is filled from left to right.

**Example:**

```
      1
     / \
    2   3
   / \
  4   5
```

### 2.2 Full Binary Tree:

A full binary tree is a binary tree in which every node has either 0 or 2 children.  In other words, no node has exactly one child.

*   Each node has 0 or 2 children.

**Example:**

```
      1
     / \
    2   3
   / \
  4   5
```

### 2.3 Perfect Binary Tree:

A perfect binary tree is a binary tree in which all internal nodes have two children and all leaf nodes are at the same level. In other words, it is both full and complete.

*   All internal nodes have two children.
*   All leaf nodes are at the same level.

**Example:**

```
      1
     / \
    2   3
   / \ / \
  4  5 6  7
```

### 2.4 Balanced Binary Tree:

A balanced binary tree is a binary tree where the heights of the left and right subtrees of every node differ by at most 1.  This ensures a more even distribution of nodes, leading to better performance in search and other operations.

*   For every node, the height difference between the left and right subtrees is no more than 1.
*   Examples include AVL trees and Red-Black trees.

**Example:**

```
     2
    / \
   1   3
  /     \
 0       4

```
This tree is balanced because:
* At node 2, height(left) = 1, height(right) = 1, difference = 0.
* At node 1, height(left) = 0, height(right) = 0, difference = 0.
* At node 3, height(left) = 0, height(right) = 0, difference = 0.

### 2.5 Degenerate (Skewed) Binary Tree:

A degenerate binary tree (or skewed binary tree) is a binary tree where each internal node has only one child. This results in a tree that resembles a linked list.

*   Each internal node has only one child (either left or right).

**Example (Left Skewed):**

```
  1
 /
2
/
3
/
4
```

**Example (Right Skewed):**

```
1
 \
  2
   \
    3
     \
      4
```

## 3. Properties of Binary Trees

### 3.1 Maximum Number of Nodes:

*   A binary tree of height `h` has a maximum of `2^(h+1) - 1` nodes.
*   A perfect binary tree of height `h` has exactly `2^(h+1) - 1` nodes.

### 3.2 Minimum Number of Nodes:

*   A binary tree of height `h` has a minimum of `h + 1` nodes (occurs in a degenerate tree).

### 3.3 Number of Leaf Nodes:

*   In a full binary tree, if the number of internal nodes is `n`, then the number of leaf nodes is `n + 1`.

### 3.4 Relationship Between Nodes and Edges:

*   In any tree, the number of edges is always one less than the number of nodes.  If a tree has `N` nodes, it has `N-1` edges.

### 3.5 Height and Number of Nodes in a Complete Binary Tree:

*   If a complete binary tree has `n` nodes, its height is `floor(log2(n))`.

### 3.6 Properties of Full Binary Tree

* A Full Binary tree with n internal nodes has n+1 leaf nodes
* A Full Binary tree with n leaf nodes has n-1 internal nodes
* A Full Binary tree with i internal nodes has a total of 2i+1 nodes.
* A Full Binary tree with n nodes has (n-1)/2 internal nodes.
* A Full Binary tree with n nodes has (n+1)/2 leaf nodes.

## 4. Examples and Applications

### 4.1 Representing Arithmetic Expressions:

Binary trees can represent arithmetic expressions.  Internal nodes represent operators, and leaf nodes represent operands.

Example: `(a + b) * (c - d)`

```
      *
     / \
    +   -
   / \ / \
  a   b c   d
```

### 4.2 Decision Trees:

Binary trees are used in machine learning for decision-making processes.

### 4.3 Binary Search Trees (BSTs):

A special type of binary tree where the value of each node is greater than all values in its left subtree and less than all values in its right subtree.  Used for efficient searching, insertion, and deletion. This is covered in more detail in other modules.

## 5. Practice Questions/Exercises

1.  **Question:** What is the maximum number of nodes in a binary tree of height 4?

    **Answer:**  `2^(4+1) - 1 = 2^5 - 1 = 32 - 1 = 31`

2.  **Question:** What is the minimum number of nodes in a binary tree of height 5?

    **Answer:** `5 + 1 = 6`

3.  **Question:** Determine if the following tree is complete, full, or perfect:

    ```
          1
         / \
        2   3
       / \
      4   5
     /
    6
    ```

    **Answer:** The tree is a **complete binary tree**.  It's not full because node '2' has two children and '3' only has 0.  It's not perfect because the leaf nodes are not all at the same level.

4.  **Question:**  A full binary tree has 15 nodes.  How many internal nodes does it have? How many leaf nodes does it have?

    **Answer:**  Internal nodes: `(15 - 1) / 2 = 7`. Leaf nodes: `(15 + 1) / 2 = 8`. Alternatively since we know there are 7 internal nodes, the number of leaf nodes is simply 7 + 1 = 8

5. **Question:** Draw an example of a degenerate (right skewed) binary tree with 5 nodes.

   **Answer:**
   ```
    1
     \
      2
       \
        3
         \
          4
           \
            5
   ```

## 6. Important Points to Remember

*   A binary tree can have at most two children per node.
*   Height of an empty tree is -1, and the height of a leaf node is 0.
*   Understand the differences between complete, full, and perfect binary trees.  A perfect binary tree is both complete and full.
*   Balanced binary trees provide better performance for searching and other operations compared to unbalanced ones (like degenerate trees).
*   Be able to calculate the number of nodes, height, and levels in different types of binary trees.
*   The number of edges in any tree is always one less than the number of nodes.

This document provides a foundation for understanding Binary Trees and their properties. Further exploration of specific tree implementations (like Binary Search Trees, AVL Trees, Red-Black Trees) is recommended for a more comprehensive understanding.
