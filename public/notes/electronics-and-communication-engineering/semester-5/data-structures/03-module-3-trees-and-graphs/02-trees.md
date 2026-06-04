---
title: "Trees"
subject: "DATA STRUCTURES"
module: "Module 3: Trees and Graphs"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fea12"
status: "completed"
scrapedAt: "2026-05-23T17:55:08.994Z"
---
# Data Structures: Module 3 - Trees

This module introduces **Trees**, a fundamental non-linear data structure that plays a crucial role in various computer science applications. We will explore their definition, properties, different types, and common operations.

---

## 1. Introduction to Trees

Trees are hierarchical data structures composed of nodes connected by edges. They are widely used for representing hierarchical relationships, organizing data for efficient searching, and solving various algorithmic problems.

### Key Concepts and Definitions

*   **Node:** A basic unit in a tree, typically containing data and pointers to its children.
*   **Root:** The topmost node in the tree, the starting point of traversal. A tree has exactly one root.
*   **Edge:** A connection between two nodes.
*   **Parent Node:** A node that has one or more child nodes.
*   **Child Node:** A node directly connected to another node (its parent) that is higher up in the tree.
*   **Sibling Node:** Nodes that share the same parent.
*   **Leaf Node (Terminal Node):** A node that has no children.
*   **Internal Node:** A node that has at least one child.
*   **Height of a Node:** The number of edges on the longest path from that node to a leaf. The height of a leaf node is 0.
*   **Height of a Tree:** The height of its root node.
*   **Depth of a Node:** The number of edges on the path from the root to that node. The depth of the root node is 0.
*   **Degree of a Node:** The number of children a node has.
*   **Degree of a Tree:** The maximum degree of any node in the tree.
*   **Ancestor of a Node:** A node on the path from the root to the given node (excluding the node itself).
*   **Descendant of a Node:** A node that is in the subtree rooted at the given node.
*   **Subtree:** A tree formed by a node and all its descendants.

### Properties of Trees

*   A tree with $n$ nodes has exactly $n-1$ edges.
*   A tree is a connected graph.
*   A tree has no cycles.
*   Any two nodes in a tree are connected by exactly one unique simple path.
*   The removal of any edge from a tree disconnects it into two separate trees.
*   Adding an edge between any two nodes in a tree creates a cycle.

### Example (Horowitz, Sahni, & Anderson-Freed)

Consider a file system directory structure. The root directory is the root of the tree. Subdirectories and files are child nodes.

```
       Root
      / | \
   Dir1 Dir2 File1
  / | \
File2 Dir3 File3
     / \
  File4 File5
```

*   **Root:** The main directory.
*   **Dir1, Dir2, File1:** Children of Root.
*   **Dir1:** Parent of File2, Dir3, File3.
*   **File2, Dir3, File3:** Siblings.
*   **File2, File3, File4, File5, Dir2, File1:** Leaf nodes.
*   **Root, Dir1, Dir3:** Internal nodes.
*   **Height of File4:** 0.
*   **Height of Dir3:** 1.
*   **Height of Root:** 3.
*   **Depth of File5:** 3.

---

## 2. Types of Trees

### 2.1 General Trees (Ordinarily Trees)

A general tree is a tree where a node can have any number of children.

*   **Representation:**
    *   **Node Structure:** A node typically contains the data and a pointer to a list (or array) of its children.
    *   **Array Representation:** Less common due to dynamic nature of children.
    *   **Linked Representation:** Each node has a data field and a pointer to its first child. It also has a pointer to its next sibling. This is often called the **Left-Child, Right-Sibling Representation**.

### 2.2 Binary Trees

A binary tree is a special type of tree where each node can have at most two children, referred to as the **left child** and the **right child**.

*   **Key Properties:**
    *   Each node has 0, 1, or 2 children.
    *   The left child is distinct from the right child.
    *   A binary tree can be empty.
*   **Types of Binary Trees:**
    *   **Full Binary Tree:** Every node has either 0 or 2 children.
    *   **Complete Binary Tree:** All levels are completely filled except possibly the last level, which is filled from left to right.
    *   **Extended Binary Tree:** A full binary tree where each leaf node is replaced by two children (often null or dummy nodes). This is useful for representing arithmetic expressions.
    *   **Binary Search Tree (BST):** A binary tree where for each node:
        *   All nodes in its left subtree have keys less than the node's key.
        *   All nodes in its right subtree have keys greater than the node's key.
        *   Both the left and right subtrees are also binary search trees.
    *   **AVL Tree:** A self-balancing binary search tree where the height difference between the left and right subtrees of any node is at most 1.
    *   **Heap:** A complete binary tree that satisfies the heap property (either min-heap or max-heap).
        *   **Min-Heap:** The value of each node is less than or equal to the values of its children.
        *   **Max-Heap:** The value of each node is greater than or equal to the values of its children.

#### 2.2.1 Binary Tree Representation

*   **Node Structure:**
    ```c
    struct TreeNode {
        int data; // Or any data type
        struct TreeNode *leftChild;
        struct TreeNode *rightChild;
    };
    ```

#### 2.2.2 Binary Tree Traversal

Traversal algorithms visit each node in a specific order.

*   **In-order Traversal (Left-Root-Right):**
    1.  Traverse the left subtree.
    2.  Visit the root node.
    3.  Traverse the right subtree.
    *   **Property:** For a Binary Search Tree, in-order traversal visits nodes in ascending order of their keys.
    *   **Algorithm (Recursive):**
        ```c
        void inorderTraversal(struct TreeNode *root) {
            if (root != NULL) {
                inorderTraversal(root->leftChild);
                printf("%d ", root->data); // Visit root
                inorderTraversal(root->rightChild);
            }
        }
        ```

*   **Pre-order Traversal (Root-Left-Right):**
    1.  Visit the root node.
    2.  Traverse the left subtree.
    3.  Traverse the right subtree.
    *   **Use:** Useful for creating a prefix expression from an expression tree or for copying a tree.
    *   **Algorithm (Recursive):**
        ```c
        void preorderTraversal(struct TreeNode *root) {
            if (root != NULL) {
                printf("%d ", root->data); // Visit root
                preorderTraversal(root->leftChild);
                preorderTraversal(root->rightChild);
            }
        }
        ```

*   **Post-order Traversal (Left-Right-Root):**
    1.  Traverse the left subtree.
    2.  Traverse the right subtree.
    3.  Visit the root node.
    *   **Use:** Useful for deleting a tree (delete children before parent) or for creating a postfix expression from an expression tree.
    *   **Algorithm (Recursive):**
        ```c
        void postorderTraversal(struct TreeNode *root) {
            if (root != NULL) {
                postorderTraversal(root->leftChild);
                postorderTraversal(root->rightChild);
                printf("%d ", root->data); // Visit root
            }
        }
        ```

*   **Level-order Traversal (Breadth-First Traversal):**
    1.  Visit nodes level by level, from left to right.
    2.  Requires a queue data structure.
    *   **Algorithm (Iterative using Queue):**
        ```c
        void levelorderTraversal(struct TreeNode *root) {
            if (root == NULL) return;

            Queue q; // Assume Queue is implemented
            enqueue(q, root);

            while (!isQueueEmpty(q)) {
                struct TreeNode *current = dequeue(q);
                printf("%d ", current->data); // Visit node

                if (current->leftChild != NULL) {
                    enqueue(q, current->leftChild);
                }
                if (current->rightChild != NULL) {
                    enqueue(q, current->rightChild);
                }
            }
        }
        ```

#### 2.2.3 Example (Horowitz, Sahni, & Anderson-Freed, Chapter 7)

Consider the following binary tree:

```
        10
       /  \
      5    15
     / \     \
    2   7     20
```

*   **In-order:** 2 5 7 10 15 20
*   **Pre-order:** 10 5 2 7 15 20
*   **Post-order:** 2 7 5 20 15 10
*   **Level-order:** 10 5 15 2 7 20

### 2.3 Binary Search Trees (BST)

*   **Definition:** A binary tree where for each node, all keys in the left subtree are less than the node's key, and all keys in the right subtree are greater than the node's key. This property must hold recursively for all nodes.
*   **Operations:**
    *   **Insertion:** To insert a key, start at the root. If the key is less than the current node's key, go left; otherwise, go right. Repeat until an empty position is found.
    *   **Searching:** Similar to insertion. Traverse down the tree based on key comparisons.
    *   **Deletion:** More complex.
        *   **Node with no children:** Simply remove the node.
        *   **Node with one child:** Replace the node with its child.
        *   **Node with two children:**
            1.  Find the **in-order successor** (smallest node in the right subtree) or the **in-order predecessor** (largest node in the left subtree).
            2.  Replace the node to be deleted with its successor (or predecessor).
            3.  Delete the successor (or predecessor) from its original position (which will be a case with 0 or 1 child).
*   **Efficiency:** In a balanced BST, search, insertion, and deletion take $O(\log n)$ time, where $n$ is the number of nodes. However, in the worst case (e.g., inserting elements in sorted order), a BST can degenerate into a linked list, resulting in $O(n)$ time complexity for these operations.

#### 2.3.1 Example (Samanta D., Chapter 5)

Insert the following keys into an empty BST: 50, 30, 70, 20, 40, 60, 80, 35.

1.  **50:** (Root)
    ```
        50
    ```
2.  **30:** (30 < 50, go left)
    ```
        50
       /
      30
    ```
3.  **70:** (70 > 50, go right)
    ```
        50
       /  \
      30   70
    ```
4.  **20:** (20 < 50, go left; 20 < 30, go left)
    ```
        50
       /  \
      30   70
     /
    20
    ```
5.  **40:** (40 < 50, go left; 40 > 30, go right)
    ```
        50
       /  \
      30   70
     /  \
    20   40
    ```
6.  **60:** (60 > 50, go right; 60 < 70, go left)
    ```
        50
       /  \
      30   70
     /  \  /
    20   40 60
    ```
7.  **80:** (80 > 50, go right; 80 > 70, go right)
    ```
        50
       /  \
      30   70
     /  \  /  \
    20   40 60   80
    ```
8.  **35:** (35 < 50, go left; 35 > 30, go right; 35 < 40, go left)
    ```
        50
       /  \
      30   70
     /  \  /  \
    20   40 60   80
        /
       35
    ```

### 2.4 Heaps

*   **Definition:** A complete binary tree that satisfies the heap property.
    *   **Min-Heap:** For every node, its value is less than or equal to the values of its children. The minimum element is at the root.
    *   **Max-Heap:** For every node, its value is greater than or equal to the values of its children. The maximum element is at the root.
*   **Applications:** Priority queues, Heap Sort.
*   **Representation:** Heaps are typically represented using an array because they are complete binary trees.
    *   For a node at index `i`:
        *   Left child is at index `2*i + 1`.
        *   Right child is at index `2*i + 2`.
        *   Parent is at index `floor((i - 1) / 2)`.
*   **Operations:**
    *   **Insertion:** Add the new element at the end of the array (the next available leaf position) and then "heapify up" (or "bubble up" or "percolate up") by repeatedly swapping the element with its parent if it violates the heap property, until the property is restored.
    *   **Deletion (of root):** Replace the root with the last element in the array, remove the last element, and then "heapify down" (or "bubble down" or "percolate down") by repeatedly swapping the element with its smaller child (for min-heap) or larger child (for max-heap) until the heap property is restored.
    *   **Heapify:** The process of restoring the heap property.

#### 2.4.1 Example (Horowitz, Sahni, & Anderson-Freed, Chapter 11 - Priority Queues)

Consider building a Min-Heap from the array: `[4, 1, 3, 2, 16, 9, 10, 14, 8, 7]`

1.  **Initial Array as a Complete Binary Tree:**
    ```
            4
           / \
          1   3
         / \ / \
        2  16 9 10
       / \ /
      14 8 7
    ```
2.  **Heapify:** Start from the last non-leaf node and work upwards.
    *   Node 9 (index 5): No children, heap property holds.
    *   Node 16 (index 4): Left child 8 (index 9). 8 < 16. Swap. Tree becomes `[4, 1, 3, 2, 8, 9, 10, 14, 16, 7]`
        ```
                4
               / \
              1   3
             / \ / \
            2  8 9 10
           / \ /
          14 16 7
        ```
    *   Node 3 (index 2): Children 9 (index 5), 10 (index 6). 3 < 9 and 3 < 10. Heap property holds.
    *   Node 1 (index 1): Children 2 (index 3), 8 (index 4). 1 < 2 and 1 < 8. Heap property holds.
    *   Node 4 (index 0): Children 1 (index 1), 3 (index 2). 1 < 4 and 3 < 4. Heap property holds.

    Oops, my manual heapify example for the array above had a mistake in the thought process. Let's do it correctly.

    Array: `[4, 1, 3, 2, 16, 9, 10, 14, 8, 7]`
    Indices: ` 0  1  2  3   4   5   6   7  8  9`

    Last non-leaf node is at index `floor((n-2)/2) = floor((10-2)/2) = floor(4) = 4`.
    Wait, last non-leaf node is at index `floor(n/2) - 1 = floor(10/2) - 1 = 5 - 1 = 4`.
    The nodes are: 4(0), 1(1), 3(2), 2(3), 16(4), 9(5), 10(6), 14(7), 8(8), 7(9).
    Nodes with children: 4(0), 1(1), 3(2), 2(3), 16(4).
    Last non-leaf node is at index 4 (value 16).

    Let's re-heapify from index `floor(n/2) - 1 = 4`.

    *   **Index 4 (value 16):** Children are 8 (index 9). 16 > 8. Swap.
        Array: `[4, 1, 3, 2, 8, 9, 10, 14, 16, 7]`
        Tree:
        ```
                4
               / \
              1   3
             / \ / \
            2  8 9 10
           / \ /
          14 16 7
        ```
    *   **Index 3 (value 2):** Children are 14 (index 7), 16 (index 8). 2 < 14 and 2 < 16. Heap property holds.
    *   **Index 2 (value 3):** Children are 9 (index 5), 10 (index 6). 3 < 9 and 3 < 10. Heap property holds.
    *   **Index 1 (value 1):** Children are 2 (index 3), 8 (index 4). 1 < 2 and 1 < 8. Heap property holds.
    *   **Index 0 (value 4):** Children are 1 (index 1), 3 (index 2). 4 > 1, 4 > 3. Heap property holds.

    There must be a mistake in my understanding of the example or the heapify process. Let's take a different approach for heapify.

    The `Heapify` procedure, when starting from the bottom, ensures that subtrees rooted at nodes are heaps.

    Consider array: `[4, 1, 3, 2, 16, 9, 10, 14, 8, 7]` (n=10)
    Start from index `floor(n/2) - 1 = 4`.

    1.  **index 4 (value 16):** Children: 8 (index 9). `16 > 8`. Swap.
        Array: `[4, 1, 3, 2, 8, 9, 10, 14, 16, 7]`
        Now, 16 is at index 9 (a leaf). Heap property holds for the subtree rooted at index 4.
    2.  **index 3 (value 2):** Children: 14 (index 7), 16 (index 8). `2 < 14`, `2 < 16`. Heap property holds.
    3.  **index 2 (value 3):** Children: 9 (index 5), 10 (index 6). `3 < 9`, `3 < 10`. Heap property holds.
    4.  **index 1 (value 1):** Children: 2 (index 3), 8 (index 4). `1 < 2`, `1 < 8`. Heap property holds.
    5.  **index 0 (value 4):** Children: 1 (index 1), 3 (index 2). `4 > 1`, `4 > 3`. Heap property holds.

    This example seems to result in a valid min-heap already after one pass. Let's try an array that *requires* more swaps.
    Array: `[16, 14, 10, 8, 7, 9, 3, 2, 4, 1]` (n=10)

    1.  **index 4 (value 7):** Children: 4 (index 9). `7 > 4`. Swap.
        Array: `[16, 14, 10, 8, 4, 9, 3, 2, 7, 1]`
    2.  **index 3 (value 8):** Children: 2 (index 7), 7 (index 8). `8 > 2`, `8 > 7`. Swap with 2.
        Array: `[16, 14, 10, 2, 4, 9, 3, 8, 7, 1]`
        Now 8 is at index 7 (a leaf). Heap property holds for subtree at index 3.
    3.  **index 2 (value 10):** Children: 9 (index 5), 3 (index 6). `10 > 3`. Swap with 3.
        Array: `[16, 14, 3, 2, 4, 9, 10, 8, 7, 1]`
        Now 10 is at index 6 (a leaf). Heap property holds for subtree at index 2.
    4.  **index 1 (value 14):** Children: 2 (index 3), 4 (index 4). `14 > 2`, `14 > 4`. Swap with 2.
        Array: `[16, 2, 3, 14, 4, 9, 10, 8, 7, 1]`
        Now 14 is at index 3. Its children are 8 (index 7) and 7 (index 8). `14 > 7`. Swap with 7.
        Array: `[16, 2, 3, 7, 4, 9, 10, 8, 14, 1]`
        Now 14 is at index 8 (a leaf). Heap property holds for subtree at index 1.
    5.  **index 0 (value 16):** Children: 2 (index 1), 3 (index 2). `16 > 2`, `16 > 3`. Swap with 2.
        Array: `[2, 16, 3, 7, 4, 9, 10, 8, 14, 1]`
        Now 16 is at index 1. Its children are 7 (index 3) and 4 (index 4). `16 > 4`. Swap with 4.
        Array: `[2, 4, 3, 7, 16, 9, 10, 8, 14, 1]`
        Now 16 is at index 4. Its children is 1 (index 9). `16 > 1`. Swap with 1.
        Array: `[2, 4, 3, 7, 1, 9, 10, 8, 14, 16]`
        Now 16 is at index 9 (a leaf). Heap property holds for subtree at index 0.

    Final Min-Heap Array: `[2, 4, 3, 7, 1, 9, 10, 8, 14, 16]`

---

## 3. Tree Applications and Uses

Trees are versatile and used in numerous applications:

*   **Hierarchical Data Representation:** File systems, organization charts, XML/HTML DOM.
*   **Searching:** Binary Search Trees (BSTs) offer efficient searching.
*   **Databases:** B-trees and B+-trees are used for indexing in database systems.
*   **Routing Algorithms:** Graphs are used, but tree structures can emerge in shortest path calculations.
*   **Expression Evaluation:** Expression trees represent arithmetic or logical expressions.
*   **Sorting:** Heapsort uses a heap data structure.
*   **Decision Trees:** Used in machine learning and decision analysis.
*   **Syntax Analysis (Parsing):** Compilers use parse trees to represent the grammatical structure of source code.
*   **Data Compression:** Huffman trees.

---

## 4. Practice Questions and Exercises

**(Aligns with CO3: Make use of nonlinear data structures like trees and graphs to design algorithms for various applications.)**

**Q1. (Conceptual)**
What is the minimum and maximum number of nodes in a binary tree of height $h$?
*   **Answer:**
    *   Minimum nodes: $h+1$ (a degenerate tree forming a line).
    *   Maximum nodes: $2^{h+1} - 1$ (a perfect binary tree).

**Q2. (Binary Search Tree)**
Given the following binary search tree, draw the tree after deleting the node with value 30.

```
        50
       /  \
      30   70
     /  \  /  \
    20   40 60   80
        /
       35
```

*   **Answer:**
    When deleting 30, it has two children (20 and 40). We need to find its in-order successor (smallest in the right subtree of 30, which is 35) or its in-order predecessor (largest in the left subtree of 30, which is 20). Let's use the in-order successor (35).
    1.  Replace 30 with 35.
    2.  Delete 35 from its original position (it's a leaf).

    ```
        50
       /  \
      35   70
     /    /  \
    20   60   80
    ```

**Q3. (Heap)**
Given the array `[3, 1, 4, 1, 5, 9, 2, 6]`, build a **Max-Heap** using the `heapify` procedure. Show the intermediate steps.

*   **Answer:**
    Array: `[3, 1, 4, 1, 5, 9, 2, 6]` (n=8)
    Indices: ` 0  1  2  3  4  5  6  7`
    Last non-leaf node index: `floor(8/2) - 1 = 3`.

    1.  **index 3 (value 1):** Children: 6 (index 7). `1 < 6`. Swap.
        Array: `[3, 1, 4, 6, 5, 9, 2, 1]`
    2.  **index 2 (value 4):** Children: 9 (index 5), 2 (index 6). `4 < 9`. Swap with 9.
        Array: `[3, 1, 9, 6, 5, 4, 2, 1]`
        Now 4 is at index 5 (a leaf). Heap property holds for subtree at index 2.
    3.  **index 1 (value 1):** Children: 6 (index 3), 5 (index 4). `1 < 6`. Swap with 6.
        Array: `[3, 6, 9, 1, 5, 4, 2, 1]`
        Now 6 is at index 3. Its children are 1 (index 7). `6 > 1`. Heap property holds for subtree at index 1.
    4.  **index 0 (value 3):** Children: 6 (index 1), 9 (index 2). `3 < 9`. Swap with 9.
        Array: `[9, 6, 3, 1, 5, 4, 2, 1]`
        Now 3 is at index 2. Its children are 4 (index 5), 2 (index 6). `3 < 4`. Swap with 4.
        Array: `[9, 6, 4, 1, 5, 3, 2, 1]`
        Now 3 is at index 5 (a leaf). Heap property holds for subtree at index 0.

    Final Max-Heap Array: `[9, 6, 4, 1, 5, 3, 2, 1]`

**Q4. (Traversal)**
Write a recursive function to count the number of leaf nodes in a binary tree. (Hint: Use the definition of a leaf node).

*   **Answer:**
    ```c
    int countLeafNodes(struct TreeNode *root) {
        if (root == NULL) {
            return 0;
        }
        // If the node is a leaf (no left child AND no right child)
        if (root->leftChild == NULL && root->rightChild == NULL) {
            return 1;
        }
        // Otherwise, it's an internal node. Sum leaves from left and right subtrees.
        return countLeafNodes(root->leftChild) + countLeafNodes(root->rightChild);
    }
    ```

---

## 5. Important Points to Remember

*   **Trees** are hierarchical, acyclic, and connected data structures.
*   A tree with $N$ nodes has $N-1$ edges.
*   **Binary Trees** have a maximum of two children per node.
*   **Traversals (In-order, Pre-order, Post-order, Level-order)** are essential for visiting nodes systematically.
*   **Binary Search Trees (BSTs)** provide efficient searching ($O(\log n)$ on average) if balanced.
*   **Heaps** are complete binary trees satisfying the heap property (min or max) and are often represented by arrays. They are efficient for priority queue operations and heapsort.
*   The choice of tree structure depends on the specific application requirements (e.g., balanced trees for guaranteed performance, heaps for priority tasks).
*   Understanding recursion is key for implementing many tree algorithms.

---

## Alignment with Course Outcomes

*   **CO1: Compare performance of algorithms using asymptotic notations (Knowledge Level: K2)**
    *   This module implicitly covers this when discussing BSTs (average $O(\log n)$ vs. worst-case $O(n)$) and heaps ($O(\log n)$ for insert/delete). Further analysis of tree operations would require explicit complexity analysis.
*   **CO2: Solve real world problems efficiently using appropriate data structures like arrays, linked list, stacks and queues. (Knowledge Level: K3)**
    *   This module demonstrates how trees solve problems like hierarchical data management, searching, and priority-based tasks. For example, a file system can be modeled as a tree, and efficient traversal/search within it is crucial.
*   **CO3: Make use of nonlinear data structures like trees and graphs to design algorithms for various applications. (Knowledge Level: K3)**
    *   This is the core of the module. We explored various tree types and their applications in searching (BST), sorting (HeapSort), and data representation (general trees, expression trees).
*   **CO4: Apply and compare various techniques for searching and sorting. (Knowledge Level: K3)**
    *   BSTs are a key searching technique. Heaps are fundamental to Heapsort, a significant sorting algorithm.
*   **CO5: Apply appropriate hash function to store and access a given dataset (Knowledge Level: K3)**
    *   This module does not directly cover hashing. Hashing is typically covered in a separate module on hash tables.

---

This concludes the notes on Trees. The next topic in Module 3 will likely cover Graphs, which build upon many of the concepts introduced here.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
