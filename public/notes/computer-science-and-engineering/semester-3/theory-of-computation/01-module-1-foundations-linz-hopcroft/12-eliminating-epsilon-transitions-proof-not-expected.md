---
title: "Eliminating epsilon transitions (Proof not expected)"
subject: "THEORY OF COMPUTATION"
module: "Module 1: Foundations (Linz, Hopcroft)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ab9f"
status: "completed"
scrapedAt: "2026-05-20T16:29:47.042Z"
---
# THEORY OF COMPUTATION: Module 1 - Foundations - Eliminating Epsilon Transitions

**Module:** Module 1: Foundations (Linz, Hopcroft)
**Topic:** Eliminating Epsilon Transitions
**Description:** Converting a Nondeterministic Finite Automaton (NFA) with epsilon transitions to an equivalent NFA without epsilon transitions.  The proof of correctness is NOT required.

**Learning Outcomes:**

*   Understand the concept and purpose of epsilon transitions in NFAs.
*   Learn the algorithm to eliminate epsilon transitions from an NFA.
*   Be able to apply the algorithm to convert an NFA with epsilon transitions to an equivalent NFA without epsilon transitions.
*   Understand the concept of epsilon-closure.

## 1. Introduction to Epsilon Transitions

*   **Definition:** An epsilon transition (ε-transition) in an NFA is a transition that allows the automaton to change its state without consuming any input symbol.  In other words, the automaton can move from state 'p' to state 'q' on an 'ε' input.

*   **Purpose:** Epsilon transitions provide flexibility and convenience in designing NFAs. They can simplify the construction of NFAs that recognize complex languages. They allow expressing "or" relationships or optional components.

*   **Example:** Imagine recognizing strings that start with "a" followed by either "bb" or "c".  An epsilon transition can allow the NFA to branch out to two sub-automata - one accepting "bb" and the other accepting "c".

## 2. Key Concepts: Epsilon-Closure

*   **Definition:** The epsilon-closure (ε-closure) of a state 'q' is the set of all states that can be reached from 'q' by following zero or more epsilon transitions. This set always includes the state 'q' itself.

*   **Notation:** ε-closure(q)

*   **Importance:**  The epsilon-closure is crucial for eliminating epsilon transitions.  It helps determine all possible states the NFA *could* be in without consuming any input.

*   **Algorithm to compute ε-closure(q):**

    1.  Initialize: ε-closure(q) = {q}
    2.  Repeat:
        *   For each state 'r' in ε-closure(q):
            *   For each state 's' such that there's an ε-transition from 'r' to 's':
                *   If 's' is not already in ε-closure(q), add 's' to ε-closure(q).
    3.  Until no more states can be added to ε-closure(q).

*   **Example:** Consider an NFA with states {q0, q1, q2} and the following epsilon transitions:

    *   q0 --ε--> q1
    *   q1 --ε--> q2

    Then:

    *   ε-closure(q0) = {q0, q1, q2}
    *   ε-closure(q1) = {q1, q2}
    *   ε-closure(q2) = {q2}

## 3. Algorithm for Eliminating Epsilon Transitions

This algorithm converts an NFA *N* with epsilon transitions to an equivalent NFA *N'* without epsilon transitions. (Proof of equivalence is not required).

*   **Input:** NFA *N* = (Q, Σ, δ, q0, F) where:
    *   Q is the set of states.
    *   Σ is the input alphabet.
    *   δ is the transition function (Q x (Σ ∪ {ε}) -> P(Q), where P(Q) is the power set of Q).
    *   q0 is the start state.
    *   F is the set of accepting states.

*   **Output:** NFA *N'* = (Q', Σ, δ', q0', F') where:
    *   Q' is the set of states (usually the same as Q).
    *   Σ is the input alphabet (same as in *N*).
    *   δ' is the transition function (Q' x Σ -> P(Q')).
    *   q0' is the start state (usually q0).
    *   F' is the set of accepting states.

*   **Steps:**

    1.  **Compute epsilon-closures:** Calculate the epsilon-closure for each state in *N*.

    2.  **Construct the new transition function δ':**  For each state 'q' in Q' and each symbol 'a' in Σ:

        *   δ'(q, a) = ε-closure(δ(r, a)) for all r in ε-closure(q).  In simpler terms:

            *   Find ε-closure(q).
            *   For each state 'r' in ε-closure(q), find the set of states reachable from 'r' on input 'a' (δ(r, a)).
            *   Take the epsilon-closure of *each* of those reachable states.
            *   The union of all these epsilon-closures is δ'(q, a).

    3.  **Determine the new set of accepting states F':**  A state 'q' in Q' is in F' if ε-closure(q) contains at least one state from the original set of accepting states F. That is:

        *   F' = {q ∈ Q' | ε-closure(q) ∩ F ≠ ∅}

    4.  **The start state remains the same:** q0' = q0.

## 4. Example: Eliminating Epsilon Transitions

Let's consider the following NFA *N*:

*   Q = {q0, q1, q2}
*   Σ = {a, b}
*   δ:

    | State | Input 'a' | Input 'b' | Input 'ε' |
    |-------|-----------|-----------|-----------|
    | q0    | {q0}      | ∅         | {q1}      |
    | q1    | ∅         | {q1, q2}  | {q2}      |
    | q2    | ∅         | ∅         | ∅         |

*   q0 is the start state
*   F = {q2}

**Applying the Algorithm:**

1.  **Epsilon-closures:**

    *   ε-closure(q0) = {q0, q1, q2}
    *   ε-closure(q1) = {q1, q2}
    *   ε-closure(q2) = {q2}

2.  **New Transition Function δ':**

    *   δ'(q0, a) = ε-closure(δ(q0, a) ∪ δ(q1, a) ∪ δ(q2, a)) = ε-closure({q0} ∪ ∅ ∪ ∅) = ε-closure({q0}) = {q0, q1, q2}
    *   δ'(q0, b) = ε-closure(δ(q0, b) ∪ δ(q1, b) ∪ δ(q2, b)) = ε-closure(∅ ∪ {q1, q2} ∪ ∅) = ε-closure({q1, q2}) = {q1, q2}
    *   δ'(q1, a) = ε-closure(δ(q1, a) ∪ δ(q2, a)) = ε-closure(∅ ∪ ∅) = ε-closure(∅) = ∅
    *   δ'(q1, b) = ε-closure(δ(q1, b) ∪ δ(q2, b)) = ε-closure({q1, q2} ∪ ∅) = ε-closure({q1, q2}) = {q1, q2}
    *   δ'(q2, a) = ε-closure(δ(q2, a)) = ε-closure(∅) = ∅
    *   δ'(q2, b) = ε-closure(δ(q2, b)) = ε-closure(∅) = ∅

    So, δ' looks like this:

    | State | Input 'a' | Input 'b' |
    |-------|-----------|-----------|
    | q0    | {q0, q1, q2}| {q1, q2}  |
    | q1    | ∅        | {q1, q2}  |
    | q2    | ∅        | ∅        |

3.  **New Accepting States F':**

    *   Since ε-closure(q0) = {q0, q1, q2} and q2 ∈ F, then q0 ∈ F'
    *   Since ε-closure(q1) = {q1, q2} and q2 ∈ F, then q1 ∈ F'
    *   Since ε-closure(q2) = {q2} and q2 ∈ F, then q2 ∈ F'

    Therefore, F' = {q0, q1, q2}

4.  **Start State:** q0' = q0

The resulting NFA *N'* is:

*   Q' = {q0, q1, q2}
*   Σ = {a, b}
*   δ' (as defined above)
*   q0' = q0
*   F' = {q0, q1, q2}

## 5. Practice Questions and Exercises

**Question 1:**

Consider the following NFA with epsilon transitions:

*   Q = {q0, q1, q2, q3}
*   Σ = {0, 1}
*   δ:

    | State | Input '0' | Input '1' | Input 'ε' |
    |-------|-----------|-----------|-----------|
    | q0    | ∅        | ∅        | {q1, q2}  |
    | q1    | {q3}      | ∅        | ∅         |
    | q2    | ∅         | {q3}      | ∅         |
    | q3    | ∅         | ∅         | ∅         |

*   q0 is the start state
*   F = {q3}

Compute the epsilon-closure of each state.

**Answer:**

*   ε-closure(q0) = {q0, q1, q2}
*   ε-closure(q1) = {q1}
*   ε-closure(q2) = {q2}
*   ε-closure(q3) = {q3}

**Question 2:**

Using the NFA from Question 1, compute δ'(q0, 0).

**Answer:**

δ'(q0, 0) = ε-closure(δ(q0, 0) ∪ δ(q1, 0) ∪ δ(q2, 0)) = ε-closure(∅ ∪ {q3} ∪ ∅) = ε-closure({q3}) = {q3}

**Question 3:**

Using the NFA from Question 1, determine the new accepting states F' after eliminating epsilon transitions.

**Answer:**

*   ε-closure(q0) = {q0, q1, q2}.  Does this contain q3? No. So q0 is not in F'.
*   ε-closure(q1) = {q1}.  Does this contain q3? No. So q1 is not in F'.
*   ε-closure(q2) = {q2}.  Does this contain q3? No. So q2 is not in F'.
*   ε-closure(q3) = {q3}.  Does this contain q3? Yes. So q3 is in F'.

Therefore, F' = {q3}

**Question 4:**

Is the following NFA with epsilon transitions already free of epsilon transitions? Why or why not?

*   Q = {q0, q1}
*   Σ = {a, b}
*   δ:

    | State | Input 'a' | Input 'b' | Input 'ε' |
    |-------|-----------|-----------|-----------|
    | q0    | {q1}      | ∅        | ∅         |
    | q1    | ∅         | {q1}      | ∅         |

*   q0 is the start state
*   F = {q1}

**Answer:**

Yes, this NFA is already free of epsilon transitions because there are no transitions defined for the epsilon symbol (ε) in the transition function δ.  δ(q0, ε) = ∅ and δ(q1, ε) = ∅.

## 6. Important Points to Remember

*   Eliminating epsilon transitions does *not* change the language recognized by the NFA. The resulting NFA accepts the same set of strings.
*   The epsilon-closure is a key concept for understanding how epsilon transitions affect the behavior of the NFA.
*   The algorithm can sometimes lead to an increase in the number of transitions in the NFA.
*   While the proof is not required, understanding *why* the algorithm works (i.e., preserving the language) is helpful.
*   Focus on being able to *apply* the algorithm correctly to convert NFAs with epsilon transitions to equivalent NFAs without them.  Practice is key.
