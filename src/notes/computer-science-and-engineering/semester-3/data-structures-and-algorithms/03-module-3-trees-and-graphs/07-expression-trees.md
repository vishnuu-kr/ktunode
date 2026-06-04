---
title: "Expression Trees"
subject: "DATA STRUCTURES AND ALGORITHMS"
module: "Module 3: Trees and Graphs"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ac40"
status: "completed"
scrapedAt: "2026-05-20T16:23:02.758Z"
---
## DATA STRUCTURES AND ALGORITHMS: Module 3 - Trees and Graphs: Expression Trees

**Introduction:**

This section focuses on Expression Trees, a specific type of binary tree used to represent mathematical expressions. They are valuable because they allow for efficient evaluation and manipulation of expressions. This module will cover their construction, traversal, and evaluation.

**Learning Outcomes:**

*   Understand the concept and purpose of Expression Trees.
*   Be able to construct an Expression Tree from a given infix, prefix, or postfix expression.
*   Be able to traverse an Expression Tree using inorder, preorder, and postorder traversal techniques.
*   Be able to evaluate an Expression Tree to obtain the numerical result.
*   Understand the advantages and disadvantages of using Expression Trees.

**1. Key Concepts and Definitions:**

*   **Expression Tree:** A binary tree where:
    *   Each internal node represents an operator (+, -, *, /, ^, etc.).
    *   Each leaf node represents an operand (variables or constants).
    *   The structure of the tree reflects the order of operations.
*   **Infix Notation:**  The standard mathematical notation where operators are placed *between* operands (e.g., `a + b`). Requires parentheses to ensure correct operator precedence.
*   **Prefix Notation (Polish Notation):** Operators precede their operands (e.g., `+ a b`). No parentheses are needed.
*   **Postfix Notation (Reverse Polish Notation - RPN):** Operators follow their operands (e.g., `a b +`). No parentheses are needed.
*   **Operand:** A value or variable on which an operation is performed (e.g., `2`, `x`, `pi`).
*   **Operator:** A symbol that represents a mathematical operation (e.g., `+`, `-`, `*`, `/`, `^`).
*   **Traversal:** The process of visiting each node in a tree in a specific order. Common traversals include:
    *   **Inorder:**  Left Subtree -> Root -> Right Subtree (Results in infix notation, requires parentheses for correctness)
    *   **Preorder:** Root -> Left Subtree -> Right Subtree (Results in prefix notation)
    *   **Postorder:** Left Subtree -> Right Subtree -> Root (Results in postfix notation)

**2. Construction of Expression Trees:**

The construction of expression trees usually starts from either prefix or postfix notation. Infix to Expression tree conversion is more complex, usually involving converting infix to postfix first.

*   **Construction from Postfix Notation:**
    1.  **Initialize an empty stack.**
    2.  **Scan the postfix expression from left to right.**
    3.  **For each token:**
        *   **If the token is an operand:** Push it onto the stack as a single-node tree.
        *   **If the token is an operator:**
            *   Pop the last two trees from the stack (right operand, then left operand).
            *   Create a new node with the operator as the root.
            *   Set the left child of the new node to the left operand tree (second popped).
            *   Set the right child of the new node to the right operand tree (first popped).
            *   Push the newly created tree onto the stack.
    4.  **The single tree remaining on the stack is the expression tree.**

    **Example:**

    Postfix Expression: `a b + c d * -`

    1.  `a` -> Push `a` (a single node tree)
    2.  `b` -> Push `b` (a single node tree)
    3.  `+` -> Pop `b`, Pop `a`, Create `+` node with `a` as left child and `b` as right child. Push `+` tree.
    4.  `c` -> Push `c` (a single node tree)
    5.  `d` -> Push `d` (a single node tree)
    6.  `*` -> Pop `d`, Pop `c`, Create `*` node with `c` as left child and `d` as right child. Push `*` tree.
    7.  `-` -> Pop `*` tree, Pop `+` tree, Create `-` node with `+` tree as left child and `*` tree as right child. Push `-` tree.

    The resulting tree's root is the final tree pushed onto the stack.

*   **Construction from Prefix Notation:**
    1.  **Initialize an empty stack.**
    2.  **Scan the prefix expression from right to left.**
    3.  **For each token:**
        *   **If the token is an operand:** Push it onto the stack as a single-node tree.
        *   **If the token is an operator:**
            *   Pop the last two trees from the stack (left operand, then right operand).
            *   Create a new node with the operator as the root.
            *   Set the left child of the new node to the left operand tree (second popped).
            *   Set the right child of the new node to the right operand tree (first popped).
            *   Push the newly created tree onto the stack.
    4.  **The single tree remaining on the stack is the expression tree.**

    **Example:**

    Prefix Expression: `- + a b * c d`

    1. `d` -> Push `d`
    2. `c` -> Push `c`
    3. `*` -> Pop `c`, Pop `d`, create tree with `*` as root, `c` left, `d` right. Push `*` tree
    4. `b` -> Push `b`
    5. `a` -> Push `a`
    6. `+` -> Pop `a`, Pop `b`, create tree with `+` as root, `a` left, `b` right. Push `+` tree.
    7. `-` -> Pop `+` tree, Pop `*` tree, create tree with `-` as root, `+` left, `*` right. Push `-` tree.

**3. Traversal of Expression Trees:**

Traversing an expression tree generates the expression in different notations.

*   **Inorder Traversal:** Left Subtree -> Root -> Right Subtree
    *   Produces the infix notation of the expression (with parentheses where needed for correct evaluation).

    **Example (Continuing from previous Postfix Example):**
    For the tree representing `a b + c d * -`
    Inorder traversal: `((a + b) - (c * d))`

*   **Preorder Traversal:** Root -> Left Subtree -> Right Subtree
    *   Produces the prefix notation of the expression.

    **Example (Continuing from previous Postfix Example):**
    For the tree representing `a b + c d * -`
    Preorder traversal: `- + a b * c d`

*   **Postorder Traversal:** Left Subtree -> Right Subtree -> Root
    *   Produces the postfix notation of the expression.

    **Example (Continuing from previous Postfix Example):**
    For the tree representing `a b + c d * -`
    Postorder traversal: `a b + c d * -`

**4. Evaluation of Expression Trees:**

Evaluating an expression tree involves traversing the tree and performing the operations. Postorder traversal is commonly used for evaluation.

*   **Evaluation Algorithm (using Postorder Traversal):**
    1.  **Traverse the tree in postorder.**
    2.  **For each node:**
        *   **If the node is an operand:** Push its value onto a stack.
        *   **If the node is an operator:**
            *   Pop the last two values from the stack (right operand, then left operand).
            *   Apply the operator to the two values.
            *   Push the result back onto the stack.
    3.  **The final value remaining on the stack is the result of the expression.**

    **Example:**

    Consider the Expression Tree for the postfix expression `2 3 + 4 5 * -`

    1.  `2` -> Push `2`
    2.  `3` -> Push `3`
    3.  `+` -> Pop `3`, Pop `2`, `2 + 3 = 5`, Push `5`
    4.  `4` -> Push `4`
    5.  `5` -> Push `5`
    6.  `*` -> Pop `5`, Pop `4`, `4 * 5 = 20`, Push `20`
    7.  `-` -> Pop `20`, Pop `5`, `5 - 20 = -15`, Push `-15`

    Result: `-15`

**5. Advantages and Disadvantages of Expression Trees:**

*   **Advantages:**
    *   **Easy to manipulate and simplify expressions:** Algebraic manipulations are simpler to implement on a tree structure.
    *   **Unambiguous representation:**  The tree structure clearly defines the order of operations, eliminating the need for parentheses (unlike infix notation).
    *   **Efficient evaluation:**  Evaluation using postorder traversal is straightforward and efficient.
    *   **Code generation:** Expression trees are used by compilers to generate machine code.
*   **Disadvantages:**
    *   **Memory overhead:** Requires more memory than simple string representations of expressions.
    *   **Construction complexity:** Building the tree can be more complex than simply parsing an infix expression.
    *   **Tree balancing:** If the expression is highly unbalanced, it may affect the traversal and evaluation performance.

**6. Important Points to Remember:**

*   The type of traversal determines the notation of the resulting expression (infix, prefix, postfix).
*   Postfix notation is generally preferred for expression tree construction and evaluation because it simplifies the process and eliminates the need for precedence rules.
*   Expression trees are a fundamental data structure used in compilers, interpreters, and symbolic computation systems.
*   When constructing from infix, converting to postfix (using shunting yard algorithm) is the common approach.

**7. Practice Questions/Exercises:**

**Question 1:** Construct the expression tree for the following infix expression: `(a + b) * c - d / e`

**Answer:**
First convert to postfix: `a b + c * d e / -`

1. a -> Push `a`
2. b -> Push `b`
3. + -> Pop `b`, Pop `a`, create + node with `a` left, `b` right. Push + tree.
4. c -> Push `c`
5. * -> Pop `c`, Pop + tree, create * node with + tree left, `c` right. Push * tree
6. d -> Push `d`
7. e -> Push `e`
8. / -> Pop `e`, Pop `d`, create / node with `d` left, `e` right. Push / tree
9. - -> Pop / tree, Pop * tree, create - node with * tree left, / tree right. Push - tree

**Question 2:**  Give the preorder, inorder, and postorder traversals of the expression tree constructed in Question 1.

**Answer:**

*   Preorder: `- * + a b c / d e`
*   Inorder: `((a + b) * c - (d / e))`
*   Postorder: `a b + c * d e / -`

**Question 3:** Evaluate the expression tree corresponding to the postfix expression `5 2 + 8 4 / -`.

**Answer:**

1. 5 -> Push `5`
2. 2 -> Push `2`
3. + -> Pop `2`, Pop `5`, 5 + 2 = 7, Push `7`
4. 8 -> Push `8`
5. 4 -> Push `4`
6. / -> Pop `4`, Pop `8`, 8 / 4 = 2, Push `2`
7. - -> Pop `2`, Pop `7`, 7 - 2 = 5, Push `5`

Result: `5`

**Question 4:**  What are the benefits of using an Expression Tree over evaluating an expression directly from its infix representation?

**Answer:**

Expression Trees offer benefits like:

*   **Unambiguous Representation:** Eliminates the need for operator precedence rules and parentheses.
*   **Easy Manipulation:** Simplifies algebraic manipulations and optimizations.
*   **Code Generation:**  Facilitates the generation of machine code by compilers.  Evaluating infix directly requires more complex parsing and handling of operator precedence.

These notes should provide a comprehensive understanding of Expression Trees and their applications within data structures and algorithms. Remember to practice constructing, traversing, and evaluating expression trees to solidify your knowledge.
