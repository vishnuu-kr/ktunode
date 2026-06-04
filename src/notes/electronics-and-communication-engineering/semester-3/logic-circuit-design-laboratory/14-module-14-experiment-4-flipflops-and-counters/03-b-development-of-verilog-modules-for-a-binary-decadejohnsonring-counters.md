---
title: "(b) Development of verilog modules for a binary decade/Johnson/Ring counters"
subject: "LOGIC CIRCUIT DESIGN LABORATORY"
module: "Module 14: Experiment 4: Flipflops and counters"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe461"
status: "completed"
scrapedAt: "2026-05-23T17:46:37.439Z"
---
# LOGIC CIRCUIT DESIGN LABORATORY

## Module 14: Experiment 4: Flipflops and Counters

### Topic (b): Development of Verilog Modules for Binary Decade/Johnson/Ring Counters

---

### 1. Introduction to Counters

Counters are sequential circuits that transition through a predefined sequence of states. They are fundamental building blocks in digital systems for tasks like timing, frequency division, and sequence generation.

**Key Concepts:**
*   **State:** A specific configuration of the flip-flops within the counter.
*   **State Transition:** The movement from one state to another, typically triggered by a clock pulse.
*   **Modulus (Mod-N):** The number of distinct states a counter cycles through before repeating.

**Relevance to Course Outcomes:**
*   **CO1 (K3):** Understanding the design and functioning of counters is crucial for demonstrating sequential circuits using ICs.
*   **CO2 (K3):** This topic directly addresses the application of Verilog HDL for implementing digital circuits, specifically sequential ones.

---

### 2. Types of Counters

We will focus on three common types of counters:

#### 2.1. Binary Counter (Up Counter)

A binary counter sequences through all possible states of its flip-flops in ascending binary order. For an N-bit binary counter, it has $2^N$ states.

**Example:** A 3-bit binary counter cycles through states 000, 001, 010, 011, 100, 101, 110, 111.

**Design Principle:** Each flip-flop's output is fed to the clock input of the next flip-flop (except for the first). For an up-counter, the clock input of each flip-flop (after the first) is connected to the output of the previous flip-flop.

**Verilog Module for a 4-bit Binary Up Counter:**

```verilog
// Module for a 4-bit binary up counter
module binary_up_counter_4bit (
    input wire clk,         // Clock input
    input wire reset,       // Synchronous reset input (active high)
    output reg [3:0] count  // 4-bit output count
);

    // Always block triggered by the positive edge of the clock or reset
    always @(posedge clk or posedge reset) begin
        if (reset) begin
            count <= 4'b0000; // Reset to 0
        end else begin
            count <= count + 1; // Increment count
        end
    end

endmodule
```

**Explanation:**
*   The `always @(posedge clk or posedge reset)` block describes the sequential behavior.
*   A synchronous reset is implemented: when `reset` is high, `count` is set to 0.
*   On each positive edge of `clk` (when not in reset), `count` is incremented by 1.

**Reference (Bhasker, 2001):** Chapter on sequential circuit design, detailing the behavior of flip-flops and their combination for counter design.

---

#### 2.2. Decade Counter (Mod-10 Counter)

A decade counter counts from 0 to 9 and then resets to 0. It has 10 states.

**Example:** A decade counter cycles through states 0000, 0001, ..., 1001.

**Design Principle:** A standard binary counter can be modified to achieve a decade count. This involves adding logic to detect the 10th state (binary 1010) and use it to reset the counter or trigger a change to the next state.

**Verilog Module for a Decade Up Counter:**

```verilog
// Module for a decade up counter (0-9)
module decade_up_counter (
    input wire clk,         // Clock input
    input wire reset,       // Synchronous reset input (active high)
    output reg [3:0] count  // 4-bit output count
);

    // Always block triggered by the positive edge of the clock or reset
    always @(posedge clk or posedge reset) begin
        if (reset) begin
            count <= 4'b0000; // Reset to 0
        end else begin
            // Check if the count is 9 (1001)
            if (count == 4'b1001) begin
                count <= 4'b0000; // Reset to 0 after 9
            end else begin
                count <= count + 1; // Increment count
            end
        end
    end

endmodule
```

**Explanation:**
*   The `reset` condition is handled first.
*   If `reset` is not active, the counter checks if the current `count` is `4'b1001` (decimal 9).
*   If it is 9, the next state is reset to `4'b0000`.
*   Otherwise, the `count` is incremented as usual.

**Reference (Roth C.H., V):** Chapter on sequential logic design, illustrating how to modify existing counter designs for specific modulus.

---

#### 2.3. Ring Counter

A ring counter is a shift register with its output fed back to its input. It sequences through a pattern where only one flip-flop is in the '1' state at any given time, and this '1' shifts from one flip-flop to the next.

**Example:** A 4-bit ring counter with initial state 1000 will cycle through 1000, 0100, 0010, 0001.

**Design Principle:** A shift register where the output of the last flip-flop is connected to the input of the first flip-flop. For a standard ring counter, the initial state is typically a single '1' followed by zeros.

**Verilog Module for a 4-bit Ring Counter:**

```verilog
// Module for a 4-bit ring counter
module ring_counter_4bit (
    input wire clk,         // Clock input
    input wire reset,       // Synchronous reset input (active high)
    input wire load,        // Asynchronous load enable
    input wire [3:0] data_in, // Data to load
    output reg [3:0] count  // 4-bit output count
);

    // Always block for sequential logic
    always @(posedge clk or posedge reset) begin
        if (reset) begin
            count <= 4'b0000; // Reset to all zeros
        end else begin
            // Asynchronous load
            if (load) begin
                count <= data_in;
            end else begin
                // Shift operation
                count <= {count[2], count[1], count[0], count[3]}; // Rotate right
            end
        end
    end

endmodule
```

**Explanation:**
*   A synchronous `reset` sets all bits to 0.
*   An asynchronous `load` input allows pre-setting the initial state of the counter. This is crucial for ring counters to start with a defined pattern.
*   In the `else` block (when not resetting or loading), the `count` is shifted. The expression `{count[2], count[1], count[0], count[3]}` performs a circular right shift: the MSB (`count[3]`) goes to the LSB (`count[0]`), `count[2]` moves to `count[3]`, and so on.

**Important Note:** For a ring counter to function correctly, it needs a specific initial state (e.g., `1000`). Without a load mechanism, it might get stuck in an all-zero state if reset. The `load` input is therefore very important.

**Reference (Palnitkar S., 2nd Edn.):** Chapter on sequential circuits, discussing shift registers and their applications like ring counters.

---

#### 2.4. Johnson Counter (Twisted Ring Counter)

A Johnson counter is similar to a ring counter but uses the complement of the last flip-flop's output as the input to the first flip-flop. This creates a longer sequence of states than a standard ring counter.

**Example:** A 4-bit Johnson counter with initial state 0000 will cycle through: 0000, 1000, 1100, 1110, 1111, 0111, 0011, 0001. It has $2N$ states for N flip-flops.

**Design Principle:** A shift register where the complemented output of the last flip-flop is fed back to the input of the first flip-flop.

**Verilog Module for a 4-bit Johnson Counter:**

```verilog
// Module for a 4-bit Johnson counter
module johnson_counter_4bit (
    input wire clk,         // Clock input
    input wire reset,       // Synchronous reset input (active high)
    input wire load,        // Asynchronous load enable
    input wire [3:0] data_in, // Data to load
    output reg [3:0] count  // 4-bit output count
);

    // Always block for sequential logic
    always @(posedge clk or posedge reset) begin
        if (reset) begin
            count <= 4'b0000; // Reset to all zeros
        end else begin
            // Asynchronous load
            if (load) begin
                count <= data_in;
            end else begin
                // Shift operation with complemented feedback
                count <= {~count[0], count[0], count[1], count[2]}; // Rotate right with complement of LSB
            end
        end
    end

endmodule
```

**Explanation:**
*   Similar structure to the ring counter with `reset` and `load`.
*   The key difference is in the shifting logic: `{~count[0], count[0], count[1], count[2]}`. This takes the complement of the LSB (`~count[0]`) and feeds it as the new MSB, while shifting the rest of the bits to the right.

**Reference (Bhasker, 2001):** Chapter on sequential circuit design, providing examples of Johnson counters and their state sequences.

---

### 3. Design Considerations and Synthesis

When developing Verilog modules for counters, consider:

*   **Synchronous vs. Asynchronous Operations:**
    *   **Synchronous Reset:** Reset occurs on the next clock edge, ensuring all state changes are synchronized. This is generally preferred for predictable behavior. (All examples above use synchronous reset).
    *   **Asynchronous Reset:** Reset takes effect immediately, regardless of the clock. Useful for emergency states but can lead to race conditions if not managed carefully.
*   **Clocking:** All flip-flops should be clocked by the same clock signal for synchronous operation.
*   **Synthesis:** Verilog code written for these modules can be synthesized onto FPGAs. The synthesis tool will infer flip-flops and combinational logic based on the `always` blocks and logic gates.
    *   **`reg` data type:** Used for signals that are assigned values within `always` blocks. These will typically be inferred as flip-flops if assigned based on a clock edge.
    *   **Combinational Logic:** The `if-else` and `case` statements, along with assignments outside `always` blocks, infer combinational logic.
*   **Moore vs. Mealy Machines:** Counters are typically implemented as Moore machines, where the output depends only on the current state.

**Relevance to Course Outcomes:**
*   **CO2 (K3):** Understanding Verilog syntax, inferring hardware, and considering synthesis are critical for applying HDL to implement digital circuits.
*   **CO3 (K3):** The Verilog modules developed here are directly translatable to FPGA implementations.

**Reference (Palnitkar S., 2nd Edn.):** Chapter on HDL synthesis, discussing how Verilog constructs map to hardware.

---

### 4. Practice Questions and Answers

**Question 1:** Write a Verilog module for a 3-bit binary up-down counter. The counter should increment when an `up` signal is high and decrement when `up` is low. It should have a synchronous `reset`.

**Answer 1:**

```verilog
// Module for a 3-bit binary up-down counter
module binary_up_down_counter_3bit (
    input wire clk,       // Clock input
    input wire reset,     // Synchronous reset input (active high)
    input wire up,        // Direction control (1 for up, 0 for down)
    output reg [2:0] count // 3-bit output count
);

    always @(posedge clk or posedge reset) begin
        if (reset) begin
            count <= 3'b000; // Reset to 0
        end else begin
            if (up) begin
                count <= count + 1; // Increment
            end else begin
                count <= count - 1; // Decrement
            end
        end
    end

endmodule
```

**Explanation:**
*   The `else` block checks the `up` signal.
*   If `up` is true, `count` is incremented.
*   If `up` is false, `count` is decremented.
*   The decrement operation in Verilog for unsigned numbers will wrap around correctly (e.g., 0 - 1 becomes the maximum value).

---

**Question 2:** Explain the difference between a ring counter and a Johnson counter in terms of their sequence of states and the feedback mechanism.

**Answer 2:**

*   **Ring Counter:**
    *   **Feedback:** The output of the last flip-flop is fed directly back to the input of the first flip-flop.
    *   **Sequence:** Cycles through $N$ states for $N$ flip-flops, with only one flip-flop being '1' at any time, and this '1' shifts sequentially. Example for 4 bits: 1000 -> 0100 -> 0010 -> 0001 -> 1000.
*   **Johnson Counter:**
    *   **Feedback:** The **complement** of the output of the last flip-flop is fed back to the input of the first flip-flop.
    *   **Sequence:** Cycles through $2N$ states for $N$ flip-flops. The sequence is formed by gradually filling all bits with '1's and then gradually filling them with '0's. Example for 4 bits: 0000 -> 1000 -> 1100 -> 1110 -> 1111 -> 0111 -> 0011 -> 0001 -> 0000.

---

**Question 3:** Design a Verilog module for a synchronous decade down counter (9-0).

**Answer 3:**

```verilog
// Module for a decade down counter (9-0)
module decade_down_counter (
    input wire clk,         // Clock input
    input wire reset,       // Synchronous reset input (active high)
    output reg [3:0] count  // 4-bit output count
);

    always @(posedge clk or posedge reset) begin
        if (reset) begin
            count <= 4'b1001; // Reset to 9 (for down counter)
        end else begin
            // Check if the count is 0 (0000)
            if (count == 4'b0000) begin
                count <= 4'b1001; // Reset to 9 after 0
            end else begin
                count <= count - 1; // Decrement count
            end
        end
    end

endmodule
```

**Explanation:**
*   The `reset` condition sets the counter to `4'b1001` (decimal 9), which is the starting point for a down counter that goes to 0.
*   The condition `if (count == 4'b0000)` checks for the terminal state of the down count.
*   When `count` is 0, the next state becomes 9. Otherwise, the counter decrements.

---

### 5. Important Points to Remember

*   **Synchronous Design:** Prioritize synchronous operations (especially reset) for predictable and robust behavior.
*   **State Representation:** Use `reg` for signals that hold state and are assigned within `always` blocks.
*   **Bit Width:** Ensure the bit width of the `count` register is sufficient for the desired sequence (e.g., 4 bits for a decade counter).
*   **Initial State:** For ring and Johnson counters, the initial state is critical. Implement a `load` mechanism for this.
*   **Modulus Control:** For decade counters, implement specific logic to detect the terminal state and reset or transition to the initial state.
*   **Verilog Syntax:** Pay close attention to the syntax for sequential logic (`always @(posedge clk)`), non-blocking assignments (`<=`), and concatenation (`{}`).

---

### 6. Alignment with Course Outcomes

*   **CO1 (K3):** This topic directly addresses the design and functioning of sequential circuits (counters) which can be implemented using ICs (e.g., 74xx series counters). The Verilog modules provide a blueprint for understanding their internal logic.
*   **CO2 (K3):** The development of Verilog modules for binary, decade, Johnson, and ring counters is a core activity for applying an industry-compatible hardware description language to implement digital circuits.
*   **CO3 (K3):** The Verilog code developed here can be synthesized and downloaded onto FPGA boards, allowing for implementation and testing of these counters with external hardware (e.g., clock sources, LEDs to display the count).
*   **CO4 (K2):** Working through the examples and practice questions, either individually or in a team, contributes to understanding the principles and application of counter design.

---
This concludes the study notes for developing Verilog modules for binary decade, Johnson, and ring counters. Remember to practice writing and simulating these modules to solidify your understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
