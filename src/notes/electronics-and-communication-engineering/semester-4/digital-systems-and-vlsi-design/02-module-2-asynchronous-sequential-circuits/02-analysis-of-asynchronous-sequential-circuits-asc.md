---
title: "Analysis of Asynchronous Sequential Circuits (ASC)"
subject: "DIGITAL SYSTEMS AND VLSI DESIGN"
module: "Module 2: Asynchronous Sequential Circuits"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe750"
status: "completed"
scrapedAt: "2026-05-23T17:48:07.357Z"
---
# DIGITAL SYSTEMS AND VLSI DESIGN

## Module 2: Asynchronous Sequential Circuits (ASC)

### Topic: Analysis of Asynchronous Sequential Circuits (ASC)

---

### 1. Introduction to Asynchronous Sequential Circuits (ASC)

**Learning Outcome:** Understand the fundamental differences between synchronous and asynchronous sequential circuits and the importance of analyzing ASCs.

**Key Concepts:**

*   **Synchronous Sequential Circuits (SSC):** Operate based on a central clock pulse. All state changes occur simultaneously with the clock edge.
    *   *Textbook Reference:* Givone, Chapter 8; Wakerly, Chapter 7.
*   **Asynchronous Sequential Circuits (ASC):** Do not use a clock signal. State changes occur in response to input changes, and these changes propagate through the circuit.
    *   *Textbook Reference:* Givone, Chapter 9; Wakerly, Chapter 8.
*   **Key Characteristics of ASCs:**
    *   **Speed:** Can be faster than SSCs as they are not limited by a clock period.
    *   **Power Consumption:** Can be lower as only the active parts of the circuit consume power.
    *   **Design Complexity:** More difficult to design and analyze due to the absence of a clock and the potential for timing-related issues.
    *   **Input Changes:** Outputs depend on the sequence of input changes.

**Importance of Analysis:**

*   To understand the behavior and functionality of an ASC.
*   To identify and resolve potential timing issues like races and hazards.
*   To ensure the circuit operates correctly under all possible input sequences.

---

### 2. Primitive Flow Tables and State Diagrams

**Learning Outcome:** Define and construct primitive flow tables and state diagrams for asynchronous sequential circuits.

**Key Concepts:**

*   **State:** A configuration of the internal memory elements of the circuit.
*   **Input Variables:** External signals that affect the circuit's behavior.
*   **Output Variables:** Signals produced by the circuit.
*   **Present State:** The current state of the circuit.
*   **Next State:** The state the circuit will transition to based on the current state and input.
*   **Primitive Flow Table:** A tabular representation of an ASC where:
    *   Rows represent states.
    *   Columns represent input combinations.
    *   Entries indicate the next state and the output.
    *   **Crucially, it only lists transitions triggered by *changes* in inputs.**
    *   It is called "primitive" because it may contain multiple states that are not yet merged.
    *   *Textbook Reference:* Givone, Section 9-1; Wakerly, Section 8-1.
*   **State Diagram:** A graphical representation of an ASC where:
    *   Circles represent states.
    *   Arrows represent transitions between states.
    *   Labels on arrows indicate the input conditions that cause the transition and the corresponding output.

**Example:** (Illustrative – specific examples are best constructed from circuit schematics)

Consider a simple circuit with input X and output Y.

*   **Circuit Behavior:** Y=1 if X has transitioned from 0 to 1 at least once since the last time X transitioned from 1 to 0. Otherwise, Y=0.
*   **Primitive Flow Table Construction:**
    *   We need states to remember if X has transitioned from 0 to 1 and if it has transitioned from 1 to 0.
    *   Let's assume we have two inputs: `X1` and `X2`.
    *   States: S1, S2, S3, S4.
    *   Inputs: X1X2 (00, 01, 10, 11).

    | Present State | X1X2=00 | X1X2=01 | X1X2=10 | X1X2=11 | Output Y |
    | :------------ | :------ | :------ | :------ | :------ | :------- |
    | S1            | 1,0     | 1,0     | 2,0     | 1,0     | 0        |
    | S2            | 1,1     | 3,0     | 2,0     | 2,0     | 1        |
    | S3            | 1,1     | 3,0     | 4,0     | 3,0     | 0        |
    | S4            | 1,1     | 4,0     | 2,0     | 4,0     | 0        |

    *   **Explanation of Entries (Next State, Output):**
        *   If in S1 and X1X2 changes from 01 to 11 (no change in X1/X2), stay in S1, Y=0.
        *   If in S1 and X1X2 changes from 00 to 10 (X1 changes from 0 to 1), go to S2, Y=0. (This is a 0->1 transition).

**Important Point to Remember:** Primitive flow tables are initial representations. They might not be minimal and can contain redundancies.

---

### 3. State Reduction and Primitive Flow Table Reduction

**Learning Outcome:** Perform state reduction on primitive flow tables to obtain minimal flow tables.

**Key Concepts:**

*   **State Equivalence:** Two states are equivalent if, for every possible input sequence, they produce the same output sequence and lead to equivalent next states.
*   **Primitive Flow Table Reduction:** The process of merging equivalent states in a primitive flow table to obtain a minimal flow table. This simplifies the circuit design.
    *   *Textbook Reference:* Givone, Section 9-1; Wakerly, Section 8-2.
*   **Steps for Reduction:**
    1.  **Identify Equivalent States:** Use the state equivalence theorem. States `Si` and `Sj` are equivalent if:
        *   They are in the same row in the primitive flow table.
        *   For each input combination, their next states `Sk` and `Sl` are equivalent.
        *   For each input combination, their outputs are the same.
    2.  **Merger Graph/Table:** A graphical or tabular method to systematically find equivalent states.
        *   **Merger Graph:** Nodes represent states. An edge between two states indicates they are *not* equivalent. If there is a path between two states, they are not equivalent.
        *   **Merger Table:** A table listing pairs of states and checking for equivalence.
    3.  **Form Merged States:** Group equivalent states into single states in the minimal flow table.

**Example:** (Continuing from the previous example, assuming S1 and S3 are found to be equivalent, and S2 and S4 are found to be equivalent).

*   **Merged States:** Let `A` represent {S1, S3} and `B` represent {S2, S4}.

*   **Minimal Flow Table:**

    | Present State | X1X2=00 | X1X2=01 | X1X2=10 | X1X2=11 | Output Y |
    | :------------ | :------ | :------ | :------ | :------ | :------- |
    | A             | A,0     | A,0     | B,0     | A,0     | 0        |
    | B             | A,1     | B,0     | B,0     | B,0     | 1        |

    *   **Explanation of Entries:**
        *   If in state `A` (which is {S1, S3}), and X1X2 goes from 00 to 01 (no change), the next state in S1 is S1 (mapped to A), and in S3 is S3 (mapped to A). Output is 0 in both. So, next state is A, output 0.
        *   If in state `A` ({S1, S3}), and X1X2 goes from 00 to 10 (X1: 0->1), next state in S1 is S2 (mapped to B), output 0. Next state in S3 is S4 (mapped to B), output 0. So, next state is B, output 0.

**Important Point to Remember:** State reduction is crucial for simplifying the circuit. The goal is to find the minimum number of states required to implement the circuit's logic.

---

### 4. Derivation of Transition Tables

**Learning Outcome:** Convert the minimal flow table into a transition table.

**Key Concepts:**

*   **Transition Table:** A table that explicitly lists the next state for each state and input combination. It's a direct precursor to implementing the circuit using flip-flops.
    *   *Textbook Reference:* Givone, Section 9-2; Wakerly, Section 8-2.
*   **Primary State Variables:** The state variables that represent the states of the ASC.
*   **Secondary State Variables:** The state variables of the memory elements (flip-flops).
*   **Derivation Steps:**
    1.  **Assign Binary State Assignments:** Assign unique binary codes to each state in the minimal flow table.
    2.  **Add Secondary State Variables:** Include columns for the secondary state variables in the transition table.
    3.  **Determine Next Secondary State Variables:** For each state and input, determine the secondary state variable values for the next state based on the binary assignment.
    4.  **Determine Output Values:** List the output values corresponding to each state and input.

**Example:** (Using the minimal flow table from the previous example)

*   **Minimal Flow Table:**
    | Present State | X1X2=00 | X1X2=01 | X1X2=10 | X1X2=11 | Output Y |
    | :------------ | :------ | :------ | :------ | :------ | :------- |
    | A             | A,0     | A,0     | B,0     | A,0     | 0        |
    | B             | A,1     | B,0     | B,0     | B,0     | 1        |

*   **Binary State Assignment:**
    *   A = 0
    *   B = 1

*   **Transition Table:**
    Let `Y1` be the secondary state variable.

    | Present State (Y1) | Input X1X2 | Next State (Y1) | Output Y |
    | :----------------- | :--------- | :-------------- | :------- |
    | 0                  | 00         | 0               | 0        |
    | 0                  | 01         | 0               | 0        |
    | 0                  | 10         | 1               | 0        |
    | 0                  | 11         | 0               | 0        |
    | 1                  | 00         | 0               | 1        |
    | 1                  | 01         | 1               | 0        |
    | 1                  | 10         | 1               | 0        |
    | 1                  | 11         | 1               | 0        |

**Important Point to Remember:** The transition table is crucial for designing the logic circuit. It maps the current state and inputs to the required next state and outputs.

---

### 5. Race Conditions and Cycles

**Learning Outcome:** Identify and understand race conditions and cycles in asynchronous sequential circuits.

**Key Concepts:**

*   **Race Condition:** Occurs when a change in an input variable can cause state variables to change in an unpredictable sequence due to unequal propagation delays through different logic paths.
    *   **Types of Races:**
        *   **Non-critical Race:** All state variables involved eventually reach their correct final state, even if there's a temporary incorrect intermediate state. The circuit still functions correctly.
        *   **Critical Race:** The state variables involved do not settle to their correct final state, leading to incorrect operation or oscillation.
    *   *Textbook Reference:* Givone, Section 9-3; Wakerly, Section 8-3.
*   **Cycle:** A sequence of state transitions that repeats indefinitely. This can occur in ASCs if not properly managed.
    *   *Textbook Reference:* Givone, Section 9-3; Wakerly, Section 8-3.

**Identification:**

*   **From Flow Tables/Transition Tables:** Look for states where multiple state variables change simultaneously due to a single input change. If the order of these changes matters and can lead to different final states, a race condition exists.
*   **From Circuits:** Analyze propagation delays. If the delay through different paths to flip-flop inputs is significantly different, races are more likely.

**Example:**

Consider a transition where a state changes from `00` to `11` due to an input change. If one flip-flop changes its state before the other, the circuit might briefly go through states `01` or `10`, potentially leading to an unintended state transition if these intermediate states are not handled correctly.

*   **Critical Race Example:** A state transition from `00` to `11` where if the first `0` becomes `1` before the second `0` becomes `1`, it might lead to state `10` which then transitions to `00` (oscillation), instead of the intended `11`.

**Important Point to Remember:** Critical races are a major problem in ASC design and must be eliminated. Non-critical races are acceptable as long as the final state is reached correctly.

---

### 6. State Assignment (Excitation Table and Output Logic)

**Learning Outcome:** Address state assignment problems to eliminate critical races and derive the excitation and output logic.

**Key Concepts:**

*   **State Assignment:** The process of assigning unique binary codes to the states in the minimal flow table. The choice of state assignment can significantly impact the circuit's complexity and the presence of races.
    *   *Textbook Reference:* Givone, Section 9-3; Wakerly, Section 8-4.
*   **Goal of State Assignment:**
    *   Eliminate critical races.
    *   Minimize the number of required memory elements.
    *   Minimize the complexity of the logic gates.
*   **Hazard-Free State Assignment:** A state assignment technique that ensures no critical races occur for any input change.
    *   **Methods:**
        *   **Linear Graph Method:** Uses a graph to identify compatible pairs of state assignments that avoid critical races. States that must coexist in the same "cube" of the Karnaugh map for the secondary state variables should be assigned adjacent codes.
        *   **Partitioning Method:** Divides states into groups (partitions) based on their next states and outputs. States within the same partition are generally compatible.
*   **Excitation Table:** Similar to a transition table but focuses on the flip-flop inputs (e.g., J, K, D, T) required to achieve the desired next state.
    *   *Textbook Reference:* Givone, Section 9-2; Wakerly, Section 8-5.
*   **Output Logic:** The combinational logic that generates the circuit's outputs based on the current state and input variables.
    *   *Textbook Reference:* Givone, Section 9-2; Wakerly, Section 8-5.

**Example:** (Illustrative - selecting a state assignment to eliminate a race)

Suppose we have a transition from state `00` to `11`, involving a potential race.

*   **State Assignment 1:** `A=00`, `B=11`. Transition from `00` to `11`. This might be problematic if intermediate states like `01` or `10` are problematic.
*   **State Assignment 2:** `A=00`, `B=01`. Transition from `00` to `01`. This is potentially safer as only one bit changes.

The choice of state assignment impacts which intermediate states the circuit might pass through. A good state assignment ensures that all possible intermediate states lead to the correct final state.

**Deriving Logic:**

Once a suitable state assignment is chosen and the transition/excitation table is complete, Karnaugh maps are used to derive the Boolean expressions for the secondary state variable inputs and the outputs.

*   **Secondary State Variable Logic:** `Y1_next = f(Y1, X1, X2)`
*   **Output Logic:** `Y = g(Y1, X1, X2)`

**Important Point to Remember:** The correct state assignment is crucial for eliminating critical races and ensuring reliable operation of the ASC.

---

### 7. Hazards in Asynchronous Sequential Circuits

**Learning Outcome:** Identify and eliminate different types of hazards in asynchronous sequential circuits.

**Key Concepts:**

*   **Hazard:** An undesired transient output change that can occur in a combinational circuit during a state transition due to unequal propagation delays.
    *   *Textbook Reference:* Givone, Section 9-4; Wakerly, Section 8-7.
*   **Types of Hazards:**
    *   **Static Hazard:** The output momentarily changes to the opposite logic level and then returns to the correct level when it should remain constant.
        *   **Static-1 Hazard:** Output momentarily goes to 0 when it should stay 1.
        *   **Static-0 Hazard:** Output momentarily goes to 1 when it should stay 0.
    *   **Dynamic Hazard:** The output changes multiple times when it should change only once.
    *   **Functionally Insecure Hazard:** A static hazard that can cause the circuit to enter an unintended state.

*   **Causes:** Occur in the output logic or the next-state logic when a single input or state variable change causes multiple product terms in the sum-of-products (SOP) expression to change their truth value simultaneously.
*   **Elimination:**
    *   **Static Hazards:** Add redundant AND gates to cover essential prime implicants that span the hazard-causing transition. This ensures that at least one product term remains active during the transition.
    *   **Dynamic Hazards:** Generally more complex to eliminate and often require redesigning the logic using different gate types or adding extra logic.

**Example:**

Consider a combinational logic function `F = AB + A'C`. If `A` changes from 1 to 0 while `B=1` and `C=1`, the function should remain 1:
*   Term 1: `AB` changes from `1*1=1` to `0*1=0`.
*   Term 2: `A'C` changes from `0*1=0` to `1*1=1`.
*   Result: `F` goes from `1+0=1` to `0+1=1`.
However, if `A` changes very slowly, the first term might go to 0 before the second term becomes 1, causing `F` to momentarily become 0. This is a static-1 hazard.

To fix this, we can add a redundant term `BC`. The function becomes `F = AB + A'C + BC`. Now, when `A` changes, if `AB` goes to 0, `BC` is still 1, and `A'C` becomes 1, keeping `F` at 1.

**Important Point to Remember:** Hazards, especially static-0 hazards, can cause ASCs to malfunction by leading them into unintended states. They must be carefully identified and eliminated using appropriate state assignment and logic design techniques.

---

### 8. Flow Table and Transition Table Reduction

**Learning Outcome:** (Reiteration for emphasis and practical application) Reduce flow tables and transition tables to their minimal form, ensuring no critical races.

**Key Concepts:**

*   This topic is a crucial part of the analysis and design process. The reduction ensures:
    *   **Minimality:** The simplest possible circuit implementation.
    *   **Race Freedom:** Elimination of critical races through careful state assignment.
    *   **Efficiency:** Reduced hardware complexity and potentially faster operation.

**Revisiting Techniques:**

*   **State Equivalence:** The foundation of flow table reduction.
*   **Merger Graph/Table:** Tools for systematically identifying equivalent states.
*   **State Assignment:** The critical step to resolve races. Techniques like the linear graph method ensure that states that can be simultaneously active during a transition are assigned adjacent codes.

**Practice:** This skill is best developed through extensive practice with various flow table examples.

**Important Point to Remember:** The entire process from primitive flow table to minimal transition table with a valid state assignment is iterative and requires careful attention to detail.

---

### 9. Design of Asynchronous Sequential Circuits

**Learning Outcome:** Design asynchronous sequential circuits based on given specifications, addressing all analysis considerations.

**Key Concepts:**

The analysis steps are directly applied in reverse for design:

1.  **Specification Understanding:** Clearly define the desired behavior of the ASC.
2.  **Primitive Flow Table Construction:** Draft an initial flow table based on the specifications.
3.  **State Reduction:** Minimize the primitive flow table by merging equivalent states.
4.  **State Assignment:** Assign binary codes to states to eliminate critical races. This is the most challenging step.
5.  **Transition Table Generation:** Create the transition table based on the minimal flow table and the chosen state assignment.
6.  **Excitation Table and Output Logic Derivation:** Determine the required flip-flop inputs and output logic using Karnaugh maps.
7.  **Hazard Detection and Elimination:** Analyze the derived logic for hazards and add necessary redundant terms or redesign logic if needed.
8.  **Circuit Implementation:** Build the circuit using appropriate flip-flops (e.g., SR, JK, D) and combinational logic gates.

*   *Textbook Reference:* Givone, Chapter 9; Wakerly, Chapter 8.
*   *Course Outcome Alignment:* CO2 directly addresses the design and analysis of ASCs.

**Example:** Designing a simple two-button lock that opens when button A is pressed and then button B is pressed, but resets if button C is pressed at any time.

*   **States:**
    *   S0: Initial state (waiting for A).
    *   S1: Button A pressed (waiting for B).
    *   S2: Button B pressed after A (lock open).
    *   S3: Button C pressed (reset).

*   **Primitive Flow Table (simplified):**

    | Present State | Inputs (A, B, C) | Next State, Output (Lock) |
    | :------------ | :--------------- | :------------------------ |
    | S0            | 000              | S0, 0                     |
    | S0            | 100              | S1, 0                     |
    | S0            | 001              | S0, 0                     |
    | S1            | 000              | S1, 0                     |
    | S1            | 010              | S2, 1                     |
    | S1            | 001              | S0, 0                     |
    | S2            | 000              | S0, 0                     |
    | S2            | 001              | S0, 0                     |
    | S3            | -                | S0, 0                     |

    *(Note: This is a highly simplified example. A proper primitive flow table would handle all input combinations and transitions.)*

**Important Point to Remember:** Designing ASCs is a detailed process. Each step, especially state assignment and hazard elimination, is critical for a correctly functioning circuit.

---

### 10. Analysis of Arithmetic Logic Units (ALUs)

**Learning Outcome:** (This learning outcome is broader than just ASC analysis but can involve ASC principles if the ALU is designed asynchronously.) Analyze the behavior of ALUs, potentially including asynchronous designs.

**Key Concepts:**

*   **Arithmetic Logic Unit (ALU):** A digital circuit that performs arithmetic and logical operations on binary numbers.
*   **Operations:** Addition, subtraction, logical AND, OR, XOR, NOT, shifts, etc.
*   **Inputs:** Operands (A, B), operation select lines.
*   **Outputs:** Result of the operation, status flags (zero, carry, overflow).
*   **Analysis in ASC Context:** While most ALUs are synchronous, understanding the timing of operations and potential race conditions (if designed asynchronously) is relevant. The analysis principles discussed for ASCs would apply to any asynchronous parts of an ALU.

*   *Course Outcome Alignment:* CO2 includes designing ALUs, implying an understanding of their operation.

**Important Point to Remember:** While not exclusively an ASC topic, understanding the timing and potential for asynchronous behavior in any digital circuit, including ALUs, aligns with the broader scope of ASC analysis.

---

### Practice Questions and Answers

**Question 1:** What is the primary difference between synchronous and asynchronous sequential circuits?

**Answer:** Synchronous circuits use a clock signal to synchronize state transitions, while asynchronous circuits change states based on input changes without a clock.

---

**Question 2:** Explain the concept of a "critical race" in ASCs.

**Answer:** A critical race occurs when a change in an input variable can cause state variables to change in an unpredictable sequence due to unequal propagation delays, leading to potentially incorrect or oscillating final states.

---

**Question 3:** How can static-1 hazards be eliminated in combinational logic?

**Answer:** Static-1 hazards can be eliminated by adding redundant product terms to the SOP expression that cover the transition causing the hazard. This ensures at least one true term remains active during the transition.

---

**Question 4:** Given a minimal flow table with states A and B, and a transition from A to B when input X changes from 0 to 1. If the state assignment is A=00 and B=01, what is the next state of the secondary variable Y1?

**Answer:** If A=00 and B=01, the next state of Y1 is 0. (Because B=01, and Y1 represents the first bit, which is 0).

*Self-Correction Note:* The answer should be based on the secondary variable assignment. If Y1 represents the first bit, and B=01, then Y1 for state B is 0. This demonstrates the need for careful transition table construction. Let's rephrase:
**Answer:** If the state assignment is A=00 and B=01, and Y1 is the first secondary state variable (representing the least significant bit of the state code), then for state B (01), Y1 = 0. The transition table would show Y1 becoming 0 when the circuit enters state B.

---

**Question 5:** State two advantages of asynchronous sequential circuits over synchronous sequential circuits.

**Answer:**
1.  Potentially faster operation (not limited by clock period).
2.  Lower power consumption (only active parts consume power).

---

### Important Points to Remember

*   **No Clock:** The absence of a clock is the defining feature and the main source of design complexity in ASCs.
*   **Propagation Delays:** Critical for ASC analysis. Differences in delays can cause races.
*   **Races and Hazards:** The primary challenges to address in ASC design. Critical races and static-0 hazards are particularly detrimental.
*   **State Assignment is Key:** A well-chosen state assignment is essential for eliminating critical races.
*   **Minimization:** Flow table reduction is crucial for efficient circuit design.
*   **Systematic Approach:** ASC design requires a rigorous, step-by-step process.

---

This comprehensive set of notes covers the analysis of asynchronous sequential circuits, aligning with the specified learning outcomes and course outcomes for Digital Systems and VLSI Design. The notes incorporate concepts from the provided textbooks and offer a structured approach to understanding this complex topic.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
