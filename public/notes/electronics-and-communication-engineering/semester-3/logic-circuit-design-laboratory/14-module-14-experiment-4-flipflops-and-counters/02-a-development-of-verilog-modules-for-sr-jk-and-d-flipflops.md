---
title: "(a) Development of verilog modules for SR, JK and D flipflops."
subject: "LOGIC CIRCUIT DESIGN LABORATORY"
module: "Module 14: Experiment 4: Flipflops and counters"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe460"
status: "completed"
scrapedAt: "2026-05-23T17:46:36.633Z"
---
# LOGIC CIRCUIT DESIGN LABORATORY: Module 14: Experiment 4: Flip-flops and Counters

## Topic: (a) Development of Verilog Modules for SR, JK, and D Flip-flops

### 1. Introduction to Flip-flops (K3)

Flip-flops are fundamental building blocks in sequential logic design. They are memory elements that can store a single bit of information. Unlike combinational circuits where the output depends only on the current inputs, the output of a sequential circuit, like a flip-flop, depends on both the current inputs and the past history of the circuit's state. This ability to "remember" makes them crucial for building registers, counters, state machines, and other sequential systems.

**Key Concepts:**

*   **Sequential Logic:** Circuits whose output depends on current inputs and past states.
*   **Memory Element:** A circuit that can store a bit of information.
*   **State:** The stored information within a memory element.
*   **Clock Signal:** A periodic signal that synchronizes the operation of sequential circuits. Most flip-flops are "clocked," meaning their state changes only at specific transitions (edges) of the clock signal.
*   **Setup Time ($t_{setup}$):** The minimum time that the input signals must be stable *before* the active clock edge.
*   **Hold Time ($t_{hold}$):** The minimum time that the input signals must remain stable *after* the active clock edge.

### 2. SR Flip-flop (K3)

The SR (Set-Reset) flip-flop is one of the simplest sequential memory elements. It has two inputs, S (Set) and R (Reset), and two outputs, Q and its complement $\bar{Q}$.

**Operation:**

*   **S = 1, R = 0:** Sets the flip-flop to state 1 (Q=1).
*   **S = 0, R = 1:** Resets the flip-flop to state 0 (Q=0).
*   **S = 0, R = 0:** Holds the current state (no change).
*   **S = 1, R = 1:** Invalid or forbidden state, leading to an unpredictable output.

**Verilog Module for SR Flip-flop:**

We can implement an SR flip-flop using two cross-coupled NAND gates or NOR gates. Here, we will focus on a clocked SR flip-flop, which is more practical for synchronous design. A clocked SR flip-flop typically changes its state only on the active edge of a clock signal.

```verilog
// SR Flip-flop with asynchronous Set and Reset
module sr_flipflop_async_rst (
    input wire clk,      // Clock input
    input wire set,      // Asynchronous Set input
    input wire reset,    // Asynchronous Reset input
    input wire d,        // Data input (used for Set/Reset logic)
    output reg q         // Output
);

    // The 'd' input here is conceptually linked to the behavior.
    // When set is active (high), q should go to 1.
    // When reset is active (high), q should go to 0.
    // If both set and reset are active, reset usually takes precedence.

    always @(posedge clk or posedge set or posedge reset) begin
        if (reset) begin
            q <= 1'b0; // Asynchronous Reset
        end else if (set) begin
            q <= 1'b1; // Asynchronous Set
        end else begin
            // If neither async set nor async reset is active,
            // then the state is determined by the next clock edge
            // if we were to have synchronous inputs S and R.
            // For this simple async model, if neither set nor reset is active,
            // the state remains as is unless d is used to define a "hold" or "toggle".
            // A common SR flipflop has synchronous S and R inputs.
            // Let's refine this to a standard clocked SR with active-high Set/Reset.

            // Re-implementation for clarity:
            // This is more illustrative of the SR behavior when not overridden by async inputs.
            // In a true SR flipflop, the behavior is more directly on S and R.
            // Let's consider a synchronous SR for a better understanding of typical usage.
        end
    end
endmodule

// Synchronous SR Flip-flop with active-high Set and Reset
module sr_flipflop_sync (
    input wire clk,
    input wire set,
    input wire reset,
    output reg q
);

    always @(posedge clk) begin
        if (reset) begin
            q <= 1'b0; // Synchronous Reset
        end else if (set) begin
            q <= 1'b1; // Synchronous Set
        end else begin
            // If neither set nor reset is active, q holds its previous value.
            // This implies that S=0, R=0 means "hold".
        end
    end
endmodule

```

**Textbook Reference:**

*   Bhasker, J. (2001). *Verilog HDL Synthesis: A Practical Primer*. Discusses basic sequential elements and their Verilog implementation.
*   Roth, C. H. (n.d.). *Fundamentals of Logic Design*. Provides detailed explanations of flip-flop operation and characteristic tables.

**Important Point:** The asynchronous version of flip-flops is useful for immediate reset/set operations, while synchronous versions are preferred in clocked systems to avoid race conditions.

### 3. D Flip-flop (K3)

The D (Data or Delay) flip-flop is the most commonly used flip-flop. It has a single data input (D) and a clock input. The output Q takes the value of the D input on the active clock edge.

**Operation:**

*   On the active clock edge (e.g., positive edge), the output Q becomes equal to the value of the D input.
*   If the D input changes between clock edges, the output Q does not change until the next active clock edge.

**Verilog Module for D Flip-flop:**

```verilog
// D Flip-flop with asynchronous Reset and Set
module d_flipflop_async (
    input wire clk,      // Clock input
    input wire reset,    // Asynchronous Reset input (active high)
    input wire set,      // Asynchronous Set input (active high)
    input wire d,        // Data input
    output reg q         // Output
);

    always @(posedge clk or posedge reset or posedge set) begin
        if (reset) begin
            q <= 1'b0; // Asynchronous Reset
        end else if (set) begin
            q <= 1'b1; // Asynchronous Set
        end else begin
            q <= d;    // Synchronous data transfer on positive clock edge
        end
    end
endmodule

// D Flip-flop with synchronous Reset and Set (active high)
module d_flipflop_sync (
    input wire clk,      // Clock input
    input wire reset,    // Synchronous Reset input (active high)
    input wire set,      // Synchronous Set input (active high)
    input wire d,        // Data input
    output reg q         // Output
);

    always @(posedge clk) begin
        if (reset) begin
            q <= 1'b0; // Synchronous Reset
        end else if (set) begin
            q <= 1'b1; // Synchronous Set
        end else begin
            q <= d;    // Synchronous data transfer on positive clock edge
        end
    end
endmodule
```

**Textbook Reference:**

*   Palnitkar, S. (2003). *Verilog HDL: A Guide to Digital Design and Synthesis*. Provides comprehensive examples of flip-flop implementations in Verilog.
*   Bhasker, J. (2001). *Verilog HDL Synthesis: A Practical Primer*. Explains how synthesis tools interpret Verilog code for flip-flops.

**Important Point:** The D flip-flop is ideal for building registers as it cleanly captures the input data at the clock edge.

### 4. JK Flip-flop (K3)

The JK flip-flop is a versatile flip-flop that can be configured to behave like an SR flip-flop or to toggle its output. It has two inputs, J and K, and a clock input.

**Operation:**

| J   | K   | Next State (Q) |
| :-- | :-- | :------------- |
| 0   | 0   | Hold (No Change) |
| 0   | 1   | Reset (Q=0)    |
| 1   | 0   | Set (Q=1)      |
| 1   | 1   | Toggle (Q = $\bar{Q}$) |

**Verilog Module for JK Flip-flop:**

```verilog
// JK Flip-flop with asynchronous Reset and Set (active high)
module jk_flipflop_async (
    input wire clk,      // Clock input
    input wire reset,    // Asynchronous Reset input (active high)
    input wire set,      // Asynchronous Set input (active high)
    input wire j,        // J input
    input wire k,        // K input
    output reg q         // Output
);

    always @(posedge clk or posedge reset or posedge set) begin
        if (reset) begin
            q <= 1'b0; // Asynchronous Reset
        end else if (set) begin
            q <= 1'b1; // Asynchronous Set
        end else begin
            if (j == 1'b1 && k == 1'b0) begin
                q <= 1'b1; // Set
            end else if (j == 1'b0 && k == 1'b1) begin
                q <= 1'b0; // Reset
            end else if (j == 1'b1 && k == 1'b1) begin
                q <= ~q;   // Toggle
            end
            // If j=0 and k=0, q remains its current value (hold).
        end
    end
endmodule

// JK Flip-flop with synchronous Reset and Set (active high)
module jk_flipflop_sync (
    input wire clk,      // Clock input
    input wire reset,    // Synchronous Reset input (active high)
    input wire set,      // Synchronous Set input (active high)
    input wire j,        // J input
    input wire k,        // K input
    output reg q         // Output
);

    always @(posedge clk) begin
        if (reset) begin
            q <= 1'b0; // Synchronous Reset
        end else if (set) begin
            q <= 1'b1; // Synchronous Set
        end else begin
            if (j == 1'b1 && k == 1'b0) begin
                q <= 1'b1; // Set
            end else if (j == 1'b0 && k == 1'b1) begin
                q <= 1'b0; // Reset
            end else if (j == 1'b1 && k == 1'b1) begin
                q <= ~q;   // Toggle
            end
            // If j=0 and k=0, q remains its current value (hold).
        end
    end
endmodule
```

**Textbook Reference:**

*   Roth, C. H. (n.d.). *Fundamentals of Logic Design*. Provides the truth tables and state diagrams for JK flip-flops.
*   Palnitkar, S. (2003). *Verilog HDL: A Guide to Digital Design and Synthesis*. Shows practical Verilog implementations of JK flip-flops, including handling the toggle state.

**Important Point:** The toggle mode (J=1, K=1) of the JK flip-flop is particularly useful for building counters.

### 5. Understanding `always` Blocks and Sensitivity Lists (K2, K3)

The `always` block is a fundamental construct in Verilog for describing sequential and combinational logic. The sensitivity list specifies the events that trigger the execution of the `always` block.

*   **`always @(posedge clk)`:** This describes a clocked sequential block. The code inside will execute only when the `clk` signal transitions from low to high (positive edge). This is ideal for synchronous flip-flops.
*   **`always @(posedge clk or posedge reset)`:** This describes a clocked sequential block that is also sensitive to asynchronous reset. If `reset` goes high, the block executes immediately, regardless of the clock. This is used for flip-flops with asynchronous reset.
*   **`always @(*)` or `always @(a, b, c)`:** This describes combinational logic. The block executes whenever any signal in the sensitivity list changes. For combinational logic, `always @(*)` is generally preferred as it automatically infers all inputs and avoids missing signals.

**Textbook Reference:**

*   Bhasker, J. (2001). *Verilog HDL Synthesis: A Practical Primer*. Chapter on behavioral modeling, explaining the `always` construct and sensitivity lists.

**Important Point:** Using the correct sensitivity list is crucial for correct simulation and synthesis. For sequential logic triggered by a clock, use `posedge clk` or `negedge clk`. For asynchronous behavior, include the asynchronous signals in the sensitivity list.

### 6. Course Outcome Alignment

*   **CO1: Design and demonstrate the functioning of various combinational and sequential circuits using ICs (Knowledge Level: K3)**
    *   This topic directly addresses the design and understanding of sequential circuits (flip-flops). While this experiment focuses on Verilog, the fundamental understanding gained is transferable to IC-based implementation.
*   **CO2: Apply an industry-compatible hardware description language to implement digital circuits (Knowledge Level: K3)**
    *   The core of this topic is developing Verilog modules for SR, JK, and D flip-flops. This directly fulfills the outcome of applying Verilog for digital circuit implementation.
*   **CO3: Implement digital circuits on FPGA boards and connect external hardware to the boards (Knowledge Level: K3)**
    *   The Verilog modules developed here are synthesizable and can be implemented on FPGA boards as part of subsequent experiments in this module.
*   **CO4: Function effectively as an individual and in a team to accomplish the given task. (Knowledge Level: K2)**
    *   Understanding these basic building blocks is essential for any team project involving digital circuit design. The ability to write and understand Verilog for these components contributes to effective collaboration.

### 7. Practice Questions and Answers

**Question 1:** Write a Verilog module for a D flip-flop with a synchronous enable input. The output `q` should update to `d` only when `enable` is high and the clock has a positive edge.

**Answer 1:**

```verilog
module d_flipflop_enable (
    input wire clk,
    input wire enable,
    input wire d,
    output reg q
);

    always @(posedge clk) begin
        if (enable) begin
            q <= d;
        end
        // If enable is low, q holds its previous value.
    end
endmodule
```

**Question 2:** What is the behavior of a JK flip-flop when both J and K inputs are high?

**Answer 2:** When both J and K inputs are high, the JK flip-flop enters the "toggle" state. This means its output `q` will change to the opposite of its current state on the active clock edge. If `q` was 0, it becomes 1; if `q` was 1, it becomes 0.

**Question 3:** Explain the difference between synchronous and asynchronous reset in a flip-flop.

**Answer 3:**
*   **Asynchronous Reset:** The reset operation occurs immediately when the reset signal is asserted, regardless of the clock signal. It's often connected to the `posedge` or `negedge` of the clock signal in the `always` block's sensitivity list, allowing it to override the clock-driven behavior.
*   **Synchronous Reset:** The reset operation only occurs when the reset signal is asserted *and* the clock signal transitions to its active edge. The reset input is typically treated like any other input (like J, K, or D) within the `always @(posedge clk)` block.

**Question 4:** Write a Verilog module for an SR flip-flop with active-low asynchronous Set ($\overline{S}$) and Reset ($\overline{R}$) inputs.

**Answer 4:**

```verilog
module sr_flipflop_active_low_async (
    input wire clk,
    input wire s_n,      // Active-low Set input
    input wire r_n,      // Active-low Reset input
    input wire d,        // This input is not directly used for SR logic,
                         // but can be considered for setup/hold illustration if needed.
                         // For a basic SR, only S and R are essential.
    output reg q
);

    // The behavior of S=1, R=1 (both active low inputs are high) means hold.
    // The behavior of S=0, R=1 means Set (q=1).
    // The behavior of S=1, R=0 means Reset (q=0).
    // The behavior of S=0, R=0 is invalid.

    always @(posedge clk or !s_n or !r_n) begin // Sensitivity to !s_n (posedge if s_n is 0) and !r_n (posedge if r_n is 0)
        if (!r_n) begin // If Reset is active (r_n is 0)
            q <= 1'b0;
        end else if (!s_n) begin // If Set is active (s_n is 0)
            q <= 1'b1;
        end
        // If neither reset nor set is active, the flip-flop holds its state.
        // This implies s_n=1 and r_n=1 means hold.
        // If both s_n=0 and r_n=0, it's an invalid state, and reset takes precedence here.
    end
endmodule
```

### 8. Important Points to Remember

*   **Synthesis vs. Simulation:** While Verilog can describe hardware behavior, synthesis tools translate this into actual logic gates. The way you write Verilog significantly impacts the resulting hardware. For instance, using `if (reset) q <= 0; else q <= d;` is standard for a D flip-flop with reset.
*   **Blocking (`=`) vs. Non-blocking (`<=`) Assignments:** In sequential `always` blocks, *always* use non-blocking assignments (`<=`) for state elements (like `reg` assigned within `always @(posedge clk)`). Blocking assignments (`=`) can lead to race conditions and incorrect behavior in sequential logic. Blocking assignments are typically used for combinational logic.
*   **Sensitivity List Completeness:** Ensure your sensitivity list for `always` blocks correctly captures all signals that should trigger a block's execution. Missing signals can lead to incorrect simulation results.
*   **Asynchronous vs. Synchronous:** Understand the implications of asynchronous inputs (like reset/set) on the flip-flop's operation compared to synchronous inputs. Asynchronous inputs are generally prioritized.
*   **Forbidden States:** Be aware of forbidden states (like S=1, R=1 in an SR flip-flop), as they can lead to unpredictable circuit behavior. Verilog synthesis might handle these differently depending on the tool and constraints.

This concludes the study notes for the development of Verilog modules for SR, JK, and D flip-flops. These fundamental building blocks are essential for understanding and designing more complex sequential circuits.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
