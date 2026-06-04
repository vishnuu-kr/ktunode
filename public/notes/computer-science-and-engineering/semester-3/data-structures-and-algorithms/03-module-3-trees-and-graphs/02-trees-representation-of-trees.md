---
title: "Trees :- Representation Of Trees"
subject: "DATA STRUCTURES AND ALGORITHMS"
module: "Module 3: Trees and Graphs"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ac3b"
status: "completed"
scrapedAt: "2026-05-20T16:22:58.956Z"
---
## DATA STRUCTURES AND ALGORITHMS: Module 3 - Trees and Graphs
### Topic: Trees - Representation of Trees

**Module Overview:** This module explores fundamental data structures: trees and graphs. Understanding their properties, representations, and traversal techniques is crucial for efficient algorithm design and problem-solving. This section focuses specifically on *trees* and how they can be represented in memory.

**Learning Outcomes:**

*   Understand the different ways to represent trees in computer memory.
*   Be able to implement tree representations using arrays.
*   Be able to implement tree representations using linked lists.
*   Compare and contrast different tree representation methods, considering their advantages and disadvantages.
*   Be able to select the appropriate tree representation based on the specific application.

**1. Key Concepts and Definitions**

*   **Tree:** A hierarchical data structure consisting of nodes connected by edges.  It has a root node and zero or more subtrees.
*   **Node:** A basic unit of a tree. It contains data and can have links to other nodes (children).
*   **Root Node:** The topmost node in the tree.  It has no parent.
*   **Child Node:** A node directly connected to another node (its parent) on the level below.
*   **Parent Node:** A node that has one or more child nodes.
*   **Leaf Node:** A node with no children.
*   **Sibling Node:** Nodes that share the same parent.
*   **Edge:** The connection between two nodes.
*   **Path:** A sequence of nodes and edges connecting a node to a descendant.
*   **Level:** The level of a node represents its distance from the root. The root is at level 0.
*   **Height of a Tree:** The maximum level of any node in the tree.
*   **Depth of a Node:** The number of edges from the root to the node.
*   **Binary Tree:** A tree where each node has at most two children, referred to as the left child and the right child.
*   **Complete Binary Tree:** A binary tree in which every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible.
*   **Full Binary Tree:**  A binary tree in which every node other than the leaves has two children.

**2. Tree Representation Methods**

There are two primary methods for representing trees in computer memory:

*   **Array Representation:**  Uses an array to store the nodes of the tree.
*   **Linked List Representation:**  Uses linked lists to store the nodes and their relationships.

**2.1 Array Representation**

*   **Concept:** Nodes are stored in an array, and their relationships are determined implicitly by their indices.

*   **Common Technique: Level Order Traversal Indexing (for Complete Binary Trees)**
    *   Assign index 0 to the root node.
    *   Assign indices level by level, from left to right.
    *   For a node at index `i`:
        *   Left child is at index `2i + 1`
        *   Right child is at index `2i + 2`
        *   Parent is at index `(i - 1) / 2` (integer division)

*   **Example:**

    ```
          A
         / \
        B   C
       / \
      D   E
    ```

    Array Representation: `[A, B, C, D, E, null, null]` (The `null` values indicate the absence of nodes.)

*   **Advantages:**
    *   Simple to implement for complete binary trees.
    *   Easy to access parent and child nodes using index calculations.
    *   Space efficient for complete binary trees where little memory is wasted.

*   **Disadvantages:**
    *   Wastes a significant amount of space for non-complete or skewed trees, as many array elements will be unused.
    *   Insertion and deletion of nodes are inefficient, requiring shifting of array elements.
    *   Not suitable for general trees with varying numbers of children per node.

**2.2 Linked List Representation**

*   **Concept:** Each node in the tree is represented as a node in a linked list, containing data and pointers to its children.

*   **Implementation:** Each node typically contains:
    *   `data`: The data stored in the node.
    *   `left`: Pointer to the left child (if it exists).  `NULL` if no left child.
    *   `right`: Pointer to the right child (if it exists). `NULL` if no right child.  (This is the typical representation for a Binary Tree)

*   **Generalized Tree Representation (for Trees with Variable Number of Children)**
    *   `data`: The data stored in the node.
    *   `child`: A pointer to a linked list of child nodes.
    *   `sibling`: Pointer to the next sibling node.

*   **Example (Binary Tree):**

    ```c++
    struct Node {
        int data;
        Node* left;
        Node* right;

        Node(int val) : data(val), left(nullptr), right(nullptr) {}
    };

    // Creating the tree from the Array Representation Example above.

    Node* root = new Node(1); // A
    root->left = new Node(2); // B
    root->right = new Node(3); // C
    root->left->left = new Node(4); // D
    root->left->right = new Node(5); // E

    // Tree:
    //        1
    //       / \
    //      2   3
    //     / \
    //    4   5
    ```

*   **Advantages:**
    *   More memory-efficient for non-complete or skewed trees, as it only allocates memory for actual nodes.
    *   Dynamic allocation allows for efficient insertion and deletion of nodes without shifting.
    *   Suitable for general trees with varying numbers of children.
    *   Provides a more flexible representation compared to arrays.

*   **Disadvantages:**
    *   Requires more memory per node due to the storage of pointers.
    *   Accessing a specific node (other than the root) requires traversing the tree, which can be time-consuming.
    *   More complex to implement compared to array representation.

**3. Comparison of Array and Linked List Representation**

| Feature         | Array Representation                                    | Linked List Representation                               |
|-----------------|--------------------------------------------------------|----------------------------------------------------------|
| Memory Usage     | Inefficient for skewed/non-complete trees               | Efficient, memory allocated only for existing nodes      |
| Implementation  | Simpler for complete binary trees                      | More complex, requires dynamic memory management         |
| Node Access     | Fast access to parent/children via index calculations   | Requires traversal from the root to access specific nodes |
| Insertion/Deletion| Inefficient, requires shifting elements                 | Efficient, no shifting required                          |
| Suitability     | Complete binary trees                                  | General trees, especially skewed or dynamic trees       |
| Space Complexity | O(N), where N is the *maximum* possible number of nodes | O(N), where N is the *actual* number of nodes            |

**4. Selecting the Appropriate Representation**

The choice of tree representation depends on several factors:

*   **Type of Tree:** Complete binary trees are well-suited for array representation. General trees with variable numbers of children are better represented using linked lists.
*   **Memory Constraints:** If memory is limited, linked list representation is generally preferred for non-complete trees.
*   **Frequency of Insertion/Deletion:** If insertions and deletions are frequent, linked list representation is more efficient.
*   **Frequency of Node Access:** If fast access to specific nodes is required, and the tree is relatively static, array representation (with appropriate indexing scheme) *might* be suitable, but is often still less ideal than a more sophisticated Tree data structure like a balanced search tree.
*   **Implementation Complexity:** Array representation is simpler to implement initially but can become complex when handling insertions/deletions in non-complete trees.

**5. Examples**

*   **Example 1: Storing a family tree:**  A linked list representation would be most suitable, as the number of children per parent can vary, and the tree is likely to be dynamic (people are born and die).

*   **Example 2: Implementing a heap data structure (priority queue):** An array representation is a common and efficient choice because heaps are typically represented as complete binary trees.

*   **Example 3: Storing an organizational chart:** A generalized linked list representation would be appropriate as the number of subordinates for each manager can vary.

**6. Practice Questions/Exercises**

1.  **Draw the array representation of the following binary tree:**

    ```
         1
        / \
       2   3
      /   / \
     4   5   6
    ```

    **Answer:** `[1, 2, 3, 4, null, 5, 6]`

2.  **Write C++ code to create the linked list representation of the binary tree in question 1.**

    ```c++
    #include <iostream>

    struct Node {
        int data;
        Node* left;
        Node* right;

        Node(int val) : data(val), left(nullptr), right(nullptr) {}
    };

    int main() {
        Node* root = new Node(1);
        root->left = new Node(2);
        root->right = new Node(3);
        root->left->left = new Node(4);
        root->right->left = new Node(5);
        root->right->right = new Node(6);

        // The tree is now created.  You could add code here to traverse and verify it.
        return 0;
    }
    ```

3.  **What are the advantages and disadvantages of using an array representation for a skewed binary tree?**

    **Answer:** Advantages: Simple to implement initially. Disadvantages: Highly inefficient in terms of memory usage, insertion, and deletion. Most of the array would be empty, wasting significant space.

4.  **Design a `Node` struct/class that could be used to represent a general tree (not just a binary tree) using a linked list structure.  Include an appropriate data member to store the node's value, and a pointer to a list of children.**

    ```c++
    #include <list>

    struct GeneralTreeNode {
        int data;
        std::list<GeneralTreeNode*> children; // List of child nodes

        GeneralTreeNode(int val) : data(val) {}
    };
    ```

5.  **Why is the level-order indexing scheme only suitable for complete or almost complete binary trees in array representations?**

    **Answer:** Because it relies on calculating the positions of children and parents based on indices. In sparse or skewed trees, this would leave gaps in the array, leading to wasted space and incorrect calculations.

**7. Important Points to Remember**

*   The choice between array and linked list representation depends on the specific tree structure and the operations to be performed.
*   Array representation is well-suited for complete binary trees where space is not a major concern.
*   Linked list representation is more flexible and memory-efficient for general trees and dynamic scenarios.
*   Understanding the trade-offs between space and time complexity is crucial when selecting the appropriate representation.
*   Consider other tree data structures beyond simple binary trees when designing efficient solutions (e.g., balanced search trees, tries, etc.).
