---
title: "Binary Tree Representation"
subject: "DATA STRUCTURES"
module: "Module 3: Trees and Graphs"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bea1"
status: "completed"
scrapedAt: "2026-05-20T16:52:00.503Z"
---
# Data Structures: Module 3 - Trees and Graphs

## Topic: Binary Tree Representation

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Understand the concept of a binary tree and its fundamental properties.
*   Differentiate between various types of binary trees (full, complete, perfect, skewed).
*   Explain and implement different methods for representing binary trees in memory (array-based and linked list-based).
*   Perform traversal operations (in-order, pre-order, post-order) on a binary tree.
*   Understand the applications of binary trees.

---

### 1. Introduction to Binary Trees

#### 1.1 What is a Tree?

A **tree** is a hierarchical data structure that organizes data in a tree-like structure. It consists of a collection of nodes connected by edges.

*   **Root:** The topmost node in the tree.
*   **Node:** A basic unit of the tree that holds data and pointers to its children.
*   **Edge:** A connection between two nodes.
*   **Parent Node:** A node that has one or more child nodes.
*   **Child Node:** A node that is directly connected to a parent node.
*   **Leaf Node (Terminal Node):** A node that has no children.
*   **Internal Node:** A node that has at least one child.
*   **Subtree:** A tree formed by a node and all its descendants.
*   **Height of a Node:** The number of edges on the longest path from the node to a leaf.
*   **Height of a Tree:** The height of its root node.
*   **Depth of a Node:** The number of edges from the root to the node.
*   **Level of a Node:** The depth of the node plus one.

#### 1.2 What is a Binary Tree?

A **binary tree** is a special type of tree data structure where each node has at most two children, referred to as the **left child** and the **right child**.

**Key Properties:**

*   Each node can have 0, 1, or 2 children.
*   The children are ordered: there is a distinct left child and a distinct right child.
*   The maximum number of nodes in a binary tree of height *h* is $2^{h+1} - 1$.
*   The minimum number of nodes in a binary tree of height *h* is *h* + 1.

**Example:**

```
      10
     /  \
    5    15
   / \     \
  2   7     18
```

In this example:
*   `10` is the root.
*   `5` and `15` are children of `10`.
*   `5` is the left child of `10`, `15` is the right child of `10`.
*   `2` and `7` are children of `5`.
*   `18` is the right child of `15`.
*   `2`, `7`, and `18` are leaf nodes.
*   `10` and `5` are internal nodes.
*   The height of the tree is 2 (path from 10 to 2 or 10 to 18).

---

### 2. Types of Binary Trees

Understanding different types of binary trees is crucial for choosing the appropriate representation and algorithms.

#### 2.1 Full Binary Tree

A **full binary tree** (or proper binary tree) is a tree in which every node has either 0 or 2 children.

**Example:**

```
      A
     / \
    B   C
   / \
  D   E
```

**Important Point:** A full binary tree always has an odd number of nodes.

#### 2.2 Complete Binary Tree

A **complete binary tree** is a binary tree in which every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible.

**Example:**

```
      A
     / \
    B   C
   / \ /
  D   E F
```

**Important Point:** Complete binary trees are often used for efficient array-based implementations.

#### 2.3 Perfect Binary Tree

A **perfect binary tree** is a binary tree in which all internal nodes have two children and all leaf nodes are at the same level.

**Example:**

```
      A
     / \
    B   C
   / \ / \
  D   E F   G
```

**Important Point:** A perfect binary tree of height *h* has exactly $2^{h+1} - 1$ nodes.

#### 2.4 Skewed Binary Tree

A **skewed binary tree** is a binary tree where every node has only one child. It can be either a **left-skewed tree** (all nodes have only a left child) or a **right-skewed tree** (all nodes have only a right child).

**Example (Left-Skewed):**

```
      A
     /
    B
   /
  C
 /
D
```

**Example (Right-Skewed):**

```
      A
       \
        B
         \
          C
           \
            D
```

**Important Point:** Skewed binary trees behave similarly to linked lists, offering no significant advantage for searching compared to linked lists.

---

### 3. Binary Tree Representation

Binary trees can be represented in memory using two primary methods:

#### 3.1 Array-Based Representation

This method utilizes an array to store the nodes of the binary tree. The positions of the nodes in the array are determined by their relationship to their parent and children.

**Mapping Convention:**

*   If a node is at index `i` in the array:
    *   Its **left child** is at index `2*i + 1`.
    *   Its **right child** is at index `2*i + 2`.
    *   Its **parent** is at index `floor((i-1)/2)`.

**Considerations:**

*   **Pros:**
    *   Efficient access to children and parent nodes using arithmetic operations.
    *   Good for **complete binary trees** or **perfect binary trees** as it minimizes wasted space.
*   **Cons:**
    *   Can lead to significant **wasted space** for non-complete or sparse trees, as the array size needs to accommodate the maximum possible node positions.
    *   Insertion and deletion can be complex and might require resizing the array.

**Example:** Representing the following binary tree using an array:

```
      10 (index 0)
     /  \
    5    15 (index 1, 2)
   / \     \
  2   7     18 (index 3, 4, 6)
```

**Array Representation:**

```
Index: | 0  | 1  | 2  | 3  | 4  | 5  | 6  | ...
Value: | 10 | 5  | 15 | 2  | 7  | -  | 18 | ...
```

*   Node `10` is at index `0`.
    *   Left child `5` is at `2*0 + 1 = 1`.
    *   Right child `15` is at `2*0 + 2 = 2`.
*   Node `5` is at index `1`.
    *   Left child `2` is at `2*1 + 1 = 3`.
    *   Right child `7` is at `2*1 + 2 = 4`.
*   Node `15` is at index `2`.
    *   Left child is absent (represented by a placeholder like `null` or `-`).
    *   Right child `18` is at `2*2 + 2 = 6`.

**Important Point:** For array-based representation, the size of the array must be at least the number of nodes in the tree plus one (if starting from index 1) or the index of the last node + 1 (if starting from index 0), plus any necessary placeholders for empty slots.

#### 3.2 Linked List-Based Representation

This method uses nodes that contain data and pointers (or references) to their left and right children. This is the most common and flexible way to represent binary trees.

**Node Structure:**

```
struct TreeNode {
    int data;
    TreeNode* left;  // Pointer to the left child
    TreeNode* right; // Pointer to the right child
};
```

**Considerations:**

*   **Pros:**
    *   **Memory efficient** for sparse or non-complete trees, as only the necessary nodes and pointers are allocated.
    *   **Flexible** for insertions and deletions, as nodes can be added or removed without needing to resize a contiguous block of memory.
*   **Cons:**
    *   Accessing children or parents requires traversing pointers, which can be slightly slower than direct array indexing.
    *   Requires explicit management of memory (allocation and deallocation).

**Example:** Representing the same binary tree using linked lists:

```
        [10]
       /    \
     [5]    [15]
    /   \      \
  [2]   [7]    [18]
```

Here, each `[]` represents a node. The arrows indicate the `left` and `right` pointers.

**Important Point:** Each node dynamically allocates memory for itself and its children, making it suitable for trees of any shape and size.

---

### 4. Binary Tree Traversal

Traversal is the process of visiting each node in a tree exactly once in a specific order. There are three main ways to traverse a binary tree:

#### 4.1 In-order Traversal (Left, Root, Right)

Visit the left subtree, then the root node, then the right subtree.

**Algorithm:**

1.  Recursively traverse the left subtree.
2.  Visit (process) the root node.
3.  Recursively traverse the right subtree.

**Example Tree:**

```
      10
     /  \
    5    15
   / \     \
  2   7     18
```

**In-order Traversal Output:** `2, 5, 7, 10, 15, 18`

**Application:** In-order traversal of a Binary Search Tree (BST) yields the elements in sorted order.

#### 4.2 Pre-order Traversal (Root, Left, Right)

Visit the root node, then the left subtree, then the right subtree.

**Algorithm:**

1.  Visit (process) the root node.
2.  Recursively traverse the left subtree.
3.  Recursively traverse the right subtree.

**Example Tree:**

```
      10
     /  \
    5    15
   / \     \
  2   7     18
```

**Pre-order Traversal Output:** `10, 5, 2, 7, 15, 18`

**Application:** Useful for copying a tree or creating a prefix expression from an expression tree.

#### 4.3 Post-order Traversal (Left, Right, Root)

Visit the left subtree, then the right subtree, then the root node.

**Algorithm:**

1.  Recursively traverse the left subtree.
2.  Recursively traverse the right subtree.
3.  Visit (process) the root node.

**Example Tree:**

```
      10
     /  \
    5    15
   / \     \
  2   7     18
```

**Post-order Traversal Output:** `2, 7, 5, 18, 15, 10`

**Application:** Useful for deleting a tree or evaluating an expression tree.

---

### 5. Applications of Binary Trees

Binary trees have a wide range of applications in computer science:

*   **Binary Search Trees (BSTs):** For efficient searching, insertion, and deletion of data.
*   **Expression Trees:** To represent mathematical expressions, allowing for evaluation and manipulation.
*   **Huffman Coding:** Used in data compression algorithms.
*   **Heap Data Structure:** A specialized binary tree used for priority queues.
*   **Syntax Trees:** Used by compilers to represent the grammatical structure of code.
*   **Decision Trees:** Used in machine learning for classification and regression.
*   **File System Navigation:** Hierarchical structure of directories and files can be represented by trees.

---

### 6. Practice Questions & Exercises

**Question 1:**

Consider the following binary tree:

```
      A
     / \
    B   C
   /   / \
  D   E   F
```

*   What is the root of the tree?
*   Which nodes are leaf nodes?
*   Which node is the parent of 'E'?
*   What is the left child of 'C'?
*   What is the height of the tree?
*   Perform an in-order traversal.
*   Perform a pre-order traversal.
*   Perform a post-order traversal.

**Answer 1:**

*   **Root:** A
*   **Leaf Nodes:** D, B, E, F (assuming B has no children in this diagram, if it does, update accordingly). Based on the diagram provided, B is internal as it has a left child D. The leaf nodes are D, E, and F.
*   **Parent of 'E':** C
*   **Left child of 'C':** E
*   **Height of the tree:** 2 (path from A to D, E, or F)

*   **In-order Traversal:** D, B, A, E, C, F
*   **Pre-order Traversal:** A, B, D, C, E, F
*   **Post-order Traversal:** D, B, E, F, C, A

**Question 2:**

How would you represent the following binary tree using an array? Assume the root is at index 0.

```
      20
     /  \
    10   30
   / \
  5   15
```

**Answer 2:**

```
Index: | 0  | 1  | 2  | 3  | 4  | 5  | ...
Value: | 20 | 10 | 30 | 5  | 15 | -  | ...
```

*   Node `20` at index `0`. Left child `10` at `2*0+1=1`. Right child `30` at `2*0+2=2`.
*   Node `10` at index `1`. Left child `5` at `2*1+1=3`. Right child `15` at `2*1+2=4`.
*   Node `30` at index `2`. No children.

**Question 3:**

Explain the difference between a complete binary tree and a perfect binary tree. Provide an example of each.

**Answer 3:**

*   **Perfect Binary Tree:** All internal nodes have two children, and all leaf nodes are at the same level. Every level is completely filled.
    *   **Example:** A tree with 3 levels where all nodes have 2 children.
*   **Complete Binary Tree:** Every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible.
    *   **Example:** The array-based representation example in Section 3.1 (with nodes 10, 5, 15, 2, 7, 18) is a complete binary tree.

**Question 4:**

What is the primary advantage of using a linked list-based representation over an array-based representation for binary trees in terms of memory usage?

**Answer 4:**

The primary advantage is **memory efficiency for sparse or non-complete trees**. Linked list-based representations only allocate memory for existing nodes and their pointers, avoiding the significant wasted space that can occur with array-based representations when the tree is not dense or complete.

---

### 7. Important Points to Remember

*   **Binary Tree Definition:** Each node has at most two children (left and right).
*   **Array Representation:** Relies on arithmetic for navigation. Efficient for complete/perfect trees, but can waste space for others.
*   **Linked List Representation:** Uses pointers/references. More memory-efficient and flexible for trees of varying shapes.
*   **Traversal Orders:**
    *   **In-order:** Left, Root, Right (yields sorted data for BSTs).
    *   **Pre-order:** Root, Left, Right (useful for copying).
    *   **Post-order:** Left, Right, Root (useful for deletion).
*   **Tree Types:** Understand the properties of Full, Complete, Perfect, and Skewed trees as they influence representation and performance.
*   **Applications:** Be aware of common uses like BSTs, expression trees, and heaps.

---
