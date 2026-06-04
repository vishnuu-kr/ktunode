---
title: "Tree Traversals"
subject: "DATA STRUCTURES AND ALGORITHMS"
module: "Module 3: Trees and Graphs"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ac3f"
status: "completed"
scrapedAt: "2026-05-20T16:23:02.019Z"
---
# DATA STRUCTURES AND ALGORITHMS - MODULE 3: TREES AND GRAPHS - TOPIC: TREE TRAVERSALS

**Module:** Module 3: Trees and Graphs
**Topic:** Tree Traversals
**Description:**  Understanding and implementing different tree traversal techniques.

**Learning Outcomes:**

*   Understand the concept of tree traversal.
*   Explain the differences between Depth-First Search (DFS) traversals (Preorder, Inorder, Postorder).
*   Explain and implement Breadth-First Search (BFS) traversal (Level Order).
*   Implement tree traversal algorithms using recursion and iteration (where applicable).
*   Determine the output of a given tree traversal algorithm.
*   Apply tree traversal techniques to solve practical problems.

## 1. Introduction to Tree Traversal

*   **Definition:** Tree traversal refers to the process of visiting (examining and/or processing) each node in a tree data structure exactly once in a specific order.  The order of visiting nodes is crucial.
*   **Purpose:** Tree traversal is a fundamental operation used for various tasks, including:
    *   Printing all elements of a tree.
    *   Searching for a specific node.
    *   Copying a tree.
    *   Deleting a tree.
    *   Evaluating an expression represented as an expression tree.
*   **Types of Traversal:** There are two main categories of tree traversal algorithms:
    *   **Depth-First Search (DFS):** Explores as far as possible along each branch before backtracking.
    *   **Breadth-First Search (BFS):** Explores all the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level.

## 2. Depth-First Search (DFS) Traversal

DFS involves exploring as deeply as possible along each branch before backtracking. There are three main types of DFS traversals:

*   **Preorder Traversal:**  (Root, Left, Right)
    *   Visit the root node.
    *   Traverse the left subtree in preorder.
    *   Traverse the right subtree in preorder.
    *   **Use Case:** Creating a prefix expression (Polish notation) from an expression tree.  Also used to duplicate a tree.
*   **Inorder Traversal:** (Left, Root, Right)
    *   Traverse the left subtree in inorder.
    *   Visit the root node.
    *   Traverse the right subtree in inorder.
    *   **Use Case:** For Binary Search Trees (BSTs), inorder traversal produces nodes in sorted order.  Useful for obtaining the elements of a BST in ascending order.
*   **Postorder Traversal:** (Left, Right, Root)
    *   Traverse the left subtree in postorder.
    *   Traverse the right subtree in postorder.
    *   Visit the root node.
    *   **Use Case:** Deleting a tree, Evaluating a postfix expression (Reverse Polish notation) from an expression tree.

**2.1. Recursive Implementation of DFS Traversals**

All three DFS traversals are naturally implemented recursively.

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

# Preorder Traversal
def preorder_traversal(root):
    if root:
        print(root.data, end=" ") # Visit root
        preorder_traversal(root.left) # Traverse left subtree
        preorder_traversal(root.right) # Traverse right subtree

# Inorder Traversal
def inorder_traversal(root):
    if root:
        inorder_traversal(root.left) # Traverse left subtree
        print(root.data, end=" ") # Visit root
        inorder_traversal(root.right) # Traverse right subtree

# Postorder Traversal
def postorder_traversal(root):
    if root:
        postorder_traversal(root.left) # Traverse left subtree
        postorder_traversal(root.right) # Traverse right subtree
        print(root.data, end=" ") # Visit root


# Example Usage:
root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)

print("Preorder traversal:", end=" ")
preorder_traversal(root)
print()

print("Inorder traversal:", end=" ")
inorder_traversal(root)
print()

print("Postorder traversal:", end=" ")
postorder_traversal(root)
print()
```

**Output:**

```
Preorder traversal: 1 2 4 5 3
Inorder traversal: 4 2 5 1 3
Postorder traversal: 4 5 2 3 1
```

**2.2. Iterative Implementation of DFS Traversals (Using Stacks)**

While recursion is common for DFS, iterative solutions using stacks are also possible.  The iterative implementation avoids function call overhead and can be more space-efficient in some cases.

*   **Iterative Preorder Traversal:**
    1.  Create an empty stack.
    2.  Push the root node onto the stack.
    3.  While the stack is not empty:
        *   Pop a node from the stack.
        *   Visit the node (print its data).
        *   Push the right child (if it exists) onto the stack.
        *   Push the left child (if it exists) onto the stack.

```python
def iterative_preorder(root):
    if not root:
        return

    stack = [root]
    while stack:
        node = stack.pop()
        print(node.data, end=" ")
        if node.right:
            stack.append(node.right)
        if node.left:
            stack.append(node.left)

print("Iterative Preorder Traversal:", end=" ")
iterative_preorder(root)
print()
```

*   **Iterative Inorder Traversal:**
    1. Create an empty stack.
    2. Initialize `curr` to the root node.
    3. While `curr` is not None or the stack is not empty:
        a. While `curr` is not None:
            Push `curr` onto the stack.
            Move `curr` to its left child (`curr = curr.left`).
        b. Pop a node from the stack and assign it to `curr`.
        c. Visit the node (print its data).
        d. Move `curr` to its right child (`curr = curr.right`).

```python
def iterative_inorder(root):
    if not root:
        return

    stack = []
    curr = root

    while curr or stack:
        while curr:
            stack.append(curr)
            curr = curr.left

        curr = stack.pop()
        print(curr.data, end=" ")
        curr = curr.right

print("Iterative Inorder Traversal:", end=" ")
iterative_inorder(root)
print()
```

*   **Iterative Postorder Traversal:**  This is more complex to implement iteratively than Preorder and Inorder, often requiring two stacks or a flag to track whether the right subtree has been visited. An example using two stacks is as follows:

```python
def iterative_postorder(root):
  if root is None:
    return

  stack1 = [root]
  stack2 = []

  while stack1:
    node = stack1.pop()
    stack2.append(node)

    if node.left:
      stack1.append(node.left)
    if node.right:
      stack1.append(node.right)

  while stack2:
    node = stack2.pop()
    print(node.data, end=" ")

print("Iterative Postorder Traversal:", end=" ")
iterative_postorder(root)
print()
```

**Output:**

```
Iterative Preorder Traversal: 1 2 4 5 3
Iterative Inorder Traversal: 4 2 5 1 3
Iterative Postorder Traversal: 4 5 2 3 1
```

## 3. Breadth-First Search (BFS) Traversal (Level Order)

BFS, also known as level order traversal, visits all nodes at each level of the tree before moving on to the next level.

*   **Algorithm:**
    1.  Use a queue data structure.
    2.  Enqueue the root node.
    3.  While the queue is not empty:
        *   Dequeue a node.
        *   Visit the node (print its data).
        *   Enqueue the left child (if it exists).
        *   Enqueue the right child (if it exists).
*   **Use Case:** Finding the shortest path between two nodes in an unweighted graph, Printing a tree level by level.

**3.1. Implementation of Level Order Traversal (BFS)**

```python
from collections import deque  # Efficient queue implementation

def level_order_traversal(root):
    if not root:
        return

    queue = deque([root])  # Initialize queue with the root node

    while queue:
        node = queue.popleft() # Dequeue the front node
        print(node.data, end=" ")  # Visit the node

        if node.left:
            queue.append(node.left) # Enqueue the left child
        if node.right:
            queue.append(node.right) # Enqueue the right child

print("Level Order traversal:", end=" ")
level_order_traversal(root)
print()
```

**Output:**

```
Level Order traversal: 1 2 3 4 5
```

## 4. Determining the Output of Tree Traversal

Given a tree structure, you should be able to trace the execution of each traversal algorithm and determine the order in which the nodes will be visited.

**Example:**

Consider the following binary tree:

```
      A
     / \
    B   C
   / \   \
  D   E   F
```

*   **Preorder Traversal:** A B D E C F
*   **Inorder Traversal:** D B E A C F
*   **Postorder Traversal:** D E B F C A
*   **Level Order Traversal:** A B C D E F

## 5. Applying Tree Traversal Techniques

Tree traversal is used in several practical applications:

*   **Expression Trees:**  Representing arithmetic expressions.
    *   Preorder traversal gives prefix notation (Polish notation).
    *   Inorder traversal gives infix notation (with parentheses where necessary).
    *   Postorder traversal gives postfix notation (Reverse Polish notation).
*   **File System Traversal:** Navigating directories and files.
*   **XML/HTML Parsing:**  Processing tree-structured documents.
*   **Game Tree Search:**  Exploring possible game states.
*   **Binary Search Trees (BSTs):**
    *   Inorder traversal yields sorted data.

## 6. Practice Questions & Exercises

1.  **Question:** Given the following tree, what is the Preorder, Inorder, and Postorder traversal?

    ```
          1
         / \
        2   3
       / \
      4   5
     /
    6
    ```

    **Answer:**
    *   Preorder: 1 2 4 6 5 3
    *   Inorder: 6 4 2 5 1 3
    *   Postorder: 6 4 5 2 3 1

2.  **Question:** Write a function to find the height of a binary tree using recursion.

    ```python
    def tree_height(root):
        if root is None:
            return 0
        else:
            left_height = tree_height(root.left)
            right_height = tree_height(root.right)
            return max(left_height, right_height) + 1

    # Usage with the example tree:
    height = tree_height(root)  # root is the root node of the example tree defined earlier
    print(f"Height of the tree: {height}")  #Expected Output: 3
    ```

3.  **Question:** Describe how you would use inorder traversal to print the nodes of a BST in sorted order.

    **Answer:**  Inorder traversal visits the left subtree first, then the root, then the right subtree. In a BST, all nodes in the left subtree are smaller than the root, and all nodes in the right subtree are larger than the root. Therefore, inorder traversal naturally visits the nodes in ascending sorted order.

4.  **Question:** How does level order traversal help in finding the node closest to the root with a given value?

    **Answer:**  Because level order traversal visits nodes level by level, if a node with the given value exists, the *first* occurrence of that value encountered during the traversal will be the node closest to the root. This is because nodes closer to the root are visited earlier in the traversal.

## 7. Important Points to Remember

*   Understand the order of visiting nodes for each traversal type.
*   DFS traversals are typically implemented recursively, but iterative solutions are also possible using stacks.
*   BFS (level order) traversal is typically implemented iteratively using a queue.
*   Consider the applications of each traversal type when solving problems.
*   Practice tracing the execution of traversal algorithms on different tree structures.
*   Be aware of the time and space complexity of each traversal method.  DFS and BFS have a time complexity of O(N) where N is the number of nodes in the tree, as each node must be visited.  The space complexity of recursive DFS is O(H) in the best and average case and O(N) in the worst case where H is the height of the tree. The iterative DFS solution has O(N) space complexity. The space complexity of BFS is O(W) where W is the maximum width of the tree, this could be O(N) in the worst case (a complete binary tree).
