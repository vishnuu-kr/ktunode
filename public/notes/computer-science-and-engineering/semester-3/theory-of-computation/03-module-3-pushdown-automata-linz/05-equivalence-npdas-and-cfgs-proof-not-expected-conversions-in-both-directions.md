---
title: "Equivalence NPDAs and CFGs (Proof not expected) - conversions in both directions"
subject: "THEORY OF COMPUTATION"
module: "Module 3: Pushdown Automata (Linz)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8abbf"
status: "completed"
scrapedAt: "2026-05-20T16:30:09.181Z"
---
# THEORY OF COMPUTATION: Module 3 - Pushdown Automata

## Topic: Equivalence of NPDAs and CFGs (Conversions)

**Description:** This topic focuses on the equivalence between Nondeterministic Pushdown Automata (NPDAs) and Context-Free Grammars (CFGs). We will explore how to convert an NPDA to an equivalent CFG and vice-versa, without delving into the formal proofs.

**Learning Outcomes:**

*   Understand the equivalence between NPDAs and CFGs.
*   Be able to convert a given CFG into an equivalent NPDA.
*   Be able to convert a given NPDA into an equivalent CFG.

### 1. Key Concepts and Definitions

*   **Context-Free Grammar (CFG):** A formal grammar consisting of a set of production rules that define the syntax of a context-free language.  It is defined as a 4-tuple:  G = (V, T, P, S), where:
    *   V: A finite set of variables (non-terminals).
    *   T: A finite set of terminals (symbols of the language).
    *   P: A finite set of production rules of the form A → α, where A ∈ V and α ∈ (V ∪ T)*.
    *   S: The start variable, S ∈ V.

*   **Nondeterministic Pushdown Automaton (NPDA):**  A finite state machine with a stack. It is defined as a 7-tuple: M = (Q, Σ, Γ, δ, q0, Z0, F), where:
    *   Q: A finite set of states.
    *   Σ: A finite set of input alphabet.
    *   Γ: A finite set of stack symbols.
    *   δ: The transition function: Q x (Σ ∪ {ε}) x Γ  → P(Q x Γ*).
    *   q0: The initial state, q0 ∈ Q.
    *   Z0: The initial stack symbol, Z0 ∈ Γ.
    *   F: A set of final states, F ⊆ Q.

*   **Equivalence:** Two computational models (in this case, NPDAs and CFGs) are considered equivalent if they accept (or generate) the same language. L(M) = L(G).

### 2. Converting a CFG to an NPDA

This conversion aims to simulate the derivation process of a CFG using an NPDA. The NPDA essentially 'guesses' the production rule to apply and tries to match the input string accordingly.

**General Procedure:**

1.  **The NPDA will have only one state:**  `q`. (Q = {q})
2.  **The NPDA will always accept by empty stack.** (F = ∅)
3.  **The transitions are defined in two main categories:**

    *   **Push Rules (Simulation of Productions):** For each production rule  `A → α`  in the CFG, add the following transition to the NPDA:  `δ(q, ε, A) = {(q, α)}`.  This means, in state `q`, without reading any input (ε), if the top of the stack is `A`, replace `A` with `α`.  `α` needs to be pushed onto the stack *in reverse order* to be processed correctly (left to right).

    *   **Match Rules (Terminal Matching):** For each terminal symbol `a` in the CFG, add the following transition to the NPDA: `δ(q, a, a) = {(q, ε)}`.  This means, in state `q`, if the input symbol is `a` and the top of the stack is also `a`, pop `a` from the stack.

4.  **Initialization:**  The initial stack symbol is the start variable of the CFG (Z0 = S). The initial state is the single state `q`.

**Example:**

Consider the CFG:  `G = ({S}, {a, b}, P, S)` with production rules:

*   `S → aSb`
*   `S → ε`

Convert this CFG to an equivalent NPDA.

**Solution:**

NPDA:  `M = ({q}, {a, b}, {S, a, b}, δ, q, S, ∅)`

Transition Function `δ`:

*   `δ(q, ε, S) = {(q, aSb)}`  (From S → aSb)
*   `δ(q, ε, S) = {(q, ε)}`   (From S → ε)
*   `δ(q, a, a) = {(q, ε)}`   (Matching 'a')
*   `δ(q, b, b) = {(q, ε)}`   (Matching 'b')

**Explanation:**

*   The first two transitions simulate the production rules of the CFG.
*   The last two transitions consume the input symbols `a` and `b` when they match the top of the stack.

### 3. Converting an NPDA to a CFG

This conversion is more complex. The idea is to construct a CFG whose variables represent the computation that the NPDA performs to reach a state with a specific stack content from another state with a particular stack content.

**General Procedure (Simplified Explanation):**

1.  **Variables:** Create a variable for each pair of states (p, q) in the NPDA, denoted as `[pAq]`, where `A` is a stack symbol. `[pAq]` represents the set of all strings that the NPDA can read to transition from state `p` to state `q` while popping `A` off the stack.

2.  **Start Variable:** The start variable of the CFG is  `[q0Z0f]` for each `f` in F, where q0 is the initial state, Z0 is the initial stack symbol and F is the set of final states of the NPDA. If accepting by empty stack, then create [q0Z0q] for each state q ∈ Q.

3.  **Production Rules:** Define production rules based on the transitions of the NPDA:

    *   **Case 1: δ(p, a, A) contains (q, ε):** This means that in state `p`, on input `a`, if `A` is on the top of the stack, the NPDA can transition to state `q` and pop `A`. Create production rule `[pAq] → a`.

    *   **Case 2: δ(p, a, A) contains (q, BC):** This means that in state `p`, on input `a`, if `A` is on the top of the stack, the NPDA can transition to state `q` and push `BC` onto the stack. Create production rules of the form `[pAq] → a[qBr][rCq]` for all possible states `r`.  This represents popping 'A' after pushing 'BC' by passing through some intermediate state 'r'. You'll need to create rules for *all* possible states 'r' in Q.

    *   **Case 3: δ(p, ε, A) contains (q, ε):** This means that in state `p`, on input `ε` (no input), if `A` is on the top of the stack, the NPDA can transition to state `q` and pop `A`. Create production rule `[pAq] → ε`.

    *   **Case 4: δ(p, ε, A) contains (q, BC):** This means that in state `p`, on input `ε`, if `A` is on the top of the stack, the NPDA can transition to state `q` and push `BC` onto the stack. Create production rules of the form `[pAq] → [qBr][rCq]` for all possible states `r`.

**Example:**

Consider a NPDA  `M = ({p, q}, {a, b}, {Z0, a, b}, δ, p, Z0, {q})`

Transition Function `δ`:

*   `δ(p, a, Z0) = {(p, aZ0)}`
*   `δ(p, a, a) = {(p, aa)}`
*   `δ(p, b, a) = {(q, ε)}`
*   `δ(q, b, a) = {(q, ε)}`
*   `δ(q, ε, Z0) = {(q, ε)}`

Convert this NPDA to an equivalent CFG.

**Solution (Partial):**

CFG Variables: `[pZ0p], [pZ0q], [pap], [paq], [pbp], [pbq], [qpq], [qz0p], [qz0q], [qap], [qaq], [qbp], [qbq]`

Start Variable: `[pZ0q]`

Production Rules (Examples):

*   From `δ(p, a, Z0) = {(p, aZ0)}`, we get: `[pZ0q] → a[pap][pZ0q]` and `[pZ0q] → a[paq][qZ0q]` (considering both possible destination states for 'aZ0')
*   From `δ(p, a, a) = {(p, aa)}`, we get: `[pap] → a[pap][pap]` and `[pap] → a[paq][qap]` and `[paq] → a[pap][paq]` and `[paq] → a[paq][qaq]`
*   From `δ(p, b, a) = {(q, ε)}`, we get: `[paq] → b`
*   From `δ(q, b, a) = {(q, ε)}`, we get: `[qaq] → b`
*   From `δ(q, ε, Z0) = {(q, ε)}`, we get: `[qz0q] → ε`

**Note:** This conversion generates a lot of production rules.  It is crucial to understand the logic behind the rules to construct them correctly. The complete CFG requires generating all possible rules based on the transition function and the set of states.

### 4. Important Points to Remember

*   **NPDA to CFG is more complex than CFG to NPDA.**  It involves creating many variables and production rules.
*   The examples provided are simplified. Real-world examples can be much larger and more intricate.
*   When converting CFG to NPDA, remember to push the right-hand side of the production rule onto the stack in reverse order.
*   When converting NPDA to CFG, consider *all* possible state combinations when creating production rules based on pushing multiple symbols onto the stack.
*   Practice is essential to master these conversions.

### 5. Practice Questions/Exercises

**Question 1:**

Convert the following CFG to an equivalent NPDA:

`S → aSb | bSa | ε`

**Answer:**

`M = ({q}, {a, b}, {S, a, b}, δ, q, S, ∅)`

Transition Function `δ`:

*   `δ(q, ε, S) = {(q, aSb)}`
*   `δ(q, ε, S) = {(q, bSa)}`
*   `δ(q, ε, S) = {(q, ε)}`
*   `δ(q, a, a) = {(q, ε)}`
*   `δ(q, b, b) = {(q, ε)}`

**Question 2:**

Consider the NPDA `M = ({q0, q1}, {a, b}, {Z, A}, δ, q0, Z, {q1})` with the following transitions:

*   `δ(q0, a, Z) = {(q0, AZ)}`
*   `δ(q0, a, A) = {(q0, AA)}`
*   `δ(q0, b, A) = {(q1, ε)}`
*   `δ(q1, b, A) = {(q1, ε)}`
*   `δ(q1, ε, Z) = {(q1, ε)}`

Write down the start variable and the productions that will be in the grammar for `[q0Aq1]`.

**Answer:**

Start Variable: `[q0Zq1]`

Productions for `[q0Aq1]` will be formed from the transition `δ(q0, a, A) = {(q0, AA)}` and `δ(q0,b,A) = {(q1, ε)}`.

* `[q0Aq1] -> a[q0Aq0][q0Aq1]`
* `[q0Aq1] -> a[q0Aq1][q1Aq1]`
* `[q0Aq1] -> b`

**Question 3:**

Which of the following is NOT a valid transition in an NPDA when converting from a CFG with the production rule `A → aB`? (Assuming `q` is the only state)

a)  `δ(q, ε, A) = {(q, aB)}`
b)  `δ(q, a, A) = {(q, B)}`
c)  `δ(q, ε, A) = {(q, Ba)}`
d)  `δ(q, a, a) = {(q, ε)}`

**Answer:**

c) `δ(q, ε, A) = {(q, Ba)}` is NOT valid.  When converting a CFG to NPDA for production rules of the form `A -> α`, the NPDA must push `α` onto the stack in reverse order so the terminal symbols on the LHS can be matched.
a) is valid, and requires matching `a` to the input, and then evaluating variable `B` in later transitions.
b) is invalid, there is no terminal `a` to match and then replace it with variable `B`
d) is valid as the matching of terminal `a`.
Therefore, the answer is (c).

**Question 4:**

True or False:  When converting a CFG to an NPDA, the resulting NPDA always accepts by final state.

**Answer:**

False. When converting a CFG to an NPDA, the NPDA typically accepts by an empty stack. Final states are not usually needed for this type of conversion.
