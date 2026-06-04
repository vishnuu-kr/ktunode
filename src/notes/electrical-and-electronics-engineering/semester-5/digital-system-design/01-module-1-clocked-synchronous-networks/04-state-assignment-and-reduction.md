---
title: "State assignment and reduction"
subject: "DIGITAL SYSTEM DESIGN"
module: "Module 1: Clocked Synchronous Networks"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f362ef"
status: "completed"
scrapedAt: "2026-05-23T16:21:01.049Z"
---
# Digital System Design: Module 1 - Clocked Synchronous Networks

## Topic: State Assignment and Reduction

This module focuses on the design and analysis of sequential circuits, specifically clocked synchronous networks. Understanding state assignment and reduction is crucial for optimizing the hardware implementation of these circuits.

### Learning Outcomes:

*   **Understand the concept of state assignment in sequential circuits.**
*   **Explore different state assignment techniques and their impact on hardware implementation.**
*   **Learn methods for reducing the number of states in a sequential circuit.**
*   **Apply state reduction techniques to simplify sequential circuit designs.**

---

### 1. Introduction to State Assignment and Reduction

Clocked synchronous sequential circuits are characterized by states, transitions between states triggered by a clock signal, and outputs that depend on the current state.

*   **State:** A configuration of the internal memory of the sequential circuit.
*   **State Assignment:** The process of assigning a unique binary code (or vector of flip-flops) to each state of a sequential circuit.

The choice of state assignment significantly impacts the complexity of the resulting logic for flip-flop inputs and outputs. A good state assignment can lead to simpler logic, fewer flip-flops, and reduced hardware costs.

**Why is State Reduction Important?**
Minimizing the number of states in a sequential circuit is a fundamental step in the design process. A reduced state machine is more efficient in terms of hardware resources (flip-flops, gates) and can lead to faster operation.

**Relationship to Course Outcomes:**

*   **CO1: Analyze asynchronous and clocked synchronous sequential circuits (Knowledge Level: K3)**
    *   State assignment and reduction are core analysis techniques for understanding and optimizing synchronous sequential circuits. By reducing states, we can simplify the circuit's behavior and analyze its structure more effectively.

---

### 2. State Reduction (State Minimization)

The goal of state reduction is to find an equivalent sequential circuit with the minimum possible number of states. This is typically achieved by identifying and merging "equivalent" states.

#### 2.1 Definition of Equivalent States

Two states, $S_i$ and $S_j$, of a sequential circuit are considered **equivalent** if, for every possible input sequence, they produce identical output sequences and transition to equivalent next states.

#### 2.2 Methods for State Reduction

The most common method for state reduction is based on the concept of **state equivalence partitioning**.

**Algorithm for State Reduction (using Partitioning):**

1.  **Initial Partition ($\Pi_0$):** Group states based on their output behavior. States that produce different outputs for the same input are distinguishable.
    *   Create initial groups where states within a group have identical output sequences for all possible inputs. Typically, this involves partitioning based on the output values produced by each state.

2.  **Iterative Refinement:**
    *   For each partition $\Pi_k$, create a new partition $\Pi_{k+1}$.
    *   A block (group of states) in $\Pi_{k+1}$ is formed by taking a block from $\Pi_k$ and further partitioning it if any two states within that block transition to states that are in different blocks of $\Pi_k$ for the same input.
    *   Repeat this step until no further refinement is possible, i.e., $\Pi_{k+1} = \Pi_k$. The final partition is the minimized state table.

**Example (from Givone, Digital Principles & Design, Chapter 7):**

Consider the following state table for a Mealy machine:

| State | Input 0 | Output 0 | Input 1 | Output 1 |
| :---- | :------ | :------- | :------ | :------- |
| A     | B       | 0        | C       | 0        |
| B     | A       | 0        | D       | 1        |
| C     | A       | 0        | E       | 0        |
| D     | B       | 1        | C       | 0        |
| E     | A       | 0        | D       | 1        |

**Step 1: Initial Partition ($\Pi_0$) based on outputs.**

*   States with output (0, 0) for inputs (0, 1): A, C, E
*   States with output (0, 1) for inputs (0, 1): B, D

So, $\Pi_0 = \{\{A, C, E\}, \{B, D\}\}$.

**Step 2: Iterative Refinement.**

*   **Consider Block {A, C, E}:**
    *   **State A:**
        *   Input 0: Next state B (in block {B, D}), Output 0
        *   Input 1: Next state C (in block {A, C, E}), Output 0
    *   **State C:**
        *   Input 0: Next state A (in block {A, C, E}), Output 0
        *   Input 1: Next state E (in block {A, C, E}), Output 0
    *   **State E:**
        *   Input 0: Next state A (in block {A, C, E}), Output 0
        *   Input 1: Next state D (in block {B, D}), Output 1

*   **Distinguishability:**
    *   For input 0, A goes to {B, D}, C goes to {A, C, E}, E goes to {A, C, E}. C and E are similar to A based on their next states' blocks.
    *   For input 1, A goes to {A, C, E}, C goes to {A, C, E}, E goes to {B, D}. A and C are similar to E based on their next states' blocks.
    *   Crucially, for input 1, state E transitions to D (in block {B, D}), while A and C transition to C and A respectively (in block {A, C, E}). Since E transitions to a state in a different block than A and C for input 1, states A, C, and E are *not* equivalent to each other as a group.

*   **Refining {A, C, E}:**
    *   Compare A and C:
        *   Input 0: Next states A (in {A,C,E}), B (in {B,D}). No, this is incorrect. A goes to B, C goes to A. So A(0) -> B, C(0) -> A.
        *   Input 1: Next states C (in {A,C,E}), E (in {A,C,E}).
    *   Let's re-evaluate based on the *destination blocks* for each input.
    *   **For {A, C, E} and input 0:**
        *   A transitions to B (block {B,D}).
        *   C transitions to A (block {A,C,E}).
        *   E transitions to A (block {A,C,E}).
        *   Since A transitions to a state in a different block ({B,D}) than C and E ({A,C,E}), states A and {C, E} are distinguishable.
    *   **For {A, C, E} and input 1:**
        *   A transitions to C (block {A,C,E}).
        *   C transitions to E (block {A,C,E}).
        *   E transitions to D (block {B,D}).
        *   Since E transitions to a state in a different block ({B,D}) than A and C ({A,C,E}), states E and {A, C} are distinguishable.

*   **Revised Partitioning:**
    *   From {A, C, E}: A goes to B (in {B,D}) for input 0. C and E go to A (in {A,C,E}) for input 0. So, A is separated. New blocks: {A}, {C, E}.
    *   Now consider the blocks {A}, {C, E}, {B, D}.
    *   **Check {C, E} based on original $\Pi_0$:**
        *   State C: Input 0 -> A (in {A,C,E}), Input 1 -> E (in {A,C,E}).
        *   State E: Input 0 -> A (in {A,C,E}), Input 1 -> D (in {B,D}).
        *   Since for input 1, E goes to D (in {B,D}) while C goes to E (in {A,C,E}), C and E are distinguishable.
    *   This means {A, C, E} cannot be a single block.
    *   Let's try to partition based on the states' transitions:
        *   A's next states: B (for 0), C (for 1). B is in {B,D}, C is in {A,C,E}.
        *   B's next states: A (for 0), D (for 1). A is in {A,C,E}, D is in {B,D}.
        *   C's next states: A (for 0), E (for 1). A is in {A,C,E}, E is in {A,C,E}.
        *   D's next states: B (for 0), C (for 1). B is in {B,D}, C is in {A,C,E}.
        *   E's next states: A (for 0), D (for 1). A is in {A,C,E}, D is in {B,D}.

*   **Let's redo the partition refinement more systematically:**
    *   $\Pi_0 = \{\{A, C, E\}, \{B, D\}\}$
    *   **Consider Block $S_1 = \{A, C, E\}$:**
        *   For input 0:
            *   A $\rightarrow$ B (in block $\{B,D\}$)
            *   C $\rightarrow$ A (in block $\{A,C,E\}$)
            *   E $\rightarrow$ A (in block $\{A,C,E\}$)
            *   Since A goes to a different block than C and E, $S_1$ must be split. The states that go to $\{A,C,E\}$ for input 0 are $\{C,E\}$. The states that go to $\{B,D\}$ for input 0 is $\{A\}$. So, we get partitions $\{A\}$ and $\{C, E\}$.
        *   For input 1:
            *   A $\rightarrow$ C (in block $\{A,C,E\}$)
            *   C $\rightarrow$ E (in block $\{A,C,E\}$)
            *   E $\rightarrow$ D (in block $\{B,D\}$)
            *   Since E goes to a different block than A and C, $S_1$ must be split. The states that go to $\{A,C,E\}$ for input 1 are $\{A,C\}$. The states that go to $\{B,D\}$ for input 1 is $\{E\}$. So, we get partitions $\{A, C\}$ and $\{E\}$.
    *   Combining these observations for $S_1$:
        *   From input 0, we need to separate A from C, E.
        *   From input 1, we need to separate E from A, C.
        *   This implies we need to distinguish A, C, and E.
    *   Let's re-examine the states' next state block destinations for *all* inputs.
    *   State A: (Input 0 $\rightarrow$ {B,D}), (Input 1 $\rightarrow$ {A,C,E})
    *   State C: (Input 0 $\rightarrow$ {A,C,E}), (Input 1 $\rightarrow$ {A,C,E})
    *   State E: (Input 0 $\rightarrow$ {A,C,E}), (Input 1 $\rightarrow$ {B,D})

    *   Compare A and C:
        *   Input 0: A $\rightarrow$ {B,D}, C $\rightarrow$ {A,C,E}. Different block destinations. A and C are distinguishable.
    *   Compare A and E:
        *   Input 0: A $\rightarrow$ {B,D}, E $\rightarrow$ {A,C,E}. Different block destinations. A and E are distinguishable.
    *   Compare C and E:
        *   Input 0: C $\rightarrow$ {A,C,E}, E $\rightarrow$ {A,C,E}. Same block destinations.
        *   Input 1: C $\rightarrow$ {A,C,E}, E $\rightarrow$ {B,D}. Different block destinations. C and E are distinguishable.

    *   Since A, C, and E are all distinguishable from each other, the initial partition was too coarse.
    *   Let's refine $\Pi_0 = \{\{A, C, E\}, \{B, D\}\}$ based on these distinguishabilities.
    *   Block {A, C, E} must be split.
    *   A is distinguishable from C and E. So {A} is a block.
    *   E is distinguishable from A and C. So {E} is a block.
    *   C seems to be only distinguishable from E (for input 1). However, we already found A and C are distinguishable.

    *   Let's consider the conditions for *keeping* states together in a block. Two states are equivalent if they map to equivalent states for all inputs.
    *   States $S_i$ and $S_j$ are equivalent if for every input $x$:
        *   Output($S_i, x$) = Output($S_j, x$) AND
        *   NextState($S_i, x$) is equivalent to NextState($S_j, x$).

    *   **Let's check {A, C, E} again.**
    *   **A vs C:**
        *   Output(A,0)=0, Output(C,0)=0. Match.
        *   Output(A,1)=0, Output(C,1)=0. Match.
        *   NextState(A,0)=B, NextState(C,0)=A. Is B equivalent to A?
        *   NextState(A,1)=C, NextState(C,1)=E. Is C equivalent to E?

    *   **A vs E:**
        *   Output(A,0)=0, Output(E,0)=0. Match.
        *   Output(A,1)=0, Output(E,1)=1. Mismatch! A and E are **not equivalent**.

    *   **C vs E:**
        *   Output(C,0)=0, Output(E,0)=0. Match.
        *   Output(C,1)=0, Output(E,1)=1. Mismatch! C and E are **not equivalent**.

    *   Since A is not equivalent to E, and C is not equivalent to E, E is distinguishable from both A and C.
    *   Let's reconsider the initial partition $\Pi_0 = \{\{A, C, E\}, \{B, D\}\}$.
    *   **Are B and D equivalent?**
        *   Output(B,0)=0, Output(D,0)=1. Mismatch! B and D are **not equivalent**.

    *   This means *no states can be merged* based on the initial partitioning by outputs. This indicates there might be an error in my interpretation or the example state table. Let's re-read the definition.
    *   "States $S_i$ and $S_j$ are equivalent if for every input sequence, they produce identical output sequences AND transition to equivalent next states."

    *   Let's try a simpler approach: **Implication Table Method** (also known as the pair-wise implication method).
        *   List all pairs of states: (A,B), (A,C), (A,D), (A,E), (B,C), (B,D), (B,E), (C,D), (C,E), (D,E).
        *   Mark pairs that are distinguishable by output.
        *   Mark pairs that are distinguishable by next-state transitions.

    *   **Implication Table for the example:**

        |       | A   | B   | C   | D   | E   |
        | :---- | :-- | :-- | :-- | :-- | :-- |
        | **A** |     |     |     |     |     |
        | **B** | X   |     |     |     |     |  (B,A): Output(B,0)=0, Output(A,0)=0. Next(B,0)=A, Next(A,0)=B.
        | **C** | X   |     |     |     |     |  (C,A): Output(C,0)=0, Output(A,0)=0. Next(C,0)=A, Next(A,0)=B.
        | **D** | X   | X   | X   |     |     |  (D,A): Output(D,0)=1, Output(A,0)=0 -> Distinguishable by output.
        | **E** | X   |     | X   | X   |     |  (E,A): Output(E,1)=1, Output(A,1)=0 -> Distinguishable by output.
                                              |  (E,C): Output(E,1)=1, Output(C,1)=0 -> Distinguishable by output.

    *   **Marking distinguishable pairs based on outputs:**
        *   (B,D): Output(B,0) = 0, Output(D,0) = 1. Mark (B,D) as distinguishable.
        *   (A,E): Output(A,1) = 0, Output(E,1) = 1. Mark (A,E) as distinguishable.
        *   (C,E): Output(C,1) = 0, Output(E,1) = 1. Mark (C,E) as distinguishable.

    *   **The table after output-based marking:**

        |       | A   | B   | C   | D   | E   |
        | :---- | :-- | :-- | :-- | :-- | :-- |
        | **A** |     |     |     | X   | X   |
        | **B** |     |     |     | X   |     |
        | **C** |     |     |     |     | X   |
        | **D** | X   | X   |     |     |     |
        | **E** | X   |     | X   |     |     |

    *   **Now, consider implication rules:** If a pair $(S_i, S_j)$ is marked as distinguishable, then any pair $(S_k, S_l)$ where $S_k$ maps to $S_i$ and $S_l$ maps to $S_j$ (or vice-versa) for some input is also distinguishable.
    *   **Check implications for unmarked pairs:**
        *   **(A,B):**
            *   Input 0: Next(A,0)=B, Next(B,0)=A. Implies (B,A) is equivalent. Already marked.
            *   Input 1: Next(A,1)=C, Next(B,1)=D. Implies (C,D) is equivalent. (C,D) is unmarked. This means if (C,D) are distinguishable, then (A,B) are distinguishable. (C,D) is unmarked for now.
        *   **(A,C):**
            *   Input 0: Next(A,0)=B, Next(C,0)=A. Implies (B,A) equivalent.
            *   Input 1: Next(A,1)=C, Next(C,1)=E. Implies (C,E) equivalent. (C,E) is marked distinguishable. Therefore, (A,C) are **distinguishable**. Mark (A,C).
        *   **(A,D):** Marked.
        *   **(A,E):** Marked.
        *   **(B,C):**
            *   Input 0: Next(B,0)=A, Next(C,0)=A. Implies (A,A) equivalent (trivial).
            *   Input 1: Next(B,1)=D, Next(C,1)=E. Implies (D,E) equivalent. (D,E) is unmarked for now.
        *   **(B,D):** Marked.
        *   **(B,E):**
            *   Input 0: Next(B,0)=A, Next(E,0)=A. Implies (A,A) equivalent.
            *   Input 1: Next(B,1)=D, Next(E,1)=D. Implies (D,D) equivalent.
            *   Outputs for B: (0,1). Outputs for E: (0,1). Match.
            *   So, (B,E) is **equivalent**.
        *   **(C,D):**
            *   Input 0: Next(C,0)=A, Next(D,0)=B. Implies (A,B) equivalent. (A,B) is unmarked for now.
            *   Input 1: Next(C,1)=E, Next(D,1)=C. Implies (E,C) equivalent. (E,C) is marked distinguishable. Therefore, (C,D) are **distinguishable**. Mark (C,D).
        *   **(C,E):** Marked.
        *   **(D,E):**
            *   Input 0: Next(D,0)=B, Next(E,0)=A. Implies (B,A) equivalent.
            *   Input 1: Next(D,1)=C, Next(E,1)=D. Implies (C,D) equivalent. (C,D) is marked distinguishable. Therefore, (D,E) are **distinguishable**. Mark (D,E).

    *   **Table after first round of implications:**

        |       | A   | B   | C   | D   | E   |
        | :---- | :-- | :-- | :-- | :-- | :-- |
        | **A** |     |     | X   | X   | X   |
        | **B** |     |     |     | X   |     |
        | **C** | X   |     |     | X   | X   |
        | **D** | X   | X   | X   |     | X   |
        | **E** | X   |     | X   | X   |     |

    *   **Re-check implications:**
        *   (A,B): Implies (C,D) equivalent. (C,D) is marked. So (A,B) are distinguishable. Mark (A,B).
        *   (B,C): Implies (D,E) equivalent. (D,E) is marked. So (B,C) are distinguishable. Mark (B,C).

    *   **Table after second round:**

        |       | A   | B   | C   | D   | E   |
        | :---- | :-- | :-- | :-- | :-- | :-- |
        | **A** |     | X   | X   | X   | X   |
        | **B** | X   |     | X   | X   |     |
        | **C** | X   | X   |     | X   | X   |
        | **D** | X   | X   | X   |     | X   |
        | **E** | X   |     | X   | X   |     |

    *   Now, let's list the equivalence classes. All pairs are marked except (B,E).
    *   This implies that states B and E are equivalent.
    *   The minimized state table will have states {A}, {C}, {D}, and {B, E}.
    *   Let's rename the merged state as F = {B, E}.

    *   **Constructing the minimized state table:**
        *   States: A, C, D, F (where F represents B and E).
        *   **State A:**
            *   Input 0: Next is B (in F), Output is 0.
            *   Input 1: Next is C (in {C}), Output is 0.
        *   **State C:**
            *   Input 0: Next is A (in {A}), Output is 0.
            *   Input 1: Next is E (in F), Output is 0.
        *   **State D:**
            *   Input 0: Next is B (in F), Output is 1.
            *   Input 1: Next is C (in {C}), Output is 0.
        *   **State F (from B and E):**
            *   *From B:*
                *   Input 0: Next is A (in {A}), Output is 0.
                *   Input 1: Next is D (in {D}), Output is 1.
            *   *From E:*
                *   Input 0: Next is A (in {A}), Output is 0.
                *   Input 1: Next is D (in {D}), Output is 1.
            *   Since the next states and outputs are identical for B and E for all inputs, they are indeed equivalent. We can represent F with the output and next state from either B or E.

    *   **Minimized State Table:**

        | State | Input 0 | Output 0 | Input 1 | Output 1 |
        | :---- | :------ | :------- | :------ | :------- |
        | A     | F       | 0        | C       | 0        |
        | C     | A       | 0        | F       | 0        |
        | D     | F       | 1        | C       | 0        |
        | F     | A       | 0        | D       | 1        |

    *   This table has 4 states, reduced from the original 5.

**Key Points for State Reduction:**

*   **Equivalence:** States are equivalent if they produce identical outputs and transition to equivalent states for all inputs.
*   **Methods:** Partitioning and Implication Table are common methods.
*   **Goal:** Minimize the number of states to simplify hardware.
*   **Equivalence Classes:** The final result of state reduction is a set of equivalence classes, where each class represents a single state in the minimized machine.

---

### 3. State Assignment

Once the state table is minimized, each state needs to be assigned a unique binary code. This assignment directly determines the flip-flop inputs and outputs.

#### 3.1 Objectives of State Assignment

*   **Minimize the number of flip-flops:** This is usually fixed by the number of states in the minimized table, unless specific assignment techniques can further reduce it (which is rare and complex).
*   **Minimize the logic complexity:** This is the primary goal. A good assignment leads to simpler combinational logic for flip-flop excitation and output generation. This often translates to fewer gates, smaller fan-in/fan-out, and faster propagation delays.

#### 3.2 Number of Flip-Flops

If a minimized state table has $N$ states, you need $k$ flip-flops such that $2^k \ge N$. The number of flip-flops, $k$, is $\lceil \log_2 N \rceil$.

#### 3.3 State Assignment Techniques

Various techniques aim to find assignments that reduce logic complexity.

1.  **Binary (Natural) Assignment:**
    *   Assign binary codes sequentially to states (e.g., 000, 001, 010, ...).
    *   Simple but rarely optimal for logic minimization.

2.  **One-Hot Assignment:**
    *   Assign a unique bit position for each state. If there are $N$ states, you need $N$ flip-flops, with only one flip-flop being '1' at any time.
    *   Can simplify output logic in some cases but requires more flip-flops.

3.  **Heuristic Techniques (e.g., Grouping, Critical Path Minimization):**
    *   These methods aim to assign codes such that states that are "closely related" have similar binary codes. Closeness can be defined by:
        *   **Transitioning to the same next state:** States $S_i$ and $S_j$ that transition to the same next state $S_k$ for a given input should ideally have similar codes.
        *   **Being the next state of the same state:** If states $S_i$ and $S_j$ are next states of $S_k$ for different inputs, their codes might be similar.
        *   **Having the same output:** States with identical outputs might benefit from similar codes.

    *   **Petrick's Method / Karnaugh Map Based Assignment:**
        *   This is a more systematic approach often taught in textbooks. It involves creating Karnaugh maps for the flip-flop equations and output equations and using assignment strategies to simplify these maps.

    *   **Example of Heuristic Assignment (using the minimized table from before):**
        *   Minimized states: A, C, D, F. Need $k = \lceil \log_2 4 \rceil = 2$ flip-flops. Let the flip-flops be $Y_1Y_0$.

        | State | $Y_1Y_0$ |
        | :---- | :------- |
        | A     | ?        |
        | C     | ?        |
        | D     | ?        |
        | F     | ?        |

        *   **Analyze transitions and outputs:**
            *   A: Next states C, F. Outputs 0, 0.
            *   C: Next states A, F. Outputs 0, 0.
            *   D: Next states F, C. Outputs 1, 0.
            *   F: Next states A, D. Outputs 0, 1.

        *   **Observation:**
            *   A and C both have outputs (0,0) and transition to {C,F} and {A,F} respectively. They seem "similar".
            *   D has outputs (1,0), transitions to {F,C}.
            *   F has outputs (0,1), transitions to {A,D}.
            *   States A and C seem to share similar characteristics (outputs (0,0) and next states involving C and F). Let's try to give them adjacent codes.
            *   States D and F seem to be more distinct.

        *   **Attempt 1: Group A and C together (adjacent codes)**
            *   Assign A = 00, C = 01.
            *   Remaining states D, F. Possible assignments: D=10, F=11 or D=11, F=10.
            *   Let's try A=00, C=01, D=10, F=11.

            | State | $Y_1Y_0$ |
            | :---- | :------- |
            | A     | 00       |
            | C     | 01       |
            | D     | 10       |
            | F     | 11       |

        *   **Create the Transition Table with Assignments:**

            | Current State ($Y_1Y_0$) | Input 0 | Next State ($Y_1'Y_0'$) | Output 0 | Input 1 | Next State ($Y_1'Y_0'$) | Output 1 |
            | :---------------------- | :------ | :---------------------- | :------- | :------ | :---------------------- | :------- |
            | A (00)                  | F (11)  | 11                      | 0        | C (01)  | 01                      | 0        |
            | C (01)                  | A (00)  | 00                      | 0        | F (11)  | 11                      | 0        |
            | D (10)                  | F (11)  | 11                      | 1        | C (01)  | 01                      | 0        |
            | F (11)                  | A (00)  | 00                      | 0        | D (10)  | 10                      | 1        |

        *   **Derive Flip-Flop Equations ($Y_1', Y_0'$):**
            *   **$Y_0'$:**
                *   From A(00) $\xrightarrow{0}$ F(11) -> $Y_1'Y_0'$ is 11
                *   From A(00) $\xrightarrow{1}$ C(01) -> $Y_1'Y_0'$ is 01
                *   From C(01) $\xrightarrow{0}$ A(00) -> $Y_1'Y_0'$ is 00
                *   From C(01) $\xrightarrow{1}$ F(11) -> $Y_1'Y_0'$ is 11
                *   From D(10) $\xrightarrow{0}$ F(11) -> $Y_1'Y_0'$ is 11
                *   From D(10) $\xrightarrow{1}$ C(01) -> $Y_1'Y_0'$ is 01
                *   From F(11) $\xrightarrow{0}$ A(00) -> $Y_1'Y_0'$ is 00
                *   From F(11) $\xrightarrow{1}$ D(10) -> $Y_1'Y_0'$ is 10

            *   **$Y_0'$ Karnaugh Map (based on $Y_1Y_0$ and Input $X$):**
                | $Y_1Y_0$ \ $X$ | 0   | 1   |
                | :------------- | :-- | :-- |
                | 00 (A)         | 1   | 1   |
                | 01 (C)         | 0   | 1   |
                | 11 (F)         | 0   | 0   |
                | 10 (D)         | 1   | 1   |

                $Y_0' = Y_1'X' + Y_0X + Y_1X'$  (Not simplifying much here)

            *   **$Y_1'$:**
                *   From A(00) $\xrightarrow{0}$ F(11) -> $Y_1'Y_0'$ is 11
                *   From A(00) $\xrightarrow{1}$ C(01) -> $Y_1'Y_0'$ is 01
                *   From C(01) $\xrightarrow{0}$ A(00) -> $Y_1'Y_0'$ is 00
                *   From C(01) $\xrightarrow{1}$ F(11) -> $Y_1'Y_0'$ is 11
                *   From D(10) $\xrightarrow{0}$ F(11) -> $Y_1'Y_0'$ is 11
                *   From D(10) $\xrightarrow{1}$ C(01) -> $Y_1'Y_0'$ is 01
                *   From F(11) $\xrightarrow{0}$ A(00) -> $Y_1'Y_0'$ is 00
                *   From F(11) $\xrightarrow{1}$ D(10) -> $Y_1'Y_0'$ is 10

            *   **$Y_1'$ Karnaugh Map:**
                | $Y_1Y_0$ \ $X$ | 0   | 1   |
                | :------------- | :-- | :-- |
                | 00 (A)         | 1   | 0   |
                | 01 (C)         | 0   | 1   |
                | 11 (F)         | 0   | 1   |
                | 10 (D)         | 1   | 0   |

                $Y_1' = Y_1'X' + Y_0'X$ (This looks good!)

        *   **Derive Output Equations ($Z_0, Z_1$):**
            *   This is a Mealy machine, so outputs depend on current state and input. Let's assume the original outputs were the only outputs.
            *   Original Output Column 0 for input 0.
            *   Original Output Column 1 for input 1.

            | State | Input 0 | Output 0 | Input 1 | Output 1 |
            | :---- | :------ | :------- | :------ | :------- |
            | A (00)| F (11)  | 0        | C (01)  | 0        |
            | C (01)| A (00)  | 0        | F (11)  | 0        |
            | D (10)| F (11)  | 1        | C (01)  | 0        |
            | F (11)| A (00)  | 0        | D (10)  | 1        |

            *   **Output for Input 0:** This output is 1 only when the state is D (10) and input is 0.
                $Z_0 = Y_1 \cdot Y_0' \cdot X'$

            *   **Output for Input 1:** This output is 1 only when the state is F (11) and input is 1.
                $Z_1 = Y_1 \cdot Y_0 \cdot X$

            *   **Total Output Logic:** If we consider a single output $Z$ that is active when output 0 or output 1 is high:
                $Z = (Y_1 Y_0' X') + (Y_1 Y_0 X)$

        *   **Let's try another assignment to see if it's simpler.**
            *   Try grouping states that have common next states or outputs more aggressively.
            *   A: next {C,F}, out {0,0}
            *   C: next {A,F}, out {0,0}
            *   D: next {F,C}, out {1,0}
            *   F: next {A,D}, out {0,1}

            *   Notice A and C have similar output patterns (0,0). Let's try to give them codes where one bit is common, and the other changes.
            *   What if we try to make the flip-flop transitions simple?

            *   Consider a specific heuristic: **Maximize the number of adjacent pairs.**
                *   Adjacent pairs in codes: (00, 01), (00, 10), (01, 11), (10, 11).
                *   States A & C might be good candidates for adjacency. D & F might be good candidates.
                *   Let's try: A=00, C=01, D=11, F=10 (swapped D and F from before)

            | State | $Y_1Y_0$ |
            | :---- | :------- |
            | A     | 00       |
            | C     | 01       |
            | D     | 11       |
            | F     | 10       |

            *   **Transition Table:**

                | Current State ($Y_1Y_0$) | Input 0 | Next State ($Y_1'Y_0'$) | Output 0 | Input 1 | Next State ($Y_1'Y_0'$) | Output 1 |
                | :---------------------- | :------ | :---------------------- | :------- | :------ | :---------------------- | :------- |
                | A (00)                  | F (10)  | 10                      | 0        | C (01)  | 01                      | 0        |
                | C (01)                  | A (00)  | 00                      | 0        | F (10)  | 10                      | 0        |
                | D (11)                  | F (10)  | 10                      | 1        | C (01)  | 01                      | 0        |
                | F (10)                  | A (00)  | 00                      | 0        | D (11)  | 11                      | 1        |

            *   **$Y_0'$:**
                | $Y_1Y_0$ \ $X$ | 0   | 1   |
                | :------------- | :-- | :-- |
                | 00 (A)         | 0   | 1   |
                | 01 (C)         | 0   | 0   |
                | 10 (F)         | 0   | 1   |
                | 11 (D)         | 0   | 1   |

                $Y_0' = X$ (This is much simpler!)

            *   **$Y_1'$:**
                | $Y_1Y_0$ \ $X$ | 0   | 1   |
                | :------------- | :-- | :-- |
                | 00 (A)         | 1   | 0   |
                | 01 (C)         | 0   | 1   |
                | 10 (F)         | 0   | 1   |
                | 11 (D)         | 1   | 0   |

                $Y_1' = Y_1'X' + Y_0'X$ (Same as before)

            *   **Output $Z$:**
                *   Output 0 is 1 when state is D (11) and input is 0.
                    $Z_{out0} = Y_1 Y_0 X'$
                *   Output 1 is 1 when state is F (10) and input is 1.
                    $Z_{out1} = Y_1 Y_0' X$
                *   Total $Z = Y_1 Y_0 X' + Y_1 Y_0' X$

        *   **Comparison:** The second assignment ($A=00, C=01, D=11, F=10$) yielded a much simpler equation for $Y_0'$ ($Y_0' = X$). This is generally considered a better assignment.

**Key Points for State Assignment:**

*   **Goal:** Minimize combinational logic for flip-flop inputs and outputs.
*   **Number of Flip-Flops:** Determined by the number of states ($N$) as $\lceil \log_2 N \rceil$.
*   **Heuristics:** Group states with similar behaviors (transitions, outputs) to have adjacent binary codes.
*   **Verification:** Derive logic equations and evaluate their complexity for different assignments.

---

### 4. Practice Questions and Exercises

**Question 1 (State Reduction):**
Minimize the following state table for a Moore machine:

| State | Input 0 | Input 1 | Output |
| :---- | :------ | :------ | :----- |
| S0    | S1      | S0      | 0      |
| S1    | S2      | S1      | 0      |
| S2    | S0      | S1      | 1      |
| S3    | S2      | S3      | 1      |

**Answer 1:**

1.  **Initial Partition ($\Pi_0$) based on Outputs:**
    *   States with Output 0: {S0, S1}
    *   States with Output 1: {S2, S3}
    *   $\Pi_0 = \{\{S0, S1\}, \{S2, S3\}\}$

2.  **Iterative Refinement:**
    *   **Consider Block {S0, S1}:**
        *   S0: Input 0 $\rightarrow$ S1 (in {S0, S1}), Output 0
        *   S0: Input 1 $\rightarrow$ S0 (in {S0, S1}), Output 0
        *   S1: Input 0 $\rightarrow$ S2 (in {S2, S3}), Output 0
        *   S1: Input 1 $\rightarrow$ S1 (in {S0, S1}), Output 0
        *   Since S1 transitions to a state in a different block ({S2, S3}) for Input 0, S0 and S1 are distinguishable.
        *   This splits {S0, S1} into {S0} and {S1}.

    *   **Consider Block {S2, S3}:**
        *   S2: Input 0 $\rightarrow$ S0 (in {S0, S1}), Output 1
        *   S2: Input 1 $\rightarrow$ S1 (in {S0, S1}), Output 1
        *   S3: Input 0 $\rightarrow$ S2 (in {S2, S3}), Output 1
        *   S3: Input 1 $\rightarrow$ S3 (in {S2, S3}), Output 1
        *   Since S2 transitions to states in {S0, S1} for both inputs, while S3 transitions to states in {S2, S3}, S2 and S3 are distinguishable.
        *   This splits {S2, S3} into {S2} and {S3}.

    *   **The partitioning process yields:** $\Pi_1 = \{\{S0\}, \{S1\}, \{S2\}, \{S3\}\}$.
    *   No further merging is possible. This state table is already minimal.

    **Answer:** The state table is minimal. No state reduction is possible.

**Question 2 (State Assignment):**
For the minimized state table obtained in Question 1, assign binary codes to the states and determine the flip-flop equations. Use a heuristic approach to minimize the logic.

**Answer 2:**

*   Minimized states: S0, S1, S2, S3.
*   Number of flip-flops needed: $k = \lceil \log_2 4 \rceil = 2$. Let the flip-flops be $Q_1Q_0$.

*   **Analyze states for assignment heuristics:**
    *   S0: Next states S1, S0. Output 0.
    *   S1: Next states S2, S1. Output 0.
    *   S2: Next states S0, S1. Output 1.
    *   S3: Next states S2, S3. Output 1.

*   **Observation:** S0 and S1 have the same output (0). S2 and S3 have the same output (1).
    *   S0 and S2 have next states {S1, S0} and {S0, S1} respectively. They seem complementary.
    *   S1 and S3 have next states {S2, S1} and {S2, S3} respectively.

*   **Heuristic Strategy:** Try to give states with the same output similar codes (e.g., differing by one bit). Also, try to make the next-state transitions simple.

*   **Attempt 1: Group S0 and S1 (output 0), and S2 and S3 (output 1).**
    *   Assign S0 = 00, S1 = 01 (common $Q_1=0$)
    *   Assign S2 = 10, S3 = 11 (common $Q_1=1$)

    | State | $Q_1Q_0$ |
    | :---- | :------- |
    | S0    | 00       |
    | S1    | 01       |
    | S2    | 10       |
    | S3    | 11       |

*   **Transition Table with Assignment:**

    | Current State ($Q_1Q_0$) | Input 0 | Next State ($Q_1'Q_0'$) | Output | Input 1 | Next State ($Q_1'Q_0'$) | Output |
    | :---------------------- | :------ | :---------------------- | :----- | :------ | :---------------------- | :----- |
    | S0 (00)                 | S1 (01) | 01                      | 0      | S0 (00) | 00                      | 0      |
    | S1 (01)                 | S2 (10) | 10                      | 0      | S1 (01) | 01                      | 0      |
    | S2 (10)                 | S0 (00) | 00                      | 1      | S1 (01) | 01                      | 1      |
    | S3 (11)                 | S2 (10) | 10                      | 1      | S3 (11) | 11                      | 1      |

*   **Derive Flip-Flop Equations ($Q_1', Q_0'$):**

    *   **$Q_0'$:**
        | $Q_1Q_0$ \ $X$ | 0   | 1   |
        | :------------- | :-- | :-- |
        | 00 (S0)        | 1   | 0   |
        | 01 (S1)        | 0   | 1   |
        | 10 (S2)        | 0   | 1   |
        | 11 (S3)        | 0   | 1   |

        $Q_0' = Q_1'X' + Q_0X'$ (From S0) + $Q_0X$ (from S1, S2, S3)
        $Q_0' = Q_1'X' + Q_0X' + Q_0X = Q_1'X' + Q_0(X'+X) = Q_1'X' + Q_0$
        *This is simple!*

    *   **$Q_1'$:**
        | $Q_1Q_0$ \ $X$ | 0   | 1   |
        | :------------- | :-- | :-- |
        | 00 (S0)        | 0   | 0   |
        | 01 (S1)        | 1   | 0   |
        | 10 (S2)        | 0   | 0   |
        | 11 (S3)        | 1   | 1   |

        $Q_1' = Q_0X'$ (From S1) + $Q_1Q_0X$ (from S3)
        $Q_1' = Q_0X' + Q_1Q_0X$
        *This is also relatively simple.*

*   **Derive Output Equation ($Z$):**
    *   Output is 1 for states S2 and S3.
    *   **Output $Z$ Karnaugh Map:**
        | $Q_1Q_0$ \ $X$ | 0   | 1   |
        | :------------- | :-- | :-- |
        | 00 (S0)        | 0   | 0   |
        | 01 (S1)        | 0   | 0   |
        | 10 (S2)        | 1   | 1   |
        | 11 (S3)        | 1   | 1   |

        $Z = Q_1$
        *This is very simple!*

*   **Final Equations for this assignment:**
    *   $Q_0' = Q_1'X' + Q_0$
    *   $Q_1' = Q_0X' + Q_1Q_0X$
    *   $Z = Q_1$

*   **Comparison:** This assignment resulted in very simple flip-flop equations and an extremely simple output equation. This is a good assignment.

---

### 5. Important Points to Remember

*   **State Reduction:** Always the first step to simplify a sequential circuit. It involves identifying and merging equivalent states.
*   **Equivalence Definition:** Crucial for state reduction. States are equivalent if they produce identical outputs and transition to equivalent states for all inputs.
*   **State Assignment:** The process of assigning binary codes to states. The goal is to minimize the complexity of the excitation and output logic.
*   **Heuristics:** No single perfect algorithm for state assignment; heuristics are used to find good assignments. Look for states with common outputs or common next-state transitions to assign similar codes.
*   **Verification:** After making an assignment, derive the logic equations and evaluate their simplicity.
*   **Moore vs. Mealy:** State reduction applies to both. State assignment techniques can be tailored for each; Mealy machine outputs depend on both state and input, which influences output logic derivation.

---
