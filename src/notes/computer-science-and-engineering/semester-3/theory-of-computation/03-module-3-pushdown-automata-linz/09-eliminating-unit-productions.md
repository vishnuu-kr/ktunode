---
title: "Eliminating unit productions"
subject: "THEORY OF COMPUTATION"
module: "Module 3: Pushdown Automata (Linz)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8abc3"
status: "completed"
scrapedAt: "2026-05-20T16:30:12.598Z"
---
# THEORY OF COMPUTATION - Module 3: Pushdown Automata (Linz) - Eliminating Unit Productions

## Introduction

This document covers the process of eliminating unit productions from Context-Free Grammars (CFGs). Unit productions are productions of the form `A -> B`, where both A and B are non-terminal symbols. Eliminating these productions simplifies the grammar without changing the language it generates, which is crucial for converting CFGs into Chomsky Normal Form (CNF), a standard form used in many computational tasks.

## Learning Outcomes

By the end of this document, you should be able to:

*   Define a unit production.
*   Identify unit productions in a given CFG.
*   Describe the algorithm for eliminating unit productions from a CFG.
*   Apply the algorithm to eliminate unit productions from a CFG.
*   Understand why eliminating unit productions is important in the context of converting a CFG to CNF.

## 1. Key Concepts and Definitions

*   **Context-Free Grammar (CFG):** A formal grammar defined by a set of production rules used to generate strings in a language. A CFG is denoted as `G = (V, T, P, S)`, where:
    *   `V` is a finite set of non-terminal symbols (variables).
    *   `T` is a finite set of terminal symbols (alphabet).
    *   `P` is a finite set of production rules of the form `A -> α`, where `A ∈ V` and `α ∈ (V ∪ T)*`.
    *   `S ∈ V` is the start symbol.
*   **Production Rule:**  A rule in a CFG that defines how a non-terminal symbol can be replaced by a sequence of terminals and/or non-terminals.
*   **Unit Production:** A production of the form `A -> B`, where `A ∈ V` and `B ∈ V`. Both A and B are non-terminal symbols.  These productions simply rename one non-terminal to another.
*   **Chomsky Normal Form (CNF):** A simplified form for CFGs where all production rules are either of the form:
    *   `A -> BC` (where A, B, and C are non-terminal symbols)
    *   `A -> a` (where A is a non-terminal symbol and a is a terminal symbol)
    *   `S -> ε` (where S is the start symbol and ε is the empty string)  *Only allowed if ε is in the language.*

## 2. Identifying Unit Productions

A unit production is easily identifiable in a CFG because it has the form `A -> B`, where A and B are both non-terminals.

**Example:**

Consider the following CFG:

```
S -> A | b
A -> B
B -> C
C -> a
```

In this grammar, the unit productions are:

*   `A -> B`
*   `B -> C`

## 3. Algorithm for Eliminating Unit Productions

The algorithm for eliminating unit productions involves the following steps:

1.  **Find all unit productions:** Identify all productions of the form `A -> B`, where A and B are non-terminals.

2.  **For each non-terminal A, determine its unit set:** The *unit set* of a non-terminal A, denoted as `U(A)`, is the set of all non-terminals B such that `A =>* B` (A derives B in zero or more steps using only unit productions).  In other words, if A derives B using only unit productions, B is in A's unit set.

3.  **Modify the grammar:**
    *   For each non-terminal `A` and each non-terminal `B` in `U(A)`, add the production `A -> α` to the grammar, where `B -> α` is a production that is *not* a unit production, and `α` is a string of terminals and/or non-terminals.  This adds all productions that B can directly derive, as productions that A can directly derive (excluding unit productions).
    *   Remove all the original unit productions from the grammar.

**Important Note:** This algorithm assumes that the grammar does not contain any useless symbols (symbols that cannot be derived into a string of terminals, or cannot be reached from the start symbol).  It is good practice to remove useless symbols *before* eliminating unit productions, although not strictly necessary.

## 4. Applying the Algorithm - Step-by-Step Example

Let's apply the algorithm to the following grammar:

```
S -> A | b
A -> B
B -> C
C -> a
```

**Step 1: Find all unit productions:**

*   `A -> B`
*   `B -> C`

**Step 2: Determine the unit sets:**

*   `U(S) = {S, A, B, C}` (S -> A -> B -> C)
*   `U(A) = {A, B, C}` (A -> B -> C)
*   `U(B) = {B, C}` (B -> C)
*   `U(C) = {C}` (C is a base case)

**Step 3: Modify the grammar:**

*   **For S:** Since `U(S) = {S, A, B, C}`, we look for non-unit productions originating from A, B, and C.
    *   C has the non-unit production `C -> a`.  So, we add `S -> a`.
    *   S has the non-unit production `S -> b`. So we add `S -> b`.
*   **For A:** Since `U(A) = {A, B, C}`, we look for non-unit productions originating from B and C.
    *   C has the non-unit production `C -> a`.  So, we add `A -> a`.
*   **For B:** Since `U(B) = {B, C}`, we look for non-unit productions originating from C.
    *   C has the non-unit production `C -> a`.  So, we add `B -> a`.
*   **For C:** `U(C) = {C}`. C already has a non-unit production `C -> a`, so nothing to add.

After adding the new productions, remove the unit productions:

```
S -> a | b
A -> a
B -> a
C -> a
```

This grammar is now equivalent to the original grammar, but without any unit productions.

## 5. Why is Eliminating Unit Productions Important?

Eliminating unit productions is a crucial step when converting a CFG to Chomsky Normal Form (CNF). CNF has several important applications in computer science, including:

*   **Parsing algorithms:** Many efficient parsing algorithms, such as the CYK algorithm, require the grammar to be in CNF.
*   **Grammar simplification:** CNF provides a standardized and simplified form for CFGs, making them easier to analyze and manipulate.
*   **Formal language theory:** CNF is often used in proofs and constructions in formal language theory.

## 6. Practice Questions/Exercises

**Question 1:**

Eliminate unit productions from the following CFG:

```
S -> A | B
A -> C | a
B -> b
C -> D
D -> E
E -> a
```

**Answer 1:**

1.  **Unit Productions:**
    *   `S -> A`
    *   `A -> C`
    *   `C -> D`
    *   `D -> E`

2.  **Unit Sets:**
    *   `U(S) = {S, A, C, D, E}`
    *   `U(A) = {A, C, D, E}`
    *   `U(B) = {B}`
    *   `U(C) = {C, D, E}`
    *   `U(D) = {D, E}`
    *   `U(E) = {E}`

3.  **Modified Grammar:**

    *   **For S:** `U(S) = {S, A, C, D, E}`. A has non-unit production `A -> a`. B has non-unit production `B->b`.  E has non-unit production `E -> a`.  Therefore, we add `S -> a` and `S->b`.
    *   **For A:** `U(A) = {A, C, D, E}`. E has non-unit production `E -> a`. Therefore, we add `A -> a`.
    *   **For B:** `U(B) = {B}`.  B has the non-unit production `B -> b`. So nothing to add.
    *   **For C:** `U(C) = {C, D, E}`. E has non-unit production `E -> a`. Therefore, we add `C -> a`.
    *   **For D:** `U(D) = {D, E}`. E has non-unit production `E -> a`. Therefore, we add `D -> a`.
    *   **For E:** `U(E) = {E}`. E has non-unit production `E -> a`. So nothing to add.

    Remove unit productions:

    ```
    S -> a | b
    A -> a
    B -> b
    C -> a
    D -> a
    E -> a
    ```

**Question 2:**

Eliminate unit productions from the following grammar:

```
S -> A | b
A -> B | c
B -> C
C -> A | d
```

**Answer 2:**

1. **Unit Productions:**
    * `S -> A`
    * `A -> B`
    * `B -> C`
    * `C -> A`

2. **Unit Sets:**
    * `U(S) = {S, A, B, C}`
    * `U(A) = {A, B, C}`
    * `U(B) = {B, C, A}`
    * `U(C) = {C, A, B}`

3. **Modified Grammar:**

    *   **For S:** `U(S) = {S, A, B, C}`. A has non-unit production `A -> c`. Therefore we add `S -> c`.  S has non-unit production `S -> b`. Therefore we add `S -> b`.
    *   **For A:** `U(A) = {A, B, C}`.  A has non-unit production `A -> c`. Therefore we add `A -> c`.
    *   **For B:** `U(B) = {B, C, A}`.  A has non-unit production `A -> c`. Therefore we add `B -> c`.
    *   **For C:** `U(C) = {C, A, B}`.  A has non-unit production `A -> c`. Therefore we add `C -> c`.

    Remove unit productions:

    ```
    S -> b | c
    A -> c
    B -> c
    C -> c
    ```

## 7. Important Points to Remember

*   The algorithm for eliminating unit productions works by systematically replacing non-terminal variables with their possible terminal derivations.
*   Eliminating unit productions *does not* change the language generated by the grammar. The new grammar is equivalent to the original grammar.
*   Ensure that the grammar is pre-processed for any useless symbols before applying the algorithm, even if not strictly necessary.
*   After eliminating unit productions, the grammar will be closer to a form suitable for conversion to CNF.

This comprehensive guide should provide a solid understanding of how to eliminate unit productions from CFGs. Practice with different examples to solidify your knowledge. Good luck!
