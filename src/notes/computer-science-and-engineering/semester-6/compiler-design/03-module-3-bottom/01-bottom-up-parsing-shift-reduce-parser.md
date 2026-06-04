---
title: "Bottom-Up Parsing - Shift Reduce Parser"
subject: "COMPILER DESIGN"
module: "Module 3: Bottom"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8ba55"
status: "completed"
scrapedAt: "2026-05-20T16:51:15.385Z"
---
## COMPILER DESIGN - Module 3: Bottom - Bottom-Up Parsing - Shift Reduce Parser

**Learning Outcomes:**

*   Understand the fundamental principles of bottom-up parsing.
*   Define and explain the shift-reduce parsing technique.
*   Describe the data structures used in shift-reduce parsing, particularly the stack.
*   Identify and resolve shift-reduce and reduce-reduce conflicts.
*   Trace the steps of a shift-reduce parser for a given grammar and input string.
*   Distinguish between different types of bottom-up parsers (e.g., LR(0), SLR(1)).

**1. Introduction to Bottom-Up Parsing**

*   **Definition:** Bottom-up parsing constructs the parse tree from the leaves (terminals) to the root (start symbol).  It attempts to "reduce" the input string to the start symbol.  Also known as shift-reduce parsing.

*   **Core Idea:** Begin with the input string and progressively reduce substrings matching the right-hand side of grammar productions to the corresponding left-hand side non-terminal until the entire string is reduced to the start symbol.

*   **Analogy:** Think of it like building a house from the foundation up to the roof. You start with the smallest components (terminals) and assemble them into larger structures (non-terminals) until you reach the top (start symbol).

*   **Comparison with Top-Down Parsing:**
    *   **Top-Down:** Starts with the start symbol and tries to derive the input string. Uses prediction and backtracking (in some cases).
    *   **Bottom-Up:** Starts with the input string and tries to reduce it to the start symbol.  Uses reduction.

**2. Shift-Reduce Parsing Technique**

*   **Definition:**  A bottom-up parsing technique that uses two main actions: *shift* and *reduce*.

*   **Key Actions:**

    *   **Shift:** Moves the next input symbol onto the top of the stack.  The stack holds grammar symbols (terminals and non-terminals).

    *   **Reduce:** Replaces a sequence of symbols on the top of the stack (the handle) with the non-terminal whose right-hand side matches that sequence according to a production rule in the grammar.

    *   **Accept:** The parser announces successful completion of parsing when the stack contains only the start symbol and the input is empty.

    *   **Error:**  The parser discovers a syntax error and halts parsing.

*   **Handle:**  A handle is a substring of the current sentential form that matches the right-hand side of a production rule, and whose reduction to the non-terminal on the left-hand side of that production represents one step along the reverse of a rightmost derivation.

    *   **Important:** The correct handle must be reduced to ensure a rightmost derivation in reverse.

*   **Algorithm Outline:**

    1.  Initialize the stack to be empty.
    2.  Push the end-of-input marker `$` onto the stack.
    3.  Read the next input symbol.
    4.  Repeat until the stack contains the start symbol and the input is empty:
        *   If a handle exists on the top of the stack: Reduce.
        *   Otherwise: Shift.
    5.  If the stack contains the start symbol and the input is empty, accept.
    6.  Otherwise, error.

**3. Data Structures: Stack and Input Buffer**

*   **Stack:**
    *   Used to hold grammar symbols (terminals and non-terminals) during parsing.
    *   Plays a crucial role in identifying handles.
    *   Typically implemented as an array or linked list.
    *   The stack grows as symbols are shifted and shrinks as reductions occur.

*   **Input Buffer:**
    *   Contains the input string to be parsed, terminated by the end-of-input marker `$`.
    *   The parser reads symbols from the input buffer as needed for shifting.

*   **Example:**

    Let's consider the grammar:

    ```
    E -> E + T
    E -> T
    T -> T * F
    T -> F
    F -> ( E )
    F -> id
    ```

    And the input string:  `id + id * id $`

    The stack and input buffer will be used to simulate the parsing process.

**4. Shift-Reduce and Reduce-Reduce Conflicts**

*   **Shift-Reduce Conflict:**  Occurs when the parser can either shift the next input symbol or reduce a sequence of symbols on the stack. The parser cannot decide which action to take.

    *   **Example:** Consider the dangling-else problem:

        ```
        stmt -> if expr then stmt
        stmt -> if expr then stmt else stmt
        ```

        If the stack contains `if expr then stmt` and the next input symbol is `else`, the parser can either:

        1.  **Shift `else`:**  Potentially leading to the second production rule (with the `else`).
        2.  **Reduce using the first production:** Ignoring the `else`.

        The standard solution is to shift the `else`, associating it with the nearest unmatched `if`.

*   **Reduce-Reduce Conflict:** Occurs when the parser can reduce the top of the stack to one non-terminal or to a different non-terminal using different production rules. The parser cannot decide which reduction to apply.

    *   **Example:**

        ```
        A -> alpha
        B -> alpha
        ```

        If the stack contains `alpha`, the parser can reduce it to either `A` or `B`, leading to ambiguity.

*   **Resolving Conflicts:**

    *   **Precedence and Associativity:**  For arithmetic expressions, precedence and associativity rules can often resolve shift-reduce conflicts.  For example, `*` has higher precedence than `+`, so `a + b * c` is parsed as `a + (b * c)`.

    *   **Lookahead:** Using one or more lookahead symbols (the next input symbols) can help disambiguate between actions.  This is the basis for LR(k) parsing techniques.

    *   **Grammar Rewriting:** Sometimes, rewriting the grammar can eliminate ambiguities and conflicts.

**5. Tracing the Steps of a Shift-Reduce Parser**

*   **Example Grammar:**

    ```
    E -> E + T
    E -> T
    T -> T * F
    T -> F
    F -> ( E )
    F -> id
    ```

*   **Input String:** `id + id * id $`

*   **Trace:**

    | Step | Stack             | Input            | Action           | Explanation                                                                                                         |
    |------|-------------------|-----------------|-------------------|---------------------------------------------------------------------------------------------------------------------|
    | 1    | $                 | id + id * id $   | Shift            | Shift `id` onto the stack.                                                                                            |
    | 2    | $ id              | + id * id $    | Reduce F -> id     | `id` matches the right-hand side of `F -> id`.                                                                       |
    | 3    | $ F               | + id * id $    | Reduce T -> F     | `F` matches the right-hand side of `T -> F`.                                                                       |
    | 4    | $ T               | + id * id $    | Reduce E -> T     | `T` matches the right-hand side of `E -> T`.                                                                       |
    | 5    | $ E               | + id * id $    | Shift            | Shift `+` onto the stack.                                                                                            |
    | 6    | $ E +             | id * id $     | Shift            | Shift `id` onto the stack.                                                                                            |
    | 7    | $ E + id          | * id $        | Reduce F -> id     | `id` matches the right-hand side of `F -> id`.                                                                       |
    | 8    | $ E + F           | * id $        | Reduce T -> F     | `F` matches the right-hand side of `T -> F`.                                                                       |
    | 9    | $ E + T           | * id $        | Shift            | Shift `*` onto the stack.                                                                                            |
    | 10   | $ E + T *         | id $          | Shift            | Shift `id` onto the stack.                                                                                            |
    | 11   | $ E + T * id      | $             | Reduce F -> id     | `id` matches the right-hand side of `F -> id`.                                                                       |
    | 12   | $ E + T * F       | $             | Reduce T -> T * F   | `T * F` matches the right-hand side of `T -> T * F`.                                                                 |
    | 13   | $ E + T           | $             | Reduce E -> E + T   | `E + T` matches the right-hand side of `E -> E + T`.                                                                 |
    | 14   | $ E               | $             | Accept           | The stack contains the start symbol `E` and the input is empty.                                                          |

**6. Different Types of Bottom-Up Parsers**

*   **LR(0) Parser:** The simplest form of LR parser.  It makes parsing decisions based only on the contents of the stack. Can only handle a limited class of grammars (unambiguous and deterministic). Suffers from many shift-reduce and reduce-reduce conflicts.

*   **SLR(1) Parser:** (Simple LR) Uses the FOLLOW sets of non-terminals to resolve some shift-reduce and reduce-reduce conflicts.  A significant improvement over LR(0).  If a reduction to non-terminal A is possible, it is done only if the next input symbol is in FOLLOW(A).

*   **CLR(1) Parser:** (Canonical LR) Uses the concept of LR(1) items (items augmented with lookahead symbols) to make parsing decisions.  Most powerful of the simple LR parsers but can have a large number of states.  Provides the most precise information but is computationally expensive.

*   **LALR(1) Parser:** (Look-Ahead LR)  Merges states in the CLR(1) parser that have the same core (the LR(0) item) but different lookahead sets.  Significantly reduces the number of states compared to CLR(1) while retaining much of its power. Commonly used in parser generators like Yacc and Bison.  Usually preferred for practical use due to its balance of power and size.

*   **Key Differences:** The different LR parsers vary in how they construct their parsing tables, particularly in how they handle lookahead symbols to resolve conflicts.  They represent increasing levels of complexity and parsing power.

**7. Practice Questions/Exercises**

1.  **Consider the following grammar:**

    ```
    S -> aABe
    A -> Abc | b
    B -> d
    ```

    Trace the shift-reduce parser for the input string `abbcde$`. Show the stack, input, and action at each step.

    **Answer:**

    | Step | Stack      | Input       | Action               |
    |------|------------|-------------|----------------------|
    | 1    | $          | abbcde$     | Shift                |
    | 2    | $a         | bbcde$      | Shift                |
    | 3    | $ab        | bcde$       | Reduce A -> b        |
    | 4    | $aA        | bcde$       | Shift                |
    | 5    | $aAb       | cde$        | Shift                |
    | 6    | $aAbc      | de$         | Reduce A -> Abc      |
    | 7    | $aA        | de$         | Shift                |
    | 8    | $aAd       | e$          | Reduce B -> d        |
    | 9    | $aAB       | e$          | Shift                |
    | 10   | $aABe      | $           | Reduce S -> aABe      |
    | 11   | $S         | $           | Accept               |

2.  **Identify the possible conflicts (shift-reduce or reduce-reduce) in the following grammar and explain why they occur:**

    ```
    S -> iEtS | iEtSe | a
    E -> b
    ```

    **Answer:**

    This grammar has a shift-reduce conflict.  Consider the string `i b t i b t a e`. After processing `i b t i b t a` the parser will have `iEt iEt a` which becomes `iEt iEts`.  At this point, with `e` as the next input, the parser can either *shift* the `e` (anticipating another `else` clause) or *reduce* `iEts` to `S` (ignoring the possible `else` clause). This is the dangling-else problem.

3.  **What is a handle? Explain its significance in shift-reduce parsing.**

    **Answer:**

    A handle is a substring of the current sentential form that matches the right-hand side of a production rule, and whose reduction to the non-terminal on the left-hand side of that production represents one step along the reverse of a rightmost derivation.

    Its significance is that it represents a valid reduction step that brings the parsing process closer to the start symbol.  Identifying and reducing the correct handle is crucial for successful parsing. Reducing an incorrect substring may lead to a dead end.

4. **Explain the key difference between LR(0) and SLR(1) parsing.**

   **Answer:**

   Both LR(0) and SLR(1) are bottom-up parsing techniques. The key difference lies in how they resolve conflicts. LR(0) makes parsing decisions solely based on the stack's content, making it suitable for a very limited set of grammars. SLR(1) improves upon this by using the FOLLOW sets of non-terminals as lookahead. Specifically, SLR(1) will only reduce a handle to a non-terminal 'A' if the next input symbol is in FOLLOW(A). This use of FOLLOW sets helps resolve some shift-reduce and reduce-reduce conflicts that LR(0) cannot handle, enabling SLR(1) to parse a wider range of grammars.

**8. Important Points to Remember**

*   Bottom-up parsing constructs the parse tree from the leaves to the root.
*   Shift-reduce parsing uses shift and reduce actions.
*   A handle is the substring that is reduced.
*   Conflicts (shift-reduce and reduce-reduce) must be resolved.  Precedence, associativity, lookahead, and grammar rewriting are common techniques.
*   LR parsers use lookahead to resolve conflicts and are generally more powerful than LL parsers.
*   LALR(1) is widely used in practice due to its efficiency and parsing power.

These notes provide a comprehensive overview of bottom-up parsing, specifically focusing on shift-reduce parsing. They cover the fundamental concepts, techniques, and potential challenges involved in this important area of compiler design. By understanding these principles, you can effectively analyze and implement bottom-up parsers for various programming languages.
