---
title: "Advanced Tree Data Structures  - Balanced Trees - AVL Trees (review)"
subject: "ADVANCED DATA STRUCTURES"
module: "Module 2: Advanced Tree Data Structures  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b363"
status: "completed"
scrapedAt: "2026-05-20T16:10:04.571Z"
---
# ADVANCED DATA STRUCTURES - Module 2: Advanced Tree Data Structures - AVL Trees (Review)

**Objective:** To review AVL Trees, a self-balancing Binary Search Tree (BST), and understand their importance, structure, and operations.

**Learning Outcomes:**

*   Understand the concept of balanced trees and why they are important.
*   Define AVL trees and their balancing property.
*   Describe the different types of rotations (LL, RR, LR, RL) used in AVL trees.
*   Understand the insertion operation in AVL trees and how rotations are used to maintain balance.
*   Understand the deletion operation in AVL trees and how rotations are used to maintain balance.
*   Analyze the time complexity of AVL tree operations (insertion, deletion, search).
*   Implement basic AVL tree operations (insertion and at least one rotation type).

## 1. Introduction to Balanced Trees

*   **Definition:** Balanced trees are tree data structures that aim to keep the height of the tree as small as possible, usually logarithmic with respect to the number of nodes.
*   **Importance:**
    *   **Improved Performance:** Balanced trees provide faster search, insertion, and deletion operations compared to unbalanced trees, especially in the worst-case scenario.
    *   **Worst-Case Scenario Mitigation:** Unbalanced trees can degenerate into linked lists in the worst-case, leading to O(n) time complexity for operations. Balanced trees prevent this.
    *   **Predictable Performance:** Balanced trees guarantee a specific maximum height based on the number of nodes, leading to more predictable performance.

*   **Why balancing is important:**  In a binary search tree, the worst-case scenario occurs when the tree is skewed (either left-skewed or right-skewed), resembling a linked list. This results in O(n) time complexity for search, insertion, and deletion operations. Balancing ensures that the height of the tree remains logarithmic, leading to O(log n) time complexity for these operations.

## 2. AVL Trees: Definition and Balancing Property

*   **Definition:** An AVL tree is a self-balancing Binary Search Tree (BST) where the heights of the two child subtrees of any node differ by at most one.
*   **Balancing Property (AVL Property):** For every node in the AVL tree, the balance factor (height of left subtree - height of right subtree) must be -1, 0, or 1.
*   **Balance Factor:** `balance_factor = height(left subtree) - height(right subtree)`
*   **Maintaining Balance:** AVL trees maintain their balance through rotations, which are performed during insertion and deletion operations.
*   **Example:**
    *   A balanced AVL tree:
        ```
              10
            /    \
           5      15
          / \    / \
         2   7  12  17
        ```
    *   An unbalanced tree (that would be re-balanced during insertion/deletion):
        ```
              10
            /
           5
          /
         2
        ```
        In this example, the height difference between the left and right subtrees of node 10 is 2, violating the AVL property.
    *   **Key Point:** The balance factor is checked for *every* node after each insertion or deletion to maintain the AVL property.

## 3. Rotations in AVL Trees

*   **Purpose of Rotations:**  To re-balance the tree when the balance factor of a node becomes -2 or +2. Rotations preserve the BST property.

*   **Types of Rotations:**
    *   **LL Rotation (Right Rotation):**  Occurs when the imbalance is in the left subtree of the left child.  Right rotation is performed around the imbalanced node.
        *   **Scenario:**  The left-left grandchild causes imbalance.
        *   **Diagram:**
            ```
                Z                       Y
               / \                     / \
              Y   D                   X   Z
             / \         ----->        / \ / \
            X   C                     A   B C   D
           / \
          A   B
            ```
            *Z is imbalanced (+2), Y is the left child of Z.*
    *   **RR Rotation (Left Rotation):** Occurs when the imbalance is in the right subtree of the right child. Left rotation is performed around the imbalanced node.
        *   **Scenario:** The right-right grandchild causes imbalance.
        *   **Diagram:**
            ```
                Z                       Y
               / \                     / \
              A   Y                   Z   C
                 / \         ----->    / \ / \
                B   C                 A   B D   E
                   / \
                  D   E
            ```
            *Z is imbalanced (-2), Y is the right child of Z.*

    *   **LR Rotation (Left-Right Rotation):** Requires two rotations. First, a left rotation is performed on the left child, and then a right rotation is performed on the original node.
        *   **Scenario:** The left-right grandchild causes imbalance.
        *   **Diagram:**
            ```
                Z                       Z                       X
               / \                     / \                     / \
              Y   D                   X   D                   Y   Z
             / \         ---->        / \         ---->        / \ / \
            A   X                     Y   C                   A   B C   D
               / \                   / \
              B   C                 A   B
            ```
            *Z is imbalanced (+2), Y is the left child of Z, X is the right child of Y.*
    *   **RL Rotation (Right-Left Rotation):** Requires two rotations. First, a right rotation is performed on the right child, and then a left rotation is performed on the original node.
        *   **Scenario:** The right-left grandchild causes imbalance.
        *   **Diagram:**
            ```
                Z                       Z                       X
               / \                     / \                     / \
              A   Y                   A   X                   Z   Y
                 / \         ---->        / \         ---->        / \ / \
                X   C                     B   Y                   A   B C   D
               / \                         / \
              B   D                       C   D
            ```
            *Z is imbalanced (-2), Y is the right child of Z, X is the left child of Y.*

*   **Important Considerations:**
    *   After each rotation, the heights of the affected nodes must be updated.
    *   Rotations are performed in a specific order to maintain the BST property.

## 4. Insertion in AVL Trees

*   **Algorithm:**
    1.  Perform standard BST insertion.
    2.  Trace back the path from the newly inserted node to the root, updating the heights of the nodes along the path.
    3.  For each node encountered along the path, check its balance factor.
    4.  If the balance factor is -2 or +2, perform the appropriate rotation(s) to re-balance the tree.  There are four cases, LL, RR, LR, or RL, based on where the imbalance lies.
    5.  The process is repeated as we traverse up the tree until we have either performed a rotation or reached the root.

*   **Example:** Insert the values 1, 2, 3, 4, 5 into an initially empty AVL tree.

    1.  Insert 1: Tree is simply `1`
    2.  Insert 2: Tree is `1 / \ null 2`
    3.  Insert 3: Tree is `1 / \ null 2 / \ null 3`. Node 1 is imbalanced. Perform RR rotation around 1. Result: `2 / \ 1 3`
    4.  Insert 4: Tree is `2 / \ 1 3 / \ null null null 4`. Node 1 is imbalanced. Perform RR rotation around 1, result: `2 / \ 1 3 / \ null null null 4`. Then rebalancing step causes 2 to be imbalanced. Perform RR rotation around 2, result: `3 / \ 2 4 / \ 1 null null null`
    5.  Insert 5: Tree is `3 / \ 2 4 / \ 1 null null 5`. Node 2 is imbalanced. Perform RR rotation around 2, resulting in `3 / \ 2 4 / \ 1 null null 5`. then rebalancing step finds 3 is imbalanced.  Perform RR rotation around 3, resulting in `4 / \ 3 5 / \ 2 null / \ 1 null`.

*   **Key Points:**
    *   Only one rotation (or a double rotation in the LR or RL case) is needed after insertion to re-balance the tree. This is because the subtree above the rotation will now have the same height as before the insertion, meaning no other nodes higher up the tree will be affected.
    *   Heights must be updated after each insertion and rotation.

## 5. Deletion in AVL Trees

*   **Algorithm:**
    1.  Perform standard BST deletion.
    2.  Trace back the path from the deleted node's parent to the root, updating the heights of the nodes along the path.
    3.  For each node encountered along the path, check its balance factor.
    4.  If the balance factor is -2 or +2, perform the appropriate rotation(s) to re-balance the tree.
    5.  **Unlike insertion, multiple rotations may be required during deletion to re-balance the tree all the way up to the root.** This is because the deletion reduces the height of one subtree, which can propagate the imbalance upwards.

*   **Important Considerations:**
    *   Deletion can cause more than one rotation, potentially all the way up to the root.
    *   Heights must be updated after each deletion and rotation.
    *   Deletion is more complex than insertion in AVL trees.

## 6. Time Complexity of AVL Tree Operations

*   **Search:** O(log n) – Guaranteed logarithmic time due to the balanced nature of the tree.
*   **Insertion:** O(log n) – Logarithmic time for the initial BST insertion and for tracing back the path to the root, as well as performing at most one rotation (or one double rotation).
*   **Deletion:** O(log n) – Logarithmic time for the initial BST deletion and for tracing back the path to the root. However, multiple rotations *may* be required.
*   **Space Complexity:** O(n) - To store the n nodes in the tree. O(log n) in call stack space if the tree is reasonably balanced for recursive operations.

## 7. Implementing AVL Tree Operations (Example: Insertion and LL Rotation)

```python
class Node:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None
        self.height = 1  # Initialize height to 1

class AVLTree:
    def __init__(self):
        self.root = None

    def height(self, node):
        if not node:
            return 0
        return node.height

    def balance_factor(self, node):
        if not node:
            return 0
        return self.height(node.left) - self.height(node.right)

    def update_height(self, node):
        node.height = 1 + max(self.height(node.left), self.height(node.right))

    def right_rotate(self, z): # LL Rotation
        y = z.left
        t3 = y.right

        # Perform rotation
        y.right = z
        z.left = t3

        # Update heights
        self.update_height(z)
        self.update_height(y)

        return y  # New root after rotation


    def insert(self, root, key):
        # 1. Perform the normal BST insertion
        if not root:
            return Node(key)

        if key < root.key:
            root.left = self.insert(root.left, key)
        else:
            root.right = self.insert(root.right, key)

        # 2. Update the height of the ancestor node
        self.update_height(root)

        # 3. Get the balance factor
        balance = self.balance_factor(root)

        # 4. If the node is unbalanced, then try out the 4 cases
        # Case 1 - Left Left
        if balance > 1 and key < root.left.key:
            return self.right_rotate(root)

        # Add other cases (RR, LR, RL) here...


        return root
```

## 8. Practice Questions and Exercises

1.  **Explain the AVL property and why it's important for performance.**
    *   *Answer:* The AVL property states that for every node in the tree, the height difference between its left and right subtrees must be at most one (balance factor of -1, 0, or 1). This ensures that the tree remains balanced, preventing worst-case scenarios that can lead to O(n) time complexity for search, insertion, and deletion.

2.  **Given an AVL tree, insert the following value and show the rotations performed (if any):  Root: 10, Tree: 5 (L), 15(R). Insert 2.**
    *   *Answer:*
        1. Insert 2:  ` 10 / \ 5  15 / \ 2 null`
        2. Node 5 is imbalanced (+2).  LL rotation (right rotation around 5).
        3. Result: `10 / \ 2 15 / \ null 5`.  (5 had children removed). Now fix 5:  `10 / \ 2 15 / \ null 5 / \ null null` which simplifies to `5 / \ 2 10 / \ null null / \ null 15`

3.  **What is the maximum height of an AVL tree with 'n' nodes?**
    *   *Answer:* O(log n)

4.  **Describe the differences between LL, RR, LR, and RL rotations and when each one is used.**
    *   *Answer:* (See Section 3 above for descriptions and diagrams).

5.  **Write pseudocode for the `balance_factor` function.**
    *   *Answer:*
        ```
        function balance_factor(node):
            if node is null:
                return 0
            return height(node.left) - height(node.right)

        function height(node):
            if node is null:
                return 0
            return node.height
        ```

6.  **Why might deletion be more complicated to implement in an AVL tree compared to insertion?**
    *   *Answer:* Because unlike insertion, multiple rotations might be required during deletion to re-balance the tree all the way up to the root.

## 9. Important Points to Remember

*   AVL trees guarantee O(log n) time complexity for search, insertion, and deletion operations.
*   The balance factor of each node must be -1, 0, or 1.
*   Rotations are used to maintain the AVL property during insertion and deletion.
*   There are four types of rotations: LL, RR, LR, and RL.
*   Deletion may require multiple rotations.
*   Heights must be updated after each insertion, deletion, and rotation.
