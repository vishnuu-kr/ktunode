---
title: "Scanners - Recognizing Words"
subject: "COMPILER DESIGN"
module: "Module 1: Introduction "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8ba46"
status: "completed"
scrapedAt: "2026-05-20T16:51:06.136Z"
---
# Compiler Design: Module 1 - Scanners: Recognizing Words

## Introduction

This module introduces the fundamental concept of a compiler and delves specifically into the role and workings of a scanner (also known as a lexical analyzer), focusing on how it recognizes words in the source code.

**Learning Outcomes:**

*   Understand the role of the scanner/lexical analyzer in a compiler.
*   Define and identify tokens, lexemes, and patterns.
*   Explain the process of lexical analysis, including buffering techniques.
*   Describe how regular expressions and finite automata are used in scanner implementation.
*   Design and implement a simple scanner for a small language.

## 1. The Role of the Scanner/Lexical Analyzer

*   **What is a Compiler?** A compiler is a program that translates source code written in a high-level programming language into equivalent code in a lower-level language (e.g., assembly language or machine code).

*   **The Compilation Process:** The compilation process typically involves several phases:
    1.  **Lexical Analysis (Scanning):**  The source code is read character by character, and grouped into sequences called *tokens*.
    2.  **Syntax Analysis (Parsing):** The tokens are grouped into syntactic structures such as expressions, statements, and functions. The output is typically an Abstract Syntax Tree (AST).
    3.  **Semantic Analysis:**  The compiler checks the program for semantic errors, such as type errors, undeclared variables, and incorrect function calls.
    4.  **Intermediate Code Generation:**  The compiler generates an intermediate representation (IR) of the program. This IR is easier to optimize and translate into target code.
    5.  **Code Optimization:** The compiler optimizes the IR to improve the performance of the generated code.
    6.  **Code Generation:** The compiler generates the target code from the optimized IR.

*   **Scanner (Lexical Analyzer):** The first phase of compilation.  It's the primary responsibility of the scanner to:
    *   Read the source code.
    *   Group characters into *lexemes*.
    *   Produce a stream of *tokens* representing the lexemes.
    *   Remove whitespace and comments.
    *   Handle compiler directives (e.g., `#include` in C/C++).
    *   Associate line numbers with error messages.

*   **Why Separate Lexical Analysis?**
    *   **Simplicity of Design:**  Separation simplifies the parser design by abstracting away low-level details of character handling.
    *   **Compiler Efficiency:**  Lexical analysis can be optimized independently.
    *   **Compiler Portability:**  Scanner is more machine specific so isolating it makes porting easier.
    *   **Specialization:** Different languages or specific use-cases might benefit from different scanner implementation.

## 2. Tokens, Lexemes, and Patterns

*   **Token:** A token is a pair consisting of a *token name* and an optional *attribute value*.  The token name is an abstract symbol representing a kind of lexical unit. Examples: `ID`, `NUM`, `PLUS`, `LPAREN`.  The parser consumes tokens.

*   **Lexeme:** A lexeme is the actual sequence of characters in the source code that matches the pattern for a token.  It's the "instance" of a token.  Examples: `myVariable`, `42`, `+`, `(`.

*   **Pattern:** A pattern is a description of the form that the lexemes of a token may take. It can be a regular expression, a set of keywords, or a predefined rule.  Examples:
    *   `ID`: Letter followed by letters or digits (e.g., `[a-zA-Z][a-zA-Z0-9]*`)
    *   `NUM`: One or more digits (e.g., `[0-9]+`)
    *   `PLUS`: The `+` character.

**Example:**

Consider the following code snippet:

```c
count = count + 10;
```

The scanner would produce the following sequence of tokens:

| Token Name | Attribute Value | Lexeme     |
|------------|-----------------|------------|
| `ID`       |  Pointer to symbol table entry for "count" | `count`    |
| `ASSIGN`   |                 | `=`        |
| `ID`       | Pointer to symbol table entry for "count" | `count`    |
| `PLUS`     |                 | `+`        |
| `NUM`      | `10`            | `10`       |
| `SEMICOLON`|                 | `;`        |

**Important Note:** The attribute value provides additional information about the token. For example, for an `ID` token, the attribute value might be a pointer to the symbol table entry where the variable's information (type, value, scope) is stored. For a `NUM` token, it would be the numerical value represented by the lexeme.

## 3. The Process of Lexical Analysis and Buffering Techniques

*   **Lexical Analysis Process:**
    1.  The scanner reads the source code character by character.
    2.  It tries to match the longest possible sequence of characters with a defined pattern. This is called the "longest match" rule.
    3.  When a match is found, the scanner creates a token for the lexeme and passes it to the parser.
    4.  The scanner removes any whitespace or comments.
    5.  The process repeats until the end of the source code is reached.

*   **Buffering Techniques:**  Reading the source code one character at a time can be inefficient. Buffering techniques are used to improve the performance of the scanner.

    *   **Single Buffer Scheme:**  The entire source program is read into a buffer. The scanner then operates on this buffer. Simple, but limited by the size of the buffer.

    *   **Two-Buffer Scheme:** Uses two buffers of equal size. When the scanner reaches the end of one buffer, the next buffer is loaded while the scanner continues processing from the beginning of the first buffer. This overlapping of input and processing enhances performance.

        *   Two pointers:
            *   `lexemeBegin`:  Marks the beginning of the current lexeme.
            *   `forward`:  Scans forward until a pattern match is found.

        *   Special Character: `EOF` (End-of-File) is placed at the end of each buffer.  The `forward` pointer checks for `EOF`.

        *   If `forward` finds an `EOF`, the buffer is reloaded (unless it is the actual end of the entire input file).  If it *is* the end of the input file, the scanner signals that the program is complete.

        *   **Disadvantage:** If the lexeme spans both buffers, more overhead is involved.

    *   **Sentinel Technique:**  A special character (like `EOF`) is used as a sentinel to speed up the process of moving the `forward` pointer.  Instead of repeatedly checking if `forward` has reached the end of the buffer, it only needs to check for the sentinel.

## 4. Regular Expressions and Finite Automata in Scanner Implementation

*   **Regular Expressions (RE):** Regular expressions are a powerful notation for describing patterns.  They are commonly used to define the patterns for tokens in a scanner.

    *   **Basic Regular Expressions:**
        *   `a`: Matches the character 'a'.
        *   `ε` (epsilon): Matches the empty string.
        *   `r|s`: Matches either the pattern `r` or the pattern `s` (alternation).
        *   `rs`: Matches the pattern `r` followed by the pattern `s` (concatenation).
        *   `r*`: Matches zero or more occurrences of the pattern `r` (Kleene closure).

    *   **Extended Regular Expressions (Shorthands):**
        *   `r+`: Matches one or more occurrences of the pattern `r` (equivalent to `rr*`).
        *   `r?`: Matches zero or one occurrence of the pattern `r` (equivalent to `r|ε`).
        *   `[abc]`: Matches any single character that is 'a', 'b', or 'c' (character class).
        *   `[a-z]`: Matches any single character in the range 'a' to 'z'.

    *   **Example Regular Expressions for Tokens:**
        *   `ID`: `[a-zA-Z][a-zA-Z0-9]*`
        *   `NUM`: `[0-9]+`
        *   `REAL`: `[0-9]+\.[0-9]+`
        *   `WHITESPACE`: `[ \t\n]+`

*   **Finite Automata (FA):** A finite automaton is a mathematical model of a machine that can be in one of a finite number of states.  It transitions between states based on input symbols. Finite automata are used to recognize patterns defined by regular expressions.

    *   **Deterministic Finite Automaton (DFA):** A DFA has the following properties:
        *   For each state and input symbol, there is exactly one transition.
        *   There is a unique start state.

    *   **Non-deterministic Finite Automaton (NFA):** An NFA has the following properties:
        *   For a given state and input symbol, there can be multiple transitions (or none).
        *   It can have transitions on the empty string (ε-transitions).

    *   **Relationship between Regular Expressions, NFAs, and DFAs:**
        *   Every regular expression can be converted to an NFA.
        *   Every NFA can be converted to a DFA.
        *   DFAs are generally used for implementing scanners because they provide deterministic behavior and faster execution.

    *   **Scanner Implementation using DFAs:**
        1.  Define regular expressions for all tokens in the language.
        2.  Convert each regular expression to an NFA.
        3.  Combine the NFAs into a single NFA using ε-transitions from a new start state.
        4.  Convert the combined NFA to a DFA.
        5.  Minimize the DFA to reduce the number of states and improve performance.
        6.  Implement the DFA in code. The code will simulate the DFA, reading input characters and transitioning between states. When a final (accepting) state is reached, a token is created based on the corresponding regular expression.

## 5. Designing and Implementing a Simple Scanner

This section outlines the steps involved in creating a scanner for a small language:

1.  **Define the Language:** Specify the tokens and their patterns.  For example, consider a simple calculator language with tokens for integers, operators (+, -, \*, /), parentheses, and whitespace.

2.  **Write Regular Expressions:** Define regular expressions for each token.
    *   `NUM`: `[0-9]+`
    *   `PLUS`: `\+`
    *   `MINUS`: `-`
    *   `MULTIPLY`: `\*`
    *   `DIVIDE`: `/`
    *   `LPAREN`: `\(`
    *   `RPAREN`: `\)`
    *   `WHITESPACE`: `[ \t\n]+`

3.  **Convert REs to DFAs (or use a Lexical Analyzer Generator):** You can manually convert the regular expressions to DFAs, or use a tool like `lex` or `flex` which automatically generates a scanner from a specification of regular expressions and corresponding actions.

4.  **Implement the Scanner (Manual Implementation):**  This involves writing code that simulates the DFA.  The code reads the input character by character and uses a state variable to track the current state of the DFA.  Based on the current state and the input character, the code transitions to the next state. When an accepting state is reached, the corresponding token is returned.

**Example (Conceptual Pseudocode):**

```pseudocode
function getNextToken():
  state = startState
  lexeme = ""
  while not endOfInput:
    char = readNextChar()
    nextState = transition(state, char)  // Look up next state in DFA table

    if nextState is ERROR:
      if state is acceptingState:
        return createToken(state, lexeme) // Create token based on the accepting state
      else:
        reportError("Invalid character sequence")
        return ERROR_TOKEN

    lexeme = lexeme + char
    state = nextState

  if state is acceptingState:
    return createToken(state, lexeme)
  else:
    return END_OF_FILE_TOKEN
```

5. **Using Lexical Analyzer Generators (Lex, Flex):**

   * **Advantages:**
      * Significantly reduces development time.
      * Easier to maintain and modify the scanner.
      * Usually provides optimized scanner implementations.

   * **How they work:**
      * You provide a specification file (e.g., a `.lex` or `.l` file) that contains regular expressions and associated actions (code to execute when a pattern is matched).
      * The generator processes this file and generates a C/C++ source file that contains the scanner code.
      * You compile the generated code to create the scanner.

   * **Example (Flex - simplified):**

     ```flex
     %{
       /* Definitions and include statements */
       #include <stdio.h>
       #include "tokens.h" // Defines token constants like PLUS, MINUS, NUM
     %}

     DIGIT    [0-9]
     WHITESPACE [ \t\n]+

     %%
     {DIGIT}+  { yylval = atoi(yytext); return NUM; } // atoi converts string to integer
     "+"       { return PLUS; }
     "-"       { return MINUS; }
     {WHITESPACE} { /* Ignore whitespace */ }
     .         { printf("Error: Invalid character '%s'\n", yytext); }
     %%

     int main() {
         int token;
         while ((token = yylex())) {
             printf("Token: %d, Lexeme: %s\n", token, yytext); // yytext contains the lexeme
         }
         return 0;
     }
     ```

## 6. Important Points to Remember

*   The scanner is the first phase of compilation and performs the crucial task of converting source code into a stream of tokens.
*   Understanding the difference between tokens, lexemes, and patterns is essential.
*   Buffering techniques improve the efficiency of the scanner.
*   Regular expressions are a powerful tool for specifying token patterns.
*   Finite automata (especially DFAs) provide an efficient mechanism for recognizing tokens based on their regular expressions.
*   Lexical analyzer generators like `lex` and `flex` greatly simplify scanner development.

## Practice Questions/Exercises

1.  **Define the following terms:** Token, Lexeme, Pattern. Provide an example of each.

    *   **Answer:** (See definitions above.) For example, for the keyword `if`:
        *   Token: `IF`
        *   Lexeme: `if`
        *   Pattern: The literal string "if".

2.  Explain the purpose of buffering in a lexical analyzer and describe the two-buffer scheme.

    *   **Answer:** (See section on Buffering Techniques above.)

3.  Write regular expressions for the following tokens:
    *   A floating-point number (with an optional sign).
    *   A string literal (enclosed in double quotes).

    *   **Answer:**
        *   Floating-point number: `[+-]?[0-9]*\.[0-9]+`
        *   String literal: `"[^"]*"` (This allows any character except double quotes inside the string.)  More robust version requires escaping double quotes inside the string.

4.  What are the advantages of using a lexical analyzer generator (like `lex` or `flex`) compared to manually implementing a scanner?

    *   **Answer:** (See advantages listed above in section 5). Faster development, easier maintenance, optimized performance.

5.  Consider the following code snippet:

    ```java
    int x = 10 + y; // This is a comment
    ```

    Provide the sequence of tokens that the scanner would produce (including token name, attribute value, and lexeme). Assume a simple language with `ID`, `NUM`, `ASSIGN`, `PLUS`, `SEMICOLON` and ignores comments and whitespace. Assume `y` is in the symbol table.

    *   **Answer:**

        | Token Name | Attribute Value                  | Lexeme    |
        |------------|----------------------------------|-----------|
        | `INT`      |                                  | `int`     |
        | `ID`       | Pointer to symbol table entry for "x" | `x`       |
        | `ASSIGN`   |                                  | `=`       |
        | `NUM`      | `10`                             | `10`      |
        | `PLUS`     |                                  | `+`       |
        | `ID`       | Pointer to symbol table entry for "y" | `y`       |
        | `SEMICOLON`|                                  | `;`       |
