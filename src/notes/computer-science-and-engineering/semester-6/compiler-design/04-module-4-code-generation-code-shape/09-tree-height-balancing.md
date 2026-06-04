---
title: "Tree-Height Balancing"
subject: "COMPILER DESIGN"
module: "Module 4: Code generation: Code Shape "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8ba6b"
status: "completed"
scrapedAt: "2026-05-20T16:51:30.361Z"
---
# Compiler Design: Module 4 - Code Generation: Code Shape - Tree-Height Balancing

## Introduction

This module delves into the code generation phase of compilation, specifically focusing on code shape. This section is dedicated to Tree-Height Balancing, a technique used to optimize code generation for expressions represented as trees.  The goal is to generate efficient code by minimizing register usage and execution time.

**Learning Outcomes:**

1.  Understand the problem of register allocation during code generation for expression trees.
2.  Explain the principle of tree-height balancing.
3.  Apply the Sethi-Ullman algorithm for optimal register allocation for expression trees.
4.  Describe the benefits and limitations of tree-height balancing.
5.  Generate code for balanced expression trees.

## 1. The Problem of Register Allocation

When generating code for expressions represented as trees, register allocation becomes a critical issue.  Without careful planning, the number of registers needed can exceed the available registers, leading to "register spilling" – storing register values in memory and reloading them later, which significantly impacts performance.

*   **Expression Trees:** Expressions are often represented as trees where:
    *   Leaves represent operands (variables, constants).
    *   Internal nodes represent operators.
*   **Naïve Code Generation:** A simple code generation strategy might allocate a new register for each intermediate result. This quickly exhausts registers, especially for complex expressions.

**Example:**

Consider the expression `a + b * c + d`. The expression tree might look like this:

```
      +
     / \
    +   d
   / \
  a   *
     / \
    b   c
```

A naive approach might generate the following code (assuming registers R1, R2, R3, ...):

```
R1 = b * c   // Register spill can occur if this is a complex expression
R2 = a + R1
R3 = R2 + d
```

If only two registers were available, then the contents of `R1` (the result of `b*c`) would need to be spilled (stored in memory), and reloaded when calculating `a+R1`.

*   **Goal of Register Allocation:** Minimize the number of registers needed to evaluate an expression tree *without* spilling.

## 2. Principle of Tree-Height Balancing

Tree-height balancing aims to rearrange the expression tree, if possible, to minimize its height. A balanced tree generally requires fewer registers for evaluation.

*   **Height of a Tree:** The length of the longest path from the root to a leaf.
*   **Balancing Transformations:** Using algebraic properties (commutativity, associativity) to rearrange the tree.

**Key Idea:** Evaluate the subtree that requires the *most* registers *first*. This allows those registers to be freed up sooner.

**Example:**

Original expression: `a + b + c + d`

Original tree (unbalanced):

```
      +
     / \
    +   d
   / \
  +   c
 / \
a   b
```

Balanced tree:

```
       +
     /   \
    +     +
   / \   / \
  a   b c   d
```

**Note:** Tree-height balancing is not *always* possible or beneficial. It works best when the operators are associative and commutative, and the costs of the operands are similar.  Rearranging the tree should not change the semantics of the expression (e.g., floating point operations might not be strictly associative).

## 3. Sethi-Ullman Algorithm

The Sethi-Ullman algorithm (also known as the labeling algorithm) is a classic technique for determining the minimum number of registers required to evaluate an expression tree *without* spilling, and for generating optimal code based on that information.

**Algorithm:**

1.  **Labeling Phase (Bottom-Up):**
    *   **Leaf Nodes:**  Label each leaf node with `1` (one register needed).
    *   **Internal Nodes:**  For each internal node `n` with children `n1` and `n2`:
        *   If `label(n1) == label(n2)`, then `label(n) = label(n1) + 1`
        *   If `label(n1) != label(n2)`, then `label(n) = max(label(n1), label(n2))`

2.  **Code Generation Phase (Top-Down):**
    *   If `label(left_child) >= label(right_child)`, generate code for the left child first, then the right child, then the operator at the root.
    *   Otherwise, generate code for the right child first, then the left child, then the operator at the root.

**Interpretation of Labels:**

*   `label(n)` represents the minimum number of registers required to evaluate the subtree rooted at node `n` *without* spilling.
*   If the label of the root node is `k`, then at least `k` registers are needed to evaluate the entire expression tree without spilling.

**Example:**

Expression: `(a * b) + (c * d)`

Expression Tree:

```
       +
     /   \
    *     *
   / \   / \
  a   b c   d
```

**Labeling Phase:**

```
       + (2)
     /   \
    * (1)  * (1)
   / \   / \
  a (1) b (1) c (1) d (1)
```

**Code Generation (assuming two registers are available: R1, R2):**

Since both subtrees of the root have the same label (1), we can choose either order. Let's choose the left subtree first:

```
R1 = a * b
R2 = c * d
R1 = R1 + R2
```

**Explanation:**

1. `a * b` is computed and stored in `R1`.
2. `c * d` is computed and stored in `R2`.
3. The results in `R1` and `R2` are added, and the result is stored back in `R1`.

Only two registers were needed, which matches the label of the root node.

**Another Example demonstrating label differences:**

Expression: `(a + (b * (c - d))) + e`

Tree:

```
            + (3)
          /    \
        + (2)     e (1)
      /   \
    a (1)   * (2)
         /  \
        b (1)  - (2)
              /  \
             c (1) d (1)
```

The code generation would proceed with the subtree labeled '2' before the node `a` (labeled '1').  Then, since the left subtree of the root is labeled '2', and the right subtree is labeled '1', the entire left subtree would be evaluated first.

## 4. Benefits and Limitations

**Benefits of Tree-Height Balancing and Sethi-Ullman:**

*   **Reduced Register Pressure:** Minimizes the number of registers required, reducing the need for spilling.
*   **Improved Performance:** By reducing spilling, execution time is reduced.
*   **Optimized Code Generation:**  Provides a systematic way to generate efficient code for expressions.
*   **Predictable Register Usage:** Makes it easier to plan register allocation for larger code blocks.

**Limitations:**

*   **Not Always Applicable:**  Tree-height balancing relies on the algebraic properties of operators (associativity, commutativity). These properties may not hold for all operations, or the cost of applying these transformations might be too high.
*   **Floating-Point Arithmetic:**  Associativity and commutativity might not be strictly true for floating-point operations due to rounding errors.
*   **Side Effects:**  If expressions contain function calls with side effects, rearranging the order of evaluation can change the program's behavior.
*   **Complexity:**  While the Sethi-Ullman algorithm is efficient, managing more complex expressions and scenarios (e.g., function calls within expressions) can increase complexity.
*   **Limited Scope:**  Tree-height balancing focuses primarily on expression trees.  It does not address broader register allocation issues across entire functions or programs.

## 5. Code Generation for Balanced Expression Trees

The code generation process for a balanced tree follows the same principles as with unbalanced trees but benefits from the minimized register usage:

1.  **Apply Sethi-Ullman:** Label the tree nodes using the Sethi-Ullman algorithm.
2.  **Choose Evaluation Order:** For each node, compare the labels of its children.  Evaluate the subtree with the larger label *first*. This ensures that registers are freed up as quickly as possible.
3.  **Generate Instructions:** Translate the tree into machine code, allocating registers as needed.

**Example (Revisited):**

Expression: `a + b + c + d`  (Balanced Tree)

```
       + (2)
     /   \
    + (1)  + (1)
   / \   / \
  a (1) b (1) c (1) d (1)
```

**Code Generation:**

```
R1 = a + b    // Evaluate the left subtree first
R2 = c + d    // Evaluate the right subtree
R1 = R1 + R2  // Combine the results
```

Only two registers are required.  If we had not balanced the tree, a different code generation strategy might have used three registers and potentially spilled.

## Important Points to Remember:

*   Tree-height balancing aims to minimize register usage by restructuring expression trees.
*   The Sethi-Ullman algorithm provides a systematic way to determine the minimum number of registers needed and generate optimal code.
*   Tree-height balancing relies on the algebraic properties of operators and is not always applicable.
*   Consider the limitations of floating-point arithmetic and side effects when applying balancing transformations.
*   The goal is to evaluate the subtree requiring the *most* registers *first* to free up registers sooner.
*   Understanding the label values calculated by Sethi-Ullman is crucial for efficient code generation.

## Practice Questions/Exercises:

1.  **Label the following expression tree using the Sethi-Ullman algorithm:**

    ```
            -
          /  \
        *    +
       / \  / \
      a   b c   d
    ```

    **Answer:**

    ```
            - (2)
          /  \
        * (1)  + (1)
       / \  / \
      a (1) b (1) c (1) d (1)
    ```

2.  **Generate code for the expression tree in question 1, assuming two registers (R1, R2) are available.  Use the labels to guide your code generation.**

    **Answer:**

    ```
    R1 = a * b
    R2 = c + d
    R1 = R1 - R2
    ```

3.  **Consider the expression `x + y * z + w`.  Draw two possible expression trees (one balanced, one unbalanced). Label both trees using the Sethi-Ullman algorithm. Which tree requires fewer registers?**

    **Answer:**

    *   **Unbalanced Tree:**

        ```
              + (2)
            /  \
           + (1) w (1)
          /  \
         x (1)  * (1)
              / \
             y (1) z (1)
        ```

    *   **Balanced Tree:**

        ```
                + (2)
             /       \
            + (1)      w (1)
           /   \
          x (1)  * (1)
               /  \
              y (1) z (1)
        ```
    In this case, both trees require 2 registers.  However, balancing can sometimes lead to more efficient code even if the number of registers is the same.

4.  **Explain why tree-height balancing might not be suitable for floating-point arithmetic.**

    **Answer:**

    Floating-point arithmetic is not strictly associative or commutative due to rounding errors. Rearranging the order of operations can lead to different results, even if mathematically equivalent. Therefore, applying tree-height balancing transformations might change the meaning of the program.

5.  **What is "register spilling" and why is it undesirable?**

    **Answer:**

    Register spilling occurs when the number of registers needed to evaluate an expression exceeds the number of registers available. When this happens, the compiler must store register values in memory (spilling) and reload them later when needed. Register spilling is undesirable because it significantly increases execution time due to the slow memory access compared to register access.

These study notes provide a comprehensive overview of Tree-Height Balancing in Code Generation. By understanding the principles and applying the Sethi-Ullman algorithm, you can generate more efficient code for expression trees, minimizing register usage and improving performance. Remember to consider the limitations of the technique and choose appropriate strategies for different situations. Good luck!
