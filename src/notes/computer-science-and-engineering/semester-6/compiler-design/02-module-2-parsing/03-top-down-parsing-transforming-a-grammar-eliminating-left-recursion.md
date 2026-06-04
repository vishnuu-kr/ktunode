---
title: "Top-Down Parsing - Transforming A Grammar: Eliminating Left Recursion"
subject: "COMPILER DESIGN"
module: "Module 2: Parsing "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8ba4f"
status: "completed"
scrapedAt: "2026-05-20T16:51:11.809Z"
---
# COMPILER DESIGN - MODULE 2: PARSING - TOP-DOWN PARSING: ELIMINATING LEFT RECURSION

## Introduction

This module focuses on parsing techniques, specifically top-down parsing. A critical step in top-down parsing is transforming the grammar to make it suitable for the parser. This section delves into eliminating left recursion, a common issue that can hinder top-down parsers.

**Learning Outcomes:**

*   Understand the concept of left recursion and its impact on top-down parsing.
*   Identify left-recursive productions in a grammar.
*   Transform a left-recursive grammar into an equivalent grammar without left recursion.
*   Apply the algorithm for eliminating left recursion to various grammar productions.
*   Understand the limitations and potential side effects of left recursion elimination.

## 1. Understanding Left Recursion

*   **Definition:** A grammar is *left-recursive* if it has a non-terminal `A` such that `A  =>+ Aα` for some string `α`.  In other words, starting from non-terminal `A`, we can derive a string that starts with `A` itself. `=>+` denotes one or more derivation steps.

*   **Types of Left Recursion:**

    *   **Immediate Left Recursion:**  A production of the form `A -> Aα | β`, where `A` is a non-terminal, `α` is a sequence of terminals and non-terminals, and `β` is a sequence of terminals and non-terminals that does *not* start with `A`.  This is the most common and easiest form to identify.

    *   **Indirect (or Hidden) Left Recursion:**  Exists when there are two or more productions that indirectly lead to left recursion.  For example:
        `A -> Bα`
        `B -> Aβ`
        Here, `A => Bα => Aβα`

*   **Why Left Recursion is a Problem for Top-Down Parsers:** Top-down parsers (like recursive descent parsers) work by trying to expand the leftmost non-terminal in a production rule.  If a grammar is left-recursive, the parser will get stuck in an infinite loop, repeatedly trying to expand the left-recursive non-terminal without consuming any input.  Consider the immediate left-recursive rule `A -> Aα | β`. A recursive descent parser, seeing 'A', would call the function/procedure for 'A'. This function would immediately see 'A' again and recursively call itself, leading to an infinite loop.

## 2. Identifying Left Recursion

*   **Immediate Left Recursion:**  Look for productions where the non-terminal on the left-hand side also appears as the first symbol on the right-hand side.

*   **Indirect Left Recursion:** Requires tracing potential derivation paths. This can be done by examining all possible sequences of productions. For complex grammars, algorithms are used.

**Example:**

*   **Immediate Left Recursion:**  `E -> E + T | T` (E derives E+T, so it's left-recursive)
*   **No Left Recursion:** `E -> T + E | T` (E derives T+E, no immediate recursion)
*   **Indirect Left Recursion:**
    `S -> A a | b`
    `A -> S c | d`
    (S derives A a, and A derives S c, so S => A a => S c a. This means S =>+ S ca)

## 3. Algorithm for Eliminating Immediate Left Recursion

The following algorithm eliminates *immediate* left recursion.  It's important to remember that this algorithm only addresses immediate left recursion.  Indirect left recursion must be handled separately (see Section 5).

**Given a production of the form:**

`A -> Aα1 | Aα2 | ... | Aαn | β1 | β2 | ... | βm`

where:

*   `A` is a non-terminal.
*   `αi` (for i = 1 to n) are sequences of terminals and/or non-terminals that follow `A` in the left-recursive productions.
*   `βj` (for j = 1 to m) are sequences of terminals and/or non-terminals that represent the productions that do *not* start with `A`.

**The transformed grammar is:**

`A  -> β1 A' | β2 A' | ... | βm A'`
`A' -> α1 A' | α2 A' | ... | αn A' | ε`

where `A'` is a new non-terminal (often pronounced "A prime").

**Explanation:**

*   The original `A` production now produces strings starting with `β` followed by the new non-terminal `A'`.  This ensures that the production no longer starts with `A`, eliminating the left recursion.
*   The `A'` production generates the `α` sequences (that were previously causing the recursion) optionally, allowing the `β` to be followed by any combination of `α`'s. The `ε` (epsilon) allows `A'` to derive to nothing, effectively ending the sequence of `α`'s.

**Example:**

Original Production:  `E -> E + T | T`

1.  `A = E`, `α1 = + T`, `β1 = T`
2.  Applying the algorithm:

    `E -> T E'`
    `E' -> + T E' | ε`

## 4. Examples of Eliminating Left Recursion

**Example 1:**

Original Grammar:

`E -> E + T | T`
`T -> T * F | F`
`F -> ( E ) | id`

1.  Eliminate left recursion in `E -> E + T | T`:

    `E -> T E'`
    `E' -> + T E' | ε`

2.  Eliminate left recursion in `T -> T * F | F`:

    `T -> F T'`
    `T' -> * F T' | ε`

Transformed Grammar:

`E -> T E'`
`E' -> + T E' | ε`
`T -> F T'`
`T' -> * F T' | ε`
`F -> ( E ) | id`

**Example 2:**

Original Grammar:

`A -> A b | c`

1.  `A = A`, `α1 = b`, `β1 = c`
2.  Applying the algorithm:

    `A -> c A'`
    `A' -> b A' | ε`

Transformed Grammar:

`A -> c A'`
`A' -> b A' | ε`

**Example 3:**

Original Grammar:

`S -> S a | S b | c`

1. `A = S`, `α1 = a`, `α2 = b`, `β1 = c`
2. Applying the algorithm:

    `S -> c S'`
    `S' -> a S' | b S' | ε`

Transformed Grammar:

`S -> c S'`
`S' -> a S' | b S' | ε`

## 5. Eliminating Indirect Left Recursion (Outline)

Eliminating indirect left recursion is more complex than eliminating immediate left recursion.  The general approach is:

1.  **Order the Non-Terminals:**  Assign an arbitrary ordering to the non-terminals in the grammar (e.g., `A1, A2, ..., An`).

2.  **Iteratively Substitute and Eliminate:** For each non-terminal `Ai` from `i = 1` to `n`:

    *   For each `Aj` from `j = 1` to `i-1`:
        *   Replace each production of the form `Ai -> Aj γ` with the productions `Ai -> δ1 γ | δ2 γ | ... | δk γ`, where `Aj -> δ1 | δ2 | ... | δk` are all the current productions for `Aj`.  This essentially "unfolds" the derivation chain to expose potential left recursion.
    *   Eliminate *immediate* left recursion from the `Ai` productions using the algorithm in Section 3.

3.  **Simplify (Optional):**  After the elimination process, simplify the grammar if possible.

**Example (Simplified Illustration):**

Original Grammar:

`S -> A a`
`A -> S b | c`

1.  Order: `S, A`

2.  `i = 1` (S):  There's no `Aj` with `j < 1`, so we skip this step.

3.  `i = 2` (A):
    *   `j = 1` (S):  We have the production `A -> S b`.  We substitute `S -> A a` into this:
        `A -> A a b | c`

4.  Now we have:
    `S -> A a`
    `A -> A a b | c`
    Eliminate immediate left recursion from the A productions:
    `A -> c A'`
    `A' -> a b A' | ε`

5.  Final Transformed Grammar:
    `S -> A a`
    `A -> c A'`
    `A' -> a b A' | ε`

**Important Notes about Indirect Left Recursion Elimination:**

*   The specific algorithm for eliminating indirect left recursion can be found in many compiler design textbooks and online resources.  The above is a high-level overview.
*   The algorithm can be complex and may result in significantly larger grammars.
*   Incorrect ordering of non-terminals can lead to the algorithm failing to eliminate all left recursion.

## 6. Limitations and Side Effects of Left Recursion Elimination

*   **Loss of Original Grammar Structure:**  The transformed grammar may not reflect the original intent or structure of the grammar as clearly.  This can make the grammar harder to understand and maintain.

*   **Introduction of New Non-Terminals:**  The algorithm introduces new non-terminals (like `A'`). While these are necessary to eliminate left recursion, they can increase the complexity of the grammar.

*   **Impact on Error Handling:**  The transformed grammar may affect error handling.  Error messages generated from the transformed grammar might be less intuitive or helpful than those from the original grammar.

*   **Semantic Actions:**  If the original grammar had associated semantic actions (code to be executed during parsing), these actions may need to be adjusted or rewritten to work correctly with the transformed grammar.  The transformation process can change the order in which productions are applied, impacting the timing of semantic actions.

## 7. Important Points to Remember

*   Left recursion prevents top-down parsers from working correctly, leading to infinite loops.
*   The algorithm presented here eliminates *immediate* left recursion.
*   Indirect left recursion requires a more complex algorithm.
*   Eliminating left recursion can alter the grammar structure, potentially affecting error handling and semantic actions.
*   Always test your transformed grammar thoroughly to ensure it still accepts the same language as the original grammar.
*   Consider alternative parsing techniques (e.g., bottom-up parsing) if eliminating left recursion makes the grammar overly complex or difficult to manage.  Bottom-up parsers are typically not affected by left recursion.

## 8. Practice Questions/Exercises

**Question 1:**  Identify whether the following grammar has left recursion (immediate or indirect). If it does, state the type and the non-terminal(s) involved.

`S -> a A`
`A -> b B`
`B -> S c | d`

**Answer:**  Indirect left recursion.  `B -> S c` and `S -> a A` and `A -> b B` means `B => S c => a A c => a b B c`. Therefore B =>+ a b B c.

**Question 2:** Eliminate left recursion from the following grammar:

`A -> A ( A ) | id`

**Answer:**

`A -> id A'`
`A' -> ( A ) A' | ε`

**Question 3:** Eliminate left recursion from the following grammar:

`S -> A a | b`
`A -> A c | S d | e`

**Answer:**

1. Order: `S, A`
2. `i = 1` (S): No `Aj` with `j < 1`.
3. `i = 2` (A):
    * `j = 1` (S): Replace `A -> S d` with `A -> A a d | b d`:
      `A -> A c | A a d | b d | e`

4. Eliminate immediate left recursion from A:
    `A -> b d A' | e A'`
    `A' -> c A' | a d A' | ε`

5. Final Grammar:
    `S -> A a | b`
    `A -> b d A' | e A'`
    `A' -> c A' | a d A' | ε`

**Question 4:**  Consider the grammar:

`E -> T E'`
`E' -> + T E' | - T E' | ε`
`T -> F T'`
`T' -> * F T' | / F T' | ε`
`F -> ( E ) | id`

This grammar has already had left recursion eliminated.  What language does it generate (describe in English)?

**Answer:**  This grammar generates arithmetic expressions involving addition (+), subtraction (-), multiplication (*), division (/), parentheses, and identifiers (id).  It can handle expressions with any number of these operations and nested parentheses.  The grammar enforces operator precedence (multiplication and division have higher precedence than addition and subtraction).
