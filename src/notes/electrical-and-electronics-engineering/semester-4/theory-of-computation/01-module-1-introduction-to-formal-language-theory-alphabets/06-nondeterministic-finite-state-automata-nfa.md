---
title: "Nondeterministic Finite State Automata (NFA)"
subject: "THEORY OF COMPUTATION"
module: "Module 1: Introduction to formal language theory– Alphabets"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35f10"
status: "completed"
scrapedAt: "2026-05-23T16:19:26.172Z"
---
# Theory of Computation - Module 1: Introduction to Formal Language Theory – Alphabets

## Topic: Nondeterministic Finite State Automata (NFA)

**Learning Outcomes:**

*   Understand the definition and formal representation of Nondeterministic Finite State Automata (NFA).
*   Grasp the concept of computation in an NFA, including the possibility of multiple paths.
*   Understand the equivalence between NFAs and Deterministic Finite State Automata (DFAs).
*   Be able to construct NFAs for various regular languages.
*   Convert NFAs to equivalent DFAs.

---

### 1. Introduction to Automata and Languages

Before diving into NFAs, it's crucial to understand the foundational concepts of formal languages and automata.

*   **Alphabet ($\Sigma$):** A finite, nonempty set of symbols.
    *   *Example:* $\Sigma = \{a, b\}$, $\Sigma = \{0, 1\}$
*   **String:** A finite sequence of symbols from an alphabet.
    *   *Example:* If $\Sigma = \{a, b\}$, then $a, ab, baa, \epsilon$ are strings.
    *   **Empty String ($\epsilon$):** The string with zero symbols.
*   **Language (L):** A set of strings over a given alphabet $\Sigma$.
    *   *Example:* If $\Sigma = \{a, b\}$, then $L = \{a, aa, aaa, ...\}$ (language of strings with one or more 'a's) is a language.
*   **Automaton:** A mathematical model of computation that recognizes or generates formal languages.

---

### 2. Deterministic Finite State Automata (DFA) - A Quick Recap

NFAs are a generalization of DFAs. Understanding DFAs is essential for understanding NFAs.

*   **Definition:** A DFA is a 5-tuple $(Q, \Sigma, \delta, q_0, F)$ where:
    *   $Q$: A finite set of states.
    *   $\Sigma$: A finite input alphabet.
    *   $\delta$: The transition function, $\delta: Q \times \Sigma \to Q$. For each state and input symbol, there is exactly one next state.
    *   $q_0 \in Q$: The start state.
    *   $F \subseteq Q$: A set of accept (or final) states.

*   **How a DFA Computes:**
    1.  Starts in the initial state $q_0$.
    2.  Reads the input string one symbol at a time.
    3.  For each symbol, transitions to a unique next state based on the transition function $\delta$.
    4.  If the DFA is in the last state after reading the entire string, and that state is an accept state, the string is accepted. Otherwise, it's rejected.

---

### 3. Nondeterministic Finite State Automata (NFA)

NFAs relax the strict determinism of DFAs, allowing for multiple possible transitions for a given state and input symbol, and even transitions without consuming an input symbol.

#### 3.1. Definition of an NFA

An NFA is formally defined as a 5-tuple $(Q, \Sigma, \delta, q_0, F)$ where:

*   $Q$: A finite set of states.
*   $\Sigma$: A finite input alphabet.
*   $\delta$: The transition function. In an NFA, this is different from a DFA:
    *   $\delta: Q \times (\Sigma \cup \{\epsilon\}) \to \mathcal{P}(Q)$.
    *   This means for a given state and an input symbol (or the empty string $\epsilon$), the transition function maps to a *set* of possible next states. $\mathcal{P}(Q)$ denotes the power set of $Q$.
*   $q_0 \in Q$: The start state.
*   $F \subseteq Q$: A set of accept (or final) states.

#### 3.2. Key Differences from DFAs:

1.  **Multiple Transitions:** From a single state and with a single input symbol, an NFA can transition to zero, one, or *multiple* next states.
2.  **$\epsilon$-Transitions:** An NFA can change its state without reading any input symbol. These are called $\epsilon$-transitions.

#### 3.3. How an NFA Computes (The "Magic" of Nondeterminism)

An NFA accepts a string if *there exists at least one* sequence of transitions that leads from the start state to an accept state after reading the entire input string.

Think of it as the NFA "guessing" the correct path. For each state and input symbol, it can explore all possible next states simultaneously.

*   **Computation Path:** A sequence of states $q_0, q_1, q_2, ..., q_k$ where:
    *   $q_0$ is the start state.
    *   For each $i$ from $0$ to $k-1$:
        *   If $a_{i+1}$ is the $(i+1)$-th symbol of the input string $w$, then $q_{i+1} \in \delta(q_i, a_{i+1})$.
        *   Or, if $\epsilon$ is used, $q_{i+1} \in \delta(q_i, \epsilon)$.
*   **Acceptance:** A string $w$ is accepted by an NFA if there is a computation path for $w$ starting at $q_0$ and ending in a state in $F$.

#### 3.4. Example of NFA Computation

Let's consider an NFA that accepts strings over $\{0, 1\}$ that end in `01`.

*   $Q = \{q_0, q_1, q_2\}$
*   $\Sigma = \{0, 1\}$
*   $q_0 = q_0$
*   $F = \{q_2\}$
*   $\delta$:
    *   $\delta(q_0, 0) = \{q_0, q_1\}$
    *   $\delta(q_0, 1) = \{q_0\}$
    *   $\delta(q_1, 1) = \{q_2\}$
    *   $\delta(q_2, 0) = \emptyset$ (or no transition specified, meaning empty set)
    *   $\delta(q_2, 1) = \emptyset$
    *   $\delta(q_i, \epsilon) = \emptyset$ for all $i$.

Let's trace the string `00101`:

1.  **Start:** At $q_0$.
2.  **Read `0`:** From $q_0$, can go to $\{q_0, q_1\}$.
    *   **Path 1 (Guess 1):** Stays at $q_0$.
    *   **Path 2 (Guess 2):** Goes to $q_1$.
3.  **Read `0`:**
    *   **From Path 1 (at $q_0$):** Can go to $\{q_0, q_1\}$.
        *   **Path 1a:** Stays at $q_0$.
        *   **Path 1b:** Goes to $q_1$.
    *   **From Path 2 (at $q_1$):** No transition for `0`. Path terminates.
4.  **Read `1`:**
    *   **From Path 1a (at $q_0$):** Goes to $\{q_0\}$.
        *   **Path 1a-i:** Stays at $q_0$.
    *   **From Path 1b (at $q_1$):** Goes to $\{q_2\}$.
        *   **Path 1b-i:** Goes to $q_2$.
5.  **Read `0`:**
    *   **From Path 1a-i (at $q_0$):** Can go to $\{q_0, q_1\}$.
        *   **Path 1a-i-1:** Stays at $q_0$.
        *   **Path 1a-i-2:** Goes to $q_1$.
    *   **From Path 1b-i (at $q_2$):** No transition for `0`. Path terminates.
6.  **Read `1`:**
    *   **From Path 1a-i-1 (at $q_0$):** Goes to $\{q_0\}$.
        *   **Path 1a-i-1-a:** Stays at $q_0$.
    *   **From Path 1a-i-2 (at $q_1$):** Goes to $\{q_2\}$.
        *   **Path 1a-i-2-a:** Goes to $q_2$.

After reading `00101`, we have one active path ending in $q_2$ (Path 1a-i-2-a). Since $q_2$ is an accept state, the string `00101` is accepted.

**Important Point to Remember:** An NFA accepts a string if *any* of the possible computation paths end in an accept state.

#### 3.5. NFAs with $\epsilon$-Transitions (NFAs-$\epsilon$)

These are NFAs where the transition function can involve the empty string $\epsilon$.

*   **Example:** Accepting strings with any number of 'a's followed by a 'b'.
    *   $Q = \{q_0, q_1, q_2\}$
    *   $\Sigma = \{a, b\}$
    *   $q_0 = q_0$
    *   $F = \{q_2\}$
    *   $\delta$:
        *   $\delta(q_0, a) = \{q_0\}$
        *   $\delta(q_0, \epsilon) = \{q_1\}$  *(This is the $\epsilon$-transition)*
        *   $\delta(q_1, b) = \{q_2\}$
        *   All other transitions are $\emptyset$.

Trace `aaab`:

1.  **Start:** At $q_0$.
2.  **Read `a`:** From $q_0$, goes to $\{q_0\}$.
3.  **Read `a`:** From $q_0$, goes to $\{q_0\}$.
4.  **Read `a`:** From $q_0$, goes to $\{q_0\}$.
5.  **Read `b`:** From $q_0$, can go to $\{q_0\}$ (consuming `b`, which is not allowed here by the $\delta$ definition) or via $\epsilon$ to $q_1$. The "correct guess" is to use the $\epsilon$-transition *before* reading the 'b'.
    *   Let's rephrase the computation to handle $\epsilon$:
        *   We are at $q_0$ (after reading `aaa`).
        *   The NFA can choose to transition using $\epsilon$ to $q_1$. Now it's at $q_1$.
        *   It needs to read `b`. From $q_1$ on input `b`, it goes to $\{q_2\}$.
        *   $q_2$ is an accept state. So, `aaab` is accepted.

**Handling $\epsilon$-Transitions:** To simplify $\epsilon$-transitions and to make NFAs comparable to DFAs, we often convert NFAs with $\epsilon$-transitions to NFAs without $\epsilon$-transitions, and then to DFAs.

*   **$\epsilon$-closure:** For a state $q$, $\epsilon$-closure($q$) is the set of all states reachable from $q$ using only $\epsilon$-transitions (including $q$ itself).
    *   $\epsilon$-closure($q$) = $\{p \in Q \mid \text{there is an } \epsilon \text{-path from } q \text{ to } p\}$.
*   **Extended Transition Function for $\epsilon$-NFAs:**
    *   For an input symbol $a \in \Sigma$: $\delta^*(q, a) = \bigcup_{p \in \delta(q, a)} \epsilon\text{-closure}(p)$
    *   For $\epsilon$: $\delta^*(q, \epsilon) = \epsilon\text{-closure}(q)$

The key idea is that when an NFA makes a transition on symbol $a$, it can *immediately* perform any $\epsilon$-transitions from the resulting states.

---

### 4. Equivalence of NFAs and DFAs

**Theorem:** For every NFA, there exists an equivalent DFA.

*   **Equivalence:** Two automata are equivalent if they accept the same language.

This means that NFAs do not increase the power of regular language recognition compared to DFAs. Any language that can be recognized by an NFA can also be recognized by a DFA.

#### 4.1. The Subset Construction Algorithm

This algorithm converts an NFA into an equivalent DFA. The states of the new DFA correspond to *sets* of states of the original NFA.

Let the given NFA be $N = (Q_N, \Sigma, \delta_N, q_{0N}, F_N)$. We construct an equivalent DFA $D = (Q_D, \Sigma, \delta_D, q_{0D}, F_D)$.

1.  **States of the DFA ($Q_D$):** The states of $D$ are subsets of $Q_N$. $Q_D = \mathcal{P}(Q_N)$.
2.  **Start State of the DFA ($q_{0D}$):** The start state of $D$ is the $\epsilon$-closure of the start state of $N$. $q_{0D} = \epsilon\text{-closure}(\{q_{0N}\})$.
    *   (Note: If the NFA has no $\epsilon$-transitions, $q_{0D} = \{q_{0N}\}$.)
3.  **Accept States of the DFA ($F_D$):** A state (a subset of $Q_N$) in $D$ is an accept state if it contains at least one accept state from $N$.
    *   $F_D = \{ S \subseteq Q_N \mid S \cap F_N \neq \emptyset \}$.
4.  **Transition Function of the DFA ($\delta_D$):** For each state $S \in Q_D$ and each input symbol $a \in \Sigma$:
    *   $\delta_D(S, a) = \epsilon\text{-closure}\left(\bigcup_{q \in S} \delta_N(q, a)\right)$.
    *   This means:
        *   For each state $q$ in the current DFA state $S$, find all possible next states in the NFA for input $a$ (this is $\bigcup_{q \in S} \delta_N(q, a)$).
        *   Then, take the $\epsilon$-closure of this set of NFA states. This resulting set is the next DFA state.

**Important Note on Subset Construction:** The number of states in the resulting DFA can be up to $2^{|Q_N|}$, where $|Q_N|$ is the number of states in the NFA. This is why NFAs are often preferred for designing automata because they can be more compact.

#### 4.2. Example: Converting an NFA to a DFA (Subset Construction)

Consider the NFA from Section 3.4 that accepts strings ending in `01`:

*   $N = (Q_N = \{q_0, q_1, q_2\}, \Sigma = \{0, 1\}, \delta_N, q_{0N} = q_0, F_N = \{q_2\})$
*   $\delta_N$:
    *   $\delta_N(q_0, 0) = \{q_0, q_1\}$
    *   $\delta_N(q_0, 1) = \{q_0\}$
    *   $\delta_N(q_1, 1) = \{q_2\}$
    *   All others $\emptyset$.

Let's construct the equivalent DFA $D$:

1.  **States of $D$:** Subsets of $\{q_0, q_1, q_2\}$.
2.  **Start State of $D$:** $q_{0D} = \epsilon\text{-closure}(\{q_0\})$. Since there are no $\epsilon$-transitions, $q_{0D} = \{q_0\}$. Let's call this state A.
3.  **Accept States of $D$:** Any state containing $q_2$. So, states like $\{q_2\}$, $\{q_0, q_2\}$, $\{q_1, q_2\}$, $\{q_0, q_1, q_2\}$ will be accept states.

4.  **Transitions of $D$:**

    *   **From state A = $\{q_0\}$:**
        *   On input `0`:
            $\delta_D(\{q_0\}, 0) = \epsilon\text{-closure}(\delta_N(q_0, 0)) = \epsilon\text{-closure}(\{q_0, q_1\})$
            Since no $\epsilon$-transitions, this is $\{q_0, q_1\}$. Let's call this new state B.
        *   On input `1`:
            $\delta_D(\{q_0\}, 1) = \epsilon\text{-closure}(\delta_N(q_0, 1)) = \epsilon\text{-closure}(\{q_0\})$
            This is $\{q_0\}$. We are back to state A.

    *   **From state B = $\{q_0, q_1\}$:**
        *   On input `0`:
            $\delta_D(\{q_0, q_1\}, 0) = \epsilon\text{-closure}(\delta_N(q_0, 0) \cup \delta_N(q_1, 0))$
            $= \epsilon\text{-closure}(\{q_0, q_1\} \cup \emptyset) = \epsilon\text{-closure}(\{q_0, q_1\})$
            This is $\{q_0, q_1\}$. We are back to state B.
        *   On input `1`:
            $\delta_D(\{q_0, q_1\}, 1) = \epsilon\text{-closure}(\delta_N(q_0, 1) \cup \delta_N(q_1, 1))$
            $= \epsilon\text{-closure}(\{q_0\} \cup \{q_2\}) = \epsilon\text{-closure}(\{q_0, q_2\})$
            Since no $\epsilon$-transitions, this is $\{q_0, q_2\}$. Let's call this new state C.

    *   **From state C = $\{q_0, q_2\}$:**
        *   On input `0`:
            $\delta_D(\{q_0, q_2\}, 0) = \epsilon\text{-closure}(\delta_N(q_0, 0) \cup \delta_N(q_2, 0))$
            $= \epsilon\text{-closure}(\{q_0, q_1\} \cup \emptyset) = \epsilon\text{-closure}(\{q_0, q_1\})$
            This is $\{q_0, q_1\}$. We are back to state B.
        *   On input `1`:
            $\delta_D(\{q_0, q_2\}, 1) = \epsilon\text{-closure}(\delta_N(q_0, 1) \cup \delta_N(q_2, 1))$
            $= \epsilon\text{-closure}(\{q_0\} \cup \emptyset) = \epsilon\text{-closure}(\{q_0\})$
            This is $\{q_0\}$. We are back to state A.

Now, let's identify the accept states. State C = $\{q_0, q_2\}$ contains $q_2$, which is an accept state in the NFA. Therefore, C is an accept state in the DFA.

The equivalent DFA is:
*   $Q_D = \{A, B, C\}$, where $A=\{q_0\}, B=\{q_0, q_1\}, C=\{q_0, q_2\}$.
*   $\Sigma = \{0, 1\}$
*   $q_{0D} = A$
*   $F_D = \{C\}$
*   $\delta_D$:
    *   $\delta_D(A, 0) = B$
    *   $\delta_D(A, 1) = A$
    *   $\delta_D(B, 0) = B$
    *   $\delta_D(B, 1) = C$
    *   $\delta_D(C, 0) = B$
    *   $\delta_D(C, 1) = A$

This DFA accepts strings ending in `01`.

---

### 5. Constructing NFAs for Languages

NFAs can often be easier to construct for certain languages than DFAs, especially when dealing with union, concatenation, or Kleene star.

**General Construction Principles:**

*   **Simple Languages:** For a single string, use states to represent the prefix and transitions for each character.
*   **Union ($L_1 \cup L_2$):** Create a new start state with $\epsilon$-transitions to the start states of the NFAs for $L_1$ and $L_2$.
*   **Concatenation ($L_1 L_2$):** Connect the accept states of the NFA for $L_1$ (without $\epsilon$-transitions to a new state) to the start state of the NFA for $L_2$.
*   **Kleene Star ($L^*$):** Add a new start state with an $\epsilon$-transition to the original start state and to a new accept state. Also, make the original accept states transition (via $\epsilon$) to the new start state and the new accept state.

#### 5.1. Example: Constructing an NFA for $L = \{w \mid w \text{ contains substring } ab\}$

1.  **Idea:** We want to reach an accept state if we see an `a` followed by a `b`. Before seeing `a`, we can be in a "searching" state. After seeing `a`, we can be in a "looking for b" state. Once `b` is seen, we are in an accept state.

2.  **States:**
    *   $q_0$: Initial state, searching for `a`.
    *   $q_1$: Saw `a`, looking for `b`.
    *   $q_2$: Saw `ab`, accept state.

3.  **Transitions:**
    *   From $q_0$:
        *   On `a`, go to $q_1$. (This is the desired transition.)
        *   On `b`, stay in $q_0$. (We haven't found `a` yet.)
        *   On `a` again, stay in $q_0$ or go to $q_1$? Let's say we transition to $q_1$ for `a`, as it's the "longest match" or the most recent `a`. However, a simpler approach is to stay in $q_0$ on any character except `a` that leads to a non-acceptance path, and on `a`, go to $q_1$.
        *   Let's refine: From $q_0$, on `a` go to $q_1$. On any character (including `a`), stay in $q_0$. This can be represented as:
            *   $\delta(q_0, a) = \{q_0, q_1\}$
            *   $\delta(q_0, b) = \{q_0\}$

    *   From $q_1$:
        *   On `b`, go to $q_2$. (We found `ab`.)
        *   On `a`, what happens? If we see `aa`, the second `a` could start a new substring. So, from $q_1$ on `a`, we should go back to $q_1$.
        *   $\delta(q_1, a) = \{q_1\}$
        *   $\delta(q_1, b) = \{q_2\}$

    *   From $q_2$: Since $q_2$ is an accept state, we can reach it by any sequence of characters after finding `ab`.
        *   $\delta(q_2, a) = \{q_2\}$
        *   $\delta(q_2, b) = \{q_2\}$

4.  **Formal Definition:**
    *   $Q = \{q_0, q_1, q_2\}$
    *   $\Sigma = \{a, b\}$
    *   $q_0 = q_0$
    *   $F = \{q_2\}$
    *   $\delta$:
        *   $\delta(q_0, a) = \{q_0, q_1\}$
        *   $\delta(q_0, b) = \{q_0\}$
        *   $\delta(q_1, a) = \{q_1\}$
        *   $\delta(q_1, b) = \{q_2\}$
        *   $\delta(q_2, a) = \{q_2\}$
        *   $\delta(q_2, b) = \{q_2\}$

Let's test with `baab`:
1.  Start at $q_0$.
2.  Read `b`: Go to $\{q_0\}$.
3.  Read `a`: From $q_0$, go to $\{q_0, q_1\}$.
    *   Path 1: $q_0$
    *   Path 2: $q_1$
4.  Read `a`:
    *   From Path 1 ($q_0$): Go to $\{q_0, q_1\}$.
        *   Path 1a: $q_0$
        *   Path 1b: $q_1$
    *   From Path 2 ($q_1$): Go to $\{q_1\}$.
        *   Path 2a: $q_1$
5.  Read `b`:
    *   From Path 1a ($q_0$): Go to $\{q_0\}$.
        *   Path 1a-i: $q_0$
    *   From Path 1b ($q_1$): Go to $\{q_2\}$.
        *   Path 1b-i: $q_2$ (Accept state!)
    *   From Path 2a ($q_1$): Go to $\{q_2\}$.
        *   Path 2a-i: $q_2$ (Accept state!)

Since there are paths ending in an accept state ($q_2$), `baab` is accepted.

---

### 6. Applications of NFAs

*   **Ease of Design:** NFAs are often more intuitive and easier to construct for many regular languages, especially those involving concatenation, union, or Kleene star operations.
*   **Theoretical Importance:** They demonstrate the concept of nondeterminism in computation.
*   **Foundation for More Complex Models:** Concepts from NFAs, like state transitions and acceptance, are fundamental to understanding more powerful computational models.
*   **Circuit Design:** While DFAs are often preferred for implementation due to their deterministic nature, the design process might begin with an NFA.

---

### 7. Important Points to Remember

*   An NFA accepts a string if *at least one* possible computation path ends in an accept state.
*   NFAs can have multiple transitions for the same input symbol from a given state, or transitions without consuming input ($\epsilon$-transitions).
*   The power of NFAs is equivalent to DFAs; every NFA can be converted into an equivalent DFA.
*   The subset construction algorithm is the standard method for converting an NFA to a DFA.
*   NFAs can be more concise than equivalent DFAs.
*   NFAs with $\epsilon$-transitions can be converted to NFAs without $\epsilon$-transitions, and then to DFAs.

---

### 8. Practice Questions and Exercises

**Question 1:**
Draw an NFA that accepts all strings over the alphabet $\{0, 1\}$ that have an even number of `0`s.

**Answer 1:**
We need to keep track of whether the number of `0`s seen so far is even or odd.

*   States:
    *   $q_{even}$: Even number of `0`s (start state, accept state).
    *   $q_{odd}$: Odd number of `0`s (non-accept state).
*   Alphabet: $\{0, 1\}$
*   Start State: $q_{even}$
*   Accept States: $\{q_{even}\}$
*   Transitions:
    *   From $q_{even}$:
        *   On `0`: Go to $q_{odd}$ (even + 1 = odd).
        *   On `1`: Stay in $q_{even}$ (even + 0 = even).
    *   From $q_{odd}$:
        *   On `0`: Go to $q_{even}$ (odd + 1 = even).
        *   On `1`: Stay in $q_{odd}$ (odd + 0 = odd).

Formal Definition:
$Q = \{q_{even}, q_{odd}\}$
$\Sigma = \{0, 1\}$
$q_0 = q_{even}$
$F = \{q_{even}\}$
$\delta$:
$\delta(q_{even}, 0) = \{q_{odd}\}$
$\delta(q_{even}, 1) = \{q_{even}\}$
$\delta(q_{odd}, 0) = \{q_{even}\}$
$\delta(q_{odd}, 1) = \{q_{odd}\}$

**Question 2:**
Convert the following NFA to an equivalent DFA using the subset construction algorithm.

NFA details:
*   $Q_N = \{q_0, q_1, q_2\}$
*   $\Sigma = \{a, b\}$
*   $q_{0N} = q_0$
*   $F_N = \{q_2\}$
*   $\delta_N$:
    *   $\delta_N(q_0, a) = \{q_0, q_1\}$
    *   $\delta_N(q_1, b) = \{q_2\}$
    *   All other transitions lead to $\emptyset$.
    *   No $\epsilon$-transitions.

**Answer 2:**
1.  **States of DFA:** Subsets of $\{q_0, q_1, q_2\}$.
2.  **Start State:** $q_{0D} = \{q_0\}$. Let's call this state A.
3.  **Accept States:** States containing $q_2$. So, any state that is $\{q_2\}$, $\{q_0, q_2\}$, $\{q_1, q_2\}$, or $\{q_0, q_1, q_2\}$.

4.  **Transitions:**
    *   **From A = $\{q_0\}$:**
        *   On `a`: $\delta_D(\{q_0\}, a) = \delta_N(q_0, a) = \{q_0, q_1\}$. Let's call this state B.
        *   On `b`: $\delta_D(\{q_0\}, b) = \delta_N(q_0, b) = \emptyset$. Let's call this state C (the dead/trap state, representing no possible path).

    *   **From B = $\{q_0, q_1\}$:**
        *   On `a`: $\delta_D(\{q_0, q_1\}, a) = \delta_N(q_0, a) \cup \delta_N(q_1, a) = \{q_0, q_1\} \cup \emptyset = \{q_0, q_1\}$. This is state B again.
        *   On `b`: $\delta_D(\{q_0, q_1\}, b) = \delta_N(q_0, b) \cup \delta_N(q_1, b) = \emptyset \cup \{q_2\} = \{q_2\}$. Let's call this state D.

    *   **From C = $\emptyset$:**
        *   On `a`: $\delta_D(\emptyset, a) = \emptyset$. This is state C.
        *   On `b`: $\delta_D(\emptyset, b) = \emptyset$. This is state C.

    *   **From D = $\{q_2\}$:**
        *   On `a`: $\delta_D(\{q_2\}, a) = \delta_N(q_2, a) = \emptyset$. This is state C.
        *   On `b`: $\delta_D(\{q_2\}, b) = \delta_N(q_2, b) = \emptyset$. This is state C.

5.  **Accept States Identification:** State D = $\{q_2\}$ contains $q_2$, which is an accept state in the NFA. So, D is an accept state in the DFA.

The equivalent DFA is:
*   $Q_D = \{A, B, C, D\}$ where $A=\{q_0\}, B=\{q_0, q_1\}, C=\emptyset, D=\{q_2\}$.
*   $\Sigma = \{a, b\}$
*   $q_{0D} = A$
*   $F_D = \{D\}$
*   $\delta_D$:
    *   $\delta_D(A, a) = B$
    *   $\delta_D(A, b) = C$
    *   $\delta_D(B, a) = B$
    *   $\delta_D(B, b) = D$
    *   $\delta_D(C, a) = C$
    *   $\delta_D(C, b) = C$
    *   $\delta_D(D, a) = C$
    *   $\delta_D(D, b) = C$

This DFA accepts strings of the form $a^n b$ where $n \ge 0$.

---

### 9. Alignment with Course Outcomes

*   **CO1 (Classify Formal Languages):** Understanding NFAs is a step towards classifying languages as regular. Regular languages are the first class in the Chomsky hierarchy.
*   **CO2 (Design Finite State Automata, Regular Grammar, and Regular Representations for Regular Languages):** This topic directly addresses the design of NFAs, which are a type of finite state automaton, for regular languages. The construction of NFAs and their conversion to DFAs are core skills for this outcome.
*   **CO3, CO4, CO5:** While not directly covered here, the foundational understanding of automata and their descriptive power provided by NFAs is essential for grasping more complex models like push-down automata and Turing machines, and concepts like decidability.

---
