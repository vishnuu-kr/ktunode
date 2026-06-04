---
title: "Finite Automata (Linz, Hopcroft)"
subject: "THEORY OF COMPUTATION"
module: "Module 1: Foundations (Linz, Hopcroft)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ab98"
status: "completed"
scrapedAt: "2026-05-20T16:29:42.033Z"
---
# THEORY OF COMPUTATION - Module 1: Foundations - Finite Automata

## Introduction

This module provides a foundation in Finite Automata, a fundamental concept in the Theory of Computation. We will explore the formal definitions, types, and applications of Finite Automata based on the material covered in Linz and Hopcroft textbooks.

## Learning Outcomes

Upon completion of this topic, you should be able to:

*   Define a Finite Automaton (FA) and its components.
*   Differentiate between Deterministic Finite Automata (DFA) and Non-deterministic Finite Automata (NFA).
*   Design DFAs and NFAs for given languages.
*   Convert NFAs to DFAs.
*   Understand and apply the concept of ε-transitions in NFAs.
*   Minimize DFAs.
*   Understand the relationship between Finite Automata and Regular Expressions.
*   Apply Finite Automata to solve practical problems.

## 1. Key Concepts and Definitions

### 1.1. Alphabet (Σ)

*   **Definition:** A finite, non-empty set of symbols.
*   **Example:** Σ = {0, 1}, Σ = {a, b, c}

### 1.2. String (w)

*   **Definition:** A finite sequence of symbols chosen from the alphabet.
*   **Example:**  If Σ = {0, 1}, then "0101", "111", "0" are strings over Σ.
*   **Empty String (ε):** A string with no symbols. |ε| = 0 (length of the empty string is 0).

### 1.3. Language (L)

*   **Definition:** A set of strings formed from an alphabet.  A language L is a subset of Σ*, where Σ* is the set of all possible strings formed using the symbols in Σ (including the empty string).
*   **Example:**
    *   Let Σ = {0, 1}. Then L = {0, 1, 00, 11, 000, 111, ...} is a language.
    *   L = {w | w contains an equal number of 0s and 1s}.
    *   L = {ε} is a language containing only the empty string.
    *   L = Ø (empty set) is also a language.

### 1.4. Finite Automaton (FA)

*   **Definition:**  A mathematical model of a machine that accepts or rejects strings of symbols.  It has a finite number of states and transitions.
*   **Formal Definition:** A Finite Automaton is a 5-tuple: M = (Q, Σ, δ, q0, F), where:
    *   Q: A finite set of states.
    *   Σ: A finite set of input symbols (the alphabet).
    *   δ: The transition function, δ: Q × Σ → Q.  For each state and input symbol, it defines the next state.
    *   q0: The initial state, q0 ∈ Q.
    *   F: A set of accepting (final) states, F ⊆ Q.

## 2. Deterministic Finite Automaton (DFA)

*   **Definition:** A Finite Automaton where for each state and input symbol, there is *exactly one* transition to the next state.
*   **Key Characteristics:**
    *   Deterministic: Predictable behavior.
    *   Total Function: The transition function δ is a total function, meaning δ(q, a) is defined for *every* q ∈ Q and a ∈ Σ.

### 2.1. Representation of a DFA

*   **State Diagram:** A directed graph where:
    *   Nodes represent states (elements of Q).
    *   Edges represent transitions (defined by δ). Edges are labeled with input symbols.
    *   The initial state (q0) is marked with an incoming arrow.
    *   Accepting states (elements of F) are marked with a double circle.
*   **Transition Table:** A table representing the transition function δ. Rows represent states, columns represent input symbols, and entries represent the next state.

### 2.2. Example of a DFA

*   **Problem:** Design a DFA that accepts strings over Σ = {0, 1} that contain an even number of 0s.
*   **Solution:**
    *   Q = {q0, q1}  (q0: even number of 0s, q1: odd number of 0s)
    *   Σ = {0, 1}
    *   q0 = q0 (initial state is q0)
    *   F = {q0} (only q0 is an accepting state)
    *   δ:
        *   δ(q0, 0) = q1
        *   δ(q0, 1) = q0
        *   δ(q1, 0) = q0
        *   δ(q1, 1) = q1
*   **State Diagram:**
    ```
    (q0) --1--> (q0)
      |  ^      ^  |
      0  |      |  0
      v  |      |  v
    (q1) --1--> (q1)
    ```
    Note: (q0) has a double circle.
*   **Transition Table:**

    |       | 0   | 1   |
    |-------|-----|-----|
    | -> q0 | q1  | q0  |
    |    q1 | q0  | q1  |

    *   -> indicates initial state.

## 3. Non-deterministic Finite Automaton (NFA)

*   **Definition:** A Finite Automaton where, for each state and input symbol, there can be *zero, one, or more* transitions to the next state.
*   **Formal Definition:** A Non-deterministic Finite Automaton is a 5-tuple: M = (Q, Σ, δ, q0, F), where:
    *   Q: A finite set of states.
    *   Σ: A finite set of input symbols (the alphabet).
    *   δ: The transition function, δ: Q × Σ → 2^Q (power set of Q).  It maps a state and an input symbol to a *set* of possible next states.
    *   q0: The initial state, q0 ∈ Q.
    *   F: A set of accepting (final) states, F ⊆ Q.

*   **Key Characteristics:**
    *   Non-deterministic:  Multiple possible paths for a given input.
    *   Transition Function:  Returns a *set* of states.
    *   Acceptance:  The NFA accepts a string if *at least one* path leads to an accepting state.

### 3.1. ε-Transitions

*   **Definition:** A transition from one state to another *without* consuming any input symbol.  Represented by the symbol ε (epsilon).
*   **Impact:** Adds further non-determinism to the automaton.  The automaton can move between states spontaneously, without reading input.
*   **δ Function Modification:** When ε-transitions are involved, the transition function becomes δ: Q × (Σ ∪ {ε}) → 2^Q

### 3.2. Example of an NFA

*   **Problem:** Design an NFA that accepts strings over Σ = {0, 1} that contain either "01" or "10" as a substring.
*   **Solution:**
    *   Q = {q0, q1, q2, q3, q4}
    *   Σ = {0, 1}
    *   q0 = q0
    *   F = {q3, q4}
    *   δ:
        *   δ(q0, 0) = {q0, q1}
        *   δ(q0, 1) = {q0, q2}
        *   δ(q1, 1) = {q3}
        *   δ(q2, 0) = {q4}
        *   δ(q3, 0) = {q3, q4}
        *   δ(q3, 1) = {q3, q4}
        *   δ(q4, 0) = {q3, q4}
        *   δ(q4, 1) = {q3, q4}
*   **State Diagram:**
    ```
    (q0) --0--> (q0)
      |  \
      |   \ 1
      |    v
      |    (q2) --0--> (q4) --0,1--> ((q3))
      |       ^          ^
      |       |          |
      |       1          1
      v       |          |
    (q1) --1--> ((q3)) --0,1--> (q4)
    ```
    Note: ((q3)) and (q4) have double circles.

## 4. Conversion of NFA to DFA

*   **Subset Construction Algorithm:** This algorithm converts an NFA into an equivalent DFA.  "Equivalent" means they accept the same language.
*   **Algorithm Steps:**
    1.  **Start State:** The start state of the DFA is ε-closure(q0), where q0 is the start state of the NFA, and ε-closure(q) is the set of all states reachable from state q by following only ε-transitions (including q itself).
    2.  **DFA States:**  Each state in the DFA represents a *set* of states from the NFA.
    3.  **Transitions:**  For each DFA state (which is a set of NFA states) and each input symbol 'a' in the alphabet, determine the set of NFA states reachable from any of the NFA states in the DFA state by reading the input symbol 'a' and then taking the ε-closure.  This new set of NFA states becomes the next state in the DFA.
    4.  **Accepting States:** A DFA state is an accepting state if it contains at least one accepting state from the original NFA.
    5.  **Repeat:** Continue steps 2 and 3 until no new DFA states are created.
*   **Important:** The resulting DFA may have up to 2^n states, where n is the number of states in the NFA. In practice, however, the number of reachable DFA states is often much smaller.

### 4.1. Example of NFA to DFA Conversion

*   **NFA (from previous example):**  Accepts strings containing "01" or "10" as a substring.
*   **Conversion Steps:**
    1.  **NFA:** Q = {q0, q1, q2, q3, q4}, Σ = {0, 1}, q0 = q0, F = {q3, q4}
    2.  **ε-closures:**
        *   ε-closure(q0) = {q0}
        *   ε-closure(q1) = {q1}
        *   ε-closure(q2) = {q2}
        *   ε-closure(q3) = {q3}
        *   ε-closure(q4) = {q4}
    3.  **DFA:**
        *   **Start State:** {q0}
        *   **Transition from {q0} on 0:**  δ({q0}, 0) = ε-closure(δ(q0, 0)) = ε-closure({q0, q1}) = {q0, q1}. New DFA state: {q0, q1}
        *   **Transition from {q0} on 1:**  δ({q0}, 1) = ε-closure(δ(q0, 1)) = ε-closure({q0, q2}) = {q0, q2}. New DFA state: {q0, q2}
        *   **Transition from {q0, q1} on 0:** δ({q0, q1}, 0) = ε-closure(δ(q0, 0) ∪ δ(q1, 0)) = ε-closure({q0, q1} ∪ {}) = {q0, q1}
        *   **Transition from {q0, q1} on 1:** δ({q0, q1}, 1) = ε-closure(δ(q0, 1) ∪ δ(q1, 1)) = ε-closure({q0, q2} ∪ {q3}) = {q0, q2, q3}. New DFA state: {q0, q2, q3}
        *   **Transition from {q0, q2} on 0:** δ({q0, q2}, 0) = ε-closure(δ(q0, 0) ∪ δ(q2, 0)) = ε-closure({q0, q1} ∪ {q4}) = {q0, q1, q4}. New DFA state: {q0, q1, q4}
        *   **Transition from {q0, q2} on 1:** δ({q0, q2}, 1) = ε-closure(δ(q0, 1) ∪ δ(q2, 1)) = ε-closure({q0, q2} ∪ {}) = {q0, q2}
        *   **Transition from {q0, q2, q3} on 0:** δ({q0, q2, q3}, 0) = {q0, q1, q4}.
        *   **Transition from {q0, q2, q3} on 1:** δ({q0, q2, q3}, 1) = {q0, q2, q3}.
        *   **Transition from {q0, q1, q4} on 0:** δ({q0, q1, q4}, 0) = {q0, q1, q4}.
        *   **Transition from {q0, q1, q4} on 1:** δ({q0, q1, q4}, 1) = {q0, q2, q3}.

        We now have 5 states: {q0}, {q0, q1}, {q0, q2}, {q0, q2, q3}, {q0, q1, q4}. All transitions are defined, so we stop.

    4.  **Accepting States:**  {q0, q2, q3}, {q0, q1, q4} (because they contain q3 and q4, respectively).
*   **Resulting DFA:**

    *   Q' = {{q0}, {q0, q1}, {q0, q2}, {q0, q2, q3}, {q0, q1, q4}}
    *   Σ' = {0, 1}
    *   q0' = {q0}
    *   F' = {{q0, q2, q3}, {q0, q1, q4}}
    *   δ':
        *   δ'({q0}, 0) = {q0, q1}
        *   δ'({q0}, 1) = {q0, q2}
        *   δ'({q0, q1}, 0) = {q0, q1}
        *   δ'({q0, q1}, 1) = {q0, q2, q3}
        *   δ'({q0, q2}, 0) = {q0, q1, q4}
        *   δ'({q0, q2}, 1) = {q0, q2}
        *   δ'({q0, q2, q3}, 0) = {q0, q1, q4}
        *   δ'({q0, q2, q3}, 1) = {q0, q2, q3}
        *   δ'({q0, q1, q4}, 0) = {q0, q1, q4}
        *   δ'({q0, q1, q4}, 1) = {q0, q2, q3}

## 5. DFA Minimization

*   **Goal:** To reduce the number of states in a DFA while preserving its language.  The minimal DFA is unique (up to renaming of states).
*   **Algorithm (Table-Filling Algorithm):**
    1.  **Draw the state-transition table for the DFA.**
    2.  **Identify all pairs of states {p, q} where p ∈ F and q ∉ F.** (one is accepting, the other is not). Mark all such pairs as distinguishable.
    3.  **Iterate through all unmarked pairs {p, q}**:
        *   For each input symbol 'a' in the alphabet:
            *   Compute the next states r = δ(p, a) and s = δ(q, a).
            *   If the pair {r, s} is marked (distinguishable), then mark the pair {p, q} as distinguishable.
        *   Repeat this step until no new pairs are marked in an iteration.
    4.  **Merge the unmarked states:** All states that are not distinguishable (i.e., the pairs {p, q} that remained unmarked) are equivalent and can be merged into a single state.  Create a new DFA with these merged states.  The transition function for the new DFA is derived from the original DFA.
*   **Important:** Minimization is only applicable to DFAs, not NFAs.

### 5.1. Example of DFA Minimization

Let's say you have a DFA with the following transition table and F={D,E}:

|       | 0   | 1   |
|-------|-----|-----|
| -> A | B  | C  |
|    B | A  | D  |
|    C | E  | F  |
|    D | C  | E  |
|    E | D  | B  |
|    F | F  | F  |

1.  **Initial Marking:**  {A,D}, {A,E}, {B,D}, {B,E}, {C,D}, {C,E} are marked, because D and E are final states and A, B, C, and F are not.

2.  **Iteration 1:**
    *   {A,B}:  δ(A,0) = B, δ(B,0) = A.  {B,A} is not marked.  δ(A,1) = C, δ(B,1) = D. {C,D} *is* marked, so mark {A,B}.
    *   {A,C}:  δ(A,0) = B, δ(C,0) = E. {B,E} is marked, so mark {A,C}.
    *   {A,F}:  δ(A,0) = B, δ(F,0) = F.  {B,F} isn't marked yet. δ(A,1) = C, δ(F,1) = F. {C,F} isn't marked yet. Need to come back to this.
    *   {B,C}:  δ(B,0) = A, δ(C,0) = E. {A,E} is marked, so mark {B,C}.
    *   {B,F}: δ(B,0) = A, δ(F,0) = F. {A,F} isn't marked yet. δ(B,1) = D, δ(F,1) = F. {D,F} isn't marked yet. Need to come back to this.
    *   {C,F}: δ(C,0) = E, δ(F,0) = F. {E,F} isn't marked yet. δ(C,1) = F, δ(F,1) = F. {F,F} isn't marked yet. Need to come back to this.
    *   {D,E}:  δ(D,0) = C, δ(E,0) = D. {C,D} is marked, so {D,E} is marked. (We already knew this, but it shows the algorithm works).
    *   {D,F}:  δ(D,0) = C, δ(F,0) = F.  {C,F} isn't marked yet. δ(D,1) = E, δ(F,1) = F. {E,F} isn't marked yet. Need to come back to this.
    *   {E,F}: δ(E,0) = D, δ(F,0) = F. {D,F} isn't marked yet. δ(E,1) = B, δ(F,1) = F. {B,F} isn't marked yet. Need to come back to this.

3.  **Iteration 2:**  {A,F}, {B,F}, {C,F}, {D,F}, and {E,F} are still unmarked. Let's re-examine them. This process continues until no more pairs are marked.  After further iterations, you'll find:

    *   {A,F} remains unmarked.
    *   {B,F} gets marked because {A,F} is *not* marked but {D,F} and {A,C} are not merged.
    *   {C,F} gets marked because {E,F} is not merged.
    *   {D,E} gets marked at the outset since D and E are accept/reject.

    Final Unmarked Pairs: {A,F} (suggesting A and F can be merged). Also, D and E are likely to merge. This requires several passes.

4.  **Merging:**  Based on the final unmarked pairs, merge A and F into a single state (AF), and D and E into (DE).
|       | 0   | 1   |
|-------|-----|-----|
| -> AF | B  | C  |
|    B | AF  | DE  |
|    C | DE  | AF  |
|    DE | C  | B  |

A is now the same state as F so replace every F with A.
D is now the same state as E so replace every E with D

|       | 0   | 1   |
|-------|-----|-----|
| -> A | B  | C  |
|    B | A  | D  |
|    C | D  | A  |
|    D | C  | B  |

## 6. Finite Automata and Regular Expressions

*   **Relationship:** Finite Automata and Regular Expressions are equivalent formalisms for describing regular languages.
*   **Kleene's Theorem:** A language is regular if and only if it is recognized by a finite automaton (DFA or NFA).  This means:
    *   Every regular expression can be converted to an equivalent finite automaton.
    *   Every finite automaton can be converted to an equivalent regular expression.
*   **Conversion Methods:**
    *   **Regular Expression to NFA:**  Thompson's Construction Algorithm.
    *   **DFA to Regular Expression:** State Elimination Method.

## 7. Applications of Finite Automata

*   **Lexical Analysis (Compilers):**  Identifying tokens (keywords, identifiers, operators) in source code.
*   **Text Searching:**  Finding patterns in text.  The `grep` command is a classic example.
*   **Network Protocols:**  Verifying the correct sequence of messages.
*   **Verification of Systems:**  Checking if a system satisfies certain properties (model checking).
*   **Traffic Light Control:**  Designing simple controllers.

## 8. Practice Questions / Exercises

1.  **Design a DFA** that accepts strings over Σ = {a, b} that start with "a" and end with "b".

2.  **Design an NFA** that accepts strings over Σ = {0, 1} where the third symbol from the right is a '1'.

3.  **Convert the following NFA to a DFA:**

    *   Q = {q0, q1, q2}
    *   Σ = {0, 1}
    *   q0 = q0
    *   F = {q2}
    *   δ:
        *   δ(q0, 0) = {q0, q1}
        *   δ(q0, 1) = {q0}
        *   δ(q1, 1) = {q2}

4.  **Minimize the following DFA:**

    *   Q = {A, B, C, D, E}
    *   Σ = {0, 1}
    *   q0 = A
    *   F = {D, E}
    *   δ:
        *   δ(A, 0) = B
        *   δ(A, 1) = C
        *   δ(B, 0) = A
        *   δ(B, 1) = D
        *   δ(C, 0) = E
        *   δ(C, 1) = A
        *   δ(D, 0) = C
        *   δ(D, 1) = E
        *   δ(E, 0) = D
        *   δ(E, 1) = B

## 9. Answers to Practice Questions / Exercises

1.  **DFA for "starts with a and ends with b":**

    *   Q = {q0, q1, q2, q3}
    *   Σ = {a, b}
    *   q0 = q0
    *   F = {q2}
    *   δ:
        *   δ(q0, a) = q1
        *   δ(q0, b) = q3
        *   δ(q1, a) = q1
        *   δ(q1, b) = q2
        *   δ(q2, a) = q1
        *   δ(q2, b) = q2
        *   δ(q3, a) = q3
        *   δ(q3, b) = q3

2.  **NFA for "third symbol from the right is 1":**

    *   Q = {q0, q1}
    *   Σ = {0, 1}
    *   q0 = q0
    *   F = {q1}
    *   δ:
        *   δ(q0, 0) = {q0}
        *   δ(q0, 1) = {q0}
        *   δ(q0, 1) = {q1}
        *   δ(q1, 0) = {q0}
        *   δ(q1, 1) = {q0}

3.  **NFA to DFA Conversion:**

    *   **NFA:** Q = {q0, q1, q2}, Σ = {0, 1}, q0 = q0, F = {q2}, δ(q0, 0) = {q0, q1}, δ(q0, 1) = {q0}, δ(q1, 1) = {q2}
    *   ε-closures: ε-closure(q0) = {q0}, ε-closure(q1) = {q1}, ε-closure(q2) = {q2}
    *   **DFA:**
        *   Start state: {q0}
        *   δ({q0}, 0) = ε-closure({q0, q1}) = {q0, q1}
        *   δ({q0}, 1) = ε-closure({q0}) = {q0}
        *   δ({q0, q1}, 0) = ε-closure({q0, q1}) = {q0, q1}
        *   δ({q0, q1}, 1) = ε-closure({q0, q2}) = {q0, q2}
        *   δ({q0, q2}, 0) = ε-closure({q0, q1}) = {q0, q1}
        *   δ({q0, q2}, 1) = ε-closure({q0}) = {q0}
        *   Accepting states: {q0, q2}

4. **DFA Minimization:**

* From above you should find that after filling out the table:
    * A and C can be merged
    * D and E can be merged.

* Final transition table
|       | 0   | 1   |
|-------|-----|-----|
| -> A | B  | A  |
|    B | A  | D  |
|    D | A  | B  |

## 10. Important Points to Remember

*   DFAs are deterministic; NFAs are not.
*   NFAs can have ε-transitions; DFAs do not.
*   Every NFA can be converted to an equivalent DFA.
*   DFA minimization aims to reduce the number of states.
*   Finite Automata are equivalent to Regular Expressions in terms of expressive power.
*   Finite Automata have numerous practical applications.

This detailed overview should provide a solid foundation in Finite Automata. Remember to review the Linz and Hopcroft textbooks for further details and examples. Good luck with your studies!
