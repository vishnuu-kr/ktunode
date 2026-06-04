---
title: "Regular grammar"
subject: "THEORY OF COMPUTATION"
module: "Module 2: Regular Expressions (Linz)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8abab"
status: "completed"
scrapedAt: "2026-05-20T16:29:54.930Z"
---
## THEORY OF COMPUTATION - Module 2: Regular Expressions (Linz) - Regular Grammar

### Introduction

This module covers Regular Grammars, a formal way to describe regular languages.  Regular grammars are closely related to regular expressions and finite automata, providing a different perspective on defining and recognizing regular languages. Understanding regular grammars is crucial for comprehending the theoretical foundations of compilers, parsers, and other language processing tools. This set of notes aims to provide a comprehensive overview of regular grammars, covering key concepts, definitions, examples, and practice questions.

### Learning Outcomes

By the end of this module, you should be able to:

1.  **Define a regular grammar.**
2.  **Distinguish between right-linear and left-linear grammars.**
3.  **Convert a regular expression to a regular grammar.**
4.  **Convert a finite automaton (DFA or NFA) to a regular grammar.**
5.  **Determine if a given grammar is regular.**
6.  **Generate strings from a regular grammar.**

---

### 1. Defining a Regular Grammar

*   **Definition:** A regular grammar is a formal grammar that generates a regular language.  A formal grammar is defined as a quadruple `G = (V, T, P, S)` where:

    *   `V` is a finite set of variables or non-terminal symbols.
    *   `T` is a finite set of terminal symbols (disjoint from V, i.e., V ∩ T = ∅).
    *   `P` is a finite set of productions or rules of the form `A -> α`, where `A ∈ V` and `α ∈ (V ∪ T)*`.
    *   `S ∈ V` is the start symbol.

*   **Regular Grammar Restrictions:** The productions in a regular grammar must follow specific forms to ensure the generated language is regular.  Specifically, the productions are of the following types:

    *   **Right-Linear Grammar:**  All productions are of the form:
        *   `A -> aB` where `A, B ∈ V` and `a ∈ T`
        *   `A -> a`  where `A ∈ V` and `a ∈ T`
        *   `A -> ε` where `A ∈ V` and `ε` is the empty string.
    *   **Left-Linear Grammar:** All productions are of the form:
        *   `A -> Ba` where `A, B ∈ V` and `a ∈ T`
        *   `A -> a` where `A ∈ V` and `a ∈ T`
        *   `A -> ε` where `A ∈ V` and `ε` is the empty string.
    *   **Crucial Point:** A grammar is regular *only if* it is either right-linear or left-linear.  A grammar that mixes left and right recursion is NOT regular.
*   **Example:**

    Let `G = (V, T, P, S)` be a grammar where:
    *   `V = {S, A, B}`
    *   `T = {a, b}`
    *   `S = S`
    *   `P = {
            S -> aA,
            A -> bB,
            B -> a,
            B -> ε
        }`

    This grammar is a right-linear grammar.

### 2. Distinguishing Between Right-Linear and Left-Linear Grammars

*   **Right-Linear Grammar:** Productions have the non-terminal symbol on the right-hand side (RHS) *after* the terminal symbol. Creates rightmost derivations.
*   **Left-Linear Grammar:** Productions have the non-terminal symbol on the RHS *before* the terminal symbol. Creates leftmost derivations.

*   **Example (Right-Linear):**
    ```
    S -> aA
    A -> bB
    B -> a
    B -> ε
    ```

*   **Example (Left-Linear):**
    ```
    S -> Ab
    A -> Ba
    B -> a
    B -> ε
    ```

*   **Important Note:** While both right-linear and left-linear grammars generate regular languages, a single grammar cannot be *both* right-linear and left-linear.  A grammar can be converted from right-linear to left-linear, but this will result in a *different* grammar that generates the same language.
*   **Mixing Left and Right Linear Productions:** A grammar containing a mixture of left and right linear productions is **not** a regular grammar.
    ```
    S -> aA  //Right Linear
    S -> Ba  //Left Linear
    ```
    This grammar is not regular.

### 3. Converting a Regular Expression to a Regular Grammar

*   **Algorithm:** This process involves creating non-terminals for each sub-expression and defining productions based on the operators in the regular expression.
*   **Steps:**

    1.  **Start with the regular expression `R`.**
    2.  **Create a start symbol `S` for the grammar.**
    3.  **Apply the following transformation rules recursively:**
        *   **`a` (Terminal):** `S -> a`
        *   **`ε` (Empty String):** `S -> ε`
        *   **`R1R2` (Concatenation):**  Create a new non-terminal `A`.  Add productions `S -> R1'A` and `A -> R2'` where `R1'` and `R2'` are the grammar productions for `R1` and `R2` respectively. If `R1` generates `ε`, then add `S -> R2'`.
        *   **`R1 | R2` (Union):**  Add productions `S -> R1'` and `S -> R2'` where `R1'` and `R2'` are the grammar productions for `R1` and `R2` respectively.
        *   **`R*` (Kleene Star):** Create a new non-terminal `A`. Add productions `S -> ε` and `S -> AS`. Derive `A` from `R`'s grammar, `A -> R'`. Note: there are other approaches, this is one example.
    4.  **Simplify:** Combine any duplicate or redundant productions.
*   **Example:** Convert the regular expression `(a|b)*abb` to a regular grammar.

    1.  **Start Symbol:** `S`
    2.  **`(a|b)*`:**
        *   Create `A`:  `S -> ε | AS`
        *   For `(a|b)`: `A -> a | b`
    3.  **`abb`:**
        *   `S -> ε | AS`
        *   `A -> a | b`
        *   Create `B`:  `S -> ε | AS`, `AS -> aB`
        *   Create `C`:  `AS -> aB`, `B -> bC`
        *   Create `D`:  `B -> bC`, `C -> bD`
        *   `C -> bD`, `D -> b`
    4.  **Combine:**
        ```
        S -> ε | AS
        A -> a | b
        AS -> aB
        B -> bC
        C -> bD
        D -> b
        ```

    Simplified right-linear grammar (may vary slightly depending on the exact steps and optimizations):
    ```
    S -> ε | AS
    A -> a | b
    AS -> aB
    B -> bC
    C -> b
    ```

    Further Simplification for a Right-Linear Grammar:
    ```
    S -> ε | aS | bS | aA
    A -> bB
    B -> b
    ```

### 4. Converting a Finite Automaton (DFA or NFA) to a Regular Grammar

*   **Algorithm:**  Each state in the finite automaton becomes a non-terminal in the grammar. Transitions between states become productions.  Accepting states can generate the empty string or terminal symbols.
*   **Steps:**

    1.  **`V` (Non-terminals):**  For each state `q` in the automaton's set of states `Q`, create a non-terminal symbol `q` (or `Aq` or something similar). The start state of the automaton becomes the start symbol of the grammar.
    2.  **`T` (Terminals):**  The input alphabet `Σ` of the automaton becomes the terminal symbols `T` of the grammar.
    3.  **`S` (Start Symbol):** The start state `q0` of the automaton becomes the start symbol `S` of the grammar.
    4.  **`P` (Productions):** For each transition in the automaton:
        *   If `δ(q, a) = p`, then create a production `q -> a p` (or `Aq -> a Ap`).  This indicates that from state `q` on input `a`, the automaton transitions to state `p`, so the grammar allows generating terminal `a` and then going to state `p`.
        *   For each accepting state `qf` in the set of accepting states `F`, add the production `qf -> ε` (or `Aqf -> ε`).  This allows the grammar to terminate in an accepting state.

*   **Example:** Convert the following DFA to a regular grammar:

    *   States: `{q0, q1}`
    *   Alphabet: `{a, b}`
    *   Start State: `q0`
    *   Accepting State: `{q1}`
    *   Transitions:
        *   `δ(q0, a) = q1`
        *   `δ(q0, b) = q0`
        *   `δ(q1, a) = q1`
        *   `δ(q1, b) = q1`

    Regular Grammar:
    *   `V = {q0, q1}`
    *   `T = {a, b}`
    *   `S = q0`
    *   `P = {
            q0 -> a q1,
            q0 -> b q0,
            q1 -> a q1,
            q1 -> b q1,
            q1 -> ε
        }`

### 5. Determining if a Given Grammar is Regular

*   **Method:** Check if all productions in the grammar conform to the right-linear or left-linear format.

*   **Steps:**

    1.  **Examine each production in the grammar.**
    2.  **Check if it's right-linear:**  Productions are of the form `A -> aB` or `A -> a` or `A -> ε`.
    3.  **Check if it's left-linear:**  Productions are of the form `A -> Ba` or `A -> a` or `A -> ε`.
    4.  **If all productions are either right-linear or left-linear, then the grammar is regular.**
    5.  **If the grammar has a mix of right-linear and left-linear productions, it is NOT regular.**
    6.  **If any production does not conform to either right-linear or left-linear format, it is NOT regular.**

*   **Examples:**

    *   **Regular (Right-Linear):**
        ```
        S -> aA
        A -> bB
        B -> a
        B -> ε
        ```

    *   **Regular (Left-Linear):**
        ```
        S -> Ab
        A -> Ba
        B -> a
        B -> ε
        ```

    *   **NOT Regular (Mix of Left and Right Linear):**
        ```
        S -> aA
        S -> Ba
        A -> b
        ```

    *   **NOT Regular (Non-Regular Form):**
        ```
        S -> AB  //Invalid form
        A -> a
        B -> b
        ```

### 6. Generating Strings from a Regular Grammar

*   **Method:**  Start with the start symbol and apply productions until only terminal symbols and/or the empty string remain.

*   **Steps:**

    1.  **Start with the start symbol `S`.**
    2.  **Apply a production rule from `P` that has `S` on the left-hand side.**
    3.  **If the resulting string contains non-terminal symbols, select a non-terminal and apply a production rule from `P` that has that non-terminal on the left-hand side.**
    4.  **Repeat step 3 until the string contains only terminal symbols or the empty string.**  This resulting string is a string generated by the grammar.

*   **Example:**

    Consider the grammar:

    *   `S -> aA | bB`
    *   `A -> b`
    *   `B -> a`

    Possible string derivations:

    1.  `S -> aA -> ab`
    2.  `S -> bB -> ba`

    Therefore, `ab` and `ba` are strings generated by this grammar.

---

### Practice Questions and Exercises

1.  **Question:** Define a regular grammar for the language consisting of all strings over `{a, b}` that have at least one `a`.
    *   **Answer:**

        ```
        S -> ASB | BSA | AS | SA | a
        A -> a
        B -> b
        ```

        Here is another valid answer:

        ```
        S -> ASB | BSA | AS | SA | a
        A -> a | ε
        B -> b | ε
        ```

        Here is another valid answer, right-linear grammar
        ```
        S -> aA | bS
        A -> aA | bA | ε
        ```

2.  **Question:** Convert the regular expression `a(b|c)*` to a regular grammar.
    *   **Answer:**

        ```
        S -> aA
        A -> bA | cA | ε
        ```

3.  **Question:** Convert the following DFA to a regular grammar:

    *   States: `{q0, q1, q2}`
    *   Alphabet: `{0, 1}`
    *   Start State: `q0`
    *   Accepting State: `{q2}`
    *   Transitions:
        *   `δ(q0, 0) = q1`
        *   `δ(q0, 1) = q0`
        *   `δ(q1, 0) = q2`
        *   `δ(q1, 1) = q1`
        *   `δ(q2, 0) = q2`
        *   `δ(q2, 1) = q2`

    *   **Answer:**

        ```
        S -> 0q1 | 1S
        q1 -> 0q2 | 1q1
        q2 -> 0q2 | 1q2 | ε
        ```

4.  **Question:** Is the following grammar regular?  Explain why or why not.

    ```
    S -> aA | bB
    A -> cA | d
    B -> eB | f
    ```

    *   **Answer:** Yes, the grammar is regular.  All productions are right-linear.

5.  **Question:** Generate three different strings from the following grammar:

    ```
    S -> aS | bA
    A -> b
    ```

    *   **Answer:**

        1.  `bA -> b`
        2.  `aS -> abA -> abb`
        3.  `aS -> aaS -> aabA -> aabb`

---

### Important Points to Remember

*   Regular grammars are either right-linear or left-linear, but not both in the same grammar.
*   They are equivalent in expressive power to regular expressions and finite automata.
*   Converting between representations (regular expression <-> grammar <-> finite automata) is a key skill.
*   Understanding regular grammars is foundational for parsing and compiler design.

This concludes the study notes on Regular Grammars.  Good luck with your studies! Remember to practice converting between regular expressions, finite automata, and regular grammars to solidify your understanding.
