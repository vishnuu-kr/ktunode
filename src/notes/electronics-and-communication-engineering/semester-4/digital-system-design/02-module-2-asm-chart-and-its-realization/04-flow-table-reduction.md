---
title: "Flow table reduction"
subject: "DIGITAL SYSTEM DESIGN"
module: "Module 2: ASM Chart and its realization"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe714"
status: "completed"
scrapedAt: "2026-05-23T17:47:47.865Z"
---
# Digital System Design - Module 2: ASM Chart and its Realization

## Topic: Flow Table Reduction

### Learning Outcomes:

*   Understand the concept of state minimization in sequential circuits.
*   Apply the concept of equivalent states to simplify flow tables.
*   Derive a minimal flow table from a given flow table.
*   Implement the minimal flow table using logic gates and flip-flops.

---

### Introduction to Flow Table Reduction

Flow tables are a graphical representation of the behavior of synchronous sequential circuits. They describe the transitions between states based on the present state and input values. Often, initial flow tables derived from a problem description may contain redundant states, meaning multiple states might perform the same function or be indistinguishable under certain input conditions.

**Flow table reduction** is the process of simplifying a flow table by eliminating these redundant states, leading to a circuit with fewer states, flip-flops, and potentially simpler logic. This directly contributes to designing more efficient and cost-effective digital systems, aligning with the overall goals of digital system design.

---

### Key Concepts and Definitions

*   **State:** A specific condition or memory configuration of a sequential circuit.
*   **Input:** Signals that affect the behavior of the sequential circuit.
*   **Next State:** The state the circuit will transition to from the current state, given a specific input.
*   **Output:** The signal produced by the circuit, which can be dependent on the current state, input, or both (depending on Mealy or Moore model).
*   **Equivalent States:** Two states are considered equivalent if, for every possible input sequence, they produce the same output sequence and transition to equivalent next states.
*   **Implied States:** In asynchronous circuits, if a state transition is not explicitly defined, it's often implied to go to a null state or a specific error state. This can complicate reduction.
*   **Partitions:** A method used to group equivalent states. Initially, states are partitioned based on their output. Then, further partitions are created based on the equivalence of their next states.
*   **Minimal Flow Table:** A flow table with the minimum possible number of states, equivalent to the original flow table.

---

### Why Reduce Flow Tables?

*   **Reduces hardware complexity:** Fewer states mean fewer flip-flops are needed to store the state.
*   **Simplifies logic design:** The combinational logic required to determine next states and outputs becomes simpler.
*   **Reduces cost and power consumption:** Less hardware generally translates to lower cost and power usage.
*   **Improves performance:** Simpler logic can sometimes lead to faster circuit operation.

---

### Methods for Flow Table Reduction

The primary method for reducing flow tables relies on identifying and merging **equivalent states**. We'll explore this method, which is a cornerstone in the design of sequential circuits. This process is crucial for analyzing and simplifying sequential circuits, a key aspect of CO1 (Analyze asynchronous and clocked synchronous sequential circuits).

#### 1. State Equivalence and Partitions (for Synchronous Sequential Circuits)

For synchronous sequential circuits, the process of state reduction is typically achieved by finding equivalent states. The general approach involves creating partitions of the states:

**Step 1: Initial Partitioning (P0)**
Partition the states based solely on their **output** values. States producing different outputs for the same input are distinguishable. If two states produce the same output for all inputs, they might be equivalent.

*   **Moore Model:** Outputs are dependent only on the current state. States with different outputs are in different partitions.
*   **Mealy Model:** Outputs depend on the current state and input. States that produce different outputs for any given input are distinguishable.

**Step 2: Iterative Refinement of Partitions**
In each subsequent step ($P_{i+1}$), states are partitioned based on the partitions of their **next states** for all possible inputs.

*   Two states, $S_a$ and $S_b$, are in the same partition in $P_{i+1}$ if:
    *   They were in the same partition in $P_i$.
    *   For every input $x$, the next state of $S_a$ (under input $x$) and the next state of $S_b$ (under input $x$) are in the same partition in $P_i$.

This process is repeated until no new partitions are formed, meaning $P_{k+1} = P_k$. The final partitions represent sets of equivalent states.

**Step 3: Merging Equivalent States**
Combine the states within each of the final partitions into a single merged state in the minimal flow table. The new states in the minimal flow table will be these merged states.

---

#### Example: Flow Table Reduction (Moore Model)

Let's consider a simple Moore model flow table:

| Present State | Input 0 | Input 1 | Output |
| :------------ | :------ | :------ | :----- |
| A             | B       | C       | 0      |
| B             | A       | D       | 0      |
| C             | B       | C       | 1      |
| D             | B       | D       | 1      |

**Step 1: Initial Partitioning (P0)**
Partition based on outputs:
*   Partition 1: {A, B} (Output = 0)
*   Partition 2: {C, D} (Output = 1)

So, $P_0 = \{\{A, B\}, \{C, D\}\}$.

**Step 2: Iterative Refinement**

*   **For P1:** We examine the next states for each input and see which partitions they fall into based on $P_0$.

    *   **State A:**
        *   Input 0: Next state is B. B is in {A, B} (Partition 1).
        *   Input 1: Next state is C. C is in {C, D} (Partition 2).

    *   **State B:**
        *   Input 0: Next state is A. A is in {A, B} (Partition 1).
        *   Input 1: Next state is D. D is in {C, D} (Partition 2).

    *   **State C:**
        *   Input 0: Next state is B. B is in {A, B} (Partition 1).
        *   Input 1: Next state is C. C is in {C, D} (Partition 2).

    *   **State D:**
        *   Input 0: Next state is B. B is in {A, B} (Partition 1).
        *   Input 1: Next state is D. D is in {C, D} (Partition 2).

    Now, let's group states based on these next-state partitions:
    *   States whose next states for input 0 are in Partition 1, and for input 1 are in Partition 2: A, B, C, D.

    All states have the same next-state partition pattern. Therefore, $P_1 = \{\{A, B, C, D\}\}$.

*   **For P2:** Since $P_1$ has only one partition, there's no further refinement possible. $P_2 = P_1$.

The process has converged. The final partition is $\{\{A, B, C, D\}\}$.

**Step 3: Merging Equivalent States**
All states {A, B, C, D} are equivalent. We merge them into a single state, let's call it 'X'.

**Minimal Flow Table (Moore Model)**

| Present State | Input 0 | Input 1 | Output |
| :------------ | :------ | :------ | :----- |
| X             | X       | X       | (0 or 1 depending on merged states) |

**Important Note:** In this simplified example, all states turned out to be equivalent. In real-world scenarios, you will typically find multiple partitions, allowing for significant simplification. Also, when merging states, you need to be careful about the output. For a Moore machine, if you merge states with different outputs, you need to determine a consistent output for the new merged state. This often involves further analysis to resolve output conflicts or to ensure that the resulting machine still meets the original specifications. In this particular example, if state A and C had different outputs, merging them directly without careful consideration of the output would be problematic. The output for the merged state 'X' would need to be determined based on the original outputs of A, B, C, and D and the conditions under which they produce those outputs.

Let's try another example with more distinct partitions.

#### Example: Flow Table Reduction (Mealy Model)

Consider the following Mealy model flow table:

| Present State | Input 0 (Output) | Input 1 (Output) |
| :------------ | :--------------- | :--------------- |
| S1            | S1 (0)           | S2 (0)           |
| S2            | S1 (0)           | S3 (1)           |
| S3            | S2 (0)           | S3 (1)           |
| S4            | S1 (0)           | S3 (1)           |

**Step 1: Initial Partitioning (P0)**
Partition based on output for each input.
*   Output 0 for Input 0: {S1, S2, S3, S4}
*   Output 0 for Input 1: {S1, S2, S3}
*   Output 1 for Input 1: {S2, S3, S4}

This is a bit more complex with Mealy. We partition based on output pairs for all input combinations.

*   For input 0, output is 0 for all states.
*   For input 1, output is 0 for S1, and 1 for S2, S3, S4.

So, $P_0 = \{\{S1\}, \{S2, S3, S4\}\}$.

**Step 2: Iterative Refinement**

*   **For P1:** Examine next states based on $P_0$.

    *   **State S1:**
        *   Input 0: Next state S1. S1 is in {S1} (Partition 1). Output is 0.
        *   Input 1: Next state S2. S2 is in {S2, S3, S4} (Partition 2). Output is 0.
        *   Pattern for S1: Next state partition {P1, P2}, Outputs {0, 0}

    *   **State S2:**
        *   Input 0: Next state S1. S1 is in {S1} (Partition 1). Output is 0.
        *   Input 1: Next state S3. S3 is in {S2, S3, S4} (Partition 2). Output is 1.
        *   Pattern for S2: Next state partition {P1, P2}, Outputs {0, 1}

    *   **State S3:**
        *   Input 0: Next state S2. S2 is in {S2, S3, S4} (Partition 2). Output is 0.
        *   Input 1: Next state S3. S3 is in {S2, S3, S4} (Partition 2). Output is 1.
        *   Pattern for S3: Next state partition {P2, P2}, Outputs {0, 1}

    *   **State S4:**
        *   Input 0: Next state S1. S1 is in {S1} (Partition 1). Output is 0.
        *   Input 1: Next state S3. S3 is in {S2, S3, S4} (Partition 2). Output is 1.
        *   Pattern for S4: Next state partition {P1, P2}, Outputs {0, 1}

    Now, group states that have identical patterns:
    *   S1 has pattern {P1, P2}, Outputs {0, 0}.
    *   S2 has pattern {P1, P2}, Outputs {0, 1}.
    *   S3 has pattern {P2, P2}, Outputs {0, 1}.
    *   S4 has pattern {P1, P2}, Outputs {0, 1}.

    Comparing these patterns:
    *   S2, S3, and S4 have different next-state partition patterns (S3's input 0 next state is in P2, while S2 and S4's is in P1).
    *   S2 and S4 have identical patterns: {P1, P2}, Outputs {0, 1}.
    *   S3 has a different pattern: {P2, P2}, Outputs {0, 1}.
    *   S1 has a different pattern: {P1, P2}, Outputs {0, 0}.

    So, the new partitions are:
    *   Partition 1: {S1}
    *   Partition 2: {S2, S4}
    *   Partition 3: {S3}

    $P_1 = \{\{S1\}, \{S2, S4\}, \{S3\}\}$.

*   **For P2:** Examine next states based on $P_1$.

    *   **State S1:** (Already in P1)
        *   Input 0: Next state S1 (in P1). Output 0.
        *   Input 1: Next state S2 (in P2). Output 0.
        *   Pattern for S1: {P1, P2}, Outputs {0, 0}

    *   **State S2:** (In P2)
        *   Input 0: Next state S1 (in P1). Output 0.
        *   Input 1: Next state S3 (in P3). Output 1.
        *   Pattern for S2: {P1, P3}, Outputs {0, 1}

    *   **State S4:** (In P2)
        *   Input 0: Next state S1 (in P1). Output 0.
        *   Input 1: Next state S3 (in P3). Output 1.
        *   Pattern for S4: {P1, P3}, Outputs {0, 1}

    *   **State S3:** (In P3)
        *   Input 0: Next state S2 (in P2). Output 0.
        *   Input 1: Next state S3 (in P3). Output 1.
        *   Pattern for S3: {P2, P3}, Outputs {0, 1}

    Now, group states with identical patterns:
    *   S1 has pattern {P1, P2}, Outputs {0, 0}.
    *   S2 has pattern {P1, P3}, Outputs {0, 1}.
    *   S4 has pattern {P1, P3}, Outputs {0, 1}.
    *   S3 has pattern {P2, P3}, Outputs {0, 1}.

    Comparing these patterns:
    *   S1's pattern is unique.
    *   S2 and S4 have identical patterns.
    *   S3's pattern is unique.

    So, the new partitions are:
    *   Partition 1: {S1}
    *   Partition 2: {S2, S4}
    *   Partition 3: {S3}

    $P_2 = \{\{S1\}, \{S2, S4\}, \{S3\}\}$.

Since $P_2 = P_1$, the process has converged.

**Step 3: Merging Equivalent States**
The equivalent states are {S2, S4}. We merge them into a new state, let's call it S2'.
The minimal flow table will have states S1, S2', and S3.

**Minimal Flow Table (Mealy Model)**

We need to derive the transitions and outputs for the merged state S2'.

*   **For state S2':** This state represents the original states S2 and S4.
    *   **Input 0:**
        *   From S2: Next state is S1 (output 0). S1 is in partition {S1}.
        *   From S4: Next state is S1 (output 0). S1 is in partition {S1}.
        *   Therefore, for S2' with input 0, the next state is S1, and the output is 0.
    *   **Input 1:**
        *   From S2: Next state is S3 (output 1). S3 is in partition {S3}.
        *   From S4: Next state is S3 (output 1). S3 is in partition {S3}.
        *   Therefore, for S2' with input 1, the next state is S3, and the output is 1.

*   **For state S1:** (No change, as it's not merged)
    *   Input 0: Next state S1 (output 0).
    *   Input 1: Next state S2. Since S2 is now S2', the next state is S2' (output 0).

*   **For state S3:** (No change, as it's not merged)
    *   Input 0: Next state S2. Since S2 is now S2', the next state is S2' (output 0).
    *   Input 1: Next state S3 (output 1).

**Constructing the Minimal Flow Table:**

| Present State | Input 0 (Output) | Input 1 (Output) |
| :------------ | :--------------- | :--------------- |
| S1            | S1 (0)           | S2' (0)          |
| S2'           | S1 (0)           | S3 (1)           |
| S3            | S2' (0)          | S3 (1)           |

This minimal flow table has 3 states, reduced from the original 4 states. This simplification is a direct result of identifying equivalent states S2 and S4. This process aids in designing more efficient circuits, aligning with CO1 and CO2 (Design hazard-free digital circuits, as simpler circuits are often easier to make hazard-free).

---

#### Handling Unspecified Transitions (Implied States)

In some flow tables, especially those for asynchronous circuits, certain transitions might not be explicitly defined. These are often implied to go to a "null" or "trap" state, or an error state. When reducing flow tables, it's crucial to handle these implied states.

*   **Null/Trap State:** If an unspecified transition leads to a null state, that null state can sometimes be merged with existing states if it behaves identically in terms of outputs and subsequent transitions.
*   **Error State:** If an unspecified transition leads to a defined error state, care must be taken. The error state might be unique, or it might be equivalent to other states that also lead to error conditions.

The reduction process remains the same: group states based on output and next-state equivalence. The presence of implied states simply means more next-state entries to consider during the partitioning process.

---

### Implementation of Reduced Flow Tables

Once a minimal flow table is obtained, it can be implemented using standard sequential circuit design techniques:

1.  **State Assignment:** Assign unique binary codes to each state in the minimal flow table. The number of flip-flops required is determined by the number of states (n), where $2^k \ge n$, and $k$ is the number of flip-flops.
2.  **Excitation Table:** Create an excitation table for the chosen flip-flop type (e.g., D, JK, T). This table lists the required flip-flop inputs for each state transition.
3.  **Boolean Expressions:** Derive Boolean expressions for the flip-flop inputs and the circuit outputs based on the current state bits and the input signals. Karnaugh maps (K-maps) or Boolean algebra are commonly used for simplification.
4.  **Circuit Construction:** Implement the derived Boolean expressions using logic gates (AND, OR, NOT) and flip-flops.

This implementation phase directly addresses how to realize the design, connecting the analysis and reduction to the final hardware, which is a key aspect of digital system design.

---

### Important Points to Remember

*   **State equivalence is symmetric, transitive, and reflexive.**
*   **The reduction process is iterative.** Continue partitioning until no new partitions are formed.
*   **For Mealy machines, output dependence on input must be considered during partitioning.** States are equivalent if they produce the same output for all input sequences AND transition to equivalent next states.
*   **For Moore machines, output dependence is only on the current state.** States with different outputs cannot be equivalent.
*   **Merging states can sometimes lead to output conflicts**, especially in Moore machines if states with different outputs are merged. Careful analysis is needed to resolve these.
*   **Reduced flow tables lead to simpler and more efficient circuits.**

---

### Practice Questions and Exercises

**Question 1:**
Consider the following flow table for a synchronous sequential circuit. Reduce the flow table.

| Present State | Input 0 | Input 1 |
| :------------ | :------ | :------ |
| S1            | S2      | S1      |
| S2            | S2      | S3      |
| S3            | S2      | S4      |
| S4            | S2      | S3      |

**Answer:**

Let's perform the reduction:

**Step 1: Initial Partitioning (P0) - Assuming Moore Model for simplicity, but outputs are not given. We will assume outputs are unique per state for now to illustrate the process. If outputs are the same for some states, P0 would be different.**

Let's assume this is a Mealy machine where outputs are implied by the next state transitions (e.g., state S1 outputs 0 on input 0, 1 on input 1; S2 outputs 0 on input 0, 1 on input 1, etc.). For reduction, we typically need explicit output information.

Let's re-frame this with outputs to make it a proper reduction problem.
Suppose the flow table is:

| Present State | Input 0 (Output) | Input 1 (Output) |
| :------------ | :--------------- | :--------------- |
| S1            | S2 (0)           | S1 (0)           |
| S2            | S2 (0)           | S3 (1)           |
| S3            | S2 (0)           | S4 (1)           |
| S4            | S2 (0)           | S3 (1)           |

**Step 1: Initial Partitioning (P0)**
Partition based on output pairs:
*   Output pair (0, 0): S1
*   Output pair (0, 1): S2, S3, S4

$P_0 = \{\{S1\}, \{S2, S3, S4\}\}$.

**Step 2: Iterative Refinement**

*   **For P1:**

    *   **S1:** Input 0 -> S2 (in P2, output 0), Input 1 -> S1 (in P1, output 0). Pattern: {P2, P1}, Outputs {0, 0}.
    *   **S2:** Input 0 -> S2 (in P2, output 0), Input 1 -> S3 (in P2, output 1). Pattern: {P2, P2}, Outputs {0, 1}.
    *   **S3:** Input 0 -> S2 (in P2, output 0), Input 1 -> S4 (in P2, output 1). Pattern: {P2, P2}, Outputs {0, 1}.
    *   **S4:** Input 0 -> S2 (in P2, output 0), Input 1 -> S3 (in P2, output 1). Pattern: {P2, P2}, Outputs {0, 1}.

    Grouping based on patterns:
    *   S1: {P2, P1}, Outputs {0, 0}.
    *   S2, S3, S4: {P2, P2}, Outputs {0, 1}.

    New partitions: $P_1 = \{\{S1\}, \{S2, S3, S4\}\}$.

*   **For P2:**

    *   **S1:** Already checked. Pattern: {P2, P1}, Outputs {0, 0}. (P1 refers to {S1}, P2 refers to {S2, S3, S4}).
    *   **S2, S3, S4:**
        *   From S2: Next states {S2, S3}. Both are in P2. Output {0, 1}. Pattern {P2, P2}.
        *   From S3: Next states {S2, S4}. Both are in P2. Output {0, 1}. Pattern {P2, P2}.
        *   From S4: Next states {S2, S3}. Both are in P2. Output {0, 1}. Pattern {P2, P2}.

    All states in {S2, S3, S4} exhibit the same behavior (transition to states within P2 for both inputs and produce the same output pairs).
    S1's pattern: {P2, P1}, Outputs {0, 0}.
    S2, S3, S4's pattern: {P2, P2}, Outputs {0, 1}.

    The partitions remain the same: $P_2 = \{\{S1\}, \{S2, S3, S4\}\}$.
    The process has converged.

**Step 3: Merging Equivalent States**
States S2, S3, and S4 are equivalent. Merge them into a single state, S2'.

**Minimal Flow Table:**

*   **State S1:**
    *   Input 0: Next state S2 (in P2). As S2 is now S2', next state is S2' (output 0).
    *   Input 1: Next state S1 (in P1). Next state is S1 (output 0).
*   **State S2':** Represents S2, S3, S4.
    *   Input 0: From S2, S3, S4, next states are S2, S2, S2 respectively. All are in P2, so next state is S2'. Output is 0 for all cases.
    *   Input 1: From S2, S3, S4, next states are S3, S4, S3 respectively. All are in P2, so next state is S2'. Output is 1 for all cases.

| Present State | Input 0 (Output) | Input 1 (Output) |
| :------------ | :--------------- | :--------------- |
| S1            | S2' (0)          | S1 (0)           |
| S2'           | S2' (0)          | S2' (1)          |

This minimal flow table has 2 states.

---

**Question 2:**
Explain the significance of flow table reduction in the design of sequential circuits. Relate this to the course outcomes.

**Answer:**
Flow table reduction is significant because it leads to the design of simpler, more efficient, and cost-effective sequential circuits. By identifying and merging equivalent states, we minimize the number of states required to represent the circuit's behavior. This directly translates to:
*   **Fewer flip-flops:** Reduces the memory element count.
*   **Simpler combinational logic:** Reduces the complexity of logic gates needed for state transitions and outputs.
*   **Reduced hardware cost:** Less circuitry means lower manufacturing costs.
*   **Lower power consumption:** Fewer components generally consume less power.
*   **Potentially improved performance:** Simpler logic can sometimes operate faster.

**Relation to Course Outcomes:**

*   **CO1 (Analyze asynchronous and clocked synchronous sequential circuits):** Understanding flow table reduction is fundamental to analyzing the complexity and potential for optimization of sequential circuits. It's a key analysis technique.
*   **CO2 (Design hazard-free digital circuits):** A reduced flow table leads to a simpler circuit implementation. Simpler circuits are generally easier to analyze for hazards and to design to be hazard-free, as there are fewer paths and potential race conditions to manage.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### Textbooks and References Consulted:

*   **Digital Principles & Design by Donald G Givone:** Provides foundational concepts of state minimization.
*   **Digital Design with an introduction to HDL, VHDL and Verilog by M.Morris Mano and Michel.D.Ciletti:** Covers state reduction as a standard procedure in sequential circuit design.
*   **Digital Design by John F Wakerly:** Offers in-depth treatment of state machine minimization techniques.
*   **Logic Design Theory by N. N. Biswas:** Discusses state minimization as a core part of sequential circuit synthesis.

---