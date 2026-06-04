---
title: "complete-binary tree representation using array"
subject: "INTRODUCTION TO ALGORITHM"
module: "Module 2: Trees "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cbc6"
status: "completed"
scrapedAt: "2026-05-20T17:25:08.765Z"
---
# Introduction to Algorithms: Module 2: Trees

## Topic: Complete Binary Tree Representation Using Array

### 1. Learning Outcomes

By the end of this topic, you will be able to:

*   Understand the concept of a complete binary tree.
*   Explain how to represent a complete binary tree using an array.
*   Determine the parent, left child, and right child of any node in an array-based complete binary tree representation.
*   Calculate the index of a node's parent, left child, and right child given the node's index.
*   Understand the advantages and disadvantages of using an array for complete binary tree representation.
*   Apply this representation to common data structures like heaps.

### 2. Key Concepts and Definitions

#### 2.1 Binary Tree

A **binary tree** is a tree data structure where each node has at most two children, referred to as the **left child** and the **right child**.

#### 2.2 Complete Binary Tree

A **complete binary tree** is a binary tree in which every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible.

**Key Characteristics:**

*   All levels are filled except the last.
*   Nodes in the last level are filled from left to right.
*   This structure ensures a consistent and predictable arrangement of nodes.

**Visual Example:**

```
        A (0)
       /   \
      B (1) C (2)
     / \   /
    D (3) E (4) F (5)
```

In this example, levels 0 and 1 are completely filled. Level 2 is also filled, and the nodes are as far left as possible.

#### 2.3 Array Representation of a Complete Binary Tree

A complete binary tree can be efficiently represented using a **one-dimensional array**. The key idea is to map the tree nodes to array indices in a systematic way.

**Mapping Strategy:**

*   The root of the tree is stored at index **0** of the array.
*   For any node at index `i`:
    *   Its **left child** is located at index `2 * i + 1`.
    *   Its **right child** is located at index `2 * i + 2`.
    *   Its **parent** is located at index `floor((i - 1) / 2)` (for `i > 0`).

**Why this works for Complete Binary Trees:**

The "as far left as possible" property of complete binary trees ensures that there are no gaps in the array representation. Every index in the array will correspond to a node in the tree, or represent an empty slot if the tree isn't perfectly full up to the last level.

### 3. Calculating Parent and Child Indices

Given a node at index `i` in the array:

*   **Left Child Index:** `left_child(i) = 2 * i + 1`
*   **Right Child Index:** `right_child(i) = 2 * i + 2`
*   **Parent Index:** `parent(i) = floor((i - 1) / 2)` (only for `i > 0`)

**Important Note on Indexing:**

*   Some texts or implementations might use **1-based indexing** for the array representation. In that case, the formulas change slightly:
    *   Root: Index 1
    *   Left Child of node at `i`: `2 * i`
    *   Right Child of node at `i`: `2 * i + 1`
    *   Parent of node at `i`: `floor(i / 2)`

    **For this module, we will consistently use 0-based indexing.**

#### 3.1 Example Walkthrough (0-based indexing)

Consider the complete binary tree shown earlier, represented as an array:

```
Array: [A, B, C, D, E, F, ...]
Index:  0  1  2  3  4  5
```

Let's verify the formulas:

*   **Node A (index 0):**
    *   Left child: `2 * 0 + 1 = 1` (Node B) - Correct.
    *   Right child: `2 * 0 + 2 = 2` (Node C) - Correct.

*   **Node B (index 1):**
    *   Left child: `2 * 1 + 1 = 3` (Node D) - Correct.
    *   Right child: `2 * 1 + 2 = 4` (Node E) - Correct.
    *   Parent: `floor((1 - 1) / 2) = floor(0 / 2) = 0` (Node A) - Correct.

*   **Node C (index 2):**
    *   Left child: `2 * 2 + 1 = 5` (Node F) - Correct.
    *   Right child: `2 * 2 + 2 = 6` (Index 6 is not present in our example array, implying it's empty, which is correct for a complete binary tree).
    *   Parent: `floor((2 - 1) / 2) = floor(1 / 2) = 0` (Node A) - Correct.

*   **Node D (index 3):**
    *   Left child: `2 * 3 + 1 = 7` (Not present)
    *   Right child: `2 * 3 + 2 = 8` (Not present)
    *   Parent: `floor((3 - 1) / 2) = floor(2 / 2) = 1` (Node B) - Correct.

### 4. Advantages and Disadvantages

#### 4.1 Advantages

*   **Space Efficiency:** For a complete binary tree, there are no wasted spaces in the array. The number of nodes `n` directly relates to the array size.
*   **Simple Implementation:** Calculating parent and child indices is straightforward using arithmetic operations, avoiding the need for explicit pointers.
*   **Efficient Access:** Direct access to any node is possible via its index, making operations like finding children or parents very fast (O(1)).
*   **Ideal for Heaps:** This representation is the fundamental basis for implementing binary heaps, which are crucial in many algorithms (e.g., priority queues, heap sort).

#### 4.2 Disadvantages

*   **Requires Complete Binary Tree:** This representation is only efficient and practical for **complete binary trees**. If the tree is not complete (e.g., a general binary tree with many empty branches or skewed structure), the array would contain many unused slots, leading to significant **wasted space**.
*   **Dynamic Resizing:** If the number of nodes exceeds the current array capacity, dynamic resizing (copying to a larger array) can be an expensive operation (O(n)).

### 5. Applications

The most prominent application of the complete binary tree array representation is the **Heap** data structure.

#### 5.1 Heap

A **heap** is a specialized tree-based data structure that satisfies the heap property. In a **min-heap**, for any given node C, if P is a parent node of C, then the key (the value) of P is less than or equal to the key of C. In a **max-heap**, the key of P is greater than or equal to the key of C.

**How it relates to complete binary trees:**

Heaps are always implemented as complete binary trees. This allows them to be efficiently stored in an array, making heap operations (insertion, deletion, finding min/max) perform well (typically O(log n)).

### 6. Practice Questions and Exercises

**Instructions:** For the following questions, assume a 0-based indexed array representation of a complete binary tree.

#### Question 1:

Consider a complete binary tree stored in an array. If a node is at index `10`, what are the indices of its:
a) Left child?
b) Right child?
c) Parent?

#### Question 2:

If the left child of a node is at index `25`, what is the index of that node (the parent)?

#### Question 3:

If the right child of a node is at index `30`, what is the index of that node (the parent)?

#### Question 4:

An array `arr = [10, 20, 30, 40, 50, 60, 70]` represents a complete binary tree.
a) Draw the tree structure.
b) What is the value of the root?
c) What are the children of the node with value 20?
d) What is the parent of the node with value 60?

#### Question 5:

If an array has a size of 15, what is the index of the last possible node in the complete binary tree representation?

---

### Answers to Practice Questions

#### Answer 1:

Given node at index `i = 10`:
a) Left child: `2 * 10 + 1 = 21`
b) Right child: `2 * 10 + 2 = 22`
c) Parent: `floor((10 - 1) / 2) = floor(9 / 2) = 4`

#### Answer 2:

Given left child at index `25`. We know `left_child(i) = 2 * i + 1`.
So, `2 * i + 1 = 25`
`2 * i = 24`
`i = 12`
The parent node is at index `12`.

#### Answer 3:

Given right child at index `30`. We know `right_child(i) = 2 * i + 2`.
So, `2 * i + 2 = 30`
`2 * i = 28`
`i = 14`
The parent node is at index `14`.

#### Answer 4:

Array `arr = [10, 20, 30, 40, 50, 60, 70]`

a) **Tree Structure:**

```
        10 (0)
       /   \
      20 (1) 30 (2)
     / \   / \
    40(3) 50(4) 60(5) 70(6)
```

b) The value of the root is at index 0, which is `10`.

c) The node with value 20 is at index 1.
   Left child: `2 * 1 + 1 = 3` (value 40)
   Right child: `2 * 1 + 2 = 4` (value 50)
   The children of the node with value 20 are nodes with values 40 and 50.

d) The node with value 60 is at index 5.
   Parent: `floor((5 - 1) / 2) = floor(4 / 2) = 2` (value 30)
   The parent of the node with value 60 is the node with value 30.

#### Answer 5:

An array of size 15 means indices range from 0 to 14.
The last possible node in a complete binary tree representation using an array of size `N` would be at index `N-1`.
Therefore, the index of the last possible node is `15 - 1 = 14`.

### 7. Important Points to Remember

*   **Complete Binary Tree is Key:** The array representation is highly efficient *only* for complete binary trees. For general binary trees, it can lead to significant space wastage.
*   **0-Based Indexing Formulas:** Always be mindful of whether you are using 0-based or 1-based indexing. For this module, it's 0-based:
    *   Left Child: `2*i + 1`
    *   Right Child: `2*i + 2`
    *   Parent: `floor((i - 1) / 2)`
*   **Heaps Rely on This:** This array representation is the backbone of heap data structures, making them practical to implement.
*   **No Gaps:** The "complete" nature ensures that if a node exists at index `i`, all nodes at indices less than `i` also exist. This avoids empty slots within the occupied portion of the array.
*   **Array Size and Depth:** The number of nodes in a complete binary tree of height `h` is between `2^h` and `2^(h+1) - 1`. An array of size `n` can represent a complete binary tree with `n` nodes. The height of such a tree is approximately `log2(n)`.
