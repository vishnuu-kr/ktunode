---
title: "Deterministic Finite Automata (DFA)"
subject: "THEORY OF COMPUTATION"
module: "Module 1: Foundations (Linz, Hopcroft)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ab9a"
status: "completed"
scrapedAt: "2026-05-20T16:29:43.465Z"
---
# THEORY OF COMPUTATION - MODULE 1: FOUNDATIONS - Deterministic Finite Automata (DFA)

## Introduction

This module explores Deterministic Finite Automata (DFA), a fundamental concept in the theory of computation. DFAs are a simple yet powerful model of computation used for recognizing regular languages. We will cover the formal definition, representation, processing, and applications of DFAs.

## Learning Outcomes

By the end of this module, you will be able to:

*   Define a Deterministic Finite Automaton (DFA) formally.
*   Represent DFAs using state diagrams and transition tables.
*   Trace the processing of a string by a DFA.
*   Determine the language accepted by a given DFA.
*   Design a DFA to accept a specific language.
*   Understand the limitations of DFAs.

## Key Concepts and Definitions

*   **Alphabet (Σ):** A finite, non-empty set of symbols. Example: Σ = {0, 1}, Σ = {a, b, c}.

*   **String:** A finite sequence of symbols chosen from an alphabet. Example: "0110", "aba".

*   **Language:** A set of strings formed from symbols of a specific alphabet. Example: All strings containing "11".

*   **Deterministic Finite Automaton (DFA):** A mathematical model of a machine that accepts or rejects strings of symbols. A DFA is defined by a 5-tuple:

    *   **Q:** A finite set of states.
    *   **Σ:** A finite alphabet of input symbols.
    *   **δ:** A transition function, δ: Q x Σ -> Q. It takes a state and an input symbol and returns the next state.
    *   **q₀:** The start state, q₀ ∈ Q.
    *   **F:** A set of accepting (or final) states, F ⊆ Q.

## Formal Definition of a DFA

A DFA is formally defined as a 5-tuple M = (Q, Σ, δ, q₀, F), where:

*   **Q** is a finite set of states.
*   **Σ** is a finite alphabet.
*   **δ: Q x Σ -> Q** is the transition function.  For each state in Q and each symbol in Σ, δ specifies exactly one next state. This is the "deterministic" part.
*   **q₀ ∈ Q** is the start state.
*   **F ⊆ Q** is the set of accepting states.

## Representation of DFAs

DFAs can be represented using two primary methods:

*   **State Diagrams:**  A visual representation of the DFA.
    *   States are represented as circles (or nodes).
    *   The start state is indicated by an incoming arrow.
    *   Accepting states are indicated by double circles.
    *   Transitions are represented by directed edges labeled with the input symbol.

*   **Transition Tables:** A tabular representation of the transition function.
    *   Rows represent the current state.
    *   Columns represent the input symbol.
    *   The cell at (state, symbol) contains the next state, as defined by the transition function δ.
    *   The start state is often marked with an arrow.
    *   Accepting states are often marked with an asterisk (*).

**Example:**

Let's consider a DFA that accepts all strings over the alphabet {0, 1} that contain an even number of 1s.

*   **Q = {q₀, q₁}**  (q₀ represents "even number of 1s seen", q₁ represents "odd number of 1s seen")
*   **Σ = {0, 1}**
*   **δ:** Defined as follows:
    *   δ(q₀, 0) = q₀
    *   δ(q₀, 1) = q₁
    *   δ(q₁, 0) = q₁
    *   δ(q₁, 1) = q₀
*   **q₀ = q₀**  (The start state is q₀)
*   **F = {q₀}**  (Only the state representing an even number of 1s is accepting)

**State Diagram:**

```
    0       0
q₀ ----> q₀
 |  <---- | 1
 1       1
q₁ ----> q₁
```

(q₀ is the start state and accepting state – double circle)

**Transition Table:**

| State | 0   | 1   |
|-------|-----|-----|
| ->q₀* | q₀  | q₁  |
| q₁    | q₁  | q₀  |

(-> denotes the start state, * denotes the accepting state)

## Processing a String by a DFA

To process a string, the DFA starts in the start state (q₀).  It reads the input string symbol by symbol from left to right.  For each symbol, the DFA transitions to the next state as defined by the transition function δ.

*   **Acceptance:** If, after processing the entire string, the DFA ends in an accepting state (a state in F), then the string is *accepted* by the DFA.

*   **Rejection:** If, after processing the entire string, the DFA ends in a non-accepting state (a state not in F), then the string is *rejected* by the DFA.

**Example:**

Let's use the DFA from the previous example (even number of 1s) to process the string "101010".

1.  Start in state q₀.
2.  Read '1': δ(q₀, 1) = q₁
3.  Read '0': δ(q₁, 0) = q₁
4.  Read '1': δ(q₁, 1) = q₀
5.  Read '0': δ(q₀, 0) = q₀
6.  Read '1': δ(q₀, 1) = q₁
7.  Read '0': δ(q₁, 0) = q₁

The DFA ends in state q₁. Since q₁ is not an accepting state, the string "101010" is *rejected* by the DFA.

Now let's process "1100".

1.  Start in state q₀.
2.  Read '1': δ(q₀, 1) = q₁
3.  Read '1': δ(q₁, 1) = q₀
4.  Read '0': δ(q₀, 0) = q₀
5.  Read '0': δ(q₀, 0) = q₀

The DFA ends in state q₀. Since q₀ is an accepting state, the string "1100" is *accepted* by the DFA.

## Language Accepted by a DFA

The language accepted by a DFA (denoted L(M), where M is the DFA) is the set of all strings that are accepted by the DFA.  In other words:

L(M) = {w | w ∈ Σ* and δ*(q₀, w) ∈ F}

Here, δ* is the extended transition function, which maps a state and a string to a state.  It can be defined recursively:

*   δ*(q, ε) = q (ε is the empty string)
*   δ*(q, wa) = δ(δ*(q, w), a) (where w is a string and a is a symbol)

**Example:**

The language accepted by the DFA in our previous example is the set of all strings over {0, 1} that contain an even number of 1s.  We can represent this language as:

L = {w ∈ {0, 1}* | w contains an even number of 1s}

## Designing DFAs

Designing a DFA involves determining the states, alphabet, transition function, start state, and accepting states that satisfy the requirements of the language you want to accept. Here are some helpful tips:

1.  **Understand the language:**  Clearly define the language you want the DFA to accept.  Consider examples of strings that *should* be accepted and strings that *should* be rejected.

2.  **Identify necessary states:**  Think about what information the DFA needs to remember as it processes the input string.  Each piece of information corresponds to a state.  For example, in the "even number of 1s" DFA, we needed to remember whether we had seen an even or odd number of 1s.

3.  **Define the transitions:**  For each state and each input symbol, determine the next state.  Ensure that the transition function is deterministic (i.e., there is exactly one transition for each state-symbol pair).

4.  **Identify the start state:**  This is the state the DFA begins in before reading any input.

5.  **Identify the accepting states:**  These are the states that indicate that the string should be accepted.  The DFA accepts a string if and only if it ends in an accepting state after processing the entire string.

**Example: Design a DFA to accept all strings over the alphabet {a, b} that start with 'a'.**

1.  **Language:** L = {w ∈ {a, b}* | w starts with 'a'}

2.  **States:** We need two states:
    *   q₀: Start state.  Represents that we haven't seen any input yet.
    *   q₁:  Represents that we have seen an 'a' at the beginning.
    *   q₂: Represents the string doesn't start with 'a'.

3.  **Transitions:**
    *   δ(q₀, a) = q₁
    *   δ(q₀, b) = q₂
    *   δ(q₁, a) = q₁
    *   δ(q₁, b) = q₁
    *   δ(q₂, a) = q₂
    *   δ(q₂, b) = q₂

4.  **Start State:** q₀

5.  **Accepting States:** q₁  (since we want to accept any string that *starts* with 'a', regardless of what comes after).

**State Diagram:**

```
    a       a, b
q₀ ----> q₁
 |        ^
 b       |
 |        |
 v        |
q₂ <-------
     a, b
```

(q₀ is the start state, q₁ is the accepting state)

**Transition Table:**

| State | a   | b   |
|-------|-----|-----|
| ->q₀  | q₁  | q₂  |
| q₁*    | q₁  | q₁  |
| q₂    | q₂  | q₂  |

## Limitations of DFAs

DFAs have limitations.  They can only recognize *regular languages*.  Some languages are *not regular* and cannot be recognized by any DFA.  Examples of languages that are not regular include:

*   L = {aⁿbⁿ | n ≥ 0} (strings with an equal number of 'a's and 'b's in that order)
*   L = {ww | w ∈ {a, b}*} (strings that are a repetition of some other string)

The Pumping Lemma for regular languages is a tool used to prove that a language is *not* regular.

## Important Points to Remember

*   A DFA *must* have a transition defined for every state-symbol pair.  This ensures that the DFA always knows what to do next.
*   A DFA is deterministic because for each state and input symbol, there is only *one* possible next state.
*   DFAs are used in various applications, including:
    *   Lexical analysis in compilers
    *   Pattern matching
    *   Network protocol analysis

## Practice Questions/Exercises

**1. Design a DFA to accept all strings over the alphabet {0, 1} that end with "11".**

**Answer:**

*   **Q = {q₀, q₁, q₂}** (q₀: haven't seen "11" yet, q₁: seen "1", q₂: seen "11")
*   **Σ = {0, 1}**
*   **δ:**
    *   δ(q₀, 0) = q₀
    *   δ(q₀, 1) = q₁
    *   δ(q₁, 0) = q₀
    *   δ(q₁, 1) = q₂
    *   δ(q₂, 0) = q₀
    *   δ(q₂, 1) = q₂
*   **q₀ = q₀**
*   **F = {q₂}**

**State Diagram:**

```
        0
    q₀ ----> q₀
     |        ^
  1  |        | 1
     v        |
    q₁ ----> q₂ *
     ^        |
     | 0      | 0
     ---------
```

**Transition Table:**

| State | 0   | 1   |
|-------|-----|-----|
| ->q₀  | q₀  | q₁  |
| q₁    | q₀  | q₂  |
| q₂*   | q₀  | q₂  |

**2. What language does the following DFA accept?**

**State Diagram:**

```
     a
q₀ ----> q₁ *
     ^
     | b
     |
     ------
```
(q₀ is the start state, q₁ is the accepting state)

**Answer:**

The DFA accepts all strings over the alphabet {a, b} that contain at least one 'a'.  The DFA starts in state q₀.  Upon seeing an 'a', it transitions to the accepting state q₁, and it remains in that state regardless of further input.  If it never sees an 'a', it remains in the non-accepting state q₀.

**3.  Is the language L = {0ⁿ1ⁿ | n ≥ 0} regular? Briefly explain.**

**Answer:**

No, the language L = {0ⁿ1ⁿ | n ≥ 0} is not regular. A DFA cannot "remember" how many 0s it has seen to later verify that the number of 1s matches.  This requires infinite memory, which a DFA doesn't have. The Pumping Lemma can be used to formally prove this.

**4.  Convert the following state diagram to a transition table:**

**State Diagram:**

```
     0       1
q₀ ----> q₁ ----> q₂ *
     ^       ^
     | 1     | 0
     ------- -------
```

(q₀ is the start state, q₂ is the accepting state)

**Answer:**

| State | 0   | 1   |
|-------|-----|-----|
| ->q₀  | q₁  | q₀  |
| q₁    | q₁  | q₂  |
| q₂*   | q₂  | q₂  |

This concludes the study notes on Deterministic Finite Automata.  Remember to practice designing DFAs for various languages to solidify your understanding. Good luck!
