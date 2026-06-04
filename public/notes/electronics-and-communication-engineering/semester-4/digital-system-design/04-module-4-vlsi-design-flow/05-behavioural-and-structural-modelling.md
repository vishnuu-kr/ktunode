---
title: "Behavioural and Structural Modelling"
subject: "DIGITAL SYSTEM DESIGN"
module: "Module 4: VLSI Design flow"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe725"
status: "completed"
scrapedAt: "2026-05-23T17:47:58.767Z"
---
# DIGITAL SYSTEM DESIGN

## Module 4: VLSI Design Flow

### Topic: Behavioural and Structural Modelling

---

**Learning Outcomes:**

*   Understand the fundamental differences between behavioural and structural modelling.
*   Learn to describe digital systems at a high level of abstraction (behavioural).
*   Learn to describe digital systems by explicitly instantiating components and their interconnections (structural).
*   Recognize the advantages and disadvantages of each modelling style.
*   Apply behavioural and structural modelling concepts using Hardware Description Languages (HDLs) like VHDL or Verilog.
*   Understand how behavioural and structural models contribute to different stages of the VLSI design flow.

---

**Course Outcomes Alignment:**

*   **CO1: Analyze asynchronous and clocked synchronous sequential circuits:** Behavioural modelling can describe the sequential behavior of circuits, aiding in analysis. Structural modelling allows for the detailed construction and analysis of these circuits by connecting primitive gates or sub-modules. (Knowledge Level: K3)
*   **CO4: Apply VHDL programming in digital system design:** This topic directly focuses on applying VHDL (or Verilog) for both behavioural and structural modelling, which is a core skill for digital system design. (Knowledge Level: K3)

---

### 1. Introduction to Modelling in VLSI Design

In VLSI design, modelling refers to the process of creating an abstract representation of a digital system. This representation can be used for simulation, synthesis, and verification. Different levels of abstraction are used throughout the design process, and **behavioural** and **structural** modelling are two fundamental approaches.

*   **Importance of Modelling:**
    *   **Abstraction:** Allows designers to focus on different aspects of the design at different stages.
    *   **Simulation:** Enables verification of functionality before committing to hardware.
    *   **Synthesis:** Translates a high-level description into a gate-level netlist.
    *   **Reusability:** Modular descriptions can be reused across projects.

---

### 2. Behavioural Modelling

**Concept:**

Behavioural modelling describes **what** a digital system does, focusing on its functionality and algorithm, without specifying the underlying hardware implementation details. It's like describing the "recipe" for the system. This is a high-level of abstraction.

**Key Characteristics:**

*   **Focus:** Functionality, algorithm, data flow.
*   **Abstraction Level:** High.
*   **Description Style:** Uses constructs like sequential statements (if-else, case, loop), arithmetic operations, and data manipulation.
*   **Hardware Independent:** The same behavioural description can be synthesized into different hardware implementations.
*   **Readability:** Generally more readable for understanding the system's logic.
*   **Simulation Speed:** Typically faster for simulation as it doesn't involve detailed gate-level interactions.

**Commonly Used for:**

*   Algorithm development.
*   Early-stage functional verification.
*   High-level design exploration.
*   Describing complex sequential logic or state machines.

**HDL Constructs (VHDL Example):**

*   **Processes:** A block of sequential statements that execute when a sensitivity list event occurs.
*   **Signals and Variables:** Used to store and transfer data.
*   **Sequential Statements:**
    *   `if-then-else`: Conditional execution.
    *   `case`: Multi-way branching.
    *   `loop`: Repetitive execution.
    *   Assignment statements (`<=` for signals, `:=` for variables).

**Example (VHDL - Behavioural Description of a 4-bit Adder):**

```vhdl
-- Library declaration
library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all; -- For unsigned addition

-- Entity declaration
entity behavioral_adder_4bit is
    port (
        A : in  unsigned(3 downto 0);
        B : in  unsigned(3 downto 0);
        Cin : in  std_logic;
        Sum : out unsigned(3 downto 0);
        Cout : out std_logic
    );
end entity behavioral_adder_4bit;

-- Architecture declaration
architecture behavioral of behavioral_adder_4bit is
    signal sum_internal : unsigned(4 downto 0); -- Intermediate signal to capture carry
begin

    process (A, B, Cin)
    begin
        -- Perform addition. Need to extend A and B if Cin is std_logic
        -- A more robust way is to convert Cin to unsigned
        -- For simplicity, let's assume Cin is handled appropriately or use a different approach
        -- Let's adjust for Cin being std_logic

        -- Create a temporary unsigned value for Cin
        declare
            variable cin_val : unsigned(0 downto 0);
        begin
            if Cin = '1' then
                cin_val := "1";
            else
                cin_val := "0";
            end if;

            -- Perform the addition using unsigned types
            sum_internal <= unsigned('0' & A) + unsigned('0' & B) + cin_val;
        end;
    end process;

    Sum <= sum_internal(3 downto 0);
    Cout <= sum_internal(4);

end architecture behavioral;
```

**Textbook Reference:**

*   **Mano & Ciletti (6/e):** Chapter 10, "Behavioural Modelling" and Chapter 11, "Dataflow and Behavioural Modelling." This section would cover the use of processes, sequential statements, and the difference between signals and variables in VHDL.
*   **Givone (1/e):** While not HDL-centric, it discusses sequential logic design which is the basis for behavioural descriptions of state machines and data paths.

---

### 3. Structural Modelling

**Concept:**

Structural modelling describes a digital system as a **connection of interconnected components** (also known as entities or modules). It's like describing the "building blocks" and how they are wired together. This is a low-level of abstraction compared to behavioural.

**Key Characteristics:**

*   **Focus:** Interconnections of components, architecture.
*   **Abstraction Level:** Low to Medium.
*   **Description Style:** Uses instantiation of other modules/entities (primitives or previously defined modules) and connecting their ports.
*   **Hardware Specific:** Directly maps to a netlist of components.
*   **Readability:** Good for understanding the physical layout or the composition of a system from its sub-parts.
*   **Simulation Speed:** Can be slower for complex designs due to detailed component interactions.

**Commonly Used for:**

*   Hierarchical design.
*   Connecting pre-designed modules.
*   Describing systems built from standard logic gates.
*   Bottom-up design approach.

**HDL Constructs (VHDL Example):**

*   **Component Declaration:** Declares the interface (ports) of a sub-module that will be instantiated.
*   **Component Instantiation:** Creating an instance of a component and mapping its ports to signals in the current design.
*   **Signals:** Used to connect the ports of instantiated components.

**Example (VHDL - Structural Description of a 4-bit Adder using Full Adders):**

First, let's define a `full_adder` component (either behavioural or structural itself):

```vhdl
-- Entity for a single Full Adder
entity full_adder is
    port (
        a, b, cin : in  std_logic;
        sum, cout : out std_logic
    );
end entity full_adder;

-- Architecture for a single Full Adder (behavioural)
architecture behavioral of full_adder is
begin
    process (a, b, cin)
    begin
        sum <= a xor b xor cin;
        cout <= (a and b) or (a and cin) or (b and cin);
    end process;
end architecture behavioral;
```

Now, the structural description of the 4-bit adder using the `full_adder` component:

```vhdl
-- Library declaration
library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all; -- For unsigned addition (can also be done with std_logic bits)

-- Entity declaration
entity structural_adder_4bit is
    port (
        A : in  std_logic_vector(3 downto 0);
        B : in  std_logic_vector(3 downto 0);
        Cin : in  std_logic;
        Sum : out std_logic_vector(3 downto 0);
        Cout : out std_logic
    );
end entity structural_adder_4bit;

-- Architecture declaration
architecture structural of structural_adder_4bit is
    -- Declare the component to be instantiated
    component full_adder
        port (
            a, b, cin : in  std_logic;
            sum, cout : out std_logic
        );
    end component;

    -- Internal signals to connect the full adders
    signal c : std_logic_vector(3 downto 0); -- Carry signals between stages

begin

    -- Instantiate the first full adder (LSB)
    FA0 : full_adder
        port map (
            a => A(0),
            b => B(0),
            cin => Cin,
            sum => Sum(0),
            cout => c(0) -- Carry out of FA0 becomes carry in for FA1
        );

    -- Instantiate the second full adder
    FA1 : full_adder
        port map (
            a => A(1),
            b => B(1),
            cin => c(0), -- Carry in from FA0
            sum => Sum(1),
            cout => c(1) -- Carry out of FA1 becomes carry in for FA2
        );

    -- Instantiate the third full adder
    FA2 : full_adder
        port map (
            a => A(2),
            b => B(2),
            cin => c(1), -- Carry in from FA1
            sum => Sum(2),
            cout => c(2) -- Carry out of FA2 becomes carry in for FA3
        );

    -- Instantiate the fourth full adder (MSB)
    FA3 : full_adder
        port map (
            a => A(3),
            b => B(3),
            cin => c(2), -- Carry in from FA2
            sum => Sum(3),
            cout => Cout -- Final carry out
        );

end architecture structural;
```

**Textbook Reference:**

*   **Mano & Ciletti (6/e):** Chapter 9, "Structure Modelling" and Chapter 10, "Behavioural Modelling." This section will cover component declarations, instantiation, and port mapping.
*   **Wakerly (4/e):** Discusses the hierarchical design approach, which is strongly supported by structural modelling. It would cover how to break down a complex system into smaller, manageable functional blocks.
*   **Yarbrough (1/e):** Likely covers structural descriptions as a fundamental way to represent digital circuits using gates and flip-flops.

---

### 4. Comparison: Behavioural vs. Structural Modelling

| Feature           | Behavioural Modelling                      | Structural Modelling                                |
| :---------------- | :----------------------------------------- | :-------------------------------------------------- |
| **Abstraction**   | High (What it does)                        | Low to Medium (How it's built)                      |
| **Focus**         | Algorithm, Functionality                   | Interconnections, Components                        |
| **Readability**   | Good for logic/algorithm understanding     | Good for understanding composition/hierarchy        |
| **Hardware Detail** | None                                       | Explicitly defined by components                    |
| **Flexibility**   | High (can synthesize to various hardware)  | Low (tied to specific component implementations)    |
| **Simulation**    | Faster, easier for functional verification | Slower, can be complex due to detailed connections  |
| **Synthesis**     | Directly synthesizable into various logic  | Synthesis depends on the components being synthesized |
| **Design Style**  | Top-down, algorithm-driven                 | Bottom-up, component-driven                         |

---

### 5. Hybrid Modelling

In practice, complex designs often use a **hybrid approach**, combining behavioural and structural descriptions.

*   High-level functionalities might be described behaviourally.
*   These behavioural blocks are then instantiated and interconnected structurally.
*   Alternatively, a complex system might be structurally composed of several sub-modules, where each sub-module is described behaviourally.

This allows designers to leverage the benefits of both abstraction levels at different parts of the design.

---

### 6. Advantages and Disadvantages

**Behavioural Modelling:**

*   **Advantages:**
    *   Faster design cycle for initial functionality.
    *   Easier for high-level simulation and verification.
    *   Promotes code reusability and design independence from specific implementation technologies.
    *   Abstraction simplifies complex logic description.
*   **Disadvantages:**
    *   Synthesis results may not be optimal if not guided properly.
    *   Can mask timing issues or physical implementation constraints if not carefully managed.
    *   Requires understanding of synthesis tools to predict hardware outcomes.

**Structural Modelling:**

*   **Advantages:**
    *   Provides a clear view of the design's architecture.
    *   Good for verifying connectivity and integration of pre-designed blocks.
    *   Can be more deterministic for synthesis when using well-defined components.
    *   Directly maps to netlists.
*   **Disadvantages:**
    *   Can become very verbose and complex for large designs.
    *   Less flexible if component interfaces change.
    *   Higher effort to modify the fundamental logic of a component.
    *   Debugging connectivity issues can be challenging.

---

### 7. Role in VLSI Design Flow

Both behavioural and structural modelling play crucial roles at different stages of the VLSI design flow:

1.  **Specification & Design Entry:** Behavioural modelling is often used to capture the intended functionality and algorithms early on.
2.  **Functional Verification:** Behavioural models are excellent for simulating the design's behavior and verifying its correctness against specifications.
3.  **Synthesis:** Behavioural descriptions are typically synthesized into a gate-level netlist. Structural models (composed of primitive gates) are already close to the netlist.
4.  **Post-Synthesis Simulation:** Structural models of the synthesized netlist are used for accurate timing simulation.
5.  **Layout & Routing:** The structural representation is essential for mapping the design onto silicon.

*   **Mano & Ciletti (6/e):** Emphasizes how different modelling styles are used for different purposes, such as behavioral for algorithm description and structural for connecting predefined blocks.
*   **Givone (1/e) & Wakerly (4/e):** Discuss the progression from functional specification to logic design, where behavioural descriptions are converted into more structured implementations (which can then be represented structurally).

---

### 8. Practice Questions

**Question 1 (Conceptual):**

Explain the primary difference between behavioural and structural modelling in digital system design using an analogy.

**Answer:**
An analogy could be building a house.
*   **Behavioural Modelling:** Describing what the house does: "This house provides shelter, allows people to sleep, cook, and relax." It focuses on the functions without specifying the materials or construction methods.
*   **Structural Modelling:** Describing how the house is built: "The house is made of a foundation, four walls (each built with bricks and cement), a roof (made of tiles), and windows and doors connecting the interior spaces." It details the components and their interconnections.

**Question 2 (VHDL - Behavioural):**

Write a behavioural VHDL description for a 2-to-1 multiplexer.

**Answer:**
```vhdl
library ieee;
use ieee.std_logic_1164.all;

entity behavioral_mux_2to1 is
    port (
        i0, i1, sel : in  std_logic;
        out_mux     : out std_logic
    );
end entity behavioral_mux_2to1;

architecture behavioral of behavioral_mux_2to1 is
begin
    process (i0, i1, sel)
    begin
        if sel = '0' then
            out_mux <= i0;
        elsif sel = '1' then
            out_mux <= i1;
        else
            -- Handle invalid select value, e.g., set to 'X'
            out_mux <= 'X';
        end if;
    end process;
end architecture behavioral;
```

**Question 3 (VHDL - Structural):**

Assuming you have a behavioural VHDL description for a `full_adder` entity (as shown in the notes), write a structural VHDL description for a 2-bit ripple-carry adder using two `full_adder` components.

**Answer:**
```vhdl
library ieee;
use ieee.std_logic_1164.all;

-- Assume full_adder entity is defined elsewhere or in the same file

entity structural_adder_2bit is
    port (
        A   : in  std_logic_vector(1 downto 0);
        B   : in  std_logic_vector(1 downto 0);
        Cin : in  std_logic;
        Sum : out std_logic_vector(1 downto 0);
        Cout: out std_logic
    );
end entity structural_adder_2bit;

architecture structural of structural_adder_2bit is
    -- Declare the component to be instantiated
    component full_adder
        port (
            a, b, cin : in  std_logic;
            sum, cout : out std_logic
        );
    end component;

    -- Internal signal for carry between the two full adders
    signal carry_bits : std_logic_vector(1 downto 0);

begin

    -- Instantiate the first full adder (LSB)
    FA0 : full_adder
        port map (
            a => A(0),
            b => B(0),
            cin => Cin,
            sum => Sum(0),
            cout => carry_bits(0) -- Carry out of FA0
        );

    -- Instantiate the second full adder (MSB)
    FA1 : full_adder
        port map (
            a => A(1),
            b => B(1),
            cin => carry_bits(0), -- Carry in from FA0
            sum => Sum(1),
            cout => Cout        -- Final carry out
        );

end architecture structural;
```

---

### 9. Important Points to Remember

*   **Abstraction is Key:** Choose the modelling style that best suits the current design stage and purpose.
*   **Behavioural for Functionality:** Use behavioural to describe *what* the circuit does.
*   **Structural for Interconnections:** Use structural to describe *how* components are connected.
*   **Synthesis Target:** Behavioural descriptions are the primary input for synthesis tools to generate hardware.
*   **Verification Tool:** Both are used for simulation, but at different levels of detail.
*   **Hierarchy:** Structural modelling naturally supports hierarchical design by instantiating sub-modules.
*   **HDL Choice:** The concepts apply to both VHDL and Verilog, though syntax differs.

---
This comprehensive study note covers the core concepts of behavioural and structural modelling, their characteristics, advantages, disadvantages, and roles in the VLSI design flow, with VHDL examples and practice questions aligned with the learning outcomes and course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
