---
title: "Parsing - Introduction"
subject: "COMPILER DESIGN"
module: "Module 2: Parsing "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8ba4d"
status: "completed"
scrapedAt: "2026-05-20T16:51:10.384Z"
---
# COMPILER DESIGN - MODULE 2: PARSING - INTRODUCTION

## Introduction to Parsing

**Learning Outcomes:**

*   Understand the role of the parser in a compiler.
*   Define parsing and its goals.
*   Explain the difference between lexical analysis and parsing.
*   Describe different types of parsing techniques (top-down and bottom-up).
*   Identify the inputs and outputs of a parser.
*   Understand the concept of grammar and its relationship to parsing.
*   Recognize ambiguity in grammars and its implications.

---

### 1. The Role of the Parser in a Compiler

*   **Overall Compiler Structure:** A compiler typically consists of several phases:
    *   Lexical Analysis (Scanning)
    *   **Parsing (Syntax Analysis)**
    *   Semantic Analysis
    *   Intermediate Code Generation
    *   Code Optimization
    *   Code Generation

*   **Parser's Position:** The parser receives tokens from the lexical analyzer (scanner) and constructs a parse tree (or abstract syntax tree - AST) representing the syntactic structure of the source code.

*   **Key Task:** The parser's main task is to verify if the sequence of tokens received from the lexical analyzer conforms to the grammatical rules of the programming language being compiled.

### 2. Defining Parsing and Its Goals

*   **Definition:** Parsing (also known as syntax analysis) is the process of analyzing a string of symbols (tokens) according to the rules of a formal grammar.  It determines whether the input string can be derived from the grammar's start symbol.

*   **Goals of Parsing:**
    *   **Syntax Verification:**  Confirm that the input program adheres to the language's syntax rules.  Report any syntax errors encountered.
    *   **Structure Extraction:**  Build a representation of the program's structure (e.g., a parse tree or AST) that can be used by subsequent compiler phases.
    *   **Error Reporting and Recovery:**  Identify syntax errors, provide meaningful error messages to the programmer, and, ideally, recover from errors to continue processing the rest of the program.

### 3. Lexical Analysis vs. Parsing

| Feature          | Lexical Analysis (Scanning)                    | Parsing (Syntax Analysis)                        |
|-------------------|-------------------------------------------------|---------------------------------------------------|
| **Input**        | Source code (character stream)              | Token stream from lexical analyzer             |
| **Output**       | Token stream                                    | Parse tree or AST                                 |
| **Purpose**       | Identify and classify tokens (keywords, identifiers, operators, etc.) | Verify syntax and build the program's structure |
| **Error Detection**| Primarily detects lexical errors (e.g., invalid characters) | Detects syntax errors (e.g., mismatched parentheses, missing semicolons) |
| **Granularity**   | Operates on individual characters             | Operates on sequences of tokens                |
| **Grammar Type** | Regular expressions                             | Context-free grammars                           |

*   **Example:**

    *   **Source Code:** `x = y + 20;`

    *   **Lexical Analysis:**  Identifies `x` (IDENTIFIER), `=` (ASSIGNMENT), `y` (IDENTIFIER), `+` (PLUS), `20` (INTEGER_LITERAL), and `;` (SEMICOLON).

    *   **Token Stream:** `IDENTIFIER ASSIGNMENT IDENTIFIER PLUS INTEGER_LITERAL SEMICOLON`

    *   **Parsing:** Verifies if this sequence of tokens is a valid assignment statement according to the language's grammar.  If valid, it builds a parse tree representing the structure of the assignment.

### 4. Types of Parsing Techniques

*   **Top-Down Parsing:**
    *   Starts with the start symbol of the grammar and attempts to derive the input string.
    *   Works by repeatedly predicting which production rule to apply to expand non-terminal symbols.
    *   Common techniques: Recursive Descent Parsing, LL parsing.
    *   Intuitive and easier to implement manually (for simple grammars).
    *   Can be inefficient due to backtracking (in some cases).

*   **Bottom-Up Parsing:**
    *   Starts with the input string and attempts to reduce it to the start symbol of the grammar.
    *   Works by repeatedly finding handles (substrings that match the right-hand side of a production rule) and reducing them to the corresponding non-terminal symbol.
    *   Common techniques: LR parsing, Operator-precedence parsing.
    *   More powerful and efficient than top-down parsing (can handle a wider range of grammars).
    *   Generally requires more complex algorithms and tools (e.g., parser generators).

### 5. Inputs and Outputs of a Parser

*   **Input:**
    *   **Token Stream:**  The sequence of tokens generated by the lexical analyzer.
    *   **Grammar:**  A formal description of the syntax of the programming language.

*   **Output:**
    *   **Parse Tree (or Syntax Tree):** A tree-like representation of the syntactic structure of the input program, showing how the tokens are derived from the grammar.  Often simplified into an Abstract Syntax Tree (AST), which removes unnecessary details.
    *   **Error Messages:**  If the input program contains syntax errors, the parser generates error messages indicating the type of error and its location in the source code.

### 6. Grammar and its Relationship to Parsing

*   **Definition of Grammar:** A grammar is a set of rules that define the syntax of a programming language. It consists of:
    *   **Terminals:**  The basic symbols of the language (tokens).  Represented by lowercase letters, digits, or special characters. Example: `x`, `y`, `+`, `20`, `;`
    *   **Non-terminals:**  Variables that represent syntactic categories.  Represented by uppercase letters. Example: `Statement`, `Expression`, `Assignment`
    *   **Production Rules:** Rules that define how non-terminals can be expanded into sequences of terminals and/or non-terminals.  Expressed in the form `A -> α`, where A is a non-terminal and α is a string of terminals and/or non-terminals.
    *   **Start Symbol:** A special non-terminal that represents the top-level syntactic category of the language.

*   **Example Grammar:**

    ```
    Statement -> Assignment
    Assignment -> Identifier = Expression ;
    Expression -> Expression + Term
    Expression -> Term
    Term -> Identifier
    Term -> IntegerLiteral
    Identifier -> x | y | z
    IntegerLiteral -> 0 | 1 | 2 | ... | 99 | 100 | ...
    ```

*   **Relationship to Parsing:** The parser uses the grammar to determine if the input token stream is valid and to construct the parse tree.  The parser essentially attempts to apply the grammar rules in reverse to reduce the input token stream to the start symbol.

### 7. Ambiguity in Grammars and its Implications

*   **Definition of Ambiguity:** A grammar is ambiguous if there exists at least one string (sequence of tokens) that can be derived in two or more distinct ways, resulting in two or more different parse trees.

*   **Example of Ambiguous Grammar:**

    ```
    Expression -> Expression + Expression
    Expression -> Expression * Expression
    Expression -> Identifier
    Identifier -> x | y
    ```

    The expression `x + y * x` can be parsed in two ways:

    1.  `(x + y) * x`
    2.  `x + (y * x)`

*   **Implications of Ambiguity:**
    *   **Multiple Interpretations:** An ambiguous grammar allows multiple interpretations of the same program, which can lead to unpredictable behavior.
    *   **Parsing Difficulties:** Ambiguity can make parsing more difficult, as the parser needs to choose between multiple possible derivations.
    *   **Compiler Errors:** To avoid ambiguity, compilers either:
        *   Use disambiguating rules (e.g., operator precedence).
        *   Transform the grammar into an equivalent unambiguous grammar.
        *   Reject the ambiguous grammar and require the programmer to use parentheses to explicitly specify the desired interpretation.

---

**Practice Questions/Exercises:**

1.  **Identify the phase of the compiler that is responsible for checking the syntax of the program.**
    *   **Answer:** Parsing (Syntax Analysis)

2.  **Explain the difference between a token and a terminal symbol in the context of compiler design.**
    *   **Answer:** A token is the output of the lexical analyzer and represents a basic building block of the language (e.g., identifier, keyword, operator). A terminal symbol is a basic symbol defined in the grammar that represents a token.  In practice, the terms are often used interchangeably.

3.  **Give an example of a syntax error that would be detected by the parser.**
    *   **Answer:** Mismatched parentheses, missing semicolon at the end of a statement, incorrect order of keywords.  Example: `if (x > 5 {  // missing closing parenthesis and brace is used instead of parenthesis.`

4.  **Explain the difference between top-down and bottom-up parsing.**
    *   **Answer:** Top-down parsing starts with the grammar's start symbol and tries to derive the input, while bottom-up parsing starts with the input and tries to reduce it to the start symbol.

5.  **Why is it important for a grammar to be unambiguous?**
    *   **Answer:** An ambiguous grammar can lead to multiple interpretations of the same program, leading to unpredictable behavior and parsing difficulties.  It ensures that the compiler has one clear understanding of the code structure.

6.  **Consider the following grammar:**
    ```
    S -> A B
    A -> a A | a
    B -> b B | b
    ```
    **a) Is the string "aaabb" a valid string according to this grammar?  Explain.**
    **b)  Give a parse tree for the string "aaabb"**.

    **Answer:**
    **a)** Yes, the string "aaabb" is valid.  It can be derived as follows:
        S -> A B
        -> a A B
        -> a a A B
        -> a a a B
        -> a a a b B
        -> a a a b b

    **b)**

    ```
       S
      / \
     A   B
    / \ / \
   a   A b   B
      / \   / \
     a   A b   b
        / \
       a   a
           |
           a
    ```

---

**Important Points to Remember:**

*   The parser is a critical component of the compiler, responsible for verifying the syntax of the input program.
*   Parsing techniques are based on formal grammars that define the language's syntax.
*   Ambiguity in grammars can lead to significant problems and should be avoided.
*   Top-down and bottom-up parsing are two main approaches to parsing, each with its own strengths and weaknesses.
*   Understanding the role of the parser and the concepts of grammars and ambiguity is essential for designing and building compilers.
