---
title: "Translating Expressions"
subject: "COMPILER DESIGN"
module: "Module 3: Bottom"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8ba60"
status: "completed"
scrapedAt: "2026-05-20T16:51:23.208Z"
---
# COMPILER DESIGN - Module 3: Bottom-Up Parsing - Translating Expressions

## Introduction

This module focuses on translating expressions using bottom-up parsing techniques. We'll delve into how semantic actions can be integrated with bottom-up parsers to generate intermediate code or directly perform computations. Understanding how to translate expressions efficiently and accurately is crucial in compiler design.

## Learning Outcomes

Upon completion of this topic, you will be able to:

1.  **Understand the role of semantic actions in bottom-up parsing for expression translation.**
2.  **Describe different techniques for representing expressions, including abstract syntax trees (ASTs) and postfix notation.**
3.  **Implement semantic actions for generating ASTs during bottom-up parsing.**
4.  **Implement semantic actions for generating postfix notation during bottom-up parsing.**
5.  **Evaluate expressions represented in postfix notation.**
6.  **Explain and apply the concept of synthesized attributes in expression translation.**
7.  **Optimize expression translation using various techniques.**

## 1. Role of Semantic Actions in Bottom-Up Parsing

*   **Definition:** Semantic actions are pieces of code associated with grammar rules. They are executed when the corresponding production is reduced (applied in reverse) during parsing.

*   **Purpose:**  To perform computations, generate code, or construct data structures (like ASTs) based on the parsed input.

*   **Integration:**  Semantic actions are strategically placed within the grammar rules. In bottom-up parsing, they are typically executed when a reduction occurs.

*   **Benefits:**  Allow for seamless integration of syntax analysis (parsing) and semantic analysis/code generation. Avoids a separate pass for semantic processing.

*   **Example:**
    Consider the production `E -> E + T`. A semantic action associated with this production could generate intermediate code for addition.

## 2. Representing Expressions: ASTs and Postfix Notation

### 2.1 Abstract Syntax Trees (ASTs)

*   **Definition:**  A tree representation of the abstract syntactic structure of a program (or expression).  It represents the essential structure, omitting details like parentheses and semicolons.

*   **Nodes:**
    *   **Internal Nodes:** Represent operators.
    *   **Leaf Nodes:** Represent operands (variables, constants).

*   **Advantages:**
    *   Good for optimization.
    *   Good for semantic analysis.
    *   Easy to manipulate and traverse.

*   **Example:**
    For the expression `a + b * c`, the AST would be:

    ```
        +
       / \
      a   *
         / \
        b   c
    ```

### 2.2 Postfix Notation (Reverse Polish Notation - RPN)

*   **Definition:**  An expression where the operator follows its operands.

*   **Advantages:**
    *   Easy to evaluate using a stack.
    *   Simple to generate from an AST or a parse tree.

*   **Example:**
    For the expression `a + b * c`, the postfix notation would be `a b c * +`.

*   **Conversion from Infix to Postfix:**  Can be done using operator precedence and associativity rules. Can also be obtained by traversing the AST in a post-order fashion.

## 3. Semantic Actions for Generating ASTs During Bottom-Up Parsing

*   **Synthesized Attributes:** Semantic actions often use synthesized attributes. A synthesized attribute at a node represents information computed from the attributes of its children.
*   **Implementation:**
    *   During parsing, each grammar symbol is associated with an attribute that points to a node in the AST.
    *   When a reduction occurs (e.g., `E -> E + T`), the semantic action creates a new node for the `+` operator and sets its children to be the AST nodes associated with `E` and `T`.

*   **Example:**

    ```
    Grammar:
    E -> E + T  { E.nptr = new Node('+', E.nptr, T.nptr) }
    E -> T      { E.nptr = T.nptr }
    T -> T * F  { T.nptr = new Node('*', T.nptr, F.nptr) }
    T -> F      { T.nptr = F.nptr }
    F -> ( E )  { F.nptr = E.nptr }
    F -> id     { F.nptr = new Leaf(id.name) }
    F -> num    { F.nptr = new Leaf(num.val) }

    Explanation:
    - Each non-terminal (E, T, F) has a synthesized attribute `nptr` which is a pointer to a node in the AST.
    - `new Node` creates a new internal node with the specified operator and children.
    - `new Leaf` creates a new leaf node with the specified value (id.name or num.val).

    Example Input: a + b * c
    - When `b * c` is reduced to `T`, a '*' node is created with leaves 'b' and 'c' as children.
    - When `a + T` (which is `a + b * c`) is reduced to `E`, a '+' node is created with leaf 'a' and the previously created '*' node as children.
    ```

## 4. Semantic Actions for Generating Postfix Notation During Bottom-Up Parsing

*   **Synthesized Attributes:** Again, we use synthesized attributes.  Each non-terminal is associated with an attribute that stores the postfix string.

*   **Implementation:**
    *   When a reduction occurs, the semantic action concatenates the postfix strings of the children and appends the operator.

*   **Example:**

    ```
    Grammar:
    E -> E + T  { E.code = E1.code || T.code || '+' }  (where E1 refers to the E on the RHS)
    E -> T      { E.code = T.code }
    T -> T * F  { T.code = T1.code || F.code || '*' }  (where T1 refers to the T on the RHS)
    T -> F      { T.code = F.code }
    F -> ( E )  { F.code = E.code }
    F -> id     { F.code = id.name }
    F -> num    { F.code = num.val }

    Explanation:
    - Each non-terminal (E, T, F) has a synthesized attribute `code` which is the postfix string.
    - `||` represents string concatenation.

    Example Input: a + b * c
    - `b * c` is reduced to T:  T.code = "b" || "c" || "*" = "bc*"
    - `a + T` (which is `a + b * c`) is reduced to E: E.code = "a" || "bc*" || "+" = "abc*+"
    ```

## 5. Evaluating Expressions in Postfix Notation

*   **Algorithm:**
    1.  Initialize an empty stack.
    2.  Scan the postfix expression from left to right.
    3.  For each token:
        *   If the token is an operand (variable, constant): Push it onto the stack.
        *   If the token is an operator:
            *   Pop the top two operands from the stack (operand2 and operand1).
            *   Apply the operator to operand1 and operand2 (operand1 operator operand2).
            *   Push the result back onto the stack.
    4.  After scanning the entire expression, the result will be the only element left on the stack.

*   **Example:**  Evaluate `a b c * +` where `a = 5`, `b = 2`, and `c = 3`.

    1.  Push `a` (5) onto the stack.
    2.  Push `b` (2) onto the stack.
    3.  Push `c` (3) onto the stack.
    4.  Encounter `*`: Pop 3 and 2.  Calculate 2 * 3 = 6.  Push 6 onto the stack.
    5.  Encounter `+`: Pop 6 and 5.  Calculate 5 + 6 = 11.  Push 11 onto the stack.
    6.  Stack contains 11.  Result = 11.

## 6. Synthesized Attributes in Expression Translation

*   **Definition:** Attributes of a non-terminal are said to be *synthesized* if their values are determined solely by the attributes of their children in the parse tree.
*   **Applicability:** Bottom-up parsing primarily uses synthesized attributes because the values of the children are known before the parent node is created (due to the nature of reductions).
*   **Example:** In AST generation, the `nptr` attribute of a non-terminal is synthesized. Its value is determined by the `nptr` attributes of its children and the operator being used.

## 7. Optimizing Expression Translation

*   **Constant Folding:**  Evaluate constant expressions at compile time instead of runtime.  For example, `2 + 3 * 4` can be evaluated to `14` during compilation.

    *   **Implementation:**  Semantic actions can check if the operands are constants and, if so, perform the computation and replace the expression with the result.

*   **Common Subexpression Elimination:** Identify and reuse expressions that are computed multiple times.

    *   **Implementation:** Requires a symbol table or a similar data structure to track computed expressions.  When a common subexpression is encountered, the compiler can reuse the previous result instead of recomputing it.  This often involves introducing temporary variables.

*   **Strength Reduction:** Replace computationally expensive operations with less expensive ones.  For example, `x * 2` can be replaced with `x + x` or `x << 1`.

    *   **Implementation:**  Requires recognizing specific patterns in the expression and applying appropriate transformations in the semantic actions.

*   **Dead Code Elimination:**  Remove code that has no effect on the program's output.

    *   **Implementation:** Requires data flow analysis to determine if a variable's value is ever used.  If not, the assignment to that variable can be removed.

## Important Points to Remember

*   Bottom-up parsing translates expressions by associating semantic actions with grammar rules.
*   ASTs are a powerful representation for semantic analysis and optimization.
*   Postfix notation is easily evaluated using a stack.
*   Synthesized attributes are crucial for bottom-up expression translation.
*   Various optimization techniques can improve the efficiency of expression translation.

## Practice Questions/Exercises

1.  **Given the expression `(a + b) * c`, draw its AST.**

    *   **Answer:**
        ```
          *
         / \
        +   c
       / \
      a   b
        ```

2.  **Convert the expression `a * b + c / d` to postfix notation.**

    *   **Answer:** `a b * c d / +`

3.  **Evaluate the postfix expression `5 2 + 3 *` using a stack.**

    *   **Answer:**
        1. Push 5
        2. Push 2
        3. Encounter '+': Pop 2, Pop 5.  5 + 2 = 7. Push 7.
        4. Push 3
        5. Encounter '*': Pop 3, Pop 7.  7 * 3 = 21. Push 21.
        Result: 21

4.  **Write the grammar and semantic actions to generate an AST for expressions with the operators `+`, `-`, `*`, `/`, and parentheses. Assume operands are identifiers (`id`).**

    *   **Answer:**

    ```
    Grammar:
    E -> E + T  { E.nptr = new Node('+', E.nptr, T.nptr) }
    E -> E - T  { E.nptr = new Node('-', E.nptr, T.nptr) }
    E -> T      { E.nptr = T.nptr }
    T -> T * F  { T.nptr = new Node('*', T.nptr, F.nptr) }
    T -> T / F  { T.nptr = new Node('/', T.nptr, F.nptr) }
    T -> F      { T.nptr = F.nptr }
    F -> ( E )  { F.nptr = E.nptr }
    F -> id     { F.nptr = new Leaf(id.name) }
    ```

5.  **Explain how constant folding can be applied to the expression `x + 2 * 3` and what the resulting expression would be.**

    *   **Answer:** Constant folding identifies the subexpression `2 * 3`, which consists of only constants. This subexpression can be evaluated at compile time. `2 * 3 = 6`. The optimized expression becomes `x + 6`.
