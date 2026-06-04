---
title: "Resolving ambiguity"
subject: "THEORY OF COMPUTATION"
module: "Module 2: Regular Expressions (Linz)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8abb7"
status: "completed"
scrapedAt: "2026-05-20T16:30:04.069Z"
---
## Theory of Computation: Module 2 - Regular Expressions (Linz) - Resolving Ambiguity

**Introduction:**

This module delves into the critical issue of ambiguity in regular expressions and grammars. Ambiguity can lead to unexpected behavior in parsers and other tools that rely on regular expressions. Understanding how to identify and resolve ambiguity is crucial for building robust and reliable computational systems. This topic draws heavily from Linz's "An Introduction to Formal Languages and Automata."

**Learning Outcomes:**

*   Define ambiguity in the context of regular expressions and grammars.
*   Identify ambiguous regular expressions and grammars.
*   Explain the consequences of ambiguity.
*   Describe methods for resolving ambiguity in regular expressions and grammars.
*   Apply these methods to construct unambiguous regular expressions and grammars.

**1. Defining Ambiguity**

*   **Definition:** A grammar (or regular expression) is **ambiguous** if there exists at least one string that can be derived from the grammar (or matched by the regular expression) using two or more distinct parse trees (or distinct paths through the corresponding automaton).

*   **Key Concept:** Distinct derivations imply different structural interpretations of the same string, leading to uncertainty in its meaning.

*   **Example (Grammar):**
    *   Consider the grammar `E -> E + E | E * E | id` (where 'id' represents an identifier).
    *   The string `id + id * id` can be derived in two ways:
        *   `E -> E + E -> id + E -> id + E * E -> id + id * id` (Associating `+` first)
        *   `E -> E * E -> E + E * E -> id + E * E -> id + id * id` (Associating `*` first)
    *   These two derivations correspond to different parse trees, making the grammar ambiguous.

*   **Example (Regular Expression):**
    *   Consider the regular expression `a*a*`.
    *   The string "aa" can be matched in (at least) two different ways:
        *   The first `a*` matches "aa" and the second `a*` matches "".
        *   The first `a*` matches "a" and the second `a*` matches "a".
        *   The first `a*` matches "" and the second `a*` matches "aa".
    *   While the result is the same (matching "aa"), the different matching paths indicate ambiguity. This is often less critical in regular expression matching than grammar parsing.

**2. Identifying Ambiguous Regular Expressions and Grammars**

*   **Grammars:**
    *   **Look for rules that allow multiple ways to generate the same substring.** Common examples:
        *   Arithmetic expressions without precedence or associativity defined (like the example above).
        *   Dangling `else` problem in programming languages.
        *   Recursive definitions that can be applied in different orders.

*   **Regular Expressions:**
    *   **Look for overlapping patterns that can match the same portion of a string in multiple ways.**
        *   `a*a*`, `(a|b)*a(a|b)*a(a|b)*`  (at least two 'a's), `.*abc.*abc.*` (at least two occurrences of "abc")
    *   **Carefully analyze expressions with Kleene star (*) and union (|).**

*   **Important Note:**  It is generally undecidable whether an arbitrary context-free grammar is ambiguous. However, we can often identify ambiguity by carefully analyzing the grammar rules and considering different possible derivations.  For regular expressions, ambiguity is less of a practical problem, but its presence can indicate inefficient matching.

**3. Consequences of Ambiguity**

*   **Parsing Issues:**
    *   A parser for an ambiguous grammar may produce multiple parse trees for the same input string.
    *   This can lead to incorrect interpretation of the string's meaning.
    *   Resolving ambiguity becomes crucial for compilers and interpreters to ensure correct code execution.

*   **Unexpected Behavior:**
    *   Regular expressions can exhibit unexpected matching behavior. While the matching might still be correct (in that it matches the string), the *way* it matches can vary depending on the regex engine's implementation. This can affect performance and predictability.

*   **Design Complexity:**
    *   Ambiguity often indicates a poorly designed grammar or regular expression.
    *   It can make the system harder to understand, maintain, and debug.

*   **Practical Example: Dangling Else**
    ```
    if (condition1)
        if (condition2)
            statement1;
    else
        statement2;
    ```
    *   The `else` clause could be associated with either the first or the second `if`. This ambiguity can lead to incorrect program behavior depending on the parser's decision.

**4. Methods for Resolving Ambiguity**

*   **Grammars:**

    *   **Precedence and Associativity Rules:**  Explicitly define the order in which operators are applied.  This is commonly used for arithmetic expressions.
        *   Example: Transform `E -> E + E | E * E | id` into:
            ```
            E -> T | E + T
            T -> F | T * F
            F -> id
            ```
            This grammar enforces multiplication to have higher precedence than addition.

    *   **Rewriting the Grammar:** Restructure the grammar to eliminate ambiguous productions. This often involves introducing new non-terminal symbols and carefully controlling the order of derivations.
        *   For the dangling `else` problem, create separate non-terminals for matched and unmatched `if` statements.

    *   **Using Parser Generators with Disambiguation Rules:**  Parser generators like Yacc/Bison allow you to specify precedence and associativity rules to resolve ambiguity at parse time.

*   **Regular Expressions:**

    *   **Specifying More Precise Patterns:**  Refine the regular expression to be more specific and avoid overlapping matches.  This often involves carefully considering the context in which a pattern is expected to occur.

    *   **Ordering Alternatives:**  In regular expression engines that use backtracking, the order of alternatives in a union (`|`) can affect the matching behavior.  Place more specific alternatives *before* more general ones to ensure the desired match is found first.

    *   **Using Non-Greedy Quantifiers:**  By default, quantifiers like `*` and `+` are greedy (they match as much as possible).  Using non-greedy quantifiers (`*?`, `+?`, `??`, `{}?`) can sometimes resolve ambiguity by making the engine match as little as possible. However, non-greedy quantifiers don't fundamentally eliminate ambiguity; they just change which match is preferred.

**5. Examples of Resolving Ambiguity**

*   **Arithmetic Expression Grammar (Resolved):**

    ```
    E -> T | E + T
    T -> F | T * F
    F -> id | (E)
    ```

    This grammar enforces precedence (multiplication before addition) and associativity (left-to-right).  The string `id + id * id` has only one valid parse tree now, associating `*` before `+`.

*   **Dangling Else Grammar (Resolved):**

    ```
    S -> MatchedIf | UnmatchedIf
    MatchedIf -> if (condition) MatchedIf else MatchedIf | other_statement
    UnmatchedIf -> if (condition) S | if (condition) MatchedIf else UnmatchedIf
    ```

    This grammar explicitly distinguishes between `if` statements with matching `else` clauses (`MatchedIf`) and those without (`UnmatchedIf`), forcing the `else` to associate with the nearest unmatched `if`.

*   **Ambiguous Regex: `a*a*` (Resolved - sort of... efficiency increased)**

    While not strictly 'resolved' (the ambiguity remains technically), we can improve efficiency. `a*` is equivalent.  To ensure only a full match, you might use `a+` if at least one `a` is required. The goal is to *reduce* the multiple possible matching paths for better performance, even if the ambiguity isn't entirely eliminated conceptually.

*   **Example: Matching "abc" at least twice: `.*abc.*abc.*` (Resolved)**

    *   Ambiguous because the `.*` parts can match the "abc" substrings themselves.
    *   Resolved: `[^a]*abc[^a]*abc[^a]*` (assuming you are looking for the occurence of at least two "abc"s, and "a" is not allowed in the string). The `[^a]*` means that after and before each "abc" there must be only symbols different than "a".
    *   A better solution could be `(?!abc)`. This means that "abc" cannot follow itself. The pattern will become: `((?!abc).)*abc((?!abc).)*abc`

**6. Practice Questions/Exercises**

1.  **Identify whether the following grammar is ambiguous:**

    ```
    S -> aS | Sb | ab
    ```
    *Consider the string `aab`.*

2.  **Rewrite the following ambiguous grammar to be unambiguous:**

    ```
    S -> S + S | id
    ```
    *Assuming left associativity for `+`.*

3.  **Is the regular expression `(a|ab)*b` ambiguous?  Explain.**

4.  **Given the string "aabb", show two different matching paths for the regular expression `a*a*b*b*` .**

**Answers:**

1.  **Yes, the grammar is ambiguous.** The string `aab` can be derived in two ways:
    *   `S -> aS -> aaS -> aab`
    *   `S -> Sb -> aSb -> aab`

2.  **Unambiguous Grammar:**

    ```
    S -> T | S + T
    T -> id
    ```

3.  **Yes, the regular expression `(a|ab)*b` is ambiguous.** For example, the string "ab" can be matched in two ways:
    *   `(a|ab)*` matches "" and then the final `b` matches "b".
    *   `(a|ab)*` matches "ab" and then the final `b` matches "".

4.  **Two matching paths for `a*a*b*b*` on "aabb":**
    *   `a*` (matches "aa"), `a*` (matches ""), `b*` (matches "bb"), `b*` (matches "")
    *   `a*` (matches "a"), `a*` (matches "a"), `b*` (matches "b"), `b*` (matches "b")

**7. Important Points to Remember**

*   Ambiguity leads to multiple possible interpretations of the same input.
*   Ambiguous grammars and regular expressions can cause parsing and matching issues.
*   Precedence, associativity, and careful grammar rewriting are key techniques for resolving ambiguity.
*   Ambiguity in regular expressions is less critical but can indicate inefficiencies.
*   Understand the concept of left and right associativity when dealing with operators in grammars.
*   Always test your grammars and regular expressions with various inputs to identify potential ambiguity.
