---
title: "Modelling of CSSN"
subject: "DIGITAL SYSTEMS AND VLSI DESIGN"
module: "Module 1: Clocked Synchronous Networks"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe74a"
status: "completed"
scrapedAt: "2026-05-23T17:48:03.865Z"
---
# Module 1: Clocked Synchronous Networks - Topic: Modelling of CSSN

This module focuses on understanding and modeling Clocked Synchronous Sequential Networks (CSSNs), a fundamental concept in digital systems design. We will explore how these networks operate under the control of a clock signal and how their behavior can be formally represented.

---

## 1. Introduction to Clocked Synchronous Sequential Networks (CSSNs)

### 1.1 Definition and Key Characteristics

*   **CSSN Definition:** A digital system whose output and next state depend not only on the present inputs but also on the past sequence of inputs. This dependency on past behavior is achieved through the use of **memory elements**.
*   **Synchronous:** All memory elements (flip-flops) change their state simultaneously in response to the clock signal. This synchronized operation simplifies analysis and design.
*   **Clocked:** A timing signal, known as the clock, dictates when the state changes occur. This ensures predictable and orderly operation.
*   **Sequential:** The system's behavior evolves over time, with the current state influencing future states.

### 1.2 Components of a CSSN

A typical CSSN consists of:

*   **Combinational Logic:** Generates the outputs and the next state signals based on present inputs and present state.
*   **Memory Elements:** Stores the current state of the system. These are usually **flip-flops** (e.g., D, JK, T, SR flip-flops).
*   **Clock Signal:** The external timing pulse that synchronizes the state changes in the memory elements.

### 1.3 State Table Representation

The behavior of a CSSN can be precisely described using a **state table**.

*   **State Table:** A tabular representation that lists all possible states of the sequential network, the present inputs, the corresponding outputs, and the next state.
*   **Columns:** Typically include:
    *   Present State
    *   Inputs
    *   Outputs
    *   Next State
*   **Rows:** Each row represents a unique combination of present state and inputs.

**Example:** Consider a simple two-bit counter.

| Present State (Y1Y0) | Clock | Input (X) | Output (Z) | Next State (Y1'Y0') |
| :----------------- | :---- | :-------- | :--------- | :------------------ |
| 00                 | 1     | 0         | 0          | 01                  |
| 00                 | 1     | 1         | 1          | 00                  |
| 01                 | 1     | 0         | 0          | 10                  |
| 01                 | 1     | 1         | 1          | 01                  |
| 10                 | 1     | 0         | 0          | 11                  |
| 10                 | 1     | 1         | 1          | 10                  |
| 11                 | 1     | 0         | 0          | 00                  |
| 11                 | 1     | 1         | 1          | 11                  |

*   *Note: The clock is implied to trigger the state change. When the clock is active (e.g., rising edge), the next state becomes the present state.*

**Key Point:** The state table is crucial for understanding and designing CSSNs. It defines the complete behavior of the network.

### 1.4 State Diagram Representation

The state table can be visually represented using a **state diagram**.

*   **State Diagram:** A graphical representation where states are nodes (circles) and transitions between states are directed arcs (arrows).
*   **Labels on Arcs:** Indicate the input conditions that cause the transition and the corresponding output produced during the transition.

**Example (Continuing the two-bit counter):**

```
      +----+       +----+       +----+       +----+
      | 00 | ----> | 01 | ----> | 10 | ----> | 11 |
      +----+       +----+       +----+       +----+
        ^                                       |
        |                                       |
        +---------------------------------------+
```

*   Each arrow would be labeled: `input/output`. For example, the transition from 00 to 01 on input 0 would be labeled `0/0`. The transition from 00 to 00 on input 1 would be labeled `1/1`.

**Key Point:** State diagrams provide an intuitive understanding of the system's operation and the flow of control.

---

## 2. Modeling Techniques for CSSNs

### 2.1 Mealy vs. Moore Machines

CSSNs can be modeled as either Mealy or Moore machines, distinguished by how outputs are generated.

#### 2.1.1 Mealy Machine

*   **Output depends on:** Present state AND present input.
*   **State Table:** Output column is associated with the input-state transition.
*   **State Diagram:** Output is labeled on the transition arcs.
*   **Advantages:** Can sometimes be designed with fewer states, potentially leading to simpler logic.
*   **Disadvantages:** Outputs can change asynchronously with inputs, even between clock edges, which can be problematic in some applications.

**Example (Mealy Output):**

```
      +----+       +----+
      | S0 | ----> | S1 |
      +----+       +----+
        ^  |         ^  |
        |  | 0/1     |  | 1/0
        |  +---------+  |
        |               |
        +---------------+
          1/0           0/1
```

*   In the state diagram, `input/output` pairs are shown on the transitions.

#### 2.1.2 Moore Machine

*   **Output depends on:** Present state ONLY.
*   **State Table:** Output column is associated with each state.
*   **State Diagram:** Output is labeled within the state nodes.
*   **Advantages:** Outputs are stable between clock edges, making them more predictable and easier to interface with other synchronous systems.
*   **Disadvantages:** May require more states than a Mealy machine for the same functionality.

**Example (Moore Output):**

```
      +------+       +------+
      | S0/0 | ----> | S1/1 |
      +------+       +------+
        ^  |           ^  |
        |  | 0         |  | 1
        |  +-----------+  |
        |                 |
        +-----------------+
            1             0
```

*   In the state diagram, `State/Output` pairs are shown within the state nodes.

**Relationship between Mealy and Moore:**

*   Any Mealy machine can be converted to an equivalent Moore machine.
*   Any Moore machine can be converted to an equivalent Mealy machine.
*   The conversion is important for understanding the trade-offs and for implementation purposes.

**Reference:** Wakerly, Chapter 6, discusses the differences and conversions between Mealy and Moore models. Givone also covers these models extensively in Chapters 5 and 6.

### 2.2 Algorithmic State Machine (ASM) Charts

ASM charts provide a graphical representation of the behavior of sequential networks that is more structured than state diagrams and directly leads to hardware implementation.

*   **Purpose:** To represent the control unit of a sequential circuit, detailing its states, transitions, and the operations performed.
*   **Components of an ASM Chart:**
    *   **State Boxes (Rectangles):** Represent states. May contain output signals that are active in that state (for Moore-like behavior).
    *   **Decision Boxes (Diamonds):** Represent conditional tests on inputs or state variables. Arcs emanating from these boxes are labeled with the conditions.
    *   **Output Boxes (Rectangles with curved corners):** Represent operations or output signals that are active when a transition occurs (for Mealy-like behavior).
    *   **Connectors:** Indicate the flow of control.

**Example ASM Chart Structure:**

```
+-----------+      Input Condition?      +-----------+
| State S0  | ------------------------> | State S1  |
| Output Y1 |                             | Output Y2 |
+-----------+                             +-----------+
     |                                        |
     | Input Condition?                       | Input Condition?
     v                                        v
+-----------+      Output Z1                +-----------+
| Decision? | ----------------------------> | State S2  |
+-----------+      (True)                   | Output Y3 |
     |                                        +-----------+
     | Input Condition?                       |
     | (False)                                |
     v                                        |
+-----------+      Output Z2                |
| Output O1 | ----------------------------> |
+-----------+                               |
                                            |
                                            v
                                          (End/Loop)
```

**Key Features of ASM Charts:**

*   **One state per box:** Unlike state diagrams where multiple state-output pairs might be combined.
*   **Explicitly shows decisions:** Using diamond shapes.
*   **Flow of control is clear:** Arrows indicate the sequence of operations.
*   **Directly maps to hardware:** Can be readily translated into flip-flops and combinational logic.

**Relationship to Mealy/Moore:**

*   A Moore machine can be represented by an ASM chart where all outputs are associated with state boxes.
*   A Mealy machine can be represented by an ASM chart where outputs are associated with transition paths, often in output boxes.
*   A generalized ASM chart can represent both.

**Reference:** Mano & Ciletti, Chapter 7, provides a comprehensive introduction to ASM charts and their application in sequential circuit design. Givone also covers ASM charts as a design tool.

---

## 3. State Assignment and Reduction

While not directly the "Modelling" topic, these are critical steps in the overall process of working with CSSNs, often following the initial modeling.

### 3.1 State Reduction

*   **Goal:** To minimize the number of states in a sequential network while preserving its functionality.
*   **Technique:**
    *   **State Equivalence:** Two states are equivalent if, for every possible input sequence, they produce the same output sequence and transition to equivalent states.
    *   **Karnaugh Map Method (for states):** Can be used to group equivalent states.
    *   **Implication Table Method:** A systematic way to identify equivalent states by building a table and iteratively marking non-equivalent pairs.

**Reference:** Wakerly, Chapter 6, details state reduction techniques.

### 3.2 State Assignment

*   **Goal:** To assign binary codes to the symbolic states to minimize the required flip-flops and the complexity of the combinational logic.
*   **Impact:** The choice of state assignment can significantly affect the resulting hardware implementation (number of gates, propagation delays).
*   **Techniques:**
    *   **One-hot encoding:** Each state is assigned a unique binary code with only one bit set to 1. Requires more flip-flops but can simplify logic.
    *   **Binary encoding:** Uses the minimum number of flip-flops (log2(number of states)).
    *   **Heuristic methods:** Algorithms designed to find good assignments that minimize gate count or delay (e.g., Huffman's method, critical path analysis).

**Reference:** Givone, Chapter 6, discusses various state assignment strategies. Mano & Ciletti also cover state assignment in detail.

---

## 4. Modeling Examples and Applications

### 4.1 Sequence Detector

A sequence detector identifies a specific binary sequence.

**Example:** Detect the sequence "101".

*   **States:**
    *   S0: Initial state, no part of the sequence detected.
    *   S1: Detected "1".
    *   S2: Detected "10".
    *   S3: Detected "101" (output is 1).
*   **State Diagram (Mealy):**

    ```
          +----+       1/0       +----+       0/0       +----+       1/1       +----+
          | S0 | -----------> | S1 | ----------> | S2 | ----------> | S3 |
          +----+              +----+               +----+               +----+
            ^ | 0/0           ^ | 0/0             ^ | 0/0             ^ | 0/0
            | +---------------+ |                 | +---------------+ |
            |                   |                 |                   |
            +-------------------+                 +-------------------+
              (back to S0)                        (back to S0 if next input is 0)
                                                  (back to S1 if next input is 1)
    ```
    *   **Transitions:**
        *   S0, Input 0 -> S0, Output 0
        *   S0, Input 1 -> S1, Output 0
        *   S1, Input 0 -> S2, Output 0
        *   S1, Input 1 -> S1, Output 0
        *   S2, Input 0 -> S0, Output 0
        *   S2, Input 1 -> S3, Output 1
        *   S3, Input 0 -> S2, Output 0
        *   S3, Input 1 -> S1, Output 0

**Key Point:** Modelling allows us to break down complex sequential behavior into manageable states and transitions.

### 4.2 Counters

*   **Synchronous Counters:** All flip-flops change state simultaneously upon the clock edge.
*   **Modeling:** State tables and diagrams are used to define the counting sequence and any control inputs (e.g., enable, reset).

**Example: 3-bit Up Counter with Enable (E) and Reset (R)**

*   **States:** 000, 001, 010, 011, 100, 101, 110, 111.
*   **Transitions:**
    *   If R=1, next state is 000.
    *   If R=0 and E=1, next state increments.
    *   If R=0 and E=0, next state remains the same.

**Reference:** Yarbrough, Chapter 7, provides detailed examples of counter design and their modeling.

---

## 5. Practical Considerations and Course Outcomes Alignment

*   **CO1 (Design, analyze, and model CSSNs, optimize state assignment and reduction, and effectively utilize ASM charts):** This entire module directly addresses CO1. We've covered modeling (state tables, state diagrams), introduced the concepts of state reduction and assignment, and discussed ASM charts as a modeling and design tool.
*   **CO4 (Explain the VLSI design flow, utilize various design entry methods, apply different VHDL modeling styles, and develop and simulate VHDL constructs for combinational and sequential circuits):** While this topic focuses on the theoretical modeling, it lays the foundation for VHDL modeling. In later modules, you will learn to translate these models into VHDL code, which is a design entry method for VLSI. Understanding CSSN behavior is crucial for writing correct VHDL for sequential circuits.

**Important Points to Remember:**

*   **Clocking is Key:** Synchronous systems rely on a clock signal to control state changes.
*   **State is Memory:** The current state represents the past history of inputs.
*   **Mealy vs. Moore:** Understand the difference in output generation and its implications.
*   **ASM Charts:** A powerful tool for designing the control unit of sequential systems and directly translating to hardware.
*   **State Tables and Diagrams:** Fundamental tools for representing and analyzing CSSN behavior.
*   **State Reduction and Assignment:** Crucial steps for optimizing hardware implementation.

---

## 6. Practice Questions and Answers

**Question 1:** Differentiate between Mealy and Moore machines with respect to their output generation. (CO1)

**Answer:**
*   **Mealy Machine:** The output depends on both the present state and the present input. Outputs can change as soon as the input changes, even between clock edges.
*   **Moore Machine:** The output depends only on the present state. Outputs are stable and only change when the state changes at the clock edge.

**Question 2:** Draw a state diagram for a Mealy machine that detects the sequence "110". The output should be 1 when the sequence is detected, and 0 otherwise. (CO1)

**Answer:**
Let the states be:
*   S0: Initial state, no part of the sequence detected.
*   S1: Detected "1".
*   S2: Detected "11".
*   S3: Detected "110" (output 1).

```
      +----+       1/0       +----+       1/0       +----+       0/1       +----+
      | S0 | -----------> | S1 | ----------> | S2 | ----------> | S3 |
      +----+              +----+               +----+               +----+
        ^ | 0/0           ^ | 0/0             ^ | 0/0             ^ | 0/0
        | +---------------+ |                 | +---------------+ |
        |                   |                 |                   |
        +-------------------+                 +-------------------+
          (back to S0)                        (back to S1 if next input is 1)
                                              (back to S0 if next input is 0)
```
*   **Transitions:**
    *   S0, Input 0 -> S0, Output 0
    *   S0, Input 1 -> S1, Output 0
    *   S1, Input 0 -> S0, Output 0
    *   S1, Input 1 -> S2, Output 0
    *   S2, Input 0 -> S3, Output 1
    *   S2, Input 1 -> S1, Output 0
    *   S3, Input 0 -> S0, Output 0
    *   S3, Input 1 -> S1, Output 0

**Question 3:** What is the primary purpose of an ASM chart in the context of CSSN design? (CO1)

**Answer:** The primary purpose of an ASM chart is to provide a structured, graphical representation of the control unit's behavior. It details states, transitions based on inputs, and the operations or outputs performed during these transitions, directly facilitating the translation of the design into hardware. It's more comprehensive than a simple state diagram for design purposes.

**Question 4:** Consider a simple Moore machine with two states, SA and SB. In state SA, the output is 0. In state SB, the output is 1. If in SA, an input of '0' causes a transition to SA, and an input of '1' causes a transition to SB. If in SB, an input of '0' causes a transition to SA, and an input of '1' causes a transition to SB. Draw the state diagram for this Moore machine. (CO1)

**Answer:**

```
      +------+       0/0       +------+
      | SA/0 | ----------> | SB/1 |
      +------+               +------+
        ^ | 1/0             ^ | 1/1
        | +---------------+ |
        |                   |
        +-------------------+
          0/0
```
*   **State SA:** Output is 0.
    *   Input 0: Transition to SA.
    *   Input 1: Transition to SB.
*   **State SB:** Output is 1.
    *   Input 0: Transition to SA.
    *   Input 1: Transition to SB.

---
This concludes Module 1, Topic: Modelling of CSSN. The concepts covered here are fundamental to understanding and designing any clocked synchronous digital system.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
