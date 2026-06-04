---
title: "Reducing the Size of LR (1) Tables"
subject: "COMPILER DESIGN"
module: "Module 3: Bottom"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8ba59"
status: "completed"
scrapedAt: "2026-05-20T16:51:18.248Z"
---
# Compiler Design: Module 3 - Bottom-Up Parsing - Reducing the Size of LR(1) Tables

These notes cover techniques to reduce the size of LR(1) parsing tables, making them more practical for implementation. LR(1) parsers offer good error detection and handle a wide range of grammars, but their large tables can be a significant drawback.

**Learning Outcomes:**

*   Understand the limitations of LR(1) parsing due to table size.
*   Explain the concept of LALR(1) parsing and its relationship to LR(1) parsing.
*   Describe the algorithm for constructing LALR(1) parsing tables.
*   Identify grammars that are LALR(1) but not SLR(1) and LR(1) but not LALR(1).
*   Understand the concept of canonical collection of LR(0) items and how it's used in LALR(1) parsing.
*   Describe the concept of merging states in LALR(1) parser generation.
*   Explain the potential for conflicts (shift/reduce or reduce/reduce) arising during LALR(1) construction.
*   Be able to manually construct LALR(1) parsing tables for small grammars.
*   Understand the use of parser generators (e.g., Yacc, Bison) and how they handle LR(1) and LALR(1) grammars.

## 1. The Problem: LR(1) Table Size

*   **LR(1) parsers** are powerful but often generate very large parsing tables.  This is because each state in the LR(1) DFA contains items of the form `[A -> α.β, a]`, where 'a' is a lookahead symbol.  The different lookahead sets cause many distinct states to be created, even if the core productions (A -> α.β) are the same.

*   **Space Complexity:** The number of states in an LR(1) parser can grow exponentially with the size of the grammar. This makes them impractical for real-world programming languages.

*   **Example:** Consider a grammar with many non-terminals and productions. The LR(1) DFA will have a state for each production potentially active in each position, coupled with a specific lookahead.  This combinatorial explosion leads to a large number of states and, consequently, a large parsing table.

## 2.  LALR(1) Parsing: A Compromise

*   **LALR(1) (Look-Ahead LR(1))** parsing is a method that attempts to reduce the size of the LR(1) parsing table by merging states that have the same core (i.e., the same productions, but different lookahead sets).

*   **Key Idea:** If two LR(1) states have the same productions (A -> α.β) but different lookahead symbols, we can merge them into a single LALR(1) state whose lookahead set is the union of the individual lookahead sets.

*   **Trade-off:** LALR(1) parsers are typically smaller than LR(1) parsers but can still handle a large class of grammars. They are less powerful than LR(1) in that they may fail to parse some grammars that LR(1) can handle, but the trade-off for space is worthwhile.

## 3. Constructing LALR(1) Parsing Tables

The construction process involves these steps:

1.  **Construct the LR(1) item sets:**  Generate the sets of LR(1) items using the standard LR(1) construction algorithm (CLOSURE and GOTO).

2.  **Merge states with identical cores:**  Iterate through the LR(1) states and find states that have the same core productions (i.e., the productions ignoring the lookahead symbols).  Merge these states into a single state. The lookahead sets for the merged state become the union of the lookahead sets of the original states.

3.  **Construct the LALR(1) parsing table:**
    *   The states of the LALR(1) table are the merged states from step 2.
    *   The actions and gotos are determined as follows:
        *   **Shift:** If a merged state *s* contains an item `[A -> α.aβ, b]`, where *a* is a terminal, and `GOTO(s, a) = s'`, then the action for state *s* on input *a* is *shift s'*.
        *   **Reduce:** If a merged state *s* contains an item `[A -> α., a]`, where *A -> α* is a production rule, then the action for state *s* on input *a* is *reduce A -> α*.  If A is the start symbol and a is '$' (end of input), then the action is *accept*.
        *   **Goto:**  If `GOTO(s, A) = s'`, where *A* is a non-terminal, then the goto entry for state *s* on non-terminal *A* is *s'*.
4.  **Handle Conflicts:** Check for shift/reduce and reduce/reduce conflicts in the constructed table.  Conflicts indicate that the grammar is not LALR(1).

**Example:**

Let's say we have two LR(1) states:

*   State I<sub>i</sub>: { [S -> L. = R, $], [L -> *R, $] }
*   State I<sub>j</sub>: { [S -> L. = R, =], [L -> *R, =] }

These two states have the same core: { [S -> L. = R], [L -> *R] }.

We merge them into a single LALR(1) state:

*   State I<sub>ij</sub>: { [S -> L. = R, $, =], [L -> *R, $, =] }

## 4. Conflicts in LALR(1) Parsers

*   **Shift/Reduce Conflicts:** A state contains both a shift item `[A -> α.aβ, b]` and a reduce item `[B -> γ., a]`, and `a = b`.
*   **Reduce/Reduce Conflicts:** A state contains two reduce items `[A -> α., a]` and `[B -> β., a]`.

*   **Important:** Merging states in LALR(1) parsing *can* introduce new conflicts that were not present in the original LR(1) grammar.  This happens when the lookahead sets of the merged states cause incompatible actions. However, if the *core* LR(0) automaton has no conflicts then merging the lookaheads will not create conflicts.

## 5. LR(0) Items and Canonical Collection

*   **LR(0) Item:** An LR(0) item is a production with a dot `.` at some position in the right-hand side, representing how much of the production we have seen so far. Lookahead symbols are *not* considered.

*   **Canonical Collection of LR(0) Items:** A collection of sets of LR(0) items representing the possible states of an LR(0) DFA.

*   **Relationship to LALR(1):** LALR(1) parsing can be seen as constructing the canonical collection of LR(0) items and then adding appropriate lookahead symbols to each item.  The merging process involves combining states in the LR(0) automaton that have the same core LR(0) items but different lookahead information.

## 6. Grammar Hierarchy: SLR(1) vs. LALR(1) vs. LR(1)

*   **SLR(1) ⊆ LALR(1) ⊆ LR(1)**

    *   Every SLR(1) grammar is also an LALR(1) grammar.
    *   Every LALR(1) grammar is also an LR(1) grammar.
    *   The reverse is not always true.

*   **SLR(1) limitations:** SLR(1) uses FOLLOW sets to determine reduce actions, which can be too general and lead to unnecessary conflicts.

*   **LALR(1) is more powerful than SLR(1)** because it uses more precise lookahead information derived from the LR(1) item sets. This allows it to handle more grammars without conflicts.

*   **Example of a Grammar that is LALR(1) but not SLR(1):**

    ```
    S -> a A d | b B d | a B e | b A e
    A -> q
    B -> q
    ```

    SLR(1) has a conflict on input `q` because FOLLOW(A) and FOLLOW(B) both contain `d` and `e`.  Therefore, when parsing `a q d`, SLR(1) doesn't know whether to reduce `q` to `A` or `B` after seeing `q` with `d` lookahead.  LALR(1) resolves this ambiguity because it uses more precise lookahead sets derived from the LR(1) item sets, avoiding the conflict.

*   **Example of a Grammar that is LR(1) but not LALR(1):**  (This is more complex and less common in practice.  Such a grammar is often contrived for demonstration purposes.)  These grammars are rare because they typically require very specific context that is only distinguishable with full LR(1) lookahead.

## 7. Parser Generators (Yacc, Bison)

*   **Yacc (Yet Another Compiler-Compiler) and Bison:**  Tools that generate parsers from a formal grammar specification.

*   **Grammar Specification:** You provide a grammar in a specific format (typically BNF-like), along with actions (usually in C or C++) to be performed when a rule is recognized.

*   **Parser Generation:** Yacc/Bison analyzes the grammar and generates C/C++ code for the parser (usually a table-driven LALR(1) parser by default).

*   **Conflict Resolution:**  If the grammar is not LALR(1), Yacc/Bison will report shift/reduce and reduce/reduce conflicts.  It usually resolves shift/reduce conflicts by choosing to shift by default, and reduce/reduce conflicts by choosing the earlier rule in the grammar specification.  **Important:** These default resolutions might not be correct and can lead to unexpected parsing behavior.  It's crucial to understand the grammar and conflicts to ensure the parser behaves as intended.

*   **Specifying Parser Type:** Bison allows you to specify the parser type (e.g., `%glr-parser` for Generalized LR, which can handle ambiguous grammars, though at a performance cost; or `%lalr 1.0` for LALR(1)).

## 8.  Practice Questions/Exercises

1.  **Consider the following grammar:**
    ```
    S -> A a | b A c | B c | a B a
    A -> d
    B -> d
    ```
    *   Is this grammar SLR(1)? Explain your answer.
    *   Is this grammar LALR(1)? Explain your answer.
    *   If this grammar has any conflicts, explain which conflicts and for what states and tokens.
2.  **Given the following LR(1) states, merge them to create an LALR(1) state:**
    *   State 1: { [S -> L. = R, $], [L -> *R, $] }
    *   State 2: { [S -> L. = R, =], [L -> *R, =] }
    *   State 3: { [R -> L., $], [L -> *R, $] }
    *   State 4: { [R -> L., =], [L -> *R, =] }
    What LALR(1) states result from merging these?

3.  **Why are LALR(1) parsers more commonly used than LR(1) parsers in practice?**

**Answers:**

1.  *   **SLR(1)?** No.  FOLLOW(A) = {a, c} and FOLLOW(B) = {c, a}. When parsing "d", you don't know if you are seeing production A-> d or B-> d. This is a reduce/reduce conflict.
    *   **LALR(1)?** Potentially yes, if after the construction of the LR(1) item sets and merging, no conflicts arise.
    *   **Conflicts:** Reduce/Reduce conflict when trying to decide between reducing d -> A or d -> B when the input is d and the lookahead is a or c.

2.  *   State 12: { [S -> L. = R, $, =], [L -> *R, $, =] } (Merged States 1 and 2)
    *   State 34: { [R -> L., $, =], [L -> *R, $, =] } (Merged States 3 and 4)

3.  LALR(1) parsers are more commonly used due to their significantly smaller table sizes compared to LR(1) parsers. They strike a balance between parsing power and implementation complexity, making them suitable for many real-world programming languages.

## 9. Important Points to Remember

*   LALR(1) is a compromise between the power of LR(1) and the size of SLR(1).
*   Merging states in LALR(1) can introduce conflicts not present in the original LR(1) grammar.
*   Yacc/Bison are powerful tools for generating LALR(1) parsers, but understanding conflict resolution is crucial for correctness.
*   The LR(0) automaton forms the core of LALR(1) parser generation.
*   SLR(1) ⊆ LALR(1) ⊆ LR(1)
