---
title: "Trees - Binary Trees – level and height of the tree"
subject: "INTRODUCTION TO ALGORITHM"
module: "Module 2: Trees "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cbc5"
status: "completed"
scrapedAt: "2026-05-20T17:25:08.104Z"
---
# Introduction to Algorithms: Module 2 - Trees

## Topic: Binary Trees – Level and Height of the Tree

---

### Learning Outcomes:

Upon completion of this topic, you should be able to:

*   Define and understand the concepts of level and height in the context of binary trees.
*   Calculate the level of a node in a binary tree.
*   Calculate the height of a binary tree.
*   Understand the relationship between level and height.
*   Identify edge cases and specific scenarios related to levels and heights (e.g., empty tree, single-node tree).

---

### 1. Introduction to Binary Trees

Before delving into levels and heights, let's briefly recap what a binary tree is:

*   A **Binary Tree** is a hierarchical data structure where each node has at most two children, referred to as the **left child** and the **right child**.
*   The topmost node of a binary tree is called the **root**.
*   A node with no children is called a **leaf node**.
*   A node that is not the root and has a parent is called a **child node**.
*   A node that is not a child node and has children is called a **parent node**.

---

### 2. Level of a Node

The **level** of a node in a binary tree is its distance from the root node.

*   **Definition:** The level of a node is the number of edges on the path from the root to that node.
*   **Convention:**
    *   The root node is typically considered to be at **level 0**.
    *   The children of the root are at **level 1**.
    *   The children of nodes at level $k$ are at **level $k+1$**.

**Key Concepts & Definitions:**

*   **Level:** The number of edges from the root to the node.

**Example:**

Consider the following binary tree:

```
      A (Level 0)
     / \
    B   C (Level 1)
   / \   \
  D   E   F (Level 2)
     /
    G (Level 3)
```

*   **Node A:** Level 0 (It's the root)
*   **Nodes B, C:** Level 1 (One edge away from A)
*   **Nodes D, E, F:** Level 2 (Two edges away from A)
*   **Node G:** Level 3 (Three edges away from A)

---

### 3. Height of a Tree

The **height** of a binary tree is the maximum level of any node in the tree. It represents the length of the longest path from the root to any leaf node.

*   **Definition:** The height of a tree is the number of edges on the longest path from the root to a leaf node.
*   **Convention:**
    *   An **empty tree** (a tree with no nodes) has a height of **-1**.
    *   A tree with only a **single node (the root)** has a height of **0**.

**Key Concepts & Definitions:**

*   **Height:** The maximum level of any node in the tree, or the length of the longest path from the root to a leaf.

**Calculating Height:**

The height of a binary tree can be calculated recursively:

*   **If the tree is empty:** height = -1
*   **If the tree is not empty:**
    *   Calculate the height of the left subtree ($h_L$).
    *   Calculate the height of the right subtree ($h_R$).
    *   The height of the tree is `1 + max(h_L, h_R)`.

**Example (using the previous tree):**

```
      A (Level 0)
     / \
    B   C (Level 1)
   / \   \
  D   E   F (Level 2)
     /
    G (Level 3)
```

*   **Height of Leaf Nodes (D, F, G):** Since these have no children, their subtrees are empty.
    *   Height of subtree rooted at D = -1
    *   Height of subtree rooted at F = -1
    *   Height of subtree rooted at G = -1
*   **Height of Node E:**
    *   Left child of E is G (height = -1, since its subtree is empty).
    *   Right child of E is null (height = -1).
    *   Height of E = 1 + max(-1, -1) = 1 + (-1) = 0.
*   **Height of Node B:**
    *   Left child of B is D (height = -1).
    *   Right child of B is E (height = 0, as calculated above).
    *   Height of B = 1 + max(-1, 0) = 1 + 0 = 1.
*   **Height of Node C:**
    *   Left child of C is null (height = -1).
    *   Right child of C is F (height = -1).
    *   Height of C = 1 + max(-1, -1) = 1 + (-1) = 0.
*   **Height of Tree (Root A):**
    *   Height of left subtree (rooted at B) = 1.
    *   Height of right subtree (rooted at C) = 0.
    *   Height of A = 1 + max(1, 0) = 1 + 1 = 2.

Therefore, the height of the tree is **2**.

**Important Note:** Some definitions consider the height as the number of nodes on the longest path from the root to a leaf. If using that definition, the height would be one more than our calculated height. However, the definition based on edges is more common in computer science.

---

### 4. Relationship Between Level and Height

*   The **level** of a node tells you how "deep" it is from the root.
*   The **height** of the tree tells you the maximum "depth" of any node in the tree.
*   For any node `N` in a tree, `level(N) <= height(Tree)`.
*   The height of the tree is equal to the level of its deepest node(s).

**Example:**

In the tree above:
*   Node G is at Level 3.
*   The height of the tree is 2.

Wait, this seems like a contradiction. Let's re-evaluate the example tree with the precise definition of height based on the number of *edges*.

```
      A (Level 0)
     / \
    B   C (Level 1)
   / \   \
  D   E   F (Level 2)
     /
    G (Level 3) <--- This node is at level 3.
```

Ah, let's re-trace the calculation of height based on the path from the root to the *deepest node*.

The deepest node is G, which is at level 3. The path from A to G is A -> B -> E -> G. This path has **3 edges**.

Let's re-calculate heights using the recursive formula:

*   **Leaf nodes (D, F, G):** Their height (as a subtree) is 0 if we define height as max number of edges from that node to a leaf. If we use the definition where empty tree is -1:
    *   Height(D) = 1 + max(height(null), height(null)) = 1 + max(-1, -1) = 0.
    *   Height(F) = 1 + max(height(null), height(null)) = 1 + max(-1, -1) = 0.
    *   Height(G) = 1 + max(height(null), height(null)) = 1 + max(-1, -1) = 0.

*   **Node E:**
    *   Left child G (height 0).
    *   Right child null (height -1).
    *   Height(E) = 1 + max(Height(G), Height(null)) = 1 + max(0, -1) = 1 + 0 = 1.

*   **Node B:**
    *   Left child D (height 0).
    *   Right child E (height 1).
    *   Height(B) = 1 + max(Height(D), Height(E)) = 1 + max(0, 1) = 1 + 1 = 2.

*   **Node C:**
    *   Left child null (height -1).
    *   Right child F (height 0).
    *   Height(C) = 1 + max(Height(null), Height(F)) = 1 + max(-1, 0) = 1 + 0 = 1.

*   **Root A:**
    *   Left subtree (rooted at B) has height 2.
    *   Right subtree (rooted at C) has height 1.
    *   Height(A) = 1 + max(Height(B), Height(C)) = 1 + max(2, 1) = 1 + 2 = 3.

**Therefore, the height of the tree is 3.**

**Correction:** My previous calculation for height was incorrect. The height is indeed the number of edges on the longest path from the root to a leaf.

**Let's re-state the relationship:**

*   The **level** of a node is the number of edges from the root to that node.
*   The **height** of a tree is the number of edges on the longest path from the root to any leaf.
*   If a tree has `H` as its height, then the levels of the nodes in the tree range from 0 to `H`.
*   The deepest node(s) are at level `H`.

**Revised Example:**

```
      A (Level 0)
     / \
    B   C (Level 1)
   / \   \
  D   E   F (Level 2)
     /
    G (Level 3)
```

*   Root A is at level 0.
*   Deepest node is G at level 3.
*   Longest path (A -> B -> E -> G) has 3 edges.
*   **Height of the tree is 3.**
*   Maximum level of any node is 3.

---

### 5. Important Points to Remember

*   **Root Level:** Always 0.
*   **Empty Tree Height:** -1.
*   **Single Node Tree Height:** 0.
*   Height is about the longest path to a *leaf*.
*   Level is about the path from the *root* to *any* node.
*   The height of a node is the number of edges on the longest path from that node to a leaf in its subtree.
*   The height of the tree is the height of its root.
*   The `level` of a node is the `height` of the tree if that node were the root of the entire tree.

---

### 6. Practice Questions and Exercises

**Question 1:**

Consider the following binary tree:

```
      R (Level 0)
     / \
    A   B (Level 1)
   /     \
  C       D (Level 2)
         / \
        E   F (Level 3)
```

a) What is the level of node D?
b) What is the level of node C?
c) What is the height of node A (as a subtree)?
d) What is the height of the entire tree?
e) What is the maximum level of any node in this tree?

**Answer 1:**

a) Level of node D is 3. (Path: R -> B -> D)
b) Level of node C is 3. (Path: R -> A -> C)
c) Height of node A:
    *   Left child C has height 0 (no children).
    *   Right child is null (height -1).
    *   Height(A) = 1 + max(Height(C), Height(null)) = 1 + max(0, -1) = 1.
d) Height of the entire tree:
    *   Height of subtree rooted at A = 1 (as calculated above).
    *   Height of subtree rooted at B:
        *   Left child is null (height -1).
        *   Right child D has height:
            *   E (height 0), F (height 0)
            *   Height(D) = 1 + max(Height(E), Height(F)) = 1 + max(0, 0) = 1.
        *   Height(B) = 1 + max(Height(null), Height(D)) = 1 + max(-1, 1) = 2.
    *   Height(R) = 1 + max(Height(A), Height(B)) = 1 + max(1, 2) = 1 + 2 = 3.
    *   The height of the entire tree is 3.
e) The maximum level of any node in this tree is 3 (nodes C, D, E, F are at level 3). This matches the height of the tree.

**Question 2:**

What is the height of a binary tree with only one node?

**Answer 2:**

The height of a binary tree with only one node is **0**. (The path from the root to itself, the only leaf, has 0 edges).

**Question 3:**

What is the height of an empty binary tree?

**Answer 3:**

The height of an empty binary tree is **-1**.

**Question 4:**

If a binary tree has a height of `H`, what is the minimum number of nodes it can have? What is the maximum number of nodes it can have?

**Answer 4:**

*   **Minimum Nodes:** A binary tree with height `H` has a minimum of `H+1` nodes. This occurs in a "degenerate" or "skewed" tree where each node has only one child, forming a linked list. For example, a tree of height 2 could be:
    ```
        A
       /
      B
     /
    C
    ```
    This has 3 nodes (H+1).

*   **Maximum Nodes:** A binary tree with height `H` has a maximum of `2^(H+1) - 1` nodes. This occurs in a "perfect" binary tree where every non-leaf node has two children, and all leaf nodes are at the same level `H`. For example, a tree of height 2 with maximum nodes:
    ```
          A
         / \
        B   C
       / \ / \
      D  E F  G
    ```
    This has 7 nodes, and $2^{(2+1)} - 1 = 2^3 - 1 = 8 - 1 = 7$.

---

### Summary Table

| Concept | Definition                                                              | Example (Tree from Q1)                                                                 |
| :------ | :---------------------------------------------------------------------- | :------------------------------------------------------------------------------------- |
| **Level** | Number of edges from the root to a node. Root is at level 0.            | Node D is at Level 3.                                                                  |
| **Height**| Number of edges on the longest path from the root to a leaf. Empty = -1. | The entire tree has a height of 3. (Longest path A->B->D has 3 edges)                 |
| **Node Height** | Number of edges on the longest path from a node to a leaf in its subtree. | Node A has a height of 1. (Path A->B->D has 2 edges, A->B->E has 2 edges, A->B->F has 2 edges... wait, my node height calculation for A was wrong above again! Let's fix.) |

**Revisiting Node Height Calculation (for Q1):**

The height of a node is the height of the subtree rooted at that node.

```
      R (Level 0)
     / \
    A   B (Level 1)
   /     \
  C       D (Level 2)
         / \
        E   F (Level 3)
```

*   **Height of Leaves (C, E, F):** 0 (as they have no children, their subtrees are essentially single nodes, and the path to their own "leaf" is 0 edges).
*   **Height of Node D:**
    *   Left child E (height 0)
    *   Right child F (height 0)
    *   Height(D) = 1 + max(Height(E), Height(F)) = 1 + max(0, 0) = 1.
*   **Height of Node A:**
    *   Left child C (height 0)
    *   Right child is null (height -1).
    *   Height(A) = 1 + max(Height(C), Height(null)) = 1 + max(0, -1) = 1.
*   **Height of Node B:**
    *   Left child is null (height -1).
    *   Right child D (height 1).
    *   Height(B) = 1 + max(Height(null), Height(D)) = 1 + max(-1, 1) = 2.
*   **Height of Root R:**
    *   Left subtree (rooted at A) has height 1.
    *   Right subtree (rooted at B) has height 2.
    *   Height(R) = 1 + max(Height(A), Height(B)) = 1 + max(1, 2) = 3.

**Corrected Summary Table:**

| Concept | Definition                                                              | Example (Tree from Q1)                                                                 |
| :------ | :---------------------------------------------------------------------- | :------------------------------------------------------------------------------------- |
| **Level** | Number of edges from the root to a node. Root is at level 0.            | Node D is at Level 3.                                                                  |
| **Height**| Number of edges on the longest path from the root to a leaf. Empty = -1. | The entire tree has a height of 3. (Longest path R->B->D->E/F has 3 edges)             |
| **Node Height** | Number of edges on the longest path from a node to a leaf in its subtree. | Node A has a height of 1. Node B has a height of 2. Node D has a height of 1.        |

---
This concludes Module 2, Topic: Trees - Binary Trees – level and height of the tree.
