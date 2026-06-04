---
title: "VHDL constructs and codes for combinational and sequential circuits"
subject: "DIGITAL SYSTEM DESIGN"
module: "Module 4: VLSI Design flow"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe726"
status: "completed"
scrapedAt: "2026-05-23T17:47:59.488Z"
---
# DIGITAL SYSTEM DESIGN - Module 4: VLSI Design Flow

## Topic: VHDL Constructs and Codes for Combinational and Sequential Circuits

---

### 1. Introduction to VHDL

*   **VHDL** (VHSIC Hardware Description Language) is a hardware description language used in electronic design automation to describe digital and hybrid dynamical systems. It is standardized by the IEEE.
*   **Purpose:** To describe the structure, behavior, and design of electronic circuits, particularly for hardware synthesis, simulation, and verification.
*   **Key Features:**
    *   **Concurrency:** VHDL models the parallel nature of hardware.
    *   **Timing:** Supports explicit timing and delay modeling.
    *   **Hierarchy:** Allows for modular design through component instantiation.
    *   **Strong Typing:** Enforces type checking to catch errors early.
    *   **Synthesis:** VHDL code can be synthesized into actual hardware (ASICs, FPGAs).

---

### 2. VHDL Structure: The Anatomy of a VHDL Design

A VHDL design typically consists of two main parts:

*   **Entity:** Describes the interface of a design component (inputs, outputs, and generics). It defines *what* the circuit does from an external perspective.
    *   **Syntax:**
        ```vhdl
        entity entity_name is
            port (
                port_name1 : in std_logic;
                port_name2 : out std_logic_vector(7 downto 0)
                -- ... other ports
            );
            -- generic ( -- optional for parameterized designs );
        end entity entity_name;
        ```
    *   **`entity_name`**: Unique identifier for the component.
    *   **`port`**: Defines the input and output signals.
        *   `in`: Input signal.
        *   `out`: Output signal.
        *   `inout`: Bidirectional signal.
        *   `buffer`: Output that can be read internally (less common).
    *   **`std_logic`**: A standard IEEE 1164 type representing signals with nine possible values ( '0', '1', 'Z' (high impedance), 'X' (unknown), 'U' (uninitialized), 'W' (weak unknown), 'L' (weak low), 'H' (weak high), '-' (don't care)).
    *   **`std_logic_vector`**: A multi-bit signal, similar to an array.
    *   **`generic`**: Used for parameterization (e.g., data width, delay values).

*   **Architecture:** Describes the internal behavior or structure of the entity. It defines *how* the circuit achieves its functionality.
    *   **Syntax:**
        ```vhdl
        architecture architecture_name of entity_name is
            -- Declarations (signals, components, types, constants, etc.)
        begin
            -- Concurrent statements (assignments, process statements, component instantiations)
        end architecture architecture_name;
        ```
    *   **`architecture_name`**: Unique identifier for the architecture, often descriptive (e.g., `rtl`, `behavioral`, `dataflow`).
    *   **Concurrent Statements:** Executed whenever any of the signals they depend on change.
        *   **Signal Assignments:** `signal_name <= expression;`
        *   **Component Instantiations:** Connecting instances of other VHDL modules.
        *   **Process Statements:** Executed sequentially within the process.

**Example: A Simple AND Gate**

```vhdl
-- Entity Declaration
library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

entity and_gate is
    port (
        a : in  std_logic;
        b : in  std_logic;
        y : out std_logic
    );
end entity and_gate;

-- Architecture Definition (Behavioral Style)
architecture behavioral of and_gate is
begin
    -- Concurrent signal assignment
    y <= a and b;
end architecture behavioral;
```

---

### 3. VHDL Constructs for Combinational Circuits

Combinational circuits do not have memory elements; their output depends solely on the current input values.

#### 3.1. Signal Assignments

*   Used to assign values to signals.
*   **Syntax:** `signal_name <= expression [after delay_value];`
*   **`[after delay_value]`**: Optional for modeling hardware delays (useful for simulation, often optimized away by synthesis).
*   **Types of Assignments:**
    *   **Simple Assignment:** `y <= a and b;`
    *   **Conditional Assignment (`with-select`):** Assigns a value to a signal based on the value of a selector expression.
        ```vhdl
        with selector_expression select
            signal_name <= expression1 when choice1,
                           expression2 when choice2,
                           -- ...
                           expression_others when others;
        ```
    *   **Guarded Assignment (`when-else`):** Assigns a value to a signal based on a condition.
        ```vhdl
        signal_name <= expression1 when condition1 else
                       expression2 when condition2 else
                       -- ...
                       expression_else;
        ```

#### 3.2. Process Statements

*   A sequential block of VHDL statements that are executed when a sensitivity list is triggered or when a `wait` statement is encountered.
*   **Syntax:**
    ```vhdl
    process (sensitivity_list)
    begin
        -- Sequential statements (variable assignments, signal assignments, if, case, loop, etc.)
    end process;
    ```
*   **`sensitivity_list`**: A comma-separated list of signals. The process re-executes whenever any signal in this list changes.
*   **Inside a Process:**
    *   **Variable Assignments (`:=`):** Variables are updated immediately within a process. They are useful for intermediate calculations.
    *   **Signal Assignments (`<=`):** Signal assignments within a process are scheduled to occur at a future time (after the current simulation delta cycle) and are non-blocking.
    *   **`if`, `case`, `loop` statements:** Used for control flow.
    *   **`wait` statement:** Pauses the execution of a process. Can be used with conditions (`wait until ...`) or timeouts (`wait for ...`). **Note:** `wait` statements in the sensitivity list are generally not synthesizable for combinational logic.

#### 3.3. VHDL Constructs for Combinational Logic Synthesis

*   **`std_logic` and `std_logic_vector`:** Essential for representing signals.
*   **Operators:** `and`, `or`, `xor`, `not`, `nand`, `nor`, `xnor`, `sll` (shift left logical), `srl` (shift right logical), `sla` (shift left arithmetic), `sra` (shift right arithmetic), `rol` (rotate left), `ror` (rotate right).
*   **`signed` and `unsigned` types:** From `numeric_std` library for arithmetic operations.

**Example: 4-to-1 Multiplexer (Combinational)**

**Dataflow Style (using `with-select`)**

```vhdl
library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

entity mux_4_to_1 is
    port (
        i0 : in  std_logic;
        i1 : in  std_logic;
        i2 : in  std_logic;
        i3 : in  std_logic;
        s  : in  std_logic_vector(1 downto 0);
        y  : out std_logic
    );
end entity mux_4_to_1;

architecture dataflow of mux_4_to_1 is
begin
    y <= i0 when s = "00" else
         i1 when s = "01" else
         i2 when s = "10" else
         i3 when s = "11" else
         'X'; -- Default to 'X' for unassigned selector values
end architecture dataflow;
```

**Behavioral Style (using `process`)**

```vhdl
library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

entity mux_4_to_1_proc is
    port (
        i0 : in  std_logic;
        i1 : in  std_logic;
        i2 : in  std_logic;
        i3 : in  std_logic;
        s  : in  std_logic_vector(1 downto 0);
        y  : out std_logic
    );
end entity mux_4_to_1_proc;

architecture behavioral of mux_4_to_1_proc is
begin
    process (i0, i1, i2, i3, s)
    begin
        case s is
            when "00" => y <= i0;
            when "01" => y <= i1;
            when "10" => y <= i2;
            when "11" => y <= i3;
            when others => y <= 'X'; -- Handle invalid selector inputs
        end case;
    end process;
end architecture behavioral;
```

**Key Takeaway for Combinational Logic Synthesis:**
*   Use concurrent signal assignments or process statements sensitive to all inputs.
*   Avoid `wait` statements within combinational logic processes (unless specifically modeling delay).
*   Avoid feedback loops (output signal driven by itself through some path) unless intended for sequential circuits.
*   `with-select` and `case` statements are good for implementing multiplexers and decoders.
*   `if-else` statements are good for conditional logic.

---

### 4. VHDL Constructs for Sequential Circuits

Sequential circuits have memory elements (flip-flops or latches) that store state. Their output depends on both current inputs and past states.

#### 4.1. Clocked Sequential Circuits

These circuits are synchronized by a clock signal.

*   **Clock Edge Triggering:** Most common, actions occur on the rising or falling edge of the clock.
    *   **Rising Edge:** `rising_edge(clk)`
    *   **Falling Edge:** `falling_edge(clk)`
*   **`process` Statement for Sequential Logic:**
    *   The `process` statement is the primary mechanism for describing sequential logic.
    *   It must be sensitive to the **clock signal** and any **asynchronous reset/set signals**.
    *   Inside the process, assignments to the state-holding elements (registers, flip-flops) happen based on the clock edge and control signals (like reset).

**Example: D Flip-Flop with Asynchronous Reset**

```vhdl
library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

entity d_ff_async_reset is
    port (
        clk   : in  std_logic;
        d     : in  std_logic;
        rst_n : in  std_logic; -- Active low asynchronous reset
        q     : out std_logic
    );
end entity d_ff_async_reset;

architecture behavioral of d_ff_async_reset is
    signal q_reg : std_logic; -- Internal signal to hold the flip-flop state
begin
    process (clk, rst_n)
    begin
        if rst_n = '0' then -- Asynchronous reset is active
            q_reg <= '0';    -- Reset the flip-flop state
        elsif rising_edge(clk) then -- On the rising edge of the clock
            q_reg <= d;      -- Capture the input 'd'
        end if;
    end process;

    q <= q_reg; -- Assign the internal register to the output
end architecture behavioral;
```

**Explanation:**

*   The process is sensitive to `clk` and `rst_n`.
*   The `if rst_n = '0'` condition checks for the asynchronous reset. If active, `q_reg` is immediately set to '0', regardless of the clock.
*   The `elsif rising_edge(clk)` condition checks for the active clock edge. If the reset is not active and a rising edge occurs, the value of `d` is captured into `q_reg`.

**Synchronous Reset:** If the reset were synchronous, it would only be checked *after* the `rising_edge(clk)` condition.

**Example: D Flip-Flop with Synchronous Reset**

```vhdl
library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

entity d_ff_sync_reset is
    port (
        clk   : in  std_logic;
        d     : in  std_logic;
        rst   : in  std_logic; -- Active high synchronous reset
        q     : out std_logic
    );
end entity d_ff_sync_reset;

architecture behavioral of d_ff_sync_reset is
    signal q_reg : std_logic;
begin
    process (clk) -- Only sensitive to the clock
    begin
        if rising_edge(clk) then
            if rst = '1' then -- Synchronous reset check *after* clock edge
                q_reg <= '0';
            else
                q_reg <= d;
            end if;
        end if;
    end process;

    q <= q_reg;
end architecture behavioral;
```

#### 4.2. State Machines

State machines are widely used in sequential circuit design. VHDL can describe Finite State Machines (FSMs) effectively.

*   **Types of FSMs:**
    *   **Mealy Machine:** Output depends on the current state and current inputs.
    *   **Moore Machine:** Output depends only on the current state.
*   **Common VHDL Implementation Structure (Three-Process FSM):**
    1.  **State Register Process:** Holds the current state (usually a D flip-flop bank). Sensitive to clock and reset.
    2.  **Next-State Logic Process:** Determines the next state based on the current state and inputs. Combinational logic. Sensitive to current state and inputs.
    3.  **Output Logic Process:** Determines the output based on the current state (Moore) or current state and inputs (Mealy). Combinational logic. Sensitive to current state (and inputs for Mealy).

**Example: A simple 2-bit Counter (Moore FSM)**

Counts from 00 to 11 and rolls over.

```vhdl
library IEEE;
use IEEE.STD_LOGIC_1164.ALL;
use IEEE.NUMERIC_STD.ALL; -- For unsigned arithmetic

entity counter_2bit_moore is
    port (
        clk   : in  std_logic;
        rst   : in  std_logic; -- Active high synchronous reset
        enable: in  std_logic; -- Counts when enable is high
        q     : out std_logic_vector(1 downto 0)
    );
end entity counter_2bit_moore;

architecture fsm of counter_2bit_moore is

    -- Define states (optional but good practice for readability)
    -- type state_type is (S00, S01, S10, S11);
    -- signal current_state : state_type;
    -- signal next_state    : state_type;

    -- Using std_logic_vector for simplicity in this example
    signal current_count : unsigned(1 downto 0);
    signal next_count    : unsigned(1 downto 0);

begin

    -- State Register Process (Flip-flops)
    process (clk)
    begin
        if rising_edge(clk) then
            if rst = '1' then
                current_count <= "00";
            elsif enable = '1' then
                current_count <= next_count;
            end if;
        end if;
    end process;

    -- Next-State Logic Process (Combinational)
    process (current_count, enable)
    begin
        if enable = '1' then
            case current_count is
                when "00" => next_count <= "01";
                when "01" => next_count <= "10";
                when "10" => next_count <= "11";
                when "11" => next_count <= "00"; -- Rollover
                when others => next_count <= "00"; -- Default
            end case;
        else
            next_count <= current_count; -- Hold state if not enabled
        end if;
    end process;

    -- Output Logic Process (Moore - depends only on current state)
    -- The output is directly the current state register
    q <= std_logic_vector(current_count);

end architecture fsm;
```

**Key Takeaway for Sequential Logic Synthesis:**
*   Use `process` statements sensitive to the clock and asynchronous control signals (reset, set).
*   Inside the process, use `if rising_edge(clk)` or `if falling_edge(clk)` to detect clock transitions.
*   Use `if` or `case` statements within the clock edge block to implement state transitions and data capture.
*   For synchronous resets, place the reset check *inside* the clock edge condition.
*   For asynchronous resets, place the reset check *outside* (before) the clock edge condition.
*   Use `std_logic_vector` or appropriate numeric types (`unsigned`, `signed`) for state registers and data paths.
*   For FSMs, the three-process approach is common for synthesis tools to correctly infer flip-flops and combinational logic.

---

### 5. Data Types and Operations in VHDL

*   **Scalar Types:**
    *   `std_logic`, `std_logic_vector` (IEEE 1164)
    *   `boolean` (`TRUE`, `FALSE`)
    *   `bit`, `bit_vector`
    *   `integer`, `real`
    *   `character`
    *   Enumeration types (user-defined)
*   **Composite Types:**
    *   Arrays (`std_logic_vector`, user-defined arrays)
    *   Records (struct-like)
*   **Numeric Types:**
    *   `integer`, `real`
    *   `signed`, `unsigned` (from `numeric_std` library for arithmetic operations)
*   **Operations:**
    *   Logical: `and`, `or`, `xor`, `not`
    *   Relational: `=`, `/=`, `<`, `<=`, `>`, `>=`
    *   Shift: `sll`, `srl`, `sla`, `sra`, `rol`, `ror`
    *   Addition/Subtraction: `+`, `-` (from `numeric_std`)
    *   Multiplication/Division: `*`, `/` (from `numeric_std`)
    *   Concatenation: `&`

**Important Library:**

```vhdl
library IEEE;
use IEEE.STD_LOGIC_1164.ALL; -- For std_logic and std_logic_vector
use IEEE.NUMERIC_STD.ALL;   -- For arithmetic operations on unsigned/signed types
```

---

### 6. Common VHDL Pitfalls and Best Practices

*   **Unintended Latches:** Occur when a signal is assigned conditionally within a process, and there's a path where the signal is not assigned for certain input combinations.
    *   **Fix:** Ensure all signals assigned within a process are assigned a value in *every* possible execution path (e.g., using a `when others` in a `case` statement, or providing a default assignment before conditional assignments).
*   **Blocking vs. Non-blocking Assignments:**
    *   `:=` (Blocking): Variable assignment, updates immediately. Use for intermediate calculations within a process.
    *   `<=` (Non-blocking): Signal assignment, updates after the current simulation delta cycle. **Crucial for sequential logic** to model flip-flop behavior correctly.
*   **Sensitivity List Errors:** Missing signals from a process's sensitivity list can lead to simulation mismatches or incorrect synthesis.
    *   **Fix:** Always include all signals read within a process in its sensitivity list. For sequential processes, this is typically the clock and asynchronous control signals.
*   **Type Mismatches:** VHDL is strongly typed. Ensure operands of operators and assignments are of compatible types. Use explicit type conversions (`std_logic_vector(...)`, `unsigned(...)`, `resize(...)`).
*   **`wait` Statements in Combinational Logic:** Avoid `wait` statements in processes intended for combinational logic synthesis. Use concurrent signal assignments or ensure sensitivity lists are correct.
*   **Signal vs. Variable:**
    *   **Signals:** Represent physical wires. Their assignments are scheduled. Use for inter-process communication and outputs.
    *   **Variables:** Local to a process. Assignments are immediate. Use for temporary storage within a process.
*   **Referencing Textbooks:**
    *   **Mano & Ciletti:** Excellent for understanding the basic constructs and their mapping to hardware. Chapter 8 ("VHDL Description of Digital Circuits") and Chapter 9 ("Combinational Circuit Design") and Chapter 10 ("Sequential Circuit Design") are highly relevant.
    *   **Givone:** Provides foundational digital principles that VHDL describes.
    *   **Wakerly:** Offers a broad perspective on digital design, which VHDL implements.

---

### 7. Aligning with Course Outcomes

*   **CO1: Analyze asynchronous and clocked synchronous sequential circuits (Knowledge Level: K3)**
    *   VHDL constructs like `process` with `rising_edge`/`falling_edge` and `if/elsif` are used to model and analyze clocked synchronous sequential circuits. Asynchronous behavior is modeled using `if` statements sensitive to non-clock signals outside the `rising_edge` condition.
*   **CO2: Design hazard-free digital circuits (Knowledge Level: K3)**
    *   While VHDL itself doesn't directly prevent hazards, understanding combinational logic constructs (`case`, `with-select`, `if-else`) and proper signal assignments helps in writing synthesizable code that synthesis tools can optimize. Techniques like redundant gates are implicitly handled by synthesis tools when code is written correctly.
*   **CO4: Apply VHDL programming in digital system design (Knowledge Level: K3)**
    *   This entire topic is dedicated to applying VHDL constructs for both combinational and sequential circuits, which is fundamental to digital system design. Examples of multiplexers, flip-flops, and state machines demonstrate this application.

---

### 8. Practice Questions and Exercises

**Q1. Combinational Logic:** Write VHDL code for an 8-to-1 multiplexer using a `with-select` statement.
    *   **Inputs:** `i0` to `i7` (std_logic), `s` (std_logic_vector(2 downto 0))
    *   **Output:** `y` (std_logic)

**Q2. Combinational Logic:** Write VHDL code for a 3-bit adder. Assume inputs are `a`, `b`, `cin` (all std_logic_vector(2 downto 0)) and output is `sum`, `cout` (sum is std_logic_vector(2 downto 0), cout is std_logic). Use the `numeric_std` library.

**Q3. Sequential Logic:** Write VHDL code for a T flip-flop with an active-high synchronous reset.
    *   **Inputs:** `clk`, `t`, `rst`
    *   **Output:** `q`

**Q4. Sequential Logic (FSM):** Design a simple Moore FSM in VHDL that detects the sequence "101". The FSM has a single input `din` and a single output `match`. The `match` output should be '1' when the sequence "101" is detected, and '0' otherwise. The FSM should be clocked and have a synchronous reset.

---

### 9. Answers to Practice Questions

**A1. 8-to-1 Multiplexer:**

```vhdl
library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

entity mux_8_to_1 is
    port (
        i0 : in  std_logic;
        i1 : in  std_logic;
        i2 : in  std_logic;
        i3 : in  std_logic;
        i4 : in  std_logic;
        i5 : in  std_logic;
        i6 : in  std_logic;
        i7 : in  std_logic;
        s  : in  std_logic_vector(2 downto 0);
        y  : out std_logic
    );
end entity mux_8_to_1;

architecture dataflow of mux_8_to_1 is
begin
    y <= i0 when s = "000" else
         i1 when s = "001" else
         i2 when s = "010" else
         i3 when s = "011" else
         i4 when s = "100" else
         i5 when s = "101" else
         i6 when s = "110" else
         i7 when s = "111" else
         'X'; -- Default for undefined select value
end architecture dataflow;
```

**A2. 3-bit Adder:**

```vhdl
library IEEE;
use IEEE.STD_LOGIC_1164.ALL;
use IEEE.NUMERIC_STD.ALL; -- For unsigned arithmetic

entity adder_3bit is
    port (
        a    : in  std_logic_vector(2 downto 0);
        b    : in  std_logic_vector(2 downto 0);
        cin  : in  std_logic;
        sum  : out std_logic_vector(2 downto 0);
        cout : out std_logic
    );
end entity adder_3bit;

architecture behavioral of adder_3bit is
    signal extended_a : unsigned(3 downto 0);
    signal extended_b : unsigned(3 downto 0);
    signal sum_unsigned : unsigned(3 downto 0);
begin
    -- Extend inputs to accommodate carry
    extended_a <= unsigned('0' & a);
    extended_b <= unsigned('0' & b);

    -- Perform addition
    sum_unsigned <= extended_a + extended_b + unsigned('0' & cin);

    -- Assign outputs
    sum <= std_logic_vector(sum_unsigned(2 downto 0));
    cout <= sum_unsigned(3);

end architecture behavioral;
```
*Note: A simpler way for this specific problem is to use a process or signal assignment with `+` operator directly, assuming the compiler handles the carry correctly.*

```vhdl
library IEEE;
use IEEE.STD_LOGIC_1164.ALL;
use IEEE.NUMERIC_STD.ALL; -- For unsigned arithmetic

entity adder_3bit_direct is
    port (
        a    : in  std_logic_vector(2 downto 0);
        b    : in  std_logic_vector(2 downto 0);
        cin  : in  std_logic;
        sum  : out std_logic_vector(2 downto 0);
        cout : out std_logic
    );
end entity adder_3bit_direct;

architecture behavioral of adder_3bit_direct is
    signal temp_sum : unsigned(3 downto 0);
begin
    temp_sum <= unsigned(a) + unsigned(b) + unsigned(cin & "00"); -- Example of incorrect cin handling; need proper extension.
                                                                    -- Correct way:
    temp_sum <= resize(unsigned(a), 4) + resize(unsigned(b), 4) + resize(unsigned'("0" & cin), 4); -- Correct extension
    -- Or more directly:
    -- temp_sum <= unsigned("0" & a) + unsigned("0" & b) + unsigned("00" & cin); -- Simpler if cin is only 1 bit

    -- Let's use a more explicit approach for clarity and correctness:
    process(a, b, cin)
        variable v_a, v_b : unsigned(2 downto 0);
        variable v_sum    : unsigned(3 downto 0);
    begin
        v_a := unsigned(a);
        v_b := unsigned(b);
        v_sum := resize(v_a, 4) + resize(v_b, 4) + unsigned('0' & cin); -- Extend a and b to 4 bits, extend cin to 4 bits with 0s
        sum <= std_logic_vector(v_sum(2 downto 0));
        cout <= v_sum(3);
    end process;
end architecture behavioral;
```
*Correction*: The direct addition example had a slight issue with cin handling. The corrected version uses `resize` or manual extension for correctness. The first `extended_a/b` approach is more robust for demonstrating the concept.

**A3. T Flip-Flop (Synchronous Reset):**

```vhdl
library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

entity t_ff_sync_reset is
    port (
        clk   : in  std_logic;
        t     : in  std_logic;
        rst   : in  std_logic; -- Active high synchronous reset
        q     : out std_logic
    );
end entity t_ff_sync_reset;

architecture behavioral of t_ff_sync_reset is
    signal q_reg : std_logic := '0'; -- Initialize to '0'
begin
    process (clk)
    begin
        if rising_edge(clk) then
            if rst = '1' then
                q_reg <= '0';
            elsif t = '1' then
                q_reg <= not q_reg; -- Toggle output if t is high
            else
                q_reg <= q_reg;     -- Hold output if t is low
            end if;
        end if;
    end process;

    q <= q_reg;
end architecture behavioral;
```

**A4. Sequence Detector "101" (Moore FSM):**

```vhdl
library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

entity sequence_detector_101_moore is
    port (
        clk   : in  std_logic;
        rst   : in  std_logic; -- Active high synchronous reset
        din   : in  std_logic;
        match : out std_logic
    );
end entity sequence_detector_101_moore;

architecture fsm of sequence_detector_101_moore is

    -- Define states
    type state_type is (IDLE, GOT_1, GOT_10, GOT_101);
    signal current_state : state_type := IDLE;
    signal next_state    : state_type := IDLE;

begin

    -- State Register Process (Flip-flops)
    process (clk)
    begin
        if rising_edge(clk) then
            if rst = '1' then
                current_state <= IDLE;
            else
                current_state <= next_state;
            end if;
        end if;
    end process;

    -- Next-State Logic Process (Combinational)
    process (current_state, din)
    begin
        case current_state is
            when IDLE =>
                if din = '1' then
                    next_state <= GOT_1;
                else
                    next_state <= IDLE;
                end if;

            when GOT_1 =>
                if din = '0' then
                    next_state <= GOT_10;
                else -- din = '1'
                    next_state <= GOT_1; -- Still have a '1'
                end if;

            when GOT_10 =>
                if din = '1' then
                    next_state <= GOT_101;
                else -- din = '0'
                    next_state <= IDLE; -- Sequence broken
                end if;

            when GOT_101 => -- Sequence detected
                -- For a Moore machine, the output is determined by the state.
                -- The next state depends on the new input.
                if din = '1' then
                    next_state <= GOT_1; -- Can start a new "101" sequence
                else -- din = '0'
                    next_state <= IDLE;
                end if;

            when others =>
                next_state <= IDLE; -- Should not happen
        end case;
    end process;

    -- Output Logic Process (Moore - output depends only on current state)
    process (current_state)
    begin
        case current_state is
            when GOT_101 => match <= '1';
            when others  => match <= '0';
        end case;
    end process;

end architecture fsm;
```

---

### 10. Important Points to Remember

*   **Libraries:** Always include `library IEEE; use IEEE.STD_LOGIC_1164.ALL;` and `use IEEE.NUMERIC_STD.ALL;` for robust design.
*   **Signals vs. Variables:** Understand their difference in assignment and scope. Use signals for outputs and inter-process communication; variables for internal process calculations.
*   **Combinational Logic:** Ensure complete assignments to avoid unintended latches. Use concurrent assignments or processes sensitive to all inputs.
*   **Sequential Logic:** Use processes sensitive to the clock edge. Use non-blocking assignments (`<=`) for flip-flops/registers. Handle resets correctly (synchronous vs. asynchronous).
*   **FSMs:** The three-process architecture is standard for synthesis. Clearly define states and transitions.
*   **Synthesizability:** Write VHDL with synthesis in mind. Avoid constructs that are hard or impossible to synthesize (e.g., `wait for`, `transport` delays, certain `for` loops that infer memories rather than combinational logic).

---
This concludes the detailed study notes for VHDL constructs and codes for combinational and sequential circuits. Refer to the provided textbooks for deeper explanations and additional examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
