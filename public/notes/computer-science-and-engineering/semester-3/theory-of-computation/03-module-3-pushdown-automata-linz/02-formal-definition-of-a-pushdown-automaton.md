---
title: "Formal definition of a pushdown automaton"
subject: "THEORY OF COMPUTATION"
module: "Module 3: Pushdown Automata (Linz)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8abbc"
status: "completed"
scrapedAt: "2026-05-20T16:30:07.038Z"
---
# Theory of Computation: Module 3 - Pushdown Automata (Linz) - Formal Definition of a Pushdown Automaton

These notes cover the formal definition of a Pushdown Automaton (PDA) based on the content in Linz's "An Introduction to Formal Languages and Automata".

**Learning Outcomes:**

*   Understand the formal definition of a Pushdown Automaton (PDA).
*   Identify the components of a PDA and their functions.
*   Represent PDAs mathematically using the formal definition.
*   Differentiate between the components of a PDA definition.

## 1. Key Concepts and Definitions

*   **Pushdown Automaton (PDA):**  A finite automaton with an auxiliary data structure called a stack.  The stack allows PDAs to recognize context-free languages (CFLs), which are more powerful than regular languages recognized by finite automata.

*   **Formal Definition of a PDA:** A pushdown automaton (PDA) is defined as a 7-tuple:

    `M = (Q, Σ, Γ, δ, q₀, Z₀, F)`

    where:

    *   **Q:** A finite set of states.  Represents the different configurations the automaton can be in.
    *   **Σ:** A finite set of input symbols (the input alphabet).  The symbols the PDA can read from the input string.
    *   **Γ:** A finite set of stack symbols (the stack alphabet).  The symbols the PDA can store on its stack.
    *   **δ:** The transition function.  This function defines how the PDA moves from one state to another based on the current state, input symbol, and the stack top. The transition function maps from `Q × (Σ ∪ {ε}) × Γ` to `P(Q × Γ*)`, where `P` denotes the power set (set of all subsets).  This means the transition function can specify multiple possible transitions for a given input.  `ε` represents the empty string, allowing transitions without consuming input.  `Γ*` represents zero or more stack symbols, allowing the PDA to push or pop multiple symbols onto/from the stack.
    *   **q₀:** The start state. The state in which the PDA begins processing the input.  `q₀ ∈ Q`.
    *   **Z₀:** The initial stack symbol. The symbol initially placed on the stack.  `Z₀ ∈ Γ`.
    *   **F:** A set of accepting states. If the PDA ends in one of these states after processing the input, the input is accepted.  `F ⊆ Q`.

*   **Instantaneous Description (ID) of a PDA:** An ID captures the complete configuration of the PDA at any given point in time.  It is represented as a triple:

    `(q, w, α)`

    where:

    *   `q`: The current state.
    *   `w`: The remaining input string to be processed.
    *   `α`: The contents of the stack (from top to bottom).

*   **Moves in a PDA:**  The transition function `δ` defines the possible moves.  Given an ID `(q, aw, Xα)`, where `q` is the current state, `a` is the current input symbol (or ε), `w` is the remaining input, `X` is the symbol at the top of the stack, and `α` represents the rest of the stack content, if `(p, γ) ∈ δ(q, a, X)`, then the PDA can move to the ID `(p, w, γα)`.  This means:

    *   The PDA changes its state to `p`.
    *   If `a` was not ε, the PDA consumes the input symbol `a`.
    *   The PDA replaces the top of the stack `X` with the string `γ`. Note:
        *   If `γ = ε`, the PDA pops `X` from the stack.
        *   If `γ = X`, the top of the stack remains the same.
        *   If `γ = YX`, the PDA pushes `Y` onto the stack, with `X` still on the stack.

*   **Acceptance by Final State:** A PDA `M = (Q, Σ, Γ, δ, q₀, Z₀, F)` accepts a string `w` by final state if starting from the initial ID `(q₀, w, Z₀)`, the PDA can reach an ID `(q, ε, α)` where `q ∈ F` and `α ∈ Γ*`.  This means the entire input string `w` has been read, the PDA is in an accepting state, and the stack contents are irrelevant.

*   **Acceptance by Empty Stack:** A PDA `M = (Q, Σ, Γ, δ, q₀, Z₀, F)` accepts a string `w` by empty stack if starting from the initial ID `(q₀, w, Z₀)`, the PDA can reach an ID `(q, ε, ε)` where `q ∈ Q`. This means the entire input string `w` has been read, and the stack is empty. The final state is irrelevant.

## 2. Components of a PDA and Their Functions

| Component | Description                                                                 | Function                                                                                                  |
| --------- | --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Q         | Finite set of states                                                          | Represents the different control points in the PDA's operation.                                            |
| Σ         | Finite set of input symbols (alphabet)                                       | The symbols the PDA can read from the input string.                                                      |
| Γ         | Finite set of stack symbols (alphabet)                                       | The symbols the PDA can store on its stack.                                                               |
| δ         | Transition function: `Q × (Σ ∪ {ε}) × Γ → P(Q × Γ*)`                        | Determines the PDA's next move based on the current state, input symbol (or ε), and the stack top.         |
| q₀        | Start state: `q₀ ∈ Q`                                                      | The state in which the PDA begins processing the input.                                                      |
| Z₀        | Initial stack symbol: `Z₀ ∈ Γ`                                                      | The symbol initially placed on the stack, providing a starting point for stack operations.               |
| F         | Set of accepting states: `F ⊆ Q`                                                  | Indicates which states represent successful computation for acceptance by final state.                   |

## 3. Representing PDAs Mathematically

To represent a PDA mathematically, simply define each component of the 7-tuple.  Let's consider an example PDA that recognizes the language  `L = {w | w = aⁿbⁿ, n ≥ 0}`.

`M = (Q, Σ, Γ, δ, q₀, Z₀, F)`

*   `Q = {q₀, q₁, q₂}` (Three states: initial, processing 'a's, processing 'b's)
*   `Σ = {a, b}` (Input alphabet)
*   `Γ = {A, Z₀}` (Stack alphabet: A represents an 'a', Z₀ is the initial stack symbol)
*   `δ` (Transition function - defined below)
*   `q₀ = q₀` (Start state)
*   `Z₀ = Z₀` (Initial stack symbol)
*   `F = {q₂}` (Accepting state)

Now, define the transition function `δ`:

1.  `δ(q₀, a, Z₀) = {(q₀, AZ₀)}`  (Push 'A' onto the stack when reading 'a' in state q₀)
2.  `δ(q₀, a, A) = {(q₀, AA)}` (Push 'A' onto the stack when reading 'a' in state q₀)
3.  `δ(q₀, b, A) = {(q₁, ε)}`  (Pop 'A' from the stack when reading 'b' in state q₀, transition to q₁)
4.  `δ(q₁, b, A) = {(q₁, ε)}`  (Pop 'A' from the stack when reading 'b' in state q₁)
5.  `δ(q₁, ε, Z₀) = {(q₂, Z₀)}`  (Transition to accepting state q₂ when the input is finished and the stack contains only Z₀)
6.  `δ(q₀, ε, Z₀) = {(q₂, Z₀)}`  (Allow empty string to be accepted as well)

**Explanation of Transitions:**

*   **Transitions 1 & 2:** While in state `q₀` and reading 'a', push an 'A' onto the stack.  This effectively counts the number of 'a's.
*   **Transitions 3 & 4:** When reading a 'b' in state `q₀` or `q₁`, pop an 'A' from the stack. This matches 'b's with 'a's.
*   **Transition 5:** After reading all input, if the stack contains only the initial symbol `Z₀`, move to the accepting state `q₂`.
*   **Transition 6:** This allows the empty string (n=0) to be accepted as well.

## 4. Examples

**Example 1: String "aabb" accepted by the PDA defined above**

1.  `(q₀, aabb, Z₀)`  (Initial ID)
2.  `⊢ (q₀, abb, AZ₀)` (δ(q₀, a, Z₀) = {(q₀, AZ₀)})
3.  `⊢ (q₀, bb, AAZ₀)` (δ(q₀, a, A) = {(q₀, AA)})
4.  `⊢ (q₁, b, AZ₀)`  (δ(q₀, b, A) = {(q₁, ε)})
5.  `⊢ (q₁, ε, Z₀)`   (δ(q₁, b, A) = {(q₁, ε)})
6.  `⊢ (q₂, ε, Z₀)`   (δ(q₁, ε, Z₀) = {(q₂, Z₀)})  Since `q₂ ∈ F`, the string is accepted.

**Example 2: String "ab" accepted by the PDA defined above**

1.  `(q₀, ab, Z₀)`  (Initial ID)
2.  `⊢ (q₀, b, AZ₀)` (δ(q₀, a, Z₀) = {(q₀, AZ₀)})
3.  `⊢ (q₁, ε, Z₀)`  (δ(q₀, b, A) = {(q₁, ε)})
4.  `⊢ (q₂, ε, Z₀)`   (δ(q₁, ε, Z₀) = {(q₂, Z₀)})  Since `q₂ ∈ F`, the string is accepted.

**Example 3: String "aba" rejected by the PDA defined above**

1.  `(q₀, aba, Z₀)`
2.  `⊢ (q₀, ba, AZ₀)`
3.  `⊢ (q₁, a, Z₀)`
4. The PDA has no defined transition from state q1 on input 'a' with Z0 on the stack. Therefore the string will be rejected, due to the computation halting on a non-accepting state.

## 5. Practice Questions/Exercises

**Question 1:**

Define a PDA that accepts the language `L = {w | w contains more a's than b's}`.  Provide the formal definition and briefly explain the role of each state and transition.

**Answer 1:**

`M = (Q, Σ, Γ, δ, q₀, Z₀, F)`

*   `Q = {q₀, q₁, q₂}`  (q₀: initial, q₁: more a's, q₂: accepting)
*   `Σ = {a, b}`
*   `Γ = {A, Z₀}` (A represents an 'a' surplus)
*   `δ`:
    *   `δ(q₀, a, Z₀) = {(q₁, AZ₀)}` (First 'a' encountered, push onto the stack and move to state q1 indicating more a's)
    *   `δ(q₀, a, A) = {(q₁, AA)}` (Another 'a', push onto stack when more a's are already being tracked)
    *   `δ(q₀, b, A) = {(q₀, ε)}` (Encountered a 'b', cancel out an 'a' when not in more a's mode)
    *   `δ(q₀, b, Z₀) = {(q₀, Z₀)}` (Encountered a 'b', don't do anything)
    *   `δ(q₁, a, A) = {(q₁, AA)}` (Encountered an 'a' when more a's are present, push)
    *   `δ(q₁, a, Z₀) = {(q₁, AZ₀)}` (First 'a' encountered, push onto the stack and move to state q1 indicating more a's)
    *   `δ(q₁, b, A) = {(q₀, ε)}` (Encountered a 'b', cancel out an 'a' )
    *   `δ(q₁, b, Z₀) = {(q₀, Z₀)}` (Encountered a 'b', don't do anything)
    *   `δ(q₀, ε, A) = {(q₂, A)}` (Move to q2 as more 'a's present)
    *   `δ(q₁, ε, A) = {(q₂, A)}` (Move to q2 as more 'a's present)
*   `q₀ = q₀`
*   `Z₀ = Z₀`
*   `F = {q₂, q₁}` (Accepts if there are more a's.)

**Question 2:**

Explain the difference between acceptance by final state and acceptance by empty stack.  Which acceptance method is generally more powerful and why?

**Answer 2:**

*   **Acceptance by Final State:** The PDA accepts the input if it reads the entire input string and ends in a state that belongs to the set of accepting states (F). The stack contents are irrelevant.

*   **Acceptance by Empty Stack:** The PDA accepts the input if it reads the entire input string and the stack is empty (contains only the initial stack symbol which has then been popped). The final state is irrelevant.

*   Both methods of acceptance are equally powerful. A PDA accepting a language L by final state can always be converted to a PDA accepting L by empty stack and vice versa.

**Question 3:**

Given the PDA M = ({q0, q1}, {a, b}, {A, Z0}, δ, q0, Z0, {q1}), and the transition function δ defined as follows:

*   δ(q0, a, Z0) = {(q0, AZ0)}
*   δ(q0, a, A) = {(q0, AA)}
*   δ(q0, b, A) = {(q1, ε)}
*   δ(q1, b, A) = {(q1, ε)}
*   δ(q1, ε, Z0) = {(q1, Z0)}

Trace the execution of this PDA on the input string "aabb".  Does this PDA accept the string by final state?

**Answer 3:**

1.  (q0, aabb, Z0)
2.  ⊢ (q0, abb, AZ0)
3.  ⊢ (q0, bb, AAZ0)
4.  ⊢ (q1, b, AZ0)
5.  ⊢ (q1, ε, Z0)
6.  ⊢ (q1, ε, Z0)

Yes, the PDA accepts "aabb" by final state, as it ends in state q1, which is in the set of accepting states F = {q1}.

## 6. Important Points to Remember

*   The transition function `δ` is the heart of the PDA. Understanding how it works is crucial.
*   Pay close attention to the order in which stack operations (push/pop) occur. The stack follows a LIFO (Last-In, First-Out) principle.
*   The choice of stack symbols and their purpose depends on the language the PDA is designed to recognize.
*   While a PDA can have multiple transitions for a given input, it is *deterministic* if for each combination of state, input symbol, and stack symbol, there is only one possible transition. If multiple choices are possible, it's a *non-deterministic* PDA.
*   Be comfortable with the concept of Instantaneous Descriptions (IDs) and how they represent the PDA's state during computation.
*   Remember the difference between acceptance by final state and acceptance by empty stack. Although they are equivalent in power, they are defined differently.
