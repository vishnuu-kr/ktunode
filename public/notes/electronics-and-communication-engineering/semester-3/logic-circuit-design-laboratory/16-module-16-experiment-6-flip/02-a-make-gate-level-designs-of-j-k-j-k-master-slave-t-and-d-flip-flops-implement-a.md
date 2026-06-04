---
title: "(a) Make gate level designs of J-K, J-K master-slave, T and D flip-flops, implement and test them on the FPGA board."
subject: "LOGIC CIRCUIT DESIGN LABORATORY"
module: "Module 16: Experiment 6. Flip"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe468"
status: "completed"
scrapedAt: "2026-05-23T17:46:42.081Z"
---
# LOGIC CIRCUIT DESIGN LABORATORY - Module 16: Experiment 6. Flip-Flops

## Topic (a): Gate-Level Designs of J-K, J-K Master-Slave, T, and D Flip-Flops, Implementation, and Testing on FPGA Board

---

### **1. Introduction to Flip-Flops**

Flip-flops are fundamental building blocks of sequential logic circuits. They are bistable multivibrators, meaning they have two stable states (0 and 1) and can store one bit of information. Their state can be changed based on input signals and a clock signal. They are essential for memory elements, counters, and state machines.

**Key Concepts:**

*   **Sequential Logic:** Circuits whose output depends not only on the current inputs but also on the past sequence of inputs. This "memory" is provided by flip-flops.
*   **Clock Signal:** A periodic signal that synchronizes the operation of sequential circuits. Flip-flops change their state at specific transitions of the clock (e.g., rising edge or falling edge).
*   **State:** The current stored value (0 or 1) in a flip-flop.
*   **Triggering:** The event that causes a flip-flop to change its state. This can be edge-triggered (changes on the clock edge) or level-triggered (changes while the clock level is high or low).
*   **Asynchronous Inputs:** Inputs (like Preset and Clear) that can override the clock and change the flip-flop's state immediately, without waiting for a clock edge.

**Reference (Roth C.H., Fundamentals of Logic Design):** Chapter 7, "Sequential Circuits," provides a comprehensive overview of flip-flops, their types, and their operation.

---

### **2. Types of Flip-Flops and Their Gate-Level Designs**

This section will detail the gate-level design of four key flip-flop types: D, J-K, J-K Master-Slave, and T.

#### **2.1. D Flip-Flop**

The D (Data) flip-flop stores the value of the D input at the time of the clock edge.

**Functionality:**

*   If D = 0, the output Q becomes 0.
*   If D = 1, the output Q becomes 1.
*   The output Q follows the D input.

**Gate-Level Design (Edge-Triggered D Flip-Flop using NAND gates):**

A common implementation uses two cascaded SR latches with a clock gating mechanism.

**Diagram:**

```
        +-----+     +-----+
CLK ---|     |-----|     |
       | NAND|     | NAND|---- Q
       +-----+     +-----+
         | /N1       | /N2
         |           |
D ------|-----      /N1
        |     \     |
        +-----\-----|-----
              |     |
              +-----|----- Q' (NOT Q)
                    |
                    |
          +-----+   /N2
          | NAND|--|
          +-----+
```

*(Note: A more detailed gate-level diagram would show the specific NAND gate interconnections for SR latches and the clock gating logic. This simplified diagram illustrates the concept.)*

**Explanation:**

1.  The first SR latch (formed by two NAND gates) is controlled by the clock. When the clock is low, it holds the state. When the clock is high, it becomes transparent to the inputs.
2.  The D input is connected to one input of the first NAND gate, and the inverted D input (D') is connected to the other input. This ensures that the SR latch receives complementary inputs.
3.  The second SR latch is connected to the output of the first latch. This second latch is responsible for holding the state after the clock goes low.
4.  The clock gating ensures that the state change only occurs at the active edge of the clock.

**Verilog HDL (for implementation):**

```verilog
// D Flip-Flop (edge-triggered)
module d_flip_flop (
    input wire clk,
    input wire d,
    output reg q
);

    always @(posedge clk) begin
        q <= d; // Assign D to Q on the positive edge of clock
    end

endmodule
```

**Bhasker, J. Verilog HDL Synthesis (2001):** Chapter 4, "Sequential Statements," explains the use of `always @(posedge clk)` for edge-triggered flip-flops.

---

#### **2.2. J-K Flip-Flop**

The J-K flip-flop is a versatile flip-flop where J and K are the input signals. It can perform the functions of SR, D, and T flip-flops.

**Functionality:**

| J   | K   | Next State (Q) | Operation      |
| :-- | :-- | :------------- | :------------- |
| 0   | 0   | Q (no change)  | Hold           |
| 0   | 1   | 0              | Reset          |
| 1   | 0   | 1              | Set            |
| 1   | 1   | Q' (toggle)    | Toggle         |

**Gate-Level Design (Edge-Triggered J-K Flip-Flop):**

Can be implemented by modifying a clocked SR flip-flop with additional logic to handle the J and K inputs.

**Diagram (Conceptual):**

The core is an SR latch. The J and K inputs are fed into logic that drives the S and R inputs of the SR latch. The J input is connected to the S input, and the K input is connected to the R input. When J=1 and K=1, the SR latch would normally go to an invalid state. To overcome this, feedback from the current state (Q and Q') is incorporated.

**Verilog HDL (for implementation):**

```verilog
// J-K Flip-Flop (edge-triggered)
module jk_flip_flop (
    input wire clk,
    input wire j,
    input wire k,
    output reg q
);

    always @(posedge clk) begin
        if (j == 1 && k == 0) begin
            q <= 1; // Set
        end else if (j == 0 && k == 1) begin
            q <= 0; // Reset
        end else if (j == 1 && k == 1) begin
            q <= ~q; // Toggle
        end
        // If j=0 and k=0, q remains unchanged (implicitly handled)
    end

endmodule
```

---

#### **2.3. J-K Master-Slave Flip-Flop**

The J-K Master-Slave flip-flop is designed to avoid the "race-around" condition that can occur in simple edge-triggered J-K flip-flops when both J and K are high. It consists of two stages: a master latch and a slave latch.

**Functionality:**

*   The master stage is enabled when the clock is high. It captures the J and K inputs.
*   When the clock transitions from high to low (falling edge), the master stage is disabled, and its state is transferred to the slave stage. The slave stage then drives the outputs Q and Q'.
*   This two-stage operation prevents the output from changing during the entire period the clock is high.

**Gate-Level Design:**

*   **Master Stage:** Typically an SR latch (or a similar clocked latch) that is sensitive to the clock's *level*. J and K inputs are fed here.
*   **Slave Stage:** Another SR latch, triggered by the *inverted* clock signal (or the falling edge of the clock). It receives the output of the master stage.

**Diagram (Conceptual):**

```
        +-----------------+
CLK ----| Master Latch    |----+
        | (sensitive to   |    |
        |  clock level)   |    |
J ----> |                 |----> Slave Latch
K ----> |                 |----> (sensitive to
        +-----------------+     |  falling edge)
                                |
                                +---- Q
                                +---- Q'
```

**Explanation of Operation:**

1.  **Clock HIGH:** The master latch is active and follows the J and K inputs. The slave latch is inactive and holds its previous state.
2.  **Clock LOW:** The master latch becomes inactive and holds the value it captured. The slave latch becomes active and takes the state from the master latch. This state is then presented at the outputs Q and Q'.

**Verilog HDL (for implementation):**

While it can be described at the gate level, in Verilog, we often model its behavior. A direct gate-level implementation would involve instantiating latches.

```verilog
// J-K Master-Slave Flip-Flop (behavioral description simulating master-slave)
// Note: True gate-level implementation would use latches and inverter for clock.
module jk_master_slave (
    input wire clk,
    input wire j,
    input wire k,
    output reg q
);

    // Internal signals to represent master latch state
    reg q_master;

    // Master stage: Sensitive to positive clock edge
    always @(posedge clk) begin
        if (j == 1 && k == 0) begin
            q_master <= 1;
        end else if (j == 0 && k == 1) begin
            q_master <= 0;
        end else if (j == 1 && k == 1) begin
            q_master <= ~q_master; // Toggle
        end
        // If j=0, k=0, q_master holds its value
    end

    // Slave stage: Driven by the state of the master stage on the falling clock edge
    always @(negedge clk) begin
        q <= q_master;
    end

endmodule
```

**Important Note:** The Verilog code above simulates the behavior. A true gate-level design would involve instantiating actual latches (e.g., NAND-based SR latches) and connecting them as per the master-slave structure.

---

#### **2.4. T Flip-Flop**

The T (Toggle) flip-flop changes its state (toggles) whenever the T input is high, and holds its state when the T input is low, at the active clock edge.

**Functionality:**

*   If T = 0, the output Q remains unchanged.
*   If T = 1, the output Q toggles (Q becomes Q').

**Gate-Level Design:**

A T flip-flop can be easily derived from a J-K flip-flop by connecting both J and K inputs together.

**Derivation from J-K:**

Connect J = T and K = T.
*   When T = 0 (J=0, K=0): Q remains unchanged (Hold).
*   When T = 1 (J=1, K=1): Q toggles.

**Diagram (using J-K):**

```
CLK -----+
         |
T ------ J ----+
         |     |
         K ----+-----> J-K Flip-Flop ----> Q
```

**Verilog HDL (for implementation):**

```verilog
// T Flip-Flop (edge-triggered)
module t_flip_flop (
    input wire clk,
    input wire t,
    output reg q
);

    // Implement as a JK flip-flop with J=T and K=T
    always @(posedge clk) begin
        if (t == 1) begin
            q <= ~q; // Toggle
        end
        // If t=0, q remains unchanged (implicitly handled)
    end

endmodule
```

**Alternatively, using D flip-flop derivation:**
A T flip-flop can also be implemented by feeding `D = Q XOR T` to a D flip-flop.

```verilog
// T Flip-Flop (edge-triggered) using D flip-flop logic
module t_flip_flop_d_based (
    input wire clk,
    input wire t,
    input wire q_in, // feedback of current state q
    output reg q
);

    wire d_input;
    assign d_input = q_in ^ t; // D = Q XOR T

    always @(posedge clk) begin
        q <= d_input;
    end

endmodule
```

---

### **3. Implementation and Testing on FPGA Board**

This section covers the practical aspects of implementing and testing these flip-flops on an FPGA.

**CO2: Apply an industry-compatible hardware description language to implement digital circuits.**

**CO3: Implement digital circuits on FPGA boards and connect external hardware to the boards.**

**Steps:**

1.  **Design Entry:**
    *   Write Verilog HDL code for each flip-flop (as shown above).
    *   Create top-level modules to instantiate and test individual flip-flops.
    *   For testing, you'll need to connect inputs (clock, data, J, K, T) to physical switches/buttons and outputs (Q, Q') to LEDs on the FPGA board.

2.  **Synthesis:**
    *   Use FPGA vendor-specific tools (e.g., Xilinx Vivado, Intel Quartus) to synthesize the Verilog code.
    *   Synthesis translates the HDL into a netlist of logic gates and flip-flops available on the FPGA.

3.  **Implementation (Place and Route):**
    *   The tools map the synthesized logic onto the physical resources of the FPGA (LUTs, flip-flops, routing channels).
    *   Constraints file (XDC for Xilinx, .qsf for Intel) is crucial here to map the design's ports (clk, switches, LEDs) to physical pins on the FPGA.

4.  **Bitstream Generation:**
    *   The tools generate a bitstream file that configures the FPGA's internal circuitry.

5.  **Programming the FPGA:**
    *   Download the bitstream onto the FPGA board using a JTAG programmer or similar interface.

6.  **Testing and Verification:**
    *   **Clock Input:** Connect the clock source to the FPGA. This might be an on-board oscillator or an external clock generator.
    *   **Input Signals:** Use switches or pushbuttons on the FPGA board to provide inputs (D, J, K, T).
    *   **Output Observation:** Connect LEDs to the Q outputs to visually observe the flip-flop's state.
    *   **Stimulus Generation:**
        *   For D flip-flop: Apply a sequence of 0s and 1s to the D input and observe the Q output on the next clock edge.
        *   For J-K flip-flop: Apply different combinations of J and K inputs (00, 01, 10, 11) and observe the output. Test the toggle mode (J=1, K=1).
        *   For T flip-flop: Apply T=0 and T=1 and observe whether the output holds or toggles.
        *   For J-K Master-Slave: Test as per J-K flip-flop, particularly ensuring no race-around condition when J=K=1.
    *   **Timing Analysis (Optional but Recommended):** Use the tools' built-in timing analyzers to ensure the design meets timing requirements, especially at higher clock frequencies.

**Example Test Scenario (D Flip-Flop):**

1.  Connect `clk` to the FPGA clock source.
2.  Connect `d` input to a switch.
3.  Connect `q` output to an LED.
4.  Set `d` to 0. Observe LED is off on the next clock edge.
5.  Set `d` to 1. Observe LED is on on the next clock edge.
6.  Toggle `d` and observe `q` following `d` at each clock edge.

---

### **4. Important Points to Remember**

*   **Edge Triggering vs. Level Triggering:** Most modern flip-flops used in FPGAs are edge-triggered (typically positive edge). Level-triggered latches are also important but have different behavior.
*   **Master-Slave Operation:** Essential for JK flip-flops to avoid race-around conditions.
*   **Race-Around Condition:** Occurs in simple edge-triggered JK flip-flops when J=K=1, leading to unpredictable toggling if the clock pulse is too long. Master-slave design mitigates this.
*   **Verilog `always` Block:** The sensitivity list in `always @(...)` is critical. `posedge clk` for rising-edge triggered, `negedge clk` for falling-edge triggered.
*   **Non-Blocking Assignment (`<=`):** Crucial for sequential logic in Verilog. It schedules the assignment to happen after the current time step, simulating the behavior of flip-flops. Blocking assignments (`=`) should generally be avoided in sequential `always` blocks.
*   **FPGA Pin Constraints:** Accurately mapping your design's inputs/outputs to physical pins on the FPGA board is vital for testing.
*   **Clock Source:** Ensure a stable and appropriate clock frequency for testing.
*   **Reset/Preset (Asynchronous Inputs):** While not explicitly requested in (a), these are common flip-flop features that can force an immediate state change. They are sensitive to levels, not edges.

---

### **5. Practice Questions/Exercises**

**Q1. (CO1, CO2) Write the Verilog HDL code for a positive edge-triggered T flip-flop that also includes an asynchronous active-high reset.**

**Answer:**

```verilog
module t_flip_flop_with_reset (
    input wire clk,
    input wire reset, // Active-high asynchronous reset
    input wire t,
    output reg q
);

    always @(posedge clk or posedge reset) begin
        if (reset) begin
            q <= 1'b0; // Reset output to 0
        end else begin
            if (t == 1) begin
                q <= ~q; // Toggle
            end
            // If t=0, q remains unchanged
        end
    end

endmodule
```

**Explanation:** The `else if (reset)` condition checks for the asynchronous reset. If `reset` is high, `q` is immediately set to 0, regardless of the clock. Otherwise, the normal toggle behavior based on `t` occurs on the positive clock edge.

---

**Q2. (CO1, CO3) Describe how you would test the functionality of a J-K master-slave flip-flop on an FPGA board. What input sequences would you use to verify its behavior, especially the toggle mode?**

**Answer:**

**Testing Procedure:**

1.  **Hardware Setup:**
    *   Connect the FPGA clock signal to the `clk` input of the J-K master-slave flip-flop module.
    *   Connect switches to the `j` and `k` inputs.
    *   Connect an LED to the `q` output.
2.  **Input Sequences and Expected Outputs:**
    *   **Hold Mode (J=0, K=0):**
        *   Set J=0, K=0. Observe that the LED state remains unchanged after the clock edge.
        *   Repeat with Q=0 and Q=1 to confirm holding in both states.
    *   **Reset Mode (J=0, K=1):**
        *   Set J=0, K=1. Observe that the LED turns OFF on the next clock edge.
        *   Ensure this happens regardless of the initial state of Q.
    *   **Set Mode (J=1, K=0):**
        *   Set J=1, K=0. Observe that the LED turns ON on the next clock edge.
        *   Ensure this happens regardless of the initial state of Q.
    *   **Toggle Mode (J=1, K=1):**
        *   Set J=1, K=1.
        *   Apply a clock signal. The LED should toggle (turn ON if OFF, turn OFF if ON) on each subsequent clock edge. This is the critical test for toggle functionality.
        *   Verify that the output flips every clock cycle.
    *   **Transition Testing:** Test transitions between modes (e.g., from hold to set, from toggle to reset) to ensure predictable behavior.

**Verification of Master-Slave:** The master-slave design's key advantage is preventing the race-around condition. While hard to demonstrate with simple LEDs and switches (it's a timing-dependent issue), by successfully implementing and observing predictable toggling in J=1, K=1 mode, you're implicitly verifying its correct operation. If it were a simple edge-triggered JK, you might observe erratic behavior if the clock pulse width was comparable to the propagation delay.

---

**Q3. (CO2, Bhasker Reference) Explain the significance of using non-blocking assignments (`<=`) in Verilog `always` blocks for sequential logic design, referencing J. Bhasker's "Verilog HDL Synthesis."**

**Answer:**

According to J. Bhasker in "Verilog HDL Synthesis: A Practical Primer," non-blocking assignments (`<=`) are crucial for correctly modeling sequential logic circuits like flip-flops.

*   **Behavioral Modeling:** Non-blocking assignments are used in `always @(posedge clk)` or `always @(negedge clk)` blocks to simulate the behavior of flip-flops. When a non-blocking assignment is encountered within a clocked `always` block, the assignment is scheduled to occur at the end of the current simulation time step. This means all assignments within the same `always` block are evaluated based on the values of the right-hand side variables *before* any of the assignments are updated. This accurately reflects how flip-flops capture input data at a specific clock edge and update their outputs simultaneously.
*   **Preventing Race Conditions in Simulation:** Using blocking assignments (`=`) in sequential `always` blocks can lead to simulation anomalies. If a blocking assignment is used, the variable on the left-hand side is updated immediately. This updated value can then be used by subsequent assignments within the *same* `always` block during the *same* simulation time step. This is not how hardware operates and can lead to incorrect simulation results, especially when feedback is involved. For example, if you try to model a toggle using `q = ~q;` with a blocking assignment, the immediate update of `q` will cause it to stay stuck at its current value (or an incorrect value) instead of toggling.
*   **Synthesis Compatibility:** Synthesis tools are designed to interpret non-blocking assignments in clocked `always` blocks as flip-flop operations. This ensures that your Verilog code, when synthesized, will indeed result in hardware flip-flops that behave as intended.

In essence, `q <= d;` in a `posedge clk` block means "on the next clock edge, capture the current value of `d` and store it in `q`."

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
