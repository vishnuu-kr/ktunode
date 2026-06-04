---
title: "Practical issues- clock skew and jitter"
subject: "DIGITAL SYSTEMS AND VLSI DESIGN"
module: "Module 3: Hazards – static and dynamic hazards in combinational networks"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe75c"
status: "completed"
scrapedAt: "2026-05-23T17:48:15.220Z"
---
# DIGITAL SYSTEMS AND VLSI DESIGN: Module 3 - Hazards and Practical Issues

## Module 3: Hazards – Static and Dynamic Hazards in Combinational Networks

### Topic: Practical Issues - Clock Skew and Jitter

---

### Learning Outcomes Covered:

*   **CO3:** Identify and mitigate static and dynamic hazards in combinational networks, design hazard-free circuits, address practical issues in digital systems and apply fault detection and testing methods. (Knowledge Level: K2)
*   **CO4:** Explain the VLSI design flow, utilize various design entry methods, apply different VHDL modeling styles, and develop and simulate VHDL constructs for combinational and sequential circuits. (Knowledge Level: K2)

---

## Introduction to Practical Issues in Digital Systems

While theoretical design of digital circuits focuses on logic functions and hazard-free operation, real-world implementations face several practical challenges that can impact performance and reliability. This section delves into two significant practical issues: **Clock Skew** and **Clock Jitter**, both of which are critical considerations in the design of synchronous sequential circuits, particularly in high-speed VLSI systems. Understanding and mitigating these issues is crucial for ensuring correct operation and meeting timing requirements, as highlighted in CO3 and CO4.

---

## 1. Clock Skew

### 1.1. Definition of Clock Skew

**Clock skew** is the phenomenon where the clock signal arrives at different flip-flops (or other sequential elements) at different times. This difference in arrival times is due to variations in the propagation delays of the clock distribution network. In an ideal synchronous system, the clock signal should reach all sequential elements simultaneously. However, in reality, the physical layout and routing of clock lines, along with variations in manufacturing, lead to these timing discrepancies.

**Key Concepts:**

*   **Clock Source:** The origin of the clock signal.
*   **Clock Distribution Network:** The circuitry (e.g., buffers, wires) used to distribute the clock signal from the source to all sequential elements.
*   **Flip-Flop (FF):** A fundamental sequential element that stores a bit of information and updates its state on the rising or falling edge of the clock.
*   **Setup Time ($T_{setup}$):** The minimum time the data input must be stable before the active clock edge.
*   **Hold Time ($T_{hold}$):** The minimum time the data input must be stable after the active clock edge.
*   **Clock-to-Q Delay ($T_{clk-Q}$):** The time it takes for the output of a flip-flop to change after the active clock edge.

### 1.2. Causes of Clock Skew

*   **Wire Length Differences:** Clock signals travel at a finite speed. Longer wires have greater propagation delays.
*   **Buffer/Gate Delays:** The clock signal may pass through different numbers or types of buffers and gates on its path to different flip-flops, leading to varying delays.
*   **Loading Capacitance:** Different fan-out levels of the clock signal can affect the driving strength and propagation delay.
*   **Manufacturing Variations:** Inconsistencies in the fabrication process can lead to variations in wire resistance, capacitance, and transistor characteristics.
*   **Temperature and Voltage Variations:** These environmental factors can also influence signal propagation delays.

### 1.3. Types of Clock Skew

Clock skew can be broadly categorized as:

*   **Source-Synchronous Skew:** Variations in the clock signal itself as it arrives at different points in the clock distribution network.
*   **Destination-Synchronous Skew:** Variations in the timing of data arriving at the destination flip-flop relative to the clock edge.

However, the most commonly discussed type in terms of impact on sequential circuit timing is the **arrival time difference** of the clock signal at different flip-flops.

### 1.4. Impact of Clock Skew on Sequential Circuits

Clock skew introduces timing violations, primarily affecting the **setup time** and **hold time** requirements of flip-flops.

**1.4.1. Effect on Setup Time (Introducing Metastability or Data Latch Failure)**

*   **Scenario:** Consider two flip-flops, FF1 and FF2, clocked by the same clock source.
*   Let $T_{clk-Q1}$ be the clock-to-Q delay of FF1, and $T_{clk-Q2}$ be that of FF2.
*   Let $T_{skew}$ be the difference in clock arrival times at FF1 and FF2. Assume the clock arrives at FF2 earlier than at FF1 by $T_{skew}$.
*   Let $T_{data\_delay}$ be the combinational logic delay between FF1 and FF2.

For the data to propagate from FF1 and be valid at FF2 before its setup time, the following timing must hold:

**Ideal Condition (No Skew):**
$T_{clk-Q1} + T_{data\_delay} \le T_{period} - T_{setup2}$
where $T_{period}$ is the clock period.

**With Skew (Clock arrives at FF2 earlier by $T_{skew}$):**
The data from FF1 must be ready at FF2 before its setup time relative to its clock edge.
$T_{clk-Q1} + T_{data\_delay} \le (T_{period} - T_{skew}) - T_{setup2}$

This can be rewritten as:
$T_{clk-Q1} + T_{data\_delay} + T_{setup2} + T_{skew} \le T_{period}$

If this condition is violated, the data will not be stable by the required setup time at FF2, potentially leading to:
*   **Metastability:** The flip-flop enters an unstable state, and its output might oscillate or settle to an unpredictable value.
*   **Data Latch Failure:** The flip-flop might not latch the correct data.

**Maximum Allowable Skew for Setup Time:**
The maximum skew that can be tolerated without violating setup time is related to the clock period and the combinational logic delay. If the clock reaches FF2 earlier than FF1, the time available for data propagation from FF1 to FF2 is reduced.

**Worst-Case Scenario (Setup Violation):**
Consider data being sent from FF_A to FF_B.
Clock arrives at FF_A at time $t_A$, clock arrives at FF_B at time $t_B$.
Let $t_{skew} = t_B - t_A$ (positive if clock reaches FF_B later than FF_A).
Data is valid at FF_A output at $t_A + T_{clk-Q\_A}$.
Data reaches FF_B input at $t_A + T_{clk-Q\_A} + T_{comb}$.
For setup time to be met at FF_B, this data arrival must be before $t_B + T_{setup\_B}$.
So, $t_A + T_{clk-Q\_A} + T_{comb} < t_B + T_{setup\_B}$
$T_{clk-Q\_A} + T_{comb} < (t_B - t_A) + T_{setup\_B}$
$T_{clk-Q\_A} + T_{comb} < t_{skew} + T_{setup\_B}$

The maximum clock period ($T_{period}$) is determined by the longest path delay. If clock reaches FF_B earlier, this path becomes critical for setup. The effective period available for the path from FF_A to FF_B becomes $T_{period} - t_{skew}$.

**Important Point to Remember:** **Clock skew can effectively reduce the clock period available for data propagation, making setup time violations more likely.**

**1.4.2. Effect on Hold Time (Introducing Data Latch Failure)**

*   **Scenario:** Consider the same two flip-flops.
*   Let $T_{hold\_A}$ be the hold time for FF_A and $T_{hold\_B}$ for FF_B.
*   Assume the clock arrives at FF_B earlier than at FF_A by $T_{skew}$.

For the data to be stable at FF_B after its clock edge, the hold time requirement must be met. The data from FF_A must remain stable at FF_B's input until $T_{hold\_B}$ after FF_B's clock edge.

**Ideal Condition (No Skew):**
$T_{clk-Q1} + T_{hold2} \le T_{data\_delay}$

**With Skew (Clock arrives at FF_B earlier by $T_{skew}$):**
The clock edge at FF_B arrives at $t_B$. The data must remain stable until $t_B + T_{hold\_B}$.
The data at FF_B input changes at $t_A + T_{clk-Q\_A} + T_{comb}$.
For hold time to be met at FF_B, the data arrival at FF_B's input must be after $t_B + T_{hold\_B}$.
So, $t_A + T_{clk-Q\_A} + T_{comb} > t_B + T_{hold\_B}$
$T_{clk-Q\_A} + T_{comb} > (t_B - t_A) + T_{hold\_B}$
$T_{clk-Q\_A} + T_{comb} > t_{skew} + T_{hold\_B}$

If this condition is violated, the data at FF_B will change before the hold time requirement is met after FF_B's clock edge, causing the FF_B to latch incorrect data.

**Worst-Case Scenario (Hold Violation):**
Consider data being sent from FF_A to FF_B.
Clock arrives at FF_A at time $t_A$, clock arrives at FF_B at time $t_B$.
Let $t_{skew} = t_B - t_A$ (positive if clock reaches FF_B later than FF_A).
Data becomes invalid at FF_A output at $t_A + T_{clk-Q\_A} + T_{comb}$.
For hold time to be met at FF_B, this data invalidation must be after $t_B + T_{hold\_B}$.
So, $t_A + T_{clk-Q\_A} + T_{comb} > t_B + T_{hold\_B}$
$T_{clk-Q\_A} + T_{comb} > (t_B - t_A) + T_{hold\_B}$
$T_{clk-Q\_A} + T_{comb} > t_{skew} + T_{hold\_B}$

If the clock reaches FF_B earlier ($t_{skew}$ is negative in our definition, or positive if we consider FF_A later), the condition becomes harder to satisfy. A simpler way to state it: if the clock at FF_B is ahead of the clock at FF_A by $T_{skew\_AB}$ (where $T_{skew\_AB}$ is positive if FF_B's clock is earlier), then for the hold time to be met:
$T_{comb} > T_{clk-Q\_A} + T_{hold\_B} - T_{skew\_AB}$

**Important Point to Remember:** **Clock skew can effectively reduce the time available for the combinational logic to change the data, making hold time violations more likely.**

### 1.5. Mitigating Clock Skew

*   **Clock Tree Synthesis (CTS):** This is a CAD technique specifically designed to build balanced clock distribution networks. CTS aims to minimize skew by ensuring that all clock paths have equal or near-equal delays. Techniques include:
    *   **H-tree topology:** A symmetric layout that balances path lengths.
    *   **Buffering:** Inserting buffers strategically along clock paths to equalize delays and drive strength.
    *   **Buffer sizing:** Adjusting the size of buffers to compensate for varying loads.
*   **Clock Gating:** Temporarily disabling the clock signal to certain parts of the circuit when they are not actively performing operations. While primarily for power saving, it can also influence effective skew if not implemented carefully.
*   **Delay Locked Loops (DLLs) and Phase Locked Loops (PLLs):** These circuits can be used to actively adjust and synchronize the clock signals, compensating for skew.
*   **Careful Placement and Routing:** In the physical design stage, placing flip-flops that communicate frequently close to each other and routing clock signals with similar lengths can help.
*   **Using Global Clock Buffers:** Employing high-performance buffers designed for clock distribution.

### 1.6. Example (Conceptual)

Imagine a system with a clock period of 10ns.
FF1 has a $T_{clk-Q}$ of 1ns and requires $T_{setup}$ of 0.5ns.
FF2 has a $T_{clk-Q}$ of 1.2ns and requires $T_{setup}$ of 0.6ns.
The combinational logic between FF1 and FF2 has a delay of 5ns.

**Case 1: No Skew**
*   **Setup Check for FF2:** Data from FF1 must be ready by $10 - 0.6 = 9.4$ns after FF1's clock.
    *   Data launch time at FF1: 0ns (assume clock edge at 0ns).
    *   Data valid at FF1 output: $0 + 1 = 1$ns.
    *   Data arrives at FF2 input: $1 + 5 = 6$ns.
    *   $6$ns $< 9.4$ns. Setup time is met.

**Case 2: Clock Skew - Clock arrives at FF2 1ns earlier than FF1**
*   Clock edge at FF1: 0ns. Clock edge at FF2: -1ns.
*   **Setup Check for FF2:** Data from FF1 must be ready by $-1 + 9.4 = 8.4$ns after FF1's clock.
    *   Data launch time at FF1: 0ns.
    *   Data valid at FF1 output: $0 + 1 = 1$ns.
    *   Data arrives at FF2 input: $1 + 5 = 6$ns.
    *   $6$ns $< 8.4$ns. Setup time is still met.

**Case 3: Clock Skew - Clock arrives at FF2 2ns earlier than FF1**
*   Clock edge at FF1: 0ns. Clock edge at FF2: -2ns.
*   **Setup Check for FF2:** Data from FF1 must be ready by $-2 + 9.4 = 7.4$ns after FF1's clock.
    *   Data launch time at FF1: 0ns.
    *   Data valid at FF1 output: $0 + 1 = 1$ns.
    *   Data arrives at FF2 input: $1 + 5 = 6$ns.
    *   $6$ns $< 7.4$ns. Setup time is still met.

**Let's consider a longer combinational delay or larger skew:**
Assume combinational logic delay is 7ns.

**Case 4: No Skew, T_comb = 7ns**
*   Data arrives at FF2 input: $1 + 7 = 8$ns.
*   Setup requirement for FF2: must be before 9.4ns.
*   $8$ns $< 9.4$ns. Setup met.

**Case 5: Clock Skew - Clock arrives at FF2 2ns earlier than FF1, T_comb = 7ns**
*   Clock edge at FF1: 0ns. Clock edge at FF2: -2ns.
*   Setup requirement for FF2: must be before $-2 + 9.4 = 7.4$ns.
*   Data arrives at FF2 input: $1 + 7 = 8$ns.
*   $8$ns is NOT less than $7.4$ns. **Setup time violation occurs.**

---

## 2. Clock Jitter

### 2.1. Definition of Clock Jitter

**Clock jitter** refers to the short-term temporal variations or deviations in the timing of a clock signal from its ideal position. Unlike clock skew, which is a systematic difference in arrival times across the entire clock distribution network, jitter is more random and can affect individual clock cycles. It represents the uncertainty in the exact moment a clock edge will occur.

**Key Concepts:**

*   **Ideal Clock:** A clock signal with perfectly periodic rising and falling edges.
*   **Jitter:** The deviation of a clock edge from its ideal timing.
*   **Period Jitter:** The variation in the time between two consecutive clock cycles.
*   **Cycle-to-Cycle Jitter:** A measure of the variation from one clock period to the next.
*   **Long-Term Jitter:** Variations that occur over longer time scales, often related to temperature or voltage drift.
*   **Short-Term Jitter:** Variations that occur over a few clock cycles.

### 2.2. Causes of Clock Jitter

*   **Noise on the Clock Source:** Internal noise within oscillators (e.g., crystal oscillators, PLLs) can cause variations in the clock frequency and timing.
*   **Power Supply Noise:** Fluctuations in the power supply voltage can affect the operation of clock generation circuitry and buffers.
*   **Switching Activity in Nearby Circuits:** Simultaneous switching of a large number of transistors (simultaneous switching output - SSO) can inject noise onto the power/ground planes, affecting the clock signal.
*   **Electromagnetic Interference (EMI):** External electromagnetic fields can couple noise into the clock signal.
*   **Non-linearities in Clock Buffers/Drivers:** Imperfect behavior of buffer circuits can introduce timing variations.

### 2.3. Impact of Clock Jitter on Sequential Circuits

Clock jitter also affects the timing margins of sequential circuits, similar to clock skew, by altering the effective clock period and data arrival times relative to the clock edges.

**2.3.1. Effect on Setup Time**

Jitter can effectively shorten the time available for data propagation. If a clock edge arrives earlier than expected due to jitter, the setup time requirement becomes more stringent.

**Worst-Case Scenario (Setup Violation due to Jitter):**
Consider data launched from FF_A and received by FF_B.
Let $T_{period}$ be the nominal clock period.
Let $T_{jitter}$ be the peak-to-peak jitter.
The clock edge at FF_B might arrive as early as $T_{period} - T_{jitter}$ after the previous clock edge at FF_B.

For setup time at FF_B to be met, the data launched from FF_A must be stable before the earliest possible clock edge at FF_B.
$T_{clk-Q\_A} + T_{comb} + T_{setup\_B} \le T_{period} - T_{jitter}$

This means that the combinational logic delay must be shorter than $T_{period} - T_{jitter} - T_{setup\_B} - T_{clk-Q\_A}$.

**Important Point to Remember:** **Clock jitter, by introducing uncertainty in clock edge arrival times, effectively reduces the available time for data propagation and makes setup time violations more likely.** The total time available for a data path is often expressed as $T_{period} - T_{setup} - T_{hold} - T_{skew} - T_{jitter}$.

**2.3.2. Effect on Hold Time**

Jitter can also impact hold time. If a clock edge arrives later than expected, it might cause the data to change before the hold time window closes.

**Worst-Case Scenario (Hold Violation due to Jitter):**
Consider data launched from FF_A and received by FF_B.
Let $T_{period}$ be the nominal clock period.
Let $T_{jitter}$ be the peak-to-peak jitter.
The clock edge at FF_B might arrive as late as $T_{period} + T_{jitter}$ after the previous clock edge at FF_B.

For hold time at FF_B to be met, the data must remain stable after the latest possible clock edge at FF_B.
$T_{clk-Q\_A} + T_{comb} > T_{hold\_B} + T_{jitter}$

This means that the combinational logic delay must be greater than $T_{hold\_B} + T_{jitter} - T_{clk-Q\_A}$.

**Important Point to Remember:** **Clock jitter can effectively reduce the time available for data to propagate and stabilize, making hold time violations more likely.**

### 2.4. Mitigating Clock Jitter

*   **Careful Clock Source Design:** Using high-quality oscillators and PLLs with low intrinsic jitter.
*   **Power Supply Filtering and Decoupling:** Implementing robust power delivery networks to minimize voltage fluctuations.
*   **Shielding and Layout Techniques:** Shielding clock traces and using proper routing to minimize susceptibility to external noise and EMI.
*   **Buffer Selection:** Using buffers with predictable and low jitter characteristics.
*   **Clock Tree Synthesis (CTS):** While primarily for skew, well-designed clock trees can also contribute to reduced jitter.
*   **On-Chip Jitter Filtering:** Some advanced clock generation circuits incorporate mechanisms to filter out or reduce jitter.

---

## 3. Relationship between Clock Skew and Jitter

While distinct, clock skew and jitter are both timing uncertainties that affect the performance of synchronous systems.

*   **Skew:** Systematic, deterministic difference in arrival times across the clock distribution network. It is relatively constant for a given design and operating conditions.
*   **Jitter:** Random, probabilistic variations in clock edge arrival times. It is often specified as a statistical measure (e.g., RMS jitter, peak-to-peak jitter).

In the worst-case timing analysis of a synchronous circuit, both skew and jitter are accounted for. The total timing uncertainty for a data path can be considered as the sum of propagation delays, setup/hold times, clock skew, and clock jitter.

For a path from FF_A to FF_B:

*   **Setup Time Check:**
    $T_{clk-Q\_A} + T_{comb} + T_{setup\_B} \le T_{period} - T_{skew} - T_{jitter}$
    where $T_{skew}$ is the skew such that FF_B's clock is later than FF_A's clock, and $T_{jitter}$ is the worst-case jitter that reduces the available time.

*   **Hold Time Check:**
    $T_{clk-Q\_A} + T_{comb} > T_{hold\_B} + T_{skew} + T_{jitter}$
    where $T_{skew}$ is the skew such that FF_B's clock is earlier than FF_A's clock, and $T_{jitter}$ is the worst-case jitter that reduces the available time.

### 3.1. Practical Considerations for VLSI Designers (CO4)

When using HDL (like VHDL or Verilog) for digital system design, these practical issues are not directly coded but are considered during the synthesis and physical design stages.

*   **Timing Constraints:** Designers specify timing constraints in their HDL code or associated constraint files (e.g., .sdc, .xdc) to guide the synthesis and place-and-route tools. These constraints include the clock period, and potentially define exceptions for specific paths.
*   **Synthesizer and P&R Tools:** Tools like Synopsys Design Compiler, Cadence Genus/Innovus, Xilinx Vivado, Intel Quartus, etc., are responsible for implementing clock trees and optimizing the design to meet these timing constraints, taking into account estimations of skew and jitter.
*   **Static Timing Analysis (STA):** After synthesis and place-and-route, STA tools are used to verify that all timing requirements (setup and hold) are met under various operating conditions (process, voltage, temperature - PVT). STA reports highlight any violations, which may require design modifications or adjustments to timing constraints.
*   **Simulation:** Functional simulations verify the logic, while timing simulations (post-layout simulations) with back-annotated delays are used to assess the impact of physical implementation effects like skew and jitter.

---

## Summary of Key Points

*   **Clock Skew:** Differential arrival times of the clock signal at different sequential elements, caused by variations in the clock distribution network. It can lead to setup or hold time violations by effectively altering the clock period for specific paths.
*   **Clock Jitter:** Short-term temporal variations in the clock signal's timing from its ideal position, often random in nature. It also contributes to setup or hold time violations by introducing uncertainty in clock edge arrivals.
*   **Impact:** Both skew and jitter reduce timing margins, making setup time violations more likely when data propagation is too long, and hold time violations more likely when data propagation is too short.
*   **Mitigation:** Clock Tree Synthesis (CTS), buffer management, DLLs/PLLs, careful layout, and noise reduction techniques are crucial for minimizing skew and jitter.
*   **VLSI Design Flow:** Designers specify timing requirements via constraints, and EDA tools manage clock distribution and timing verification (STA) to ensure these parameters are met.

---

## Practice Questions

**Q1. (CO3, K2) Define clock skew and clock jitter. Briefly explain one cause for each.**

**Answer:**
*   **Clock Skew:** The difference in arrival times of the clock signal at different sequential elements (e.g., flip-flops) within a synchronous system.
    *   *Cause:* Variations in wire lengths or buffer delays in the clock distribution network.
*   **Clock Jitter:** Short-term deviations in the timing of clock edges from their ideal positions.
    *   *Cause:* Noise on the clock source (e.g., oscillator noise, power supply noise).

**Q2. (CO3, K2) How can clock skew affect the setup time of a flip-flop? Provide a simple scenario.**

**Answer:**
Clock skew can reduce the effective clock period available for data propagation. If the clock arrives at the destination flip-flop *earlier* than at the source flip-flop, the data launched from the source has less time to reach the destination and satisfy its setup time before the destination's clock edge.

*   *Scenario:* Data travels from FF_A to FF_B. If FF_B's clock edge arrives 1ns earlier than FF_A's clock edge, and the combinational logic delay is 5ns with a setup time of 0.5ns, the available path delay is effectively reduced by 1ns. If the data launch + propagation delay was just barely meeting setup time in an ideal case, this skew could cause a violation.

**Q3. (CO3, K2) Explain how clock jitter can lead to a hold time violation.**

**Answer:**
Clock jitter can cause a clock edge to arrive *later* than its ideal time. If this later arrival occurs before the data from the previous clock cycle has been properly latched by the destination flip-flop, it can lead to a hold time violation. The data may change due to the combinational logic's delay, but the clock edge arrives too soon after the data has changed (relative to the hold time requirement), causing incorrect latching.

**Q4. (CO4, K2) In the context of VLSI design using HDLs, how are issues like clock skew and jitter typically addressed?**

**Answer:**
Clock skew and jitter are typically addressed by:
1.  **Specifying Timing Constraints:** Designers define the clock period and other timing requirements using HDL or associated constraint files.
2.  **Using EDA Tools:** Synthesis and place-and-route tools are employed to build balanced clock trees (for skew) and minimize noise (for jitter).
3.  **Static Timing Analysis (STA):** After physical design, STA tools verify that all timing paths meet the setup and hold time requirements, considering estimated skew and jitter. Any violations necessitate design modifications or constraint adjustments.

**Q5. (CO3, K2) Given a clock period of 10ns, $T_{clk-Q}$ = 1ns, $T_{setup}$ = 0.5ns, and combinational delay ($T_{comb}$) = 8ns. If the clock experiences a skew of 1.5ns (destination clock is 1.5ns later than source clock), will the setup time be met?**

**Answer:**
*   Nominal Clock Period ($T_{period}$) = 10ns
*   Clock-to-Q delay ($T_{clk-Q}$) = 1ns
*   Setup Time ($T_{setup}$) = 0.5ns
*   Combinational Delay ($T_{comb}$) = 8ns
*   Clock Skew = 1.5ns (destination clock arrives later)

**Setup Time Check:**
The data launched from the source FF at $t=0$ (clock edge).
Data is valid at the source FF output at $t = T_{clk-Q} = 1$ns.
Data arrives at the destination FF input at $t = T_{clk-Q} + T_{comb} = 1\text{ns} + 8\text{ns} = 9\text{ns}$.

The destination clock edge arrives at $t = T_{period} + T_{skew} = 10\text{ns} + 1.5\text{ns} = 11.5\text{ns}$.
The setup time requirement means the data must be stable before $11.5\text{ns} - T_{setup} = 11.5\text{ns} - 0.5\text{ns} = 11\text{ns}$.

Since the data arrives at 9ns, which is before the required setup time of 11ns, the setup time is met.

**Alternative calculation:**
Total time available for the path = $T_{period} + T_{skew} - T_{setup}$
Total time available = $10\text{ns} + 1.5\text{ns} - 0.5\text{ns} = 11\text{ns}$.
Data launch time (after clock edge) + combinational delay = $T_{clk-Q} + T_{comb} = 1\text{ns} + 8\text{ns} = 9\text{ns}$.
Since $9\text{ns} \le 11\text{ns}$, setup time is met.

---
---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
