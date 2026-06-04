---
title: "Flip-Flops and Simple Flip-Flop Applications"
subject: "DIGITAL SYSTEMS AND VLSI DESIGN"
module: "Module 3: Hazards – static and dynamic hazards in combinational networks"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe75e"
status: "completed"
scrapedAt: "2026-05-23T17:48:16.614Z"
---
## DIGITAL SYSTEMS AND VLSI DESIGN

### Module 3: Hazards – Static and Dynamic Hazards in Combinational Networks
#### Topic: Flip-Flops and Simple Flip-Flop Applications

---

**Course Outcomes Addressed:**

*   **CO1 (K3):** Design, analyze, and model clocked synchronous sequential networks (CSSNs), optimize state assignment and reduction, and effectively utilize ASM charts for the realization of complex digital systems.
*   **CO2 (K3):** Design and analyze asynchronous sequential circuits (ASCs), perform flow table reduction, address race conditions and state assignment problems, and design both ASCs and Arithmetic Logic Units (ALUs).
*   **CO3 (K2):** Identify and mitigate static and dynamic hazards in combinational networks, design hazard-free circuits, address practical issues in digital systems and apply fault detection and testing methods.
*   **CO4 (K2):** Explain the VLSI design flow, utilize various design entry methods, apply different VHDL modeling styles, and develop and simulate VHDL constructs for combinational and sequential circuits.

---

### 1. Introduction to Sequential Logic and Flip-Flops

Sequential circuits are characterized by their memory elements, which store past states and influence future outputs. This contrasts with combinational circuits, whose outputs depend solely on current inputs. Flip-flops are fundamental building blocks of sequential circuits, acting as the basic memory elements.

**Key Concepts:**

*   **Sequential Circuits:** Circuits with memory, where outputs depend on both current inputs and the past sequence of inputs.
*   **State:** The current condition or value stored in the memory elements of a sequential circuit.
*   **Memory Element:** A circuit capable of storing one bit of information. Flip-flops are a primary example.
*   **Clock Signal:** A periodic signal that synchronizes the operations of sequential circuits. State changes typically occur on the rising or falling edge of the clock.

**Reference:**

*   **Givone (2017), Chapter 8: Sequential Networks:** Introduces the concepts of sequential circuits, state tables, state diagrams, and basic memory elements.
*   **Wakerly (2008), Chapter 5: Flip-Flops and Related Devices:** Provides a detailed treatment of various flip-flop types, their operation, and characteristic equations.
*   **Mano & Ciletti (2017), Chapter 5: Sequential Logic:** Covers the fundamentals of sequential circuits, state machines, and flip-flop implementations.

---

### 2. Basic Memory Elements: Latches and Flip-Flops

While often used interchangeably, latches and flip-flops have distinct behaviors regarding clocking.

#### 2.1 Latches

Latches are level-sensitive memory elements. Their output can change whenever the enable signal is active and the input changes.

*   **SR Latch:**
    *   **Inputs:** S (Set), R (Reset), Q, Q' (Outputs)
    *   **Operation:**
        *   S=0, R=0: Hold state (Q remains unchanged).
        *   S=1, R=0: Set state (Q=1, Q'=0).
        *   S=0, R=1: Reset state (Q=0, Q'=1).
        *   S=1, R=1: Invalid/Forbidden state (Q and Q' are both 1, leading to unpredictable behavior when returning to a valid state).
    *   **Nor Implementation:** Typically implemented using two cross-coupled NOR gates.
    *   **Nand Implementation:** Can also be implemented using two cross-coupled NAND gates (with inverted inputs).
    *   **Characteristic Equation (NOR implementation):** $Q_{next} = S + R'Q$ (for S=0, R=0)
    *   **Important Note:** SR latches are prone to the invalid state.

*   **Gated SR Latch:**
    *   Adds an Enable (E) input to control when the latch can change state.
    *   When E=1, the latch behaves as an SR latch.
    *   When E=0, the latch holds its current state.

*   **D Latch (Data Latch):**
    *   **Inputs:** D (Data), E (Enable)
    *   **Operation:** When E=1, Q = D. When E=0, Q holds its previous value.
    *   **Implementation:** Often derived from an SR latch by feeding D to S and D' to R.
    *   **Characteristic Equation:** $Q_{next} = D \cdot E + Q \cdot E'$
    *   **Use:** Captures the data value when enabled.

**Example (SR Latch):**

Consider an SR latch with S=1 and R=0. The output Q becomes 1. If S transitions to 0 while R remains 0, the latch will hold Q=1. If R transitions to 1 while S is 0, Q becomes 0.

**Reference:**

*   **Yarbrough (2006), Chapter 7: Sequential Logic Devices:** Discusses latches, their operation, and implementations.
*   **Lee (1980), Chapter 5: Bistable Elements:** Covers the fundamental bistable memory elements, including latches.

---

#### 2.2 Flip-Flops

Flip-flops are edge-sensitive memory elements. Their state changes only at the active transition (rising or falling edge) of a clock signal. This synchronized behavior is crucial for building synchronous sequential circuits.

*   **Clocked SR Flip-Flop:**
    *   Adds a clock input to the SR latch.
    *   The SR inputs only affect the output at the active clock edge.
    *   Still suffers from the invalid S=1, R=1 condition.

*   **D Flip-Flop (Data Flip-Flop):**
    *   **Inputs:** D (Data), CLK (Clock)
    *   **Operation:** On the active clock edge, $Q_{next} = D$.
    *   **Characteristic Equation:** $Q_{next} = D$ (at the active clock edge)
    *   **Implementation:** Can be built using gated D latches or more complex master-slave configurations to avoid timing issues.
    *   **Key Feature:** Simple and widely used for data storage.

*   **JK Flip-Flop:**
    *   **Inputs:** J (Set), K (Reset), CLK (Clock)
    *   **Operation:**
        *   J=0, K=0: Hold state.
        *   J=1, K=0: Set state ($Q_{next}=1$).
        *   J=0, K=1: Reset state ($Q_{next}=0$).
        *   J=1, K=1: Toggle state ($Q_{next}=Q'$). This is the advantage over SR flip-flops.
    *   **Characteristic Equation:** $Q_{next} = JQ' + K'Q$ (at the active clock edge)
    *   **Advantage:** Can be made to toggle, making it more versatile than SR or D flip-flops.

*   **T Flip-Flop (Toggle Flip-Flop):**
    *   **Inputs:** T (Toggle), CLK (Clock)
    *   **Operation:**
        *   T=0: Hold state.
        *   T=1: Toggle state ($Q_{next}=Q'$).
    *   **Characteristic Equation:** $Q_{next} = T \oplus Q$ (at the active clock edge)
    *   **Implementation:** Can be easily constructed from a JK flip-flop by connecting J and K together.
    *   **Use:** Frequency division, counters.

*   **Master-Slave Flip-Flops:**
    *   A common implementation to prevent the "racing" condition where intermediate outputs affect the next clock edge.
    *   Consists of two stages: a master latch and a slave latch.
    *   The master follows the input on the first half of the clock pulse, and the slave follows the master on the second half.

**Edge-Triggered vs. Level-Triggered:**

*   **Level-Triggered (Latches):** Output changes anytime the enable is active and the input changes.
*   **Edge-Triggered (Flip-Flops):** Output changes only at the specific transition of the clock signal (rising or falling edge). This is generally preferred for synchronous design.

**Important Points to Remember:**

*   Flip-flops are **edge-triggered**, ensuring predictable state transitions synchronized by the clock.
*   The **characteristic equation** defines the next state of a flip-flop based on its current state and inputs.
*   **JK flip-flops** are the most versatile due to their toggle capability.

**Reference:**

*   **Mano & Ciletti (2017), Chapter 5: Sequential Logic:** Details D, JK, and T flip-flops, including their characteristic equations and state tables.
*   **Wakerly (2008), Chapter 5: Flip-Flops and Related Devices:** Provides extensive coverage of flip-flop types, including timing parameters like setup and hold times.

---

### 3. Flip-Flop Applications

Flip-flops are essential for building various sequential circuits, including:

#### 3.1 Registers

A register is a group of flip-flops used to store a binary word. Each flip-flop stores one bit of the word.

*   **Parallel Load Register:** Can load data in parallel to all flip-flops simultaneously.
*   **Shift Register:** Allows data to be shifted from one flip-flop to another, either left or right.
    *   **Serial-In, Serial-Out (SISO):** Data enters serially and exits serially.
    *   **Serial-In, Parallel-Out (SIPO):** Data enters serially and exits in parallel.
    *   **Parallel-In, Serial-Out (PISO):** Data enters in parallel and exits serially.
    *   **Parallel-In, Parallel-Out (PIPO):** Data is loaded and read in parallel (essentially a simple storage register).
*   **Bidirectional Shift Register:** Can shift data in both directions.

**Example (4-bit Parallel Load Register):**

A 4-bit register can be implemented using four D flip-flops. Each D input would be connected to the corresponding bit of the data to be stored. A common clock signal and an enable signal would control when the data is loaded.

**CO Alignment:** CO1 (Designing CSSNs). Registers are fundamental components in counters, state machines, and other synchronous systems.

**Reference:**

*   **Givone (2017), Chapter 9: Registers, Counters, and Memory Units:** Explains the implementation and applications of registers.
*   **Wakerly (2008), Chapter 6: Registers and Counters:** Provides detailed examples of shift registers and their applications.

#### 3.2 Counters

Counters are sequential circuits that cycle through a predetermined sequence of states.

*   **Asynchronous (Ripple) Counters:**
    *   The output of one flip-flop clocks the next flip-flop.
    *   **Pros:** Simple to design.
    *   **Cons:** Prone to cumulative propagation delay, leading to glitches and inaccuracies, especially in fast systems. Not suitable for high-speed applications.
*   **Synchronous Counters:**
    *   All flip-flops share a common clock signal.
    *   The next state of each flip-flop is determined by combinational logic based on the current state and control inputs.
    *   **Pros:** Faster and more reliable than ripple counters as all state changes occur simultaneously.
    *   **Types:**
        *   **Up Counter:** Counts in increasing order.
        *   **Down Counter:** Counts in decreasing order.
        *   **Up/Down Counter:** Can count in either direction based on a control input.
        *   **Modulo-n Counter:** Counts up to a maximum value of n-1 and then resets.

**Example (3-bit Synchronous Up Counter using JK Flip-Flops):**

| Current State (Q2 Q1 Q0) | Next State (Q2 Q1 Q0) | J2 | K2 | J1 | K1 | J0 | K0 |
| :----------------------- | :-------------------- | :- | :- | :- | :- | :- | :- |
| 000                      | 001                   | 0  | 0  | 0  | 0  | 1  | 1  |
| 001                      | 010                   | 0  | 0  | 1  | 1  | 0  | 0  |
| 010                      | 011                   | 0  | 0  | 0  | 0  | 1  | 1  |
| 011                      | 100                   | 1  | 1  | 0  | 0  | 0  | 0  |
| 100                      | 101                   | 0  | 0  | 0  | 0  | 1  | 1  |
| 101                      | 110                   | 0  | 0  | 1  | 1  | 0  | 0  |
| 110                      | 111                   | 0  | 0  | 0  | 0  | 1  | 1  |
| 111                      | 000                   | 1  | 1  | 0  | 0  | 0  | 0  |

The J and K inputs are derived from the current state using Karnaugh maps. For example, $J_0 = 1$ and $K_0 = 1$ (toggle) whenever $Q_0$ is the LSB. $J_1$ is 1 when $Q_0=1$. $J_2$ is 1 when $Q_1=1$ and $Q_0=1$.

**CO Alignment:** CO1 (Designing CSSNs). Counters are foundational elements for controlling sequences of operations in digital systems.

**Reference:**

*   **Mano & Ciletti (2017), Chapter 5: Sequential Logic:** Discusses the design of various counters.
*   **Givone (2017), Chapter 9: Registers, Counters, and Memory Units:** Covers ripple and synchronous counters.

#### 3.3 State Machines (Finite State Machines - FSMs)

Flip-flops are used to store the current state of a finite state machine. The FSM's output and next state are determined by the current state and the inputs, synchronized by a clock.

*   **Moore Machine:** Output depends only on the current state.
*   **Mealy Machine:** Output depends on the current state and the current input.

**Example (Simple Traffic Light Controller - Mealy Machine):**

A simple Mealy machine can control a traffic light. States could represent different phases (e.g., Green, Yellow, Red). Inputs could be sensors detecting cars. The outputs would be the signals to the lights (Red, Yellow, Green). Flip-flops would store the current state (e.g., Green for North-South).

**CO Alignment:** CO1 (Designing CSSNs). Flip-flops are the core memory elements that define the states in FSMs.

**Reference:**

*   **Wakerly (2008), Chapter 7: State Machines:** Explains how flip-flops are used to implement FSMs.
*   **Kohavi & Jha (2009), Chapter 6: Finite-State Machines:** Provides theoretical foundations for FSMs and their implementation.

---

### 4. Relationship to Hazards (Module 3 Context)

While flip-flops themselves are synchronized, the combinational logic feeding into them or generated by them can be susceptible to hazards.

*   **Static Hazards:** Occur in combinational logic when a single input changes, causing the output to momentarily glitch before settling to its correct steady state. This can happen in a "1-state" or "0-state" circuit.
    *   **Impact on Flip-Flops:** If the combinational logic driving the D input of a D flip-flop has a static hazard, the flip-flop might momentarily change its state incorrectly at the clock edge.
*   **Dynamic Hazards:** Occur when an output changes multiple times for a single input change, before settling to its final value. This implies the presence of multiple paths with different propagation delays in the combinational logic.
    *   **Impact on Flip-Flops:** Similar to static hazards, dynamic hazards can cause erroneous state transitions if they occur near the clock edge.

**Mitigation:**

*   **Hazard-Free Design:** Techniques like using K-maps with essential prime implicants and adding redundant terms can eliminate static hazards.
*   **Glitches:** Careful circuit design, including proper fan-in and fan-out, and using hazard-free gates can reduce glitches.
*   **Synchronous Design:** The edge-triggering nature of flip-flops inherently helps in synchronizing state changes, making the system less sensitive to minor glitches that occur away from the clock edge. However, significant glitches occurring close to the clock edge can still cause problems.
*   **Double-Edged Flip-Flops or Latches:** In some asynchronous designs or for specific timing requirements, latches might be used, making them more susceptible to hazards.

**CO Alignment:** CO3 (Identify and mitigate static and dynamic hazards). This topic highlights how flip-flops are integrated into larger systems where hazard mitigation is crucial for correct operation.

**Reference:**

*   **Givone (2017), Chapter 7: Hazards in Combinational Circuits:** Explains the causes and remedies for static and dynamic hazards.
*   **Yarbrough (2006), Chapter 6: Hazards and Glitches:** Discusses the practical implications of hazards in digital systems.

---

### 5. VHDL Modeling of Flip-Flops and Applications

Flip-flops are fundamental building blocks in VHDL for modeling sequential circuits.

*   **D Flip-Flop:**
    ```vhdl
    entity d_flip_flop is
        port (
            clk : in std_logic;
            d   : in std_logic;
            q   : out std_logic
        );
    end entity d_flip_flop;

    architecture behavioral of d_flip_flop is
    begin
        process (clk)
        begin
            if rising_edge(clk) then
                q <= d;
            end if;
        end process;
    end architecture behavioral;
    ```

*   **JK Flip-Flop:**
    ```vhdl
    entity jk_flip_flop is
        port (
            clk : in std_logic;
            j   : in std_logic;
            k   : in std_logic;
            q   : out std_logic
        );
    end entity jk_flip_flop;

    architecture behavioral of jk_flip_flop is
        signal q_internal : std_logic := '0'; -- Initialize to 0
    begin
        process (clk)
        begin
            if rising_edge(clk) then
                if j = '1' and k = '0' then
                    q_internal <= '1';
                elsif j = '0' and k = '1' then
                    q_internal <= '0';
                elsif j = '1' and k = '1' then
                    q_internal <= not q_internal; -- Toggle
                end if;
                -- If j='0' and k='0', q_internal remains unchanged
            end if;
            q <= q_internal;
        end process;
    end architecture behavioral;
    ```

*   **Register (4-bit):**
    ```vhdl
    entity register_4bit is
        port (
            clk   : in std_logic;
            load  : in std_logic; -- Enable for loading
            data_in : in std_logic_vector(3 downto 0);
            data_out : out std_logic_vector(3 downto 0)
        );
    end entity register_4bit;

    architecture behavioral of register_4bit is
        signal reg_data : std_logic_vector(3 downto 0) := (others => '0');
    begin
        process (clk)
        begin
            if rising_edge(clk) then
                if load = '1' then
                    reg_data <= data_in;
                end if;
            end if;
        end process;
        data_out <= reg_data;
    end architecture behavioral;
    ```

**CO Alignment:** CO4 (Explain the VLSI design flow, utilize various design entry methods, apply different VHDL modeling styles, and develop and simulate VHDL constructs for combinational and sequential circuits). This section directly addresses the VHDL modeling of flip-flops and their applications.

**Reference:**

*   **Haskell & Hanna (2019), Introduction to Digital Design Using Digilent FPGA Boards: Block Diagram / VHDL Examples:** Provides practical VHDL examples for flip-flops and sequential circuits.
*   **Anand (2013), Digital System Design Using VHDL:** Offers comprehensive guidance on VHDL modeling for sequential logic.
*   **Roth & John (2012), Digital System Design Using VHDL:** Covers various VHDL constructs for designing digital systems.

---

### 6. Summary and Key Takeaways

*   **Flip-flops** are edge-sensitive memory elements essential for building synchronous sequential circuits.
*   Common flip-flop types include **D, JK, and T flip-flops**, each with unique functionalities.
*   **Registers** use flip-flops to store binary words, enabling data storage and manipulation.
*   **Counters** are sequential circuits that cycle through states, implemented using flip-flops.
*   Flip-flops are critical components in **Finite State Machines (FSMs)**, storing the machine's current state.
*   While flip-flops synchronize operations, the **combinational logic** feeding them can be susceptible to **static and dynamic hazards**, which must be mitigated for reliable system performance.
*   VHDL provides powerful ways to model flip-flops and their applications, facilitating the design and simulation of complex sequential systems.

---

### 7. Practice Questions

**Question 1:**
What is the primary difference between a latch and a flip-flop?

**Answer:**
A latch is level-sensitive, meaning its output can change whenever the enable signal is active and the input changes. A flip-flop is edge-sensitive, meaning its output changes only at the active transition (rising or falling edge) of the clock signal.

---

**Question 2:**
A JK flip-flop is connected such that J=1 and K=1. What will be the behavior of the output Q after the next active clock edge?

**Answer:**
The JK flip-flop will toggle its state. If the current state is Q=0, it will become Q=1. If the current state is Q=1, it will become Q=0.

---

**Question 3:**
Explain the purpose of a register in a digital system and how it's implemented using flip-flops.

**Answer:**
A register is a group of flip-flops used to store a binary word. Each flip-flop stores one bit of the word. Registers are implemented by connecting the data inputs of the flip-flops to the bits of the data word and providing a common clock signal and an enable/load signal to control when the data is stored.

---

**Question 4:**
Consider a D flip-flop whose D input is connected to a combinational logic circuit that has a static hazard. If the hazard causes the D input to momentarily glitch from 0 to 1 and back to 0 just before the rising clock edge, what could be the potential issue?

**Answer:**
If the glitch occurs such that the D input is 1 at the precise moment of the rising clock edge, the D flip-flop might incorrectly capture the value 1, even if the stable input should have been 0. This could lead to an erroneous state change in the sequential circuit.

---

**Question 5:**
Write a VHDL code snippet for a T flip-flop.

**Answer:**
```vhdl
entity t_flip_flop is
    port (
        clk : in std_logic;
        t   : in std_logic;
        q   : out std_logic
    );
end entity t_flip_flop;

architecture behavioral of t_flip_flop is
    signal q_internal : std_logic := '0'; -- Initialize to 0
begin
    process (clk)
    begin
        if rising_edge(clk) then
            if t = '1' then
                q_internal <= not q_internal; -- Toggle
            end if;
            -- If t='0', q_internal remains unchanged
        end if;
        q <= q_internal;
    end process;
end architecture behavioral;

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
