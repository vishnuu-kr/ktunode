---
title: "Tree Traversals"
subject: "DATA STRUCTURES"
module: "Module 3: Trees and Graphs"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bea3"
status: "completed"
scrapedAt: "2026-05-20T16:52:01.945Z"
---
# Module 3: Trees and Graphs - Tree Traversals

## Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Understand the purpose and importance of tree traversals.
*   Describe and differentiate between Depth-First Search (DFS) and Breadth-First Search (BFS) traversal strategies.
*   Explain and implement Pre-order, In-order, and Post-order traversals for binary trees.
*   Explain and implement Level-order traversal for binary trees.
*   Understand the applications of different tree traversal techniques.

---

## 1. Introduction to Tree Traversals

### What is Tree Traversal?

Tree traversal is the process of visiting each node in a tree exactly once in a systematic way. It's essential for performing operations on trees, such as searching for a specific element, printing the tree's contents, or copying the tree structure.

### Why is Tree Traversal Important?

*   **Accessing Data:** To retrieve or process the data stored in each node.
*   **Searching:** To locate a specific node within the tree.
*   **Printing/Displaying:** To output the tree's structure or data in a meaningful order.
*   **Copying/Cloning:** To create an identical copy of the tree.
*   **Expression Evaluation:** In expression trees, traversals help evaluate the expression.

### Key Concepts

*   **Root:** The topmost node of the tree.
*   **Node:** A component of the tree that contains data and potentially references to its children.
*   **Child:** A node directly connected to another node (the parent) and below it in the tree hierarchy.
*   **Parent:** A node directly connected to another node (the child) and above it in the tree hierarchy.
*   **Leaf Node:** A node with no children.
*   **Subtree:** A tree formed by a node and all its descendants.

---

## 2. Traversal Strategies: Depth-First Search (DFS) vs. Breadth-First Search (BFS)

There are two primary strategies for traversing trees:

### 2.1 Depth-First Search (DFS)

*   **Concept:** Explores as far down a branch as possible before backtracking. It goes deep first.
*   **Mechanism:** Typically implemented using recursion or a stack.
*   **Order:** Visits nodes in a "depth-first" manner.

### 2.2 Breadth-First Search (BFS)

*   **Concept:** Explores all nodes at the current depth level before moving to the next depth level. It goes "wide" first.
*   **Mechanism:** Typically implemented using a queue.
*   **Order:** Visits nodes level by level.

---

## 3. Depth-First Traversals for Binary Trees

These traversals visit the root node at different points relative to visiting its left and right subtrees.

### 3.1 Pre-order Traversal (Root, Left, Right)

*   **Order of Visit:**
    1.  Visit the **root** node.
    2.  Traverse the **left** subtree recursively.
    3.  Traverse the **right** subtree recursively.
*   **Pseudocode:**
    ```
    preOrder(node):
        if node is not null:
            visit(node)          // Process the current node
            preOrder(node.left)  // Traverse left subtree
            preOrder(node.right) // Traverse right subtree
    ```
*   **Use Cases:**
    *   Copying a tree.
    *   Prefix notation of an expression tree (e.g., `+ * A B C` for `(A*B) + C`).
*   **Example:**
    Consider the following binary tree:

    ```
          1
         / \
        2   3
       / \
      4   5
    ```

    *   **Pre-order traversal:** 1, 2, 4, 5, 3

### 3.2 In-order Traversal (Left, Root, Right)

*   **Order of Visit:**
    1.  Traverse the **left** subtree recursively.
    2.  Visit the **root** node.
    3.  Traverse the **right** subtree recursively.
*   **Pseudocode:**
    ```
    inOrder(node):
        if node is not null:
            inOrder(node.left)   // Traverse left subtree
            visit(node)          // Process the current node
            inOrder(node.right)  // Traverse right subtree
    ```
*   **Use Cases:**
    *   Printing the elements of a Binary Search Tree (BST) in ascending order.
    *   Infix notation of an expression tree (e.g., `(A*B) + C`).
*   **Example:**
    Using the same tree as above:

    ```
          1
         / \
        2   3
       / \
      4   5
    ```

    *   **In-order traversal:** 4, 2, 5, 1, 3

### 3.3 Post-order Traversal (Left, Right, Root)

*   **Order of Visit:**
    1.  Traverse the **left** subtree recursively.
    2.  Traverse the **right** subtree recursively.
    3.  Visit the **root** node.
*   **Pseudocode:**
    ```
    postOrder(node):
        if node is not null:
            postOrder(node.left)  // Traverse left subtree
            postOrder(node.right) // Traverse right subtree
            visit(node)           // Process the current node
    ```
*   **Use Cases:**
    *   Deleting a tree (deleting children before parent prevents memory leaks).
    *   Postfix notation of an expression tree (e.g., `A B * C +` for `(A*B) + C`).
*   **Example:**
    Using the same tree as above:

    ```
          1
         / \
        2   3
       / \
      4   5
    ```

    *   **Post-order traversal:** 4, 5, 2, 3, 1

---

## 4. Breadth-First Traversal for Binary Trees

### 4.1 Level-order Traversal (Breadth-First Search - BFS)

*   **Concept:** Visits nodes level by level, from top to bottom, and from left to right within each level.
*   **Mechanism:** Uses a queue.
    1.  Enqueue the root node.
    2.  While the queue is not empty:
        a.  Dequeue a node.
        b.  Visit the dequeued node.
        c.  Enqueue its left child if it exists.
        d.  Enqueue its right child if it exists.
*   **Pseudocode:**
    ```
    levelOrder(root):
        if root is null:
            return

        queue = new Queue()
        queue.enqueue(root)

        while queue is not empty:
            current_node = queue.dequeue()
            visit(current_node)

            if current_node.left is not null:
                queue.enqueue(current_node.left)
            if current_node.right is not null:
                queue.enqueue(current_node.right)
    ```
*   **Use Cases:**
    *   Finding the shortest path in an unweighted graph (trees are a type of graph).
    *   Level-by-level processing of tree data.
    *   Certain game AI algorithms.
*   **Example:**
    Using the same tree as above:

    ```
          1
         / \
        2   3
       / \
      4   5
    ```

    *   **Level-order traversal:** 1, 2, 3, 4, 5

---

## 5. Practice Questions and Exercises

**Exercise 1:**

Consider the following Binary Search Tree (BST):

```
      10
     /  \
    5    15
   / \     \
  2   7     18
```

Perform the following traversals on this BST and list the order of visited nodes:

a) Pre-order Traversal
b) In-order Traversal
c) Post-order Traversal
d) Level-order Traversal

**Solution 1:**

a) **Pre-order Traversal:** 10, 5, 2, 7, 15, 18
   *   Visit 10, then left subtree (5, 2, 7), then right subtree (15, 18).
   *   For subtree rooted at 5: Visit 5, then left subtree (2), then right subtree (7).
   *   For subtree rooted at 15: Visit 15, then left subtree (null), then right subtree (18).

b) **In-order Traversal:** 2, 5, 7, 10, 15, 18
   *   Traverse left subtree of 10 (5, 2, 7), visit 10, then traverse right subtree (15, 18).
   *   For subtree rooted at 5: Traverse left subtree (2), visit 5, then traverse right subtree (7).
   *   For subtree rooted at 15: Traverse left subtree (null), visit 15, then traverse right subtree (18).

c) **Post-order Traversal:** 2, 7, 5, 18, 15, 10
   *   Traverse left subtree of 10 (5, 2, 7), then right subtree (15, 18), then visit 10.
   *   For subtree rooted at 5: Traverse left subtree (2), then right subtree (7), then visit 5.
   *   For subtree rooted at 15: Traverse left subtree (null), then right subtree (18), then visit 15.

d) **Level-order Traversal:** 10, 5, 15, 2, 7, 18
   *   Level 0: 10
   *   Level 1: 5, 15
   *   Level 2: 2, 7, 18

---

**Exercise 2:**

Which tree traversal is guaranteed to visit the nodes of a Binary Search Tree in ascending order?

**Solution 2:**

**In-order Traversal**

---

**Exercise 3:**

If you need to delete a tree and ensure no memory leaks, which traversal order is most suitable for processing nodes before deletion? Explain why.

**Solution 3:**

**Post-order Traversal**

**Explanation:** In post-order traversal, a node is visited *after* both of its children have been visited. This means that when you visit a node, you can safely delete its children first. If you were to delete a parent before its children (as in pre-order), you would lose the references to the children, making them impossible to access and potentially leading to memory leaks.

---

## 6. Important Points to Remember

*   **Traversal Purpose:** Visiting each node exactly once in a structured way.
*   **DFS vs. BFS:** DFS goes deep first (uses stack/recursion), BFS goes wide first (uses queue).
*   **Binary Tree Traversals:**
    *   **Pre-order (Root, Left, Right):** Useful for copying trees and prefix notation.
    *   **In-order (Left, Root, Right):** Essential for BSTs to get sorted output and infix notation.
    *   **Post-order (Left, Right, Root):** Ideal for deleting trees and postfix notation.
    *   **Level-order (BFS):** Visits nodes level by level, useful for finding shortest paths and level-based operations.
*   **Data Structures:**
    *   DFS naturally uses recursion (which implicitly uses the call stack). An explicit stack can also be used.
    *   BFS requires a queue to maintain the order of nodes to visit.
*   **BST Property:** In-order traversal of a BST yields its elements in sorted (ascending) order.

---
