---
title: "Graphical IRs - Syntax-Related Trees"
subject: "COMPILER DESIGN"
module: "Module 3: Bottom"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8ba5c"
status: "completed"
scrapedAt: "2026-05-20T16:51:20.369Z"
---
## Compiler Design - Module 3: Bottom-Up Parsing - Graphical IRs: Syntax-Related Trees

**Overview:** This module focuses on the use of graphical intermediate representations (IRs), specifically syntax-related trees, as a bridge between the parsing phase and the code generation phase in a compiler. These trees serve as a structured representation of the source code, facilitating subsequent analysis and optimization. We'll explore various types of syntax-related trees, their construction, and their role in compiler design.

**Learning Outcomes:**

*   Understand the concept of Intermediate Representation (IR) and its importance in compiler design.
*   Describe different types of Syntax-Related Trees: Parse Trees, Concrete Syntax Trees, and Abstract Syntax Trees (ASTs).
*   Distinguish between Parse Trees, Concrete Syntax Trees, and Abstract Syntax Trees.
*   Explain how to construct Syntax-Related Trees from a given grammar and input code.
*   Identify and implement simplifications to create ASTs from Parse Trees.
*   Understand the advantages of using ASTs over Parse Trees in compiler optimization and code generation.

**1. Intermediate Representation (IR): The Compiler's Middle Ground**

*   **Definition:** An intermediate representation (IR) is a data structure used by a compiler to represent the source program after parsing and semantic analysis, but before code generation. It acts as a bridge between the front end (lexical analysis, parsing, semantic analysis) and the back end (code optimization, code generation) of a compiler.
*   **Importance:**
    *   **Modularity:** Decouples the front end and back end. Allows for different front ends (different source languages) to be used with the same back end (same target architecture), and vice-versa.
    *   **Optimization:**  Provides a suitable form for performing various program optimizations (e.g., constant folding, dead code elimination).
    *   **Target Independence:** Makes the compiler more easily retargetable to different machine architectures.  Changes to the target architecture primarily affect the back end.
    *   **Portability:** Simplifies compiler development by breaking down the compilation process into smaller, manageable stages.
*   **Types of IRs:**
    *   **Graphical IRs:** Examples include Syntax Trees (Parse Trees, CSTs, ASTs), Control Flow Graphs (CFGs), Data Flow Graphs (DFGs).
    *   **Linear IRs:** Examples include Three-Address Code, Stack Machine Code, Intermediate Languages (e.g., P-code, Bytecode).

**2. Syntax-Related Trees: Representing Program Structure**

*   Syntax-related trees are graphical IRs that directly reflect the syntactic structure of the source code, as defined by the language's grammar.  They are usually constructed during or immediately after the parsing phase.
*   **Types of Syntax-Related Trees:**
    *   **Parse Trees (Concrete Syntax Trees):** Represent the derivation process of a parser based on the formal grammar.
    *   **Concrete Syntax Trees (CSTs):**  Almost identical to Parse Trees, often retaining some "syntactic sugar" elements that are useful for maintaining source location information.
    *   **Abstract Syntax Trees (ASTs):**  Simplified, more abstract representations of the program's structure, omitting unnecessary details and focusing on the essential semantic content.

**3. Parse Trees (Concrete Syntax Trees): Detailed Syntactic Representation**

*   **Definition:** A parse tree (also called a derivation tree) is a tree representation of the derivation of a terminal string (the source code) according to a formal grammar. Each internal node represents a non-terminal symbol, and each leaf node represents a terminal symbol or ε (epsilon, representing an empty string).
*   **Construction:**  Generated during parsing, reflecting the rules applied to derive the input string. Each step in the derivation corresponds to a node in the parse tree.
*   **Characteristics:**
    *   Detailed and complete syntactic representation.
    *   Contains all grammar symbols (both terminals and non-terminals).
    *   May include nodes for syntactic constructs that don't contribute significantly to the program's meaning.
    *   Can be large and complex, especially for complex grammars.
*   **Example:**

    Consider the grammar:

    ```
    E -> E + T | T
    T -> T * F | F
    F -> ( E ) | id
    ```

    And the input string: `id + id * id`

    The Parse Tree would be:

    ```
          E
         / \
        E   +
       / \
      T   T
     /   / \
    F   T   F
    |   |   |
    id  F   id
        |
        id
    ```

**4. Abstract Syntax Trees (ASTs): Simplified Semantic Representation**

*   **Definition:** An abstract syntax tree (AST) is a tree representation of the abstract syntactic structure of the source code. It captures the essential meaning of the program, omitting details that are irrelevant for later compiler phases, such as parsing order, grouping symbols, and some non-terminals.
*   **Construction:** Typically built from the Parse Tree (or CST) by applying transformations that remove redundant nodes and simplify the structure.
*   **Characteristics:**
    *   More concise and abstract than Parse Trees.
    *   Focuses on the semantic meaning of the program.
    *   Omits non-essential syntactic details (e.g., keywords, delimiters, non-terminals used purely for parsing).
    *   Easier to process for semantic analysis, optimization, and code generation.
*   **Transformations for creating ASTs from Parse Trees:**
    *   **Removing chain productions:** Productions of the form `A -> B`, where A and B are non-terminals.
    *   **Removing non-essential non-terminals:**  Nodes that simply group other nodes without adding semantic value.
    *   **Collapsing single-child nodes:** Replacing a node with its only child.
    *   **Replacing terminal symbols with more meaningful representations:** For instance, replacing `id` with a pointer to the symbol table entry.
*   **Example (Continuing from the Parse Tree example above):**

    The AST for `id + id * id` would be:

    ```
          +
         / \
        id  *
           / \
          id  id
    ```

    Notice how the intermediate non-terminals (E, T, F) have been removed, and the operator precedence is implicitly represented by the tree structure.

**5. Distinguishing Between Parse Trees, Concrete Syntax Trees, and Abstract Syntax Trees**

| Feature         | Parse Tree (Concrete Syntax Tree)  | Abstract Syntax Tree (AST)                |
|-----------------|--------------------------------------|---------------------------------------------|
| Level of Detail | High                                 | Low                                           |
| Grammar Symbols | All (Terminals and Non-terminals)   | Only essential operators and operands       |
| Abstraction     | Low                                  | High                                          |
| Size            | Larger                               | Smaller                                       |
| Purpose        | Representing the derivation process  | Representing the program's essential meaning |
| Ease of Use    | Difficult for later compiler phases | Easier for later compiler phases           |

**6. Constructing Syntax-Related Trees: Process and Example**

1.  **Parse the Input:**  Use a parser (e.g., top-down, bottom-up) to generate a Parse Tree (or CST) based on the grammar of the language.
2.  **Transform the Parse Tree:** Apply simplification rules to transform the Parse Tree into an AST. This involves:
    *   Removing redundant nodes.
    *   Collapsing single-child nodes.
    *   Removing chain productions.
    *   Replacing terminal symbols with more meaningful representations.

*   **Example (Building an AST from a Parse Tree):**

    **Grammar:**

    ```
    S -> if E then S else S
    S -> begin S L end
    S -> print E
    L -> ; S L | ; S
    E -> num = num
    ```

    **Input Code:** `if 1 = 2 then print 3 else begin print 4 ; print 5 end`

    **Simplified AST (after applying the transformations described above):**

    ```
              if
            / | \
           =   print  begin
          / \   |      / \
         1   2   3     ;   print
                      / \  |
                     print 4 5
                     |
                     4
    ```

**7. Advantages of Using ASTs**

*   **Simplified Representation:** Easier to analyze and manipulate.
*   **Improved Efficiency:** Reduces the complexity of subsequent compiler phases (semantic analysis, optimization, code generation).
*   **Better Optimization Opportunities:** ASTs expose the semantic structure, enabling more effective optimization algorithms.
*   **Easier Code Generation:**  ASTs provide a clear and concise representation that simplifies the code generation process.

**8. Important Points to Remember**

*   Intermediate Representations (IRs) are crucial for compiler design.
*   Syntax-related trees provide a graphical representation of the source code's structure.
*   Parse Trees are detailed syntactic representations, while ASTs are simplified semantic representations.
*   ASTs are generally preferred over Parse Trees for later compiler phases due to their simplicity and focus on semantic meaning.
*   Transformations are applied to Parse Trees to create ASTs.

**Practice Questions/Exercises:**

1.  **Draw the Parse Tree and AST for the following expression, using the grammar provided earlier (E -> E + T | T, T -> T * F | F, F -> ( E ) | id): `(id + id) * id`**

    *Answer:*

    **Parse Tree:**

    ```
           E
          / \
         T   *
        /   E
       F   / \
       |  E   +
      ( ) / \
         T   T
         |   |
         F   F
         |   |
        id  id

    ```

    **AST:**

    ```
          *
         / \
        +   id
       / \
      id  id
    ```

2.  **Explain the main differences between a Parse Tree and an AST.  Why are ASTs preferred for later compiler stages?**

    *Answer:* See Section 5 of these notes.  ASTs are preferred because they are simpler, focus on semantics, and facilitate optimization and code generation.

3.  **Consider the grammar `S -> id = E;`, `E -> E + T | T`, `T -> num`. Draw the Parse Tree and AST for the statement `x = 1 + 2;`**

    *Answer:*

    **Parse Tree:**

    ```
        S
       / \
      id  =
      |   E
      x  / \
         E   +
         |   T
         T   |
         |  num
        num  |
         |  2
         1
    ```

    **AST:**

    ```
         =
        / \
       x   +
          / \
         1   2
    ```

4.  **Describe the typical transformations used to convert a Parse Tree into an AST.**

    *Answer:* Removing chain productions, removing non-essential non-terminals, collapsing single-child nodes, and replacing terminal symbols with more meaningful representations.

5.  **Why is an Intermediate Representation (IR) important in compiler design?**

    *Answer:* See Section 1 of these notes.  It provides modularity, enables optimization, promotes target independence, and simplifies compiler development.
