---
title: "SoC Design on FPGA"
subject: "VLSI DESIGN"
module: "Module 4: Finite State Machines (FSMs):  Mealy and Moore models"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b319"
status: "completed"
scrapedAt: "2026-05-20T16:17:37.880Z"
---
## VLSI Design: Module 4 - SoC Design on FPGA (FSMs - Mealy & Moore)

**Introduction:** This module focuses on implementing Systems on Chips (SoCs) on Field-Programmable Gate Arrays (FPGAs) using Finite State Machines (FSMs). We'll explore the Mealy and Moore models for FSM design and see how they contribute to efficient and flexible SoC implementations.

**Learning Outcomes:**

*   Understand the architecture of a System on Chip (SoC).
*   Learn about implementing SoCs on FPGAs.
*   Distinguish between Mealy and Moore Finite State Machine (FSM) models.
*   Design and implement FSMs for specific SoC functionalities on FPGAs.
*   Understand the trade-offs between different FSM implementations.

**1. System on Chip (SoC) Architecture**

*   **Definition:** A System on Chip (SoC) is an integrated circuit (IC) that integrates all the necessary electronic circuits and components for a complete electronic system into a single chip.

*   **Key Components:**
    *   **Processor Core(s):** Central Processing Unit (CPU) for general-purpose computation.  Can be single or multiple cores (multi-core SoC).
    *   **Memory Subsystem:**  Includes various types of memory like SRAM, DRAM, ROM, and Flash, used for storing data and instructions.
    *   **Peripherals:**  Modules that interface with the external world or provide specialized functions, such as:
        *   UART (Universal Asynchronous Receiver/Transmitter) for serial communication.
        *   SPI (Serial Peripheral Interface) for synchronous serial communication.
        *   I2C (Inter-Integrated Circuit) for two-wire serial communication.
        *   Timers/Counters.
        *   Analog-to-Digital Converters (ADCs) and Digital-to-Analog Converters (DACs).
        *   GPIO (General Purpose Input/Output) pins for flexible digital I/O.
        *   Ethernet controllers.
        *   USB controllers.
    *   **Interconnect:**  The communication network that allows different components of the SoC to exchange data. Common interconnects include:
        *   Buses (e.g., AMBA - Advanced Microcontroller Bus Architecture).
        *   Networks-on-Chip (NoCs) for more complex, high-bandwidth communication.
    *   **Clocks and Resets:**  Clock signals provide timing for synchronous operations, and reset signals initialize the system to a known state.
    *   **Power Management:**  Circuits and techniques for managing power consumption to improve efficiency and battery life.

*   **Advantages of SoCs:**
    *   **Reduced Size and Cost:**  Integration on a single chip reduces board space and manufacturing costs.
    *   **Improved Performance:**  Shorter signal paths lead to faster data transfer rates.
    *   **Lower Power Consumption:**  Integration reduces parasitic capacitances and inductances, leading to lower power dissipation.
    *   **Enhanced Security:**  Integration can make it more difficult to tamper with the system.

**2. SoC Design on FPGA**

*   **FPGA (Field-Programmable Gate Array):** An integrated circuit that can be configured by the designer after manufacturing. It contains programmable logic blocks (CLBs) and programmable interconnects.

*   **FPGA Advantages for SoC Implementation:**
    *   **Flexibility and Reconfigurability:**  The logic and interconnects can be reconfigured to implement different functionalities.
    *   **Rapid Prototyping:**  FPGAs allow for quick design iteration and verification.
    *   **Hardware Acceleration:**  Custom hardware accelerators can be implemented on the FPGA to improve the performance of specific tasks.
    *   **Lower Development Costs (for smaller quantities):**  Compared to designing a custom ASIC (Application-Specific Integrated Circuit).
    *   **Time-to-Market:**  Faster development and deployment than ASICs.

*   **FPGA-based SoC Design Flow:**
    1.  **Specification:** Define the system requirements and functionalities.
    2.  **Architecture Design:** Partition the system into hardware and software components. Choose appropriate processor cores, peripherals, and interconnect.
    3.  **Hardware Design:** Design the custom hardware components (accelerators, interfaces) using Hardware Description Languages (HDLs) like VHDL or Verilog.  This often involves using FSMs.
    4.  **Software Development:** Develop the software running on the processor core(s) using languages like C or C++.
    5.  **Integration and Verification:** Integrate the hardware and software components and verify the system functionality through simulation and hardware testing.
    6.  **Implementation:**  Map the design onto the FPGA using vendor-specific tools (e.g., Xilinx Vivado, Intel Quartus). This involves synthesis, place & route, and bitstream generation.
    7.  **Testing and Debugging:** Test the implemented system on the FPGA and debug any errors.

*   **Example: Implementing a simple UART on an FPGA SoC:**
    *   **Processor Core:** MicroBlaze (Xilinx) or Nios II (Intel) soft-core processor.
    *   **UART Peripheral:** Implemented in HDL (Verilog/VHDL) as an FSM.
    *   **Interconnect:** AXI bus (Advanced eXtensible Interface).
    *   **Software:**  C code running on the processor to send and receive data via the UART.

**3. Finite State Machines (FSMs): Mealy and Moore Models**

*   **Definition:** An FSM is a mathematical model of computation used to design sequential logic circuits. It consists of:
    *   **States:** A finite set of possible configurations the system can be in.
    *   **Input Alphabet:** A set of possible inputs to the system.
    *   **Output Alphabet:** A set of possible outputs from the system.
    *   **Transition Function:** Determines the next state based on the current state and the current input.
    *   **Output Function:** Determines the output based on the current state (Moore) or the current state and input (Mealy).

*   **Mealy FSM:**
    *   **Output Function:** The output is a function of *both* the current state and the current input.  `Output = f(Current State, Input)`.
    *   **Advantages:** Can react faster to inputs since the output changes immediately with the input.  Can often be implemented with fewer states than a Moore machine for the same functionality.
    *   **Disadvantages:** Output can be glitchy if the input changes close to the clock edge.  Requires more complex output logic.

*   **Moore FSM:**
    *   **Output Function:** The output is a function *only* of the current state. `Output = f(Current State)`.
    *   **Advantages:** Output is stable and glitch-free because it only changes on clock edges when the state changes.  Simpler output logic.
    *   **Disadvantages:** Requires more states than a Mealy machine for the same functionality in some cases. Slower response time (the output changes one clock cycle after the input).

*   **State Diagram:** A graphical representation of an FSM, showing the states, transitions, and outputs.
    *   **Circles:** Represent states.
    *   **Arrows:** Represent transitions between states.
    *   **Labels on Arrows:** Indicate the input that triggers the transition.
    *   **Labels inside Circles (Moore):** Indicate the output associated with that state.
    *   **Labels on Arrows (Mealy):** Indicate the input/output associated with that transition (Input/Output).

*   **State Table:** A tabular representation of an FSM, showing the current state, input, next state, and output.

**4. Designing and Implementing FSMs on FPGAs**

*   **Steps:**
    1.  **State Diagram Design:** Create a state diagram that represents the desired functionality. Choose between Mealy and Moore based on the application requirements.
    2.  **State Encoding:** Assign a unique binary code to each state.  Consider using Gray code to minimize switching activity and power consumption.  Common encoding schemes:
        *   Binary encoding.
        *   Gray encoding.
        *   One-hot encoding (one flip-flop per state, only one flip-flop is high at a time).
    3.  **State Table Generation:** Create a state table based on the state diagram.
    4.  **Logic Minimization:** Simplify the logic equations for the next state and output functions using techniques like Karnaugh maps (K-maps) or Quine-McCluskey algorithm.
    5.  **HDL Implementation:** Write the FSM code in VHDL or Verilog.
    6.  **Synthesis and Implementation:** Use FPGA vendor tools (Vivado, Quartus) to synthesize, place, and route the design.
    7.  **Testing and Verification:** Simulate and test the implemented FSM on the FPGA.

*   **HDL Code Structure (Example in Verilog - simplified):**

```verilog
module fsm (
  input clk,
  input rst,
  input data_in,
  output reg data_out
);

  // State definitions (example with 3 states)
  localparam STATE_IDLE = 2'b00;
  localparam STATE_PROCESS = 2'b01;
  localparam STATE_DONE = 2'b10;

  reg [1:0] current_state, next_state;

  // State register update
  always @(posedge clk or posedge rst) begin
    if (rst) begin
      current_state <= STATE_IDLE;
    end else begin
      current_state <= next_state;
    end
  end

  // Next state logic
  always @(*) begin
    case (current_state)
      STATE_IDLE: begin
        if (data_in) begin
          next_state = STATE_PROCESS;
        end else begin
          next_state = STATE_IDLE;
        end
      end
      STATE_PROCESS: begin
        next_state = STATE_DONE;
      end
      STATE_DONE: begin
        next_state = STATE_IDLE;
      end
      default: next_state = STATE_IDLE;
    endcase
  end

  // Output logic (Moore example)
  always @(current_state) begin
    case (current_state)
      STATE_IDLE: data_out = 0;
      STATE_PROCESS: data_out = 1;
      STATE_DONE: data_out = 0;
      default: data_out = 0;
    endcase
  end

endmodule
```

*   **Considerations for FPGA Implementation:**
    *   **State Encoding:**  One-hot encoding can be beneficial for speed on FPGAs because it simplifies the combinational logic for the next state decoder. However, it uses more flip-flops.
    *   **Resource Utilization:** Optimize the design to minimize the number of logic resources (LUTs, flip-flops) used.
    *   **Timing Constraints:**  Ensure that the design meets the timing constraints specified in the FPGA tool. This might require pipelining or other techniques to improve performance.
    *   **Power Consumption:** Minimize switching activity to reduce power consumption.  Use clock gating or other power-saving techniques.

**5. Trade-offs between Different FSM Implementations**

*   **Mealy vs. Moore:** As discussed earlier, consider the speed, output stability, and complexity trade-offs.  Choose the model that best suits the application requirements.
*   **State Encoding:** Different state encoding schemes can impact area, speed, and power consumption.  Experiment with different encodings to find the best solution.
*   **Implementation Style:**  Different coding styles in HDL can affect the synthesized hardware.  Use optimized code structures to improve performance and reduce resource utilization.
*   **Pipelining:**  Pipelining can improve the clock frequency of an FSM, but it introduces latency.  Consider pipelining for high-speed applications.

**Important Points to Remember:**

*   Understand the fundamentals of FSMs (states, inputs, outputs, transitions).
*   Be able to design state diagrams and state tables for Mealy and Moore FSMs.
*   Know how to implement FSMs in HDL (Verilog/VHDL).
*   Consider the trade-offs between different FSM implementations (Mealy vs. Moore, state encoding).
*   Optimize FSM designs for area, speed, and power consumption on FPGAs.

**Practice Questions/Exercises:**

1.  **Problem:** Design a Mealy FSM that detects the sequence "1101" in an input stream. The output should be '1' when the sequence is detected and '0' otherwise.
    *   **Answer:**
        *   **States:** S0 (initial), S1 ("1"), S2 ("11"), S3 ("110"), S4 ("1101")
        *   **Input:** 0, 1
        *   **Output:** 0, 1
        *   **State Diagram:** Draw a state diagram showing the transitions and outputs for each state based on the input.  Remember Mealy machines have the output on the transition arc. For example, from S0 on input '1' transition to S1 and output '0' (S0 -> S1, 1/0). From S3 on input '1' transition to S1 and output '0' (S3 -> S1, 1/0). From S3 on input '0' transition to S3 and output '0' (S3 -> S3, 0/0). From S3 on input '1' transition to S4 and output '1' (S3 -> S4, 1/1).  S4 can return to S0 on input '0' (S4 -> S0, 0/0) or back to S1 on input '1' (S4 -> S1, 1/0).
2.  **Problem:** Design a Moore FSM that controls a traffic light. The light should cycle through Green (G), Yellow (Y), and Red (R) states, each lasting for a certain duration.
    *   **Answer:**
        *   **States:** G, Y, R
        *   **Input:** Clock signal (implicitly used for state transitions)
        *   **Output:** Traffic light signals (G, Y, R are outputs).
        *   **State Diagram:** The state diagram will simply transition from G -> Y -> R -> G in a loop.  The outputs are associated with the states: G (Green=1, Yellow=0, Red=0), Y (Green=0, Yellow=1, Red=0), R (Green=0, Yellow=0, Red=1).  You'd need timers or counters to control the duration of each state.

3.  **Problem:** Explain the difference between one-hot encoding and binary encoding for FSM states. What are the advantages and disadvantages of each?
    *   **Answer:**
        *   **One-Hot Encoding:**  Each state is represented by a single bit being high (1) while all other bits are low (0).  Requires one flip-flop per state.
            *   **Advantages:** Simplifies decoding logic, potentially faster state transitions.
            *   **Disadvantages:** Uses more flip-flops (more area), can lead to higher power consumption if not managed carefully.
        *   **Binary Encoding:**  Each state is represented by a unique binary code.  Requires fewer flip-flops (log2(number of states)).
            *   **Advantages:** Uses fewer flip-flops (less area).
            *   **Disadvantages:** More complex decoding logic, potentially slower state transitions.

These study notes provide a comprehensive overview of SoC design on FPGA using FSMs. Remember to practice designing and implementing FSMs to solidify your understanding. Good luck!
