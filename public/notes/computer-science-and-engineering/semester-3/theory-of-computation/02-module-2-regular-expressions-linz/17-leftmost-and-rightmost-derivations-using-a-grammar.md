---
title: "Leftmost and Rightmost Derivations Using a Grammar"
subject: "THEORY OF COMPUTATION"
module: "Module 2: Regular Expressions (Linz)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8abb4"
status: "completed"
scrapedAt: "2026-05-20T16:30:01.522Z"
---
## THEORY OF COMPUTATION - MODULE 2: REGULAR EXPRESSIONS (LINZ)

### Topic: Leftmost and Rightmost Derivations Using a Grammar

**Description:** Understanding how to derive strings from a grammar using leftmost and rightmost derivations.

**Learning Outcomes:**

*   Understand the concept of a grammar and its role in defining a language.
*   Define and differentiate between leftmost and rightmost derivations.
*   Apply leftmost and rightmost derivations to generate strings from a given grammar.
*   Recognize ambiguous grammars based on the existence of multiple derivations for the same string.

---

**1. Key Concepts and Definitions**

*   **Grammar:** A formal system that defines a language by specifying a set of rules for generating strings in that language. Formally, a grammar G is defined as a 4-tuple:  `G = (V, T, P, S)` where:
    *   `V` is a finite set of variables (or non-terminals). Represent symbols that can be replaced by other symbols (variables or terminals).
    *   `T` is a finite set of terminals. Represent the actual symbols that make up the strings in the language. `V` and `T` are disjoint sets (V ∩ T = ∅).
    *   `P` is a finite set of production rules.  Each rule has the form `α → β`, where `α` is a string of symbols containing at least one variable (α ∈ (V ∪ T)*V(V ∪ T)*), and `β` is a string of symbols (β ∈ (V ∪ T)*).  These rules specify how to replace variables.
    *   `S` is the start variable (S ∈ V).  The derivation process begins with this variable.

*   **Derivation:** A sequence of steps in which production rules are applied to generate a string from the start variable.

*   **Yield (or String Derived):** A string consisting only of terminals that is the final result of a derivation.

*   **Leftmost Derivation:** A derivation where, at each step, the *leftmost* variable in the string is replaced according to a production rule.

*   **Rightmost Derivation:** A derivation where, at each step, the *rightmost* variable in the string is replaced according to a production rule.

*   **Ambiguous Grammar:** A grammar for which there exists a string that has two or more *different* leftmost derivations (or two or more different rightmost derivations).  This indicates that the grammar is not well-defined and can lead to multiple interpretations of the same string.  Note that having the *same* leftmost derivation and rightmost derivation does *not* indicate ambiguity.

**2. Understanding Grammars**

*   A grammar defines the syntax of a language. It specifies how to construct valid strings.
*   The production rules are the core of the grammar, describing how to transform variables into other variables and terminals.
*   Derivations show how the grammar generates strings.

**3. Leftmost Derivations**

*   **Definition:** In a leftmost derivation, the *leftmost* non-terminal in the current string is always replaced first.
*   **Notation:**  Often represented as  `=>lm`, indicating a "leftmost derives" step.
*   **Example:**

    Let's consider a grammar `G = (V, T, P, S)` where:
    *   `V = {S, A}`
    *   `T = {a, b}`
    *   `S = S`
    *   `P = { S → aAS | a, A → SbA | ba }`

    To derive the string "aabbaa" using a leftmost derivation:

    1.  `S =>lm aAS`    (Using rule `S → aAS`)
    2.  `=>lm aSbAS`  (Using rule `A → SbA`)
    3.  `=>lm aabAS`   (Using rule `S → a`)
    4.  `=>lm aabbaAS`  (Using rule `A → ba`)
    5.  `=>lm aabbaaS`  (Using rule `A → a`)
    6.  `=>lm aabbaaa`  (Using rule `S → a`)

**4. Rightmost Derivations**

*   **Definition:** In a rightmost derivation, the *rightmost* non-terminal in the current string is always replaced first.
*   **Notation:**  Often represented as `=>rm`, indicating a "rightmost derives" step.
*   **Example:**

    Using the same grammar `G` as above (from the Leftmost Derivation section):

    To derive the string "aabbaa" using a rightmost derivation:

    1.  `S =>rm aAS`    (Using rule `S → aAS`)
    2.  `=>rm aAa`   (Using rule `S → a`)
    3.  `=>rm aSbAa`  (Using rule `A → SbA`)
    4.  `=>rm aSbaa`   (Using rule `A → ba`)
    5.  `=>rm aabaa`  (Using rule `S → a`)
    6.  `=>rm aabbaa` (Using rule `A → ba`)

**5. Ambiguity**

*   A grammar is ambiguous if a string can be generated using two or more distinct leftmost (or rightmost) derivations.
*   Ambiguity can lead to multiple interpretations of a single input string, which is undesirable in programming language compilers and other applications.
*   **Example:**

    Consider the grammar `G = (V, T, P, S)` where:
    *   `V = {E}`
    *   `T = {a, +, *}`
    *   `S = E`
    *   `P = {E → E + E | E * E | a}`

    Let's derive the string "a + a * a" using two different leftmost derivations:

    **Derivation 1:**

    1.  `E =>lm E + E`
    2.  `=>lm a + E`
    3.  `=>lm a + E * E`
    4.  `=>lm a + a * E`
    5.  `=>lm a + a * a`  (This represents the association `(a + a) * a`)

    **Derivation 2:**

    1.  `E =>lm E * E`
    2.  `=>lm E + E * E`
    3.  `=>lm a + E * E`
    4.  `=>lm a + a * E`
    5.  `=>lm a + a * a`  (This represents the association `a + (a * a)`)

    Since we have two different leftmost derivations for the same string, the grammar `G` is **ambiguous**.

**6. Examples**

**Example 1:**

Grammar:  `S -> aSb | ε`  (where ε represents the empty string)
Language: {a<sup>n</sup>b<sup>n</sup> | n ≥ 0}

*   **String:**  `aabb`

    *   **Leftmost Derivation:**
        1.  `S =>lm aSb`
        2.  `=>lm aaSbb`
        3.  `=>lm aabb`

    *   **Rightmost Derivation:**
        1.  `S =>rm aSb`
        2.  `=>rm aSbb`
        3.  `=>rm aabb`

This grammar is not ambiguous.

**Example 2:**

Grammar: `E -> E + T | T`, `T -> T * F | F`, `F -> (E) | id`

*   **String:** `id + id * id`

    *   **Leftmost Derivation:**
    1. `E => E + T`
    2. `=> T + T`
    3. `=> F + T`
    4. `=> id + T`
    5. `=> id + T * F`
    6. `=> id + F * F`
    7. `=> id + id * F`
    8. `=> id + id * id`

    *   **Rightmost Derivation:**
    1. `E => E + T`
    2. `=> E + T * F`
    3. `=> E + T * id`
    4. `=> E + F * id`
    5. `=> E + id * id`
    6. `=> T + id * id`
    7. `=> F + id * id`
    8. `=> id + id * id`

This grammar is not ambiguous (this is a standard way of expressing precedence of * and +)
**7. Practice Questions/Exercises**

1.  **Grammar:** `S -> aAB`, `A -> aA | b`, `B -> bB | a`
    *   Derive the string "aabaa" using a leftmost derivation.
    *   Derive the string "aabaa" using a rightmost derivation.

2.  **Grammar:** `S -> iEtS | iEtSeS | a`, `E -> b` (where `i` represents `if`, `t` represents `then`, `e` represents `else`, `S` represents `statement`, `E` represents `expression`, and `a` and `b` are terminals)
    *   This grammar is known to be ambiguous ("dangling else" problem).  Find two *different* leftmost derivations for the string "i b t i b t s e s". This demonstrates the ambiguity.

3.  **Grammar:** `S -> 0S1 | 01`
    *   Describe the language generated by this grammar.
    *   Give a leftmost derivation for the string "000111".
    *   Give a rightmost derivation for the string "000111".

**8. Answers to Practice Questions/Exercises**

1.  **Grammar:** `S -> aAB`, `A -> aA | b`, `B -> bB | a`

    *   **Leftmost Derivation for "aabaa":**
        1.  `S =>lm aAB`
        2.  `=>lm aaAB`
        3.  `=>lm aabB`
        4.  `=>lm aabbB`
        5.  `=>lm aabaa`

    *   **Rightmost Derivation for "aabaa":**
        1.  `S =>rm aAB`
        2.  `=>rm aAa`
        3.  `=>rm aabA`
        4.  `=>rm aabB`
        5.  `=>rm aabaa`

2.  **Grammar:** `S -> iEtS | iEtSeS | a`, `E -> b`

    *   **Derivation 1 (Associating `else` with the first `if`):**
        1.  `S =>lm iEtS`
        2.  `=>lm i b t S`
        3.  `=>lm i b t iEtSeS`
        4.  `=>lm i b t i b t S e S`
        5.  `=>lm i b t i b t a e S`
        6.  `=>lm i b t i b t a e a`

    *   **Derivation 2 (Associating `else` with the second `if`):**
        1.  `S =>lm iEtSeS`
        2.  `=>lm i b t S e S`
        3.  `=>lm i b t iEtS e S`
        4.  `=>lm i b t i b t S e S`
        5.  `=>lm i b t i b t a e S`
        6.  `=>lm i b t i b t a e a`

    These distinct derivations demonstrate the ambiguity.  The string "i b t i b t a e a" can be parsed in two different ways, which determines which `if` statement the `else` clause belongs to.

3.  **Grammar:** `S -> 0S1 | 01`

    *   **Language:** {0<sup>n</sup>1<sup>n</sup> | n ≥ 1} (Strings consisting of an equal number of 0s followed by an equal number of 1s, with at least one 0 and one 1).

    *   **Leftmost Derivation for "000111":**
        1.  `S =>lm 0S1`
        2.  `=>lm 00S11`
        3.  `=>lm 000S111`
        4.  `=>lm 000111`

    *   **Rightmost Derivation for "000111":**
        1.  `S =>rm 0S1`
        2.  `=>rm 00S11`
        3.  `=>rm 000S111`
        4.  `=>rm 000111`

**9. Important Points to Remember**

*   Grammars provide a formal way to define languages.
*   Leftmost and rightmost derivations are two specific ways to derive strings.
*   Ambiguity in a grammar can lead to multiple interpretations of the same string, which is usually undesirable. Understanding how to detect ambiguity is important.
*   The order of applying production rules matters in derivations.  Changing the order changes the derivation itself.
*   A grammar can be *unambiguous* even if it has strings that can be derived by two different derivations where the order of production rule application is different.  What makes a grammar *ambiguous* is when a string can be derived by *two distinct leftmost or rightmost derivations*.
