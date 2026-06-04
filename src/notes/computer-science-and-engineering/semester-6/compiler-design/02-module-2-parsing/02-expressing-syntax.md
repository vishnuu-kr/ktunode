---
title: "Expressing Syntax"
subject: "COMPILER DESIGN"
module: "Module 2: Parsing "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8ba4e"
status: "completed"
scrapedAt: "2026-05-20T16:51:11.093Z"
---
# COMPILER DESIGN - Module 2: Parsing - Expressing Syntax

## Introduction

This module focuses on Parsing, a crucial phase in compiler design that transforms the stream of tokens produced by the lexical analyzer into a structured representation, typically a parse tree or an abstract syntax tree. This topic, "Expressing Syntax," deals with the formalisms and methods used to describe the grammar of a programming language, enabling the parser to correctly interpret the input code.

## Learning Outcomes

By the end of this topic, you should be able to:

*   Understand the importance of formally defining syntax in compiler design.
*   Define and differentiate between context-free grammars (CFGs) and regular expressions (REs) and their applications in compiler construction.
*   Express programming language constructs using context-free grammars.
*   Understand and apply ambiguity in grammars, and how to resolve it.
*   Understand different representations of grammars (e.g., derivations, parse trees).
*   Convert grammars to different forms.

## 1. Importance of Formally Defining Syntax

*   **Definition:** Syntax refers to the rules that govern the structure of a programming language. A formal definition is crucial for:
    *   **Unambiguous Specification:** Eliminates ambiguity in how language constructs should be interpreted.
    *   **Compiler Construction:** Provides a solid foundation for building parsing algorithms.  The parser relies on the defined grammar to determine if the input code is syntactically correct.
    *   **Language Standardization:** Ensures that different compilers for the same language behave consistently.
    *   **Error Detection:**  A well-defined syntax allows the compiler to effectively detect syntax errors and provide informative error messages.
    *   **Communication:** Provides a clear way for language designers, compiler writers, and programmers to communicate about the language's structure.

*   **Without Formal Syntax:**
    *   Interpreting the code would be inconsistent.
    *   Compilers would be difficult to build and maintain.
    *   Programming would be extremely error-prone.

## 2. Context-Free Grammars (CFGs) vs. Regular Expressions (REs)

| Feature         | Regular Expressions (REs) | Context-Free Grammars (CFGs) |
|-----------------|--------------------------|------------------------------|
| **Purpose**      | Lexical Analysis        | Syntax Analysis              |
| **Power**        | Less Powerful          | More Powerful                |
| **What they define**| Regular Languages        | Context-Free Languages      |
| **Memory Required**| Finite State Automata (FSA)| Pushdown Automata (PDA)      |
| **Recursion**    | Not Allowed            | Allowed                      |
| **Typical Use**   | Defining tokens (e.g., identifiers, numbers) | Defining the structure of programs (e.g., expressions, statements) |
| **Components**  | Characters, Operators (e.g., *, +, \|) | Terminals, Non-terminals, Production Rules |

*   **Regular Expressions (REs):**
    *   Used primarily for lexical analysis (scanning).
    *   Good at recognizing patterns in the input stream (tokens).
    *   Cannot handle nested structures or balanced constructs due to the lack of recursion.
    *   Examples:
        *   `[a-zA-Z][a-zA-Z0-9]*` (identifier)
        *   `[0-9]+` (integer)

*   **Context-Free Grammars (CFGs):**
    *   Used for syntax analysis (parsing).
    *   Define the hierarchical structure of the program.
    *   Capable of handling nested structures and recursion, crucial for programming languages.
    *   Examples:
        *   `E -> E + T | T` (expression)
        *   `T -> T * F | F` (term)
        *   `F -> ( E ) | id` (factor)

*   **Key Differences:**
    *   **Recursion:** CFGs support recursion, allowing them to define nested structures (e.g., if-else statements within if-else statements). REs cannot handle recursion.
    *   **Memory:**  REs can be implemented using Finite State Automata (FSAs), which have finite memory. CFGs require Pushdown Automata (PDAs), which have a stack for handling recursion.

## 3. Expressing Programming Language Constructs with CFGs

*   **Components of a CFG:**
    *   **Terminals (T):** The basic symbols of the language (e.g., `id`, `+`, `-`, `*`, `/`, `(`, `)`, keywords like `if`, `else`, `while`, `for`).  These are tokens produced by the lexical analyzer.
    *   **Non-terminals (N):** Variables representing syntactic categories (e.g., `Expression`, `Statement`, `Term`, `Factor`).
    *   **Production Rules (P):** Rules that define how non-terminals can be replaced by other non-terminals or terminals.  Format: `Non-terminal -> Sequence of Terminals and/or Non-terminals`.
    *   **Start Symbol (S):** A special non-terminal that represents the entire program.

*   **Examples:**

    *   **Arithmetic Expressions:**

        ```
        E -> E + T | E - T | T
        T -> T * F | T / F | F
        F -> ( E ) | id | num
        ```

    *   **If-Else Statement:**

        ```
        Statement -> if ( Expression ) Statement else Statement |
                     if ( Expression ) Statement |
                     OtherStatement
        Expression -> id == id | id < id | ...
        OtherStatement -> id = Expression; | ...
        ```

    *   **While Loop:**

        ```
        Statement -> while ( Expression ) Statement |
                     OtherStatement
        Expression -> id < id | id > id | ...
        OtherStatement -> id = Expression; | ...
        ```

    *   **Function Definition:**

        ```
        FunctionDefinition -> Type id ( ParameterList ) { StatementList }
        Type -> int | float | void
        ParameterList -> Parameter | Parameter , ParameterList | ε  (ε represents empty string)
        Parameter -> Type id
        StatementList -> Statement StatementList | ε
        Statement -> ... (as defined before)
        ```

## 4. Ambiguity in Grammars

*   **Definition:** A grammar is *ambiguous* if there exists at least one string (sentence) that can be derived from the start symbol in *more than one way*.  This means there are multiple parse trees for the same input string.

*   **Consequences:**
    *   The compiler might interpret the code differently depending on which parse tree it uses.
    *   Leads to unpredictable and potentially incorrect program behavior.

*   **Examples:**

    *   **Dangling-Else Problem:**

        ```
        Statement -> if ( Expression ) Statement |
                     if ( Expression ) Statement else Statement |
                     OtherStatement
        ```

        The string `if (E1) if (E2) S1 else S2` can be interpreted in two ways:

        1.  `if (E1) { if (E2) S1 else S2 }`  (The `else` belongs to the inner `if`)
        2.  `if (E1) { if (E2) S1 } else S2`   (The `else` belongs to the outer `if`)

*   **Resolving Ambiguity:**

    *   **Rewriting the Grammar:** Often, the grammar can be rewritten to be unambiguous.  For the dangling-else problem:

        ```
        Statement -> MatchedStatement | UnmatchedStatement
        MatchedStatement -> if ( Expression ) MatchedStatement else MatchedStatement | OtherStatement
        UnmatchedStatement -> if ( Expression ) Statement |
                            if ( Expression ) MatchedStatement else UnmatchedStatement
        ```

        This grammar forces the `else` to associate with the nearest unmatched `if`.

    *   **Using Precedence and Associativity Rules:** For expressions, precedence and associativity can be explicitly defined.  This often involves rewriting the grammar.

    *   **Using Parser Generators' Directives:** Many parser generators (e.g., Yacc, Bison) provide directives to specify precedence and associativity, which guide the parser to choose the correct interpretation.

## 5. Representations of Grammars

*   **Derivations:** A sequence of production rule applications, starting from the start symbol, that leads to a string of terminals (the input program).

    *   **Leftmost Derivation:** At each step, the leftmost non-terminal is replaced.
    *   **Rightmost Derivation:** At each step, the rightmost non-terminal is replaced.

*   **Parse Trees (Derivation Trees):** A graphical representation of a derivation.

    *   The root node is the start symbol.
    *   Each internal node represents a non-terminal.
    *   Each leaf node represents a terminal.
    *   Children of a node represent the symbols on the right-hand side of the production rule applied to that node's non-terminal.

*   **Example:**

    Grammar: `E -> E + T | T`, `T -> T * F | F`, `F -> ( E ) | id`

    Input String: `id + id * id`

    *   **Leftmost Derivation:**
        `E => E + T => T + T => F + T => id + T => id + T * F => id + F * F => id + id * F => id + id * id`

    *   **Rightmost Derivation:**
        `E => E + T => E + T * F => E + T * id => E + F * id => E + id * id => T + id * id => F + id * id => id + id * id`

    *   **Parse Tree:**

        ```
             E
            / \
           E   +
          / \
         T   *
        /   / \
       id  id  id
        ```

## 6. Grammar Transformations

*   **Purpose:**  To make the grammar suitable for a specific parsing technique or to remove undesirable properties like ambiguity.

*   **Common Transformations:**

    *   **Left Factoring:** Eliminates common prefixes in production rules.  Helpful for predictive (top-down) parsing.

        *   Example: `A -> αβ1 | αβ2` becomes:
            `A -> αA'`
            `A' -> β1 | β2`

    *   **Left Recursion Elimination:**  Removes left recursion (where a non-terminal directly or indirectly derives itself as the leftmost symbol).  Necessary for top-down parsing algorithms.

        *   Direct Left Recursion: `A -> Aα | β` becomes:
            `A -> βA'`
            `A' -> αA' | ε`

        *   Indirect Left Recursion requires more complex algorithms.

## Important Points to Remember

*   CFGs are more powerful than REs and are used for syntax analysis.
*   Ambiguity in grammars is undesirable and must be resolved.
*   Parse trees visually represent the structure of a program according to its grammar.
*   Grammar transformations can make a grammar more suitable for a specific parsing technique.
*   The choice of grammar affects the complexity and efficiency of the parser.

## Practice Questions / Exercises

1.  **Write a CFG for simple assignment statements:**  An assignment statement assigns the value of an expression to an identifier. Assume identifiers can be any sequence of alphanumeric characters starting with a letter, and expressions can be integers or identifiers.

    *   **Answer:**
        ```
        Statement -> id = Expression ;
        Expression -> id | num
        id -> [a-zA-Z][a-zA-Z0-9]*
        num -> [0-9]+
        ```

2.  **Identify whether the following grammar is ambiguous:**

    ```
    S -> S S | ( S ) | ε
    ```

    *   **Answer:** The grammar *is* ambiguous.  Consider the string `()()`. It can be derived in multiple ways.

3.  **Eliminate left recursion from the following grammar:**

    ```
    E -> E + T | T
    T -> T * F | F
    F -> id
    ```

    *   **Answer:**

        ```
        E -> T E'
        E' -> + T E' | ε
        T -> F T'
        T' -> * F T' | ε
        F -> id
        ```

4.  **Draw the parse tree for the expression `a + b * c` using the following grammar:**

    ```
    E -> E + T | T
    T -> T * F | F
    F -> id
    ```

    *   **Answer:**

        ```
               E
            /     \
           E       +
         /         \
        T           T
                 /    \
                T      *
               /      /  \
              F      F    F
              |      |    |
              a      b    c
        ```

5. **Given the following grammar:**
    ```
    A -> B C
    B -> x | y
    C -> z
    ```
    Give a leftmost derivation for the string "xz".

    * **Answer:**
    `A => B C => x C => x z`

This comprehensive guide should provide a solid foundation for understanding how to express syntax in compiler design. Remember to practice with more examples and exercises to solidify your understanding. Good luck!
