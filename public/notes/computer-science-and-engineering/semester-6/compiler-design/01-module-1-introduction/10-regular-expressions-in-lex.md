---
title: "Regular Expressions in Lex"
subject: "COMPILER DESIGN"
module: "Module 1: Introduction "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8ba4b"
status: "completed"
scrapedAt: "2026-05-20T16:51:09.675Z"
---
# Compiler Design: Module 1 - Introduction: Regular Expressions in Lex

## Learning Outcomes:

*   Understand the role of lexical analysis in compilation.
*   Define regular expressions and their fundamental operations.
*   Learn the syntax of regular expressions supported by Lex.
*   Apply regular expressions to define tokens for a programming language.
*   Use Lex to generate a lexical analyzer from regular expressions.

## 1. Introduction to Lexical Analysis and its Role

*   **What is Lexical Analysis?** Lexical analysis, also known as scanning, is the first phase of a compiler. It reads the source code as a stream of characters and groups them into meaningful units called *tokens*.

*   **Tokens:** A token is a representation of a logically cohesive sequence of characters, such as keywords, identifiers, operators, literals (numbers, strings), and delimiters.

*   **Role of Lexical Analyzer:**
    *   Reads the source program character by character.
    *   Groups characters into lexemes (sequences of characters that match a token).
    *   For each lexeme, produces a token of the form `<token-name, attribute-value>`.  `token-name` is an abstract symbol used by the parser. `attribute-value` points to the entry in the symbol table containing information about the lexeme.
    *   Enters lexemes into the symbol table (if needed).
    *   Removes whitespace and comments.
    *   Detects lexical errors (e.g., an invalid character sequence).

*   **Example:** Consider the following code snippet:

    ```c
    int count = 0; /* initialize count */
    ```

    The lexical analyzer would produce the following sequence of tokens:

    ```
    <INT, "int">
    <ID, "count">
    <ASSIGN, "=">
    <NUM, "0">
    <SEMICOLON, ";">
    ```

## 2. Regular Expressions: Key Concepts and Definitions

*   **Definition:** A regular expression (RE) is a pattern describing a set of strings.  It's a formal language used to define the *lexical structure* of tokens.

*   **Fundamental Operations:**  Regular expressions are built using three basic operations:

    *   **Concatenation:** `r1r2`  Represents the set of strings formed by concatenating a string from the set denoted by `r1` with a string from the set denoted by `r2`.
        *   *Example:* If `r1 = a` and `r2 = b`, then `r1r2 = ab`
    *   **Union (Alternation):** `r1 | r2`  Represents the set of strings that are either in the set denoted by `r1` or in the set denoted by `r2`.
        *   *Example:* If `r1 = a` and `r2 = b`, then `r1 | r2 = {a, b}`
    *   **Kleene Closure:** `r*`  Represents the set of strings formed by concatenating zero or more strings from the set denoted by `r`.  It includes the empty string, ε.
        *   *Example:* If `r = a`, then `r* = {ε, a, aa, aaa, ...}`
    *   **Positive Closure:** `r+` Represents the set of strings formed by concatenating one or more strings from the set denoted by `r`. It *excludes* the empty string, ε.
        *   *Example:* If `r = a`, then `r+ = {a, aa, aaa, ...}`

*   **Precedence:** In the absence of parentheses, Kleene closure has the highest precedence, followed by concatenation, and then union.

## 3. Regular Expression Syntax in Lex

Lex uses a specific syntax for regular expressions. Here's a summary of common metacharacters and their meanings:

*   `.` (Dot): Matches any single character except newline (`\n`).
*   `[ ]` (Character Class): Matches any single character within the brackets.
    *   `[abc]` matches 'a', 'b', or 'c'.
    *   `[a-z]` matches any lowercase letter.
    *   `[0-9]` matches any digit.
    *   `[^abc]` matches any character *except* 'a', 'b', or 'c'.
*   `^` (Caret):
    *   Inside `[ ]`: Negation (as shown above).
    *   Outside `[ ]`: Anchors the regex to the beginning of a line.
*   `$` (Dollar Sign): Anchors the regex to the end of a line.
*   `*` (Asterisk): Zero or more occurrences of the preceding expression.
*   `+` (Plus): One or more occurrences of the preceding expression.
*   `?` (Question Mark): Zero or one occurrence of the preceding expression (optional).
*   `|` (Vertical Bar): Alternation (OR).
*   `()` (Parentheses): Grouping.  Used to change precedence and capture groups (more relevant in more advanced regular expression usages beyond the basic Lex introduction).
*   `{n}`: Exactly `n` occurrences of the preceding expression.
*   `{n,}`: `n` or more occurrences of the preceding expression.
*   `{n,m}`: Between `n` and `m` occurrences of the preceding expression.
*   `\` (Backslash): Escapes a metacharacter, treating it as a literal character.
    *   `\*` matches a literal asterisk.
    *   `\+` matches a literal plus sign.
    *   `\\` matches a literal backslash.
*   `"` (Double Quote): Encloses a literal string. `"abc"` matches the literal string "abc".
*   `/` (Slash): Trailing context operator (used to match expressions only if they are followed by a specified pattern, but the following pattern is *not* included in the matched lexeme).

## 4. Applying Regular Expressions to Define Tokens

Let's consider defining tokens for a simple language:

| Token Name    | Regular Expression (Lex Syntax)   | Description                                      |
|---------------|-------------------------------------|--------------------------------------------------|
| KEYWORD_INT   | `"int"`                            | The keyword "int"                                |
| KEYWORD_RETURN| `"return"`                         | The keyword "return"                             |
| ID            | `[a-zA-Z_][a-zA-Z0-9_]*`          | Identifiers: Starts with letter or underscore, followed by letters, digits, or underscores.  |
| NUM           | `[0-9]+`                           | Integer literals (one or more digits)               |
| ASSIGN        | `=`                                 | Assignment operator                                |
| PLUS          | `\+`                                | Addition operator                                  |
| MINUS         | `-`                                 | Subtraction operator                               |
| SEMICOLON     | `;`                                 | Semicolon                                          |
| WHITESPACE    | `[ \t\n]+`                         | One or more whitespace characters                  |
| COMMENT       | `\/\*.*\*\//`                     | C-style comments (might need more careful handling to avoid matching across multiple lines) |

**Explanation of some of the regexes:**

*   `[a-zA-Z_][a-zA-Z0-9_]*`:  This regular expression breaks down as follows:
    *   `[a-zA-Z_]`: Matches a single character that is either a lowercase letter (a-z), an uppercase letter (A-Z), or an underscore (_). This enforces the rule that identifiers must start with a letter or an underscore.
    *   `[a-zA-Z0-9_]*`: Matches zero or more characters that are either lowercase letters, uppercase letters, digits (0-9), or underscores.  This allows identifiers to contain letters, digits, and underscores after the first character.
*   `[0-9]+`: Matches one or more digits.  This defines an integer literal.
*   `\/\*.*\*\//`: This regular expression aims to match C-style comments. Let's break it down:
    *   `\/\*`: Matches the opening comment delimiter "/*".  The backslashes are needed to escape the asterisks, which are metacharacters.
    *   `.*`: Matches any character (except newline) zero or more times. This is intended to match the content of the comment.  **Important Note:**  This `.*` is *greedy*. It will match as much as possible. This can lead to problems if there are multiple comments in the same line because it will match everything from the first "/*" to the *last* "*/" on the line, including any intermediate code or comments.
    *   `\*\//`: Matches the closing comment delimiter "*/".  Again, the backslashes are needed to escape the asterisks.

## 5. Using Lex to Generate a Lexical Analyzer

Lex is a tool that automates the process of creating a lexical analyzer.

*   **Lex File Structure:** A Lex file (usually with a `.l` extension) is divided into three sections, separated by `%%`:

    1.  **Definitions Section:**  Contains declarations of variables, constants, and regular expression definitions (using named patterns).
    2.  **Rules Section:**  Contains regular expressions and associated actions (C code) to be performed when a lexeme matching the expression is found.  This is the core of the lexical analyzer.
    3.  **User Code Section:** Contains C code that is copied directly into the generated C file. This section typically includes the `main` function and any helper functions.

*   **Example Lex File (simple.l):**

    ```lex
    %{
    #include <stdio.h>
    %}

    DIGIT   [0-9]
    ID      [a-zA-Z][a-zA-Z0-9]*

    %%

    {DIGIT}+  { printf("NUMBER: %s\n", yytext); }
    {ID}      { printf("IDENTIFIER: %s\n", yytext); }
    "+"       { printf("PLUS\n"); }
    "-"       { printf("MINUS\n"); }
    [ \t\n]+   ; /* Ignore whitespace */
    .         { printf("ILLEGAL CHARACTER: %s\n", yytext); }

    %%

    int main() {
        yylex();
        return 0;
    }
    ```

*   **Explanation of the Lex File:**

    *   **Definitions Section:**
        *   `DIGIT   [0-9]` defines a named regular expression `DIGIT` for a single digit.
        *   `ID      [a-zA-Z][a-zA-Z0-9]*` defines a named regular expression `ID` for identifiers.
    *   **Rules Section:**  Each line in this section specifies a regular expression followed by an action (C code enclosed in curly braces).  When the Lex analyzer finds a lexeme that matches the regular expression, it executes the corresponding action.
        *   `{DIGIT}+  { printf("NUMBER: %s\n", yytext); }`: If the lexeme matches one or more digits (using the defined `DIGIT` regular expression), print "NUMBER: " followed by the matched lexeme (`yytext`).
        *   `{ID}      { printf("IDENTIFIER: %s\n", yytext); }`: If the lexeme matches an identifier (using the defined `ID` regular expression), print "IDENTIFIER: " followed by the matched lexeme.
        *   `"+"       { printf("PLUS\n"); }`: If the lexeme is a plus sign, print "PLUS".
        *   `"-"       { printf("MINUS\n"); }`: If the lexeme is a minus sign, print "MINUS".
        *   `[ \t\n]+   ; /* Ignore whitespace */`: If the lexeme matches one or more whitespace characters (space, tab, newline), do nothing (the semicolon is the null statement in C).  This effectively ignores whitespace.
        *   `.         { printf("ILLEGAL CHARACTER: %s\n", yytext); }`:  The dot (`.`) matches *any* single character (except newline) that hasn't been matched by a previous rule. This serves as a catch-all for illegal characters, printing "ILLEGAL CHARACTER: " followed by the unrecognized character.
    *   **User Code Section:**
        *   `int main() { yylex(); return 0; }`:  This is the main function.  It calls `yylex()`, which is the lexical analyzer function generated by Lex.  `yylex()` reads input from `stdin` and applies the rules defined in the Lex file.

*   **Generating the Lexical Analyzer:**

    1.  **Save the Lex file** (e.g., `simple.l`).
    2.  **Run Lex:**  `lex simple.l`  (This creates a C source file named `lex.yy.c`).
    3.  **Compile the C file:** `gcc lex.yy.c -o scanner -ll` (The `-ll` flag links the lex library).
    4.  **Run the scanner:**  `./scanner`

*   **Input/Output Example:**

    *   **Input (stdin):** `int x = 10 + y;`
    *   **Output (stdout):**

        ```
        IDENTIFIER: int
        IDENTIFIER: x
        ILLEGAL CHARACTER: =
        NUMBER: 10
        PLUS
        IDENTIFIER: y
        ILLEGAL CHARACTER: ;
        ```

    **Important Notes about the order of rules:** Lex attempts to match the *longest* possible lexeme. If multiple rules match the same lexeme, Lex uses the *first* rule defined in the Lex file.  This is crucial for resolving ambiguities. For example, if you had a rule for `"int"` and a rule for identifiers, and the input was `"int"`, the `"int"` rule should be placed *before* the identifier rule so that `"int"` is recognized as the keyword and not as an identifier.

## 6. Practice Questions/Exercises

1.  **Write a regular expression to match email addresses.** (Simplified version - don't worry about *perfect* RFC compliance.)
2.  **Write a Lex file to count the number of lines, words, and characters in an input file.** (Similar to the `wc` utility).
3.  **Extend the `simple.l` Lex file to recognize more keywords, operators, and handle comments properly (avoiding the greedy match problem).**  Add keywords like "if", "else", "while".  Add operators like "*", "/", "==".
4.  **Describe what problems might arise if you placed the rule for `[a-zA-Z][a-zA-Z0-9]*` (identifiers) *before* the rule for `int` in a Lex specification.**

### Answers to Practice Questions:

1.  **Email Address Regex:**  `[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}`

    *   `[a-zA-Z0-9._%+-]+`: Matches one or more alphanumeric characters, dots, underscores, percent signs, plus signs, or hyphens (before the @).
    *   `@`: Matches the "@" symbol.
    *   `[a-zA-Z0-9.-]+`: Matches one or more alphanumeric characters, dots, or hyphens (domain name).
    *   `\.`: Matches a literal dot (escaped).
    *   `[a-zA-Z]{2,}`: Matches two or more letters (top-level domain).

2.  **`wc` Utility Lex File (wc.l):**

    ```lex
    %{
    #include <stdio.h>

    int line_count = 0;
    int word_count = 0;
    int char_count = 0;
    %}

    WORD [^ \t\n]+

    %%

    \n      { line_count++; char_count++; }
    {WORD}   { word_count++; char_count += yyleng; }
    .       { char_count++; }

    %%

    int main() {
        yylex();
        printf("Lines: %d\n", line_count);
        printf("Words: %d\n", word_count);
        printf("Characters: %d\n", char_count);
        return 0;
    }
    ```

3.  **Extended `simple.l`:**

    ```lex
    %{
    #include <stdio.h>
    %}

    DIGIT   [0-9]
    ID      [a-zA-Z_][a-zA-Z0-9_]*

    %%

    "int"       { printf("KEYWORD: INT\n"); }
    "if"        { printf("KEYWORD: IF\n"); }
    "else"      { printf("KEYWORD: ELSE\n"); }
    "while"     { printf("KEYWORD: WHILE\n"); }
    {DIGIT}+  { printf("NUMBER: %s\n", yytext); }
    {ID}      { printf("IDENTIFIER: %s\n", yytext); }
    "+"       { printf("OPERATOR: PLUS\n"); }
    "-"       { printf("OPERATOR: MINUS\n"); }
    "*"       { printf("OPERATOR: MULTIPLY\n"); }
    "/"       { printf("OPERATOR: DIVIDE\n"); }
    "=="      { printf("OPERATOR: EQUALS\n"); }  // Equality operator
    ";"       { printf("SEMICOLON\n"); }
    "/*"([^*]|(\*+[^*/]))*\*+"/" { printf("COMMENT\n"); } /* Non-greedy comment handling */
    [ \t\n]+   ; /* Ignore whitespace */
    .         { printf("ILLEGAL CHARACTER: %s\n", yytext); }

    %%

    int main() {
        yylex();
        return 0;
    }
    ```

    **Explanation of Non-Greedy Comments:** The regex  `"/*"([^*]|(\*+[^*/]))*\*+"/"` is a more robust (though still not *perfect*) way to handle C-style comments.

    *   `"/*"`: Matches the opening comment delimiter.
    *   `([^*]|(\*+[^*/]))*`: This is the crucial part for non-greediness:
        *   `[^*]`: Matches any character that is *not* an asterisk.
        *   `(\*+[^*/])`: Matches one or more asterisks followed by a character that is not an asterisk or a forward slash. This ensures that we don't prematurely end the comment if there are asterisks inside.
        *   The `|` combines these two, so we match either a non-asterisk or a sequence of asterisks that are not followed by "*/".
        *   The `*` after the parentheses means we can repeat this pattern zero or more times.
    *   `\*+"/": Matches one or more asterisks followed by the closing comment delimiter.

    **Important Note on Comments:**  Even this non-greedy approach is still susceptible to issues with nested comments (which are not allowed in standard C).  A fully robust comment parser often requires a more complex stateful approach.

4.  **Problem with Identifier Rule Before Keyword Rule:** If the regular expression for identifiers (`[a-zA-Z][a-zA-Z0-9]*`) is placed *before* the regular expression for the keyword `int` in the Lex specification, the lexer will *always* recognize "int" as an identifier rather than as the keyword "int".  This is because Lex tries to match the *longest* possible lexeme and, in this case, the identifier rule matches the string "int". Since the identifier rule comes first, it takes precedence.  The order of the rules is *critical* in resolving ambiguities.

## 7. Important Points to Remember

*   Lex is a powerful tool for automatically generating lexical analyzers.
*   Regular expressions are the foundation of lexical analysis in Lex.
*   Understanding the syntax and semantics of regular expressions is crucial.
*   The order of rules in the Lex file matters significantly for resolving ambiguities.
*   Be mindful of the greedy nature of `.*` in regular expressions and consider alternative approaches for handling comments and other multi-character sequences.
*   Named regular expressions in the definitions section enhance readability and maintainability.
*   Lex provides the matched text in the global variable `yytext` and the length of the matched text in `yyleng`.
