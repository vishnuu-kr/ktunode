---
title: "(b) Implement ring and Johnson counters with it."
subject: "LOGIC CIRCUIT DESIGN LABORATORY"
module: "Module 18: Experiment 8: Universal Shift Register in FPGA"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe471"
status: "completed"
scrapedAt: "2026-05-23T17:46:48.172Z"
---
# Module 18: Experiment 8: Universal Shift Register in FPGA - Ring and Johnson Counters

## 1. Introduction to Universal Shift Registers

A **Universal Shift Register (USR)** is a sequential logic circuit that can shift its stored data bits in one or more directions, and can also load data serially or in parallel. This versatility makes it a fundamental building block in digital systems. An $n$-bit USR typically has:

*   **Parallel Load Capability:** All $n$ bits can be loaded simultaneously.
*   **Serial Input:** Data can be shifted in one bit at a time from a serial input.
*   **Serial Output:** Data can be shifted out one bit at a time from a serial output.
*   **Shift Right/Left Capability:** Data can be shifted to the right or to the left.

While dedicated ICs like the 74194 (4-bit USR) exist, in FPGA design, we implement these functionalities using configurable logic elements and Verilog HDL.

## 2. Implementing Ring and Johnson Counters using a Universal Shift Register

### 2.1 What are Ring and Johnson Counters?

Ring and Johnson (or twisted-ring) counters are special types of shift registers that produce unique output sequences. They are formed by feeding the output of the last flip-flop back to the input of the first flip-flop, with variations in how this feedback is implemented.

#### 2.1.1 Ring Counter

A **Ring Counter** is created by connecting the serial output of the last flip-flop to the serial input of the first flip-flop, and initializing the register with a single '1' and the rest '0's.

*   **Operation:** The '1' bit propagates around the register, generating a sequence of $n$ unique states for an $n$-bit register.
*   **Sequence Length:** $n$ states.
*   **Example (4-bit):** If initialized to `1000`, the sequence would be:
    `1000` -> `0100` -> `0010` -> `0001` -> `1000` ...

#### 2.1.2 Johnson Counter (Twisted-Ring Counter)

A **Johnson Counter** is created by connecting the **inverted output** of the last flip-flop to the serial input of the first flip-flop.

*   **Operation:** The sequence generated is twice as long as a standard ring counter for the same number of flip-flops.
*   **Sequence Length:** $2n$ states for an $n$-bit register.
*   **Example (4-bit):** If initialized to `0000`:
    `0000` -> `1000` -> `1100` -> `1110` -> `1111` -> `0111` -> `0011` -> `0001` -> `0000` ...
    (Note: Initializing with all 0s or all 1s for Johnson counters will result in a cycle of $n$ states. A more complete sequence is achieved with mixed initial states, but for demonstration, single bit propagation is often used).
    Let's consider a more illustrative 4-bit Johnson counter sequence:
    Initialize with `0000`.
    `0000` (clock 1) -> `1000` (clock 2) -> `1100` (clock 3) -> `1110` (clock 4) -> `1111` (clock 5) -> `0111` (clock 6) -> `0011` (clock 7) -> `0001` (clock 8) -> `0000` ... (This is $2n=8$ states).
    If we wanted a sequence that fills all $2^n$ states, it would require a slightly different initialization and a more complex feedback mechanism (like a De-Bruijn sequence, not typically formed directly by a simple USR connection). The standard Johnson counter implementation produces $2n$ states.

### 2.2 Using a Universal Shift Register for Counters

A USR's inherent shifting and parallel/serial loading capabilities can be leveraged to implement both Ring and Johnson counters. The key is how we configure the **serial input** and the **output feedback**.

**For this experiment, we will assume we have a pre-designed Universal Shift Register module in Verilog.** This USR module would have inputs like `clk`, `reset`, `load_enable`, `shift_enable`, `parallel_load_data`, `serial_in`, and outputs like `serial_out`. We would then instantiate this USR module and connect its outputs and inputs appropriately to create the counter behavior.

Let's denote our USR as `USR_4BIT` for a 4-bit register.

#### 2.2.1 Implementing a Ring Counter with a USR

To implement a ring counter, we need to:
1.  **Configure the USR for serial operation:** Disable parallel loading.
2.  **Connect the serial output to the serial input:** The data shifted out of the last flip-flop becomes the data shifted into the first.
3.  **Initialize the register:** Load a single '1' at the desired starting position (e.g., the most significant bit) and '0's elsewhere.

**Verilog Instantiation Example (Conceptual):**

```verilog
module ring_counter_top (
    input wire clk,
    input wire reset,
    output wire [3:0] q // Output of the shift register
);

    // Assuming a 4-bit USR module with specific ports
    // Ports: clk, reset, load_enable, shift_enable, parallel_in[3:0], serial_in, q[3:0], serial_out
    wire shift_en;
    wire load_en;
    wire [3:0] parallel_data_in;
    wire serial_data_in;
    wire [3:0] shift_register_q;
    wire shift_register_serial_out;

    // Control signals for the USR
    assign shift_en = 1; // Always shift
    assign load_en = 0;  // Never load in parallel for counter operation

    // Connection for Ring Counter: Serial output feeds serial input
    assign serial_data_in = shift_register_serial_out;

    // Instantiate the Universal Shift Register
    // For a ring counter, we need to preload a value.
    // A simpler approach is to design a dedicated ring counter or control the USR's load.
    // Let's assume our USR has a mechanism to load initial state.
    // If the USR doesn't have a direct "initial load" but only parallel load:
    // We'd use parallel load for initialization and then switch to serial shift.

    // Simplified approach: Direct wiring for serial operation and controlling initial load
    USR_4BIT my_usr_inst (
        .clk(clk),
        .reset(reset),
        .load_enable(load_en), // Will be 0 for continuous shifting
        .shift_enable(shift_en), // Will be 1 for continuous shifting
        .parallel_in(parallel_data_in), // Not used when load_en is 0
        .serial_in(serial_data_in), // Fed from shift_register_serial_out
        .q(shift_register_q),
        .serial_out(shift_register_serial_out)
    );

    // Assign the output of the counter
    assign q = shift_register_q;

    // To achieve the initial '1000' state for the ring counter,
    // we would typically use the parallel load capability *before*
    // enabling continuous shifting, or have a dedicated reset sequence.
    // In a lab, you might:
    // 1. Assert reset to put it in a known state (e.g., all zeros).
    // 2. Briefly enable parallel load with data `4'b1000`.
    // 3. Disable parallel load and enable shift.

    // Example of how to initialize using parallel load:
    // This would require additional control logic not shown in the simplified instantiation.
    // For the purpose of this experiment, we focus on the feedback connection.

endmodule
```

**Key to Ring Counter implementation with USR:**
*   **Shift Enable:** Must be asserted.
*   **Load Enable:** Must be de-asserted after initialization.
*   **Serial Input:** Connected to the USR's Serial Output.
*   **Parallel Input:** Used only for initial loading of the desired state (e.g., `1000` for a 4-bit ring counter).

#### 2.2.2 Implementing a Johnson Counter with a USR

To implement a Johnson counter, we need to:
1.  **Configure the USR for serial operation:** Disable parallel loading.
2.  **Connect the **inverted** serial output to the serial input:** The inverted data shifted out of the last flip-flop becomes the data shifted into the first.
3.  **Initialize the register:** Load a known state, often all '0's or all '1's, or a specific pattern to achieve the desired $2n$ sequence.

**Verilog Instantiation Example (Conceptual):**

```verilog
module johnson_counter_top (
    input wire clk,
    input wire reset,
    output wire [3:0] q // Output of the shift register
);

    // Assuming a 4-bit USR module with specific ports
    // Ports: clk, reset, load_enable, shift_enable, parallel_in[3:0], serial_in, q[3:0], serial_out
    wire shift_en;
    wire load_en;
    wire [3:0] parallel_data_in;
    wire serial_data_in;
    wire [3:0] shift_register_q;
    wire shift_register_serial_out;
    wire shift_register_serial_out_inverted;

    // Control signals for the USR
    assign shift_en = 1; // Always shift
    assign load_en = 0;  // Never load in parallel for counter operation

    // Connection for Johnson Counter: Inverted serial output feeds serial input
    assign serial_data_in = ~shift_register_serial_out; // Inverting the output

    // Instantiate the Universal Shift Register
    USR_4BIT my_usr_inst (
        .clk(clk),
        .reset(reset),
        .load_enable(load_en), // Will be 0 for continuous shifting
        .shift_enable(shift_en), // Will be 1 for continuous shifting
        .parallel_in(parallel_data_in), // Not used when load_en is 0
        .serial_in(serial_data_in), // Fed from ~shift_register_serial_out
        .q(shift_register_q),
        .serial_out(shift_register_serial_out)
    );

    // Assign the output of the counter
    assign q = shift_register_q;

    // To achieve the initial state (e.g., 0000),
    // we would typically use the parallel load capability *before*
    // enabling continuous shifting, or have a dedicated reset sequence.
    // Similar to the ring counter, proper initialization is key.

endmodule
```

**Key to Johnson Counter implementation with USR:**
*   **Shift Enable:** Must be asserted.
*   **Load Enable:** Must be de-asserted after initialization.
*   **Serial Input:** Connected to the **inversion** of the USR's Serial Output.
*   **Parallel Input:** Used only for initial loading of the desired state (e.g., `0000` for a 4-bit Johnson counter).

## 3. FPGA Implementation Considerations

When implementing these counters on an FPGA:

*   **USR Module:** You will need a pre-existing Verilog module for the Universal Shift Register. If not provided, you might need to design one (as per previous experiments).
*   **Instantiation:** The USR module will be instantiated in your top-level design for the counter.
*   **Top-Level Design:** This module will contain the instantiation of the USR, the necessary control logic for its operation (enabling shift, controlling load for initialization), and the connections for the feedback path (normal or inverted serial output to serial input).
*   **Clock and Reset:** A clock signal and a reset signal are essential for sequential circuit operation.
*   **Initialization:** Proper initialization is crucial. Use the parallel load feature of the USR during reset or at the start of operation to set the initial state of the counter.
*   **Output:** The parallel output of the USR (`q`) will represent the current state of the ring or Johnson counter.

## 4. Verilog HDL Synthesis (Bhasker) & Guide (Palnitkar) Perspective

Both Bhasker's "Verilog HDL Synthesis: A Practical Primer" and Palnitkar's "Verilog HDL: A Guide to Digital Design and Synthesis" emphasize the importance of behavioral modeling for sequential circuits.

*   **Bhasker (Section 4.5: Sequential Logic Synthesis):** Bhasker highlights how `always @(posedge clk)` blocks are fundamental for modeling flip-flops and registers. Synthesis tools can infer flip-flops from these constructs. A USR is essentially a collection of flip-flops with control logic.
*   **Palnitkar (Chapter 6: Behavioral Modeling):** Palnitkar covers `always` blocks extensively. For shift registers, he shows how to implement shifting using concatenation operators (`{}`). For example, a left shift could be modeled as `q = {q[n-2:0], serial_in};` and a right shift as `q = {serial_in, q[n-1:1]};`.
    To implement a USR, you would typically use a `case` statement within an `always @(posedge clk)` block, controlled by `shift_enable` and `load_enable` signals.

**Example of a simplified behavioral model for a 4-bit USR (as a reference for what might be instantiated):**

```verilog
module USR_4BIT (
    input wire clk,
    input wire reset,          // Asynchronous reset
    input wire load_enable,    // Controls parallel load
    input wire shift_enable,   // Controls shifting
    input wire [3:0] parallel_in,
    input wire serial_in,
    output reg [3:0] q,
    output wire serial_out    // Serial output (data from q[0] for shift right)
);

    assign serial_out = q[0]; // For right shift, serial_out is the LSB

    always @(posedge clk or posedge reset) begin
        if (reset) begin
            q <= 4'b0000; // Reset to a known state
        end else if (load_enable) begin
            q <= parallel_in; // Parallel load
        end else if (shift_enable) begin
            // Implement shift right (can add shift left with another control)
            q <= {serial_in, q[3:1]};
        end
        // If neither load nor shift, q retains its value (hold)
    end

endmodule
```
*Note: This is a simplified USR. A full USR would have left shift capability and potentially more sophisticated control.*

To create a ring counter, `shift_enable` would be `1`, `load_enable` would be `0` (after initial load), and `serial_in` would be connected to `serial_out` of the USR.
To create a Johnson counter, `shift_enable` would be `1`, `load_enable` would be `0` (after initial load), and `serial_in` would be connected to `~serial_out` of the USR.

## 5. Fundamentals of Logic Design (Roth) Perspective

Roth's "Fundamentals of Logic Design" provides a strong foundation for understanding sequential circuits.

*   **Chapter 9: Flip-Flops and Latches:** Roth details the operation of various flip-flops (SR, JK, D, T) and how they form the memory elements of sequential circuits.
*   **Chapter 10: Sequential Circuit Analysis:** This chapter covers state diagrams, state tables, and how to analyze sequential circuits. Ring and Johnson counters are classic examples of sequential circuits. Roth would typically show them implemented with discrete D flip-flops and explicit feedback connections.
*   **Chapter 11: Sequential Circuit Design:** Roth would outline the steps to design sequential circuits, including state reduction and state assignment. While we are using a USR as a pre-built component here, understanding the underlying state transitions is still relevant.

**Example of a Ring Counter using D Flip-Flops (as per Roth's principles):**

```
      +-------+   Q0   +-------+   Q1   +-------+   Q2   +-------+   Q3
      | D     |----->| D     |----->| D     |----->| D     |----->
D0 <--| FF0   | D1   | FF1   | D2   | FF2   | D3   | FF3   |
      |       |----->|       |----->|       |----->|       |----->
      +-------+      +-------+      +-------+      +-------+
          ^                                              |
          |----------------------------------------------| (Q3 output to D0 input)
```
In our USR implementation, the SRFFs are contained within the USR. We are effectively controlling their inputs and outputs through the USR's ports.

**Example of a Johnson Counter using D Flip-Flops (as per Roth's principles):**

```
      +-------+   Q0   +-------+   Q1   +-------+   Q2   +-------+   Q3
      | D     |----->| D     |----->| D     |----->| D     |----->
D0 <--| FF0   | D1   | FF1   | D2   | FF2   | D3   | FF3   |
      | NOT Q0|----->|       |----->|       |----->|       |----->
      +-------+      +-------+      +-------+      +-------+
          ^
          |----------------------------------------------| (NOT Q3 output to D0 input)
```
Again, the USR abstracts away the individual flip-flops, but the principle of feeding back a modified output remains.

## 6. Learning Outcomes Coverage

*   **CO1: Design and demonstrate the functioning of various combinational and sequential circuits using ICs (Knowledge Level: K3)**
    *   This experiment directly addresses sequential circuits (ring and Johnson counters). While we are using an FPGA and Verilog, the underlying principles are the same as those used in IC design. The demonstration on FPGA proves the functional correctness.
*   **CO2: Apply an industry compatible hardware description language to implement digital circuits (Knowledge Level: K3)**
    *   We are using Verilog HDL to describe and implement the USR-based counters. This is a core skill in modern digital design.
*   **CO3: Implement digital circuits on FPGA boards and connect external hardware to the boards (Knowledge Level: K3)**
    *   The entire experiment is about implementing these circuits on an FPGA. Connecting to LEDs or switches for observation falls under connecting external hardware.
*   **CO4: Function effectively as an individual and in a team to accomplish the given task. (Knowledge Level: K2)**
    *   Lab work inherently promotes teamwork and individual responsibility to complete the task. Understanding the functionality of the circuits is key to successful implementation.

## 7. Practice Questions & Exercises

**Question 1:**
Describe the primary difference in the feedback connection between a Ring Counter and a Johnson Counter. How does this difference affect their sequence length?

**Answer:**
The primary difference is in the feedback signal:
*   **Ring Counter:** The *normal* output of the last flip-flop is fed back to the input of the first.
*   **Johnson Counter:** The *inverted* output of the last flip-flop is fed back to the input of the first.

This difference in feedback leads to different sequence lengths:
*   **Ring Counter:** For an $n$-bit register, it produces a sequence of **$n$ states**.
*   **Johnson Counter:** For an $n$-bit register, it produces a sequence of **$2n$ states**.

**Question 2:**
Suppose you are implementing a 5-bit Ring Counter using a Universal Shift Register. What would be the initial state and what would be the feedback connection?

**Answer:**
*   **Initial State:** A common initial state is `10000` (or any single '1' with the rest '0's).
*   **Feedback Connection:** The serial output (e.g., `q[0]` if shifting right) of the USR would be connected directly to the serial input of the USR.
    `serial_in = serial_out;`

**Question 3:**
If you want to create a 6-bit Johnson Counter that cycles through all possible states (i.e., $2^6 = 64$ states), can a standard Universal Shift Register with simple serial feedback be used directly? Explain why or why not.

**Answer:**
No, a standard Universal Shift Register with simple serial feedback (normal or inverted) **cannot** directly create a Johnson counter that cycles through all $2^6 = 64$ states. The standard Johnson counter implementation using a USR with feedback from the last flip-flop (inverted or not) to the first will only produce $2n$ states. For a 6-bit register, this is $2 \times 6 = 12$ states. To achieve a full $2^n$ state sequence, more complex designs like Gray codes or maximal-length linear feedback shift registers (LFSRs) are typically used, which often involve XORing multiple outputs before feeding back.

**Question 4 (Practical Application):**
You have a 4-bit Universal Shift Register module (`USR_4BIT`) available. Write the Verilog code snippet for the top-level module that instantiates this USR and configures it as a Ring Counter. Assume the `USR_4BIT` module has the following ports:
`clk`, `reset`, `load_enable`, `shift_enable`, `parallel_in[3:0]`, `serial_in`, `q[3:0]`, `serial_out`.
Your top-level module should be named `ring_counter_4bit`.

**Answer:**

```verilog
module ring_counter_4bit (
    input wire clk,
    input wire reset,
    output wire [3:0] counter_output // Output of the ring counter
);

    // Control signals for the USR
    wire shift_en;
    wire load_en;
    wire [3:0] parallel_data;
    wire serial_data_in;
    wire [3:0] usr_q;
    wire usr_serial_out;

    // Configure for Ring Counter operation
    assign shift_en = 1;       // Always shift
    assign load_en = 0;        // Never load in parallel during counting
    assign parallel_data = 4'b1000; // Initializing value for the ring counter
                                  // (This would be loaded via the parallel_in port
                                  // and load_enable during the reset phase)

    // Feedback connection for Ring Counter: serial_in = serial_out
    assign serial_data_in = usr_serial_out;

    // Instantiate the Universal Shift Register module
    USR_4BIT my_usr_inst (
        .clk(clk),
        .reset(reset),
        .load_enable(load_en),
        .shift_enable(shift_en),
        .parallel_in(parallel_data), // This data will be loaded on reset/load_enable
        .serial_in(serial_data_in),
        .q(usr_q),
        .serial_out(usr_serial_out)
    );

    // Assign the output of the ring counter
    assign counter_output = usr_q;

    /*
     Note on initialization:
     A common strategy for initialization is to have a reset pulse that:
     1. Sets load_enable = 1 and shift_enable = 0.
     2. Loads the parallel_data (e.g., 4'b1000).
     3. After the reset pulse, sets load_enable = 0 and shift_enable = 1
        to start the continuous shifting operation.
     The simple instantiation above assumes external logic handles this initialization sequence.
    */

endmodule
```

## 8. Important Points to Remember

*   **USR Versatility:** A USR is a powerful building block that can be configured for various sequential operations by controlling its load, shift, and direction signals.
*   **Feedback is Key:** The specific way the output of the last flip-flop is connected to the input of the first determines the counter's behavior (Ring vs. Johnson).
*   **Initialization Matters:** Proper initialization is critical for both Ring and Johnson counters. Utilize the USR's parallel load capability for this.
*   **FPGA Workflow:** Understand how to instantiate your USR module within a top-level design for the specific counter you want to implement.
*   **Synthesis Tools:** Remember that Verilog code written for sequential circuits using `always @(posedge clk)` blocks will be synthesized into flip-flops and combinatorial logic by synthesis tools.

This comprehensive set of notes should provide a solid foundation for understanding and implementing Ring and Johnson counters using a Universal Shift Register in your FPGA lab.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
