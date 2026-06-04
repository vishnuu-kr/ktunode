---
title: "(ii) To calculate Surge Impedance Loading of the line"
subject: "POWER SYSTEM LAB"
module: "Module 9: Ferranti Effect and Reactive Power Compensation"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f367f7"
status: "completed"
scrapedAt: "2026-05-23T16:31:09.412Z"
---
# POWER SYSTEM LAB: Module 9 - Ferranti Effect and Reactive Power Compensation

## Topic (ii): To Calculate Surge Impedance Loading (SIL) of the Line

---

### 1. Introduction and Importance

The Surge Impedance Loading (SIL) is a crucial parameter for understanding the behavior of long transmission lines, especially concerning the Ferranti effect and reactive power compensation. It represents the line loading at which the line neither generates nor absorbs reactive power. Understanding SIL helps in designing and operating transmission systems efficiently, particularly in preventing overvoltages and managing reactive power flow.

---

### 2. Key Concepts and Definitions

*   **Surge Impedance (Z₀):**
    *   Also known as characteristic impedance.
    *   It is the ratio of the voltage wave to the current wave for a traveling wave on a lossless transmission line.
    *   It is a property of the line itself, determined by its physical construction (conductor size, spacing, permittivity of the dielectric medium).
    *   **Formula:** $Z_0 = \sqrt{\frac{L}{C}}$ (for a lossless line), where:
        *   $L$ is the inductance per unit length.
        *   $C$ is the capacitance per unit length.
    *   **Units:** Ohms ($\Omega$).
    *   **Typical Values:** For overhead transmission lines, $Z_0$ is typically in the range of 350-500 $\Omega$. For underground cables, it's much lower, typically 40-60 $\Omega$, due to higher capacitance.

*   **Surge Impedance Loading (SIL):**
    *   The apparent power delivered to a lossless transmission line when the line is operated at its surge impedance.
    *   It is the loading level at which the line's receiving-end voltage equals its sending-end voltage (in the absence of line resistance and conductance).
    *   At SIL, the line is electrically neutral in terms of reactive power consumption or generation.
    *   **Formula:** $SIL = \frac{V_{ph}^2}{Z_0}$ (for single phase) or $SIL = 3 \frac{V_{LN}^2}{Z_0}$ (for three phase, where $V_{LN}$ is the line-to-neutral voltage).
    *   Often expressed in MVA or MW.
    *   **Units:** Volt-Amperes (VA), Mega Volt-Amperes (MVA).

*   **Lossless Transmission Line:**
    *   A theoretical transmission line where resistance ($R$) and conductance ($G$) are considered zero.
    *   In reality, all transmission lines have some losses, but for calculating SIL, the lossless assumption provides a fundamental baseline.

*   **Ferranti Effect:**
    *   The phenomenon where the receiving-end voltage of a lightly loaded or unloaded long transmission line is higher than the sending-end voltage.
    *   This is primarily due to the charging current supplied by the line capacitance, which creates a voltage drop across the line inductance that adds to the sending-end voltage at the receiving end.
    *   SIL is the loading point where this voltage rise due to capacitance is counterbalanced by the voltage drop due to inductance when the line is loaded.

---

### 3. Calculation of Surge Impedance Loading (SIL)

To calculate SIL, we first need to determine the Surge Impedance ($Z_0$) of the transmission line. This typically involves obtaining the line's inductance ($L$) and capacitance ($C$) per unit length.

**Steps:**

1.  **Obtain Transmission Line Parameters:**
    *   You will need the inductance ($L$) and capacitance ($C$) per unit length for the transmission line under consideration. These parameters are usually provided in the lab manual or can be calculated based on the physical configuration of the conductors (e.g., conductor diameter, spacing between conductors, height above ground).
    *   **Units:**
        *   $L$: Henries per meter (H/m) or millihenries per kilometer (mH/km).
        *   $C$: Farads per meter (F/m) or microfarads per kilometer ($\mu$F/km).

2.  **Calculate Surge Impedance ($Z_0$):**
    *   Using the formula for a lossless line: $Z_0 = \sqrt{\frac{L}{C}}$
    *   **Important:** Ensure that the units of $L$ and $C$ are consistent. If $L$ is in mH/km and $C$ is in $\mu$F/km, the ratio will result in Ohms, which is the correct unit for $Z_0$.
        *   Example: If $L = 1.2$ mH/km and $C = 0.01$ $\mu$F/km, then
            $Z_0 = \sqrt{\frac{1.2 \times 10^{-3} \, H/km}{0.01 \times 10^{-6} \, F/km}} = \sqrt{\frac{1.2 \times 10^{-3}}{1 \times 10^{-8}}} \, \Omega = \sqrt{1.2 \times 10^5} \, \Omega \approx 346.4 \, \Omega$.

3.  **Determine System Voltage:**
    *   You need the nominal system voltage, typically given as line-to-line voltage ($V_{LL}$).
    *   For SIL calculation, we use the line-to-neutral voltage ($V_{LN}$).
    *   **Formula:** $V_{LN} = \frac{V_{LL}}{\sqrt{3}}$

4.  **Calculate Surge Impedance Loading (SIL):**
    *   Using the formula: $SIL = \frac{V_{LN}^2}{Z_0}$
    *   If you want SIL in MVA, ensure $V_{LN}$ is in kV and $Z_0$ is in $\Omega$. The result will be in MVA.
    *   **Formula for SIL in MVA:** $SIL_{MVA} = \frac{(V_{LL}/\sqrt{3})^2}{Z_0} = \frac{V_{LL}^2}{3 Z_0}$ (where $V_{LL}$ is in kV and $Z_0$ is in $\Omega$).

---

### 4. Example Calculation

**Problem:** A three-phase, 400 kV overhead transmission line has the following parameters per phase per kilometer:
*   Inductance ($L$) = 1.3 mH/km
*   Capacitance ($C$) = 0.012 $\mu$F/km

Calculate the Surge Impedance Loading (SIL) of this line.

**Solution:**

1.  **Calculate Surge Impedance ($Z_0$):**
    *   Convert units for consistency:
        *   $L = 1.3 \, \text{mH/km} = 1.3 \times 10^{-3} \, \text{H/km}$
        *   $C = 0.012 \, \mu\text{F/km} = 0.012 \times 10^{-6} \, \text{F/km}$
    *   $Z_0 = \sqrt{\frac{L}{C}} = \sqrt{\frac{1.3 \times 10^{-3} \, \text{H/km}}{0.012 \times 10^{-6} \, \text{F/km}}}$
    *   $Z_0 = \sqrt{\frac{1.3}{0.012} \times 10^3} \, \Omega = \sqrt{108.33 \times 10^3} \, \Omega \approx \sqrt{108333} \, \Omega \approx 329.14 \, \Omega$

2.  **Determine Line-to-Neutral Voltage ($V_{LN}$):**
    *   The line-to-line voltage ($V_{LL}$) is 400 kV.
    *   $V_{LN} = \frac{V_{LL}}{\sqrt{3}} = \frac{400 \, \text{kV}}{\sqrt{3}} \approx \frac{400}{1.732} \, \text{kV} \approx 230.94 \, \text{kV}$

3.  **Calculate Surge Impedance Loading (SIL):**
    *   $SIL = \frac{V_{LN}^2}{Z_0}$
    *   $SIL = \frac{(230.94 \, \text{kV})^2}{329.14 \, \Omega} = \frac{53333.5 \, \text{kV}^2}{329.14 \, \Omega}$
    *   $SIL \approx 162.04 \, \text{MVA}$

    Alternatively, using the direct formula for SIL in MVA:
    *   $SIL_{MVA} = \frac{V_{LL}^2}{3 Z_0}$
    *   $SIL_{MVA} = \frac{(400 \, \text{kV})^2}{3 \times 329.14 \, \Omega} = \frac{160000 \, \text{kV}^2}{987.42 \, \Omega}$
    *   $SIL_{MVA} \approx 162.04 \, \text{MVA}$

**Conclusion:** The Surge Impedance Loading for this transmission line is approximately 162.04 MVA.

---

### 5. Relation to Ferranti Effect and Reactive Power Compensation

*   **At SIL:** When a transmission line is loaded at its SIL, the reactive power consumed by its inductance is exactly compensated by the reactive power generated by its capacitance.
    *   This means the line neither draws nor supplies reactive power from/to the system.
    *   The receiving-end voltage is approximately equal to the sending-end voltage (ignoring resistance and conductance).
*   **Below SIL:** If the line is loaded below its SIL (e.g., lightly loaded or unloaded), the capacitive effect dominates. The line draws less inductive reactive power than it generates capacitively, resulting in a net generation of reactive power by the line. This leads to the Ferranti effect, where the receiving-end voltage is higher than the sending-end voltage.
*   **Above SIL:** If the line is loaded above its SIL, the inductive effect dominates. The line draws more inductive reactive power than it generates capacitively, resulting in a net absorption of reactive power by the line. This leads to a voltage drop along the line, and the receiving-end voltage is lower than the sending-end voltage.
*   **Reactive Power Compensation:** To mitigate the Ferranti effect (voltage rise at light loads) and manage voltage profiles at all load levels, reactive power compensation devices (like capacitors or synchronous condensers) are often connected to the line. The target is often to keep the line operating near its SIL or to provide compensation to maintain desired voltage levels.

---

### 6. Practical Considerations in the Lab

In the power system lab, you might be provided with a transmission line model that has adjustable parameters or specific $L$ and $C$ values.

*   **Equipment:** You will likely use a transmission line simulator, voltage and current meters, and a variable load.
*   **Procedure:**
    1.  Identify the parameters ($L$, $C$) of the simulated transmission line.
    2.  Determine the system voltage.
    3.  Calculate the theoretical SIL using the formulas discussed.
    4.  Set up the experiment with the transmission line model and a load.
    5.  Vary the load and measure the sending-end and receiving-end voltages and currents.
    6.  Observe the voltage difference between the sending and receiving ends as the load changes. You should see a voltage rise at light loads (below SIL) and a voltage drop at heavy loads (above SIL).
    7.  Try to identify the loading condition (in terms of current or apparent power) where the receiving-end voltage is approximately equal to the sending-end voltage, and compare this to the calculated SIL.

---

### 7. Practice Questions and Exercises

**Question 1:** A single-phase transmission line has an inductance of 2 mH/km and a capacitance of 0.015 $\mu$F/km. If the line is operated at 132 kV, what is its Surge Impedance Loading (SIL) in MVA?

**Answer 1:**
*   $L = 2 \, \text{mH/km} = 2 \times 10^{-3} \, \text{H/km}$
*   $C = 0.015 \, \mu\text{F/km} = 0.015 \times 10^{-6} \, \text{F/km}$
*   $Z_0 = \sqrt{\frac{L}{C}} = \sqrt{\frac{2 \times 10^{-3}}{0.015 \times 10^{-6}}} \, \Omega = \sqrt{\frac{2}{0.015} \times 10^3} \, \Omega = \sqrt{133.33 \times 10^3} \, \Omega \approx 365.15 \, \Omega$
*   The line is single-phase, so $V_{LN}$ is the same as $V_{LL}$ for calculation purposes here (though usually SIL is defined for three-phase). Assuming the 132 kV is the voltage across the line:
*   $SIL = \frac{V^2}{Z_0} = \frac{(132 \, \text{kV})^2}{365.15 \, \Omega} = \frac{17424 \, \text{kV}^2}{365.15 \, \Omega} \approx 47.7 \, \text{MVA}$

**Question 2:** For a three-phase transmission line with $Z_0 = 400 \, \Omega$ and a nominal system voltage of 220 kV (line-to-line), calculate the SIL.

**Answer 2:**
*   $V_{LL} = 220 \, \text{kV}$
*   $Z_0 = 400 \, \Omega$
*   $SIL_{MVA} = \frac{V_{LL}^2}{3 Z_0} = \frac{(220 \, \text{kV})^2}{3 \times 400 \, \Omega} = \frac{48400 \, \text{kV}^2}{1200 \, \Omega} = 40.33 \, \text{MVA}$

**Question 3:** A transmission line has a SIL of 150 MVA at 230 kV. If the line is unloaded, is it likely to experience an overvoltage or an undervoltage at the receiving end compared to the sending end? Explain why.

**Answer 3:**
*   If the line is unloaded, it is operating **below** its SIL.
*   At loads below SIL, the capacitive reactance of the line is more significant than its inductive reactance. The charging current supplied by the line capacitance leads to a voltage rise at the receiving end, a phenomenon known as the **Ferranti effect**.
*   Therefore, the line is likely to experience an **overvoltage** at the receiving end compared to the sending end.

---

### 8. Important Points to Remember

*   SIL is a characteristic property of the transmission line itself, dependent on $L$ and $C$.
*   It's the loading at which the line neither generates nor absorbs reactive power.
*   The Ferranti effect (voltage rise) is observed at loads below SIL.
*   The voltage drop is observed at loads above SIL.
*   The lossless line assumption is used for SIL calculation, but real lines have losses which can slightly affect the exact voltage regulation.
*   SIL is a key metric for understanding voltage regulation and the need for reactive power compensation.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 9. References and Further Reading

*   **"Elements of Power System Analysis"** by William D. Stevenson, Jr.
*   **"Power System Analysis and Design"** by J. Duncan Glover, Thomas J. Overbye, and Mulukutla S. Sarma.
*   **"Modern Power Systems"** by O.I. Elgerd.

These textbooks provide comprehensive coverage of transmission line parameters, surge impedance, and the phenomena related to line loading and voltage regulation, which are fundamental to understanding SIL and the Ferranti effect.

---

### 10. Alignment with Course Outcomes

*   **CO1: Develop mathematical models and conduct steady state and transient analysis of power system networks using standard / dedicated software.**
    *   This topic directly supports CO1 by requiring the development of a mathematical model (SIL formula) and performing calculations based on transmission line parameters. While the experiment might not directly use dedicated software for SIL calculation, understanding the underlying principles allows for their application in more complex simulations.
    *   **Knowledge Level (K3):** Applying knowledge to compute SIL, which involves understanding the formulas and parameters.

*   **CO2: Conduct appropriate tests for any power system component as per standards to analyse their performance.**
    *   While this specific topic is about calculation, it lays the foundation for experimental verification. In the lab, you will conduct tests by varying loads on a transmission line model to observe voltage profiles and relate them to the calculated SIL. This analysis of performance (voltage regulation, Ferranti effect) based on experimental data aligns with CO2.
    *   **Knowledge Level (K3):** Applying knowledge to analyze observed performance in the lab and compare it with theoretical calculations.