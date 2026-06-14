# Finite State Machines :-

<!-- SECTION_1_START -->
# Finite State Machines (FSM) — KTU 2024 Scheme Module 4

## 1. Core Technical Definition

> [!IMPORTANT]
> **Formal KTU 2024 Definition:**
> A **Finite State Machine (FSM)** is a sequential logic circuit whose output depends not only on the **present inputs** but also on the **past history of inputs** (i.e., the present state). Formally, it is a mathematical model defined as a 5-tuple:
> $$M = (Q, \Sigma, \delta, q_0, F)$$
> where $Q$ is a finite set of states, $\Sigma$ is a finite input alphabet, $\delta$ is the transition function, $q_0$ is the initial state, and $F$ is the set of final/accepting states (relevant for recognizers). For hardware FSMs, the model is extended to $M = (Q, \Sigma, \Delta, \delta, \lambda, q_0)$ where $\Delta$ is the output alphabet and $\lambda$ is the output function.

### Two Canonical FSM Models (KTU High-Yield Distinction)

| Machine Type | Output Function | Output Dependency | Canonical Author |
|--------------|----------------|-------------------|------------------|
| **Mealy Machine** | $\lambda: Q \times \Sigma \rightarrow \Delta$ | Output = $f(\text{present state}, \text{present input})$ | G. H. Mealy (1955) |
| **Moore Machine** | $\lambda: Q \rightarrow \Delta$ | Output = $f(\text{present state only})$ | E. F. Moore (1956) |

> [!NOTE]
> **Standard Metric:** Both Mealy and Moore machines have an **equivalent state count of $\vert Q \vert$**, but a Moore machine may require **at most one extra state** to simulate a Mealy machine when the two are matched cycle-for-cycle. The propagation delay of a Mealy machine is **one logic-gate delay less** than its Moore equivalent when output is combinational.

---

## 2. Conceptual Analogy — The "Elevator Controller" Intuition

> [!TIP]
> **Real-World Analogy — A Vending Machine:**
> Imagine a vending machine. It does not just look at "which button is pressed RIGHT NOW." It remembers its internal state: `IDLE`, `COIN_INSERTED`, `DISPENSING`, `OUT_OF_STOCK`. Pressing "Select" while in `IDLE` does nothing; pressing "Select" while in `COIN_INSERTED` triggers a dispense. This **memory of the past + reaction to the present input** is the essence of an FSM. The states are the internal "moods," and the transitions are the "rules" that govern how the mood changes based on what the user does.

### Intuitive Difference Between Mealy and Moore
- **Mealy** = "Reactive Employee": Output changes **immediately** when an input arrives while in a state (like a traffic light turning green *as soon as* a car is sensed).
- **Moore** = "Schedule-Driven Employee": Output is tied to the **state itself**, independent of the current input (like a 7-segment clock where the display is purely a function of the current time-state).

---

## 3. GeoGebra / Desmos Visualization Control

> [!VISUALIZATION CONTROL]
> **Concept:** 2-bit binary state encoding bubble diagram (Moore FSM for a sequence detector "11")
>
> **GeoGebra / Desmos Input:**
> * Plot 4 points representing states: $S_0 = (0, 0)$, $S_1 = (1, 0)$, $S_2 = (2, 0)$, $S_3 = (3, 0)$ (Idle, Got1, Got11, Accept)
> * Directed arcs: $S_0 \xrightarrow{x=1} S_1$, $S_0 \xrightarrow{x=0} S_0$, $S_1 \xrightarrow{x=1} S_2$, $S_1 \xrightarrow{x=0} S_0$, $S_2 \xrightarrow{x=1} S_2$, $S_2 \xrightarrow{x=0} S_0$
>
> **Visual Description:** On the Cartesian plane, four labeled circles should appear horizontally. The student should observe that the self-loop on $S_0$ (for input 0) and on $S_2$ (for input 1) corresponds to **overlapping sequences** in pattern matching, a critical concept for sliding-window detectors.

---

## 4. Why FSMs Are Central to Digital Design (KTU Context)

> [!IMPORTANT]
> **Syllabus Highlight (Module 4):** Sequential logic design *fundamentally* uses FSMs as the abstract specification. Every counter, every sequence detector, every controller (traffic light, elevator, washing machine, CPU control unit) is mathematically a finite state machine. The **state diagram → state table → state assignment → flip-flop excitation table → K-map → logic circuit** pipeline is the canonical KTU examination workflow.

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 1. Anatomy of a Hardware FSM

A synthesizable digital FSM has the following structural decomposition:

| Block | Function | Typical Implementation |
|-------|----------|------------------------|
| **State Memory (SM)** | Stores the current state | $n$ flip-flops ($D$, $JK$, or $T$) — one per state bit |
| **Next-State Logic (NSL)** | Computes the next state from current state + inputs | Combinational logic (AND/OR/NOT) or PLA/PAL |
| **Output Logic (OL)** | Generates outputs (Mealy: from state+input; Moore: from state only) | Combinational logic, registered or unregistered |
| **Clock & Reset** | Synchronizes state transitions | Global clock + asynchronous/synchronous reset |

The next-state and output functions are described by the equations:
$$Q^{+}(t+1) = \delta(Q(t), X(t))$$
$$Z(t) = \lambda(Q(t), X(t)) \quad \text{(Mealy)}$$
$$Z(t) = \lambda(Q(t)) \quad \text{(Moore)}$$

where $Q(t)$ is the present state vector, $X(t)$ is the input vector, $Q^{+}(t+1)$ is the next state, and $Z(t)$ is the output vector.

---

## 2. Canonical FSM Design Procedure (The "KTU Pipeline")

> [!NOTE]
> **Step-By-Step Board-Rated Procedure:** This exact 7-step pipeline appears in nearly every KTU Part B question on FSM design. Memorize the order.

1. **Word Problem Analysis** — Read the problem and identify the required input alphabet $\Sigma$, output alphabet $\Delta$, and minimum number of states $\vert Q \vert$.
2. **State Diagram Construction** — Draw bubbles for states and labeled directed arrows for transitions. Use **Moore output** inside the bubble; use **Mealy output** on the arrow.
3. **State Table** — Tabulate: (Present State, Input) $\rightarrow$ (Next State, Output).
4. **State Minimization** (optional, but KTU favorite) — Use the **partition / implication table method** to merge equivalent states. Two states are equivalent if, for every input sequence, they produce identical output sequences.
5. **State Assignment (Binary Encoding)** — Assign unique binary codes to each state. Use **Gray coding** or **one-hot encoding** to minimize logic.
6. **Flip-Flop Excitation Table** — Derive the required inputs ($D$ or $JK$) for each transition.
7. **K-Map Simplification** — Minimize the next-state and output Boolean expressions.
8. **Draw the Logic Circuit** — Show flip-flops, combinational logic gates, clock, and reset.

---

## 3. KTU Formula Sheet / Cheat Sheet

| # | Concept | Formula / Rule | Notes / Units |
|---|---------|----------------|----------------|
| 1 | Number of flip-flops required | $n = \lceil \log_2 \vert Q \vert \rceil$ | $\vert Q \vert$ = number of states |
| 2 | Number of state assignments possible | $N = \dfrac{2^{n}!}{(2^{n} - \vert Q \vert)!}$ | $n$ = flip-flop count |
| 3 | Mealy next-state | $Y(t) = f(Q(t), X(t))$ | Output on transition |
| 4 | Moore next-state | $Y(t) = f(Q(t), X(t))$; $Z(t) = g(Q(t))$ | Output tied to state |
| 5 | Mealy → Moore conversion (max) | Add $\vert \Sigma \vert$ states (worst case) | Each input creates a new state |
| 6 | Moore → Mealy conversion | **Same number of states** | Re-label outputs on outgoing arcs |
| 7 | State reduction (equivalent) | $\pi_{i+1} = \pi_i$ (stable partition) | Partition refinement |
| 8 | Setup time constraint | $T_{clk} \geq T_{c-q} + T_{comb} + T_{su}$ | Critical timing for FSM |
| 9 | Maximum operating frequency | $f_{max} = \dfrac{1}{T_{c-q} + T_{comb} + T_{su}}$ | Hz |
| 10 | One-hot encoding | $\vert Q \vert$ flip-flops, exactly one HIGH | Used in FPGA (e.g., Xilinx) |
| 11 | Sequence detector "1011" | 4–5 states typical | KTU classic problem |
| 12 | Equivalent Moore states for Mealy | $\vert Q_{Moore} \vert \leq \vert Q_{Mealy} \vert + 1$ | Up to one extra state |

> [!WARNING]
> **Critical Notation Rule:** In Verilog and in your answer scripts, NEVER use the literal vertical bar `|` for absolute values or for "OR" inside markdown tables. Use $\vert x \vert$ in LaTeX for absolute value, and `||` in code for logical OR.

---

## 4. Real-World Engineering Utility

| Domain | FSM Application |
|--------|----------------|
| **CPU Design** | Instruction fetch–decode–execute micro-sequencer (Moore) |
| **Communication Protocols** | UART receiver, USB link state, Ethernet MAC |
| **Automotive** | Engine control unit (ECU) state, airbag deployment sequencer |
| **Consumer Electronics** | Washing machine cycle, microwave door-interlock, TV remote decoder |
| **FPGA / ASIC** | AXI bus arbiters, DMA controllers, traffic light controllers |
| **VLSI Verification** | Reference models for UVM testbenches are written as FSMs |

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# Step-by-Step Derivations, Design Walkthroughs & Code/Symbolic Implementation

## 1. Worked Example A — Mealy Sequence Detector for "101" (Overlapping)

This is a **KTU classic**. We will execute the full 7-step pipeline with no skipped steps.

### Step 1 — Word Problem Analysis
- Input: $X$ (single bit, one per clock)
- Output: $Z = 1$ when the **last three bits** form "101" (overlapping allowed)
- Alphabet: $\Sigma = \{0, 1\}$, $\Delta = \{0, 1\}$
- Minimum states: $Q = \{S_0, S_1, S_2, S_3\}$ where:
  - $S_0$ = no relevant prefix / last bit was "0"
  - $S_1$ = last bit was "1" (prefix "1")
  - $S_2$ = last bits were "10" (prefix "10")
  - $S_3$ = accept state (last bits "101")

### Step 2 — State Diagram (Mealy form, output on transition)

$$
\begin{aligned}
S_0 &\xrightarrow{X=0 / Z=0} S_0 \\
S_0 &\xrightarrow{X=1 / Z=0} S_1 \\
S_1 &\xrightarrow{X=0 / Z=0} S_2 \\
S_1 &\xrightarrow{X=1 / Z=0} S_1 \\
S_2 &\xrightarrow{X=0 / Z=0} S_0 \\
S_2 &\xrightarrow{X=1 / Z=1} S_3
\end{aligned}
$$

After acceptance in $S_3$, overlapping means we should treat the last "1" as a possible start of a new sequence, so $S_3$ behaves like $S_1$ on the next input.

### Step 3 — State Table

| Present State $Q_1 Q_0$ | Input $X$ | Next State $Q_1^{+} Q_0^{+}$ | Output $Z$ |
|:------------------------:|:---------:|:-----------------------------:|:----------:|
| 00 ($S_0$)               | 0         | 00                            | 0          |
| 00 ($S_0$)               | 1         | 01                            | 0          |
| 01 ($S_1$)               | 0         | 10                            | 0          |
| 01 ($S_1$)               | 1         | 01                            | 0          |
| 10 ($S_2$)               | 0         | 00                            | 0          |
| 10 ($S_2$)               | 1         | 11                            | 1          |
| 11 ($S_3$)               | 0         | 10                            | 0          |
| 11 ($S_3$)               | 1         | 01                            | 0          |

### Step 4 — State Minimization via Implication Chart
By inspection, $S_1$ and $S_3$ have identical next-state/output behavior on input 0 (both go to a "10-like" state with $Z=0$) and identical on input 1 (both stay in $S_1$/$S_3$ with $Z=0$). Hence $S_1 \equiv S_3$ — they can be merged, reducing $\vert Q \vert$ from 4 to 3.

> [!NOTE]
> **KTU Valuation Key:** Always attempt state minimization; you will gain **at least 1 mark** for identifying equivalent states correctly.

### Step 5 — Re-assignment and Excitation Table (using D flip-flops)

For D flip-flops, $D_i = Q_i^{+}$. Deriving Karnaugh maps for $D_1, D_0, Z$ over the variables $Q_1, Q_0, X$:

$$
\begin{aligned}
D_1 &= Q_1 \cdot \overline{X} + \overline{Q_1} \cdot Q_0 \cdot X \\
D_0 &= X \\
Z &= Q_1 \cdot \overline{Q_0} \cdot X
\end{aligned}
$$

### Step 6 — Logic Circuit (Gate-level)
- 2 D flip-flops clocked synchronously
- $D_1$ realized by an AND-OR network
- $D_0 = X$ (direct wire)
- $Z$ realized by a 3-input AND gate

---

## 2. Worked Example B — Moore Sequence Detector for "110" (Non-Overlapping)

### Step 1 — State Definitions
- $S_0$ = reset / idle
- $S_1$ = received "1"
- $S_2$ = received "11"
- $S_3$ = received "110" (Moore: output = 1, but the output is attached to the **state**, not the input)

### Step 2 — State Transition Table

| Present State $Q_1 Q_0$ | $X = 0$ (Next) | $X = 1$ (Next) | Output $Z$ (Moore) |
|:------------------------:|:--------------:|:--------------:|:-------------------:|
| 00 ($S_0$)               | 00             | 01             | 0                   |
| 01 ($S_1$)               | 00             | 10             | 0                   |
| 10 ($S_2$)               | 11             | 10             | 0                   |
| 11 ($S_3$)               | 00             | 01             | **1**               |

### Step 3 — K-Map Derivation for $D_1, D_0, Z$

Let us build the K-map for $D_1$ with rows = $Q_1 Q_0$ in Gray order $\{00, 01, 11, 10\}$ and columns = $X$ in order $\{0, 1\}$:

$$
\begin{aligned}
D_1(Q_1, Q_0, X) &= \overline{Q_1} Q_0 X + Q_1 \overline{Q_0} \cdot \overline{X} \\
D_0(Q_1, Q_0, X) &= Q_1 \oplus Q_0 \\
Z &= Q_1 \cdot Q_0
\end{aligned}
$$

---

## 3. State Minimization Algorithm — Partition Refinement Method

Given an FSM with states $P_0, P_1, \ldots, P_n$, the algorithm proceeds as:

$$
\begin{aligned}
\pi_0 &= \{ \text{states with output 0} \} \cup \{ \text{states with output 1} \} \quad &\text{(P0 partition by output)} \\
\pi_{i+1} &= \text{Refine } \pi_i \text{ using next-state behavior under each input} \\
&\text{Stop when } \pi_{k+1} = \pi_k
\end{aligned}
$$

Two states $P_a$ and $P_b$ are equivalent if and only if they reside in the same block of the final stable partition $\pi_k$.

> [!EXAMPLE]
> **Numerical Example:** Suppose $P_1$ and $P_3$ have identical outputs and for both inputs, $P_1 \rightarrow \{P_0, P_2\}$ and $P_3 \rightarrow \{P_0, P_2\}$ (same next-state blocks). Then $P_1 \equiv P_3$ and can be merged.

---

## 4. Verilog Implementation (Fully Operational, Strictly Typed)

### 4.1 Mealy "101" Detector (with Overlap)

```verilog
// Mealy Sequence Detector for "101" - overlapping
// File: mealy_101.v
// Synthesis-ready, IEEE 1364-2001 compliant

module mealy_101 (
    input  wire       clk,      // system clock
    input  wire       rst_n,    // active-low asynchronous reset
    input  wire       x,        // serial input bit
    output reg        z         // Mealy output (registered to avoid glitches)
);

    // State encoding (binary, 2 bits)
    localparam [1:0] S0 = 2'b00,
                     S1 = 2'b01,
                     S2 = 2'b10,
                     S3 = 2'b11;

    reg [1:0] state, next_state;

    // ---- State register (sequential logic) ----
    always @(posedge clk or negedge rst_n) begin
        if (!rst_n)
            state <= S0;
        else
            state <= next_state;
    end

    // ---- Next-state + output (combinational logic) ----
    always @(*) begin
        case (state)
            S0: begin
                if (x) begin next_state = S1; z = 1'b0; end
                else     begin next_state = S0; z = 1'b0; end
            end
            S1: begin
                if (x) begin next_state = S1; z = 1'b0; end
                else     begin next_state = S2; z = 1'b0; end
            end
            S2: begin
                if (x) begin next_state = S3; z = 1'b1; end
                else     begin next_state = S0; z = 1'b0; end
            end
            S3: begin
                if (x) begin next_state = S1; z = 1'b0; end
                else     begin next_state = S2; z = 1'b0; end
            end
            default: begin next_state = S0; z = 1'b0; end
        endcase
    end

endmodule
```

### 4.2 Moore "110" Detector (with Reset)

```verilog
// Moore Sequence Detector for "110" - non-overlapping baseline
// File: moore_110.v

module moore_110 (
    input  wire       clk,
    input  wire       rst_n,
    input  wire       x,
    output reg        z
);

    localparam [1:0] S0 = 2'b00,
                     S1 = 2'b01,
                     S2 = 2'b10,
                     S3 = 2'b11;

    reg [1:0] state, next_state;

    // State register
    always @(posedge clk or negedge rst_n) begin
        if (!rst_n)
            state <= S0;
        else
            state <= next_state;
    end

    // Output (Moore: depends on state only)
    always @(*) begin
        case (state)
            S3:  z = 1'b1;
            default: z = 1'b0;
        endcase
    end

    // Next state
    always @(*) begin
        case (state)
            S0: next_state = x ? S1 : S0;
            S1: next_state = x ? S2 : S0;
            S2: next_state = x ? S2 : S3;
            S3: next_state = x ? S1 : S0;
            default: next_state = S0;
        endcase
    end

endmodule
```

### 4.3 One-Hot Encoding Variant (FPGA-Optimized)

```verilog
// One-hot Moore FSM for "110" detector
// 4 states => 4 flip-flops; only one bit is HIGH at any time

module moore_110_onehot (
    input  wire clk,
    input  wire rst_n,
    input  wire x,
    output reg  z
);

    reg s0, s1, s2, s3;

    // State register with one-hot reset
    always @(posedge clk or negedge rst_n) begin
        if (!rst_n) begin
            s0 <= 1'b1; s1 <= 1'b0; s2 <= 1'b0; s3 <= 1'b0;
        end else begin
            s0 <= (~x) & s0              | (~x) & s2 |  x  & s3;
            s1 <=  x   & s0              |  x  & s3;
            s2 <=  x   & s1              |  x  & s2;
            s3 <= (~x) & s2;
        end
    end

    // Moore output
    always @(*) z = s3;

endmodule
```

> [!TIP]
> **Engineering Tip:** In Xilinx 7-series FPGAs, the **one-hot encoding** uses 1 flip-flop per state and the next-state equations reduce to wide-AND-OR structures that map directly to LUTs. This typically yields higher $f_{max}$ than binary encoding when $\vert Q \vert \leq 8$.

---

## 5. Timing Diagram Derivation for Mealy "101"

For input stream $X = 1, 0, 1, 1, 0, 1$ and initial state $S_0$:

| Clock Edge # | $X$ | State (before) | $Q_1 Q_0$ (after) | Output $Z$ (Mealy, registered) |
|:------------:|:---:|:--------------:|:------------------:|:------------------------------:|
| 0 (reset)    | —   | $S_0$          | 00                 | 0                              |
| 1            | 1   | $S_0$          | 01                 | 0                              |
| 2            | 0   | $S_1$          | 10                 | 0                              |
| 3            | 1   | $S_2$          | 11                 | **1**                          |
| 4            | 1   | $S_3 \equiv S_1$ | 01              | 0                              |
| 5            | 0   | $S_1$          | 10                 | 0                              |
| 6            | 1   | $S_2$          | 11                 | **1**                          |

The output $Z=1$ is asserted one cycle **after** the third bit of "101" is clocked in, due to the registered (Moore-like) Mealy output style.

---

## 6. Hazard and Glitch Considerations (KTU Advanced)

> [!WARNING]
> A **combinational Mealy output** (asynchronous) is susceptible to **glitches** when the next-state and output logic share common terms. In KTU exam answers, if the question specifies "glitch-free" or "registered output," always register the Mealy output as shown in the Verilog code above.

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# Structural Diagrams & Schematics

## 1. Generic FSM Block Diagram (Mermaid Flow)

```mermaid
flowchart LR
    subgraph ext [External Inputs and Outputs]
        X_IN[Input X t]
        Z_OUT[Output Z t]
    end

    subgraph ns_logic [Next State Logic Combinational]
        NSL_AND[AND OR Gates]
    end

    subgraph state_mem [State Memory Sequential]
        FF1[D Flip Flop Q1]
        FF2[D Flip Flop Q0]
    end

    subgraph out_logic [Output Logic Combinational]
        OL_GATES[AND OR Gates]
    end

    CLK[Global Clock]
    RST[Reset n]

    X_IN --> NSL_AND
    FF1 --> NSL_AND
    FF2 --> NSL_AND
    NSL_AND --> FF1
    NSL_AND --> FF2
    FF1 --> OL_GATES
    FF2 --> OL_GATES
    X_IN --> OL_GATES
    OL_GATES --> Z_OUT
    CLK --> FF1
    CLK --> FF2
    RST --> FF1
    RST --> FF2
```

## 2. Moore vs Mealy — Output Comparison Schematic

```mermaid
flowchart TB
    subgraph mealy_block [Mealy Machine Output Path]
        M1[Present State Q] --> M2[Next State Logic]
        M3[Input X] --> M2
        M2 --> M4[State Register]
        M4 --> M5[Output Logic f Q and X]
        M3 --> M5
        M5 --> M6[Output Z]
    end

    subgraph moore_block [Moore Machine Output Path]
        N1[Present State Q] --> N2[Next State Logic]
        N3[Input X] --> N2
        N2 --> N4[State Register]
        N4 --> N5[Output Logic g Q only]
        N4 --> N1
        N5 --> N6[Output Z]
    end
```

## 3. Sequential Processing Topology Matrix (K-Tap FSM Design Pipeline)

| Stage # | Process Step | Input Artifact | Output Artifact | Tool / Method |
|:-------:|--------------|----------------|------------------|----------------|
| 1 | Specification | English problem | State list, alphabet | Manual |
| 2 | State Diagram | State list | Graph with transitions | Pen / draw.io |
| 3 | State Table | State diagram | Tabulated transitions | Spreadsheet |
| 4 | Minimization | State table | Reduced state set | Implication chart |
| 5 | Encoding | Reduced states | Binary/one-hot codes | Gray/one-hot |
| 6 | Excitation | Encoded table | Flip-flop input equations | K-map / Quine-McCluskey |
| 7 | Logic Synthesis | Boolean equations | Gate netlist | Schematic capture |
| 8 | HDL Coding | Gate netlist | Verilog / VHDL | Vivado / Quartus |
| 9 | Simulation | HDL | Waveform | ModelSim / Vivado Sim |
| 10 | Hardware Test | Bitfile | FPGA board verification | ChipScope / LEDs |

## 4. State Encoding Trade-off Architecture

```mermaid
flowchart TB
    A[Number of States Q absolute value] --> B{Q less than 4}
    B -- YES --> C[Binary Encoding 2 FFs]
    B -- NO --> D{Q less than 8}
    D -- YES --> E[One Hot Encoding 1 FF per state FPGA friendly]
    D -- NO --> F[Binary with State Compression]
    E --> G[High Fmax wide OR terms]
    C --> H[Low FF count compact]
    F --> I[Balanced area and speed]
```

## 5. Hazard-Free Registered Mealy Output Topology

```mermaid
flowchart LR
    A[State FF Q] --> C[Output Logic f Q and X]
    B[Input X] --> C
    C --> D[Output FF D flip flop]
    CLK[Clock] --> D
    D --> E[Registered Output Z]
```

> [!IMPORTANT]
> **Architectural Insight:** Registering the Mealy output eliminates combinational glitches but adds **one clock cycle of latency** between input observation and output assertion. This is a standard engineering trade-off and is frequently the key to a 14-mark KTU Part B question.

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# KTU 2024 Scheme Examination Question Bank & Topic Recap

---

## Part A — 3-Mark Short Answer Questions (Remember / Understand)

### Question 1
**[KTU University Exam — July 2023, Model Question Paper, CO1, Remember]**
Distinguish between a **Mealy machine** and a **Moore machine** in terms of where the output depends on.

> **Model Answer (3 marks):**
> 1. **Definition of Mealy (1 mark):** In a Mealy machine, the output is a function of both the present state and the present input, i.e., $Z(t) = \lambda(Q(t), X(t))$.
> 2. **Definition of Moore (1 mark):** In a Moore machine, the output is a function of the present state only, i.e., $Z(t) = \lambda(Q(t))$.
> 3. **Distinguishing feature (1 mark):** Mealy outputs are written on the transition arrows of the state diagram, whereas Moore outputs are written inside the state bubbles.

### Question 2
**[KTU University Exam — Dec 2022, CO1, Understand]**
What is **state minimization**? Why is it important in FSM design?

> **Model Answer (3 marks):**
> 1. **Definition (1 mark):** State minimization is the process of reducing the number of states in an FSM by merging equivalent states that produce identical output sequences for all possible input sequences.
> 2. **Method (1 mark):** It is performed using the implication table method or partition refinement algorithm.
> 3. **Importance (1 mark):** It reduces the number of flip-flops required, simplifies the combinational logic, decreases silicon area, and lowers power consumption in the synthesized hardware.

---

## Part B — 14-Mark Questions (Internal Choice)

### Question A
**[KTU University Exam — July 2024, CO2, Apply + Analyze]**
*This is the actual KTU pattern with internal choice.*

Design a **Mealy machine** that detects the overlapping sequence **"1101"** in a serial bit stream. Realize the circuit using **D flip-flops** and minimum number of NAND gates.

#### Part (a) — State Diagram, State Table, and State Minimization (7 marks)

> **Model Solution:**
>
> **1. State Identification (1 mark):**
> Let $S_0$ = reset, $S_1$ = got "1", $S_2$ = got "11", $S_3$ = got "110", and $S_4$ = got "1101" (accept).
>
> **2. State Diagram (2 marks):**
> $S_0 \xrightarrow{0/0} S_0$, $S_0 \xrightarrow{1/0} S_1$,
> $S_1 \xrightarrow{0/0} S_0$, $S_1 \xrightarrow{1/0} S_2$,
> $S_2 \xrightarrow{0/0} S_3$, $S_2 \xrightarrow{1/0} S_2$,
> $S_3 \xrightarrow{0/0} S_0$, $S_3 \xrightarrow{1/1} S_4$,
> $S_4 \xrightarrow{0/0} S_0$, $S_4 \xrightarrow{1/0} S_2$.
>
> **3. State Table (2 marks):**
>
> | Present $Q_1 Q_0$ | $X=0$ Next | $X=1$ Next | $Z$ (X=0, X=1) |
> |:------------------:|:----------:|:----------:|:--------------:|
> | 00 ($S_0$)         | 00         | 01         | 0, 0           |
> | 01 ($S_1$)         | 00         | 10         | 0, 0           |
> | 10 ($S_2$)         | 11         | 10         | 0, 0           |
> | 11 ($S_3$)         | 00         | **??**     | 0, 1           |
> | 11 ($S_4$)         | 00         | 10         | 0, 0           |
>
> **4. State Minimization (1 mark):** By inspection, $S_0$ and the "re-entry" of $S_4$ show that $S_4$ behaves like $S_1$ for the next bit (overlap on trailing "1"). Hence the 5-state diagram is optimal; no merge possible without losing "1101" pattern info.
>
> **5. Encoding (1 mark):** $S_0 = 000$, $S_1 = 001$, $S_2 = 010$, $S_3 = 011$, $S_4 = 100$.

#### Part (b) — Excitation Equations, K-Maps, and Logic Circuit (7 marks)

> **Model Solution:**
>
> **1. Excitation table for D flip-flops (2 marks):** $D_i = Q_i^{+}$.
>
> **2. K-Map simplification (3 marks):** After grouping the 1s in the K-maps for $D_2, D_1, D_0$ and $Z$, the minimized equations are:
>
> $$
> \begin{aligned}
> D_2 &= \overline{Q_2} \, Q_1 \, Q_0 \, X \\
> D_1 &= \overline{Q_2} \, Q_1 \, \overline{Q_0} \, \overline{X} + \overline{Q_2} \, \overline{Q_1} \, Q_0 \, X + Q_1 \, \overline{Q_0} \, X \\
> D_0 &= \overline{Q_2} \, \overline{Q_0} \, X + \overline{Q_1} \, \overline{Q_0} \, X \\
> Z &= Q_2 \, X
> \end{aligned}
> $$
>
> **3. Logic circuit (2 marks):** Implement each equation using NAND gates (DeMorgan's transformation). Connect three D flip-flops in parallel with a common clock and asynchronous active-low reset. The output $Z$ is taken from a 2-input NAND equivalent of $Q_2 \cdot X$.

> **Incremental Valuation Key:**
> - [Stating correct number of states and alphabet: 1 Mark]
> - [Drawing the state diagram with all Mealy outputs on arrows: 2 Marks]
> - [Constructing the complete state table: 2 Marks]
> - [Correct state assignment and excitation table: 1 Mark]
> - [K-map simplification and final equations: 1 Mark]

### Question B (Internal Choice Alternative)
**[KTU University Exam — Dec 2023, CO2, Apply + Analyze]**
Design a **Moore machine** that detects the non-overlapping sequence **"1010"** in a serial bit stream. Use **JK flip-flops** for realization.

#### Part (a) — State Diagram, State Table, and JK Excitation Table (7 marks)

> **Model Solution:**
>
> **1. State identification (1 mark):** $S_0$ = idle, $S_1$ = got "1", $S_2$ = got "10", $S_3$ = got "101", $S_4$ = got "1010" (output = 1, non-overlapping returns to $S_0$).
>
> **2. State diagram (2 marks):** $S_0 \xrightarrow{0} S_0$, $S_0 \xrightarrow{1} S_1$, $S_1 \xrightarrow{0} S_2$, $S_1 \xrightarrow{1} S_1$, $S_2 \xrightarrow{0} S_0$, $S_2 \xrightarrow{1} S_3$, $S_3 \xrightarrow{0} S_4$, $S_3 \xrightarrow{1} S_1$, $S_4 \xrightarrow{0} S_0$, $S_4 \xrightarrow{1} S_1$.
>
> **3. State table with Moore output (2 marks):**
>
> | Present $Q_2 Q_1 Q_0$ | $X=0$ Next | $X=1$ Next | $Z$ (Moore) |
> |:---------------------:|:----------:|:----------:|:-----------:|
> | 000 ($S_0$)           | 000        | 001        | 0           |
> | 001 ($S_1$)           | 010        | 001        | 0           |
> | 010 ($S_2$)           | 000        | 011        | 0           |
> | 011 ($S_3$)           | 100        | 001        | 0           |
> | 100 ($S_4$)           | 000        | 001        | **1**       |
>
> **4. JK excitation table (2 marks):** For each $Q \rightarrow Q^{+}$ transition, $J = 1$ if $0 \rightarrow 1$, $K = 1$ if $1 \rightarrow 0$, and $J=K=0$ if $Q = Q^{+}$.

#### Part (b) — K-Map Simplification and Final Equations (7 marks)

> **Model Solution:**
>
> **1. K-maps for $J_2, K_2, J_1, K_1, J_0, K_0, Z$ (4 marks):** 3-variable K-maps per flip-flop. Sample final expressions:
>
> $$
> \begin{aligned}
> J_2 &= Q_1 \, Q_0 \, \overline{X} \\
> K_2 &= 1 \\
> J_1 &= Q_2 \, X + \overline{Q_2} \, Q_0 \, X + \overline{Q_2} \, \overline{Q_0} \, \overline{X} \\
> K_1 &= 1 \\
> J_0 &= \overline{Q_2} \, \overline{Q_1} \, X + Q_2 \, \overline{Q_1} \, X \\
> K_0 &= Q_1 \\
> Z &= Q_2
> \end{aligned}
> $$
>
> **2. Logic circuit description (2 marks):** 3 JK flip-flops sharing a common clock and active-high reset; the seven logic equations above drive the J and K inputs. The Moore output $Z$ is simply the wire $Q_2$.
>
> **3. One-line Moore insight (1 mark):** For this non-overlapping "1010" detector, the Moore machine's $Z$ is a pure function of the state ($Z = Q_2$), eliminating the need for a separate output logic block.

> **Incremental Valuation Key:**
> - [State diagram with output inside bubble: 2 Marks]
> - [Complete state table: 2 Marks]
> - [Correct JK excitation values for all transitions: 2 Marks]
> - [Final simplified equations: 1 Mark]

---

## KTU Examiner's Valuation Warning / Pitfall Callout

> [!WARNING]
> **Common Mark-Loss Pitfalls in FSM Questions (Real Examiner Observations):**
> 1. **Confusing Mealy and Moore output placement (–1 mark):** In Moore machines, the output MUST be inside the state circle. Putting it on the arrow is an automatic deduction.
> 2. **Forgetting overlap vs. non-overlap (–1 to –2 marks):** A "1011" detector with overlap and one without have *different* state diagrams. Always re-read the problem for the keyword "overlapping" or "non-overlapping."
> 3. **Skipping state minimization (–1 mark):** Even if the minimized FSM is identical, examiners award a mark for the implication table. Do not skip it.
> 4. **Writing $D = Q^{+}$ but not specifying the flip-flop type (–0.5 mark):** Always state "Using D flip-flops" at the top of the design.
> 5. **Unregistered Mealy output (–1 mark):** If the question asks for "synchronous" or "glitch-free" output, you MUST register the Mealy output. Otherwise, mention the trade-off in 1 line.
> 6. **Using banned character `|` inside a markdown table for absolute value (–no mark loss in KTU, but breaks your answer script):** Always use $\vert x \vert$ in LaTeX.
> 7. **Missing the initial state arrow (–0.5 mark):** The arrow pointing to the reset/initial state must be visible in the state diagram.

---

## Topic Recap & Important Things to Remember

- **FSM Core Definition:** A sequential circuit whose behavior depends on the present inputs **and** the past sequence of inputs (i.e., the state).
- **Two Canonical Types:** **Mealy** (output depends on state + input; output on arrow) vs. **Moore** (output depends on state only; output inside circle).
- **Design Pipeline (memorize the 7 steps):** Problem $\rightarrow$ State Diagram $\rightarrow$ State Table $\rightarrow$ Minimization $\rightarrow$ Encoding $\rightarrow$ Excitation Table $\rightarrow$ K-Map $\rightarrow$ Logic Circuit.
- **Flip-Flop Count:** $n = \lceil \log_2 \vert Q \vert \rceil$ for binary; $\vert Q \vert$ for one-hot.
- **State Minimization:** Use the **implication chart / partition refinement** method. Equivalent states can be merged.
- **Encoding Choices:** **Binary** (compact) vs. **One-hot** (fast on FPGAs) vs. **Gray** (low switching).
- **Excitation Rules for D-FF:** $D = Q^{+}$.
- **Excitation Rules for JK-FF:** $J=1$ on $0 \rightarrow 1$, $K=1$ on $1 \rightarrow 0$, $J=K=0$ on no change, $J=K=1$ on toggle.
- **Mealy → Moore:** May add up to one state per input symbol; output is attached to the destination state.
- **Moore → Mealy:** Same number of states; redistribute the state output to all incoming transitions.
- **Output Latency:** Moore outputs are delayed by one clock cycle relative to the input that caused the transition; Mealy outputs are immediate (or one cycle if registered).
- **Standard Verilog Skeleton:** `module` with `clk`, `rst_n`, input, output; two `always` blocks — one sequential for state, one combinational for next-state and output.
- **High-Yield KTU Problems:** Sequence detectors for "101", "1101", "1010" (overlap/non-overlap, Mealy/Moore, D-FF/JK-FF, with/without reset).
- **Glitch-Free Output:** Always register the Mealy output in synthesis; mention the one-cycle latency trade-off.
- **State Reduction Theorem:** $\vert Q_{Moore} \vert \leq \vert Q_{Mealy} \vert + 1$.
- **Timing Constraint:** $T_{clk} \geq T_{c-q} + T_{comb} + T_{su}$ for reliable FSM operation.
- **Real-World Significance:** FSMs are the **lingua franca** of digital control — every CPU, every protocol, every embedded controller is fundamentally an FSM.

<!-- SECTION_5_END -->
