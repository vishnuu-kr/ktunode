---
title: "Trees- Binary Search Tree Operations"
subject: "DATA STRUCTURES"
module: "Module 3: Trees and Graphs"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fea17"
status: "completed"
scrapedAt: "2026-05-23T17:55:12.497Z"
---
# Data Structures: Module 3 - Trees and Graphs

## Topic: Binary Search Tree (BST) Operations

### 1. Introduction to Binary Search Trees (BSTs)

*   **Definition:** A Binary Search Tree is a binary tree data structure where for each node:
    *   The value in the left subtree is less than the value in the node.
    *   The value in the right subtree is greater than the value in the node.
    *   Both the left and right subtrees are also binary search trees.

*   **Key Properties:**
    *   **Ordered Structure:** BSTs maintain an ordered relationship between nodes, facilitating efficient searching.
    *   **No Duplicate Values:** Typically, BSTs do not store duplicate values. If duplicates are allowed, a convention must be established (e.g., duplicates go to the right subtree).
    *   **Efficiency:** The average time complexity for most BST operations (search, insertion, deletion) is O(log n), where 'n' is the number of nodes. However, in the worst case (a skewed tree), it can degrade to O(n).

*   **Applications:**
    *   Efficient searching, insertion, and deletion of elements.
    *   Implementing symbol tables in compilers.
    *   Used in various algorithms and data structures.

*   **Textbook References:**
    *   *Fundamentals of Data Structures in C* (Horowitz, Sahni, Anderson-Freed): Chapter 6, "Trees" - discusses binary trees and their properties, laying the groundwork for BSTs.
    *   *Classic Data Structures* (Samanta): Chapter 5, "Trees" - provides a good overview of tree concepts and BSTs.

*   **Alignment with Course Outcomes:**
    *   **CO3:** Directly addresses the use of nonlinear data structures (trees) to design algorithms. Understanding BST operations is fundamental to designing efficient algorithms for data management. (Knowledge Level: K3)

### 2. Representing a BST

*   **Node Structure:** A BST node typically contains:
    *   `data`: The value stored in the node.
    *   `left`: A pointer to the left child node.
    *   `right`: A pointer to the right child node.

*   **Example (C-like pseudocode):**

    ```c
    struct TreeNode {
        int data;
        struct TreeNode* left;
        struct TreeNode* right;
    };
    ```

*   **Root:** The BST is accessed through a pointer to its root node. An empty tree is represented by a `NULL` root pointer.

### 3. BST Operations

#### 3.1. Searching for an Element (`search(root, key)`)

*   **Concept:** Traverse the tree starting from the root. At each node, compare the `key` with the node's `data`:
    *   If `key` matches the node's `data`, the element is found.
    *   If `key` is less than the node's `data`, move to the left child.
    *   If `key` is greater than the node's `data`, move to the right child.
    *   If the traversal reaches `NULL` (an empty subtree), the element is not present.

*   **Algorithm (Recursive):**

    ```
    function search(node, key):
        if node is NULL:
            return NULL // Element not found
        if key == node.data:
            return node // Element found
        if key < node.data:
            return search(node.left, key) // Search in left subtree
        else: // key > node.data
            return search(node.right, key) // Search in right subtree
    ```

*   **Algorithm (Iterative):**

    ```
    function search_iterative(root, key):
        current = root
        while current is not NULL:
            if key == current.data:
                return current // Element found
            if key < current.data:
                current = current.left // Move left
            else: // key > current.data
                current = current.right // Move right
        return NULL // Element not found
    ```

*   **Time Complexity:**
    *   **Best Case:** O(1) (key is at the root)
    *   **Average Case:** O(log n) (balanced tree)
    *   **Worst Case:** O(n) (skewed tree)

*   **Textbook References:**
    *   *Fundamentals of Data Structures in C* (Horowitz, Sahni, Anderson-Freed): Section 6.4, "Binary Search Trees" - details the search operation.
    *   *Classic Data Structures* (Samanta): Section 5.2, "Binary Search Trees" - covers searching.
    *   *Data Structures: A Pseudocode Approach with C* (Gilberg, Forouzan): Chapter 7, "Trees" - explains BST search.

*   **Alignment with Course Outcomes:**
    *   **CO1:** Analyzing the time complexity of search (O(log n) average, O(n) worst-case) relates to asymptotic notations. (Knowledge Level: K2)
    *   **CO4:** This operation is a fundamental searching technique. (Knowledge Level: K3)

#### 3.2. Insertion of an Element (`insert(root, key)`)

*   **Concept:** Traverse the tree to find the correct position for the new `key`, similar to searching.
    *   If the tree is empty, create a new node as the root.
    *   If `key` is less than the current node's `data`, try to insert into the left subtree. If the left child is `NULL`, insert the new node there.
    *   If `key` is greater than the current node's `data`, try to insert into the right subtree. If the right child is `NULL`, insert the new node there.
    *   (Optional, based on convention) If `key` is equal to the current node's `data`, handle as per the BST's duplicate policy (e.g., do nothing or insert into the right subtree).

*   **Algorithm (Recursive):**

    ```
    function insert(node, key):
        if node is NULL:
            newNode = createNode(key)
            return newNode

        if key < node.data:
            node.left = insert(node.left, key) // Insert in left subtree
        else if key > node.data:
            node.right = insert(node.right, key) // Insert in right subtree
        // else: key == node.data, handle duplicates as needed

        return node // Return the (potentially modified) node
    ```
    *   **Note:** The `insert` function should return the updated root of the subtree. The initial call would be `root = insert(root, new_key)`.

*   **Algorithm (Iterative):**

    ```
    function insert_iterative(root, key):
        newNode = createNode(key)
        if root is NULL:
            return newNode

        current = root
        parent = NULL
        while current is not NULL:
            parent = current
            if key < current.data:
                current = current.left
            else if key > current.data:
                current = current.right
            else: // key == current.data, handle duplicates
                free(newNode) // Don't insert duplicates, free the new node
                return root

        // Insert newNode at the correct position
        if key < parent.data:
            parent.left = newNode
        else:
            parent.right = newNode

        return root
    ```

*   **Time Complexity:**
    *   **Best Case:** O(1) (inserting into an empty tree)
    *   **Average Case:** O(log n)
    *   **Worst Case:** O(n)

*   **Textbook References:**
    *   *Fundamentals of Data Structures in C* (Horowitz, Sahni, Anderson-Freed): Section 6.4, "Binary Search Trees".
    *   *Classic Data Structures* (Samanta): Section 5.2, "Binary Search Trees".

*   **Alignment with Course Outcomes:**
    *   **CO1:** Analyzing the time complexity of insertion. (Knowledge Level: K2)
    *   **CO3:** Demonstrates how to modify a tree structure to add new data. (Knowledge Level: K3)

#### 3.3. Deletion of an Element (`delete(root, key)`)

*   **Concept:** Deleting a node from a BST is the most complex operation, as the BST property must be maintained. There are three cases for the node to be deleted:

    1.  **Node is a Leaf Node (no children):** Simply remove the node.
    2.  **Node has One Child:** Replace the node with its only child.
    3.  **Node has Two Children:**
        *   Find the **in-order successor** (the smallest node in the right subtree) or the **in-order predecessor** (the largest node in the left subtree).
        *   Replace the node to be deleted with its in-order successor (or predecessor).
        *   Delete the in-order successor (or predecessor) from its original position. The successor/predecessor will always have at most one child (the right child for successor, left child for predecessor), making its deletion fall into case 1 or 2.

*   **Finding In-order Successor (`findMin(node)`):**
    *   The smallest value in a BST subtree is found by repeatedly traversing to the left child until `NULL` is encountered.

    ```
    function findMin(node):
        current = node
        while current.left is not NULL:
            current = current.left
        return current
    ```

*   **Algorithm (Recursive):**

    ```
    function delete(node, key):
        if node is NULL:
            return NULL // Key not found

        if key < node.data:
            node.left = delete(node.left, key) // Delete in left subtree
        else if key > node.data:
            node.right = delete(node.right, key) // Delete in right subtree
        else: // key == node.data, this is the node to delete
            // Case 1: Node with no children or only one child
            if node.left is NULL:
                temp = node.right
                free(node)
                return temp
            else if node.right is NULL:
                temp = node.left
                free(node)
                return temp

            // Case 2: Node with two children
            // Find the in-order successor (smallest in the right subtree)
            temp = findMin(node.right)

            // Copy the in-order successor's data to this node
            node.data = temp.data

            // Delete the in-order successor from the right subtree
            node.right = delete(node.right, temp.data)

        return node // Return the (potentially modified) node
    ```
    *   **Note:** Similar to `insert`, the initial call would be `root = delete(root, key_to_delete)`.

*   **Time Complexity:**
    *   **Best Case:** O(1) (deleting a leaf node directly)
    *   **Average Case:** O(log n)
    *   **Worst Case:** O(n)

*   **Textbook References:**
    *   *Fundamentals of Data Structures in C* (Horowitz, Sahni, Anderson-Freed): Section 6.4, "Binary Search Trees". This is a detailed discussion.
    *   *Classic Data Structures* (Samanta): Section 5.2, "Binary Search Trees".
    *   *Data Structures and Algorithms* (Aho, Hopcroft, Ullman): Chapter 5, "Trees" - discusses tree operations including deletion.
    *   *Theory and Problems of Data Structures* (Lipschuts): Chapter 7, "Trees" - provides explanations and examples of BST operations.

*   **Alignment with Course Outcomes:**
    *   **CO1:** Analyzing the time complexity of deletion. (Knowledge Level: K2)
    *   **CO3:** Demonstrates modifying tree structure while maintaining properties. (Knowledge Level: K3)

#### 3.4. Traversals (In-order, Pre-order, Post-order)

*   **Concept:** Traversals visit each node exactly once. For BSTs, **in-order traversal** is particularly important as it visits nodes in ascending order of their values, which is directly related to the BST property.

*   **In-order Traversal:**
    *   Visit left subtree.
    *   Visit current node.
    *   Visit right subtree.
    *   **Result:** Sorted order of elements.

*   **Pre-order Traversal:**
    *   Visit current node.
    *   Visit left subtree.
    *   Visit right subtree.
    *   **Result:** Root first, then left subtree, then right subtree. Useful for copying trees.

*   **Post-order Traversal:**
    *   Visit left subtree.
    *   Visit right subtree.
    *   Visit current node.
    *   **Result:** Left subtree, then right subtree, then root. Useful for deleting trees.

*   **Algorithms (Recursive):**

    ```c
    // In-order traversal
    void inorder(struct TreeNode* node) {
        if (node == NULL) return;
        inorder(node->left);
        printf("%d ", node->data); // Visit node
        inorder(node->right);
    }

    // Pre-order traversal
    void preorder(struct TreeNode* node) {
        if (node == NULL) return;
        printf("%d ", node->data); // Visit node
        preorder(node->left);
        preorder(node->right);
    }

    // Post-order traversal
    void postorder(struct TreeNode* node) {
        if (node == NULL) return;
        postorder(node->left);
        postorder(node->right);
        printf("%d ", node->data); // Visit node
    }
    ```

*   **Time Complexity for all traversals:** O(n), as each node is visited exactly once.

*   **Textbook References:**
    *   *Fundamentals of Data Structures in C* (Horowitz, Sahni, Anderson-Freed): Section 6.3, "Binary Tree Traversal" - covers all three types.
    *   *Classic Data Structures* (Samanta): Section 5.1, "Tree Traversal" - excellent coverage.
    *   *Introduction to Data Structures with Applications* (Tremblay, Sorenson): Chapter 6, "Trees" - discusses traversals in detail.

*   **Alignment with Course Outcomes:**
    *   **CO3:** Understanding how to systematically visit nodes is key to applying tree structures. (Knowledge Level: K3)
    *   **CO4:** In-order traversal directly supports sorting. (Knowledge Level: K3)

### 4. Example Scenario

Let's build a BST and perform operations:

**1. Insertion:**
Insert the following keys into an empty BST: `50, 30, 70, 20, 40, 60, 80`

*   Insert `50`: Root is `50`.
    ```
        50
    ```
*   Insert `30`: `30 < 50`, go left. Left is `NULL`, insert `30`.
    ```
        50
       /
      30
    ```
*   Insert `70`: `70 > 50`, go right. Right is `NULL`, insert `70`.
    ```
        50
       /  \
      30   70
    ```
*   Insert `20`: `20 < 50` (go left), `20 < 30` (go left). Left of `30` is `NULL`, insert `20`.
    ```
        50
       /  \
      30   70
     /
    20
    ```
*   Insert `40`: `40 < 50` (go left), `40 > 30` (go right). Right of `30` is `NULL`, insert `40`.
    ```
        50
       /  \
      30   70
     /  \
    20   40
    ```
*   Insert `60`: `60 > 50` (go right), `60 < 70` (go left). Left of `70` is `NULL`, insert `60`.
    ```
        50
       /  \
      30   70
     /  \  /
    20   40 60
    ```
*   Insert `80`: `80 > 50` (go right), `80 > 70` (go right). Right of `70` is `NULL`, insert `80`.
    ```
        50
       /  \
      30   70
     /  \ /  \
    20   40 60  80
    ```

**2. Searching:**
*   Search for `40`: `50` (go left) -> `30` (go right) -> `40`. Found.
*   Search for `90`: `50` (go right) -> `70` (go right) -> `80` (go right) -> `NULL`. Not found.

**3. Deletion:**
Let's delete `30` (a node with two children).
*   Find `30`. It has children `20` and `40`.
*   Find the in-order successor of `30`, which is `40`.
*   Replace `30`'s data with `40`.
*   Delete `40` from the right subtree of the original `30`. Since `40` is a leaf node in that subtree, it's a simple leaf deletion.

    The tree becomes:
    ```
        50
       /  \
      40   70
     /    /  \
    20   60  80
    ```
    (Note: The node that was originally `30` now holds `40`. The `20` remains its left child. The original `40` node is removed.)

Now, let's delete `70` (a node with two children).
*   Find `70`. It has children `60` and `80`.
*   Find the in-order successor of `70`, which is `80`.
*   Replace `70`'s data with `80`.
*   Delete `80` from the right subtree of the original `70`. Since `80` is a leaf node, it's a simple leaf deletion.

    The tree becomes:
    ```
        50
       /  \
      40   80
     /    /
    20   60
    ```
    (Note: The node that was originally `70` now holds `80`. The `60` remains its left child. The original `80` node is removed.)

**4. Traversal:**
Using the final tree: `50, 40, 80, 20, 60`

*   **In-order Traversal:** `20 40 50 60 80` (Sorted order)
*   **Pre-order Traversal:** `50 40 20 80 60`
*   **Post-order Traversal:** `20 40 60 80 50`

### 5. Important Points to Remember

*   **BST Property:** Always maintain `left < parent < right`.
*   **Efficiency:** Average O(log n) is excellent, but a skewed tree can lead to O(n). Techniques like self-balancing BSTs (AVL, Red-Black trees) address this worst-case scenario.
*   **Deletion Complexity:** Case 3 (node with two children) is the trickiest. Ensure you correctly identify and remove the in-order successor/predecessor.
*   **In-order Traversal:** Crucial for verifying BST correctness and for sorting-related tasks.
*   **Recursive vs. Iterative:** Both approaches are valid for BST operations. Recursion often leads to cleaner code, while iteration can sometimes be more efficient in terms of function call overhead.
*   **Null Pointers:** Handle `NULL` pointers carefully in all operations to avoid segmentation faults.

### 6. Practice Questions and Exercises

**Question 1:**
Given the following sequence of keys: `10, 5, 15, 2, 7, 12, 18`.
Construct a Binary Search Tree by inserting these keys one by one.

**Answer 1:**
1.  Insert `10`: Root is `10`.
    ```
        10
    ```
2.  Insert `5`: `5 < 10`, left.
    ```
        10
       /
      5
    ```
3.  Insert `15`: `15 > 10`, right.
    ```
        10
       /  \
      5    15
    ```
4.  Insert `2`: `2 < 10` (left), `2 < 5` (left).
    ```
        10
       /  \
      5    15
     /
    2
    ```
5.  Insert `7`: `7 < 10` (left), `7 > 5` (right).
    ```
        10
       /  \
      5    15
     / \
    2   7
    ```
6.  Insert `12`: `12 > 10` (right), `12 < 15` (left).
    ```
        10
       /  \
      5    15
     / \  /
    2   7 12
    ```
7.  Insert `18`: `18 > 10` (right), `18 > 15` (right).
    ```
        10
       /  \
      5    15
     / \  /  \
    2   7 12  18
    ```

**Question 2:**
Perform an in-order traversal on the BST constructed in Question 1. What is the output?

**Answer 2:**
In-order traversal visits the left subtree, then the node, then the right subtree.
*   Start at `10`. Go left to `5`.
*   From `5`, go left to `2`. `2` is a leaf, visit `2`.
*   Back to `5`. Visit `5`.
*   From `5`, go right to `7`. `7` is a leaf, visit `7`.
*   Back to `10`. Visit `10`.
*   From `10`, go right to `15`.
*   From `15`, go left to `12`. `12` is a leaf, visit `12`.
*   Back to `15`. Visit `15`.
*   From `15`, go right to `18`. `18` is a leaf, visit `18`.
*   Back to `15`. Done.
*   Back to `10`. Done.

Output: `2 5 7 10 12 15 18` (This is the sorted sequence of the inserted keys, as expected for an in-order traversal of a BST).

**Question 3:**
Consider a BST where the root has data `50`. Its left child is `30`, and its right child is `70`. The left child of `30` is `20`, and its right child is `40`. The left child of `70` is `60`, and its right child is `80`. Delete the node with data `70` from this BST. Show the resulting tree.

**Answer 3:**
Initial Tree:
```
    50
   /  \
  30   70
 /  \ /  \
20   40 60  80
```
Deleting `70`:
*   `70` has two children: `60` and `80`.
*   Find the in-order successor of `70`. This is the smallest node in the right subtree of `70`, which is `80`.
*   Replace `70`'s data with `80`.
*   Delete the original `80` node from the right subtree of `70`. Since `80` is a leaf node, this is a simple deletion.

Resulting Tree:
```
    50
   /  \
  30   80  <-- 70's data replaced by 80
 /  \ /
20   40 60 <-- Original 80 node removed
```

**Question 4:**
When is the worst-case time complexity of BST operations (search, insert, delete) O(n)? Give an example of a BST structure that would exhibit this behavior.

**Answer 4:**
The worst-case time complexity of BST operations is O(n) when the BST degenerates into a linked list. This occurs when keys are inserted in either strictly ascending or strictly descending order.

Example (inserting `10, 20, 30, 40, 50`):
1.  Insert `10`: `10` (root)
2.  Insert `20`: `20 > 10`, right of `10`
3.  Insert `30`: `30 > 10` (right), `30 > 20`, right of `20`
4.  Insert `40`: `40 > 10` (right), `40 > 20` (right), `40 > 30`, right of `30`
5.  Insert `50`: `50 > 10` (right), `50 > 20` (right), `50 > 30` (right), `50 > 40`, right of `40`

The resulting structure is a degenerate BST resembling a linked list:
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
In such a structure, searching for `50` would require traversing all nodes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 7. Advanced Considerations (Beyond Scope of Basic BSTs but Mentioned in References)

*   **Self-Balancing BSTs:** AVL trees, Red-Black trees guarantee O(log n) performance for all operations by maintaining balance. *Advanced Data Structures* by Brass might touch upon these.
*   **Comparison of BSTs to other data structures:** Comparing BST performance (O(log n) average) to arrays (O(n) search, O(1) access) or linked lists (O(n) search, insertion/deletion at known positions O(1)) is important. *Fundamentals of Data Structures* and *Classic Data Structures* often include such comparisons.

This concludes the detailed study notes for Binary Search Tree Operations. Remember to practice implementing these operations to solidify your understanding.