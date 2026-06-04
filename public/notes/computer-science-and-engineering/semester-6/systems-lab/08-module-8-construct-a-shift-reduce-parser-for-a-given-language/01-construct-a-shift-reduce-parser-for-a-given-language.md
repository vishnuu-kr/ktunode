---
title: "Construct a Shift Reduce Parser for a given language."
subject: "SYSTEMS LAB"
module: "Module 8: Construct a Shift Reduce Parser for a given language."
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8c03e"
status: "completed"
scrapedAt: "2026-05-20T16:57:38.221Z"
---
# Systems Lab: Module 8 - Construct a Shift Reduce Parser

This module focuses on understanding and constructing shift-reduce parsers, a fundamental technique in compiler design for analyzing the syntax of a given programming language.

## Learning Outcomes

By the end of this module, you should be able to:

*   **Understand the concept of shift-reduce parsing:** Grasp the core principles of how a shift-reduce parser operates.
*   **Identify the components of a shift-reduce parser:** Recognize the essential parts of a shift-reduce parser, including the input buffer, stack, and parsing table.
*   **Explain the actions of a shift-reduce parser:** Describe the specific actions (Shift, Reduce, Accept, Error) that a shift-reduce parser performs.
*   **Construct a parsing table for a given grammar:** Learn the process of building the Action and Goto tables.
*   **Trace the parsing process for a given input string:** Demonstrate how a shift-reduce parser processes an input string using a constructed parsing table.
*   **Understand the advantages and disadvantages of shift-reduce parsing:** Evaluate the strengths and weaknesses of this parsing technique.

## 1. Introduction to Shift-Reduce Parsing

Shift-reduce parsing is a **bottom-up** parsing technique. It starts with the input string and tries to reduce it to the start symbol of the grammar by applying grammar rules in reverse. The goal is to transform the input string into the start symbol of the grammar.

### Key Concepts:

*   **Bottom-Up Parsing:** Builds the parse tree from the leaves (input tokens) up to the root (start symbol).
*   **Reduction:** The process of replacing a sequence of grammar symbols on the stack with a non-terminal on the left-hand side of a production rule.
*   **Handle:** The right-hand side of a production rule that matches a sequence of symbols on the top of the stack. The reduction step is applied to the handle.

## 2. Components of a Shift-Reduce Parser

A shift-reduce parser typically consists of:

*   **Input Buffer:** Stores the input string to be parsed, usually terminated by a special end-of-input marker (often `$`).
*   **Stack:** Stores grammar symbols (terminals and non-terminals) and state numbers.
    *   **State:** Represents the current parsing context or configuration.
    *   **Grammar Symbols:** The tokens and non-terminals encountered so far.
*   **Parsing Table:** A table that guides the parser's actions based on the current state and the next input symbol. It has two parts:
    *   **Action Table:** Determines the action to perform (Shift, Reduce, Accept, Error).
    *   **Goto Table:** Determines the next state after a reduction.

### Diagrammatic Representation:

```
+--------------+     +--------------+     +--------------+
| Input Buffer | --> |    Stack     | --> | Parsing Table|
+--------------+     +--------------+     +--------------+
                       ^     |
                       |     | Actions (Shift, Reduce, Accept, Error)
                       |_____|
```

## 3. Shift-Reduce Parsing Actions

The parser performs one of the following actions at each step:

*   **Shift (S):** Moves the current input symbol from the input buffer onto the stack and transitions to a new state. The new state is determined by the parsing table using the current state and the shifted symbol.
    *   *Example:* If the parser is in state `s0` and the next input symbol is `id`, the parsing table might say `Action[s0, id] = S3`. This means the parser pushes `3` (the new state) onto the stack, then pushes `id` onto the stack, and moves to state `3`.
*   **Reduce (R):** Replaces a handle (the right-hand side of a production) on top of the stack with the non-terminal on the left-hand side of that production.
    *   To perform a reduction, the parser first identifies the handle on the stack.
    *   It then pops the symbols corresponding to the handle from the stack.
    *   It then pops the state number associated with the handle from the stack.
    *   Finally, it consults the Goto table using the state *below* the popped handle and the non-terminal being reduced to, to determine the new state to push onto the stack.
    *   *Example:* If the grammar has a production `A -> X Y Z`, and `X Y Z` is on top of the stack, the parser will pop `Z`, `Y`, `X`, and their associated states. Then, it will look up `Goto[state_before_X, A]` to find the next state to push.
*   **Accept (Acc):** The parser successfully recognizes the entire input string as belonging to the language defined by the grammar. This usually happens when the input buffer is empty and the parser is in an accepting state (often state `n` for a grammar with `n` states).
*   **Error (Err):** The parser encounters an input symbol that it cannot process in its current state, indicating a syntax error in the input string.

## 4. Constructing a Parsing Table

Constructing a shift-reduce parsing table (specifically, LR(1) or SLR(1) tables, as these are common types) involves several steps. For this module, we will focus on the principles, often demonstrated with simpler LR(0) or SLR(1) concepts, which build upon sets of items.

### Prerequisites:

*   **Context-Free Grammar (CFG):** The grammar defining the language.
*   **Augmented Grammar:** A new production `S' -> S` is added, where `S'` is a new start symbol and `S` is the original start symbol. This helps in recognizing the complete parse.
*   **LR(0) Items:** A pair `[A -> α.β]`, where `A -> αβ` is a production and `.` is the "dot" representing the parsing progress.
*   **States (Sets of LR(0) Items):** Each state in the parsing table corresponds to a set of LR(0) items. These sets are constructed using closure and goto operations.

### Steps for Constructing the Parsing Table (Simplified for demonstration, often based on LR(0) or SLR(1) concepts):

1.  **Augment the Grammar:** Add `S' -> S`.
2.  **Compute LR(0) Items and States:**
    *   **Initial State (I0):** Start with the LR(0) item `[S' -> .S]`. Apply the closure operation to generate the initial set of items.
    *   **Closure Operation:** If `[A -> α.Bβ]` is in a set and `B -> γ` is a production, add `[B -> .γ]` to the set. Repeat until no new items can be added.
    *   **Goto Operation:** For each state `I` and grammar symbol `X` (terminal or non-terminal), compute `GOTO(I, X)`. This is the set of all items `[A -> αX.β]` such that `[A -> α.Xβ]` is in `I`. If `GOTO(I, X)` is non-empty and not already a state, create a new state.
    *   **Construct the State Machine:** Repeat the goto operation for all possible grammar symbols until all reachable states are found.
3.  **Construct the Parsing Table:**
    *   **Action Table:** For each state `i` and terminal `a` (including `$`)
        *   If `[A -> α.aβ]` is in state `i`, and `GOTO(i, a)` leads to state `j`, then `Action[i, a] = S j`.
        *   If `[A -> α.]` is in state `i` and `A` is not `S'`, then `Action[i, a] = R k`, where `A -> α` is the k-th production rule.
        *   If `[S' -> S.]` is in state `i`, then `Action[i, $] = Acc`.
        *   If no rule applies, `Action[i, a] = Error`.
    *   **Goto Table:** For each state `i` and non-terminal `A`:
        *   If `GOTO(i, A)` leads to state `j`, then `Goto[i, A] = j`.

**Note:** The construction of parsing tables for more powerful LR parsers (LR(1), LALR(1)) involves lookaheads, which are sets of terminal symbols that can follow a non-terminal. This module often uses simplified examples to illustrate the core shift-reduce mechanism.

## 5. Tracing the Parsing Process (Example)

Let's consider a simple grammar and trace the parsing of an input string.

**Grammar:**

1.  `E -> E + T`
2.  `E -> T`
3.  `T -> T * F`
4.  `T -> F`
5.  `F -> ( E )`
6.  `F -> id`

**Augmented Grammar:**

`E' -> E`

**Example Parsing Table (Simplified - assuming it's pre-computed):**

| State | Input Symbol | Action       | Goto   |
| :---- | :----------- | :----------- | :----- |
|       | `id`         | `S5`         | `E=1, T=2, F=4` |
|       | `(`          | `S6`         |        |
|       | `)`          | `Error`      |        |
|       | `+`          | `Error`      |        |
|       | `*`          | `Error`      |        |
|       | `$`          | `Error`      |        |
| **1** | `id`         | `Error`      |        |
|       | `(`          | `Error`      |        |
|       | `)`          | `Error`      |        |
|       | `+`          | `S7`         |        |
|       | `*`          | `Error`      |        |
|       | `$`          | `Acc`        |        |
| **2** | `id`         | `Error`      |        |
|       | `(`          | `Error`      |        |
|       | `)`          | `Error`      |        |
|       | `+`          | `R2`         |        |
|       | `*`          | `R2`         |        |
|       | `$`          | `R2`         |        |
| **3** | `id`         | `S5`         | `F=4`  |
|       | `(`          | `S6`         |        |
| **4** | `id`         | `Error`      |        |
|       | `(`          | `Error`      |        |
|       | `)`          | `R4`         |        |
|       | `+`          | `R4`         |        |
|       | `*`          | `R4`         |        |
|       | `$`          | `R4`         |        |
| **5** | `id`         | `Error`      |        |
|       | `(`          | `Error`      |        |
|       | `)`          | `R6`         |        |
|       | `+`          | `R6`         |        |
|       | `*`          | `R6`         |        |
|       | `$`          | `R6`         |        |
| **6** | `id`         | `S5`         | `E=8`  |
|       | `(`          | `S6`         |        |
|       | `)`          | `Error`      |        |
|       | `+`          | `Error`      |        |
|       | `*`          | `Error`      |        |
|       | `$`          | `Error`      |        |
| **7** | `id`         | `S5`         | `T=9`  |
|       | `(`          | `S6`         |        |
| **8** | `id`         | `Error`      |        |
|       | `(`          | `Error`      |        |
|       | `)`          | `S10`        |        |
|       | `+`          | `Error`      |        |
|       | `*`          | `Error`      |        |
|       | `$`          | `Error`      |        |
| **9** | `id`         | `Error`      |        |
|       | `(`          | `Error`      |        |
|       | `)`          | `R3`         |        |
|       | `+`          | `R3`         |        |
|       | `*`          | `R3`         |        |
|       | `$`          | `R3`         |        |
| **10**| `id`         | `Error`      |        |
|       | `(`          | `Error`      |        |
|       | `)`          | `R5`         |        |
|       | `+`          | `R5`         |        |
|       | `*`          | `R5`         |        |
|       | `$`          | `R5`         |        |

**Input String:** `id + id * id`

**Parsing Trace:**

| Step | Stack (State Symbol) | Input        | Action                    | Explanation                                                                                                       |
| :--- | :------------------- | :----------- | :------------------------ | :---------------------------------------------------------------------------------------------------------------- |
| 0    | `0`                  | `id + id * id $` |                           | Initial state.                                                                                                    |
| 1    | `0 id 5`             | `+ id * id $`    | `S5`                      | Shift `id` to state 5.                                                                                            |
| 2    | `0 id 5`             | `+ id * id $`    | `R6` (`F -> id`)          | Reduce using production 6. Pop `id` and state 5. Goto state from `0` on `F` is 4. Push `F` and state 4.           |
|      | `0 F 4`              | `+ id * id $`    |                           |                                                                                                                   |
| 3    | `0 F 4`              | `+ id * id $`    | `R4` (`T -> F`)           | Reduce using production 4. Pop `F` and state 4. Goto state from `0` on `T` is 2. Push `T` and state 2.           |
|      | `0 T 2`              | `+ id * id $`    |                           |                                                                                                                   |
| 4    | `0 T 2`              | `+ id * id $`    | `S7` (`Action[2, +] = S7`) | Shift `+` to state 7.                                                                                             |
|      | `0 T 2 + 7`          | `id * id $`      |                           |                                                                                                                   |
| 5    | `0 T 2 + 7 id 5`     | `* id $`         | `S5`                      | Shift `id` to state 5.                                                                                            |
| 6    | `0 T 2 + 7 id 5`     | `* id $`         | `R6` (`F -> id`)          | Reduce using production 6. Pop `id` and state 5. Goto state from `7` on `F` is 4. Push `F` and state 4.           |
|      | `0 T 2 + 7 F 4`      | `* id $`         |                           |                                                                                                                   |
| 7    | `0 T 2 + 7 F 4`      | `* id $`         | `R4` (`T -> F`)           | Reduce using production 4. Pop `F` and state 4. Goto state from `7` on `T` is 9. Push `T` and state 9.           |
|      | `0 T 2 + 7 T 9`      | `* id $`         |                           |                                                                                                                   |
| 8    | `0 T 2 + 7 T 9`      | `* id $`         | `S8` (`Action[9, *] = S8`) | Shift `*` to state 8.                                                                                             |
|      | `0 T 2 + 7 T 9 * 8`  | `id $`           |                           |                                                                                                                   |
| 9    | `0 T 2 + 7 T 9 * 8 id 5` | `$`              | `S5`                      | Shift `id` to state 5.                                                                                            |
| 10   | `0 T 2 + 7 T 9 * 8 id 5` | `$`              | `R6` (`F -> id`)          | Reduce using production 6. Pop `id` and state 5. Goto state from `8` on `F` is 4. Push `F` and state 4.           |
|      | `0 T 2 + 7 T 9 * 8 F 4`  | `$`              |                           |                                                                                                                   |
| 11   | `0 T 2 + 7 T 9 * 8 F 4`  | `$`              | `R3` (`T -> T * F`)       | Reduce using production 3. Pop `F`, state 4, `*`, state 8, `T`, state 9. Goto state from `7` on `T` is 9. Push `T` and state 9. |
|      | `0 T 2 + 7 T 9`      | `$`              |                           |                                                                                                                   |
| 12   | `0 T 2 + 7 T 9`      | `$`              | `R1` (`E -> E + T`)       | Reduce using production 1. Pop `T`, state 9, `+`, state 7, `E`, state 2. Goto state from `0` on `E` is 1. Push `E` and state 1. |
|      | `0 E 1`              | `$`              |                           |                                                                                                                   |
| 13   | `0 E 1`              | `$`              | `Acc` (`Action[1, $] = Acc`) | Accept. The input string is valid.                                                                                |

## 6. Advantages and Disadvantages of Shift-Reduce Parsing

### Advantages:

*   **Simplicity:** Conceptually simpler to understand than predictive parsers for many grammars.
*   **Efficiency:** Can be very efficient when implemented properly.
*   **Wide Applicability:** Can handle a large class of context-free grammars, especially with more advanced LR parsing techniques (LR(1), LALR(1)).
*   **Bottom-Up Nature:** Useful for tasks like error recovery by identifying the erroneous part of the input.

### Disadvantages:

*   **Table Construction Complexity:** For powerful LR parsers, the construction of the parsing table can be complex and error-prone.
*   **Ambiguity:** Cannot directly handle ambiguous grammars. They need to be resolved or rewritten.
*   **Parser Size:** The parsing tables can become very large for complex grammars, consuming significant memory.
*   **Limited Lookahead:** While LR parsers use lookahead, the amount of lookahead (1 for LR(1)) can still be insufficient for some grammars.

## 7. Practice Questions/Exercises

1.  **Understanding Actions:**
    *   What is the purpose of the "Shift" action in shift-reduce parsing?
    *   When does a "Reduce" action occur? What is a "handle"?
    *   What is the significance of the "Accept" action?

2.  **Grammar and Parsing Table:**
    Consider the following grammar:
    1.  `S -> a A b`
    2.  `A -> c`
    3.  `A -> d`

    *   Augment the grammar.
    *   List the LR(0) items for the initial state.
    *   Briefly describe how you would construct the Action and Goto tables for this grammar. (You don't need to build the full table, but explain the process for a few entries).

3.  **Tracing a String:**
    Using the parsing table provided in Section 5, trace the parsing of the input string: `id * id + id`.

---

## Answers to Practice Questions

**1. Understanding Actions:**

*   **Shift:** The "Shift" action moves the current input symbol from the input buffer to the stack. This is done when the parser recognizes that the current input symbol can be part of a valid sequence according to the current state and the grammar. It also involves moving to a new state dictated by the parsing table.
*   **Reduce:** A "Reduce" action occurs when the parser identifies a sequence of symbols on top of its stack that matches the right-hand side of a grammar production rule (the "handle"). The parser then replaces this handle with the non-terminal on the left-hand side of that production and updates its state.
*   **Accept:** The "Accept" action signifies that the parser has successfully processed the entire input string and reduced it to the start symbol of the grammar. This means the input string is syntactically correct according to the grammar.

**2. Grammar and Parsing Table:**

Consider the following grammar:
1.  `S -> a A b`
2.  `A -> c`
3.  `A -> d`

*   **Augmented Grammar:**
    `S' -> S`
    `S -> a A b`
    `A -> c`
    `A -> d`

*   **LR(0) items for the initial state (I0):**
    *   `[S' -> .S]` (Initial item)
    *   Applying closure to `[S' -> .S]`: Since `S` is a non-terminal, we add `[S -> .a A b]`
    *   Applying closure to `[S -> .a A b]`: Since `a` is a terminal, no further closure.

    So, the initial state `I0` contains:
    *   `{ [S' -> .S], [S -> .a A b] }`

*   **Constructing the Action and Goto tables (Explanation):**
    *   **Goto Operation:** You would compute `GOTO(I0, a)`. This involves finding all items in `I0` of the form `[S -> a.A b]`. If found, `GOTO(I0, a)` will be the set containing `[S -> a.A b]` and its closure. Let's say this leads to state `I1`.
    *   **Action Table Entry:** For the terminal `a` and state `0`, since `GOTO(I0, a)` leads to state `I1`, the entry `Action[0, a]` would be `S1` (Shift to state 1).
    *   **Reduce Entries:** After computing all states and identifying items of the form `[A -> α.]`, where `A -> α` is the k-th production, you would fill the Action table. For example, if state `I2` contains `[A -> c.]` and `A -> c` is the 2nd production, then for all terminals `t` that can follow `A` in the grammar (determined by FOLLOW sets for SLR(1) or lookahead sets for LR(1)), `Action[I2, t]` would be `R2`.
    *   **Goto Table Entry:** If `GOTO(I0, S)` leads to state `I3`, then `Goto[0, S]` would be `3`.
    *   **Accept Entry:** If the final state contains `[S' -> S.]`, the `Action` entry for that state with the end-of-input symbol `$` would be `Acc`.

**3. Tracing a String:**

Input String: `id * id + id`

| Step | Stack (State Symbol)      | Input            | Action                    | Explanation                                                                                                                                                           |
| :--- | :------------------------ | :--------------- | :------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0    | `0`                       | `id * id + id $` |                           | Initial state.                                                                                                                                                        |
| 1    | `0 id 5`                  | `* id + id $`    | `S5`                      | Shift `id` to state 5.                                                                                                                                                |
| 2    | `0 id 5`                  | `* id + id $`    | `R6` (`F -> id`)          | Reduce using production 6. Pop `id` (state 5). Goto state from `0` on `F` is 4. Push `F` and state 4.                                                                 |
|      | `0 F 4`                   | `* id + id $`    |                           |                                                                                                                                                                       |
| 3    | `0 F 4`                   | `* id + id $`    | `R4` (`T -> F`)           | Reduce using production 4. Pop `F` (state 4). Goto state from `0` on `T` is 2. Push `T` and state 2.                                                                 |
|      | `0 T 2`                   | `* id + id $`    |                           |                                                                                                                                                                       |
| 4    | `0 T 2`                   | `* id + id $`    | `S8` (`Action[2, *] = S8`) | Shift `*` to state 8.                                                                                                                                                 |
|      | `0 T 2 * 8`               | `id + id $`      |                           |                                                                                                                                                                       |
| 5    | `0 T 2 * 8 id 5`          | `+ id $`         | `S5`                      | Shift `id` to state 5.                                                                                                                                                |
| 6    | `0 T 2 * 8 id 5`          | `+ id $`         | `R6` (`F -> id`)          | Reduce using production 6. Pop `id` (state 5). Goto state from `8` on `F` is 4. Push `F` and state 4.                                                                 |
|      | `0 T 2 * 8 F 4`           | `+ id $`         |                           |                                                                                                                                                                       |
| 7    | `0 T 2 * 8 F 4`           | `+ id $`         | `R3` (`T -> T * F`)       | Reduce using production 3. Pop `F` (state 4), `*` (state 8), `T` (state 2). Goto state from `0` on `T` is 2. Push `T` and state 2.                               |
|      | `0 T 2`                   | `+ id $`         |                           |                                                                                                                                                                       |
| 8    | `0 T 2`                   | `+ id $`         | `S7` (`Action[2, +] = S7`) | Shift `+` to state 7.                                                                                                                                                 |
|      | `0 T 2 + 7`               | `id $`           |                           |                                                                                                                                                                       |
| 9    | `0 T 2 + 7 id 5`          | `$`              | `S5`                      | Shift `id` to state 5.                                                                                                                                                |
| 10   | `0 T 2 + 7 id 5`          | `$`              | `R6` (`F -> id`)          | Reduce using production 6. Pop `id` (state 5). Goto state from `7` on `F` is 4. Push `F` and state 4.                                                                 |
|      | `0 T 2 + 7 F 4`           | `$`              |                           |                                                                                                                                                                       |
| 11   | `0 T 2 + 7 F 4`           | `$`              | `R4` (`T -> F`)           | Reduce using production 4. Pop `F` (state 4). Goto state from `7` on `T` is 9. Push `T` and state 9.                                                                 |
|      | `0 T 2 + 7 T 9`           | `$`              |                           |                                                                                                                                                                       |
| 12   | `0 T 2 + 7 T 9`           | `$`              | `R1` (`E -> E + T`)       | Reduce using production 1. Pop `T` (state 9), `+` (state 7), `E` (state 2). Goto state from `0` on `E` is 1. Push `E` and state 1.                               |
|      | `0 E 1`                   | `$`              |                           |                                                                                                                                                                       |
| 13   | `0 E 1`                   | `$`              | `Acc` (`Action[1, $] = Acc`) | Accept. The input string is valid.                                                                                                                                    |

## Important Points to Remember

*   **Bottom-Up vs. Top-Down:** Shift-reduce is bottom-up; it builds the parse tree from the input tokens upwards.
*   **Handle is Crucial:** Identifying the correct "handle" on the stack is essential for a successful reduction.
*   **State and Input Symbol:** The parser's actions are solely determined by the current state on the stack and the next input symbol.
*   **Parsing Table is the Brain:** The correctness of the parsing table directly dictates the parser's ability to correctly analyze the input according to the grammar.
*   **Augmented Grammar:** Always augment the grammar with a new start symbol and production for complete parsing.
*   **LR Parsers:** Shift-reduce parsing is the basis for LR parsing techniques (LR(0), SLR(1), LALR(1), LR(1)), which differ in how they handle lookaheads to resolve conflicts.
*   **Error Detection:** Shift-reduce parsers will indicate an error when no valid action (Shift, Reduce, Accept) can be found for the current state and input symbol.

This concludes the study notes for Module 8. Focus on understanding the mechanics of the shift-reduce process and how the parsing table guides the parser's actions.
