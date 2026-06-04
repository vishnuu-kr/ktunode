---
title: "State assignment and reduction"
subject: "DIGITAL SYSTEMS AND VLSI DESIGN"
module: "Module 1: Clocked Synchronous Networks"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe74b"
status: "completed"
scrapedAt: "2026-05-23T17:48:04.563Z"
---
# DIGITAL SYSTEMS AND VLSI DESIGN - Module 1: Clocked Synchronous Networks

## Topic: State Assignment and Reduction

This topic delves into the optimization of sequential circuits by minimizing the number of states and assigning binary codes to these states efficiently. This is crucial for reducing the complexity and cost of the resulting digital hardware.

---

### 1. Introduction to State Assignment and Reduction

Sequential circuits, particularly clocked synchronous sequential networks (CSSNs), are characterized by their memory elements (flip-flops) and combinational logic. The behavior of a sequential circuit is defined by its state, inputs, and transitions.

**Key Concepts:**

*   **State Diagram:** A graphical representation of a sequential circuit's behavior, showing states and transitions between them based on inputs.
*   **State Table:** A tabular representation of the state diagram, listing current state, input, next state, and output.
*   **Memory Elements (Flip-Flops):** Store the current state of the circuit. The number of flip-flops determines the number of possible states (2^n, where n is the number of flip-flops).
*   **State Assignment:** The process of assigning unique binary codes to each state of a sequential circuit.
*   **State Reduction:** The process of minimizing the number of states in a sequential circuit without changing its external behavior.

**Learning Outcome Alignment:**

*   **K3 (CO1):** Understand and apply concepts of state assignment and reduction for optimizing CSSNs.

**Textbook References:**

*   **Givone, D. G. (2017).** *Digital Principles & Design.* (Chapter on Sequential Circuit Design) - Discusses state tables and state reduction techniques.
*   **Wakerly, J. F. (2008).** *Digital Design: Principles and Practices.* (Chapter on Sequential Logic) - Covers state minimization and assignment.
*   **Mano, M. M., & Ciletti, M. D. (2017).** *Digital Design: With an Introduction to the Verilog HDL, VHDL, and SystemVerilog.* (Chapter on Sequential Logic) - Explains state reduction and assignment strategies.

---

### 2. State Reduction

The goal of state reduction is to find an equivalent sequential circuit with the minimum number of states. This directly impacts the number of flip-flops required and the complexity of the logic.

**Key Concepts:**

*   **Equivalent States:** Two states are considered equivalent if, for every possible input sequence, they produce the same output sequence and transition to equivalent next states.
*   **Implication Table (Pairwise State Equivalence):** A systematic method for identifying equivalent states.
*   **State Minimization Procedure:**
    1.  **List all pairs of states.**
    2.  **Construct an Implication Table:** For each pair of states (S_i, S_j) and each input combination, determine if they are equivalent based on their outputs and next states.
        *   If the outputs are different for any input, the states are *not* equivalent.
        *   If the outputs are the same, check the equivalence of their next states. If the next states are (S_k, S_l), and (S_k, S_l) have already been determined to be *not* equivalent, then (S_i, S_j) are also *not* equivalent.
    3.  **Mark all non-equivalent pairs in the table.**
    4.  **Group the remaining equivalent states.** Each group represents a single state in the minimized machine.

**Example:**

Consider a state table with states A, B, C, D, E:

| Current State | Input 0 | Input 1 |
| :------------ | :------ | :------ |
| A             | B, 0    | C, 0    |
| B             | D, 0    | E, 0    |
| C             | D, 0    | E, 0    |
| D             | D, 1    | E, 1    |
| E             | D, 1    | E, 1    |

**Implication Table Construction:**

*   **Compare (A,B):** Input 0: (B,0) vs (D,0) -> same output. Next states (B,D). Need to check (B,D). Input 1: (C,0) vs (E,0) -> same output. Next states (C,E). Need to check (C,E).
*   **Compare (B,C):** Input 0: (D,0) vs (D,0) -> same output. Next states (D,D). Equivalent. Input 1: (E,0) vs (E,0) -> same output. Next states (E,E). Equivalent. Thus, B and C are equivalent.

After filling the implication table, we find that states B and C are equivalent. The minimized state table will have states A, {B,C}, D, E.

**Important Points to Remember:**

*   The state minimization process should be applied systematically using the implication table.
*   The minimized machine must be functionally equivalent to the original machine.

**Learning Outcome Alignment:**

*   **K3 (CO1):** Analyze and optimize state assignment and reduction.

**Textbook References:**

*   **Kohavi, Z., & Jha, N. K. (2009).** *Switching and Finite Automata Theory.* (Chapter on Finite Automata Simplification) - Provides a detailed theoretical foundation for state minimization.
*   **Yarbrough, J. M. (2006).** *Digital Logic Applications and Design.* (Chapter on Sequential Circuits) - Includes practical examples of state reduction.

---

### 3. State Assignment

Once the states are minimized, the next step is to assign unique binary codes to each state. The choice of state assignment significantly impacts the complexity of the combinational logic required for the flip-flop excitation.

**Key Concepts:**

*   **Number of Flip-Flops:** If there are 'm' states in the minimized machine, at least `ceil(log2(m))` flip-flops are needed.
*   **State Assignment Techniques:**
    *   **Linear/Sequential Assignment:** Assigns codes sequentially (e.g., 00, 01, 10, 11 for 4 states). Simple but not always optimal.
    *   **Binary Assignment:** Assigns binary codes directly.
    *   **One-Hot Assignment:** Each state is assigned a unique binary code with only one '1' bit (e.g., 0001, 0010, 0100, 1000). This can simplify logic but requires more flip-flops.
    *   **Optimal Assignment:** Aims to minimize the logic complexity by grouping states with similar transitions and outputs to share adjacent binary codes (e.g., using Karnaugh maps or heuristics).

**Objectives of State Assignment:**

*   **Minimize Flip-Flop Inputs:** Reduce the number of literals and product terms in the logic equations for flip-flop excitation.
*   **Minimize Output Logic:** Reduce the complexity of the output logic.

**Methods for Optimal State Assignment:**

*   **Karnaugh Maps (K-maps):** For a small number of states, K-maps can be used to visually group adjacent codes that lead to similar next states or outputs, thereby minimizing logic.
*   **Heuristic Algorithms:** For larger state machines, algorithms like the one proposed by Huffman or others are used to find near-optimal assignments. These algorithms often involve creating adjacency graphs or tables to quantify the "closeness" of states.

**Example (Illustrative):**

Assume a minimized state machine with states S0, S1, S2. We need at least 2 flip-flops (Y1, Y0).

**Assignment 1 (Sequential):**
*   S0: 00
*   S1: 01
*   S2: 10

**Assignment 2 (Attempting to group similar transitions):**
Suppose S0 transitions to S1 on input 0, and S2 also transitions to S1 on input 0. States with common next states might benefit from adjacent codes.

*   S0: 00
*   S1: 10
*   S2: 11

The choice of assignment depends on the specific state table and desired optimization.

**Important Points to Remember:**

*   The number of flip-flops is determined by the number of states, not the assignment itself.
*   A good state assignment can significantly reduce the complexity of the resulting logic.
*   One-hot encoding can be beneficial for speed and testability, but at the cost of more flip-flops.

**Learning Outcome Alignment:**

*   **K3 (CO1):** Optimize state assignment for CSSNs.

**Textbook References:**

*   **Wakerly, J. F. (2008).** *Digital Design: Principles and Practices.* (Chapter on Sequential Logic) - Discusses various state assignment strategies and their impact.
*   **Mano, M. M., & Ciletti, M. D. (2017).** *Digital Design: With an Introduction to the Verilog HDL, VHDL, and SystemVerilog.* (Chapter on Sequential Logic) - Explains the process and considerations for state assignment.
*   **Givone, D. G. (2017).** *Digital Principles & Design.* (Chapter on Sequential Circuit Design) - Covers the practical aspects of state assignment for implementation.

---

### 4. Relationship to ASM Charts and Realization

**ASM (Algorithmic State Machine) Charts** provide a high-level graphical representation of a sequential circuit's behavior, abstracting away from the specific flip-flop implementation. State assignment and reduction are crucial steps in translating an ASM chart into a hardware implementation.

**Key Concepts:**

*   **ASM Chart Components:**
    *   **State Box:** Represents a state.
    *   **Decision Box:** Represents a conditional branch based on an input or flip-flop state.
    *   **Output Box:** Represents an output that is generated when entering a state or based on conditions.
    *   **Link:** Connects different components, indicating transitions.
*   **Translating ASM to State Table:** Each state in the ASM chart typically corresponds to a row in the state table.
*   **Role of State Assignment in ASM:** The binary codes assigned to states in the ASM chart determine the actual logic levels of the flip-flops. This choice affects the complexity of the combinational logic that implements the decision boxes and output logic.
*   **Role of State Reduction in ASM:** If an ASM chart has redundant states (which can be identified by converting it to a state table and then minimizing), reducing these states simplifies the ASM chart and the subsequent hardware implementation.

**Example:**

An ASM chart might show a state 'IDLE' transitioning to 'PROCESS' when a 'START' signal is high. After optimization, 'IDLE' might be assigned the binary code '00', and 'PROCESS' as '01'. The combinational logic would then be responsible for detecting the 'START' signal and generating the flip-flop flip/clocking signals to transition from '00' to '01'.

**Important Points to Remember:**

*   ASM charts offer a structured way to design sequential circuits, and state assignment/reduction are key to efficient implementation from ASM charts.
*   The quality of the state assignment directly impacts the size and speed of the final circuit derived from the ASM chart.

**Learning Outcome Alignment:**

*   **K3 (CO1):** Effectively utilize ASM charts for the realization of complex digital systems, which inherently involves state assignment and reduction.

**Textbook References:**

*   **Givone, D. G. (2017).** *Digital Principles & Design.* (Chapter on Algorithmic State Machines) - Connects ASM charts to the state machine design process, including implementation considerations.
*   **Wakerly, J. F. (2008).** *Digital Design: Principles and Practices.* (Chapter on Sequential Logic Design) - Discusses the role of ASM charts and their translation to hardware.

---

### 5. Practical Considerations and VLSI Design Flow

In VLSI design, the efficiency gained from state assignment and reduction is paramount due to the large number of transistors and the cost associated with chip area and power consumption.

**Key Concepts:**

*   **Area Minimization:** Fewer states and simpler logic lead to smaller silicon footprints.
*   **Power Consumption:** Complex logic often implies more switching activity, leading to higher power consumption. Optimized assignments can reduce this.
*   **Speed/Performance:** Reduced logic complexity generally leads to faster propagation delays, improving the circuit's operating frequency.
*   **Testability:** A well-chosen state assignment can sometimes simplify the process of testing the sequential circuit for faults.
*   **VLSI Design Flow:**
    1.  **Specification:** Defining the circuit's behavior.
    2.  **Architecture Design:** High-level design.
    3.  **Behavioral Modeling (e.g., Verilog/VHDL):** Describing the circuit's function.
    4.  **Logic Synthesis:** Automatically translating HDL into a gate-level netlist. State assignment is a critical factor here, as synthesis tools use algorithms to find good assignments.
    5.  **Technology Mapping:** Mapping the gate-level netlist to a specific technology library (e.g., standard cells).
    6.  **Place and Route:** Physically placing the gates and routing the interconnections.
    7.  **Verification & Testing:** Ensuring the design functions correctly.

**Impact of State Assignment in VLSI:**

*   **Synthesis Tools:** Modern synthesis tools have built-in algorithms for state assignment. Designers can provide directives (e.g., "try to minimize area," "prioritize speed") to guide these tools.
*   **HDL Coding Style:** The way a state machine is coded in VHDL or Verilog can influence the synthesis tool's ability to perform optimal state assignment. Using enumerated types for states and clear `case` statements is generally preferred.
*   **One-Hot Encoding in FPGAs:** For FPGAs, one-hot encoding can sometimes lead to more efficient implementations due to the architecture of lookup tables (LUTs) and the nature of routing.

**Learning Outcome Alignment:**

*   **K3 (CO1):** Optimize state assignment and reduction for the realization of complex digital systems, a core aspect of VLSI design.
*   **K2 (CO4):** Explain the VLSI design flow, where state assignment and reduction are integral parts of logic synthesis.

**Textbook References:**

*   **Haskell, R. E., & Hanna, D. M. (2019).** *Introduction to Digital Design Using Digilent FPGA Boards: Block Diagram / VHDL Examples.* (Chapters on Sequential Logic and FPGA Implementation) - May touch upon how state machines are mapped to FPGAs and the impact of assignment.
*   **Anand, R. (2013).** *Digital System Design Using VHDL.* (Chapters on VHDL for Sequential Circuits) - Discusses HDL coding for state machines and their synthesis.
*   **John, L. K., & Roth, C. H. (2012).** *Digital System Design Using VHDL.* (Chapters on State Machine Design) - Covers VHDL implementation and synthesis of state machines.

---

### 6. Practice Questions and Exercises

**Question 1:**

Consider the following state table for a sequential circuit. Minimize the number of states.

| Present State | Input 0 | Input 1 |
| :------------ | :------ | :------ |
| S0            | S1, 0   | S0, 0   |
| S1            | S2, 0   | S3, 1   |
| S2            | S1, 0   | S0, 0   |
| S3            | S2, 1   | S3, 1   |

**Answer:**

1.  **List all pairs of states:** (S0,S1), (S0,S2), (S0,S3), (S1,S2), (S1,S3), (S2,S3).
2.  **Construct Implication Table:**

    *   (S0, S1): Input 0: (S1,0) vs (S2,0) -> same output, next states (S1,S2). Need to check (S1,S2). Input 1: (S0,0) vs (S3,1) -> different output. **Mark (S0,S1) as not equivalent.**
    *   (S0, S2): Input 0: (S1,0) vs (S1,0) -> same output, next states (S1,S1). Equivalent. Input 1: (S0,0) vs (S0,0) -> same output, next states (S0,S0). Equivalent. **Mark (S0,S2) as equivalent.**
    *   (S0, S3): Input 0: (S1,0) vs (S2,1) -> different output. **Mark (S0,S3) as not equivalent.**
    *   (S1, S2): Input 0: (S2,0) vs (S1,0) -> same output, next states (S2,S1). Need to check (S2,S1) which is same as (S1,S2). Input 1: (S3,1) vs (S0,0) -> different output. **Mark (S1,S2) as not equivalent.**
    *   (S1, S3): Input 0: (S2,0) vs (S2,1) -> different output. **Mark (S1,S3) as not equivalent.**
    *   (S2, S3): Input 0: (S1,0) vs (S2,1) -> different output. **Mark (S2,S3) as not equivalent.**

3.  **Remaining Equivalent Pair:** Only (S0, S2) are equivalent.
4.  **Minimized States:** {S0, S2}, S1, S3. Let's call the new states S0', S1', S2'.
    *   S0' = {S0, S2}
    *   S1' = S1
    *   S2' = S3

5.  **Minimized State Table:**

    | Present State | Input 0     | Input 1     |
    | :------------ | :---------- | :---------- |
    | S0' ({S0,S2}) | S1', 0      | S0', 0      |
    | S1' (S1)      | S0', 0      | S2', 1      |
    | S2' (S3)      | S0', 1      | S2', 1      |

**Question 2:**

For the minimized state table in Question 1, suggest a state assignment for 2 flip-flops (Y1, Y0) that aims to minimize the logic for flip-flop excitation. Explain your reasoning.

**Answer:**

Minimized states: S0'({S0,S2}), S1'(S1), S2'(S3). We need 2 flip-flops.

Let's analyze the transitions:
*   S0' transitions to S1' on input 0, and S0' on input 1.
*   S1' transitions to S0' on input 0, and S2' on input 1.
*   S2' transitions to S0' on input 0, and S2' on input 1.

We want to assign codes such that states with common transitions or common next states are assigned adjacent binary codes.

Consider the transitions on input 0:
*   S0' -> S1'
*   S1' -> S0'
*   S2' -> S0'

This suggests S0' and S2' should be adjacent to S1' on the "input 0" side. Also, S0' and S2' transition to S0' on input 1.

Let's try an assignment:
*   S0' (Combined S0, S2): 00
*   S1' (S1): 01
*   S2' (S3): 10 (or 11)

Let's try assigning 00 to S0', 01 to S1', and 10 to S2'.
This gives us:
*   S0': 00
*   S1': 01
*   S2': 10

Now, let's write the excitation table for D flip-flops (D = Next State):

| Current State (Y1 Y0) | Input | Next State (Y1 Y0) | D1 | D0 |
| :-------------------- | :---- | :----------------- | :- | :- |
| 00 (S0')              | 0     | 01 (S1')           | 0  | 1  |
| 00 (S0')              | 1     | 00 (S0')           | 0  | 0  |
| 01 (S1')              | 0     | 00 (S0')           | 0  | 0  |
| 01 (S1')              | 1     | 10 (S2')           | 1  | 0  |
| 10 (S2')              | 0     | 00 (S0')           | 0  | 0  |
| 10 (S2')              | 1     | 10 (S2')           | 1  | 0  |

**K-maps for D1 and D0:**

**For D1:**
(Y1, Y0, Input)
X X X (don't care)
0 0 0 -> 0
0 0 1 -> 0
0 1 0 -> 0
0 1 1 -> 1
1 0 0 -> 0
1 0 1 -> 1

K-map for D1 (with Input as one variable, Y1 Y0 as state variables):
```
      Y0=0  Y0=1
Y1=0  0,0   1,0   <-- Input 0, Input 1
      0     0     <-- D1 for Input 0
      0     1     <-- D1 for Input 1

Y1=1  0,0   1,0   <-- Input 0, Input 1
      0     1     <-- D1 for Input 0
      0     1     <-- D1 for Input 1
```
If we map these to a K-map with Y1, Y0, and Input (I):
```
      Y0=0 Y0=1
Y1=0  0    0    (for I=0)
      0    1    (for I=1)

Y1=1  0    1    (for I=0)
      0    1    (for I=1)
```
Let's represent this with a 3-variable K-map (Y1, Y0, I):
```
      Y0=0   Y0=1
Y1=0  0(I=0) 0(I=0)
      0(I=1) 1(I=1)

Y1=1  0(I=0) 1(I=0)
      0(I=1) 1(I=1)
```
The group for D1 is clearly `Y1 * I` and `Y0 * I`. So, `D1 = (Y1 + Y0) * I`.

**For D0:**
K-map for D0:
```
      Y0=0  Y0=1
Y1=0  0,0   1,0   <-- Input 0, Input 1
      1     0     <-- D0 for Input 0
      0     0     <-- D0 for Input 1

Y1=1  0,0   1,0   <-- Input 0, Input 1
      0     0     <-- D0 for Input 0
      0     0     <-- D0 for Input 1
```
Mapping to a 3-variable K-map (Y1, Y0, I):
```
      Y0=0   Y0=1
Y1=0  1(I=0) 0(I=0)
      0(I=1) 0(I=1)

Y1=1  0(I=0) 0(I=0)
      0(I=1) 0(I=1)
```
The group for D0 is `!Y1 * !Y0 * !I`. So, `D0 = !Y1 * !Y0 * !I`.

**Resulting Logic:**
`D1 = (Y1 + Y0) * Input`
`D0 = !Y1 * !Y0 * !Input`

This assignment seems reasonable. Other assignments might yield different logic complexity, which would require comparing the resulting Boolean expressions.

**Reasoning for Assignment Choice:**
The chosen assignment attempts to group states that transition to the same next state. For instance, both S0' and S2' transition to S0' on input 0. Assigning them codes that differ in one bit and are adjacent to S0' (00) can simplify logic. For example, 00 and 10 for S0' and S2', adjacent to 01 for S1'. This particular assignment resulted in relatively simple logic.

---

### 7. Summary of Key Points

*   **State Reduction:** Minimizes the number of states in a sequential machine using techniques like the implication table to find equivalent states.
*   **State Assignment:** Assigns unique binary codes to the minimized states, aiming to simplify the combinational logic for flip-flop excitation and output generation.
*   **Impact on Implementation:** State assignment directly affects the circuit's complexity, area, power consumption, and speed.
*   **ASM Charts:** Provide a structured approach to designing sequential circuits, and state assignment/reduction are critical steps in their hardware realization.
*   **VLSI Context:** Optimization through state assignment and reduction is crucial for efficient chip design, and synthesis tools play a significant role.

---
This comprehensive set of notes covers the essential aspects of state assignment and reduction in digital systems and VLSI design, aligning with the provided learning and course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
