---
title: "Trees and Graphs: Trees"
subject: "DATA STRUCTURES"
module: "Module 3: Trees and Graphs: Trees"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f363e9"
status: "completed"
scrapedAt: "2026-05-23T16:20:43.192Z"
---
# Data Structures: Module 3 - Trees and Graphs: Trees

This module introduces **Trees**, a fundamental non-linear data structure with wide-ranging applications. We will explore their structure, properties, and various types, laying the groundwork for understanding their use in algorithms and problem-solving.

## Learning Outcomes:

*   Understand the basic concepts of trees and their terminology.
*   Differentiate between various types of trees.
*   Learn about the properties and traversal methods of trees.
*   Understand the applications of trees in computer science.

## Introduction to Trees

Trees are hierarchical data structures that resemble an upside-down tree. They consist of nodes connected by edges.

### Key Concepts and Definitions

*   **Node:** A fundamental unit of a tree, containing data and possibly references (pointers) to other nodes.
*   **Root:** The topmost node of a tree, with no parent.
*   **Edge:** A connection between two nodes.
*   **Parent:** A node that has a direct connection to another node (its child).
*   **Child:** A node that is directly connected to another node (its parent).
*   **Leaf Node (Terminal Node):** A node with no children.
*   **Internal Node:** A node that has at least one child.
*   **Siblings:** Nodes that share the same parent.
*   **Degree of a Node:** The number of children a node has.
*   **Height of a Node:** The number of edges on the longest path from the node to a leaf. The height of the root is the height of the tree.
*   **Depth of a Node:** The number of edges from the root to the node. The root has a depth of 0.
*   **Subtree:** A tree formed by a node and all its descendants.
*   **Path:** A sequence of nodes connected by edges.
*   **Ancestor:** A node that is on the path from the root to another node.
*   **Descendant:** A node that is on the path from another node to a leaf.

**[Textbook Reference: Horowitz, Sahni, & Anderson-Freed, Chapter 7]**
**[Textbook Reference: Samanta, Chapter 6]**

### Properties of Trees

*   A tree with *n* nodes has exactly *n-1* edges.
*   A tree is connected.
*   There is a unique path between any two nodes in a tree.
*   A tree with no cycles is a tree. Adding an edge between any two nodes in a tree creates exactly one cycle.

**[Textbook Reference: Horowitz, Sahni, & Anderson-Freed, Chapter 7]**

## Types of Trees

Trees can be classified based on the number of children a node can have or specific structural properties.

### General Trees

*   A general tree is a tree where each node can have an arbitrary number of children.

**[Reference Book: Gilberg & Forouzan, Chapter 7]**

### Binary Trees

*   A binary tree is a tree in which each node can have at most two children, referred to as the **left child** and the **right child**.
*   The order of children matters (left vs. right).

**Key Definitions for Binary Trees:**

*   **Full Binary Tree:** A binary tree where every node has either 0 or 2 children.
*   **Complete Binary Tree:** A binary tree where all levels are completely filled except possibly the last level, which is filled from left to right.
*   **Extended Binary Tree (or Strictly Binary Tree):** A binary tree where every node has either 0 or 2 children. It is formed by replacing each original node with an internal node and adding a leaf node as its child.
*   **Perfect Binary Tree:** A binary tree where all internal nodes have two children and all leaf nodes are at the same depth.
*   **Skewed Binary Tree:** A binary tree where each node has only one child (either left or right). It resembles a linked list.

**[Textbook Reference: Horowitz, Sahni, & Anderson-Freed, Chapter 7]**
**[Textbook Reference: Samanta, Chapter 6]**
**[Reference Book: Gilberg & Forouzan, Chapter 7]**

**Example:**
Consider a binary tree representing a mathematical expression:
```
        +
       / \
      *   5
     / \
    3   -
       / \
      7   2
```
Here, '+' is the root, '*' and '5' are its children. '*' has children '3' and '-'. '5', '3', and '7', '2' are leaf nodes.

### Binary Search Trees (BST)

*   A binary search tree is a binary tree with a specific ordering property:
    *   For any node, all values in its **left subtree** are **less than** the node's value.
    *   For any node, all values in its **right subtree** are **greater than** the node's value.
    *   Both the left and right subtrees are also binary search trees.

**[Textbook Reference: Horowitz, Sahni, & Anderson-Freed, Chapter 7]**
**[Textbook Reference: Samanta, Chapter 6]**
**[Reference Book: Gilberg & Forouzan, Chapter 7]**

**Example:**
```
        8
       / \
      3   10
     / \    \
    1   6    14
       / \   /
      4   7 13
```
In this BST, for node '8', all values in the left subtree (3, 1, 6, 4, 7) are less than 8, and all values in the right subtree (10, 14, 13) are greater than 8. This property holds recursively for all nodes.

### Other Important Tree Types (Briefly Mentioned for Context)

*   **AVL Trees:** Self-balancing binary search trees that maintain a height balance between the left and right subtrees.
*   **B-Trees:** Multi-way search trees designed for disk-based storage, used in databases and file systems.
*   **Heaps:** A specialized tree-based data structure that satisfies the heap property (e.g., in a min-heap, the parent node is always smaller than or equal to its children). Heaps are often implemented using arrays.
*   **Tries (Prefix Trees):** Trees used for efficient retrieval of keys in a dataset of strings.

**[Textbook Reference: Horowitz, Sahni, & Anderson-Freed, Chapters 7 & 8]**
**[Textbook Reference: Samanta, Chapters 6 & 7]**
**[Reference Book: Brass, Chapter 5]**
**[Reference Book: Aho, Hopcroft, & Ullman, Chapter 6]**

## Tree Traversal

Tree traversal refers to the process of visiting (e.g., processing, printing) each node in a tree exactly once. For binary trees, there are several standard traversal methods.

### Inorder Traversal

*   Visit the **left subtree**.
*   Visit the **current node**.
*   Visit the **right subtree**.

**Algorithm (Recursive):**
```
Inorder(node):
  if node is not null:
    Inorder(node.left)
    print node.data
    Inorder(node.right)
```

**[Textbook Reference: Horowitz, Sahni, & Anderson-Freed, Chapter 7]**
**[Textbook Reference: Samanta, Chapter 6]**

**Example (using the BST above):**
Visiting the left subtree of 8, then 8, then the right subtree of 8. This process continues recursively.
Output: 1, 3, 4, 6, 7, 8, 10, 13, 14

**Important:** For a Binary Search Tree, an inorder traversal visits the nodes in ascending order of their values. This is a crucial property. **(CO3, K3)**

### Preorder Traversal (Depth-First)

*   Visit the **current node**.
*   Visit the **left subtree**.
*   Visit the **right subtree**.

**Algorithm (Recursive):**
```
Preorder(node):
  if node is not null:
    print node.data
    Preorder(node.left)
    Preorder(node.right)
```

**[Textbook Reference: Horowitz, Sahni, & Anderson-Freed, Chapter 7]**
**[Textbook Reference: Samanta, Chapter 6]**

**Example (using the BST above):**
Output: 8, 3, 1, 6, 4, 7, 10, 14, 13

### Postorder Traversal (Depth-First)

*   Visit the **left subtree**.
*   Visit the **right subtree**.
*   Visit the **current node**.

**Algorithm (Recursive):**
```
Postorder(node):
  if node is not null:
    Postorder(node.left)
    Postorder(node.right)
    print node.data
```

**[Textbook Reference: Horowitz, Sahni, & Anderson-Freed, Chapter 7]**
**[Textbook Reference: Samanta, Chapter 6]**

**Example (using the BST above):**
Output: 1, 4, 7, 6, 3, 13, 14, 10, 8

### Level Order Traversal (Breadth-First)

*   Visit nodes level by level, from top to bottom, and from left to right within each level.
*   This traversal typically uses a queue.

**Algorithm (Iterative using a Queue):**
```
LevelOrder(root):
  if root is null:
    return

  queue = new Queue()
  queue.enqueue(root)

  while queue is not empty:
    currentNode = queue.dequeue()
    print currentNode.data

    if currentNode.left is not null:
      queue.enqueue(currentNode.left)
    if currentNode.right is not null:
      queue.enqueue(currentNode.right)
```

**[Textbook Reference: Horowitz, Sahni, & Anderson-Freed, Chapter 7]**
**[Reference Book: Gilberg & Forouzan, Chapter 7]**

**Example (using the BST above):**
Output: 8, 3, 10, 1, 6, 14, 4, 7, 13

**Comparison of Traversal Methods:**
*   **Inorder:** Useful for BSTs to get sorted data.
*   **Preorder:** Useful for creating a copy of the tree or for expression trees (prefix notation).
*   **Postorder:** Useful for deleting a tree or for expression trees (postfix notation).
*   **Level Order:** Useful for tasks that require processing nodes based on their depth, like finding the shortest path from the root to a node or building certain types of trees.

**[CO3, K3]**

## Applications of Trees

Trees are incredibly versatile and are used in numerous computer science applications.

### Searching and Sorting

*   **Binary Search Trees (BSTs):** Enable efficient searching, insertion, and deletion of data. In a balanced BST, these operations take O(log n) time.
*   **Heaps:** Used in heap sort for efficient sorting. Heap data structures are also used in priority queues.

**[CO3, K3]**
**[CO4, K3]**

### Database Systems

*   **B-Trees and B+ Trees:** Used extensively in database indexing to speed up data retrieval from disk. They are optimized for disk I/O.

**[Textbook Reference: Horowitz, Sahni, & Anderson-Freed, Chapter 8]**
**[Reference Book: Brass, Chapter 5]**

### File Systems

*   Hierarchical organization of files and directories is often represented using trees (e.g., the directory structure in operating systems).

### Compilers

*   **Abstract Syntax Trees (ASTs):** Used by compilers to represent the structure of source code, facilitating analysis and code generation.

### Networking

*   **Routing Tables:** Can be represented as trees for efficient path finding.
*   **Spanning Trees:** In graph theory, a spanning tree is a subgraph that connects all vertices together, without any cycles.

### Decision Making and Game Trees

*   **Decision Trees:** Used in machine learning and AI to represent sequences of decisions and their outcomes.
*   **Game Trees:** Represent possible moves and states in games like chess or tic-tac-toe.

### Data Compression

*   **Huffman Coding:** Uses a binary tree to assign variable-length codes to characters based on their frequencies, achieving compression.

**[Textbook Reference: Horowitz, Sahni, & Anderson-Freed, Chapter 10]**

**[CO3, K3]**

## Practice Questions

**1. Multiple Choice:**
   a) A tree with N nodes has exactly:
      i) N edges
      ii) N-1 edges
      iii) N+1 edges
      iv) 2N edges

   b) In a Binary Search Tree, all nodes in the left subtree of a node are:
      i) Greater than the node's value
      ii) Less than the node's value
      iii) Equal to the node's value
      iv) Less than or equal to the node's value

   c) Which traversal method visits the nodes of a Binary Search Tree in ascending order?
      i) Preorder
      ii) Postorder
      iii) Inorder
      iv) Level Order

**2. Short Answer:**
   a) Define the terms: Root, Leaf Node, Height of a node.
   b) What is the main difference between a general tree and a binary tree?
   c) State the defining property of a Binary Search Tree.
   d) Give one application of trees in computer science.

**3. Conceptual:**
   a) Explain the difference between a Complete Binary Tree and a Full Binary Tree with diagrams.
   b) Describe the steps involved in a Level Order Traversal of a binary tree using a queue.
   c) If you are given a sequence of nodes visited during a Preorder traversal and another sequence visited during an Inorder traversal, can you reconstruct the original Binary Tree? Explain your reasoning. (Hint: This is a classic problem related to tree traversals).

**4. Problem Solving:**
   a) Consider the following set of numbers: {15, 10, 20, 8, 12, 17, 25, 6, 11}. Insert these numbers one by one into an initially empty Binary Search Tree. Draw the resulting BST.
   b) For the BST created in question 4(a), perform and show the output of:
      i) Inorder Traversal
      ii) Preorder Traversal
      iii) Postorder Traversal
      iv) Level Order Traversal

## Answers to Practice Questions

**1. Multiple Choice:**
   a) ii) N-1 edges
   b) ii) Less than the node's value
   c) iii) Inorder

**2. Short Answer:**
   a) **Root:** The topmost node of a tree, with no parent. **Leaf Node:** A node with no children. **Height of a node:** The number of edges on the longest path from the node to a leaf.
   b) In a general tree, each node can have an arbitrary number of children. In a binary tree, each node can have at most two children (left and right).
   c) For any node in a BST, all values in its left subtree are less than the node's value, and all values in its right subtree are greater than the node's value.
   d) Examples: Binary Search Trees for efficient searching, File systems for hierarchical data organization, Huffman coding for data compression.

**3. Conceptual:**
   a) **Full Binary Tree:** Every node has either 0 or 2 children.
      ```
              A
             / \
            B   C
           / \
          D   E
      ```
      (Node A and B have 2 children, D and E have 0 children. C also has 0 children).

      **Complete Binary Tree:** All levels are completely filled except possibly the last level, which is filled from left to right.
      ```
              A
             / \
            B   C
           / \ /
          D   E F
      ```
      (All levels except the last are full. The last level (D, E, F) is filled from left to right).

   b) **Level Order Traversal:**
      1. Initialize an empty queue.
      2. Enqueue the root node.
      3. While the queue is not empty:
         a. Dequeue a node.
         b. Process (e.g., print) the dequeued node.
         c. If the dequeued node has a left child, enqueue the left child.
         d. If the dequeued node has a right child, enqueue the right child.

   c) Yes, it is possible to reconstruct the original Binary Tree if you have both the Preorder and Inorder traversals. The first element in the Preorder traversal is always the root. Once the root is identified, you can find its position in the Inorder traversal. All elements to the left of the root in the Inorder traversal belong to the left subtree, and all elements to the right belong to the right subtree. You can then recursively apply this logic to construct the left and right subtrees using the corresponding portions of the Preorder and Inorder traversals. **(CO3, K3)**

**4. Problem Solving:**

   a) **Resulting BST after inserting {15, 10, 20, 8, 12, 17, 25, 6, 11}:**

      Initial: Empty

      Insert 15:
      ```
          15
      ```

      Insert 10:
      ```
          15
         /
        10
      ```

      Insert 20:
      ```
          15
         /  \
        10  20
      ```

      Insert 8:
      ```
          15
         /  \
        10  20
       /
      8
      ```

      Insert 12:
      ```
          15
         /  \
        10  20
       /  \
      8   12
      ```

      Insert 17:
      ```
          15
         /  \
        10  20
       /  \   \
      8   12  17
      ```

      Insert 25:
      ```
          15
         /  \
        10  20
       /  \   \
      8   12  17 25
      ```

      Insert 6:
      ```
          15
         /  \
        10  20
       /  \   \
      8   12  17 25
     /
    6
      ```

      Insert 11:
      ```
          15
         /  \
        10  20
       /  \   \
      8   12  17 25
     /   /
    6   11
      ```

   b) **Traversals for the BST:**

      i) **Inorder Traversal:** (Visits nodes in ascending order)
         Output: 6, 8, 10, 11, 12, 15, 17, 20, 25

      ii) **Preorder Traversal:** (Root, Left, Right)
         Output: 15, 10, 8, 6, 12, 11, 20, 17, 25

      iii) **Postorder Traversal:** (Left, Right, Root)
         Output: 6, 11, 12, 8, 10, 17, 25, 20, 15

      iv) **Level Order Traversal:** (Level by Level, Left to Right)
         Output: 15, 10, 20, 8, 12, 17, 25, 6, 11

## Important Points to Remember

*   **Trees are hierarchical:** They represent relationships where one node is the parent of others.
*   **Key property:** A tree with *n* nodes has *n-1* edges.
*   **Binary Trees:** Limit children to at most two, with distinction between left and right children.
*   **Binary Search Trees (BSTs):** Maintain an ordering property for efficient searching.
*   **Inorder traversal of a BST yields sorted data.** This is a crucial insight for solving problems.
*   **Traversals (Inorder, Preorder, Postorder, Level Order)** are fundamental operations for processing tree data.
*   Trees have a vast array of applications, from basic data organization to complex algorithms in databases, compilers, and AI.
*   **CO3 (K3):** Trees are powerful tools for designing algorithms for various applications. Understanding their structure and traversal methods is key to leveraging them effectively.

This concludes Module 3, focusing on the foundational aspects of Trees in Data Structures. The subsequent modules will build upon these concepts to explore more advanced tree structures and their integration with graphs.
