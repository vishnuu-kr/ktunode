# Micro project*

<!-- SECTION_1_START -->
# 🏗️ VLSI Design (PECST415) — Module 4: FSM Micro-Project

## Core Technical Definition & Intuitive Overview

### 📌 Formal Definition (KTU 2024 Syllabus Terminology)

A **Finite State Machine (FSM)** is a sequential digital circuit whose behaviour is defined by a finite set of **states**, a set of **inputs**, a set of **outputs**, and a **state transition function** that maps the current state and current input to the next state. In VLSI design, FSMs form the **control logic backbone** of every datapath — they govern bus protocols (UART, I²C, SPI), bus arbiters, cache controllers, and CPU control units.

> [!IMPORTANT]
> **KTU 2024 Definition Box**
> An FSM is a 5-tuple **$M = (S, I, O, \delta, \lambda)$** where:
> - $S$ = finite non-empty set of **states**
> - $I$ = finite set of **input symbols**
> - $O$ = finite set of **output symbols**
> - $\delta: S \times I \rightarrow S$ = **next-state (transition) function**
> - $\lambda$ = **output function** (Mealy: $S \times I \rightarrow O$, Moore: $S \rightarrow O$)

### 🧠 Intuitive Real-World Analogy

Think of a **vending machine** as a physical FSM:
- **States** ($S$): `IDLE`, `COIN_INSERTED`, `DISPENSING`, `OUT_OF_STOCK`
- **Inputs** ($I$): `Coin_5`, `Coin_10`, `Select_Item`, `Cancel`
- **Outputs** ($O$): `Dispense_Motor_ON`, `LCD_Message`, `Return_Coin`
- **$\delta$**: When the machine is in `IDLE` and receives `Coin_5`, it transitions to `COIN_INSERTED`.
- **$\lambda$**: The output depends on the model — *Mealy* outputs depend on **state + input**; *Moore* outputs depend on **state alone** (like a stamp on a state that always shows up).

### 🎬 The "Traffic Light" Analogy for FSM Models

| Aspect | Mealy Machine | Moore Machine |
|---|---|---|
| **Analogy** | A traffic light that turns red *only when* a car is detected at night (output = state + sensor input) | A traffic light that has *fixed* green duration for every state (output = state alone) |
| **Dependence** | Inputs affect outputs **directly** | Outputs are a **property of the state** |
| **Latency** | Faster response (1 clock early possible) | Slower, more deterministic |
| **States Required** | Fewer states | More states (to encode output differences) |

> [!NOTE]
> **KTU Board Emphasis**
> In KTU VLSI papers, examiners *love* asking: *"How many states does the Mealy vs Moore version of the same sequence detector need?"* — The Moore machine always needs **one extra state** to "remember" the output.

### 📊 Key Design Metrics (Highlighted in **bold**)

- **Maximum Clock Frequency ($f_{max}$)** — Highest clock rate the synthesized FSM can run at, limited by the longest combinational path.
- **Critical Path Delay ($t_{pd}$)** — Sum of setup time, combinational logic delay, and clock-to-Q delay.
- **State Encoding Efficiency** — Number of flip-flops required $= \lceil \log_2 \vert S \vert \rceil$.
- **Power Dissipation** — $P_{total} = P_{static} + P_{dynamic} = P_{static} + \alpha C V_{DD}^{2} f$.

> [!VISUALIZATION CONTROL]
> **Concept:** State Transition Graph of a 2-bit Binary Counter FSM
> **Graph Equations (state transitions):**
> - $\delta(S_0, \text{clk}) = S_1$
> - $\delta(S_1, \text{clk}) = S_2$
> - $\delta(S_2, \text{clk}) = S_3$
> - $\delta(S_3, \text{clk}) = S_0$
> **Visual Description:** A circular cycle of four nodes ($S_0 \rightarrow S_1 \rightarrow S_2 \rightarrow S_3 \rightarrow S_0$) with parallel arcs for $Q=0$ and $Q=1$ branch conditions, plotted on a Moore output ring. Students should observe that in Moore, output labels *circle the states*, while in Mealy, they *circle the arrows*.

---

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
## Deep Theoretical Analysis & KTU High-Yield Formula Sheet

### 🔬 Operational Breakdown of an FSM Micro-Project

A KTU-style FSM micro-project always follows this **5-phase pipeline**:

1. **Specification Capture** — Write the English problem statement (e.g., "Detect overlapping sequence 1011").
2. **State Diagram Construction** — Draw circles for states, directed arrows for transitions, label arrows with `input/output`.
3. **State Minimization** — Apply the **partition refinement** or **implication table** method to merge equivalent states. Critical for area optimization.
4. **State Assignment / Encoding** — Choose between **Binary**, **One-Hot**, or **Gray encoding**. FPGA vendors (Xilinx, Intel) typically prefer **One-Hot** because it minimises combinational logic and maximises $f_{max}$.
5. **RTL Coding & Synthesis** — Write Verilog/VHDL with three always-blocks: (i) state register, (ii) next-state logic, (iii) output logic. Synthesize using **Yosys** (open-source) or **Vivado / Quartus** (industry-standard).

### 📐 The Three-Process Verilog Template (Industry Standard)

For synthesizable FSM code, always use **three distinct processes**:

```
┌─────────────────────────────────────┐
│  PROCESS 1: State Register (FFs)    │  → Sequential, posedge clk
├─────────────────────────────────────┤
│  PROCESS 2: Next-State Logic        │  → Combinational, sensitivity list
├─────────────────────────────────────┤
│  PROCESS 3: Output Logic            │  → Combinational (Moore) or
│                                      │     Registered (Mealy for glitch-free)
└─────────────────────────────────────┘
```

### 📊 KTU Formula Cheat Sheet — FSM Design Metrics

| Parameter | Formula / Rule | Application Context |
|---|---|---|
| Minimum flip-flops | $n = \lceil \log_2 N \rceil$, where $N = \vert S \vert$ | State register sizing |
| One-hot encoding FFs | $n = N$ (one FF per state) | FPGA implementation, high-speed |
| Next-state memory | $\text{ROM size} = 2^{n+i}$ bits | Microprogrammed FSM / PLA-based |
| Output memory (Mealy) | $\text{ROM size}_{out} = 2^{n+i}$ bits | Mealy output lookup |
| Output memory (Moore) | $\text{ROM size}_{out} = 2^{n}$ bits | Moore output lookup |
| Setup time constraint | $t_{clk} \geq t_{cq} + t_{combo} + t_{setup}$ | Timing closure |
| Hold time constraint | $t_{hold} \leq t_{cq} + t_{combo}$ | No race conditions |
| Dynamic power | $P_d = \alpha \cdot C_{L} \cdot V_{DD}^{2} \cdot f$ | Low-power FSM design |
| Glitch power factor | $P_{glitch} \approx 0.2 \text{ to } 0.3 \times P_{d}$ | Why we register outputs |

### 🏭 Real-World Engineering Utility of FSMs

FSMs are the **silent workhorses** of every silicon chip ever fabricated:

- **Communication Protocols**: UART, I²C, SPI, USB, PCIe, Ethernet MAC — all are FSMs running in hardware.
- **Processor Design**: The **Control Unit** of any RISC-V, ARM, or x86 core is an FSM (or microprogrammed FSM).
- **ASIC Verification**: UVM sequences drive testbenches that emulate FSM behaviour of the DUT (Design Under Test).
- **Automotive & IoT**: CAN bus controllers, sensor-fusion state machines in ADAS chips.
- **FPGA Accelerators**: FSMs orchestrate datapath operations in custom CNN accelerators, FFT engines, and crypto cores (AES round logic).

> [!NOTE]
> **KTU 2024 Industry Note**
> The semiconductor industry standard for FSM coding is **Synopsys Design Compiler** + **Verilog-2001** (with SystemVerilog optional extensions). For KTU microprojects, **Xilinx Vivado + Verilog** is the recommended toolchain.

---

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
## Step-by-Step Derivations & Code/Symbolic Implementation

### 🛠️ KTU Micro-Project: Overlapping "1011" Sequence Detector

This is the **canonical KTU micro-project** for Module 4. We will design it in **both Mealy and Moore** models with full RTL, simulation, and synthesis-ready code.

---

### 📋 Step 1: Problem Specification

> *"Design an FSM that detects the overlapping bit sequence **1011** on a serial input line `din`. When detected, the output `dout` must pulse HIGH for exactly one clock cycle. The detector should reset asynchronously."*

- **Input:** `din` (1-bit serial stream)
- **Output:** `dout` (1-bit detection pulse)
- **Reset:** Asynchronous, active-low
- **Clock:** Positive edge triggered

---

### 📊 Step 2: State Diagram Construction

**Mealy State Diagram (3 states):**

$$
\delta(S_0, 0) = S_0, \quad \lambda(S_0, 0) = 0
$$
$$
\delta(S_0, 1) = S_1, \quad \lambda(S_0, 1) = 0
$$
$$
\delta(S_1, 0) = S_2, \quad \lambda(S_1, 0) = 0
$$
$$
\delta(S_1, 1) = S_1, \quad \lambda(S_1, 1) = 0
$$
$$
\delta(S_2, 0) = S_0, \quad \lambda(S_2, 0) = 0
$$
$$
\delta(S_2, 1) = S_3, \quad \lambda(S_2, 1) = 0
$$
$$
\delta(S_3, 0) = S_2, \quad \lambda(S_3, 0) = 0
$$
$$
\delta(S_3, 1) = S_1, \quad \lambda(S_3, 1) = 1
$$

**Moore State Diagram (4 states):**

$$
\delta(S_0, 0) = S_0, \quad \lambda(S_0) = 0
$$
$$
\delta(S_0, 1) = S_1, \quad \lambda(S_0) = 0
$$
$$
\delta(S_1, 0) = S_2, \quad \lambda(S_1) = 0
$$
$$
\delta(S_1, 1) = S_1, \quad \lambda(S_1) = 0
$$
$$
\delta(S_2, 0) = S_0, \quad \lambda(S_2) = 0
$$
$$
\delta(S_2, 1) = S_3, \quad \lambda(S_2) = 0
$$
$$
\delta(S_3, 0) = S_2, \quad \lambda(S_3) = 0
$$
$$
\delta(S_3, 1) = S_4, \quad \lambda(S_3) = 0
$$
$$
\delta(S_4, 0) = S_2, \quad \lambda(S_4) = 1
$$
$$
\delta(S_4, 1) = S_1, \quad \lambda(S_4) = 0
$$

> [!IMPORTANT]
> **Why Moore needs $S_4$**: In Mealy, output `1` is generated the *instant* the last `1` is clocked in. In Moore, the output is a property of the *state entered after* the detection, hence the extra state $S_4$ with $\lambda(S_4) = 1$.

---

### 📈 Step 3: State Assignment (Binary Encoding)

| State | Mealy Code ($Q_1 Q_0$) | Moore Code ($Q_1 Q_0$) |
|---|---|---|
| $S_0$ | `00` | `00` |
| $S_1$ | `01` | `01` |
| $S_2$ | `10` | `10` |
| $S_3$ | `11` | `11` |
| $S_4$ | — | (needs 3 bits: `100`) |

**Mealy needs 2 FFs, Moore needs 3 FFs** — this is the **classic KTU board question**!

---

### 💻 Step 4: Complete Verilog Implementation (Synthesis-Ready)

#### 🔹 Mealy Machine — `mealy_1011.v`

```verilog
//=============================================================
// File        : mealy_1011.v
// Description : Overlapping '1011' sequence detector - MEALY
// Toolchain   : Vivado 2024.1 / Quartus Prime / Yosys
// Author      : KTU VLSI Design Micro-Project
//=============================================================
`timescale 1ns / 1ps

module mealy_1011 (
    input  wire       clk,      // System clock
    input  wire       rst_n,    // Async active-low reset
    input  wire       din,      // Serial data input
    output reg        dout      // Mealy output (registered)
);

    // ---------- State Encoding (Binary) ----------
    localparam [1:0] S0 = 2'b00,   // Initial / Idle state
                     S1 = 2'b01,   // Saw '1'
                     S2 = 2'b10,   // Saw '10'
                     S3 = 2'b11;   // Saw '101'

    reg [1:0] state, next_state;

    // ---------- PROCESS 1: State Register ----------
    always @(posedge clk or negedge rst_n) begin
        if (!rst_n)
            state <= S0;
        else
            state <= next_state;
    end

    // ---------- PROCESS 2: Next-State Logic ----------
    always @(*) begin
        case (state)
            S0: next_state = din ? S1 : S0;
            S1: next_state = din ? S1 : S2;
            S2: next_state = din ? S3 : S0;
            S3: next_state = din ? S1 : S2;
            default: next_state = S0;
        endcase
    end

    // ---------- PROCESS 3: Mealy Output Logic ----------
    // Output = function(state, din); here registered for glitch-free
    always @(posedge clk or negedge rst_n) begin
        if (!rst_n)
            dout <= 1'b0;
        else if (state == S3 && din == 1'b1)
            dout <= 1'b1;
        else
            dout <= 1'b0;
    end

endmodule
```

#### 🔹 Moore Machine — `moore_1011.v`

```verilog
//=============================================================
// File        : moore_1011.v
// Description : Overlapping '1011' sequence detector - MOORE
// Toolchain   : Vivado 2024.1 / Quartus Prime / Yosys
// Author      : KTU VLSI Design Micro-Project
//=============================================================
`timescale 1ns / 1ps

module moore_1011 (
    input  wire       clk,
    input  wire       rst_n,
    input  wire       din,
    output reg        dout
);

    // ---------- State Encoding (One-Hot) ----------
    localparam [4:0] S0 = 5'b00001,
                     S1 = 5'b00010,
                     S2 = 5'b00100,
                     S3 = 5'b01000,
                     S4 = 5'b10000;

    reg [4:0] state, next_state;

    // ---------- PROCESS 1: State Register ----------
    always @(posedge clk or negedge rst_n) begin
        if (!rst_n)
            state <= S0;
        else
            state <= next_state;
    end

    // ---------- PROCESS 2: Next-State Logic ----------
    always @(*) begin
        case (state)
            S0: next_state = din ? S1 : S0;
            S1: next_state = din ? S1 : S2;
            S2: next_state = din ? S3 : S0;
            S3: next_state = din ? S4 : S2;
            S4: next_state = din ? S1 : S2;
            default: next_state = S0;
        endcase
    end

    // ---------- PROCESS 3: Moore Output Logic ----------
    // Output is a pure function of state
    always @(*) begin
        dout = (state == S4) ? 1'b1 : 1'b0;
    end

endmodule
```

#### 🔹 Testbench — `tb_fsm_1011.v`

```verilog
`timescale 1ns / 1ps

module tb_fsm_1011;

    reg clk, rst_n, din;
    wire mealy_out, moore_out;

    // Clock generation: 100 MHz
    initial clk = 0;
    always #5 clk = ~clk;  // Period = 10 ns

    // DUT instantiations
    mealy_1011 u_mealy (.clk(clk), .rst_n(rst_n), .din(din), .dout(mealy_out));
    moore_1011  u_moore (.clk(clk), .rst_n(rst_n), .din(din), .dout(moore_out));

    // Stimulus
    initial begin
        $display(" Time | din | Mealy | Moore");
        $monitor("%4t |  %b  |   %b   |   %b", $time, din, mealy_out, moore_out);

        rst_n = 0; din = 0;
        #12 rst_n = 1;            // Release reset
        #10 din = 1; #10 din = 0; #10 din = 1; #10 din = 1;  // 1011
        #10 din = 0; #10 din = 1; #10 din = 1; #10 din = 1;  // overlap
        #10 din = 0; #10 din = 0; #10 din = 1; #10 din = 1;  // 0011
        #20 $finish;
    end

    // Waveform dump
    initial begin
        $dumpfile("fsm_1011.vcd");
        $dumpvars(0, tb_fsm_1011);
    end

endmodule
```

---

### 📊 Step 5: Synthesis Results (Expected on Xilinx Artix-7)

| Resource | Mealy (Binary) | Moore (One-Hot) |
|---|---|---|
| Flip-Flops | 3 (2 state + 1 out) | 5 (state only) |
| LUTs | 6 | 4 |
| $f_{max}$ (estimated) | ~250 MHz | ~310 MHz |
| Power (mW @ 100 MHz) | 1.8 mW | 1.4 mW |

> [!IMPORTANT]
> **Trade-off Insight**: One-Hot Moore uses *more FFs* but *fewer LUTs* and *higher $f_{max}$*. This is the classic **area-vs-speed** VLSI trade-off.

---

### 🧪 Step 6: Validation Against Input Vectors

| Time (ns) | `din` stream | Expected Mealy `dout` | Expected Moore `dout` |
|---|---|---|---|
| 40 | `1` | 0 | 0 |
| 60 | `0` | 0 | 0 |
| 80 | `1` | 0 | 0 |
| 100 | `1` | **1** (at edge of last `1`) | 0 |
| 110 | (next clk) | 0 | **1** (one cycle delayed) |
| 120 | `0` | 0 | 0 |
| 130 | `1` | 0 | 0 |
| 140 | `1` | 0 | 0 |
| 150 | `1` | **1** (overlap) | 0 |
| 160 | (next clk) | 0 | **1** |

> [!NOTE]
> **Board-Examiner Pattern**: Notice that Moore output is *one clock cycle delayed* relative to Mealy. This is the **golden rule** KTU examiners test.

---

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
## Structural Diagrams & Schematics

### 🗺️ Diagram 1: FSM Micro-Project Development Flow

```mermaid
flowchart TD
    A[Problem Specification] --> B[State Diagram]
    B --> C[State Minimization]
    C --> D[State Encoding Choice]
    D --> D1{Binary}
    D --> D2[One-Hot]
    D --> D3[Gray]
    D1 --> E[Verilog RTL Coding]
    D2 --> E
    D3 --> E
    E --> F[Functional Simulation]
    F --> G{Pass?}
    G -->|No| E
    G -->|Yes| H[Synthesis - Yosys/Vivado]
    H --> I[Place and Route]
    I --> J[Timing Analysis]
    J --> K{Timing Met?}
    K -->|No| L[Pipelining / Retiming]
    L --> H
    K -->|Yes| M[FPGA Bitstream Generation]
    M --> N[On-board Validation]
```

### 🏛️ Diagram 2: Internal Architecture of the Mealy FSM

```mermaid
flowchart LR
    subgraph INPUT_DOMAIN [Input Interface]
        DIN[din] --> IN_REG[Input Synchronizer]
        CLK[clk] --> IN_REG
        CLK --> STATE_REG
    end

    subgraph COMBO [Combinational Logic Cloud]
        IN_REG --> NS_LOGIC[Next State Logic]
        STATE_REG --> NS_LOGIC
        IN_REG --> OUT_LOGIC[Output Logic]
        STATE_REG --> OUT_LOGIC
    end

    subgraph STATE_DOMAIN [State Register]
        NS_LOGIC --> STATE_REG
        STATE_REG --> Q_OUT[Q1 Q0]
    end

    OUT_LOGIC --> DOUT_MEALY[dout - registered]
    Q_OUT --> Q_DEBUG[Probe for debug]
```

### 🔄 Diagram 3: Mealy vs Moore State Transition Comparison

```mermaid
stateDiagram-v2
    direction LR
    [*] --> S0_M: Mealy
    S0_M --> S0_M: din=0/dout=0
    S0_M --> S1_M: din=1/dout=0
    S1_M --> S1_M: din=1/dout=0
    S1_M --> S2_M: din=0/dout=0
    S2_M --> S0_M: din=0/dout=0
    S2_M --> S3_M: din=1/dout=0
    S3_M --> S2_M: din=0/dout=0
    S3_M --> S1_M: din=1/dout=1

    [*] --> S0_N: Moore
    S0_N --> S0_N: din=0/dout=0
    S0_N --> S1_N: din=1/dout=0
    S1_N --> S1_N: din=1/dout=0
    S1_N --> S2_N: din=0/dout=0
    S2_N --> S0_N: din=0/dout=0
    S2_N --> S3_N: din=1/dout=0
    S3_N --> S2_N: din=0/dout=0
    S3_N --> S4_N: din=1/dout=0
    S4_N --> S2_N: din=0/dout=1
    S4_N --> S1_N: din=1/dout=0
```

### 🧩 Diagram 4: Synthesis Tool-Flow Block Diagram

```mermaid
flowchart TB
    subgraph FRONTEND [Frontend]
        RTL[Verilog RTL] --> ELAB[Elaboration]
        ELAB --> GEN[Generic Netlist]
    end

    subgraph OPT [Optimization]
        GEN --> Gtech[GTECH Library]
        Gtech --> FSM_EXT[FSM Extraction]
        FSM_EXT --> FSM_OPT[State Encoding Optimization]
        FSM_OPT --> MAPPED[Mapped Netlist]
    end

    subgraph BACKEND [Backend]
        MAPPED --> PLACE[Placement]
        PLACE --> ROUTE[Routing]
        ROUTE --> TIMING[STA Timing Report]
        TIMING --> BIT[Bitstream]
    end
```

### 📋 Diagram 5: KTU Micro-Project Evaluation Rubric (Block Matrix)

| Phase | Deliverable | Tool | Marks (out of 100) |
|---|---|---|---|
| Specification | Problem statement + State diagram | Pen-paper | 10 |
| RTL Design | Verilog code (Mealy + Moore) | Vivado / Quartus | 25 |
| Simulation | Testbench + waveform dump | ISim / ModelSim | 20 |
| Synthesis | Gate-level netlist + area report | Yosys / Vivado | 20 |
| FPGA Demo | On-board LED verification | Basys-3 / Zybo | 15 |
| Report | IEEE-format document | LaTeX / Word | 10 |

---

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
## KTU 2024 Scheme Examination Question Bank & Topic Recap

### 📝 Part A Questions (3 Marks Each)

---

**Q1. [KTU University Exam - Dec 2023]**
**Differentiate between Mealy and Moore FSM with a state diagram and output equation.** (3 Marks) | **CO2, Understand**

**Model Answer:**

| Parameter | Mealy Machine | Moore Machine |
|---|---|---|
| Output equation | $\lambda(t) = f(\text{state}(t), \text{input}(t))$ | $\lambda(t) = f(\text{state}(t))$ |
| State count for same function | Less (e.g., 3 for 1011) | More (e.g., 4 for 1011) |
| Output timing | Combinational → may glitch | Registered → glitch-free |
| Input-to-output delay | 1 clock early possible | Strictly 1 clock |

**State diagram (Mealy):** Arrows labelled `input/output`. **State diagram (Moore):** State circles labelled `state/output`. **[Award 1 Mark for correct output equations, 1 Mark for state-count comparison, 1 Mark for diagram differentiation]**

---

**Q2. [KTU University Exam - July 2024]**
**Define state encoding. Compare Binary, One-Hot, and Gray encoding for FSMs.** (3 Marks) | **CO2, Remember**

**Model Answer:**

State encoding assigns a unique binary code to each FSM state. **[1 Mark]**

| Encoding | FFs Needed | Pros | Cons |
|---|---|---|---|
| **Binary** | $\lceil \log_2 N \rceil$ | Minimum FFs | Many bits toggle → glitches |
| **One-Hot** | $N$ | Fast decode, high $f_{max}$ | More FFs |
| **Gray** | $\lceil \log_2 N \rceil$ | Only 1 bit toggles → low power | Complex decoding |

**[1 Mark for each encoding with a valid trade-off]**

---

### 📝 Part B Questions (14 Marks Each — Internal Choice)

---

**Question A (14 Marks) — [KTU University Exam - Dec 2023]**

> **(a)** Design a Mealy FSM to detect the non-overlapping sequence **"1101"** on a serial input line `din`. Draw the state diagram, derive the state table, and write the synthesis-ready Verilog code using a 3-process template. (7 Marks) | **CO3, Apply**

> **(b)** Convert the Mealy machine from part (a) into an equivalent **Moore machine**. Show the state table, the encoding, and explain why the Moore version needs an additional state. Synthesize the area-delay trade-off. (7 Marks) | **CO3, Analyze**

**Model Solution:**

**(a) Mealy Design — 7 Marks**

State diagram with 4 states: $S_0$ (idle), $S_1$ (saw `1`), $S_2$ (saw `11`), $S_3$ (saw `110`). Output `1` on the transition $S_3 \xrightarrow{1} S_1$ with label `1/1`. **[State diagram: 2 Marks]**

State table:

| Present State | `din=0` → Next / Out | `din=1` → Next / Out |
|---|---|---|
| $S_0$ | $S_0$ / 0 | $S_1$ / 0 |
| $S_1$ | $S_2$ / 0 | $S_1$ / 0 |
| $S_2$ | $S_0$ / 0 | $S_3$ / 0 |
| $S_3$ | $S_2$ / 0 | $S_1$ / 1 |

**[State table: 2 Marks]**

Verilog code (excerpt — 3-process template):

```verilog
module mealy_1101 (
    input  wire clk, rst_n, din,
    output reg  dout
);
    localparam [1:0] S0=2'b00, S1=2'b01, S2=2'b10, S3=2'b11;
    reg [1:0] state, next;
    // Process 1: State register
    always @(posedge clk or negedge rst_n)
        state <= rst_n ? next : S0;
    // Process 2: Next-state
    always @(*) case(state)
        S0: next = din ? S1 : S0;
        S1: next = din ? S1 : S2;
        S2: next = din ? S3 : S0;
        S3: next = din ? S1 : S2;
    endcase
    // Process 3: Mealy output
    always @(posedge clk or negedge rst_n)
        dout <= (rst_n==0) ? 0 : (state==S3 && din==1);
endmodule
```

**[Verilog code: 3 Marks]**

---

**(b) Moore Conversion — 7 Marks**

Moore needs an extra state $S_4$ to hold the `1` output after detection. The transition $S_3 \xrightarrow{1} S_1$ in Mealy becomes $S_3 \xrightarrow{1} S_4$ (with $\lambda(S_4)=1$) then $S_4 \xrightarrow{0/1} S_2$ and $S_4 \xrightarrow{1/1} S_1$ depending on overlap rule. **[State addition explanation: 3 Marks]**

Encoding requires $\lceil \log_2 5 \rceil = 3$ FFs in Binary, or 5 FFs in One-Hot. **[Encoding: 2 Marks]**

| Aspect | Mealy | Moore |
|---|---|---|
| States | 4 | 5 |
| FFs (Binary) | 2 | 3 |
| Output registered? | No (combinational) | Yes (combinational but state-bound) |
| Glitch-free? | Needs explicit registration | Inherently safe |

**[Trade-off table: 2 Marks]**

---

**Question B (14 Marks) — [KTU University Exam - July 2024]**

> **(a)** With neat block diagrams, explain the **3-process Verilog template** for an FSM. Why is it preferred over the 2-process or 1-process style in industrial ASIC design? (7 Marks) | **CO2, Understand**

> **(b)** Design a **traffic light controller FSM** for a 4-way intersection with states `RED_NS`, `GREEN_NS`, `YELLOW_NS`, `RED_EW`, `GREEN_EW`, `YELLOW_EW`. Assume 5-second timing per state using a prescaler. Write the Verilog code, draw the Mermaid state diagram, and discuss the Moore vs Mealy choice for safety. (7 Marks) | **CO4, Apply**

**Model Solution Outline (Question B):**

**(a)** The 3-process template has: (i) **State register** with async reset, (ii) **Combinational next-state** with full sensitivity list, (iii) **Output logic** decoupled from transitions. **[3 Marks]**. Industry prefers it because: clearer synthesis inference (Vivado FSM property identifies 3-process FSMs with 99% accuracy), easier static timing closure, allows safe Mealy output registration. **[2 Marks]**. The 1-process style mixes all logic → causes latches and timing surprises; the 2-process style combines state+output → harder to debug. **[2 Marks]**

**(b)** Six Moore states (one per light state) with timing counter. Mermaid diagram in Section 4. Verilog uses a `timer[23:0]` register counting at 100 MHz to generate 5 s ticks. Moore is chosen because: (i) output (light colour) must be stable for the **entire** 5 s window, (ii) glitches in Mealy could cause brief wrong-colour flashes → **safety hazard** in real traffic. **[Verilog: 3 Marks, Moore safety rationale: 2 Marks, State diagram: 2 Marks]**

---

### ⚠️ KTU Examiner's Valuation Warning / Pitfall Callout

> [!WARNING]
> **Common Mark-Deduction Traps**
> 1. **Forgetting the `default` case** in the `case` statement → synthesis infers a latch → loses 1–2 marks.
> 2. **Using blocking (`=`) instead of non-blocking (`<=`) assignments** in sequential `always` blocks → race conditions → **zero credit for simulation** sometimes.
> 3. **Confusing Mealy output timing** — remember Moore output is *one cycle late*; do not draw waveforms where both pulse simultaneously.
> 4. **Skipping asynchronous reset polarity declaration** — state it as `active-low` or `active-high` explicitly in the module header.
> 5. **Wrong state encoding declaration width** — declaring `localparam [1:0] S4 = 2'b100` will cause truncation error; use `[2:0]` for Moore.
> 6. **Not labelling FSM output equation on the state diagram** — the single biggest deduction in KTU board exams.
> 7. **Failing to draw the Mermaid `stateDiagram-v2`** with proper `[*]` start/end nodes — examiners deduct 1 mark for malformed diagrams.

---

### 🧠 Topic Recap & Important Things to Remember

- **FSM 5-tuple**: $M = (S, I, O, \delta, \lambda)$ — memorize and reproduce in every exam answer.
- **Mealy output** $\lambda = f(\text{state}, \text{input})$; **Moore output** $\lambda = f(\text{state})$.
- **Moore needs $\geq 1$ extra state** for the same functionality as Mealy.
- **Binary encoding** minimises FFs; **One-Hot** maximises $f_{max}$ on FPGAs; **Gray** minimises toggle power.
- **3-process Verilog template** is industry-standard for synthesis.
- **Timing equation**: $T_{clk} \geq t_{cq} + t_{combo} + t_{setup}$ — always quote in timing questions.
- **Asynchronous reset** is preferred for FSMs because it brings the chip to a known state at power-up, even before clock stabilises.
- **Microproject deliverables**: state diagram + Verilog code + testbench waveform + synthesis report + on-board demo + IEEE report.
- **Overlap vs Non-overlap** detection: overlap reuses suffix bits (e.g., last `1` of `1011` becomes first `1` of next `1011`); non-overlap forces return to $S_0$.
- **Safe FSM coding rules**: full `case` with `default`, non-blocking in sequential, blocking in combinational, registered outputs for Mealy.
- **Tools**: Vivado (Xilinx), Quartus (Intel), Yosys (open-source), ModelSim/QuestaSim (simulation).
- **One-mark trick**: If asked "How many FFs?", the answer is $\lceil \log_2 \vert S \vert \rceil$ for binary, $\vert S \vert$ for one-hot.
- **Mermaid `stateDiagram-v2`** syntax: use `[*]` for start, `stateA --> stateB : label` for transitions.

---

<!-- SECTION_5_END -->
