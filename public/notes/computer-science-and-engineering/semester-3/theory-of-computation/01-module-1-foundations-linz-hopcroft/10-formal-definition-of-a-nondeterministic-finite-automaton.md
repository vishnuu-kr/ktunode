---
title: "Formal definition of a nondeterministic finite automaton"
subject: "THEORY OF COMPUTATION"
module: "Module 1: Foundations (Linz, Hopcroft)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ab9d"
status: "completed"
scrapedAt: "2026-05-20T16:29:45.613Z"
---
# THEORY OF COMPUTATION: Module 1 - Foundations: Nondeterministic Finite Automata (NFA)

## Topic: Formal Definition of a Nondeterministic Finite Automaton (NFA)

### Introduction

This module introduces the formal definition of a Nondeterministic Finite Automaton (NFA).  NFAs are an extension of Deterministic Finite Automata (DFAs) that allow for multiple possible transitions from a given state on a given input symbol, or transitions without any input at all (epsilon transitions). Understanding NFAs is crucial because they are often easier to design than DFAs for certain languages, and they provide a basis for understanding more complex computational models.

### Learning Outcomes

By the end of this module, you should be able to:

*   Define a Nondeterministic Finite Automaton (NFA) formally.
*   Explain the differences between NFAs and DFAs.
*   Construct NFAs for simple languages.
*   Trace the execution of an NFA on a given input string.
*   Understand and utilize epsilon transitions in NFAs.

### 1. Key Concepts and Definitions

*   **Nondeterministic Finite Automaton (NFA):** A computational model that allows for multiple transitions for the same input symbol from a given state, or transitions without reading an input symbol (epsilon transitions).  This "nondeterminism" means that the automaton can be in multiple states simultaneously during processing.

*   **Formal Definition of an NFA:** An NFA is formally defined as a 5-tuple:

    *   `M = (Q, Σ, δ, q0, F)` where:

        *   `Q`: A finite set of states.
        *   `Σ`: A finite set of input symbols (the alphabet).
        *   `δ`: The transition function: `δ: Q x (Σ ∪ {ε}) → P(Q)`.  This function takes a state and an input symbol (or epsilon) and returns a *set* of possible next states.  `P(Q)` represents the power set of Q (the set of all subsets of Q).
        *   `q0`: The start state, `q0 ∈ Q`.
        *   `F`: A set of accept states, `F ⊆ Q`.

*   **Deterministic Finite Automaton (DFA):**  A DFA, in contrast, has a *single* transition for each state-symbol combination. The transition function for a DFA is defined as `δ: Q x Σ → Q`.

*   **Epsilon Transitions (ε-transitions):** Transitions that occur without consuming an input symbol. These transitions allow the NFA to move between states freely.  `ε` is a symbol not in the alphabet `Σ`.

*   **Power Set:**  The power set of a set `S`, denoted `P(S)`, is the set of all possible subsets of `S`, including the empty set and `S` itself.  Example: If `S = {a, b}`, then `P(S) = { {}, {a}, {b}, {a, b} }`.

*   **Language Accepted by an NFA (L(M)):** The set of all strings `w` in `Σ*` such that, when the NFA `M` processes `w` starting from the start state `q0`, at least one possible computation path ends in an accept state in `F`.

### 2. Differences Between NFAs and DFAs

| Feature             | DFA                                    | NFA                                                                                                  |
|----------------------|------------------------------------------|------------------------------------------------------------------------------------------------------|
| Transition Function | `δ: Q x Σ → Q`                           | `δ: Q x (Σ ∪ {ε}) → P(Q)`                                                                             |
| Transitions          | Exactly one transition per state/symbol | Zero, one, or multiple transitions per state/symbol. Allows epsilon transitions.                     |
| Determinism          | Deterministic (single path)               | Nondeterministic (multiple possible paths)                                                           |
| Ease of Design       | Can be more complex for some languages   | Often easier to design, especially for languages involving choices or optional parts.                    |
| Power                | Equivalent to NFAs (can accept same languages)| Equivalent to DFAs (for every NFA, there exists a DFA that accepts the same language, and vice versa)|

### 3. Constructing NFAs for Simple Languages

**Example 1: Language L = {w | w ends with '01'} over Σ = {0, 1}**

NFA: `M = (Q, Σ, δ, q0, F)`

*   `Q = {q0, q1, q2}`
*   `Σ = {0, 1}`
*   `q0` is the start state.
*   `F = {q2}`
*   `δ` is defined as:

    | State | Input | Next State(s) |
    |-------|-------|----------------|
    | q0    | 0     | {q0, q1}       |
    | q0    | 1     | {q0}           |
    | q1    | 1     | {q2}           |
    | q1    | 0     | {}             |
    | q2    | 0     | {}             |
    | q2    | 1     | {}             |

**Explanation:**

*   From the start state `q0`, on seeing a '0', the NFA can either stay in `q0` (if the string may have more symbols before the '01' ending) or transition to `q1` (if this '0' is potentially the second-to-last symbol).
*   From `q0`, on seeing a '1', the NFA must remain in `q0` as it is looking for a '0' followed by '1'.
*   From `q1`, on seeing a '1', the NFA transitions to the accept state `q2`, indicating that the string ends with '01'.

**Example 2: Language L = {w | w contains '010'} over Σ = {0, 1}**

NFA: `M = (Q, Σ, δ, q0, F)`

*   `Q = {q0, q1, q2, q3}`
*   `Σ = {0, 1}`
*   `q0` is the start state.
*   `F = {q3}`
*   `δ` is defined as:

    | State | Input | Next State(s) |
    |-------|-------|----------------|
    | q0    | 0     | {q0, q1}       |
    | q0    | 1     | {q0}           |
    | q1    | 1     | {q2}           |
    | q1    | 0     | {}             |
    | q2    | 0     | {q3}           |
    | q2    | 1     | {}             |
    | q3    | 0     | {q3}           |
    | q3    | 1     | {q3}           |

**Explanation:** This NFA stays in `q0` until it sees a `0`. If it sees a `0`, it *might* be the beginning of the `010` pattern and transitions to `q1`. If it's not, it stays in `q0`. Similar logic applies for the rest of the states. After seeing `010`, it transitions to `q3`, and remains in `q3` for any further input.

**Example 3: Language L = {w | w starts with '0' or '1'} over Σ = {0, 1}  (demonstrating multiple start transitions)**
While technically this is already handled implicitly by staying in the start state initially and branching accordingly, it's useful to illustrate the concept when transitioning to *different* states.  To handle this properly and stay within the formal definition, we can define the language as L = Σ*, as all strings start with 0 or 1.  However, a slightly modified definition with epsilon transitions can illustrate this point better.

NFA: `M = (Q, Σ, δ, q0, F)`

*   `Q = {q0, q1, q2, q3}`
*   `Σ = {0, 1}`
*   `q0` is the start state.
*   `F = {q1, q2}`  We can accept strings that immediately end after seeing 0 or 1. Alternatively, we can transition to q3, an accepting "garbage state," that stays in q3 regardless of future input.
*   `δ` is defined as:

    | State | Input | Next State(s) |
    |-------|-------|----------------|
    | q0    | ε     | {q1, q2}       |
    | q1    | 0     | {q3}            |
    | q1    | 1     | {q3}            |
    | q2    | 0     | {q3}            |
    | q2    | 1     | {q3}            |
    | q3    | 0     | {q3}           |
    | q3    | 1     | {q3}           |

**Explanation:**
The NFA immediately transitions to `q1` or `q2` on an epsilon transition, representing starting with a 0 or 1 respectively. `q1` and `q2` then transition to `q3` on any input symbol, meaning that any following sequence is also accepted.

### 4. Tracing the Execution of an NFA

To determine if an NFA accepts a string, we need to trace all possible computation paths. If *at least one* path leads to an accepting state, the NFA accepts the string.

**Example: Using the NFA for L = {w | w ends with '01'} and input string "101"**

*   **Initial state:** {q0}
*   **Input '1':** δ(q0, 1) = {q0}
*   **Input '0':** δ(q0, 0) = {q0, q1}
*   **Input '1':** δ(q0, 1) ∪ δ(q1, 1) = {q0} ∪ {q2} = {q0, q2}

Since the set of final states {q0, q2} contains an accept state (q2), the NFA accepts the string "101".

**Example: Using the NFA for L = {w | w ends with '01'} and input string "110"**

*   **Initial state:** {q0}
*   **Input '1':** δ(q0, 1) = {q0}
*   **Input '1':** δ(q0, 1) = {q0}
*   **Input '0':** δ(q0, 0) = {q0, q1}

Since the set of final states {q0, q1} does *not* contain an accept state (q2), the NFA rejects the string "110" (although, after reading '110', the NFA could be in state q0 *or* q1; neither is an accepting state).

**Example:  Consider the NFA with the following transition function and input string "ab".**

| State | Input | Next State(s) |
|-------|-------|----------------|
| q0    | a     | {q1, q2}       |
| q0    | b     | {}             |
| q1    | b     | {q3}           |
| q1    | a     | {}             |
| q2    | b     | {q4}           |
| q2    | a     | {}             |
| q3    | a     | {}             |
| q3    | b     | {}             |
| q4    | a     | {}             |
| q4    | b     | {}             |
F = {q3, q4}

*   **Initial state:** {q0}
*   **Input 'a':** δ(q0, a) = {q1, q2}
*   **Input 'b':** δ(q1, b) ∪ δ(q2, b) = {q3} ∪ {q4} = {q3, q4}

Since the set of final states {q3, q4} *does* contain an accept state (q3 and q4), the NFA accepts the string "ab".

### 5. Epsilon Transitions in NFAs

Epsilon transitions allow an NFA to change state without reading an input symbol.  When tracing the execution of an NFA with epsilon transitions, you must consider all possible states that can be reached via epsilon transitions *before* and *after* processing each input symbol. This is known as taking the *epsilon closure* of the current set of states.

*   **Epsilon Closure (ε-closure(q)):** The set of all states reachable from state `q` by following zero or more epsilon transitions.

*   **Epsilon Closure of a set of states (ε-closure(S)):**  The union of the epsilon closures of all states in S.

**Example: NFA with epsilon transitions**

Let's say we have an NFA with the following transitions (simplified notation):

*   δ(q0, ε) = {q1, q2}
*   δ(q1, a) = {q3}
*   δ(q2, b) = {q4}
*   F = {q3, q4}

What happens with input "a"?

1.  **Start state:**  `q0`
2.  **Epsilon closure of q0:** `ε-closure(q0) = {q0, q1, q2}`
3.  **Input 'a':**
    *   `δ(q0, a) = {}`
    *   `δ(q1, a) = {q3}`
    *   `δ(q2, a) = {}`
    *   So, after reading 'a', the NFA is in states `{q3}`
4.  **Epsilon closure of {q3}:** `ε-closure({q3}) = {q3}`.

Since `q3` is an accepting state, the NFA accepts the string "a".

**Example 2:  An NFA with the following:**

*  Q = {q0, q1, q2, q3}
*  Σ = {a, b}
*  q0 is the start state
*  F = {q3}
*  δ(q0, a) = {q1}
*  δ(q1, ε) = {q2}
*  δ(q2, b) = {q3}

Let's trace the execution of the input "ab":

1.  **Start state:** {q0}
2.  **Input 'a':** δ(q0, a) = {q1}
3.  **Epsilon closure of {q1}:** ε-closure({q1}) = {q1, q2}
4.  **Input 'b':** δ(q1, b) ∪ δ(q2, b) = {} ∪ {q3} = {q3}
5.  **Epsilon closure of {q3}:** ε-closure({q3}) = {q3}

Since q3 is an accepting state, the string "ab" is accepted.

If the input was "a", steps 1-3 would result in the states {q1, q2}.  Since neither are accepting, "a" would be rejected.

### 6. Practice Questions/Exercises

1.  **Question:** Design an NFA that accepts the language L = {w | w contains "11" or "00"} over Σ = {0, 1}.  Provide the formal definition.

    **Answer:**
    M = (Q, Σ, δ, q0, F)
    *   Q = {q0, q1, q2, q3, q4}
    *   Σ = {0, 1}
    *   q0 is the start state
    *   F = {q3, q4}
    *   δ:

        | State | Input | Next State(s) |
        |-------|-------|----------------|
        | q0    | 0     | {q0, q1}       |
        | q0    | 1     | {q0, q2}       |
        | q1    | 0     | {q3}           |
        | q1    | 1     | {}             |
        | q2    | 1     | {q4}           |
        | q2    | 0     | {}             |
        | q3    | 0     | {q3}           |
        | q3    | 1     | {q3}           |
        | q4    | 0     | {q4}           |
        | q4    | 1     | {q4}           |

2.  **Question:** Trace the execution of the NFA from Question 1 with the input string "1011".  Does it accept the string?

    **Answer:**
    *   Initial state: {q0}
    *   Input '1': {q0, q2}
    *   Input '0': {q0, q1}
    *   Input '1': {q0, q2}
    *   Input '1': {q0, q2, q4}

    Since the set {q0, q2, q4} contains the accept state q4, the NFA *accepts* the string "1011".

3.  **Question:** Design an NFA with epsilon transitions that accepts strings of the form 0*10*. Provide the formal definition.

    **Answer:**
    M = (Q, Σ, δ, q0, F)
    *   Q = {q0, q1, q2}
    *   Σ = {0, 1}
    *   q0 is the start state
    *   F = {q2}
    *   δ:

        | State | Input | Next State(s) |
        |-------|-------|----------------|
        | q0    | 0     | {q0}           |
        | q0    | ε     | {q1}           |
        | q1    | 1     | {q2}           |
        | q2    | 0     | {q2}           |

4. **Question:**  Given the following NFA with epsilon transitions:

    * Q = {q0, q1, q2}
    * Σ = {a}
    * q0 is the start state
    * F = {q2}
    * δ(q0, ε) = {q1}
    * δ(q1, a) = {q2}

What language does this NFA accept?

**Answer:** This NFA accepts the language {a}.  It can transition from q0 to q1 without reading any input, and then from q1 to q2 by reading 'a'.

### 7. Important Points to Remember

*   NFAs can have multiple possible next states for a given input symbol.
*   NFAs can have epsilon transitions that allow state changes without consuming input.
*   An NFA accepts a string if *at least one* computation path leads to an accept state.
*   Epsilon closures are crucial for understanding the behavior of NFAs with epsilon transitions.
*   Every NFA has an equivalent DFA (that recognizes the same language), though the DFA may have exponentially more states.
*   When designing NFAs, think about the possible choices the automaton can make and use nondeterminism to your advantage.  It's often easier to "guess" correctly with an NFA than to pre-determine the correct state as you must with a DFA.
