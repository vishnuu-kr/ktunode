---
title: "Binary Search Trees - Binary Search Tree Operations"
subject: "DATA STRUCTURES AND ALGORITHMS"
module: "Module 3: Trees and Graphs"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ac41"
status: "completed"
scrapedAt: "2026-05-20T16:23:03.476Z"
---
## DATA STRUCTURES AND ALGORITHMS - Module 3: Trees and Graphs - Binary Search Trees: Binary Search Tree Operations

**Module:** Module 3: Trees and Graphs
**Topic:** Binary Search Trees - Binary Search Tree Operations
**Description:** Exploring fundamental operations performed on Binary Search Trees (BSTs).

**Learning Outcomes:**

*   Understand the properties and characteristics of a Binary Search Tree.
*   Implement common BST operations: insertion, deletion, search, minimum, maximum, successor, and predecessor.
*   Analyze the time complexity of each BST operation.
*   Apply BSTs to solve real-world problems.

### 1. Introduction to Binary Search Trees (BSTs)

*   **Definition:** A Binary Search Tree (BST) is a node-based binary tree data structure which has the following properties:
    *   The left subtree of a node contains only nodes with keys *less than* the node's key.
    *   The right subtree of a node contains only nodes with keys *greater than* the node's key.
    *   Both the left and right subtrees must also be binary search trees.
    *   There must be no duplicate nodes. (Although some implementations allow them with special handling)
*   **Key Concepts:**
    *   **Root:** The topmost node in the tree.
    *   **Node:**  An element in the tree containing a key (value) and pointers to its left and right children.
    *   **Left Child:** The child node to the left of a node.
    *   **Right Child:** The child node to the right of a node.
    *   **Parent:** The node that points to a child node.
    *   **Leaf:** A node with no children.
    *   **Subtree:** A tree formed from a node and its descendants.
    *   **Height:** The length of the longest path from the root to a leaf.
    *   **Depth:** The length of the path from the root to a particular node.
*   **Example:**

    ```
          8
         / \
        3   10
       / \    \
      1   6    14
         / \   /
        4   7 13
    ```

    This is a valid BST.

### 2. Fundamental BST Operations

#### 2.1. Search

*   **Goal:**  Find a node with a specific key in the BST.
*   **Algorithm:**
    1.  Start at the root.
    2.  Compare the target key with the current node's key.
    3.  If the target key is equal to the current node's key, the search is successful.
    4.  If the target key is less than the current node's key, search in the left subtree recursively.
    5.  If the target key is greater than the current node's key, search in the right subtree recursively.
    6.  If the search reaches a null node (empty tree or no matching node), the key is not present in the BST.
*   **Example (Searching for key 6 in the tree above):**
    1.  Start at root (8). 6 < 8, go left.
    2.  Node is 3. 6 > 3, go right.
    3.  Node is 6. 6 == 6, found!
*   **Code (Python):**

    ```python
    class Node:
        def __init__(self, key):
            self.key = key
            self.left = None
            self.right = None

    def search(root, key):
        if root is None or root.key == key:
            return root
        if key < root.key:
            return search(root.left, key)
        return search(root.right, key)
    ```

*   **Time Complexity:**  O(h) in the average and worst case where 'h' is the height of the tree. In the best case (root is the target), it's O(1). In a balanced BST, h is log(n), so O(log n), and in a skewed BST, h is n, hence O(n).

#### 2.2. Insertion

*   **Goal:** Add a new node with a specific key to the BST while maintaining the BST properties.
*   **Algorithm:**
    1.  Start at the root.
    2.  If the tree is empty, create a new node and make it the root.
    3.  Compare the new key with the current node's key.
    4.  If the new key is less than the current node's key, move to the left child.
    5.  If the new key is greater than the current node's key, move to the right child.
    6.  Repeat steps 3-5 until you reach a null pointer (empty spot).
    7.  Create a new node with the new key and insert it as the left or right child of the last node, based on the comparison in the previous step.
*   **Example (Inserting key 5 into the tree from Section 1):**
    1.  Start at root (8). 5 < 8, go left.
    2.  Node is 3. 5 > 3, go right.
    3.  Node is 6. 5 < 6, go left.
    4.  6's left child is None. Insert new node with key 5 as 6's left child.

*   **Code (Python):**

    ```python
    def insert(root, key):
        if root is None:
            return Node(key)
        if key < root.key:
            root.left = insert(root.left, key)
        else:
            root.right = insert(root.right, key)
        return root
    ```

*   **Time Complexity:** O(h) on average and in the worst case, where h is the height of the tree (similar to Search). O(log n) for balanced trees and O(n) for skewed trees.

#### 2.3. Deletion

*   **Goal:** Remove a node with a specific key from the BST while maintaining the BST properties.
*   **Algorithm:**
    1.  Search for the node to be deleted.
    2.  Consider three cases:
        *   **Case 1: Node to be deleted is a leaf node (no children).**
            *   Simply remove the node. Set the parent's pointer to null.
        *   **Case 2: Node to be deleted has one child.**
            *   Replace the node with its child.
            *   Update the parent's pointer to point to the node's child.
        *   **Case 3: Node to be deleted has two children.**
            *   Find the inorder successor (smallest key in the right subtree) *or* the inorder predecessor (largest key in the left subtree) of the node.
            *   Replace the node's key with the inorder successor's (or predecessor's) key.
            *   Delete the inorder successor (or predecessor) node (which will fall under case 1 or 2). This ensures that the BST property is maintained.
*   **Example:**
    *   **Deleting 1 (leaf node):** Simply remove it. 3's left pointer becomes None.
    *   **Deleting 6 (one child):** Replace 6 with 4.  3's right pointer now points to 4.  4's right pointer now points to 7.
    *   **Deleting 8 (two children):**
        *   Inorder successor is 10.
        *   Replace 8 with 10.
        *   Delete the original 10 (which is now a leaf).
        *   Alternatively, the inorder predecessor is 7. Replace 8 with 7, then delete the original 7.
*   **Code (Python):**

    ```python
    def min_value_node(node):
        current = node
        while(current.left is not None):
            current = current.left
        return current

    def delete_node(root, key):
        if root is None:
            return root
        if key < root.key:
            root.left = delete_node(root.left, key)
        elif key > root.key:
            root.right = delete_node(root.right, key)
        else:
            if root.left is None:
                temp = root.right
                root = None
                return temp
            elif root.right is None:
                temp = root.left
                root = None
                return temp
            temp = min_value_node(root.right)
            root.key = temp.key
            root.right = delete_node(root.right, temp.key)
        return root
    ```

*   **Time Complexity:** O(h) on average and in the worst case, where h is the height of the tree (similar to Search and Insert). In balanced tree O(log n), in skewed tree O(n). Finding the inorder successor/predecessor also takes O(h) time.

#### 2.4. Minimum and Maximum

*   **Goal:** Find the node with the smallest (minimum) or largest (maximum) key in the BST.
*   **Algorithm:**
    *   **Minimum:** Starting from the root, keep going to the left child until you reach a node whose left child is null. This node contains the minimum key.
    *   **Maximum:** Starting from the root, keep going to the right child until you reach a node whose right child is null. This node contains the maximum key.
*   **Example:**  In the example tree, the minimum is 1, and the maximum is 14.
*   **Code (Python):**

    ```python
    def minimum(root):
        current = root
        while(current is not None and current.left is not None):
            current = current.left
        return current

    def maximum(root):
        current = root
        while(current is not None and current.right is not None):
            current = current.right
        return current
    ```

*   **Time Complexity:** O(h) in the worst case, where h is the height of the tree. O(log n) for balanced trees, O(n) for skewed trees.

#### 2.5. Successor and Predecessor

*   **Goal:** Find the node with the next higher key (successor) or next lower key (predecessor) than a given node.
*   **Successor Algorithm:**
    1.  If the node has a right subtree: The successor is the minimum node in the right subtree.
    2.  If the node does *not* have a right subtree: Go up the tree until you find a node that is the *left child* of its parent. That parent is the successor.  If you reach the root without finding such a node, the node has no successor.
*   **Predecessor Algorithm:**
    1.  If the node has a left subtree: The predecessor is the maximum node in the left subtree.
    2.  If the node does *not* have a left subtree: Go up the tree until you find a node that is the *right child* of its parent. That parent is the predecessor. If you reach the root without finding such a node, the node has no predecessor.
*   **Example:**
    *   In the example tree, the successor of 6 is 7.  The predecessor of 6 is 4.
    *   The successor of 13 is 14.
    *   The predecessor of 1 is None.
*   **Code (Python):**

    ```python
    def inorder_successor(root, node):
      # Case 1: Node has right subtree
      if node.right:
          return minimum(node.right)

      # Case 2: Node has no right subtree
      successor = None
      ancestor = root
      while ancestor != node:
          if node.key < ancestor.key:
              successor = ancestor
              ancestor = ancestor.left
          else:
              ancestor = ancestor.right
      return successor

    def inorder_predecessor(root, node):
      # Case 1: Node has left subtree
      if node.left:
          return maximum(node.left)

      # Case 2: Node has no left subtree
      predecessor = None
      ancestor = root
      while ancestor != node:
          if node.key > ancestor.key:
              predecessor = ancestor
              ancestor = ancestor.right
          else:
              ancestor = ancestor.left
      return predecessor
    ```

*   **Time Complexity:** O(h) in the worst case, where h is the height of the tree. O(log n) for balanced trees, O(n) for skewed trees.

### 3. Applications of Binary Search Trees

*   **Implementing Ordered Sets and Maps:** BSTs are highly efficient for maintaining sorted data.
*   **Indexing Data in Databases:** They help speed up data retrieval.
*   **Symbol Tables in Compilers:**  Used for storing and looking up identifiers.
*   **Priority Queues:**  Although heaps are more commonly used, BSTs can be adapted.
*   **Spell Checkers:**  Storing a dictionary of words for quick lookup.

### 4. Practice Questions and Exercises

1.  **Draw a BST by inserting the following elements in the given order: 50, 30, 20, 40, 70, 60, 80.**

    *   **Answer:**

        ```
              50
             /  \
            30   70
           /  \  /  \
          20  40 60  80
        ```

2.  **Using the BST from question 1, delete the node with key 30. Show the resulting tree.**

    *   **Answer:** Since 30 has two children, we can either replace it with its inorder successor (40) or inorder predecessor (20).  Here's the tree if we replace it with 40:

        ```
              50
             /  \
            40   70
           /     /  \
          20    60  80
        ```

3.  **Write a function (in pseudocode or Python) to find the height of a BST.**

    *   **Answer (Python):**

        ```python
        def height(root):
            if root is None:
                return 0
            else:
                left_height = height(root.left)
                right_height = height(root.right)

                return max(left_height, right_height) + 1
        ```

4.  **What is the time complexity of inserting 'n' elements into an empty BST? Consider both the best-case (balanced tree) and worst-case (skewed tree) scenarios.**

    *   **Answer:**
        *   **Best-case (balanced tree):** O(n log n). Each insertion takes O(log n) time, and we have 'n' insertions.
        *   **Worst-case (skewed tree):** O(n^2).  The first insertion takes O(1), the second O(2), the third O(3), and so on, leading to a sum of 1 + 2 + 3 + ... + n = n(n+1)/2 which is O(n^2).

5.  **Explain how a BST can be used to implement a simple dictionary (mapping keys to values).**

    *   **Answer:**  Each node in the BST can store a key-value pair instead of just a key.  The BST properties are maintained based on the keys. The search operation can then be used to find the value associated with a given key. Insertion adds new key-value pairs, and deletion removes them.

### 5. Important Points to Remember

*   BST operations' efficiency is heavily dependent on the tree's height. Balanced BSTs (e.g., AVL trees, Red-Black trees) guarantee O(log n) performance for search, insertion, and deletion.
*   Unbalanced BSTs can degrade to O(n) performance in the worst case, making them less efficient than other data structures like hash tables for certain applications.
*   Understanding the three deletion cases is crucial for correctly implementing the delete operation and maintaining the BST properties.
*   Inorder traversal of a BST will produce a sorted list of the keys. This is a key property used in many applications.
