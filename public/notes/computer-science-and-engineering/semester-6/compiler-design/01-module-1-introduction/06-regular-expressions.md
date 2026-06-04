---
title: "Regular Expressions"
subject: "COMPILER DESIGN"
module: "Module 1: Introduction "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8ba47"
status: "completed"
scrapedAt: "2026-05-20T16:51:06.843Z"
---
# COMPILER DESIGN - Module 1: Introduction - Regular Expressions

## Learning Outcomes:

*   Understand the purpose and role of regular expressions in compiler design.
*   Define and construct regular expressions for specifying tokens in a programming language.
*   Understand the relationship between regular expressions and finite automata.
*   Convert regular expressions to Non-deterministic Finite Automata (NFA) using Thompson's construction.
*   Understand the properties and limitations of regular expressions.

## 1. Introduction to Regular Expressions

*   **Definition:** Regular expressions (regex or regexp) are a powerful and concise way to describe patterns in strings. They are a formal notation for specifying sets of strings. In the context of compiler design, they are primarily used to define the lexical structure (tokens) of a programming language.

*   **Role in Compiler Design:**
    *   **Lexical Analysis (Scanning):** Regular expressions are the core mechanism for defining tokens (e.g., keywords, identifiers, operators, literals) recognized by the lexical analyzer (scanner).  The scanner reads the source code and groups characters into tokens based on these regular expression patterns.
    *   **Pattern Matching:**  Used extensively for pattern matching tasks beyond lexical analysis, such as validating input formats.

*   **Why Regular Expressions for Token Definition?**
    *   **Conciseness:**  They provide a compact way to specify token patterns that would be cumbersome to express with other methods.
    *   **Formalism:** They are based on a well-defined mathematical theory (finite automata), allowing for automatic generation of scanners.
    *   **Efficiency:**  Scanners built using regular expressions and finite automata are generally very efficient.

## 2. Basic Concepts and Definitions

*   **Alphabet (Σ):** A finite set of symbols.  For example:
    *   Σ = {a, b}
    *   Σ = {0, 1} (binary alphabet)
    *   Σ = ASCII characters

*   **String:**  A finite sequence of symbols chosen from an alphabet.  For example:
    *   "ababa" is a string over Σ = {a, b}
    *   "101" is a string over Σ = {0, 1}

*   **Language:** A set of strings over an alphabet.  A language can be finite or infinite.
    *   Examples:
        *   L = { "a", "aa", "aaa" } (finite language)
        *   L = { "a", "ab", "aba", "abab", ... } (infinite language)

*   **Regular Expression Operators:** These operators are used to build complex regular expressions from simpler ones.

    *   **Concatenation (. or implicit):**  If *r* and *s* are regular expressions, then *rs* (or *r.s*) denotes the concatenation of the languages represented by *r* and *s*.
        *   Example: If *r* represents {"a", "b"} and *s* represents {"c", "d"}, then *rs* represents {"ac", "ad", "bc", "bd"}.

    *   **Alternation (Union |):** If *r* and *s* are regular expressions, then *r | s* denotes the union of the languages represented by *r* and *s*.
        *   Example: If *r* represents {"a", "b"} and *s* represents {"c", "d"}, then *r | s* represents {"a", "b", "c", "d"}.

    *   **Kleene Closure (*):** If *r* is a regular expression, then *r* * denotes zero or more repetitions of the language represented by *r*.  This includes the empty string ε.
        *   Example: If *r* represents {"a"}, then *r* * represents {ε, "a", "aa", "aaa", ...}.

    *   **Positive Closure (+):** If *r* is a regular expression, then *r* + denotes one or more repetitions of the language represented by *r*.
        *   Example: If *r* represents {"a"}, then *r* + represents {"a", "aa", "aaa", ...}.

    *   **Optional (?):** If *r* is a regular expression, then *r* ? represents zero or one occurrences of the language represented by *r*. Equivalent to `(r | ε)`.
        *   Example: If *r* represents {"a"}, then *r* ? represents {ε, "a"}.

*   **Precedence of Operators:** In the absence of parentheses, operators have the following precedence (highest to lowest):
    1.  Kleene Closure (*, + , ?)
    2.  Concatenation (.)
    3.  Alternation (|)

*   **ε (Epsilon):** Represents the empty string.

*   **∅ (Empty Set):** Represents the empty language (a language containing no strings).

## 3. Regular Expressions for Defining Tokens

Let's consider a simple programming language and how to define its tokens using regular expressions:

*   **Identifier:** A sequence of letters and digits, starting with a letter.
    *   Regular Expression: `letter (letter | digit)*`
    *   Where `letter` represents the regular expression `[a-zA-Z]` (any uppercase or lowercase letter)
    *   And `digit` represents the regular expression `[0-9]` (any digit from 0 to 9)

*   **Integer Literal:** A sequence of digits.
    *   Regular Expression: `digit+`

*   **Floating-Point Literal:**  A sequence of digits with a decimal point, possibly with an exponent.
    *   Regular Expression: `digit+ . digit+ (E (+|-)? digit+)?`
    *   Where `E` represents the character 'E' (or 'e').
    *   Example: `12.34`, `12.34E+5`, `12.34E-5`, `12.34E5`

*   **Keywords (e.g., `if`, `else`, `while`):**
    *   Regular Expression: `if | else | while`  (each keyword is its own regular expression, combined with alternation)

*   **Operators (e.g., `+`, `-`, `*`, `/`, `=`)**
    *   Regular Expression: `+ | - | * | / | =`

*   **Whitespace:**
    *   Regular Expression: `( |\t|\n)+`  (space, tab, or newline, repeated one or more times) - usually discarded by the lexical analyzer.

**Example of applying these to a code snippet:**

Consider the code snippet: `if (count > 0) sum = sum + count;`

The lexical analyzer would identify the following tokens:

1.  `if` (keyword)
2.  `(` (operator)
3.  `count` (identifier)
4.  `>` (operator)
5.  `0` (integer literal)
6.  `)` (operator)
7.  `sum` (identifier)
8.  `=` (operator)
9.  `sum` (identifier)
10. `+` (operator)
11. `count` (identifier)
12. `;` (operator)

## 4. Regular Expressions and Finite Automata

*   **Relationship:** Regular expressions and finite automata are equivalent in their expressive power. Every regular expression can be converted into a finite automaton (and vice versa).

*   **Finite Automaton (FA):** A mathematical model of computation that consists of:
    *   A set of states.
    *   An input alphabet.
    *   A transition function that maps a state and an input symbol to a next state.
    *   A start state.
    *   A set of accepting states.

*   **Deterministic Finite Automaton (DFA):** For each state and input symbol, there is exactly one transition.

*   **Non-deterministic Finite Automaton (NFA):**  For each state and input symbol, there can be zero, one, or more transitions.  NFAs can also have ε-transitions (transitions without consuming an input symbol).

*   **Why NFAs are useful in compiler design:**
    *   NFAs are often easier to construct directly from regular expressions than DFAs.
    *   NFAs can be converted to equivalent DFAs, although the DFA may have more states.
    *   NFAs can handle more complex expressions with less initial complexity.

## 5. Thompson's Construction: Converting Regular Expressions to NFAs

Thompson's construction is a systematic way to convert a regular expression into an equivalent NFA.

**Basic Rules:**

1.  **For ε (epsilon):**

    ```
    State 1 ----ε----> State 2
    ```
    Create two states with an epsilon transition between them.  State 1 is the start state, and State 2 is the accepting state.

2.  **For a symbol 'a' (a ∈ Σ):**

    ```
    State 1 ----a----> State 2
    ```
    Create two states with a transition labeled 'a' between them.  State 1 is the start state, and State 2 is the accepting state.

**Inductive Rules:**

1.  **For r | s (Alternation):**

    ```
    State 1 ----ε----> NFA(r) (start) ----> ... ----> NFA(r) (accept) ----ε----> State 5
          |          ^                                        |
          ε          |                                        ε
          V          |                                        V
    State 2 ----ε----> NFA(s) (start) ----> ... ----> NFA(s) (accept) ----ε----> State 6
    ```
    Create a new start state (State 1) with epsilon transitions to the start states of NFAs for *r* and *s*. Create a new accepting state (State 5/6, merged here for simplicity) with epsilon transitions from the accepting states of NFAs for *r* and *s*.

2.  **For rs (Concatenation):**

    ```
    NFA(r) (start) ----> ... ----> NFA(r) (accept) ----ε----> NFA(s) (start) ----> ... ----> NFA(s) (accept)
    ```
    Connect the accepting state of NFA for *r* to the start state of NFA for *s* with an epsilon transition.  The start state of NFA(*r*) is the start state of the concatenated NFA, and the accepting state of NFA(*s*) is the accepting state of the concatenated NFA. In practice, the accepting state of NFA(r) is merged with the start state of NFA(s), simplifying the diagram.

3.  **For r* (Kleene Closure):**

    ```
    State 1 ----ε----> NFA(r) (start) ----> ... ----> NFA(r) (accept) ----ε----> State 5
          ^          ^                                        |          |
          |          |                                        V          |
          -----------ε-----------------------------------------          |
                      ---------------------ε------------------------------
    ```

    Create a new start state (State 1) and a new accepting state (State 5). Add epsilon transitions from the new start state to the start state of NFA for *r* and to the new accepting state. Add epsilon transitions from the accepting state of NFA for *r* to the new start state and to the new accepting state.

**Example: Convert (a|b)*abb to an NFA using Thompson's construction:**

(This is a complex example, and drawing the full diagram here is difficult in markdown. Imagine each step below creating the corresponding NFA fragment)

1.  **a:**  NFA for 'a'
2.  **b:** NFA for 'b'
3.  **(a|b):**  NFA for (a | b)  (using alternation rule)
4.  **(a|b)*:** NFA for (a | b)* (using Kleene closure rule)
5.  **abb:** NFA for 'a', 'b', and 'b' concatenated.
6.  **(a|b)*abb:**  Concatenate the NFA for (a|b)* with the NFA for 'abb'.

The resulting NFA will be more complex, but it systematically follows the rules of Thompson's construction.

## 6. Properties and Limitations of Regular Expressions

*   **Advantages:**
    *   **Simplicity:** Relatively easy to learn and use for defining token patterns.
    *   **Efficiency:** Can be implemented efficiently using finite automata.
    *   **Formal Foundation:** Based on a solid mathematical theory.
    *   **Automation:** Allows for automatic generation of lexical analyzers.

*   **Limitations:**
    *   **Cannot express all languages:**  Regular expressions are limited to regular languages. They cannot express context-free or context-sensitive languages.
    *   **Lack of Counting:** Regular expressions can't keep track of counts of items precisely.
    *   **Cannot parse nested structures:**  Regular expressions cannot handle arbitrarily nested structures like balanced parentheses.  Context-free grammars are needed for this.

    For example, consider the language of balanced parentheses: `{ (), (()), ((())), ... }`. This language is not regular and cannot be described by a regular expression.  This limitation means regular expressions cannot be used directly to parse the full syntax of programming languages, as most languages have nested structures.

## 7. Important Points to Remember

*   Regular expressions are a fundamental tool for lexical analysis in compilers.
*   Thompson's construction provides a systematic method for converting regular expressions to NFAs.
*   NFAs can be converted to DFAs (though sometimes at the cost of increased state space).
*   Regular expressions have limitations and cannot express all possible languages.
*   Understand the precedence of regular expression operators.
*   The power of Regular Expression stems from its ability to precisely define strings based on simple composable operators.

## 8. Practice Questions and Exercises

**Q1. Write a regular expression for email addresses.**

**Answer:**

```regex
[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}
```

*Explanation:*

*   `[a-zA-Z0-9._%+-]+`: Matches one or more alphanumeric characters, periods, underscores, percentage signs, plus or minus signs (for the username part).
*   `@`: Matches the "@" symbol.
*   `[a-zA-Z0-9.-]+`: Matches one or more alphanumeric characters, periods, or hyphens (for the domain name part).
*   `\.`: Matches a period (escaped with a backslash since "." has a special meaning in regex).
*   `[a-zA-Z]{2,}`: Matches two or more alphabetic characters (for the top-level domain like "com", "org", "net").

**Q2.  Convert the regular expression `a(b|c)*` to an NFA using Thompson's construction.**

**Answer:**  (Describing the NFA; drawing it is best to solidify understanding)

1.  **a:**  Two states, s1 and s2, with a transition 'a' from s1 to s2. s1 is the start state, s2 is accepting.
2.  **b:** Two states, s3 and s4, with a transition 'b' from s3 to s4. s3 is the start state, s4 is accepting.
3.  **c:** Two states, s5 and s6, with a transition 'c' from s5 to s6. s5 is the start state, s6 is accepting.
4.  **(b|c):**  A new start state (s7) with ε-transitions to s3 and s5.  A new accepting state (s8), with ε-transitions from s4 and s6 to s8.
5.  **(b|c)*:** A new start state (s9) and a new accepting state (s10). ε-transition from s9 to s7 and s10. ε-transition from s8 to s9 and s10.
6.  **a(b|c)*:** Merge s2 and s9 with an epsilon transition. The final NFA start state is s1 and accepting state is s10.

**Q3.  What language is represented by the regular expression `(01)*0`?**

**Answer:** The language consists of strings that start with zero or more repetitions of "01" followed by a single "0".  Examples: "0", "010", "01010", "0101010", and so on.

**Q4.  True or False: All context-free languages can be expressed using regular expressions.**

**Answer:** False. Regular expressions can only express regular languages, which is a strict subset of context-free languages.  Balanced parentheses is a classic example of a context-free language that cannot be represented by a regular expression.
