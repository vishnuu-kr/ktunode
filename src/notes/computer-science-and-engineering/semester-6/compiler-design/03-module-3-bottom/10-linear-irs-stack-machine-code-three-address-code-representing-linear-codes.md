---
title: "Linear IRs - Stack-Machine Code - Three-Address Code - Representing Linear Codes"
subject: "COMPILER DESIGN"
module: "Module 3: Bottom"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8ba5e"
status: "completed"
scrapedAt: "2026-05-20T16:51:21.786Z"
---
# COMPILER DESIGN - Module 3: Bottom - Linear IRs

## Introduction

This module focuses on Linear Intermediate Representations (IRs), which are crucial in compiler design for bridging the gap between the source code and the target machine code. We will specifically examine Stack-Machine Code and Three-Address Code (TAC), two common types of Linear IRs, and discuss different ways to represent them.

## Learning Outcomes

Upon completion of this topic, you will be able to:

*   Understand the purpose of Intermediate Representation (IR) in a compiler.
*   Describe and differentiate between Stack-Machine Code and Three-Address Code.
*   Understand the advantages and disadvantages of Stack-Machine Code and Three-Address Code
*   Represent simple programs using both Stack-Machine Code and Three-Address Code.
*   Discuss various techniques for representing linear codes (TAC) efficiently.
*   Appreciate the relationship between IRs and optimization opportunities.

## 1. Purpose of Intermediate Representation (IR)

*   **Bridge the gap:** IRs act as an abstraction between the high-level source language and the low-level target machine language.
*   **Machine independence:** Allow the front-end (lexer, parser, semantic analyzer) to be independent of the target machine, and the back-end (code generator, optimizer) to be independent of the source language.  This facilitates retargeting the compiler or supporting multiple source languages.
*   **Enable optimization:** Provide a suitable representation for applying various code optimizations. IRs often expose opportunities for optimization that might be hidden in the source code or become clearer than in the target code.
*   **Portability:** A well-defined IR allows the compiler to be easily ported to different architectures.
*   **Simplification:**  Complex source language constructs are simplified into more manageable instructions within the IR.

## 2. Stack-Machine Code

*   **Definition:** A stack-machine is a conceptual computing model where operations are performed using a stack data structure.  Instructions operate on the top elements of the stack.
*   **Characteristics:**
    *   Uses a stack to store operands and intermediate results.
    *   Instructions generally have zero explicit operands (operate implicitly on the stack).
    *   Simple instruction set architecture.
*   **Advantages:**
    *   Simple to generate (especially for expression evaluation).
    *   Compact code representation (due to zero-address instructions).
    *   Simple to implement in hardware or software.
*   **Disadvantages:**
    *   Inefficient memory usage (stack operations).
    *   Difficult to perform optimizations on stack-based code directly.  Optimizations are often applied before generating stack machine code.
    *   Frequent stack accesses can become a bottleneck.

*   **Example:**

    Consider the expression: `a = b + c * d`

    Stack-Machine Code:

    ```
    PUSH b      ; Push the value of b onto the stack
    PUSH c      ; Push the value of c onto the stack
    PUSH d      ; Push the value of d onto the stack
    MULT        ; Pop c and d, multiply, push the result
    ADD         ; Pop b and the result of c*d, add, push the result
    STORE a     ; Pop the result and store it in a
    ```

## 3. Three-Address Code (TAC)

*   **Definition:**  An IR where each instruction has at most three operands: two source operands and one destination operand.
*   **Characteristics:**
    *   Each instruction performs a single, well-defined operation.
    *   Uses temporary variables (often named `t1`, `t2`, etc.) to store intermediate results.
    *   Explicit operand addressing (each operand is named).
*   **Advantages:**
    *   Easier to optimize compared to stack-machine code. The explicit naming of operands facilitates dataflow analysis and transformations.
    *   More closely resembles machine code, making code generation simpler.
    *   More amenable to register allocation.
*   **Disadvantages:**
    *   More verbose than stack-machine code.
    *   Requires a mechanism for managing temporary variables.

*   **Example:**

    Consider the expression: `a = b + c * d`

    Three-Address Code:

    ```
    t1 = c * d    ; Multiply c and d, store the result in t1
    t2 = b + t1   ; Add b and t1, store the result in t2
    a  = t2       ; Assign the value of t2 to a
    ```

## 4. Comparing Stack-Machine Code and Three-Address Code

| Feature        | Stack-Machine Code          | Three-Address Code        |
|----------------|-----------------------------|----------------------------|
| Operands       | Implicit (stack-based)    | Explicit (variables)       |
| Instruction Size| Compact                       | Larger                      |
| Optimization   | Difficult to directly optimize | Easier to optimize       |
| Complexity     | Simpler to generate         | More complex to generate   |
| Memory Usage   | High (frequent stack access)| Lower                       |
| Example        | JVM bytecode                | LLVM IR                    |

## 5. Representing Linear Codes (TAC)

Several techniques are used for representing Three-Address Code:

*   **Quadruples:**  A quadruple represents each instruction as a record with four fields: `opcode`, `arg1`, `arg2`, and `result`.
    *   `opcode`: The operation to be performed (e.g., +, *, -).
    *   `arg1`:  The first source operand.
    *   `arg2`:  The second source operand.
    *   `result`:  The destination operand.

    Example: `t1 = b + c` would be represented as `(+, b, c, t1)`

*   **Triples:** Similar to quadruples, but the `result` field is implicit. The result of an operation is referenced by its position in the triple sequence. This saves space.
    *   Each instruction is represented by a record with three fields: `opcode`, `arg1`, and `arg2`.
    *   References to intermediate results are made using the index of the triple that computed the value.

    Example:
    ```
    t1 = b + c
    a = t1 * d
    ```
    Triples:
    ```
    (0) (+, b, c)    ; t1 = b + c
    (1) (*, (0), d)  ; a = t1 * d  ((0) refers to the result of the first triple)
    ```

*   **Indirect Triples:** Introduce an additional level of indirection.  A list of pointers to triples is maintained.  This allows for code optimization techniques, like common subexpression elimination, to reorder the triples without affecting the meaning of the program.
    *   A list of pointers to triples is maintained.
    *   Triples themselves remain unchanged.
    *   Reordering the list of pointers changes the execution order.

    Example:
    ```
    t1 = b + c
    a = t1 * d
    ```

    Triples:
    ```
    (0) (+, b, c)
    (1) (*, (0), d)
    ```

    Indirect Triple Table:
    ```
    (0) -> (0)  ; Pointer to triple (0)
    (1) -> (1)  ; Pointer to triple (1)
    ```

    Reordering would only involve changing the indirect triple table.

*   **Advantages/Disadvantages of Each Representation:**

    | Representation   | Advantages                                                                      | Disadvantages                                                                              |
    |-----------------|---------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
    | Quadruples       | Simple and easy to understand, explicit result                                     | More memory usage (due to the explicit `result` field)                                       |
    | Triples          | More compact than quadruples                                                      | Requires indexing/pointers to access intermediate results, can be harder to optimize directly  |
    | Indirect Triples | Facilitates code movement during optimization without changing triple definitions | Adds an extra level of indirection, potentially impacting performance                       |

## 6. IRs and Optimization Opportunities

Linear IRs provide a fertile ground for various code optimizations:

*   **Constant Folding:**  Replacing constant expressions with their values at compile time.
    *   Example:  `t1 = 2 + 3`  ->  `t1 = 5`

*   **Common Subexpression Elimination (CSE):**  Identifying and eliminating redundant computations.
    *   Example:
        ```
        t1 = b + c
        a = t1 * d
        t2 = b + c   ; redundant computation
        e = t2 + f
        ```
        Optimized:
        ```
        t1 = b + c
        a = t1 * d
        e = t1 + f
        ```

*   **Dead Code Elimination:**  Removing code that produces results that are never used.
    *   Example:
        ```
        t1 = b + c   ; if t1 is never used later
        a = d * e
        ```
        Optimized:
        ```
        a = d * e
        ```

*   **Strength Reduction:** Replacing expensive operations with cheaper ones.
    *   Example:  `t1 = a * 2` -> `t1 = a + a` or `t1 = a << 1` (left shift if applicable)

*   **Copy Propagation:**  Replacing variables with their values.
    *   Example:
        ```
        t1 = b
        a = t1 + c
        ```
        Optimized:
        ```
        a = b + c
        ```

## Important Points to Remember

*   IRs are essential for compiler portability and optimization.
*   Stack-Machine Code is simple to generate but harder to optimize directly.
*   Three-Address Code is more verbose but allows for more sophisticated optimizations.
*   Different representations of TAC (Quadruples, Triples, Indirect Triples) offer trade-offs between space and complexity.

## Practice Questions

1.  **Convert the following expression to both Stack-Machine Code and Three-Address Code:** `x = (a + b) * (c - d)`

    *   **Stack-Machine Code:**

        ```
        PUSH a
        PUSH b
        ADD
        PUSH c
        PUSH d
        SUB
        MULT
        STORE x
        ```

    *   **Three-Address Code:**

        ```
        t1 = a + b
        t2 = c - d
        x = t1 * t2
        ```

2.  **Represent the following Three-Address Code sequence using Quadruples, Triples, and Indirect Triples:**

    ```
    t1 = b * c
    t2 = t1 + d
    a = t2
    ```

    *   **Quadruples:**

        ```
        (*, b, c, t1)
        (+, t1, d, t2)
        (=, t2, , a)
        ```

    *   **Triples:**

        ```
        (0) (*, b, c)
        (1) (+, (0), d)
        (2) (=, (1), , a)
        ```

    *   **Indirect Triples:**

        Triples:
        ```
        (0) (*, b, c)
        (1) (+, (0), d)
        (2) (=, (1), , a)
        ```

        Indirect Triple Table:
        ```
        (0) -> (0)
        (1) -> (1)
        (2) -> (2)
        ```

3.  **Identify possible optimizations for the following Three-Address Code and provide the optimized code:**

    ```
    t1 = 2 * 5
    a = t1 + b
    t2 = 2 * 5   ; redundant computation
    c = t2 + d
    ```

    *   **Optimizations:** Constant Folding, Common Subexpression Elimination.
    *   **Optimized Code:**

        ```
        t1 = 10
        a = t1 + b
        c = t1 + d
        ```

4. **Explain the importance of Intermediate Representation in a compiler.**

   *  IR bridges the gap between the source code and target machine code, enabling machine independence and optimization.

5. **What are the trade-offs between using Stack-Machine Code and Three-Address Code as an IR?**

   *  Stack-Machine Code is simple and compact but harder to optimize. Three-Address Code is more verbose but allows for easier and more effective optimization.

These notes provide a comprehensive overview of Linear Intermediate Representations, focusing on Stack-Machine Code and Three-Address Code. Understanding these concepts is crucial for compiler design, especially in the context of optimization and code generation. Remember to practice converting code between different IR forms and identify potential optimization opportunities.
