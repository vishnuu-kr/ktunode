---
title: "ASM Chart and its realization"
subject: "DIGITAL SYSTEM DESIGN"
module: "Module 2: ASM Chart and its realization"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe711"
status: "completed"
scrapedAt: "2026-05-23T17:47:45.766Z"
---
# Digital System Design - Module 2: ASM Chart and its Realization

## 1. Introduction to ASM Charts

### 1.1 What is an ASM Chart?

An **Algorithmic State Machine (ASM) chart** is a graphical representation of the behavior of a sequential digital circuit. It combines the concepts of state diagrams and flowcharts to provide a comprehensive description of how a system transitions between states based on inputs and produces outputs.

*   **Purpose:** To design and understand the operation of synchronous sequential circuits.
*   **Key Elements:** States, transitions, decisions (conditions), and outputs.
*   **Origin:** Developed as a method to bridge the gap between the algorithmic description of a digital system and its hardware implementation.

### 1.2 ASM Chart Symbols and Their Meanings

ASM charts use a standardized set of symbols, each representing a specific action or decision within the sequential circuit's operation.

*   **State Box (Rectangle):**
    *   Represents a specific state of the sequential circuit.
    *   Contains the state name (usually alphanumeric) and the outputs associated with that state.
    *   Example: `S0 (Output A, Output B)`

*   **Decision Box (Diamond):**
    *   Represents a condition or input that determines the next state.
    *   Has multiple outgoing paths, each labeled with a condition (e.g., `X=0`, `X=1`, `A < B`).
    *   Example: `Decision Box (Input X)`

*   **Output Box (Rounded Rectangle or Oval):**
    *   Represents an output that is generated when the circuit is in a particular state and certain conditions are met.
    *   Can be associated with a state (Mealy-type outputs) or only with transitions (Moore-type outputs, though typically represented within the state box for overall clarity).
    *   Example: `Output Y`

*   **Link (Arrow):**
    *   Indicates the path of control flow and state transitions.
    *   Labeled with the condition that causes the transition.

### 1.3 Relationship to State Diagrams and Flowcharts

*   **State Diagrams:** ASM charts are an extension of state diagrams. While state diagrams focus on states and transitions, ASM charts add conditional outputs and decision points, providing a more detailed operational view.
*   **Flowcharts:** ASM charts incorporate flowchart elements to represent the sequence of operations and decisions within each state or during transitions.

## 2. Components of an ASM Chart

An ASM chart can be broken down into three main components:

### 2.1 State Boxes

*   These are the fundamental building blocks representing the distinct memory elements of the sequential circuit.
*   The output(s) listed inside a state box are **state outputs**, meaning they are active whenever the circuit is in that particular state. These correspond to **Moore Model outputs**.

### 2.2 Decision Boxes

*   These boxes evaluate specific inputs or internal conditions.
*   The paths leaving a decision box are labeled with the possible outcomes of the condition.
*   This is where the "algorithmic" aspect comes into play, allowing for branching based on inputs.

### 2.3 Conditional Output Boxes

*   These boxes represent outputs that are generated **only when** a specific condition is met, typically during a transition from one state to another.
*   These correspond to **Mealy Model outputs**.
*   In a combined ASM chart, outputs can appear both in state boxes (state outputs) and conditional output boxes (output associated with a transition).

## 3. Developing an ASM Chart

The process of developing an ASM chart involves several steps:

### 3.1 Understand the System's Behavior

*   Clearly define the system's function, inputs, outputs, and operating sequence.
*   Identify all possible states the system can be in.

### 3.2 Create a State Table

*   A state table lists all states, their corresponding next states, and the outputs generated in each state and for each input combination.
*   This is a crucial intermediate step before drawing the ASM chart, ensuring all transitions and outputs are accounted for.

### 3.3 Draw the ASM Chart

*   Start with the initial state.
*   Use state boxes for each identified state.
*   Use decision boxes to represent conditional branching based on inputs.
*   Use conditional output boxes (if applicable) for outputs that depend on specific input conditions during transitions.
*   Connect states and decision boxes with labeled arrows representing valid transitions.
*   Ensure all possible input combinations that lead to transitions are covered.

### 3.4 Simplify and Refine

*   Review the chart for any redundancies or inefficiencies.
*   Ensure all branches from decision boxes are covered.

## 4. Realization of ASM Charts (Hardware Implementation)

The ASM chart provides a blueprint for implementing the sequential circuit. This involves mapping the chart's components to hardware elements: flip-flops, combinational logic, and output logic.

### 4.1 Mapping States to Flip-Flops

*   The number of states in the ASM chart determines the number of flip-flops required. If there are 'n' states, you need `k` flip-flops such that `2^k >= n`.
*   Each unique state is assigned a unique binary code (state assignment).
*   The state flip-flops store the current state of the circuit.

### 4.2 Deriving State and Output Equations

From the ASM chart, we can derive the Boolean equations for:

*   **Flip-flop next-state inputs (D, J-K, T):** These equations determine the next state of the flip-flops based on the current state and the input conditions.
*   **Outputs:** These equations define how the outputs are generated based on the current state and/or input conditions.

### 4.3 Two Realization Methods

There are two primary methods for realizing an ASM chart:

#### 4.3.1 Implementation using a State Table

This is a common and structured approach.

*   **Step 1: Construct the State Table:** Convert the ASM chart into a state table. The table will have columns for:
    *   Current State (represented by flip-flop outputs, e.g., Q1 Q0)
    *   Inputs (e.g., X)
    *   Next State (e.g., Q1+ Q0+)
    *   Outputs (e.g., Y)

*   **Step 2: State Assignment:** Assign unique binary codes to each state. This assignment can significantly impact the complexity of the resulting logic.

*   **Step 3: Derive Flip-Flop Input Equations:** Use Karnaugh Maps (K-Maps) or Boolean algebra to derive the equations for the inputs of the flip-flops (e.g., D1, D0 for D flip-flops). These equations will be functions of the current state bits (Q1, Q0) and the circuit inputs (X).
    *   `D1 = f(Q1, Q0, X)`
    *   `D0 = f(Q1, Q0, X)`

*   **Step 4: Derive Output Equations:** Derive the equations for the circuit outputs. These equations will be functions of the current state bits (Q1, Q0) and potentially the inputs (X).
    *   `Y = f(Q1, Q0, X)` (for Mealy outputs)
    *   `Y = f(Q1, Q0)` (for Moore outputs)

*   **Step 5: Realize the Logic:** Use logic gates (AND, OR, NOT, XOR, etc.) to implement the derived flip-flop input equations and output equations.

#### 4.3.2 Implementation using a Control Unit and Datapath

This method is more common for complex sequential circuits and aligns well with hardware description languages (HDLs).

*   **Control Unit:**
    *   Handles the state transitions and generates control signals.
    *   Typically implemented using flip-flops for state storage and combinational logic for next-state decoding and output generation (especially state outputs).
    *   The ASM chart directly maps to the control unit's logic.

*   **Datapath:**
    *   Contains the data storage elements (registers) and functional units (adders, counters, multiplexers) that perform operations on data.
    *   The control unit signals enable and direct the operations within the datapath.
    *   ASM chart decision boxes often correspond to conditions that control the datapath operations.

**Example:** Implementing an ASM chart for a simple sequence detector (e.g., detecting '101').

*   **States:** Idle, Seen_1, Seen_10.
*   **Inputs:** Input bit `I`.
*   **Outputs:** `Match` (high when '101' is detected).

**(Conceptual ASM Chart - details omitted for brevity but would include state boxes, decision boxes for input 'I', and transitions)**

**Realization Steps (using State Table approach):**

1.  **State Table:**
    | Current State | Input I | Next State | Output Match |
    | :------------ | :------ | :--------- | :----------- |
    | Idle          | 0       | Idle       | 0            |
    | Idle          | 1       | Seen_1     | 0            |
    | Seen_1        | 0       | Seen_10    | 0            |
    | Seen_1        | 1       | Seen_1     | 0            |
    | Seen_10       | 0       | Idle       | 1            |
    | Seen_10       | 1       | Seen_1     | 0            |

2.  **State Assignment:**
    *   Idle: 00
    *   Seen_1: 01
    *   Seen_10: 10
    Let's use two D flip-flops, Q1 (MSB) and Q0 (LSB).

3.  **Populated State Table with Binary Codes:**
    | Current State (Q1 Q0) | Input I | Next State (Q1+ Q0+) | Output Match |
    | :-------------------- | :------ | :------------------- | :----------- |
    | 00                    | 0       | 00                   | 0            |
    | 00                    | 1       | 01                   | 0            |
    | 01                    | 0       | 10                   | 0            |
    | 01                    | 1       | 01                   | 0            |
    | 10                    | 0       | 00                   | 1            |
    | 10                    | 1       | 01                   | 0            |

4.  **Derive Flip-Flop Input Equations (using K-Maps):**

    *   **For D1:**
        | Q1 Q0 \ I | 0 | 1 |
        | :-------- | :-: | :-: |
        | 00        | 0 | 0 |
        | 01        | 1 | 0 |
        | 10        | 0 | 0 |
        | 11 (NC)   | - | - |
        `D1 = Q0 * !I`

    *   **For D0:**
        | Q1 Q0 \ I | 0 | 1 |
        | :-------- | :-: | :-: |
        | 00        | 0 | 1 |
        | 01        | 0 | 1 |
        | 10        | 0 | 1 |
        | 11 (NC)   | - | - |
        `D0 = !Q1 * !Q0 + Q1 * !Q0 + !Q1 * Q0`
        Simplifying: `D0 = !Q0 + !Q1` (or `D0 = !(Q0 * Q1)`)

5.  **Derive Output Equation:**
    *   The `Match` output is 1 only when the current state is `10` (Seen_10) and the input `I` is `0`.
    *   `Match = Q1 * !Q0 * !I`

6.  **Realize Logic:** Implement these equations using D flip-flops and logic gates.

**(Referencing Textbooks):**

*   **Givone:** Chapter 7 (State Machines and ASM Charts) provides a strong foundation in state machine design and the graphical representation using ASM charts, including their realization.
*   **Mano & Ciletti:** Chapter 6 (State Machines) and Chapter 7 (Sequential Circuit Design Using HDL) cover state machine concepts, including ASM charts, and their implementation, with a focus on VHDL/Verilog.
*   **Wakerly:** Chapter 8 (Sequential Circuit Design) and Chapter 9 (Introduction to Programmable Logic Devices) are relevant. Wakerly emphasizes state machine design and the use of state tables for implementation.
*   **Yarbrough:** Chapter 8 (Design of Sequential Circuits) details the design process of sequential circuits, including the use of state diagrams and ASM charts as design tools.

## 5. ASM Charts vs. State Diagrams

While closely related, ASM charts offer advantages for complex designs:

| Feature           | State Diagram                                     | ASM Chart                                                      |
| :---------------- | :------------------------------------------------ | :------------------------------------------------------------- |
| **Focus**         | States and transitions.                           | Overall sequential operation, including control flow.           |
| **Outputs**       | Typically shown within state boxes (Moore) or on transitions (Mealy). | Clearly distinguishes state outputs (in state boxes) and conditional outputs (associated with transitions). |
| **Decision Logic**| Implicitly handled by transitions labeled with conditions. | Explicitly represented by decision boxes, making the logic flow clearer. |
| **Complexity**    | Can become cluttered for complex logic.            | More structured for complex systems, showing algorithmic steps. |
| **Design Clarity**| Good for conceptual understanding of states.      | Excellent for detailed design and implementation planning.     |

**Important Point:** An ASM chart is essentially a state diagram that has been expanded to show the sequence of operations and decisions made by the machine. Each state box in an ASM chart can be thought of as a "macro-state" that might encompass several substeps or decisions, which would be explicitly shown in the ASM chart.

## 6. Handling Outputs in ASM Charts

The placement of outputs in an ASM chart is crucial for determining the type of sequential circuit being designed.

*   **Moore Machine Output:** Outputs are associated solely with states. They are written inside the state box. These outputs are active as long as the circuit is in that state.
    *   **Realization:** Output equations are functions only of the current state variables (e.g., `Y = f(Qn, Qn-1, ..., Q1)`).

*   **Mealy Machine Output:** Outputs are associated with transitions. They are written in conditional output boxes or on the transition paths. These outputs depend on both the current state and the input conditions causing the transition.
    *   **Realization:** Output equations are functions of both current state variables and input variables (e.g., `Y = f(Qn, Qn-1, ..., Q1, Input1, Input2)`).

*   **Mixed Output:** An ASM chart can represent a circuit with both Moore and Mealy outputs. State outputs are in state boxes, and transition outputs are in conditional output boxes.

**Important Point:** The realization process will differ slightly based on whether the outputs are primarily Moore or Mealy. This influences the derivation of output logic equations.

## 7. Advantages of Using ASM Charts

*   **Clearer Representation:** Provides a more comprehensive and intuitive representation of sequential circuit behavior compared to state diagrams alone, especially for complex systems.
*   **Facilitates Design:** Acts as a structured design tool, helping to break down complex sequential operations into manageable states and decisions.
*   **Aids in State Assignment:** The clear flow of control in an ASM chart can guide the state assignment process, potentially leading to simpler logic implementations.
*   **Supports Modularity:** Can be used to design modular sequential systems, where different parts of the ASM chart represent distinct functional units.
*   **HDL Mapping:** The structure of an ASM chart maps well to hardware description languages like VHDL and Verilog, making the transition from design to implementation smoother.

## 8. Practice Questions and Exercises

**Question 1:**

Draw an ASM chart for a vending machine controller that accepts a single 50-cent coin. The machine dispenses a product when a total of 50 cents is inserted.
*   Inputs: `Coin` (1 if coin inserted, 0 otherwise), `Dispense` (control signal).
*   Outputs: `AcceptCoin` (1 to accept coin, 0 otherwise), `Dispense` (1 to dispense product, 0 otherwise).
*   States: `Idle`, `Got50` (50 cents inserted).

**Solution 1:**

**(Conceptual ASM Chart Description):**

*   **State: Idle**
    *   Output: `AcceptCoin = 1`
    *   Decision: `Coin`
        *   If `Coin = 0`: Stay in `Idle` state.
        *   If `Coin = 1`: Transition to `Got50` state. Output: `AcceptCoin = 0` (implied or explicit on transition).

*   **State: Got50**
    *   Output: `Dispense = 1`
    *   Decision: (Implicitly, after dispensing) Transition back to `Idle` state.
    *   (Alternatively, you could have a decision based on a "product ready" signal if it were more complex, but for this simple example, the dispense action leads back to Idle.)

**(More detailed breakdown for realization):**

Let's assume a clock signal `CLK` drives the state transitions.

**State Table:**

| Current State | Input Coin | Next State | Output AcceptCoin | Output Dispense |
| :------------ | :--------- | :--------- | :---------------- | :-------------- |
| Idle          | 0          | Idle       | 1                 | 0               |
| Idle          | 1          | Got50      | 0                 | 0               |
| Got50         | X (don't care) | Idle       | 0                 | 1               |

**State Assignment:**
*   Idle: 0
*   Got50: 1

Let `Q` be the state flip-flop.

**Populated State Table:**

| Current State (Q) | Input Coin | Next State (Q+) | Output AcceptCoin | Output Dispense |
| :---------------- | :--------- | :-------------- | :---------------- | :-------------- |
| 0                 | 0          | 0               | 1                 | 0               |
| 0                 | 1          | 1               | 0                 | 0               |
| 1                 | X          | 0               | 0                 | 1               |

**Flip-Flop Input Equation (for D flip-flop):**
*   `D = !Q * !Coin + Q` (This simplifies to `D = !Q * !Coin + 1` which isn't right)
Let's re-examine the `Got50` state. The output `Dispense` is active in `Got50`. The transition back to `Idle` occurs when the product is dispensed. We can consider the transition to occur at the next clock edge after entering `Got50`.

Let's refine:
*   **State: Idle**
    *   Outputs: `AcceptCoin = 1`
    *   Transition if `Coin = 1` to `Got50`.

*   **State: Got50**
    *   Outputs: `Dispense = 1`
    *   Transition to `Idle` (occurs after dispensing).

**Revised State Table:**

| Current State | Input Coin | Next State | Output AcceptCoin | Output Dispense |
| :------------ | :--------- | :--------- | :---------------- | :-------------- |
| Idle          | 0          | Idle       | 1                 | 0               |
| Idle          | 1          | Got50      | 0                 | 0               |
| Got50         | X          | Idle       | 0                 | 1               |

**State Assignment:**
*   Idle: `Q = 0`
*   Got50: `Q = 1`

**Flip-Flop Input Equation (for D flip-flop):**
*   `D = !Q * Coin + Q * 0` (for the transition to Got50)
*   `D = !Q * Coin` (This is the next state logic)

**Output Equations:**
*   `AcceptCoin = Q` (Moore output, active when in Idle state)
*   `Dispense = Q` (Moore output, active when in Got50 state)

**Logic Implementation:**
*   One D flip-flop.
*   D input of flip-flop: `D = !Q * Coin`
*   `AcceptCoin` output connected to `Q`.
*   `Dispense` output connected to `!Q` (no, `Dispense = Q` is incorrect).
    *   Let's assign: Idle = 0, Got50 = 1.
    *   `D = !Q * Coin`
    *   `AcceptCoin`: Active in Idle state (Q=0). So, `AcceptCoin = !Q`.
    *   `Dispense`: Active in Got50 state (Q=1). So, `Dispense = Q`.

**Final Logic:**
*   Flip-flop D input: `D = !Q * Coin`
*   Output `AcceptCoin = !Q`
*   Output `Dispense = Q`

---

**Question 2:**

Consider the following ASM chart snippet. Derive the state flip-flop input equations and the output equation for `Y`. Assume a D flip-flop implementation.

**(Conceptual ASM Chart Snippet):**
*   State `S0` (Output `Y=0`)
*   Decision: Input `A`
    *   If `A=0`: Transition to `S1` (Output `Y=1`)
    *   If `A=1`: Stay in `S0` (Output `Y=0`)

*   State `S1` (Output `Y=1`)
*   Decision: Input `A`
    *   If `A=0`: Transition to `S0` (Output `Y=0`)
    *   If `A=1`: Stay in `S1` (Output `Y=1`)

**Solution 2:**

**State Table:**

| Current State | Input A | Next State | Output Y |
| :------------ | :------ | :--------- | :------- |
| S0            | 0       | S1         | 1        |
| S0            | 1       | S0         | 0        |
| S1            | 0       | S0         | 0        |
| S1            | 1       | S1         | 1        |

**State Assignment:**
*   S0: `Q = 0`
*   S1: `Q = 1`

**Populated State Table:**

| Current State (Q) | Input A | Next State (Q+) | Output Y |
| :---------------- | :------ | :-------------- | :------- |
| 0                 | 0       | 1               | 1        |
| 0                 | 1       | 0               | 0        |
| 1                 | 0       | 0               | 0        |
| 1                 | 1       | 1               | 1        |

**Flip-Flop Input Equation (for D flip-flop):**
*   `D = !Q * A + Q * !A`
*   This is the equation for XOR: `D = Q ⊕ A`

**Output Equation:**
*   The output `Y` is determined by the state. This indicates Moore-type outputs.
*   `Y` is 0 in S0 (Q=0) and 1 in S1 (Q=1).
*   Therefore, `Y = Q`.

**Summary of Realization:**
*   One D flip-flop.
*   The D input of the flip-flop is connected to the output of an XOR gate whose inputs are the flip-flop's current output `Q` and the input `A`.
*   The `Y` output is directly connected to the flip-flop's output `Q`.

---

**Question 3:**

Determine if the following ASM chart snippet represents a Mealy or Moore machine, or a combination, and justify your answer.

**(Conceptual ASM Chart Snippet):**
*   State `A` (Output `Out1=1`)
*   Decision: Input `X`
    *   If `X=0`: Transition to `B` (Output `Out2=0`)
    *   If `X=1`: Stay in `A` (Output `Out1=0`)

*   State `B` (Output `Out1=0`)
*   Decision: Input `X`
    *   If `X=0`: Transition to `A` (Output `Out2=1`)
    *   If `X=1`: Stay in `B` (Output `Out1=1`)

**Solution 3:**

*   **Output `Out1`:** `Out1` has values specified within the state boxes (`Out1=1` in state A, `Out1=0` or `Out1=1` in state B depending on transition). When `Out1` is tied to a state, it's a Moore output. However, in state B, the output `Out1` changes depending on the transition. This means `Out1`'s value in state B is not solely determined by being in state B, but also by the input `X` causing the transition. Specifically, when in state B, if X=0, Out1=0, and if X=1, Out1=1. This implies `Out1` in state B is a Mealy output.
*   **Output `Out2`:** `Out2` has values specified on the transition paths (`Out2=0` from A to B, `Out2=1` from B to A). These outputs are dependent on both the current state and the input `X` that causes the transition. Therefore, `Out2` is a Mealy output.

**Conclusion:** This ASM chart snippet represents a **combination of Moore and Mealy outputs**. `Out1` exhibits Moore behavior in state A but Mealy behavior in state B (as its value depends on the input `X`). `Out2` is clearly a Mealy output.

**Important Point:** When an output's value in a particular state depends on the input conditions of the transition *leading to* or *within* that state, it's considered a Mealy output, even if it's written within the state box. If the output is solely determined by being in that state, irrespective of inputs, it's a Moore output.

## 9. Key Points to Remember

*   **ASM charts are graphical representations of sequential circuit behavior.**
*   They combine state diagrams and flowcharts.
*   Key components: State boxes, decision boxes, conditional output boxes, and links.
*   The number of states dictates the minimum number of flip-flops required.
*   Realization involves deriving flip-flop input equations and output equations from the ASM chart, typically via a state table.
*   Outputs can be **Moore** (state-dependent) or **Mealy** (state and input dependent).
*   The ASM chart provides a clear roadmap for hardware implementation using flip-flops and combinational logic.
*   Understanding the distinction between Moore and Mealy outputs is crucial for correct realization.
*   ASM charts are powerful tools for designing synchronous sequential circuits and can be mapped to HDL code.

This concludes Module 2 on ASM Charts and their Realization. Remember to practice drawing ASM charts for various sequential operations and then translating them into state tables and Boolean equations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
