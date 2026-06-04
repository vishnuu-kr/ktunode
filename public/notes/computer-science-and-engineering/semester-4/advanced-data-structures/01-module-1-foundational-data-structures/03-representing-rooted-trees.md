---
title: "Representing rooted trees"
subject: "ADVANCED DATA STRUCTURES"
module: "Module 1: Foundational Data Structures"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b35b"
status: "completed"
scrapedAt: "2026-05-20T16:09:59.252Z"
---
## ADVANCED DATA STRUCTURES - Module 1: Foundational Data Structures - Representing Rooted Trees

**Description:** This module delves into representing rooted trees, a foundational concept for many advanced data structures and algorithms.

**Learning Outcomes:**

*   Understand the definition and properties of rooted trees.
*   Learn different methods for representing rooted trees in memory.
*   Compare and contrast various representation methods, considering space and time complexity.
*   Be able to choose the most appropriate representation for a given problem.
*   Implement basic operations on rooted trees using different representations.

### 1. Introduction to Rooted Trees

*   **Definition:** A rooted tree is a hierarchical data structure consisting of nodes connected by edges, with a designated node called the *root*. It's a directed, acyclic graph where every node, except the root, has a single parent.
*   **Key Concepts:**
    *   **Node:** A fundamental unit of data within the tree.
    *   **Root:** The topmost node in the tree, having no parent.
    *   **Parent:** The node directly above a given node in the hierarchy.
    *   **Child:** A node directly below a given node in the hierarchy.
    *   **Sibling:** Nodes sharing the same parent.
    *   **Leaf:** A node with no children.
    *   **Internal Node:** A node that has at least one child.
    *   **Ancestor:** Any node on the path from the root to a given node (excluding the node itself).
    *   **Descendant:** Any node in the subtree rooted at a given node (excluding the node itself).
    *   **Path:** A sequence of nodes connected by edges.
    *   **Depth (of a node):** The length of the path from the root to the node. The root has depth 0.
    *   **Height (of a node):** The length of the longest path from the node to a leaf.  A leaf has height 0.
    *   **Height (of a tree):** The height of the root node.
    *   **Subtree:** A tree formed by a node and all its descendants.
    *   **Ordered Tree:** A tree where the children of each node have a specific order.
    *   **Binary Tree:**  A tree where each node has at most two children, typically referred to as the left child and the right child.

*   **Example:** Consider a file system directory structure. The root directory is the root node, subdirectories are children, and files are leaf nodes.

### 2. Methods for Representing Rooted Trees

We will explore several methods for representing rooted trees in memory. Each method has its own trade-offs in terms of space and time complexity for various operations.

#### 2.1 Parent Pointer Representation

*   **Concept:**  Each node stores a pointer or index to its parent node.
*   **Data Structure:** An array or list, where the index represents a node and the value at that index represents the index (or pointer) of its parent.  A special value (e.g., -1 or NULL) indicates the root node.
*   **Example:**
    ```
    Nodes:  A   B   C   D   E   F   G
    Index:  0   1   2   3   4   5   6
    Parent: -1  0   0   1   1   2   2
    ```
    This represents the following tree (A is the root):
    ```
        A
       / \
      B   C
     / \ / \
    D   E F   G
    ```

*   **Advantages:**
    *   Simple to implement.
    *   Efficient for finding the parent of a node (O(1)).
*   **Disadvantages:**
    *   Inefficient for finding children.  Requires traversing the entire array. (O(n), where n is the number of nodes)
    *   Inefficient for determining descendants or subtrees.
    *   Difficult to determine the depth or height of a tree without traversing.
*   **Space Complexity:** O(n)

#### 2.2 Child Pointers Representation

*   **Concept:**  Each node stores a list of pointers or references to its children.
*   **Data Structure:**  Each node contains a data field and a list (array, linked list, etc.) of pointers to its child nodes.
*   **Example (Using Linked Lists for Children):**

    ```python
    class TreeNode:
        def __init__(self, data):
            self.data = data
            self.children = []

    root = TreeNode('A')
    b = TreeNode('B')
    c = TreeNode('C')
    d = TreeNode('D')
    e = TreeNode('E')
    f = TreeNode('F')
    g = TreeNode('G')

    root.children.append(b)
    root.children.append(c)
    b.children.append(d)
    b.children.append(e)
    c.children.append(f)
    c.children.append(g)
    ```

*   **Advantages:**
    *   Efficient for finding children of a node (O(k), where k is the number of children).
    *   Relatively straightforward to implement.
*   **Disadvantages:**
    *   Space complexity can be high if some nodes have many children while others have few. This leads to wasted space if an array is used for the child list, or extra overhead with linked lists.
    *   Inefficient for finding the parent of a node.
    *   Determining height or depth requires traversal.
*   **Space Complexity:**  O(n), but can vary depending on the data structure used for the child list.  In the worst case, with a single node having all other nodes as children, the space complexity might approach O(n<sup>2</sup>) if an array-based list is used.  With linked lists, it is closer to O(n + total number of children pointers), effectively still O(n) in most cases.

#### 2.3 Left-Child Right-Sibling Representation (Binary Tree Representation of General Trees)

*   **Concept:** Each node has two pointers: one to its *leftmost child* and one to its *next sibling*.  This effectively transforms a general tree into a binary tree representation.
*   **Data Structure:**  Each node has a data field, a left-child pointer, and a right-sibling pointer.
*   **Example:**  Consider the tree from the Parent Pointer example:
    ```
        A
       / \
      B   C
     / \ / \
    D   E F   G
    ```
    The Left-Child Right-Sibling representation would look like this (conceptually):

    ```python
    class TreeNode:
        def __init__(self, data):
            self.data = data
            self.left_child = None
            self.right_sibling = None

    a = TreeNode('A')
    b = TreeNode('B')
    c = TreeNode('C')
    d = TreeNode('D')
    e = TreeNode('E')
    f = TreeNode('F')
    g = TreeNode('G')

    a.left_child = b
    b.right_sibling = c

    b.left_child = d
    d.right_sibling = e

    c.left_child = f
    f.right_sibling = g

    # Visual representation of the transformed binary tree:

    #       A
    #      /
    #     B
    #    / \
    #   D   C
    #  /   /
    # E   F
    #    /
    #   G
    ```

*   **Advantages:**
    *   Relatively space-efficient compared to child-pointer representation, as each node only requires two pointers.
    *   Can be easily adapted to represent any type of tree.
    *   Facilitates certain tree traversals.
*   **Disadvantages:**
    *   Finding all children of a node requires traversing the sibling chain (O(k) where k is the number of children).
    *   Finding the parent of a node requires traversing the tree (O(n) in the worst case).
    *   May be less intuitive than other representations for some operations.
*   **Space Complexity:** O(n)

#### 2.4 Array-Based Level-Order Representation (Implicit Tree Representation)

*   **Concept:** The tree is represented in an array based on a level-order (breadth-first) traversal.  The position of a node in the array implicitly defines its relationship to other nodes.  This representation is most efficient for *complete* or *almost complete* trees (trees where all levels are completely filled except possibly the last level, which is filled from left to right).
*   **Data Structure:**  A simple array.
*   **Relationship Between Nodes:**
    *   **Parent(i):**  The parent of the node at index `i` is at index `floor((i-1)/2)`.
    *   **Left Child(i):** The left child of the node at index `i` is at index `2i + 1`.
    *   **Right Child(i):** The right child of the node at index `i` is at index `2i + 2`.
*   **Example:**
    ```
    Tree:
          A
         / \
        B   C
       / \ / \
      D   E F   G

    Array Representation:
    [A, B, C, D, E, F, G]
    ```

*   **Advantages:**
    *   Very space-efficient for complete or almost complete trees. No pointers are needed, so the space overhead is minimal.
    *   Simple to implement parent, left child, and right child operations.
*   **Disadvantages:**
    *   Highly inefficient for sparse trees (trees with many missing nodes).  Significant space is wasted representing the missing nodes.
    *   Difficult to insert or delete nodes in the middle of the tree, as it requires shifting large portions of the array.
    *   Not suitable for general trees with arbitrary branching factors.
*   **Space Complexity:** O(n), but highly inefficient if the tree is not complete or nearly complete.  Can waste a significant amount of space representing missing nodes.

### 3. Comparing Representation Methods

| Feature             | Parent Pointer | Child Pointers | Left-Child Right-Sibling | Array-Based Level-Order |
|----------------------|-----------------|-----------------|--------------------------|---------------------------|
| **Space Complexity** | O(n)            | O(n)            | O(n)                     | O(n)                      |
| **Finding Parent**   | O(1)            | O(n)            | O(n)                     | O(1)                      |
| **Finding Children**  | O(n)            | O(k)            | O(k)                     | O(1) per child (given index) |
| **Implementation Simplicity** | High         | Medium          | Medium                    | High                       |
| **Suitability**     | Finding parents quickly | Finding children quickly | General trees, binary tree transformations | Complete/Almost Complete Trees |
| **Memory Usage**    | Relatively low   |  Potentially high | Relatively low           | Very low (for complete trees), high for sparse trees |

*   **Important Considerations:**
    *   **Space Usage:**  Consider the space efficiency of each representation, especially for large trees.  The array-based representation is most efficient for complete/almost complete trees, while child pointers can be space-intensive for trees with varying branching factors.
    *   **Operation Performance:** Analyze the time complexity of frequently performed operations. If finding the parent is critical, the parent pointer representation is ideal. If finding children is crucial, child pointers or left-child right-sibling representations are better choices.
    *   **Tree Structure:**  The structure of the tree significantly impacts the suitability of different representations.  The array-based approach is only practical for complete or almost complete trees.

### 4. Choosing the Right Representation

The best representation depends on the specific application and the operations that will be performed most frequently.  Here's a guideline:

*   **Parent Pointer:**  Use when finding the parent of a node quickly is a priority and other operations are less frequent.
*   **Child Pointers:**  Use when efficiently accessing the children of a node is essential, and the number of children per node is relatively consistent.
*   **Left-Child Right-Sibling:**  Use when you need a flexible representation that can handle arbitrary tree structures with a consistent space complexity. This is also useful when adapting general trees to algorithms designed for binary trees.
*   **Array-Based Level-Order:**  Use only for complete or almost complete trees where space efficiency is paramount and the tree structure is relatively static.  Avoid if insertions or deletions are common.

### 5. Implementing Basic Operations

Here are examples of implementing basic operations using different representations in Python.

#### 5.1 Parent Pointer (Finding the parent)

```python
def find_parent_parent_pointer(tree, node_index):
    """
    Finds the parent of a node in a parent pointer tree representation.

    Args:
        tree: A list representing the parent pointer tree.
              tree[i] stores the index of the parent of node i.
              -1 indicates the root.
        node_index: The index of the node to find the parent of.

    Returns:
        The index of the parent node, or None if the node is the root.
    """
    if tree[node_index] == -1:
        return None  # Node is the root
    else:
        return tree[node_index]

# Example usage:
parent_pointer_tree = [-1, 0, 0, 1, 1, 2, 2] # As in the previous example
parent_of_D = find_parent_parent_pointer(parent_pointer_tree, 3)  # D is at index 3
print(f"Parent of D is at index: {parent_of_D}")  # Output: Parent of D is at index: 1
```

#### 5.2 Child Pointers (Finding Children)

```python
class TreeNode:
    def __init__(self, data):
        self.data = data
        self.children = []

def find_children_child_pointer(node):
    """
    Finds the children of a node in a child pointer tree representation.

    Args:
        node: The TreeNode object to find the children of.

    Returns:
        A list of TreeNode objects representing the children of the node.
    """
    return node.children

# Example usage:
root = TreeNode('A')
b = TreeNode('B')
c = TreeNode('C')
root.children.append(b)
root.children.append(c)

children_of_A = find_children_child_pointer(root)
print(f"Children of A: {[child.data for child in children_of_A]}")  # Output: Children of A: ['B', 'C']
```

#### 5.3 Left-Child Right-Sibling (Finding all children)

```python
class TreeNode:
    def __init__(self, data):
        self.data = data
        self.left_child = None
        self.right_sibling = None

def find_children_lcrs(node):
    """
    Finds all children of a node in a Left-Child Right-Sibling representation.

    Args:
        node: The TreeNode to find the children of.

    Returns:
        A list of TreeNode objects representing the children.
    """
    children = []
    child = node.left_child
    while child:
        children.append(child)
        child = child.right_sibling
    return children

# Example (using the same example tree as before):
a = TreeNode('A')
b = TreeNode('B')
c = TreeNode('C')
d = TreeNode('D')
e = TreeNode('E')
f = TreeNode('F')
g = TreeNode('G')

a.left_child = b
b.right_sibling = c

b.left_child = d
d.right_sibling = e

c.left_child = f
f.right_sibling = g

children_of_B = find_children_lcrs(b)
print(f"Children of B: {[child.data for child in children_of_B]}") # Output: Children of B: ['D', 'E']

children_of_A = find_children_lcrs(a)
print(f"Children of A: {[child.data for child in children_of_A]}") # Output: Children of A: ['B', 'C']
```

#### 5.4 Array-Based Level Order (Finding children and parent)

```python
def find_parent_level_order(tree, index):
    """
    Finds the parent of a node in an array-based level order representation.
    Returns None if the node is the root, or the array is empty.
    """
    if not tree or index == 0:
        return None
    return (index - 1) // 2

def find_left_child_level_order(tree, index):
    """
    Finds the left child's index in an array-based level order representation.
    Returns None if the left child does not exist (index out of bounds).
    """
    left_child_index = 2 * index + 1
    if left_child_index < len(tree):
        return left_child_index
    else:
        return None

def find_right_child_level_order(tree, index):
    """
    Finds the right child's index in an array-based level order representation.
    Returns None if the right child does not exist (index out of bounds).
    """
    right_child_index = 2 * index + 2
    if right_child_index < len(tree):
        return right_child_index
    else:
        return None

level_order_tree = ['A', 'B', 'C', 'D', 'E', 'F', 'G']

parent_index = find_parent_level_order(level_order_tree, 3) # Parent of D (index 3)
print(f"Parent of D index: {parent_index} (Value: {level_order_tree[parent_index] if parent_index is not None else 'Root'})") # Output: Parent of D index: 1 (Value: B)

left_child_index = find_left_child_level_order(level_order_tree, 1)  # Left child of B (index 1)
print(f"Left child of B index: {left_child_index} (Value: {level_order_tree[left_child_index] if left_child_index is not None else 'None'})") # Output: Left child of B index: 3 (Value: D)

right_child_index = find_right_child_level_order(level_order_tree, 1) # Right child of B (index 1)
print(f"Right child of B index: {right_child_index} (Value: {level_order_tree[right_child_index] if right_child_index is not None else 'None'})") # Output: Right child of B index: 4 (Value: E)
```

### 6. Practice Questions/Exercises

1.  **Given the following tree, represent it using Parent Pointer, Child Pointers, and Left-Child Right-Sibling representations:**

    ```
          A
         /|\
        B C D
       / \
      E   F
    ```

2.  **For each representation in question 1, write code snippets to find the children of node 'B'.**

3.  **Explain the advantages and disadvantages of using an array-based level-order representation for a highly unbalanced tree (e.g., a tree where each node has only one child).**

4.  **Implement a function to calculate the height of a tree represented using the Child Pointers method.**

5.  **In what scenarios would the Left-Child Right-Sibling representation be a particularly good choice?  Explain why.**

### 7. Answers to Practice Questions

1.  **Representations:**

    *   **Parent Pointer:**
        ```
        Nodes:  A  B  C  D  E  F
        Index:  0  1  2  3  4  5
        Parent: -1 0  0  0  1  1
        ```
    *   **Child Pointers:**  (Illustrative Python example)

        ```python
        class TreeNode:
            def __init__(self, data):
                self.data = data
                self.children = []

        a = TreeNode('A')
        b = TreeNode('B')
        c = TreeNode('C')
        d = TreeNode('D')
        e = TreeNode('E')
        f = TreeNode('F')

        a.children.extend([b, c, d])
        b.children.extend([e, f])
        ```
    *   **Left-Child Right-Sibling:** (Illustrative Python example)

        ```python
        class TreeNode:
            def __init__(self, data):
                self.data = data
                self.left_child = None
                self.right_sibling = None

        a = TreeNode('A')
        b = TreeNode('B')
        c = TreeNode('C')
        d = TreeNode('D')
        e = TreeNode('E')
        f = TreeNode('F')

        a.left_child = b
        b.right_sibling = c
        c.right_sibling = d

        b.left_child = e
        e.right_sibling = f
        ```

2.  **Finding Children of 'B':**

    *   **Parent Pointer:** Requires traversing the entire array and checking for nodes where `parent[i] == 1` (index of B).  Inefficient O(n).
    *   **Child Pointers:**  Directly access `b.children`.  O(k) where k is the number of children.
    *   **Left-Child Right-Sibling:** Iterate from `b.left_child` to its siblings. O(k) where k is the number of children.
        ```python
        # (Assuming the LCRS example from 1 is defined)
        children_of_b = []
        child = b.left_child
        while child:
          children_of_b.append(child.data)
          child = child.right_sibling
        print(children_of_b) # ['E', 'F']
        ```

3.  **Array-Based Level-Order and Unbalanced Trees:**  For a highly unbalanced tree, the array-based level-order representation is *very* inefficient.  Most of the array slots would be empty, representing missing nodes in the tree.  This wastes significant space and renders the representation impractical.

4.  **Height Calculation (Child Pointers):**

    ```python
    def calculate_height(node):
        """
        Calculates the height of a subtree rooted at the given node
        using the Child Pointers representation.
        """
        if not node.children:  # Leaf node
            return 0
        else:
            heights = [calculate_height(child) for child in node.children]
            return 1 + max(heights)

    # (Assuming the Child Pointer example from 1 is defined)
    height_of_tree = calculate_height(a) # a is the root node
    print(f"Height of the tree: {height_of_tree}")  # Output: Height of the tree: 2
    ```

5.  **When to Use Left-Child Right-Sibling:**

    The Left-Child Right-Sibling representation is a good choice in these scenarios:

    *   **General Trees with Varying Branching Factors:** When you don't know the maximum number of children a node might have beforehand. The linked-list nature of the right-sibling pointers allows it to adapt to arbitrary branching factors without wasting space.
    *   **Adapting General Trees to Binary Tree Algorithms:**  Many algorithms are designed specifically for binary trees. The LCRS representation effectively transforms a general tree into a binary tree, allowing you to apply these algorithms to general tree structures.
    *   **Space Efficiency is Important:** Compared to the traditional child pointer representation (using lists/arrays), LCRS uses only two pointers per node, resulting in a more compact representation.

### 8. Important Points to Remember

*   There is no "one-size-fits-all" tree representation. The best choice depends on the application and the trade-offs you are willing to make.
*   Consider the frequency of different operations when choosing a representation.
*   Understand the impact of tree structure (e.g., complete vs. sparse) on the efficiency of different representations.
*   The Left-Child Right-Sibling representation provides a useful way to transform general trees into binary tree-like structures.
*   Be mindful of space complexity, especially when dealing with large trees.
