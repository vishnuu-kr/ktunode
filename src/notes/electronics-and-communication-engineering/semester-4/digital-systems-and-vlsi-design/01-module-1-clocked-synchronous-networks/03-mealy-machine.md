---
title: "Mealy machine"
subject: "DIGITAL SYSTEMS AND VLSI DESIGN"
module: "Module 1: Clocked Synchronous Networks"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe748"
status: "completed"
scrapedAt: "2026-05-23T17:48:02.473Z"
---
# Digital Systems and VLSI Design - Module 1: Clocked Synchronous Networks

## Topic: Mealy Machine

### 1. Introduction to Sequential Networks

*   **Definition:** Sequential networks are digital circuits whose output depends not only on the current inputs but also on the past sequence of inputs. This "memory" of past inputs is stored in sequential elements (flip-flops).
*   **Types:**
    *   **Synchronous Sequential Networks (SSNs):** Operations are synchronized by a clock signal. The state of the network changes only at the active edge (rising or falling) of the clock.
    *   **Asynchronous Sequential Networks (ASNs):** Operations are not synchronized by a clock. State changes depend directly on input changes.
*   **Importance in VLSI:** SSNs are dominant in modern VLSI design due to their predictable behavior, simpler design, and easier testing.

### 2. Clocked Synchronous Sequential Networks (CSSNs)

*   **Key Components:**
    *   **Combinational Logic:** Generates the outputs and the next state based on current inputs and current state.
    *   **Sequential Elements (Flip-flops):** Store the current state of the network.
    *   **Clock Signal:** A periodic signal that synchronizes state transitions.
*   **State:** The internal memory of the sequential network, representing the history of inputs.
*   **State Transition:** The change from one state to another, triggered by the clock and input changes.
*   **Moore vs. Mealy Machines:** Both are models for sequential networks, differing in how outputs are generated.

### 3. Mealy Machine

This section focuses on the Mealy machine model, a type of synchronous sequential network.

#### 3.1. Definition and Characteristics

*   **Definition:** A Mealy machine is a finite state machine (FSM) where the **output is a function of both the current input and the current state.**
*   **Key Characteristic:** Outputs can change as soon as inputs change, even between clock edges, if they are not synchronized to the clock. This can lead to glitches in the output if the combinational logic has delays.
*   **Output Timing:** Outputs are considered **level-sensitive** to inputs and state.

#### 3.2. State Diagram and State Table Representation

*   **State Diagram:**
    *   A graphical representation of the FSM.
    *   **Nodes (Circles):** Represent states.
    *   **Edges (Arrows):** Represent transitions between states.
    *   **Edge Labels:** The label on an edge is in the format `input / output`. This signifies that when the specified `input` is present and the machine is in the source state of the edge, the machine transitions to the destination state and produces the specified `output`.

    *   **Example:** Consider a simple Mealy machine that detects the sequence "10".
        *   States: S0 (initial), S1 (seen '1'), S2 (seen '10')
        *   Inputs: A
        *   Outputs: Y
        *   Transitions:
            *   S0, input 0 -> S0, output 0
            *   S0, input 1 -> S1, output 0
            *   S1, input 0 -> S2, output 1 (sequence detected)
            *   S1, input 1 -> S1, output 0
            *   S2, input 0 -> S0, output 0
            *   S2, input 1 -> S1, output 0

        *   **State Diagram Illustration:**
            ```
                  +-------+
                  |       |
                  |  S0   |
                  |       |
                  +-------+
                 /|\     /|\
                  | 0/0   | 1/0
                  |       |
           +------+-------+------+
           |      |       |      |
           |      |       |      |
           |    +---+     |    +---+
           |    | S1|     |    | S2|
           |    +---+     |    +---+
           |      |       |      |
           |      | 1/0   |      | 0/1  <-- Output 1 when '10' sequence is detected
           |      |       |      |
           +------|-------+------|
                  | 0/0          | 1/0
                  +--------------+
            ```

*   **State Table:**
    *   A tabular representation of the FSM.
    *   **Columns:** Current State, Input, Next State, Output.
    *   **Rows:** Each row represents a specific combination of current state and input.

    *   **State Table for the "10" Detector Example:**

    | Current State | Input (A) | Next State | Output (Y) |
    | :------------ | :-------- | :--------- | :--------- |
    | S0            | 0         | S0         | 0          |
    | S0            | 1         | S1         | 0          |
    | S1            | 0         | S2         | 1          |
    | S1            | 1         | S1         | 0          |
    | S2            | 0         | S0         | 0          |
    | S2            | 1         | S1         | 0          |

#### 3.3. Mealy Machine Implementation

*   **Components:**
    *   **Flip-flops:** To store the current state. The number of flip-flops is determined by the number of states ($\lceil \log_2(\text{Number of States}) \rceil$).
    *   **Combinational Logic:** Two sets of combinational logic:
        1.  **Next-State Logic:** Determines the next state based on the current state and inputs.
        2.  **Output Logic:** Determines the output based on the current state and inputs.

*   **Block Diagram:**

    ```
    +-----------------+
    |                 |
    |  Combinational  |--------> Output(s)
    |      Logic      |
    | (Next State &   |--------> D-inputs for Flip-flops
    |   Output Logic) |
    |                 |
    +--------+--------+
             ^
             | Clock
             |
    +--------+--------+
    |                 |
    |  Flip-flops     |--------> Current State (Q)
    |  (State Memory) |
    |                 |
    +-----------------+
      ^       ^
      |       |
      +-------+
      Current Inputs
    ```

*   **Design Steps:**
    1.  **Understand the problem:** Clearly define the inputs, outputs, and the desired behavior.
    2.  **Create a state diagram:** Graphically represent all possible states and transitions based on inputs and outputs.
    3.  **Create a state table:** Tabulate the information from the state diagram.
    4.  **Assign binary state codes:** Assign unique binary codes to each state.
    5.  **Determine flip-flop inputs (D, J-K, etc.):** Based on the state table and the type of flip-flops used. This involves creating excitation tables.
    6.  **Determine output expressions:** Based on the state table and the type of machine (Mealy or Moore). For Mealy, outputs depend on current state and current inputs.
    7.  **Minimize the state table/equations (optional but recommended):** Using techniques like Karnaugh maps or Quine-McCluskey algorithm to reduce the complexity.
    8.  **Implement the circuit:** Using logic gates and flip-flops.

#### 3.4. Comparison with Moore Machine

| Feature        | Mealy Machine                                   | Moore Machine                                 |
| :------------- | :---------------------------------------------- | :-------------------------------------------- |
| **Output Dependency** | Current Input and Current State                 | Current State only                            |
| **Output Timing**   | Can change immediately upon input change        | Changes only on the clock edge                |
| **State Diagram** | Output on edges (`input / output`)              | Output in states (inside the node)            |
| **State Table**   | Output column depends on Input and State        | Output column depends on State only           |
| **Number of States** | Often requires fewer states for the same function | May require more states for the same function |
| **Response Time** | Faster response to inputs                       | Slower response to inputs (output lags state) |
| **Sensitivity to Glitches** | More sensitive to input glitches                | Less sensitive to input glitches              |
| **Circuit Complexity** | Can sometimes be simpler (fewer flip-flops)     | Can be more complex (more logic for outputs)  |

*   **Example:** A traffic light controller.
    *   A **Mealy machine** approach might change the light color immediately when a car is detected (input) and the current state is "green for main road."
    *   A **Moore machine** approach would only change the light color at the next clock edge after the car is detected, ensuring the output (light color) is stable until the clock edge.

#### 3.5. Advantages and Disadvantages of Mealy Machines

*   **Advantages:**
    *   **Fewer States:** Often requires fewer states than a Moore machine for the same functionality, leading to potentially fewer flip-flops and simpler state assignment.
    *   **Faster Response:** Outputs can react immediately to input changes, which can be beneficial in some applications.
    *   **Simpler Output Logic:** In some cases, the output logic can be simpler as it directly incorporates input signals.

*   **Disadvantages:**
    *   **Output Glitches:** Outputs are sensitive to the delays in the combinational logic. If the input changes, the output can flicker or glitch before settling, especially if there are multiple paths for the output to change. This makes Mealy machines more susceptible to timing issues and harder to test for reliable output.
    *   **Synchronization Issues:** Outputs are not synchronized to the clock edge, which can lead to timing problems if the output is used to control other clocked components.
    *   **Testing Complexity:** Testing can be more complex due to the dependency on both state and input, and the potential for glitches. (Reference: Breuer, Abramovici, Friedman - *Digital Systems Testing and Testable Design*).

### 4. Design Example: Sequence Detector (101) - Mealy Machine

Let's design a Mealy machine that detects the sequence "101".

#### 4.1. State Definition

*   **S0:** Initial state, no part of the sequence detected yet.
*   **S1:** Detected the first '1' of the sequence.
*   **S2:** Detected the sequence "10".

#### 4.2. State Diagram

```
        +-------+
        |       |
        |  S0   |
        |       |
        +-------+
       /|\     /|\
        | 0/0   | 1/0
        |       |
 +------+-------+------+
 |      |       |      |
 |      |       |      |
 |    +---+     |    +---+
 |    | S1|     |    | S2|
 |    +---+     |    +---+
 |      |       |      |
 |      | 0/1   |      | 1/1  <-- Sequence '101' detected
 |      |       |      |
 +------|-------+------|
        | 1/0          | 0/0
        +--------------+
```

#### 4.3. State Table

| Current State | Input (X) | Next State | Output (Y) |
| :------------ | :-------- | :--------- | :--------- |
| S0            | 0         | S0         | 0          |
| S0            | 1         | S1         | 0          |
| S1            | 0         | S2         | 0          |
| S1            | 1         | S1         | 0          |
| S2            | 0         | S0         | 0          |
| S2            | 1         | S3         | 1          |  *Correction: S2, input 1 should go to S3 or a state indicating '101' is detected. Let's redefine states slightly to make it cleaner for sequence detection.*

Let's refine the states for clarity, especially for sequences with overlapping patterns.

**Revised States for "101" Detector:**
*   **S0:** Initial state.
*   **S1:** Last input was '1'.
*   **S2:** Last inputs were '10'.

**Revised State Diagram:**

```
        +-------+
        |       |
        |  S0   |
        |       |
        +-------+
       /|\     /|\
        | 0/0   | 1/0
        |       |
 +------+-------+------+
 |      |       |      |
 |      |       |      |
 |    +---+     |    +---+
 |    | S1|     |    | S2|
 |    +---+     |    +---+
 |      |       |      |
 |      | 0/0   |      | 1/1  <-- Sequence '101' detected
 |      |       |      |
 +------|-------+------|
        | 1/0          | 0/0
        +--------------+
```
*This diagram seems correct for detecting "101" where the '1' in "101" is the last detected input.*

**Revised State Table:**

| Current State | Input (X) | Next State | Output (Y) |
| :------------ | :-------- | :--------- | :--------- |
| S0            | 0         | S0         | 0          |
| S0            | 1         | S1         | 0          |
| S1            | 0         | S2         | 0          |
| S1            | 1         | S1         | 0          |
| S2            | 0         | S0         | 0          |
| S2            | 1         | S1         | 1          |

#### 4.4. State Assignment

We need 2 flip-flops for 3 states ($2^2 = 4 \ge 3$).
Let:
*   S0 = 00
*   S1 = 01
*   S2 = 10

#### 4.5. Transition Table

| Current State (Q1 Q0) | Input (X) | Next State (Q1+ Q0+) | Output (Y) |
| :-------------------- | :-------- | :------------------- | :--------- |
| 00                    | 0         | 00                   | 0          |
| 00                    | 1         | 01                   | 0          |
| 01                    | 0         | 10                   | 0          |
| 01                    | 1         | 01                   | 0          |
| 10                    | 0         | 00                   | 0          |
| 10                    | 1         | 01                   | 1          |

#### 4.6. Deriving Logic Equations (using Karnaugh Maps or Boolean Algebra)

Let the state variables be $Q_1$ and $Q_0$, and the input be $X$. The output is $Y$.

**Output Equation (Y):**
$Y$ is 1 only when Current State is S2 (10) and Input is 1.
$Y = Q_1 \cdot Q_0' \cdot X$

**Next State Equations ($Q_1^+, Q_0^+$):**

For $Q_1^+$:
| $Q_1 Q_0$ | $X=0$ | $X=1$ |
| :-------- | :---- | :---- |
| 00        | 0     | 0     |
| 01        | 1     | 0     |
| 10        | 0     | 0     |
| 11 (NC)   | -     | -     |

$Q_1^+ = Q_0 \cdot X'$

For $Q_0^+$:
| $Q_1 Q_0$ | $X=0$ | $X=1$ |
| :-------- | :---- | :---- |
| 00        | 0     | 1     |
| 01        | 0     | 1     |
| 10        | 0     | 1     |
| 11 (NC)   | -     | -     |

$Q_0^+ = X$

**Summary of Logic Equations:**
*   $Y = Q_1 \cdot Q_0' \cdot X$
*   $Q_1^+ = Q_0 \cdot X'$ (This will be the input to the $Q_1$ flip-flop, i.e., $D_1$)
*   $Q_0^+ = X$ (This will be the input to the $Q_0$ flip-flop, i.e., $D_0$)

#### 4.7. Implementation

The circuit would consist of two flip-flops (e.g., D flip-flops) for $Q_1$ and $Q_0$, and combinational logic for the $D$ inputs and the output $Y$.

*   $D_1 = Q_0 \cdot X'$
*   $D_0 = X$
*   $Y = Q_1 \cdot Q_0' \cdot X$

### 5. Key Concepts and Definitions Recap

*   **Mealy Machine:** Output depends on current state AND current input.
*   **State Diagram:** Nodes = States, Edges = Transitions (input/output).
*   **State Table:** Tabular representation of transitions and outputs.
*   **Sequential Elements:** Flip-flops store the state.
*   **Combinational Logic:** Generates next state and outputs.
*   **Glitches:** Temporary, unwanted changes in output voltage due to propagation delays. Mealy machines are more prone to these.
*   **Synchronous Design:** Operations synchronized by a clock.

### 6. Important Points to Remember

*   The primary distinction between Mealy and Moore machines is the **dependency of the output**. Mealy: state + input; Moore: state only.
*   Mealy machines can have **faster output responses** but are more susceptible to **input glitches** and timing issues.
*   When designing, carefully consider whether the output needs to be synchronous to the clock (favors Moore) or can react immediately to inputs (Mealy).
*   State reduction and state assignment are crucial steps for efficient implementation (CO1).
*   Understanding the behavior of sequential circuits is fundamental for both synchronous and asynchronous designs (CO1, CO2).

### 7. Practice Questions and Exercises

**Question 1:**
A Mealy machine has the following state table.
| Current State | Input (X) | Next State | Output (Y) |
| :------------ | :-------- | :--------- | :--------- |
| S0            | 0         | S0         | 0          |
| S0            | 1         | S1         | 0          |
| S1            | 0         | S1         | 1          |
| S1            | 1         | S0         | 0          |

*   (a) Draw the state diagram for this Mealy machine.
*   (b) If the input sequence is `011010`, what is the output sequence?
*   (c) Assign binary states (S0=0, S1=1) and derive the Boolean expressions for the next state ($D$) and the output ($Y$).

**Answer 1:**

*   (a) **State Diagram:**
    ```
          +-------+
          |       |
          |  S0   |
          |       |
          +-------+
         /|\     /|\
          | 0/0   | 1/0
          |       |
          +-------+
            ^     |
            |     | 1/0
            | 0/1 |
            |     |
          +-------+
          |       |
          |  S1   |
          |       |
          +-------+
    ```

*   (b) **Output Sequence:**
    Input:  `0 1 1 0 1 0`
    States: `S0 S1 S1 S0 S1 S0` (assuming starting at S0)
    Output: `0 0 1 0 0 0`

*   (c) **Binary State Assignment:** S0 = 0, S1 = 1. Let $Q$ be the state variable and $X$ be the input.
    *   **Transition Table:**
        | Current State (Q) | Input (X) | Next State (Q+) | Output (Y) |
        | :---------------- | :-------- | :-------------- | :--------- |
        | 0                 | 0         | 0               | 0          |
        | 0                 | 1         | 1               | 0          |
        | 1                 | 0         | 1               | 1          |
        | 1                 | 1         | 0               | 0          |

    *   **Boolean Expressions:**
        *   **Output (Y):** $Y$ is 1 when $Q=1$ and $X=0$.
            $Y = Q \cdot X'$
        *   **Next State ($Q^+$) (which is $D$ for a D flip-flop):**
            From the table:
            $D = (Q' \cdot X) + (Q \cdot X')$
            This is the XOR function: $D = Q \oplus X$

**Question 2:**
Explain why Mealy machines are more prone to output glitches than Moore machines. Refer to concepts of combinational logic delay and signal propagation.

**Answer 2:**
In a Mealy machine, the output is a function of both the current state and the current input. The combinational logic that generates the output receives the current input signal directly. If the input signal changes, and there are different propagation delays through the combinational logic paths that affect the output, the output can momentarily take on an incorrect value (a glitch) before settling to its final correct value. This is because the input change propagates through the combinational logic and affects the output before the next clock edge arrives (or even after, if the output is not strictly tied to state changes).

In contrast, a Moore machine's output depends only on the current state. The state is stored in flip-flops, which change their output only on the active clock edge. Therefore, the output of a Moore machine is only updated at the clock edge, and any glitches in the combinational logic that determines the *next* state do not affect the *current* output until the state transition occurs at the next clock edge. This makes Moore machine outputs more stable and less susceptible to glitches caused by input changes between clock edges. (Referenced from Givone, Wakerly, Yarbrough on digital logic design principles).

---

This concludes the study notes for the Mealy Machine topic. Ensure you practice designing and analyzing Mealy machines to solidify your understanding for CO1.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
