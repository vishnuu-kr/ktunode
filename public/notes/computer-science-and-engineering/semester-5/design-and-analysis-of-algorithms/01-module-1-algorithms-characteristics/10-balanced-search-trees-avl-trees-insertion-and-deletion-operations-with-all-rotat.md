---
title: "Balanced Search Trees - AVL Trees (Insertion and deletion operations with all rotations in detail,  algorithms not expected)"
subject: "DESIGN AND ANALYSIS OF ALGORITHMS"
module: "Module 1: Algorithms – Characteristics"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b54a"
status: "completed"
scrapedAt: "2026-05-20T16:45:33.192Z"
---
# DESIGN AND ANALYSIS OF ALGORITHMS - Module 1: Algorithms – Characteristics
## Balanced Search Trees - AVL Trees (Insertion and Deletion)

**Learning Outcomes:**

*   Understand the concept of balanced search trees and their importance.
*   Describe the properties of AVL trees and the concept of balance factor.
*   Explain the insertion operation in AVL trees, including all necessary rotations (LL, RR, LR, RL).
*   Explain the deletion operation in AVL trees, including all necessary rotations (LL, RR, LR, RL).
*   Be able to perform insertion and deletion operations on AVL trees manually, applying appropriate rotations.

### 1.  Introduction to Balanced Search Trees

*   **What are Balanced Search Trees?**
    *   A balanced search tree is a binary search tree that automatically keeps its height small in the face of arbitrary item insertions and deletions.
    *   This helps maintain efficient search, insertion, and deletion operations in O(log n) time, where n is the number of nodes.
*   **Why are Balanced Search Trees Important?**
    *   Unbalanced Binary Search Trees can degenerate into linear structures (like linked lists) leading to O(n) time complexity for search, insertion, and deletion operations.
    *   Balanced search trees prevent this degeneration, ensuring logarithmic time complexity.
    *   Examples of Balanced Search Trees: AVL Trees, Red-Black Trees, B-Trees, 2-3 Trees.

### 2. AVL Trees

*   **Definition:**
    *   An AVL tree (named after its inventors, Adelson-Velskii and Landis) is a self-balancing binary search tree.
*   **Key Property: Balance Factor**
    *   For every node in an AVL tree, the height difference between its left and right subtrees must be -1, 0, or +1.  This difference is called the *balance factor*.
    *   Balance Factor = Height(Left Subtree) - Height(Right Subtree)
    *   If the balance factor of any node becomes outside the range [-1, 1], a rotation is performed to rebalance the tree.
*   **Height of an AVL Tree:**
    *   The height of an AVL tree with n nodes is guaranteed to be O(log n).
*   **Importance of Height:**
    *   The height of the tree directly impacts the time complexity of search, insertion, and deletion operations. Lower height means faster operations.

### 3. Rotations in AVL Trees

*   **Why Rotations are Needed:**
    *   Insertion or deletion of a node can violate the balance factor property of an AVL tree.
    *   Rotations are performed to restore the balance factor to the valid range [-1, 1].
*   **Types of Rotations:**
    *   There are four types of rotations:
        *   **LL (Left-Left) Rotation:** Single right rotation.
        *   **RR (Right-Right) Rotation:** Single left rotation.
        *   **LR (Left-Right) Rotation:** Double rotation (Left rotation followed by Right rotation).
        *   **RL (Right-Left) Rotation:** Double rotation (Right rotation followed by Left rotation).
*   **Understanding the Rotations (Assume 'A' is the unbalanced node):**

    *   **LL Rotation (Right Rotation):**
        *   Occurs when the imbalance is caused by the left subtree of the left child of A.
        *   *Scenario:*  `Balance Factor(A) = +2` and `Balance Factor(A's Left Child) >= 0`
        *   *Mechanism:* A right rotation is performed at node A.  The left child of A becomes the new root of the subtree, and A becomes the right child of the new root.

        ```
           A                  B
          / \                / \
         B   T4    ----->   T1  A
        / \                      / \
       T1  T2                    T2 T4
        ```
        *   `A` is the unbalanced node.
        *   `B` is the left child of `A`.
        *   `T1`, `T2`, `T4` are subtrees.
    *   **RR Rotation (Left Rotation):**
        *   Occurs when the imbalance is caused by the right subtree of the right child of A.
        *   *Scenario:*  `Balance Factor(A) = -2` and `Balance Factor(A's Right Child) <= 0`
        *   *Mechanism:* A left rotation is performed at node A.  The right child of A becomes the new root of the subtree, and A becomes the left child of the new root.

        ```
           A                    B
          / \                  / \
         T1  B      ----->     A   T4
            / \                / \
           T2  T4              T1  T2
        ```

        *   `A` is the unbalanced node.
        *   `B` is the right child of `A`.
        *   `T1`, `T2`, `T4` are subtrees.
    *   **LR Rotation (Left-Right Rotation):**
        *   Occurs when the imbalance is caused by the right subtree of the left child of A.
        *   *Scenario:*  `Balance Factor(A) = +2` and `Balance Factor(A's Left Child) < 0`
        *   *Mechanism:* First, a left rotation is performed at the left child of A.  Then, a right rotation is performed at node A.

        ```
           A                      A                       C
          / \                    / \                     / \
         B   T4                   C   T4                  B   A
        / \         LEFT         / \       RIGHT         / \ / \
       T1  C      ----->        B   T3    ----->        T1 T2 T3 T4
          / \                  / \
         T2  T3                T1  T2
        ```

        *   `A` is the unbalanced node.
        *   `B` is the left child of `A`.
        *   `C` is the right child of `B`.
        *   `T1`, `T2`, `T3`, `T4` are subtrees.
    *   **RL Rotation (Right-Left Rotation):**
        *   Occurs when the imbalance is caused by the left subtree of the right child of A.
        *   *Scenario:*  `Balance Factor(A) = -2` and `Balance Factor(A's Right Child) > 0`
        *   *Mechanism:* First, a right rotation is performed at the right child of A.  Then, a left rotation is performed at node A.

        ```
           A                      A                       C
          / \                    / \                     / \
         T1  B                  T1  C                   A   B
            / \       RIGHT         / \        LEFT        / \ / \
           C   T4     ----->        T2  B      ----->     T1 T2 T3 T4
          / \                        / \
         T2  T3                      T3  T4
        ```

        *   `A` is the unbalanced node.
        *   `B` is the right child of `A`.
        *   `C` is the left child of `B`.
        *   `T1`, `T2`, `T3`, `T4` are subtrees.

### 4. Insertion in AVL Trees

1.  **Perform standard BST insertion:** Insert the new node as you would in a regular binary search tree.
2.  **Trace back the path from the inserted node to the root:**  For each node on the path, update its height.
3.  **Check Balance Factors:**  For each node on the path, calculate the balance factor.
4.  **Perform Rotations if Needed:**  If any node has a balance factor of +2 or -2, perform the appropriate rotation (LL, RR, LR, or RL) to rebalance the tree.
5.  **Update Heights:** After rotations, update the heights of the affected nodes. Note that *at most one rotation* (single or double) is needed after insertion to rebalance the tree.

### 5. Deletion in AVL Trees

1.  **Perform standard BST deletion:** Delete the node as you would in a regular binary search tree.  This might involve finding the inorder successor or predecessor.
2.  **Trace back the path from the deleted node's position to the root:** For each node on the path, update its height.
3.  **Check Balance Factors:** For each node on the path, calculate the balance factor.
4.  **Perform Rotations if Needed:** If any node has a balance factor of +2 or -2, perform the appropriate rotation (LL, RR, LR, or RL) to rebalance the tree.
5.  **Update Heights:** After rotations, update the heights of the affected nodes.  Unlike insertion, *multiple rotations might be necessary* during deletion to rebalance the tree.  This is because deleting a node can impact the balance factors of many nodes along the path.

### 6. Important Points to Remember

*   **Balance Factor:**  The key to understanding AVL trees.  Must be -1, 0, or +1.
*   **Rotations:**  Essential for maintaining balance.  Understand the four types (LL, RR, LR, RL) and when to use each one.  Visually tracing rotations helps in understanding the structure changes.
*   **Insertion vs. Deletion:**  Insertion requires at most one rotation. Deletion may require multiple rotations.
*   **Heights:**  Always update heights after insertion, deletion, and rotations.  Heights are crucial for calculating balance factors.

### 7. Practice Questions/Exercises

**Question 1:**

Consider the following AVL tree:

```
      10
     /  \
    5    15
   / \   / \
  2   7 12  18
```

Insert the node '1' into the tree.  Show the resulting tree after insertion and any necessary rotations.

**Answer 1:**

1.  **Insert '1':**

    ```
          10
         /  \
        5    15
       / \   / \
      2   7 12  18
     /
    1
    ```

2.  **Balance Factors (after insertion):**

    *   1: 0
    *   2: +1
    *   5: +2  (Unbalanced!)
    *   10: +1
    *   15: 0
    *   12: 0
    *   18: 0

3.  **Rotation:** The node '5' is unbalanced with a balance factor of +2.  The left child of '5' (which is '2') has a balance factor of +1.  This is an LL case, so we perform a Right Rotation at '5'.

    ```
          10
         /  \
        2    15
       / \   / \
      1   5 12  18
         / \
        -   7
    ```

4.  **Final Tree (after rotation and height updates):**

    ```
          10
         /  \
        2    15
       / \   / \
      1   5 12  18
         / \
        -   7
    ```

**Question 2:**

Consider the following AVL tree:

```
    15
   /  \
  10   20
 / \   / \
5  12 17  25
       /
      16
```

Delete the node '10' from the tree. Show the resulting tree after deletion and any necessary rotations.

**Answer 2:**

1. **Delete '10':** Since '10' has two children, we replace it with its inorder successor, which is '12'.
```
    15
   /  \
  12   20
 / \   / \
5   - 17  25
       /
      16
```
2. **Balance Factors (after deletion):** Starting from the position of the deleted node (originally '10', now occupied by '12'), we check the balance factors upwards towards the root.

    *   5: 0
    *   12: -1
    *   15: -1 (Unbalanced)
    *   17: +1
    *   16: 0
    *   20: 0
    *   25: 0
3. **Rotation:** The node '15' is unbalanced with a balance factor of -1. The right child of '15' (which is '20') has a balance factor of 0. This could have been either RR or RL rotation depending on the situation, but since node '12' is present on the left subtree we need to perform a RR (Single Left Rotation) at '15'.

    ```
       20
      /  \
     15   25
    /  \
   12   17
  /
 5
 /
16
    ```
4. **Final Tree (after rotation and height updates):**

    ```
       20
      /  \
     15   25
    /  \
   12   17
  /   /
 5   16
```

**Question 3:** What is the maximum height of an AVL tree with 7 nodes?

**Answer 3:**  The maximum height occurs when the tree is as unbalanced as possible while still maintaining the AVL property. In this case, the height is 3.
```
       5
      / \
     3   7
    / \
   2   4
  /
 1
```

**Explanation for Question 3:** In AVL trees, achieving maximum height requires carefully arranging nodes to push the limits of the balance factor constraints. The height increase depends on Fibonacci sequence. For example, an AVL tree with height 0 has maximum 1 node, for height 1 it has a maximum of 2 nodes. For height 2, it has a maximum of 4 nodes and for height 3, it has a maximum of 7 nodes.

These notes provide a solid foundation for understanding AVL trees and their operations. Remember to practice drawing and manipulating trees to solidify your understanding of rotations. Good luck!
