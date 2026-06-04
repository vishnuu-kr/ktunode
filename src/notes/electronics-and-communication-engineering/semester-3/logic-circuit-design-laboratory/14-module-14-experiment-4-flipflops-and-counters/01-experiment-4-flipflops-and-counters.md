---
title: "Experiment 4: Flipflops and counters"
subject: "LOGIC CIRCUIT DESIGN LABORATORY"
module: "Module 14: Experiment 4: Flipflops and counters"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe45f"
status: "completed"
scrapedAt: "2026-05-23T17:46:35.796Z"
---
# Module 14: Experiment 4: Flip-flops and Counters - Logic Circuit Design Laboratory

## 1. Introduction

This module delves into the practical implementation and understanding of fundamental sequential logic circuits: flip-flops and counters. These are the building blocks of memory and timing mechanisms in digital systems. This experiment will reinforce theoretical concepts learned and provide hands-on experience in designing and testing these circuits.

## 2. Learning Outcomes

Upon successful completion of this experiment, you will be able to:

*   **Design and demonstrate the functioning of various flip-flops (SR, JK, D, T).** (CO1: K3)
*   **Design and demonstrate the functioning of various types of counters (ripple, synchronous, up, down).** (CO1: K3)
*   **Understand the state transition diagrams and characteristic tables of flip-flops and counters.** (CO1: K3)
*   **Implement flip-flops and counters using basic logic gates or dedicated ICs.** (CO1: K3)
*   **Test the functionality of implemented flip-flops and counters using a logic analyzer or oscilloscope.** (CO1: K3)
*   **Apply an industry-compatible hardware description language (Verilog HDL) to model and simulate flip-flops and counters.** (CO2: K3)
*   **(Optional, depending on lab setup) Implement flip-flops and counters on FPGA boards and connect external hardware.** (CO3: K3)
*   **Function effectively as an individual and in a team to accomplish the given task.** (CO4: K2)

## 3. Key Concepts and Definitions

### 3.1. Flip-flops: The Basic Memory Elements

Flip-flops are sequential logic circuits that store one bit of information. They are edge-triggered or level-triggered and have two stable states, representing 0 and 1.

#### 3.1.1. Latches vs. Flip-flops

*   **Latches:** Level-sensitive. Their output can change as long as the enable signal is active.
*   **Flip-flops:** Edge-sensitive. Their output changes only at the active edge (rising or falling) of the clock signal.

#### 3.1.2. SR Flip-flop

*   **Description:** The simplest flip-flop with two inputs, Set (S) and Reset (R).
*   **Operation:**
    *   S=1, R=0: Sets the output Q to 1.
    *   S=0, R=1: Resets the output Q to 0.
    *   S=0, R=0: Holds the current state.
    *   S=1, R=1: Forbidden or indeterminate state (causes Q and Q' to be the same).
*   **Characteristic Table:**

    | S   | R   | Q(t+1) |
    | :-- | :-- | :----- |
    | 0   | 0   | Q(t)   |
    | 0   | 1   | 0      |
    | 1   | 0   | 1      |
    | 1   | 1   | X (Invalid) |

*   **Implementation:** Can be built using NAND or NOR gates.

#### 3.1.3. JK Flip-flop

*   **Description:** A versatile flip-flop with inputs J and K. It overcomes the indeterminate state of the SR flip-flop.
*   **Operation:**
    *   J=0, K=0: Hold the current state.
    *   J=0, K=1: Reset the output Q to 0.
    *   J=1, K=0: Set the output Q to 1.
    *   J=1, K=1: Toggle the output (Q(t+1) = Q'(t)).
*   **Characteristic Table:**

    | J   | K   | Q(t+1) |
    | :-- | :-- | :----- |
    | 0   | 0   | Q(t)   |
    | 0   | 1   | 0      |
    | 1   | 0   | 1      |
    | 1   | 1   | Q'(t)  |

*   **Implementation:** Can be built from SR flip-flops by feeding back Q and Q' to the S and R inputs respectively.
*   **Note:** A JK flip-flop can be configured as other flip-flops:
    *   **D Flip-flop:** Connect J = D and K = D'.
    *   **T Flip-flop:** Connect J = K = T.

#### 3.1.4. D Flip-flop (Data or Delay Flip-flop)

*   **Description:** Has a single data input D. It stores the value of D at the active clock edge.
*   **Operation:** Q(t+1) = D.
*   **Characteristic Table:**

    | CLK | D   | Q(t+1) |
    | :-- | :-- | :----- |
    | ↑   | 0   | 0      |
    | ↑   | 1   | 1      |

*   **Implementation:** Commonly implemented using SR or JK flip-flops. It's a fundamental building block for registers.

#### 3.1.5. T Flip-flop (Toggle Flip-flop)

*   **Description:** Has a single input T. If T=0, it holds the state. If T=1, it toggles its output.
*   **Operation:**
    *   T=0: Q(t+1) = Q(t).
    *   T=1: Q(t+1) = Q'(t).
*   **Characteristic Table:**

    | CLK | T   | Q(t+1) |
    | :-- | :-- | :----- |
    | ↑   | 0   | Q(t)   |
    | ↑   | 1   | Q'(t)  |

*   **Implementation:** Can be made from a JK flip-flop by connecting J and K to T.

#### 3.1.6. Master-Slave Flip-flops

*   **Description:** A JK flip-flop configuration that uses two flip-flops (master and slave) connected in series and driven by inverted clock signals. This prevents the "race around" condition that can occur in some JK flip-flop implementations.
*   **Operation:** The master stage captures the input at the rising edge of the clock, and the slave stage transfers the master's output to the final output at the falling edge.

#### 3.1.7. Edge-Triggered Flip-flops

*   **Description:** The most common type of flip-flops, their output changes only at the transition (edge) of the clock signal (either rising edge or falling edge).

### 3.2. Counters

Counters are sequential circuits that count a sequence of events, typically triggered by a clock pulse. They are built using flip-flops.

#### 3.2.1. Asynchronous (Ripple) Counters

*   **Description:** In ripple counters, the output of one flip-flop serves as the clock input for the next flip-flop in the chain. This leads to a delay in the propagation of the clock signal, causing a ripple effect.
*   **Operation:** The first flip-flop toggles on each clock pulse. Subsequent flip-flops toggle only when their preceding flip-flop's output transitions from 1 to 0 (for JK flip-flops configured as T flip-flops).
*   **Types:**
    *   **Up Counter:** Counts in increasing order (0, 1, 2, 3...).
    *   **Down Counter:** Counts in decreasing order (3, 2, 1, 0...).
*   **Clocking:** The clock signal is applied only to the first flip-flop.
*   **Advantages:** Simple to design and implement.
*   **Disadvantages:** Slower due to propagation delay. Cumulative delay increases with the number of bits. Not suitable for high-speed applications.

**Example: 3-bit Ripple Up Counter using JK Flip-flops**

*   All J and K inputs are connected to logic HIGH (1).
*   The clock is applied to the CLK input of the first flip-flop (LSB).
*   The output of the first flip-flop (Q0) is connected to the CLK input of the second flip-flop.
*   The output of the second flip-flop (Q1) is connected to the CLK input of the third flip-flop (MSB).

| Flip-flop | J | K | CLK      | Q |
| :-------- | :- | :- | :------- | :- |
| FF0 (LSB) | 1 | 1 | External Clock | Q0 |
| FF1       | 1 | 1 | Q0       | Q1 |
| FF2 (MSB) | 1 | 1 | Q1       | Q2 |

**Truth Table (States):**

| Clock Pulse | Q2 (MSB) | Q1 | Q0 (LSB) | Decimal Value |
| :---------- | :------- | :- | :------- | :------------ |
| 0           | 0        | 0  | 0        | 0             |
| 1           | 0        | 0  | 1        | 1             |
| 2           | 0        | 1  | 0        | 2             |
| 3           | 0        | 1  | 1        | 3             |
| 4           | 1        | 0  | 0        | 4             |
| 5           | 1        | 0  | 1        | 5             |
| 6           | 1        | 1  | 0        | 6             |
| 7           | 1        | 1  | 1        | 7             |

#### 3.2.2. Synchronous Counters

*   **Description:** In synchronous counters, all flip-flops are clocked simultaneously by the same clock signal. The inputs to each flip-flop are controlled by logic gates to produce the desired counting sequence.
*   **Operation:** All flip-flops change state at the same time, synchronized by the clock.
*   **Advantages:** No ripple effect, faster operation, less prone to glitches.
*   **Disadvantages:** More complex logic design compared to ripple counters.

**Example: 3-bit Synchronous Binary Up Counter**

We need to determine the J and K inputs for each flip-flop based on the desired next state. Let's use JK flip-flops.

| State (Q2Q1Q0) | Next State (Q2'Q1'Q0') | Q0 Transition | Q1 Transition | Q2 Transition | J0 | K0 | J1 | K1 | J2 | K2 |
| :----------- | :--------------------- | :------------ | :------------ | :------------ | :- | :- | :- | :- | :- | :- |
| 000          | 001                    | 0 -> 1        | 0 -> 0        | 0 -> 0        | 1  | 0  | 0  | 0  | 0  | 0  |
| 001          | 010                    | 1 -> 0        | 0 -> 1        | 0 -> 0        | 0  | 1  | 1  | 0  | 0  | 0  |
| 010          | 011                    | 0 -> 1        | 1 -> 1        | 0 -> 0        | 1  | 0  | 0  | 0  | 0  | 0  |
| 011          | 100                    | 1 -> 0        | 1 -> 0        | 0 -> 1        | 0  | 1  | 0  | 1  | 1  | 0  |
| 100          | 101                    | 0 -> 1        | 0 -> 0        | 1 -> 1        | 1  | 0  | 0  | 0  | 0  | 0  |
| 101          | 110                    | 1 -> 0        | 0 -> 1        | 1 -> 1        | 0  | 1  | 1  | 0  | 0  | 0  |
| 110          | 111                    | 0 -> 1        | 1 -> 1        | 1 -> 1        | 1  | 0  | 0  | 0  | 0  | 0  |
| 111          | 000 (for modulo-8)     | 1 -> 0        | 1 -> 0        | 1 -> 0        | 0  | 1  | 0  | 1  | 0  | 1  |

Now, let's derive the logic for J0, K0, J1, K1, J2, K2 in terms of the current state (Q2Q1Q0):

*   **J0:** To toggle Q0, J0 must be 1 when Q0 is to change from 0 to 1. This happens when Q0 is 0 and the count advances. So, J0 = 1. (For basic up counter, Q0 always toggles)
*   **K0:** To toggle Q0, K0 must be 1 when Q0 is to change from 1 to 0. This happens when Q0 is 1 and the count advances. So, K0 = 1. (For basic up counter, Q0 always toggles)

*   **J1:** Q1 toggles when Q0 is 1. So, J1 = Q0.
*   **K1:** Q1 toggles when Q0 is 1. So, K1 = Q0.

*   **J2:** Q2 toggles when Q0 is 1 AND Q1 is 1. So, J2 = Q0 * Q1.
*   **K2:** Q2 toggles when Q0 is 1 AND Q1 is 1. So, K2 = Q0 * Q1.

**Circuit Diagram:**
The clock is connected to all flip-flops. The inputs J1, K1, J2, K2 are derived from the outputs of the previous flip-flops using AND gates.

#### 3.2.3. Other Counter Types

*   **Modulus Counters (e.g., Modulo-N Counters):** Counters that count up to a specific number N and then reset to zero. This is achieved by adding logic to detect the Nth state and reset the counter.
*   **Up/Down Counters:** Can count in both increasing and decreasing directions, controlled by a direction input.

## 4. Hardware Implementation (Using ICs)

This section details how to implement flip-flops and counters using common integrated circuits (ICs).

### 4.1. Common Flip-flop ICs

*   **74LS74:** Dual D Flip-flop with preset and clear. Edge-triggered.
*   **74LS73:** Dual JK Flip-flop with clear. Edge-triggered.
*   **74LS109:** Dual JK Flip-flop with preset, clear, and **positive edge-triggering**.
*   **74LS112:** Dual JK Flip-flop with preset, clear, and **negative edge-triggering**.

### 4.2. Common Counter ICs

*   **74LS90:** Decade Counter (0-9). BCD counter. Can be reconfigured for other modulus counters.
*   **74LS160/161:** Synchronous 4-bit Binary Counter (Mod-16) with load and enable.
*   **74LS162:** Synchronous 4-bit Decade Counter (Mod-10) with load and enable.
*   **74LS163:** Synchronous 4-bit Binary Counter (Mod-16) with load and enable (Outputs are a cleaner binary count).
*   **74LS190/191:** Up/Down Decade/Binary Counter with load and enable.

### 4.3. Experiment Procedure (General)

1.  **Familiarization:** Understand the pin configurations of the chosen flip-flop or counter ICs.
2.  **Circuit Design:** Draw the schematic for the desired flip-flop or counter circuit.
3.  **Breadboarding:** Carefully construct the circuit on a breadboard, ensuring correct connections for power, ground, clock, inputs, and outputs.
4.  **Testing:**
    *   **Clock Source:** Use a function generator or a dedicated clock module for the clock input.
    *   **Input Signals:** Apply appropriate input signals to J, K, S, R, D, T, and control pins.
    *   **Observation:** Use an oscilloscope or logic analyzer to observe the output waveforms and verify the counter's sequence.
    *   **Verification:** Compare the observed behavior with the expected behavior from truth tables and state diagrams.

## 5. HDL Implementation (Verilog)

This section covers how to describe flip-flops and counters using Verilog HDL, as per **Bhasker (2001)** and **Palnitkar (2nd Ed.)**.

### 5.1. Verilog Basics for Sequential Circuits

*   **`always` block:** Used to describe sequential logic.
*   **`posedge` and `negedge`:** Sensitivity list items for edge-triggered flip-flops.
*   **`if` and `else` statements:** Used to define the behavior based on input conditions.
*   **Non-blocking assignments (`<=`):** Crucial for sequential logic to ensure that assignments within an `always` block happen at the end of the current simulation time step, mimicking flip-flop behavior.
*   **Blocking assignments (`=`):** Used for combinational logic.

### 5.2. Verilog Examples

#### 5.2.1. SR Flip-flop (Level-Sensitive Latch)

```verilog
module sr_latch (
    input s, r, en,
    output reg q
);
    always @(s or r or en) begin
        if (en) begin
            if (s && !r) begin
                q <= 1'b1;
            end else if (!s && r) begin
                q <= 1'b0;
            end else if (!s && !r) begin
                // Hold state (no change specified, implicitly holds)
            end else begin
                // s=1, r=1 - invalid state
                // Assign a default or handle as error if needed
            end
        end
    end
endmodule
```
*   **Note:** This is a latch because it's sensitive to `s`, `r`, and `en` levels. For an edge-triggered SR flip-flop, you would need a clock and `posedge`/`negedge`.

#### 5.2.2. JK Flip-flop (Edge-Triggered)

```verilog
module jk_flipflop (
    input clk, j, k,
    output reg q
);
    always @(posedge clk) begin
        if (j && !k) begin
            q <= 1'b1; // Set
        end else if (!j && k) begin
            q <= 1'b0; // Reset
        end else if (j && k) begin
            q <= ~q;   // Toggle
        end
        // else: j=0, k=0 - Hold state (no change)
    end
endmodule
```
*   **`@ (posedge clk)`**: Specifies that the block is sensitive to the rising edge of the clock.
*   **`q <= ~q;`**: Non-blocking assignment for toggling.

#### 5.2.3. D Flip-flop (Edge-Triggered)

```verilog
module d_flipflop (
    input clk, d,
    output reg q
);
    always @(posedge clk) begin
        q <= d; // Data is transferred to q at the rising edge of clk
    end
endmodule
```

#### 5.2.4. T Flip-flop (Edge-Triggered)

```verilog
module t_flipflop (
    input clk, t,
    output reg q
);
    always @(posedge clk) begin
        if (t) begin
            q <= ~q; // Toggle if t is high
        end
        // else: t=0 - Hold state (no change)
    end
endmodule
```

#### 5.2.5. 3-bit Ripple Up Counter

```verilog
module ripple_counter_3bit (
    input clk,
    output reg q0, q1, q2 // q0 is LSB, q2 is MSB
);
    // Instantiate three D flip-flops (or JK configured as T)
    // Here, we'll use JK configured as T for clarity of toggling

    wire j0, k0, q0_wire;
    wire j1, k1, q1_wire;

    // First FF (LSB) - always toggles
    assign j0 = 1'b1;
    assign k0 = 1'b1;
    jk_flipflop ff0 (
        .clk(clk),
        .j(j0),
        .k(k0),
        .q(q0)
    );

    // Second FF
    assign j1 = q0; // JK inputs depend on previous output
    assign k1 = q0;
    jk_flipflop ff1 (
        .clk(q0), // Clocked by output of ff0
        .j(j1),
        .k(k1),
        .q(q1)
    );

    // Third FF
    assign j2 = q1; // JK inputs depend on previous output
    assign k2 = q1;
    jk_flipflop ff2 (
        .clk(q1), // Clocked by output of ff1
        .j(j2),
        .k(k2),
        .q(q2)
    );
endmodule
```
*   **Note on ripple counter HDL:** In real HDL implementation for synthesis, directly instantiating gates for clocking might not be the best approach. You'd typically model the dependencies more directly. However, this illustrates the concept of ripple clocking. For a synchronous model that is easier to synthesize, see below.

#### 5.2.6. 3-bit Synchronous Up Counter

```verilog
module sync_counter_3bit (
    input clk, reset, // Added reset for initialization
    output reg [2:0] q // q[0] is LSB, q[2] is MSB
);

    // Use always block with non-blocking assignments for synchronous logic
    always @(posedge clk or posedge reset) begin
        if (reset) begin
            q <= 3'b000; // Reset to initial state
        end else begin
            // The counter logic is implicitly handled by incrementing
            // based on the synchronous clock edge
            q <= q + 1;
        end
    end
endmodule
```
*   **`always @(posedge clk or posedge reset)`:** The reset is synchronous if `reset` is also in the sensitivity list with `posedge`. For asynchronous reset, use `always @(posedge clk or posedge reset)` and `if (reset) q <= 3'b000; else ...`. The example above shows a synchronous reset.
*   **`q <= q + 1;`**: This is a high-level description that the synthesis tool understands as a synchronous increment. The underlying logic (using JK or D flip-flops with appropriate combinational logic for their inputs) is generated by the synthesizer.

## 6. Lab Activities and Design Tasks

**Task 1: Implement and Test Flip-flops**

1.  **Design:**
    *   Design an edge-triggered JK flip-flop.
    *   Design an edge-triggered D flip-flop.
    *   Design an edge-triggered T flip-flop.
2.  **Hardware Implementation:**
    *   Use appropriate ICs (e.g., 74LS74 for D, 74LS73 for JK).
    *   Wire the circuits on a breadboard.
    *   Connect a clock source and input signals.
3.  **Testing:**
    *   Observe the output waveforms on an oscilloscope or logic analyzer.
    *   Verify the truth tables for each flip-flop by applying different input combinations.

**Task 2: Design and Implement Counters**

1.  **Design:**
    *   Design a 3-bit ripple up counter.
    *   Design a 3-bit synchronous up counter.
    *   (Optional) Design a modulo-5 counter (e.g., using a 74LS90 or by adding logic to a binary counter).
2.  **Hardware Implementation:**
    *   Implement ripple counter using JK flip-flops (e.g., 74LS73).
    *   Implement synchronous counter using flip-flops or a dedicated counter IC (e.g., 74LS163).
3.  **Testing:**
    *   Apply a clock signal.
    *   Observe the output sequence of the counters.
    *   Verify that the ripple counter exhibits ripple behavior and the synchronous counter does not.
    *   Test any control signals (e.g., load, enable, reset).

**Task 3: Verilog Modeling and Simulation**

1.  **Model:**
    *   Write Verilog code for the JK, D, and T flip-flops.
    *   Write Verilog code for the 3-bit ripple and synchronous up counters.
2.  **Simulate:**
    *   Create testbenches for each module.
    *   Simulate the Verilog code using a simulator (e.g., ModelSim, Vivado Simulator).
    *   Analyze the simulation results to verify the functionality.

**Task 4: FPGA Implementation (If Applicable)**

1.  **Synthesize:**
    *   Synthesize the Verilog code for flip-flops and counters for a target FPGA.
2.  **Implement:**
    *   Create a constraints file to map the design to FPGA pins.
    *   Generate the bitstream.
    *   Program the FPGA board.
3.  **Test:**
    *   Connect external clock and input signals to the FPGA pins.
    *   Use LEDs or other output peripherals to observe the counter's states.

## 7. Practice Questions and Answers

**Q1:** What is the primary difference between a latch and a flip-flop?
**A1:** A latch is level-sensitive, meaning its output can change as long as the enable signal is active. A flip-flop is edge-sensitive, meaning its output changes only at the active edge (rising or falling) of the clock signal.

**Q2:** Which type of counter is generally faster and why?
**A2:** Synchronous counters are generally faster because all flip-flops are clocked simultaneously. Asynchronous (ripple) counters suffer from cumulative propagation delays as the clock signal ripples through each stage, limiting their speed. (Refer to **Roth C.H, Fundamentals of Logic Design** for detailed speed analysis.)

**Q3:** How can a JK flip-flop be converted into a D flip-flop?
**A3:** Connect the J input to the D input and the K input to the inverted D input (D').

**Q4:** In the context of Verilog HDL, what is the purpose of the non-blocking assignment operator (`<=`) in `always` blocks describing sequential logic?
**A4:** Non-blocking assignments schedule the update to happen at the end of the current simulation time step. This behavior mimics the synchronous nature of flip-flops where all inputs are sampled simultaneously at the clock edge, and then the outputs are updated. If blocking assignments (`=`) were used, the output of one flip-flop could immediately affect the input of another within the same clock cycle, leading to incorrect simulation results that don't reflect hardware behavior. (Refer to **Bhasker, Verilog HDL Synthesis** for detailed explanations of assignment operators.)

**Q5:** A 4-bit ripple counter built with flip-flops that have a maximum clock frequency of 50 MHz. What is the approximate maximum clock frequency for the ripple counter itself?
**A5:** The maximum frequency of a ripple counter is significantly lower than that of individual flip-flops due to cumulative propagation delays. If each flip-flop has a propagation delay (e.g., t_pd), a 4-bit ripple counter will have a delay of approximately 4 * t_pd. To find the maximum clock frequency, you would typically divide the flip-flop's maximum frequency by the number of stages (or consider the worst-case delay path). For an approximation, if the flip-flop's maximum frequency is 50 MHz, the ripple counter's maximum frequency will be substantially less than 50 MHz, perhaps in the range of 10-25 MHz, depending on the specific flip-flop's propagation delay.

**Q6:** Write a Verilog module for a 2-bit synchronous up counter with an asynchronous reset.
**A6:**

```verilog
module sync_counter_2bit_async_reset (
    input clk, reset,
    output reg [1:0] q
);
    always @(posedge clk or posedge reset) begin
        if (reset) begin
            q <= 2'b00; // Asynchronous reset
        end else begin
            q <= q + 1; // Synchronous increment
        end
    end
endmodule
```

## 8. Important Points to Remember

*   **Clocking:** Always understand whether a circuit is edge-triggered or level-sensitive.
*   **Synchronous vs. Asynchronous:** Be aware of the performance implications (speed, glitches) of each type of counter.
*   **Verilog Syntax:** Pay close attention to `always @(...)`, `posedge`/`negedge`, and the difference between blocking (`=`) and non-blocking (`<=`) assignments for sequential logic.
*   **Race Around Condition:** Understand what it is and how master-slave flip-flops or edge-triggering prevents it.
*   **Initialization:** Ensure your sequential circuits are properly initialized, either through reset signals or initial values in simulations.
*   **Truth Tables and State Diagrams:** These are essential tools for understanding and designing sequential circuits.
*   **IC Datasheets:** Always refer to datasheets for pin configurations and electrical characteristics of ICs.

This comprehensive study guide should provide a strong foundation for understanding and successfully completing Experiment 4 on Flip-flops and Counters. Remember to refer to your textbooks and reference materials for deeper insights and specific details.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
