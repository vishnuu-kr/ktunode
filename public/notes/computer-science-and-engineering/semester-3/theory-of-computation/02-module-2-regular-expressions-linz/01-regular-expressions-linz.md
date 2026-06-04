---
title: "Regular Expressions (Linz)"
subject: "THEORY OF COMPUTATION"
module: "Module 2: Regular Expressions (Linz)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8aba4"
status: "completed"
scrapedAt: "2026-05-20T16:29:49.910Z"
---
# THEORY OF COMPUTATION - MODULE 2: REGULAR EXPRESSIONS (LINZ) - REGULAR EXPRESSIONS

These notes cover the fundamental concepts of regular expressions based on the Linz textbook.

**Learning Outcomes:**

*   Understand the definition and syntax of regular expressions.
*   Be able to construct regular expressions for given languages.
*   Understand the precedence rules of regular expression operators.
*   Be able to simplify regular expressions.
*   Convert regular expressions to Finite Automata (NFA/DFA) conceptually (implementation is in subsequent topics).

## 1. Introduction to Regular Expressions

*   **What are Regular Expressions?**
    *   Regular expressions are a powerful and concise notation for defining regular languages. They provide a way to describe patterns within strings.
    *   They are used in various applications, including text processing, pattern matching, compilers, and network security.

*   **Why Use Regular Expressions?**
    *   Provide a formal way to define regular languages.
    *   Easier to understand and write compared to equivalent state diagrams or transition tables.
    *   Widely supported in programming languages and tools.

## 2. Definition and Syntax of Regular Expressions

*   **Alphabet (Σ):** A finite, non-empty set of symbols.  E.g., Σ = {a, b}

*   **Base Cases:**
    *   **∅ (Empty Set):** Represents the language containing no strings (L(∅) = {}).
    *   **ε (Epsilon):** Represents the language containing only the empty string (L(ε) = {ε}).
    *   **a (for any a ∈ Σ):** Represents the language containing only the string "a" (L(a) = {a}).

*   **Recursive Definition:**  If `r1` and `r2` are regular expressions, then the following are also regular expressions:
    *   **`r1 + r2` (Union):**  Represents the language L(r1) ∪ L(r2) (all strings that are in either r1 OR r2).
    *   **`r1r2` (Concatenation):** Represents the language L(r1)L(r2) (all strings formed by concatenating a string from r1 with a string from r2).
    *   **`r1*` (Kleene Star):** Represents the language L(r1)* (all strings formed by concatenating zero or more strings from r1).
        *   Note: `L(r1)*` includes the empty string (ε).

*   **Regular Expression (r):**  A regular expression is any expression built from the base cases and recursive operations listed above.

## 3. Examples of Regular Expressions and Their Languages

*   **Example 1: `a + b`**
    *   Language: {a, b}
    *   Description:  Strings consisting of either "a" or "b".

*   **Example 2: `ab`**
    *   Language: {ab}
    *   Description:  The string "ab".

*   **Example 3: `a*`**
    *   Language: {ε, a, aa, aaa, aaaa, ...}
    *   Description:  Any string consisting of zero or more "a"s.

*   **Example 4: `(a + b)*`**
    *   Language:  All strings over the alphabet {a, b} (including ε).
    *   Description:  Any combination of "a"s and "b"s, including the empty string.

*   **Example 5: `a(a + b)*`**
    *   Language:  All strings over the alphabet {a, b} that start with "a".
    *   Description: Any string starting with 'a' followed by any combination of 'a' and 'b' (including an empty string of 'a's and 'b's).

*   **Example 6: `(a + b)*b(a + b)*`**
    *   Language:  All strings over the alphabet {a, b} that contain at least one "b".
    *   Description:  Any combination of "a"s and "b"s that contains at least one "b".

*   **Example 7: `a(aa)*`**
    *   Language: {a, aaa, aaaaa, aaaaaaa, ...}
    *   Description: Strings containing an odd number of 'a's. Starts with 'a' followed by zero or more instances of 'aa'.

## 4. Constructing Regular Expressions for Given Languages

*   **Guidelines:**
    *   Break down the language into smaller, manageable parts.
    *   Use the union operator (+) to represent alternatives.
    *   Use concatenation to represent sequences of symbols.
    *   Use the Kleene star (*) to represent repetition.
    *   Test your regular expression with various strings to ensure it matches the desired language.

*   **Example 1: Language of all strings over {a, b} that start with 'a' and end with 'b'.**

    *   Regular Expression: `a(a+b)*b`
    *   Explanation: Start with `a`, followed by any number of `a`s or `b`s, and ending with `b`.

*   **Example 2: Language of all strings over {0, 1} with at least two consecutive 0s.**

    *   Regular Expression: `(0 + 1)*00(0 + 1)*`
    *   Explanation: Any combination of 0s and 1s, followed by "00", followed by any combination of 0s and 1s.

*   **Example 3:  Language of all strings over {a, b} with an even number of 'a's.**

    *   Regular Expression: `b*(ab*ab*)*`
    *   Explanation: This regular expression ensures that 'a' always occurs in pairs, allowing for any number of 'b's between them. `b*` accounts for any leading 'b's. `(ab*ab*)*` handles zero or more occurrences of paired 'a's, with any number of 'b's between and around them.

## 5. Precedence of Regular Expression Operators

*   **Highest Precedence:** Kleene Star (*)
*   **Medium Precedence:** Concatenation (implicit, `r1r2`)
*   **Lowest Precedence:** Union (+)

*   **Parentheses:** Used to override precedence rules. Operations inside parentheses are evaluated first.

*   **Example:** `a + bc*` is interpreted as `a + (b(c*))`
*   **Example:** `(a + b)c*` is interpreted as `(a + b)(c*)`

## 6. Simplifying Regular Expressions

*   **Goal:** To create a simpler, more readable regular expression that describes the same language.

*   **Techniques:**
    *   **Using Operator Identities:**
        *   `r + ∅ = r`  (∅ is the identity for union)
        *   `rε = r` and `εr = r` (ε is the identity for concatenation)
        *   `∅* = ε`
        *   `ε* = ε`
        *   `r + r = r`
    *   **Factoring out common prefixes/suffixes:**
        *   `ra + rb = r(a + b)`
        *   `ar + br = (a + b)r`
    *   **Eliminating redundant Kleene stars:**
        *   `(r*)* = r*`
        *   `r*r* = r*`
        *   `rr* = r*r`

*   **Example:**  Simplify `(a + b)*a(a + b)* + (a + b)*b(a + b)*`
    *   This represents all strings over {a, b} that contain at least one 'a' OR at least one 'b'.  Since every string over {a, b} contains at least one of them (unless it's the empty string), and this doesn't contain empty string.
    *   Simplified: `(a+b)(a+b)* `   (any string in {a,b} concatenated with any number of strings consisting of {a,b})

*   **Example:** Simplify `(a*)*`
    *   Simplified: `a*`

## 7. Converting Regular Expressions to Finite Automata (Conceptual)

*   This section describes the *conceptual* process.  The formal algorithms and constructions will be covered in more detail in subsequent modules.  We focus here on understanding *how* you could build the FA.

*   **Thompson's Construction (Overview):** A method for converting a regular expression to an equivalent NFA. The key idea is to build NFAs for the base cases (∅, ε, a) and then recursively combine these NFAs using specific constructions for union, concatenation, and Kleene star.

*   **Base Cases:**
    *   **∅:** An NFA with a start state and a non-accepting final state, with no transitions between them.  No string is accepted.
    *   **ε:** An NFA with a start state that is also an accepting final state.  Only the empty string is accepted.
    *   **a (for a ∈ Σ):** An NFA with a start state, a final accepting state, and a single transition labeled 'a' from the start to the final state.  Only the string "a" is accepted.

*   **Recursive Construction:**
    *   **`r1 + r2` (Union):** Create a new start state with ε-transitions to the start states of the NFAs for `r1` and `r2`.  Create a new final state with ε-transitions from the final states of the NFAs for `r1` and `r2`.
    *   **`r1r2` (Concatenation):**  Connect the final state of the NFA for `r1` to the start state of the NFA for `r2` with an ε-transition. (Merge the states).
    *   **`r1*` (Kleene Star):**  Create a new start state and a new final state.  Add ε-transitions from the new start state to the original start state of the NFA for `r1` and to the new final state.  Add ε-transitions from the original final state of the NFA for `r1` back to the original start state, and from the original final state to the new final state.

*   **Example (Conceptual):** Convert `(a + b)*` to an NFA (roughly)
    1.  NFA for `a`: Start state -> `a` -> Final state
    2.  NFA for `b`: Start state -> `b` -> Final state
    3.  NFA for `a + b` (Union): New start -> ε -> NFA(a) Start, New start -> ε -> NFA(b) Start, NFA(a) Final -> ε -> New Final, NFA(b) Final -> ε -> New Final
    4.  NFA for `(a + b)*` (Kleene Star): New start -> ε -> NFA(a+b) Start, New start -> ε -> New Final, NFA(a+b) Final -> ε -> NFA(a+b) Start, NFA(a+b) Final -> ε -> New Final

## 8. Practice Questions and Exercises

**1. Write regular expressions for the following languages over Σ = {0, 1}:**

    a) All strings that start with 1 and end with 0.
    b) All strings that contain the substring "110".
    c) All strings that have an odd number of 1s.
    d) All strings that do *not* contain the substring "00".

**2. Simplify the following regular expressions:**

    a) (a + b)* (a + b) (a + b)*
    b) (ε + a)a*
    c) (a + b)* a (a + b)* + (a + b)*

**3. Describe the languages defined by the following regular expressions:**

    a) a*b*
    b) (ab)*
    c) (a + b)aa(a + b)*

**4. (Conceptual) Sketch the NFA that would result from applying Thompson's Construction to the regular expression `ab*`.**

**Answers:**

**1.**

    a) 1(0 + 1)*0
    b) (0 + 1)*110(0 + 1)*
    c) 0*1(0*10*1)*0*  (Any number of 0s, followed by 1, followed by pairs of 1 with any number of 0s around the 1s, followed by any number of 0s.)
    d) (1*(011*)*0*) + 1* (A string that starts with any number of ones, followed by zero or more repeats of 011*, followed by at most one 0)

**2.**

    a) (a + b)*
    b) a*
    c) (a + b)*  (any string in {a,b})

**3.**

    a) All strings consisting of any number of 'a's followed by any number of 'b's.
    b) All strings consisting of zero or more repetitions of "ab".
    c) All strings that start with either 'a' or 'b', followed by "aa", followed by any string of 'a's and 'b's.

**4.**

    1.  NFA for `b`: Start -> `b` -> Final
    2.  NFA for `b*`: New Start -> ε -> NFA(b) Start, New Start -> ε -> New Final, NFA(b) Final -> ε -> NFA(b) Start, NFA(b) Final -> ε -> New Final
    3. NFA for `a`: Start -> `a` -> Final
    4. NFA for `ab*`:  NFA(a) connected to NFA(b*) final state by combining the states, NFA(a) final state is same as NFA(b*) start state.

## 9. Important Points to Remember

*   Regular expressions are a powerful tool for defining regular languages.
*   Understanding the precedence of operators is crucial for interpreting regular expressions correctly.
*   Simplifying regular expressions can improve readability and efficiency.
*   Thompson's construction (or similar algorithms) provides a systematic way to convert regular expressions to NFAs.
*   Practice constructing and simplifying regular expressions to develop proficiency.
*   Different regular expressions can represent the same language. There's often more than one right answer.

This comprehensive guide should provide a solid foundation for understanding regular expressions based on the Linz textbook. Remember to practice applying these concepts to reinforce your understanding. Good luck!
