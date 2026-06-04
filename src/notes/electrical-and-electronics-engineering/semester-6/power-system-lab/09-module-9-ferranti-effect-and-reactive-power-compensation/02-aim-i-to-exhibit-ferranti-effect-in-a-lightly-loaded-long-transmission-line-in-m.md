---
title: "Aim: (i) To exhibit Ferranti effect in a lightly loaded long transmission line in MATLAB Simulink and to show the effect of reactive power compensation."
subject: "POWER SYSTEM LAB"
module: "Module 9: Ferranti Effect and Reactive Power Compensation"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f367f6"
status: "completed"
scrapedAt: "2026-05-23T16:31:08.040Z"
---
# Power System Lab: Module 9 - Ferranti Effect and Reactive Power Compensation

## Topic: Exhibiting Ferranti Effect and Reactive Power Compensation in MATLAB Simulink

---

## 1. Introduction & Theoretical Background

This module focuses on understanding and demonstrating the **Ferranti Effect** in long transmission lines and exploring methods for its mitigation through **Reactive Power Compensation**. We will utilize MATLAB Simulink to model and analyze these phenomena.

### 1.1 Ferranti Effect

*   **Definition:** The Ferranti effect is a phenomenon observed in long, lightly loaded or unloaded transmission lines where the voltage at the receiving end is **higher** than the voltage at the sending end.
*   **Cause:** This effect is primarily caused by the **capacitance** of the transmission line. The distributed capacitance of the line acts like a series of shunt capacitors.
    *   When the line is lightly loaded, the current drawn by the load is small, and the charging current drawn by the line capacitance becomes significant relative to the load current.
    *   This charging current flows through the inductance of the line, causing a voltage rise at the receiving end due to inductive reactance.
    *   Think of it as the line's capacitance "supplying" reactive power to the line's inductance, leading to a voltage boost.
*   **Factors Influencing Ferranti Effect:**
    *   **Line Length:** The longer the transmission line, the greater the distributed capacitance, and thus the more pronounced the Ferranti effect. It's typically significant for lines longer than 100 km.
    *   **Line Loading:** The Ferranti effect is most noticeable in **lightly loaded** or **unloaded** lines. As the load increases, the voltage drop across the line's impedance starts to counteract the voltage rise caused by capacitance.
    *   **Line Parameters:** The inductance (L) and capacitance (C) per unit length of the line play a crucial role. Higher C and lower L generally lead to a stronger Ferranti effect.
    *   **Frequency:** The effect is also dependent on the system frequency.
*   **Consequences:**
    *   **Overvoltage:** The elevated voltage at the receiving end can exceed the insulation limits of equipment, leading to potential damage or breakdown.
    *   **Increased Reactive Power Consumption:** While the line capacitance supplies reactive power, the inductive components of the line and the load may still require significant reactive power, leading to overall system inefficiency.
    *   **Switching Surges:** The presence of Ferranti effect can exacerbate switching surges, making system operation more challenging.

### 1.2 Reactive Power Compensation

*   **Definition:** Reactive power compensation is the process of injecting or absorbing reactive power into the power system to control voltage levels and improve power factor.
*   **Purpose:**
    *   **Voltage Regulation:** To maintain voltage within acceptable limits at various points in the system, especially during light loading conditions where Ferranti effect can cause overvoltage.
    *   **Power Factor Improvement:** To reduce the reactive power drawn from the source, thereby improving the overall efficiency of power transfer.
    *   **Stability Enhancement:** To improve the transient and steady-state stability of the power system.
*   **Methods of Reactive Power Compensation:**
    *   **Capacitor Banks:** Used to inject reactive power into the system, typically to counteract inductive loads and voltage sags. **(Note: In the context of Ferranti effect, we would typically be looking to *absorb* reactive power to counteract the capacitive effect, or use controlled injection/absorption.**)
    *   **Inductor Banks (Reactors):** Used to absorb reactive power from the system, typically to counteract capacitive effects and voltage rises. This is the primary method for mitigating Ferranti effect.
        *   **Shunt Reactors:** Connected in parallel with the transmission line. They are effective in absorbing reactive power and controlling overvoltage caused by line capacitance, especially during light loading.
        *   **Series Capacitors:** Connected in series with the transmission line to counteract the line inductance and improve voltage profile and stability. While useful for voltage drop compensation, they *increase* the overall capacitance and can worsen Ferranti effect if not properly coordinated.
    *   **Synchronous Condensers:** Rotating synchronous machines that can operate at leading or lagging power factors to either generate or absorb reactive power. They offer dynamic voltage control.
    *   **Static VAR Compensators (SVCs):** Thyristor-controlled reactive power compensation devices that can rapidly inject or absorb reactive power, providing dynamic voltage control.
    *   **FACTS (Flexible AC Transmission Systems) Devices:** A broad category of power electronic-based devices that enhance the controllability and power transfer capability of AC transmission systems, including SVCs, STATCOMs (Static Synchronous Compensators), TCSC (Thyristor-Controlled Series Capacitor), etc.

---

## 2. Learning Outcomes and Course Outcomes Alignment

This lab exercise directly addresses the following:

### 2.1 Learning Outcomes (LOs)

*   **LO1: To exhibit Ferranti effect in a lightly loaded long transmission line in MATLAB Simulink.**
    *   This LO will be achieved by modeling a long transmission line in Simulink with light or no load and observing the voltage difference between sending and receiving ends.
*   **LO2: To show the effect of reactive power compensation (specifically using shunt reactors) on the Ferranti effect.**
    *   This LO will be achieved by adding a shunt reactor to the transmission line model and observing how it mitigates the voltage rise at the receiving end.

### 2.2 Course Outcomes (COs)

*   **CO1: Develop mathematical models and conduct steady state and transient analysis of power system networks using standard / dedicated software.**
    *   **Knowledge Level: K3 (Application)**
    *   This CO is directly addressed by using MATLAB Simulink to model the transmission line and analyze its steady-state behavior under different loading and compensation scenarios. We are applying our understanding of transmission line parameters and reactive power compensation principles to a simulated power system.
*   **CO2: Conduct appropriate tests for any power system component as per standards to analyse their performance.**
    *   **Knowledge Level: K3 (Application)**
    *   While we are not conducting physical tests, the Simulink simulation acts as a "virtual test." We are simulating the behavior of a transmission line under specific conditions (light loading) and "testing" the effectiveness of a compensation device (shunt reactor) by observing its impact on voltage profiles. This is analogous to conducting tests to analyze performance.

---

## 3. Modeling in MATLAB Simulink

To exhibit the Ferranti effect and its compensation, we will build a Simulink model representing a long transmission line.

### 3.1 Components Required:

1.  **Power Transmission Line Block:** From the "Simscape Electrical" library, specifically under "Specialized Power Systems" -> "Fundamental Blocks" -> "Elements" -> "Transmission Line".
    *   This block allows for detailed modeling of distributed parameters (R, L, C) per unit length.
2.  **AC Voltage Source Block:** To represent the sending end voltage.
3.  **RL Load Block (or other load types):** To represent the receiving end load. For demonstrating Ferranti effect, this load should be lightly loaded or set to zero.
4.  **Shunt Reactor Block:** From the "Simscape Electrical" library, under "Specialized Power Systems" -> "Fundamental Blocks" -> "Elements" -> "Shunt Reactor".
5.  **Measurement Blocks:**
    *   **Voltage Measurement:** To measure voltage at sending and receiving ends.
    *   **Current Measurement:** To measure current at sending and receiving ends.
    *   **Power Measurement:** To measure real and reactive power at sending and receiving ends.
6.  **Scope Block:** To visualize voltage and current waveforms.
7.  **Powergui Block:** Essential for any Simscape Electrical simulation.

### 3.2 Model Construction Steps:

1.  **Open MATLAB and create a new Simulink model.**
2.  **Add the Powergui block.**
3.  **Add an AC Voltage Source:** Set its voltage and frequency according to typical transmission line parameters (e.g., 220 kV, 50 Hz).
4.  **Add the Power Transmission Line block:**
    *   **Configuration:** Set to "Distributed parameter line".
    *   **Parameters:**
        *   **Line length (km):** A significant length (e.g., 200 km or more) to ensure Ferranti effect is observable.
        *   **R (ohm/km):** Resistance per unit length.
        *   **L (H/km):** Inductance per unit length.
        *   **C (F/km):** Capacitance per unit length.
        *   **Line-to-neutral capacitance:** Use the distributed capacitance value.
        *   **Surge Impedance (Zo):** Can be calculated or looked up based on line parameters.
        *   **Propagation velocity (m/s):** Can be calculated or looked up.
    *   *Example Parameters (for illustrative purposes, values depend on line type):*
        *   Length: 250 km
        *   R: 0.025 ohm/km
        *   L: 0.8 mH/km (0.0008 H/km)
        *   C: 10 nF/km (10e-9 F/km)
        *   Surge Impedance: ~400 ohms
        *   Propagation velocity: ~3e8 m/s
5.  **Add the RL Load block:**
    *   **Configuration:** Set to "Series RL".
    *   **Parameters:**
        *   **Resistance (R):** Set for a **lightly loaded** condition. For example, if the nominal load is 200 MW at 220 kV, a lightly loaded condition might be 10-20 MW. You can calculate the equivalent resistance for this power.
        *   **Inductance (L):** Set for the desired power factor.
    *   **Crucially, to demonstrate Ferranti effect, set the load to a very low value or even zero initially.**
6.  **Connect the components:**
    *   AC Voltage Source -> Sending end of Transmission Line.
    *   Receiving end of Transmission Line -> RL Load.
7.  **Add Measurement blocks:**
    *   Place Voltage Measurement blocks at the sending end (after the source) and receiving end of the transmission line.
    *   Place Current Measurement blocks in series with the line at both ends.
    *   Place Power Measurement blocks to measure P and Q at both ends.
8.  **Connect measurement block outputs to Scope blocks.** Configure scopes to display appropriate signals.
9.  **Set Simulation Time:** A few seconds (e.g., 0.1 seconds or 0.2 seconds) should be sufficient for steady-state analysis.
10. **Run the simulation.** Observe the voltages at the sending and receiving ends on the scopes.

### 3.3 Demonstrating Ferranti Effect:

*   **Observation 1 (No Load):** With the RL load resistance set to a very high value (near open circuit), run the simulation. You should observe that the receiving end voltage is significantly higher than the sending end voltage.
*   **Observation 2 (Light Load):** Set the RL load to a low power value. Run the simulation again. The voltage difference might be smaller, but the receiving end voltage should still be higher than the sending end voltage.
*   **Observation 3 (Heavy Load):** If you want to contrast, set the RL load to a high power value. The Ferranti effect should diminish, and the receiving end voltage might even be lower than the sending end voltage due to line impedance drop.

### 3.4 Incorporating Reactive Power Compensation (Shunt Reactor):

1.  **Add a Shunt Reactor block:** Connect it in parallel with the transmission line at the **receiving end**.
2.  **Configure the Shunt Reactor:**
    *   **Parameters:** Set its inductive reactance (or inductance) value. The goal is to absorb reactive power to counteract the capacitive effect of the line.
    *   *Example:* For a 220 kV system, a common shunt reactor might be in the range of 20-100 MVAr. The reactance can be calculated from this: $X_L = V_{LL}^2 / Q$, where $V_{LL}$ is the line-to-line voltage.
3.  **Run the simulation with the shunt reactor connected.**
4.  **Observe the scopes:** Compare the voltage levels at the receiving end *with* and *without* the shunt reactor. You should see a noticeable reduction in the receiving end voltage, bringing it closer to the sending end voltage.

---

## 4. Key Concepts and Definitions to Remember

*   **Distributed Parameters:** Real transmission lines have resistance, inductance, and capacitance distributed along their entire length, not lumped at discrete points.
*   **Charging Current:** The current that flows due to the line's capacitance, even when there is no load.
*   **Surge Impedance ($Z_0$):** The characteristic impedance of a lossless transmission line, given by $\sqrt{L/C}$. It's the impedance seen by a traveling wave.
*   **Surge Impedance Loading (SIL):** The load power at which the reactive power supplied by the line capacitance equals the reactive power absorbed by the line inductance. At SIL, the voltage profile is flat ($V_{sending} = V_{receiving}$).
*   **Voltage Regulation:** The change in receiving end voltage from no load to full load, expressed as a percentage of the full load voltage. For Ferranti effect, we see a *negative* voltage regulation (voltage increases from sending to receiving end) under light load.
*   **Reactive Power (Q):** The power that oscillates between the source and the reactive components (inductors and capacitors) of the circuit. It is essential for establishing magnetic and electric fields.
*   **Shunt Reactor:** An inductive load connected in parallel to the system to absorb reactive power.

---

## 5. Practice Questions and Exercises

**Instructions:** After building the Simulink model as described, answer the following questions.

**Scenario:** A 250 km, 220 kV, 50 Hz three-phase transmission line with the following per-phase parameters:
*   Resistance (R): 0.025 ohm/km
*   Inductance (L): 0.8 mH/km
*   Capacitance (C): 10 nF/km

**Task 1: Ferranti Effect Observation**

1.  **Model the line without any load.**
    *   What is the voltage at the sending end (per phase)?
    *   What is the voltage at the receiving end (per phase)?
    *   Calculate the sending and receiving end currents (per phase).
    *   Calculate the reactive power supplied by the line at the receiving end (Q_receive).
    *   Does the Ferranti effect exist? Quantify the voltage rise.

2.  **Model the line with a light load.** Assume a lightly loaded condition equivalent to drawing 50 MW, 0.95 lagging power factor at 220 kV from the receiving end.
    *   What is the voltage at the sending end (per phase)?
    *   What is the voltage at the receiving end (per phase)?
    *   Calculate the sending and receiving end currents (per phase).
    *   Calculate the real and reactive power delivered to the load (P_load, Q_load).
    *   How does the Ferranti effect compare to the no-load case?

**Task 2: Reactive Power Compensation**

1.  **Connect a shunt reactor at the receiving end.**
    *   **Determine the required reactor size:** For a lightly loaded line (use the 50 MW load case), a common practice is to compensate the line capacitance to maintain voltage within limits. Let's aim to reduce the receiving end voltage to be approximately 10-15% higher than the sending end voltage. You might need to iterate on the reactor size. Start with a reactor of 30 MVAr (per phase, if simulating per phase) or 90 MVAr (three-phase).
    *   **Calculate the reactance of a 90 MVAr three-phase shunt reactor at 220 kV.**
        *   Per-phase reactive power $Q_{MVAr\_ph} = 90 \text{ MVAr} / 3 = 30 \text{ MVAr}$
        *   Line-to-neutral voltage $V_{LN} = 220 \text{ kV} / \sqrt{3} \approx 127 \text{ kV}$
        *   $Q_{MVAr\_ph} = V_{LN}^2 / X_L$
        *   $X_L = V_{LN}^2 / Q_{MVAr\_ph} = (127 \times 10^3)^2 / (30 \times 10^6) \approx 537.7 \text{ ohms}$
    *   **Simulate the line with the 50 MW light load and the 90 MVAr shunt reactor.**
        *   What is the new voltage at the sending end (per phase)?
        *   What is the new voltage at the receiving end (per phase)?
        *   How has the receiving end voltage changed compared to Task 1, Question 2?
        *   Calculate the reactive power absorbed by the shunt reactor.
        *   What is the total reactive power generated by the line capacitance at the receiving end? How does the reactor compensate for it?

**Task 3: Advanced Analysis (Optional)**

1.  **Vary the length of the transmission line.** How does the magnitude of the Ferranti effect change with line length?
2.  **Vary the load from no load to full load.** Plot the receiving end voltage as a function of load. When does the Ferranti effect disappear?

---

## 6. Answers to Practice Questions

*(Note: These are approximate answers based on typical calculations and simulation results. Actual values may vary slightly based on exact Simulink model parameters and solver settings.)*

**Task 1: Ferranti Effect Observation**

1.  **No Load:**
    *   Sending End Voltage (per phase): Approximately $127 \text{ kV}$ (or the RMS value of the AC source, e.g., $220/\sqrt{3} \approx 127.02$ kV).
    *   Receiving End Voltage (per phase): Significantly higher, e.g., **$140 \text{ kV}$ to $150 \text{ kV}$ or more**. The exact value depends on the line parameters and length.
    *   Sending End Current (per phase): Very small, primarily charging current, e.g., **a few amperes**.
    *   Receiving End Current (per phase): Very small, essentially zero if the load is disconnected.
    *   Reactive Power Supplied by Line (Q_receive): A significant positive value (supplying reactive power), e.g., **$20 \text{ to } 40 \text{ MVAr}$ per phase**.
    *   **Ferranti Effect:** Yes, it exists. The voltage rise is the difference between receiving end voltage and sending end voltage (e.g., $145 \text{ kV} - 127 \text{ kV} = 18 \text{ kV}$ rise).

2.  **Light Load (50 MW, 0.95 lagging PF at 220 kV):**
    *   Nominal line current $I_{nom} = 50 \text{ MW} / ( \sqrt{3} \times 220 \text{ kV} \times 0.95) \approx 131 \text{ A}$ (three-phase).
    *   Per-phase load current $I_{load\_ph} \approx 131 \text{ A} / \sqrt{3} \approx 75.6 \text{ A}$.
    *   Sending End Voltage (per phase): Still around $127 \text{ kV}$.
    *   Receiving End Voltage (per phase): Still higher than sending end, but less so than no load, e.g., **$135 \text{ kV}$ to $140 \text{ kV}$**.
    *   Sending End Current (per phase): Now includes the load current and the charging current. It will be higher than the no-load case, e.g., **around $100 \text{ A}$**.
    *   Receiving End Current (per phase): Approximately equal to the load current if voltage drop is minimal, e.g., **around $75.6 \text{ A}$**.
    *   Real Power to Load ($P_{load}$): Approximately 50 MW (total three-phase).
    *   Reactive Power to Load ($Q_{load}$): $P_{load} \tan(\arccos(0.95)) \approx 50 \text{ MW} \times \tan(18.19^\circ) \approx 16.4 \text{ MVAr}$ (total three-phase).
    *   **Ferranti Effect Comparison:** The voltage rise is reduced because the load current, flowing through the line's inductance, causes a voltage drop that counteracts the capacitive voltage rise.

**Task 2: Reactive Power Compensation**

1.  **Shunt Reactor (90 MVAr, 220 kV):**
    *   Per-phase reactance $X_L \approx 537.7 \text{ ohms}$.
    *   Line-to-neutral voltage $V_{LN} \approx 127 \text{ kV}$.
    *   Per-phase current through reactor $I_{reactor\_ph} = V_{LN} / X_L \approx 127 \text{ kV} / 537.7 \text{ ohms} \approx 236 \text{ A}$.
    *   Per-phase reactive power absorbed by reactor $Q_{reactor\_ph} = V_{LN} \times I_{reactor\_ph} \approx 127 \text{ kV} \times 236 \text{ A} \approx 29.97 \text{ MVAr}$ (close to 30 MVAr target).
    *   **Simulation Results (with 50 MW load and 90 MVAr reactor):**
        *   Sending End Voltage (per phase): Remains around $127 \text{ kV}$.
        *   Receiving End Voltage (per phase): Significantly reduced from Task 1, Question 2, now closer to the sending end voltage, e.g., **$130 \text{ kV}$ to $133 \text{ kV}$**.
        *   Voltage Change: The receiving end voltage is now much closer to the sending end voltage, indicating effective compensation.
        *   Reactive Power Absorbed by Reactor: Approximately 90 MVAr (total three-phase).
        *   Line Capacitance Reactive Power (at receiving end): Still a significant positive value (e.g., 20-40 MVAr per phase, total 60-120 MVAr). The reactor absorbs a portion of this, and the net reactive power flowing to the load might be reduced, or the voltage is stabilized. The key is that the *net effect* on the receiving end voltage is stabilization.

---

## 7. Important Points to Remember

*   **Ferranti effect is a voltage rise, not a drop, and is caused by line capacitance.** It is most prominent in long, lightly loaded lines.
*   **Shunt reactors are the primary method to counteract Ferranti effect** by absorbing the excess reactive power supplied by the line capacitance.
*   **The length of the transmission line is critical.** For shorter lines, the effect is negligible.
*   **Simulink's "Power Transmission Line" block is crucial for modeling distributed parameters** accurately.
*   **Always use the Powergui block** in Simscape Electrical simulations.
*   **Ensure proper measurement blocks are used** to capture voltage and current at different points.
*   **When analyzing, compare the receiving end voltage to the sending end voltage** to quantify the voltage rise.
*   **The goal of compensation is to bring the receiving end voltage closer to the sending end voltage** under light loading conditions.
*   **Overcompensation can lead to voltage instability** or even voltage collapse if too much reactive power is absorbed.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


## 8. References and Textbook Content

This module's content is based on fundamental concepts of transmission line theory and power system analysis, typically covered in:

*   **"Elements of Power System Analysis" by William D. Stevenson Jr.**
    *   Chapters on transmission line parameters, ABCD constants, and voltage regulation will provide the theoretical underpinnings for understanding Ferranti effect and its causes.
*   **"Power System Analysis and Design" by J. Duncan Glover, Mulukutla S. Sarma, and Tyrone J. Overbye.**
    *   Sections on transmission line modeling (pi model, distributed parameter model), surge impedance loading, and reactive power compensation techniques (shunts, series, synchronous condensers) are highly relevant.
*   **MATLAB Simulink Documentation:**
    *   Refer to the Simscape Electrical library documentation for details on the "Power Transmission Line," "Shunt Reactor," "AC Voltage Source," "RL Load," and measurement blocks. Understanding the parameters and configurations of these blocks is essential for building the model.

The practical implementation in Simulink directly supports the application of these theoretical concepts, fulfilling the requirements of **CO1 (K3)** and **CO2 (K3)** by modeling and simulating performance under specific conditions.

---