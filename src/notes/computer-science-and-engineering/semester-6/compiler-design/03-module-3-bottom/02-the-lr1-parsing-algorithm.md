---
title: "The LR(1) Parsing Algorithm"
subject: "COMPILER DESIGN"
module: "Module 3: Bottom"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8ba56"
status: "completed"
scrapedAt: "2026-05-20T16:51:16.101Z"
---
## COMPILER DESIGN - Module 3: Bottom-Up Parsing - The LR(1) Parsing Algorithm

These notes cover the LR(1) parsing algorithm, a crucial concept in bottom-up parsing for compiler design.

**Learning Outcomes:**

*   Understand the concept of LR(1) items and LR(1) grammar.
*   Construct the canonical collection of sets of LR(1) items for a given grammar.
*   Construct the LR(1) parsing table.
*   Explain the working of the LR(1) parsing algorithm.
*   Differentiate LR(1) from SLR(1) and LALR(1) parsing.
*   Identify grammars that are LR(1) but not SLR(1).
*   Understand the limitations of LR(1) parsing.

---

**1. Key Concepts and Definitions:**

*   **Bottom-Up Parsing:** A parsing strategy where we start from the input string and try to reduce it to the start symbol of the grammar. This involves identifying handles (the right-hand side of a production that can be reduced to the left-hand side) and reducing them.
*   **LR Parsing:** A powerful bottom-up parsing technique that can handle a large class of context-free grammars. "LR" stands for Left-to-right scan of the input, Rightmost derivation in reverse.
*   **LR(k) Parser:**  An LR parser that uses *k* tokens of lookahead to make parsing decisions.  LR(1) uses one lookahead token.
*   **Item (or LR Item):**  A production with a dot (`.`) at some position in the right-hand side. It indicates how much of the production we have seen so far.
    *   Example: For production `A -> XYZ`, the possible items are:
        *   `A -> .XYZ`
        *   `A -> X.YZ`
        *   `A -> XY.Z`
        *   `A -> XYZ.`
*   **LR(1) Item:** An LR(0) item augmented with a lookahead terminal symbol.  It's written as `[A -> α.β, a]`, where:
    *   `A -> α.β` is an LR(0) item.
    *   `a` is a terminal symbol or `$`, called the lookahead.  `$` represents the end of the input string.
    *   The item `[A -> α.β, a]` means we've seen `α` on the input, and we expect to see `β` followed by `a`. If we see α and β, we can reduce to A only if the next input symbol is `a`.
*   **LR(1) Grammar:** A grammar for which an LR(1) parsing table can be constructed without any conflicts (shift-reduce or reduce-reduce).
*   **Canonical Collection of Sets of LR(1) Items:** A set of states representing all possible configurations of the parser during the parsing process. Each state is a set of LR(1) items.
*   **Closure Operation:**  The `CLOSURE` operation expands a set of LR(1) items to include all items that can be derived from the items in the set.  Specifically, if `[A -> α.Bβ, a]` is in the set, and `B -> γ` is a production, then `[B -> .γ, b]` is added to the set for each terminal `b` in `FIRST(βa)`.
*   **Goto Operation:** The `GOTO` operation defines the transition from one set of LR(1) items to another on a given grammar symbol.  `GOTO(I, X)` where I is a set of items and X is a grammar symbol, is the closure of the set of all items `[A -> αX.β, a]` such that `[A -> α.Xβ, a]` is in `I`.

**2. Constructing the Canonical Collection of Sets of LR(1) Items:**

1.  **Augment the Grammar:** Add a new start symbol `S'` and a production `S' -> S`, where `S` is the original start symbol.
2.  **Initial State:** The initial state `I0` is the closure of the item `[S' -> .S, $]`.
3.  **Iterative Process:**  Repeat the following steps until no new states are added:
    *   For each state `I` in the collection and for each grammar symbol `X` (terminal or non-terminal):
        *   Compute `GOTO(I, X)`.
        *   If `GOTO(I, X)` is not already in the collection, add it to the collection.

**Example:**

Consider the grammar:

```
S -> CC
C -> aC
C -> d
```

1.  **Augmented Grammar:**

```
S' -> S
S -> CC
C -> aC
C -> d
```

2.  **Initial State I0:**

```
I0 = CLOSURE({[S' -> .S, $]})
   = {[S' -> .S, $],
      [S -> .CC, $],
      [C -> .aC, a/d],  //FIRST(C$) = {a,d}
      [C -> .d, a/d]}   //FIRST(C$) = {a,d}
```

3. **Compute other states by GOTO(I,X)**

*   `GOTO(I0, S) = CLOSURE({[S' -> S., $]}) = {[S' -> S., $]}`  (I1)
*   `GOTO(I0, C) = CLOSURE({[S -> C.C, $]}) = {[S -> C.C, $], [C -> .aC, $], [C -> .d, $]}` (I2)
*   `GOTO(I0, a) = CLOSURE({[C -> a.C, a/d]}) = {[C -> a.C, a/d], [C -> .aC, a/d], [C -> .d, a/d]}` (I3)
*   `GOTO(I0, d) = CLOSURE({[C -> d., a/d]}) = {[C -> d., a/d]}` (I4)
*   `GOTO(I2, C) = CLOSURE({[S -> CC., $]}) = {[S -> CC., $]}` (I5)
*   `GOTO(I2, a) = CLOSURE({[C -> a.C, $]}) = {[C -> a.C, $], [C -> .aC, $], [C -> .d, $]}` (I6)
*   `GOTO(I2, d) = CLOSURE({[C -> d., $]}) = {[C -> d., $]}` (I7)
*   `GOTO(I3, C) = CLOSURE({[C -> aC., a/d]}) = {[C -> aC., a/d]}` (I8)
*   `GOTO(I3, a) = CLOSURE({[C -> a.C, a/d]}) = {[C -> a.C, a/d], [C -> .aC, a/d], [C -> .d, a/d]}` (I9)
*   `GOTO(I3, d) = CLOSURE({[C -> d., a/d]}) = {[C -> d., a/d]}` (I4)
*   `GOTO(I6, C) = CLOSURE({[C -> aC., $]}) = {[C -> aC., $]}` (I10)
*   `GOTO(I6, a) = CLOSURE({[C -> a.C, $]}) = {[C -> a.C, $], [C -> .aC, $], [C -> .d, $]}` (I6)
*   `GOTO(I6, d) = CLOSURE({[C -> d., $]}) = {[C -> d., $]}` (I7)
*   `GOTO(I9, C) = CLOSURE({[C -> aC., a/d]}) = {[C -> aC., a/d]}` (I8)
*   `GOTO(I9, a) = CLOSURE({[C -> a.C, a/d]}) = {[C -> a.C, a/d], [C -> .aC, a/d], [C -> .d, a/d]}` (I9)
*   `GOTO(I9, d) = CLOSURE({[C -> d., a/d]}) = {[C -> d., a/d]}` (I4)

**3. Constructing the LR(1) Parsing Table:**

The LR(1) parsing table consists of two parts:

*   **Action Table:** `ACTION[state, terminal]` specifies what action the parser should take for a given state and input terminal.  Possible actions are:
    *   `shift s`: Shift the current input terminal onto the stack and go to state `s`.
    *   `reduce r`: Reduce the symbols on the top of the stack according to production number `r`.
    *   `accept`: Accept the input string.
    *   `error`: Indicate a syntax error.
*   **Goto Table:** `GOTO[state, non-terminal]` specifies the next state to go to after a reduction.

**Construction Algorithm:**

1.  **From the canonical collection of sets of LR(1) items, construct the parsing actions as follows:**

    *   If `[A -> α.aβ, b]` is in `Ii` and `GOTO(Ii, a) = Ij`, then set `ACTION[i, a] = shift j`.  Here `a` is a terminal.
    *   If `[A -> α., a]` is in `Ii` and `A != S'`, then set `ACTION[i, a] = reduce k`, where `k` is the production number `A -> α`.
    *   If `[S' -> S., $]` is in `Ii`, then set `ACTION[i, $] = accept`.
    *   If any conflicts arise (shift-reduce or reduce-reduce), then the grammar is not LR(1).
2.  **The goto transitions for state `i` are constructed for all nonterminals A using the rule:**

    *   If `GOTO(Ii, A) = Ij`, then `GOTO[i, A] = j`.
3.  **All entries not defined by rules 1 and 2 are made "error".**
4.  **The initial state is the state containing `[S' -> .S, $]`.**

**Example Table (Partial) for the Grammar above:**

| State |   a    |   d    |   $    |   S    |   C    |
| :---- | :----- | :----- | :----- | :----- | :----- |
| 0     |  s3    |  s4    |        |   1    |   2    |
| 1     |        |        |  acc   |        |        |
| 2     |  s6    |  s7    |        |        |   5    |
| 3     |  s9    |  s4    |        |        |   8    |
| 4     |  r3    |  r3    |        |        |        |
| 5     |        |        |  r1    |        |        |
| 6     |  s6    |  s7    |        |        |   10   |
| 7     |        |        |  r3    |        |        |
| 8     |  r2    |  r2    |        |        |        |
| 9     |  s9    |  s4    |        |        |   8    |
| 10    |        |        |  r2    |        |        |

*   r1: S -> CC
*   r2: C -> aC
*   r3: C -> d

**4. The LR(1) Parsing Algorithm:**

1.  **Initialization:**
    *   Push the initial state (0) onto the stack.
    *   Set the input pointer to the beginning of the input string.
2.  **Parsing Loop:** Repeat the following steps until either accept or error occurs:
    *   Let `s` be the state on the top of the stack and `a` be the current input symbol.
    *   Consult `ACTION[s, a]`.
        *   **If `ACTION[s, a] = shift t`:**
            *   Push `a` onto the stack.
            *   Push state `t` onto the stack.
            *   Advance the input pointer to the next input symbol.
        *   **If `ACTION[s, a] = reduce k`:** (where `k` is the production number `A -> α`)
            *   Pop `|α|` symbols and states from the stack. (|α| is the length of α)
            *   Let `s'` be the state now on the top of the stack.
            *   Push `A` onto the stack.
            *   Push `GOTO[s', A]` onto the stack.
        *   **If `ACTION[s, a] = accept`:**
            *   The input string is accepted.  Parsing is complete.
        *   **If `ACTION[s, a] = error`:**
            *   The input string is rejected.  Parsing is unsuccessful.

**Example Parsing the Input "dad$" using the table above:**

| Stack      | Input    | Action        |
| :--------- | :------- | :------------ |
| 0          | dad$     | shift 4       |
| 0d4        | ad$      | reduce 3 (C -> d)  |
| 0C2        | ad$      | shift 6      |
| 0C2a6      | d$       | shift 7     |
| 0C2a6d7    | $        | reduce 3 (C -> d) |
| 0C2a6C10   | $        | reduce 2 (C -> aC) |
| 0C2C5      | $        | reduce 1 (S -> CC) |
| 0S1        | $        | accept        |

**5. Differentiating LR(1) from SLR(1) and LALR(1) Parsing:**

*   **SLR(1) (Simple LR(1)):**  Uses the same states as LR(0) parsing but uses the `FOLLOW` set of the non-terminal being reduced to determine when to perform a reduction.  It's less powerful than LR(1) because it doesn't consider the context of the reduction as precisely.
*   **LR(1):** Uses LR(1) items, which include lookahead information, allowing it to handle more complex grammars than SLR(1). It has separate states for items with different lookaheads, leading to a larger parsing table.
*   **LALR(1) (Look-Ahead LR(1)):**  A compromise between SLR(1) and LR(1). It merges LR(1) states that have the same core (LR(0) item) but different lookaheads.  This reduces the number of states significantly compared to LR(1), making the parsing table smaller, but it can still handle many common grammars. LALR(1) parsers are commonly used in practice (e.g., by Yacc/Bison).

| Feature        | SLR(1)                                   | LR(1)                                      | LALR(1)                                     |
| :------------- | :--------------------------------------- | :----------------------------------------- | :------------------------------------------ |
| States         | Same as LR(0)                             | More states than SLR(1)                  | Between SLR(1) and LR(1)                   |
| Lookahead      | Uses FOLLOW sets                          | Uses specific lookahead symbols in items  | Uses merged lookahead information           |
| Power          | Least powerful                             | Most powerful                              | More powerful than SLR(1), less than LR(1) |
| Table Size     | Smallest                                  | Largest                                     | Medium                                      |
| Conflict Res.  | Less effective at resolving conflicts   | More effective at resolving conflicts      | More effective than SLR(1)                  |

**6. Identifying Grammars that are LR(1) but not SLR(1):**

A grammar is LR(1) but not SLR(1) if the LR(1) parser can resolve conflicts that the SLR(1) parser cannot. This often occurs when the FOLLOW set is too general and leads to incorrect reductions.

**Example:**

```
S -> aAd
S -> bBd
A -> c
B -> c
```

In an SLR(1) parser, both A and B have `d` in their follow sets. A conflict could arise when parsing "acd" or "bcd" because the parser would not know whether to reduce 'c' to A or B upon seeing 'c'. The LR(1) parser, due to the lookahead in its states, will be able to differentiate between the contexts in which 'c' should be reduced.

**7. Limitations of LR(1) Parsing:**

*   **Table Size:** LR(1) parsing tables can become very large for complex grammars, making them impractical for some applications. This is the primary reason LALR(1) is preferred in many practical situations.
*   **Construction Complexity:** Constructing the canonical collection of LR(1) items and the parsing table can be computationally expensive for large grammars.

---

**Practice Questions/Exercises:**

1.  **Construct the LR(1) items for the following grammar:**

    ```
    S -> AA
    A -> aA
    A -> b
    ```

    *(Answer: Requires constructing the closure and goto functions iteratively to generate the sets of items. Too large to fully represent in this Markdown document but follow the outlined procedures to construct each set of LR(1) items. Be mindful of the lookaheads being incorporated properly.)*

2.  **Determine if the following grammar is SLR(1) and/or LR(1):**

    ```
    S -> aAd | aBe | bAd | bBe
    A -> c
    B -> c
    ```
    *(Answer:  This grammar is LR(1) but not SLR(1).  An SLR(1) parser would have a reduce/reduce conflict when seeing "c" because both A and B have 'd' and 'e' in their follow sets. An LR(1) parser can resolve this due to lookahead.)*

3.  **Explain the difference between shift-reduce and reduce-reduce conflicts.**

    *(Answer: A shift-reduce conflict occurs when, in a given state and input symbol, the parser can either shift the input symbol onto the stack or reduce a production based on the symbols on the stack. A reduce-reduce conflict occurs when the parser can reduce two different productions based on the symbols on the stack and the current input symbol.)*

4.  **Given the following partial LR(1) parsing table:**

    | State |   a    |   b    |   $    |   S    |   A    |
    | :---- | :----- | :----- | :----- | :----- | :----- |
    | 0     |  s2    |        |        |   1    |        |
    | 1     |        |        |  acc   |        |        |
    | 2     |        |  s3    |        |        |   4    |
    | 3     |  r1    |  r1    |  r1    |        |        |
    | 4     |        |        |  r2    |        |        |

    *   r1: A -> b
    *   r2: S -> aA

    **Parse the input string "ab$".**

    *(Answer: See below)*

    | Stack      | Input    | Action              |
    | :--------- | :------- | :------------------ |
    | 0          | ab$      | shift 2             |
    | 0a2        | b$       | shift 3             |
    | 0a2b3      | $        | reduce 1 (A -> b)    |
    | 0a2A4      | $        | reduce 2 (S -> aA)    |
    | 0S1        | $        | accept              |

**Important Points to Remember:**

*   LR(1) parsers are powerful but can have large parsing tables.
*   LALR(1) is a practical compromise, balancing power and table size.
*   SLR(1) is simpler but less powerful than LR(1) or LALR(1).
*   Understanding the `CLOSURE` and `GOTO` operations is crucial for constructing LR(1) parsing tables.
*   Lookahead is key to resolving conflicts in LR(1) parsing.
