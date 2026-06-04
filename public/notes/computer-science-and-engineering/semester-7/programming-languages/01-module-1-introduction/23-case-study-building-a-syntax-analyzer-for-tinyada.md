---
title: "Case Study: Building a Syntax Analyzer for TinyAda"
subject: "PROGRAMMING LANGUAGES"
module: "Module 1: Introduction "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c67d"
status: "completed"
scrapedAt: "2026-05-20T17:09:20.824Z"
---
# PROGRAMMING LANGUAGES - Module 1: Introduction

## Topic: Case Study: Building a Syntax Analyzer for TinyAda

---

### Learning Outcomes:

*   **LO1: Understand the role and importance of a syntax analyzer in a compiler.**
*   **LO2: Familiarize with the basic structure of a TinyAda language.**
*   **LO3: Learn about the process of parsing and the concept of abstract syntax trees (ASTs).**
*   **LO4: Understand the fundamental techniques used in building a syntax analyzer, specifically recursive descent parsing.**
*   **LO5: Gain practical insights into the implementation of a syntax analyzer for a simple language like TinyAda.**

---

### 1. Introduction to Syntax Analysis (Parsing)

#### **1.1 Role and Importance of a Syntax Analyzer**

*   **Definition:** A syntax analyzer, also known as a **parser**, is a component of a compiler that takes a stream of **tokens** (produced by the lexer) and checks if they form a valid sequence according to the **grammar** of the programming language.
*   **Key Function:** To determine if the input program adheres to the language's syntactic rules.
*   **Importance:**
    *   **Enforces Language Rules:** Ensures that the code is written in a grammatically correct way.
    *   **Error Detection:** Identifies syntax errors, such as missing semicolons, mismatched parentheses, or incorrect keyword usage.
    *   **Enables Semantic Analysis:** Provides a structured representation of the program (e.g., an AST) that the subsequent phases of the compiler (semantic analyzer) can understand and process. Without a valid parse tree, semantic checks cannot be performed reliably.
    *   **Facilitates Code Generation:** The structured representation helps in transforming the source code into machine code or intermediate code.

#### **1.2 Relationship with Lexer and Semantic Analyzer**

*   **Lexer (Scanner):** The first phase of a compiler. It reads the source code character by character and groups them into meaningful units called **tokens**.
    *   *Example:* In `x := 10;`, the lexer would produce tokens like `IDENTIFIER(x)`, `ASSIGN_OP`, `INTEGER_LITERAL(10)`, `SEMICOLON`.
*   **Syntax Analyzer (Parser):** Receives tokens from the lexer and verifies their sequence against the language's grammar.
*   **Semantic Analyzer:** Receives the structured representation (e.g., AST) from the parser. It checks for meaning-related errors, such as type mismatches, undeclared variables, or incorrect scope usage.

#### **1.3 Output of the Syntax Analyzer**

The primary output of a syntax analyzer is a **parse tree** or an **Abstract Syntax Tree (AST)**.

*   **Parse Tree (Concrete Syntax Tree):**
    *   A tree that explicitly represents the derivation of the input string according to the grammar rules.
    *   Every node in the parse tree corresponds to either a grammar symbol (terminal or non-terminal) or an action.
    *   Can be verbose and include many nodes that don't contribute to the essential structure.
*   **Abstract Syntax Tree (AST):**
    *   A more concise, abstract representation of the program's structure.
    *   It captures the essential syntactic structure while omitting redundant information (like punctuation, grouping parentheses, etc.).
    *   Easier for subsequent compiler phases to work with.
    *   *Example:* An AST for `x := 10 + y` might have `:=` as the root, with `x` as its left child and a `+` node as its right child. The `+` node would have `10` and `y` as its children.

---

### 2. The TinyAda Language: A Simplified Subset

TinyAda is a hypothetical, small programming language designed for educational purposes to illustrate compiler construction concepts.

#### **2.1 Basic Structure and Features**

*   **Statements:**
    *   Assignment statements: `variable := expression;`
    *   Procedure calls: `procedure_name;`
    *   Conditional statements: `IF condition THEN statements END IF;`
    *   Loop statements: `LOOP statements END LOOP;`
*   **Expressions:**
    *   Arithmetic expressions: involving identifiers, integer literals, and operators like `+`, `-`, `*`, `/`.
    *   Relational expressions: involving comparison operators like `=`, `/=`, `<`, `<=`, `>`, `>=`.
*   **Declarations:**
    *   Variable declarations: `variable : INTEGER;` (assuming only integer types for simplicity)
*   **Program Structure:** A TinyAda program typically starts with declarations followed by a sequence of statements.

#### **2.2 Grammar of TinyAda (Simplified Example)**

A grammar defines the syntactic rules of a language. We'll use a simplified Backus-Naur Form (BNF) or Extended BNF (EBNF).

**Example Grammar for TinyAda Statements:**

```
program ::= declaration_list statement_list
declaration_list ::= declaration | declaration_list declaration
declaration ::= IDENTIFIER : TYPE_INTEGER ;
statement_list ::= statement | statement_list statement
statement ::= assignment | procedure_call | if_statement | loop_statement
assignment ::= IDENTIFIER ASSIGN_OP expression SEMICOLON
procedure_call ::= IDENTIFIER SEMICOLON
if_statement ::= IF condition THEN statement_list END IF SEMICOLON
loop_statement ::= LOOP statement_list END LOOP SEMICOLON
expression ::= term { ADD_OP term }
term ::= factor { MUL_OP factor }
factor ::= IDENTIFIER | INTEGER_LITERAL | ( expression )
condition ::= expression relational_op expression
relational_op ::= EQ | NE | LT | LE | GT | GE
ADD_OP ::= PLUS | MINUS
MUL_OP ::= MUL | DIV
```

**Key Symbols:**

*   **Terminals:** Symbols that appear in the input stream (tokens from the lexer). Examples: `IDENTIFIER`, `ASSIGN_OP`, `INTEGER_LITERAL`, `SEMICOLON`, `IF`, `THEN`, `END IF`, `LOOP`, `PLUS`, `EQ`, `(`.
*   **Non-terminals:** Grammatical categories that can be expanded. Examples: `program`, `statement_list`, `expression`, `term`, `factor`.
*   **Production Rules:** Define how non-terminals can be replaced by sequences of terminals and non-terminals (e.g., `assignment ::= IDENTIFIER ASSIGN_OP expression SEMICOLON`).

**Important Grammar Concepts:**

*   **Ambiguity:** A grammar is ambiguous if there exists a sentence that can be derived in more than one way (resulting in different parse trees). Parsers need unambiguous grammars.
*   **Left Recursion:** A grammar is left-recursive if a non-terminal can derive a sequence of symbols starting with itself (e.g., `list ::= list item`). Left recursion can cause problems for some parsing techniques (like recursive descent) and needs to be eliminated.

---

### 3. Parsing Techniques

#### **3.1 Top-Down vs. Bottom-Up Parsing**

*   **Top-Down Parsing:**
    *   Starts from the root of the parse tree (the start symbol of the grammar) and tries to derive the input string.
    *   It predicts which production rule to apply to expand a non-terminal.
    *   **Recursive Descent** and **LL Parsers** are examples.
*   **Bottom-Up Parsing:**
    *   Starts from the input string (the leaves of the parse tree) and tries to reduce it to the start symbol.
    *   It identifies sequences of terminals and non-terminals that match the right-hand side of a production rule and replaces them with the left-hand side non-terminal.
    *   **Shift-Reduce Parsers** (like LR parsers) are examples.

#### **3.2 Recursive Descent Parsing**

*   **Concept:** A parsing technique where a set of mutually recursive procedures is written, one for each non-terminal in the grammar.
*   **How it works:**
    *   Each procedure is responsible for recognizing a sequence of tokens that corresponds to its non-terminal.
    *   When a procedure needs to match a terminal, it calls the lexer to get the next token and compares it.
    *   When a procedure needs to match a non-terminal, it calls the procedure corresponding to that non-terminal.
*   **Types:**
    *   **Non-recursive Descent:** Uses an explicit stack to simulate recursion.
    *   **Recursive Descent (Pure):** Directly uses procedure calls for recursion.
*   **Predictive Recursive Descent:** A variation that avoids backtracking. It uses lookahead tokens to decide which production rule to apply. This typically requires grammars that are LL(1) (Left-to-right scan, Leftmost derivation, 1 token lookahead).

**Example: Parsing an Assignment Statement with Recursive Descent**

Let's consider a simplified grammar for assignment:
`assignment ::= IDENTIFIER ASSIGN_OP expression SEMICOLON`

We would have procedures like:

```
// Global variables: current_token (from lexer)

procedure ParseAssignment() {
    if (current_token == IDENTIFIER) {
        Match(IDENTIFIER); // Consume the IDENTIFIER token

        if (current_token == ASSIGN_OP) {
            Match(ASSIGN_OP); // Consume the ASSIGN_OP token

            ParseExpression(); // Recursively call ParseExpression

            if (current_token == SEMICOLON) {
                Match(SEMICOLON); // Consume the SEMICOLON token
                // Assignment statement successfully parsed
            } else {
                ReportSyntaxError("Expected ';'");
            }
        } else {
            ReportSyntaxError("Expected ':='");
        }
    } else {
        ReportSyntaxError("Expected IDENTIFIER");
    }
}

procedure ParseExpression() {
    // ... parsing logic for expressions ...
}

procedure Match(expected_token_type) {
    if (current_token.type == expected_token_type) {
        current_token = Lexer.GetNextToken(); // Get the next token from lexer
    } else {
        ReportSyntaxError("Expected " + expected_token_type);
    }
}
```

**Key Points for Recursive Descent:**

*   **Grammar Transformation:** Grammars often need to be transformed (e.g., eliminating left recursion, factoring) to be suitable for predictive recursive descent.
*   **State Management:** Each procedure implicitly maintains the "state" of parsing for its non-terminal.

#### **3.3 Abstract Syntax Trees (ASTs)**

*   **Purpose:** To represent the hierarchical structure of the program in a compact and meaningful way, suitable for further processing by the compiler.
*   **Construction:** ASTs are built incrementally by the parser as it recognizes language constructs.
    *   When a production rule is matched, a new AST node is created.
    *   Children of the node are the ASTs generated by the non-terminals on the right-hand side of the rule.
    *   Terminal symbols might be represented as leaf nodes or sometimes omitted if their meaning is clear from the parent node's type.
*   **Example AST Nodes:**
    *   `AssignmentNode(variable_name, expression_tree)`
    *   `IfNode(condition_tree, then_statements_tree, optional_else_tree)`
    *   `BinaryOpNode(operator, left_operand_tree, right_operand_tree)`
    *   `IdentifierNode(name)`
    *   `IntegerLiteralNode(value)`

---

### 4. Implementing a Syntax Analyzer for TinyAda

#### **4.1 Steps Involved**

1.  **Define the Grammar:** Clearly specify the BNF or EBNF grammar for TinyAda.
2.  **Tokenization:** Ensure the lexer is correctly implemented to produce tokens for TinyAda.
3.  **Choose a Parsing Strategy:** For TinyAda, recursive descent is a common and manageable choice for educational purposes.
4.  **Transform the Grammar (if necessary):**
    *   Eliminate left recursion.
    *   Perform left factoring if needed.
5.  **Write Parsing Procedures:** Create a procedure for each non-terminal.
6.  **Implement `Match` Function:** A helper function to consume tokens and report errors.
7.  **Build the AST:** As production rules are successfully matched, create and connect AST nodes.
8.  **Error Handling:** Implement robust error reporting mechanisms.

#### **4.2 Example: Grammar Transformation (Left Recursion Elimination)**

Consider the expression grammar:
`expression ::= expression PLUS term | term`

This is left-recursive (`expression` can derive `expression PLUS term`). To eliminate left recursion, we introduce new non-terminals:

Original:
`expression ::= expression PLUS term | term`

Transformed:
`expression ::= term expression_prime`
`expression_prime ::= PLUS term expression_prime | epsilon`  (epsilon means empty string)

Now, the grammar is no longer left-recursive, which is suitable for predictive recursive descent.

#### **4.3 Code Structure (Conceptual)**

```python
# Assuming a Token class and Lexer class are already defined

class Parser:
    def __init__(self, lexer):
        self.lexer = lexer
        self.current_token = self.lexer.get_next_token()
        self.ast_root = None # To store the root of the AST

    def match(self, token_type):
        if self.current_token.type == token_type:
            print(f"Matched: {self.current_token.value}") # For debugging
            self.current_token = self.lexer.get_next_token()
        else:
            self.report_syntax_error(f"Expected {token_type}, but found {self.current_token.type}")

    def report_syntax_error(self, message):
        print(f"Syntax Error: {message} at line {self.current_token.line_num}")
        # In a real compiler, you'd have more sophisticated error recovery

    def parse_program(self):
        # program ::= declaration_list statement_list
        declarations = self.parse_declaration_list()
        statements = self.parse_statement_list()
        # Assuming program is the start symbol and we return its AST
        self.ast_root = ProgramNode(declarations, statements)
        print("Program parsed successfully.")
        return self.ast_root

    def parse_declaration_list(self):
        declarations = []
        # In a real scenario, you'd check if the token starts a declaration
        # For simplicity, let's assume declarations always precede statements.
        while self.current_token.type == "IDENTIFIER" and self.lexer.peek_next_token().type == "COLON":
            declarations.append(self.parse_declaration())
        return declarations

    def parse_declaration(self):
        # declaration ::= IDENTIFIER : TYPE_INTEGER ;
        var_name = self.current_token.value
        self.match("IDENTIFIER")
        self.match("COLON")
        self.match("TYPE_INTEGER") # Assuming 'INTEGER' is a token type
        self.match("SEMICOLON")
        return DeclarationNode(var_name, "INTEGER")

    def parse_statement_list(self):
        statements = []
        # Parse as long as we see tokens that start a statement
        while self.current_token.type not in ["EOF", "END_PROGRAM"]: # Adjust termination conditions
            statements.append(self.parse_statement())
        return statements

    def parse_statement(self):
        token_type = self.current_token.type

        if token_type == "IDENTIFIER":
            # Check if it's an assignment or procedure call
            if self.lexer.peek_next_token().type == "ASSIGN_OP":
                return self.parse_assignment()
            else:
                return self.parse_procedure_call()
        elif token_type == "IF":
            return self.parse_if_statement()
        elif token_type == "LOOP":
            return self.parse_loop_statement()
        else:
            self.report_syntax_error(f"Unexpected token starting statement: {token_type}")
            # Attempt to recover by skipping to the next potential statement start
            return None # Or a placeholder error node

    def parse_assignment(self):
        # assignment ::= IDENTIFIER ASSIGN_OP expression SEMICOLON
        var_name = self.current_token.value
        self.match("IDENTIFIER")
        self.match("ASSIGN_OP")
        expr_node = self.parse_expression()
        self.match("SEMICOLON")
        return AssignmentNode(var_name, expr_node)

    def parse_procedure_call(self):
        # procedure_call ::= IDENTIFIER SEMICOLON
        proc_name = self.current_token.value
        self.match("IDENTIFIER")
        self.match("SEMICOLON")
        return ProcedureCallNode(proc_name)

    def parse_if_statement(self):
        # if_statement ::= IF condition THEN statement_list END IF SEMICOLON
        self.match("IF")
        condition_node = self.parse_condition()
        self.match("THEN")
        then_statements = self.parse_statement_list()
        self.match("END IF")
        self.match("SEMICOLON")
        return IfNode(condition_node, then_statements, None) # No else for simplicity

    def parse_loop_statement(self):
        # loop_statement ::= LOOP statement_list END LOOP SEMICOLON
        self.match("LOOP")
        loop_statements = self.parse_statement_list()
        self.match("END LOOP")
        self.match("SEMICOLON")
        return LoopNode(loop_statements)

    def parse_expression(self):
        # expression ::= term expression_prime
        left = self.parse_term()
        return self.parse_expression_prime(left)

    def parse_expression_prime(self, left_node):
        # expression_prime ::= ADD_OP term expression_prime | epsilon
        if self.current_token.type in ["PLUS", "MINUS"]:
            op_token = self.current_token
            self.match(self.current_token.type)
            right_node = self.parse_term()
            new_node = BinaryOpNode(op_token.value, left_node, right_node)
            return self.parse_expression_prime(new_node)
        else:
            return left_node # epsilon production

    def parse_term(self):
        # term ::= factor term_prime
        left = self.parse_factor()
        return self.parse_term_prime(left)

    def parse_term_prime(self, left_node):
        # term_prime ::= MUL_OP factor term_prime | epsilon
        if self.current_token.type in ["MUL", "DIV"]:
            op_token = self.current_token
            self.match(self.current_token.type)
            right_node = self.parse_factor()
            new_node = BinaryOpNode(op_token.value, left_node, right_node)
            return self.parse_term_prime(new_node)
        else:
            return left_node # epsilon production

    def parse_factor(self):
        # factor ::= IDENTIFIER | INTEGER_LITERAL | ( expression )
        token_type = self.current_token.type
        token_value = self.current_token.value

        if token_type == "IDENTIFIER":
            self.match("IDENTIFIER")
            return IdentifierNode(token_value)
        elif token_type == "INTEGER_LITERAL":
            self.match("INTEGER_LITERAL")
            return IntegerLiteralNode(int(token_value))
        elif token_type == "LPAREN":
            self.match("LPAREN")
            expr_node = self.parse_expression()
            self.match("RPAREN")
            return expr_node # Parentheses don't add a new node type in AST, they just group
        else:
            self.report_syntax_error(f"Unexpected token in factor: {token_type}")
            return ErrorNode() # Placeholder for an error

    def parse_condition(self):
        # condition ::= expression relational_op expression
        left = self.parse_expression()
        op_token = self.current_token
        self.match(self.current_token.type) # Match the relational operator
        right = self.parse_expression()
        return RelationalOpNode(op_token.value, left, right)

    def peek_next_token(self):
        # Helper to peek at the next token without consuming it
        return self.lexer.peek_next_token()

# Dummy AST Node definitions for illustration
class ASTNode: pass
class ProgramNode(ASTNode): def __init__(self, decls, stmts): self.declarations = decls; self.statements = stmts
class DeclarationNode(ASTNode): def __init__(self, name, type): self.name = name; self.type = type
class AssignmentNode(ASTNode): def __init__(self, var, expr): self.variable = var; self.expression = expr
class ProcedureCallNode(ASTNode): def __init__(self, name): self.name = name
class IfNode(ASTNode): def __init__(self, cond, then_stmts, else_stmts): self.condition = cond; self.then_branch = then_stmts; self.else_branch = else_stmts
class LoopNode(ASTNode): def __init__(self, stmts): self.statements = stmts
class BinaryOpNode(ASTNode): def __init__(self, op, left, right): self.operator = op; self.left = left; self.right = right
class IdentifierNode(ASTNode): def __init__(self, name): self.name = name
class IntegerLiteralNode(ASTNode): def __init__(self, value): self.value = value
class RelationalOpNode(ASTNode): def __init__(self, op, left, right): self.operator = op; self.left = left; self.right = right
class ErrorNode(ASTNode): pass

# Dummy Lexer and Token classes for demonstration
class Token:
    def __init__(self, type, value, line_num):
        self.type = type
        self.value = value
        self.line_num = line_num

class Lexer:
    def __init__(self, input_string):
        self.input = input_string
        self.pos = 0
        self.line_num = 1
        self.tokens = self.tokenize()

    def tokenize(self):
        # Simplified tokenization for demonstration
        tokens = []
        i = 0
        while i < len(self.input):
            char = self.input[i]
            if char.isspace():
                if char == '\n':
                    self.line_num += 1
                i += 1
                continue
            elif char.isalpha():
                start = i
                while i < len(self.input) and self.input[i].isalnum():
                    i += 1
                word = self.input[start:i]
                if word == "IF": tokens.append(Token("IF", word, self.line_num))
                elif word == "THEN": tokens.append(Token("THEN", word, self.line_num))
                elif word == "END IF": tokens.append(Token("END IF", word, self.line_num))
                elif word == "LOOP": tokens.append(Token("LOOP", word, self.line_num))
                elif word == "END LOOP": tokens.append(Token("END LOOP", word, self.line_num))
                elif word == "INTEGER": tokens.append(Token("TYPE_INTEGER", word, self.line_num))
                else: tokens.append(Token("IDENTIFIER", word, self.line_num))
            elif char.isdigit():
                start = i
                while i < len(self.input) and self.input[i].isdigit():
                    i += 1
                tokens.append(Token("INTEGER_LITERAL", self.input[start:i], self.line_num))
            elif char == ':':
                if i + 1 < len(self.input) and self.input[i+1] == '=':
                    tokens.append(Token("ASSIGN_OP", ":=", self.line_num))
                    i += 1
                else:
                    tokens.append(Token("COLON", ":", self.line_num))
                i += 1
            elif char == ';':
                tokens.append(Token("SEMICOLON", ";", self.line_num))
                i += 1
            elif char == '(':
                tokens.append(Token("LPAREN", "(", self.line_num))
                i += 1
            elif char == ')':
                tokens.append(Token("RPAREN", ")", self.line_num))
                i += 1
            elif char == '+':
                tokens.append(Token("PLUS", "+", self.line_num))
                i += 1
            elif char == '-':
                tokens.append(Token("MINUS", "-", self.line_num))
                i += 1
            elif char == '*':
                tokens.append(Token("MUL", "*", self.line_num))
                i += 1
            elif char == '/':
                tokens.append(Token("DIV", "/", self.line_num))
                i += 1
            elif char == '=':
                tokens.append(Token("EQ", "=", self.line_num))
                i += 1
            elif char == '<':
                if i + 1 < len(self.input) and self.input[i+1] == '=':
                    tokens.append(Token("LE", "<=", self.line_num))
                    i += 1
                else:
                    tokens.append(Token("LT", "<", self.line_num))
                i += 1
            elif char == '>':
                if i + 1 < len(self.input) and self.input[i+1] == '=':
                    tokens.append(Token("GE", ">=", self.line_num))
                    i += 1
                else:
                    tokens.append(Token("GT", ">", self.line_num))
                i += 1
            else:
                self.report_syntax_error(f"Unrecognized character: {char}")
                i += 1
        tokens.append(Token("EOF", "EOF", self.line_num)) # End of File marker
        return tokens

    def get_next_token(self):
        if self.tokens:
            return self.tokens.pop(0)
        return Token("EOF", "EOF", self.line_num)

    def peek_next_token(self):
        if self.tokens:
            return self.tokens[0]
        return Token("EOF", "EOF", self.line_num)

```

---

### 5. Practice Questions and Exercises

**Question 1 (LO1):** What is the primary role of a syntax analyzer in a compiler, and why is it crucial for the compilation process?

**Question 2 (LO2):** Given the following TinyAda code snippet, identify the sequence of tokens that a lexer would produce:
`x : INTEGER;
x := 10 + y;`

**Question 3 (LO3):** Explain the difference between a parse tree and an Abstract Syntax Tree (AST). Which one is typically preferred for further compiler phases and why?

**Question 4 (LO4):** Describe the fundamental principle behind recursive descent parsing. What are the advantages and potential disadvantages of this parsing technique?

**Question 5 (LO5):** Consider the following TinyAda code:
`LOOP
  a := b + 5;
END LOOP;`
Trace the execution of the `parse_loop_statement` and `parse_assignment` procedures (conceptually, as shown in the code structure example) assuming the lexer produces the correct tokens. What AST nodes would be generated?

**Question 6 (Grammar Transformation):** The following grammar is left-recursive. Rewrite it to eliminate left recursion:
`list ::= list item | item`

**Question 7 (AST Construction):** For the TinyAda expression `a := x * (y + 10);`, sketch the Abstract Syntax Tree (AST) that a parser might construct.

---

### Answers to Practice Questions

**Answer 1:** The primary role of a syntax analyzer (parser) is to verify that the sequence of tokens produced by the lexer conforms to the grammatical rules of the programming language. It's crucial because it ensures the code is syntactically correct, detects syntax errors, and transforms the linear token stream into a structured representation (like an AST) that enables subsequent compiler phases (semantic analysis, code generation) to process the program effectively.

**Answer 2:**
The tokens would be:
`IDENTIFIER("x"), COLON, TYPE_INTEGER, SEMICOLON, IDENTIFIER("x"), ASSIGN_OP, INTEGER_LITERAL("10"), PLUS, IDENTIFIER("y"), SEMICOLON`
*(Note: The exact token names might vary slightly based on the lexer implementation, but the types and values should be consistent).*

**Answer 3:**
*   **Parse Tree:** Explicitly represents every step of the derivation according to the grammar rules. It includes all grammar symbols and the structure is directly tied to the grammar.
*   **Abstract Syntax Tree (AST):** A more abstract and concise representation that captures the essential program structure. It omits redundant information like punctuation and groupings.

ASTs are preferred because they are more compact, easier to traverse, and more directly represent the program's semantic meaning, making them ideal for semantic analysis and code generation.

**Answer 4:**
Recursive descent parsing involves creating a set of mutually recursive procedures, each corresponding to a non-terminal in the grammar. Each procedure is responsible for matching the sequence of tokens that represents its non-terminal.

*   **Advantages:** Relatively easy to understand and implement for grammars that are suitable (e.g., LL(1) grammars). Often hand-coded, offering flexibility.
*   **Disadvantages:** Can be inefficient if the grammar is not carefully designed (e.g., requires backtracking, or is left-recursive). Handling complex grammars can lead to deeply nested recursive calls.

**Answer 5:**
Given `LOOP a := b + 5; END LOOP;`
1.  `parse_program` calls `parse_statement_list`.
2.  `parse_statement_list` sees `LOOP` and calls `parse_statement`.
3.  `parse_statement` recognizes `LOOP` and calls `parse_loop_statement`.
4.  `parse_loop_statement` matches `LOOP`.
5.  It then calls `parse_statement_list` again to parse the statements inside the loop.
6.  `parse_statement_list` sees `IDENTIFIER("a")` and calls `parse_statement`.
7.  `parse_statement` sees `IDENTIFIER("a")` followed by `ASSIGN_OP` and calls `parse_assignment`.
8.  `parse_assignment` matches `IDENTIFIER("a")`, matches `ASSIGN_OP`.
9.  It calls `parse_expression`.
10. `parse_expression` calls `parse_term`.
11. `parse_term` calls `parse_factor` for `IDENTIFIER("b")`. `parse_factor` matches `IDENTIFIER("b")` and returns `IdentifierNode("b")`.
12. `parse_term` then calls `parse_term_prime` with `IdentifierNode("b")`. `parse_term_prime` sees `PLUS`, calls `parse_expression_prime`.
13. `parse_expression_prime` calls `parse_term` for `INTEGER_LITERAL("5")`. `parse_factor` matches `INTEGER_LITERAL("5")` and returns `IntegerLiteralNode(5)`.
14. `parse_term_prime` now has `right_node = IntegerLiteralNode(5)`. It creates `BinaryOpNode("+", IdentifierNode("b"), IntegerLiteralNode(5))` and calls `parse_term_prime` again.
15. The second `parse_term_prime` sees `SEMICOLON` (end of the assignment) and returns the `BinaryOpNode`.
16. `parse_assignment` then matches `SEMICOLON` and returns `AssignmentNode("a", BinaryOpNode("+", IdentifierNode("b"), IntegerLiteralNode(5)))`.
17. Control returns to `parse_loop_statement`'s `parse_statement_list`, which sees `END LOOP` and stops parsing statements for the loop.
18. `parse_loop_statement` matches `END LOOP`, matches `SEMICOLON`, and returns `LoopNode([AssignmentNode(...)])`.

The generated AST nodes would be: `LoopNode` containing an `AssignmentNode`, which in turn contains a `BinaryOpNode` with `IdentifierNode("b")` and `IntegerLiteralNode(5)` as its children.

**Answer 6:**
Original: `list ::= list item | item`
Eliminating left recursion:
`list ::= item list_prime`
`list_prime ::= item list_prime | epsilon`

**Answer 7:**
```
        :=
       /  \
      a    *
          / \
         x   +
            / \
           y   10
```
*(Note: The `+` node might be a `BinaryOpNode` and `a`, `x`, `y`, `10` would be `IdentifierNode` or `IntegerLiteralNode` respectively).*

---

### Important Points to Remember

*   The **lexer** and **parser** work hand-in-hand. The parser relies on the tokens provided by the lexer.
*   A well-defined **grammar** is the foundation of any syntax analyzer.
*   **Recursive descent parsing** is a popular technique due to its conceptual simplicity and ease of implementation for many grammars.
*   **Left recursion** must be eliminated from grammars before implementing predictive recursive descent parsers.
*   The **AST** is a critical intermediate representation that bridges the gap between syntactic correctness and semantic meaning.
*   **Error handling** is a crucial aspect of building robust parsers. Even if the input is syntactically incorrect, the parser should ideally report errors clearly and attempt to continue parsing to find more errors.
