---
title: "Tree Traversals"
subject: "DATA STRUCTURES"
module: "Module 3: Trees and Graphs"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fea15"
status: "completed"
scrapedAt: "2026-05-23T17:55:11.141Z"
---
# DATA STRUCTURES: Module 3: Trees and Graphs

## Topic: Tree Traversals

---

### **Introduction to Tree Traversals**

Tree traversals are systematic methods of visiting (or processing) each node in a tree data structure exactly once. The order in which the nodes are visited defines the type of traversal. These traversals are fundamental for performing operations like searching, insertion, deletion, and displaying the contents of a tree.

**Key Concept:** The structure of a tree naturally lends itself to recursive traversal algorithms.

**Relevance to Course Outcomes:**
*   **CO3 (Knowledge Level: K3):** Tree traversals are essential for applying tree and graph data structures to design algorithms for various applications (e.g., expression evaluation, file system navigation, searching).

---

### **1. Binary Tree Traversals**

Binary trees are a fundamental type of tree where each node has at most two children, referred to as the left child and the right child. The most common traversals are performed on binary trees.

**Types of Binary Tree Traversals:**

These traversals can be categorized based on the order in which the root node is visited relative to its left and right subtrees.

#### **1.1. In-Order Traversal**

*   **Definition:** Visits the nodes in the following order: Left Subtree -> Root -> Right Subtree.
*   **Pseudocode (Recursive):**

    ```
    InOrder(node):
        if node is not NULL:
            InOrder(node.left)
            Visit(node)
            InOrder(node.right)
    ```

*   **Characteristics:**
    *   For a Binary Search Tree (BST), an in-order traversal visits the nodes in **ascending order** of their keys. This is a crucial property.
    *   Often used to print the elements of a BST in a sorted manner.

*   **Example:**
    Consider the following BST:

    ```
            4
           / \
          2   5
         / \
        1   3
    ```

    *   `InOrder(1)`: Visits 1
    *   `InOrder(3)`: Visits 3
    *   `InOrder(2)`: Visits 2
    *   `InOrder(4)`: Visits 4
    *   `InOrder(5)`: Visits 5

    **Output:** 1, 2, 3, 4, 5

*   **Textbook Reference:**
    *   **Horowitz, Sahni, Anderson-Freed (2/e, 2008):** Discusses in-order traversal as one of the three primary ways to traverse binary trees, highlighting its use for sorting BSTs.
    *   **Samanta (2/e, 2009):** Provides a detailed explanation and pseudocode for in-order traversal.

#### **1.2. Pre-Order Traversal**

*   **Definition:** Visits the nodes in the following order: Root -> Left Subtree -> Right Subtree.
*   **Pseudocode (Recursive):**

    ```
    PreOrder(node):
        if node is not NULL:
            Visit(node)
            PreOrder(node.left)
            PreOrder(node.right)
    ```

*   **Characteristics:**
    *   Useful for creating a copy of the tree or for obtaining a prefix expression from an expression tree.
    *   The first node visited is always the root of the (sub)tree.

*   **Example:**
    Using the same BST as above:

    ```
            4
           / \
          2   5
         / \
        1   3
    ```

    *   `PreOrder(4)`: Visits 4
    *   `PreOrder(2)`: Visits 2
    *   `PreOrder(1)`: Visits 1
    *   `PreOrder(3)`: Visits 3
    *   `PreOrder(5)`: Visits 5

    **Output:** 4, 2, 1, 3, 5

*   **Textbook Reference:**
    *   **Gilberg & Forouzan (2/e, 2005):** Explains pre-order traversal and its applications, such as in constructing an expression tree.
    *   **Horowitz, Sahni, Anderson-Freed (2/e, 2008):** Similar to in-order, it covers pre-order as a fundamental traversal.

#### **1.3. Post-Order Traversal**

*   **Definition:** Visits the nodes in the following order: Left Subtree -> Right Subtree -> Root.
*   **Pseudocode (Recursive):**

    ```
    PostOrder(node):
        if node is not NULL:
            PostOrder(node.left)
            PostOrder(node.right)
            Visit(node)
    ```

*   **Characteristics:**
    *   Useful for deleting a tree (or subtree) because the children are processed before the parent, ensuring that a node is deleted only after its children have been handled.
    *   Used to obtain a postfix expression from an expression tree.
    *   The last node visited is always the root of the (sub)tree.

*   **Example:**
    Using the same BST:

    ```
            4
           / \
          2   5
         / \
        1   3
    ```

    *   `PostOrder(1)`: Visits 1
    *   `PostOrder(3)`: Visits 3
    *   `PostOrder(2)`: Visits 2
    *   `PostOrder(5)`: Visits 5
    *   `PostOrder(4)`: Visits 4

    **Output:** 1, 3, 2, 5, 4

*   **Textbook Reference:**
    *   **Horowitz, Sahni, Anderson-Freed (2/e, 2008):** Covers post-order traversal, emphasizing its role in tree deletion.
    *   **Tremblay & Sorenson (2/e, 1995):** Discusses post-order traversal and its relation to expression evaluation and tree manipulation.

#### **1.4. Level-Order Traversal (Breadth-First Traversal)**

*   **Definition:** Visits the nodes level by level, from left to right within each level. It does not use recursion directly; it typically uses a **queue**.
*   **Pseudocode (Iterative):**

    ```
    LevelOrder(root):
        if root is NULL:
            return

        queue = new Queue()
        queue.enqueue(root)

        while queue is not empty:
            current_node = queue.dequeue()
            Visit(current_node)

            if current_node.left is not NULL:
                queue.enqueue(current_node.left)
            if current_node.right is not NULL:
                queue.enqueue(current_node.right)
    ```

*   **Characteristics:**
    *   Explores the tree breadth-wise.
    *   Used in algorithms like finding the shortest path in an unweighted graph (which trees are a special case of).
    *   Also known as Breadth-First Search (BFS) when applied to a tree.

*   **Example:**
    Using the same BST:

    ```
            4
           / \
          2   5
         / \
        1   3
    ```

    1.  Enqueue 4. Queue: [4]
    2.  Dequeue 4, Visit 4. Enqueue 2, Enqueue 5. Queue: [2, 5]
    3.  Dequeue 2, Visit 2. Enqueue 1, Enqueue 3. Queue: [5, 1, 3]
    4.  Dequeue 5, Visit 5. Queue: [1, 3]
    5.  Dequeue 1, Visit 1. Queue: [3]
    6.  Dequeue 3, Visit 3. Queue: []

    **Output:** 4, 2, 5, 1, 3

*   **Textbook Reference:**
    *   **Horowitz, Sahni, Anderson-Freed (2/e, 2008):** Introduces level-order traversal and its implementation using a queue, relating it to BFS.
    *   **Lipschutz (Schaum’s Series, 2/e, 2016):** Provides clear examples and algorithmic descriptions for level-order traversal.

---

### **2. Traversals for General Trees (N-ary Trees)**

General trees, also known as N-ary trees, can have more than two children per node. The traversal concepts are similar, but the specific order can vary. The common ones are still based on visiting the root and its children.

*   **Pre-Order Traversal:** Visit Root -> Traverse Children (from left to right).
*   **Post-Order Traversal:** Traverse Children (from left to right) -> Visit Root.

**Example (General Tree):**

```
       A
      /|\
     B C D
    / \   \
   E   F   G
```

*   **Pre-Order:** A, B, E, F, C, D, G
*   **Post-Order:** E, F, B, C, G, D, A

---

### **3. Traversals for Graphs (Brief Overview)**

While the module focuses on trees, it's important to note that traversal techniques are also applied to graphs. The primary graph traversal algorithms are:

*   **Breadth-First Search (BFS):** Equivalent to level-order traversal for trees. Explores neighbor nodes first before moving to the next level neighbors. Uses a queue.
*   **Depth-First Search (DFS):** Analogous to pre-order, in-order, or post-order traversals in trees, but adapted for graphs. Explores as far as possible along each branch before backtracking. Typically uses recursion or a stack.

**Relevance to Course Outcomes:**
*   **CO3 (Knowledge Level: K3):** Understanding graph traversals (as extensions of tree traversals) is crucial for applying these nonlinear data structures to design algorithms for applications like finding paths, network analysis, etc.

---

### **4. Applications of Tree Traversals**

Tree traversals are not just academic exercises; they have practical applications:

*   **Expression Trees:**
    *   **In-order:** Evaluates to the infix expression.
    *   **Pre-order:** Evaluates to the prefix expression.
    *   **Post-order:** Evaluates to the postfix expression, which is easy for computers to evaluate using a stack. (Connects to CO2: Stacks and Queues).
*   **Binary Search Trees (BSTs):**
    *   **In-order:** Retrieving elements in sorted order.
*   **File Systems:** Traversing directory structures to list files, calculate disk usage, or search for files. (Connects to CO3).
*   **Syntax Trees:** Compilers use tree traversals to analyze and process source code.
*   **Memory Management:** Post-order traversal is used for garbage collection in some systems.

**Relevance to Course Outcomes:**
*   **CO2 (Knowledge Level: K3):** Applications like postfix evaluation directly use stacks, demonstrating the combined use of data structures.
*   **CO3 (Knowledge Level: K3):** All applications listed directly showcase how trees and their traversals are used to design algorithms.

---

### **5. Iterative vs. Recursive Traversals**

*   **Recursive:**
    *   **Pros:** Generally simpler and more intuitive to write, directly reflecting the recursive definition of trees.
    *   **Cons:** Can lead to stack overflow errors for very deep trees due to function call overhead.
*   **Iterative:**
    *   **Pros:** Avoids stack overflow issues, can be more memory-efficient for deep trees.
    *   **Cons:** Can be more complex to implement, often requiring an auxiliary data structure like a stack or queue.

**Textbook Reference:**
*   **Aho, Hopcroft, Ullman (1/e, 1983):** Though older, it lays foundational concepts and often discusses both recursive and iterative approaches for clarity.
*   **Brass (2/e, 2018):** As an "Advanced Data Structures" book, it likely delves into the nuances of recursive vs. iterative implementations and their performance implications.

---

### **Important Points to Remember**

*   **The order of visiting nodes is key.** Each traversal type yields a unique sequence.
*   **In-order traversal of a BST yields sorted output.** This is a critical property.
*   **Pre-order is good for copying and prefix notation.**
*   **Post-order is good for deletion and postfix notation.**
*   **Level-order uses a queue and explores breadth-first.**
*   Recursive traversals are elegant but have depth limitations; iterative traversals use explicit data structures (stack/queue) to manage the process.
*   The concepts of tree traversals directly extend to graph traversals (DFS and BFS).

---

### **Practice Questions & Exercises**

**Q1. (In-order Traversal)**
Given a Binary Search Tree:
```
      10
     /  \
    5    15
   / \     \
  2   7     20
```
What is the output of an in-order traversal?

**Answer:** 2, 5, 7, 10, 15, 20

**Q2. (Pre-order Traversal)**
Using the same BST as Q1, what is the output of a pre-order traversal?

**Answer:** 10, 5, 2, 7, 15, 20

**Q3. (Post-order Traversal)**
Using the same BST as Q1, what is the output of a post-order traversal?

**Answer:** 2, 7, 5, 20, 15, 10

**Q4. (Level-order Traversal)**
Using the same BST as Q1, what is the output of a level-order traversal?

**Answer:** 10, 5, 15, 2, 7, 20

**Q5. (Understanding Traversal Purpose)**
Which traversal is most suitable for deleting a binary tree and why?
**Answer:** Post-order traversal. This is because it visits the children before the parent. This ensures that when a node is processed (e.g., to be deleted), its children have already been processed and are no longer being referenced, preventing dangling pointers or memory leaks.

**Q6. (Constructing a Tree)**
Given the following traversals, reconstruct the Binary Search Tree:
*   Pre-order: F, D, B, A, C, E, G, H
*   In-order: B, D, A, F, C, E, G, H

**Hint:** The first element in the pre-order traversal is always the root. Use this to split the in-order traversal into left and right subtrees.

**Answer:**

```
        F
       / \
      D   C
     / \   \
    B   E   G
   /       /
  A       H
```
(This is a BST if we consider the order of insertion/structure)

**Detailed Reconstruction Steps for Q6:**

1.  **Pre-order:** `F, D, B, A, C, E, G, H`
    **In-order:** `B, D, A, F, C, E, G, H`
2.  Root is `F` (first in pre-order).
3.  In `B, D, A, F, C, E, G, H`, `F` splits the in-order into:
    *   Left subtree in-order: `B, D, A`
    *   Right subtree in-order: `C, E, G, H`
4.  Now consider the pre-order for the left subtree: `D, B, A` (elements after `F` in pre-order that are in the left subtree's in-order).
    *   Root of left subtree is `D`.
    *   In `B, D, A`, `D` splits into:
        *   Left of D in-order: `B`
        *   Right of D in-order: `A`
    *   Pre-order for left of D: `B, A`. Root is `B`.
        *   In `B`, `B` is the only element, so it has no children.
    *   Pre-order for right of D: `A`. Root is `A`.
        *   In `A`, `A` is the only element.
5.  Now consider the pre-order for the right subtree: `C, E, G, H` (elements after `F`'s left subtree in pre-order that are in the right subtree's in-order).
    *   Root of right subtree is `C`.
    *   In `C, E, G, H`, `C` splits into:
        *   Left of C in-order: Empty
        *   Right of C in-order: `E, G, H`
    *   Pre-order for right of C: `E, G, H`. Root is `E`.
        *   In `E, G, H`, `E` splits into:
            *   Left of E in-order: Empty
            *   Right of E in-order: `G, H`
        *   Pre-order for right of E: `G, H`. Root is `G`.
            *   In `G, H`, `G` splits into:
                *   Left of G in-order: Empty
                *   Right of G in-order: `H`
            *   Pre-order for right of G: `H`. Root is `H`.
                *   In `H`, `H` is the only element.

**Q7. (Complexity of Traversals)**
What is the time complexity of each of the binary tree traversals (In-order, Pre-order, Post-order, Level-order) if the tree has N nodes? Assume visiting a node takes O(1) time.

**Answer:** The time complexity for In-order, Pre-order, Post-order, and Level-order traversals is **O(N)**. Each node is visited exactly once. For level-order, the queue operations (enqueue/dequeue) take O(1) on average for each node.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
