---
title: "Binary Tree Representation"
subject: "DATA STRUCTURES"
module: "Module 3: Trees and Graphs: Trees"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f363eb"
status: "completed"
scrapedAt: "2026-05-23T16:20:44.720Z"
---
# Data Structures: Module 3 - Trees and Graphs: Trees

## Topic: Binary Tree Representation

This module introduces you to the fundamental concept of trees, a hierarchical data structure. We will focus on binary trees, a specific type of tree where each node has at most two children. Understanding binary tree representation is crucial for many advanced data structures and algorithms.

### Learning Outcomes:

By the end of this topic, you should be able to:

*   Understand the definition and properties of a binary tree.
*   Explain different ways to represent a binary tree in memory.
*   Analyze the space and time complexities of various binary tree operations based on their representation.
*   Implement binary tree operations using chosen representation methods.
*   Compare the suitability of different binary tree representations for specific applications.

### Key Concepts and Definitions:

*   **Tree:** A nonlinear data structure that organizes data in a hierarchical manner. It consists of a collection of nodes.
*   **Node:** A fundamental unit of a tree, containing data and pointers to its children.
*   **Root:** The topmost node in a tree. A tree with no nodes is an empty tree.
*   **Parent:** A node that has one or more children.
*   **Child:** A node that is directly connected to another node (its parent).
*   **Siblings:** Nodes that share the same parent.
*   **Leaf (or Terminal Node):** A node with no children.
*   **Internal Node (or Non-terminal Node):** A node that has at least one child.
*   **Edge:** A connection between two nodes.
*   **Path:** A sequence of nodes connected by edges.
*   **Depth of a Node:** The number of edges on the path from the root to that node. The root has a depth of 0.
*   **Height of a Node:** The number of edges on the longest path from that node to a leaf. A leaf has a height of 0.
*   **Height of a Tree:** The height of its root node. An empty tree has a height of -1.
*   **Full Binary Tree:** A tree in which every node has either 0 or 2 children.
*   **Complete Binary Tree:** A binary tree in which every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible.
*   **Extended Binary Tree:** A binary tree where each original node has either two children or no children. If a node has only one child, an artificial node (often called a null or dummy node) is added as the missing child.
*   **Binary Tree:** A tree in which each node has at most two children, typically referred to as the **left child** and the **right child**.

**Example of a Binary Tree:**

```
      A
     / \
    B   C
   / \   \
  D   E   F
```

In this example:
*   'A' is the root.
*   'B' and 'C' are children of 'A'.
*   'D', 'E', and 'F' are leaf nodes.
*   'B' and 'C' are siblings.
*   The depth of 'F' is 2.
*   The height of node 'B' is 1.
*   The height of the tree is 2.

### Binary Tree Representation:

There are two primary ways to represent a binary tree in memory:

1.  **Linked Representation (using Nodes/Pointers)**
2.  **Array Representation**

#### 1. Linked Representation (using Nodes/Pointers)

This is the most common and flexible way to represent a binary tree. Each node is typically implemented as a structure or class containing:

*   **Data:** The information stored in the node.
*   **Left Child Pointer:** A pointer to the left child node. If there is no left child, this pointer is usually set to `NULL` or `nullptr`.
*   **Right Child Pointer:** A pointer to the right child node. If there is no right child, this pointer is usually set to `NULL` or `nullptr`.

**Structure Definition (C-style):**

```c
struct TreeNode {
    DataType data; // Replace DataType with the actual data type
    struct TreeNode *leftChild;
    struct TreeNode *rightChild;
};
```

**Structure Definition (C++ style):**

```cpp
template <typename DataType>
struct TreeNode {
    DataType data;
    TreeNode *leftChild;
    TreeNode *rightChild;

    // Constructor
    TreeNode(DataType val) : data(val), leftChild(nullptr), rightChild(nullptr) {}
};
```

**Advantages of Linked Representation:**

*   **Dynamic Size:** Easily handles trees of varying sizes. Memory is allocated only when a new node is created.
*   **Flexibility:** Nodes can be inserted and deleted efficiently without requiring significant memory reallocation.
*   **Efficient Insertions/Deletions:** Adding or removing nodes is generally straightforward.

**Disadvantages of Linked Representation:**

*   **Space Overhead:** Each node requires extra space for the pointers, which can be significant if the data itself is small.
*   **Pointer Management:** Requires careful handling of pointers to avoid memory leaks or dangling pointers.
*   **Accessing Siblings:** Direct access to a sibling is not possible without traversing from the parent.

**Example Implementation Snippet (C++):**

```cpp
// Creating a simple binary tree:
//      10
//     /  \
//    5    15
//   / \
//  2   7

TreeNode<int>* root = new TreeNode<int>(10);
root->leftChild = new TreeNode<int>(5);
root->rightChild = new TreeNode<int>(15);
root->leftChild->leftChild = new TreeNode<int>(2);
root->leftChild->rightChild = new TreeNode<int>(7);
```

**Referencing Textbooks:**

*   **Horowitz, Sahni, Freed:** Chapter 7 ("Trees") extensively discusses tree structures and their representations. They detail the node-based linked implementation for binary trees.
*   **Samanta:** Chapter 5 ("Trees") provides a clear explanation of tree concepts and the common pointer-based implementation for binary trees.
*   **Gilberg, Forouzan:** Chapter 9 ("Trees") presents the linked list representation of binary trees with node structures and associated operations.

#### 2. Array Representation

In this representation, a binary tree is stored in an array. This method is particularly efficient for **complete binary trees** or **full binary trees** where there are no significant gaps in the structure.

**Mapping Nodes to Array Indices:**

The common convention is to store the root at index 0 or 1. Let's assume the root is at index 1 for simpler parent-child index calculations.

*   If a node is at index `i`:
    *   Its **left child** is at index `2 * i`.
    *   Its **right child** is at index `2 * i + 1`.
    *   Its **parent** is at index `floor(i / 2)`.

**If the root is at index 0:**

*   If a node is at index `i`:
    *   Its **left child** is at index `2 * i + 1`.
    *   Its **right child** is at index `2 * i + 2`.
    *   Its **parent** is at index `floor((i - 1) / 2)`.

**Example Array Representation (Root at index 1, assuming a complete binary tree):**

Consider the tree:
```
      A (1)
     / \
    B(2) C(3)
   / \
  D(4) E(5)
```

Array representation: `[_, A, B, C, D, E]` (index 0 is unused or can store tree metadata)

If we use index 0 for the root: `[A, B, C, D, E]`

**When is Array Representation suitable?**

*   **Complete Binary Trees:** This representation is highly efficient in terms of space and traversal for complete binary trees because there are no wasted array slots.
*   **Full Binary Trees:** Also efficient for full binary trees, as all internal nodes have two children, minimizing gaps.

**Advantages of Array Representation:**

*   **Efficient Access:** Given the index of a node, its parent and children can be accessed directly in O(1) time.
*   **Space Efficiency (for dense trees):** For complete or nearly complete binary trees, it can be more space-efficient than the linked representation due to less overhead per node.
*   **Simplicity:** Often simpler to implement for specific tree structures.

**Disadvantages of Array Representation:**

*   **Wasted Space (for sparse trees):** If the binary tree is not complete or is very skewed (e.g., a degenerate tree resembling a linked list), a large portion of the array might remain empty, leading to significant space wastage.
*   **Fixed Size (typically):** Arrays usually have a fixed size. If the tree grows beyond the allocated array size, resizing can be costly. Dynamic arrays (like `std::vector` in C++) can mitigate this, but resizing still incurs overhead.
*   **Inefficient Insertions/Deletions:** Inserting or deleting nodes in the middle of the tree can be complex and require shifting many elements, leading to higher time complexity.

**Example of Space Wastage:**

Consider a degenerate binary tree (like a linked list):
```
A
 \
  B
   \
    C
     \
      D
```

Array representation (root at index 1, size 10): `[_, A, _, B, _, C, _, D, _, _]`

Here, indices 2, 4, 6, 8, 9 are wasted.

**Referencing Textbooks:**

*   **Horowitz, Sahni, Freed:** While they primarily focus on linked structures, they might touch upon array-based representations for specific tree types like heaps, which are often complete binary trees.
*   **Samanta:** Chapter 5 might briefly mention array representations, especially when discussing complete binary trees.
*   **Gilberg, Forouzan:** Might discuss array representation as an alternative, particularly for heaps.

#### Choosing the Right Representation:

*   **Linked Representation:** Generally preferred for most binary tree applications due to its flexibility and efficient handling of dynamic tree structures, even if they are sparse or skewed.
*   **Array Representation:** Best suited for **complete binary trees** (like binary heaps) where the tree structure is predictable and dense.

### Operations on Binary Trees (General Concepts):

The representation choice impacts the efficiency of various operations. Common operations include:

*   **Traversal:** Visiting each node in a specific order (e.g., In-order, Pre-order, Post-order, Level-order).
*   **Insertion:** Adding a new node.
*   **Deletion:** Removing a node.
*   **Searching:** Finding a node with a specific value.
*   **Finding Min/Max:** Locating the smallest or largest value.

**Complexity Considerations (General):**

*   **Linked Representation:**
    *   Accessing a node's children: O(1)
    *   Insertion/Deletion (if parent is known): O(1)
    *   Searching (for a general binary tree): O(N) in the worst case, O(log N) for balanced binary search trees.
*   **Array Representation:**
    *   Accessing a node's children/parent (given index): O(1)
    *   Insertion/Deletion (can be O(N) due to shifting): More complex to manage.
    *   Searching: O(N) in the worst case.

### Course Outcome Alignment:

*   **CO1 (Asymptotic Notations):** Understanding the time and space complexity of operations based on chosen representations (e.g., O(1) for parent/child access in array, O(N) space overhead for pointers in linked lists).
*   **CO2 (Arrays, Linked Lists):** This module uses linked lists extensively for node representation. Array representation also leverages array concepts.
*   **CO3 (Trees and Graphs):** This module directly deals with trees, a fundamental non-linear data structure. Understanding binary tree representation is a prerequisite for designing algorithms using more complex tree structures (like binary search trees, AVL trees, B-trees) and graphs.
*   **CO4 (Searching and Sorting):** Binary trees, particularly Binary Search Trees (BSTs), are used for efficient searching and sorting. The representation affects search performance.

### Practice Questions:

1.  **Definition & Properties:**
    *   Define a binary tree. What is the maximum number of nodes a binary tree of height `h` can have? What is the minimum number of nodes?
    *   Distinguish between a full binary tree and a complete binary tree. Provide examples.

2.  **Representation:**
    *   Consider the following binary tree:
        ```
              10
             /  \
            5    15
           / \     \
          2   7     20
        ```
        a) Represent this tree using the **linked representation** (describe the nodes and pointers).
        b) Represent this tree using the **array representation**, assuming the root is at index 1. Show the array and indicate unused elements.
        c) If the tree were a complete binary tree and we used the array representation (root at index 0), what would be the indices of the children of the node at index 3?

3.  **Complexity Analysis:**
    *   What is the space complexity of the linked representation of a binary tree with `N` nodes, considering only the space for data and pointers?
    *   What is the potential space complexity of the array representation of a binary tree with `N` nodes if the tree is very skewed?

4.  **Application:**
    *   For which type of binary tree is the **array representation** generally more efficient in terms of space and why?
    *   If you need to frequently insert and delete nodes at arbitrary positions in a binary tree, which representation would you generally prefer and why?

### Answers to Practice Questions:

1.  **Definition & Properties:**
    *   A binary tree is a tree data structure in which each node has at most two children, referred to as the left child and the right child.
    *   **Maximum number of nodes:** For a binary tree of height `h`, the maximum number of nodes is $2^{h+1} - 1$.
    *   **Minimum number of nodes:** For a binary tree of height `h`, the minimum number of nodes is `h + 1` (forming a degenerate tree like a linked list).

2.  **Representation:**
    *   Consider the following binary tree:
        ```
              10
             /  \
            5    15
           / \     \
          2   7     20
        ```
        a) **Linked Representation:**
        You would have 7 nodes. Each node would have an integer data field and two pointers. For example:
        *   Node 10: `data = 10`, `leftChild` points to Node 5, `rightChild` points to Node 15.
        *   Node 5: `data = 5`, `leftChild` points to Node 2, `rightChild` points to Node 7.
        *   Node 15: `data = 15`, `leftChild` is `NULL`, `rightChild` points to Node 20.
        *   Node 2: `data = 2`, `leftChild` is `NULL`, `rightChild` is `NULL`.
        *   Node 7: `data = 7`, `leftChild` is `NULL`, `rightChild` is `NULL`.
        *   Node 20: `data = 20`, `leftChild` is `NULL`, `rightChild` is `NULL`.

        b) **Array Representation (root at index 1):**
        The tree has a height of 2. The maximum index needed for a complete binary tree of height 2 is $2^{2+1}-1 = 7$. So, an array of size at least 8 (for index 7) is needed.

        ```
        Index: | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
        ------|---|---|---|---|---|---|---|---|
        Value:| _ | 10| 5 | 15| 2 | 7 | _ | 20|
        ```
        Here, index 6 is unused because Node 15 has no left child.

        c) If the root is at index 0:
        *   Node at index 3 is '2'.
        *   Left child of index 3 is `2 * 3 + 1 = 7`.
        *   Right child of index 3 is `2 * 3 + 2 = 8`.

3.  **Complexity Analysis:**
    *   **Space Complexity of Linked Representation:** For `N` nodes, each node typically stores data and two pointers. If the size of data is `D` and the size of a pointer is `P`, the space complexity is O(N * (D + 2P)), which simplifies to **O(N)**, as `D` and `P` are constant.
    *   **Space Complexity of Array Representation (skewed tree):** If the tree is skewed like a linked list, and we allocate an array to accommodate the maximum possible nodes for its height, the space complexity can be **O(2^h)**, where `h` is the height. Since `h` can be up to `N-1` for a skewed tree, this can be **O(2^N)** in the worst case of allocation, or more practically, **O(N)** for the maximum index needed if we know the structure. However, the key issue is the *wastage* if the tree is not dense.

4.  **Application:**
    *   The **array representation** is generally more efficient in terms of space for **complete binary trees** because all levels (except possibly the last) are fully filled, and nodes on the last level are as far left as possible, minimizing unused slots in the array.
    *   If you need to frequently insert and delete nodes at arbitrary positions, you would generally prefer the **linked representation**. This is because insertions and deletions in a linked structure typically involve changing a few pointers (often O(1) if the parent is known), whereas in an array representation, these operations might require shifting many elements (O(N)), making them less efficient.

### Important Points to Remember:

*   A binary tree is defined by having at most two children per node.
*   The linked representation offers flexibility and is suitable for most binary tree applications.
*   The array representation is highly efficient for complete binary trees, especially for heap implementations.
*   The choice of representation significantly impacts the performance (time and space complexity) of tree operations.
*   Always consider the trade-offs between space and time complexity when choosing a representation.

This concludes the topic on Binary Tree Representation. Understanding these concepts is foundational for exploring more advanced tree structures and algorithms like Binary Search Trees, Heaps, and Tree Traversals.
