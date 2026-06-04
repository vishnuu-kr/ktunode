---
title: "Trees :- Representation Of Trees"
subject: "DATA STRUCTURES"
module: "Module 3: Trees and Graphs"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8be9f"
status: "completed"
scrapedAt: "2026-05-20T16:51:59.075Z"
---
# Data Structures: Module 3 - Trees and Graphs

## Topic: Trees - Representation of Trees

---

### Learning Outcomes:

*   Understand the concept of a tree as a hierarchical data structure.
*   Identify different types of trees (general, binary, binary search trees, AVL trees, B-trees, etc.).
*   Learn various methods for representing trees in computer memory.
*   Analyze the advantages and disadvantages of different tree representation techniques.
*   Implement tree traversals (inorder, preorder, postorder, level order).

---

### 1. Introduction to Trees

**1.1 What is a Tree?**

*   A tree is a **non-linear, hierarchical data structure**.
*   It consists of **nodes** (or vertices) connected by **edges**.
*   Each node represents an item of data.
*   The hierarchy is established by parent-child relationships between nodes.

**1.2 Key Terminology**

*   **Root:** The topmost node in the tree. It has no parent.
*   **Parent:** A node that has one or more child nodes.
*   **Child:** A node that is directly connected to another node (its parent) and is below it in the hierarchy.
*   **Leaf Node (or External Node):** A node that has no children.
*   **Internal Node:** A node that has at least one child.
*   **Edge:** A connection between two nodes, representing a relationship (usually parent-child).
*   **Path:** A sequence of connected nodes from one node to another.
*   **Depth of a Node:** The number of edges from the root to that node. The root has a depth of 0.
*   **Height of a Node:** The number of edges on the longest path from that node down to a leaf. A leaf node has a height of 0.
*   **Height of a Tree:** The height of the root node.
*   **Degree of a Node:** The number of children a node has.
*   **Degree of a Tree:** The maximum degree of any node in the tree.
*   **Subtree:** A tree formed by a node and all of its descendants.
*   **Siblings:** Nodes that share the same parent.

**1.3 Properties of Trees**

*   A tree with $n$ nodes has exactly $n-1$ edges.
*   There is exactly one path between any two nodes in a tree.
*   A tree is a connected graph.
*   A tree is acyclic (contains no cycles).

---

### 2. Types of Trees

While this module focuses on representation, understanding common tree types is crucial.

*   **General Tree:** A tree where a node can have any number of children.
*   **Binary Tree:** A special type of tree where each node has at most two children. These are typically referred to as the "left child" and the "right child".
    *   **Full Binary Tree:** Every node has either 0 or 2 children.
    *   **Complete Binary Tree:** All levels are completely filled except possibly the last level, which is filled from left to right.
    *   **Perfect Binary Tree:** All internal nodes have two children, and all leaf nodes are at the same level.
*   **Binary Search Tree (BST):** A binary tree with the property that for any node:
    *   All nodes in its left subtree have values less than the node's value.
    *   All nodes in its right subtree have values greater than the node's value.
*   **AVL Tree:** A self-balancing BST where the heights of the two child subtrees of any node differ by at most one.
*   **B-Tree:** A self-balancing tree data structure that maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time. Commonly used in databases and file systems.
*   **Heap:** A specialized tree-based data structure that satisfies the heap property: In a max-heap, the parent node is always greater than or equal to its children; in a min-heap, the parent node is always less than or equal to its children.

---

### 3. Representation of Trees

Trees can be represented in computer memory using various techniques, each with its own advantages and disadvantages. The choice of representation depends on the specific operations to be performed on the tree.

**3.1. Array Representation (Implicit Representation)**

*   **Concept:** This method is primarily used for **complete binary trees** or nearly complete binary trees. The tree structure is implicitly defined by the array indices.
*   **How it works:**
    *   The root node is stored at index 0 (or sometimes index 1 for simpler calculations).
    *   For a node at index `i`:
        *   Its **left child** is at index `2*i + 1`.
        *   Its **right child** is at index `2*i + 2`.
        *   Its **parent** is at index `floor((i-1)/2)`.
*   **Advantages:**
    *   **Space Efficient for Complete Binary Trees:** No extra pointers are needed to store relationships.
    *   **Fast Access:** Direct calculation of child/parent indices allows for quick access.
*   **Disadvantages:**
    *   **Wasted Space for Non-Complete Trees:** If the tree is sparse or not complete, many array elements will remain empty, leading to significant memory wastage.
    *   **Inefficient Insertions/Deletions:** Inserting or deleting nodes might require shifting large portions of the array.
    *   **Limited to Binary Trees:** Not suitable for general trees where nodes can have more than two children.
*   **Example:**
    Consider the following complete binary tree:

    ```
          A (0)
         /   \
        B (1) C (2)
       / \   /
      D(3) E(4) F(5)
    ```

    Array representation (starting at index 0): `[A, B, C, D, E, F, null, ...]`

    *   Node `B` is at index 1. Its left child `D` is at `2*1 + 1 = 3`. Its right child `E` is at `2*1 + 2 = 4`.
    *   Node `C` is at index 2. Its left child `F` is at `2*2 + 1 = 5`. Its right child (null) is at `2*2 + 2 = 6`.

**3.2. Pointer Representation (Explicit Representation)**

*   **Concept:** This is the most common and flexible way to represent trees. Each node is stored as a structure or object that contains:
    *   The data for the node.
    *   Pointers (or references) to its children.
*   **Common Structures:**

    *   **For Binary Trees:**
        ```c++
        struct TreeNode {
            DataType data;
            TreeNode* left;  // Pointer to the left child
            TreeNode* right; // Pointer to the right child
        };
        ```
        or
        ```python
        class TreeNode:
            def __init__(self, data):
                self.data = data
                self.left = None
                self.right = None
        ```

    *   **For General Trees (where a node can have multiple children):**
        *   **Option 1: List/Array of Children Pointers:**
            ```c++
            struct GeneralTreeNode {
                DataType data;
                std::vector<GeneralTreeNode*> children; // Or a dynamic array
            };
            ```
            or
            ```python
            class GeneralTreeNode:
                def __init__(self, data):
                    self.data = data
                    self.children = [] # List to store child nodes
            ```
            *   **Advantages:** Simple, direct.
            *   **Disadvantages:** Fixed size for the array might be inefficient; vector/list adds some overhead.

        *   **Option 2: First Child / Next Sibling Representation:** This is a clever way to represent general trees using only two pointers per node, making it resemble a binary tree structure.
            *   Each node has two pointers:
                *   `firstChild`: Points to the first child of the node.
                *   `nextSibling`: Points to the next sibling of the node (i.e., the next child of the same parent).
            *   This effectively turns a general tree into a linked list of children for each parent, where the first child is the "left child" conceptually.

            ```c++
            struct ForestTreeNode {
                DataType data;
                ForestTreeNode* firstChild;  // Pointer to the first child
                ForestTreeNode* nextSibling; // Pointer to the next sibling
            };
            ```
            or
            ```python
            class ForestTreeNode:
                def __init__(self, data):
                    self.data = data
                    self.firstChild = None
                    self.nextSibling = None
            ```
            *   **Example of First Child / Next Sibling:**
                Consider a general tree:
                ```
                      A
                     /|\
                    B C D
                   / \   \
                  E   F   G
                ```
                Represented using first child/next sibling:
                *   `A`: `firstChild` -> `B`, `nextSibling` -> `null`
                *   `B`: `firstChild` -> `E`, `nextSibling` -> `C`
                *   `C`: `firstChild` -> `null`, `nextSibling` -> `D`
                *   `D`: `firstChild` -> `G`, `nextSibling` -> `null`
                *   `E`: `firstChild` -> `null`, `nextSibling` -> `F`
                *   `F`: `firstChild` -> `null`, `nextSibling` -> `null`
                *   `G`: `firstChild` -> `null`, `nextSibling` -> `null`

*   **Advantages of Pointer Representation:**
    *   **Flexible:** Can represent any type of tree (binary, general) and any structure (sparse, dense, unbalanced).
    *   **Efficient Insertions/Deletions:** Adding or removing nodes typically involves updating a few pointers, which is efficient.
    *   **Memory Efficient for Sparse Trees:** Only allocates memory for existing nodes.
*   **Disadvantages of Pointer Representation:**
    *   **Overhead:** Requires extra memory for pointers in each node.
    *   **Complexity:** Managing pointers can be more complex and prone to errors (e.g., memory leaks, dangling pointers).

---

### 4. Tree Traversals

Tree traversals are algorithms for visiting (processing) each node in a tree exactly once. The order in which nodes are visited defines the type of traversal. These are fundamental operations for many tree algorithms.

**4.1 Binary Tree Traversals**

For a node `N`, its left subtree `L`, and its right subtree `R`, the traversals are defined recursively:

*   **Inorder Traversal (Left, Root, Right):**
    1.  Traverse the left subtree.
    2.  Visit the root node.
    3.  Traverse the right subtree.
    *   **Use Case:** Useful for Binary Search Trees (BSTs) as it visits nodes in ascending order of their values.
    *   **Example:** For the BST:
        ```
              4
             / \
            2   5
           / \
          1   3
        ```
        Inorder: `1, 2, 3, 4, 5`

*   **Preorder Traversal (Root, Left, Right):**
    1.  Visit the root node.
    2.  Traverse the left subtree.
    3.  Traverse the right subtree.
    *   **Use Case:** Useful for creating a copy of the tree or for expression trees (prefix notation).
    *   **Example:** For the BST above:
        Preorder: `4, 2, 1, 3, 5`

*   **Postorder Traversal (Left, Right, Root):**
    1.  Traverse the left subtree.
    2.  Traverse the right subtree.
    3.  Visit the root node.
    *   **Use Case:** Useful for deleting a tree (delete children before parent) or for expression trees (postfix notation).
    *   **Example:** For the BST above:
        Postorder: `1, 3, 2, 5, 4`

**4.2 Level Order Traversal (Breadth-First Traversal)**

*   **Concept:** Visits nodes level by level, from top to bottom, and from left to right within each level.
*   **How it works:** Uses a queue data structure.
    1.  Enqueue the root node.
    2.  While the queue is not empty:
        a.  Dequeue a node.
        b.  Visit the dequeued node.
        c.  Enqueue its left child (if it exists).
        d.  Enqueue its right child (if it exists).
*   **Use Case:** Useful for finding the shortest path in an unweighted graph, or for checking if a tree is complete.
*   **Example:** For the BST above:
    Level Order: `4, 2, 5, 1, 3`

**4.3 General Tree Traversals**

General trees can also be traversed. The common methods are extensions of binary tree traversals.

*   **Preorder (Root, then children in order):** Visit the node, then recursively visit its children from left to right.
*   **Postorder (Children in order, then Root):** Recursively visit children from left to right, then visit the node.
*   **Level Order (Same as Binary Tree):** Uses a queue to visit nodes level by level.

---

### 5. Practice Questions and Exercises

**Question 1:**
Consider a complete binary tree represented using an array, where the root is at index 1. If a node is at index `i`, what are the indices of its left child, right child, and parent?

**Answer 1:**
*   Left Child: `2*i`
*   Right Child: `2*i + 1`
*   Parent: `floor(i/2)`

**Question 2:**
Which representation is generally preferred for trees that are sparse or non-binary, and why?

**Answer 2:**
The **pointer representation** is generally preferred for sparse or non-binary trees. This is because the array representation would lead to significant wasted space for sparse trees, and it's not directly applicable to general trees where nodes can have more than two children. Pointer representation offers flexibility and efficient memory usage by only allocating space for existing nodes and their connections.

**Question 3:**
Given the following binary tree:

```
      10
     /  \
    5    15
   / \     \
  2   7     18
```

What is the output of the following traversals?
a) Inorder Traversal
b) Preorder Traversal
c) Postorder Traversal
d) Level Order Traversal

**Answer 3:**
a) Inorder Traversal: `2, 5, 7, 10, 15, 18`
b) Preorder Traversal: `10, 5, 2, 7, 15, 18`
c) Postorder Traversal: `2, 7, 5, 18, 15, 10`
d) Level Order Traversal: `10, 5, 15, 2, 7, 18`

**Question 4:**
Explain the "First Child / Next Sibling" representation for general trees. Draw a small example of a general tree and show its representation using this method.

**Answer 4:**
The "First Child / Next Sibling" representation is a method to represent general trees using a structure similar to binary trees, employing only two pointers per node.
*   `firstChild`: A pointer to the first child of a node.
*   `nextSibling`: A pointer to the next sibling of a node (i.e., the next child of the same parent).

This effectively turns the children of a node into a linked list, where the `firstChild` is the head of the list, and `nextSibling` links the subsequent children.

**Example:**
General Tree:
```
     R
    /|\
   A B C
  /|   /
 D E  F
```

First Child / Next Sibling Representation:
*   `R`: `firstChild` -> `A`, `nextSibling` -> `null`
*   `A`: `firstChild` -> `D`, `nextSibling` -> `B`
*   `B`: `firstChild` -> `null`, `nextSibling` -> `C`
*   `C`: `firstChild` -> `F`, `nextSibling` -> `null`
*   `D`: `firstChild` -> `null`, `nextSibling` -> `E`
*   `E`: `firstChild` -> `null`, `nextSibling` -> `null`
*   `F`: `firstChild` -> `null`, `nextSibling` -> `null`

---

### 6. Important Points to Remember

*   **Trees are hierarchical:** This is their defining characteristic.
*   **Root is unique:** There's always one starting point.
*   **No cycles:** A tree is an acyclic graph.
*   **N nodes = N-1 edges:** A fundamental property.
*   **Array representation:** Best for **complete binary trees** due to its space and access efficiency. Wastes space for sparse/non-complete trees.
*   **Pointer representation:** Most **flexible and general**. Preferred for sparse, non-binary, or dynamically changing tree structures.
*   **Traversals (Inorder, Preorder, Postorder, Level Order):** Essential for processing tree nodes. Each has specific use cases.
    *   Inorder for BSTs (sorted order).
    *   Preorder for copying or prefix notation.
    *   Postorder for deletion or postfix notation.
    *   Level Order for level-by-level processing.
*   **First Child / Next Sibling:** A space-efficient way to represent general trees using the binary tree structure.

---
This concludes the notes on Tree Representation. The next topic might delve deeper into specific tree types like Binary Search Trees or self-balancing trees.
