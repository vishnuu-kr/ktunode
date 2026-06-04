---
title: "Turing Machines - Standard Turing Machine"
subject: "THEORY OF COMPUTATION"
module: "Module 4: Context Sensitive Languages "
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35f26"
status: "completed"
scrapedAt: "2026-05-23T16:19:41.010Z"
---
# Theory of Computation: Module 4 - Context-Sensitive Languages

## Topic: Turing Machines - Standard Turing Machine

### 1. Introduction to Turing Machines

Turing Machines (TMs) are theoretical models of computation that are far more powerful than finite automata or pushdown automata. They are capable of recognizing context-sensitive languages and more. The concept of a Turing Machine was introduced by Alan Turing in 1936 to formalize the notion of computability.

**Key Concept:** A Turing Machine is a mathematical model of computation that consists of an infinite tape, a tape head that can read and write symbols on the tape, and a finite set of states.

**Relationship to Context-Sensitive Languages (CO1, K2):**
*   Turing Machines are the most powerful model of computation discussed in this course.
*   They can recognize **all** Context-Sensitive Languages (CSLs).
*   The class of languages recognized by Deterministic Turing Machines is exactly the class of Recursive Languages (decidable languages).
*   The class of languages recognized by Non-deterministic Turing Machines is exactly the class of Recursively Enumerable Languages (recursively enumerable languages).

**Textbook Reference:**
*   **Kozen (1999), Chapter 14: Turing Machines** - Introduces TMs as an abstract model of computation.
*   **Hopcroft, Motwani, Ullman (2007), Chapter 7: Turing Machines** - Provides a detailed formal definition and variations.
*   **Sipser (2013), Chapter 3: Turing Machines** - Offers a clear and intuitive explanation of TM components and operations.

### 2. Formal Definition of a Standard Turing Machine

A standard Turing Machine $M$ is formally defined as a 7-tuple:

$M = (Q, \Sigma, \Gamma, \delta, q_0, q_{accept}, q_{reject})$

where:

*   $Q$: A finite set of states.
*   $\Sigma$: A finite set of input symbols (the input alphabet).
*   $\Gamma$: A finite set of tape symbols ($\Sigma \subseteq \Gamma$). The tape alphabet includes $\Sigma$ plus potentially other symbols, most importantly the blank symbol.
*   $\delta$: The transition function, which maps a state and a tape symbol to a new state, a new tape symbol, and a direction of head movement.
    *   $\delta: Q \times \Gamma \to Q \times \Gamma \times \{L, R\}$
        *   $L$: Move the tape head Left.
        *   $R$: Move the tape head Right.
*   $q_0$: The initial state (start state), where $q_0 \in Q$.
*   $q_{accept}$: The accept state, where $q_{accept} \in Q$.
*   $q_{reject}$: The reject state, where $q_{reject} \in Q$.

**Important Note:** $q_{accept}$ and $q_{reject}$ are distinct and halting states. Once the TM enters either state, it halts.

**Blank Symbol:**
*   A special symbol, denoted by '$B$' or '$\sqcup$', is part of $\Gamma$ but not $\Sigma$.
*   The tape is initially filled with blank symbols, except for the portion containing the input string.

### 3. How a Turing Machine Works

1.  **Initialization:** The TM starts in state $q_0$. The input string $w$ is written on the tape, surrounded by blank symbols. The tape head is positioned over the leftmost symbol of $w$.

2.  **Configuration:** A configuration of a TM at any point is described by:
    *   The current state ($q$).
    *   The contents of the tape.
    *   The position of the tape head.

3.  **Transition:** Based on the current state $q$ and the symbol $s$ currently under the tape head, the TM performs the following actions according to the transition function $\delta(q, s) = (q', s', D)$:
    *   It enters the new state $q'$.
    *   It replaces the symbol $s$ on the tape with $s'$.
    *   It moves the tape head one position to the Left ($D=L$) or Right ($D=R$).

4.  **Halting:** The TM halts if it enters the $q_{accept}$ state or the $q_{reject}$ state.

5.  **Acceptance/Rejection:**
    *   If the TM halts in the $q_{accept}$ state, the input string $w$ is **accepted**.
    *   If the TM halts in the $q_{reject}$ state, the input string $w$ is **rejected**.

**Infinite Loops:** A TM might never halt on a given input. This means it could continue to transition indefinitely, either by moving back and forth on the tape or by re-writing symbols.

**Textbook Reference:**
*   **Sipser (2013), Chapter 3.1: The Definition of a Turing Machine** - Clear explanation of the 7-tuple and operation.
*   **Kozen (1999), Chapter 14.1: The Turing Machine** - Formal definition and operation.

### 4. Turing Machines as Language Recognizers (Acceptors)

A Turing Machine $M$ **recognizes** (or **accepts**) a language $L$ if $M$ accepts all strings in $L$ and rejects all strings not in $L$.

**Formal Definition of Language Recognition:**
A Turing Machine $M$ recognizes a language $L$ if:
*   For every string $w \in L$, $M$ eventually halts in the $q_{accept}$ state when started with input $w$.
*   For every string $w \notin L$, $M$ does not halt in the $q_{accept}$ state when started with input $w$. (This means $M$ either halts in $q_{reject}$ or loops forever).

**Language Classifications (CO1, K2):**
*   **Recursive Languages:** A language $L$ is **recursive** if there exists a Turing Machine that **decides** $L$. A decider is a TM that halts on *all* inputs (either accepting or rejecting).
*   **Recursively Enumerable Languages:** A language $L$ is **recursively enumerable (RE)** if there exists a Turing Machine that recognizes $L$. This TM might loop on inputs not in $L$.

**Relationship to CSLs (CO1, K2):**
*   Context-Sensitive Languages (CSLs) are a subset of Recursive Languages.
*   Therefore, all CSLs are recognized by Turing Machines.
*   The set of languages recognized by TMs is the set of Recursively Enumerable Languages.

**Example:** Language $L = \{0^n 1^n \mid n \ge 0\}$
This is a context-sensitive language. Let's sketch a TM that recognizes it.

*   **Tape Alphabet:** $\{0, 1, X, Y, B\}$
*   **States:** $q_0$ (start), $q_1$ (scan right for 0), $q_2$ (replace 0 with X, scan right for 1), $q_3$ (replace 1 with Y, scan left for X), $q_4$ (found X, move right to find next 0), $q_{accept}$

**High-Level Strategy:**
1.  Start at the leftmost symbol.
2.  If it's '0', replace it with 'X' and move right.
3.  Scan right until a '1' is found.
4.  If '1' is found, replace it with 'Y' and move left.
5.  Scan left until an 'X' is found.
6.  If 'X' is found, move right to the next symbol (this is the position after the last X).
7.  Repeat steps 2-6.
8.  If at any point the expected symbol is not found (e.g., scanning for '1' and find 'B' or '0', or scanning for 'X' and find '0' or '1'), then reject.
9.  If all '0's are replaced by 'X's and all '1's by 'Y's, and we end up between the last 'X' and the first 'Y' on a blank symbol 'B', then accept.

**Specific Transitions (Simplified Sketch):**

*   $\delta(q_0, 0) = (q_1, X, R)$  (Start, found 0, mark as X, move right)
*   $\delta(q_1, 0) = (q_1, 0, R)$  (Scan right for 1)
*   $\delta(q_1, Y) = (q_1, Y, R)$  (Scan past Ys)
*   $\delta(q_1, B) = (q_2, B, L)$  (Found blank, move left to find 1)
*   $\delta(q_2, 1) = (q_3, Y, L)$  (Found 1, mark as Y, move left)
*   $\delta(q_3, 0) = (q_3, 0, L)$  (Scan left for X)
*   $\delta(q_3, X) = (q_0, X, R)$  (Found X, move right to start of next block of 0s)
*   $\delta(q_0, Y) = (q_0, Y, R)$  (After accepting a pair, scan right over Ys)
*   $\delta(q_0, B) = (q_{accept}, B, R)$ (If blank is found immediately after X's, all pairs matched)

**Important Points to Remember (TM as Recognizer):**
*   A TM recognizes a language if it accepts all strings in the language and either rejects or loops on strings not in the language.
*   **Deciders halt on all inputs.**
*   **Recognizers do not necessarily halt on all inputs.**

### 5. Turing Machines as Deciders

A Turing Machine $M$ **decides** a language $L$ if $M$ accepts all strings in $L$ and rejects all strings not in $L$, and crucially, $M$ **halts on all inputs**.

**Formal Definition of Language Deciding:**
A Turing Machine $M$ decides a language $L$ if:
*   For every string $w \in L$, $M$ halts in the $q_{accept}$ state when started with input $w$.
*   For every string $w \notin L$, $M$ halts in the $q_{reject}$ state when started with input $w$.

**Equivalence of Recognition and Deciding (for Recursive Languages):**
*   If a language is decided by a TM, it is also recognized by that TM.
*   If a language is recognized by a TM, we can construct a TM that decides it IF AND ONLY IF the language is recursive.

**How to build a decider from a recognizer for a recursive language:**
If a TM $M_{rec}$ recognizes a recursive language $L$, we know that for any input $w$, $M_{rec}$ will either accept (halting in $q_{accept}$) or reject (halting in $q_{reject}$). If $M_{rec}$ never loops, then it's a decider. If $M_{rec}$ *could* loop, but $L$ is recursive, it means $M_{rec}$ only loops on inputs *not* in $L$. The definition of a recursive language guarantees that *some* TM exists which halts on all inputs.

**Example:** Consider the language $L = \{w \mid w \text{ is a palindrome}\}$. This is a Context-Sensitive Language.
A TM can decide this by checking symbols from the outside inwards.

*   **Strategy:**
    1.  Start at the leftmost symbol.
    2.  Read the symbol.
    3.  Move to the rightmost symbol.
    4.  Compare the symbols. If they match, replace both with a special "checked" symbol (e.g., '$Z$') and move back to the next leftmost unchecked symbol.
    5.  Repeat until all symbols are checked or a mismatch is found.
    6.  If a mismatch occurs, reject.
    7.  If all symbols are successfully checked, accept.

**Textbook Reference:**
*   **Kozen (1999), Chapter 14.2: Turing-computable functions and Turing-acceptable languages** - Differentiates between recognizing and deciding.
*   **Sipser (2013), Chapter 3.2: Turing-machine computation** - Explains the concept of halting.

### 6. Designing Turing Machines (CO4, K3)

Designing a Turing Machine involves specifying the states, alphabet, and transitions to perform a specific computation. This is often done using a high-level description of the TM's actions, or by explicitly defining the transition function.

**Key Techniques for TM Design:**
*   **Single Tape Manipulation:** Reading, writing, moving left/right.
*   **Using States to Remember Information:** Different states represent different stages of the computation or information gathered.
*   **Using Special Symbols:** Marking visited cells, storing intermediate results.
*   **Simulating Multiple Tapes:** A single-tape TM can simulate a multi-tape TM, though less efficiently.
*   **Using States to Simulate Markers:** Instead of writing markers, sometimes states can be used to remember the position relative to certain markers.

**Example:** Design a TM to check if a binary string contains at least one '1'.
*   **Language:** $L = \{w \in \{0,1\}^* \mid w \text{ contains at least one '1'}\}$
*   **Alphabet:** $\Sigma = \{0,1\}$, $\Gamma = \{0,1,B\}$
*   **States:** $q_0$ (start, looking for '1'), $q_1$ (found '1', accepting), $q_{reject}$ (no '1' found)

**TM Description:**
1.  Start in $q_0$.
2.  If the current symbol is '1', transition to $q_1$ (accept state) and halt.
3.  If the current symbol is '0', transition to $q_0$ and move Right.
4.  If the current symbol is 'B' (blank), it means we scanned the entire string without finding a '1'. Transition to $q_{reject}$ and halt.

**Transition Function ($\delta$):**
*   $\delta(q_0, 0) = (q_0, 0, R)$
*   $\delta(q_0, 1) = (q_{accept}, 1, R)$
*   $\delta(q_0, B) = (q_{reject}, B, R)$

**Practice Question 1:**
Design a Turing Machine that accepts the language $L = \{a^n b^n \mid n \ge 0\}$.
**Answer:**
*   **Alphabet:** $\Sigma = \{a,b\}$, $\Gamma = \{a,b,X,Y,B\}$
*   **States:** $q_0$ (start, looking for 'a'), $q_1$ (found 'a', replace with X, scan right for 'b'), $q_2$ (found 'b', replace with Y, scan left for 'X'), $q_3$ (found 'X', move right to next 'a'), $q_{accept}$

**High-Level Strategy:**
1.  Mark the leftmost 'a' with 'X' and move right.
2.  Scan right, skipping 'a's, until a 'b' is found.
3.  Mark the 'b' with 'Y' and move left.
4.  Scan left, skipping 'b's, until an 'X' is found.
5.  If an 'X' is found, move right to the next symbol (which should be an 'a' or a blank if all 'a's are used up). Repeat from step 1.
6.  If, after marking an 'a' with 'X', we encounter a 'B' before finding any 'b's, it means $n=0$. Accept.
7.  If, after marking a 'b' with 'Y', we encounter an 'X' and then a 'B' immediately, it means all 'a's have been paired with 'b's. Accept.
8.  If any mismatch occurs (e.g., 'a' after 'X', or 'b' instead of 'B' at the end), reject.

**Formal Transitions (Partial Example):**
*   $\delta(q_0, a) = (q_1, X, R)$  (Mark first 'a', move right)
*   $\delta(q_0, B) = (q_{accept}, B, R)$ (Case n=0: empty string)
*   $\delta(q_1, a) = (q_1, a, R)$  (Skip 'a's)
*   $\delta(q_1, b) = (q_2, Y, L)$  (Mark 'b', move left)
*   $\delta(q_2, b) = (q_2, b, L)$  (Skip 'b's)
*   $\delta(q_2, X) = (q_0, X, R)$  (Found X, move right to next 'a')
*   $\delta(q_1, Y) = (q_1, Y, R)$  (Skip Y's if any encountered after the first 'a')
*   $\delta(q_1, B) = (q_{reject}, B, R)$ (Found blank before 'b' - incorrect format)
*   $\delta(q_2, a) = (q_{reject}, a, R)$ (Found 'a' instead of 'X' on left scan - incorrect format)

**Practice Question 2:**
Design a Turing Machine that accepts the language $L = \{w \in \{0,1\}^* \mid w \text{ is empty or } w=0w'0 \text{ or } w=1w'1, \text{ where } w' \text{ is also in } L \}$. This is the language of binary palindromes.
**Answer:**
*   **Alphabet:** $\Sigma = \{0,1\}$, $\Gamma = \{0,1,Z,B\}$
*   **States:** $q_0$ (start, check first/last), $q_1$ (found first symbol, scan right for last), $q_2$ (found last symbol, compare), $q_3$ (symbols match, mark, scan left for next first), $q_4$ (found Z, move right for next first), $q_{accept}$, $q_{reject}$

**High-Level Strategy:**
1.  If the tape is blank, accept (empty string).
2.  If the first symbol is '0': mark it 'Z', move right, scan right until the last '0' is found.
3.  If the first symbol is '1': mark it 'Z', move right, scan right until the last '1' is found.
4.  If symbols don't match (e.g., first is '0', last is '1'), reject.
5.  If symbols match: mark the last symbol 'Z', move left, scan left until the first 'Z' (or next first symbol) is found.
6.  If only 'Z's remain on the tape, accept.
7.  If at any point the expected symbol is not found (e.g., blank encountered too early), reject.

**Formal Transitions (Partial Example):**
*   $\delta(q_0, B) = (q_{accept}, B, R)$ (Empty string)
*   $\delta(q_0, 0) = (q_1, Z, R)$   (Mark first '0' with 'Z', move right)
*   $\delta(q_0, 1) = (q_1, Z, R)$   (Mark first '1' with 'Z', move right)
*   $\delta(q_1, 0) = (q_1, 0, R)$   (Scan right for last symbol)
*   $\delta(q_1, 1) = (q_1, 1, R)$   (Scan right for last symbol)
*   $\delta(q_1, Z) = (q_1, Z, R)$   (Skip over previous 'Z' marks)
*   $\delta(q_1, B) = (q_2, B, L)$   (Found blank, means last symbol is under head, move left)
*   $\delta(q_2, 0) = (q_3, Z, L)$   (Last symbol was '0', mark it 'Z', move left)
*   $\delta(q_2, 1) = (q_{reject}, 1, R)$ (Mismatch: first was '1', last was '0')
*   $\delta(q_2, Z) = (q_{accept}, Z, R)$ (If last symbol was already 'Z' (meaning only one symbol in original pair), accept)
*   ... and so on for other transitions including matching '1' with '1', etc.

### 7. Relationship between Turing Machines and Language Classes (CO1, K2)

*   **Regular Languages (RLs):** Can be recognized by Finite Automata (FAs). Since FAs are essentially very restricted TMs (they cannot write or move left), RLs are a subset of languages recognized by TMs.
*   **Context-Free Languages (CFLs):** Can be recognized by Pushdown Automata (PDAs). PDAs have a stack, which is a limited form of unbounded memory compared to the TM's tape. CFLs are a subset of CSLs, which are recognized by TMs.
*   **Context-Sensitive Languages (CSLs):** Recognized by Linear Bounded Automata (LBAs), which are TMs whose tape length is bounded by a linear function of the input length ($c \cdot n$, where $c$ is a constant). Since TMs have infinite tapes, they can recognize CSLs.
*   **Recursive Languages (Decidable Languages):** Languages for which a TM exists that halts on *all* inputs. All RLs and CFLs are recursive. CSLs are also recursive.
*   **Recursively Enumerable Languages (RE Languages):** Languages for which a TM exists that *recognizes* them (halts and accepts for strings in the language, but may loop on strings not in the language). This is the broadest class of languages recognized by TMs.

**Hierarchy of Languages:**
$$
\text{Regular} \subset \text{Context-Free} \subset \text{Context-Sensitive} \subset \text{Recursive} \subset \text{Recursively Enumerable}
$$

**Textbook Reference:**
*   **Kozen (1999), Chapter 14.2, 14.3** - Discusses the hierarchy and power of TMs.
*   **Hopcroft, Motwani, Ullman (2007), Chapter 7.1, 7.2** - Relates TMs to decidability and computability.
*   **Sipser (2013), Chapter 3.7, 3.8** - Explicitly maps TM capabilities to language classes.

### 8. The Halting Problem (Not Directly in scope of designing TMs, but fundamental to decidability)

While not a direct learning outcome for *designing* TMs, understanding the Halting Problem is crucial for grasping the limits of computation and the distinction between recognizers and deciders.

**Key Concept:** The Halting Problem is the problem of determining, for an arbitrary Turing Machine $M$ and an arbitrary input $w$, whether $M$ will eventually halt on input $w$.

**Result:** The Halting Problem is undecidable. There is no Turing Machine that can solve the Halting Problem for all possible TM-input pairs.

**Implication:** This means there are languages that are recursively enumerable but not recursive. These are languages for which a TM can be designed to accept all strings in the language, but no TM can be designed to halt on all strings (specifically, it might loop on strings not in the language).

**Relationship to CO5 (Explain the notion of decidability):**
*   Decidability means a TM halts on all inputs.
*   The Halting Problem's undecidability implies that not all recursively enumerable languages are decidable.

### 9. Practice Questions and Answers

**Question 1:**
Which of the following language classes is *not* recognized by a Turing Machine?
A) Regular Languages
B) Context-Free Languages
C) Context-Sensitive Languages
D) None of the above (All are recognized by TMs)

**Answer:** D) None of the above. Turing Machines are powerful enough to recognize all these classes.

**Question 2:**
A Turing Machine that halts on all inputs is called a:
A) Recognizer
B) Decider
C) Translator
D) Automaton

**Answer:** B) Decider. A recognizer may loop on some inputs.

**Question 3:**
Consider a Turing Machine $M$ that recognizes the language $L = \{w \mid w \text{ has an even number of 0s}\}$. Design the TM's states and transitions.
**Answer:**
*   **Alphabet:** $\Sigma=\{0,1\}$, $\Gamma=\{0,1,B\}$
*   **States:** $q_0$ (even number of 0s so far, looking for next symbol), $q_1$ (odd number of 0s so far, looking for next symbol), $q_{accept}$ (final state for even count)

**Transitions:**
*   $\delta(q_0, 0) = (q_1, 0, R)$   (Saw a '0', now have odd count, move right)
*   $\delta(q_0, 1) = (q_0, 1, R)$   (Saw a '1', count remains even, move right)
*   $\delta(q_0, B) = (q_{accept}, B, R)$ (End of string, count is even, accept)
*   $\delta(q_1, 0) = (q_0, 0, R)$   (Saw a '0', now have even count, move right)
*   $\delta(q_1, 1) = (q_1, 1, R)$   (Saw a '1', count remains odd, move right)
*   $\delta(q_1, B) = (q_{reject}, B, R)$ (End of string, count is odd, reject)

**Question 4:**
Is the language $L = \{a^n b^n c^n \mid n \ge 0\}$ a Context-Sensitive Language? Explain why or why not in terms of Turing Machines.
**Answer:** Yes, $L = \{a^n b^n c^n \mid n \ge 0\}$ is a Context-Sensitive Language. Turing Machines can recognize this language. A TM can be designed to:
1.  Check if the string is of the form $a^*b^*c^*$. If not, reject.
2.  If it is of that form, count the number of 'a's, 'b's, and 'c's.
3.  To do this, a TM can mark the first 'a' with 'X', then scan right to the first 'b', mark it with 'Y', scan right to the first 'c', mark it with 'Z'. Then it moves back to the next unmarked 'a', repeats the process.
4.  If all 'a's, 'b's, and 'c's are marked and the counts match, the TM accepts.
5.  If any mismatch in counts or order occurs, the TM rejects. This TM can be constructed to halt on all inputs, making the language recursive (and thus CSL).

### Important Points to Remember

*   **Turing Machines are the most powerful theoretical model of computation discussed.** They define the limits of what is computable.
*   TMs can **recognize** Recursively Enumerable Languages.
*   TMs can **decide** Recursive Languages (meaning they halt on all inputs).
*   The class of Context-Sensitive Languages is a subset of Recursive Languages.
*   Designing a TM requires careful consideration of states, tape symbols, and transition rules to manipulate the tape and track computation progress.
*   The Halting Problem is undecidable, meaning there are problems that no algorithm can solve for all possible inputs.

This concludes the study notes on Standard Turing Machines for Module 4. Remember to refer to the textbooks for more in-depth proofs and examples.
