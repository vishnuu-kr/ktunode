---
title: "Binary Trees-Tree Operations"
subject: "DATA STRUCTURES"
module: "Module 3: Trees and Graphs"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fea13"
status: "completed"
scrapedAt: "2026-05-23T17:55:09.718Z"
---
# Data Structures: Module 3 - Trees and Graphs

## Topic: Binary Trees - Tree Operations

This module focuses on **Binary Trees**, a fundamental non-linear data structure. We will explore the core operations performed on binary trees, their implementation, and their relevance in solving various computational problems. This topic directly contributes to **CO3: Make use of nonlinear data structures like trees and graphs to design algorithms for various applications.**

### 1. Introduction to Binary Trees

**Definition:**
A **Binary Tree** is a tree data structure in which each node has at most two children, referred to as the **left child** and the **right child**.

**Key Concepts:**

*   **Root:** The topmost node of the tree. A binary tree has exactly one root (or is empty).
*   **Node:** An element in the tree, typically containing data and pointers to its children.
*   **Child:** A node that is directly connected to another node via an edge.
*   **Parent:** A node that has one or more children.
*   **Leaf Node (External Node):** A node with no children.
*   **Internal Node:** A node that has at least one child.
*   **Edge:** A connection between two nodes.
*   **Depth of a Node:** The number of edges from the root to the node. The root has depth 0.
*   **Height of a Node:** The number of edges on the longest path from the node down to a leaf. A leaf node has height 0.
*   **Height of a Tree:** The height of its root node. An empty tree has height -1.
*   **Degree of a Node:** The number of children a node has. In a binary tree, the degree of a node is 0, 1, or 2.
*   **Siblings:** Nodes that share the same parent.
*   **Binary Tree Properties:**
    *   The number of nodes with degree 2 is one less than the number of nodes with degree 0 (leaves).
    *   The total number of nodes in a binary tree is one more than the number of edges.

**Types of Binary Trees:**

*   **Full Binary Tree:** A tree where every node has either 0 or 2 children.
*   **Complete Binary Tree:** A binary tree in which all levels are completely filled except possibly the last level, and the last level has all nodes as far left as possible.
*   **Perfect Binary Tree:** A binary tree in which all internal nodes have two children and all leaves are at the same depth.
*   **Balanced Binary Tree:** A binary tree where the heights of the two child subtrees of any node differ by at most one. (e.g., AVL Trees, Red-Black Trees - these are advanced topics, but important to know they exist for maintaining efficiency).

**Referencing Textbooks:**

*   **Horowitz, Sahni, Anderson-Freed (2/e):** Chapter 7 provides a detailed introduction to trees, including binary trees, their properties, and basic definitions.
*   **Samanta (2/e):** Chapter 6 covers tree structures, with an initial focus on binary trees, their representation, and terminology.

### 2. Representation of Binary Trees

Binary trees can be represented using:

*   **Linked Representation:**
    *   Each node is a structure or object containing:
        *   Data
        *   A pointer to the left child (e.g., `left`)
        *   A pointer to the right child (e.g., `right`)
    *   An empty tree is represented by a `NULL` pointer.
    *   **Advantages:** Flexible, allows dynamic growth, efficient insertion and deletion in certain scenarios.
    *   **Disadvantages:** Requires extra space for pointers, potential for memory fragmentation.

    **Example (C-like pseudocode):**

    ```c
    struct TreeNode {
        int data;
        struct TreeNode *left;
        struct TreeNode *right;
    };
    ```

*   **Array Representation:**
    *   Nodes are stored in an array.
    *   If a node is at index `i`:
        *   Its left child is at index `2*i + 1`.
        *   Its right child is at index `2*i + 2`.
        *   Its parent is at index `(i-1) / 2` (integer division).
    *   **Advantages:** Simple to implement, efficient access to children and parent if the tree is dense.
    *   **Disadvantages:** Can waste significant space for sparse trees (trees with many empty nodes), difficulty in insertion/deletion as it might require shifting elements.
    *   **Best suited for:** Complete Binary Trees.

    **Example:**
    Consider a binary tree:
    ```
         A (0)
        / \
       B(1) C(2)
      / \
     D(3) E(4)
    ```
    Array representation: `[A, B, C, D, E, NULL, NULL, ...]`
    Node 'A' is at index 0. Left child 'B' is at `2*0 + 1 = 1`. Right child 'C' is at `2*0 + 2 = 2`.
    Node 'B' is at index 1. Left child 'D' is at `2*1 + 1 = 3`. Right child 'E' is at `2*1 + 2 = 4`.

**Referencing Textbooks:**

*   **Horowitz, Sahni, Anderson-Freed (2/e):** Section 7.1 discusses array representation, and Section 7.2 covers linked representation.
*   **Samanta (2/e):** Section 6.1 details the linked representation and Section 6.2 covers array representation.
*   **Gilberg, Forouzan (2/e):** Chapter 11 on Trees, specifically sections on node structure and basic tree operations, covering linked representations.

### 3. Binary Tree Traversal

Traversal refers to visiting each node in the tree exactly once. There are three common depth-first traversal methods, named based on the order in which the root, left, and right subtrees are visited.

*   **In-order Traversal (Left, Root, Right):**
    *   **Algorithm:**
        1.  Traverse the left subtree.
        2.  Visit the root node.
        3.  Traverse the right subtree.
    *   **Output:** For a Binary Search Tree (BST), in-order traversal visits nodes in ascending order of their keys.
    *   **Recursive Implementation:**
        ```c
        void inorderTraversal(struct TreeNode* node) {
            if (node == NULL) return;
            inorderTraversal(node->left); // Traverse left
            printf("%d ", node->data);   // Visit root
            inorderTraversal(node->right); // Traverse right
        }
        ```

*   **Pre-order Traversal (Root, Left, Right):**
    *   **Algorithm:**
        1.  Visit the root node.
        2.  Traverse the left subtree.
        3.  Traverse the right subtree.
    *   **Applications:** Copying a tree, creating an expression tree prefix notation.
    *   **Recursive Implementation:**
        ```c
        void preorderTraversal(struct TreeNode* node) {
            if (node == NULL) return;
            printf("%d ", node->data);   // Visit root
            preorderTraversal(node->left); // Traverse left
            preorderTraversal(node->right); // Traverse right
        }
        ```

*   **Post-order Traversal (Left, Right, Root):**
    *   **Algorithm:**
        1.  Traverse the left subtree.
        2.  Traverse the right subtree.
        3.  Visit the root node.
    *   **Applications:** Deleting a tree (freeing memory of children before parent), creating an expression tree postfix notation.
    *   **Recursive Implementation:**
        ```c
        void postorderTraversal(struct TreeNode* node) {
            if (node == NULL) return;
            postorderTraversal(node->left); // Traverse left
            postorderTraversal(node->right); // Traverse right
            printf("%d ", node->data);   // Visit root
        }
        ```

*   **Level-order Traversal (Breadth-First Traversal):**
    *   **Algorithm:**
        1.  Visit nodes level by level, from left to right.
        2.  Typically implemented using a Queue.
    *   **Steps:**
        1.  Enqueue the root node.
        2.  While the queue is not empty:
            *   Dequeue a node.
            *   Visit the dequeued node.
            *   If the dequeued node has a left child, enqueue it.
            *   If the dequeued node has a right child, enqueue it.
    *   **Applications:** Finding the shortest path in an unweighted graph (if applied to a tree viewed as a graph), level-by-level processing.
    *   **Referencing Textbooks:**
        *   **Horowitz, Sahni, Anderson-Freed (2/e):** Section 7.2.4 discusses traversals, including recursive and iterative (stack-based for DFS) approaches.
        *   **Samanta (2/e):** Section 6.3 covers tree traversals.
        *   **Gilberg, Forouzan (2/e):** Chapter 11, sections on tree traversals.
        *   **Lipschuts (2/e):** Chapter 5 provides detailed explanations and algorithms for traversals.

**Important Point to Remember:**
The order of visiting nodes during traversal is crucial for specific applications, especially when reconstructing trees or processing them in a particular sequence.

### 4. Tree Operations

These are the fundamental actions performed on binary trees.

*   **Insertion:**
    *   Adding a new node to the tree.
    *   The position of insertion depends on the type of binary tree. For a general binary tree, it might be at the first available position (e.g., in a complete binary tree represented by an array). For a Binary Search Tree, it follows the BST property.
    *   **Linked Representation:** Involves creating a new node and updating parent pointers.
    *   **Array Representation:** Involves finding the correct index and placing the new node, potentially resizing the array if full.

*   **Deletion:**
    *   Removing a node from the tree.
    *   The complexity of deletion depends on the number of children the node to be deleted has:
        *   **Node is a leaf:** Simply remove it by setting its parent's corresponding child pointer to NULL.
        *   **Node has one child:** Replace the node with its child. The child takes the parent's place.
        *   **Node has two children:** This is the most complex case.
            *   Find the **in-order successor** (the smallest node in the right subtree) or the **in-order predecessor** (the largest node in the left subtree).
            *   Replace the data of the node to be deleted with the data of its in-order successor/predecessor.
            *   Delete the in-order successor/predecessor (which will have at most one child, making it easier to delete).
    *   **Referencing Textbooks:**
        *   **Horowitz, Sahni, Anderson-Freed (2/e):** Section 7.3 covers insertion and deletion for binary trees and BSTs.
        *   **Samanta (2/e):** Section 6.4 on insertion and deletion.
        *   **Aho, Hopcroft, Ullman (1983):** While older, this foundational text covers tree operations in depth.
        *   **Gilberg, Forouzan (2/e):** Chapter 11, sections on insertion and deletion.

*   **Searching:**
    *   Finding a node with a specific value.
    *   For a general binary tree, this typically involves a traversal (e.g., pre-order, in-order, post-order, or level-order) to check each node. The time complexity is O(n) in the worst case.
    *   For a Binary Search Tree, searching is much more efficient (O(log n) on average for balanced trees, O(n) in worst case for skewed trees) by comparing the target value with the current node's value and deciding whether to go left or right.
    *   **Recursive Search (BST):**
        ```c
        struct TreeNode* search(struct TreeNode* root, int key) {
            if (root == NULL || root->data == key) {
                return root; // Found or empty tree
            }
            if (key < root->data) {
                return search(root->left, key); // Search left
            } else {
                return search(root->right, key); // Search right
            }
        }
        ```

*   **Finding Minimum/Maximum:**
    *   In a general binary tree, requires traversing the entire tree.
    *   In a Binary Search Tree, the minimum element is the leftmost node, and the maximum element is the rightmost node. This can be found by repeatedly going left (for minimum) or right (for maximum) from the root.
    *   **Finding Minimum (BST):**
        ```c
        struct TreeNode* findMin(struct TreeNode* node) {
            if (node == NULL) return NULL;
            while (node->left != NULL) {
                node = node->left;
            }
            return node;
        }
        ```

*   **Copying a Tree:**
    *   Creating an exact replica of an existing tree.
    *   Often done recursively, typically using pre-order traversal logic to construct the new tree.
    *   **Recursive Copy:**
        ```c
        struct TreeNode* copyTree(struct TreeNode* original) {
            if (original == NULL) return NULL;
            struct TreeNode* newNode = (struct TreeNode*)malloc(sizeof(struct TreeNode));
            newNode->data = original->data;
            newNode->left = copyTree(original->left);
            newNode->right = copyTree(original->right);
            return newNode;
        }
        ```

*   **Counting Nodes:**
    *   **Total Nodes:** Sum of nodes in the left subtree, right subtree, plus the root itself.
    *   **Leaf Nodes:** Count nodes where both left and right children are NULL.
    *   **Internal Nodes:** Total nodes minus leaf nodes.
    *   **Recursive Count:**
        ```c
        int countNodes(struct TreeNode* node) {
            if (node == NULL) return 0;
            return 1 + countNodes(node->left) + countNodes(node->right);
        }
        ```

*   **Calculating Height:**
    *   The height of an empty tree is -1.
    *   The height of a non-empty tree is 1 + the maximum of the heights of its left and right subtrees.
    *   **Recursive Height:**
        ```c
        int height(struct TreeNode* node) {
            if (node == NULL) return -1; // Height of empty tree
            int leftHeight = height(node->left);
            int rightHeight = height(node->right);
            return 1 + (leftHeight > rightHeight ? leftHeight : rightHeight);
        }
        ```

**Referencing Textbooks:**

*   **Horowitz, Sahni, Anderson-Freed (2/e):** Chapter 7 covers various operations in detail.
*   **Samanta (2/e):** Chapter 6 details operations like insertion, deletion, searching, and counting.
*   **Gilberg, Forouzan (2/e):** Chapter 11 covers these operations with C implementations.
*   **Brass (2/e):** Advanced Data Structures covers efficient implementations and analysis of tree operations, particularly for balanced trees.
*   **Lipschuts (2/e):** Chapter 5 is dedicated to binary trees and their operations, providing both conceptual understanding and algorithmic details.

### 5. Practice Questions and Exercises

**Question 1 (Conceptual):**
What is the main difference between a full binary tree and a complete binary tree? (K2)
*   **Answer:** A full binary tree requires every node to have either 0 or 2 children. A complete binary tree requires all levels to be filled except possibly the last, with nodes on the last level filled from left to right.

**Question 2 (Traversal):**
Given the following binary tree, what is the output of its in-order, pre-order, and post-order traversals? (K3)

```
      10
     /  \
    5    15
   / \     \
  2   7     18
```

*   **Answer:**
    *   **In-order:** 2 5 7 10 15 18
    *   **Pre-order:** 10 5 2 7 15 18
    *   **Post-order:** 2 7 5 18 15 10

**Question 3 (Operation - Deletion):**
Consider a Binary Search Tree with the following nodes: 50, 30, 70, 20, 40, 60, 80. If you need to delete the node with value 30, what is the in-order successor and what would the tree look like after deletion? (K3)
*   **Answer:**
    *   The node to be deleted is 30. Its right child is 40.
    *   The in-order successor of 30 is the smallest node in its right subtree, which is 40.
    *   To delete 30: Replace 30 with 40. The node 40 has no children and was the right child of 30. So, 30 is replaced by 40. 40 is then removed from its original position.
    *   The tree structure:
        ```
              50
             /  \
            40   70
           /    /  \
          20   60   80
        ```
        *(Note: The original 40 node is now in 30's place, and the original 40 node is removed. Since 40 had no children, its removal is straightforward.)*

**Question 4 (Operation - Height):**
Write a recursive function in C-like pseudocode to calculate the height of a binary tree. (K3)
*   **Answer:** (See Section 4 - Calculating Height for the code).

**Question 5 (Representation):**
When would you prefer an array representation of a binary tree over a linked representation, and why? (K2)
*   **Answer:** You would prefer an array representation for **complete binary trees** because they are space-efficient. Since all levels except possibly the last are full, and nodes on the last level are as far left as possible, the array structure maps efficiently without significant wasted space. Linked representations are more flexible for arbitrary binary trees, especially when insertions and deletions are frequent.

**Question 6 (Tree Properties):**
A binary tree has 10 nodes. If 4 of them are leaf nodes, how many nodes have two children? (K3)
*   **Answer:** Let N be the total number of nodes. Let L be the number of leaf nodes (degree 0). Let T be the number of nodes with two children.
    The property states: Number of nodes with degree 2 (T) = Number of nodes with degree 0 (L) - 1.
    Here, N = 10, L = 4.
    So, T = 4 - 1 = 3.
    There are 3 nodes with two children.

### 6. Summary of Key Points

*   **Binary Tree Definition:** Each node has at most two children (left and right).
*   **Representations:** Linked (flexible, good for dynamic trees) and Array (efficient for complete trees, fixed size).
*   **Traversals:** In-order, Pre-order, Post-order (depth-first) and Level-order (breadth-first) are essential for visiting nodes.
*   **Operations:** Insertion, Deletion (especially the 2-child case), Searching, Finding Min/Max, Copying, Counting Nodes, and calculating Height are fundamental.
*   **BST Property:** The left child's key is less than the parent's key, and the right child's key is greater. This enables efficient searching.
*   **Time Complexity:** Operations on balanced binary trees (like BSTs) are typically O(log n), while on unbalanced trees, they can degrade to O(n).

This module provides the foundational understanding of binary trees, which are building blocks for more complex tree structures and algorithms used in various applications, aligning with **CO3**. Understanding traversals is critical for processing data stored in trees, and the efficiency of operations often depends on the tree's structure and whether it's balanced.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
