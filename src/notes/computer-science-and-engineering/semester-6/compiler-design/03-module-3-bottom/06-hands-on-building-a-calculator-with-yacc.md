---
title: "Hands-on:  Building a calculator with YACC"
subject: "COMPILER DESIGN"
module: "Module 3: Bottom"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8ba5a"
status: "completed"
scrapedAt: "2026-05-20T16:51:18.954Z"
---
## COMPILER DESIGN - Module 3: Bottom-Up Parsing - Hands-on: Building a Calculator with YACC

**Learning Outcomes:**

*   Understand the YACC (Yet Another Compiler-Compiler) tool and its role in compiler construction.
*   Be able to define grammar rules using YACC syntax.
*   Learn how to handle operator precedence and associativity in YACC.
*   Develop a working calculator program using YACC, capable of performing basic arithmetic operations.
*   Understand the concepts of tokens, grammar rules, and semantic actions within YACC.
*   Learn how to debug and test YACC-generated parsers.

**1. Introduction to YACC (Yet Another Compiler-Compiler)**

*   **Definition:** YACC is a parser generator, a tool that takes a formal description of a grammar (usually a context-free grammar) as input and produces a parser program.  This parser can then be used to check if a given input conforms to the defined grammar and perform actions based on the recognized structure.
*   **Role in Compiler Construction:** YACC is typically used in the *syntax analysis* (parsing) phase of a compiler.  It receives tokens from a lexical analyzer (e.g., Lex/Flex) and constructs a parse tree based on the grammar rules.
*   **Relationship with Lex/Flex:**  YACC often works in conjunction with a lexical analyzer like Lex/Flex. Lex provides tokens to YACC, which then analyzes the sequence of tokens according to the defined grammar.
*   **Output:** YACC generates a C (or other language) source file containing the parser code. This code usually implements an LALR(1) parser.

**2. YACC File Structure and Syntax**

A YACC file is typically divided into three sections:

*   **Declarations Section:**
    *   **`%{ ... %}`:**  Contains C declarations, header file inclusions, and definitions that are directly included in the generated parser.  This is where you'd include `<stdio.h>`, `<stdlib.h>`, `<math.h>`, etc.  and define data structures used in semantic actions.
    *   **`%token TOKEN1 TOKEN2 ...`:** Declares terminal symbols (tokens) that the parser will receive from the lexical analyzer (Lex/Flex).  These are the basic building blocks of your grammar.
    *   **`%type <type> NON_TERMINAL`:** Specifies the data type associated with a non-terminal symbol. This is crucial for semantic actions where you need to pass values between grammar rules.  `<type>` is a symbolic name representing the C data type (e.g., `<num>`, `<string>`).
    *   **`%left TOKEN`, `%right TOKEN`, `%nonassoc TOKEN`:** Declares the precedence and associativity of operators. `TOKEN` represents the token for the operator (e.g., `PLUS`, `MINUS`).
        *   `%left`:  Left-associative (e.g., `a - b - c` is parsed as `(a - b) - c`).
        *   `%right`: Right-associative (e.g., `a = b = c` is parsed as `a = (b = c)`).
        *   `%nonassoc`: Non-associative (e.g., `a < b < c` is an error).  Used when the operator should not be chained.
    *   **`%start symbol`:** (Optional) Specifies the starting symbol of the grammar. If not specified, the first non-terminal defined in the rules section is used.

*   **Rules Section:**
    *   Consists of a list of grammar rules of the form: `nonterminal :  production1 { action1 } | production2 { action2 } | ... ;`
        *   `nonterminal`:  The non-terminal symbol being defined.
        *   `production`: A sequence of terminal and non-terminal symbols.
        *   `action`:  C code enclosed in `{}` that is executed when the rule is matched. This is where you perform semantic actions, such as calculating values or building a parse tree.
        *   `|`:  Indicates an alternative production for the same non-terminal.
        *   `;`:  Terminates the definition of the non-terminal.
    *   **`$$`:** Refers to the value associated with the non-terminal on the *left-hand side* of the rule.
    *   **`$1`, `$2`, `$3`, ...:** Refer to the values associated with the symbols (terminals or non-terminals) in the production on the *right-hand side* of the rule.  `$1` is the value of the first symbol, `$2` is the value of the second symbol, and so on.
    *   **Empty Production:** A production can be empty, representing a rule that derives to nothing.  This is denoted as: `nonterminal : ; { ... }`

*   **User Subroutines Section:**
    *   Contains C code that is needed by the parser, such as:
        *   `main()` function: The entry point of the program.  It typically calls `yyparse()` to start the parsing process.
        *   `yyerror()` function:  Error handling routine called by YACC when a syntax error is detected.  You should provide a custom `yyerror()` function to print informative error messages.
        *   Supporting functions used in semantic actions.

**3. Building a Simple Calculator with YACC**

Let's build a basic calculator that supports addition, subtraction, multiplication, division, and parentheses.

**3.1. Lexer (Flex file - `calc.l`):**

```lex
%{
#include "calc.tab.h" // Generated by YACC
%}

%%
[0-9]+      { yylval.num = atoi(yytext); return NUMBER; }
"+"         { return PLUS; }
"-"         { return MINUS; }
"*"         { return TIMES; }
"/"         { return DIVIDE; }
"("         { return LPAREN; }
")"         { return RPAREN; }
\n          { return NEWLINE; }
[ \t]       ; // Ignore whitespace
.           { printf("Invalid character: %s\n", yytext); }
%%
```

**3.2. Parser (YACC file - `calc.y`):**

```yacc
%{
#include <stdio.h>
#include <stdlib.h>

int yylex();
void yyerror(const char *s);
%}

%token <num> NUMBER
%token PLUS MINUS TIMES DIVIDE LPAREN RPAREN NEWLINE
%type <num> expr

%left PLUS MINUS
%left TIMES DIVIDE

%%

program:
    program line
    | /* empty */
    ;

line:
    expr NEWLINE  { printf("Result: %d\n", $1); }
    | NEWLINE     { /* ignore empty lines */ }
    | error NEWLINE { yyerror("Syntax error"); yyerrok; }
    ;

expr:
    NUMBER          { $$ = $1; }
    | expr PLUS expr  { $$ = $1 + $3; }
    | expr MINUS expr { $$ = $1 - $3; }
    | expr TIMES expr { $$ = $1 * $3; }
    | expr DIVIDE expr{
         if ($3 == 0) {
            yyerror("Division by zero");
            $$ = 0; // Recover, but the result is incorrect.  Consider throwing an exception instead
         } else {
             $$ = $1 / $3;
         }
       }
    | LPAREN expr RPAREN { $$ = $2; }
    ;

%%

int main() {
  printf("Simple Calculator\n");
  yyparse();
  return 0;
}

void yyerror(const char *s) {
  fprintf(stderr, "Error: %s\n", s);
}
```

**3.3. Explanation:**

*   **Lexer (`calc.l`):**
    *   Defines regular expressions to match numbers, operators, and parentheses.
    *   Uses `yylval.num` to store the integer value of a number.
    *   Returns tokens (e.g., `NUMBER`, `PLUS`, `MINUS`) to the parser.
    *   Includes `calc.tab.h`, which is generated by YACC and contains the token definitions.
*   **Parser (`calc.y`):**
    *   Includes necessary header files.
    *   Declares tokens (`NUMBER`, `PLUS`, etc.).
    *   Defines the type of `NUMBER` and `expr` as `<num>`, indicating that they hold integer values.
    *   **Precedence and Associativity:** The `%left PLUS MINUS` and `%left TIMES DIVIDE` lines specify the precedence and associativity of the operators.  Multiplication and division have higher precedence than addition and subtraction.  All four operators are left-associative.
    *   **Grammar Rules:**
        *   `program`:  Consists of zero or more lines.
        *   `line`:  Can be an expression followed by a newline, a newline by itself, or an error followed by a newline.
        *   `expr`:  Defines the structure of expressions.  It can be a number, the result of an addition, subtraction, multiplication, or division, or an expression enclosed in parentheses.
    *   **Semantic Actions:**
        *   `$$ = $1`:  Assigns the value of the first symbol on the right-hand side to the left-hand side non-terminal.
        *   `$$ = $1 + $3`:  Performs addition and assigns the result to the left-hand side non-terminal. Similar actions are performed for subtraction, multiplication, and division.
        *   **Division by Zero Handling:** Includes a check for division by zero within the division rule.  Handles the error and sets `$$` to a default value to allow parsing to continue. *Important*: More robust error handling might involve throwing an exception or using a dedicated error recovery mechanism.
    *   `main()` function: Calls `yyparse()` to start the parsing process.
    *   `yyerror()` function: Prints an error message.

**3.4. Compilation and Execution:**

1.  **Generate `calc.tab.h` and `calc.tab.c` (YACC):**
    ```bash
    yacc -d calc.y
    ```
    This command creates two files:
    *   `calc.tab.c`: The C source code for the parser.
    *   `calc.tab.h`: Header file containing token definitions (e.g., `NUMBER`, `PLUS`).  This is needed by the lexer.
2.  **Generate `lex.yy.c` (Flex):**
    ```bash
    lex calc.l
    ```
    This command creates `lex.yy.c`, the C source code for the lexical analyzer.
3.  **Compile and Link (GCC or similar):**
    ```bash
    gcc lex.yy.c calc.tab.c -o calculator -lfl
    ```
    *   `-lfl` links with the Flex library (required).  On some systems, you might need to use `-ll` instead.
4.  **Run the Calculator:**
    ```bash
    ./calculator
    ```

**3.5. Example Usage:**

```
Simple Calculator
2 + 3
Result: 5
(4 * 5) - 10
Result: 10
10 / 2
Result: 5
10 / 0
Error: Division by zero
Result: 0
abc
Error: Syntax error
1 + (2 * 3)
Result: 7
```

**4. Handling Operator Precedence and Associativity**

*   **Precedence:** Determines the order in which operators are evaluated.  For example, `*` and `/` have higher precedence than `+` and `-`.
*   **Associativity:** Determines how operators of the *same* precedence are grouped in the absence of parentheses.
    *   **Left Associativity:** Operators are grouped from left to right (e.g., `a - b - c` is `(a - b) - c`).  Use `%left`.
    *   **Right Associativity:** Operators are grouped from right to left (e.g., `a = b = c` is `a = (b = c)`).  Use `%right`.
    *   **Non-Associativity:** The operator cannot be chained (e.g., `a < b < c` is invalid). Use `%nonassoc`.
*   **YACC and Precedence/Associativity:** YACC handles precedence and associativity based on the order and type of token declarations (`%left`, `%right`, `%nonassoc`). Tokens declared later have higher precedence.

**Example:**

```yacc
%left PLUS MINUS
%left TIMES DIVIDE
%right POWER  // Exponentiation (e.g., ^)
```

In this example:

*   `POWER` has the highest precedence.
*   `TIMES` and `DIVIDE` have the next highest precedence.
*   `PLUS` and `MINUS` have the lowest precedence.
*   All of PLUS, MINUS, TIMES, DIVIDE are left-associative.
*   POWER is right-associative.

**5. Debugging and Testing YACC-generated Parsers**

*   **`yydebug`:** Setting `yydebug = 1;` in the `main()` function enables debugging output from the parser. This can help trace the parsing process.
*   **Error Handling:** Implement a robust `yyerror()` function to provide informative error messages.
*   **Testing:** Create a comprehensive set of test cases to cover various scenarios, including valid and invalid input.  Test operator precedence, associativity, and error conditions.  Use a combination of unit tests and integration tests.
*   **Using a Debugger:**  You can use a debugger (e.g., GDB) to step through the generated C code (`calc.tab.c`) and inspect the parser's state.  This is particularly useful for complex grammars.
*   **Reduce/Reduce and Shift/Reduce Conflicts:**  YACC reports these conflicts during compilation. They indicate ambiguities in the grammar that need to be resolved.  Common solutions involve:
    *   Rewriting the grammar to be unambiguous.
    *   Using precedence declarations to resolve the conflicts.

**6. Practice Questions/Exercises:**

1.  **Add support for exponentiation (e.g., `2 ^ 3`) to the calculator.** The `^` operator should be right-associative and have higher precedence than multiplication and division.
    *   **Answer:**  Add a `%token POWER` declaration. Add `%right POWER`.  Add a rule to the grammar: `expr: expr POWER expr { $$ = pow($1, $3); }`  Remember to include `<math.h>`.  You also need to handle tokenizing the exponentiation operator in your lexer.

2.  **Implement a factorial operator (`!`).**  The factorial operator should be a postfix operator (e.g., `5!`) and have high precedence.
    *   **Answer:** Add a `%token FACTORIAL`.  Add a rule:  `expr: expr FACTORIAL { $$ = factorial($1); }`.  You'll need a `factorial()` function in the user subroutine section:

    ```c
    int factorial(int n) {
       if (n == 0) return 1;
       else return n * factorial(n-1);
    }
    ```

    Also update your lexer to recognize `!`.

3.  **Modify the calculator to handle floating-point numbers instead of integers.**
    *   **Answer:**  Change the type declarations to use `double` instead of `int`. For instance, change `%type <num> expr` to `%type <num> expr`. Modify the lexer to use `atof()` instead of `atoi()`.  Also, update `printf` format specifiers (e.g., `%d` to `%f`).

4.  **Improve the error handling to provide more specific error messages and better error recovery.**
    *   **Answer:** Within `yyerror()`, use `yylineno` (provided by Flex) to print the line number where the error occurred.  Implement more sophisticated error recovery strategies in the grammar rules (e.g., using `error` tokens to skip over erroneous input).

**7. Important Points to Remember**

*   **Tokens and Grammar:** Clearly define your tokens and grammar rules before starting to code.
*   **Precedence and Associativity:**  Carefully consider the precedence and associativity of operators.
*   **Semantic Actions:**  Ensure that semantic actions are correct and perform the intended operations.
*   **Error Handling:**  Implement robust error handling to provide informative error messages and facilitate error recovery.
*   **Debugging:** Use debugging techniques to identify and fix errors in your parser.
*   **Testing:** Thoroughly test your parser with a variety of inputs.
*   **YACC and Lex Workflow:** Understand the interaction between YACC and Lex and how tokens are passed from the lexer to the parser.
*   **Conflicts:**  Understand the meaning of shift/reduce and reduce/reduce conflicts and how to resolve them.
*   **LALR(1):** YACC generates an LALR(1) parser, which has certain limitations. If your grammar is too complex, you may need to use a different parser generator or rewrite the grammar.
