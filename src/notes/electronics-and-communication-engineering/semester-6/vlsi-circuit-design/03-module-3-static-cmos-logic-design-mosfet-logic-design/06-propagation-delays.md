---
title: "Propagation delays"
subject: "VLSI CIRCUIT DESIGN"
module: "Module 3: Static CMOS Logic Design : MOSFET Logic Design "
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780fefce"
status: "completed"
scrapedAt: "2026-05-23T18:03:44.679Z"
---
# VLSI Circuit Design: Module 3 - Static CMOS Logic Design: MOSFET Logic Design - Propagation Delays

---

## 1. Introduction to Propagation Delays in CMOS Logic

**Objective:** To understand the fundamental concept of propagation delay and its significance in digital circuit performance.

**Key Concepts:**

*   **Propagation Delay ($t_{pd}$):** The time taken for an output signal to change in response to a change in the input signal. It's a critical parameter for determining the maximum operating frequency of a digital circuit.
*   **Switching Delay:** The time it takes for a transistor to switch from one state (on/off) to another.
*   **Glitch:** A spurious, short-duration pulse on the output that can occur due to variations in signal arrival times. Propagation delays contribute to glitches.
*   **Maximum Operating Frequency:** Inversely proportional to the total propagation delay of the critical path in a circuit. $f_{max} = 1 / (t_{pd\_total})$

**Importance:**

*   **Speed:** Determines how fast a circuit can operate.
*   **Performance:** Directly impacts the throughput and latency of digital systems.
*   **Power Consumption:** Switching activity, often tied to propagation delays, influences dynamic power consumption.
*   **Timing Constraints:** Essential for meeting setup and hold time requirements in synchronous circuits.

**Relation to Course Outcomes:**

*   **CO3 (K3):** Designing and analyzing static CMOS logic circuits requires understanding and quantifying propagation delays to meet specifications.

---

## 2. Factors Affecting Propagation Delay

**Objective:** To identify and analyze the various physical and electrical factors that influence the propagation delay of CMOS gates.

**Key Concepts:**

*   **Load Capacitance ($C_L$):** The total capacitance seen at the output of a gate. This includes the intrinsic output capacitance of the gate itself and the input capacitance of the next stage.
    *   **Intrinsic Capacitance:** Capacitances associated with the transistors within the gate (gate-to-drain, gate-to-source, drain-to-bulk, source-to-bulk).
    *   **Wiring Capacitance:** Capacitance introduced by the interconnecting wires.
    *   **Input Capacitance of Next Stage:** The dominant component of $C_L$.
*   **Transistor Characteristics:**
    *   **Mobility ($\mu_n, \mu_p$):** Higher mobility leads to faster switching.
    *   **Threshold Voltage ($V_{th}$):** A higher threshold voltage requires a larger overdrive voltage ($V_{GS} - V_{th}$), leading to slower switching.
    *   **Transistor Width-to-Length Ratio (W/L):** A larger W/L ratio increases the effective current driving capability of the transistor, reducing delay.
    *   **Channel Length (L):** Shorter channel lengths generally lead to higher mobility and faster switching, but also increased short-channel effects.
*   **Supply Voltage ($V_{DD}$):** Higher $V_{DD}$ leads to higher overdrive voltage and increased current, thus reducing delay.
*   **Temperature:** Higher temperatures decrease carrier mobility, increasing delay.
*   **Process Variations:** Variations in doping concentrations, oxide thickness, and lithography can significantly affect transistor characteristics and thus delay.

**Mathematical Models for Propagation Delay (Simplified):**

A common simplified model for the delay of a CMOS inverter is:

$t_{pd} \approx \frac{C_L \cdot V_{DD}}{I_{drive}}$

Where:
*   $C_L$: Load capacitance.
*   $V_{DD}$: Supply voltage.
*   $I_{drive}$: Effective current driving capability of the transistors.

This can be further broken down for rising ($t_{pLH}$) and falling ($t_{pHL}$) delays.

**Examples (Conceptual):**

*   **Inverter with a large fan-out:** An inverter driving many subsequent gates will have a larger load capacitance, resulting in a longer propagation delay.
*   **NMOS transistor with higher $V_{th}$:** It will take longer for the NMOS to turn on and discharge the load capacitance, increasing the falling delay ($t_{pHL}$).
*   **Increasing $V_{DD}$:** A circuit designed for 5V will generally switch faster than the same circuit designed for 3.3V due to higher current.

**Textbook References:**

*   **Kang, Leblebici, Kim:** Chapter 4 (CMOS Inverter and Basic Gates) likely discusses factors affecting delay and provides delay models.
*   **Wolf:** Chapter 6 (Physical Design) and Chapter 8 (Performance) will delve into physical parameters and their impact on speed.

**Relation to Course Outcomes:**

*   **CO3 (K3):** Analyzing propagation delay requires understanding the impact of load capacitance, transistor sizing, and supply voltage on the gate's performance.

---

## 3. Propagation Delay Calculation for Inverters

**Objective:** To understand how to model and calculate the propagation delay of a basic CMOS inverter.

**Key Concepts:**

*   **Rising Delay ($t_{pLH}$):** Time taken for the output to rise from 50% of $V_{DD}$ to 50% of $V_{DD}$ when the input goes from low to high. This is dominated by the PMOS transistor charging the load capacitance.
*   **Falling Delay ($t_{pHL}$):** Time taken for the output to fall from 50% of $V_{DD}$ to 50% of $V_{DD}$ when the input goes from high to low. This is dominated by the NMOS transistor discharging the load capacitance.
*   **Effective Resistance ($R_{eff}$):** Represents the average resistance of the PMOS or NMOS transistor during the switching transition.
    *   $R_{eff} = \frac{V_{DD}}{2 I_{DS,sat}}$ (simplified, assuming saturation current dominates)
*   **RC Delay Model:** Propagation delay can be approximated as the time constant of an RC circuit, $t_{pd} \approx R_{eff} \cdot C_L$.

**Derivation of Delay Models (Simplified):**

Let's consider the NMOS discharging the load capacitance $C_L$ for $t_{pHL}$. The NMOS transistor is on, and its current charges $C_L$. We can approximate the average current during discharge.

The current through the NMOS transistor in saturation is $I_{DS} = \frac{1}{2} \mu_n C_{ox} \frac{W_n}{L_n} (V_{GS} - V_{thn})^2$.

A simplified approach to derive the delay often involves an average current during the transition. A common approximation is:

$t_{pHL} \approx \frac{C_L \cdot V_{DD}}{I_{avg\_NMOS}}$

Where $I_{avg\_NMOS}$ is the average current delivered by the NMOS transistor during the discharge. For a more accurate model, one considers the integral of $dt = C_L dv / I_{DS}(v)$.

**Uniformity of PMOS and NMOS:**

For a symmetric inverter (where delay is the same for rising and falling transitions), the effective resistances of PMOS and NMOS transistors are matched. This is typically achieved by sizing the PMOS wider than the NMOS due to the lower mobility of holes ($\mu_p < \mu_n$).
$\frac{W_p}{L_p} \approx \frac{\mu_n}{\mu_p} \frac{W_n}{L_n}$

**Example:**

Consider a CMOS inverter with $V_{DD} = 5V$, $C_L = 10fF$. Assume the NMOS transistor has an average current of $20\mu A$ and the PMOS transistor has an average current of $20\mu A$ (for a symmetric inverter).

*   $t_{pHL} \approx \frac{10fF \cdot 5V}{20\mu A} = \frac{50 \times 10^{-15} V}{20 \times 10^{-6} A} = 2.5 \times 10^{-9} s = 2.5ns$
*   $t_{pLH} \approx \frac{10fF \cdot 5V}{20\mu A} = 2.5ns$

**Important Point to Remember:**

The symmetry of an inverter (equal rising and falling delays) is crucial for balanced performance. This is achieved through transistor sizing.

**Textbook References:**

*   **Kang, Leblebici, Kim:** Chapter 4 (CMOS Inverter and Basic Gates) will provide detailed derivations of inverter delay models.
*   **West, Eshraghian:** Chapter 3 (CMOS Inverter) will also offer similar analysis and models.

**Relation to Course Outcomes:**

*   **CO3 (K3):** This section directly addresses the analysis of static CMOS logic circuits by calculating propagation delays for a fundamental gate.

---

## 4. Delay Calculation for More Complex Gates (NAND, NOR)

**Objective:** To extend the understanding of propagation delay analysis to more complex static CMOS gates like NAND and NOR.

**Key Concepts:**

*   **Series and Parallel Transistors:** The arrangement of transistors in series and parallel significantly affects the equivalent resistance and, consequently, the delay.
    *   **Series NMOS:** The effective resistance increases significantly. The pull-down network is broken if any NMOS in series is off.
    *   **Parallel NMOS:** The effective resistance decreases. The pull-down network is active if at least one NMOS in parallel is on.
    *   **Series PMOS:** The effective resistance decreases. The pull-up network is active if at least one PMOS in series is on.
    *   **Parallel PMOS:** The effective resistance increases significantly. The pull-up network is broken if any PMOS in parallel is off.
*   **Equivalent Resistance:** To simplify analysis, series transistors are modeled by summing their resistances, and parallel transistors are modeled by considering their conductances in parallel.
    *   For $N$ identical transistors in series: $R_{series} = N \cdot R_{unit}$
    *   For $N$ identical transistors in parallel: $\frac{1}{R_{parallel}} = N \cdot \frac{1}{R_{unit}} \Rightarrow R_{parallel} = \frac{R_{unit}}{N}$
    *   **Weighted Transistor Sizing:** Transistors in series need to be sized up to compensate for the increased resistance. For two identical NMOS transistors in series, each needs to be sized twice as wide as a single transistor to achieve the same current.
*   **Worst-Case Delay:** The delay is typically analyzed for the input transition that results in the slowest switching. This often occurs when multiple transistors are in series in the pull-up or pull-down network.

**Example: 2-input NAND Gate**

*   **Pull-down Network:** Two NMOS transistors in series between the output and ground.
*   **Pull-up Network:** Two PMOS transistors in parallel between $V_{DD}$ and the output.

Consider a unit inverter with NMOS of size $(W/L)_{unit}$ and PMOS of size $(W/L)_{unit-PMOS}$. For a symmetric inverter, $(W/L)_{unit-PMOS} \approx k \cdot (W/L)_{unit}$, where $k = \mu_n / \mu_p$.

For a 2-input NAND gate to have a similar delay to a unit inverter:

*   **NMOS sizing:** To compensate for the series connection, each NMOS transistor should be sized with $W/L = 2 \cdot (W/L)_{unit}$.
*   **PMOS sizing:** To compensate for the parallel connection (which reduces resistance), each PMOS transistor should be sized with $W/L = 2 \cdot (W/L)_{unit-PMOS}$.

**Delay Calculation (Conceptual):**

The delay can be approximated using the effective resistance of the entire pull-down (or pull-up) network and the load capacitance.

$t_{pHL} \approx \frac{C_L \cdot V_{DD}}{I_{avg\_NAND\_PD}}$

Where $I_{avg\_NAND\_PD}$ is the average current of the series NMOS network. This current is lower than that of a single NMOS, hence the need for increased sizing.

**Example: 2-input NOR Gate**

*   **Pull-down Network:** Two NMOS transistors in parallel.
*   **Pull-up Network:** Two PMOS transistors in series.

*   **NMOS sizing:** To compensate for the parallel connection, each NMOS transistor should be sized with $W/L = 2 \cdot (W/L)_{unit}$.
*   **PMOS sizing:** To compensate for the series connection, each PMOS transistor should be sized with $W/L = 2 \cdot (W/L)_{unit-PMOS}$.

**Worst-Case Scenarios:**

*   **NAND Gate:** Worst-case pull-down is when both inputs switch simultaneously, and the output goes from high to low. Worst-case pull-up is when one input is high and the other switches from low to high, causing the output to go from low to high.
*   **NOR Gate:** Worst-case pull-down is when one input switches from low to high, and the other is already high. Worst-case pull-up is when both inputs switch simultaneously, and the output goes from low to high.

**Important Points to Remember:**

*   Series transistors increase resistance, requiring wider sizing.
*   Parallel transistors decrease resistance, requiring narrower sizing (relative to the series case).
*   The delay of complex gates is generally higher than that of inverters due to increased transistor count and series/parallel combinations.

**Textbook References:**

*   **Kang, Leblebici, Kim:** Chapter 4 (CMOS Inverter and Basic Gates) will provide detailed analysis of NAND and NOR gate delays and transistor sizing.
*   **Rabaey:** Chapter 5 (CMOS Logic and Circuits) will cover the analysis of complex gates and their performance.

**Relation to Course Outcomes:**

*   **CO3 (K3):** This section is directly about analyzing the propagation delay of static CMOS logic circuits beyond simple inverters, which is a core part of the outcome.

---

## 5. Effective Resistance and Capacitance Models

**Objective:** To introduce more refined models for effective resistance and capacitance that provide a more accurate estimation of propagation delays.

**Key Concepts:**

*   **Electrical Effort ($h$):** The ratio of the load capacitance to the gate's intrinsic output capacitance.
*   **Logical Effort ($g$):** A measure of the delay of a gate relative to an inverter driving the same load. It accounts for the branching and transistor sizing of the gate.
    *   For a gate with $N$ inputs, $g \approx N$ for NAND and $g \approx 2$ for NOR.
    *   More precisely, $g$ is defined based on the ratio of input capacitance to the output capacitance for a minimum-sized inverter.
*   **Fanout-of-4 (FO4) Inverter:** A reference inverter with a load capacitance equal to four times its input capacitance. The delay of an FO4 inverter is a standard unit of delay.
*   **Unit Transistor Sizing:** The minimum sized transistor that provides a specific current capability.
*   **Effective Capacitance:** The total capacitance at the output, including wiring and parasitic capacitances.

**Electrical Effort vs. Logical Effort:**

*   **Electrical Effort ($h = C_L / C_{in,min}$):** Focuses on the load capacitance relative to the gate's minimum input capacitance.
*   **Logical Effort ($g$):** Focuses on the gate's intrinsic delay penalty compared to an inverter, independent of the absolute load. It considers the transistor arrangement and sizing.

**Calculating Propagation Delay using Logical Effort:**

The delay of a gate is often expressed as:

$t_{pd} = t_{unit-inv} (\gamma (g \cdot h) + b)$

Where:
*   $t_{unit-inv}$: Delay of a FO4 inverter.
*   $\gamma$: A process-dependent parameter related to the ratio of input capacitance to intrinsic output capacitance.
*   $g$: Logical effort of the gate.
*   $h$: Electrical effort of the load.
*   $b$: Interconnect or base delay (often considered negligible for simpler analysis).

**Branching Effort ($p$):**

When an output signal drives multiple subsequent gates, the branching effort accounts for the capacitance on each branch.

$p = \prod_{i=1}^{k} (1 + C_{branch,i} / C_{in,i})$

Where $k$ is the number of branches, and $C_{branch,i}$ and $C_{in,i}$ are the capacitance of the branch and the input capacitance of the driven gate, respectively.

The total effort $X$ for a stage becomes:

$X = g \cdot h \cdot p$

And the delay is:

$t_{pd} = t_{unit-inv} (\gamma X + b)$

**Example: Optimizing a 2-input NAND Gate Chain**

Suppose we need to implement a function with a total effort of 20, and we have a FO4 inverter delay of 100ps. We can use a chain of 2-input NAND gates. For a 2-input NAND, $g=4/3$.

We want to find the optimal number of stages $N$ such that the effort per stage $X$ is minimized. $X_{total} = X^N$.
$20 = X^N$

To minimize delay, we want $g \cdot h \cdot p$ to be roughly equal for each stage. A common optimization is to make $g \cdot h$ approximately equal to the "optimal effort" of 4.

If we assume $p=1$ (no branching), then $X = g \cdot h$.
$X \approx 4 \Rightarrow (4/3) \cdot h \approx 4 \Rightarrow h \approx 3$.
This means the load capacitance should be 3 times the input capacitance of the NAND gate.

If we use 2 stages: $X = \sqrt{20} \approx 4.47$.
$g \cdot h \approx 4.47 \Rightarrow (4/3) \cdot h \approx 4.47 \Rightarrow h \approx 3.35$.
So, the load capacitance would be 3.35 times the input capacitance of the NAND gate.

**Textbook References:**

*   **Wolf:** Chapter 8 (Performance) extensively covers logical effort and timing analysis.
*   **West, Eshraghian:** Chapter 6 (CMOS Logic Design Styles) and Chapter 7 (CMOS Design Methods) will discuss logical effort for performance optimization.
*   **Rabaey:** Chapter 5 (CMOS Logic and Circuits) provides details on logical effort and path delay analysis.

**Relation to Course Outcomes:**

*   **CO3 (K3):** Understanding and applying these models is crucial for designing efficient and high-performance static CMOS circuits.

---

## 6. Timing Analysis and Critical Path

**Objective:** To understand how to analyze the timing of a larger digital circuit, identify the critical path, and determine the overall propagation delay.

**Key Concepts:**

*   **Timing Path:** A sequence of gates and interconnects through which a signal propagates from a source (register output, primary input) to a destination (register input, primary output).
*   **Critical Path:** The timing path with the longest propagation delay in a synchronous circuit. This path determines the maximum clock frequency.
*   **Combinational Delay:** The delay through a combinational logic block.
*   **Clock Period:** The reciprocal of the maximum clock frequency ($T_{clk} = 1/f_{clk}$).
*   **Setup Time ($t_{setup}$):** The minimum time a data signal must be stable at a flip-flop's input before the clock edge.
*   **Hold Time ($t_{hold}$):** The minimum time a data signal must be stable at a flip-flop's input after the clock edge.
*   **Clock Skew ($\delta$):** The difference in arrival times of the clock signal at different sequential elements.
*   **Data Arrival Time:** The time when a data signal reaches the input of a flip-flop.
*   **Data Required Time:** The latest time a data signal must arrive at the input of a flip-flop to meet setup time.

**Timing Equation for Setup Time Violation:**

$t_{clk} > t_{comb} + t_{skew} + t_{setup}$

Where:
*   $t_{clk}$: Clock period.
*   $t_{comb}$: Delay of the combinational logic path.
*   $t_{skew}$: Clock skew (can be positive or negative).
*   $t_{setup}$: Setup time of the flip-flop.

**Timing Equation for Hold Time Violation:**

$t_{comb,min} > t_{skew} + t_{hold}$

Where:
*   $t_{comb,min}$: Minimum delay of the combinational logic path.

**Steps for Timing Analysis:**

1.  **Identify all timing paths:** Trace signal propagation from sources to destinations.
2.  **Calculate delay for each path:** Sum the propagation delays of gates and interconnects along the path.
3.  **Determine the critical path:** The path with the maximum delay.
4.  **Check setup and hold time violations:** Ensure that the timing requirements are met for the given clock period and clock skew.

**Example:**

Consider a simple sequential circuit with a flip-flop.
*   Input to FF1 -> Combinational Logic (delay $t_{comb} = 5ns$) -> FF1 Input
*   Clock to Q delay of FF1 = 1ns.
*   Setup time of FF1 = 0.5ns.
*   Clock period $T_{clk} = 10ns$.

*   **Data Arrival Time at FF1 input:** $t_{clk\_arrival} + t_{clk\_to\_Q} + t_{comb}$
    *   Let's assume clock arrives at FF1 at $t=0$.
    *   Data reaches FF1 input at $0 + 1ns + 5ns = 6ns$.
*   **Data Required Time at FF1 input:** $t_{clk\_arrival} + T_{clk} - t_{setup}$
    *   Data needs to be stable by $0 + 10ns - 0.5ns = 9.5ns$.
*   **Slack:** $Required Time - Arrival Time = 9.5ns - 6ns = 3.5ns$.
    *   This positive slack means the setup time is met.

If $t_{comb}$ was 9ns:
*   Data Arrival Time = $0 + 1ns + 9ns = 10ns$.
*   Required Time = $9.5ns$.
*   Slack = $9.5ns - 10ns = -0.5ns$.
    *   This negative slack indicates a setup time violation. The clock period would need to be increased to at least $1ns + 9ns + 0.5ns = 10.5ns$.

**Important Points to Remember:**

*   The critical path dictates the maximum operating frequency.
*   Both setup and hold time constraints must be satisfied.
*   Clock skew can significantly impact timing.

**Textbook References:**

*   **Wolf:** Chapter 8 (Performance) is fundamental for understanding timing analysis and critical paths.
*   **Smith:** Chapter 5 (Timing Analysis) and Chapter 6 (Combinational Logic Synthesis) will offer detailed insights.
*   **Rabaey:** Chapter 10 (Timing and Synchronization) and Chapter 12 (Design for Testability) will cover these aspects.

**Relation to Course Outcomes:**

*   **CO3 (K3):** Identifying and analyzing the critical path is a direct application of understanding propagation delays in static CMOS circuits.

---

## 7. Practice Questions and Exercises

**Objective:** To test the understanding of propagation delays and related concepts.

---

**Question 1:**

A CMOS inverter with a $V_{DD}$ of 3.3V has a load capacitance of 15fF. If the equivalent current driving capability of the NMOS and PMOS transistors during switching is approximately 50µA, what is the approximate propagation delay ($t_{pd}$) of the inverter, assuming symmetric delays?

**Answer:**
Using the simplified model $t_{pd} \approx \frac{C_L \cdot V_{DD}}{I_{drive}}$:
$t_{pd} \approx \frac{15fF \cdot 3.3V}{50\mu A} = \frac{15 \times 10^{-15} F \cdot 3.3 V}{50 \times 10^{-6} A}$
$t_{pd} \approx \frac{49.5 \times 10^{-15}}{50 \times 10^{-6}} s \approx 0.99 \times 10^{-9} s = 0.99 ns$

---

**Question 2:**

Consider a 2-input NAND gate. Which input transition would likely lead to the worst-case falling delay ($t_{pHL}$)? Explain why.

**Answer:**
The worst-case falling delay for a 2-input NAND gate occurs when the output transitions from high to low. This transition is controlled by the pull-down network (NMOS transistors). For a NAND gate, the NMOS transistors are in series. The pull-down path is only complete when *both* NMOS transistors are on. Therefore, the worst-case scenario for the output to go low is when both inputs switch from low to high simultaneously, as this involves the longest path through the series NMOS transistors. If only one input switches, the other NMOS might still be off, preventing the output from discharging quickly.

---

**Question 3:**

If a CMOS inverter has a logical effort $g=1$ and an electrical effort $h=4$, and the delay of a FO4 inverter ($t_{unit-inv}$) is 80ps, what is the approximate propagation delay of this inverter, assuming $\gamma=1$ and negligible base delay?

**Answer:**
Using the formula $t_{pd} \approx t_{unit-inv} (\gamma \cdot g \cdot h)$:
$t_{pd} \approx 80ps \cdot (1 \cdot 1 \cdot 4)$
$t_{pd} \approx 320ps$

---

**Question 4:**

Explain the concept of "Logical Effort" and how it helps in the design of high-speed CMOS circuits.

**Answer:**
Logical Effort ($g$) is a metric that quantifies the delay penalty of a logic gate compared to a minimum-sized inverter. It accounts for the transistor arrangement (series/parallel) and the relative sizing required to achieve a certain current drive. Gates with higher logical effort (e.g., complex gates with transistors in series) tend to have larger intrinsic delays.

Logical Effort is crucial for designing high-speed circuits because it allows for:
1.  **Path Optimization:** By knowing the logical effort of different gates, designers can choose gate types and fan-out appropriately to balance the effort across a logic path.
2.  **Stage Fan-out Calculation:** It helps in determining the optimal fan-out for each gate stage, ensuring that the load capacitance is appropriately matched to the gate's driving capability for minimum delay.
3.  **Number of Stages:** It aids in determining the optimal number of logic stages for a given function, minimizing the overall path delay.

By minimizing the total effort (product of logical effort, electrical effort, and branching effort) across a path, designers can achieve faster switching speeds and higher operating frequencies.

---

## 8. Summary and Key Takeaways

*   **Propagation Delay ($t_{pd}$)** is a fundamental metric of CMOS circuit speed, representing the time for an output to change in response to an input change.
*   **Key factors** influencing delay include Load Capacitance ($C_L$), Supply Voltage ($V_{DD}$), transistor characteristics (W/L, $V_{th}$, mobility), and temperature.
*   **CMOS Inverter Delay** can be approximated by RC models, with $t_{pd} \approx R_{eff} \cdot C_L$. Symmetric delays require careful transistor sizing (PMOS wider than NMOS).
*   **Complex gates** (NAND, NOR) have increased delays due to series and parallel transistor arrangements. Series connections increase effective resistance, requiring larger transistor sizes.
*   **Logical Effort ($g$) and Electrical Effort ($h$)** provide a more systematic way to analyze and optimize gate and path delays, especially for multi-stage circuits.
*   **The Critical Path** in a synchronous circuit is the longest delay path, which determines the maximum clock frequency.
*   **Timing Analysis** involves calculating path delays and ensuring adherence to setup and hold time requirements, considering clock skew.

---

## 9. Connection to Course Outcomes

*   **CO1 (K2):** Understanding propagation delays is foundational for comprehending the performance aspects of ASICs, SoCs, and FPGAs. The ability to predict and minimize delays directly impacts system speed.
*   **CO2 (K2):** While not directly about fabrication techniques, the parameters derived from fabrication (like mobility, $V_{th}$, oxide thickness) are critical inputs for delay calculations. Process variations affect delay.
*   **CO3 (K3):** This entire module is dedicated to the design and analysis of static CMOS logic circuits. Quantifying and minimizing propagation delays is central to meeting design specifications.
*   **CO4 (K3):** Understanding delay in static CMOS provides a baseline for comparing and analyzing dynamic logic circuits and basic storage cells. The principles of switching and charge/discharge times are common.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
