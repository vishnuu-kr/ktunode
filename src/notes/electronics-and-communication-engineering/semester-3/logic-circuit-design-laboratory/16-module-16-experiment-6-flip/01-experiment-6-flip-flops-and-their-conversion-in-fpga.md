---
title: "Experiment 6. Flip-Flops and their Conversion in FPGA"
subject: "LOGIC CIRCUIT DESIGN LABORATORY"
module: "Module 16: Experiment 6. Flip"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe467"
status: "completed"
scrapedAt: "2026-05-23T17:46:41.226Z"
---
# Module 16: Experiment 6 - Flip-Flops and their Conversion in FPGA

## 1. Introduction to Flip-Flops

Flip-flops are fundamental building blocks of sequential logic circuits. They are bistable multivibrators, meaning they have two stable states and can maintain one of these states indefinitely until triggered to change by an external signal. This ability to "remember" a state is crucial for storing information in digital systems.

**Key Concepts:**

*   **Memory Element:** Flip-flops are used to store a single bit of data.
*   **Sequential Logic:** Flip-flops enable the design of circuits whose output depends not only on the current input but also on past inputs (stored in flip-flops).
*   **Clock Signal:** Most flip-flops are synchronous, meaning their state changes occur only at specific moments determined by a clock signal.
*   **States:** A flip-flop can be in one of two states: '0' (low) or '1' (high).
*   **Transitions:** Flip-flops change their state based on inputs and the clock signal.

**Textbook Reference:**

*   **Roth C.H., Fundamentals of Logic Design:** Chapter 6 covers flip-flops extensively, introducing basic types like SR, JK, D, and T flip-flops and their characteristic tables and state diagrams.

## 2. Types of Flip-Flops

This section will delve into the common types of flip-flops and their fundamental operation.

### 2.1. SR Flip-Flop

The SR flip-flop is the most basic type. It has two inputs, S (Set) and R (Reset), and two outputs, Q and its complement $\overline{Q}$.

**Operation:**

*   **S = 1, R = 0:** Sets the output Q to 1.
*   **S = 0, R = 1:** Resets the output Q to 0.
*   **S = 0, R = 0:** The output remains in its previous state (hold).
*   **S = 1, R = 1:** This is an invalid or forbidden state, leading to an unpredictable output.

**Characteristic Table:**

| S   | R   | Next State Q(t+1) |
| :-- | :-- | :---------------- |
| 0   | 0   | Q(t) (Hold)       |
| 0   | 1   | 0 (Reset)         |
| 1   | 0   | 1 (Set)           |
| 1   | 1   | Forbidden         |

**Important Note:** The SR flip-flop is generally not implemented directly in FPGAs due to the forbidden state.

### 2.2. JK Flip-Flop

The JK flip-flop is an improvement over the SR flip-flop, as it resolves the forbidden state. It has inputs J and K.

**Operation:**

*   **J = 0, K = 0:** Hold state (Q(t+1) = Q(t)).
*   **J = 0, K = 1:** Reset state (Q(t+1) = 0).
*   **J = 1, K = 0:** Set state (Q(t+1) = 1).
*   **J = 1, K = 1:** Toggle state (Q(t+1) = $\overline{Q(t)}$).

**Characteristic Table:**

| J   | K   | Next State Q(t+1) |
| :-- | :-- | :---------------- |
| 0   | 0   | Q(t) (Hold)       |
| 0   | 1   | 0 (Reset)         |
| 1   | 0   | 1 (Set)           |
| 1   | 1   | $\overline{Q(t)}$ (Toggle) |

### 2.3. D Flip-Flop (Data or Delay Flip-Flop)

The D flip-flop is widely used for data storage. It has a single data input D. The output Q takes the value of D on the active clock edge.

**Operation:**

*   **D = 0:** Resets the output Q to 0.
*   **D = 1:** Sets the output Q to 1.

**Characteristic Table:**

| D   | Next State Q(t+1) |
| :-- | :---------------- |
| 0   | 0                 |
| 1   | 1                 |

### 2.4. T Flip-Flop (Toggle Flip-Flop)

The T flip-flop is derived from a JK flip-flop by connecting J and K together. It has a single input T.

**Operation:**

*   **T = 0:** Hold state (Q(t+1) = Q(t)).
*   **T = 1:** Toggle state (Q(t+1) = $\overline{Q(t)}$).

**Characteristic Table:**

| T   | Next State Q(t+1) |
| :-- | :---------------- |
| 0   | Q(t) (Hold)       |
| 1   | $\overline{Q(t)}$ (Toggle) |

## 3. Flip-Flop Conversions

One of the powerful aspects of sequential logic design is that one type of flip-flop can be functionally converted into another. This is often done when a specific flip-flop is not available or when a simpler implementation is desired. These conversions are achieved by appropriately manipulating the inputs of the source flip-flop.

**Key Concept:** The goal is to create a logic circuit that feeds the inputs of the source flip-flop in such a way that its behavior mimics the characteristic table of the target flip-flop.

**Reference Book:**

*   **Palnitkar S., Verilog HDL: A Guide to Digital Design and Synthesis:** Chapter 4 discusses flip-flop conversions and provides Verilog examples.

### 3.1. JK Flip-Flop to D Flip-Flop Conversion

To convert a JK flip-flop to a D flip-flop, we need the JK flip-flop to have the same behavior as the D flip-flop (i.e., Q(t+1) = D).

**Logic:**
If we set J = D and K = $\overline{D}$, then:

*   When D = 0: J = 0, K = 1. This causes a reset, Q(t+1) = 0.
*   When D = 1: J = 1, K = 0. This causes a set, Q(t+1) = 1.

Thus, Q(t+1) = D.

**Circuit Diagram:** Connect the D input directly to the J input of the JK flip-flop and connect the $\overline{D}$ signal (inverter of D) to the K input.

### 3.2. D Flip-Flop to JK Flip-Flop Conversion

To convert a D flip-flop to a JK flip-flop, we need to derive the J and K inputs from the desired behavior of a JK flip-flop.

**Logic:**
We want to find expressions for J and K in terms of the desired next state $Q(t+1)$ and the current state $Q(t)$. From the JK flip-flop characteristic table, we can derive the required inputs:

*   $Q(t+1) = 1$ when (J=1, K=0) or (J=1, K=1)
*   $Q(t+1) = 0$ when (J=0, K=1) or (J=1, K=1)
*   $Q(t+1) = Q(t)$ when (J=0, K=0)

Let's consider the desired J and K inputs to achieve the JK flip-flop's next state $Q_{JK}(t+1)$ given the current state $Q(t)$.

| J   | K   | $Q_{JK}(t+1)$ | Required D Input |
| :-- | :-- | :------------ | :--------------- |
| 0   | 0   | $Q(t)$        | $Q(t)$           |
| 0   | 1   | 0             | 0                |
| 1   | 0   | 1             | 1                |
| 1   | 1   | $\overline{Q(t)}$ | $\overline{Q(t)}$ |

We can see that the required D input is $D = J \cdot \overline{Q} + K \cdot Q$.
This circuit will act as a JK flip-flop.

**Circuit Diagram:** The D input to the D flip-flop will be connected to the output of an XOR gate. One input of the XOR gate will be J, and the other input will be K XORed with the current state Q. More accurately, $D = J \overline{Q} + K Q$. So, the D input is connected to a circuit that implements this logic.

### 3.3. JK Flip-Flop to T Flip-Flop Conversion

To convert a JK flip-flop to a T flip-flop, we need the JK flip-flop to toggle when T=1 and hold when T=0.

**Logic:**
If we connect J = T and K = T, then:

*   When T = 0: J = 0, K = 0. This results in a hold state (Q(t+1) = Q(t)).
*   When T = 1: J = 1, K = 1. This results in a toggle state (Q(t+1) = $\overline{Q(t)}$).

Thus, the behavior matches the T flip-flop.

**Circuit Diagram:** Connect the T input to both the J and K inputs of the JK flip-flop.

### 3.4. T Flip-Flop to JK Flip-Flop Conversion

To convert a T flip-flop to a JK flip-flop, we need to derive J and K from the desired behavior of a JK flip-flop.

**Logic:**
The T flip-flop toggles when T=1. We want J and K to control whether the JK flip-flop toggles or holds/sets/resets.

| J   | K   | $Q_{JK}(t+1)$ | Required T Input |
| :-- | :-- | :------------ | :--------------- |
| 0   | 0   | $Q(t)$        | 0                |
| 0   | 1   | 0             | 1                |
| 1   | 0   | 1             | 1                |
| 1   | 1   | $\overline{Q(t)}$ | 1                |

We can see that the T input should be active (1) when either J=1 (and K=0) or K=1 (and J=0), or both J=1 and K=1. This is equivalent to $T = J \oplus K$ if we consider the XOR of J and K as toggling behavior. However, a simpler way to think about this for a T flip-flop is that T becomes 1 if we want to toggle.

Consider the desired next state $Q_{JK}(t+1)$. The T flip-flop toggles if $T=1$ and holds if $T=0$. We need $T$ to be 1 when the desired next state $Q_{JK}(t+1)$ is different from the current state $Q(t)$. This difference is captured by the XOR operation: $T = Q_{JK}(t+1) \oplus Q(t)$.

So, $T = (J \cdot \overline{Q} + K \cdot Q) \oplus Q$.
Expanding this:
$T = (J \overline{Q} + K Q)(\overline{Q} + Q) \oplus Q$
$T = (J \overline{Q}\overline{Q} + J Q \overline{Q} + K Q \overline{Q} + K Q Q) \oplus Q$
$T = (J \overline{Q} + 0 + 0 + K Q) \oplus Q$
$T = (J \overline{Q} + K Q) \oplus Q$
$T = J \overline{Q} \oplus Q + K Q \oplus Q$
$T = J (\overline{Q} \oplus Q) + K (Q \oplus Q)$
$T = J (1) + K (0)$
$T = J$

This is incorrect. Let's re-evaluate based on the characteristic table of the T flip-flop.
The T flip-flop toggles ($Q(t+1) = \overline{Q(t)}$) when $T=1$.
It holds ($Q(t+1) = Q(t)$) when $T=0$.

We want the JK flip-flop to behave like a T flip-flop. This means we need to set J and K such that the JK flip-flop's output changes according to the T input.

If $T=0$, we want $Q(t+1) = Q(t)$. This happens when $J=0, K=0$. So, if $T=0$, we set $J=0, K=0$.
If $T=1$, we want $Q(t+1) = \overline{Q(t)}$. This happens when $J=1, K=1$. So, if $T=1$, we set $J=1, K=1$.

Therefore, $J = T$ and $K = T$.

**Circuit Diagram:** Connect the T input to both the J and K inputs of the JK flip-flop.

## 4. Implementing Flip-Flops and Conversions in FPGA using Verilog HDL

FPGAs are programmable logic devices that can implement complex digital circuits. Verilog HDL (Hardware Description Language) is commonly used to describe the functionality of these circuits for synthesis and implementation on FPGAs.

**Key Concepts:**

*   **HDL Synthesis:** The process of converting an HDL description into a netlist of logic gates and flip-flops that can be implemented on the FPGA.
*   **Sequential Statements:** Verilog's `always` block with a clocked sensitivity list is used to describe flip-flop behavior.
*   **Blocking vs. Non-blocking Assignments:**
    *   `=` (blocking assignment) is used for combinational logic.
    *   `<=` (non-blocking assignment) is used for sequential logic (flip-flops).

**Textbook Reference:**

*   **Bhasker J., Verilog HDL Synthesis: A Practical Primer:** Chapter 5 covers sequential logic design and the use of `always` blocks for flip-flops.

### 4.1. Verilog Implementation of Flip-Flops

**a) D Flip-Flop:**

```verilog
module d_flip_flop (
    input wire clk,
    input wire d,
    output reg q
);

always @(posedge clk) begin
    q <= d; // Non-blocking assignment for sequential logic
end

endmodule
```

**b) JK Flip-Flop:**

```verilog
module jk_flip_flop (
    input wire clk,
    input wire j,
    input wire k,
    output reg q
);

always @(posedge clk) begin
    if (j == 1'b1 && k == 1'b0) begin
        q <= 1'b1; // Set
    end else if (j == 1'b0 && k == 1'b1) begin
        q <= 1'b0; // Reset
    end else if (j == 1'b1 && k == 1'b1) begin
        q <= ~q; // Toggle
    end
    // If j=0 and k=0, q remains unchanged (hold)
end

endmodule
```

**c) T Flip-Flop:**

```verilog
module t_flip_flop (
    input wire clk,
    input wire t,
    output reg q
);

always @(posedge clk) begin
    if (t == 1'b1) begin
        q <= ~q; // Toggle
    end
    // If t=0, q remains unchanged (hold)
end

endmodule
```

### 4.2. Verilog Implementation of Flip-Flop Conversions

**a) JK Flip-Flop to D Flip-Flop:**

```verilog
module jk_to_d_ff (
    input wire clk,
    input wire d, // This will be the input to the D flip-flop
    output reg q
);

// Internal logic to drive JK inputs based on D
wire j_in, k_in;

assign j_in = d;
assign k_in = ~d;

// Instantiating a JK flip-flop with modified inputs
jk_flip_flop jk_inst (
    .clk(clk),
    .j(j_in),
    .k(k_in),
    .q(q)
);

endmodule
```

Alternatively, we can implement the JK flip-flop behavior directly with D-equivalent logic:

```verilog
module jk_to_d_ff_direct (
    input wire clk,
    input wire d,
    output reg q
);

// The D input should achieve the same effect as JK inputs for D-equivalent behavior.
// We need Q(t+1) = D.
// For a JK flip-flop, Q(t+1) = J.Q' + K'.J + J.K (if we consider JK FF directly)
// However, for D-equivalent behavior:
// If D=0, we need Q(t+1)=0. This is achieved with J=0, K=1.
// If D=1, we need Q(t+1)=1. This is achieved with J=1, K=0.
// So, we set J = D and K = ~D.

// This is directly equivalent to a D flip-flop if we consider the logic that feeds the JK inputs.
// The D input of a D flip-flop is what determines the next state.

// To convert JK to D, we need to feed J and K such that they produce the D behavior.
// J = D, K = ~D

always @(posedge clk) begin
    // If j=1, k=0 (D=1), then q <= 1
    // If j=0, k=1 (D=0), then q <= 0
    // If j=0, k=0 (not possible with J=D, K=~D)
    // If j=1, k=1 (not possible with J=D, K=~D)
    // This mapping naturally creates a D flip-flop behavior.
    if (d == 1'b1) begin
        q <= 1'b1;
    end else begin
        q <= 1'b0;
    end
end

endmodule
```
**Explanation:** The key is that if you feed $J=D$ and $K=\overline{D}$ into a JK flip-flop, its behavior becomes identical to a D flip-flop where the input is $D$. The Verilog code directly reflects this by setting the `q` output based on the `d` input.

**b) D Flip-Flop to JK Flip-Flop:**

```verilog
module d_to_jk_ff (
    input wire clk,
    input wire j,
    input wire k,
    output reg q
);

// Internal logic to derive D input from J and K
wire d_in;

// To convert a D flip-flop to a JK flip-flop, the D input must be:
// D = J.Q' + K.Q
assign d_in = (j & ~q) | (k & q);

// Instantiating a D flip-flop with the derived D input
d_flip_flop d_inst (
    .clk(clk),
    .d(d_in),
    .q(q)
);

endmodule
```

**c) JK Flip-Flop to T Flip-Flop:**

```verilog
module jk_to_t_ff (
    input wire clk,
    input wire t, // This will be the input to the T flip-flop
    output reg q
);

// Internal logic to drive JK inputs based on T
wire j_in, k_in;

assign j_in = t;
assign k_in = t;

// Instantiating a JK flip-flop with T controlling J and K
jk_flip_flop jk_inst (
    .clk(clk),
    .j(j_in),
    .k(k_in),
    .q(q)
);

endmodule
```

**d) T Flip-Flop to JK Flip-Flop:**

```verilog
module t_to_jk_ff (
    input wire clk,
    input wire j,
    input wire k,
    output reg q
);

// Internal logic to derive T input from J and K
wire t_in;

// To convert a JK flip-flop to a T flip-flop, the T input must be:
// T = J XOR K
assign t_in = j ^ k;

// Instantiating a T flip-flop with the derived T input
t_flip_flop t_inst (
    .clk(clk),
    .t(t_in),
    .q(q)
);

endmodule
```

## 5. Implementing on FPGA Board

The Verilog code developed for flip-flops and their conversions can be synthesized and implemented on an FPGA board. This involves:

1.  **Creating a Verilog project:** Using an FPGA development environment (e.g., Xilinx Vivado, Intel Quartus Prime).
2.  **Synthesizing the HDL:** The synthesis tool converts the Verilog code into a gate-level netlist.
3.  **Implementing the design:** This involves place-and-route, where the logic gates and flip-flops are mapped to the physical resources on the FPGA.
4.  **Generating a bitstream:** A configuration file for the FPGA.
5.  **Programming the FPGA:** Loading the bitstream onto the FPGA board.
6.  **Testing:** Using input signals (from switches, buttons, or signal generators) and observing the outputs (on LEDs, displays, or oscilloscopes).

**Course Outcomes Addressed:**

*   **CO2:** Apply an industry compatible hardware description language to implement digital circuits. (Verilog implementation of flip-flops and conversions).
*   **CO3:** Implement digital circuits on FPGA boards and connect external hardware to the boards. (The entire process of taking Verilog to an FPGA).

**Example Implementation Scenario:**

*   **Inputs:** Clock signal, switches for D, J, K, T inputs.
*   **Outputs:** LEDs to display the Q output of the implemented flip-flop or conversion.
*   **Task:** Implement a D flip-flop, then a JK flip-flop, and observe their behavior with different inputs. Then, implement a JK to D conversion and verify that it acts as a D flip-flop.

## 6. Practice Questions and Exercises

**Question 1:**
Draw the circuit diagram for converting a JK flip-flop to a D flip-flop. Write the Verilog code for this conversion.

**Answer 1:**
*   **Circuit Diagram:** Connect the D input to the J input of the JK flip-flop, and the inverted D input to the K input.
*   **Verilog Code:** (See Section 4.2.a, `jk_to_d_ff_direct` or `jk_to_d_ff` module)

**Question 2:**
Explain the function of a T flip-flop and how it can be implemented using a JK flip-flop. Write the Verilog code for a T flip-flop.

**Answer 2:**
*   **Function of T Flip-Flop:** A T flip-flop toggles its output when the T input is 1 and holds its current state when T is 0.
*   **Implementation using JK:** Connect both J and K inputs of a JK flip-flop to the T input.
*   **Verilog Code:** (See Section 4.1.c)

**Question 3:**
You are given a D flip-flop. How would you configure its inputs to make it behave like a JK flip-flop with inputs J and K? Write the Verilog code for this D-to-JK conversion.

**Answer 3:**
*   **Configuration:** The D input of the D flip-flop should be connected to a logic circuit that implements $D = J \cdot \overline{Q} + K \cdot Q$, where Q is the current output of the flip-flop.
*   **Verilog Code:** (See Section 4.2.b)

**Question 4:**
What is the primary advantage of a JK flip-flop over an SR flip-flop?

**Answer 4:**
The primary advantage of a JK flip-flop over an SR flip-flop is that it resolves the "forbidden" or "invalid" state (S=1, R=1) of the SR flip-flop. In a JK flip-flop, when J=1 and K=1, it performs a toggle operation, which is a well-defined and useful behavior.

**Question 5:**
Consider the following Verilog code for a sequential circuit:

```verilog
module test_ff (
    input wire clk,
    input wire A,
    input wire B,
    output reg Q
);

always @(posedge clk) begin
    if (A == 1'b1) begin
        Q <= B;
    end else begin
        Q <= Q; // Hold
    end
end

endmodule
```
What type of flip-flop does this Verilog code represent? Justify your answer.

**Answer 5:**
This Verilog code represents a **D flip-flop with an enable signal**.

*   **Justification:**
    *   The `always @(posedge clk)` block indicates a sequential process triggered by the rising edge of the clock.
    *   The `Q <= B;` statement within the `if (A == 1'b1)` block shows that when the enable signal `A` is high, the output `Q` is updated with the value of input `B`. This is the behavior of a D flip-flop where `B` is the data input (`D`).
    *   The `else begin Q <= Q; end` statement indicates that when the enable signal `A` is low, the output `Q` retains its current value (holds its state). This is the behavior of an *enable* for a flip-flop.

Therefore, this code describes a D flip-flop that is only updated when the enable signal `A` is asserted.

## 7. Important Points to Remember

*   **Synchronous vs. Asynchronous:** Most flip-flops used in modern designs are synchronous and triggered by a clock edge.
*   **Edge-Triggered:** Flip-flops are typically edge-triggered (rising or falling edge of the clock), meaning they change state only at the specific instant of the clock edge.
*   **Setup and Hold Times:** For reliable operation, the data inputs to a flip-flop must be stable for a certain period before the clock edge (setup time) and after the clock edge (hold time). These are critical parameters for timing analysis in FPGA design.
*   **Asynchronous Preset and Clear:** Some flip-flops also have asynchronous inputs (Preset and Clear) that can force the flip-flop into a specific state (1 or 0, respectively) regardless of the clock signal. These are usually implemented using the `negedge` or `posedge` in the `always` block sensitivity list along with the clock edge.
*   **Verilog `always` block:** Always use non-blocking assignments (`<=`) for sequential logic (flip-flops) within an `always` block that is sensitive to a clock edge.
*   **FPGA Synthesis:** Synthesis tools are intelligent and can infer flip-flops from your Verilog code. Understanding how to write Verilog for flip-flops is key to successful FPGA design.
*   **Conversions:** Flip-flop conversions are a fundamental concept in understanding the underlying relationships between different sequential elements. They are also useful when a specific flip-flop type is not readily available in a particular ASIC or FPGA family.

## 8. Alignment with Course Outcomes

*   **CO1 (K3): Design and demonstrate the functioning of various combinational and sequential circuits using ICs:** This module directly addresses sequential circuits (flip-flops) and their conversions. While the focus here is on FPGA implementation, the fundamental understanding of their behavior is the same as when using ICs. The conversions demonstrate how to achieve the functionality of one sequential circuit using another.
*   **CO2 (K3): Apply an industry compatible hardware description language to implement digital circuits:** The module provides extensive examples of Verilog HDL code for implementing different types of flip-flops and their conversions, which is a core skill in industry-standard digital design.
*   **CO3 (K3): Implement digital circuits on FPGA boards and connect external hardware to the boards:** The notes outline the process of taking Verilog code to an FPGA and discuss testing scenarios involving external hardware, directly fulfilling this outcome.
*   **CO4 (K2): Function effectively as an individual and in a team to accomplish the given task:** While this outcome is more about the practical lab experience, the structured nature of the notes and the clear explanations of complex concepts will aid individuals in understanding their roles and contributing effectively within a team during laboratory sessions. The exercises encourage independent problem-solving.

This comprehensive set of notes provides a strong foundation for understanding flip-flops and their conversions, particularly in the context of modern FPGA-based digital logic design.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
