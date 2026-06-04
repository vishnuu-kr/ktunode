---
title: "Tree Operations"
subject: "DATA STRUCTURES"
module: "Module 3: Trees and Graphs"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bea2"
status: "completed"
scrapedAt: "2026-05-20T16:52:01.225Z"
---
# DATA STRUCTURES: Module 3: Trees and Graphs

## Topic: Tree Operations

---

### Learning Outcomes

Upon completion of this topic, you should be able to:

*   Understand and perform basic tree operations such as insertion, deletion, and search.
*   Implement various traversal methods (in-order, pre-order, post-order, level-order).
*   Understand and perform operations on Binary Search Trees (BSTs), including finding minimum/maximum elements, successor/predecessor, and deletion of nodes with different cases.
*   Understand the concept of balancing in trees and the need for balanced trees.
*   Understand and perform operations on AVL trees, including rotations (single and double) for insertion and deletion.
*   Understand and perform operations on B-trees, including insertion and deletion.

---

### 1. Introduction to Tree Operations

Trees are hierarchical data structures consisting of nodes connected by edges. They are widely used for representing relationships, organizing data, and efficient searching.

*   **Node:** A basic unit of a tree, typically containing data and pointers to its children.
*   **Root:** The topmost node of the tree.
*   **Edge:** A connection between two nodes.
*   **Parent:** A node directly above another node.
*   **Child:** A node directly below another node.
*   **Leaf:** A node with no children.
*   **Height:** The number of edges on the longest path from the root to a leaf.
*   **Depth:** The number of edges from the root to a node.

---

### 2. Basic Tree Operations

These operations are fundamental and applicable to most types of trees.

#### 2.1. Insertion

Adding a new node into a tree. The exact placement depends on the type of tree.

*   **General Trees:** New nodes can be added as children of existing nodes.
*   **Binary Trees:** New nodes are typically added at the first available empty child position, often following a specific rule (e.g., complete binary tree).
*   **Binary Search Trees (BSTs):** Insertion follows a specific ordering property (explained later).

#### 2.2. Deletion

Removing a node from a tree. This is often more complex than insertion, especially when the node to be deleted has children. The specific algorithm depends on the tree type.

#### 2.3. Search (Traversal)

Finding a specific node within a tree. This is usually done by traversing the tree.

---

### 3. Tree Traversal Methods

Traversal refers to the process of visiting each node in a tree exactly once in a systematic way.

#### 3.1. Depth-First Traversal (DFT)

Visits nodes by going as deep as possible along each branch before backtracking.

*   **In-order Traversal (Left-Root-Right):**
    *   Recursively traverse the left subtree.
    *   Visit the current node.
    *   Recursively traverse the right subtree.
    *   **Key Use:** For Binary Search Trees (BSTs), in-order traversal visits nodes in ascending sorted order.

    **Example:**
    Consider the following BST:
        4
       / \
      2   5
     / \
    1   3

    In-order traversal: 1, 2, 3, 4, 5

*   **Pre-order Traversal (Root-Left-Right):**
    *   Visit the current node.
    *   Recursively traverse the left subtree.
    *   Recursively traverse the right subtree.
    *   **Key Use:** Creating a copy of the tree, obtaining a prefix expression for expression trees.

    **Example (using the same BST):**
    Pre-order traversal: 4, 2, 1, 3, 5

*   **Post-order Traversal (Left-Right-Root):**
    *   Recursively traverse the left subtree.
    *   Recursively traverse the right subtree.
    *   Visit the current node.
    *   **Key Use:** Deleting a tree (to delete children before the parent), obtaining a postfix expression for expression trees.

    **Example (using the same BST):**
    Post-order traversal: 1, 3, 2, 5, 4

#### 3.2. Breadth-First Traversal (BFT) / Level-Order Traversal

Visits nodes level by level, from top to bottom, and from left to right within each level.

*   **Algorithm:** Uses a queue.
    1.  Enqueue the root node.
    2.  While the queue is not empty:
        *   Dequeue a node.
        *   Visit the dequeued node.
        *   Enqueue its left child (if it exists).
        *   Enqueue its right child (if it exists).
*   **Key Use:** Finding the shortest path in an unweighted graph, certain tree-specific algorithms.

    **Example (using the same BST):**
    Level-order traversal: 4, 2, 5, 1, 3

---

### 4. Binary Search Tree (BST) Operations

A binary tree where for each node:
*   All values in the left subtree are **less than** the node's value.
*   All values in the right subtree are **greater than** the node's value.
*   Both the left and right subtrees are also BSTs.

#### 4.1. Insertion in BST

1.  Start at the root.
2.  If the tree is empty, the new node becomes the root.
3.  Compare the new value with the current node's value:
    *   If the new value is less than the current node's value, go to the left child.
    *   If the new value is greater than the current node's value, go to the right child.
4.  Repeat step 3 until an empty child position is found. Insert the new node there.

    **Example:** Inserting 6 into the BST from the previous example.
    Current BST:
        4
       / \
      2   5
     / \
    1   3

    *   6 > 4, go right to 5.
    *   6 > 5, go right (empty). Insert 6.

    New BST:
        4
       / \
      2   5
     / \   \
    1   3   6

#### 4.2. Search in BST

1.  Start at the root.
2.  If the tree is empty or the current node's value matches the search value, return the node.
3.  Compare the search value with the current node's value:
    *   If the search value is less than the current node's value, search in the left subtree.
    *   If the search value is greater than the current node's value, search in the right subtree.

#### 4.3. Finding Minimum and Maximum Elements

*   **Minimum:** Repeatedly go to the left child until a node with no left child is found. This is the smallest element.
*   **Maximum:** Repeatedly go to the right child until a node with no right child is found. This is the largest element.

#### 4.4. Finding Successor and Predecessor

*   **Successor:** The node with the smallest key greater than the given node's key.
    *   **Case 1: If the node has a right subtree:** The successor is the minimum value in the right subtree.
    *   **Case 2: If the node has no right subtree:** Traverse up from the node. The successor is the first ancestor for which the current node is in its left subtree. If no such ancestor exists, the node is the largest.

*   **Predecessor:** The node with the largest key smaller than the given node's key.
    *   **Case 1: If the node has a left subtree:** The predecessor is the maximum value in the left subtree.
    *   **Case 2: If the node has no left subtree:** Traverse up from the node. The predecessor is the first ancestor for which the current node is in its right subtree. If no such ancestor exists, the node is the smallest.

#### 4.5. Deletion in BST

Deleting a node with a given key. This is the most complex BST operation.

*   **Case 1: Node to be deleted is a leaf (no children):** Simply remove the node.

    **Example:** Delete 1 from the BST:
        4
       / \
      2   5
     / \
    1   3

    New BST:
        4
       / \
      2   5
       \
        3

*   **Case 2: Node to be deleted has one child:** Replace the node with its child.

    **Example:** Delete 5 from the BST:
        4
       / \
      2   5
       \
        3

    New BST:
        4
       / \
      2   3

*   **Case 3: Node to be deleted has two children:**
    1.  Find either the **in-order successor** (smallest node in the right subtree) or the **in-order predecessor** (largest node in the left subtree).
    2.  Replace the node to be deleted with its successor/predecessor.
    3.  Delete the successor/predecessor from its original position (it will have at most one child, making it a simpler deletion case).

    **Example:** Delete 2 from the BST:
        4
       / \
      2   5
     / \
    1   3

    *   Node 2 has two children (1 and 3).
    *   Its in-order successor is 3.
    *   Replace 2 with 3.
    *   Delete 3 from its original position.

    New BST:
        4
       / \
      2   5
       \
        3
    (Node 3 is deleted from its original position)

    New BST after deletion:
        4
       / \
      3   5
     /
    1

    **Important:** If you choose to replace with the predecessor, you'd find 1, replace 2 with 1, and delete 1.

---

### 5. Balancing Trees: The Need for Balance

As trees grow, they can become unbalanced, leading to worst-case scenarios where performance degrades to that of a linked list (e.g., O(n) for search, insertion, deletion). This happens when data is inserted in a sorted or nearly sorted order.

**Balanced Trees:** Trees that maintain a certain level of balance, ensuring that the height of the tree remains logarithmic with respect to the number of nodes (O(log n)). This guarantees efficient operations.

---

### 6. AVL Trees

An AVL tree is a self-balancing binary search tree. For every node, the height difference between its left and right subtrees (called the **balance factor**) is at most 1 (i.e., -1, 0, or 1).

*   **Balance Factor:** `height(left_subtree) - height(right_subtree)`

#### 6.1. AVL Tree Operations: Rotations

When an insertion or deletion causes a node's balance factor to become -2 or +2, the tree needs to be rebalanced using **rotations**. Rotations restructure the tree to restore the AVL property while preserving the BST property.

*   **Types of Imbalances:**
    *   **Left-Left Case:** Insertion in the left subtree of the left child of an unbalanced node.
        *   **Solution:** Single Right Rotation at the unbalanced node.
    *   **Right-Right Case:** Insertion in the right subtree of the right child of an unbalanced node.
        *   **Solution:** Single Left Rotation at the unbalanced node.
    *   **Left-Right Case:** Insertion in the right subtree of the left child of an unbalanced node.
        *   **Solution:** Double Rotation (Left Rotation on the left child, then Right Rotation on the unbalanced node).
    *   **Right-Left Case:** Insertion in the left subtree of the right child of an unbalanced node.
        *   **Solution:** Double Rotation (Right Rotation on the right child, then Left Rotation on the unbalanced node).

#### 6.1.1. Single Right Rotation

Used for Left-Left imbalance.

**Before:**
       A
      /
     B
    /
   C

**After:**
       B
      / \
     C   A

#### 6.1.2. Single Left Rotation

Used for Right-Right imbalance.

**Before:**
     A
      \
       B
        \
         C

**After:**
       B
      / \
     A   C

#### 6.1.3. Double Rotation (Left-Right)

Used for Left-Right imbalance.
**Before:**
     A
    /
   C
    \
     B

**Steps:**
1.  Left Rotate at C:
     A
    /
   B
  /
 C
2.  Right Rotate at A:
       B
      / \
     C   A

**After:**
       B
      / \
     C   A

#### 6.1.4. Double Rotation (Right-Left)

Used for Right-Left imbalance.
**Before:**
   A
    \
     C
    /
   B

**Steps:**
1.  Right Rotate at C:
   A
    \
     B
      \
       C
2.  Left Rotate at A:
       B
      / \
     A   C

**After:**
       B
      / \
     A   C

#### 6.2. AVL Insertion and Deletion

1.  Perform the standard BST insertion/deletion.
2.  Starting from the inserted/deleted node, traverse upwards towards the root.
3.  For each node encountered, update its height and check its balance factor.
4.  If an imbalance is detected (balance factor < -1 or > 1), perform the appropriate rotation(s) to rebalance the subtree rooted at that node.
5.  Continue this process up to the root.

---

### 7. B-Trees

B-trees are self-balancing search trees that are optimized for systems that read and write large blocks of data. They are commonly used in databases and file systems.

**Key Characteristics:**
*   **Order (m):** Each node (except the root) can have between `ceil(m/2)` and `m` children. The root can have between 2 and `m` children.
*   **Keys per Node:** Each node can store between `ceil(m/2) - 1` and `m - 1` keys.
*   **Sorted Keys:** Keys within a node are stored in sorted order.
*   **Children Pointers:** A node with `k` keys has `k+1` children pointers. The keys act as separators for the subtrees.
*   **All Leaves at Same Level:** Ensures balance.

#### 7.1. B-Tree Insertion

1.  Find the appropriate leaf node where the new key should be inserted.
2.  Insert the key into the leaf node in sorted order.
3.  **If the leaf node becomes full (has `m-1` keys):**
    *   **Split the node:** Find the median key.
    *   Create two new nodes: one with keys less than the median, and one with keys greater than the median.
    *   Promote the median key to the parent node.
    *   If the parent node also becomes full, split the parent and promote its median key. This process can propagate up to the root.
    *   If the root becomes full, split it, and the median key becomes the new root, increasing the height of the tree by one.

#### 7.2. B-Tree Deletion

Deletion is more complex than insertion. It involves finding the node, removing it, and then ensuring the node doesn't fall below the minimum number of keys (`ceil(m/2) - 1`).

1.  **If the node to be deleted is a leaf and has enough keys:** Remove the key.
2.  **If the node to be deleted is a leaf and has only the minimum number of keys:**
    *   **Borrow from a sibling:** If an adjacent sibling has more than the minimum number of keys, move a key from the sibling to the parent, and move a key from the parent to the current node.
    *   **Merge with a sibling:** If both adjacent siblings have the minimum number of keys, merge the node with one of its siblings and pull down a key from the parent. This might cause the parent to underflow, requiring further merging or borrowing.
3.  **If the node to be deleted is an internal node:**
    *   Replace the key with its in-order predecessor or successor.
    *   Recursively delete the predecessor/successor from its leaf node (which will then follow the rules for leaf node deletion).

---

### Practice Questions

1.  **BST Traversal:** Given the following BST, perform an in-order traversal, pre-order traversal, and level-order traversal.
    ```
        7
       / \
      3   10
     / \   \
    1   5   12
       / \
      4   6
    ```

2.  **BST Insertion:** Insert the keys 8, 15, 2, 11 into the following BST:
    ```
        5
       / \
      3   9
    ```

3.  **BST Deletion:** Delete the node with key 5 from the BST:
    ```
        7
       / \
      3   10
     / \   \
    1   5   12
       / \
      4   6
    ```
    Consider the case where the node to be deleted has two children.

4.  **AVL Rotation:** An insertion into an AVL tree causes the following structure with node 'A' becoming unbalanced. Identify the type of imbalance (LL, RR, LR, RL) and describe the rotation(s) needed to rebalance it.
    ```
       A
      /
     B
    /
   C
    ```

5.  **B-Tree Insertion:** For a B-tree of order `m=5`, insert the following keys in order: 10, 20, 30, 40, 50, 60, 70, 80. Show the state of the tree after each insertion, especially after splits.

---

### Answers to Practice Questions

1.  **BST Traversal:**
    *   **In-order:** 1, 3, 4, 5, 6, 7, 10, 12
    *   **Pre-order:** 7, 3, 1, 5, 4, 6, 10, 12
    *   **Level-order:** 7, 3, 10, 1, 5, 12, 4, 6

2.  **BST Insertion:**
    *   Insert 8:
        ```
            5
           / \
          3   9
               \
                8
        ```
    *   Insert 15:
        ```
            5
           / \
          3   9
               \
                8
                 \
                  15
        ```
    *   Insert 2:
        ```
            5
           / \
          3   9
         /     \
        2       8
                 \
                  15
        ```
    *   Insert 11:
        ```
            5
           / \
          3   9
         /     \
        2       8
                 \
                  15
                 /
                11
        ```

3.  **BST Deletion (Delete 5):**
    *   Node 5 has two children (4 and 6).
    *   Its in-order successor is 6.
    *   Replace 5 with 6.
    *   Delete 6 from its original position.

    Initial BST:
    ```
        7
       / \
      3   10
     / \   \
    1   5   12
       / \
      4   6
    ```

    After replacement and deletion of 6:
    ```
        7
       / \
      3   10
     / \   \
    1   6   12
       /
      4
    ```

4.  **AVL Rotation:**
    *   This is a **Left-Left (LL) case**.
    *   The imbalance occurs at node 'A' because its left child 'B' has a left child 'C'.
    *   To rebalance, a **Single Right Rotation** at 'A' is required.

5.  **B-Tree Insertion (Order m=5):** (Each node can have up to 4 keys, min 2 keys (except root))
    *   **Insert 10:**
        ```
        [10]
        ```
    *   **Insert 20:**
        ```
        [10, 20]
        ```
    *   **Insert 30:**
        ```
        [10, 20, 30]
        ```
    *   **Insert 40:**
        ```
        [10, 20, 30, 40]
        ```
    *   **Insert 50:** Node is full. Split. Median is 30.
        ```
             [30]
            /    \
        [10, 20] [40, 50]
        ```
    *   **Insert 60:** Insert into right child.
        ```
             [30]
            /    \
        [10, 20] [40, 50, 60]
        ```
    *   **Insert 70:** Node is full. Split. Median is 50.
        ```
             [30, 50]
            /    |    \
        [10, 20] [40] [60, 70]
        ```
    *   **Insert 80:** Insert into right child.
        ```
             [30, 50]
            /    |    \
        [10, 20] [40] [60, 70, 80]
        ```

---

### Important Points to Remember

*   **Traversal order matters:** In-order, pre-order, and post-order yield different sequences of node visits.
*   **BST Property:** Crucial for efficient searching. Always maintain the order.
*   **Deletion Complexity:** Deleting a node with two children in a BST is the most involved operation.
*   **Balancing is Key:** Unbalanced trees degrade performance significantly. AVL and B-trees ensure logarithmic time complexity for operations.
*   **Rotations:** The core mechanism for rebalancing AVL trees. Understand the four cases and their corresponding rotations.
*   **B-Trees:** Designed for disk I/O. Nodes are larger, and splitting/merging keeps the tree shallow.
*   **Height vs. Depth:** Height is from node to furthest leaf; depth is from root to node.
