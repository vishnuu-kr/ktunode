---
title: "Backtrack-free Parsing"
subject: "COMPILER DESIGN"
module: "Module 2: Parsing "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8ba50"
status: "completed"
scrapedAt: "2026-05-20T16:51:12.522Z"
---
## COMPILER DESIGN - Module 2: Parsing - Backtrack-free Parsing

**Learning Outcomes:**

*   Understand the concept of backtracking in parsing.
*   Identify the limitations of backtracking parsers.
*   Define backtrack-free parsing and its advantages.
*   Explain LL(k) parsing and its relationship to backtrack-free parsing.
*   Understand the concepts of FIRST and FOLLOW sets and their use in LL(1) parsing.
*   Construct FIRST and FOLLOW sets for a given grammar.
*   Construct LL(1) parsing tables.
*   Perform parsing using an LL(1) parsing table.
*   Identify and resolve conflicts in LL(1) parsing tables.
*   Understand left factoring and left recursion elimination.

---

### 1. Introduction to Parsing and Backtracking

*   **Parsing:** The process of analyzing a string of symbols (input) and determining its grammatical structure with respect to a given formal grammar. It essentially builds a parse tree or syntax tree.

*   **Top-Down Parsing:**  Starts with the start symbol of the grammar and tries to derive the input string by successively expanding non-terminals.

*   **Bottom-Up Parsing:**  Starts with the input string and tries to reduce it to the start symbol of the grammar by repeatedly applying grammar rules in reverse.

*   **Backtracking:** A technique used in top-down parsing where, if a production rule leads to a dead end (i.e., cannot generate the input string), the parser returns to a previous state (backtracks) and tries a different production rule.

    *   **Mechanism:** When the parser encounters a mismatch during the derivation, it rewinds to the last point where a choice was made (the last non-terminal expansion) and tries a different alternative.

    *   **Example:**

        Grammar:
        ```
        S -> aAd | aBe
        A -> bc
        B -> bb
        ```
        Input: `abbde`

        1.  Parser starts with `S`.
        2.  Applies `S -> aAd`: `aAd`
        3.  Applies `A -> bc`: `abc d`
        4.  Mismatch with input at `d`.
        5.  Backtracks to step 2.
        6.  Applies `S -> aBe`: `aBe`
        7.  Applies `B -> bb`: `abb e`
        8.  Mismatch with input at `e`.
        9. Backtracks to step 6 and finds no alternative.
        The parse fails even though 'abbde' is not a valid string with respect to the grammar.
        *Note: There is an error in the input string provided in the example. The input string "abbde" is not accepted by any of the production rules.*

### 2. Limitations of Backtracking Parsers

*   **Inefficiency:** Backtracking can be extremely inefficient, especially for complex grammars and long input strings. The parser might try many incorrect paths before finding the correct one (or determining that none exist).  Exponential time complexity in the worst case.

*   **Code Complexity:** Implementing backtracking parsers can be complicated, requiring mechanisms for saving and restoring parser states.

*   **Debugging Difficulty:**  Tracing the execution of a backtracking parser and identifying errors can be challenging.

*   **Practical Limitations:**  Not suitable for real-world compilers due to performance concerns.

### 3. Backtrack-free Parsing

*   **Definition:**  A parsing technique where the parser can determine the correct production rule to apply based on a limited number of lookahead symbols without needing to backtrack.

*   **Advantages:**

    *   **Efficiency:** Backtrack-free parsers are significantly more efficient than backtracking parsers (usually linear time complexity).
    *   **Simplicity:** Easier to implement and debug.
    *   **Predictability:**  The parser's behavior is predictable, making it easier to reason about its correctness.

*   **LL(k) Parsing:**  A type of top-down, backtrack-free parsing that uses `k` lookahead symbols to decide which production rule to apply. "L" stands for scanning the input from Left to Right, "L" stands for producing a Leftmost derivation, and "k" denotes the number of lookahead symbols.

### 4. LL(k) Parsing and LL(1) Parsing

*   **LL(k) Grammar:** A grammar that can be parsed by an LL(k) parser.

*   **LL(1) Parsing:** A specific type of LL(k) parsing where `k = 1`. The parser uses only one lookahead symbol to make parsing decisions.  It is the most commonly used and easiest to implement LL parser.

*   **LL(1) Parser Requirements:**  A grammar must satisfy certain conditions to be LL(1).  This usually requires the grammar to be unambiguous, left-factored, and free of left recursion.

*   **Advantages of LL(1):**
    *   Simple to implement.
    *   Efficient parsing (linear time).
    *   Suitable for many practical programming languages.

### 5. FIRST and FOLLOW Sets

*   **FIRST(α):**  The set of terminal symbols that can begin strings derived from α, where α is any string of terminals and non-terminals.  If α can derive ε (the empty string), then ε is also in FIRST(α).

*   **FOLLOW(A):**  The set of terminal symbols that can immediately follow the non-terminal A in some sentential form (a string of terminals and non-terminals derivable from the start symbol).  If A can be the rightmost symbol in a sentential form, then $ (end-of-input marker) is in FOLLOW(A).

*   **Computing FIRST Sets:**

    1.  **If X is a terminal:** `FIRST(X) = {X}`.
    2.  **If X -> ε is a production:** `ε ∈ FIRST(X)`.
    3.  **If X -> Y1 Y2 ... Yk is a production:**
        *   `FIRST(Y1) ⊆ FIRST(X)`
        *   If `ε ∈ FIRST(Y1)`, then `FIRST(Y2) ⊆ FIRST(X)`
        *   If `ε ∈ FIRST(Y1), FIRST(Y2), ..., FIRST(Yi)` for all `i < k`, then `FIRST(Yk) ⊆ FIRST(X)`
        *   If `ε ∈ FIRST(Y1) ∩ FIRST(Y2) ∩ ... ∩ FIRST(Yk)` then `ε ∈ FIRST(X)`

*   **Computing FOLLOW Sets:**

    1.  If S is the start symbol, then `$ ∈ FOLLOW(S)`.
    2.  If A -> αBβ is a production, then `FIRST(β) - {ε} ⊆ FOLLOW(B)`.
    3.  If A -> αB is a production, or A -> αBβ is a production and `ε ∈ FIRST(β)`, then `FOLLOW(A) ⊆ FOLLOW(B)`.

*   **Example:**

    Grammar:

    ```
    E -> T E'
    E' -> + T E' | ε
    T -> F T'
    T' -> * F T' | ε
    F -> ( E ) | id
    ```

    **FIRST Sets:**

    *   `FIRST(E) = FIRST(T) = FIRST(F) = { (, id }`
    *   `FIRST(E') = { +, ε }`
    *   `FIRST(T') = { *, ε }`

    **FOLLOW Sets:**

    *   `FOLLOW(E) = { $, ) }`
    *   `FOLLOW(E') = { $, ) }`
    *   `FOLLOW(T) = { +, $, ) }`
    *   `FOLLOW(T') = { +, $, ) }`
    *   `FOLLOW(F) = { *, +, $, ) }`

### 6. LL(1) Parsing Tables

*   **Construction:** An LL(1) parsing table is a two-dimensional array that guides the parser's actions based on the current non-terminal and the lookahead symbol.

*   **Rows:** Non-terminals
*   **Columns:** Terminals and the end-of-input marker ($)
*   **Entries:** Production rules or error indicators

*   **Algorithm for constructing LL(1) Parsing Table:**

    1.  For each production `A -> α`:
        *   For each terminal `a` in `FIRST(α)`, add `A -> α` to `Table[A, a]`.
        *   If `ε ∈ FIRST(α)`, then for each terminal `b` in `FOLLOW(A)`, add `A -> α` to `Table[A, b]`.
        *   If `ε ∈ FIRST(α)` and `$ ∈ FOLLOW(A)`, add `A -> α` to `Table[A, $]`.
    2.  All undefined entries in the table are marked as "error".

*   **Example:**  Using the grammar and FIRST/FOLLOW sets from the previous example:

    ```
    Grammar:
    E -> T E'
    E' -> + T E' | ε
    T -> F T'
    T' -> * F T' | ε
    F -> ( E ) | id

    FIRST Sets:
    *   FIRST(E) = FIRST(T) = FIRST(F) = { (, id }
    *   FIRST(E') = { +, ε }
    *   FIRST(T') = { *, ε }

    FOLLOW Sets:
    *   FOLLOW(E) = { $, ) }
    *   FOLLOW(E') = { $, ) }
    *   FOLLOW(T) = { +, $, ) }
    *   FOLLOW(T') = { +, $, ) }
    *   FOLLOW(F) = { *, +, $, ) }
    ```

    **LL(1) Parsing Table:**

    | Non-Terminal | id         | +          | *          | (          | )          | $          |
    | :----------- | :--------- | :--------- | :--------- | :--------- | :--------- | :--------- |
    | E            | E -> T E' |            |            | E -> T E' |            |            |
    | E'           |            | E' -> + T E'|            |            | E' -> ε    | E' -> ε    |
    | T            | T -> F T' |            |            | T -> F T' |            |            |
    | T'           |            | T' -> ε     | T' -> * F T'|            | T' -> ε     | T' -> ε     |
    | F            | F -> id    |            |            | F -> ( E ) |            |            |

### 7. Parsing with an LL(1) Parsing Table

*   **Algorithm:**

    1.  Initialize the stack with the start symbol and the end-of-input marker `$`.
    2.  Read the first input symbol.
    3.  Repeat until the stack is empty:
        *   Let `X` be the top symbol on the stack and `a` be the current input symbol.
        *   **If X is a terminal or `$`:
                *   If `X == a`, pop `X` from the stack and advance the input.
                *   Else, error (mismatch).
            *   **Else (X is a non-terminal):**
                *   Consult `Table[X, a]`.
                *   If `Table[X, a]` contains `X -> Y1 Y2 ... Yk`:
                    *   Pop `X` from the stack.
                    *   Push `Yk, Yk-1, ..., Y1` onto the stack (in that order).
                *   Else, error (no production found).
    4.  If the stack is empty and the input is exhausted, parsing is successful.

*   **Example:** Parsing the input `id + id * id $` using the table above.

    | Stack       | Input             | Action                                     |
    | :---------- | :---------------- | :----------------------------------------- |
    | `E $`       | `id + id * id $`  | E -> T E'                                |
    | `T E' $`     | `id + id * id $`  | T -> F T'                                |
    | `F T' E' $`   | `id + id * id $`  | F -> id                                 |
    | `id T' E' $`  | `id + id * id $`  | Match `id`                               |
    | `T' E' $`    | `+ id * id $`     | T' -> ε                                  |
    | `E' $`       | `+ id * id $`     | E' -> + T E'                              |
    | `+ T E' $`   | `+ id * id $`     | Match `+`                                |
    | `T E' $`     | `id * id $`      | T -> F T'                                |
    | `F T' E' $`   | `id * id $`      | F -> id                                 |
    | `id T' E' $`  | `id * id $`      | Match `id`                               |
    | `T' E' $`    | `* id $`         | T' -> * F T'                              |
    | `* F T' E' $` | `* id $`         | Match `*`                                |
    | `F T' E' $`   | `id $`           | F -> id                                 |
    | `id T' E' $`  | `id $`           | Match `id`                               |
    | `T' E' $`    | `$`              | T' -> ε                                  |
    | `E' $`       | `$`              | E' -> ε                                  |
    | `$`          | `$`              | Match `$`                                |
    |              |                  | Parsing successful                       |

### 8. Conflicts in LL(1) Parsing Tables

*   **Definition:** A conflict occurs when an entry in the LL(1) parsing table contains more than one production rule. This means the parser cannot unambiguously determine which production to apply based on the current non-terminal and the lookahead symbol.

*   **Types of Conflicts:**

    *   **FIRST/FIRST Conflict:**  Occurs when two productions `A -> α` and `A -> β` have overlapping `FIRST` sets (i.e., `FIRST(α) ∩ FIRST(β) ≠ ∅`).

    *   **FIRST/FOLLOW Conflict:** Occurs when a production `A -> α` has `ε ∈ FIRST(α)` and `FIRST(α) ∩ FOLLOW(A) ≠ ∅`. This means the parser cannot decide whether to use `A -> α` or a production that derives a terminal in `FOLLOW(A)`.

*   **Example:**

    Grammar:

    ```
    S -> i E t S E' | a
    E' -> e S | ε
    E -> b
    ```

    LL(1) Parsing Table (partial):

    | Non-Terminal | e         |
    | :----------- | :--------- |
    | E'           | E' -> e S  |
    |              | E' -> ε    |

    Conflict:  `Table[E', e]` contains both `E' -> e S` and `E' -> ε` (FIRST/FOLLOW conflict because e is in FOLLOW(E')).

### 9. Resolving Conflicts: Left Factoring and Left Recursion Elimination

*   **Left Factoring:**  A grammar transformation technique used to remove common prefixes from production rules.  It eliminates FIRST/FIRST conflicts.

    *   **Mechanism:**  If you have productions `A -> αβ1 | αβ2`, replace them with:
        *   `A -> αA'`
        *   `A' -> β1 | β2`

    *   **Example:**

        Original Grammar:
        ```
        S -> i E t S E' | i E t S
        ```

        Left-Factored Grammar:
        ```
        S -> i E t S S'
        S' -> E' | ε
        ```

*   **Left Recursion Elimination:**  A grammar transformation technique used to remove left recursion (where a non-terminal directly or indirectly derives itself as its leftmost symbol). Eliminates FIRST/FOLLOW conflicts in the case of directly left recursive productions.

    *   **Direct Left Recursion:**  A production of the form `A -> Aα`.
    *   **Indirect Left Recursion:**  A derivation sequence where `A =>+ Aα`.

    *   **Algorithm for Eliminating Direct Left Recursion:**

        If you have a production `A -> Aα | β` (where β does not start with A), replace it with:

        *   `A -> βA'`
        *   `A' -> αA' | ε`

    *   **Example:**

        Original Grammar:
        ```
        E -> E + T | T
        ```

        Left-Recursion-Eliminated Grammar:
        ```
        E -> T E'
        E' -> + T E' | ε
        ```

*   **Important Note:**  Applying left factoring and left recursion elimination does *not* guarantee that a grammar will become LL(1).  It only removes certain types of conflicts and makes it *more likely* to be LL(1).

### 10.  Important Points to Remember

*   Backtrack-free parsing is essential for efficient compiler design.
*   LL(1) parsing is a common and practical approach to backtrack-free parsing.
*   FIRST and FOLLOW sets are crucial for constructing LL(1) parsing tables.
*   Left factoring and left recursion elimination are grammar transformations that can help resolve conflicts in LL(1) parsing tables.
*   Not all grammars can be transformed into LL(1) grammars. Other parsing techniques (e.g., LR parsing) might be necessary.

---

### Practice Questions/Exercises

1.  **Calculate the FIRST and FOLLOW sets for the following grammar:**

    ```
    S -> A B C
    A -> a | ε
    B -> b | ε
    C -> c
    ```

    **Answer:**

    *   FIRST(S) = {a, b, c, ε}
    *   FIRST(A) = {a, ε}
    *   FIRST(B) = {b, ε}
    *   FIRST(C) = {c}
    *   FOLLOW(S) = {$}
    *   FOLLOW(A) = {b, c}
    *   FOLLOW(B) = {c}
    *   FOLLOW(C) = {$}

2.  **Construct the LL(1) parsing table for the grammar in question 1. Identify any conflicts.**

    **Answer:**

    | Non-Terminal | a         | b         | c         | $         |
    | :----------- | :-------- | :-------- | :-------- | :-------- |
    | S            | S -> A B C| S -> A B C| S -> A B C|            |
    | A            | A -> a    | A -> ε    | A -> ε    |            |
    | B            |           | B -> b    | B -> ε    |            |
    | C            |           |           | C -> c    |            |

    Conflicts:
    * Table[S,a]: `S -> ABC`
    * Table[S,b]: `S -> ABC`
    * Table[S,c]: `S -> ABC`
    * Table[A,b]: `A -> ε`
    * Table[A,c]: `A -> ε`
    * Table[B,c]: `B -> ε`

3.  **Is the following grammar LL(1)? Why or why not?**

    ```
    S -> i E t S | i E t S e S
    E -> b
    ```

    **Answer:**

    No, it is not LL(1). The grammar suffers from FIRST/FIRST conflict.  Both productions for S start with `i E t S`, making it impossible for the parser to decide which production to apply based on a single lookahead symbol.

4.  **Left factor the grammar in question 3.**

    **Answer:**

    ```
    S -> i E t S S'
    S' -> e S | ε
    E -> b
    ```

5. **Is the following grammar left recursive? If so, eliminate the left recursion.**

    ```
    E -> E + T | T
    T -> T * F | F
    F -> id
    ```

    **Answer:**

    Yes, both `E` and `T` are left-recursive.

    Eliminated Left Recursion:

    ```
    E -> T E'
    E' -> + T E' | ε
    T -> F T'
    T' -> * F T' | ε
    F -> id
