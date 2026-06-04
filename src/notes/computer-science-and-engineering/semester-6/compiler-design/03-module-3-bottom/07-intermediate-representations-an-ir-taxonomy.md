---
title: "Intermediate Representations: An IR Taxonomy"
subject: "COMPILER DESIGN"
module: "Module 3: Bottom"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8ba5b"
status: "completed"
scrapedAt: "2026-05-20T16:51:19.662Z"
---
## Compiler Design: Module 3 - Bottom-Up Parsing
### Topic: Intermediate Representations (IR): An IR Taxonomy

**Learning Outcomes:**

*   Understand the role of Intermediate Representation (IR) in compilation.
*   Identify different types of IRs and their characteristics.
*   Evaluate the advantages and disadvantages of different IRs.
*   Choose an appropriate IR for a given compiler task.

**1. Introduction to Intermediate Representation (IR)**

*   **Definition:** An IR is an abstract representation of the source program, created by the compiler after lexical analysis, syntax analysis, and semantic analysis, and before code generation. It bridges the gap between the high-level source code and the low-level target code.
*   **Role of IR:**
    *   **Machine Independence:** IR isolates the front-end (lexical analysis, parsing, semantic analysis) from the back-end (code optimization, code generation), allowing the same front-end to be used for different target architectures and vice-versa.
    *   **Optimization:**  Facilitates machine-independent optimizations (e.g., constant folding, common subexpression elimination) on the program before generating target code.
    *   **Modularity:** Simplifies compiler development by breaking it into smaller, more manageable phases.
    *   **Retargetability:**  Allows for easier retargeting of the compiler to different platforms by simply changing the back-end.
*   **General Structure:** IRs are typically structured as either control flow graphs or abstract syntax trees with annotations, or linear representations of these.

**2. IR Taxonomy: Different Types of IRs**

IRs can be classified along several dimensions, including:

*   **Level of Abstraction:** High-level, Medium-level, Low-level.
*   **Representation Style:** Structural, Linear, Hybrid.

Here's a breakdown of the common IR types:

**2.1 High-Level IRs (HIRs)**

*   **Characteristics:**
    *   Closely resemble the source language.
    *   Preserve high-level language constructs such as loops, conditionals, and data structures.
    *   Easier to generate from source code but may require more analysis to optimize.
*   **Examples:**
    *   **Abstract Syntax Trees (ASTs):**
        *   **Definition:** Tree-like representation of the source code's syntactic structure.  Nodes represent operators, keywords, and identifiers.
        *   **Advantages:**  Simple to create, preserves program structure, useful for semantic analysis.
        *   **Disadvantages:**  Not easily amenable to many optimizations, can be memory-intensive.
        *   **Example:** Consider the expression `a = b + c * 2;`  The AST would look like this:

        ```
                =
               / \
              a   +
                 / \
                b   *
                   / \
                  c   2
        ```

    *   **Directed Acyclic Graphs (DAGs):**
        *   **Definition:**  Similar to ASTs, but common subexpressions are represented only once, forming a graph rather than a tree.
        *   **Advantages:** More compact than ASTs, facilitates common subexpression elimination.
        *   **Disadvantages:**  More complex to build than ASTs.

**2.2 Medium-Level IRs (MIRs)**

*   **Characteristics:**
    *   More abstract than low-level IRs but still retain some high-level language features.
    *   Often used for machine-independent optimizations.
    *   Represent control flow more explicitly than HIRs.
*   **Examples:**
    *   **Three-Address Code:**
        *   **Definition:**  Each instruction has at most three operands (two sources and one destination).  Operators are explicit, and temporary variables are introduced.  Control flow is represented using labels and jumps.
        *   **Advantages:**  Simple, facilitates many optimization techniques (e.g., constant propagation, dead code elimination), easy to generate from HIRs.
        *   **Disadvantages:** Introduces numerous temporary variables, may not be directly executable on real machines.
        *   **Example:** The expression `a = b + c * 2;` would be translated into Three-Address Code as:

        ```
        t1 = c * 2
        t2 = b + t1
        a  = t2
        ```

    *   **Static Single Assignment (SSA) Form:**
        *   **Definition:** A variant of Three-Address Code where each variable is assigned a value only once.  If a variable is assigned different values along different control flow paths, a *phi-function* is used to merge the values.
        *   **Advantages:**  Facilitates dataflow analysis and many optimizations (e.g., dead code elimination, constant propagation).
        *   **Disadvantages:** More complex to generate than regular Three-Address Code.
        *   **Example:**  Consider the following code:

            ```c
            if (condition) {
              x = 10;
            } else {
              x = 20;
            }
            y = x + 5;
            ```

            In SSA form:

            ```
            if (condition) {
              x1 = 10;
            } else {
              x2 = 20;
            }
            x3 = phi(x1, x2)  // x3 takes x1 if condition is true, x2 otherwise
            y1 = x3 + 5;
            ```

    *   **Control Flow Graph (CFG):**
        *   **Definition:**  A directed graph where nodes represent basic blocks (sequences of instructions with a single entry and exit point), and edges represent control flow transitions between basic blocks.
        *   **Advantages:**  Visually represents control flow, useful for control flow analysis and optimizations.
        *   **Disadvantages:**  Can become complex for large programs.

**2.3 Low-Level IRs (LIRs)**

*   **Characteristics:**
    *   Closest to the target machine's instruction set.
    *   Use registers or virtual registers.
    *   Often used for machine-dependent optimizations and code generation.
*   **Examples:**
    *   **Linear Assembly:**
        *   **Definition:**  A textual representation of machine instructions using mnemonics.
        *   **Advantages:**  Easy to understand and manipulate, allows for fine-grained control over code generation.
        *   **Disadvantages:**  Machine-specific, difficult to optimize directly.
        *   **Example (Simplified Assembly):**

            ```assembly
            MOV  R1, b     ; Move the value of b into register R1
            MOV  R2, c     ; Move the value of c into register R2
            MUL  R2, 2     ; Multiply R2 by 2
            ADD  R1, R2     ; Add R2 to R1
            MOV  a, R1     ; Move the value of R1 into a
            ```

    *   **Register Transfer Language (RTL):**
        *   **Definition:**  An abstract representation of machine instructions that emphasizes the movement of data between registers and memory.
        *   **Advantages:** Facilitates register allocation and instruction scheduling.
        *   **Disadvantages:**  Machine-specific, complex to manipulate directly.

**3. Comparing IRs: Advantages and Disadvantages**

| IR Type              | Level        | Advantages                                                                                                     | Disadvantages                                                                                                | Use Cases                                                                                      |
| -------------------- | ------------ | -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| AST                  | High         | Simple to generate, preserves program structure, useful for semantic analysis.                                | Not easily amenable to many optimizations, can be memory-intensive.                                         | Semantic analysis, type checking, initial program representation.                              |
| DAG                  | High         | More compact than ASTs, facilitates common subexpression elimination.                                        | More complex to build than ASTs.                                                                            | Common subexpression elimination, initial optimization.                                        |
| Three-Address Code   | Medium       | Simple, facilitates many optimization techniques, easy to generate from HIRs.                               | Introduces numerous temporary variables, may not be directly executable on real machines.                      | Machine-independent optimizations, control flow analysis.                                     |
| SSA Form             | Medium       | Facilitates dataflow analysis and many optimizations.                                                        | More complex to generate than regular Three-Address Code.                                                    | Advanced optimizations like dead code elimination, constant propagation, global value numbering. |
| CFG                  | Medium       | Visually represents control flow, useful for control flow analysis and optimizations.                         | Can become complex for large programs.                                                                      | Control flow analysis, loop optimization.                                                      |
| Linear Assembly      | Low          | Easy to understand and manipulate, allows for fine-grained control over code generation.                       | Machine-specific, difficult to optimize directly.                                                           | Code generation, machine-dependent optimizations.                                               |
| Register Transfer Language | Low          | Facilitates register allocation and instruction scheduling.                                                        | Machine-specific, complex to manipulate directly.                                                           | Register allocation, instruction scheduling.                                               |

**4. Choosing an Appropriate IR**

The choice of IR depends on:

*   **Compiler Goals:** Optimization level, target architecture, compilation speed.
*   **Source Language:** Complexity, features.
*   **Compiler Design:** Modularity, maintainability.

Generally, compilers use a sequence of IRs, starting with a high-level IR and gradually lowering the abstraction level as compilation progresses.  For example: AST -> Three-Address Code -> Linear Assembly.

**5. Practice Questions and Exercises**

1.  **Question:**  Explain the purpose of Intermediate Representation in a compiler.
    *   **Answer:** IR bridges the gap between source code and target code, enabling machine independence, optimization, and modularity in compiler design.

2.  **Question:**  Give an example of a High-Level IR and a Low-Level IR.
    *   **Answer:** High-Level: Abstract Syntax Tree (AST). Low-Level: Linear Assembly.

3.  **Question:**  Convert the following C code fragment into Three-Address Code:

    ```c
    x = (a + b) * (c - d);
    ```

    *   **Answer:**

        ```
        t1 = a + b
        t2 = c - d
        x  = t1 * t2
        ```

4.  **Question:**  What are the advantages of using SSA form compared to regular Three-Address Code?
    *   **Answer:** SSA form facilitates dataflow analysis and various optimizations like dead code elimination and constant propagation due to its single assignment property.

5.  **Question:**  What factors influence the choice of IR in a compiler?
    *   **Answer:** Compiler goals (optimization level, target architecture), source language complexity, and compiler design considerations (modularity, maintainability).

**6. Important Points to Remember**

*   IR is a critical component of modern compilers.
*   Different IRs are suited for different phases of compilation.
*   The choice of IR affects the efficiency and effectiveness of optimizations.
*   Understanding the properties of different IRs is essential for compiler designers.
*   A compiler can employ a sequence of different IRs, transitioning from high-level representations to lower-level ones as compilation progresses.
