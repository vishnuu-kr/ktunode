---
title: "Equivalence of REs and DFA"
subject: "THEORY OF COMPUTATION"
module: "Module 2: Regular Languages "
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35f16"
status: "completed"
scrapedAt: "2026-05-23T16:19:30.123Z"
---
# Theory of Computation: Module 2 - Regular Languages

## Topic: Equivalence of Regular Expressions (REs) and Deterministic Finite Automata (DFAs)

This topic explores the fundamental equivalence between two powerful formalisms for describing regular languages: Regular Expressions and Deterministic Finite Automata. We will demonstrate that any language that can be described by a Regular Expression can also be accepted by a DFA, and vice-versa. This establishes that both formalisms capture the same class of languages – the Regular Languages.

---

### 1. Introduction to Regular Expressions (REs)

**Definition:** A Regular Expression (RE) is a sequence of symbols that defines a set of strings (a language). They are a concise way to describe patterns in text and are widely used in text processing, lexical analysis, and compilers.

**Basic Operators:**

*   **Union (OR):** Denoted by `|` or `+`.  If `r1` and `r2` are REs, then `r1 | r2` represents the language $L(r1) \cup L(r2)$.
    *   Example: `a|b` represents the language {a, b}.
*   **Concatenation (AND):** Denoted by juxtaposition or `.` . If `r1` and `r2` are REs, then `r1r2` represents the language $L(r1)L(r2) = \{ xy \mid x \in L(r1), y \in L(r2) \}$.
    *   Example: `ab` represents the language {ab}.
*   **Kleene Star (Zero or More):** Denoted by `*`. If `r` is an RE, then `r*` represents the language $L(r)* = \{ x_1 x_2 \dots x_k \mid k \ge 0, x_i \in L(r) \}$.
    *   Example: `a*` represents the language {$\epsilon$, a, aa, aaa, ...}.

**Derived Operators:**

*   **Kleene Plus (One or More):** Denoted by `+`. `r+` is equivalent to `rr*`.
    *   Example: `a+` represents the language {a, aa, aaa, ...}.
*   **Optional (Zero or One):** Denoted by `?`. `r?` is equivalent to `r | \epsilon`.
    *   Example: `a?` represents the language {$\epsilon$, a}.

**Alphabet:** The set of symbols used in the RE. Typically denoted by $\Sigma$.

**$\epsilon$ (Epsilon):** The empty string.

**$\emptyset$ (Phi):** The empty language (no strings).

**Examples of REs:**

*   `a(b|c)*d`: Strings starting with 'a', followed by zero or more 'b's or 'c's, and ending with 'd'.
*   `(0|1)*00`: Strings of 0s and 1s that end with "00".
*   `a*b*`: Strings consisting of zero or more 'a's followed by zero or more 'b's.

---

### 2. Introduction to Deterministic Finite Automata (DFAs)

**Definition:** A Deterministic Finite Automaton (DFA) is a mathematical model of computation that accepts or rejects strings of symbols. It consists of a finite set of states, a transition function, a start state, and a set of accept states.

**Formal Definition:** A DFA is a 5-tuple $(Q, \Sigma, \delta, q_0, F)$, where:

*   $Q$: A finite set of states.
*   $\Sigma$: A finite set of input symbols (the alphabet).
*   $\delta$: The transition function, $\delta: Q \times \Sigma \to Q$. For every state and every input symbol, there is exactly one next state.
*   $q_0 \in Q$: The start state.
*   $F \subseteq Q$: The set of accept states (or final states).

**Language Accepted by a DFA:** The language $L(M)$ accepted by a DFA $M$ is the set of all strings $w \in \Sigma^*$ for which there is a transition sequence starting from the start state $q_0$ and ending in an accept state in $F$, when processing the symbols of $w$ one by one according to the transition function.

**Example DFA:**

Consider a DFA that accepts strings over $\{0, 1\}$ that contain an even number of 0s.

*   $Q = \{q_0, q_1\}$
    *   $q_0$: Even number of 0s (initial state).
    *   $q_1$: Odd number of 0s.
*   $\Sigma = \{0, 1\}$
*   $q_0 = q_0$ (start state)
*   $F = \{q_0\}$ (accept state)
*   $\delta$:
    *   $\delta(q_0, 0) = q_1$
    *   $\delta(q_0, 1) = q_0$
    *   $\delta(q_1, 0) = q_0$
    *   $\delta(q_1, 1) = q_1$

The RE for this language is $(1^*01^*0)^*1^*$.

---

### 3. Equivalence Proof: RE to DFA

This part of the proof shows that for every Regular Expression $r$, there exists a DFA $M$ such that $L(r) = L(M)$. We prove this by induction on the structure of the RE.

**Inductive Hypothesis:** For any RE $r$ over alphabet $\Sigma$, there exists a Nondeterministic Finite Automaton (NFA) $N$ such that $L(r) = L(N)$.

**Base Cases:**

1.  **$r = \epsilon$ (Empty String):**
    *   Construct an NFA with a single state, which is both the start and accept state. No transitions are needed.
    *   $Q = \{q_0\}$, $\Sigma$, $\delta(q_0, \epsilon) = \{q_0\}$ (effectively, it accepts $\epsilon$ immediately). $F = \{q_0\}$.
    *   $L(N) = \{\epsilon\}$.

2.  **$r = \emptyset$ (Empty Language):**
    *   Construct an NFA with a single start state and no accept states. No transitions.
    *   $Q = \{q_0\}$, $\Sigma$, $\delta$ is empty. $F = \emptyset$.
    *   $L(N) = \emptyset$.

3.  **$r = a$ (a single symbol from $\Sigma$):**
    *   Construct an NFA with two states: a start state $q_0$ and an accept state $q_1$. A single transition from $q_0$ to $q_1$ on input symbol 'a'.
    *   $Q = \{q_0, q_1\}$, $\Sigma$, $\delta(q_0, a) = \{q_1\}$. $q_0$ is the start state, $F = \{q_1\}$.
    *   $L(N) = \{a\}$.

**Inductive Steps:** Assume the hypothesis holds for REs $r_1$ and $r_2$. We need to show it holds for $r_1 | r_2$, $r_1r_2$, and $r_1^*$.

1.  **Union ($r_1 | r_2$):**
    *   By IH, let $N_1 = (Q_1, \Sigma, \delta_1, q_{0,1}, F_1)$ accept $L(r_1)$ and $N_2 = (Q_2, \Sigma, \delta_2, q_{0,2}, F_2)$ accept $L(r_2)$.
    *   Construct a new NFA $N$:
        *   Add a new start state $q_{new}$.
        *   Add $\epsilon$-transitions from $q_{new}$ to the start states of $N_1$ and $N_2$ ($q_{0,1}$ and $q_{0,2}$).
        *   The accept states of $N$ are the union of accept states from $N_1$ and $N_2$ ($F_1 \cup F_2$).
        *   All other states and transitions remain the same.
    *   $N = (Q_1 \cup Q_2 \cup \{q_{new}\}, \Sigma, \delta', q_{new}, F_1 \cup F_2)$, where $\delta'$ includes $\delta_1$, $\delta_2$, and $\epsilon$-transitions: $\delta'(q_{new}, \epsilon) = \{q_{0,1}, q_{0,2}\}$.
    *   This NFA accepts strings that are in $L(r_1)$ or $L(r_2)$, thus $L(N) = L(r_1) \cup L(r_2) = L(r_1 | r_2)$.

2.  **Concatenation ($r_1 r_2$):**
    *   By IH, let $N_1 = (Q_1, \Sigma, \delta_1, q_{0,1}, F_1)$ accept $L(r_1)$ and $N_2 = (Q_2, \Sigma, \delta_2, q_{0,2}, F_2)$ accept $L(r_2)$.
    *   Construct a new NFA $N$:
        *   The start state is the start state of $N_1$ ($q_{0,1}$).
        *   The accept states of $N$ are the accept states of $N_2$ ($F_2$).
        *   Transitions from $N_1$ are preserved.
        *   For each accept state $q_f \in F_1$, add an $\epsilon$-transition from $q_f$ to the start state of $N_2$ ($q_{0,2}$).
    *   $N = (Q_1 \cup Q_2, \Sigma, \delta', q_{0,1}, F_2)$, where $\delta'$ includes $\delta_1$, $\delta_2$, and $\epsilon$-transitions: $\delta'(q_f, \epsilon) = \{q_{0,2}\}$ for all $q_f \in F_1$.
    *   This NFA accepts strings formed by concatenating a string from $L(r_1)$ (accepted by $N_1$ ending in an accept state which now triggers $N_2$) and a string from $L(r_2)$ (accepted by $N_2$), thus $L(N) = L(r_1)L(r_2) = L(r_1 r_2)$.

3.  **Kleene Star ($r_1^*$):**
    *   By IH, let $N_1 = (Q_1, \Sigma, \delta_1, q_{0,1}, F_1)$ accept $L(r_1)$.
    *   Construct a new NFA $N$:
        *   Add a new start state $q_{new}$.
        *   Add an $\epsilon$-transition from $q_{new}$ to the original start state $q_{0,1}$.
        *   Add an $\epsilon$-transition from the original start state $q_{0,1}$ to $q_{new}$ (to allow for zero or more repetitions).
        *   For each accept state $q_f \in F_1$, add an $\epsilon$-transition from $q_f$ to $q_{new}$.
        *   The new start state is $q_{new}$, and the new accept states are $F_1 \cup \{q_{new}\}$ (to accept $\epsilon$ and strings that are repetitions of accepted strings).
    *   $N = (Q_1 \cup \{q_{new}\}, \Sigma, \delta', q_{new}, F_1 \cup \{q_{new}\})$, where $\delta'$ includes $\delta_1$ and the new $\epsilon$-transitions: $\delta'(q_{new}, \epsilon) = \{q_{0,1}\}$, $\delta'(q_{0,1}, \epsilon) = \{q_{new}\}$, and $\delta'(q_f, \epsilon) = \{q_{new}\}$ for all $q_f \in F_1$.
    *   This NFA accepts strings formed by zero or more concatenations of strings in $L(r_1)$, thus $L(N) = L(r_1)^* = L(r_1^*)$.

**Conversion from NFA to DFA:**
Once we have an NFA that accepts $L(r)$, we can convert this NFA to an equivalent DFA using the **subset construction algorithm**. This algorithm guarantees that the resulting DFA accepts the exact same language as the NFA.

**Key Idea of Subset Construction:** Each state in the new DFA corresponds to a *set* of states in the NFA. The transition function of the DFA is defined by considering all possible transitions from a set of NFA states on a given input symbol, including following $\epsilon$-transitions.

**Algorithm:**
Given an NFA $N = (Q, \Sigma, \delta, q_0, F)$:
1.  The states of the DFA $M$ will be subsets of $Q$. Let $Q'$ be the set of states for $M$. Initially, $Q'$ contains only $\{q_0\}$ (or $\epsilon$-closure of $\{q_0\}$ if $\epsilon$-transitions are present).
2.  The start state of $M$ is the set containing the start state of $N$ (and any states reachable from it by $\epsilon$-transitions).
3.  For each state $S \in Q'$ (where $S$ is a set of NFA states) and each input symbol $a \in \Sigma$:
    *   The next state $S'$ in $M$ is the set of all NFA states reachable from any state in $S$ by following transitions on $a$, and then following any $\epsilon$-transitions from those resulting states. $S' = \epsilon\text{-closure}(\bigcup_{q \in S} \delta(q, a))$.
4.  A state $S \in Q'$ is an accept state in $M$ if $S$ contains at least one accept state from $N$ (i.e., $S \cap F \neq \emptyset$).

**Result:** This process generates a DFA $M$ such that $L(M) = L(N)$. Since we can construct an NFA for any RE, and any NFA can be converted to an equivalent DFA, we have shown that for every RE, there is an equivalent DFA.

*(Refer to Kozen, Chapter 3, for a detailed formal proof of NFA to DFA conversion.)*

---

### 4. Equivalence Proof: DFA to RE

This part of the proof shows that for every DFA $M$, there exists a Regular Expression $r$ such that $L(M) = L(r)$. We prove this using the **state elimination method** or by constructing a generalized nondeterministic finite automaton (GNFA) and converting it to an RE.

**Method 1: State Elimination (Conceptual Outline)**

The idea is to transform the DFA into a regular expression by systematically removing states and representing the transitions between remaining states as regular expressions.

1.  **Start with the DFA:** Consider the DFA $M = (Q, \Sigma, \delta, q_0, F)$.
2.  **Intermediate Automaton:** Imagine a generalized finite automaton where transitions can be regular expressions, not just single symbols. Initially, this would be the DFA where each transition $(q, a, q')$ is represented by the RE `a`, and for a pair of states $(q, q')$, the transition is the union of all REs for direct transitions from $q$ to $q'$.
3.  **State Elimination:** Pick an intermediate state $q_k$ (not the start or end state).
    *   For every pair of states $(q_i, q_j)$ such that there exist transitions $q_i \to q_k$ and $q_k \to q_j$:
        *   Let the RE from $q_i$ to $q_k$ be $r_{ik}$.
        *   Let the RE from $q_k$ to $q_k$ (loops) be $r_{kk}^*$.
        *   Let the RE from $q_k$ to $q_j$ be $r_{kj}$.
        *   The new transition from $q_i$ to $q_j$ will have the RE $r_{ik} r_{kk}^* r_{kj}$.
        *   The direct transition $r_{ij}$ is updated to $r_{ij} | r_{ik} r_{kk}^* r_{kj}$.
    *   Remove state $q_k$ and all transitions involving it.
4.  **Repeat:** Continue eliminating states until only the start state and accept states remain.
5.  **Final RE:** The RE from the start state to each accept state, combined with the union of these REs, forms the final regular expression for the language.

**Method 2: Generalized Nondeterministic Finite Automaton (GNFA) and Conversion**

This is a more formal and structured approach.

**Definition of GNFA:** A GNFA is a 5-tuple $(Q, \Sigma, \delta, q_{start}, q_{accept})$, where:

*   $Q$: A finite set of states.
*   $\Sigma$: The input alphabet.
*   $\delta: Q \times Q \to R$, where $R$ is the set of all regular expressions over $\Sigma$. $\delta(q_i, q_j)$ is a regular expression representing the set of strings that take the automaton from state $q_i$ to state $q_j$.
*   $q_{start} \in Q$: The start state.
*   $q_{accept} \in Q$: The unique accept state.

**Conversion of DFA to GNFA:**

1.  **Add new start and accept states:** If the original DFA has multiple accept states, introduce a new unique accept state $q_{accept}$. Add $\epsilon$-transitions from all original accept states to $q_{accept}$.
2.  **Set transitions:**
    *   For every pair of states $(q_i, q_j)$ in the original DFA:
        *   If there's a transition from $q_i$ to $q_j$ on symbol $a$, the RE in the GNFA is `a`.
        *   If there are multiple transitions from $q_i$ to $q_j$ on symbols $a_1, a_2, \dots, a_k$, the RE is $a_1 | a_2 | \dots | a_k$.
        *   If there's no transition from $q_i$ to $q_j$, the RE is $\emptyset$.
    *   For $i=j$, the RE is the union of all symbols that transition from $q_i$ to itself.

**Conversion of GNFA to RE:**

The goal is to repeatedly simplify the GNFA by eliminating states until only the start state and accept state remain, with a single transition between them representing the language.

1.  **Initialization:**
    *   If the GNFA has only two states ($q_{start}$ and $q_{accept}$), the RE is $\delta(q_{start}, q_{accept})$. If there's no direct transition, it's $\emptyset$.
    *   If there are intermediate states, pick an intermediate state $q_k$ to eliminate.
2.  **State Elimination (Transformation):** For every pair of states $(q_i, q_j)$ where $i, j \neq k$:
    *   Let $r_{ik} = \delta(q_i, q_k)$ (RE from $q_i$ to $q_k$).
    *   Let $r_{kk} = \delta(q_k, q_k)$ (RE for loops at $q_k$).
    *   Let $r_{kj} = \delta(q_k, q_j)$ (RE from $q_k$ to $q_j$).
    *   The new transition from $q_i$ to $q_j$ will be $r_{ij}' = r_{ij} | r_{ik} r_{kk}^* r_{kj}$.
    *   Update $\delta(q_i, q_j)$ with $r_{ij}'$.
    *   Remove $q_k$ and all transitions involving $q_k$.
3.  **Repeat:** Continue eliminating intermediate states until only $q_{start}$ and $q_{accept}$ remain. The final RE is $\delta(q_{start}, q_{accept})$.

*(Refer to Sipser, Chapter 1.15, and Hopcroft, Motwani, Ullman, Chapter 2.4, for detailed algorithms and proofs of GNFA conversion.)*

---

### 5. The Power of Equivalence

The proven equivalence between Regular Expressions and DFAs means that:

*   **Regular Languages are precisely the languages accepted by DFAs.**
*   **Regular Languages are precisely the languages described by Regular Expressions.**

This is a cornerstone of automata theory and has significant practical implications:

*   **Design:** If a language can be described by a simple RE, we know we can build an efficient DFA to recognize it.
*   **Analysis:** If we have a DFA, we can automatically generate an RE that describes its accepted language, which can be useful for understanding the pattern being recognized.
*   **Tooling:** Many tools (like `grep`, compilers) use REs internally, which are then often converted to finite automata for efficient pattern matching.

---

### 6. Learning Outcomes Alignment

*   **CO1: Classify a given formal language into Regular, Context-Free, Context Sensitive, Recursive or Recursively Enumerable (Knowledge Level: K2)**
    *   This topic directly addresses the classification of **Regular Languages**. By showing that REs and DFAs are equivalent, we establish that any language representable by either is definitively a regular language. If a language can be converted into a DFA or an RE, it is regular. This understanding helps in distinguishing regular languages from more complex language classes.

*   **CO2: Design finite state automata, regular grammar, and regular representations for regular languages. (Knowledge Level: K3)**
    *   This topic is central to **designing regular representations** (REs) and understanding the relationship with DFAs (which are a type of finite state automaton). We've covered how to construct DFAs from REs and conceptually how to derive REs from DFAs. This knowledge is crucial for building tools that recognize patterns.

*   **CO3: Design push-down automata and context-free grammar representations for given context-free languages. (Knowledge Level: K3)**
    *   While this topic is about regular languages, it serves as a **foundation for understanding more powerful models**. The techniques for converting between REs/NFAs/DFAs are building blocks for later learning about PDAs and CFGs. Understanding the limits of finite automata helps appreciate the need for more expressive models like PDAs for context-free languages.

*   **CO4: Design Turing machines as language acceptors or transducers. (Knowledge Level: K3)**
    *   Similar to CO3, this topic provides a **contrast** and context. The fact that REs/DFAs are limited to regular languages highlights why more complex models like Turing Machines are necessary for recognizing recursively enumerable languages.

*   **CO5: Explain the notion of decidability. (Knowledge Level: K2)**
    *   The equivalence proofs imply **decidability for properties of regular languages**. For example, we can algorithmically determine if two REs describe the same language (by converting them to DFAs and checking for DFA equivalence). We can also determine if a given string is in a regular language (by simulating the DFA).

---

### 7. Key Concepts and Definitions

*   **Regular Expression (RE):** A pattern for describing strings in a regular language.
*   **Deterministic Finite Automaton (DFA):** A state machine with a single next state for each state-input pair.
*   **Nondeterministic Finite Automaton (NFA):** A state machine that can have multiple next states for a state-input pair, and can have $\epsilon$-transitions.
*   **Subset Construction:** Algorithm to convert an NFA to an equivalent DFA.
*   **Generalized Nondeterministic Finite Automaton (GNFA):** An NFA where transitions are labeled with regular expressions.
*   **State Elimination Method:** A technique to convert a DFA (or GNFA) into an equivalent Regular Expression.
*   **Kleene's Theorem:** The theorem stating the equivalence of REs and finite automata (both deterministic and nondeterministic).

---

### 8. Important Points to Remember

*   **The equivalence is bidirectional:** RE $\iff$ DFA.
*   **NFAs are an intermediate step:** While we proved RE $\iff$ NFA, and NFA $\iff$ DFA, the practical construction of a DFA from an RE often involves first creating an NFA.
*   **Subset construction can lead to state explosion:** While an NFA might have few states, the equivalent DFA derived via subset construction can have up to $2^n$ states, where $n$ is the number of states in the NFA. However, such DFAs can often be minimized.
*   **DFA to RE conversion is algorithmic:** There are systematic procedures to perform this conversion, albeit sometimes complex.
*   **Regular languages are the "simplest" class of languages recognized by automata.**

---

### 9. Practice Questions

**Question 1:** Convert the following Regular Expression to an NFA.
$r = (a|b)^*c$

**Answer 1:**
We can build this by combining basic components:
1.  `a`: NFA with states $\{s_0, s_1\}$, transition $\delta(s_0, a) = \{s_1\}$, $F=\{s_1\}$.
2.  `b`: NFA with states $\{t_0, t_1\}$, transition $\delta(t_0, b) = \{t_1\}$, $F=\{t_1\}$.
3.  `a|b`: Create a new start state $s_{new}$ and $\epsilon$-transitions to $s_0$ and $t_0$. The accept states are $s_1$ and $t_1$. Let's call this NFA $N_{ab}$.
4.  `(a|b)*`: To make it a star, introduce a new start state $s_{star}$ and an $\epsilon$-transition to $s_{new}$. Also, add an $\epsilon$-transition from the current accept states ($s_1, t_1$) to $s_{new}$. The new start state is $s_{star}$, and the accept states are $s_{new}$ and $s_1, t_1$ (now $s_{new}$ is the sole accept state after epsilon closure). Let's call this $N_{star}$.
5.  `c`: NFA with states $\{u_0, u_1\}$, transition $\delta(u_0, c) = \{u_1\}$, $F=\{u_1\}$. Let's call this $N_c$.
6.  Concatenate $N_{star}$ and $N_c$: Make the start state of $N_{star}$ the overall start state. Make the accept states of $N_c$ the overall accept states. Add $\epsilon$-transitions from the accept states of $N_{star}$ to the start state of $N_c$.

*(Visualizing this NFA is crucial. It would have a start state, an $\epsilon$-transition to a state for `(a|b)` that can loop, and then an $\epsilon$-transition to a state for `c` which ends in an accept state.)*

**Question 2:** Consider the following DFA:
$M = (Q = \{q_0, q_1, q_2\}, \Sigma = \{0, 1\}, \delta, q_0, F = \{q_2\})$
where:
$\delta(q_0, 0) = q_0$, $\delta(q_0, 1) = q_1$
$\delta(q_1, 0) = q_1$, $\delta(q_1, 1) = q_2$
$\delta(q_2, 0) = q_2$, $\delta(q_2, 1) = q_2$

Find a Regular Expression for $L(M)$.

**Answer 2:**
This DFA accepts strings that do not contain "10".
Let's use the GNFA approach conceptually or state elimination.

**State Elimination:**
We want to eliminate $q_1$.
*   Transitions into $q_1$: $q_0 \to q_1$ on '1'.
*   Transitions out of $q_1$: $q_1 \to q_1$ on '0' or '1', and $q_1 \to q_2$ on '1'.

Consider the path $q_0 \to q_1 \to q_2$:
RE from $q_0$ to $q_1$ is `1`.
RE from $q_1$ to $q_2$ is `1`.
RE for loop at $q_1$ is `0|1`. So, $(0|1)^*$.

New transition from $q_0$ to $q_2$:
Old transition from $q_0$ to $q_2$ is $\emptyset$.
New path: $q_0 \xrightarrow{1} q_1 \xrightarrow{(0|1)^*} q_1 \xrightarrow{1} q_2$.
RE for this path: $1 (0|1)^* 1$.

So, the transition from $q_0$ to $q_2$ becomes $ \emptyset | 1(0|1)^*1 = 1(0|1)^*1 $.

Now, let's consider the direct transitions that *don't* involve $q_1$.
$q_0 \to q_0$ on '0'.
$q_2 \to q_2$ on '0' or '1'.

After eliminating $q_1$, we have states $q_0$ and $q_2$.
*   Transition $q_0 \to q_0$: remains '0'. Let's call this $r_{00} = 0$.
*   Transition $q_0 \to q_2$: newly calculated as $r_{02} = 1(0|1)^*1$.
*   Transition $q_2 \to q_2$: remains '0|1'. Let's call this $r_{22} = 0|1$.

Now we have a GNFA with states $\{q_0, q_2\}$, start $q_0$, accept $q_2$.
The transitions are:
$\delta(q_0, q_0) = 0$
$\delta(q_0, q_2) = 1(0|1)^*1$
$\delta(q_2, q_0) = \emptyset$
$\delta(q_2, q_2) = 0|1$

We want the RE from $q_0$ to $q_2$.
We can think of this as: strings that start with any number of '0's ($0^*$) followed by the path $1(0|1)^*1$, possibly followed by loops at $q_2$.

A simpler approach:
Any string in $L(M)$ must not contain "10".
This means any '1' must be followed by '1' or the end of the string.
Strings are of the form: $0^* (11^*)^*$.
Let's check:
*   `000`: $0^* \to q_0$ (0) $\to q_0$ (0) $\to q_0$. Accept. RE: $0^*$.
*   `11`: $0^* \to q_0$ (no 0s) $\to q_0 \xrightarrow{1} q_1 \xrightarrow{1} q_2$. Accept. RE: $1(0|1)^*1$ part.
*   `0110`: $0^* \to q_0$ (0) $\to q_0 \xrightarrow{1} q_1 \xrightarrow{1} q_2 \xrightarrow{0} q_2$. Accept. RE: $0^*1(0|1)^*1$.

The RE is indeed $0^* (11^*)^*$.

**Question 3:** True or False: The set of all strings of balanced parentheses (e.g., "(()())", "()(())") is a regular language. Explain why or why not.

**Answer 3:**
False.
The set of balanced parentheses is a classic example of a language that is **context-free but not regular**.
Regular languages can be recognized by finite automata, which have a finite memory (the current state). To check for balanced parentheses, you need to keep track of the "depth" of nested parentheses, which requires a potentially unbounded number of states or a stack. A finite automaton cannot count to an arbitrary depth. Therefore, it cannot recognize this language.

---
