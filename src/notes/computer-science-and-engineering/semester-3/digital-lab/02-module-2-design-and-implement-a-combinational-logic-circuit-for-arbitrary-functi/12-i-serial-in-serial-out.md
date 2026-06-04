---
title: "(i) Serial in serial out"
subject: "DIGITAL LAB"
module: "Module 2: Design and implement a combinational logic circuit for arbitrary functions (any two)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8aee3"
status: "completed"
scrapedAt: "2026-05-20T16:24:25.946Z"
---
## DIGITAL LAB - Module 2: Combinational Logic Circuit Design - Serial In Serial Out (SISO)

**Module Goal:** Design and implement combinational logic circuits for arbitrary functions.
**Specific Topic:** (i) Serial In Serial Out (SISO)

**Learning Outcomes:**

*   Understand the basic concept of Serial In Serial Out (SISO) shift registers.
*   Design a SISO shift register using D flip-flops.
*   Analyze the timing diagram of a SISO shift register.
*   Implement and test a SISO shift register using appropriate hardware/simulation tools.
*   Identify applications of SISO shift registers.

---

**1. Key Concepts and Definitions:**

*   **Shift Register:** A type of sequential logic circuit that stores and shifts data in a specific direction (left or right). It consists of a series of flip-flops connected in cascade.
*   **Serial In Serial Out (SISO):**  A type of shift register where data enters and exits the register serially (one bit at a time) through single input and output lines, respectively.
*   **Flip-Flop:** A bistable multivibrator, which is a circuit that has two stable states and can store one bit of information (0 or 1).  The D flip-flop is commonly used in shift registers due to its simple operation.
*   **Clock Signal:** A periodic signal (square wave) that synchronizes the operations of sequential circuits. Transitions (rising or falling edges) of the clock signal trigger state changes in flip-flops.
*   **Data Input (Serial Input):** The input line through which serial data is fed into the SISO register.
*   **Data Output (Serial Output):** The output line from which serial data is retrieved from the SISO register.
*   **Clock Input:** The input line connected to the clock signal.
*   **Propagation Delay:** The time delay between the application of an input and the appearance of the corresponding output in a flip-flop or logic gate.
*   **Bit:** The basic unit of information in computing, represented as 0 or 1.
*   **Word/Data Length:**  The number of bits that a shift register can hold (e.g., 4-bit shift register, 8-bit shift register).

**2. SISO Shift Register Design using D Flip-Flops:**

*   **Basic Structure:** A SISO shift register of *n* bits consists of *n* D flip-flops connected in cascade.
*   **Connection:** The output of one D flip-flop is connected to the input of the next D flip-flop.
*   **Operation:**
    *   Data is applied serially to the input of the first flip-flop.
    *   On each clock pulse, the data bit at the input of each flip-flop is transferred to its output (and thus to the input of the next flip-flop).
    *   After *n* clock pulses, the entire *n*-bit data sequence is shifted into the register.
    *   The data is then available serially at the output of the last flip-flop.

**Diagram:**

```
Serial Input --> [D FF] --> [D FF] --> [D FF] --> ... --> [D FF] --> Serial Output
                 ^        ^        ^                    ^
                 |        |        |                    |
             Clock    Clock    Clock                Clock
```

**Detailed Explanation:**

Let's consider a 4-bit SISO shift register constructed with four D flip-flops (DFF0, DFF1, DFF2, DFF3).

1.  **DFF0:** Input is the Serial Input (SI), Output is Q0.
2.  **DFF1:** Input is Q0, Output is Q1.
3.  **DFF2:** Input is Q1, Output is Q2.
4.  **DFF3:** Input is Q2, Output is Q3 (Serial Output, SO).

All flip-flops are connected to the same clock signal.  Assume the initial state of all flip-flops is 0 (Q0=Q1=Q2=Q3=0).

To input the serial data sequence "1011":

*   **Clock Pulse 1:** SI = 1.  DFF0 receives '1' and after a short propagation delay, Q0 becomes 1.  The other flip-flops remain unchanged (Q1=Q2=Q3=0).
*   **Clock Pulse 2:** SI = 0.  DFF0 receives '0' and Q0 becomes 0.  DFF1 receives '1' (previously Q0), and Q1 becomes 1. Q2=Q3=0.
*   **Clock Pulse 3:** SI = 1.  DFF0 receives '1' and Q0 becomes 1.  DFF1 receives '0' and Q1 becomes 0. DFF2 receives '1' and Q2 becomes 1. Q3=0.
*   **Clock Pulse 4:** SI = 1.  DFF0 receives '1' and Q0 becomes 1.  DFF1 receives '1' and Q1 becomes 1. DFF2 receives '0' and Q2 becomes 0. DFF3 receives '1' and Q3 becomes 1.

After 4 clock pulses, Q3 (the serial output) will output '1'. On subsequent clock pulses, the remaining bits (0, 1, 1) will be outputted one by one, in the order they were entered.

**3. Timing Diagram of a SISO Shift Register:**

A timing diagram graphically represents the changes in signals over time. For a SISO shift register, the timing diagram will show the clock signal, the serial input, and the outputs of each flip-flop (Q0, Q1, Q2, Q3 for a 4-bit register) over multiple clock cycles. The propagation delay of each flip-flop will be visible as a slight delay between the input and output transitions.

**Example Timing Diagram (4-bit SISO, Input: 1011):**

```
Clock:  _|￣|_|￣|_|￣|_|￣|_|￣|_|￣|_|￣|_
        |  |  |  |  |  |  |  |
SI:     ___|￣￣￣|___|￣|___|￣|_______
        |    1     |  0  |  1  |  1    |
Q0:     _______|￣￣￣|___|￣|___|￣|___
        |    1     |  0  |  1  |  1  |
Q1:     ___________|￣￣￣|___|￣|___|￣
        |        1   |  0  |  1  |  1  |
Q2:     _______________|￣￣￣|___|￣|___
        |            1   |  0  |  1  |  1 |
Q3 (SO):   ___________________|￣￣￣|___|￣
        |                1   |  0  |  1  |  1 |
```

**Key Observations from the Timing Diagram:**

*   The changes in the flip-flop outputs (Q0, Q1, Q2, Q3) occur at the rising (or falling, depending on the flip-flop design) edge of the clock signal.
*   Each bit is shifted one position to the right on each clock pulse.
*   The serial output (Q3) reflects the serial input after a delay of *n* clock cycles, where *n* is the number of flip-flops.

**4. Implementation and Testing:**

*   **Hardware Implementation:** Using discrete D flip-flop ICs (e.g., 7474) and a clock signal generator. Wire the circuit as described above. Test the circuit by providing a known serial input and observing the serial output on an oscilloscope or logic analyzer.
*   **Simulation:**  Use a hardware description language (HDL) like Verilog or VHDL, or a circuit simulation tool like Multisim or LTspice.  Create a model of the D flip-flop and the SISO shift register.  Simulate the circuit with different serial input sequences and verify that the output matches the expected behavior.  This allows for easy verification and debugging before physical implementation.

**Verilog Example (4-bit SISO):**

```verilog
module SISO_4bit (
  input clk,
  input serial_in,
  output serial_out
);

  reg [3:0] shift_reg;

  always @(posedge clk) begin
    shift_reg <= {shift_reg[2:0], serial_in}; // Shift right, new bit from serial_in
  end

  assign serial_out = shift_reg[3];

endmodule
```

**5. Applications of SISO Shift Registers:**

*   **Serial Data Transmission:**  Converting parallel data into serial data for transmission over a single wire.
*   **Delay Lines:**  Introducing a specific delay in a signal by shifting it through the register.  The delay is proportional to the clock period and the number of stages.
*   **Simple Data Storage:** Storing a small amount of data.
*   **Pseudo-Random Number Generation (PRNG):** In conjunction with feedback logic (Linear Feedback Shift Registers, LFSRs).
*   **Digital Signal Processing (DSP):** Implementations of some filtering algorithms.

**6. Practice Questions/Exercises:**

1.  **Design a 6-bit SISO shift register using D flip-flops. Draw the circuit diagram.**
    *   **Answer:** The circuit will consist of 6 D flip-flops connected in cascade, with the output of each flip-flop connected to the input of the next. All flip-flops are clocked by the same clock signal. The serial input is connected to the input of the first flip-flop, and the serial output is taken from the output of the last flip-flop.

2.  **If a 4-bit SISO shift register is initially all zeros, and the serial input is '1010', what will the output be after the first four clock pulses? What will the output be after clock pulse 5, 6, 7 and 8?**
    *   **Answer:**
        *   Clock Pulse 1: Output = 0
        *   Clock Pulse 2: Output = 0
        *   Clock Pulse 3: Output = 0
        *   Clock Pulse 4: Output = 0
        *   Clock Pulse 5: Output = 1
        *   Clock Pulse 6: Output = 0
        *   Clock Pulse 7: Output = 1
        *   Clock Pulse 8: Output = 0

3.  **Explain the function of the clock signal in a SISO shift register.**
    *   **Answer:** The clock signal synchronizes the data transfer between the flip-flops in the shift register. On each active edge (rising or falling) of the clock signal, the data at the input of each flip-flop is transferred to its output, effectively shifting the data one position to the right.

4.  **What are some limitations of using SISO shift registers for data storage compared to other memory technologies like RAM?**
    *   **Answer:**
        *   **Sequential Access:**  SISO registers provide only sequential access to data. You must shift through all preceding bits to access a specific bit. RAM provides random access.
        *   **Limited Capacity:** SISO registers are practical only for storing small amounts of data.  Expanding the capacity requires adding more flip-flops, which can become cumbersome.
        *   **Volatility:**  SISO registers typically use volatile memory elements (flip-flops). Data is lost when power is removed.

5.  **Modify the Verilog code to create an 8-bit SISO shift register.**
    *   **Answer:**

    ```verilog
    module SISO_8bit (
      input clk,
      input serial_in,
      output serial_out
    );

      reg [7:0] shift_reg;

      always @(posedge clk) begin
        shift_reg <= {shift_reg[6:0], serial_in}; // Shift right, new bit from serial_in
      end

      assign serial_out = shift_reg[7];

    endmodule
    ```

**7. Important Points to Remember:**

*   SISO shift registers are fundamental building blocks for serial data handling.
*   The number of flip-flops determines the data length the register can store.
*   The clock signal is crucial for synchronizing data shifting.
*   Propagation delays in flip-flops must be considered in timing analysis.
*   Understand the relationship between the serial input, clock, and serial output through the timing diagram.

This document provides a comprehensive overview of Serial In Serial Out (SISO) shift registers. By studying the concepts, examples, and practice questions, you should gain a strong understanding of the design, operation, and applications of SISO shift registers.
