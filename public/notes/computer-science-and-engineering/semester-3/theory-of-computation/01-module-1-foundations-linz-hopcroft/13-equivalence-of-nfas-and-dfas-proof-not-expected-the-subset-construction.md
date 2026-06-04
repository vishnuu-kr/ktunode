---
title: "Equivalence of NFAs and DFAs (Proof not expected) - The Subset Construction."
subject: "THEORY OF COMPUTATION"
module: "Module 1: Foundations (Linz, Hopcroft)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8aba0"
status: "completed"
scrapedAt: "2026-05-20T16:29:47.758Z"
---
# THEORY OF COMPUTATION - Module 1: Foundations - Equivalence of NFAs and DFAs (Subset Construction)

## Introduction

This module focuses on the equivalence of Non-deterministic Finite Automata (NFAs) and Deterministic Finite Automata (DFAs). While we won't delve into the formal proof, we will explore the core concept and the *Subset Construction* method, which demonstrates how any NFA can be converted into an equivalent DFA. This is crucial for understanding the power and limitations of finite automata and the languages they can recognize.

## Learning Outcomes

By the end of this module, you will be able to:

*   Explain the difference between DFAs and NFAs.
*   Understand the concept of NFA equivalence to DFA.
*   Apply the Subset Construction method to convert an NFA to an equivalent DFA.
*   Trace the execution of a converted DFA based on an initial NFA.

## Key Concepts and Definitions

*   **Deterministic Finite Automaton (DFA):**
    *   A DFA is a 5-tuple: `(Q, Σ, δ, q0, F)` where:
        *   `Q` is a finite set of states.
        *   `Σ` is a finite alphabet of input symbols.
        *   `δ` is the transition function: `δ: Q × Σ → Q`.  For each state and input symbol, there is *exactly one* next state.
        *   `q0` is the initial state, `q0 ∈ Q`.
        *   `F` is a set of accepting (final) states, `F ⊆ Q`.
*   **Non-deterministic Finite Automaton (NFA):**
    *   An NFA is a 5-tuple: `(Q, Σ, δ, q0, F)` where:
        *   `Q` is a finite set of states.
        *   `Σ` is a finite alphabet of input symbols.
        *   `δ` is the transition function: `δ: Q × Σ → P(Q)`.  For each state and input symbol, there can be *zero, one, or multiple* next states. `P(Q)` represents the power set of `Q` (the set of all subsets of Q).
        *   `q0` is the initial state, `q0 ∈ Q`.
        *   `F` is a set of accepting (final) states, `F ⊆ Q`.
*   **Equivalence:** Two automata (M1 and M2) are equivalent if they accept the same language, i.e., L(M1) = L(M2).
*   **Epsilon Transition (ε-transition):**  A transition in an NFA that allows the automaton to move from one state to another without consuming any input symbol.
*   **ε-closure(q):**  The set of all states reachable from state `q` by following only ε-transitions (including `q` itself).

## The Subset Construction: Converting an NFA to a DFA

The Subset Construction is a method for converting an NFA into an equivalent DFA. The key idea is that each state in the new DFA represents a *set of states* from the original NFA.

**Steps of the Subset Construction:**

1.  **Determine the Initial State of the DFA:**
    *   The initial state of the DFA is the ε-closure of the initial state of the NFA (i.e., `ε-closure(q0)`). This accounts for all states immediately reachable from the NFA's start state without consuming any input.

2.  **Construct the Transition Table:**
    *   For each state in the *DFA* (which is a set of NFA states) and for each input symbol in the alphabet `Σ`, determine the next state in the DFA as follows:
        *   Let `S` be the current DFA state (a set of NFA states).
        *   For each input symbol `a` in `Σ`:
            *   Compute the set of states reachable from the states in `S` on input `a`. This is  `δ(S, a) = ∪ { δ(q, a) | q ∈ S }`.  In other words, for each state `q` in `S`, find all states reachable from `q` on input `a`, and take the union of all these sets.
            *   Take the ε-closure of the resulting set. This accounts for any ε-transitions that can be taken after reading the input `a`.
            *   The resulting `ε-closure( δ(S, a) )` becomes the next state in the DFA for state `S` and input `a`.

3.  **Determine the Accepting States of the DFA:**
    *   Any DFA state that contains *at least one* accepting state from the original NFA is considered an accepting state in the DFA.

**Why does this work?**

The Subset Construction ensures that the DFA simulates all possible paths the NFA could take on a given input string. Each DFA state represents the set of NFA states the NFA *could* be in after reading a certain prefix of the input. The accepting states of the DFA guarantee that the DFA accepts the input if and only if the NFA *could* have ended in an accepting state after reading the entire input.

## Example

Let's convert the following NFA to a DFA using the Subset Construction:

**NFA:**

*   `Q = {q0, q1, q2}`
*   `Σ = {0, 1}`
*   `q0` is the start state.
*   `F = {q2}`
*   Transition function `δ`:

    | State | 0         | 1         | ε       |
    | :---- | :-------- | :-------- | :------ |
    | q0    | {q0, q1}  | {q0}      | ∅       |
    | q1    | {q2}      | ∅         | ∅       |
    | q2    | ∅         | ∅         | ∅       |

**Applying the Subset Construction:**

1.  **Initial DFA State:** `ε-closure(q0) = {q0}`.  Let's call this DFA state `A = {q0}`.

2.  **Construct Transition Table:**

    *   **State A = {q0}:**
        *   `δ(A, 0) = ε-closure(δ(q0, 0)) = ε-closure({q0, q1}) = {q0, q1}`. Let's call this DFA state `B = {q0, q1}`.
        *   `δ(A, 1) = ε-closure(δ(q0, 1)) = ε-closure({q0}) = {q0} = A`.

    *   **State B = {q0, q1}:**
        *   `δ(B, 0) = ε-closure(δ(q0, 0) ∪ δ(q1, 0)) = ε-closure({q0, q1} ∪ {q2}) = ε-closure({q0, q1, q2}) = {q0, q1, q2}`.  Let's call this DFA state `C = {q0, q1, q2}`.
        *   `δ(B, 1) = ε-closure(δ(q0, 1) ∪ δ(q1, 1)) = ε-closure({q0} ∪ ∅) = ε-closure({q0}) = {q0} = A`.

    *   **State C = {q0, q1, q2}:**
        *   `δ(C, 0) = ε-closure(δ(q0, 0) ∪ δ(q1, 0) ∪ δ(q2, 0)) = ε-closure({q0, q1} ∪ {q2} ∪ ∅) = ε-closure({q0, q1, q2}) = {q0, q1, q2} = C`.
        *   `δ(C, 1) = ε-closure(δ(q0, 1) ∪ δ(q1, 1) ∪ δ(q2, 1)) = ε-closure({q0} ∪ ∅ ∪ ∅) = ε-closure({q0}) = {q0} = A`.

    Transition Table for the DFA:

    | State (DFA) | Represents (NFA) | 0    | 1    |
    | :----------- | :--------------- | :--- | :--- |
    | A            | {q0}             | B    | A    |
    | B            | {q0, q1}         | C    | A    |
    | C            | {q0, q1, q2}     | C    | A    |

3.  **Accepting States:** Since `C = {q0, q1, q2}` contains the accepting state `q2` from the NFA, C is an accepting state in the DFA. Also,  `B = {q0, q1, q2}` contains the accepting state `q2` from the NFA, B is also an accepting state in the DFA.

**Resulting DFA:**

*   `Q' = {A, B, C}`
*   `Σ = {0, 1}`
*   `q0' = A`
*   `F' = {B, C}`
*   Transition function `δ'` as defined in the table above.

## Practice Questions/Exercises

1.  Convert the following NFA to an equivalent DFA using the Subset Construction:

    **NFA:**

    *   `Q = {q0, q1, q2}`
    *   `Σ = {a, b}`
    *   `q0` is the start state.
    *   `F = {q2}`
    *   Transition function `δ`:

        | State | a          | b          | ε       |
        | :---- | :--------- | :--------- | :------ |
        | q0    | {q1}       | {q0}       | ∅       |
        | q1    | {q2}       | ∅          | ∅       |
        | q2    | ∅          | ∅          | ∅       |

    **Answer:**

    *   Initial state: A = {q0}
    *   Transitions:
        *   A: a -> {q1} = B; b -> {q0} = A
        *   B: a -> {q2} = C; b -> ∅ = D (Dead State)
        *   C: a -> ∅ = D; b -> ∅ = D
        *   D: a -> ∅ = D; b -> ∅ = D
    *   Accepting states: C
    *   DFA states: {A, B, C, D}

2.  Consider the DFA you created in the previous problem. Trace the execution of the DFA with input string "aba". Which state does the DFA end up in, and does it accept or reject the string?

    **Answer:**

    *   Start state: A
    *   Input 'a': A -> B
    *   Input 'b': B -> D
    *   Input 'a': D -> D
    *   Final State: D
    *   Accepts/Rejects: Rejects (D is not an accepting state)

## Important Points to Remember

*   The Subset Construction *always* produces a DFA that is equivalent to the original NFA.
*   The number of states in the resulting DFA can be up to 2<sup>|Q|</sup>, where |Q| is the number of states in the original NFA (the power set). However, in practice, the number of reachable states is often much smaller.
*   The Subset Construction can lead to a DFA with unreachable states. These states can be safely removed without affecting the language accepted by the DFA.
*   Understanding the Subset Construction provides insight into why DFAs and NFAs are equivalent in terms of computational power. Any language recognizable by an NFA can also be recognized by a DFA.
