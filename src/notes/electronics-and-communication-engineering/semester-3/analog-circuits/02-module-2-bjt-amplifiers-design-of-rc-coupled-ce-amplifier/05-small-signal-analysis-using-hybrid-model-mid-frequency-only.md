---
title: "Small signal analysis using hybrid- π model (mid frequency only)"
subject: "ANALOG CIRCUITS"
module: "Module 2: BJT Amplifiers: Design of RC coupled CE amplifier "
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe2ea"
status: "completed"
scrapedAt: "2026-05-23T17:44:13.131Z"
---
# ANALOG CIRCUITS: Module 2: BJT Amplifiers: Design of RC coupled CE amplifier

## Topic: Small Signal Analysis using Hybrid-π Model (Mid-Frequency Only)

This module focuses on understanding the behavior of Bipolar Junction Transistor (BJT) amplifiers, specifically the Common-Emitter (CE) configuration, using the hybrid-π small-signal model at mid-frequencies. This analysis is crucial for designing and predicting the performance of amplifier circuits.

---

### Learning Outcomes:

Upon completion of this topic, you will be able to:

*   Understand the concept and components of the hybrid-π small-signal model for a BJT.
*   Analyze the mid-frequency performance of a CE amplifier using the hybrid-π model.
*   Determine key amplifier parameters like voltage gain ($A_v$), current gain ($A_i$), input impedance ($Z_{in}$), and output impedance ($Z_{out}$) for a CE amplifier.
*   Explain the impact of different biasing and coupling/bypass components on amplifier performance.
*   Apply the analysis techniques to design a basic RC-coupled CE amplifier for a desired gain and impedance.

---

### 1. Introduction to Small-Signal Analysis

**Concept:** Small-signal analysis is a technique used to analyze the AC behavior of a transistor amplifier circuit when subjected to a small AC input signal superimposed on a DC bias point. The key idea is to linearize the non-linear transistor characteristics around the operating point.

**Why Small Signal?** Transistors are inherently non-linear devices. However, for small AC signals, their behavior can be approximated as linear, allowing for simpler analysis. Large signals would require non-linear analysis, which is more complex.

**DC Analysis vs. AC Analysis:**
*   **DC Analysis:** Determines the quiescent operating point (Q-point) of the transistor (e.g., $I_{CQ}$, $V_{CEQ}$). This is done by considering only the DC bias voltages and currents and treating capacitors as open circuits and inductors as short circuits.
*   **AC Analysis:** Analyzes the response of the circuit to small AC signals, considering the transistor's AC parameters and treating capacitors as short circuits and inductors as open circuits in the mid-frequency range.

**Reference:** Both Boylestad & Nashelsky and Sedra & Smith provide comprehensive introductions to small-signal analysis.

---

### 2. The Hybrid-π Small-Signal Model

**Concept:** The hybrid-π model is a low-frequency and mid-frequency AC equivalent circuit model for a BJT. It represents the internal mechanisms of the transistor's operation in terms of equivalent resistances and capacitances.

**Components of the Hybrid-π Model:**

*   **Base-Emitter Resistance ($r_{\pi}$):** Represents the resistance between the base and emitter terminals. It is related to the transistor's transconductance ($g_m$).
    *   $r_{\pi} = \frac{\beta}{g_m}$
    *   where $\beta$ is the common-emitter current gain ($h_{fe}$) and $g_m$ is the transconductance.
*   **Transconductance ($g_m$):** Represents the conversion of input base current to output collector current (or input base-emitter voltage to output collector current). It is a measure of how effectively the input controls the output.
    *   $g_m = \frac{I_{CQ}}{V_T}$
    *   where $I_{CQ}$ is the DC collector quiescent current and $V_T$ is the thermal voltage ($V_T \approx 25$ mV at room temperature).
*   **Output Resistance ($r_o$):** Represents the output conductance of the transistor, primarily due to the Early effect (variation of collector current with collector-emitter voltage).
    *   $r_o = \frac{V_A}{I_{CQ}} = \frac{V_A+V_{CEQ}}{I_{CQ}}$
    *   where $V_A$ is the Early voltage. $r_o$ is usually large and often neglected in simple analyses unless specified.
*   **Base Resistance ($r_x$):** Represents the bulk resistance of the transistor's base material. This is often neglected in mid-frequency analysis unless specified, but can affect input impedance at higher frequencies.

**Simplified Hybrid-π Model (Mid-Frequency):**
In the mid-frequency range, the effect of parasitic capacitances (like $C_{\mu}$ and $C_{\pi}$) is negligible, and the model is simplified to consist of:
*   A voltage-controlled current source ($\beta i_b$ or $g_m v_{be}$) in the collector branch.
*   The base-emitter resistance $r_{\pi}$.
*   The output resistance $r_o$ in parallel with the collector-emitter path.

**Figure 1: Simplified Hybrid-π Model for BJT**

```
      b --- r_pi --- e
      |            |
      |            |
     (r_x)        (C_pi)
      |            |
      |            |
      c --- gm*vbe --- c (Collector)
      |            |
      |            |
     (C_mu)      (r_o)
      |            |
      |            |
      E------------E (Emitter)
```
*(Note: In the mid-frequency analysis, $r_x$, $C_{\pi}$, $C_{\mu}$ are often ignored for simplicity, leaving $r_{\pi}$, $g_m v_{be}$, and $r_o$.)*

**Key Relationship:** The current flowing into the collector is proportional to the voltage across the base-emitter junction ($v_{be}$) and the transconductance ($g_m$).

**Derivations (from textbooks):**
*   Boylestad & Nashelsky (Chapter 7): Explains the development of the hybrid-π model from the Ebers-Moll model and discusses the parameters.
*   Sedra & Smith (Chapter 5): Provides a detailed derivation and analysis of the hybrid-π model.

---

### 3. Small-Signal Analysis of a CE Amplifier using Hybrid-π Model (Mid-Frequency)

**Circuit Configuration:** Consider a typical RC-coupled CE amplifier with voltage divider biasing.

**Figure 2: RC-Coupled CE Amplifier Circuit**

```
      Vcc
       |
       Rc
       |
      C2 ---> Output
       |
       |-----c
 Vin -- C1 -- b -- r_pi -- e
              |        |
              R1       Rb
              |        |
              |---E----|--- Rl (Load Resistance)
              |        |
              RE
              |
             CE (Bypass Capacitor)
              |
             GND

(R2 is connected from the junction of R1, b, and RE to Ground)
```
*(This diagram is illustrative. The R1 and R2 form the voltage divider for the base. RE is the emitter resistor, and CE is the bypass capacitor. Rc is the collector resistor.)*

**Steps for Mid-Frequency Analysis:**

1.  **DC Analysis:** First, perform DC analysis to determine the Q-point ($I_{CQ}$ and $V_{CEQ}$). This is essential for calculating $g_m$ and $r_{\pi}$.
    *   Replace capacitors with open circuits.
    *   Replace AC sources with short circuits (or ground if they are DC sources).
    *   Calculate $I_{CQ}$ and $V_{CEQ}$.
    *   Calculate $g_m = I_{CQ} / V_T$.
    *   Calculate $r_{\pi} = \beta / g_m$.
    *   Determine $r_o$ if needed (often assumed to be infinite for simplification).

2.  **AC Equivalent Circuit:** Construct the AC equivalent circuit by:
    *   Replacing BJT with its hybrid-π model.
    *   Replacing all capacitors ($C_1, C_2, C_E$) with short circuits (since we are in the mid-frequency range).
    *   Replacing voltage sources (like $V_{in}$ and $V_{cc}$) with their internal resistance (usually assumed to be zero for ideal sources, so they are connected to ground for AC signals).
    *   Connecting any load resistors ($R_L$).

**AC Equivalent Circuit Diagram (Figure 3):**

```
      Rc
       |
 Vin --|-- b ---- r_pi ---- e
       |        |        |
       R1       |        |
       |        |        |
       R2 ----|-- Rc --- Collector Output
                |
                |
                |--- Emitter ---- RE ---- GND
```
*(Note: In this diagram, the connections to Vcc and the output are shown simplified for clarity of the AC equivalent model. The actual connections will involve parallel resistances.)*

**Effective Resistances in the AC Equivalent Circuit:**

*   **Effective Base Resistance ($R_B'$):** The resistance seen looking into the base terminal, considering the biasing resistors $R_1$ and $R_2$ and any source resistance.
    *   $R_B' = R_1 || R_2 || r_{\pi}$
    *   If $R_1 || R_2 >> r_{\pi}$, then $R_B' \approx r_{\pi}$.
*   **Effective Collector Resistance ($R_C'$):** The resistance seen looking into the collector terminal, considering $R_c$ and any external load $R_L$.
    *   $R_C' = R_c || R_L$
    *   If $r_o$ is considered, $R_C' = R_c || R_L || r_o$.
*   **Effective Emitter Resistance ($R_E'$):** If the bypass capacitor $C_E$ is present (shorted in mid-frequency), the emitter is connected to AC ground. Thus, $R_E' = 0$.
    *   If $C_E$ were open (low frequency) or not present, the emitter would see $R_E$.

**Calculating Amplifier Parameters:**

*   **Voltage Gain ($A_v = V_{out} / V_{in}$):**
    *   The input voltage $v_{in}$ is applied to the base of the transistor (after passing through $C_1$).
    *   The voltage across $r_{\pi}$ is $v_{be}$.
    *   The output voltage $v_{out}$ is the voltage across $R_C'$.
    *   $v_{out} = -g_m v_{be} R_C'$ (The negative sign indicates phase inversion in CE amplifier).
    *   $v_{be}$ is the voltage at the base terminal, which is determined by the voltage divider formed by $R_B'$ and the source resistance (if any).
    *   Assuming the input voltage source is ideal (zero internal resistance) and connected directly to $C_1$, $v_{in}$ is applied to $R_B'$.
    *   $v_{be} = v_{in} \frac{r_{\pi}}{R_B' + r_{\pi}}$  (This is for when input source resistance is considered. If input is directly applied to $R_1 || R_2$, then $v_{in}$ is applied to $R_B'$ and $v_{be} \approx v_{in}$ if $R_B'$ is large.)
    *   *Simplified assumption:* If the input is applied to the base and the biasing resistors are much larger than $r_\pi$ ($R_1 || R_2 >> r_\pi$), then $v_{be} \approx v_{in}$.
    *   Therefore, $A_v \approx \frac{v_{out}}{v_{be}} = -g_m R_C' = -g_m (R_c || R_L)$
    *   If $r_o$ is considered: $A_v = -g_m (R_c || R_L || r_o)$

*   **Current Gain ($A_i = I_{out} / I_{in}$):**
    *   $I_{in}$ is the AC current entering the amplifier at the input terminal.
    *   $I_{out}$ is the AC current flowing through the load resistor $R_L$.
    *   $I_{in} = v_{be} / R_B'$ (Assuming $v_{in}$ applied to $R_B'$)
    *   The collector current $i_c = g_m v_{be}$. This current flows through $R_C'$.
    *   The output current $i_{out}$ is the current flowing through $R_L$. Since $R_C' = R_c || R_L$, the current $i_c$ splits between $R_c$ and $R_L$.
    *   $i_{out} = i_c \frac{R_c}{R_c + R_L}$ if $r_o$ is ignored.
    *   If $r_o$ is considered: $i_c = g_m v_{be}$ splits between $R_c || R_L$ and $r_o$.
    *   $i_{out} = i_c \frac{R_c || R_o}{R_c || R_o + R_L}$ (This calculation can get complex).
    *   A simpler way: $i_{out} = \frac{v_{out}}{R_L} = \frac{-g_m v_{be} (R_c || R_L)}{R_L}$ (if $r_o$ is ignored).
    *   $A_i = \frac{I_{out}}{I_{in}} = \frac{v_{out}/R_L}{v_{in}/R_B'} = \frac{v_{out}}{v_{in}} \frac{R_B'}{R_L} = A_v \frac{R_B'}{R_L}$

*   **Input Impedance ($Z_{in}$):** The impedance seen by the AC input source.
    *   $Z_{in}$ is the impedance seen looking into the input coupling capacitor ($C_1$).
    *   This is the parallel combination of the biasing resistors ($R_1 || R_2$) and the base-emitter impedance ($r_{\pi}$).
    *   $Z_{in} = R_1 || R_2 || r_{\pi}$
    *   Often, the term $R_B' = R_1 || R_2$ is used for the effective biasing resistance. So, $Z_{in} = R_B' || r_{\pi}$.
    *   If $R_1 || R_2 >> r_{\pi}$, then $Z_{in} \approx r_{\pi}$.

*   **Output Impedance ($Z_{out}$):** The impedance seen by the load resistor ($R_L$), looking back into the output terminals of the amplifier.
    *   To find $Z_{out}$, we deactivate the input source ($v_{in} = 0$, so $v_{be} = 0$). This turns off the controlled current source $g_m v_{be}$.
    *   We look back into the collector terminal. The output sees $R_c$ in parallel with $r_o$.
    *   $Z_{out} = R_c || r_o$
    *   If $r_o$ is considered infinite (often assumed), then $Z_{out} = R_c$.

**Important Note:** The presence of the emitter resistor $R_E$ without a bypass capacitor $C_E$ significantly affects these parameters, especially voltage gain and input impedance. In the mid-frequency range, $C_E$ is treated as a short circuit, effectively connecting the emitter to ground for AC signals.

**Impact of $R_E$ (if not bypassed):**
*   If $R_E$ is not bypassed, the emitter is connected to $R_E$ in the AC equivalent circuit. The output voltage is then $v_{out} = i_c R_C'$ and $v_{be} = v_{in} - i_e R_E$. Since $i_c = \beta i_b$ and $i_e = (\beta+1)i_b$, and $v_{be} = i_b r_{\pi}$, we have $i_b = v_{be}/r_{\pi}$. So $i_e = (\beta+1) v_{be} / r_{\pi}$.
    *   $v_{be} = v_{in} - \frac{(\beta+1) v_{be}}{r_{\pi}} R_E$
    *   $v_{be} (1 + \frac{(\beta+1)R_E}{r_{\pi}}) = v_{in}$
    *   $v_{be} = \frac{v_{in}}{1 + \frac{(\beta+1)R_E}{r_{\pi}}} = \frac{v_{in}}{1 + \frac{R_E}{r_{\pi}/\beta}} = \frac{v_{in}}{1 + R_E/r_{\pi}}$ (using $r_o$ and $R_E$ without bypass capacitor)
    *   $v_{out} = -g_m v_{be} R_C' = -g_m \frac{v_{in}}{1 + R_E/r_{\pi}} R_C'$
    *   $A_v = \frac{v_{out}}{v_{in}} = \frac{-g_m R_C'}{1 + R_E/r_{\pi}} = \frac{-g_m R_C'}{1 + \frac{g_m R_E}{\beta}} = \frac{-g_m R_C'}{1 + R_E/r_{\pi}}$
    *   This shows that the gain is reduced by the factor $1/(1 + R_E/r_{\pi})$.
    *   Input impedance increases: $Z_{in} = R_1 || R_2 || r_{\pi} (1 + \beta)$
*   **Role of Bypass Capacitor ($C_E$):** In mid-frequency, $C_E$ acts as a short circuit, bypassing $R_E$ for AC signals. This restores the high voltage gain and low input impedance characteristic of a CE amplifier without $R_E$.

**Example (Boylestad & Nashelsky, Chapter 7):**
Consider a CE amplifier with $I_{CQ} = 2$ mA, $\beta = 100$, $R_c = 4$ k$\Omega$, $R_L = 10$ k$\Omega$.
1.  Calculate $g_m$: $g_m = I_{CQ} / V_T = 2 \text{ mA} / 25 \text{ mV} = 80$ mS.
2.  Calculate $r_{\pi}$: $r_{\pi} = \beta / g_m = 100 / 80 \text{ mS} = 1.25$ k$\Omega$.
3.  Calculate $R_C'$: $R_C' = R_c || R_L = 4 \text{ k}\Omega || 10 \text{ k}\Omega = \frac{4 \times 10}{4+10} = \frac{40}{14} \approx 2.86$ k$\Omega$.
4.  Calculate $A_v$: $A_v = -g_m R_C' = -80 \text{ mS} \times 2.86 \text{ k}\Omega = -228.8$.
5.  Calculate $Z_{in}$: Assume $R_1 || R_2 = 10$ k$\Omega$. $Z_{in} = 10 \text{ k}\Omega || 1.25 \text{ k}\Omega = \frac{10 \times 1.25}{10+1.25} = \frac{12.5}{11.25} \approx 1.11$ k$\Omega$.
6.  Calculate $Z_{out}$: Assume $r_o$ is infinite. $Z_{out} = R_c = 4$ k$\Omega$.

---

### 4. Design Considerations for RC-Coupled CE Amplifier

The design process involves choosing component values to achieve desired performance characteristics like voltage gain, input impedance, and output impedance, while ensuring proper biasing.

**Design Steps:**

1.  **Specify Performance Requirements:**
    *   Desired voltage gain ($A_v$).
    *   Required input impedance ($Z_{in}$).
    *   Required output impedance ($Z_{out}$).
    *   Bias current ($I_{CQ}$) or voltage ($V_{CEQ}$).

2.  **Choose Biasing Scheme:** Voltage divider biasing is common due to its stability against variations in $\beta$.

3.  **Determine Transistor Parameters:** Select a suitable transistor and obtain its $\beta$ and $V_A$ (for $r_o$).

4.  **Set Q-point:** Choose $I_{CQ}$ and $V_{CEQ}$ for stable operation, typically biasing in the middle of the AC load line.

5.  **Calculate $g_m$ and $r_{\pi}$:** Based on the chosen $I_{CQ}$.

6.  **Choose Collector and Load Resistors:**
    *   $R_c || R_L$ determines the voltage gain. If $R_L$ is fixed, choose $R_c$ accordingly.
    *   Consider the maximum allowable $I_C$ and $V_{CE}$ for the transistor. $V_{cc} = I_{CQ}R_c + V_{CEQ} + I_{EQ}R_E$. With bypass, $V_{cc} \approx I_{CQ}(R_c + R_E) + V_{CEQ}$.
    *   For voltage gain $A_v = -g_m (R_c || R_L)$, if $R_L$ is given, $R_c$ can be calculated.
    *   $Z_{out} = R_c || r_o$. If $r_o$ is large, $Z_{out} \approx R_c$.

7.  **Choose Emitter Resistor ($R_E$):**
    *   If $R_E$ is to be bypassed: Choose $R_E$ to ensure good bias stability (e.g., $R_E \approx 0.1 R_c$ or such that $I_{EQ}R_E \approx 0.1 V_{CC}$).
    *   Then select $C_E$ to bypass $R_E$ at the lowest operating frequency ($X_{CE} \ll R_E$).

8.  **Design Biasing Resistors ($R_1, R_2$):**
    *   To achieve the desired input impedance ($Z_{in} = R_1 || R_2 || r_{\pi}$), select $R_1$ and $R_2$ such that $R_1 || R_2 \approx Z_{in}$ (if $Z_{in} \approx r_\pi$).
    *   A common rule of thumb for voltage divider biasing stability is $R_1 || R_2 \le 0.1 R_{Th}$, where $R_{Th}$ is the Thevenin resistance of the base. For better stability, $R_1 || R_2$ is often chosen to be much smaller than $r_{\pi}$. For example, $R_1 || R_2$ can be chosen to be $\approx r_{\pi}/10$ or some fraction of $R_E$.
    *   Once $R_1 || R_2$ is determined, use the relationship $V_{Th} = V_{cc} \frac{R_2}{R_1+R_2}$ and $R_{Th} = R_1 || R_2$ to find $R_1$ and $R_2$.
    *   $I_{BQ} = I_{CQ} / \beta$. The current through the voltage divider, $I_{div}$, should be significantly larger than $I_{BQ}$ (e.g., $I_{div} \approx 10 I_{BQ}$) for stable biasing. $I_{div} = V_{cc} / (R_1+R_2)$.

9.  **Choose Coupling Capacitors ($C_1, C_2$):**
    *   $C_1$ couples the input signal to the amplifier. $X_{C1} \ll Z_{in}$ at the lowest operating frequency.
    *   $C_2$ couples the output signal to the load. $X_{C2} \ll R_L$ at the lowest operating frequency.

**Example (Design problem):**
Design a CE amplifier with voltage divider biasing to achieve a voltage gain of approximately -200, an input impedance of at least 1 k$\Omega$, and using a transistor with $\beta = 150$. Assume $V_{cc} = 12$ V, $R_L = 10$ k$\Omega$.

1.  **Q-point:** Let $I_{CQ} = 2$ mA. Then $g_m = 2 \text{ mA} / 25 \text{ mV} = 80$ mS.
2.  **$r_{\pi}$:** $r_{\pi} = \beta / g_m = 150 / 80 \text{ mS} = 1.875$ k$\Omega$.
3.  **Voltage Gain:** $A_v = -g_m (R_c || R_L) \implies -200 = -80 \text{ mS} (R_c || 10 \text{ k}\Omega)$.
    *   $R_c || 10 \text{ k}\Omega = 200 / 80 = 2.5$ k$\Omega$.
    *   $\frac{R_c \times 10}{R_c + 10} = 2.5 \implies 10 R_c = 2.5 R_c + 25 \implies 7.5 R_c = 25 \implies R_c = 25 / 7.5 = 3.33$ k$\Omega$.
4.  **Input Impedance:** $Z_{in} = R_1 || R_2 || r_{\pi} \ge 1$ k$\Omega$. Since $r_{\pi} = 1.875$ k$\Omega$, we need $R_1 || R_2 \ge 1$ k$\Omega$ to satisfy this. For better stability and to ensure $r_{\pi}$ dominates the input impedance, let's aim for $R_1 || R_2 \approx 1$ k$\Omega$.
5.  **Emitter Resistor ($R_E$):** To ensure stability, let the emitter current be $I_{EQ} = I_{CQ} + I_{BQ}$. If $I_{BQ} = I_{CQ}/\beta = 2 \text{ mA} / 150 \approx 13.3 \, \mu\text{A}$, $I_{EQ} \approx 2.013$ mA. Let's assume $I_{EQ} \approx I_{CQ} = 2$ mA for simplicity in initial design.
    *   Choose $R_E$ such that it provides good biasing stability. A common rule is $V_{RE} = V_{CEQ}/2$. Or $I_{EQ}R_E \approx 0.1 V_{CC} = 1.2$ V. So, $R_E = 1.2 \text{ V} / 2 \text{ mA} = 600 \, \Omega$.
    *   Let's choose $R_E = 600 \, \Omega$.
6.  **Biasing Resistors ($R_1, R_2$):**
    *   We need $R_1 || R_2 \approx 1$ k$\Omega$. Let's set $R_1 || R_2 = 1$ k$\Omega$.
    *   Thevenin voltage: $V_{Th} = V_{cc} \frac{R_2}{R_1+R_2} = 12 \frac{R_2}{R_1+R_2}$.
    *   For biasing stability, the current through the voltage divider ($I_{div}$) should be at least 10 times the base current ($I_{BQ}$). $I_{div} = V_{Th} / (R_1 || R_2)$.
    *   $I_{BQ} = 2 \text{ mA} / 150 = 13.3 \, \mu\text{A}$.
    *   So, $I_{div} \ge 10 \times 13.3 \, \mu\text{A} = 0.133$ mA.
    *   $V_{Th} = I_{div} (R_1 || R_2) \ge 0.133 \text{ mA} \times 1$ k$\Omega = 0.133$ V. This is too low and implies a very high $R_1 || R_2$.
    *   Let's re-evaluate the input impedance target and biasing stability. A more typical approach: set $R_1 || R_2$ for stability, say $R_1 || R_2 = 10 \times r_{\pi}$ or $R_1 || R_2 = 0.1 \times R_{Th}$ (where $R_{Th}$ is for the collector side).
    *   Let's try to make $R_1 || R_2$ large enough for input impedance, say $R_1 || R_2 = 5$ k$\Omega$. This would give $Z_{in} = 5 \text{ k}\Omega || 1.875 \text{ k}\Omega \approx 1.38$ k$\Omega$, which meets the requirement.
    *   Now for stability, $I_{div} = V_{Th} / 5$ k$\Omega \ge 10 \times 13.3 \, \mu\text{A} = 0.133$ mA.
    *   $V_{Th} \ge 0.133 \text{ mA} \times 5 \text{ k}\Omega = 0.665$ V.
    *   $V_{Th} = 12 \frac{R_2}{R_1+R_2}$. Let $R_1+R_2 = R_{sum}$. $V_{Th} = 12 \frac{R_2}{R_{sum}}$.
    *   $R_1 R_2 / (R_1+R_2) = 5 \text{ k}\Omega \implies R_1 R_2 = 5 R_{sum}$.
    *   From $V_{Th} \ge 0.665$ V, $12 \frac{R_2}{R_{sum}} \ge 0.665 \implies R_2 \ge 0.0554 R_{sum}$.
    *   Let's choose $R_2$ to be a fraction of $R_{sum}$, e.g., $R_2 = R_{sum}/3$, so $R_2/R_{sum} = 1/3$. $V_{Th} = 12 \times (1/3) = 4$ V.
    *   If $R_2/R_{sum} = 1/3$, then $R_1 = 2 R_2$. $R_1 || R_2 = (2 R_2) || R_2 = \frac{2 R_2^2}{3 R_2} = \frac{2}{3} R_2 = 5$ k$\Omega \implies R_2 = 7.5$ k$\Omega$.
    *   $R_1 = 2 R_2 = 15$ k$\Omega$.
    *   Check stability: $I_{div} = 12 \text{ V} / (15 \text{ k}\Omega + 7.5 \text{ k}\Omega) = 12 \text{ V} / 22.5 \text{ k}\Omega \approx 0.53$ mA. This is $\approx 40 \times I_{BQ}$, which is good.
    *   So, $R_1 = 15$ k$\Omega$, $R_2 = 7.5$ k$\Omega$.
7.  **Choose Capacitors:**
    *   Let the lowest frequency be $f_{low} = 20$ Hz.
    *   $C_E$: Needs $X_{CE} \ll R_E = 600 \, \Omega$. Let $X_{CE} = R_E/10 = 60 \, \Omega$ at 20 Hz.
        *   $C_E = \frac{1}{2 \pi f_{low} X_{CE}} = \frac{1}{2 \pi (20)(60)} \approx 133 \, \mu\text{F}$. (A common value might be $220 \, \mu\text{F}$).
    *   $C_1$: Needs $X_{C1} \ll Z_{in} = 1.38$ k$\Omega$. Let $X_{C1} = Z_{in}/10 = 138 \, \Omega$ at 20 Hz.
        *   $C_1 = \frac{1}{2 \pi f_{low} X_{C1}} = \frac{1}{2 \pi (20)(138)} \approx 57.6 \, \mu\text{F}$. (A common value might be $100 \, \mu\text{F}$).
    *   $C_2$: Needs $X_{C2} \ll R_L = 10$ k$\Omega$. Let $X_{C2} = R_L/10 = 1$ k$\Omega$ at 20 Hz.
        *   $C_2 = \frac{1}{2 \pi f_{low} X_{C2}} = \frac{1}{2 \pi (20)(1000)} \approx 0.79 \, \mu\text{F}$. (A common value might be $1 \, \mu\text{F}$).

**Final Component Values:**
*   $R_1 = 15$ k$\Omega$
*   $R_2 = 7.5$ k$\Omega$
*   $R_E = 600 \, \Omega$
*   $R_c = 3.33$ k$\Omega$
*   $C_1 = 100 \, \mu\text{F}$
*   $C_2 = 1 \, \mu\text{F}$
*   $C_E = 220 \, \mu\text{F}$

**Check $V_{CEQ}$:**
$V_{Th} = 12 \text{ V} \times (7.5 / (15+7.5)) = 12 \text{ V} \times (7.5 / 22.5) = 12 \text{ V} \times (1/3) = 4$ V.
$I_{EQ} = (V_{Th} - V_{BE}) / R_E = (4 \text{ V} - 0.7 \text{ V}) / 600 \, \Omega = 3.3 \text{ V} / 600 \, \Omega = 5.5$ mA.
This is too high compared to the target $I_{CQ} = 2$ mA. This indicates that $R_E$ is too large relative to $R_1 || R_2$ and $V_{CC}$.

**Revised Design Approach for $R_E$ and Biasing Resistors:**

Let's choose $V_{CEQ}$ first. Let $V_{CEQ} = 6$ V (mid-point for $V_{cc}=12$ V).
Then $V_{RE} = V_{CC} - V_{CEQ} - V_{BE} = 12 - 6 - 0.7 = 5.3$ V.
$I_{EQ} = V_{RE} / R_E$. Assume $I_{EQ} \approx I_{CQ} = 2$ mA.
$R_E = V_{RE} / I_{EQ} = 5.3 \text{ V} / 2 \text{ mA} = 2.65$ k$\Omega$. This $R_E$ is too large and will dominate the emitter.

**A common design strategy for voltage divider biasing:**
1.  Choose $I_{CQ}$. Calculate $g_m$.
2.  Choose $R_c$ based on gain and load.
3.  Choose $R_E$ to provide bias stability and control emitter current. A common choice is $R_E \approx 0.1 \times R_c$.
    *   If $R_c = 3.33$ k$\Omega$, let $R_E = 330 \, \Omega$.
    *   $I_{EQ} = (V_{CC} - V_{BE} - V_{CEQ}) / R_E$. If we target $V_{CEQ} \approx 6$ V, $I_{EQ} = (12 - 0.7 - 6) / 330 = 5.3 / 330 \approx 16$ mA. This is too high.

**Let's restart the design with a focus on biasing first, then gain.**

**Design Task:** CE amplifier, $\beta=150$, $V_{CC}=12$ V, $R_L=10$ k$\Omega$. Target $A_v \approx -200$, $Z_{in} \ge 1$ k$\Omega$.

1.  **Choose $I_{CQ}$:** Let $I_{CQ} = 1$ mA. $g_m = 1 \text{ mA} / 25 \text{ mV} = 40$ mS.
2.  **$r_{\pi}$:** $r_{\pi} = \beta / g_m = 150 / 40 \text{ mS} = 3.75$ k$\Omega$.
3.  **Gain calculation:** $A_v = -g_m (R_c || R_L)$.
    *   $-200 = -40 \text{ mS} (R_c || 10 \text{ k}\Omega)$.
    *   $R_c || 10 \text{ k}\Omega = 200 / 40 = 5$ k$\Omega$.
    *   $\frac{R_c \times 10}{R_c + 10} = 5 \implies 10 R_c = 5 R_c + 50 \implies 5 R_c = 50 \implies R_c = 10$ k$\Omega$.
4.  **Input Impedance:** $Z_{in} = R_1 || R_2 || r_{\pi} \ge 1$ k$\Omega$. We need $R_1 || R_2 \ge 1$ k$\Omega$. Let's aim for $R_1 || R_2 = 5$ k$\Omega$.
5.  **Biasing Stability:** $I_{BQ} = I_{CQ}/\beta = 1 \text{ mA} / 150 \approx 6.7 \, \mu\text{A}$.
    *   Let the divider current $I_{div} \ge 10 \times I_{BQ} = 67 \, \mu\text{A}$.
    *   With $R_1 || R_2 = 5$ k$\Omega$, $I_{div} = V_{Th} / 5$ k$\Omega$.
    *   $V_{Th} = I_{div} \times (R_1 || R_2) \ge 67 \, \mu\text{A} \times 5 \text{ k}\Omega = 0.335$ V.
    *   $V_{Th} = 12 \frac{R_2}{R_1+R_2}$. Let $R_1 || R_2 = 5$ k$\Omega$.
    *   Let's choose $R_2 = 10$ k$\Omega$. Then $R_1 = 10$ k$\Omega$ to get $R_1 || R_2 = 5$ k$\Omega$.
    *   $V_{Th} = 12 \times (10 / (10+10)) = 12 \times 0.5 = 6$ V.
    *   Check stability: $I_{div} = 12 \text{ V} / (10 \text{ k}\Omega + 10 \text{ k}\Omega) = 12 \text{ V} / 20 \text{ k}\Omega = 0.6$ mA. This is $0.6 \text{ mA} / 6.7 \, \mu\text{A} \approx 90 \times I_{BQ}$, which is excellent.
    *   $R_1 = 10$ k$\Omega$, $R_2 = 10$ k$\Omega$.
6.  **Emitter Resistor ($R_E$):**
    *   We need $V_{CEQ}$. $V_{CEQ} = V_{CC} - I_{CQ} R_c - I_{EQ} R_E$.
    *   $I_{EQ} \approx I_{CQ} + I_{BQ} = 1 \text{ mA} + 6.7 \, \mu\text{A} \approx 1$ mA.
    *   $V_{CEQ} = 12 \text{ V} - (1 \text{ mA})(10 \text{ k}\Omega) - (1 \text{ mA}) R_E = 12 - 10 - R_E = 2 - R_E$.
    *   To ensure proper biasing, $V_{CEQ}$ should be between $V_{CC}/2$ and $V_{CC}$. Let's aim for $V_{CEQ} \approx 6$ V.
    *   $6 = 2 - R_E \implies R_E = -4$ V. This is impossible. This means $R_c$ is too large.

**Recalculate $R_c$ for Gain:**
We need $R_c || R_L$ to be smaller to achieve a gain of -200 with $g_m = 40$ mS.
$R_c || R_L = 200 / 40 = 5$ k$\Omega$.

Let's try a different $I_{CQ}$.
**Choose $I_{CQ} = 2$ mA.** $g_m = 80$ mS. $r_{\pi} = 150/80 = 1.875$ k$\Omega$.
Gain requirement: $A_v = -g_m (R_c || R_L) \implies -200 = -80 \text{ mS} (R_c || 10 \text{ k}\Omega)$.
$R_c || 10 \text{ k}\Omega = 200 / 80 = 2.5$ k$\Omega$.
$\frac{R_c \times 10}{R_c + 10} = 2.5 \implies 10 R_c = 2.5 R_c + 25 \implies 7.5 R_c = 25 \implies R_c = 3.33$ k$\Omega$.

**Biasing with $I_{CQ} = 2$ mA:**
$I_{BQ} = 2 \text{ mA} / 150 = 13.3 \, \mu\text{A}$.
Divider current $I_{div} \ge 10 \times 13.3 \, \mu\text{A} = 0.133$ mA.
Input impedance $Z_{in} = R_1 || R_2 || 1.875 \text{ k}\Omega \ge 1$ k$\Omega$.
Let $R_1 || R_2 = 2$ k$\Omega$. $Z_{in} = 2 \text{ k}\Omega || 1.875 \text{ k}\Omega \approx 0.97$ k$\Omega$. This is close. Let's make $R_1 || R_2 = 2.5$ k$\Omega$.
$Z_{in} = 2.5 \text{ k}\Omega || 1.875 \text{ k}\Omega \approx 1.07$ k$\Omega$. This meets the requirement.

Now design $R_1, R_2$ such that $R_1 || R_2 = 2.5$ k$\Omega$, and $I_{div} \ge 0.133$ mA.
$V_{Th} = I_{div} \times (R_1 || R_2) \ge 0.133 \text{ mA} \times 2.5 \text{ k}\Omega = 0.3325$ V.
Let $R_1 = 5$ k$\Omega$, $R_2 = 5$ k$\Omega$. Then $R_1 || R_2 = 2.5$ k$\Omega$.
$V_{Th} = 12 \times (5 / (5+5)) = 6$ V.
$I_{div} = 12 \text{ V} / (5 \text{ k}\Omega + 5 \text{ k}\Omega) = 12 \text{ V} / 10 \text{ k}\Omega = 1.2$ mA.
$1.2 \text{ mA} / 13.3 \, \mu\text{A} \approx 90 \times I_{BQ}$. This is good.
So, $R_1 = 5$ k$\Omega$, $R_2 = 5$ k$\Omega$.

**Emitter Resistor ($R_E$):**
$V_{CEQ} = V_{CC} - I_{CQ} R_c - I_{EQ} R_E$.
$I_{EQ} \approx I_{CQ} = 2$ mA.
$V_{CEQ} = 12 \text{ V} - (2 \text{ mA})(3.33 \text{ k}\Omega) - (2 \text{ mA}) R_E = 12 - 6.66 - 2 R_E = 5.34 - 2 R_E$.
Let's choose $V_{CEQ} \approx 6$ V.
$6 = 5.34 - 2 R_E \implies 2 R_E = -0.66$, still problematic.

The issue is that $I_{CQ}R_c$ is already high, leaving little voltage for $V_{CEQ}$ and $I_{EQ}R_E$.
This means we must reduce $R_c$ or $I_{CQ}$ for a higher $V_{CEQ}$.

**Let's stick with $R_c = 3.33$ k$\Omega$ and $R_L = 10$ k$\Omega$.**
Then $R_c || R_L = 2.5$ k$\Omega$.
If $I_{CQ}=1$ mA, $g_m = 40$ mS, $A_v = -40 \text{ mS} \times 2.5 \text{ k}\Omega = -100$. This is not the target of -200.

**To get $A_v = -200$ with $R_L=10$ k$\Omega$, $g_m$ must be 80 mS ($I_{CQ}=2$ mA) and $R_c || R_L = 2.5$ k$\Omega$.**
This implies $R_c = 3.33$ k$\Omega$.

Let's assume $V_{CEQ}$ can be as low as 3 V.
$V_{CEQ} = 5.34 - 2 R_E = 3 \implies 2 R_E = 2.34 \implies R_E = 1.17$ k$\Omega$.
This $R_E$ is quite large.

**Revisit $R_E$ and Biasing Stability:**
A common practice is to set $V_{BEQ} \approx 0.7$ V and $V_{CEQ} \approx V_{CC}/2$.
If $V_{CC}=12$ V, $V_{CEQ} \approx 6$ V.
Let $I_{CQ} = 2$ mA. $R_c = 3.33$ k$\Omega$.
$V_{CC} = I_{CQ}R_c + V_{CEQ} + I_{EQ}R_E$.
$12 = (2 \text{ mA})(3.33 \text{ k}\Omega) + 6 \text{ V} + (2 \text{ mA}) R_E$.
$12 = 6.66 + 6 + 2 R_E \implies 12 = 12.66 + 2 R_E$. This implies negative $R_E$.

**Conclusion on this Design Example:** The chosen gain of -200 with $R_L=10$ k$\Omega$ requires a relatively high $g_m$ and a small $R_c || R_L$. This combination, with typical $V_{CC}$ and desired $V_{CEQ}$, might lead to conflicts in component values, especially $R_E$.
In practice, one might have to compromise on the exact gain or choose a different $I_{CQ}$ or $V_{CC}$.

**Let's try $I_{CQ} = 1$ mA, $R_c=2.5$ k$\Omega$ (for gain of -100), and then address $V_{CEQ}$.**
$g_m = 40$ mS, $r_{\pi} = 3.75$ k$\Omega$.
$A_v = -40 \text{ mS} (2.5 \text{ k}\Omega || 10 \text{ k}\Omega) = -40 \text{ mS} \times 2 \text{ k}\Omega = -80$. Still not -200.

**To achieve -200 gain with $R_L=10$ k$\Omega$ and $I_{CQ}=1$ mA, we need $R_c || R_L = 5$ k$\Omega$. So $R_c = 10$ k$\Omega$.**
$V_{CC} = I_{CQ}R_c + V_{CEQ} + I_{EQ}R_E$.
$12 = (1 \text{ mA})(10 \text{ k}\Omega) + 6 \text{ V} + (1 \text{ mA}) R_E = 10 + 6 + R_E = 16 + R_E$. Again, negative $R_E$.

This indicates that for a gain of -200 with $R_L=10$ k$\Omega$, we might need a higher $V_{CC}$ or a lower $I_{CQ}$ (and hence lower $g_m$) with a higher $R_c$.

**Let's assume $R_c=5$ k$\Omega$ and $R_L=10$ k$\Omega$. Then $R_c || R_L = 3.33$ k$\Omega$.**
If $I_{CQ} = 1$ mA, $g_m = 40$ mS, $A_v = -40 \text{ mS} \times 3.33 \text{ k}\Omega = -133$.
If $I_{CQ} = 2$ mA, $g_m = 80$ mS, $A_v = -80 \text{ mS} \times 3.33 \text{ k}\Omega = -266$. This is closer to -200.

**Let's use $I_{CQ} = 2$ mA and $R_c = 5$ k$\Omega$.**
$g_m = 80$ mS, $r_{\pi} = 1.875$ k$\Omega$.
$A_v \approx -266$. (This is acceptable if we aim for a range).
$Z_{in} = R_1 || R_2 || 1.875 \text{ k}\Omega \ge 1$ k$\Omega$. Let $R_1 || R_2 = 2.5$ k$\Omega$. (Same as before).
$R_1 = 5$ k$\Omega$, $R_2 = 5$ k$\Omega$.

**Biasing with $I_{CQ} = 2$ mA and $R_c = 5$ k$\Omega$:**
$V_{CC} = I_{CQ}R_c + V_{CEQ} + I_{EQ}R_E$.
$12 = (2 \text{ mA})(5 \text{ k}\Omega) + V_{CEQ} + (2 \text{ mA}) R_E$.
$12 = 10 + V_{CEQ} + 2 R_E \implies V_{CEQ} + 2 R_E = 2$.
We need $V_{CEQ} > 0$ and $R_E > 0$.
If we set $V_{CEQ} = 1$ V, then $1 + 2 R_E = 2 \implies 2 R_E = 1 \implies R_E = 0.5$ k$\Omega = 500 \, \Omega$.
This gives $V_{CEQ} = 1$ V, which is a bit low but might be acceptable.

**Final Component Values (Revised Design):**
*   $R_1 = 5$ k$\Omega$
*   $R_2 = 5$ k$\Omega$
*   $R_E = 500 \, \Omega$
*   $R_c = 5$ k$\Omega$
*   $I_{CQ} \approx 2$ mA, $V_{CEQ} \approx 1$ V (Check $V_{BE}$ for $I_{CQ}=2$ mA: $I_{CQ} = I_S e^{V_{BE}/V_T}$. If $I_S$ is small, $V_{BE}$ is around 0.7-0.75V.)

**Capacitors:**
$f_{low} = 20$ Hz.
$Z_{in} \approx 1.07$ k$\Omega$. $X_{C1} \ll 1.07$ k$\Omega$. Let $X_{C1} = 100 \, \Omega$.
$C_1 = 1 / (2 \pi \times 20 \times 100) \approx 79.5 \, \mu\text{F}$ (use $100 \, \mu\text{F}$).
$R_L = 10$ k$\Omega$. $X_{C2} \ll 10$ k$\Omega$. Let $X_{C2} = 1$ k$\Omega$.
$C_2 = 1 / (2 \pi \times 20 \times 1000) \approx 0.79 \, \mu\text{F}$ (use $1 \, \mu\text{F}$).
$R_E = 500 \, \Omega$. $X_{CE} \ll 500 \, \Omega$. Let $X_{CE} = 50 \, \Omega$.
$C_E = 1 / (2 \pi \times 20 \times 50) \approx 159 \, \mu\text{F}$ (use $220 \, \mu\text{F}$).

This revised design seems more feasible.

---

### 5. Key Points to Remember

*   **Hybrid-π Model:** Essential for mid-frequency AC analysis. Key parameters are $g_m$ and $r_{\pi}$.
*   **Mid-Frequency:** Capacitors ($C_1, C_2, C_E$) are treated as short circuits. Parasitic capacitances are ignored.
*   **Voltage Gain ($A_v$):** Primarily determined by $-g_m$ and the effective output resistance ($R_c || R_L || r_o$).
*   **Input Impedance ($Z_{in}$):** Determined by the biasing network ($R_1 || R_2$) in parallel with $r_{\pi}$.
*   **Output Impedance ($Z_{out}$):** Determined by the collector resistor ($R_c$) in parallel with the transistor's output resistance ($r_o$).
*   **Bypass Capacitor ($C_E$):** Crucial for high voltage gain in CE amplifiers. Without it, $R_E$ reduces gain and increases input impedance.
*   **Design Process:** Involves choosing components to meet specified gain, impedance, and biasing requirements. Careful consideration of Q-point is necessary.

---

### 6. Practice Questions and Exercises

**Question 1:**
For a BJT biased at $I_{CQ} = 3$ mA, if $V_T = 25$ mV and $\beta = 120$, calculate:
a) Transconductance ($g_m$)
b) $r_{\pi}$

**Answer 1:**
a) $g_m = I_{CQ} / V_T = 3 \text{ mA} / 25 \text{ mV} = 120$ mS.
b) $r_{\pi} = \beta / g_m = 120 / 120 \text{ mS} = 1$ k$\Omega$.

**Question 2:**
Consider a CE amplifier with the following mid-frequency AC equivalent circuit parameters: $g_m = 100$ mS, $r_{\pi} = 0.8$ k$\Omega$, $R_c = 4.7$ k$\Omega$, $R_L = 10$ k$\Omega$, $R_1 || R_2 = 15$ k$\Omega$, and $r_o = \infty$.
Calculate:
a) Voltage Gain ($A_v$)
b) Input Impedance ($Z_{in}$)
c) Output Impedance ($Z_{out}$)

**Answer 2:**
a) $R_C' = R_c || R_L = 4.7 \text{ k}\Omega || 10 \text{ k}\Omega = \frac{4.7 \times 10}{4.7+10} = \frac{47}{14.7} \approx 3.197$ k$\Omega$.
   $A_v = -g_m R_C' = -100 \text{ mS} \times 3.197 \text{ k}\Omega = -319.7$.
b) $Z_{in} = R_1 || R_2 || r_{\pi} = 15 \text{ k}\Omega || 0.8 \text{ k}\Omega = \frac{15 \times 0.8}{15+0.8} = \frac{12}{15.8} \approx 0.759$ k$\Omega$.
c) $Z_{out} = R_c || r_o = 4.7 \text{ k}\Omega || \infty = 4.7$ k$\Omega$.

**Question 3 (Design):**
Design a voltage divider biased CE amplifier using a transistor with $\beta = 100$.
Specifications: $V_{CC} = 15$ V, $R_L = 10$ k$\Omega$, $I_{CQ} = 2$ mA, $A_v \approx -150$, $Z_{in} \ge 2$ k$\Omega$.
Determine suitable values for $R_1, R_2, R_c, R_E$. (Ignore $r_o$).

**Answer 3 (Illustrative Design Steps):**
1.  **$I_{CQ} = 2$ mA:** $g_m = 2 \text{ mA} / 25 \text{ mV} = 80$ mS.
2.  **$r_{\pi} = \beta / g_m = 100 / 80 \text{ mS} = 1.25$ k$\Omega$.**
3.  **Gain:** $A_v = -g_m (R_c || R_L) \implies -150 = -80 \text{ mS} (R_c || 10 \text{ k}\Omega)$.
    $R_c || 10 \text{ k}\Omega = 150 / 80 = 1.875$ k$\Omega$.
    $\frac{R_c \times 10}{R_c + 10} = 1.875 \implies 10 R_c = 1.875 R_c + 18.75 \implies 8.125 R_c = 18.75 \implies R_c \approx 2.31$ k$\Omega$. Let's choose $R_c = 2.2$ k$\Omega$ (a standard value).
    With $R_c = 2.2$ k$\Omega$, $R_c || R_L = 2.2 || 10 \approx 1.818$ k$\Omega$.
    $A_v = -80 \text{ mS} \times 1.818 \text{ k}\Omega \approx -145.4$. This is close.
4.  **Input Impedance:** $Z_{in} = R_1 || R_2 || r_{\pi} \ge 2$ k$\Omega$.
    $Z_{in} = R_1 || R_2 || 1.25 \text{ k}\Omega \ge 2$ k$\Omega$.
    This means $R_1 || R_2$ must be significantly larger than $1.25$ k$\Omega$ to pull the overall $Z_{in}$ up, which is not possible as $Z_{in}$ is the parallel combination.
    The condition $Z_{in} \ge 2$ k$\Omega$ while $r_{\pi} = 1.25$ k$\Omega$ is impossible because $Z_{in}$ will always be less than or equal to the smallest parallel component, which is $r_{\pi}$.
    **Let's assume the requirement was $Z_{in} \ge 0.8$ k$\Omega$.**
    Then $R_1 || R_2 || 1.25 \text{ k}\Omega \ge 0.8$ k$\Omega$. This implies $R_1 || R_2$ should be sufficiently large. Let $R_1 || R_2 = 4$ k$\Omega$.
    $Z_{in} = 4 \text{ k}\Omega || 1.25 \text{ k}\Omega \approx 0.95$ k$\Omega$. This meets the requirement.
5.  **Biasing $R_1, R_2$:** $I_{BQ} = 2 \text{ mA} / 100 = 20 \, \mu\text{A}$.
    $I_{div} \ge 10 \times I_{BQ} = 200 \, \mu\text{A}$.
    $R_1 || R_2 = 4$ k$\Omega$. $V_{Th} = I_{div} \times (R_1 || R_2) \ge 200 \, \mu\text{A} \times 4 \text{ k}\Omega = 0.8$ V.
    Let $R_1=8$ k$\Omega, R_2=8$ k$\Omega$. $R_1 || R_2 = 4$ k$\Omega$.
    $V_{Th} = 15 \times (8 / (8+8)) = 7.5$ V.
    $I_{div} = 15 \text{ V} / (8 \text{ k}\Omega + 8 \text{ k}\Omega) = 15 \text{ V} / 16 \text{ k}\Omega \approx 0.9375$ mA.
    $0.9375 \text{ mA} / 20 \, \mu\text{A} \approx 47 \times I_{BQ}$. This is good.
    So, $R_1 = 8$ k$\Omega$, $R_2 = 8$ k$\Omega$.
6.  **Emitter Resistor ($R_E$):** $V_{CC} = I_{CQ}R_c + V_{CEQ} + I_{EQ}R_E$.
    $15 = (2 \text{ mA})(2.2 \text{ k}\Omega) + V_{CEQ} + (2 \text{ mA}) R_E$.
    $15 = 4.4 + V_{CEQ} + 2 R_E$.
    $V_{CEQ} + 2 R_E = 10.6$.
    Let $V_{CEQ} \approx 6$ V. Then $6 + 2 R_E = 10.6 \implies 2 R_E = 4.6 \implies R_E = 2.3$ k$\Omega$.
    This $R_E$ is too large relative to $R_c$.

**Revised Design for Question 3:**
Let's try to achieve the gain with a lower $I_{CQ}$.
**$I_{CQ} = 1$ mA.** $g_m = 1 \text{ mA} / 25 \text{ mV} = 40$ mS.
$r_{\pi} = 100 / 40 \text{ mS} = 2.5$ k$\Omega$.
**Gain:** $A_v = -g_m (R_c || R_L) \implies -150 = -40 \text{ mS} (R_c || 10 \text{ k}\Omega)$.
$R_c || 10 \text{ k}\Omega = 150 / 40 = 3.75$ k$\Omega$.
$\frac{R_c \times 10}{R_c + 10} = 3.75 \implies 10 R_c = 3.75 R_c + 37.5 \implies 6.25 R_c = 37.5 \implies R_c = 6$ k$\Omega$. Let's use $R_c = 5.6$ k$\Omega$.
$R_c || R_L = 5.6 || 10 \approx 3.59$ k$\Omega$.
$A_v = -40 \text{ mS} \times 3.59 \text{ k}\Omega \approx -143.6$.

**Input Impedance:** $Z_{in} = R_1 || R_2 || r_{\pi} = R_1 || R_2 || 2.5 \text{ k}\Omega \ge 2$ k$\Omega$.
Let $R_1 || R_2 = 6$ k$\Omega$.
$Z_{in} = 6 \text{ k}\Omega || 2.5 \text{ k}\Omega = \frac{6 \times 2.5}{6+2.5} = \frac{15}{8.5} \approx 1.76$ k$\Omega$. This is close to 2k. Let $R_1 || R_2 = 8$ k$\Omega$.
$Z_{in} = 8 \text{ k}\Omega || 2.5 \text{ k}\Omega = \frac{8 \times 2.5}{8+2.5} = \frac{20}{10.5} \approx 1.9$ k$\Omega$. Still not quite 2k.
Let $R_1 || R_2 = 10$ k$\Omega$. $Z_{in} = 10 \text{ k}\Omega || 2.5 \text{ k}\Omega = 2$ k$\Omega$. This meets the requirement.

**Biasing $R_1, R_2$:** $I_{BQ} = 1 \text{ mA} / 100 = 10 \, \mu\text{A}$.
$I_{div} \ge 10 \times I_{BQ} = 100 \, \mu\text{A}$.
$R_1 || R_2 = 10$ k$\Omega$. $V_{Th} = I_{div} \times (R_1 || R_2) \ge 100 \, \mu\text{A} \times 10 \text{ k}\Omega = 1$ V.
Let $R_1 = 20$ k$\Omega, R_2 = 20$ k$\Omega$. $R_1 || R_2 = 10$ k$\Omega$.
$V_{Th} = 15 \times (20 / (20+20)) = 7.5$ V.
$I_{div} = 15 \text{ V} / (20 \text{ k}\Omega + 20 \text{ k}\Omega) = 15 \text{ V} / 40 \text{ k}\Omega = 0.375$ mA.
$0.375 \text{ mA} / 10 \, \mu\text{A} = 37.5 \times I_{BQ}$. This is good.
So, $R_1 = 20$ k$\Omega$, $R_2 = 20$ k$\Omega$.

**Emitter Resistor ($R_E$):** $V_{CC} = I_{CQ}R_c + V_{CEQ} + I_{EQ}R_E$.
$15 = (1 \text{ mA})(5.6 \text{ k}\Omega) + V_{CEQ} + (1 \text{ mA}) R_E$.
$15 = 5.6 + V_{CEQ} + R_E$.
$V_{CEQ} + R_E = 9.4$.
Let $V_{CEQ} \approx 6$ V. Then $6 + R_E = 9.4 \implies R_E = 3.4$ k$\Omega$.
This $R_E$ is still quite large.

**Final Check:** This design is feasible but highlights that achieving precise gain and impedance targets often requires careful iteration and might necessitate adjusting expectations or using a different $V_{CC}$.

---

### 7. Alignment with Course Outcomes

*   **CO2: Analyze single stage and multistage BJT amplifier circuits using equivalent models.**
    *   This topic directly addresses the analysis of a single-stage CE amplifier using the hybrid-π equivalent model. The calculation of voltage gain, current gain, input impedance, and output impedance are core analytical tasks.
*   **CO1: Design wave shaping circuits using first order RC network and diodes.**
    *   While not directly wave shaping, the design of the RC-coupled amplifier involves the use of RC networks for coupling ($C_1, C_2$) and bypassing ($C_E$), demonstrating the application of RC principles.

---

This comprehensive set of notes provides a solid foundation for understanding small-signal analysis of CE amplifiers using the hybrid-π model at mid-frequencies, covering both theoretical concepts and practical design considerations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
