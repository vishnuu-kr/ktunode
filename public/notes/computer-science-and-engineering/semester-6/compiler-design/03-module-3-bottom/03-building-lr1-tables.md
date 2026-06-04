---
title: "Building LR(1) Tables"
subject: "COMPILER DESIGN"
module: "Module 3: Bottom"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8ba57"
status: "completed"
scrapedAt: "2026-05-20T16:51:16.812Z"
---
## Compiler Design: Module 3 - Bottom-Up Parsing: Building LR(1) Tables

**Description:** This module focuses on building LR(1) parsing tables, a crucial aspect of bottom-up parsing in compiler design.  LR(1) parsers are powerful and widely used in practice.

**Learning Outcomes:**

*   Understand the concepts of LR(0), SLR(1), and LR(1) grammars and their differences.
*   Construct LR(1) items and LR(1) canonical collection of sets of items.
*   Build the LR(1) parsing table from the LR(1) canonical collection of sets of items.
*   Explain the significance of lookahead in LR(1) parsing.
*   Identify conflicts (shift-reduce and reduce-reduce) and understand their implications.
*   Understand the limitations of LR(1) parsing and the need for more powerful parsers like LALR(1) in certain scenarios.

**1. Introduction to LR Parsing**

*   **Bottom-Up Parsing:** Starts with the input string and attempts to reduce it to the start symbol.
*   **LR Parsing:** A type of bottom-up parsing.  "L" stands for scanning the input from left to right, and "R" stands for constructing a rightmost derivation in reverse.
*   **Key Idea:**  The parser maintains a stack containing symbols and a lookahead token from the input.  It uses a parsing table to decide what action to take (shift or reduce).
*   **Advantages of LR Parsing:**
    *   Can detect syntax errors as soon as possible.
    *   More powerful than LL parsing.
    *   Can handle a wider range of grammars.

**2. LR(0) Items and Automata**

*   **LR(0) Item:**  A production with a dot (`.`) at some position in the right-hand side.  The dot indicates how much of the production we have seen so far.

    *   Example: `A -> XYZ`  becomes `A -> .XYZ`, `A -> X.YZ`, `A -> XY.Z`, `A -> XYZ.`

*   **Meaning of an LR(0) Item:**
    *   `A -> X.YZ` means we have seen `X` and expect to see a string derivable from `YZ` next.

*   **LR(0) Automaton (DFA):** Represents the possible states of the parser as it processes the input.  States are sets of LR(0) items.

*   **Construction of LR(0) Automaton:**
    1.  **Closure(I):**  For a set of items `I`, the closure is the set of items constructed as follows:
        *   Initially, every item in `I` is in `Closure(I)`.
        *   If `A -> α.Bβ` is in `Closure(I)` and `B -> γ` is a production, then add `B -> .γ` to `Closure(I)` if it's not already there.  Repeat until no more items can be added.
    2.  **Goto(I, X):**  For a set of items `I` and a grammar symbol `X`, `Goto(I, X)` is the closure of the set of items `A -> αX.β` such that `A -> α.Xβ` is in `I`.  Essentially, it represents the state the parser transitions to after seeing the symbol `X`.
    3.  **Initial State:**  If `S' -> S` is the augmented grammar (where S' is the new start symbol), the initial state is `Closure({S' -> .S})`.
    4.  **States and Transitions:**  Start with the initial state and repeatedly apply `Goto` to create new states and transitions until no more states can be created.

*   **Limitations of LR(0):**  Many grammars are not LR(0) because the LR(0) automaton may contain states with shift-reduce or reduce-reduce conflicts.  This means the parser cannot uniquely determine the correct action.

**3. SLR(1) Parsing**

*   **Follow Sets:**  Recall that `Follow(A)` is the set of terminals that can appear immediately to the right of non-terminal `A` in some sentential form.

*   **SLR(1) Parsing Table Construction:**
    1.  Construct the LR(0) automaton.
    2.  For each state `I` in the automaton:
        *   **Shift:** If `A -> α.aβ` is in `I` and `Goto(I, a) = J`, then set `action[I, a] = shift J` (where `a` is a terminal).
        *   **Reduce:** If `A -> α.` is in `I` and `A != S'`, then for all terminals `a` in `Follow(A)`, set `action[I, a] = reduce A -> α`.
        *   **Accept:** If `S' -> S.` is in `I`, then set `action[I, $] = accept` (where `$` is the end-of-input marker).
        *   **Goto:**  If `Goto(I, A) = J` (where `A` is a non-terminal), then set `goto[I, A] = J`.
        *   **Error:**  All other entries in the table are errors.

*   **Conflict Resolution in SLR(1):**  SLR(1) resolves conflicts by using the `Follow` sets.  It only reduces `A -> α` if the lookahead symbol is in `Follow(A)`.

*   **Limitations of SLR(1):** SLR(1) can still have conflicts if the `Follow` sets are too general.  Specifically, if a state contains `A -> α.` and `B -> β.aγ`, and `a` is in `Follow(A)`, a shift-reduce conflict will occur even if the context allows only one action.

**4. LR(1) Items and Automata**

*   **LR(1) Item:** An LR(0) item augmented with a lookahead terminal. `[A -> α.β, a]` where `a` is a terminal or `$`.

*   **Meaning of an LR(1) Item:** `[A -> α.β, a]` means we have seen `α` and expect to see `β` such that the lookahead is `a`. In other words,  `a` is the terminal that is expected to follow the string derived from `β`.

*   **LR(1) Automaton (DFA):**  States are sets of LR(1) items.

*   **Construction of LR(1) Automaton:**
    1.  **Closure(I):**  For a set of LR(1) items `I`:
        *   Initially, every item in `I` is in `Closure(I)`.
        *   If `[A -> α.Bβ, a]` is in `Closure(I)` and `B -> γ` is a production, then for each terminal `b` in `First(βa)`, add `[B -> .γ, b]` to `Closure(I)` if it's not already there.  `First(βa)` is the set of terminals that can begin a string derived from `βa`.  If `β` can derive the empty string (ε), then `a` is also in `First(βa)`.
        *   Repeat until no more items can be added.

    2.  **Goto(I, X):**  For a set of items `I` and a grammar symbol `X`, `Goto(I, X)` is the closure of the set of items `[A -> αX.β, a]` such that `[A -> α.Xβ, a]` is in `I`.

    3.  **Initial State:**  If `S' -> S` is the augmented grammar, the initial state is `Closure({[S' -> .S, $]})`.

    4.  **States and Transitions:**  Start with the initial state and repeatedly apply `Goto` to create new states and transitions until no more states can be created.

**5. LR(1) Parsing Table Construction**

*   From the constructed LR(1) automaton:
    1.  **Shift:** If `[A -> α.aβ, b]` is in `I` and `Goto(I, a) = J`, then `action[I, a] = shift J`.
    2.  **Reduce:** If `[A -> α., a]` is in `I` and `A != S'`, then `action[I, a] = reduce A -> α`.
    3.  **Accept:** If `[S' -> S., $]` is in `I`, then `action[I, $] = accept`.
    4.  **Goto:** If `Goto(I, A) = J` (where `A` is a non-terminal), then `goto[I, A] = J`.
    5.  **Error:** All other entries are errors.

*   **Conflict Resolution in LR(1):** LR(1) uses the lookahead symbols within the items themselves to resolve conflicts. Since each reduction specifies exactly which lookahead tokens allow the reduction, conflicts are much less likely.

**6. Conflicts in LR(1) Parsing**

*   **Shift-Reduce Conflict:**  A state contains items that allow both a shift and a reduce action for the same lookahead symbol.
*   **Reduce-Reduce Conflict:**  A state contains items that allow two different reduce actions for the same lookahead symbol.
*   **Significance:**  Conflicts indicate that the grammar is ambiguous or not LR(1). The parser will not be able to uniquely determine the correct action.  If conflicts exist, the grammar must be modified to resolve them or a more powerful parsing technique (like LALR(1) or GLR) must be employed.

**7. LALR(1) Parsing (Brief Mention)**

*   **Motivation:** LR(1) tables can be very large. LALR(1) (Look-Ahead LR) reduces the table size by merging LR(1) states that have the same core (i.e., the same LR(0) items), but possibly different lookahead sets.
*   **Process:**
    1.  Construct the LR(1) automaton.
    2.  Merge states with the same core.
    3.  Create the LALR(1) parsing table.
*   **Trade-Off:** LALR(1) is less powerful than LR(1), but the table size is significantly smaller. It can introduce *new* conflicts that were not present in the original LR(1) grammar, but generally doesn't.

**8. Comparison of LR(0), SLR(1), and LR(1)**

| Feature           | LR(0)                                     | SLR(1)                                  | LR(1)                                          |
| ----------------- | ----------------------------------------- | --------------------------------------- | ---------------------------------------------- |
| Lookahead         | No Lookahead                                | Uses Follow sets                          | Uses explicit lookahead symbols in items       |
| Power             | Least Powerful                             | More Powerful than LR(0)                   | Most Powerful (single lookahead)               |
| Table Size        | Smallest                                  | Small                                    | Largest                                          |
| Conflict Handling | Limited; Many Grammars Not LR(0)        | Uses Follow sets to resolve conflicts   | Uses lookahead symbols in items to resolve conflicts |
| Complexity        | Simplest to construct                    | Slightly more complex than LR(0)         | Most complex to construct                     |

**9. Important Points to Remember**

*   LR parsing is a powerful bottom-up parsing technique.
*   LR(0), SLR(1), and LR(1) represent increasing levels of power and complexity.
*   LR(1) uses explicit lookahead to resolve conflicts.
*   Conflicts indicate problems with the grammar.
*   LALR(1) is a practical compromise between power and table size.
*   Understanding `Closure` and `Goto` operations is crucial for constructing LR automata.

**10. Practice Questions/Exercises**

**Question 1:**  Consider the following grammar:

```
S -> AA
A -> aA | b
```

1.  Construct the LR(0) automaton for this grammar.
2.  Is this grammar LR(0)?  If not, why?
3.  Compute the Follow sets for all non-terminals.
4.  Construct the SLR(1) parsing table. Is this grammar SLR(1)?
5.  Construct the LR(1) automaton for this grammar.
6.  Construct the LR(1) parsing table. Is this grammar LR(1)?

**Answer 1:**

1.  **LR(0) Automaton:**

    State I0:
    ```
    S' -> .S
    S -> .AA
    ```
    Closure(I0):
    ```
    S' -> .S
    S -> .AA
    A -> .aA
    A -> .b
    ```

    State I1 = Goto(I0, S):
    ```
    S' -> S.
    ```

    State I2 = Goto(I0, A):
    ```
    S -> A.A
    A -> .aA
    A -> .b
    ```
    Closure(I2):
    ```
    S -> A.A
    A -> .aA
    A -> .b
    ```
    State I3 = Goto(I0, a):
    ```
    A -> a.A
    A -> .aA
    A -> .b
    ```
    Closure(I3):
    ```
    A -> a.A
    A -> .aA
    A -> .b
    ```

    State I4 = Goto(I0, b):
    ```
    A -> b.
    ```

    State I5 = Goto(I2, A):
    ```
    S -> AA.
    ```

    State I6 = Goto(I2, a): Same as I3

    State I7 = Goto(I2, b): Same as I4

    State I8 = Goto(I3, A):
    ```
    A -> aA.
    ```

    State I9 = Goto(I3, a): Same as I3

    State I10 = Goto(I3, b): Same as I4

2.  **Not LR(0):** State I4 contains the item `A -> b.`, and state I2 contains `A -> .aA`, `A -> .b`. So, if we were in I2 and the next input was b, we would have to choose between shifting and reducing without lookahead. Therefore it is not LR(0). I3 and states reachable from I3 have the same problem.

3.  **Follow Sets:**

    *   Follow(S) = {$}
    *   Follow(A) = {a, b, $}

4.  **SLR(1) Parsing Table:**

| State | a          | b          | $          | S   | A   |
| ----- | ---------- | ---------- | ---------- | --- | --- |
| 0     | s3         | s4         |            | 1   | 2   |
| 1     |            |            | accept     |     |     |
| 2     | s3         | s4         |            |     | 5   |
| 3     | s3         | s4         |            |     | 8   |
| 4     | r2         | r2         | r2         |     |     |
| 5     |            |            | r1         |     |     |
| 8     |            |            | r3         |     |     |

sX means shift to state X.
rY means reduce by production Y.

*Production number is as follows:*
1: S -> AA
2: A -> b
3: A -> aA

**SLR(1) Conflict**:  In State 4:
*   A -> b.
*   The follow set for A = {a,b,$}.
*   So the action[4,a] = r2, action[4,b] = r2, action[4,$] = r2.

In State 8:
*   A -> aA.
*   The follow set for A = {a,b,$}.
*   So the action[8,a] = r3, action[8,b] = r3, action[8,$] = r3.

No conflicts present in the SLR(1) table. So the grammar **is SLR(1)**.

5. **LR(1) Automaton Construction.**  This is left as an exercise for the reader, as it is a lengthy process.

6.  **LR(1) Parsing Table Construction.** Once the LR(1) automaton is created, creating the table follows directly, as shown in the notes.  Since the SLR(1) table has no conflicts, it is likely the LR(1) grammar also has no conflicts. Note however, that this can't be assumed.

**Question 2:** Explain the difference between LR(0), SLR(1) and LR(1) parsers. Focus on how they handle conflicts.

**Answer 2:**

*   **LR(0):** LR(0) parsers make parsing decisions without looking at any lookahead symbols. This is its main limitation. If a state in the LR(0) automaton contains both a shift and a reduce item, or two reduce items, a shift-reduce or reduce-reduce conflict arises. Since it has no lookahead, it cannot resolve these. Many grammars are therefore not LR(0).
*   **SLR(1):** SLR(1) parsers attempt to resolve conflicts in LR(0) automata by using Follow sets. When a state contains a reduce item `A -> α.`, the parser will only perform the reduction if the next input symbol (lookahead) is in `Follow(A)`. This helps resolve some conflicts, but if a lookahead is both in `Follow(A)` and can trigger a shift in the same state, a conflict still exists.
*   **LR(1):** LR(1) parsers are more powerful. They use LR(1) items, which include explicit lookahead symbols as part of the state. Each item is of the form `[A -> α.β, a]`, indicating that `a` is the expected lookahead after reducing `A -> αβ`. This provides a more precise context, allowing LR(1) parsers to resolve conflicts that SLR(1) cannot. A conflict only occurs if the same lookahead symbol triggers conflicting actions (shift or reduce) within the *same* LR(1) state.

**Question 3:**  Why are LR(1) parsers preferred over LR(0) in real-world compiler design scenarios? What are the disadvantages of LR(1) parsers, and what compromise do LALR(1) parsers offer?

**Answer 3:**

*   **Why LR(1) over LR(0):** LR(1) parsers are generally preferred over LR(0) in real-world compiler design because they can handle a much wider range of grammars without encountering conflicts.  The use of lookahead provides more contextual information, enabling the parser to make more accurate decisions and avoid errors. In effect, LR(1) parses most programming languages whereas LR(0) does not.

*   **Disadvantages of LR(1):**  The main disadvantage of LR(1) parsers is the size of the parsing tables.  The number of states in the LR(1) automaton can be significantly larger than in the LR(0) automaton, leading to a substantial increase in table size. This can consume significant memory resources, especially for complex grammars. LR(1) implementation can also be slower due to more complex state management.

*   **LALR(1) as a Compromise:** LALR(1) (Look-Ahead LR) parsers offer a compromise between the power of LR(1) and the smaller table size of LR(0) or SLR(1). They achieve this by merging LR(1) states that have the same core (the same LR(0) items), but potentially different lookahead sets. While this reduces table size, it can potentially introduce *new* reduce-reduce conflicts that were not present in the original LR(1) grammar. LALR(1) parsers are widely used in practice because they provide a good balance between parsing power and resource consumption. Yacc and Bison are well known parser generators that generate LALR(1) parsers.

These study notes cover the core concepts of building LR(1) tables and the related parsing techniques. Understanding the differences between LR(0), SLR(1), and LR(1), and their trade-offs, is essential for compiler design. Remember to practice constructing LR automata and parsing tables to solidify your understanding. Good luck!
