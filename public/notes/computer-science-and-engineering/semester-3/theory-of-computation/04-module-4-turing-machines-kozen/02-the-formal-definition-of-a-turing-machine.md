---
title: "The formal definition of a Turing machine"
subject: "THEORY OF COMPUTATION"
module: "Module 4: Turing Machines (Kozen)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8abcb"
status: "completed"
scrapedAt: "2026-05-20T16:30:17.563Z"
---
# THEORY OF COMPUTATION - Module 4: Turing Machines (Kozen)

## Topic: The Formal Definition of a Turing Machine

**Description:** This module covers the formal definition of a Turing machine, a fundamental concept in the theory of computation. We will explore the components of a Turing machine and how they operate.

**Learning Outcomes:**

*   Understand the formal definition of a Turing machine.
*   Identify the different components of a Turing machine.
*   Be able to represent a Turing machine mathematically.
*   Understand the concept of a Turing machine's transition function.
*   Describe the instantaneous description (ID) of a Turing machine.
*   Differentiate between a Turing machine's accept, reject, and looping states.

---

### 1. Formal Definition of a Turing Machine

*   **Definition:** A Turing machine (TM) is a mathematical model of computation that consists of:

    *   **Q:** A finite set of states.
    *   **Σ:** A finite input alphabet, not containing the blank symbol '⊔'.
    *   **Γ:** A finite tape alphabet, where Σ ⊆ Γ and '⊔' ∈ Γ.
    *   **δ:** A transition function δ: Q × Γ → Q × Γ × {L, R}.
    *   **q₀:** The start state, q₀ ∈ Q.
    *   **qₐ:** The accept state, qₐ ∈ Q.
    *   **qᵣ:** The reject state, qᵣ ∈ Q, and qₐ ≠ qᵣ.

*   **Formally:** A Turing machine is a 7-tuple:  M = (Q, Σ, Γ, δ, q₀, qₐ, qᵣ)

### 2. Components of a Turing Machine

*   **States (Q):** A finite set of states the machine can be in.  Think of these as stages of a program.
*   **Input Alphabet (Σ):** The set of symbols that can appear as input to the machine.
*   **Tape Alphabet (Γ):** The set of symbols that can appear on the Turing machine's tape.  This includes the input alphabet and the blank symbol.  Crucially, Σ is a *subset* of Γ.
*   **Transition Function (δ):** This function determines the next move of the Turing machine based on its current state and the symbol under the read/write head.  It dictates:
    *   The next state the machine will enter.
    *   The symbol that will be written to the tape at the current position.
    *   Whether the read/write head will move Left (L) or Right (R).
*   **Start State (q₀):** The state the machine starts in.
*   **Accept State (qₐ):** If the machine enters this state, it accepts the input.
*   **Reject State (qᵣ):** If the machine enters this state, it rejects the input.

### 3. Representing a Turing Machine Mathematically

*   As a 7-tuple, as shown above:  M = (Q, Σ, Γ, δ, q₀, qₐ, qᵣ)
*   Listing the elements of each set (Q, Σ, Γ) explicitly.
*   Providing a table or state diagram to represent the transition function (δ).

    *   **Example:**

        *   Q = {q₀, q₁, qₐ, qᵣ}
        *   Σ = {0, 1}
        *   Γ = {0, 1, ⊔}
        *   δ (defined in a table, see below)
        *   q₀ = q₀
        *   qₐ = qₐ
        *   qᵣ = qᵣ

### 4. The Transition Function (δ)

*   **Understanding δ: Q × Γ → Q × Γ × {L, R}**
    *   The function takes two inputs: the current state (q ∈ Q) and the current tape symbol (a ∈ Γ).
    *   The function returns three outputs:
        *   The next state (q' ∈ Q).
        *   The symbol to write on the tape (b ∈ Γ).
        *   The direction to move the head (L or R).

*   **Example Transition Function Table:**

    | Current State (q) | Current Symbol (a) | Next State (q') | Write Symbol (b) | Move (L/R) |
    |--------------------|----------------------|-------------------|--------------------|------------|
    | q₀                 | 0                   | q₁                 | 1                  | R          |
    | q₀                 | 1                   | qᵣ                 | 1                  | L          |
    | q₀                 | ⊔                   | qₐ                 | ⊔                  | R          |
    | q₁                 | 0                   | q₁                 | 0                  | R          |
    | q₁                 | 1                   | q₁                 | 1                  | R          |
    | q₁                 | ⊔                   | qₐ                 | ⊔                  | L          |

    *   **Interpretation:** If the machine is in state q₀ and reads a '0', it transitions to state q₁, writes a '1' on the tape, and moves the head to the right.

### 5. Instantaneous Description (ID)

*   **Definition:** An instantaneous description (ID) of a Turing machine represents the complete configuration of the machine at a given point in time. It describes the current state, the contents of the tape, and the position of the read/write head.
*   **Format:**  `uqv` where:
    *   `u` is the string of symbols to the *left* of the head.
    *   `q` is the current state.
    *   `v` is the string of symbols starting at the head position and continuing to the right.
*   **Example:**
    *   If the tape contains `1011⊔` and the head is pointing at the second `1` from the left, and the machine is in state `q₁`, the ID would be: `10q₁1⊔`.

*   **Move Relation (⊢):**  The move relation describes how a Turing machine transitions from one ID to another in a single step, according to the transition function.
    *   `uqv ⊢ u'q'v'`  means that from the ID `uqv`, the machine can transition to the ID `u'q'v'` in one step.
    *   **Example:**  Using the transition function table above, let's say our ID is `10q₀1⊔`. According to the table, when in state q₀ and reading a '1', the machine transitions to qᵣ, writes a '1', and moves left.  Therefore: `10q₀1⊔ ⊢ 1qᵣ01⊔`.

### 6. Accept, Reject, and Looping States

*   **Acceptance:** A Turing machine *accepts* an input string `w` if, starting in the initial configuration (q₀w), it eventually enters the accept state (qₐ). Formally:  `q₀w ⊢* uqₐv` for some strings `u` and `v` in Γ*.
*   **Rejection:** A Turing machine *rejects* an input string `w` if, starting in the initial configuration (q₀w), it eventually enters the reject state (qᵣ). Formally: `q₀w ⊢* uqᵣv` for some strings `u` and `v` in Γ*.
*   **Looping:** A Turing machine *loops* on an input string `w` if, starting in the initial configuration (q₀w), it never enters either the accept or reject state.  It continues to transition between states indefinitely. This is different from rejection; it is *not* the same as a machine determining the input is invalid, it simply never halts.

### Important Points to Remember

*   A Turing machine is a theoretical model, not a physical machine.
*   The tape is conceptually infinite in both directions.
*   The transition function is the core of the Turing machine's behavior.
*   The Turing machine can halt in an accept state, a reject state, or loop indefinitely.
*   The ID captures the complete state of the Turing machine at any given moment.
*   A Turing machine can read and write on its tape.

---

### Practice Questions / Exercises

**1. Define the components of a Turing machine.**

*   **Answer:**  See Section 2 above.  Q (states), Σ (input alphabet), Γ (tape alphabet), δ (transition function), q₀ (start state), qₐ (accept state), qᵣ (reject state).

**2.  Given the following Turing machine definition: M = (Q, Σ, Γ, δ, q₀, qₐ, qᵣ) where:

    *   Q = {q₀, q₁, q₂, qₐ, qᵣ}
    *   Σ = {a, b}
    *   Γ = {a, b, ⊔}

    And the following transition function:

    | Current State (q) | Current Symbol (a) | Next State (q') | Write Symbol (b) | Move (L/R) |
    |--------------------|----------------------|-------------------|--------------------|------------|
    | q₀                 | a                   | q₁                 | a                  | R          |
    | q₀                 | b                   | qᵣ                 | b                  | L          |
    | q₀                 | ⊔                   | qᵣ                 | ⊔                  | R          |
    | q₁                 | a                   | q₁                 | a                  | R          |
    | q₁                 | b                   | q₂                 | b                  | R          |
    | q₁                 | ⊔                   | qₐ                 | ⊔                  | L          |
    | q₂                 | a                   | q₂                 | a                  | R          |
    | q₂                 | b                   | q₂                 | b                  | R          |
    | q₂                 | ⊔                   | qₐ                 | ⊔                  | L          |

    What is the ID after two moves if the input is "ab"?**

    *   **Answer:**

        *   Initial ID: q₀ab⊔
        *   Move 1:  q₀ab⊔ ⊢ aq₁b⊔  (State q₀ reads 'a', goes to q₁, writes 'a', moves right)
        *   Move 2: aq₁b⊔ ⊢ abq₂⊔ (State q₁ reads 'b', goes to q₂, writes 'b', moves right)
        *   Final Answer: abq₂⊔

**3.  Explain the difference between a Turing machine rejecting an input and looping on an input.**

*   **Answer:**  A Turing machine rejects an input when it enters the reject state (qᵣ).  A Turing machine loops on an input when it never enters either the accept state (qₐ) or the reject state (qᵣ) and continues to run indefinitely.  Rejection means the machine made a determination that the input is invalid according to its definition. Looping means it couldn't come to any conclusion and simply runs forever.

**4.  Write the formal definition (7-tuple) for a Turing machine that accepts strings consisting of only 'a's.** (This is a simplified example, the transition function can be minimal)

*   **Answer (one possible solution):**

    M = (Q, Σ, Γ, δ, q₀, qₐ, qᵣ) where:

    *   Q = {q₀, qₐ, qᵣ}
    *   Σ = {a}
    *   Γ = {a, ⊔}
    *   δ:

        | Current State (q) | Current Symbol (a) | Next State (q') | Write Symbol (b) | Move (L/R) |
        |--------------------|----------------------|-------------------|--------------------|------------|
        | q₀                 | a                   | q₀                 | a                  | R          |
        | q₀                 | ⊔                   | qₐ                 | ⊔                  | R          |
        | qᵣ                 | a                   | qᵣ                 | a                  | R          |
        | qᵣ                 | ⊔                   | qᵣ                 | ⊔                  | R          |
        | qₐ                 | a                   | qₐ                 | a                  | R          |
        | qₐ                 | ⊔                   | qₐ                 | ⊔                  | R          |

    *   q₀ = q₀
    *   qₐ = qₐ
    *   qᵣ = qᵣ

**5.  Why is the tape alphabet (Γ) always a superset of the input alphabet (Σ)?**

*   **Answer:** The tape alphabet must be a superset of the input alphabet because the Turing machine needs to be able to write symbols on the tape that are not necessarily part of the original input.  Most importantly, it needs to be able to write the blank symbol ('⊔'), which is not part of the input alphabet. It may also need to write other "marker" symbols to perform its computations.

---
