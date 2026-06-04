---
title: "Finite State Machines - logic synthesis for an FSM, FSM design process and design examples"
subject: "DIGITAL ELECTRONICS AND LOGIC DESIGN"
module: "Module 4: Sequential Logic Design  :"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ad62"
status: "completed"
scrapedAt: "2026-05-20T16:24:02.003Z"
---
## DIGITAL ELECTRONICS AND LOGIC DESIGN - Module 4: Sequential Logic Design - Finite State Machines

**Topic:** Finite State Machines (FSM) - Logic Synthesis for an FSM, FSM Design Process and Design Examples

**Learning Outcomes:**

*   Understand the fundamental concepts of Finite State Machines (FSMs).
*   Learn the process of synthesizing logic circuits from FSM state diagrams/tables.
*   Apply the FSM design process to create sequential circuits meeting specific requirements.
*   Analyze and design FSMs for various applications.

### 1. Key Concepts and Definitions

*   **Finite State Machine (FSM):** A mathematical model of computation used to design digital logic circuits.  It's a machine that can be in one of a finite number of states. The machine transitions between these states based on input and its current state.

*   **State:**  A condition of a system described by the values stored in its memory elements (e.g., flip-flops). In an FSM, each state represents a distinct mode of operation.

*   **Input:**  Signals fed into the FSM that influence state transitions and outputs.

*   **Output:** Signals produced by the FSM that are determined by the current state and/or the input.

*   **Present State:** The state the FSM is currently in.

*   **Next State:** The state the FSM will transition to based on the current state and input.

*   **State Transition:**  The change from the present state to the next state, triggered by an input.

*   **State Diagram (or State Transition Diagram):**  A graphical representation of an FSM, showing states as circles and transitions between states as directed arcs labeled with input conditions and output values.

*   **State Table (or State Transition Table):**  A tabular representation of an FSM, listing the present state, input, next state, and output for each possible combination.

*   **Mealy Machine:** An FSM where the output depends on *both* the current state *and* the input.

*   **Moore Machine:** An FSM where the output depends *only* on the current state.

*   **State Assignment:** The process of assigning unique binary codes to each state in the FSM. This step is crucial for implementation using flip-flops.

*   **Excitation Table:** A table that maps the desired transition of a flip-flop (from present state to next state) to the required input signals of the flip-flop.  Different flip-flops (D, JK, T, SR) have different excitation tables.

### 2. Logic Synthesis for an FSM

The process of synthesizing logic circuits from an FSM involves the following steps:

1.  **State Diagram/Table:**  Start with a state diagram or state table that defines the desired behavior of the FSM.  This is usually determined from the problem specification.

2.  **State Assignment:**  Assign a unique binary code to each state.  The number of flip-flops required is determined by `ceil(log2(number of states))`.  Choosing an optimal state assignment can minimize the complexity of the resulting logic.  Techniques for state assignment include:
    *   **Binary Encoding:**  Assign sequential binary codes.  Simple, but may not always be optimal.
    *   **Gray Code Encoding:**  Assign codes such that adjacent states differ by only one bit.  Can sometimes reduce logic complexity.
    *   **One-Hot Encoding:**  Use one flip-flop per state.  One and only one flip-flop is set to '1' at any given time, representing the current state.  Simple logic, but requires more flip-flops.

3.  **Flip-Flop Selection:**  Choose the type of flip-flops to be used (e.g., D, JK, T). D flip-flops are generally the easiest to use for synthesis due to their simple excitation table.

4.  **State-Assigned Table:** Create a table that maps the present state (binary encoded), input, and next state (binary encoded).  Also include the output values.

5.  **Excitation Table Generation:** Using the chosen flip-flop's excitation table, generate the excitation signals required for each flip-flop based on the present state and desired next state.  The excitation table tells you what input is needed to change the flip-flop from the present state to the desired next state.

6.  **Karnaugh Map (K-Map) Simplification:**  Use K-maps to simplify the Boolean expressions for each flip-flop input and each output.  The inputs to the K-map are the present state variables (flip-flop outputs) and the external inputs.

7.  **Logic Circuit Implementation:**  Implement the simplified Boolean expressions using logic gates (AND, OR, NOT, NAND, NOR, XOR, XNOR).

**Example:**

Let's synthesize a simple Mealy machine with two states (S0 and S1), one input (X), and one output (Z).  The machine transitions from S0 to S1 if X=1, and from S1 to S0 if X=0.  The output Z is 1 if the machine transitions to S1 from S0 when X=1, and 0 otherwise.

1.  **State Table:**

    | Present State | Input (X) | Next State | Output (Z) |
    | ------------- | --------- | ---------- | ---------- |
    | S0            | 0         | S0         | 0          |
    | S0            | 1         | S1         | 1          |
    | S1            | 0         | S0         | 0          |
    | S1            | 1         | S1         | 0          |

2.  **State Assignment:**

    *   S0 = 0
    *   S1 = 1
    Therefore, we need one flip-flop (let's call it QA) to represent the state.

3.  **Flip-Flop Selection:**  Let's use a D flip-flop.

4.  **State-Assigned Table:**

    | Present State (QA) | Input (X) | Next State (QA+) | Output (Z) |
    | ------------------ | --------- | ---------------- | ---------- |
    | 0                  | 0         | 0                | 0          |
    | 0                  | 1         | 1                | 1          |
    | 1                  | 0         | 0                | 0          |
    | 1                  | 1         | 1                | 0          |

5.  **Excitation Table Generation:**  Since we're using a D flip-flop, QA+ = DA. Therefore, the excitation table is trivial: DA = QA+.

    | Present State (QA) | Input (X) | Next State (QA+) | D flip-flop Input (DA) | Output (Z) |
    | ------------------ | --------- | ---------------- | ---------------------- | ---------- |
    | 0                  | 0         | 0                | 0                      | 0          |
    | 0                  | 1         | 1                | 1                      | 1          |
    | 1                  | 0         | 0                | 0                      | 0          |
    | 1                  | 1         | 1                | 1                      | 0          |

6.  **K-Map Simplification:**

    *   **DA K-Map:**

        ```
           X\QA | 0  | 1  |
           -----|----|----|
            0  | 0  | 0  |
            1  | 1  | 1  |
        ```

        DA = X

    *   **Z K-Map:**

        ```
           X\QA | 0  | 1  |
           -----|----|----|
            0  | 0  | 0  |
            1  | 1  | 0  |
        ```

        Z = X * QA'  (X AND NOT QA)

7.  **Logic Circuit Implementation:**

    *   D flip-flop with its D input connected to the input X (DA = X).
    *   An AND gate with inputs X and the complement of QA (QA').  The output of this gate is Z (Z = X * QA').

### 3. FSM Design Process

The general FSM design process can be summarized as follows:

1.  **Problem Specification:** Clearly define the desired behavior of the system.  This includes the inputs, outputs, and the sequence of operations.

2.  **State Diagram/Table Creation:**  Draw the state diagram or create a state table based on the problem specification.  Define each state and the transitions between them based on the input conditions.

3.  **State Minimization (Optional):**  Reduce the number of states, if possible, to simplify the circuit.  This is done by identifying and merging equivalent states.  Two states are equivalent if, for every possible input sequence, they produce the same output sequence.

4.  **State Assignment:** Assign unique binary codes to each state.  Consider different encoding schemes to potentially simplify the logic.

5.  **Flip-Flop Selection:** Choose the type of flip-flops to be used.

6.  **Excitation Table Generation:** Create the excitation table for the selected flip-flops.

7.  **K-Map Simplification:** Use K-maps to simplify the Boolean expressions for flip-flop inputs and outputs.

8.  **Logic Circuit Implementation:**  Implement the simplified Boolean expressions using logic gates.

9.  **Simulation and Testing:**  Simulate the designed circuit to verify its correct operation.  Test the physical implementation to ensure it meets the design specifications.

### 4. Design Examples

**Example 1: Sequence Detector**

Design an FSM that detects the sequence "101" in a serial input stream.  The output should be 1 when the sequence is detected and 0 otherwise. Use a Mealy machine.

1.  **Problem Specification:**  Detect the sequence "101".

2.  **State Diagram:**

    *   **S0 (Reset/Start):**  Initial state.  If input is 1, go to S1. If input is 0, stay in S0.
    *   **S1:**  "1" has been received.  If input is 0, go to S2. If input is 1, stay in S1 (because we could be starting a new sequence "101").
    *   **S2:**  "10" has been received.  If input is 1, go to S3. If input is 0, go back to S0 (because the sequence is broken).
    *   **S3:** "101" has been received. If input is 1, go to S1. If input is 0, go to S2.

    ```
    [State Diagram Visual Representation - Difficult to render in text]
    States: S0, S1, S2, S3
    Transitions:
        S0 -- (X=0, Z=0) --> S0
        S0 -- (X=1, Z=0) --> S1
        S1 -- (X=0, Z=0) --> S2
        S1 -- (X=1, Z=0) --> S1
        S2 -- (X=0, Z=0) --> S0
        S2 -- (X=1, Z=1) --> S3
        S3 -- (X=0, Z=0) --> S0
        S3 -- (X=1, Z=0) --> S1

        Where X is the input and Z is the output.
    ```

3.  **State Table:**

    | Present State | Input (X) | Next State | Output (Z) |
    | ------------- | --------- | ---------- | ---------- |
    | S0            | 0         | S0         | 0          |
    | S0            | 1         | S1         | 0          |
    | S1            | 0         | S2         | 0          |
    | S1            | 1         | S1         | 0          |
    | S2            | 0         | S0         | 0          |
    | S2            | 1         | S3         | 1          |
    | S3            | 0         | S0         | 0          |
    | S3            | 1         | S1         | 0          |

4.  **State Assignment:**

    *   S0 = 00
    *   S1 = 01
    *   S2 = 10
    *   S3 = 11
    Therefore, we need two flip-flops (QA and QB) to represent the state.

5.  **Flip-Flop Selection:** Let's use D flip-flops.

6.  **State-Assigned Table:**

    | QA | QB | Input (X) | QA+ | QB+ | Output (Z) |
    | -- | -- | --------- | --- | --- | ---------- |
    | 0  | 0  | 0         | 0   | 0   | 0          |
    | 0  | 0  | 1         | 0   | 1   | 0          |
    | 0  | 1  | 0         | 1   | 0   | 0          |
    | 0  | 1  | 1         | 0   | 1   | 0          |
    | 1  | 0  | 0         | 0   | 0   | 0          |
    | 1  | 0  | 1         | 1   | 1   | 1          |
    | 1  | 1  | 0         | 0   | 0   | 0          |
    | 1  | 1  | 1         | 0   | 1   | 0          |

7.  **Excitation Table:** Since we're using D flip-flops, DA = QA+ and DB = QB+.

8.  **K-Map Simplification:**

    *   **DA K-Map:**

        ```
           X\QBQA | 00 | 01 | 11 | 10 |
           ------|----|----|----|----|
            0   | 0  | 1  | 0  | 0  |
            1   | 0  | 0  | 0  | 1  |
        ```

        DA = QA' * QB * X' + QA * QB' * X

    *   **DB K-Map:**

        ```
           X\QBQA | 00 | 01 | 11 | 10 |
           ------|----|----|----|----|
            0   | 0  | 0  | 0  | 0  |
            1   | 1  | 1  | 1  | 1  |
        ```
        DB = X

    *   **Z K-Map:**

        ```
           X\QBQA | 00 | 01 | 11 | 10 |
           ------|----|----|----|----|
            0   | 0  | 0  | 0  | 0  |
            1   | 0  | 0  | 0  | 1  |
        ```

        Z = QA * QB' * X

9.  **Logic Circuit Implementation:**

    *   Implement the expressions for DA, DB, and Z using logic gates.

**Example 2: Moore Machine Counter**

Design a Moore machine that counts in the sequence 0, 1, 2, 3, 0, 1, 2, 3... The output should represent the current count.

1.  **Problem Specification:** Count 0 to 3 repeatedly.

2.  **State Diagram:**

    *   **S0 (0):** Initial state, Output = 00
    *   **S1 (1):** Output = 01
    *   **S2 (2):** Output = 10
    *   **S3 (3):** Output = 11
    The machine transitions from S0 -> S1 -> S2 -> S3 -> S0 continuously, regardless of the input (since it's a counter).  Since it's a Moore machine, the output is directly determined by the state. Let's assume there is a clock signal driving the transitions.

    ```
    [State Diagram Visual Representation - Difficult to render in text]
    States: S0, S1, S2, S3
    Transitions:
        S0 -- (Clock) --> S1 (Output: 00)
        S1 -- (Clock) --> S2 (Output: 01)
        S2 -- (Clock) --> S3 (Output: 10)
        S3 -- (Clock) --> S0 (Output: 11)
    ```

3.  **State Table:**

    | Present State | Input (Clock) | Next State | Output (Z1, Z0) |
    | ------------- | ------------- | ---------- | --------------- |
    | S0            | 1             | S1         | 00              |
    | S1            | 1             | S2         | 01              |
    | S2            | 1             | S3         | 10              |
    | S3            | 1             | S0         | 11              |

4.  **State Assignment:**

    *   S0 = 00
    *   S1 = 01
    *   S2 = 10
    *   S3 = 11
    Therefore, we need two flip-flops (QA and QB) to represent the state.

5.  **Flip-Flop Selection:** Let's use D flip-flops.

6.  **State-Assigned Table:**

    | QA | QB | Input (Clock) | QA+ | QB+ | Output (Z1) | Output (Z0) |
    | -- | -- | ------------- | --- | --- | ----------- | ----------- |
    | 0  | 0  | 1             | 0   | 1   | 0           | 0           |
    | 0  | 1  | 1             | 1   | 0   | 0           | 1           |
    | 1  | 0  | 1             | 1   | 1   | 1           | 0           |
    | 1  | 1  | 1             | 0   | 0   | 1           | 1           |

7.  **Excitation Table:** Since we're using D flip-flops, DA = QA+ and DB = QB+.

8.  **K-Map Simplification:**

    *   **DA K-Map:**

        ```
           QB\QA | 0 | 1 |
           -----|---|---|
            0  | 1 | 1 |
            1  | 0 | 0 |
        ```

        DA = QA' * QB + QA * QB'

    *   **DB K-Map:**

        ```
           QB\QA | 0 | 1 |
           -----|---|---|
            0  | 1 | 0 |
            1  | 0 | 1 |
        ```

        DB = QA' * QB' + QA * QB

    *   **Z1 K-Map:** Z1 = QA
    *   **Z0 K-Map:** Z0 = QB
    (Because Z1 and Z0 only depend on the current state).

9.  **Logic Circuit Implementation:**

    *   Implement the expressions for DA and DB using logic gates. This is essentially a two-bit synchronous counter.
    *   Z1 is simply the output of flip-flop QA.
    *   Z0 is simply the output of flip-flop QB.

### 5. Important Points to Remember

*   **Mealy vs. Moore:** Understand the key difference.  Mealy outputs change synchronously with input, while Moore outputs are synchronous with the state change (clock).
*   **State Minimization:**  A crucial step for complex FSMs to reduce circuit complexity.
*   **State Assignment:** Can significantly affect the complexity of the resulting logic.
*   **Flip-Flop Excitation Tables:**  Know how to use the excitation tables for different flip-flop types.  D flip-flops often simplify the design process.
*   **K-Maps:**  A powerful tool for simplifying Boolean expressions.
*   **Verification:**  Thoroughly simulate and test your design to ensure it meets the specifications.
*   **Don't Cares:**  Use don't care conditions in K-maps to further simplify the logic. Don't care conditions occur when a particular input combination is impossible, thus the output can be either 0 or 1.

### 6. Practice Questions/Exercises

1.  **Problem:** Design a Mealy FSM that outputs a '1' only when it detects the sequence "010" in a serial input.

    *   **Answer:**  (Steps to be followed similar to the examples above. You would need to define states for "0", "01", and "010" detected, and handle resets. K-Maps will be used to derive the equations for flip-flop inputs and output. The final solution would consist of:
        * State Diagram/Table
        * Encoded State Table
        * Excitation Table
        * Minimized Logic Equations
        * Circuit Diagram

2.  **Problem:** Design a Moore FSM that controls a traffic light. The light should cycle through Green (G), Yellow (Y), and Red (R) with the following durations: Green for 30 seconds, Yellow for 5 seconds, and Red for 30 seconds.  Assume you have a clock signal with a period of 1 second.

    *   **Answer:**  (This will require defining states for Green, Yellow, and Red. Since you have specific durations, you'll need to define internal states (e.g., G1, G2...G30 for the Green state). The Moore machine will output the appropriate light signal for each state based only on the present state, and transitions happen based on the clock ticks. The final solution would consist of:
        * State Diagram/Table
        * Encoded State Table
        * Excitation Table
        * Minimized Logic Equations
        * Circuit Diagram

3.  **Problem:** Minimize the number of states in the following state table:

    | Present State | Input (X) | Next State | Output (Z) |
    | ------------- | --------- | ---------- | ---------- |
    | A             | 0         | B          | 0          |
    | A             | 1         | C          | 0          |
    | B             | 0         | D          | 1          |
    | B             | 1         | E          | 1          |
    | C             | 0         | D          | 1          |
    | C             | 1         | E          | 1          |
    | D             | 0         | F          | 0          |
    | D             | 1         | G          | 0          |
    | E             | 0         | F          | 0          |
    | E             | 1         | G          | 0          |
    | F             | 0         | A          | 0          |
    | F             | 1         | A          | 0          |
    | G             | 0         | A          | 0          |
    | G             | 1         | A          | 0          |

    *   **Answer:** States B and C are equivalent because for all inputs they go to the same next state and produce the same output.  Similarly, states D and E are equivalent, and states F and G are equivalent.  Therefore, the reduced state table would be:

    | Present State | Input (X) | Next State | Output (Z) |
    | ------------- | --------- | ---------- | ---------- |
    | A             | 0         | B/C          | 0          |
    | A             | 1         | B/C          | 0          |
    | B/C           | 0         | D/E          | 1          |
    | B/C           | 1         | D/E          | 1          |
    | D/E           | 0         | F/G          | 0          |
    | D/E           | 1         | F/G          | 0          |
    | F/G           | 0         | A          | 0          |
    | F/G           | 1         | A          | 0          |

This completes the comprehensive study notes on Finite State Machines. Remember to practice designing different FSMs to solidify your understanding. Good luck!
