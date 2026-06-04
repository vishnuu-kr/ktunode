---
title: "Hands-on:  Recognizing Words with Lex"
subject: "COMPILER DESIGN"
module: "Module 1: Introduction "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8ba4a"
status: "completed"
scrapedAt: "2026-05-20T16:51:08.965Z"
---
# COMPILER DESIGN - MODULE 1: INTRODUCTION - HANDS-ON: RECOGNIZING WORDS WITH LEX

## Learning Outcomes:

*   Understand the role of lexical analysis in a compiler.
*   Learn to use Lex (or Flex) to create a lexical analyzer.
*   Define regular expressions to recognize tokens (words) in a programming language.
*   Test and debug a Lex program.

## 1. Introduction to Lexical Analysis and Lex

*   **What is Lexical Analysis (Scanning)?**
    *   The first phase of a compiler.
    *   Transforms the raw source code (a stream of characters) into a stream of tokens.
    *   Tokens are the basic building blocks for subsequent compiler phases (parsing, semantic analysis, etc.).
    *   Example:  `x = y + 5;`  becomes  `ID(x) ASSIGN ID(y) PLUS INT(5) SEMICOLON`

*   **Why is Lexical Analysis Important?**
    *   **Efficiency:** Simplifies the parser by handling low-level details like whitespace and comments.
    *   **Modularity:** Separates lexical analysis from parsing, making the compiler easier to maintain and modify.
    *   **Portability:** Character set issues are localized to the lexical analyzer.

*   **What is a Token?**
    *   A logically cohesive sequence of characters with a meaning.
    *   Examples:
        *   Identifiers (variable names, function names)
        *   Keywords (`if`, `else`, `while`, `int`, `return`)
        *   Operators (`+`, `-`, `*`, `/`, `=`)
        *   Integer literals (123, 456)
        *   Floating-point literals (3.14, 2.71)
        *   Strings ("hello", "world")
        *   Punctuation (`;`, `,`, `(`, `)`)

*   **What is a Lexeme?**
    *   The actual sequence of characters that matches a token's pattern.
    *   Example:  If the token is `INT`, the lexeme could be "123", "42", or "0".

*   **What is Lex (or Flex)?**
    *   A tool (a lexical analyzer generator) that automatically creates a lexical analyzer from a specification.
    *   Takes a set of regular expressions as input and generates C/C++ code for a scanner.
    *   Flex is a faster and more feature-rich version of Lex.

## 2. Structure of a Lex Specification File

A Lex specification file typically has three sections, separated by `%%`:

```
definitions
%%
rules
%%
user code
```

*   **Definitions Section:**
    *   Defines regular expression macros for convenience and readability.
    *   Example:

        ```
        DIGIT    [0-9]
        LETTER   [a-zA-Z]
        ID       {LETTER}({LETTER}|{DIGIT})*
        ```

*   **Rules Section:**
    *   Contains a list of regular expressions and corresponding actions to be performed when a lexeme matches the regular expression.
    *   The actions are typically C/C++ code enclosed in braces `{}`.
    *   The `yytext` variable contains the matched lexeme.
    *   The `yyleng` variable contains the length of the matched lexeme.
    *   Example:

        ```
        {DIGIT}+     { printf("Integer: %s\n", yytext); }
        {ID}         { printf("Identifier: %s\n", yytext); }
        "+"          { printf("Plus operator\n"); }
        [ \t\n]      ;  /* Ignore whitespace */
        .            { printf("Illegal character: %s\n", yytext); }
        ```

*   **User Code Section:**
    *   Contains C/C++ code that is included directly into the generated lexical analyzer.
    *   Often contains the `main()` function to drive the lexical analyzer.
    *   Example:

        ```c
        int main() {
            yylex();  // Start the lexical analyzer
            return 0;
        }
        ```

## 3. Regular Expressions in Lex

*   **Basic Regular Expression Operators:**
    *   `.` (dot): Matches any single character except newline.
    *   `[]`: Character class. Matches any single character within the brackets. `[abc]` matches 'a', 'b', or 'c'. `[a-z]` matches any lowercase letter. `[^abc]` matches any character *except* 'a', 'b', or 'c'.
    *   `*`: Kleene star. Matches zero or more occurrences of the preceding expression.
    *   `+`: Matches one or more occurrences of the preceding expression.
    *   `?`: Matches zero or one occurrence of the preceding expression.
    *   `|`: Alternation. Matches either the expression to its left or the expression to its right.
    *   `()`: Grouping. Used to group expressions for precedence or application of operators.
    *   `^`: Matches the beginning of a line (when used at the beginning of an expression).
    *   `$`: Matches the end of a line (when used at the end of an expression).
    *   `\`: Escape character. Used to escape special characters like `.`, `*`, `+`, `?`, `[`, `]`, `(`, `)`, `|`, `\`, `^`, `$`.

*   **Examples:**
    *   `a*` : Matches "", "a", "aa", "aaa", ...
    *   `a+` : Matches "a", "aa", "aaa", ...
    *   `a?` : Matches "" or "a"
    *   `[0-9]+` : Matches one or more digits (an integer)
    *   `[a-zA-Z_][a-zA-Z0-9_]*` : Matches an identifier (starts with a letter or underscore, followed by letters, digits, or underscores)
    *   `"hello"` : Matches the literal string "hello"
    *   `\.` : Matches a literal dot "."
    *   `[ \t]+` : Matches one or more spaces or tabs.

## 4. Creating and Running a Lex Program (Flex)

1.  **Write the Lex specification file (`.l` file).**  For example, `my_lexer.l`:

    ```lex
    %{
    #include <stdio.h>
    %}

    DIGIT   [0-9]
    LETTER  [a-zA-Z]
    ID      {LETTER}({LETTER}|{DIGIT})*

    %%
    {DIGIT}+     { printf("Integer: %s\n", yytext); }
    {ID}         { printf("Identifier: %s\n", yytext); }
    "+"          { printf("Plus operator\n"); }
    [ \t\n]      ; /* Ignore whitespace */
    .            { printf("Illegal character: %s\n", yytext); }
    %%

    int main() {
        yylex();
        return 0;
    }
    ```

2.  **Generate the C/C++ code from the Lex specification using Flex.**

    ```bash
    flex my_lexer.l
    ```

    This creates a file called `lex.yy.c` (or `lex.yy.cc` if you use `flex -+` for C++ output).

3.  **Compile the generated C/C++ code using a C/C++ compiler (e.g., GCC).**  You need to link with the lex library.

    ```bash
    gcc lex.yy.c -o my_lexer -lfl
    ```
    (On some systems, `-ll` might be required instead of `-lfl`.)

4.  **Run the compiled executable.**

    ```bash
    ./my_lexer
    ```

5.  **Input text to the program.** The program will then analyze the input and print the tokens it recognizes.

## 5. Testing and Debugging a Lex Program

*   **Simple Input:** Start with very simple input to test basic token recognition.
*   **Edge Cases:** Test cases with boundary conditions (e.g., very long identifiers, numbers near the maximum integer value).
*   **Invalid Input:**  Test cases with invalid characters, malformed identifiers, etc., to ensure the `.` rule (or similar error handling) works correctly.
*   **Debugging Techniques:**
    *   **Print statements:** Add `printf` statements in the actions of the rules to print the matched lexeme and the corresponding token type.
    *   **`yydebug`:** Flex provides a debugging option using `yydebug = 1;` in the user code section.  This generates verbose output from the scanner.  You may need to compile with debugging symbols (e.g., `gcc -g ...`).
    *   **Using a debugger (GDB):**  You can use a debugger to step through the generated C/C++ code and inspect variables like `yytext` and `yyleng`.
*   **Common Errors:**
    *   **Overlapping regular expressions:** If multiple regular expressions can match the same lexeme, Lex chooses the rule that appears *earlier* in the specification file.  Order your rules carefully.
    *   **Missing rules:** If no rule matches a particular input, the default action is to echo the unmatched character to standard output.  Ensure you have a rule to handle all possible input characters (often using the `.` rule).
    *   **Incorrect regular expressions:**  Double-check your regular expressions for errors.  Use online regex testers to verify their correctness.
    *   **Missing `#include` directives:** If your actions use functions that require header files (like `stdio.h`), make sure to include them in the definitions section.

## 6. Example: A Simple Lex Program for Recognizing Keywords, Identifiers, and Integers

```lex
%{
#include <stdio.h>
#include <stdlib.h>
%}

DIGIT       [0-9]
LETTER      [a-zA-Z]
ID          {LETTER}({LETTER}|{DIGIT})*

%%
"if"        { printf("Keyword: IF\n"); }
"else"      { printf("Keyword: ELSE\n"); }
"while"     { printf("Keyword: WHILE\n"); }
"int"       { printf("Keyword: INT\n"); }
{ID}        { printf("Identifier: %s\n", yytext); }
{DIGIT}+    { printf("Integer: %s\n", yytext); }
"+"         { printf("Operator: PLUS\n"); }
"-"         { printf("Operator: MINUS\n"); }
"*"         { printf("Operator: MULT\n"); }
"/"         { printf("Operator: DIV\n"); }
";"         { printf("Punctuation: SEMICOLON\n"); }
"("         { printf("Punctuation: LPAREN\n"); }
")"         { printf("Punctuation: RPAREN\n"); }
[ \t\n]     ; /* Ignore whitespace */
.           { printf("Unrecognized character: %s\n", yytext); }
%%

int main() {
    yylex();
    return 0;
}
```

**Explanation:**

*   The definitions section defines macros for `DIGIT`, `LETTER`, and `ID`.
*   The rules section defines patterns for keywords, identifiers, integers, operators, punctuation, and whitespace.
*   The `.` rule handles any unrecognized characters.
*   The `main()` function calls `yylex()` to start the lexical analyzer.

## 7. Practice Questions/Exercises

1.  **Write a Lex program to count the number of lines, words, and characters in an input file.**  (Similar to the `wc` command in Unix/Linux).

    **Answer:**

    ```lex
    %{
    #include <stdio.h>

    int lines = 0;
    int words = 0;
    int chars = 0;
    %}

    WORD [^ \t\n]+
    %%
    \n      { lines++; chars++; }
    {WORD}  { words++; chars += yyleng; }
    .       { chars++; }  /* Count other characters including spaces and tabs */
    %%

    int main() {
        yylex();
        printf("Lines: %d\n", lines);
        printf("Words: %d\n", words);
        printf("Characters: %d\n", chars);
        return 0;
    }
    ```

2.  **Write a Lex program to recognize email addresses.**  A simple email address format is `username@domain.com`.  Assume `username` and `domain` consist of alphanumeric characters and periods.

    **Answer:**

    ```lex
    %{
    #include <stdio.h>
    %}

    ALPHANUM   [a-zA-Z0-9]
    %%
    {ALPHANUM}+"."{ALPHANUM}+"@"({ALPHANUM}+"."{ALPHANUM}+)+"."(com|net|org) { printf("Email Address: %s\n", yytext); }
    .          ; /* Ignore other characters */
    %%

    int main() {
        yylex();
        return 0;
    }
    ```
    **(Note:** This is a simplified example. Real-world email validation is much more complex.)

3.  **Modify the simple keyword/identifier/integer Lex program to also recognize floating-point numbers.**  Floating-point numbers can have the form `123.456` or `1.23e+4`.

    **Answer:**

    ```lex
    %{
    #include <stdio.h>
    #include <stdlib.h>
    %}

    DIGIT       [0-9]
    LETTER      [a-zA-Z]
    ID          {LETTER}({LETTER}|{DIGIT})*
    NUMBER      {DIGIT}+(\.{DIGIT}+)?([Ee][+-]?{DIGIT}+)?

    %%
    "if"        { printf("Keyword: IF\n"); }
    "else"      { printf("Keyword: ELSE\n"); }
    "while"     { printf("Keyword: WHILE\n"); }
    "int"       { printf("Keyword: INT\n"); }
    {ID}        { printf("Identifier: %s\n", yytext); }
    {NUMBER}    { printf("Number: %s\n", yytext); }
    "+"         { printf("Operator: PLUS\n"); }
    "-"         { printf("Operator: MINUS\n"); }
    "*"         { printf("Operator: MULT\n"); }
    "/"         { printf("Operator: DIV\n"); }
    ";"         { printf("Punctuation: SEMICOLON\n"); }
    "("         { printf("Punctuation: LPAREN\n"); }
    ")"         { printf("Punctuation: RPAREN\n"); }
    [ \t\n]     ; /* Ignore whitespace */
    .           { printf("Unrecognized character: %s\n", yytext); }
    %%

    int main() {
        yylex();
        return 0;
    }
    ```

## 8. Important Points to Remember

*   Lex is a *generator*; it creates a C/C++ program.  You then compile *that* program.
*   Lex uses regular expressions to define patterns for tokens.
*   The order of rules in the rules section is significant.  Lex chooses the *earliest* matching rule.
*   Use `yytext` to access the matched lexeme.
*   Whitespace is often ignored but can be significant in some languages (e.g., Python).
*   Error handling is crucial. Always provide a default rule (e.g., using `.`) to handle unexpected input.
*   Lex is a powerful tool for creating lexical analyzers, but it's just the first step in the compiler design process.
*   Familiarize yourself with Flex, as it's generally preferred over the original Lex due to its features and performance.
