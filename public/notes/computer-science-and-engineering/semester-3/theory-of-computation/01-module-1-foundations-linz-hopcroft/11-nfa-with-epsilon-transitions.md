---
title: "NFA with epsilon transitions"
subject: "THEORY OF COMPUTATION"
module: "Module 1: Foundations (Linz, Hopcroft)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ab9e"
status: "completed"
scrapedAt: "2026-05-20T16:29:46.332Z"
---
# THEORY OF COMPUTATION - Module 1: Foundations - NFA with Epsilon Transitions

**Learning Outcomes:**

*   Understand the concept of NFA with epsilon transitions (ε-NFA).
*   Define the formal definition of an ε-NFA.
*   Understand how ε-transitions affect the acceptance of strings by an ε-NFA.
*   Construct ε-NFAs for given languages.
*   Convert an ε-NFA to an equivalent NFA (without ε-transitions).
*   Understand the relationship between regular expressions and ε-NFAs.

## 1. Introduction to NFA with Epsilon Transitions (ε-NFA)

*   **What is an ε-NFA?** An ε-NFA (Nondeterministic Finite Automaton with epsilon transitions) is a type of NFA that allows transitions between states without consuming any input symbol (represented by ε).  This provides additional flexibility in designing finite automata and facilitates easier conversion from regular expressions.
*   **Epsilon Transition (ε-Transition):** A transition between two states that does not require any input symbol.  The machine can spontaneously move from one state to another along an ε-transition.
*   **Purpose of ε-Transitions:**
    *   Simplifies the design of automata for certain languages.
    *   Facilitates the conversion of regular expressions to equivalent NFAs.
    *   Enables expressing alternatives and optional parts of patterns elegantly.

## 2. Formal Definition of an ε-NFA

An ε-NFA is formally defined as a 5-tuple:

M = (Q, Σ, δ, q0, F)

where:

*   **Q:** A finite set of states.
*   **Σ:** A finite alphabet of input symbols.
*   **δ:** The transition function, δ: Q × (Σ ∪ {ε}) → P(Q).  Note that the input includes ε. This means for a given state and input symbol (or ε), the transition function returns a *set* of possible next states.
*   **q0:** The initial state, q0 ∈ Q.
*   **F:** A set of accepting (or final) states, F ⊆ Q.

**Key Difference from NFA:** The crucial difference between an NFA and an ε-NFA is the transition function `δ`. In an ε-NFA, `δ` accepts `ε` as a possible input, allowing transitions without consuming an input symbol.

## 3. How ε-Transitions Affect Acceptance of Strings

*   **ε-Closure(q):**  The ε-closure of a state 'q' is the set of all states reachable from 'q' by following zero or more ε-transitions.  This is a fundamental concept for understanding how ε-NFAs operate.

    *   Formally, ε-Closure(q) is defined recursively:
        *   q ∈ ε-Closure(q)  (q is always in its own ε-closure)
        *   If p ∈ ε-Closure(q) and δ(p, ε) contains r, then r ∈ ε-Closure(q)

*   **Acceptance by an ε-NFA:** A string 'w' is accepted by an ε-NFA M = (Q, Σ, δ, q0, F) if there exists a sequence of states r0, r1, ..., rn in Q such that:
    *   r0 ∈ ε-Closure(q0)
    *   ri+1 ∈ ε-Closure(δ(ri, ai+1)) for i = 0, 1, ..., n-1, where w = a1a2...an and each ai ∈ Σ.
    *   rn ∈ ε-Closure(F) (rn is in the ε-closure of an accepting state)

**In simpler terms:**

1.  Start in any state within the ε-closure of the start state.
2.  For each symbol in the input string, transition to a *set* of possible next states based on the current state and input symbol. Then find the ε-closure of each of these states.
3.  After reading the entire string, if at least one of the possible ending states is in the ε-closure of an accepting state, the string is accepted.

**Example:**

Consider an ε-NFA:  M = ({q0, q1, q2}, {a, b}, δ, q0, {q2}) with the following transition function:

| State | Input | Next State(s) |
|---|---|---|
| q0 | a | {q0} |
| q0 | ε | {q1} |
| q1 | b | {q2} |
| q2 | a | {} |
| q2 | b | {} |

Let's check if the string "ab" is accepted:

1.  Start state: q0. ε-Closure(q0) = {q0, q1}
2.  Read 'a':
    *   From q0, on 'a', we go to {q0}.  ε-Closure(q0) = {q0, q1}
    *   From q1, on 'a', we go to {}.
3.  Read 'b':
    *   From q0, on 'b', we go to {}.
    *   From q1, on 'b', we go to {q2}. ε-Closure(q2) = {q2}
4.  Final state: q2, which is an accepting state. Thus, "ab" is accepted.

## 4. Constructing ε-NFAs for Given Languages

The ability to construct ε-NFAs for various languages is crucial. Here are a few examples:

*   **Language: L = {w | w starts with 'a' and ends with 'b'}**

    ```
    States: {q0, q1, q2, q3}
    Alphabet: {a, b}
    Start state: q0
    Accepting state: {q3}

    Transitions:
    δ(q0, a) = {q1}
    δ(q1, a) = {q1}
    δ(q1, b) = {q2}
    δ(q1, ε) = {q2}   // Allow 'b' directly after 'a'
    δ(q2, a) = {q1}
    δ(q2, b) = {q2}    // Allow multiple 'b's
    δ(q2, ε) = {q3}
    δ(q3, ε) = {}
    δ(q3, a) = {}
    δ(q3, b) = {}
    ```

    **Explanation:**

    *   q0: Initial state.
    *   q1: State after reading the initial 'a'.
    *   q2: State after reading at least one 'b'.  Loops on `b` allow multiple `b`s.
    *   q3: Final accepting state after finding the last `b` . The transition from q2 to q3 is an Epsilon transition.

*   **Language: L = {a^n b^m | n >= 0, m >= 0} (Zero or more 'a's followed by zero or more 'b's)**

    ```
    States: {q0, q1, q2}
    Alphabet: {a, b}
    Start state: q0
    Accepting state: {q2}

    Transitions:
    δ(q0, a) = {q0}
    δ(q0, ε) = {q1}
    δ(q1, b) = {q1}
    δ(q1, ε) = {q2}
    δ(q2, a) = {}
    δ(q2, b) = {}
    δ(q2, ε) = {}
    ```

    **Explanation:**

    *   q0: State for reading 'a's. An Epsilon transition allows moving to state q1 without any `a`.
    *   q1: State for reading 'b's. An Epsilon transition allows moving to state q2 without any `b`.
    *   q2: Accepting state.

## 5. Converting an ε-NFA to an Equivalent NFA

This is a vital process to eliminate ε-transitions while preserving the language accepted by the automaton.  The algorithm involves computing the ε-closure of states.

**Algorithm:**

Given an ε-NFA M = (Q, Σ, δ, q0, F), construct an equivalent NFA M' = (Q', Σ, δ', q0', F'):

1.  **Q' = Q** (The set of states remains the same.)
2.  **q0' = ε-Closure(q0)**  (The new start state is the epsilon closure of the old start state. We will select just one state out of this epsilon closure for the non-Epsilon transition. This will be the original q0)
3.  **F' = F ∪ {q0} if ε-Closure(q0) ∩ F ≠ Ø** (The new set of accepting states includes the old accepting states, and also the initial state, if its epsilon closure intersects with an element in the old F. In other words, the start state must now be accepting too, if it could directly transition to an acceptance state via epsilon transitions only.)
4.  **For each state 'q' in Q and each symbol 'a' in Σ:**
    *   δ'(q, a) = ∪  ε-Closure(δ(p, a)) for all p ∈ ε-Closure(q)

    (This means: For each state q and symbol a, the new transition from q on a is the union of the epsilon closures of all states reachable from ANY state in the epsilon closure of q, upon reading a.)

**Example:**

Let's convert the following ε-NFA to an NFA:

M = ({q0, q1, q2}, {a, b}, δ, q0, {q2})

| State | Input | Next State(s) |
|---|---|---|
| q0 | a | {q0} |
| q0 | ε | {q1} |
| q1 | b | {q2} |
| q1 | ε | {} |
| q2 | a | {} |
| q2 | b | {} |
| q2 | ε | {} |

1.  **Q' = {q0, q1, q2}**
2.  **q0' = q0** (Note that `Epsilon-Closure(q0) = {q0, q1}`. We choose the original q0 as our q0')
3.  **F' = {q2}** (Because ε-Closure(q0) = {q0, q1} and this does not intersect with the set F = {q2} then no extra states will be added to F)
4.  **Constructing δ':**

    *   δ'(q0, a):  ε-Closure(δ(q0, a)) ∪ ε-Closure(δ(q1, a)) = ε-Closure({q0}) ∪ ε-Closure({}) = {q0, q1} ∪ {} = {q0, q1}
    *   δ'(q0, b):  ε-Closure(δ(q0, b)) ∪ ε-Closure(δ(q1, b)) = ε-Closure({}) ∪ ε-Closure({q2}) = {} ∪ {q2} = {q2}
    *   δ'(q1, a): ε-Closure(δ(q1, a)) = ε-Closure({}) = {}
    *   δ'(q1, b): ε-Closure(δ(q1, b)) = ε-Closure({q2}) = {q2}
    *   δ'(q2, a):  ε-Closure(δ(q2, a)) = ε-Closure({}) = {}
    *   δ'(q2, b):  ε-Closure(δ(q2, b)) = ε-Closure({}) = {}

Therefore, the equivalent NFA M' = ({q0, q1, q2}, {a, b}, δ', q0, {q2}) with the following transition function:

| State | Input | Next State(s) |
|---|---|---|
| q0 | a | {q0, q1} |
| q0 | b | {q2} |
| q1 | a | {} |
| q1 | b | {q2} |
| q2 | a | {} |
| q2 | b | {} |

## 6. Relationship Between Regular Expressions and ε-NFAs

*   **Theorem:** For every regular expression, there exists an equivalent ε-NFA.  This is a fundamental connection in the theory of computation.
*   **Construction:** Regular expressions can be systematically converted to ε-NFAs using a set of rules (often called Thompson's construction algorithm).  These rules provide a way to build ε-NFAs for basic regular expressions (single symbols, empty string, empty set) and then combine them for complex regular expressions using operators like union, concatenation, and Kleene star.

**Example:**

Consider the regular expression `(a|b)*abb`.  The construction of an ε-NFA for this expression would involve the following steps (simplified):

1.  Build ε-NFAs for 'a' and 'b'.
2.  Combine them using the union operator (|) to create an ε-NFA for `(a|b)`.
3.  Apply the Kleene star operator (*) to create an ε-NFA for `(a|b)*`.
4.  Concatenate the ε-NFAs for `(a|b)*`, 'a', 'b', and 'b` to form the final ε-NFA for `(a|b)*abb`.

## 7. Practice Questions/Exercises

**Question 1:**

Draw an ε-NFA that accepts the language L = {w | w contains "ab" or "ba" as a substring}.

**Answer:**

```
States: {q0, q1, q2, q3}
Alphabet: {a, b}
Start state: q0
Accepting state: {q3}

Transitions:
δ(q0, a) = {q0, q1}
δ(q0, b) = {q0, q2}
δ(q1, b) = {q3}
δ(q2, a) = {q3}
δ(q3, a) = {}
δ(q3, b) = {}
δ(q0, ε) = {}
δ(q1, ε) = {}
δ(q2, ε) = {}
δ(q3, ε) = {}
```

**Question 2:**

Compute the ε-closure for each state in the following ε-NFA:

M = ({q0, q1, q2}, {a, b}, δ, q0, {q2})

| State | Input | Next State(s) |
|---|---|---|
| q0 | a | {q1} |
| q0 | ε | {q2} |
| q1 | b | {q1} |
| q1 | ε | {} |
| q2 | a | {} |
| q2 | b | {} |
| q2 | ε | {} |

**Answer:**

*   ε-Closure(q0) = {q0, q2}
*   ε-Closure(q1) = {q1}
*   ε-Closure(q2) = {q2}

**Question 3:**

Convert the following ε-NFA into an equivalent NFA.

M = ({q0, q1}, {a}, δ, q0, {q1})

| State | Input | Next State(s) |
|---|---|---|
| q0 | a | {q0} |
| q0 | ε | {q1} |
| q1 | a | {} |
| q1 | ε | {} |

**Answer:**

1.  Q' = {q0, q1}
2.  q0' = q0
3.  F' = {q0, q1} (Since ε-Closure(q0) = {q0, q1} and {q0, q1} ∩ {q1} = {q1}, we add q0 to the set of accepting states since the Epsilon Closure intersects with the set F.)
4.  δ':
    *   δ'(q0, a) = ε-Closure(δ(q0, a)) ∪ ε-Closure(δ(q1, a)) = ε-Closure({q0}) ∪ ε-Closure({}) = {q0, q1} ∪ {} = {q0, q1}
    *   δ'(q1, a) = ε-Closure(δ(q1, a)) = ε-Closure({}) = {}

Therefore, the equivalent NFA is M' = ({q0, q1}, {a}, δ', q0, {q0, q1}), with the following transitions:

| State | Input | Next State(s) |
|---|---|---|
| q0 | a | {q0, q1} |
| q1 | a | {} |

## 8. Important Points to Remember

*   ε-Transitions are transitions without consuming any input symbol.
*   ε-Closure is the set of all states reachable by following zero or more ε-transitions from a given state.
*   ε-NFAs simplify the design of automata and conversion from regular expressions.
*   Any ε-NFA can be converted to an equivalent NFA.
*   The algorithm for converting an ε-NFA to an NFA involves computing ε-closures.
*   Understanding epsilon transitions is essential for working with regular expressions and finite automata.
