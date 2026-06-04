---
title: "Binary Search Trees - Binary Search Tree Operations"
subject: "DATA STRUCTURES"
module: "Module 3: Trees and Graphs"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bea4"
status: "completed"
scrapedAt: "2026-05-20T16:52:02.651Z"
---
# Data Structures: Module 3 - Trees and Graphs

## Topic: Binary Search Trees - Binary Search Tree Operations

This module focuses on Binary Search Trees (BSTs) and the fundamental operations performed on them. BSTs are a specialized type of binary tree that allows for efficient searching, insertion, and deletion of data.

---

### Learning Outcomes:

By the end of this topic, you should be able to:

*   **Understand the properties of a Binary Search Tree.**
*   **Perform insertion operations in a BST.**
*   **Perform deletion operations in a BST.**
*   **Perform searching operations in a BST.**
*   **Understand and implement traversal techniques for BSTs (In-order, Pre-order, Post-order).**
*   **Analyze the time complexity of BST operations.**
*   **Understand the concept of balanced BSTs and their importance.**

---

### 1. Introduction to Binary Search Trees (BSTs)

#### 1.1 Definition

A **Binary Search Tree (BST)** is a binary tree data structure that adheres to the following properties:

*   The **left subtree** of a node contains only nodes with keys **less than** the node's key.
*   The **right subtree** of a node contains only nodes with keys **greater than** the node's key.
*   Both the **left and right subtrees** must also be binary search trees.
*   There are **no duplicate keys** in a BST (though variations exist that allow duplicates, typically by placing them in the right subtree).

#### 1.2 Properties of a BST

*   **Ordered Structure:** The ordering property is key. For any node `N`, all keys in its left subtree are smaller than `N.key`, and all keys in its right subtree are larger than `N.key`.
*   **Efficient Searching:** The ordered structure allows for efficient searching, similar to binary search on an array.
*   **Dynamic Structure:** BSTs are dynamic, meaning they can grow and shrink as elements are inserted or deleted.

#### 1.3 Visual Representation

Let's consider an example BST:

```
      50
     /  \
    30   70
   / \   / \
  20 40 60 80
```

*   For node `50`: Left subtree (30, 20, 40) has keys < 50. Right subtree (70, 60, 80) has keys > 50.
*   This property holds true for all nodes.

---

### 2. Binary Search Tree Operations

#### 2.1 Searching for a Key

The search operation in a BST is efficient because we can eliminate half of the remaining tree at each step.

*   **Algorithm:**
    1.  Start at the root node.
    2.  If the tree is empty, the key is not found.
    3.  If the current node's key matches the target key, the key is found.
    4.  If the target key is **less than** the current node's key, recursively search in the **left subtree**.
    5.  If the target key is **greater than** the current node's key, recursively search in the **right subtree**.

*   **Example:** Searching for `60` in the BST above:
    1.  Start at `50`. `60 > 50`, so go right.
    2.  At `70`. `60 < 70`, so go left.
    3.  At `60`. `60 == 60`, key found.

*   **Time Complexity:**
    *   **Best Case/Average Case:** O(h), where `h` is the height of the tree. In a balanced BST, `h` is O(log n).
    *   **Worst Case:** O(n), where `n` is the number of nodes. This occurs when the BST degenerates into a linked list (e.g., inserting elements in sorted order).

#### 2.2 Insertion of a Key

To insert a new key, we follow a similar logic to searching, finding the correct position where the new node should be placed.

*   **Algorithm:**
    1.  If the tree is empty, create a new node with the key and make it the root.
    2.  Start at the root.
    3.  If the new key is **less than** the current node's key, move to the **left child**. If the left child is null, insert the new node as the left child.
    4.  If the new key is **greater than** the current node's key, move to the **right child**. If the right child is null, insert the new node as the right child.
    5.  If the new key is **equal to** the current node's key, do not insert (assuming no duplicates).

*   **Example:** Inserting `35` into the BST above:
    1.  Start at `50`. `35 < 50`, go left.
    2.  At `30`. `35 > 30`, go right.
    3.  At `40`. `35 < 40`, go left.
    4.  The left child of `40` is null. Insert `35` as the left child of `40`.

    The BST now looks like:

    ```
          50
         /  \
        30   70
       / \   / \
      20 40 60 80
         /
        35
    ```

*   **Time Complexity:**
    *   **Best Case/Average Case:** O(h) -> O(log n) for a balanced BST.
    *   **Worst Case:** O(n) -> O(n) for a degenerate BST.

#### 2.3 Deletion of a Key

Deletion is the most complex BST operation, as it needs to maintain the BST properties after removing a node. There are three cases for the node to be deleted:

*   **Case 1: Node to be deleted is a leaf node (has no children).**
    *   Simply remove the node.

*   **Case 2: Node to be deleted has only one child.**
    *   Replace the node with its only child.

*   **Case 3: Node to be deleted has two children.**
    *   This is the trickiest case. We need to find a replacement node that preserves the BST property. There are two common choices:
        *   **In-order Successor:** The smallest key in the right subtree.
        *   **In-order Predecessor:** The largest key in the left subtree.
    *   Let's choose the **in-order successor**:
        1.  Find the in-order successor of the node to be deleted (the minimum value in its right subtree).
        2.  Copy the successor's key to the node to be deleted.
        3.  Delete the successor node (which will be a leaf node or have only a right child, handled by Case 1 or 2).

*   **Example:** Deleting `30` (node with two children) from the BST:

    ```
          50
         /  \
        30   70
       / \   / \
      20 40 60 80
    ```

    1.  Node to delete is `30`. It has two children: `20` (left) and `40` (right).
    2.  Find the in-order successor of `30`. This is the minimum value in its right subtree (`40`).
    3.  Copy the successor's key (`40`) to the node to be deleted (`30`). The tree now conceptually looks like this (but `40` is still in its original place):

        ```
              50
             /  \
            40   70  <-- conceptually, '30' now holds '40'
           / \   / \
          20 40 60 80
        ```
    4.  Now, delete the original node `40` (which is now a duplicate and was the successor). Node `40` has no children (it's a leaf).
    5.  Remove the leaf node `40`.

    The BST after deleting `30` becomes:

    ```
          50
         /  \
        40   70
       /     / \
      20    60 80
    ```

*   **Time Complexity:**
    *   **Best Case/Average Case:** O(h) -> O(log n) for a balanced BST. Finding the successor takes O(h) time.
    *   **Worst Case:** O(n) -> O(n) for a degenerate BST.

---

### 3. Traversal Techniques for BSTs

Traversals visit each node in a specific order. For BSTs, the order of traversal is significant for retrieving sorted data.

#### 3.1 In-order Traversal

*   **Order:** Left Subtree -> Current Node -> Right Subtree
*   **Property:** When applied to a BST, an in-order traversal visits the nodes in **ascending sorted order** of their keys.
*   **Algorithm (Recursive):**
    1.  If the node is not null:
        a.  Traverse the left subtree.
        b.  Visit (e.g., print) the current node.
        c.  Traverse the right subtree.

*   **Example:** In-order traversal of the initial BST:
    *   Start at `50`. Go left to `30`.
    *   Go left to `20`. Left child of `20` is null. Visit `20`. Right child of `20` is null.
    *   Back to `30`. Visit `30`. Go right to `40`.
    *   Left child of `40` is null. Visit `40`. Right child of `40` is null.
    *   Back to `30`. Finished right subtree.
    *   Back to `50`. Visit `50`. Go right to `70`.
    *   Go left to `60`. Left child of `60` is null. Visit `60`. Right child of `60` is null.
    *   Back to `70`. Visit `70`. Go right to `80`.
    *   Left child of `80` is null. Visit `80`. Right child of `80` is null.
    *   Back to `70`. Finished right subtree.
    *   Back to `50`. Finished right subtree.

    Output: `20, 30, 40, 50, 60, 70, 80` (Sorted order)

*   **Time Complexity:** O(n), as every node is visited exactly once.

#### 3.2 Pre-order Traversal

*   **Order:** Current Node -> Left Subtree -> Right Subtree
*   **Use:** Useful for creating a copy of the tree or for expression trees.
*   **Algorithm (Recursive):**
    1.  If the node is not null:
        a.  Visit (e.g., print) the current node.
        b.  Traverse the left subtree.
        c.  Traverse the right subtree.

*   **Example:** Pre-order traversal of the initial BST:
    1.  Visit `50`. Go left to `30`.
    2.  Visit `30`. Go left to `20`.
    3.  Visit `20`. Left/right children null.
    4.  Back to `30`. Go right to `40`.
    5.  Visit `40`. Left/right children null.
    6.  Back to `30`. Finished right subtree.
    7.  Back to `50`. Go right to `70`.
    8.  Visit `70`. Go left to `60`.
    9.  Visit `60`. Left/right children null.
    10. Back to `70`. Go right to `80`.
    11. Visit `80`. Left/right children null.
    12. Back to `70`. Finished right subtree.
    13. Back to `50`. Finished right subtree.

    Output: `50, 30, 20, 40, 70, 60, 80`

*   **Time Complexity:** O(n).

#### 3.3 Post-order Traversal

*   **Order:** Left Subtree -> Right Subtree -> Current Node
*   **Use:** Useful for deleting a tree or for evaluating expression trees.
*   **Algorithm (Recursive):**
    1.  If the node is not null:
        a.  Traverse the left subtree.
        b.  Traverse the right subtree.
        c.  Visit (e.g., print) the current node.

*   **Example:** Post-order traversal of the initial BST:
    1.  Start at `50`. Go left to `30`.
    2.  Go left to `20`. Left/right children null. Visit `20`.
    3.  Back to `30`. Go right to `40`.
    4.  Left/right children null. Visit `40`.
    5.  Back to `30`. Finished right subtree. Visit `30`.
    6.  Back to `50`. Go right to `70`.
    7.  Go left to `60`. Left/right children null. Visit `60`.
    8.  Back to `70`. Go right to `80`.
    9.  Left/right children null. Visit `80`.
    10. Back to `70`. Finished right subtree. Visit `70`.
    11. Back to `50`. Finished right subtree. Visit `50`.

    Output: `20, 40, 30, 60, 80, 70, 50`

*   **Time Complexity:** O(n).

---

### 4. Time Complexity Analysis of BST Operations

| Operation     | Best Case | Average Case | Worst Case | Notes                                         |
| :------------ | :-------- | :----------- | :--------- | :-------------------------------------------- |
| Search        | O(log n)  | O(log n)     | O(n)       | Depends on tree height. Balanced for log n.   |
| Insertion     | O(log n)  | O(log n)     | O(n)       | Depends on tree height. Balanced for log n.   |
| Deletion      | O(log n)  | O(log n)     | O(n)       | Depends on tree height. Balanced for log n.   |
| In-order Traversal | O(n)      | O(n)         | O(n)       | Visits every node once.                       |
| Pre-order Traversal | O(n)      | O(n)         | O(n)       | Visits every node once.                       |
| Post-order Traversal| O(n)      | O(n)         | O(n)       | Visits every node once.                       |

**Important Point:** The "average case" complexity of O(log n) for search, insertion, and deletion is achieved when the BST is "reasonably balanced." This means the height of the tree grows logarithmically with the number of nodes. If the tree becomes skewed (like a linked list), the performance degrades to O(n).

---

### 5. Balanced Binary Search Trees

#### 5.1 The Problem with Unbalanced BSTs

As noted, BSTs can become unbalanced, leading to worst-case performance (O(n)) for core operations. This happens when elements are inserted in a sorted or nearly sorted order, creating a degenerate tree that resembles a linked list.

**Example of a degenerate BST (inserting 10, 20, 30, 40, 50):**

```
10
 \
  20
   \
    30
     \
      40
       \
        50
```
Searching for `50` in this tree requires traversing all 5 nodes, resulting in O(n) complexity.

#### 5.2 Concept of Balanced BSTs

**Balanced Binary Search Trees** are BSTs that automatically maintain a certain level of balance, ensuring that the height of the tree remains logarithmic with respect to the number of nodes. This guarantees that operations like search, insertion, and deletion have a worst-case time complexity of O(log n).

#### 5.3 Types of Balanced BSTs (Brief Mention)

While the operations on BSTs themselves are the focus, it's important to know that solutions exist for the unbalanced problem:

*   **AVL Trees:** A self-balancing BST where the height difference between the left and right subtrees of any node is at most 1.
*   **Red-Black Trees:** Another self-balancing BST that uses color properties (red and black) to ensure balance.
*   **B-Trees and B+ Trees:** Typically used in databases and file systems, these are m-way trees that are also balanced and have a high branching factor.

**Key Takeaway:** Balanced BSTs use rotations and rebalancing algorithms during insertion and deletion to maintain their logarithmic height, thus ensuring efficient performance even in the worst-case scenarios.

---

### 6. Practice Questions and Exercises

**Instructions:** For each question, assume the initial BST structure:

```
      50
     /  \
    30   70
   / \   / \
  20 40 60 80
```

**Question 1: Searching**
Trace the steps to search for the key `60`.

**Question 2: Insertion**
Trace the steps to insert the key `25`. Draw the resulting BST.

**Question 3: Deletion (Leaf Node)**
Trace the steps to delete the key `20`. Draw the resulting BST.

**Question 4: Deletion (Node with One Child)**
Trace the steps to delete the key `70`. Draw the resulting BST.
*Hint: For node `70`, the in-order successor is `80`.*

**Question 5: Deletion (Node with Two Children)**
Trace the steps to delete the key `30`. Draw the resulting BST.
*Hint: For node `30`, the in-order successor is `40`.*

**Question 6: Traversal - In-order**
What will be the output of an in-order traversal of the initial BST?

**Question 7: Traversal - Pre-order**
What will be the output of a pre-order traversal of the initial BST?

**Question 8: Traversal - Post-order**
What will be the output of a post-order traversal of the initial BST?

**Question 9: Time Complexity**
What is the worst-case time complexity for searching in a BST, and when does it occur?

**Question 10: Balanced BSTs**
Why are balanced BSTs important, and what problem do they solve?

---

### Answers to Practice Questions

**Answer 1: Searching for `60`**
1.  Start at root `50`. `60 > 50`, move to the right child.
2.  At node `70`. `60 < 70`, move to the left child.
3.  At node `60`. `60 == 60`, key found.

**Answer 2: Insertion of `25`**
1.  Start at `50`. `25 < 50`, go left.
2.  At `30`. `25 < 30`, go left.
3.  At `20`. `25 > 20`, go right.
4.  The right child of `20` is null. Insert `25` as the right child of `20`.

    Resulting BST:
    ```
          50
         /  \
        30   70
       / \   / \
      20 40 60 80
       \
        25
    ```

**Answer 3: Deletion of `20` (Leaf Node)**
1.  Find node `20`. It has no children.
2.  Remove `20`.

    Resulting BST:
    ```
          50
         /  \
        30   70
         \   / \
         40 60 80
    ```

**Answer 4: Deletion of `70` (Node with One Child)**
*Note: For this specific example, `70` has two children. Let's consider deleting `80` which has no children, then consider deleting `70` which has `80` as its right child. Or, if we had a tree where a node only had one child.*

Let's adjust the scenario slightly to demonstrate Case 2: Imagine a node `35` with only a right child `40`.
To delete `35`: Replace `35` with its right child `40`.

If we consider deleting `70` with its right child `80`:
1.  Find node `70`. It has only one child: `80` (right child).
2.  Replace `70` with its child `80`.

    Resulting BST:
    ```
          50
         /  \
        30   80  <-- 70 is replaced by 80
       / \   /
      20 40 60
    ```

**Answer 5: Deletion of `30` (Node with Two Children)**
1.  Find node `30`. It has two children: `20` (left) and `40` (right).
2.  Find the in-order successor of `30`: The minimum key in its right subtree (`40`).
3.  Copy the successor's key (`40`) to the node to be deleted (`30`).
4.  Delete the original successor node (`40`). Node `40` is a leaf.
5.  Remove the leaf node `40`.

    Resulting BST:
    ```
          50
         /  \
        40   70  <-- 30 now holds 40
       /     / \
      20    60 80
    ```

**Answer 6: Traversal - In-order**
`20, 30, 40, 50, 60, 70, 80`

**Answer 7: Traversal - Pre-order**
`50, 30, 20, 40, 70, 60, 80`

**Answer 8: Traversal - Post-order**
`20, 40, 30, 60, 80, 70, 50`

**Answer 9: Time Complexity**
The worst-case time complexity for searching in a BST is **O(n)**. This occurs when the BST degenerates into a linked list, typically when elements are inserted in a sorted or reverse-sorted order.

**Answer 10: Balanced BSTs**
Balanced BSTs are important because they **guarantee that the height of the tree remains logarithmic with respect to the number of nodes (O(log n))**. This solves the problem of unbalanced BSTs, which can degrade performance to O(n) for search, insertion, and deletion operations. By maintaining balance, balanced BSTs ensure efficient O(log n) performance for these critical operations in all cases.

---

### Important Points to Remember:

*   **BST Property:** Left child < Parent < Right child.
*   **In-order Traversal:** Yields keys in ascending order.
*   **Deletion Case 3 (Two Children):** Replace with in-order successor (smallest in right subtree) or in-order predecessor (largest in left subtree).
*   **Performance:** BST operations are O(log n) on average but degrade to O(n) in the worst case (degenerate tree).
*   **Balanced BSTs:** Essential for guaranteed O(log n) performance.
