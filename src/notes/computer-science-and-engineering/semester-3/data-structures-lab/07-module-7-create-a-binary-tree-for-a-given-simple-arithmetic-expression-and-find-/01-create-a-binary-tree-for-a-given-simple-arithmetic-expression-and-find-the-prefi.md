---
title: "Create a binary tree for a given simple arithmetic expression and find the prefix / postfix equivalent."
subject: "DATA STRUCTURES LAB"
module: "Module 7: Create a binary tree for a given simple arithmetic expression and find the prefix / postfix equivalent."
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ae72"
status: "completed"
scrapedAt: "2026-05-20T16:23:21.358Z"
---
# DATA STRUCTURES LAB - Module 7: Arithmetic Expression Binary Tree

## Topic: Creating a Binary Tree for Arithmetic Expressions and Finding Prefix/Postfix Equivalents

### Description:

This module focuses on representing arithmetic expressions using binary trees and converting them between infix, prefix (Polish notation), and postfix (Reverse Polish notation) forms. We will learn how to construct an expression tree from an infix expression and then traverse the tree to obtain its prefix and postfix equivalents.

### Learning Outcomes:

*   Understand the structure and properties of binary trees.
*   Learn to represent arithmetic expressions as binary trees (expression trees).
*   Convert infix expressions to expression trees.
*   Traverse expression trees using preorder, inorder, and postorder traversal methods.
*   Convert expression trees to prefix (Polish notation) and postfix (Reverse Polish notation) expressions.
*   Apply this knowledge to solve problems involving arithmetic expression manipulation.

### 1. Key Concepts and Definitions

*   **Binary Tree:** A hierarchical data structure in which each node has at most two children, referred to as the left child and the right child.
*   **Expression Tree:** A specific type of binary tree used to represent arithmetic expressions.
    *   **Operators:** Internal nodes represent operators (+, -, \*, /, ^).
    *   **Operands:** Leaf nodes represent operands (variables or constants).
*   **Infix Notation:** The conventional way of writing arithmetic expressions (e.g., `a + b * c`).  Operators appear *between* their operands.  Requires parentheses for order of operations.
*   **Prefix Notation (Polish Notation):**  The operator precedes its operands (e.g., `+ a * b c`). Doesn't require parentheses.
*   **Postfix Notation (Reverse Polish Notation):** The operator follows its operands (e.g., `a b c * +`). Doesn't require parentheses.
*   **Tree Traversal:**  The process of visiting each node in a tree exactly once. Common traversal methods include:
    *   **Inorder Traversal:**  Left subtree -> Root -> Right subtree (Generally results in infix notation but requires parentheses)
    *   **Preorder Traversal:** Root -> Left subtree -> Right subtree (Results in prefix notation)
    *   **Postorder Traversal:** Left subtree -> Right subtree -> Root (Results in postfix notation)
*   **Operator Precedence:**  The priority of different operators (e.g., `*` and `/` have higher precedence than `+` and `-`).  `^` (exponentiation) typically has the highest.
*   **Associativity:**  The direction in which operators of the same precedence are grouped (e.g., `a - b - c` is typically left-associative, meaning `(a - b) - c`). Exponentiation is usually right-associative (e.g., `a ^ b ^ c` is `a ^ (b ^ c)`).

### 2. Representing Arithmetic Expressions as Binary Trees

An expression tree is a binary tree that represents an arithmetic expression.

**Example:**

Consider the infix expression `(a + b) * c - d / e`.

The corresponding expression tree would be:

```
        -
       / \
      *   /
     / \ / \
    +   c d   e
   / \
  a   b
```

**Rules for constructing an expression tree:**

1.  **Operands:** Operands become leaf nodes.
2.  **Operators:** Operators become internal nodes.
3.  **Precedence:** The structure of the tree reflects the order of operations based on operator precedence.  Operators with higher precedence are lower in the tree (closer to the leaf nodes).
4.  **Parentheses:** Parentheses dictate the order of operations and are reflected in the tree's structure.  Parenthesized expressions are treated as subtrees.

### 3. Converting Infix Expressions to Expression Trees

This is typically done using a stack-based algorithm.

**Algorithm:**

1.  **Initialization:** Create two stacks: an operator stack (`operators`) and a node stack (`nodes`).

2.  **Iteration:** Process the infix expression token by token.
    *   **Operand:** If the token is an operand, create a new tree node with the operand and push it onto the `nodes` stack.
    *   **Operator:** If the token is an operator:
        *   While the `operators` stack is not empty and the precedence of the current operator is less than or equal to the precedence of the operator on top of the `operators` stack, or if they have equal precedence and are left-associative, pop an operator from the `operators` stack.
        *   Pop two nodes from the `nodes` stack (right and left operands).
        *   Create a new tree node with the popped operator as the root, the popped nodes as its children (right child first, then left), and push the new node onto the `nodes` stack.
        *   Push the current operator onto the `operators` stack.
    *   **Left Parenthesis '(':** Push the left parenthesis onto the `operators` stack.
    *   **Right Parenthesis ')':** While the top of the `operators` stack is not a left parenthesis, pop an operator from the `operators` stack.  Pop two nodes from the `nodes` stack (right and left operands). Create a new tree node with the popped operator as the root, the popped nodes as its children, and push the new node onto the `nodes` stack.  Finally, pop the left parenthesis from the `operators` stack and discard it.

3.  **Final Step:**  After processing the entire expression, while the `operators` stack is not empty, repeat the process of popping an operator, popping two nodes, creating a new node, and pushing the new node onto the `nodes` stack.

4.  **Result:** The single node remaining on the `nodes` stack is the root of the expression tree.

**Example (Illustrative - simplified):**

Let's consider `a + b * c`:

1.  `a`: Push `a` (node) onto `nodes` stack.
2.  `+`: Push `+` (operator) onto `operators` stack.
3.  `b`: Push `b` (node) onto `nodes` stack.
4.  `*`: `*` has higher precedence than `+`. Push `*` onto `operators` stack.
5.  `c`: Push `c` (node) onto `nodes` stack.

Now, the `operators` stack contains `+, *` (top is `*`), and the `nodes` stack contains `a, b, c` (top is `c`).

Unwind the `*`:

1. Pop `*` from `operators`.
2. Pop `c` and `b` from `nodes`.
3. Create a node with `*` as root, `b` as left child, and `c` as right child. Push this new node onto `nodes`.

Now, the `operators` stack contains `+`, and the `nodes` stack contains `a` and a subtree rooted at `*` with children `b` and `c`.

Unwind the `+`:

1. Pop `+` from `operators`.
2. Pop the subtree rooted at `*` and `a` from `nodes`.
3. Create a node with `+` as root, `a` as left child, and the subtree rooted at `*` as right child.  Push this new node onto `nodes`.

The `nodes` stack now contains a single node: the root of the entire expression tree.

**Implementation Note (Python Example -Conceptual):**

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

def construct_expression_tree(expression):
    operators = []
    nodes = []
    precedence = {'+': 1, '-': 1, '*': 2, '/': 2, '^': 3}  # Define precedence

    # (Implementation would follow the algorithm above, iterating through expression)
    # This is a simplified illustration and requires the complete parsing logic

    return root  # The root of the constructed expression tree
```

### 4. Tree Traversal Methods

*   **Inorder Traversal:**  Visits the left subtree, then the root, then the right subtree.  (L -> R -> R). When applied to an expression tree *with parentheses*, produces the original infix expression.

    ```python
    def inorder(root):
        if root:
            inorder(root.left)
            print(root.data, end=" ")
            inorder(root.right)
    ```

*   **Preorder Traversal:**  Visits the root, then the left subtree, then the right subtree. (R -> L -> R). Produces the prefix (Polish) notation.

    ```python
    def preorder(root):
        if root:
            print(root.data, end=" ")
            preorder(root.left)
            preorder(root.right)
    ```

*   **Postorder Traversal:**  Visits the left subtree, then the right subtree, then the root. (L -> R -> R). Produces the postfix (Reverse Polish) notation.

    ```python
    def postorder(root):
        if root:
            postorder(root.left)
            postorder(root.right)
            print(root.data, end=" ")
    ```

### 5. Converting Expression Trees to Prefix and Postfix Expressions

Once you have the expression tree, converting it to prefix and postfix is straightforward using tree traversals.

*   **Prefix:** Perform a preorder traversal of the tree.  The output is the prefix expression.
*   **Postfix:** Perform a postorder traversal of the tree. The output is the postfix expression.

**Example:**

Consider the expression tree from before:

```
        -
       / \
      *   /
     / \ / \
    +   c d   e
   / \
  a   b
```

*   **Prefix (Preorder):** `- * + a b c / d e`
*   **Postfix (Postorder):** `a b + c * d e / -`

### 6. Examples

**Example 1:**

Infix Expression: `(a + b) * (c - d)`

Expression Tree:

```
        *
       / \
      +   -
     / \ / \
    a   b c   d
```

Prefix: `* + a b - c d`

Postfix: `a b + c d - *`

**Example 2:**

Infix Expression: `a + b * c / d - e`

Expression Tree:

```
            -
          /  \
        +     e
       / \
      a   /
         / \
        *   d
       / \
      b   c
```

Prefix: `- + a / * b c d e`

Postfix: `a b c * d / + e -`

### 7. Practice Questions/Exercises

**Question 1:**

Construct the expression tree for the infix expression `a * (b + c) / d`.  Then, find its prefix and postfix equivalents.

**Answer 1:**

Expression Tree:

```
      /
     / \
    *   d
   / \
  a   +
     / \
    b   c
```

Prefix: `/ * a + b c d`

Postfix: `a b c + * d /`

**Question 2:**

Convert the following prefix expression to its infix and postfix equivalents: `+ * a b / c d`

**Answer 2:**

Expression Tree:

```
       +
      / \
     *   /
    / \ / \
   a   b c   d
```

Infix: `(a * b) + (c / d)`

Postfix: `a b * c d / +`

**Question 3:**

Write a Python function (or pseudocode) to convert an expression tree to its prefix notation.

**Answer 3:**

```python
def tree_to_prefix(root):
    """Converts an expression tree to its prefix notation."""
    if root is None:
        return ""
    return root.data + " " + tree_to_prefix(root.left) + tree_to_prefix(root.right)
```

### 8. Important Points to Remember

*   Understanding operator precedence and associativity is crucial for correctly constructing expression trees.
*   Parentheses play a key role in defining the order of operations.
*   Tree traversal methods (inorder, preorder, postorder) are fundamental for converting between different expression notations.
*   Stack data structures are commonly used in algorithms for infix to postfix and infix to tree conversions.
*   Expression trees provide a structured and unambiguous representation of arithmetic expressions, which is useful in compilers, interpreters, and other applications.
