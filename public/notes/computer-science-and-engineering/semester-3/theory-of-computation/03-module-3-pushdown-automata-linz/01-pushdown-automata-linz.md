---
title: "Pushdown Automata (Linz)"
subject: "THEORY OF COMPUTATION"
module: "Module 3: Pushdown Automata (Linz)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8abbb"
status: "completed"
scrapedAt: "2026-05-20T16:30:06.323Z"
---
# THEORY OF COMPUTATION: Module 3 - Pushdown Automata (Linz)

## Topic: Pushdown Automata (PDA)

These notes cover the topic of Pushdown Automata (PDA) based on the material presented by Peter Linz in his book, "An Introduction to Formal Languages and Automata."

### Learning Outcomes:

Upon completion of this module, you should be able to:

*   Define Pushdown Automata (PDA) formally.
*   Explain the components of a PDA and their functions.
*   Construct PDAs for given Context-Free Languages (CFLs).
*   Trace the computation of a PDA for a given input string.
*   Convert Context-Free Grammars (CFGs) to PDAs.
*   Distinguish between Deterministic Pushdown Automata (DPDA) and Non-Deterministic Pushdown Automata (NPDA).
*   Understand the limitations of PDAs.
*   Define Instantaneous Description (ID) for PDAs and use it to describe the computation process.
*   Understand the equivalence of CFGs and PDAs.

### 1. Introduction to Pushdown Automata (PDA)

*   **Motivation:** Finite Automata (FA) are insufficient to recognize languages like a^n b^n. PDAs extend FAs by adding a *stack*, enabling them to "remember" information. This allows them to recognize Context-Free Languages (CFLs).

*   **Informal Description:**  A PDA is a finite automaton augmented with a stack.  It can read input symbols, change its state, and push/pop symbols on the stack.  The decision to transition is based on the current state, the input symbol, and the symbol at the top of the stack.

### 2. Formal Definition of a Pushdown Automaton (PDA)

A PDA is a 7-tuple:

M = (Q, Σ, Γ, δ, q₀, Z₀, F) where:

*   **Q:** A finite set of states.
*   **Σ:** A finite input alphabet.
*   **Γ:** A finite stack alphabet.
*   **δ:** The transition function, a mapping:  Q × (Σ ∪ {ε}) × Γ → P(Q × Γ*)
    *   P(X) denotes the power set of X (the set of all subsets of X).
    *   This means that the transition function takes a state, an input symbol (or ε), and a stack symbol and returns a *set* of possible next states and stack operations.
*   **q₀:** The initial state, q₀ ∈ Q.
*   **Z₀:** The initial stack symbol, Z₀ ∈ Γ.
*   **F:** The set of accepting states, F ⊆ Q.  (Sometimes omitted, in which case acceptance is by empty stack.)

**Explanation of the Transition Function (δ):**

`δ(q, a, X) = {(p₁, Y₁), (p₂, Y₂), ..., (pₙ, Yₙ)}`

This means that if the PDA is in state `q`, reads input symbol `a` (or `ε`), and the top of the stack is `X`, then it can:

1.  Transition to state `pᵢ` (where `i` is any integer from 1 to n).
2.  Replace the top of the stack symbol `X` with the string `Yᵢ` (where `Yᵢ` can be any string of stack symbols, including the empty string ε).

*   If `Yᵢ = ε`, the PDA *pops* the stack.
*   If `Yᵢ = X`, the stack remains unchanged (the top symbol is effectively replaced with itself).
*   If `Yᵢ =  WX` for some string `W`, the PDA *pushes* `W` onto the stack, effectively putting `W` on top of `X`. Note that `W` is pushed right to left so that the leftmost symbol of `W` becomes the new top of stack.

### 3. Instantaneous Description (ID) of a PDA

*   **Definition:**  An Instantaneous Description (ID) describes the current configuration of a PDA. It's a triple (q, w, γ) where:
    *   `q` is the current state.
    *   `w` is the remaining input string.
    *   `γ` is the current stack contents (written from top to bottom).

*   **Move Relation (⊢):** The move relation `⊢` describes how the PDA transitions from one ID to another based on the transition function.

    *   `(q, aw, Xγ) ⊢ (p, w, Yγ)` if `(p, Y) ∈ δ(q, a, X)`  where `a ∈ Σ ∪ {ε}`.
    *   This means: if the PDA is in state `q`, has input `aw` (where `a` is the symbol being read), and the stack is `Xγ`, then it can move to state `p`, consume input `a`, replace `X` with `Y` on the stack, resulting in the new stack `Yγ`, based on the transition function δ.

*   **Multiple Move Relation (⊢*):** Represents zero or more moves.
    *   `(q₁, w₁, γ₁) ⊢* (q₂, w₂, γ₂)` means that the PDA can transition from ID (q₁, w₁, γ₁) to ID (q₂, w₂, γ₂) in zero or more steps.

### 4. Acceptance by a PDA

A PDA can accept a string in two ways:

*   **Acceptance by Final State:** A string `w` is accepted if, starting from the initial ID, the PDA can reach a final state after reading the entire input string.

    *   `L(M) = {w | (q₀, w, Z₀) ⊢* (q, ε, γ) and q ∈ F}`
    *   Where `γ` is any stack content. The stack content is irrelevant.

*   **Acceptance by Empty Stack:** A string `w` is accepted if, starting from the initial ID, the PDA can empty the stack after reading the entire input string.

    *   `L(M) = {w | (q₀, w, Z₀) ⊢* (q, ε, ε) for some q ∈ Q}`
    *   The final state is irrelevant.

**Note:**  These two acceptance criteria are equivalent; any language accepted by one method can be accepted by the other. It is typically easier to design PDAs for certain languages using one acceptance method over the other.

### 5. Example PDA Construction and Tracing

**Example 1:  Language L = {a^n b^n | n ≥ 0} Accepted by Final State**

M = (Q, Σ, Γ, δ, q₀, Z₀, F) where:

*   Q = {q₀, q₁, q₂}
*   Σ = {a, b}
*   Γ = {Z₀, A}
*   δ:
    *   δ(q₀, a, Z₀) = {(q₀, AZ₀)}  // Push A for each 'a'
    *   δ(q₀, a, A)  = {(q₀, AA)}   // Push A for each 'a'
    *   δ(q₀, b, A)  = {(q₁, ε)}    // Pop A for each 'b'
    *   δ(q₁, b, A)  = {(q₁, ε)}    // Pop A for each 'b'
    *   δ(q₁, ε, Z₀) = {(q₂, Z₀)}   // Transition to accept state when finished
*   q₀ = q₀
*   Z₀ = Z₀
*   F = {q₂}

**Tracing Input "aabb":**

1.  (q₀, aabb, Z₀) ⊢ (q₀, abb, AZ₀)  // Push A
2.  (q₀, abb, AZ₀) ⊢ (q₀, bb, AAZ₀)  // Push A
3.  (q₀, bb, AAZ₀) ⊢ (q₁, b, AZ₀)    // Pop A
4.  (q₁, b, AZ₀)  ⊢ (q₁, ε, Z₀)     // Pop A
5.  (q₁, ε, Z₀)  ⊢ (q₂, ε, Z₀)     // Transition to final state

Since we reach the final state q₂ after processing the entire input, "aabb" is accepted.

**Example 2:  Language L = {a^n b^n | n ≥ 0} Accepted by Empty Stack**

M = (Q, Σ, Γ, δ, q₀, Z₀) where:

*   Q = {q₀, q₁}
*   Σ = {a, b}
*   Γ = {Z₀, A}
*   δ:
    *   δ(q₀, a, Z₀) = {(q₀, AZ₀)}  // Push A for each 'a'
    *   δ(q₀, a, A)  = {(q₀, AA)}   // Push A for each 'a'
    *   δ(q₀, b, A)  = {(q₁, ε)}    // Pop A for each 'b'
    *   δ(q₁, b, A)  = {(q₁, ε)}    // Pop A for each 'b'
    *   δ(q₁, ε, Z₀) = {(q₁, ε)}   // Empty stack when finished
*   q₀ = q₀
*   Z₀ = Z₀
*   F = ∅ (no accepting states)

**Tracing Input "aabb":**

1.  (q₀, aabb, Z₀) ⊢ (q₀, abb, AZ₀)  // Push A
2.  (q₀, abb, AZ₀) ⊢ (q₀, bb, AAZ₀)  // Push A
3.  (q₀, bb, AAZ₀) ⊢ (q₁, b, AZ₀)    // Pop A
4.  (q₁, b, AZ₀)  ⊢ (q₁, ε, Z₀)     // Pop A
5.  (q₁, ε, Z₀)  ⊢ (q₁, ε, ε)     // Empty the stack

Since the stack is empty after processing the entire input, "aabb" is accepted.

**Example 3: Palindromes over {a,b} -  L = {w | w = w^R}**

This requires non-determinism as the PDA needs to "guess" the middle of the string.  We will cover non-determinism in more detail later.

M = (Q, Σ, Γ, δ, q₀, Z₀, F) where:

*   Q = {q₀, q₁, q₂}
*   Σ = {a, b}
*   Γ = {Z₀, a, b}
*   δ:
    *   δ(q₀, a, Z₀) = {(q₀, aZ₀)}  // Push a
    *   δ(q₀, b, Z₀) = {(q₀, bZ₀)}  // Push b
    *   δ(q₀, a, a)  = {(q₀, aa)}   // Push a
    *   δ(q₀, b, a)  = {(q₀, ba)}   // Push b
    *   δ(q₀, a, b)  = {(q₀, ab)}   // Push a
    *   δ(q₀, b, b)  = {(q₀, bb)}   // Push b
    *   δ(q₀, ε, Z₀) = {(q₁, Z₀)}  // Possible middle, do nothing, transition to q1
    *   δ(q₀, ε, a)  = {(q₁, a)}    // Possible middle, do nothing, transition to q1
    *   δ(q₀, ε, b)  = {(q₁, b)}    // Possible middle, do nothing, transition to q1
    *   δ(q₁, a, a)  = {(q₁, ε)}    // Pop a if matches input
    *   δ(q₁, b, b)  = {(q₁, ε)}    // Pop b if matches input
    *   δ(q₁, ε, Z₀) = {(q₂, Z₀)}  // Done, accept
*   q₀ = q₀
*   Z₀ = Z₀
*   F = {q₂}

### 6. Equivalence of CFGs and PDAs

*   **Theorem:**  A language L is context-free if and only if there exists a PDA M such that L = L(M).  This means that for every CFG, there exists a PDA that recognizes the same language, and vice versa.
*   **CFG to PDA Conversion:**
    1.  Let the CFG be G = (V, T, P, S), where V is the set of variables, T is the set of terminals, P is the set of productions, and S is the start variable.
    2.  Construct the PDA M = (Q, Σ, Γ, δ, q₀, Z₀, F) as follows:
        *   Q = {q} (single state is sufficient)
        *   Σ = T (terminals become input alphabet)
        *   Γ = V ∪ T (variables and terminals become stack alphabet)
        *   q₀ = q
        *   Z₀ = S (start variable becomes initial stack symbol)
        *   F = ∅ (acceptance by empty stack is used)
        *   δ is constructed based on the productions in P:
            *   For each production `A → w` in P, add the following transition to δ:
                *   `δ(q, ε, A) = {(q, w)}`
            *   For each terminal symbol `a` in T, add the following transition to δ:
                *   `δ(q, a, a) = {(q, ε)}`

**Example: CFG to PDA Conversion**

Let's convert the CFG  `S → aSa | bSb | ε` to a PDA.

1.  **CFG:** G = ({S}, {a, b}, {S → aSa, S → bSb, S → ε}, S)
2.  **PDA:** M = ({q}, {a, b}, {S, a, b}, δ, q, S, ∅)
3.  **Transition Function δ:**
    *   δ(q, ε, S) = {(q, aSa), (q, bSb), (q, ε)}  // Productions from CFG
    *   δ(q, a, a) = {(q, ε)}                      // Matching terminal a
    *   δ(q, b, b) = {(q, ε)}                      // Matching terminal b

### 7. Deterministic Pushdown Automata (DPDA) vs. Non-Deterministic Pushdown Automata (NPDA)

*   **DPDA:** For each state, input symbol (or ε), and top-of-stack symbol, there is *at most one* transition defined in the transition function. DPDAs are deterministic in their choices.
    *  `|δ(q, a, X)| + |δ(q, ε, X)| <= 1` for all `q in Q, a in Σ, X in Γ`.  Note that if there is a transition for `δ(q, ε, X)`, there cannot be a transition for `δ(q, a, X)` for any `a` in `Σ`.
*   **NPDA:** For each state, input symbol (or ε), and top-of-stack symbol, there can be *multiple* transitions defined in the transition function. Nondeterminism means the PDA can "guess" which transition to take.

*   **Key Difference:** DPDAs cannot always simulate NPDAs.  There exist CFLs that can be recognized by NPDAs but not by DPDAs.
*   **Example:**  The language of palindromes (L = {w | w = w^R}) is context-free but *cannot* be recognized by a deterministic PDA. A DPDA would need to "know" the middle of the string to start popping symbols off the stack, but without knowing the future input, it cannot.

### 8. Limitations of PDAs

*   PDAs recognize Context-Free Languages (CFLs).
*   They cannot recognize all languages. In particular, they cannot recognize Context-Sensitive Languages (CSLs) or unrestricted languages.
*   Example:  The language L = {a^n b^n c^n | n ≥ 0} is a Context-Sensitive Language (CSL) but is *not* a CFL, and therefore cannot be recognized by a PDA. PDAs only have one stack to keep track of 'a's and 'b's. The 'c's would require a second stack or other form of memory.

### 9. Important Points to Remember

*   PDAs extend FAs by adding a stack.
*   PDAs recognize Context-Free Languages (CFLs).
*   There are two ways a PDA can accept a string: by final state and by empty stack.
*   CFGs and PDAs are equivalent in expressive power.
*   DPDAs are less powerful than NPDAs.
*   PDAs have limitations and cannot recognize all languages (e.g., {a^n b^n c^n}).
*   Instantaneous Descriptions (IDs) are essential for tracing PDA computations.

### Practice Questions/Exercises

1.  **Design a PDA (by final state) for the language L = {0^n 1^2n | n ≥ 0}.**
2.  **Design a PDA (by empty stack) for the language L = {a^m b^n | m > n ≥ 0}.**
3.  **Convert the following CFG to a PDA (by empty stack): S → 0S1 | A, A → 1A0 | ε**
4.  **Is the language L = {a^n b^n c^m | n, m ≥ 0} context-free? Justify your answer.**
5.  **Trace the computation of your PDA from question 1 for the input "001111".**
6.  **Explain the difference between a DPDA and NPDA. Give an example of a language that can be recognized by an NPDA but not by a DPDA.**

### Answers to Practice Questions/Exercises

1.  **PDA for L = {0^n 1^2n | n ≥ 0} (by final state):**

    M = (Q, Σ, Γ, δ, q₀, Z₀, F) where:
    *   Q = {q₀, q₁, q₂}
    *   Σ = {0, 1}
    *   Γ = {Z₀, A}
    *   δ:
        *   δ(q₀, 0, Z₀) = {(q₀, AZ₀)}
        *   δ(q₀, 0, A)  = {(q₀, AA)}
        *   δ(q₀, 1, A)  = {(q₁, ε)}
        *   δ(q₁, 1, A)  = {(q₁, ε)}
        *   δ(q₁, ε, Z₀) = {(q₂, Z₀)}
    *   q₀ = q₀
    *   Z₀ = Z₀
    *   F = {q₂}

2.  **PDA for L = {a^m b^n | m > n ≥ 0} (by empty stack):**

    M = (Q, Σ, Γ, δ, q₀, Z₀) where:
    *   Q = {q₀, q₁, q₂}
    *   Σ = {a, b}
    *   Γ = {Z₀, A}
    *   δ:
        *   δ(q₀, a, Z₀) = {(q₀, AZ₀)}  // Push A for first 'a'
        *   δ(q₀, a, A) = {(q₀, AA)}   // Push A for remaining 'a's
        *   δ(q₀, b, A) = {(q₁, ε)}    // Pop 'A' for each 'b'
        *   δ(q₁, b, A) = {(q₁, ε)}    // Pop 'A' for each 'b'
        *   δ(q₁, ε, A) = {(q₂, ε)}    // Extra 'a's at the end
        *   δ(q₂, ε, A) = {(q₂, ε)}    // pop remaining A's.
        *   δ(q₂, ε, Z₀) = {(q₂, ε)}  // Empty Stack.
    *   q₀ = q₀
    *   Z₀ = Z₀
    *   F = ∅

3.  **CFG to PDA Conversion: S → 0S1 | A, A → 1A0 | ε**

    *   **PDA:** M = ({q}, {0, 1}, {S, A, 0, 1}, δ, q, S, ∅)
    *   **Transition Function δ:**
        *   δ(q, ε, S) = {(q, 0S1), (q, A)}
        *   δ(q, ε, A) = {(q, 1A0), (q, ε)}
        *   δ(q, 0, 0) = {(q, ε)}
        *   δ(q, 1, 1) = {(q, ε)}

4.  **Is L = {a^n b^n c^m | n, m ≥ 0} context-free?**

    Yes, the language is context-free.  It can be recognized by a PDA.  Intuitively, we use the stack to match the number of 'a's and 'b's, and then simply read the 'c's without using the stack to match them.

    CFG:
        S -> BC
        B -> aBb | ε
        C -> cC | ε
    This grammar generates {a^n b^n c^m | n, m ≥ 0}, so it is a CFL.

5.  **Trace for PDA of L = {0^n 1^2n | n ≥ 0} with input "001111":**

    1.  (q₀, 001111, Z₀) ⊢ (q₀, 01111, AZ₀)
    2.  (q₀, 01111, AZ₀)  ⊢ (q₀, 1111, AAZ₀)
    3.  (q₀, 1111, AAZ₀)  ⊢ (q₁, 111, AZ₀)
    4.  (q₁, 111, AZ₀)   ⊢ (q₁, 11, Z₀)
    5.  (q₁, 11, Z₀)    ⊢ (q₂, 11, Z₀) --> Stuck here because the string isn't fully consumed when reaching the final state. (INCORRECT STRING)

    However, let's trace for input "011":

    1.  (q₀, 011, Z₀) ⊢ (q₀, 11, AZ₀)
    2.  (q₀, 11, AZ₀) ⊢ (q₁, 1, Z₀)
    3.  (q₁, 1, Z₀) ⊢ (q₂, 1, Z₀) --> Stuck again

    For input "001111":

    1. (q₀, 001111, Z₀) ⊢ (q₀, 01111, AZ₀)
    2. (q₀, 01111, AZ₀) ⊢ (q₀, 1111, AAZ₀)
    3. (q₀, 1111, AAZ₀) ⊢ (q₁, 111, AZ₀)
    4. (q₁, 111, AZ₀)  ⊢ (q₁, 11, Z₀)
    5. (q₁, 11, Z₀)   ⊢ (q₂, ε, Z₀) -> NOT ACCEPTED, since the input is not fully consumed. It's stuck

    The machine only works for a string with a smaller number of 0s and 1s!

    The correct input "011":
     1. (q₀, 011, Z₀) ⊢ (q₀, 11, AZ₀)
     2. (q₀, 11, AZ₀) ⊢ (q₁, 1, Z₀)
     3. (q₁, 1, Z₀) ⊢ (q₁, ε, ε) -> Empty stack

     For accepted by final state, we have:

      1.  (q₀, 011, Z₀) ⊢ (q₀, 11, AZ₀)
     2.  (q₀, 11, AZ₀) ⊢ (q₁, 1, Z₀)
     3. (q₁, 1, Z₀) ⊢ (q₁, ε, Z₀)

6.  **Difference between DPDA and NPDA:**

    A DPDA has at most one transition possible for any given state, input symbol (or ε), and top-of-stack symbol. An NPDA can have multiple transitions, allowing it to "guess" the correct path. The language of palindromes (L = {w | w = w^R}) can be recognized by an NPDA, which "guesses" the middle of the string, but cannot be recognized by a DPDA.

These notes provide a comprehensive overview of Pushdown Automata (PDAs) based on the Linz textbook. They cover the formal definition, construction, examples, limitations, and relationship with Context-Free Grammars (CFGs). The practice questions and answers will help you solidify your understanding of the material.  Remember to practice constructing PDAs for different languages to master this topic.
