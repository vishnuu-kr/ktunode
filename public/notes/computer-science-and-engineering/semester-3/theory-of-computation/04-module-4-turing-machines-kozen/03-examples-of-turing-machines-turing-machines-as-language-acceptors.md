---
title: "Examples of Turing machines - Turing machines as language acceptors"
subject: "THEORY OF COMPUTATION"
module: "Module 4: Turing Machines (Kozen)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8abcc"
status: "completed"
scrapedAt: "2026-05-20T16:30:18.268Z"
---
# THEORY OF COMPUTATION - Module 4: Turing Machines (Kozen) - Examples of Turing Machines as Language Acceptors

## Learning Outcomes:

*   Understand how Turing Machines (TMs) can be designed to accept languages.
*   Be able to design TMs for simple languages.
*   Be able to trace the execution of a TM on a given input string.
*   Distinguish between accepting, rejecting, and looping behavior of a TM.
*   Understand the relationship between TMs and recursively enumerable (RE) languages.

## 1. Key Concepts and Definitions

*   **Turing Machine (TM):** A mathematical model of computation that consists of a finite state control, an infinite tape divided into cells, and a tape head that can read, write, and move along the tape.  Formally, a TM is a 7-tuple:  `M = (Q, Σ, Γ, δ, q0, qaccept, qreject)` where:
    *   `Q`: A finite set of states
    *   `Σ`: A finite input alphabet (does not contain the blank symbol)
    *   `Γ`: A finite tape alphabet (Σ ⊆ Γ, and Γ contains the blank symbol '⊔')
    *   `δ`: The transition function: `δ: Q × Γ → Q × Γ × {L, R}` (can also be partial function, leading to possible halting)
    *   `q0`: The start state (`q0 ∈ Q`)
    *   `qaccept`: The accept state (`qaccept ∈ Q`)
    *   `qreject`: The reject state (`qreject ∈ Q`) (and `qreject ≠ qaccept`)

*   **Language Accepted by a TM:** A Turing Machine *accepts* a string `w` if, when started in the initial state `q0` with `w` on the tape (and blanks elsewhere), the machine eventually enters the accept state `qaccept`. The language accepted by a Turing Machine `M`, denoted `L(M)`, is the set of all strings that `M` accepts.  That is, `L(M) = {w ∈ Σ* | M accepts w}`.

*   **Configuration of a TM:** A configuration describes the current state of the TM at any given point in its computation. It includes the current state, the current tape contents, and the position of the tape head. We represent it as `uqv`, where:
    *   `u` is the string to the left of the tape head.
    *   `q` is the current state.
    *   `v` is the string starting from the tape head position.

*   **Halting State:** The `qaccept` and `qreject` states are halting states. When a TM enters either of these states, the computation stops. A TM can also halt implicitly if no transition is defined for the current state and symbol.

*   **Looping:** A TM *loops* on a string `w` if it never enters the accept or reject state. It runs forever.

*   **Recursively Enumerable (RE) Language:** A language `L` is recursively enumerable (RE) if there exists a Turing Machine `M` such that `L(M) = L`. In other words, a language is RE if there is a TM that accepts all strings in the language and either rejects or loops for strings not in the language.

*   **Turing-Recognizable Language:**  A language is Turing-recognizable if and only if it is recursively enumerable.

## 2. Examples of Turing Machines as Language Acceptors

Here are examples of TMs that accept specific languages:

**Example 1:  Language `L = {0^n 1^n | n >= 0}`**

This language consists of strings with an equal number of 0s followed by an equal number of 1s.

*   **Informal Description of TM:**
    1.  Scan the tape from left to right, crossing off a 0 and a 1.
    2.  If you run out of 0s or 1s before you've crossed off all of the other symbol, then reject.
    3.  If there are any 0s or 1s remaining after crossing the corresponding symbol, then reject.
    4.  Accept if the tape is empty (all 0s and 1s have been crossed off).

*   **Formal Description (Simplified):**

    *   `Q = {q0, q1, q2, q3, qaccept, qreject}`
    *   `Σ = {0, 1}`
    *   `Γ = {0, 1, X, ⊔}`  (X represents a 'crossed-off' symbol)
    *   `δ`:

        | State | Symbol | Next State | Write | Move |
        | :---- | :----- | :--------- | :---- | :--- |
        | q0    | 0      | q1         | X     | R    |
        | q0    | 1      | qreject    | 1     | R    |
        | q0    | ⊔      | qaccept    | ⊔     | R    |  // For n=0 (empty string)
        | q1    | 0      | q1         | 0     | R    |
        | q1    | 1      | q2         | 1     | R    |
        | q1    | X      | q1         | X     | R    |
        | q1    | ⊔      | qreject    | ⊔     | R    |
        | q2    | 1      | q2         | 1     | R    |
        | q2    | ⊔      | q3         | ⊔     | L    |
        | q2    | 0      | qreject    | 0     | R    |
        | q2    | X      | qreject    | X     | R    |
        | q3    | 1      | q3         | 1     | L    |
        | q3    | 0      | q3         | 0     | L    |
        | q3    | X      | q0         | X     | R    |
        | q3    | ⊔      | qreject    | ⊔     | R    |

        Any missing entry in the table implies rejection.

*   **Trace for the input "0011":**

    1.  `q0 0011`
    2.  `X q1 011`
    3.  `X0 q1 11`
    4.  `X01 q2 1`
    5.  `X011 q2 ⊔`
    6.  `X01 q3 1`
    7.  `X0 q3 11`
    8.  `X q3 011`
    9.  `q3 X011`
    10. `X q0 011`
    11. `XX q1 11`
    12. `XX1 q2 1`
    13. `XX11 q2 ⊔`
    14. `XX1 q3 1`
    15. `XX q3 11`
    16. `X q3 X11`
    17. `q3 XX11`
    18. `XX q0 11`
    19. `qreject XX11` (The machine rejects because it encounters a '1' in the intial state after marking 0's.)

*   **Trace for the input "01":**

    1. `q0 01`
    2. `X q1 1`
    3. `X1 q2 ⊔`
    4. `X q3 1`
    5. `q3 X1`
    6. `X q0 1`
    7. `qreject X1` (The machine rejects because it encounters a '1' in the intial state.)

*   **Trace for the input "":** (empty string)

    1. `q0 ⊔`
    2. `⊔ qaccept ⊔` (The machine accepts because it encounters a blank tape.)

**Example 2: Language `L = {w | w contains an equal number of 0s and 1s}`**

*   **Informal Description of TM:**
    1. Scan the input from left to right.
    2. If you see a `0`, go back to the beginning and search for `1`, replace it with a special symbol (e.g. `X`). Repeat until there are no `1`s left.
    3. If you see a `1`, go back to the beginning and search for `0`, replace it with a special symbol (e.g. `X`). Repeat until there are no `0`s left.
    4. If at the end the string consists only of special symbols (e.g. `X`s) and blank symbol, accept. Otherwise, reject.

*   **Note:** The full formal specification is complex but demonstrates the power of the Turing machine to perform complex tasks.

**Example 3: Palindromes `L = {w | w = w^R }`, where `w^R` is the reverse of w.**

*   **Informal Description of TM:**
    1. Check if the first symbol of the input matches the last symbol.
    2. If they match, erase both of them and recursively check the remaining string.
    3. If they don't match, reject.
    4. Accept if you end up with an empty string or a single symbol.

**Important Points to Remember:**

*   TMs are powerful and can simulate any algorithm.
*   Designing TMs can be complex, but it provides a deep understanding of computation.
*   The TM definition is crucial for proving theoretical results about computability.
*   Acceptance by a TM only requires entering the `qaccept` state; the entire tape need not be cleaned up.
*   A language is decidable if there exists a TM that halts on every input (either accepting or rejecting). Decidable languages are also called Turing-decidable.
*   If a TM doesn't halt for some input, it doesn't imply the language is not RE.  It just means that this particular TM is not a decider for the language. Another TM might still decide it.

## 3. Practice Questions and Exercises

**Question 1:**

Design a Turing Machine to accept the language `L = {a^n b^n c^n | n >= 0}`. Provide an informal description and a simplified formal description.

**Answer:**

*   **Informal Description:**

    1.  Scan the input to ensure it has the form `a*b*c*`. If not, reject.
    2.  Repeatedly cross off one `a`, one `b`, and one `c`.
    3.  If at any point, you can't find an `a`, `b`, or `c` to cross off, then reject.
    4.  Accept if all symbols are crossed off (the tape only contains blanks).

*   **Simplified Formal Description:**  (The full transition function would be quite large, this is a simplified version focusing on key states and transitions)

    *   `Q = {q0, q_a, q_b, q_c, q_check_end, qaccept, qreject}`
    *   `Σ = {a, b, c}`
    *   `Γ = {a, b, c, X, ⊔}`
    *   `δ`: (Simplified - showing key transitions)

        | State | Symbol | Next State | Write | Move | Description                                       |
        | :---- | :----- | :--------- | :---- | :--- | :------------------------------------------------ |
        | q0    | a      | q_a         | X     | R    | Found an 'a', cross it off, and look for a 'b'     |
        | q0    | b      | qreject    | b     | R    | invalid format                                  |
        | q0    | c      | qreject    | c     | R    | invalid format                                  |
        | q0    | ⊔      | qaccept    | ⊔     | R    | Empty input (n=0)                               |
        | q_a   | a      | q_a         | a     | R    | Skip 'a's until finding a 'b'                    |
        | q_a   | X      | q_a         | X     | R    | Skip 'X's until finding a 'b'                    |
        | q_a   | b      | q_b         | X     | R    | Found a 'b', cross it off, and look for a 'c'     |
        | q_b   | b      | q_b         | b     | R    | Skip 'b's until finding a 'c'                    |
        | q_b   | X      | q_b         | X     | R    | Skip 'X's until finding a 'c'                    |
        | q_b   | c      | q_c         | X     | L    | Found a 'c', cross it off, and go back for next 'a' |
        | q_c   | c      | q_c         | c     | R    | Skip 'c's                                    |
        | q_c   | X      | q_c         | X     | R    | Skip 'X's                                    |
        | q_c   | a      | qreject    | a     | R    | invalid format                                  |
        | q_c   | ⊔      | q_check_end | ⊔     | L    | End of the input, start checking                |
        | q_check_end| X  | q_check_end| X  | L    | Back to start                                    |
        | q_check_end| ⊔  | qaccept | ⊔  | R | Accept, if only X's and blanks are left |
        | ...   | ...    | ...         | ...   | ...  | (Many more transitions to handle edge cases and moving back) |

**Question 2:**

Explain the difference between a Turing Machine that *recognizes* a language and one that *decides* a language.

**Answer:**

*   **Recognizes (Recursively Enumerable):** A TM *recognizes* a language L if it accepts all strings in L, and for strings *not* in L, it either rejects or loops forever.  The TM might not halt for strings not in the language.

*   **Decides (Decidable):** A TM *decides* a language L if it accepts all strings in L and rejects all strings *not* in L.  The TM *must* halt on every input (either accepting or rejecting).  Decidable languages are a subset of recursively enumerable languages.

**Question 3:**

Give an example of a language that is recursively enumerable but not decidable.

**Answer:**

The Halting Problem is a classic example.  The Halting Problem asks, given a Turing Machine `M` and an input string `w`, will `M` halt when run on `w`?  It is known to be RE (because we can simulate `M` on `w` and accept if it halts), but it is not decidable (there's no TM that can always correctly determine whether an arbitrary TM will halt).

**Question 4:**

Trace the execution of the TM for the language `L = {0^n 1^n | n >= 0}` (Example 1 above) on the input string "011".

**Answer:**

Using the simplified formal description from Example 1:

1. `q0 011`
2. `X q1 11`
3. `X1 q2 1`
4. `X11 q2 ⊔`
5. `X1 q3 1`
6. `X q3 11`
7. `q3 X11`
8. `X q0 11`
9. `qreject X11`  (The machine rejects because it encounters a '1' in the initial state after marking the '0'.)

This trace shows that the TM correctly rejects the string "011" because it does not belong to the language `L = {0^n 1^n | n >= 0}`.
