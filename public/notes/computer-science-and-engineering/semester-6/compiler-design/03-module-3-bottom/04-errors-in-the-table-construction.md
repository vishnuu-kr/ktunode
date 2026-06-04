---
title: "Errors in the Table Construction"
subject: "COMPILER DESIGN"
module: "Module 3: Bottom"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8ba58"
status: "completed"
scrapedAt: "2026-05-20T16:51:17.534Z"
---
# COMPILER DESIGN - Module 3: Bottom-Up Parsing - Errors in Table Construction

## Introduction

This module focuses on Bottom-Up Parsing, a crucial aspect of compiler design. This section specifically delves into the errors that can arise during the construction of parsing tables for bottom-up parsers, especially LR parsers (SLR, CLR, LALR). Understanding these errors is vital for building robust and reliable compilers.

## Learning Outcomes

By the end of this section, you should be able to:

*   Identify different types of errors that can occur during LR parsing table construction.
*   Explain the causes of these errors, particularly shift-reduce and reduce-reduce conflicts.
*   Resolve simple conflicts by grammar modification or using precedence and associativity rules.
*   Understand the limitations of different LR parsing techniques in handling grammar ambiguities.

## 1. Key Concepts and Definitions

*   **Bottom-Up Parsing:** A parsing technique that attempts to construct a parse tree for an input string starting from the leaves (terminals) and working towards the root (start symbol). Also known as shift-reduce parsing.
*   **Shift-Reduce Parsing:** Involves two primary actions:
    *   **Shift:** Push the next input symbol onto the parsing stack.
    *   **Reduce:** Replace a handle (the right-hand side of a production that matches the top of the stack) with the non-terminal on the left-hand side of the production.
*   **Handle:** A substring of the input string that matches the right-hand side of a production rule and represents a step in the reverse of a rightmost derivation.
*   **LR Parsing:** A type of bottom-up parsing that is efficient and can handle a large class of context-free grammars.  "LR" stands for "Left-to-right scan of the input, Rightmost derivation in reverse".
*   **LR(0) Items:**  A production with a dot (`.`) at some position in the right-hand side. For example, `A -> .XYZ`, `A -> X.YZ`, `A -> XY.Z`, `A -> XYZ.` represent different LR(0) items for the production `A -> XYZ`.  They represent the progress of parsing.
*   **SLR(1) Parsing:**  Simple LR parsing. Uses FOLLOW sets to resolve some conflicts.
*   **CLR(1) Parsing:**  Canonical LR parsing. Uses lookahead symbols to resolve conflicts more precisely than SLR(1).  Creates a larger parsing table.
*   **LALR(1) Parsing:**  Look-Ahead LR parsing.  Merges states with the same core (productions with the same items, but possibly different lookaheads) in the CLR(1) automaton to reduce table size. Can introduce new conflicts.
*   **Parsing Table:** A table used by the parser to determine the next action (shift, reduce, accept, or error) based on the current state on the stack and the next input symbol.
*   **Shift-Reduce Conflict:** A situation where the parser can either shift the next input symbol onto the stack or reduce a portion of the stack to a non-terminal.
*   **Reduce-Reduce Conflict:** A situation where the parser can reduce a portion of the stack to a non-terminal using two or more different production rules.

## 2. Errors in LR Parsing Table Construction

These errors arise during the creation of the parsing table and indicate ambiguities or limitations in the grammar that prevent the parser from making deterministic decisions. The two main types are:

### 2.1 Shift-Reduce Conflicts

*   **Definition:** Occurs when, for a given state and input symbol, the parsing table contains both a shift action and a reduce action. The parser doesn't know whether to shift the input symbol onto the stack or reduce the current stack contents.

*   **Cause:** Ambiguity in the grammar or insufficient information in the lookahead symbols used by the LR parser.

*   **Example:**

    Consider the following grammar:

    ```
    E -> E + T
    E -> T
    T -> id
    ```

    Suppose we have the state `E -> E . + T` on the stack and the next input symbol is `+`.  We could:

    1.  **Shift:** Push the `+` onto the stack, potentially leading to reducing `E + T` to `E`.
    2.  **Reduce:** Reduce `E` to `E` (using `E -> T` and then `T -> E`). This is not a real reduction, but it highlights the issue.

    In this simplified example, the problem becomes clearer with the full LR(0) automaton. The conflict arises when building the parsing table.

*   **Resolution:**
    *   **Grammar Modification:** Rewrite the grammar to remove the ambiguity. For instance, the above example can be modified to:

        ```
        E -> T + E
        E -> T
        T -> id
        ```

        (This still doesn't fully resolve the associativity, but it changes the conflict dynamics)
    *   **Precedence and Associativity Rules:** Specify precedence and associativity rules for operators.  For example, you can specify that `+` is left-associative, resolving the shift-reduce conflict in favor of reducing. This is a common approach for handling arithmetic expressions. In Yacc/Bison, you'd declare `%left '+'`.
    *   **Using a Stronger LR Parser:** Sometimes, SLR(1) cannot resolve the conflict, but CLR(1) or LALR(1) can. These parsers use more precise lookahead information. However, switching to a stronger parser doesn't *guarantee* a resolution.

### 2.2 Reduce-Reduce Conflicts

*   **Definition:** Occurs when, for a given state and input symbol, the parsing table contains two or more different reduce actions. The parser doesn't know which production rule to use for the reduction.

*   **Cause:** Usually a more severe ambiguity in the grammar than a shift-reduce conflict. It often indicates that the grammar can derive the same string in multiple significantly different ways.

*   **Example:**

    Consider the following ambiguous grammar:

    ```
    S -> id ( id )
    S -> id ( P )
    P -> id )
    ```

    This grammar can parse "id (id)" in two ways: directly as S or as S -> id(P) -> id(id)).

    A reduce-reduce conflict will arise when the parser sees `id ( id )`.  It could reduce the `id )` to `P`, then `id ( P )` to `S`, or directly reduce `id ( id )` to `S`.

*   **Resolution:**
    *   **Grammar Modification:**  The most reliable solution is to rewrite the grammar to remove the ambiguity. This often involves introducing new non-terminals and modifying the production rules to enforce a specific structure. This is often difficult.
    *   **Discarding a Production:** In some cases (rare and usually undesirable), a tool might allow you to specify which reduction should be preferred. This essentially biases the parser towards one interpretation of the grammar. **This is generally bad practice and should be avoided unless absolutely necessary and fully understood.**  It can lead to unexpected behavior and incorrect parse trees.

## 3. Examples

Let's examine a more complex example involving an "dangling else" problem, which is a classic source of shift-reduce conflicts.

**Grammar:**

```
S -> if E then S
S -> if E then S else S
S -> other
E -> condition
```

This grammar is ambiguous because an `else` can be associated with either the nearest `if` or an earlier `if`.

**Conflict Scenario:**

Suppose the parser has seen `if E then if E then S` and the next input is `else`.

*   **Shift:** Shift the `else` onto the stack. This associates the `else` with the inner `if`.
*   **Reduce:** Reduce the inner `if E then S` to `S`. This associates the `else` with the outer `if`.

**Resolution:**

Most parser generators (like Yacc/Bison) resolve this shift-reduce conflict in favor of *shifting* the `else`. This makes the `else` associate with the nearest `if`, which is the desired behavior in most programming languages.  This is typically achieved by assigning higher precedence to the `else` keyword.

## 4. Limitations of Different LR Parsing Techniques

*   **LR(0):**  The weakest LR parser. Can only handle grammars where the decision to shift or reduce can be made without looking at any input symbols. Rarely used in practice.

*   **SLR(1):** Uses FOLLOW sets to resolve conflicts.  Can handle a larger class of grammars than LR(0). Still, it may not be able to resolve all conflicts. FOLLOW sets may not be precise enough in some cases.

*   **CLR(1):** The most powerful LR(1) parser. Uses lookahead symbols associated with each LR item to make precise parsing decisions. However, it results in the largest parsing tables, which can be impractical for large grammars.

*   **LALR(1):** Merges states with the same core (productions with the same items, but potentially different lookaheads) in the CLR(1) automaton. This reduces the table size compared to CLR(1), making it more practical. However, merging states can introduce new reduce-reduce conflicts that didn't exist in the CLR(1) grammar.  LALR(1) is the most commonly used LR parsing technique in practice.

## 5. Practice Questions/Exercises

1.  **Consider the grammar:** `S -> A a B b`, `A -> c`, `B -> d`. Construct the SLR(1) parsing table. Identify if any conflicts arise.
    *   **Answer:** You'll need to construct the LR(0) items, compute FIRST and FOLLOW sets, and then build the parsing table. No conflicts should arise in this simple grammar.

2.  **Consider the ambiguous grammar:** `E -> E + E`, `E -> id`. Where does the shift-reduce conflict arise when building the SLR(1) parsing table? How can you resolve this conflict using precedence and associativity rules?
    *   **Answer:** The conflict arises when you have a state with `E -> E + .E` on the stack and the next input is `+`. You can either shift the `+` (right associativity) or reduce `E + E` to `E` (left associativity). Resolve it by declaring `+` as left-associative (`%left '+'`) in Yacc/Bison, favoring reduction.

3.  **Explain the difference between a shift-reduce conflict and a reduce-reduce conflict.  Which one is generally considered more difficult to resolve, and why?**
    *   **Answer:** Shift-reduce is a choice between shifting and reducing, often related to operator precedence. Reduce-reduce is a choice between two different reductions from the same stack contents, indicating a deeper ambiguity. Reduce-reduce is typically harder because it reveals a more fundamental problem with the grammar's structure, often requiring more extensive rewriting.

4.  **Why is LALR(1) parsing more commonly used than CLR(1) parsing in practice? What is the trade-off?**
    *   **Answer:** LALR(1) has significantly smaller tables than CLR(1), making it more practical for large grammars. The trade-off is that LALR(1) can sometimes introduce new reduce-reduce conflicts due to the merging of states, although it never introduces *new* shift/reduce conflicts. It only propagates them.

5. **Analyze the following grammar and determine if any shift-reduce or reduce-reduce conflicts would arise during SLR(1) parsing:**
    ```
    S -> A a
    S -> b A c
    A -> d
    ```
    **Answer:**

    1. **Augmented Grammar:**
       ```
       S' -> S
       S -> A a
       S -> b A c
       A -> d
       ```

    2. **LR(0) Items:**  We'll show a few to get started:

       *   `I0:  S' -> .S, S -> .A a, S -> .b A c, A -> .d`
       *   `I1:  S' -> S.`
       *   `I2:  S -> A . a` (from `I0` on input `A`)
       *   `I3:  S -> b .A c` (from `I0` on input `b`)
       *   `I4:  A -> d.` (from `I0` on input `d`)
       *   `I5:  S -> A a.` (from `I2` on input `a`)
       *   `I6:  S -> b A . c` (from `I3` on input `A`)
       *   `I7:  S -> b A c.` (from `I6` on input `c`)

    3. **FIRST and FOLLOW Sets:**

       *   `FIRST(S) = {d, b}`
       *   `FIRST(A) = {d}`
       *   `FOLLOW(S) = {$} `
       *   `FOLLOW(A) = {a, c}`

    4. **Analyzing for Conflicts:**  Consider state `I4: A -> d.`.  This means we are ready to reduce by the production `A -> d`.  The input symbols we can reduce on are determined by `FOLLOW(A) = {a, c}`.  Now, let's examine where we arrived at `I4`. `I4` is derived from the `I0` state which includes `S -> .b A c` and `S -> .A a`. If the next input is either `a` or `c`, and the current state is `I4`, there's no shift/reduce or reduce/reduce conflict. It's safe to perform the reduction A -> d.

       There is an implicit Shift action for any input if it's not in the FOLLOW set. Looking closely at how we derived each state, and applying FIRST and FOLLOW, there are no shift-reduce or reduce-reduce conflicts.

    **Conclusion:** This grammar, when analyzed using SLR(1) parsing, does *not* exhibit any shift-reduce or reduce-reduce conflicts.

## 6. Important Points to Remember

*   Shift-reduce and reduce-reduce conflicts indicate ambiguities in the grammar or limitations in the parser's ability to resolve parsing decisions.
*   Grammar modification is the preferred solution for resolving conflicts, but it can be complex.
*   Precedence and associativity rules are commonly used to resolve shift-reduce conflicts in expression grammars.
*   Understanding the limitations of each LR parsing technique is crucial for choosing the appropriate parser for a given grammar.
*   While tools can sometimes be used to "resolve" conflicts by favoring one action over another, this should generally be avoided, as it can mask underlying grammar ambiguities and lead to unexpected parsing behavior.  Always strive for a clear and unambiguous grammar.
