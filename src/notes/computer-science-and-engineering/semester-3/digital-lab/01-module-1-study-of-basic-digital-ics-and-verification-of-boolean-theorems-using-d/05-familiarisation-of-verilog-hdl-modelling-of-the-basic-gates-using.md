---
title: "Familiarisation of Verilog HDL - Modelling of the basic gates using"
subject: "DIGITAL LAB"
module: "Module 1: Study of basic digital ICs and verification of Boolean theorems using digital logic gates."
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8aecd"
status: "completed"
scrapedAt: "2026-05-20T16:24:11.051Z"
---
## DIGITAL LAB: Module 1 - Verilog HDL Familiarization and Basic Gate Modeling

**Topic:** Familiarisation of Verilog HDL - Modelling of the basic gates

**Module:** Study of basic digital ICs and verification of Boolean theorems using digital logic gates.

**Learning Outcomes:**

*   Understand the fundamental concepts of Hardware Description Languages (HDLs) and their role in digital design.
*   Learn the basic syntax and structure of Verilog HDL.
*   Model basic logic gates (AND, OR, NOT, NAND, NOR, XOR, XNOR) using Verilog HDL.
*   Verify the functionality of modeled gates through simulation.
*   Understand different levels of abstraction in Verilog (Gate-Level).

---

### 1. Introduction to Hardware Description Languages (HDLs)

*   **What is an HDL?**  A Hardware Description Language (HDL) is a specialized computer language used to describe the structure and behavior of digital electronic systems, typically used in the design and simulation of digital circuits.

*   **Why use HDLs?**
    *   **Abstraction:**  Design complex systems at higher levels of abstraction, making it easier to manage complexity.
    *   **Simulation:** Verify the functionality and timing of a design before implementation (physical fabrication).  This helps catch errors early and reduces costly rework.
    *   **Synthesis:**  Automatically translate the HDL description into a gate-level netlist (a list of logic gates and their interconnections), which can then be implemented on FPGAs or ASICs.
    *   **Documentation:**  HDLs serve as a precise and unambiguous documentation of the digital circuit's functionality.
    *   **Reusability:**  HDL code can be reused in different projects.

*   **Types of HDLs:**  VHDL and Verilog are the two most widely used HDLs. SystemVerilog is an extension of Verilog, offering enhanced features for verification and more complex designs.

---

### 2. Introduction to Verilog HDL

*   **What is Verilog?** Verilog is a widely used hardware description language for modeling digital systems. It is a text-based language that describes the structure and behavior of digital circuits.

*   **Basic Structure of a Verilog Module:**

    ```verilog
    module module_name (port_list);
      // Port declarations (input, output, inout)
      // Internal signal declarations (wire, reg)
      // Behavioral or structural descriptions (assign, always, gate instantiations)
    endmodule
    ```

    *   `module`: Keyword that defines a module, which is the basic building block of a Verilog design.
    *   `module_name`:  User-defined name for the module.  Must start with a letter.
    *   `port_list`: List of input, output, and bidirectional (inout) signals connecting the module to the outside world.
    *   `endmodule`: Keyword indicating the end of the module definition.

*   **Key Verilog Keywords and Syntax:**

    *   `module`, `endmodule`: Define a module.
    *   `input`, `output`, `inout`: Declare port directions.
    *   `wire`:  Represents a physical connection (like a wire) and cannot store values. Used for connecting different components.
    *   `reg`: Represents a storage element (like a flip-flop) and can hold a value.  Must be assigned within an `always` block.
    *   `assign`:  Used for continuous assignment (combinational logic).  The output is updated whenever the input changes.
    *   `always`:  Used to describe sequential logic or more complex combinational logic.
    *   `begin`, `end`:  Used to group multiple statements within an `always` block.
    *   `//`: Single-line comment.
    *   `/* ... */`: Multi-line comment.
    *   **Operators:** `&` (AND), `|` (OR), `~` (NOT), `^` (XOR), `~&` (NAND), `~|` (NOR), `~^` or `^~` (XNOR)
    *   **Signal Assignment:**  `=`:  Blocking assignment (used in sequential logic, executed in order).  `<=`: Non-blocking assignment (used in sequential logic, all assignments happen concurrently).  For combinational logic use `assign` statement.

*   **Data Types:**

    *   `wire`: Represents a connection.  Its value is continuously driven by the output of a gate or another assignment.
    *   `reg`:  Represents a register, which can hold a value. Used for storing values in sequential logic.
    *   `integer`: Used for general-purpose counting and arithmetic.
    *   `real`: Used for floating-point arithmetic (less common in digital design).

*   **Number Representation:**

    *   Decimal: `10`
    *   Binary: `4'b1010` (4 bits, binary value 1010)
    *   Hexadecimal: `8'hAF` (8 bits, hexadecimal value AF)

---

### 3. Modelling Basic Logic Gates in Verilog HDL (Gate-Level Modeling)

*   **Gate-Level Modeling:**  Describes a circuit using primitive gates (AND, OR, NOT, etc.) and their interconnections.

*   **AND Gate:**

    ```verilog
    module and_gate (input a, input b, output out);
      and g1 (out, a, b); // g1 is the instance name, out is the output, a and b are inputs
    endmodule
    ```

*   **OR Gate:**

    ```verilog
    module or_gate (input a, input b, output out);
      or g1 (out, a, b);
    endmodule
    ```

*   **NOT Gate (Inverter):**

    ```verilog
    module not_gate (input in, output out);
      not g1 (out, in);
    endmodule
    ```

*   **NAND Gate:**

    ```verilog
    module nand_gate (input a, input b, output out);
      nand g1 (out, a, b);
    endmodule
    ```

*   **NOR Gate:**

    ```verilog
    module nor_gate (input a, input b, output out);
      nor g1 (out, a, b);
    endmodule
    ```

*   **XOR Gate:**

    ```verilog
    module xor_gate (input a, input b, output out);
      xor g1 (out, a, b);
    endmodule
    ```

*   **XNOR Gate:**

    ```verilog
    module xnor_gate (input a, input b, output out);
      xnor g1 (out, a, b);
    endmodule
    ```

*   **Example: Half Adder using Gate-Level Modeling:**

    ```verilog
    module half_adder (input a, input b, output sum, output carry);
      xor g1 (sum, a, b);
      and g2 (carry, a, b);
    endmodule
    ```

---

### 4. Verification of Gate Functionality through Simulation

*   **Testbench:**  A separate Verilog module used to stimulate the circuit under test (the gate in this case) and verify its behavior.  It provides inputs and checks the outputs against expected values.

*   **Stimulus:**  The input values applied to the circuit under test.  This is typically done using an `always` block with delays to generate different input combinations.

*   **Observation:**  Monitoring the output values of the circuit under test. This can be done by displaying the output values in the simulation waveform or by using assertions to check for correct behavior.

*   **Example: Testbench for an AND Gate:**

    ```verilog
    module and_gate_tb;
      reg a, b;       // Declare inputs as registers
      wire out;      // Declare output as a wire

      and_gate dut ( .a(a), .b(b), .out(out) ); // Instantiate the AND gate module (DUT: Device Under Test)

      initial begin
        // Initialize inputs
        a = 0; b = 0;
        #10 a = 0; b = 1; // Apply input combination after 10 time units
        #10 a = 1; b = 0;
        #10 a = 1; b = 1;
        #10 $finish;   // End simulation after 40 time units
      end

      initial begin
        $monitor("a=%b, b=%b, out=%b", a, b, out); // Display the input and output values
      end

    endmodule
    ```

    *   `and_gate dut (.a(a), .b(b), .out(out));`: Instantiates the `and_gate` module. `dut` is the instance name. `.a(a)` connects the port `a` of the `and_gate` module to the signal `a` in the testbench.  This is called port mapping.
    *   `$monitor`:  A system task that displays the values of specified signals whenever they change.
    *   `$finish`: A system task that ends the simulation.

*   **Simulation Tools:**  Popular Verilog simulators include:
    *   ModelSim (Mentor Graphics)
    *   Xilinx Vivado Simulator
    *   Altera ModelSim-Altera Edition (now Intel Quartus Prime)
    *   Icarus Verilog (open-source)

---

### 5. Levels of Abstraction in Verilog

*   **Gate-Level Modeling:** (Covered above)  Describes the circuit using primitive gates.
*   **Dataflow Modeling:**  Describes the circuit using continuous assignments (`assign` statements). Focuses on how data flows through the circuit.  Good for describing combinational logic.
    *   Example (AND gate): `assign out = a & b;`
*   **Behavioral Modeling:**  Describes the circuit using high-level constructs like `always` blocks, `if` statements, and loops.  Focuses on *what* the circuit does, rather than *how* it does it.  Suitable for both combinational and sequential logic.

* **Module Instantiation:**  Allows you to use already defined modules as building blocks within another module.

---

### Practice Questions and Exercises:

1.  **Write Verilog code for a 2-input NAND gate using Gate-Level modeling.**

    ```verilog
    module nand2 (input a, input b, output out);
      nand g1 (out, a, b);
    endmodule
    ```

2.  **Write Verilog code for a 2-to-1 Multiplexer using Gate-Level modeling.** (Inputs: `a`, `b`, `sel`; Output: `out`)

    ```verilog
    module mux2to1 (input a, input b, input sel, output out);
      wire s_bar; // not sel
      wire w1, w2; // intermediate wires

      not  (s_bar, sel);
      and  (w1, a, s_bar);
      and  (w2, b, sel);
      or   (out, w1, w2);
    endmodule
    ```

3.  **Write a testbench to verify the functionality of the 2-to-1 Multiplexer created in the previous question.**

    ```verilog
    module mux2to1_tb;
      reg a, b, sel;
      wire out;

      mux2to1 dut (.a(a), .b(b), .sel(sel), .out(out));

      initial begin
        // Initialize inputs
        a = 0; b = 0; sel = 0;
        #10 a = 0; b = 0; sel = 1;
        #10 a = 0; b = 1; sel = 0;
        #10 a = 0; b = 1; sel = 1;
        #10 a = 1; b = 0; sel = 0;
        #10 a = 1; b = 0; sel = 1;
        #10 a = 1; b = 1; sel = 0;
        #10 a = 1; b = 1; sel = 1;
        #10 $finish;
      end

      initial begin
        $monitor("a=%b, b=%b, sel=%b, out=%b", a, b, sel, out);
      end

    endmodule
    ```

4.  **Explain the difference between `wire` and `reg` data types in Verilog.**

    *   `wire`: Represents a physical connection. Cannot store values. Its value is continuously driven by the output of a gate or assignment.
    *   `reg`: Represents a register, which can hold a value.  Must be assigned within an `always` block.

5.  **What is the purpose of a testbench in Verilog?**

    A testbench is a separate Verilog module used to stimulate the circuit under test and verify its behavior. It provides inputs and checks the outputs against expected values.

---

### Important Points to Remember:

*   Verilog is case-sensitive.
*   Always declare the direction (input, output, inout) and data type (wire, reg) of signals.
*   Use comments to make your code more readable.
*   Simulation is crucial for verifying the functionality of your design before implementation.
*   Choose the appropriate level of abstraction based on the complexity of the circuit and the design goals.  Gate level is very close to hardware, allowing fine control but can be verbose.
*   Pay attention to timing when creating testbenches; use delays (`#`) to allow signals to propagate through the circuit.
