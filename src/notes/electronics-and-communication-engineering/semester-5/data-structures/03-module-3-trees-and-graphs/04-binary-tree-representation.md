---
title: "Binary Tree Representation"
subject: "DATA STRUCTURES"
module: "Module 3: Trees and Graphs"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fea14"
status: "completed"
scrapedAt: "2026-05-23T17:55:10.428Z"
---
# DATA STRUCTURES: Module 3: Trees and Graphs

## Topic: Binary Tree Representation

This module delves into nonlinear data structures, with a focus on trees and graphs. This topic specifically explores how binary trees, a fundamental type of tree structure, can be represented in computer memory. Understanding these representations is crucial for efficiently implementing and manipulating binary trees, enabling the design of algorithms for various applications (CO3).

---

### Learning Outcomes for Binary Tree Representation:

*   **Understand the concept of a binary tree and its basic properties.**
*   **Learn different methods for representing binary trees in memory.**
*   **Analyze the advantages and disadvantages of each representation method.**
*   **Implement binary tree operations using chosen representation techniques.**

---

### Course Outcomes Alignment:

*   **CO3: Make use of nonlinear data structures like trees and graphs to design algorithms for various applications. (Knowledge Level: K3)**
    *   This topic directly contributes to CO3 by providing the foundational knowledge of binary trees and their representations, which are essential building blocks for many tree and graph-based algorithms.
*   **CO2: Solve real world problems efficiently using appropriate data structures like arrays, linked list, stacks and queues. (Knowledge Level: K3)**
    *   While this topic focuses on trees, the representations often utilize arrays and linked lists, reinforcing the understanding of how these fundamental structures are applied in more complex scenarios.

---

### Key Concepts and Definitions:

#### What is a Tree?

A tree is a hierarchical data structure that consists of nodes connected by edges. It's a nonlinear structure where each node has zero or more child nodes. A tree typically has a single root node, and there are no cycles.

*   **Root:** The topmost node in a tree.
*   **Node:** A component of the tree that stores data and may have pointers to its children.
*   **Edge:** A connection between two nodes.
*   **Parent Node:** A node that has a child node.
*   **Child Node:** A node that is directly connected to a parent node.
*   **Siblings:** Nodes that share the same parent.
*   **Leaf Node (or Terminal Node):** A node with no children.
*   **Internal Node:** A node that has at least one child.
*   **Depth of a Node:** The number of edges from the root to the node.
*   **Height of a Node:** The number of edges from the node to the deepest leaf in its subtree.
*   **Height of a Tree:** The height of its root node.

#### What is a Binary Tree?

A binary tree is a tree data structure in which each node has at most two children, referred to as the **left child** and the **right child**.

**Properties of a Binary Tree:**

*   Each node has at most two children.
*   The children are ordered: left child and right child.

**Types of Binary Trees:**

*   **Full Binary Tree:** A tree in which every node has either 0 or 2 children.
*   **Complete Binary Tree:** A binary tree in which all levels are completely filled except possibly the last level, which is filled from left to right.
*   **Perfect Binary Tree:** A binary tree in which all interior nodes have two children and all leaves are at the same level.
*   **Balanced Binary Tree:** A binary tree where the heights of the left and right subtrees of any node differ by at most one. Examples include AVL trees and Red-Black trees.

---

### Binary Tree Representation Methods:

Binary trees can be represented in memory using two primary methods:

1.  **Array Representation (Sequential Representation)**
2.  **Linked Representation (Node Representation)**

---

#### 1. Array Representation (Sequential Representation)

In this method, a binary tree is represented using an array. The position of a node in the array determines its relationship with other nodes. This representation is particularly efficient for **complete binary trees** and **full binary trees**.

**How it works:**

*   The root node is typically stored at index 0 or 1 of the array. We'll assume index 1 for simpler child/parent calculations.
*   For a node at index `i`:
    *   Its **left child** is at index `2 * i`.
    *   Its **right child** is at index `2 * i + 1`.
    *   Its **parent** is at index `floor(i / 2)`.

**Example:**

Consider the following binary tree:

```
      A (1)
     /   \
    B (2) C (3)
   / \
  D (4) E (5)
```

Using an array starting at index 1, the representation would be:

| Index | 0   | 1 | 2 | 3 | 4 | 5 | 6   | 7   | ... |
| :---- | :-- | :-: | :-: | :-: | :-: | :-: | :-- | :-- |
| Value | N/A | A | B | C | D | E | N/A | N/A | ... |

*   Root 'A' is at index 1.
*   'A's left child 'B' is at `2 * 1 = 2`.
*   'A's right child 'C' is at `2 * 1 + 1 = 3`.
*   'B's parent is at `floor(2 / 2) = 1`.
*   'B's left child 'D' is at `2 * 2 = 4`.
*   'B's right child 'E' is at `2 * 2 + 1 = 5`.
*   'C' has no children, so indices `2 * 3 = 6` and `2 * 3 + 1 = 7` would remain unused or contain a special marker (e.g., `NULL` or `-1`).

**Advantages:**

*   **Simple and efficient for accessing parent/children:** Calculations for parent and child indices are direct arithmetic operations.
*   **Good for complete binary trees:** Minimizes wasted space because there are no gaps in the array.

**Disadvantages:**

*   **Wasted Space:** For non-complete binary trees, many array elements might remain empty, leading to significant memory wastage. The space required is proportional to `2^h`, where `h` is the height of the tree, which can be much larger than the number of nodes (`n`).
*   **Insertion/Deletion can be expensive:** Inserting or deleting a node might require shifting elements in the array, similar to array-based list implementations, especially if it affects the tree structure significantly (though less common with standard tree operations).
*   **Fixed Size:** If implemented with a static array, resizing can be problematic. Dynamic arrays mitigate this but add overhead.

**Textbook References:**

*   **Horowitz, Sahni, Anderson-Freed (2/e):** Discusses array-based representations for trees, particularly highlighting their suitability for complete binary trees in Chapter 6.
*   **Samanta D (2/e):** Covers sequential representation in Chapter 5, explaining the index calculations and its space implications.

---

#### 2. Linked Representation (Node Representation)

This is the most common and flexible way to represent binary trees. Each node in the tree is a separate data structure (often a struct or class) that contains:

*   **Data:** The information stored in the node.
*   **Left Child Pointer:** A pointer to the node's left child.
*   **Right Child Pointer:** A pointer to the node's right child.

If a child does not exist, its pointer is set to `NULL` (or a similar null indicator).

**Node Structure Example (C-like pseudocode):**

```c
struct TreeNode {
    DataType data;          // The data stored in the node
    struct TreeNode *leftChild; // Pointer to the left child
    struct TreeNode *rightChild; // Pointer to the right child
};
```

**Example:**

Using the same binary tree as before:

```
      A
     /   \
    B     C
   / \
  D   E
```

The linked representation would involve creating nodes for each element and linking them:

*   **Node A:** `data = 'A'`, `leftChild = pointer to Node B`, `rightChild = pointer to Node C`
*   **Node B:** `data = 'B'`, `leftChild = pointer to Node D`, `rightChild = pointer to Node E`
*   **Node C:** `data = 'C'`, `leftChild = NULL`, `rightChild = NULL`
*   **Node D:** `data = 'D'`, `leftChild = NULL`, `rightChild = NULL`
*   **Node E:** `data = 'E'`, `leftChild = NULL`, `rightChild = NULL`

The `root` variable would hold the pointer to Node A.

**Advantages:**

*   **Memory Efficiency:** Only allocates memory for the nodes that exist, avoiding the wasted space of the array representation for sparse or unbalanced trees.
*   **Flexibility:** Easily handles trees of any shape and size.
*   **Dynamic Allocation:** Nodes can be added or removed dynamically without the need for resizing a contiguous block of memory.
*   **Efficient Insertion/Deletion:** Inserting or deleting nodes typically involves updating a few pointers, which is generally efficient.

**Disadvantages:**

*   **Overhead:** Each node requires extra memory for the pointers (left and right child pointers), which can be significant if the data itself is small.
*   **Slower Access to Parent:** Finding the parent of a node requires traversing from the root or maintaining a separate parent pointer (which adds more overhead).
*   **Traversal Overhead:** Accessing children involves pointer dereferencing, which can be slightly slower than direct array indexing.

**Textbook References:**

*   **Horowitz, Sahni, Anderson-Freed (2/e):** Dedicates Chapter 6 to linked representations of trees, explaining node structures and pointer manipulations.
*   **Samanta D (2/e):** Covers linked representation extensively in Chapter 5, detailing node definition and linking mechanisms for binary trees.
*   **Gilberg, Forouzan (2/e):** Provides clear explanations and examples of node-based structures and pointer usage for trees in Chapter 8.
*   **Lipschuts S. (Schaum's Series, 2/e):** Explains linked structures for trees, including node definitions and memory allocation, in Chapter 7.

---

### Implementing Binary Tree Operations (Conceptual):

While this topic focuses on representation, it's important to note how these representations enable operations:

*   **Insertion:** To insert a new node, you typically traverse the tree (e.g., using a search mechanism) to find the correct position and then update the relevant child pointer of the parent node.
*   **Deletion:** Deleting a node can be more complex, especially if the node has two children. Strategies include replacing the node with its inorder successor or predecessor.
*   **Traversal:** Methods like Inorder, Preorder, and Postorder traversals are implemented using recursion or stacks, operating on the pointers in the linked representation.

**Example of Insertion (Conceptual, Linked Representation):**

Suppose we want to insert a node with data 'F' into the previous tree, assuming it should be the left child of 'E'.

1.  Create a new `TreeNode` for 'F'.
2.  Traverse to node 'E'.
3.  Set `E->leftChild = pointer to new node 'F'`.
4.  Set `new_node_F->leftChild = NULL` and `new_node_F->rightChild = NULL`.

---

### Practice Questions:

1.  **Array Representation:**
    Consider the following binary tree and its array representation (index starts from 1).
    ```
          10
         /  \
        5    15
       / \     \
      2   7     18
    ```
    a) What is the index of node 7?
    b) What is the index of the parent of node 15?
    c) If node 5 had a right child with value 8, at what index would it be placed?
    d) If the array has a size of 10, which indices would be unused for this tree?

2.  **Linked Representation:**
    Draw the linked representation for the following binary tree:
    ```
         M
        / \
       J   S
          / \
         P   X
    ```
    Label the `data`, `leftChild`, and `rightChild` pointers for each node.

3.  **Comparison:**
    When would you prefer to use the array representation of a binary tree over the linked representation? Explain your reasoning.

4.  **Memory Usage:**
    A binary tree has `n` nodes.
    a) What is the maximum number of nodes that a binary tree with height `h` can have?
    b) What is the minimum number of nodes that a binary tree with height `h` can have?
    c) For the array representation, what is the worst-case space complexity?
    d) For the linked representation, what is the space complexity in terms of `n`?

---

### Answers to Practice Questions:

1.  **Array Representation:**
    Assume index starts from 1.
    ```
          10 (1)
         /  \
        5 (2) 15 (3)
       / \     \
      2 (4) 7 (5) 15 (7)
    ```
    a) Node 7 is the right child of node 5. Node 5 is at index 2. So, node 7 is at `2 * 2 + 1 = 5`. **Index: 5**
    b) Node 15 is at index 3. Its parent is at `floor(3 / 2) = 1`. **Index: 1**
    c) Node 5 is at index 2. Its right child would be at `2 * 2 + 1 = 5`. If node 7 is already there, and 8 is to be inserted as a new right child of 5, it would depend on the insertion logic. Assuming the question implies a new node with value 8 *replaces* whatever was at index 5 or is added to an empty slot *if* node 5 had a right child slot available: If node 7 is at index 5, and node 8 is to be a *new* right child, it would typically go into index `2*2+1=5` if empty, or it implies a different placement. **However, if the tree structure implies that node 5's right child IS node 7 at index 5, and then a new value 8 needs to be added as the right child of 5, this scenario highlights the limitations of array representation for non-complete trees or when multiple siblings are not directly supported by simple indices.** A more standard interpretation is that if node 5 had *another* right child, it would be at index 5 if 7 wasn't there, or this tree is not fully represented. Given the tree structure, the question is slightly ambiguous. **If node 5's right child slot was empty, then 8 would be at index 5. If node 7 is already at index 5, and the question implies adding an *additional* right child, that's not standard for this representation. Let's assume the question meant node 5's right child is to be 8, and node 7 isn't there.** In that case, it would be index `2*2+1 = 5`. **If node 7 IS at index 5, and 8 is to be added as a sibling to 7 (which is not directly possible with this simple index scheme), or as a different kind of child, the representation breaks down.**

    Let's re-evaluate: The tree shows 5 has children 2 and 7. So 2 is at index 4, 7 is at index 5. The question asks "If node 5 had a right child with value 8". This implies the existing tree might be modified or is a hypothetical. If node 5's existing right child is 7 (at index 5), and we are to add an *additional* right child with value 8, this representation cannot directly accommodate it as a distinct child. **Assuming the question meant: "If node 5 had *only* a right child with value 8 (instead of 2 and 7)", then it would be at index 5.** Given the diagram and standard interpretation, node 5's right child is 7 at index 5. If a new node with value 8 is to be added as the right child of node 5, and node 7 is *already* the right child at index 5, this is not directly representable without re-indexing or a different structure. **However, a common interpretation of such questions in tests is to assume an empty slot if the structure allows.** If node 5's right child slot (index 5) is occupied by 7, then the question is flawed for this simple representation. **Let's assume the question implies a scenario where node 5's right child slot (index 5) is currently empty, and we are placing 8 there.** In that context: **Index: 5**

    d) Indices used: 1 (10), 2 (5), 3 (15), 4 (2), 5 (7), 7 (18 - this is the right child of 15, index `2*3+1 = 7`).
    Indices 6 and 8 to 10 are unused. **Unused indices: 6, 8, 9, 10**

2.  **Linked Representation:**
    ```
    Node M: { data: 'M', leftChild: ptr_J, rightChild: ptr_S }
    Node J: { data: 'J', leftChild: NULL, rightChild: NULL }
    Node S: { data: 'S', leftChild: ptr_P, rightChild: ptr_X }
    Node P: { data: 'P', leftChild: NULL, rightChild: NULL }
    Node X: { data: 'X', leftChild: NULL, rightChild: NULL }

    (Diagrammatic representation would show boxes for each node with data and arrows for pointers)
    ```

3.  **Comparison:**
    You would prefer the **array representation** for binary trees when:
    *   The tree is **complete** or **nearly complete**. This minimizes memory wastage.
    *   You need **fast access to parent and children** nodes based on their position.
    *   The maximum size of the tree is known or can be reasonably estimated to avoid frequent resizing issues.

    The **linked representation** is preferred when:
    *   The tree is **sparse or unbalanced**, and the size is unpredictable.
    *   You need **flexibility to insert and delete nodes easily** without worrying about contiguous memory allocation.
    *   Memory overhead for pointers is acceptable compared to potential wasted space in the array.

4.  **Memory Usage:**
    a) Maximum nodes in a binary tree of height `h`: `2^(h+1) - 1`
    b) Minimum nodes in a binary tree of height `h`: `h + 1` (a degenerate tree, like a linked list)
    c) For the array representation, the worst-case space complexity is **O(2^h)**, as it needs space up to the maximum possible index for a complete binary tree of height `h`. Since `h` can be up to `n` in a degenerate tree, this can also be seen as **O(N)** where N is the maximum potential size, or **O(2^n)** in the absolute worst-case for array size relative to the number of nodes, although often `h` is considered. A tighter bound might be `O(2^h)`.
    d) For the linked representation, the space complexity is **O(n)**, where `n` is the number of nodes, as each node with its pointers contributes a constant amount of space.

---

### Important Points to Remember:

*   Binary trees are hierarchical data structures where each node has at most two children (left and right).
*   The **array representation** is space-efficient for complete binary trees but wasteful for sparse or unbalanced trees. Parent/child access is O(1) via simple arithmetic.
*   The **linked representation** is flexible, memory-efficient for varied tree shapes, and supports dynamic insertion/deletion well. It has a slight overhead for pointers.
*   Understanding these representations is crucial for implementing various tree algorithms and choosing the most suitable one for a given application.
*   The choice of representation depends heavily on the expected shape and size of the binary tree and the frequency of operations like insertion, deletion, and access.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
