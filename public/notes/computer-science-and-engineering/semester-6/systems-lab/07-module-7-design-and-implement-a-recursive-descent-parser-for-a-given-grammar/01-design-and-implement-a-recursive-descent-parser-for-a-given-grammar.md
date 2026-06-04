---
title: "Design and implement a recursive descent parser for a given grammar."
subject: "SYSTEMS LAB"
module: "Module 7: Design and implement a recursive descent parser for a given grammar."
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8c03c"
status: "completed"
scrapedAt: "2026-05-20T16:57:37.454Z"
---
# SYSTEMS LAB: Module 7 - Recursive Descent Parsing

## Topic: Design and Implement a Recursive Descent Parser for a Given Grammar

---

### 1. Introduction to Parsing

Parsing is a fundamental process in compilers and interpreters. It involves taking a sequence of tokens (produced by a lexer or scanner) and checking if they conform to the grammatical rules of a programming language. If they do, the parser constructs an internal representation, typically an Abstract Syntax Tree (AST), of the program.

**Key Concepts:**

*   **Lexer (Scanner):** Breaks the input program into a stream of tokens (e.g., identifiers, keywords, operators, literals).
*   **Parser:** Takes the token stream and builds a hierarchical structure representing the program's syntax.
*   **Grammar:** A formal set of rules that define the syntax of a language. Typically expressed using Backus-Naur Form (BNF) or Extended Backus-Naur Form (EBNF).
*   **Tokens:** The smallest meaningful units of the input.
*   **Abstract Syntax Tree (AST):** A tree representation of the program's structure, omitting syntactic details like punctuation and grouping symbols.

---

### 2. Understanding Context-Free Grammars (CFGs)

Recursive descent parsing is designed for grammars that are suitable for this approach. These are typically unambiguous, deterministic context-free grammars.

**Key Concepts:**

*   **Terminals:** The basic symbols of the language (e.g., `+`, `-`, `id`, `num`). These are the tokens produced by the lexer.
*   **Non-terminals:** Syntactic variables that represent a set of strings (e.g., `expression`, `statement`, `program`).
*   **Production Rules:** Define how non-terminals can be expanded into sequences of terminals and non-terminals.
    *   Format: `NonTerminal -> ProductionPart1 | ProductionPart2 | ...`
    *   `->` means "can derive"
    *   `|` means "or"
*   **Start Symbol:** A special non-terminal that represents the entire program.

**Example Grammar (Simple Arithmetic Expressions):**

```
E -> T E'
E' -> + T E' | ε
T -> F T'
T' -> * F T' | ε
F -> ( E ) | id
```

Where:
*   `E`, `E'`, `T`, `T'`, `F` are non-terminals.
*   `+`, `*`, `(`, `)`, `id` are terminals.
*   `ε` (epsilon) represents an empty string.
*   `E` is the start symbol.

---

### 3. Recursive Descent Parsing Strategy

Recursive descent parsing is a top-down parsing technique. It involves creating a set of mutually recursive functions, where each function corresponds to a non-terminal in the grammar.

**Core Idea:**

*   For each non-terminal `A`, create a function `parse_A()`.
*   Inside `parse_A()`, implement logic to recognize the sequences of tokens and recursive calls to other parsing functions that match the production rules for `A`.
*   The parser starts by calling the function for the start symbol.
*   The parser needs to know the current token from the input stream.

**Key Components:**

*   **Lookahead:** The parser needs to examine the next token in the input stream to decide which production rule to apply.
*   **Matching Terminals:** If a terminal is expected, the parser compares the current input token with the expected terminal. If they match, the token is consumed, and the parser advances to the next token. If they don't match, it's a syntax error.
*   **Handling Non-terminals:** If a non-terminal is expected, the parser calls the corresponding parsing function for that non-terminal.
*   **Handling Epsilon (`ε`):** If a production rule allows for an empty string (`ε`), the parsing function for that non-terminal simply returns without consuming any input tokens.

---

### 4. Designing a Recursive Descent Parser

**Steps:**

1.  **Grammar Analysis:**
    *   **Check for Left Recursion:** Recursive descent parsers cannot handle direct or indirect left recursion.
        *   **Direct Left Recursion:** `A -> A α` (e.g., `List -> List item`)
        *   **Indirect Left Recursion:** `A -> B α`, `B -> A β`
    *   **Eliminate Left Recursion:** Transform left-recursive grammars into equivalent right-recursive or iterative grammars.
        *   For `A -> A α | β` (where `β` does not start with `A`), transform to:
            `A -> β A'`
            `A' -> α A' | ε`
    *   **Check for Common Prefixes:** If a non-terminal has multiple production rules that start with the same sequence of terminals or non-terminals, the parser cannot decide which rule to follow based on a single token of lookahead (this requires LL(k) parsing).
    *   **Eliminate Common Prefixes:** Factor out common prefixes to ensure each production rule has a unique starting symbol.
        *   For `A -> α β | α γ`, transform to:
            `A -> α A'`
            `A' -> β | γ`

2.  **Create Parsing Functions:**
    *   For each non-terminal `N`, create a function `parse_N()`.
    *   Each function will take the current input token as an implicit or explicit parameter.
    *   Each function will return a boolean indicating success or failure, or perhaps build a part of the AST.

3.  **Implement Logic within Functions:**
    *   **Terminal Matching:** If a production rule requires a terminal `t`, check if `currentToken == t`. If yes, consume the token and advance. If no, report an error.
    *   **Non-terminal Invocation:** If a production rule requires a non-terminal `N`, call `parse_N()`.
    *   **Choice (Alternatives):** If a production rule has alternatives (`|`), use lookahead to decide which alternative to pursue.
        *   Examine `currentToken` and based on its value, decide which production part to follow.
        *   This is where the LL(1) property is crucial. Each alternative must be distinguishable by the first token it produces.
    *   **Epsilon Production:** If an alternative is `ε`, the function simply returns.

4.  **Token Management:**
    *   Maintain a global or passed-in pointer to the current token.
    *   Need a `nextToken()` or `consume(expectedToken)` function to advance the token stream.

---

### 5. Example: Parsing Arithmetic Expressions (LL(1) Grammar)

Let's use an LL(1) grammar for arithmetic expressions without left recursion:

```
E -> T E'
E' -> + T E' | ε
T -> F T'
T' -> * F T' | ε
F -> ( E ) | id
```

We'll assume we have a `currentToken` variable and functions `match(expectedToken)` and `error(message)`.

**Lexer Output (Example Input: `id + id * id`)**

Tokens: `id`, `+`, `id`, `*`, `id`, `$` (end of input marker)
`currentToken` will point to `id`.

```python
# Assume token types are strings like "+", "*", "(", ")", "id", "$"

currentToken = None
inputTokens = []
tokenIndex = 0

def initParser(tokens):
    global inputTokens, tokenIndex, currentToken
    inputTokens = tokens
    tokenIndex = 0
    currentToken = inputTokens[tokenIndex]

def advance():
    global tokenIndex, currentToken
    tokenIndex += 1
    if tokenIndex < len(inputTokens):
        currentToken = inputTokens[tokenIndex]
    else:
        currentToken = "$" # End of input marker

def match(expectedToken):
    if currentToken == expectedToken:
        advance()
        return True
    else:
        error(f"Expected '{expectedToken}' but found '{currentToken}'")
        return False

def error(message):
    print(f"Syntax Error: {message}")
    # In a real parser, you might want to exit or try error recovery

# --- Parsing Functions ---

# Corresponds to E -> T E'
def parse_E():
    print("Parsing E...")
    if parse_T():
        if parse_E_prime():
            return True
    return False

# Corresponds to E' -> + T E' | ε
def parse_E_prime():
    print("Parsing E_prime...")
    if currentToken == '+':
        if match('+'):
            if parse_T():
                if parse_E_prime():
                    return True
        return False # Error after matching '+'
    elif currentToken == '$' or currentToken == ')': # Epsilon production can be followed by end or closing paren
        # ε production
        return True
    else:
        # This case might indicate an error if the grammar requires something here
        # For this example, if it's not '+' or '$'/'(', it's unexpected in E'
        error(f"Unexpected token in E': {currentToken}")
        return False


# Corresponds to T -> F T'
def parse_T():
    print("Parsing T...")
    if parse_F():
        if parse_T_prime():
            return True
    return False

# Corresponds to T' -> * F T' | ε
def parse_T_prime():
    print("Parsing T_prime...")
    if currentToken == '*':
        if match('*'):
            if parse_F():
                if parse_T_prime():
                    return True
        return False # Error after matching '*'
    elif currentToken == '+' or currentToken == '$' or currentToken == ')': # Can be followed by E' or end/paren
        # ε production
        return True
    else:
        error(f"Unexpected token in T': {currentToken}")
        return False

# Corresponds to F -> ( E ) | id
def parse_F():
    print("Parsing F...")
    if currentToken == 'id':
        if match('id'):
            return True
    elif currentToken == '(':
        if match('('):
            if parse_E():
                if match(')'):
                    return True
        return False # Error after matching '(' or ')'
    else:
        error(f"Unexpected token in F: {currentToken}")
        return False

# --- Main Execution ---
def parse(tokens):
    initParser(tokens)
    if parse_E():
        if currentToken == '$': # Check for end of input
            print("Parsing successful!")
            return True
        else:
            error(f"Unexpected tokens after end of program: {currentToken}")
            return False
    else:
        print("Parsing failed.")
        return False

# Example Usage:
tokens_valid = ['id', '+', 'id', '*', 'id', '$']
print("--- Parsing valid input ---")
parse(tokens_valid)

tokens_invalid_paren = ['(', 'id', '$']
print("\n--- Parsing invalid input (missing closing paren) ---")
parse(tokens_invalid_paren)

tokens_invalid_op = ['id', '$', 'id']
print("\n--- Parsing invalid input (unexpected token) ---")
parse(tokens_invalid_op)
```

**Explanation of the Example:**

*   `parse_E()` is called first. It expects `E -> T E'`. So, it calls `parse_T()`.
*   `parse_T()` expects `T -> F T'`. It calls `parse_F()`.
*   `parse_F()` sees `currentToken == 'id'`, matches it, and returns `True`.
*   `parse_T()` continues, calling `parse_T_prime()`.
*   `parse_T_prime()` sees `currentToken == '+'`. This is not `*`, so it's an epsilon production. It returns `True`.
*   `parse_T()` returns `True`.
*   `parse_E()` continues, calling `parse_E_prime()`.
*   `parse_E_prime()` sees `currentToken == '+'`. It matches `+`, consumes it, and calls `parse_T()`.
*   This continues recursively until the entire input is consumed and all grammar rules are satisfied.

---

### 6. Handling Errors

Error handling is crucial in any parser. Common errors include:

*   **Unexpected Token:** The current token doesn't match any expected terminal.
*   **Missing Token:** The parser reaches the end of input (or a non-terminal's production) prematurely.
*   **Extra Tokens:** Tokens remain in the input after the entire program has been parsed.

**Simple Error Handling (Reporting):**

The `error()` function above simply prints a message. More sophisticated error handling involves:

*   **Error Recovery:** Attempting to continue parsing after an error to find more errors. Techniques include:
    *   **Panic Mode:** Discarding tokens until a synchronizing token (e.g., `;`, `}`) is found.
    *   **Phrase-Level Recovery:** Performing local corrections to the input (e.g., inserting a missing semicolon).

---

### 7. Advantages and Disadvantages of Recursive Descent Parsing

**Advantages:**

*   **Simplicity:** Relatively easy to understand and implement.
*   **Readability:** The code structure often closely mirrors the grammar.
*   **AST Generation:** Can easily incorporate AST building logic within parsing functions.
*   **Good Error Reporting:** Can often pinpoint the exact location of a syntax error.

**Disadvantages:**

*   **Grammar Restrictions:** Requires left-recursion-free and often LL(1) grammars.
*   **Performance:** Can be slower than table-driven parsers (like LR parsers) for very large grammars due to function call overhead.
*   **Predictability:** Not all grammars can be parsed efficiently with simple recursive descent.

---

### 8. Practice Questions

1.  **Grammar Transformation:**
    Given the following left-recursive grammar:
    ```
    A -> A x | y
    B -> A z | w
    ```
    Transform this grammar to eliminate left recursion and make it suitable for recursive descent parsing. Show the new grammar rules.

2.  **LL(1) Analysis:**
    Consider the following grammar:
    ```
    S -> A a | B b
    A -> c | d
    B -> e | f
    ```
    Is this grammar LL(1)? Explain why or why not.

3.  **Recursive Descent Logic:**
    Write the pseudocode for a recursive descent parsing function `parse_List` for the following grammar:
    ```
    List -> item List'
    List' -> , item List' | ε
    ```
    Assume you have a `currentToken` and functions `match(token)` and `error(message)`.

4.  **Error Scenario:**
    Suppose your recursive descent parser for the arithmetic expression grammar (from Section 5) is processing the input `id + ( id`. What would be the output of the `error` function, and why?

---

### 9. Answers to Practice Questions

1.  **Grammar Transformation:**
    The left-recursive rule `A -> A x | y` can be transformed.
    Let `A -> y A'`.
    Then `A' -> x A' | ε`.

    The transformed grammar is:
    ```
    A -> y A'
    A' -> x A' | ε
    B -> A z | w
    ```
    Now, `A` and `B` are not left-recursive. `A` can be parsed using `parse_A` and `parse_A_prime`. `B` can be parsed using `parse_B`.

2.  **LL(1) Analysis:**
    Yes, this grammar is LL(1).
    *   **For non-terminal `S`:** The production rules are `S -> A a` and `S -> B b`. The first tokens of these rules are `c` (from `A -> c`) and `e` (from `B -> e`). Since `c` and `e` are distinct, we can distinguish between these two rules based on the lookahead token.
    *   **For non-terminal `A`:** The production rules are `A -> c` and `A -> d`. The first tokens are `c` and `d`, which are distinct.
    *   **For non-terminal `B`:** The production rules are `B -> e` and `B -> f`. The first tokens are `e` and `f`, which are distinct.
    All non-terminals have production rules that can be distinguished by the first token.

3.  **Recursive Descent Logic (Pseudocode):**
    ```pseudocode
    function parse_List():
        if (currentToken == "item"):
            match("item")
            parse_List_prime()
        else:
            error("Expected 'item' for List")

    function parse_List_prime():
        if (currentToken == ","):
            match(",")
            if (currentToken == "item"):
                match("item")
                parse_List_prime()
            else:
                error("Expected 'item' after comma in List'")
        else if (currentToken == end_of_input or currentToken == some_other_terminal_that_can_follow_List):
            // ε production - do nothing
        else:
            error("Unexpected token in List'")
    ```
    *(Note: The specific terminals that can follow `List'` or `List` depend on the overall grammar context where `List` is used.)*

4.  **Error Scenario:**
    Input: `id + ( id`
    Lexer Output: `id`, `+`, `(`, `id`, `$`
    Current state: `currentToken` is `(`.

    The parser calls `parse_E()`.
    `parse_E()` calls `parse_T()`.
    `parse_T()` calls `parse_F()`.
    `parse_F()` sees `currentToken == 'id'`, matches `id`, calls `advance()`.
    Now `currentToken` is `+`.
    `parse_F()` returns `True`.
    `parse_T()` calls `parse_T_prime()`.
    `parse_T_prime()` sees `currentToken == '+'`. This is not `*` and not a valid follower of `T'` for epsilon. This would lead to an error or an unexpected token situation if not handled correctly by the epsilon rule's conditions. Assuming it correctly identifies epsilon.

    Let's trace `id + ( id`:
    1.  `parse_E()` -> `parse_T()` -> `parse_F()`
    2.  `parse_F()` sees `id`, matches `id`, `advance()`. `currentToken` is `+`.
    3.  `parse_T()` calls `parse_T_prime()`. `parse_T_prime()` sees `+`. `+` is not `*`, so it's an epsilon production. Returns `True`.
    4.  `parse_T()` returns `True`.
    5.  `parse_E()` calls `parse_E_prime()`.
    6.  `parse_E_prime()` sees `+`, matches `+`, `advance()`. `currentToken` is `(`.
    7.  `parse_E_prime()` calls `parse_T()`.
    8.  `parse_T()` calls `parse_F()`.
    9.  `parse_F()` sees `(`, matches `(`, `advance()`. `currentToken` is `id`.
    10. `parse_F()` calls `parse_E()`.
    11. `parse_E()` calls `parse_T()`.
    12. `parse_T()` calls `parse_F()`.
    13. `parse_F()` sees `id`, matches `id`, `advance()`. `currentToken` is `$`.
    14. `parse_F()` returns `True`.
    15. `parse_T()` calls `parse_T_prime()`. `parse_T_prime()` sees `$`. This is not `*`, so it's an epsilon production. Returns `True`.
    16. `parse_T()` returns `True`.
    17. `parse_E()` calls `parse_E_prime()`.
    18. `parse_E_prime()` sees `$`. This is not `+` and not a valid follower of `E'` for epsilon. The grammar expects `+ T E'` or `ε`. If `$` isn't in the follow set for `E'` allowing epsilon, it's an error.
    19. **Correct Error:** The most likely error occurs when the parser expects a `)` after parsing `E` inside `F -> ( E )`.
        After `parse_E()` returns `True` (from step 16), the `parse_F()` function that called it will expect to `match(')')`.
        However, `currentToken` is `$`.
        So, `match(')')` will fail.
        **Output of `error()`:** `Syntax Error: Expected ')' but found '$'`

---

### 10. Important Points to Remember

*   **Grammar First:** The design of your parser is dictated by the grammar. Always analyze and prepare the grammar first.
*   **Eliminate Left Recursion:** Crucial for recursive descent.
*   **Handle Common Prefixes:** Essential for LL(1) grammars and unambiguous decisions.
*   **Lookahead is Key:** Decisions are made based on the current token (and potentially more, though LL(1) uses just one).
*   **One Function Per Non-terminal:** This is the core structural principle.
*   **Token Consumption:** Ensure tokens are consumed correctly (`match` function) to advance the parsing process.
*   **Epsilon Productions:** Handle them gracefully; they don't consume input.
*   **Error Reporting:** Make error messages informative and include the expected vs. found tokens.
*   **End of Input:** Always check for the end-of-input marker (`$`) after the main parsing function returns to ensure the entire input was consumed.

---
