---
title: "From Regular Expression to Scanner: FSA (Brush-up only)"
subject: "COMPILER DESIGN"
module: "Module 1: Introduction "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8ba48"
status: "completed"
scrapedAt: "2026-05-20T16:51:07.549Z"
---
## Compiler Design - Module 1: Introduction - From Regular Expression to Scanner: FSA (Brush-up)

These notes provide a brush-up on the essential concepts required to understand how regular expressions are used to build scanners (lexical analyzers) in compilers, specifically focusing on Finite State Automata (FSA).

**Learning Outcomes:**

*   Understand the relationship between regular expressions and scanners.
*   Define and differentiate between Deterministic Finite Automata (DFA) and Non-deterministic Finite Automata (NFA).
*   Know how to convert a regular expression to an NFA.
*   Understand the process of converting an NFA to a DFA.
*   Apply the concepts to build a simple scanner.

**1. Regular Expressions and Scanners: The Big Picture**

*   **Compiler Phases:** Compilers perform several phases, including lexical analysis (scanning), syntax analysis (parsing), semantic analysis, intermediate code generation, optimization, and code generation.
*   **Scanner's Role:** The scanner, also known as the lexical analyzer, is the first phase of a compiler. It reads the source code character by character and groups them into meaningful units called *tokens*.
*   **Tokens:** Tokens represent basic building blocks of a programming language, such as keywords (`if`, `else`, `while`), identifiers (`variableName`, `functionName`), operators (`+`, `-`, `*`, `/`), literals (numbers, strings), and punctuation symbols (`;`, `(`, `)`).
*   **Regular Expressions as Specifications:** Scanners use regular expressions to define the patterns for recognizing each token type.  Regular expressions provide a concise and formal way to describe the lexical structure of programming languages.
*   **Example:** Consider the following C code:

    ```c
    int x = 10 + y;
    ```

    The scanner would break this down into the following tokens:

    *   `INT` (keyword)
    *   `ID` (identifier "x")
    *   `ASSIGN` (assignment operator "=")
    *   `NUMBER` (integer literal "10")
    *   `PLUS` (addition operator "+")
    *   `ID` (identifier "y")
    *   `SEMICOLON` (semicolon ";")

**2. Finite State Automata (FSA): The Implementation**

*   **Definition:** A Finite State Automaton (FSA) is a mathematical model of computation that consists of:
    *   A finite set of *states*.
    *   A finite set of *input symbols* (the alphabet).
    *   A *transition function* that defines how the FSA moves from one state to another based on the input symbol.
    *   A *start state*.
    *   A set of *accepting (or final) states*.
*   **Two Types of FSAs:**
    *   **Deterministic Finite Automaton (DFA):**
        *   For each state and input symbol, there is *exactly one* transition.
        *   There are no epsilon (ε) transitions (transitions that occur without consuming an input symbol).
    *   **Non-deterministic Finite Automaton (NFA):**
        *   For each state and input symbol, there may be *zero, one, or more* transitions.
        *   Epsilon (ε) transitions are allowed.
*   **Key Differences:**
    *   DFAs are easier to implement but NFAs are often easier to construct from regular expressions.
    *   For any language that can be recognized by an NFA, there exists a DFA that recognizes the same language.
    *   NFAs can be in multiple states simultaneously while a DFA is always in a single state.
*   **Example DFA (for recognizing integers):**

    ```
    States: {S0, S1}
    Alphabet: {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
    Start State: S0
    Accepting State: S1
    Transition Function:
        - S0, digit -> S1
        - S1, digit -> S1
    ```

    This DFA starts in state S0. If it reads a digit, it moves to state S1. Once in state S1, reading any digit keeps it in state S1. Therefore, it accepts any sequence of one or more digits (an integer).

**3. Regular Expression to NFA (Thompson's Construction)**

Thompson's construction provides a systematic way to convert a regular expression into an equivalent NFA. Here's a summary:

*   **Basic Symbols:**
    *   **ε (Epsilon):**  Create an NFA with two states, a start state and an accepting state, connected by an ε-transition.
    *   **a (Symbol 'a'):** Create an NFA with two states, a start state and an accepting state, connected by a transition labeled 'a'.

*   **Compound Regular Expressions:**
    *   **r | s (Union):**  Create a new start state and a new accepting state.  Add ε-transitions from the new start state to the start states of the NFAs for 'r' and 's'.  Add ε-transitions from the accepting states of the NFAs for 'r' and 's' to the new accepting state.
    *   **rs (Concatenation):** The accepting state of the NFA for 'r' becomes the start state of the NFA for 's'.
    *   **r* (Kleene Star):** Create a new start state and a new accepting state. Add ε-transitions from the new start state to the start state of the NFA for 'r' and to the new accepting state. Add ε-transitions from the accepting state of the NFA for 'r' to its own start state and to the new accepting state.
    *   **(r) (Parentheses):** The NFA for `(r)` is the same as the NFA for `r`.

*   **Example: Converting (a|b)*ab to NFA:**

    1.  **a:** NFA for 'a' (two states, 'a' transition).
    2.  **b:** NFA for 'b' (two states, 'b' transition).
    3.  **a|b:** Combine the NFAs for 'a' and 'b' using the union rule.
    4.  **(a|b)*:** Apply the Kleene star rule to the NFA for 'a|b'.
    5.  **ab:** NFA for 'a' concatenated with the NFA for 'b'.
    6.  **(a|b)*ab:** Concatenate the NFA for '(a|b)*' with the NFA for 'ab'.

    (You would draw out the NFA diagrams for each step to fully understand this. It's hard to represent graphically in markdown.)

**4. NFA to DFA Conversion (Subset Construction)**

The subset construction algorithm converts an NFA to a DFA.

*   **Algorithm Overview:**
    1.  **Epsilon Closure:**  The epsilon closure of a state `s` (denoted as `ε-closure(s)`) is the set of all states reachable from `s` by following only ε-transitions, including `s` itself.
    2.  **DFA States:** Each state in the DFA corresponds to a *set of states* from the NFA.
    3.  **DFA Start State:** The start state of the DFA is the epsilon closure of the start state of the NFA.
    4.  **DFA Transitions:**  For each DFA state `S` (which is a set of NFA states) and each input symbol `a`, calculate the set of NFA states reachable from `S` by following a transition on `a`, and then taking the epsilon closure of the resulting states.  This becomes a new DFA state.
    5.  **DFA Accepting States:** A DFA state `S` is an accepting state if it contains at least one NFA accepting state.
*   **Steps:**
    1.  Compute the epsilon closure of the NFA's start state. This becomes the DFA's start state.
    2.  For each DFA state created so far, and for each input symbol:
        *   Calculate the set of NFA states reachable from the DFA state by reading the input symbol.
        *   Compute the epsilon closure of the reachable states.
        *   If this epsilon closure is a new set of NFA states (not already a DFA state), create a new DFA state and add a transition from the current DFA state to the new DFA state labeled with the input symbol.
    3.  Repeat step 2 until no new DFA states are created.
    4.  Identify the accepting states in the DFA: any state that contains an accepting state from the original NFA is an accepting state.

*   **Example:** Convert the NFA resulting from (a|b)*ab to a DFA (This is a complex example, best done with diagrams):

    (Imagine the NFA from the previous step.)

    1.  Calculate the ε-closure of the NFA's start state (say, state 0). This becomes the DFA's start state, let's call it state A (A = {0, 1, 2, 4, 7}).
    2.  From state A:
        *   On input 'a':  Reachable states are {3, 8}.  ε-closure({3, 8}) = {3, 8, 9, 1, 2, 4, 6, 7}.  Create a new DFA state B (B = {3, 8, 9, 1, 2, 4, 6, 7}).
        *   On input 'b':  Reachable states are {5}. ε-closure({5}) = {5, 6, 1, 2, 4, 7}. Create a new DFA state C (C = {5, 6, 1, 2, 4, 7}).
    3.  From state B:
        *   On input 'a': Reachable states are {3, 8}. ε-closure({3, 8}) = {3, 8, 9, 1, 2, 4, 6, 7}. This is DFA state B (already created).
        *   On input 'b': Reachable states are {5, 10}. ε-closure({5, 10}) = {5, 6, 1, 2, 4, 7, 10}. Create a new DFA state D (D = {5, 6, 1, 2, 4, 7, 10}). Note: State 10 would be the accepting state in the NFA.
    4.  From state C:
        *   On input 'a': Reachable states are {3, 8}. ε-closure({3, 8}) = {3, 8, 9, 1, 2, 4, 6, 7}. This is DFA state B (already created).
        *   On input 'b': Reachable states are {5}. ε-closure({5}) = {5, 6, 1, 2, 4, 7}.  This is DFA state C (already created).
    5. From state D:
        *   On input 'a': Reachable states are {3, 8}. ε-closure({3, 8}) = {3, 8, 9, 1, 2, 4, 6, 7}. This is DFA state B (already created).
        *   On input 'b': Reachable states are {5}. ε-closure({5}) = {5, 6, 1, 2, 4, 7}.  This is DFA state C (already created).

    DFA states B and D contain the accepting state from the NFA (State 9 or 10 depending on which version of the NFA construction you are using). Therefore, states B and D are accepting states in the DFA.

**5. Building a Simple Scanner**

*   **Token Definitions:** First, define the regular expressions for each token type in your language. For example:

    *   `ID`: `[a-zA-Z][a-zA-Z0-9]*` (Identifier: starts with a letter, followed by letters or digits)
    *   `NUMBER`: `[0-9]+` (Integer literal: one or more digits)
    *   `PLUS`: `\+` (Plus operator)
    *   `ASSIGN`: `=` (Assignment operator)
    *   `WHITESPACE`: `[ \t\n\r]+` (Whitespace: spaces, tabs, newlines, carriage returns)

*   **Prioritization:**  If a string matches multiple regular expressions, you need a rule for determining which token is recognized. Common strategies:
    *   **Longest Match:** Choose the longest string that matches a regular expression.
    *   **Rule Priority:** Define an order for the regular expressions.  If multiple regexes match the same string, the regex with the higher priority wins.  Keywords often have higher priority than identifiers.

*   **Scanner Implementation:**
    1.  **Convert Regular Expressions to NFAs:** Convert each regular expression to an NFA using Thompson's construction.
    2.  **Combine NFAs:** Combine the NFAs into a single NFA.  Create a new start state and add ε-transitions from the new start state to the start states of each individual NFA.  Associate the final state of each NFA with the token type it recognizes.
    3.  **Convert to DFA:** Convert the combined NFA to a DFA using subset construction.
    4.  **Scanner Table:**  Represent the DFA as a table.  The rows represent states, the columns represent input symbols, and the entries in the table represent the next state.
    5.  **Scanning Loop:**  The scanner reads the input string character by character.  It starts in the DFA's start state.  For each character, it looks up the next state in the scanner table.  If it reaches an accepting state, it checks if it can consume more input to find a longer match.  If it cannot consume more input, it returns the token associated with the accepting state. If the DFA gets to a state with no transition on an input, the input is considered illegal.

*   **Example (Simplified):**

    ```python
    # Very simplified example - only recognizes identifiers and numbers

    def scan(input_string):
        tokens = []
        i = 0
        while i < len(input_string):
            if input_string[i].isalpha():  # Start of an identifier
                j = i + 1
                while j < len(input_string) and (input_string[j].isalnum()):
                    j += 1
                identifier = input_string[i:j]
                tokens.append(("ID", identifier))
                i = j
            elif input_string[i].isdigit():  # Start of a number
                j = i + 1
                while j < len(input_string) and input_string[j].isdigit():
                    j += 1
                number = input_string[i:j]
                tokens.append(("NUMBER", number))
                i = j
            elif input_string[i].isspace():
                i += 1 # Skip whitespace
            else:
                # Handle errors (illegal characters)
                print(f"Error: Illegal character '{input_string[i]}'")
                return None
        return tokens

    code = "int x = 10 + y;"  # For demonstration, ignoring keywords etc.
    result = scan(code)
    if result:
        print(result)
    ```

**6. Important Points to Remember**

*   Regular expressions are used to specify the lexical structure of programming languages.
*   Scanners convert a stream of characters into a stream of tokens based on the regular expressions.
*   Finite State Automata (NFAs and DFAs) are mathematical models used to implement scanners.
*   Thompson's construction converts regular expressions to NFAs.
*   Subset construction converts NFAs to DFAs.
*   DFAs are deterministic and easier to implement.
*   The scanner table represents the DFA and is used by the scanner to recognize tokens.
*   Prioritization is crucial when multiple regular expressions match the same input string.

**7. Practice Questions/Exercises**

1.  **Define:** What is a token? Give examples of tokens in Java or Python.
    *   *Answer:* A token is a basic building block of a programming language, representing a meaningful unit of code (e.g., keyword, identifier, operator, literal). Examples in Java: `int`, `myVariable`, `=`, `123`, `+`.
2.  **Differentiate:**  Explain the key differences between a DFA and an NFA.
    *   *Answer:* A DFA has exactly one transition for each state and input symbol, and no epsilon transitions. An NFA can have zero, one, or more transitions for each state and input symbol, and epsilon transitions are allowed. DFAs are deterministic; NFAs are non-deterministic.
3.  **Convert:**  Draw the NFA for the regular expression `(a|b)c*`. (Solution Requires Drawing)
4.  **Convert:** Convert the following NFA to DFA:

    ```
    NFA States: {0, 1, 2}
    Alphabet: {a, b}
    Start State: 0
    Accepting State: 2
    Transitions:
        0, a -> 0
        0, a -> 1
        1, b -> 2
    ```

    *   *Answer:*

        1.  ε-closure(0) = {0}. DFA state A = {0}.
        2.  From A:
            *   On 'a': reachable = {0, 1}.  DFA state B = {0, 1}.
            *   On 'b': reachable = {}. DFA state C = {}.
        3.  From B:
            *   On 'a': reachable = {0, 1}. DFA state B = {0,1} (already exists).
            *   On 'b': reachable = {2}. DFA state D = {2}.
        4.  From C:
             * On 'a': reachable = {}. DFA state C = {}. (already exists)
             * On 'b': reachable = {}. DFA state C = {}. (already exists)
        5. From D:
             * On 'a': reachable = {}. DFA state C = {}. (already exists)
             * On 'b': reachable = {}. DFA state C = {}. (already exists)

        DFA States: {A, B, C, D}
        Alphabet: {a, b}
        Start State: A
        Accepting State: D
        Transitions:
            A, a -> B
            A, b -> C
            B, a -> B
            B, b -> D
            C, a -> C
            C, b -> C
            D, a -> C
            D, b -> C
5.  **Explain:**  Why is it important to define priorities for regular expressions in a scanner?
    *   *Answer:*  Priorities are important because a single input string might match multiple regular expressions. The priorities determine which token is selected when there are multiple possible matches.  For example, a string that matches both a keyword regular expression and an identifier regular expression should be tokenized as a keyword due to keyword priority.

This brush-up should provide a good foundation for understanding the scanner phase in a compiler. Remember to practice converting regular expressions to NFAs and NFAs to DFAs to solidify your understanding.
