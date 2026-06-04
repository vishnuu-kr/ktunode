---
title: "Experiment 5. Multiplexer and Logic Implementation in FPGA"
subject: "LOGIC CIRCUIT DESIGN LABORATORY"
module: "Module 15: Experiment 5. Multiplexer and Logic Implementation in FPGA"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe463"
status: "completed"
scrapedAt: "2026-05-23T17:46:38.271Z"
---
# LOGIC CIRCUIT DESIGN LABORATORY - Module 15: Experiment 5. Multiplexer and Logic Implementation in FPGA

This module focuses on understanding and implementing multiplexers, a fundamental combinational logic circuit, and then applying this knowledge to realize digital logic designs on an FPGA board using a hardware description language.

---

## **1. Introduction to Multiplexers (MUX)**

### 1.1. What is a Multiplexer?

A **multiplexer (MUX)**, also known as a data selector, is a combinational logic circuit that selects one of several input signals and forwards it to a single output line. The selection is controlled by a set of **select lines**.

**Key Concepts:**

*   **Data Inputs:** Multiple input lines carrying data.
*   **Select Inputs:** Control lines that determine which data input is routed to the output.
*   **Enable Input (Optional):** A control input that can activate or deactivate the entire multiplexer. When disabled, the output is typically in a high-impedance state or fixed to a logic '0' or '1'.
*   **Output:** A single line that carries the selected input data.

### 1.2. Working Principle

A multiplexer can be thought of as a digitally controlled switch. The binary combination on the select lines determines which specific data input line is connected to the output. For *n* select lines, a multiplexer can have up to $2^n$ data inputs.

### 1.3. Truth Table of a 2-to-1 Multiplexer

Let's consider a 2-to-1 Multiplexer with data inputs $I_0, I_1$, a select line $S$, and an output $Y$.

| S   | Output Y |
| :-- | :------- |
| 0   | $I_0$    |
| 1   | $I_1$    |

**Boolean Expression:**
$Y = (\overline{S} \cdot I_0) + (S \cdot I_1)$

This expression clearly shows that if $S$ is '0', $I_0$ is selected; if $S$ is '1', $I_1$ is selected.

### 1.4. Truth Table of a 4-to-1 Multiplexer

A 4-to-1 Multiplexer has 4 data inputs ($I_0, I_1, I_2, I_3$) and 2 select lines ($S_1, S_0$).

| $S_1$ | $S_0$ | Output Y |
| :---- | :---- | :------- |
| 0     | 0     | $I_0$    |
| 0     | 1     | $I_1$    |
| 1     | 0     | $I_2$    |
| 1     | 1     | $I_3$    |

**Boolean Expression:**
$Y = (\overline{S_1} \cdot \overline{S_0} \cdot I_0) + (\overline{S_1} \cdot S_0 \cdot I_1) + (S_1 \cdot \overline{S_0} \cdot I_2) + (S_1 \cdot S_0 \cdot I_3)$

### 1.5. Implementing Multiplexers using Logic Gates

Multiplexers can be constructed using basic logic gates like AND, OR, and NOT gates. The Boolean expressions derived above directly translate into gate-level implementations.

**(Refer to Roth C.H, "Fundamentals of Logic Design" for detailed gate-level implementations and Karnaugh map simplifications if applicable for larger MUXes.)**

---

## **2. Logic Implementation in FPGA**

### 2.1. What is an FPGA?

A **Field-Programmable Gate Array (FPGA)** is an integrated circuit that can be programmed by a customer or designer after manufacturing. This means that the functionality of the circuit is determined by the configuration data loaded onto the FPGA. FPGAs contain an array of programmable logic blocks and a hierarchy of reconfigurable interconnects that allow the blocks to be wired together to implement complex digital circuits.

**Key Components of an FPGA:**

*   **Configurable Logic Blocks (CLBs):** These are the fundamental building blocks of an FPGA. Each CLB typically contains Look-Up Tables (LUTs), flip-flops, and multiplexers.
*   **Input/Output Blocks (IOBs):** These blocks interface the internal logic of the FPGA with the external world through the device pins.
*   **Programmable Interconnects:** A network of routing channels and switches that connect the CLBs and IOBs according to the programmed design.
*   **Clock Management Circuits:** Specialized circuits for generating and distributing clock signals.

### 2.2. Hardware Description Languages (HDLs) for FPGA Design

HDLs are specialized programming languages used to describe the hardware of digital circuits. They allow designers to define the structure, behavior, and connectivity of logic circuits in a text-based format, which can then be synthesized into a netlist of logic gates and routed onto an FPGA.

**Popular HDLs:**

*   **Verilog HDL:** Widely used and similar to the C programming language.
*   **VHDL (VHSIC Hardware Description Language):** More verbose but offers strong typing and a structured approach.

**(Refer to Palnitkar S., "Verilog HDL: A Guide to Digital Design and Synthesis" and Bhasker J., "Verilog HDL Synthesis: A Practical Primer" for comprehensive details on Verilog syntax, semantics, and synthesis.)**

### 2.3. Verilog HDL for Multiplexer Implementation

We will focus on Verilog HDL for implementing the multiplexer. There are several ways to describe a multiplexer in Verilog:

#### 2.3.1. Behavioral Modeling (using `if-else` or `case` statements)

This is the most intuitive way to describe the functionality of a multiplexer.

**Example: 2-to-1 Multiplexer in Verilog (Behavioral)**

```verilog
module mux_2_to_1_behavioral (
    input  wire i0,
    input  wire i1,
    input  wire s,
    output wire y
);

    always @(i0, i1, s) begin
        if (s == 0) begin
            y = i0;
        end else begin
            y = i1;
        end
    end

endmodule
```

**Explanation:**

*   `module mux_2_to_1_behavioral (...)`: Declares a module named `mux_2_to_1_behavioral` with its input and output ports.
*   `input wire i0, i1, s`: Declares `i0`, `i1`, and `s` as input signals of type `wire`.
*   `output wire y`: Declares `y` as an output signal of type `wire`.
*   `always @(i0, i1, s) begin ... end`: This is a procedural block that executes whenever any of the signals listed in the sensitivity list (`i0`, `i1`, `s`) change.
*   `if (s == 0) begin y = i0; end else begin y = i1; end`: This is the core logic. If `s` is 0, `y` takes the value of `i0`; otherwise, `y` takes the value of `i1`.

**Example: 4-to-1 Multiplexer in Verilog (using `case` statement)**

```verilog
module mux_4_to_1_behavioral (
    input  wire [3:0] i, // Concatenated inputs i0, i1, i2, i3
    input  wire [1:0] s, // Select lines s1, s0
    output wire y
);

    assign y = (s == 2'b00) ? i[0] :
               (s == 2'b01) ? i[1] :
               (s == 2'b10) ? i[2] :
               i[3];

endmodule
```

**Alternative using `case`:**

```verilog
module mux_4_to_1_case (
    input  wire [3:0] i,
    input  wire [1:0] s,
    output wire y
);

    always @(i, s) begin
        case (s)
            2'b00: y = i[0];
            2'b01: y = i[1];
            2'b10: y = i[2];
            2'b11: y = i[3];
            default: y = 1'bx; // Handle undefined select inputs
        endcase
    end

endmodule
```

#### 2.3.2. Dataflow Modeling (using `assign` statement)

This is a more concise way to describe combinational logic, especially for simple assignments.

**Example: 2-to-1 Multiplexer in Verilog (Dataflow)**

```verilog
module mux_2_to_1_dataflow (
    input  wire i0,
    input  wire i1,
    input  wire s,
    output wire y
);

    assign y = (~s & i0) | (s & i1); // Using Boolean operators

endmodule
```

**Explanation:**

*   `assign y = (~s & i0) | (s & i1);`: This single line describes the Boolean expression of the 2-to-1 multiplexer. `~` is NOT, `&` is AND, and `|` is OR.

#### 2.3.3. Structural Modeling (using gate primitives)

This method describes the circuit by instantiating lower-level components (like AND, OR, NOT gates).

**Example: 2-to-1 Multiplexer in Verilog (Structural)**

```verilog
module mux_2_to_1_structural (
    input  wire i0,
    input  wire i1,
    input  wire s,
    output wire y
);

    wire nS;      // Not of s
    wire term1;   // s & i0
    wire term2;   // ~s & i1

    not g1 (nS, s);       // Inverter for s
    and g2 (term1, nS, i0); // AND gate for ~s & i0
    and g3 (term2, s, i1);  // AND gate for s & i1
    or  g4 (y, term1, term2); // OR gate to combine terms

endmodule
```

**Explanation:**

*   `wire nS, term1, term2;`: Declares intermediate wires to connect the gates.
*   `not g1 (nS, s);`: Instantiates a NOT gate named `g1`. `nS` is the output, `s` is the input.
*   `and g2 (term1, nS, i0);`: Instantiates an AND gate named `g2`. `term1` is the output, `nS` and `i0` are the inputs.
*   Similarly for other gates.

**(Note: For FPGA implementation, behavioral or dataflow modeling is generally preferred as the synthesis tool can optimize the logic more effectively. Structural modeling is useful for understanding low-level implementation but can be verbose for complex designs.)**

### 2.4. FPGA Synthesis and Implementation Flow

The process of converting an HDL design into a configuration bitstream for an FPGA involves several steps:

1.  **Design Entry:** Writing the HDL code (e.g., Verilog or VHDL).
2.  **Simulation:** Verifying the functional correctness of the design using a simulator. A **testbench** is created to provide input stimuli and check the output responses.
3.  **Synthesis:** Translating the HDL code into a gate-level netlist using synthesis tools (e.g., Vivado Synthesis, Synopsys Design Compiler). The synthesizer maps the HDL constructs to the available primitives in the FPGA's architecture. **This is where the chosen HDL description is transformed into hardware logic.**
4.  **Implementation (Place and Route):**
    *   **Place:** Assigning the synthesized logic elements (LUTs, flip-flops) to specific physical resources (CLBs) on the FPGA.
    *   **Route:** Connecting these placed elements using the FPGA's routing channels and switches.
5.  **Bitstream Generation:** Creating a binary file (bitstream) that configures the FPGA's internal switches and LUTs to implement the designed circuit.
6.  **Configuration/Programming:** Loading the bitstream onto the FPGA board.

**(Refer to Bhasker J., "Verilog HDL Synthesis: A Practical Primer" for insights into how synthesis tools interpret HDL constructs and create optimized hardware.)**

---

## **3. Experiment Procedure and Objectives**

### 3.1. Experiment Objectives

*   **Design and simulate a 2-to-1 or 4-to-1 multiplexer using Verilog HDL.** (CO2, K3)
*   **Synthesize the Verilog design and implement it on an FPGA development board.** (CO3, K3)
*   **Verify the functionality of the implemented multiplexer on the FPGA by providing inputs and observing the output using onboard LEDs, switches, or a logic analyzer.** (CO1, K3)
*   **Understand the mapping of HDL code to FPGA hardware.** (CO3, K3)
*   **Work effectively as an individual or in a team to complete the implementation and verification.** (CO4, K2)

### 3.2. Recommended Tools and Hardware

*   **FPGA Development Board:** (e.g., Xilinx Artix-7, Basys 3, Altera DE1) with onboard switches (for inputs), LEDs (for outputs), and buttons.
*   **FPGA Design Software:** (e.g., Xilinx Vivado, Intel Quartus Prime) which includes HDL simulator, synthesizer, and place-and-route tools.
*   **Text Editor:** For writing HDL code.

### 3.3. General Steps for Implementation

1.  **Design the Multiplexer:** Choose the type of multiplexer (2-to-1 or 4-to-1) and write its Verilog HDL code (behavioral or dataflow is recommended).
2.  **Create a Testbench:** Write a Verilog testbench to simulate the multiplexer. Provide various input combinations for data and select lines and check the output.
3.  **Simulate the Design:** Run the simulation to confirm the multiplexer behaves as expected.
4.  **Create a Top-Level Module for FPGA:** Write a top-level Verilog module that instantiates the multiplexer and connects its inputs and outputs to the FPGA's physical pins (defined in a constraints file).
5.  **Assign Constraints (XDC file for Xilinx, .qsf for Intel):** Create a constraints file that maps the HDL port names to physical pins on the FPGA development board. This file specifies which switch connects to which input, and which LED connects to the output.
    *   **Example Constraint (XDC format for Xilinx):**
        ```xdc
        # Define input pins
        set_property PACKAGE_PIN H17 [get_ports i0]
        set_property PACKAGE_PIN G17 [get_ports i1]
        set_property PACKAGE_PIN G18 [get_ports s]

        # Define output pin
        set_property PACKAGE_PIN H18 [get_ports y]

        # Assign I/O standards (example: LVCMOS33)
        set_property IOSTANDARD LVCMOS33 [get_ports i0]
        set_property IOSTANDARD LVCMOS33 [get_ports i1]
        set_property IOSTANDARD LVCMOS33 [get_ports s]
        set_property IOSTANDARD LVCMOS33 [get_ports y]
        ```
6.  **Synthesize and Implement:** Use the FPGA software to synthesize the design, perform place and route, and generate the bitstream.
7.  **Program the FPGA:** Connect the FPGA board to your computer and use the software to upload the generated bitstream.
8.  **Test on Hardware:** Manipulate the input switches on the FPGA board and observe the corresponding output on the LEDs to verify the multiplexer's functionality.

---

## **4. Practice Questions and Exercises**

**Instructions:** Attempt these questions to solidify your understanding of multiplexers and FPGA implementation.

1.  **Question 1 (Conceptual):**
    What is the primary function of a multiplexer? How many select lines are required for a 16-to-1 multiplexer?
    **Answer:** The primary function of a multiplexer is to select one of several input signals and route it to a single output line, controlled by select lines. For a 16-to-1 multiplexer, since $2^n = 16$, we need $n=4$ select lines.

2.  **Question 2 (Verilog - Behavioral):**
    Write a Verilog HDL behavioral model for a 2-to-1 multiplexer that also includes an enable input (`en`). When `en` is '0', the output `y` should be '0', regardless of the inputs.
    **Answer:**
    ```verilog
    module mux_2_to_1_en (
        input  wire i0,
        input  wire i1,
        input  wire s,
        input  wire en,
        output wire y
    );

        always @(i0, i1, s, en) begin
            if (en == 0) begin
                y = 1'b0;
            end else begin
                if (s == 0) begin
                    y = i0;
                end else begin
                    y = i1;
                end
            end
        end

    endmodule
    ```

3.  **Question 3 (Verilog - Dataflow):**
    Write a Verilog HDL dataflow model for a 4-to-1 multiplexer using the conditional operator (`?:`).
    **Answer:**
    ```verilog
    module mux_4_to_1_conditional (
        input  wire [3:0] i, // i[0] is I0, i[1] is I1, etc.
        input  wire [1:0] s, // s[1] is S1, s[0] is S0
        output wire y
    );

        assign y = (s[1] == 0) ? ((s[0] == 0) ? i[0] : i[1]) :
                   ((s[0] == 0) ? i[2] : i[3]);

    endmodule
    ```

4.  **Question 4 (FPGA Implementation):**
    When implementing an HDL design on an FPGA, what is the purpose of a constraints file (e.g., XDC)?
    **Answer:** The purpose of a constraints file is to map the abstract input/output ports defined in the HDL code to the specific physical pins of the FPGA. It also defines I/O standards, clock frequencies, and other physical properties necessary for the synthesis and implementation tools to correctly place and route the design onto the target FPGA device.

5.  **Question 5 (Synthesis):**
    Which HDL modeling style (behavioral, dataflow, or structural) is generally preferred for synthesizing complex digital circuits on FPGAs, and why?
    **Answer:** Behavioral and dataflow modeling styles are generally preferred for synthesizing complex digital circuits on FPGAs. This is because they allow the synthesis tool to make optimization decisions based on the target FPGA architecture. The tool can infer the most efficient implementation using LUTs, flip-flops, and other resources. Structural modeling, while explicit, can be less flexible for optimization and more verbose.

---

## **5. Important Points to Remember**

*   **MUX Basics:** Understand the relationship between the number of select lines and data inputs ($2^n$ inputs for $n$ select lines).
*   **Verilog Modeling:** Choose the appropriate Verilog modeling style (behavioral, dataflow, structural) based on the complexity of the logic and the desired level of abstraction. Behavioral and dataflow are generally preferred for FPGA implementation due to synthesis flexibility.
*   **Simulation is Crucial:** Always simulate your design with a testbench to verify its functional correctness *before* attempting FPGA implementation.
*   **Constraints are Key:** The constraints file is essential for mapping your HDL design to the physical pins of the FPGA board. Errors in constraints will lead to incorrect hardware behavior.
*   **Synthesis Tool Role:** The synthesis tool translates your HDL code into hardware. Understanding what the tool is doing can help in debugging and optimization.
*   **Place and Route:** These steps physically map and connect your logic on the FPGA. Timing closure (meeting performance requirements) is a critical aspect of this stage in more advanced designs.
*   **FPGA Capabilities:** FPGAs are versatile platforms for implementing custom digital logic, allowing for rapid prototyping and testing of designs.

---

This module provides a practical introduction to multiplexers and their implementation on FPGAs. By following the steps and understanding the concepts, you will gain valuable experience in modern digital design workflows.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
