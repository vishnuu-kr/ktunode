---
title: "Moore machine"
subject: "DIGITAL SYSTEMS AND VLSI DESIGN"
module: "Module 1: Clocked Synchronous Networks"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe749"
status: "completed"
scrapedAt: "2026-05-23T17:48:03.172Z"
---
# DIGITAL SYSTEMS AND VLSI DESIGN - Module 1: Clocked Synchronous Networks - Moore Machine

## 1. Introduction to Sequential Networks

Sequential networks are digital circuits whose output depends not only on the current input but also on the past sequence of inputs. This memory element is achieved through the use of **flip-flops** or other **memory elements**.

*   **Combinational Networks:** Output is solely a function of current inputs.
*   **Sequential Networks:** Output is a function of current inputs AND the current state of the system.

### Key Concepts:
*   **State:** The internal condition of the sequential network at any given time, determined by the values stored in its memory elements (flip-flops).
*   **Clock Signal:** A periodic pulse that synchronizes the state changes in the sequential network. This is the defining characteristic of **clocked synchronous sequential networks (CSSNs)**.
*   **Synchronous Operation:** State transitions occur only at specific moments in time, typically at the active edge (rising or falling) of the clock signal. This eliminates timing ambiguities and simplifies design.

**Referenced in:**
*   Givone, "Digital Principles & Design" (Chapter 5: Sequential Networks)
*   Wakerly, "Digital Design: Principles and Practices" (Chapter 5: Sequential Logic)
*   Mano & Ciletti, "Digital Design: With an Introduction to the Verilog HDL, VHDL, and SystemVerilog" (Chapter 7: Sequential Logic Design)

## 2. Finite State Machines (FSMs)

Finite State Machines (FSMs) are mathematical models used to design and analyze sequential logic circuits. They are characterized by a finite number of states, a finite set of inputs, and a finite set of outputs.

### 2.1. Components of an FSM:
An FSM is formally defined by a 6-tuple: $(Q, \Sigma, \Delta, \delta, \lambda, q_0)$
*   $Q$: A finite set of states.
*   $\Sigma$: A finite set of input symbols (inputs).
*   $\Delta$: A finite set of output symbols (outputs).
*   $\delta$: The state transition function: $Q \times \Sigma \rightarrow Q$. It determines the next state based on the current state and input.
*   $\lambda$: The output function. This is where Moore and Mealy machines differ.
*   $q_0 \in Q$: The initial state.

## 3. Moore Machine

A **Moore machine** is a type of finite state machine where the output is determined **solely by the current state** of the machine. The output does not depend on the current input directly.

### 3.1. Key Characteristics:
*   **Output depends only on the current state.**
*   For every state, there is a defined output.
*   The output alphabet $\Delta$ is determined by the output function $\lambda: Q \rightarrow \Delta$.

### 3.2. Formal Definition of a Moore Machine:
A Moore machine is defined by a 6-tuple: $(Q, \Sigma, \Delta, \delta, \lambda, q_0)$
*   $Q$: A finite set of states.
*   $\Sigma$: A finite set of input symbols (inputs).
*   $\Delta$: A finite set of output symbols (outputs).
*   $\delta$: The state transition function: $Q \times \Sigma \rightarrow Q$.
*   $\lambda$: The output function: $Q \rightarrow \Delta$.
*   $q_0 \in Q$: The initial state.

### 3.3. State Transition Diagram:
*   States are represented by circles.
*   Transitions between states are represented by directed arrows.
*   Each arrow is labeled with the input that causes the transition.
*   **Crucially, the output is written inside the state circle.**

### 3.4. State Table:
A state table summarizes the behavior of a Moore machine. It typically includes:
*   Current State
*   Current Input
*   Next State
*   Output (associated with the next state)

**Example of a Moore State Table:**

| Current State | Input (X) | Next State | Output (Y) |
| :------------ | :-------- | :--------- | :--------- |
| S0            | 0         | S1         | 0          |
| S0            | 1         | S0         | 0          |
| S1            | 0         | S1         | 1          |
| S1            | 1         | S0         | 1          |

**Explanation:**
*   If the machine is in state S0 and the input is 0, it transitions to state S1 and the output is 0.
*   If the machine is in state S0 and the input is 1, it remains in state S0 and the output is 0.
*   If the machine is in state S1 and the input is 0, it remains in state S1 and the output is 1.
*   If the machine is in state S1 and the input is 1, it transitions to state S0 and the output is 1.

**Referenced in:**
*   Givone, "Digital Principles & Design" (Chapter 5: Sequential Networks)
*   Wakerly, "Digital Design: Principles and Practices" (Chapter 5: Sequential Logic)
*   Mano & Ciletti, "Digital Design: With an Introduction to the Verilog HDL, VHDL, and SystemVerilog" (Chapter 7: Sequential Logic Design)
*   Yarbrough, "Digital Logic Applications and Design" (Chapter 6: Sequential Logic)

## 4. Moore Machine Design Steps

Designing a Moore machine involves several systematic steps. This process helps in converting a functional requirement into a concrete circuit implementation.

### 4.1. Step 1: Understand the Problem and Define States
*   Clearly define the desired behavior of the sequential circuit.
*   Identify the distinct conditions (states) the circuit needs to remember.
*   Determine the inputs and outputs of the system.

### 4.2. Step 2: Create a State Diagram
*   Represent each identified state as a circle.
*   Draw directed arrows between states to represent transitions.
*   Label each transition arrow with the input condition that causes it.
*   Associate an output value with each state in a Moore machine.

### 4.3. Step 3: Create a State Table
*   Translate the state diagram into a tabular format.
*   List all states.
*   For each state, list all possible inputs and the corresponding next state and output.
*   Ensure that for each state, there is a defined output regardless of the input.

### 4.4. Step 4: State Minimization (Optional but Recommended)
*   If the initial state diagram results in redundant states (states that are functionally equivalent), they should be merged to reduce complexity and the number of flip-flops required.
*   Techniques like implication tables or compatibility graphs are used for state minimization.

**Referenced in:**
*   Givone, "Digital Principles & Design" (Chapter 5: Sequential Networks)
*   Wakerly, "Digital Design: Principles and Practices" (Chapter 5: Sequential Logic)
*   Mano & Ciletti, "Digital Design: With an Introduction to the Verilog HDL, VHDL, and SystemVerilog" (Chapter 7: Sequential Logic Design)
*   Kohavi & Jha, "Switching and Finite Automata Theory" (Chapter 4: State Minimization)

### 4.5. Step 5: State Assignment
*   Assign binary codes to each state.
*   The number of bits required for the state assignment is determined by $2^m \ge N$, where $N$ is the number of states and $m$ is the number of flip-flops.
*   The choice of state assignment can significantly impact the complexity of the resulting logic circuits. Techniques like one-hot encoding or Karnaugh map-based assignments can be used.

**Referenced in:**
*   Givone, "Digital Principles & Design" (Chapter 5: Sequential Networks)
*   Wakerly, "Digital Design: Principles and Practices" (Chapter 5: Sequential Logic)
*   Mano & Ciletti, "Digital Design: With an Introduction to the Verilog HDL, VHDL, and SystemVerilog" (Chapter 7: Sequential Logic Design)

### 4.6. Step 6: Implement the Logic
*   Create excitation tables for the chosen flip-flops (e.g., D, JK, T).
*   Develop Karnaugh maps (K-maps) or use Boolean algebra to derive the logic equations for:
    *   Flip-flop inputs (excitation equations).
    *   Output functions.
*   Implement the circuit using logic gates and flip-flops based on the derived equations.

**Referenced in:**
*   Givone, "Digital Principles & Design" (Chapter 5: Sequential Networks)
*   Wakerly, "Digital Design: Principles and Practices" (Chapter 5: Sequential Logic)
*   Mano & Ciletti, "Digital Design: With an Introduction to the Verilog HDL, VHDL, and SystemVerilog" (Chapter 7: Sequential Logic Design)

## 5. Comparison: Moore vs. Mealy Machines

Both Moore and Mealy machines are types of FSMs used in sequential circuit design. Their fundamental difference lies in how their outputs are generated.

| Feature          | Moore Machine                                | Mealy Machine                               |
| :--------------- | :------------------------------------------- | :------------------------------------------ |
| **Output Dependency** | Solely on the current state.                 | On current state AND current input.         |
| **Output Location** | Associated with states (inside state circles). | Associated with transitions (on transition arrows). |
| **Output Reaction**| Output changes only when the state changes.  | Output can change as soon as input changes. |
| **Number of States** | May require more states for the same functionality. | May require fewer states for the same functionality. |
| **Circuit Complexity** | Generally simpler output logic, but potentially more states. | Potentially more complex output logic, but potentially fewer states. |
| **Output Delay** | Output is synchronized with the clock.       | Output can have a delay related to input changes and combinational logic. |

**When to use:**
*   **Moore:** Preferred when the output should be stable and not change immediately with input variations, or when the output is inherently state-dependent (e.g., indicating a specific condition like "ready" or "error").
*   **Mealy:** Useful for generating faster responses to inputs or when the output's immediate reaction to input is desired.

**Referenced in:**
*   Givone, "Digital Principles & Design" (Chapter 5: Sequential Networks)
*   Wakerly, "Digital Design: Principles and Practices" (Chapter 5: Sequential Logic)
*   Mano & Ciletti, "Digital Design: With an Introduction to the Verilog HDL, VHDL, and SystemVerilog" (Chapter 7: Sequential Logic Design)
*   Yarbrough, "Digital Logic Applications and Design" (Chapter 6: Sequential Logic)

## 6. Application of Moore Machines

Moore machines are used in various digital systems where the output's behavior is strictly tied to the system's current condition rather than transient input signals.

*   **Sequence Detectors:** To detect a specific sequence of input bits where the output should indicate detection only after the entire sequence is recognized (i.e., when the machine is in a state representing the completion of the sequence).
*   **Control Units:** In processors or digital controllers, to generate control signals that remain active for a specific duration or until a new state is reached.
*   **Traffic Light Controllers:** The state of the traffic light (e.g., Red, Yellow, Green) dictates the output (lights on), and the transitions are based on timers and sensors (inputs).
*   **Vending Machines:** States might represent "waiting for coin," "coin inserted," "item selected," etc., with outputs corresponding to dispensing items or returning change.

**Aligned with CO1:** "Design, analyze, and model clocked synchronous sequential networks (CSSNs), optimize state assignment and reduction, and effectively utilize ASM charts for the realization of complex digital systems." The design steps for Moore machines directly contribute to this CO.

## 7. Example Design: A Simple Sequence Detector (Moore Machine)

**Problem:** Design a Moore machine that detects the sequence "101". The output should be '1' when the sequence "101" has been detected, and '0' otherwise.

### Step 1: Understand the Problem and Define States
*   **Inputs:** Single input X.
*   **Outputs:** Single output Y.
*   **Desired Behavior:** Output Y=1 if the input sequence "101" is received. Otherwise, Y=0.
*   **States:** We need to track how much of the "101" sequence has been received.
    *   State S0: Initial state, no part of the sequence received yet.
    *   State S1: Last input was '1' (potential start of "101").
    *   State S2: Last two inputs were "10" (second part of "101").
    *   State S3: Sequence "101" detected.

### Step 2: Create a State Diagram
*   **S0 (Initial):**
    *   If X=0, stay in S0 (output 0).
    *   If X=1, go to S1 (output 0).
*   **S1 (Received '1'):**
    *   If X=0, go to S2 (output 0).
    *   If X=1, stay in S1 (last input was '1', potential restart). (output 0).
*   **S2 (Received '10'):**
    *   If X=0, go to S0 (sequence broken, start over). (output 0).
    *   If X=1, go to S3 (sequence "101" detected). (output 1).
*   **S3 (Sequence "101" detected):**
    *   If X=0, go to S2 (last input was '0', potential start of new "10"). (output 0).
    *   If X=1, go to S1 (last input was '1', potential start of new "1"). (output 0).

**State Diagram:**

```
     +-----+
     | S0  |
     | Y=0 |
     +-----+
      ^   | X=0
      |   |
  X=1 /   \ X=0
     /     \
    +-----+ v
    | S1  |
    | Y=0 |
    +-----+
     ^   | X=0
     |   |
 X=1 /   \ X=0
    /     \
   +-----+ v
   | S2  |
   | Y=0 |
   +-----+
    ^   | X=0
    |   |
X=1 /   \ X=0
   /     \
  +-----+ v
  | S3  |
  | Y=1 |
  +-----+
```

### Step 3: Create a State Table

| Current State | Input (X) | Next State | Output (Y) |
| :------------ | :-------- | :--------- | :--------- |
| S0            | 0         | S0         | 0          |
| S0            | 1         | S1         | 0          |
| S1            | 0         | S2         | 0          |
| S1            | 1         | S1         | 0          |
| S2            | 0         | S0         | 0          |
| S2            | 1         | S3         | 1          |
| S3            | 0         | S2         | 0          |
| S3            | 1         | S1         | 0          |

### Step 4: State Minimization
In this case, all states are distinct and necessary, so no minimization is needed.

### Step 5: State Assignment
We have 4 states (S0, S1, S2, S3). We need $m$ flip-flops such that $2^m \ge 4$. So, $m=2$.
Let's assign binary codes:
*   S0 = 00
*   S1 = 01
*   S2 = 10
*   S3 = 11

We will use D flip-flops. Let the state variables be $Q_1$ and $Q_0$.
*   Current State $(Q_1 Q_0)$
*   Input $X$
*   Next State $(Q'_1 Q'_0)$
*   Output $Y$

**Revised State Table with Assignments:**

| Current State ($Q_1 Q_0$) | Input ($X$) | Next State ($Q'_1 Q'_0$) | Output ($Y$) |
| :------------------------ | :---------- | :----------------------- | :----------- |
| 00 (S0)                   | 0           | 00                       | 0            |
| 00 (S0)                   | 1           | 01                       | 0            |
| 01 (S1)                   | 0           | 10                       | 0            |
| 01 (S1)                   | 1           | 01                       | 0            |
| 10 (S2)                   | 0           | 00                       | 0            |
| 10 (S2)                   | 1           | 11                       | 1            |
| 11 (S3)                   | 0           | 10                       | 0            |
| 11 (S3)                   | 1           | 01                       | 0            |

### Step 6: Implement the Logic

We need to derive the equations for the D inputs of the flip-flops ($D_1, D_0$) and the output ($Y$).

**K-maps for $D_1$:**
Inputs: $Q_1, Q_0, X$. Output: $D_1$.

| $Q_0 \backslash Q_1 X$ | 00 | 01 | 11 | 10 |
| :--------------------- | :- | :- | :- | :- |
| 0                      | 0  | 0  | 0  | 0  |
| 1                      | 1  | 1  | 0  | 0  |

From the K-map: $D_1 = Q_1' Q_0 X$

**K-maps for $D_0$:**
Inputs: $Q_1, Q_0, X$. Output: $D_0$.

| $Q_0 \backslash Q_1 X$ | 00 | 01 | 11 | 10 |
| :--------------------- | :- | :- | :- | :- |
| 0                      | 0  | 1  | 0  | 0  |
| 1                      | 0  | 1  | 0  | 1  |

From the K-map: $D_0 = Q_1' Q_0' X + Q_1' Q_0 X + Q_1 Q_0' X$
This can be simplified using XOR properties or by observation:
$D_0 = Q_1' X (Q_0' + Q_0) + Q_1 Q_0' X = Q_1' X (1) + Q_1 Q_0' X = Q_1' X + Q_1 Q_0' X$
Further simplification: $D_0 = X (Q_1' + Q_1 Q_0')$
Using absorption law: $Q_1' + Q_1 Q_0' = (Q_1' + Q_1)(Q_1' + Q_0') = 1 \cdot (Q_1' + Q_0') = Q_1' + Q_0'$
So, $D_0 = X (Q_1' + Q_0')$

**K-maps for $Y$:**
Inputs: $Q_1, Q_0$. Output: $Y$. (Note: Output is independent of $X$ in Moore machine).

| $Q_0 \backslash Q_1$ | 0 | 1 |
| :------------------- | :- | :- |
| 0                    | 0  | 0  |
| 1                    | 0  | 1  |

From the K-map: $Y = Q_1 Q_0$

**Final Logic Equations:**
*   $D_1 = Q_1' Q_0 X$
*   $D_0 = X (Q_1' + Q_0')$
*   $Y = Q_1 Q_0$

**Circuit Implementation:**
This would involve two D flip-flops (one for $Q_1$, one for $Q_0$) and combinational logic to generate $D_1$, $D_0$, and $Y$ based on the inputs $X$ and the flip-flop outputs $Q_1, Q_0$.

## 8. Important Points to Remember

*   **Moore machines are state-output deterministic:** The output is exclusively determined by the current state.
*   **Output stability:** Outputs in Moore machines are typically more stable as they only change when the state changes, not instantaneously with input changes.
*   **State representation:** Each state must have a defined output value.
*   **Design flow:** Follow the systematic steps from problem definition to logic implementation.
*   **State assignment impact:** Careful state assignment can lead to simpler logic.
*   **Moore vs. Mealy:** Understand the trade-offs in terms of states, output reaction, and complexity.
*   **Clocked Synchronous:** All state changes are synchronized to the clock signal.

## 9. Practice Questions

**Question 1:**
A Moore machine has the following state table:

| Current State | Input (X) | Next State | Output (Y) |
| :------------ | :-------- | :--------- | :--------- |
| S0            | 0         | S1         | 0          |
| S0            | 1         | S0         | 0          |
| S1            | 0         | S1         | 1          |
| S1            | 1         | S2         | 1          |
| S2            | 0         | S0         | 0          |
| S2            | 1         | S1         | 0          |

Let S0 = 00, S1 = 01, S2 = 10 be the state assignments using D flip-flops $Q_1, Q_0$. Derive the Boolean expressions for $D_1, D_0$, and $Y$.

**Answer 1:**

**State Table with assignments:**

| $Q_1 Q_0$ | X | $Q'_1 Q'_0$ | Y |
| :-------- | :- | :---------- | :- |
| 00        | 0 | 01          | 0 |
| 00        | 1 | 00          | 0 |
| 01        | 0 | 01          | 1 |
| 01        | 1 | 10          | 1 |
| 10        | 0 | 00          | 0 |
| 10        | 1 | 01          | 0 |

**K-maps for $D_1$:**
Inputs: $Q_1, Q_0, X$. Output: $D_1$.

| $Q_0 \backslash Q_1 X$ | 00 | 01 | 10 | 11 |
| :--------------------- | :- | :- | :- | :- |
| 0                      | 0  | 0  | 0  | -  |
| 1                      | 1  | 1  | 0  | -  |

$D_1 = Q_1 Q_0'$

**K-maps for $D_0$:**
Inputs: $Q_1, Q_0, X$. Output: $D_0$.

| $Q_0 \backslash Q_1 X$ | 00 | 01 | 10 | 11 |
| :--------------------- | :- | :- | :- | :- |
| 0                      | 1  | 0  | 0  | -  |
| 1                      | 0  | 1  | 1  | -  |

$D_0 = Q_1' Q_0' X' + Q_1 Q_0 X' + Q_1 Q_0'$
$D_0 = Q_1' Q_0' X' + Q_1 X' (Q_0' + Q_0)$ No, this is wrong.
Let's re-evaluate $D_0$:
From the table:
$D_0$ is 1 for:
(00, 0) -> 01
(01, 1) -> 10
(10, 1) -> 01

| $Q_0 \backslash Q_1 X$ | 00 | 01 | 10 | 11 |
| :--------------------- | :- | :- | :- | :- |
| 0                      | 1  | 0  | 0  | -  |
| 1                      | 0  | 1  | 1  | -  |

$D_0 = Q_1' Q_0' X' + Q_1 Q_0 X' + Q_1 Q_0'$
This simplification seems incorrect. Let's expand based on state:
$D_0$:
S0 (00) X=0 -> 01 (D0 = 1)
S0 (00) X=1 -> 00 (D0 = 0)
S1 (01) X=0 -> 01 (D0 = 1)
S1 (01) X=1 -> 10 (D0 = 0)
S2 (10) X=0 -> 00 (D0 = 0)
S2 (10) X=1 -> 01 (D0 = 1)

| $Q_0 \backslash Q_1 X$ | 00 | 01 | 10 | 11 |
| :--------------------- | :- | :- | :- | :- |
| 0                      | 1  | 0  | 0  | -  |
| 1                      | 0  | 1  | 1  | -  |

$D_0 = Q_1' Q_0' X' + Q_1 Q_0 X' + Q_1 Q_0'$  Incorrect.
The K-map represents the minterms where $D_0$ is 1.
Minterms for $D_0$: $m_0 (Q_1'Q_0'X') + m_4 (Q_1Q_0X') + m_5 (Q_1Q_0')$
No, the table index is $(Q_1 Q_0 X)$.
$Q_1 Q_0 X$
000 -> $D_0=1$ (from 00->01)
001 -> $D_0=0$ (from 00->00)
010 -> $D_0=1$ (from 01->01)
011 -> $D_0=0$ (from 01->10)
100 -> $D_0=0$ (from 10->00)
101 -> $D_0=1$ (from 10->01)

Let's redo the K-map for $D_0$:

| $Q_0 \backslash Q_1 X$ | 00 | 01 | 10 | 11 |
| :--------------------- | :- | :- | :- | :- |
| 0                      | 1  | 0  | 0  | -  |  <- Corresponds to X=0 for Q1=0, X=0 for Q1=1, X=0 for Q1=1
| 1                      | 0  | 1  | 1  | -  |  <- Corresponds to X=0 for Q0=1, X=0 for Q0=1, X=0 for Q0=1. Incorrect map construction.

Let's map $Q_1 Q_0 X$ to the K-map cells correctly:
$Q_1$ on Y-axis, $Q_0 X$ on X-axis.

| $Q_1 \backslash Q_0 X$ | 00 | 01 | 11 | 10 |
| :--------------------- | :- | :- | :- | :- |
| 0                      | 1  | 0  | 0  | 0  |  (Q1=0, Q0=0, X=0 -> D0=1) (Q1=0, Q0=0, X=1 -> D0=0) (Q1=0, Q0=1, X=1 -> D0=0) (Q1=0, Q0=1, X=0 -> D0=1)
| 1                      | 0  | 1  | 0  | 0  |  (Q1=1, Q0=0, X=0 -> D0=0) (Q1=1, Q0=0, X=1 -> D0=1) (Q1=1, Q0=1, X=1 -> D0=0) (Q1=1, Q0=1, X=0 -> D0=0)

Correct K-map for $D_0$:

| $Q_1 \backslash Q_0 X$ | 00 | 01 | 11 | 10 |
| :--------------------- | :- | :- | :- | :- |
| 0                      | 1  | 0  | 0  | 1  |
| 1                      | 0  | 1  | 0  | 0  |

$D_0 = Q_1' Q_0' X' + Q_1 Q_0 X'$ No, this is not the expression.
$D_0 = Q_1' Q_0' X' + Q_1 Q_0 X$ No, this is incorrect.

Let's use the minterms where $D_0=1$:
000 ($Q_1' Q_0' X'$)
010 ($Q_1' Q_0 X'$)
101 ($Q_1 Q_0' X$)

The correct K-map expression for $D_0$ is:
$D_0 = Q_1' Q_0' X' + Q_1' Q_0 X' + Q_1 Q_0' X$
Group the first two terms: $Q_1' X' (Q_0' + Q_0) = Q_1' X'$
So, $D_0 = Q_1' X' + Q_1 Q_0' X$

**K-maps for Y:**
Y is output for each state:
S0 (00) -> Y=0
S1 (01) -> Y=1
S2 (10) -> Y=0

| $Q_1 \backslash Q_0$ | 0 | 1 |
| :------------------- | :- | :- |
| 0                    | 0  | 1  |
| 1                    | 0  | -  |

$Y = Q_1 Q_0'$  --- Wait, Y is 1 for S1 (01), so Y=Q1'Q0.

Correct K-map for Y:

| $Q_1 \backslash Q_0$ | 0 | 1 |
| :------------------- | :- | :- |
| 0                    | 0  | 1  |
| 1                    | 0  | -  |

$Y = Q_1' Q_0$

**Final Answer for Question 1:**
*   $D_1 = Q_1 Q_0'$
*   $D_0 = Q_1' X' + Q_1 Q_0' X$
*   $Y = Q_1' Q_0$

**Question 2:**
Distinguish between Moore and Mealy machines, providing one advantage and one disadvantage for each.

**Answer 2:**
*   **Moore Machine:**
    *   **Advantage:** Output is more stable, as it only changes when the state changes. This can simplify timing analysis and design.
    *   **Disadvantage:** May require more states than a Mealy machine for the same functionality, potentially leading to more flip-flops and a larger circuit.
*   **Mealy Machine:**
    *   **Advantage:** Can react to input changes faster, and may require fewer states than a Moore machine for the same functionality.
    *   **Disadvantage:** Output can be glitches or transient if the input changes, as the output depends on both state and input. This can make the output less predictable without careful design.

**Question 3:**
Design a Moore machine that outputs '1' if an even number of '1's have been received, and '0' if an odd number of '1's have been received. Assume the input sequence starts with an even count (zero '1's).

**Answer 3:**

**Step 1: States**
*   S0: Even number of 1s received (initial state). Output Y=0.
*   S1: Odd number of 1s received. Output Y=1.

**Step 2: State Diagram**
*   **S0 (Even 1s, Y=0):**
    *   If X=0, stay in S0 (still even count).
    *   If X=1, go to S1 (now odd count).
*   **S1 (Odd 1s, Y=1):**
    *   If X=0, stay in S1 (still odd count).
    *   If X=1, go to S0 (now even count).

**Step 3: State Table**

| Current State | Input (X) | Next State | Output (Y) |
| :------------ | :-------- | :--------- | :--------- |
| S0            | 0         | S0         | 0          |
| S0            | 1         | S1         | 0          |
| S1            | 0         | S1         | 1          |
| S1            | 1         | S0         | 1          |

**Step 5: State Assignment (D Flip-flops)**
*   S0 = 0 ($Q_0$)
*   S1 = 1 ($Q_0$)

**Revised State Table with Assignments:**

| $Q_0$ | X | $Q'_0$ | Y |
| :---- | :- | :----- | :- |
| 0     | 0 | 0      | 0 |
| 0     | 1 | 1      | 0 |
| 1     | 0 | 1      | 1 |
| 1     | 1 | 0      | 1 |

**Step 6: Logic Equations**
**K-map for $D_0$:**
| $Q_0 \backslash X$ | 0 | 1 |
| :----------------- | :- | :- |
| 0                  | 0  | 1  |
| 1                  | 1  | 0  |

$D_0 = Q_0' X + Q_0 X'$
This is the XOR function: $D_0 = Q_0 \oplus X$

**K-map for Y:**
| $Q_0 \backslash X$ | 0 | 1 |
| :----------------- | :- | :- |
| 0                  | 0  | 0  |
| 1                  | 1  | 1  |

$Y = Q_0$

**Final Logic Equations:**
*   $D_0 = Q_0 \oplus X$
*   $Y = Q_0$

This design is straightforward and correctly implements the parity checker using a Moore machine.

---
This concludes the study notes for Moore Machines in Digital Systems and VLSI Design. Remember to practice these concepts through design examples and by referring to the provided textbooks for a deeper understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
