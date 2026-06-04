---
title: "Turing Machines (Kozen)"
subject: "THEORY OF COMPUTATION"
module: "Module 4: Turing Machines (Kozen)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8abca"
status: "completed"
scrapedAt: "2026-05-20T16:30:16.863Z"
---
# THEORY OF COMPUTATION - Module 4: Turing Machines (Kozen)

## Topic: Turing Machines (Kozen)

**Learning Outcomes:**

*   Understand the formal definition of a Turing Machine (TM).
*   Be able to design TMs for simple languages.
*   Understand the concept of instantaneous description (ID) of a TM.
*   Understand the difference between a single-tape and multi-tape TM.
*   Understand the concept of non-deterministic TMs.
*   Understand the Church-Turing Thesis.
*   Understand the concept of Turing-recognizable and Turing-decidable languages.
*   Be able to explain the significance of the Halting Problem.

---

### 1. Formal Definition of a Turing Machine (TM)

*   **Definition:** A Turing Machine (TM) is a mathematical model of computation that consists of:

    *   *Q*: A finite set of *states*.
    *   *Σ*: A finite set of the *input alphabet* (does not contain the blank symbol '⊔').
    *   *Γ*: A finite set of the *tape alphabet*, where Σ ⊆ Γ and '⊔' ∈ Γ.  '⊔' is the *blank symbol*.
    *   *δ*: *Transition function*:  Q × Γ → Q × Γ × {L, R}.  Takes the current state and tape symbol and outputs the new state, the symbol to write to the tape, and the direction to move the tape head (Left or Right).
    *   *q<sub>0</sub>* ∈ Q: The *start state*.
    *   *q<sub>accept</sub>* ∈ Q: The *accept state*.
    *   *q<sub>reject</sub>* ∈ Q: The *reject state*, where *q<sub>accept</sub>* ≠ *q<sub>reject</sub>*.

*   **Intuition:** The TM can be visualized as a finite state machine connected to an infinite tape. The tape is divided into cells, each of which can hold a single symbol from the tape alphabet. The TM's head can read and write symbols on the tape and move left or right.

*   **Key Differences from Finite Automata:**

    *   TM can both read and write on the tape.
    *   The tape head can move in both directions (L and R).
    *   The tape is infinite.
    *   The accept and reject states take immediate effect (no more input to process).

### 2. Designing TMs for Simple Languages

*   **General Strategy:**

    1.  **Understand the Language:** Clearly define the language you want the TM to recognize.
    2.  **Outline the Steps:** Break down the recognition process into a series of steps.  Think about what the TM needs to do at each stage.
    3.  **Define the States:** Create states that represent different stages of the algorithm.
    4.  **Define the Transition Function:**  Define the transitions between states based on the symbols read from the tape.  Pay attention to where to move the head and what to write.
    5.  **Handle Edge Cases:** Consider edge cases, such as the empty string or strings that don't belong to the language.
    6.  **Test Thoroughly:**  Test the TM with various inputs to ensure it works correctly.

*   **Example 1: Language L = {0<sup>n</sup>1<sup>n</sup> | n ≥ 0}**

    *   **Description:**  Design a TM that accepts strings consisting of 'n' zeros followed by 'n' ones.

    *   **Algorithm:**

        1.  Check if the input is empty. If so, accept.
        2.  Scan the tape from left to right, crossing off a '0' and a '1'.
        3.  If there are more '0's than '1's or vice versa, reject.
        4.  If all '0's and '1's are crossed off, accept.

    *   **States:**

        *   *q<sub>0</sub>*: Start state.
        *   *q<sub>1</sub>*: Scanning for a '1' after crossing off a '0'.
        *   *q<sub>2</sub>*: Scanning back to the leftmost uncrossed '0'.
        *   *q<sub>3</sub>*: Scanning for the end of the string after all '0's and '1's are crossed off.
        *   *q<sub>accept</sub>*: Accept state.
        *   *q<sub>reject</sub>*: Reject state.

    *   **Tape Alphabet (Γ):** {0, 1, X, ⊔}  ('X' is used to cross off symbols)

    *   **Transition Function (δ):** (Partial - a complete definition is lengthy)

        *   δ(q<sub>0</sub>, 0) = (q<sub>1</sub>, X, R)  // Cross off the first 0, move right
        *   δ(q<sub>0</sub>, ⊔) = (q<sub>accept</sub>, ⊔, R) // Empty string, accept
        *   δ(q<sub>1</sub>, 0) = (q<sub>1</sub>, 0, R)  // Move right over 0s
        *   δ(q<sub>1</sub>, 1) = (q<sub>2</sub>, X, L)  // Cross off a 1, move left
        *   δ(q<sub>1</sub>, ⊔) = (q<sub>reject</sub>, ⊔, R) // Too few 1s, reject
        *   δ(q<sub>2</sub>, 0) = (q<sub>2</sub>, 0, L)  // Move left over 0s
        *   δ(q<sub>2</sub>, X) = (q<sub>2</sub>, X, L)  // Move left over Xs
        *   δ(q<sub>2</sub>, ⊔) = (q<sub>0</sub>, ⊔, R) // Found the start, begin next iteration
        *   ... (Handles scanning after all 0s and 1s are processed)

*   **Example 2: Language L = {w#w | w ∈ {0,1}*}**

    *   **Description:**  Design a TM that accepts strings of the form *w#w* where *w* is any string of 0s and 1s.

    *   **Algorithm:**

        1.  Check if the input contains a '#'. If not, reject.
        2.  Match the first symbol of the first *w* with the first symbol after the '#'.
        3.  Mark the matched symbols.
        4.  Repeat steps 2 and 3 until all symbols of the first *w* are marked.
        5.  If all symbols after the '#' are also marked, accept. Otherwise, reject.

### 3. Instantaneous Description (ID) of a TM

*   **Definition:** The Instantaneous Description (ID) of a TM is a snapshot of the machine's configuration at a particular moment in time.  It captures:

    *   The current state (*q*).
    *   The contents of the tape.
    *   The position of the tape head.

*   **Notation:**  *uqv*, where:

    *   *u* is the string of tape symbols to the left of the head.
    *   *q* is the current state.
    *   *v* is the string of tape symbols at and to the right of the head.  The first symbol of *v* is the symbol currently being read by the head.

*   **Example:**  If the TM is in state *q<sub>5</sub>*, the tape contains "...01011⊔...", and the head is pointing at the second '1' in the string "01011", then the ID is:  `010q511⊔`

*   **Moves:** We use '⊢' to denote a single move and '⊢*' to denote zero or more moves.

    *   If *δ(q, a) = (q', b, R)*, then *uaqv ⊢ uba'v*
    *   If *δ(q, a) = (q', b, L)*, then *ucaqv ⊢ uq'cbv*

    *   **Handling End Cases:** When the head is at the left end and moves left, a blank symbol is added to the left. Similarly, when processing the last symbol of the tape on the right, a blank symbol is added on the right if the TM moves right.

*   **Acceptance/Rejection:** A TM *M* accepts input *w* if the initial ID *q<sub>0</sub>w* yields an ID with the accept state:  *q<sub>0</sub>w ⊢* *u q<sub>accept</sub> v* for some *u* and *v*. Similarly for rejection.

### 4. Single-Tape vs. Multi-Tape TM

*   **Single-Tape TM:** The standard TM model, as defined above, has a single tape.

*   **Multi-Tape TM:** A multi-tape TM has multiple tapes, each with its own head.  The transition function is modified to handle multiple tapes:

    *   *δ*:  Q × Γ<sup>k</sup> → Q × Γ<sup>k</sup> × {L, R}<sup>k</sup>, where *k* is the number of tapes.

*   **Equivalence:** A multi-tape TM is equivalent to a single-tape TM.  This means any language recognized by a multi-tape TM can also be recognized by a single-tape TM.

*   **Simulation of Multi-Tape TM by Single-Tape TM:**

    1.  Represent *k* tapes on a single tape, interleaving them with special separator symbols.
    2.  Store the head positions of each tape on the single tape using marked symbols.
    3.  Simulate each move of the multi-tape TM by scanning the single tape to determine the symbols under each simulated head, performing the transition, and updating the single tape accordingly.

### 5. Non-Deterministic TMs (NTMs)

*   **Definition:** A non-deterministic TM is similar to a deterministic TM, except the transition function allows for multiple possible transitions from a given state and tape symbol.

    *   *δ*: Q × Γ → P(Q × Γ × {L, R}), where P(S) denotes the power set of S.

*   **Computation Tree:** An NTM can be viewed as exploring a tree of possible computations.

*   **Acceptance:** An NTM accepts an input if *at least one* branch of the computation tree leads to the accept state.

*   **Equivalence:** Non-deterministic TMs are equivalent to deterministic TMs. Any language recognized by an NTM can also be recognized by a deterministic TM.

*   **Simulation of NTM by DTM:** The DTM simulates the NTM by systematically exploring the computation tree.  Breadth-first search is a common approach.

### 6. The Church-Turing Thesis

*   **Statement:**  Any effectively calculable function can be computed by a Turing Machine.

*   **Meaning:** This is not a theorem that can be proven mathematically, but rather a hypothesis based on extensive evidence. It suggests that the Turing Machine is the most powerful model of computation possible.  Anything that can be computed by *any* conceivable algorithm can be computed by a TM.

*   **Significance:** It provides a formal definition of what is computable and serves as a foundation for computability theory.

### 7. Turing-Recognizable and Turing-Decidable Languages

*   **Turing-Recognizable Language (Recursively Enumerable Language):** A language *L* is Turing-recognizable if there exists a Turing Machine *M* such that:

    *   If *w ∈ L*, then *M* halts in the accept state.
    *   If *w ∉ L*, then *M* either halts in the reject state or loops forever.

*   **Turing-Decidable Language (Recursive Language):** A language *L* is Turing-decidable if there exists a Turing Machine *M* such that:

    *   If *w ∈ L*, then *M* halts in the accept state.
    *   If *w ∉ L*, then *M* halts in the reject state.

*   **Key Difference:** A Turing Machine that decides a language always halts, while a Turing Machine that recognizes a language may loop forever if the input is not in the language.

*   **Relationship:** Every Turing-decidable language is Turing-recognizable, but not all Turing-recognizable languages are Turing-decidable.

### 8. The Halting Problem

*   **Statement:**  Does there exist a Turing Machine that can determine, for any given Turing Machine *M* and input *w*, whether *M* will halt (either accept or reject) when run on *w*?

*   **Result:** The Halting Problem is undecidable. There is no Turing Machine that can solve the Halting Problem for all possible inputs.

*   **Proof (by contradiction):**

    1.  Assume there exists a Turing Machine, *H*, that solves the Halting Problem.  *H(M, w)* returns "accept" if *M* halts on *w*, and "reject" if *M* loops on *w*.
    2.  Construct a new Turing Machine, *D*, that takes a TM *M* as input and does the following:
        *   Runs *H(M, M)*.  (i.e., runs H on M with M as the input).
        *   If *H(M, M)* accepts (meaning *M* halts on *M*), then *D* loops forever.
        *   If *H(M, M)* rejects (meaning *M* loops on *M*), then *D* halts and accepts.
    3.  Now consider running *D(D)*.
        *   If *D(D)* halts, then *H(D, D)* must have rejected, meaning that *D* loops on *D*.  Contradiction!
        *   If *D(D)* loops, then *H(D, D)* must have accepted, meaning that *D* halts on *D*. Contradiction!
    4.  Since both cases lead to a contradiction, our initial assumption that *H* exists must be false. Therefore, the Halting Problem is undecidable.

*   **Significance:** The Halting Problem demonstrates that there are fundamental limits to what can be computed. It has important implications for software verification and other areas of computer science.

---

### Practice Questions/Exercises:

1.  **Design a Turing Machine to accept the language L = {a<sup>n</sup>b<sup>n</sup>c<sup>n</sup> | n ≥ 0}.**
    *   **Answer (Outline):**  Similar to the 0<sup>n</sup>1<sup>n</sup> example, you'll need to cross off a's, b's, and c's in each iteration.  Pay careful attention to scanning the tape and moving the head efficiently. States will represent phases such as "scanning for b", "scanning for c", "scanning back to start". Reject if the counts don't match up.

2.  **Explain the difference between a Turing-recognizable language and a Turing-decidable language.**
    *   **Answer:**  A Turing-decidable language has a TM that always halts (accepts if the string is in the language, rejects if not). A Turing-recognizable language has a TM that accepts if the string is in the language but might loop forever if the string is *not* in the language.

3.  **Give an example of a language that is Turing-recognizable but not Turing-decidable.**
    *   **Answer:** The language of Turing Machines that halt on their own description. Because the Halting Problem is undecidable, there's no Turing Machine that can always determine if another Turing Machine halts. However, a TM *can* recognize this language: just simulate the input machine. If it halts, accept.  If it doesn't, it loops forever.

4.  **Why is the Halting Problem important?**
    *   **Answer:** It demonstrates a fundamental limitation of computation. It proves that there are problems that cannot be solved algorithmically. This has implications for software verification, compiler optimization, and other areas of computer science.

5.  **Convert the following ID and transition into the resulting ID: ID: `10q101`, Transition: δ(q1, 0) = (q2, 1, R)**
    *   **Answer:** The machine is in state q1, reading a 0. The transition says to change the 0 to a 1, move to state q2, and move the head right. The resulting ID is `101q211`

---

### Important Points to Remember:

*   Turing Machines are a fundamental model of computation.
*   The Halting Problem is a classic example of an undecidable problem.
*   The Church-Turing Thesis asserts that any effectively computable function can be computed by a TM.
*   Turing-decidable languages are a subset of Turing-recognizable languages.
*   Understanding the formal definition of a TM is crucial for working with computability theory.
