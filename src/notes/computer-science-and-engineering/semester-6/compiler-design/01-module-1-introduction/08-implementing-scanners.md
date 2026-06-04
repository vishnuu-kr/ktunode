---
title: "Implementing Scanners"
subject: "COMPILER DESIGN"
module: "Module 1: Introduction "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8ba49"
status: "completed"
scrapedAt: "2026-05-20T16:51:08.257Z"
---
# COMPILER DESIGN - Module 1: Introduction - Implementing Scanners

## Overview

This module focuses on implementing scanners, a crucial first phase of a compiler. Scanners, also known as lexical analyzers, are responsible for breaking down the source code into a stream of tokens that can be understood by the parser. This module covers the theory and practical implementation techniques for efficient scanner design.

## Learning Outcomes

Upon completion of this module, you will be able to:

*   Understand the role of a scanner in a compiler.
*   Define key terms related to lexical analysis, such as tokens, lexemes, and patterns.
*   Convert regular expressions to finite automata (DFAs and NFAs).
*   Implement a scanner using state transition diagrams.
*   Identify and resolve common scanning issues, such as handling comments and errors.
*   Distinguish between various approaches to scanner implementation (e.g., handwritten, table-driven).

## 1. The Role of the Scanner in a Compiler

*   **What is a Compiler?** A compiler translates source code written in a high-level programming language into machine code or an intermediate representation.

*   **Phases of a Compiler:**
    1.  **Lexical Analysis (Scanning):**  Breaks the source code into tokens.
    2.  **Syntax Analysis (Parsing):**  Constructs a parse tree from the tokens.
    3.  **Semantic Analysis:**  Checks for semantic errors and gathers type information.
    4.  **Intermediate Code Generation:** Creates an intermediate representation of the code.
    5.  **Code Optimization:**  Improves the intermediate code.
    6.  **Code Generation:**  Generates the final machine code.

*   **The Scanner's Job:** The scanner reads the source program, character by character, and groups these characters into meaningful sequences called *lexemes*. Each lexeme is then categorized into a *token*.  The scanner passes these tokens to the parser.

*   **Benefits of separating Lexical Analysis:**
    *   **Simplicity:**  Simplifies the parser design.
    *   **Efficiency:**  Optimizes scanning separately can improve overall compilation speed.
    *   **Portability:**  Scanner handles platform-specific input formats.

## 2. Key Terms and Definitions

*   **Token:** A token is a category of lexemes that represents a logical unit in the programming language (e.g., `ID`, `NUM`, `KEYWORD`, `OPERATOR`). A token has two parts:
    *   **Token Name:** An abstract symbol representing a lexical unit (e.g., `ID`, `NUMBER`).
    *   **Attribute Value (Optional):**  Information about the token (e.g., the actual identifier name for an `ID` token, the numerical value for a `NUMBER` token).

*   **Lexeme:** A sequence of characters in the source program that matches the pattern for a token (e.g., `x`, `myVar`, `42`, `12.5`).

*   **Pattern:** A description of the form that the lexemes of a token may take.  Patterns are often expressed using regular expressions.

*   **Example:**

    | Lexeme   | Token       | Attribute Value        |
    | -------- | ----------- | ----------------------- |
    | `pi`     | `ID`        | Pointer to symbol table entry for `pi` |
    | `3.14159`| `NUMBER`    | 3.14159               |
    | `>`      | `RELOP`     | `GT`                    |
    | `if`     | `KEYWORD`   | `IF`                    |
    | `(`      | `LPAREN`    |                         |
    | `)`      | `RPAREN`    |                         |

## 3. Regular Expressions and Finite Automata

*   **Regular Expressions (RE):**  A notation for describing patterns of strings.  Common operators include:
    *   `|` (alternation):  `a | b` matches `a` or `b`.
    *   `.` (concatenation): `ab` matches `a` followed by `b`.
    *   `*` (Kleene closure): `a*` matches zero or more occurrences of `a`.
    *   `+` (Positive closure): `a+` matches one or more occurrences of `a`.
    *   `?` (Optional): `a?` matches zero or one occurrence of `a`.
    *   `[ ]` (Character class): `[a-z]` matches any lowercase letter.

*   **Finite Automata (FA):** A mathematical model of computation used to recognize strings that match a particular regular expression.

*   **Non-deterministic Finite Automaton (NFA):** Allows multiple transitions from a state on the same input symbol and epsilon transitions (transitions without consuming input).

*   **Deterministic Finite Automaton (DFA):** Has exactly one transition from each state for each input symbol and no epsilon transitions.  DFAs are generally more efficient to implement.

*   **Conversion from Regular Expression to NFA (Thompson's Construction):** A standard algorithm to systematically construct an NFA from a regular expression.

*   **Conversion from NFA to DFA (Subset Construction):** An algorithm that constructs a DFA from an NFA by grouping NFA states into DFA states.

**Example:** Convert the regular expression `(a|b)*abb` to a DFA.

1.  **Construct NFA (using Thompson's construction - not shown here, but widely available online).**

2.  **Convert NFA to DFA (using subset construction).** This involves creating DFA states that are sets of NFA states.  Start with the epsilon closure of the NFA's start state as the DFA's start state.  Then, for each DFA state and each input symbol, compute the set of NFA states reachable from the DFA state's NFA states on that input symbol, and take the epsilon closure.  This forms the next DFA state.  Repeat until no new DFA states are created.  DFA accepting states are any DFA states that contain an NFA accepting state.

## 4. Implementing a Scanner using State Transition Diagrams

*   **State Transition Diagram:** A visual representation of a DFA. Nodes represent states, and directed edges labeled with input symbols represent transitions.

*   **Implementation:**

    1.  **Create a State Transition Diagram:** Design a state transition diagram for each token type you want to recognize.
    2.  **Implement the Diagram:** Translate the diagram into code.  This can be done using:
        *   **Nested `switch` statements:** Each state is represented by a `switch` statement, and the input character determines which `case` (transition) to take.
        *   **Transition Table:**  A two-dimensional array where rows represent states, columns represent input characters, and the cell values represent the next state.
        *   **Goto-based implementation (less common but can be faster).**

*   **Example (Simplified):**

    Let's say we want to recognize `ID` tokens, where an ID starts with a letter and can be followed by letters or digits.  The regular expression is `[a-zA-Z][a-zA-Z0-9]*`.

    *   **State Transition Diagram (Simplified):**

        ```
        Start State (0) --[a-zA-Z]--> State 1 (Accepting)
        State 1 --[a-zA-Z0-9]--> State 1 (Accepting)
        ```

    *   **Implementation (Conceptual, using nested `switch`):**

    ```c++
    int state = 0;
    string lexeme = "";
    char currentChar = getNextChar(); // Function to read the next character

    while (true) {
        switch (state) {
            case 0:
                if (isalpha(currentChar)) {
                    lexeme += currentChar;
                    state = 1;
                    currentChar = getNextChar();
                } else {
                    // Error: Invalid start of an identifier
                    return ERROR_TOKEN;
                }
                break;
            case 1:
                if (isalnum(currentChar)) {
                    lexeme += currentChar;
                    //keep scanning ID's
                    currentChar = getNextChar();
                } else {
                    //Identifier is complete
                    ungetChar(currentChar); // Push the current char back into the input stream.
                    return createToken(ID, lexeme);
                }
                break;
        }
    }
    ```

## 5. Handling Comments and Errors

*   **Comments:** Scanners typically discard comments.  This can be done by recognizing comment patterns and skipping over them.  For example, for C-style comments (`/* ... */`), the scanner would enter a "comment" state upon encountering `/*` and remain in that state, consuming characters, until `*/` is found.

*   **Errors:** Scanners should detect and report lexical errors, such as:
    *   Invalid characters in the input.
    *   Unterminated strings or comments.
    *   Numbers with incorrect formats.

*   **Error Reporting:**  Error messages should be informative and include the line number and position of the error.
*   **Error Recovery:**  The scanner should attempt to recover from errors and continue scanning.  Simple recovery strategies include:
    *   Skipping characters until a valid token start is found.
    *   Inserting missing characters.
    *   Deleting extraneous characters.

## 6. Scanner Implementation Approaches

*   **Handwritten Scanners:**  Scanners written manually using programming languages (e.g., C, C++, Java).  Offers greater flexibility and control but requires more effort.  The example above illustrates a simplified handwritten approach.
    *   **Advantages:** Fine-grained control, potential for optimization.
    *   **Disadvantages:** Time-consuming to develop, error-prone.

*   **Table-Driven Scanners:** Scanners generated automatically from a specification (e.g., regular expressions).  Uses a transition table to determine state transitions.  Tools like Lex/Flex generate table-driven scanners.
    *   **Advantages:** Easier to maintain, less error-prone, faster development.
    *   **Disadvantages:**  Can be less flexible, might have some overhead due to table lookups.

*   **Scanner Generators (e.g., Lex/Flex):** Tools that take a description of tokens (regular expressions) as input and generate a scanner program as output.

    **Example (Lex/Flex):**

    ```lex
    %{
    /* Definitions */
    %}

    DIGIT   [0-9]
    LETTER  [a-zA-Z]
    ID      {LETTER}({LETTER}|{DIGIT})*
    NUMBER  {DIGIT}+

    %%
    {ID}     { printf("ID: %s\n", yytext); }
    {NUMBER} { printf("NUMBER: %s\n", yytext); }
    "+"      { printf("PLUS\n"); }
    "-"      { printf("MINUS\n"); }
    [ \t\n]   ; /* Ignore whitespace */
    .        { printf("ERROR: Illegal character\n"); }
    %%

    int main() {
        yylex(); // Start the scanner
        return 0;
    }
    ```

## Practice Questions and Exercises

1.  **Define the following terms:**
    *   Token
    *   Lexeme
    *   Pattern

    **Answer:**  See definitions in Section 2.

2.  **Write a regular expression for recognizing integers.**

    **Answer:** `[+-]?[0-9]+`

3.  **Convert the regular expression `a(b|c)*` to an NFA (using Thompson's construction).** (This exercise requires drawing an NFA diagram, which is hard to represent in text. Search online for examples of Thompson's construction to guide you).

4.  **What are the advantages and disadvantages of handwritten scanners vs. table-driven scanners?**

    **Answer:** See Section 6.

5.  **Consider the following code snippet:**

    ```c++
    int x = 10;  /* This is a comment */
    y = x + 5;
    ```

    **List the tokens that a scanner would produce from this code.**

    **Answer:**

    | Token    | Lexeme | Attribute Value (Example) |
    |----------|--------|--------------------------|
    | KEYWORD  | `int`  | INT                      |
    | ID       | `x`    | Pointer to `x` in symbol table |
    | ASSIGN   | `=`    |                          |
    | NUMBER   | `10`   | 10                        |
    | SEMICOLON| `;`    |                          |
    | ID       | `y`    | Pointer to `y` in symbol table |
    | ASSIGN   | `=`    |                          |
    | ID       | `x`    | Pointer to `x` in symbol table |
    | PLUS     | `+`    |                          |
    | NUMBER   | `5`    | 5                        |
    | SEMICOLON| `;`    |                          |

## Important Points to Remember

*   The scanner is the first phase of the compiler and has a significant impact on compilation speed.
*   Regular expressions are a powerful tool for describing token patterns.
*   Finite automata (DFAs and NFAs) are used to implement scanners.
*   Scanner generators like Lex/Flex can automate scanner creation.
*   Error handling is an important aspect of scanner design.  Robust error handling increases usability for the user.
