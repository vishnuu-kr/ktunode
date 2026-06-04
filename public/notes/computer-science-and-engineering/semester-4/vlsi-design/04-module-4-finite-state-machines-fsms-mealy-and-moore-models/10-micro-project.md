---
title: "Micro project*"
subject: "VLSI DESIGN"
module: "Module 4: Finite State Machines (FSMs):  Mealy and Moore models"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b31a"
status: "completed"
scrapedAt: "2026-05-20T16:17:38.687Z"
---
## VLSI Design: Module 4 - Finite State Machines (FSMs): Micro Project

These notes cover the Micro Project aspect of Module 4, focusing on the application of Mealy and Moore models for Finite State Machine (FSM) design in VLSI.

**Learning Outcomes:**

*   Understand the application of Mealy and Moore FSMs in real-world digital design problems.
*   Design, implement, and simulate a small-scale FSM project using HDL (Hardware Description Language) like Verilog or VHDL.
*   Optimize FSM design for area, power, and speed in VLSI implementations.
*   Analyze the trade-offs between Mealy and Moore FSM architectures in the context of a specific design task.

**1. Introduction to Micro Projects in FSM Design**

*   A micro project provides hands-on experience in applying theoretical FSM concepts to a practical problem.
*   It involves the complete design flow, from problem definition and state diagram creation to HDL implementation, simulation, and optimization.
*   The project should be of manageable complexity, allowing you to explore design choices and analyze their impact on performance and resource utilization.

**2. Choosing a Suitable Micro Project**

*   Select a problem that is neither trivial nor overly complex.  It should require a few states and a reasonable amount of logic.
*   Consider projects with clear functional specifications and defined input/output requirements.
*   Examples of suitable micro projects:
    *   **Sequence Detector:** Detect a specific sequence of bits (e.g., "1011") in a serial data stream.
    *   **Traffic Light Controller:** Simulate a simplified traffic light system for an intersection.
    *   **Vending Machine Controller:** Implement a basic vending machine logic that accepts coins and dispenses items.
    *   **Simple Serial Adder:** Add two serial data streams bit by bit.
    *   **Combination Lock:** Design a logic gate that unlocks the gate when the correct input combination is entered.

**3. Design Flow for an FSM Micro Project**

1.  **Problem Definition:**
    *   Clearly define the functionality of the FSM.
    *   Identify inputs, outputs, and their data types.
    *   Specify the behavior of the FSM for different input conditions.
    *   Define the sequence of operations to be performed.

2.  **State Diagram/State Table Creation:**
    *   Draw a state diagram representing the FSM's behavior.  Each state represents a specific condition or stage in the operation.
    *   Label transitions between states with input conditions and output values (for Mealy) or output values associated with the state itself (for Moore).
    *   Alternatively, create a state table that lists all states, inputs, next states, and outputs.

3.  **State Encoding:**
    *   Assign binary codes to each state.
    *   Consider different encoding schemes (binary, Gray code, one-hot) and their impact on area and power consumption.  One-hot encoding often simplifies logic but increases the number of flip-flops.

4.  **HDL Implementation (Verilog/VHDL):**
    *   Write Verilog or VHDL code to implement the FSM.
    *   Structure the code with clear sections for state register update (sequential logic) and output logic generation (combinational logic).
    *   Use appropriate coding style for synthesis.

5.  **Simulation and Verification:**
    *   Create a testbench to simulate the FSM and verify its functionality.
    *   Apply a variety of input sequences to test all possible state transitions and output conditions.
    *   Use waveform viewers to analyze the simulation results and debug any errors.

6.  **Synthesis and Implementation (Optional):**
    *   Synthesize the HDL code using a synthesis tool.
    *   Implement the design on a target technology (e.g., FPGA).
    *   Analyze area, power, and speed characteristics.

7.  **Optimization (Optional):**
    *   Optimize the FSM for area, power, or speed based on design constraints.
    *   Explore techniques like state encoding optimization, logic simplification, and pipelining.

**4. Mealy vs. Moore FSMs in the Micro Project Context**

*   **Mealy FSM:**
    *   Outputs depend on both the current state *and* the input.
    *   Can react faster to inputs (potentially one clock cycle sooner).
    *   More complex output logic (combinational logic path can be longer).
    *   Potential for glitches in the output if the input changes asynchronously with the clock.

*   **Moore FSM:**
    *   Outputs depend only on the current state.
    *   Outputs are synchronous and stable (no glitches).
    *   Simpler output logic.
    *   May require more states to represent the same functionality as a Mealy FSM.

*   **Trade-offs in Micro Project Selection:**

    *   If the micro project requires immediate responses to input changes (e.g., a fast sequence detector), a Mealy FSM might be preferred, keeping in mind the potential glitch issues.
    *   If stable and glitch-free outputs are critical (e.g., a control signal for a motor), a Moore FSM would be more suitable.
    *   Consider the complexity of the output logic.  A Moore FSM can simplify this, reducing area and power.

**5. Example: Sequence Detector Micro Project (detecting "101" in a serial input)**

1.  **Problem Definition:** Design an FSM that detects the sequence "101" in a serial input stream.  The output should be high when the sequence is detected.

2.  **State Diagram:**

    ```mermaid
    stateDiagram
        [*] --> S0: Reset
        S0 --> S1: 1
        S0 --> S0: 0
        S1 --> S2: 0
        S1 --> S0: 1
        S2 --> S1: 1/Output = 1
        S2 --> S0: 0
    ```

3.  **State Encoding (Binary):**

    *   S0: 00
    *   S1: 01
    *   S2: 10

4.  **Verilog Implementation (Moore Machine):**

    ```verilog
    module sequence_detector (
        input clk,
        input rst,
        input data_in,
        output reg detect
    );

    reg [1:0] current_state, next_state;

    // State Definitions
    localparam S0 = 2'b00; // Initial State
    localparam S1 = 2'b01; // '1' received
    localparam S2 = 2'b10; // '10' received

    // State Update Logic (Sequential)
    always @(posedge clk or posedge rst) begin
        if (rst) begin
            current_state <= S0;
        end else begin
            current_state <= next_state;
        end
    end

    // Next State Logic (Combinational)
    always @(*) begin
        case (current_state)
            S0: begin
                if (data_in) next_state = S1;
                else next_state = S0;
            end
            S1: begin
                if (data_in) next_state = S1;
                else next_state = S2;
            end
            S2: begin
                if (data_in) next_state = S1;
                else next_state = S0;
            end
            default: next_state = S0;
        endcase
    end

    // Output Logic (Combinational - Moore)
    always @(current_state) begin
        if (current_state == S2 && data_in) begin
            detect = 1; // Sequence "101" detected
        end else begin
            detect = 0;
        end
    end

    endmodule
    ```

5.  **Testbench Example:**

    ```verilog
    module sequence_detector_tb;

        reg clk;
        reg rst;
        reg data_in;
        wire detect;

        sequence_detector dut (
            .clk(clk),
            .rst(rst),
            .data_in(data_in),
            .detect(detect)
        );

        initial begin
            clk = 0;
            rst = 1;
            data_in = 0;

            #10 rst = 0; // Release reset
            #10 data_in = 1; // Input sequence starts
            #10 data_in = 0;
            #10 data_in = 1; // "101" detected
            #10 data_in = 0;
            #10 data_in = 1;
            #10 data_in = 1; // "1011" detected
            #10 data_in = 0;
            #10 data_in = 1;
            #10 data_in = 0; // "1010" detected, no match
            #20 $finish; // End simulation
        end

        always #5 clk = ~clk; // Clock generation

    endmodule
    ```

**6. Key Considerations for VLSI Implementation**

*   **State Encoding:** Choice of encoding affects area and power.  One-hot is often used for speed but increases area.
*   **Logic Minimization:** Minimize the combinational logic for next-state and output generation using Karnaugh Maps or other logic simplification techniques.
*   **Clock Frequency:**  The maximum clock frequency is limited by the longest path through the combinational logic.
*   **Power Consumption:**  Reduce power consumption by minimizing switching activity and using low-power logic gates.
*   **Fanout:** Ensure that the output signals have sufficient drive strength to drive the load.  Buffers can be used to increase fanout.

**7. Practice Questions/Exercises**

1.  **Modify the sequence detector example to detect the sequence "1101".**
2.  **Design a traffic light controller FSM for a simple intersection.  Specify the inputs (e.g., sensor detecting cars) and outputs (red, yellow, green lights).**
3.  **Compare the area and power consumption of the sequence detector using binary and one-hot state encoding.**
4.  **Implement the sequence detector using a Mealy FSM instead of a Moore FSM. Analyze the differences in the Verilog code and the resulting output.**

**Answers to Exercises:** (Examples)

1.  **Sequence Detector Modification ("1101"):** (Requires modifying the state diagram, state encoding, and Verilog code.  New states will be needed to represent "1", "11", and "110".)

2.  **Traffic Light Controller (Outline):**
    *   States: Green A, Yellow A, Red A Green B, Red A Yellow B, Red A Red B. (A and B represent the two roads)
    *   Inputs: Sensor A, Sensor B (detecting cars on each road)
    *   Outputs: Red A, Yellow A, Green A, Red B, Yellow B, Green B.
    *   Transitions: Based on timers and sensor inputs.  Example: Green A -> Yellow A after a time period, Yellow A -> Red A, Red A -> Green B if Sensor B is high.

3.  **Area/Power Comparison:**  This requires synthesis using a specific technology library.  Generally, one-hot encoding will have more flip-flops (higher area), but potentially simpler combinational logic (lower power).  Binary encoding will have fewer flip-flops, but potentially more complex combinational logic.

4.  **Mealy Sequence Detector (Conceptual):** The output 'detect' would become a direct output of a state transition. The major modification will be in the output logic section, which will be moved and combined with the next-state logic. This reduces the need for the output state logic. Note that the timing of the output signal and possible glitches would need to be considered.

**8. Important Points to Remember**

*   Thoroughly understand the problem before starting the design.
*   Carefully draw the state diagram or create the state table.
*   Choose an appropriate state encoding scheme.
*   Write clean, well-commented HDL code.
*   Create a comprehensive testbench to verify the functionality of the FSM.
*   Consider area, power, and speed trade-offs in the design.
*   Pay attention to timing constraints and potential hazards in the circuit.
*   Document your design process thoroughly.

This comprehensive guide should provide you with a solid foundation for tackling FSM micro projects in VLSI design. Good luck!
