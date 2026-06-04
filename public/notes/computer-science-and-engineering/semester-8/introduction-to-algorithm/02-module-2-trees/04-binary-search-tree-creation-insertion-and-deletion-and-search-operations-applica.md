---
title: "Binary search tree – creation, insertion and deletion and search operations, applications"
subject: "INTRODUCTION TO ALGORITHM"
module: "Module 2: Trees "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cbc8"
status: "completed"
scrapedAt: "2026-05-20T17:25:10.097Z"
---
# Introduction to Algorithms - Module 2: Trees

## Topic: Binary Search Tree (BST)

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Define a Binary Search Tree (BST).
*   Explain the properties of a BST.
*   Understand the process of creating a BST.
*   Perform insertion operations on a BST.
*   Perform deletion operations on a BST.
*   Implement search operations on a BST.
*   Identify and describe various applications of BSTs.

---

### 1. What is a Binary Search Tree (BST)?

A **Binary Search Tree (BST)** is a **binary tree** data structure with a special ordering property:

*   For any given node `N`:
    *   All keys in the **left subtree** of `N` are **less than** the key of `N`.
    *   All keys in the **right subtree** of `N` are **greater than** the key of `N`.
*   This property must hold true recursively for every node in the tree.
*   **No duplicate keys** are typically allowed in a standard BST.

**Key Concepts:**

*   **Binary Tree:** A tree data structure where each node has at most two children, referred to as the left child and the right child.
*   **Root:** The topmost node of the tree.
*   **Node:** An element in the tree, containing data (key) and pointers to its children.
*   **Key:** The value stored in a node, used for ordering and searching.
*   **Left Child:** The child node to the left of a parent node.
*   **Right Child:** The child node to the right of a parent node.
*   **Leaf Node:** A node with no children.
*   **Subtree:** A tree formed by a node and all its descendants.

**Example:**

Consider the following set of numbers: {50, 30, 70, 20, 40, 60, 80}

A possible BST constructed from these numbers:

```
        50
       /  \
      30   70
     / \   / \
    20  40 60  80
```

**Why is this a BST?**

*   For node 50: Left subtree (30, 20, 40) are all < 50. Right subtree (70, 60, 80) are all > 50.
*   For node 30: Left subtree (20) is < 30. Right subtree (40) is > 30.
*   And so on for every node.

---

### 2. Creating a BST

A BST is typically created by **inserting** elements one by one. The structure of the BST depends on the order of insertion.

**How it works:**

1.  Start with an **empty tree**.
2.  The first element inserted becomes the **root**.
3.  For subsequent insertions:
    *   Start at the root.
    *   Compare the new key with the current node's key.
    *   If the new key is **less than** the current node's key, go to the **left child**.
    *   If the new key is **greater than** the current node's key, go to the **right child**.
    *   If the appropriate child (left or right) is **empty**, insert the new node there.
    *   If the appropriate child is **not empty**, repeat the comparison process with that child.

---

### 3. Insertion Operation

Inserting a new key into a BST maintains the BST property.

**Algorithm:**

```
function insert(root, key):
  if root is null:
    create a new node with key and return it
  else if key < root.key:
    root.left = insert(root.left, key)
  else if key > root.key:
    root.right = insert(root.right, key)
  // If key is equal to root.key, we typically do nothing or handle duplicates as per requirements.
  return root
```

**Example:** Inserting 35 into the BST above:

*   Start at root (50). 35 < 50, go left.
*   Current node is 30. 35 > 30, go right.
*   Current node is 40. 35 < 40, go left.
*   Left child of 40 is null. Insert 35 as the left child of 40.

The BST becomes:

```
        50
       /  \
      30   70
     / \   / \
    20  40 60  80
       /
      35
```

---

### 4. Search Operation

Searching for a key in a BST leverages its ordered structure for efficient retrieval.

**Algorithm:**

```
function search(root, key):
  if root is null or root.key == key:
    return root // If found or tree is empty
  if key < root.key:
    return search(root.left, key) // Search in the left subtree
  else:
    return search(root.right, key) // Search in the right subtree
```

**Example:** Searching for 60 in the BST:

*   Start at root (50). 60 > 50, go right.
*   Current node is 70. 60 < 70, go left.
*   Current node is 60. 60 == 60. Key found! Return the node containing 60.

**Time Complexity:**

*   **Best Case:** O(1) (key is at the root)
*   **Average Case:** O(log n) (for a balanced tree)
*   **Worst Case:** O(n) (for a skewed tree, like a linked list)

---

### 5. Deletion Operation

Deleting a node from a BST can be more complex, as it requires maintaining the BST property. There are three main cases for the node to be deleted:

**Case 1: Node to be deleted is a Leaf Node (has no children)**

*   Simply remove the node.

**Case 2: Node to be deleted has only one child**

*   Replace the node with its only child. The child node inherits the parent's position.

**Case 3: Node to be deleted has two children**

*   This is the most complex case. We need to find a replacement node that can take the deleted node's place while preserving the BST property. Two common strategies are:
    *   **Inorder Successor:** Find the smallest key in the **right subtree** of the node to be deleted. This is the next largest key in the BST.
    *   **Inorder Predecessor:** Find the largest key in the **left subtree** of the node to be deleted. This is the next smallest key in the BST.

    Let's use the **Inorder Successor** strategy:
    1.  Find the inorder successor (`successor`) of the node to be deleted.
    2.  Copy the `successor`'s key to the node to be deleted.
    3.  Recursively delete the `successor` from the right subtree (since the successor will have at most one right child).

**Algorithm (Conceptual for Deletion of Node with Two Children using Inorder Successor):**

1.  Find the node to delete.
2.  If it has no children, delete it.
3.  If it has one child, replace it with that child.
4.  If it has two children:
    a.  Find the minimum node in its right subtree (this is the inorder successor).
    b.  Copy the key of the inorder successor to the node to be deleted.
    c.  Delete the inorder successor node from the right subtree.

**Helper Function: `findMin(node)`**
```
function findMin(node):
  current = node
  while current.left is not null:
    current = current.left
  return current
```

**Example:** Deleting 30 from the BST:

```
        50
       /  \
      30   70
     / \   / \
    20  40 60  80
       /
      35
```

*   We want to delete node 30. It has two children (20 and 40).
*   Find the inorder successor of 30. Go to the right subtree of 30 (node 40). The minimum in this subtree is 40.
*   Copy 40's key to the node with 30. So, node 30 now becomes 40.
*   Now, we need to delete the original node with key 40 from the right subtree of the original 30. The node 40 has only one child (35).
*   Replace node 40 with its child 35.

The BST becomes:

```
        50
       /  \
      40   70
     /     / \
    20    60  80
   /
  35
```

**Important Note:** The actual implementation of deletion involves careful pointer manipulation and handling null cases.

---

### 6. Applications of Binary Search Trees

BSTs are widely used in various applications due to their efficient search, insertion, and deletion capabilities (on average).

*   **Symbol Tables:** Used in compilers and interpreters to store and retrieve information about identifiers (variables, function names, etc.). Each identifier is a key, and its associated information (type, scope, memory location) is the value.
*   **Database Indexing:** BSTs (or their balanced variants like B-trees) are fundamental for creating indexes in databases, allowing for quick retrieval of records based on key values.
*   **Sets and Maps:** BSTs can be used to implement abstract data types like sets (collections of unique elements) and maps (key-value pairs).
*   **Dictionary Implementations:** Similar to maps, BSTs can be used to build dictionaries where words are keys and their definitions are values.
*   **Routing Algorithms:** In some network routing scenarios, BSTs can be used to store and efficiently look up routing information.
*   **Implementing Other Data Structures:** BSTs can serve as a building block for more complex data structures.

---

### Practice Questions

1.  **Definition and Properties:**
    *   What are the two primary properties that define a Binary Search Tree?
    *   Can a BST contain duplicate keys? Explain.

2.  **Creation and Insertion:**
    *   Insert the following keys into an initially empty BST in the given order: `10, 5, 15, 3, 7, 12, 18`. Draw the resulting BST.
    *   What is the order of nodes visited if you perform an inorder traversal on the BST you created in the previous question?

3.  **Search:**
    *   Using the BST from Question 2, trace the steps to search for the key `7`.
    *   Using the BST from Question 2, trace the steps to search for the key `20` (which is not present).

4.  **Deletion:**
    *   Using the BST from Question 2, delete the node with key `5`. Explain your steps.
    *   Using the BST from Question 2, delete the node with key `15`. Explain your steps, including finding the inorder successor.

5.  **Applications:**
    *   Describe one real-world application where a BST (or a related structure) is effectively used and explain *why* it is suitable.

---

### Answers to Practice Questions

1.  **Definition and Properties:**
    *   **Property 1:** For any node `N`, all keys in its left subtree are less than the key of `N`.
    *   **Property 2:** For any node `N`, all keys in its right subtree are greater than the key of `N`.
    *   **Duplicate Keys:** Typically, a standard BST does not allow duplicate keys. If a duplicate key is encountered during insertion, it's usually ignored or handled by incrementing a count associated with the node.

2.  **Creation and Insertion:**
    *   **Insertion Order:** `10, 5, 15, 3, 7, 12, 18`
    *   **Resulting BST:**
        ```
              10
             /  \
            5    15
           / \   / \
          3   7 12  18
        ```
    *   **Inorder Traversal:** `3, 5, 7, 10, 12, 15, 18` (This traversal visits nodes in ascending order of their keys).

3.  **Search:**
    *   **Searching for 7:**
        1.  Start at root (10). 7 < 10, go left.
        2.  Current node is 5. 7 > 5, go right.
        3.  Current node is 7. 7 == 7. Found!
    *   **Searching for 20:**
        1.  Start at root (10). 20 > 10, go right.
        2.  Current node is 15. 20 > 15, go right.
        3.  Current node is 18. 20 > 18, go right.
        4.  Right child of 18 is null. Key 20 not found.

4.  **Deletion:**
    *   **Deleting 5:** Node 5 is a leaf node (no children).
        1.  Locate node 5.
        2.  Since it's a leaf, remove it. The left child pointer of 10 will now be null.
        *   Resulting BST:
            ```
                  10
                 /  \
                null 15
                   / \
                  12  18
            ```
    *   **Deleting 15:** Node 15 has two children (12 and 18).
        1.  Locate node 15.
        2.  Find the inorder successor of 15. Go to the right subtree of 15 (node 18). The minimum node in this subtree is 18 itself.
        3.  Copy the key of the inorder successor (18) to the node to be deleted (15). So, node 15 now becomes 18.
        4.  Delete the inorder successor (original node 18) from the right subtree of 15. Node 18 is a leaf node, so it's simply removed.
        *   Resulting BST:
            ```
                  10
                 /  \
                5    18
               / \   /
              3   7 12
            ```

5.  **Applications:**
    *   **Symbol Tables in Compilers:** BSTs are suitable because compilers need to quickly:
        *   **Insert** new identifiers (variables, functions) as they are encountered.
        *   **Search** for existing identifiers to check their declaration, type, and scope.
        *   **Delete** identifiers when they go out of scope (though sometimes symbol tables are implemented with more complex lifetime management).
        The O(log n) average time complexity for these operations makes them efficient for large programs.

---

### Important Points to Remember:

*   **BST Property is Key:** Always ensure that the left subtree keys are strictly less than the parent key, and right subtree keys are strictly greater.
*   **Order of Insertion Matters:** The shape and balance of a BST depend heavily on the order in which elements are inserted. Inserting elements in sorted order will result in a degenerate tree (like a linked list), leading to O(n) performance.
*   **Balanced BSTs:** For guaranteed O(log n) performance for all operations, balanced BSTs like AVL trees or Red-Black trees are used. These trees automatically rebalance themselves after insertions and deletions.
*   **Deletion Complexity:** Deleting a node with two children is the most intricate operation and requires careful handling of the inorder successor/predecessor.
*   **Inorder Traversal:** An inorder traversal of a BST always yields the keys in ascending sorted order.
