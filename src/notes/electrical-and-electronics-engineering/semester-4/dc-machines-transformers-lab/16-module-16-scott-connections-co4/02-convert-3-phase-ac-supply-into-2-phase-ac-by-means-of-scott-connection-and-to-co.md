---
title: "Convert 3-phase AC supply into 2-phase AC by means of Scott connection and to conduct the load test for finding the performance"
subject: "DC MACHINES & TRANSFORMERS LAB"
module: "Module 16: Scott Connections (CO4)"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f360e6"
status: "completed"
scrapedAt: "2026-05-23T16:15:46.938Z"
---
# DC MACHINES & TRANSFORMERS LAB - Module 16: Scott Connections (CO4)

## Topic: Convert 3-phase AC Supply into 2-phase AC by Means of Scott Connection and Conduct Load Test for Finding Performance

### Learning Outcomes:
Upon completion of this module, you will be able to:
* Understand the principle of the Scott connection for converting three-phase to two-phase power.
* Connect Scott transformers to a three-phase supply.
* Connect a two-phase load to the Scott transformer secondary.
* Conduct a load test on the Scott transformer setup.
* Calculate and analyze the performance parameters (efficiency, regulation, etc.) of the Scott connection under load.
* Relate the practical implementation of Scott connections to theoretical concepts in transformer theory.

### Course Outcomes Addressed:
* **CO4:** Examine the performance of individual and parallel connected single-phase transformers by conducting load/no-load tests. (Knowledge Level: K3) - This module directly applies to this CO by examining the performance of two interconnected single-phase transformers (Scott connection) under load.

### 1. Introduction to Scott Connection

The Scott connection is a specific transformer connection used to convert a three-phase alternating current (AC) supply into a two-phase AC supply, or vice-versa. This is particularly useful in situations where a two-phase system is required, such as for powering certain types of AC motors or for specialized industrial applications.

**Key Concept:** The Scott connection utilizes two specially designed single-phase transformers: a **main transformer** and a **teaser transformer**. These transformers have specific winding ratios and tapping points to achieve the phase conversion.

**Reference:** Both Bimbhra (Chapter on Three-Phase Transformers) and Kothari & Nagrath (Chapter on Three-Phase Transformers) discuss different transformer interconnections, including principles relevant to phase conversion. While they might not detail the Scott connection extensively in the context of conversion *from* three-phase to two-phase as a primary focus, the underlying principles of transformer action and three-phase systems are foundational.

### 2. Scott Connection for Three-Phase to Two-Phase Conversion

#### 2.1. Components Required:
*   **Three-Phase AC Supply:** The source of power.
*   **Main Transformer:** A single-phase transformer with a primary winding designed to be connected across two phases of the three-phase supply. Its secondary winding provides one of the two-phase outputs.
*   **Teaser Transformer:** A single-phase transformer with a primary winding designed to be connected across one phase of the three-phase supply and a center tap (or a specific tap) of the main transformer's primary winding. Its secondary winding provides the second two-phase output.
*   **Two-Phase Load:** The apparatus to be powered by the two-phase output.
*   **Measuring Instruments:**
    *   Voltmeters (to measure primary and secondary voltages)
    *   Ammeters (to measure primary and secondary currents)
    *   Wattmeters (to measure power consumed by the primary and delivered to the load)
    *   Rheostats or variable loads (for load testing)

#### 2.2. Principle of Operation:

The Scott connection works by creating a specific voltage and phase relationship between the primary windings of the two transformers.

*   **Main Transformer Primary:** Connected across two phases of the three-phase supply (e.g., Phases A and B).
*   **Teaser Transformer Primary:** Connected between the third phase (Phase C) and the midpoint of the main transformer's primary winding.

Let the line voltages of the three-phase supply be $V_{AB}$, $V_{BC}$, and $V_{CA}$. These voltages are equal in magnitude and displaced by 120 degrees.

Consider the three-phase supply with phase voltages $V_A$, $V_B$, and $V_C$. The line voltages are related as follows:
$V_{AB} = V_A - V_B$
$V_{BC} = V_B - V_C$
$V_{CA} = V_C - V_A$

In a Scott connection:
1.  The primary of the **main transformer** is connected across two lines, say A and B. The voltage across its primary is $V_{AB}$. The secondary of the main transformer provides one phase of the two-phase output (let's call it Phase P).
2.  The primary of the **teaser transformer** is connected between the third line, C, and the **midpoint** of the main transformer's primary winding.
    *   Crucially, the primary of the teaser transformer is typically designed to have a specific number of turns, often $\sqrt{3}/2$ (or approximately 0.866) times the number of turns of the main transformer primary.
    *   Alternatively, a tap on the main transformer primary winding (usually at the midpoint, or a tap designed to provide the correct voltage) is used.
    *   The voltage across the teaser transformer primary is the voltage between phase C and the midpoint of the main transformer primary. This voltage is mathematically derived to be $90^\circ$ out of phase with the voltage across the main transformer primary.

**Result:** The two secondary windings, when connected appropriately, produce two AC voltages that are equal in magnitude and displaced by $90^\circ$ from each other, thus forming a two-phase supply.

#### 2.3. Transformer Design Considerations:

*   **Main Transformer:** Rated for the full line-to-line voltage on its primary. Its kVA rating is typically around 50% of the total kVA required for the two-phase load.
*   **Teaser Transformer:** Rated for a primary voltage of approximately $0.866$ times the line-to-line voltage. Its primary winding is often designed with a tap at the midpoint (or a specific tap) to achieve the $90^\circ$ phase displacement. Its kVA rating is also typically around 50% of the total kVA required.

**Important Note:** For a balanced two-phase load, the kVA ratings of the main and teaser transformers are usually chosen to be equal, and their primary windings are designed to have specific voltage ratings and turn ratios that facilitate the phase conversion. Often, the teaser transformer's primary has $\frac{\sqrt{3}}{2}$ turns of the main transformer's primary.

### 3. Experimental Setup and Procedure

#### 3.1. Circuit Diagram:

**(Please visualize a circuit diagram here, as it cannot be directly rendered. The diagram should show:)**
*   A three-phase supply connected to the primary terminals of the main transformer (across two lines) and the teaser transformer (between the third line and the midpoint of the main transformer's primary).
*   The secondary windings of the main and teaser transformers connected to form the two-phase output.
*   The two-phase output connected to a two-phase load (e.g., two single-phase loads connected in quadrature, or a two-phase motor).
*   Appropriate measuring instruments (voltmeters, ammeters, wattmeters) in both the primary and secondary circuits.

#### 3.2. Procedure for Load Test:

1.  **Connections:**
    *   Connect the primary of the main transformer across two phases of the three-phase supply (e.g., terminals L1 and L2).
    *   Connect the primary of the teaser transformer between the third phase (L3) and the midpoint of the main transformer's primary winding.
    *   Connect the secondary windings of the main and teaser transformers to form the two-phase output. Ensure the phase displacement is correct (90 degrees). If a phase reversal occurs, swap the connections to one of the secondary windings.
    *   Connect the two-phase load to the secondary output. Start with no load.
    *   Connect the voltmeters across the primary lines and secondary phases.
    *   Connect ammeters in series with each primary line and each secondary phase.
    *   Connect wattmeters to measure the total power input to the primary side.

2.  **No-Load Test (Optional but Recommended):**
    *   With no load connected to the secondary, switch on the three-phase supply.
    *   Measure the primary and secondary voltages. Verify the phase displacement of the secondary voltages.
    *   Record these values. This helps in understanding the transformer's characteristics without load.

3.  **Load Test:**
    *   Apply a two-phase load to the secondary terminals. Start with a light load (e.g., by adjusting rheostats or using a small load).
    *   Gradually increase the load by steps. At each step:
        *   Measure primary line voltages ($V_{L1-L2}$, $V_{L2-L3}$, $V_{L3-L1}$).
        *   Measure primary line currents ($I_{L1}$, $I_{L2}$, $I_{L3}$).
        *   Measure secondary phase voltages ($V_P$, $V_Q$ for the two phases).
        *   Measure secondary phase currents ($I_P$, $I_Q$ for the two phases).
        *   Measure the total power input using appropriate wattmeters (e.g., using the two-wattmeter method for the three-phase input).
    *   Continue taking readings until the desired maximum load is reached or the transformer's limits are approached.

4.  **Data Tabulation:** Record all measurements in a clear tabular format.

### 4. Calculations and Performance Analysis

From the recorded data, the following can be calculated:

#### 4.1. Input Power:
*   For a balanced three-phase supply, the total input power ($P_{in}$) can be measured using two wattmeters connected in the primary lines.

#### 4.2. Output Power:
*   For a two-phase system, the total output power ($P_{out}$) is the sum of the power delivered to each phase of the load. If the load is balanced:
    $P_{out} = V_P \cdot I_P \cdot \cos(\phi_P) + V_Q \cdot I_Q \cdot \cos(\phi_Q)$
    Where $\phi_P$ and $\phi_Q$ are the phase angles of the load.
*   If wattmeters are directly connected to measure the power in each phase of the two-phase load:
    $P_{out} = P_1 + P_2$ (where $P_1$ and $P_2$ are the power readings of the two-phase load wattmeters).

#### 4.3. Efficiency ($\eta$):
*   Efficiency is defined as the ratio of output power to input power.
    $\eta = \frac{P_{out}}{P_{in}} \times 100\%$

#### 4.4. Voltage Regulation:
*   Voltage regulation is a measure of the change in secondary voltage with change in load.
    Voltage Regulation $= \frac{|V_{secondary, NL}| - |V_{secondary, FL}|}{|V_{secondary, FL}|} \times 100\%$
    Where:
    *   $V_{secondary, NL}$ is the secondary voltage at no load.
    *   $V_{secondary, FL}$ is the secondary voltage at full load.
    *   This calculation should be done for both phases of the two-phase output.

#### 4.5. Losses:
*   Total losses = Input Power - Output Power
    Losses = $P_{in} - P_{out}$
    These losses primarily consist of:
    *   **Core Losses (Iron Losses):** Constant losses due to hysteresis and eddy currents in the core, occurring even at no load.
    *   **Copper Losses (Ohmic Losses):** Variable losses due to the resistance of the windings, proportional to the square of the current ($I^2R$).

#### 4.6. Performance Characteristics:
*   Plot graphs of:
    *   Efficiency vs. Output Power (or Load kVA)
    *   Voltage Regulation vs. Output Power (or Load kVA)
    *   Power Factor vs. Output Power (or Load kVA)

### 5. Important Points to Remember

*   **Phase Conversion:** The Scott connection is fundamentally about converting the phase structure of AC power.
*   **Transformer Design:** The specific design of the main and teaser transformers (winding turns, voltage ratings, tap points) is crucial for achieving the correct phase conversion. The teaser transformer primary usually has $\frac{\sqrt{3}}{2}$ turns of the main transformer primary.
*   **Load Balancing:** For accurate analysis, the two-phase load should ideally be balanced, meaning both phases draw equal current and have the same power factor.
*   **Instrumentation:** Correct connection of measuring instruments is vital for accurate readings. Ensure wattmeters are connected to measure total input power, and secondary power is also measured accurately.
*   **Safety:** Always follow standard electrical lab safety procedures. Ensure proper grounding and insulation.

### 6. Practice Questions and Answers

**Question 1:** What is the primary purpose of the Scott connection in a transformer setup?
**Answer:** The primary purpose of the Scott connection is to convert a three-phase AC supply into a two-phase AC supply, or vice-versa.

**Question 2:** What are the two main transformers used in a Scott connection, and what is their role?
**Answer:** The two main transformers are the **main transformer** and the **teaser transformer**. The main transformer's primary is connected across two phases of the three-phase supply, and its secondary provides one phase of the two-phase output. The teaser transformer's primary is connected between the third phase and the midpoint of the main transformer's primary, and its secondary provides the second phase of the two-phase output, which is $90^\circ$ out of phase with the first.

**Question 3:** If the input to a Scott connection is a balanced 400V, 50Hz, three-phase supply, and the main transformer secondary gives 200V, what would be the voltage from the teaser transformer secondary for a balanced two-phase output of equal voltage magnitude?
**Answer:** For a balanced two-phase output, the voltages from both secondaries must be equal in magnitude. Therefore, the teaser transformer secondary should also provide 200V. The crucial aspect for the Scott connection is the $90^\circ$ phase displacement between these two secondary voltages.

**Question 4:** The primary of the teaser transformer in a Scott connection is connected between the third phase of the three-phase supply and the midpoint of the main transformer's primary winding. Why is the midpoint tapping important?
**Answer:** The midpoint tapping on the main transformer's primary winding is essential for establishing the correct voltage and phase relationship across the teaser transformer's primary. This voltage, when combined with the voltage of the third phase, results in a voltage that is $90^\circ$ displaced from the voltage across the main transformer's primary, thus enabling the generation of a two-phase supply.

**Question 5:** Calculate the efficiency of the Scott connection if the input power is 5 kW and the output power delivered to a two-phase load is 4.5 kW.
**Answer:**
Efficiency $(\eta) = \frac{P_{out}}{P_{in}} \times 100\%$
$\eta = \frac{4.5 \text{ kW}}{5 \text{ kW}} \times 100\%$
$\eta = 0.9 \times 100\%$
$\eta = 90\%$

**Question 6:** What are the main types of losses in a Scott connected transformer?
**Answer:** The main types of losses are **core losses** (iron losses), which are constant, and **copper losses** (ohmic losses), which are proportional to the square of the current.

---
**End of Module Notes**
