---
title: "Binary Tree Representation"
subject: "DATA STRUCTURES AND ALGORITHMS"
module: "Module 3: Trees and Graphs"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ac3d"
status: "completed"
scrapedAt: "2026-05-20T16:23:00.387Z"
---
# DATA STRUCTURES AND ALGORITHMS: Module 3 - Trees and Graphs
## Topic: Binary Tree Representation

**Description:** This module focuses on Binary Tree Representations, a crucial component of understanding tree data structures.

**Learning Outcomes:**

*   Understand the fundamental concepts of binary trees.
*   Learn different methods of representing binary trees (array-based, linked-list based).
*   Be able to compare and contrast the different representation methods.
*   Implement binary trees using linked lists in code.
*   Understand the space and time complexities associated with different representation methods.

---

### 1. Introduction to Binary Trees

*   **Definition:** A binary tree is a tree data structure in which each node has at most two children, which are referred to as the *left child* and the *right child*.

*   **Key Terms:**
    *   **Root:** The topmost node in the tree. Only one root node exists in a tree.
    *   **Node:** A component of a tree which may contain data and links to other nodes.
    *   **Parent:** The node directly above a given node.
    *   **Child:** A node directly below a given node.
    *   **Left Child:** The child node to the left of its parent.
    *   **Right Child:** The child node to the right of its parent.
    *   **Sibling:** Nodes that share the same parent.
    *   **Leaf:** A node with no children.
    *   **Internal Node:** A node with at least one child.
    *   **Subtree:** A tree consisting of a node in a tree and all of its descendants.
    *   **Height:** The length of the longest path from the root to a leaf.  The height of a tree with a single node is often defined as 0.
    *   **Depth:** The length of the path from the root to a specific node. The depth of the root node is 0.
    *   **Level:** The level of a node is equal to its depth + 1. The root is at level 1.
    *   **Complete Binary Tree:** A binary tree in which every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible.
    *   **Full Binary Tree:** A binary tree in which every node has either 0 or 2 children.
    *   **Perfect Binary Tree:** A binary tree in which all internal nodes have two children and all leaves are at the same level.  A perfect binary tree is both complete and full.

*   **Properties of Binary Trees:**
    *   At most 2<sup>i</sup> nodes at level *i*.
    *   Maximum number of nodes in a binary tree of height *h* is 2<sup>h+1</sup> - 1.
    *   Minimum possible height of a binary tree with *n* nodes is ⌊log<sub>2</sub>(n+1)⌋ - 1 (or ⌈log<sub>2</sub>(n+1)⌉ - 1).
    *   In a Binary Tree, the number of leaf nodes is one more than the number of nodes with two children.

### 2. Binary Tree Representations

There are two primary ways to represent a binary tree:

#### 2.1. Array-Based Representation (Sequential Representation)

*   **Concept:** Uses an array to store the nodes of the tree.  A specific indexing scheme is used to determine the relationships between nodes.
*   **Implementation:**
    *   The root node is typically stored at index 1 (or 0, depending on the implementation choice).
    *   For a node at index `i`:
        *   Left child: `2 * i`
        *   Right child: `2 * i + 1`
        *   Parent: `i / 2` (integer division)
*   **Example:**

    Consider a binary tree with root 'A', left child 'B', right child 'C', 'B's left child 'D', and 'B's right child 'E'.

    Array Representation (starting at index 1): `[ , A, B, C, D, E, , , ]`

*   **Advantages:**
    *   Simple to implement.
    *   Easy to find parent and children nodes.
*   **Disadvantages:**
    *   **Space Inefficiency:**  If the tree is sparse (many missing nodes), a large amount of space may be wasted, as the array needs to be large enough to accommodate the potential maximum number of nodes at the deepest level.  This is especially bad for skewed trees.
    *   **Difficult Insertion/Deletion:** Insertion or deletion of nodes requires shifting elements in the array, which can be time-consuming.
*   **Best Use Cases:** Complete binary trees or almost complete binary trees where most of the nodes are present.

#### 2.2. Linked-List Based Representation

*   **Concept:** Each node in the tree is represented as a node object with data and pointers to its left and right children.
*   **Implementation:**

    ```python
    class Node:
        def __init__(self, data):
            self.data = data
            self.left = None  # Pointer to the left child
            self.right = None # Pointer to the right child
    ```

    *   Each node contains:
        *   `data`: The value stored in the node.
        *   `left`: A pointer (reference) to the left child node.  It is `None` if there is no left child.
        *   `right`: A pointer (reference) to the right child node.  It is `None` if there is no right child.
    *   The root node is a pointer to the first node in the tree.

*   **Example:**

    Representing the same binary tree as before (root 'A', left child 'B', right child 'C', 'B's left child 'D', and 'B's right child 'E') using linked list representation:

    ```
            A
           / \
          B   C
         / \
        D   E
    ```

    In memory, this would be represented as individual `Node` objects, each with pointers connecting them.

*   **Advantages:**
    *   **Space Efficiency:** Only uses memory for the nodes that are actually present in the tree.  No space is wasted for empty nodes.
    *   **Easy Insertion/Deletion:** Inserting or deleting nodes involves changing pointers, which is generally faster than shifting array elements.
    *   More dynamic – the tree can grow or shrink easily.
*   **Disadvantages:**
    *   Requires extra memory to store pointers (left and right).
    *   Finding the parent node is more difficult (requires traversal unless a parent pointer is also included in each node).
*   **Best Use Cases:** Most general cases, especially when the tree is sparse or dynamic.

### 3. Comparison of Array-Based and Linked-List Based Representations

| Feature        | Array-Based                  | Linked-List Based           |
| -------------- | ---------------------------- | --------------------------- |
| Space Usage   | Potentially wasteful         | More efficient            |
| Insertion/Deletion | Difficult, requires shifting | Easier, pointer manipulation |
| Parent Finding   | Easy, using index arithmetic | More difficult, may need traversal |
| Implementation Complexity | Simpler                 | More complex              |
| Best Use Case   | Complete/almost complete trees | Sparse/dynamic trees          |

### 4. Implementing Binary Trees using Linked Lists (Python)

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

class BinaryTree:
    def __init__(self):
        self.root = None

    def insert_left(self, root_node, new_data):
        """Inserts a new node as the left child of the given root node."""
        if root_node.left is None:
            root_node.left = Node(new_data)
        else:
            print("Left child already exists!") # Handle this case differently based on desired behavior

    def insert_right(self, root_node, new_data):
        """Inserts a new node as the right child of the given root node."""
        if root_node.right is None:
            root_node.right = Node(new_data)
        else:
            print("Right child already exists!") # Handle this case differently based on desired behavior

    def print_tree(self, node, level=0, prefix="Root: "):
      """Prints the tree structure in a hierarchical format."""
      if node is not None:
          print("  " * level + prefix + str(node.data))
          self.print_tree(node.left, level + 1, "L --- ")
          self.print_tree(node.right, level + 1, "R --- ")



# Example Usage:
tree = BinaryTree()
tree.root = Node('A')
tree.insert_left(tree.root, 'B')
tree.insert_right(tree.root, 'C')
tree.insert_left(tree.root.left, 'D')
tree.insert_right(tree.root.left, 'E')

tree.print_tree(tree.root) # Displays the tree structure


#Another example:
my_tree = BinaryTree()
my_tree.root = Node(1)
my_tree.insert_left(my_tree.root, 2)
my_tree.insert_right(my_tree.root, 3)
my_tree.insert_left(my_tree.root.left, 4)

my_tree.print_tree(my_tree.root)
```

### 5. Space and Time Complexities

*   **Array-Based Representation:**
    *   Space Complexity: O(2<sup>h+1</sup> - 1) in the worst case (where h is the height of the tree),  O(n) on average for complete binary trees, where n is the number of nodes. Can be highly inefficient for skewed or sparse trees.
    *   Time Complexity:
        *   Accessing a node: O(1) (direct access using array index)
        *   Insertion/Deletion: O(n) in the worst case (shifting elements)

*   **Linked-List Based Representation:**
    *   Space Complexity: O(n), where n is the number of nodes.
    *   Time Complexity:
        *   Accessing a specific node: O(h) in the worst case (h is the height of the tree, traversing from the root), O(log n) on average for balanced trees.
        *   Insertion/Deletion: O(1) once the node to be inserted/deleted is found.  Finding that node still takes O(h).

### 6. Practice Questions & Exercises

1.  **Question:** Given the binary tree representation `[ , 1, 2, 3, 4, 5, 6, 7]`, where the index starts at 1, what are the left and right children of the node at index 2?

    **Answer:** Left child is at index `2 * 2 = 4`, so the left child is `4`. The right child is at index `2 * 2 + 1 = 5`, so the right child is `5`.

2.  **Question:**  What are the advantages of using a linked-list based representation over an array-based representation for a very skewed binary tree?

    **Answer:** Linked-list representation is much more space-efficient for skewed trees because it only uses memory for the nodes that exist. Array-based representation would require a large array to accommodate the potential maximum number of nodes, wasting a significant amount of space.

3.  **Exercise:**  Write a function that takes a binary tree represented by linked lists and returns the height of the tree.

    ```python
    class Node: #Included here for completeness, though it should be defined.
        def __init__(self, data):
            self.data = data
            self.left = None
            self.right = None

    def tree_height(node):
        """Calculates the height of a binary tree.  Returns -1 if the tree is empty."""
        if node is None:
            return -1  # Height of an empty tree is -1
        else:
            left_height = tree_height(node.left)
            right_height = tree_height(node.right)
            return max(left_height, right_height) + 1

    #Example Usage (using the tree created in the previous example):
    tree = BinaryTree()
    tree.root = Node('A')
    tree.insert_left(tree.root, 'B')
    tree.insert_right(tree.root, 'C')
    tree.insert_left(tree.root.left, 'D')
    tree.insert_right(tree.root.left, 'E')

    height = tree_height(tree.root)
    print(f"The height of the tree is: {height}") # Output: The height of the tree is: 2
    ```

4.  **Exercise:** Explain the difference between a complete binary tree and a full binary tree. Give an example of a tree that is complete but not full, and a tree that is full but not complete.

    **Answer:**
    *   **Complete Binary Tree:**  All levels are completely filled except possibly the last level, and all nodes in the last level are as far left as possible.
    *   **Full Binary Tree:** Every node has either 0 or 2 children.

    *   **Complete but not Full:**
        ```
            1
           / \
          2   3
         /
        4
        ```
        This tree is complete because levels 0 and 1 are fully filled, and level 2's node is as far left as possible. However, node 2 only has one child, making it not a full binary tree.

    *   **Full but not Complete:**
        ```
             1
            / \
           2   3
          / \
         4   5
        /
       6
        ```

        This tree is full because every node has either 0 or 2 children. However, it's not complete because the nodes on the last level (6) are not as far left as possible and the level above is not completely full.  Node 3 could potentially have another child.

### 7. Important Points to Remember

*   Choose the appropriate representation (array-based or linked-list based) based on the characteristics of the tree (sparse vs. dense, static vs. dynamic).
*   Be aware of the space and time trade-offs between the two representations.
*   Understand the fundamental concepts of binary trees (root, nodes, children, height, depth, etc.).
*   When implementing binary trees using linked lists, remember to handle `None` pointers carefully.
*   Consider edge cases (empty trees, single-node trees) when writing algorithms.
