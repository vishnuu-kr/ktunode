---
title: "Examples of pushdown automata"
subject: "THEORY OF COMPUTATION"
module: "Module 3: Pushdown Automata (Linz)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8abbe"
status: "completed"
scrapedAt: "2026-05-20T16:30:08.480Z"
---
# THEORY OF COMPUTATION - MODULE 3: PUSHDOWN AUTOMATA - EXAMPLES OF PUSHDOWN AUTOMATA (LINZ)

## Learning Outcomes:

*   Understand the design process for Pushdown Automata (PDA) for specific languages.
*   Be able to construct PDAs for languages described by regular expressions, context-free grammars (CFGs), and specific string patterns.
*   Trace the execution of a PDA on a given input string.
*   Recognize the different design techniques for handling language features like palindromes, balanced parentheses, and repetition.

## 1. Key Concepts and Definitions (Review)

*   **Pushdown Automaton (PDA):** A finite automaton with a stack.  The stack allows PDAs to "remember" information about the input string, enabling them to recognize context-free languages.
*   **Formal Definition of a PDA:** A PDA is a 7-tuple:  M = (Q, Σ, Γ, δ, q₀, Z₀, F), where:
    *   Q is a finite set of states.
    *   Σ is the input alphabet.
    *   Γ is the stack alphabet.
    *   δ: Q x (Σ ∪ {ε}) x Γ → P(Q x Γ\*) is the transition function (P(X) is the power set of X).
    *   q₀ ∈ Q is the start state.
    *   Z₀ ∈ Γ is the initial stack symbol.
    *   F ⊆ Q is the set of accept states.
*   **Instantaneous Description (ID):** A snapshot of the PDA's configuration at a particular moment.  It's a triple (q, w, γ), where:
    *   q is the current state.
    *   w is the remaining input string.
    *   γ is the stack contents (leftmost symbol is on top).
*   **Acceptance by Final State:** A string w is accepted by a PDA if, starting from the initial configuration (q₀, w, Z₀), the PDA reaches a configuration (q, ε, γ), where q ∈ F (an accept state) and γ can be anything.
*   **Acceptance by Empty Stack:** A string w is accepted by a PDA if, starting from the initial configuration (q₀, w, Z₀), the PDA reaches a configuration (q, ε, ε) (empty stack).
*   **Non-Determinism:**  PDAs are inherently non-deterministic because the transition function can have multiple possible transitions for a given state, input symbol, and stack symbol.  This allows PDAs to "guess" the correct path.

## 2. Design Techniques for PDAs

*   **Storing information on the stack:** The core idea is to use the stack to store information about the input string that can't be remembered by the finite state part of the PDA.
*   **Matching pairs:** For languages like palindromes or balanced parentheses, store the first half/part on the stack and then, when the second half/part is encountered, pop symbols from the stack to match the input.
*   **Using ε-transitions:**  ε-transitions allow the PDA to change its state or manipulate the stack without consuming an input symbol.  This is useful for making decisions based on the stack contents or for transitioning between different phases of the computation.
*   **Exploiting Non-Determinism:**  When the exact center of a string (like in palindromes) isn't known in advance, non-determinism is used to "guess" the center.

## 3. Examples of Pushdown Automata

### 3.1 Example 1: Language L = {w | w ∈ {0, 1}* and w has an equal number of 0s and 1s}

This example demonstrates how a PDA can *attempt* (but not definitively) to recognize a language that is not context-free, highlighting the limitations of PDAs.  Crucially, a PDA *cannot* recognize this language definitively.

**PDA M = (Q, Σ, Γ, δ, q₀, Z₀, F)**

*   **Q = {q₀, q₁}** (States)
*   **Σ = {0, 1}** (Input Alphabet)
*   **Γ = {0, 1, Z₀}** (Stack Alphabet)
*   **q₀** (Start State)
*   **Z₀** (Initial Stack Symbol)
*   **F = {q₁}** (Accepting State)

**Transition Function δ:**

1.  **δ(q₀, 0, Z₀) = {(q₀, 0Z₀)}**  (Push 0 onto the stack if the input is 0 and Z₀ is on the top)
2.  **δ(q₀, 1, Z₀) = {(q₀, 1Z₀)}**  (Push 1 onto the stack if the input is 1 and Z₀ is on the top)
3.  **δ(q₀, 0, 0) = {(q₀, 00)}**  (Push 0 onto the stack if the input is 0 and 0 is on the top)
4.  **δ(q₀, 0, 1) = {(q₀, ε)}**   (Pop 1 from the stack if the input is 0 and 1 is on the top)
5.  **δ(q₀, 1, 1) = {(q₀, 11)}**  (Push 1 onto the stack if the input is 1 and 1 is on the top)
6.  **δ(q₀, 1, 0) = {(q₀, ε)}**   (Pop 0 from the stack if the input is 1 and 0 is on the top)
7.  **δ(q₀, ε, Z₀) = {(q₁, Z₀)}** (Move to accepting state if no more input and the stack contains only the initial symbol)
8.  **δ(q₀, ε, ε) = {(q₁, ε)}** (Move to accepting state if no more input and the stack is empty)

**Explanation:**

The PDA pushes symbols onto the stack, and tries to pop the opposite symbol from the stack when it's encountered on input. It *attempts* to maintain a balance of 0s and 1s on the stack. However, if the input string is, for example, "00110011", the PDA will accept even though the string contains two sets of balanced "0011". The PDA will not be able to definitively determine if the *entire* string has an equal number of 0s and 1s *before* reaching the end. This illustrates why PDAs cannot generally recognize languages that require counting multiple occurrences without explicit structure.

**Important Note:** This PDA does *not* correctly recognize the language in all cases. It only works for specific string arrangements. The language {w | w ∈ {0, 1}* and w has an equal number of 0s and 1s} is *not* context-free, therefore a PDA cannot definitively recognize it.

### 3.2 Example 2: Language L = {w c wᴿ | w ∈ {a, b}*} (Palindrome with a Center Marker 'c')

This example demonstrates a classic palindrome recognition using a PDA.

**PDA M = (Q, Σ, Γ, δ, q₀, Z₀, F)**

*   **Q = {q₀, q₁, q₂}** (States)
*   **Σ = {a, b, c}** (Input Alphabet)
*   **Γ = {a, b, Z₀}** (Stack Alphabet)
*   **q₀** (Start State)
*   **Z₀** (Initial Stack Symbol)
*   **F = {q₂}** (Accepting State)

**Transition Function δ:**

1.  **δ(q₀, a, Z₀) = {(q₀, aZ₀)}** (Push 'a' onto the stack)
2.  **δ(q₀, b, Z₀) = {(q₀, bZ₀)}** (Push 'b' onto the stack)
3.  **δ(q₀, a, a) = {(q₀, aa)}**   (Push 'a' onto the stack)
4.  **δ(q₀, b, b) = {(q₀, bb)}**   (Push 'b' onto the stack)
5.  **δ(q₀, a, b) = {(q₀, ab)}**   (Push 'a' onto the stack)
6.  **δ(q₀, b, a) = {(q₀, ba)}**   (Push 'b' onto the stack)
7.  **δ(q₀, c, Z₀) = {(q₁, Z₀)}** (Move to the comparison state upon encountering 'c')
8.  **δ(q₀, c, a) = {(q₁, a)}**  (Move to the comparison state upon encountering 'c')
9.  **δ(q₀, c, b) = {(q₁, b)}**  (Move to the comparison state upon encountering 'c')
10. **δ(q₁, a, a) = {(q₁, ε)}**   (Pop 'a' if the input is 'a' and 'a' is on top of the stack)
11. **δ(q₁, b, b) = {(q₁, ε)}**   (Pop 'b' if the input is 'b' and 'b' is on top of the stack)
12. **δ(q₁, ε, Z₀) = {(q₂, Z₀)}** (Accept if the stack contains only Z₀ after processing input)
13. **δ(q₁, ε, ε) = {(q₂, ε)}**   (Accept if the stack is empty after processing input).  This is effectively the same as the above, but explicitly shown.

**Explanation:**

*   **q₀:** This state reads the first part of the string (w) and pushes each symbol onto the stack.
*   **q₁:** This state is reached when the 'c' is encountered. It then reads the second part of the string (wᴿ) and pops symbols from the stack. If the input symbol matches the top of the stack, it's popped.
*   **q₂:**  Accepting state. If all the input is processed and the stack is empty (or only contains Z₀), the string is accepted.

**Trace (Example): Input = "abcbaba"**

1.  **(q₀, abcbaba, Z₀) |- (q₀, bcbaba, aZ₀) |- (q₀, cbaba, baZ₀) |- (q₁, baba, baZ₀)  // Read 'abc', push 'ab'**
2.  **(q₁, baba, baZ₀) |- (q₁, aba, aZ₀) |- (q₁, ba, Z₀) |- (q₁, a, bZ₀)  // Compare and pop**
3.  **(q₁, a, bZ₀) |- Stuck (no valid transition).**

Since the PDA gets stuck, the string "abcbaba" is *not* accepted.  Let's try "abba":

1. **(q₀, abba, Z₀) |- (q₀, bba, aZ₀) |- (q₀, ba, baZ₀)** Push 'a' and 'b'
2. **(q₀, a, bZ₀) |- (q₀, ε, Z₀)** Push 'a', 'b'
3.  **(q₀, ε, Z₀) = {(q₁, Z₀)}** Move to the comparison state upon encountering 'c')
4.  **(q₁, a, aZ₀) |- (q₁, b, bZ₀)** Pop 'a' and 'b'
5.  **(q₁, ε, Z₀)  |- (q₂, Z₀)** Accept

This example shows what happens when the string is not the correct format, and an example of a failed execution.
An example with c in the correct position:
Let's try "abcba":

1. **(q₀, abcba, Z₀) |- (q₀, bcba, aZ₀) |- (q₀, cba, baZ₀)** Push 'a' and 'b'
2. **(q₀, ba, ε)  |- (q₁, ε, Z₀)** Push 'a', 'b'
3.  **(q₁, cba, baZ₀) |- (q₁, ba, aZ₀)** Compare and pop
4.  **(q₁, ba, aZ₀)  |- (q₂, Z₀)** Accept.

**Practice:**

Design a PDA for the language L = {0ⁿ1ⁿ | n ≥ 0}.

**Solution:**

**PDA M = (Q, Σ, Γ, δ, q₀, Z₀, F)**

*   **Q = {q₀, q₁, q₂}**
*   **Σ = {0, 1}**
*   **Γ = {0, Z₀}**
*   **q₀**
*   **Z₀**
*   **F = {q₂}**

**Transition Function δ:**

1.  **δ(q₀, 0, Z₀) = {(q₀, 0Z₀)}** (Push 0 onto the stack)
2.  **δ(q₀, 0, 0) = {(q₀, 00)}**   (Push 0 onto the stack)
3.  **δ(q₀, 1, 0) = {(q₁, ε)}**   (Pop 0 if the input is 1 and 0 is on the top)
4.  **δ(q₁, 1, 0) = {(q₁, ε)}**   (Pop 0 if the input is 1 and 0 is on the top)
5.  **δ(q₁, ε, Z₀) = {(q₂, Z₀)}** (Accept if the stack contains only Z₀ after processing input)
6.  **δ(q₀, ε, Z₀) = {(q₂, Z₀)}** (Accept if the stack contains only Z₀ after processing input - handles the case where n=0).

**Explanation:**

*   **q₀:** Pushes 0s onto the stack.
*   **q₁:** Pops 0s from the stack when encountering 1s.
*   **q₂:** Accepting state when the stack is empty (or only contains Z₀) after processing all input.

### 3.3 Example 3:  Language L = {aⁿbᵐcⁿ | n, m ≥ 1}

**PDA M = (Q, Σ, Γ, δ, q₀, Z₀, F)**

*   **Q = {q₀, q₁, q₂, q₃}**
*   **Σ = {a, b, c}**
*   **Γ = {A, Z₀}**  (Only need 'A' to represent 'a')
*   **q₀**
*   **Z₀**
*   **F = {q₃}**

**Transition Function δ:**

1.  **δ(q₀, a, Z₀) = {(q₀, AZ₀)}**  (Push 'A' for each 'a')
2.  **δ(q₀, a, A) = {(q₀, AA)}**
3.  **δ(q₀, b, A) = {(q₁, A)}**  (Move to 'b' phase)
4.  **δ(q₁, b, A) = {(q₁, A)}**  (Remain in 'b' phase; 'A' doesn't matter here)
5.   **δ(q₁, c, A) = {(q₁, A)}** (Consume 'b's in state q1 without modifying the stack )
6.   **δ(q₁, c, A) = {(q2,A)}** (Move to compare 'c' phase)
7.  **δ(q₂, c, A) = {(q₂, ε)}**  (Pop 'A' for each 'c' when compare to a)
8.  **δ(q₂, ε, Z₀) = {(q₃, Z₀)}**  (Accept if 'c's match number of 'a's)

**Explanation:**

*   **q₀:** Pushes an 'A' onto the stack for each 'a' read.
*   **q₁:**  Consumes 'b's. The stack is not modified while reading 'b's. Moves to q₂ once a 'c' is encountered.
*   **q₂:** Pops an 'A' for each 'c' read, matching the 'a's.
*   **q₃:** Accepting state.

**Trace: Input = "aabbbc"**

1. **(q₀, aabbbc, Z₀) |- (q₀, abbbc, AZ₀) |- (q₀, bbbc, AAZ₀)** // Push 'A's for 'a's
2. **(q₀, bbbc, AAZ₀) |- (q₁, bbc, AAZ₀)** // Move to state for processing 'b's
3. **(q₁, bbcc, AAZ₀) |- (q₁, bc, AAZ₀) |- (q₂, c, AAZ₀) |- (q2,c,AZ₀)// Consume 'b's, no stack change**
4. **(q₂, c, AZ₀) |- (q₂,ε,Z₀)**
5.  **(q₂, ε, Z₀) = {(q₃, Z₀)}** Accept if the stack is empty

**Practice:**

Design a PDA for the language L = {aⁿb²ⁿ | n ≥ 0}.

## 4. Important Points to Remember

*   PDAs use the stack to store information, enabling them to recognize context-free languages.
*   PDAs are inherently non-deterministic.
*   The transition function δ determines the PDA's behavior based on the current state, input symbol, and stack symbol.
*   Different design techniques are used to handle specific language features like palindromes, balanced parentheses, and repetition.
*   Understanding how to trace the execution of a PDA is essential for verifying its correctness.
*   Acceptance can be by final state or empty stack (or both, but one is usually defined as the primary method).
*  Not all languages can be recognized by PDAs, e.g. languages where more than one independent count is required are often beyond PDA capabilities.

## 5. Additional Exercises

1.  Design a PDA for the language L = {w | w ∈ {a, b}* and w has more a's than b's}. *This is a challenging exercise and a typical upper bound on PDA complexity.*
2.  Design a PDA for the language L = {aⁿbⁿcᵐdᵐ | n, m ≥ 0}.
3.  Design a PDA for the language L = {w ∈ {0,1}* | w is a palindrome (without a center marker)}.  (This will require non-determinism to "guess" the center).

Remember to clearly define the PDA's components (Q, Σ, Γ, δ, q₀, Z₀, F) and provide explanations for the transitions.  Practicing with various examples is crucial for mastering PDA design.
