---
title: "Convert the BNF rules into YACC form and write code to generate abstract syntax tree."
subject: "SYSTEMS LAB"
module: "Module 5: Convert the BNF rules into YACC form and write code to generate abstract syntax tree."
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8c038"
status: "completed"
scrapedAt: "2026-05-20T16:57:35.973Z"
---
# SYSTEMS LAB - Module 5: Converting BNF to YACC and Generating Abstract Syntax Trees (ASTs)

## Topic: Convert the BNF rules into YACC form and write code to generate abstract syntax tree.

### 1. Introduction to YACC and Abstract Syntax Trees (ASTs)

This module focuses on translating grammatical rules defined in Backus-Naur Form (BNF) into a format understood by YACC (Yet Another Compiler-Compiler) and then building an Abstract Syntax Tree (AST) to represent the structure of the input code.

*   **What is YACC?**
    *   YACC is a **parser generator**.
    *   It takes a set of grammar rules (often specified in BNF) as input.
    *   It generates C code that can parse input streams according to that grammar.
    *   YACC is typically used in conjunction with lex (or flex) for lexical analysis.

*   **What is a Grammar?**
    *   A grammar defines the **syntax** of a language.
    *   It specifies how symbols (tokens) can be combined to form valid statements or expressions.
    *   BNF is a common notation for expressing grammars.

*   **What is an Abstract Syntax Tree (AST)?**
    *   An AST is a **tree data structure** that represents the hierarchical structure of the source code.
    *   It captures the essential syntactic structure of the code, abstracting away from superficial details like parentheses or punctuation.
    *   Each node in the AST represents a construct occurring in the source code. For example, an AST might have nodes for expressions, statements, declarations, etc.
    *   ASTs are crucial for subsequent phases of a compiler, such as semantic analysis, code optimization, and code generation.

### 2. BNF to YACC Conversion

The core of this module is understanding how to translate BNF rules into YACC syntax.

*   **BNF Basics Recap:**
    *   **Terminals:** Symbols that appear in the input stream (e.g., identifiers, numbers, keywords like `if`, `while`, `+`, `-`).
    *   **Non-terminals:** Symbols that represent grammatical categories and can be further expanded into sequences of terminals and non-terminals (e.g., `expression`, `statement`, `program`).
    *   **Production Rules:** Define how non-terminals can be replaced by sequences of terminals and non-terminals. Format: `<non-terminal> ::= <sequence of terminals and non-terminals>`

*   **YACC Syntax:**
    *   YACC grammar specifications are typically organized into three sections, separated by `%%`:
        1.  **Declarations:** C declarations, token definitions.
        2.  **Grammar Rules:** The BNF-like rules translated into YACC syntax.
        3.  **User Subroutines:** C code executed during parsing (e.g., actions, main function).

*   **Key Conversion Rules:**
    *   **Non-terminals:** Remain the same.
    *   **Terminals:** Must be declared using the `%token` directive in the declarations section.
    *   **Production Rules:**
        *   The `::=` symbol in BNF becomes a colon `:` in YACC.
        *   The `|` symbol (for alternatives) is retained.
        *   Each production rule ends with a semicolon `;`.
        *   A **start symbol** (the non-terminal representing the entire input) must be declared using `%start`.

*   **Example BNF to YACC Conversion:**

    Let's consider a simple arithmetic expression grammar:

    **BNF:**
    ```bnf
    <expression> ::= <expression> + <term>
                   | <term>
    <term>       ::= <term> * <factor>
                   | <factor>
    <factor>     ::= ( <expression> )
                   | <number>
    <number>     ::= digit digit*
    ```

    **YACC (`.y` file):**
    ```yacc
    %{
    // Declarations section (C headers, global variables, etc.)
    #include <stdio.h>
    #include <stdlib.h> // For atof

    // Forward declarations for AST nodes (explained later)
    typedef struct Node {
        char* type;         // e.g., "expression", "term", "number"
        char* value;        // For terminals like numbers
        struct Node *left;
        struct Node *right;
    } Node;

    // Function prototypes for AST creation
    Node* create_node(char* type, char* value);
    Node* create_binary_op_node(char* op, Node* left, Node* right);
    Node* create_leaf_node(char* type, char* value);
    void print_ast(Node* root, int level); // For visualization

    // Lexer will provide tokens: NUM for number, PLUS for +, STAR for *, LPAREN for (, RPAREN for )
    %}

    %token NUM PLUS STAR LPAREN RPAREN

    %start program // Assuming 'program' is our top-level non-terminal

    %%
    // Grammar Rules section

    program: expression EOF        // EOF is a special token indicating end of input
           {
               printf("Successful parse.\n");
               printf("Abstract Syntax Tree:\n");
               print_ast($1, 0); // $1 refers to the result of the 'expression' non-terminal
               // In a real compiler, you'd return $1 here to the caller (e.g., main)
               return 0; // Indicate successful parsing
           }
           ;

    expression: expression PLUS term
              {
                  // Action to create an AST node for addition
                  // $$ represents the result of the current rule
                  // $1 is the result of the left 'expression'
                  // $3 is the result of the 'term'
                  $$ = create_binary_op_node("PLUS", $1, $3);
              }
            | term
              {
                  // If it's just a term, the expression is the term itself
                  $$ = $1;
              }
            ;

    term: term STAR factor
        {
            // Action to create an AST node for multiplication
            $$ = create_binary_op_node("STAR", $1, $3);
        }
      | factor
        {
            // If it's just a factor, the term is the factor itself
            $$ = $1;
        }
      ;

    factor: LPAREN expression RPAREN
          {
              // Parentheses don't add structure, so the factor is the enclosed expression
              $$ = $2;
          }
        | NUM
          {
              // If it's a number, create a leaf node for it
              // $1 contains the token information, including its value (stored as a string usually)
              // We need to extract the string value from $1. YACC usually passes values via yylval.
              // For simplicity, let's assume yylval.strval holds the string.
              $$ = create_leaf_node("NUM", yylval.strval);
          }
        ;

    %%
    // User Subroutines section

    // --- AST Node Implementation ---
    Node* create_node(char* type, char* value) {
        Node* new_node = (Node*)malloc(sizeof(Node));
        if (!new_node) {
            perror("Failed to allocate memory for AST node");
            exit(EXIT_FAILURE);
        }
        new_node->type = type;
        new_node->value = value ? strdup(value) : NULL; // Duplicate value if provided
        new_node->left = NULL;
        new_node->right = NULL;
        return new_node;
    }

    Node* create_binary_op_node(char* op, Node* left, Node* right) {
        Node* new_node = create_node("BINARY_OP", op); // Type is the operator
        new_node->left = left;
        new_node->right = right;
        return new_node;
    }

    Node* create_leaf_node(char* type, char* value) {
        return create_node(type, value);
    }

    // --- AST Printing Function ---
    void print_ast(Node* root, int level) {
        if (root == NULL) {
            return;
        }
        for (int i = 0; i < level; i++) {
            printf("  "); // Indentation for tree structure
        }
        printf("-> ");
        if (root->value) {
            printf("%s (%s)\n", root->type, root->value);
        } else {
            printf("%s\n", root->type);
        }
        print_ast(root->left, level + 1);
        print_ast(root->right, level + 1);
    }

    // --- Lexer Integration (Simulated) ---
    // In a real scenario, you'd have a lexer (lex/flex) that generates tokens.
    // YACC uses yylval to pass values from the lexer to the parser.
    // We'll define a union for yylval and a placeholder for yylex().
    union {
        char* strval; // For token values like numbers
        // int intval; // For other potential values
    } yylval;

    // Mock yylex function for demonstration purposes
    int yylex() {
        // This would be replaced by actual lexer code.
        // It reads input, identifies tokens, and returns their type (e.g., NUM, PLUS).
        // It also sets yylval.strval for tokens that carry values.
        // For demonstration, we'll assume the input is already tokenized and fed via a mock mechanism.
        // In a real scenario, you would use flex/lex.
        return 0; // Placeholder
    }

    // --- Main function ---
    int main() {
        // The yyparse() function is generated by YACC and drives the parsing process.
        // It calls yylex() to get tokens.
        printf("Enter an arithmetic expression (e.g., 12 + 34 * 56): ");
        // In a real scenario, lexer would read from stdin or a file.
        // For this example, we'll manually trigger the parse with some hardcoded tokens conceptually.
        // You would typically compile and run this YACC code with a lexer.

        // Example of how you might test (conceptually, not actual code):
        // The yyparse() function would be called.
        // For a simple test, imagine the input "12 + 34"
        // yylex() would return NUM (yylval.strval = "12")
        // yylex() would return PLUS
        // yylex() would return NUM (yylval.strval = "34")
        // yylex() would return EOF

        // Since we don't have a real lexer here, the program won't actually parse input directly.
        // To run this, you'd typically compile:
        // $ yacc your_grammar.y
        // $ lex your_lexer.l  (or flex your_lexer.l)
        // $ cc y.tab.c lex.yy.c -o parser
        // $ ./parser < input_file.txt

        // For this exercise, we'll just show the YACC structure and AST generation logic.
        // If you had a working lexer, calling yyparse() would initiate the parsing.
        // yyparse();

        return 0;
    }
    ```

### 3. Generating Abstract Syntax Trees (ASTs)

The key to generating an AST in YACC lies within the **semantic actions** associated with each grammar rule.

*   **Semantic Actions:**
    *   These are C code snippets enclosed in curly braces `{}` that follow a grammar rule.
    *   They are executed when that particular rule is recognized by the parser.
    *   **Purpose:** To build the AST nodes as the parser successfully matches parts of the input grammar.

*   **Accessing Rule Components:**
    *   Within a semantic action, you can refer to the non-terminals and terminals that form the rule using dollar signs (`$`):
        *   `$n`: Refers to the value (often a pointer to an AST node) associated with the *n*-th symbol in the rule.
        *   `$$`: Refers to the value that the current non-terminal will return (typically a pointer to the AST node for this rule).

*   **The `yylval` Union:**
    *   The lexer populates a global union variable called `yylval` with the semantic value of the token it recognizes.
    *   For tokens that have associated data (like numbers or identifiers), the lexer will store that data in the appropriate member of `yylval`.
    *   In YACC, you'll use `yylval` to retrieve these values. For example, if `NUM` token has a string value, the lexer might set `yylval.strval`.

*   **Building the AST Node:**
    *   **Leaf Nodes:** Typically represent terminals (e.g., numbers, identifiers). You create a node with the token type and its value.
    *   **Internal Nodes:** Typically represent non-terminals or operations. These nodes have children, which are the AST nodes generated from the sub-rules.
        *   For binary operations (like `+`, `*`), you create a node representing the operator and attach the AST nodes of the left and right operands as its children.
        *   For rules that simply group expressions (like parentheses), the AST node for the inner expression is often directly passed up.

*   **Example AST Node Structure (C):**
    ```c
    typedef struct Node {
        char* type;         // e.g., "expression", "term", "number", "PLUS", "STAR"
        char* value;        // For terminals like numbers or identifiers
        struct Node *left;  // For binary operations, left operand
        struct Node *right; // For binary operations, right operand
        // Can add more fields for other node types (e.g., list of children for N-ary ops)
    } Node;
    ```

*   **AST Creation Functions (C):** It's good practice to create helper functions for building AST nodes to keep the YACC rules clean.

    ```c
    // Helper to create a generic node
    Node* create_node(char* type, char* value) {
        Node* new_node = (Node*)malloc(sizeof(Node));
        // ... error checking ...
        new_node->type = type;
        new_node->value = value ? strdup(value) : NULL;
        new_node->left = NULL;
        new_node->right = NULL;
        return new_node;
    }

    // Helper for binary operations
    Node* create_binary_op_node(char* op_type, Node* left_child, Node* right_child) {
        Node* op_node = create_node(op_type, NULL); // Operator node, no specific value
        op_node->left = left_child;
        op_node->right = right_child;
        return op_node;
    }

    // Helper for leaf nodes (terminals)
    Node* create_leaf_node(char* token_type, char* token_value) {
        return create_node(token_type, token_value);
    }
    ```

*   **Integrating AST Creation in YACC Rules:**

    Let's re-examine the `expression` rule from the previous example:

    ```yacc
    expression: expression PLUS term
              {
                  // $1 is the AST node for the left 'expression'
                  // $3 is the AST node for the 'term'
                  // Create a new node representing the '+' operation
                  // The 'PLUS' token type is passed as the operator
                  $$ = create_binary_op_node("PLUS", $1, $3);
              }
            | term
              {
                  // If it's just a term, the expression's AST is simply the term's AST
                  $$ = $1;
              }
            ;
    ```

    And the `factor` rule with a number:

    ```yacc
    factor: NUM
          {
              // $1 is the token 'NUM'. Its value is in yylval.strval.
              // Create a leaf node for the number.
              $$ = create_leaf_node("NUM", yylval.strval);
          }
        ;
    ```

### 4. Compiling and Running YACC Programs

1.  **Create the YACC file:** Save your YACC specification with a `.y` extension (e.g., `parser.y`).
2.  **Create the Lexer file:** You'll also need a lexer (using `lex` or `flex`) to tokenize the input. Save it with a `.l` extension (e.g., `lexer.l`).
3.  **Generate C code:**
    *   `yacc parser.y` (or `bison parser.y` for GNU Bison) - This creates `y.tab.c` and `y.tab.h`.
    *   `lex lexer.l` (or `flex lexer.l`) - This creates `lex.yy.c`.
4.  **Compile:** Combine the generated C files and link them.
    *   `cc y.tab.c lex.yy.c -o parser -lfl` (The `-lfl` or `-ll` flag links the lexer library).
5.  **Run:** Execute the compiled program, usually by piping input to it.
    *   `./parser < input.txt`

**Example `lexer.l` file for the arithmetic expression:**

```lex
%{
#include "y.tab.h" // Includes token definitions from yacc
#include <stdlib.h> // For atof, strdup

// Declare yylval globally so lexer can set it
extern union {
    char* strval;
} yylval;

%}

%%
[0-9]+      { yylval.strval = strdup(yytext); return NUM; }
"+"         { return PLUS; }
"*"         { return STAR; }
"("         { return LPAREN; }
")"         { return RPAREN; }
[ \t]+      ; /* Skip whitespace */
\n          { return 0; } /* Return 0 for newline to signify end of input for some parsers */
.           { fprintf(stderr, "Error: Unexpected character '%s'\n", yytext); }
%%

// Note: In a real scenario, you might need a main function in the lexer file
// or rely on the one generated by YACC if you combine them.
// Often, the YACC generated file y.tab.c will contain a main() that calls yyparse().
```

**Important Consideration for `yylval`:**
When the lexer recognizes a token that has a value (like a number), it must store that value in `yylval`.
*   The lexer needs to know the type definition of `yylval`. This is usually achieved by including the header file generated by YACC (`y.tab.h`) in the lexer file (`.l`).
*   The lexer should allocate memory for string values (like numbers or identifiers) and return a pointer to it in `yylval.strval`. The responsibility for freeing this memory might lie with the semantic actions in YACC after the AST is built, or within the AST cleanup functions.

### 5. Practice Questions and Exercises

**Question 1:**
Consider the following simplified BNF for assignment statements:

```bnf
<statement> ::= IDENTIFIER = <expression>
<expression> ::= <expression> + <term> | <term>
<term>       ::= IDENTIFIER | NUMBER
```

Translate these BNF rules into YACC syntax. Assume `IDENT` and `NUMBER` are tokens provided by a lexer, and `PLUS` and `ASSIGN` are also tokens. Also, define the structure of your AST nodes and show how you would create AST nodes for these rules.

**Answer 1:**

**YACC Specification (`.y` file):**

```yacc
%{
#include <stdio.h>
#include <stdlib.h> // For malloc, strdup

// AST Node Definition
typedef struct ASTNode {
    char* type;         // e.g., "ASSIGN", "PLUS", "IDENT", "NUMBER"
    char* value;        // For IDENT and NUMBER tokens
    struct ASTNode *left;
    struct ASTNode *right;
} ASTNode;

// AST Creation Functions
ASTNode* create_assign_node(ASTNode* left, ASTNode* right);
ASTNode* create_binary_op_node(char* op_type, ASTNode* left_child, ASTNode* right_child);
ASTNode* create_leaf_node(char* token_type, char* token_value);
void print_ast(ASTNode* root, int level); // For visualization

// Dummy yylval structure and yylex declaration for compilation
union {
    char* strval;
} yylval;

int yylex(); // Forward declaration
%}

%token IDENT NUMBER PLUS ASSIGN

%start statement // Start symbol

%%
// Grammar Rules
statement: IDENT ASSIGN expression
         {
             // Create an assignment node
             // $1 is the IDENT node, $3 is the expression node
             $$ = create_assign_node($1, $3);
         }
         ;

expression: expression PLUS term
          {
              // Create a PLUS operation node
              // $1 is the left expression node, $3 is the term node
              $$ = create_binary_op_node("PLUS", $1, $3);
          }
        | term
          {
              // If it's just a term, the expression is the term itself
              $$ = $1;
          }
        ;

term: IDENT
    {
        // Create a leaf node for the identifier
        // yylval.strval holds the identifier's name from the lexer
        $$ = create_leaf_node("IDENT", yylval.strval);
    }
  | NUMBER
    {
        // Create a leaf node for the number
        // yylval.strval holds the number's string value from the lexer
        $$ = create_leaf_node("NUMBER", yylval.strval);
    }
  ;

%%
// User Subroutines (AST Implementation)

ASTNode* create_node(char* type, char* value) {
    ASTNode* new_node = (ASTNode*)malloc(sizeof(ASTNode));
    if (!new_node) {
        perror("Memory allocation failed");
        exit(EXIT_FAILURE);
    }
    new_node->type = strdup(type); // Copy the type string
    new_node->value = value ? strdup(value) : NULL; // Copy value if provided
    new_node->left = NULL;
    new_node->right = NULL;
    return new_node;
}

ASTNode* create_assign_node(ASTNode* left, ASTNode* right) {
    ASTNode* assign_node = create_node("ASSIGN", NULL); // ASSIGN node doesn't have a value
    assign_node->left = left;  // Left is the identifier
    assign_node->right = right; // Right is the expression
    return assign_node;
}

ASTNode* create_binary_op_node(char* op_type, ASTNode* left_child, ASTNode* right_child) {
    ASTNode* op_node = create_node(op_type, NULL); // Operator node
    op_node->left = left_child;
    op_node->right = right_child;
    return op_node;
}

ASTNode* create_leaf_node(char* token_type, char* token_value) {
    return create_node(token_type, token_value);
}

// Dummy yylex for demonstration (replace with actual lexer logic)
int yylex() {
    // This is a placeholder. A real lexer would read input and return tokens.
    // For testing, you would need a lexer.
    printf("yylex called (dummy)\n");
    return 0; // Should return token types
}

// For demonstration purposes, a simple main that shows the structure
int main() {
    printf("YACC parser specification with AST generation for assignment.\n");
    // To run this, you would compile it with a lexer and call yyparse().
    // For example:
    // yacc my_assign.y
    // lex my_assign.l
    // cc y.tab.c lex.yy.c -o assign_parser -lfl
    // ./assign_parser < input.txt
    return 0;
}
```

**Question 2:**
Explain the role of the `%token` directive and the `$n`, `$$` symbols in YACC.

**Answer 2:**

*   **`%token` directive:**
    *   **Purpose:** It is used in the **declarations section** of a YACC grammar file to declare all the **terminal symbols** that the parser expects to receive from the lexer.
    *   **Example:** `%token IDENT NUMBER PLUS ASSIGN`
    *   **Significance:** By declaring tokens, YACC knows which symbols are the basic building blocks of the grammar and how to refer to them in the production rules. It also generates symbolic constants (macros) for these tokens, which are usually defined in the `y.tab.h` header file, making the lexer's job of returning tokens easier and the YACC code more readable.

*   **`$n` symbols:**
    *   **Purpose:** Within a **semantic action** (the C code in `{}`) associated with a grammar rule, `$n` refers to the **semantic value** of the *n*-th symbol in that rule as defined in the YACC specification.
    *   **Example:** In the rule `expression: expression PLUS term { $$ = create_binary_op_node("PLUS", $1, $3); };`, `$1` refers to the semantic value of the first `expression` in the rule, and `$3` refers to the semantic value of the `term`.
    *   **Significance:** These values are typically pointers to AST nodes (or other data structures) that were constructed in the semantic actions of the sub-rules. They allow you to build the current AST node by composing the AST nodes from its constituent parts.

*   **`$$` symbol:**
    *   **Purpose:** Within a **semantic action**, `$$` refers to the **semantic value** of the **non-terminal on the left-hand side** of the production rule.
    *   **Example:** In the same rule `expression: expression PLUS term { $$ = create_binary_op_node("PLUS", $1, $3); };`, `$$` is where the newly created AST node for the `PLUS` operation is assigned.
    *   **Significance:** This is how you propagate the result of a recognized grammar rule upwards. You build the AST node for the current rule and assign its pointer to `$$`, making it available to the calling rule via its `$n` reference.

### 6. Important Points to Remember

*   **Grammar Design:** Start with a clear and unambiguous BNF grammar for the language you want to parse. YACC works best with context-free grammars.
*   **Lexer Integration:** The lexer (lex/flex) is crucial. It tokenizes the input and provides these tokens, along with their semantic values (stored in `yylval`), to the YACC parser. Ensure your lexer and parser agree on token types and how values are passed.
*   **`yylval`:** Understand how `yylval` is used to pass values from the lexer to the parser. For string values, remember to allocate memory (e.g., using `strdup`) and manage it appropriately.
*   **AST Node Structure:** Define a flexible and suitable structure for your AST nodes. Common fields include type, value, and pointers to children (left/right for binary ops, or a list for N-ary ops).
*   **Semantic Actions:** The C code within the curly braces `{}` is where you build your AST. Use `$n` to access the results of sub-rules and `$$` to assign the result of the current rule.
*   **Return Values:** Ensure that each rule's semantic action assigns a meaningful value (usually a pointer to an AST node) to `$$`. The top-level rule's `$$` will be the root of the entire AST.
*   **Memory Management:** Be mindful of memory allocation (`malloc`, `strdup`) for AST nodes and their values. Implement functions to free the AST when it's no longer needed to prevent memory leaks.
*   **Start Symbol:** Always declare a start symbol using `%start` for the top-level grammar rule.
*   **EOF:** The `EOF` token is conventionally used at the end of the input stream. The main rule usually includes `EOF` to ensure the entire input is consumed.
*   **Error Handling:** While basic error handling can be done in YACC (e.g., using `yyerror`), robust error reporting often requires more sophisticated techniques.

This comprehensive set of notes covers the essential aspects of converting BNF rules to YACC form and generating ASTs, equipping you with the knowledge to tackle parsing and structural representation tasks in Systems Lab.
