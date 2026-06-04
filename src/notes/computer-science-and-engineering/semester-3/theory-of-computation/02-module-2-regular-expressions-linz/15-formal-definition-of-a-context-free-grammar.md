---
title: "Formal definition of a context-free grammar"
subject: "THEORY OF COMPUTATION"
module: "Module 2: Regular Expressions (Linz)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8abb2"
status: "completed"
scrapedAt: "2026-05-20T16:30:00.031Z"
---
# THEORY OF COMPUTATION: Module 2 - Regular Expressions (Linz) - Context-Free Grammars

## Introduction

This module delves into Context-Free Grammars (CFGs), a more powerful formalism than regular expressions for defining languages. While regular expressions are suitable for describing regular languages, CFGs can describe a broader class of languages called context-free languages.  This section focuses on the formal definition of CFGs.

## Learning Outcomes

By the end of this section, you will be able to:

*   Define a Context-Free Grammar (CFG) formally.
*   Explain the roles of variables (non-terminals), terminals, production rules, and the start variable in a CFG.
*   Create CFGs for simple languages.
*   Understand and apply derivation processes using CFGs.
*   Differentiate between terminals and non-terminals.

## 1. Formal Definition of a Context-Free Grammar (CFG)

A Context-Free Grammar (CFG) is a formal system for describing the syntax of a language. It consists of four components:

*   **V:** A finite set of *variables* (also called non-terminals). These represent syntactic categories or structures in the language.  They are usually represented by uppercase letters.
*   **T:** A finite set of *terminals*.  These are the basic symbols that make up the strings of the language.  They are usually represented by lowercase letters, digits, or special symbols.
*   **P:** A finite set of *production rules*. Each rule has the form `A -> α`, where `A` is a variable (an element of `V`), and `α` is a string of variables and/or terminals (an element of `(V ∪ T)*`).
*   **S:** The *start variable*.  This is a distinguished variable in `V` that represents the root or the topmost level of the grammar.  It's where the derivation begins.

Formally, a CFG is a 4-tuple:  **G = (V, T, P, S)**

*   **V:** Finite set of variables (non-terminals).
*   **T:** Finite set of terminals.
*   **P:** Finite set of production rules (A -> α, where A ∈ V and α ∈ (V ∪ T)*).
*   **S:** Start variable (S ∈ V).

**Important Points:**

*   `V` and `T` must be disjoint (i.e., `V ∩ T = ∅`).  A symbol cannot be both a variable and a terminal.
*   The production rules are the heart of the grammar. They specify how variables can be replaced by other variables and terminals.
*   The start variable is the starting point for generating strings of the language.

## 2. Roles of Variables (Non-terminals), Terminals, Production Rules, and the Start Variable

*   **Variables (Non-terminals):** Represent abstract syntactic categories. They serve as placeholders for more complex structures that will eventually be replaced by terminals. They allow for recursion and nesting in the grammar.  They *must* be replaced during derivation.

*   **Terminals:** The atomic symbols that make up the strings of the language. They cannot be replaced.  Derivation ends when you have a string of only terminals.

*   **Production Rules:** Define how variables can be rewritten. A rule `A -> α` means that the variable `A` can be replaced by the string `α`. This is the mechanism by which the grammar generates strings.

*   **Start Variable:** Indicates where to begin generating strings.  The derivation process starts with the start variable, and rules are applied until a string of terminals is obtained.  The language defined by a CFG is the set of all terminal strings that can be derived from the start variable.

## 3. Examples of CFGs

**Example 1:  The language of palindromes over {a, b}**

A palindrome is a string that reads the same forward and backward (e.g., "madam", "abba").

*   `V = {S}`
*   `T = {a, b}`
*   `P = {`
    *   `S -> aSa`
    *   `S -> bSb`
    *   `S -> a`
    *   `S -> b`
    *   `S -> ε`  (where ε represents the empty string)
    `}`
*   `S = S`

**Explanation:**

*   The variable `S` represents a palindrome.
*   The rules `S -> aSa` and `S -> bSb` add the same symbol to the beginning and end of the string, ensuring the palindrome property.
*   The rules `S -> a`, `S -> b`, and `S -> ε` provide the base cases for the recursion, allowing the palindrome to terminate.

**Example 2:  The language a<sup>n</sup>b<sup>n</sup>, where n >= 0**

This language consists of strings with an equal number of 'a's followed by an equal number of 'b's (e.g., "ε", "ab", "aabb", "aaabbb"). This language is NOT regular and cannot be described with regular expressions.

*   `V = {S}`
*   `T = {a, b}`
*   `P = {`
    *   `S -> aSb`
    *   `S -> ε`
    `}`
*   `S = S`

**Explanation:**

*   The rule `S -> aSb` adds an 'a' to the beginning and a 'b' to the end, maintaining the equal number of 'a's and 'b's.
*   The rule `S -> ε` provides the base case for the recursion, allowing the derivation to terminate with the empty string.

**Example 3:  Simple Arithmetic Expressions**

*   `V = {E, T, F}`  (E = Expression, T = Term, F = Factor)
*   `T = {a, +, *, (, )}` (a represents a variable)
*   `P = {`
    *   `E -> E + T`
    *   `E -> T`
    *   `T -> T * F`
    *   `T -> F`
    *   `F -> ( E )`
    *   `F -> a`
    `}`
*   `S = E`

**Explanation:**

This grammar defines simple arithmetic expressions with addition, multiplication, parentheses, and variables.

*   `E` represents an expression.
*   `T` represents a term (product of factors).
*   `F` represents a factor (either a variable 'a' or an expression enclosed in parentheses).

## 4. Derivation Processes

A *derivation* is a sequence of rule applications that starts with the start variable and produces a string of terminals.  Each step in a derivation involves replacing a variable with the right-hand side of one of its production rules.

*   We use the symbol `=>` to indicate a derivation step. `α => β` means that string `α` can be directly derived into string `β` by applying a production rule.

*   We use the symbol `=>*` to indicate a derivation of zero or more steps. `α =>* β` means that string `α` can be derived into string `β` in zero or more steps.

**Example Derivations (using the palindrome grammar from Example 1):**

1.  Deriving "abba":

    *   `S => aSa`  (using S -> aSa)
    *   `=> abba`  (using S -> b, twice)

2.  Deriving "a":

    *   `S => a`   (using S -> a)

3.  Deriving "":

    *   `S => ε` (using S -> ε)

**Example Derivation (using the a<sup>n</sup>b<sup>n</sup> grammar from Example 2):**

Deriving "aabb":

*   `S => aSb` (using S -> aSb)
*   `=> aaSbb` (using S -> aSb)
*   `=> aabb`  (using S -> ε)

**Example Derivation (using the arithmetic expression grammar from Example 3):**

Deriving "a + a * a":

*   `E => E + T`
*   `=> T + T`
*   `=> F + T`
*   `=> a + T`
*   `=> a + T * F`
*   `=> a + F * F`
*   `=> a + a * F`
*   `=> a + a * a`

## 5. Differentiating between Terminals and Non-terminals

The key difference is that:

*   **Terminals:** Cannot be replaced. They are the final building blocks of the strings in the language.
*   **Non-terminals (Variables):** Must be replaced by applying production rules during the derivation process until only terminals remain.

**How to identify them:**

*   **Convention:** Non-terminals are usually represented by uppercase letters or meaningful names (e.g., `Sentence`, `Expression`). Terminals are usually represented by lowercase letters, digits, or special symbols.
*   **Context:**  If a symbol appears on the left-hand side of a production rule, it's a non-terminal.  Symbols that only appear on the right-hand side and are not defined as non-terminals are terminals.

## 6. Practice Questions/Exercises

**Question 1:**

Which of the following is the correct formal definition of a Context-Free Grammar?

a)  G = (V, T, S, P)  where P ⊆ V x (V ∪ T)*
b)  G = (V, T, P, S)  where P ⊆ V x (V ∪ T)*
c)  G = (V, T, P, S)  where P ⊆ (V ∪ T)* x V
d)  G = (V, T, S, P)  where P ⊆ (V ∪ T)* x V

**Answer:** b) G = (V, T, P, S)  where P ⊆ V x (V ∪ T)*

**Question 2:**

Consider the CFG:

*   V = {S}
*   T = {0, 1}
*   P = {S -> 0S1, S -> ε}
*   S = S

What language does this CFG generate?

a)  {0<sup>n</sup>1<sup>n</sup> | n >= 0}
b)  {0<sup>n</sup>1<sup>m</sup> | n, m >= 0}
c)  {0<sup>n</sup>1<sup>n</sup> | n > 0}
d)  {w | w contains equal number of 0s and 1s}

**Answer:** a) {0<sup>n</sup>1<sup>n</sup> | n >= 0}

**Question 3:**

Write a CFG for the language of strings containing an equal number of 'a's and 'b's, but they can be in any order (e.g., "ab", "ba", "aabb", "abab", "baba", "bbaa").

**Answer:**

*   V = {S}
*   T = {a, b}
*   P = {
    *   S -> aSb
    *   S -> bSa
    *   S -> SS
    *   S -> ε
    }
*   S = S

**Explanation:**
This grammar is more complex than `a^n b^n` because the 'a's and 'b's can be in any order.
* `S -> aSb` allows 'a' to be followed by 'b', nesting the structure
* `S -> bSa` allows 'b' to be followed by 'a', nesting the structure
* `S -> SS` allows for concatenating strings with equal a's and b's, thereby also resulting in strings with equal a's and b's.
* `S -> ε` acts as the base case, providing the empty string

**Question 4:**

For the following CFG:

*   V = {S}
*   T = {a, b}
*   P = {S -> aSb, S -> ba}
*   S = S

Provide a derivation for the string "aababb".

**Answer:**

*   S => aSb
*   => aaSbb
*   => aababb

## 7. Important Points to Remember

*   A CFG is defined by a 4-tuple: (V, T, P, S).
*   Variables (non-terminals) are used as placeholders and *must* be replaced during derivation.
*   Terminals are the basic symbols and cannot be replaced.
*   Production rules define how variables can be rewritten.
*   The start variable is where the derivation begins.
*   CFGs are more powerful than regular expressions.
*   The language generated by a CFG is called a context-free language (CFL).
*   Understanding derivations is crucial for understanding how CFGs work.
