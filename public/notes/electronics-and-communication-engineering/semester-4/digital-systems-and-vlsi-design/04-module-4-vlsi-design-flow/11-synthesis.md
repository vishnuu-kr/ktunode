---
title: "Synthesis"
subject: "DIGITAL SYSTEMS AND VLSI DESIGN"
module: "Module 4: VLSI Design flow"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe76f"
status: "completed"
scrapedAt: "2026-05-23T17:48:27.813Z"
---
# Module 4: VLSI Design Flow - Synthesis

## Introduction to Synthesis

**Definition:** Synthesis is the process of converting a high-level behavioral description of a digital circuit (e.g., written in a Hardware Description Language like VHDL or Verilog) into a netlist of primitive logic gates and their interconnections. It is a crucial step in the VLSI design flow, bridging the gap between abstract design intent and physical implementation.

**Purpose of Synthesis:**

*   **Automation:** Automates the tedious and error-prone process of manually translating a design into a gate-level representation.
*   **Optimization:** Aims to optimize the circuit for various objectives such as:
    *   **Area:** Minimizing the number of gates and flip-flops used.
    *   **Speed (Timing):** Maximizing the clock frequency by minimizing critical path delays.
    *   **Power Consumption:** Reducing the power dissipated by the circuit.
*   **Technology Mapping:** Maps the optimized logic onto the specific technology library available (e.g., a specific ASIC library or FPGA primitive elements).

**Relation to VLSI Design Flow:**

Synthesis is typically performed after the design entry (writing HDL code) and before place and route.

```
Design Entry (HDL) --> Synthesis --> Place & Route --> Verification --> Fabrication
```

**Key Concepts:**

*   **Design Entry:** The process of describing the digital circuit's functionality, typically using HDL.
*   **HDL (Hardware Description Language):** Languages like VHDL and Verilog used to describe digital hardware at different abstraction levels.
*   **Behavioral Description:** Describes the circuit's functionality without specifying its structural implementation.
*   **RTL (Register Transfer Level):** A description that focuses on the flow of data between registers and the combinational logic that transforms this data.
*   **Gate-Level Netlist:** A description of the circuit in terms of primitive logic gates (AND, OR, NOT, Flip-flops, etc.) and their connections.
*   **Technology Library:** A collection of pre-designed and characterized standard cells (gates, flip-flops) for a specific fabrication process or FPGA architecture.

---

## Synthesis Process Explained

The synthesis process can be broadly divided into the following stages:

### 1. Logic Synthesis (High-Level Synthesis to RTL)

*   **Input:** Behavioral or RTL description in HDL.
*   **Process:**
    *   **Parsing and Semantic Analysis:** The HDL code is checked for syntax and semantic errors.
    *   **Intermediate Representation (IR):** The HDL code is converted into an internal representation that the synthesis tool can manipulate. This IR often represents the design as an abstract syntax tree or a dataflow graph.
    *   **Optimization:** The IR is optimized to improve performance, area, or power. This involves:
        *   **Boolean Simplification:** Applying Boolean algebra rules to simplify logical expressions.
        *   **Common Subexpression Elimination:** Identifying and removing redundant logic.
        *   **Factoring:** Restructuring logic to share gates.
        *   **Constant Propagation:** Replacing logic with constant values where possible.
    *   **Scheduling (for behavioral descriptions):** If starting from a behavioral description, operations are scheduled into clock cycles, considering dependencies.
    *   **Resource Allocation:** Assigning operations to specific hardware resources (e.g., adders, multipliers).
    *   **Binding:** Connecting the allocated resources to implement the scheduled operations.

*   **Output:** Optimized RTL representation.

### 2. Technology Mapping

*   **Input:** Optimized RTL logic.
*   **Process:**
    *   **Decomposition:** Complex combinational logic is broken down into simpler combinational blocks.
    *   **Pattern Matching:** The synthesis tool searches for patterns in the optimized logic that match the primitive gates available in the target technology library.
    *   **Gate Substitution:** The matched logic is replaced with the corresponding gates and flip-flops from the technology library.
    *   **Optimization (Post-Mapping):** Further optimizations are performed to improve the mapped netlist, such as:
        *   **Gate Optimization:** Replacing sub-optimal gate implementations with better ones from the library.
        *   **Buffer Insertion:** Adding buffers to drive long nets or meet timing requirements.
        *   **Inverter Balancing:** Ensuring balanced path delays.

*   **Output:** Gate-level netlist.

### 3. Optimization Goals and Constraints

Synthesis tools allow designers to specify constraints to guide the optimization process.

*   **Timing Constraints:**
    *   **Clock Frequency:** The desired operating frequency of the circuit.
    *   **Input/Output Delays:** Specifies the time by which inputs must be stable and when outputs must be valid.
    *   **Setup Time:** The minimum time data must be held stable before the clock edge.
    *   **Hold Time:** The minimum time data must be held stable after the clock edge.
*   **Area Constraints:** Maximum allowable area for the design.
*   **Power Constraints:** Maximum allowable power consumption.

**Example (VHDL - Behavioral to RTL):**

```vhdl
-- Behavioral Description
entity Adder is
    port (
        a, b : in  std_logic_vector(7 downto 0);
        sum  : out std_logic_vector(7 downto 0);
        cout : out std_logic
    );
end entity Adder;

architecture Behavioral of Adder is
begin
    process (a, b)
    begin
        -- Behavioral description of an 8-bit adder
        sum <= std_logic_vector(unsigned('0' & a) + unsigned('0' & b));
        -- Note: A real adder would likely use a separate carry logic for cout
        -- For simplicity, we are showing a direct addition here.
        -- For proper cout, a dedicated carry logic is needed.
    end process;
end architecture Behavioral;
```

**Synthesis Tool Interpretation:** The synthesis tool would interpret the `+` operation as requiring an adder circuit. It might infer an 8-bit adder and a carry-out logic.

**Example (VHDL - RTL to Gate-Level Netlist - Conceptual):**

After synthesis, the above might be transformed into a netlist like:

```vhdl
-- Conceptual Gate-Level Netlist (not actual VHDL)
-- Assuming standard library cells are mapped

-- Internal signals
signal s_a, s_b : std_logic_vector(7 downto 0);
signal s_sum_temp : std_logic_vector(7 downto 0);
signal s_carry_temp : std_logic;

-- Map inputs
s_a <= a;
s_b <= b;

-- Instantiate an 8-bit adder (e.g., from a library)
-- Let's assume 'my_adder_8bit' is a component that performs addition
adder_instance : entity work.my_adder_8bit
    port map (
        in1    => s_a,
        in2    => s_b,
        sum    => s_sum_temp,
        carry  => s_carry_temp
    );

-- Connect outputs
sum <= s_sum_temp;
-- cout <= s_carry_temp; -- Assuming carry_out is the output of the adder component
```

**Reference from Textbooks:**

*   **Mano & Ciletti (6th Ed.):** Chapter 9, "Combinational Circuits Synthesis," covers the fundamental principles of converting Boolean expressions to gate-level implementations. Chapter 10, "Sequential Circuits Synthesis," discusses state minimization, state assignment, and the synthesis of sequential circuits.
*   **Wakerly (4th Ed.):** Chapter 12, "Introduction to Computer-Aided Design," provides an overview of the CAD tools used in digital design, including synthesis.

---

## HDL Modeling Styles for Synthesis

The way a circuit is described in HDL significantly impacts the synthesized output. Synthesis tools are generally good at synthesizing well-structured RTL code.

### 1. Behavioral Modeling

*   **Description:** Focuses on the algorithm or behavior of the circuit. Often uses `process` statements and procedural constructs.
*   **Synthesis Suitability:** Can be synthesized, but requires careful coding to ensure predictable hardware. Synthesis tools infer hardware from the operations and control flow.
*   **Caution:** Avoid constructs that are difficult to map to hardware (e.g., infinite loops, delays without clocks, time-based operations).
*   **Example (from above):** The `Adder` entity using `unsigned` addition.

### 2. Dataflow Modeling

*   **Description:** Describes the flow of data through the circuit, typically using concurrent signal assignments.
*   **Synthesis Suitability:** Excellent for synthesizing combinational logic. Directly maps to interconnected logic gates.
*   **Example:**

```vhdl
-- Dataflow Description of a 2-to-1 Multiplexer
entity Mux2to1 is
    port (
        i0, i1, sel : in  std_logic;
        out_mux     : out std_logic
    );
end entity Mux2to1;

architecture Dataflow of Mux2to1 is
begin
    -- Concurrent signal assignment
    out_mux <= i0 when sel = '0' else i1;
end architecture Dataflow;
```

*   **Synthesis Interpretation:** The synthesis tool infers a multiplexer using basic gates (AND, OR, NOT) or a dedicated multiplexer cell from the library.

### 3. Structural Modeling

*   **Description:** Describes the circuit as an interconnection of predefined components (e.g., gates, flip-flops, previously defined entities).
*   **Synthesis Suitability:** Used for instantiating pre-designed blocks or for defining the structure of a circuit from basic building blocks.
*   **Example (Structural Multiplexer):**

```vhdl
-- Define basic gates as components
component AND2 is
    port (A, B : in std_logic; Y : out std_logic);
end component;

component NOT1 is
    port (A : in std_logic; Y : out std_logic);
end component;

component OR2 is
    port (A, B : in std_logic; Y : out std_logic);
end component;

-- Entity Declaration
entity Mux2to1_Structural is
    port (
        i0, i1, sel : in  std_logic;
        out_mux     : out std_logic
    );
end entity Mux2to1_Structural;

architecture Structural of Mux2to1_Structural is
    -- Internal signals to connect components
    signal sel_n, i0_and_sel, i1_and_sel_n : std_logic;
begin
    -- Instantiate components
    not_inst : NOT1 port map (A => sel, Y => sel_n);
    and0_inst : AND2 port map (A => i0, B => sel_n, Y => i0_and_sel);
    and1_inst : AND2 port map (A => i1, B => sel, Y => i1_and_sel_n);
    or_inst : OR2 port map (A => i0_and_sel, B => i1_and_sel_n, Y => out_mux);
end architecture Structural;
```

*   **Synthesis Interpretation:** The synthesis tool directly maps these component instantiations to gates from the target library. This is less common for complex designs as it becomes verbose.

**Important Point to Remember:** For synthesis, RTL descriptions (behavioral and dataflow that are well-structured) are generally preferred. Structural descriptions are useful for defining hierarchies or using specific pre-designed IP cores.

---

## Synthesis of Combinational Circuits

Synthesis aims to convert HDL descriptions of combinational logic into optimized gate-level netlists.

**Key Operations:**

1.  **Boolean Expression Simplification:**
    *   **Karnaugh Maps (K-maps):** A graphical method for simplifying Boolean expressions for small numbers of variables.
    *   **Quine-McCluskey Algorithm:** A tabular method for simplifying Boolean expressions.
    *   **Automated Tools:** Synthesis tools employ sophisticated algorithms to perform complex Boolean simplifications.

2.  **Logic Gate Implementation:**
    *   The simplified Boolean expressions are then implemented using basic logic gates (AND, OR, NOT, XOR, NAND, NOR).
    *   **Technology Mapping:** The goal is to map these expressions to the available gate primitives in the target technology library efficiently.

**Example (Synthesis of a 2-bit Adder using Dataflow):**

```vhdl
-- Entity for a 2-bit adder
entity Adder2Bit is
    port (
        a   : in  std_logic_vector(1 downto 0);
        b   : in  std_logic_vector(1 downto 0);
        cin : in  std_logic;
        sum : out std_logic_vector(1 downto 0);
        cout: out std_logic
    );
end entity Adder2Bit;

architecture Dataflow of Adder2Bit is
    -- Internal signals for carries
    signal c0, c1 : std_logic;
begin
    -- Bit 0:
    -- sum(0) = a(0) XOR b(0) XOR cin
    -- c0     = (a(0) AND b(0)) OR (cin AND (a(0) XOR b(0)))
    sum(0) <= a(0) xor b(0) xor cin;
    c0 <= (a(0) and b(0)) or (cin and (a(0) xor b(0)));

    -- Bit 1:
    -- sum(1) = a(1) XOR b(1) XOR c0
    -- cout   = (a(1) AND b(1)) OR (c0 AND (a(1) XOR b(1)))
    sum(1) <= a(1) xor b(1) xor c0;
    cout <= (a(1) and b(1)) or (c0 and (a(1) xor b(1)));
end architecture Dataflow;
```

**Synthesis Tool Output (Conceptual Netlist):**

The synthesis tool would analyze these concurrent signal assignments and infer the necessary XOR, AND, and OR gates (or potentially more optimized carry-lookahead logic if the library supports it) to implement the adder.

**Addressing Hazards:**

*   **Static Hazards:** While synthesis tools aim to produce hazard-free logic where possible, understanding how to write HDL that avoids introducing hazards is important. For example, avoiding redundant terms in Boolean expressions can help.
*   **Dynamic Hazards:** These are more related to the physical implementation and propagation delays of gates. Synthesis tools try to mitigate these through buffering and timing optimization.

**Reference from Textbooks:**

*   **Givone (2017):** Chapter 5, "Combinational Logic Circuits," details the minimization techniques and implementation of combinational circuits, which are the basis for synthesis.
*   **Yarbrough (2006):** Chapter 5, "Combinational Logic Design," provides a solid foundation in combinational logic, essential for understanding synthesis outputs.

---

## Synthesis of Sequential Circuits

Synthesis of sequential circuits involves converting HDL descriptions of state machines and flip-flop based circuits into gate-level netlists.

**Key Aspects:**

1.  **State Machine Synthesis:**
    *   **State Encoding:** Choosing a binary representation for each state. Different encodings (e.g., binary, Gray, one-hot) can impact area, speed, and testability. Synthesis tools often offer options for state encoding.
    *   **State Minimization:** Reducing the number of states in a finite state machine by identifying equivalent states. This is typically done before HDL synthesis.
    *   **Next State Logic:** Combinational logic that determines the next state based on the current state and inputs.
    *   **Output Logic:** Combinational logic that determines the output based on the current state (Moore machine) or current state and inputs (Mealy machine).

2.  **Flip-flop Instantiation:**
    *   Synthesis tools map sequential logic (e.g., registered outputs, flip-flops inferred from clocked `process` statements) to the appropriate flip-flop cells available in the target library (e.g., D flip-flops, JK flip-flops).

3.  **Clock and Reset Handling:**
    *   Synthesis tools properly infer clocked logic and handle synchronous reset or set signals.

**Example (Synthesis of a Simple Sequential Circuit - VHDL):**

```vhdl
-- Entity for a simple counter
entity Counter is
    port (
        clk   : in  std_logic;
        reset : in  std_logic;
        q     : out std_logic_vector(2 downto 0) -- 3-bit counter
    );
end entity Counter;

architecture Behavioral of Counter is
    signal count_reg : std_logic_vector(2 downto 0);
begin
    process (clk, reset)
    begin
        if reset = '1' then
            count_reg <= "000"; -- Reset to 0
        elsif rising_edge(clk) then
            -- Increment the counter
            count_reg <= count_reg + 1;
        end if;
    end process;

    -- Assign the registered value to the output
    q <= count_reg;
end architecture Behavioral;
```

**Synthesis Tool Interpretation:**

The synthesis tool will infer:

*   **Three D flip-flops:** One for each bit of `count_reg`. These flip-flops will be sensitive to the rising edge of `clk`.
*   **Reset Logic:** The `if reset = '1'` condition will be mapped to the asynchronous or synchronous reset input of the flip-flops, depending on the tool's interpretation and library capabilities.
*   **Incrementer Logic:** The `count_reg + 1` operation will be mapped to a 3-bit adder, whose output is connected to the D input of the flip-flops.

**Example (State Machine Synthesis - Conceptual):**

Consider a simple Mealy machine:

| State | Input | Output | Next State |
| :---- | :---- | :----- | :--------- |
| S0    | 0     | 0      | S0         |
| S0    | 1     | 1      | S1         |
| S1    | 0     | 1      | S0         |
| S1    | 1     | 0      | S1         |

**HDL Description (VHDL):**

```vhdl
entity MealyFSM is
    port (
        clk  : in  std_logic;
        reset: in  std_logic;
        inp  : in  std_logic;
        outp : out std_logic
    );
end entity MealyFSM;

architecture Behavioral of MealyFSM is
    type state_type is (S0, S1);
    signal current_state, next_state : state_type;
begin
    -- State Register
    process (clk, reset)
    begin
        if reset = '1' then
            current_state <= S0;
        elsif rising_edge(clk) then
            current_state <= next_state;
        end if;
    end process;

    -- Next State and Output Logic
    process (current_state, inp)
    begin
        case current_state is
            when S0 =>
                if inp = '0' then
                    next_state <= S0;
                    outp <= '0';
                else -- inp = '1'
                    next_state <= S1;
                    outp <= '1';
                end if;
            when S1 =>
                if inp = '0' then
                    next_state <= S0;
                    outp <= '1';
                else -- inp = '1'
                    next_state <= S1;
                    outp <= '0';
                end if;
        end case;
    end process;
end architecture Behavioral;
```

**Synthesis Tool Output (Conceptual):**

The tool will:

1.  **Encode States:** Assign binary values to S0 and S1 (e.g., S0="0", S1="1" if binary encoding is used).
2.  **Implement State Register:** Instantiate a D flip-flop to hold the current state (`current_state`).
3.  **Implement Next State Logic:** Generate combinational logic (based on the `case` statement) that takes `current_state` and `inp` to produce `next_state`.
4.  **Implement Output Logic:** Generate combinational logic (also based on the `case` statement) that takes `current_state` and `inp` to produce `outp`.

**Reference from Textbooks:**

*   **Mano & Ciletti (6th Ed.):** Chapter 10, "Sequential Circuits Synthesis," is highly relevant, covering state minimization, state assignment, and the synthesis of finite state machines.
*   **Wakerly (4th Ed.):** Chapter 9, "State Machine Design," and Chapter 10, "Sequential Circuit Design Procedures," are crucial for understanding the underlying principles of sequential circuit synthesis.

---

## Synthesis Tools and Workflows

**Common Synthesis Tools:**

*   **Synopsys Design Compiler:** A widely used commercial tool for ASIC synthesis.
*   **Cadence Genus Synthesis Solution:** Another leading commercial tool for ASIC synthesis.
*   **Xilinx Vivado Synthesis / ISE XST:** For Xilinx FPGAs.
*   **Intel Quartus Prime Synthesis:** For Intel (Altera) FPGAs.

**Typical Synthesis Workflow:**

1.  **Design Entry:** Write HDL code (VHDL/Verilog).
2.  **Constraint File Creation:** Define timing constraints (clock periods, I/O delays), area goals, and power budgets.
3.  **Synthesis Command:** Invoke the synthesis tool with the HDL files and constraint files.
4.  **Report Generation:**
    *   **Synthesis Report:** Details the mapped logic, gate counts, and estimated delays.
    *   **Timing Report:** Analyzes the critical path and checks if timing constraints are met.
    *   **Area Report:** Provides information on resource utilization.
    *   **Power Report:** Estimates power consumption.
5.  **Verification:**
    *   **Functional Simulation:** Ensure the synthesized netlist behaves correctly.
    *   **Timing Simulation:** Verify the circuit's behavior under timing constraints.
6.  **Output:** Generate a gate-level netlist in a format suitable for the next stage (place and route).

**Example Workflow (Conceptual):**

1.  **HDL File:** `my_design.v` (Verilog) or `my_design.vhd` (VHDL).
2.  **Constraint File:** `my_design.sdc` (Synopsys Design Constraints) or equivalent for other tools.
    ```tcl
    # Example constraints for a clock
    create_clock -period 10.000 -name sys_clk [get_ports clk]

    # Set input delays
    set_input_delay 2.000 -clock sys_clk [get_ports data_in]

    # Set output delays
    set_output_delay 2.000 -clock sys_clk [get_ports data_out]
    ```
3.  **Synthesis Command (example using a hypothetical tool):**
    `synthesize -design my_design -rtl my_design.v -constraints my_design.sdc -output_netlist my_design.v`
4.  **Review Reports:** Check `my_design.synth_report`, `my_design.timing_report`.
5.  **Post-Synthesis Simulation:** Run simulation on `my_design.v` (netlist) with stimulus.

**Reference from Reference Books:**

*   **Haskell & Hanna (2019):** Introduces VHDL and FPGA board usage, which implies the workflow of HDL coding, synthesis, and implementation.
*   **Anand (2013) / John & Roth (2012):** Books on Digital System Design Using VHDL will likely cover the practical aspects of writing VHDL for synthesis and the typical tools used.

---

## Important Points to Remember

*   **HDL Quality Matters:** The way you write HDL code directly influences the quality of the synthesized netlist. Aim for clear, structured RTL code.
*   **Constraints are Crucial:** Without proper timing and other constraints, synthesis tools cannot optimize effectively.
*   **Synthesis is an Optimization Process:** It's not just about translating; it's about finding the best implementation for your goals (area, speed, power).
*   **Technology Awareness:** Understand the target technology (ASIC library, FPGA architecture) as synthesis maps to these specific primitives.
*   **Iterative Process:** Synthesis is often an iterative process. You might need to modify your HDL or constraints based on synthesis reports.
*   **Functional vs. Timing:** Synthesis primarily deals with the functional correctness and then optimizes for timing and area. Verification (simulation) is essential to ensure both functional and timing correctness.
*   **Abstraction Levels:** Synthesis bridges the gap between high-level behavioral descriptions and low-level gate-level implementations.

---

## Practice Questions

1.  **What is the primary role of synthesis in the VLSI design flow?**
    *   **Answer:** To automatically convert a high-level behavioral or RTL description of a digital circuit into a gate-level netlist using a target technology library.

2.  **List at least three common optimization objectives during synthesis.**
    *   **Answer:** Area, speed (timing), and power consumption.

3.  **Explain the difference between behavioral and dataflow modeling in HDL. Which is generally preferred for synthesis of combinational logic?**
    *   **Answer:** Behavioral modeling describes the algorithm/behavior, often using sequential constructs. Dataflow modeling describes the flow of data, typically using concurrent signal assignments. Dataflow modeling is generally preferred for combinational logic as it directly maps to hardware.

4.  **If you wanted to achieve the highest clock frequency for your design, what type of synthesis constraint would you focus on?**
    *   **Answer:** Timing constraints, specifically the clock period or the desired clock frequency.

5.  **How does synthesis handle sequential logic, such as flip-flops?**
    *   **Answer:** Synthesis tools infer flip-flops from clocked processes or registered assignments in the HDL. These inferred flip-flops are then mapped to the actual flip-flop cells available in the target technology library.

6.  **What are the main stages involved in the synthesis process?**
    *   **Answer:** Logic Synthesis (or High-Level Synthesis) and Technology Mapping.

7.  **Why is it important to provide constraint files to a synthesis tool?**
    *   **Answer:** Constraint files (e.g., SDC) provide the synthesis tool with critical information about performance requirements (timing), area budgets, and power targets, enabling it to perform effective optimization and technology mapping.

---

## Conclusion

Synthesis is a critical automation step in modern VLSI design. It transforms abstract hardware descriptions into concrete gate-level implementations, enabling designers to optimize for various performance metrics and target specific silicon technologies. Understanding the principles of synthesis, different HDL modeling styles, and the role of constraints is fundamental for any digital system designer.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
