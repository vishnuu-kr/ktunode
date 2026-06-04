---
title: "Equivalence of DFA and NFA"
subject: "THEORY OF COMPUTATION"
module: "Module 1: Introduction to formal language theory– Alphabets"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35f11"
status: "completed"
scrapedAt: "2026-05-23T16:19:26.943Z"
---
# Theory of Computation: Module 1 - Introduction to Formal Language Theory - Alphabets

## Topic: Equivalence of DFA and NFA

### 1. Learning Outcomes

By the end of this topic, you will be able to:

*   Understand the fundamental concepts of Deterministic Finite Automata (DFA) and Nondeterministic Finite Automata (NFA).
*   Explain the concept of language equivalence between DFAs and NFAs.
*   Describe the subset construction algorithm for converting an NFA to an equivalent DFA.
*   Prove the equivalence of DFAs and NFAs.
*   Apply the subset construction algorithm to convert a given NFA to an equivalent DFA.

### 2. Course Outcomes Alignment

This topic directly contributes to the following Course Outcomes:

*   **CO1: Classify a given formal language into Regular, Context-Free, Context Sensitive, Recursive or Recursively Enumerable (Knowledge Level: K2)**
    *   Understanding that NFAs and DFAs recognize the *same* class of languages (regular languages) is crucial for classification. If a language can be accepted by an NFA, it can also be accepted by an equivalent DFA, thereby confirming its regularity.
*   **CO2: Design finite state automata, regular grammar, and regular representations for regular languages. (Knowledge Level: K3)**
    *   This topic is foundational for designing DFAs. The ability to convert an NFA to a DFA is a key skill in designing DFAs, especially when an NFA might be simpler to construct initially.

### 3. Key Concepts and Definitions

#### 3.1. Deterministic Finite Automaton (DFA)

A DFA is a mathematical model of computation that processes input strings symbol by symbol and makes a single, deterministic transition to the next state based on the current state and the input symbol.

**Formal Definition:** A DFA is a 5-tuple $(Q, \Sigma, \delta, q_0, F)$ where:
*   $Q$: A finite set of states.
*   $\Sigma$: A finite set of input symbols, called the alphabet.
*   $\delta$: The transition function, $\delta: Q \times \Sigma \rightarrow Q$. For every state and input symbol, there is exactly one next state.
*   $q_0$: The start state, $q_0 \in Q$.
*   $F$: A set of accept (or final) states, $F \subseteq Q$.

**Language Accepted by a DFA:** A string $w$ is accepted by a DFA $M$ if there is a unique sequence of transitions starting from $q_0$, consuming the entire string $w$, and ending in a state in $F$.

#### 3.2. Nondeterministic Finite Automaton (NFA)

An NFA is a mathematical model of computation that, given an input symbol, can transition to *multiple* next states, or even to no state at all. It can also transition without consuming any input symbol (epsilon transitions).

**Formal Definition:** An NFA is a 5-tuple $(Q, \Sigma, \delta, q_0, F)$ where:
*   $Q$: A finite set of states.
*   $\Sigma$: A finite set of input symbols, called the alphabet.
*   $\delta$: The transition function, $\delta: Q \times (\Sigma \cup \{\epsilon\}) \rightarrow \mathcal{P}(Q)$. For every state and input symbol (or epsilon), there is a *set* of possible next states. $\mathcal{P}(Q)$ denotes the power set of $Q$.
*   $q_0$: The start state, $q_0 \in Q$.
*   $F$: A set of accept (or final) states, $F \subseteq Q$.

**Language Accepted by an NFA:** A string $w$ is accepted by an NFA $M$ if there exists *at least one* sequence of transitions starting from $q_0$, consuming the entire string $w$, and ending in a state in $F$.

#### 3.3. Epsilon Transitions (ε-transitions)

An ε-transition allows an NFA to move from one state to another without consuming any input symbol. This introduces a form of nondeterminism where the automaton can be in multiple states simultaneously due to these transitions.

#### 3.4. Language Equivalence

Two finite automata, $M_1$ and $M_2$, are **equivalent** if they accept the same language. That is, $L(M_1) = L(M_2)$.

**Key Theorem:** For every NFA, there exists an equivalent DFA. This implies that the class of languages accepted by NFAs is exactly the same as the class of languages accepted by DFAs. These are known as **regular languages**.

### 4. Subset Construction Algorithm

This algorithm converts any given NFA into an equivalent DFA. The core idea is that each state in the equivalent DFA corresponds to a *set* of states in the original NFA.

**Algorithm Steps:**

Let $N = (Q_N, \Sigma, \delta_N, q_{N0}, F_N)$ be an NFA. We construct an equivalent DFA $D = (Q_D, \Sigma, \delta_D, q_{D0}, F_D)$ as follows:

1.  **States of the DFA ($Q_D$):** The states of the DFA are subsets of the states of the NFA. $Q_D = \mathcal{P}(Q_N)$.

2.  **Start State of the DFA ($q_{D0}$):** The start state of the DFA is the set of all states reachable from the NFA's start state $q_{N0}$ using only ε-transitions. This is denoted as $\mathcal{E}(q_{N0})$, where $\mathcal{E}(S)$ is the set of all states reachable from any state $s \in S$ using zero or more ε-transitions.
    *   $\mathcal{E}(S) = \{q \in Q_N \mid \text{there is a path from some } s \in S \text{ to } q \text{ using only } \epsilon\text{-transitions}\}$.
    *   So, $q_{D0} = \mathcal{E}(\{q_{N0}\})$.

3.  **Transitions of the DFA ($\delta_D$):** For each state $S \in Q_D$ (where $S$ is a subset of $Q_N$) and for each input symbol $a \in \Sigma$:
    *   $\delta_D(S, a) = \mathcal{E}(\bigcup_{q \in S} \delta_N(q, a))$.
    *   In simpler terms: To find the next state in the DFA when in state $S$ and reading symbol $a$:
        *   For every state $q$ in the current NFA state set $S$, find all states reachable from $q$ upon reading $a$ (i.e., $\delta_N(q, a)$).
        *   Take the union of all these reachable states.
        *   From this union, find all states reachable using ε-transitions. This resulting set is the new DFA state.

4.  **Accept States of the DFA ($F_D$):** A state $S \in Q_D$ is an accept state if it contains at least one accept state from the original NFA. That is, $F_D = \{S \in Q_D \mid S \cap F_N \neq \emptyset\}$.

**Important Note on ε-transitions:** The subset construction implicitly handles ε-transitions. The $\mathcal{E}$ function ensures that any state reachable via ε-transitions from the current set of NFA states is included in the next DFA state.

#### 4.1. Handling Epsilon-Transitions More Formally

To implement the subset construction more precisely, we can define the extended transition function for NFAs with ε-transitions:

*   **$\mathcal{E}(q)$:** The set of states reachable from state $q$ by zero or more ε-transitions.
*   **$\mathcal{E}(S)$:** The set of states reachable from any state in $S$ by zero or more ε-transitions. $\mathcal{E}(S) = \bigcup_{q \in S} \mathcal{E}(q)$.

Then the DFA transitions are:
$\delta_D(S, a) = \mathcal{E}(\bigcup_{q \in S} \delta_N(q, a))$

#### 4.2. Simplified Subset Construction (Without Explicit ε-transitions initially)

If the NFA does not have ε-transitions, the algorithm simplifies:
1.  $Q_D = \mathcal{P}(Q_N)$
2.  $q_{D0} = \{q_{N0}\}$
3.  $\delta_D(S, a) = \{q' \in Q_N \mid \exists q \in S \text{ such that } \delta_N(q, a) = q'\}$
4.  $F_D = \{S \in Q_D \mid S \cap F_N \neq \emptyset\}$

#### 4.3. Minimization (Optional but related)

While not strictly part of the equivalence proof, it's worth noting that the DFA produced by the subset construction might not be minimal. Minimization algorithms can be applied to reduce the number of states in the DFA while preserving its language.

### 5. Proof of Equivalence (Sketch)

To prove that the constructed DFA $D$ is equivalent to the NFA $N$, we need to show that they accept the same language, i.e., $L(N) = L(D)$. This is typically done in two parts:

#### 5.1. Part 1: $L(D) \subseteq L(N)$ (If $D$ accepts $w$, then $N$ accepts $w$)

Assume the DFA $D$ accepts a string $w$. This means there is a sequence of transitions in $D$:
$q_{D0} \xrightarrow{w} S_f$, where $S_f \in F_D$.

In terms of the subset construction, $q_{D0} = \mathcal{E}(\{q_{N0}\})$.
If $\delta_D(S, a) = T$, it means $T = \mathcal{E}(\bigcup_{q \in S} \delta_N(q, a))$.

We can show by induction on the length of $w$ that if $D$ is in state $S$ after processing prefix $w'$, then $S$ is the set of all NFA states reachable from $q_{N0}$ after processing $w'$ and possibly taking ε-transitions. Specifically, if $D$ reaches state $S_f$ from $q_{D0}$ on input $w$, then $S_f$ contains at least one state from $F_N$, and any state $q_{final} \in S_f$ is reachable from $q_{N0}$ in $N$ by processing $w$. Since $S_f \in F_D$, it means $S_f \cap F_N \neq \emptyset$, so there exists a $q_{final} \in S_f$ such that $q_{final} \in F_N$. Thus, $N$ accepts $w$.

#### 5.2. Part 2: $L(N) \subseteq L(D)$ (If $N$ accepts $w$, then $D$ accepts $w$)

Assume the NFA $N$ accepts a string $w$. This means there exists at least one path in $N$ from $q_{N0}$ to some state $q_f \in F_N$ upon reading $w$. Let this path be $q_{N0} \xrightarrow{w} q_f$.

Again, using induction on the length of $w$, we can show that if there is a path in $N$ from $q_{N0}$ to state $q$ on input $w$, then the DFA state $S$ that $D$ reaches after processing $w$ (starting from $q_{D0}$) will contain $q$. That is, $q \in S$.

Since $N$ accepts $w$, there exists a path to some $q_f \in F_N$. By the inductive argument, after processing $w$, the DFA will be in a state $S_f$ such that $q_f \in S_f$. Since $q_f \in F_N$, it follows that $S_f \cap F_N \neq \emptyset$. By definition of $F_D$, this means $S_f \in F_D$. Therefore, $D$ accepts $w$.

### 6. Examples

#### Example 1: Converting an NFA to a DFA

Let's convert the following NFA to an equivalent DFA.
NFA $N$:
*   States $Q_N = \{q_0, q_1\}$
*   Alphabet $\Sigma = \{0, 1\}$
*   Start state $q_{N0} = q_0$
*   Accept states $F_N = \{q_1\}$
*   Transition function $\delta_N$:
    *   $\delta_N(q_0, 0) = \{q_0, q_1\}$
    *   $\delta_N(q_0, 1) = \{q_0\}$
    *   $\delta_N(q_1, 0) = \emptyset$
    *   $\delta_N(q_1, 1) = \emptyset$

This NFA accepts all strings over $\{0, 1\}$ that contain at least one '0'.

**Applying Subset Construction:**

*   **DFA States ($Q_D$):** Subsets of $\{q_0, q_1\}$. These are $\emptyset$, $\{q_0\}$, $\{q_1\}$, $\{q_0, q_1\}$.

*   **DFA Start State ($q_{D0}$):**
    *   $\mathcal{E}(\{q_0\}) = \{q_0\}$ (no ε-transitions from $q_0$).
    *   So, $q_{D0} = \{q_0\}$. Let's call this state $A$.

*   **DFA Transitions ($\delta_D$):**

    *   **From state $A = \{q_0\}$:**
        *   Input '0':
            *   $\delta_N(q_0, 0) = \{q_0, q_1\}$
            *   $\mathcal{E}(\{q_0, q_1\}) = \{q_0, q_1\}$ (no ε-transitions).
            *   So, $\delta_D(A, 0) = \{q_0, q_1\}$. Let's call this state $B$.
        *   Input '1':
            *   $\delta_N(q_0, 1) = \{q_0\}$
            *   $\mathcal{E}(\{q_0\}) = \{q_0\}$.
            *   So, $\delta_D(A, 1) = \{q_0\}$. This is state $A$ itself.

    *   **From state $B = \{q_0, q_1\}$:**
        *   Input '0':
            *   $\delta_N(q_0, 0) = \{q_0, q_1\}$
            *   $\delta_N(q_1, 0) = \emptyset$
            *   Union: $\{q_0, q_1\} \cup \emptyset = \{q_0, q_1\}$
            *   $\mathcal{E}(\{q_0, q_1\}) = \{q_0, q_1\}$.
            *   So, $\delta_D(B, 0) = \{q_0, q_1\}$. This is state $B$ itself.
        *   Input '1':
            *   $\delta_N(q_0, 1) = \{q_0\}$
            *   $\delta_N(q_1, 1) = \emptyset$
            *   Union: $\{q_0\} \cup \emptyset = \{q_0\}$
            *   $\mathcal{E}(\{q_0\}) = \{q_0\}$.
            *   So, $\delta_D(B, 1) = \{q_0\}$. This is state $A$.

    *   **From state $\{q_1\}$:** (This state is not reachable from the start state, so we don't need to compute its transitions for acceptance, but it's good practice).
        *   Input '0': $\delta_N(q_1, 0) = \emptyset$. $\mathcal{E}(\emptyset) = \emptyset$. $\delta_D(\{q_1\}, 0) = \emptyset$.
        *   Input '1': $\delta_N(q_1, 1) = \emptyset$. $\mathcal{E}(\emptyset) = \emptyset$. $\delta_D(\{q_1\}, 1) = \emptyset$.

    *   **From state $\emptyset$:**
        *   Input '0': $\delta_D(\emptyset, 0) = \emptyset$.
        *   Input '1': $\delta_D(\emptyset, 1) = \emptyset$.

*   **DFA Accept States ($F_D$):**
    *   States in $Q_D$ that contain $q_1$ (the NFA's accept state).
    *   $A = \{q_0\}$: $A \cap F_N = \{q_0\} \cap \{q_1\} = \emptyset$. Not an accept state.
    *   $B = \{q_0, q_1\}$: $B \cap F_N = \{q_0, q_1\} \cap \{q_1\} = \{q_1\} \neq \emptyset$. So, $B$ is an accept state.
    *   $\{q_1\}$: $\{q_1\} \cap F_N = \{q_1\} \neq \emptyset$. (If reachable, it would be an accept state).
    *   $\emptyset$: $\emptyset \cap F_N = \emptyset$. Not an accept state.

**The Equivalent DFA:**
*   States $Q_D = \{A, B\}$ (where $A = \{q_0\}, B = \{q_0, q_1\}$)
*   Alphabet $\Sigma = \{0, 1\}$
*   Start state $q_{D0} = A$
*   Accept states $F_D = \{B\}$
*   Transition function $\delta_D$:
    *   $\delta_D(A, 0) = B$
    *   $\delta_D(A, 1) = A$
    *   $\delta_D(B, 0) = B$
    *   $\delta_D(B, 1) = A$

This DFA correctly accepts strings with at least one '0'.

#### Example 2: NFA with Epsilon-Transitions

NFA $N$:
*   States $Q_N = \{q_0, q_1, q_2\}$
*   Alphabet $\Sigma = \{0, 1\}$
*   Start state $q_{N0} = q_0$
*   Accept states $F_N = \{q_2\}$
*   Transition function $\delta_N$:
    *   $\delta_N(q_0, \epsilon) = \{q_1\}$
    *   $\delta_N(q_0, 0) = \{q_0\}$
    *   $\delta_N(q_1, 1) = \{q_2\}$
    *   All other transitions are $\emptyset$.

This NFA accepts strings that are '0*' followed by '1', or just '0*'. This language is $(0^*1) \cup 0^*$.

**Applying Subset Construction with Epsilon-Transitions:**

First, calculate $\mathcal{E}(q)$ for each state:
*   $\mathcal{E}(q_0) = \{q_0, q_1\}$ (since $q_0 \xrightarrow{\epsilon} q_1$)
*   $\mathcal{E}(q_1) = \{q_1\}$
*   $\mathcal{E}(q_2) = \{q_2\}$

Now, construct the DFA:

*   **DFA States ($Q_D$):** Subsets of $\{q_0, q_1, q_2\}$.

*   **DFA Start State ($q_{D0}$):**
    *   $q_{D0} = \mathcal{E}(\{q_0\}) = \{q_0, q_1\}$. Let's call this state $A$.

*   **DFA Transitions ($\delta_D$):**

    *   **From state $A = \{q_0, q_1\}$:**
        *   Input '0':
            *   $\delta_N(q_0, 0) = \{q_0\}$
            *   $\delta_N(q_1, 0) = \emptyset$
            *   Union: $\{q_0\} \cup \emptyset = \{q_0\}$
            *   Next DFA state: $\mathcal{E}(\{q_0\}) = \{q_0, q_1\}$.
            *   So, $\delta_D(A, 0) = \{q_0, q_1\} = A$.
        *   Input '1':
            *   $\delta_N(q_0, 1) = \emptyset$
            *   $\delta_N(q_1, 1) = \{q_2\}$
            *   Union: $\emptyset \cup \{q_2\} = \{q_2\}$
            *   Next DFA state: $\mathcal{E}(\{q_2\}) = \{q_2\}$.
            *   So, $\delta_D(A, 1) = \{q_2\}$. Let's call this state $C$.

    *   **From state $C = \{q_2\}$:**
        *   Input '0':
            *   $\delta_N(q_2, 0) = \emptyset$
            *   Union: $\emptyset$
            *   Next DFA state: $\mathcal{E}(\emptyset) = \emptyset$.
            *   So, $\delta_D(C, 0) = \emptyset$. Let's call this state $D$.
        *   Input '1':
            *   $\delta_N(q_2, 1) = \emptyset$
            *   Union: $\emptyset$
            *   Next DFA state: $\mathcal{E}(\emptyset) = \emptyset$.
            *   So, $\delta_D(C, 1) = \emptyset = D$.

    *   **From state $D = \emptyset$:**
        *   $\delta_D(\emptyset, 0) = \emptyset$
        *   $\delta_D(\emptyset, 1) = \emptyset$

*   **DFA Accept States ($F_D$):**
    *   $A = \{q_0, q_1\}$: $A \cap F_N = \{q_0, q_1\} \cap \{q_2\} = \emptyset$. Not an accept state.
    *   $C = \{q_2\}$: $C \cap F_N = \{q_2\} \cap \{q_2\} = \{q_2\} \neq \emptyset$. So, $C$ is an accept state.
    *   $D = \emptyset$: $\emptyset \cap F_N = \emptyset$. Not an accept state.

**The Equivalent DFA:**
*   States $Q_D = \{A, C, D\}$ (where $A = \{q_0, q_1\}, C = \{q_2\}, D = \emptyset$)
*   Alphabet $\Sigma = \{0, 1\}$
*   Start state $q_{D0} = A$
*   Accept states $F_D = \{C\}$
*   Transition function $\delta_D$:
    *   $\delta_D(A, 0) = A$
    *   $\delta_D(A, 1) = C$
    *   $\delta_D(C, 0) = D$
    *   $\delta_D(C, 1) = D$
    *   $\delta_D(D, 0) = D$
    *   $\delta_D(D, 1) = D$

This DFA accepts strings starting with '0', followed by any number of '0's, and then a '1'. This corresponds to strings of the form $0^*1$. Wait, the NFA accepted $(0^*1) \cup 0^*$. Let's re-check the language.
The NFA accepts:
*   $00\epsilon 1$: string "001" -> $q_0 \xrightarrow{0} q_0 \xrightarrow{0} q_0 \xrightarrow{\epsilon} q_1 \xrightarrow{1} q_2$ (Accepts)
*   $\epsilon 1$: string "1" -> $q_0 \xrightarrow{\epsilon} q_1 \xrightarrow{1} q_2$ (Accepts)
*   $0\epsilon 1$: string "01" -> $q_0 \xrightarrow{0} q_0 \xrightarrow{\epsilon} q_1 \xrightarrow{1} q_2$ (Accepts)
*   $00$: string "00" -> $q_0 \xrightarrow{0} q_0 \xrightarrow{0} q_0$ (Does not accept)
*   $0$: string "0" -> $q_0 \xrightarrow{0} q_0$ (Does not accept)

Ah, the NFA's language is $(0^*1)$ or $0^*\epsilon 1$. It seems my interpretation of the NFA language was incorrect. Let's trace a string like "00".
$q_0 \xrightarrow{0} q_0 \xrightarrow{0} q_0$. This path ends in $q_0$, which is not an accept state. So "00" is not accepted.
Let's trace "01".
$q_0 \xrightarrow{0} q_0 \xrightarrow{\epsilon} q_1 \xrightarrow{1} q_2$. This path ends in $q_2$, which is an accept state. So "01" is accepted.
Let's trace "1".
$q_0 \xrightarrow{\epsilon} q_1 \xrightarrow{1} q_2$. This path ends in $q_2$. So "1" is accepted.

The language seems to be strings that contain a '1' preceded by any number of '0's (including zero '0's), or simply strings that are $0^*$. No, the NFA actually accepts any string that has at least one '1' at the end, preceded by zero or more '0's, OR any string that is $0^*$ and is empty or has some '0's and then terminates.

Let's re-evaluate the NFA language:
$q_0 \xrightarrow{0^*} q_0$. If it stops here, it's not accepted.
$q_0 \xrightarrow{0^*} q_0 \xrightarrow{\epsilon} q_1 \xrightarrow{1} q_2$. This accepts strings of the form $0^*1$.
So the language is indeed $0^*1$.

Now let's check the DFA:
$A = \{q_0, q_1\}$ (start state)
$C = \{q_2\}$ (accept state)
$D = \emptyset$ (dead state)

*   "01": $A \xrightarrow{0} A \xrightarrow{1} C$. Accepted.
*   "1": $A \xrightarrow{1} C$. Accepted.
*   "001": $A \xrightarrow{0} A \xrightarrow{0} A \xrightarrow{1} C$. Accepted.
*   "00": $A \xrightarrow{0} A \xrightarrow{0} A$. Ends in $A$, not accept. Not accepted.
*   "10": $A \xrightarrow{1} C \xrightarrow{0} D$. Ends in $D$, not accept. Not accepted.

The DFA correctly accepts $0^*1$. My initial interpretation of the NFA's language was flawed.

### 7. Practice Questions/Exercises

**Exercise 1:**
Convert the following NFA to an equivalent DFA using the subset construction algorithm.

NFA $N$:
*   States $Q_N = \{s_0, s_1, s_2\}$
*   Alphabet $\Sigma = \{a, b\}$
*   Start state $q_{N0} = s_0$
*   Accept states $F_N = \{s_2\}$
*   Transition function $\delta_N$:
    *   $\delta_N(s_0, a) = \{s_0, s_1\}$
    *   $\delta_N(s_1, b) = \{s_2\}$
    *   All other transitions are $\emptyset$.

**Answer to Exercise 1:**

1.  **DFA States:** Subsets of $\{s_0, s_1, s_2\}$.
2.  **DFA Start State ($q_{D0}$):** $\mathcal{E}(\{s_0\}) = \{s_0\}$. Let's call this state $A$.
3.  **DFA Transitions:**
    *   **From $A = \{s_0\}$:**
        *   $\delta_D(A, a) = \mathcal{E}(\delta_N(s_0, a)) = \mathcal{E}(\{s_0, s_1\}) = \{s_0, s_1\}$. Let's call this state $B$.
        *   $\delta_D(A, b) = \mathcal{E}(\delta_N(s_0, b)) = \mathcal{E}(\emptyset) = \emptyset$. Let's call this state $C$.
    *   **From $B = \{s_0, s_1\}$:**
        *   $\delta_D(B, a) = \mathcal{E}(\delta_N(s_0, a) \cup \delta_N(s_1, a)) = \mathcal{E}(\{s_0\} \cup \emptyset) = \mathcal{E}(\{s_0\}) = \{s_0, s_1\} = B$.
        *   $\delta_D(B, b) = \mathcal{E}(\delta_N(s_0, b) \cup \delta_N(s_1, b)) = \mathcal{E}(\emptyset \cup \{s_2\}) = \mathcal{E}(\{s_2\}) = \{s_2\}$. Let's call this state $D$.
    *   **From $D = \{s_2\}$:**
        *   $\delta_D(D, a) = \mathcal{E}(\delta_N(s_2, a)) = \mathcal{E}(\emptyset) = \emptyset = C$.
        *   $\delta_D(D, b) = \mathcal{E}(\delta_N(s_2, b)) = \mathcal{E}(\emptyset) = \emptyset = C$.
    *   **From $C = \emptyset$:**
        *   $\delta_D(C, a) = \emptyset = C$.
        *   $\delta_D(C, b) = \emptyset = C$.
4.  **DFA Accept States ($F_D$):** States containing $s_2$.
    *   $A = \{s_0\}$: Not an accept state.
    *   $B = \{s_0, s_1\}$: Not an accept state.
    *   $D = \{s_2\}$: Is an accept state.
    *   $C = \emptyset$: Not an accept state.

**Equivalent DFA:**
*   States $Q_D = \{A, B, C, D\}$ (where $A=\{s_0\}, B=\{s_0,s_1\}, C=\emptyset, D=\{s_2\}$)
*   Alphabet $\Sigma = \{a, b\}$
*   Start state $q_{D0} = A$
*   Accept states $F_D = \{D\}$
*   Transitions $\delta_D$:
    *   $\delta_D(A, a) = B$
    *   $\delta_D(A, b) = C$
    *   $\delta_D(B, a) = B$
    *   $\delta_D(B, b) = D$
    *   $\delta_D(D, a) = C$
    *   $\delta_D(D, b) = C$
    *   $\delta_D(C, a) = C$
    *   $\delta_D(C, b) = C$

This DFA accepts strings that end with 'b', and are preceded by any number of 'a's and 'b's such that there's an 'a' transition that leads to the {s0, s1} state (B). The language is essentially strings of the form $a^*b$ or $a^*ba^*b$ where the final 'b' triggers acceptance. This NFA accepts strings that contain "ab" where the 'a' might be part of a longer sequence of 'a's. Specifically, it accepts strings ending in "ab".

**Exercise 2:**
Explain why the existence of an equivalent DFA for every NFA is important for classifying formal languages.

**Answer to Exercise 2:**
The fact that every NFA has an equivalent DFA is fundamental to the theory of computation because it establishes that **Nondeterministic Finite Automata and Deterministic Finite Automata accept the same class of languages**. This class of languages is known as **Regular Languages**.

Therefore, if we can demonstrate that a given formal language can be accepted by *any* NFA, we automatically know it can also be accepted by a DFA. This ability to construct an equivalent DFA confirms that the language is regular, which is the lowest level in the Chomsky hierarchy (CO1). It also means we can use the systematic methods for designing DFAs (CO2) to recognize such languages. Without this equivalence, we might think NFAs could recognize a larger or different set of languages, complicating language classification.

### 8. Important Points to Remember

*   **Nondeterminism vs. Determinism:** NFAs can have multiple transitions for a given state and input, or ε-transitions. DFAs have exactly one transition for each state and input.
*   **Language Equivalence:** Two automata are equivalent if they accept the same language.
*   **Subset Construction:** The algorithm to convert an NFA to an equivalent DFA.
*   **DFA States as Sets:** The states of the resulting DFA are sets of states from the original NFA.
*   **Epsilon Closure ($\mathcal{E}$):** Crucial for handling ε-transitions. The set of all states reachable from a given state (or set of states) via zero or more ε-transitions.
*   **Power of NFAs:** Despite their seemingly weaker definition, NFAs are not more powerful than DFAs in terms of the languages they can recognize. They can, however, be significantly more compact for certain languages.
*   **Regular Languages:** The class of languages recognized by both DFAs and NFAs.
