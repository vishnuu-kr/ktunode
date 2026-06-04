---
title: "Asynchronous Sequential Circuits"
subject: "DIGITAL SYSTEM DESIGN"
module: "Module 2: ASM Chart and its realization"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe712"
status: "completed"
scrapedAt: "2026-05-23T17:47:46.462Z"
---
# DIGITAL SYSTEM DESIGN - Module 2: ASM Chart and its Realization

## Topic: Asynchronous Sequential Circuits

This module introduces the fundamental concepts of asynchronous sequential circuits, their analysis, and design methodologies, with a specific focus on how they relate to ASM charts and their realization. We will explore the unique characteristics of asynchronous circuits compared to synchronous ones and the challenges and techniques involved in their design.

---

### 1. Introduction to Asynchronous Sequential Circuits

**Key Concepts:**

*   **Definition:** Asynchronous sequential circuits are digital circuits whose operations are not governed by a central clock signal. The state changes in these circuits are triggered by the arrival of input signals.
*   **Contrast with Synchronous Circuits:**
    *   **Synchronous:** State changes occur only at the active edge of a clock pulse. This provides a predictable timing mechanism.
    *   **Asynchronous:** State changes can occur anytime an input signal changes. This relies on the propagation delays of logic gates.
*   **Advantages:**
    *   **Speed:** Potentially faster operation as they don't wait for a clock edge.
    *   **Lower Power Consumption:** No clock signal to distribute, reducing power overhead.
    *   **Simpler Design (in some cases):** Can be more straightforward for specific applications where precise timing isn't critical.
*   **Disadvantages:**
    *   **Design Complexity:** More susceptible to timing issues like **race conditions** and **hazards**, making them more challenging to design correctly.
    *   **Analysis Difficulty:** Predicting behavior can be complex due to the absence of a clock.
    *   **Lack of Standardization:** Less common in modern complex digital systems due to the dominance of clocked designs.

**Learning Outcome Alignment:**

*   **CO1 (K3): Analyze asynchronous and clocked synchronous sequential circuits.** This section establishes the foundation for analyzing asynchronous circuits by contrasting them with synchronous ones.

**Important Points to Remember:**

*   The absence of a clock is the defining characteristic of asynchronous circuits.
*   Propagation delays are crucial for the operation of asynchronous circuits.

---

### 2. Analysis of Asynchronous Sequential Circuits

**Key Concepts:**

*   **State Diagram:** A graphical representation of the circuit's behavior, showing states and transitions based on input conditions.
*   **State Table:** A tabular representation of the state diagram, listing present states, inputs, next states, and outputs.
*   **Primitive Flow Table:** A state table where each row (representing a present state) has a unique next state for each input combination. This is a crucial first step in the design process.
*   **Reduction of Flow Tables:** Minimizing the number of states in the flow table to achieve a simpler and more efficient circuit. This involves identifying equivalent states.
*   **State Assignment:** Assigning binary codes to the states. The choice of state assignment significantly impacts the complexity and potential for hazards.
*   **Excitation Table:** A table derived from the state table and output logic, specifying the required input to the memory elements (flip-flops or latches) to achieve the desired next state.
*   **Derivation of Output Logic:** Determining the Boolean expressions for the circuit's outputs based on the states and inputs.

**Process for Analysis (and Design):**

1.  **Represent the circuit using a state diagram or flow table:** This is the initial step to understand the circuit's intended behavior.
2.  **Minimize the flow table:** Reduce the number of states by merging equivalent states.
3.  **Assign binary states to the rows of the reduced flow table:** This is a critical step where careful consideration is needed to avoid hazards.
4.  **Determine the excitation requirements for the memory elements:** Based on the state transitions.
5.  **Derive the output logic:** Based on the states and inputs.
6.  **Implement the circuit using logic gates and memory elements (e.g., SR latches, D latches).**

**Textbook References:**

*   **Givone, D. G. (2002). *Digital Principles & Design*.** This textbook provides a comprehensive treatment of sequential circuit analysis and design, including asynchronous circuits and flow table reduction. (Chapter 9: Sequential Circuits)
*   **Mano, M. M., & Ciletti, M. D. (2018). *Digital Design with an introduction to HDL, VHDL and Verilog*.** While focusing on synchronous design, it can offer comparative insights and principles applicable to sequential logic. (Chapter 6: Sequential Logic Design Principles - for understanding general sequential concepts).
*   **Wakerly, J. F. (2008). *Digital Design*.** Wakerly's book is known for its thorough coverage of state machine design and the complexities of asynchronous circuits. (Chapter 10: Asynchronous Sequential Circuits)

**Example: A Simple Asynchronous Circuit (e.g., a Mealy Machine)**

Consider a circuit with two inputs, X1 and X2, and one output, Y. The output Y is 1 when both X1 and X2 are 1 simultaneously.

**Initial State Diagram (Conceptual):**

*   State A: Initial state, Y=0.
*   If X1=1 and X2=0, transition to State B.
*   If X1=0 and X2=1, transition to State C.
*   If X1=0 and X2=0, remain in State A.
*   State B: X1=1, X2=0, Y=0.
*   If X1=0 and X2=0, transition back to State A.
*   If X1=1 and X2=1, transition to State D.
*   State C: X1=0, X2=1, Y=0.
*   If X1=0 and X2=0, transition back to State A.
*   If X1=1 and X2=1, transition to State D.
*   State D: X1=1, X2=1, Y=1.
*   If X1=0 and X2=0, transition back to State A.

**Flow Table (Conceptual, without minimization):**

| Present State | X1=0, X2=0 | X1=0, X2=1 | X1=1, X2=0 | X1=1, X2=1 | Output Y |
| :------------ | :-------- | :-------- | :-------- | :-------- | :------- |
| A             | A         | C         | B         | -         | 0        |
| B             | A         | -         | -         | D         | 0        |
| C             | A         | -         | D         | -         | 0        |
| D             | A         | -         | -         | -         | 1        |

*Note: '-' indicates an unspecified transition, often assumed to go to a stable state or handled by circuit design.*

**Learning Outcome Alignment:**

*   **CO1 (K3): Analyze asynchronous and clocked synchronous sequential circuits.** This section covers the steps and tools for analyzing the behavior of asynchronous circuits.

---

### 3. Hazards in Asynchronous Sequential Circuits

**Key Concepts:**

*   **Hazard:** An undesirable transient output or incorrect state change that occurs due to unequal delays in different signal paths. In asynchronous circuits, hazards can lead to false outputs or unintended state transitions.
*   **Types of Hazards:**
    *   **Static Hazard:** Occurs when a variable changes value, and the output *should* remain constant, but it momentarily flickers or changes to the wrong value before settling to the correct one.
        *   **Static-1 Hazard:** Output should be 1 but momentarily becomes 0.
        *   **Static-0 Hazard:** Output should be 0 but momentarily becomes 1.
    *   **Dynamic Hazard:** Occurs when a variable changes multiple times when it should change only once. This is often due to multiple changes in intermediate signal paths.
    *   **Functional Hazard:** Caused by multiple input changes occurring simultaneously or very close together, leading to a sequence of state changes that is not represented in the state table.
*   **Causes of Hazards:** Unequal propagation delays through different logic gate paths.
*   **Elimination of Hazards:**
    *   **Static Hazards:** Can be eliminated by adding redundant logic terms to the Boolean expressions. This is typically achieved by covering all transitions with product terms in the sum-of-products form. Karnaugh maps are used to identify and eliminate static hazards by ensuring all essential prime implicants are covered, and potentially adding non-essential prime implicants to cover critical transitions.
    *   **Dynamic Hazards:** More difficult to eliminate and often require careful design of the logic structure or using delay elements. Using only two-level AND-OR or OR-AND logic forms generally helps avoid dynamic hazards.

**Textbook References:**

*   **Givone, D. G. (2002). *Digital Principles & Design*.** Provides detailed explanations and methods for identifying and eliminating static and dynamic hazards. (Chapter 9: Sequential Circuits)
*   **Wakerly, J. F. (2008). *Digital Design*.** Offers in-depth coverage of hazard analysis and mitigation strategies. (Chapter 10: Asynchronous Sequential Circuits)
*   **Yarbrough, J. M. (2006). *Digital Logic Applications and Design*.** Discusses hazards in the context of state machine design. (Chapter 9: Sequential Logic Design)

**Example: Static-1 Hazard Elimination**

Consider a combinational circuit with output F and input A, B, C.
The Boolean expression is: F = AB + BC

Let's analyze this with a Karnaugh map:

```
     BC
A    00 01 11 10
--- ---- ---- ---- ----
0   0    0    0    0
1   0    1    1    1
```

The expression `F = AB + BC` covers the two 2-variable consensus regions.

Now, consider the input transition from `A=1, B=0, C=1` to `A=1, B=1, C=1`.
*   Initially (`A=1, B=0, C=1`):
    *   AB = 1 * 0 = 0
    *   BC = 0 * 1 = 0
    *   F = 0 + 0 = 0 (Incorrect, should be 1 based on the 111 cell)

*   During the transition (`A=1, B` changes from 0 to 1, `C=1`):
    *   AB term might become 0 momentarily if the delay through B in the AB path is longer than the delay through B in the BC path.
    *   BC term will become 1.
    *   If AB becomes 0 and BC becomes 1, F = 0 + 1 = 1. This is correct.

However, consider the transition from `A=0, B=1, C=0` to `A=1, B=1, C=0`.
*   Initially (`A=0, B=1, C=0`):
    *   AB = 0 * 1 = 0
    *   BC = 1 * 0 = 0
    *   F = 0 + 0 = 0 (Correct)

*   During the transition (`A` changes from 0 to 1, `B=1, C=0`):
    *   AB term goes from 0 to 1.
    *   BC term remains 0.
    *   If AB term momentarily passes through 0 before settling to 1 (due to delay), F could momentarily become 0. This is a static-0 hazard if the output should be 1.

**Eliminating Static-1 Hazard:**

We need to ensure that whenever A=1 and C=1, the output is 1, regardless of B. This can be achieved by adding the term `AC` to the expression.

Revised expression: `F = AB + BC + AC`

On the Karnaugh map, adding `AC` covers the `A=1, C=1` column:

```
     BC
A    00 01 11 10
--- ---- ---- ---- ----
0   0    0    0    0
1   0    1    1    1    <-- AC covers this column
```

The added `AC` term ensures that when `A=1` and `C=1`, even if `B` goes through an intermediate state, the `AC` term will keep the output `F` at 1.

**Learning Outcome Alignment:**

*   **CO2 (K3): Design hazard-free digital circuits.** This section directly addresses the understanding and elimination of hazards, a critical aspect of designing robust asynchronous circuits.

**Important Points to Remember:**

*   Hazards are transient behavior caused by propagation delays.
*   Static hazards affect a single output when the input changes but the output should not.
*   Dynamic hazards affect a single output when the input changes multiple times.
*   Karnaugh maps are a powerful tool for identifying and eliminating static hazards by adding redundant terms.

---

### 4. Race Conditions in Asynchronous Sequential Circuits

**Key Concepts:**

*   **Race Condition:** A situation where the final state of a sequential circuit depends on the relative speeds of signals or on the order in which events occur. In asynchronous circuits, races can occur between the internal state variables (flip-flops/latches).
*   **Types of Races:**
    *   **Non-critical Race:** When multiple state transitions occur, but the final state reached is the same regardless of the order of these transitions.
    *   **Critical Race:** When multiple state transitions can occur, and the final state reached depends on the order of these transitions. This is a serious problem as it leads to unpredictable behavior.
*   **Causes of Critical Races:**
    *   **Feedback Loops with Multiple State Variables:** When the next state depends on multiple current state variables, and these variables change as a result of the same input change.
    *   **Combinational Logic Delays:** The inherent delays in the combinational logic that determines the next state can cause different parts of the state variable logic to update at different times.
*   **Elimination of Critical Races:**
    *   **State Assignment:** The most common method. Assigning binary codes to states such that no two adjacent states in the state table have the same binary code for all variables. This ensures that a single input change causes only one state variable to change at a time, or if multiple change, they don't lead to ambiguous states.
    *   **Adding Extra State Variables:** Introducing additional state variables and intermediate states to ensure that changes occur in a controlled sequence. This can involve creating "cycle paths" in the state transition diagram.
    *   **Using Delays:** Inserting carefully chosen delay elements can synchronize signal arrivals, but this is often difficult to implement and predict precisely.

**Textbook References:**

*   **Wakerly, J. F. (2008). *Digital Design*.** Provides a thorough analysis of race conditions and state assignment techniques to avoid them. (Chapter 10: Asynchronous Sequential Circuits)
*   **Givone, D. G. (2002). *Digital Principles & Design*.** Explains the causes and remedies for race conditions. (Chapter 9: Sequential Circuits)
*   **Mano, M. M., & Ciletti, M. D. (2018). *Digital Design with an introduction to HDL, VHDL and Verilog*.** While focused on synchronous, it offers foundational understanding of sequential behavior and timing issues. (Chapter 6: Sequential Logic Design Principles)

**Example: Critical Race Scenario**

Consider a simplified asynchronous circuit with two state variables, Y1 and Y2, and an input X.
Suppose the next state logic is:
Y1' = X'Y1 + XY2
Y2' = XY1 + X'Y2'

If X=1, and the current state is Y1=1, Y2=0:
*   Y1' = 1' * 1 + 1 * 0 = 0 * 1 + 1 * 0 = 0 + 0 = 0
*   Y2' = 1 * 1 + 1' * 0 = 1 + 0 * 0 = 1 + 0 = 1
    *   Next state should be Y1=0, Y2=1.

Now, if there's a slight delay, and Y1 changes to 0 before Y2 is fully evaluated based on the original Y1=1:

*   During the transition, Y1 might be briefly 0.
*   The evaluation of Y2' = X*Y1 + X'*Y2' could be affected if Y1 is still being considered as 1 by some paths.
*   If Y1' is computed first and reaches 0, the logic for Y2' might then see Y1=0.
    *   Y2' = 1 * 0 + 1' * 0 = 0 + 0 = 0.
    *   This leads to an incorrect next state of Y1=0, Y2=0.

This illustrates a critical race where the output depends on the order of updates.

**State Assignment for Avoidance:**

A proper state assignment in the flow table is crucial. If states are assigned such that transitions require only one state variable to change at a time, critical races are often avoided. For instance, if a transition from state `00` to `11` is required, and both variables change simultaneously, it can lead to races. Assigning intermediate states like `01` or `10` can break this.

**Learning Outcome Alignment:**

*   **CO1 (K3): Analyze asynchronous and clocked synchronous sequential circuits.** This section focuses on a key analytical challenge in asynchronous circuits: race conditions.

**Important Points to Remember:**

*   Critical races lead to unpredictable circuit behavior.
*   State assignment is the primary technique for avoiding critical races.
*   Careful analysis of state transitions and potential feedback paths is necessary.

---

### 5. Asynchronous State Machine Design with ASM Charts

**Key Concepts:**

*   **Algorithmic State Machine (ASM) Chart:** A graphical representation of the behavior of a sequential circuit, similar to a flowchart but with specific symbols for states, decisions, and outputs. ASM charts are particularly useful for both synchronous and asynchronous designs.
*   **ASM Chart Components:**
    *   **State Box (Rectangular):** Represents a state of the machine. Contains the state name.
    *   **Decision Box (Diamond):** Represents a decision point based on an input condition. Transitions from the decision box are labeled with the input conditions.
    *   **Output Box (Curved or Oval):** Represents an output action.
        *   **Mealy Output:** Associated with a state transition (on the line between state boxes). Depends on the current state and current input.
        *   **Moore Output:** Associated with a state box. Depends only on the current state.
    *   **Link:** Connects different parts of the chart.
*   **Realization of Asynchronous Circuits using ASM Charts:**
    *   **Step 1: Derive the ASM Chart:** Represent the sequential logic's behavior using an ASM chart. This is often the first step in designing an asynchronous circuit.
    *   **Step 2: Convert ASM Chart to State Table:** Each state box in the ASM chart corresponds to a row in the state table. Decision boxes and transitions define the next states based on inputs.
    *   **Step 3: Minimize the State Table:** As discussed previously, reduce the number of states.
    *   **Step 4: Assign State Binary Codes:** This is a crucial step for asynchronous design to avoid hazards and races. Use Gray codes or specific assignments to minimize the number of state variables changing simultaneously.
    *   **Step 5: Derive Boolean Expressions:** From the reduced and encoded state table, derive the Boolean expressions for the next state logic (excitation logic for flip-flops/latches) and the output logic.
    *   **Step 6: Implement the Circuit:** Realize the circuit using logic gates and appropriate memory elements (e.g., SR latches, D latches).

**Textbook References:**

*   **Givone, D. G. (2002). *Digital Principles & Design*.** Discusses ASM charts as a design tool and their application to sequential circuits. (Chapter 9: Sequential Circuits)
*   **Mano, M. M., & Ciletti, M. D. (2018). *Digital Design with an introduction to HDL, VHDL and Verilog*.** While primarily for synchronous, the principles of ASM charting are universal for state machine design. (Chapter 6: Sequential Logic Design Principles)
*   **Wakerly, J. F. (2008). *Digital Design*.** Covers ASM charts and their use in systematic sequential circuit design, including asynchronous aspects. (Chapter 10: Asynchronous Sequential Circuits)

**Example: ASM Chart for a Simple Asynchronous Detector**

Let's design an asynchronous circuit that detects the input sequence "01" on input X. The output Y should be 1 when the sequence "01" is detected.

**ASM Chart:**

```
+-----------+
|   State S0  |
|  (Initial)  |
|     Y=0     |
+-----------+
      | X=0
      v
+-----------+
|   State S1  |
|     Y=0     |
+-----------+
      | X=1
      v
+-----------+
|   State S2  |
|     Y=1     |
+-----------+
      | X=0
      v
+-----------+
|   State S0  |  <-- Cycle back
|  (Initial)  |
|     Y=0     |
+-----------+

If X=1 in S0, remain in S0 (Y=0).
If X=0 in S1, remain in S1 (Y=0).
If X=1 in S2, remain in S2 (Y=1).
```

**State Table (from ASM):**

| Present State | Input X | Next State | Output Y |
| :------------ | :------ | :--------- | :------- |
| S0            | 0       | S1         | 0        |
| S0            | 1       | S0         | 0        |
| S1            | 0       | S1         | 0        |
| S1            | 1       | S2         | 0        |
| S2            | 0       | S0         | 1        |
| S2            | 1       | S2         | 1        |

**State Assignment (Crucial for Asynchronous):**

Let's try to avoid critical races. We have 3 states. We need at least `ceil(log2(3)) = 2` state variables (Y1, Y2).

*   **Assignment 1 (Simple):**
    *   S0: 00
    *   S1: 01
    *   S2: 10

    | Present State (Y1Y2) | Input X | Next State (Y1'Y2') | Output Y |
    | :------------------- | :------ | :------------------ | :------- |
    | 00                   | 0       | 01                  | 0        |
    | 00                   | 1       | 00                  | 0        |
    | 01                   | 0       | 01                  | 0        |
    | 01                   | 1       | 10                  | 0        |
    | 10                   | 0       | 00                  | 1        |
    | 10                   | 1       | 10                  | 1        |

    **Analysis for Races:**
    *   Transition `01` to `10` (S1 to S2) when X=1. Here, Y1 changes from 0 to 1. No critical race directly between state variables as only one changes.
    *   Transition `10` to `00` (S2 to S0) when X=0. Here, Y1 changes from 1 to 0. Again, only one state variable changes.

*   **Assignment 2 (Potentially problematic):**
    *   S0: 00
    *   S1: 10
    *   S2: 11

    Consider transition S0 (00) to S1 (10) when X=0. Y1 changes from 0 to 1.
    Consider transition S1 (10) to S2 (11) when X=1. Y2 changes from 0 to 1.
    Consider transition S2 (11) to S0 (00) when X=0. Both Y1 and Y2 change from 1 to 0. This could lead to a critical race.

**Hazard Elimination (for Assignment 1):**

Derive Boolean expressions for Y1', Y2', and Y.
*   **Y1':** From the table: `00` (X=0), `00` (X=1), `01` (X=0), `10` (X=1), `00` (X=0), `10` (X=1).
    Using K-map for Y1':
    ```
       XY2
    Y1 00 01 11 10
    --- ---- ---- ---- ----
    0  0    0    0    1
    1  0    1    1    0
    ```
    Y1' = Y1'X + Y1Y2 + XY2 (This would be for a synchronous design using D flip-flops)

    For asynchronous SR latches, we need separate expressions for S and R inputs. Let's simplify to focus on hazards.

    To eliminate static hazards in the next-state logic or output logic, we'd apply K-map simplification and add redundant terms as needed.

**Learning Outcome Alignment:**

*   **CO1 (K3): Analyze asynchronous and clocked synchronous sequential circuits.** ASM charts provide a structured way to analyze and represent the behavior of asynchronous circuits.
*   **CO2 (K3): Design hazard-free digital circuits.** The process of converting an ASM chart to a state table and then assigning states and deriving logic directly involves considering hazard avoidance.

**Important Points to Remember:**

*   ASM charts are powerful tools for designing sequential circuits, including asynchronous ones.
*   The conversion from ASM to state table and the subsequent state assignment are critical steps for correctness in asynchronous design.
*   The choice of state assignment is paramount to avoid critical races and simplify hazard elimination.

---

### 6. Realization of Asynchronous Sequential Circuits

**Key Concepts:**

*   **Memory Elements:** Asynchronous circuits often utilize fundamental memory elements like **SR latches** or **D latches**, rather than clocked flip-flops. These latches are directly controlled by the state transition logic.
*   **SR Latch:** A basic memory element with Set (S) and Reset (R) inputs. `Q=1` if S=1, `R=0`. `Q=0` if R=1, `S=0`. The `S=0, R=0` state is the hold state (`Q` retains its value). The `S=1, R=1` state is forbidden (or undefined).
*   **D Latch:** A memory element with a Data (D) input and an Enable (E) input. When E=1, `Q=D`. When E=0, `Q` holds its previous value.
*   **Logic Implementation:** The derived Boolean expressions for the next-state logic (which become the S and R inputs for SR latches, or D and E inputs for D latches) and the output logic are implemented using basic logic gates (AND, OR, NOT, NAND, NOR).
*   **Level-Triggered vs. Edge-Triggered:** Asynchronous circuits, by their nature, are more closely aligned with **level-triggered** behavior, as state changes occur when input levels satisfy certain conditions and persist. Clocked systems typically use edge-triggered flip-flops.
*   **Design Considerations for Latch-Based Implementation:**
    *   **SR Latch Hazards:** Static hazards in the S or R inputs of an SR latch can cause it to momentarily transition to the forbidden state or behave erratically.
    *   **SR Latch Undefined State:** The `S=1, R=1` condition must be carefully avoided in the logic design.

**Textbook References:**

*   **Givone, D. G. (2002). *Digital Principles & Design*.** Details the implementation of sequential circuits using latches and flip-flops. (Chapter 9: Sequential Circuits)
*   **Wakerly, J. F. (2008). *Digital Design*.** Focuses on the practical realization aspects, including the choice of memory elements and logic gate implementation. (Chapter 10: Asynchronous Sequential Circuits)
*   **Yarbrough, J. M. (2006). *Digital Logic Applications and Design*.** Covers the mapping of state tables to logic circuits. (Chapter 9: Sequential Logic Design)

**Example: Implementing a Simple SR Latch-Based Circuit**

Let's use the sequence detector example with state assignment S0:00, S1:01, S2:10. We'll use SR latches.

**State Table with Next State and Excitation:**

Let Y1 be controlled by latch L1 (S1, R1) and Y2 by latch L2 (S2, R2).

| Present State (Y1Y2) | Input X | Next State (Y1'Y2') | Y1' (S1,R1) | Y2' (S2,R2) | Output Y |
| :------------------- | :------ | :------------------ | :---------- | :---------- | :------- |
| 00                   | 0       | 01                  | S1=1, R1=0  | S2=0, R2=1  | 0        |
| 00                   | 1       | 00                  | S1=0, R1=0  | S2=0, R2=0  | 0        |
| 01                   | 0       | 01                  | S1=0, R1=0  | S2=0, R2=0  | 0        |
| 01                   | 1       | 10                  | S1=1, R1=0  | S2=0, R2=1  | 0        |
| 10                   | 0       | 00                  | S1=0, R1=1  | S2=0, R2=1  | 1        |
| 10                   | 1       | 10                  | S1=0, R1=0  | S2=0, R2=0  | 1        |

**Deriving Boolean Expressions for S1, R1, S2, R2, and Y:**

Using K-maps:

**Y1' (Next State of Y1):**
Map Y1' values based on Present Y1Y2 and Input X.

```
       XY2
    Y1 00 01 11 10
    --- ---- ---- ---- ----
    0  0    0    0    1   <-- S1 = XY2 (simplified using the specific entries)
    1  0    1    1    0   <-- R1 = Y1'X + Y1X' + Y1X = Y1X + Y1'X' (from K-map for R1)
```
A more accurate way for SR latches is to map the (S, R) requirements directly.

**S1:** (Set input for Y1)
S1 = 1 when (Y1Y2=01 and X=0) OR (Y1Y2=10 and X=1)
S1 = (Y1'Y2X') + (Y1Y2'X)

**R1:** (Reset input for Y1)
R1 = 1 when (Y1Y2=10 and X=0) OR (Y1Y2=00 and X=0)
R1 = (Y1Y2'X') + (Y1'Y2'X')
R1 = Y2'X' + Y1'Y2'X' = (Y2'+Y1')X'

**S2:** (Set input for Y2)
S2 = 1 when (Y1Y2=00 and X=0) OR (Y1Y2=01 and X=1)
S2 = (Y1'Y2'X') + (Y1'Y2X)

**R2:** (Reset input for Y2)
R2 = 1 when (Y1Y2=00 and X=0) OR (Y1Y2=01 and X=1)
R2 = (Y1'Y2'X') + (Y1'Y2X)
Wait, S2 and R2 are the same here. This indicates a problem in our state assignment or derivation. Let's re-check.

**Corrected SR derivation:**

| Present State (Y1Y2) | Input X | Next State (Y1'Y2') | Y1' (S1,R1) | Y2' (S2,R2) | Output Y |
| :------------------- | :------ | :------------------ | :---------- | :---------- | :------- |
| 00                   | 0       | 01                  | S1=1, R1=0  | S2=0, R2=1  | 0        |
| 00                   | 1       | 00                  | S1=0, R1=0  | S2=0, R2=0  | 0        |
| 01                   | 0       | 01                  | S1=0, R1=0  | S2=0, R2=0  | 0        |
| 01                   | 1       | 10                  | S1=1, R1=0  | S2=0, R2=1  | 0        |
| 10                   | 0       | 00                  | S1=0, R1=1  | S2=0, R2=1  | 1        |
| 10                   | 1       | 10                  | S1=0, R1=0  | S2=0, R2=0  | 1        |

**Mapping to find S1, R1, S2, R2, Y:**

**S1 (for Y1):**
K-Map for S1:
```
       XY2
    Y1 00 01 11 10
    --- ---- ---- ---- ----
    0  0    0    0    1   <-- S1 = Y2X
    1  0    1    1    0
```
S1 = Y2X

**R1 (for Y1):**
K-Map for R1:
```
       XY2
    Y1 00 01 11 10
    --- ---- ---- ---- ----
    0  0    0    0    0
    1  0    1    0    1   <-- R1 = Y2X' + Y2'X' = X'(Y2+Y2') = X'
```
R1 = X' (This seems too simple, let's check the 10 row, X=0. Y1Y2=10, X=0 -> Y1'Y2'=00. This requires R1=1. So R1 = Y1Y2'X' + Y1'Y2'X' = Y2'X'.)
R1 = Y2'X'

**S2 (for Y2):**
K-Map for S2:
```
       XY2
    Y1 00 01 11 10
    --- ---- ---- ---- ----
    0  0    0    0    0
    1  0    0    1    1   <-- S2 = Y1X
```
S2 = Y1X

**R2 (for Y2):**
K-Map for R2:
```
       XY2
    Y1 00 01 11 10
    --- ---- ---- ---- ----
    0  1    0    0    0
    1  0    0    0    1   <-- R2 = Y1'Y2'X' + Y1'Y2X = Y1'(X' + X) = Y1'  (Incorrect logic derivation from map)
```
Let's redo R2 map for `Y1'Y2'X'` and `Y1Y2'X'`.
From the table:
*   (00, X=0) -> (01) requires R2=1. This is `Y1'Y2'X'`.
*   (01, X=1) -> (10) requires R2=1. This is `Y1'Y2X`.

K-Map for R2:
```
       XY2
    Y1 00 01 11 10
    --- ---- ---- ---- ----
    0  1    0    0    1   <-- R2 = Y1'X' + Y1'YX = Y1'(X' + YX)
    1  0    0    0    0
```
R2 = Y1'X' + Y1'YX  (Simplifying Y1'(X' + YX) = Y1'(X' + Y) by consensus)
R2 = Y1'(X' + Y)

**Output Y:**
K-Map for Y:
```
       XY2
    Y1 00 01 11 10
    --- ---- ---- ---- ----
    0  0    0    0    0
    1  0    0    1    1   <-- Y = Y1X
```
Y = Y1X

**Final Logic Expressions:**
*   S1 = Y2X
*   R1 = Y2'X'
*   S2 = Y1X
*   R2 = Y1'(X' + Y)
*   Y = Y1X

**Implementation:**
This would involve SR latches for Y1 and Y2, with their S and R inputs connected to these derived logic expressions. The output Y is directly connected to the Y1X logic.

**Learning Outcome Alignment:**

*   **CO1 (K3): Analyze asynchronous and clocked synchronous sequential circuits.** The realization process involves translating the analysis (state table) into hardware.
*   **CO4 (K3): Apply VHDL programming in digital system design.** While not explicitly shown here, these Boolean expressions would be the basis for VHDL code describing the asynchronous circuit.

**Important Points to Remember:**

*   Asynchronous circuits often use SR or D latches.
*   The derivation of S and R inputs for SR latches is crucial and must avoid the forbidden state.
*   Careful mapping of state tables to logic expressions is required, and hazard elimination should be applied during this stage.

---

### 7. Practice Questions and Exercises

**Question 1:**
Differentiate between synchronous and asynchronous sequential circuits, highlighting their key characteristics, advantages, and disadvantages.

**Answer:**
*   **Synchronous:** Controlled by a clock, state changes occur at clock edges. Advantages: predictable, easier to design for complex systems. Disadvantages: clock distribution overhead, potentially slower if not fully utilized.
*   **Asynchronous:** State changes triggered by input signal arrival, no clock. Advantages: potential for higher speed, lower power. Disadvantages: susceptible to races and hazards, more complex design and analysis.

**Question 2:**
Explain the concept of a "critical race" in asynchronous sequential circuits. How can it be avoided?

**Answer:**
A critical race occurs when the final state of a circuit depends on the relative timing of signal transitions. It leads to unpredictable behavior. Critical races can be avoided primarily through careful **state assignment** in the state table, ensuring that transitions involve only single state variable changes or carefully managed multi-variable changes. Adding extra intermediate states can also help.

**Question 3:**
What is a static-1 hazard? Illustrate with a Boolean expression and a Karnaugh map how it can be eliminated.

**Answer:**
A static-1 hazard is when an output should remain a constant '1' but momentarily glitches to '0' during an input transition.
Example: F = AB + BC. Transition from `A=1, B=0, C=1` to `A=1, B=1, C=1`.
K-Map:
```
     BC
A    00 01 11 10
--- ---- ---- ---- ----
0   0    0    0    0
1   0    1    1    1
```
The transition from `101` to `111` involves B changing from 0 to 1. The term `AB` goes from `1*0=0` to `1*1=1`. The term `BC` goes from `0*1=0` to `1*1=1`. If `AB` path is slower, F might momentarily be `0+0=0`.
Elimination: Add the redundant term `AC`. F = AB + BC + AC. This ensures that when `A=1` and `C=1`, the output is always 1.

**Question 4:**
Design an ASM chart for an asynchronous circuit that outputs '1' for one clock pulse whenever the input sequence "110" is detected on input X. Assume the input X changes only when the previous sequence is completely processed. The output Y should be 0 except for the pulse.

**Answer:**
(This requires drawing the ASM chart, which is difficult to represent in text. The design would involve states for: Initial (S0), detecting first '1' (S1), detecting second '1' (S2), detecting '0' and outputting Y=1 (S3), and then returning to initial state.)

*   **S0:** Initial, Y=0. If X=1, go to S1. Else stay S0.
*   **S1:** Seen '1', Y=0. If X=1, go to S2. Else if X=0, stay S1.
*   **S2:** Seen '11', Y=0. If X=0, go to S3. Else if X=1, stay S2.
*   **S3:** Seen '110', Y=1. If X=0, go to S0. Else if X=1, go to S1 (assuming a new sequence can start).

*(Note: The exact state transition logic for handling overlapping or non-overlapping sequences needs careful definition. The provided example assumes non-overlapping for simplicity in conceptualization.)*

---

### 8. Conclusion

Asynchronous sequential circuits, while less common in modern complex designs due to inherent timing challenges, are fundamental to understanding the breadth of digital design. Their analysis requires careful consideration of propagation delays, leading to issues like hazards and race conditions. Techniques like state minimization, proper state assignment, and redundant logic addition are crucial for designing hazard-free and race-free asynchronous circuits. ASM charts provide a structured approach to their design, bridging the gap from algorithmic description to hardware realization using basic memory elements like latches.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
