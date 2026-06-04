---
title: "Equivalence of RGs and DFA."
subject: "THEORY OF COMPUTATION"
module: "Module 1: Introduction to formal language theory– Alphabets"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35f13"
status: "completed"
scrapedAt: "2026-05-23T16:19:28.532Z"
---
## THEORY OF COMPUTATION: Module 1: Introduction to Formal Language Theory – Alphabets

### Topic: Equivalence of Regular Expressions (REs) and Deterministic Finite Automata (DFAs)

---

**Learning Outcomes Covered in this Topic:**

*   **Understanding the relationship between regular expressions and finite automata:** This topic directly addresses how regular expressions can be converted into equivalent finite automata (specifically DFAs and NFAs), and vice-versa, demonstrating their equivalence in defining regular languages.
*   **Designing finite state automata for regular languages:** While the primary focus is equivalence, the conversion processes inherently involve designing automata.
*   **Designing regular grammar representations for regular languages:** Though not directly covered by RE to DFA conversion, understanding REs is a prerequisite for regular grammars, and the equivalence implies a deeper connection.
*   **Classifying formal languages:** By understanding what regular expressions and DFAs can define, we solidify our understanding of regular languages.

---

**Course Outcomes Alignment:**

*   **CO1: Classify a given formal language into Regular... (Knowledge Level: K2):** This topic is foundational for recognizing and classifying regular languages. Understanding that REs and DFAs define the same set of languages is crucial for this classification.
*   **CO2: Design finite state automata, regular grammar, and regular representations for regular languages. (Knowledge Level: K3):** The core of this topic lies in the constructive algorithms to convert between REs and DFAs, directly fulfilling the "design finite state automata" aspect.

---

### 1. Introduction: The Power of Regular Expressions and DFAs

In the study of formal language theory, **Regular Expressions (REs)** and **Deterministic Finite Automata (DFAs)** are two fundamental tools used to describe and recognize **regular languages**. A fundamental result in automata theory is that these two formalisms are equivalent in their expressive power. This means that any language that can be described by a regular expression can also be recognized by a DFA, and conversely, any language recognized by a DFA can be described by a regular expression.

This equivalence is not merely theoretical; it provides practical methods for converting between these representations. This allows us to leverage the strengths of each. REs are often more concise and easier to write for many patterns, while DFAs are excellent for implementation and analysis.

**Key Concept:** **Equivalence of Regular Expressions and DFAs**

Two languages $L_1$ and $L_2$ are equivalent if $L_1 = L_2$. In this context, we are interested in showing that the set of languages described by REs is exactly the same as the set of languages recognized by DFAs.

---

### 2. Converting Regular Expressions to Finite Automata

The process of converting a regular expression into an equivalent finite automaton is constructive and typically involves an intermediate step of constructing a **Non-deterministic Finite Automaton (NFA)** with $\epsilon$-transitions (also known as an $\epsilon$-NFA). This $\epsilon$-NFA can then be converted into a DFA using standard subset construction algorithms.

**Theorem:** For every regular expression $R$, there exists an NFA (specifically, an $\epsilon$-NFA) $M$ such that $L(R) = L(M)$.

**Construction Algorithm (Thompson's Construction):**

Thompson's construction provides a systematic way to build an $\epsilon$-NFA for any regular expression. The construction is inductive, based on the structure of the regular expression:

*   **Base Cases:**
    *   **For the empty string, $\epsilon$**: An $\epsilon$-NFA with two states, $q_0$ and $q_1$, where $q_0$ is the start state and $q_1$ is the accept state. There is an $\epsilon$-transition from $q_0$ to $q_1$.
        *   States: $\{q_0, q_1\}$
        *   Alphabet: $\Sigma$
        *   Transitions: $\delta(q_0, \epsilon) = \{q_1\}$
        *   Start State: $q_0$
        *   Accept States: $\{q_1\}$
    *   **For a single symbol $a \in \Sigma$**: An $\epsilon$-NFA with two states, $q_0$ and $q_1$. $q_0$ is the start state, $q_1$ is the accept state, and there is a transition from $q_0$ to $q_1$ on input symbol $a$.
        *   States: $\{q_0, q_1\}$
        *   Alphabet: $\Sigma$
        *   Transitions: $\delta(q_0, a) = \{q_1\}$
        *   Start State: $q_0$
        *   Accept States: $\{q_1\}$

*   **Inductive Steps (for composite REs):** If we have $\epsilon$-NFAs $M_1$ and $M_2$ for regular expressions $R_1$ and $R_2$ respectively, we can construct an $\epsilon$-NFA for $R_1 R_2$, $R_1 + R_2$, and $R_1^*$:

    *   **Concatenation ($R_1 R_2$)**:
        1.  Let $M_1$ have start state $s_1$ and accept state $a_1$.
        2.  Let $M_2$ have start state $s_2$ and accept state $a_2$.
        3.  Create a new $\epsilon$-NFA by combining the states and transitions of $M_1$ and $M_2$.
        4.  Add an $\epsilon$-transition from $a_1$ to $s_2$.
        5.  The start state of the new automaton is $s_1$.
        6.  The accept state of the new automaton is $a_2$.

    *   **Union/Alternation ($R_1 + R_2$)**:
        1.  Create a new start state $s_{new}$.
        2.  Add $\epsilon$-transitions from $s_{new}$ to the start states of $M_1$ ($s_1$) and $M_2$ ($s_2$).
        3.  Let $a_1$ be the accept state of $M_1$ and $a_2$ be the accept state of $M_2$.
        4.  Add $\epsilon$-transitions from $a_1$ and $a_2$ to a new accept state $a_{new}$.
        5.  The new automaton has states from $M_1$, $M_2$, $s_{new}$, and $a_{new}$.
        6.  The start state is $s_{new}$.
        7.  The accept state is $a_{new}$.

    *   **Kleene Star ($R^*$):**
        1.  Create a new start state $s_{new}$ and a new accept state $a_{new}$.
        2.  Add an $\epsilon$-transition from $s_{new}$ to $a_{new}$ (for the empty string case).
        3.  Add an $\epsilon$-transition from $s_{new}$ to the start state of $M_1$ ($s_1$).
        4.  Add an $\epsilon$-transition from the accept state of $M_1$ ($a_1$) to $s_1$ (for repetition).
        5.  Add an $\epsilon$-transition from $a_1$ to $a_{new}$ (to exit the loop).
        6.  The new automaton has states from $M_1$, $s_{new}$, and $a_{new}$.
        7.  The start state is $s_{new}$.
        8.  The accept state is $a_{new}$.

**Example: Constructing an $\epsilon$-NFA for $R = (a+b)^*$ **

1.  **For $a$**: $\epsilon$-NFA $M_a$
    *   States: $\{q_{a0}, q_{a1}\}$
    *   Transitions: $\delta(q_{a0}, a) = \{q_{a1}\}$
    *   Start: $q_{a0}$, Accept: $q_{a1}$

2.  **For $b$**: $\epsilon$-NFA $M_b$
    *   States: $\{q_{b0}, q_{b1}\}$
    *   Transitions: $\delta(q_{b0}, b) = \{q_{b1}\}$
    *   Start: $q_{b0}$, Accept: $q_{b1}$

3.  **For $a+b$**: Combine $M_a$ and $M_b$ using the union rule.
    *   New start $s_1$, new accept $a_1$.
    *   $\epsilon$-transitions: $s_1 \to q_{a0}$, $s_1 \to q_{b0}$, $q_{a1} \to a_1$, $q_{b1} \to a_1$.
    *   States: $\{s_1, q_{a0}, q_{a1}, q_{b0}, q_{b1}, a_1\}$
    *   Start: $s_1$, Accept: $\{a_1\}$

4.  **For $(a+b)^*$ **: Apply the Kleene star rule to the automaton for $a+b$.
    *   Let the automaton for $a+b$ be $M_{a+b}$ with start $s_{a+b}$ and accept $a_{a+b}$.
    *   New start $s_{new}$, new accept $a_{new}$.
    *   $\epsilon$-transitions:
        *   $s_{new} \to a_{new}$ (for $\epsilon$)
        *   $s_{new} \to s_{a+b}$ (enter the loop)
        *   $a_{a+b} \to s_{a+b}$ (repeat the loop)
        *   $a_{a+b} \to a_{new}$ (exit the loop)
    *   The resulting automaton will have states from $M_{a+b}$ plus $s_{new}$ and $a_{new}$. This $\epsilon$-NFA recognizes $(a+b)^*$.

**Conversion of $\epsilon$-NFA to DFA (Subset Construction):**

Once we have an $\epsilon$-NFA, we can convert it into an equivalent DFA using the subset construction.

1.  **States of DFA:** Each state in the DFA corresponds to a set of states in the $\epsilon$-NFA.
2.  **Start State of DFA:** The start state of the DFA is the set of all states reachable from the $\epsilon$-NFA's start state by following $\epsilon$-transitions (including the start state itself). This is often denoted as $ECLOSE(s_0)$, where $s_0$ is the start state of the $\epsilon$-NFA.
3.  **Transitions of DFA:** For a state $Q$ (a set of $\epsilon$-NFA states) in the DFA and an input symbol $a$, the DFA transitions to a state $P$ such that $P$ is the set of all states reachable from any state in $Q$ by following a transition on $a$ and then any number of $\epsilon$-transitions.
    *   $\delta_{DFA}(Q, a) = ECLOSE(\bigcup_{q \in Q} \delta_{NFA}(q, a))$
    *   $ECLOSE(S) = \{p \mid p \text{ is reachable from some } s \in S \text{ by 0 or more } \epsilon \text{-transitions}\}$
4.  **Accept States of DFA:** A state $Q$ in the DFA is an accept state if at least one of the states in the set $Q$ is an accept state in the $\epsilon$-NFA.

**Important Note:** The resulting DFA might have more states than the minimal DFA. Minimization algorithms can be applied afterwards.

---

### 3. Converting Deterministic Finite Automata to Regular Expressions

The process of converting a DFA to an equivalent regular expression is also constructive, but it is generally more complex than the RE to NFA conversion. Several algorithms exist, one of the most common being the **Generalized State Elimination Method**.

**Theorem:** For every DFA $M$, there exists a regular expression $R$ such that $L(M) = L(R)$.

**Construction Algorithm (Generalized State Elimination Method):**

This method involves systematically eliminating states from the DFA and replacing them with equivalent regular expressions for the transitions.

1.  **Initialization:**
    *   Start with a DFA $M = (Q, \Sigma, \delta, q_0, F)$.
    *   We want to find a regular expression for the language accepted by $M$.
    *   To simplify the process, we can augment the DFA:
        *   Add a new start state $q_{start}$ with an $\epsilon$-transition to the original start state $q_0$.
        *   Add a new accept state $q_{accept}$ with $\epsilon$-transitions from all original accept states $F$ to $q_{accept}$.
    *   Now, we have a single start state ($q_{start}$) and a single accept state ($q_{accept}$). All other states are intermediate.

2.  **Generalized Transition Sets:**
    *   For every pair of states $(q_i, q_j)$, define $R_{ij}^{(k)}$ as the regular expression representing all strings that take the automaton from state $q_i$ to state $q_j$ using only states from $\{q_0, q_1, \dots, q_{k-1}\}$ as intermediate states. The index $k$ refers to the states being considered, and the states are typically indexed from 0 to $n-1$ (where $n$ is the number of states).

3.  **Recursive Formula:** The core of the algorithm is a recursive formula to compute $R_{ij}^{(k)}$:

    *   **Base Case (k=0):**
        *   If $i = j$: $R_{ii}^{(0)} = \epsilon$ (to stay in the same state, no transitions needed).
        *   If there is a direct transition from $q_i$ to $q_j$ on symbol $a$ (and $i \neq j$): $R_{ij}^{(0)} = a$.
        *   If there is no direct transition from $q_i$ to $q_j$ (and $i \neq j$): $R_{ij}^{(0)} = \emptyset$ (the empty language, represented by an empty string $\lambda$ or just $\emptyset$ in some notations, but often handled by ensuring $R_{ij}^{(0)}$ is a valid RE). A more precise way is to say it is the union of all single symbols that transition from $q_i$ to $q_j$. If no such symbol exists, it's $\emptyset$.

    *   **Recursive Step (for $k > 0$):**
        $R_{ij}^{(k)} = R_{ij}^{(k-1)} + R_{ik}^{(k-1)} (R_{kk}^{(k-1)})^* R_{kj}^{(k-1)}$

        This formula means: a path from $q_i$ to $q_j$ using states up to $q_{k-1}$ either:
        *   Does not use $q_{k-1}$ as an intermediate state ($R_{ij}^{(k-1)}$).
        *   Or, it goes from $q_i$ to $q_{k-1}$ (using states up to $q_{k-2}$), then stays in $q_{k-1}$ any number of times (using only states up to $q_{k-2}$ within the loop), and then goes from $q_{k-1}$ to $q_j$ (using states up to $q_{k-2}$).

4.  **Final Result:** After iterating through all states to be eliminated (let's say $n$ states, indexed $0$ to $n-1$), the regular expression for the language accepted by the DFA is $R_{start, accept}^{(n)}$.

**Alternative Approach: Algebraic Manipulation (Arden's Lemma)**

Arden's Lemma provides a way to solve equations of the form $X = AX + B$, where $X$ is an unknown regular expression, and $A$ and $B$ are known regular expressions. The lemma states that if $A$ does not contain $\epsilon$, then the unique solution for $X$ is $X = A^*B$.

This lemma can be used to convert DFAs to REs by setting up a system of equations for the regular expressions representing the set of strings that reach each state from the start state.

Let $S_i$ be the regular expression for the set of strings that take the DFA from the start state $q_0$ to state $q_i$.
For each state $q_j$:
$S_j = \sum_{q_i \in Q, a \in \Sigma \text{ s.t. } \delta(q_i, a) = q_j} S_i \cdot a \quad (\text{if } q_0 = q_j)$
$S_j = \sum_{q_i \in Q, a \in \Sigma \text{ s.t. } \delta(q_i, a) = q_j} S_i \cdot a + \epsilon \quad (\text{if } q_0 = q_j)$
$S_j = \sum_{q_i \in Q, a \in \Sigma \text{ s.t. } \delta(q_i, a) = q_j} S_i \cdot a \quad (\text{if } q_0 \neq q_j)$

This forms a system of linear equations in terms of regular expressions. We can then use algebraic manipulation and Arden's Lemma to solve for $S_i$ for all $i$. The final regular expression for the language is the union of $S_f$ for all final states $f$.

**Example: Converting a DFA to an RE using State Elimination**

Consider a DFA $M$ that accepts strings over $\{a,b\}$ with an even number of $a$'s.

*   States: $Q = \{q_0, q_1\}$, where $q_0$ is the start state and is also an accept state (even $a$'s), and $q_1$ is the non-accept state (odd $a$'s).
*   Alphabet: $\Sigma = \{a, b\}$
*   Transitions:
    *   $\delta(q_0, a) = q_1$
    *   $\delta(q_0, b) = q_0$
    *   $\delta(q_1, a) = q_0$
    *   $\delta(q_1, b) = q_1$
*   Start State: $q_0$
*   Accept States: $F = \{q_0\}$

Let's re-index states for the algorithm: $q_0 \to q_1$, $q_1 \to q_2$.
Augmented DFA: Start $q_0$, accept $q_1$.
States: $\{q_0, q_1, q_2\}$, where $q_0$ is dummy start, $q_1$ is original start/accept, $q_2$ is original non-accept.
Original states: $Q' = \{q_1, q_2\}$. Transition on $q_1$ to $q_2$ on 'a', $q_1$ to $q_1$ on 'b', $q_2$ to $q_1$ on 'a', $q_2$ to $q_2$ on 'b'.

Let's stick to the original states $q_0, q_1$ and use state elimination directly. We want to eliminate $q_1$.
States: $q_0, q_1$.
$R_{00}^{(0)}$ (from $q_0$ to $q_0$ without intermediate states): $b$ (direct transition from $q_0$ to $q_0$ on 'b').
$R_{01}^{(0)}$ (from $q_0$ to $q_1$ without intermediate states): $a$ (direct transition from $q_0$ to $q_1$ on 'a').
$R_{10}^{(0)}$ (from $q_1$ to $q_0$ without intermediate states): $a$ (direct transition from $q_1$ to $q_0$ on 'a').
$R_{11}^{(0)}$ (from $q_1$ to $q_1$ without intermediate states): $b$ (direct transition from $q_1$ to $q_1$ on 'b').

Now, let's eliminate $q_1$ to find $R_{00}^{(1)}$ (path from $q_0$ to $q_0$ using $q_1$ as intermediate).
Using the formula: $R_{ij}^{(k)} = R_{ij}^{(k-1)} + R_{ik}^{(k-1)} (R_{kk}^{(k-1)})^* R_{kj}^{(k-1)}$
Here $k=1$, index $1$ corresponds to $q_1$.
We want $R_{00}^{(1)}$:
$R_{00}^{(1)} = R_{00}^{(0)} + R_{01}^{(0)} (R_{11}^{(0)})^* R_{10}^{(0)}$
$R_{00}^{(1)} = b + a (b)^* a$
$R_{00}^{(1)} = b + aba^*$

Since $q_0$ is the start and accept state, the final RE is $R_{00}^{(1)}$.
So, the RE is $(b + aba)^*$. Let's verify.

Example strings:
*   $\epsilon$: Accepted by $b^*$. Yes.
*   $aa$: Not accepted. $b+aba$ requires one $a$. $a(b)^*a$ requires two $a$s. $b+aba$ takes $q_0 \xrightarrow{a} q_1 \xrightarrow{b} q_1 \xrightarrow{a} q_0$. $b$ takes $q_0 \xrightarrow{b} q_0$. $a(b)^*a$ takes $q_0 \xrightarrow{a} q_1 \xrightarrow{b^* \text{ (e.g. } \epsilon \text{)}} q_1 \xrightarrow{a} q_0$. So $b+aba^*$ means $b$ takes $q_0 \to q_0$, $aba^*$ takes $q_0 \to q_1 \to q_1 \to q_0$. Correct.
    The RE is $(b + aba)^*$.
    Let's trace $aa$:
    $(b+aba)^*$
    The string $aa$ is not of the form $b$ or $aba$. So it cannot be formed by repetition of these.
    Let's re-evaluate the states and transitions.

The standard states for "even number of a's" are:
$q_0$: Even number of $a$'s (start and accept).
$q_1$: Odd number of $a$'s.

$\delta(q_0, a) = q_1$
$\delta(q_0, b) = q_0$
$\delta(q_1, a) = q_0$
$\delta(q_1, b) = q_1$

Let's use Arden's Lemma for this example.
Let $S_0$ be the RE for strings that reach $q_0$.
Let $S_1$ be the RE for strings that reach $q_1$.

From $q_0$:
$S_0 = \epsilon$ (for initial state) $+ S_0 \cdot b$ (stay in $q_0$ via $b$) $+ S_1 \cdot a$ (reach $q_0$ from $q_1$ via $a$)
$S_0 = \epsilon + S_0 b + S_1 a$

From $q_1$:
$S_1 = S_0 \cdot a$ (reach $q_1$ from $q_0$ via $a$) $+ S_1 \cdot b$ (stay in $q_1$ via $b$)
$S_1 = S_0 a + S_1 b$

Now solve the system:
From $S_1 = S_0 a + S_1 b$:
$S_1 = (S_0 a)(b)^* = S_0 ab^*$ (using Arden's Lemma $X = AX + B \implies X = A^*B$, here $X=S_1, A=b, B=S_0a$)

Substitute $S_1$ into the equation for $S_0$:
$S_0 = \epsilon + S_0 b + (S_0 ab^*) a$
$S_0 = \epsilon + S_0 b + S_0 ab^*a$
$S_0 = \epsilon + S_0 (b + ab^*a)$

Now, apply Arden's Lemma to $S_0$: $X = \epsilon + XA \implies X = A^*$. Here $X=S_0, A=b+ab^*a$.
So, $S_0 = (b + ab^*a)^*$.

The language is accepted by $q_0$, so the RE for the language is $S_0$.
Thus, the RE is $(b + ab^*a)^*$.

Let's trace this RE for "aa":
$(b + ab^*a)^*$.
The components are $b$ and $ab^*a$.
$b$: $q_0 \to q_0$.
$ab^*a$: $q_0 \xrightarrow{a} q_1 \xrightarrow{b^*} q_1 \xrightarrow{a} q_0$.
So, $(b + ab^*a)^*$ means zero or more repetitions of either $b$ or $ab^*a$.
For "aa":
$q_0 \xrightarrow{a} q_1 \xrightarrow{a} q_0$. This is a path of length 2 with two $a$'s.
The RE $(b + ab^*a)^*$ implies that any sequence of $b$'s or $ab^*a$ sequences is accepted.
$a$: Not in $b$ or $ab^*a$.
$aa$: Not in $b$ or $ab^*a$.
$ab$: $q_0 \xrightarrow{a} q_1 \xrightarrow{b} q_1$. Not accepted.

My example RE for "even number of a's" seems incorrect for the standard DFA. Let's re-verify the example:
DFA for even $a$'s:
$q_0$ (even, start, accept)
$q_1$ (odd, not accept)

$q_0 \xrightarrow{a} q_1$
$q_0 \xrightarrow{b} q_0$
$q_1 \xrightarrow{a} q_0$
$q_1 \xrightarrow{b} q_1$

Let's try to derive the RE using state elimination on the original states $q_0, q_1$. We want to eliminate $q_1$.
Original states: $q_0, q_1$.
$R_{00}^{(0)}$ (from $q_0$ to $q_0$ without intermediate states): $b$ (direct $q_0 \to q_0$ on $b$).
$R_{01}^{(0)}$ (from $q_0$ to $q_1$ without intermediate states): $a$ (direct $q_0 \to q_1$ on $a$).
$R_{10}^{(0)}$ (from $q_1$ to $q_0$ without intermediate states): $a$ (direct $q_1 \to q_0$ on $a$).
$R_{11}^{(0)}$ (from $q_1$ to $q_1$ without intermediate states): $b$ (direct $q_1 \to q_1$ on $b$).

Now eliminate $q_1$ ($k=1$). We want $R_{00}^{(1)}$ (path from $q_0$ to $q_0$ through $q_1$).
$R_{00}^{(1)} = R_{00}^{(0)} + R_{01}^{(0)} (R_{11}^{(0)})^* R_{10}^{(0)}$
$R_{00}^{(1)} = b + a (b)^* a$
$R_{00}^{(1)} = b + ab^*a$

The accept state is $q_0$. So the RE is $R_{00}^{(1)}$.
The RE should be $(b + ab^*a)^*$.

Wait, the standard RE for even number of $a$'s is $(b^*ab^*ab^*)^*b^*$. Or more simply, $(b^*ab^*ab^*ab^*)^*b^*$.
Let's check the logic of the state elimination.

The issue might be in how the intermediate states are defined. Let's reconsider the setup.
The formula $R_{ij}^{(k)}$ represents paths from $q_i$ to $q_j$ using intermediate states from $\{q_0, \dots, q_{k-1}\}$.

Let's re-index the states of the DFA for even $a$'s: $q_0$ (original start/accept) $\to q_1$, $q_1$ (original non-accept) $\to q_2$.
So, $Q = \{q_1, q_2\}$, $q_0 = q_1$, $F = \{q_1\}$.
We introduce a dummy start state $q_0$ and an $\epsilon$-transition to $q_1$.
New states: $Q' = \{q_0, q_1, q_2\}$.
Transitions:
$\delta(q_0, \epsilon) = \{q_1\}$
$\delta(q_1, a) = q_2$
$\delta(q_1, b) = q_1$
$\delta(q_2, a) = q_1$
$\delta(q_2, b) = q_2$

Now we want to find the RE from $q_0$ to $q_1$.
First, we need to convert this to a regular graph where each edge is a regular expression, and there are no $\epsilon$-transitions. This can be done by considering paths.
However, the state elimination method is usually applied to DFAs directly.

Let's retry the example with states labeled $q_0, q_1$.
$q_0$: start, accept.
$q_1$: not accept.
$a: q_0 \to q_1$, $q_1 \to q_0$
$b: q_0 \to q_0$, $q_1 \to q_1$

We want the RE for paths from $q_0$ to $q_0$.
Let $R_{ij}$ be the set of strings that go from $q_i$ to $q_j$.

We can set up equations:
$R_{00}$: from $q_0$ to $q_0$.
$R_{00} = R_{00} \cdot b \quad (\text{staying on } q_0 \text{ with } b)$
$+ R_{01} \cdot a \quad (\text{going from } q_1 \text{ to } q_0 \text{ with } a)$
$+ \epsilon \quad (\text{staying at } q_0 \text{ initially})$
$R_{00} = \epsilon + R_{00} b + R_{01} a$

$R_{01}$: from $q_0$ to $q_1$.
$R_{01} = R_{00} \cdot a \quad (\text{going from } q_0 \text{ to } q_1 \text{ with } a)$
$+ R_{01} \cdot b \quad (\text{staying on } q_1 \text{ with } b)$
$R_{01} = R_{00} a + R_{01} b$

$R_{10}$: from $q_1$ to $q_0$.
$R_{10} = R_{10} \cdot b \quad (\text{staying on } q_1 \text{ with } b)$
$+ R_{11} \cdot a \quad (\text{going from } q_0 \text{ to } q_1 \text{ with } a)$ - Error in this line of reasoning. It should be from state $q_1$.
The equations should be:
For state $q_i$: $\sum_{\text{transitions into } q_i} (\text{regex for path to source state}) \cdot (\text{input symbol})$

Let $S_0$ be RE for strings ending in $q_0$, starting from $q_0$.
Let $S_1$ be RE for strings ending in $q_1$, starting from $q_0$.

$S_0 = \epsilon$ (start in $q_0$)
    $+ S_0 \cdot b$ (from $q_0$ to $q_0$ via $b$)
    $+ S_1 \cdot a$ (from $q_1$ to $q_0$ via $a$)
$S_0 = \epsilon + S_0 b + S_1 a$

$S_1 = S_0 \cdot a$ (from $q_0$ to $q_1$ via $a$)
    $+ S_1 \cdot b$ (from $q_1$ to $q_1$ via $b$)
$S_1 = S_0 a + S_1 b$

This is the same system as before.
$S_1 = S_0 ab^*$
$S_0 = \epsilon + S_0 b + S_0 ab^* a = \epsilon + S_0 (b + ab^*a)$
$S_0 = (b + ab^*a)^*$

The RE for the language is $S_0$ because $q_0$ is the accept state.
So the RE is $(b + ab^*a)^*$.
Let's re-test strings:
$\epsilon$: $(b+ab^*a)^*$ accepts $\epsilon$. Correct.
$b$: accepted by $b$. Correct.
$bb$: accepted by $b \cdot b$. Correct.
$aba$: accepted by $aba^*$. Correct.
$ababa$: accepted by $aba \cdot aba$. Correct.
$ababb$: accepted by $aba \cdot b$. Correct.
$bab$: accepted by $b \cdot aba$. Correct.
$aa$: $q_0 \xrightarrow{a} q_1 \xrightarrow{a} q_0$. This is allowed. The RE $(b + ab^*a)^*$ should accept $aa$.
But $aa$ is not in $b$ and not in $ab^*a$. So $(b+ab^*a)^*$ does not accept $aa$.

This indicates that either my understanding of the DFA or the RE is flawed, or the construction method needs careful application.
Let's check a reliable source for the RE of even $a$'s.
According to Sipser (2013), the RE for even $a$'s is $(b^*ab^*ab^*)^*b^*$.

Where is the discrepancy? The state elimination method requires a specific structure or careful setup.

Let's use the state elimination method from Kozen (1999) on the DFA for even $a$'s.
States $q_0, q_1$. $q_0$ is start and accept.
Assume states are indexed $q_0, q_1$. $n=2$.
We want $R_{00}^{(2)}$.

$k=0$ (no intermediate states):
$R_{00}^{(0)} = \epsilon$ (base case for $i=j$)
$R_{01}^{(0)} = a$ (direct transition $q_0 \to q_1$)
$R_{10}^{(0)} = a$ (direct transition $q_1 \to q_0$)
$R_{11}^{(0)} = b$ (direct transition $q_1 \to q_1$)

$k=1$ (intermediate state $q_0$):
$R_{00}^{(1)} = R_{00}^{(0)} + R_{00}^{(0)} (R_{00}^{(0)})^* R_{00}^{(0)} = \epsilon + \epsilon (\epsilon)^* \epsilon = \epsilon$
$R_{01}^{(1)} = R_{01}^{(0)} + R_{00}^{(0)} (R_{00}^{(0)})^* R_{01}^{(0)} = a + \epsilon (\epsilon)^* a = a$
$R_{10}^{(1)} = R_{10}^{(0)} + R_{00}^{(0)} (R_{00}^{(0)})^* R_{01}^{(0)} = a + \epsilon (\epsilon)^* a = a$  -> Incorrect application of formula
The formula is $R_{ij}^{(k)} = R_{ij}^{(k-1)} + R_{ik}^{(k-1)} (R_{kk}^{(k-1)})^* R_{kj}^{(k-1)}$
Indices are $i,j,k$. Here $k=1$ referring to state $q_0$.
$R_{00}^{(1)} = R_{00}^{(0)} + R_{01}^{(0)} (R_{11}^{(0)})^* R_{10}^{(0)}$  -> This is wrong. $k$ refers to the state being eliminated. If we are eliminating $q_0$, then $k=0$.

Let's re-index states:
$q_0 \to 0$
$q_1 \to 1$
Start state: $0$. Accept state: $0$.
$R_{00}^{(0)} = \epsilon$
$R_{01}^{(0)} = a$
$R_{10}^{(0)} = a$
$R_{11}^{(0)} = b$

Now, we need to convert to a DFA with a single start state and a single accept state.
Let's use the $S_i$ method again. It's more robust.

The issue with $(b+ab^*a)^*$ for even $a$'s is that it seems to miss strings like $aa$.
$aa$ in the DFA: $q_0 \xrightarrow{a} q_1 \xrightarrow{a} q_0$. This is a valid path.
So the RE must accept $aa$.

Let's re-examine the $S_0, S_1$ equations and Arden's Lemma.
$S_0 = \epsilon + S_0 b + S_1 a$
$S_1 = S_0 a + S_1 b$

$S_1 = S_0 a b^*$

Substitute into $S_0$:
$S_0 = \epsilon + S_0 b + (S_0 a b^*) a$
$S_0 = \epsilon + S_0 b + S_0 a b^* a$
$S_0 = \epsilon + S_0 (b + a b^* a)$

Using Arden's Lemma $X = A + X B \implies X = A B^*$
Here, $S_0 = \epsilon + S_0 (b + a b^* a)$.
So $A = \epsilon$ and $B = (b + a b^* a)$.
$S_0 = \epsilon (b + a b^* a)^* = (b + a b^* a)^*$.

I am consistently getting this result. Let me trace a simple case:
$R = a$. DFA: $q_0 \xrightarrow{a} q_1$. Start $q_0$, accept $q_1$.
$S_0 = \epsilon$
$S_1 = S_0 a = \epsilon a = a$.
Language RE is $S_1 = a$. Correct.

$R = a+b$. DFA:
$q_0 \xrightarrow{a} q_1$, $q_0 \xrightarrow{b} q_2$.
$q_1, q_2$ are accept states.
$S_0 = \epsilon$
$S_1 = S_0 a = a$
$S_2 = S_0 b = b$
Language RE is $S_1 + S_2 = a+b$. Correct.

$R = ab$. DFA: $q_0 \xrightarrow{a} q_1 \xrightarrow{b} q_2$. Start $q_0$, accept $q_2$.
$S_0 = \epsilon$
$S_1 = S_0 a = a$
$S_2 = S_1 b = (a) b = ab$.
Language RE is $S_2 = ab$. Correct.

$R = a^*$. DFA: $q_0 \xrightarrow{a} q_0$, $q_0 \xrightarrow{\epsilon} q_1$ (accept state).
$S_0 = \epsilon + S_0 a$
$S_1 = S_0 \epsilon = S_0$ (from $S_0$ to accept state $q_1$)
From $S_0 = \epsilon + S_0 a$, using Arden's Lemma ($X = A + X B \implies X = AB^*$)
$S_0 = \epsilon a^* = a^*$.
Language RE is $S_1 = S_0 = a^*$. Correct.

So the method seems correct. The issue might be in my manual derivation of the DFA or its expected RE for the "even $a$'s" example.

Let's re-examine the even $a$'s DFA:
$q_0$ (even $a$'s, start, accept)
$q_1$ (odd $a$'s, not accept)

$q_0 \xrightarrow{a} q_1$
$q_0 \xrightarrow{b} q_0$
$q_1 \xrightarrow{a} q_0$
$q_1 \xrightarrow{b} q_1$

Consider string $aa$:
$q_0 \xrightarrow{a} q_1 \xrightarrow{a} q_0$. $q_0$ is an accept state. So $aa$ is accepted.
The RE must accept $aa$.

The derived RE is $(b + ab^*a)^*$.
Can $aa$ be generated by this RE?
The RE is a repetition of either $b$ or $ab^*a$.
$b$ generates strings with only $b$'s.
$ab^*a$: $a$ followed by any number of $b$'s followed by $a$. E.g., $aa, aba, abba, abbbba$.
So the set of strings generated by $b+ab^*a$ is $\{b, aa, aba, abba, \dots\}$.
The Kleene star $(b+ab^*a)^*$ means repeating any of these.
So, $(b+ab^*a)^*$ can generate $aa \cdot aa = aaaa$.
It can generate $aa \cdot aba = aaba$.
It can generate $aba \cdot aa = abaaa$.
It can generate $b \cdot aa = baa$.

But it cannot generate $aa$ itself directly.
The problem is that the $S_i$ equations are based on *what strings lead to state $q_i$*.
$S_0$ is the set of strings that take the automaton from $q_0$ to $q_0$.
$S_1$ is the set of strings that take the automaton from $q_0$ to $q_1$.

$S_0 = \epsilon$ (empty string reaches $q_0$)
$+ S_0 \cdot b$ (if string $w$ reaches $q_0$, then $w \cdot b$ reaches $q_0$)
$+ S_1 \cdot a$ (if string $w'$ reaches $q_1$, then $w' \cdot a$ reaches $q_0$)

This part is correct.
The solution $S_0 = (b + ab^*a)^*$ implies that to reach $q_0$ from $q_0$, you must take a path consisting of zero or more blocks of ($b$) or ($ab^*a$).

This implies that $aa$ should be generated by $ab^*a$.
$ab^*a$ generates $a \cdot b^* \cdot a$.
If $b^*$ is empty string $\epsilon$, then $ab^*a$ generates $aa$.
So, $aa$ is indeed in $ab^*a$.
And therefore, $aa$ is in $(b+ab^*a)^*$.

My earlier test was incorrect. The RE $(b+ab^*a)^*$ correctly represents the language of strings with an even number of $a$'s.

**Summary of Conversions:**

*   **RE to NFA ($\epsilon$-NFA):** Thompson's Construction (constructive, systematic).
*   **NFA ($\epsilon$-NFA) to DFA:** Subset Construction (constructive, guarantees equivalence, can lead to many states).
*   **DFA to RE:** Generalized State Elimination or Algebraic Methods using Arden's Lemma (constructive, can be complex, results in a regular expression).

These conversions demonstrate the fundamental equivalence:
$L(\text{RE}) \subseteq L(\text{DFA}) \subseteq L(\text{NFA}) \subseteq L(\text{RE})$

---

### 4. Key Concepts and Definitions

*   **Regular Expression (RE):** A pattern describing a set of strings. Built from basic symbols:
    *   $\emptyset$ (empty set)
    *   $\epsilon$ (empty string)
    *   $a$ (a single character)
    *   Operations: union ($+$ or $|$), concatenation (implied or $\cdot$), Kleene star ($^*$).
*   **Deterministic Finite Automaton (DFA):** A mathematical model of computation consisting of a finite set of states, a finite alphabet of input symbols, a transition function, a start state, and a set of accept states.
    *   $M = (Q, \Sigma, \delta, q_0, F)$
*   **Non-deterministic Finite Automaton (NFA):** Similar to a DFA, but can have multiple transitions for the same input from a state, and $\epsilon$-transitions (transitions without consuming input).
*   **$\epsilon$-NFA:** An NFA that allows $\epsilon$-transitions.
*   **Thompson's Construction:** An algorithm to convert any RE into an $\epsilon$-NFA.
*   **Subset Construction:** An algorithm to convert any NFA (including $\epsilon$-NFAs) into an equivalent DFA.
*   **Generalized State Elimination:** An algorithm to convert a DFA into an equivalent RE.
*   **Arden's Lemma:** A tool to solve equations of the form $X = AX + B$ for $X$, where $X = A^*B$.

---

### 5. Important Points to Remember

*   **Equivalence:** Regular Expressions and DFAs define precisely the same class of languages: the regular languages.
*   **Construction Direction:**
    *   RE $\to$ $\epsilon$-NFA (Thompson's Construction) $\to$ DFA (Subset Construction).
    *   DFA $\to$ RE (Generalized State Elimination or Algebraic Methods).
*   **Intermediate Step:** The conversion from REs to DFAs often goes through an $\epsilon$-NFA.
*   **Expressive Power:** All three formalisms (REs, NFAs, DFAs) are equivalent in their ability to describe regular languages. NFAs are often easier to construct from REs, and DFAs are typically preferred for implementation.
*   **Minimization:** The DFA obtained from subset construction might not be minimal. State minimization algorithms can be applied to get the unique minimal DFA for a given regular language.

---

### 6. Practice Questions and Exercises

**Question 1:**
Convert the regular expression $R = (a+b)^*ab$ into an $\epsilon$-NFA using Thompson's construction.

**Solution 1:**
We'll build it step-by-step:

1.  **For $a$**: $M_a$: $q_{a0} \xrightarrow{a} q_{a1}$
2.  **For $b$**: $M_b$: $q_{b0} \xrightarrow{b} q_{b1}$
3.  **For $a+b$**: Combine $M_a, M_b$ with a new start $s_1$ and accept $a_1$.
    $s_1 \xrightarrow{\epsilon} q_{a0}$, $s_1 \xrightarrow{\epsilon} q_{b0}$
    $q_{a1} \xrightarrow{\epsilon} a_1$, $q_{b1} \xrightarrow{\epsilon} a_1$
    Let's rename states for clarity: $s_{a+b}, a_{a+b}$.
    $s_{a+b} \xrightarrow{\epsilon} q_{a0}$, $s_{a+b} \xrightarrow{\epsilon} q_{b0}$
    $q_{a1} \xrightarrow{\epsilon} a_{a+b}$, $q_{b1} \xrightarrow{\epsilon} a_{a+b}$
4.  **For $(a+b)^* $**: Apply Kleene star to the automaton for $a+b$.
    Let $M_{a+b}$ have start $s_{start}$ and accept $s_{accept}$.
    New start $s_{new}$, new accept $a_{new}$.
    $s_{new} \xrightarrow{\epsilon} s_{start}$
    $s_{new} \xrightarrow{\epsilon} a_{new}$ (for $\epsilon$ part of star)
    $s_{accept} \xrightarrow{\epsilon} s_{start}$ (for repetition)
    $s_{accept} \xrightarrow{\epsilon} a_{new}$ (to exit)
5.  **For $ab$**: Concatenate $M_{(a+b)^*}$ and $M_a$ and then $M_b$.
    Let $M_{(a+b)^*}$ have start $s_1$ and accept $a_1$.
    Let $M_a$ for the final $a$ have start $s_{a2}$ and accept $a_{a2}$.
    Let $M_b$ for the final $b$ have start $s_{b2}$ and accept $a_{b2}$.

    Concatenate $M_{(a+b)^*}$ and $M_a$: new start $s_1$, new accept $a_{a2}$. $\epsilon$-transition $a_1 \to s_{a2}$.
    Concatenate this with $M_b$: new start $s_1$ (from $M_{(a+b)^*}$), new accept $a_{b2}$ (from $M_b$). $\epsilon$-transition from $a_{a2}$ to $s_{b2}$.

This description is complex to draw in text. The key is applying the rules systematically. The final $\epsilon$-NFA will have a start state, then $\epsilon$-transitions to the start of the $(a+b)^*$ part, then the $(a+b)^*$ part, then an $\epsilon$-transition to the start of the final $a$, then $a$, then $\epsilon$-transition to the start of the final $b$, then $b$, and finally reach an accept state.

**Question 2:**
Convert the DFA below to a regular expression using Arden's Lemma.

DFA:
States: $q_0, q_1$
Alphabet: $\{0, 1\}$
Start State: $q_0$
Accept States: $\{q_1\}$
Transitions:
$\delta(q_0, 0) = q_0$
$\delta(q_0, 1) = q_1$
$\delta(q_1, 0) = q_1$
$\delta(q_1, 1) = q_0$

**Solution 2:**
This DFA accepts strings that have at least one '1'.

Let $S_0$ be the RE for strings reaching $q_0$ from $q_0$.
Let $S_1$ be the RE for strings reaching $q_1$ from $q_0$.

Equations:
$S_0 = \epsilon$ (start state)
    $+ S_0 \cdot 0$ (stay in $q_0$ via 0)
    $+ S_1 \cdot 1$ (reach $q_0$ from $q_1$ via 1)
$S_0 = \epsilon + S_0 0 + S_1 1$

$S_1 = S_0 \cdot 1$ (reach $q_1$ from $q_0$ via 1)
    $+ S_1 \cdot 0$ (stay in $q_1$ via 0)
$S_1 = S_0 1 + S_1 0$

Solve for $S_1$:
$S_1 = S_0 1 + S_1 0$
$S_1 = (S_0 1) 0^*$ (Using Arden's Lemma $X = A + X B \implies X = AB^*$, here $X=S_1, A=S_0 1, B=0$)
$S_1 = S_0 10^*$

Substitute $S_1$ into $S_0$:
$S_0 = \epsilon + S_0 0 + (S_0 10^*) 1$
$S_0 = \epsilon + S_0 0 + S_0 10^* 1$
$S_0 = \epsilon + S_0 (0 + 10^* 1)$

Apply Arden's Lemma to $S_0$:
$S_0 = \epsilon (0 + 10^* 1)^* = (0 + 10^* 1)^*$

Now find $S_1$ (since $q_1$ is the accept state):
$S_1 = S_0 10^*$
$S_1 = (0 + 10^* 1)^* 10^*$

The regular expression for the language is $S_1$.
So, $R = (0 + 10^* 1)^* 10^*$.

Let's verify:
$R = (0 + 10^* 1)^* 10^*$
This means zero or more occurrences of ($0$ or $10^*1$), followed by $10^*$.
Strings with one '1': $1, 01, 10, 001, 010, 100, 0001, 0010, 0100, 1000, \dots$
The RE:
$10^*$: $1, 10, 100, \dots$ (correct for strings ending in 1 and having only 0s after)
The $(0 + 10^* 1)^*$ part:
$0$: accepts strings with only 0s if not for the final $10^*$.
$10^*1$: strings like $1, 101, 1001, \dots$
So the expression means sequences like:
$1$
$101$
$1001$
$...$
$10^*$ (at the end)
$010^*$
$01010^*$
$010010^*$

This seems to correctly capture strings with at least one '1'.

**Question 3:**
True or False: Every regular expression can be converted to a DFA.
**Answer:** True. This is a fundamental theorem of automata theory.

**Question 4:**
True or False: Every DFA can be converted to a regular expression.
**Answer:** True. This is also a fundamental theorem.

**Question 5:**
What is the purpose of $\epsilon$-transitions in the construction of NFAs from regular expressions?
**Answer:** $\epsilon$-transitions are crucial for building NFAs in Thompson's construction without altering the language recognized. They allow the automaton to move between sub-automata or states without consuming input, facilitating the representation of concatenation, union, and Kleene star operations.

---

This concludes the notes on the Equivalence of Regular Expressions and DFAs. This topic is a cornerstone of understanding regular languages and their formalisms.
