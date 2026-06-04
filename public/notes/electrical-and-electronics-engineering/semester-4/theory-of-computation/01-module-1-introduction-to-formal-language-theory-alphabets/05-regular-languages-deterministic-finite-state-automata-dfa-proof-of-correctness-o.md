---
title: "Regular Languages - Deterministic Finite State Automata
(DFA) (Proof of correctness of construction not required)"
subject: "THEORY OF COMPUTATION"
module: "Module 1: Introduction to formal language theory– Alphabets"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35f0f"
status: "completed"
scrapedAt: "2026-05-23T16:19:25.396Z"
---
# THEORY OF COMPUTATION

## Module 1: Introduction to Formal Language Theory - Alphabets

### Topic: Regular Languages - Deterministic Finite State Automata (DFA)

**(Proof of correctness of construction not required)**

---

### Learning Outcomes:

*   **Understanding the concept of a Deterministic Finite State Automaton (DFA):** What it is, how it works, and its components.
*   **Recognizing the role of DFAs in recognizing regular languages.**
*   **Being able to construct a DFA for a given regular language.** (While proof of correctness isn't required, understanding the construction process is key).
*   **Understanding the formal definition of a DFA.**
*   **Relating DFAs to the class of Regular Languages.**

---

### Course Outcomes Alignment:

*   **CO1: Classify a given formal language into Regular, Context-Free, Context Sensitive, Recursive or Recursively Enumerable (Knowledge Level: K2)**
    *   This topic contributes to understanding what constitutes a "Regular Language," a fundamental classification.
*   **CO2: Design finite state automata, regular grammar, and regular representations for regular languages. (Knowledge Level: K3)**
    *   This topic directly addresses the design of finite state automata (DFAs) for regular languages.

---

### 1. Introduction to Formal Language Theory and Alphabets

Before diving into DFAs, it's crucial to understand the building blocks of formal languages.

*   **Alphabet ($\Sigma$):**
    *   A finite, non-empty set of symbols.
    *   Examples:
        *   $\Sigma = \{0, 1\}$ (Binary alphabet)
        *   $\Sigma = \{a, b, c\}$
        *   $\Sigma = \{A, B, ..., Z\}$ (English alphabet)
    *   *(Referenced in Kozen, Chapter 1)*

*   **String (or Word):**
    *   A finite sequence of symbols from an alphabet.
    *   The empty string, denoted by $\epsilon$ or $\lambda$, is a string of length 0.
    *   Examples:
        *   If $\Sigma = \{0, 1\}$, then "0110" and "$\epsilon$" are strings.
        *   If $\Sigma = \{a, b\}$, then "aba" and "bb" are strings.
    *   *(Referenced in Kozen, Chapter 1)*

*   **Language ($L$):**
    *   A set of strings over an alphabet $\Sigma$.
    *   A language can be finite or infinite.
    *   Examples:
        *   $L = \{0^n1^n \mid n \ge 0\}$ over $\Sigma = \{0, 1\}$ (Strings with equal numbers of 0s and 1s, where all 0s come before all 1s). This is **not** a regular language.
        *   $L = \{w \in \{0, 1\}^* \mid w \text{ contains at least one } 1\}$ over $\Sigma = \{0, 1\}$. This **is** a regular language.
        *   $L = \Sigma^*$ (The set of all strings over $\Sigma$) is a regular language.
        *   $L = \emptyset$ (The empty set of strings) is a regular language.
    *   *(Referenced in Kozen, Chapter 1)*

---

### 2. Deterministic Finite State Automata (DFA)

A DFA is a mathematical model of computation that recognizes a specific type of language called **regular languages**. It's called "deterministic" because for each state and each input symbol, there is exactly one next state.

#### 2.1 Informal Idea

Imagine a machine with a finite number of states. It reads an input string symbol by symbol, moving from one state to another based on the current state and the input symbol it reads. If, after reading the entire string, the machine ends up in a designated "accepting" state, the string is accepted by the DFA; otherwise, it is rejected.

#### 2.2 Formal Definition of a DFA

A Deterministic Finite Automaton (DFA) is formally defined as a 5-tuple:

$M = (Q, \Sigma, \delta, q_0, F)$

Where:

*   **$Q$**: A finite set of **states**. These represent the different configurations the machine can be in.
    *   *Example:* $Q = \{q_0, q_1, q_2\}$
*   **$\Sigma$**: A finite set of input **symbols** (the alphabet).
    *   *Example:* $\Sigma = \{0, 1\}$
*   **$\delta$**: The **transition function**. This is a function that maps a state and an input symbol to the next state.
    *   $\delta: Q \times \Sigma \rightarrow Q$
    *   For every state $q \in Q$ and every symbol $a \in \Sigma$, $\delta(q, a)$ is a single, unique state in $Q$.
    *   *Example:*
        *   $\delta(q_0, 0) = q_1$
        *   $\delta(q_0, 1) = q_0$
        *   $\delta(q_1, 0) = q_1$
        *   $\delta(q_1, 1) = q_2$
        *   $\delta(q_2, 0) = q_2$
        *   $\delta(q_2, 1) = q_2$
*   **$q_0$**: The **start state** (or initial state). It's a single state in $Q$ where the machine begins processing input.
    *   $q_0 \in Q$
    *   *Example:* $q_0$
*   **$F$**: A set of **accepting states** (or final states). If the DFA ends in one of these states after processing the entire input string, the string is accepted.
    *   $F \subseteq Q$
    *   *Example:* $F = \{q_2\}$

*(Referenced in Kozen, Chapter 2; Hopcroft, Motwani, Ullman, Chapter 2; Sipser, Chapter 1)*

#### 2.3 How a DFA Works (Acceptance of a String)

Given a DFA $M = (Q, \Sigma, \delta, q_0, F)$ and an input string $w = w_1w_2...w_n$ where $w_i \in \Sigma$:

1.  The DFA starts in the initial state $q_0$.
2.  For each symbol $w_i$ in the string (from left to right, $i=1, \dots, n$):
    *   The DFA transitions from its current state $q$ to the next state $\delta(q, w_i)$.
3.  After processing the last symbol $w_n$, if the DFA is in a state $q_{final} \in F$, the string $w$ is **accepted** by the DFA.
4.  If the DFA is in a state $q_{final} \notin F$ after processing the entire string, the string $w$ is **rejected**.

We can extend the transition function $\delta$ to work on strings. Let $\delta^*$ be the extended transition function:

$\delta^* : Q \times \Sigma^* \rightarrow Q$

*   **Base Case:** $\delta^*(q, \epsilon) = q$ (If no input is read, the state doesn't change).
*   **Recursive Step:** $\delta^*(q, xa) = \delta(\delta^*(q, x), a)$ for any state $q \in Q$, string $x \in \Sigma^*$, and symbol $a \in \Sigma$.

A string $w$ is accepted by DFA $M$ if and only if $\delta^*(q_0, w) \in F$.

The **language recognized by a DFA $M$**, denoted by $L(M)$, is the set of all strings accepted by $M$:

$L(M) = \{w \in \Sigma^* \mid \delta^*(q_0, w) \in F\}$

*(Referenced in Kozen, Chapter 2; Hopcroft, Motwani, Ullman, Chapter 2; Sipser, Chapter 1)*

#### 2.4 Representing a DFA

There are two common ways to represent a DFA:

1.  **State Transition Table:**
    *   A table where rows represent states, columns represent input symbols, and entries represent the next state. The start state is indicated, and accepting states are marked (e.g., with an asterisk).

2.  **State Transition Diagram:**
    *   A directed graph where:
        *   **Nodes (vertices)** represent the states.
        *   **Edges** represent transitions. An edge from state $q_1$ to state $q_2$ labeled with symbol $a$ means $\delta(q_1, a) = q_2$.
        *   The **start state** is indicated by an incoming arrow from nowhere.
        *   **Accepting states** are indicated by a double circle.

#### 2.5 Examples of DFA Construction

Let's design DFAs for some simple regular languages.

**Example 1: Language $L = \{w \in \{0, 1\}^* \mid w \text{ ends with } 0\}$**

*   Alphabet: $\Sigma = \{0, 1\}$
*   What do we need to "remember"? We only care about the last symbol.
*   States:
    *   $q_0$: The state where the last symbol read was not 0 (or we haven't read anything yet).
    *   $q_1$: The state where the last symbol read was 0.
*   Start State: $q_0$ (initially, we haven't read anything).
*   Accepting State(s): $F = \{q_1\}$ (we want to accept if the string ends with 0).

*   Transition Function $\delta$:
    *   $\delta(q_0, 0) = q_1$ (If we are in $q_0$ and read a 0, the last symbol is now 0, so go to $q_1$)
    *   $\delta(q_0, 1) = q_0$ (If we are in $q_0$ and read a 1, the last symbol is still not 0, stay in $q_0$)
    *   $\delta(q_1, 0) = q_1$ (If we are in $q_1$ and read a 0, the last symbol is still 0, stay in $q_1$)
    *   $\delta(q_1, 1) = q_0$ (If we are in $q_1$ and read a 1, the last symbol is now 1, so go to $q_0$)

*   **DFA Definition:**
    $M = (Q, \Sigma, \delta, q_0, F)$
    $Q = \{q_0, q_1\}$
    $\Sigma = \{0, 1\}$
    $\delta = \{ (q_0, 0) \rightarrow q_1, (q_0, 1) \rightarrow q_0, (q_1, 0) \rightarrow q_1, (q_1, 1) \rightarrow q_0 \}$
    $q_0 = q_0$
    $F = \{q_1\}$

*   **State Transition Diagram:**

    ```mermaid
    graph LR
        start(( )) --> q0;
        q0 -- 1 --> q0;
        q0 -- 0 --> q1;
        q1 -- 1 --> q0;
        q1 -- 0 --> q1;
        q1((q1));
    ```

    *(Interpretation: `q0` is not double-circled, so it's not accepting. `q1` is double-circled, so it's accepting.)*

**Example 2: Language $L = \{w \in \{a, b\}^* \mid w \text{ contains the substring } aba \}$**

*   Alphabet: $\Sigma = \{a, b\}$
*   What do we need to "remember"? We need to track how much of the target substring "aba" we've seen so far at the end of the input.
*   States:
    *   $q_0$: Haven't seen any prefix of "aba" at the end.
    *   $q_1$: The suffix matches "a".
    *   $q_2$: The suffix matches "ab".
    *   $q_3$: The suffix matches "aba" (accepting state).
*   Start State: $q_0$
*   Accepting State(s): $F = \{q_3\}$

*   Transition Function $\delta$:
    *   From $q_0$ (Initial state, or last symbol was not part of "aba" prefix):
        *   If we read 'a': Suffix is "a" -> $q_1$. $\delta(q_0, a) = q_1$.
        *   If we read 'b': Suffix is "b", no prefix of "aba". -> $q_0$. $\delta(q_0, b) = q_0$.
    *   From $q_1$ (Suffix is "a"):
        *   If we read 'a': Suffix is "aa". The longest prefix of "aba" that is a suffix of "aa" is "a". -> $q_1$. $\delta(q_1, a) = q_1$.
        *   If we read 'b': Suffix is "ab". This is a prefix of "aba". -> $q_2$. $\delta(q_1, b) = q_2$.
    *   From $q_2$ (Suffix is "ab"):
        *   If we read 'a': Suffix is "aba". This is the target. -> $q_3$. $\delta(q_2, a) = q_3$.
        *   If we read 'b': Suffix is "abb". No prefix of "aba". -> $q_0$. $\delta(q_2, b) = q_0$.
    *   From $q_3$ (Suffix is "aba"):
        *   If we read 'a': Suffix is "abaa". The longest prefix of "aba" that is a suffix of "abaa" is "a". -> $q_1$. $\delta(q_3, a) = q_1$.
        *   If we read 'b': Suffix is "abab". The longest prefix of "aba" that is a suffix of "abab" is "ab". -> $q_2$. $\delta(q_3, b) = q_2$.

*   **DFA Definition:**
    $Q = \{q_0, q_1, q_2, q_3\}$
    $\Sigma = \{a, b\}$
    $\delta = \{ (q_0, a) \rightarrow q_1, (q_0, b) \rightarrow q_0,$
             $(q_1, a) \rightarrow q_1, (q_1, b) \rightarrow q_2,$
             $(q_2, a) \rightarrow q_3, (q_2, b) \rightarrow q_0,$
             $(q_3, a) \rightarrow q_1, (q_3, b) \rightarrow q_2 \}$
    $q_0 = q_0$
    $F = \{q_3\}$

*   **State Transition Diagram:**

    ```mermaid
    graph LR
        start(( )) --> q0;
        q0 -- a --> q1;
        q0 -- b --> q0;
        q1 -- a --> q1;
        q1 -- b --> q2;
        q2 -- a --> q3;
        q2 -- b --> q0;
        q3 -- a --> q1;
        q3 -- b --> q2;
        q3((q3));
    ```

**Example 3: Language $L = \{w \in \{0, 1\}^* \mid \text{the number of } 1\text{'s is even}\}$**

*   Alphabet: $\Sigma = \{0, 1\}$
*   What do we need to remember? The parity (even/odd) of the number of 1s seen so far.
*   States:
    *   $q_{even}$: We have seen an even number of 1s. (Accepting state)
    *   $q_{odd}$: We have seen an odd number of 1s.
*   Start State: $q_{even}$ (initially, 0 ones, which is even).
*   Accepting State(s): $F = \{q_{even}\}$

*   Transition Function $\delta$:
    *   From $q_{even}$:
        *   Read '0': Number of 1s remains even. -> $q_{even}$. $\delta(q_{even}, 0) = q_{even}$.
        *   Read '1': Number of 1s becomes odd. -> $q_{odd}$. $\delta(q_{even}, 1) = q_{odd}$.
    *   From $q_{odd}$:
        *   Read '0': Number of 1s remains odd. -> $q_{odd}$. $\delta(q_{odd}, 0) = q_{odd}$.
        *   Read '1': Number of 1s becomes even. -> $q_{even}$. $\delta(q_{odd}, 1) = q_{even}$.

*   **DFA Definition:**
    $Q = \{q_{even}, q_{odd}\}$
    $\Sigma = \{0, 1\}$
    $\delta = \{ (q_{even}, 0) \rightarrow q_{even}, (q_{even}, 1) \rightarrow q_{odd},$
             $(q_{odd}, 0) \rightarrow q_{odd}, (q_{odd}, 1) \rightarrow q_{even} \}$
    $q_0 = q_{even}$
    $F = \{q_{even}\}$

*   **State Transition Diagram:**

    ```mermaid
    graph LR
        start(( )) --> q_even;
        q_even -- 0 --> q_even;
        q_even -- 1 --> q_odd;
        q_odd -- 0 --> q_odd;
        q_odd -- 1 --> q_even;
        q_even((q_even));
    ```

#### 2.6 The Class of Regular Languages

A language is called **regular** if and only if it is recognized by some Deterministic Finite Automaton.

*   $L$ is regular $\iff \exists$ a DFA $M$ such that $L = L(M)$.

This is a fundamental theorem in automata theory. DFAs are the machines that precisely define the class of regular languages.

*(Referenced in Kozen, Chapter 2; Hopcroft, Motwani, Ullman, Chapter 2; Sipser, Chapter 1)*

---

### 3. Properties of DFAs

*   **Determinism:** For every state and every input symbol, there is exactly one next state. This is crucial.
*   **Finite Memory:** DFAs have a finite number of states, meaning they can only "remember" a finite amount of information about the input seen so far. This limits the types of languages they can recognize.
*   **One Pass:** DFAs process the input string exactly once, from left to right.
*   **No Backtracking:** Once a symbol is read and a transition is made, the DFA cannot go back to a previous state or re-read symbols.

---

### 4. Practice Questions

1.  **Construct a DFA for the language $L = \{w \in \{a, b\}^* \mid w \text{ starts with } a \text{ and ends with } b\}$.**
    *   Alphabet: $\Sigma = \{a, b\}$
    *   Required properties: First symbol is 'a', last symbol is 'b'.

2.  **Construct a DFA for the language $L = \{w \in \{0, 1\}^* \mid w \text{ has an even number of } 0\text{'s}\}$.**
    *   Alphabet: $\Sigma = \{0, 1\}$
    *   Required properties: Count of '0's is even.

3.  **Trace the execution of the DFA from Example 2 (substring "aba") on the input string "bababa".**
    *   DFA states: $q_0, q_1, q_2, q_3$. Start: $q_0$. Accepting: $q_3$.
    *   Input: b a b a b a

4.  **Consider a DFA $M = (Q, \Sigma, \delta, q_0, F)$ where:**
    *   $Q = \{s_0, s_1, s_2\}$
    *   $\Sigma = \{a, b\}$
    *   $\delta = \{ (s_0, a) \rightarrow s_1, (s_0, b) \rightarrow s_0,$
             $(s_1, a) \rightarrow s_1, (s_1, b) \rightarrow s_2,$
             $(s_2, a) \rightarrow s_2, (s_2, b) \rightarrow s_2 \}$
    *   $q_0 = s_0$
    *   $F = \{s_1\}$
    *   **What language does this DFA accept?**

---

### 5. Answers to Practice Questions

1.  **DFA for $L = \{w \in \{a, b\}^* \mid w \text{ starts with } a \text{ and ends with } b\}$**
    *   States:
        *   $q_0$: Initial state (haven't seen 'a' or incorrect start).
        *   $q_1$: Saw 'a' as the first symbol, and the last symbol was NOT 'b'.
        *   $q_2$: Saw 'a' as the first symbol, and the last symbol WAS 'b'.
    *   Start State: $q_0$
    *   Accepting State(s): $F = \{q_2\}$
    *   Transitions:
        *   From $q_0$:
            *   Read 'a': If it's the first symbol, we are good. If not, we failed. But we can think of $q_0$ as "haven't started correctly yet, or last symbol was 'b' and we need to restart to find 'a'".
            *   Let's refine states:
                *   $q_{start}$: Haven't seen 'a' yet, or last symbol was 'b' and we need to start again.
                *   $q_{a}$: Last symbol was 'a', and it was the first symbol.
                *   $q_{ab}$: Last symbol was 'b', and it was preceded by 'a' (or chain of 'a's).
                *   $q_{fail}$: Started with 'b', or any other failure.
            *   This can get complicated. A simpler approach:
                *   $q_0$: Haven't started with 'a', or current suffix doesn't help.
                *   $q_1$: Current suffix is 'a' (and started with 'a').
                *   $q_2$: Current suffix is 'b' (and started with 'a'). This is the accepting state.
                *   $q_3$: Started with 'b'. (Sink state)
    *   Let's use the simpler states:
        *   $q_0$: Initial state; haven't seen 'a' yet, or last symbol was 'b' but we need to ensure the first was 'a'.
        *   $q_1$: Last symbol was 'a', and we started with 'a'.
        *   $q_2$: Last symbol was 'b', and we started with 'a'. (Accepting state)
        *   $q_{start\_fail}$: Started with 'b'. (Sink state)

    *   **Corrected DFA:**
        *   $Q = \{q_0, q_1, q_2, q_{start\_fail}\}$
        *   $\Sigma = \{a, b\}$
        *   $q_0$: Haven't seen 'a' yet.
        *   $q_1$: Saw 'a' as first symbol, last symbol was 'a'.
        *   $q_2$: Saw 'a' as first symbol, last symbol was 'b'. (Accepting state)
        *   $q_{start\_fail}$: Started with 'b'. (Sink state)

        *   $\delta(q_0, a) = q_1$ (Start with 'a')
        *   $\delta(q_0, b) = q_{start\_fail}$ (Start with 'b')
        *   $\delta(q_1, a) = q_1$ (Seen 'a', then 'a')
        *   $\delta(q_1, b) = q_2$ (Seen 'a', then 'b')
        *   $\delta(q_2, a) = q_1$ (Seen 'a', then 'b', then 'a')
        *   $\delta(q_2, b) = q_2$ (Seen 'a', then 'b', then 'b')
        *   $\delta(q_{start\_fail}, a) = q_{start\_fail}$ (Sink state)
        *   $\delta(q_{start\_fail}, b) = q_{start\_fail}$ (Sink state)

        *   $q_0 = q_0$
        *   $F = \{q_2\}$

    *   **State Transition Diagram:**

        ```mermaid
        graph LR
            start(( )) --> q0;
            q0 -- a --> q1;
            q0 -- b --> q_start_fail;
            q1 -- a --> q1;
            q1 -- b --> q2;
            q2 -- a --> q1;
            q2 -- b --> q2;
            q_start_fail -- a --> q_start_fail;
            q_start_fail -- b --> q_start_fail;
            q2((q2));
        ```

2.  **DFA for $L = \{w \in \{0, 1\}^* \mid w \text{ has an even number of } 0\text{'s}\}$**
    *   This is identical to Example 3, just with symbols 0 and 1 swapped roles.
    *   States: $q_{even0}$, $q_{odd0}$
    *   Start State: $q_{even0}$
    *   Accepting State(s): $F = \{q_{even0}\}$
    *   Transitions:
        *   $\delta(q_{even0}, 0) = q_{odd0}$
        *   $\delta(q_{even0}, 1) = q_{even0}$
        *   $\delta(q_{odd0}, 0) = q_{even0}$
        *   $\delta(q_{odd0}, 1) = q_{odd0}$

    *   **State Transition Diagram:**

        ```mermaid
        graph LR
            start(( )) --> q_even0;
            q_even0 -- 0 --> q_odd0;
            q_even0 -- 1 --> q_even0;
            q_odd0 -- 0 --> q_even0;
            q_odd0 -- 1 --> q_odd0;
            q_even0((q_even0));
        ```

3.  **Trace "bababa" on the DFA for "aba" substring:**
    *   DFA: $Q = \{q_0, q_1, q_2, q_3\}$, $\Sigma = \{a, b\}$, $q_0=q_0$, $F = \{q_3\}$.
    *   Transitions: $\delta(q_0,a)=q_1, \delta(q_0,b)=q_0$, $\delta(q_1,a)=q_1, \delta(q_1,b)=q_2$, $\delta(q_2,a)=q_3, \delta(q_2,b)=q_0$, $\delta(q_3,a)=q_1, \delta(q_3,b)=q_2$.

    *   Start state: $q_0$
    *   Input: `b` -> $\delta(q_0, b) = q_0$. Current state: $q_0$.
    *   Input: `a` -> $\delta(q_0, a) = q_1$. Current state: $q_1$.
    *   Input: `b` -> $\delta(q_1, b) = q_2$. Current state: $q_2$.
    *   Input: `a` -> $\delta(q_2, a) = q_3$. Current state: $q_3$.
    *   Input: `b` -> $\delta(q_3, b) = q_2$. Current state: $q_2$.
    *   Input: `a` -> $\delta(q_2, a) = q_3$. Current state: $q_3$.

    *   End of input. Final state is $q_3$.
    *   Since $q_3 \in F$, the string "bababa" is **accepted**.

4.  **Language accepted by the given DFA:**
    *   $Q = \{s_0, s_1, s_2\}$, $\Sigma = \{a, b\}$, $q_0 = s_0$, $F = \{s_1\}$.
    *   $\delta(s_0, a) = s_1$
    *   $\delta(s_0, b) = s_0$
    *   $\delta(s_1, a) = s_1$
    *   $\delta(s_1, b) = s_2$
    *   $\delta(s_2, a) = s_2$
    *   $\delta(s_2, b) = s_2$

    *   Let's analyze states:
        *   $s_0$: Initial state. Anything starting with 'b' stays here. If 'a' is read, goes to $s_1$.
        *   $s_1$: Accepting state. Reached by starting with 'a'. If 'a' is read again, stays here. If 'b' is read, goes to $s_2$.
        *   $s_2$: Sink state. Once 'b' is read after 'a' (or after an 'a' followed by 'b'), any further input keeps it here, and it's not accepting.

    *   The DFA starts in $s_0$. To reach the accepting state $s_1$, the first input symbol MUST be 'a'. Once in $s_1$, if we read 'a', we stay in $s_1$. If we read 'b', we go to $s_2$. From $s_2$, we can never reach $s_1$ again.
    *   Therefore, to be accepted, the string must start with 'a' and must NOT contain the substring "ab" followed by any characters, because if "ab" occurs, it transitions to $s_2$ and cannot get back to $s_1$.
    *   This means the string must start with 'a' and must *not* have 'b' after the first 'a', unless it immediately transitions back to an accepting state.
    *   The only way to stay in $s_1$ (accepting) is to read 'a's.
    *   The DFA accepts strings that start with 'a' and are followed only by 'a's. Or more precisely, it accepts strings that reach $s_1$ and stay there. The transition to $s_2$ makes it reject.
    *   Let's trace:
        *   "a": $s_0 \xrightarrow{a} s_1$. $s_1 \in F$. ACCEPT.
        *   "aa": $s_0 \xrightarrow{a} s_1 \xrightarrow{a} s_1$. $s_1 \in F$. ACCEPT.
        *   "aaa": $s_0 \xrightarrow{a} s_1 \xrightarrow{a} s_1 \xrightarrow{a} s_1$. $s_1 \in F$. ACCEPT.
        *   "b": $s_0 \xrightarrow{b} s_0$. $s_0 \notin F$. REJECT.
        *   "ab": $s_0 \xrightarrow{a} s_1 \xrightarrow{b} s_2$. $s_2 \notin F$. REJECT.
        *   "aba": $s_0 \xrightarrow{a} s_1 \xrightarrow{b} s_2 \xrightarrow{a} s_2$. $s_2 \notin F$. REJECT.
        *   "aab": $s_0 \xrightarrow{a} s_1 \xrightarrow{a} s_1 \xrightarrow{b} s_2$. $s_2 \notin F$. REJECT.

    *   The language accepted is $\{a^n \mid n \ge 1\}$.
    *   **Answer: $L(M) = \{a^n \mid n \ge 1\}$.**

---

### 6. Important Points to Remember

*   **DFAs are precisely for Regular Languages.** If a language can be recognized by a DFA, it's regular.
*   **Determinism is key:** For every state and input symbol, there's *exactly one* next state.
*   **Finite states = finite memory.** This limits what DFAs can do. They can't count arbitrarily high or remember long sequences without repetition.
*   **Transition Function ($\delta$):** The heart of the DFA. It dictates the behavior.
*   **Start State ($q_0$):** Where every computation begins.
*   **Accepting States ($F$):** The states that signal successful recognition of a string.
*   **State Transition Diagrams:** A visual and intuitive way to understand DFAs.
*   **The "trick" in DFA construction:** Identifying the essential pieces of information that need to be "remembered" by the states.

---
