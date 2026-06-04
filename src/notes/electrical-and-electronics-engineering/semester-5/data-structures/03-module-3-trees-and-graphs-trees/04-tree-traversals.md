---
title: "Tree Traversals"
subject: "DATA STRUCTURES"
module: "Module 3: Trees and Graphs: Trees"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f363ec"
status: "completed"
scrapedAt: "2026-05-23T16:20:45.392Z"
---
# Module 3: Trees and Graphs: Trees - Topic: Tree Traversals

## 1. Introduction to Tree Traversals

Tree traversals are systematic ways to visit (process) all the nodes in a tree exactly once. These traversals are fundamental operations for manipulating and extracting information from trees. They are essential for tasks like searching, copying, printing, and analyzing tree structures.

**Key Concept:** The order in which nodes are visited defines the type of traversal.

## 2. Objectives of Tree Traversals

*   **Accessing Data:** To access the data stored in each node of the tree.
*   **Manipulation:** To perform operations on nodes, such as printing, modifying, or deleting.
*   **Copying:** To create a replica of the tree.
*   **Searching:** To find a specific node within the tree.
*   **Algorithm Design:** To serve as building blocks for more complex tree-based algorithms.

**Course Outcome Alignment:**
*   **CO3 (K3):** Understanding tree traversals is crucial for designing algorithms that utilize trees for various applications, such as file system navigation, expression evaluation, and database indexing.

## 3. Types of Tree Traversals

Tree traversals are typically categorized based on the order in which the node itself is visited relative to its children. For a binary tree, the common traversals are:

*   **Preorder Traversal (NLR - Node, Left, Right)**
*   **Inorder Traversal (LNR - Left, Node, Right)**
*   **Postorder Traversal (LRN - Left, Right, Node)**
*   **Level Order Traversal (Breadth-First Traversal)**

**Reference:**
*   **Horowitz, Sahni, Anderson-Freed:** Chapter 5 introduces binary trees and their traversals.
*   **Samanta:** Chapter 5 covers tree traversals in detail.

---

### 3.1. Preorder Traversal (NLR)

**Definition:** In preorder traversal, the current node is visited first, followed by its left subtree, and then its right subtree.

**Algorithm (Recursive):**

```
Preorder(node):
  if node is not NULL:
    Visit(node)          // Process the current node
    Preorder(node.left)  // Traverse left subtree
    Preorder(node.right) // Traverse right subtree
```

**Mnemonic:** **N**ode **L**eft **R**ight

**Example:**

Consider the following binary tree:

```
      A
     / \
    B   C
   / \   \
  D   E   F
```

**Preorder Traversal:** A -> B -> D -> E -> C -> F

**Use Cases:**
*   **Copying a tree:** Preorder traversal can be used to create an exact copy of a binary tree.
*   **Expression trees:** To get a prefix expression from an expression tree.

---

### 3.2. Inorder Traversal (LNR)

**Definition:** In inorder traversal, the left subtree is visited first, followed by the current node, and then its right subtree.

**Algorithm (Recursive):**

```
Inorder(node):
  if node is not NULL:
    Inorder(node.left)   // Traverse left subtree
    Visit(node)          // Process the current node
    Inorder(node.right)  // Traverse right subtree
```

**Mnemonic:** **L**eft **N**ode **R**ight

**Example:**

Using the same binary tree as above:

```
      A
     / \
    B   C
   / \   \
  D   E   F
```

**Inorder Traversal:** D -> B -> E -> A -> C -> F

**Use Cases:**
*   **Binary Search Trees (BSTs):** Inorder traversal of a BST visits nodes in ascending order of their keys. This is a very important property.
*   **Expression trees:** To get an infix expression from an expression tree.

**Course Outcome Alignment:**
*   **CO3 (K3):** Understanding inorder traversal is crucial for working with BSTs, a key application of trees.
*   **CO4 (K3):** The ordered nature of inorder traversal relates to sorting concepts.

**Important Point to Remember:** Inorder traversal of a Binary Search Tree (BST) results in the nodes being visited in sorted order.

---

### 3.3. Postorder Traversal (LRN)

**Definition:** In postorder traversal, the left subtree is visited first, followed by its right subtree, and then the current node.

**Algorithm (Recursive):**

```
Postorder(node):
  if node is not NULL:
    Postorder(node.left)  // Traverse left subtree
    Postorder(node.right) // Traverse right subtree
    Visit(node)           // Process the current node
```

**Mnemonic:** **L**eft **R**ight **N**ode

**Example:**

Using the same binary tree as above:

```
      A
     / \
    B   C
   / \   \
  D   E   F
```

**Postorder Traversal:** D -> E -> B -> F -> C -> A

**Use Cases:**
*   **Deleting a tree:** Postorder traversal is ideal for deleting a tree because it visits children before the parent, ensuring that children are deallocated before their parent.
*   **Expression trees:** To get a postfix expression from an expression tree.

**Reference:**
*   **Gilberg & Forouzan:** Chapter 6 provides a good explanation of these traversals with pseudocode.

---

### 3.4. Level Order Traversal (Breadth-First Traversal)

**Definition:** In level order traversal, nodes are visited level by level, from left to right within each level. This traversal uses a queue.

**Algorithm (Iterative using a Queue):**

```
LevelOrder(root):
  if root is NULL:
    return

  create a queue Q
  enqueue(Q, root)

  while Q is not empty:
    current_node = dequeue(Q)
    Visit(current_node) // Process the current node

    if current_node.left is not NULL:
      enqueue(Q, current_node.left)
    if current_node.right is not NULL:
      enqueue(Q, current_node.right)
```

**Example:**

Using the same binary tree as above:

```
      A
     / \
    B   C
   / \   \
  D   E   F
```

**Level Order Traversal:** A -> B -> C -> D -> E -> F

**Use Cases:**
*   **Finding shortest paths in unweighted graphs (though this is more for graphs, trees are a special case).**
*   **Traversing trees where the level of nodes is important.**
*   **Level-by-level processing.**

**Reference:**
*   **Aho, Hopcroft, Ullman:** Chapter 2 discusses tree traversal algorithms, including level order.

---

## 4. Traversing Non-Binary Trees

The concepts of preorder, inorder, and postorder can be extended to general trees (trees with no limit on the number of children per node). However, the definition of "left" and "right" subtrees needs to be adapted.

For a general tree, traversals are often defined as:

*   **Preorder:** Visit the root, then recursively traverse each child subtree from left to right.
*   **Postorder:** Recursively traverse each child subtree from left to right, then visit the root.

**Example (General Tree):**

```
      A
     /|\
    B C D
   /|   |
  E F   G
```

*   **Preorder:** A -> B -> E -> F -> C -> D -> G
*   **Postorder:** E -> F -> B -> C -> G -> D -> A

**Note:** Inorder traversal for general trees is less commonly defined and can be ambiguous. It usually implies visiting the first child, then the root, then the remaining children.

---

## 5. Converting Tree Traversals (Reconstruction)

Given two of the three traversals (preorder, inorder, postorder), it's often possible to reconstruct the original binary tree.

*   **Inorder and Preorder:** Can uniquely reconstruct a binary tree.
*   **Inorder and Postorder:** Can uniquely reconstruct a binary tree.
*   **Preorder and Postorder:** Cannot uniquely reconstruct a binary tree without additional information.

**Algorithm Idea (Inorder and Preorder Reconstruction):**

1.  The first node in the preorder traversal is the root of the tree.
2.  Find this root node in the inorder traversal. All nodes to the left of the root in inorder form the left subtree, and all nodes to the right form the right subtree.
3.  Recursively apply this process to the left and right subtrees using the corresponding portions of the preorder and inorder traversals.

**Course Outcome Alignment:**
*   **CO3 (K3):** This demonstrates a practical application of understanding traversal properties in rebuilding tree structures.

---

## 6. Practice Questions and Exercises

**Question 1:**
Given the following binary tree, perform a preorder, inorder, and postorder traversal:

```
      10
     /  \
    5    15
   / \     \
  2   7     18
```

**Answer 1:**
*   **Preorder:** 10 -> 5 -> 2 -> 7 -> 15 -> 18
*   **Inorder:** 2 -> 5 -> 7 -> 10 -> 15 -> 18
*   **Postorder:** 2 -> 7 -> 5 -> 18 -> 15 -> 10

**Question 2:**
What traversal is typically used to delete a binary tree from memory, and why?

**Answer 2:**
Postorder traversal. This is because it visits the children before the parent node. When deleting nodes, you want to deallocate the memory for child nodes before deallocating the parent node's memory to avoid dangling pointers or memory leaks.

**Question 3:**
If you are given the inorder traversal of a Binary Search Tree as `2, 5, 7, 10, 15, 18` and the preorder traversal as `10, 5, 2, 7, 15, 18`, reconstruct the binary tree.

**Answer 3:**
The tree structure is:
```
      10
     /  \
    5    15
   / \     \
  2   7     18
```
*   Root is `10` (first in preorder).
*   In inorder, `10` is at index 3. Left of `10` is `2, 5, 7` (left subtree). Right of `10` is `15, 18` (right subtree).
*   For the left subtree (`2, 5, 7`): Preorder part is `5, 2, 7`. Root is `5`. Inorder `5` is at index 1. Left of `5` is `2` (left child). Right of `5` is `7` (right child).
*   For the right subtree (`15, 18`): Preorder part is `15, 18`. Root is `15`. Inorder `15` is at index 4. Left of `15` is empty. Right of `15` is `18` (right child).

**Question 4:**
Which traversal is guaranteed to visit nodes in ascending order of keys in a Binary Search Tree?

**Answer 4:**
Inorder traversal.

**Question 5:**
Describe how to perform a level order traversal of a binary tree and provide its time complexity.

**Answer 5:**
Level order traversal visits nodes level by level using a queue.
1. Enqueue the root.
2. While the queue is not empty, dequeue a node, process it, and enqueue its left and right children (if they exist).
**Time Complexity:** O(N), where N is the number of nodes in the tree. Each node is enqueued and dequeued exactly once, and each edge is traversed once.

---

## 7. Important Points to Remember

*   **Traversal Order is Key:** The specific order of visiting nodes defines the type of traversal (preorder, inorder, postorder, level order).
*   **Recursive vs. Iterative:** Preorder, inorder, and postorder are naturally recursive, but can also be implemented iteratively using a stack. Level order is naturally iterative using a queue.
*   **Applications of Traversals:** Each traversal has specific use cases, such as copying, deleting, sorting, and expression evaluation.
*   **BST Property:** Inorder traversal of a BST yields nodes in sorted order.
*   **Tree Reconstruction:** Combinations of inorder with preorder or postorder traversals can reconstruct a unique binary tree.
*   **General Tree Traversals:** Preorder and postorder are well-defined for general trees, visiting children before or after the root, respectively.

---

## 8. Conclusion

Tree traversals are fundamental algorithms that allow us to systematically access and process data within tree structures. Understanding the nuances of preorder, inorder, postorder, and level order traversals is essential for effectively utilizing trees in various data structure and algorithm design scenarios, directly contributing to **CO3 (K3)**. The specific properties of traversals, like the sorted output of inorder on BSTs, also connect to sorting concepts, aligning with **CO4 (K3)**.

---
**(End of Study Notes)**
