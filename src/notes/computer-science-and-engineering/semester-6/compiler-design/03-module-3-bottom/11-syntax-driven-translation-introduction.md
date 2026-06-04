---
title: "Syntax-Driven Translation:  Introduction"
subject: "COMPILER DESIGN"
module: "Module 3: Bottom"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8ba5f"
status: "completed"
scrapedAt: "2026-05-20T16:51:22.500Z"
---
## COMPILER DESIGN - Module 3: Bottom-Up Parsing - Syntax-Driven Translation: Introduction

**Learning Outcomes:**

*   Understand the concept of Syntax-Directed Translation (SDT).
*   Differentiate between Syntax-Directed Definitions (SDD) and Translation Schemes.
*   Learn about attributed grammars and their use in semantic analysis.
*   Understand synthesized and inherited attributes and their roles in SDT.
*   Apply SDT to simple language constructs for code generation or semantic analysis.

---

### 1. Introduction to Syntax-Directed Translation (SDT)

*   **Definition:** Syntax-Directed Translation (SDT) is a compiler construction technique where the translation of a source language construct is driven by the syntax of the construct.  Essentially, the translation process is tightly coupled with the parsing process.

*   **Key Idea:** SDT attaches semantic actions or rules to grammar productions.  When a parser recognizes a grammar production, the associated semantic actions are executed, performing computations related to the meaning of that construct.

*   **Purpose:**
    *   **Semantic Analysis:** Check for type correctness, variable declaration before use, and other semantic constraints.
    *   **Intermediate Code Generation:**  Translate the source code into an intermediate representation (e.g., three-address code, abstract syntax tree).
    *   **Code Optimization:** Apply optimizations based on semantic information.
    *   **Target Code Generation:**  Generate the final machine code or assembly code.

*   **Why use SDT?**
    *   **Modularity:**  Clear separation between syntax analysis (parsing) and semantic processing.
    *   **Maintainability:**  Changes to the language definition or target machine can be localized to the semantic actions.
    *   **Formalism:** Provides a formal framework for specifying the meaning of programming language constructs.

### 2. Syntax-Directed Definitions (SDD) vs. Translation Schemes

*   **Syntax-Directed Definition (SDD):**

    *   **Definition:**  A SDD is a context-free grammar together with *attributes* and *semantic rules*.
    *   **Attributes:**  Associated with grammar symbols (terminals and non-terminals).  Represent properties of the construct represented by the symbol (e.g., type, value, location).
    *   **Semantic Rules:**  Associated with grammar productions.  Define how to compute the values of attributes at the nodes in the parse tree.
    *   **Dependency Graph:**  SDD execution involves creating a dependency graph based on the parse tree and semantic rules.  The dependency graph shows the order in which attribute values must be computed.
    *   **Evaluation Order:**  Attribute values are computed in an order consistent with the dependency graph.
    *   **Declaration of Order:** SDD's *do not* explicitly specify the order of evaluation; they only declare the dependencies between attributes.
    *   **Example:**

        ```
        Production: E -> E1 + T
        Semantic Rule: E.val = E1.val + T.val
        ```

        *   `E`, `E1`, and `T` are grammar symbols.
        *   `val` is an attribute associated with each symbol.
        *   The semantic rule specifies that the value of the `val` attribute of `E` is the sum of the `val` attributes of `E1` and `T`.

*   **Translation Scheme:**

    *   **Definition:** A translation scheme is a context-free grammar together with *semantic actions*.
    *   **Semantic Actions:** Program fragments embedded within grammar productions.  These actions are executed when the corresponding production is used during parsing.
    *   **Evaluation Order:** Translation schemes *explicitly* specify the order of evaluation by placing semantic actions at specific positions within the production rule.
    *   **Implementation-Oriented:** More implementation-oriented than SDDs. They are closer to how a compiler would actually be implemented.
    *   **Example:**

        ```
        Production: E -> E1 + T { E.val = E1.val + T.val }
        ```

        *   The semantic action `{ E.val = E1.val + T.val }` is executed immediately after `E1 + T` is recognized during parsing.

*   **Key Differences:**

    | Feature          | Syntax-Directed Definition (SDD) | Translation Scheme                |
    | ---------------- | ----------------------------------- | --------------------------------- |
    | Order of Eval   | Implicit (Dependency Graph)        | Explicit (Action Placement)       |
    | Abstraction Level | High (Declarative)                  | Low (Imperative)                  |
    | Implementation    | Conceptual Model                     | Implementation-Ready            |

### 3. Attributed Grammars

*   **Definition:** Attributed grammars are context-free grammars extended with attributes and semantic rules. They are essentially SDDs.

*   **Attributes:** As mentioned before, are associated with grammar symbols.

*   **Two Main Types of Attributes:**

    *   **Synthesized Attributes:**

        *   **Definition:** An attribute whose value at a parse-tree node is determined by the attribute values at its *children* nodes.
        *   **Direction of Information Flow:** Bottom-up (from children to parent).
        *   **Calculation:** The value of a synthesized attribute at node N is computed from the values of attributes at the children of N.
        *   **Example:** In the production `E -> E1 + T`, `E.val` is a synthesized attribute because it depends on `E1.val` and `T.val`.

    *   **Inherited Attributes:**

        *   **Definition:** An attribute whose value at a parse-tree node is determined by the attribute values at its *parent* and/or *siblings* nodes.
        *   **Direction of Information Flow:** Top-down or side-to-side.
        *   **Calculation:** The value of an inherited attribute at node N is computed from the values of attributes at the parent of N and/or the siblings of N.
        *   **Example:** Consider a declaration `int x, y;`. The `type` attribute of `x` and `y` might be inherited from the `int` declaration.  Production could be like: `D -> T L`, where `T` represents the type and `L` represents the list of variables.  Then `L.type = T.type` would be an inherited attribute.

*   **Example Illustrating Synthesized and Inherited Attributes:**

    Consider the grammar for simple type declarations:

    ```
    Production         | Semantic Rules
    --------------------|---------------------------------------------------
    D -> T L            | L.in = T.type
    T -> int            | T.type = integer
    T -> real           | T.type = real
    L -> L1 , id        | L1.in = L.in ; addtype(id.entry, L.in)
    L -> id            | addtype(id.entry, L.in)
    ```

    *   `T.type`: Synthesized attribute representing the data type (integer or real).
    *   `L.in`: Inherited attribute representing the data type inherited by the list of identifiers.
    *   `id.entry`: Attribute containing a pointer to the symbol table entry for the identifier `id`.
    *   `addtype(id.entry, L.in)`: Function that adds the type `L.in` to the symbol table entry `id.entry`.

### 4. Applying SDT to Language Constructs

Let's illustrate with examples:

*   **Simple Arithmetic Expressions (Postfix Notation Generation):**

    ```
    Production         | Semantic Rules
    --------------------|---------------------------------------------------
    E -> E1 + T         | E.code = E1.code || T.code || "+"
    E -> T              | E.code = T.code
    T -> T1 * F         | T.code = T1.code || F.code || "*"
    T -> F              | T.code = F.code
    F -> ( E )         | F.code = E.code
    F -> id             | F.code = id.name
    ```

    *   `E.code`, `T.code`, `F.code`: Synthesized attributes representing the postfix notation of the corresponding expression.
    *   `id.name`:  Attribute representing the name of the identifier.
    *   `||` represents string concatenation.

    **Example Parse Tree and Attribute Evaluation:**

    For the input `a * (b + c)`:

    1.  The parse tree is constructed.
    2.  Semantic rules are applied bottom-up to compute the `code` attributes at each node.
    3.  The final result `E.code` at the root node is `a b c + *`, which is the postfix notation.

*   **Type Checking:**

    ```
    Production         | Semantic Rules
    --------------------|---------------------------------------------------
    E -> E1 + E2        | E.type = if (E1.type == integer and E2.type == integer) then integer else error
    E -> id             | E.type = lookup(id.name)  // Lookup type in symbol table
    ```

    *   `E.type`: Synthesized attribute representing the data type of the expression.
    *   `id.name`:  Attribute representing the name of the identifier.
    *   `lookup(id.name)`: Function that retrieves the type of the identifier from the symbol table.

    **Example:**

    If `a` and `b` are both declared as `integer` in the symbol table, then `a + b` will have the type `integer`.  If `a` is `integer` and `b` is `real`, the expression would result in a type error.

*   **Generating Three-Address Code:**

    ```
    Production         | Semantic Rules
    --------------------|---------------------------------------------------
    E -> E1 + T         | E.addr = newtemp(); generate(E.addr = E1.addr + T.addr)
                         | E.code = E1.code || T.code || generate(E.addr = E1.addr + T.addr)
    E -> T              | E.addr = T.addr; E.code = T.code
    T -> num            | T.addr = num.val; T.code = ""
    ```

    *   `E.addr`, `T.addr`:  Attributes storing the temporary variable holding the value of the expression/term.
    *   `newtemp()`: Function to generate a new temporary variable name.
    *   `generate(string)`:  Function to generate a three-address code instruction.
    *   `E.code`, `T.code`: String holding the generated three-address code.

    **Example:**

    For the expression `x + 5`:

    1.  `T.addr = 5` (assuming `num` represents the constant 5)
    2.  `E1.addr = x` (assuming x is looked up in the symbol table).
    3.  `E.addr = t1` (a new temporary variable is generated).
    4.  `generate(t1 = x + 5)` is called.
    5.  Resulting three-address code: `t1 = x + 5`

### 5. Important Points to Remember

*   SDT links syntax and semantics.
*   SDDs are declarative, while translation schemes are imperative.
*   Synthesized attributes flow information upwards in the parse tree.
*   Inherited attributes flow information downwards and sideways.
*   SDT is used for semantic analysis, intermediate code generation, and code optimization.
*   Careful attribute evaluation order is crucial, especially when using inherited attributes.

### 6. Practice Questions and Exercises

**Question 1:**

Consider the following SDD for converting infix expressions to prefix expressions:

```
Production      | Semantic Rules
-----------------|--------------------------------------
E -> T + E1     | E.code = "+" T.code E1.code
E -> T          | E.code = T.code
T -> num        | T.code = num.val
T -> (E)        | T.code = E.code
```

What is the prefix expression generated for the input `2 + (3 + 4)`?  Show the parse tree and attribute evaluation.

**Answer 1:**

Parse Tree:

```
       E
      /|\
     T + E1
    /    /|\
   2   T + E2
      /   / \
     3  +    4
```

Attribute Evaluation (bottom-up):

1.  `num.val` for `2`:  `2`
2.  `T.code` for `T -> num`: `2`
3.  `num.val` for `3`: `3`
4.  `T.code` for `T -> num`: `3`
5.  `num.val` for `4`: `4`
6.  `T.code` for `T -> num`: `4`
7.  `E2.code` for `E2 -> T`: `4`
8.  `E1.code` for `E1 -> T + E2`: `+ 3 4`
9.  `T.code` for `T -> (E1)`: `+ 3 4`
10. `E.code` for `E -> T + E1`: `+ 2 + 3 4`

Therefore, the prefix expression generated is `+ 2 + 3 4`.

**Question 2:**

Explain the difference between L-attributed and S-attributed grammars.

**Answer 2:**

*   **S-attributed grammar:**  An SDD that uses only synthesized attributes. Attribute evaluation can be done in a bottom-up fashion during parsing.
*   **L-attributed grammar:** An SDD where each attribute is either:
    *   Synthesized, *or*
    *   Inherited, but with the restriction that the inherited attribute at node `N` can depend *only* on:
        *   Attributes of the parent of `N`.
        *   Attributes of the siblings of `N` to the *left* of `N`.
        *   Attributes of `N` itself.

    L-attributed grammars can be evaluated during a single left-to-right traversal of the parse tree (e.g., during recursive-descent parsing).  All S-attributed grammars are L-attributed grammars.

**Question 3:**

Write an SDD to perform type checking for assignment statements of the form `id = expr`, where `id` has an entry in the symbol table with its type.

**Answer 3:**

```
Production        | Semantic Rules
------------------|------------------------------------------------------
S -> id = E       | { S.type = if (lookup(id.name) == E.type) then E.type else error;
                   |   if (S.type == error) then error("Type mismatch"); }
E -> E1 + E2     | E.type = if (E1.type == integer and E2.type == integer) then integer else error
E -> id          | E.type = lookup(id.name)
E -> num         | E.type = integer
```

This SDD checks if the type of the identifier on the left-hand side of the assignment is the same as the type of the expression on the right-hand side. If they match, the type of the statement `S.type` is set to that type. Otherwise, `S.type` is set to `error`, and an error message is generated.  `lookup(id.name)` retrieves the type of the identifier from the symbol table.  This assumes that identifiers are declared before being used in assignment statements.
