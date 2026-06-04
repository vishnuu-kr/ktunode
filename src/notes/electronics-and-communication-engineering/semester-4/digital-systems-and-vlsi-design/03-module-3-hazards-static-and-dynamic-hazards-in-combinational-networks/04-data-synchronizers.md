---
title: "Data synchronizers"
subject: "DIGITAL SYSTEMS AND VLSI DESIGN"
module: "Module 3: Hazards – static and dynamic hazards in combinational networks"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe75a"
status: "completed"
scrapedAt: "2026-05-23T17:48:13.829Z"
---
# Module 3: Hazards – Static and Dynamic Hazards in Combinational Networks

## Topic: Data Synchronizers

### 1. Introduction to Data Synchronizers

Data synchronizers are essential components in digital systems that handle signals from different clock domains or asynchronous inputs. Their primary purpose is to ensure that data is captured reliably by a synchronous circuit, even when the source of the data is not synchronized to the destination clock. This is crucial for preventing metastability, a condition where a flip-flop can enter an unpredictable intermediate state, leading to system malfunctions.

**Key Concept:** Metastability occurs when a flip-flop's input changes too close to the clock edge. The output of the flip-flop becomes unpredictable, taking an indeterminate amount of time to settle to a stable logic level (0 or 1).

**Learning Outcome Alignment:**
*   **CO3 (K2):** While this topic is related to synchronizers, the core concept of hazards in combinational networks is the primary focus of this module. Understanding synchronizers indirectly aids in understanding how asynchronous signals can interact with clocked systems, which can be influenced by hazard conditions in preceding combinational logic.
*   **CO4 (K2):** Synchronizers are often implemented using flip-flops and combinational logic, and their design and simulation are relevant to VHDL modeling.

**Textbook References:**
*   **M. Morris Mano and Michel.D. Ciletti, Digital Design: With an Introduction to the Verilog HDL, VHDL, and SystemVerilog (6th Ed.)**: This book often discusses sequential circuit design and considerations for interfacing asynchronous signals.
*   **John F Wakerly, Digital Design: Principles and Practices (4th Ed.)**: Wakerly's book is known for its practical approach and likely covers synchronizer design as a means to handle timing issues.

### 2. Why are Data Synchronizers Needed?

Digital systems often consist of multiple modules operating under different clock frequencies or receiving inputs from external asynchronous sources. When data needs to be transferred between these asynchronous domains, a simple direct connection can lead to errors due to timing mismatches.

**Scenarios Requiring Synchronizers:**

*   **Clock Domain Crossing (CDC):** Transferring data between modules with different clock frequencies.
*   **Asynchronous Inputs:** Interfacing with external devices or buttons that are not synchronized to the system clock.
*   **Interrupt Handling:** Processing interrupts from external hardware.

**The Problem:** If an asynchronous input signal changes near the active edge of the destination clock, the flip-flop sampling the data may not have enough time to settle to a stable state before the clock edge arrives. This results in metastability.

**Example:**
Consider a button press that triggers an interrupt in a system. The button press is asynchronous to the system clock. If the system's interrupt handling logic samples the button state directly without synchronization, a button press occurring just before the clock edge could cause a metastable state in the flip-flop reading the button.

### 3. Metastability and Its Consequences

**Definition:** Metastability is a temporary condition in a sequential element (like a flip-flop) where its output is neither a defined logic '0' nor a defined logic '1'. It occurs when the data input changes too close to the active clock edge, violating the setup or hold time requirements of the flip-flop.

**Consequences of Metastability:**

*   **Unpredictable Output:** The output can randomly settle to '0' or '1' after an indeterminate amount of time.
*   **Increased Propagation Delay:** The time it takes for the flip-flop to recover from the metastable state can be significantly longer than normal.
*   **System Malfunction:** If a metastable signal is used by other logic (combinational or sequential), it can propagate erroneous values, leading to incorrect computations, crashes, or unpredictable system behavior.
*   **Data Corruption:** If data is being transferred across clock domains, a metastable flip-flop can result in the transfer of corrupted or incorrect data.

**Important Point to Remember:** Metastability is not a fault; it's a phenomenon that occurs when timing constraints are violated. The goal of synchronizers is to reduce the *probability* of a system experiencing a metastable event to an acceptable level.

### 4. The Two-Flip-Flop Synchronizer

The most common and fundamental data synchronizer is the two-flip-flop synchronizer. It uses two flip-flops connected in series.

**Circuit Diagram:**

```
       Clock --------------------------------+
                                            |
Async Input --------> [FF1] --------> [FF2] --------> Synchronized Output
                      (D-FF)          (D-FF)
```

**How it Works:**

1.  **First Flip-Flop (FF1):** The asynchronous input is fed into the data input of FF1. FF1 samples the input on its active clock edge.
    *   **Ideal Case:** If the input is stable, FF1 captures the data correctly and outputs a stable value.
    *   **Metastable Case:** If the input is changing near the clock edge, FF1 might enter a metastable state. Its output will start to drift towards an undefined voltage level.

2.  **Second Flip-Flop (FF2):** The output of FF1 is connected to the data input of FF2. FF2 samples the output of FF1 on *its* active clock edge.
    *   **Recovery Time:** The crucial aspect here is that FF2 has more time to capture the output of FF1. By the time FF2's clock edge arrives, FF1 (even if it was metastable) has had additional time (the clock period of FF1) to settle to a stable logic level. This significantly reduces the probability of FF2 also entering a metastable state.

**Analysis of Probability of Metastability:**

The probability of a metastable event occurring at the output of a synchronizer is a function of:

*   **Clock Frequency ($f_{clk}$):** Higher frequency means less time for settling.
*   **Data Input Rate ($f_{data}$):** Higher rate of input changes increases the likelihood of violating setup/hold times.
*   **Flip-Flop Characteristics:** The inherent properties of the flip-flop, such as its *resolution time* ($t_{res}$) and *clock-to-Q delay* ($t_{clk-q}$), play a role. The resolution time is the minimum time after the clock edge that the input must remain stable for the flip-flop to produce a valid output.

A simplified formula for the probability of metastability ($P_{meta}$) after N flip-flops can be approximated as:

$P_{meta} \approx \left( T_{data} \times f_{data} \right) \times \left( T_{clk} \times f_{clk} - C \right) \times e^{\frac{-(T_{clk} - T_{setup} - t_{clk-q})}{t_{res}}}$

Where:
*   $T_{data}$: Average time the input is unstable around the clock edge.
*   $f_{data}$: Frequency of input changes.
*   $T_{clk}$: Clock period.
*   $f_{clk}$: Clock frequency.
*   $C$: A constant related to the flip-flop's internal design.
*   $T_{setup}$: Setup time of the flip-flop.
*   $t_{clk-q}$: Clock-to-Q delay.
*   $t_{res}$: Resolution time of the flip-flop.

The exponential term highlights that even a small increase in available settling time (by using more flip-flops or a slower clock) dramatically reduces the probability of metastability. A two-flip-flop synchronizer effectively doubles the settling time available for the second flip-flop, making the probability of *both* flip-flops going metastable very low.

**Example: Implementing a two-flip-flop synchronizer in VHDL**

```vhdl
library ieee;
use ieee.std_logic_1164.all;

entity synchronizer_2ff is
    port (
        clk_fast   : in  std_logic; -- Clock of the destination domain
        async_in   : in  std_logic; -- Asynchronous input
        sync_out   : out std_logic  -- Synchronized output
    );
end entity synchronizer_2ff;

architecture rtl of synchronizer_2ff is
    signal ff1_out : std_logic;
begin

    -- First Flip-Flop
    process (clk_fast)
    begin
        if rising_edge(clk_fast) then
            ff1_out <= async_in;
        end if;
    end process;

    -- Second Flip-Flop
    process (clk_fast)
    begin
        if rising_edge(clk_fast) then
            sync_out <= ff1_out;
        end if;
    end process;

end architecture rtl;
```

**Important Point to Remember:** The two flip-flops in a synchronizer *must* share the same clock in the destination domain.

### 5. Cascaded Synchronizers (More than Two Flip-Flops)

For extremely critical applications or when the clock frequencies are very high, and the input data arrival rate is also high, a two-flip-flop synchronizer might not be sufficient. In such cases, cascading more than two flip-flops can further reduce the probability of metastability.

**Why use more than two?**

*   **Reduced Probability:** Each additional flip-flop provides more time for the previous one to settle, exponentially reducing the probability of failure.
*   **Higher Clock Frequencies:** Allows reliable synchronization even with very high clock rates.

**Trade-offs:**

*   **Increased Latency:** Each additional flip-flop adds two clock cycles of latency to the data path.
*   **Increased Area:** More flip-flops consume more silicon area.

**When to consider more than two:**

*   When the MTBF (Mean Time Between Failures) requirement for metastable events is extremely low.
*   When the ratio of the clock period to the flip-flop's resolution time is very small.

### 6. Synchronizer Design Considerations and Best Practices

*   **Use the Same Clock:** Ensure both flip-flops in the synchronizer are clocked by the *same* destination clock.
*   **Avoid Combinational Logic Between Synchronizer Stages:** Any combinational logic between FF1 and FF2 can introduce its own hazards or delays, potentially negating the benefits of the synchronizer.
*   **Synchronize All Asynchronous Inputs:** Any signal that is not guaranteed to be synchronized to the destination clock needs to be synchronized. This includes control signals, data buses, and status flags.
*   **Consider Data Width:** If you are synchronizing a multi-bit bus, each bit must be synchronized independently using its own pair of flip-flops.
*   **Reset Synchronization:** Asynchronous resets are problematic when interacting with synchronous logic. If an asynchronous reset signal is sourced from outside the synchronous domain, it should also be synchronized.

**Example: Synchronizing a multi-bit data bus**

For an 8-bit data bus (`data_async`):

```vhdl
-- ... (entity declaration as before)
architecture rtl of synchronizer_8bit is
    signal ff1_out_0, ff1_out_1, ..., ff1_out_7 : std_logic;
    signal ff2_out_0, ff2_out_1, ..., ff2_out_7 : std_logic;
begin

    -- Synchronize each bit independently
    sync_0 : process (clk_fast)
    begin
        if rising_edge(clk_fast) then
            ff1_out_0 <= data_async(0);
            ff2_out_0 <= ff1_out_0;
        end if;
    end process;

    sync_1 : process (clk_fast)
    begin
        if rising_edge(clk_fast) then
            ff1_out_1 <= data_async(1);
            ff2_out_1 <= ff1_out_1;
        end if;
    end process;

    -- ... (repeat for bits 2 through 7)

    -- Combine the synchronized bits for the output
    sync_out(0) <= ff2_out_0;
    sync_out(1) <= ff2_out_1;
    -- ... (connect up to bit 7)

end architecture rtl;
```

**Important Point to Remember:** Synchronizing individual bits of a bus is crucial. Treating a multi-bit bus as a single asynchronous entity and synchronizing it with a single pair of flip-flops is incorrect and will not work.

### 7. Synchronizers and Hazards

While data synchronizers are designed to prevent metastability, they are still part of a larger digital system that can be affected by hazards in combinational logic.

*   **Hazards in Preceding Logic:** If the asynchronous input (`async_in`) itself is the output of combinational logic that suffers from static or dynamic hazards, these hazards can occur just before the data is presented to the first synchronizing flip-flop.
    *   **Static Hazard:** If a static hazard causes a brief glitch on `async_in` that happens to occur near the clock edge, it could potentially contribute to the instability at FF1's input, albeit less likely to cause metastability than a true signal transition.
    *   **Dynamic Hazard:** A dynamic hazard involves a signal glitching multiple times. A glitch near the clock edge could also impact FF1.

*   **Effect on Synchronizers:** The presence of hazards in combinational logic *before* the synchronizer can increase the likelihood of the first flip-flop (FF1) receiving an unstable or glitchy input. However, the second flip-flop (FF2) generally mitigates the effect of these glitches because it samples after FF1 has had time to settle. The synchronizer's primary role is to handle the *timing* issue of asynchronous transitions relative to the clock, not the *logic errors* caused by hazards in isolation.

**CO3 (K2) Connection:** Understanding how to design hazard-free combinational networks is essential for creating robust systems. If the input to a synchronizer comes from combinational logic, ensuring that logic is hazard-free is a good practice to minimize potential issues at the first stage of synchronization.

### 8. Practice Questions and Exercises

**Question 1:**
What is metastability in a flip-flop, and what causes it?

**Answer:**
Metastability is a condition where a flip-flop's output is neither a defined logic '0' nor a logic '1'. It occurs when the data input changes too close to the active clock edge, violating the flip-flop's setup or hold time requirements.

**Question 2:**
Describe the operation of a two-flip-flop data synchronizer. How does it reduce the probability of metastability?

**Answer:**
A two-flip-flop synchronizer uses two flip-flops (FF1 and FF2) in series, both clocked by the destination clock. The asynchronous input goes to FF1. FF1 samples the input. If FF1 enters a metastable state, its output becomes unstable. FF2 then samples FF1's output. By the time FF2's clock edge arrives, FF1 has had an additional clock period to settle to a stable state. This significantly reduces the probability of FF2 becoming metastable.

**Question 3:**
When would you consider using more than two flip-flops in a synchronizer? What is the main drawback of using additional flip-flops?

**Answer:**
You would consider using more than two flip-flops for extremely critical applications, very high clock frequencies, or high input data arrival rates, where an extremely low probability of metastable events is required. The main drawback is increased latency (additional clock cycles) and increased silicon area.

**Question 4:**
If a multi-bit data bus needs to be synchronized, how should it be done?

**Answer:**
Each bit of the multi-bit data bus must be synchronized independently using its own pair of flip-flops.

**Question 5 (Design Exercise):**
Write a VHDL code for a single-bit synchronizer that uses two flip-flops. Assume the clock is named `clk` and the asynchronous input is `data_in`. The synchronized output should be named `data_out`.

**Answer:**
```vhdl
library ieee;
use ieee.std_logic_1164.all;

entity single_bit_sync is
    port (
        clk      : in  std_logic;
        data_in  : in  std_logic;
        data_out : out std_logic
    );
end entity single_bit_sync;

architecture behavioral of single_bit_sync is
    signal ff1_q : std_logic;
begin

    -- First flip-flop
    process(clk)
    begin
        if rising_edge(clk) then
            ff1_q <= data_in;
        end if;
    end process;

    -- Second flip-flop
    process(clk)
    begin
        if rising_edge(clk) then
            data_out <= ff1_q;
        end if;
    end process;

end architecture behavioral;
```

### 9. Important Points to Remember

*   **Purpose:** Data synchronizers are essential for reliable data transfer between asynchronous domains (e.g., different clock frequencies or external inputs).
*   **Metastability:** The primary problem they solve is metastability, which occurs when a flip-flop's input changes too close to the clock edge.
*   **Two-Flip-Flop Design:** The standard solution uses two flip-flops clocked by the *same* destination clock.
*   **Latency:** Synchronizers introduce latency, typically two clock cycles for a two-flip-flop synchronizer.
*   **Multi-bit Data:** Each bit of a bus must be synchronized independently.
*   **Probability Reduction:** Synchronizers reduce, but do not eliminate, the probability of metastability. For very critical applications, more flip-flops or careful analysis might be needed.
*   **Relation to Hazards:** Hazards in preceding combinational logic can affect the input to the first synchronizer flip-flop, but the synchronizer's design primarily addresses timing issues, not logic errors from hazards per se. However, creating hazard-free preceding logic is a good design practice.

This concludes the notes on Data Synchronizers. This topic bridges the gap between understanding hazards in combinational logic and the practical implementation of robust synchronous systems, especially when dealing with asynchronous interfaces.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
