---
title: "State assignment problem and the transition table"
subject: "DIGITAL SYSTEM DESIGN"
module: "Module 2: ASM Chart and its realization"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe716"
status: "completed"
scrapedAt: "2026-05-23T17:47:49.254Z"
---
# Digital System Design: Module 2 - ASM Chart and its Realization

## Topic: State Assignment Problem and the Transition Table

This module focuses on the practical realization of sequential circuits designed using ASM (Algorithmic State Machine) charts. A crucial step in this realization is the **state assignment problem**, which directly impacts the complexity and performance of the resulting hardware. This topic delves into understanding this problem and the role of **transition tables** in guiding the state assignment process.

### Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Understand the concept of the state assignment problem in sequential circuit design.
*   Explain why a good state assignment is important for minimizing hardware and improving performance.
*   Define and construct a transition table from an ASM chart or state diagram.
*   Relate the transition table to the state assignment problem.
*   Understand basic approaches to solving the state assignment problem.

### Key Concepts and Definitions

#### 1. State Assignment Problem

*   **Definition:** The state assignment problem is the task of assigning binary codes to the states of a sequential circuit. Each state in the ASM chart or state diagram needs to be represented by a unique binary combination of flip-flop outputs.
*   **Why it's a Problem:** The choice of binary codes for each state significantly affects the logic required to implement the next-state logic and output logic. A poor state assignment can lead to more complex circuitry, higher propagation delays, and increased power consumption.
*   **Goal:** To find an assignment that minimizes the number of gates or product terms in the resulting logic, leading to a simpler and more efficient circuit.

**(Reference: Givone, Chapter 6; Mano & Ciletti, Chapter 7)**

#### 2. Transition Table

*   **Definition:** A transition table is a tabular representation of a sequential circuit's behavior. It lists all possible present states of the flip-flops and all possible input combinations, and for each combination, it specifies the next state and the output.
*   **Relationship to ASM Charts/State Diagrams:** A transition table is derived directly from the state diagram or ASM chart. It essentially translates the graphical representation into a structured table format that is amenable to logic synthesis.
*   **Structure of a Transition Table:**
    *   **Present State:** Represents the current state of the sequential circuit, encoded by the flip-flop outputs (e.g., Q1, Q0).
    *   **Inputs:** Represents the current values of the external inputs to the circuit.
    *   **Next State:** Represents the state the circuit will transition to in the next clock cycle, based on the present state and inputs.
    *   **Outputs:** Represents the output values of the circuit in the current state (for Mealy machines, outputs depend on both present state and inputs).

**(Reference: Mano & Ciletti, Chapter 7; Wakerly, Chapter 5)**

### 3. Realization of ASM Charts and the Role of Transition Tables

An ASM chart is a graphical representation of a sequential circuit that includes states, transitions between states, and conditions for these transitions. To realize an ASM chart in hardware, we typically follow these steps:

1.  **Identify States:** Determine all the distinct states from the ASM chart.
2.  **Determine Inputs and Outputs:** Identify the external inputs that control transitions and the outputs produced by the circuit.
3.  **Create a State Diagram:** Convert the ASM chart into a state diagram if it's not already in that format.
4.  **Construct a Transition Table:** From the state diagram, create a transition table that systematically lists all state-input-next\_state-output combinations.
5.  **State Assignment:** Assign binary codes to each state in the transition table. This is where the state assignment problem comes into play.
6.  **Derive Logic Equations:** Using the assigned binary codes in the transition table, derive Boolean expressions for the flip-flop inputs (which determine the next state) and the circuit outputs.
7.  **Implement the Circuit:** Implement the logic equations using flip-flops and combinational logic gates.

**Example: A Simple Sequence Detector**

Let's consider a simple sequence detector that outputs '1' when the input sequence '101' is detected.

**ASM Chart (Simplified Representation):**

*   **State S0:** Initial state. If input is '0', stay in S0. If input is '1', go to S1. Output is '0'.
*   **State S1:** Received '1'. If input is '0', go to S2. If input is '1', stay in S1. Output is '0'.
*   **State S2:** Received '10'. If input is '1', go to S0 (sequence detected, output '1'). If input is '0', stay in S2. Output is '0'.

**State Diagram:**

```
      +-----+      1      +-----+      0      +-----+      1      +-----+
      |     |------------>|     |------------>|     |------------>|     |
      | S0  |             | S1  |             | S2  |             | S0  | (Output 1)
      |     |      0      |     |      1      |     |      0      |     |
      +-----+------------>+-----+------------>+-----+------------>+-----+
                      (Output 0)          (Output 0)          (Output 0)
```

**Transition Table (Unassigned States):**

| Present State | Input (X) | Next State | Output (Y) |
| :------------ | :-------- | :--------- | :--------- |
| S0            | 0         | S0         | 0          |
| S0            | 1         | S1         | 0          |
| S1            | 0         | S2         | 0          |
| S1            | 1         | S1         | 0          |
| S2            | 0         | S2         | 0          |
| S2            | 1         | S0         | 1          |

#### The State Assignment Problem in Action

Now, let's consider assigning binary codes. Let's assume we need 2 flip-flops (n=2) for 3 states (m=3). We need $2^n \ge m$ flip-flops.

**State Assignment 1 (Natural Assignment):**

*   S0 = 00
*   S1 = 01
*   S2 = 10

**Modified Transition Table with State Assignment 1:**

Let the flip-flop outputs be $Q_1 Q_0$.

| Present State ($Q_1 Q_0$) | Input (X) | Next State | $Q_1' Q_0'$ | Output (Y) |
| :------------------------ | :-------- | :--------- | :---------- | :--------- |
| 00                        | 0         | S0         | 00          | 0          |
| 00                        | 1         | S1         | 01          | 0          |
| 01                        | 0         | S2         | 10          | 0          |
| 01                        | 1         | S1         | 01          | 0          |
| 10                        | 0         | S2         | 10          | 0          |
| 10                        | 1         | S0         | 00          | 1          |

From this table, we can derive the logic equations for the flip-flop inputs ($J_1, K_1, J_0, K_0$ for JK flip-flops, or $D_1, D_0$ for D flip-flops) and the output Y.

Let's use D flip-flops for simplicity ($D_1 = Q_1'$, $D_0 = Q_0'$).

**K-Maps for Logic Synthesis:**

**For $D_1$:**

| $Q_1 Q_0$ | 00 | 01 | 11 | 10 |
| :-------- | :- | :- | :- | :- |
| X=0       | 0  | 0  | -  | 1  |
| X=1       | 0  | 0  | -  | 0  |

From the K-map, grouping 1s for $X=0$:
$D_1 = \overline{Q_1} \overline{Q_0} \overline{X} + Q_1 \overline{Q_0} \overline{X}$
$D_1 = (\overline{Q_1} \overline{Q_0} + Q_1 \overline{Q_0}) \overline{X}$
$D_1 = (\overline{Q_0}(\overline{Q_1} + Q_1)) \overline{X}$
$D_1 = \overline{Q_0} \overline{X}$

**For $D_0$:**

| $Q_1 Q_0$ | 00 | 01 | 11 | 10 |
| :-------- | :- | :- | :- | :- |
| X=0       | 0  | 0  | -  | 0  |
| X=1       | 1  | 1  | -  | 0  |

From the K-map, grouping 1s for $X=1$:
$D_0 = \overline{Q_1} \overline{Q_0} X + \overline{Q_1} Q_0 X$
$D_0 = \overline{Q_1} X (\overline{Q_0} + Q_0)$
$D_0 = \overline{Q_1} X$

**For Output Y:**

| $Q_1 Q_0$ | 00 | 01 | 11 | 10 |
| :-------- | :- | :- | :- | :- |
| X=0       | 0  | 0  | -  | 0  |
| X=1       | 0  | 0  | -  | 1  |

From the K-map, grouping 1s for $X=1$:
$Y = Q_1 \overline{Q_0} X$

**Logic Equations:**
$D_1 = \overline{Q_0} \overline{X}$
$D_0 = \overline{Q_1} X$
$Y = Q_1 \overline{Q_0} X$

This assignment leads to relatively simple logic.

**State Assignment 2 (Another Assignment):**

*   S0 = 00
*   S1 = 10
*   S2 = 01

**Modified Transition Table with State Assignment 2:**

| Present State ($Q_1 Q_0$) | Input (X) | Next State | $Q_1' Q_0'$ | Output (Y) |
| :------------------------ | :-------- | :--------- | :---------- | :--------- |
| 00                        | 0         | S0         | 00          | 0          |
| 00                        | 1         | S1         | 10          | 0          |
| 10                        | 0         | S2         | 01          | 0          |
| 10                        | 1         | S1         | 10          | 0          |
| 01                        | 0         | S2         | 01          | 0          |
| 01                        | 1         | S0         | 00          | 1          |

**K-Maps for Logic Synthesis (Assignment 2):**

**For $D_1$:**

| $Q_1 Q_0$ | 00 | 01 | 11 | 10 |
| :-------- | :- | :- | :- | :- |
| X=0       | 0  | 0  | -  | 0  |
| X=1       | 1  | 0  | -  | 1  |

$D_1 = \overline{Q_1} \overline{Q_0} X + Q_1 \overline{Q_0} X$
$D_1 = (\overline{Q_1} + Q_1) \overline{Q_0} X$
$D_1 = \overline{Q_0} X$

**For $D_0$:**

| $Q_1 Q_0$ | 00 | 01 | 11 | 10 |
| :-------- | :- | :- | :- | :- |
| X=0       | 0  | 1  | -  | 0  |
| X=1       | 0  | 0  | -  | 1  |

$D_0 = \overline{Q_1} Q_0 \overline{X} + Q_1 \overline{Q_0} X$

**For Output Y:**

| $Q_1 Q_0$ | 00 | 01 | 11 | 10 |
| :-------- | :- | :- | :- | :- |
| X=0       | 0  | 0  | -  | 0  |
| X=1       | 0  | 1  | -  | 0  |

$Y = \overline{Q_1} Q_0 X$

**Logic Equations (Assignment 2):**
$D_1 = \overline{Q_0} X$
$D_0 = \overline{Q_1} Q_0 \overline{X} + Q_1 \overline{Q_0} X$
$Y = \overline{Q_1} Q_0 X$

Comparing the two assignments, the first assignment yielded simpler logic for $D_0$ and $Y$. This illustrates the impact of state assignment.

### Approaches to State Assignment

The state assignment problem is a classic combinatorial optimization problem. Several methods exist to find "good" assignments, though finding the absolute optimal assignment can be computationally intensive.

#### 1. Intuitive/Heuristic Methods

*   **Implication Chart Method:** This is a systematic approach to find compatible state pairs and assign binary codes to minimize conflicts. It's based on the idea that states that transition to the same next state under the same input conditions should ideally have similar binary codes.
    *   States that are distinguishable (i.e., they produce different outputs or transition to different next states under some input) cannot be assigned the same code.
    *   States that transition to the same next state under the same input conditions are "implicated" to have similar codes. This implies that if state A transitions to state C, and state B also transitions to state C under the same input, then the codes for A and B should share as many bits as possible with the code for C.
*   **Graph Coloring:** States can be represented as nodes in a graph, and adjacencies are determined by transitions. The problem then becomes coloring the graph such that adjacent nodes have different colors, which corresponds to assigning distinct binary codes.

**(Reference: Givone, Chapter 6; Wakerly, Chapter 5; Yarbrough, Chapter 7)**

#### 2. Algorithmic Approaches

*   **Branch and Bound:** Techniques that explore a tree of possible assignments, pruning branches that are unlikely to lead to an optimal solution.
*   **Automated State Assignment Tools:** Modern synthesis tools employ sophisticated algorithms to perform state assignment.

#### 3. Factors Influencing State Assignment Choice

*   **Number of States:** For a small number of states, intuitive methods might suffice. For many states, automated tools are necessary.
*   **Flip-flop Type:** The choice of flip-flop (D, JK, T) can influence the complexity of the resulting logic and therefore the optimal state assignment.
*   **Minimize Logic:** The primary goal is to minimize the number of gates, product terms, or literals in the final logic equations.
*   **Minimize Propagation Delay:** A good state assignment can reduce the critical path delay of the circuit.
*   **Testability:** Some assignments can improve the testability of the resulting circuit.

**(Reference: Mano & Ciletti, Chapter 7)**

### Importance of State Assignment

*   **Hardware Complexity:** A well-chosen state assignment can significantly reduce the number of gates, flip-flops, and interconnections, leading to a more compact and cost-effective design.
*   **Performance:** By minimizing the critical path delay, a good state assignment can allow the circuit to operate at a higher clock frequency.
*   **Power Consumption:** Simpler logic generally consumes less power.
*   **Design Effort:** While finding the optimal assignment can be complex, a structured approach helps manage the design process.

### Practice Questions/Exercises

1.  **Construct a transition table for the following state diagram:**

    *   State A: Output 0. If input X=0, go to A. If input X=1, go to B.
    *   State B: Output 0. If input X=0, go to C. If input X=1, go to B.
    *   State C: Output 1. If input X=0, go to A. If input X=1, go to B.

    **Answer:**

    | Present State | Input (X) | Next State | Output (Y) |
    | :------------ | :-------- | :--------- | :--------- |
    | A             | 0         | A          | 0          |
    | A             | 1         | B          | 0          |
    | B             | 0         | C          | 0          |
    | B             | 1         | B          | 0          |
    | C             | 0         | A          | 1          |
    | C             | 1         | B          | 1          |

2.  **For the transition table above, assign binary codes:** A=00, B=01, C=10. Derive the transition table with assigned codes and write down the logic equations for D flip-flops ($D_A$, $D_B$) and output Y.

    **Answer:**

    **Modified Transition Table:**

    | Present State ($Q_1 Q_0$) | Input (X) | Next State | $Q_1' Q_0'$ | Output (Y) |
    | :------------------------ | :-------- | :--------- | :---------- | :--------- |
    | 00                        | 0         | A (00)     | 00          | 0          |
    | 00                        | 1         | B (01)     | 01          | 0          |
    | 01                        | 0         | C (10)     | 10          | 0          |
    | 01                        | 1         | B (01)     | 01          | 0          |
    | 10                        | 0         | A (00)     | 00          | 1          |
    | 10                        | 1         | B (01)     | 01          | 1          |

    **K-Maps for Logic Synthesis:**

    **For $D_1$ ($Q_1'$):**

    | $Q_1 Q_0$ | 00 | 01 | 11 | 10 |
    | :-------- | :- | :- | :- | :- |
    | X=0       | 0  | 0  | -  | 1  |
    | X=1       | 0  | 0  | -  | 0  |

    $D_1 = \overline{Q_1} \overline{Q_0} \overline{X} + Q_1 \overline{Q_0} \overline{X} = \overline{Q_0} \overline{X}$

    **For $D_0$ ($Q_0'$):**

    | $Q_1 Q_0$ | 00 | 01 | 11 | 10 |
    | :-------- | :- | :- | :- | :- |
    | X=0       | 0  | 1  | -  | 0  |
    | X=1       | 1  | 1  | -  | 1  |

    $D_0 = \overline{Q_1} Q_0 \overline{X} + \overline{Q_1} \overline{Q_0} X + Q_1 \overline{Q_0} X$
    $D_0 = \overline{Q_1} (Q_0 \overline{X} + \overline{Q_0} X) + Q_1 \overline{Q_0} X$
    $D_0 = \overline{Q_1} (Q_0 \oplus X) + Q_1 \overline{Q_0} X$

    **For Output Y:**

    | $Q_1 Q_0$ | 00 | 01 | 11 | 10 |
    | :-------- | :- | :- | :- | :- |
    | X=0       | 0  | 0  | -  | 1  |
    | X=1       | 0  | 0  | -  | 1  |

    $Y = \overline{Q_1} \overline{Q_0} \overline{X} + Q_1 \overline{Q_0} \overline{X} + Q_1 \overline{Q_0} X$
    $Y = \overline{Q_0} \overline{X} + Q_1 \overline{Q_0}$
    $Y = \overline{Q_0} (\overline{X} + Q_1)$

    **Logic Equations:**
    $D_1 = \overline{Q_0} \overline{X}$
    $D_0 = \overline{Q_1} (Q_0 \oplus X) + Q_1 \overline{Q_0} X$
    $Y = \overline{Q_0} (\overline{X} + Q_1)$

3.  **Explain why a state assignment problem exists and what its implications are for digital system design.**

    **Answer:** The state assignment problem arises because sequential circuits have internal states that need to be represented by binary codes. The choice of these binary codes is not arbitrary; it directly influences the complexity of the combinational logic required to implement the circuit's next-state and output functions. A poor state assignment can lead to more gates, larger fan-ins/fan-outs, longer propagation delays, and increased power consumption, making the circuit less efficient and potentially slower. Conversely, an optimal state assignment can significantly simplify the hardware implementation, improving performance and reducing costs.

### Important Points to Remember

*   The state assignment problem is about assigning unique binary codes to the states of a sequential circuit.
*   A transition table systematically lists all state-input-next\_state-output transitions.
*   The state assignment is performed *after* creating the transition table and *before* deriving the logic equations.
*   The goal of state assignment is to minimize the complexity of the resulting combinational logic.
*   Various heuristic and algorithmic methods exist to tackle the state assignment problem.
*   The number of flip-flops required is determined by the number of states ($2^n \ge m$).

### Course Outcome Alignment

*   **CO1: Analyze asynchronous and clocked synchronous sequential circuits:** This topic directly contributes to understanding the structure and behavior of synchronous sequential circuits by focusing on their realization through transition tables and state assignment.
*   **CO2: Design hazard-free digital circuits:** While hazard-free design is a separate topic, the process of deriving logic equations from a transition table (after state assignment) is a precursor to applying hazard detection and elimination techniques.
*   **CO4: Apply VHDL programming in digital system design:** The transition table is the foundational input for generating VHDL code for sequential circuits. Understanding the table structure and the impact of state assignment informs how you would structure your VHDL entity and architecture.

This detailed exploration of the state assignment problem and transition tables provides a critical understanding of how to translate abstract sequential circuit descriptions into concrete hardware implementations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
