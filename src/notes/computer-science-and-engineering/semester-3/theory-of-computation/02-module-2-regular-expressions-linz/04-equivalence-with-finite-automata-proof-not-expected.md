---
title: "Equivalence with finite automata (Proof not expected) -"
subject: "THEORY OF COMPUTATION"
module: "Module 2: Regular Expressions (Linz)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8aba7"
status: "completed"
scrapedAt: "2026-05-20T16:29:52.064Z"
---
## THEORY OF COMPUTATION: Module 2 - Regular Expressions (Linz)

**Topic: Equivalence with Finite Automata**

**Learning Outcomes:**

*   Understand the fundamental equivalence between Regular Expressions (REs) and Finite Automata (FAs).
*   Describe how any RE can be converted into an FA and vice versa.
*   Recognize the implications of this equivalence in terms of the languages they represent.
*   Be able to convert Regular expressions to NFA's and DFA's manually.

---

### 1.  Key Concepts and Definitions:

*   **Regular Expression (RE):** A formal notation for describing patterns of strings. REs are built using basic operations such as concatenation, union, and Kleene star.  Formally, a regular expression over an alphabet Σ is defined recursively as:
    *   ε (epsilon): represents the language containing only the empty string.
    *   a, where a ∈ Σ: represents the language containing only the string "a".
    *   (R1 + R2): represents the union of the languages represented by R1 and R2.  (Also often written as R1 | R2)
    *   (R1 R2): represents the concatenation of the languages represented by R1 and R2.
    *   (R1*): represents the Kleene closure (zero or more concatenations) of the language represented by R1.
    *   (R): represents the language represented by R.  Parentheses are used for grouping.
*   **Finite Automaton (FA):** A mathematical model of a machine that accepts or rejects strings of symbols.  There are two main types:
    *   **Deterministic Finite Automaton (DFA):**  A finite automaton where, for each state and input symbol, there is exactly one transition to another state.
        *   Formally, a DFA is a 5-tuple (Q, Σ, δ, q0, F), where:
            *   Q: A finite set of states.
            *   Σ: A finite set of input symbols (the alphabet).
            *   δ: Q x Σ -> Q  (transition function).  δ(q, a) is the state the machine goes to when it's in state q and reads input a.
            *   q0: The initial state (q0 ∈ Q).
            *   F: A set of accepting (final) states (F ⊆ Q).
    *   **Non-deterministic Finite Automaton (NFA):** A finite automaton where, for each state and input symbol, there may be zero, one, or multiple transitions to other states.  Also, NFAs can have ε-transitions (transitions without reading an input symbol).
         *   Formally, an NFA is a 5-tuple (Q, Σ, δ, q0, F), where:
            *   Q: A finite set of states.
            *   Σ: A finite set of input symbols (the alphabet).
            *   δ: Q x Σ∪{ε} -> P(Q) (transition function). δ(q, a) is the *set* of states the machine can go to from state q with input a. P(Q) is the power set of Q (the set of all subsets of Q).
            *   q0: The initial state (q0 ∈ Q).
            *   F: A set of accepting (final) states (F ⊆ Q).
*   **Language of a Regular Expression (L(R)):** The set of all strings that match the pattern defined by the regular expression R.
*   **Language of a Finite Automaton (L(M)):** The set of all strings that, when fed to the FA, lead to an accepting state.
*   **Regular Language:** A language that can be described by a regular expression (or accepted by a finite automaton).

### 2.  Equivalence: Regular Expressions and Finite Automata

*   **Fundamental Theorem:** A language L is regular if and only if there exists a regular expression R such that L = L(R), and there exists a finite automaton M such that L = L(M).  In other words:
    *   Every language described by a regular expression can be accepted by a finite automaton.
    *   Every language accepted by a finite automaton can be described by a regular expression.
*   **Practical Implication:** Regular expressions and finite automata are two different notations for describing the same class of languages (regular languages).  This equivalence is crucial in compiler design, text processing, and pattern matching.
*   **Conversion (RE to FA):**  A regular expression can be converted into an equivalent NFA using a constructive algorithm (Thompson's construction). This is a standard method.  The NFA can then be converted into an equivalent DFA using the subset construction algorithm.
*   **Conversion (FA to RE):** A finite automaton can be converted into an equivalent regular expression using state elimination or algebraic methods.

### 3.  RE to NFA Conversion (Thompson's Construction):

This is a constructive method to build an NFA from a Regular Expression.

*   **Basic Cases:**
    *   **RE = ε (epsilon):**  Create an NFA with two states, q1 and q2, with an ε-transition from q1 to q2.  q1 is the start state, q2 is the accept state.

        ```
        q1 --ε--> q2
        (start)    (accept)
        ```

    *   **RE = a (a ∈ Σ):** Create an NFA with two states, q1 and q2, with a transition on 'a' from q1 to q2. q1 is the start state, q2 is the accept state.

        ```
        q1 --a--> q2
        (start)   (accept)
        ```

*   **Inductive Cases:**  Assume we have NFAs for R1 and R2.

    *   **RE = R1 + R2 (Union):** Create a new start state q0 and a new accept state q_accept.  Add ε-transitions from q0 to the start states of both NFA(R1) and NFA(R2). Add ε-transitions from the accept states of both NFA(R1) and NFA(R2) to q_accept.

    *   **RE = R1 R2 (Concatenation):** Make the accept state of NFA(R1) be the same state as the start state of NFA(R2).  Effectively, link them together.

    *   **RE = R1* (Kleene Star):** Create a new start state q0 and a new accept state q_accept.  Add an ε-transition from q0 to the start state of NFA(R1).  Add an ε-transition from the accept state of NFA(R1) to q_accept.  Add an ε-transition from q0 to q_accept (allowing for zero repetitions).  Add an ε-transition from the accept state of NFA(R1) to the start state of NFA(R1) (allowing for repetitions).
### 4. RE to DFA Conversion

*   **Convert RE to NFA:** Use Thompson's Construction as outlined above.
*   **Convert NFA to DFA (Subset Construction):** This algorithm simulates the NFA in parallel, keeping track of all possible states the NFA could be in after reading each input symbol.
    *   **States of the DFA:** Each state of the DFA represents a *set* of states from the NFA.
    *   **Start State of the DFA:**  The start state of the DFA is the ε-closure of the start state of the NFA (the set of states reachable from the NFA's start state using only ε-transitions, *including* the start state itself).
    *   **Transition Function of the DFA:**  For a DFA state S (which is a set of NFA states) and an input symbol 'a', the transition is to the state representing the ε-closure of the set of states reachable from S by reading 'a' in the NFA.
        1.  `δ_DFA(S, a) = ε-closure(  ∪  δ_NFA(s, a) )`  for all `s` in `S`
    *   **Accepting States of the DFA:** Any DFA state that contains at least one accepting state from the original NFA is an accepting state.

### 5.  Examples:

*   **Example 1: Regular Expression:  `a*b`**

    1.  **RE = `a`**:

        ```
        q1 --a--> q2
        (start)   (accept)
        ```

    2.  **RE = `a*`**: (Kleene Star)

        ```
                  ε
             ------>
            |       |
            V       |
        q0 --ε--> q1 --a--> q2 --ε--> q0
        (start)                (accept)
            |                  ^
            |                  |
             -------------------
                    ε
        ```
        This can be further simplified to only having to new states and an accept state of q4

            ```
                       ε
                 ------>
                |       |
                V       |
             q0 --ε--> q1 --a--> q2 --ε--> q3
              (start)                (accept)
                |                  ^
                |                  |
                 -------------------
                        ε
            ```

    3.  **RE = `b`**:

        ```
        q3 --b--> q4
        (start)   (accept)
        ```

    4.  **RE = `a*b`**: (Concatenation - simplified `a*`)

        ```
                         ε
                  ------>
                 |       |
                 V       |
              q0 --ε--> q1 --a--> q2 --ε--> q3 --b--> q4
               (start)                            (accept)
                 |                  ^
                 |                  |
                  -------------------
                         ε
        ```
*   **Example 2: Regular Expression: `(a+b)*`**
     1.  **RE = `a`**:
                ```
                 q1 --a--> q2
                (start)   (accept)
                ```

     2.  **RE = `b`**:
                ```
                 q3 --b--> q4
                (start)   (accept)
                ```

    3. **RE = `(a+b)`**:
            ```
                           ε
                    ------>
                   |       |
                   V       V
          q0 --ε-->q1 --a-->q2 --ε--> q_accept
          (start)
          q0 --ε-->q3 --b-->q4 --ε--> q_accept
                   ^       ^
                   |       |
                    -------
                         ε
             ```
    4. **RE = `(a+b)*`**:

```
                                   ε
                            -------->
                           |        |
                           V        |
               q_new_start --ε--> q0 -- ε--> q1 --a--> q2 --ε--> q_accept --ε--> q_new_start
               (start)
               q0 -- ε--> q3 --b--> q4 --ε--> q_accept

                 ^                                                   |
                 |                                                   |
                 -----------------------------------------------------
                                       ε

                ```

### 6.  Implications:

*   **Regular Language Properties:** The equivalence highlights the properties of regular languages. Because every regular language can be represented by an RE and an FA, proving a language *not* to be regular can be done by showing that no FA can accept it, or that it cannot be described by an RE.
*   **Compiler Design:**  Regular expressions are used in lexical analysis (scanning), where the input program is broken down into a stream of tokens. The scanner is often implemented using finite automata.
*   **Text Processing:**  REs are extensively used for pattern matching and searching in text editors, command-line utilities (like `grep`), and scripting languages (like Python and Perl).  These utilities internally use FA-based algorithms.

### 7.  Important Points to Remember:

*   The equivalence between REs and FAs is a cornerstone of the theory of computation.
*   Understanding Thompson's construction allows you to systematically build an NFA for any RE.
*   The subset construction allows you to convert an NFA to its equivalent DFA.
*   While proofs of equivalence are not required here, understanding the concepts behind them is critical.

### 8.  Practice Questions/Exercises:

1.  **Convert the following regular expression to an NFA using Thompson's construction: `(a|b)*abb`**

    *   **Answer:** (Construct the NFA step-by-step, showing the NFAs for `a`, `b`, `(a|b)`, `(a|b)*`, `ab`, `abb`, and finally `(a|b)*abb` using the concatenation rule.) While it is difficult to show the diagrams in markdown, the steps for the solution are as follows:
        1.  `a`: Simple NFA with two states and a transition `a`.
        2.  `b`: Simple NFA with two states and a transition `b`.
        3.  `a|b`: NFA with a new start and end state, epsilon transitions from the new start to the start states of `a` and `b`, and epsilon transitions from the end states of `a` and `b` to the new end.
        4.  `(a|b)*`: NFA with a new start and end state, epsilon transitions from new start to old start, old end to new end, new start to new end (for zero occurrences), and from old end back to old start.
        5.  `ab`: Concatenate NFA for `a` and NFA for `b`.
        6.  `abb`: Concatenate NFA for `ab` with NFA for `b`.
        7.  `(a|b)*abb`: Concatenate the NFAs for `(a|b)*` and `abb`.

2.  **Give a regular expression to describe the following language accepted by a DFA (Assume you have a DFA but can describe it as a sentence.): All strings over {0, 1} that contain at least two consecutive 0s.**

    *   **Answer:** `(0|1)*00(0|1)*`

3.  **True or False:  Every NFA can be converted into an equivalent DFA.**

    *   **Answer:** True. The subset construction algorithm provides a method for converting an NFA into an equivalent DFA.
4.  **Convert the Regular Expression `a*b` to a DFA using Thompson's construction, then subset construction.**
    * **Answer:**

        1.  **RE = `a`**:

            ```
            q1 --a--> q2
            (start)   (accept)
            ```

        2.  **RE = `a*`**: (Kleene Star)

            ```
                      ε
                 ------>
                |       |
                V       |
             q0 --ε--> q1 --a--> q2 --ε--> q0
              (start)                (accept)
                |                  ^
                |                  |
                 -------------------
                        ε
            ```
            This can be further simplified to only having to new states and an accept state of q4

                ```
                           ε
                    ------>
                   |       |
                   V       |
                q0 --ε--> q1 --a--> q2 --ε--> q3
                 (start)                (accept)
                   |                  ^
                   |                  |
                    -------------------
                           ε
                ```

        3.  **RE = `b`**:

            ```
            q3 --b--> q4
            (start)   (accept)
            ```

        4.  **RE = `a*b`**: (Concatenation - simplified `a*`)

            ```
                             ε
                      ------>
                     |       |
                     V       |
                  q0 --ε--> q1 --a--> q2 --ε--> q3 --b--> q4
                   (start)                            (accept)
                     |                  ^
                     |                  |
                      -------------------
                             ε
            ```

        5.  **Convert NFA to DFA**

        *  **Start State:** ε-closure(q0) = {q0, q1, q3}
        *  **Transitions:**
            *   δ({q0, q1, q3}, a) = ε-closure(δ(q0, a) ∪ δ(q1, a) ∪ δ(q3, a)) = ε-closure({q1}) = {q1}  (q3 has no outgoing `a` transitions)

            *   δ({q0, q1, q3}, b) = ε-closure(δ(q0, b) ∪ δ(q1, b) ∪ δ(q3, b)) = ε-closure({q4}) = {q4}  (q0 and q1 have no outgoing `b` transitions)

            *   δ({q1}, a) = ε-closure(δ(q1, a)) = ε-closure({q2}) = {q2}

            *   δ({q1}, b) = ∅

            *   δ({q4}, a) = ∅

            *   δ({q4}, b) = ∅

        *  **DFA Transitions:**
            * A = {q0,q1,q3}
            * B = {q1}
            * C = {q4}
            * On `a`, from A, we get B.
            * On `b`, from A, we get C.
            * On `a`, from B, we get {q2}, which would require we start over again. This is a flawed algorithm.

    * **A better way of converting the RE `a*b` to a DFA is:**
      * Let A = start
      * From A, on an `a` we return to A, on a `b` we go to B (accept state)
      * From B, on an `a` or `b`, we return to a trap state C
      * A is the start state, B is the accept state.

5.  **What are the practical implications of the equivalence between regular expressions and finite automata?**

    *   **Answer:** They have applications in compiler design (lexical analysis), text processing (pattern matching, searching), network security (intrusion detection), and hardware design. They provide equivalent ways to define patterns and languages, allowing for flexibility in implementation and optimization.

---
