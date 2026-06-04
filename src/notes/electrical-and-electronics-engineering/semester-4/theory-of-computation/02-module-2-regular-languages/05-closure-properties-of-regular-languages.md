---
title: "Closure Properties of Regular Languages"
subject: "THEORY OF COMPUTATION"
module: "Module 2: Regular Languages "
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35f19"
status: "completed"
scrapedAt: "2026-05-23T16:19:32.488Z"
---
# THEORY OF COMPUTATION: Module 2: Regular Languages - Closure Properties

## 1. Introduction to Closure Properties of Regular Languages

This section introduces the concept of closure properties of regular languages. These properties are fundamental to understanding the expressiveness and limitations of regular languages. Essentially, they state that if we start with regular languages and apply certain operations, the resulting language will also be regular.

**Key Concepts:**

*   **Regular Language:** A language that can be recognized by a Deterministic Finite Automaton (DFA), Non-deterministic Finite Automaton (NFA), or described by a regular expression.
*   **Closure Property:** A property of a class of objects (in this case, regular languages) such that if you perform a certain operation on members of the class, the result is also a member of the same class.

**Learning Outcome Alignment:**

*   **CO1 (K2):** Understanding closure properties helps in classifying languages. If we know a language is regular, and we can construct it from other known regular languages using operations that preserve regularity, we can confirm its regularity.

**Textbook References:**

*   **Kozen, Dexter C. (1999). *Automata and Computability*. Springer.** (Chapter 2 often discusses regular languages and their properties)
*   **Hopcroft, John E., Motwani, Rajeev, & Ullman, Jeffrey D. (2007). *Introduction to Automata Theory, Languages, and Computation*. Pearson Education.** (Chapter 1 and 2 typically cover the basics of regular languages and their operations)
*   **Sipser, Michael. (2013). *Introduction To Theory of Computation*. Cengage Publishers.** (Chapter 1.1 and 1.2 introduce regular expressions and finite automata, laying the groundwork for closure properties)

---

## 2. Operations Preserving Regularity

This section delves into specific operations that, when applied to regular languages, yield another regular language. We will explore the proofs of these closure properties.

### 2.1. Union

**Definition:** For any two languages $L_1$ and $L_2$, their union is defined as:
$L_1 \cup L_2 = \{w \mid w \in L_1 \text{ or } w \in L_2\}$

**Theorem:** If $L_1$ and $L_2$ are regular languages, then $L_1 \cup L_2$ is also a regular language.

**Proof (using DFAs):**
Let $L_1$ be recognized by DFA $M_1 = (Q_1, \Sigma, \delta_1, q_{1,0}, F_1)$ and $L_2$ be recognized by DFA $M_2 = (Q_2, \Sigma, \delta_2, q_{2,0}, F_2)$.
We construct a new DFA $M = (Q, \Sigma, \delta, q_0, F)$ for $L_1 \cup L_2$ as follows:

*   **States ($Q$):** The set of states is the Cartesian product of the states of $M_1$ and $M_2$.
    $Q = Q_1 \times Q_2 = \{(q_1, q_2) \mid q_1 \in Q_1, q_2 \in Q_2\}$
*   **Alphabet ($\Sigma$):** The alphabet remains the same.
*   **Transition Function ($\delta$):** For any state $(q_1, q_2) \in Q$ and any input symbol $a \in \Sigma$, the transition is defined as:
    $\delta((q_1, q_2), a) = (\delta_1(q_1, a), \delta_2(q_2, a))$
*   **Start State ($q_0$):** The start state is the pair of start states of $M_1$ and $M_2$.
    $q_0 = (q_{1,0}, q_{2,0})$
*   **Set of Final States ($F$):** A state $(q_1, q_2)$ is a final state if at least one of $q_1$ or $q_2$ is a final state in their respective DFAs.
    $F = \{(q_1, q_2) \mid q_1 \in F_1 \text{ or } q_2 \in F_2\}$

**Why this works:**
A string $w$ is accepted by $M$ if, after processing $w$, $M$ ends in a state $(q_1, q_2)$ where $q_1$ is a final state of $M_1$ or $q_2$ is a final state of $M_2$.
*   If $M_1$ accepts $w$ by reaching $q_{1,f} \in F_1$, then processing $w$ in $M$ will lead to a state $(q_{1,f}, q_{2,f})$ for some $q_{2,f} \in Q_2$. Since $q_{1,f} \in F_1$, the state $(q_{1,f}, q_{2,f})$ is in $F$, so $M$ accepts $w$.
*   If $M_2$ accepts $w$ by reaching $q_{2,f} \in F_2$, then processing $w$ in $M$ will lead to a state $(q_{1,f}, q_{2,f})$ for some $q_{1,f} \in Q_1$. Since $q_{2,f} \in F_2$, the state $(q_{1,f}, q_{2,f})$ is in $F$, so $M$ accepts $w$.
*   Conversely, if $M$ accepts $w$ to a state $(q_1, q_2) \in F$, then either $q_1 \in F_1$ or $q_2 \in F_2$ (or both). This means $M_1$ accepts $w$ (ending in $q_1$) or $M_2$ accepts $w$ (ending in $q_2$), or both. Thus, $w \in L_1 \cup L_2$.

**Example:**
Let $L_1 = \{a^n b^m \mid n \ge 0, m \ge 0\}$ (regular, recognized by $(\{q_0, q_1, q_2\}, \{a,b\}, \delta_1, q_0, \{q_2\})$)
Let $L_2 = \{a^n c^m \mid n \ge 0, m \ge 0\}$ (regular, recognized by $(\{r_0, r_1, r_2\}, \{a,c\}, \delta_2, r_0, \{r_2\})$)
$L_1 \cup L_2$ is the set of strings that are either of the form $a^*b^*$ or $a^*c^*$. This language is regular.

**Proof (using regular expressions):**
If $R_1$ is a regular expression for $L_1$ and $R_2$ is a regular expression for $L_2$, then $R_1 + R_2$ (or $R_1 \cup R_2$) is a regular expression for $L_1 \cup L_2$. The union operation in regular expressions directly corresponds to the union of languages.

**Learning Outcome Alignment:**

*   **CO2 (K3):** This proves that we can design a DFA for the union of two languages if we can design DFAs for the individual languages.

**Important Point to Remember:** The construction of the union DFA involves the Cartesian product of states. The number of states in the new DFA can be up to the product of the number of states in the original DFAs.

### 2.2. Concatenation

**Definition:** For any two languages $L_1$ and $L_2$, their concatenation is defined as:
$L_1 L_2 = \{w_1 w_2 \mid w_1 \in L_1 \text{ and } w_2 \in L_2\}$

**Theorem:** If $L_1$ and $L_2$ are regular languages, then $L_1 L_2$ is also a regular language.

**Proof (using NFAs):**
Let $L_1$ be recognized by NFA $N_1 = (Q_1, \Sigma, \delta_1, q_{1,0}, F_1)$ and $L_2$ be recognized by NFA $N_2 = (Q_2, \Sigma, \delta_2, q_{2,0}, F_2)$.
We construct a new NFA $N = (Q, \Sigma, \delta, q_0, F)$ for $L_1 L_2$ as follows:

*   **States ($Q$):** $Q = Q_1 \cup Q_2$. To distinguish states from $N_1$ and $N_2$, we can imagine them as separate sets.
*   **Alphabet ($\Sigma$):** The alphabet remains the same.
*   **Start State ($q_0$):** The start state is the start state of $N_1$.
    $q_0 = q_{1,0}$
*   **Set of Final States ($F$):** The final states are the final states of $N_2$.
    $F = F_2$
*   **Transition Function ($\delta$):** The transitions are defined as follows:
    *   For any $q \in Q_1$ and $a \in \Sigma$: $\delta(q, a) = \delta_1(q, a)$ (transitions within $N_1$).
    *   For any $q \in F_1$ (final states of $N_1$): $\delta(q, \epsilon) = \{q_{2,0}\}$ (transition to the start state of $N_2$ upon reaching a final state of $N_1$ via an epsilon transition).
    *   For any $q \in Q_2$ and $a \in \Sigma$: $\delta(q, a) = \delta_2(q, a)$ (transitions within $N_2$).

**Why this works:**
An NFA $N$ accepts a string $w$ if there is a path from its start state to a final state. In this construction, to accept $w = w_1 w_2$:
1.  $N_1$ must accept $w_1$, ending in some final state $q_{1,f} \in F_1$.
2.  Upon reaching $q_{1,f}$, we can take an $\epsilon$-transition to the start state $q_{2,0}$ of $N_2$.
3.  $N_2$ then processes $w_2$ starting from $q_{2,0}$ and accepts it by reaching a final state $q_{2,f} \in F_2$.

Since $F_2$ are the final states of $N$, the string $w$ is accepted.

**Example:**
Let $L_1 = \{a, b\}$ (recognized by NFA $N_1$)
Let $L_2 = \{c, d\}$ (recognized by NFA $N_2$)
$L_1 L_2 = \{ac, ad, bc, bd\}$. This is regular.

**Proof (using regular expressions):**
If $R_1$ is a regular expression for $L_1$ and $R_2$ is a regular expression for $L_2$, then $R_1 R_2$ is a regular expression for $L_1 L_2$. The concatenation operation in regular expressions directly corresponds to the concatenation of languages.

**Learning Outcome Alignment:**

*   **CO2 (K3):** This shows how to construct an NFA for the concatenation of two languages.

**Important Point to Remember:** The concatenation construction involves using $\epsilon$-transitions to link the automaton for the first language to the automaton for the second language.

### 2.3. Star-Kleene

**Definition:** For a language $L$, the Kleene star of $L$ is defined as:
$L^* = \{w_1 w_2 \dots w_k \mid k \ge 0, w_i \in L \text{ for all } i\}$
This means $L^*$ is the set of all strings formed by concatenating zero or more strings from $L$.

**Theorem:** If $L$ is a regular language, then $L^*$ is also a regular language.

**Proof (using NFAs):**
Let $L$ be recognized by NFA $N = (Q, \Sigma, \delta, q_0, F)$.
We construct a new NFA $N'$ for $L^*$ as follows:

*   **States ($Q'$):** $Q' = Q \cup \{q_{new}\}$, where $q_{new}$ is a new state.
*   **Alphabet ($\Sigma$):** The alphabet remains the same.
*   **Start State ($q'_0$):** $q'_0 = q_0$.
*   **Set of Final States ($F'$):** $F' = F \cup \{q_{new}\}$.
*   **Transition Function ($\delta'$):**
    *   For all $q \in Q$ and $a \in \Sigma$: $\delta'(q, a) = \delta(q, a)$ (original transitions).
    *   For all $q \in F$ (original final states): $\delta'(q, \epsilon) = \{q_0, q_{new}\}$ (from original final states, can either loop back to the start state to form another concatenation or go to the new final state to end the string).
    *   For the new state $q_{new}$: $\delta'(q_{new}, a) = \emptyset$ for all $a \in \Sigma$, and $\delta'(q_{new}, \epsilon) = \emptyset$. (This state is just a sink state).

**Why this works:**
A string $w$ is accepted by $N'$ if it can be formed by concatenating strings from $L$, possibly zero times.
*   If $w = \epsilon$ (zero concatenations), $w$ is accepted because the start state $q_0$ is an original state. If $q_0$ is also a final state in $F$, then $\epsilon$ is accepted. If not, we need a slight modification: add a self-loop with $\epsilon$ on the original start state and make the original start state also a final state. A simpler approach is to add $q_{new}$ and make it reachable from $q_0$ with $\epsilon$ and have $q_0$ be a final state. The provided construction correctly handles $k \ge 0$. If $q_0 \in F$, then $\epsilon$ is accepted by $N'$ directly. If $q_0 \notin F$, then $N'$ needs to be modified to allow $\epsilon$ to be accepted if $q_0$ is a final state. The most common construction for $L^*$ includes the $\epsilon$ string if the original automaton allows it.

Let's refine the construction for $L^*$ to be more robust:
Let $N=(Q, \Sigma, \delta, q_0, F)$. Construct $N'=(Q', \Sigma, \delta', q'_0, F')$:
*   $Q' = Q \cup \{q_{start\_loop}\}$ (a new state to handle the $\epsilon$ case if $q_0$ is not final)
*   $\Sigma$ remains the same.
*   $q'_0 = q_0$.
*   $F' = F \cup \{q_{start\_loop}\}$.
*   $\delta'(q, a) = \delta(q, a)$ for $q \in Q, a \in \Sigma$.
*   $\delta'(q, \epsilon) = \delta(q, \epsilon) \cup \{q_0\}$ for $q \in F$. (From original final states, transition to start state with $\epsilon$)
*   $\delta'(q_0, \epsilon) = \delta'(q_0, \epsilon) \cup \{q_{start\_loop}\}$ (If the original start state can transition to itself with epsilon or is itself a final state, it should be handled. A simpler way is to connect $q_0$ to a new state $q_{start\_loop}$ which is also final).

A common and elegant construction for $L^*$ (as per Kozen's book) uses a new start state and epsilon transitions:

Let $N = (Q, \Sigma, \delta, q_0, F)$ be an NFA for $L$.
Construct $N' = (Q \cup \{q_{new}\}, \Sigma, \delta', q_0, F \cup \{q_{new}\})$ where:
*   $\delta'(q, a) = \delta(q, a)$ for $q \in Q, a \in \Sigma$.
*   $\delta'(q, \epsilon) = \delta(q, \epsilon) \cup \{q_0\}$ for $q \in F$. (From original final states, loop back to $q_0$ or go to $q_{new}$)
*   $\delta'(q_{new}, a) = \emptyset$ for $a \in \Sigma \cup \{\epsilon\}$.
*   $\delta'(q_0, \epsilon) = \delta'(q_0, \epsilon) \cup \{q_{new}\}$. (This ensures $\epsilon$ is accepted if $q_0$ is not final but the loop can be taken)

**A more standard and simpler NFA construction for $L^*$:**
Given NFA $N = (Q, \Sigma, \delta, q_0, F)$ for $L$.
Construct $N' = (Q \cup \{s, t\}, \Sigma, \delta', s, \{t\})$ where:
*   $\delta'(q, a) = \delta(q, a)$ for $q \in Q, a \in \Sigma$.
*   $\delta'(q, \epsilon) = \delta(q, \epsilon)$ for $q \in Q, a \in \Sigma \cup \{\epsilon\}$.
*   $\delta'(q, \epsilon) = \{q_0\}$ for $q \in F$. (From any original final state, transition to the original start state with $\epsilon$).
*   $\delta'(s, \epsilon) = \{q_0\}$. (New start state $s$, initial transition to original start state $q_0$)
*   $\delta'(q, \epsilon) = \delta'(q, \epsilon) \cup \{t\}$ for $q \in F$. (From original final states, can transition to new final state $t$ with $\epsilon$)
*   If $q_0 \in F$, then $\epsilon$ is accepted by $N'$ from state $s$ to state $t$. The construction above needs to ensure $\epsilon$ is accepted if $L$ can produce $\epsilon$ (i.e., $q_0$ is final or there's an $\epsilon$ path to a final state).

A clean construction from Hopcroft, Motwani, Ullman:
Given $N=(Q, \Sigma, \delta, q_0, F)$ for $L$. Construct $N'=(Q \cup \{s\}, \Sigma \cup \{\epsilon\}, \delta', s, F \cup \{s\})$
*   $\delta'(q, a) = \delta(q, a)$ for $q \in Q, a \in \Sigma$.
*   $\delta'(q, \epsilon) = \delta(q, \epsilon) \cup \{q_0\}$ for $q \in F$. (From original final states, loop back to $q_0$ or go to the new start state $s$)
*   $\delta'(s, \epsilon) = \{q_0\}$. (New start state $s$, initial transition to original start state $q_0$)

**Why this works (using the improved NFA construction):**
A string $w$ is accepted by $N'$ if there's a path from $s$ to any state in $F \cup \{s\}$.
1.  If $w = \epsilon$: Path $s \xrightarrow{\epsilon} q_0$. If $q_0 \in F$, $\epsilon$ is accepted. If $q_0 \notin F$, then we need $q_0$ to be able to reach a final state via $\epsilon$ paths. The above construction with $\delta'(s, \epsilon) = \{q_0\}$ and $\delta'(q, \epsilon) = \{q_0\}$ for $q \in F$ allows for repetitions.

Let's use the standard RE construction as it's more intuitive and guarantees correctness.
**Proof (using regular expressions):**
If $R$ is a regular expression for $L$, then $R^*$ is a regular expression for $L^*$. The Kleene star operation in regular expressions directly corresponds to the Kleene star of languages.

**Example:**
Let $L = \{a\}$. Then $L^* = \{\epsilon, a, aa, aaa, \dots\} = \{a^n \mid n \ge 0\}$. This is regular.
If $L = \{a, b\}$, then $L^* = \{\epsilon, a, b, aa, ab, ba, bb, aaa, \dots\}$. This is regular.

**Learning Outcome Alignment:**

*   **CO2 (K3):** This demonstrates that the Kleene star operation also preserves regularity, allowing for the construction of related automata.

**Important Point to Remember:** The Kleene star operation is what gives regular languages their power to describe sets of strings with repetition, like $\{a^n b^m \mid n \ge 0, m \ge 0\}$ which is $(a^*) (b^*)$.

### 2.4. Complement

**Definition:** For a language $L \subseteq \Sigma^*$, its complement is defined as:
$\overline{L} = \{w \mid w \in \Sigma^* \text{ and } w \notin L\}$

**Theorem:** If $L$ is a regular language, then $\overline{L}$ is also a regular language.

**Proof (using DFAs):**
Let $L$ be a regular language, and let $M = (Q, \Sigma, \delta, q_0, F)$ be a DFA that recognizes $L$. (Recall that any regular language can be recognized by a DFA).
We construct a new DFA $M' = (Q', \Sigma', \delta', q'_0, F')$ for $\overline{L}$ as follows:

*   **States ($Q'$):** $Q' = Q$ (the states are the same).
*   **Alphabet ($\Sigma'$):** $\Sigma' = \Sigma$ (the alphabet is the same).
*   **Transition Function ($\delta'$):** $\delta' = \delta$ (the transitions are the same).
*   **Start State ($q'_0$):** $q'_0 = q_0$ (the start state is the same).
*   **Set of Final States ($F'$):** The set of final states is the set of all states that were *not* final states in $M$.
    $F' = Q \setminus F = \{q \in Q \mid q \notin F\}$

**Why this works:**
A DFA $M$ accepts a string $w$ if and only if processing $w$ leads to a final state in $F$.
If we flip the final states, $M'$ will accept a string $w$ if and only if processing $w$ leads to a state that is *not* in $F$. This is precisely the definition of the complement language $\overline{L}$.

**Example:**
Let $\Sigma = \{a, b\}$. Let $L = \{w \mid w \text{ starts with } a\}$.
$L$ is regular. A DFA for $L$ might have states $q_0$ (start), $q_1$ (accepting).
$\delta(q_0, a) = q_1$
$\delta(q_0, b) = q_0$
$\delta(q_1, a) = q_1$
$\delta(q_1, b) = q_1$
$F = \{q_1\}$.
For $\overline{L} = \{w \mid w \text{ does not start with } a\} = \{w \mid w \text{ starts with } b\}$, the DFA $M'$ would have $F' = Q \setminus \{q_1\} = \{q_0\}$.
$M'$ accepts only those strings that end in $q_0$, which are precisely the strings starting with $b$.

**Proof (using regular expressions):**
This is where it gets tricky with direct regular expression manipulation. We can't simply "negate" a regular expression. However, we know that if $L$ is regular, it has a DFA. We can convert this DFA to a regular expression. Then, by the DFA complementation method, we know $\overline{L}$ is regular. The existence of a regular expression for $\overline{L}$ can be proven, but it's not a simple algebraic manipulation of the original expression.

**Learning Outcome Alignment:**

*   **CO1 (K2):** Understanding complementation proves that regular languages are closed under this operation.
*   **CO2 (K3):** This shows how to construct a DFA for the complement of a language if we have a DFA for the original language.

**Important Point to Remember:** Complementation requires a DFA. If you are given an NFA for a language $L$, you must first convert it to an equivalent DFA before applying the complementation construction. Also, the DFA must be *complete* (i.e., have transitions for all states and input symbols). If not, you might need to add a "dead state".

### 2.5. Intersection

**Definition:** For any two languages $L_1$ and $L_2$, their intersection is defined as:
$L_1 \cap L_2 = \{w \mid w \in L_1 \text{ and } w \in L_2\}$

**Theorem:** If $L_1$ and $L_2$ are regular languages, then $L_1 \cap L_2$ is also a regular language.

**Proof (using closure properties):**
We can prove this using the closure properties we've already established: union, complement, and concatenation.

1.  We know $L_1$ and $L_2$ are regular.
2.  By the closure property of complementation, $\overline{L_1}$ and $\overline{L_2}$ are regular.
3.  By the closure property of union, $\overline{L_1} \cup \overline{L_2}$ is regular.
4.  By De Morgan's Law for sets, $L_1 \cap L_2 = \overline{\overline{L_1} \cup \overline{L_2}}$.
5.  Since $\overline{L_1} \cup \overline{L_2}$ is regular, its complement, $\overline{\overline{L_1} \cup \overline{L_2}}$, must also be regular (by the closure property of complementation).
6.  Therefore, $L_1 \cap L_2$ is regular.

**Proof (using DFAs - direct construction):**
Let $L_1$ be recognized by DFA $M_1 = (Q_1, \Sigma, \delta_1, q_{1,0}, F_1)$ and $L_2$ be recognized by DFA $M_2 = (Q_2, \Sigma, \delta_2, q_{2,0}, F_2)$.
We construct a new DFA $M = (Q, \Sigma, \delta, q_0, F)$ for $L_1 \cap L_2$ as follows:

*   **States ($Q$):** $Q = Q_1 \times Q_2$.
*   **Alphabet ($\Sigma$):** $\Sigma$.
*   **Transition Function ($\delta$):** $\delta((q_1, q_2), a) = (\delta_1(q_1, a), \delta_2(q_2, a))$.
*   **Start State ($q_0$):** $q_0 = (q_{1,0}, q_{2,0})$.
*   **Set of Final States ($F$):** A state $(q_1, q_2)$ is a final state if and only if *both* $q_1$ and $q_2$ are final states in their respective DFAs.
    $F = \{(q_1, q_2) \mid q_1 \in F_1 \text{ and } q_2 \in F_2\}$

**Why this works:**
A string $w$ is accepted by $M$ if and only if it leads to a state $(q_1, q_2)$ where $q_1 \in F_1$ and $q_2 \in F_2$. This means that after processing $w$, $M_1$ ends in $q_1$ and $M_2$ ends in $q_2$. For $w$ to be in $L_1 \cap L_2$, both $M_1$ and $M_2$ must accept $w$. This happens exactly when both $q_1 \in F_1$ and $q_2 \in F_2$.

**Example:**
Let $L_1 = \{w \mid w \text{ has an even number of } a\text{'s}\}$
Let $L_2 = \{w \mid w \text{ has an even number of } b\text{'s}\}$
$L_1 \cap L_2 = \{w \mid w \text{ has an even number of } a\text{'s and an even number of } b\text{'s}\}$. This is regular.

**Learning Outcome Alignment:**

*   **CO1 (K2):** Reinforces that intersection is a closure property.
*   **CO2 (K3):** Provides a direct construction for the intersection of languages using DFAs.

**Important Point to Remember:** The direct construction for intersection is very similar to the union construction, with the only difference being the condition for final states.

### 2.6. Set Difference

**Definition:** For any two languages $L_1$ and $L_2$, their set difference is defined as:
$L_1 - L_2 = \{w \mid w \in L_1 \text{ and } w \notin L_2\}$

**Theorem:** If $L_1$ and $L_2$ are regular languages, then $L_1 - L_2$ is also a regular language.

**Proof (using closure properties):**
We can prove this using the closure properties of intersection and complement.

1.  We know $L_1$ and $L_2$ are regular.
2.  By the closure property of complementation, $\overline{L_2}$ is regular.
3.  By the closure property of intersection, $L_1 \cap \overline{L_2}$ is regular.
4.  By definition, $L_1 - L_2 = L_1 \cap \overline{L_2}$.
5.  Therefore, $L_1 - L_2$ is regular.

**Example:**
Let $L_1 = \{a^n b^m \mid n \ge 0, m \ge 0\}$
Let $L_2 = \{a^n b^n \mid n \ge 0\}$
$L_1 - L_2$ is the set of strings of the form $a^n b^m$ where the number of $a$'s is not equal to the number of $b$'s. This language is regular.

**Learning Outcome Alignment:**

*   **CO1 (K2):** Demonstrates another closure property.

**Important Point to Remember:** Set difference relies on the ability to compute the complement and intersection of regular languages.

### 2.7. Homomorphism

**Definition:** A homomorphism is a function $h: \Sigma^* \to \Gamma^*$ such that for any strings $x, y \in \Sigma^*$, $h(xy) = h(x)h(y)$. This means the function preserves concatenation. A homomorphism is defined by specifying $h(a)$ for each symbol $a \in \Sigma$.

**Theorem:** If $L$ is a regular language and $h$ is a homomorphism, then $h(L) = \{h(w) \mid w \in L\}$ is a regular language.

**Proof (using NFAs):**
Let $L$ be recognized by an NFA $N = (Q, \Sigma, \delta, q_0, F)$.
We construct a new NFA $N' = (Q', \Sigma', \delta', q'_0, F')$ for $h(L)$ as follows:

*   **States ($Q'$):** $Q' = Q$.
*   **Alphabet ($\Sigma'$):** $\Sigma'$ is the target alphabet of the homomorphism $h$.
*   **Start State ($q'_0$):** $q'_0 = q_0$.
*   **Set of Final States ($F'$):** $F' = F$.
*   **Transition Function ($\delta'$):** For any state $q \in Q$ and symbol $a \in \Sigma$:
    *   If $\delta(q, a)$ contains $p$, then for every string $s$ in $h(\Sigma^*)$ (where $h$ is the homomorphism function), we add a transition $\delta'(q, s) \ni p$.
    *   The transitions are defined based on the homomorphism applied to the input symbols. For each transition $(q, a, p)$ in $N$, we create a transition $(q, h(a), p)$ in $N'$.

**Why this works:**
If $w \in L$, then $N$ accepts $w$. This means there's a sequence of states $q_0 \to q_1 \to \dots \to q_k$ where $q_0$ is the start state, $q_k$ is a final state, and for each $i$, $q_{i+1} \in \delta(q_i, w_i)$, where $w = w_1 w_2 \dots w_k$.
The NFA $N'$ simulates $N$. When $N$ would transition on symbol $a$, $N'$ transitions on the string $h(a)$. So, processing $h(w)$ in $N'$ will follow the same state sequence as $w$ in $N$. Since $N$ accepts $w$, $N'$ will accept $h(w)$.

**Example:**
Let $L = \{0, 1\}^*$. This is regular.
Let $h$ be a homomorphism defined as: $h(0) = a$, $h(1) = ab$.
Then $h(L) = h(\{0, 1\}^*) = \{a, ab\}^*$. This language is $\{a^n (ab)^m \mid n, m \ge 0\}$. This is regular.

**Learning Outcome Alignment:**

*   **CO1 (K2):** Shows that homomorphisms preserve regularity.

**Important Point to Remember:** The proof of homomorphism closure is often done by simulating the original NFA and replacing each transition on a symbol $a$ with a transition on the string $h(a)$.

### 2.8. Inverse Homomorphism

**Definition:** Given a homomorphism $h: \Sigma^* \to \Gamma^*$ and a language $L \subseteq \Gamma^*$, the inverse homomorphism is defined as:
$h^{-1}(L) = \{w \mid w \in \Sigma^* \text{ and } h(w) \in L\}$

**Theorem:** If $L$ is a regular language and $h$ is a homomorphism, then $h^{-1}(L)$ is a regular language.

**Proof (using NFAs):**
Let $L$ be recognized by an NFA $N = (Q, \Sigma, \delta, q_0, F)$.
We construct a new NFA $N'$ for $h^{-1}(L)$ as follows:

*   **States ($Q'$):** $Q' = Q$.
*   **Alphabet ($\Sigma'$):** $\Sigma'$ is the domain alphabet of the homomorphism $h$.
*   **Start State ($q'_0$):** $q'_0 = q_0$.
*   **Set of Final States ($F'$):** $F' = F$.
*   **Transition Function ($\delta'$):** For any state $q \in Q$ and symbol $a \in \Sigma$:
    For each string $s \in h(\Sigma^*)$ that can be produced by the homomorphism $h$ for some symbol(s) in $\Sigma^*$: if there is a path in $N$ from $q$ to some state $p$ labeled by $s$, then we add a transition $\delta'(q, a) \ni p$ for each symbol $a \in \Sigma$ such that $h(a) = s$. This is tricky to implement directly with standard NFAs because a single transition in the target language could be formed by multiple inputs.

**A more standard proof:**
Let $N = (Q, \Sigma, \delta, q_0, F)$ be a DFA for $L$. We want to build an NFA $N'$ for $h^{-1}(L)$ with alphabet $\Sigma_1$.
$N' = (Q, \Sigma_1, \delta', q_0, F)$.
For each state $q \in Q$ and each symbol $a \in \Sigma_1$:
For each state $p \in \delta'(q, a)$, we require that $h(a)$ takes the state $q$ to $p$ in $N$.
This implies that for each state $q \in Q$ and each state $p \in Q$:
If $\delta(q, h(a)) = p$, then we add a transition $\delta'(q, a) \ni p$ in $N'$.

**Why this works:**
A string $w$ is in $h^{-1}(L)$ if $h(w) \in L$. This means that when $h(w)$ is processed by $N$, $N$ ends in a final state.
$h(w) = h(w_1)h(w_2)\dots h(w_k)$ if $w = w_1 w_2 \dots w_k$.
The NFA $N'$ processes $w$. When it reads $w_i$, it simulates the transitions of $N$ on $h(w_i)$.
The construction involves looking at transitions of $N$ and mapping them back to symbols in $\Sigma_1$.

**Example:**
Let $\Gamma = \{a, b\}$ and $L = \{a^n b^m \mid n, m \ge 0\}$. $L$ is regular.
Let $h: \{0, 1\}^* \to \{a, b\}^*$ be $h(0) = a, h(1) = b$.
Then $h^{-1}(L) = \{w \in \{0, 1\}^* \mid h(w) \in L\}$.
$h(w)$ will always be of the form $a^n b^m$ if $w$ consists only of $0$s and $1$s.
So, $h^{-1}(L) = \{0^n 1^m \mid n, m \ge 0\}$. This is regular.

**Learning Outcome Alignment:**

*   **CO1 (K2):** Demonstrates closure under inverse homomorphism.

**Important Point to Remember:** The proof for inverse homomorphism often involves constructing an NFA for $h^{-1}(L)$ by carefully defining transitions based on the original NFA and the homomorphism.

---

## 3. Operations on Regular Languages and Course Outcomes

This section explicitly connects the closure properties to the course learning outcomes.

### 3.1. Impact on CO1: Classifying Formal Languages

*   **How closure properties help:** Closure properties are a powerful tool for *proving* that a language is regular. If you can construct a new language from known regular languages using operations like union, concatenation, Kleene star, complement, intersection, set difference, homomorphism, or inverse homomorphism, then the resulting language must also be regular. This allows us to classify languages.

    *   **Example:** Consider the language $L = \{w \in \{0,1\}^* \mid w \text{ contains an even number of } 1\text{'s}\}$.
        This language can be described as the union of two simpler regular languages:
        1.  $L_1$: Strings with an even number of 1s, and any number of 0s.
        2.  $L_2$: Strings with an odd number of 1s, and any number of 0s. (This is not helpful directly).

        A better approach:
        Let $L_1 = \{0^*10^*10^* \mid \text{any string}\}$. This is formed by $(0^*10^*10^*)$.
        Let $L_2 = \{0^*10^* \mid \text{any string}\}$. This is $(0^*10^*)$.
        If $L_1$ and $L_2$ are regular, then $L_1 \cup L_2$ is regular.

        A more direct example for classification:
        Consider $L = \{w \in \{a,b\}^* \mid \text{number of } a\text{'s is equal to number of } b\text{'s}\}$.
        This language is *not* regular (as can be proven by the pumping lemma). However, if we have a language $L'$ that is formed by taking a regular language $R$ and performing operations that *do not* preserve regularity (like counting equality), and then intersect it with a regular language, we can then use closure properties to prove that the result is *not* regular if it is constructed in a way that requires non-regular operations.

        More commonly, if we are asked to show a language is regular:
        Let $L = \{a^n b^m \mid n \text{ is even and } m \text{ is odd}\}$.
        This can be written as $\{a^{2k} b^{2j+1} \mid k, j \ge 0\}$.
        This is $(a^2)^* (b^2)^* b$.
        Since $a^2$, $b^2$, and $b$ are regular expressions, their concatenation and Kleene star operations preserve regularity. Thus, $L$ is regular.

### 3.2. Impact on CO2: Designing Automata and Regular Representations

*   **How closure properties help:** The proofs of closure properties often involve *constructing* an automaton (DFA or NFA) or a regular expression for the resulting language based on the automata or regular expressions of the original languages. This directly demonstrates how to design these representations for more complex regular languages.

    *   **Example (Union):** To design an automaton for $L_1 \cup L_2$, we take the DFAs for $L_1$ and $L_2$ and construct a new DFA whose states are pairs of states from the original DFAs.
    *   **Example (Concatenation):** To design an automaton for $L_1 L_2$, we use an NFA that first runs the automaton for $L_1$ and then, upon reaching a final state of $L_1$, transitions (via $\epsilon$) to the start state of the automaton for $L_2$.

### 3.3. Impact on Other Course Outcomes (Indirectly)

*   **CO3 (Context-Free Languages), CO4 (Turing Machines), CO5 (Decidability):** While closure properties are primarily about *regular languages*, understanding them builds a foundation for similar concepts in more powerful language classes.
    *   **Comparison:** Many operations that preserve regularity also preserve context-freeness (union, concatenation, Kleene star). However, complementation does *not* preserve context-freeness (some CFLs are not co-CFLs). This highlights the differences in expressiveness.
    *   **Decidability:** The fact that we can effectively construct automata for operations on regular languages implies that properties like membership (is a string in a regular language?) and emptiness (is a regular language empty?) are decidable. The constructive proofs of closure properties are essential for proving decidability results. For instance, to check if $L_1 \cap L_2$ is empty, we construct the DFA for $L_1 \cap L_2$ and then check if it has any final states.

---

## 4. Practice Questions and Exercises

**Instructions:** For each question, assume the given languages are regular.

**Question 1:**
Let $L_1 = \{w \in \{a,b\}^* \mid w \text{ contains } aa\}$ and $L_2 = \{w \in \{a,b\}^* \mid w \text{ ends with } b\}$.
Prove that $L_1 \cap L_2$ is a regular language.

**Answer 1:**
$L_1$ is regular because it can be described by the regular expression $(a+b)^*aa(a+b)^*$.
$L_2$ is regular because it can be described by the regular expression $(a+b)^*b$.
Since $L_1$ and $L_2$ are regular, and regular languages are closed under intersection, $L_1 \cap L_2$ is also regular.

**Question 2:**
Let $L = \{0, 1\}^*$. Define a homomorphism $h: \{0, 1\}^* \to \{a, b\}^*$ by $h(0) = ab$ and $h(1) = ba$. Show that $h(L)$ is a regular language.

**Answer 2:**
$L = \{0, 1\}^*$ is a regular language (recognized by a simple DFA or as $(0+1)^*$).
The homomorphism is $h(0) = ab$ and $h(1) = ba$.
Then $h(L) = h(\{0, 1\}^*) = \{h(w) \mid w \in \{0, 1\}^*\}$.
This means $h(L) = \{(ab)^n (ba)^m \mid n, m \ge 0\}$.
This language can be represented by the regular expression $(ab)^* (ba)^*$.
Since $(ab)^*(ba)^*$ is a regular expression, $h(L)$ is a regular language.

**Question 3:**
Let $L = \{w \in \{a,b\}^* \mid w \text{ does not contain } ab\}$. Show that $L$ is regular.

**Answer 3:**
Let $\Sigma = \{a, b\}$.
Consider the language $L_{all} = \Sigma^* = \{a, b\}^*$. $L_{all}$ is regular.
The language $L_{no\_ab}$ is the complement of the language containing strings with $ab$.
Let $L_{has\_ab}$ be the set of strings containing $ab$.
$L_{has\_ab} = \{w \in \{a,b\}^* \mid w \text{ contains } ab\}$. This can be represented by $(a+b)^*ab(a+b)^*$.
Since $L_{has\_ab}$ is regular, its complement, $\overline{L_{has\_ab}}$, which is the set of strings *not* containing $ab$, is also regular.
$\overline{L_{has\_ab}} = \{w \in \{a,b\}^* \mid w \text{ does not contain } ab\}$.
Thus, $L$ is regular.

**Alternatively, using direct construction:**
Strings not containing $ab$ can only be of the form $a^*b^*$ (all $a$'s followed by all $b$'s).
This is because if a string has $b$ followed by $a$, it cannot have $ab$.
So, any string not containing $ab$ must either be:
1.  A sequence of $a$'s: $a^*$
2.  A sequence of $b$'s: $b^*$
3.  A sequence of $a$'s followed by a sequence of $b$'s: $a^*b^*$

The language is $a^*b^*$. This is a regular expression, so the language is regular.

**Question 4:**
Let $L = \{a^n b^m \mid n \ge m \ge 0\}$. Show that $L$ is regular.

**Answer 4:**
This language requires counting and is **not** regular. The proof for this would typically involve the Pumping Lemma for Regular Languages.
Let's rephrase to make it regular.
Consider $L = \{a^n b^m \mid n \text{ is even and } m \text{ is odd}\}$.
This is $(a^2)^* (b^2)^* b$. This is regular.

Let's try to construct a regular expression for a truly regular language that looks similar:
$L = \{a^n \mid n \text{ is a multiple of 3}\}$.
This is $(aaa)^*$. Regular.

If the question intended something different, it would need to be a constructive process from known regular languages.

**Question 5:**
Let $L_1 = \{a^n \mid n \ge 0\}$ and $L_2 = \{b^m \mid m \ge 0\}$. What is $L_1^* \cup L_2^*$? Prove it is regular.

**Answer 5:**
$L_1 = \{a^n \mid n \ge 0\} = a^*$. This is regular.
$L_2 = \{b^m \mid m \ge 0\} = b^*$. This is regular.
$L_1^* = (a^*)^* = a^*$.
$L_2^* = (b^*)^* = b^*$.
So, $L_1^* \cup L_2^* = a^* \cup b^*$.
Since $a^*$ and $b^*$ are regular languages, their union $a^* \cup b^*$ is also a regular language (due to closure under union).

---

## 5. Important Points to Remember

*   **Closure properties define the boundaries of regular languages.** If an operation applied to regular languages results in a language that is *not* in the class, then that operation does not preserve regularity.
*   **Proofs are constructive.** The proofs demonstrate how to build the resulting automaton or regular expression from the original ones. This is key to understanding why these properties hold.
*   **DFAs are crucial for complementation and intersection (direct proof).** If you are working with NFAs, you may need to convert them to DFAs first for these specific operations.
*   **Regular languages are closed under a wide range of operations.** This makes them a very well-behaved and understood class of languages in theoretical computer science.
*   **Understanding these properties helps in recognizing non-regular languages.** If a language cannot be constructed from regular languages using these operations, it's a hint that it might not be regular. (However, the Pumping Lemma is the definitive tool for proving non-regularity).

This concludes the study notes on Closure Properties of Regular Languages. Refer back to Kozen, Hopcroft et al., and Sipser for deeper theoretical insights and formal proofs.
