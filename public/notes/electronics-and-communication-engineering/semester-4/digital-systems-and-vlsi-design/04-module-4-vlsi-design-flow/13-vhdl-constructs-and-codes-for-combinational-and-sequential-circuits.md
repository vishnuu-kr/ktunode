---
title: "VHDL constructs and codes for combinational and sequential circuits."
subject: "DIGITAL SYSTEMS AND VLSI DESIGN"
module: "Module 4: VLSI Design flow"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe771"
status: "completed"
scrapedAt: "2026-05-23T17:48:29.200Z"
---
# Module 4: VLSI Design Flow - VHDL Constructs and Codes for Combinational and Sequential Circuits

This module delves into the fundamental building blocks of digital system design using VHDL (VHSIC Hardware Description Language). We will explore how VHDL is used to model and describe both combinational and sequential logic circuits, crucial for VLSI design.

## 1. Introduction to VHDL

VHDL is a powerful hardware description language used to describe the behavior and structure of electronic systems. It's a standard for digital design and simulation, allowing for the creation of complex integrated circuits.

**Key Concepts:**

*   **Hardware Description Language (HDL):** A specialized computer language used to describe the design, modeling, and testing of electronic systems.
*   **Abstraction Levels:** VHDL allows design at various levels of abstraction, from behavioral (high-level algorithmic description) to structural (interconnecting components) and dataflow (concurrent signal assignments).

**Importance in VLSI Design:**

*   **Design Entry:** VHDL serves as a primary method for entering digital designs.
*   **Simulation:** Allows for verification and debugging of designs before fabrication.
*   **Synthesis:** VHDL code can be translated into a netlist of logic gates for implementation on FPGAs or ASICs.
*   **Portability:** VHDL designs are hardware-independent, meaning they can be implemented on different target technologies.

**(Referenced from: Mano & Ciletti, Ch 1-2; Roth & John, Ch 1-2)**

## 2. VHDL Constructs for Combinational Circuits

Combinational circuits' outputs depend solely on the current values of their inputs. VHDL provides several ways to model these circuits.

### 2.1 VHDL Structure

A basic VHDL design unit consists of an `ENTITY` and an `ARCHITECTURE`.

*   **`ENTITY`:** Declares the interface of the circuit, including its name, ports (inputs and outputs), and their data types.
*   **`ARCHITECTURE`:** Describes the internal behavior or structure of the entity.

**Example Structure:**

```vhdl
-- Library declaration
library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

-- Entity declaration
entity my_circuit is
    port (
        input1 : in STD_LOGIC;
        input2 : in STD_LOGIC;
        output1 : out STD_LOGIC
    );
end entity my_circuit;

-- Architecture declaration
architecture behavioral of my_circuit is
begin
    -- Circuit logic goes here
end architecture behavioral;
```

**(Referenced from: Mano & Ciletti, Ch 3; Roth & John, Ch 3)**

### 2.2 Data Types

*   **`STD_LOGIC`:** A standard IEEE data type representing a single bit with nine possible values: '0', '1', 'Z' (high impedance), 'X' (unknown), 'U' (uninitialized), 'L' (low voltage), 'H' (high voltage), '-' (don't care), 'W' (weak signal).
*   **`STD_LOGIC_VECTOR`:** An array of `STD_LOGIC` signals, used to represent multi-bit signals like buses.

**(Referenced from: IEEE Standard 1164)**

### 2.3 Modeling Styles for Combinational Circuits

#### 2.3.1 Behavioral Modeling (Process Statement)

The `process` statement is a sequential block that executes when any of its sensitivity list signals change. It's commonly used for describing combinational logic using `IF` and `CASE` statements.

**Key Concepts:**

*   **`process`:** A block of sequential statements that execute when triggered by events on signals in its sensitivity list.
*   **Sensitivity List:** A list of signals that, when they change, cause the process to re-execute. For combinational logic, *all* input signals must be in the sensitivity list to ensure correct behavior.
*   **`IF` Statement:** Used for conditional logic.
*   **`CASE` Statement:** Used for selecting one of several options based on a control signal.

**Example: 2-to-1 Multiplexer (Behavioral)**

```vhdl
library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

entity mux2_to_1 is
    port (
        a : in STD_LOGIC;
        b : in STD_LOGIC;
        sel : in STD_LOGIC;
        y : out STD_LOGIC
    );
end entity mux2_to_1;

architecture behavioral of mux2_to_1 is
begin
    process (a, b, sel) -- Sensitivity list includes all inputs
    begin
        if sel = '0' then
            y <= a;
        else
            y <= b;
        end if;
    end process;
end architecture behavioral;
```

**(Referenced from: Mano & Ciletti, Ch 4; Roth & John, Ch 4)**

#### 2.3.2 Dataflow Modeling (Concurrent Signal Assignments)

Dataflow modeling uses concurrent signal assignment statements to describe the flow of data through the circuit.

**Key Concepts:**

*   **Concurrent Signal Assignment:** Statements that are evaluated whenever any of their input signals change. They are "concurrent" because their order in the VHDL code does not imply execution order; they are evaluated in parallel.
*   **`WITH...SELECT` Statement:** A concise way to model multiplexers and other selection logic.
*   **Logical Operators:** VHDL supports standard logical operators (`AND`, `OR`, `NOT`, `XOR`, `NAND`, `NOR`).

**Example: 2-to-1 Multiplexer (Dataflow)**

```vhdl
library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

entity mux2_to_1_dataflow is
    port (
        a : in STD_LOGIC;
        b : in STD_LOGIC;
        sel : in STD_LOGIC;
        y : out STD_LOGIC
    );
end entity mux2_to_1_dataflow;

architecture dataflow of mux2_to_1_dataflow is
begin
    -- Concurrent signal assignment
    y <= a when sel = '0' else b;

    -- Alternatively, using WITH...SELECT
    -- y <= (a when sel = '0' else b); -- Parentheses for clarity, not strictly needed here
end architecture dataflow;
```

**Example: Full Adder (Dataflow)**

```vhdl
library IEEE;
use IEEE.STD_LOGIC_1164.ALL;
use IEEE.NUMERIC_STD.ALL; -- For arithmetic operations

entity full_adder_dataflow is
    port (
        x : in STD_LOGIC;
        y : in STD_LOGIC;
        cin : in STD_LOGIC;
        sum : out STD_LOGIC;
        cout : out STD_LOGIC
    );
end entity full_adder_dataflow;

architecture dataflow of full_adder_dataflow is
    signal s : STD_LOGIC; -- Internal signal for sum calculation
begin
    -- Sum logic
    s <= x XOR y XOR cin;
    sum <= s;

    -- Carry-out logic
    cout <= (x AND y) OR (cin AND (x XOR y));
end architecture dataflow;
```

**(Referenced from: Mano & Ciletti, Ch 4; Roth & John, Ch 4)**

#### 2.3.3 Structural Modeling

Structural modeling describes a circuit as an interconnection of predefined components (entities).

**Key Concepts:**

*   **`component` Declaration:** Declares the interface of a reusable block.
*   **`instantiate`:** Creates an instance of a component.
*   **`port map`:** Connects the ports of the component instance to signals in the current architecture.

**Example: 4-bit Ripple Carry Adder (Structural)**

Assume we have a `full_adder` component entity and architecture defined elsewhere.

```vhdl
-- Assuming a full_adder component is defined
component full_adder is
    port (
        x : in STD_LOGIC;
        y : in STD_LOGIC;
        cin : in STD_LOGIC;
        sum : out STD_LOGIC;
        cout : out STD_LOGIC
    );
end component;

-- Entity for 4-bit ripple carry adder
entity ripple_carry_adder_4bit is
    port (
        A : in STD_LOGIC_VECTOR (3 downto 0);
        B : in STD_LOGIC_VECTOR (3 downto 0);
        Cin : in STD_LOGIC;
        Sum : out STD_LOGIC_VECTOR (3 downto 0);
        Cout : out STD_LOGIC
    );
end entity ripple_carry_adder_4bit;

architecture structural of ripple_carry_adder_4bit is
    -- Declare internal signals for carry propagation
    signal carry : STD_LOGIC_VECTOR (3 downto 0);

begin
    -- Instantiate the first full adder (LSB)
    FA0 : full_adder
        port map (
            x => A(0),
            y => B(0),
            cin => Cin,
            sum => Sum(0),
            cout => carry(0)
        );

    -- Instantiate the second full adder
    FA1 : full_adder
        port map (
            x => A(1),
            y => B(1),
            cin => carry(0), -- Carry from previous stage
            sum => Sum(1),
            cout => carry(1)
        );

    -- Instantiate the third full adder
    FA2 : full_adder
        port map (
            x => A(2),
            y => B(2),
            cin => carry(1), -- Carry from previous stage
            sum => Sum(2),
            cout => carry(2)
        );

    -- Instantiate the fourth full adder (MSB)
    FA3 : full_adder
        port map (
            x => A(3),
            y => B(3),
            cin => carry(2), -- Carry from previous stage
            sum => Sum(3),
            cout => Cout      -- Final carry-out
        );
end architecture structural;
```

**(Referenced from: Mano & Ciletti, Ch 5; Roth & John, Ch 5)**

### 2.4 Hazard Mitigation in Combinational Circuits (Related to CO3)

Hazards are transient, undesirable glitches in the output of a combinational circuit that can occur during input transitions. VHDL modeling helps in representing circuits, and synthesis tools aim to generate hazard-free implementations, but understanding hazards is crucial.

**Types of Hazards:**

*   **Static Hazard:** Occurs when a single-input change causes the output to briefly transition to the wrong value and then back to the correct steady state.
*   **Dynamic Hazard:** Occurs when a single-input change causes the output to glitch multiple times before settling to the correct value.

**Mitigation:**

*   **Redundant Gates:** Adding extra logic (redundant terms in the K-map or boolean expression) can cover all possible transition paths.
*   **VHDL Modeling:** While VHDL describes behavior, synthesis tools interpret it. Writing clear, minimal, sum-of-products or product-of-sums forms can help. For example, using a `process` with `if-else` is often more robust than a direct `assign` for combinational logic in terms of hazard avoidance during synthesis, especially when the `if-else` covers all cases explicitly.

**(Referenced from: Givone, Ch 6; Yarbrough, Ch 6; Biswas, Ch 5)**

## 3. VHDL Constructs for Sequential Circuits

Sequential circuits have memory elements (flip-flops or latches), meaning their outputs depend on both the current inputs and the past sequence of inputs (state).

### 3.1 Sequential Elements: Flip-Flops and Latches

VHDL models sequential behavior using processes sensitive to clock edges or level changes.

**Key Concepts:**

*   **Clocked Processes:** Processes that respond to the rising or falling edge of a clock signal.
    *   `rising_edge(clock)`
    *   `falling_edge(clock)`
*   **`IF` Statement:** Used to define the behavior within a clock edge.
*   **`WAIT` Statement:** Used to suspend process execution.
    *   `wait until rising_edge(clock);` (common for synchronous designs)
*   **Latches:** Generated implicitly in VHDL if a signal is assigned a value in one branch of a conditional statement but not another, and the signal is read elsewhere without being assigned in all branches. This is generally *avoided* in synchronous design unless explicitly intended.

**(Referenced from: Mano & Ciletti, Ch 6; Roth & John, Ch 6; Haskell & Hanna, Ch 5)**

### 3.2 Modeling Synchronous Sequential Circuits (CSSNs)

Synchronous sequential circuits operate under the control of a clock signal.

#### 3.2.1 D Flip-Flop (Positive Edge-Triggered)

```vhdl
library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

entity d_flip_flop is
    port (
        D : in STD_LOGIC;
        CLK : in STD_LOGIC;
        Q : out STD_LOGIC
    );
end entity d_flip_flop;

architecture behavioral of d_flip_flop is
begin
    -- Process sensitive to the rising edge of CLK
    process (CLK)
    begin
        if rising_edge(CLK) then
            Q <= D; -- D is captured on the positive clock edge
        end if;
    end process;
end architecture behavioral;
```

**(Referenced from: Mano & Ciletti, Ch 6; Roth & John, Ch 6)**

#### 3.2.2 JK Flip-Flop (Positive Edge-Triggered)

```vhdl
library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

entity jk_flip_flop is
    port (
        J : in STD_LOGIC;
        K : in STD_LOGIC;
        CLK : in STD_LOGIC;
        Q : out STD_LOGIC
    );
end entity jk_flip_flop;

architecture behavioral of jk_flip_flop is
begin
    process (CLK)
    begin
        if rising_edge(CLK) then
            if J = '0' and K = '0' then
                Q <= Q; -- No change
            elsif J = '0' and K = '1' then
                Q <= '0'; -- Reset
            elsif J = '1' and K = '0' then
                Q <= '1'; -- Set
            elsif J = '1' and K = '1' then
                Q <= not Q; -- Toggle
            end if;
        end if;
    end process;
end architecture behavioral;
```

**(Referenced from: Givone, Ch 7; Wakerly, Ch 7)**

#### 3.2.3 State Machine Modeling (Mealy and Moore)

State machines are a common way to model sequential circuits.

**Key Concepts:**

*   **State Register:** Holds the current state of the machine.
*   **Next State Logic:** Determines the next state based on the current state and inputs.
*   **Output Logic:** Determines the output based on the current state (Moore) or current state and inputs (Mealy).

**Mealy Machine:** Output depends on current state and current input.

```vhdl
library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

entity mealy_fsm is
    port (
        clk : in STD_LOGIC;
        reset : in STD_LOGIC;
        input_sig : in STD_LOGIC;
        output_sig : out STD_LOGIC
    );
end entity mealy_fsm;

architecture behavioral of mealy_fsm is
    -- State type definition
    type state_type is (S0, S1, S2);

    -- Signals for state register
    signal current_state : state_type;
    signal next_state : state_type;

begin
    -- State Register (Flip-flops)
    process (clk, reset)
    begin
        if reset = '1' then
            current_state <= S0;
        elsif rising_edge(clk) then
            current_state <= next_state;
        end if;
    end process;

    -- Next State Logic
    process (current_state, input_sig)
    begin
        case current_state is
            when S0 =>
                if input_sig = '0' then
                    next_state <= S0;
                else
                    next_state <= S1;
                end if;
            when S1 =>
                if input_sig = '0' then
                    next_state <= S0;
                else
                    next_state <= S2;
                end if;
            when S2 =>
                if input_sig = '0' then
                    next_state <= S1;
                else
                    next_state <= S0; -- Transition back to S0 on input '1'
                end if;
        end case;
    end process;

    -- Output Logic (Mealy - depends on current_state and input_sig)
    process (current_state, input_sig)
    begin
        case current_state is
            when S0 =>
                if input_sig = '0' then
                    output_sig <= '0';
                else
                    output_sig <= '1';
                end if;
            when S1 =>
                if input_sig = '0' then
                    output_sig <= '1';
                else
                    output_sig <= '0';
                end if;
            when S2 =>
                if input_sig = '0' then
                    output_sig <= '0';
                else
                    output_sig <= '1';
                end if;
        end case;
    end process;
end architecture behavioral;
```

**Moore Machine:** Output depends only on the current state.

```vhdl
library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

entity moore_fsm is
    port (
        clk : in STD_LOGIC;
        reset : in STD_LOGIC;
        input_sig : in STD_LOGIC;
        output_sig : out STD_LOGIC
    );
end entity moore_fsm;

architecture behavioral of moore_fsm is
    -- State type definition
    type state_type is (S0, S1, S2);

    -- Signals for state register
    signal current_state : state_type;
    signal next_state : state_type;

begin
    -- State Register (Flip-flops)
    process (clk, reset)
    begin
        if reset = '1' then
            current_state <= S0;
        elsif rising_edge(clk) then
            current_state <= next_state;
        end if;
    end process;

    -- Next State Logic (Same as Mealy for this example)
    process (current_state, input_sig)
    begin
        case current_state is
            when S0 =>
                if input_sig = '0' then
                    next_state <= S0;
                else
                    next_state <= S1;
                end if;
            when S1 =>
                if input_sig = '0' then
                    next_state <= S0;
                else
                    next_state <= S2;
                end if;
            when S2 =>
                if input_sig = '0' then
                    next_state <= S1;
                else
                    next_state <= S0;
                end if;
        end case;
    end process;

    -- Output Logic (Moore - depends only on current_state)
    process (current_state)
    begin
        case current_state is
            when S0 => output_sig <= '0'; -- Output is '0' in state S0
            when S1 => output_sig <= '1'; -- Output is '1' in state S1
            when S2 => output_sig <= '0'; -- Output is '0' in state S2
        end case;
    end process;
end architecture behavioral;
```

**(Referenced from: CO1, CO4; Givone, Ch 7; Wakerly, Ch 7; Roth & John, Ch 7)**

**ASM Charts:** Algorithmic State Machine (ASM) charts are graphical representations of state machines. VHDL code is often written to implement the logic derived from ASM charts.

**(Referenced from: CO1; Givone, Ch 7; Wakerly, Ch 7)**

#### 3.2.4 Implicit Latches (Undesired)

If a signal is assigned a value within a conditional statement in a process but is not assigned in all branches, a latch will be inferred by the synthesis tool to hold the last value. This is usually undesirable in synchronous designs.

**Example of Implicit Latch:**

```vhdl
process (clk, input_sig)
begin
    if rising_edge(clk) then
        if input_sig = '1' then
            output_sig <= '1';
        end if; -- If input_sig = '0', output_sig is not assigned here,
               -- causing a latch to be inferred for output_sig.
    end if;
end process;
```

To avoid this, ensure `output_sig` is assigned in all possible execution paths within the clocked process.

```vhdl
process (clk, reset, input_sig)
begin
    if reset = '1' then
        output_sig <= '0';
    elsif rising_edge(clk) then
        if input_sig = '1' then
            output_sig <= '1';
        else
            output_sig <= '0'; -- Explicitly assign in all paths
        end if;
    end if;
end process;
```

**(Referenced from: Mano & Ciletti, Ch 6; Roth & John, Ch 6)**

### 3.3 Modeling Asynchronous Sequential Circuits (ASCs) (Related to CO2)

ASCs do not rely on a global clock. Their behavior is determined by the timing of input signal changes and the delays in the logic gates. Modeling ASCs in VHDL accurately can be challenging due to the deterministic nature of simulation vs. the non-deterministic nature of real-world asynchronous circuits. VHDL is primarily used for synchronous design.

**Key Concepts for ASCs:**

*   **Races:** Occur when multiple inputs change simultaneously or nearly simultaneously, and the output depends on the order in which these changes are detected.
*   **Glitches:** Transient pulses that can cause incorrect state transitions.
*   **Flow Tables:** Used to describe the behavior of ASCs.
*   **State Assignment:** Critical for avoiding races.

**VHDL Modeling of ASCs:**

VHDL simulation is deterministic. To model ASCs, one might use `wait for <time>` statements or model gate delays. However, this is not the typical use case for VHDL in VLSI, which focuses on synchronous clocked systems. For representing the *logic* of an ASC, a process sensitive to all inputs might be used, but it won't fully capture asynchronous behavior dynamics.

```vhdl
-- A conceptual example of modeling inputs for an ASC,
-- but this does not fully represent asynchronous timing issues.
entity async_logic is
    port (
        A : in STD_LOGIC;
        B : in STD_LOGIC;
        Y : out STD_LOGIC
    );
end entity async_logic;

architecture rtl of async_logic is
begin
    -- Modeling output based on input levels.
    -- Real ASCs require careful handling of races and delays.
    process (A, B) -- Sensitive to changes in A or B
    begin
        if A = '1' and B = '1' then
            Y <= '1';
        else
            Y <= '0';
        end if;
    end process;
end architecture rtl;
```

**(Referenced from: CO2; Givone, Ch 7; Yarbrough, Ch 7; Kohavi & Jha, Ch 7)**

## 4. VHDL for Arithmetic Logic Units (ALUs) (Related to CO2)

ALUs perform arithmetic and logic operations. They are typically implemented using combinational logic for the operations and can be part of a larger sequential system.

**Example: Simple 1-bit ALU**

```vhdl
library IEEE;
use IEEE.STD_LOGIC_1164.ALL;
use IEEE.NUMERIC_STD.ALL; -- For arithmetic operations

entity alu_1bit is
    port (
        A : in STD_LOGIC;
        B : in STD_LOGIC;
        Op : in STD_LOGIC_VECTOR (1 downto 0); -- 00: A AND B, 01: A OR B, 10: A + B, 11: NOT A
        Result : out STD_LOGIC
    );
end entity alu_1bit;

architecture behavioral of alu_1bit is
begin
    process (A, B, Op)
    begin
        case Op is
            when "00" => -- AND
                Result <= A AND B;
            when "01" => -- OR
                Result <= A OR B;
            when "10" => -- ADD (for single bits, this is XOR with carry-in, output is sum and carry)
                        -- Here, we'll just show sum for simplicity, or use a larger vector for result
                -- For a true 1-bit adder, we'd need Cin and a 2-bit output (sum, cout)
                -- For this example, let's assume we want sum of A and B as 1-bit result (ignoring carry)
                -- A better representation for 1-bit add:
                -- if A = '0' and B = '0' then Result <= '0';
                -- elsif A = '0' and B = '1' then Result <= '1';
                -- elsif A = '1' and B = '0' then Result <= '1';
                -- else Result <= '0'; -- 1+1 = 0 with carry-out
                -- Or using XOR for sum:
                Result <= A XOR B; -- This is the sum part of a + b
            when "11" => -- NOT A
                Result <= not A;
            when others => -- Default case for invalid Op
                Result <= 'X';
        end case;
    end process;
end architecture behavioral;
```

**(Referenced from: CO2; Givone, Ch 8; Wakerly, Ch 8)**

## 5. VHDL for VLSI Design Flow (Related to CO4)

VHDL is a cornerstone of the VLSI design flow.

**VLSI Design Flow Stages:**

1.  **Specification:** Defining the requirements of the circuit.
2.  **HDL Design Entry:** Writing VHDL code to describe the circuit.
3.  **Simulation & Verification:** Testing the VHDL code using testbenches to ensure it meets specifications.
4.  **Synthesis:** Translating the VHDL code into a netlist of standard cells or logic gates.
5.  **Place and Route:** Physically arranging the gates on the silicon die and connecting them.
6.  **Timing Analysis:** Verifying that the circuit meets performance requirements.
7.  **Post-Layout Simulation:** Simulating the circuit with extracted parasitic capacitances and resistances.
8.  **Fabrication:** Manufacturing the integrated circuit.
9.  **Testing:** Verifying the functionality of the fabricated chip.

**VHDL's Role:**

*   **Design Entry:** As discussed, VHDL is used to describe the logic.
*   **Simulation:** Testbenches are written in VHDL (or Verilog) to provide stimuli and check outputs.
*   **Synthesis:** Synthesis tools (e.g., Synopsys Design Compiler, Cadence Genus) take VHDL and convert it into a technology-specific netlist.

**(Referenced from: CO4; Givone, Introduction; Wakerly, Introduction)**

## 6. Important Points to Remember

*   **Sensitivity Lists:** Crucial for combinational logic processes. Include *all* inputs that affect the output. For synchronous sequential logic, sensitivity lists are typically to the clock and any asynchronous reset/set signals.
*   **`<=` vs. `=`:** Use `<=` for signal assignments (which are concurrent or within processes) and `=` for variable assignments (which are strictly sequential within a process).
*   **`IF` vs. `CASE`:** `IF` is good for conditional logic, `CASE` is more structured for multi-way branching.
*   **Latches:** Be mindful of implicit latch creation. Ensure all outputs are assigned in all branches of conditional statements within clocked processes unless a latch is explicitly desired.
*   **Synthesis:** VHDL code should be written with synthesis in mind. Avoid constructs that are difficult or impossible to synthesize (e.g., `wait for`, complex real number arithmetic, certain forms of concurrency that don't map to hardware).
*   **IEEE Libraries:** Always include `library IEEE; use IEEE.STD_LOGIC_1164.ALL;` for standard logic types. Use `use IEEE.NUMERIC_STD.ALL;` for arithmetic operations on `SIGNED` and `UNSIGNED` types.
*   **Clocking:** Synchronous designs rely on clock edges. Use `rising_edge(clk)` or `falling_edge(clk)` within clocked processes.

## 7. Practice Questions and Answers

**Question 1 (Combinational):** Write a VHDL code for a 4-to-1 multiplexer using a `with-select` statement.

**Answer 1:**

```vhdl
library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

entity mux4_to_1 is
    port (
        D : in STD_LOGIC_VECTOR (3 downto 0); -- Data inputs
        S : in STD_LOGIC_VECTOR (1 downto 0); -- Select inputs
        Y : out STD_LOGIC                      -- Output
    );
end entity mux4_to_1;

architecture dataflow of mux4_to_1 is
begin
    -- Using WITH...SELECT statement
    Y <= D(3) when S = "11" else
         D(2) when S = "10" else
         D(1) when S = "01" else
         D(0); -- when S = "00"

    -- Alternative using WITH...SELECT
    -- with S select Y <= D(0) when "00",
    --                  D(1) when "01",
    --                  D(2) when "10",
    --                  D(3) when "11";
end architecture dataflow;
```

**Question 2 (Sequential):** Write a VHDL code for a T flip-flop with synchronous reset.

**Answer 2:**

```vhdl
library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

entity t_flip_flop_sr is
    port (
        T : in STD_LOGIC;
        CLK : in STD_LOGIC;
        RESET : in STD_LOGIC; -- Synchronous reset
        Q : out STD_LOGIC
    );
end entity t_flip_flop_sr;

architecture behavioral of t_flip_flop_sr is
begin
    process (CLK)
    begin
        if rising_edge(CLK) then
            if RESET = '1' then
                Q <= '0'; -- Reset the flip-flop to 0
            elsif T = '1' then
                Q <= not Q; -- Toggle if T is '1'
            else
                Q <= Q; -- Hold the current value if T is '0'
            end if;
        end if;
    end process;
end architecture behavioral;
```

**Question 3 (State Machine):** Describe the behavior of a simple vending machine that dispenses a product when 25 cents are inserted. Assume coin inputs are '1' for a quarter, '0' otherwise. The output `Dispense` is '1' when the product is dispensed. This is a Moore machine.

**Answer 3:**

**State Definitions:**
*   `IDLE`: No money inserted.
*   `TEN_CENTS`: 10 cents inserted. (Let's adjust to simpler states for illustration: 0, 1 quarter)
*   `QUARTER`: 25 cents inserted.

Let's simplify to states based on accumulated value:
*   `S0`: 0 cents.
*   `S1`: 25 cents (product dispensed).

**State Diagram (Simplified):**
*   From `S0`:
    *   Input '0' (no quarter) -> `S0`
    *   Input '1' (quarter) -> `S1`
*   From `S1`:
    *   Input '0' (no quarter) -> `S0` (resetting after dispense)
    *   Input '1' (quarter) -> `S1` (accumulating or resetting)

**VHDL Code (Moore Machine):**

```vhdl
library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

entity vending_machine is
    port (
        clk : in STD_LOGIC;
        reset : in STD_LOGIC; -- Asynchronous reset
        coin_in : in STD_LOGIC; -- '1' for quarter, '0' otherwise
        dispense : out STD_LOGIC
    );
end entity vending_machine;

architecture behavioral of vending_machine is
    -- States: S0 (0 cents), S1 (25 cents)
    type state_type is (S0, S1);
    signal current_state : state_type := S0;
    signal next_state : state_type;

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

    -- Next State Logic
    process (current_state, coin_in)
    begin
        case current_state is
            when S0 =>
                if coin_in = '1' then
                    next_state <= S1;
                else
                    next_state <= S0;
                end if;
            when S1 =>
                if coin_in = '1' then
                    next_state <= S1; -- Stay in S1, potentially dispense again or reset for new coin
                                      -- A more realistic model might reset to S0.
                                      -- For simplicity, let's say it stays ready.
                                      -- If we want to dispense ONLY once per coin, reset logic needed.
                                      -- Let's assume it resets to S0 after dispensing.
                    next_state <= S0;
                else
                    next_state <= S0;
                end if;
        end case;
    end process;

    -- Output Logic (Moore - output depends only on current state)
    process (current_state)
    begin
        case current_state is
            when S0 => dispense <= '0'; -- Not dispensing in S0
            when S1 => dispense <= '1'; -- Dispensing in S1
        end case;
    end process;
end architecture behavioral;

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
