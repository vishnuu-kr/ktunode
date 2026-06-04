---
title: "Table-Driven LL(1) Parsers"
subject: "COMPILER DESIGN"
module: "Module 2: Parsing "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8ba53"
status: "completed"
scrapedAt: "2026-05-20T16:51:14.675Z"
---
## COMPILER DESIGN: Module 2 - Parsing: Table-Driven LL(1) Parsers

### Introduction

These notes cover Table-Driven LL(1) Parsers, a crucial topic in compiler design.  LL(1) parsing is a top-down parsing technique that builds the parse tree from the root (start symbol) down to the leaves (terminals). The "LL" stands for "Left-to-right, Leftmost derivation," and the "(1)" indicates that it uses one lookahead token to make parsing decisions. Table-driven LL(1) parsers use a parsing table derived from the grammar to efficiently guide the parsing process.

### Learning Outcomes:

By the end of this module, you should be able to:

*   Understand the principles of top-down parsing.
*   Define and explain LL(1) grammars.
*   Construct FIRST and FOLLOW sets for grammar symbols.
*   Build an LL(1) parsing table from a given grammar.
*   Explain the operation of a table-driven LL(1) parser.
*   Detect and resolve conflicts in LL(1) parsing tables.
*   Recognize and handle non-LL(1) grammars.

### 1. Top-Down Parsing: Principles

*   **Definition:** Top-down parsing attempts to build a parse tree from the root (start symbol) towards the leaves (input tokens). It starts with the grammar's start symbol and tries to derive the input string.
*   **Techniques:**
    *   **Recursive Descent Parsing:** Implements each non-terminal as a function that tries to match the corresponding production rules.  Can be inefficient due to backtracking.
    *   **Table-Driven Parsing (LL(1)):**  Uses a parsing table to determine which production rule to apply based on the current non-terminal and the lookahead token.  More efficient than recursive descent, but requires the grammar to be LL(1).

*   **Derivation Types:**
    *   **Leftmost Derivation:** The leftmost non-terminal in a sentential form is always replaced. LL(1) parsers use leftmost derivations.
    *   **Rightmost Derivation:** The rightmost non-terminal in a sentential form is always replaced. LR parsers use rightmost derivations.

*   **Key Idea:** Choose the correct production rule to apply based on the next input token (the lookahead).

### 2. LL(1) Grammars: Definition and Requirements

*   **Definition:** An LL(1) grammar is a context-free grammar that can be parsed by an LL(1) parser. This means that the parser can uniquely determine which production rule to apply based on the current non-terminal on the stack and the next input token (one symbol lookahead).

*   **Requirements for LL(1) Grammars:**  To be LL(1), a grammar must satisfy the following conditions:
    *   **No Left Recursion:** A grammar is left-recursive if a non-terminal *A* can derive a string that begins with *A* itself. This causes infinite loops in top-down parsing.  Must be eliminated.
    *   **No Ambiguity:** Ambiguous grammars have multiple parse trees for the same input string. LL(1) parsers require unambiguous grammars.
    *   **Disjoint FIRST Sets (for productions of the same non-terminal):**  If a non-terminal *A* has multiple productions:
        *   *A* -> α | β
        *   Then FIRST(α) and FIRST(β) must be disjoint (have no common elements).
        *   If ε (epsilon) is in FIRST(β), then FIRST(α) and FOLLOW(A) must be disjoint.

*   **Example of Non-LL(1) Grammar (Left Recursion):**
    *   `E -> E + T | T`

*   **Example of Non-LL(1) Grammar (Common Prefix):**
    *   `A -> a b c | a b d` (FIRST(a b c) and FIRST(a b d) both contain 'a', causing a conflict when 'a' is the lookahead)

*   **Example of LL(1) Grammar:**
    *   `S -> i E t S e S | a`
    *   `E -> b`

### 3. FIRST and FOLLOW Sets: Construction

*   **FIRST(α):**  The set of terminal symbols that can begin strings derived from α (where α is any string of grammar symbols - terminals and non-terminals).  If α can derive ε, then ε is also in FIRST(α).
*   **FOLLOW(A):** The set of terminal symbols that can immediately follow the non-terminal *A* in some sentential form.  `$` (end-of-input marker) is in FOLLOW(S) if S is the start symbol.

**Rules for Calculating FIRST Sets:**

1.  **If X is a terminal:** FIRST(X) = { X }
2.  **If X is a non-terminal and X -> Y1 Y2 ... Yk is a production:**
    *   Add FIRST(Y1) - {ε} to FIRST(X).
    *   If ε is in FIRST(Y1), then add FIRST(Y2) - {ε} to FIRST(X).
    *   ...Continue until Yk or until ε is not in FIRST(Yi) for some i.
    *   If ε is in FIRST(Y1), FIRST(Y2), ..., FIRST(Yk) for all i, then add ε to FIRST(X).
3.  **If X -> ε is a production:** Add ε to FIRST(X).

**Rules for Calculating FOLLOW Sets:**

1.  Place $ (end-of-input marker) in FOLLOW(S), where S is the start symbol.
2.  **If A -> α B β is a production:** Everything in FIRST(β), except ε, is added to FOLLOW(B).
3.  **If A -> α B is a production, or A -> α B β is a production and ε is in FIRST(β):** Then everything in FOLLOW(A) is added to FOLLOW(B).

**Example Calculation:**

Consider the grammar:

```
S -> A a B
A -> b | ε
B -> c
```

**FIRST Sets:**

*   FIRST(B) = { c }
*   FIRST(A) = { b, ε }
*   FIRST(S) = { b, a }  (FIRST(A) is {b, ε}. Add b to FIRST(S). Since ε is in FIRST(A), add FIRST(a) which is {a} to FIRST(S))

**FOLLOW Sets:**

*   FOLLOW(S) = { $ }
*   FOLLOW(A) = { a }
*   FOLLOW(B) = { $ }  (Since A -> A a B, add FOLLOW(S) to FOLLOW(B))

### 4. LL(1) Parsing Table Construction

1.  **Calculate FIRST and FOLLOW sets** for all non-terminals.
2.  **For each production rule A -> α:**
    *   **For each terminal a in FIRST(α):** Add `A -> α` to `Table[A, a]`.
    *   **If ε is in FIRST(α):** For each terminal b in FOLLOW(A): Add `A -> α` to `Table[A, b]`.  Also, add `A -> α` to `Table[A, $]` if `$` is in FOLLOW(A).
3.  **Empty entries** in the table represent errors.

**Example Table Construction:**

Consider the grammar:

```
E -> T E'
E' -> + T E' | ε
T -> F T'
T' -> * F T' | ε
F -> ( E ) | id
```

**FIRST and FOLLOW Sets:**

| Non-terminal | FIRST           | FOLLOW          |
| :----------- | :-------------- | :-------------- |
| E            | { (, id }       | { ), $ }        |
| E'           | { +, ε }        | { ), $ }        |
| T            | { (, id }       | { +, ), $ }     |
| T'           | { \*, ε }       | { +, ), $ }     |
| F            | { (, id }       | { \*, +, ), $ } |

**LL(1) Parsing Table:**

| Non-terminal | id     | +      | *      | (      | )      | $      |
| :----------- | :------ | :------ | :------ | :------ | :------ | :------ |
| E            | E -> T E'|        |        | E -> T E'|        |        |
| E'           |        | E' -> + T E'|        |        | E' -> ε| E' -> ε|
| T            | T -> F T'|        |        | T -> F T'|        |        |
| T'           |        | T' -> ε| T' -> * F T'|        | T' -> ε| T' -> ε|
| F            | F -> id |        |        | F -> ( E )|        |        |

### 5. Table-Driven LL(1) Parser Operation

1.  **Initialization:**
    *   Push the start symbol onto the stack.
    *   Append `$` to the input string.
2.  **Parsing Loop:**
    *   Let *X* be the top symbol on the stack and *a* be the current input token.
    *   **If *X* is a terminal:**
        *   If *X* == *a*, pop *X* from the stack and advance the input pointer to the next token.
        *   Else, report an error (mismatched terminal).
    *   **If *X* is a non-terminal:**
        *   Consult the parsing table `Table[X, a]`.
            *   **If `Table[X, a]` contains a production `X -> Y1 Y2 ... Yk`:**
                *   Pop *X* from the stack.
                *   Push *Yk Yk-1 ... Y1* onto the stack (push in reverse order to ensure Y1 is on top). This corresponds to a leftmost derivation.
            *   **Else (Table[X, a] is empty):** Report an error (no applicable production).
    *   **If *X* is `$`: **
        *   If *a* is also `$`, the parse is complete and successful.
        *   Else, report an error (input remaining after parsing).
3.  **Repeat step 2** until the stack is empty and the input is consumed.

**Example Parsing (using the grammar and table above):**

Input: `id + id * id $`

| Stack   | Input        | Action                                      |
| :------- | :----------- | :------------------------------------------ |
| E $     | id + id * id $| E -> T E' (Table[E, id])                   |
| T E' $  | id + id * id $| T -> F T' (Table[T, id])                   |
| F T' E' $| id + id * id $| F -> id (Table[F, id])                    |
| id T' E' $| id + id * id $| Match id                                  |
| T' E' $ | + id * id $  | T' -> ε (Table[T', +])                       |
| E' $    | + id * id $  | E' -> + T E' (Table[E', +])                  |
| + T E' $ | + id * id $  | Match +                                     |
| T E' $  | id * id $   | T -> F T' (Table[T, id])                   |
| F T' E' $| id * id $   | F -> id (Table[F, id])                    |
| id T' E' $| id * id $   | Match id                                  |
| T' E' $ | * id $      | T' -> * F T' (Table[T', *])                 |
| * F T' E' $| * id $      | Match *                                     |
| F T' E' $| id $      | F -> id (Table[F, id])                    |
| id T' E' $| id $      | Match id                                  |
| T' E' $ | $      | T' -> ε (Table[T', $])                       |
| E' $    | $      | E' -> ε (Table[E', $])                       |
| $       | $      | Accept                                      |

### 6. Detecting and Resolving Conflicts in LL(1) Parsing Tables

*   **LL(1) Conflict:** An LL(1) conflict occurs when a cell in the parsing table contains more than one production rule. This indicates that the grammar is not LL(1).
*   **Types of Conflicts:**
    *   **FIRST/FIRST Conflict:** Occurs when two productions of the same non-terminal have overlapping FIRST sets.  For example, `A -> a b c | a d e`.  When the lookahead is 'a', the parser doesn't know which rule to apply.  Solution:  Left factoring.
    *   **FIRST/FOLLOW Conflict:** Occurs when ε is in the FIRST set of a production, and the FIRST set of the production overlaps with the FOLLOW set of the non-terminal. For example:  `A -> B a | ε`, and 'a' is in FOLLOW(A).  When the lookahead is 'a', the parser doesn't know whether to derive `B a` or `ε`. Solution: Rethink the grammar structure or use a different parsing technique.

*   **Resolving Conflicts:** (Often requires grammar transformation)

    *   **Left Factoring:**  If two or more productions for a non-terminal share a common prefix, factor out the common prefix.

        *   Example: `A -> a b c | a b d`
        *   After left factoring:  `A -> a b A' ; A' -> c | d`

    *   **Left Recursion Elimination:** Convert left-recursive productions to right-recursive productions.

        *   Example: `E -> E + T | T`
        *   After left recursion elimination: `E -> T E' ; E' -> + T E' | ε`

*   **Important Note:** Not all non-LL(1) grammars can be transformed into LL(1) grammars. In such cases, you may need to use a different parsing technique (e.g., LR parsing).

### 7. Recognizing and Handling Non-LL(1) Grammars

*   **Indicators of a Non-LL(1) Grammar:**
    *   Presence of left recursion.
    *   Presence of ambiguity.
    *   LL(1) parsing table contains conflicts (multiple entries in a cell).
*   **What to do with Non-LL(1) Grammars:**
    *   **Attempt Grammar Transformation:** Apply left factoring and left recursion elimination to try to convert the grammar into an LL(1) grammar.
    *   **Use a Different Parsing Technique:** If grammar transformation is not possible or too complex, use a more powerful parsing technique such as LR parsing (e.g., SLR, LALR, or LR(1) parsing), which can handle a wider class of grammars.  These are bottom-up parsing techniques.

### Important Points to Remember:

*   LL(1) parsers are top-down, predictive parsers.
*   LL(1) grammars must be unambiguous and not left-recursive.
*   FIRST and FOLLOW sets are essential for constructing LL(1) parsing tables.
*   LL(1) conflicts indicate that the grammar is not LL(1).
*   Grammar transformation techniques (left factoring, left recursion elimination) can sometimes resolve LL(1) conflicts.
*   If a grammar cannot be transformed into an LL(1) grammar, use a more powerful parsing technique (LR parsing).

### Practice Questions/Exercises with Answers:

**Question 1:**

Calculate the FIRST and FOLLOW sets for the following grammar:

```
S -> A B C
A -> a | ε
B -> b | ε
C -> c
```

**Answer:**

*   FIRST(A) = { a, ε }
*   FIRST(B) = { b, ε }
*   FIRST(C) = { c }
*   FIRST(S) = { a, b, c }
*   FOLLOW(S) = { $ }
*   FOLLOW(A) = { b, c }
*   FOLLOW(B) = { c }
*   FOLLOW(C) = { $ }

**Question 2:**

Is the following grammar LL(1)?  Explain why or why not.

```
S -> i E t S e S | a
E -> b
```

**Answer:**

Yes, the grammar is LL(1).  It's unambiguous and has no left recursion.  The FIRST sets of the two productions of S are {i} and {a}, which are disjoint.  The FIRST set of E is {b}. Thus an LL(1) parser could use lookahead 'i' to choose the first S production or lookahead 'a' to choose the second production.  Likewise, if the current non-terminal is E and the lookahead is 'b', the second production is chosen.

**Question 3:**

Consider the following grammar:

```
A -> a B | a C
B -> b
C -> c
```

1.  Is this grammar LL(1)?
2.  If not, perform left factoring to transform it into an LL(1) grammar.

**Answer:**

1.  No, this grammar is not LL(1). The FIRST sets of the two productions of A, namely `a B` and `a C`, both have 'a', causing a FIRST/FIRST conflict.

2.  Left factoring:

```
A -> a A'
A' -> B | C
B -> b
C -> c
```

Now, FIRST(B) = {b} and FIRST(C) = {c}, which are disjoint.  Therefore, this transformed grammar *is* LL(1).

**Question 4:**

What is the purpose of the `$` symbol in LL(1) parsing?

**Answer:**

The `$` symbol represents the end-of-input marker. It is added to the end of the input string and to the FOLLOW set of the start symbol.  It's used to signal when the entire input has been successfully parsed and to detect cases where there is input remaining after a successful parse.

**Question 5:**

What are the two main grammar transformations used to help convert a grammar into an LL(1) grammar? Briefly explain each.

**Answer:**

1.  **Left Factoring:** This transformation is applied when two or more productions for a non-terminal share a common prefix. The common prefix is factored out to eliminate FIRST/FIRST conflicts.
2.  **Left Recursion Elimination:** This transformation is applied to eliminate left-recursive productions, which cause infinite loops in top-down parsing.  Left recursion is replaced with right recursion, often introducing a new non-terminal and an epsilon production.
