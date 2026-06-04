---
title: "Formal definition of a finite automaton"
subject: "THEORY OF COMPUTATION"
module: "Module 1: Foundations (Linz, Hopcroft)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ab99"
status: "completed"
scrapedAt: "2026-05-20T16:29:42.751Z"
---
# THEORY OF COMPUTATION - Module 1: Foundations - Formal Definition of a Finite Automaton

## Introduction

This module focuses on the formal definition of a Finite Automaton (FA), a fundamental concept in the theory of computation. We will draw upon the foundational works of Linz and Hopcroft to define FAs precisely and explore their properties.

## Learning Outcomes

By the end of this module, you will be able to:

*   Understand the formal definition of a Deterministic Finite Automaton (DFA).
*   Understand the formal definition of a Non-deterministic Finite Automaton (NFA).
*   Identify the components of a DFA and NFA.
*   Trace the execution of a DFA and NFA on a given input string.
*   Distinguish between DFAs and NFAs.
*   Construct DFAs and NFAs to recognize simple regular languages.

## 1. Key Concepts and Definitions

### 1.1 Alphabet (Σ)

*   **Definition:** A finite, non-empty set of symbols.
*   **Example:**
    *   Binary alphabet: Σ = {0, 1}
    *   English alphabet: Σ = {a, b, c, ..., z}

### 1.2 String

*   **Definition:** A finite sequence of symbols chosen from an alphabet.
*   **Example:**
    *   "0110" is a string over the alphabet Σ = {0, 1}
    *   "hello" is a string over the alphabet Σ = {a, b, c, ..., z}
*   **Empty String (ε):** A string with no symbols.  Its length is 0.

### 1.3 Language (L)

*   **Definition:** A set of strings formed over a given alphabet.
*   **Example:**
    *   The language of all strings over {0, 1} that start with 1: L = {1, 10, 11, 100, 101, 110, 111, ...}
    *   The language of all strings over {a, b} of length 2: L = {aa, ab, ba, bb}
    *   The empty language: L = {} (the language containing no strings)

### 1.4 Deterministic Finite Automaton (DFA)

*   **Formal Definition:** A DFA is a 5-tuple  `M = (Q, Σ, δ, q0, F)`, where:
    *   `Q` is a finite set of states.
    *   `Σ` is a finite alphabet.
    *   `δ: Q × Σ → Q` is the transition function.  It takes a state and an input symbol and returns a new state. For *each* state and *each* input symbol, there is exactly *one* resulting state.
    *   `q0 ∈ Q` is the initial state.
    *   `F ⊆ Q` is a set of accepting (or final) states.

*   **Components:**
    *   **States (Q):** Represents different stages of computation.
    *   **Alphabet (Σ):** The set of symbols the DFA can read as input.
    *   **Transition Function (δ):** Determines the next state based on the current state and input symbol.
    *   **Initial State (q0):** The state the DFA starts in.
    *   **Accepting States (F):** States that, if reached at the end of the input, indicate the input is accepted.

*   **Acceptance:** A DFA M accepts a string `w = a1a2...an` if a sequence of states `r0, r1, ..., rn` exists in Q such that:
    *   `r0 = q0` (The machine starts in the initial state)
    *   `δ(ri, ai+1) = ri+1` for `i = 0, 1, ..., n-1` (The transitions are consistent with the transition function)
    *   `rn ∈ F` (The machine ends in an accepting state)

### 1.5 Non-deterministic Finite Automaton (NFA)

*   **Formal Definition:** An NFA is a 5-tuple  `M = (Q, Σ, δ, q0, F)`, where:
    *   `Q` is a finite set of states.
    *   `Σ` is a finite alphabet.
    *   `δ: Q × Σ → P(Q)` is the transition function.  It takes a state and an input symbol and returns a *set* of states (the power set of Q).
    *   `q0 ∈ Q` is the initial state.
    *   `F ⊆ Q` is a set of accepting (or final) states.

*   **Components:** Same as DFA, except for the transition function.
*   **Key Difference: Non-Determinism:** For a given state and input symbol, the NFA can transition to *multiple* states simultaneously (or zero states). This allows for multiple possible computation paths.  It can also transition on ε (the empty string) without reading an input symbol.

*   **Acceptance:** An NFA M accepts a string `w = a1a2...an` if *at least one* sequence of states `r0, r1, ..., rn` exists in Q such that:
    *   `r0 = q0` (The machine starts in the initial state)
    *   `ri+1 ∈ δ(ri, ai+1)` for `i = 0, 1, ..., n-1` (The transitions are consistent with the transition function. Notice the "∈" which implies a set.)
    *   `rn ∈ F` (The machine ends in an accepting state)

### 1.6 DFA vs. NFA

| Feature           | DFA                                 | NFA                                  |
|-------------------|--------------------------------------|---------------------------------------|
| Transition Function | `δ: Q × Σ → Q`                      | `δ: Q × Σ → P(Q)`                      |
| Determinism        | Deterministic (single path)          | Non-deterministic (multiple paths)     |
| ε-transitions      | Not allowed                         | Allowed                               |
| Power             | Same as NFA (can be converted)      | Same as DFA (can be converted)      |
| Ease of Design    | Can be more complex for some languages | Often simpler for some languages   |

## 2. Examples

### 2.1 DFA Example: Accepts strings over {0, 1} with an even number of 1s.

*   `M = (Q, Σ, δ, q0, F)`
    *   `Q = {q0, q1}` (q0 represents "even number of 1s", q1 represents "odd number of 1s")
    *   `Σ = {0, 1}`
    *   `δ:`

        |       | 0   | 1   |
        |-------|-----|-----|
        | q0    | q0  | q1  |
        | q1    | q1  | q0  |
    *   `q0` (initial state, representing even number of 1s)
    *   `F = {q0}` (accepting state, representing even number of 1s)

*   **String "1010":**
    *   `r0 = q0`
    *   `δ(q0, 1) = q1 = r1`
    *   `δ(q1, 0) = q1 = r2`
    *   `δ(q1, 1) = q0 = r3`
    *   `δ(q0, 0) = q0 = r4`
    *   `r4 = q0 ∈ F`. Therefore, "1010" is accepted.

*   **String "111":**
    *   `r0 = q0`
    *   `δ(q0, 1) = q1 = r1`
    *   `δ(q1, 1) = q0 = r2`
    *   `δ(q0, 1) = q1 = r3`
    *   `r3 = q1 ∉ F`. Therefore, "111" is rejected.

### 2.2 NFA Example: Accepts strings over {0, 1} that end with "01".

*   `M = (Q, Σ, δ, q0, F)`
    *   `Q = {q0, q1, q2}`
    *   `Σ = {0, 1}`
    *   `δ:`

        |       | 0          | 1          |
        |-------|------------|------------|
        | q0    | {q0, q1}   | {q0}       |
        | q1    | {}         | {q2}       |
        | q2    | {}         | {}         |
    *   `q0`
    *   `F = {q2}`

*   **String "1101":** One possible path is:
    *   `r0 = q0`
    *   `r1 = q0 ∈ δ(q0, 1)`
    *   `r2 = q0 ∈ δ(q0, 1)`
    *   `r3 = q1 ∈ δ(q0, 0)`
    *   `r4 = q2 ∈ δ(q1, 1)`
    *   `r4 = q2 ∈ F`. Therefore, "1101" is accepted.

*   **String "111":** No path leads to the accepting state q2.  Therefore, "111" is rejected.

## 3. Practice Questions/Exercises

1.  **Question:** Formally define a DFA that accepts strings over {a, b} that contain the substring "ab".

    **Answer:** `M = (Q, Σ, δ, q0, F)` where:
    *   `Q = {q0, q1, q2}`
    *   `Σ = {a, b}`
    *   `δ:`

        |       | a   | b   |
        |-------|-----|-----|
        | q0    | q1  | q0  |
        | q1    | q1  | q2  |
        | q2    | q2  | q2  |
    *   `q0`
    *   `F = {q2}`

2.  **Question:** Formally define an NFA that accepts strings over {0, 1} that start with "1" and end with "0".

    **Answer:** `M = (Q, Σ, δ, q0, F)` where:
    *   `Q = {q0, q1, q2, q3}`
    *   `Σ = {0, 1}`
    *   `δ:`

        |       | 0      | 1      |
        |-------|--------|--------|
        | q0    | {}     | {q1}   |
        | q1    | {q2}   | {q1}   |
        | q2    | {}     | {}     |
        | q3 | {q3} | {q3} |
    *   `q0`
    *   `F = {q2}`

3.  **Question:** Trace the execution of the DFA from Example 2.1 on the string "01011".  Is the string accepted?

    **Answer:**
    *   `r0 = q0`
    *   `δ(q0, 0) = q0 = r1`
    *   `δ(q0, 1) = q1 = r2`
    *   `δ(q1, 0) = q1 = r3`
    *   `δ(q1, 1) = q0 = r4`
    *   `δ(q0, 1) = q1 = r5`
    *   `r5 = q1 ∉ F`
    *   The string "01011" is **not** accepted.

4.  **Question:** Trace the execution of the NFA from Example 2.2 on the string "110".  Is the string accepted?

    **Answer:**
    *   `r0 = q0`
    *   `δ(q0, 1) = {q0} = r1` *One Possible Path*
    *   `δ(q0, 1) = {q0} = r2`
    *   `δ(q0, 0) = {q0, q1} = r3` Let's try q1 this time.
    *   Let us choose the q1 option to be in for this path: `q1`.
    *    `δ(q1, 0) = {} = r3`

    We must explore other possible states. Let us go back to `r2`.
    *    `δ(q0, 0) = {q0, q1} = r3` Let's try q0 this time.

    Since we are trying to find the path to reach the accepting state q2, let us explore q0 as it is the only state with transitions.
    We have `r2 = q0`, then we have `δ(q0, 0) = {q0, q1} = r3`

    *   `r0 = q0`
    *   `r1 = q0 ∈ δ(q0, 1)`
    *   `r2 = q0 ∈ δ(q0, 1)`
    *   `r3 = q1 ∈ δ(q0, 0)`
    *   `r4 = q2 ∈ δ(q1, ε)` (we can implicitly add epsilon transitions on every state to itself.)

    The string "110" is accepted as q2 is an element of F.

## 4. Important Points to Remember

*   A DFA *must* have exactly one transition defined for each state and input symbol.  This ensures deterministic behavior.
*   An NFA *can* have multiple transitions or no transitions defined for a given state and input symbol.
*   NFAs are often easier to design than DFAs for certain languages.
*   Every NFA can be converted into an equivalent DFA, although the DFA may have exponentially more states.
*   The empty string (ε) is an important concept and allows for transitions in NFAs without consuming an input symbol.
*   When tracing an NFA's execution, remember that the NFA accepts if *any* possible computation path leads to an accepting state.
*   Understand the formal definition precisely – each symbol plays a critical role. This will enable you to prove properties about automata and languages later on.
