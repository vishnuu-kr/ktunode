---
title: "Graphs"
subject: "COMPILER DESIGN"
module: "Module 3: Bottom"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8ba5d"
status: "completed"
scrapedAt: "2026-05-20T16:51:21.073Z"
---
# Compiler Design: Module 3 - Bottom-Up Parsing: Graphs

## Introduction

This module delves into the use of graphs within the context of bottom-up parsing. Graphs are used to represent relationships between grammar symbols, predict possible reductions, and analyze the parser's state. Understanding these graph-based representations is crucial for comprehending the inner workings of bottom-up parsers.

## Learning Outcomes

Upon completion of this module, you will be able to:

*   Understand the role of graphs in bottom-up parsing.
*   Explain and construct First and Follow sets.
*   Define and construct the DFA (Deterministic Finite Automaton) for valid items.
*   Explain the purpose and use of the GOTO function.
*   Apply First, Follow, and GOTO functions in bottom-up parsing algorithms.

## 1. Role of Graphs in Bottom-Up Parsing

*   **Representing Dependencies:** Graphs help visualize dependencies between grammar symbols and productions. This allows us to understand how symbols derive other symbols and how productions can be reduced based on input.
*   **Predicting Reductions:** By analyzing the relationships within the grammar, graphs help predict which reductions are possible based on the current state of the parser's stack and the lookahead token.
*   **Analyzing Parser States:** DFAs represent the different states the parser can be in based on the input it has seen and the possible next actions.  These states are crucial for determining when to shift or reduce.
*   **Guiding Parsing Actions:** The GOTO function, which is often represented in a table, uses the current state and the input symbol to determine the next state, guiding the parser through the input.

## 2. First and Follow Sets

### 2.1. First Sets

*   **Definition:**  For a grammar symbol X (terminal or non-terminal), `First(X)` is the set of terminals that can begin any string derived from X.

*   **Formal Definition:**
    *   If X is a terminal, then `First(X) = {X}`.
    *   If X is a non-terminal and X -> aβ is a production, where 'a' is a terminal, then add 'a' to `First(X)`.
    *   If X is a non-terminal and X -> ε is a production, then add ε to `First(X)`.
    *   If X is a non-terminal and X -> Y1 Y2 ... Yk is a production, then for each i (1 <= i <= k)
        *   Add everything in `First(Y1)` to `First(X)` (except ε).
        *   If `First(Y1)` contains ε, then add everything in `First(Y2)` to `First(X)` (except ε).
        *   If `First(Y1)`, `First(Y2)`, ..., `First(Yi-1)` all contain ε, then add everything in `First(Yi)` to `First(X)` (except ε).
        *   If `First(Y1)`, `First(Y2)`, ..., `First(Yk)` all contain ε, then add ε to `First(X)`.
*   **Example:**

    ```
    E -> TE'
    E' -> +TE' | ε
    T -> FT'
    T' -> *FT' | ε
    F -> (E) | id
    ```

    *   `First(F) = { (, id }`
    *   `First(T') = { *, ε }`
    *   `First(T) = { (, id }`
    *   `First(E') = { +, ε }`
    *   `First(E) = { (, id }`

*   **Algorithm:**

    1.  Initialize `First(X)` to {} for all symbols X.
    2.  Apply the rules above repeatedly until no more terminals or ε can be added to any `First(X)`.

### 2.2. Follow Sets

*   **Definition:** For a non-terminal A, `Follow(A)` is the set of terminals that can immediately follow A in any sentential form.

*   **Formal Definition:**
    *   If A is the start symbol, then add $ (end marker) to `Follow(A)`.
    *   If A -> αBβ is a production, then add everything in `First(β)` to `Follow(B)` (except ε).
    *   If A -> αB is a production, or A -> αBβ is a production and `First(β)` contains ε, then add everything in `Follow(A)` to `Follow(B)`.

*   **Example (using the same grammar as above):**

    ```
    E -> TE'
    E' -> +TE' | ε
    T -> FT'
    T' -> *FT' | ε
    F -> (E) | id
    ```

    *   `Follow(E) = { ), $ }`
    *   `Follow(E') = { ), $ }`
    *   `Follow(T) = { +, ), $ }`
    *   `Follow(T') = { +, ), $ }`
    *   `Follow(F) = { *, +, ), $ }`

*   **Algorithm:**

    1.  Initialize `Follow(A)` to {} for all non-terminals A.
    2.  Apply the rules above repeatedly until no more terminals can be added to any `Follow(A)`.

*   **Important Notes about First and Follow:**
    *   First sets are used for predictive parsing (top-down).
    *   Follow sets are used primarily for error recovery and bottom-up parsing to determine when a reduction should occur.
    *   Calculating these sets is usually an iterative process.

### 2.3 Practice Questions (First and Follow)

**Question 1:** Calculate the First and Follow sets for the following grammar:

```
S -> aBDh
B -> cC
C -> bC | ε
D -> EF
E -> g | ε
F -> a | ε
```

**Answer 1:**

*   **First Sets:**
    *   `First(S) = {a}`
    *   `First(B) = {c}`
    *   `First(C) = {b, ε}`
    *   `First(D) = {g, a, ε}`
    *   `First(E) = {g, ε}`
    *   `First(F) = {a, ε}`
*   **Follow Sets:**
    *   `Follow(S) = {$}`
    *   `Follow(B) = {g, a, h}`
    *   `Follow(C) = {g, a, h}`
    *   `Follow(D) = {h}`
    *   `Follow(E) = {a, h}`
    *   `Follow(F) = {h}`

**Question 2:** Calculate the First and Follow sets for the following grammar:

```
A -> B C
B -> b | ε
C -> c | D
D -> d | ε
```

**Answer 2:**

*   **First Sets:**
    *   `First(A) = {b, c, d, ε}`
    *   `First(B) = {b, ε}`
    *   `First(C) = {c, d, ε}`
    *   `First(D) = {d, ε}`
*   **Follow Sets:**
    *   `Follow(A) = {$}`
    *   `Follow(B) = {c, d, $}`
    *   `Follow(C) = {$}`
    *   `Follow(D) = {$}`

## 3. DFA for Valid Items (LR(0) Items)

*   **Definition: LR(0) Item:** An LR(0) item is a production rule with a dot (.) at some position in the right-hand side. The dot signifies how much of the production we have already seen.

    *   Example:  For the production `A -> XYZ`, the LR(0) items are:
        *   `A -> .XYZ`
        *   `A -> X.YZ`
        *   `A -> XY.Z`
        *   `A -> XYZ.`

*   **Augmented Grammar:** Add a new start symbol S' and a production S' -> S, where S is the original start symbol. This ensures the starting state of the DFA corresponds to the entire grammar.

*   **Closure Operation:**

    *   If `A -> α.Bβ` is in the set of items (state), then add `B -> .γ` for all productions `B -> γ` to the set of items.  Repeat this process until no new items can be added. This represents all productions that could potentially be reduced *next* if we see a 'B'.

*   **Goto Function:**

    *   `Goto(I, X)` where I is a set of items and X is a grammar symbol (terminal or non-terminal).
    *   Move the dot past X in all items in I that have the form `A -> α.Xβ` and then take the closure of the resulting set of items.

*   **Constructing the DFA:**

    1.  Start with the initial state I0, which is the closure of the item `S' -> .S`.
    2.  For each state Ii in the DFA, and for each grammar symbol X, compute `Goto(Ii, X)`.
    3.  If `Goto(Ii, X)` is a new state, add it to the DFA.
    4.  Repeat steps 2 and 3 until no new states or transitions can be added.

*   **Example:**

    ```
    Grammar:
    S' -> E
    E -> E + T
    E -> T
    T -> T * F
    T -> F
    F -> ( E )
    F -> id
    ```

    1.  **Initial State I0:** `closure({S' -> .E}) = { S' -> .E, E -> .E + T, E -> .T, T -> .T * F, T -> .F, F -> .( E ), F -> .id }`
    2.  **Goto(I0, E):**  `closure({S' -> E., E -> E. + T}) = { S' -> E., E -> E. + T }`
    3.  **Goto(I0, T):**  `closure({E -> T., T -> T. * F}) = { E -> T., T -> T. * F }`
    4.  **Goto(I0, F):**  `closure({T -> F.}) = { T -> F. }`
    5.  **Goto(I0, '('):**  `closure({F -> (.E)}) = { F -> (.E), E -> .E + T, E -> .T, T -> .T * F, T -> .F, F -> .( E ), F -> .id }`
    6.  **Goto(I0, id):**  `closure({F -> id.}) = { F -> id. }`

    And so on, continue to compute the GOTO for the new states until no new states are generated.  The resulting states and transitions form the DFA.

## 4. GOTO Function

*   **Definition:** The GOTO function, `GOTO(I, X)`, where `I` is a set of items (state) and `X` is a grammar symbol, represents the transition from state `I` to a new state by "consuming" the symbol `X`. It essentially simulates the parser shifting `X` onto the stack.

*   **Purpose:** Guides the parser from one state to another based on the input symbol.  It is crucial for determining the next action the parser should take (shift or reduce).

*   **Representation:** Typically represented as a table. The rows of the table represent the states of the DFA, and the columns represent grammar symbols.  The entry `GOTO[i, X]` indicates the next state the parser should transition to from state `i` upon seeing symbol `X`.

*   **Use:**  The GOTO table is consulted after a shift action. The current state and the shifted symbol are used as input to the GOTO table to determine the next state.  This state is then pushed onto the stack.

*   **Example:** Using the DFA from the previous example (slightly simplified), the GOTO table might look like this (using arbitrary state numbers):

    | State | E   | T   | F   | (   | id  | +   | *   |
    | :---- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
    | 0     | 1   | 2   | 3   | 4   | 5   |     |     |
    | 1     |     |     |     |     |     | 6   |     |
    | 2     |     |     |     |     |     |     | 7   |
    | 3     |     |     |     |     |     |     |     |
    | ...   | ... | ... | ... | ... | ... | ... | ... |

## 5. Applying First, Follow, and GOTO in Bottom-Up Parsing Algorithms (LR Parsing)

*   **LR Parsing Algorithms (LR(0), SLR(1), LALR(1), CLR(1)):**  These algorithms use the DFA (with LR(0) items), First and Follow sets, and GOTO function to perform bottom-up parsing. They differ primarily in how they resolve shift/reduce and reduce/reduce conflicts.

*   **General LR Parsing Algorithm:**

    1.  Initialize the stack with state 0 (the initial state of the DFA).
    2.  Repeat until the stack contains only the start symbol S' and the input is empty:
        *   Let `s` be the state on the top of the stack, and `a` be the next input symbol.
        *   Consult the parsing table (ACTION table). The parsing table entry `ACTION[s, a]` can be one of the following:
            *   `shift s'`:  Push symbol `a` and state `s'` onto the stack. Advance the input pointer.
            *   `reduce A -> β`:  Pop 2 * |β| symbols from the stack (β and the corresponding states). Let `s'` be the state now on the top of the stack.  Push `A` onto the stack and then push `GOTO[s', A]` onto the stack.  Output the production `A -> β`.
            *   `accept`:  Parsing is complete and successful.
            *   `error`:  Syntax error.
    3.  If the stack contains S' and the input is empty, the parsing is successful.

*   **Using First and Follow Sets:**

    *   **SLR(1):** SLR(1) uses the Follow sets to resolve reduce/reduce and shift/reduce conflicts in the LR(0) DFA.  A reduction `A -> β` is performed *only* if the next input symbol `a` is in `Follow(A)`.

*   **Role of GOTO:** After a reduction `A -> β`, the parser needs to determine the new state to push onto the stack. This is where the GOTO function comes in. The GOTO function maps the current state (the state now on the top of the stack after the pop) and the non-terminal symbol `A` to the new state.

*   **Example (Simplified SLR(1) Parsing):**

    Let's say the parser is in state `s`, the next input symbol is `a`, and `ACTION[s, a] = reduce A -> β`.

    1.  The parser pops `2 * |β|` elements from the stack (the symbols of `β` and the corresponding states).
    2.  Let `s'` be the state now on the top of the stack.
    3.  The parser pushes `A` onto the stack.
    4.  The parser pushes `GOTO[s', A]` onto the stack.  This value comes directly from the GOTO table.

## 6. Important Points to Remember

*   **First and Follow sets** are critical for understanding the possible derivations and predicting reduction actions.
*   The **DFA for valid items** represents the different states the parser can be in.
*   The **GOTO function** is a table that maps states and grammar symbols to new states, guiding the parser.
*   **LR parsing algorithms** use these concepts to perform efficient bottom-up parsing.
*   Understanding **shift/reduce and reduce/reduce conflicts** is essential for designing unambiguous grammars and choosing appropriate parsing techniques.
*   The different LR parsing algorithms (LR(0), SLR(1), LALR(1), CLR(1)) offer varying levels of precision and complexity in resolving conflicts.

## Practice Exercises

**Exercise 1:**  Given the following grammar:

```
S -> A a
A -> B | C
B -> b
C -> c
```

1.  Calculate the First and Follow sets for all non-terminals.
2.  Construct the LR(0) DFA.
3.  Create the GOTO table.

**Exercise 2:** Given the grammar

```
S -> E $
E -> T + E
E -> T
T -> int * T
T -> int
```

1.  Compute the First and Follow sets.
2.  Construct the LR(0) automaton for this grammar.
3.  Explain the shift-reduce conflict present in the LR(0) automaton.  How would SLR(1) resolve this conflict?

**Note:**  Solving these exercises requires understanding and applying the concepts covered in these notes. It is recommended to work through these examples carefully to solidify your understanding of bottom-up parsing using graphs.  The complexity lies in constructing the LR(0) automaton; First and Follow are important for understanding conflicts and how those conflicts might be resolved by SLR(1). The ACTION table, implicitly derived from the LR(0) automaton, is the crux of these problems.
