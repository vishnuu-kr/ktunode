---
title: "Propagation Delay"
subject: "VLSI DESIGN"
module: "Module 1: CMOS Fundamentals for Digital VLSI Design :"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b2f2"
status: "completed"
scrapedAt: "2026-05-20T16:17:11.455Z"
---
# VLSI Design - Module 1: CMOS Fundamentals - Propagation Delay

## 1. Learning Outcomes

Upon completion of this topic, you will be able to:

*   Define propagation delay and its significance in digital VLSI design.
*   Explain the factors affecting propagation delay in CMOS circuits.
*   Calculate the propagation delay for simple CMOS inverter circuits.
*   Understand the concepts of rise time, fall time, and their relationship to propagation delay.
*   Apply techniques to minimize propagation delay in CMOS circuits.
*   Distinguish between different definitions of propagation delay (50% point, 10%-90% point, etc.)
*   Analyze the impact of transistor sizing and load capacitance on propagation delay.

## 2. Key Concepts and Definitions

*   **Propagation Delay (t<sub>p</sub>):**  A measure of the time required for the output of a logic gate to change state in response to a change in its input.  It's a critical performance metric for digital circuits, as it directly impacts the clock frequency and overall speed of operation.

*   **t<sub>pHL</sub> (High-to-Low Propagation Delay):** The time it takes for the output to fall from 50% of its initial value (logic HIGH) to 50% of its final value (logic LOW) after the input transition.

*   **t<sub>pLH</sub> (Low-to-High Propagation Delay):** The time it takes for the output to rise from 50% of its initial value (logic LOW) to 50% of its final value (logic HIGH) after the input transition.

*   **t<sub>p</sub> (Average Propagation Delay):**  The average of t<sub>pHL</sub> and t<sub>pLH</sub>:  t<sub>p</sub> = (t<sub>pHL</sub> + t<sub>pLH</sub>) / 2

*   **Rise Time (t<sub>r</sub>):**  The time it takes for the output signal to rise from 10% to 90% of its final value.

*   **Fall Time (t<sub>f</sub>):** The time it takes for the output signal to fall from 90% to 10% of its initial value.

*   **Load Capacitance (C<sub>L</sub>):** The total capacitance seen at the output of a gate. This capacitance includes the gate capacitance of the following gate(s), the wiring capacitance, and the drain capacitance of the transistors in the gate.

*   **Transistor Sizing (W/L):**  The ratio of the transistor's width (W) to its length (L). Increasing W/L increases the drive strength of the transistor, which can reduce propagation delay.

*   **Mobility (μ):**  A measure of how easily carriers (electrons or holes) can move through a semiconductor material. Higher mobility leads to faster switching speeds.

*   **Threshold Voltage (V<sub>TH</sub>):** The gate-source voltage at which a transistor starts to conduct.

*   **Supply Voltage (V<sub>DD</sub>):** The voltage supplied to the circuit. Higher supply voltage generally leads to faster switching speeds, but also increases power consumption.

## 3. Factors Affecting Propagation Delay

The propagation delay in CMOS circuits is influenced by several factors:

*   **Load Capacitance (C<sub>L</sub>):**  The most significant factor. Higher C<sub>L</sub> requires more time to charge and discharge, increasing the propagation delay.  `t_p ∝ C_L`

*   **Transistor Size (W/L):**  Increasing the transistor size (W/L) reduces the on-resistance (R<sub>ON</sub>) of the transistor, allowing it to charge and discharge the load capacitance faster.  `t_p ∝ 1/(W/L)`

*   **Supply Voltage (V<sub>DD</sub>):**  Increasing V<sub>DD</sub> increases the transistor current, leading to faster charging and discharging of C<sub>L</sub>.  However, the relationship is not linear and faces diminishing returns at higher voltages. `t_p ∝ 1/V_DD` (approximation)

*   **Threshold Voltage (V<sub>TH</sub>):**  A lower V<sub>TH</sub> results in faster switching speeds, as the transistor turns on at a lower gate voltage. However, lowering V<sub>TH</sub> can also increase leakage current.

*   **Temperature:**  Temperature affects transistor mobility and threshold voltage. Higher temperatures generally reduce mobility and increase threshold voltage, which can increase propagation delay.

*   **Technology Process:**  The specific technology used in manufacturing (e.g., 90nm, 45nm, 7nm) significantly impacts transistor characteristics and performance.  Smaller technology nodes generally have faster switching speeds.

## 4. Propagation Delay in CMOS Inverter

The CMOS inverter is the most fundamental CMOS gate. Understanding its propagation delay provides a foundation for analyzing more complex circuits.

*   **Simplified Model:**  We can model the CMOS inverter as an equivalent RC circuit, where R is the on-resistance of the transistor (either NMOS or PMOS) and C is the load capacitance (C<sub>L</sub>).

*   **Estimating R<sub>ON</sub>:**  The on-resistance of a transistor can be approximated as:

    R<sub>ON</sub> ≈ V<sub>DD</sub> / I<sub>DSAT</sub>

    where I<sub>DSAT</sub> is the saturation current of the transistor.

*   **Propagation Delay Equations (Approximations):**

    *   **t<sub>pHL</sub> (High-to-Low):** t<sub>pHL</sub> ≈ 0.69 * R<sub>ON_N</sub> * C<sub>L</sub>  (where R<sub>ON_N</sub> is the on-resistance of the NMOS transistor)

    *   **t<sub>pLH</sub> (Low-to-High):** t<sub>pLH</sub> ≈ 0.69 * R<sub>ON_P</sub> * C<sub>L</sub>  (where R<sub>ON_P</sub> is the on-resistance of the PMOS transistor)

    *   **t<sub>p</sub> (Average):**  t<sub>p</sub> ≈ 0.69 * (R<sub>ON_N</sub> + R<sub>ON_P</sub>)/2 * C<sub>L</sub>

*   **Equal Rise and Fall Times:** For symmetric performance (equal rise and fall times), the PMOS transistor is typically sized larger than the NMOS transistor.  This compensates for the lower hole mobility in PMOS devices. The PMOS to NMOS width ratio is typically around 2:1 or 3:1.

## 5. Minimizing Propagation Delay

Several techniques can be used to minimize propagation delay in CMOS circuits:

*   **Reduce Load Capacitance (C<sub>L</sub>):**
    *   Minimize wiring capacitance by shortening wire lengths.
    *   Use smaller transistors in subsequent gates.
    *   Optimize the layout to reduce overlap capacitance.

*   **Increase Transistor Size (W/L):**
    *   Larger transistors provide lower on-resistance, leading to faster switching.
    *   However, increasing transistor size also increases gate capacitance, so there's a point of diminishing returns.

*   **Increase Supply Voltage (V<sub>DD</sub>):**
    *   Higher V<sub>DD</sub> increases transistor current and reduces propagation delay.
    *   Be mindful of power consumption limitations.

*   **Reduce Threshold Voltage (V<sub>TH</sub>):**
    *   Lower V<sub>TH</sub> leads to faster switching.
    *   Balance against increased leakage current.

*   **Transistor Ordering:** For complex gates like NAND and NOR, the order of transistors can impact delay.  Placing the transistor connected directly to the output closest to the output node can reduce the effective capacitance the driver sees.

*   **Buffer Insertion:** Inserting buffers can help drive large capacitive loads and improve signal integrity, effectively reducing propagation delay in long chains.

## 6. Different Definitions of Propagation Delay

While the 50% point is the most common definition, other definitions exist:

*   **10%-90% Propagation Delay:**  Measures the time it takes for the output to change from 10% to 90% (or 90% to 10%) of its final value.  More closely related to rise and fall times.

*   **Input-to-Output Delay:** This considers the delay from the input reaching a *specified* threshold to the output reaching *another specified* threshold. This is more general and used when the input and output swing ranges are significantly different.

The specific definition used often depends on the application and the tools used for simulation and analysis.

## 7. Impact of Transistor Sizing and Load Capacitance: Examples

**Example 1: Impact of Load Capacitance**

Consider a CMOS inverter driving a load capacitance of 10fF.  If we double the load capacitance to 20fF, the propagation delay will approximately double.

**Example 2: Impact of Transistor Sizing**

Consider a CMOS inverter with NMOS transistor width W<sub>N</sub> and PMOS transistor width W<sub>P</sub>. If we double both W<sub>N</sub> and W<sub>P</sub>, the on-resistance of both transistors will be halved, and the propagation delay will approximately be halved (assuming the increase in gate capacitance due to the larger transistors is negligible compared to the load capacitance).  However, increasing transistor sizes indefinitely leads to diminishing returns due to increased gate capacitance.

## 8. Practice Questions/Exercises

**Question 1:**

A CMOS inverter has an NMOS transistor with R<sub>ON_N</sub> = 1kΩ and a PMOS transistor with R<sub>ON_P</sub> = 2kΩ. The load capacitance C<sub>L</sub> is 50fF.  Estimate the t<sub>pHL</sub>, t<sub>pLH</sub>, and t<sub>p</sub>.

**Answer:**

*   t<sub>pHL</sub> ≈ 0.69 * 1kΩ * 50fF = 34.5 ps
*   t<sub>pLH</sub> ≈ 0.69 * 2kΩ * 50fF = 69 ps
*   t<sub>p</sub> ≈ (34.5 ps + 69 ps) / 2 = 51.75 ps

**Question 2:**

What are the three primary techniques used to reduce propagation delay in CMOS circuits? Explain the trade-offs of each.

**Answer:**

1.  **Reducing Load Capacitance (C<sub>L</sub>):**
    *   **Trade-off:** Minimizing C<sub>L</sub> can be challenging as it depends on the circuit's design and layout. It also affects the drive strength of previous stages as they now see reduced load.
2.  **Increasing Transistor Size (W/L):**
    *   **Trade-off:** Larger transistors have lower on-resistance but also increased gate capacitance, potentially slowing down the previous stage. Also consumes more area.
3.  **Increasing Supply Voltage (V<sub>DD</sub>):**
    *   **Trade-off:** Higher V<sub>DD</sub> increases power consumption and may impact device reliability.

**Question 3:**

Explain why the PMOS transistor in a CMOS inverter is typically sized larger than the NMOS transistor.

**Answer:**

The PMOS transistor is typically sized larger to compensate for the lower hole mobility compared to electron mobility in NMOS transistors. This ensures that the pull-up strength (PMOS) is comparable to the pull-down strength (NMOS), resulting in more symmetric rise and fall times, and balanced high-to-low and low-to-high propagation delays.

## 9. Important Points to Remember

*   Propagation delay is a critical performance metric in digital VLSI design.
*   Load capacitance is the most significant factor affecting propagation delay.
*   Transistor sizing, supply voltage, and threshold voltage also play important roles.
*   The 50% point definition is commonly used for propagation delay.
*   Balancing rise and fall times is important for achieving optimal performance.
*   Minimizing propagation delay often involves trade-offs with power consumption and area.
*   Always consider the impact of design choices on the overall system performance.
