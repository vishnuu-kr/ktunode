---
title: "Finite State Machines :-"
subject: "DIGITAL ELECTRONICS AND LOGIC DESIGN"
module: "Module 4: Sequential Logic Design  :"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ad61"
status: "completed"
scrapedAt: "2026-05-20T16:24:01.150Z"
---
## DIGITAL ELECTRONICS AND LOGIC DESIGN - Module 4: Sequential Logic Design - Finite State Machines

**Learning Outcomes:**

*   Understand the concept of a Finite State Machine (FSM).
*   Distinguish between Moore and Mealy FSM models.
*   Design FSMs using state diagrams and state tables.
*   Implement FSMs using flip-flops and logic gates.
*   Minimize the number of states in an FSM.
*   Analyze and understand the behavior of existing FSM circuits.

**1. Introduction to Finite State Machines (FSMs)**

*   **Definition:** A Finite State Machine (FSM) is a mathematical model of computation used to design digital systems. It's a type of sequential circuit whose output depends not only on the current input but also on the past sequence of inputs (i.e., the state of the machine).
*   **Key Characteristics:**
    *   **Finite Number of States:** The machine can only be in one of a finite number of distinct states at any given time.
    *   **Transitions:**  The machine transitions between states based on input signals.
    *   **Outputs:** The machine produces outputs based on its current state and/or the input.
*   **Applications:** Widely used in various digital systems, including:
    *   Controllers (e.g., vending machines, traffic lights)
    *   Digital circuits (e.g., counters, shift registers, sequence detectors)
    *   Communication protocols
    *   Software engineering (modeling system behavior)
*   **Formal Definition:** An FSM can be formally defined as a 5-tuple:
    *   `M = (Q, Σ, δ, q0, F)` where:
        *   `Q` is a finite set of states.
        *   `Σ` is a finite set of input symbols (the input alphabet).
        *   `δ : Q x Σ → Q` is the state transition function (determines the next state based on the current state and input).
        *   `q0` is the initial state (the state the machine starts in).
        *   `F` is a set of accepting states (optional, used for recognizing patterns).

**2. Types of Finite State Machines: Moore and Mealy**

*   **Moore Machine:**
    *   **Output Dependency:** The output of a Moore machine depends *only* on the *current state*. The input does not directly affect the output.
    *   **Characteristics:** Easier to design and understand because the output is stable during the entire state duration.
    *   **Diagram Representation:** Outputs are typically associated with the states themselves.
    *   **Equation:** `Output = f(Current State)`
*   **Mealy Machine:**
    *   **Output Dependency:** The output of a Mealy machine depends on *both* the *current state* and the *current input*.
    *   **Characteristics:** Can be more complex to design but can often achieve the same functionality with fewer states than a Moore machine.  The output can change asynchronously with the clock edge, making it susceptible to glitches if not properly designed.
    *   **Diagram Representation:** Outputs are typically associated with the transitions between states.
    *   **Equation:** `Output = f(Current State, Input)`
*   **Comparison:**

    | Feature          | Moore Machine                                  | Mealy Machine                                      |
    |------------------|-------------------------------------------------|----------------------------------------------------|
    | Output Dependency| Current State Only                            | Current State AND Input                              |
    | Complexity       | Generally simpler to design and understand      | Can be more complex but potentially fewer states  |
    | Output Changes   | Synchronous with state changes (stable)      | Can change asynchronously with the input           |
    | Glitches        | Less susceptible to glitches                  | More susceptible to glitches                          |
    | States           | Typically requires more states                 | Can potentially use fewer states                    |

**3. FSM Design Process**

*   **Steps:**

    1.  **Problem Definition:**  Understand the desired behavior of the FSM.  Clearly define the inputs, outputs, and the required sequence of operations.
    2.  **State Diagram Construction:**
        *   Represent each state as a circle.
        *   Label each state with a descriptive name (e.g., S0, S1, Idle, Active).
        *   Draw directed arrows (transitions) between states.
        *   Label each transition with the input condition that causes the transition.
        *   For Mealy machines, also label each transition with the output produced during that transition. For Moore machines, label the state circle with the output produced while in that state.
    3.  **State Table Creation:**
        *   A state table is a tabular representation of the state diagram.
        *   It lists all possible states, the inputs, the next state for each state/input combination, and the output for each state/input combination.
        *   Columns: Current State, Input, Next State, Output (for Mealy) or Current State, Next State, Output (for Moore)
    4.  **State Assignment (State Encoding):**
        *   Assign a unique binary code to each state.  The number of flip-flops required is determined by the number of states: `n = ceil(log2(number of states))`.
        *   Consider different state assignment strategies (e.g., binary, Gray code, one-hot) to minimize the complexity of the logic equations.
        *   **Binary Encoding:** Assigns a sequential binary code to each state.
        *   **Gray Code Encoding:** Assigns codes that differ by only one bit between adjacent states. Can reduce switching activity.
        *   **One-Hot Encoding:** Uses one flip-flop per state.  Only one flip-flop is active (set to 1) at any given time.  Generally requires more flip-flops but can simplify the output logic.
    5.  **Flip-Flop Selection:** Choose appropriate flip-flop types (D, JK, T, SR) based on the desired functionality and the state transition table. D flip-flops are often preferred for simplicity.
    6.  **Excitation Table Development:** Based on the chosen flip-flop type and the state transition table, create an excitation table.  The excitation table specifies the required flip-flop inputs to achieve the desired state transitions.
    7.  **K-Map Simplification (Optional):** Use Karnaugh maps (K-maps) or other logic minimization techniques to simplify the Boolean expressions for the flip-flop inputs and the outputs.
    8.  **Logic Circuit Implementation:** Design the logic circuit using the simplified Boolean expressions, flip-flops, and logic gates (AND, OR, NOT, XOR, etc.).
    9.  **Verification:** Thoroughly test the implemented circuit to ensure it meets the specified requirements.

**4. State Minimization**

*   **Goal:** Reduce the number of states in the FSM without changing its functionality. This simplifies the circuit implementation and potentially reduces cost.
*   **Techniques:**

    *   **Implication Table Method:**  A systematic method to find and merge equivalent states.
        1.  Construct a table with each cell representing a pair of states.
        2.  Mark cells representing pairs of states that have different outputs as *distinguishable*.
        3.  For unmarked cells, examine the next states for each possible input. If the next states for any input are distinguishable (marked in the table), then mark the original cell as distinguishable.
        4.  Repeat step 3 until no more cells are marked.
        5.  Any remaining unmarked cells represent equivalent states.  These states can be merged.
*   **Equivalent States:** Two states are equivalent if, for every possible input sequence, they produce the same output sequence.

**5. Examples**

*   **Example 1: Sequence Detector (Mealy Machine)**

    *   **Problem:** Design a Mealy FSM to detect the sequence "101". The output should be 1 when the sequence is detected, and 0 otherwise. Overlapping sequences are allowed (e.g., 10101 should produce an output of 1 for both "101" sequences).

    *   **State Diagram:**

        ```
        +-------+    1    +-------+    0    +-------+    1    +-------+
        |  S0   |------->|  S1   |------->|  S2   |------->|  S3   |
        | (0)   |        | (0)   |        | (0)   |        | (1)   |
        +-------+ <-------+-------+ <-------+-------+ <-------+-------+
                0        0        1        0
                |________|________|________|
        ```

        *   S0: Initial state (no part of the sequence detected)
        *   S1: "1" has been detected
        *   S2: "10" has been detected
        *   S3: "101" has been detected (output 1)

    *   **State Table:**

        | Current State | Input | Next State | Output |
        |---------------|-------|------------|--------|
        | S0            | 0     | S0         | 0      |
        | S0            | 1     | S1         | 0      |
        | S1            | 0     | S2         | 0      |
        | S1            | 1     | S1         | 0      |
        | S2            | 0     | S0         | 0      |
        | S2            | 1     | S3         | 0      |
        | S3            | 0     | S2         | 0      |
        | S3            | 1     | S1         | 1      |

*   **Example 2: Traffic Light Controller (Moore Machine)**

    *   **Problem:** Design a Moore FSM for a simple traffic light controller that cycles through Green, Yellow, and Red lights.  Assume a clock signal is available for timing.

    *   **States:**

        *   Green: Traffic light is green
        *   Yellow: Traffic light is yellow
        *   Red: Traffic light is red

    *   **State Diagram:**

        ```
        +-------+       +-------+       +-------+
        | Green |------>| Yellow|------>| Red   |------>|Green|
        | (G)   |       | (Y)   |       | (R)   |       |  G  |
        +-------+       +-------+       +-------+
        ```

        The transitions occur on the clock signal.  We can add an "extend" input where the light stays the same.
    *   **State Table:**

        | Current State | Next State | Output |
        |---------------|------------|--------|
        | Green         | Yellow     | G      |
        | Yellow        | Red        | Y      |
        | Red           | Green      | R      |

**6. Important Points to Remember**

*   **Moore vs. Mealy:** Choose the appropriate model based on the application requirements. Moore machines are simpler but may require more states. Mealy machines can be more efficient but can introduce glitches.
*   **State Assignment:** The choice of state assignment can significantly impact the complexity of the logic circuit.
*   **State Minimization:** Always try to minimize the number of states to reduce the complexity and cost of the circuit.
*   **Thorough Verification:**  Simulate and test the designed FSM extensively to ensure it meets all specifications.
*   **Handling Unspecified Conditions (Don't Cares):**  Carefully handle any unspecified state transitions or output conditions (using "don't cares" in K-maps) to minimize the logic.
*   **Clock Signals are Crucial:** All state changes in synchronous FSMs are triggered by the clock signal.

**7. Practice Questions and Exercises**

1.  **Convert a Moore machine to an equivalent Mealy machine:**  Given a Moore machine, describe the steps to create a Mealy machine that performs the same function.

    *   **Answer:**  For each state in the Moore machine, examine the output associated with that state. For each transition *into* that state, copy the output of the destination state to that transition in the new Mealy machine.

2.  **Design a Mealy FSM to detect the sequence "110":** Create the state diagram and state table for a Mealy FSM that outputs 1 when the sequence "110" is detected, and 0 otherwise.

    *   **Answer:**

    *   **State Diagram:**

        ```
        +-------+    1    +-------+    1    +-------+    0    +-------+
        |  S0   |------->|  S1   |------->|  S2   |------->|  S3   |
        | (0)   |        | (0)   |        | (0)   |        | (1)   |
        +-------+ <-------+-------+ <-------+-------+ <-------+-------+
                0        0        1        1
                |________|________|________|
        ```

        *   S0: Initial state (no part of the sequence detected)
        *   S1: "1" has been detected
        *   S2: "11" has been detected
        *   S3: "110" has been detected (output 1)

    *   **State Table:**

        | Current State | Input | Next State | Output |
        |---------------|-------|------------|--------|
        | S0            | 0     | S0         | 0      |
        | S0            | 1     | S1         | 0      |
        | S1            | 0     | S0         | 0      |
        | S1            | 1     | S2         | 0      |
        | S2            | 0     | S3         | 1      |
        | S2            | 1     | S2         | 0      |
        | S3            | 0     | S0         | 0      |
        | S3            | 1     | S1         | 0      |

3.  **Explain the significance of state assignment in FSM design:** Why is choosing an appropriate state assignment important?

    *   **Answer:** State assignment significantly impacts the complexity of the resulting logic equations for the flip-flop inputs and outputs. A poorly chosen state assignment can lead to complex equations that require more logic gates, increasing the cost and complexity of the circuit.  Appropriate assignment (like Grey code or One-Hot) can help reduce the overall gate count and simplify the circuit.

4.  **What are the limitations of FSMs?**

    *   **Answer:** FSMs have a finite memory capacity. They are suitable for controlling systems with a limited number of states but cannot handle arbitrarily complex sequences or calculations that require unbounded memory.  Pushdown automata and Turing machines provide more computational power at the expense of complexity.

5.  **Minimize the following state table:**

    | Current State | Input (X=0) | Input (X=1) | Output |
    |---|---|---|---|
    | A | B | C | 0 |
    | B | D | E | 0 |
    | C | F | G | 0 |
    | D | B | C | 0 |
    | E | F | G | 1 |
    | F | H | I | 0 |
    | G | H | I | 1 |
    | H | D | E | 0 |
    | I | D | E | 0 |

    *   **Answer:** Using the implication table method, the following states are equivalent:
        *   A and D
        *   F and I
        *   B and H
        *   E and G

        Minimized State Table:

        | Current State | Input (X=0) | Input (X=1) | Output |
        |---|---|---|---|
        | A | B | C | 0 |
        | B | A | E | 0 |
        | C | F | E | 0 |
        | E | F | F | 1 |
        | F | B | E | 0 |
