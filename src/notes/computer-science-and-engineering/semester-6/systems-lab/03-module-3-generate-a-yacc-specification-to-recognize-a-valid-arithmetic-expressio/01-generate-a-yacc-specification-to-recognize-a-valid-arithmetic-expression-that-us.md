---
title: "Generate a YACC specification to recognize a valid arithmetic expression that uses operators +, – , *,/ and parenthesis."
subject: "SYSTEMS LAB"
module: "Module 3: Generate a YACC specification to recognize a valid arithmetic expression that uses operators +, – , *,/ and parenthesis."
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8c034"
status: "completed"
scrapedAt: "2026-05-20T16:57:34.440Z"
---
# Systems Lab: Module 3 - YACC Specification for Arithmetic Expressions

This module focuses on creating a YACC specification to recognize and parse valid arithmetic expressions involving addition (+), subtraction (-), multiplication (*), division (/), and parentheses.

## Learning Outcomes

Upon successful completion of this module, you will be able to:

*   Understand the fundamental structure of a YACC specification.
*   Define grammar rules for arithmetic expressions using YACC syntax.
*   Associate actions with grammar rules to evaluate or process the recognized expressions.
*   Handle operator precedence and associativity correctly.
*   Recognize and manage parentheses in arithmetic expressions.
*   Generate and interpret the output of a YACC parser for arithmetic expressions.

## 1. Introduction to YACC

YACC (Yet Another Compiler-Compiler) is a parser generator tool that takes a grammar specification as input and produces a parser program, usually written in C. This parser can then be used to analyze and interpret input strings based on the defined grammar.

### Key Concepts:

*   **Grammar:** A set of rules that define the structure of a language. In YACC, grammars are typically context-free grammars (CFGs).
*   **Tokens:** The smallest meaningful units of a language. For arithmetic expressions, tokens include numbers, operators (+, -, *, /), and parentheses.
*   **Non-terminals:** Symbols that represent syntactic categories or structures in the grammar.
*   **Terminals:** Symbols that represent the actual tokens in the input.
*   **Production Rules:** Rules that define how non-terminals can be replaced by sequences of terminals and non-terminals.
*   **Parser:** A program that takes a sequence of tokens and checks if it conforms to the grammar, typically building an internal representation (like an Abstract Syntax Tree).
*   **Lexer (or Scanner):** A program that reads the input stream and breaks it down into tokens. YACC often works in conjunction with a lexer (like Lex or Flex).

### YACC Specification Structure:

A YACC specification file (`.y` extension) is divided into three sections, separated by `%%` delimiters:

1.  **Definitions Section:**
    *   Includes C code (enclosed in `%{ ... %}`) that will be copied directly into the generated C file. This is where you typically include header files and define global variables.
    *   **Token Declarations:** Specifies the terminal symbols (tokens) using the `%token` directive.
    *   **Grammar Rules:** Defines the non-terminal symbols and their production rules.

2.  **Rules Section:**
    *   Contains the core grammar rules. Each rule has a left-hand side (a non-terminal), followed by a colon (`:`), and then the right-hand side (a sequence of terminals and non-terminals).
    *   Rules are terminated by a semicolon (`;`).
    *   **Actions:** Associated C code blocks (enclosed in `{ ... }`) that are executed when a particular rule is matched. These actions are used to perform tasks like calculating values, building trees, or reporting errors.

3.  **User Subroutines Section:**
    *   Contains additional C functions used by the parser. The most important function here is `yyerror()`, which is called when a syntax error is detected.

## 2. Defining the Grammar for Arithmetic Expressions

We need to define a grammar that correctly represents arithmetic expressions with the given operators and parentheses. This involves considering operator precedence and associativity.

### Key Concepts:

*   **Operator Precedence:** The order in which operations are performed (e.g., multiplication and division are performed before addition and subtraction).
*   **Operator Associativity:** The order in which operations of the same precedence are performed (e.g., addition and subtraction are typically left-associative: `a - b - c` is interpreted as `(a - b) - c`).

### Grammar Rules (BNF Style):

A common grammar for arithmetic expressions that handles precedence and associativity looks like this:

```
expression : expression '+' term
           | expression '-' term
           | term
           ;

term       : term '*' factor
           | term '/' factor
           | factor
           ;

factor     : NUMBER
           | '(' expression ')'
           ;
```

**Explanation:**

*   `expression`: Represents an entire arithmetic expression. It can be an `expression` plus or minus a `term`, or simply a `term`.
*   `term`: Represents multiplication and division. It can be a `term` times or divided by a `factor`, or simply a `factor`.
*   `factor`: Represents the most basic units, which are either a `NUMBER` or a parenthesized `expression`.

This hierarchical structure naturally enforces precedence: `expression` depends on `term`, and `term` depends on `factor`. `factor` has the highest priority, as it can contain parentheses or a single number.

### Handling Precedence and Associativity in YACC:

YACC provides directives to explicitly define precedence and associativity, which can simplify the grammar.

*   **`%left <token1> <token2> ...`:** Declares left-associative operators.
*   **`%right <token1> <token2> ...`:** Declares right-associative operators.
*   **`%nonassoc <token1> <token2> ...`:** Declares operators that are not associative.

**Revised Grammar with Precedence and Associativity Directives:**

We can rewrite the grammar using YACC's built-in features for precedence and associativity, leading to a more concise and often less ambiguous specification.

```yacc
%token NUMBER

%left '+' '-'       /* Left associative */
%left '*' '/'       /* Left associative */

%%

expression : expression '+' expression
           | expression '-' expression
           | expression '*' expression
           | expression '/' expression
           | '(' expression ')'
           | NUMBER
           ;

%%
```

**Note:** While the above simplified grammar with `%left` directives works, it's crucial to understand the underlying reason for the more explicit grammar involving `term` and `factor` for more complex scenarios. For this specific problem, the simpler approach is sufficient and demonstrates precedence handling.

**Let's stick with the more explicit grammar that clearly shows the structure for better understanding of how precedence is achieved implicitly.**

### YACC Specification Structure (Detailed):

```yacc
/* Section 1: Definitions */
%{
#include <stdio.h>
#include <stdlib.h> /* For atof */

// Declare functions used in actions
double pop_stack();
void push_stack(double val);

// Symbol stack for storing intermediate results
#define STACK_SIZE 100
double value_stack[STACK_SIZE];
int stack_ptr = 0;

// For error reporting
void yyerror(const char *s);

%}

/* Token declarations */
%token NUMBER

/* Grammar rules with precedence and associativity */
/* Using the more explicit grammar to demonstrate precedence implicitly */

%% /* Section 2: Rules */

program: /* empty */
       | program '\n' { /* Newline signifies end of an expression */ }
       | program expr '\n' { printf("Result: %f\n", $2); }
       ;

expr: expr '+' term { $$ = $1 + $3; }
    | expr '-' term { $$ = $1 - $3; }
    | term        { $$ = $1; }
    ;

term: term '*' factor { $$ = $1 * $3; }
    | term '/' factor {
        if ($3 == 0) {
            fprintf(stderr, "Error: Division by zero\n");
            $$ = 0; /* Or handle as error */
        } else {
            $$ = $1 / $3;
        }
    }
    | factor        { $$ = $1; }
    ;

factor: NUMBER        { $$ = $1; } /* Value of the token NUMBER is available */
      | '(' expr ')'  { $$ = $2; }
      ;

%% /* Section 3: User Subroutines */

/* Lexer definitions for numbers */
%%
[0-9]+(\.[0-9]+)? {
    /* Store the value of the number token */
    yylval.dval = atof(yytext);
    return NUMBER;
}
\n        { return '\n'; } /* Return newline character as a token */
[ \t]+    ; /* Ignore whitespace */
.         { yyerror("Invalid character"); } /* Handle any other character as an error */
%%

/* Error handling function */
void yyerror(const char *s) {
    fprintf(stderr, "Syntax error: %s\n", s);
}

/* Main function to drive the parser */
int main() {
    printf("Enter arithmetic expressions (end with Ctrl+D or empty line):\n");
    yyparse();
    return 0;
}
```

**Explanation of the YACC Code:**

*   **`%{ ... %}`:** This block contains C code that will be included in the generated C file. We include standard libraries and define a simple stack for handling expression evaluation.
*   **`%token NUMBER`:** Declares `NUMBER` as a terminal token.
*   **`program: ...`:** This is the top-level grammar rule. It allows for multiple expressions, each on a new line. The `\n` token is used to separate expressions. When an `expr` is successfully parsed and followed by a newline, its result is printed.
*   **`expr: expr '+' term { $$ = $1 + $3; }`:** This is a production rule.
    *   `expr '+' term`: Matches an `expr`, followed by the '+' operator, followed by a `term`.
    *   `$$`: Represents the semantic value of the non-terminal on the left-hand side (`expr` in this case).
    *   `$1`: Represents the semantic value of the first element on the right-hand side (`expr`).
    *   `$3`: Represents the semantic value of the third element on the right-hand side (`term`).
    *   `{ $$ = $1 + $3; }`: This is the action associated with this rule. It calculates the sum of the left `expr`'s value and the `term`'s value and assigns it to the current `expr`'s value.
*   **`term: term '*' factor { $$ = $1 * $3; }`:** Similar to the `expr` rule, but for multiplication.
*   **`term: term '/' factor { ... }`:** For division, we include a check for division by zero.
*   **`factor: NUMBER { $$ = $1; }`:** When a `NUMBER` token is encountered, its semantic value (which we'll set in the lexer) is assigned to the `factor`.
*   **`factor: '(' expr ')' { $$ = $2; }`:** If an expression is enclosed in parentheses, its value is simply the value of the inner `expr`.
*   **`%%`:** Separates the definition and rules sections.
*   **Lexer Section (`%% ... %%`):** This part defines how the input string is tokenized.
    *   `[0-9]+(\.[0-9]+)?`: This regular expression matches integers and floating-point numbers.
    *   `yylval.dval = atof(yytext);`: `yytext` holds the matched string. `atof` converts it to a double, and `yylval.dval` stores this value. `yylval` is a union in YACC used to pass semantic values between tokens and grammar rules. We assume `yylval` is defined as a union that can hold `dval` of type `double`.
    *   `return NUMBER;`: Returns the `NUMBER` token to the parser.
    *   `\n { return '\n'; }`: Treats newline as a token.
    *   `[ \t]+ ;`: Ignores spaces and tabs.
    *   `. { yyerror("Invalid character"); }`: Catches any other character as an error.
*   **`yyerror(const char *s)`:** This is the standard error reporting function.
*   **`main()`:** The entry point of the program. It prompts the user for input and calls `yyparse()` to start the parsing process.

## 3. Practical Considerations and Best Practices

### Operator Precedence and Associativity:

*   **Implicit Handling:** In the grammar like `expr: expr '+' term | term`, the recursive structure on the left (`expr '+' term`) combined with the rule `term` implicitly handles left associativity and precedence. An expression like `a + b * c` would be parsed as `(a + (b * c))` if `*` had higher precedence than `+`.
*   **Explicit Handling:** Using `%left`, `%right`, and `%nonassoc` directives is the preferred YACC way to manage precedence and associativity, making the grammar cleaner and less prone to ambiguity.

### Semantic Values (`yylval`):

*   Semantic values are data associated with tokens and non-terminals.
*   YACC uses the `yylval` union to pass these values. You need to ensure `yylval` is defined appropriately (usually in the lexer or by including a header) to hold the types of values you're working with (e.g., `int`, `double`).
*   `$$` refers to the semantic value of the left-hand side non-terminal.
*   `$N` refers to the semantic value of the Nth symbol on the right-hand side.

### Error Handling:

*   The `yyerror()` function is crucial for informing the user about syntax errors.
*   For more robust error recovery, YACC provides mechanisms like the `error` token and the `yyclearin` function.

### Building and Running:

1.  **Save the YACC specification:** Save the code in a file named `arithmetic.y`.
2.  **Generate C code:** Use `yacc -d arithmetic.y`. The `-d` flag also generates a `y.tab.h` file containing token definitions.
3.  **Generate Lexer (Optional but Recommended):** If you have a separate Lex file (e.g., `lexer.l`), generate the lexer C code using `lex lexer.l`. If the lexer is inline as in the example above, this step is not needed.
4.  **Compile:** Compile the generated C files along with any necessary libraries:
    *   If lexer is inline: `cc y.tab.c -o parser -ll` (The `-ll` links the lex library, though not strictly needed for inline lexers, it's good practice).
    *   If using a separate lex file: `cc y.tab.c lex.yy.c -o parser -ll`
5.  **Run:** Execute the compiled program: `./parser`

## 4. Practice Questions and Exercises

**Question 1:**

Write the YACC specification for a simple calculator that only handles addition of integers.

**Answer 1:**

```yacc
%{
#include <stdio.h>
void yyerror(const char *s);
%}

%token NUMBER

%%

program: /* empty */
       | program '\n'
       | program expr '\n' { printf("Result: %d\n", $2); }
       ;

expr: expr '+' expr { $$ = $1 + $3; }
    | NUMBER        { $$ = $1; }
    ;

%%

/* Lexer */
%%
[0-9]+ { yylval.ival = atoi(yytext); return NUMBER; }
\n     { return '\n'; }
[ \t]+ ;
.      { yyerror("Invalid character"); }
%%

void yyerror(const char *s) {
    fprintf(stderr, "Syntax error: %s\n", s);
}

int main() {
    printf("Enter integer expressions with + (end with Ctrl+D or empty line):\n");
    yyparse();
    return 0;
}
```
**Note:** `yylval.ival` is assumed for integer values. `atoi` is used instead of `atof`.

**Question 2:**

Consider the following YACC grammar for arithmetic expressions:

```yacc
%token NUMBER

%left '+' '-'
%left '*' '/'

expr: expr '+' expr
    | expr '-' expr
    | expr '*' expr
    | expr '/' expr
    | '(' expr ')'
    | NUMBER
    ;
```

How would this grammar parse the expression `5 + 3 * 2`? Explain the order of operations based on the grammar rules.

**Answer 2:**

The `%left '+' '-'` and `%left '*' '/'` directives ensure that `*` and `/` have higher precedence than `+` and `-`, and that operators of the same precedence are left-associative.

1.  **`3 * 2`:** The `*` operator has higher precedence. The rule `expr: expr '*' expr` will be applied. `3` and `2` are `NUMBER` tokens. The parser effectively sees `expr(3) '*' expr(2)`. The action associated with `*` would evaluate this to `6`.
2.  **`5 + 6`:** Now the expression is `5 + 6`. The `+` operator has lower precedence. The rule `expr: expr '+' expr` is applied. `5` is an `expr` and the result of `3 * 2` (which is `6`) is also an `expr`. The action associated with `+` evaluates this to `11`.

Therefore, the expression `5 + 3 * 2` is parsed and evaluated as `5 + (3 * 2) = 11`.

**Question 3:**

Modify the YACC specification provided in the module to include support for exponentiation (`^`), which should have higher precedence than multiplication and division and be right-associative.

**Answer 3:**

To add exponentiation (`^`), we need to:
1.  Define `^` as a token.
2.  Add a `%right '^'` directive to give it the highest precedence and make it right-associative.
3.  Add production rules for exponentiation.

Here's the modified relevant section of the YACC specification:

```yacc
/* Section 1: Definitions */
%{
#include <stdio.h>
#include <stdlib.h>
#include <math.h> /* For pow */

// ... (rest of includes and stack definitions)

%}

/* Token declarations */
%token NUMBER

/* Operator Precedence and Associativity */
%left '+' '-'       /* Left associative */
%left '*' '/'       /* Left associative */
%right '^'          /* Right associative, highest precedence */

%% /* Section 2: Rules */

program: /* empty */
       | program '\n' { /* Newline signifies end of an expression */ }
       | program expr '\n' { printf("Result: %f\n", $2); }
       ;

expr: expr '+' term { $$ = $1 + $3; }
    | expr '-' term { $$ = $1 - $3; }
    | term        { $$ = $1; }
    ;

term: term '*' factor { $$ = $1 * $3; }
    | term '/' factor {
        if ($3 == 0) {
            fprintf(stderr, "Error: Division by zero\n");
            $$ = 0; /* Or handle as error */
        } else {
            $$ = $1 / $3;
        }
    }
    | factor        { $$ = $1; }
    ;

factor: NUMBER        { $$ = $1; }
      | '(' expr ')'  { $$ = $2; }
      | factor '^' factor { $$ = pow($1, $3); } /* Exponentiation rule */
      ;

%% /* Section 3: User Subroutines */
// ... (lexer and main function remain similar,
//      adjusting NUMBER token to return double for pow)
// lexer for NUMBER should handle floating point
%%
[0-9]+(\.[0-9]+)? {
    yylval.dval = atof(yytext);
    return NUMBER;
}
\n        { return '\n'; }
[ \t]+    ;
.         { yyerror("Invalid character"); }
%%

// yyerror and main functions as before
void yyerror(const char *s) {
    fprintf(stderr, "Syntax error: %s\n", s);
}

int main() {
    printf("Enter arithmetic expressions with +, -, *, /, ^, () (end with Ctrl+D or empty line):\n");
    yyparse();
    return 0;
}
```

**Key Changes:**

*   `%right '^'` is added to give `^` the highest precedence and make it right-associative.
*   `factor: factor '^' factor { $$ = pow($1, $3); }` is added. Notice that exponentiation is placed within the `factor` rule. This is because it's often treated at a level above basic multiplication/division, or in this case, we've elevated it by giving it higher precedence. If we wanted it to be associative with multiplication/division, we would put it at the `term` level. The right-associativity is handled by the `%right` directive.

## 5. Important Points to Remember

*   **YACC File Structure:** Always remember the three sections separated by `%%`.
*   **Token Definitions:** Use `%token` for terminal symbols.
*   **Grammar Rules:** Define non-terminals and their productions.
*   **Semantic Actions:** Use C code within `{}` to process values and perform calculations.
*   **`$$` and `$N`:** Understand how to refer to the semantic values of non-terminals and terminals.
*   **Precedence and Associativity:** Use `%left`, `%right`, `%nonassoc` directives to manage operator hierarchy and associativity correctly.
*   **`yyerror()`:** Implement this function for error reporting.
*   **`yylval`:** Ensure `yylval` is correctly defined to pass semantic values.
*   **Lexer Interaction:** The YACC parser relies on a lexer to break the input into tokens. The lexer must return the correct token types and set `yylval` appropriately.
*   **Building Process:** `yacc -d file.y`, then compile the `.c` files.

This module provides a solid foundation for understanding how YACC can be used to parse and evaluate arithmetic expressions. The principles learned here can be extended to more complex language constructs.
